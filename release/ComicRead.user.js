// ==UserScript==
// @name            ComicRead
// @name:en         ComicRead
// @namespace       ComicRead
// @version         12.11.0
// @author          hymbz
// @license         AGPL-3.0-or-later
// @noframes
// @match           *://*/*
// @connect         yamibo.com
// @connect         exhentai.org
// @connect         e-hentai.org
// @connect         hath.network
// @connect         nhentai.net
// @connect         gold-usergeneratedcontent.net
// @connect         hypergryph.com
// @connect         mangabz.com
// @connect         schale.network
// @connect         touhou.ai
// @connect         jsdelivr.net
// @connect         npmmirror.com
// @connect         self
// @connect         127.0.0.1
// @connect         *
// @connect         mapi.elfgjfghkk.club
// @connect         api.2024manga.com
// @connect         mapi.fgjfghkk.club
// @connect         mapi.hotmangasg.com
// @connect         mapi.fgjfghkkcenter.club
// @connect         www.manga2026.xyz
// @connect         mapi.hotmangasf.com
// @connect         mapi.hotmangasd.com
// @connect         www.manga2025.com
// @connect         api.manga2025.com
// @connect         m.manga2025.com
// @connect         api.copy4000.com
// @connect         api.2026copy.com
// @connect         api.mangacopy.com
// @connect         api.copy3000.com
// @connect         mapi.copy20.com
// @grant           GM_addElement
// @grant           GM_getResourceText
// @grant           GM_xmlhttpRequest
// @grant           GM.addValueChangeListener
// @grant           GM.removeValueChangeListener
// @grant           GM.getResourceText
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM.listValues
// @grant           GM.deleteValue
// @grant           GM.registerMenuCommand
// @grant           GM.unregisterMenuCommand
// @grant           unsafeWindow
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUxpcWB9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i////198il17idng49DY3PT297/K0MTP1M3X27rHzaCxupmstbTByK69xOfr7bfFy3WOmqi4wPz9/X+XomSBjqW1vZOmsN/l6GmFkomeqe7x8vn6+kv+1vUAAAAOdFJOUwDsAoYli9zV+lIqAZEDwV05SQAAAUZJREFUOMuFk+eWgjAUhGPBiLohjZACUqTp+z/gJkqJy4rzg3Nn+MjhwB0AANjv4BEtdITBHjhtQ4g+CIZbC4Qb9FGb0J4P0YrgCezQqgIA14EDGN8fYz+f3BGMASFkTJ+GDAYMUSONzrFL7SVvjNQIz4B9VERRmV0rbJWbrIwidnsd6ACMlEoip3uad3X2HJmqb3gCkkJELwk5DExRDxA6HnKaDEPSsBnAsZoANgJaoAkg12IJqBiPACImXQKF9IDULIHUkOk7kDpeAMykHqCEWACy8ACdSM7LGSg5F3HtAU1rrkaK9uGAshXS2lZ5QH/nVhmlD8rKlmbO3ZsZwLe8qnpdxJRnLaci1X1V5R32fjd5CndVkfYdGpy3D+htU952C/ypzPtdt3JflzZYBy7fi/O1euvl/XH1Pp+Cw3/1P1xOZwB+AWMcP/iw0AlKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGl0cGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC
// @resource        solid-js https://registry.npmmirror.com/solid-js/1.9.8/files/dist/solid.cjs
// @resource        fflate https://registry.npmmirror.com/fflate/0.8.2/files/umd/index.js
// @resource        jsqr https://registry.npmmirror.com/jsqr/1.4.0/files/dist/jsQR.js
// @resource        comlink https://registry.npmmirror.com/comlink/4.4.2/files/dist/umd/comlink.min.js
// @resource        solid-js|store https://registry.npmmirror.com/solid-js/1.9.8/files/store/dist/store.cjs
// @resource        solid-js|web https://registry.npmmirror.com/solid-js/1.9.8/files/web/dist/web.cjs
// @resource        _tensorflow|tfjs https://registry.npmmirror.com/@tensorflow/tfjs/4.22.0/files/dist/tf.min.js
// @resource        _tensorflow|tfjs-backend-webgpu https://registry.npmmirror.com/@tensorflow/tfjs-backend-webgpu/4.22.0/files/dist/tf-backend-webgpu.js
// @supportURL      https://github.com/hymbz/ComicReadScript/issues
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/ComicRead.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/ComicRead.meta.js
// ==/UserScript==
const libCodeMap={"helper/languages":`
//#region src/helper/languages.ts
const langList = [
	"zh",
	"en",
	"ru"
];
/** \u5224\u65AD\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u662F\u5426\u662F\u652F\u6301\u7684\u8BED\u8A00\u7C7B\u578B\u4EE3\u7801 */
const isLanguages = (lang) => Boolean(lang) && langList.includes(lang);
/** \u8FD4\u56DE\u6D4F\u89C8\u5668\u504F\u597D\u8BED\u8A00 */
const getBrowserLang = () => {
	for (const language of navigator.languages) {
		const matchLang = langList.find((l) => l === language.split("-")[0]);
		if (matchLang) return matchLang;
	}
};
const getSaveLang = () => typeof GM === "undefined" ? "zh" : GM.getValue("@Languages");
const setSaveLang = (val) => typeof GM === "undefined" || GM.setValue("@Languages", val);
const getInitLang = async () => {
	const saveLang = await getSaveLang();
	if (isLanguages(saveLang)) return saveLang;
	const lang = getBrowserLang() ?? "zh";
	setSaveLang(lang);
	return lang;
};
//#endregion
exports.getInitLang = getInitLang;
exports.isLanguages = isLanguages;
exports.langList = langList;
exports.setSaveLang = setSaveLang;
`,helper:`
let solid_js_web = require("solid-js/web");
let helper_languages = require("helper/languages");
let solid_js = require("solid-js");
let solid_js_store = require("solid-js/store");
//#region src/helper/components.ts
const getDom = (id) => {
	let dom = document.getElementById(id);
	if (dom) {
		dom.innerHTML = "";
		return dom;
	}
	dom = document.createElement("div");
	dom.id = id;
	document.body.append(dom);
	return dom;
};
/** \u6302\u8F7D solid-js \u7EC4\u4EF6 */
const mountComponents = (id, fc) => {
	const dom = getDom(id);
	dom.style.setProperty("display", "unset", "important");
	const shadowDom = dom.attachShadow({ mode: "closed" });
	solid_js_web.render(fc, shadowDom);
	return dom;
};
//#endregion
//#region src/helper/faviconProgress.ts
var FaviconProgress = class {
	initLink;
	color;
	canvas;
	ctx;
	link;
	constructor(color = "#607D8B") {
		this.color = color;
		this.canvas = document.createElement("canvas");
		this.canvas.width = 32;
		this.canvas.height = 32;
		this.ctx = this.canvas.getContext("2d");
		const existingLink = document.querySelector("link[rel~='icon']");
		if (existingLink) this.link = existingLink;
		else {
			const link = document.createElement("link");
			link.type = "image/x-icon";
			link.rel = "icon";
			document.head.append(link);
			this.link = link;
		}
		this.initLink = this.link.href || "/favicon.ico";
	}
	update(progress) {
		this.ctx.clearRect(0, 0, 32, 32);
		this.ctx.beginPath();
		this.ctx.arc(16, 16, 16, 0, Math.PI * 2);
		this.ctx.fillStyle = "#FAFAFA";
		this.ctx.fill();
		const startAngle = -Math.PI / 2;
		const endAngle = Math.PI * 2 * progress + startAngle;
		this.ctx.beginPath();
		this.ctx.moveTo(16, 16);
		this.ctx.arc(16, 16, 16, startAngle, endAngle);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
		this.updateFavicon();
	}
	updateFavicon() {
		if (!this.link || !this.canvas) return;
		this.link.href = this.canvas.toDataURL("image/png");
	}
	/** \u6062\u590D\u9ED8\u8BA4\u56FE\u6807 */
	recover() {
		if (!this.link || !this.initLink) return;
		this.link.href = this.initLink;
	}
};
const useFaviconProgress = () => {};
//#endregion
//#region locales/en.json
var en_default = {
	alert: {
		"comic_load_error": "Comic loading error",
		"download_failed": "Download failed",
		"fetch_comic_img_failed": "Failed to fetch comic images",
		"img_load_failed": "Image loading failed",
		"no_img_download": "No downloadable images",
		"repeat_load": "Fetching image, please wait",
		"retry_get_img_url": "Re-fetch the image URL for page {{i}}",
		"server_connect_failed": "Unable to connect to the server"
	},
	button: {
		"auto_scroll": "Auto scroll",
		"close_current_page_translation": "Close current page translation",
		"download_completed": "Download completed",
		"download_completed_error": "Download completed, but {{errorNum}} images failed to download",
		"downloading": "Downloading",
		"fullscreen": "Fullscreen",
		"fullscreen_exit": "Exit fullscreen",
		"packaging": "Packaging",
		"page_fill": "Page fill",
		"page_mode_double": "Double page mode",
		"page_mode_single": "Single page mode",
		"scroll_mode": "Scroll mode",
		"translate_current_page": "Translate current page",
		"zoom_in": "Zoom in",
		"zoom_out": "Zoom out"
	},
	description: "Add dual-page reading, translation and other enhancements to comic sites.",
	eh_tag_lint: {
		"combo": "[tag]: In most cases, should coexist with [tag]",
		"conflict": "[tag]: should not coexist with [tag]",
		"correct_tag": "should be the correct tag",
		"miss_female": "Missing male tag, might need",
		"miss_parody": "Missing parody tag, might need",
		"possible_conflict": "[tag]: In most cases, should not coexist with [tag]",
		"prerequisite": "[tag]: The prerequisite tag [tag] does not exist"
	},
	end_page: {
		"next_button": "Next chapter",
		"prev_button": "Prev chapter",
		"tip": {
			"end_jump": "Reached the last page, scrolling down will jump to the next chapter",
			"exit": "Reached the last page, scrolling down will exit",
			"start_jump": "Reached the first page, scrolling up will jump to the previous chapter"
		}
	},
	hotkeys: {
		"enter_read_mode": "Enter reading mode",
		"float_tag_list": "Floating tag list",
		"jump_next": "Jump to next chapter",
		"jump_prev": "Jump to previous chapter",
		"jump_to_end": "Jump to the last page",
		"jump_to_home": "Jump to the first page",
		"multi_select_load": "Multi-select load",
		"page_down": "Turn page down",
		"page_up": "Turn page up",
		"reload_current_error_img": "Reload current error image",
		"repeat_tip": "This hotkey has been bound to \\"{{hotkey}}\\"",
		"scroll_down": "Scroll down",
		"scroll_left": "Scroll left",
		"scroll_right": "Scroll right",
		"scroll_up": "Scroll up",
		"switch_auto_enlarge": "Switch image auto-enlarge",
		"switch_dir": "Switch reading direction",
		"switch_page_fill": "Switch page fill",
		"switch_scroll_mode": "Switch scroll mode",
		"switch_single_double_page_mode": "Switch single/double page mode"
	},
	img_status: {
		"error": "load error",
		"loading": "loading",
		"wait": "waiting for load"
	},
	other: {
		"auto": "Auto",
		"cancel": "Cancel",
		"clear": "Clear",
		"confirm": "OK",
		"custom": "Custom",
		"disable": "Disable",
		"distance": "Distance",
		"download": "Download",
		"enabled": "Enabled",
		"enter_comic_read_mode": "Enter comic reading mode",
		"enter_password": "Enter password",
		"exit": "Exit",
		"fab_hidden": "Hide floating button",
		"fab_show": "Show floating button",
		"fill_page": "Fill page",
		"hotkeys": "Hotkeys",
		"img_loading": "Image loading",
		"interval": "Interval",
		"loading_img": "Fetching image",
		"multi_select_mode": "Multi-select mode",
		"none": "None",
		"or": "or",
		"other": "Other",
		"page_range": "Please enter the page range:\\n (e.g., 1, 3-5, 9-)",
		"read_mode": "Reading mode",
		"selected": "Selected",
		"setting": "Settings"
	},
	pwa: {
		"alert": {
			"img_data_error": "Image data error",
			"img_not_found": "Image not found",
			"img_not_found_files": "Please select an image file or a compressed file containing image files",
			"img_not_found_folder": "No image files or compressed files containing image files in the folder",
			"not_valid_url": "Not a valid URL",
			"parse_error": "Parsing error",
			"password_error": "Incorrect password",
			"repeat_load": "Loading other files\u2026",
			"userscript_not_installed": "ComicRead userscript not installed"
		},
		"button": {
			"enter_url": "Enter URL",
			"install": "Install",
			"no_more_prompt": "Do not prompt again",
			"resume_read": "Restore reading",
			"select_files": "Select file",
			"select_folder": "Select folder"
		},
		"install_md": "### Tired of opening this webpage every time?\\nIf you wish to:\\n1. Have an independent window, as if using local software\\n1. Add to the local compressed file opening method for easy direct opening\\n1. Use offline\\n### Welcome to install this page as a PWA app on your computer\u{1F603}\u{1F44D}",
		"message": {
			"enter_password": "Please enter your password",
			"parsing": "Parsing"
		},
		"tip_enter_url": "Enter compressed file URL",
		"tip_md": "# ComicRead PWA\\nRead **local** comics using [ComicRead](https://github.com/hymbz/ComicReadScript) reading mode.\\n---\\n### Drag and drop image files, folders, or compressed files directly to start reading\\n*You can also choose to **paste directly** or **enter** the URL of the compressed file for downloading and reading*"
	},
	setting: {
		"hotkeys": {
			"add": "Add new hotkeys",
			"restore": "Restore default hotkeys"
		},
		"language": "Language",
		"option": {
			"abreast_duplicate": "Column duplicate ratio",
			"abreast_mode": "Abreast scroll mode",
			"adjust_to_width": "Adaptive width",
			"align_edge": "Align to edge when scrolling",
			"always_load_all_img": "Always load all images",
			"auto_fullscreen": "Auto fullscreen",
			"auto_hidden_mouse": "Auto hide mouse",
			"auto_scale": "Auto scale",
			"auto_scroll_continuous": "Continuous scroll",
			"auto_scroll_trigger_end": "Continue scrolling on the end page",
			"auto_switch_page_mode": "Auto switch single/double page mode by screen ratio",
			"background_color": "Background color",
			"click_page_turn_area": "Click area",
			"click_page_turn_enabled": "Click to turn page",
			"click_page_turn_swap_area": "Swap LR clickable areas",
			"dark_mode": "Dark mode",
			"dark_mode_auto": "Follow system dark mode",
			"dir_ltr": "LTR (American comics)",
			"dir_rtl": "RTL (Japanese manga)",
			"disable_auto_enlarge": "Disable image auto-enlarge",
			"first_page_fill": "Enable first page fill by default",
			"full_width": "Viewport width",
			"img_filter": "Image filter",
			"img_filter_brightness": "Brightness",
			"img_filter_contrast": "Contrast",
			"img_filter_saturate": "Saturation",
			"img_recognition": "Image recognition",
			"img_recognition_background": "Recognition background color",
			"img_recognition_crop": "Edge cropping",
			"img_recognition_keepMargin": "Keep margin",
			"img_recognition_pageFill": "Auto adjust page fill",
			"img_recognition_warn": "\u2757 The current browser does not support Web Workers. Enabling this feature may cause page lag. It's recommended to upgrade or switch browsers.",
			"img_recognition_warn_2": "\u2757 The current website does not support Web Workers. Enabling this feature may cause page lag.",
			"page_columns": "Pages per row",
			"page_tip": "Page number tip",
			"page_tip_always": "Always",
			"page_tip_auto": "Auto",
			"page_tip_hide": "Hidden",
			"paragraph_appearance": "Appearance",
			"paragraph_dir": "Reading direction",
			"paragraph_display": "Display",
			"paragraph_scrollbar": "Scrollbar",
			"paragraph_translation": "Translation",
			"preload_page_num": "Preload page count",
			"scroll_animation_duration": "Scroll animation duration",
			"scroll_end": "After reaching the end",
			"scroll_end_auto": "Prefer prev/next chapter, else exit",
			"scroll_mode_img_scale": "Scroll mode image zoom ratio",
			"scroll_mode_img_spacing": "Scroll mode image spacing",
			"scrollbar_auto_hidden": "Auto hide",
			"scrollbar_easy_scroll": "Quick scroll",
			"scrollbar_position": "Position",
			"scrollbar_position_bottom": "Bottom",
			"scrollbar_position_hidden": "Hidden",
			"scrollbar_position_right": "Right",
			"scrollbar_position_top": "Top",
			"scrollbar_show_img_status": "Show image loading status",
			"show_clickable_area": "Show clickable areas",
			"show_comments": "Show comments on the end page",
			"shrink_menu": "Shrink menu area",
			"swap_page_turn_key": "Swap LR page-turning keys",
			"turn_page_animation_duration": "Page turn animation duration",
			"zoom": "Image zoom ratio"
		},
		"sync_options_other_site": "Sync read options to other sites",
		"translation": {
			"cotrans_tip": "<p>Using the interface provided by <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> to translate images, which is maintained by its maintainer at their own expense.</p>\\n<p>When multiple people use it at the same time, they need to queue and wait. If the waiting queue reaches its limit, uploading new images will result in an error. Please try again after a while.</p>\\n<p>So please <b>mind the frequency of use</b>.</p>\\n<p>It is highly recommended to locally deploy Manga Image Translator, as it does not consume server resources and does not require queuing.</p>",
			"options": {
				"box_threshold": "Box threshold",
				"detection_resolution": "Text detection resolution",
				"direction": "Render text orientation",
				"direction_auto": "Follow source",
				"direction_horizontal": "Horizontal only",
				"direction_vertical": "Vertical only",
				"force_retry": "Force retry (ignore cache)",
				"inpainter": "Inpainter",
				"inpainting_size": "Inpainting size",
				"local_url": "Custom server URL",
				"mask_dilation_offset": "Mask dilation offset",
				"only_download_translated": "Download only the translated images",
				"target_language": "Target language",
				"text_detector": "Text detector",
				"translator": "Translation service",
				"unclip_ratio": "Unclip ratio"
			},
			"provider": "Translator",
			"range": "Translation scope",
			"translate_all": "Translate all images",
			"translate_to_end": "Translate the current page to the end"
		}
	},
	site: {
		"add_feature": {
			"add_hotkeys_actions": "Add hotkey actions",
			"auto_adjust_option": "Auto adjust reading option",
			"auto_page_turn": "Infinite scroll",
			"auto_show": "Auto enter reading mode",
			"block_totally": "Totally block comics",
			"colorize_tag": "Colorize tags",
			"cross_site_link": "Cross-site link",
			"detect_ad": "Detect ad page",
			"expand_tag_list": "Expand tag list",
			"float_tag_list": "Floating tag list",
			"load_original_image": "Load original image",
			"lock_option": "Lock site option",
			"open_link_new_page": "Open links in a new page",
			"quick_favorite": "Quick favorite",
			"quick_rating": "Quick rating",
			"quick_tag_define": "Quick view tag definition",
			"remember_current_site": "Remember the current site",
			"tag_lint": "Tag lint"
		},
		"changed_load_failed": "The website has undergone changes, unable to load comics",
		"ehentai": {
			"change_favorite_failed": "Failed to change the favorite",
			"change_favorite_success": "Successfully changed the favorite",
			"change_rating_failed": "Failed to change the rating",
			"change_rating_success": "Successfully changed the rating",
			"fetch_favorite_failed": "Failed to get favorite info",
			"fetch_img_page_source_failed": "Failed to get the source code of the image page",
			"fetch_img_page_url_failed": "Failed to get the image page address from the detail page",
			"fetch_img_url_failed": "Failed to get the image address from the image page",
			"hitomi_error": "hitomi matching error",
			"html_changed_link_failed": "The page structure has changed, and the associated external site features are not functioning properly",
			"ip_banned": "IP address is banned",
			"nhentai_error": "nhentai matching error",
			"nhentai_failed": "Matching failed, please refresh after confirming login to {{nhentai}}"
		},
		"nhentai": {
			"fetch_next_page_failed": "Failed to get next page of comic data",
			"tag_blacklist_fetch_failed": "Failed to fetch tag blacklist"
		},
		"show_settings_menu": "Show settings menu",
		"simple": {
			"auto_read_mode_message": "\\"Auto enter reading mode\\" is enabled by default",
			"no_img": "No suitable comic images were found.\\nIf necessary, you can click here to close the simple reading mode.",
			"simple_read_mode": "Enter simple reading mode"
		}
	},
	touch_area: {
		"menu": "Menu",
		"type": {
			"edge": "Edge",
			"l": "L",
			"left_right": "Left/Right",
			"up_down": "Up/Down"
		}
	},
	translation: {
		"status": {
			"after-translating": "Post-translation processing",
			"cancelled": "Translation cancelled",
			"colorizing": "Colorizing",
			"default": "Unknown status",
			"detection": "Detecting text",
			"downloading": "Downloading",
			"downscaling": "Downscaling",
			"error": "Error during translation",
			"error-disconnect": "Lost connection to server",
			"error-download": "Download error",
			"error-lang": "The target language is not supported by the chosen translator",
			"error-too-large": "Image size too large (greater than 8000x8000 px)",
			"error-translating": "Did not get any text back from the text translation service",
			"error-upload": "Upload error",
			"error-with-id": "Error during translation",
			"finished": "Finishing",
			"inpainting": "Inpainting",
			"mask-generation": "Generating mask",
			"ocr": "Scanning text",
			"pending": "Pending",
			"pending-pos": "Pending",
			"preparing": "Waiting for idle window",
			"rendering": "Rendering",
			"running_pre_translation_hooks": "Running pre-translation hooks",
			"saved": "Saved",
			"saving": "Saving",
			"skip-no-regions": "No text regions detected in the image",
			"skip-no-text": "No text detected in the image",
			"textline_merge": "Merging text lines",
			"translating": "Translating",
			"upload": "Uploading",
			"uploading": "Uploading",
			"upscaling": "Upscaling"
		},
		"tip": {
			"check_img_status_failed": "Failed to check image status",
			"download_img_failed": "Failed to download image",
			"get_translator_list_error": "Error occurred while getting the list of available translation services",
			"id_not_returned": "No id returned",
			"img_downloading": "Downloading images",
			"img_not_fully_loaded": "Image has not finished loading",
			"pending": "Pending, {{pos}} in queue",
			"resize_img_failed": "Failed to resize image",
			"translating": "Translating image",
			"translation_completed": "Translation completed",
			"upload": "Uploading image",
			"upload_error": "Image upload error",
			"upload_return_error": "Error during server translation",
			"wait_translation": "Waiting for translation"
		},
		"translator": {
			"baidu": "Baidu",
			"deepl": "DeepL",
			"google": "Google",
			"gpt3.5": "GPT-3.5",
			"none": "Remove text",
			"offline": "Offline model",
			"original": "Original",
			"papago": "Papago",
			"youdao": "Youdao"
		}
	},
	upscale: {
		"module_download_complete": "Image upscaling model download complete",
		"module_download_failed": "Image upscaling model download failed",
		"module_downloading": "Image upscaling model downloading...",
		"title": "Lossless upscale",
		"upscaled": "upscaled",
		"upscaling": "upscaling",
		"webgpu_tip": "Unable to upscale images using WebGPU, processing will be slower"
	}
};
//#endregion
//#region locales/ru.json
var ru_default = {
	alert: {
		"comic_load_error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0438\u043A\u0441\u0430",
		"download_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u0430\u0447\u0430\u0442\u044C",
		"fetch_comic_img_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
		"img_load_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
		"no_img_download": "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
		"repeat_load": "\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435",
		"retry_get_img_url": "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 {{i}}",
		"server_connect_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443"
	},
	button: {
		"auto_scroll": "\u0410\u0432\u0442\u043E\u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430",
		"close_current_page_translation": "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
		"download_completed": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",
		"download_completed_error": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430, \u043D\u043E {{errorNum}} \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",
		"downloading": "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435",
		"fullscreen": "\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439",
		"fullscreen_exit": "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430",
		"packaging": "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430",
		"page_fill": "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
		"page_mode_double": "\u0414\u0432\u0443\u0445\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
		"page_mode_single": "\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
		"scroll_mode": "\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438",
		"translate_current_page": "\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
		"zoom_in": "\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C",
		"zoom_out": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C"
	},
	description: "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A \u0434\u0432\u0443\u0445\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434.",
	eh_tag_lint: {
		"combo": "[tag]: \u0412 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441 [tag]",
		"conflict": "[tag]: \u041D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441 [tag]",
		"correct_tag": "\u0414\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u0433",
		"miss_female": "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043C\u0443\u0436\u0441\u043A\u043E\u0439 \u0442\u0435\u0433, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F",
		"miss_parody": "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0435\u0433 \u043F\u0430\u0440\u043E\u0434\u0438\u0438, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F",
		"possible_conflict": "[tag]: \u0412 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441 [tag]",
		"prerequisite": "[tag]: \u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u0433 [tag] \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"
	},
	end_page: {
		"next_button": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430",
		"prev_button": "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430",
		"tip": {
			"end_jump": "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430 \u043D\u0438\u0436\u0435",
			"exit": "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043D\u0438\u0436\u0435 \u043A\u043E\u043C\u0438\u043A\u0441 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043A\u0440\u044B\u0442",
			"start_jump": "\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u0432\u044B\u0448\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430"
		}
	},
	hotkeys: {
		"enter_read_mode": "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F",
		"float_tag_list": "\u041F\u043B\u0430\u0432\u0430\u044E\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u0433\u043E\u0432",
		"jump_next": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0433\u043B\u0430\u0432\u0435",
		"jump_prev": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0433\u043B\u0430\u0432\u0435",
		"jump_to_end": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",
		"jump_to_home": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0435\u0440\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",
		"multi_select_load": "\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
		"page_down": "\u041F\u0435\u0440\u0435\u043B\u0438\u0441\u0442\u043D\u0443\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432\u043D\u0438\u0437",
		"page_up": "\u041F\u0435\u0440\u0435\u043B\u0438\u0441\u0442\u043D\u0443\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432\u0432\u0435\u0440\u0445",
		"reload_current_error_img": "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u043E\u0448\u0438\u0431\u043E\u0447\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
		"repeat_tip": "\u042D\u0442\u0430 \u0433\u043E\u0440\u044F\u0447\u0430\u044F \u043A\u043B\u0430\u0432\u0438\u0448\u0430 \u0431\u044B\u043B\u0430 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u043D\u0430 \\"{{hotkey}}\\"",
		"scroll_down": "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u0437",
		"scroll_left": "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0432\u043B\u0435\u0432\u043E",
		"scroll_right": "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0432\u043F\u0440\u0430\u0432\u043E",
		"scroll_up": "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0432\u0432\u0435\u0440\u0445",
		"switch_auto_enlarge": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
		"switch_dir": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0447\u0442\u0435\u043D\u0438\u044F",
		"switch_page_fill": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
		"switch_scroll_mode": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438",
		"switch_single_double_page_mode": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043E\u0434\u043D\u043E/\u0434\u0432\u0443\u0445\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"
	},
	img_status: {
		"error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
		"loading": "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F",
		"wait": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"
	},
	other: {
		"auto": "\u0410\u0432\u0442\u043E",
		"cancel": "\u041E\u0442\u043C\u0435\u043D\u0430",
		"clear": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
		"confirm": "\u041E\u041A",
		"custom": "\u041D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u044B\u0439",
		"disable": "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C",
		"distance": "\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",
		"download": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C",
		"enabled": "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E",
		"enter_comic_read_mode": "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F",
		"enter_password": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
		"exit": "\u0412\u044B\u0445\u043E\u0434",
		"fab_hidden": "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443",
		"fab_show": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443",
		"fill_page": "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
		"hotkeys": "\u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438",
		"img_loading": "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F",
		"interval": "\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
		"loading_img": "\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
		"multi_select_mode": "\u0420\u0435\u0436\u0438\u043C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430",
		"none": "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",
		"or": "\u0438\u043B\u0438",
		"other": "\u0414\u0440\u0443\u0433\u043E\u0435",
		"page_range": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0441\u0442\u0440\u0430\u043D\u0438\u0446:\\n (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 1, 3-5, 9-)",
		"read_mode": "\u0420\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F",
		"selected": "\u0412\u044B\u0431\u0440\u0430\u043D\u043E",
		"setting": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
	},
	pwa: {
		"alert": {
			"img_data_error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"img_not_found": "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
			"img_not_found_files": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0430\u0440\u0445\u0438\u0432 \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438",
			"img_not_found_folder": "\u0412 \u043F\u0430\u043F\u043A\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0430\u0440\u0445\u0438\u0432\u044B \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438",
			"not_valid_url": "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 URL",
			"parse_error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u043D\u0430\u043B\u0438\u0437\u0430",
			"password_error": "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
			"repeat_load": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432\u2026",
			"userscript_not_installed": "ComicRead \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D"
		},
		"button": {
			"enter_url": "\u0412\u0432\u0435\u0441\u0442\u0438 URL",
			"install": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
			"no_more_prompt": "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C",
			"resume_read": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0447\u0442\u0435\u043D\u0438\u0435",
			"select_files": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B",
			"select_folder": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443"
		},
		"install_md": "### \u0423\u0441\u0442\u0430\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437?\\n\u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435:\\n1. \u0418\u043C\u0435\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E, \u043A\u0430\u043A \u0435\u0441\u043B\u0438 \u0431\u044B \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u043E\u0431\u044B\u0447\u043D\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435\\n1. \u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0430\u0440\u0445\u0438\u0432\u044B \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E\\n1. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0444\u0444\u043B\u0430\u0439\u043D\\n### \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u044D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 [PWA](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5) \u043D\u0430 \u0441\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u{1F43A}\u261D\uFE0F",
		"message": {
			"enter_password": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
			"parsing": "\u0420\u0430\u0437\u0431\u043E\u0440"
		},
		"tip_enter_url": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL \u0430\u0440\u0445\u0438\u0432\u0430",
		"tip_md": "# ComicRead PWA\\n\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 [ComicRead](https://github.com/hymbz/ComicReadScript) \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u0438\u043A\u0441\u043E\u0432 **\u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E**.\\n---\\n### \u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u043F\u0430\u043F\u043A\u0438 \u0438\u043B\u0438 \u0430\u0440\u0445\u0438\u0432\u044B \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0447\u0438\u0442\u0430\u0442\u044C\\n*\u0412\u044B \u0442\u0430\u043A \u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 **\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C** \u0438\u043B\u0438 **\u0432\u0432\u0435\u0441\u0442\u0438** URL \u0430\u0440\u0445\u0438\u0432\u0430 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E*"
	},
	setting: {
		"hotkeys": {
			"add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438",
			"restore": "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"
		},
		"language": "\u042F\u0437\u044B\u043A",
		"option": {
			"abreast_duplicate": "\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0434\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432",
			"abreast_mode": "\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0432 \u0440\u044F\u0434",
			"adjust_to_width": "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430",
			"align_edge": "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u043A\u0440\u0430\u044E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043B\u0438\u0441\u0442\u044B\u0432\u0430\u043D\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
			"always_load_all_img": "\u0412\u0441\u0435\u0433\u0434\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0432\u0441\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"auto_fullscreen": "\u0410\u0432\u0442\u043E \u043F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",
			"auto_hidden_mouse": "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043A\u0443\u0440\u0441\u043E\u0440 \u043C\u044B\u0448\u0438",
			"auto_scale": "\u0410\u0432\u0442\u043E \u043C\u0430\u0441\u0448\u0442\u0430\u0431",
			"auto_scroll_continuous": "\u041D\u0435\u043F\u0440\u0435\u0440\u044B\u0432\u043D\u0430\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430",
			"auto_scroll_trigger_end": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0443 \u043D\u0430 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",
			"auto_switch_page_mode": "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0440\u0435\u0436\u0438\u043C\u0430 \u043E\u0434\u043D\u043E\u0439/\u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0440\u043E\u043D",
			"background_color": "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
			"click_page_turn_area": "\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u043D\u0430\u0436\u0430\u0442\u0438\u044F",
			"click_page_turn_enabled": "\u041F\u0435\u0440\u0435\u043B\u0438\u0441\u0442\u044B\u0432\u0430\u0442\u044C \u043F\u043E \u043A\u043B\u0438\u043A\u0443",
			"click_page_turn_swap_area": "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u043F\u0440\u0430\u0432\u0443\u044E \u0438 \u043B\u0435\u0432\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
			"dark_mode": "\u0422\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
			"dark_mode_auto": "\u0422\u0451\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0437\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439",
			"dir_ltr": "\u0427\u0442\u0435\u043D\u0438\u0435 \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E (\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0435 \u043A\u043E\u043C\u0438\u043A\u0441\u044B)",
			"dir_rtl": "\u0427\u0442\u0435\u043D\u0438\u0435 \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430\u043B\u0435\u0432\u043E (\u042F\u043F\u043E\u043D\u0441\u043A\u0430\u044F \u043C\u0430\u043D\u0433\u0430)",
			"disable_auto_enlarge": "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",
			"first_page_fill": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
			"full_width": "\u0428\u0438\u0440\u0438\u043D\u0430 \u043E\u043A\u043D\u0430 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",
			"img_filter": "\u0424\u0438\u043B\u044C\u0442\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"img_filter_brightness": "\u042F\u0440\u043A\u043E\u0441\u0442\u044C",
			"img_filter_contrast": "\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
			"img_filter_saturate": "\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
			"img_recognition": "\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",
			"img_recognition_background": "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
			"img_recognition_crop": "\u041E\u0431\u0440\u0435\u0437\u043A\u0430 \u043A\u0440\u0430\u0451\u0432",
			"img_recognition_keepMargin": "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044F",
			"img_recognition_pageFill": "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
			"img_recognition_warn": "\u2757 \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Web Workers. \u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u0437\u0432\u0430\u0442\u044C \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0438\u043B\u0438 \u0441\u043C\u0435\u043D\u0438\u0442\u044C \u0431\u0440\u0430\u0443\u0437\u0435\u0440.",
			"img_recognition_warn_2": "\u2757 \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Web Workers. \u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B.",
			"page_columns": "\u0421\u0442\u0440\u0430\u043D\u0438\u0446 \u0432 \u0441\u0442\u0440\u043E\u043A\u0435",
			"page_tip": "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u043D\u043E\u043C\u0435\u0440\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
			"page_tip_always": "\u0412\u0441\u0435\u0433\u0434\u0430",
			"page_tip_auto": "\u0410\u0432\u0442\u043E",
			"page_tip_hide": "\u0421\u043A\u0440\u044B\u0442\u044C",
			"paragraph_appearance": "\u0412\u043D\u0435\u0448\u043D\u043E\u0441\u0442\u044C",
			"paragraph_dir": "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0447\u0442\u0435\u043D\u0438\u044F",
			"paragraph_display": "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
			"paragraph_scrollbar": "\u041F\u043E\u043B\u043E\u0441\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438",
			"paragraph_translation": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
			"preload_page_num": "\u041F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
			"scroll_animation_duration": "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438",
			"scroll_end": "\u041F\u043E\u0441\u043B\u0435 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0446\u0430",
			"scroll_end_auto": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439/\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0433\u043B\u0430\u0432\u0435, \u0438\u043D\u0430\u0447\u0435 \u0432\u044B\u0445\u043E\u0434",
			"scroll_mode_img_scale": "\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0441\u043A\u0440\u043E\u043B\u043B\u0438\u043D\u0433\u0430",
			"scroll_mode_img_spacing": "\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0441\u043A\u0440\u043E\u043B\u043B\u0438\u043D\u0433\u0430",
			"scrollbar_auto_hidden": "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043A\u0440\u044B\u0432\u0430\u0442\u044C",
			"scrollbar_easy_scroll": "\u041B\u0451\u0433\u043A\u0430\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430",
			"scrollbar_position": "\u041F\u043E\u0437\u0438\u0446\u0438\u044F",
			"scrollbar_position_bottom": "\u0421\u043D\u0438\u0437\u0443",
			"scrollbar_position_hidden": "\u0421\u043F\u0440\u044F\u0442\u0430\u043D\u043E",
			"scrollbar_position_right": "\u0421\u043F\u0440\u0430\u0432\u0430",
			"scrollbar_position_top": "\u0421\u0432\u0435\u0440\u0445\u0443",
			"scrollbar_show_img_status": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"show_clickable_area": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043B\u0438\u043A\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
			"show_comments": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",
			"shrink_menu": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043C\u0435\u043D\u044E",
			"swap_page_turn_key": "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
			"turn_page_animation_duration": "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 \u043F\u0435\u0440\u0435\u043B\u0438\u0441\u0442\u044B\u0432\u0430\u043D\u0438\u044F",
			"zoom": "\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"
		},
		"sync_options_other_site": "\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0447\u0442\u0435\u043D\u0438\u044F \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u0430\u0439\u0442\u0430\u043C\u0438",
		"translation": {
			"cotrans_tip": "<p>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans API</a>, \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u0439 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430 \u0441\u0447\u0451\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044F.</p>\\n<p>\u0417\u0430\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E\u0439 \u043E\u0447\u0435\u0440\u0435\u0434\u0438. \u041A\u043E\u0433\u0434\u0430 \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u043B\u0438\u043C\u0438\u0442 \u043D\u043E\u0432\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442\u044C \u043A \u043E\u0448\u0438\u0431\u043A\u0435. \u0415\u0441\u043B\u0438 \u0442\u0430\u043A\u043E\u0435 \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.</p>\\n<p>\u0422\u0430\u043A \u0447\u0442\u043E \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 <b>\u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435</b></p>\\n<p>\u041D\u0430\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043E \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C Manga Image Translator \u0442.\u043A. \u044D\u0442\u043E \u043D\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B \u0438 \u0432\u044B \u043D\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u044B \u043E\u0447\u0435\u0440\u0435\u0434\u044C\u044E.</p>",
			"options": {
				"box_threshold": "\u041F\u043E\u0440\u043E\u0433 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0430",
				"detection_resolution": "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430",
				"direction": "\u041E\u0440\u0438\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430",
				"direction_auto": "\u0421\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0443",
				"direction_horizontal": "\u0422\u043E\u043B\u044C\u043A\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
				"direction_vertical": "\u0422\u043E\u043B\u044C\u043A\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
				"force_retry": "\u041F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0432\u0442\u043E\u0440 (\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u044D\u0448)",
				"inpainter": "\u0418\u043D\u043F\u0435\u0439\u043D\u0442\u0435\u0440",
				"inpainting_size": "\u0418\u043D\u043F\u0435\u0439\u043D\u0442\u0438\u043D\u0433 \u0440\u0430\u0437\u043C\u0435\u0440 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
				"local_url": "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C URL \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
				"mask_dilation_offset": "\u0421\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F \u043C\u0430\u0441\u043A\u0438",
				"only_download_translated": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
				"target_language": "\u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u044F\u0437\u044B\u043A",
				"text_detector": "\u0414\u0435\u0442\u0435\u043A\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0430",
				"translator": "\u0421\u0435\u0440\u0432\u0438\u0441 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430",
				"unclip_ratio": "\u041D\u0435\u043E\u0431\u0440\u0435\u0437\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435"
			},
			"provider": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A",
			"range": "\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430",
			"translate_all": "\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"translate_to_end": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0434\u043E \u043A\u043E\u043D\u0446\u0430"
		}
	},
	site: {
		"add_feature": {
			"add_hotkeys_actions": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0433\u043E\u0440\u044F\u0447\u0438\u043C\u0438 \u043A\u043B\u0430\u0432\u0438\u0448\u0430\u043C\u0438",
			"auto_adjust_option": "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0447\u0442\u0435\u043D\u0438\u044F",
			"auto_page_turn": "\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430",
			"auto_show": "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F",
			"block_totally": "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u0438\u043A\u0441\u044B",
			"colorize_tag": "\u041E\u043A\u0440\u0430\u0448\u0438\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u0433\u043E\u0432",
			"cross_site_link": "\u041A\u0440\u043E\u0441\u0441-\u0441\u0430\u0439\u0442\u043E\u0432\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430",
			"detect_ad": "\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
			"expand_tag_list": "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u0433\u043E\u0432",
			"float_tag_list": "\u041F\u043B\u0430\u0432\u0430\u044E\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u0433\u043E\u0432",
			"load_original_image": "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
			"lock_option": "\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043E\u043F\u0446\u0438\u0438 \u0441\u0430\u0439\u0442\u0430",
			"open_link_new_page": "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0438 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
			"quick_favorite": "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0444\u0430\u0432\u043E\u0440\u0438\u0442",
			"quick_rating": "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433",
			"quick_tag_define": "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u0433\u0430 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",
			"remember_current_site": "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u0430\u0439\u0442",
			"tag_lint": "\u0422\u044D\u0433 \u041B\u0438\u043D\u0442"
		},
		"changed_load_failed": "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C, \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0438\u043A\u0441",
		"ehentai": {
			"change_favorite_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
			"change_favorite_success": "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E",
			"change_rating_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0446\u0435\u043D\u043A\u0443",
			"change_rating_success": "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u0440\u0435\u0439\u0442\u0438\u043D\u0433",
			"fetch_favorite_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C",
			"fetch_img_page_source_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438",
			"fetch_img_page_url_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0438\u0437 \u0434\u0435\u0442\u0430\u043B\u0435\u0439",
			"fetch_img_url_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"hitomi_error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F hitomi",
			"html_changed_link_failed": "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C, \u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0434\u043E\u043B\u0436\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C",
			"ip_banned": "IP \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u0431\u0430\u043D\u0435\u043D",
			"nhentai_error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F nhentai",
			"nhentai_failed": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u043F\u043E\u0441\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u043E\u0441\u043B\u0435 \u0432\u0445\u043E\u0434\u0430 \u043D\u0430 {{nhentai}}"
		},
		"nhentai": {
			"fetch_next_page_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
			"tag_blacklist_fetch_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0442\u0435\u0433\u0438"
		},
		"show_settings_menu": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u043D\u044E \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A",
		"simple": {
			"auto_read_mode_message": "\\"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F\\" \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
			"no_img": "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439. \\n\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0442\u0443\u0442, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0447\u0442\u0435\u043D\u0438\u044F.",
			"simple_read_mode": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F"
		}
	},
	touch_area: {
		"menu": "\u041C\u0435\u043D\u044E",
		"type": {
			"edge": "\u0413\u0440\u0430\u043D\u044C",
			"l": "L",
			"left_right": "\u041B\u0435\u0432\u043E \u041F\u0440\u0430\u0432\u043E",
			"up_down": "\u0412\u0435\u0440\u0445 \u041D\u0438\u0437"
		}
	},
	translation: {
		"status": {
			"after-translating": "\u041F\u043E\u0441\u0442\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430",
			"cancelled": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043E\u0442\u043C\u0435\u043D\u0451\u043D",
			"colorizing": "\u0420\u0430\u0441\u043A\u0440\u0430\u0448\u0438\u0432\u0430\u043D\u0438\u0435",
			"default": "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
			"detection": "\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",
			"downloading": "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435",
			"downscaling": "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430",
			"error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430",
			"error-disconnect": "\u041F\u043E\u0442\u0435\u0440\u044F\u043D\u043E \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C",
			"error-download": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0438",
			"error-lang": "\u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u044F\u0437\u044B\u043A \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A\u043E\u043C",
			"error-too-large": "\u0420\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 (\u0431\u043E\u043B\u0435\u0435 8000x8000 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439)",
			"error-translating": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430(\u043F\u0443\u0441\u0442\u043E\u0439 \u043E\u0442\u0432\u0435\u0442)",
			"error-upload": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438",
			"error-with-id": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430",
			"finished": "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435",
			"inpainting": "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"mask-generation": "\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043C\u0430\u0441\u043A\u0438",
			"ocr": "\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",
			"pending": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",
			"pending-pos": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",
			"preparing": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043E\u043A\u043D\u0430 \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
			"rendering": "\u041E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0430",
			"running_pre_translation_hooks": "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430",
			"saved": "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E",
			"saving": "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435",
			"skip-no-regions": "\u041D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043E \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u043E\u0431\u043B\u0430\u0441\u0442\u0435\u0439",
			"skip-no-text": "\u0422\u0435\u043A\u0441\u0442 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D",
			"textline_merge": "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",
			"translating": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u0441\u044F",
			"upload": "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430",
			"uploading": "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430",
			"upscaling": "\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"
		},
		"tip": {
			"check_img_status_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"download_img_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
			"get_translator_list_error": "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A\u043E\u0432",
			"id_not_returned": "ID \u043D\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0451\u043D",
			"img_downloading": "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",
			"img_not_fully_loaded": "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0432\u0441\u0451 \u0435\u0449\u0451 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F",
			"pending": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435, \u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u0438 {{pos}}",
			"resize_img_failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"translating": "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u0441\u044F",
			"translation_completed": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D",
			"upload": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"upload_error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
			"upload_return_error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",
			"wait_translation": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430"
		},
		"translator": {
			"baidu": "Baidu",
			"deepl": "DeepL",
			"google": "Google",
			"gpt3.5": "GPT-3.5",
			"none": "\u0423\u0431\u0440\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442",
			"offline": "\u041E\u0444\u0444\u043B\u0430\u0439\u043D \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A",
			"original": "\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B",
			"papago": "Papago",
			"youdao": "Youdao"
		}
	},
	upscale: {
		"module_download_complete": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",
		"module_download_failed": "\u0421\u0431\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",
		"module_downloading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439...",
		"title": "\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u044C",
		"upscaled": "\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439",
		"upscaling": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F",
		"webgpu_tip": "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E WebGPU, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0435\u0435"
	}
};
//#endregion
//#region locales/zh.json
var zh_default = {
	alert: {
		"comic_load_error": "\u6F2B\u753B\u52A0\u8F7D\u51FA\u9519",
		"download_failed": "\u4E0B\u8F7D\u5931\u8D25",
		"fetch_comic_img_failed": "\u83B7\u53D6\u6F2B\u753B\u56FE\u7247\u5931\u8D25",
		"img_load_failed": "\u56FE\u7247\u52A0\u8F7D\u5931\u8D25",
		"no_img_download": "\u6CA1\u6709\u80FD\u4E0B\u8F7D\u7684\u56FE\u7247",
		"repeat_load": "\u6B63\u5728\u83B7\u53D6\u56FE\u7247\uFF0C\u8BF7\u7A0D\u5019",
		"retry_get_img_url": "\u91CD\u65B0\u83B7\u53D6\u7B2C {{i}} \u9875\u56FE\u7247\u7684\u5730\u5740",
		"server_connect_failed": "\u65E0\u6CD5\u8FDE\u63A5\u5230\u670D\u52A1\u5668"
	},
	button: {
		"auto_scroll": "\u81EA\u52A8\u6EDA\u52A8",
		"close_current_page_translation": "\u5173\u95ED\u5F53\u524D\u9875\u7684\u7FFB\u8BD1",
		"download_completed": "\u4E0B\u8F7D\u5B8C\u6210",
		"download_completed_error": "\u4E0B\u8F7D\u5B8C\u6210\uFF0C\u4F46\u6709 {{errorNum}} \u5F20\u56FE\u7247\u4E0B\u8F7D\u5931\u8D25",
		"downloading": "\u4E0B\u8F7D\u4E2D",
		"fullscreen": "\u5168\u5C4F",
		"fullscreen_exit": "\u9000\u51FA\u5168\u5C4F",
		"packaging": "\u6253\u5305\u4E2D",
		"page_fill": "\u9875\u9762\u586B\u5145",
		"page_mode_double": "\u53CC\u9875\u6A21\u5F0F",
		"page_mode_single": "\u5355\u9875\u6A21\u5F0F",
		"scroll_mode": "\u5377\u8F74\u6A21\u5F0F",
		"translate_current_page": "\u7FFB\u8BD1\u5F53\u524D\u9875",
		"zoom_in": "\u653E\u5927",
		"zoom_out": "\u7F29\u5C0F"
	},
	description: "\u4E3A\u6F2B\u753B\u7AD9\u589E\u52A0\u53CC\u9875\u9605\u8BFB\u3001\u7FFB\u8BD1\u7B49\u4F18\u5316\u4F53\u9A8C\u7684\u589E\u5F3A\u529F\u80FD\u3002",
	eh_tag_lint: {
		"combo": "\u5B58\u5728 [tag] \u65F6\uFF0C\u4E00\u822C\u4E5F\u5B58\u5728 [tag]",
		"conflict": "\u5B58\u5728 [tag] \u65F6\uFF0C\u4E0D\u5E94\u8BE5\u5B58\u5728 [tag]",
		"correct_tag": "\u5E94\u8BE5\u662F\u6B63\u786E\u7684\u6807\u7B7E",
		"miss_female": "\u7F3A\u5C11\u7537\u6027\u6807\u7B7E\uFF0C\u53EF\u80FD\u9700\u8981",
		"miss_parody": "\u7F3A\u5C11\u539F\u4F5C\u6807\u7B7E\uFF0C\u53EF\u80FD\u9700\u8981",
		"possible_conflict": "\u5B58\u5728 [tag] \u65F6\uFF0C\u4E00\u822C\u4E0D\u5E94\u8BE5\u5B58\u5728 [tag]",
		"prerequisite": "[tag] \u7684\u524D\u7F6E\u6807\u7B7E [tag] \u4E0D\u5B58\u5728"
	},
	end_page: {
		"next_button": "\u4E0B\u4E00\u8BDD",
		"prev_button": "\u4E0A\u4E00\u8BDD",
		"tip": {
			"end_jump": "\u5DF2\u5230\u7ED3\u5C3E\uFF0C\u7EE7\u7EED\u5411\u4E0B\u7FFB\u9875\u5C06\u8DF3\u81F3\u4E0B\u4E00\u8BDD",
			"exit": "\u5DF2\u5230\u7ED3\u5C3E\uFF0C\u7EE7\u7EED\u7FFB\u9875\u5C06\u9000\u51FA",
			"start_jump": "\u5DF2\u5230\u5F00\u5934\uFF0C\u7EE7\u7EED\u5411\u4E0A\u7FFB\u9875\u5C06\u8DF3\u81F3\u4E0A\u4E00\u8BDD"
		}
	},
	hotkeys: {
		"enter_read_mode": "\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F",
		"float_tag_list": "\u60AC\u6D6E\u6807\u7B7E\u5217\u8868",
		"jump_next": "\u8DF3\u81F3\u4E0B\u4E00\u8BDD",
		"jump_prev": "\u8DF3\u81F3\u4E0A\u4E00\u8BDD",
		"jump_to_end": "\u8DF3\u81F3\u5C3E\u9875",
		"jump_to_home": "\u8DF3\u81F3\u9996\u9875",
		"multi_select_load": "\u591A\u9009\u52A0\u8F7D",
		"page_down": "\u5411\u4E0B\u7FFB\u9875",
		"page_up": "\u5411\u4E0A\u7FFB\u9875",
		"reload_current_error_img": "\u91CD\u8F7D\u5F53\u524D\u9519\u8BEF\u56FE\u7247",
		"repeat_tip": "\u6B64\u5FEB\u6377\u952E\u5DF2\u88AB\u7ED1\u5B9A\u81F3\u300C{{hotkey}}\u300D",
		"scroll_down": "\u5411\u4E0B\u6EDA\u52A8",
		"scroll_left": "\u5411\u5DE6\u6EDA\u52A8",
		"scroll_right": "\u5411\u53F3\u6EDA\u52A8",
		"scroll_up": "\u5411\u4E0A\u6EDA\u52A8",
		"switch_auto_enlarge": "\u5207\u6362\u56FE\u7247\u81EA\u52A8\u653E\u5927\u9009\u9879",
		"switch_dir": "\u5207\u6362\u9605\u8BFB\u65B9\u5411",
		"switch_page_fill": "\u5207\u6362\u9875\u9762\u586B\u5145",
		"switch_scroll_mode": "\u5207\u6362\u5377\u8F74\u6A21\u5F0F",
		"switch_single_double_page_mode": "\u5207\u6362\u5355\u53CC\u9875\u6A21\u5F0F"
	},
	img_status: {
		"error": "\u52A0\u8F7D\u51FA\u9519",
		"loading": "\u6B63\u5728\u52A0\u8F7D",
		"wait": "\u7B49\u5F85\u52A0\u8F7D"
	},
	other: {
		"auto": "\u81EA\u52A8",
		"cancel": "\u53D6\u6D88",
		"clear": "\u6E05\u7A7A",
		"confirm": "\u786E\u5B9A",
		"custom": "\u81EA\u5B9A\u4E49",
		"disable": "\u7981\u7528",
		"distance": "\u8DDD\u79BB",
		"download": "\u4E0B\u8F7D",
		"enabled": "\u542F\u7528",
		"enter_comic_read_mode": "\u8FDB\u5165\u6F2B\u753B\u9605\u8BFB\u6A21\u5F0F",
		"enter_password": "\u8BF7\u8F93\u5165\u5BC6\u7801",
		"exit": "\u9000\u51FA",
		"fab_hidden": "\u9690\u85CF\u60AC\u6D6E\u6309\u94AE",
		"fab_show": "\u663E\u793A\u60AC\u6D6E\u6309\u94AE",
		"fill_page": "\u586B\u5145\u9875",
		"hotkeys": "\u5FEB\u6377\u952E",
		"img_loading": "\u56FE\u7247\u52A0\u8F7D\u4E2D",
		"interval": "\u95F4\u9694",
		"loading_img": "\u83B7\u53D6\u56FE\u7247\u4E2D",
		"multi_select_mode": "\u591A\u9009\u6A21\u5F0F",
		"none": "\u65E0",
		"or": "\u6216",
		"other": "\u5176\u4ED6",
		"page_range": "\u8BF7\u8F93\u5165\u9875\u7801\u8303\u56F4\uFF1A\\n\uFF08\u4F8B\u5982\uFF1A1, 3-5, 9-)",
		"read_mode": "\u9605\u8BFB\u6A21\u5F0F",
		"selected": "\u5DF2\u9009\u4E2D",
		"setting": "\u8BBE\u7F6E"
	},
	pwa: {
		"alert": {
			"img_data_error": "\u56FE\u7247\u6570\u636E\u9519\u8BEF",
			"img_not_found": "\u627E\u4E0D\u5230\u56FE\u7247",
			"img_not_found_files": "\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\u6216\u542B\u6709\u56FE\u7247\u6587\u4EF6\u7684\u538B\u7F29\u5305",
			"img_not_found_folder": "\u6587\u4EF6\u5939\u4E0B\u6CA1\u6709\u56FE\u7247\u6587\u4EF6\u6216\u542B\u6709\u56FE\u7247\u6587\u4EF6\u7684\u538B\u7F29\u5305",
			"not_valid_url": "\u4E0D\u662F\u6709\u6548\u7684 URL",
			"parse_error": "\u89E3\u6790\u51FA\u9519",
			"password_error": "\u5BC6\u7801\u9519\u8BEF",
			"repeat_load": "\u6B63\u5728\u52A0\u8F7D\u5176\u4ED6\u6587\u4EF6\u4E2D\u2026\u2026",
			"userscript_not_installed": "\u672A\u5B89\u88C5 ComicRead \u811A\u672C"
		},
		"button": {
			"enter_url": "\u8F93\u5165 URL",
			"install": "\u5B89\u88C5",
			"no_more_prompt": "\u4E0D\u518D\u63D0\u793A",
			"resume_read": "\u6062\u590D\u9605\u8BFB",
			"select_files": "\u9009\u62E9\u6587\u4EF6",
			"select_folder": "\u9009\u62E9\u6587\u4EF6\u5939"
		},
		"install_md": "### \u6BCF\u6B21\u90FD\u8981\u6253\u5F00\u8FD9\u4E2A\u7F51\u9875\u5F88\u9EBB\u70E6\uFF1F\\n\u5982\u679C\u4F60\u5E0C\u671B\\n1. \u80FD\u6709\u72EC\u7ACB\u7684\u7A97\u53E3\uFF0C\u50CF\u662F\u5728\u4F7F\u7528\u672C\u5730\u8F6F\u4EF6\u4E00\u6837\\n1. \u52A0\u5165\u672C\u5730\u538B\u7F29\u6587\u4EF6\u7684\u6253\u5F00\u65B9\u5F0F\u4E4B\u4E2D\uFF0C\u65B9\u4FBF\u76F4\u63A5\u6253\u5F00\\n1. \u79BB\u7EBF\u4F7F\u7528~~\uFF08\u4E3B\u8981\u662F\u62C5\u5FC3\u56FD\u5185\u7F51\u7EDC\u62BD\u98CE\u65E0\u6CD5\u8BBF\u95EE\u8FD9\u4E2A\u7F51\u9875~~\\n### \u6B22\u8FCE\u5C06\u672C\u9875\u9762\u4F5C\u4E3A PWA \u5E94\u7528\u5B89\u88C5\u5230\u7535\u8111\u4E0A\u{1F603}\u{1F44D}",
		"message": {
			"enter_password": "\u8BF7\u8F93\u5165\u5BC6\u7801",
			"parsing": "\u89E3\u6790\u4E2D"
		},
		"tip_enter_url": "\u8BF7\u8F93\u5165\u538B\u7F29\u5305 URL",
		"tip_md": "# ComicRead PWA\\n\u4F7F\u7528 [ComicRead](https://github.com/hymbz/ComicReadScript) \u7684\u9605\u8BFB\u6A21\u5F0F\u9605\u8BFB**\u672C\u5730**\u6F2B\u753B\\n---\\n### \u5C06\u56FE\u7247\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u3001\u538B\u7F29\u5305\u76F4\u63A5\u62D6\u5165\u5373\u53EF\u5F00\u59CB\u9605\u8BFB\\n*\u4E5F\u53EF\u4EE5\u9009\u62E9**\u76F4\u63A5\u7C98\u8D34**\u6216**\u8F93\u5165**\u538B\u7F29\u5305 URL \u4E0B\u8F7D\u9605\u8BFB*"
	},
	setting: {
		"hotkeys": {
			"add": "\u6DFB\u52A0\u65B0\u5FEB\u6377\u952E",
			"restore": "\u6062\u590D\u9ED8\u8BA4\u5FEB\u6377\u952E"
		},
		"language": "\u8BED\u8A00",
		"option": {
			"abreast_duplicate": "\u6BCF\u5217\u91CD\u590D\u6BD4\u4F8B",
			"abreast_mode": "\u5E76\u6392\u5377\u8F74\u6A21\u5F0F",
			"adjust_to_width": "\u81EA\u9002\u5E94\u5BBD\u5EA6",
			"align_edge": "\u6EDA\u52A8\u7FFB\u9875\u65F6\u5BF9\u9F50\u8FB9\u7F18",
			"always_load_all_img": "\u59CB\u7EC8\u52A0\u8F7D\u6240\u6709\u56FE\u7247",
			"auto_fullscreen": "\u81EA\u52A8\u5168\u5C4F",
			"auto_hidden_mouse": "\u81EA\u52A8\u9690\u85CF\u9F20\u6807",
			"auto_scale": "\u81EA\u52A8\u7F29\u653E",
			"auto_scroll_continuous": "\u6301\u7EED\u6EDA\u52A8",
			"auto_scroll_trigger_end": "\u5728\u7ED3\u675F\u9875\u4E0A\u7EE7\u7EED\u6EDA\u52A8",
			"auto_switch_page_mode": "\u6309\u5C4F\u5E55\u6BD4\u4F8B\u5207\u6362\u5355\u53CC\u9875",
			"background_color": "\u80CC\u666F\u989C\u8272",
			"click_page_turn_area": "\u70B9\u51FB\u533A\u57DF",
			"click_page_turn_enabled": "\u70B9\u51FB\u7FFB\u9875",
			"click_page_turn_swap_area": "\u5DE6\u53F3\u70B9\u51FB\u533A\u57DF\u4EA4\u6362",
			"dark_mode": "\u9ED1\u6697\u6A21\u5F0F",
			"dark_mode_auto": "\u9ED1\u6697\u6A21\u5F0F\u8DDF\u968F\u7CFB\u7EDF",
			"dir_ltr": "\u4ECE\u5DE6\u5230\u53F3\uFF08\u7F8E\u6F2B\uFF09",
			"dir_rtl": "\u4ECE\u53F3\u5230\u5DE6\uFF08\u65E5\u6F2B\uFF09",
			"disable_auto_enlarge": "\u7981\u6B62\u56FE\u7247\u81EA\u52A8\u653E\u5927",
			"first_page_fill": "\u9ED8\u8BA4\u542F\u7528\u9996\u9875\u586B\u5145",
			"full_width": "\u89C6\u7A97\u5BBD\u5EA6",
			"img_filter": "\u56FE\u7247\u6EE4\u955C",
			"img_filter_brightness": "\u4EAE\u5EA6",
			"img_filter_contrast": "\u5BF9\u6BD4\u5EA6",
			"img_filter_saturate": "\u9971\u548C\u5EA6",
			"img_recognition": "\u56FE\u50CF\u8BC6\u522B",
			"img_recognition_background": "\u8BC6\u522B\u80CC\u666F\u8272",
			"img_recognition_crop": "\u8FB9\u7F18\u88C1\u5207",
			"img_recognition_keepMargin": "\u4FDD\u7559\u767D\u8FB9",
			"img_recognition_pageFill": "\u81EA\u52A8\u8C03\u6574\u9875\u9762\u586B\u5145",
			"img_recognition_warn": "\u2757 \u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Web Worker\uFF0C\u5F00\u542F\u6B64\u529F\u80FD\u53EF\u80FD\u5BFC\u81F4\u9875\u9762\u5361\u987F\uFF0C\u5EFA\u8BAE\u5347\u7EA7\u6216\u66F4\u6362\u6D4F\u89C8\u5668\u3002",
			"img_recognition_warn_2": "\u2757 \u5F53\u524D\u7F51\u7AD9\u4E0D\u652F\u6301 Web Worker\uFF0C\u5F00\u542F\u6B64\u529F\u80FD\u53EF\u80FD\u5BFC\u81F4\u9875\u9762\u5361\u987F\u3002",
			"page_columns": "\u6BCF\u884C\u5E76\u6392\u9875\u6570",
			"page_tip": "\u9875\u7801\u63D0\u793A",
			"page_tip_always": "\u5E38\u9A7B",
			"page_tip_auto": "\u81EA\u52A8",
			"page_tip_hide": "\u9690\u85CF",
			"paragraph_appearance": "\u5916\u89C2",
			"paragraph_dir": "\u9605\u8BFB\u65B9\u5411",
			"paragraph_display": "\u663E\u793A",
			"paragraph_scrollbar": "\u6EDA\u52A8\u6761",
			"paragraph_translation": "\u7FFB\u8BD1",
			"preload_page_num": "\u9884\u52A0\u8F7D\u9875\u6570",
			"scroll_animation_duration": "\u6EDA\u52A8\u52A8\u753B\u65F6\u957F",
			"scroll_end": "\u7FFB\u9875\u81F3\u5C3D\u5934\u540E",
			"scroll_end_auto": "\u4F18\u5148\u8DF3\u81F3\u4E0A/\u4E0B\u4E00\u8BDD\uFF0C\u5426\u5219\u9000\u51FA",
			"scroll_mode_img_scale": "\u5377\u8F74\u56FE\u7247\u7F29\u653E",
			"scroll_mode_img_spacing": "\u5377\u8F74\u56FE\u7247\u95F4\u8DDD",
			"scrollbar_auto_hidden": "\u81EA\u52A8\u9690\u85CF",
			"scrollbar_easy_scroll": "\u5FEB\u6377\u6EDA\u52A8",
			"scrollbar_position": "\u4F4D\u7F6E",
			"scrollbar_position_bottom": "\u5E95\u90E8",
			"scrollbar_position_hidden": "\u9690\u85CF",
			"scrollbar_position_right": "\u53F3\u4FA7",
			"scrollbar_position_top": "\u9876\u90E8",
			"scrollbar_show_img_status": "\u663E\u793A\u56FE\u7247\u52A0\u8F7D\u72B6\u6001",
			"show_clickable_area": "\u663E\u793A\u70B9\u51FB\u533A\u57DF",
			"show_comments": "\u5728\u7ED3\u675F\u9875\u663E\u793A\u8BC4\u8BBA",
			"shrink_menu": "\u7F29\u5C0F\u83DC\u5355\u533A\u57DF",
			"swap_page_turn_key": "\u5DE6\u53F3\u7FFB\u9875\u952E\u4EA4\u6362",
			"turn_page_animation_duration": "\u7FFB\u9875\u52A8\u753B\u65F6\u957F",
			"zoom": "\u56FE\u7247\u7F29\u653E"
		},
		"sync_options_other_site": "\u540C\u6B65\u9605\u8BFB\u914D\u7F6E\u81F3\u5176\u4ED6\u7AD9\u70B9",
		"translation": {
			"cotrans_tip": "<p>\u5C06\u4F7F\u7528 <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> \u63D0\u4F9B\u7684\u63A5\u53E3\u7FFB\u8BD1\u56FE\u7247\uFF0C\u8BE5\u670D\u52A1\u5668\u7531\u5176\u7EF4\u62A4\u8005\u7528\u7231\u53D1\u7535\u81EA\u8D39\u7EF4\u62A4</p>\\n<p>\u591A\u4EBA\u540C\u65F6\u4F7F\u7528\u65F6\u9700\u8981\u6392\u961F\u7B49\u5F85\uFF0C\u7B49\u5F85\u961F\u5217\u8FBE\u5230\u4E0A\u9650\u540E\u518D\u4E0A\u4F20\u65B0\u56FE\u7247\u4F1A\u62A5\u9519\uFF0C\u9700\u8981\u8FC7\u6BB5\u65F6\u95F4\u518D\u8BD5</p>\\n<p>\u6240\u4EE5\u8FD8\u8BF7 <b>\u6CE8\u610F\u7528\u91CF</b></p>\\n<p>\u66F4\u63A8\u8350\u81EA\u5DF1\u672C\u5730\u90E8\u7F72 Manga Image Translator\uFF0C\u65E2\u4E0D\u5360\u7528\u670D\u52A1\u5668\u8D44\u6E90\u4E5F\u4E0D\u9700\u8981\u6392\u961F</p>",
			"options": {
				"box_threshold": "\u6587\u672C\u6846\u9608\u503C",
				"detection_resolution": "\u6587\u672C\u626B\u63CF\u6E05\u6670\u5EA6",
				"direction": "\u6E32\u67D3\u5B57\u4F53\u65B9\u5411",
				"direction_auto": "\u539F\u6587\u4E00\u81F4",
				"direction_horizontal": "\u4EC5\u9650\u6C34\u5E73",
				"direction_vertical": "\u4EC5\u9650\u5782\u76F4",
				"force_retry": "\u5FFD\u7565\u7F13\u5B58\u5F3A\u5236\u91CD\u8BD5",
				"inpainter": "\u56FE\u50CF\u4FEE\u590D\u5668",
				"inpainting_size": "\u56FE\u50CF\u4FEE\u590D\u5C3A\u5BF8",
				"local_url": "\u81EA\u5B9A\u4E49\u670D\u52A1\u5668 URL",
				"mask_dilation_offset": "\u63A9\u7801\u81A8\u80C0\u504F\u79FB\u91CF",
				"only_download_translated": "\u53EA\u4E0B\u8F7D\u7FFB\u8BD1\u5B8C\u7684\u56FE\u7247",
				"target_language": "\u76EE\u6807\u8BED\u8A00",
				"text_detector": "\u6587\u672C\u626B\u63CF\u5668",
				"translator": "\u7FFB\u8BD1\u670D\u52A1",
				"unclip_ratio": "\u6587\u672C\u6846\u81A8\u80C0\u6BD4\u7387"
			},
			"provider": "\u7FFB\u8BD1\u5668",
			"range": "\u7FFB\u8BD1\u8303\u56F4",
			"translate_all": "\u7FFB\u8BD1\u5168\u90E8\u56FE\u7247",
			"translate_to_end": "\u7FFB\u8BD1\u5F53\u524D\u9875\u81F3\u7ED3\u5C3E"
		}
	},
	site: {
		"add_feature": {
			"add_hotkeys_actions": "\u589E\u52A0\u5FEB\u6377\u952E\u64CD\u4F5C",
			"auto_adjust_option": "\u81EA\u52A8\u8C03\u6574\u9605\u8BFB\u914D\u7F6E",
			"auto_page_turn": "\u65E0\u9650\u6EDA\u52A8",
			"auto_show": "\u81EA\u52A8\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F",
			"block_totally": "\u5F7B\u5E95\u5C4F\u853D\u6F2B\u753B",
			"colorize_tag": "\u6807\u7B7E\u67D3\u8272",
			"cross_site_link": "\u5173\u8054\u5916\u7AD9",
			"detect_ad": "\u8BC6\u522B\u5E7F\u544A\u9875",
			"expand_tag_list": "\u5C55\u5F00\u6807\u7B7E\u5217\u8868",
			"float_tag_list": "\u60AC\u6D6E\u6807\u7B7E\u5217\u8868",
			"load_original_image": "\u52A0\u8F7D\u539F\u56FE",
			"lock_option": "\u9501\u5B9A\u7AD9\u70B9\u914D\u7F6E",
			"open_link_new_page": "\u5728\u65B0\u9875\u9762\u4E2D\u6253\u5F00\u94FE\u63A5",
			"quick_favorite": "\u5FEB\u6377\u6536\u85CF",
			"quick_rating": "\u5FEB\u6377\u8BC4\u5206",
			"quick_tag_define": "\u5FEB\u6377\u67E5\u770B\u6807\u7B7E\u5B9A\u4E49",
			"remember_current_site": "\u8BB0\u4F4F\u5F53\u524D\u7AD9\u70B9",
			"tag_lint": "\u6807\u7B7E\u68C0\u67E5"
		},
		"changed_load_failed": "\u7F51\u7AD9\u53D1\u751F\u53D8\u5316\uFF0C\u65E0\u6CD5\u52A0\u8F7D\u6F2B\u753B",
		"ehentai": {
			"change_favorite_failed": "\u6536\u85CF\u5939\u4FEE\u6539\u5931\u8D25",
			"change_favorite_success": "\u6536\u85CF\u5939\u4FEE\u6539\u6210\u529F",
			"change_rating_failed": "\u8BC4\u5206\u4FEE\u6539\u5931\u8D25",
			"change_rating_success": "\u8BC4\u5206\u4FEE\u6539\u6210\u529F",
			"fetch_favorite_failed": "\u83B7\u53D6\u6536\u85CF\u5939\u4FE1\u606F\u5931\u8D25",
			"fetch_img_page_source_failed": "\u83B7\u53D6\u56FE\u7247\u9875\u6E90\u7801\u5931\u8D25",
			"fetch_img_page_url_failed": "\u4ECE\u8BE6\u60C5\u9875\u83B7\u53D6\u56FE\u7247\u9875\u5730\u5740\u5931\u8D25",
			"fetch_img_url_failed": "\u4ECE\u56FE\u7247\u9875\u83B7\u53D6\u56FE\u7247\u5730\u5740\u5931\u8D25",
			"hitomi_error": "hitomi \u5339\u914D\u51FA\u9519",
			"html_changed_link_failed": "\u9875\u9762\u7ED3\u6784\u53D1\u751F\u6539\u53D8\uFF0C\u5173\u8054\u5916\u7AD9\u529F\u80FD\u65E0\u6CD5\u6B63\u5E38\u751F\u6548",
			"ip_banned": "IP\u5730\u5740\u88AB\u7981",
			"nhentai_error": "nhentai \u5339\u914D\u51FA\u9519",
			"nhentai_failed": "\u5339\u914D\u5931\u8D25\uFF0C\u8BF7\u5728\u786E\u8BA4\u767B\u5F55 {{nhentai}} \u540E\u5237\u65B0"
		},
		"nhentai": {
			"fetch_next_page_failed": "\u83B7\u53D6\u4E0B\u4E00\u9875\u6F2B\u753B\u6570\u636E\u5931\u8D25",
			"tag_blacklist_fetch_failed": "\u6807\u7B7E\u9ED1\u540D\u5355\u83B7\u53D6\u5931\u8D25"
		},
		"show_settings_menu": "\u663E\u793A\u8BBE\u7F6E\u83DC\u5355",
		"simple": {
			"auto_read_mode_message": "\u5DF2\u9ED8\u8BA4\u5F00\u542F\u300C\u81EA\u52A8\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F\u300D",
			"no_img": "\u672A\u627E\u5230\u5408\u9002\u7684\u6F2B\u753B\u56FE\u7247\uFF0C\\n\u5982\u6709\u9700\u8981\u53EF\u70B9\u6B64\u5173\u95ED\u7B80\u6613\u9605\u8BFB\u6A21\u5F0F",
			"simple_read_mode": "\u4F7F\u7528\u7B80\u6613\u9605\u8BFB\u6A21\u5F0F"
		}
	},
	touch_area: {
		"menu": "\u83DC\u5355",
		"type": {
			"edge": "\u8FB9\u7F18",
			"l": "L",
			"left_right": "\u5DE6\u53F3",
			"up_down": "\u4E0A\u4E0B"
		}
	},
	translation: {
		"status": {
			"after-translating": "\u7FFB\u8BD1\u540E\u5904\u7406\u4E2D",
			"cancelled": "\u7FFB\u8BD1\u5DF2\u53D6\u6D88",
			"colorizing": "\u6B63\u5728\u4E0A\u8272",
			"default": "\u672A\u77E5\u72B6\u6001",
			"detection": "\u6B63\u5728\u68C0\u6D4B\u6587\u672C",
			"downloading": "\u6B63\u5728\u4E0B\u8F7D",
			"downscaling": "\u6B63\u5728\u7F29\u5C0F\u56FE\u7247",
			"error": "\u7FFB\u8BD1\u51FA\u9519",
			"error-disconnect": "\u4E0E\u670D\u52A1\u5668\u65AD\u5F00\u8FDE\u63A5",
			"error-download": "\u4E0B\u8F7D\u51FA\u9519",
			"error-lang": "\u4F60\u9009\u62E9\u7684\u7FFB\u8BD1\u670D\u52A1\u4E0D\u652F\u6301\u4F60\u9009\u62E9\u7684\u8BED\u8A00",
			"error-too-large": "\u56FE\u7247\u5C3A\u5BF8\u8FC7\u5927\uFF08\u8D85\u8FC7 8000x8000 \u50CF\u7D20\uFF09",
			"error-translating": "\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u4EFB\u4F55\u6587\u672C",
			"error-upload": "\u4E0A\u4F20\u51FA\u9519",
			"error-with-id": "\u7FFB\u8BD1\u51FA\u9519",
			"finished": "\u6B63\u5728\u6574\u7406\u7ED3\u679C",
			"inpainting": "\u6B63\u5728\u4FEE\u8865\u56FE\u7247",
			"mask-generation": "\u6B63\u5728\u751F\u6210\u6587\u672C\u63A9\u7801",
			"ocr": "\u6B63\u5728\u8BC6\u522B\u6587\u672C",
			"pending": "\u6B63\u5728\u7B49\u5F85",
			"pending-pos": "\u6B63\u5728\u7B49\u5F85",
			"preparing": "\u7B49\u5F85\u7A7A\u95F2\u7A97\u53E3",
			"rendering": "\u6B63\u5728\u6E32\u67D3",
			"running_pre_translation_hooks": "\u6B63\u5728\u6267\u884C\u7FFB\u8BD1\u524D\u5904\u7406",
			"saved": "\u4FDD\u5B58\u7ED3\u679C",
			"saving": "\u6B63\u5728\u4FDD\u5B58",
			"skip-no-regions": "\u56FE\u7247\u4E2D\u6CA1\u6709\u68C0\u6D4B\u5230\u6587\u672C\u533A\u57DF",
			"skip-no-text": "\u56FE\u7247\u4E2D\u6CA1\u6709\u68C0\u6D4B\u5230\u6587\u672C",
			"textline_merge": "\u6B63\u5728\u6574\u5408\u6587\u672C",
			"translating": "\u6B63\u5728\u7FFB\u8BD1\u6587\u672C",
			"upload": "\u6B63\u5728\u4E0A\u4F20",
			"uploading": "\u6B63\u5728\u4E0A\u4F20",
			"upscaling": "\u6B63\u5728\u653E\u5927\u56FE\u7247"
		},
		"tip": {
			"check_img_status_failed": "\u68C0\u67E5\u56FE\u7247\u72B6\u6001\u5931\u8D25",
			"download_img_failed": "\u4E0B\u8F7D\u56FE\u7247\u5931\u8D25",
			"get_translator_list_error": "\u83B7\u53D6\u53EF\u7528\u7FFB\u8BD1\u670D\u52A1\u5217\u8868\u65F6\u51FA\u9519",
			"id_not_returned": "\u672A\u8FD4\u56DE id",
			"img_downloading": "\u4E0B\u8F7D\u56FE\u7247\u4E2D",
			"img_not_fully_loaded": "\u56FE\u7247\u672A\u52A0\u8F7D\u5B8C\u6BD5",
			"pending": "\u6B63\u5728\u7B49\u5F85\uFF0C\u5217\u961F\u8FD8\u6709 {{pos}} \u5F20\u56FE\u7247",
			"resize_img_failed": "\u7F29\u653E\u56FE\u7247\u5931\u8D25",
			"translating": "\u7FFB\u8BD1\u56FE\u7247\u4E2D",
			"translation_completed": "\u7FFB\u8BD1\u5B8C\u6210",
			"upload": "\u4E0A\u4F20\u56FE\u7247\u4E2D",
			"upload_error": "\u4E0A\u4F20\u56FE\u7247\u51FA\u9519",
			"upload_return_error": "\u670D\u52A1\u5668\u7FFB\u8BD1\u51FA\u9519",
			"wait_translation": "\u7B49\u5F85\u7FFB\u8BD1"
		},
		"translator": {
			"baidu": "\u767E\u5EA6",
			"deepl": "DeepL",
			"google": "\u8C37\u6B4C",
			"gpt3.5": "GPT-3.5",
			"none": "\u5220\u9664\u6587\u672C",
			"offline": "\u79BB\u7EBF\u6A21\u578B",
			"original": "\u539F\u6587",
			"papago": "Papago",
			"youdao": "\u6709\u9053"
		}
	},
	upscale: {
		"module_download_complete": "\u56FE\u7247\u653E\u5927\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210",
		"module_download_failed": "\u56FE\u7247\u653E\u5927\u6A21\u578B\u4E0B\u8F7D\u5931\u8D25",
		"module_downloading": "\u56FE\u7247\u653E\u5927\u6A21\u578B\u4E0B\u8F7D\u4E2D...",
		"title": "\u65E0\u635F\u653E\u5927\u56FE\u7247",
		"upscaled": "\u5DF2\u653E\u5927",
		"upscaling": "\u653E\u5927\u4E2D",
		"webgpu_tip": "\u65E0\u6CD5\u4F7F\u7528 WebGPU \u653E\u5927\u56FE\u7247\uFF0C\u5904\u7406\u901F\u5EA6\u5C06\u53D8\u6162"
	}
};
//#endregion
//#region node_modules/.pnpm/@solid-primitives+scheduled@1.5.3_solid-js@1.9.14/node_modules/@solid-primitives/scheduled/dist/index.js
/**
* Creates a callback that is debounced and cancellable. The debounced callback is called on **trailing** edge.
*
* The timeout will be automatically cleared on root dispose.
*
* @param callback The callback to debounce
* @param wait The duration to debounce in milliseconds
* @returns The debounced function
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#debounce
*
* @example
* \`\`\`ts
* const fn = debounce((message: string) => console.log(message), 250);
* fn('Hello!');
* fn.clear() // clears a timeout in progress
* \`\`\`
*/
const debounce$1 = (callback, wait) => {
	if (solid_js_web.isServer) return Object.assign(() => void 0, { clear: () => void 0 });
	let timeoutId;
	const clear = () => clearTimeout(timeoutId);
	if (solid_js.getOwner()) solid_js.onCleanup(clear);
	const debounced = (...args) => {
		if (timeoutId !== void 0) clear();
		timeoutId = setTimeout(() => callback(...args), wait);
	};
	return Object.assign(debounced, { clear });
};
/**
* Creates a callback that is throttled and cancellable. The throttled callback is called on **trailing** edge.
*
* The timeout will be automatically cleared on root dispose.
*
* @param callback The callback to throttle
* @param wait The duration to throttle
* @returns The throttled callback trigger
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#throttle
*
* @example
* \`\`\`ts
* const trigger = throttle((val: string) => console.log(val), 250);
* trigger('my-new-value');
* trigger.clear() // clears a timeout in progress
* \`\`\`
*/
const throttle$1 = (callback, wait) => {
	if (solid_js_web.isServer) return Object.assign(() => void 0, { clear: () => void 0 });
	let isThrottled = false, timeoutId, lastArgs;
	const throttled = (...args) => {
		lastArgs = args;
		if (isThrottled) return;
		isThrottled = true;
		timeoutId = setTimeout(() => {
			callback(...lastArgs);
			isThrottled = false;
		}, wait);
	};
	const clear = () => {
		clearTimeout(timeoutId);
		isThrottled = false;
	};
	if (solid_js.getOwner()) solid_js.onCleanup(clear);
	return Object.assign(throttled, { clear });
};
/**
* Creates a scheduled and cancellable callback that will be called on the **leading** edge for the first call, and **trailing** edge for other calls.
*
* The timeout will be automatically cleared on root dispose.
*
* @param schedule {@link debounce} or {@link throttle}
* @param callback The callback to debounce/throttle
* @param wait timeout duration
* @returns The scheduled callback trigger
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#leadingAndTrailing
*
* @example
* \`\`\`ts
* const trigger = leadingAndTrailing(throttle, (val: string) => console.log(val), 250);
* trigger('my-new-value');
* trigger.clear() // clears a timeout in progress
* \`\`\`
*/
function leadingAndTrailing(schedule, callback, wait) {
	if (solid_js_web.isServer) {
		let called = false;
		const scheduled = (...args) => {
			if (called) return;
			called = true;
			callback(...args);
		};
		return Object.assign(scheduled, { clear: () => void 0 });
	}
	let State;
	(function(State) {
		State[State["Ready"] = 0] = "Ready";
		State[State["Leading"] = 1] = "Leading";
		State[State["Trailing"] = 2] = "Trailing";
	})(State || (State = {}));
	let state = State.Ready;
	const scheduled = schedule((args) => {
		state === State.Trailing && callback(...args);
		state = State.Ready;
	}, wait);
	const fn = (...args) => {
		if (state !== State.Trailing) {
			if (state === State.Ready) callback(...args);
			state += 1;
		}
		scheduled(args);
	};
	const clear = () => {
		state = State.Ready;
		scheduled.clear();
	};
	if (solid_js.getOwner()) solid_js.onCleanup(clear);
	return Object.assign(fn, { clear });
}
/**
* Creates a signal used for scheduling execution of solid computations by tracking.
*
* @param schedule Schedule the invalidate function (can be {@link debounce} or {@link throttle})
* @returns A function used to track the signal. It returns \`true\` if the signal is dirty *(callback should be called)* and \`false\` otherwise.
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#createScheduled
*
* @example
* \`\`\`ts
* const debounced = createScheduled(fn => debounce(fn, 250));
*
* createEffect(() => {
*   // track source signal
*   const value = count();
*   // track the debounced signal and check if it's dirty
*   if (debounced()) {
*     console.log('count', value);
*   }
* });
* \`\`\`
*/
function createScheduled(schedule) {
	let listeners = 0;
	let isDirty = false;
	const [track, dirty] = solid_js.createSignal(void 0, { equals: false });
	const call = schedule(() => {
		isDirty = true;
		dirty();
	});
	return () => {
		if (!isDirty) call(), track();
		if (isDirty) {
			isDirty = !!listeners;
			return true;
		}
		if (solid_js.getListener()) {
			listeners++;
			solid_js.onCleanup(() => listeners--);
		}
		return false;
	};
}
//#endregion
//#region node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
	for (key of iter.keys()) if (dequal(key, tar)) return key;
}
function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;
	if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();
		if (ctor === Array) {
			if ((len = foo.length) === bar.length) while (len-- && dequal(foo[len], bar[len]));
			return len === -1;
		}
		if (ctor === Set) {
			if (foo.size !== bar.size) return false;
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === "object") {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}
		if (ctor === Map) {
			if (foo.size !== bar.size) return false;
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === "object") {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) return false;
			}
			return true;
		}
		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len = foo.byteLength) === bar.byteLength) while (len-- && foo.getInt8(len) === bar.getInt8(len));
			return len === -1;
		}
		if (ArrayBuffer.isView(foo)) {
			if ((len = foo.byteLength) === bar.byteLength) while (len-- && foo[len] === bar[len]);
			return len === -1;
		}
		if (!ctor || typeof foo === "object") {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}
	return foo !== foo && bar !== bar;
}
//#endregion
//#region src/helper/other.ts
/** \u56FE\u7247\u6587\u4EF6\u6269\u5C55\u540D\u7F29\u5199 */
const fileType = {
	j: "jpg",
	p: "png",
	g: "gif",
	w: "webp",
	b: "bmp"
};
/** \u5C06\u8C03\u8BD5\u53D8\u91CF\u6302\u5230\u5168\u5C40 CRSD \u5BF9\u8C61\u4E0A */
const exposeToGlobal = (obj) => {};
const throttle = (fn, wait = 100) => leadingAndTrailing(throttle$1, fn, wait);
const debounce = (fn, wait = 100) => debounce$1(fn, wait);
const sleep = (ms) => new Promise((resolve) => {
	setTimeout(resolve, ms);
});
const clamp = (min, val, max) => Math.max(Math.min(max, val), min);
const inRange = (min, val, max) => val >= min && val <= max;
const getFileName = (url) => /.+\\/(?<name>[^?]+)/u.exec(url)?.groups?.name;
const isString = (val) => typeof val === "string";
const isNumber = (val) => typeof val === "number";
const isArray = (val) => Array.isArray(val);
/** \u5224\u65AD\u4E24\u4E2A\u6570\u662F\u5426\u5728\u6307\u5B9A\u8BEF\u5DEE\u8303\u56F4\u5185\u76F8\u7B49 */
const approx = (val, target, range = 1) => Math.abs(target - val) <= range;
/** \u521B\u5EFA\u4E00\u4E2A\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\u7684\u51FD\u6570\uFF0C\u5E76\u7F13\u5B58\u9996\u6B21\u8C03\u7528\u7684\u8FD4\u56DE\u503C */
const once = (fn) => {
	let wrapper = (...args) => {
		const result = fn(...args);
		wrapper = () => result;
		return result;
	};
	return (...args) => wrapper(...args);
};
function range(a, b, c) {
	switch (typeof b) {
		case "undefined": return [...Array.from({ length: a }).keys()];
		case "number": {
			const list = [];
			for (let i = a; i < b; i++) list.push(c ? c(i) : i);
			return list;
		}
		case "function": return Array.from({ length: a }, (_, i) => b(i));
		case "string": return Array.from({ length: a }, () => b);
	}
}
/** \u5224\u65AD\u8282\u70B9\u662F\u5426\u4E3A\u5143\u7D20\u8282\u70B9 */
const isHTMLElement = (node) => node.nodeType === Node.ELEMENT_NODE;
/** \u5224\u65AD\u8282\u70B9\u662F\u5426\u4E3A\u56FE\u7247\u5143\u7D20\u8282\u70B9 */
const isImageElement = (node) => node.nodeName === "IMG";
/**
* \u5BF9 document.querySelector \u7684\u5C01\u88C5
* \u5C06\u9ED8\u8BA4\u8FD4\u56DE\u7C7B\u578B\u6539\u4E3A HTMLElement
*/
const querySelector = (selector) => document.querySelector(selector);
/**
* \u5BF9 document.querySelector \u7684\u5C01\u88C5
* \u5C06\u9ED8\u8BA4\u8FD4\u56DE\u7C7B\u578B\u6539\u4E3A HTMLElement
*/
const querySelectorAll = (selector) => [...document.querySelectorAll(selector)];
/** \u8FD4\u56DE Dom \u7684\u70B9\u51FB\u51FD\u6570 */
const querySelectorClick = (selector, textContent) => {
	let getDom;
	if (typeof selector === "function") getDom = selector;
	else if (textContent) getDom = () => querySelectorAll(selector).find((e) => e.textContent?.includes(textContent));
	else getDom = () => querySelector(selector);
	if (getDom()) return () => getDom()?.click();
};
/** \u627E\u51FA\u6570\u7EC4\u4E2D\u51FA\u73B0\u6700\u591A\u6B21\u7684\u5143\u7D20 */
const getMostItem = (list) => {
	const counts = /* @__PURE__ */ new Map();
	for (const val of list) counts.set(val, (counts.get(val) ?? 0) + 1);
	return [...counts.entries()].reduce((maxItem, item) => maxItem[1] > item[1] ? maxItem : item)[0];
};
/** \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4E3A URL */
const isUrl = (text) => {
	try {
		return Boolean(new URL(text));
	} catch {
		return false;
	}
};
/** \u5C06 blob \u6570\u636E\u4F5C\u4E3A\u6587\u4EF6\u4FDD\u5B58\u81F3\u672C\u5730 */
const saveAs = (blob, name = "download") => {
	const a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
	a.download = name;
	a.rel = "noopener";
	a.href = URL.createObjectURL(blob);
	setTimeout(() => a.dispatchEvent(new MouseEvent("click")));
};
/** \u6EDA\u52A8\u9875\u9762\u5230\u6307\u5B9A\u5143\u7D20\u7684\u6240\u5728\u4F4D\u7F6E */
const scrollIntoView = (selector, behavior = "instant") => querySelector(selector)?.scrollIntoView({ behavior });
/** \u786E\u4FDD\u51FD\u6570\u5728\u540C\u4E00\u65F6\u95F4\u4E0B\u53EA\u6709\u4E00\u4E2A\u5728\u8FD0\u884C */
const singleThreaded = (callback, initState) => {
	const state = {
		running: false,
		argList: [],
		continueRun: (...args) => state.argList.length > 0 || state.argList.push(args),
		...initState
	};
	const work = async () => {
		if (state.argList.length === 0) return;
		const args = state.argList.shift();
		try {
			state.running = true;
			await callback(state, ...args);
		} catch (error) {
			await sleep(100);
			if (state.argList.length === 0) throw error;
		} finally {
			if (state.abandon) state.argList.length = 0;
			if (state.argList.length > 0) setTimeout(work, state.timeout);
			else state.running = false;
		}
	};
	return (...args) => {
		state.argList.push(args);
		if (!state.running) return work();
	};
};
/**
* \u9650\u5236 Promise \u5E76\u53D1
* @param fnList \u4EFB\u52A1\u51FD\u6570\u5217\u8868
* @param callBack \u6210\u529F\u6267\u884C\u4E00\u4E2A Promise \u540E\u8C03\u7528\uFF0C\u4E3B\u8981\u7528\u4E8E\u663E\u793A\u8FDB\u5EA6
* @param limit \u9650\u5236\u6570
* @returns \u6240\u6709 Promise \u7684\u8FD4\u56DE\u503C
*/
const plimit = async (fnList, callBack = void 0, limit = 10) => {
	let doneNum = 0;
	const totalNum = fnList.length;
	const resList = [];
	const execPool = /* @__PURE__ */ new Set();
	const taskList = fnList.map((fn, i) => {
		let p;
		return () => {
			p = (async () => {
				resList[i] = await fn();
				doneNum += 1;
				execPool.delete(p);
				callBack?.(doneNum, totalNum, resList, i);
			})();
			execPool.add(p);
		};
	});
	while (doneNum !== totalNum) {
		while (taskList.length > 0 && execPool.size < limit) taskList.shift()();
		await Promise.race(execPool);
	}
	return resList;
};
/** Promise \u5E76\u53D1\u961F\u5217 */
var PQueue = class {
	wait = /* @__PURE__ */ new Set();
	running = /* @__PURE__ */ new Set();
	done = /* @__PURE__ */ new Set();
	handleTask;
	concurrency;
	constructor(handleTask, concurrency = 1) {
		this.handleTask = handleTask;
		this.concurrency = concurrency;
	}
	has = (item) => this.running.has(item) || this.done.has(item) || this.wait.has(item);
	async processQueue() {
		if (this.running.size >= this.concurrency || this.wait.size === 0) return;
		const [item] = this.wait;
		if (item === void 0) return;
		this.wait.delete(item);
		if (!this.running.has(item)) try {
			this.running.add(item);
			await this.handleTask(item);
			this.done.add(item);
		} catch (error) {
			console.error(error);
		} finally {
			this.running.delete(item);
		}
		return this.processQueue();
	}
	add(item) {
		if (this.has(item)) return;
		this.wait.add(item);
		this.processQueue();
	}
	set(...items) {
		this.wait.clear();
		this.wait = new Set(items.filter((item) => !this.has(item)));
		this.processQueue();
	}
	clear() {
		this.wait.clear();
		this.done.clear();
	}
};
/**
* \u5224\u65AD\u4F7F\u7528\u53C2\u6570\u989C\u8272\u4F5C\u4E3A\u9ED8\u8BA4\u503C\u65F6\u662F\u5426\u9700\u8981\u5207\u6362\u4E3A\u9ED1\u6697\u6A21\u5F0F
* @param hexColor \u5341\u516D\u8FDB\u5236\u989C\u8272\u3002\u4F8B\u5982 #112233
*/
const needDarkMode = (hexColor) => {
	const r = Number.parseInt(hexColor.slice(1, 3), 16);
	const g = Number.parseInt(hexColor.slice(3, 5), 16);
	const b = Number.parseInt(hexColor.slice(5, 7), 16);
	return (r * 299 + g * 587 + b * 114) / 1e3 < 128;
};
async function wait(fn, timeout = Infinity, waitTime = 100) {
	let res = await fn();
	let _timeout = timeout;
	while (_timeout > 0 && !res) {
		await sleep(waitTime);
		_timeout -= waitTime;
		res = await fn();
	}
	return res;
}
function waitDom(selector, count = 1, timeout) {
	return wait(() => {
		const elements = document.querySelectorAll(selector);
		return elements.length >= count ? [...elements] : void 0;
	}, timeout);
}
/** \u7B49\u5F85\u6307\u5B9A\u7684\u56FE\u7247\u5143\u7D20\u52A0\u8F7D\u5B8C\u6210 */
const waitImgLoad = (target, timeout) => new Promise((resolve, reject) => {
	const img = typeof target === "string" ? new Image() : target;
	if (img.complete && img.naturalHeight) resolve(img);
	const id = timeout ? window.setTimeout(() => reject(/* @__PURE__ */ new Error("timeout")), timeout) : void 0;
	const handleError = (e) => {
		window.clearTimeout(id);
		reject(new Error(e.message));
	};
	const handleLoad = () => {
		window.clearTimeout(id);
		img.removeEventListener("error", handleError);
		resolve(img);
	};
	img.addEventListener("load", handleLoad, { once: true });
	img.addEventListener("error", handleError, { once: true });
	if (typeof target === "string") img.src = target;
});
/** \u5C06\u6307\u5B9A\u7684\u5E03\u5C14\u503C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u6216\u672A\u5B9A\u4E49 */
const boolDataVal = (val) => val ? "" : void 0;
/** \u6D4B\u8BD5\u56FE\u7247 url \u80FD\u5426\u6B63\u786E\u52A0\u8F7D */
const testImgUrl = (url) => new Promise((resolve) => {
	const img = new Image();
	img.onload = () => resolve(true);
	img.onerror = () => resolve(false);
	img.src = url;
});
const canvasToBlob = (canvas, type, quality = 1) => {
	if (canvas instanceof OffscreenCanvas) return canvas.convertToBlob({
		type,
		quality
	});
	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => blob ? resolve(blob) : reject(/* @__PURE__ */ new Error("Canvas toBlob failed")), type, quality);
	});
};
const canvasToBlobUrl = async (canvas, type, quality = 1) => {
	const blob = await canvasToBlob(canvas, type, quality);
	return URL.createObjectURL(blob);
};
/**
* \u6C42 a \u548C b \u7684\u5DEE\u96C6\uFF0C\u76F8\u5F53\u4E8E\u4ECE a \u4E2D\u5220\u53BB\u548C b \u76F8\u540C\u7684\u5C5E\u6027
*
* \u4E0D\u4F1A\u4FEE\u6539\u53C2\u6570\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u7684\u662F\u65B0\u5BF9\u8C61
*/
const difference = (a, b) => {
	const res = {};
	const keys = Object.keys(a);
	for (const key of keys) if (typeof a[key] === "object" && typeof b[key] === "object") {
		const _res = difference(a[key], b[key]);
		if (Object.keys(_res).length > 0) res[key] = _res;
	} else if (a[key] !== b?.[key]) res[key] = a[key];
	return res;
};
const _assign = (a, b) => {
	const res = JSON.parse(JSON.stringify(a));
	const keys = Object.keys(b);
	for (const key of keys) if (res[key] === void 0) res[key] = b[key];
	else if (typeof b[key] === "object") {
		const _res = _assign(res[key], b[key]);
		if (Object.keys(_res).length > 0) res[key] = _res;
	} else if (res[key] !== b[key]) res[key] = b[key];
	return res;
};
/**
* Object.assign \u7684\u6DF1\u62F7\u8D1D\u7248\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u5B50\u5BF9\u8C61\u5C5E\u6027\u7684\u7F3A\u5931
*
* \u4E0D\u4F1A\u4FEE\u6539\u53C2\u6570\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u7684\u662F\u65B0\u5BF9\u8C61
*/
const assign = (target, ...sources) => {
	let res = target;
	for (const source of sources) if (typeof source === "object") res = _assign(res, source);
	return res;
};
/** \u6839\u636E\u8DEF\u5F84\u83B7\u53D6\u5BF9\u8C61\u4E0B\u7684\u6307\u5B9A\u503C */
const byPath = (obj, path, handleVal) => {
	const keys = typeof path === "string" ? path.split(".") : path;
	let target = obj;
	for (let i = 0; i < keys.length; i++) {
		let key = keys[i];
		while (!Reflect.has(target, key) && i < keys.length) {
			i += 1;
			if (keys[i] === void 0) break;
			key += \`.\${keys[i]}\`;
		}
		if (handleVal && i > keys.length - 2 && Reflect.has(target, key)) {
			const res = handleVal(target, key);
			while (i < keys.length - 1) {
				target = target[key];
				i += 1;
				key = keys[i];
			}
			if (res !== void 0) target[key] = res;
			break;
		}
		target = target[key];
	}
	if (target === obj) return null;
	return target;
};
const requestIdleCallback$1 = (callback, timeout) => {
	if (Reflect.has(window, "requestIdleCallback")) return window.requestIdleCallback(callback, { timeout });
	return window.setTimeout(callback, 16);
};
/** \u83B7\u53D6\u952E\u76D8\u4E8B\u4EF6\u7684\u7F16\u7801 */
const getKeyboardCode = (e) => {
	let { key } = e;
	switch (key) {
		case "Shift":
		case "Control":
		case "Alt": return key;
	}
	key = key.replaceAll(/\\b[A-Z]\\b/gu, (match) => match.toLowerCase());
	if (e.ctrlKey) key = \`Ctrl + \${key}\`;
	if (e.altKey) key = \`Alt + \${key}\`;
	if (e.shiftKey) key = \`Shift + \${key}\`;
	return key;
};
/** \u5C06\u5FEB\u6377\u952E\u7684\u7F16\u7801\u8F6C\u6362\u6210\u66F4\u6613\u8BFB\u7684\u5F62\u5F0F */
const keyboardCodeToText = (code) => code.replace("Control", "Ctrl").replace("ArrowUp", "\u2191").replace("ArrowDown", "\u2193").replace("ArrowLeft", "\u2190").replace("ArrowRight", "\u2192").replace(/^\\s$/u, "Space");
/** \u5C06 HTML \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A DOM \u5BF9\u8C61 */
const domParse = (html) => new DOMParser().parseFromString(html, "text/html");
/**
* \u52AB\u6301\u4FEE\u6539\u539F\u7F51\u9875\u4E0A\u7684\u51FD\u6570
*
* \u5982\u679C\u4F20\u5165\u51FD\u6570\u7684\u6240\u9700\u53C2\u6570\u4E3A\u96F6\uFF0C\u5C06\u5728\u539F\u51FD\u6570\u6267\u884C\u5B8C\u540E\u81EA\u52A8\u8C03\u7528
*/
const hijackFn = (fnName, fn) => {
	const rawFn = unsafeWindow[fnName];
	unsafeWindow[fnName] = fn.length === 0 ? (...args) => {
		const res = rawFn(...args);
		fn();
		return res;
	} : (...args) => fn(rawFn, args);
};
/**
* \u786E\u4FDD\u6307\u5B9A key \u7684\u503C\u4E00\u5B9A\u5B58\u5728
* \u5982\u679C\u5BF9\u5E94\u503C\u4E0D\u5B58\u5728\uFF0C\u5219\u4F7F\u7528 defaultValue \u6765\u8BBE\u7F6E\u503C\uFF0C\u7136\u540E\u8FD4\u56DE\u8BE5\u503C
* defaultValue \u53EF\u4EE5\u662F\u9ED8\u8BA4\u503C\uFF0C\u6216\u8005\u8FD4\u56DE\u9ED8\u8BA4\u503C\u7684\u51FD\u6570
* \u4E5F\u53EF\u4EE5\u662F\u4F7F\u7528\u4E86 GM.setValue \u6765\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u7684\u51FD\u6570\uFF08\u6B64\u65F6\u4E5F\u4F1A\u8FD4\u56DE\u88AB\u8BBE\u7F6E\u7684\u503C\uFF09
*/
const ensureGmValue = async (name, defaultValue) => {
	const value = await GM.getValue(name);
	if (value !== void 0) return value;
	if (typeof defaultValue !== "function") {
		await GM.setValue(name, defaultValue);
		return defaultValue;
	}
	const fnRes = await defaultValue();
	if (fnRes !== void 0) {
		await GM.setValue(name, fnRes);
		return fnRes;
	}
	return await GM.getValue(name);
};
/** \u6839\u636E\u8303\u56F4\u6587\u672C\u63D0\u53D6\u6307\u5B9A\u8303\u56F4\u7684\u5143\u7D20\u7684 index */
const extractRange = (rangeText, length) => {
	const list = /* @__PURE__ */ new Set();
	for (const text of rangeText.replaceAll(/[^\\d,-]/gu, "").split(",")) if (/^\\d+$/u.test(text)) list.add(Number(text) - 1);
	else if (/^\\d*-\\d*$/u.test(text)) {
		let [start, end] = text.split("-").map(Number);
		end ||= length;
		for (start--, end--; start <= end; start++) list.add(start);
	}
	return list;
};
/** extractRange \u7684\u9006\u5411\uFF0C\u6309\u7167\u76F8\u540C\u7684\u8BED\u6CD5\u8868\u8FF0\u4E00\u4E2A\u7ED3\u679C\u6570\u7EC4 */
const descRange = (list, length) => {
	let text = "";
	const nowRange = [];
	const pushRange = (newIndex) => {
		if (nowRange.length === 0) return;
		if (text.length > 0) text += ", ";
		if (nowRange.length === 1) text += nowRange[0] + 1;
		else {
			const end = newIndex === void 0 && nowRange[1] === length - 1 ? "" : nowRange[1] + 1;
			text += \`\${nowRange[0] + 1}-\${end}\`;
		}
		nowRange.length = 0;
		if (newIndex !== void 0) nowRange[0] = newIndex;
	};
	for (const i of list) switch (nowRange.length) {
		case 0:
			nowRange[0] = i;
			break;
		case 1:
			if (i === nowRange[0] + 1) nowRange[1] = i;
			else pushRange(i);
			break;
		case 2: if (i === nowRange[1] + 1) nowRange[1] = i;
		else pushRange(i);
	}
	pushRange();
	return text;
};
/** \u76D1\u542C url \u53D8\u5316 */
const onUrlChange = (fn, handleUrl = (location) => location.href) => {
	let lastUrl = "";
	const refresh = singleThreaded(async () => {
		if (!await wait(() => handleUrl(location) !== lastUrl, 5e3)) return;
		const nowUrl = handleUrl(location);
		await fn(lastUrl, nowUrl);
		lastUrl = nowUrl;
	});
	const controller = new AbortController();
	for (const eventName of ["click", "popstate"]) window.addEventListener(eventName, refresh, {
		capture: true,
		signal: controller.signal
	});
	refresh();
	return () => controller.abort();
};
/** wait\uFF0C\u4F46\u662F\u53EA\u5728 url \u53D8\u5316\u65F6\u5224\u65AD */
const waitUrlChange = (isValidUrl) => new Promise((resolve) => {
	const abort = onUrlChange(async () => {
		const res = await isValidUrl();
		if (!res) return;
		resolve(res);
		abort();
	});
});
var AnimationFrame = class {
	animationId = 0;
	call = (force) => {
		if (!force && this.animationId) return;
		this.animationId = requestAnimationFrame(this.frame);
	};
	cancel = () => {
		if (!this.animationId) return;
		cancelAnimationFrame(this.animationId);
		this.animationId = 0;
	};
};
/** \u9501\u5B9A\u5C4F\u5E55\u7981\u6B62\u81EA\u52A8\u7184\u5C4F */
var WakeLock = class {
	isSupported = false;
	lock = null;
	constructor() {
		if (!("wakeLock" in navigator)) return;
		this.isSupported = true;
	}
	on = async () => {
		if (!this.isSupported) return null;
		try {
			this.lock = await navigator.wakeLock.request("screen");
			return this.lock.released;
		} catch {
			return false;
		}
	};
	off = async () => {
		if (!this.lock) return;
		await this.lock.release();
		this.lock = null;
	};
};
/**
* \u83B7\u53D6\u56FE\u7247\u50CF\u7D20\u6570\u636E
*
* \u4F20\u5165 maxSize \u65F6\u6309\u6700\u957F\u8FB9\u7F29\u653E\u5230\u8BE5\u5C3A\u5BF8\u5185
*/
const getImageData = (img, maxSize) => {
	const { naturalWidth: width, naturalHeight: height } = img;
	if (!width || !height) throw new Error(\`\u56FE\u7247\u672A\u52A0\u8F7D\u5B8C\u6210: \${img.src}\`);
	const scale = maxSize && maxSize > 0 ? Math.min(maxSize / width, maxSize / height) : 1;
	const w = Math.max(1, Math.floor(width * scale));
	const h = Math.max(1, Math.floor(height * scale));
	const ctx = new OffscreenCanvas(w, h).getContext("2d", { willReadFrequently: true });
	if (scale !== 1) ctx.imageSmoothingEnabled = false;
	ctx.drawImage(img, 0, 0, w, h);
	return ctx.getImageData(0, 0, w, h);
};
const withEventStop = (handler) => (e) => {
	e.stopPropagation();
	e.preventDefault();
	if (handler) handler(e);
};
/** \u5224\u65AD\u7248\u672C\u53F71\u662F\u5426\u5C0F\u4E8E\u7248\u672C\u53F72 */
const versionLt = (version1, version2) => {
	const v1 = version1.split(".").map(Number);
	const v2 = version2.split(".").map(Number);
	for (let i = 0; i < 3; i++) {
		const num1 = v1[i] ?? 0;
		const num2 = v2[i] ?? 0;
		if (num1 !== num2) return num1 < num2;
	}
	return false;
};
//#endregion
//#region src/helper/i18n.ts
const [lang, setLang] = solid_js.createSignal("zh");
const setInitLang = async () => setLang(await helper_languages.getInitLang());
const t = solid_js.createRoot(() => {
	solid_js.createEffect(solid_js.on(lang, () => helper_languages.setSaveLang(lang()), { defer: true }));
	const locales = solid_js.createMemo(() => {
		switch (lang()) {
			case "en": return en_default;
			case "ru": return ru_default;
			default: return zh_default;
		}
	});
	return (keys, variables) => {
		let text = byPath(locales(), keys) ?? "";
		if (variables) for (const [k, v] of Object.entries(variables)) text = text.replaceAll(\`{{\${k}}}\`, String(v));
		return text;
	};
});
//#endregion
//#region src/helper/logger.ts
const prefix = ["%cComicRead", "background-color: #607d8b; color: white; padding: 2px 4px; border-radius: 4px;"];
const log = (...args) => console.log(...prefix, ...args);
log.warn = (...args) => console.warn(...prefix, ...args);
log.error = (...args) => console.error(...prefix, ...args);
//#endregion
//#region node_modules/.pnpm/@solid-primitives+trigger@1.2.4_solid-js@1.9.14/node_modules/@solid-primitives/trigger/dist/index.js
const triggerOptions = !solid_js_web.isServer && solid_js.DEV ? {
	equals: false,
	name: "trigger"
} : { equals: false };
const triggerCacheOptions = !solid_js_web.isServer && solid_js.DEV ? {
	equals: false,
	internal: true
} : triggerOptions;
var TriggerCache = class {
	#map;
	constructor(mapConstructor = Map) {
		this.#map = new mapConstructor();
	}
	dirty(key) {
		if (solid_js_web.isServer) return;
		this.#map.get(key)?.$$();
	}
	dirtyAll() {
		if (solid_js_web.isServer) return;
		for (const trigger of this.#map.values()) trigger.$$();
	}
	track(key) {
		if (!solid_js.getListener()) return;
		let trigger = this.#map.get(key);
		if (!trigger) {
			const [$, $$] = solid_js.createSignal(void 0, triggerCacheOptions);
			this.#map.set(key, trigger = {
				$,
				$$,
				n: 1
			});
		} else trigger.n++;
		solid_js.onCleanup(() => {
			if (--trigger.n === 0) queueMicrotask(() => trigger.n === 0 && this.#map.delete(key));
		});
		trigger.$();
	}
};
//#endregion
//#region node_modules/.pnpm/@solid-primitives+map@0.7.4_solid-js@1.9.14/node_modules/@solid-primitives/map/dist/index.js
const $OBJECT = Symbol("track-object");
/**
* A reactive version of \`Map\` data structure. All the reads (like \`get\` or \`has\`) are signals, and all the writes (\`delete\` or \`set\`) will cause updates to appropriate signals.
* @param initial initial entries of the reactive map
* @param equals signal equals function, determining if a change should cause an update
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/map#ReactiveMap
* @example
* const userPoints = new ReactiveMap<User, number>();
* createEffect(() => {
*    userPoints.get(user1) // => T: number | undefined (reactive)
*    userPoints.has(user1) // => T: boolean (reactive)
*    userPoints.size // => T: number (reactive)
* });
* // apply changes
* userPoints.set(user1, 100);
* userPoints.delete(user2);
* userPoints.set(user1, { foo: "bar" });
*/
var ReactiveMap = class extends Map {
	#keyTriggers = new TriggerCache();
	#valueTriggers = new TriggerCache();
	[Symbol.iterator]() {
		return this.entries();
	}
	constructor(entries) {
		super();
		if (entries) for (const entry of entries) super.set(...entry);
	}
	get size() {
		this.#keyTriggers.track($OBJECT);
		return super.size;
	}
	*keys() {
		this.#keyTriggers.track($OBJECT);
		for (const key of super.keys()) yield key;
	}
	*values() {
		this.#valueTriggers.track($OBJECT);
		for (const value of super.values()) yield value;
	}
	*entries() {
		this.#keyTriggers.track($OBJECT);
		this.#valueTriggers.track($OBJECT);
		for (const entry of super.entries()) yield entry;
	}
	forEach(callbackfn, thisArg) {
		this.#keyTriggers.track($OBJECT);
		this.#valueTriggers.track($OBJECT);
		super.forEach(callbackfn, thisArg);
	}
	has(key) {
		this.#keyTriggers.track(key);
		return super.has(key);
	}
	get(key) {
		this.#valueTriggers.track(key);
		return super.get(key);
	}
	set(key, value) {
		const hadNoKey = !super.has(key);
		const hasChanged = super.get(key) !== value;
		const result = super.set(key, value);
		if (hasChanged || hadNoKey) solid_js.batch(() => {
			if (hadNoKey) {
				this.#keyTriggers.dirty($OBJECT);
				this.#keyTriggers.dirty(key);
			}
			if (hasChanged) {
				this.#valueTriggers.dirty($OBJECT);
				this.#valueTriggers.dirty(key);
			}
		});
		return result;
	}
	delete(key) {
		const isDefined = super.get(key) !== void 0;
		const result = super.delete(key);
		if (result) solid_js.batch(() => {
			this.#keyTriggers.dirty($OBJECT);
			this.#valueTriggers.dirty($OBJECT);
			this.#keyTriggers.dirty(key);
			if (isDefined) this.#valueTriggers.dirty(key);
		});
		return result;
	}
	clear() {
		if (super.size === 0) return;
		solid_js.batch(() => {
			this.#keyTriggers.dirty($OBJECT);
			this.#valueTriggers.dirty($OBJECT);
			for (const key of super.keys()) {
				this.#keyTriggers.dirty(key);
				this.#valueTriggers.dirty(key);
			}
			super.clear();
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@solid-primitives+set@0.7.4_solid-js@1.9.14/node_modules/@solid-primitives/set/dist/index.js
const $KEYS = Symbol("track-keys");
/**
* A reactive version of a Javascript built-in \`Set\` class.
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/set#ReactiveSet
* @example
* const set = new ReactiveSet([1,2,3]);
* [...set] // reactive on any change
* set.has(2) // reactive on change to the result
* // apply changes
* set.add(4)
* set.delete(2)
* set.clear()
*/
var ReactiveSet = class extends Set {
	#triggers = new TriggerCache();
	constructor(values) {
		super();
		if (values) for (const value of values) super.add(value);
	}
	[Symbol.iterator]() {
		return this.values();
	}
	get size() {
		this.#triggers.track($KEYS);
		return super.size;
	}
	has(value) {
		this.#triggers.track(value);
		return super.has(value);
	}
	keys() {
		return this.values();
	}
	*values() {
		this.#triggers.track($KEYS);
		for (const value of super.values()) yield value;
	}
	*entries() {
		this.#triggers.track($KEYS);
		for (const entry of super.entries()) yield entry;
	}
	forEach(callbackfn, thisArg) {
		this.#triggers.track($KEYS);
		super.forEach(callbackfn, thisArg);
	}
	add(value) {
		if (!super.has(value)) {
			super.add(value);
			solid_js.batch(() => {
				this.#triggers.dirty(value);
				this.#triggers.dirty($KEYS);
			});
		}
		return this;
	}
	delete(value) {
		const result = super.delete(value);
		if (result) solid_js.batch(() => {
			this.#triggers.dirty(value);
			this.#triggers.dirty($KEYS);
		});
		return result;
	}
	clear() {
		if (!super.size) return;
		solid_js.batch(() => {
			this.#triggers.dirty($KEYS);
			for (const member of super.values()) this.#triggers.dirty(member);
			super.clear();
		});
	}
};
//#endregion
//#region src/helper/solidJs.ts
let publicOwner;
solid_js.createRoot(() => {
	publicOwner = solid_js.getOwner();
});
/** \u4F1A\u81EA\u52A8\u8BBE\u7F6E equals \u7684 createSignal */
const createEqualsSignal = ((init, options) => solid_js.createSignal(init, {
	equals: dequal,
	...options
}));
/** \u4F1A\u81EA\u52A8\u8BBE\u7F6E equals \u548C createRoot \u7684 createMemo */
const createRootMemo = ((fn, init, options) => {
	if (fn.name === "bound readSignal") return fn;
	const _init = init ?? fn(void 0);
	const _options = options?.equals === void 0 && typeof _init === "object" ? {
		...options,
		equals: dequal
	} : options;
	return solid_js.getOwner() ? solid_js.createMemo(fn, _init, _options) : solid_js.runWithOwner(publicOwner, () => solid_js.createMemo(fn, _init, _options));
});
/** \u8282\u6D41\u7684 createMemo */
const createThrottleMemo = (fn, wait = 100, init = fn(void 0), options) => {
	const scheduled = createScheduled((_fn) => throttle(_fn, wait));
	return createRootMemo((prev) => scheduled() ? fn(prev) : prev, init, options);
};
const createMemoMap = (fnMap) => {
	const memoMap = Object.fromEntries(Object.entries(fnMap).map(([key, fn]) => [key, createRootMemo(fn)]));
	return createRootMemo(() => {
		const obj = {};
		for (const key of Object.keys(memoMap)) Reflect.set(obj, key, memoMap[key]());
		return obj;
	});
};
const createRootEffect = ((fn, val, options) => solid_js.getOwner() ? solid_js.createEffect(fn, val, options) : solid_js.runWithOwner(publicOwner, () => solid_js.createEffect(fn, val, options)));
const createEffectOn = ((deps, fn, options) => createRootEffect(solid_js.on(deps, fn, options)));
const onAutoMount = (fn) => {
	const owner = solid_js.getOwner();
	if (!owner) return fn(owner);
	solid_js.onMount(() => {
		const cleanFn = fn(owner);
		if (cleanFn) solid_js.onCleanup(cleanFn);
	});
};
//#endregion
//#region src/helper/useCache.ts
const promisifyRequest = (request) => new Promise((resolve, reject) => {
	request.onsuccess = () => resolve(request.result);
	request.onerror = () => reject(request.error);
});
const openDb = (name, version, initSchema) => new Promise((resolve, reject) => {
	const request = indexedDB.open(\`ComicReadScript\${name}\`, version);
	request.onupgradeneeded = () => initSchema(request.result);
	request.onsuccess = () => resolve(request.result);
	request.onerror = (error) => {
		console.error("\u6570\u636E\u5E93\u6253\u5F00\u5931\u8D25", error);
		reject(/* @__PURE__ */ new Error("\u6570\u636E\u5E93\u6253\u5F00\u5931\u8D25"));
	};
});
const useCache = async (schema, name = "", version = 2) => {
	const db = await openDb(name, version, typeof schema === "function" ? schema : (db) => {
		for (const storeName of db.objectStoreNames) if (!Reflect.has(schema, storeName)) db.deleteObjectStore(storeName);
		for (const storeName of Object.keys(schema)) if (!db.objectStoreNames.contains(storeName)) db.createObjectStore(storeName, { keyPath: schema[storeName] });
	});
	return {
		set: (storeName, value) => promisifyRequest(db.transaction(storeName, "readwrite").objectStore(storeName).put(value)),
		get: (storeName, query) => promisifyRequest(db.transaction(storeName, "readonly").objectStore(storeName).get(query)),
		del: (storeName, query) => promisifyRequest(db.transaction(storeName, "readwrite").objectStore(storeName).delete(query)),
		each(storeName, callback) {
			const request = db.transaction(storeName, "readwrite").objectStore(storeName).openCursor();
			request.onsuccess = async function onsuccess(event) {
				const cursor = event.target.result;
				if (!cursor) return;
				await callback(cursor.value, cursor);
				cursor.continue();
			};
		}
	};
};
//#endregion
//#region src/helper/useDrag.ts
const createPointerState = (e, type = "down") => {
	const xy = [e.clientX, e.clientY];
	return {
		id: e.pointerId,
		type,
		xy,
		initial: xy,
		last: xy,
		startTime: performance.now(),
		target: e.target
	};
};
const useDrag = ({ ref, handleDrag, easyMode, handleClick, skip, setCapture, touches = /* @__PURE__ */ new Map() }) => {
	onAutoMount(() => {
		const controller = new AbortController();
		const options = {
			capture: false,
			passive: true,
			signal: controller.signal
		};
		let allowClick = -1;
		const handleDown = (e) => {
			if (skip?.(e)) return;
			e.stopPropagation();
			if (!easyMode?.() && e.buttons !== 1) return;
			if (setCapture) ref.setPointerCapture(e.pointerId);
			const state = createPointerState(e);
			touches.set(e.pointerId, state);
			handleDrag(state, e);
			allowClick = window.setTimeout(() => {
				allowClick = 0;
			}, 300);
		};
		const handleMove = (e) => {
			e.preventDefault();
			if (!easyMode?.() && e.buttons !== 1) return;
			const state = touches.get(e.pointerId);
			if (!state) return;
			state.type = "move";
			state.xy = [e.clientX, e.clientY];
			handleDrag(state, e);
			state.last = state.xy;
			if (allowClick > 0 && (Math.abs(e.clientX - state.initial[0]) > 5 || Math.abs(e.clientY - state.initial[1]) > 5)) {
				window.clearTimeout(allowClick);
				allowClick = -2;
			}
		};
		const handleUp = (e) => {
			e.stopPropagation();
			ref.releasePointerCapture(e.pointerId);
			const state = touches.get(e.pointerId);
			if (!state) return;
			touches.delete(e.pointerId);
			state.type = "up";
			state.xy = [e.clientX, e.clientY];
			if (handleClick && allowClick && touches.size === 0 && approx(state.xy[0] - state.initial[0], 0, 5) && approx(state.xy[1] - state.initial[1], 0, 5)) handleClick(e, state.target);
			window.clearTimeout(allowClick);
			handleDrag(state, e);
		};
		const handleCancel = (e) => {
			e.stopPropagation();
			ref.releasePointerCapture(e.pointerId);
			const state = touches.get(e.pointerId);
			if (!state) return;
			state.type = "cancel";
			handleDrag(state, e);
			touches.clear();
		};
		ref.addEventListener("pointerdown", handleDown, options);
		ref.addEventListener("pointermove", handleMove, {
			...options,
			passive: false
		});
		ref.addEventListener("pointerup", handleUp, options);
		ref.addEventListener("pointercancel", handleCancel, options);
		if (easyMode) {
			ref.addEventListener("pointerover", handleDown, options);
			ref.addEventListener("pointerout", handleUp, options);
		}
		ref.addEventListener("click", (e) => {
			if (allowClick > 0 && touches.size === 0 || skip?.(e)) return;
			e.stopPropagation();
			e.preventDefault();
		}, { capture: true });
		return () => controller.abort();
	});
};
//#endregion
//#region src/helper/useStore.ts
const useStore = (initState) => {
	const [store, _setState] = solid_js_store.createStore(initState);
	const setState = (...args) => {
		if (args.length === 1 && typeof args[0] === "function") return _setState(solid_js_store.produce(args[0]));
		return _setState(...args);
	};
	return {
		store,
		setState
	};
};
//#endregion
//#region src/helper/useStyle.ts
const useStyleSheet = (e) => {
	const styleSheet = new CSSStyleSheet();
	onAutoMount(() => {
		const root = e?.getRootNode() ?? document;
		root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleSheet];
		return () => {
			const index = root.adoptedStyleSheets.indexOf(styleSheet);
			if (index !== -1) root.adoptedStyleSheets.splice(index, 1);
		};
	});
	return styleSheet;
};
const useStyle = (cssText, e) => {
	const styleSheet = useStyleSheet(e);
	if (typeof cssText === "string") styleSheet.replaceSync(cssText);
	else createEffectOn(createRootMemo(cssText), (style) => styleSheet.replaceSync(style));
};
/**
* \u5C06\u540C\u4E00\u5E27\u5185\u7684\u6240\u6709 CSS \u53D8\u66F4\u5408\u5E76\u4E3A\u4E00\u6B21 DOM \u5199\u5165
*
* \u907F\u514D\u76F8\u5173\u5C5E\u6027\u56E0\u66F4\u65B0\u65F6\u5E8F\u4E0D\u4E00\u81F4\u5BFC\u81F4\u6D4F\u89C8\u5668\u5224\u5B9A\u503C\u65E0\u6548
*/
const setStyle = (() => {
	const list = [];
	let id = 0;
	const flush = () => {
		id = 0;
		for (const [style, key, val] of list) if (val === void 0 || val === "") style.removeProperty(key);
		else style.setProperty(key, typeof val === "string" ? val : \`\${val}\`);
		list.length = 0;
	};
	return (style, key, val) => {
		list.push([
			style,
			key,
			val
		]);
		id ||= requestAnimationFrame(flush);
	};
})();
/** \u7528 CSSStyleSheet \u5B9E\u73B0\u548C\u4FEE\u6539 style \u4E00\u6837\u7684\u6548\u679C */
const useStyleMemo = (selector, styleMapArg, e) => {
	const styleSheet = useStyleSheet(e);
	const getSelector = typeof selector === "string" ? () => selector : createRootMemo(selector);
	styleSheet.insertRule(\`\${getSelector()} { }\`);
	const { style } = styleSheet.cssRules[0];
	if (typeof selector !== "string") createEffectOn(getSelector, (s) => {
		styleSheet.cssRules[0].selectorText = s;
	});
	const styleMapList = Array.isArray(styleMapArg) ? styleMapArg : [styleMapArg];
	for (const styleMap of styleMapList) if (typeof styleMap === "object") for (const [key, val] of Object.entries(styleMap)) {
		const styleText = createRootMemo(val);
		createEffectOn(styleText, (newVal) => setStyle(style, key, newVal));
	}
	else {
		const styleMemoMap = createRootMemo(styleMap);
		createEffectOn(styleMemoMap, (map) => {
			for (const [key, val] of Object.entries(map)) setStyle(style, key, val);
		});
	}
};
function css(arg1, arg2, ...rest) {
	if (typeof arg1 !== "object" || !("raw" in arg1)) {
		if (arg2 instanceof Element || arg2 === null || arg2 === void 0) return useStyle(arg1, arg2);
		return useStyleMemo(arg1, arg2, rest[0]);
	}
	const [styles, ...values] = [
		arg1,
		arg2,
		...rest
	];
	let e;
	let startIdx = 0;
	if (values[0] instanceof Element) {
		[e] = values;
		startIdx = 1;
	}
	useStyle(() => {
		let text = styles[startIdx];
		for (let i = startIdx; i < values.length; i++) text += \`\${typeof values[i] === "function" ? values[i]() : values[i]}\${styles[i + 1]}\`;
		return text;
	}, e);
}
//#endregion
exports.AnimationFrame = AnimationFrame;
exports.FaviconProgress = FaviconProgress;
exports.PQueue = PQueue;
exports.ReactiveMap = ReactiveMap;
exports.ReactiveSet = ReactiveSet;
exports.WakeLock = WakeLock;
exports.approx = approx;
exports.assign = assign;
exports.boolDataVal = boolDataVal;
exports.byPath = byPath;
exports.canvasToBlob = canvasToBlob;
exports.canvasToBlobUrl = canvasToBlobUrl;
exports.clamp = clamp;
exports.createEffectOn = createEffectOn;
exports.createEqualsSignal = createEqualsSignal;
exports.createMemoMap = createMemoMap;
exports.createRootEffect = createRootEffect;
exports.createRootMemo = createRootMemo;
exports.createScheduled = createScheduled;
exports.createThrottleMemo = createThrottleMemo;
exports.css = css;
exports.debounce = debounce;
exports.descRange = descRange;
exports.difference = difference;
exports.domParse = domParse;
exports.ensureGmValue = ensureGmValue;
exports.exposeToGlobal = exposeToGlobal;
exports.extractRange = extractRange;
exports.fileType = fileType;
exports.getFileName = getFileName;
exports.getImageData = getImageData;
exports.getKeyboardCode = getKeyboardCode;
exports.getMostItem = getMostItem;
exports.hijackFn = hijackFn;
exports.inRange = inRange;
exports.isArray = isArray;
exports.isEqual = dequal;
exports.isHTMLElement = isHTMLElement;
exports.isImageElement = isImageElement;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isUrl = isUrl;
exports.keyboardCodeToText = keyboardCodeToText;
exports.lang = lang;
exports.log = log;
exports.mountComponents = mountComponents;
exports.needDarkMode = needDarkMode;
exports.onAutoMount = onAutoMount;
exports.onUrlChange = onUrlChange;
exports.once = once;
exports.plimit = plimit;
exports.promisifyRequest = promisifyRequest;
exports.querySelector = querySelector;
exports.querySelectorAll = querySelectorAll;
exports.querySelectorClick = querySelectorClick;
exports.range = range;
exports.requestIdleCallback = requestIdleCallback$1;
exports.saveAs = saveAs;
exports.scrollIntoView = scrollIntoView;
exports.setInitLang = setInitLang;
exports.setLang = setLang;
exports.singleThreaded = singleThreaded;
exports.sleep = sleep;
exports.t = t;
exports.testImgUrl = testImgUrl;
exports.throttle = throttle;
exports.useCache = useCache;
exports.useDrag = useDrag;
exports.useFaviconProgress = useFaviconProgress;
exports.useStore = useStore;
exports.versionLt = versionLt;
exports.wait = wait;
exports.waitDom = waitDom;
exports.waitImgLoad = waitImgLoad;
exports.waitUrlChange = waitUrlChange;
exports.withEventStop = withEventStop;
`,request:`
let components_Toast = require("components/Toast");
let helper = require("helper");
//#region src/request.ts
const xmlHttpRequest = (details) => new Promise((resolve, reject) => {
	const handleError = (error) => {
		details.onerror?.(error);
		console.error("GM_xmlhttpRequest Error", error);
		reject(new Error(error?.responseText || "GM_xmlhttpRequest Error"));
	};
	const abort = GM_xmlhttpRequest({
		...details,
		onload(res) {
			details.onload?.call(res, res);
			resolve(res);
		},
		onerror: handleError,
		ontimeout: handleError,
		onabort: handleError
	});
	details.signal?.addEventListener("abort", () => abort.abort());
});
/** \u901A\u8FC7\u6D41\u8BFB\u53D6 blob\uFF0C\u5E76\u56DE\u62A5\u4E0B\u8F7D\u8FDB\u5EA6 */
const readBlobWithProgress = async (res, onprogress) => {
	const total = Number(res.headers.get("Content-Length")) || 0;
	const reader = res.body?.getReader();
	if (!reader) return new Blob();
	const chunks = [];
	let loaded = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			chunks.push(value);
			loaded += value.byteLength;
			onprogress({
				loaded,
				total,
				done: loaded,
				position: loaded,
				lengthComputable: total > 0,
				totalSize: total
			});
		}
	} finally {
		reader.releaseLock();
	}
	return new Blob(chunks);
};
/** \u53D1\u8D77\u8BF7\u6C42 */
const request = async (url, details = {}, retryNum = 0, errorNum = 0) => {
	const headers = { Referer: location.href };
	const errorText = \`\${details?.errorText ?? helper.t("alert.comic_load_error")}\\nurl: \${url}\`;
	details.fetch ??= url.startsWith("/") || url.startsWith(location.origin);
	try {
		if (details.fetch || typeof GM_xmlhttpRequest === "undefined") {
			const res = await fetch(url, {
				method: "GET",
				headers,
				signal: AbortSignal.timeout?.(details.timeout ?? 1e4),
				body: details.data,
				...details
			});
			if (!details.noCheckCode && res.status !== 200) {
				helper.log.error(errorText, res);
				throw new Error(errorText);
			}
			let response = null;
			switch (details.responseType) {
				case "arraybuffer":
					response = await res.arrayBuffer();
					break;
				case "blob":
					response = details.onprogress && res.body ? await readBlobWithProgress(res, details.onprogress) : await res.blob();
					break;
				case "json": response = await res.json();
			}
			const _res = {
				status: res.status,
				statusText: res.statusText,
				response,
				responseText: response ? "" : await res.text()
			};
			details.onload?.call(_res, _res);
			return _res;
		}
		let targetUrl = url;
		if (url.startsWith("//")) targetUrl = \`http:\${url}\`;
		else if (url.startsWith("/")) targetUrl = \`\${location.origin}\${url}\`;
		const res = await xmlHttpRequest({
			method: "GET",
			url: targetUrl,
			headers,
			timeout: 1e4,
			...details
		});
		if (!details.noCheckCode && res.status !== 200) {
			helper.log.error(errorText, res);
			throw new Error(errorText);
		}
		if (details.responseType === "json" && res.responseText && (typeof res.response !== "object" || Object.keys(res.response).length === 0)) try {
			Reflect.set(res, "response", JSON.parse(res.responseText));
		} catch {}
		return res;
	} catch (error) {
		if (details && details.retryFetch && retryNum === 0) {
			console.warn("retryFetch", url);
			details.fetch = !details.fetch;
			return request(url, details, retryNum + 1, errorNum);
		}
		if (errorNum >= retryNum) {
			(details.noTip ? console.error : components_Toast.toast.error)(\`\${errorText}\\nerror: \${error.message}\`);
			throw new Error(errorText, { cause: error });
		}
		helper.log.error(errorText, error);
		await helper.sleep(1e3);
		return request(url, details, retryNum, errorNum + 1);
	}
};
/** \u8F6E\u6D41\u5411\u591A\u4E2A api \u53D1\u8D77\u8BF7\u6C42 */
const eachApi = async (url, baseUrlList, details) => {
	for (const baseUrl of baseUrlList) try {
		return await request(\`\${baseUrl}\${url}\`, {
			...details,
			noTip: true
		});
	} catch {}
	const errorText = details?.errorText ?? helper.t("alert.comic_load_error");
	if (!details?.noTip) components_Toast.toast.error(errorText);
	helper.log.error("\u6240\u6709 api \u8BF7\u6C42\u5747\u5931\u8D25", url, baseUrlList, details);
	throw new Error(errorText);
};
const downloadImgHeaders = {
	Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
	"User-Agent": navigator.userAgent,
	Referer: location.href
};
const downloadImg = async (url, details, retryNum = 0) => {
	if (url.startsWith("blob:")) return (await fetch(url)).blob();
	return (await request(url, {
		responseType: "blob",
		errorText: helper.t("translation.tip.download_img_failed"),
		headers: downloadImgHeaders,
		retryFetch: true,
		...details
	}, retryNum)).response;
};
//#endregion
exports.downloadImg = downloadImg;
exports.downloadImgHeaders = downloadImgHeaders;
exports.eachApi = eachApi;
exports.request = request;
`,"components/Manga":`
//#region \\0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let solid_js_web = require("solid-js/web");
let helper = require("helper");
let solid_js = require("solid-js");
let solid_js_store = require("solid-js/store");
let request = require("request");
let comlink = require("comlink");
comlink = __toESM(comlink, 1);
let worker_ImageRecognition = require("worker/ImageRecognition");
worker_ImageRecognition = __toESM(worker_ImageRecognition, 1);
let components_Toast = require("components/Toast");
let worker_ImageUpscale = require("worker/ImageUpscale");
worker_ImageUpscale = __toESM(worker_ImageUpscale, 1);
let components_IconButton = require("components/IconButton");
let fflate = require("fflate");
let userscript_supportWorker = require("userscript/supportWorker");
//#region src/components/Manga/store/image.ts
const imgState = {
	imgMap: {},
	imgList: [],
	pageList: [],
	fillEffect: { "-1": true },
	showRange: [0, 0],
	renderRange: [0, 0],
	loadingRange: [0, 0],
	/**
	* \u56FE\u7247\u663E\u793A\u72B6\u6001
	*
	* 0 - \u9875\u9762\u4E2D\u7684\u7B2C\u4E00\u5F20\u56FE\u7247
	* 1 - \u9875\u9762\u4E2D\u7684\u6700\u540E\u4E00\u5F20\u56FE\u7247
	* '' - \u9875\u9762\u4E2D\u7684\u552F\u4E00\u4E00\u5F20\u56FE\u7247
	*/
	imgShowState: {},
	defaultImgType: ""
};
//#endregion
//#region src/components/Manga/actions/translation/translator/MangaImageTranslator/options.ts
/**
* MangaImageTranslator \u7FFB\u8BD1\u670D\u52A1\u914D\u7F6E\u9009\u9879
*/
/**
* \u9ED8\u8BA4\u914D\u7F6E
*
* \u90E8\u5206\u53C2\u6570\u4F7F\u7528\u6587\u6863\u63A8\u8350\u503C:
* @see https://github.com/zyddnys/manga-image-translator?tab=readme-ov-file#recommended-options
*/
const mitDefaultOptions = () => ({
	localUrl: void 0,
	detector: {
		detector: "ctd",
		detection_size: "1536",
		box_threshold: .7,
		unclip_ratio: 2.3
	},
	render: { direction: "auto" },
	translator: {
		translator: "gpt3.5",
		target_lang: {
			zh: "CHS",
			en: "ENG",
			ru: "RUS"
		}[helper.lang()] ?? "CHS"
	},
	inpainter: {
		inpainter: "lama_large",
		inpainting_size: "2048"
	},
	mask_dilation_offset: 30
});
/** \u5206\u8FA8\u7387\u6620\u5C04 */
const sizeDict = {
	"1024": "S",
	"1536": "M",
	"2048": "L",
	"2560": "X"
};
/** \u76EE\u6807\u8BED\u8A00\u9009\u9879 */
const targetLanguageOptions = [
	["CHS", "\u7B80\u4F53\u4E2D\u6587"],
	["CHT", "\u7E41\u9AD4\u4E2D\u6587"],
	["JPN", "\u65E5\u672C\u8A9E"],
	["ENG", "English"],
	["KOR", "\uD55C\uAD6D\uC5B4"],
	["VIN", "Ti\u1EBFng Vi\u1EC7t"],
	["CSY", "\u010De\u0161tina"],
	["NLD", "Nederlands"],
	["FRA", "fran\xE7ais"],
	["DEU", "Deutsch"],
	["HUN", "magyar nyelv"],
	["ITA", "italiano"],
	["PLK", "polski"],
	["PTB", "portugu\xEAs"],
	["ROM", "limba rom\xE2n\u0103"],
	["RUS", "\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A"],
	["ESP", "espa\xF1ol"],
	["TRK", "T\xFCrk dili"],
	["IND", "Indonesia"]
];
//#endregion
//#region src/components/Manga/actions/translation/translator/Cotrans/options.ts
/**
* Cotrans \u7FFB\u8BD1\u670D\u52A1\u914D\u7F6E\u9009\u9879
*/
/** Cotrans \u652F\u6301\u7684\u7FFB\u8BD1\u5668\u5217\u8868 */
const cotransTranslators = [
	"google",
	"youdao",
	"baidu",
	"deepl",
	"gpt3.5",
	"offline",
	"none"
];
/** Cotrans \u9ED8\u8BA4\u914D\u7F6E */
const cotransDefaultOptions = () => ({
	detector: {
		detector: "ctd",
		detection_size: "1536"
	},
	render: { direction: "auto" },
	translator: {
		translator: "gpt3.5",
		target_lang: {
			zh: "CHS",
			en: "ENG",
			ru: "RUS"
		}[helper.lang()] ?? "CHS"
	}
});
//#endregion
//#region src/components/Manga/store/option.ts
const _defaultOption = {
	dir: "rtl",
	scrollbar: {
		position: "auto",
		autoHidden: false,
		showImgStatus: true,
		easyScroll: false
	},
	clickPageTurn: {
		enabled: "ontouchstart" in document.documentElement,
		reverse: false,
		area: "left_right",
		shrinkMenu: false
	},
	firstPageFill: true,
	disableZoom: false,
	darkMode: false,
	autoDarkMode: false,
	swapPageTurnKey: false,
	scroolEnd: "auto",
	alwaysLoadAllImg: false,
	showComment: true,
	preloadPageNum: 20,
	pageNum: 0,
	pageTip: "auto",
	turnPageDuration: 0,
	scrollDuration: 100,
	autoSwitchPageMode: true,
	autoHiddenMouse: true,
	autoFullscreen: false,
	zoom: {
		ratio: 100,
		offset: {
			x: 0,
			y: 0
		}
	},
	scrollMode: {
		enabled: false,
		spacing: 0,
		imgScale: 1,
		adjustToWidth: "disable",
		abreastMode: false,
		abreastDuplicate: .1,
		pageColumns: 1,
		doubleMode: false,
		alignEdge: false
	},
	imgFilter: {
		brightness: 100,
		contrast: 100,
		saturate: 100
	},
	imgRecognition: {
		enabled: false,
		background: false,
		pageFill: true,
		upscale: false,
		crop: false,
		keepMargin: 10
	},
	translation: {
		enabled: false,
		provider: "manga-image-translator",
		onlyDownloadTranslated: false,
		forceRetry: false,
		mit: mitDefaultOptions(),
		cotrans: cotransDefaultOptions()
	},
	autoScroll: {
		enabled: false,
		interval: 3e3,
		distance: 200,
		continuous: true,
		triggerEnd: false
	}
};
const defaultOption = () => structuredClone(_defaultOption);
const optionState = {
	defaultOption: defaultOption(),
	option: defaultOption()
};
//#endregion
//#region src/components/Manga/store/other.ts
const otherState = {
	/** \u6F2B\u753B\u6807\u9898 */
	title: "",
	/**
	* \u7528\u4E8E\u9632\u6B62\u6EDA\u8F6E\u8FDE\u7EED\u6EDA\u52A8\u5BFC\u81F4\u8FC7\u5FEB\u89E6\u53D1\u4E8B\u4EF6\u7684\u9501
	*
	* - \u5728\u9996\u6B21\u89E6\u53D1\u7ED3\u675F\u9875\u65F6\u5F00\u542F\uFF0C\u4E00\u6BB5\u65F6\u95F4\u5173\u95ED\u3002\u5F00\u542F\u65F6\u7981\u6B62\u89E6\u53D1\u7ED3\u675F\u9875\u7684\u4E0A\u4E0B\u8BDD\u5207\u6362\u529F\u80FD\u3002
	*/
	scrollLock: false,
	/** \u5F53\u524D\u662F\u5426\u5904\u4E8E\u5168\u5C4F\u72B6\u6001 */
	fullscreen: false,
	rootSize: {
		width: 0,
		height: 0
	},
	scrollbarSize: {
		width: 0,
		height: 0
	},
	/** \u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6EDA\u52A8\u8DDD\u79BB */
	scrollTop: 0,
	/** \u865A\u62DF\u68D8\u8F6E\u7684\u7FFB\u9875\u8FDB\u5EA6\uFF080~1\uFF09\uFF0C\u6B63\u4E3A\u5411\u4E0B\u6EDA\u52A8 */
	wheelProgress: 0,
	/** \u6700\u8FD1\u4E00\u6B21\u5224\u5B9A\u7684\u6EDA\u52A8\u8BBE\u5907\u7C7B\u578B */
	scrollDeviceType: void 0,
	autoScroll: {
		play: false,
		progress: 0
	},
	supportUpscaleImage: true
};
//#endregion
//#region src/components/Manga/store/prop.ts
const propState = {
	commentList: void 0,
	hotkeys: {},
	prop: {
		onExit: void 0,
		onPrev: void 0,
		onNext: void 0,
		onLoading: void 0,
		onOptionChange: void 0,
		onHotkeysChange: void 0,
		editButtonList: (list) => list,
		editSettingList: (list) => list
	}
};
//#endregion
//#region src/components/Manga/store/show.ts
const showState = {
	isMobile: false,
	isDragMode: false,
	isTurnAnimating: false,
	isScrollbarHover: false,
	activePageIndex: 0,
	show: {
		toolbar: false,
		scrollbar: false,
		pageTip: false,
		touchArea: false,
		endPage: void 0
	},
	page: {
		anima: "",
		vertical: true,
		offset: {
			x: {
				pct: 0,
				px: 0
			},
			y: {
				pct: 0,
				px: 0
			}
		}
	}
};
//#endregion
//#region src/components/Manga/store/index.ts
const initStore = {
	...imgState,
	...showState,
	...propState,
	...optionState,
	...otherState
};
const { store, setState } = helper.useStore({ ...initStore });
const refs = {
	root: void 0,
	mangaBox: void 0,
	mangaFlow: void 0,
	touchArea: void 0,
	scrollbar: void 0,
	settingPanel: void 0,
	prev: void 0,
	next: void 0,
	exit: void 0,
	/** \u4EE5\u56FE\u7247\u539F\u59CB URL \u4E3A key \u7684 img \u5143\u7D20\u96C6\u5408\uFF0C\u7528\u4E8E\u7ED5\u8FC7 DOM \u67E5\u8BE2\u76F4\u63A5\u83B7\u53D6\u56FE\u7247\u5143\u7D20 */
	imgEleMap: {}
};
//#endregion
//#region src/components/Manga/handleComicData.ts
/** \u5224\u65AD\u56FE\u7247\u662F\u5426\u662F\u8DE8\u9875\u56FE */
const isWideImg = (img) => {
	switch (img.type ?? store.defaultImgType) {
		case "long":
		case "wide": return true;
		default: return false;
	}
};
/** \u6839\u636E\u586B\u5145\u9875\u8BBE\u7F6E\u53CC\u9875\u6392\u5217\u5355\u9875\u56FE\u7247 */
const arrangeImg = (pageList, fill) => {
	if (pageList.length === 0) return [];
	const newPageList = [];
	let imgCache = fill ? [-1] : [];
	for (const i of pageList) {
		imgCache.push(i);
		if (imgCache.length === 2) {
			newPageList.push(imgCache);
			imgCache = [];
		}
	}
	if (imgCache.length === 1 && imgCache[0] !== -1) {
		imgCache.push(-1);
		newPageList.push(imgCache);
	}
	return newPageList;
};
/** \u8BA1\u7B97\u6307\u5B9A\u56FE\u7247\u6D41\u4E2D\u7684\u5DE6\u53F3\u9875\u4F4D\u7F6E\u6B63\u786E\u7684\u9875\u6570 */
const computeAccuracy = (imgList, pageList) => {
	let accuracy = 0;
	for (const [a, b] of pageList) {
		if ((imgList[a]?.blankMargin?.left ?? 0) > .04) accuracy += 1;
		if (b === void 0) break;
		if ((imgList[b]?.blankMargin?.right ?? 0) > .04) accuracy += 1;
	}
	return accuracy;
};
/** \u81EA\u52A8\u5207\u6362\u586B\u5145\u9875\u8BBE\u7F6E\u5230\u5DE6\u53F3\u9875\u6B63\u786E\u7387\u66F4\u9AD8\u7684\u60C5\u51B5 */
const arrangePage = (pageList, { imgList, fillEffect, nowFillIndex, switchFill }) => {
	const fill = Boolean(fillEffect[nowFillIndex]);
	const newPageList = arrangeImg(pageList, fill);
	if (!switchFill || typeof fillEffect[nowFillIndex] === "number") return newPageList;
	const anotherPageList = arrangeImg(pageList, !fill);
	const anotherAccuracy = computeAccuracy(imgList, anotherPageList);
	if (anotherAccuracy === 0) return newPageList;
	if (anotherAccuracy <= computeAccuracy(imgList, newPageList)) return newPageList;
	helper.log(\`\${nowFillIndex} \u81EA\u52A8\u5207\u6362\u9875\u9762\u586B\u5145\`);
	fillEffect[nowFillIndex] = !fill;
	return anotherPageList;
};
/** \u6839\u636E\u56FE\u7247\u6BD4\u4F8B\u548C\u586B\u5145\u9875\u8BBE\u7F6E\u5BF9\u6F2B\u753B\u56FE\u7247\u8FDB\u884C\u6392\u5217 */
const handleComicData = (imgList, fillEffect, switchFill) => {
	const context = {
		imgList,
		fillEffect,
		nowFillIndex: -1,
		switchFill
	};
	const pageList = [];
	const cacheList = [];
	for (let i = 0; i < imgList.length; i += 1) {
		const img = imgList[i];
		if (!isWideImg(img)) {
			cacheList.push(i);
			if (Reflect.has(fillEffect, i)) Reflect.deleteProperty(fillEffect, i);
			continue;
		}
		if (typeof fillEffect[context.nowFillIndex] === "boolean" && i < imgList.length - 2 && (cacheList.length + (fillEffect[context.nowFillIndex] ? 1 : 0)) % 2 === 1) {
			fillEffect[context.nowFillIndex] = !fillEffect[context.nowFillIndex];
			return handleComicData(imgList, fillEffect, switchFill);
		}
		pageList.push(...arrangePage(cacheList, context), [i]);
		cacheList.length = 0;
		if (fillEffect[i] === void 0) fillEffect[i] = false;
		context.nowFillIndex = i;
	}
	if (cacheList.length > 0) pageList.push(...arrangePage(cacheList, context));
	return pageList;
};
//#endregion
//#region src/components/Manga/actions/memo/img.ts
const imgList = helper.createRootMemo(() => store.imgList.map((url) => store.imgMap[url]));
/** \u56FE\u7247 url \u5BF9\u5E94\u7684\u7D22\u5F15 */
const imgIndexMap = helper.createRootMemo(() => {
	const map = /* @__PURE__ */ new Map();
	for (const [index, url] of store.imgList.entries()) {
		const indexList = map.get(url);
		if (indexList) indexList.push(index);
		else map.set(url, [index]);
	}
	return map;
});
/** \u5F53\u524D\u663E\u793A\u9875\u9762 */
const activePage = helper.createRootMemo(() => store.pageList[store.activePageIndex] ?? []);
/** \u5F53\u524D\u663E\u793A\u7684\u7B2C\u4E00\u5F20\u56FE\u7247\u7684 index */
const activeImgIndex = helper.createRootMemo(() => activePage().find((i) => i !== -1) ?? 0);
/** \u627E\u5230\u6307\u5B9A\u9875\u9762\u6240\u5904\u7684\u56FE\u7247\u6D41 */
const findFillIndex = (pageIndex, fillEffect) => {
	let nowFillIndex = pageIndex;
	while (!Reflect.has(fillEffect, nowFillIndex)) nowFillIndex -= 1;
	return nowFillIndex;
};
/** \u5F53\u524D\u6240\u5904\u7684\u56FE\u7247\u6D41 */
const nowFillIndex = helper.createRootMemo(() => findFillIndex(activeImgIndex(), store.fillEffect));
/** \u9884\u52A0\u8F7D\u9875\u6570 */
const preloadNum = helper.createRootMemo(() => ({
	back: store.option.preloadPageNum,
	front: Math.floor(store.option.preloadPageNum / 2)
}));
/** \u83B7\u53D6\u56FE\u7247\u5217\u8868\u4E2D\u6307\u5B9A\u5C5E\u6027\u7684\u4E2D\u4F4D\u6570 */
const getImgMedian = (sizeFn) => {
	const list = imgList().filter((img) => img.loadType === "loaded" && img.width).map(sizeFn).toSorted((a, b) => a - b);
	if (list.length < 3) return null;
	return list[Math.floor(list.length / 2)];
};
/** \u56FE\u7247\u5360\u4F4D\u5C3A\u5BF8 */
const placeholderSize = helper.createThrottleMemo(() => ({
	width: getImgMedian((img) => img.width) ?? 800,
	height: getImgMedian((img) => img.height) ?? 1200
}), 500);
//#endregion
//#region src/components/Manga/actions/helper.ts
const getImg = (i, state = store) => state.imgMap[state.imgList[i]];
/** \u627E\u5230\u6307\u5B9A url \u56FE\u7247\u5728 imgList \u91CC\u7684 index */
const getImgIndexs = (url) => imgIndexMap().get(url) ?? [];
/** \u627E\u5230\u6307\u5B9A url \u56FE\u7247\u7684 dom */
const getImgEle = (target, loaded = false) => {
	const url = typeof target === "number" ? store.imgList[target] : target;
	for (const element of refs.imgEleMap[url] ?? []) if (!loaded || element.complete) return element;
};
/** \u89E6\u53D1 onOptionChange */
const triggerOnOptionChange = helper.throttle(() => store.prop.onOptionChange?.(helper.difference(store.option, store.defaultOption)), 1e3);
/** \u5728 option \u540E\u624B\u52A8\u89E6\u53D1 onOptionChange */
const setOption = (...args) => {
	if (args.length === 1 && typeof args[0] === "function") setState((state) => args[0](state.option, state));
	else setState("option", ...args);
	triggerOnOptionChange();
};
/** \u521B\u5EFA\u7528\u4E8E\u5C06 ref \u7ED1\u5B9A\u5230\u5BF9\u5E94 state \u4E0A\u7684\u5DE5\u5177\u51FD\u6570 */
const bindRef = (name) => (e) => Reflect.set(refs, name, e);
const watchDomSize = (name, e) => {
	const resizeObserver = new ResizeObserver(([{ contentRect }]) => {
		if (!contentRect.width || !contentRect.height) return;
		setState((state) => {
			state[name] = {
				width: contentRect.width,
				height: contentRect.height
			};
		});
	});
	resizeObserver.disconnect();
	resizeObserver.observe(e);
	solid_js.onCleanup(() => resizeObserver.disconnect());
};
/** \u5C06\u754C\u9762\u6062\u590D\u5230\u6B63\u5E38\u72B6\u6001 */
const resetUI = (state) => {
	state.show.toolbar = false;
	state.show.scrollbar = false;
	state.show.touchArea = false;
	state.show.pageTip = false;
};
const focus = () => requestAnimationFrame(() => {
	refs.mangaBox?.click();
	refs.mangaBox?.focus();
});
/** \u5C06\u51FD\u6570\u7684 state \u53C2\u6570\u53D8\u4E3A\u53EF\u9009 */
const withOptionalState = (fn) => (...args) => {
	if (args.length < fn.length) {
		let result;
		setState((state) => {
			result = fn(...[...args, state]);
		});
		return result;
	}
	return fn(...args);
};
const closeScrollLock = helper.debounce(() => setState("scrollLock", false), 100);
/** \u6253\u5F00\u6EDA\u52A8\u9501\uFF0C\u5E76\u5728\u4E4B\u540E\u81EA\u52A8\u5173\u95ED */
const openScrollLock = withOptionalState((state) => {
	state.scrollLock = true;
	closeScrollLock();
});
const bindOption = (...path) => ({
	value: helper.byPath(store.option, path),
	onChange: (val) => setOption(...path, val)
});
//#endregion
//#region src/components/Manga/actions/memo/options.ts
/** \u5F53\u524D\u662F\u5426\u4E3A\u5E76\u6392\u5377\u8F74\u6A21\u5F0F */
const isAbreastMode = helper.createRootMemo(() => store.option.scrollMode.enabled && store.option.scrollMode.abreastMode);
/** \u5F53\u524D\u662F\u5426\u4E3A\u53CC\u9875\u5377\u8F74\u6A21\u5F0F */
const isDoubleMode = helper.createRootMemo(() => store.option.scrollMode.enabled && store.option.scrollMode.doubleMode && !store.option.scrollMode.abreastMode);
/** \u5F53\u524D\u662F\u5426\u4E3A\u5355\u9875\u5377\u8F74\u6A21\u5F0F */
const isSingleMode = helper.createRootMemo(() => store.option.scrollMode.enabled && !store.option.scrollMode.doubleMode && !store.option.scrollMode.abreastMode);
/** \u5F53\u524D\u662F\u5426\u4E3A\u666E\u901A\u5377\u8F74\u6A21\u5F0F\uFF08\u5305\u542B\u4E86\u53CC\u9875\u5377\u8F74\u6A21\u5F0F\uFF09 */
const isScrollMode = helper.createRootMemo(() => store.option.scrollMode.enabled && !store.option.scrollMode.abreastMode);
/** \u5F53\u524D\u662F\u5426\u6B63\u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\u4F7F\u7528\u81EA\u52A8\u7F29\u653E\u503C */
const isUseAutoScale = helper.createRootMemo(() => isScrollMode() && typeof store.option.scrollMode.adjustToWidth === "number");
/** \u5F53\u524D\u662F\u5426\u5F00\u542F\u4E86\u8BC6\u522B\u80CC\u666F\u8272 */
const isEnableBg = helper.createRootMemo(() => store.option.imgRecognition.enabled && store.option.imgRecognition.background);
/** \u5F53\u524D\u662F\u5426\u5F00\u542F\u4E86\u56FE\u50CF\u653E\u5927 */
const isUpscale = helper.createRootMemo(() => !store.isMobile && store.option.imgRecognition.enabled && store.option.imgRecognition.upscale);
/** \u6839\u636E\u89C6\u533A\u5BBD\u9AD8\u5224\u65AD\u5355\u53CC\u9875\u6A21\u5F0F */
const autoPageNum = helper.createThrottleMemo(() => store.rootSize.width >= store.rootSize.height ? 2 : 1);
/** \u5F53\u524D\u4F7F\u7528\u7684\u5355\u53CC\u9875\u6A21\u5F0F */
const pageNum = helper.createRootMemo(() => store.option.pageNum || autoPageNum());
/** \u662F\u5426\u4E3A\u5355\u9875\u6A21\u5F0F */
const isOnePageMode = helper.createRootMemo(() => {
	if (store.isMobile || store.imgList.length <= 1) return true;
	if (store.option.scrollMode.enabled) {
		if (store.option.scrollMode.abreastMode) return true;
		return !store.option.scrollMode.doubleMode;
	}
	return pageNum() === 1;
});
//#endregion
//#region src/components/Manga/actions/memo/abreastScroll.ts
/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5168\u5C40\u6EDA\u52A8\u586B\u5145 */
const [abreastScrollFill, _setAbreastScrollFill] = solid_js.createSignal(0);
/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6BCF\u5217\u5E03\u5C40 */
const abreastArea = helper.createRootMemo((prev) => {
	if (!isAbreastMode()) return prev;
	const columns = [[]];
	const position = {};
	let length = 0;
	const rootHeight = store.rootSize.height;
	if (!rootHeight || store.imgList.length === 0) return {
		columns,
		position,
		length
	};
	const repeatHeight = rootHeight * store.option.scrollMode.abreastDuplicate;
	/** \u5F53\u524D\u56FE\u7247\u5728\u5F53\u524D\u5217\u7684\u6240\u5728\u9AD8\u5EA6 */
	let top = abreastScrollFill();
	while (top > rootHeight) {
		top -= rootHeight - repeatHeight;
		columns.push([]);
	}
	for (let i = 0; i < store.imgList.length; i++) {
		const img = getImg(i);
		const imgPosition = [];
		const imgHeight = img.size.height;
		length += imgHeight;
		let height = imgHeight;
		while (height > 0) {
			columns.at(-1).push(i);
			imgPosition.push({
				column: columns.length - 1,
				top
			});
			if (top < 0 && imgPosition.length > 1) top = 0;
			const availableHeight = rootHeight - top;
			top += height;
			height -= availableHeight;
			if (top < rootHeight) continue;
			columns.push([]);
			top = height - imgHeight;
			if (!repeatHeight || columns.length === 1) continue;
			top += repeatHeight;
			height = Math.min(imgHeight, height + repeatHeight);
			/** \u4E3A\u4E86\u590D\u73B0\u800C\u51FA\u73B0\u7684\u7A7A\u767D\u90E8\u5206\u9AD8\u5EA6 */
			let emptyTop = top;
			let prevImgIndex = i;
			while (prevImgIndex >= 1 && emptyTop > 0) {
				prevImgIndex -= 1;
				columns.at(-1).push(prevImgIndex);
				const prevImgHeight = getImg(prevImgIndex).size.height;
				emptyTop -= prevImgHeight;
				position[prevImgIndex].push({
					column: columns.length - 1,
					top: emptyTop
				});
			}
		}
		position[i] = imgPosition;
	}
	return {
		columns,
		position,
		length
	};
}, {
	columns: [],
	position: {},
	length: 0
});
/** \u5934\u5C3E\u6EDA\u52A8\u7684\u9650\u5236\u503C */
const scrollFillLimit = helper.createRootMemo(() => abreastArea().length - store.rootSize.height);
const setAbreastScrollFill = (val) => _setAbreastScrollFill(helper.clamp(-scrollFillLimit(), val, scrollFillLimit()));
/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5217\u5BBD\u5EA6 */
const abreastColumnWidth = helper.createRootMemo(() => isAbreastMode() ? placeholderSize().width * store.option.scrollMode.imgScale : 0);
/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u5F53\u524D\u8981\u663E\u793A\u7684\u5217 */
const abreastShowColumn = helper.createThrottleMemo(() => {
	if (!isAbreastMode() || abreastArea().columns.length === 0) return {
		start: 0,
		end: 0
	};
	const columnWidth = abreastColumnWidth() + store.option.scrollMode.spacing * 7;
	return {
		start: helper.clamp(0, Math.floor(store.page.offset.x.px / columnWidth), abreastArea().columns.length - 1),
		end: helper.clamp(0, Math.floor((store.page.offset.x.px + store.rootSize.width) / columnWidth), abreastArea().columns.length - 1)
	};
});
/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6F2B\u753B\u6D41\u5BBD\u5EA6 */
const abreastContentWidth = helper.createRootMemo(() => abreastArea().columns.length * abreastColumnWidth() + (abreastArea().columns.length - 1) * store.option.scrollMode.spacing * 7);
/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6700\u5927\u6EDA\u52A8\u8DDD\u79BB */
const abreastScrollWidth = helper.createRootMemo(() => abreastContentWidth() - store.rootSize.width);
/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u6BCF\u4E2A\u56FE\u7247\u6240\u5728\u4F4D\u7F6E\u7684\u6837\u5F0F */
const imgAreaStyle = helper.createRootMemo(() => {
	if (!isAbreastMode()) return "";
	let styleText = "";
	for (const index of store.imgList.keys()) {
		let imgNum = 0;
		for (const { column, top } of abreastArea().position[index] ?? []) {
			const itemStyle = \`grid-area: _\${column} !important; transform: translateY(\${top}px);\`;
			styleText += \`#_\${index}_\${imgNum} { \${itemStyle} }\\n\`;
			imgNum += 1;
		}
	}
	return styleText;
});
//#endregion
//#region src/components/Manga/actions/image.ts
/** \u91CD\u65B0\u8BA1\u7B97\u56FE\u7247\u6392\u5217 */
const updatePageData = (state) => {
	const lastActiveImgIndex = activeImgIndex();
	let newPageList = [];
	newPageList = isOnePageMode() ? state.imgList.map((_, i) => [i]) : handleComicData(state.imgList.map((url) => state.imgMap[url]), state.fillEffect, state.option.imgRecognition.pageFill);
	if (helper.isEqual(state.pageList, newPageList)) return;
	state.pageList = newPageList;
	if (lastActiveImgIndex !== activeImgIndex()) {
		const newActivePageIndex = state.pageList.findIndex((page) => page.includes(lastActiveImgIndex));
		if (newActivePageIndex !== -1) state.activePageIndex = newActivePageIndex;
	}
};
updatePageData.throttle = helper.throttle(() => setState(updatePageData), 100);
/**
* \u5C06\u5904\u7406\u56FE\u7247\u7684\u76F8\u5173\u53D8\u91CF\u6062\u590D\u5230\u521D\u59CB\u72B6\u6001
*
* \u5FC5\u987B\u6309\u7167\u4EE5\u4E0B\u987A\u5E8F\u8C03\u7528
* 1. \u4FEE\u6539 imgList
* 2. resetImgState
* 3. updatePageData
*/
const resetImgState = (state) => {
	if (state.imgList.length === 0) {
		state.fillEffect = { "-1": true };
		return;
	}
	if (typeof state.fillEffect["-1"] === "boolean") state.fillEffect["-1"] = state.option.firstPageFill && state.imgList.length > 3;
};
helper.createEffectOn([pageNum, isOnePageMode], () => setState(updatePageData));
//#endregion
//#region src/components/Manga/actions/memo/observer.ts
/** \u8BB0\u5F55\u6BCF\u5F20\u56FE\u7247\u6240\u5728\u7684\u9875\u9762 */
const imgPageMap = helper.createRootMemo(() => {
	const map = {};
	for (let i = 0; i < store.pageList.length; i++) for (const imgIndex of store.pageList[i]) if (imgIndex !== -1) map[imgIndex] = i;
	return map;
});
/** \u6EDA\u52A8\u8DDD\u79BB */
const scrollTop = helper.createRootMemo(() => isAbreastMode() ? store.page.offset.x.px : store.scrollTop);
const bindScrollTop = (dom) => {
	dom.addEventListener("scroll", () => {
		if (helper.approx(dom.scrollTop, store.scrollTop)) return;
		setState("scrollTop", dom.scrollTop);
	}, { passive: true });
};
const darkModeQuery = matchMedia("(prefers-color-scheme: dark)");
const autoSwitchDarkMode = (query) => {
	if (!store.option.autoDarkMode) return;
	if (query.matches === store.option.darkMode) return;
	setState("option", "darkMode", query.matches);
};
darkModeQuery.addEventListener("change", autoSwitchDarkMode);
autoSwitchDarkMode(darkModeQuery);
helper.createEffectOn(() => store.option.autoDarkMode, () => autoSwitchDarkMode(darkModeQuery));
helper.createEffectOn(() => store.rootSize.width, (width) => {
	const isMobile = helper.inRange(1, width, 800);
	if (isMobile === store.isMobile) return;
	setState((state) => {
		state.isMobile = isMobile;
		resetImgState(state);
		updatePageData(state);
	});
});
//#endregion
//#region src/components/Manga/actions/memo/scrollMode.ts
/** \u53CC\u9875\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u9875\u9762\u5217\u8868\uFF08\u6309\u884C\u5206\u7EC4\uFF09 */
const scrollPageList = helper.createRootMemo(() => {
	if (!isDoubleMode()) return store.pageList.map((page) => [page]);
	const { pageColumns } = store.option.scrollMode;
	if (pageColumns <= 1) return store.pageList.map((page) => [page]);
	const rows = [];
	for (let i = 0; i < store.pageList.length; i += pageColumns) rows.push(store.pageList.slice(i, i + pageColumns));
	return rows;
});
/** \u5377\u8F74\u6A21\u5F0F\u4E0B\u6BCF\u884C\u9AD8\u5EA6 */
const pageHeightList = helper.createRootMemo(() => {
	if (!isScrollMode()) return [];
	if (!isDoubleMode()) return imgList().map((img) => img.size.height ?? 0);
	const { pageColumns } = store.option.scrollMode;
	const doubleWidth = store.rootSize.width / pageColumns / 2;
	const imgDisplayHeight = ({ width, height }) => width < doubleWidth && store.option.scrollMode.adjustToWidth === "disable" ? height : height * (doubleWidth / width);
	return scrollPageList().map((row) => Math.max(...row.flatMap((indexs) => indexs.filter((i) => i !== -1).map((i) => imgDisplayHeight(getImg(i).size)))));
});
/** \u5377\u8F74\u6A21\u5F0F\u4E0B\u6BCF\u9875\u4F4D\u7F6E */
const pageTopList = helper.createRootMemo(() => {
	if (!isScrollMode()) return [];
	const list = Array.from({ length: store.pageList.length });
	const rows = scrollPageList();
	for (let top = 0, i = 0, rowIdx = 0; rowIdx < rows.length; rowIdx++) {
		const row = rows[rowIdx];
		for (let col = 0; col < row.length; col++) list[i + col] = top;
		i += row.length;
		top += pageHeightList()[rowIdx] + store.option.scrollMode.spacing * 7;
	}
	return list;
});
/** \u5377\u8F74\u6A21\u5F0F\u4E0B\u6F2B\u753B\u6D41\u7684\u603B\u9AD8\u5EA6 */
const contentHeight = helper.createRootMemo(() => {
	if (!isScrollMode()) return 0;
	return (pageTopList().at(-1) ?? 0) + (pageHeightList().at(-1) ?? 0);
});
/** \u83B7\u53D6\u5377\u8F74\u6A21\u5F0F\u4E0B\u6307\u5B9A\u9875\u7684\u4F4D\u7F6E */
const getPageTop = (index) => {
	if (Reflect.has(pageTopList(), index)) return pageTopList()[index];
	if (index < 0) return 0;
	return contentHeight();
};
/** \u627E\u5230\u5377\u8F74\u6A21\u5F0F\u4E0B\u6307\u5B9A\u9AD8\u5EA6\u4E0A\u663E\u793A\u7684\u9875\u9762 */
const findTopPage = (top, initIndex = 0) => {
	if (top > contentHeight()) return pageTopList().length - 1;
	for (let i = initIndex; i < pageTopList().length; i++) if (pageTopList()[i] > top) return i === 0 ? 0 : i - 1;
	return pageTopList().length - 1;
};
//#endregion
//#region src/components/Manga/actions/memo/scroll.ts
/** \u6EDA\u52A8\u5185\u5BB9\u7684\u6EDA\u52A8\u8FDB\u5EA6 */
const scrollProgress = helper.createRootMemo(() => {
	if (store.option.scrollMode.enabled) return scrollTop();
	return store.activePageIndex;
});
/** \u6EDA\u52A8\u5185\u5BB9\u7684\u603B\u957F\u5EA6 */
const scrollLength = helper.createRootMemo(() => {
	if (store.option.scrollMode.enabled) {
		if (store.option.scrollMode.abreastMode) return abreastContentWidth();
		return contentHeight();
	}
	return store.pageList.length;
});
/** \u6EDA\u52A8\u5185\u5BB9\u7684\u6EDA\u52A8\u8FDB\u5EA6\u767E\u5206\u6BD4 */
const scrollPercentage = helper.createRootMemo(() => scrollProgress() / scrollLength());
/** \u5F53\u524D\u662F\u5426\u5DF2\u7ECF\u6EDA\u52A8\u5230\u9876\u90E8 */
const isTop = helper.createRootMemo(() => scrollPercentage() === 0);
/** \u6EDA\u52A8\u6761\u5143\u7D20\u7684\u957F\u5EA6 */
const scrollDomLength = helper.createRootMemo(() => Math.max(store.scrollbarSize.width, store.scrollbarSize.height));
/** \u6EDA\u52A8\u6761\u6ED1\u5757\u957F\u5EA6 */
const sliderHeight = helper.createRootMemo(() => {
	let itemLength = 1;
	if (isScrollMode()) itemLength = store.rootSize.height;
	if (isAbreastMode()) itemLength = store.rootSize.width;
	return itemLength / scrollLength();
});
/** \u5F53\u524D\u662F\u5426\u5DF2\u7ECF\u6EDA\u52A8\u5230\u5E95\u90E8 */
const isBottom = helper.createRootMemo(() => scrollPercentage() + sliderHeight() >= .9999);
/** \u6EDA\u52A8\u6761\u6ED1\u5757\u7684\u4E2D\u5FC3\u70B9\u9AD8\u5EA6 */
const sliderMidpoint = helper.createRootMemo(() => scrollDomLength() * (scrollPercentage() + sliderHeight() / 2));
/** \u6EDA\u52A8\u6761\u6ED1\u5757\u7684\u4F4D\u7F6E */
const sliderTop = helper.createRootMemo(() => \`\${scrollPercentage() * scrollDomLength()}px\`);
/** \u6EDA\u52A8\u6761\u4F4D\u7F6E */
const scrollPosition = helper.createRootMemo(() => {
	if (store.option.scrollbar.position === "auto") {
		if (store.isMobile) return "top";
		if (isAbreastMode()) return "bottom";
		return store.defaultImgType === "long" ? "bottom" : "right";
	}
	return store.option.scrollbar.position;
});
//#endregion
//#region src/components/Manga/actions/endPage.ts
/** \u5904\u7406\u5C3D\u5934\u7FFB\u9875\u3002\u8FD4\u56DE\u5F53\u524D\u662F\u5426\u5DF2\u62B5\u8FBE\u5C3D\u5934 */
const handleEndTurnPage = withOptionalState((dir, state) => {
	if (dir === "prev") switch (state.show.endPage) {
		case "start":
			if (state.scrollLock || store.option.scroolEnd !== "auto") return true;
			state.prop.onPrev?.();
			return true;
		case "end":
			state.show.endPage = void 0;
			return true;
		default: if (isTop()) {
			if (state.scrollLock) return true;
			if (!state.prop.onExit || !state.prop.onPrev || store.option.scroolEnd !== "auto") return true;
			state.show.endPage = "start";
			return true;
		}
	}
	else switch (state.show.endPage) {
		case "end":
			if (state.scrollLock || store.option.scroolEnd === "none") return true;
			if (store.option.scroolEnd === "auto" && state.prop.onNext) state.prop.onNext();
			else state.prop.onExit?.(true);
			return true;
		case "start":
			state.show.endPage = void 0;
			return true;
		default: if (isBottom()) {
			if (state.scrollLock) return true;
			if (!state.prop.onExit) return true;
			state.show.endPage = "end";
			return true;
		}
	}
	return false;
});
//#endregion
//#region src/components/Manga/actions/imageLoad/state.ts
/** \u56FE\u7247\u52A0\u8F7D\u7BA1\u7406\u5668\u7684\u6301\u4E45\u72B6\u6001 */
const loadState = {
	/** \u56FE\u7247\u4E0A\u6B21\u52A0\u8F7D\u51FA\u9519\u7684\u65F6\u95F4\uFF0C\u7528\u4E8E\u9000\u907F\u91CD\u8BD5 */
	imgErrorMap: /* @__PURE__ */ new Map(),
	/** \u5C1A\u672A\u52A0\u8F7D\u5B8C\u6210\uFF08\u5305\u542B\u51FA\u9519\uFF09\u4E14\u6709 src \u7684\u56FE\u7247 url \u96C6\u5408 */
	unloadedUrlSet: /* @__PURE__ */ new Set(),
	/** \u5F53\u524D\u6CA1\u6709 src \u7684\u56FE\u7247\u6570\u91CF */
	waitUrlImgNum: 0,
	/** \u5F53\u524D loadType === 'loading' \u7684\u56FE\u7247 url \u96C6\u5408 */
	loadingUrlSet: new helper.ReactiveSet(),
	/** \u5B58\u653E\u6B63\u5728\u4F7F\u7528\u300C\u56FE\u50CF\u8BC6\u522B\u300D\u529F\u80FD\u7279\u6B8A\u4E0B\u8F7D\u7684\u56FE\u7247 url \u6240\u5BF9\u5E94\u7684 AbortController */
	abortMap: /* @__PURE__ */ new Map()
};
const setLoadingUrlSet = (urls) => {
	solid_js.batch(() => {
		loadState.loadingUrlSet.clear();
		for (const url of urls) loadState.loadingUrlSet.add(url);
	});
};
/** \u5728 \`store.imgList\` \u6216 \`store.imgMap\` \u88AB\u4FEE\u6539\u540E\uFF0C\u8FDB\u884C\u5B8C\u6574\u7684\u72B6\u6001\u66F4\u65B0 */
const syncImgLoadState = (state) => {
	loadState.unloadedUrlSet.clear();
	let waitNum = 0;
	const nextLoading = /* @__PURE__ */ new Set();
	for (const url of state.imgList) {
		const img = state.imgMap[url];
		if (!img) continue;
		if (img.src) {
			if (img.loadType !== "loaded") loadState.unloadedUrlSet.add(url);
		} else waitNum += 1;
		if (img.loadType === "loading") nextLoading.add(url);
	}
	loadState.waitUrlImgNum = waitNum;
	setLoadingUrlSet(nextLoading);
};
//#endregion
//#region src/components/Manga/actions/imageType.ts
const isWideType = (type) => type === "wide" || type === "long";
const \u5355\u9875\u6BD4\u4F8B = 960 / 1080;
const \u6A2A\u5E45\u6BD4\u4F8B = 1920 / 1080;
const \u6761\u6F2B\u6BD4\u4F8B = 960 / 1080 / 2;
/** \u6839\u636E\u6BD4\u4F8B\u5224\u65AD\u56FE\u7247\u7C7B\u578B */
const getImgType = (img) => {
	const imgRatio = img.width / img.height;
	if (imgRatio <= \u5355\u9875\u6BD4\u4F8B) return imgRatio < \u6761\u6F2B\u6BD4\u4F8B ? "vertical" : "";
	return imgRatio > \u6A2A\u5E45\u6BD4\u4F8B ? "long" : "wide";
};
/** \u66F4\u65B0\u56FE\u7247\u7C7B\u578B\u3002\u8FD4\u56DE\u662F\u5426\u4FEE\u6539\u4E86\u56FE\u7247\u7C7B\u578B */
const updateImgType = (state, draftImg) => {
	const { type } = draftImg;
	if (!draftImg.width || !draftImg.height) return false;
	draftImg.type = getImgType(draftImg);
	if (isWideType(type) !== isWideType(draftImg.type)) updatePageData.throttle();
	return (type ?? state.defaultImgType) !== draftImg.type;
};
/** \u662F\u5426\u81EA\u52A8\u5F00\u542F\u8FC7\u5377\u8F74\u6A21\u5F0F */
let autoScrollMode = false;
helper.createRootEffect((prevIsWide) => {
	if (store.rootSize.width === 0 || store.rootSize.height === 0) return;
	const defaultImgType = getImgType(placeholderSize());
	if (defaultImgType === store.defaultImgType) return prevIsWide;
	const isWide = isWideType(defaultImgType);
	setState((state) => {
		state.defaultImgType = defaultImgType;
		if (defaultImgType === "vertical" && !autoScrollMode && !state.option.scrollMode.enabled) {
			state.option.scrollMode.enabled = true;
			autoScrollMode = true;
			return;
		}
		if (isWide !== prevIsWide) updatePageData(state);
	});
	return isWide;
}, false);
//#endregion
//#region src/components/Manga/actions/imageSize.ts
/** \u8BA1\u7B97\u88C1\u5207\u540E\u7684\u56DB\u8FB9\u6BD4\u4F8B\uFF0C\u6CA1\u6709\u88C1\u5207\u65F6\u8FD4\u56DE null */
const getCropMargin = ({ blankMargin: margin, width, height }, state = store) => {
	const { crop, keepMargin } = state.option.imgRecognition;
	if (!crop || !margin || !width || !height) return null;
	const left = Math.max(0, margin.left - keepMargin / width);
	const right = Math.max(0, margin.right - keepMargin / width);
	const top = Math.max(0, margin.top - keepMargin / height);
	const bottom = Math.max(0, margin.bottom - keepMargin / height);
	if (left + right + top + bottom === 0) return null;
	return {
		left,
		right,
		top,
		bottom
	};
};
/** \u83B7\u53D6\u6307\u5B9A\u56FE\u7247\u7684\u663E\u793A\u5C3A\u5BF8\uFF08\u4F1A\u5C06\u8FB9\u7F18\u88C1\u5207\u8BA1\u7B97\u5728\u5185\uFF09 */
const getImgDisplaySize = (state, img) => {
	let height = img.height ?? placeholderSize().height;
	let width = img.width ?? placeholderSize().width;
	if (state.option.imgRecognition.crop && img.width && img.height) {
		const crop = getCropMargin(img, state);
		if (crop) {
			width = img.width * (1 - crop.left - crop.right);
			height = img.height * (1 - crop.top - crop.bottom);
		}
	}
	if (!state.option.scrollMode.enabled) return {
		height,
		width
	};
	const setWidth = (w) => {
		height *= w / width;
		width = w;
		return {
			height,
			width
		};
	};
	if (isAbreastMode()) return setWidth(abreastColumnWidth());
	if (state.option.scrollMode.adjustToWidth === "full") return setWidth(state.rootSize.width);
	if (typeof state.option.scrollMode.adjustToWidth === "number") {
		const target = state.option.scrollMode.adjustToWidth;
		const type = img.type ?? state.defaultImgType;
		if (isWideType(type)) {
			const ratio = height / width;
			width = helper.clamp(Math.min(target, state.rootSize.width), width, state.rootSize.width);
			height = width * ratio;
			return {
				height,
				width
			};
		}
		return setWidth(Math.min(target, state.rootSize.width));
	}
	if (state.option.scrollMode.imgScale !== 1) {
		height *= state.option.scrollMode.imgScale;
		width *= state.option.scrollMode.imgScale;
	}
	if (width > state.rootSize.width) return setWidth(state.rootSize.width);
	return {
		height,
		width
	};
};
/** \u66F4\u65B0\u56FE\u7247\u5C3A\u5BF8 */
const updateImgSize = withOptionalState((url, width, height, state) => {
	const img = state.imgMap[url];
	if (img.width !== width || img.height !== height) {
		img.width = width;
		img.height = height;
		updateImgType(state, img);
	}
	const size = getImgDisplaySize(state, img);
	if (img.size.width !== size.width || img.size.height !== size.height) Object.assign(img.size, size);
});
helper.createEffectOn([
	placeholderSize,
	() => store.rootSize,
	() => store.option.scrollMode.enabled,
	() => store.option.scrollMode.imgScale,
	() => store.option.scrollMode.abreastMode,
	() => store.option.scrollMode.adjustToWidth,
	() => store.option.imgRecognition.crop,
	() => store.option.imgRecognition.keepMargin
], () => {
	setState((state) => {
		for (const url of state.imgList) {
			const img = state.imgMap[url];
			Object.assign(img.size, getImgDisplaySize(state, img));
		}
	});
});
//#endregion
//#region src/components/Manga/actions/renderPage.ts
/** \u83B7\u53D6\u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u6307\u5B9A\u5217\u7684\u6307\u5B9A\u56FE\u7247 */
const getAbreastColumnImg = (column, img) => {
	const { columns } = abreastArea();
	return columns[helper.clamp(0, column, columns.length - 1)]?.at(img) ?? 0;
};
/** \u8BA1\u7B97\u663E\u793A\u9875\u9762 */
const updateShowRange = (state) => {
	if (scrollLength() === 0) {
		state.showRange = [0, 0];
		state.renderRange = state.showRange;
	} else if (!state.option.scrollMode.enabled) {
		state.showRange = [state.activePageIndex, state.activePageIndex];
		state.renderRange = [helper.clamp(0, state.activePageIndex - 1, state.pageList.length - 1), helper.clamp(0, state.activePageIndex + 1, state.pageList.length - 1)];
	} else if (state.option.scrollMode.abreastMode) {
		const { start, end } = abreastShowColumn();
		state.showRange = [getAbreastColumnImg(start, 0), getAbreastColumnImg(end, -1)];
		state.renderRange = [getAbreastColumnImg(start - 2, 0), getAbreastColumnImg(end + 2, -1)];
	} else {
		const top = scrollTop();
		const bottom = scrollTop() + state.rootSize.height;
		const renderTop = top - state.rootSize.height;
		const rednerBottom = bottom + state.rootSize.height;
		const renderTopImg = findTopPage(renderTop);
		const topImg = findTopPage(top, renderTopImg);
		const bottomImg = findTopPage(bottom, topImg);
		const renderBottomImg = findTopPage(rednerBottom, bottomImg);
		state.showRange = [topImg, bottomImg];
		state.renderRange = [renderTopImg, renderBottomImg];
	}
};
helper.createEffectOn([
	scrollLength,
	() => store.option.scrollMode.enabled,
	() => store.activePageIndex,
	() => store.option.scrollMode.abreastMode,
	() => store.rootSize,
	abreastShowColumn,
	scrollTop
], helper.throttle(() => setState(updateShowRange)));
/** \u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u5185\u9875\u9762\u6240\u5305\u542B\u7684\u56FE\u7247 */
const getRangeImgList = (range) => {
	let list;
	if (range[0] === range[1]) list = new Set(store.pageList[range[0]]);
	else {
		list = /* @__PURE__ */ new Set();
		for (const [a, b] of store.pageList.slice(range[0], range[1] + 1)) {
			list.add(a);
			if (b !== void 0) list.add(b);
		}
	}
	list.delete(-1);
	return list;
};
const renderImgList = helper.createRootMemo(() => getRangeImgList(store.renderRange));
const showImgList = helper.createRootMemo(() => getRangeImgList(store.showRange));
/** \u66F4\u65B0\u6BCF\u5F20\u56FE\u7247\u5728 store \u4E2D\u7684\u663E\u793A\u72B6\u6001 */
helper.createEffectOn(() => store.renderRange, () => {
	const newState = {};
	for (let [i] = store.renderRange; i <= store.renderRange[1]; i++) {
		const page = store.pageList[i];
		if (!page) continue;
		const [a, b] = page;
		if (b === void 0) newState[a] = "";
		else {
			newState[a] = 0;
			newState[b] = 1;
		}
	}
	setState("imgShowState", solid_js_store.reconcile(newState));
});
helper.createEffectOn([() => store.showRange, () => store.option.scrollMode.enabled], ([[firstPage], isScrollMode]) => isScrollMode && setState("activePageIndex", firstPage ?? 0));
helper.createEffectOn(showImgList, (showImgs) => {
	if (showImgs.size === 0) return;
	store.prop.onShowImgsChange?.(showImgs, imgList());
}, { defer: true });
//#endregion
//#region src/components/Manga/actions/imageLoad/scheduler.ts
/** \u83B7\u53D6\u6307\u5B9A\u9875\u6570\u4E0B\u7684\u5934/\u5C3E\u56FE\u7247 */
const getPageImg = (pageNum, imgType) => {
	const page = store.pageList[pageNum].filter((i) => i !== -1);
	if (page.length === 1) return page[0];
	return imgType === "start" ? Math.min(...page) : Math.max(...page);
};
/** \u89C4\u5212\u5F53\u524D\u8981\u52A0\u8F7D\u7684\u56FE\u7247 */
const planLoadBatch = () => {
	/** \u5F53\u524D\u6279\u6B21\u4E2D\u9700\u8981\u6539\u6210 loading \u7684\u56FE\u7247 */
	const loadImgList = /* @__PURE__ */ new Set();
	/** \u5F53\u524D\u52A0\u8F7D\u8303\u56F4\u5185\u8FD8\u6CA1\u6709 src \u7684\u56FE\u7247\u7D22\u5F15 */
	const waitUrlImgs = /* @__PURE__ */ new Set();
	/** \u52A0\u8F7D\u6307\u5B9A\u56FE\u7247\u3002\u8FD4\u56DE\u662F\u5426\u5DF2\u52A0\u8F7D\u5B8C\u6210 */
	const loadImg = (index) => {
		const img = getImg(index);
		if (!img.src) {
			waitUrlImgs.add(index);
			return true;
		}
		if (img.loadType === "loaded" || img.loadType === "error") return true;
		loadImgList.add(img.src);
		return false;
	};
	/**
	* \u4EE5\u5F53\u524D\u663E\u793A\u9875\u4E3A\u57FA\u51C6\uFF0C\u9884\u52A0\u8F7D\u9644\u8FD1\u6307\u5B9A\u9875\u6570\u7684\u56FE\u7247\uFF0C\u5E76\u53D6\u6D88\u5176\u4ED6\u9884\u52A0\u8F7D\u7684\u56FE\u7247
	* @param target \u52A0\u8F7D\u76EE\u6807\u9875
	* @param loadNum \u52A0\u8F7D\u56FE\u7247\u6570\u91CF
	* @returns \u8FD4\u56DE\u6307\u5B9A\u8303\u56F4\u5185\u662F\u5426\u8FD8\u6709\u672A\u52A0\u8F7D\u7684\u56FE\u7247
	*/
	const loadRangeImg = (target = 0, loadNum = 2) => {
		let start = getPageImg(store.showRange[0], "start");
		let end = getPageImg(store.showRange[1], "end");
		if (target !== 0) {
			if (target < 0) {
				end = start + target;
				start -= 1;
			} else {
				start = end + 1;
				end += target;
			}
			start = helper.clamp(0, start, store.imgList.length - 1);
			end = helper.clamp(0, end, store.imgList.length - 1);
		}
		/** \u662F\u5426\u8FD8\u6709\u672A\u52A0\u8F7D\u7684\u56FE\u7247 */
		let hasUnloadedImg = false;
		let index = start;
		const condition = start <= end ? () => index <= end : () => index >= end;
		const step = start <= end ? 1 : -1;
		while (condition()) {
			if (!loadImg(index)) hasUnloadedImg = true;
			if (loadImgList.size >= loadNum) return index !== end || hasUnloadedImg;
			index += step;
		}
		return hasUnloadedImg;
	};
	if (store.imgList.length > 0) loadRangeImg() || loadRangeImg(preloadNum().back) || loadRangeImg(-preloadNum().front) || !store.option.alwaysLoadAllImg || loadRangeImg(Infinity, 5) || loadRangeImg(Number.NEGATIVE_INFINITY, 5);
	return {
		loadImgList,
		waitUrlImgs
	};
};
/** \u6839\u636E\u5F53\u524D\u663E\u793A\u8303\u56F4\u91CD\u65B0\u8BA1\u7B97\u5E76\u4FEE\u6539\u56FE\u7247\u52A0\u8F7D\u72B6\u6001 */
const updateImgLoadType = helper.singleThreaded(() => {
	if (store.showRange[0] < 0 || loadState.unloadedUrlSet.size === 0 && loadState.waitUrlImgNum === 0) return;
	const { loadImgList, waitUrlImgs } = planLoadBatch();
	store.prop.onWaitUrlImgs?.(waitUrlImgs, imgList());
	setState((state) => {
		for (const url of /* @__PURE__ */ new Set([...loadState.loadingUrlSet, ...loadImgList])) {
			const img = state.imgMap[url];
			if (!img) continue;
			if (loadImgList.has(url)) {
				if (img.loadType !== "loading") {
					img.loadType = "loading";
					if (!store.option.imgRecognition.enabled && img.width === void 0) setTimeout(checkImgSize, 0, img.src);
				}
			} else if (img.loadType === "loading") img.loadType = "wait";
		}
	});
	setLoadingUrlSet(loadImgList);
});
helper.createEffectOn([
	preloadNum,
	renderImgList,
	() => store.imgMap,
	() => store.option.alwaysLoadAllImg
], updateImgLoadType);
/** \u52A0\u8F7D\u671F\u95F4\u5C3D\u5FEB\u83B7\u53D6\u56FE\u7247\u5C3A\u5BF8 */
const checkImgSize = (url) => {
	const imgDom = getImgEle(url);
	if (!imgDom) return;
	const timeoutId = setInterval(() => {
		if (!imgDom?.isConnected || store.option.imgRecognition.enabled) return clearInterval(timeoutId);
		const img = store.imgMap[url];
		if (!img || img.loadType !== "loading") return clearInterval(timeoutId);
		if (imgDom.naturalWidth && imgDom.naturalHeight) {
			updateImgSize(url, imgDom.naturalWidth, imgDom.naturalHeight);
			return clearInterval(timeoutId);
		}
	}, 200);
};
//#endregion
//#region src/components/Manga/actions/imageRecognition.ts
/**
* \u5728\u300C\u56FE\u50CF\u8BC6\u522B\u300D\u76F8\u5173\u529F\u80FD\u7684\u914D\u7F6E\u53D8\u66F4\u540E\u53D8\u66F4
* \u7528\u4E8E\u5728 worker \u6267\u884C\u7ED3\u675F\u540E\u5224\u65AD\u6570\u636E\u662F\u5426\u8FC7\u671F
*/
let recognitionVersion = 0;
/** \u4F7F\u6240\u6709\u6B63\u5728\u8FDB\u884C\u7684\u56FE\u50CF\u8BC6\u522B\u7ED3\u679C\u5931\u6548 */
const invalidateRecognition = () => {
	recognitionVersion += 1;
	setState((state) => {
		for (const img of Object.values(state.imgMap)) img.recognitionVersion = void 0;
	});
};
/** \u5224\u65AD\u56FE\u7247\u662F\u5426\u5904\u4E8E\u5F53\u524D\u6E32\u67D3\u8303\u56F4\u5185 */
const isInRenderRange = (url) => {
	const renderList = renderImgList();
	return getImgIndexs(url).some((index) => renderList.has(index));
};
const handleImgRecognition = async (url, imgEle) => {
	const img = store.imgMap[url];
	if (!img || img.recognitionVersion !== void 0) return;
	if (!(store.option.imgRecognition.background && img.background === void 0 || store.option.imgRecognition.pageFill && img.blankMargin === void 0 || store.option.imgRecognition.crop && img.blankMargin === void 0)) return;
	if (!isInRenderRange(url)) return;
	imgEle ??= await helper.wait(() => getImgEle(url, true), 1e3);
	if (!imgEle) return helper.log.warn("\u83B7\u53D6\u56FE\u7247\u5143\u7D20\u5931\u8D25");
	setState("imgMap", url, "recognitionVersion", recognitionVersion);
	const { data, width, height } = helper.getImageData(imgEle, 200);
	initWorker$1();
	await worker_ImageRecognition.default.recognitionImg(comlink.default.transfer(data, [data.buffer]), {
		width,
		height,
		url,
		index: Number(imgEle.alt),
		option: solid_js_store.unwrap(store.option.imgRecognition),
		version: recognitionVersion
	});
};
const initWorker$1 = helper.once(() => {
	const mainFn = {
		log: helper.log,
		updatePageData: helper.throttle(() => setState(updatePageData), 1e3),
		setImg: ({ url, key, val, version }) => {
			if (!Reflect.has(store.imgMap, url)) return;
			if (version !== recognitionVersion) return;
			setState("imgMap", url, key, val);
			if (key === "blankMargin" && store.option.imgRecognition.crop) {
				const { width, height } = store.imgMap[url];
				if (width && height) updateImgSize(url, width, height);
			}
		}
	};
	worker_ImageRecognition.default.setMainFn(comlink.default.proxy(mainFn), Object.keys(mainFn));
});
helper.createEffectOn([
	renderImgList,
	() => store.option.imgRecognition.enabled,
	() => store.option.imgRecognition.background,
	() => store.option.imgRecognition.pageFill,
	() => store.option.imgRecognition.crop
], ([imgList, enabled]) => {
	if (!enabled) return;
	for (const index of imgList) {
		const img = getImg(index);
		if (img.loadType === "loaded") handleImgRecognition(img.src);
	}
});
//#endregion
//#region src/components/Manga/helper.ts
/** \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1 */
const stopPropagation = (e) => e.stopPropagation();
/** \u4ECE\u5934\u5F00\u59CB\u64AD\u653E\u5143\u7D20\u7684\u52A8\u753B */
const playAnimation = (e) => {
	if (!e) return;
	for (const animation of e.getAnimations()) {
		animation.cancel();
		animation.play();
	}
};
const downloadImg = async (imgUrl, details, retryNum = 0) => {
	const url = store.imgMap[imgUrl]?.blobUrl ?? imgUrl;
	if (url.startsWith("blob:")) return (await fetch(url)).blob();
	const res = await request.downloadImg(url, details, retryNum);
	if (Reflect.has(store.imgMap, imgUrl)) setState("imgMap", imgUrl, "blobUrl", URL.createObjectURL(res));
	return res;
};
//#endregion
//#region src/components/Manga/actions/translation/TranslationTask.ts
/**
* \u7FFB\u8BD1\u4EFB\u52A1\u57FA\u7C7B
*
* \u6BCF\u4E2A\u7FFB\u8BD1\u4EFB\u52A1\u90FD\u662F\u72EC\u7ACB\u7684\u5B9E\u4F8B\uFF0C\u8D1F\u8D23\u5355\u5F20\u56FE\u7247\u7684\u5B8C\u6574\u7FFB\u8BD1\u6D41\u7A0B\u3002
* \u5B50\u7C7B\u9700\u8981\u5B9E\u73B0 {@link work} \u65B9\u6CD5\u6765\u5B9A\u4E49\u5177\u4F53\u7684\u7FFB\u8BD1\u903B\u8F91\u3002
*/
var TranslationTask = class {
	url;
	constructor(url) {
		this.url = url;
	}
	/** \u66F4\u65B0\u5F53\u524D\u56FE\u7247\u7684\u7FFB\u8BD1\u72B6\u6001\u6D88\u606F */
	setMessage(message) {
		setState("imgMap", this.url, "translationMessage", message);
	}
	/** \u4E0B\u8F7D\u56FE\u7247 */
	async download(url = this.url, details) {
		try {
			return await downloadImg(url, details);
		} catch (error) {
			helper.log.error(error);
			store.prop.onImgError?.(url);
			throw new Error(helper.t("translation.tip.download_img_failed"), { cause: error });
		}
	}
	/** \u7F29\u5C0F\u8FC7\u5927\u7684\u56FE\u7247\uFF08\u8D85\u8FC7 4096px\uFF09 */
	async resize(blob) {
		const img = store.imgMap[this.url];
		const w = img.width;
		const h = img.height;
		if (w <= 4096 && h <= 4096) return blob;
		try {
			const scale = Math.min(4096 / w, 4096 / h);
			const width = Math.floor(w * scale);
			const height = Math.floor(h * scale);
			const imgDom = await helper.waitImgLoad(URL.createObjectURL(blob));
			const canvas = new OffscreenCanvas(width, height);
			const ctx = canvas.getContext("2d");
			ctx.imageSmoothingQuality = "high";
			ctx.drawImage(imgDom, 0, 0, width, height);
			URL.revokeObjectURL(imgDom.src);
			return await helper.canvasToBlob(canvas);
		} catch (error) {
			helper.log.error("\u7F29\u5C0F\u56FE\u7247\u5C3A\u5BF8\u65F6\u51FA\u9519", error);
			return blob;
		}
	}
	/**
	* \u6267\u884C\u7FFB\u8BD1\u4EFB\u52A1
	* @returns \u7FFB\u8BD1\u540E\u7684\u56FE\u7247 URL
	*/
	async run() {
		try {
			await this.init();
			this.setMessage(helper.t("translation.tip.img_downloading"));
			let blob = await this.download();
			blob = await this.resize(blob);
			return await this.work(blob);
		} catch (error) {
			this.setMessage(error.message);
			helper.log.error("\u7FFB\u8BD1\u51FA\u9519", error);
			components_Toast.toast.error(error.message);
			throw error;
		}
	}
	/** \u521D\u59CB\u5316\u4EFB\u52A1\uFF0C\u5B50\u7C7B\u53EF\u91CD\u5199 */
	async init() {}
};
//#endregion
//#region src/components/Manga/actions/translation/translator/Cotrans/index.ts
/**
* Cotrans \u7FFB\u8BD1\u4EFB\u52A1\u5B9E\u73B0
*
* \u4F7F\u7528 cotrans.touhou.ai \u516C\u5171\u670D\u52A1\u8FDB\u884C\u56FE\u7247\u7FFB\u8BD1\u3002
* \u901A\u8FC7 WebSocket \u6216\u8F6E\u8BE2\u83B7\u53D6\u7FFB\u8BD1\u72B6\u6001\uFF0C\u6700\u7EC8\u5408\u5E76\u539F\u56FE\u548C\u7FFB\u8BD1\u8499\u7248\u3002
*/
/**
* Cotrans \u7FFB\u8BD1\u4EFB\u52A1
*
* \u4F7F\u7528 cotrans.touhou.ai \u516C\u5171\u7FFB\u8BD1\u670D\u52A1\u3002
* \u8FD4\u56DE\u7684\u662F\u7FFB\u8BD1\u8499\u7248\uFF0C\u9700\u8981\u4E0E\u539F\u56FE\u5408\u5E76\u3002
*/
var Cotrans = class Cotrans extends TranslationTask {
	/** \u521B\u5EFA\u4E0A\u4F20\u8868\u5355\u6570\u636E */
	static createFormData(blob) {
		const formData = new FormData();
		const fileName = \`image.\${blob.type.split("/").at(-1)}\`;
		const file = new File([blob], fileName, { type: blob.type });
		const options = store.option.translation.cotrans;
		formData.append("file", file);
		formData.append("mime", file.type);
		formData.append("size", sizeDict[options.detector.detection_size]);
		formData.append("detector", options.detector.detector);
		formData.append("direction", options.render.direction);
		formData.append("translator", options.translator.translator);
		formData.append("target_language", options.translator.target_lang);
		formData.append("retry", \`\${store.option.translation.forceRetry}\`);
		return formData;
	}
	/** \u4E0A\u4F20\u56FE\u7247\u5230 Cotrans \u670D\u52A1\u5668 */
	async upload(blob) {
		try {
			return await request.request("https://api.cotrans.touhou.ai/task/upload/v1", {
				method: "POST",
				data: Cotrans.createFormData(blob)
			});
		} catch (error) {
			helper.log.error(error);
			throw new Error(helper.t("translation.tip.upload_error"), { cause: error });
		}
	}
	/** \u89E3\u6790\u4E0A\u4F20\u54CD\u5E94 */
	parse(json) {
		let data;
		try {
			data = JSON.parse(json);
		} catch (error) {
			throw new Error(\`\${helper.t("translation.tip.upload_return_error")}\uFF1A\${json}\`, { cause: error });
		}
		if ("error_id" in data) throw new Error(\`\${helper.t("translation.tip.upload_return_error")}\uFF1A\${data.error_id}\`);
		if (!data.id) throw new Error(helper.t("translation.tip.id_not_returned"));
		return data;
	}
	/** \u5904\u7406 WebSocket \u6216\u8F6E\u8BE2\u8FD4\u56DE\u7684\u6D88\u606F */
	handleMessage(msg) {
		switch (msg.type) {
			case "result": return msg.result.translation_mask;
			case "pending":
				this.setMessage(helper.t("translation.tip.pending", { pos: msg.pos }));
				break;
			case "status":
				this.setMessage(helper.t(\`translation.status.\${msg.status}\`) || msg.status);
				break;
			case "error": throw new Error(\`\${helper.t("translation.status.error")}\uFF1Aid \${msg.error_id}\`);
			case "not_found": throw new Error(\`\${helper.t("translation.status.error")}\uFF1ANot Found\`);
		}
	}
	/** \u901A\u8FC7\u8F6E\u8BE2\u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210 */
	async waitByPolling(id) {
		let result;
		while (result === void 0) {
			const res = await request.request(\`https://api.cotrans.touhou.ai/task/\${id}/status/v1\`, { responseType: "json" });
			result = this.handleMessage(res.response);
			await helper.sleep(1e3);
		}
		return result;
	}
	/** \u901A\u8FC7 WebSocket \u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210\uFF0C\u5931\u8D25\u65F6\u964D\u7EA7\u4E3A\u8F6E\u8BE2 */
	wait(id) {
		const ws = new WebSocket(\`wss://api.cotrans.touhou.ai/task/\${id}/event/v1\`);
		if (ws.readyState > 1) return this.waitByPolling(id);
		return new Promise((resolve, reject) => {
			ws.onmessage = (e) => {
				try {
					const result = this.handleMessage(JSON.parse(e.data));
					if (result) resolve(result);
				} catch (error) {
					reject(error);
				}
			};
		});
	}
	/** \u5C06\u539F\u56FE\u4E0E\u7FFB\u8BD1\u8499\u7248\u5408\u5E76 */
	async mergeImage(rawImage, maskUri) {
		const img = await helper.waitImgLoad(URL.createObjectURL(rawImage));
		const canvas = new OffscreenCanvas(img.naturalWidth, img.naturalHeight);
		const canvasCtx = canvas.getContext("2d");
		canvasCtx.drawImage(img, 0, 0);
		const mask = await helper.waitImgLoad(URL.createObjectURL(await this.download(maskUri)));
		canvasCtx.drawImage(mask, 0, 0);
		return await helper.canvasToBlobUrl(canvas);
	}
	async work(blob) {
		this.setMessage(helper.t("translation.tip.upload"));
		const res = await this.upload(blob);
		const data = this.parse(res.responseText);
		const translation_mask = data.result?.translation_mask || await this.wait(data.id);
		return await this.mergeImage(blob, translation_mask);
	}
};
//#endregion
//#region src/components/Manga/actions/translation/translator/MangaImageTranslator/helper.ts
/**
* MangaImageTranslator \u8F85\u52A9\u51FD\u6570
*
* \u63D0\u4F9B API \u8BF7\u6C42\u3001URL \u6784\u5EFA\u7B49\u901A\u7528\u529F\u80FD\u3002
*/
/** \u83B7\u53D6 API \u57FA\u7840 URL\uFF0C\u4F18\u5148\u4F7F\u7528\u81EA\u5B9A\u4E49\u5730\u5740 */
const apiUrl = () => store.option.translation.mit?.localUrl?.replace(/\\/$/u, "") || "http://127.0.0.1:5003";
/** ngrok \u4EE3\u7406\u9700\u8981\u7684\u7279\u6B8A\u8BF7\u6C42\u5934 */
const headers$1 = helper.createRootMemo(() => {
	if (apiUrl().includes(".ngrok-free.")) return { "ngrok-skip-browser-warning": "69420" };
});
/**
* \u53D1\u9001 API \u8BF7\u6C42
* @param url API \u8DEF\u5F84\uFF08\u4E0D\u542B\u57FA\u7840 URL\uFF09
* @param details \u8BF7\u6C42\u914D\u7F6E
* @param retryNum \u91CD\u8BD5\u6B21\u6570
*/
const api = (url, details, retryNum = 0) => request.request(\`\${apiUrl()}\${url}\`, {
	...details,
	headers: {
		...details?.headers,
		...headers$1()
	}
}, retryNum);
//#endregion
//#region src/components/Manga/actions/translation/translator/MangaImageTranslator/index.ts
/**
* MangaImageTranslator \u7FFB\u8BD1\u4EFB\u52A1\u5B9E\u73B0
*
* \u652F\u6301\u81EA\u90E8\u7F72\u7684 manga-image-translator \u670D\u52A1\u3002
* \u540C\u65F6\u517C\u5BB9\u65B0\u65E7\u7248\u672C API\uFF0C\u652F\u6301\u6D41\u5F0F\u548C\u975E\u6D41\u5F0F\u54CD\u5E94\u3002
*
* API \u6587\u6863: http://0.0.0.0:5003/docs
*/
/**
* MangaImageTranslator \u7FFB\u8BD1\u4EFB\u52A1
*
* \u652F\u6301\u81EA\u90E8\u7F72\u670D\u52A1\uFF0C\u53EF\u4F7F\u7528\u81EA\u5B9A\u4E49\u670D\u52A1\u5668\u5730\u5740\u3002
* \u4F18\u5148\u4F7F\u7528\u6D41\u5F0F API \u83B7\u53D6\u5B9E\u65F6\u7FFB\u8BD1\u72B6\u6001\u3002
*/
var MIT = class MIT extends TranslationTask {
	isOldVersion = false;
	/** \u521B\u5EFA\u4E0A\u4F20\u8868\u5355\u6570\u636E */
	static createFormData(blob, isOldVersion) {
		const formData = new FormData();
		const fileName = \`image.\${blob.type.split("/").at(-1)}\`;
		const file = new File([blob], fileName, { type: blob.type });
		const { localUrl: _, ...options } = store.option.translation.mit;
		if (isOldVersion) {
			formData.append("file", file);
			formData.append("mime", file.type);
			formData.append("size", sizeDict[options.detector.detection_size]);
			formData.append("detector", options.detector.detector);
			formData.append("direction", options.render.direction);
			formData.append("translator", options.translator.translator);
			formData.append("target_lang", options.translator.target_lang);
			formData.append("retry", \`\${store.option.translation.forceRetry}\`);
		} else {
			formData.append("image", file);
			formData.append("config", JSON.stringify(options));
		}
		return formData;
	}
	async init() {
		const res = await api("/", { errorText: \`\${helper.t("setting.option.paragraph_translation")} - \${helper.t("alert.server_connect_failed")}\` });
		this.isOldVersion = res.responseText.includes("value=\\"S\\">1024px</");
	}
	/** \u65E7\u7248 API\uFF1A\u4E0A\u4F20\u56FE\u7247\u83B7\u53D6\u4EFB\u52A1 ID */
	async oldUpload(blob) {
		try {
			return (await api("/submit", {
				method: "POST",
				responseType: "json",
				data: MIT.createFormData(blob, true)
			})).response.task_id;
		} catch (error) {
			helper.log.error(error);
			throw new Error(helper.t("translation.tip.upload_error"), { cause: error });
		}
	}
	/** \u65E7\u7248 API\uFF1A\u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210 */
	async oldWork(blob) {
		const task_id = await this.oldUpload(blob);
		let errorNum = 0;
		let taskState;
		while (!taskState?.finished) try {
			await helper.sleep(200);
			taskState = (await api(\`/task-state?taskid=\${task_id}\`, { responseType: "json" })).response;
			this.setMessage(helper.t(\`translation.status.\${taskState.state}\`) || taskState.state);
		} catch (error) {
			helper.log.error(error);
			if (errorNum > 5) throw new Error(helper.t("translation.tip.check_img_status_failed"), { cause: error });
			errorNum += 1;
		}
		const res = await this.download(\`\${apiUrl()}/result/\${task_id}\`, { headers: headers$1() });
		return URL.createObjectURL(res);
	}
	/** \u65B0\u7248 API\uFF1A\u901A\u8FC7\u6D41\u5F0F\u63A5\u53E3\u4E0A\u4F20 */
	async uploadByStream(blob) {
		const res = await fetch(\`\${apiUrl()}/translate/with-form/image/stream\`, {
			method: "POST",
			headers: headers$1(),
			body: MIT.createFormData(blob, false)
		});
		if (res.status !== 200 || !res.body) throw new Error(helper.t("translation.status.error"));
		return res.body.getReader();
	}
	/** \u89E3\u6790\u6D41\u5F0F\u54CD\u5E94\uFF0C\u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210 */
	async wait(reader) {
		const decoder = new TextDecoder("utf-8");
		let buffer = /* @__PURE__ */ new Uint8Array();
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			buffer = Uint8Array.from([...buffer, ...value]);
			while (buffer.length >= 5) {
				const totalSize = 5 + new DataView(buffer.buffer).getUint32(1, false);
				if (buffer.length < totalSize) break;
				const data = buffer.slice(5, totalSize);
				switch (buffer[0]) {
					case 0: return URL.createObjectURL(new Blob([data], { type: "image/png" }));
					case 1: {
						const status = decoder.decode(data);
						if (!status.includes(":")) this.setMessage(helper.t(\`translation.status.\${status}\`) || status);
						break;
					}
					case 2: throw new Error(\`\${helper.t("translation.status.error")}: \${decoder.decode(data)}\`);
					case 3: {
						const pos = decoder.decode(data);
						if (pos !== "0") {
							this.setMessage(helper.t("translation.tip.pending", { pos }));
							break;
						}
					}
					case 4: this.setMessage(helper.t("translation.status.pending"));
				}
				buffer = buffer.slice(totalSize);
			}
		}
		throw new Error(helper.t("translation.status.error"));
	}
	/** \u65B0\u7248 API\uFF1A\u975E\u6D41\u5F0F\u63A5\u53E3\uFF08\u5F53\u6D41\u5F0F\u63A5\u53E3\u4E0D\u53EF\u7528\u65F6\u964D\u7EA7\u4F7F\u7528\uFF09 */
	async uploadByNoStream(blob) {
		this.setMessage(helper.t("translation.tip.translating"));
		const res = await api("/translate/with-form/image", {
			method: "POST",
			responseType: "blob",
			fetch: false,
			timeout: 6e5,
			data: MIT.createFormData(blob, false),
			errorText: helper.t("translation.tip.upload_error")
		});
		return URL.createObjectURL(res.response);
	}
	async work(blob) {
		this.setMessage(helper.t("translation.tip.upload"));
		if (this.isOldVersion) return await this.oldWork(blob);
		try {
			const reader = await this.uploadByStream(blob);
			return await this.wait(reader);
		} catch (error) {
			if (error.message.includes("Failed to fetch")) return await this.uploadByNoStream(blob);
			throw error;
		}
	}
};
/** \u670D\u52A1\u652F\u6301\u7684\u7FFB\u8BD1\u5668\u5217\u8868 */
const [mitTranslators, setMitTranslators] = helper.createEqualsSignal([]);
/** \u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u53EF\u7528\u7FFB\u8BD1\u5668\u5217\u8868 */
const updateMitTranslators = async (noTip = false) => {
	if (!store.option.translation.enabled) return;
	if (store.option.translation.provider !== "manga-image-translator") return;
	try {
		const res = await api("/", {
			noTip,
			errorText: \`\${helper.t("setting.option.paragraph_translation")} - \${helper.t("alert.server_connect_failed")}\`
		});
		const translatorsText = /(?<=validTranslators: )\\[.+?\\](?=,)/su.exec(res.responseText)?.[0];
		if (!translatorsText) return;
		const list = JSON.parse(translatorsText.replaceAll(/\\s|,\\s*(?=\\])/gu, \`\`).replaceAll(\`'\`, \`"\`));
		setMitTranslators(list.map((name) => [name, helper.t(\`translation.translator.\${name}\`) || name]));
	} catch (error) {
		helper.log.error(helper.t("translation.tip.get_translator_list_error"), error);
		setMitTranslators([]);
	}
	if (!mitTranslators().some(([val]) => val === store.option.translation.mit.translator.translator)) {
		const translator = mitTranslators()[0]?.[0];
		setOption("translation", "mit", "translator", "translator", translator);
	}
};
helper.createEffectOn([
	() => store.option.translation.enabled,
	() => store.option.translation.provider,
	() => store.option.translation.mit.localUrl,
	helper.lang
], ([enabled, server]) => enabled && server === "manga-image-translator" && store.imgList.length > 0 && updateMitTranslators(true), { defer: true });
//#endregion
//#region src/components/Manga/index.module.css
const classes$2 = {
	"img": "img___7ajV4",
	"show": "show___HzwUa",
	"mangaFlow": "mangaFlow___jMZgq",
	"mangaBox": "mangaBox___48Jek",
	"root": "root___Hf5H2",
	"pageTip": "pageTip___P7thU",
	"endPage": "endPage___iOZmk",
	"endPageBody": "endPageBody___g-dz-",
	"tip": "tip___fyxqg",
	"jello": "jello___wXBLg",
	"comments": "comments___9ITQv",
	"toolbar": "toolbar___RMjHL",
	"toolbarPanel": "toolbarPanel___XYjgc",
	"toolbarBg": "toolbarBg___i4oTA",
	"SettingPanelPopper": "SettingPanelPopper___uEBz3",
	"SettingPanel": "SettingPanel___ZRvFB",
	"SettingBlock": "SettingBlock___qxNyt",
	"SettingBlockBody": "SettingBlockBody___Wirnd",
	"SettingBlockSubtitle": "SettingBlockSubtitle___cv0Ji",
	"SettingsItem": "SettingsItem___aJhRD",
	"SettingsShowItem": "SettingsShowItem___l-D2E",
	"SettingsItemName": "SettingsItemName___UP6zJ",
	"SettingsItemSwitch": "SettingsItemSwitch___LVGr9",
	"SettingsItemSwitchRound": "SettingsItemSwitchRound___Ds0B8",
	"SettingsItemIconButton": "SettingsItemIconButton___Cs7BQ",
	"SettingsItemSelect": "SettingsItemSelect___CvFKx",
	"closeCover": "closeCover___qLIp5",
	"SettingsShowItemBody": "SettingsShowItemBody___bgxxq",
	"hotkeys": "hotkeys___uu-Xe",
	"hotkeysItem": "hotkeysItem___d9IKS",
	"hotkeysHeader": "hotkeysHeader___jU7vr",
	"scrollbar": "scrollbar___hLToV",
	"scrollbarPage": "scrollbarPage___qghUs",
	"scrollbarSlider": "scrollbarSlider___r1fWf",
	"scrollbarPoper": "scrollbarPoper___XK5Rk",
	"touchAreaRoot": "touchAreaRoot___UN-W1",
	"touchArea": "touchArea___F6Hkh",
	"hidden": "hidden___rxU-6",
	"invisible": "invisible___cO-hs",
	"beautifyScrollbar": "beautifyScrollbar___lb6kJ"
};
//#endregion
//#region src/components/Manga/components/SettingsItem.tsx
var _tmpl$$44 = /*#__PURE__*/ solid_js_web.template(\`<div><div> <!> \`);
/** \u8BBE\u7F6E\u83DC\u5355\u9879 */
const SettingsItem = (props) => (() => {
	var _el$ = _tmpl$$44(), _el$2 = _el$.firstChild, _el$5 = _el$2.firstChild.nextSibling;
	_el$5.nextSibling;
	solid_js_web.insert(_el$2, () => props.name, _el$5);
	solid_js_web.insert(_el$, () => props.children, null);
	solid_js_web.effect((_p$) => {
		var _v$ = props.class ? \`\${classes$2.SettingsItem} \${props.class}\` : classes$2.SettingsItem, _v$2 = {
			[props.class ?? ""]: Boolean(props.class?.length),
			...props.classList
		}, _v$3 = props.style, _v$4 = helper.boolDataVal(props.disabled), _v$5 = classes$2.SettingsItemName;
		_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
		_p$.t = solid_js_web.classList(_el$, _v$2, _p$.t);
		_p$.a = solid_js_web.style(_el$, _v$3, _p$.a);
		_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-disabled", _p$.o = _v$4);
		_v$5 !== _p$.i && solid_js_web.className(_el$2, _p$.i = _v$5);
		return _p$;
	}, {
		e: void 0,
		t: void 0,
		a: void 0,
		o: void 0,
		i: void 0
	});
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/SettingsItemSelect.tsx
var _tmpl$$43 = /*#__PURE__*/ solid_js_web.template(\`<select>\`);
var _tmpl$2$9 = /*#__PURE__*/ solid_js_web.template(\`<option>\`);
/** \u9009\u62E9\u5668\u5F0F\u83DC\u5355\u9879 */
const SettingsItemSelect = (props) => {
	let ref;
	solid_js.createEffect(() => {
		ref.value = props.options?.some(([val]) => val === props.value) ? props.value : "";
	});
	return solid_js_web.createComponent(SettingsItem, {
		get name() {
			return props.name;
		},
		get ["class"]() {
			return props.class;
		},
		get classList() {
			return props.classList;
		},
		get children() {
			var _el$ = _tmpl$$43();
			solid_js_web.addEventListener(_el$, "click", () => props.onClick?.());
			_el$.addEventListener("change", (e) => props.onChange(e.target.value));
			var _ref$ = ref;
			typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : ref = _el$;
			solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.For, {
				get each() {
					return props.options;
				},
				children: ([val, label]) => (() => {
					var _el$2 = _tmpl$2$9();
					_el$2.value = val;
					solid_js_web.insert(_el$2, label ?? val);
					return _el$2;
				})()
			}));
			solid_js_web.effect(() => solid_js_web.className(_el$, classes$2.SettingsItemSelect));
			return _el$;
		}
	});
};
//#endregion
//#region src/components/Manga/actions/translation/translator/Cotrans/settings.tsx
var _tmpl$$42 = /*#__PURE__*/ solid_js_web.template(\`<blockquote>\`);
const bindOption$3 = (...args) => bindOption("translation", "cotrans", ...args);
/** Cotrans \u8BBE\u7F6E\u7EC4\u4EF6 */
const cotransSettings = () => [
	(() => {
		var _el$ = _tmpl$$42();
		solid_js_web.effect(() => _el$.innerHTML = helper.t("setting.translation.cotrans_tip"));
		return _el$;
	})(),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.target_language");
		},
		options: targetLanguageOptions
	}, () => bindOption$3("translator", "target_lang"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.translator");
		},
		get options() {
			return cotransTranslators.map((name) => [name, helper.t(\`translation.translator.\${name}\`) || name]);
		}
	}, () => bindOption$3("translator", "translator"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.direction");
		},
		get options() {
			return [
				["auto", helper.t("setting.translation.options.direction_auto")],
				["horizontal", helper.t("setting.translation.options.direction_horizontal")],
				["vertical", helper.t("setting.translation.options.direction_vertical")]
			];
		}
	}, () => bindOption$3("render", "direction"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.detection_resolution");
		},
		options: [
			["1024", "1024px"],
			["1536", "1536px"],
			["2048", "2048px"],
			["2560", "2560px"]
		]
	}, () => bindOption$3("detector", "detection_size"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.text_detector");
		},
		options: [["default"], ["ctd", "Comic Text Detector"]]
	}, () => bindOption$3("detector", "detector")))
];
//#endregion
//#region src/components/NumberInput.tsx
var _tmpl$$41 = /*#__PURE__*/ solid_js_web.template(\`<span contenteditable data-only-number>\`);
/** \u6570\u503C\u8F93\u5165\u6846 */
const NumberInput = (props) => {
	const handleInput = (e) => {
		const target = e.currentTarget;
		if (props.maxLength === void 0 || target.textContent.length <= props.maxLength) return;
		target.textContent = target.textContent.slice(0, props.maxLength);
		target.blur();
	};
	const handleKeyDown = (e) => {
		switch (e.key) {
			case "ArrowUp": return props.onChange((Number(e.target.textContent) * 1e3 + (props.step ?? 1) * 1e3) / 1e3);
			case "ArrowDown": return props.onChange((Number(e.target.textContent) * 1e3 - (props.step ?? 1) * 1e3) / 1e3);
			case "Enter": return e.target.blur();
		}
	};
	return [(() => {
		var _el$ = _tmpl$$41();
		_el$.addEventListener("blur", (e) => {
			try {
				props.onChange(Number(e.currentTarget.textContent) || 0);
			} finally {
				e.currentTarget.textContent = \`\${props.value}\`;
			}
		});
		solid_js_web.addEventListener(_el$, "keydown", handleKeyDown);
		solid_js_web.addEventListener(_el$, "input", handleInput);
		solid_js_web.insert(_el$, () => \`\${props.value}\`);
		return _el$;
	})(), solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return props.suffix;
		},
		get children() {
			return props.suffix;
		}
	})];
};
//#endregion
//#region src/components/Manga/components/SettingsItemNumber.tsx
var _tmpl$$40 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
/** \u6570\u503C\u8F93\u5165\u6846\u83DC\u5355\u9879 */
const SettingsItemNumber = (props) => solid_js_web.createComponent(SettingsItem, {
	get name() {
		return props.name;
	},
	get ["class"]() {
		return props.class;
	},
	get classList() {
		return props.classList;
	},
	get children() {
		var _el$ = _tmpl$$40();
		solid_js_web.insert(_el$, solid_js_web.createComponent(NumberInput, props));
		solid_js_web.effect((_$p) => solid_js_web.setStyleProperty(_el$, "margin-right", props.suffix ? ".3em" : ".6em"));
		return _el$;
	}
});
//#endregion
//#region src/components/Manga/components/SettingsItemSwitch.tsx
var _tmpl$$39 = /*#__PURE__*/ solid_js_web.template(\`<button type=button><div>\`);
/** \u5F00\u5173\u5F0F\u83DC\u5355\u9879 */
const SettingsItemSwitch = (props) => {
	const handleClick = () => props.onChange(!props.value);
	return solid_js_web.createComponent(SettingsItem, {
		get name() {
			return props.name;
		},
		get ["class"]() {
			return props.class;
		},
		get classList() {
			return props.classList;
		},
		get disabled() {
			return props.disabled;
		},
		get children() {
			var _el$ = _tmpl$$39(), _el$2 = _el$.firstChild;
			solid_js_web.addEventListener(_el$, "click", handleClick);
			solid_js_web.effect((_p$) => {
				var _v$ = classes$2.SettingsItemSwitch, _v$2 = props.value, _v$3 = classes$2.SettingsItemSwitchRound;
				_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
				_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-checked", _p$.t = _v$2);
				_v$3 !== _p$.a && solid_js_web.className(_el$2, _p$.a = _v$3);
				return _p$;
			}, {
				e: void 0,
				t: void 0,
				a: void 0
			});
			return _el$;
		}
	});
};
//#endregion
//#region src/components/Manga/actions/translation/translator/MangaImageTranslator/settings.tsx
/**
* MangaImageTranslator \u7FFB\u8BD1\u670D\u52A1\u8BBE\u7F6E\u754C\u9762
*/
var _tmpl$$38 = /*#__PURE__*/ solid_js_web.template(\`<input type=url>\`);
const bindOption$2 = (...args) => bindOption("translation", "mit", ...args);
/** MangaImageTranslator \u8BBE\u7F6E\u7EC4\u4EF6 */
const mitSettings = () => [
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.target_language");
		},
		options: targetLanguageOptions
	}, () => bindOption$2("translator", "target_lang"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.translator");
		},
		get options() {
			return mitTranslators();
		},
		onClick: updateMitTranslators
	}, () => bindOption$2("translator", "translator"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.direction");
		},
		get options() {
			return [
				["auto", helper.t("setting.translation.options.direction_auto")],
				["horizontal", helper.t("setting.translation.options.direction_horizontal")],
				["vertical", helper.t("setting.translation.options.direction_vertical")]
			];
		}
	}, () => bindOption$2("render", "direction"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.detection_resolution");
		},
		options: [
			["1024", "1024px"],
			["1536", "1536px"],
			["2048", "2048px"],
			["2560", "2560px"]
		]
	}, () => bindOption$2("detector", "detection_size"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.text_detector");
		},
		options: [["default"], ["ctd", "Comic Text Detector"]]
	}, () => bindOption$2("detector", "detector"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.inpainting_size");
		},
		options: [
			["516", "516px"],
			["1024", "1024px"],
			["2048", "2048px"],
			["2560", "2560px"]
		]
	}, () => bindOption$2("inpainter", "inpainting_size"))),
	solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.inpainter");
		},
		options: [
			["default", "Default"],
			["lama_large", "Lama Large"],
			["lama_mpe", "Lama MPE"],
			["sd", "SD"],
			["none", "None"],
			["original", "Original"]
		]
	}, () => bindOption$2("inpainter", "inpainter"))),
	solid_js_web.createComponent(SettingsItemNumber, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.unclip_ratio");
		},
		step: .01
	}, () => bindOption$2("detector", "unclip_ratio"))),
	solid_js_web.createComponent(SettingsItemNumber, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.translation.options.box_threshold");
		},
		step: .01
	}, () => bindOption$2("detector", "box_threshold"))),
	solid_js_web.createComponent(SettingsItemNumber, solid_js_web.mergeProps({ get name() {
		return helper.t("setting.translation.options.mask_dilation_offset");
	} }, () => bindOption$2("mask_dilation_offset"))),
	solid_js_web.createComponent(SettingsItemSwitch, {
		get name() {
			return helper.t("setting.translation.options.local_url");
		},
		get value() {
			return store.option.translation.mit.localUrl !== void 0;
		},
		onChange: (val) => {
			setOption("translation", "mit", "localUrl", val ? "" : void 0);
		}
	}),
	solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return store.option.translation.mit.localUrl !== void 0;
		},
		get children() {
			var _el$ = _tmpl$$38();
			_el$.addEventListener("change", (e) => {
				const url = e.target.value.replace(/\\/$/u, "");
				setOption("translation", "mit", "localUrl", url);
			});
			solid_js_web.effect(() => _el$.value = store.option.translation.mit.localUrl);
			return _el$;
		}
	})
];
//#endregion
//#region src/components/Manga/actions/translation/index.ts
/** \u5224\u65AD\u5F53\u524D\u7FFB\u8BD1\u5668\u662F\u5426\u5141\u8BB8\u6279\u91CF\u7FFB\u8BD1 */
const allowBatchTranslation = () => store.option.translation.provider !== "cotrans";
const taskRegistry = {
	"manga-image-translator": MIT,
	cotrans: Cotrans
};
const setMessage = (url, message) => setState("imgMap", url, "translationMessage", message);
/** \u7FFB\u8BD1\u6307\u5B9A\u56FE\u7247 */
const translationImage = async (url) => {
	try {
		if (!url) return;
		const img = store.imgMap[url];
		if (img.translationType !== "wait") return;
		if (img.translationUrl) return setState("imgMap", url, "translationType", "show");
		if (img.loadType !== "loaded") return setMessage(url, helper.t("translation.tip.img_not_fully_loaded"));
		const Task = taskRegistry[store.option.translation.provider];
		if (!Task) throw new Error("\u672A\u77E5\u7FFB\u8BD1\u5668");
		const translationUrl = await new Task(url).run();
		setState("imgMap", url, {
			translationUrl,
			translationMessage: helper.t("translation.tip.translation_completed"),
			translationType: "show"
		});
	} catch (error) {
		setState("imgMap", url, "translationType", "error");
		if (error?.message) setState("imgMap", url, "translationMessage", error.message);
	}
};
/** \u9010\u4E2A\u7FFB\u8BD1\u72B6\u6001\u4E3A\u7B49\u5F85\u7FFB\u8BD1\u7684\u56FE\u7247 */
const translationAll = helper.singleThreaded(async (state) => {
	if (!store.option.translation.enabled) return;
	const targetImg = imgList().find((img) => img.translationType === "wait" && img.loadType === "loaded");
	if (!targetImg) return;
	await translationImage(targetImg.src);
	state.continueRun();
});
/** \u5F00\u542F\u6216\u5173\u95ED\u6307\u5B9A\u56FE\u7247\u7684\u7FFB\u8BD1 */
const setImgTranslationEnbale = (list, enable) => {
	if (!store.option.translation.enabled && enable) return;
	setState((state) => {
		for (const i of list) {
			const img = state.imgMap[state.imgList[i]];
			if (!img) continue;
			const url = img.src;
			if (enable) {
				if (state.option.translation.forceRetry) {
					img.translationType = "wait";
					img.translationUrl = void 0;
					setMessage(url, helper.t("translation.tip.wait_translation"));
				} else switch (img.translationType) {
					case "hide":
						img.translationType = "show";
						break;
					case "error":
					case void 0:
						img.translationType = "wait";
						setMessage(url, helper.t("translation.tip.wait_translation"));
				}
			} else switch (img.translationType) {
				case "show":
					img.translationType = "hide";
					break;
				case "error":
				case "wait": img.translationType = void 0;
			}
		}
	});
	return translationAll();
};
/** \u7FFB\u8BD1\u8303\u56F4\u7684\u56FE\u7247 */
const translationImgs = helper.createRootMemo(() => {
	const list = /* @__PURE__ */ new Set();
	for (const [i, img] of imgList().entries()) switch (img.translationType) {
		case "error":
		case "show":
		case "wait": list.add(i);
	}
	return list;
});
/** \u5F53\u524D\u663E\u793A\u7684\u56FE\u7247\u662F\u5426\u6B63\u5728\u7FFB\u8BD1 */
const isTranslatingImage = helper.createRootMemo(() => activePage().some((i) => translationImgs().has(i)));
/** \u7FFB\u8BD1\u5F53\u524D\u9875 */
const translateCurrent = () => setImgTranslationEnbale(activePage(), !isTranslatingImage());
const createTranslateRange = (imgs) => {
	const isTranslating = helper.createRootMemo(() => imgs().every((i) => translationImgs().has(i)));
	const translateRange = () => {
		if (!allowBatchTranslation()) return;
		setImgTranslationEnbale(imgs(), !isTranslating());
	};
	return [isTranslating, translateRange];
};
const [isTranslatingAll, translateAll] = createTranslateRange(helper.createRootMemo(() => helper.range(store.imgList.length)));
const [isTranslatingToEnd, translateToEnd] = createTranslateRange(helper.createRootMemo(() => helper.range(activeImgIndex(), store.imgList.length)));
//#endregion
//#region src/components/Manga/actions/imageLoad/reactor.ts
/** \u91CD\u65B0\u52A0\u8F7D\u9519\u8BEF\u56FE\u7247 */
const reloadImg = (url) => {
	if (store.imgMap[url]?.loadType !== "error") return;
	setState("imgMap", url, "loadType", "wait");
	updateImgLoadType();
};
/** \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u540E\u5B9A\u65F6\u91CD\u65B0\u52A0\u8F7D */
const handleTimeReload = (url) => {
	const count = loadState.imgErrorMap.get(url) || 0;
	if (count > 8) return;
	loadState.imgErrorMap.set(url, count + 1);
	const time = (2 ** count + Math.random() * 2) * 1e3;
	setTimeout(reloadImg, time, url);
};
/** \u56FE\u7247\u52A0\u8F7D\u5B8C\u6BD5\u7684\u56DE\u8C03 */
const handleImgLoaded = (url, e) => {
	loadState.imgErrorMap.delete(url);
	const img = store.imgMap[url];
	if (img.translationType === "show") return;
	if (img.loadType !== "loaded") {
		setState("imgMap", url, "loadType", "loaded");
		loadState.unloadedUrlSet.delete(url);
		loadState.loadingUrlSet.delete(url);
		updateImgLoadType();
		store.prop.onLoading?.(imgList(), store.imgMap[url]);
	}
	if (!e) return;
	updateImgSize(url, e.naturalWidth, e.naturalHeight);
	if (store.option.imgRecognition.enabled && e.src === img.blobUrl && isInRenderRange(url)) setTimeout(handleImgRecognition, 0, url, e);
	if (store.option.translation.enabled) translationAll();
};
/** \u56FE\u7247\u52A0\u8F7D\u51FA\u9519\u7684\u56DE\u8C03 */
const handleImgError = (url, e) => {
	if (e && !e.isConnected) return;
	setState((state) => {
		const img = state.imgMap[url];
		if (!img) return;
		helper.log.error(getImgIndexs(url), helper.t("alert.img_load_failed"), e);
		img.loadType = "error";
		img.type = void 0;
	});
	loadState.loadingUrlSet.delete(url);
	handleTimeReload(url);
	store.prop.onLoading?.(imgList(), store.imgMap[url]);
	store.prop.onImgError?.(url);
	updateImgLoadType();
};
helper.createEffectOn(showImgList, helper.debounce((list) => {
	if (loadState.imgErrorMap.size === 0) return;
	for (const i of list) reloadImg(getImg(i).src);
}, 500), { defer: true });
const timeoutAbort = (url) => {
	if (!loadState.abortMap.has(url)) return;
	loadState.abortMap.get(url).abort();
	loadState.abortMap.delete(url);
	handleImgError(url);
};
helper.createEffectOn(() => new Set(loadState.loadingUrlSet), (downImgList, prevImgList) => {
	if (!store.option.imgRecognition.enabled) return;
	if (prevImgList) for (const url of prevImgList) {
		if (downImgList.has(url) || !loadState.abortMap.has(url)) continue;
		loadState.abortMap.get(url)?.abort();
		loadState.abortMap.delete(url);
		helper.log(\`\u4E2D\u65AD\u4E0B\u8F7D \${url}\`);
	}
	for (const url of downImgList) {
		if (loadState.abortMap.has(url) || store.imgMap[url].blobUrl) continue;
		const controller = new AbortController();
		const handleTimeout = helper.debounce(() => timeoutAbort(url), 3e3);
		controller.signal.addEventListener("abort", handleTimeout.clear);
		loadState.abortMap.set(url, controller);
		handleTimeout();
		request.request(url, {
			responseType: "blob",
			retryFetch: true,
			signal: controller.signal,
			timeout: void 0,
			noTip: true,
			headers: request.downloadImgHeaders,
			onerror: () => handleImgError(url),
			onprogress({ loaded, total }) {
				setState("imgMap", url, "progress", loaded / total * 100);
				handleTimeout();
			},
			onload({ response }) {
				loadState.abortMap.delete(url);
				setState("imgMap", url, {
					blobUrl: URL.createObjectURL(response),
					progress: void 0
				});
				handleImgLoaded(url);
			}
		});
	}
});
//#endregion
//#region src/components/Manga/actions/zoom.ts
const touches = /* @__PURE__ */ new Map();
const bound = helper.createMemoMap({
	x: () => -store.rootSize.width * (store.option.zoom.ratio / 100 - 1),
	y: () => -store.rootSize.height * (store.option.zoom.ratio / 100 - 1)
});
const checkBound = (state) => {
	state.option.zoom.offset.x = helper.clamp(bound().x, state.option.zoom.offset.x, 0);
	state.option.zoom.offset.y = helper.clamp(bound().y, state.option.zoom.offset.y, 0);
};
const zoom = (val, focal, animation = false) => {
	const newScale = helper.clamp(100, val, 300);
	if (newScale === store.option.zoom.ratio) return;
	const { left, top } = refs.mangaBox.getBoundingClientRect();
	const x = (focal?.x ?? store.rootSize.width / 2) - left;
	const y = (focal?.y ?? store.rootSize.height / 2) - top;
	const newX = x / (store.option.zoom.ratio / 100) * (newScale / 100);
	const newY = y / (store.option.zoom.ratio / 100) * (newScale / 100);
	const dx = newX - x;
	const dy = newY - y;
	setOption((draftOption, state) => {
		draftOption.zoom.ratio = newScale;
		draftOption.zoom.offset.x -= dx;
		draftOption.zoom.offset.y -= dy;
		checkBound(state);
		if (animation) state.page.anima = "zoom";
	});
};
/** \u6469\u64E6\u7CFB\u6570 */
const FRICTION_COEFF$1 = .91;
/** \u9010\u5E27\u6839\u636E\u9F20\u6807\u5750\u6807\u79FB\u52A8\u5143\u7D20\uFF0C\u5E76\u8BA1\u7B97\u901F\u7387 */
const zoomDragAnim = new class extends helper.AnimationFrame {
	mouse = {
		x: 0,
		y: 0
	};
	last = {
		x: 0,
		y: 0
	};
	velocity = {
		x: 0,
		y: 0
	};
	frame = () => {
		if (this.mouse.x === store.option.zoom.offset.x && this.mouse.y === store.option.zoom.offset.y) {
			this.animationId = 0;
			return;
		}
		setOption((draftOption, state) => {
			this.last.x = draftOption.zoom.offset.x;
			this.last.y = draftOption.zoom.offset.y;
			draftOption.zoom.offset.x = this.mouse.x;
			draftOption.zoom.offset.y = this.mouse.y;
			checkBound(state);
			this.velocity.x = draftOption.zoom.offset.x - this.last.x;
			this.velocity.y = draftOption.zoom.offset.y - this.last.y;
		});
		this.call(true);
	};
	/** \u4E00\u6BB5\u65F6\u95F4\u6CA1\u6709\u79FB\u52A8\u540E\u5E94\u8BE5\u5C06\u901F\u7387\u5F52\u96F6 */
	resetVelocity = helper.debounce(() => {
		this.velocity.x = 0;
		this.velocity.y = 0;
	}, 200);
}();
/** \u9010\u5E27\u8BA1\u7B97\u60EF\u6027\u6ED1\u52A8 */
const zoomSlideAnim = new class extends helper.AnimationFrame {
	lastTime = 0;
	frame = (timestamp) => {
		if (helper.approx(zoomDragAnim.velocity.x, 0, 1) && helper.approx(zoomDragAnim.velocity.y, 0, 1)) {
			this.animationId = 0;
			return;
		}
		setOption((draftOption, state) => {
			draftOption.zoom.offset.x += zoomDragAnim.velocity.x;
			draftOption.zoom.offset.y += zoomDragAnim.velocity.y;
			checkBound(state);
			if (timestamp - this.lastTime > 16) {
				zoomDragAnim.velocity.x *= FRICTION_COEFF$1;
				zoomDragAnim.velocity.y *= FRICTION_COEFF$1;
				this.lastTime = timestamp;
			}
		});
		this.call(true);
	};
}();
/** \u662F\u5426\u6B63\u5728\u53CC\u6307\u634F\u5408\u7F29\u653E\u4E2D */
let pinchZoom = false;
/** \u5904\u7406\u653E\u5927\u540E\u7684\u62D6\u62FD\u79FB\u52A8 */
const handleZoomDrag = ({ type, xy: [x, y], last: [lx, ly] }) => {
	if (store.option.zoom.ratio === 100) return;
	switch (type) {
		case "down":
			zoomDragAnim.velocity.x = 0;
			zoomDragAnim.velocity.y = 0;
			zoomDragAnim.mouse.x = store.option.zoom.offset.x;
			zoomDragAnim.mouse.y = store.option.zoom.offset.y;
			zoomSlideAnim.cancel();
			zoomDragAnim.cancel();
			break;
		case "move":
			zoomDragAnim.cancel();
			zoomDragAnim.mouse.x += x - lx;
			zoomDragAnim.mouse.y += y - ly;
			zoomDragAnim.call();
			zoomDragAnim.resetVelocity();
			break;
		case "up":
			zoomDragAnim.resetVelocity.clear();
			if (pinchZoom) {
				pinchZoom = false;
				zoomDragAnim.mouse.x = store.option.zoom.offset.x;
				zoomDragAnim.mouse.y = store.option.zoom.offset.y;
				return;
			}
			zoomDragAnim.cancel();
			zoomSlideAnim.call();
	}
};
/** \u83B7\u53D6\u4E24\u4E2A\u6307\u9488\u4E4B\u95F4\u7684\u8DDD\u79BB */
const getDistance = (a, b) => Math.hypot(b.xy[0] - a.xy[0], b.xy[1] - a.xy[1]);
/** \u9010\u5E27\u8BA1\u7B97\u5F53\u524D\u5C4F\u5E55\u4E0A\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u5E76\u6362\u7B97\u6210\u7F29\u653E\u6BD4\u4F8B */
const pinchZoomAnim = new class extends helper.AnimationFrame {
	initDistance = 0;
	initScale = 100;
	frame = () => {
		if (touches.size < 2) {
			this.animationId = 0;
			return;
		}
		const [a, b] = [...touches.values()];
		const distance = getDistance(a, b);
		zoom(distance / this.initDistance * this.initScale, {
			x: (a.xy[0] + b.xy[0]) / 2,
			y: (a.xy[1] + b.xy[1]) / 2
		});
		this.call(true);
	};
}();
/** \u5904\u7406\u53CC\u6307\u634F\u5408\u7F29\u653E */
const handlePinchZoom = ({ type }) => {
	if (touches.size < 2) return;
	switch (type) {
		case "down": {
			pinchZoom = true;
			const [a, b] = [...touches.values()];
			pinchZoomAnim.initDistance = getDistance(a, b);
			pinchZoomAnim.initScale = store.option.zoom.ratio;
			break;
		}
		case "up": {
			const [a, b] = [...touches.values()];
			pinchZoomAnim.initDistance = getDistance(a, b);
			break;
		}
		case "move":
			pinchZoomAnim.call();
			break;
		case "cancel": {
			const [a, b] = [...touches.values()];
			pinchZoomAnim.initDistance = getDistance(a, b);
			break;
		}
	}
};
//#endregion
//#region src/components/Manga/actions/scroll.ts
const _scrollTo = (top) => {
	const val = helper.clamp(0, top, contentHeight() - store.rootSize.height);
	refs.mangaBox.scrollTo({
		top: val,
		behavior: "instant"
	});
	setState((state) => {
		state.scrollTop = val;
		openScrollLock(state);
	});
};
/** \u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\u6EDA\u52A8\u5230\u6307\u5B9A\u8FDB\u5EA6 */
const scrollTo = (x, smooth = false) => {
	if (!store.option.scrollMode.enabled) return;
	if (store.option.scrollMode.abreastMode) {
		_scrollTo(0);
		const val = helper.clamp(0, x, abreastScrollWidth());
		return setState("page", "offset", "x", "px", val);
	}
	if (!smooth) {
		scrollStep.cancel();
		return _scrollTo(x);
	}
	if (store.option.scrollDuration <= 0) {
		scrollStep.cancel();
		return _scrollTo(x);
	}
	if (scrollStep.animationId) {
		scrollStep.cancel();
		_scrollTo(x);
	}
	scrollStep.start(x);
};
/** \u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\u6EDA\u52A8\u6307\u5B9A\u8FDB\u5EA6 */
const scrollBy = (offset, smooth = false) => {
	if (!store.option.scrollMode.enabled) return;
	if (handleEndTurnPage(offset > 0 ? "next" : "prev")) return;
	return scrollTo(scrollTop() + offset, smooth);
};
/** \u5B9E\u73B0\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5E73\u6ED1\u6EDA\u52A8 */
const scrollStep = new class extends helper.AnimationFrame {
	/** \u52A8\u753B\u65F6\u957F */
	duration = 0;
	/** \u8981\u6EDA\u52A8\u7684\u8DDD\u79BB */
	distance = 0;
	/** \u6EDA\u52A8\u5F00\u59CB\u65F6\u95F4 */
	startTime = 0;
	/** \u6EDA\u52A8\u5F00\u59CB\u4F4D\u7F6E */
	startTop = 0;
	scrollTo = (top) => {
		if (helper.inRange(0, top, scrollLength())) scrollTo(top);
		else this.cancel();
	};
	frame = (timestamp) => {
		this.cancel();
		this.startTime ||= timestamp;
		/** \u5DF2\u6EDA\u52A8\u65F6\u95F4 */
		const elapsed = timestamp - this.startTime;
		if (elapsed >= this.duration) return this.scrollTo(this.startTop + this.distance);
		this.scrollTo(this.startTop + elapsed / this.duration * this.distance);
		this.call(true);
	};
	start = (x) => {
		this.duration = store.option.scrollDuration;
		this.startTime = 0;
		this.startTop = scrollTop();
		this.distance = x - this.startTop;
		this.frame(0);
	};
}();
/** \u5B9E\u73B0\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5300\u901F\u6EDA\u52A8 */
const constantScroll = new class extends helper.AnimationFrame {
	speed = 0;
	lastTime = 0;
	onScroll;
	scrollTo = (top) => {
		if (helper.inRange(0, top, scrollLength())) scrollTo(top);
		else this.cancel();
	};
	frame = (timestamp) => {
		if (!this.animationId) return;
		const scrollDelta = this.lastTime ? this.speed * (timestamp - this.lastTime) : 0;
		this.lastTime = timestamp;
		if (this.onScroll?.(scrollDelta) === false) return this.cancel();
		this.scrollTo(scrollTop() + scrollDelta);
		this.call(true);
	};
	start = (speed, onScroll) => {
		if (this.animationId && speed === this.speed && this.onScroll === onScroll) return;
		this.cancel();
		this.speed = speed;
		this.onScroll = onScroll;
		this.lastTime = 0;
		this.call();
	};
}();
/** \u4FDD\u5B58\u5F53\u524D\u6EDA\u52A8\u8FDB\u5EA6\uFF0C\u5E76\u5728\u4E4B\u540E\u6062\u590D */
const saveScrollProgress = () => {
	const oldScrollPercentage = scrollPercentage();
	return () => scrollTo(oldScrollPercentage * scrollLength());
};
/** \u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\uFF0C\u6EDA\u52A8\u5230\u80FD\u663E\u793A\u6307\u5B9A\u56FE\u7247\u7684\u4F4D\u7F6E */
const scrollViewImg = (i) => {
	if (!store.option.scrollMode.enabled) return;
	let top;
	if (store.option.scrollMode.abreastMode) top = abreastArea().columns.findIndex((column) => column.includes(i)) * abreastColumnWidth() + 1;
	else top = pageTopList()[i] + 1;
	scrollTo(top);
};
/** \u8DF3\u8F6C\u5230\u6307\u5B9A\u56FE\u7247\u7684\u663E\u793A\u4F4D\u7F6E */
const jumpToImg = (index) => {
	zoom(100);
	if (store.option.scrollMode.enabled) return scrollViewImg(index);
	const pageNum = imgPageMap()[index];
	if (pageNum === void 0) return;
	setState("activePageIndex", pageNum);
};
//#endregion
//#region src/components/Manga/actions/switch.ts
/** \u5207\u6362\u9875\u9762\u586B\u5145 */
const switchFillEffect = () => {
	setState((state) => {
		if (state.pageList[state.activePageIndex].length !== 2) return;
		state.fillEffect[nowFillIndex()] = Number(!state.fillEffect[nowFillIndex()]);
		updatePageData(state);
	});
};
/** \u5207\u6362\u5377\u8F74\u6A21\u5F0F */
const switchScrollMode = () => {
	const index = activeImgIndex();
	zoom(100);
	setOption((draftOption, state) => {
		draftOption.scrollMode.enabled = !draftOption.scrollMode.enabled;
		state.page.offset.x.px = 0;
		state.page.offset.y.px = 0;
	});
	jumpToImg(index);
};
/** \u5207\u6362\u5355\u53CC\u9875\u6A21\u5F0F */
const switchOnePageMode = () => {
	const index = activeImgIndex();
	setOption((draftOption, state) => {
		if (draftOption.scrollMode.enabled) {
			if (draftOption.scrollMode.abreastMode) {
				draftOption.scrollMode.abreastMode = false;
				draftOption.scrollMode.doubleMode = true;
			} else draftOption.scrollMode.doubleMode = !draftOption.scrollMode.doubleMode;
		} else {
			const newPageNum = pageNum() === 1 ? 2 : 1;
			draftOption.pageNum = state.option.autoSwitchPageMode && newPageNum === autoPageNum() ? 0 : newPageNum;
		}
	});
	jumpToImg(index);
};
/** \u5207\u6362\u9605\u8BFB\u65B9\u5411 */
const switchDir = () => setOption("dir", store.option.dir === "rtl" ? "ltr" : "rtl");
/** \u5207\u6362\u5168\u5C4F */
const switchFullscreen = () => {
	if (document.fullscreenElement) return document.exitFullscreen();
	return refs.root.requestFullscreen();
};
/** \u5207\u6362\u81EA\u52A8\u6EDA\u52A8 */
const switchAutoScroll = () => setState("autoScroll", "play", (val) => !val);
/** \u505C\u6B62\u81EA\u52A8\u6EDA\u52A8 */
const stopAutoScroll = () => {
	if (!store.autoScroll.play) return;
	setState("autoScroll", "play", false);
	constantScroll.cancel();
};
/** \u5207\u6362\u56FE\u7247\u8BC6\u522B\u76F8\u5173\u529F\u80FD */
const switchImgRecognition = (...path) => {
	const onlyUpscale = path.length === 1 && path[0] === "upscale";
	setOption((draftOption, state) => {
		const option = draftOption.imgRecognition;
		if (path.length === 0) path.push("enabled");
		for (const key of path) option[key] = !option[key];
		if (!option.enabled) return syncImgLoadState(state);
		for (const img of Object.values(state.imgMap)) if (!img.blobUrl) img.loadType = "wait";
		syncImgLoadState(state);
		if (path.includes("enabled")) updateImgLoadType();
	});
	if (!onlyUpscale) invalidateRecognition();
};
//#endregion
//#region src/components/Manga/actions/show.ts
/** \u5C06\u9875\u9762\u79FB\u56DE\u539F\u4F4D */
const resetPage = (state, animation = false) => {
	updateShowRange(state);
	state.page.offset.x.pct = 0;
	state.page.offset.y.pct = 0;
	if (state.option.scrollMode.enabled) {
		state.page.anima = "";
		return;
	}
	let i = -1;
	if (helper.inRange(state.renderRange[0], state.activePageIndex, state.renderRange[1])) i = state.activePageIndex - state.renderRange[0];
	if (store.page.vertical) state.page.offset.y.pct = i === -1 ? 0 : -i;
	else state.page.offset.x.pct = i === -1 ? 0 : i;
	state.page.anima = animation ? "page" : "";
};
/** \u83B7\u53D6\u6307\u5B9A\u56FE\u7247\u7684\u63D0\u793A\u6587\u672C */
const getImgTip = (i) => {
	if (i === -1) return helper.t("other.fill_page");
	const img = getImg(i);
	if (img.loadType !== "loaded") return \`\${i + 1} (\${helper.t(\`img_status.\${img.loadType}\`)})\`;
	if (img.translationType && img.translationType !== "hide" && img.translationMessage) return \`\${i + 1}\uFF1A\${img.translationMessage}\`;
	if (isUpscale() && img.upscaleUrl !== void 0) return \`\${i + 1} (\${img.upscaleUrl ? helper.t("upscale.upscaled") : helper.t("upscale.upscaling")})\`;
	return \`\${i + 1}\`;
};
/** \u83B7\u53D6\u6307\u5B9A\u9875\u9762\u7684\u63D0\u793A\u6587\u672C */
const getPageTip = (pageIndex) => {
	const page = store.pageList[pageIndex];
	if (!page) return "null";
	const pageIndexText = page.map((index) => index === -1 ? helper.t("other.fill_page") : \`\${index + 1}\`);
	if (pageIndexText.length === 1) return pageIndexText[0];
	if (store.option.dir === "rtl") pageIndexText.reverse();
	return pageIndexText.join(" | ");
};
helper.createEffectOn(() => store.activePageIndex, () => store.show.endPage && setState("show", "endPage", void 0), { defer: true });
helper.createEffectOn(activePage, helper.throttle(() => store.isDragMode || store.isTurnAnimating || setState(resetPage)));
helper.createEffectOn(() => store.show.toolbar, () => {
	if (store.show.toolbar) return;
	setState((state) => {
		state.show.scrollbar = false;
		state.show.pageTip = false;
	});
}, { defer: true });
//#endregion
//#region src/components/Manga/actions/readProgress.ts
let cache = void 0;
const initCache = async () => {
	cache ||= await helper.useCache({ progress: "id" }, "ReadProgress");
};
let lastIndex = -1;
/** \u4FDD\u5B58\u9605\u8BFB\u8FDB\u5EA6 */
const saveReadProgress = helper.throttle(async () => {
	await initCache();
	const index = activeImgIndex();
	if (index === lastIndex) return;
	lastIndex = index;
	if (store.imgList.length < 50 || index >= store.imgList.length - 5) return await cache.del("progress", location.pathname);
	const imgSize = {};
	for (const [i, img] of imgList().entries()) if (img.width && img.height) imgSize[i] = [img.width, img.height];
	await cache.set("progress", {
		id: location.pathname,
		time: Date.now(),
		index,
		imgSize,
		fillEffect: solid_js_store.unwrap(store.fillEffect)
	});
}, 1e3);
/** \u6062\u590D\u9605\u8BFB\u8FDB\u5EA6 */
const resumeReadProgress = async (state) => {
	await initCache();
	const progress = await cache.get("progress", location.pathname);
	if (!progress) return;
	let i = state.imgList.length;
	while (i--) {
		const imgSize = progress.imgSize[i];
		if (imgSize) updateImgSize(state.imgList[i], ...imgSize, state);
	}
	state.fillEffect = progress.fillEffect;
	updatePageData(state);
	if (state.option.scrollMode.enabled) setTimeout(scrollViewImg, 500, progress.index);
	else jumpToImg(progress.index);
	const nowTime = Date.now();
	cache.each("progress", async (data, cursor) => {
		if (nowTime - data.time < 25056e5) return;
		await helper.promisifyRequest(cursor.delete());
	});
};
//#endregion
//#region src/components/Manga/actions/turnPage.ts
/** \u7FFB\u9875\u3002\u8FD4\u56DE\u662F\u5426\u6210\u529F\u6539\u53D8\u4E86\u5F53\u524D\u9875\u6570 */
const turnPage = withOptionalState((dir, state) => {
	if (state.option.scrollMode.enabled) return false;
	if (handleEndTurnPage(dir, state)) return false;
	saveReadProgress();
	state.activePageIndex += dir === "next" ? 1 : -1;
	return true;
});
/** \u5224\u65AD\u7FFB\u9875\u65B9\u5411 */
const getTurnPageDir = (move, total, startTime) => {
	let dir;
	if (!startTime) {
		if (Math.abs(move) > total / 2) dir = move > 0 ? "next" : "prev";
		return dir;
	}
	if (Math.abs(move) > total / 3) dir = move > 0 ? "next" : "prev";
	if (dir) return dir;
	const velocity = move / (performance.now() - startTime);
	if (velocity < -.4) dir = "prev";
	if (velocity > .4) dir = "next";
	return dir;
};
//#endregion
//#region src/components/Manga/actions/turnPageAnimator.ts
/** \u62D6\u52A8\u677E\u624B\u7FFB\u9875\u52A8\u753B\u65F6\u957F\uFF08\u56FA\u5B9A\uFF09 */
const DRAG_TURN_ANIMATION_DURATION = 100;
/** \u7F13\u52A8\u51FD\u6570\uFF1A\u5148\u6162\u540E\u5FEB\u518D\u6162 */
const easeInOutCubic = (t) => t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
/** \u5C06 mangaFlow \u504F\u79FB\u5230\u6307\u5B9A\u9875\u5728 renderRange \u4E2D\u7684\u4F4D\u7F6E */
const setOffsetToPage = (state, pageIndex) => {
	const i = pageIndex - state.renderRange[0];
	state.page.offset.x.pct = state.page.vertical ? 0 : i;
	state.page.offset.y.pct = state.page.vertical ? -i : 0;
	state.page.offset.x.px = 0;
	state.page.offset.y.px = 0;
};
/** \u8BA1\u7B97\u7FFB\u9875\u52A8\u753B\u7684\u8D77\u70B9\u504F\u79FB\uFF08\u50CF\u7D20\uFF09 */
const getTurnStartOffsets = ({ state, oldIndex, oldRenderRange, oldOffset }) => {
	const [rangeStart, rangeEnd] = state.renderRange;
	const startIndex = helper.clamp(oldIndex, rangeStart, rangeEnd);
	if (oldIndex >= rangeStart && oldIndex <= rangeEnd) {
		const size = state.page.vertical ? state.rootSize.height : state.rootSize.width;
		const oldInternal = state.page.vertical ? oldOffset.y.pct * size + oldOffset.y.px : oldOffset.x.pct * size + oldOffset.x.px;
		const oldAbs = oldRenderRange[0] + (state.page.vertical ? -oldInternal / size : oldInternal / size);
		const startInternal = state.page.vertical ? helper.clamp(-(oldAbs - rangeStart) * size, -(rangeEnd - rangeStart) * size, 0) : helper.clamp((oldAbs - rangeStart) * size, 0, (rangeEnd - rangeStart) * size);
		return {
			x: state.page.vertical ? 0 : startInternal,
			y: state.page.vertical ? startInternal : 0
		};
	}
	setOffsetToPage(state, startIndex);
	return {
		x: state.page.offset.x.pct * state.rootSize.width + state.page.offset.x.px,
		y: state.page.offset.y.pct * state.rootSize.height + state.page.offset.y.px
	};
};
const turnPageAnimator = new class extends helper.AnimationFrame {
	/** \u52A8\u753B\u4EE4\u724C\uFF0C\u7528\u4E8E\u4E22\u5F03\u5931\u6548\u7684\u5E27\u56DE\u8C03 */
	token = 0;
	/** \u672C\u6B21\u52A8\u753B\u65F6\u957F */
	duration = 0;
	/** \u672C\u6B21\u52A8\u753B\u5F00\u59CB\u65F6\u95F4 */
	startTime = 0;
	/** \u8D77\u70B9\u504F\u79FB\uFF08\u50CF\u7D20\uFF09 */
	from = {
		x: 0,
		y: 0
	};
	/** \u7EC8\u70B9\u504F\u79FB\uFF08\u50CF\u7D20\uFF09 */
	to = {
		x: 0,
		y: 0
	};
	/** \u7EC8\u70B9\u9875\u5BF9\u5E94\u7684 pct\uFF0C\u52A8\u753B\u671F\u95F4\u4FDD\u6301\u8BE5\u503C\u4E0D\u53D8 */
	toPct = {
		x: 0,
		y: 0
	};
	frame = (timestamp) => {
		const { token } = this;
		if (this.startTime === 0) this.startTime = timestamp;
		const elapsed = timestamp - this.startTime;
		const progress = Math.min(1, elapsed / this.duration);
		const t = easeInOutCubic(progress);
		const x = this.from.x + (this.to.x - this.from.x) * t;
		const y = this.from.y + (this.to.y - this.from.y) * t;
		setState((state) => {
			if (token !== this.token) return;
			state.page.offset.x.pct = this.toPct.x;
			state.page.offset.y.pct = this.toPct.y;
			state.page.offset.x.px = x - this.toPct.x * state.rootSize.width;
			state.page.offset.y.px = y - this.toPct.y * state.rootSize.height;
		});
		if (progress >= 1) {
			this.finish();
			return;
		}
		if (token === this.token) this.call(true);
	};
	start = (dir, duration = store.option.turnPageDuration) => {
		if (store.option.scrollMode.enabled) {
			turnPage(dir);
			return;
		}
		if (duration <= 0) {
			this.turnDirectly(dir);
			return;
		}
		if (store.isTurnAnimating) this.finish();
		this.cancel();
		this.token += 1;
		if (!this.prepareTurn(dir)) return;
		this.duration = duration;
		this.startTime = 0;
		this.call();
	};
	/** \u76F4\u63A5\u7FFB\u9875 */
	turnDirectly = (dir) => {
		this.cancel();
		this.token += 1;
		setState((state) => {
			if (state.option.scrollMode.enabled) return turnPage(dir, state);
			if (!turnPage(dir, state)) {
				state.isTurnAnimating = false;
				state.isDragMode = false;
				resetPage(state, true);
				state.page.offset.x.px = 0;
				state.page.offset.y.px = 0;
				return;
			}
			state.isTurnAnimating = false;
			state.isDragMode = false;
			state.page.offset.x.px = 0;
			state.page.offset.y.px = 0;
			resetPage(state, false);
		});
	};
	/** \u51C6\u5907\u4E00\u6B21\u52A8\u753B\uFF1A\u7FFB\u9875\u5E76\u8BA1\u7B97\u8D77\u70B9/\u7EC8\u70B9\u504F\u79FB\u3002\u8FD4\u56DE\u662F\u5426\u6210\u529F */
	prepareTurn = (dir) => {
		let success = false;
		setState((state) => {
			if (state.option.scrollMode.enabled) {
				turnPage(dir, state);
				return;
			}
			const oldIndex = state.activePageIndex;
			if (!turnPage(dir, state)) {
				state.isTurnAnimating = false;
				state.isDragMode = false;
				resetPage(state, true);
				state.page.offset.x.px = 0;
				state.page.offset.y.px = 0;
				return;
			}
			success = true;
			const oldRenderRange = state.renderRange;
			const oldOffset = {
				x: {
					pct: state.page.offset.x.pct,
					px: state.page.offset.x.px
				},
				y: {
					pct: state.page.offset.y.pct,
					px: state.page.offset.y.px
				}
			};
			resetPage(state);
			const toX = state.page.offset.x.pct;
			const toY = state.page.offset.y.pct;
			const { x: startX, y: startY } = getTurnStartOffsets({
				state,
				oldIndex,
				oldRenderRange,
				oldOffset
			});
			this.from.x = startX;
			this.from.y = startY;
			this.to.x = toX * state.rootSize.width;
			this.to.y = toY * state.rootSize.height;
			this.toPct.x = toX;
			this.toPct.y = toY;
			state.page.offset.x.pct = toX;
			state.page.offset.y.pct = toY;
			state.page.offset.x.px = startX - toX * state.rootSize.width;
			state.page.offset.y.px = startY - toY * state.rootSize.height;
			state.page.anima = "";
			state.isDragMode = false;
			state.isTurnAnimating = true;
		});
		return success;
	};
	finish = () => {
		this.cancel();
		this.token += 1;
		setState((state) => {
			state.isTurnAnimating = false;
			state.isDragMode = false;
			state.page.offset.x.px = 0;
			state.page.offset.y.px = 0;
			if (state.option.zoom.ratio === 100) resetPage(state, false);
			else state.page.anima = "";
		});
	};
	stop = () => {
		this.cancel();
		this.token += 1;
		if (store.isTurnAnimating) setState((state) => {
			state.isTurnAnimating = false;
			state.page.anima = "";
		});
	};
}();
/** \u5E26\u6ED1\u52A8\u52A8\u753B\u7684\u7FFB\u9875\u3002\u8FDE\u7EED\u7FFB\u9875\u4F1A\u5148\u76F4\u63A5\u8D70\u5B8C\u4E0A\u4E00\u6B21\u52A8\u753B\uFF0C\u518D\u4ECE\u5F53\u524D\u76EE\u6807\u9875\u5F00\u59CB\u65B0\u52A8\u753B */
const turnPageAnimation = (dir, duration) => turnPageAnimator.start(dir, duration);
/** \u53D6\u6D88\u5F53\u524D\u6B63\u5728\u64AD\u653E\u7684\u7FFB\u9875\u6ED1\u52A8\u52A8\u753B */
const cancelTurnAnimation = () => turnPageAnimator.stop();
/** \u76F4\u63A5\u8D70\u5B8C\u5F53\u524D\u6B63\u5728\u64AD\u653E\u7684\u7FFB\u9875\u6ED1\u52A8\u52A8\u753B */
const finishTurnAnimation = () => store.isTurnAnimating && turnPageAnimator.finish();
//#endregion
//#region src/components/Manga/actions/hotkeyAction.ts
/** \u5377\u8F74\u6A21\u5F0F\u4E0B\u6EDA\u52A8\u81F3\u6307\u5B9A\u9875\u6570 */
const scrollIntoView = (index, position = "start") => scrollTo(position === "start" ? getPageTop(index) : getPageTop(index + 1) - store.rootSize.height, true);
/** \u5224\u65AD\u6307\u5B9A\u9875\u80FD\u5426\u88AB\u5B8C\u5168\u663E\u793A\u51FA\u6765 */
const isFullView = (i) => pageHeightList()[i] < store.rootSize.height;
/** \u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\uFF0C\u667A\u80FD\u6EDA\u52A8\u81F3\u56FE\u7247\u7684\u5934\u5C3E */
const scrollViewTurnPage = (offset) => {
	if (!store.option.scrollMode.enabled) return;
	const dir = offset > 0 ? "next" : "prev";
	if (handleEndTurnPage(dir)) return;
	if (!store.option.scrollMode.alignEdge) return scrollBy(offset, true);
	const viewBottom = scrollTop() + store.rootSize.height;
	let viewBottomPage = findTopPage(viewBottom);
	if (helper.approx(getPageTop(viewBottomPage), viewBottom)) viewBottomPage -= 1;
	const viewTop = scrollTop();
	let viewTopPage = findTopPage(viewTop);
	if (helper.approx(getPageTop(viewTopPage + 1), viewTop)) viewTopPage += 1;
	if (dir === "next") {
		const pageBottom = getPageTop(viewBottomPage + 1);
		if (!helper.approx(viewBottom, pageBottom)) {
			if (viewBottomPage === viewTopPage) {
				if (viewBottom + offset <= pageBottom) return scrollBy(offset, true);
				return scrollIntoView(viewBottomPage, "end");
			}
			return scrollIntoView(viewBottomPage, isFullView(viewBottomPage) ? "end" : "start");
		}
		const nextPage = viewBottomPage + 1;
		scrollIntoView(nextPage, isFullView(nextPage) ? "end" : "start");
	} else {
		const pageTop = getPageTop(viewTopPage);
		if (!helper.approx(viewTop, pageTop)) {
			if (viewBottomPage === viewTopPage) {
				if (viewTop + offset >= pageTop) return scrollBy(offset, true);
				return scrollIntoView(viewTopPage, "start");
			}
			return scrollIntoView(viewTopPage, isFullView(viewTopPage) ? "start" : "end");
		}
		const prevPage = viewTopPage - 1;
		scrollIntoView(prevPage, isFullView(prevPage) ? "start" : "end");
	}
};
/** \u6839\u636E\u662F\u5426\u5F00\u542F\u4E86 \u5DE6\u53F3\u7FFB\u9875\u952E\u4EA4\u6362 \u6765\u5207\u6362\u7FFB\u9875\u65B9\u5411 */
const handleSwapPageTurnKey = (nextPage) => {
	return (store.option.swapPageTurnKey ? !nextPage : nextPage) ? "next" : "prev";
};
const handleHotkey = (hotkey, e) => {
	stopAutoScroll();
	finishTurnAnimation();
	if (isAbreastMode()) switch (hotkey) {
		case "scroll_up": return setAbreastScrollFill(abreastScrollFill() - 40);
		case "scroll_down": return setAbreastScrollFill(abreastScrollFill() + 40);
		case "scroll_left":
			if (e?.repeat) return constantScroll.start(store.option.dir === "rtl" ? -1 : 1);
			return scrollBy(store.option.dir === "rtl" ? -40 : 40);
		case "scroll_right":
			if (e?.repeat) return constantScroll.start(store.option.dir === "rtl" ? 1 : -1);
			return scrollBy(store.option.dir === "rtl" ? 40 : -40);
		case "page_up": return scrollBy(-store.rootSize.width * .8);
		case "page_down": return scrollBy(store.rootSize.width * .8);
		case "jump_to_home": return scrollTo(0);
		case "jump_to_end": return scrollTo(scrollLength());
	}
	if (isScrollMode()) switch (hotkey) {
		case "page_up": return scrollViewTurnPage(-store.rootSize.height * .8);
		case "page_down": return scrollViewTurnPage(store.rootSize.height * .8);
		case "scroll_up":
			if (e?.repeat) return constantScroll.start(-1);
			return scrollBy(-40, true);
		case "scroll_down":
			if (e?.repeat) return constantScroll.start(1);
			return scrollBy(40, true);
	}
	switch (hotkey) {
		case "page_up":
		case "scroll_up": return turnPageAnimation("prev");
		case "page_down":
		case "scroll_down": return turnPageAnimation("next");
		case "scroll_left": return turnPageAnimation(handleSwapPageTurnKey(store.option.dir === "rtl"));
		case "scroll_right": return turnPageAnimation(handleSwapPageTurnKey(store.option.dir !== "rtl"));
		case "jump_to_home": return setState("activePageIndex", 0);
		case "jump_to_end": return setState("activePageIndex", Math.max(0, store.pageList.length - 1));
		case "switch_page_fill": return switchFillEffect();
		case "switch_scroll_mode": return switchScrollMode();
		case "switch_single_double_page_mode": return switchOnePageMode();
		case "switch_dir": return switchDir();
		case "translate_current_page": return translateCurrent();
		case "translate_all": return translateAll();
		case "translate_to_end": return translateToEnd();
		case "auto_scroll": return switchAutoScroll();
		case "fullscreen": return switchFullscreen();
		case "jump_next": return store.prop.onNext?.();
		case "jump_prev": return store.prop.onPrev?.();
		case "switch_auto_enlarge": return setOption("disableZoom", !store.option.disableZoom);
		case "reload_current_error_img":
			for (const i of showImgList()) reloadImg(getImg(i).src);
			return;
		case "exit": return store.prop.onExit?.();
		default:
			document.body.dispatchEvent(new KeyboardEvent("keydown", e));
			document.body.dispatchEvent(new KeyboardEvent("keyup", e));
	}
};
//#endregion
//#region src/components/Manga/actions/hotkeys.ts
const [defaultHotkeys, setDefaultHotkeys] = solid_js.createSignal({
	scroll_up: ["w", "ArrowUp"],
	scroll_down: ["s", "ArrowDown"],
	scroll_left: [
		"a",
		"Shift + a",
		",",
		"ArrowLeft"
	],
	scroll_right: [
		"d",
		"Shift + d",
		".",
		"ArrowRight"
	],
	page_up: ["PageUp", "Shift + w"],
	page_down: [
		" ",
		"PageDown",
		"Shift + s"
	],
	jump_to_home: ["Home"],
	jump_to_end: ["End"],
	exit: ["Escape"],
	switch_page_fill: [
		"/",
		"m",
		"z"
	],
	switch_scroll_mode: [],
	switch_single_double_page_mode: [],
	switch_dir: [],
	switch_auto_enlarge: [],
	translate_current_page: [],
	translate_all: [],
	translate_to_end: [],
	fullscreen: [],
	auto_scroll: [],
	jump_next: [],
	jump_prev: [],
	reload_current_error_img: ["r"]
});
/** \u5FEB\u6377\u952E\u914D\u7F6E */
const hotkeysMap = helper.createRootMemo(() => Object.fromEntries(Object.entries(store.hotkeys).flatMap(([name, key]) => key.map((k) => [k, name]))));
const actionsMap = {
	bubble: null,
	capture: null
};
const createKeydownHandler = (type) => (e) => {
	const actions = actionsMap[type];
	if (!actions) return;
	switch (e.target.tagName) {
		case "INPUT":
		case "TEXTAREA": return;
	}
	if (e.target.isContentEditable) return;
	if (Reflect.has(actions, e.key)) {
		if (actions[e.key](e) === "SKIP") return;
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();
		return;
	}
	const hotkeyName = hotkeysMap()[helper.getKeyboardCode(e)];
	if (Reflect.has(actions, hotkeyName)) {
		if (actions[hotkeyName](e) === "SKIP") return;
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();
	}
};
const handlers = {
	bubble: createKeydownHandler("bubble"),
	capture: createKeydownHandler("capture")
};
/** \u76D1\u542C\u5FEB\u6377\u952E */
const listenHotkey = (actions, capture) => {
	const type = capture ? "capture" : "bubble";
	if (actionsMap[type]) Object.assign(actionsMap[type], actions);
	else {
		actionsMap[type] = { ...actions };
		window.addEventListener("keydown", handlers[type], { capture });
	}
	return () => {
		window.removeEventListener("keydown", handlers[type], { capture });
		actionsMap[type] = null;
	};
};
//#endregion
//#region src/components/Manga/actions/imageUpscale.ts
const upscaleImage = async (url, imgEle) => {
	setState("imgMap", url, "upscaleUrl", "");
	const { data, width, height } = helper.getImageData(imgEle);
	initWorker();
	await worker_ImageUpscale.default.upscaleImage(comlink.default.transfer(data, [data.buffer]), width, height, url);
};
let upscaleing = false;
const findUpscaleImage = async (start, end) => {
	for (let i = start; i < end; i++) {
		const img = typeof i === "number" ? getImg(i) : i;
		if (img.upscaleUrl !== void 0) continue;
		const imgEle = await helper.wait(() => getImgEle(img.src, true), 1e3);
		if (imgEle) return [img.src, imgEle];
	}
};
const handleUpscaleImage = async () => {
	if (upscaleing || !isUpscale() || store.imgList.length === 0) return;
	const targetImg = await findUpscaleImage(activeImgIndex(), store.imgList.length) ?? await findUpscaleImage(0, activeImgIndex());
	if (!targetImg) return;
	upscaleing = true;
	await upscaleImage(...targetImg);
	upscaleing = false;
	return handleUpscaleImage();
};
helper.createEffectOn([isUpscale, imgList], handleUpscaleImage);
const bufferToBase64 = (buffer) => {
	let binary = "";
	const bytes = new Uint8Array(buffer);
	const len = bytes.byteLength;
	for (let i = 0; i < len; i++) binary += String.fromCodePoint(bytes[i]);
	return window.btoa(binary);
};
const getModel = async () => {
	try {
		let base64;
		let buffer;
		if (typeof GM !== "undefined") base64 = await GM.getValue("@model.bin");
		if (!base64) {
			components_Toast.toast(helper.t("upscale.module_downloading"), {
				id: "upscale",
				duration: Infinity
			});
			const bin = await request.request("https://cdn.jsdelivr.net/npm/@hymbz/comic-read-script@11.12.1/public/realcugan/2x-conservative-128/group1-shard1of1.bin", {
				responseType: "arraybuffer",
				noTip: true
			});
			components_Toast.toast(helper.t("upscale.module_download_complete"), {
				id: "upscale",
				duration: 3e3
			});
			buffer = bin.response;
			base64 = bufferToBase64(buffer);
			await GM.setValue("@model.bin", base64);
		}
		const json = await helper.ensureGmValue("@model.json", async () => {
			return (await request.request("https://cdn.jsdelivr.net/npm/@hymbz/comic-read-script@11.12.1/public/realcugan/2x-conservative-128/model.json", { noTip: true })).responseText;
		});
		return {
			base64,
			json,
			buffer
		};
	} catch (error) {
		helper.log.error("\u83B7\u53D6\u56FE\u7247\u653E\u5927\u6A21\u578B\u51FA\u9519", error);
		components_Toast.toast.dismiss("upscale");
		components_Toast.toast.error(helper.t("upscale.module_download_failed"), {
			id: "upscale",
			duration: Infinity
		});
		setState("supportUpscaleImage", false);
		setState("option", "imgRecognition", "upscale", false);
		throw error;
	}
};
const initWorker = helper.once(() => {
	const mainFn = {
		log: helper.log,
		toast: components_Toast.toast,
		t: helper.t,
		setImg: (url, key, val) => Reflect.has(store.imgMap, url) && setState("imgMap", url, key, val),
		getModel
	};
	worker_ImageUpscale.default.setMainFn(comlink.default.proxy(mainFn), Object.keys(mainFn));
});
//#endregion
//#region src/components/Manga/actions/operate.ts
const handleMouseDown = (e) => {
	if (e.button !== 1 || store.option.scrollMode.enabled) return;
	e.stopPropagation();
	e.preventDefault();
	switchFillEffect();
};
const handleKeyDown = (e) => {
	switch (e.target.tagName) {
		case "INPUT":
		case "TEXTAREA": return;
	}
	if (e.target.className === classes$2.hotkeysItem) return;
	stopAutoScroll();
	finishTurnAnimation();
	const code = helper.getKeyboardCode(e);
	if (e.key === "Escape") {
		if (store.show.pageTip || store.show.scrollbar || store.show.toolbar) {
			e.stopPropagation();
			e.preventDefault();
			return setState((state) => {
				state.show.pageTip = false;
				state.show.scrollbar = false;
				state.show.toolbar = false;
			});
		}
		if (store.show.endPage) {
			e.stopPropagation();
			e.preventDefault();
			return setState("show", "endPage", void 0);
		}
	}
	if (e.target.dataset.onlyNumber !== void 0) {
		if (/^(?:Shift \\+ )?[a-zA-Z]$/u.test(code)) {
			e.stopPropagation();
			e.preventDefault();
		}
		return;
	}
	if (isScrollMode() && !store.show.endPage) switch (e.key) {
		case "Home":
		case "End":
		case "ArrowRight":
		case "ArrowLeft": return e.stopPropagation();
		case "ArrowUp":
		case "PageUp":
			e.stopPropagation();
			return handleEndTurnPage("prev");
		case "ArrowDown":
		case "PageDown":
		case " ":
			e.stopPropagation();
			return handleEndTurnPage("next");
	}
	if (Reflect.has(hotkeysMap(), code)) {
		e.stopPropagation();
		e.preventDefault();
	} else return;
	handleHotkey(hotkeysMap()[code], e);
};
const handleKeyUp = (e) => {
	switch (hotkeysMap()[helper.getKeyboardCode(e)]) {
		case "scroll_left":
		case "scroll_right":
		case "scroll_up":
		case "scroll_down": return constantScroll.cancel();
	}
};
//#endregion
//#region src/components/Manga/hooks/useDoubleClick.ts
let clickTimeout = null;
const useDoubleClick = (click, doubleClick, timeout = 200) => (event) => {
	if (clickTimeout) {
		clearTimeout(clickTimeout);
		clickTimeout = null;
		doubleClick?.(event);
		return;
	}
	clickTimeout = window.setTimeout(() => {
		click(event);
		clickTimeout = null;
	}, timeout);
};
//#endregion
//#region src/components/Manga/actions/pointer.ts
/** \u6839\u636E\u5750\u6807\u627E\u51FA\u88AB\u70B9\u51FB\u5230\u7684\u5143\u7D20 */
const findClickEle = (eleList, { x, y }) => {
	for (const e of eleList) {
		const rect = e.getBoundingClientRect();
		if (helper.inRange(rect.left, x, rect.right) && helper.inRange(rect.top, y, rect.bottom)) return e;
	}
};
/** \u89E6\u53D1\u70B9\u51FB\u533A\u57DF\u64CD\u4F5C */
const handlePageClick = (e) => {
	for (const i of showImgList()) {
		const img = getImg(i);
		if (img.loadType !== "error") continue;
		const imgEle = getImgEle(img.src);
		if (!imgEle || !findClickEle([imgEle], e)) continue;
		return reloadImg(img.src);
	}
	const targetArea = findClickEle(refs.touchArea.children, e);
	if (!targetArea || getComputedStyle(targetArea).visibility === "hidden") return;
	const areaName = targetArea.dataset.area;
	if (!areaName) return;
	if (areaName === "menu" || areaName === "MENU") return setState((state) => {
		state.show.scrollbar = !state.show.scrollbar;
		state.show.toolbar = !state.show.toolbar;
		state.show.pageTip = !state.show.pageTip;
	});
	setState((state) => {
		resetUI(state);
		switch (areaName) {
			case "NEXT":
			case "next": return handleHotkey("page_down");
			case "PREV":
			case "prev": return handleHotkey("page_up");
		}
	});
};
/** \u53CC\u51FB\u653E\u5927 */
const doubleClickZoom = (e) => zoom(store.option.zoom.ratio === 100 ? 350 : 100, e, true);
const handleClick = useDoubleClick(handlePageClick, doubleClickZoom);
/** \u62D6\u52A8\u9875\u9762\u7684\u52A8\u753B\u63A7\u5236\u5668 */
const dragAnim = new class extends helper.AnimationFrame {
	dx = 0;
	dy = 0;
	frame = () => {
		if (this.dx === store.page.offset.x.px && this.dy === store.page.offset.y.px) return this.cancel();
		setState((state) => {
			if (state.page.vertical) state.page.offset.y.px = this.dy;
			else state.page.offset.x.px = this.dx;
		});
		this.call(true);
	};
}();
/** \u662F\u5426\u4ECE\u7FFB\u9875\u52A8\u753B\u7684\u5F53\u524D\u504F\u79FB\u76F4\u63A5\u8FDB\u5165\u62D6\u62FD */
let dragFromCurrentOffset = false;
const handleDragEnd = (startTime) => {
	dragAnim.dx = 0;
	dragAnim.dy = 0;
	dragAnim.cancel();
	const dir = store.page.vertical ? getTurnPageDir(-store.page.offset.y.px, store.rootSize.height, startTime) : getTurnPageDir(store.page.offset.x.px, store.rootSize.width, startTime);
	if (dir) return turnPageAnimation(dir, 100);
	setState((state) => {
		state.page.offset.x.px = 0;
		state.page.offset.y.px = 0;
		state.page.anima = "page";
		state.isDragMode = false;
	});
};
handleDragEnd.debounce = helper.debounce(handleDragEnd, 200);
const handleMangaFlowDrag = ({ type, xy: [x, y], initial: [ix, iy], startTime }) => {
	switch (type) {
		case "down":
			dragFromCurrentOffset = false;
			if (store.isTurnAnimating) {
				cancelTurnAnimation();
				dragFromCurrentOffset = true;
			}
			return;
		case "move": {
			dragAnim.dx = store.option.dir === "rtl" ? x - ix : ix - x;
			dragAnim.dy = y - iy;
			if (store.isDragMode) return dragAnim.call();
			let slideDir;
			const dxAbs = Math.abs(dragAnim.dx);
			const dyAbs = Math.abs(dragAnim.dy);
			if (dxAbs > 5 && dyAbs < 5) slideDir = "horizontal";
			if (dyAbs > 5 && dxAbs < 5) slideDir = "vertical";
			if (!slideDir) return;
			if (dragFromCurrentOffset) {
				dragFromCurrentOffset = false;
				setState("isDragMode", true);
			} else {
				cancelTurnAnimation();
				setState((state) => {
					state.page.vertical = slideDir === "vertical";
					state.isDragMode = true;
					resetPage(state);
				});
			}
			return;
		}
		case "up":
		case "cancel":
			dragFromCurrentOffset = false;
			return handleDragEnd(startTime);
	}
};
//#endregion
//#region src/components/Manga/actions/scrollMode.ts
/** \u4FEE\u6539\u5377\u8F74\u6A21\u5F0F\u4E0B\u56FE\u7247\u7684\u76EE\u6807\u5BBD\u5EA6 */
const setAdjustToWidth = (val) => {
	if (typeof store.option.scrollMode.adjustToWidth !== "number") return;
	if (typeof val === "function") val = val(store.option.scrollMode.adjustToWidth);
	if (Number.isNaN(val)) return;
	const jump = saveScrollProgress();
	const newVal = helper.clamp(200, val, Math.ceil(store.rootSize.width));
	setOption("scrollMode", "adjustToWidth", newVal);
	jump();
};
const minImgWidth = helper.createRootMemo(() => {
	let min = Infinity;
	for (const img of Object.values(store.imgMap)) if (img.width && img.width < min) min = img.width;
	return min;
});
/** \u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\u8FDB\u884C\u7F29\u653E\uFF0C\u5E76\u4E14\u4FDD\u6301\u6EDA\u52A8\u8FDB\u5EA6\u4E0D\u53D8 */
const setImgScale = (val) => {
	if (typeof val === "function") val = val(store.option.scrollMode.imgScale);
	if (Number.isNaN(val)) return;
	const jump = saveScrollProgress();
	let newVal = helper.clamp(.1, val, 3);
	if (minImgWidth() > store.rootSize.width && newVal < store.option.scrollMode.imgScale) {
		const maxImgScale = store.rootSize.width / minImgWidth();
		if (newVal > maxImgScale) newVal = maxImgScale;
	}
	newVal = Number(newVal.toFixed(2));
	setOption("scrollMode", "imgScale", helper.clamp(.1, newVal, 3));
	jump();
};
/** \u5904\u7406\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u653E\u5927/\u7F29\u5C0F\u64CD\u4F5C */
const handleScrollModeZoom = (dir) => {
	if (!store.option.scrollMode.enabled) return;
	if (store.option.scrollMode.adjustToWidth === "full") return;
	if (store.option.scrollMode.adjustToWidth === "disable" || isAbreastMode()) setImgScale((val) => val + .05 * (dir === "add" ? 1 : -1));
	else setAdjustToWidth((val) => val + 100 * (dir === "add" ? 1 : -1));
};
//#endregion
//#region src/components/Manga/actions/scrollModeDrag.ts
/** \u6469\u64E6\u7CFB\u6570 */
const FRICTION_COEFF = .96;
const calcVelocityAnim = new class extends helper.AnimationFrame {
	lastTop = 0;
	dy = 0;
	lastLeft = 0;
	dx = 0;
	frame = () => {
		const nowTop = store.option.scrollMode.abreastMode ? abreastScrollFill() : scrollTop();
		this.dy = nowTop - this.lastTop;
		this.lastTop = nowTop;
		this.dx = store.page.offset.x.px - this.lastLeft;
		this.lastLeft = store.page.offset.x.px;
		this.call(true);
	};
}();
const slideAnim = new class extends helper.AnimationFrame {
	lastTime = 0;
	frame = (timestamp) => {
		if (Math.abs(calcVelocityAnim.dx) + Math.abs(calcVelocityAnim.dy) < 1) {
			this.animationId = 0;
			return;
		}
		if (timestamp - this.lastTime > 16) {
			calcVelocityAnim.dy *= FRICTION_COEFF;
			calcVelocityAnim.dx *= FRICTION_COEFF;
			this.lastTime = timestamp;
		}
		if (store.option.scrollMode.abreastMode) {
			scrollTo(scrollTop() + calcVelocityAnim.dx);
			setAbreastScrollFill(abreastScrollFill() + calcVelocityAnim.dy);
		} else scrollTo(scrollTop() + calcVelocityAnim.dy);
		this.call(true);
	};
}();
let initTop = 0;
let initLeft = 0;
let initAbreastScrollFill = 0;
const handleScrollModeDrag = ({ type, xy: [x, y], initial: [ix, iy], startTime }, e) => {
	if (!store.option.scrollMode.abreastMode && e.pointerType !== "mouse") return;
	switch (type) {
		case "down":
			calcVelocityAnim.cancel();
			slideAnim.cancel();
			initTop = refs.mangaBox.scrollTop;
			initLeft = store.page.offset.x.px * (store.option.dir === "rtl" ? 1 : -1);
			initAbreastScrollFill = abreastScrollFill();
			calcVelocityAnim.call();
			return;
		case "move":
			if (store.option.scrollMode.abreastMode) {
				const _dx = x - ix;
				const _dy = y - iy;
				scrollTo((initLeft + _dx) * (store.option.dir === "rtl" ? 1 : -1));
				setAbreastScrollFill(initAbreastScrollFill + _dy);
			} else scrollTo(initTop + iy - y);
			return;
		case "up":
			calcVelocityAnim.cancel();
			if (performance.now() - startTime < 50) return;
			slideAnim.call();
			saveReadProgress();
	}
};
//#endregion
//#region src/components/Manga/actions/scrollbar.ts
/** \u5224\u65AD\u70B9\u51FB\u4F4D\u7F6E\u5728\u6EDA\u52A8\u6761\u4E0A\u7684\u4F4D\u7F6E\u6BD4\u7387 */
const getClickTop = (x, y, e) => {
	switch (scrollPosition()) {
		case "bottom":
		case "top": return store.option.dir === "rtl" ? 1 - x / e.offsetWidth : x / e.offsetWidth;
		default: return y / e.offsetHeight;
	}
};
/** \u8BA1\u7B97\u5728\u6EDA\u52A8\u6761\u4E0A\u7684\u62D6\u52A8\u8DDD\u79BB */
const getSliderDist = ([x, y], [ix, iy], e) => {
	switch (scrollPosition()) {
		case "bottom":
		case "top": return store.option.dir === "rtl" ? (1 - (x - ix)) / e.offsetWidth : (x - ix) / e.offsetWidth;
		default: return (y - iy) / e.offsetHeight;
	}
};
const [isDrag, setIsDrag] = solid_js.createSignal(false);
const closeDrag = helper.debounce(() => setIsDrag(false), 200);
let lastType = "up";
/** \u5F00\u59CB\u62D6\u62FD\u65F6\u7684 sliderTop \u503C */
let startTop = 0;
const handleScrollbarSlider = ({ type, xy, initial }, e) => {
	stopAutoScroll();
	finishTurnAnimation();
	const [x, y] = xy;
	if (type === "move" && lastType === type) {
		setIsDrag(true);
		closeDrag();
	}
	lastType = type;
	if (type === "up") return saveReadProgress();
	if (!refs.mangaFlow) return;
	const scrollbarDom = e.target;
	/** \u70B9\u51FB\u4F4D\u7F6E\u5728\u6EDA\u52A8\u6761\u4E0A\u7684\u4F4D\u7F6E\u6BD4\u7387 */
	const clickTop = getClickTop(x, y, e.target);
	if (store.option.scrollMode.enabled) {
		if (type === "move") {
			const top = helper.clamp(0, startTop + getSliderDist(xy, initial, scrollbarDom), 1) * scrollLength();
			scrollTo(top);
		} else {
			startTop = clickTop - sliderHeight() / 2;
			const top = startTop * scrollLength();
			scrollTo(top, true);
		}
	} else {
		let newPageIndex = Math.floor(clickTop * store.pageList.length);
		if (newPageIndex < 0) newPageIndex = 0;
		else if (newPageIndex >= store.pageList.length) newPageIndex = store.pageList.length - 1;
		if (newPageIndex !== store.activePageIndex) setState("activePageIndex", newPageIndex);
	}
};
//#endregion
//#region src/components/Manga/actions/wheel/scrollDevice.ts
/** \u5224\u65AD\u4E24\u4E2A\u6570\u503C\u662F\u5426\u6210\u6574\u6570\u500D */
const isMultipleOf = (a, b) => (a < b ? b % a : a % b) === 0;
/** C \u7C7B\u8BBE\u5907\u4E0B\u8FDE\u7EED\u51FA\u73B0\u6210\u500D\u6EDA\u52A8\u91CF\u7684\u6B21\u6570\uFF0C\u8FBE\u5230\u9608\u503C\u624D\u5141\u8BB8\u5207\u6362\u4E3A A/B \u7C7B */
let consecutiveMultiple = 0;
let lastDelta = Infinity;
/** \u6839\u636E\u4F20\u5165\u7684\u6EDA\u52A8\u4E8B\u4EF6\u5224\u5B9A\u6EDA\u52A8\u8BBE\u5907\u7C7B\u578B */
const detectScrollDevice = (e) => {
	const absDelta = Math.max(Math.abs(e.deltaX), Math.abs(e.deltaY));
	let type;
	if (e.deltaMode !== 0) type = "a";
	else if (e.phase !== void 0) type = "c";
	else if (absDelta < 10 || lastDelta < 10) type = "c";
	else if (lastDelta === Infinity) type = void 0;
	else if (isMultipleOf(lastDelta, absDelta)) {
		if (store.scrollDeviceType === "c" && ++consecutiveMultiple < 3) type = void 0;
		else {
			consecutiveMultiple = 0;
			type = Math.max(lastDelta, absDelta) >= 40 ? "a" : "b";
		}
	} else type = "c";
	if (type === "c") consecutiveMultiple = 0;
	lastDelta = absDelta;
	if (type) setState("scrollDeviceType", type);
};
//#endregion
//#region src/components/Manga/actions/wheel/wheelRatchet.ts
/** \u865A\u62DF\u68D8\u8F6E\u6B65\u957F */
const wheelStepLength = helper.createRootMemo(() => {
	switch (store.scrollDeviceType) {
		case "a":
		case "b": return 120;
		case "c": return 360;
		case void 0: return Infinity;
	}
});
const wheelRatchet = new class {
	/** \u5E26\u65B9\u5411\u7684\u7D2F\u8BA1\u6EDA\u52A8\u91CF\uFF0C\u6B63\u6570\u8868\u793A\u5411\u4E0B\u6EDA\u52A8 */
	wheelDy = 0;
	/** \u6309\u5F53\u524D\u6B65\u957F\u5904\u7406\u7D2F\u8BA1\u6EDA\u52A8\u91CF\u8FDB\u884C\u7FFB\u9875 */
	processWheel = (state) => {
		const step = wheelStepLength();
		while (this.wheelDy <= -step) {
			if (!turnPage("next", state)) {
				this.wheelDy = -step;
				break;
			}
			this.wheelDy += step;
		}
		while (this.wheelDy >= step) {
			if (!turnPage("prev", state)) {
				this.wheelDy = step;
				break;
			}
			this.wheelDy -= step;
		}
		state.wheelProgress = -this.wheelDy / step;
		resetPage(state);
	};
	processWheelThrottled = helper.throttle(() => setState(this.processWheel), 16);
	/** \u505C\u6B62\u6EDA\u52A8\u4E00\u6BB5\u65F6\u95F4\u540E\u91CD\u7F6E\u72B6\u6001 */
	handleWheelEnd = helper.debounce(() => {
		this.wheelDy = 0;
		setState("wheelProgress", 0);
	}, 300);
	/** \u5904\u7406\u6EDA\u52A8\u4EA7\u751F\u7684\u8FDE\u7EED\u4F4D\u79FB\uFF0C\u901A\u8FC7\u865A\u62DF\u68D8\u8F6E\uFF08\u7D2F\u8BA1\u6EE1\u4E00\u4E2A\u6B65\u957F\uFF09\u5B9E\u73B0\u7FFB\u9875 */
	handleContinuousWheel(delta) {
		if (store.option.scrollMode.enabled) return;
		openScrollLock();
		this.wheelDy += Math.floor(delta);
		this.processWheelThrottled();
		this.handleWheelEnd();
	}
}();
//#endregion
//#region src/components/Manga/actions/wheel/index.ts
let firstWheelTimer = 0;
/** \u83B7\u53D6\u6EDA\u8F6E\u4E8B\u4EF6\u7684\u4E3B\u8F74\u5411\u4E0E\u4E3B\u8F74\u5411\u6EDA\u52A8\u91CF */
const getWheelAxis = (e) => {
	const absDeltaX = Math.abs(e.deltaX);
	const absDeltaY = Math.abs(e.deltaY);
	const horizontal = absDeltaX > absDeltaY;
	return {
		horizontal,
		delta: horizontal ? e.deltaX : e.deltaY,
		absDelta: horizontal ? absDeltaX : absDeltaY
	};
};
/** \u6839\u636E\u4E3B\u8F74\u5411\u4E0E\u6F2B\u753B\u65B9\u5411\u8BA1\u7B97\u7FFB\u9875\u65B9\u5411 */
const getWheelDir = (horizontal, delta) => {
	if (horizontal) {
		if (store.option.dir === "rtl") return delta < 0 ? "next" : "prev";
		return delta > 0 ? "next" : "prev";
	}
	return delta > 0 ? "next" : "prev";
};
/** A \u7C7B\u8BBE\u5907\u76F4\u63A5\u7FFB\u9875\uFF0C\u4E0D\u7ECF\u8FC7\u865A\u62DF\u68D8\u8F6E */
const turnPageByWheel = (dir) => {
	wheelRatchet.wheelDy = 0;
	openScrollLock();
	turnPageAnimation(dir);
};
const handleWheel = (e) => {
	stopAutoScroll();
	finishTurnAnimation();
	e.stopPropagation();
	if (e.ctrlKey || e.altKey) e.preventDefault();
	const { horizontal, delta, absDelta } = getWheelAxis(e);
	const isPositiveDelta = delta > 0;
	const dir = getWheelDir(horizontal, delta);
	if (absDelta === 0) return;
	if (isScrollMode() && horizontal) return;
	if ((e.ctrlKey || e.altKey) && store.option.scrollMode.enabled && store.option.zoom.ratio === 100) {
		e.preventDefault();
		return handleScrollModeZoom(isPositiveDelta ? "sub" : "add");
	}
	if (e.ctrlKey || e.altKey) {
		e.preventDefault();
		return zoom(store.option.zoom.ratio + (isPositiveDelta ? -25 : 25), e);
	}
	if (store.page.vertical === horizontal) setState((state) => {
		state.page.vertical = !horizontal;
		resetPage(state);
	});
	if (!isScrollMode()) e.preventDefault();
	detectScrollDevice(e);
	if (store.scrollDeviceType === void 0) firstWheelTimer = window.setTimeout(() => {
		setState("scrollDeviceType", "a");
		turnPageByWheel(dir);
	}, 100);
	else if (firstWheelTimer) {
		clearTimeout(firstWheelTimer);
		firstWheelTimer = 0;
	}
	if (absDelta >= 5 && handleEndTurnPage(dir)) {
		openScrollLock();
		return e.preventDefault();
	}
	if (isAbreastMode() && store.option.zoom.ratio === 100) {
		e.preventDefault();
		scrollBy(delta, true);
	}
	if (store.option.scrollMode.enabled) return;
	if (store.scrollDeviceType === "a") return turnPageByWheel(dir);
	return wheelRatchet.handleContinuousWheel(dir === "next" ? -absDelta : absDelta);
};
//#endregion
//#region src/components/Manga/hooks/useEventListener.ts
const useEventListener = (ref) => {
	const listeners = /* @__PURE__ */ new Map();
	solid_js.createEffect(() => {
		const el = ref();
		if (!el) return;
		for (const [type, list] of listeners) for (const { listener, options } of list) el.addEventListener(type, listener, options);
		solid_js.onCleanup(() => {
			for (const [type, list] of listeners) for (const { listener, options } of list) el.removeEventListener(type, listener, options);
		});
	});
	return (type, listener, options) => {
		const list = listeners.get(type) ?? [];
		list.push({
			listener,
			options
		});
		listeners.set(type, list);
	};
};
//#endregion
//#region src/components/Manga/hooks/useHiddenMouse.ts
/** \u5728\u9F20\u6807\u9759\u6B62\u4E00\u6BB5\u65F6\u95F4\u540E\u81EA\u52A8\u9690\u85CF */
const useHiddenMouse = (ref) => {
	const [hiddenMouse, setHiddenMouse] = solid_js.createSignal(true);
	const on = useEventListener(ref);
	const hidden = helper.debounce(() => setHiddenMouse(true), 1e3);
	on("mousemove", () => {
		setHiddenMouse(false);
		hidden();
	});
	on("mouseleave", () => {
		hidden.clear();
		setHiddenMouse(false);
	});
	return hiddenMouse;
};
//#endregion
//#region src/components/Manga/hooks/useStyle.ts
function css$1(arg1, arg2, ...rest) {
	solid_js.onMount(() => {
		if (typeof arg1 !== "object" || !("raw" in arg1)) {
			if (arg2 === void 0) helper.css(arg1, refs.root);
			else helper.css(arg1, arg2, refs.root);
		} else helper.css(["", ...arg1], refs.root, ...rest);
	});
}
//#endregion
//#region src/components/Manga/components/ComicImg.tsx
var _tmpl$$37 = /*#__PURE__*/ solid_js_web.template(\`<img draggable=false decoding=async>\`);
var _tmpl$2$8 = /*#__PURE__*/ solid_js_web.template(\`<div><picture><div>\`);
const ComicImg = (img) => {
	const showState = () => store.imgShowState[img.index];
	solid_js.createEffect(() => src() && getImgEle(img.src)?.decode());
	const src = () => {
		if (img.loadType === "wait") return "";
		if (img.translationType === "show") return img.translationUrl;
		if (store.option.imgRecognition.enabled) {
			if (store.option.imgRecognition.upscale && img.upscaleUrl) return img.upscaleUrl;
			return img.blobUrl;
		}
		if (img.src.startsWith("blob:")) return img.src.replace(/#\\..+/u, "");
		return img.src;
	};
	/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u9700\u8981\u590D\u5236\u7684\u56FE\u7247\u6570\u91CF */
	const cloneNum = solid_js.createMemo(() => {
		if (!isAbreastMode()) return 0;
		const imgPosition = abreastArea().position[img.index];
		return imgPosition ? imgPosition.length - 1 : 0;
	});
	/** \u6253\u5F00\u300C\u8FB9\u7F18\u88C1\u5207\u300D\u540E\u4F7F\u7528\u7684\u6837\u5F0F */
	const cropStyle = solid_js.createMemo(() => {
		const crop = getCropMargin(img);
		if (!crop) return null;
		const cw = 1 - crop.left - crop.right;
		const ch = 1 - crop.top - crop.bottom;
		const picture = { overflow: "clip" };
		const isDisableZoomNonScroll = store.option.disableZoom && !store.option.scrollMode.enabled;
		if (isDisableZoomNonScroll || isAbreastMode()) {
			if (isDisableZoomNonScroll) {
				const pageIndex = imgPageMap()[img.index];
				const isFullWidth = (pageIndex === void 0 ? void 0 : store.pageList[pageIndex])?.length === 1;
				const scale = Math.min(1, store.rootSize.width * (isFullWidth ? 1 : .5) / img.size.width, store.rootSize.height / img.size.height) || 1;
				picture.width = \`\${img.size.width * scale}px\`;
				picture.height = \`\${img.size.height * scale}px\`;
			} else {
				picture.width = \`\${img.size.width}px\`;
				picture.height = \`\${img.size.height}px\`;
			}
		}
		return {
			imgEle: {
				position: "absolute",
				left: \`\${-crop.left / cw * 100}%\`,
				top: \`\${-crop.top / ch * 100}%\`,
				width: \`\${1 / cw * 100}%\`,
				height: \`\${1 / ch * 100}%\`,
				"max-width": "none",
				"max-height": "none",
				"object-fit": "fill"
			},
			picture
		};
	});
	const styles = solid_js.createMemo(() => ({
		img: {
			"grid-area": isAbreastMode() ? "none" : \`_\${img.index}\`,
			"background-color": isEnableBg() ? img.background ?? void 0 : void 0
		},
		imgEle: cropStyle()?.imgEle,
		picture: {
			"aspect-ratio": \`\${img.size.width} / \${img.size.height}\`,
			background: img.progress ? \`linear-gradient(
              to bottom,
              var(--secondary-bg) \${img.progress}%,
              var(--hover-bg-color,#fff3) \${img.progress}%
            )\` : void 0,
			...cropStyle()?.picture
		}
	}));
	const ComicImgBase = (props) => (() => {
		var _el$ = _tmpl$2$8(), _el$2 = _el$.firstChild, _el$4 = _el$2.firstChild;
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return src();
			},
			get children() {
				var _el$3 = _tmpl$$37();
				_el$3.addEventListener("error", (e) => handleImgError(img.src, e.currentTarget));
				_el$3.addEventListener("load", (e) => handleImgLoaded(img.src, e.currentTarget));
				solid_js_web.use((el) => {
					refs.imgEleMap[img.src] ??= /* @__PURE__ */ new Set();
					const set = refs.imgEleMap[img.src];
					set.add(el);
					solid_js.onCleanup(() => {
						set.delete(el);
						if (set.size === 0) delete refs.imgEleMap[img.src];
					});
				}, _el$3);
				solid_js_web.effect((_p$) => {
					var _v$ = styles().imgEle, _v$2 = src(), _v$3 = \`\${img.index}\`, _v$4 = img.src;
					_p$.e = solid_js_web.style(_el$3, _v$, _p$.e);
					_v$2 !== _p$.t && solid_js_web.setAttribute(_el$3, "src", _p$.t = _v$2);
					_v$3 !== _p$.a && solid_js_web.setAttribute(_el$3, "alt", _p$.a = _v$3);
					_v$4 !== _p$.o && solid_js_web.setAttribute(_el$3, "data-src", _p$.o = _v$4);
					return _p$;
				}, {
					e: void 0,
					t: void 0,
					a: void 0,
					o: void 0
				});
				return _el$3;
			}
		}), _el$4);
		solid_js_web.insert(_el$4, () => getImgTip(img.index));
		solid_js_web.effect((_p$) => {
			var _v$5 = classes$2.img, _v$6 = \`_\${img.index}_\${props.cloneIndex ?? 0}\`, _v$7 = styles().img, _v$8 = showState(), _v$9 = img.type ?? store.defaultImgType, _v$0 = img.loadType === "loaded" ? void 0 : img.loadType, _v$1 = styles().picture, _v$10 = classes$2.pageTip;
			_v$5 !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$5);
			_v$6 !== _p$.t && solid_js_web.setAttribute(_el$, "id", _p$.t = _v$6);
			_p$.a = solid_js_web.style(_el$, _v$7, _p$.a);
			_v$8 !== _p$.o && solid_js_web.setAttribute(_el$, "data-show", _p$.o = _v$8);
			_v$9 !== _p$.i && solid_js_web.setAttribute(_el$, "data-type", _p$.i = _v$9);
			_v$0 !== _p$.n && solid_js_web.setAttribute(_el$, "data-load-type", _p$.n = _v$0);
			_p$.s = solid_js_web.style(_el$2, _v$1, _p$.s);
			_v$10 !== _p$.h && solid_js_web.className(_el$4, _p$.h = _v$10);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0
		});
		return _el$;
	})();
	return [solid_js_web.createComponent(ComicImgBase, {}), solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return cloneNum() > 0;
		},
		get children() {
			return solid_js_web.createComponent(solid_js.For, {
				get each() {
					return Array.from({ length: cloneNum() });
				},
				children: (_, i) => solid_js_web.createComponent(ComicImgBase, { get cloneIndex() {
					return i() + 1;
				} })
			});
		}
	})];
};
//#endregion
//#region src/components/Manga/components/EmptyTip.tsx
var _tmpl$$36 = /*#__PURE__*/ solid_js_web.template(\`<h1 style=opacity:0>\`);
const EmptyTip = () => {
	let ref;
	helper.onAutoMount(() => {
		let timeoutId = 0;
		const observer = new IntersectionObserver(([{ isIntersecting }]) => {
			if (!isIntersecting) return;
			timeoutId = window.setTimeout(() => {
				ref?.style.removeProperty("opacity");
				timeoutId = 0;
			}, 2e3);
		}, { threshold: 1 });
		observer.observe(ref);
		return () => {
			observer.disconnect();
			if (timeoutId) clearTimeout(timeoutId);
		};
	});
	return (() => {
		var _el$ = _tmpl$$36();
		var _ref$ = ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : ref = _el$;
		_el$.textContent = "NULL";
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/components/ComicImgFlow.tsx
var _tmpl$$35 = /*#__PURE__*/ solid_js_web.template(\`<div tabindex=-1><div tabindex=-1>\`);
const ComicImgFlow = () => {
	const hiddenMouse = useHiddenMouse(() => refs.mangaFlow);
	const handleDrag = (state, e) => {
		stopAutoScroll();
		if (touches.size > 1) return handlePinchZoom(state, e);
		if (store.option.zoom.ratio !== 100) return handleZoomDrag(state, e);
		if (store.option.scrollMode.enabled) return handleScrollModeDrag(state, e);
		return handleMangaFlowDrag(state, e);
	};
	solid_js.onMount(() => {
		helper.useDrag({
			ref: refs.mangaBox,
			handleDrag,
			handleClick,
			touches,
			setCapture: true
		});
		bindScrollTop(refs.mangaBox);
	});
	const handleTransitionEnd = () => {
		if (store.isDragMode || store.isTurnAnimating) return;
		setState((state) => {
			if (store.option.zoom.ratio === 100) resetPage(state, false);
			else state.page.anima = "";
		});
	};
	/** \u5728\u5F53\u524D\u9875\u4E4B\u524D\u6709\u56FE\u7247\u88AB\u52A0\u8F7D\u51FA\u6765\uFF0C\u5BFC\u81F4\u5185\u5BB9\u9AD8\u5EA6\u53D1\u751F\u53D8\u5316\u540E\uFF0C\u91CD\u65B0\u6EDA\u52A8\u9875\u9762\uFF0C\u786E\u4FDD\u5F53\u524D\u663E\u793A\u4F4D\u7F6E\u4E0D\u53D8 */
	helper.createEffectOn([
		() => store.showRange[0],
		() => pageTopList()[store.showRange[0]],
		pageTopList
	], ([showImg, height, topList], prev) => {
		if (!prev || !height || !isScrollMode()) return;
		const [prevShowImg, prevHeight, prevTopList] = prev;
		if (showImg !== prevShowImg || prevTopList === topList || prevHeight === height) return;
		scrollTo(scrollTop() + height - prevHeight);
	});
	const pageToText = (page) => (page.length === 1 ? [page[0], page[0]] : page).map((i) => i === -1 ? "." : \`_\${i}\`).join(" ");
	const gridAreas = solid_js.createMemo(() => {
		if (store.pageList.length === 0) return;
		if (store.option.scrollMode.enabled) {
			if (store.option.scrollMode.abreastMode) return \`"\${helper.range(abreastArea().columns.length, (i) => \`_\${i}\`).join(" ")}"\`;
			if (store.option.scrollMode.doubleMode) {
				const { pageColumns } = store.option.scrollMode;
				return scrollPageList().map((row) => {
					const missNum = pageColumns * 2 - row.length * 2;
					return \`"\${[...row.map(pageToText), ...helper.range(missNum, ".")].join(" ")}"\`;
				}).join("\\n");
			}
			return helper.range(store.imgList.length, (i) => \`"_\${i}"\`).join("\\n");
		}
		return store.page.vertical ? store.pageList.slice(store.renderRange[0], store.renderRange[1] + 1).map((page) => \`"\${pageToText(page)}"\`).join("\\n") : \`"\${store.pageList.slice(store.renderRange[0], store.renderRange[1] + 1).map(pageToText).join(" ")}"\`;
	});
	css$1(\`.\${classes$2.mangaBox}\`, { transform: () => \`translate(\${store.option.zoom.offset.x}px, \${store.option.zoom.offset.y}px)
        scale(\${store.option.zoom.ratio / 100})\` });
	const pageX = solid_js.createMemo(() => {
		if (isScrollMode()) return 0;
		let x = store.page.offset.x.pct * store.rootSize.width + store.page.offset.x.px;
		if (store.option.dir !== "rtl") x = -x;
		return x;
	});
	css$1(\`#\${classes$2.mangaFlow}\`, {
		left: () => \`\${pageX()}px\`,
		top: () => \`\${store.page.offset.y.pct * store.rootSize.height + store.page.offset.y.px}px\`,
		"touch-action"() {
			if (store.option.zoom.ratio === 100) return;
			if (!store.option.scrollMode.enabled) return "none";
			if (store.option.zoom.offset.y === 0) return "pan-up";
			if (store.option.zoom.offset.y === bound().y) return "pan-down";
		},
		"grid-template-areas": gridAreas,
		"grid-template-columns"() {
			if (store.imgList.length === 0) return;
			if (store.option.scrollMode.enabled) {
				if (store.option.scrollMode.abreastMode) return \`repeat(\${abreastArea().columns.length}, \${abreastColumnWidth()}px)\`;
				if (store.option.scrollMode.doubleMode) return \`repeat(\${store.option.scrollMode.pageColumns * 2}, 1fr)\`;
				return;
			}
			if (store.page.vertical) return "50% 50%";
			return \`repeat(\${gridAreas()?.split(" ").length ?? 0}, 50%)\`;
		},
		"grid-template-rows"() {
			if (isScrollMode()) return pageHeightList().map((num) => \`\${num}px\`).join(" ");
		},
		"background-color": () => isEnableBg() ? getImg(activeImgIndex())?.background ?? void 0 : void 0
	});
	css$1(imgAreaStyle);
	const renderList = solid_js.createMemo(() => {
		const list = new Set(renderImgList());
		for (const url of loadState.loadingUrlSet) {
			const indexList = imgIndexMap().get(url);
			if (!indexList) continue;
			if (indexList.some((index) => list.has(index))) continue;
			list.add(indexList[0]);
		}
		return [...list].toSorted((a, b) => a - b);
	});
	return (() => {
		var _el$ = _tmpl$$35(), _el$2 = _el$.firstChild;
		solid_js_web.addEventListener(_el$, "scrollend", focus);
		_el$.addEventListener("transitionend", handleTransitionEnd);
		var _ref$ = bindRef("mangaBox");
		typeof _ref$ === "function" && solid_js_web.use(_ref$, _el$);
		_el$2.addEventListener("transitionend", handleTransitionEnd);
		var _ref$2 = bindRef("mangaFlow");
		typeof _ref$2 === "function" && solid_js_web.use(_ref$2, _el$2);
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.For, {
			get each() {
				return renderList();
			},
			get fallback() {
				return solid_js_web.createComponent(EmptyTip, {});
			},
			children: (i) => solid_js_web.createComponent(ComicImg, solid_js_web.mergeProps({ index: i }, () => store.imgMap[store.imgList[i]]))
		}));
		solid_js_web.effect((_p$) => {
			var _v$ = \`\${classes$2.mangaBox} \${classes$2.beautifyScrollbar}\`, _v$2 = store.page.anima, _v$3 = helper.boolDataVal(store.option.scrollMode.abreastMode), _v$4 = classes$2.mangaFlow, _v$5 = store.option.dir, _v$6 = \`\${classes$2.mangaFlow} \${classes$2.beautifyScrollbar}\`, _v$7 = helper.boolDataVal(store.option.disableZoom && !store.option.scrollMode.enabled), _v$8 = helper.boolDataVal(store.option.zoom.ratio !== 100), _v$9 = helper.boolDataVal(store.page.vertical), _v$0 = store.option.autoHiddenMouse && hiddenMouse();
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-animation", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-abreast-scroll", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$2, "id", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setAttribute(_el$2, "dir", _p$.i = _v$5);
			_v$6 !== _p$.n && solid_js_web.className(_el$2, _p$.n = _v$6);
			_v$7 !== _p$.s && solid_js_web.setAttribute(_el$2, "data-disable-zoom", _p$.s = _v$7);
			_v$8 !== _p$.h && solid_js_web.setAttribute(_el$2, "data-scale-mode", _p$.h = _v$8);
			_v$9 !== _p$.r && solid_js_web.setAttribute(_el$2, "data-vertical", _p$.r = _v$9);
			_v$0 !== _p$.d && solid_js_web.setAttribute(_el$2, "data-hidden-mouse", _p$.d = _v$0);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0,
			r: void 0,
			d: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/components/TouchArea.tsx
var _tmpl$$34 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
var _tmpl$2$7 = /*#__PURE__*/ solid_js_web.template(\`<div role=button tabindex=-1>\`);
const areaArrayMap = {
	left_right: [
		[
			"prev",
			"menu",
			"next"
		],
		[
			"PREV",
			"MENU",
			"NEXT"
		],
		[
			"prev",
			"menu",
			"next"
		]
	],
	up_down: [
		[
			"prev",
			"PREV",
			"prev"
		],
		[
			"menu",
			"MENU",
			"menu"
		],
		[
			"next",
			"NEXT",
			"next"
		]
	],
	edge: [
		[
			"next",
			"menu",
			"next"
		],
		[
			"NEXT",
			"MENU",
			"NEXT"
		],
		[
			"next",
			"PREV",
			"next"
		]
	],
	l: [
		[
			"PREV",
			"prev",
			"prev"
		],
		[
			"prev",
			"MENU",
			"next"
		],
		[
			"next",
			"next",
			"NEXT"
		]
	]
};
const areaType = helper.createRootMemo(() => Reflect.has(areaArrayMap, store.option.clickPageTurn.area) ? store.option.clickPageTurn.area : "left_right");
const dir = helper.createRootMemo(() => {
	if (!store.option.clickPageTurn.reverse) return store.option.dir;
	return store.option.dir === "rtl" ? "ltr" : "rtl";
});
const TouchArea = () => (() => {
	var _el$ = _tmpl$$34();
	var _ref$ = bindRef("touchArea");
	typeof _ref$ === "function" && solid_js_web.use(_ref$, _el$);
	solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.For, {
		get each() {
			return areaArrayMap[areaType()];
		},
		children: (rows) => solid_js_web.createComponent(solid_js.For, {
			each: rows,
			children: (area) => (() => {
				var _el$2 = _tmpl$2$7();
				solid_js_web.setAttribute(_el$2, "data-area", area);
				solid_js_web.effect(() => solid_js_web.className(_el$2, classes$2.touchArea));
				return _el$2;
			})()
		})
	}));
	solid_js_web.effect((_p$) => {
		var _v$ = classes$2.touchAreaRoot, _v$2 = dir(), _v$3 = helper.boolDataVal(store.show.touchArea), _v$4 = areaType(), _v$5 = helper.boolDataVal(store.option.clickPageTurn.enabled), _v$6 = helper.boolDataVal(store.option.clickPageTurn.shrinkMenu);
		_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
		_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "dir", _p$.t = _v$2);
		_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-show", _p$.a = _v$3);
		_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-area", _p$.o = _v$4);
		_v$5 !== _p$.i && solid_js_web.setAttribute(_el$, "data-turn-page", _p$.i = _v$5);
		_v$6 !== _p$.n && solid_js_web.setAttribute(_el$, "data-shrink-menu", _p$.n = _v$6);
		return _p$;
	}, {
		e: void 0,
		t: void 0,
		a: void 0,
		o: void 0,
		i: void 0,
		n: void 0
	});
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/EndPage.tsx
var _tmpl$$33 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
var _tmpl$2$6 = /*#__PURE__*/ solid_js_web.template(\`<div role=button tabindex=-1><div><p></p><button type=button></button><button type=button data-is-end></button><button type=button>\`);
var _tmpl$3$2 = /*#__PURE__*/ solid_js_web.template(\`<p>\`);
let delayTypeTimer = 0;
const EndPage = () => {
	const handleClick = (e) => {
		e.stopPropagation();
		if (e.target?.nodeName !== "BUTTON") setState("show", "endPage", void 0);
		focus();
	};
	let ref;
	const [isDrag, setIsDrag] = solid_js.createSignal(false);
	const [dragY, setDragY] = solid_js.createSignal(0);
	const handleDrag = ({ type, xy: [, y], initial: [, iy], startTime }) => {
		switch (type) {
			case "down": return setIsDrag(true);
			case "move": return setDragY(y - iy);
		}
		const pageDir = getTurnPageDir(-dragY(), store.rootSize.height / 2, startTime);
		if (pageDir) handleEndTurnPage(pageDir);
		setDragY(0);
		setIsDrag(false);
	};
	solid_js.onMount(() => {
		helper.useDrag({
			ref,
			handleDrag,
			skip: (e) => e.target.matches(\`.\${classes$2.comments}, .\${classes$2.comments} *\`)
		});
	});
	const [delayType, setDelayType] = solid_js.createSignal();
	solid_js.createEffect(() => {
		if (store.show.endPage) {
			window.clearTimeout(delayTypeTimer);
			setDelayType(store.show.endPage);
		} else delayTypeTimer = window.setTimeout(() => setDelayType(store.show.endPage), 500);
	});
	const tip = solid_js.createMemo(() => {
		if (store.option.scroolEnd === "none") return "";
		switch (delayType()) {
			case "start":
				if (!store.prop.onPrev || store.option.scroolEnd !== "auto") break;
				return helper.t("end_page.tip.start_jump");
			case "end":
				if (store.prop.onNext && store.option.scroolEnd === "auto") return helper.t("end_page.tip.end_jump");
				if (store.prop.onExit) return helper.t("end_page.tip.exit");
		}
		return "";
	});
	return (() => {
		var _el$ = _tmpl$2$6(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.nextSibling, _el$6 = _el$5.nextSibling;
		solid_js_web.addEventListener(_el$, "click", handleClick);
		var _ref$ = ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : ref = _el$;
		solid_js_web.insert(_el$3, tip);
		solid_js_web.addEventListener(_el$4, "click", () => store.prop.onPrev?.());
		var _ref$2 = bindRef("prev");
		typeof _ref$2 === "function" && solid_js_web.use(_ref$2, _el$4);
		solid_js_web.insert(_el$4, () => helper.t("end_page.prev_button"));
		solid_js_web.addEventListener(_el$5, "click", () => store.prop.onExit?.(store.show.endPage === "end"));
		var _ref$3 = bindRef("exit");
		typeof _ref$3 === "function" && solid_js_web.use(_ref$3, _el$5);
		solid_js_web.insert(_el$5, () => helper.t("other.exit"));
		solid_js_web.addEventListener(_el$6, "click", () => store.prop.onNext?.());
		var _ref$4 = bindRef("next");
		typeof _ref$4 === "function" && solid_js_web.use(_ref$4, _el$6);
		solid_js_web.insert(_el$6, () => helper.t("end_page.next_button"));
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return solid_js_web.memo(() => !!(store.option.showComment && delayType() === "end"))() && store.commentList?.length;
			},
			get children() {
				var _el$7 = _tmpl$$33();
				solid_js_web.addEventListener(_el$7, "wheel", stopPropagation);
				solid_js_web.insert(_el$7, solid_js_web.createComponent(solid_js.For, {
					get each() {
						return store.commentList;
					},
					children: (comment) => (() => {
						var _el$8 = _tmpl$3$2();
						solid_js_web.insert(_el$8, comment);
						return _el$8;
					})()
				}));
				solid_js_web.effect(() => solid_js_web.className(_el$7, \`\${classes$2.comments} \${classes$2.beautifyScrollbar}\`));
				return _el$7;
			}
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$2.endPage, _v$2 = store.show.endPage, _v$3 = delayType(), _v$4 = helper.boolDataVal(isDrag()), _v$5 = dir() === "rtl" ? "row-reverse" : void 0, _v$6 = classes$2.endPageBody, _v$7 = \`\${dragY()}px\`, _v$8 = classes$2.tip, _v$9 = { [classes$2.invisible]: !store.prop.onPrev }, _v$0 = store.show.endPage ? 0 : -1, _v$1 = store.show.endPage ? 0 : -1, _v$10 = { [classes$2.invisible]: !store.prop.onNext }, _v$11 = store.show.endPage ? 0 : -1;
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-type", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-drag", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setStyleProperty(_el$, "flex-direction", _p$.i = _v$5);
			_v$6 !== _p$.n && solid_js_web.className(_el$2, _p$.n = _v$6);
			_v$7 !== _p$.s && solid_js_web.setStyleProperty(_el$2, "--drag-y", _p$.s = _v$7);
			_v$8 !== _p$.h && solid_js_web.className(_el$3, _p$.h = _v$8);
			_p$.r = solid_js_web.classList(_el$4, _v$9, _p$.r);
			_v$0 !== _p$.d && solid_js_web.setAttribute(_el$4, "tabindex", _p$.d = _v$0);
			_v$1 !== _p$.l && solid_js_web.setAttribute(_el$5, "tabindex", _p$.l = _v$1);
			_p$.u = solid_js_web.classList(_el$6, _v$10, _p$.u);
			_v$11 !== _p$.c && solid_js_web.setAttribute(_el$6, "tabindex", _p$.c = _v$11);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0,
			r: void 0,
			d: void 0,
			l: void 0,
			u: void 0,
			c: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/hooks/useHover.ts
const useHover = (ref) => {
	const [isHover, setIsHover] = solid_js.createSignal(false);
	const on = useEventListener(ref);
	on("mouseenter", () => setIsHover(true));
	on("mouseleave", (e) => {
		const el = ref();
		if (!el) return;
		const rect = el.getBoundingClientRect();
		if (!(helper.inRange(rect.left, e.clientX, rect.right) && helper.inRange(rect.top, e.clientY, rect.bottom))) setIsHover(false);
	});
	return isHover;
};
//#endregion
//#region src/components/Manga/components/ScrollbarPageStatus.tsx
var _tmpl$$32 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
const getScrollbarPage = (img, i, double = false) => {
	let num;
	if (store.option.scrollMode.enabled) num = getImg(i).size.height;
	else num = double ? 2 : 1;
	let upscale;
	if (isUpscale() && img.upscaleUrl !== void 0) upscale = img.upscaleUrl === "" ? "loading" : true;
	return {
		num,
		loadType: img.loadType,
		translationType: img.translationType,
		upscale
	};
};
const ScrollbarPage = (props) => (() => {
	var _el$ = _tmpl$$32();
	solid_js_web.effect((_p$) => {
		var _v$ = classes$2.scrollbarPage, _v$2 = \`\${props.num / scrollLength() * 100}%\`, _v$3 = props.loadType, _v$4 = props.translationType, _v$5 = props.upscale;
		_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
		_v$2 !== _p$.t && solid_js_web.setStyleProperty(_el$, "flex-basis", _p$.t = _v$2);
		_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-type", _p$.a = _v$3);
		_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-translation-type", _p$.o = _v$4);
		_v$5 !== _p$.i && solid_js_web.setAttribute(_el$, "data-upscale", _p$.i = _v$5);
		return _p$;
	}, {
		e: void 0,
		t: void 0,
		a: void 0,
		o: void 0,
		i: void 0
	});
	return _el$;
})();
const isSameItem = (a, b) => a.loadType === b.loadType && a.translationType === b.translationType && a.upscale === b.upscale;
/** \u663E\u793A\u5BF9\u5E94\u56FE\u7247\u52A0\u8F7D\u60C5\u51B5\u7684\u5143\u7D20 */
const ScrollbarPageStatus = () => {
	const scrollbarPageList = helper.createThrottleMemo(() => {
		if (store.pageList.length === 0) return [];
		const list = [];
		let item;
		const handleImg = (i, double = false) => {
			const img = getImg(i);
			const imgItem = getScrollbarPage(img, i, double);
			if (!item) {
				item = imgItem;
				return;
			}
			if (isSameItem(item, imgItem)) {
				if (store.option.scrollMode.enabled) item.num += img.size.height;
				else item.num += double ? 2 : 1;
			} else {
				list.push(item);
				item = getScrollbarPage(img, i, double);
			}
		};
		for (const [a, b] of store.pageList) if (b === void 0) handleImg(a, !isOnePageMode());
		else if (a === -1) {
			handleImg(b);
			handleImg(b);
		} else if (b === -1) {
			handleImg(a);
			handleImg(a);
		} else {
			handleImg(a);
			handleImg(b);
		}
		if (item) list.push(item);
		return list;
	}, 200);
	return solid_js_web.createComponent(solid_js.For, {
		get each() {
			return scrollbarPageList();
		},
		children: (page) => solid_js_web.createComponent(ScrollbarPage, page)
	});
};
//#endregion
//#region src/components/Manga/components/Scrollbar.tsx
var _tmpl$$31 = /*#__PURE__*/ solid_js_web.template(\`<div role=scrollbar tabindex=-1>\`);
var _tmpl$2$5 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
/** \u6EDA\u52A8\u6761 */
const Scrollbar = () => {
	solid_js.onMount(() => {
		helper.useDrag({
			ref: refs.scrollbar,
			handleDrag: handleScrollbarSlider,
			easyMode: () => isScrollMode() && store.option.scrollbar.easyScroll,
			setCapture: true
		});
		watchDomSize("scrollbarSize", refs.scrollbar);
	});
	const [penetrate, setPenetrate] = solid_js.createSignal(false);
	let penetrateFrame = 0;
	const handleWheel = () => {
		setPenetrate(true);
		cancelAnimationFrame(penetrateFrame);
		penetrateFrame = requestAnimationFrame(() => setPenetrate(false));
	};
	solid_js.onCleanup(() => cancelAnimationFrame(penetrateFrame));
	const isScrollbarHover = useHover(() => refs.scrollbar);
	solid_js.createEffect(() => setState("isScrollbarHover", isScrollbarHover()));
	/** \u6EDA\u52A8\u6761\u63D0\u793A\u6587\u672C */
	const tipText = helper.createThrottleMemo(() => {
		if (store.showRange[0] === store.showRange[1]) return getPageTip(store.showRange[0]);
		if (isDoubleMode()) {
			const rows = [];
			let pageIndex = 0;
			for (const row of scrollPageList()) {
				const start = pageIndex;
				const end = pageIndex + row.length - 1;
				pageIndex += row.length;
				if (store.showRange[1] < start || store.showRange[0] > end) continue;
				const rowTipList = row.map((_, i) => getPageTip(start + i));
				if (store.option.dir === "rtl") rowTipList.reverse();
				rows.push(rowTipList.join("   "));
			}
			return rows.join("\\n") || getPageTip(store.showRange[0]);
		}
		/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6EDA\u52A8\u6761\u63D0\u793A\u6587\u672C */
		if (isAbreastMode()) {
			const columns = abreastArea().columns.slice(abreastShowColumn().start, abreastShowColumn().end + 1).map((column) => column.map(getPageTip));
			if (store.option.dir !== "rtl") columns.reverse();
			return columns.map((column) => column.join(" ")).join("\\n");
		}
		const tipList = [];
		for (let [i] = store.showRange; i <= store.showRange[1]; i++) tipList.push(getPageTip(i));
		if (isOnePageMode()) return tipList.join("\\n");
		if (tipList.length === 1) return tipList[0];
		if (store.option.dir === "rtl") tipList.reverse();
		return tipList.join("   ");
	});
	css$1(\`.\${classes$2.scrollbar}\`, {
		"pointer-events": () => penetrate() || store.isDragMode ? "none" : "auto",
		"--scroll-length": () => \`\${scrollDomLength()}px\`,
		"--slider-midpoint": () => \`\${sliderMidpoint()}px\`,
		"--slider-height": () => \`\${sliderHeight() * scrollDomLength()}px\`,
		"--slider-top": sliderTop
	});
	const ScrollbarBase = (props) => (() => {
		var _el$ = _tmpl$$31();
		_el$.addEventListener("wheel", handleWheel);
		var _ref$ = props.ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : props.ref = _el$;
		solid_js_web.insert(_el$, () => props.children);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$2.scrollbar, _v$2 = classes$2.mangaFlow, _v$3 = store.activePageIndex || -1, _v$4 = helper.boolDataVal(store.option.scrollbar.autoHidden), _v$5 = helper.boolDataVal(store.show.scrollbar || penetrate() || store.isScrollbarHover), _v$6 = store.option.dir, _v$7 = scrollPosition(), _v$8 = helper.boolDataVal(isAbreastMode()), _v$9 = helper.boolDataVal(isDrag()), _v$0 = props.style;
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "aria-controls", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "aria-valuenow", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-auto-hidden", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setAttribute(_el$, "data-force-show", _p$.i = _v$5);
			_v$6 !== _p$.n && solid_js_web.setAttribute(_el$, "data-dir", _p$.n = _v$6);
			_v$7 !== _p$.s && solid_js_web.setAttribute(_el$, "data-position", _p$.s = _v$7);
			_v$8 !== _p$.h && solid_js_web.setAttribute(_el$, "data-is-abreast-mode", _p$.h = _v$8);
			_v$9 !== _p$.r && solid_js_web.setAttribute(_el$, "data-drag", _p$.r = _v$9);
			_p$.d = solid_js_web.style(_el$, _v$0, _p$.d);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0,
			r: void 0,
			d: void 0
		});
		return _el$;
	})();
	return [solid_js_web.createComponent(ScrollbarBase, {
		ref(r$) {
			var _ref$2 = bindRef("scrollbar");
			typeof _ref$2 === "function" && _ref$2(r$);
		},
		get children() {
			return [(() => {
				var _el$2 = _tmpl$2$5();
				solid_js_web.insert(_el$2, tipText);
				solid_js_web.effect(() => solid_js_web.className(_el$2, classes$2.scrollbarPoper));
				return _el$2;
			})(), solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return solid_js_web.memo(() => !!store.option.scrollbar.showImgStatus)() && scrollPosition() !== "hidden";
				},
				get children() {
					return solid_js_web.createComponent(ScrollbarPageStatus, {});
				}
			})];
		}
	}), solid_js_web.createComponent(ScrollbarBase, {
		style: {
			"mix-blend-mode": "difference",
			"pointer-events": "none"
		},
		get children() {
			var _el$3 = _tmpl$2$5();
			solid_js_web.effect(() => solid_js_web.className(_el$3, classes$2.scrollbarSlider));
			return _el$3;
		}
	})];
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/close.svg
var _tmpl$$30 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4">\`);
var close_default = (props = {}) => (() => {
	var _el$ = _tmpl$$30();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/fullscreen.svg
var _tmpl$$29 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1m0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1">\`);
var fullscreen_default = (props = {}) => (() => {
	var _el$ = _tmpl$$29();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/fullscreen_exit.svg
var _tmpl$$28 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1m2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z">\`);
var fullscreen_exit_default = (props = {}) => (() => {
	var _el$ = _tmpl$$28();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/looks_one.svg
var _tmpl$$27 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 14c-.55 0-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1">\`);
var looks_one_default = (props = {}) => (() => {
	var _el$ = _tmpl$$27();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/looks_two.svg
var _tmpl$$26 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4 8c0 1.1-.9 2-2 2h-2v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-1.1.9-2 2-2h2V9h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c1.1 0 2 .9 2 2z">\`);
var looks_two_default = (props = {}) => (() => {
	var _el$ = _tmpl$$26();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/low_priority.svg
var _tmpl$$25 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15 5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m-5.15 3.15 1.79-1.79c.2-.2.2-.51 0-.71l-1.79-1.79a.495.495 0 0 0-.85.35v3.59c0 .44.54.66.85.35M9 16h-.3c-2.35 0-4.45-1.71-4.68-4.05A4.51 4.51 0 0 1 8.5 7H11c.55 0 1-.45 1-1s-.45-1-1-1H8.5c-3.86 0-6.96 3.4-6.44 7.36C2.48 15.64 5.43 18 8.73 18H9">\`);
var low_priority_default = (props = {}) => (() => {
	var _el$ = _tmpl$$25();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/queue.svg
var _tmpl$$24 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1">\`);
var queue_default = (props = {}) => (() => {
	var _el$ = _tmpl$$24();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/settings.svg
var _tmpl$$23 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5">\`);
var settings_default = (props = {}) => (() => {
	var _el$ = _tmpl$$23();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/translate.svg
var _tmpl$$22 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03A17.5 17.5 0 0 0 14.07 6h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18A15.7 15.7 0 0 1 9 11.35c-.81-.89-1.49-1.86-2.06-2.88A.89.89 0 0 0 6.16 8c-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87a.99.99 0 0 0 0 1.42c.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35M17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94m-1.62 7 1.62-4.33L19.12 17z">\`);
var translate_default = (props = {}) => (() => {
	var _el$ = _tmpl$$22();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/view_day.svg
var _tmpl$$21 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1M20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1M2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1">\`);
var view_day_default = (props = {}) => (() => {
	var _el$ = _tmpl$$21();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/zoom_in.svg
var _tmpl$$20 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.78 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m0-7c-.28 0-.5.22-.5.5V9H7.5c-.28 0-.5.22-.5.5s.22.5.5.5H9v1.5c0 .28.22.5.5.5s.5-.22.5-.5V10h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7.5c0-.28-.22-.5-.5-.5">\`);
var zoom_in_default = (props = {}) => (() => {
	var _el$ = _tmpl$$20();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/zoom_out.svg
var _tmpl$$19 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m-2-5h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5">\`);
var zoom_out_default = (props = {}) => (() => {
	var _el$ = _tmpl$$19();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/IconButton/index.module.css
const classes$1 = {
	"iconButtonItem": "iconButtonItem___vTPHz",
	"iconButton": "iconButton___dhWw3",
	"enabled": "enabled___eXH34",
	"disable": "disable___7C-Rj",
	"iconButtonPopper": "iconButtonPopper___dVIu-",
	"hidden": "hidden___v7N-q"
};
//#endregion
//#region src/components/IconButton/index.module.css?inline
var index_module_default$1 = ".iconButtonItem___vTPHz {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.iconButton___dhWw3 {\\n  cursor: pointer;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: 1.5em;\\n  height: 1.5em;\\n  margin: 0.1em;\\n  padding: 0;\\n  border-style: none;\\n  border-radius: 9999px;\\n\\n  font-size: 1.5em;\\n  color: var(--text, white);\\n\\n  background-color: transparent;\\n  outline: none;\\n}\\n\\n.iconButton___dhWw3:focus,.iconButton___dhWw3:hover {\\n    background-color: var(--hover-bg-color, #fff3);\\n  }\\n\\n.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj) {\\n    color: var(--text-bg, #121212);\\n    background-color: var(--text, white);\\n  }\\n\\n.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj):focus,.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj):hover {\\n      background-color: var(--hover-bg-color-enable, #fffa);\\n    }\\n\\n.iconButton___dhWw3.disable___7C-Rj {\\n    cursor: not-allowed;\\n    opacity: 0.5;\\n    background-color: unset;\\n  }\\n\\n.iconButton___dhWw3 > svg {\\n    width: 1em;\\n  }\\n\\n/* \u9ED8\u8BA4\u60AC\u6D6E\u6846\u6837\u5F0F */\\n.iconButtonPopper___dVIu- {\\n  pointer-events: none;\\n  -webkit-user-select: none;\\n          user-select: none;\\n\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n\\n  display: flex;\\n  align-items: center;\\n\\n  padding: 0.4em 0.5em;\\n  border-radius: 0.3em;\\n\\n  font-size: 0.8em;\\n  color: white;\\n  white-space: nowrap;\\n\\n  opacity: 0;\\n  background-color: #303030;\\n}\\n.iconButtonPopper___dVIu-[data-placement='right'] {\\n    left: calc(100% + 1.5em);\\n  }\\n.iconButtonPopper___dVIu-[data-placement='right']::before {\\n      right: calc(100% + 0.5em);\\n      border-right-color: var(--switch-bg, #6e6e6e);\\n      border-right-width: 0.5em;\\n    }\\n.iconButtonPopper___dVIu-[data-placement='left'] {\\n    right: calc(100% + 1.5em);\\n  }\\n.iconButtonPopper___dVIu-[data-placement='left']::before {\\n      left: calc(100% + 0.5em);\\n      border-left-color: var(--switch-bg, #6e6e6e);\\n      border-left-width: 0.5em;\\n    }\\n\\n/* \u5DE5\u5177\u680F\u6309\u94AE\u7684\u60AC\u6D6E\u6846\u7684\u7BAD\u5934 */\\n.iconButtonPopper___dVIu-::before {\\n  pointer-events: none;\\n  content: '';\\n\\n  position: absolute;\\n\\n  border-color: transparent;\\n  border-style: solid;\\n  border-width: 0.4em;\\n\\n  background-color: transparent;\\n\\n  transition: opacity 150ms;\\n}\\n\\n/* \u63A7\u5236\u60AC\u6D6E\u6846\u7684\u663E\u793A */\\n.iconButtonItem___vTPHz:is(:hover, :focus, [data-show='true']) .iconButtonPopper___dVIu- {\\n  opacity: 1;\\n}\\n\\n.hidden___v7N-q {\\n  display: none;\\n}\\n";
//#endregion
//#region src/components/IconButton/index.tsx
var _tmpl$$18 = /*#__PURE__*/ solid_js_web.template(\`<div><button type=button tabindex=0>\`);
var _tmpl$2$4 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
/** \u56FE\u6807\u6309\u94AE */
const IconButton$1 = (_props) => {
	const props = solid_js.mergeProps({ placement: "right" }, _props);
	let buttonRef;
	const handleClick = (e) => {
		if (props.disable) return;
		props.onClick?.(e);
		buttonRef?.blur();
	};
	return (() => {
		var _el$ = _tmpl$$18(), _el$2 = _el$.firstChild;
		solid_js_web.use((ref) => helper.css(index_module_default$1, ref), _el$);
		solid_js_web.addEventListener(_el$2, "click", handleClick);
		var _ref$ = buttonRef;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$2) : buttonRef = _el$2;
		solid_js_web.insert(_el$2, () => props.children);
		solid_js_web.insert(_el$, (() => {
			var _c$ = solid_js_web.memo(() => !!(props.popper || props.tip));
			return () => _c$() ? (() => {
				var _el$3 = _tmpl$2$4();
				solid_js_web.insert(_el$3, () => props.popper || props.tip);
				solid_js_web.effect((_p$) => {
					var _v$7 = [classes$1.iconButtonPopper, props.popperClassName].join(" "), _v$8 = props.placement;
					_v$7 !== _p$.e && solid_js_web.className(_el$3, _p$.e = _v$7);
					_v$8 !== _p$.t && solid_js_web.setAttribute(_el$3, "data-placement", _p$.t = _v$8);
					return _p$;
				}, {
					e: void 0,
					t: void 0
				});
				return _el$3;
			})() : null;
		})(), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$1.iconButtonItem, _v$2 = props.showTip, _v$3 = props.tip, _v$4 = classes$1.iconButton, _v$5 = props.style, _v$6 = {
				[classes$1.hidden]: props.hidden,
				[classes$1.enabled]: props.enabled,
				[classes$1.disable]: props.disable
			};
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$2, "aria-label", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.className(_el$2, _p$.o = _v$4);
			_p$.i = solid_js_web.style(_el$2, _v$5, _p$.i);
			_p$.n = solid_js_web.classList(_el$2, _v$6, _p$.n);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/play_arrow.svg
var _tmpl$$17 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82">\`);
var play_arrow_default = (props = {}) => (() => {
	var _el$ = _tmpl$$17();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/stop.svg
var _tmpl$$16 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2">\`);
var stop_default = (props = {}) => (() => {
	var _el$ = _tmpl$$16();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/autoScroll.tsx
/** \u81EA\u52A8\u6EDA\u52A8\u6700\u4F4E\u901F\u5EA6\uFF08px/ms\uFF09\uFF0C\u907F\u514D distance \u4E3A 0 \u6216\u5F02\u5E38\u914D\u7F6E\u5BFC\u81F4\u5361\u4F4F */
const MIN_AUTO_SCROLL_SPEED = 10 / 1e3;
const autoScrollSpeed = () => {
	const { interval, distance } = store.option.autoScroll;
	if (interval <= 0 || distance <= 0) return MIN_AUTO_SCROLL_SPEED;
	return Math.max(MIN_AUTO_SCROLL_SPEED, distance / interval);
};
const autoScroll = new class extends helper.AnimationFrame {
	/** \u4E0A\u6B21\u6EDA\u52A8\u7684\u65F6\u95F4 */
	lastTime = 0;
	scrollEnd = () => {
		this.stop();
		if (!store.prop.onExit) return;
		setState("show", "endPage", "end");
		if (store.option.autoScroll.triggerEnd) setTimeout(handleEndTurnPage, 500, "next");
	};
	scroll = () => {
		if (isBottom()) return this.scrollEnd();
		if (isScrollMode()) return scrollBy(Math.max(1, store.option.autoScroll.distance), true);
		return turnPageAnimation("next");
	};
	frame = (timestamp) => {
		const elapsed = timestamp - this.lastTime;
		let progress;
		if (elapsed >= store.option.autoScroll.interval) {
			this.lastTime = timestamp;
			this.scroll();
			progress = 1;
		}
		if (!store.autoScroll.play) return;
		progress ||= elapsed / store.option.autoScroll.interval;
		setState("autoScroll", "progress", progress);
		this.call(true);
	};
	start = () => {
		this.lastTime = 0;
		if (!store.option.autoScroll.continuous || !isScrollMode()) return this.call();
		constantScroll.start(autoScrollSpeed(), (delta) => {
			if (isBottom()) {
				this.scrollEnd();
				return false;
			}
			const { distance } = store.option.autoScroll;
			if (distance > 0) setState("autoScroll", "progress", (store.autoScroll.progress + delta / distance) % 1);
		});
	};
	stop = () => {
		this.cancel();
		constantScroll.cancel();
		setState("autoScroll", "play", false);
	};
}();
helper.createEffectOn(() => [
	...Object.values(store.option.autoScroll),
	store.autoScroll.play,
	isScrollMode()
], () => {
	autoScroll.cancel();
	constantScroll.cancel();
	if (!store.option.autoScroll.enabled || !store.autoScroll.play) return;
	autoScroll.start();
});
helper.createEffectOn(() => store.show.toolbar, (show) => show && autoScroll.stop());
const AutoScrollButton = () => {
	const background = solid_js.createMemo(() => {
		if (!store.autoScroll.play) return;
		const deg = store.autoScroll.progress * 360 % 360;
		return \`conic-gradient(var(--text-secondary) 0deg, var(--text-secondary) \${deg}deg, var(--text) \${deg}deg)\`;
	});
	return solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return helper.t("button.auto_scroll");
		},
		get enabled() {
			return store.autoScroll.play;
		},
		get style() {
			return { background: background() };
		},
		onClick: switchAutoScroll,
		get children() {
			return solid_js_web.memo(() => !!store.autoScroll.play)() ? solid_js_web.createComponent(stop_default, {}) : solid_js_web.createComponent(play_arrow_default, {});
		}
	});
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/file_download.svg
var _tmpl$$15 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1">\`);
var file_download_default = (props = {}) => (() => {
	var _el$ = _tmpl$$15();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/DownloadButton.tsx
const getExtName = (mime) => /.+\\/(?<ext>[^;]+)/u.exec(mime)?.groups?.ext ?? "jpg";
/** \u4E0B\u8F7D\u6309\u94AE */
const DownloadButton = () => {
	const { store: state, setState } = helper.useStore({
		length: 0,
		/** undefined \u8868\u793A\u672A\u5F00\u59CB\u4E0B\u8F7D\uFF0C\u7B49\u4E8E length \u8868\u793A\u6B63\u5728\u6253\u5305\uFF0C-1 \u8868\u793A\u4E0B\u8F7D\u5B8C\u6210 */
		completedNum: void 0,
		errorNum: 0,
		rawTitle: document.title,
		showRawTitle: true
	});
	const progress = new helper.FaviconProgress();
	const handleDownload = async () => {
		const fileData = {};
		setState({
			errorNum: 0,
			length: imgList().length
		});
		if (state.showRawTitle) setState("rawTitle", document.title);
		const imgIndexNum = \`\${state.length}\`.length;
		for (let i = 0; i < state.length; i += 1) {
			setState("completedNum", i);
			const img = imgList()[i];
			if (store.option.translation.onlyDownloadTranslated && img.translationType !== "show") continue;
			let url;
			if (img.translationType === "show") url = img.translationUrl;
			else if (img.upscaleUrl && isUpscale()) url = img.upscaleUrl;
			else url = img.src;
			if (!url?.trim()) continue;
			let data;
			let fileName;
			const index = \`\${i}\`.padStart(imgIndexNum, "0");
			try {
				data = await downloadImg(url, void 0, 3);
				fileName = img.name || \`\${index}.\${getExtName(data.type)}\`;
			} catch {
				fileName = \`\${index} - \${helper.t("alert.download_failed")}\`;
				setState("errorNum", (num) => num + 1);
			}
			let name = fileName;
			for (let duplicate = 1; fileData[name]; duplicate += 1) name = \`\${fileName} (\${duplicate})\`;
			fileData[name] = new Uint8Array(await data?.arrayBuffer() ?? []);
		}
		if (Object.keys(fileData).length === 0) {
			components_Toast.toast.warn(helper.t("alert.no_img_download"));
			setState("completedNum", void 0);
			return;
		}
		setState("completedNum", state.length);
		const zipped = fflate.zipSync(fileData, {
			level: 0,
			comment: location.href
		});
		helper.saveAs(new Blob([zipped]), \`\${store.title || state.rawTitle}.zip\`);
		setState("completedNum", -1);
		components_Toast.toast(state.errorNum > 0 ? helper.t("button.download_completed_error", { errorNum: state.errorNum }) : helper.t("button.download_completed"), {
			type: state.errorNum > 0 ? "warn" : "success",
			onDismiss() {
				document.title = state.rawTitle;
				setState("showRawTitle", true);
				progress.recover();
			}
		});
	};
	const tip = solid_js.createMemo(() => {
		switch (state.completedNum) {
			case void 0: return helper.t("other.download");
			case state.length: return helper.t("button.packaging");
			case -1: return helper.t("button.download_completed");
			default: return \`\${helper.t("button.downloading")} - \${state.completedNum}/\${state.length}\`;
		}
	});
	helper.createEffectOn(() => state.completedNum, (num) => {
		let showTip = "";
		switch (num) {
			case void 0: return;
			case state.length:
				showTip = "\u{1F4E6}";
				break;
			case -1:
				showTip = state.errorNum > 0 ? \`\u2757[\${state.errorNum}]\` : "\u2705";
				break;
			default: showTip = \`\${num}/\${state.length}\`;
		}
		document.title = \`\${showTip} - \${state.rawTitle}\`;
		setState("showRawTitle", false);
	}, { defer: true });
	helper.createEffectOn(() => state.completedNum, (num) => num && num > 0 && progress.update(num / state.length), { defer: true });
	return solid_js_web.createComponent(components_IconButton.IconButton, {
		get tip() {
			return tip();
		},
		onClick: handleDownload,
		get enabled() {
			return state.completedNum !== void 0;
		},
		get children() {
			return solid_js_web.createComponent(file_download_default, {});
		}
	});
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/format_textdirection_l_to_r.svg
var _tmpl$$14 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M9 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1H9.17C7.08 2 5.22 3.53 5.02 5.61A4 4 0 0 0 9 10m11.65 7.65-2.79-2.79a.501.501 0 0 0-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h11v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7">\`);
var format_textdirection_l_to_r_default = (props = {}) => (() => {
	var _el$ = _tmpl$$14();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/format_textdirection_r_to_l.svg
var _tmpl$$13 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M10 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-6.83C8.08 2 6.22 3.53 6.02 5.61A4 4 0 0 0 10 10m-2 7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1s-.45-1-1-1z">\`);
var format_textdirection_r_to_l_default = (props = {}) => (() => {
	var _el$ = _tmpl$$13();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/add.svg
var _tmpl$$12 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1">\`);
var add_default = (props = {}) => (() => {
	var _el$ = _tmpl$$12();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/refresh.svg
var _tmpl$$11 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71z">\`);
var refresh_default = (props = {}) => (() => {
	var _el$ = _tmpl$$11();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Manga/components/SettingHotkeys.tsx
var _tmpl$$10 = /*#__PURE__*/ solid_js_web.template(\`<div tabindex=0>\`);
var _tmpl$2$3 = /*#__PURE__*/ solid_js_web.template(\`<div><div><p></p><span style=flex-grow:1></span><div></div><div>\`);
var _tmpl$3$1 = /*#__PURE__*/ solid_js_web.template(\`<div><select style=height:100%><option value disabled hidden selected> \u2026\`);
var _tmpl$4 = /*#__PURE__*/ solid_js_web.template(\`<option>\`);
const setHotkeys = (...args) => {
	setState(...["hotkeys", ...args]);
	store.prop.onHotkeysChange?.(Object.fromEntries(Object.entries(store.hotkeys).filter(([name, keys]) => !helper.isEqual(keys.filter(Boolean), defaultHotkeys()[name]))));
};
const delHotkeys = (code) => {
	for (const [name, keys] of Object.entries(store.hotkeys)) {
		const i = keys.indexOf(code);
		if (i === -1) continue;
		const newKeys = [...store.hotkeys[name]];
		newKeys.splice(i, 1);
		setHotkeys(name, newKeys);
	}
};
const getHotkeyName = (code) => helper.t(\`hotkeys.\${code}\`) || helper.t(\`button.\${code}\`) || helper.t(\`setting.translation.\${code}\`) || helper.t(\`other.\${code}\`) || code;
const KeyItem = (props) => {
	const code = () => store.hotkeys[props.operateName][props.i];
	const del = () => delHotkeys(code());
	const handleKeyDown = (e) => {
		e.stopPropagation();
		e.preventDefault();
		switch (e.key) {
			case "Tab":
			case "Enter":
			case "Escape":
				focus();
				return;
			case "Backspace":
				setHotkeys(props.operateName, props.i, "");
				return;
		}
		const newCode = helper.getKeyboardCode(e);
		if (Reflect.has(hotkeysMap(), newCode)) components_Toast.toast.error(helper.t("hotkeys.repeat_tip", { hotkey: getHotkeyName(hotkeysMap()[newCode]) }));
		else setHotkeys(props.operateName, props.i, newCode);
	};
	return (() => {
		var _el$ = _tmpl$$10();
		_el$.addEventListener("blur", () => code() || del());
		solid_js_web.use((ref) => code() || setTimeout(() => ref.focus()), _el$);
		solid_js_web.addEventListener(_el$, "keydown", handleKeyDown);
		solid_js_web.insert(_el$, () => helper.keyboardCodeToText(code()), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(close_default, { "on:click": del }), null);
		solid_js_web.effect(() => solid_js_web.className(_el$, classes$2.hotkeysItem));
		return _el$;
	})();
};
const SettingHotkeys = (props) => solid_js_web.createComponent(solid_js.For, {
	get each() {
		return props.keys;
	},
	children: (name) => (() => {
		var _el$2 = _tmpl$2$3(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$6 = _el$4.nextSibling.nextSibling, _el$7 = _el$6.nextSibling;
		solid_js_web.insert(_el$4, () => getHotkeyName(name));
		solid_js_web.addEventListener(_el$6, "click", () => setHotkeys(name, store.hotkeys[name].length, ""));
		solid_js_web.insert(_el$6, solid_js_web.createComponent(add_default, {}));
		solid_js_web.addEventListener(_el$7, "click", () => {
			const newKeys = defaultHotkeys()[name] ?? [];
			for (const code of defaultHotkeys()[name]) delHotkeys(code);
			setHotkeys(name, newKeys);
		});
		solid_js_web.insert(_el$7, solid_js_web.createComponent(refresh_default, {}));
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.Index, {
			get each() {
				return store.hotkeys[name];
			},
			children: (_, i) => solid_js_web.createComponent(KeyItem, {
				operateName: name,
				i
			})
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$2.hotkeys, _v$2 = classes$2.hotkeysHeader, _v$3 = helper.t("setting.hotkeys.add"), _v$4 = helper.t("setting.hotkeys.restore");
			_v$ !== _p$.e && solid_js_web.className(_el$2, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.className(_el$3, _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$6, "title", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$7, "title", _p$.o = _v$4);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0
		});
		return _el$2;
	})()
});
const OtherHotkeys = (props) => {
	let ref;
	const handleChange = (e) => {
		const name = e.target.value;
		setHotkeys(name, store.hotkeys[name].length, "");
		ref.value = "";
	};
	return (() => {
		var _el$8 = _tmpl$3$1(), _el$9 = _el$8.firstChild, _el$0 = _el$9.firstChild, _el$1 = _el$0.firstChild;
		_el$9.addEventListener("change", handleChange);
		var _ref$ = ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$9) : ref = _el$9;
		solid_js_web.insert(_el$0, () => helper.t("other.other"), _el$1);
		solid_js_web.insert(_el$9, solid_js_web.createComponent(solid_js.For, {
			get each() {
				return props.keys;
			},
			children: (name) => (() => {
				var _el$10 = _tmpl$4();
				_el$10.value = name;
				solid_js_web.insert(_el$10, () => getHotkeyName(name));
				return _el$10;
			})()
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$5 = classes$2.hotkeys, _v$6 = classes$2.hotkeysHeader;
			_v$5 !== _p$.e && solid_js_web.className(_el$8, _p$.e = _v$5);
			_v$6 !== _p$.t && solid_js_web.className(_el$9, _p$.t = _v$6);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$8;
	})();
};
const SettingHotkeysBlock = () => {
	const hotkeys = helper.createRootMemo(() => {
		const show = [];
		const other = [];
		for (const [name, keys] of Object.entries(store.hotkeys)) (keys.length > 0 ? show : other).push(name);
		return {
			show,
			other
		};
	});
	return [solid_js_web.createComponent(SettingHotkeys, { get keys() {
		return hotkeys().show;
	} }), solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return hotkeys().other.length;
		},
		get children() {
			return solid_js_web.createComponent(OtherHotkeys, { get keys() {
				return hotkeys().other;
			} });
		}
	})];
};
//#endregion
//#region src/components/Manga/components/SettingsItemButton.tsx
var _tmpl$$9 = /*#__PURE__*/ solid_js_web.template(\`<button type=button>\`);
/** \u6309\u94AE\u5F0F\u83DC\u5355\u9879 */
const SettingsItemButton = (props) => {
	const [, others] = solid_js.splitProps(props, ["children", "onClick"]);
	return solid_js_web.createComponent(SettingsItem, solid_js_web.mergeProps(others, { get children() {
		var _el$ = _tmpl$$9();
		solid_js_web.addEventListener(_el$, "click", props.onClick);
		solid_js_web.insert(_el$, () => props.children);
		solid_js_web.effect(() => solid_js_web.className(_el$, classes$2.SettingsItemIconButton));
		return _el$;
	} }));
};
//#endregion
//#region src/components/Manga/components/SettingsShowItem.tsx
var _tmpl$$8 = /*#__PURE__*/ solid_js_web.template(\`<div><div>\`);
/** \u5E26\u6709\u52A8\u753B\u8FC7\u6E21\u7684\u5207\u6362\u663E\u793A\u8BBE\u7F6E\u9879 */
const SettingsShowItem = (props) => (() => {
	var _el$ = _tmpl$$8(), _el$2 = _el$.firstChild;
	solid_js_web.insert(_el$2, () => props.children);
	solid_js_web.effect((_p$) => {
		var _v$ = classes$2.SettingsShowItem, _v$2 = props.when ? "1fr" : "0fr", _v$3 = classes$2.SettingsShowItemBody;
		_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
		_v$2 !== _p$.t && solid_js_web.setStyleProperty(_el$, "grid-template-rows", _p$.t = _v$2);
		_v$3 !== _p$.a && solid_js_web.className(_el$2, _p$.a = _v$3);
		return _p$;
	}, {
		e: void 0,
		t: void 0,
		a: void 0
	});
	return _el$;
})();
//#endregion
//#region src/components/RangeInput.tsx
var _tmpl$$7 = /*#__PURE__*/ solid_js_web.template(\`<textarea autocomplete=off rows=2>\`);
/** \u8303\u56F4\u8F93\u5165\u6846 */
const RangeInput = (props) => {
	let ref;
	/** \u5728\u4FDD\u6301\u5149\u6807\u4F4D\u7F6E\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\u4FEE\u6539\u6587\u672C */
	const editText = (text) => {
		const offset = ref.selectionStart;
		ref.value = text;
		if (offset) requestAnimationFrame(() => {
			ref.selectionStart = offset;
			ref.selectionEnd = offset;
		});
	};
	/** \u4FEE\u6539\u6587\u672C\u4E2D\u7684\u6570\u5B57 */
	const replaceTextNumer = (text, offset, fn) => {
		const isNumber = (num) => /\\d/u.test(text[num]);
		let start = offset;
		if (!isNumber(offset)) {
			if (isNumber(start - 1)) start--;
			else if (isNumber(start + 1)) start++;
			else return text;
		}
		let end = start;
		while (isNumber(start - 1)) start--;
		while (isNumber(end + 1)) end++;
		return text.slice(0, start) + fn(Number(text.slice(start, end + 1))) + text.slice(end + 1);
	};
	const handleKeyDown = (e) => {
		switch (e.key) {
			case "ArrowUp":
			case "ArrowDown": editText(replaceTextNumer(ref.value, ref.selectionStart, (num) => e.key === "ArrowUp" ? num + 1 : num - 1));
		}
	};
	return (() => {
		var _el$ = _tmpl$$7();
		_el$.addEventListener("blur", () => {
			try {
				props.onChange?.(ref.value);
			} finally {
				ref.value = props.value;
			}
		});
		solid_js_web.addEventListener(_el$, "keydown", handleKeyDown);
		var _ref$ = ref;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$) : ref = _el$;
		solid_js_web.effect((_p$) => {
			var _v$ = props.style, _v$2 = props.placeholder;
			_p$.e = solid_js_web.style(_el$, _v$, _p$.e);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "placeholder", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		solid_js_web.effect(() => _el$.value = props.value);
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/components/SettingTranslation.tsx
var _tmpl$$6 = /*#__PURE__*/ solid_js_web.template(\`<hr style="margin:1em 0">\`);
const bindOption$1 = (...args) => bindOption("translation", ...args);
const [rangeText, setRangeText] = solid_js.createSignal("");
helper.createEffectOn(translationImgs, (imgs) => setRangeText(helper.descRange(imgs, store.imgList.length)));
const TranslateRange = () => {
	helper.createEffectOn(rangeText, () => {
		const imgImgs = helper.extractRange(rangeText(), store.imgList.length);
		const openImgs = [...imgImgs].filter((i) => {
			switch (imgList()[i].translationType) {
				case "show":
				case "wait": return false;
				default: return true;
			}
		});
		if (openImgs.length > 0) setImgTranslationEnbale(openImgs, true);
		const closeImgs = /* @__PURE__ */ new Set();
		for (let i = 0; i < store.imgList.length; i++) if (!imgImgs.has(i)) closeImgs.add(i);
		if (closeImgs.size > 0) setImgTranslationEnbale(closeImgs, false);
		setRangeText(helper.descRange(imgImgs, store.imgList.length));
	});
	return [solid_js_web.createComponent(SettingsItem, { get name() {
		return helper.t("setting.translation.range");
	} }), solid_js_web.createComponent(RangeInput, {
		get ["class"]() {
			return classes$2.SettingsItem;
		},
		get placeholder() {
			return helper.t("other.page_range");
		},
		get value() {
			return rangeText();
		},
		onChange: setRangeText
	})];
};
const settingsMap = {
	"manga-image-translator": mitSettings,
	cotrans: cotransSettings
};
const SettingTranslation = () => [solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
	return helper.t("other.enabled");
} }, () => bindOption$1("enabled"))), solid_js_web.createComponent(solid_js.Show, {
	get when() {
		return store.option.translation.enabled;
	},
	get children() {
		return [
			solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
				get name() {
					return helper.t("setting.translation.provider");
				},
				options: [["manga-image-translator", "Manga Image Translator"], ["cotrans", "Cotrans"]]
			}, () => bindOption$1("provider"))),
			solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return allowBatchTranslation();
				},
				get children() {
					return [
						solid_js_web.createComponent(SettingsItemSwitch, {
							get name() {
								return helper.t("setting.translation.translate_all");
							},
							get value() {
								return isTranslatingAll();
							},
							onChange: translateAll
						}),
						solid_js_web.createComponent(SettingsItemSwitch, {
							get name() {
								return helper.t("setting.translation.translate_to_end");
							},
							get value() {
								return isTranslatingToEnd();
							},
							onChange: translateToEnd
						}),
						solid_js_web.createComponent(TranslateRange, {}),
						_tmpl$$6()
					];
				}
			}),
			solid_js_web.createComponent(solid_js_web.Dynamic, { get component() {
				return settingsMap[store.option.translation.provider];
			} }),
			_tmpl$$6(),
			solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
				return helper.t("setting.translation.options.force_retry");
			} }, () => bindOption$1("forceRetry"))),
			solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
				return helper.t("setting.translation.options.only_download_translated");
			} }, () => bindOption$1("onlyDownloadTranslated")))
		];
	}
})];
//#endregion
//#region src/components/Manga/defaultSettingList.tsx
var _tmpl$$5 = /*#__PURE__*/ solid_js_web.template(\`<input type=color style=width:2em;margin-right:.4em>\`);
var _tmpl$2$2 = /*#__PURE__*/ solid_js_web.template(\`<blockquote><p>\`);
/** \u9ED8\u8BA4\u83DC\u5355\u9879 */
const defaultSettingList = () => [
	[
		helper.t("setting.option.paragraph_dir"),
		() => solid_js_web.createComponent(SettingsItemButton, {
			get name() {
				return solid_js_web.memo(() => store.option.dir === "rtl")() ? helper.t("setting.option.dir_rtl") : helper.t("setting.option.dir_ltr");
			},
			onClick: switchDir,
			get children() {
				return solid_js_web.memo(() => store.option.dir === "rtl")() ? solid_js_web.createComponent(format_textdirection_r_to_l_default, {}) : solid_js_web.createComponent(format_textdirection_l_to_r_default, {});
			}
		}),
		{ initShow: true }
	],
	[
		helper.t("setting.option.paragraph_display"),
		() => [
			solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return !store.option.scrollMode.enabled;
				},
				get children() {
					return [solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
						return helper.t("setting.option.disable_auto_enlarge");
					} }, () => bindOption("disableZoom"))), solid_js_web.createComponent(SettingsItemNumber, {
						get name() {
							return helper.t("setting.option.zoom");
						},
						maxLength: 3,
						suffix: "%",
						step: 5,
						onChange: (val) => Number.isNaN(val) || zoom(val),
						get value() {
							return Math.round(store.option.zoom.ratio);
						}
					})];
				}
			}),
			solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return store.option.scrollMode.enabled;
				},
				get children() {
					return [
						solid_js_web.createComponent(SettingsItemSwitch, {
							get name() {
								return helper.t("setting.option.abreast_mode");
							},
							get value() {
								return store.option.scrollMode.abreastMode;
							},
							onChange: (val) => {
								const jump = saveScrollProgress();
								setOption((draftOption) => {
									draftOption.scrollMode.abreastMode = val;
									draftOption.scrollMode.doubleMode = false;
								});
								jump();
							}
						}),
						solid_js_web.createComponent(solid_js.Show, {
							get when() {
								return store.option.scrollMode.abreastMode;
							},
							get children() {
								return solid_js_web.createComponent(SettingsItemNumber, {
									get name() {
										return helper.t("setting.option.abreast_duplicate");
									},
									maxLength: 3,
									suffix: "%",
									step: 5,
									onChange: (val) => {
										if (Number.isNaN(val)) return;
										const newVal = helper.clamp(0, val / 100, .95);
										setOption("scrollMode", "abreastDuplicate", newVal);
									},
									get value() {
										return Math.round(store.option.scrollMode.abreastDuplicate * 100);
									}
								});
							}
						}),
						solid_js_web.createComponent(solid_js.Show, {
							get when() {
								return !store.option.scrollMode.abreastMode;
							},
							get children() {
								return [solid_js_web.createComponent(SettingsItemSelect, {
									get name() {
										return helper.t("setting.option.adjust_to_width");
									},
									get options() {
										return [
											["disable", helper.t("other.disable")],
											["full", helper.t("setting.option.full_width")],
											["custom", helper.t("other.custom")]
										];
									},
									get value() {
										return solid_js_web.memo(() => typeof store.option.scrollMode.adjustToWidth === "number")() ? "custom" : store.option.scrollMode.adjustToWidth;
									},
									onChange: (val) => {
										const jump = saveScrollProgress();
										let newVal;
										if (val === "custom") newVal = store.isMobile ? store.rootSize.width : 1280;
										else newVal = val;
										setOption("scrollMode", "adjustToWidth", newVal);
										jump();
									}
								}), solid_js_web.createComponent(solid_js.Show, {
									get when() {
										return isUseAutoScale();
									},
									get children() {
										return solid_js_web.createComponent(SettingsItemNumber, {
											get name() {
												return helper.t("setting.option.adjust_to_width");
											},
											maxLength: 6,
											step: 100,
											onChange: setAdjustToWidth,
											get value() {
												return store.option.scrollMode.adjustToWidth;
											}
										});
									}
								})];
							}
						}),
						solid_js_web.createComponent(solid_js.Show, {
							get when() {
								return store.option.scrollMode.adjustToWidth === "disable";
							},
							get children() {
								return solid_js_web.createComponent(SettingsItemNumber, {
									get name() {
										return helper.t("setting.option.scroll_mode_img_scale");
									},
									maxLength: 3,
									suffix: "%",
									step: 5,
									onChange: (val) => setImgScale(val / 100),
									get value() {
										return Math.round(store.option.scrollMode.imgScale * 100);
									}
								});
							}
						}),
						solid_js_web.createComponent(SettingsItemNumber, {
							get name() {
								return helper.t("setting.option.scroll_mode_img_spacing");
							},
							maxLength: 5,
							onChange: (val) => {
								if (Number.isNaN(val)) return;
								setOption("scrollMode", "spacing", helper.clamp(0, val, Infinity));
							},
							get value() {
								return Math.round(store.option.scrollMode.spacing);
							}
						})
					];
				}
			}),
			solid_js_web.createComponent(SettingsItemSelect, {
				get name() {
					return helper.t("setting.option.page_tip");
				},
				get options() {
					return [
						["hide", helper.t("setting.option.page_tip_hide")],
						["always", helper.t("setting.option.page_tip_always")],
						["auto", helper.t("setting.option.page_tip_auto")]
					];
				},
				get value() {
					return store.option.pageTip;
				},
				onChange: (val) => setOption("pageTip", val)
			}),
			solid_js_web.createComponent(SettingsItemNumber, {
				get name() {
					return helper.t("setting.option.img_filter_brightness");
				},
				maxLength: 3,
				suffix: "%",
				step: 5,
				onChange: (val) => {
					if (Number.isNaN(val)) return;
					setOption("imgFilter", "brightness", helper.clamp(0, val, 200));
				},
				get value() {
					return store.option.imgFilter.brightness;
				}
			}),
			solid_js_web.createComponent(SettingsItemNumber, {
				get name() {
					return helper.t("setting.option.img_filter_contrast");
				},
				maxLength: 3,
				suffix: "%",
				step: 5,
				onChange: (val) => {
					if (Number.isNaN(val)) return;
					setOption("imgFilter", "contrast", helper.clamp(0, val, 200));
				},
				get value() {
					return store.option.imgFilter.contrast;
				}
			}),
			solid_js_web.createComponent(SettingsItemNumber, {
				get name() {
					return helper.t("setting.option.img_filter_saturate");
				},
				maxLength: 3,
				suffix: "%",
				step: 5,
				onChange: (val) => {
					if (Number.isNaN(val)) return;
					setOption("imgFilter", "saturate", helper.clamp(0, val, 200));
				},
				get value() {
					return store.option.imgFilter.saturate;
				}
			}),
			solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return isDoubleMode();
				},
				get children() {
					return solid_js_web.createComponent(SettingsItemNumber, {
						get name() {
							return helper.t("setting.option.page_columns");
						},
						maxLength: 1,
						step: 1,
						onChange: (val) => {
							if (Number.isNaN(val)) return;
							const jump = saveScrollProgress();
							setOption("scrollMode", "pageColumns", helper.clamp(1, val, 6));
							jump();
						},
						get value() {
							return store.option.scrollMode.pageColumns;
						}
					});
				}
			})
		],
		{ initShow: true }
	],
	[
		helper.t("button.scroll_mode"),
		() => [solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.align_edge");
		} }, () => bindOption("scrollMode", "alignEdge"))), solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.scrollbar_easy_scroll");
		} }, () => bindOption("scrollbar", "easyScroll")))],
		{
			initShow: () => isScrollMode(),
			hidden: () => !isScrollMode()
		}
	],
	[helper.t("setting.option.paragraph_appearance"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.dark_mode");
		} }, () => bindOption("darkMode"))),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.dark_mode_auto");
		} }, () => bindOption("autoDarkMode"))),
		solid_js_web.createComponent(SettingsItemNumber, {
			get name() {
				return helper.t("setting.option.turn_page_animation_duration");
			},
			maxLength: 4,
			suffix: "ms",
			step: 50,
			onChange: (val) => {
				if (Number.isNaN(val)) return;
				setOption("turnPageDuration", helper.clamp(0, val, 2e3));
			},
			get value() {
				return store.option.turnPageDuration;
			}
		}),
		solid_js_web.createComponent(SettingsItemNumber, {
			get name() {
				return helper.t("setting.option.scroll_animation_duration");
			},
			maxLength: 4,
			suffix: "ms",
			step: 50,
			onChange: (val) => {
				if (Number.isNaN(val)) return;
				setOption("scrollDuration", helper.clamp(0, val, 2e3));
			},
			get value() {
				return store.option.scrollDuration;
			}
		}),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.show_comments");
		} }, () => bindOption("showComment"))),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.auto_hidden_mouse");
		} }, () => bindOption("autoHiddenMouse"))),
		solid_js_web.createComponent(SettingsItem, {
			get name() {
				return helper.t("setting.option.background_color");
			},
			get children() {
				var _el$ = _tmpl$$5();
				solid_js_web.addEventListener(_el$, "input", helper.throttle((e) => {
					if (!e.target.value) return;
					setOption((draftOption) => {
						draftOption.customBackground = e.target.value === "#000000" || e.target.value === "#ffffff" ? void 0 : e.target.value;
						if (draftOption.customBackground) draftOption.darkMode = helper.needDarkMode(draftOption.customBackground);
					});
				}, 20));
				solid_js_web.effect(() => _el$.value = store.option.customBackground ?? (store.option.darkMode ? "#000000" : "#ffffff"));
				return _el$;
			}
		}),
		solid_js_web.createComponent(SettingsItemSelect, {
			get name() {
				return helper.t("setting.language");
			},
			options: [
				["zh", "\u4E2D\u6587"],
				["en", "English"],
				["ru", "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"]
			],
			get value() {
				return helper.lang();
			},
			onChange: helper.setLang
		})
	]],
	[helper.t("setting.option.paragraph_scrollbar"), () => [solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
		get name() {
			return helper.t("setting.option.scrollbar_position");
		},
		get options() {
			return [
				["auto", helper.t("other.auto")],
				["right", helper.t("setting.option.scrollbar_position_right")],
				["top", helper.t("setting.option.scrollbar_position_top")],
				["bottom", helper.t("setting.option.scrollbar_position_bottom")],
				["hidden", helper.t("setting.option.scrollbar_position_hidden")]
			];
		}
	}, () => bindOption("scrollbar", "position"))), solid_js_web.createComponent(SettingsShowItem, {
		get when() {
			return store.option.scrollbar.position !== "hidden";
		},
		get children() {
			return [solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return !store.isMobile;
				},
				get children() {
					return solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
						return helper.t("setting.option.scrollbar_auto_hidden");
					} }, () => bindOption("scrollbar", "autoHidden")));
				}
			}), solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
				return helper.t("setting.option.scrollbar_show_img_status");
			} }, () => bindOption("scrollbar", "showImgStatus")))];
		}
	})]],
	[helper.t("setting.option.click_page_turn_enabled"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("other.enabled");
		} }, () => bindOption("clickPageTurn", "enabled"))),
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("setting.option.show_clickable_area");
			},
			get value() {
				return store.show.touchArea;
			},
			onChange: () => setState("show", "touchArea", !store.show.touchArea)
		}),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.shrink_menu");
		} }, () => bindOption("clickPageTurn", "shrinkMenu"))),
		solid_js_web.createComponent(SettingsShowItem, {
			get when() {
				return store.option.clickPageTurn.enabled;
			},
			get children() {
				return [solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
					get name() {
						return helper.t("setting.option.click_page_turn_area");
					},
					get options() {
						return Object.keys(areaArrayMap).map((key) => [key, helper.t(\`touch_area.type.\${key}\`)]);
					}
				}, () => bindOption("clickPageTurn", "area"))), solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
					return helper.t("setting.option.click_page_turn_swap_area");
				} }, () => bindOption("clickPageTurn", "reverse")))];
			}
		})
	]],
	[helper.t("button.auto_scroll"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("other.enabled");
		} }, () => bindOption("autoScroll", "enabled"))),
		solid_js_web.createComponent(SettingsItemNumber, {
			get name() {
				return helper.t("other.interval");
			},
			maxLength: 3,
			suffix: "s",
			step: 1,
			onChange: (val) => {
				if (!Number.isNaN(val)) setState("option", "autoScroll", "interval", Math.max(1, val) * 1e3);
			},
			get value() {
				return store.option.autoScroll.interval / 1e3;
			}
		}),
		solid_js_web.createComponent(SettingsItemNumber, {
			get name() {
				return helper.t("other.distance");
			},
			maxLength: 3,
			suffix: "px",
			step: 20,
			onChange: (val) => {
				if (!Number.isNaN(val)) setState("option", "autoScroll", "distance", Math.max(1, val));
			},
			get value() {
				return store.option.autoScroll.distance;
			}
		}),
		solid_js_web.createComponent(SettingsShowItem, {
			get when() {
				return isScrollMode();
			},
			get children() {
				return solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
					return helper.t("setting.option.auto_scroll_continuous");
				} }, () => bindOption("autoScroll", "continuous")));
			}
		}),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.auto_scroll_trigger_end");
		} }, () => bindOption("autoScroll", "triggerEnd")))
	]],
	[helper.t("setting.option.img_recognition"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("other.enabled");
			},
			get value() {
				return store.option.imgRecognition.enabled;
			},
			onChange: () => switchImgRecognition("enabled")
		}),
		solid_js_web.createComponent(solid_js.Show, {
			when: typeof Worker === "undefined",
			get children() {
				var _el$2 = _tmpl$2$2(), _el$3 = _el$2.firstChild;
				solid_js_web.effect(() => _el$3.innerHTML = helper.t("setting.option.img_recognition_warn"));
				return _el$2;
			}
		}),
		solid_js_web.createComponent(solid_js.Show, {
			when: !userscript_supportWorker.supportWorker,
			get children() {
				var _el$4 = _tmpl$2$2(), _el$5 = _el$4.firstChild;
				solid_js_web.effect(() => _el$5.innerHTML = helper.t("setting.option.img_recognition_warn_2"));
				return _el$4;
			}
		}),
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("setting.option.img_recognition_background");
			},
			get disabled() {
				return !store.option.imgRecognition.enabled;
			},
			get value() {
				return store.option.imgRecognition.background;
			},
			onChange: () => switchImgRecognition("background")
		}),
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("setting.option.img_recognition_pageFill");
			},
			get disabled() {
				return !store.option.imgRecognition.enabled;
			},
			get value() {
				return store.option.imgRecognition.pageFill;
			},
			onChange: () => switchImgRecognition("pageFill")
		}),
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("setting.option.img_recognition_crop");
			},
			get disabled() {
				return !store.option.imgRecognition.enabled;
			},
			get value() {
				return store.option.imgRecognition.crop;
			},
			onChange: () => switchImgRecognition("crop")
		}),
		solid_js_web.createComponent(SettingsItemNumber, {
			get name() {
				return helper.t("setting.option.img_recognition_keepMargin");
			},
			get disabled() {
				return !store.option.imgRecognition.enabled;
			},
			maxLength: 4,
			suffix: "px",
			step: 1,
			onChange: (val) => setOption("imgRecognition", "keepMargin", Math.max(0, Math.round(val))),
			get value() {
				return store.option.imgRecognition.keepMargin;
			}
		}),
		solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return !store.isMobile;
			},
			get children() {
				return solid_js_web.createComponent(SettingsItemSwitch, {
					get name() {
						return helper.t("upscale.title");
					},
					get disabled() {
						return !store.option.imgRecognition.enabled || !store.supportUpscaleImage;
					},
					get value() {
						return store.option.imgRecognition.upscale;
					},
					onChange: () => switchImgRecognition("upscale")
				});
			}
		})
	]],
	[helper.t("setting.option.paragraph_translation"), SettingTranslation],
	[helper.t("other.hotkeys"), SettingHotkeysBlock],
	[helper.t("other.other"), () => [
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.first_page_fill");
		} }, () => bindOption("firstPageFill"))),
		solid_js_web.createComponent(SettingsItemSwitch, {
			get name() {
				return helper.t("setting.option.auto_switch_page_mode");
			},
			get value() {
				return store.option.autoSwitchPageMode;
			},
			onChange: (val) => {
				setOption((draftOption, state) => {
					draftOption.autoSwitchPageMode = val;
					state.option.pageNum = val ? 0 : autoPageNum();
				});
			}
		}),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.swap_page_turn_key");
		} }, () => bindOption("swapPageTurnKey"))),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.auto_fullscreen");
		} }, () => bindOption("autoFullscreen"))),
		solid_js_web.createComponent(SettingsItemSelect, solid_js_web.mergeProps({
			get name() {
				return helper.t("setting.option.scroll_end");
			},
			get options() {
				return [
					["none", helper.t("other.none")],
					["exit", helper.t("other.exit")],
					["auto", helper.t("setting.option.scroll_end_auto")]
				];
			}
		}, () => bindOption("scroolEnd"))),
		solid_js_web.createComponent(SettingsItemSwitch, solid_js_web.mergeProps({ get name() {
			return helper.t("setting.option.always_load_all_img");
		} }, () => bindOption("alwaysLoadAllImg"))),
		solid_js_web.createComponent(SettingsItemNumber, {
			get name() {
				return helper.t("setting.option.preload_page_num");
			},
			maxLength: 5,
			onChange: (val) => {
				if (Number.isNaN(val)) return;
				setOption("preloadPageNum", helper.clamp(0, val, 99999));
			},
			get value() {
				return store.option.preloadPageNum;
			}
		})
	]]
];
//#endregion
//#region src/components/Manga/components/SettingPanel.tsx
var _tmpl$$4 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
var _tmpl$2$1 = /*#__PURE__*/ solid_js_web.template(\`<div><div>\`);
var _tmpl$3 = /*#__PURE__*/ solid_js_web.template(\`<hr>\`);
const SettingBlockSubtitle = (props) => (() => {
	var _el$ = _tmpl$$4();
	solid_js_web.addEventListener(_el$, "click", props.onClick);
	solid_js_web.insert(_el$, () => props.children);
	solid_js_web.effect(() => solid_js_web.className(_el$, classes$2.SettingBlockSubtitle));
	return _el$;
})();
/** \u83DC\u5355\u9762\u677F */
const SettingPanel = () => (() => {
	var _el$2 = _tmpl$$4();
	solid_js_web.addEventListener(_el$2, "click", stopPropagation);
	solid_js_web.addEventListener(_el$2, "scroll", stopPropagation);
	_el$2.addEventListener("wheel", (e) => refs.settingPanel.scrollHeight > refs.settingPanel.clientHeight && e.stopPropagation());
	var _ref$ = bindRef("settingPanel");
	typeof _ref$ === "function" && solid_js_web.use(_ref$, _el$2);
	solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.For, {
		get each() {
			return store.prop.editSettingList(defaultSettingList());
		},
		children: ([name, SettingItem, options], i) => {
			const initShow = options?.initShow;
			const [show, setShwo] = solid_js.createSignal(Boolean(initShow));
			if (typeof initShow === "function") helper.createEffectOn(initShow, (val) => setShwo(val));
			return solid_js_web.createComponent(solid_js.Show, {
				get when() {
					return solid_js_web.memo(() => !!options?.hidden)() ? !options.hidden() : true;
				},
				get children() {
					return [solid_js_web.memo(() => solid_js_web.memo(() => !!i())() ? _tmpl$3() : null), (() => {
						var _el$3 = _tmpl$2$1(), _el$4 = _el$3.firstChild;
						solid_js_web.insert(_el$3, solid_js_web.createComponent(SettingBlockSubtitle, {
							onClick: () => setShwo((prev) => !prev),
							get children() {
								return [name, solid_js_web.memo(() => show() ? null : "\u2026")];
							}
						}), _el$4);
						solid_js_web.insert(_el$4, solid_js_web.createComponent(SettingItem, {}));
						solid_js_web.effect((_p$) => {
							var _v$3 = classes$2.SettingBlock, _v$4 = show(), _v$5 = classes$2.SettingBlockBody;
							_v$3 !== _p$.e && solid_js_web.className(_el$3, _p$.e = _v$3);
							_v$4 !== _p$.t && solid_js_web.setAttribute(_el$3, "data-show", _p$.t = _v$4);
							_v$5 !== _p$.a && solid_js_web.className(_el$4, _p$.a = _v$5);
							return _p$;
						}, {
							e: void 0,
							t: void 0,
							a: void 0
						});
						return _el$3;
					})()];
				}
			});
		}
	}));
	solid_js_web.effect((_p$) => {
		var _v$ = \`\${classes$2.SettingPanel} \${classes$2.beautifyScrollbar}\`, _v$2 = helper.lang() === "zh" ? "15em" : "20em";
		_v$ !== _p$.e && solid_js_web.className(_el$2, _p$.e = _v$);
		_v$2 !== _p$.t && solid_js_web.setStyleProperty(_el$2, "width", _p$.t = _v$2);
		return _p$;
	}, {
		e: void 0,
		t: void 0
	});
	return _el$2;
})();
//#endregion
//#region src/components/Manga/defaultButtonList.tsx
var _tmpl$$3 = /*#__PURE__*/ solid_js_web.template(\`<hr>\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<div role=button tabindex=-1>\`);
const ZoomButton = () => solid_js_web.createComponent(IconButton$1, {
	get tip() {
		return solid_js_web.memo(() => store.option.zoom.ratio === 100)() ? helper.t("button.zoom_in") : helper.t("button.zoom_out");
	},
	get enabled() {
		return store.option.zoom.ratio !== 100;
	},
	onClick: () => doubleClickZoom(),
	get children() {
		return solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return store.option.zoom.ratio === 100;
			},
			get fallback() {
				return solid_js_web.createComponent(zoom_out_default, {});
			},
			get children() {
				return solid_js_web.createComponent(zoom_in_default, {});
			}
		});
	}
});
/** \u5DE5\u5177\u680F\u7684\u9ED8\u8BA4\u6309\u94AE\u5217\u8868 */
const defaultButtonList = [
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return solid_js_web.memo(() => !!isOnePageMode())() ? helper.t("button.page_mode_single") : helper.t("button.page_mode_double");
		},
		get hidden() {
			return store.isMobile;
		},
		onClick: switchOnePageMode,
		get children() {
			return solid_js_web.memo(() => !!isOnePageMode())() ? solid_js_web.createComponent(looks_one_default, {}) : solid_js_web.createComponent(looks_two_default, {});
		}
	}),
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return helper.t("button.scroll_mode");
		},
		get enabled() {
			return store.option.scrollMode.enabled;
		},
		onClick: switchScrollMode,
		get children() {
			return solid_js_web.createComponent(view_day_default, {});
		}
	}),
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return helper.t("button.page_fill");
		},
		get enabled() {
			return Boolean(store.fillEffect[nowFillIndex()]);
		},
		get hidden() {
			return isOnePageMode();
		},
		onClick: switchFillEffect,
		get children() {
			return solid_js_web.createComponent(queue_default, {});
		}
	}),
	() => solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return store.option.translation.enabled;
		},
		get children() {
			return [
				_tmpl$$3(),
				solid_js_web.createComponent(IconButton$1, {
					get tip() {
						return solid_js_web.memo(() => !!isTranslatingImage())() ? helper.t("button.close_current_page_translation") : helper.t("button.translate_current_page");
					},
					get enabled() {
						return isTranslatingImage();
					},
					onClick: translateCurrent,
					get children() {
						return solid_js_web.createComponent(translate_default, {});
					}
				}),
				solid_js_web.createComponent(IconButton$1, {
					get tip() {
						return helper.t("setting.translation.translate_to_end");
					},
					get enabled() {
						return isTranslatingToEnd();
					},
					get hidden() {
						return !allowBatchTranslation();
					},
					onClick: translateToEnd,
					get children() {
						return solid_js_web.createComponent(low_priority_default, {});
					}
				})
			];
		}
	}),
	() => solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return store.option.autoScroll.enabled;
		},
		get children() {
			return [_tmpl$$3(), solid_js_web.createComponent(AutoScrollButton, {})];
		}
	}),
	() => _tmpl$$3(),
	() => [solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return !store.option.scrollMode.enabled;
		},
		get children() {
			return solid_js_web.createComponent(ZoomButton, {});
		}
	}), solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return solid_js_web.memo(() => !!store.option.scrollMode.enabled)() && store.option.scrollMode.adjustToWidth !== "full";
		},
		get children() {
			return [solid_js_web.createComponent(IconButton$1, {
				get tip() {
					return helper.t("button.zoom_in");
				},
				get enabled() {
					return store.option.scrollMode.imgScale >= 3;
				},
				onClick: () => handleScrollModeZoom("add"),
				get children() {
					return solid_js_web.createComponent(zoom_in_default, {});
				}
			}), solid_js_web.createComponent(IconButton$1, {
				get tip() {
					return helper.t("button.zoom_out");
				},
				get enabled() {
					return store.option.scrollMode.imgScale <= .1;
				},
				onClick: () => handleScrollModeZoom("sub"),
				get children() {
					return solid_js_web.createComponent(zoom_out_default, {});
				}
			})];
		}
	})],
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return solid_js_web.memo(() => !!store.fullscreen)() ? helper.t("button.fullscreen_exit") : helper.t("button.fullscreen");
		},
		get hidden() {
			return !refs.root.requestFullscreen;
		},
		onClick: switchFullscreen,
		get children() {
			return solid_js_web.memo(() => !!store.fullscreen)() ? solid_js_web.createComponent(fullscreen_exit_default, {}) : solid_js_web.createComponent(fullscreen_default, {});
		}
	}),
	DownloadButton,
	() => {
		const [showPanel, setShowPanel] = solid_js.createSignal(false);
		const handleClick = () => {
			const newVal = !showPanel();
			setState("show", "toolbar", newVal);
			setShowPanel(newVal);
		};
		helper.createEffectOn(() => store.show.toolbar, (showToolbar) => showToolbar || setShowPanel(false));
		const Popper = solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return showPanel();
			},
			get children() {
				return [solid_js_web.createComponent(SettingPanel, {}), (() => {
					var _el$4 = _tmpl$2();
					_el$4.addEventListener("wheel", (e) => {
						if (isScrollMode()) refs.mangaBox.scrollBy({ top: e.deltaY });
					});
					solid_js_web.addEventListener(_el$4, "click", handleClick);
					solid_js_web.effect(() => solid_js_web.className(_el$4, classes$2.closeCover));
					return _el$4;
				})()];
			}
		});
		return solid_js_web.createComponent(IconButton$1, {
			get tip() {
				return helper.t("other.setting");
			},
			get enabled() {
				return showPanel();
			},
			get showTip() {
				return showPanel();
			},
			onClick: handleClick,
			get popperClassName() {
				return solid_js_web.memo(() => !!showPanel())() && classes$2.SettingPanelPopper;
			},
			get popper() {
				return showPanel() && Popper;
			},
			get children() {
				return solid_js_web.createComponent(settings_default, {});
			}
		});
	},
	() => _tmpl$$3(),
	() => solid_js_web.createComponent(IconButton$1, {
		get tip() {
			return helper.t("other.exit");
		},
		onClick: () => store.prop.onExit?.(),
		get children() {
			return solid_js_web.createComponent(close_default, {});
		}
	})
];
//#endregion
//#region src/components/Manga/components/Toolbar.tsx
var _tmpl$$2 = /*#__PURE__*/ solid_js_web.template(\`<div role=toolbar><div><div>\`);
/** \u5DE6\u4FA7\u5DE5\u5177\u680F */
const Toolbar = () => {
	helper.createEffectOn(() => store.show.toolbar, (show) => show || focus());
	return (() => {
		var _el$ = _tmpl$$2(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
		solid_js_web.addEventListener(_el$2, "click", focus);
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.For, {
			get each() {
				return store.prop.editButtonList(defaultButtonList);
			},
			children: (ButtonItem) => solid_js_web.createComponent(ButtonItem, {})
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$2.toolbar, _v$2 = helper.boolDataVal(store.show.toolbar), _v$3 = store.isDragMode ? "none" : void 0, _v$4 = classes$2.toolbarPanel, _v$5 = classes$2.toolbarBg;
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setStyleProperty(_el$, "pointer-events", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.className(_el$2, _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.className(_el$3, _p$.i = _v$5);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/components/WheelProgress.module.css
const classes = { "wheelProgress": "wheelProgress___bFAqF" };
//#endregion
//#region src/components/Manga/components/WheelProgress.tsx
var _tmpl$$1 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
/** \u865A\u62DF\u68D8\u8F6E\u7FFB\u9875\u8FDB\u5EA6\u6307\u793A\u7EBF\uFF1A\u6EDA\u52A8\u65F6\u663E\u793A\uFF0C\u957F\u5EA6\u53CD\u6620\u8DDD\u7FFB\u9875\u8FD8\u5DEE\u591A\u5C11\uFF0C\u65B9\u5411\u4E0E\u6EDA\u52A8\u65B9\u5411\u4E00\u81F4 */
const WheelProgress = () => {
	css$1(\`.\${classes.wheelProgress}\`, {
		opacity: () => {
			switch (store.scrollDeviceType) {
				case void 0:
				case "a": return 0;
				default: return store.wheelProgress === 0 ? 0 : 1;
			}
		},
		"--wheel-progress": () => \`\${Math.abs(store.wheelProgress)}\`
	});
	return (() => {
		var _el$ = _tmpl$$1();
		solid_js_web.effect((_p$) => {
			var _v$ = classes.wheelProgress, _v$2 = scrollPosition(), _v$3 = store.option.dir, _v$4 = helper.boolDataVal(store.wheelProgress > 0);
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-position", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-dir", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-down", _p$.o = _v$4);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region src/components/Manga/hooks/useCssVar.ts
/** \u4E3B\u9898\u989C\u8272\uFF0C\u901A\u8FC7 light-dark() \u914D\u5408 color-scheme \u81EA\u52A8\u9009\u62E9\u6DF1\u6D45\u8272 */
const themeStyle = {
	"--hover-bg-color": "light-dark(#0001, #FFF3)",
	"--hover-bg-color-enable": "light-dark(#0009, #FFFa)",
	"--switch": "light-dark(#FAFAFA, #BDBDBD)",
	"--switch-bg": "light-dark(#9C9C9C, #6E6E6E)",
	"--page-bg": "light-dark(white, #303030)",
	"--secondary": "#7A909A",
	"--secondary-bg": "light-dark(#BAC5CA, #556065)",
	"--text": "light-dark(black, white)",
	"--text-secondary": "light-dark(#0008, #FFFC)",
	"--text-bg": "light-dark(#FAFAFA, #121212)"
};
const createSvgIcon = (fill, d) => \`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='\${fill}' viewBox='0 0 24 24'%3E%3Cpath d='\${d}'/%3E%3C/svg%3E")\`;
const MdImageNotSupported = \`m21.9 21.9-8.49-8.49-9.82-9.82L2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3H5zm16 .17L5.83 3H19c1.1 0 2 .9 2 2v13.17z\`;
const MdCloudDownload = \`M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4h3z\`;
const MdPhoto = \`M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z\`;
/** \u6839\u636E\u5F53\u524D\u56FE\u7247\u6EE4\u955C\u9009\u9879\u751F\u6210 filter \u503C\uFF0C\u9690\u85CF\u503C\u4E3A 100 \u7684\u6EE4\u955C */
const getImgFilter = () => {
	const { brightness, contrast, saturate } = store.option.imgFilter;
	const list = [
		brightness !== 100 && \`brightness(\${brightness}%)\`,
		contrast !== 100 && \`contrast(\${contrast}%)\`,
		saturate !== 100 && \`saturate(\${saturate}%)\`
	].filter(Boolean);
	if (list.length > 0) return list.join(" ");
};
const useCssVar = () => {
	const svg = () => {
		const fill = store.option.darkMode ? "rgb(156,156,156)" : "rgb(110,110,110)";
		return {
			"--md-image-not-supported": createSvgIcon(fill, MdImageNotSupported),
			"--md-cloud-download": createSvgIcon(fill, MdCloudDownload),
			"--md-photo": createSvgIcon(fill, MdPhoto)
		};
	};
	const i18n = () => ({
		"--i18n-touch-area-prev": \`"\${helper.t("hotkeys.page_up")}"\`,
		"--i18n-touch-area-next": \`"\${helper.t("hotkeys.page_down")}"\`,
		"--i18n-touch-area-menu": \`"\${helper.t("touch_area.menu")}"\`
	});
	css$1(\`.\${classes$2.root}\`, [
		{
			"--bg": () => store.option.customBackground ?? (store.option.darkMode ? "#000" : "#fff"),
			"--scroll-mode-spacing": () => store.option.scrollMode.spacing,
			"color-scheme": () => store.option.darkMode ? "dark" : "light",
			"--img-filter": getImgFilter
		},
		() => themeStyle,
		svg,
		i18n
	]);
};
//#endregion
//#region src/components/Manga/hooks/useInit.ts
const useInit = (props) => {
	watchDomSize("rootSize", refs.root);
	const updateOption = (state) => {
		state.defaultOption = helper.assign(defaultOption(), props.defaultOption ?? {});
		state.option = helper.assign(state.defaultOption, props.option ?? {});
	};
	const bindProp = (key, defaultValue) => (state) => Reflect.set(state.prop, key, props[key] ?? defaultValue);
	const bindDebounce = (key) => (state) => {
		state.prop[key] = props[key] ? helper.debounce(props[key]) : void 0;
	};
	const watchProps = {
		option: updateOption,
		onLoading: bindDebounce("onLoading"),
		onOptionChange: bindDebounce("onOptionChange"),
		onHotkeysChange: bindDebounce("onHotkeysChange"),
		onShowImgsChange: bindDebounce("onShowImgsChange"),
		defaultOption(state) {
			updateOption(state);
		},
		fillEffect(state) {
			state.fillEffect = props.fillEffect ?? { "-1": true };
			updatePageData(state);
		},
		onExit(state) {
			state.prop.onExit = (isEnd) => {
				playAnimation(refs.exit);
				props.onExit?.(Boolean(isEnd));
				setState((draftState) => {
					if (isEnd) draftState.activePageIndex = 0;
					draftState.show.endPage = void 0;
				});
				if (document.fullscreenElement) document.exitFullscreen();
			};
		},
		onPrev(state) {
			state.prop.onPrev = props.onPrev ? helper.throttle(() => {
				playAnimation(refs.prev);
				props.onPrev?.();
			}, 1e3) : void 0;
		},
		onNext(state) {
			state.prop.onNext = props.onNext ? helper.throttle(() => {
				playAnimation(refs.next);
				props.onNext?.();
			}, 1e3) : void 0;
		},
		onImgError: bindProp("onImgError"),
		onWaitUrlImgs: bindProp("onWaitUrlImgs"),
		editButtonList: bindProp("editButtonList", (list) => list),
		editSettingList: bindProp("editSettingList", (list) => list),
		commentList(state) {
			state.commentList = props.commentList;
		},
		title(state) {
			state.title = props.title ?? "";
		}
	};
	for (const [key, fn] of Object.entries(watchProps)) solid_js.createEffect(solid_js.on(() => props[key], () => setState(fn)));
	solid_js.createEffect(() => {
		setState((state) => {
			state.hotkeys = {
				...structuredClone(defaultHotkeys()),
				...props.hotkeys
			};
		});
	});
	const handleImgList = () => {
		setState((state) => {
			const newImgMap = {};
			const newImgList = [];
			for (const img of solid_js_store.unwrap(props.imgList)) {
				const url = (typeof img === "object" ? img.src : img)?.replace(/^http:/u, "") ?? "";
				newImgList.push(url);
				if (Reflect.has(newImgMap, url)) continue;
				if (Reflect.has(state.imgMap, url)) {
					newImgMap[url] = state.imgMap[url];
					continue;
				}
				const imgItem = typeof img === "string" ? { src: url } : img;
				imgItem.loadType ??= "wait";
				if (imgItem.width && imgItem.height) imgItem.type = getImgType(imgItem);
				imgItem.size = getImgDisplaySize(state, imgItem);
				if (!imgItem.blobUrl && url.startsWith("blob:")) imgItem.blobUrl = imgItem.src;
				newImgMap[url] = imgItem;
			}
			/** \u4FEE\u6539\u524D\u7684\u5F53\u524D\u663E\u793A\u56FE\u7247 */
			const oldActiveImg = state.pageList[state.activePageIndex]?.map((i) => state.imgList?.[i]) ?? [];
			/** \u662F\u5426\u9700\u8981\u91CD\u7F6E\u9875\u9762\u586B\u5145 */
			let needResetFillEffect = false;
			const fillEffectList = Object.keys(state.fillEffect).map(Number);
			for (const pageIndex of fillEffectList) {
				if (pageIndex === -1) continue;
				if (state.imgList[pageIndex] === newImgList[pageIndex]) continue;
				needResetFillEffect = true;
				break;
			}
			const oldImgSet = new Set(state.imgList);
			const newImgSet = new Set(newImgList);
			if (oldImgSet.size === 0 && newImgList.length > 0) {
				resumeReadProgress(state);
				if (state.option.translation.enabled) updateMitTranslators(true);
			}
			/** \u88AB\u5220\u9664\u7684\u56FE\u7247 */
			const deleteList = oldImgSet.difference(newImgSet);
			for (const url of deleteList) if (state.imgMap[url].blobUrl && state.imgMap[url].blobUrl !== url) URL.revokeObjectURL(state.imgMap[url].blobUrl);
			/** \u5220\u9664\u56FE\u7247\u6570 */
			const deleteNum = deleteList.size;
			/** \u4F20\u5165\u7684\u662F\u5426\u662F\u65B0\u6F2B\u753B */
			const isNew = deleteNum >= oldImgSet.size * .8;
			/** \u662F\u5426\u9700\u8981\u66F4\u65B0\u9875\u9762 */
			const needUpdatePageData = needResetFillEffect || state.imgList.length !== newImgList.length || deleteNum > 0;
			state.imgMap = newImgMap;
			state.imgList = [...newImgList];
			state.prop.onLoading?.(state.imgList.map((url) => state.imgMap[url]));
			if (isNew) state.show.endPage = void 0;
			if (isNew || needResetFillEffect) state.fillEffect = props.fillEffect ?? { "-1": true };
			if (isNew || needUpdatePageData) {
				updatePageData(state);
				if (state.activePageIndex >= state.pageList.length) state.activePageIndex = state.pageList.length - 1;
				updateShowRange(state);
			}
			syncImgLoadState(state);
			if (isNew || state.pageList.length === 0) {
				resetImgState(state);
				state.activePageIndex = 0;
				scrollTo(0);
				return;
			}
			oldActiveImg.some((url) => {
				if (!url || newImgSet.has(url)) return false;
				const newPageIndex = state.pageList.findIndex((page) => page.some((index) => state.imgList?.[index] === url));
				if (newPageIndex === -1) return false;
				state.activePageIndex = newPageIndex;
				return true;
			});
			if (state.activePageIndex > state.pageList.length - 1) state.activePageIndex = state.pageList.length - 1;
		});
	};
	helper.createEffectOn(helper.createRootMemo(() => props.imgList), helper.throttle(handleImgList, 500));
	refs.root.addEventListener("fullscreenchange", () => {
		if (!document.fullscreenElement) return setState("fullscreen", false);
		if (document.fullscreenElement.id === "comicRead" || document.fullscreenElement.classList.contains(classes$2.root)) setState("fullscreen", true);
	});
	for (const eventName of [
		"keypress",
		"keyup",
		"touchstart",
		"touchmove",
		"touchend"
	]) refs.root.addEventListener(eventName, stopPropagation, { capture: true });
	focus();
};
//#endregion
//#region src/components/Manga/index.module.css?inline
var index_module_default = ".img___7ajV4 img {\\n  display: block;\\n\\n  width: 100%;\\n  height: 100%;\\n\\n  object-fit: contain;\\n  filter: var(--img-filter, none);\\n}\\n\\n.img___7ajV4 {\\n  position: relative;\\n\\n  align-content: center;\\n\\n  width: 100%;\\n  height: 100%;\\n  margin-right: auto;\\n  margin-left: auto;\\n}\\n\\n.img___7ajV4 > picture {\\n    position: absolute;\\n    inset: 0;\\n\\n    width: auto;\\n    max-width: 100%;\\n    height: auto;\\n    max-height: 100%;\\n    margin-top: auto;\\n    margin-right: inherit;\\n    margin-bottom: auto;\\n    margin-left: inherit;\\n  }\\n\\n.img___7ajV4 > picture,.img___7ajV4 > picture::after {\\n    background-color: var(--hover-bg-color, #fff3);\\n    background-image: var(--md-photo);\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: 30%;\\n  }\\n\\n/* \u5DF2\u52A0\u8F7D\u5B8C\u6BD5\u7684\u56FE\u7247\u4E0D\u663E\u793A\u7070\u8272\u80CC\u666F\u548C\u56FE\u6807 */\\n\\n.img___7ajV4:not([data-load-type]) > picture,.img___7ajV4:not([data-load-type]) > picture::after {\\n    background: none;\\n  }\\n\\n/* \u906E\u4F4F\u9ED8\u8BA4\u7684\u51FA\u9519\u56FE\u7247\u6807\u8BC6 */\\n\\n.img___7ajV4[data-load-type='error'] > picture::after {\\n    pointer-events: none;\\n    content: '';\\n\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n\\n    width: 100%;\\n    height: 100%;\\n\\n    background-color: #eee;\\n    background-image: var(--md-image-not-supported);\\n  }\\n\\n.img___7ajV4[data-load-type='loading'] > picture {\\n    background-image: var(--md-cloud-download);\\n\\n    /* \u52A0\u8F7D\u4E2D\u7684\u56FE\u7247\u5148\u9690\u85CF\u4E00\u4E0B\uFF0C\u907F\u514D\u51FA\u9519\u56FE\u7247\u7684\u5143\u7D20\u88AB\u76F4\u63A5\u663E\u793A\u51FA\u6765 */\\n  }\\n\\n:is(.img___7ajV4[data-load-type='loading'] > picture) img {\\n      animation: show___HzwUa 100ms forwards;\\n    }\\n\\n.img___7ajV4[data-load-type='error'] > picture {\\n    cursor: pointer;\\n  }\\n\\n.mangaFlow___jMZgq[dir='ltr'] .img___7ajV4[data-show='1'],\\n.mangaFlow___jMZgq[dir='rtl'] .img___7ajV4[data-show='0'] {\\n  margin-right: auto;\\n  margin-left: 0;\\n}\\n\\n.mangaFlow___jMZgq[dir='ltr'] .img___7ajV4[data-show='0'],\\n.mangaFlow___jMZgq[dir='rtl'] .img___7ajV4[data-show='1'] {\\n  margin-right: 0;\\n  margin-left: auto;\\n}\\n\\n.mangaFlow___jMZgq {\\n  touch-action: none;\\n  will-change: left, top;\\n  -webkit-user-select: none;\\n          user-select: none;\\n\\n  position: absolute;\\n  transform-origin: 0 0;\\n\\n  contain: layout;\\n  overflow: visible;\\n  display: grid;\\n  grid-auto-columns: 100%;\\n  grid-auto-flow: column;\\n  grid-auto-rows: 100%;\\n  row-gap: 0;\\n  place-items: center;\\n\\n  width: 100%;\\n  height: 100%;\\n\\n  color: var(--text);\\n\\n  backface-visibility: hidden;\\n}\\n\\n.mangaFlow___jMZgq[data-disable-zoom] .img___7ajV4 > picture {\\n    width: fit-content;\\n    height: fit-content;\\n  }\\n\\n.mangaFlow___jMZgq[data-hidden-mouse='true'] {\\n    cursor: none;\\n  }\\n\\n.mangaFlow___jMZgq[data-vertical] {\\n    grid-auto-flow: row;\\n  }\\n\\n.mangaBox___48Jek {\\n  transform-origin: 0 0;\\n\\n  contain: layout style;\\n\\n  width: 100%;\\n  height: 100%;\\n\\n  transition-duration: 0ms;\\n}\\n\\n.mangaBox___48Jek[data-animation='page'] .mangaFlow___jMZgq,.mangaBox___48Jek[data-animation='zoom'] {\\n    transition-duration: 300ms;\\n  }\\n\\n.root___Hf5H2 .mangaBox___48Jek {\\n  /* \u9690\u85CF\u6EDA\u52A8\u6761\u4F46\u4E0D\u5F71\u54CD\u6EDA\u52A8 */\\n  scrollbar-width: none;\\n\\n  /* \u9690\u85CF\u6EDA\u52A8\u6761\u4F46\u4E0D\u5F71\u54CD\u6EDA\u52A8 */\\n}\\n\\n:is(.root___Hf5H2 .mangaBox___48Jek)::-webkit-scrollbar {\\n    display: none;\\n  }\\n\\n.root___Hf5H2[data-scroll-mode] .mangaBox___48Jek {\\n  overflow: auto;\\n}\\n\\n:is(.root___Hf5H2[data-scroll-mode] .mangaBox___48Jek) .mangaFlow___jMZgq {\\n    touch-action: pan-y;\\n    row-gap: calc(var(--scroll-mode-spacing) * 7px);\\n    height: fit-content;\\n  }\\n\\n[data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode] .mangaBox___48Jek) {\\n    touch-action: none;\\n    overflow: hidden;\\n  }\\n\\n[data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode] .mangaBox___48Jek) .mangaFlow___jMZgq {\\n      column-gap: calc(var(--scroll-mode-spacing) * 7px);\\n      align-items: start;\\n      height: 100%;\\n    }\\n\\n:is([data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode] .mangaBox___48Jek) .mangaFlow___jMZgq) .img___7ajV4 {\\n        width: 100%;\\n        height: auto;\\n      }\\n\\n[data-show]:is(:is([data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode] .mangaBox___48Jek) .mangaFlow___jMZgq) .img___7ajV4) {\\n          will-change: transform;\\n        }\\n\\n:is(:is([data-abreast-scroll]:is(.root___Hf5H2[data-scroll-mode] .mangaBox___48Jek) .mangaFlow___jMZgq) .img___7ajV4) > picture {\\n          position: relative;\\n        }\\n\\n.pageTip___P7thU {\\n  pointer-events: none;\\n\\n  position: absolute;\\n  z-index: 1;\\n  right: 0.4em;\\n  bottom: 0.4em;\\n\\n  padding: 0.1em 0.4em;\\n  border-radius: 0.25em;\\n\\n  font-size: 1.5em;\\n  line-height: 1.5;\\n  color: var(--text);\\n\\n  opacity: 0;\\n  background-color: color-mix(in srgb, var(--text-bg) 80%, transparent);\\n\\n  transition: opacity 150ms;\\n}\\n\\n.root___Hf5H2[data-page-tip] .pageTip___P7thU {\\n  opacity: 1;\\n}\\n\\n@keyframes show___HzwUa {\\n  0% {\\n    opacity: 0;\\n  }\\n\\n  90% {\\n    opacity: 0;\\n  }\\n\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\\n.endPage___iOZmk,\\n.endPageBody___g-dz- {\\n  z-index: 10;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.endPage___iOZmk {\\n  pointer-events: none;\\n\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n\\n  color: white;\\n\\n  opacity: 0;\\n  background-color: #333d;\\n\\n  transition: opacity 500ms;\\n}\\n\\n.endPage___iOZmk[data-show] {\\n    pointer-events: all;\\n    opacity: 1;\\n  }\\n\\n.endPage___iOZmk[data-type='start'] .tip___fyxqg {\\n    transform: translateY(-10em);\\n  }\\n\\n.endPage___iOZmk[data-type='end'] .tip___fyxqg {\\n    transform: translateY(10em);\\n  }\\n\\n.endPage___iOZmk .endPageBody___g-dz- {\\n    transform: translate(0, var(--drag-y, 0));\\n    transition: transform 200ms;\\n  }\\n\\n:is(.endPage___iOZmk .endPageBody___g-dz-) button {\\n      cursor: pointer;\\n\\n      transform-origin: center;\\n\\n      font-size: 1.2em;\\n      color: inherit;\\n\\n      background-color: transparent;\\n\\n      animation: jello___wXBLg 0.3s forwards;\\n    }\\n\\n[data-is-end]:is(:is(.endPage___iOZmk .endPageBody___g-dz-) button) {\\n        margin: 2em;\\n        font-size: 3em;\\n      }\\n\\n:is(.endPage___iOZmk .endPageBody___g-dz-) .tip___fyxqg {\\n      position: absolute;\\n      margin: auto;\\n    }\\n\\n.endPage___iOZmk[data-drag] .endPageBody___g-dz- {\\n    transition: transform 00ms;\\n  }\\n\\n.root___Hf5H2[data-mobile] .endPage___iOZmk > button {\\n  width: 1em;\\n}\\n\\n.comments___9ITQv {\\n  position: absolute;\\n  right: 1em;\\n\\n  overflow: auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n\\n  width: 20em;\\n  max-height: 80%;\\n  padding-right: 0.5em;\\n\\n  opacity: 0.3;\\n}\\n\\n.comments___9ITQv > p {\\n    margin: 0.5em 0.1em;\\n    padding: 0.2em 0.5em;\\n    border-radius: 0.5em;\\n    background-color: #333b;\\n  }\\n\\n.comments___9ITQv:hover {\\n    opacity: 1;\\n  }\\n\\n.root___Hf5H2[data-mobile] .comments___9ITQv {\\n  bottom: 0;\\n  max-height: 15em;\\n  opacity: 0.8;\\n}\\n\\n@keyframes jello___wXBLg {\\n  0%,\\n  11.1%,\\n  100% {\\n    transform: translate3d(0, 0, 0);\\n  }\\n\\n  22.2% {\\n    transform: skewX(-12.5deg) skewY(-12.5deg);\\n  }\\n\\n  33.3% {\\n    transform: skewX(6.25deg) skewY(6.25deg);\\n  }\\n\\n  44.4% {\\n    transform: skewX(-3.125deg) skewY(-3.125deg);\\n  }\\n\\n  55.5% {\\n    transform: skewX(1.5625deg) skewY(1.5625deg);\\n  }\\n\\n  66.6% {\\n    transform: skewX(-0.7812deg) skewY(-0.7812deg);\\n  }\\n\\n  77.7% {\\n    transform: skewX(0.3906deg) skewY(0.3906deg);\\n  }\\n\\n  88.8% {\\n    transform: skewX(-0.1953deg) skewY(-0.1953deg);\\n  }\\n}\\n\\n.toolbar___RMjHL {\\n  position: fixed;\\n  z-index: 9;\\n  top: 0;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-start;\\n\\n  height: 100%;\\n}\\n\\n/* \u5DE5\u5177\u680F\u9762\u677F */\\n.toolbarPanel___XYjgc {\\n  position: relative;\\n  transform: translateX(-100%);\\n\\n  display: flex;\\n  flex-direction: column;\\n\\n  padding: 0.5em;\\n\\n  transition: transform 200ms;\\n}\\n.toolbarPanel___XYjgc > hr {\\n    height: 1em;\\n    margin: 0;\\n    border: none;\\n    visibility: hidden;\\n  }\\n\\n:is(.toolbar___RMjHL[data-show], .toolbar___RMjHL:hover) .toolbarPanel___XYjgc {\\n  transform: none;\\n}\\n\\n.toolbarBg___i4oTA {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n\\n  width: 100%;\\n  height: 100%;\\n  border-top-right-radius: 1em;\\n  border-bottom-right-radius: 1em;\\n\\n  background-color: var(--page-bg);\\n  filter: opacity(0.8);\\n}\\n\\n/* \u79FB\u52A8\u7AEF\u4F18\u5316 */\\n/* \u8C03\u5927\u6837\u5F0F */\\n.root___Hf5H2[data-mobile] .toolbar___RMjHL {\\n    font-size: 1.3em;\\n  }\\n/* \u53EA\u80FD\u901A\u8FC7\u70B9\u51FB\u4E2D\u5FC3\u6765\u5524\u51FA\u5DE5\u5177\u680F\uFF0C\u9632\u6B62\u8BEF\u89E6 */\\n.root___Hf5H2[data-mobile] .toolbar___RMjHL:not([data-show]) {\\n    pointer-events: none;\\n  }\\n/* \u51CF\u5C11\u80CC\u666F\u7684\u900F\u660E\u5EA6\uFF0C\u65B9\u4FBF\u8FA8\u8BC6 */\\n.root___Hf5H2[data-mobile] .toolbarBg___i4oTA {\\n    filter: opacity(0.8);\\n  }\\n/* \u8BBE\u7F6E\u9762\u677F\u6240\u5728\u7684\u60AC\u6D6E\u6846\u6837\u5F0F */\\n.SettingPanelPopper___uEBz3 {\\n  pointer-events: unset !important;\\n  transform: none !important;\\n  height: 0 !important;\\n  padding: 0 !important;\\n}\\n\\n.SettingPanel___ZRvFB {\\n  -webkit-user-select: text;\\n          user-select: text;\\n\\n  position: fixed;\\n  z-index: 1;\\n  top: 0;\\n  bottom: 0;\\n\\n  overflow: auto;\\n\\n  max-width: calc(100% - 5em);\\n  height: fit-content;\\n  max-height: 95%;\\n  margin: auto;\\n  border-radius: 0.3em;\\n\\n  font-size: 1.2em;\\n  color: var(--text);\\n\\n  background-color: var(--page-bg);\\n  box-shadow:\\n    rgb(0 0 0 / 20%) 0 3px 1px -2px,\\n    rgb(0 0 0 / 14%) 0 2px 2px 0,\\n    rgb(0 0 0 / 12%) 0 1px 5px 0;\\n}\\n\\n.SettingPanel___ZRvFB hr {\\n    margin: 0.5em 0;\\n    color: white;\\n  }\\n\\n.SettingPanel___ZRvFB > hr {\\n    margin: 0;\\n  }\\n\\n.SettingBlock___qxNyt {\\n  display: grid;\\n  grid-template-rows: max-content 1fr;\\n  transition: grid-template-rows 200ms ease-out;\\n}\\n\\n.SettingBlock___qxNyt .SettingBlockBody___Wirnd {\\n    z-index: 0;\\n    overflow: hidden;\\n    padding: 0 0.5em;\\n    padding-bottom: 1em;\\n  }\\n\\n:is(.SettingBlock___qxNyt .SettingBlockBody___Wirnd) > div + :is(.SettingBlock___qxNyt .SettingBlockBody___Wirnd) > div {\\n      margin-top: 1em;\\n    }\\n\\n:is(.SettingBlock___qxNyt .SettingBlockBody___Wirnd) input,:is(.SettingBlock___qxNyt .SettingBlockBody___Wirnd) textarea {\\n      width: 97%;\\n      margin-top: 0.3em;\\n    }\\n\\n.SettingBlock___qxNyt[data-show='false'] {\\n    grid-template-rows: max-content 0fr;\\n    padding-bottom: unset;\\n  }\\n\\n.SettingBlock___qxNyt[data-show='false'] .SettingBlockBody___Wirnd {\\n      padding: unset;\\n    }\\n\\n.SettingBlockSubtitle___cv0Ji {\\n  cursor: pointer;\\n\\n  position: sticky;\\n  z-index: 1;\\n  top: 0;\\n\\n  height: 3em;\\n  margin-bottom: 0.1em;\\n\\n  font-size: 0.7em;\\n  line-height: 3em;\\n  color: var(--text-secondary);\\n  text-align: center;\\n\\n  background-color: var(--page-bg);\\n}\\n\\n.SettingBlockBody___Wirnd .SettingBlockSubtitle___cv0Ji {\\n  position: unset;\\n  height: 1em;\\n  line-height: 1em;\\n}\\n\\n.SettingsItem___aJhRD {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n:is(.SettingsItem___aJhRD,.SettingsShowItem___l-D2E) + .SettingsItem___aJhRD {\\n    margin-top: 1em;\\n  }\\n\\n.SettingsItem___aJhRD[data-disabled] {\\n    opacity: 0.5;\\n  }\\n\\n.SettingsItem___aJhRD[data-disabled] button {\\n      cursor: not-allowed;\\n    }\\n\\n.SettingsItemName___UP6zJ {\\n  max-width: calc(100% - 4em);\\n\\n  font-size: 0.9em;\\n  text-align: start;\\n  overflow-wrap: anywhere;\\n  white-space: pre-wrap;\\n}\\n\\n/* \u5F00\u5173\u5F0F\u8BBE\u7F6E\u9879 */\\n.SettingsItemSwitch___LVGr9 {\\n  cursor: pointer;\\n\\n  display: inline-flex;\\n  align-items: center;\\n\\n  width: 2.3em;\\n  height: 0.8em;\\n  margin: 0.3em;\\n  padding: 0;\\n  border: 0;\\n  border-radius: 1em;\\n\\n  background-color: var(--switch-bg);\\n}\\n\\n/* \u5F00\u5173\u91CC\u7684\u5706\u5F62\u6309\u94AE */\\n.SettingsItemSwitchRound___Ds0B8 {\\n  transform: translateX(-10%);\\n\\n  width: 1.15em;\\n  height: 1.15em;\\n  border-radius: 100%;\\n\\n  background: var(--switch);\\n  box-shadow:\\n    0 2px 1px -1px rgb(0 0 0 / 20%),\\n    0 1px 1px 0 rgb(0 0 0 / 14%),\\n    0 1px 3px 0 rgb(0 0 0 / 12%);\\n\\n  transition: transform 100ms;\\n}\\n\\n.SettingsItemSwitch___LVGr9[data-checked='true'] {\\n  background: var(--secondary-bg);\\n}\\n\\n.SettingsItemSwitch___LVGr9[data-checked='true'] .SettingsItemSwitchRound___Ds0B8 {\\n    transform: translateX(110%);\\n    background: var(--secondary);\\n  }\\n\\n/* \u56FE\u6807\u6309\u94AE\u5F0F\u8BBE\u7F6E\u9879 */\\n.SettingsItemIconButton___Cs7BQ {\\n  cursor: pointer;\\n\\n  position: absolute;\\n  right: 0;\\n\\n  height: 1em;\\n  border: none;\\n\\n  font-size: 1.5em;\\n  color: var(--text);\\n\\n  background-color: transparent;\\n}\\n\\n/* \u9009\u62E9\u5668\u8BBE\u7F6E\u9879 */\\n.SettingsItemSelect___CvFKx {\\n  cursor: pointer;\\n\\n  max-width: 6.5em;\\n  margin: 0;\\n  padding: 0.3em;\\n  border: none;\\n  border-radius: 5px;\\n\\n  font-size: 0.9em;\\n  color: var(--text);\\n\\n  background-color: var(--hover-bg-color);\\n  outline: none;\\n}\\n.SettingsItemSelect___CvFKx::picker(select) {\\n    color: var(--text);\\n    background-color: var(--page-bg);\\n  }\\n.SettingsItemSelect___CvFKx option {\\n    color: var(--text);\\n    background-color: var(--page-bg);\\n  }\\n\\n/* \u5173\u95ED\u8BBE\u7F6E\u5F39\u7A97\u7684\u906E\u7F69 */\\n.closeCover___qLIp5 {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.SettingsShowItem___l-D2E {\\n  display: grid;\\n  transition: grid-template-rows 200ms ease-out;\\n}\\n\\n.SettingsShowItem___l-D2E > .SettingsShowItemBody___bgxxq {\\n    overflow: hidden;\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n:is(.SettingsShowItem___l-D2E > .SettingsShowItemBody___bgxxq) > .SettingsItem___aJhRD {\\n      margin-top: 1em;\\n    }\\n\\n:is(.SettingsShowItem___l-D2E > .SettingsShowItemBody___bgxxq) > :is(textarea,input) {\\n      margin: 0.4em 0.2em 0;\\n      line-height: 1.2;\\n    }\\n\\n[data-only-number] {\\n  padding: 0 0.2em;\\n}\\n\\n[data-only-number] + span {\\n    margin-left: -0.1em;\\n  }\\n\\n.hotkeys___uu-Xe {\\n  position: relative;\\n  z-index: 1;\\n\\n  display: flex;\\n  flex-grow: 1;\\n  flex-wrap: wrap;\\n  align-items: center;\\n\\n  padding: 0.2em;\\n  padding-top: 2em;\\n  border-bottom: 1px solid var(--secondary-bg);\\n\\n  font-size: 0.9em;\\n  color: var(--text);\\n}\\n\\n.hotkeys___uu-Xe + .hotkeys___uu-Xe {\\n    margin-top: 0.5em;\\n  }\\n\\n.hotkeys___uu-Xe:last-child {\\n    border-bottom: none;\\n  }\\n\\n.hotkeysItem___d9IKS {\\n  cursor: pointer;\\n\\n  display: flex;\\n  align-items: center;\\n\\n  box-sizing: content-box;\\n  height: 1em;\\n  margin: 0.3em;\\n  padding: 0.2em 1.2em;\\n  border-radius: 0.3em;\\n\\n  font-family: serif;\\n\\n  outline: 1px solid;\\n  outline-color: var(--secondary-bg);\\n}\\n\\n.hotkeysItem___d9IKS > svg {\\n    display: none;\\n\\n    height: 1em;\\n    margin-left: 0.4em;\\n    border-radius: 1em;\\n\\n    color: var(--page-bg);\\n\\n    opacity: 0.5;\\n    background-color: var(--text);\\n  }\\n\\n:is(.hotkeysItem___d9IKS > svg):hover {\\n      opacity: 0.9;\\n    }\\n\\n.hotkeysItem___d9IKS:hover {\\n    padding: 0.2em 0.5em;\\n  }\\n\\n.hotkeysItem___d9IKS:hover > svg {\\n      display: unset;\\n    }\\n\\n.hotkeysItem___d9IKS:focus,.hotkeysItem___d9IKS:focus-visible {\\n    outline: var(--text) solid 2px;\\n  }\\n\\n.hotkeysHeader___jU7vr {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n\\n  display: flex;\\n  align-items: center;\\n\\n  box-sizing: border-box;\\n  width: 100%;\\n  padding: 0 0.5em;\\n}\\n\\n.hotkeysHeader___jU7vr > p {\\n    line-height: 1em;\\n    text-align: start;\\n    overflow-wrap: anywhere;\\n    white-space: pre-wrap;\\n\\n    background-color: var(--page-bg);\\n  }\\n\\n.hotkeysHeader___jU7vr > div[title] {\\n    cursor: pointer;\\n\\n    transform: scale(0);\\n\\n    display: flex;\\n\\n    background-color: var(--page-bg);\\n\\n    transition: transform 100ms;\\n  }\\n\\n:is(.hotkeysHeader___jU7vr > div[title]) > svg {\\n      width: 1.6em;\\n    }\\n\\n.hotkeys___uu-Xe:hover div[title] {\\n  transform: scale(1);\\n}\\n\\n.scrollbar___hLToV {\\n  --arrow-y: clamp(\\n    0.45em,\\n    calc(var(--slider-midpoint)),\\n    calc(var(--scroll-length) - 0.45em)\\n  );\\n\\n  touch-action: none;\\n  -webkit-user-select: none;\\n          user-select: none;\\n\\n  position: absolute;\\n  z-index: 9;\\n  top: 1%;\\n  right: 3px;\\n\\n  display: flex;\\n  flex-direction: column;\\n\\n  width: 5px;\\n  height: 98%;\\n\\n  /* \u6269\u5927\u89E6\u53D1\u8303\u56F4 */\\n  border-left: max(6vw, 1em) solid transparent;\\n}\\n\\n.scrollbar___hLToV > div {\\n    pointer-events: none;\\n\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n\\n.scrollbarPage___qghUs {\\n  transform-origin: bottom;\\n  transform: scaleY(1);\\n\\n  flex-grow: 1;\\n\\n  width: 100%;\\n  height: 100%;\\n\\n  background-color: var(--secondary);\\n\\n  transition: transform 1s;\\n}\\n\\n.scrollbarPage___qghUs[data-type='loaded'] {\\n    transform: scaleY(0);\\n  }\\n\\n.scrollbarPage___qghUs[data-upscale] {\\n    transform: scaleY(1);\\n    background-color: #b39ddb;\\n  }\\n\\n.scrollbarPage___qghUs[data-upscale='loading'] {\\n    background-color: #d1c4e9;\\n  }\\n\\n.scrollbarPage___qghUs[data-translation-type] {\\n    transform-origin: top;\\n    transform: scaleY(1);\\n    background-color: transparent;\\n  }\\n\\n.scrollbarPage___qghUs[data-translation-type='wait'] {\\n    background-color: #81c784;\\n  }\\n\\n.scrollbarPage___qghUs[data-translation-type='show'] {\\n    background-color: #4caf50;\\n  }\\n\\n.scrollbarPage___qghUs[data-translation-type='error'] {\\n    background-color: #f005;\\n  }\\n\\n.scrollbarPage___qghUs[data-type='wait'] {\\n    opacity: 0.4;\\n  }\\n\\n.scrollbarPage___qghUs[data-type='error'] {\\n    background-color: #f005;\\n  }\\n\\n/* \u6EDA\u52A8\u6761\u6ED1\u5757 */\\n.scrollbarSlider___r1fWf {\\n  position: absolute;\\n  z-index: 1;\\n  transform: translateY(var(--slider-top));\\n\\n  justify-content: center;\\n\\n  width: 100%;\\n  height: var(--slider-height);\\n  border-radius: 1em;\\n\\n  opacity: 1;\\n  background-color: #fff5;\\n\\n  transition:\\n    transform 150ms,\\n    opacity 150ms;\\n}\\n\\n/* \u60AC\u6D6E\u6846 */\\n.scrollbarPoper___XK5Rk {\\n  --poper-top: clamp(\\n    0%,\\n    calc(var(--slider-midpoint) - 50%),\\n    calc(var(--scroll-length) - 100%)\\n  );\\n\\n  position: absolute;\\n  right: 2em;\\n  transform: translateY(var(--poper-top));\\n\\n  width: fit-content;\\n  min-width: 1em;\\n  min-height: 1.5em;\\n  padding: 0.2em 0.5em;\\n  border-radius: 0.3em;\\n\\n  font-size: 0.8em;\\n  line-height: 1.5em;\\n  color: white;\\n  text-align: center;\\n  white-space: pre;\\n\\n  background-color: #303030;\\n}\\n\\n/* \u60AC\u6D6E\u6846\u7BAD\u5934 */\\n.scrollbar___hLToV::before {\\n  content: '';\\n\\n  position: absolute;\\n  right: 2em;\\n  transform: translate(140%, calc(var(--arrow-y) - 50%));\\n\\n  border: 0.4em solid transparent;\\n  border-left: 0.5em solid #303030;\\n\\n  background-color: transparent;\\n}\\n\\n/*\\n * \u6EDA\u52A8\u6761\u90E8\u4EF6\u7684\u663E\u9690\\n */\\n\\n/* \u60AC\u6D6E\u63D0\u793A\u9ED8\u8BA4\u9690\u85CF */\\n.scrollbar___hLToV::before,\\n.scrollbarPoper___XK5Rk {\\n  opacity: 0;\\n  transition:\\n    opacity 150ms,\\n    transform 150ms;\\n}\\n\\n/* \u63A7\u5236\u6EDA\u52A8\u6761\u60AC\u6D6E\u63D0\u793A\u7684\u663E\u793A */\\n:is(.scrollbar___hLToV:hover,.scrollbar___hLToV[data-force-show]) .scrollbarPoper___XK5Rk,:is(.scrollbar___hLToV:hover,.scrollbar___hLToV[data-force-show]) .scrollbarSlider___r1fWf,:is(.scrollbar___hLToV:hover,.scrollbar___hLToV[data-force-show])::before {\\n    opacity: 1;\\n  }\\n\\n/* \u62D6\u52A8\u6EDA\u52A8\u6761\u65F6\u53D6\u6D88\u79FB\u52A8\u8FC7\u6E21\u52A8\u753B\uFF0C\u786E\u4FDD\u8DDF\u624B */\\n.scrollbar___hLToV[data-drag]::before,.scrollbar___hLToV[data-drag] .scrollbarPoper___XK5Rk,.scrollbar___hLToV[data-drag] .scrollbarSlider___r1fWf {\\n    transition: opacity 150ms;\\n  }\\n\\n/* \u5B9E\u73B0\u81EA\u52A8\u9690\u85CF */\\n.scrollbar___hLToV[data-auto-hidden]:not([data-force-show]) .scrollbarSlider___r1fWf {\\n    opacity: 0;\\n  }\\n.scrollbar___hLToV[data-auto-hidden]:not([data-force-show]):hover .scrollbarSlider___r1fWf {\\n    opacity: 1;\\n  }\\n\\n/*\\n * \u6EDA\u52A8\u6761\u4F4D\u7F6E\\n */\\n\\n.scrollbar___hLToV[data-position='hidden'] {\\n  display: none;\\n}\\n\\n.scrollbar___hLToV[data-position='top'] {\\n  top: 1px;\\n\\n  /* \u6269\u5927\u89E6\u53D1\u8303\u56F4 */\\n  border-bottom: max(6vh, 1em) solid transparent;\\n}\\n\\n.scrollbar___hLToV[data-position='top']::before {\\n    top: 1.2em;\\n    right: 0;\\n    transform: translate(var(--arrow-x), -120%);\\n    border-bottom: 0.5em solid #303030;\\n  }\\n\\n.scrollbar___hLToV[data-position='top'] .scrollbarPoper___XK5Rk {\\n    top: 1.2em;\\n  }\\n\\n.scrollbar___hLToV[data-position='bottom'] {\\n  top: unset;\\n  bottom: 1px;\\n\\n  /* \u6269\u5927\u89E6\u53D1\u8303\u56F4 */\\n  border-top: max(6vh, 1em) solid transparent;\\n}\\n\\n.scrollbar___hLToV[data-position='bottom']::before {\\n    right: 0;\\n    bottom: 1.2em;\\n    transform: translate(var(--arrow-x), 120%);\\n    border-top: 0.5em solid #303030;\\n  }\\n\\n.scrollbar___hLToV[data-position='bottom'] .scrollbarPoper___XK5Rk {\\n    bottom: 1.2em;\\n  }\\n\\n.scrollbar___hLToV[data-position='top'],\\n.scrollbar___hLToV[data-position='bottom'] {\\n  --arrow-x: calc(var(--arrow-y) * -1 + 50%);\\n\\n  right: 1%;\\n\\n  flex-direction: row-reverse;\\n\\n  width: 98%;\\n  height: 5px;\\n  border-left: none;\\n}\\n\\n:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom'])::before {\\n    border-left: 0.4em solid transparent;\\n  }\\n\\n/* stylelint-disable-next-line no-descending-specificity */\\n\\n:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarSlider___r1fWf {\\n    transform: translateX(calc(var(--slider-top) * -1));\\n    width: var(--slider-height);\\n    height: 100%;\\n  }\\n\\n:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPoper___XK5Rk {\\n    right: unset;\\n    transform: translateX(calc(var(--poper-top) * -1));\\n    padding: 0.1em 0.3em;\\n  }\\n\\n[data-dir='ltr']:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) {\\n    --arrow-x: calc(var(--arrow-y) - 50%);\\n\\n    flex-direction: row;\\n  }\\n\\n[data-dir='ltr']:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom'])::before {\\n      right: unset;\\n      left: 0;\\n    }\\n\\n/* stylelint-disable-next-line no-descending-specificity */\\n\\n[data-dir='ltr']:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarSlider___r1fWf {\\n      transform: translateX(var(--top));\\n    }\\n\\n[data-dir='ltr']:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPoper___XK5Rk {\\n      transform: translateX(var(--poper-top));\\n    }\\n\\n/* \u5C06 scaleY \u6539\u6210 scaleX */\\n\\n:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPage___qghUs {\\n    transform: scaleX(1);\\n  }\\n\\n[data-type='loaded']:is(:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPage___qghUs) {\\n      transform: scaleX(0);\\n    }\\n\\n[data-translation-type]:is(:is(.scrollbar___hLToV[data-position='top'],.scrollbar___hLToV[data-position='bottom']) .scrollbarPage___qghUs) {\\n      transform: scaleX(1);\\n    }\\n\\n/* stylelint-disable-next-line no-descending-specificity */\\n\\n.scrollbar___hLToV[data-is-abreast-mode] .scrollbarPoper___XK5Rk {\\n    writing-mode: vertical-rl;\\n    line-height: 1.5em;\\n    text-orientation: upright;\\n  }\\n\\n.scrollbar___hLToV[data-is-abreast-mode][data-dir='ltr'] .scrollbarPoper___XK5Rk {\\n    writing-mode: vertical-lr;\\n  }\\n\\n/* \u5377\u8F74\u6A21\u5F0F\u4E0B\u53D6\u6D88\u6EDA\u52A8\u6761\u7684\u4F4D\u79FB\u52A8\u753B */\\n.root___Hf5H2[data-scroll-mode] .scrollbar___hLToV::before,\\n.root___Hf5H2[data-scroll-mode] :is(.scrollbarSlider___r1fWf, .scrollbarPoper___XK5Rk) {\\n  transition: opacity 150ms;\\n}\\n\\n/* \u79FB\u52A8\u7AEF\u4E0B\u7981\u7528\u60AC\u6D6E\u663E\u793A */\\n:is(.root___Hf5H2[data-mobile] .scrollbar___hLToV:hover)::before,:is(.root___Hf5H2[data-mobile] .scrollbar___hLToV:hover) .scrollbarPoper___XK5Rk {\\n      opacity: 0;\\n    }\\n.touchAreaRoot___UN-W1 {\\n  pointer-events: none;\\n  -webkit-user-select: none;\\n          user-select: none;\\n\\n  position: absolute;\\n  top: 0;\\n\\n  display: grid;\\n  grid-template-columns: 1fr min(30%, 10em) 1fr;\\n  grid-template-rows: 1fr min(20%, 10em) 1fr;\\n\\n  width: 100%;\\n  height: 100%;\\n\\n  font-size: 3em;\\n  color: white;\\n  letter-spacing: 0.5em;\\n\\n  opacity: 0;\\n\\n  transition: opacity 400ms;\\n}\\n.touchAreaRoot___UN-W1[data-show] {\\n    opacity: 1;\\n  }\\n.touchAreaRoot___UN-W1 .touchArea___F6Hkh {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    text-align: center;\\n  }\\n[data-area='prev']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh),[data-area='PREV']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh) {\\n      background-color: #95e1d3e6;\\n    }\\n[data-area='menu']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh),[data-area='MENU']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh) {\\n      background-color: #fce38ae6;\\n    }\\n[data-area='next']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh),[data-area='NEXT']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh) {\\n      background-color: #f38181e6;\\n    }\\n[data-area='PREV']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh)::after {\\n      content: var(--i18n-touch-area-prev);\\n    }\\n[data-area='MENU']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh)::after {\\n      content: var(--i18n-touch-area-menu);\\n    }\\n[data-area='NEXT']:is(.touchAreaRoot___UN-W1 .touchArea___F6Hkh)::after {\\n      content: var(--i18n-touch-area-next);\\n    }\\n.touchAreaRoot___UN-W1[data-vert='true'] {\\n    flex-direction: column !important;\\n  }\\n.touchAreaRoot___UN-W1:not([data-turn-page]) .touchArea___F6Hkh[data-area='next'],.touchAreaRoot___UN-W1:not([data-turn-page]) .touchArea___F6Hkh[data-area='NEXT'],.touchAreaRoot___UN-W1:not([data-turn-page]) .touchArea___F6Hkh[data-area='prev'],.touchAreaRoot___UN-W1:not([data-turn-page]) .touchArea___F6Hkh[data-area='PREV'] {\\n      visibility: hidden;\\n    }\\n.touchAreaRoot___UN-W1[data-shrink-menu] {\\n    grid-template-columns: 1fr 2em 1fr;\\n  }\\n.touchAreaRoot___UN-W1[data-shrink-menu] .touchArea___F6Hkh[data-area='MENU'] {\\n      letter-spacing: 0;\\n    }\\n\\n.root___Hf5H2[data-mobile] .touchAreaRoot___UN-W1 {\\n    flex-direction: column !important;\\n    letter-spacing: 0;\\n  }\\n\\n.root___Hf5H2[data-mobile] [data-area]::after {\\n    font-size: 0.8em;\\n  }\\n\\n.root___Hf5H2 {\\n  position: relative;\\n\\n  overflow: hidden;\\n\\n  width: 100%;\\n  height: 100%;\\n\\n  font-size: 1em;\\n\\n  background-color: var(--bg);\\n  outline: 0;\\n}\\n\\n.root___Hf5H2 a {\\n    color: var(--text-secondary);\\n  }\\n\\n.root___Hf5H2[data-mobile] {\\n    font-size: 0.8em;\\n  }\\n\\n.hidden___rxU-6 {\\n  display: none !important;\\n}\\n\\n.invisible___cO-hs {\\n  visibility: hidden !important;\\n}\\n\\n.beautifyScrollbar___lb6kJ {\\n  /* \u706B\u72D0\u7684\u6EDA\u52A8\u6761\u6837\u5F0F */\\n  scrollbar-color: var(--scrollbar-slider) transparent;\\n  scrollbar-width: thin;\\n\\n  /* chrome \u7684\u6EDA\u52A8\u6761\u6837\u5F0F */\\n}\\n\\n.beautifyScrollbar___lb6kJ::-webkit-scrollbar {\\n    width: 5px;\\n    height: 10px;\\n  }\\n\\n.beautifyScrollbar___lb6kJ::-webkit-scrollbar-track {\\n    background: transparent;\\n  }\\n\\n.beautifyScrollbar___lb6kJ::-webkit-scrollbar-thumb {\\n    background: var(--scrollbar-slider);\\n  }\\n\\np,\\nimg {\\n  margin: 0;\\n}\\n\\n:where(div, div:focus, div:focus-within, div:focus-visible, button) {\\n  border: none;\\n  outline: none;\\n}\\n\\nblockquote {\\n  margin: 0.5em 0;\\n  padding: 0;\\n  padding-left: 1em;\\n  border-left: 0.25em solid var(--text-secondary, #607d8b);\\n\\n  font-size: 0.9em;\\n  font-style: italic;\\n  line-height: 1.2em;\\n  color: var(--text-secondary);\\n  text-align: start;\\n  overflow-wrap: anywhere;\\n  white-space: pre-wrap;\\n}\\n\\nsvg {\\n  width: 1em;\\n}\\n";
//#endregion
//#region src/components/Manga/index.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
solid_js.enableScheduling();
/** \u6F2B\u753B\u7EC4\u4EF6 */
const Manga = (props) => {
	css$1(index_module_default);
	useCssVar();
	solid_js.onMount(() => useInit(props));
	solid_js.createEffect(() => props.show && focus());
	return (() => {
		var _el$ = _tmpl$();
		solid_js_web.addEventListener(_el$, "wheel", handleWheel);
		solid_js_web.addEventListener(_el$, "mousedown", handleMouseDown);
		solid_js_web.addEventListener(_el$, "click", stopPropagation);
		var _ref$ = bindRef("root");
		typeof _ref$ === "function" && solid_js_web.use(_ref$, _el$);
		_el$.addEventListener("keydown", handleKeyDown, true);
		_el$.addEventListener("keyup", handleKeyUp, true);
		solid_js_web.insert(_el$, solid_js_web.createComponent(ComicImgFlow, {}), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(TouchArea, {}), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(Scrollbar, {}), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(WheelProgress, {}), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(EndPage, {}), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(Toolbar, {}), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes$2.root, _v$2 = {
				[classes$2.hidden]: props.show === false,
				[props.class ?? ""]: Boolean(props.class),
				...props.classList
			}, _v$3 = helper.boolDataVal(store.isMobile), _v$4 = helper.boolDataVal(store.option.scrollMode.enabled), _v$5 = helper.boolDataVal(store.option.pageTip === "always" || store.option.pageTip === "auto" && (store.show.pageTip || store.isScrollbarHover));
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_p$.t = solid_js_web.classList(_el$, _v$2, _p$.t);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "data-mobile", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$, "data-scroll-mode", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setAttribute(_el$, "data-page-tip", _p$.i = _v$5);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0
		});
		return _el$;
	})();
};
//#endregion
exports.DRAG_TURN_ANIMATION_DURATION = DRAG_TURN_ANIMATION_DURATION;
exports.Manga = Manga;
exports.SettingBlockSubtitle = SettingBlockSubtitle;
exports.SettingHotkeys = SettingHotkeys;
exports.SettingsItem = SettingsItem;
exports.SettingsItemButton = SettingsItemButton;
exports.SettingsItemNumber = SettingsItemNumber;
exports.SettingsItemSwitch = SettingsItemSwitch;
exports._setAbreastScrollFill = _setAbreastScrollFill;
exports.abreastArea = abreastArea;
exports.abreastColumnWidth = abreastColumnWidth;
exports.abreastContentWidth = abreastContentWidth;
exports.abreastScrollFill = abreastScrollFill;
exports.abreastScrollWidth = abreastScrollWidth;
exports.abreastShowColumn = abreastShowColumn;
exports.activeImgIndex = activeImgIndex;
exports.activePage = activePage;
exports.allowBatchTranslation = allowBatchTranslation;
exports.autoPageNum = autoPageNum;
exports.bindOption = bindOption;
exports.bindRef = bindRef;
exports.bindScrollTop = bindScrollTop;
exports.bound = bound;
exports.cancelTurnAnimation = cancelTurnAnimation;
exports.checkImgSize = checkImgSize;
exports.constantScroll = constantScroll;
exports.contentHeight = contentHeight;
exports.cotransSettings = cotransSettings;
exports.defaultHotkeys = defaultHotkeys;
exports.defaultOption = defaultOption;
exports.detectScrollDevice = detectScrollDevice;
exports.doubleClickZoom = doubleClickZoom;
exports.findTopPage = findTopPage;
exports.finishTurnAnimation = finishTurnAnimation;
exports.focus = focus;
exports.getCropMargin = getCropMargin;
exports.getImg = getImg;
exports.getImgDisplaySize = getImgDisplaySize;
exports.getImgEle = getImgEle;
exports.getImgIndexs = getImgIndexs;
exports.getImgTip = getImgTip;
exports.getImgType = getImgType;
exports.getPageTip = getPageTip;
exports.getPageTop = getPageTop;
exports.getTurnPageDir = getTurnPageDir;
exports.handleClick = handleClick;
exports.handleComicData = handleComicData;
exports.handleEndTurnPage = handleEndTurnPage;
exports.handleHotkey = handleHotkey;
exports.handleImgError = handleImgError;
exports.handleImgLoaded = handleImgLoaded;
exports.handleKeyDown = handleKeyDown;
exports.handleKeyUp = handleKeyUp;
exports.handleMangaFlowDrag = handleMangaFlowDrag;
exports.handleMouseDown = handleMouseDown;
exports.handlePinchZoom = handlePinchZoom;
exports.handleScrollModeDrag = handleScrollModeDrag;
exports.handleScrollModeZoom = handleScrollModeZoom;
exports.handleScrollbarSlider = handleScrollbarSlider;
exports.handleWheel = handleWheel;
exports.handleZoomDrag = handleZoomDrag;
exports.hotkeysMap = hotkeysMap;
exports.imgAreaStyle = imgAreaStyle;
exports.imgIndexMap = imgIndexMap;
exports.imgList = imgList;
exports.imgPageMap = imgPageMap;
exports.initStore = initStore;
exports.isAbreastMode = isAbreastMode;
exports.isBottom = isBottom;
exports.isDoubleMode = isDoubleMode;
exports.isDrag = isDrag;
exports.isEnableBg = isEnableBg;
exports.isOnePageMode = isOnePageMode;
exports.isScrollMode = isScrollMode;
exports.isSingleMode = isSingleMode;
exports.isTop = isTop;
exports.isTranslatingAll = isTranslatingAll;
exports.isTranslatingImage = isTranslatingImage;
exports.isTranslatingToEnd = isTranslatingToEnd;
exports.isUpscale = isUpscale;
exports.isUseAutoScale = isUseAutoScale;
exports.isWideType = isWideType;
exports.jumpToImg = jumpToImg;
exports.listenHotkey = listenHotkey;
exports.loadState = loadState;
exports.mitSettings = mitSettings;
exports.nowFillIndex = nowFillIndex;
exports.openScrollLock = openScrollLock;
exports.pageHeightList = pageHeightList;
exports.pageNum = pageNum;
exports.pageTopList = pageTopList;
exports.placeholderSize = placeholderSize;
exports.preloadNum = preloadNum;
exports.refs = refs;
exports.reloadImg = reloadImg;
exports.renderImgList = renderImgList;
exports.resetImgState = resetImgState;
exports.resetPage = resetPage;
exports.resetUI = resetUI;
exports.resumeReadProgress = resumeReadProgress;
exports.saveReadProgress = saveReadProgress;
exports.saveScrollProgress = saveScrollProgress;
exports.scrollBy = scrollBy;
exports.scrollDomLength = scrollDomLength;
exports.scrollLength = scrollLength;
exports.scrollPageList = scrollPageList;
exports.scrollPercentage = scrollPercentage;
exports.scrollPosition = scrollPosition;
exports.scrollProgress = scrollProgress;
exports.scrollTo = scrollTo;
exports.scrollTop = scrollTop;
exports.scrollViewImg = scrollViewImg;
exports.setAbreastScrollFill = setAbreastScrollFill;
exports.setAdjustToWidth = setAdjustToWidth;
exports.setDefaultHotkeys = setDefaultHotkeys;
exports.setImgScale = setImgScale;
exports.setImgTranslationEnbale = setImgTranslationEnbale;
exports.setIsDrag = setIsDrag;
exports.setOption = setOption;
exports.setState = setState;
exports.showImgList = showImgList;
exports.sliderHeight = sliderHeight;
exports.sliderMidpoint = sliderMidpoint;
exports.sliderTop = sliderTop;
exports.stopAutoScroll = stopAutoScroll;
exports.store = store;
exports.switchAutoScroll = switchAutoScroll;
exports.switchDir = switchDir;
exports.switchFillEffect = switchFillEffect;
exports.switchFullscreen = switchFullscreen;
exports.switchImgRecognition = switchImgRecognition;
exports.switchOnePageMode = switchOnePageMode;
exports.switchScrollMode = switchScrollMode;
exports.syncImgLoadState = syncImgLoadState;
exports.touches = touches;
exports.translateAll = translateAll;
exports.translateCurrent = translateCurrent;
exports.translateToEnd = translateToEnd;
exports.translationAll = translationAll;
exports.translationImage = translationImage;
exports.translationImgs = translationImgs;
exports.turnPage = turnPage;
exports.turnPageAnimation = turnPageAnimation;
exports.updateImgLoadType = updateImgLoadType;
exports.updateImgSize = updateImgSize;
exports.updateImgType = updateImgType;
exports.updateMitTranslators = updateMitTranslators;
exports.updatePageData = updatePageData;
exports.updateShowRange = updateShowRange;
exports.upscaleImage = upscaleImage;
exports.watchDomSize = watchDomSize;
exports.wheelRatchet = wheelRatchet;
exports.withOptionalState = withOptionalState;
exports.zoom = zoom;
`,"components/IconButton":`
let solid_js_web = require("solid-js/web");
let helper = require("helper");
let solid_js = require("solid-js");
//#region src/components/IconButton/index.module.css
const classes = {
	"iconButtonItem": "iconButtonItem___vTPHz",
	"iconButton": "iconButton___dhWw3",
	"enabled": "enabled___eXH34",
	"disable": "disable___7C-Rj",
	"iconButtonPopper": "iconButtonPopper___dVIu-",
	"hidden": "hidden___v7N-q"
};
//#endregion
//#region src/components/IconButton/index.module.css?inline
var index_module_default = ".iconButtonItem___vTPHz {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.iconButton___dhWw3 {\\n  cursor: pointer;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: 1.5em;\\n  height: 1.5em;\\n  margin: 0.1em;\\n  padding: 0;\\n  border-style: none;\\n  border-radius: 9999px;\\n\\n  font-size: 1.5em;\\n  color: var(--text, white);\\n\\n  background-color: transparent;\\n  outline: none;\\n}\\n\\n.iconButton___dhWw3:focus,.iconButton___dhWw3:hover {\\n    background-color: var(--hover-bg-color, #fff3);\\n  }\\n\\n.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj) {\\n    color: var(--text-bg, #121212);\\n    background-color: var(--text, white);\\n  }\\n\\n.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj):focus,.iconButton___dhWw3.enabled___eXH34:not(.disable___7C-Rj):hover {\\n      background-color: var(--hover-bg-color-enable, #fffa);\\n    }\\n\\n.iconButton___dhWw3.disable___7C-Rj {\\n    cursor: not-allowed;\\n    opacity: 0.5;\\n    background-color: unset;\\n  }\\n\\n.iconButton___dhWw3 > svg {\\n    width: 1em;\\n  }\\n\\n/* \u9ED8\u8BA4\u60AC\u6D6E\u6846\u6837\u5F0F */\\n.iconButtonPopper___dVIu- {\\n  pointer-events: none;\\n  -webkit-user-select: none;\\n          user-select: none;\\n\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n\\n  display: flex;\\n  align-items: center;\\n\\n  padding: 0.4em 0.5em;\\n  border-radius: 0.3em;\\n\\n  font-size: 0.8em;\\n  color: white;\\n  white-space: nowrap;\\n\\n  opacity: 0;\\n  background-color: #303030;\\n}\\n.iconButtonPopper___dVIu-[data-placement='right'] {\\n    left: calc(100% + 1.5em);\\n  }\\n.iconButtonPopper___dVIu-[data-placement='right']::before {\\n      right: calc(100% + 0.5em);\\n      border-right-color: var(--switch-bg, #6e6e6e);\\n      border-right-width: 0.5em;\\n    }\\n.iconButtonPopper___dVIu-[data-placement='left'] {\\n    right: calc(100% + 1.5em);\\n  }\\n.iconButtonPopper___dVIu-[data-placement='left']::before {\\n      left: calc(100% + 0.5em);\\n      border-left-color: var(--switch-bg, #6e6e6e);\\n      border-left-width: 0.5em;\\n    }\\n\\n/* \u5DE5\u5177\u680F\u6309\u94AE\u7684\u60AC\u6D6E\u6846\u7684\u7BAD\u5934 */\\n.iconButtonPopper___dVIu-::before {\\n  pointer-events: none;\\n  content: '';\\n\\n  position: absolute;\\n\\n  border-color: transparent;\\n  border-style: solid;\\n  border-width: 0.4em;\\n\\n  background-color: transparent;\\n\\n  transition: opacity 150ms;\\n}\\n\\n/* \u63A7\u5236\u60AC\u6D6E\u6846\u7684\u663E\u793A */\\n.iconButtonItem___vTPHz:is(:hover, :focus, [data-show='true']) .iconButtonPopper___dVIu- {\\n  opacity: 1;\\n}\\n\\n.hidden___v7N-q {\\n  display: none;\\n}\\n";
//#endregion
//#region src/components/IconButton/index.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<div><button type=button tabindex=0>\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
/** \u56FE\u6807\u6309\u94AE */
const IconButton = (_props) => {
	const props = solid_js.mergeProps({ placement: "right" }, _props);
	let buttonRef;
	const handleClick = (e) => {
		if (props.disable) return;
		props.onClick?.(e);
		buttonRef?.blur();
	};
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild;
		solid_js_web.use((ref) => helper.css(index_module_default, ref), _el$);
		solid_js_web.addEventListener(_el$2, "click", handleClick);
		var _ref$ = buttonRef;
		typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$2) : buttonRef = _el$2;
		solid_js_web.insert(_el$2, () => props.children);
		solid_js_web.insert(_el$, (() => {
			var _c$ = solid_js_web.memo(() => !!(props.popper || props.tip));
			return () => _c$() ? (() => {
				var _el$3 = _tmpl$2();
				solid_js_web.insert(_el$3, () => props.popper || props.tip);
				solid_js_web.effect((_p$) => {
					var _v$7 = [classes.iconButtonPopper, props.popperClassName].join(" "), _v$8 = props.placement;
					_v$7 !== _p$.e && solid_js_web.className(_el$3, _p$.e = _v$7);
					_v$8 !== _p$.t && solid_js_web.setAttribute(_el$3, "data-placement", _p$.t = _v$8);
					return _p$;
				}, {
					e: void 0,
					t: void 0
				});
				return _el$3;
			})() : null;
		})(), null);
		solid_js_web.effect((_p$) => {
			var _v$ = classes.iconButtonItem, _v$2 = props.showTip, _v$3 = props.tip, _v$4 = classes.iconButton, _v$5 = props.style, _v$6 = {
				[classes.hidden]: props.hidden,
				[classes.enabled]: props.enabled,
				[classes.disable]: props.disable
			};
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$2, "aria-label", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.className(_el$2, _p$.o = _v$4);
			_p$.i = solid_js_web.style(_el$2, _v$5, _p$.i);
			_p$.n = solid_js_web.classList(_el$2, _v$6, _p$.n);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0
		});
		return _el$;
	})();
};
//#endregion
exports.IconButton = IconButton;
`,"components/Fab":`
let solid_js_web = require("solid-js/web");
let helper = require("helper");
let solid_js = require("solid-js");
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/menu_book.svg
var _tmpl$$1 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z"></path><path d="M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03">\`);
var menu_book_default = (props = {}) => (() => {
	var _el$ = _tmpl$$1();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Fab/index.module.css
const classes = {
	"fabRoot": "fabRoot___rGBDZ",
	"fab": "fab___Whb2R",
	"progress": "progress___i-R0z",
	"popper": "popper___aYw7E",
	"speedDial": "speedDial___bnVgX",
	"speedDialItem": "speedDialItem___KdwiZ",
	"backdrop": "backdrop___4Sdu1"
};
//#endregion
//#region src/components/Fab/index.module.css?inline
var index_module_default = ".fabRoot___rGBDZ {\\n  touch-action: none;\\n  font-size: 1.1em;\\n  transition: transform 200ms;\\n}\\n\\n.fabRoot___rGBDZ[data-show='false'] {\\n    pointer-events: none;\\n  }\\n\\n.fabRoot___rGBDZ[data-show='false'] > button {\\n      transform: scale(0);\\n    }\\n\\n.fabRoot___rGBDZ[data-trans='true'] {\\n    opacity: 0.8;\\n  }\\n\\n.fabRoot___rGBDZ[data-trans='true']:hover,.fabRoot___rGBDZ[data-trans='true']:focus,.fabRoot___rGBDZ[data-trans='true']:focus-visible {\\n      opacity: 1;\\n    }\\n\\n.fab___Whb2R {\\n  cursor: pointer;\\n\\n  transform: scale(1);\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: 3.6em;\\n  height: 3.6em;\\n  border: none;\\n  border-radius: 100%;\\n\\n  font-size: 1em;\\n  color: white;\\n\\n  background-color: var(--fab, #607d8b);\\n  box-shadow:\\n    0 3px 5px -1px rgb(0 0 0 / 20%),\\n    0 6px 10px 0 rgb(0 0 0 / 14%),\\n    0 1px 18px 0 rgb(0 0 0 / 12%);\\n\\n  transition: transform 200ms;\\n}\\n\\n.fab___Whb2R > svg {\\n    width: 1em;\\n    font-size: 1.5em;\\n  }\\n\\n.fab___Whb2R:focus,.fab___Whb2R:focus-visible {\\n    outline: none;\\n    box-shadow:\\n      0 3px 5px -1px rgb(0 0 0 / 50%),\\n      0 6px 10px 0 rgb(0 0 0 / 34%),\\n      0 1px 18px 0 rgb(0 0 0 / 32%);\\n  }\\n\\n/* \u73AF\u5F62\u8FDB\u5EA6\u6761 */\\n.progress___i-R0z {\\n  position: absolute;\\n  transform: rotate(-90deg);\\n\\n  display: inline-block;\\n\\n  width: 100%;\\n  height: 100%;\\n\\n  color: #b0bec5;\\n\\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n}\\n.progress___i-R0z > svg {\\n    stroke: currentcolor;\\n    stroke-dasharray: 290%;\\n    stroke-dashoffset: 100%;\\n    stroke-linecap: round;\\n\\n    transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  }\\n.progress___i-R0z:hover {\\n    color: #cfd8dc;\\n  }\\n/* \u5728\u8FDB\u5EA6\u6761\u6EE1\u540E\u81EA\u52A8\u9690\u85CF */\\n.progress___i-R0z[aria-valuenow='1'] {\\n    opacity: 0;\\n    transition: opacity 200ms 150ms;\\n  }\\n\\n/* \u9ED8\u8BA4\u60AC\u6D6E\u6846\u6837\u5F0F */\\n.popper___aYw7E {\\n  pointer-events: none;\\n\\n  position: absolute;\\n  top: 50%;\\n  right: calc(100% + 1.5em);\\n  transform-origin: right;\\n  transform: translateY(-50%) scale(0);\\n\\n  display: flex;\\n  align-items: center;\\n\\n  padding: 0.4em 0.5em;\\n  border-radius: 0.3em;\\n\\n  font-size: 0.8em;\\n  color: white;\\n  white-space: nowrap;\\n\\n  opacity: 0;\\n  background-color: #303030;\\n\\n  transition:\\n    transform 230ms,\\n    opacity 150ms;\\n  transition-delay: var(--hide-delay);\\n}\\n\\n.fabRoot___rGBDZ[data-placement='right'] .popper___aYw7E {\\n  right: unset;\\n  left: calc(100% + 1.5em);\\n  transform-origin: left;\\n}\\n\\n.fabRoot___rGBDZ:is(:hover, [data-focus='true']) .popper___aYw7E {\\n  transform: translateY(-50%) scale(1);\\n  opacity: 1;\\n  transition-delay: 0ms;\\n}\\n\\n/* \u5FEB\u6377\u62E8\u53F7 */\\n.speedDial___bnVgX {\\n  pointer-events: none;\\n  touch-action: none;\\n\\n  position: absolute;\\n  z-index: -1;\\n  bottom: 0;\\n\\n  display: flex;\\n  flex-direction: column-reverse;\\n  align-items: center;\\n\\n  width: 100%;\\n  padding-bottom: 120%;\\n\\n  font-size: 1.1em;\\n}\\n.speedDial___bnVgX[data-placement='bottom'] {\\n    top: 0;\\n    bottom: unset;\\n\\n    flex-direction: column;\\n\\n    padding-top: 120%;\\n    padding-bottom: unset;\\n  }\\n\\n.speedDialItem___KdwiZ {\\n  transform: scale(0);\\n\\n  margin: 0.1em 0;\\n\\n  opacity: 0;\\n\\n  transition-delay: var(--hide-delay);\\n  transition-duration: 230ms;\\n  transition-property: transform, opacity;\\n}\\n\\n/* \u79FB\u5230\u5FEB\u6377\u62E8\u53F7\u4E0A\u65F6\u4FDD\u6301\u663E\u793A */\\n.speedDial___bnVgX:hover {\\n  pointer-events: all;\\n}\\n\\n.fabRoot___rGBDZ:is(:hover:not([data-show='false']), [data-focus='true']) .speedDial___bnVgX {\\n  pointer-events: all;\\n}\\n\\n:is(.fabRoot___rGBDZ:is(:hover:not([data-show='false']),[data-focus='true']) .speedDial___bnVgX) > .speedDialItem___KdwiZ {\\n    transform: unset;\\n    opacity: unset;\\n    transition-delay: var(--show-delay);\\n  }\\n\\n/* \u80CC\u666F\u8499\u7248 */\\n.backdrop___4Sdu1 {\\n  pointer-events: none;\\n\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n\\n  opacity: 0;\\n  background: black;\\n\\n  transition: opacity 500ms;\\n}\\n\\n.fabRoot___rGBDZ[data-focus='true'] .backdrop___4Sdu1 {\\n  pointer-events: unset;\\n}\\n\\n:is(\\n    .fabRoot___rGBDZ:hover:not([data-show='false']),\\n    .fabRoot___rGBDZ[data-focus='true'],\\n    .speedDial___bnVgX:hover\\n  )\\n  .backdrop___4Sdu1 {\\n  opacity: 0.4;\\n}\\n";
//#endregion
//#region src/components/Fab/index.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<div><div>\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<div><button type=button tabindex=-1><span role=progressbar><svg viewBox="22 22 44 44"><circle cx=44 cy=44 r=20.2 fill=none stroke-width=3.6>\`);
var _tmpl$3 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
/**
* Fab \u6309\u94AE
*/
const Fab = (_props) => {
	const props = solid_js.mergeProps({
		progress: 0,
		initialShow: true,
		autoTrans: false
	}, _props);
	let lastY = window.scrollY;
	const [show, setShow] = solid_js.createSignal(props.initialShow);
	helper.createEffectOn([() => props.rootRef?.(), () => props.show ?? show()], ([rootRef, isShow]) => {
		if (rootRef) rootRef.style.pointerEvents = isShow ? "" : "none";
	});
	const handleScroll = helper.throttle((e) => {
		if (!e.isTrusted) return;
		if (window.scrollY === lastY) return;
		setShow(window.scrollY + window.innerHeight >= document.body.scrollHeight || window.scrollY - lastY < 0);
		lastY = window.scrollY;
	}, 200);
	solid_js.onMount(() => window.addEventListener("scroll", handleScroll));
	solid_js.onCleanup(() => window.removeEventListener("scroll", handleScroll));
	solid_js.createEffect(() => props.show && setShow(props.show));
	return (() => {
		var _el$ = _tmpl$2(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild;
		solid_js_web.use((ref) => helper.css(index_module_default, ref), _el$);
		solid_js_web.addEventListener(_el$2, "click", () => props.onClick?.());
		solid_js_web.use((ref) => props.ref?.(ref), _el$2);
		solid_js_web.insert(_el$2, () => props.children ?? solid_js_web.createComponent(menu_book_default, {}), _el$3);
		solid_js_web.insert(_el$2, (() => {
			var _c$ = solid_js_web.memo(() => !!props.tip);
			return () => _c$() ? (() => {
				var _el$7 = _tmpl$3();
				solid_js_web.insert(_el$7, () => props.tip);
				solid_js_web.effect(() => solid_js_web.className(_el$7, classes.popper));
				return _el$7;
			})() : null;
		})(), null);
		solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return props.speedDial?.length;
			},
			get children() {
				var _el$5 = _tmpl$(), _el$6 = _el$5.firstChild;
				solid_js_web.addEventListener(_el$6, "click", () => props.onBackdropClick?.());
				solid_js_web.insert(_el$5, solid_js_web.createComponent(solid_js.For, {
					get each() {
						return props.speedDial;
					},
					children: (SpeedDialItem, i) => (() => {
						var _el$8 = _tmpl$3();
						solid_js_web.insert(_el$8, solid_js_web.createComponent(SpeedDialItem, {}));
						solid_js_web.effect((_p$) => {
							var _v$12 = classes.speedDialItem, _v$13 = \`\${(i() + 1) * 30}ms\`, _v$14 = \`\${(props.speedDial.length - 1 - i()) * 50}ms\`, _v$15 = i() * 30;
							_v$12 !== _p$.e && solid_js_web.className(_el$8, _p$.e = _v$12);
							_v$13 !== _p$.t && solid_js_web.setStyleProperty(_el$8, "--show-delay", _p$.t = _v$13);
							_v$14 !== _p$.a && solid_js_web.setStyleProperty(_el$8, "--hide-delay", _p$.a = _v$14);
							_v$15 !== _p$.o && solid_js_web.setAttribute(_el$8, "data-i", _p$.o = _v$15);
							return _p$;
						}, {
							e: void 0,
							t: void 0,
							a: void 0,
							o: void 0
						});
						return _el$8;
					})()
				}), null);
				solid_js_web.effect((_p$) => {
					var _v$ = classes.speedDial, _v$2 = props.speedDialPlacement, _v$3 = classes.backdrop;
					_v$ !== _p$.e && solid_js_web.className(_el$5, _p$.e = _v$);
					_v$2 !== _p$.t && solid_js_web.setAttribute(_el$5, "data-placement", _p$.t = _v$2);
					_v$3 !== _p$.a && solid_js_web.className(_el$6, _p$.a = _v$3);
					return _p$;
				}, {
					e: void 0,
					t: void 0,
					a: void 0
				});
				return _el$5;
			}
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$4 = classes.fabRoot, _v$5 = props.show ?? show(), _v$6 = props.autoTrans, _v$7 = props.focus, _v$8 = props.placement, _v$9 = {
				...props.style,
				"--hide-delay": \`\${(props.speedDial?.length ?? 0) * 50}ms\`
			}, _v$0 = classes.fab, _v$1 = classes.progress, _v$10 = props.progress, _v$11 = \`\${(1 - props.progress) * 290}%\`;
			_v$4 !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$4);
			_v$5 !== _p$.t && solid_js_web.setAttribute(_el$, "data-show", _p$.t = _v$5);
			_v$6 !== _p$.a && solid_js_web.setAttribute(_el$, "data-trans", _p$.a = _v$6);
			_v$7 !== _p$.o && solid_js_web.setAttribute(_el$, "data-focus", _p$.o = _v$7);
			_v$8 !== _p$.i && solid_js_web.setAttribute(_el$, "data-placement", _p$.i = _v$8);
			_p$.n = solid_js_web.style(_el$, _v$9, _p$.n);
			_v$0 !== _p$.s && solid_js_web.className(_el$2, _p$.s = _v$0);
			_v$1 !== _p$.h && solid_js_web.className(_el$3, _p$.h = _v$1);
			_v$10 !== _p$.r && solid_js_web.setAttribute(_el$3, "aria-valuenow", _p$.r = _v$10);
			_v$11 !== _p$.d && solid_js_web.setStyleProperty(_el$4, "stroke-dashoffset", _p$.d = _v$11);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0,
			r: void 0,
			d: void 0
		});
		return _el$;
	})();
};
//#endregion
exports.Fab = Fab;
`,"components/Toast":`
let helper = require("helper");
let solid_js_web = require("solid-js/web");
let solid_js = require("solid-js");
//#region src/components/Toast/store.tsx
const { store, setState } = helper.useStore({
	ref: null,
	list: [],
	map: {}
});
const creatId = () => {
	let id = \`\${Date.now()}\`;
	while (Reflect.has(store.map, id)) id += "_";
	return id;
};
const dismiss = (id) => Reflect.has(store.map, id) && setState("map", id, "exit", true);
//#endregion
//#region src/components/Toast/index.module.css
const classes = {
	"root": "root___AXj2H",
	"item": "item___eASYv",
	"bounceInRight": "bounceInRight___94v9w",
	"bounceOutRight": "bounceOutRight___0RcOn",
	"schedule": "schedule___AWwkh",
	"msg": "msg___pGOp2"
};
//#endregion
//#region src/components/Toast/index.module.css?inline
var index_module_default = ".root___AXj2H {\\n  pointer-events: none;\\n\\n  position: fixed;\\n  z-index: 2147483647;\\n  right: 0;\\n  bottom: 0;\\n\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n\\n  font-size: 16px;\\n}\\n\\n.item___eASYv {\\n  pointer-events: auto;\\n  cursor: pointer;\\n\\n  position: relative;\\n\\n  overflow: hidden;\\n  display: flex;\\n  align-items: center;\\n\\n  width: fit-content;\\n  max-width: min(30em, 100vw);\\n  margin: 1em;\\n  padding: 0.8em 1em;\\n  border-radius: 4px;\\n\\n  color: #000;\\n\\n  background: #fff;\\n  box-shadow:\\n    0 1px 10px 0 #0000001a,\\n    0 2px 15px 0 #0000000d;\\n\\n  animation: bounceInRight___94v9w 0.5s 1;\\n}\\n\\n.item___eASYv > svg {\\n    width: 1.5em;\\n    margin-right: 0.5em;\\n    color: var(--theme);\\n  }\\n\\n.item___eASYv[data-exit] {\\n    animation: bounceOutRight___0RcOn 0.5s 1;\\n  }\\n\\n.schedule___AWwkh {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  transform-origin: left;\\n\\n  width: 100%;\\n  height: 0.2em;\\n\\n  background-color: var(--theme);\\n}\\n\\n.item___eASYv[data-schedule] .schedule___AWwkh {\\n  transition: transform 100ms;\\n}\\n\\n.item___eASYv:not([data-schedule]) .schedule___AWwkh {\\n  animation: schedule___AWwkh linear 1 forwards;\\n}\\n\\n:is(.item___eASYv:hover, .item___eASYv[data-schedule], .root___AXj2H[data-paused]) .schedule___AWwkh {\\n  animation-play-state: paused;\\n}\\n\\n.msg___pGOp2 {\\n  width: fit-content;\\n\\n  line-height: 1.4em;\\n  text-align: start;\\n  overflow-wrap: anywhere;\\n  white-space: break-spaces;\\n}\\n\\n.msg___pGOp2 h2 {\\n    margin: 0;\\n  }\\n\\n.msg___pGOp2 h3 {\\n    margin: 0.7em 0;\\n  }\\n\\n.msg___pGOp2 ul {\\n    margin: 0;\\n    text-align: left;\\n  }\\n\\n.msg___pGOp2 button {\\n    cursor: pointer;\\n\\n    margin: 0 0.5em;\\n    padding: 0.2em 0.6em;\\n    border: none;\\n    border-radius: 0.4em;\\n\\n    font-size: inherit;\\n\\n    background-color: #eee;\\n    outline: none;\\n  }\\n\\n:is(.msg___pGOp2 button):hover {\\n      background: #e0e0e0;\\n    }\\n\\np {\\n  margin: 0;\\n}\\n\\n@keyframes schedule___AWwkh {\\n  0% {\\n    transform: scaleX(1);\\n  }\\n\\n  100% {\\n    transform: scaleX(0);\\n  }\\n}\\n\\n@keyframes bounceInRight___94v9w {\\n  0%,\\n  60%,\\n  75%,\\n  90%,\\n  100% {\\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\\n  }\\n\\n  0% {\\n    transform: translate3d(3000px, 0, 0) scaleX(3);\\n    opacity: 0;\\n  }\\n\\n  60% {\\n    transform: translate3d(-25px, 0, 0) scaleX(1);\\n    opacity: 1;\\n  }\\n\\n  75% {\\n    transform: translate3d(10px, 0, 0) scaleX(0.98);\\n  }\\n\\n  90% {\\n    transform: translate3d(-5px, 0, 0) scaleX(0.995);\\n  }\\n\\n  100% {\\n    transform: translate3d(0, 0, 0);\\n  }\\n}\\n\\n@keyframes bounceOutRight___0RcOn {\\n  20% {\\n    transform: translate3d(-20px, 0, 0) scaleX(0.9);\\n    opacity: 1;\\n  }\\n\\n  100% {\\n    transform: translate3d(2000px, 0, 0) scaleX(2);\\n    opacity: 0;\\n  }\\n}\\n";
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/check_circle.svg
var _tmpl$$5 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.29 16.29 5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0">\`);
var check_circle_default = (props = {}) => (() => {
	var _el$ = _tmpl$$5();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/error.svg
var _tmpl$$4 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z">\`);
var error_default = (props = {}) => (() => {
	var _el$ = _tmpl$$4();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/info.svg
var _tmpl$$3 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z">\`);
var info_default = (props = {}) => (() => {
	var _el$ = _tmpl$$3();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/warning.svg
var _tmpl$$2 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z">\`);
var warning_default = (props = {}) => (() => {
	var _el$ = _tmpl$$2();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/components/Toast/ToastItem.tsx
var _tmpl$$1 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<div><div>\`);
const iconMap = {
	info: info_default,
	success: check_circle_default,
	warn: warning_default,
	error: error_default
};
const colorMap = {
	info: "#3a97d7",
	success: "#23bb35",
	warn: "#f0c53e",
	error: "#e45042",
	custom: "#1f2936"
};
/** \u5220\u9664 toast */
const dismissToast = (id) => setState((state) => {
	state.map[id]?.onDismiss?.({ ...state.map[id] });
	const i = state.list.indexOf(id);
	if (i !== -1) state.list.splice(i, 1);
	Reflect.deleteProperty(state.map, id);
});
/** \u91CD\u7F6E toast \u7684 update \u5C5E\u6027 */
const resetToastUpdate = (id) => setState("map", id, "update", void 0);
const ToastItem = (props) => {
	/** \u662F\u5426\u8981\u663E\u793A\u8FDB\u5EA6 */
	const showSchedule = solid_js.createMemo(() => props.duration === Infinity && props.schedule ? true : void 0);
	const triggerDismiss = (e) => {
		e.stopPropagation();
		if (showSchedule() && "animationName" in e) return;
		dismiss(props.id);
	};
	const handleAnimationEnd = () => {
		if (!props.exit) return;
		dismissToast(props.id);
	};
	let scheduleRef;
	solid_js.createEffect(() => {
		if (!props.update) return;
		resetToastUpdate(props.id);
		if (!scheduleRef) return;
		for (const animation of scheduleRef.getAnimations()) animation.currentTime = 0;
	});
	const handleClick = (e) => {
		props.onClick?.();
		triggerDismiss(e);
	};
	return (() => {
		var _el$ = _tmpl$2(), _el$2 = _el$.firstChild;
		_el$.addEventListener("animationend", handleAnimationEnd);
		solid_js_web.addEventListener(_el$, "click", handleClick);
		solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js_web.Dynamic, { get component() {
			return iconMap[props.type];
		} }), _el$2);
		solid_js_web.insert(_el$2, (() => {
			var _c$ = solid_js_web.memo(() => typeof props.msg === "string");
			return () => _c$() ? props.msg : solid_js_web.createComponent(props.msg, {});
		})());
		solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return props.duration !== Infinity || props.schedule !== void 0;
			},
			get children() {
				var _el$3 = _tmpl$$1();
				_el$3.addEventListener("animationend", triggerDismiss);
				var _ref$ = scheduleRef;
				typeof _ref$ === "function" ? solid_js_web.use(_ref$, _el$3) : scheduleRef = _el$3;
				solid_js_web.effect((_p$) => {
					var _v$ = classes.schedule, _v$2 = \`\${props.duration}ms\`, _v$3 = showSchedule() ? \`scaleX(\${props.schedule})\` : void 0;
					_v$ !== _p$.e && solid_js_web.className(_el$3, _p$.e = _v$);
					_v$2 !== _p$.t && solid_js_web.setStyleProperty(_el$3, "animation-duration", _p$.t = _v$2);
					_v$3 !== _p$.a && solid_js_web.setStyleProperty(_el$3, "transform", _p$.a = _v$3);
					return _p$;
				}, {
					e: void 0,
					t: void 0,
					a: void 0
				});
				return _el$3;
			}
		}), null);
		solid_js_web.effect((_p$) => {
			var _v$4 = classes.item, _v$5 = colorMap[props.type], _v$6 = showSchedule(), _v$7 = props.exit, _v$8 = classes.msg;
			_v$4 !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$4);
			_v$5 !== _p$.t && solid_js_web.setStyleProperty(_el$, "--theme", _p$.t = _v$5);
			_v$6 !== _p$.a && solid_js_web.setAttribute(_el$, "data-schedule", _p$.a = _v$6);
			_v$7 !== _p$.o && solid_js_web.setAttribute(_el$, "data-exit", _p$.o = _v$7);
			_v$8 !== _p$.i && solid_js_web.className(_el$2, _p$.i = _v$8);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0
		});
		return _el$;
	})();
};
//#endregion
//#region src/components/Toast/Toaster.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
const Toaster = () => {
	const [visible, setVisible] = solid_js.createSignal(document.visibilityState === "visible");
	solid_js.onMount(() => {
		helper.css(index_module_default, store.ref);
		const handleVisibilityChange = () => {
			setVisible(document.visibilityState === "visible");
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);
		solid_js.onCleanup(() => document.removeEventListener("visibilitychange", handleVisibilityChange));
	});
	return (() => {
		var _el$ = _tmpl$();
		solid_js_web.use((ref) => setState("ref", ref), _el$);
		solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.For, {
			get each() {
				return store.list;
			},
			children: (id) => solid_js_web.createComponent(ToastItem, solid_js_web.mergeProps(() => store.map[id]))
		}));
		solid_js_web.effect((_p$) => {
			var _v$ = classes.root, _v$2 = visible() ? void 0 : "";
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.setAttribute(_el$, "data-paused", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
};
let dom;
const init = () => {
	if (dom || store.ref) return;
	dom = helper.mountComponents("toast", () => solid_js_web.createComponent(Toaster, {}));
	dom.style.setProperty("z-index", "2147483647", "important");
};
//#endregion
//#region src/components/Toast/toast.tsx
const toast = (msg, options) => {
	if (!msg) return;
	init();
	const id = options?.id ?? (typeof msg === "string" ? msg : creatId());
	setState((state) => {
		if (Reflect.has(state.map, id)) {
			Object.assign(state.map[id], {
				msg,
				...options,
				update: true
			});
			return;
		}
		state.map[id] = {
			id,
			type: "info",
			duration: 3e3,
			msg,
			...options
		};
		state.list.push(id);
	});
	/** \u5F39\u7A97\u540E\u8BB0\u5F55\u4E00\u4E0B */
	let fn = helper.log;
	switch (options?.type) {
		case "warn":
			fn = helper.log.warn;
			break;
		case "error": fn = helper.log.error;
	}
	fn("Toast:", msg);
	if (options?.throw && typeof msg === "string") throw new Error(msg);
};
toast.dismiss = dismiss;
toast.set = (id, options) => {
	if (!Reflect.has(store.map, id)) return;
	setState((state) => Object.assign(state.map[id], options));
};
toast.success = (msg, options) => toast(msg, {
	...options,
	exit: void 0,
	type: "success"
});
toast.warn = (msg, options) => toast(msg, {
	...options,
	exit: void 0,
	type: "warn"
});
toast.error = (msg, options) => toast(msg, {
	...options,
	exit: void 0,
	type: "error"
});
helper.exposeToGlobal({ toast });
//#endregion
exports.Toaster = Toaster;
exports.toast = toast;
`,"components/InputDialog":`
let solid_js_web = require("solid-js/web");
let helper = require("helper");
let solid_js = require("solid-js");
//#region src/components/InputDialog/index.module.css
const classes = {
	"dialog": "dialog___3dkwn",
	"form": "form___cFANn",
	"message": "message___67JlD",
	"tip": "tip___FZ4Zy",
	"input": "input___8wTHj",
	"button": "button___c-YbK",
	"primary": "primary___pZIVN"
};
//#endregion
//#region src/components/InputDialog/index.module.css?inline
var index_module_default = ".dialog___3dkwn {\\n  --pd-bg: #fff;\\n  --pd-text: #1f1f1f;\\n  --pd-muted: #666;\\n  --pd-btn: #eee;\\n  --pd-primary: #607d8b;\\n  --pd-focus: #afbec5;\\n\\n  box-sizing: border-box;\\n  width: max-content;\\n  min-width: 12em;\\n  max-width: 80vw;\\n  padding: 1.5em;\\n  border: none;\\n  border-radius: 1em;\\n\\n  line-height: 1.4;\\n  color: var(--pd-text);\\n\\n  background: var(--pd-bg);\\n  box-shadow: 0 8px 24px rgb(0 0 0 / 30%);\\n}\\n\\n.dialog___3dkwn::backdrop {\\n    background: rgb(0 0 0 / 50%);\\n    backdrop-filter: none;\\n  }\\n\\n@media (prefers-color-scheme: dark) {\\n\\n.dialog___3dkwn {\\n    --pd-bg: #2b2b2b;\\n    --pd-text: #eee;\\n    --pd-muted: #aaa;\\n    --pd-btn: #3a3a3a;\\n    --pd-focus: #4a4a4a;\\n}\\n  }\\n\\n.form___cFANn {\\n  text-align: right;\\n}\\n\\n.message___67JlD {\\n  margin: 0 0 0.125em;\\n  color: var(--pd-muted);\\n  text-align: left;\\n}\\n\\n.tip___FZ4Zy {\\n  margin: 0 0 0.75em;\\n\\n  font-size: 0.85em;\\n  color: var(--pd-muted);\\n  text-align: left;\\n  overflow-wrap: break-word;\\n}\\n\\n.input___8wTHj {\\n  display: block;\\n\\n  box-sizing: border-box;\\n  width: 100%;\\n  padding: 0.5em 0.8em;\\n  border: 1px solid var(--pd-btn);\\n  border-radius: 0.5em;\\n\\n  font-size: 1em;\\n  color: var(--pd-text);\\n\\n  appearance: none;\\n  background: transparent;\\n  outline: none;\\n}\\n\\n.input___8wTHj::placeholder {\\n    color: var(--pd-muted);\\n  }\\n\\n.input___8wTHj:focus {\\n    border-color: var(--pd-primary);\\n    box-shadow: 0 0 0 2px var(--pd-focus);\\n  }\\n\\n.button___c-YbK {\\n  cursor: pointer;\\n\\n  margin-top: 1em;\\n  padding: 0.55em 1.25em;\\n  border: none;\\n  border-radius: 0.5em;\\n\\n  font-size: 1em;\\n  color: var(--pd-text);\\n\\n  appearance: none;\\n  background: var(--pd-btn);\\n}\\n\\n.button___c-YbK + .button___c-YbK {\\n    margin-left: 0.75em;\\n  }\\n\\n.button___c-YbK:hover {\\n    background: var(--pd-focus);\\n  }\\n\\n.button___c-YbK:focus-visible {\\n    box-shadow: 0 0 0 2px var(--pd-focus);\\n  }\\n\\n.primary___pZIVN {\\n  color: #fff;\\n  background: var(--pd-primary);\\n}\\n\\n.primary___pZIVN:hover {\\n    filter: brightness(1.1);\\n  }\\n";
//#endregion
//#region src/components/InputDialog/index.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<p>\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<dialog><form method=dialog><h2></h2><input type=text><button type=button></button><button type=submit>\`);
const { store, setState } = helper.useStore({
	queue: [],
	password: "",
	ref: null,
	inputRef: null
});
/** \u6253\u5F00\u5F39\u7A97\u5E76\u805A\u7126\u8F93\u5165\u6846 */
const openNow = () => {
	if (store.ref?.open) return;
	setState("password", store.queue[0]?.defaultValue ?? "");
	store.ref?.showModal();
	store.inputRef?.focus();
	store.inputRef?.select();
};
/** \u5173\u95ED\u5F39\u7A97\uFF1B\u672A\u6253\u5F00\u5219\u8DF3\u8FC7 */
const closeNow = () => {
	if (store.ref?.open) store.ref.close();
};
/** \u7528 result \u7ED3\u675F\u5F53\u524D\u8BF7\u6C42\uFF0C\u5E76\u63A8\u8FDB\u5230\u961F\u5217\u4E2D\u7684\u4E0B\u4E00\u4E2A\u8BF7\u6C42 */
const complete = (result) => {
	const [current] = store.queue;
	if (!current) return;
	setState("queue", (queue) => queue.slice(1));
	current.resolve(result);
	closeNow();
	if (store.queue.length > 0) helper.sleep(200).then(openNow);
};
const InputDialog = () => {
	solid_js.onMount(() => helper.css(index_module_default, store.ref));
	return (() => {
		var _el$ = _tmpl$2(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$5 = _el$3.nextSibling, _el$6 = _el$5.nextSibling, _el$7 = _el$6.nextSibling;
		solid_js_web.addEventListener(_el$, "cancel", () => complete(null));
		solid_js_web.use((ref) => setState("ref", ref), _el$);
		_el$2.addEventListener("submit", () => complete(store.password));
		solid_js_web.insert(_el$3, () => store.queue[0]?.message);
		solid_js_web.insert(_el$2, solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return store.queue[0]?.tip;
			},
			get children() {
				var _el$4 = _tmpl$();
				solid_js_web.insert(_el$4, () => store.queue[0]?.tip);
				solid_js_web.effect(() => solid_js_web.className(_el$4, classes.tip));
				return _el$4;
			}
		}), _el$5);
		solid_js_web.addEventListener(_el$5, "input", (e) => setState("password", e.currentTarget.value));
		solid_js_web.use((ref) => setState("inputRef", ref), _el$5);
		_el$6.$$click = () => complete(null);
		solid_js_web.insert(_el$6, () => helper.t("other.cancel"));
		solid_js_web.insert(_el$7, () => helper.t("other.confirm"));
		solid_js_web.effect((_p$) => {
			var _v$ = classes.dialog, _v$2 = classes.form, _v$3 = classes.message, _v$4 = classes.input, _v$5 = classes.button, _v$6 = {
				[classes.button]: true,
				[classes.primary]: true
			};
			_v$ !== _p$.e && solid_js_web.className(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.className(_el$2, _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.className(_el$3, _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.className(_el$5, _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.className(_el$6, _p$.i = _v$5);
			_p$.n = solid_js_web.classList(_el$7, _v$6, _p$.n);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0
		});
		solid_js_web.effect(() => _el$5.value = store.password);
		return _el$;
	})();
};
let dom;
/** \u9996\u6B21\u88AB\u8C03\u7528\u65F6\u624D\u6302\u8F7D\u5230\u9875\u9762\u4E0A */
const init = () => {
	if (dom || store.ref) return;
	dom = helper.mountComponents("input-dialog", () => solid_js_web.createComponent(InputDialog, {}));
};
/**
* \u5F39\u51FA\u4E00\u4E2A\u6587\u672C\u8F93\u5165\u6846\uFF0C\u8FD4\u56DE\u7528\u6237\u8F93\u5165\u7684\u5185\u5BB9\uFF1B\u53D6\u6D88\u6216\u5173\u95ED\u65F6\u8FD4\u56DE null\u3002
*
* \u540C\u65F6\u6253\u5F00\u591A\u4E2A\u8F93\u5165\u8BF7\u6C42\u65F6\u4F1A\u5728\u5185\u90E8\u81EA\u52A8\u6392\u961F\uFF0C\u9010\u4E2A\u5F39\u51FA\u3002
*/
const askInput = ({ message = helper.t("other.enter_password"), tip, defaultValue = "" } = {}) => new Promise((resolve) => {
	init();
	setState("queue", (queue) => [...queue, {
		message,
		tip,
		defaultValue,
		resolve
	}]);
	if (store.queue.length === 1) openNow();
});
solid_js_web.delegateEvents(["click"]);
//#endregion
exports.InputDialog = InputDialog;
exports.askInput = askInput;
exports.setState = setState;
exports.store = store;
`,"userscript/copyApi":`
let request = require("request");
let core = require("core");
let helper = require("helper");
//#region src/userscript/copyApi/client.ts
const token = document.cookie.split("; ").find((cookie) => cookie.startsWith("token="))?.replace("token=", "");
const mobileApi = new class {
	headers = {
		webp: "1",
		region: "1",
		"User-Agent": "COPY/3.0.0",
		version: "3.0.9",
		source: "copyApp",
		referer: "com.copymanga.app-3.0.0",
		Authorization: token ? \`Token \${token}\` : ""
	};
	get = (url, details, ...args) => request.request(url, {
		responseType: "json",
		headers: this.headers,
		...details
	}, ...args);
	eachGet = (url, details) => request.eachApi(url, [
		"https://api.copy4000.com",
		"https://api.2026copy.com",
		"https://api.mangacopy.com",
		"https://api.copy3000.com",
		"https://mapi.copy20.com"
	], {
		responseType: "json",
		headers: {
			...this.headers,
			accept: "application/json"
		},
		fetch: false,
		...details
	});
}();
const pcApi = new class {
	headers = {
		"User-Agent": "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36 Edg/141.0.0.0",
		"x-requested-with": "com.manga2020.app",
		dnts: "3",
		platform: "3",
		version: "2024.4.28",
		webp: "1",
		accept: "application/json",
		referer: location.href,
		Authorization: token ? \`Token \${token}\` : ""
	};
	get = (url, details, ...args) => request.request(url, {
		responseType: "json",
		headers: this.headers,
		...details
	}, ...args);
	eachGet = (url, details) => request.eachApi(url, [
		"https://mapi.elfgjfghkk.club",
		"https://api.2024manga.com",
		"https://mapi.fgjfghkk.club",
		"https://mapi.hotmangasg.com",
		"https://mapi.fgjfghkkcenter.club",
		"https://www.manga2026.xyz",
		"https://mapi.hotmangasf.com",
		"https://mapi.hotmangasd.com",
		"https://www.manga2025.com",
		"https://api.manga2025.com",
		"https://m.manga2025.com"
	], {
		responseType: "json",
		headers: this.headers,
		fetch: false,
		...details
	});
}();
//#endregion
//#region src/userscript/copyApi/decrypt.ts
/** \u52A0\u5BC6\u540E\u7684\u56FE\u7247\u5217\u8868\u6570\u636E */
let contentKey = "";
/** \u89E3\u5BC6\u7528\u7684 key */
let decryptKey;
const getKeys = async (url) => {
	if (contentKey !== void 0 && decryptKey !== void 0) return [contentKey, decryptKey];
	if (helper.querySelector(".disData[contentkey]")) {
		contentKey = helper.querySelector(".disData[contentkey]").getAttribute("contentkey");
		decryptKey = helper.querySelector(".disPass[contentkey]").getAttribute("contentkey");
		return [contentKey, decryptKey];
	}
	if (unsafeWindow.contentKey !== void 0 && unsafeWindow.cct !== void 0 || unsafeWindow.ccz !== void 0) {
		contentKey = unsafeWindow.contentKey;
		decryptKey = unsafeWindow.cct || unsafeWindow.ccz;
		return [contentKey, decryptKey];
	}
	if (url) {
		const html = await request.request(url, {
			fetch: false,
			headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36" }
		});
		const match = /(?:var\\s+contentKey\\s*=\\s*['"](?<contentKey>[^'"]*)['"])|(?:var\\s+(?!contentKey\\b)[a-zA-Z_][a-zA-Z0-9_]*\\s*=\\s*['"](?<decryptKey>[^'"]*)['"])/gsu.exec(html.responseText)?.groups;
		if (!match) {
			core.toast.error(helper.t("site.changed_load_failed"));
			throw new Error(helper.t("site.changed_load_failed"));
		}
		({contentKey, decryptKey} = match);
		return [contentKey, decryptKey];
	}
	core.toast.error(helper.t("site.changed_load_failed"));
	throw new Error(helper.t("site.changed_load_failed"));
};
const decryptData = async (raw, key) => {
	key ||= (await getKeys())[1];
	if (!raw) throw new Error("raw is empty");
	const cipher = raw.slice(16);
	const iv = raw.slice(0, 16);
	const decryptedBuffer = await crypto.subtle.decrypt({
		name: "AES-CBC",
		iv: new TextEncoder().encode(iv)
	}, await crypto.subtle.importKey("raw", new TextEncoder().encode(key), { name: "AES-CBC" }, false, ["decrypt"]), new Uint8Array(cipher.match(/.{1,2}/gu).map((byte) => Number.parseInt(byte, 16))).buffer);
	return JSON.parse(new TextDecoder().decode(decryptedBuffer));
};
/** \u7EDF\u4E00\u66FF\u6362\u56FE\u7247\u94FE\u63A5\u7684\u5206\u8FA8\u7387 */
const mapImgUrl = (url) => url.replaceAll(/c\\d+x\\.\\w+/gu, "c1500x.webp");
/** \u901A\u8FC7\u89E3\u6790\u7F51\u9875\u53D8\u91CF\u83B7\u53D6\u56FE\u7247\u5217\u8868 */
const getImglistByHtml = async (pageUrl) => {
	const keys = await getKeys(pageUrl);
	return (await decryptData(...keys)).map(({ url }) => mapImgUrl(url));
};
//#endregion
//#region src/userscript/copyApi/chapterImages.ts
/** \u7AE0\u8282\u56FE\u7247\u83B7\u53D6\u5931\u8D25\u7684\u7EDF\u4E00\u9519\u8BEF\u63D0\u793A */
const errorText$1 = "\u52A0\u8F09\u7AE0\u7BC0\u5716\u7247\u5931\u6557";
const getChapterDetail = (comicName, chapterId) => pcApi.eachGet(\`/api/v3/comic/\${comicName}/chapter/\${chapterId}?platform=3\`, {
	noCheckCode: true,
	errorText: errorText$1
});
const getChapter2Detail = (comicName, chapterId) => pcApi.eachGet(\`/api/v3/comic/\${comicName}/chapter2/\${chapterId}\`, {
	noCheckCode: true,
	errorText: errorText$1
});
/** \u83B7\u53D6\u7AE0\u8282\u56FE\u7247\u6570\u636E */
const getChapterData = async (comicName, chapterId) => {
	try {
		const res = await getChapter2Detail(comicName, chapterId);
		if (res.status === 200) {
			const { contents, words, name, next, prev } = res.response.results.chapter;
			const urls = contents.map(({ url }, i) => ({
				url,
				order: words[i] ?? i
			})).toSorted((a, b) => a.order - b.order).map(({ url }) => mapImgUrl(url));
			return {
				status: res.status,
				urls,
				chapter: {
					name,
					next,
					prev
				},
				comicName: res.response.results.comic.name
			};
		}
	} catch {}
	const { status, response: { results: { chapter, comic: { name } }, message } } = await getChapterDetail(comicName, chapterId);
	return {
		status,
		message,
		urls: chapter.contents.map(({ url }) => mapImgUrl(url)),
		chapter,
		comicName: name
	};
};
//#endregion
//#region src/userscript/copyApi/chapters.ts
/** \u7AE0\u8282\u76EE\u5F55\u83B7\u53D6\u5931\u8D25\u7684\u7EDF\u4E00\u9519\u8BEF\u63D0\u793A */
const errorText = "\u52A0\u8F09\u6F2B\u756B\u76EE\u9304\u5931\u6557";
/**
* \u83B7\u53D6\u6F2B\u753B\u76EE\u5F55
*
* \u4F1A\u53D7\u53CD\u722C\u673A\u5236\u5F71\u54CD\u8FD4\u56DE\u7A7A\u6570\u636E\uFF0C\u56E0\u6B64\u4EC5\u4F5C\u4E3A\u5907\u7528
*/
const getChaptersLegacy = async (comicName) => {
	const { response: { results } } = await pcApi.get(\`/comicdetail/\${comicName}/chapters\`, { errorText });
	return decryptData(results);
};
const typeNameMap = {
	1: "\u8A71",
	2: "\u5377",
	3: "\u756A\u5916\u7BC7"
};
/** \u83B7\u53D6\u6F2B\u753B\u76EE\u5F55 */
const getChaptersByApi = async (comicName) => {
	const rawGroups = (await pcApi.eachGet(\`/api/v3/comic2/\${comicName}\`, { errorText })).response.results.groups;
	const groups = (Array.isArray(rawGroups) ? rawGroups : Object.values(rawGroups ?? {})).filter(({ path_word }) => path_word);
	if (groups.length === 0) groups.push({
		path_word: "default",
		name: "\u9ED8\u8BA4"
	});
	const chaptersByGroup = [];
	for (const group of groups) {
		let page = [];
		let offset = 0;
		const list = [];
		do {
			page = (await pcApi.eachGet(\`/api/v3/comic/\${comicName}/group/\${group.path_word}/chapters?limit=100&offset=\${offset}&_update=true\`, { errorText })).response.results.list;
			list.push(...page);
			offset += 100;
		} while (page.length >= 100);
		chaptersByGroup.push({
			group,
			list
		});
	}
	return {
		groups,
		chaptersByGroup
	};
};
/** \u5C06\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u8F6C\u6362\u4E3A\u7EDF\u4E00\u7684\u76EE\u5F55\u7ED3\u6784 */
const transformFromGetChaptersByApi = (raw) => {
	const build = { type: Object.entries(typeNameMap).map(([id, name]) => ({
		id: Number(id),
		name
	})) };
	const groups = {};
	for (const { group, list } of raw.chaptersByGroup) {
		const chapters = list.map(({ type, name, uuid }) => ({
			type,
			name,
			id: uuid
		}));
		const lastRaw = list.find((ch) => ch.next === null) ?? list.at(-1);
		groups[group.path_word] = {
			path_word: group.path_word,
			name: group.name,
			chapters,
			last_chapter: lastRaw ? {
				comic_id: lastRaw.comic_id,
				name: lastRaw.name,
				datetime_created: lastRaw.datetime_created ?? "",
				uuid: lastRaw.uuid
			} : {
				comic_id: "",
				name: "",
				datetime_created: "",
				uuid: ""
			}
		};
	}
	return {
		build,
		groups
	};
};
/** \u83B7\u53D6\u6F2B\u753B\u76EE\u5F55\uFF08\u4F18\u5148\u65B0\u63A5\u53E3\uFF0C\u5931\u8D25\u65F6\u7528\u65E7\u63A5\u53E3\u515C\u5E95\uFF09 */
const getChapters = async (comicName) => {
	try {
		return transformFromGetChaptersByApi(await getChaptersByApi(comicName));
	} catch {
		return getChaptersLegacy(comicName);
	}
};
//#endregion
//#region src/userscript/copyApi/comment.ts
/** \u83B7\u53D6\u6F2B\u753B\u8BC4\u8BBA */
const getComments = async (chapterId, list = []) => {
	const res = await mobileApi.eachGet(\`/api/v3/roasts?chapter_id=\${chapterId}&limit=100&offset=\${list.length}&_update=true\`, {
		errorText: "\u7372\u53D6\u6F2B\u756B\u8A55\u8AD6\u5931\u6557",
		responseType: "blob"
	});
	const { list: newList, total } = JSON.parse(await res.response.text()).results;
	for (const { comment } of newList) list.push(comment);
	if (list.length < total) return getComments(chapterId, list);
	return list;
};
//#endregion
//#region src/userscript/copyApi/record.ts
/** \u83B7\u53D6\u6700\u540E\u9605\u8BFB\u8BB0\u5F55 */
const getLastChapter = (comicName) => mobileApi.eachGet(\`/api/v3/comic2/\${comicName}/query?platform=3\`, { errorText: "\u7372\u53D6\u95B1\u8B80\u8A18\u9304\u5931\u6557" });
//#endregion
exports.getChapterData = getChapterData;
exports.getChapterDetail = getChapterDetail;
exports.getChapters = getChapters;
exports.getComments = getComments;
exports.getImglistByHtml = getImglistByHtml;
exports.getLastChapter = getLastChapter;
exports.token = token;
`,"userscript/detectAd":`
//#region \\0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let comlink = require("comlink");
comlink = __toESM(comlink, 1);
let helper = require("helper");
let request = require("request");
let worker_detectAd = require("worker/detectAd");
worker_detectAd = __toESM(worker_detectAd, 1);
//#region src/userscript/detectAd.ts
/** \u7528\u5E38\u8BC6\u903B\u8F91\u8FDB\u884C\u5224\u65AD\uFF0C\u4EE5\u671F\u80FD\u5728\u68C0\u6D4B\u5931\u8BEF\u65F6\u51CF\u5C0F\u5F71\u54CD\u8303\u56F4\u548C\u9057\u6F0F */
const getAdPage = async (list, isAdPage, adList) => {
	let i = list.length - 1;
	let normalNum = 0;
	for (; i >= list.length - 10; i--) {
		if (i <= 2) break;
		if (adList.has(i)) continue;
		const item = list[i];
		if (!item) break;
		if (await isAdPage(item)) adList.add(i);
		else if (normalNum >= 2) break;
		else normalNum += 1;
	}
	let adNum = 0;
	for (i = Math.min(...adList); i < list.length; i++) {
		if (adList.has(i)) {
			adNum += 1;
			continue;
		}
		if (adNum >= 2) adList.add(i);
		else if (adList.has(i - 1) && adList.has(i + 1)) adList.add(i);
		else adNum = 0;
	}
	return adList;
};
const imgToCanvas = async (img) => {
	if (typeof img !== "string") {
		await helper.waitImgLoad(img);
		try {
			const canvas = new OffscreenCanvas(img.width, img.height);
			const ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0);
			if (ctx.getImageData(0, 0, 1, 1)) {
				const imgBitmap = canvas.transferToImageBitmap();
				return comlink.default.transfer(imgBitmap, [imgBitmap]);
			}
		} catch {}
	}
	const url = typeof img === "string" ? img : img.src;
	const blob = await request.downloadImg(url);
	const imgBitmap = await createImageBitmap(blob);
	return comlink.default.transfer(imgBitmap, [imgBitmap]);
};
/** \u901A\u8FC7\u6587\u4EF6\u540D\u5224\u65AD\u662F\u5426\u662F\u5E7F\u544A */
const getAdPageByFileName = (fileNameList, adList) => getAdPage(fileNameList, (fileName) => /^z+/iu.test(fileName), adList);
const isAdImg = (imgBitmap) => {
	initWorker();
	return worker_detectAd.default.isAdImg(comlink.default.transfer(imgBitmap, [imgBitmap]));
};
/** \u901A\u8FC7\u56FE\u7247\u5185\u5BB9\u5224\u65AD\u662F\u5426\u662F\u5E7F\u544A */
const getAdPageByContent = (imgList, adList) => getAdPage(imgList, async (img) => isAdImg(img instanceof ImageBitmap ? img : await imgToCanvas(img)), adList);
const initWorker = helper.once(() => {
	const mainFn = { log: helper.log };
	worker_detectAd.default.setMainFn(comlink.default.proxy(mainFn), Object.keys(mainFn));
});
//#endregion
exports.getAdPageByContent = getAdPageByContent;
exports.getAdPageByFileName = getAdPageByFileName;
exports.isAdImg = isAdImg;
`,core:`
let helper = require("helper");
let userscript_autoImageScanner = require("userscript/autoImageScanner");
let solid_js_web = require("solid-js/web");
let components_Manga = require("components/Manga");
let components_Toast = require("components/Toast");
let solid_js = require("solid-js");
let components_Fab = require("components/Fab");
let components_IconButton = require("components/IconButton");
let request = require("request");
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/settings.svg
var _tmpl$$16 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5">\`);
var settings_default = (props = {}) => (() => {
	var _el$ = _tmpl$$16();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/userscript/core/escManager.ts
let priorityMap = /* @__PURE__ */ new Map();
const getPriority = (id) => {
	const p = priorityMap.get(id);
	if (p !== void 0) return p;
	helper.log.warn(\`[escManager] \u672A\u5B9A\u4E49 \u300C\${id}\u300D \u7684\u4F18\u5148\u7EA7\`);
	return 64;
};
/** \u8BBE\u7F6E\u5B57\u7B26\u4E32 ID \u7684\u5BF9\u5E94\u4F18\u5148\u7EA7\u987A\u5E8F */
const setEscPriority = (ids) => {
	priorityMap = new Map(ids.map((id, index) => [id, index]));
};
const handlers = [];
const registerEsc = (id, handler) => {
	const entry = {
		priority: typeof id === "number" ? id : getPriority(id),
		handler
	};
	handlers.push(entry);
	handlers.sort((a, b) => a.priority - b.priority);
	return () => {
		const idx = handlers.indexOf(entry);
		if (idx !== -1) handlers.splice(idx, 1);
	};
};
/** \u6267\u884C\u6309\u4F18\u5148\u7EA7\u987A\u5E8F\u6267\u884C\u6240\u6709\u5DF2\u6CE8\u518C\u7684 ESC \u5904\u7406\u51FD\u6570\uFF0C\u8FD4\u56DE\u662F\u5426\u6709\u88AB\u5904\u7406 */
const handleEsc = () => {
	for (const { handler } of handlers) if (handler() !== "SKIP") return true;
	return false;
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/checklist.svg
var _tmpl$$15 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M22 8c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m-9 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1M10.47 4.63c.39.39.39 1.02 0 1.41l-4.23 4.25c-.39.39-1.02.39-1.42 0L2.7 8.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.4 0m.01 8.01c.39.39.39 1.02 0 1.41L6.25 18.3c-.39.39-1.02.39-1.42 0L2.7 16.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.41.01">\`);
var checklist_default = (props = {}) => (() => {
	var _el$ = _tmpl$$15();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/clear_all.svg
var _tmpl$$14 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M6 13h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1m-2 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m3-9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1">\`);
var clear_all_default = (props = {}) => (() => {
	var _el$ = _tmpl$$14();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/close.svg
var _tmpl$$13 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4">\`);
var close_default = (props = {}) => (() => {
	var _el$ = _tmpl$$13();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/cloud_download.svg
var _tmpl$$12 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4z">\`);
var cloud_download_default = (props = {}) => (() => {
	var _el$ = _tmpl$$12();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/image_search.svg
var _tmpl$$11 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 15v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.02c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1s-1 .45-1 1m-2.5 3H6.52c-.42 0-.65-.48-.39-.81l1.74-2.23a.5.5 0 0 1 .78-.01l1.56 1.88 2.35-3.02c.2-.26.6-.26.79.01l2.55 3.39c.25.32.01.79-.4.79m3.8-9.11c.48-.77.75-1.67.69-2.66-.13-2.15-1.84-3.97-3.97-4.2A4.5 4.5 0 0 0 11 6.5c0 2.49 2.01 4.5 4.49 4.5.88 0 1.7-.26 2.39-.7l2.41 2.41c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42zM15.5 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5">\`);
var image_search_default = (props = {}) => (() => {
	var _el$ = _tmpl$$11();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/import_contacts.svg
var _tmpl$$10 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z">\`);
var import_contacts_default = (props = {}) => (() => {
	var _el$ = _tmpl$$10();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/menu_book.svg
var _tmpl$$9 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z"></path><path d="M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03">\`);
var menu_book_default = (props = {}) => (() => {
	var _el$ = _tmpl$$9();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/auto_fix_high.svg
var _tmpl$$8 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="m20.45 6 .49-1.06L22 4.45a.5.5 0 0 0 0-.91l-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05c.17.39.73.39.9 0M8.95 6l.49-1.06 1.06-.49a.5.5 0 0 0 0-.91l-1.06-.48L8.95 2a.492.492 0 0 0-.9 0l-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49L8.05 6c.17.39.73.39.9 0m10.6 7.5-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49.49 1.06a.5.5 0 0 0 .91 0l.49-1.06 1.05-.5a.5.5 0 0 0 0-.91l-1.06-.49-.49-1.06c-.17-.38-.73-.38-.9.01m-1.84-4.38-2.83-2.83a.996.996 0 0 0-1.41 0L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0L17.7 10.53c.4-.38.4-1.02.01-1.41m-3.5 2.09L12.8 9.8l1.38-1.38 1.41 1.41z">\`);
var auto_fix_high_default = (props = {}) => (() => {
	var _el$ = _tmpl$$8();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/auto_fix_off.svg
var _tmpl$$7 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="m22 3.55-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05a.5.5 0 0 0 .91 0l.49-1.06L22 4.45c.39-.17.39-.73 0-.9m-7.83 4.87 1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-2.17 2.17 1.41 1.41zM2.1 4.93l6.36 6.36-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l6.17-6.17 6.36 6.36a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42">\`);
var auto_fix_off_default = (props = {}) => (() => {
	var _el$ = _tmpl$$7();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/flash_off.svg
var _tmpl$$6 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M16.12 11.5a.995.995 0 0 0-.86-1.5h-1.87l2.28 2.28zm.16-8.05c.33-.67-.15-1.45-.9-1.45H8c-.55 0-1 .45-1 1v.61l6.13 6.13zm2.16 14.43L4.12 3.56a.996.996 0 1 0-1.41 1.41L7 9.27V12c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l2.65-4.55 3.44 3.44c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41">\`);
var flash_off_default = (props = {}) => (() => {
	var _el$ = _tmpl$$6();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/flash_on.svg
var _tmpl$$5 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1">\`);
var flash_on_default = (props = {}) => (() => {
	var _el$ = _tmpl$$5();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/lock.svg
var _tmpl$$4 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z">\`);
var lock_default = (props = {}) => (() => {
	var _el$ = _tmpl$$4();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/lock_open.svg
var _tmpl$$3 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6-5h-1V6c0-2.76-2.24-5-5-5-2.28 0-4.27 1.54-4.84 3.75-.14.54.18 1.08.72 1.22a1 1 0 0 0 1.22-.72A2.996 2.996 0 0 1 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 11c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1z">\`);
var lock_open_default = (props = {}) => (() => {
	var _el$ = _tmpl$$3();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/userscript/core/useSpeedDial.tsx
const useSpeedDial = ({ store, setState, options, setOptions }) => {
	const OptionButton = (props) => solid_js_web.createComponent(components_IconButton.IconButton, {
		get placement() {
			return store.fab.placement;
		},
		showTip: true,
		get tip() {
			return props.showName ?? (helper.t(\`site.add_feature.\${props.optionName}\`) || helper.t(\`other.\${props.optionName}\`) || props.optionName);
		},
		onClick: () => setOptions({ [props.optionName]: !options[props.optionName] }),
		get children() {
			return props.children ?? (options[props.optionName] ? solid_js_web.createComponent(auto_fix_high_default, {}) : solid_js_web.createComponent(auto_fix_off_default, {}));
		}
	});
	helper.createEffectOn(() => [
		store.fab.optionsSpeedDial,
		store.fab.extraSpeedDial,
		store.fab.overrideSpeedDial
	], () => {
		if (store.fab.overrideSpeedDial) return setState("fab", "speedDial", store.fab.overrideSpeedDial.map((btn) => () => solid_js_web.createComponent(components_IconButton.IconButton, {
			get placement() {
				return store.fab.placement;
			},
			showTip: true,
			get tip() {
				return btn.name;
			},
			get onClick() {
				return btn.onClick;
			},
			get children() {
				return btn.icon({});
			}
		})));
		const list = [() => solid_js_web.createComponent(OptionButton, {
			optionName: "autoShow",
			get showName() {
				return helper.t("site.add_feature.auto_show");
			},
			get children() {
				return solid_js_web.memo(() => !!options.autoShow)() ? solid_js_web.createComponent(flash_on_default, {}) : solid_js_web.createComponent(flash_off_default, {});
			}
		}), () => solid_js_web.createComponent(OptionButton, {
			optionName: "lockOption",
			get showName() {
				return helper.t("site.add_feature.lock_option");
			},
			get children() {
				return solid_js_web.memo(() => !!options.lockOption)() ? solid_js_web.createComponent(lock_default, {}) : solid_js_web.createComponent(lock_open_default, {});
			}
		})];
		if (store.fab.extraSpeedDial) for (const btn of store.fab.extraSpeedDial) list.push(() => solid_js_web.createComponent(components_IconButton.IconButton, {
			get placement() {
				return store.fab.placement;
			},
			showTip: true,
			get tip() {
				return btn.name;
			},
			get onClick() {
				return btn.onClick;
			},
			get children() {
				return btn.icon({});
			}
		}));
		if (store.fab.optionsSpeedDial) for (const optionName of store.fab.optionsSpeedDial) list.push(() => solid_js_web.createComponent(OptionButton, { optionName }));
		else for (const optionName of Object.keys(options)) switch (optionName) {
			case "hiddenFab":
			case "option":
			case "autoShow":
			case "lockOption": continue;
			default: if (typeof options[optionName] === "boolean") list.push(() => solid_js_web.createComponent(OptionButton, { optionName }));
		}
		setState("fab", "speedDial", list);
	});
};
//#endregion
//#region src/userscript/core/useFab.tsx
var _tmpl$$2 = /*#__PURE__*/ solid_js_web.template(\`<div style=text-align:center;line-height:1.2><span style=opacity:0.6;font-size:0.75em></span><br>\`);
const useFab = (coreCtx, nowImgList) => {
	const { store, setState, options, setOptions, showComic } = coreCtx;
	helper.css\`
    #fab {
      --text-bg: transparent;

      position: fixed;
      right: calc(3vw - var(--left, 0px));
      bottom: calc(6vh - var(--top, 0px));
      font-size: clamp(12px, 1.5vw, 16px);
    }
  \`;
	helper.css("#fab", {
		"--left": () => \`\${options.fabPosition.left}px\`,
		"--top": () => \`\${options.fabPosition.top}px\`
	});
	/** \u5F53\u524D\u5DF2\u53D6\u5F97 url \u7684\u56FE\u7247\u6570\u91CF */
	const doneImgNum = helper.createRootMemo(() => nowImgList()?.filter(Boolean)?.length);
	/** \u5DF2\u52A0\u8F7D\u5B8C\u6BD5\u7684\u56FE\u7247\u6570\u91CF */
	const loadedImgNum = helper.createRootMemo(() => {
		let i = 0;
		for (const img of components_Manga.imgList()) if (img.loadType === "loaded") i += 1;
		return i;
	});
	helper.createEffectOn([
		doneImgNum,
		loadedImgNum,
		() => nowImgList()?.length,
		coreCtx.canLoadComic,
		coreCtx.canMultiSelect,
		() => coreCtx.multiSelect?.isEnabled(),
		() => coreCtx.multiSelect?.selectedIds().length,
		() => options.hiddenFab
	], ([doneNum, loadNum, totalNum, canLoadComic, canMultiSelect, enabled, selectedCount, hiddenFab]) => setState((state) => {
		if (enabled || canMultiSelect && !canLoadComic) {
			const ms = coreCtx.multiSelect;
			const isActive = enabled && helper.isNumber(selectedCount);
			state.fab.show = isActive ? true : void 0;
			state.fab.children = isActive ? (() => {
				var _el$ = _tmpl$$2(), _el$2 = _el$.firstChild;
				_el$2.nextSibling;
				solid_js_web.insert(_el$2, () => helper.t("other.selected"));
				solid_js_web.insert(_el$, selectedCount, null);
				return _el$;
			})() : solid_js_web.createComponent(checklist_default, {});
			state.fab.tip = helper.t("hotkeys.multi_select_load");
			state.fab.onClick = ms.load;
			state.fab.overrideSpeedDial = [{
				name: helper.t("other.exit"),
				onClick: ms.unmount,
				icon: close_default
			}, {
				name: helper.t("other.clear"),
				onClick: ms.clear,
				icon: clear_all_default
			}];
			if (doneNum !== void 0 && totalNum !== void 0) state.fab.progress = doneNum / totalNum || 0;
			return;
		}
		state.fab.progress = void 0;
		if (hiddenFab) state.fab.show = false;
		else state.fab.show = canLoadComic || canMultiSelect ? void 0 : false;
		state.fab.onClick = showComic;
		state.fab.overrideSpeedDial = void 0;
		if (totalNum === void 0 || doneNum === void 0) {
			state.fab.children = solid_js_web.createComponent(import_contacts_default, {});
			return;
		}
		if (totalNum === 0) {
			state.fab.children = solid_js_web.createComponent(image_search_default, {});
			state.fab.progress = 0;
			state.fab.tip = \`\${helper.t("other.loading_img")} - \${doneNum}/\${totalNum}\`;
			return;
		}
		if (doneNum < totalNum) {
			state.fab.children = solid_js_web.createComponent(image_search_default, {});
			state.fab.progress = doneNum / totalNum;
			state.fab.tip = \`\${helper.t("other.loading_img")} - \${doneNum}/\${totalNum}\`;
			return;
		}
		if (loadNum < totalNum) {
			state.fab.children = solid_js_web.createComponent(cloud_download_default, {});
			state.fab.progress = 1 + loadNum / totalNum;
			state.fab.tip = \`\${helper.t("other.img_loading")} - \${loadNum}/\${totalNum}\`;
			return;
		}
		state.fab.children = solid_js_web.createComponent(menu_book_default, {});
		state.fab.progress = 1 + loadNum / totalNum;
		state.fab.tip = helper.t("other.read_mode");
	}));
	const handleMount = (ref) => {
		const handleDrag = ({ xy: [x, y], last: [lx, ly] }) => {
			const left = options.fabPosition.left + x - lx;
			const top = options.fabPosition.top + y - ly;
			setOptions({ fabPosition: {
				left,
				top
			} });
		};
		helper.useDrag({
			ref,
			handleDrag,
			setCapture: true
		});
		new IntersectionObserver((entries) => {
			if (entries.length !== 1 || entries[0].isIntersecting) return;
			setOptions({ fabPosition: {
				left: 0,
				top: 0
			} });
		}, { threshold: .5 }).observe(ref);
	};
	let dom;
	dom = helper.mountComponents("fab", () => {
		solid_js.createEffect(() => {
			setState("fab", {
				placement: -options.fabPosition.left < window.innerWidth / 2 ? "left" : "right",
				speedDialPlacement: -options.fabPosition.top < window.innerHeight / 2 ? "top" : "bottom"
			});
		});
		return solid_js_web.createComponent(components_Fab.Fab, solid_js_web.mergeProps({
			ref: handleMount,
			rootRef: () => dom
		}, () => store.fab));
	});
	dom.style.setProperty("z-index", "2147483646", "important");
	useSpeedDial(coreCtx);
};
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/sync.svg
var _tmpl$$1 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 4V2.21c0-.45-.54-.67-.85-.35l-2.8 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.32.31.86.09.86-.36V6c3.31 0 6 2.69 6 6 0 .79-.15 1.56-.44 2.25-.15.36-.04.77.23 1.04.51.51 1.37.33 1.64-.34.37-.91.57-1.91.57-2.95 0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-.79.15-1.56.44-2.25.15-.36.04-.77-.23-1.04-.51-.51-1.37-.33-1.64.34C4.2 9.96 4 10.96 4 12c0 4.42 3.58 8 8 8v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36z">\`);
var sync_default = (props = {}) => (() => {
	var _el$ = _tmpl$$1();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/userscript/core/migration.ts
const migrationOption = async (name, editFn) => {
	try {
		const option = await GM.getValue(name);
		if (!option) throw new Error(\`GM.getValue Error: not found \${name}\`);
		if (await editFn(option)) return;
		await GM.setValue(name, option);
	} catch (error) {
		helper.log.error(\`migration \${name} option error:\`, error);
	}
};
/** \u91CD\u547D\u540D\u914D\u7F6E\u9879 */
const renameOption = (name, list) => migrationOption(name, (option) => {
	for (const itemText of list) {
		const [path, newName] = itemText.split(" => ");
		helper.byPath(option, path, (parent, key) => {
			helper.log("rename Option", itemText);
			if (newName) Reflect.set(parent, newName, parent[key]);
			Reflect.deleteProperty(parent, key);
		});
	}
});
/** \u65E7\u7248\u672C\u914D\u7F6E\u8FC1\u79FB */
const migration = async (version) => {
	await GM.deleteValue("ehTagColorizeCss");
	await GM.deleteValue("ehTagSortCss");
	const values = await GM.listValues();
	if (helper.versionLt(version, "7")) for (const key of values) switch (key) {
		case "Version":
		case "Languages": continue;
		case "HotKeys":
			await renameOption(key, [
				"\u5411\u4E0A\u7FFB\u9875 => turn_page_up",
				"\u5411\u4E0B\u7FFB\u9875 => turn_page_down",
				"\u5411\u53F3\u7FFB\u9875 => turn_page_right",
				"\u5411\u5DE6\u7FFB\u9875 => turn_page_left",
				"\u8DF3\u81F3\u9996\u9875 => jump_to_home",
				"\u8DF3\u81F3\u5C3E\u9875 => jump_to_end",
				"\u9000\u51FA => exit",
				"\u5207\u6362\u9875\u9762\u586B\u5145 => switch_page_fill",
				"\u5207\u6362\u5377\u8F74\u6A21\u5F0F => switch_scroll_mode",
				"\u5207\u6362\u5355\u53CC\u9875\u6A21\u5F0F => switch_single_double_page_mode",
				"\u5207\u6362\u9605\u8BFB\u65B9\u5411 => switch_dir",
				"\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F => enter_read_mode"
			]);
			break;
		default: await renameOption(key, [
			"option.scrollbar.showProgress => showImgStatus",
			"option.clickPage => clickPageTurn",
			"option.clickPage.overturn => reverse",
			"option.swapTurnPage => swapPageTurnKey",
			"option.flipToNext => jumpToNext",
			"\u5339\u914Dnhentai => associate_nhentai",
			"\u5FEB\u6377\u952E\u7FFB\u9875 => hotkeys_page_turn",
			"\u81EA\u52A8\u7FFB\u9875 => auto_page_turn",
			"\u5F7B\u5E95\u5C4F\u853D\u6F2B\u753B => block_totally",
			"\u5728\u65B0\u9875\u9762\u4E2D\u6253\u5F00\u94FE\u63A5 => open_link_new_page",
			"\u8BB0\u4F4F\u5F53\u524D\u7AD9\u70B9 => remember_current_site"
		]);
	}
	if (helper.versionLt(version, "9")) for (const key of values) switch (key) {
		case "Version":
		case "Languages": continue;
		case "Hotkeys":
			await renameOption(key, [
				"turn_page_up => ",
				"turn_page_down => ",
				"turn_page_right => scroll_right",
				"turn_page_left => scroll_left"
			]);
			break;
		default: await migrationOption(key, (option) => {
			if (typeof option.option?.scrollMode !== "boolean") return true;
			option.option.scrollMode = {
				enabled: option.option.scrollMode,
				spacing: option.option.scrollModeSpacing,
				imgScale: option.option.scrollModeImgScale,
				fitToWidth: option.option.scrollModeFitToWidth
			};
		});
	}
	if (helper.versionLt(version, "9.4")) await migrationOption("ehentai", (option) => {
		if (!Reflect.has(option, "hotkeys_page_turn")) return true;
		option.hotkeys = option.hotkeys_page_turn;
		Reflect.deleteProperty(option, "hotkeys_page_turn");
	});
	if (helper.versionLt(version, "11.5")) await migrationOption("Hotkeys", (option) => {
		for (const [name, hotkeys] of Object.entries(option)) option[name] = hotkeys.map((key) => key.replaceAll(/\\b[A-Z]\\b/gu, (match) => match.toLowerCase()));
	});
	if (helper.versionLt(version, "11.9.1")) for (const key of values) switch (key) {
		case "Version":
		case "Languages":
		case "Hotkeys": continue;
		default: await renameOption(key, ["option.translation => "]);
	}
	if (helper.versionLt(version, "11.12")) for (const key of values) switch (key) {
		case "Version":
		case "Languages":
		case "Hotkeys": continue;
		default: await renameOption(key, ["associate_nhentai => cross_site_link"]);
	}
	if (helper.versionLt(version, "12")) for (const key of values) switch (key) {
		case "Version":
		case "Languages":
		case "Hotkeys":
			await GM.setValue(\`@\${key}\`, await GM.getValue(key));
			await GM.deleteValue(key);
			continue;
		default: await renameOption(key, ["hotkeys => add_hotkeys_actions"]);
	}
	if (helper.versionLt(version, "12.6")) for (const key of values) {
		if (key.startsWith("@")) continue;
		await migrationOption(key, (option) => {
			const oldTranslation = option.option?.translation;
			if (!oldTranslation) return;
			delete option.option.translation;
			if (oldTranslation.localUrl) {
				option.option.translation ??= {};
				option.option.translation.mit ??= {};
				option.option.translation.mit.localUrl = oldTranslation.localUrl;
			}
		});
	}
};
//#endregion
//#region src/userscript/core/useManga.tsx
let dom;
/**
* \u663E\u793A\u6F2B\u753B\u9605\u8BFB\u7A97\u53E3
*/
const useManga = ({ store, setState, options, setOptions }) => {
	helper.css\`
    #comicRead {
      position: fixed;
      top: 0;
      left: 0;
      transform: scale(0);

      contain: strict;

      width: 100%;
      height: 100%;

      writing-mode: initial;
      font-size: 16px;

      opacity: 0;

      transition:
        opacity 300ms,
        transform 0s 300ms;
    }

    #comicRead[show] {
      transform: scale(1);
      opacity: 1;
      transition:
        opacity 300ms,
        transform 100ms;
    }

    /* \u9632\u6B62\u5176\u4ED6\u6269\u5C55\u7684\u5143\u7D20\u663E\u793A\u5230\u6F2B\u753B\u4E0A\u6765 */
    #comicRead[show] ~ :not(#fab, #toast, .comicread-ignore) {
      pointer-events: none !important;

      z-index: 1 !important;

      display: none !important;

      visibility: hidden !important;
      opacity: 0 !important;
    }
  \`;
	setState("manga", {
		show: false,
		option: options.option,
		defaultOption: options.defaultOption,
		onOptionChange: (option) => setOptions({ option }),
		hotkeys: store.hotkeys,
		onHotkeysChange(newValue) {
			GM.setValue("@Hotkeys", newValue);
			setState("hotkeys", newValue);
		}
	});
	dom = helper.mountComponents("comicRead", () => solid_js_web.createComponent(components_Manga.Manga, solid_js_web.mergeProps(() => store.manga)));
	dom.style.setProperty("z-index", "2147483647", "important");
	const toastDom = helper.querySelector("#toast");
	if (toastDom) dom.after(toastDom);
	const htmlStyle = document.documentElement.style;
	let lastOverflow = htmlStyle.overflow;
	const wakeLock = new helper.WakeLock();
	helper.createEffectOn(helper.createRootMemo(() => store.manga.show && store.manga.imgList.length > 0), (show) => {
		if (show) {
			dom.setAttribute("show", "");
			lastOverflow = htmlStyle.overflow;
			htmlStyle.setProperty("overflow", "hidden", "important");
			htmlStyle.setProperty("scrollbar-width", "none", "important");
			if (components_Manga.store.option.autoFullscreen) components_Manga.refs.root.requestFullscreen();
			wakeLock.on();
		} else {
			dom.removeAttribute("show");
			htmlStyle.overflow = lastOverflow;
			htmlStyle.removeProperty("scrollbar-width");
			wakeLock.off();
		}
	}, { defer: true });
	setState("manga", {
		onExit: () => setState("manga", "show", false),
		editSettingList(list) {
			const SyncOptions = () => {
				const sync = async () => {
					const currentReadOption = helper.difference(components_Manga.store.option, components_Manga.store.defaultOption);
					for (const key of await GM.listValues()) {
						if (key.startsWith("@")) continue;
						await migrationOption(key, (option) => {
							option.option = currentReadOption;
						});
					}
					components_Toast.toast.success(helper.t("setting.sync_options_other_site"));
				};
				return solid_js_web.createComponent(components_Manga.SettingsItemButton, {
					get name() {
						return helper.t("setting.sync_options_other_site");
					},
					onClick: sync,
					get children() {
						return solid_js_web.createComponent(sync_default, {});
					}
				});
			};
			const otherSetting = list.find(([title]) => title === helper.t("other.other"));
			if (otherSetting) {
				const [, FC] = otherSetting;
				otherSetting[1] = () => [solid_js_web.createComponent(FC, {}), solid_js_web.createComponent(SyncOptions, {})];
			}
			return list;
		}
	});
};
//#endregion
//#region src/userscript/core/version.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<h2>\u{1F973} ComicRead \u5DF2\u66F4\u65B0\u5230 v\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<section><h3></h3><ul>\`);
var _tmpl$3 = /*#__PURE__*/ solid_js_web.template(\`<li>\`);
/** \u5206\u7EC4\u987A\u5E8F\u4E0E\u6807\u9898\uFF0C\u9700\u4E0E scripts/lib/changelog.ts \u7684 changeTypes \u4FDD\u6301\u4E00\u81F4 */
const changeTypes = [
	"feat",
	"fix",
	"perf"
];
const changeSectionTitle = {
	feat: "\u65B0\u589E",
	fix: "\u4FEE\u590D",
	perf: "\u4F18\u5316"
};
/** \u5904\u7406\u7248\u672C\u66F4\u65B0\u76F8\u5173 */
const handleVersionUpdate = async () => {
	const version = await helper.ensureGmValue("@Version", GM.info.script.version);
	if (version === GM.info.script.version) return;
	await migration(version);
	if (helper.lang() === "zh") {
		components_Toast.toast(() => {
			const changes = Object.entries({
				"12.11.0": {
					"date": "2026-09-04",
					"feat": ["\u652F\u6301\u5FAE\u535A", "\u652F\u6301\u30CB\u30B3\u30CB\u30B3\u6F2B\u753B"],
					"fix": ["\u5728\u62F7\u8D1D\u6F2B\u753B\u89E6\u53D1\u53CD\u722C\u673A\u5236\u663E\u793A\u4E0D\u51FA\u76EE\u5F55\u65F6\u91CD\u5EFA\u76EE\u5F55"]
				},
				"12.10.0": {
					"date": "2026-09-02",
					"feat": ["\u652F\u6301 pawchive", "\u5B9E\u73B0\u8FB9\u7F18\u88C1\u5207\u529F\u80FD"],
					"fix": ["\u4FEE\u590D\u5728\u767E\u5408\u4F1A\u548C ehentai \u4E0A\u65E0\u6CD5\u81EA\u52A8\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F\u7684 bug"]
				},
				"12.9.0": {
					"date": "2026-08-21",
					"feat": [
						"\u589E\u52A0\u6F2B\u753B\u6EE4\u955C\u529F\u80FD",
						"\u652F\u6301\u663E\u793A\u518D\u6F2B\u753B\u7684\u8BC4\u8BBA",
						"\u652F\u6301\u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\u6301\u7EED\u6EDA\u52A8"
					]
				},
				"12.8.0": {
					"date": "2026-08-21",
					"feat": [
						"\u589E\u52A0\u6EDA\u52A8\u52A8\u753B\u65F6\u957F\u7684\u914D\u7F6E\u9879",
						"\u589E\u52A0\u53EF\u914D\u7F6E\u7684\u7FFB\u9875\u6EDA\u52A8\u52A8\u753B",
						"\u4F18\u5316\u7B80\u6613\u9605\u8BFB\u6A21\u5F0F\u7684\u56FE\u7247\u9009\u62E9\u673A\u5236\uFF0C\u5C3D\u91CF\u6392\u9664\u5E72\u6270\u9879"
					],
					"fix": ["\u4FEE\u590D\u5728\u7EC5\u58EB\u6F2B\u753B\u4E0A\u7684\u90E8\u5206\u7F51\u9875\u5931\u6548\u7684 bug"]
				},
				"12.7.1": {
					"date": "2026-08-20",
					"fix": ["\u4FEE\u590D\u56FE\u7247\u52A0\u8F7D\u5F02\u5E38\u7684 bug"]
				},
				"12.7.0": {
					"date": "2026-08-19",
					"feat": ["\u652F\u6301 komiic \u7684\u65B0\u57DF\u540D", "\u589E\u52A0\u652F\u6301 Postimages"],
					"fix": ["\u4FEE\u590D\u5728\u65B0\u7248 LANraragi \u4E0A\u5931\u6548\u7684 bug", "\u4FEE\u590D\u5728\u518D\u6F2B\u753B\u4E0A\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\u7684 bug"]
				},
				"12.6.0": {
					"date": "2026-08-16",
					"feat": [
						"\u53CC\u9875\u5377\u8F74\u6A21\u5F0F\u53EF\u4EE5\u5728\u4E00\u884C\u91CC\u663E\u793A\u591A\u9875",
						"ehentai \u753B\u5ECA\u652F\u6301\u591A\u9009\u52A0\u8F7D\u6307\u5B9A\u9875",
						"pixiv \u652F\u6301\u591A\u9009\u52A0\u8F7D",
						"kemono \u652F\u6301\u5728\u5217\u8868\u9875\u591A\u9009\u52A0\u8F7D"
					],
					"fix": ["\u4FEE\u590D\u62F7\u8D1D\u6F2B\u753B\u7684\u63A5\u53E3\u9519\u8BEF"]
				}
			}).filter(([changeVersion]) => helper.versionLt(version, changeVersion)).map(([, change]) => change);
			return [(() => {
				var _el$ = _tmpl$();
				_el$.firstChild;
				solid_js_web.insert(_el$, () => GM.info.script.version, null);
				return _el$;
			})(), solid_js_web.createComponent(solid_js.For, {
				each: changeTypes,
				children: (type) => {
					const items = changes.flatMap((change) => change[type] ?? []);
					if (items.length === 0) return null;
					return (() => {
						var _el$3 = _tmpl$2(), _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling;
						solid_js_web.insert(_el$4, () => changeSectionTitle[type]);
						solid_js_web.insert(_el$5, solid_js_web.createComponent(solid_js.For, {
							each: items,
							children: (item) => (() => {
								var _el$6 = _tmpl$3();
								solid_js_web.insert(_el$6, item);
								return _el$6;
							})()
						}));
						return _el$3;
					})();
				}
			})];
		}, {
			id: "Version Tip",
			type: "custom",
			duration: Infinity,
			onDismiss: () => GM.setValue("@Version", GM.info.script.version)
		});
		const listenerId = await GM.addValueChangeListener("@Version", async (_, __, newVersion) => {
			if (newVersion !== GM.info.script.version) return;
			components_Toast.toast.dismiss("Version Tip");
			await GM.removeValueChangeListener(listenerId);
		});
	} else await GM.setValue("@Version", GM.info.script.version);
};
//#endregion
//#region src/userscript/core/useInit.tsx
/** \u5BF9\u57FA\u7840\u7684\u521D\u59CB\u5316\u64CD\u4F5C\u7684\u5C01\u88C5 */
const useInit = async (name, initSiteOptions = {}) => {
	await helper.setInitLang();
	await handleVersionUpdate();
	const defaultOptions = {
		option: void 0,
		defaultOption: void 0,
		autoShow: true,
		lockOption: false,
		hiddenFab: false,
		fabPosition: {
			top: 0,
			left: 0
		},
		...initSiteOptions
	};
	const saveOptions = await GM.getValue(name);
	if (saveOptions) for (const key of Object.keys(saveOptions)) {
		if (Reflect.has(defaultOptions, key)) continue;
		Reflect.deleteProperty(saveOptions, key);
	}
	else await GM.setValue(name, {});
	const { store, setState } = helper.useStore({
		fab: {
			tip: helper.t("other.read_mode"),
			show: false
		},
		manga: { imgList: [] },
		hotkeys: await GM.getValue("@Hotkeys", {}),
		name,
		options: {
			...structuredClone(defaultOptions),
			...saveOptions
		},
		comicMap: { "": { getImgList: Object.assign(() => [], { type: "init" }) } },
		nowComic: "",
		flag: {
			isStored: saveOptions !== void 0,
			needAutoShow: true,
			hasPageHandler: false
		}
	});
	components_Manga.setDefaultHotkeys((_hotkeys) => ({
		..._hotkeys,
		enter_read_mode: ["v"],
		multi_select_load: ["Shift + v"]
	}));
	const { options } = store;
	const setOptions = (newOptions) => {
		setState((state) => Object.assign(state.options, newOptions));
		if (options.lockOption && newOptions?.lockOption !== false) return;
		return GM.setValue(store.name, helper.difference(options, defaultOptions));
	};
	const loadComic = async (id = store.nowComic) => {
		if (!Reflect.has(store.comicMap, id)) throw new Error("comic not found");
		try {
			setState("comicMap", id, "imgList", []);
			const newImgList = await store.comicMap[id].getImgList(coreCtx);
			if (newImgList.length === 0) throw new Error(helper.t("alert.fetch_comic_img_failed"));
			setState("comicMap", id, "imgList", newImgList);
		} catch (error) {
			setState("comicMap", id, "imgList", void 0);
			helper.log.error(error);
			throw error;
		}
	};
	const showComic = async (id = store.nowComic) => {
		if (!Reflect.has(store.comicMap, id)) throw new Error("comic not found");
		if (store.comicMap[id].getImgList?.type === "init") return;
		if (id !== store.nowComic) setState("nowComic", id);
		switch (store.comicMap[id].imgList?.length) {
			case 0: return components_Toast.toast.warn(helper.t("alert.repeat_load"), { duration: 1500 });
			case void 0: try {
				await loadComic(id);
				setState("flag", "needAutoShow", false);
			} catch (error) {
				return components_Toast.toast.error(error.message);
			}
		}
		setState("manga", "show", true);
	};
	const init = helper.once((autoShow = true) => {
		setState("fab", { onClick: () => void showComic() });
		if (autoShow && store.flag.needAutoShow && options.autoShow) showComic();
		(async () => {
			await GM.registerMenuCommand(helper.t("other.enter_comic_read_mode"), () => void showComic());
			await updateHideFabMenu();
		})();
		components_Manga.listenHotkey({
			enter_read_mode: () => showComic(),
			Escape: () => handleEsc() || "SKIP"
		}, true);
	});
	helper.createEffectOn(() => store.comicMap[""].getImgList, (_, prev) => !prev && init(), { defer: true });
	const canLoadComic = helper.createRootMemo(() => Object.values(store.comicMap).some((entry) => entry.getImgList?.type === void 0));
	const [multiSelect, setMultiSelect] = solid_js.createSignal();
	const coreCtx = {
		store,
		setState,
		options,
		setOptions,
		loadComic,
		showComic,
		init,
		canLoadComic,
		canMultiSelect: helper.createRootMemo(() => Boolean(multiSelect())),
		get multiSelect() {
			return multiSelect();
		},
		setMultiSelect,
		dynamicLoad: async (loadImgFn, length, id = "") => {
			if (store.comicMap[id].imgList?.length) return store.comicMap[id].imgList;
			const imgNum = typeof length === "number" ? length : length();
			setState("comicMap", id, "imgList", helper.range(imgNum, ""));
			await new Promise(async (resolve) => {
				try {
					await loadImgFn((i, img) => {
						setState("comicMap", id, "imgList", (list) => list.with(i, img));
						resolve();
					});
				} catch (error) {
					components_Toast.toast.error(error.message);
				}
			});
			return store.comicMap[id].imgList;
		},
		dynamicLazyLoad: async ({ loadImg, length, id = "", concurrency = 4 }) => {
			if (store.comicMap[id].imgList?.length) return store.comicMap[id].imgList;
			const imgNum = typeof length === "number" ? length : length();
			await new Promise((resolve) => {
				const queue = new helper.PQueue(async (i) => {
					const img = await loadImg(i);
					setState("comicMap", id, "imgList", (list) => list.with(i, img));
					resolve();
				}, concurrency);
				setState((state) => {
					state.comicMap[id].imgList = helper.range(imgNum, "");
					state.manga.onWaitUrlImgs = (imgs) => queue.set(...imgs);
				});
			});
			return store.comicMap[id].imgList;
		}
	};
	const nowImgList = helper.createRootMemo(() => {
		const comic = store.comicMap[store.nowComic];
		if (!comic?.imgList) return;
		if (!comic.adList?.size) return comic.imgList;
		return comic.imgList.filter((_, i) => !comic.adList?.has(i));
	});
	helper.createEffectOn(nowImgList, (list) => list && setState("manga", "imgList", list));
	useFab(coreCtx, nowImgList);
	useManga(coreCtx);
	let menuId;
	/** \u66F4\u65B0\u663E\u793A/\u9690\u85CF\u60AC\u6D6E\u6309\u94AE\u7684\u83DC\u5355\u9879 */
	const updateHideFabMenu = async () => {
		await GM.unregisterMenuCommand(menuId);
		menuId = await GM.registerMenuCommand(options.hiddenFab ? helper.t("other.fab_show") : helper.t("other.fab_hidden"), () => {
			setOptions({ hiddenFab: !options.hiddenFab });
			return updateHideFabMenu();
		});
	};
	await GM.registerMenuCommand(helper.t("site.show_settings_menu"), () => setState("fab", {
		show: true,
		focus: true,
		tip: helper.t("other.setting"),
		children: solid_js_web.createComponent(settings_default, {}),
		onBackdropClick: () => setState("fab", {
			show: false,
			focus: false
		})
	}));
	return coreCtx;
};
//#endregion
//#region src/userscript/core/siteAdapter.ts
/** \u5FEB\u901F\u9002\u914D\u7B80\u5355\u7F51\u7AD9 */
const setup = async ({ name, initOptions, isMangaPage, getImgList, onPrev, onNext, onExit, handler: userHandler }) => {
	await setupSiteAdapter({
		name,
		options: initOptions,
		getPageContext: async () => {
			const data = isMangaPage ? await isMangaPage() : {};
			if (!data) return;
			return {
				type: "manga",
				...data === true ? {} : data
			};
		},
		handlers: { manga: async (coreCtx, pageCtx) => {
			const { setState } = coreCtx;
			setState((state) => {
				state.comicMap[""] = { getImgList: (ctx) => getImgList(ctx, pageCtx) };
				state.manga.onExit = (isEnd) => {
					onExit?.(isEnd);
					setState("manga", "show", false);
				};
			});
			await userHandler?.(coreCtx, pageCtx);
			(async () => {
				if (onPrev) setState("manga", { onPrev: await helper.wait(onPrev, 5e3) });
				if (onNext) setState("manga", { onNext: await helper.wait(onNext, 5e3) });
			})();
		} }
	});
};
const setupSiteAdapter = async ({ name, options: initOptions, getPageContext, handlers, features }) => {
	let pageCtx;
	const cleanupFns = [];
	pageCtx = handlers.all ? await getPageContext(pageCtx) : await helper.waitUrlChange(() => getPageContext(pageCtx));
	const coreCtx = await useInit(name, initOptions);
	const { store, setState, showComic, loadComic, init, options } = coreCtx;
	const processPageContext = async (newPageCtx, force = false) => {
		if (!force && helper.isEqual(pageCtx, newPageCtx)) return;
		for (const cleanup of cleanupFns) await cleanup(newPageCtx);
		cleanupFns.length = 0;
		pageCtx = newPageCtx;
		const isMangePage = newPageCtx?.isManga ?? newPageCtx?.type === "manga";
		setState((state) => {
			state.flag.hasPageHandler = Boolean(newPageCtx?.type) && Reflect.has(handlers, newPageCtx.type);
			state.manga.show = false;
			state.comicMap = { "": { getImgList: Object.assign(() => [], { type: "init" }) } };
		});
		const allCleanup = await handlers.all?.(coreCtx, newPageCtx);
		if (allCleanup) cleanupFns.push(allCleanup);
		if (features) for (const [featureName, handler] of Object.entries(features)) {
			if (!options[featureName] || !handler) continue;
			if (handler.length >= 2 && !newPageCtx) continue;
			helper.requestIdleCallback(async () => {
				const cleanup = await handler(coreCtx, newPageCtx);
				if (cleanup && pageCtx === newPageCtx) cleanupFns.push(cleanup);
			}, 1e3);
		}
		if (!newPageCtx) return;
		init(isMangePage);
		const handlerCleanup = await handlers[newPageCtx.type]?.(coreCtx, newPageCtx);
		if (handlerCleanup) cleanupFns.push(handlerCleanup);
		if (!isMangePage || !store.options.autoShow) return;
		const lastImg = store.comicMap[store.nowComic].imgList?.[0];
		if (await helper.wait(async () => {
			await helper.sleep(200);
			await loadComic();
			return store.comicMap[store.nowComic].imgList?.[0] !== lastImg;
		}, 1e4)) await showComic();
	};
	helper.onUrlChange(async (lastUrl) => {
		if (!lastUrl) return await processPageContext(pageCtx, true);
		await processPageContext(await getPageContext(pageCtx));
	});
};
/** \u9002\u914D\u300C\u5C06\u6240\u6709\u56FE\u7247\u663E\u793A\u5728\u4E00\u4E2A\u9875\u9762\u4E0A\u300D\u7684\u7F51\u7AD9 */
const setupSimple = async ({ name, initOptions, isMangaPage, onPrev, onNext, onExit, selector, sortImageByTop }) => {
	let scanner;
	await setupSiteAdapter({
		name,
		options: initOptions,
		getPageContext: async () => {
			if (isMangaPage) {
				const data = await isMangaPage();
				if (!data) return;
				return {
					type: "manga",
					...data === true ? {} : data
				};
			}
			if (selector && !await helper.waitDom(selector, 2, 1e3)) return;
			return { type: "manga" };
		},
		handlers: { manga: ({ setState, store }) => {
			scanner ??= new userscript_autoImageScanner.AutoImageScanner({
				selector,
				sortImageByTop,
				onImgListChange: (imgList) => setState("comicMap", "", "imgList", imgList),
				onChapterSwitchChange: async ({ prev, next }) => {
					const customPrev = onPrev ? await onPrev() : void 0;
					const customNext = onNext ? await onNext() : void 0;
					setState("manga", {
						onPrev: customPrev ?? prev,
						onNext: customNext ?? next
					});
				},
				shouldTriggerLazyLoad: () => store.manga.show || store.manga.imgList.length === 0
			});
			setState((state) => {
				state.comicMap[""] = { getImgList: () => {
					scanner.start();
					scanner.triggerLazyLoad();
					return scanner.waitFirstImage(1e4);
				} };
				state.manga.onExit = (isEnd) => {
					onExit?.(isEnd);
					setState("manga", "show", false);
				};
			});
			helper.createEffectOn(() => store.manga.show, (show) => show && void scanner.triggerLazyLoad());
			return () => scanner.stop();
		} }
	});
};
//#endregion
exports.handleEsc = handleEsc;
exports.handleVersionUpdate = handleVersionUpdate;
exports.listenHotkey = components_Manga.listenHotkey;
exports.registerEsc = registerEsc;
exports.request = request.request;
exports.setEscPriority = setEscPriority;
exports.setup = setup;
exports.setupSimple = setupSimple;
exports.setupSiteAdapter = setupSiteAdapter;
exports.toast = components_Toast.toast;
exports.useInit = useInit;
exports.useSpeedDial = useSpeedDial;
`,"userscript/autoImageScanner":`
let helper = require("helper");
//#region src/userscript/autoImageScanner/chapterSwitch.ts
const prevRe = /^\u4E0A\u4E00?(?:[\u7AE0\u8A71\u8BDD]|\u7AE0\u8282)$|^(?:prev|previous)(?:\\s+chapter)?$|^\u524D\u306E\u7AE0$/iu;
const nextRe = /^\u4E0B\u4E00?(?:[\u7AE0\u8A71\u8BDD]|\u7AE0\u8282)$|^next(?:\\s+chapter)?$|^\u6B21\u306E\u7AE0$/iu;
const getChapterSwitch = () => {
	let onPrev;
	let onNext;
	const checkElement = (e) => {
		const texts = [e.textContent, e.ariaLabel].filter(Boolean).map((text) => text.replaceAll(/[<>()\u300A\u300B\uFF08\uFF09\u300C\u300D\u300E\u300F]/gu, "").trim());
		if (texts.length === 0) return;
		for (const text of texts) {
			if (!onPrev && prevRe.test(text)) {
				onPrev = () => e.click();
				break;
			}
			if (!onNext && nextRe.test(text)) {
				onNext = () => e.click();
				break;
			}
		}
	};
	for (const e of helper.querySelectorAll("a, button")) {
		checkElement(e);
		if (onPrev && onNext) break;
		for (const element of e.querySelectorAll("div, span, p")) {
			checkElement(element);
			if (onPrev && onNext) break;
		}
	}
	return {
		next: onNext,
		prev: onPrev
	};
};
//#endregion
//#region src/userscript/autoImageScanner/eleSelector.ts
const getTagText = (ele) => {
	let text = ele.nodeName;
	if (ele.id && !/\\d/u.test(ele.id)) text += \`#\${ele.id}\`;
	return text;
};
/** \u83B7\u53D6\u5143\u7D20\u4EC5\u8BB0\u5F55\u4E86\u5C42\u7EA7\u7ED3\u6784\u5173\u7CFB\u7684\u9009\u62E9\u5668 */
const getEleSelector = (ele) => {
	const parents = [ele.nodeName];
	const root = ele.getRootNode();
	let e = ele;
	while (e.parentNode && e.parentNode !== root) {
		e = e.parentNode;
		parents.push(getTagText(e));
	}
	return parents.toReversed().join(">");
};
/** \u5224\u65AD\u6307\u5B9A\u5143\u7D20\u662F\u5426\u7B26\u5408\u9009\u62E9\u5668 */
const isEleSelector = (ele, selector) => {
	const parents = selector.split(">").toReversed();
	let e = ele;
	for (let i = 0; e && i < parents.length; i++) {
		if (getTagText(e) !== parents[i]) return false;
		e = e.parentNode;
	}
	return e === e.getRootNode();
};
//#endregion
//#region src/userscript/autoImageScanner/helper.ts
/** \u6309\u7167\u5143\u7D20\u7684\u663E\u793A\u9AD8\u5EA6\u6765\u6392\u5E8F\u5143\u7D20 */
const sortElementsByTop = (elements) => {
	const list = [...elements];
	const topMap = /* @__PURE__ */ new WeakMap();
	for (const e of list) topMap.set(e, e.getBoundingClientRect().top);
	return list.sort((a, b) => topMap.get(a) - topMap.get(b));
};
/** \u6309\u7167\u6587\u6863\u987A\u5E8F\u6765\u6392\u5E8F\u5143\u7D20 */
const sortElementsByDomOrder = (elements) => [...elements].sort((a, b) => {
	const position = a.compareDocumentPosition(b);
	if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
	if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
	return 0;
});
/** \u5904\u7406 URL.createObjectURL \u540E\u9A6C\u4E0A URL.revokeObjectURL \u7684\u56FE\u7247 */
var BlobUrlResolver = class {
	blobUrlMap = /* @__PURE__ */ new Map();
	async resolve(e) {
		if (this.blobUrlMap.has(e.src)) return this.blobUrlMap.get(e.src);
		if (!e.src.startsWith("blob:")) return this.httpToHttps(e.src);
		if (await helper.testImgUrl(e.src)) return e.src;
		const canvas = new OffscreenCanvas(e.naturalWidth, e.naturalHeight);
		canvas.getContext("2d").drawImage(e, 0, 0);
		const url = await helper.canvasToBlobUrl(canvas);
		this.blobUrlMap.set(e.src, url);
		return url;
	}
	clear() {
		this.blobUrlMap.clear();
	}
	/** \u5728 https \u9875\u9762\u4E0B\u5C06 http \u56FE\u7247\u5730\u5740\u5347\u7EA7\u4E3A https */
	httpToHttps(url) {
		if (url.startsWith("http:") && location.protocol === "https:") return url.replace("http:", "https:");
		return url;
	}
};
/** \u68C0\u6D4B\u91CD\u590D\u7684\u52A0\u8F7D\u5360\u4F4D\u56FE\uFF0C\u7528\u771F\u5B9E\u5730\u5740\u66FF\u6362 */
var PlaceholderImgList = class {
	/** \u5DF2\u5224\u5B9A\u4E3A\u91CD\u590D\u5360\u4F4D\u56FE\u7684 URL \u96C6\u5408 */
	set = /* @__PURE__ */ new Set();
	has(url) {
		return this.set.has(url);
	}
	update(imgList) {
		const countMap = /* @__PURE__ */ new Map();
		for (const url of imgList) {
			if (!url || this.set.has(url)) continue;
			const count = (countMap.get(url) ?? 0) + 1;
			countMap.set(url, count);
			if (count > 5) this.set.add(url);
		}
	}
	clear() {
		this.set.clear();
	}
};
//#endregion
//#region src/userscript/autoImageScanner/dwellWatcher.ts
/** \u8F6E\u8BE2\u68C0\u67E5\u53EF\u89C1\u5143\u7D20\u6301\u7EED\u65F6\u957F\u7684\u95F4\u9694 */
const DWELL_CHECK_INTERVAL = 100;
/** \u76D1\u89C6\u5143\u7D20\u8FDB\u5165\u89C6\u53E3\u540E\u7684\u8FDE\u7EED\u53EF\u89C1\u65F6\u957F\uFF0C\u5E76\u5728\u8FBE\u5230\u6307\u5B9A\u65F6\u957F\u540E\u89E6\u53D1\u56DE\u8C03 */
var DwellWatcher = class {
	stateMap = /* @__PURE__ */ new WeakMap();
	visibleSet = /* @__PURE__ */ new Set();
	checkTimer;
	observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const e = entry.target;
			const state = this.stateMap.get(e);
			if (!state) continue;
			if (entry.isIntersecting) {
				this.visibleSet.add(e);
				if (state.enterTime === void 0) state.enterTime = performance.now();
				this.ensureTimer();
			} else {
				this.visibleSet.delete(e);
				state.enterTime = void 0;
				this.stopTimerIfNeeded();
			}
		}
	});
	watch(e, duration, callback) {
		this.unwatch(e);
		this.stateMap.set(e, {
			duration,
			callback
		});
		this.observer.observe(e);
	}
	unwatch(e) {
		this.visibleSet.delete(e);
		this.stopTimerIfNeeded();
		if (this.stateMap.delete(e)) this.observer.unobserve(e);
	}
	get visibleElements() {
		return this.visibleSet;
	}
	/** \u6709\u53EF\u89C1\u5143\u7D20\u65F6\u542F\u52A8\u8F6E\u8BE2\uFF0C\u6CA1\u6709\u53EF\u89C1\u5143\u7D20\u65F6\u505C\u6B62\u8F6E\u8BE2 */
	ensureTimer() {
		if (this.checkTimer === void 0 && this.visibleSet.size > 0) this.checkTimer = window.setInterval(() => this.checkVisibleElements(), DWELL_CHECK_INTERVAL);
	}
	stopTimerIfNeeded() {
		if (this.checkTimer !== void 0 && this.visibleSet.size === 0) {
			window.clearInterval(this.checkTimer);
			this.checkTimer = void 0;
		}
	}
	checkVisibleElements() {
		for (const e of this.visibleSet) {
			const state = this.stateMap.get(e);
			if (!state) continue;
			if (state.enterTime === void 0) {
				state.enterTime = performance.now();
				continue;
			}
			if (performance.now() - state.enterTime >= state.duration) {
				this.unwatch(e);
				state.callback();
			}
		}
	}
};
//#endregion
//#region src/userscript/autoImageScanner/triggerLazyLoad.ts
/** \u65B0\u5143\u7D20\u77ED\u505C\u7559\u65F6\u95F4 */
const SHORT_STAY_TIME = 310;
/** \u65E7\u5143\u7D20\u957F\u505C\u7559\u65F6\u95F4 */
const LONG_STAY_TIME = 1010;
/** \u65E7\u5143\u7D20\u8D85\u8FC7\u8BE5\u65F6\u95F4\u540E\uFF0C\u5373\u4F7F\u6709\u65B0\u5143\u7D20\u4E5F\u4F1A\u4F18\u5148\u8FDB\u884C\u957F\u505C\u7559 */
const OLD_TIMEOUT = 5e3;
/** \u6BCF\u8F6E\u4E4B\u95F4\u7684\u95F4\u9694 */
const ROUND_INTERVAL = 100;
/** \u89E6\u53D1\u7F51\u9875\u5E95\u90E8\u7FFB\u9875\u7684\u505C\u7559\u65F6\u95F4 */
const TURN_PAGE_WAIT_TIME = 600;
/** \u89E6\u53D1\u7F51\u9875\u5E95\u90E8\u7FFB\u9875\u7684\u8282\u6D41\u65F6\u95F4 */
const TURN_PAGE_THROTTLE_TIME = 1e3;
/** \u7528\u4E8E\u5224\u65AD\u662F\u5426\u662F\u56FE\u7247 url \u7684\u6B63\u5219 */
const isImgUrlRe = /^(?:(?:(?:https?|ftp|file):)?\\/)?\\/[-\\w+&@#/%?=~|!:,.;]+[-\\w+&@#%=~|]$/u;
/** \u627E\u51FA\u683C\u5F0F\u4E3A\u56FE\u7247 url \u7684\u5143\u7D20\u5C5E\u6027 */
const getDatasetUrl = (e) => {
	for (const key of e.getAttributeNames()) {
		switch (key) {
			case "src":
			case "alt":
			case "class":
			case "style":
			case "id":
			case "title":
			case "onload":
			case "onerror": continue;
		}
		const val = e.getAttribute(key).trim();
		if (!isImgUrlRe.test(val)) continue;
		return val;
	}
};
/** \u5224\u65AD\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5DF2\u7ECF\u6210\u529F\u89E6\u53D1\u5B8C\u61D2\u52A0\u8F7D */
const isLazyLoaded = (e, oldSrc) => {
	if (!e.isConnected || !e.checkVisibility()) return true;
	if (helper.isImageElement(e)) {
		if (!e.src) return false;
		if (!e.offsetParent) return false;
		if (e.src.startsWith("data:image/svg")) return false;
		if (e.naturalWidth > 500 || e.naturalHeight > 500) return true;
		if (oldSrc !== void 0 && e.src !== oldSrc) return true;
	} else {
		const imgDomList = e.querySelectorAll("img");
		for (const imgDom of imgDomList) if (isLazyLoaded(imgDom, oldSrc)) return true;
	}
	return false;
};
var LazyLoadManager = class {
	/** \u61D2\u52A0\u8F7D\u5931\u8D25\u56DE\u8C03 */
	onFailed;
	/** \u5F53\u524D\u662F\u5426\u5141\u8BB8\u89E6\u53D1\u61D2\u52A0\u8F7D */
	runCondition = () => true;
	/** \u8BB0\u5F55\u5143\u7D20\u7684\u521D\u59CB src */
	oldSrcMap = /* @__PURE__ */ new WeakMap();
	/** \u672A\u5B8C\u6210\u77ED\u505C\u7559\u7684\u65B0\u5143\u7D20 */
	newSet = /* @__PURE__ */ new Set();
	/** \u5DF2\u5B8C\u6210\u77ED\u505C\u7559\u4F46\u672A\u5B8C\u6210\u957F\u505C\u7559\u7684\u65E7\u5143\u7D20\uFF0Cvalue \u4E3A\u77ED\u505C\u7559\u5B8C\u6210\u65F6\u95F4 */
	oldMap = /* @__PURE__ */ new Map();
	/** \u957F\u505C\u7559\u540E\u4ECD\u672A\u6210\u529F\u89E6\u53D1\u61D2\u52A0\u8F7D\uFF0C\u5224\u5B9A\u4E3A\u975E\u56FE\u7247\u69FD\u4F4D\u7684\u5143\u7D20 */
	failedSet = /* @__PURE__ */ new WeakSet();
	dwellWatcher = new DwellWatcher();
	/** \u89E6\u53D1\u7F51\u9875\u5E95\u90E8\u7FFB\u9875\u7684\u8282\u6D41 */
	turnPageScheduled = helper.createScheduled((fn) => helper.throttle(fn, TURN_PAGE_THROTTLE_TIME));
	trigger = helper.singleThreaded(async (_state, targets) => {
		this.addTargets(targets);
		await this.runRounds();
	});
	/** \u5224\u65AD\u56FE\u7247\u5143\u7D20\u662F\u5426\u9700\u8981\u89E6\u53D1\u61D2\u52A0\u8F7D */
	needTrigger(e) {
		return !isLazyLoaded(e, this.oldSrcMap.get(e)) && !this.failedSet.has(e);
	}
	/** \u5224\u65AD\u5143\u7D20\u662F\u5426\u5DF2\u7ECF\u88AB\u5224\u5B9A\u4E3A\u4E0D\u53EF\u80FD\u662F\u56FE\u7247\u69FD\u4F4D */
	isLazyLoadFailed(e) {
		return this.failedSet.has(e);
	}
	/** \u5C06\u76EE\u6807\u5143\u7D20\u52A0\u5165\u5F85\u89E6\u53D1\u96C6\u5408 */
	addTargets(targets) {
		for (const e of targets) {
			if (this.failedSet.has(e) || !e.isConnected || !e.checkVisibility()) continue;
			if (helper.isImageElement(e) && !this.oldSrcMap.has(e)) this.oldSrcMap.set(e, e.src);
			const oldSrc = this.oldSrcMap.get(e);
			const datasetUrl = getDatasetUrl(e);
			if (datasetUrl) e.setAttribute("src", datasetUrl);
			if (isLazyLoaded(e, oldSrc)) continue;
			if (this.oldMap.has(e) || this.newSet.has(e)) continue;
			this.newSet.add(e);
			this.dwellWatcher.watch(e, SHORT_STAY_TIME, () => this.handleShortCompleted(e));
		}
	}
	/** \u77ED\u505C\u7559\u5B8C\u6210\u7684\u56DE\u8C03 */
	handleShortCompleted = (e) => {
		if (!this.newSet.delete(e)) return;
		if (isLazyLoaded(e, this.oldSrcMap.get(e))) return;
		this.oldMap.set(e, Date.now());
		this.dwellWatcher.watch(e, LONG_STAY_TIME, () => this.handleLongCompleted(e));
	};
	/** \u957F\u505C\u7559\u5B8C\u6210\u7684\u56DE\u8C03 */
	handleLongCompleted = (e) => {
		if (!this.oldMap.delete(e)) return;
		if (isLazyLoaded(e, this.oldSrcMap.get(e))) return;
		this.failedSet.add(e);
		this.onFailed?.(e);
	};
	/** \u79FB\u9664\u5143\u7D20\u5E76\u53D6\u6D88\u89C2\u5BDF */
	removeElement(e) {
		this.dwellWatcher.unwatch(e);
		this.newSet.delete(e);
		this.oldMap.delete(e);
	}
	/** \u6E05\u7406\u5DF2\u4E0D\u5728\u9875\u9762\u4E0A\u6216\u5DF2\u7ECF\u5B8C\u6210\u61D2\u52A0\u8F7D\u7684\u5143\u7D20 */
	prune() {
		for (const e of this.newSet) if (isLazyLoaded(e, this.oldSrcMap.get(e))) this.removeElement(e);
		for (const e of this.oldMap.keys()) if (isLazyLoaded(e, this.oldSrcMap.get(e))) this.removeElement(e);
	}
	/** \u83B7\u53D6\u8D85\u8FC7\u8D85\u65F6\u65F6\u95F4\u7684\u65E7\u5143\u7D20 */
	getDueOld() {
		const now = Date.now();
		return [...this.oldMap.entries()].filter(([, shortCompletedAt]) => now - shortCompletedAt >= OLD_TIMEOUT).map(([e]) => e);
	}
	/** \u6309 DOM \u987A\u5E8F\u6392\u5E8F */
	sortByDomOrder(list) {
		return list.toSorted((a, b) => {
			if (a === b) return 0;
			return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
		});
	}
	/** \u626B\u63CF\u6240\u6709\u65B0\u5143\u7D20\uFF0C\u8BA9\u5B83\u4EEC\u5B8C\u6210\u77ED\u505C\u7559 */
	async sweepNew() {
		this.prune();
		const targets = this.sortByDomOrder([...this.newSet]);
		for (const e of targets) {
			if (!this.newSet.has(e)) continue;
			this.scrollToElement(e);
			await this.waitForBatch((target) => this.newSet.has(target), SHORT_STAY_TIME);
		}
	}
	/** \u626B\u63CF\u6307\u5B9A\u65E7\u5143\u7D20\uFF0C\u8BA9\u5B83\u4EEC\u5B8C\u6210\u957F\u505C\u7559 */
	async sweepOld(targets) {
		this.prune();
		const sorted = this.sortByDomOrder(targets);
		for (const e of sorted) {
			if (!this.oldMap.has(e)) continue;
			this.scrollToElement(e);
			await this.waitForBatch((target) => this.oldMap.has(target), LONG_STAY_TIME);
		}
	}
	/**
	* \u7B49\u5F85\u5F53\u524D\u89C6\u53E3\u5185\u6240\u6709\u5F85\u5904\u7406\u5143\u7D20\u5B8C\u6210\u5BF9\u5E94\u505C\u7559\u3002
	*
	* \u5982\u679C\u5F85\u5904\u7406\u5143\u7D20\u5DF2\u79BB\u5F00\u89C6\u53E3\u6216\u5DF2\u4ECE\u5BF9\u5E94\u96C6\u5408\u4E2D\u79FB\u9664\uFF0C\u5219\u63D0\u524D\u7ED3\u675F\u7B49\u5F85\u3002
	*/
	async waitForBatch(isPending, duration) {
		await helper.sleep(20);
		await helper.wait(() => [...this.dwellWatcher.visibleElements].some(isPending) ? void 0 : true, duration, 50);
	}
	/** \u6EDA\u52A8\u5230\u5143\u7D20\u9876\u90E8\u5E76\u6D3E\u53D1 scroll \u4E8B\u4EF6\uFF0C\u89E6\u53D1\u7F51\u7AD9\u61D2\u52A0\u8F7D */
	scrollToElement(e) {
		e.scrollIntoView({
			behavior: "instant",
			block: "start"
		});
		e.dispatchEvent(new Event("scroll", { bubbles: true }));
	}
	/** \u89E6\u53D1\u7F51\u9875\u5E95\u90E8\u7FFB\u9875 */
	triggerTurnPage = async () => {
		if (!this.turnPageScheduled()) return;
		const nowScroll = window.scrollY;
		window.scroll({
			top: document.body.scrollHeight,
			behavior: "instant"
		});
		document.body.dispatchEvent(new Event("scroll", { bubbles: true }));
		await helper.sleep(TURN_PAGE_WAIT_TIME);
		if (this.runCondition()) window.scroll({
			top: nowScroll,
			behavior: "instant"
		});
	};
	/**
	* \u6267\u884C\u5B8C\u6574\u7684\u61D2\u52A0\u8F7D\u8F6E\u6B21
	*
	* \u5BF9\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u77ED\u505C\u7559\uFF08\u521D\u59CB\u5FEB\u901F\u5C1D\u8BD5\u89E6\u53D1\uFF09\u548C\u957F\u505C\u7559\uFF08\u4FDD\u9669\u8D77\u89C1\u7684\u4E8C\u6B21\u5C1D\u8BD5\uFF09\uFF0C
	* \u4E24\u6B21\u505C\u7559\u540E\u90FD\u65E0\u6CD5\u89E6\u53D1\u61D2\u52A0\u8F7D\u7684\uFF0C\u5224\u5B9A\u5176\u4E0D\u662F\u56FE\u7247\u69FD\u4F4D
	*/
	async runRounds() {
		const startScroll = window.scrollY;
		try {
			while (true) {
				if (!this.runCondition()) return;
				this.prune();
				if (this.newSet.size === 0 && this.oldMap.size === 0) return await this.triggerTurnPage();
				const hadNew = this.newSet.size > 0;
				const startNewSize = this.newSet.size;
				const startOldSize = this.oldMap.size;
				if (this.newSet.size > 0) await this.sweepNew();
				if (this.oldMap.size > 0) {
					const dueOld = this.getDueOld();
					if (dueOld.length > 0) await this.sweepOld(dueOld);
				}
				if (!hadNew && this.oldMap.size > 0) await this.sweepOld([...this.oldMap.keys()]);
				this.prune();
				const changed = this.newSet.size < startNewSize || this.oldMap.size < startOldSize;
				if (this.newSet.size === 0 && this.oldMap.size === 0) return await this.triggerTurnPage();
				if (!changed) return await this.triggerTurnPage();
				await this.triggerTurnPage();
				await helper.sleep(ROUND_INTERVAL);
			}
		} finally {
			if (this.runCondition()) window.scroll({
				top: startScroll,
				behavior: "instant"
			});
		}
	}
};
const lazyLoadTrigger = new LazyLoadManager();
helper.exposeToGlobal({ lazyLoadTrigger });
const triggerLazyLoad = lazyLoadTrigger.trigger;
const needTrigger = (e) => lazyLoadTrigger.needTrigger(e);
const isLazyLoadFailed = (e) => lazyLoadTrigger.isLazyLoadFailed(e);
//#endregion
//#region src/userscript/autoImageScanner/imageSlot.ts
/** \u5224\u65AD\u4E24\u4E2A\u5143\u7D20\u7684 dataset \u662F\u5426\u5177\u6709\u76F8\u540C\u7684\u952E\u7ED3\u6784 */
const hasSameDatasetStructure = (a, b) => {
	const keysA = Object.keys(a.dataset);
	const keysB = Object.keys(b.dataset);
	if (keysA.length !== keysB.length) return false;
	return keysA.every((key) => keysB.includes(key));
};
/** \u5224\u65AD\u4E24\u4E2A\u5143\u7D20\u662F\u5426\u76F8\u4F3C */
const isSimilarElement = (a, b) => a === b || a.className && a.className === b.className || hasSameDatasetStructure(a, b);
const SKIP_TAGS = /* @__PURE__ */ new Set([
	"SCRIPT",
	"STYLE",
	"NOSCRIPT",
	"IFRAME",
	"HEAD",
	"TEMPLATE"
]);
/** \u5224\u65AD\u5143\u7D20\u662F\u5426\u4E3A\u660E\u663E\u4E0D\u53EF\u80FD\u662F\u56FE\u7247\u69FD\u4F4D */
const isImageHostIneligible = (element) => {
	if (!element.checkVisibility()) return true;
	if (helper.isImageElement(element)) return false;
	if (SKIP_TAGS.has(element.tagName)) return true;
	if (element.children.length === 0) return true;
	if (isLazyLoadFailed(element)) return true;
	return false;
};
/** \u5224\u65AD\u5143\u7D20\u662F\u5426\u5177\u6709\u8DB3\u591F\u7684\u5C3A\u5BF8 */
const hasValidSize = (element) => {
	const rect = element.getBoundingClientRect();
	return rect.width >= 100 && rect.height >= 100;
};
/** \u67E5\u627E\u6700\u8FD1\u4E00\u5C42\u7684\u300C\u4E0E\u5F53\u524D\u5143\u7D20\u76F8\u4F3C\u300D\u4E14\u6570\u91CF\u8DB3\u591F\u7684\u5144\u5F1F\u56FE\u7247\u69FD\u4F4D */
const findSimilarImageSlots = (element, threshold) => {
	let current = element;
	while (current?.parentElement) {
		const siblingList = current.parentElement.children;
		if (siblingList.length >= threshold) {
			const similarElements = [];
			for (const sibling of siblingList) {
				if (!(sibling instanceof HTMLElement) || !isSimilarElement(sibling, current) || isImageHostIneligible(sibling) || !helper.isImageElement(sibling) && !hasValidSize(sibling)) continue;
				similarElements.push(sibling);
			}
			if (similarElements.length >= threshold) return similarElements;
		}
		current = current.parentElement;
	}
	return [];
};
/** \u6536\u96C6\u4E00\u4E2A\u69FD\u4F4D\u5185\u6240\u6709\u5DF2\u901A\u8FC7 filterImg \u7684\u56FE\u7247 */
const addSlotImgs = (slot, rawImgSet, coveredImgs) => {
	for (const innerImg of slot.querySelectorAll("img")) if (rawImgSet.has(innerImg)) coveredImgs.add(innerImg);
};
/** \u4ECE\u6240\u6709\u5408\u683C\u56FE\u7247\u4E2D\u627E\u51FA\u6240\u6709\u56FE\u7247\u69FD\u4F4D\u7EC4 */
const findImageSlotGroups = (map) => {
	const rawImgs = [...map.keys()];
	const rawImgSet = new Set(rawImgs);
	const coveredImgSet = /* @__PURE__ */ new Set();
	const groups = [];
	for (const img of rawImgs) {
		if (coveredImgSet.has(img)) continue;
		const slots = findSimilarImageSlots(img, 5);
		if (slots.length === 0) continue;
		const parent = slots[0].parentElement;
		if (!parent) continue;
		let medianAreaCache;
		const group = {
			parent,
			slots: new Set(slots),
			coveredImgs: /* @__PURE__ */ new Set(),
			get imgNum() {
				return this.coveredImgs.size;
			},
			get medianArea() {
				medianAreaCache ??= getGroupMedianArea(group, map);
				return medianAreaCache;
			}
		};
		for (const slot of slots) if (helper.isImageElement(slot)) {
			if (rawImgSet.has(slot)) group.coveredImgs.add(slot);
		} else addSlotImgs(slot, rawImgSet, group.coveredImgs);
		for (const coveredImg of group.coveredImgs) coveredImgSet.add(coveredImg);
		groups.push(group);
	}
	return groups;
};
/** \u4ECE\u591A\u4E2A\u56FE\u7247\u69FD\u4F4D\u7EC4\u4E2D\u9009\u62E9\u6700\u53EF\u80FD\u5C5E\u4E8E\u6B63\u6587\u7684\u4E00\u7EC4 */
const pickBestGroup = (groups) => groups.reduce((best, current) => {
	if (current.imgNum !== best.imgNum) return current.imgNum > best.imgNum ? current : best;
	return current.medianArea > best.medianArea ? current : best;
});
/** \u8BA1\u7B97\u6240\u6709\u56FE\u7247\u69FD\u4F4D\u7EC4\uFF0C\u5E76\u540C\u65F6\u8FD4\u56DE\u5F53\u524D\u6700\u4F18\u7EC4 */
const getImageSlotGroupResult = (map) => {
	const groups = findImageSlotGroups(map);
	return {
		groups,
		bestGroup: groups.length > 0 ? pickBestGroup(groups) : void 0
	};
};
/** \u8BA1\u7B97\u7EC4\u5185\u56FE\u7247\u663E\u793A\u9762\u79EF\u7684\u4E2D\u4F4D\u6570 */
const getGroupMedianArea = (group, map) => {
	const areas = [...group.coveredImgs].map((img) => {
		const info = map.get(img);
		return info ? info.display.width * info.display.height : 0;
	}).sort((a, b) => a - b);
	if (areas.length === 0) return 0;
	const mid = Math.floor(areas.length / 2);
	return areas.length % 2 === 1 ? areas[mid] : (areas[mid - 1] + areas[mid]) / 2;
};
/** \u5C06\u56FE\u7247\u69FD\u4F4D\u7EC4\u5C55\u5F00\u4E3A\u5C55\u793A\u7528\u69FD\u4F4D\u5217\u8868 */
const buildSlotElementsFromGroup = (group) => {
	const slotElements = [];
	const slotImgsMap = /* @__PURE__ */ new Map();
	for (const img of group.coveredImgs) {
		let node = img.parentElement;
		while (node && node !== group.parent && node.parentElement !== group.parent) node = node.parentElement;
		if (!node || node === group.parent) continue;
		const imgs = slotImgsMap.get(node) ?? [];
		imgs.push(img);
		slotImgsMap.set(node, imgs);
	}
	for (const slot of group.slots) {
		if (helper.isImageElement(slot)) {
			if (group.coveredImgs.has(slot)) slotElements.push(slot);
			continue;
		}
		const imgs = slotImgsMap.get(slot);
		if (imgs && imgs.length > 0) slotElements.push(...imgs);
		else slotElements.push(slot);
	}
	return slotElements;
};
//#endregion
//#region src/userscript/autoImageScanner/imageListBuilder.ts
/** \u6839\u636E\u5408\u683C\u56FE\u7247\u96C6\u5408\u548C\u6700\u4F18\u56FE\u7247\u69FD\u4F4D\u7EC4\uFF0C\u7EF4\u62A4\u6700\u7EC8\u53EF\u7528\u7684 imgList */
var ImageListBuilder = class {
	enableSortImageByTop;
	filterByContainer;
	onImgListChange;
	onEmpty;
	blobUrlResolver = new BlobUrlResolver();
	placeholderImgList = new PlaceholderImgList();
	updatePlaceholderImgList = helper.throttle((imgList) => {
		this.placeholderImgList.update(imgList);
	});
	isUpdatingImgList = false;
	generation = 0;
	updateSeq = 0;
	/** \u8FC7\u6EE4\u540E\u771F\u6B63\u7528\u4E8E\u5C55\u793A\u7684\u56FE\u7247\u69FD\u4F4D\u5217\u8868 */
	_slotElements = [];
	/** \u627E\u5230\u7684\u6240\u6709\u7B26\u5408\u6761\u4EF6\u7684\u56FE\u7247 url */
	_imgList = [];
	constructor(options) {
		this.enableSortImageByTop = options.enableSortImageByTop;
		this.filterByContainer = options.filterByContainer;
		this.onImgListChange = options.onImgListChange;
		this.onEmpty = options.onEmpty;
	}
	/** \u5F53\u524D\u8FC7\u6EE4\u540E\u771F\u6B63\u7528\u4E8E\u5C55\u793A\u7684\u56FE\u7247\u69FD\u4F4D\u5217\u8868 */
	get slotElements() {
		return this._slotElements;
	}
	/** \u5F53\u524D\u627E\u5230\u7684\u6240\u6709\u7B26\u5408\u6761\u4EF6\u7684\u56FE\u7247 url */
	get imgList() {
		return this._imgList;
	}
	/** \u6839\u636E\u6700\u65B0\u5408\u683C\u56FE\u7247\u96C6\u5408\u548C\u6700\u4F18\u69FD\u4F4D\u7EC4\uFF0C\u66F4\u65B0 slotElements \u4E0E imgList */
	async update(qualifiedMap, bestGroup, generation) {
		const seq = ++this.updateSeq;
		this.generation = generation;
		const selectedSlots = this.filterByContainer && bestGroup ? buildSlotElementsFromGroup(bestGroup) : [...qualifiedMap.keys()];
		this._slotElements = this.enableSortImageByTop ? sortElementsByTop(selectedSlots) : sortElementsByDomOrder(selectedSlots);
		if (this._slotElements.length === 0) {
			this.onEmpty?.();
			return {
				isEdited: false,
				isEmpty: true
			};
		}
		if (this._imgList.length < this._slotElements.length) this._imgList = [...this._imgList, ...Array.from({ length: this._slotElements.length - this._imgList.length }, () => "")];
		else if (this._imgList.length > this._slotElements.length) this._imgList = this._imgList.slice(0, this._slotElements.length);
		this.onImgListChange?.([...this._imgList]);
		this.updatePlaceholderImgList(this._imgList);
		let isEdited = false;
		this.isUpdatingImgList = true;
		try {
			await helper.plimit(this._slotElements.map((e, i) => async () => {
				if (seq !== this.updateSeq || generation !== this.generation) return;
				if (!helper.isImageElement(e)) {
					if (this._imgList[i] === "") return;
					isEdited ||= true;
					this._imgList[i] = "";
					return;
				}
				let newUrl = await this.blobUrlResolver.resolve(e);
				if (seq !== this.updateSeq || generation !== this.generation) return;
				if (this.placeholderImgList.has(newUrl)) newUrl = getDatasetUrl(e) ?? "";
				if (newUrl === this._imgList[i]) return;
				isEdited ||= true;
				this._imgList[i] = newUrl;
			}));
		} finally {
			if (seq === this.updateSeq) this.isUpdatingImgList = false;
		}
		if (seq !== this.updateSeq || generation !== this.generation) return {
			isEdited: false,
			isEmpty: true
		};
		this.removeFailedSlots();
		if (this._slotElements.length === 0) return {
			isEdited,
			isEmpty: true
		};
		if (seq !== this.updateSeq || generation !== this.generation) return {
			isEdited: false,
			isEmpty: true
		};
		return {
			isEdited,
			isEmpty: false
		};
	}
	/** \u5728\u5F02\u6B65 URL \u89E3\u6790\u5B8C\u6210\u540E\uFF0C\u901A\u77E5\u5916\u90E8\u6700\u7EC8 imgList \u53D8\u5316 */
	notifyFinalImgListChange(isEdited) {
		if (!isEdited || this._slotElements.length === 0) return;
		this.onImgListChange?.([...this._imgList]);
		this.updatePlaceholderImgList(this._imgList);
	}
	/** \u61D2\u52A0\u8F7D\u5931\u8D25\u540E\u7684\u56DE\u8C03\uFF1A\u5728\u975E\u66F4\u65B0\u671F\u95F4\u7ACB\u5373\u5254\u9664\u5931\u8D25\u69FD\u4F4D */
	onLazyLoadFailed() {
		if (!this.isUpdatingImgList) this.removeFailedSlots();
	}
	/** \u4ECE\u5F53\u524D\u5C55\u793A\u5217\u8868\u4E2D\u79FB\u9664\u591A\u6B21\u89E6\u53D1\u61D2\u52A0\u8F7D\u4ECD\u5931\u8D25\u7684\u69FD\u4F4D */
	removeFailedSlots() {
		if (this._slotElements.length === 0) return;
		const keptSlotElements = [];
		const keptImgList = [];
		for (let i = 0; i < this._slotElements.length; i++) {
			const slot = this._slotElements[i];
			if (isLazyLoadFailed(slot)) continue;
			keptSlotElements.push(slot);
			keptImgList.push(this._imgList[i]);
		}
		if (keptSlotElements.length === this._slotElements.length) return;
		this._slotElements = keptSlotElements;
		this._imgList = keptImgList;
		if (this._slotElements.length === 0) return this.onEmpty?.();
		this.onImgListChange?.([...this._imgList]);
		this.updatePlaceholderImgList(this._imgList);
	}
	/** \u5408\u683C\u56FE\u7247\u96C6\u5408\u4E3A\u7A7A\u65F6\uFF0C\u6E05\u7A7A\u5F53\u524D\u5217\u8868\u72B6\u6001\u5E76\u901A\u77E5\u5916\u90E8 */
	clearListState() {
		this.updateSeq++;
		this.isUpdatingImgList = false;
		if (this._slotElements.length === 0 && this._imgList.length === 0) return;
		this._slotElements = [];
		this._imgList = [];
		this.onImgListChange?.([]);
	}
	/** \u505C\u6B62\u626B\u63CF\u65F6\u6E05\u7406\u8D44\u6E90 */
	clear() {
		this.updateSeq++;
		this.isUpdatingImgList = false;
		this.blobUrlResolver.clear();
		this.placeholderImgList.clear();
		this._slotElements = [];
		this._imgList = [];
	}
};
//#endregion
//#region src/userscript/autoImageScanner/lazyLoadController.ts
var LazyLoadController = class {
	getImgSelector;
	getImageSlotGroups;
	getAllImg;
	runCondition;
	onLazyLoadFailed;
	/** \u61D2\u52A0\u8F7D\u89E6\u53D1 promise\uFF0C\u7528\u4E8E\u907F\u514D\u91CD\u590D\u89E6\u53D1 */
	triggerPromise;
	constructor(options) {
		this.getImgSelector = options.getImgSelector;
		this.getImageSlotGroups = options.getImageSlotGroups;
		this.getAllImg = options.getAllImg;
		this.runCondition = options.runCondition;
		this.onLazyLoadFailed = options.onLazyLoadFailed;
		lazyLoadTrigger.onFailed = () => this.onLazyLoadFailed?.();
		lazyLoadTrigger.runCondition = this.runCondition;
	}
	/** \u624B\u52A8\u89E6\u53D1\u4E00\u8F6E\u5B8C\u6574\u7684\u61D2\u52A0\u8F7D */
	trigger() {
		if (this.triggerPromise) return this.triggerPromise;
		this.triggerPromise = (async () => {
			try {
				if (this.getImgSelector()) {
					await this.triggerExpectImg(3);
					await this.triggerExpectImg();
				}
				await this.triggerAllRemainingLazyLoad();
			} finally {
				this.triggerPromise = void 0;
			}
		})();
		return this.triggerPromise;
	}
	/** \u505C\u6B62\u65F6\u6E05\u7406\u89E6\u53D1\u72B6\u6001 */
	clear() {
		this.triggerPromise = void 0;
	}
	/** \u89E6\u53D1\u5927\u6982\u7387\u662F\u6F2B\u753B\u56FE\u7247\u4E14\u8FD8\u672A\u6210\u529F\u89E6\u53D1\u61D2\u52A0\u8F7D\u7684\u5143\u7D20\u7684\u61D2\u52A0\u8F7D */
	triggerExpectImg = async (num) => {
		const selector = this.getImgSelector();
		if (!selector) return;
		let expectImgList = helper.querySelectorAll(selector).filter(needTrigger);
		if (num) expectImgList = expectImgList.slice(0, num);
		await triggerLazyLoad(expectImgList);
	};
	/** \u89E6\u53D1\u6240\u6709\u672A\u6536\u655B\u7684 img \u548C\u56FE\u7247\u5BB9\u5668 */
	triggerAllRemainingLazyLoad = async () => {
		if (!this.runCondition()) return;
		const imgTargets = this.getAllImg().filter(needTrigger);
		if (imgTargets.length > 0) await triggerLazyLoad(imgTargets);
		const groupTargets = [];
		for (const group of this.getImageSlotGroups()) for (const slot of group.slots) if (!helper.isImageElement(slot) && needTrigger(slot)) groupTargets.push(slot);
		if (groupTargets.length > 0) await triggerLazyLoad(groupTargets);
	};
};
//#endregion
//#region src/userscript/autoImageScanner/ImageWatcher.ts
/** \u904D\u5386\u8282\u70B9\u53CA\u5176\u5B50\u6811\u4E2D\u7684\u6240\u6709\u56FE\u7247\u5143\u7D20 */
const forEachImage = (nodes, callback) => {
	for (const node of nodes) if (helper.isImageElement(node)) callback(node);
	else if (helper.isHTMLElement(node)) for (const img of node.querySelectorAll("img")) callback(img);
};
/** \u76D1\u542C\u7F51\u9875\u4E0A\u7684\u6240\u6709\u56FE\u7247\u5143\u7D20\u7684\u53D8\u5316\uFF0C\u7B5B\u9009\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u56FE\u7247 */
var ImageWatcher = class {
	options;
	ro;
	mo;
	qualifiedMap = new helper.ReactiveMap();
	targetAttributes = [
		"src",
		"srcset",
		"data-src",
		"data-original",
		"data-srcset"
	];
	constructor(options) {
		this.options = options;
		this.ro = new ResizeObserver(this.handleResize);
		this.mo = new MutationObserver(this.handleMutation);
	}
	start() {
		let changed = false;
		for (const e of document.querySelectorAll("img")) {
			this.observeImage(e);
			if (this.tryQualify(e)) changed = true;
		}
		if (changed) this.options.onChanged(this.qualifiedMap);
		this.mo.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: this.targetAttributes
		});
	}
	/** \u505C\u6B62\u76D1\u542C\u5E76\u6E05\u7406\u8D44\u6E90 */
	stop() {
		this.mo.disconnect();
		this.ro.disconnect();
		this.qualifiedMap.clear();
	}
	/** \u4F7F\u7528 ResizeObserver \u76D1\u6D4B\u56FE\u7247\u5C3A\u5BF8\u53D8\u5316\uFF0C\u5E76\u5728\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210\u540E\u91CD\u65B0\u68C0\u67E5 */
	observeImage = (img) => {
		this.ro.observe(img);
		if (img.complete) return;
		img.addEventListener("load", () => {
			if (this.tryQualify(img)) this.options.onChanged(this.qualifiedMap);
		}, { once: true });
	};
	/** \u6784\u9020\u56FE\u7247\u5C3A\u5BF8\u4FE1\u606F */
	createImageInfo(img, display) {
		return {
			display,
			natural: {
				width: img.naturalWidth,
				height: img.naturalHeight
			}
		};
	}
	/** \u5C1D\u8BD5\u5C06\u56FE\u7247\u52A0\u5165 qualifiedMap\uFF0C\u6210\u529F\u8FD4\u56DE true */
	tryQualify(img, display) {
		if (this.qualifiedMap.has(img)) return false;
		const rect = display ?? img.getBoundingClientRect();
		const imageInfo = this.createImageInfo(img, rect);
		if (!this.options.filterImg(imageInfo, img)) return false;
		this.qualifiedMap.set(img, imageInfo);
		this.ro.unobserve(img);
		return true;
	}
	/** \u5904\u7406 ResizeObserver \u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u5728\u56FE\u7247\u5C3A\u5BF8\u53D1\u751F\u5B9E\u9645\u53D8\u5316\uFF08\u6216\u521D\u59CB\u5316\uFF09\u65F6\u624D\u4F1A\u89E6\u53D1 */
	handleResize = (entries) => {
		let changed = false;
		for (const entry of entries) {
			const img = entry.target;
			if (this.tryQualify(img, {
				width: entry.contentRect.width,
				height: entry.contentRect.height
			})) changed = true;
		}
		if (changed) this.options.onChanged(this.qualifiedMap);
	};
	/** \u5C06\u56FE\u7247\u4ECE qualifiedMap \u79FB\u9664\uFF0C\u8FD4\u56DE\u662F\u5426\u771F\u7684\u79FB\u9664\u4E86 */
	deleteImg = (img) => {
		if (!this.qualifiedMap.has(img)) return false;
		this.qualifiedMap.delete(img);
		return true;
	};
	/** \u5904\u7406\u65B0\u589E\u8282\u70B9\u4E2D\u7684\u56FE\u7247 */
	handleAddedNodes(nodes) {
		let changed = false;
		forEachImage(nodes, (img) => {
			this.observeImage(img);
			if (this.tryQualify(img)) changed = true;
		});
		return changed;
	}
	/** \u5904\u7406\u79FB\u9664\u8282\u70B9\u4E2D\u7684\u56FE\u7247 */
	handleRemovedNodes(nodes) {
		let changed = false;
		forEachImage(nodes, (img) => {
			if (this.deleteImg(img)) changed = true;
		});
		return changed;
	}
	/** \u5904\u7406\u56FE\u7247\u5C5E\u6027\u53D8\u5316 */
	handleAttributeMutation(node) {
		if (!helper.isImageElement(node)) return false;
		if (this.tryQualify(node)) return true;
		let changed = false;
		if (this.deleteImg(node)) changed = true;
		this.observeImage(node);
		return changed;
	}
	/** \u5904\u7406\u76D1\u542C\u8282\u70B9\u7684\u589E\u5220\u6539 */
	handleMutation = (mutations) => {
		let changed = false;
		for (const mutation of mutations) switch (mutation.type) {
			case "childList":
				changed = this.handleAddedNodes(mutation.addedNodes) || changed;
				changed = this.handleRemovedNodes(mutation.removedNodes) || changed;
				break;
			case "attributes": changed = this.handleAttributeMutation(mutation.target) || changed;
		}
		if (changed) this.options.onChanged(this.qualifiedMap);
	};
};
//#endregion
//#region src/userscript/autoImageScanner/qualifiedImageWatcher.ts
const IMG_BLACK_LIST_SELECTOR = ["#pagetual-preload", "noscript"].join(",");
/** \u76D1\u542C\u5E76\u83B7\u53D6\u7F51\u9875\u4E0A\u6240\u6709\u7B26\u5408\u6761\u4EF6\u7684\u56FE\u7247\u5143\u7D20 */
var QualifiedImageWatcher = class {
	getImgSelector;
	filterImg;
	imageWatcher;
	constructor(options) {
		this.getImgSelector = options.getImgSelector;
		this.filterImg = options.filterImg;
		this.imageWatcher = new ImageWatcher({
			filterImg: (info, img) => this.filterImage(info, img),
			onChanged: options.onChanged
		});
	}
	/** \u5F00\u59CB\u76D1\u542C\u7F51\u9875\u56FE\u7247 */
	start() {
		this.imageWatcher.start();
	}
	/** \u505C\u6B62\u76D1\u542C\u5E76\u6E05\u7406\u8D44\u6E90 */
	stop() {
		this.imageWatcher.stop();
	}
	/** \u83B7\u53D6\u9875\u9762\u4E0A\u6240\u6709\u4E0D\u5728\u9ED1\u540D\u5355\u4E2D\u7684\u56FE\u7247\u5143\u7D20 */
	getAllImg() {
		return helper.querySelectorAll(\`:not(\${IMG_BLACK_LIST_SELECTOR}) > img\`);
	}
	/** \u5224\u65AD\u56FE\u7247\u662F\u5426\u7B26\u5408\u626B\u63CF\u6761\u4EF6 */
	filterImage = (info, img) => {
		if (img.closest(IMG_BLACK_LIST_SELECTOR)) return false;
		const imgSelector = this.getImgSelector();
		if (imgSelector && isEleSelector(img, imgSelector)) return true;
		if (this.filterImg) return this.filterImg(info, img);
		if (info.display.height <= 100 || info.display.width <= 100) return false;
		return info.natural.height > 500 && info.natural.width > 500;
	};
};
//#endregion
//#region src/userscript/autoImageScanner/index.ts
const SELECTOR_FALLBACK_TIMEOUT = 3e3;
/** \u81EA\u52A8\u53D1\u73B0\u7F51\u9875\u4E0A\u7684\u6240\u6709\u6F2B\u753B\u56FE\u7247\u7684\u901A\u7528\u626B\u63CF\u5668 */
var AutoImageScanner = class {
	/** \u80FD\u83B7\u53D6\u5230\u6240\u6709\u56FE\u7247\u7684 selector */
	initSelector;
	/** \u662F\u5426\u8981\u6309\u56FE\u7247\u5728\u9875\u9762\u4E2D\u7684\u5782\u76F4\u4F4D\u7F6E\u6392\u5E8F\uFF0C\u5426\u5219\u5C06\u6309\u6587\u6863\u987A\u5E8F\u6392\u5E8F */
	enableSortImageByTop;
	/** \u662F\u5426\u53EA\u4FDD\u7559\u56FE\u7247\u69FD\u4F4D\u7EC4\u5185\u7684\u56FE\u7247 */
	filterByContainer;
	/** \u81EA\u5B9A\u4E49\u56FE\u7247\u8FC7\u6EE4\u89C4\u5219 */
	filterImg;
	/** \u662F\u5426\u89E6\u53D1\u61D2\u52A0\u8F7D\u7684\u6761\u4EF6 */
	shouldTriggerLazyLoad;
	/** \u56FE\u7247\u5217\u8868\u53D8\u5316\u65F6\u7684\u56DE\u8C03 */
	onImgListChange;
	/** \u7AE0\u8282\u5207\u6362\u6309\u94AE\u53D8\u5316\u65F6\u7684\u56DE\u8C03 */
	onChapterSwitchChange;
	/** \u9875\u9762\u4E0A\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u56FE\u7247\u65F6\u7684\u56DE\u8C03 */
	onEmpty;
	/** \u53D1\u73B0\u65B0\u7684\u6B63\u786E\u7684\u80FD\u83B7\u53D6\u5230\u6240\u6709\u56FE\u7247\u7684 selector \u65F6\u7684\u56DE\u8C03 */
	onSelectorSuggest;
	/** \u662F\u5426\u5DF2\u5F00\u59CB\u76D1\u542C */
	started = false;
	/** \u5F53\u524D\u751F\u6548\u7684\u56FE\u7247 selector */
	imgSelector;
	/** \u663E\u5F0F selector \u56DE\u9000\u5B9A\u65F6\u5668 */
	selectorFallbackTimer;
	/** \u4EE3\u9645\u6807\u8BB0\uFF0C\u7528\u4E8E\u5FFD\u7565 stop \u540E\u8FC7\u671F\u7684 handleChanged \u56DE\u8C03 */
	generation = 0;
	imageWatcher;
	imageListBuilder;
	lazyLoadController;
	/** \u6240\u6709\u300C\u76F8\u4F3C\u3001\u6210\u7EC4\u300D\u7684\u56FE\u7247\u69FD\u4F4D\u7EC4 */
	imageSlotGroups = [];
	/** \u5F53\u524D\u8BC6\u522B\u5230\u7684\u7AE0\u8282\u5207\u6362\u6309\u94AE */
	chapterSwitch = {};
	/**
	* @param options \u626B\u63CF\u5668\u914D\u7F6E
	*/
	constructor(options) {
		this.initSelector = options.selector;
		this.filterImg = options.filterImg;
		this.onImgListChange = options.onImgListChange;
		this.onEmpty = options.onEmpty;
		this.onChapterSwitchChange = options.onChapterSwitchChange;
		this.onSelectorSuggest = options.onSelectorSuggest;
		this.shouldTriggerLazyLoad = options.shouldTriggerLazyLoad;
		this.imgSelector = options.selector ?? "";
		this.enableSortImageByTop = options.sortImageByTop ?? false;
		this.filterByContainer = options.filterByContainer ?? true;
		this.imageWatcher = new QualifiedImageWatcher({
			getImgSelector: () => this.imgSelector,
			filterImg: this.filterImg,
			onChanged: (map) => this.handleChanged(map, this.generation)
		});
		this.imageListBuilder = new ImageListBuilder({
			enableSortImageByTop: this.enableSortImageByTop,
			filterByContainer: this.filterByContainer,
			onImgListChange: (imgList) => this.onImgListChange?.(imgList),
			onEmpty: () => this.onEmpty?.()
		});
		this.lazyLoadController = new LazyLoadController({
			getImgSelector: () => this.imgSelector,
			getImageSlotGroups: () => this.imageSlotGroups,
			getAllImg: () => this.imageWatcher.getAllImg(),
			runCondition: () => this.shouldTriggerLazyLoad?.() ?? true,
			onLazyLoadFailed: () => this.imageListBuilder.onLazyLoadFailed()
		});
	}
	/** \u6700\u7EC8\u9009\u4E2D\u7684\u56FE\u7247 url */
	get imgList() {
		return this.imageListBuilder.imgList;
	}
	/** \u6700\u7EC8\u9009\u4E2D\u7684\u56FE\u7247\u69FD\u4F4D */
	get slotElements() {
		return this.imageListBuilder.slotElements;
	}
	/** \u5F00\u59CB\u5BFB\u627E\u9875\u9762\u56FE\u7247 */
	start() {
		if (this.started) return;
		this.started = true;
		this.imageWatcher.start();
		if (this.initSelector && this.imgSelector === this.initSelector) this.selectorFallbackTimer = window.setTimeout(() => {
			if (helper.querySelectorAll(this.imgSelector).length > 0) return;
			this.imgSelector = "";
			this.lazyLoadController.trigger();
		}, SELECTOR_FALLBACK_TIMEOUT);
	}
	/** \u505C\u6B62\u76D1\u542C\u5E76\u6E05\u7406\u8D44\u6E90 */
	stop() {
		this.started = false;
		this.generation++;
		this.handleChanged.clear();
		this.imageWatcher.stop();
		this.imageListBuilder.clear();
		if (this.selectorFallbackTimer !== void 0) window.clearTimeout(this.selectorFallbackTimer);
		this.selectorFallbackTimer = void 0;
		this.lazyLoadController.clear();
		this.imageSlotGroups = [];
		this.chapterSwitch = {};
	}
	/** \u7B49\u5230\u53D1\u73B0\u9996\u5F20\u56FE\u7247 */
	async waitFirstImage(timeout = 1e4) {
		const list = await helper.wait(() => this.imgList.some(Boolean) ? [...this.imgList] : void 0, timeout);
		if (!list?.length) throw new Error(helper.t("site.changed_load_failed"));
		return list;
	}
	/** \u624B\u52A8\u89E6\u53D1\u4E00\u8F6E\u61D2\u52A0\u8F7D */
	triggerLazyLoad() {
		this.start();
		return this.lazyLoadController.trigger();
	}
	/** \u8BB0\u5F55\u4F20\u5165\u7684\u56FE\u7247\u5143\u7D20\u4E2D\u6700\u5E38\u89C1\u7684\u90A3\u4E2A selector\uFF08\u4EC5 initSelector \u5931\u6548\u65F6\uFF09 */
	saveImgEleSelector = (list) => {
		if (list.length < 7 || this.initSelector && this.imgSelector === this.initSelector) return;
		const newSelector = helper.getMostItem(list.map(getEleSelector));
		if (newSelector !== this.imgSelector) {
			this.imgSelector = newSelector;
			this.onSelectorSuggest?.(newSelector);
		}
	};
	/** \u56FE\u7247\u96C6\u5408\u53D8\u5316\u65F6\u66F4\u65B0\u56FE\u7247\u5217\u8868\u3001\u7AE0\u8282\u6309\u94AE\u5E76\u89E6\u53D1\u61D2\u52A0\u8F7D */
	handleChanged = helper.throttle(async (map, generation) => {
		if (generation !== this.generation) return;
		if (map.size === 0) {
			this.imageSlotGroups = [];
			this.imageListBuilder.clearListState();
			return this.onEmpty?.();
		}
		const { groups, bestGroup } = getImageSlotGroupResult(map);
		this.imageSlotGroups = groups;
		const imgEleList = [...map.keys()];
		const { isEdited, isEmpty } = await this.imageListBuilder.update(map, bestGroup, generation);
		if (generation !== this.generation) return;
		if (isEmpty) return;
		if (isEdited) this.saveImgEleSelector(imgEleList);
		this.lazyLoadController.trigger();
		this.chapterSwitch = getChapterSwitch();
		await this.onChapterSwitchChange?.({ ...this.chapterSwitch });
		if (generation !== this.generation) return;
		this.imageListBuilder.notifyFinalImgListChange(isEdited);
	}, 500);
};
//#endregion
exports.AutoImageScanner = AutoImageScanner;
`,"userscript/supportWorker":`
//#region src/userscript/supportWorker.ts
let supportWorker;
console.debug(supportWorker);
new Promise((resolve) => {
	if (typeof Worker === "undefined") return resolve(false);
	let worker;
	let url;
	const finish = (value) => {
		worker?.terminate();
		if (url) URL.revokeObjectURL(url);
		resolve(value);
	};
	try {
		url = URL.createObjectURL(new Blob(["onmessage=e=>postMessage(e.data)"], { type: "text/javascript" }));
		worker = new Worker(url);
		worker.onmessage = () => finish(true);
		worker.onerror = () => finish(false);
		worker.postMessage("ping");
		setTimeout(() => finish(false), 3e3);
	} catch {
		finish(false);
	}
}).then((val) => supportWorker = val);
//#endregion
Object.defineProperty(exports, "supportWorker", {
	enumerable: true,
	get: function() {
		return supportWorker;
	}
});
`,"userscript/multiSelect":`
let solid_js_web = require("solid-js/web");
let helper = require("helper");
let solid_js = require("solid-js");
let core = require("core");
//#region src/userscript/multiSelect/SelectionMask.tsx
var _tmpl$$1 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"width=1.5em height=1.5em fill=none opacity=0.4 style=display:inline;vertical-align:-0.15em><rect x=2 y=2 width=20 height=20 rx=5 stroke=currentColor stroke-width=1.3 stroke-dasharray="3 2">\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<div class=selection-mask><span class=selection-mask-order>\`);
const DashedRoundedSquare = () => _tmpl$$1();
const SelectionMask = (props) => {
	const id = () => props.registeredItems().get(props.dom);
	const isSelected = () => props.selection.isSelected(id());
	helper.css\`
    \${props.dom}
    .selection-mask {
      touch-action: none;
      cursor: pointer;
      cursor: cell;
      user-select: none;

      position: absolute;
      z-index: 2147483646;
      top: 0;
      left: 0;

      container-type: size;
      overflow: clip;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      font-size: 4cqmin;

      background: rgb(0 0 0 / 60%);
    }

    .selection-mask-order {
      font-family: sans-serif;
      font-size: 2em;
      font-weight: bold;
      text-shadow: none;

      -webkit-text-stroke: 0;
    }
  \`;
	helper.css(".selection-mask", { color: () => isSelected() ? "#ffffffbf" : "#fffb" }, props.dom);
	return solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return props.isEnabled();
		},
		get children() {
			var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild;
			solid_js_web.addEventListener(_el$2, "click", helper.withEventStop(), true);
			solid_js_web.addEventListener(_el$2, "contextmenu", helper.withEventStop(), true);
			solid_js_web.addEventListener(_el$2, "mouseover", helper.withEventStop(), true);
			solid_js_web.addEventListener(_el$2, "pointerover", helper.withEventStop(), true);
			solid_js_web.addEventListener(_el$2, "pointerenter", helper.withEventStop((e) => props.drag.onPointerEnter(props.dom, e)));
			solid_js_web.addEventListener(_el$2, "pointerdown", helper.withEventStop((e) => props.drag.onPointerDown(props.dom, e)), true);
			solid_js_web.insert(_el$3, () => props.selection.getOrder(id()) ?? solid_js_web.createComponent(DashedRoundedSquare, {}));
			return _el$2;
		}
	});
};
solid_js_web.delegateEvents([
	"pointerdown",
	"pointerover",
	"mouseover",
	"contextmenu",
	"click"
]);
//#endregion
//#region src/userscript/multiSelect/useDragSelect.ts
const useDragSelect = ({ isEnabled, registeredItems, isSelected, setSession, session, commit, cancel }) => {
	/** \u5F53\u524D\u6D3B\u8DC3\u624B\u52BF\u7684 pointerId\uFF0Cnull \u8868\u793A\u65E0\u6D3B\u8DC3\u624B\u52BF */
	let pointerId = null;
	/** \u951A\u70B9\u5728 items \u4E2D\u7684\u7D22\u5F15\uFF0C\u56FA\u5B9A\u4E0D\u53D8 */
	let anchorIndex = -1;
	/** \u5F53\u524D\u624B\u52BF\u662F\u5426\u6269\u5C55\u8FC7\u8303\u56F4\uFF08\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5E94\u64A4\u9500\u9009\u62E9\uFF09 */
	let hasExpanded = false;
	return {
		onPointerDown: (dom, e) => {
			if (!isEnabled() || !e.isPrimary) return;
			if (e.pointerType === "mouse" && e.button !== 0) return;
			const entries = [...registeredItems().entries()];
			anchorIndex = entries.findIndex(([d]) => d === dom);
			if (anchorIndex === -1) return;
			({pointerId} = e);
			hasExpanded = false;
			setSession((state) => {
				state.operationType = isSelected(registeredItems().get(dom)) ? "unselect" : "select";
				state.items = entries.map(([, id]) => id);
				state.range = [anchorIndex, anchorIndex];
			});
		},
		onPointerEnter: (dom, e) => {
			if (!isEnabled() || pointerId === null || e.pointerId !== pointerId) return;
			if (e.pointerType === "mouse" && (e.buttons & 1) === 0) {
				pointerId = null;
				return cancel();
			}
			const currentIndex = [...registeredItems().keys()].indexOf(dom);
			if (currentIndex === -1) return;
			const newRange = anchorIndex <= currentIndex ? [anchorIndex, currentIndex] : [currentIndex, anchorIndex];
			setSession((state) => {
				if (state.range[0] === newRange[0] && state.range[1] === newRange[1]) return;
				state.range = newRange;
				if (newRange[0] !== newRange[1]) hasExpanded = true;
			});
		},
		onPointerUp: (e) => {
			if (e.pointerId !== pointerId) return;
			pointerId = null;
			if (session.range[0] === session.range[1] && hasExpanded) cancel();
			else commit();
		},
		onPointerCancel: (e) => {
			if (e.pointerId !== pointerId) return;
			pointerId = null;
			cancel();
		},
		/** \u53D6\u6D88\u6D3B\u8DC3\u624B\u52BF\u5E76\u91CD\u7F6E\u72B6\u6001 */
		clear: () => {
			if (pointerId !== null) cancel();
			pointerId = null;
		}
	};
};
//#endregion
//#region src/userscript/multiSelect/useSelection.ts
/** \u521B\u5EFA\u9009\u4E2D\u72B6\u6001\u7BA1\u7406\u5668 */
const createSelectionController = () => {
	/** \u5DF2\u786E\u8BA4\u7684\u9009\u4E2D\u9879 */
	const baselineIds = new helper.ReactiveSet();
	const { store: session, setState: setSession } = helper.useStore({
		items: [],
		range: [-1, -1],
		operationType: "select"
	});
	/** \u5224\u65AD session \u662F\u5426\u5904\u4E8E\u6D3B\u8DC3\u72B6\u6001 */
	const isSessionActive = () => session.range[0] >= 0 && session.range[1] >= 0;
	/** \u5F53\u524D range \u533A\u95F4\u5185\u7684 id \u96C6\u5408 */
	const rangeIds = helper.createRootMemo(() => {
		if (!isSessionActive()) return /* @__PURE__ */ new Set();
		return new Set(session.items.slice(session.range[0], session.range[1] + 1));
	});
	const selectedIds = helper.createRootMemo(() => {
		if (!isSessionActive()) return [...baselineIds];
		return session.operationType === "select" ? [...baselineIds.union(rangeIds())] : [...baselineIds.difference(rangeIds())];
	});
	/** \u8BB0\u5F55\u6BCF\u4E2A id \u7684\u9009\u4E2D\u987A\u5E8F */
	const orderMap = helper.createRootMemo(() => Object.fromEntries(selectedIds().map((id, i) => [id, i + 1])));
	const cancel = () => setSession((state) => {
		state.items = [];
		state.range = [-1, -1];
		state.operationType = "select";
	});
	return {
		/** \u5F53\u524D\u4F1A\u8BDD\u72B6\u6001\uFF08\u53EA\u8BFB\uFF09 */
		session,
		/** \u5F53\u524D\u9009\u4E2D\u9879 id \u5217\u8868 */
		selectedIds,
		/** \u8BB0\u5F55\u6BCF\u4E2A id \u7684\u9009\u4E2D\u987A\u5E8F */
		orderMap,
		/** \u5224\u65AD\u6307\u5B9A id \u662F\u5426\u88AB\u9009\u4E2D */
		isSelected: (id) => id in orderMap(),
		/** \u83B7\u53D6\u6307\u5B9A id \u7684\u9009\u4E2D\u987A\u5E8F\uFF0C\u672A\u9009\u4E2D\u8FD4\u56DE undefined */
		getOrder: (id) => orderMap()[id],
		/** \u4FEE\u6539\u4F1A\u8BDD\u72B6\u6001 */
		setSession,
		/** \u5C06 session \u7684\u4FEE\u6539\u5E94\u7528\u5230\u57FA\u7EBF\uFF0C\u7136\u540E\u91CD\u7F6E session */
		commit: () => {
			if (!isSessionActive()) return;
			if (session.operationType === "select") for (const id of rangeIds()) baselineIds.add(id);
			else for (const id of rangeIds()) baselineIds.delete(id);
			cancel();
		},
		/** \u91CD\u7F6E session \u4E3A\u521D\u59CB\u72B6\u6001 */
		cancel,
		/** \u76F4\u63A5\u8BBE\u7F6E\u57FA\u7EBF\u9009\u4E2D\u9879\u5217\u8868 */
		setBaseline: (ids) => {
			baselineIds.clear();
			for (const id of ids) baselineIds.add(id);
		},
		/** \u6E05\u7A7A\u57FA\u7EBF\u9009\u4E2D\u9879\u5217\u8868 */
		clearBaseline: () => baselineIds.clear()
	};
};
//#endregion
//#region src/userscript/multiSelect/useMultiSelect.tsx
const useMultiSelect = ({ onStart, registeredItems }) => solid_js.createRoot((dispose) => {
	const [isEnabled, setIsEnabled] = solid_js.createSignal(false);
	const selectionController = createSelectionController();
	const drag = useDragSelect({
		isEnabled,
		registeredItems,
		...selectionController
	});
	/** \u6240\u6709\u9700\u8981\u5728 unmount \u65F6\u6267\u884C\u7684\u6E05\u7406\u51FD\u6570\uFF08DOM dispose\u3001\u4E8B\u4EF6\u76D1\u542C\u7B49\uFF09 */
	const cleanups = [];
	let isInitialized = false;
	let elementIndex = 0;
	/** \u6CE8\u518C\u4E00\u4E2A\u53EF\u9009\u5143\u7D20\uFF1A\u6302\u8F7D SelectionMask */
	const register = (dom) => {
		if (!registeredItems().get(dom)) return;
		const index = elementIndex++;
		const container = document.createElement("div");
		dom.append(container);
		const disposeDom = solid_js_web.render(() => solid_js_web.createComponent(SelectionMask, {
			dom,
			index,
			isEnabled,
			registeredItems,
			selection: selectionController,
			drag
		}), container);
		cleanups.push(() => {
			disposeDom();
			container.remove();
		});
	};
	/** \u5378\u8F7D\u6240\u6709 DOM \u6CE8\u518C\u548C\u4E8B\u4EF6\u76D1\u542C\uFF0C\u4F46\u4FDD\u7559\u9009\u4E2D\u72B6\u6001\uFF08\u7FFB\u9875\u573A\u666F\uFF09 */
	const unmount = () => {
		drag.clear();
		setIsEnabled(false);
		isInitialized = false;
		for (let i = cleanups.length - 1; i >= 0; i--) cleanups[i]?.();
		cleanups.length = 0;
	};
	return {
		/** \u5F53\u524D\u662F\u5426\u5904\u4E8E\u591A\u9009\u6A21\u5F0F */
		isEnabled,
		/** \u5F00\u542F\u591A\u9009\u6A21\u5F0F\u5E76\u6CE8\u518C\u5143\u7D20 */
		start: () => {
			if (isEnabled()) return;
			setIsEnabled(true);
			if (isInitialized) return;
			document.addEventListener("pointerup", drag.onPointerUp);
			document.addEventListener("pointercancel", drag.onPointerCancel);
			cleanups.push(() => {
				document.removeEventListener("pointerup", drag.onPointerUp);
				document.removeEventListener("pointercancel", drag.onPointerCancel);
			});
			const cleanup = onStart?.();
			if (cleanup) cleanups.push(cleanup);
			for (const dom of registeredItems().keys()) register(dom);
			isInitialized = true;
		},
		/** \u7ED3\u675F\u591A\u9009\u6A21\u5F0F\uFF0C\u5E76\u53D1\u5904\u7406\u6240\u6709\u9009\u4E2D\u9879\u5E76\u8FD4\u56DE\u7ED3\u679C\u5217\u8868 */
		collect: async (process, limit) => {
			const ids = selectionController.selectedIds();
			if (ids.length === 0) return [];
			setIsEnabled(false);
			return await helper.plimit(ids.map((id) => async () => {
				try {
					return await process(id);
				} catch (error) {
					return error instanceof Error ? error : new Error(String(error));
				}
			}), void 0, limit);
		},
		/** \u6E05\u7A7A\u9009\u4E2D\u72B6\u6001\u5E76\u5378\u8F7D\u6240\u6709 DOM \u6CE8\u518C */
		clear: () => {
			selectionController.clearBaseline();
			selectionController.cancel();
			unmount();
		},
		unmount,
		/** \u6E05\u7406\u6240\u6709 SolidJS \u54CD\u5E94\u5F0F\u8D44\u6E90 */
		dispose,
		/** \u5F53\u524D\u9009\u4E2D\u9879 ID \u5217\u8868 */
		selectedIds: selectionController.selectedIds,
		/** \u6839\u636E ID \u5217\u8868\u6062\u590D\u9009\u4E2D\u72B6\u6001\uFF08\u7FFB\u9875\u540E\u91CD\u65B0\u6CE8\u518C DOM \u65F6\u4F7F\u7528\uFF09 */
		setSelectedIds: selectionController.setBaseline
	};
});
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/checklist.svg
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M22 8c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m-9 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1M10.47 4.63c.39.39.39 1.02 0 1.41l-4.23 4.25c-.39.39-1.02.39-1.42 0L2.7 8.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.4 0m.01 8.01c.39.39.39 1.02 0 1.41L6.25 18.3c-.39.39-1.02.39-1.42 0L2.7 16.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.41.01">\`);
var checklist_default = (props = {}) => (() => {
	var _el$ = _tmpl$();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/userscript/multiSelect/useMultiSelectLoad.tsx
const createMultiSelectLoadController = (coreCtx, { id: initListId, onStart, allItemIds, getImgList }) => solid_js.createRoot(async (rootDispose) => {
	const { setState, showComic } = coreCtx;
	const cache = await helper.useCache({
		pending: "id",
		confirmed: "id"
	}, "MultiSelect");
	const [listId, setListId] = solid_js.createSignal(initListId);
	const [registeredItems, setRegisteredItems] = solid_js.createSignal(/* @__PURE__ */ new Map());
	const controller = useMultiSelect({
		onStart,
		registeredItems
	});
	helper.createEffectOn([listId], ([currentId], prev) => {
		const prevId = prev?.[0];
		if (prevId !== void 0 && prevId !== currentId) controller.clear();
	});
	const urlMap = {};
	const targetIds = helper.createRootMemo(() => {
		const ids = controller.selectedIds();
		if (controller.isEnabled() && ids.length > 0) return ids;
		return allItemIds?.() ?? [];
	});
	const computeImgList = () => targetIds().flatMap((id) => urlMap[id] ?? [""]);
	/** \u5C06 Manga \u7EC4\u4EF6\u7684\u6241\u5E73\u56FE\u7247\u7D22\u5F15\u8F6C\u4E3A\u5BF9\u5E94\u7684\u9009\u4E2D\u9879 ID */
	const getItemIdsFromIndices = (indices) => {
		const ids = [];
		let offset = 0;
		for (const id of targetIds()) {
			const len = urlMap[id]?.length ?? 1;
			for (const idx of indices) if (helper.inRange(offset, idx, offset + len - 1)) {
				ids.push(id);
				break;
			}
			offset += len;
		}
		return ids;
	};
	const reSetStore = () => {
		setState("comicMap", "", { getImgList: Object.assign(async () => {
			if (coreCtx.store.comicMap[""].imgList?.length) return coreCtx.store.comicMap[""].imgList;
			await new Promise((resolve) => {
				const queue = new helper.PQueue(async (id) => {
					try {
						urlMap[id] = await getImgList(id);
					} catch (error) {
						console.error(error);
					}
					setState("comicMap", "", "imgList", computeImgList());
					resolve();
				}, 4);
				setState((state) => {
					state.comicMap[""].imgList = computeImgList();
					state.manga.onWaitUrlImgs = (imgs) => {
						queue.set(...getItemIdsFromIndices(imgs));
					};
				});
				if (targetIds().some((id) => urlMap[id])) resolve();
			});
			return coreCtx.store.comicMap[""].imgList;
		}, allItemIds ? {} : { type: "multiSelect" }) });
	};
	reSetStore();
	const multiSelectLoad = helper.singleThreaded(async () => {
		if (!controller.isEnabled()) {
			controller.start();
			const confirmed = await cache.get("confirmed", listId());
			if (confirmed) controller.setSelectedIds(confirmed.selecteds);
			return;
		}
		await cache.del("pending", listId());
		await cache.set("confirmed", {
			id: listId(),
			selecteds: controller.selectedIds()
		});
		if (controller.selectedIds().length === 0) return;
		setState("comicMap", "", "imgList", void 0);
		await showComic("");
	});
	let unregisterEscHandler;
	helper.createEffectOn([controller.isEnabled], ([enabled]) => {
		if (enabled) {
			unregisterEscHandler?.();
			unregisterEscHandler = core.registerEsc(-1, () => controller.isEnabled() && !coreCtx.store.manga.show ? unmount() : "SKIP");
		}
	});
	setState("fab", "extraSpeedDial", [{
		name: helper.t("hotkeys.multi_select_load"),
		onClick: multiSelectLoad,
		icon: checklist_default
	}]);
	helper.createEffectOn([
		controller.isEnabled,
		() => controller.selectedIds().length,
		listId
	], ([enabled, , id]) => {
		const selecteds = controller.selectedIds();
		(async () => {
			await cache.del("pending", id);
			await (selecteds.length === 0 ? cache.del("confirmed", id) : cache.set(enabled ? "pending" : "confirmed", {
				id,
				selecteds
			}));
		})();
	}, { defer: true });
	core.listenHotkey({
		multi_select_load: multiSelectLoad,
		enter_read_mode: () => controller.isEnabled() || !coreCtx.canLoadComic() ? multiSelectLoad() : coreCtx.showComic()
	}, true);
	let oldIdSet = [];
	/** \u6E05\u7406\u526F\u4F5C\u7528\uFF0C\u4F46\u4FDD\u7559\u9009\u4E2D\u72B6\u6001\uFF08\u7528\u4E8E\u7FFB\u9875\uFF09 */
	const unmount = () => {
		setState("comicMap", "", "imgList", void 0);
		unregisterEscHandler?.();
		oldIdSet = [...registeredItems().values()];
		controller.unmount();
	};
	const completeDispose = () => {
		oldIdSet = [];
		unmount();
		controller.dispose();
		setRegisteredItems(/* @__PURE__ */ new Map());
		coreCtx.setMultiSelect(void 0);
		rootDispose();
	};
	return {
		reSetStore,
		/** \u6CE8\u518C\u65B0\u7684\u53EF\u9009\u9879\uFF0C\u5E76\u7B49\u5F85\u81F3\u548C\u4E0A\u6B21\u7684\u6CE8\u518C\u9879\u4E0D\u540C */
		registerItems: async (newId, fillItems, maxWaitTime = 5e3) => {
			setListId(newId);
			const map = await helper.wait(async () => {
				const newMap = /* @__PURE__ */ new Map();
				await fillItems(newMap);
				if (newMap.size === 0) return;
				if (helper.isEqual(oldIdSet, [...newMap.values()])) return;
				return newMap;
			}, maxWaitTime);
			if (!map) throw new Error("\u7B49\u5F85\u65B0 DOM \u8D85\u65F6");
			setRegisteredItems(map);
			const pending = await cache.get("pending", listId());
			if (pending?.selecteds.length) {
				controller.start();
				controller.setSelectedIds(pending.selecteds);
			}
		},
		unmount,
		/** \u5B8C\u5168\u6E05\u7406\u6240\u6709\u72B6\u6001\u548C\u526F\u4F5C\u7528 */
		dispose: completeDispose,
		/** \u9875\u9762\u5207\u6362\u65F6\u7684\u6E05\u7406\u7B56\u7565 */
		createCleanup: (id) => (nextPageCtx) => {
			unmount();
			if (nextPageCtx?.type !== "list" || nextPageCtx?.id !== id) {
				completeDispose();
				multiSelectLoadController = void 0;
			}
		},
		load: multiSelectLoad,
		isEnabled: controller.isEnabled,
		selectedIds: controller.selectedIds,
		clear: controller.clear,
		setSelectedIds: controller.setSelectedIds
	};
});
let multiSelectLoadController;
const useMultiSelectLoad = async (coreCtx, options) => {
	if (multiSelectLoadController) {
		multiSelectLoadController.reSetStore();
		return multiSelectLoadController;
	}
	multiSelectLoadController = await createMultiSelectLoadController(coreCtx, options);
	coreCtx.setMultiSelect(multiSelectLoadController);
	return multiSelectLoadController;
};
//#endregion
exports.SelectionMask = SelectionMask;
exports.createMultiSelectLoadController = createMultiSelectLoadController;
exports.useMultiSelect = useMultiSelect;
exports.useMultiSelectLoad = useMultiSelectLoad;
`,"worker/detectAd":`
//#region \\0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let jsqr = require("jsqr");
jsqr = __toESM(jsqr, 1);
//#region src/worker/detectAd/workHelper.ts
const mainFn = {};
const setMainFn = (helper, keys) => {
	for (const name of keys) Reflect.set(mainFn, name, (...args) => Reflect.apply(helper[name], helper, args));
};
/** \u8BA1\u7B97 rgb \u7684\u7070\u5EA6 */
const toGray = (r, g, b) => Math.round(.299 * r + .587 * g + .114 * b);
//#endregion
//#region src/worker/detectAd/index.ts
/** \u5224\u65AD\u4E00\u5F20\u56FE\u662F\u5426\u662F\u5F69\u56FE */
const isColorImg = (data) => {
	for (let i = 0; i < data.length; i += 16) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		if (!(r === g && r === b)) return true;
	}
	return false;
};
/** \u4E8C\u7EF4\u7801\u767D\u540D\u5355 */
const qrCodeWhiteList = [
	/^https:\\/\\/[^.]+\\.fanbox\\.cc/u,
	/^https:\\/\\/twitter\\.com/u,
	/^https:\\/\\/x\\.com/u,
	/^https:\\/\\/fantia\\.jp/u,
	/^https:\\/\\/marshmallow-qa\\.com/u,
	/^https:\\/\\/www\\.dlsite\\.com/u,
	/^https:\\/\\/hitomi\\.la/u
];
const options = { inversionAttempts: "attemptBoth" };
/** \u8BC6\u522B\u56FE\u50CF\u4E0A\u7684\u4E8C\u7EF4\u7801 */
const getQrCode = (img, width, height) => {
	try {
		const binaryData = jsqr.default(img, width, height, options)?.binaryData;
		if (!binaryData) return false;
		const text = new TextDecoder().decode(Uint8Array.from(binaryData));
		mainFn.log(\`\u68C0\u6D4B\u5230\u4E8C\u7EF4\u7801\uFF1A \${text}\`);
		return text;
	} catch (error) {
		mainFn.log(error);
	}
};
const getImgData = (img) => {
	const canvas = new OffscreenCanvas(img.width, img.height);
	const ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	return ctx.getImageData(0, 0, canvas.width, canvas.height);
};
const scanImgBlock = (img, sx, sy, w, h) => {
	if (w === img.width && h === img.height) return getQrCode(img.data, w, h);
	const data = new Uint8ClampedArray(/* @__PURE__ */ new ArrayBuffer(w * h * 4));
	for (let y = 0, height = sy + h; y < height; y++) for (let x = 0, width = sx + w; x < width; x++) {
		const i = (y * w + x) * 4;
		const target = ((y + sy) * img.width + (x + sx)) * 4;
		data[i] = img.data[target];
		data[i + 1] = img.data[target + 1];
		data[i + 2] = img.data[target + 2];
		data[i + 3] = img.data[target + 3];
	}
	return getQrCode(data, w, h);
};
const isAdImg = (imgBitmap) => {
	const imgData = getImgData(imgBitmap);
	if (!isColorImg(imgData.data)) return false;
	for (let i = 0; i < imgData.data.length; i += 4) {
		const val = toGray(imgData.data[i], imgData.data[i + 1], imgData.data[i + 2]) < 200 ? 0 : 255;
		imgData.data[i] = val;
		imgData.data[i + 1] = val;
		imgData.data[i + 2] = val;
		imgData.data[i + 3] = 255;
	}
	let text = getQrCode(imgData.data, imgData.width, imgData.height);
	if (!text) {
		const w = Math.floor(imgData.width / 2);
		const h = Math.floor(imgData.height / 2);
		for (const [sx, sy] of [
			[w, h],
			[0, h],
			[w, 0],
			[0, 0]
		]) {
			text = scanImgBlock(imgData, sx, sy, w, h);
			if (text) break;
		}
	}
	if (text) return qrCodeWhiteList.every((reg) => !reg.test(text));
	return false;
};
//#endregion
exports.isAdImg = isAdImg;
exports.setMainFn = setMainFn;
`,"worker/ImageRecognition":`
/**
* \u7528\u9014\uFF1A\u9762\u79EF\u5C0F\u4E8E\u8BE5\u6BD4\u4F8B\u7684 Region \u4F1A\u88AB\u5220\u9664\u3002
* \u53D6\u503C\u8303\u56F4\uFF1A0 ~ 1
*/
const MIN_REGION_RATIO = .01;
/**
* \u7528\u9014\uFF1A\u8FB9\u7F18\u8D77\u70B9\u533A\u57DF\u5360\u56FE\u7247\u957F/\u5BBD\u7684\u6BD4\u4F8B\u3002
* \u53D6\u503C\u8303\u56F4\uFF1A0 ~ 0.5
*/
const EDGE_SEED_RATIO = .05;
/**
* \u7528\u9014\uFF1A\u80CC\u666F\u8272\u5224\u65AD\u65F6\uFF0C\u8FB9\u7F18\u533A\u57DF\u5BBD\u5EA6\u5360\u56FE\u7247\u8F83\u77ED\u8FB9\u7684\u6BD4\u4F8B\u3002
* \u53D6\u503C\u8303\u56F4\uFF1A0 ~ 0.5
*/
const EDGE_AREA_RATIO = .07;
/**
* \u7528\u9014\uFF1A\u7A7A\u767D\u8FB9\u7F18\u626B\u63CF\u65F6\uFF0C\u4E0E\u53C2\u8003\u80CC\u666F\u8272\u4E4B\u95F4\u5141\u8BB8\u7684\u6700\u5927 Oklab \u8272\u5DEE\u3002
* \u5355\u4F4D\uFF1AOklab \u7A7A\u95F4\u4E2D\u7684\u6B27\u6C0F\u8DDD\u79BB\uFF08\u0394E\uFF09\uFF0C\u4E0D\u662F\u767E\u5206\u6BD4\u3002
* \u53D6\u503C\u8303\u56F4\uFF1A0 ~ 1.51
*/
const BLANK_MARGIN_COLOR_TOLERANCE = .2;
/**
* \u7528\u9014\uFF1A\u6574\u8FB9\u7D2F\u8BA1\u5141\u8BB8\u7684\u8D85\u8272\u5DEE\u50CF\u7D20\u6570\uFF0C\u5360\u8BE5\u8FB9\u957F\u5EA6\uFF08\u5DE6\u53F3\u8FB9=\u56FE\u7247\u9AD8\u5EA6\uFF0C\u4E0A\u4E0B\u8FB9=\u56FE\u7247\u5BBD\u5EA6\uFF09\u7684\u6BD4\u4F8B\u3002
* \u5355\u4F4D\uFF1A\u6BD4\u4F8B\u503C\uFF0C0.01 \u8868\u793A 1%\u3002
* \u53D6\u503C\u8303\u56F4\uFF1A0 ~ 1
*/
const BLANK_MARGIN_MAX_OUTLIER_RATIO = .005;
/**
* \u7528\u9014\uFF1A\u6876\u5185\u5206\u7EC4\u5141\u8BB8\u7684\u6700\u5927\u7EFC\u5408\u8DDD\u79BB\uFF0C\u4E5F\u7528\u4E8E\u76F8\u90BB\u8272\u76F8\u6876\u8FB9\u754C\u7EC4\u7684\u5408\u5E76\u5224\u65AD\u3002
* \u53D6\u503C\u8303\u56F4\uFF1A0 ~ 1
*/
const HSV_GROUP_THRESHOLD = .12;
/**
* \u7528\u9014\uFF1AHSV \u7EFC\u5408\u8DDD\u79BB\u4E2D\u9971\u548C\u5EA6\u5DEE \u0394S \u7684\u6743\u91CD\u3002
* \u53D6\u503C\u8303\u56F4\uFF1A>= 0
*/
const SATURATION_WEIGHT = .6;
//#endregion
//#region src/worker/ImageRecognition/workHelper.ts
const mainFn = {};
const setMainFn = (helper, keys) => {
	for (const name of keys) {
		const fn = helper[name];
		if (!fn) continue;
		Reflect.set(mainFn, name, (...args) => Reflect.apply(fn, helper, args));
	}
};
//#endregion
//#region src/worker/ImageRecognition/background.ts
const isInEdgeArea = (index, { width, height, edgeX, edgeY }) => {
	const x = index % width;
	const y = Math.floor(index / width);
	return x < edgeX || x >= width - edgeX || y < edgeY || y >= height - edgeY;
};
/**
* \u5224\u65AD\u56FE\u50CF\u7684\u80CC\u666F\u8272\u3002
*
* \u5728\u56FE\u7247\u8FB9\u7F18\u533A\u57DF\u5185\u627E\u5230\u5360\u6BD4\u6700\u5927\u7684\u80CC\u666F\u533A\u57DF\uFF0C
* \u5982\u679C\u8BE5\u533A\u57DF\u5728\u8FB9\u7F18\u533A\u57DF\u4E2D\u7684\u5360\u6BD4\u8FBE\u5230 EDGE_AREA_REGION_RATIO\uFF0C
* \u5219\u5C06\u8BE5\u533A\u57DF\u7684\u4E3B\u8272\u89C6\u4E3A\u80CC\u666F\u8272\uFF0C\u5426\u5219\u5224\u5B9A\u53D6\u8272\u5931\u8D25\u3002
*/
const getBackgroundColor = (img) => {
	const manager = img.backgroundRegions;
	if (manager.getRegionCount() === 0) return null;
	const { width, height } = img;
	const edge = Math.max(1, Math.floor(Math.min(width, height) * EDGE_AREA_RATIO));
	const edgeArea = {
		width,
		height,
		edgeX: edge,
		edgeY: edge
	};
	const centerWidth = Math.max(0, width - edge * 2);
	const centerHeight = Math.max(0, height - edge * 2);
	const totalEdgeAreaPixels = width * height - centerWidth * centerHeight;
	let maxRegionId;
	let maxCount = 0;
	for (const id of manager.getRegionIds()) {
		let count = 0;
		manager.forEachPixelOfRegion(id, (index) => {
			if (isInEdgeArea(index, edgeArea)) count += 1;
		});
		if (count > maxCount) {
			maxCount = count;
			maxRegionId = id;
		}
	}
	img.logger.mark("\u80CC\u666F\u8272\u533A\u57DF\u7EDF\u8BA1\u5B8C\u6210");
	if (maxRegionId === void 0 || maxCount / totalEdgeAreaPixels < .15) return null;
	const color = manager.getRegion(maxRegionId)?.getMainColor() ?? null;
	img.logger.mark("\u80CC\u666F\u4E3B\u8272\u63D0\u53D6\u5B8C\u6210", color ?? "\u672A\u68C0\u6D4B\u5230");
	return color;
};
/** \u83B7\u53D6\u56FE\u7247\u80CC\u666F\u8272\u5E76\u5199\u5165 ImgContext */
const getBackground = (img) => img.background ??= getBackgroundColor(img);
//#endregion
//#region src/worker/ImageRecognition/colorUtils/ColorHistogram.ts
/** \u7EDF\u8BA1\u6574\u6570 key \u7684\u76F4\u65B9\u56FE\uFF0C\u6C42\u51FA\u4F17\u6570 key */
var ColorHistogram = class {
	counts = /* @__PURE__ */ new Map();
	modeKey = 0;
	modeCount = 0;
	add(key) {
		const count = (this.counts.get(key) ?? 0) + 1;
		this.counts.set(key, count);
		if (count > this.modeCount) {
			this.modeCount = count;
			this.modeKey = key;
		}
	}
	merge(other) {
		for (const [key, count] of other.counts) {
			const mergedCount = (this.counts.get(key) ?? 0) + count;
			this.counts.set(key, mergedCount);
			if (mergedCount > this.modeCount) {
				this.modeCount = mergedCount;
				this.modeKey = key;
			}
		}
	}
	getModeKey() {
		if (this.modeCount !== 0) return this.modeKey;
	}
};
//#endregion
//#region src/worker/ImageRecognition/colorUtils/hsv.ts
/** \u5C06 0~255 \u6216 0~1 \u7684 RGB \u5206\u91CF\u7EDF\u4E00\u5230 0~1\u3002 */
const normalizeChannel = (value) => {
	const clamped = Math.max(0, Math.min(255, value));
	return clamped > 1 ? clamped / 255 : clamped;
};
const rgbToHsv = (color) => {
	const r = normalizeChannel(color.r);
	const g = normalizeChannel(color.g);
	const b = normalizeChannel(color.b);
	const max = Math.max(r, g, b);
	const delta = max - Math.min(r, g, b);
	let h = 0;
	let s = 0;
	const v = max;
	if (max !== 0) s = delta / max;
	if (delta !== 0) {
		if (max === r) h = 60 * ((g - b) / delta % 6);
		else if (max === g) h = 60 * ((b - r) / delta + 2);
		else h = 60 * ((r - g) / delta + 4);
		if (h < 0) h += 360;
		if (h >= 360) h -= 360;
	}
	return {
		h,
		s,
		v
	};
};
/** HSV \u8272\u5DEE\u8DDD\u79BB */
const hsvDistanceSquared = (a, b, saturationWeight = SATURATION_WEIGHT) => {
	const dv = a.v - b.v;
	const ds = a.s - b.s;
	return dv * dv + saturationWeight * saturationWeight * ds * ds;
};
//#endregion
//#region src/worker/ImageRecognition/colorUtils/grouping.ts
const H_BUCKET_WIDTH = 15;
const HSV_GROUP_THRESHOLD_SQUARED = HSV_GROUP_THRESHOLD ** 2;
/** \u8BA1\u7B97\u4E00\u7EC4\u5206\u7EC4\u6570\u7EC4\u7684\u5E73\u5747 HSV */
const averageHsvOfGroups = (groupArrays, hsvColors) => {
	const sum = {
		h: 0,
		s: 0,
		v: 0
	};
	let count = 0;
	for (const group of groupArrays) for (const index of group) {
		sum.h += hsvColors[index].h;
		sum.s += hsvColors[index].s;
		sum.v += hsvColors[index].v;
		count += 1;
	}
	if (count === 0) return {
		h: 0,
		s: 0,
		v: 0
	};
	return {
		h: sum.h / count,
		s: sum.s / count,
		v: sum.v / count
	};
};
/**
* \u65E0\u5F69\u6876\uFF1A\u6309 V \u4ECE\u5C0F\u5230\u5927\u6392\u5E8F\uFF0C\u8D2A\u5FC3\u5206\u6BB5\u3002
* \u56E0\u4E3A\u53EA\u6BD4\u8F83\u4EAE\u5EA6\uFF0C\u6392\u5E8F\u540E\u533A\u95F4\u6700\u5927\u4EAE\u5EA6\u5DEE\u5C31\u662F\u9996\u5C3E\u4EAE\u5EA6\u5DEE\u3002
*/
const groupAchromatic = (indices, hsvColors) => {
	if (indices.length === 0) return [];
	const ordered = indices.toSorted((a, b) => hsvColors[a].v - hsvColors[b].v);
	const groups = [];
	let start = 0;
	for (let end = 1; end <= ordered.length; end++) if (end === ordered.length || hsvColors[ordered[end]].v - hsvColors[ordered[start]].v > .12) {
		groups.push(ordered.slice(start, end));
		start = end;
	}
	return groups;
};
/**
* \u5F69\u8272\u6876\uFF1A\u6876\u5185 H \u5DF2\u76F8\u8FD1\uFF0C\u6309 V \u4ECE\u5C0F\u5230\u5927\u6392\u5E8F\u540E\u8D2A\u5FC3\u5206\u7EC4\u3002
* \u6BCF\u6B21\u6269\u5C55\u65B0\u70B9\u65F6\u68C0\u67E5\u5B83\u4E0E\u5F53\u524D\u7EC4\u5185\u6240\u6709\u70B9\u7684\u7EFC\u5408\u8DDD\u79BB\u3002
*/
const groupChromatic = (indices, hsvColors) => {
	if (indices.length === 0) return [];
	const ordered = indices.toSorted((a, b) => hsvColors[a].v - hsvColors[b].v);
	const groups = [];
	let current = [ordered[0]];
	for (let i = 1; i < ordered.length; i++) {
		const index = ordered[i];
		let maxDistSquared = 0;
		for (const existing of current) maxDistSquared = Math.max(maxDistSquared, hsvDistanceSquared(hsvColors[index], hsvColors[existing]));
		if (maxDistSquared <= HSV_GROUP_THRESHOLD_SQUARED) current.push(index);
		else {
			groups.push(current);
			current = [index];
		}
	}
	groups.push(current);
	return groups;
};
/** \u5BF9\u4EE3\u8868\u8272\u6267\u884C HSV \u5206\u6876\u5206\u7EC4 */
const groupColorsByHsv = (colors) => {
	if (colors.length === 0) return [];
	const hsvColors = colors.map(rgbToHsv);
	const grayIndices = [];
	const buckets = Array.from({ length: 24 }, () => []);
	for (let i = 0; i < hsvColors.length; i++) {
		const { h, s } = hsvColors[i];
		if (s < .03) grayIndices.push(i);
		else buckets[Math.min(23, Math.floor(h / H_BUCKET_WIDTH))].push(i);
	}
	const groups = [...groupAchromatic(grayIndices, hsvColors)];
	const chromaticGroupsByBucket = buckets.map((bucket) => groupChromatic(bucket, hsvColors));
	const flatGroups = [];
	const boundaries = [];
	for (const bucketGroups of chromaticGroupsByBucket) {
		if (bucketGroups.length === 0) {
			boundaries.push({
				first: -1,
				last: -1
			});
			continue;
		}
		const boundary = {
			first: flatGroups.length,
			last: -1
		};
		boundaries.push(boundary);
		flatGroups.push(...bucketGroups);
		boundary.last = flatGroups.length - 1;
	}
	groups.push(...mergeAdjacentBuckets(flatGroups, boundaries, hsvColors));
	return groups;
};
/**
* \u76F8\u90BB\u5F69\u8272\u6876\u8FB9\u754C\u5408\u5E76
*
* \u68C0\u67E5\u6876 i \u7684\u6700\u540E\u4E00\u7EC4\u4E0E\u6876 i+1 \u7684\u7B2C\u4E00\u7EC4\uFF0C\u82E5\u4E24\u7EC4\u4EE3\u8868\u8272\u7684\u7EFC\u5408\u8DDD\u79BB\u4E0D\u8D85\u8FC7\u9608\u503C\uFF0C
* \u5219\u5C06\u5B83\u4EEC\u6240\u5728\u7684\u7EC4\u4EF6\u5408\u5E76\u3002
* \u4F7F\u7528\u5E76\u67E5\u96C6\u662F\u4E3A\u4E86\u652F\u6301\u591A\u4E2A\u76F8\u90BB\u8FB9\u754C\u8FDE\u7EED\u5408\u5E76\u3002
* \u4E0D\u5904\u7406\u8272\u76F8\u73AF\u9996\u5C3E\u5408\u5E76\u3002
*/
const mergeAdjacentBuckets = (groups, boundaries, hsvColors) => {
	const parent = Array.from({ length: groups.length }, (_, i) => i);
	const components = /* @__PURE__ */ new Map();
	for (let i = 0; i < groups.length; i++) components.set(i, [[...groups[i]]]);
	const find = (x) => {
		while (parent[x] !== x) {
			parent[x] = parent[parent[x]];
			x = parent[x];
		}
		return x;
	};
	const union = (a, b) => {
		const rootA = find(a);
		const rootB = find(b);
		if (rootA === rootB) return;
		parent[rootB] = rootA;
		components.get(rootA).push(...components.get(rootB));
		components.delete(rootB);
	};
	for (let i = 0; i < 23; i++) {
		const lastIndex = boundaries[i].last;
		const firstIndex = boundaries[i + 1].first;
		if (lastIndex === -1 || firstIndex === -1) continue;
		const rootA = find(lastIndex);
		const rootB = find(firstIndex);
		if (rootA === rootB) continue;
		const repA = averageHsvOfGroups(components.get(rootA), hsvColors);
		const repB = averageHsvOfGroups(components.get(rootB), hsvColors);
		if (hsvDistanceSquared(repA, repB) <= HSV_GROUP_THRESHOLD_SQUARED) union(rootA, rootB);
	}
	const result = [];
	for (const groupArrays of components.values()) {
		const merged = [];
		for (const group of groupArrays) merged.push(...group);
		result.push(merged);
	}
	return result;
};
//#endregion
//#region src/worker/ImageRecognition/colorUtils/lab.ts
/** Oklab \u4E2D a/b \u7684\u8DE8\u5EA6\uFF08\u7EA6 -0.4 ~ 0.4\uFF09\u3002 */
const LAB_AB_RANGE = .8;
/** \u9884\u8BA1\u7B97 0~255 \u7684 sRGB \u7EBF\u6027\u5316\u503C\uFF0C\u907F\u514D\u6BCF\u6B21\u8F6C\u6362\u90FD\u6267\u884C\u6307\u6570\u8FD0\u7B97 */
const LINEAR_RGB = /* @__PURE__ */ new Float32Array(256);
for (let i = 0; i < 256; i++) {
	const s = i / 255;
	LINEAR_RGB[i] = s <= .04045 ? s / 12.92 : ((s + .055) / 1.055) ** 2.4;
}
const rgbToOklab = (r, g, b) => {
	const rl = LINEAR_RGB[r];
	const gl = LINEAR_RGB[g];
	const bl = LINEAR_RGB[b];
	const l = .4122214708 * rl + .5363325363 * gl + .0514459929 * bl;
	const m = .2119034982 * rl + .6806995451 * gl + .1073969566 * bl;
	const s = .0883024619 * rl + .2817188376 * gl + .6299787005 * bl;
	const l_ = Math.cbrt(l);
	const m_ = Math.cbrt(m);
	const s_ = Math.cbrt(s);
	return [
		.2104542553 * l_ + .793617785 * m_ - .0040720468 * s_,
		1.9779984951 * l_ - 2.428592205 * m_ + .4505937099 * s_,
		.0259040371 * l_ + .7827717662 * m_ - .808675766 * s_
	];
};
/** \u901A\u8FC7 Oklab \u6570\u636E\u83B7\u53D6\u56FE\u7247\u7684\u7070\u5EA6\u8868 */
const toGrayListByLab = (lab) => {
	const { groupList, groupToLab } = lab;
	const grayList = new Uint8ClampedArray(groupList.length);
	for (let i = 0; i < groupList.length; i++) {
		const group = groupList[i];
		if (group < 0) continue;
		grayList[i] = groupToLab[group * 3] * 255;
	}
	return grayList;
};
//#endregion
//#region src/worker/ImageRecognition/colorUtils/quantization.ts
/**
* \u6784\u5EFA\u7EDF\u4E00\u7684 Oklab \u50CF\u7D20\u91CF\u5316\u6570\u636E\u3002
*
* @param forEachPixel \u6307\u5B9A\u9700\u8981\u53C2\u4E0E\u91CF\u5316\u7684\u50CF\u7D20\u904D\u5386\u65B9\u5F0F\uFF08\u4F8B\u5982\u53EA\u904D\u5386\u4E2D\u5FC3\u533A\u57DF\u5916\uFF09
*/
const buildLabQuantizedData = (img, levels = 42, forEachPixel) => {
	const { width, height } = img;
	const groupCount = levels ** 3;
	const groupList = new Int32Array(width * height);
	groupList.fill(-1);
	const lStep = 1 / levels;
	const abStep = LAB_AB_RANGE / levels;
	const labSums = new Float64Array(groupCount * 3);
	const rgbSums = new Float64Array(groupCount * 3);
	const counts = new Uint32Array(groupCount);
	(forEachPixel ?? ((fn) => {
		for (let i = 0; i < width * height; i++) fn(i);
	}))((index) => {
		const i = index * 4;
		const r = img.data[i];
		const g = img.data[i + 1];
		const b = img.data[i + 2];
		const [L, a, bLab] = rgbToOklab(r, g, b);
		const lGroup = Math.min(levels - 1, Math.max(0, Math.floor(L / lStep)));
		const aGroup = Math.min(levels - 1, Math.max(0, Math.floor((a + LAB_AB_RANGE / 2) / abStep)));
		const bGroup = Math.min(levels - 1, Math.max(0, Math.floor((bLab + LAB_AB_RANGE / 2) / abStep)));
		const group = (lGroup * levels + aGroup) * levels + bGroup;
		groupList[index] = group;
		const labOffset = group * 3;
		labSums[labOffset] += L;
		labSums[labOffset + 1] += a;
		labSums[labOffset + 2] += bLab;
		const rgbOffset = group * 3;
		rgbSums[rgbOffset] += r;
		rgbSums[rgbOffset + 1] += g;
		rgbSums[rgbOffset + 2] += b;
		counts[group] += 1;
	});
	const groupToLab = new Float32Array(groupCount * 3);
	const groupToRgb = new Uint8ClampedArray(groupCount * 3);
	for (let group = 0; group < groupCount; group++) {
		const count = counts[group];
		if (count === 0) continue;
		const offset = group * 3;
		groupToLab[offset] = labSums[offset] / count;
		groupToLab[offset + 1] = labSums[offset + 1] / count;
		groupToLab[offset + 2] = labSums[offset + 2] / count;
		groupToRgb[offset] = Math.round(rgbSums[offset] / count);
		groupToRgb[offset + 1] = Math.round(rgbSums[offset + 1] / count);
		groupToRgb[offset + 2] = Math.round(rgbSums[offset + 2] / count);
	}
	return {
		groupList,
		levels,
		groupToLab,
		groupToRgb
	};
};
//#endregion
//#region src/worker/ImageRecognition/colorUtils/rgb.ts
/** \u5C06 rgb \u8F6C\u6362\u4E3A\u5927\u5199 16 \u8FDB\u5236\u989C\u8272\u503C */
const rgbToHex = (r, g, b) => \`#\${[
	r,
	g,
	b
].map((n) => n.toString(16).padStart(2, "0").toUpperCase()).join("")}\`;
//#endregion
//#region src/worker/ImageRecognition/backgroundDetection/Region.ts
/** 4-\u8FDE\u901A\u7684\u76F8\u90BB\u50CF\u7D20\u4F4D\u7F6E\u504F\u79FB */
const NEIGHBOR_OFFSETS = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1]
];
var Region = class {
	id;
	/** \u8BE5\u533A\u57DF\u5305\u542B\u7684\u6240\u6709\u50CF\u7D20\u7D22\u5F15 */
	pixelIndexes = [];
	/** \u6240\u5C5E\u7684\u533A\u57DF\u7BA1\u7406\u5668 */
	manager;
	/** \u533A\u57DF\u989C\u8272\u76F4\u65B9\u56FE */
	colorHistogram = new ColorHistogram();
	constructor(manager, id) {
		this.manager = manager;
		this.id = id;
	}
	/** \u5F53\u524D\u533A\u57DF\u7684\u50CF\u7D20\u6570\u91CF */
	get pixelCount() {
		return this.pixelIndexes.length;
	}
	/** \u5C06\u50CF\u7D20\u6DFB\u52A0\u5230\u533A\u57DF\u91CC\u6765\uFF0C\u8FD4\u56DE\u662F\u5426\u6210\u529F\u6DFB\u52A0 */
	addPixel(index) {
		if (this.manager.getOwner(index) !== 0) return false;
		if (!this.checkPixel(index)) return false;
		if (this.manager.claimPixel(index, this.id)) {
			this.pixelIndexes.push(index);
			this.updateColorHistogram(index);
			this.onPixelAdded(index);
			return true;
		}
		return false;
	}
	/** \u5C06\u50CF\u7D20\u7684 Oklab \u91CF\u5316\u5206\u7EC4\u7801\u52A0\u5165\u533A\u57DF\u7684\u989C\u8272\u76F4\u65B9\u56FE */
	updateColorHistogram(index) {
		const group = this.manager.labQuantized.groupList[index];
		if (group >= 0) this.colorHistogram.add(group);
	}
	/**
	* \u4ECE\u79CD\u5B50\u50CF\u7D20\u5F00\u59CB\uFF0C\u4EE5 4-\u8FDE\u901A\u65B9\u5F0F\u5C06\u6EE1\u8DB3 checkPixel \u7684\u76F8\u90BB\u50CF\u7D20\u52A0\u5165\u5F53\u524D\u533A\u57DF\u3002
	*
	* \u5982\u679C\u79CD\u5B50\u50CF\u7D20\u65E0\u6CD5\u52A0\u5165\uFF0C\u81EA\u52A8\u91CA\u653E\u5F53\u524D\u533A\u57DF\u3002
	*/
	growFromSeed(seedIndex) {
		if (!this.addPixel(seedIndex)) return this.manager.releaseRegion(this.id);
		const { width, height } = this.manager;
		const queue = [seedIndex];
		let head = 0;
		while (head < queue.length) {
			const current = queue[head];
			head += 1;
			const currentX = current % width;
			const currentY = Math.floor(current / width);
			for (const [dx, dy] of NEIGHBOR_OFFSETS) {
				const nextX = currentX + dx;
				const nextY = currentY + dy;
				if (nextX < 0 || nextX >= width || nextY < 0 || nextY >= height) continue;
				const nextIndex = nextY * width + nextX;
				if (this.manager.getOwner(nextIndex) !== 0) continue;
				if (this.addPixel(nextIndex)) queue.push(nextIndex);
			}
		}
	}
	/** \u5F53\u53E6\u4E00\u4E2A\u533A\u57DF\u5408\u5E76\u5230\u5F53\u524D\u533A\u57DF\u65F6\u8C03\u7528\uFF0C\u7528\u4E8E\u5408\u5E76\u5B50\u7C7B\u7EF4\u62A4\u7684\u6D3E\u751F\u72B6\u6001 */
	onMerged(source) {
		this.colorHistogram.merge(source.colorHistogram);
	}
	/** \u904D\u5386\u8BE5\u533A\u57DF\u5305\u542B\u7684\u6240\u6709\u50CF\u7D20\u7D22\u5F15 */
	forEachPixel(callback) {
		for (const index of this.pixelIndexes) callback(index);
	}
	/** \u83B7\u53D6\u533A\u57DF\u7684\u4F17\u6570 Oklab */
	getModeLab() {
		const group = this.colorHistogram.getModeKey();
		if (group === void 0) return;
		const lab = this.manager.labQuantized.groupToLab;
		const offset = group * 3;
		return {
			l: lab[offset],
			a: lab[offset + 1],
			b: lab[offset + 2]
		};
	}
	/** \u83B7\u53D6\u533A\u57DF\u4F17\u6570\u8272\u5BF9\u5E94\u7684 Oklab \u91CF\u5316\u5206\u7EC4 id */
	getQuantizedGroup() {
		return this.colorHistogram.getModeKey();
	}
	/** \u83B7\u53D6\u533A\u57DF\u7684\u91CF\u5316 RGB\uFF08Oklab \u91CF\u5316\u5206\u7EC4\u5BF9\u5E94\u7684\u5E73\u5747 RGB\uFF0C\u4EC5\u7528\u4E8E HSV \u5206\u7EC4\uFF09 */
	getQuantizedRgb() {
		const group = this.getQuantizedGroup();
		if (group === void 0) return;
		const rgb = this.manager.labQuantized.groupToRgb;
		const offset = group * 3;
		return {
			r: rgb[offset],
			g: rgb[offset + 1],
			b: rgb[offset + 2]
		};
	}
	/**
	* \u83B7\u53D6\u8BE5\u533A\u57DF\u5728\u539F\u56FE\u4E2D\u7684\u4E3B\u8272
	*
	* \u4ECE\u4F17\u6570 Oklab \u5206\u7EC4\u5185\u53D6\u539F\u56FE RGB \u7684\u7CBE\u786E\u4F17\u6570
	*/
	getMainColor() {
		const group = this.colorHistogram.getModeKey();
		if (group === void 0) throw new Error("\u533A\u57DF\u6CA1\u6709\u50CF\u7D20\uFF0C\u65E0\u6CD5\u83B7\u53D6\u4E3B\u8272");
		const counts = /* @__PURE__ */ new Map();
		let maxKey = 0;
		let maxCount = 0;
		this.forEachPixel((index) => {
			if (this.manager.labQuantized.groupList[index] !== group) return;
			const i = index * 4;
			const r = this.manager.data[i];
			const g = this.manager.data[i + 1];
			const b = this.manager.data[i + 2];
			const key = r << 16 | g << 8 | b;
			const item = counts.get(key);
			if (item) item.count += 1;
			else counts.set(key, {
				count: 1,
				r,
				g,
				b
			});
			const count = item ? item.count : 1;
			if (count > maxCount) {
				maxKey = key;
				maxCount = count;
			}
		});
		const rgb = counts.get(maxKey);
		if (!rgb) throw new Error("\u533A\u57DF\u4E2D\u4E0D\u5B58\u5728\u4E3B\u8272\u5206\u7EC4\u5BF9\u5E94\u7684\u50CF\u7D20");
		return rgbToHex(rgb.r, rgb.g, rgb.b);
	}
};
/**
* \u533A\u57DF\u7BA1\u7406\u5668
*
* \u8D1F\u8D23\u50CF\u7D20\u5F52\u5C5E\u7684\u7EDF\u4E00\u7BA1\u7406\uFF0C\u4EE5\u53CA\u533A\u57DF\u5B9E\u4F8B\u7684\u6CE8\u518C\u4E0E\u67E5\u8BE2\u3002
*/
var RegionManager = class {
	/** \u56FE\u7247\u5BBD\u5EA6 */
	width;
	/** \u56FE\u7247\u9AD8\u5EA6 */
	height;
	/** \u56FE\u7247\u50CF\u7D20\u6570\u636E */
	data;
	/** \u7EDF\u4E00\u7684 Oklab \u50CF\u7D20\u91CF\u5316\u6570\u636E */
	labQuantized;
	/**
	* \u8BB0\u5F55\u50CF\u7D20\u5F52\u5C5E\u60C5\u51B5
	*
	* \u503C\u4E3A\u533A\u57DF id\uFF1A0 \u8868\u793A\u65E0\u5F52\u5C5E\uFF0C>0 \u8868\u793A\u5F52\u5C5E\u5BF9\u5E94 id \u7684\u533A\u57DF\uFF0C<0 \u8868\u793A\u4FDD\u7559\u533A\u57DF
	*/
	ownership;
	/** \u5DF2\u6CE8\u518C\u7684\u533A\u57DF\u5B9E\u4F8B\uFF0C\u952E\u4E3A\u533A\u57DF id\uFF0C\u503C\u4E3A\u533A\u57DF\u5BF9\u8C61 */
	regions = /* @__PURE__ */ new Map();
	/** \u4E0B\u4E00\u4E2A\u53EF\u5206\u914D\u7684\u533A\u57DF id */
	nextId = 1;
	constructor(img) {
		this.width = img.width;
		this.height = img.height;
		this.ownership = new Int32Array(img.width * img.height);
		this.data = img.data;
		this.labQuantized = img.labQuantized;
		this.reserveCenter(img);
	}
	/** \u5C06\u56FE\u7247\u7684\u4E2D\u95F4\u533A\u57DF\u6807\u8BB0\u4E3A\u4FDD\u7559\u533A\u57DF\uFF0C\u4E0D\u53C2\u4E0E\u8BC6\u522B */
	reserveCenter(img) {
		for (let y = img.bounds.startY; y < img.bounds.endY; y++) for (let x = img.bounds.startX; x < img.bounds.endX; x++) this.claimPixel(y * img.width + x, -1);
	}
	/** \u521B\u5EFA\u5E76\u6CE8\u518C\u4E00\u4E2A\u533A\u57DF\u5B9E\u4F8B */
	createRegion(RegionClass, ...args) {
		const id = this.nextId;
		this.nextId += 1;
		const region = new RegionClass(this, id, ...args);
		this.regions.set(id, region);
		return region;
	}
	/** \u6839\u636E id \u83B7\u53D6\u533A\u57DF\u5B9E\u4F8B */
	getRegion(id) {
		return this.regions.get(id);
	}
	/** \u83B7\u53D6\u5F53\u524D\u6240\u6709\u5DF2\u6CE8\u518C\u533A\u57DF\u7684 id \u5217\u8868 */
	getRegionIds() {
		return this.regions.keys();
	}
	/** \u83B7\u53D6\u5F53\u524D\u5DF2\u6CE8\u518C\u533A\u57DF\u7684\u6570\u91CF */
	getRegionCount() {
		return this.regions.size;
	}
	/** \u83B7\u53D6\u6307\u5B9A\u50CF\u7D20\u7684\u5F52\u5C5E\u533A\u57DF id */
	getOwner(index) {
		return this.ownership[index];
	}
	/** \u5C06\u6307\u5B9A\u50CF\u7D20\u8BA4\u9886\u7ED9\u6307\u5B9A\u533A\u57DF\uFF0C\u8FD4\u56DE\u662F\u5426\u8BA4\u9886\u6210\u529F */
	claimPixel(index, regionId) {
		if (this.ownership[index] !== 0) return false;
		this.ownership[index] = regionId;
		return true;
	}
	/** \u91CA\u653E\u6307\u5B9A\u50CF\u7D20\u7684\u5F52\u5C5E\uFF0C\u8FD4\u56DE\u662F\u5426\u91CA\u653E\u6210\u529F */
	releasePixel(index, regionId) {
		if (this.ownership[index] !== regionId) return false;
		this.ownership[index] = 0;
		return true;
	}
	/** \u6CE8\u9500\u533A\u57DF\uFF0C\u91CA\u653E\u6240\u5C5E\u50CF\u7D20 */
	releaseRegion(regionId) {
		const region = this.regions.get(regionId);
		if (!region) return;
		for (const index of region.pixelIndexes) this.ownership[index] = 0;
		region.pixelIndexes.length = 0;
		this.regions.delete(regionId);
	}
	/** \u5220\u9664\u6240\u6709\u9762\u79EF\u8FC7\u5C0F\u7684\u533A\u57DF\uFF0C\u5E76\u8FD4\u56DE\u88AB\u5220\u9664\u7684\u533A\u57DF id \u5217\u8868 */
	removeSmallRegions() {
		const minPixelCount = Math.max(1, Math.floor(this.width * this.height * MIN_REGION_RATIO));
		for (const id of this.regions.keys()) {
			const region = this.regions.get(id);
			if (region && region.pixelCount < minPixelCount) this.releaseRegion(id);
		}
	}
	/** \u5408\u5E76\u989C\u8272\u76F8\u4F3C\u7684\u533A\u57DF */
	mergeSimilarRegions() {
		if (this.regions.size <= 1) return;
		const idsByGroup = /* @__PURE__ */ new Map();
		for (const region of this.regions.values()) {
			const group = region.getQuantizedGroup();
			if (group === void 0) continue;
			const ids = idsByGroup.get(group);
			if (ids) ids.push(region.id);
			else idsByGroup.set(group, [region.id]);
		}
		if (idsByGroup.size === 0) return;
		const representativeRgbs = [];
		const representativeGroups = [];
		for (const [group, ids] of idsByGroup) {
			const rgb = this.regions.get(ids[0])?.getQuantizedRgb();
			if (!rgb) continue;
			representativeRgbs.push(rgb);
			representativeGroups.push(group);
		}
		if (representativeRgbs.length === 0) return;
		const groups = groupColorsByHsv(representativeRgbs);
		for (const group of groups) {
			if (group.length === 0) continue;
			let targetId = -1;
			let maxCount = -1;
			for (const representativeIndex of group) {
				const ids = idsByGroup.get(representativeGroups[representativeIndex]);
				if (!ids) continue;
				for (const id of ids) {
					const count = this.regions.get(id)?.pixelCount ?? 0;
					if (count > maxCount) {
						maxCount = count;
						targetId = id;
					}
				}
			}
			for (const representativeIndex of group) {
				const ids = idsByGroup.get(representativeGroups[representativeIndex]);
				if (!ids) continue;
				for (const id of ids) if (id !== targetId) this.mergeRegions(targetId, id);
			}
		}
	}
	/**
	* \u5C06\u4E00\u4E2A\u533A\u57DF\u7684\u6240\u6709\u50CF\u7D20\u5408\u5E76\u5230\u53E6\u4E00\u4E2A\u533A\u57DF\uFF0C\u5E76\u6CE8\u9500\u6E90\u533A\u57DF\uFF0C\u8FD4\u56DE\u662F\u5426\u5408\u5E76\u6210\u529F
	*
	* \u5408\u5E76\u540E\uFF0C\u6E90\u533A\u57DF\u7684 id \u4E0D\u518D\u6709\u6548\uFF0C\u76EE\u6807\u533A\u57DF\u7684 pixelCount \u4F1A\u589E\u52A0\u6E90\u533A\u57DF\u7684\u50CF\u7D20\u6570\u91CF
	*/
	mergeRegions(targetId, sourceId) {
		const target = this.regions.get(targetId);
		const source = this.regions.get(sourceId);
		if (!target || !source) return false;
		const sourcePixels = source.pixelIndexes;
		const targetPixels = target.pixelIndexes;
		const sourceLength = sourcePixels.length;
		const targetStart = targetPixels.length;
		targetPixels.length = targetStart + sourceLength;
		for (let i = 0; i < sourceLength; i++) {
			const index = sourcePixels[i];
			this.ownership[index] = targetId;
			targetPixels[targetStart + i] = index;
		}
		sourcePixels.length = 0;
		target.onMerged(source);
		this.regions.delete(sourceId);
		return true;
	}
	/** \u904D\u5386\u6307\u5B9A\u533A\u57DF\u7684\u6240\u6709\u50CF\u7D20\u7D22\u5F15 */
	forEachPixelOfRegion(regionId, callback) {
		this.regions.get(regionId)?.forEachPixel(callback);
	}
};
//#endregion
//#region src/worker/ImageRecognition/backgroundDetection/quantizedEdgeGrow.ts
/** \u57FA\u4E8E Oklab \u5206\u7EC4\u7684 Region */
var QuantizedRegion = class extends Region {
	group;
	groupList;
	constructor(manager, id, { group, groupList }) {
		super(manager, id);
		this.group = group;
		this.groupList = groupList;
	}
	checkPixel(index) {
		return this.groupList[index] === this.group;
	}
	onPixelAdded() {}
};
/** \u4ECE\u8FB9\u7F18\u8D77\u70B9\u533A\u57DF\u4E2D\u672A\u5360\u7528\u7684\u50CF\u7D20\u5F00\u59CB\u751F\u957F\u3002 */
const growEdgeSeeds = (manager, img, groupList) => {
	const { width, height } = img;
	const edgeX = Math.max(1, Math.floor(width * EDGE_SEED_RATIO));
	const edgeY = Math.max(1, Math.floor(height * EDGE_SEED_RATIO));
	const isInSeedArea = (x, y) => x < edgeX || x >= width - edgeX || y < edgeY || y >= height - edgeY;
	for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
		if (!isInSeedArea(x, y)) continue;
		const index = y * width + x;
		if (manager.getOwner(index) !== 0) continue;
		const group = groupList[index];
		manager.createRegion(QuantizedRegion, {
			group,
			groupList
		}).growFromSeed(index);
	}
};
/**
* \u57FA\u4E8E Oklab \u91CF\u5316\u4E0E\u8FB9\u7F18\u79CD\u5B50\u751F\u957F\u7684\u80CC\u666F\u8BC6\u522B\uFF1A
*
* 1. \u4F7F\u7528 ImgContext \u4E0A\u7EDF\u4E00\u7684 Oklab \u91CF\u5316\u6570\u636E\uFF1B
* 2. \u4ECE\u8FB9\u7F18\u8D77\u70B9\u533A\u57DF\u4E2D\u672A\u5360\u7528\u7684\u50CF\u7D20\u51FA\u53D1\uFF0C\u4EE5 4-\u8FDE\u901A\u7684\u65B9\u5F0F\u904D\u5386\uFF0C
*    \u5C06\u540C\u4E00 Oklab \u5206\u7EC4\u7684\u50CF\u7D20\u5408\u5E76\u6210\u4E00\u4E2A Region\uFF1B
* 3. \u751F\u957F\u5B8C\u6210\u540E\uFF0C\u5408\u5E76\u4EE3\u8868\u8272\u76F8\u4F3C\u7684\u533A\u57DF\u3002
*/
const quantizedEdgeGrow = (img, manager) => {
	const { width, height } = img;
	if (width <= 0 || height <= 0) return manager;
	growEdgeSeeds(manager, img, img.labQuantized.groupList);
	img.logger.mark("\u8FB9\u7F18\u79CD\u5B50\u751F\u957F\u5B8C\u6210");
	if (manager.getRegionCount() === 0) return manager;
	manager.mergeSimilarRegions();
	img.logger.mark("\u76F8\u4F3C\u533A\u57DF\u5408\u5E76\u5B8C\u6210");
	manager.removeSmallRegions();
	img.logger.mark("\u5C0F\u533A\u57DF\u6E05\u7406\u5B8C\u6210");
	return manager;
};
//#endregion
//#region src/worker/ImageRecognition/backgroundDetection/index.ts
/** \u8BC6\u522B\u51FA\u56FE\u7247\u7684\u80CC\u666F\u533A\u57DF */
const detectBackgroundRegions = (img) => {
	if (img.backgroundRegions) return img.backgroundRegions;
	const manager = new RegionManager(img);
	img.logger.mark("\u533A\u57DF\u7BA1\u7406\u5668\u521D\u59CB\u5316\u5B8C\u6210");
	quantizedEdgeGrow(img, manager);
	img.logger.mark("\u80CC\u666F\u533A\u57DF\u8BC6\u522B\u5B8C\u6210");
	img.backgroundRegions = manager;
	return manager;
};
//#endregion
//#region src/worker/ImageRecognition/blankMargin.ts
/**
* \u6839\u636E\u53C2\u8003\u80CC\u666F\u8272\u8BA1\u7B97\u56FE\u7247\u56DB\u8FB9\u7684\u7A7A\u767D\u8FB9\u7F18\u8DDD\u79BB\uFF08\u50CF\u7D20\u5355\u4F4D\uFF09\u3002
*
* \u6BCF\u6761\u8FB9\u5148\u4EE5\u6700\u5916\u5C42\u884C/\u5217\u7684\u4E3B\u8272\u4F5C\u4E3A\u53C2\u8003\u80CC\u666F\u8272\uFF0C\u7136\u540E\u4ECE\u8FB9\u7F18\u5411\u5185\u9010\u884C/\u5217\u626B\u63CF\u3002
* \u7D2F\u8BA1\u4E0E\u53C2\u8003\u8272\u5DEE\u8D85\u8FC7\u9608\u503C\u7684\u50CF\u7D20\u6570\uFF0C\u4E00\u65E6\u8D85\u8FC7\u6574\u8FB9\u9884\u7B97\u5C31\u505C\u6B62\u3002
*/
const getRawBlankMargin = (img) => {
	const { width, height } = img;
	const { groupList, groupToLab, levels } = img.labQuantized;
	const counts = new Uint32Array(levels ** 3);
	const touched = [];
	const resetCounts = () => {
		for (const group of touched) counts[group] = 0;
		touched.length = 0;
	};
	/**
	* \u626B\u63CF\u4E00\u6761\u8FB9\u3002
	*
	* @param lineLength \u884C/\u5217\u957F\u5EA6\uFF1A\u5DE6\u53F3\u8FB9\u7528\u9AD8\u5EA6\uFF0C\u4E0A\u4E0B\u8FB9\u7528\u5BBD\u5EA6
	* @param limit \u6700\u591A\u626B\u63CF\u591A\u5C11\u884C/\u5217\uFF08\u7531\u4E2D\u5FC3\u4FDD\u7559\u533A\u8FB9\u754C\u51B3\u5B9A\uFF09
	* @param startPos \u8D77\u59CB\u4F4D\u7F6E\uFF1A\u5217\u7528 x\uFF0C\u884C\u7528 y
	* @param step \u626B\u63CF\u65B9\u5411\uFF1A\u5411\u5185\u4E3A 1\uFF0C\u4ECE\u53F3/\u4E0B\u8FB9\u7F18\u5411\u5185\u4E3A -1
	* @param isColumn true \u8868\u793A\u626B\u63CF\u5217\uFF0Cfalse \u8868\u793A\u626B\u63CF\u884C
	*/
	const scanSide = ({ lineLength, limit, startPos, step, isColumn }) => {
		if (limit <= 0) return 0;
		const maxOutlier = lineLength * BLANK_MARGIN_MAX_OUTLIER_RATIO;
		resetCounts();
		let refGroup = -1;
		let maxCount = 0;
		const firstPos = startPos;
		if (isColumn) for (let offset = 0; offset < lineLength; offset++) {
			const group = groupList[offset * width + firstPos];
			if (group < 0) continue;
			if (counts[group] === 0) touched.push(group);
			const count = ++counts[group];
			if (count > maxCount) {
				maxCount = count;
				refGroup = group;
			}
		}
		else for (let offset = 0; offset < lineLength; offset++) {
			const group = groupList[firstPos * width + offset];
			if (group < 0) continue;
			if (counts[group] === 0) touched.push(group);
			const count = ++counts[group];
			if (count > maxCount) {
				maxCount = count;
				refGroup = group;
			}
		}
		resetCounts();
		if (refGroup < 0) return 0;
		const refOffset = refGroup * 3;
		const refL = groupToLab[refOffset];
		const refA = groupToLab[refOffset + 1];
		const refB = groupToLab[refOffset + 2];
		const toleranceSq = BLANK_MARGIN_COLOR_TOLERANCE ** 2;
		const isOutOfTolerance = (group) => {
			if (group < 0) return true;
			const offset = group * 3;
			const dl = groupToLab[offset] - refL;
			const da = groupToLab[offset + 1] - refA;
			const db = groupToLab[offset + 2] - refB;
			return dl * dl + da * da + db * db > toleranceSq;
		};
		let outlierCount = 0;
		const scanLineAt = (pos) => {
			if (isColumn) for (let offset = 0; offset < lineLength; offset++) {
				const group = groupList[offset * width + pos];
				if (!isOutOfTolerance(group)) continue;
				outlierCount += 1;
				if (outlierCount > maxOutlier) return false;
			}
			else for (let offset = 0; offset < lineLength; offset++) {
				const group = groupList[pos * width + offset];
				if (!isOutOfTolerance(group)) continue;
				outlierCount += 1;
				if (outlierCount > maxOutlier) return false;
			}
			return true;
		};
		if (!scanLineAt(firstPos)) return 0;
		let margin = 1;
		for (let i = 1; i < limit; i++) {
			if (!scanLineAt(startPos + step * i)) return margin;
			margin += 1;
		}
		return margin;
	};
	const { startX, endX, startY, endY } = img.bounds;
	const left = scanSide({
		lineLength: height,
		limit: startX,
		startPos: 0,
		step: 1,
		isColumn: true
	});
	const right = scanSide({
		lineLength: height,
		limit: width - endX,
		startPos: width - 1,
		step: -1,
		isColumn: true
	});
	const top = scanSide({
		lineLength: width,
		limit: startY,
		startPos: 0,
		step: 1,
		isColumn: false
	});
	const bottom = scanSide({
		lineLength: width,
		limit: height - endY,
		startPos: height - 1,
		step: -1,
		isColumn: false
	});
	if (left || right || top || bottom) return {
		left,
		right,
		top,
		bottom
	};
};
/** \u83B7\u53D6\u56FE\u7247\u7684\u7A7A\u767D\u8FB9\u7F18 */
const getBlankMargin = (img) => {
	if (img.blankMargin !== void 0) return img.blankMargin;
	const blankMargin = getRawBlankMargin(img);
	if (!blankMargin) {
		img.logger.mark("\u7A7A\u767D\u8FB9\u7F18\u626B\u63CF\u5B8C\u6210", "\u672A\u68C0\u6D4B\u5230");
		return null;
	}
	blankMargin.left /= img.width;
	blankMargin.right /= img.width;
	blankMargin.top /= img.height;
	blankMargin.bottom /= img.height;
	img.blankMargin = blankMargin;
	img.logger.mark("\u7A7A\u767D\u8FB9\u7F18\u626B\u63CF\u5B8C\u6210", Object.entries(blankMargin).filter(([, v]) => v).map(([k, v]) => \`\${k}:\${v && (v * 100).toFixed(2)}%\`).join(" "));
	return img.blankMargin;
};
/** \u8BA1\u7B97\u5B57\u7B26\u4E32\u5728\u7B49\u5BBD\u7EC8\u7AEF\u4E2D\u7684\u663E\u793A\u5BBD\u5EA6\uFF0CCJK/\u5168\u89D2\u5B57\u7B26\u6309 2 \u5217\u8BA1\u7B97 */
const displayWidth = (text) => {
	let width = 0;
	for (const ch of text) width += ch.codePointAt(0) > 255 ? 2 : 1;
	return width;
};
/** \u5C06\u65E5\u5FD7\u6309\u5217\u5BF9\u9F50\uFF1A\u7B2C\u4E00\u5217\uFF08\u65F6\u95F4\uFF09\u53F3\u5BF9\u9F50\uFF0C\u5176\u4F59\u5217\u5DE6\u5BF9\u9F50 */
const formatLogs = (logs) => {
	if (logs.length === 0) return [];
	const columnCount = Math.max(...logs.map((row) => row.length));
	const columnWidths = Array.from({ length: columnCount }, (_, col) => Math.max(0, ...logs.filter((row) => row[col] !== void 0).map((row) => displayWidth(row[col]))));
	return logs.map((row) => {
		const parts = [];
		for (let col = 0; col < row.length; col++) {
			const value = row[col];
			if (col === row.length - 1) {
				parts.push(value);
				continue;
			}
			if (col === 0 && value === "" && columnWidths[0] === 0) continue;
			const padding = Math.max(0, columnWidths[col] - displayWidth(value));
			parts.push(col === 0 ? " ".repeat(padding) + value : value + " ".repeat(padding));
		}
		return parts.join(" ".repeat(4));
	});
};
var Log = class {
	logs = [];
	startTime = performance.now();
	lastMarkTime = this.startTime;
	/** \u8BB0\u5F55\u666E\u901A\u65E5\u5FD7\uFF0C\u6D88\u606F\u4F1A\u5728\u65F6\u95F4\u5217\u4E4B\u540E\u5DE6\u5BF9\u9F50\u8F93\u51FA */
	log(message) {
		this.logs.push(["", message]);
	}
	/**
	* \u8BB0\u5F55\u4ECE\u4E0A\u4E00\u6B21 mark \u5230\u5F53\u524D\u65F6\u523B\u7684\u8017\u65F6\u3002
	*
	* \u7B2C\u4E00\u9879\u4E3A\u8017\u65F6\uFF08\u53F3\u5BF9\u9F50\uFF09\uFF0C\u540E\u7EED\u5B57\u7B26\u4E32\u53C2\u6570\u5728\u65F6\u95F4\u540E\u4F9D\u6B21\u5DE6\u5BF9\u9F50\u8F93\u51FA\u3002
	*/
	mark(label, ...args) {
		const now = performance.now();
		const elapsed = now - this.lastMarkTime;
		this.lastMarkTime = now;
		this.logs.push([
			\`\${elapsed.toFixed(2)}ms\`,
			label,
			...args
		]);
	}
	/** \u4ECE\u56FE\u7247\u5F00\u59CB\u5904\u7406\u5230\u5F53\u524D\u65F6\u523B\u7684\u603B\u8017\u65F6 */
	get totalTime() {
		return performance.now() - this.startTime;
	}
	/** \u683C\u5F0F\u5316\u6240\u6709\u65E5\u5FD7\u4E3A\u5BF9\u9F50\u540E\u7684\u5B8C\u6574\u5B57\u7B26\u4E32 */
	format() {
		return formatLogs(this.logs).join("\\n");
	}
};
//#endregion
//#region src/worker/ImageRecognition/imgContext.ts
/** \u56FE\u7247\u5904\u7406\u8FC7\u7A0B\u4E2D\u9700\u8981\u5171\u4EAB/\u7D2F\u79EF\u7684\u72B6\u6001\u548C\u5DE5\u5177\u65B9\u6CD5 */
var ImgContext = class {
	data;
	width;
	height;
	url;
	index;
	option;
	version;
	/** \u4E2D\u5FC3\u4FDD\u7559\u533A\u57DF\u7684\u8FB9\u754C\u8303\u56F4 */
	bounds;
	logger = new Log();
	backgroundRegions;
	/**
	* - undefined = \u5C1A\u672A\u8BA1\u7B97
	* - null = \u6CA1\u6709\u7A7A\u767D\u8FB9\u7F18
	* - \u5BF9\u8C61 = \u8BA1\u7B97\u51FA\u7684\u7684\u7A7A\u767D\u8FB9\u7F18
	*/
	blankMargin;
	/**
	* - undefined = \u5C1A\u672A\u8BA1\u7B97
	* - null = \u6CA1\u6709\u80CC\u666F\u8272
	*/
	background;
	constructor({ imgData, width, height, url, index, option, version }) {
		this.data = imgData;
		this.width = width;
		this.height = height;
		this.url = url;
		this.index = index;
		this.option = option;
		this.version = version;
		const edgeScanRatio = .6 / 2;
		this.bounds = {
			startX: Math.floor(width * edgeScanRatio),
			endX: Math.ceil(width * .7),
			startY: Math.floor(height * edgeScanRatio),
			endY: Math.ceil(height * .7)
		};
	}
	/** \u7070\u5EA6\u8868 */
	get grayList() {
		if (!this._grayList) {
			this._grayList = this.computeGrayList();
			this.logger.mark("\u7070\u5EA6\u56FE\u751F\u6210\u5B8C\u6210");
		}
		return this._grayList;
	}
	_grayList;
	/** Oklab \u91CF\u5316\u6570\u636E */
	get labQuantized() {
		if (!this._labQuantized) {
			this._labQuantized = buildLabQuantizedData(this, 42, (fn) => this.forEachOutsideCenter(fn));
			this.logger.mark("Oklab \u91CF\u5316\u5B8C\u6210");
		}
		return this._labQuantized;
	}
	_labQuantized;
	/** \u904D\u5386\u4E2D\u5FC3\u533A\u57DF\u5916\u7684\u6240\u6709\u50CF\u7D20\uFF0C\u6309\u4E0A\u4E0B\u5DE6\u53F3\u56DB\u4E2A\u5E26\u72B6\u533A\u57DF\u8FED\u4EE3\uFF0C\u907F\u514D\u9010\u50CF\u7D20\u5224\u65AD\u4E2D\u5FC3\u533A\u57DF */
	forEachOutsideCenter(fn) {
		const { startX, endX, startY, endY } = this.bounds;
		const { width, height } = this;
		for (let y = 0; y < startY; y++) {
			let index = y * width;
			for (let x = 0; x < width; x++, index++) fn(index);
		}
		for (let y = endY; y < height; y++) {
			let index = y * width;
			for (let x = 0; x < width; x++, index++) fn(index);
		}
		for (let y = startY; y < endY; y++) {
			let index = y * width;
			for (let x = 0; x < startX; x++, index++) fn(index);
			index = y * width + endX;
			for (let x = endX; x < width; x++, index++) fn(index);
		}
	}
	computeGrayList() {
		return toGrayListByLab(this.labQuantized);
	}
	/** \u904D\u5386\u56FE\u7247\u7684\u6307\u5B9A\u884C */
	forEachRows(y, fn, { start = 0, end = this.width } = {}) {
		for (let i = start; i < end; i++) fn(this.width * y + i);
	}
	/** \u904D\u5386\u56FE\u7247\u7684\u6307\u5B9A\u5217 */
	forEachCols(x, fn, { start = 0, end = this.height } = {}) {
		for (let i = start; i < end; i++) fn(i * this.width + x);
	}
};
//#endregion
//#region src/worker/ImageRecognition/index.ts
const recognitionImg = async (imgData, data) => {
	await Promise.resolve();
	const img = new ImgContext({
		imgData,
		...data
	});
	if (data.option.pageFill || data.option.crop) {
		const blankMargin = getBlankMargin(img);
		mainFn.setImg({
			url: img.url,
			key: "blankMargin",
			val: blankMargin,
			version: img.version
		});
		if (blankMargin) mainFn.updatePageData();
	}
	if (data.option.background) {
		detectBackgroundRegions(img);
		const background = getBackground(img);
		mainFn.setImg({
			url: img.url,
			key: "background",
			val: background,
			version: img.version
		});
	}
	img.logger.logs.push([\`\${img.logger.totalTime.toFixed(2)}ms\`, "\u603B\u8017\u65F6"]);
	mainFn.log?.(\`\${img.url}\\n\${img.logger.format()}\`);
};
//#endregion
exports.recognitionImg = recognitionImg;
exports.setMainFn = setMainFn;
`,"worker/ImageUpscale":`
//#region \\0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let _tensorflow_tfjs = require("@tensorflow/tfjs");
_tensorflow_tfjs = __toESM(_tensorflow_tfjs, 1);
let _tensorflow_tfjs_backend_webgpu = require("@tensorflow/tfjs-backend-webgpu");
let helper = require("helper");
//#region src/worker/ImageUpscale/image.ts
var Img = class {
	width;
	height;
	data;
	constructor(width, height, data = new Uint8Array(width * height * 4)) {
		this.width = width;
		this.height = height;
		this.data = data;
	}
	getImageCrop(x, y, image, x1, y1, x2, y2) {
		const width = x2 - x1;
		for (let j = 0; j < y2 - y1; j++) {
			const srcIndex = (y1 + j) * image.width * 4 + x1 * 4;
			this.data.set(image.data.subarray(srcIndex, srcIndex + width * 4), (y + j) * this.width * 4 + x * 4);
		}
	}
	padToTileSize(tileSize) {
		let newWidth = this.width;
		let newHeight = this.height;
		if (this.width < tileSize) newWidth = tileSize;
		if (this.height < tileSize) newHeight = tileSize;
		if (newWidth === this.width && newHeight === this.height) return;
		const newData = new Uint8Array(newWidth * newHeight * 4);
		for (let y = 0; y < this.height; y++) {
			const srcStart = y * this.width * 4;
			newData.set(this.data.subarray(srcStart, srcStart + this.width * 4), y * newWidth * 4);
		}
		if (newWidth > this.width) {
			const rightColumnIndex = (this.width - 1) * 4;
			for (let y = 0; y < this.height; y++) {
				const destRowStart = y * newWidth * 4;
				const srcPixelIndex = y * this.width * 4 + rightColumnIndex;
				const padPixel = this.data.subarray(srcPixelIndex, srcPixelIndex + 4);
				for (let x = this.width; x < newWidth; x++) newData.set(padPixel, destRowStart + x * 4);
			}
		}
		if (newHeight > this.height) {
			const bottomRowStart = (this.height - 1) * newWidth * 4;
			const bottomRow = newData.subarray(bottomRowStart, bottomRowStart + newWidth * 4);
			for (let y = this.height; y < newHeight; y++) newData.set(bottomRow, y * newWidth * 4);
		}
		this.width = newWidth;
		this.height = newHeight;
		this.data = newData;
	}
	cropToOriginalSize(width, height) {
		const newData = new Uint8Array(width * height * 4);
		for (let y = 0; y < height; y++) {
			const srcStart = y * this.width * 4;
			newData.set(this.data.subarray(srcStart, srcStart + width * 4), y * width * 4);
		}
		this.width = width;
		this.height = height;
		this.data = newData;
	}
};
//#endregion
//#region src/worker/ImageUpscale/workHelper.ts
const mainFn = {};
const setMainFn = (helper, keys) => {
	for (const name of keys) Reflect.set(mainFn, name, (...args) => Reflect.apply(helper[name], helper, args));
};
const base64ToArrayBuffer = (base64) => {
	const binaryString = atob(base64);
	const len = binaryString.length;
	const bytes = new Uint8Array(len);
	for (let i = 0; i < len; i++) bytes[i] = binaryString.codePointAt(i);
	return bytes.buffer;
};
//#endregion
//#region src/worker/ImageUpscale/model.ts
console.debug(_tensorflow_tfjs_backend_webgpu.webgpu_util);
let model;
let loading = false;
const getModel = async () => {
	if (model) return model;
	if (loading) return helper.wait(() => model);
	loading = true;
	try {
		await _tensorflow_tfjs.setBackend("webgpu");
	} catch (error) {
		mainFn.toast.warn(mainFn.t("upscale.webgpu_tip"));
		mainFn.log.error("\u5207\u6362 WebGPU \u51FA\u9519", error);
	}
	const { buffer, base64, json } = await mainFn.getModel();
	Reflect.set(_tensorflow_tfjs.env().platform, "fetch", () => ({
		ok: true,
		json: () => JSON.parse(json),
		arrayBuffer: () => buffer || base64ToArrayBuffer(base64)
	}));
	model = await _tensorflow_tfjs.loadGraphModel("xxx");
	return model;
};
//#endregion
//#region src/worker/ImageUpscale/upscale.ts
const upscaleImg = async (image) => {
	const model = await getModel();
	const result = _tensorflow_tfjs.default.tidy(() => model.predict(img2tensor(image)));
	const resultImage = await tensor2img(result);
	_tensorflow_tfjs.default.dispose(result);
	return resultImage;
};
const img2tensor = (image) => {
	const imgdata = new ImageData(image.width, image.height);
	imgdata.data.set(image.data);
	return _tensorflow_tfjs.default.browser.fromPixels(imgdata).div(255).toFloat().expandDims();
};
const tensor2img = async (tensor) => {
	const [, height, width] = tensor.shape;
	const clipped = _tensorflow_tfjs.default.tidy(() => tensor.reshape([
		height,
		width,
		3
	]).mul(255).cast("int32").clipByValue(0, 255));
	tensor.dispose();
	const data = await _tensorflow_tfjs.default.browser.toPixels(clipped);
	clipped.dispose();
	return new Img(width, height, data);
};
//#endregion
//#region src/worker/ImageUpscale/index.ts
const factor = 2;
const input_size = 128;
const min_lap = 12;
const upscale = async (data, width, height) => {
	const input = new Img(width, height, new Uint8Array(data));
	input.padToTileSize(input_size);
	const output = new Img(width * factor, height * factor);
	let num_x = 1;
	for (; (input_size * num_x - width) / (num_x - 1) < min_lap; num_x++);
	let num_y = 1;
	for (; (input_size * num_y - height) / (num_y - 1) < min_lap; num_y++);
	const locs_x = Array.from({ length: num_x }, () => 0);
	const locs_y = Array.from({ length: num_y }, () => 0);
	const pad_left = Array.from({ length: num_x }, () => 0);
	const pad_top = Array.from({ length: num_y }, () => 0);
	const pad_right = Array.from({ length: num_x }, () => 0);
	const pad_bottom = Array.from({ length: num_y }, () => 0);
	const total_lap_x = input_size * num_x - width;
	const total_lap_y = input_size * num_y - height;
	const base_lap_x = Math.floor(total_lap_x / (num_x - 1));
	const base_lap_y = Math.floor(total_lap_y / (num_y - 1));
	const extra_lap_x = total_lap_x - base_lap_x * (num_x - 1);
	const extra_lap_y = total_lap_y - base_lap_y * (num_y - 1);
	locs_x[0] = 0;
	for (let i = 1; i < num_x; i++) locs_x[i] = locs_x[i - 1] + input_size - base_lap_x - (i <= extra_lap_x ? 1 : 0);
	locs_y[0] = 0;
	for (let i = 1; i < num_y; i++) locs_y[i] = locs_y[i - 1] + input_size - base_lap_y - (i <= extra_lap_y ? 1 : 0);
	pad_left[0] = 0;
	pad_top[0] = 0;
	pad_right[num_x - 1] = 0;
	pad_bottom[num_y - 1] = 0;
	for (let i = 1; i < num_x; i++) pad_left[i] = Math.floor((locs_x[i - 1] + input_size - locs_x[i]) / 2);
	for (let i = 1; i < num_y; i++) pad_top[i] = Math.floor((locs_y[i - 1] + input_size - locs_y[i]) / 2);
	for (let i = 0; i < num_x - 1; i++) pad_right[i] = locs_x[i] + input_size - locs_x[i + 1] - pad_left[i + 1];
	for (let i = 0; i < num_y - 1; i++) pad_bottom[i] = locs_y[i] + input_size - locs_y[i + 1] - pad_top[i + 1];
	for (let i = 0; i < num_x; i++) for (let j = 0; j < num_y; j++) {
		const x1 = locs_x[i];
		const y1 = locs_y[j];
		const x2 = locs_x[i] + input_size;
		const y2 = locs_y[j] + input_size;
		const tile = new Img(input_size, input_size);
		tile.getImageCrop(0, 0, input, x1, y1, x2, y2);
		const scaled = await upscaleImg(tile);
		output.getImageCrop((x1 + pad_left[i]) * factor, (y1 + pad_top[j]) * factor, scaled, pad_left[i] * factor, pad_top[j] * factor, scaled.width - pad_right[i] * factor, scaled.height - pad_bottom[j] * factor);
	}
	return output;
};
const upscaleImage = async (data, width, height, url) => {
	const startTime = Date.now();
	const output = await upscale(data, width, height);
	const canvas = new OffscreenCanvas(output.width, output.height);
	const ctx = canvas.getContext("2d");
	const imgData = ctx.createImageData(output.width, output.height);
	for (let i = 0; i < imgData.data.length; i++) imgData.data[i] = output.data[i];
	ctx.putImageData(imgData, 0, 0);
	const blob = await canvas.convertToBlob({ type: "image/png" });
	mainFn.setImg(url, "upscaleUrl", URL.createObjectURL(blob));
	mainFn.log?.(\`\${url}\\n\${width}x\${height}\\n\u8017\u65F6 \${Date.now() - startTime}ms \u653E\u5927\u5B8C\u6210\`);
};
//#endregion
exports.setMainFn = setMainFn;
exports.upscaleImage = upscaleImage;
`,"userscript/otherSite":`
let solid_js_web = require("solid-js/web");
let core = require("core");
let helper = require("helper");
let userscript_autoImageScanner = require("userscript/autoImageScanner");
//#region src/userscript/otherSite/index.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<div><button>\`);
/** \u6267\u884C\u811A\u672C\u64CD\u4F5C\u3002\u5982\u679C\u4E2D\u9014\u4E2D\u65AD\uFF0C\u5C06\u8FD4\u56DE true */
const otherSite = async () => {
	let laseScroll = window.scrollY;
	const { store, setState, options, setOptions } = await core.useInit(location.hostname, {
		remember_current_site: true,
		selector: ""
	});
	helper.createEffectOn(() => options.remember_current_site, async (remember) => {
		if (remember) return;
		await GM.deleteValue(location.hostname);
		location.reload();
	});
	if (!store.flag.isStored) core.toast(() => (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild;
		solid_js_web.insert(_el$, () => helper.t("site.simple.auto_read_mode_message"), _el$2);
		solid_js_web.addEventListener(_el$2, "click", () => setOptions({ autoShow: false }));
		solid_js_web.insert(_el$2, () => helper.t("other.disable"));
		return _el$;
	})(), { duration: 7e3 });
	const menuId = await GM.registerMenuCommand(helper.t("site.simple.simple_read_mode"), () => setOptions({ selector: "" }));
	await GM.unregisterMenuCommand(menuId);
	let timeout = 0;
	const scanner = new userscript_autoImageScanner.AutoImageScanner({
		selector: options.selector,
		onImgListChange: (imgList) => setState("comicMap", "", "imgList", imgList),
		onEmpty: () => setState((state) => {
			state.fab.show = false;
			state.manga.show = false;
		}),
		onChapterSwitchChange: ({ next, prev }) => setState("manga", {
			onPrev: prev,
			onNext: next
		}),
		onSelectorSuggest: (selector) => setOptions({ selector }),
		shouldTriggerLazyLoad: () => store.manga.show || !timeout && store.manga.imgList.length === 0,
		sortImageByTop: true
	});
	helper.exposeToGlobal({ scanner });
	setState("comicMap", "", { async getImgList() {
		if (scanner.imgList.length === 0) {
			scanner.start();
			scanner.triggerLazyLoad();
			timeout = window.setTimeout(() => {
				if (store.manga.imgList.length > 0) return;
				core.toast.warn(helper.t("site.simple.no_img"), {
					id: "no_img",
					duration: Infinity,
					onClick() {
						setOptions({ remember_current_site: false });
						location.reload();
					}
				});
			}, 3e3);
		}
		await scanner.waitFirstImage(Infinity);
		core.toast.dismiss("no_img");
		return scanner.imgList;
	} });
	setState("manga", { onShowImgsChange: helper.throttle((showImgs) => {
		if (!store.manga.show) return;
		scanner.slotElements[[...showImgs].at(-1)]?.scrollIntoView({
			behavior: "instant",
			block: "end"
		});
	}, 1e3) });
	helper.createEffectOn(() => store.manga.show, (show) => {
		if (show) {
			laseScroll = window.scrollY;
			scanner.triggerLazyLoad();
		} else window.scroll({
			top: laseScroll,
			behavior: "instant"
		});
	});
	helper.onUrlChange((lastUrl, nowUrl) => {
		if (!lastUrl || lastUrl.split("/").length === nowUrl.split("/").length) return;
		setState("comicMap", "", "imgList", void 0);
	});
};
//#endregion
exports.otherSite = otherSite;
`,"userscript/ehTagRules":`
//#region src/userscript/ehTagRules/index.ts
const rules = {
	"prerequisite": {
		"(x|f):incest": [
			"f:cousin",
			"f:aunt",
			"f:daughter",
			"f:mother",
			"f:granddaughter",
			"f:sister",
			"f:grandmother",
			"f:niece"
		],
		"(x|m):incest": ["m:cousin"],
		"f:incest": ["f:inseki", "f:low_incest"],
		"m:incest": ["m:inseki", "m:low_incest"],
		"x:incest": ["x:inseki", "x:low_incest"],
		"f:group": [
			"f:fff_threesome",
			"f:ttt_threesome",
			"f:fft_threesome",
			"f:ttf_threesome"
		],
		"m:group": ["m:mmm_threesome"],
		"x:group": [
			"x:mmf_threesome",
			"x:mmt_threesome",
			"x:ttm_threesome",
			"x:ffm_threesome",
			"x:mtf_threesome",
			"x:oyakodon",
			"x:shimaidon",
			"x:gang_rape"
		],
		"(x|f):group": [
			"f:oyakodon",
			"f:shimaidon",
			"f:multiple_straddling",
			"f:gang_rape",
			"f:layer_cake",
			"f:harem"
		],
		"(x|m):group": [
			"m:oyakodon",
			"m:shimaidon",
			"m:multiple_straddling",
			"m:gang_rape",
			"m:layer_cake",
			"m:harem"
		],
		"f:yuri": ["f:fff_threesome"],
		"m:yaoi": ["m:group", "m:mmm_threesome"],
		"f:futanari": [
			"f:ttt_threesome",
			"f:fft_threesome",
			"f:ttf_threesome",
			"f:full-packaged_futanari",
			"f:futanarization"
		],
		"f:shemale": ["f:ball-less_shemale"],
		"f:lolicon": [
			"f:kodomo_doushi",
			"x:kodomo_doushi",
			"f:oppai_loli",
			"f:mesugaki",
			"f:low_lolicon"
		],
		"m:shotacon": ["m:kodomo_doushi", "x:kodomo_doushi"],
		"f:blowjob": [
			"f:multimouth_blowjob",
			"f:blowjob_face",
			"f:deepthroat",
			"f:focus_blowjob"
		],
		"m:blowjob": [
			"m:multimouth_blowjob",
			"m:blowjob_face",
			"m:deepthroat",
			"m:focus_blowjob"
		],
		"f:handjob": ["f:multiple_handjob"],
		"m:handjob": ["m:multiple_handjob"],
		"f:assjob": ["f:multiple_assjob"],
		"m:assjob": ["m:multiple_assjob"],
		"f:footjob": ["f:multiple_footjob"],
		"m:footjob": ["m:multiple_footjob"],
		"f:paizuri": ["f:focus_paizuri"],
		"m:paizuri": ["m:focus_paizuri"],
		"f:rimjob": ["f:focus_rimjob"],
		"m:rimjob": ["m:focus_rimjob"],
		"f:cunnilingus": ["f:focus_cunnilingus"],
		"f:anal": [
			"f:focus_anal",
			"f:anal_intercourse",
			"f:tail_plug",
			"f:butt_plug"
		],
		"m:anal": [
			"m:focus_anal",
			"m:anal_intercourse",
			"m:tail_plug",
			"m:butt_plug"
		],
		"f:rape": ["f:gang_rape"],
		"m:rape": ["m:gang_rape"],
		"(f|m):corpse": ["f:necrophilia", "m:necrophilia"],
		"(f|m):masturbation": ["f:phone_sex", "m:phone_sex"],
		"f:bondage": [
			"f:fanny_packing",
			"f:shibari",
			"f:straitjacket"
		],
		"m:bondage": [
			"m:fanny_packing",
			"m:shibari",
			"m:straitjacket"
		],
		"f:inflation": ["f:cumflation"],
		"m:inflation": ["m:cumflation"],
		"f:lactation": ["f:milking"],
		"m:lactation": ["m:milking"],
		"f:piercing": ["f:nipple_piercing", "f:genital_piercing"],
		"m:piercing": ["m:nipple_piercing", "m:genital_piercing"],
		"f:big_breasts": ["f:huge_breasts", "f:gigantic_breasts"],
		"f:huge_breasts": ["f:gigantic_breasts"],
		"f:sex_toys": [
			"f:tail_plug",
			"f:butt_plug",
			"f:unusual_insertions"
		],
		"m:sex_toys": [
			"m:tail_plug",
			"m:butt_plug",
			"m:unusual_insertions"
		],
		"f:swimsuit": ["f:bikini"],
		"m:swimsuit": ["m:bikini"],
		"f:crossdressing": ["f:schoolboy_uniform"],
		"f:bandages": ["f:sarashi"],
		"f:monster_girl": ["f:zombie", "f:skeleton"],
		"f:tail": ["f:multiple_tails"],
		"(f|m):robot": ["f:dismantling", "m:dismantling"]
	},
	"conflict": {
		"f:females_only": [
			"f:futanari",
			"f:bisexual",
			"f:ttt_threesome",
			"f:fft_threesome",
			"f:ttf_threesome",
			"x:mmf_threesome",
			"x:mmt_threesome",
			"x:ttm_threesome",
			"x:mtf_threesome",
			"x:group",
			"m:*",
			"x:*"
		],
		"f:sole_female": [
			"f:ttt_threesome",
			"f:fft_threesome",
			"x:mmt_threesome",
			"x:ttm_threesome",
			"m:mmm_threesome"
		],
		"f:sole_dickgirl": [
			"f:fff_threesome",
			"f:ttt_threesome",
			"f:ttf_threesome",
			"x:mmf_threesome",
			"x:ttm_threesome",
			"m:mmm_threesome"
		]
	},
	"possibleConflict": {
		"f:dark_skin": ["f:tanlines"],
		"m:dark_skin": ["m:tanlines"],
		"f:lolicon": ["f:small_breasts"],
		"f:breast_feeding": ["f:nipple_stimulation"]
	},
	"combo": {
		"f:kemonomimi": [
			"f:horse_girl",
			"f:dog_girl",
			"f:mouse_girl",
			"f:bunny_girl",
			"f:catgirl",
			"f:cowgirl",
			"c:amiya",
			"c:rosmontis",
			"c:suzuran",
			"c:shamare",
			"c:schwarz"
		],
		"f:tail": [
			"f:horse_girl",
			"c:suzuran",
			"c:schwarz",
			"c:yuko_yoshida"
		],
		"f:leotard": ["f:bunny_girl"],
		"f:horns": ["f:oni", "c:yuko_yoshida"],
		"f:horse_girl": ["p:uma_musume_pretty_derby"],
		"f:halo": [
			"p:blue_archive",
			"c:nagisa_kirifuji",
			"c:mika_misono"
		],
		"f:zombie": ["p:zombie_land_saga"],
		"f:hair_buns": [
			"c:ayumu_uehara",
			"c:yoshiko_tsushima",
			"c:chisato_arashi",
			"c:ceylon"
		],
		"f:twintails": [
			"c:yu_takasaki",
			"c:rurino_osawa",
			"c:sayaka_murano",
			"c:nico_yazawa",
			"c:nozomi_tojo",
			"c:ruby_kurosawa",
			"c:ria_kazuno",
			"c:arisa_ichigaya",
			"c:himari_uehara",
			"c:ako_udagawa",
			"c:reona_nyubara",
			"c:tsukushi_futaba",
			"c:kotone_fujita"
		],
		"f:ponytail": [
			"c:hime_anyoji",
			"c:eli_ayase",
			"c:honoka_kosaka",
			"c:kanan_matsuura",
			"c:seira_kazuno",
			"c:ren_hazuki",
			"c:saaya_yamabuki",
			"c:nijika_ijichi",
			"c:schwarz",
			"c:mafuyu_asahina"
		],
		"f:very_long_hair": [
			"c:hitori_gotou",
			"c:nijika_ijichi",
			"c:euphyllia_magenta",
			"c:nagisa_kirifuji",
			"c:mika_misono",
			"c:kanade_yoisaki"
		],
		"f:lolicon": ["c:suzuran", "c:shamare"],
		"f:multiple_tails": ["c:suzuran"],
		"f:wings": [
			"c:remilia_scarlet",
			"c:flandre_scarlet",
			"c:koakuma",
			"c:nagisa_kirifuji",
			"c:mika_misono"
		],
		"f:vampire": ["c:remilia_scarlet", "c:flandre_scarlet"],
		"f:demon_girl": ["c:koakuma", "c:yuko_yoshida"],
		"f:thick_eyebrows": ["c:suletta_mercury"],
		"f:glasses": ["c:junna_hoshimi"],
		"f:beauty_mark": ["c:misuzu_hataya"],
		"m:crossdressing": ["c:mizuki_akiyama"],
		"f:angel": ["c:nagisa_kirifuji", "c:mika_misono"]
	}
};
const getTagLintRules = () => {
	const shortNamespace = new Map([
		["p", "parody"],
		["c", "character"],
		["g", "group"],
		["a", "artist"],
		["m", "male"],
		["f", "female"],
		["x", "mixed"],
		["o", "other"]
	].map(([short, full]) => [new RegExp(\`\\\\b\${short}\\\\b(?=.*:)\`, "u"), full]));
	const getTagName = (tag) => {
		let fullTag = tag;
		for (const re of shortNamespace.keys()) if (re.test(fullTag)) fullTag = fullTag.replace(re, shortNamespace.get(re));
		return fullTag;
	};
	const createRuleMap = (map, reverse = false) => {
		const ruleMap = /* @__PURE__ */ new Map();
		if (reverse) for (let [targetTag, tags] of Object.entries(map)) {
			targetTag = getTagName(targetTag);
			for (let tag of tags) {
				tag = getTagName(tag);
				if (ruleMap.has(tag)) ruleMap.get(tag).add(targetTag);
				else ruleMap.set(tag, /* @__PURE__ */ new Set([targetTag]));
			}
		}
		else for (const [tag, targetTag] of Object.entries(map)) ruleMap.set(getTagName(tag), new Set(targetTag.map(getTagName)));
		return ruleMap;
	};
	return {
		prerequisite: createRuleMap(rules.prerequisite, true),
		conflict: createRuleMap(rules.conflict),
		possibleConflict: createRuleMap(rules.possibleConflict),
		combo: createRuleMap(rules.combo, true)
	};
};
/** \u62C6\u5206\u591A\u4E2A\u547D\u540D\u7A7A\u95F4\u7684\u6807\u7B7E */
const splitTagNamespace = (tag) => {
	if (!tag.startsWith("(")) return [tag];
	const { namespaces, tagName } = /\\((?<namespaces>.+?)\\)(?<tagName>.+)/u.exec(tag).groups;
	return namespaces.split("|").map((namespace) => \`\${namespace}\${tagName}\`);
};
/** \u5224\u65AD\u662F\u5426\u7F3A\u5C11\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u6807\u7B7E */
const isMissingNamespace = (tagList, ...namespaces) => {
	for (const namespace of namespaces) for (const tag of tagList) if (tag.startsWith(namespace)) return false;
	return true;
};
/** \u68C0\u67E5\u6807\u7B7E\u662F\u5426\u5B58\u5728 */
const hasTag = (tagList, tagName) => {
	if (tagName.startsWith("(")) {
		for (const tag of splitTagNamespace(tagName)) if (tagList.has(tag)) return true;
	}
	if (tagName.endsWith(":*")) return !isMissingNamespace(tagList, tagName.split(":*")[0]);
	return tagList.has(tagName);
};
/** \u5224\u65AD\u662F\u5426\u7F3A\u5C11\u6307\u5B9A\u6807\u7B7E */
const isMissingTags = (tagList, ...tags) => {
	for (const tag of tags) if (tagList.has(tag)) return false;
	return true;
};
//#endregion
exports.getTagLintRules = getTagLintRules;
exports.hasTag = hasTag;
exports.isMissingNamespace = isMissingNamespace;
exports.isMissingTags = isMissingTags;
exports.splitTagNamespace = splitTagNamespace;
`,"site/copymanga":`
let solid_js_web = require("solid-js/web");
let core = require("core");
let helper = require("helper");
let solid_js = require("solid-js");
let userscript_copyApi = require("userscript/copyApi");
//#region src/site/copymanga.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<span>\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<div class=table-default><div class=table-default-title><ul class="nav nav-tabs"role=tablist></ul><div class=table-default-right><span>\u66F4\u65B0\u5167\u5BB9\uFF1A</span><a target=_blank></a><span>\u66F4\u65B0\u6642\u9593\uFF1A</span><span></span></div></div><div class=table-default-box><div class=tab-content>\`);
var _tmpl$3 = /*#__PURE__*/ solid_js_web.template(\`<div class="detailsTextContentTabs van-tabs van-tabs--line">\`);
var _tmpl$4 = /*#__PURE__*/ solid_js_web.template(\`<div class=van-tabs__wrap><div role=tablist class="van-tabs__nav van-tabs__nav--line"style=background:transparent><div role=tab class="van-tab van-tab--active"><span class="van-tab__text van-tab__text--ellipsis"><span></span></span></div><div class=van-tabs__line style="width:0.24rem;transform:translateX(187.5px) translateX(-50%);transition-duration:0.3s">\`);
var _tmpl$5 = /*#__PURE__*/ solid_js_web.template(\`<div class=van-tab__pane><div class="chapterList van-grid"style=padding-left:0.24rem>\`);
var _tmpl$6 = /*#__PURE__*/ solid_js_web.template(\`<div class="chapterItem oneLines van-grid-item"style=flex-basis:25%;padding-right:0.24rem;margin-top:0.24rem><a class="van-grid-item__content van-grid-item__content--center"><span class=van-grid-item__text>\`);
var _tmpl$7 = /*#__PURE__*/ solid_js_web.template(\`<li class=nav-item><a class=nav-link data-toggle=tab role=tab aria-selected=false>\`);
var _tmpl$8 = /*#__PURE__*/ solid_js_web.template(\`<div role=tabpanel class="tab-pane fade"><ul>\`);
var _tmpl$9 = /*#__PURE__*/ solid_js_web.template(\`<a target=_blank style=display:block><li>\`);
var _tmpl$0 = /*#__PURE__*/ solid_js_web.template(\`<div class=card style="max-width:100em;margin:1em auto"><div class=card-body><h2 class=card-title></h2><ul>\`);
var _tmpl$1 = /*#__PURE__*/ solid_js_web.template(\`<a class="btn btn-outline-primary">\`);
const handleLastChapter = (comicName) => {
	let a;
	const stylesheet = new CSSStyleSheet();
	document.adoptedStyleSheets.push(stylesheet);
	const updateLastChapter = async () => {
		if (!a) (async () => {
			a = document.createElement("a");
			const tableRight = await helper.wait(() => helper.querySelector(".table-default-right"));
			a.target = "_blank";
			tableRight.firstElementChild?.before(a);
			const span = document.createElement("span");
			span.textContent = "\u6700\u5F8C\u95B1\u8B80\uFF1A";
			tableRight.firstElementChild?.before(span);
		})();
		a.textContent = "\u7372\u53D6\u4E2D";
		a.removeAttribute("href");
		try {
			const data = (await userscript_copyApi.getLastChapter(comicName)).response?.results?.browse;
			if (!data) {
				a.textContent = data === null ? "\u7121" : "\u672A\u8FD4\u56DE\u6578\u64DA";
				return;
			}
			const lastChapterId = data.chapter_id;
			if (!lastChapterId) {
				a.textContent = "\u63A5\u53E3\u7570\u5E38";
				return;
			}
			await stylesheet.replace(\`ul a[href*="\${lastChapterId}"] {
        color: #fff !important;
        background: #1790E6;
      }\`);
			a.href = \`\${location.pathname}/chapter/\${lastChapterId}\`;
			a.textContent = data.chapter_name;
		} catch {
			a.textContent = "\u7372\u53D6\u95B1\u8B80\u8A18\u9304\u5931\u6557";
		}
	};
	setTimeout(updateLastChapter);
	document.addEventListener("visibilitychange", updateLastChapter);
};
const buildChapters = async (comicName, hiddenType) => {
	const data = await userscript_copyApi.getChapters(comicName);
	helper.log(data);
	const { build: { type }, groups } = data;
	const Group = (props) => {
		const chapters = Object.fromEntries(type.map(({ id }) => [id, []]));
		for (const chapter of props.chapters) chapters[chapter.type].push(chapter);
		return solid_js_web.createComponent(solid_js.Switch, { get children() {
			return [
				solid_js_web.createComponent(solid_js.Match, {
					when: hiddenType === "mobile",
					get children() {
						return (() => {
							for (const dom of helper.querySelectorAll(".van-divider")) dom.remove();
							return (() => {
								var _el$10 = _tmpl$3();
								solid_js_web.insert(_el$10, solid_js_web.createComponent(solid_js.For, {
									each: type,
									children: ({ id, name }) => solid_js_web.createComponent(solid_js.Show, {
										get when() {
											return chapters[id].length;
										},
										get children() {
											return [(() => {
												var _el$11 = _tmpl$4(), _el$13 = _el$11.firstChild.firstChild, _el$15 = _el$13.firstChild.firstChild;
												_el$13.nextSibling;
												solid_js_web.insert(_el$15, name);
												return _el$11;
											})(), (() => {
												var _el$17 = _tmpl$5(), _el$18 = _el$17.firstChild;
												solid_js_web.insert(_el$18, solid_js_web.createComponent(solid_js.For, {
													get each() {
														return chapters[id];
													},
													children: (chapter) => (() => {
														var _el$19 = _tmpl$6(), _el$20 = _el$19.firstChild, _el$21 = _el$20.firstChild;
														solid_js_web.insert(_el$21, () => chapter.name);
														solid_js_web.effect((_p$) => {
															var _v$ = !!(props.last_chapter.uuid === chapter.id), _v$2 = \`/comic/\${comicName}/chapter/\${chapter.id}\`;
															_v$ !== _p$.e && _el$19.classList.toggle("red", _p$.e = _v$);
															_v$2 !== _p$.t && solid_js_web.setAttribute(_el$20, "href", _p$.t = _v$2);
															return _p$;
														}, {
															e: void 0,
															t: void 0
														});
														return _el$19;
													})()
												}));
												return _el$17;
											})()];
										}
									})
								}));
								return _el$10;
							})();
						})();
					}
				}),
				solid_js_web.createComponent(solid_js.Match, {
					when: hiddenType === "web",
					get children() {
						return [(() => {
							var _el$ = _tmpl$();
							solid_js_web.insert(_el$, () => props.name);
							return _el$;
						})(), (() => {
							var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$7 = _el$4.nextSibling.firstChild.nextSibling, _el$9 = _el$7.nextSibling.nextSibling, _el$1 = _el$3.nextSibling.firstChild;
							solid_js_web.insert(_el$4, solid_js_web.createComponent(solid_js.For, {
								each: type,
								children: ({ id, name }) => (() => {
									var _el$22 = _tmpl$7(), _el$23 = _el$22.firstChild;
									solid_js_web.insert(_el$23, name);
									solid_js_web.effect((_p$) => {
										var _v$3 = !!(chapters[id].length === 0), _v$4 = \`#\${props.path_word}\${name}\`;
										_v$3 !== _p$.e && _el$23.classList.toggle("disabled", _p$.e = _v$3);
										_v$4 !== _p$.t && solid_js_web.setAttribute(_el$23, "href", _p$.t = _v$4);
										return _p$;
									}, {
										e: void 0,
										t: void 0
									});
									return _el$22;
								})()
							}));
							solid_js_web.insert(_el$7, () => props.last_chapter.name);
							solid_js_web.insert(_el$9, () => props.last_chapter.datetime_created);
							solid_js_web.insert(_el$1, solid_js_web.createComponent(solid_js.For, {
								each: type,
								children: ({ id, name }) => (() => {
									var _el$24 = _tmpl$8(), _el$25 = _el$24.firstChild;
									solid_js_web.insert(_el$25, solid_js_web.createComponent(solid_js.For, {
										get each() {
											return chapters[id];
										},
										children: (chapter) => (() => {
											var _el$26 = _tmpl$9(), _el$27 = _el$26.firstChild;
											solid_js_web.insert(_el$27, () => chapter.name);
											solid_js_web.effect((_p$) => {
												var _v$5 = \`/comic/\${comicName}/chapter/\${chapter.id}\`, _v$6 = chapter.name;
												_v$5 !== _p$.e && solid_js_web.setAttribute(_el$26, "href", _p$.e = _v$5);
												_v$6 !== _p$.t && solid_js_web.setAttribute(_el$26, "title", _p$.t = _v$6);
												return _p$;
											}, {
												e: void 0,
												t: void 0
											});
											return _el$26;
										})()
									}));
									solid_js_web.effect(() => solid_js_web.setAttribute(_el$24, "id", \`\${props.path_word}\${name}\`));
									return _el$24;
								})()
							}));
							solid_js_web.effect(() => solid_js_web.setAttribute(_el$7, "href", \`/comic/\${comicName}/chapter/\${props.last_chapter.comic_id}\`));
							return _el$2;
						})()];
					}
				}),
				solid_js_web.createComponent(solid_js.Match, {
					when: true,
					get children() {
						return solid_js_web.createComponent(solid_js.For, {
							each: type,
							children: ({ id, name }) => solid_js_web.createComponent(solid_js.Show, {
								get when() {
									return chapters[id].length;
								},
								get children() {
									var _el$28 = _tmpl$0(), _el$30 = _el$28.firstChild.firstChild, _el$31 = _el$30.nextSibling;
									solid_js_web.insert(_el$30, name);
									solid_js_web.insert(_el$31, solid_js_web.createComponent(solid_js.For, {
										get each() {
											return chapters[id];
										},
										children: (chapter) => (() => {
											var _el$32 = _tmpl$1();
											solid_js_web.insert(_el$32, () => chapter.name);
											solid_js_web.effect((_p$) => {
												var _v$7 = !!(props.last_chapter.uuid === chapter.id), _v$8 = \`/comic/\${comicName}/chapter/\${chapter.id}\`;
												_v$7 !== _p$.e && _el$32.classList.toggle("active", _p$.e = _v$7);
												_v$8 !== _p$.t && solid_js_web.setAttribute(_el$32, "href", _p$.t = _v$8);
												return _p$;
											}, {
												e: void 0,
												t: void 0
											});
											return _el$32;
										})()
									}));
									return _el$28;
								}
							})
						});
					}
				})
			];
		} });
	};
	let root;
	switch (hiddenType) {
		case "mobile":
			root = helper.querySelector(".detailsTextContent");
			for (const element of helper.querySelectorAll("button.van-dialog__confirm")) element.click();
			break;
		case "web":
			root = helper.querySelector(".upLoop");
			root.textContent = "";
			break;
		default:
			root = helper.querySelector("main");
			root.textContent = "";
			helper.css\`
        ul .btn {
          width: fit-content;
          height: fit-content;
          margin: 1em;
        }
      \`;
	}
	solid_js_web.render(() => solid_js_web.createComponent(solid_js.For, {
		get each() {
			return Object.values(groups);
		},
		children: Group
	}), root);
	for (const group of helper.querySelectorAll(".upLoop .table-default-title")) group.querySelector(".nav-link:not(.disabled)")?.click();
};
core.setupSiteAdapter({
	name: "copymanga",
	getPageContext: async () => {
		let comicName = "";
		let id = "";
		if (location.href.includes("/chapter/")) [, , comicName, , id] = location.pathname.split("/");
		else if (location.href.includes("/comicContent/")) [, , , comicName, id] = location.pathname.split("/");
		if (comicName && id) return {
			type: "manga",
			comicName,
			id
		};
		if (!id && location.href.includes("/comic/")) {
			[, comicName] = location.href.split("/comic/");
			if (!comicName) return;
			const isMobile = location.href.includes("/h5/");
			let hiddenType;
			if (document.title === "404 - \u62F7\u8C9D\u6F2B\u756B") hiddenType = isMobile ? "mobile" : "404";
			else if (isMobile) {
				await helper.wait(() => helper.querySelector(".van-toast__text")?.parentElement?.style.display === "none");
				hiddenType = await helper.wait(() => {
					if (helper.querySelector(".isBan")?.textContent?.includes("\u4E0D\u63D0\u4F9B\u95B1\u89BD")) return "mobile";
					const dialog = helper.querySelector(".van-dialog__message");
					if (dialog?.textContent?.includes("\u6F2B\u756B\u672A\u627E\u5230")) {
						dialog.textContent = "\u6F2B\u756B\u672A\u627E\u5230!\\n\u8ACB\u5750\u548C\u653E\u5BEC\uFF0C\u7B49\u5F85\u76EE\u9304\u751F\u6210";
						for (const element of helper.querySelectorAll(".detailsTextContentTabs")) element.remove();
						return "mobile";
					}
				}, 1e3);
			} else if (Boolean(helper.querySelector(".wargin")?.textContent?.includes("\u4E0D\u63D0\u4F9B\u95B1\u89BD")) || !await helper.wait(() => helper.querySelector(".upLoop .table-default-title"), 1e3) || !await helper.wait(() => helper.querySelector("main .upLoop ul a li"), 2e3)) hiddenType = helper.querySelector(".comicParticulars-title") ? "web" : "404";
			return {
				type: "catalog",
				comicName,
				hiddenType,
				isMobile
			};
		}
	},
	handlers: {
		manga: ({ setState }, { comicName, id }) => {
			/** \u6F2B\u753B\u4E0D\u5B58\u5728\u65F6\u624D\u4F1A\u51FA\u73B0\u7684\u63D0\u793A */
			const titleDom = helper.querySelector("main .img+.title");
			if (titleDom) titleDom.textContent = "ComicRead \u63D0\u793A\u60A8\uFF1A\u4F60\u8A2A\u554F\u7684\u5167\u5BB9\u66AB\u4E0D\u5B58\u5728\uFF0C\u8ACB\u9EDE\u9078\u53F3\u4E0B\u89D2\u6309\u9215\u5617\u8A66\u52A0\u8F09\u6F2B\u756B";
			/** \u901A\u8FC7\u7F51\u9875 API \u52A0\u8F7D\u6F2B\u753B\uFF08\u53EF\u4EE5\u83B7\u53D6\u9690\u85CF\u6F2B\u753B\uFF09 */
			const getImgListByApi = async () => {
				const data = await userscript_copyApi.getChapterData(comicName, id);
				if (data.status !== 200) {
					const message = \`\u6F2B\u756B\u52A0\u8F09\u5931\u6557\uFF1A\${data.message || data.status}\`;
					if (titleDom) titleDom.textContent = message;
					throw new Error(message);
				}
				if (titleDom) {
					titleDom.textContent = "\u6F2B\u756B\u52A0\u8F09\u6210\u529F\u{1F973}";
					document.title = \`\${data.comicName} - \${data.chapter.name} - \u62F7\u8C9D\u6F2B\u756B \u62F7\u8D1D\u6F2B\u753B\`;
				}
				if (titleDom ?? !helper.querySelector(".comicContent-next")) {
					const { next, prev } = data.chapter;
					setState("manga", {
						onNext: next ? () => location.assign(\`/comic/\${comicName}/chapter/\${next}\`) : void 0,
						onPrev: prev ? () => location.assign(\`/comic/\${comicName}/chapter/\${prev}\`) : void 0
					});
				}
				return data.urls;
			};
			setState("comicMap", "", { async getImgList() {
				if (helper.querySelector(".comicContent-next")) setState("manga", {
					onNext: helper.querySelectorClick(".comicContent-next a:not(.prev-null)"),
					onPrev: helper.querySelectorClick(".comicContent-prev:not(.index,.list) a:not(.prev-null)")
				});
				if (titleDom) return getImgListByApi();
				try {
					const imgList = await userscript_copyApi.getImglistByHtml(\`\${location.origin}/comic/\${comicName}/chapter/\${id}\`);
					if (imgList.length === 0) throw new Error("\u89E3\u6790\u7DB2\u9801\u8B8A\u91CF\u5931\u6557");
					return imgList;
				} catch (error) {
					helper.log.error(error);
					return getImgListByApi();
				}
			} });
			(async () => {
				const chapter_id = location.pathname.split("/").at(-1);
				const comments = await userscript_copyApi.getComments(chapter_id);
				if (comments.length > 0) setState("manga", "commentList", comments);
			})();
		},
		catalog: async (_, { comicName, hiddenType, isMobile }) => {
			if (hiddenType) {
				const tip = helper.querySelector(".isBan, .wargin");
				if (tip) tip.style.textDecoration = "line-through";
				const titleDom = helper.querySelector("main .img+.title");
				if (titleDom) titleDom.textContent = "ComicRead \u63D0\u793A\u60A8\uFF1A\u4F60\u8A2A\u554F\u7684\u5167\u5BB9\u66AB\u4E0D\u5B58\u5728\uFF0C\u8ACB\u5750\u548C\u653E\u5BEC\uFF0C\u7B49\u5F85\u76EE\u9304\u751F\u6210";
				try {
					await buildChapters(comicName, hiddenType);
				} catch (error) {
					helper.log.error(error);
					if (titleDom) titleDom.textContent = "ComicRead \u63D0\u793A\u60A8\uFF1A\u76EE\u9304\u751F\u6210\u5931\u6557\u{1F622}";
					core.toast.error("\u76EE\u9304\u751F\u6210\u5931\u6557\u{1F622}", { duration: Infinity });
				}
			}
			if (!isMobile && userscript_copyApi.token) handleLastChapter(comicName);
		}
	}
});
//#endregion
`,"site/ehentai":`
let solid_js_web = require("solid-js/web");
let components_Manga = require("components/Manga");
let core = require("core");
let helper = require("helper");
let solid_js = require("solid-js");
let solid_js_store = require("solid-js/store");
let components_Toast = require("components/Toast");
let request = require("request");
let components_InputDialog = require("components/InputDialog");
let userscript_multiSelect = require("userscript/multiSelect");
let userscript_detectAd = require("userscript/detectAd");
let userscript_ehTagRules = require("userscript/ehTagRules");
//#region src/site/ehentai/myTags.ts
const getTagSetHtml = async (tagset) => {
	const url = tagset ? \`/mytags?tagset=\${tagset}\` : "/mytags";
	const res = await core.request(url, { fetch: true });
	return helper.domParse(res.responseText);
};
const collectTags = (html, tagList = []) => {
	const defaultColor = html.querySelector("#tagcolor").value.slice(1) || "0";
	const [, ...tagEleList] = [...html.getElementById("usertags_outer").children];
	for (const e of tagEleList) {
		const id = Number(e.id.split("usertag_")[1]);
		const preview = e.querySelector(\`#tagpreview_\${id}\`);
		const { color: fontColor, borderColor } = preview.style;
		let [group, name] = preview.title.split(":");
		switch (group) {
			case "female":
			case "male":
			case "mixed": group = "gender";
		}
		const color = Number.parseInt(e.querySelector(\`#tagcolor_\${id}\`).value.slice(1) || defaultColor, 16);
		tagList.push({
			e,
			id,
			title: preview.title,
			color,
			fontColor,
			borderColor,
			group,
			name,
			weight: Number(e.querySelector("input[id^=tagweight_]").value),
			watch: e.querySelector(\`#tagwatch_\${id}\`).checked,
			hidden: e.querySelector(\`#taghide_\${id}\`).checked,
			order: -1
		});
	}
	return tagList;
};
const sortTagList = (tagList) => {
	const collator = new Intl.Collator();
	const sortFn = (a, b) => {
		if (a.color !== b.color) return b.color - a.color;
		if (a.group !== b.group) return collator.compare(a.group, b.group);
		if (a.hidden !== b.hidden) return a.hidden ? 1 : -1;
		if (a.watch !== b.watch) return a.watch ? -1 : 1;
		if (a.weight !== b.weight) return b.weight - a.weight;
		return collator.compare(a.name, b.name);
	};
	let i = -tagList.length;
	for (const tag of tagList.sort(sortFn)) tag.order = i++;
	return tagList;
};
const getMyTags = async () => {
	const tagSetList = [];
	const defaultTagSet = await getTagSetHtml();
	await Promise.all([...defaultTagSet.querySelectorAll("#tagset_outer select option")].map(async (option) => {
		const tagSet = option.selected ? defaultTagSet : await getTagSetHtml(option.value);
		if (tagSet.querySelector("#tagset_enable")?.checked) tagSetList.push(tagSet);
	}));
	const tagList = [];
	for (const html of tagSetList) collectTags(html, tagList);
	return sortTagList(tagList);
};
const handleMyTagsChange = /* @__PURE__ */ new Set();
const updateMyTags = async () => {
	const tagList = await getMyTags();
	for (const fn of handleMyTagsChange) await fn(tagList);
};
//#endregion
//#region src/site/ehentai/sortTags.ts
const updateSortCss = (tagList) => {
	let cssText = "tr a :is(.gltm, .glink + div:not([class])) { display: flex; }";
	for (const { title, order } of tagList) cssText += \`\\n.gt[title="\${title}"] { order: \${order}; }\`;
	return GM.setValue("ehTagSortCss", cssText);
};
/** \u6309\u7167 mytags \u4E0A\u914D\u7F6E\u7684\u6807\u7B7E\u987A\u5E8F\u5BF9\u5176\u4ED6\u9875\u9762\u4E0A\u7684\u6807\u7B7E\u8FDB\u884C\u6392\u5E8F */
const sortTags = async (pageCtx) => {
	handleMyTagsChange.add(updateSortCss);
	switch (pageCtx.type) {
		case "p":
		case "l":
		case "t": return helper.css(await helper.ensureGmValue("ehTagSortCss", updateMyTags));
		case "mytags": {
			let style;
			const sortDom = (tagList) => {
				let cssText = \`
          #usertags_outer { display: flex; flex-direction: column; }
          #usertags_outer > div { margin: unset; }
          #usertag_0 { order: -\${tagList.length}; }\`;
				for (const { order, id } of tagList) cssText += \`\\n#usertag_\${id} { view-transition-name: _\${id}; order: \${order}; }\`;
				style ||= GM_addElement("style", { textContent: cssText });
				style.textContent = cssText;
			};
			handleMyTagsChange.add((tagList) => {
				if (!document.startViewTransition) return sortDom(tagList);
				document.startViewTransition(() => sortDom(tagList));
			});
		}
	}
};
//#endregion
//#region src/site/ehentai/colorizeTag.ts
const buildTagList = (tagList, prefix) => \`\\n\${Array.from(tagList, (tag) => \`\${prefix}\${CSS.escape(tag)}\`).join(",\\n")}\\n\`;
/** \u83B7\u53D6\u6700\u65B0\u7684\u6807\u7B7E\u989C\u8272\u6570\u636E */
const updateTagColor = async (tagList) => {
	const backgroundMap = {};
	const borderMap = {};
	const colorMap = {};
	for (const tag of tagList) {
		const { color, borderColor, fontColor } = tag;
		const title = tag.title.replaceAll(" ", "_");
		(backgroundMap[color] ||= /* @__PURE__ */ new Set()).add(title);
		(borderMap[borderColor] ||= /* @__PURE__ */ new Set()).add(title);
		(colorMap[fontColor] ||= /* @__PURE__ */ new Set()).add(title);
	}
	let cssText = "";
	for (const [background, tags] of Object.entries(backgroundMap)) {
		cssText += \`:is(\${buildTagList(tags, "#td_")})\`;
		cssText += \`{ background: #\${Number(background).toString(16).padStart(6, "0")}; }\\n\\n\`;
	}
	for (const [border, tags] of Object.entries(borderMap)) {
		cssText += \`:is(\${buildTagList(tags, "#td_")}).gt\`;
		cssText += \`{ border-color: \${border}; }\\n\\n\`;
	}
	for (const [color, tags] of Object.entries(colorMap)) {
		cssText += \`:is(\${buildTagList(tags, "#td_")}):not(.gt)\`;
		cssText += \`{ border-color: \${color}; }\\n\\n\`;
		cssText += \`#taglist a:is(\${buildTagList(tags, "#ta_")})\`;
		cssText += \`{ color: \${color} !important; position: relative; }\\n\\n\`;
	}
	cssText += \`
    /* \u7981\u7528 eh \u7684\u53D8\u8272\u6548\u679C\uFF0C\u5FC5\u987B\u4F7F\u7528 !important */
    #taglist a[id] { color: var(--tag) !important; position: relative; }
    #taglist a[id]:hover { color: var(--tag-hover) !important; }

    #taglist a[id]::after {
      content: "";
      background: var(--color);
      width: 100%;
      position: absolute;
      left: 0;
      height: 2px;
      bottom: -7px;
    }
    .tup { --color: var(--tup) }
    .tdn { --color: var(--tdn) }
    #taglist a[id][style="color: blue;"] { --color: blue; }

    /* \u907F\u514D\u88AB\u4E0A\u4E00\u884C\u7684\u4E0B\u5212\u7EBF\u78B0\u5230 */
    #taglist div:is(.gt, .gtl, .gtw) { margin-top: 1px; }
  \`;
	await GM.setValue("ehTagColorizeCss", cssText);
	return cssText;
};
/** \u6807\u7B7E\u67D3\u8272 */
const colorizeTag = async (_, pageCtx) => {
	handleMyTagsChange.add(updateTagColor);
	switch (pageCtx.type) {
		case "t":
		case "gallery": {
			let cssText = getComputedStyle(document.body).backgroundColor === "rgb(52, 53, 59)" ? "--tag: #DDDDDD; --tag-hover: #EEEEEE; --tup: #00E639; --tdn: #FF3333;" : "--tag: #5C0D11; --tag-hover: #8F4701; --tup: green; --tdn: red;";
			cssText = \`#taglist { \${cssText} }\\n\\n\`;
			cssText += await helper.ensureGmValue("ehTagColorizeCss", updateMyTags);
			helper.css(cssText);
			break;
		}
		case "mytags":
			helper.hijackFn("usertag_callback", helper.debounce(updateMyTags));
			await updateMyTags();
	}
	await sortTags(pageCtx);
};
//#endregion
//#region src/userscript/nhentaiApi.ts
const nhApi = (url, details) => core.request(url, {
	responseType: "json",
	headers: { "User-Agent": navigator.userAgent },
	fetch: false,
	...details
});
const getNhentaiData = async (id) => {
	const { response } = await nhApi(\`https://nhentai.net/api/v2/galleries/\${id}\`, {
		errorText: helper.t("site.ehentai.nhentai_error"),
		noTip: true
	});
	return response;
};
const searchNhentai = async (title) => {
	const { response } = await nhApi(\`https://nhentai.net/api/v2/search?query=\${encodeURIComponent(title)}\`, {
		errorText: helper.t("site.ehentai.nhentai_error"),
		noTip: true
	});
	return response.result;
};
const toImgList = (data) => data.pages.map((page) => ({
	src: \`https://i.nhentai.net/\${page.path}\`,
	width: page.width,
	height: page.height
}));
//#endregion
//#region src/site/ehentai/helper/context.tsx
const featureOptions = {
	/** \u5173\u8054\u5916\u7AD9 */
	cross_site_link: true,
	/** \u589E\u52A0\u5FEB\u6377\u952E\u64CD\u4F5C */
	add_hotkeys_actions: true,
	/** \u8BC6\u522B\u5E7F\u544A\u9875 */
	detect_ad: true,
	/** \u5FEB\u6377\u6536\u85CF */
	quick_favorite: true,
	/** \u6807\u7B7E\u67D3\u8272 */
	colorize_tag: true,
	/** \u5FEB\u6377\u8BC4\u5206 */
	quick_rating: true,
	/** \u5FEB\u6377\u67E5\u770B\u6807\u7B7E\u5B9A\u4E49 */
	quick_tag_define: true,
	/** \u60AC\u6D6E\u6807\u7B7E\u5217\u8868 */
	float_tag_list: true,
	/** \u81EA\u52A8\u8C03\u6574\u914D\u7F6E */
	auto_adjust_option: false,
	/** \u6807\u7B7E\u68C0\u67E5 */
	tag_lint: false,
	/** \u5C55\u5F00\u6807\u7B7E\u5217\u8868 */
	expand_tag_list: true,
	autoShow: false,
	defaultOption: { imgRecognition: { enabled: true } }
};
const getPageContext = async () => {
	if (location.pathname === "/mytags") return { type: "mytags" };
	if (Reflect.has(unsafeWindow, "mpvkey")) return {
		type: "mpv",
		isManga: true
	};
	if (!Reflect.has(unsafeWindow, "display_comment_field")) {
		const type = (helper.querySelector("option[value=\\"t\\"]")?.parentElement)?.value;
		if (type) return { type };
		return;
	}
	let imgNum = 0;
	imgNum = Number(helper.querySelector(".gtb .gpc")?.textContent?.replaceAll(",", "").match(/\\d+/gu)?.at(-1));
	if (Number.isNaN(imgNum)) {
		const { responseText: html } = await core.request(location.href);
		imgNum = Number(/(?<=class="gdt2">)\\d+(?= pages<\\/td>)/u.exec(html)?.[0]);
	}
	return {
		type: "gallery",
		isManga: true,
		galleryId: location.pathname.split("/")[2],
		galleryTitle: helper.querySelector("#gn")?.textContent || void 0,
		japanTitle: helper.querySelector("#gj")?.textContent || void 0,
		imgNum,
		imagesPerPage: 0,
		imgList: helper.range(imgNum, ""),
		pageList: [],
		fileNameList: [],
		dom: {
			newTagField: helper.querySelector("#newtagfield"),
			sidebar: helper.querySelector("#gd5")
		}
	};
};
//#endregion
//#region src/site/ehentai/helper/LoadButton.tsx
var _tmpl$$7 = /*#__PURE__*/ solid_js_web.template(\`<a href=javascript:;>\`);
/** \u653E\u5728\u539F\u751F\u53F3\u4FA7\u5DE5\u5177\u680F\u548C\u6807\u7B7E\u9009\u9879\u91CC\u7684\u6F2B\u753B\u52A0\u8F7D\u6309\u94AE */
const LoadButton = (props) => {
	const tip = solid_js.createMemo(() => {
		const imgList = props.context.store.comicMap[props.id]?.imgList;
		if (imgList?.length === 0) return \` loading - 0/\${props.imgNum}\`;
		const progress = imgList?.filter(Boolean).length;
		switch (imgList?.length) {
			case void 0: return " Load comic";
			case progress: return " Read";
			default: return \` loading - \${progress}/\${props.imgNum}\`;
		}
	});
	return (() => {
		var _el$ = _tmpl$$7();
		_el$.$$click = (e) => {
			props.onClick?.(e);
			props.context.showComic(props.id);
		};
		solid_js_web.insert(_el$, tip);
		return _el$;
	})();
};
solid_js_web.delegateEvents(["click"]);
//#endregion
//#region src/site/ehentai/helper/index.ts
/** \u83B7\u53D6\u6240\u6709\u6807\u7B7E */
const getTaglist = () => {
	const lockTags = /* @__PURE__ */ new Set();
	const weakTags = /* @__PURE__ */ new Set();
	for (const tag of helper.querySelectorAll("#taglist table [id^=td_]")) {
		const [a] = tag.getElementsByTagName("a");
		if (a.classList.contains("tdn")) continue;
		if (a.classList.contains("tup") || tag.classList.contains("gt")) lockTags.add(tag.id.slice(3));
		else if (tag.classList.contains("gtl")) weakTags.add(tag.id.slice(3));
	}
	return [lockTags, weakTags];
};
const handleTagName = (tag) => {
	const [namespace, name] = tag.trim().split(":");
	if (!name) return ["", ""];
	return [namespace, name.replaceAll(/[^a-z-_ ]/giu, "")];
};
/** \u547D\u540D\u7A7A\u95F4\u7F29\u5199 */
const namespaceAbbr = [
	["artist", "a"],
	[
		"character",
		"c",
		"char"
	],
	[
		"cosplayer",
		"c",
		"os"
	],
	["female", "f"],
	[
		"group",
		"g",
		"circle"
	],
	[
		"language",
		"l",
		"lang"
	],
	["male", "m"],
	["mixed", "x"],
	["other", "o"],
	[
		"parody",
		"p",
		"series"
	],
	["reclass", "r"]
];
/** \u83B7\u53D6\u6807\u7B7E\u7684\u5B8C\u6574\u5199\u6CD5 */
const getTagNameFull = (tag) => {
	const [namespace, name] = handleTagName(tag);
	for (const target of namespaceAbbr) if (target.includes(namespace)) return \`\${target[0]}:\${name}\`;
	return tag;
};
/** \u753B\u5ECA\u5206\u7C7B\u56FE\u6807\u5BF9\u5E94\u7684 class\u3002\u5728\u5217\u8868\u9875\u662F\u300C.ct2\u300D\uFF0C\u5728\u753B\u5ECA\u91CC\u662F\u300C.gt2\u300D */
const categoriesMap = {
	Western: "ta",
	Misc: "t1",
	Doujinshi: "t2",
	Manga: "t3",
	"Artist CG": "t4",
	"Game CG": "t5",
	"Image Set": "t6",
	Cosplay: "t7",
	"Asian Porn": "t8",
	"Non-H": "t9"
};
/** \u5224\u65AD\u662F\u5426\u5F53\u524D\u753B\u5ECA\u662F\u5426\u662F\u6307\u5B9A\u7684\u5206\u7C7B */
const isInCategories = (...name) => Boolean(helper.querySelector(\`#gdc > .cs:is(\${name.map((c) => \`.c\${categoriesMap[c]}\`).join(", ")})\`));
/** \u66F4\u65B0 pagelist \u91CC\u7684 nl \u53C2\u6570 */
const setNl = (pageCtx, i, nl) => {
	const url = new URL(pageCtx.pageList[i]);
	url.searchParams.set("nl", nl);
	pageCtx.pageList[i] = url.href;
};
//#endregion
//#region src/site/ehentai/crossSiteLink.tsx
var _tmpl$$6 = /*#__PURE__*/ solid_js_web.template(\`<div style=opacity:1.0><a>\`);
var _tmpl$2$5 = /*#__PURE__*/ solid_js_web.template(\`<td>\`);
var _tmpl$3$3 = /*#__PURE__*/ solid_js_web.template(\`<tr><td class=tc>:\`);
var _tmpl$4$3 = /*#__PURE__*/ solid_js_web.template(\`<td class=tc style=text-align:left>\`);
var _tmpl$5$1 = /*#__PURE__*/ solid_js_web.template(\`<img src=https://ehgt.org/g/mr.gif class=mr alt=">">\`);
var _tmpl$6 = /*#__PURE__*/ solid_js_web.template(\`<a target=_blank>\`);
const nhentai = async ({ setState }, { galleryTitle, galleryId }) => {
	return (await searchNhentai(galleryTitle)).map(({ id, english_title, japanese_title, media_id }) => {
		const itemId = \`@nh:\${id}\`;
		setState("comicMap", itemId, { getImgList: async ({ dynamicLazyLoad }) => {
			const galleryData = await getNhentaiData(\`\${id}\`);
			const imgList = toImgList(galleryData);
			return dynamicLazyLoad({
				loadImg: async (i) => {
					const imgRes = await core.request(imgList[i].src, {
						headers: { Referer: \`https://nhentai.net/g/\${id}\` },
						responseType: "blob",
						fetch: false
					});
					return URL.createObjectURL(imgRes.response);
				},
				length: imgList.length,
				id: itemId
			});
		} });
		return {
			id: itemId,
			showText: \`\${id}\`,
			title: japanese_title || english_title,
			href: \`https://nhentai.net/g/\${id}\`,
			class: galleryId === media_id ? "gt" : "gtl"
		};
	}).toSorted((a, b) => (a.class === "gt" ? 0 : 1) - (b.class === "gt" ? 0 : 1) || Number(b.showText) - Number(a.showText));
};
nhentai.errorTip = (_, { galleryTitle }) => helper.t("site.ehentai.nhentai_failed", { nhentai: \`<a href='https://nhentai.net/search/?q=\${galleryTitle}' target="_blank"> <u> nhentai </u> </a>\` });
const hitomi = async ({ setState }, { galleryId }) => {
	const domain = "gold-usergeneratedcontent.net";
	const downImg = async (url) => {
		const imgRes = await core.request(url, {
			headers: { Referer: \`https://hitomi.la/reader/\${galleryId}.html\` },
			responseType: "blob",
			fetch: false
		});
		return URL.createObjectURL(imgRes.response);
	};
	const res = await core.request(\`https://ltn.\${domain}/galleries/\${galleryId}.js\`, {
		errorText: helper.t("site.ehentai.hitomi_error"),
		noTip: true,
		noCheckCode: true
	});
	switch (res.status) {
		case 404: return [];
		case 200: break;
		default: throw new Error(helper.t("site.ehentai.hitomi_error"));
	}
	const data = JSON.parse(res.responseText.slice(18));
	const itemId = \`@hitomi:\${data.id}\`;
	setState("comicMap", itemId, { getImgList: async ({ dynamicLazyLoad }) => {
		const { responseText: ggScript } = await core.request(\`https://ltn.\${domain}/gg.js?_=\${Date.now()}\`, {
			errorText: helper.t("site.ehentai.hitomi_error"),
			noTip: true
		});
		let gg = {};
		eval(ggScript);
		return dynamicLazyLoad({
			loadImg: async (i) => {
				const { hash, name } = data.files[i];
				const imageId = gg.s(hash);
				const m = /[\\da-f]{61}(?<hi>[\\da-f]{2})(?<lo>[\\da-f])/u.exec(hash).groups;
				const g = Number.parseInt(m.lo + m.hi, 16);
				const url = \`https://w\${gg.m(g) + 1}.\${domain}/\${gg.b}\${imageId}/\${hash}.webp\`;
				return {
					src: await downImg(url),
					name
				};
			},
			length: data.files.length,
			id: itemId,
			concurrency: 1
		});
	} });
	return [{
		id: itemId,
		showText: data.id,
		title: data.title,
		href: \`https://hitomi.la/galleries/\${data.id}\`,
		class: "gt"
	}];
};
hitomi.errorTip = () => helper.t("site.ehentai.hitomi_error");
/** \u5173\u8054\u5916\u7AD9 */
const crossSiteLink = async (coreCtx, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	if (!pageCtx.galleryTitle) return core.toast.error(helper.t("site.ehentai.html_changed_link_failed"));
	const siteList = [];
	if (isInCategories("Doujinshi", "Manga", "Artist CG", "Game CG", "Image Set")) siteList.push(hitomi);
	if (isInCategories("Doujinshi", "Manga")) siteList.push(nhentai);
	if (siteList.length === 0) return;
	const [comicMap, setComicMap] = solid_js_store.createStore({});
	const ItemTag = (props) => (() => {
		var _el$ = _tmpl$$6(), _el$2 = _el$.firstChild;
		solid_js_web.effect((_p$) => {
			var _v$ = \`td_\${props.id}\`, _v$2 = props.class, _v$3 = props.title, _v$4 = props.id, _v$5 = props.href, _v$6 = \`return toggle_tagmenu(1, '\${props.id}',this)\`, _v$7 = props.title, _v$8 = props.showText;
			_v$ !== _p$.e && solid_js_web.setAttribute(_el$, "id", _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.className(_el$, _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$, "title", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$2, "id", _p$.o = _v$4);
			_v$5 !== _p$.i && solid_js_web.setAttribute(_el$2, "href", _p$.i = _v$5);
			_v$6 !== _p$.n && solid_js_web.setAttribute(_el$2, "onclick", _p$.n = _v$6);
			_v$7 !== _p$.s && solid_js_web.setAttribute(_el$2, "title", _p$.s = _v$7);
			_v$8 !== _p$.h && (_el$2.innerText = _p$.h = _v$8);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0,
			s: void 0,
			h: void 0
		});
		return _el$;
	})();
	const renderList = () => solid_js_web.render(() => solid_js_web.createComponent(solid_js.For, {
		get each() {
			return Object.entries(comicMap);
		},
		children: ([site, itemList]) => (() => {
			var _el$3 = _tmpl$3$3(), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild;
			solid_js_web.setAttribute(_el$3, "id", \`\${site}_tagline\`);
			solid_js_web.insert(_el$4, site, _el$5);
			solid_js_web.insert(_el$3, solid_js_web.createComponent(solid_js.Show, {
				when: typeof itemList !== "string",
				get fallback() {
					return (() => {
						var _el$7 = _tmpl$4$3();
						_el$7.innerHTML = itemList;
						return _el$7;
					})();
				},
				get children() {
					var _el$6 = _tmpl$2$5();
					solid_js_web.insert(_el$6, solid_js_web.createComponent(solid_js.For, {
						each: itemList,
						children: ItemTag
					}));
					return _el$6;
				}
			}), null);
			return _el$3;
		})()
	}), helper.querySelector("#taglist tbody"));
	renderList();
	helper.hijackFn("tag_update_vote", () => {
		for (const e of helper.querySelectorAll("#nh_tagline")) e.remove();
		renderList();
	});
	const icon = () => _tmpl$5$1();
	const TagMenu = (props) => solid_js_web.createComponent(solid_js.For, {
		get each() {
			return props.children;
		},
		children: (item) => [icon(), item]
	});
	const tagmenu_act_dom = document.getElementById("tagmenu_act");
	let dispose;
	helper.hijackFn("_refresh_tagmenu_act", (rawFn, [a]) => {
		dispose?.();
		if (!a.id.startsWith("@")) return rawFn(a);
		if (tagmenu_act_dom.children.length > 0) tagmenu_act_dom.innerHTML = "";
		dispose = solid_js_web.render(() => solid_js_web.createComponent(TagMenu, { get children() {
			return [(() => {
				var _el$9 = _tmpl$6();
				_el$9.innerText = " Jump";
				solid_js_web.effect(() => solid_js_web.setAttribute(_el$9, "href", a.href));
				return _el$9;
			})(), solid_js_web.createComponent(LoadButton, {
				get id() {
					return a.id;
				},
				get imgNum() {
					return pageCtx.imgNum;
				},
				context: coreCtx
			})];
		} }), tagmenu_act_dom);
	});
	for (const getSiteComic of siteList) {
		setComicMap(getSiteComic.name, "searching...");
		try {
			const itemList = await getSiteComic(coreCtx, pageCtx);
			if (itemList.length > 0) setComicMap(getSiteComic.name, itemList);
			else setComicMap(getSiteComic.name, "null");
		} catch (error) {
			const errorTip = getSiteComic.errorTip(coreCtx, pageCtx);
			console.error(errorTip, error);
			setComicMap(getSiteComic.name, errorTip);
		}
	}
	const { adList } = coreCtx.store.comicMap[""];
	if (!adList) return;
	for (const itemList of Object.values(comicMap)) {
		if (typeof itemList === "string") continue;
		if (itemList.length === 1) coreCtx.setState("comicMap", itemList[0].id, { adList });
	}
};
//#endregion
//#region src/site/ehentai/expandTagList.tsx
/** \u5C55\u5F00\u6807\u7B7E\u5217\u8868 */
const expandTagList = (_, pageCtx) => {
	if (pageCtx.type !== "t") return;
	helper.css\`
    #taglist {
      --scrollbar-slider: \${getComputedStyle(helper.querySelector(".ido")).backgroundColor};

      scrollbar-color: var(--scrollbar-slider) transparent;
      scrollbar-width: thin;

      height: auto;
      max-height: 230px;
      padding: 0 3px;

      &::-webkit-scrollbar {
        width: 5px;
        height: 10px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-slider);
      }

      /* \u957F\u6807\u7B7E\u6362\u884C */
      & [id^='td_'] a[id^='ta_'] {
        text-wrap: balance;
        word-break: keep-all;
        overflow-wrap: anywhere;
      }
    }

    .gl1t {
      &[data-tag-list-loading],
      &[data-tag-list-loading] * {
        cursor: progress;
      }

      &[data-show-tag-list] .gl6t,
      &:not([data-show-tag-list]) #taglist {
        display: none;
      }
    }
  \`;
	const tagListMap = /* @__PURE__ */ new Map();
	const handleShow = async (item) => {
		if (item.style.cursor === "progress") return;
		if (!tagListMap.has(item)) {
			let html;
			let taglist = null;
			try {
				item.dataset.tagListLoading = "";
				const res = await core.request(item.querySelector("a").href, {
					noTip: true,
					errorText: "Fetch tag list error",
					noCheckCode: true
				});
				html = helper.domParse(res.responseText);
				taglist = html.querySelector("#taglist");
				if (!taglist) throw new Error("Fetch tag list error");
				const [, thumbnail] = html.querySelector("#gdt div[title][style]").style.background.split("\\"");
				new Image().src = thumbnail;
				for (const a of taglist.querySelectorAll("a")) a.target = "_blank";
			} catch {
				taglist = document.createElement("div");
				taglist.id = "taglist";
				taglist.textContent = html?.querySelector(".d p")?.textContent || "Fetch tag list error";
			}
			item.querySelector(".gl3t").after(taglist);
			tagListMap.set(item, taglist);
			Reflect.deleteProperty(item.dataset, "tagListLoading");
		}
		if (Reflect.has(item.dataset, "showTagList")) Reflect.deleteProperty(item.dataset, "showTagList");
		else item.dataset.showTagList = "";
	};
	for (const item of helper.querySelectorAll(".gl1t")) item.addEventListener("click", (e) => e.target.matches(":not(a):is(.gl1t, .gl6t, .gl6t *, #taglist, #taglist *)") && handleShow(item));
	components_Manga.setDefaultHotkeys((hotkeys) => ({
		...hotkeys,
		float_tag_list: ["q"]
	}));
	const [mouseXY, setMouseXY] = solid_js.createSignal([0, 0]);
	document.addEventListener("pointermove", (e) => setMouseXY([e.clientX, e.clientY]));
	components_Manga.listenHotkey({ float_tag_list: () => {
		for (const item of document.elementsFromPoint(...mouseXY())) if (item.matches(".gl1t")) return handleShow(item);
	} });
	colorizeTag(_, pageCtx);
};
//#endregion
//#region src/site/ehentai/floatTagList.tsx
const MdPictureInPicture = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M18 7h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m3-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m-1 16.01H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1"/></svg>\`;
const getDomPosition = (dom) => {
	const rect = dom.getBoundingClientRect();
	const computedStyle = getComputedStyle(dom);
	const leftBorder = parseFloat(computedStyle.borderLeftWidth);
	const leftPadding = parseFloat(computedStyle.paddingLeft);
	const topPadding = parseFloat(computedStyle.paddingTop);
	const topBorder = parseFloat(computedStyle.borderTopWidth);
	return {
		left: rect.left + leftBorder + leftPadding,
		top: rect.top + topBorder + topPadding,
		width: computedStyle.width,
		height: computedStyle.height
	};
};
const floatTagList = ({ store: coreStore }, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	const gd4 = helper.querySelector("#gd4");
	const gd4Style = getComputedStyle(gd4);
	/** \u80CC\u666F\u989C\u8272 */
	let background = "rgba(0, 0, 0, 0)";
	let dom = gd4;
	while (background === "rgba(0, 0, 0, 0)") {
		background = getComputedStyle(dom).backgroundColor;
		dom = dom.parentElement;
	}
	const { borderColor } = getComputedStyle(helper.querySelector("#gdt"));
	/** \u8FB9\u6846\u6837\u5F0F */
	const border = \`1px solid \${borderColor}\`;
	helper.css\`
    #comicread-tag-box {
      position: fixed;
      z-index: 2147483647;

      font-size: 12px;
      text-align: justify;

      background: \${background};
      box-shadow: 0 0 15px -3px #0004;
    }

    #comicread-tag-box > #gd4 {
      margin: 0;
      padding: 0;
      border: none;
    }

    /* \u786E\u4FDD\u59CB\u7EC8\u663E\u793A\u5728\u6700\u4E0A\u5C42\uFF0C\u9632\u6B62\u548C\u5176\u4ED6\u811A\u672C\u51B2\u7A81 */
    #ehs-introduce-box {
      z-index: 1;
    }

    #comicread-tag-box > #ehs-introduce-box {
      position: relative;
      width: 161px;
      height: 100%;
      border-left: \${border};
    }

    #comicread-tag-box-placeholder {
      cursor: pointer;

      float: left;
      display: flex;
      grid-area: gd4;
      justify-content: center;

      margin: 0 0 0 10px;
      padding: 0 0 0 5px;
      border-right: 1px solid \${borderColor};
      border-left: 1px solid \${borderColor};
    }

    #comicread-tag-box-placeholder svg {
      width: 17em;
      opacity: 0.5;
    }

    /* \u9632\u6B62\u5728\u7A97\u53E3\u53D8\u5C0F\u65F6\u786E\u8BA4\u6309\u94AE\u88AB\u6324\u51FA\u8303\u56F4 */
    #tagmenu_new {
      width: fit-content;
    }
  \`;
	const { store, setState } = helper.useStore({
		open: false,
		top: 0,
		left: 0,
		opacity: 1,
		mouse: {
			x: 0,
			y: 0
		},
		bound: {
			width: 0,
			height: 0
		}
	});
	const setPos = (state, top, left) => {
		state.top = helper.clamp(-gd4.clientHeight * .75, top, state.bound.height);
		state.left = helper.clamp(-gd4.clientWidth * .75, left, state.bound.width);
	};
	const setOpacity = (opacity) => setState("opacity", helper.clamp(.5, opacity, 1));
	setOpacity(Number(localStorage.getItem("floatTagListOpacity")) || 1);
	document.addEventListener("pointermove", (e) => {
		setState((state) => {
			state.mouse.x = e.clientX;
			state.mouse.y = e.clientY;
		});
	});
	const hadnleResize = () => {
		setState((state) => {
			state.bound.width = window.innerWidth - gd4.clientWidth / 4;
			state.bound.height = window.innerHeight - gd4.clientHeight / 4;
			setPos(state, state.top, state.left);
		});
	};
	window.addEventListener("resize", hadnleResize);
	hadnleResize();
	helper.css("#comicread-tag-box", {
		display: () => store.open ? void 0 : "none",
		top: () => \`\${store.top}px\`,
		left: () => \`\${store.left}px\`,
		opacity: () => store.opacity
	});
	const placeholder = gd4.cloneNode();
	placeholder.id = "comicread-tag-box-placeholder";
	placeholder.style.display = "none";
	placeholder.addEventListener("click", () => setState("open", false));
	placeholder.innerHTML = MdPictureInPicture;
	gd4.before(placeholder);
	const ref = document.createElement("div");
	ref.id = "comicread-tag-box";
	ref.classList.add("comicread-ignore");
	document.body.append(ref);
	ref.addEventListener("wheel", (e) => {
		if (!e.shiftKey) return;
		e.stopPropagation();
		e.preventDefault();
		setOpacity(store.opacity + (e.deltaY > 0 ? -.05 : .05));
		localStorage.setItem("floatTagListOpacity", \`\${store.opacity}\`);
	}, { passive: false });
	const initPos = {
		top: 0,
		left: 0
	};
	helper.useDrag({
		ref: gd4,
		handleDrag({ type, xy: [x, y], initial: [ix, iy] }) {
			switch (type) {
				case "down":
					if (!store.open) {
						const pos = getDomPosition(gd4);
						setState((state) => {
							state.top = pos.top;
							state.left = pos.left;
						});
					}
					initPos.top = store.top;
					initPos.left = store.left;
					break;
				case "up":
					setState((state) => {
						if (coreStore.manga.show) return;
						const rect = placeholder.getBoundingClientRect();
						if (helper.approx(state.top, rect.top, 50) && helper.approx(state.left, rect.left, 50)) state.open = false;
					});
					break;
				case "move": setState((state) => {
					setPos(state, initPos.top + y - iy, initPos.left + x - ix);
					state.open = true;
				});
			}
		},
		handleClick: (_, target) => target.click(),
		skip: (e) => !e.target.matches("#gd4, #taglist, #gwrd, td+td, [id^=comidread] *:not(a)")
	});
	let ehs;
	let ehsParent;
	const handleEhs = () => {
		if (ehs) return;
		ehs = helper.querySelector("#ehs-introduce-box");
		if (!ehs) return;
		ehsParent = ehs.parentElement;
		const autoComplete = helper.querySelector(".eh-syringe-lite-auto-complete-list");
		if (autoComplete) {
			autoComplete.classList.add("comicread-ignore");
			autoComplete.style.zIndex = "2147483647";
			document.body.append(autoComplete);
		}
		helper.hijackFn("toggle_tagmenu", () => unsafeWindow.selected_tagname || helper.querySelector("#ehs-introduce-box .ehs-close")?.click());
	};
	helper.createEffectOn(() => store.open, (open) => {
		handleEhs();
		if (open) {
			const { height, width } = gd4Style;
			placeholder.style.cssText = \`height: \${height}; width: \${width};\`;
			ref.style.height = height;
			gd4.style.width = width;
			ref.append(gd4);
			if (ehs) ref.append(ehs);
			document.activeElement.blur();
		} else {
			placeholder.style.cssText = \`display: none;\`;
			gd4.style.width = "";
			placeholder.after(gd4);
			if (ehs) ehsParent.append(ehs);
			components_Manga.focus();
		}
	}, { defer: true });
	components_Manga.setDefaultHotkeys((hotkeys) => ({
		...hotkeys,
		float_tag_list: ["q"]
	}));
	core.registerEsc("\u5173\u95ED\u6D6E\u52A8\u6807\u7B7E\u680F", () => store.open ? setState("open", false) : "SKIP");
	components_Manga.listenHotkey({ float_tag_list: () => {
		setState((state) => {
			state.open = !state.open;
			if (!state.open) return;
			setPos(state, state.mouse.y - gd4.clientHeight / 2, state.mouse.x - gd4.clientWidth / 2);
		});
	} });
	helper.hijackFn("tag_from_field", (rawFn, args) => {
		if (store.open) document.activeElement.blur();
		return rawFn(...args);
	});
	const { newTagField } = pageCtx.dom;
	newTagField.addEventListener("pointerenter", () => store.open && newTagField.focus());
	/** \u6839\u636E\u6807\u7B7E\u94FE\u63A5\u83B7\u53D6\u5BF9\u5E94\u7684\u6807\u7B7E\u540D */
	const getDropTag = (tagUrl) => {
		const tagDom = helper.querySelector(\`a[href=\${CSS.escape(tagUrl)}]\`);
		if (!tagDom) return;
		return tagDom.title || tagDom.id.slice(3).replaceAll("_", " ");
	};
	const handleDrop = (e) => {
		const text = e.dataTransfer.getData("text");
		const tag = getDropTag(text);
		if (!tag) return;
		e.preventDefault();
		if (!newTagField.value.includes(tag)) newTagField.value += \`\${tag}, \`;
		newTagField.dispatchEvent(new Event("input"));
	};
	newTagField.addEventListener("drop", handleDrop);
	const taglist = helper.querySelector("#taglist");
	taglist.addEventListener("dragover", (e) => e.preventDefault());
	taglist.addEventListener("dragenter", (e) => e.preventDefault());
	taglist.addEventListener("drop", handleDrop);
};
//#endregion
//#region src/site/ehentai/helper/api.ts
const ehApi = async (data, details) => {
	const res = await request.request(\`/api.php\`, {
		fetch: false,
		method: "POST",
		responseType: "json",
		cookie: document.cookie,
		data: JSON.stringify(data),
		...details
	});
	if (res.response.error) {
		helper.log.error(res.response.error);
		throw new Error(res.response.error);
	}
	return res.response;
};
/** \u4F7F\u7528 api \u83B7\u53D6\u56FE\u7247\u94FE\u63A5 */
const getImgUrlByApi = async (pageCtx, i, nextLink) => {
	const imgPageUrl = pageCtx.pageList[i];
	const { imgkey, gid, page, nl } = /\\/s\\/(?<imgkey>\\S+)\\/(?<gid>\\d+)-(?<page>\\d+)(?=$|\\?nl=(?<nl>\\d+))/u.exec(imgPageUrl).groups;
	const data = {
		gid,
		page,
		imgkey
	};
	if (nl) data.nl = nl;
	if (pageCtx.mpvkey) {
		const res = await ehApi({
			method: "imagedispatch",
			...data,
			mpvkey: pageCtx.mpvkey
		}, { noTip: true });
		if (nextLink) setNl(pageCtx, i, res.s);
		return res.i;
	}
	const res = await ehApi({
		method: "showpage",
		...data,
		showkey: pageCtx.showkey
	}, { noTip: true });
	if (nextLink) setNl(pageCtx, i, /nl\\('(?<nl>\\d+-\\d+)'\\)/u.exec(res.i3).groups.nl);
	return /src="(?<src>\\S+)"/u.exec(res.i3).groups.src;
};
/** \u68C0\u67E5 showkey */
const checkShowkey = async (pageCtx, imgPageUrl) => {
	if (pageCtx.showkey) return;
	const { responseText: html } = await request.request(imgPageUrl, { fetch: true }, 10);
	pageCtx.showkey = /showkey="(?<showkey>\\S+)"/u.exec(html).groups.showkey;
};
/** \u68C0\u67E5 mpvkey */
const checkMpvKey = async (pageCtx) => {
	if (pageCtx.mpvkey) return;
	const mpvUrl = \`\${location.origin}\${location.pathname}\`.replace("/g/", "/mpv/");
	if (!helper.querySelector(\`.g2 a[href="\${mpvUrl}"]\`)) return;
	const { responseText: html } = await request.request(mpvUrl, { fetch: true });
	const mpvkey = /mpvkey = "(?<key>\\S+)"/u.exec(html)?.groups?.key;
	if (!mpvkey) return;
	pageCtx.mpvkey = mpvkey;
};
/** \u68C0\u67E5 IP \u662F\u5426\u88AB\u5C01\u7981 */
const checkIpBanned = (text) => text.includes("IP address has been temporarily banned") && components_Toast.toast.error(helper.t("site.ehentai.ip_banned"), {
	throw: true,
	duration: Infinity
});
/** \u4ECE\u56FE\u7247\u9875\u83B7\u53D6\u56FE\u7247\u5730\u5740 */
const getImgUrl = async (pageCtx, i) => {
	try {
		return await getImgUrlByApi(pageCtx, i);
	} catch (error) {
		helper.log.warn("getImgUrlByApi failed", error);
	}
	const res = await request.request(pageCtx.pageList[i], {
		fetch: true,
		errorText: helper.t("site.ehentai.fetch_img_page_source_failed")
	}, 10);
	checkIpBanned(res.responseText);
	try {
		return /id="img" src="(?<src>.+?)"/u.exec(res.responseText).groups.src;
	} catch {
		throw new Error(helper.t("site.ehentai.fetch_img_url_failed"));
	}
};
/** \u4ECE\u8BE6\u60C5\u9875\u83B7\u53D6\u56FE\u7247\u9875\u7684\u5730\u5740 */
const getImgPageUrl = async (pageNum = 0) => {
	const res = await request.request(\`\${location.pathname}\${pageNum ? \`?p=\${pageNum}\` : ""}\`, {
		fetch: true,
		errorText: helper.t("site.ehentai.fetch_img_page_url_failed")
	});
	checkIpBanned(res.responseText);
	const pageList = [...res.responseText.matchAll(/<a href="(?<url>.{20,50})"><(?<img>img alt=.+?|div><div |div )title=".+?: (?<fileName>.+?)"/gu)].map(({ groups: { url, fileName } }) => [url, fileName]);
	if (pageList.length === 0) throw new Error(helper.t("site.ehentai.fetch_img_page_url_failed"));
	return pageList;
};
/** \u83B7\u53D6\u65B0\u7684\u56FE\u7247\u9875\u5730\u5740 */
const updatePageUrl = async (pageCtx, i) => {
	try {
		return await getImgUrlByApi(pageCtx, i, true);
	} catch {}
	const res = await request.request(pageCtx.pageList[i], { errorText: helper.t("site.ehentai.fetch_img_page_source_failed") });
	checkIpBanned(res.responseText);
	const nl = /nl\\('(?<nl>.+?)'\\)/u.exec(res.responseText)?.groups?.nl;
	if (!nl) throw new Error(helper.t("site.ehentai.fetch_img_url_failed"));
	setNl(pageCtx, i, nl);
};
/** \u6309\u9700\u52A0\u8F7D\u7B2C i \u5F20\u56FE\u6240\u5728\u5206\u9875\u7684\u8BE6\u60C5\u9875 URL */
const ensureImgPageUrl = async (pageCtx, index) => {
	if (pageCtx.pageList[index]) return;
	const pageNum = Math.floor(index / pageCtx.imagesPerPage) || 0;
	const pageList = await getImgPageUrl(pageNum);
	pageCtx.imagesPerPage ||= pageList.length;
	const startIndex = pageNum * pageCtx.imagesPerPage;
	for (let i = 0; i < pageList.length; i++) [pageCtx.pageList[startIndex + i], pageCtx.fileNameList[startIndex + i]] = pageList[i];
};
//#endregion
//#region src/site/ehentai/hotkeys.ts
const addHotkeysActions = (_, pageCtx) => {
	if (pageCtx.type !== "gallery") return components_Manga.listenHotkey({
		scroll_right: () => helper.querySelector("#unext")?.click(),
		scroll_left: () => helper.querySelector("#uprev")?.click()
	});
	core.registerEsc("\u53D6\u6D88\u9009\u4E2D\u5F53\u524D\u6807\u7B7E", () => unsafeWindow.selected_tagname ? unsafeWindow.toggle_tagmenu() : "SKIP");
	return components_Manga.listenHotkey({
		ArrowUp: () => unsafeWindow.selected_tagid && unsafeWindow?.tag_vote_up(),
		ArrowDown: () => unsafeWindow.selected_tagid && unsafeWindow?.tag_vote_down(),
		scroll_right: () => helper.querySelector(".ptt td:last-child:not(.ptdd)")?.click(),
		scroll_left: () => helper.querySelector(".ptt td:first-child:not(.ptdd)")?.click()
	});
};
//#endregion
//#region src/site/ehentai/detectAd.ts
const imageBitmapCache = /* @__PURE__ */ new Map();
const loadImageBitmap = async (url) => {
	if (imageBitmapCache.has(url)) return imageBitmapCache.get(url);
	const imageBitmap = await createImageBitmap(await request.downloadImg(url));
	imageBitmapCache.set(url, imageBitmap);
	return imageBitmap;
};
/** \u4ECE\u96EA\u78A7\u56FE\u4E2D\u5207\u5272\u6307\u5B9A\u533A\u57DF\u7684\u56FE\u7247 */
const extractSpriteImage = async (style) => {
	const { width, height, backgroundImage, backgroundPositionX: backgroundX, backgroundPositionY: backgroundY } = style;
	const urlMatch = /url\\(['"](?<url>[^)]+)['"]\\)/u.exec(backgroundImage)?.groups;
	if (!urlMatch) throw new Error("\u89E3\u6790\u4E0D\u5230\u80CC\u666F\u56FE\u7247URL");
	const { url } = urlMatch;
	const spriteImage = await loadImageBitmap(url);
	const w = parseFloat(width);
	const h = parseFloat(height);
	const canvas = new OffscreenCanvas(w, h);
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, w, h);
	const sourceX = -parseFloat(backgroundX);
	const sourceY = -parseFloat(backgroundY);
	ctx.drawImage(spriteImage, sourceX, sourceY, w, h, 0, 0, w, h);
	return canvas.transferToImageBitmap();
};
/** \u8BC6\u522B\u5E7F\u544A */
const detectAd = ({ store, setState, options }, { imgList, pageList, fileNameList }) => {
	if (!(options.detect_ad && document.getElementById("ta_other:extraneous_ads"))) return;
	setState("comicMap", "", "adList", new helper.ReactiveSet());
	/** \u7F29\u7565\u56FE\u5217\u8868 */
	const thumbnailList = [];
	(async () => {
		for (const e of helper.querySelectorAll("#gdt > a")) {
			const index = Number(/.+-(?<index>\\d+)/u.exec(e.href)?.groups?.index) - 1;
			if (Number.isNaN(index)) continue;
			pageList[index] = e.href;
			const thumbnail = e.querySelector("[title]");
			[, fileNameList[index]] = thumbnail.title.split(/\uFF1A|: /u);
			if (helper.isImageElement(thumbnail)) thumbnailList[index] = thumbnail;
			if (thumbnail.style.background.includes("url(")) thumbnailList[index] = await extractSpriteImage(thumbnail.style);
		}
		await userscript_detectAd.getAdPageByFileName(fileNameList, store.comicMap[""].adList);
		if (store.comicMap[""].adList.size === 0) await userscript_detectAd.getAdPageByContent(thumbnailList, store.comicMap[""].adList);
	})();
	helper.css(helper.createRootMemo(() => {
		if (!store.comicMap[""]?.adList?.size) return "";
		return [...store.comicMap[""].adList].map((i) => \`a[href="\${pageList[i]}"] [title]:not(:hover) {
              filter: blur(8px);
              clip-path: border-box;
              backdrop-filter: blur(8px);
            }\`).join("\\n");
	}));
	return {
		checkFileName: helper.once(() => userscript_detectAd.getAdPageByFileName(fileNameList, store.comicMap[""].adList)),
		checkContent: helper.once(() => userscript_detectAd.getAdPageByContent(imgList, store.comicMap[""].adList))
	};
};
//#endregion
//#region src/site/ehentai/multiSelectLoad.tsx
const multiSelectLoad = async (coreCtx, pageCtx) => {
	const { setState, showComic } = coreCtx;
	helper.css\`
    #gdt > a [title] {
      position: relative;
    }
  \`;
	const checkAd = detectAd(coreCtx, pageCtx);
	setState("manga", { onLoading: (_, img) => {
		if (!img) return;
		const index = pageCtx.imgList.indexOf(img.src);
		const { length } = pageCtx.imgList;
		if (helper.inRange(length - 10, index, length)) checkAd?.checkContent();
	} });
	const ensureSetup = helper.singleThreaded(async () => {
		await ensureImgPageUrl(pageCtx, 0);
		checkAd?.checkFileName();
		try {
			await checkMpvKey(pageCtx);
			await checkShowkey(pageCtx, pageCtx.pageList[0]);
		} catch (error) {
			helper.log.warn("checkKey failed", error);
		}
	});
	await (await userscript_multiSelect.useMultiSelectLoad(coreCtx, {
		id: pageCtx.galleryId,
		allItemIds: () => helper.range(pageCtx.imgNum).map(String),
		getImgList: async (id) => {
			await ensureSetup();
			const i = Number(id);
			await ensureImgPageUrl(pageCtx, i);
			pageCtx.imgList[i] ||= await getImgUrl(pageCtx, i);
			return [{
				src: pageCtx.imgList[i],
				name: pageCtx.fileNameList[i]
			}];
		}
	})).registerItems(pageCtx.galleryId, (map) => {
		for (const dom of helper.querySelectorAll("#gdt a")) {
			const imgIndex = Number(/(?<=-)\\d+(?:\\?|$)/u.exec(dom.href)?.[0]) - 1;
			if (!Number.isNaN(imgIndex)) map.set(dom.querySelector("[title]"), String(imgIndex));
		}
	});
	return { handleClick: async (e) => {
		if (!e.shiftKey) return;
		e.stopPropagation();
		const defaultValue = coreCtx.multiSelect ? helper.descRange(coreCtx.multiSelect.selectedIds().map(Number), pageCtx.imgNum) : "";
		const [message, tip] = helper.t("other.page_range").split("\\n");
		const pageRange = await components_InputDialog.askInput({
			message,
			tip,
			defaultValue
		});
		if (!pageRange) return;
		coreCtx.multiSelect?.setSelectedIds([...helper.extractRange(pageRange, pageCtx.imgNum)].map(String));
		setState("comicMap", "", "imgList", void 0);
		await showComic("");
	} };
};
//#endregion
//#region src/site/ehentai/quickFavorite.tsx
var _tmpl$$5 = /*#__PURE__*/ solid_js_web.template(\`<div>\`);
var _tmpl$2$4 = /*#__PURE__*/ solid_js_web.template(\`<div class=comidread-favorites-item><input type=radio>\`);
var _tmpl$3$2 = /*#__PURE__*/ solid_js_web.template(\`<span class=comidread-favorites>\`);
var _tmpl$4$2 = /*#__PURE__*/ solid_js_web.template(\`<h3>loading...\`);
const style = \`
  .comidread-favorites {
    position: absolute;
    z-index: 75;
    left: 0;

    overflow: auto;
    align-content: center;

    box-sizing: border-box;
    width: 100%;
    padding-left: 0.6em;

    border: none;
    border-radius: 0;
  }

  .comidread-favorites-item {
    cursor: pointer;

    display: flex;
    align-items: center;

    width: 100%;
    margin: 1em 0;

    text-align: left;
    overflow-wrap: anywhere;
  }

  .comidread-favorites-item > input {
    pointer-events: none;
    margin: 0 0.5em 0 0;
  }

  .comidread-favorites-item > div {
    flex-shrink: 0;

    width: 15px;
    height: 15px;
    margin: 0 0.5em 0 0;

    background-image: url("https://ehgt.org/g/fav.png");
    background-repeat: no-repeat;
  }

  .gl1t > .comidread-favorites {
    padding: 1em 1.5em;
  }

  .comidread-blink {
    animation: comidread-blink 1.2s ease-in-out infinite;
  }

  @keyframes comidread-blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }
\`;
const addQuickFavorite = ({ button: favoriteButton, root, apiUrl, height, top = 0 }) => {
	root.style.position = "relative";
	const [show, setShow] = solid_js.createSignal(false);
	const [favorites, setFavorites] = solid_js.createSignal([]);
	const [favnote, setFavnote] = solid_js.createSignal("");
	const updateFavorite = async () => {
		try {
			const res = await core.request(apiUrl, { errorText: helper.t("site.ehentai.fetch_favorite_failed") });
			const dom = helper.domParse(res.responseText);
			const list = [...dom.querySelectorAll(".nosel > div")];
			if (list.length === 10) list[0].querySelector("input").checked = false;
			setFavnote(dom.querySelector("#galpop textarea[name=\\"favnote\\"]")?.value ?? "");
			setFavorites(list);
		} catch {
			core.toast.error(helper.t("site.ehentai.fetch_favorite_failed"));
			setFavorites([]);
		}
	};
	let hasRender = false;
	const renderDom = () => {
		if (hasRender) return;
		hasRender = true;
		const FavoriteItem = (e, index) => {
			const { checked } = e.querySelector("input");
			const handleClick = async () => {
				if (checked) return;
				setShow(false);
				const formData = new FormData();
				formData.append("favcat", index() === 10 ? "favdel" : \`\${index()}\`);
				formData.append("apply", "Apply Changes");
				formData.append("favnote", favnote());
				formData.append("update", "1");
				favoriteButton.classList.add("comidread-blink");
				const res = await core.request(apiUrl, {
					method: "POST",
					data: formData,
					errorText: helper.t("site.ehentai.change_favorite_failed")
				}).finally(() => favoriteButton.classList.remove("comidread-blink"));
				core.toast.success(helper.t("site.ehentai.change_favorite_success"));
				const updateCode = /\\nif\\(window.opener.document.+\\n/u.exec(res.responseText)?.[0]?.replaceAll("window.opener.document", "window.document");
				if (updateCode) eval(updateCode);
				await updateFavorite();
			};
			return (() => {
				var _el$ = _tmpl$2$4(), _el$2 = _el$.firstChild;
				_el$.$$click = handleClick;
				_el$2.checked = checked;
				solid_js_web.insert(_el$, solid_js_web.createComponent(solid_js.Show, {
					get when() {
						return index() <= 9;
					},
					get children() {
						var _el$3 = _tmpl$$5();
						solid_js_web.effect((_$p) => solid_js_web.setStyleProperty(_el$3, "background-position", \`0px -\${2 + 19 * index()}px\`));
						return _el$3;
					}
				}), null);
				solid_js_web.insert(_el$, () => e.textContent?.trim(), null);
				return _el$;
			})();
		};
		let background = "rgba(0, 0, 0, 0)";
		let dom = root;
		while (background === "rgba(0, 0, 0, 0)") {
			background = getComputedStyle(dom).backgroundColor;
			dom = dom.parentElement;
		}
		solid_js_web.render(() => solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return show();
			},
			get children() {
				var _el$4 = _tmpl$3$2();
				solid_js_web.setStyleProperty(_el$4, "background", background);
				solid_js_web.setStyleProperty(_el$4, "height", \`\${height}px\`);
				solid_js_web.setStyleProperty(_el$4, "top", \`\${top}px\`);
				solid_js_web.insert(_el$4, solid_js_web.createComponent(solid_js.For, {
					get each() {
						return favorites();
					},
					children: FavoriteItem,
					get fallback() {
						return _tmpl$4$2();
					}
				}));
				return _el$4;
			}
		}), root);
	};
	const rawClick = favoriteButton.onclick;
	favoriteButton.onclick = null;
	favoriteButton.addEventListener("mousedown", async (e) => {
		if (e.buttons !== 1 && e.buttons !== 4) return;
		e.stopPropagation();
		e.preventDefault();
		if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey || e.buttons === 4) return rawClick.call(favoriteButton, e);
		renderDom();
		setShow((val) => !val);
		if (show()) await updateFavorite();
	});
};
/** \u5FEB\u6377\u6536\u85CF */
const quickFavorite = (_, pageCtx) => {
	if (unsafeWindow.apiuid === -1) return;
	switch (pageCtx.type) {
		case "gallery":
			helper.css(style);
			addQuickFavorite({
				root: helper.querySelector("#gd3"),
				button: helper.querySelector("#gdf"),
				apiUrl: \`\${unsafeWindow.popbase}addfav\`,
				height: helper.querySelector("#gdf").firstElementChild.offsetTop
			});
			break;
		case "t":
			helper.css(style);
			for (const item of helper.querySelectorAll(".gl1t")) {
				const button = item.querySelector("[id^=posted_]");
				const top = item.firstElementChild.getBoundingClientRect().bottom - item.getBoundingClientRect().top;
				const bottom = item.lastElementChild.getBoundingClientRect().top - item.getBoundingClientRect().top;
				const [apiUrl] = /http.+?(?=')/u.exec(button.getAttribute("onclick"));
				addQuickFavorite({
					root: item,
					top,
					height: bottom - top,
					button,
					apiUrl
				});
			}
			break;
		case "e":
			helper.css(style);
			for (const item of helper.querySelectorAll(".gl1e")) {
				const button = item.nextElementSibling.querySelector("[id^=posted_]");
				const height = Number.parseInt(getComputedStyle(item).height, 10);
				const [apiUrl] = /http.+?(?=')/u.exec(button.getAttribute("onclick"));
				addQuickFavorite({
					root: item,
					button,
					height,
					apiUrl
				});
			}
	}
};
solid_js_web.delegateEvents(["click"]);
//#endregion
//#region src/site/ehentai/quickRating.tsx
var _tmpl$$4 = /*#__PURE__*/ solid_js_web.template(\`<span class=comidread-quick-rating><img src=https://ehgt.org/g/blank.gif><map>\`);
var _tmpl$2$3 = /*#__PURE__*/ solid_js_web.template(\`<area shape=rect>\`);
/** \u5FEB\u6377\u8BC4\u5206 */
const quickRating = (_, pageCtx) => {
	let list;
	switch (pageCtx.type) {
		case "e":
			list = helper.querySelectorAll("#favform > table > tbody > tr");
			break;
		case "m":
		case "p":
		case "l":
			list = helper.querySelectorAll("#favform > table > tbody > tr").slice(1);
			break;
		case "t":
			list = helper.querySelectorAll(".gl1t");
			break;
		default: return;
	}
	helper.css\`
    .comidread-quick-rating {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .comidread-blink {
      animation: comidread-blink 1.2s ease-in-out infinite;
    }

    @keyframes comidread-blink {
      0%,
      100% {
        opacity: 1;
      }

      50% {
        opacity: 0.25;
      }
    }
  \`;
	const coordsList = [
		"0,0,7,16",
		"8,0,15,16",
		"16,0,23,16",
		"24,0,31,16",
		"32,0,39,16",
		"40,0,47,16",
		"48,0,55,16",
		"56,0,63,16",
		"64,0,71,16",
		"72,0,79,16"
	];
	/** \u4FEE\u6539\u8BC4\u5206 */
	const editRating = async (url, num) => {
		try {
			const dataRes = await core.request(url, {
				errorText: helper.t("site.ehentai.change_rating_failed"),
				noTip: true
			});
			const match = /api_url = "(?<api_url>.+?)";.+?gid = (?<gid>\\d+);.+?token = "(?<token>.+?)";.+?apiuid = (?<apiuid>\\d+);.+?apikey = "(?<apikey>.+?)"/su.exec(dataRes.responseText)?.groups;
			if (!match) throw new Error(helper.t("site.ehentai.change_rating_failed"));
			const { api_url, gid, token, apiuid, apikey } = match;
			const res = await core.request(api_url, {
				method: "POST",
				responseType: "json",
				data: JSON.stringify({
					method: "rategallery",
					rating: \`\${num}\`,
					apikey,
					apiuid,
					gid,
					token
				}),
				fetch: true,
				noTip: true
			});
			core.toast.success(\`\${helper.t("site.ehentai.change_rating_success")}: \${res.response.rating_usr}\`);
			return res.response;
		} catch {
			core.toast.error(helper.t("site.ehentai.change_rating_failed"));
			throw new Error(helper.t("site.ehentai.change_rating_failed"));
		}
	};
	/** \u6839\u636E\u8BC4\u5206\u4FEE\u6539\u663E\u793A\u6548\u679C */
	const updateRatingImage = (dom, num) => {
		let a = Math.round(num + 1);
		const b = -80 + 16 * Math.ceil(a / 2);
		a = a % 2 === 1 ? -21 : -1;
		dom.style.backgroundPosition = \`\${b}px \${a}px\`;
	};
	const renderQuickRating = (item, ir, index) => {
		let basePosition = ir.style.backgroundPosition;
		let isRequesting = false;
		solid_js_web.render(() => (() => {
			var _el$ = _tmpl$$4(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
			_el$.$$mouseout = () => {
				ir.style.backgroundPosition = basePosition;
			};
			solid_js_web.setAttribute(_el$, "data-index", index);
			solid_js_web.setAttribute(_el$2, "usemap", \`#rating-\${index}\`);
			solid_js_web.setAttribute(_el$3, "name", \`rating-\${index}\`);
			solid_js_web.insert(_el$3, solid_js_web.createComponent(solid_js.For, {
				each: coordsList,
				children: (coords, i) => (() => {
					var _el$4 = _tmpl$2$3();
					_el$4.$$click = async () => {
						if (isRequesting) return;
						isRequesting = true;
						ir.classList.add("comidread-blink");
						try {
							const res = await editRating(item.querySelector("a").href, i() + 1);
							ir.className = res.rating_cls;
							updateRatingImage(ir, res.rating_usr * 2 - 1);
							basePosition = ir.style.backgroundPosition;
						} catch {
							ir.style.backgroundPosition = basePosition;
						} finally {
							isRequesting = false;
							ir.classList.remove("comidread-blink");
						}
					};
					_el$4.$$mouseover = () => updateRatingImage(ir, i());
					solid_js_web.setAttribute(_el$4, "coords", coords);
					return _el$4;
				})()
			}));
			return _el$;
		})(), ir);
	};
	for (const [index, item] of list.entries()) {
		const ir = [...item.querySelectorAll(".ir")].at(-1);
		if (!ir) continue;
		ir.addEventListener("mouseenter", () => renderQuickRating(item, ir, index), { once: true });
	}
};
solid_js_web.delegateEvents([
	"mouseout",
	"mouseover",
	"click"
]);
//#endregion
//#region node_modules/.pnpm/@material-design-icons+svg@0.14.15/node_modules/@material-design-icons/svg/round/launch.svg
var _tmpl$$3 = /*#__PURE__*/ solid_js_web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 1 0 1.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1">\`);
var launch_default = (props = {}) => (() => {
	var _el$ = _tmpl$$3();
	solid_js_web.spread(_el$, props, true, true);
	return _el$;
})();
//#endregion
//#region src/site/ehentai/quickTagDefine.tsx
var _tmpl$$2 = /*#__PURE__*/ solid_js_web.template(\`<h3>\`);
var _tmpl$2$2 = /*#__PURE__*/ solid_js_web.template(\`<h1><a target=_blank>\`);
var _tmpl$3$1 = /*#__PURE__*/ solid_js_web.template(\`<span id=comidread-tag-define>\`);
var _tmpl$4$1 = /*#__PURE__*/ solid_js_web.template(\`<h3>loading...\`);
/** \u5FEB\u6377\u67E5\u770B\u6807\u7B7E\u5B9A\u4E49 */
const quickTagDefine = (_, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	const tagContent = solid_js_store.createMutable({});
	const saveTagContent = async (tag) => {
		if (Reflect.has(tagContent, tag)) return;
		const url = \`https://ehwiki.org/wiki/\${tag.replaceAll(/[a-z]+:\\s?/giu, "")}\`;
		const res = await core.request(url, { noCheckCode: true });
		if (res.status !== 200) {
			tagContent[tag] = (() => {
				var _el$ = _tmpl$$2();
				solid_js_web.insert(_el$, () => \`\${res.status} - \${res.statusText}\`);
				return _el$;
			})();
			return;
		}
		const content = helper.domParse(res.responseText).querySelector("#mw-content-text");
		for (const dom of content.querySelectorAll("img[src^=\\"/\\"]")) dom.setAttribute("src", \`https://ehwiki.org\${dom.getAttribute("src")}\`);
		for (const dom of content.getElementsByTagName("a")) {
			const href = dom.getAttribute("href") ?? "";
			if (href.startsWith("/")) dom.setAttribute("href", \`https://ehwiki.org\${href}\`);
			dom.target = "_blank";
		}
		for (const dom of content.querySelectorAll(".thumb")) dom.remove();
		tagContent[tag] = [(() => {
			var _el$2 = _tmpl$2$2(), _el$3 = _el$2.firstChild;
			solid_js_web.setAttribute(_el$3, "href", url);
			solid_js_web.insert(_el$3, tag, null);
			solid_js_web.insert(_el$3, solid_js_web.createComponent(launch_default, {}), null);
			return _el$2;
		})(), content];
	};
	helper.css\`
    #comidread-tag-define {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;

      box-sizing: border-box;
      width: 100%;
      padding: 0 1em;

      text-align: start;
    }

    #taglist {
      position: relative;
    }

    #comidread-tag-define h1 {
      margin: 0.4em 0;
      border-bottom: 1px solid #a2a9b1;
    }

    #comidread-tag-define h1 svg {
      height: 0.7em;
      margin-left: 0.2em;
    }

    #comidread-tag-define ul {
      margin: 0.3em 0 0 1.6em;
      padding: 0;
    }

    #comidread-tag-define li {
      margin-bottom: 0.2em;
    }

    #comidread-tag-define div a {
      text-decoration: underline;
    }

    #comidread-tag-define dd {
      margin-left: 1.6em;
    }

    #comidread-tag-define dl {
      margin-top: 0.2em;
      margin-bottom: 0.5em;
    }
  \`;
	const [show, setShow] = solid_js.createSignal(false);
	const root = helper.querySelector("#taglist");
	let background = "rgba(0, 0, 0, 0)";
	let dom = root;
	while (background === "rgba(0, 0, 0, 0)") {
		background = getComputedStyle(dom).backgroundColor;
		dom = dom.parentElement;
	}
	solid_js_web.render(() => solid_js_web.createComponent(solid_js.Show, {
		get when() {
			return show();
		},
		get children() {
			var _el$4 = _tmpl$3$1();
			solid_js_web.setStyleProperty(_el$4, "background", background);
			solid_js_web.insert(_el$4, () => tagContent[unsafeWindow.selected_tagname] ?? _tmpl$4$1());
			solid_js_web.effect((_$p) => solid_js_web.setStyleProperty(_el$4, "height", \`\${root.scrollHeight}px\`));
			return _el$4;
		}
	}), root);
	unsafeWindow.tag_define = async () => {
		if (!unsafeWindow.selected_tagname) return;
		if (show()) return setShow(false);
		setShow(true);
		try {
			await saveTagContent(unsafeWindow.selected_tagname);
		} catch (error) {
			console.error(error);
			setShow(false);
		}
	};
	helper.hijackFn("toggle_tagmenu", () => setShow(false));
	core.registerEsc("\u5173\u95ED\u663E\u793A\u6807\u7B7E\u5B9A\u4E49", () => show() ? setShow(false) : "SKIP");
};
//#endregion
//#region src/site/ehentai/sidebarOverflow.ts
/** \u5904\u7406\u4FA7\u8FB9\u680F\u6EA2\u51FA */
const sidebarOverflow = (_, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	const { sidebar } = pageCtx.dom;
	new ResizeObserver(() => {
		Reflect.deleteProperty(sidebar.dataset, "long");
		const lastNode = helper.querySelector("#gd5 p:last-of-type");
		if (lastNode.offsetTop + lastNode.offsetHeight > 352) sidebar.dataset.long = "";
	}).observe(sidebar);
	helper.css\`
    #gd5[data-long] {
      --scrollbar-slider: \${getComputedStyle(helper.querySelector(".gm")).borderColor};

      scrollbar-color: var(--scrollbar-slider) transparent;
      scrollbar-width: thin;
      overflow: auto;
      max-height: 352px;

      &::-webkit-scrollbar {
        width: 5px;
        height: 10px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-slider);
      }
    }

    /* \u5728\u663E\u793A ehs \u65F6\u9690\u85CF gd5 \u4E0A\u7684\u6EDA\u52A8\u6761\uFF0C\u907F\u514D\u540C\u65F6\u663E\u793A\u4E24\u4E2A\u6EDA\u52A8\u6761 */
    #gd5[data-long]:has(#ehs-introduce-box .ehs-content) {
      overflow: hidden;
    }

    #gmid #ehs-introduce-box {
      width: 100%;
    }

    /*
      \u6D88\u9664 ehs \u9488\u5BF9\u6309\u94AE\u592A\u591A\u65F6\u7684\u89E3\u51B3\u529E\u6CD5\uFF0C\u7528\u811A\u672C\u7684\u5904\u7406\u65B9\u5F0F\u5C31\u597D\u4E86\uFF0C\u907F\u514D\u5728\u6D6E\u52A8\u6807\u7B7E\u680F\u65F6\u5BFC\u81F4\u6EDA\u52A8
      https://github.com/EhTagTranslation/EhSyringe/commit/009054cc34ee818972d2a042990bf89bdff1895a
    */
    body #gmid #gd5 {
      --ehs-gap: 1;

      justify-content: unset;
    }
  \`;
};
//#endregion
//#region src/site/ehentai/tagLint.tsx
var _tmpl$$1 = /*#__PURE__*/ solid_js_web.template(\`<div><a>\`);
var _tmpl$2$1 = /*#__PURE__*/ solid_js_web.template(\`<span>\u300C<!>\u300D\`);
var _tmpl$3 = /*#__PURE__*/ solid_js_web.template(\`<li>\`);
var _tmpl$4 = /*#__PURE__*/ solid_js_web.template(\`<hr>\`);
var _tmpl$5 = /*#__PURE__*/ solid_js_web.template(\`<ul>\`);
const tagLint = (_, pageCtx) => {
	if (pageCtx.type !== "gallery") return;
	/** \u662F\u5426\u662F\u300CDoujinshi\u300D\u300CManga\u300D\u300CNon-H\u300D */
	const isManga = isInCategories("Doujinshi", "Manga", "Non-H");
	const lintRules = userscript_ehTagRules.getTagLintRules();
	const [warnList, setWarnList] = solid_js.createSignal({});
	helper.css\`
    #comidread-tag-lint [id^='td_'] {
      float: none;
      display: inline-block;
    }
  \`;
	const getTagClass = (tag, weak) => {
		if (weak === void 0) return document.getElementById(\`td_\${tag}\`)?.className;
		return weak ? "gtl" : "gt";
	};
	const TagBase = (props) => (() => {
		var _el$ = _tmpl$$1(), _el$2 = _el$.firstChild;
		_el$2.$$click = (e) => e.preventDefault();
		solid_js_web.insert(_el$2, () => props.name);
		solid_js_web.effect((_p$) => {
			var _v$ = \`td_\${props.name}\`, _v$2 = getTagClass(props.name, props.weak), _v$3 = \`ta_\${props.name}\`, _v$4 = \`https://exhentai.org/tag/\${props.name.replaceAll("_", "+")}\`;
			_v$ !== _p$.e && solid_js_web.setAttribute(_el$, "id", _p$.e = _v$);
			_v$2 !== _p$.t && solid_js_web.className(_el$, _p$.t = _v$2);
			_v$3 !== _p$.a && solid_js_web.setAttribute(_el$2, "id", _p$.a = _v$3);
			_v$4 !== _p$.o && solid_js_web.setAttribute(_el$2, "href", _p$.o = _v$4);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0
		});
		return _el$;
	})();
	const Tag = (props) => {
		const tags = userscript_ehTagRules.splitTagNamespace(props.name);
		return solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return tags.length > 1;
			},
			get fallback() {
				return TagBase(props);
			},
			get children() {
				var _el$3 = _tmpl$2$1(), _el$6 = _el$3.firstChild.nextSibling;
				_el$6.nextSibling;
				solid_js_web.insert(_el$3, solid_js_web.createComponent(solid_js.For, {
					each: tags,
					children: (name, i) => [solid_js_web.memo(() => solid_js_web.memo(() => !!i())() ? \` \${helper.t("other.or")} \` : ""), solid_js_web.createComponent(TagBase, {
						name,
						get weak() {
							return props.weak;
						}
					})]
				}), _el$6);
				return _el$3;
			}
		});
	};
	const WarnItem = (props) => {
		const [before, middle, after] = props.text.split("[tag]");
		return solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return props.warnList?.size;
			},
			get children() {
				return solid_js_web.createComponent(solid_js.For, {
					get each() {
						return [...props.warnList.entries()];
					},
					children: ([tag, tags]) => (() => {
						var _el$7 = _tmpl$3();
						solid_js_web.insert(_el$7, before, null);
						solid_js_web.insert(_el$7, solid_js_web.createComponent(Tag, { name: tag }), null);
						solid_js_web.insert(_el$7, middle, null);
						solid_js_web.insert(_el$7, solid_js_web.createComponent(solid_js.For, {
							each: tags,
							children: (tagName) => solid_js_web.createComponent(Tag, {
								name: tagName,
								get weak() {
									return props.weak;
								}
							})
						}), null);
						solid_js_web.insert(_el$7, after, null);
						return _el$7;
					})()
				});
			}
		});
	};
	let root;
	let dispose;
	const updateLint = helper.singleThreaded(() => {
		const newWarnList = {};
		const [lockTags, weakTags] = getTaglist();
		const tagList = /* @__PURE__ */ new Set([...lockTags, ...weakTags]);
		/** \u6839\u636E\u6307\u5B9A\u89C4\u5219\u68C0\u67E5\u6807\u7B7E\u5E76\u8BB0\u5F55 */
		const checkRules = (tag, ruleName, has = false) => {
			const rules = lintRules[ruleName];
			if (!rules.has(tag)) return;
			for (const targetTag of rules.get(tag)) {
				if (userscript_ehTagRules.hasTag(has ? lockTags : tagList, targetTag) === has) continue;
				newWarnList[ruleName] ??= /* @__PURE__ */ new Map([[tag, []]]);
				const warn = newWarnList[ruleName];
				if (!warn.has(tag)) warn.set(tag, []);
				warn.get(tag).push(targetTag);
			}
		};
		for (const tag of tagList) {
			checkRules(tag, "prerequisite", true);
			checkRules(tag, "conflict");
			if (isManga) checkRules(tag, "possibleConflict");
			checkRules(tag, "combo", true);
		}
		const addOtherWarn = (text, tags) => {
			newWarnList.other ??= [];
			newWarnList.other.push([text, tags]);
		};
		const correctTags = [];
		for (const tag of weakTags) if (/^(?:artist|group):/u.test(tag)) {
			const title = helper.querySelector("#gd2").textContent.toLowerCase();
			if (title.includes(tag.replaceAll(/^(?<_>artist|group):|_/gu, " ").trim())) correctTags.push(tag);
			else {
				const showName = document.getElementById(\`ta_\${tag}\`)?.textContent;
				if (showName && title.includes(showName)) correctTags.push(tag);
			}
		}
		if (correctTags.length > 0) addOtherWarn(helper.t("eh_tag_lint.correct_tag"), correctTags);
		if (isInCategories("Doujinshi") && userscript_ehTagRules.isMissingNamespace(tagList, "parody")) addOtherWarn(helper.t("eh_tag_lint.miss_parody"), ["parody:original"]);
		if (isManga && userscript_ehTagRules.isMissingTags(lockTags, "female:females_only", "female:futanari", "female:shemale") && userscript_ehTagRules.isMissingNamespace(tagList, "male", "mixed")) addOtherWarn(helper.t("eh_tag_lint.miss_female"), ["female:females_only"]);
		setWarnList(newWarnList);
		if (!root?.isConnected) {
			root = document.createElement("div");
			root.id = "comidread-tag-lint";
			helper.querySelector("#taglist").append(root);
		}
		dispose?.();
		dispose = solid_js_web.render(() => solid_js_web.createComponent(solid_js.Show, {
			get when() {
				return Object.keys(warnList()).length;
			},
			get children() {
				return [_tmpl$4(), (() => {
					var _el$9 = _tmpl$5();
					solid_js_web.insert(_el$9, solid_js_web.createComponent(solid_js.For, {
						get each() {
							return warnList().other;
						},
						children: ([text, tags]) => (() => {
							var _el$0 = _tmpl$3();
							solid_js_web.insert(_el$0, text, null);
							solid_js_web.insert(_el$0, solid_js_web.createComponent(solid_js.For, {
								each: tags,
								children: (tagName) => solid_js_web.createComponent(Tag, {
									name: tagName,
									weak: true
								})
							}), null);
							return _el$0;
						})()
					}), null);
					solid_js_web.insert(_el$9, solid_js_web.createComponent(WarnItem, {
						get warnList() {
							return warnList().prerequisite;
						},
						get text() {
							return helper.t("eh_tag_lint.prerequisite");
						},
						weak: false
					}), null);
					solid_js_web.insert(_el$9, solid_js_web.createComponent(WarnItem, {
						get warnList() {
							return warnList().conflict;
						},
						get text() {
							return helper.t("eh_tag_lint.conflict");
						}
					}), null);
					solid_js_web.insert(_el$9, solid_js_web.createComponent(WarnItem, {
						get warnList() {
							return warnList().possibleConflict;
						},
						get text() {
							return helper.t("eh_tag_lint.possible_conflict");
						}
					}), null);
					solid_js_web.insert(_el$9, solid_js_web.createComponent(WarnItem, {
						get warnList() {
							return warnList().combo;
						},
						get text() {
							return helper.t("eh_tag_lint.combo");
						},
						weak: true
					}), null);
					return _el$9;
				})()];
			}
		}), root);
	});
	updateLint();
	helper.hijackFn("tag_update_vote", updateLint);
	const [inputTagList, setInputTagList] = helper.createEqualsSignal([]);
	helper.css(helper.createRootMemo(() => inputTagList().map((tag) => \`#td_\${CSS.escape(tag.replaceAll(" ", "_"))} { box-shadow: 0px 0px 4px var(--tag); }\`).join("\\n")));
	const { newTagField } = pageCtx.dom;
	const updateInputTagList = () => setInputTagList(newTagField.value.split(",").map((tag) => getTagNameFull(tag.trim())).filter(Boolean));
	newTagField.addEventListener("input", updateInputTagList);
	newTagField.addEventListener("keydown", updateInputTagList);
	helper.hijackFn("tag_update_vote", updateInputTagList);
};
solid_js_web.delegateEvents(["click"]);
//#endregion
//#region src/site/ehentai/index.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<hr>\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<p class="g2 gsp"style=padding-bottom:0><img src=https://ehgt.org/g/mr.gif>\`);
core.setupSiteAdapter({
	name: "ehentai",
	options: featureOptions,
	getPageContext,
	handlers: {
		all: ({ setState, setOptions, options }) => {
			const SiteSettings = () => [
				solid_js_web.createComponent(solid_js.For, {
					each: [
						"colorize_tag",
						"float_tag_list",
						"expand_tag_list",
						"tag_lint",
						"",
						"quick_favorite",
						"quick_rating",
						"quick_tag_define",
						"",
						"cross_site_link",
						"detect_ad",
						"add_hotkeys_actions",
						"auto_adjust_option"
					],
					children: (name) => solid_js_web.createComponent(solid_js.Show, {
						when: name,
						get fallback() {
							return _tmpl$();
						},
						get children() {
							return solid_js_web.createComponent(components_Manga.SettingsItemSwitch, {
								get name() {
									return helper.t(\`site.add_feature.\${name}\`);
								},
								get value() {
									return options[name];
								},
								onChange: (v) => setOptions({ [name]: v })
							});
						}
					})
				}),
				_tmpl$(),
				solid_js_web.createComponent(components_Manga.SettingBlockSubtitle, { get children() {
					return helper.t("other.hotkeys");
				} }),
				solid_js_web.createComponent(components_Manga.SettingHotkeys, { keys: ["float_tag_list"] })
			];
			setState((state) => {
				state.manga.editSettingList = (list) => [...list, ["E-Hentai", SiteSettings]];
				state.fab.optionsSpeedDial = [
					"tag_lint",
					"colorize_tag",
					"cross_site_link",
					"detect_ad"
				];
			});
			core.setEscPriority([
				"\u5173\u95ED\u663E\u793A\u6807\u7B7E\u5B9A\u4E49",
				"\u53D6\u6D88\u9009\u4E2D\u5F53\u524D\u6807\u7B7E",
				"\u5173\u95ED\u6D6E\u52A8\u6807\u7B7E\u680F"
			]);
		},
		mpv: ({ setState }) => {
			setState("comicMap", "", { getImgList({ dynamicLazyLoad }) {
				const imagelist = unsafeWindow.imagelist;
				const loadImg = async (i) => {
					const url = () => imagelist[i].i;
					while (!url()) {
						if (!Reflect.has(imagelist[i], "xhr")) {
							unsafeWindow.load_image(i + 1);
							unsafeWindow.next_possible_request = 0;
						}
						await helper.wait(url);
					}
					return url();
				};
				return dynamicLazyLoad({
					loadImg,
					length: imagelist.length
				});
			} });
		},
		gallery: async (coreCtx, pageCtx) => {
			if (Number.isNaN(pageCtx.imgNum)) return core.toast.error(helper.t("site.changed_load_failed"));
			const { newTagField, sidebar } = pageCtx.dom;
			newTagField.addEventListener("keydown", (e) => e.key === "Escape" && newTagField.blur());
			const { setState, options } = coreCtx;
			sidebarOverflow(coreCtx, pageCtx);
			const { handleClick } = await multiSelectLoad(coreCtx, pageCtx);
			solid_js_web.render(() => {
				const hasMultiPage = sidebar.children[6]?.classList.contains("gsp");
				return (() => {
					var _el$3 = _tmpl$2();
					_el$3.firstChild;
					solid_js_web.setStyleProperty(_el$3, "padding-top", hasMultiPage ? 0 : void 0);
					_el$3.addEventListener("click", handleClick, true);
					solid_js_web.insert(_el$3, solid_js_web.createComponent(LoadButton, {
						id: "",
						context: coreCtx,
						get imgNum() {
							return pageCtx.imgNum;
						}
					}), null);
					return _el$3;
				})();
			}, sidebar);
			/** \u5237\u65B0\u6307\u5B9A\u56FE\u7247 */
			const reloadImg = helper.singleThreaded(async (_, url) => {
				const i = pageCtx.imgList.indexOf(url);
				if (i === -1) return;
				pageCtx.imgList[i] = await getImgUrl(pageCtx, i);
				if (!await helper.testImgUrl(pageCtx.imgList[i])) {
					await updatePageUrl(pageCtx, i);
					pageCtx.imgList[i] = await getImgUrl(pageCtx, i);
					core.toast.warn(helper.t("alert.retry_get_img_url", { i }));
					if (!await helper.testImgUrl(pageCtx.imgList[i])) {
						await helper.sleep(500);
						return reloadImg(url);
					}
				}
				setState("comicMap", "", "imgList", i, pageCtx.imgList[i]);
				for (const img of components_Manga.imgList()) if (img.loadType === "error") return reloadImg(img.src);
			});
			setState((state) => {
				state.manga.title = pageCtx.japanTitle || pageCtx.galleryTitle;
				state.manga.onExit = (isEnd) => {
					if (isEnd) helper.scrollIntoView("#cdiv");
					setState("manga", "show", false);
				};
				state.manga.onImgError = reloadImg;
				state.fab.initialShow = options.autoShow;
			});
		}
	},
	features: {
		colorize_tag: colorizeTag,
		quick_favorite: quickFavorite,
		quick_rating: quickRating,
		expand_tag_list: expandTagList,
		add_hotkeys_actions: addHotkeysActions,
		float_tag_list: floatTagList,
		quick_tag_define: quickTagDefine,
		tag_lint: tagLint,
		cross_site_link: crossSiteLink,
		auto_adjust_option: ({ setState }, pageCtx) => {
			if (pageCtx.type !== "gallery") return;
			if (isInCategories("Doujinshi", "Manga", "Non-H")) return;
			setState((state) => {
				const option = { pageNum: 1 };
				state.manga.defaultOption = helper.assign(state.manga.defaultOption ?? {}, option);
				state.manga.option = helper.assign(state.manga.option ?? {}, option);
			});
		}
	}
});
//#endregion
`,"site/jm":`
let core = require("core");
let helper = require("helper");
//#region src/site/jm.tsx
core.setupSiteAdapter({
	name: "jm",
	getPageContext: () => {
		if (!location.pathname.includes("/photo/")) return;
		return { type: "manga" };
	},
	handlers: { manga: async ({ setState }) => {
		if (!await helper.wait(() => unsafeWindow?.onImageLoaded, 5e3)) {
			core.toast.error("\u65E0\u6CD5\u83B7\u53D6\u56FE\u7247", { duration: Infinity });
			return;
		}
		setState("manga", {
			onPrev: helper.querySelectorClick(".menu-bolock-ul :has(> .fa-angle-double-left)"),
			onNext: helper.querySelectorClick(".menu-bolock-ul :has(> .fa-angle-double-right)")
		});
		const imgEleList = helper.querySelectorAll(".scramble-page:not(.thewayhome) > img");
		if (unsafeWindow.aid < unsafeWindow.scramble_id || unsafeWindow.speed === "1") return setState("comicMap", "", { getImgList: () => imgEleList.map((e) => e.dataset.original ?? "") });
		const downloadImg = async (url) => {
			try {
				return await core.request(url, {
					responseType: "blob",
					fetch: true,
					noTip: true
				}, 3);
			} catch {
				return await core.request(url, {
					responseType: "blob",
					revalidate: true,
					fetch: false
				}, 3);
			}
		};
		const loadImg = async (i) => {
			const imgEle = imgEleList[i];
			const originalUrl = imgEle.dataset.original;
			const name = helper.getFileName(originalUrl);
			if (imgEle.dataset.imgUrl) return {
				name,
				src: imgEle.dataset.imgUrl
			};
			const res = await downloadImg(imgEle.dataset.original);
			if (res.response.size === 0) {
				core.toast.warn(\`\u4E0B\u8F7D\u539F\u56FE\u65F6\u51FA\u9519: \${imgEle.dataset.page}\`);
				return "";
			}
			imgEle.src = \`\${URL.createObjectURL(res.response)}#\${imgEle.src}\`;
			try {
				await helper.waitImgLoad(imgEle, 1e4);
			} catch {
				URL.revokeObjectURL(imgEle.src);
				imgEle.src = originalUrl;
				core.toast.warn(\`\u52A0\u8F7D\u539F\u56FE\u65F6\u51FA\u9519: \${imgEle.dataset.page}\`);
				return "";
			}
			try {
				if (imgEle.nextElementSibling?.tagName === "CANVAS") imgEle.nextElementSibling.remove();
				unsafeWindow.onImageLoaded(imgEle);
				const blob = await helper.canvasToBlob(imgEle.nextElementSibling, "image/webp", 1);
				URL.revokeObjectURL(imgEle.src);
				if (!blob) throw new Error("\u8F6C\u6362\u56FE\u7247\u65F6\u51FA\u9519");
				const url = URL.createObjectURL(blob);
				imgEle.dataset.imgUrl = url;
				return {
					name,
					src: url
				};
			} catch (error) {
				imgEle.src = originalUrl;
				core.toast.warn(\`\u8F6C\u6362\u56FE\u7247\u65F6\u51FA\u9519: \${imgEle.dataset.page}, \${error.message}\`);
				return "";
			}
		};
		await helper.wait(() => {
			const loadedNum = helper.querySelectorAll(".lazy-loaded").length;
			return loadedNum > 0 && helper.querySelectorAll("canvas").length - loadedNum <= 1;
		});
		setState("comicMap", "", { getImgList: ({ dynamicLazyLoad }) => dynamicLazyLoad({
			loadImg,
			length: imgEleList.length
		}) });
	} }
});
//#endregion
`,"site/kemono":`
let core = require("core");
let helper = require("helper");
let userscript_multiSelect = require("userscript/multiSelect");
//#region src/site/kemono.tsx
const original = (root = document) => [...root.querySelectorAll(".post__thumbnail a")].map((e) => e.href);
const thumbnail = (root = document) => [...root.querySelectorAll(".post__thumbnail img")].map((e) => e.src);
const handlePwa = () => {
	const zipExtension = /* @__PURE__ */ new Set([
		"zip",
		"rar",
		"7z",
		"cbz",
		"cbr",
		"cb7"
	]);
	for (const e of helper.querySelectorAll(".post__attachment a")) {
		if (!zipExtension.has(e.href.split(".").pop())) continue;
		const a = document.createElement("a");
		a.href = \`https://comic-read.pages.dev/?url=\${encodeURIComponent(e.href)}\`;
		a.textContent = e.textContent.replace("Download ", "ComicReadPWA - ");
		a.className = e.className;
		a.style.opacity = ".6";
		e.parentNode.insertBefore(a, e.nextElementSibling);
	}
};
core.setupSiteAdapter({
	name: "kemono",
	options: {
		autoShow: false,
		defaultOption: { pageNum: 1 },
		/** \u52A0\u8F7D\u539F\u56FE */
		load_original_image: true
	},
	getPageContext: () => {
		const { listId, postId } = /\\/user\\/(?<listId>[^/]+)(?:\\/post\\/(?<postId>[^/]+))?/u.exec(location.pathname)?.groups ?? {};
		if (postId) return {
			type: "manga",
			id: postId
		};
		if (listId) return {
			type: "list",
			id: listId,
			offset: Number(new URLSearchParams(location.search).get("o")) || 0
		};
	},
	handlers: {
		manga: async ({ store, setState, showComic }) => {
			await helper.waitDom(".post__thumbnail");
			handlePwa();
			helper.createEffectOn(() => store.options.load_original_image, (isOriginal, prev) => {
				setState("nowComic", isOriginal ? "original" : "thumbnail");
				if (prev) showComic();
			});
			setState((state) => {
				state.comicMap.original = { getImgList: () => original() };
				state.comicMap.thumbnail = { getImgList: () => thumbnail() };
				state.manga.onNext = helper.querySelectorClick(".post__nav-link.next");
				state.manga.onPrev = helper.querySelectorClick(".post__nav-link.prev");
			});
		},
		list: async (coreCtx, { id }) => {
			const ms = await userscript_multiSelect.useMultiSelectLoad(coreCtx, {
				id,
				onStart: () => {
					for (const item of helper.querySelectorAll(".post-card")) item.style.position = "relative";
				},
				getImgList: async (postId) => {
					const res = await core.request(\`\${location.pathname}/post/\${postId}\`);
					const doc = helper.domParse(res.responseText);
					return coreCtx.options.load_original_image ? original(doc) : thumbnail(doc);
				}
			});
			await ms.registerItems(id, async (map) => {
				for (const dom of await helper.waitDom(".post-card", 20)) map.set(dom, dom.dataset.id);
			});
			return ms.createCleanup(id);
		}
	}
});
//#endregion
`,"site/nhentai":`
let solid_js_web = require("solid-js/web");
let core = require("core");
let helper = require("helper");
let userscript_detectAd = require("userscript/detectAd");
//#region src/userscript/nhentaiApi.ts
const nhApi = (url, details) => core.request(url, {
	responseType: "json",
	headers: { "User-Agent": navigator.userAgent },
	fetch: false,
	...details
});
const getNhentaiData = async (id) => {
	const { response } = await nhApi(\`https://nhentai.net/api/v2/galleries/\${id}\`, {
		errorText: helper.t("site.ehentai.nhentai_error"),
		noTip: true
	});
	return response;
};
const toImgList = (data) => data.pages.map((page) => ({
	src: \`https://i.nhentai.net/\${page.path}\`,
	width: page.width,
	height: page.height
}));
//#endregion
//#region src/site/nhentai.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<a href=javascript:; id=comicReadMode class="btn btn-secondary"><i class="fa fa-book"></i> Read\`);
/** \u7B49\u5F85\u6C34\u5408\u5B8C\u6210\uFF0C\u786E\u4FDD\u4E4B\u540E\u7684 dom \u64CD\u4F5C\u4E0D\u4F1A\u88AB\u6C34\u5408\u8986\u76D6 */
const waitHydrated = () => helper.waitDom("#svelte-announcer", 1, 5e3);
core.setupSiteAdapter({
	name: "nhentai",
	options: {
		/** \u65E0\u9650\u6EDA\u52A8 */
		auto_page_turn: true,
		/** \u5F7B\u5E95\u5C4F\u853D\u6F2B\u753B */
		block_totally: true,
		/** \u5728\u65B0\u9875\u9762\u4E2D\u6253\u5F00\u94FE\u63A5 */
		open_link_new_page: true,
		/** \u8BC6\u522B\u5E7F\u544A\u9875 */
		detect_ad: true
	},
	getPageContext: () => {
		const galleryId = /^\\/g\\/(?<id>\\d+)/u.exec(location.pathname)?.groups?.id;
		if (galleryId) return {
			type: "manga",
			galleryId
		};
		if (helper.querySelector(".container.index-container")) return { type: "list" };
	},
	handlers: { manga: async ({ setState, showComic }) => {
		setState("manga", { onExit(isEnd) {
			if (isEnd) helper.scrollIntoView("#comment-container");
			setState("manga", "show", false);
		} });
		setState("comicMap", "", { getImgList: async () => {
			const galleryId = /^\\/g\\/(?<id>\\d+)/u.exec(location.pathname)?.groups?.id;
			if (!galleryId) throw new Error(helper.t("site.changed_load_failed"));
			const galleryData = await getNhentaiData(galleryId);
			return toImgList(galleryData);
		} });
		await waitHydrated();
		const comicReadModeDom = (() => {
			var _el$ = _tmpl$();
			_el$.$$click = () => showComic();
			return _el$;
		})();
		document.getElementById("download")?.after(comicReadModeDom);
	} },
	features: {
		/** \u8BC6\u522B\u5E7F\u544A\u9875 */
		detect_ad: async ({ store, setState }, pageCtx) => {
			if (pageCtx.type !== "manga") return;
			if (!helper.querySelector("#tags .tag[href=\\"/tag/extraneous-ads/\\"]")) return;
			setState("comicMap", "", "adList", new helper.ReactiveSet());
			await userscript_detectAd.getAdPageByContent(helper.querySelectorAll(".thumb-container img").map((img) => img.src), store.comicMap[""].adList);
			helper.createEffectOn(() => store.comicMap[""].imgList, (imgList) => imgList?.length && userscript_detectAd.getAdPageByContent(imgList.map((img) => typeof img === "string" ? img : img.src), store.comicMap[""].adList));
			helper.css(() => {
				if (!store.comicMap[""]?.adList?.size) return "";
				return [...store.comicMap[""].adList].map((i) => \`
              .thumb-container:nth-of-type(\${i + 1}):not(:hover) {
                filter: blur(8px);
                clip-path: border-box;
              }\`).join("\\n");
			});
		},
		/** \u5F7B\u5E95\u5C4F\u853D\u6F2B\u753B */
		block_totally: (_, pageCtx) => {
			if (pageCtx.type !== "list") return;
			helper.css\`
        .blacklisted.gallery {
          display: none;
        }
      \`;
		},
		/** \u5728\u65B0\u9875\u9762\u4E2D\u6253\u5F00\u94FE\u63A5 */
		open_link_new_page: async (_, pageCtx) => {
			if (pageCtx.type !== "list") return;
			await waitHydrated();
			for (const e of helper.querySelectorAll("a:not([href^=\\"javascript:\\"])")) e.setAttribute("target", "_blank");
		},
		/** \u65E0\u9650\u6EDA\u52A8 */
		auto_page_turn: async (_, pageCtx) => {
			if (pageCtx.type !== "list") return;
			await waitHydrated();
			let nextUrl = helper.querySelector("a.next")?.href;
			let lastUrl = location.href;
			if (!nextUrl) return;
			helper.css\`
        hr {
          bottom: 1px;
          box-sizing: border-box;
          margin: -1em auto 2em;
        }

        hr:last-child {
          position: relative;
          animation: load 0.8s linear alternate infinite;
        }

        hr:not(:last-child) {
          display: none;
        }

        @keyframes load {
          0% {
            transform: scaleX(1);
          }

          100% {
            transform: scaleX(0);
          }
        }
      \`;
			const contentDom = document.getElementById("content");
			const getObserveDom = () => contentDom.querySelector(":is(.index-container, #favcontainer):last-of-type");
			const loadNextPage = helper.singleThreaded(async () => {
				if (!nextUrl) return;
				const res = await core.request(nextUrl, {
					fetch: true,
					errorText: helper.t("site.nhentai.fetch_next_page_failed")
				});
				const html = helper.domParse(res.responseText);
				const pagination = html.querySelector(".pagination");
				history.pushState(null, "", lastUrl);
				lastUrl = nextUrl;
				nextUrl = pagination.querySelector("a.next")?.href;
				contentDom.append(html.querySelector(".index-container, #favcontainer"), pagination);
				const hr = document.createElement("hr");
				contentDom.append(hr);
				observer.disconnect();
				observer.observe(getObserveDom());
				if (!nextUrl) hr.style.animationPlayState = "paused";
			}, { abandon: true });
			const observer = new IntersectionObserver((entries) => entries[0].isIntersecting && loadNextPage(), { threshold: .5 });
			observer.observe(getObserveDom());
			if (helper.querySelector("section.pagination")) contentDom.append(document.createElement("hr"));
			return () => observer.disconnect();
		}
	}
});
solid_js_web.delegateEvents(["click"]);
//#endregion
`,"site/pixiv":`
let core = require("core");
let helper = require("helper");
let userscript_multiSelect = require("userscript/multiSelect");
//#region src/site/pixiv.tsx
let imgs = [];
core.setupSiteAdapter({
	name: "pixiv",
	options: {
		autoShow: false,
		defaultOption: { pageNum: 1 },
		/** \u52A0\u8F7D\u539F\u56FE */
		load_original_image: true
	},
	getPageContext: async () => {
		const listId = /^\\/users\\/(?<listId>\\d+)/u.exec(location.pathname)?.groups?.listId;
		if (listId) return {
			type: "list",
			id: listId
		};
		if (!location.pathname.startsWith("/artworks/")) return;
		const id = /^\\/artworks\\/(?<artworkId>\\d+)/u.exec(location.pathname)?.groups?.artworkId;
		if (!id) {
			imgs.length = 0;
			return;
		}
		const res = await core.request(\`/ajax/illust/\${id}/pages\`, { responseType: "json" });
		if (res.response.body.length === 0) return;
		imgs = res.response.body;
		return {
			type: "manga",
			id
		};
	},
	handlers: {
		manga: ({ store, setState, showComic }) => {
			helper.createEffectOn(() => store.options.load_original_image, (isOriginal, prev) => {
				setState("nowComic", isOriginal ? "original" : "regular");
				if (prev) showComic();
			});
			const getImgList = (isOriginal) => () => imgs.map((img) => {
				return {
					src: isOriginal ? img.urls.original : img.urls.regular,
					height: img.height,
					width: img.width
				};
			});
			setState((state) => {
				state.comicMap.original = { getImgList: getImgList(true) };
				state.comicMap.regular = { getImgList: getImgList(false) };
			});
		},
		list: async (coreCtx, { id }) => {
			const { options } = coreCtx;
			const ms = await userscript_multiSelect.useMultiSelectLoad(coreCtx, {
				id,
				getImgList: async (workId) => {
					const res = await core.request(\`/ajax/illust/\${workId}/pages\`, { responseType: "json" });
					if (options.load_original_image) return res.response.body.map((img) => img.urls.original);
					return res.response.body.map((img) => img.urls.regular);
				}
			});
			await ms.registerItems(id, async (map) => {
				for (const dom of await helper.waitDom("li div[data-worktype=\\"illusts\\"]")) map.set(dom, dom.dataset.workid);
			});
			return ms.createCleanup(id);
		}
	}
});
//#endregion
`,"site/selfhosted":`
let components_Manga = require("components/Manga");
let core = require("core");
let helper = require("helper");
let request = require("request");
//#region src/site/selfhosted.tsx
if (document.querySelector(\`head > meta[content="A manga reader that runs tachiyomi's extensions"]\`)) {
	const jump = (mangaId, chapterId) => {
		location.pathname = \`/manga/\${mangaId}/chapter/\${chapterId}\`;
	};
	const getChapters = async (mangaId, chapterId) => {
		const res = await request.request("/api/graphql", {
			method: "POST",
			data: JSON.stringify({
				operationName: "GET_CHAPTERS",
				query: \`query GET_CHAPTERS($mangaId: Int!, $chapterId: Int!) {
                chapters(condition: {
                  mangaId: $mangaId, sourceOrder: $chapterId}
                ) { nodes { pageCount } }
                manga(id: $mangaId) { chapters { totalCount } }
              }\`,
				variables: {
					mangaId,
					chapterId
				}
			}),
			responseType: "json"
		});
		if (res.response.data.chapters.nodes[0].pageCount <= 0) {
			await helper.sleep(200);
			return getChapters(mangaId, chapterId);
		}
		return res.response.data;
	};
	core.setup({
		name: "Tachidesk",
		isMangaPage: () => {
			const match = /\\/manga\\/(?<mangaId>\\d+)\\/chapter\\/(?<chapterId>\\d+)/u.exec(location.pathname)?.groups;
			if (!match) return false;
			return {
				mangaId: Number(match.mangaId),
				chapterId: Number(match.chapterId)
			};
		},
		async getImgList({ setState }, { mangaId, chapterId }) {
			const data = await getChapters(mangaId, chapterId);
			const [{ pageCount }] = data.chapters.nodes;
			const chapterCount = data.manga.chapters.totalCount;
			setState("manga", {
				onPrev: chapterId > 0 ? () => jump(mangaId, chapterId - 1) : void 0,
				onNext: chapterId < chapterCount ? () => jump(mangaId, chapterId + 1) : void 0
			});
			return helper.range(pageCount, (i) => \`/api/v1/manga/\${mangaId}/chapter/\${chapterId}/page/\${i}\`);
		},
		handler: ({ setState }) => setState("manga", { onShowImgsChange: helper.debounce((showImgs, imgList) => {
			const lastImgUrl = imgList[[...showImgs].at(-1)].src;
			helper.querySelector(\`img[src$="\${lastImgUrl}"]\`)?.scrollIntoView({
				behavior: "instant",
				block: "end"
			});
		}, 500) })
	});
}
if (location.pathname === "/reader" && document.querySelector(".ip > a[href=\\"https://github.com/Difegue/LANraragi\\"]")?.textContent.trim() === "LANraragi.") {
	let initFlag = true;
	/** \u662F\u5426\u7531\u670D\u52A1\u5668\u6765\u8DDF\u8E2A\u8FDB\u5EA6 */
	let isServerTracksProgress;
	const checkServerTracksProgress = async () => {
		if (isServerTracksProgress !== void 0) return;
		isServerTracksProgress = (await request.request("/api/info", {
			responseType: "json",
			fetch: true,
			noTip: true
		})).response.server_tracks_progress;
	};
	const getProgress = async (id) => {
		await checkServerTracksProgress();
		if (!isServerTracksProgress) return Number(localStorage.getItem(\`\${id}-reader\`)) - 1 || 0;
		return (await request.request(\`/api/archives/\${id}/metadata\`, {
			responseType: "json",
			errorText: "Error fetching progress",
			fetch: true
		})).response.progress - 1;
	};
	const updateProgress = async (id, pageNum) => {
		await checkServerTracksProgress();
		if (isServerTracksProgress) await request.request(\`/api/archives/\${id}/progress/\${pageNum + 1}\`, {
			method: "PUT",
			fetch: true,
			noTip: true
		});
		else localStorage.setItem(\`\${id}-reader\`, \`\${pageNum + 1}\`);
	};
	core.setup({
		name: "LANraragi",
		isMangaPage: () => {
			if (location.pathname !== "/reader") return;
			const id = new URLSearchParams(location.search).get("id");
			if (id) return { id };
		},
		getImgList: async (_, { id }) => {
			await checkServerTracksProgress();
			return (await request.request(\`/api/archives/\${id}/files\`, {
				responseType: "json",
				errorText: "Error fetching image list"
			})).response.pages;
		},
		handler: ({ setState }, { id }) => {
			setState("manga", { onShowImgsChange: helper.debounce((showImgs, imgList) => {
				if (imgList.length > 0 && initFlag) {
					initFlag = false;
					(async () => {
						const progress = await getProgress(id);
						components_Manga.setState((state) => {
							state.activePageIndex = state.pageList.findIndex((page) => page.includes(progress));
						});
					})();
					return;
				}
				updateProgress(id, [...showImgs].at(-1));
			}, 200) });
		}
	});
}
//#endregion
`,"site/yamibo":`
let solid_js_web = require("solid-js/web");
let core = require("core");
let helper = require("helper");
let solid_js = require("solid-js");
//#region src/site/yamibo.tsx
var _tmpl$ = /*#__PURE__*/ solid_js_web.template(\`<li><a style=color:unset>\u56DE\u7B2C<!>\u9875\`);
var _tmpl$2 = /*#__PURE__*/ solid_js_web.template(\`<a class=historyTag>\u56DE\u7B2C<!>\u9875 \`);
var _tmpl$3 = /*#__PURE__*/ solid_js_web.template(\`<div class=historyTag>+\`);
/** \u4ECE URL \u5B57\u7B26\u4E32\u4E2D\u63D0\u53D6 fid */
const extractFid = (url) => {
	if (!url) return void 0;
	const fid = new URLSearchParams(url).get("fid");
	return fid ? Number(fid) : void 0;
};
core.setupSiteAdapter({
	name: "yamibo",
	options: {
		\u8BB0\u5F55\u9605\u8BFB\u8FDB\u5EA6: true,
		\u5173\u95ED\u5FEB\u6377\u5BFC\u822A\u7684\u8DF3\u8F6C: true,
		\u4FEE\u6B63\u70B9\u51FB\u9875\u6570\u65F6\u7684\u8DF3\u8F6C\u5224\u5B9A: true,
		\u56FA\u5B9A\u5BFC\u822A\u6761: true,
		\u81EA\u52A8\u7B7E\u5230: true,
		\u79FB\u52A8\u7AEF\u663E\u793A\u5E16\u5B50\u6743\u9650: true
	},
	getPageContext: () => {
		if (/thread(?:-\\d+){3}|mod=viewthread/u.test(document.URL)) {
			const tid = unsafeWindow.tid ?? new URLSearchParams(location.search).get("tid") ?? /\\/thread-(?<tid>\\d+)-\\d+-\\d+.html/u.exec(location.pathname)?.groups?.tid;
			if (!tid) return;
			const fid = unsafeWindow.fid || extractFid(location.search) || extractFid(helper.querySelector("h2 > a, .bm.cl a[href*=\\"fid=\\"]")?.href);
			return {
				type: "thread",
				tid,
				fid,
				isManga: fid === 30 || fid === 37
			};
		}
		if (/forum(?:-\\d+){2}|mod=forumdisplay/u.test(document.URL)) return {
			type: "forum",
			isMobile: !document.querySelector("#flk")
		};
	},
	handlers: {
		all: () => {
			helper.css\`
        #fab {
          --fab: #6e2b19;
        }

        .historyTag {
          border: 2px solid #6e2b19;
          white-space: nowrap;
        }

        a.historyTag {
          margin-left: 1em;
          padding: 1px 4px;
          border-radius: 4px 0 0 4px;

          font-weight: bold;
          color: #6e2b19;
        }

        a.historyTag:last-child {
          border-radius: 4px;
        }

        div.historyTag {
          display: initial;

          margin-left: -0.4em;
          padding: 1px;
          border-radius: 0 4px 4px 0;

          color: #ffedbb;

          background-color: #6e2b19;
        }

        #threadlisttableid tbody:nth-child(2n) div.historyTag {
          color: #fff6d7;
        }

        /* \u5C06\u300C\u56DE\u590D/\u67E5\u770B\u300D\u5217\u52A0\u5BBD\u4E00\u70B9 */
        .tl .num {
          width: 80px !important;
        }
      \`;
		},
		thread: ({ setState, options, showComic, loadComic }, { isManga }) => {
			for (const e of helper.querySelectorAll("img[file*=\\"sinaimg.cn\\"]")) e.setAttribute("referrerpolicy", "no-referrer");
			const readMode = () => {
				if (!!helper.querySelector(".pg > .prev")) setState("flag", "needAutoShow", false);
				let imgList = helper.querySelectorAll(":is(.t_fsz, .message) img");
				const getImgList = () => {
					let i = imgList.length;
					while (i--) {
						const img = imgList[i];
						const file = img.getAttribute("file");
						if (file && img.src !== file) {
							img.setAttribute("src", file);
							img.setAttribute("lazyloaded", "true");
						}
						if (img.src.includes("static/image") || img.complete && img.naturalHeight && img.naturalWidth && img.naturalHeight < 500 && img.naturalWidth < 500) imgList.splice(i, 1);
					}
					return imgList.map((img) => img.src);
				};
				setState("comicMap", "", { getImgList });
				setState("manga", {
					onLoading(_imgList, img) {
						if (img && img.width < 500 && img.height < 500) return loadComic();
					},
					onExit(isEnd) {
						if (isEnd) helper.scrollIntoView(".psth, .rate, #postlist > div:nth-of-type(2)");
						setState("manga", "show", false);
					}
				});
				if (helper.querySelector("div.pti > div.authi")) {
					helper.querySelector("div.pti > div.authi").insertAdjacentHTML("beforeend", "<span class=\\"pipe show\\">|</span><a id=\\"comicReadMode\\" class=\\"show\\" href=\\"javascript:;\\">\u6F2B\u753B\u9605\u8BFB</a>");
					document.getElementById("comicReadMode")?.addEventListener("click", () => showComic());
				}
				if (helper.querySelector("#threadindex")) helper.hijackFn("ajaxinnerhtml", () => {
					imgList = helper.querySelectorAll(".t_fsz img");
					if (imgList.length === 0 || getImgList().length === 0) return;
					if (options.autoShow) showComic();
				});
				const tagDom = helper.querySelector(".ptg.mbm.mtn > a");
				if (tagDom) {
					const [, tagId] = tagDom.href.split("id=");
					const reg = /(?<=<th>\\s<a href="thread-)\\d+(?=-)/gu;
					let threadList = [];
					const setPrevNext = async (pageNum = 1) => {
						const res = await core.request(\`/misc.php?mod=tag&id=\${tagId}&type=thread&page=\${pageNum}\`);
						const newList = Array.from(res.responseText.matchAll(reg), ([tid]) => Number(tid));
						threadList = [...threadList, ...newList];
						const index = threadList.indexOf(unsafeWindow.tid);
						if (newList.length > 0 && (index === -1 || !threadList[index + 1])) return setPrevNext(pageNum + 1);
						return setState("manga", {
							onPrev: threadList[index - 1] ? () => location.assign(\`thread-\${threadList[index - 1]}-1-1.html\`) : void 0,
							onNext: threadList[index + 1] ? () => location.assign(\`thread-\${threadList[index + 1]}-1-1.html\`) : void 0
						});
					};
					setTimeout(setPrevNext);
				}
			};
			if (isManga) readMode();
			else {
				helper.querySelector("div.pti > div.authi").insertAdjacentHTML("beforeend", "<span class=\\"pipe show\\">|</span><a id=\\"comicReadMode\\" class=\\"show\\" href=\\"javascript:;\\">\u6F2B\u753B\u9605\u8BFB</a>");
				const button = document.getElementById("comicReadMode");
				button?.addEventListener("click", () => {
					button.previousElementSibling?.remove();
					button.remove();
					readMode();
					showComic();
				});
			}
		}
	},
	features: {
		\u56FA\u5B9A\u5BFC\u822A\u6761: () => helper.css\`
        .header-stackup {
          position: fixed !important;
        }
      \`,
		\u5173\u95ED\u5FEB\u6377\u5BFC\u822A\u7684\u8DF3\u8F6C: () => helper.querySelector("#qmenu a")?.setAttribute("href", "javascript:;"),
		\u4FEE\u6B63\u70B9\u51FB\u9875\u6570\u65F6\u7684\u8DF3\u8F6C\u5224\u5B9A: (_, pageCtx) => {
			if (pageCtx.type !== "forum") return;
			const list = helper.querySelectorAll(".tps>a");
			let i = list.length;
			while (i--) list[i].setAttribute("onClick", "atarget(this)");
		},
		\u81EA\u52A8\u7B7E\u5230: async () => {
			if (!unsafeWindow.discuz_uid || unsafeWindow.discuz_uid === "0") return;
			const todayString = (/* @__PURE__ */ new Date()).toLocaleDateString("zh-CN");
			if (todayString === localStorage.getItem("signDate")) return;
			const sign = helper.querySelector("#scbar_form > input[name=\\"formhash\\"]")?.value;
			if (!sign) return;
			try {
				const body = await (await fetch(\`plugin.php?id=zqlj_sign&sign=\${sign}\`)).text();
				if (!/\u6210\u529F\uFF01|\u6253\u8FC7\u5361/u.test(body)) throw new Error("\u81EA\u52A8\u7B7E\u5230\u5931\u8D25");
				core.toast.success("\u81EA\u52A8\u7B7E\u5230\u6210\u529F");
				localStorage.setItem("signDate", todayString);
			} catch {
				core.toast.error("\u81EA\u52A8\u7B7E\u5230\u5931\u8D25");
			}
		},
		\u8BB0\u5F55\u9605\u8BFB\u8FDB\u5EA6: async (_, pageCtx) => {
			if (pageCtx.type === "thread") {
				const { tid } = pageCtx;
				/** \u56DE\u590D\u6570 */
				let allReplies;
				try {
					const res = await core.request(\`/api/mobile/index.php?module=viewthread&tid=\${tid}\`, {
						responseType: "json",
						errorText: "\u83B7\u53D6\u5E16\u5B50\u56DE\u590D\u6570\u65F6\u51FA\u9519",
						noTip: true
					});
					allReplies = Number.parseInt(res.response?.Variables?.thread?.allreplies, 10);
				} catch {}
				/** \u5F53\u524D\u6240\u5728\u9875\u6570 */
				const currentPageNum = Number.parseInt(helper.querySelector("#pgt strong")?.textContent ?? helper.querySelector("#dumppage")?.value ?? "1", 10);
				const cache = await helper.useCache({ history: "tid" });
				const data = await cache.get("history", \`\${tid}\`);
				if (data && currentPageNum < data.lastPageNum) return;
				/** \u76D1\u89C6\u697C\u5C42\u5217\u8868 */
				const watchFloorList = helper.querySelectorAll(data?.lastAnchor && currentPageNum === data.lastPageNum ? \`#\${data.lastAnchor} ~ div\` : "#postlist > div, .plc.cl");
				if (watchFloorList.length === 0) return;
				let id = 0;
				/** \u50A8\u5B58\u6570\u636E\uFF0C\u4F46\u662F\u9632\u6296 */
				const debounceSave = (saveData) => {
					if (id) window.clearTimeout(id);
					id = window.setTimeout(async () => {
						id = 0;
						await cache.set("history", saveData);
					}, 200);
				};
				const observer = new IntersectionObserver((entries) => {
					const trigger = entries.find((e) => e.isIntersecting);
					if (!trigger) return;
					const triggerIndex = watchFloorList.indexOf(trigger.target);
					if (triggerIndex === -1) return;
					for (const e of watchFloorList.splice(0, triggerIndex + 1)) observer.unobserve(e);
					debounceSave({
						tid: \`\${tid}\`,
						lastPageNum: currentPageNum,
						lastReplies: allReplies || data?.lastReplies || 0,
						lastAnchor: trigger.target.id
					});
				}, { rootMargin: "-160px" });
				for (const e of watchFloorList) observer.observe(e);
				return () => observer.disconnect();
			}
			if (pageCtx.type === "forum") {
				const { isMobile } = pageCtx;
				const cache = await helper.useCache({ history: "tid" });
				const [updateFlag, setUpdateFlag] = solid_js.createSignal(false);
				const updateHistoryTag = () => setUpdateFlag((val) => !val);
				const { listSelector, getTid, getUrl } = isMobile ? {
					listSelector: ".threadlist li.list",
					getTid: (e) => new URLSearchParams(e.children[1].getAttribute("href")).get("tid"),
					getUrl: (data, tid) => \`forum.php?mod=viewthread&tid=\${tid}&extra=page%3D1&mobile=2&page=\${data.lastPageNum}#\${data.lastAnchor}\`
				} : {
					listSelector: "tbody[id^=normalthread]",
					getTid: (e) => e.id.split("_")[1],
					getUrl: (data, tid) => \`thread-\${tid}-\${data.lastPageNum}-1.html#\${data.lastAnchor}\`
				};
				for (const e of helper.querySelectorAll(listSelector)) {
					const tid = getTid(e);
					solid_js_web.render(() => {
						const [data, setData] = solid_js.createSignal();
						helper.createEffectOn(updateFlag, () => cache.get("history", tid).then(setData));
						const url = solid_js.createMemo(() => data() ? getUrl(data(), tid) : "");
						const lastReplies = solid_js.createMemo(() => !isMobile && data() ? Number(e.querySelector(".num a").innerHTML) - data().lastReplies : 0);
						return solid_js_web.createComponent(solid_js.Show, {
							get when() {
								return Boolean(data());
							},
							get children() {
								return isMobile ? (() => {
									var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$5 = _el$2.firstChild.nextSibling;
									_el$5.nextSibling;
									solid_js_web.addEventListener(_el$2, "click", unsafeWindow.atarget, true);
									solid_js_web.insert(_el$2, () => data()?.lastPageNum, _el$5);
									solid_js_web.effect(() => solid_js_web.setAttribute(_el$2, "href", url()));
									return _el$;
								})() : [(() => {
									var _el$6 = _tmpl$2(), _el$9 = _el$6.firstChild.nextSibling;
									_el$9.nextSibling;
									solid_js_web.addEventListener(_el$6, "click", unsafeWindow.atarget, true);
									solid_js_web.insert(_el$6, () => data()?.lastPageNum, _el$9);
									solid_js_web.effect(() => solid_js_web.setAttribute(_el$6, "href", url()));
									return _el$6;
								})(), solid_js_web.createComponent(solid_js.Show, {
									get when() {
										return lastReplies() > 0;
									},
									get children() {
										var _el$0 = _tmpl$3();
										_el$0.firstChild;
										solid_js_web.insert(_el$0, lastReplies, null);
										return _el$0;
									}
								})];
							}
						});
					}, isMobile ? e.children[3] : e.getElementsByTagName("th")[0]);
				}
				document.addEventListener("visibilitychange", updateHistoryTag);
				helper.querySelector("#autopbn")?.addEventListener("click", updateHistoryTag);
				return () => document.removeEventListener("visibilitychange", updateHistoryTag);
			}
		},
		\u79FB\u52A8\u7AEF\u663E\u793A\u5E16\u5B50\u6743\u9650: async (_, pageCtx) => {
			if (pageCtx.type !== "forum" || !pageCtx.isMobile) return;
			const apiUrl = new URL(location.href);
			apiUrl.pathname = "/api/mobile/index.php";
			apiUrl.searchParams.set("module", apiUrl.searchParams.get("mod"));
			apiUrl.searchParams.delete("mod");
			const res = await core.request(\`\${apiUrl}\`, {
				responseType: "json",
				errorText: "\u83B7\u53D6\u5E16\u5B50\u6743\u9650\u65F6\u51FA\u9519"
			});
			const readpermMap = /* @__PURE__ */ new Map();
			for (const { tid, readperm } of res.response.Variables.forum_threadlist) if (readperm !== "0") readpermMap.set(Number(tid), Number(readperm));
			for (const item of helper.querySelectorAll(".threadlist li.list")) {
				const a = item.querySelector("a[href*=\\"&tid=\\"]");
				const tid = Number(new URLSearchParams(a.href).get("tid"));
				if (!readpermMap.has(tid)) continue;
				item.querySelector(".threadlist_foot li.mr").insertAdjacentHTML("beforeend", \`<span style="margin-right: .5em; color: #EE1B2E">#\u6743\u9650\${readpermMap.get(tid)}</span>\`);
			}
		}
	}
});
solid_js_web.delegateEvents(["click"]);
//#endregion
`,"site/yurifans":`
let core = require("core");
let helper = require("helper");
//#region src/site/yurifans.tsx
core.setupSiteAdapter({
	name: "yurifans",
	options: { \u81EA\u52A8\u7B7E\u5230: true },
	getPageContext: async () => {
		if (!await helper.waitDom("a.post-list-cat-item[title=\\"\u5728\u7EBF\u533A-\u6F2B\u753B\\"]")) return;
		if (helper.querySelector(".content-hidden")) return {
			type: "manga",
			mangaType: "purchased"
		};
		if (helper.querySelector(".xControl")) return {
			type: "manga",
			mangaType: "folded"
		};
		return {
			type: "manga",
			mangaType: "simple"
		};
	},
	handlers: { manga: async ({ store, setState, showComic, init }, { mangaType }) => {
		switch (mangaType) {
			case "purchased": {
				const imgList = helper.querySelector(".content-hidden").getElementsByTagName("img");
				if (await helper.wait(() => imgList.length, 1e3)) {
					const getImgList = () => Array.from(imgList, (e) => e.src);
					setState("comicMap", "", { getImgList });
				}
				break;
			}
			case "folded": {
				setState((state) => {
					state.flag.needAutoShow = false;
					state.options.autoShow = false;
				});
				const switchChapter = (i) => {
					showComic(i);
					setState("manga", {
						onPrev: Reflect.has(store.comicMap, i - 1) ? () => switchChapter(i - 1) : void 0,
						onNext: Reflect.has(store.comicMap, i + 1) ? () => switchChapter(i + 1) : void 0
					});
				};
				for (const [i, a] of helper.querySelectorAll(".xControl > a").entries()) {
					const item = a.parentElement.nextElementSibling;
					setState("comicMap", i, { getImgList: () => Array.from(item.querySelectorAll("img"), (e) => e.dataset.src ?? e.src) });
					a.addEventListener("click", () => setTimeout(() => item.style.display !== "none" && switchChapter(i)));
				}
				init();
				break;
			}
			case "simple": {
				await helper.wait(() => helper.querySelectorAll(".entry-content img").length);
				const getImgList = () => helper.querySelectorAll(".entry-content img").map((e) => e.dataset.src || e.src);
				setState("comicMap", "", { getImgList });
				break;
			}
		}
	} },
	features: { \u81EA\u52A8\u7B7E\u5230: async () => {
		if (!globalThis.b2token) return;
		const todayString = (/* @__PURE__ */ new Date()).toLocaleDateString("zh-CN");
		if (todayString === localStorage.getItem("signDate")) return;
		try {
			const res = await core.request("/wp-json/b2/v1/userMission", {
				method: "POST",
				noTip: true,
				headers: { Authorization: \`Bearer \${b2token}\` }
			});
			const data = JSON.parse(res.responseText);
			if (!(data?.mission?.date || !Number.isNaN(Number(data)))) throw new Error("\u7B7E\u5230\u5931\u8D25");
			core.toast("\u81EA\u52A8\u7B7E\u5230\u6210\u529F");
			localStorage.setItem("signDate", todayString);
		} catch {
			core.toast.error("\u81EA\u52A8\u7B7E\u5230\u5931\u8D25");
		}
	} }
});
//#endregion
`};let supportWorker;const gmApi={GM:typeof GM>"u"?void 0:GM,GM_addElement:typeof GM_addElement>"u"?void 0:GM_addElement,GM_getResourceText:typeof GM_getResourceText>"u"?void 0:GM_getResourceText,GM_xmlhttpRequest:typeof GM_xmlhttpRequest>"u"?void 0:GM_xmlhttpRequest,unsafeWindow:typeof unsafeWindow>"u"?window:unsafeWindow},gmApiList=Object.keys(gmApi),crsLib={process:{env:{NODE_ENV:"production"}},...gmApi},tempName=Math.random().toString(36).slice(2),getResource=e=>{const o=gmApi.GM_getResourceText?.(e.replaceAll("/","|").replaceAll("@","_"));if(!o)throw new Error(`\u5916\u90E8\u6A21\u5757 ${e} \u672A\u5728 @Resource \u4E2D\u58F0\u660E`);return e==="@tensorflow/tfjs-backend-webgpu"?o.replace("@tensorflow/tfjs-core","@tensorflow/tfjs"):o},evalCode=e=>{if(e){if(gmApi.GM_addElement)return GM_addElement("script",{textContent:e})?.remove();eval.call(gmApi.unsafeWindow,e)}},selfImport=e=>{let o=libCodeMap[e]??getResource(e);if(e.startsWith("worker/")&&supportWorker)try{const t=new Map([["Comlink",getResource("comlink")]]),s=p=>p.replaceAll(/require\(['"](?<moduleName>.+?)['"]\)/gu,(l,c)=>(t.has(c)||t.set(c,s(getResource(c))),`moduleMap['${c}']`)),n=s(o);let a=`const moduleMap = {};
`;for(const[p,l]of t)a+=`
moduleMap['${p}'] = {};
(function (exports, module) { ${l} }) (
  moduleMap['${p}'],
  {
    set exports(value) { moduleMap['${p}'] = value; },
    get exports() { return moduleMap['${p}']; }
  },
);
`;a+=`
const exports = {};
${n}
moduleMap['Comlink'].expose(exports);`;const d=URL.createObjectURL(new Blob([a],{type:"text/javascript"}));setTimeout(()=>URL.revokeObjectURL(d));const g=new Worker(d);crsLib[e]=require("comlink").wrap(g);return}catch{}let r=`
    (function (process, require, exports, module, ${gmApiList.join(", ")}) {
      ${o}
    })(
      window['${tempName}'].process,
      window['${tempName}'].require,
      window['${tempName}']['${e}'],
      ((module) => ({
        set exports(value) { module['${e}'] = value; },
        get exports() { return module['${e}']; },
      }))(window['${tempName}']),
      ${gmApiList.map(t=>`window['${tempName}'].${t}`).join(", ")}
    );
  `;gmApi.unsafeWindow[tempName]=crsLib,gmApi.unsafeWindow[tempName][e]={},evalCode(r),Reflect.deleteProperty(gmApi.unsafeWindow,tempName)},require=e=>{const o={value:!0},r=()=>{};r.default={};const t=new Proxy(r,{get(s,n){return n==="__esModule"?o:n==="default"?t:(crsLib[e]||selfImport(e),Reflect.has(crsLib[e],"default")&&Reflect.has(crsLib[e].default,n)?crsLib[e].default[n]:crsLib[e][n])},apply(s,n,a){crsLib[e]||selfImport(e);const d=crsLib[e];return(typeof d.default=="function"?d.default:d)(...a)},construct(s,n){crsLib[e]||selfImport(e);const a=crsLib[e];return new(typeof a.default=="function"?a.default:a)(...n)},ownKeys(){return crsLib[e]||selfImport(e),Reflect.ownKeys(crsLib[e])},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return t};crsLib.require=require,{supportWorker}=require("userscript/supportWorker");let components_Manga=require("components/Manga"),core=require("core"),helper=require("helper"),helper_languages=require("helper/languages"),request=require("request"),userscript_copyApi=require("userscript/copyApi"),userscript_otherSite=require("userscript/otherSite");const nhApi=(e,o)=>core.request(e,{responseType:"json",headers:{"User-Agent":navigator.userAgent},fetch:!1,...o}),getNhentaiData=async e=>{const{response:o}=await nhApi(`https://nhentai.net/api/v2/galleries/${e}`,{errorText:helper.t("site.ehentai.nhentai_error"),noTip:!0});return o},toImgList=e=>e.pages.map(o=>({src:`https://i.nhentai.net/${o.path}`,width:o.width,height:o.height})),getZaiManHuaCommentList=async(e,o)=>{const{errno:r,errmsg:t,data:{list:s=[]}={}}=(await request.request(`https://v4api.zaimanhua.com/app/v1/viewpoint/list?type=0&comicId=${e}&chapterId=${o}`,{responseType:"json"})).response;if(r)throw new Error(t||"\u83B7\u53D6\u5410\u69FD\u5217\u8868\u5931\u8D25");return s.map(n=>n[7]).filter(Boolean)};try{switch(location.hostname){case"bbs.yamibo.com":selfImport("site/yamibo");break;case"www.yamibo.com":{if(location.pathname!=="/manga/view-chapter")break;const e=new URLSearchParams(location.search).get("id");if(!e)break;const o=Number(helper.querySelector("section div:first-of-type div:last-of-type").innerHTML.split("\uFF1A")[1]);if(Number.isNaN(o))throw new Error(helper.t("site.changed_load_failed"));const r=async t=>{const s=await core.request(`https://www.yamibo.com/manga/view-chapter?id=${e}&page=${t}`);return/(?<=<img id=['"]imgPic['"].+?src=['"]).+?(?=['"])/u.exec(s.responseText)[0].replaceAll("&amp;","&").replaceAll("http://","https://")};core.setup({name:"newYamibo",getImgList:({dynamicLazyLoad:t})=>t({loadImg:r,length:o}),onNext:()=>helper.querySelectorClick("#btnNext"),onPrev:()=>helper.querySelectorClick("#btnPrev"),onExit:t=>t&&helper.scrollIntoView("#w1")});break}case"exhentai.org":case"e-hentai.org":selfImport("site/ehentai");break;case"nhentai.net":selfImport("site/nhentai");break;case"yuri.website":selfImport("site/yurifans");break;case"www.copy3000.com":case"copy3000.com":case"www.2026copy.com":case"2026copy.com":case"www.2025copy.com":case"2025copy.com":case"www.copy20.com":case"copy20.com":case"www.copy4000.com":case"mangacopy.com":case"www.mangacopy.com":selfImport("site/copymanga");break;case"www.zaimanhua.com":case"manhua.zaimanhua.com":core.setup({name:"zaiManHua",isMangaPage:async()=>location.pathname.startsWith("/view/")?(await helper.wait(()=>!!helper.querySelector(".scrollbar-demo-item")),!0):!1,getImgList:async()=>(await helper.wait(()=>{const e=helper.querySelector("#qiehuan_txt");if(e)return e.textContent!=="\u5207\u6362\u5230\u4E0A\u4E0B\u6EDA\u52A8\u9605\u8BFB"?!0:(e.click(),helper.sleep(1e3))}),helper.querySelectorAll(".scrollbar-demo-item img").map(e=>e.src)),onNext:()=>helper.querySelectorClick("#next_chapter"),onPrev:()=>helper.querySelectorClick("#prev_chapter"),handler:({setState:e})=>{const[,,,o,r]=location.pathname.split("/");if(!o||!r)throw new Error(helper.t("site.changed_load_failed"));(async()=>{try{const t=await getZaiManHuaCommentList(o,r);t.length>0&&e("manga","commentList",t)}catch(t){helper.log.error(t)}})()}});break;case"m.zaimanhua.com":{const e=async t=>{const s=await core.request(`https://v4api.zaimanhua.com/app/v1/comic${t}?_v=15`,{responseType:"json"});return s.response.errno&&core.toast.error(`${helper.t("alert.comic_load_error")}: ${s.response.errmsg}`,{throw:!0}),s.response.data.data},o=(t,s)=>e(`/chapter/${t}/${s}`),r=t=>e(`/detail/${t}`);core.setup({name:"zaiManHua",isMangaPage:()=>{if(location.pathname!=="/pages/comic/page")return!1;const t=new URLSearchParams(location.search),s=Number(t.get("comic_id")),n=Number(t.get("chapter_id"));if(!s||!n)throw new Error(helper.t("site.changed_load_failed"));return{comicId:s,chapterId:n}},async getImgList({setState:t},{comicId:s,chapterId:n}){const a=await r(s),d=(a.chapters.length===1?a.chapters[0]:a.chapters.find(l=>l.data.find(c=>c.chapter_id===n))).data.toSorted((l,c)=>l.chapter_order-c.chapter_order),g=d.findIndex(({chapter_id:l})=>l===n),p=l=>l in d?()=>location.assign(`/pages/comic/page?comic_id=${s}&chapter_id=${d[l].chapter_id}`):void 0;return t("manga",{onPrev:p(g-1),onNext:p(g+1)}),(await o(s,n)).page_url_hd},handler:({setState:t},{comicId:s,chapterId:n})=>{(async()=>{try{const a=await getZaiManHuaCommentList(s,n);a.length>0&&t("manga","commentList",a)}catch(a){helper.log.error(a)}})()}});break}case"tw.manhuagui.com":case"m.manhuagui.com":case"www.mhgui.com":case"www.manhuagui.com":{if(!/\/comic\/\d+\/\d+\.html/u.test(location.pathname))break;let comicInfo;try{const dataScript=helper.querySelectorAll("body > script:not([src])").find(e=>e.innerHTML.startsWith("window["));if(!dataScript)throw new Error(helper.t("site.changed_load_failed"));comicInfo=JSON.parse(eval(dataScript.innerHTML.slice(26)).match(/(?<=\()\{.+\}/u)[0])}catch{core.toast.error(helper.t("site.changed_load_failed"));break}helper.css`
        #smh-msg-box {
          z-index: 2147483647 !important;
        }
      `;const createChapterNav=e=>{if(e===0)return;const o=location.pathname.replace(/(?<=\/)\d+(?=\.html)/u,`${e}`);return()=>location.assign(o)};core.setup({name:"manhuagui",getImgList(){const e=Object.entries(comicInfo.sl).map(o=>`${o[0]}=${o[1]}`).join("&");if(comicInfo.files)return comicInfo.files.map(o=>`${unsafeWindow.pVars.manga.filePath}${o}?${e}`);if(comicInfo.images){const{origin:o}=new URL(helper.querySelector("#manga img").src);return comicInfo.images.map(r=>`${o}${r}?${e}`)}return core.toast.error(helper.t("site.changed_load_failed"),{throw:!0}),[]},onNext:()=>createChapterNav(comicInfo.nextId),onPrev:()=>createChapterNav(comicInfo.prevId)});break}case"www.manhuaren.com":case"m.1kkk.com":case"www.1kkk.com":case"tel.dm5.com":case"en.dm5.com":case"cnc.dm5.com":case"www.dm5.cn":case"www.dm5.com":{if(!Reflect.has(unsafeWindow,"DM5_CID"))break;const imgNum=unsafeWindow.DM5_IMAGE_COUNT??unsafeWindow.imgsLen;if(!(Number.isSafeInteger(imgNum)&&imgNum>0)){core.toast.error(helper.t("site.changed_load_failed"));break}const getPageImg=async i=>{const res=await unsafeWindow.$.ajax({type:"GET",url:"chapterfun.ashx",data:{cid:unsafeWindow.DM5_CID,page:i,key:unsafeWindow.$("#dm5_key").length>0?unsafeWindow.$("#dm5_key").val():"",language:1,gtk:6,_cid:unsafeWindow.DM5_CID,_mid:unsafeWindow.DM5_MID,_dt:unsafeWindow.DM5_VIEWSIGN_DT,_sign:unsafeWindow.DM5_VIEWSIGN}});return eval(res)},getChapterNav=(e,o)=>helper.querySelectorClick(()=>helper.querySelector(e)??helper.querySelectorAll(".view-bottom-bar a").find(r=>r.textContent?.includes(o)));core.setup({name:"dm5",getImgList({dynamicLoad:e}){return Array.isArray(unsafeWindow.newImgs)&&unsafeWindow.newImgs.every(helper.isUrl)?unsafeWindow.newImgs:e(async o=>{const r=new Set;for(;r.size<imgNum;)for(const t of await getPageImg(r.size+1))r.has(t)||(r.add(t),o(r.size-1,t))},imgNum)},onPrev:()=>getChapterNav(".logo_1","\u4E0A\u4E00\u7AE0"),onNext:()=>getChapterNav(".logo_2","\u4E0B\u4E00\u7AE0"),onExit:e=>e&&helper.scrollIntoView(".postlist")});break}case"www.mangabz.com":case"mangabz.com":{if(!Reflect.has(unsafeWindow,"MANGABZ_CID"))break;const imgNum=unsafeWindow.MANGABZ_IMAGE_COUNT??unsafeWindow.imgsLen;if(!(Number.isSafeInteger(imgNum)&&imgNum>0)){core.toast.error(helper.t("site.changed_load_failed"));break}const getPageImg=async i=>{const res=await unsafeWindow.$.ajax({type:"GET",url:"chapterimage.ashx",data:{cid:unsafeWindow.MANGABZ_CID,page:i,key:"",_cid:unsafeWindow.MANGABZ_CID,_mid:unsafeWindow.MANGABZ_MID,_dt:unsafeWindow.MANGABZ_VIEWSIGN_DT,_sign:unsafeWindow.MANGABZ_VIEWSIGN}});return eval(res)},getChapterNav=(e,o)=>helper.querySelectorClick(()=>helper.querySelector(e)??helper.querySelectorAll(".bottom-bar-tool a").find(r=>r.textContent?.includes(o)));core.setup({name:"mangabz",getImgList:({dynamicLoad:e})=>e(async o=>{const r=new Set;for(;r.size<imgNum;)for(const t of await getPageImg(r.size+1))r.has(t)||(r.add(t),o(r.size-1,t))},imgNum),onNext:()=>getChapterNav('body > .container a[href^="/"]:last-child',"\u4E0B\u4E00"),onPrev:()=>getChapterNav('body > .container a[href^="/"]:first-child',"\u4E0A\u4E00")});break}case"komiic.com":case"komiic.cc":{const e=`
        query imagesByChapterId($chapterId: ID!) {
          imagesByChapterId(chapterId: $chapterId) {
            id
            kid
            height
            width
            __typename
          }
        }`,o=r=>helper.querySelectorClick(".v-bottom-navigation__content button:not([disabled])",r);core.setup({name:"komiic",isMangaPage:()=>/^\/comic\/(?<comicId>\d+)\/chapter\/(?<chapterId>\d+)\//u.exec(location.pathname)?.groups??!1,getImgList:async(r,{chapterId:t})=>(await core.request("/api/query",{method:"POST",responseType:"json",headers:{"content-type":"application/json"},data:JSON.stringify({operationName:"imagesByChapterId",variables:{chapterId:t},query:e})})).response.data.imagesByChapterId.map(({kid:s})=>`/api/image/${s}`),onPrev:()=>o("\u4E0A\u4E00"),onNext:()=>o("\u4E0B\u4E00")});break}case"8.twobili.com":case"a.twobili.com":case"articles.onemoreplace.tw":case"www.8comic.com":{if(!/^\/(?:online|ReadComic|comic)\//u.test(location.pathname))break;request.downloadImgHeaders.Referer="https://www.8comic.com/";const e=()=>Array.from(unsafeWindow.xx.matchAll(/(?<= s=").+?(?=")/gu),([o])=>decodeURIComponent(o));core.setup({name:"8comic",getImgList:e,onNext:()=>helper.querySelectorClick("#nextvol"),onPrev:()=>helper.querySelectorClick("#prevvol")});break}case"www.wn09.cfd":case"www.wn09.shop":case"www.wnacg.com":case"wnacg.com":{const buttonDom=helper.querySelector("#bodywrap a.btn");buttonDom&&(buttonDom.style.setProperty("background-color","#607d8b"),buttonDom.style.setProperty("background-image","none"));const match=/\/photos-(?<type>slist|slide|list)-aid-(?<id>\d+)/u.exec(location.pathname)?.groups;if(!match?.type||!match?.id||match?.type==="index")break;const getImgList=unsafeWindow.imglist?()=>unsafeWindow.imglist.filter(({caption:e})=>e!=="\u559C\u6B61\u7D33\u58EB\u6F2B\u756B\u7684\u540C\u5B78\u8ACB\u52A0\u5165\u6536\u85CF\u54E6\uFF01").map(({url:e})=>e):async()=>{const res=await core.request(`/photos-item-aid-${match.id}.html`),pageUrl=/"page_url":(?<pageUrl>\[.+\]),/u.exec(res.responseText)?.groups.pageUrl;if(!pageUrl)throw new Error(helper.t("site.changed_load_failed"));return eval(pageUrl)};core.setup({name:"wnacg",getImgList});break}case"18comic.ink":case"jmcomic-zzz.one":case"jmcomic-zzz.org":case"comic18j-rita.net":case"comic18j-bibi.me":case"comic18j-bibi.cc":case"18comic.org":case"18comic.vip":selfImport("site/jm");break;case"noy1.top":core.setup({name:"NoyAcg",isMangaPage:()=>location.hash.startsWith("#/read/")&&{id:location.hash},async getImgList(){const[,,e]=location.hash.split("/"),[o]=(await helper.wait(()=>helper.querySelector(".lazy-load-image-background img"))).src.split(e),r=await helper.wait(()=>helper.querySelectorAll(".lazy-load-image-background").length);return helper.range(r,t=>`${o}${e}/${t+1}.webp`)}});break;case"www.relamanhua.org":case"www.manga2024.com":case"www.2024manga.com":if(!location.pathname.includes("/chapter/"))break;if(!document.querySelector(".disData[contentkey]")){core.toast.error(helper.t("site.changed_load_failed"));break}core.setup({name:"relamanhua",getImgList:()=>userscript_copyApi.getImglistByHtml(),onNext:()=>helper.querySelectorClick(".comicContent-next a:not(.prev-null)"),onPrev:()=>helper.querySelectorClick(".comicContent-prev:not(.index,.list) a:not(.prev-null)")});break;case"hanime1.me":if(!location.pathname.startsWith("/comic/"))break;core.setup({name:"hanime1",getImgList:async()=>{const e=await helper.wait(()=>helper.querySelector(".comics-metadata-margin-top a:has(span.material-icons)")),o=/\/g\/(?<id>\d+)\//u.exec(e.href)?.groups?.id;if(!o)throw new Error(helper.t("site.changed_load_failed"));const r=await getNhentaiData(o);return toImgList(r)}});break;case"hitomi.la":core.setup({name:"hitomi",isMangaPage:()=>helper.wait(()=>unsafeWindow.galleryinfo&&Reflect.has(unsafeWindow.galleryinfo,"files")&&unsafeWindow.galleryinfo.type!=="anime",5e3),getImgList:()=>unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo.id,e,"webp")),initOptions:{defaultOption:{imgRecognition:{enabled:!0}}}});break;case"hdoujin.org":{const e=localStorage.getItem("clearance");if(!e)throw new Error(helper.t("site.changed_load_failed"));const o=async(r,t)=>(await core.request(`https://api.hdoujin.org/books${r}?crt=${e}`,{fetch:!0,responseType:"json",...t})).response;core.setup({name:"hdoujin",isMangaPage:()=>{const r=/\/g\/(?<galleryId>\d+)\/(?<galleryKey>.+?)(?:\/read\/\d+)?$/u.exec(location.pathname)?.groups;return r?{type:"manga",...r}:!1},getImgList:async({dynamicLazyLoad:r},{galleryId:t,galleryKey:s})=>{const{data:n}=await o(`/detail/${t}/${s}`,{method:"POST"}),[[a]]=Object.entries(n).filter(([,{id:c,key:m}])=>c&&m).toSorted(([c],[m])=>c==="0"?-1:m==="0"?1:Number(m)-Number(c)),{id:d,key:g}=n[a],{base:p,entries:l}=await o(`/data/${t}/${s}/${d}/${g}/${a}`);return r({length:l.length,loadImg:async c=>{const m=await core.request(`${p}${l[c].path}`,{cookie:document.cookie,headers:{Referer:"https://hdoujin.org/",Origin:"https://hdoujin.org","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},responseType:"blob",fetch:!1});return URL.createObjectURL(m.response)}})}});break}case"shupogaki.moe":case"hoshino.one":case"niyaniya.moe":{const e=r=>new Promise(t=>{const s=new XMLHttpRequest;s.responseType="blob",s.open("GET",r),s.onload=()=>{t(URL.createObjectURL(s.response))},s.send()}),o=localStorage.getItem("clearance");core.setup({name:"schale",isMangaPage:()=>/\/g\/(?<galleryId>\d+)\/(?<galleryKey>.+?)(?:\/read\/\d+)?$/u.exec(location.pathname)?.groups??!1,async getImgList({dynamicLazyLoad:r},{galleryId:t,galleryKey:s}){const n=await core.request(`https://api.schale.network/books/detail/${t}/${s}?crt=${o}`,{fetch:!0,responseType:"json",method:"POST"}),[[a,{id:d,key:g}]]=Object.entries(n.response.data).filter(([,u])=>u.id&&u.key).toSorted(([,u],[,_])=>_.size-u.size),{base:p,entries:l}=(await core.request(`https://api.schale.network/books/data/${t}/${s}/${d}/${g}/${a}?crt=${o}`,{fetch:!0,responseType:"json"})).response,{length:c}=l;return r({loadImg:async u=>{const{path:_,dimensions:h}=l[u],f=performance.now(),w=await e(`${p}${_}?w=${h[0]}`);return await helper.sleep(500-(performance.now()-f)),w},length:c,concurrency:1})}});break}case"nude-moon.org":if(/^\/\d+-/u.exec(location.pathname)===null)break;components_Manga.listenHotkey({scroll_right:()=>unsafeWindow.nextImg(),scroll_left:()=>unsafeWindow.backImg()}),core.setup({name:"nude-moon",initOptions:{autoShow:!1,defaultOption:{pageNum:1}},async getImgList(){if(unsafeWindow.images)return unsafeWindow.images.map(t=>t.src);const e=location.href.replace(/(?<slug>\/[^/-]+)(?<dash>-)/u,"$<slug>-online-"),{response:o}=await core.request(e),r=Array.from(o.matchAll(/images\[\d+\]\.src = '(?<src>.+?)';/gu),({groups:{src:t}})=>`https://nude-moon.org${t}`);if(r.length===0)throw new Error(helper.t("site.changed_load_failed"));return r}});break;case"hentaizap.com":case"imhentai.xxx":case"hentaiera.com":case"hentaienvy.com":{const e=helper.querySelector(":is(#thumbs_box, #thumbs_gallery_div, #append_thumbs, #ap_thumbs) img[data-src]");if(!e)break;const o=e.dataset.src;if(!o||!unsafeWindow.g_th)throw new Error(helper.t("site.changed_load_failed"));const r=o.replace(/\/\dt.[a-z]+$/u,"");core.setup({name:"HentaiEnvy",getImgList(){const t=[];for(const[s,n]of Object.entries(unsafeWindow.g_th)){const[a,d,g]=n.split(",");t[Number(s)-1]={src:`${r}/${s}.${helper.fileType[a]}`,width:Number(d),height:Number(g)}}return t}});break}case"mangadex.org":core.setup({name:"mangadex",isMangaPage:()=>/^\/chapter\/(?<id>[^/]+)/u.exec(location.pathname)?.groups,async getImgList(){const e=location.pathname.split("/").at(2),{response:{baseUrl:o,chapter:{data:r,hash:t}}}=await core.request(`https://api.mangadex.org/at-home/server/${e}?forcePort443=false`,{responseType:"json"});return r.map(s=>`${o}/data/${t}/${s}`)},onPrev:()=>helper.querySelectorClick('#chapter-selector > a[href^="/chapter/"]:nth-of-type(1)'),onNext:()=>helper.querySelectorClick('#chapter-selector > a[href^="/chapter/"]:nth-of-type(2)')});break;case"nicomanga.com":{const e=()=>unsafeWindow.chapterImages;core.setup({name:"welovemanga",isMangaPage:()=>helper.wait(()=>e()?.length>0),getImgList:e,onNext:()=>helper.querySelectorClick(".next-chapter"),onPrev:()=>helper.querySelectorClick(".prev-chapter")});break}case"weloma.art":case"love4u.net":{if(!helper.querySelector("#chapter-images img"))break;const e=r=>{const t=r.dataset.srcset||r.dataset.original||r.dataset.src||r.src;if(t&&!t.endsWith(".gif"))return t.trim();if(r.dataset.img)return atob(r.dataset.img)},o=()=>helper.querySelectorAll("#chapter-images img").map(e).filter(Boolean);core.setup({name:"welovemanga",getImgList:o,onNext:()=>helper.querySelectorClick(".rd_top-right.next:not(.disabled)"),onPrev:()=>helper.querySelectorClick(".rd_top-left.prev:not(.disabled)")});break}case"klz9.com":{if(!location.pathname.includes("-chapter-"))break;const e=r=>helper.querySelectorAll("main button.flex-1")[r],o=r=>{const t=e(r);return t&&!t.disabled?()=>t.click():void 0};core.setupSimple({name:"klz9",selector:"main img:not(a img)",isMangaPage:async()=>location.pathname.includes("-chapter-")?(await helper.wait(()=>helper.querySelector("main img:not(a img)")),{id:location.pathname}):!1,onPrev:()=>o(0),onNext:()=>o(1)});break}case"pawchive.pw":case"kemono.cr":case"kemono.su":case"kemono.party":selfImport("site/kemono");break;case"nekohouse.su":if(!location.pathname.includes("/post/"))break;core.setup({name:"nekohouse",getImgList:()=>helper.querySelectorAll(".fileThumb").map(e=>e.getAttribute("href")),initOptions:{autoShow:!1,defaultOption:{pageNum:1}}});break;case"www.pixiv.net":selfImport("site/pixiv");break;case"weibo.com":{let e=0;const o=()=>(e=e%4+1,`wx${e}.sinaimg.cn`),r=t=>t&&`https://${o()}/large/${t}.jpg`;core.setupSiteAdapter({name:"weibo",options:{autoShow:!1},getPageContext:()=>{const t=/^(?:\/(?<isTarticle>ttarticle\/p\/show)|\/(?<isDetail>\d+\/[A-Za-z0-9]+))$/u.exec(location.pathname)?.groups;if(t?.isTarticle)return{type:"tarticle",isManga:!0,id:new URLSearchParams(location.search).get("id")};if(t?.isDetail)return{type:"detail",isManga:!0,id:location.pathname}},handlers:{tarticle:({setState:t})=>{t("comicMap","",{getImgList:()=>helper.querySelectorAll('[node-type="articleContent"] figure img').map(n=>r(n.getAttribute("pid"))||n.src)})},detail:({setState:t})=>{t("comicMap","",{getImgList:()=>helper.querySelectorAll(".woo-box-wrap .woo-picture-img").map(n=>r(/(?<pid>[^/]+)\.jpg$/u.exec(n.src)?.groups?.pid)||n.src)})}}});break}case"comic.hypergryph.com":{const e=()=>`https://comic.hypergryph.com/api${/\/comic\/.+/u.exec(location.pathname)?.[0]??""}`,o=async t=>{const s=await core.request(`${e()}/page?pageNum=${t+1}`);return JSON.parse(s.responseText).data.url},r=t=>helper.querySelectorClick("footer button:not([disabled]) a",t);core.setup({name:"terraHistoricus",isMangaPage:()=>location.href.includes("episode")&&{id:location.href},async getImgList({dynamicLazyLoad:t}){const s=(await core.request(e(),{responseType:"json"})).response.data.pageInfos;if(s.length===0&&location.pathname.includes("episode"))throw new Error("\u83B7\u53D6\u56FE\u7247\u5217\u8868\u65F6\u51FA\u9519");return t({loadImg:o,length:s.length})},onPrev:()=>r("\u4E0A\u4E00"),onNext:()=>r("\u4E0B\u4E00")});break}case"postimg.cc":{const e=helper.querySelectorAll("#thumb-list [data-hotlink]");if(e.length<=1)break;core.setup({name:"postimg",getImgList:()=>e.map(o=>`https://i.postimg.cc/${o.dataset.hotlink}/${o.dataset.name}.${o.dataset.ext}`)});break}case"manga.nicovideo.jp":{const e=unsafeWindow.args.pages;if(!e?.length)break;const o=r=>new Promise(t=>{unsafeWindow.ImageLoader.getInstance(unsafeWindow.jQuery,window).loadImage(r,s=>t(s))});core.setup({name:"nico",getImgList:({dynamicLazyLoad:r})=>r({loadImg:async t=>{const{url:s,width:n,height:a}=e[t];return{src:await o(s),width:n,height:a}},length:e.length}),onPrev:()=>helper.querySelectorClick("#full_episode_control_bar .prev a:not(.disabled)"),onNext:()=>helper.querySelectorClick("#full_episode_control_bar .next a:not(.disabled)")});break}case"sai-zen-sen.jp":switch(/\/[^/]+\/[^/]+\//u.exec(location.pathname)?.[0]){case"/special/4pages-comics/":case"/works/comics/":core.setup({name:"sai-zen-sen",getImgList:()=>Object.values(unsafeWindow.B.Package.Manifest.items).map(({href:e})=>e).filter(Boolean).map(e=>`${unsafeWindow.B.Path}/${e}`),onPrev:()=>helper.querySelectorClick("ul.volumes > li:nth-child(2) > a[href]"),onNext:()=>helper.querySelectorClick("ul.volumes > li:nth-child(3) > a[href]")});break;case"/comics/twi4/":core.setup({name:"sai-zen-sen",getImgList:()=>unsafeWindow.t4.Meta.Items.map(({ImageFileName:e})=>`${unsafeWindow.t4.GA.Gate.x_directory}works/${e}`)})}break;case"geinou-nude.com":{const e=helper.querySelectorAll("main img.size-medium").map(o=>{const r=o.dataset.src??"",t=/-(?<w>\d+)x(?<h>\d+)\.[a-z]+$/iu.exec(r)?.groups;return t?{src:r,width:Number(t.w),height:Number(t.h)}:r});if(e.length===0)break;core.setup({name:"geinou-nude",getImgList:()=>e});break}case"comic-read.pages.dev":unsafeWindow.GM_xmlhttpRequest=GM_xmlhttpRequest,unsafeWindow.toast=core.toast;break;default:selfImport("site/selfhosted"),(async()=>{if(await GM.getValue(location.hostname)!==void 0)return helper.requestIdleCallback(userscript_otherSite.otherSite);await GM.registerMenuCommand((e=>{switch(e){case"en":return"Enter simple reading mode";case"ru":return"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F";default:return"\u4F7F\u7528\u7B80\u6613\u9605\u8BFB\u6A21\u5F0F"}})(await helper_languages.getInitLang()),()=>userscript_otherSite.otherSite())})()}}catch(e){helper.log.error(e)}
