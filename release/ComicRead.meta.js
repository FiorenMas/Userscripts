// ==UserScript==
// @name            ComicRead
// @namespace       ComicRead
// @version         11.12.0
// @author          hymbz
// @license         AGPL-3.0-or-later
// @noframes
// @match           *://*/*
// @connect         yamibo.com
// @connect         dmzj.com
// @connect         idmzj.com
// @connect         exhentai.org
// @connect         e-hentai.org
// @connect         hath.network
// @connect         nhentai.net
// @connect         hypergryph.com
// @connect         mangabz.com
// @connect         copymanga.site
// @connect         copymanga.info
// @connect         copymanga.net
// @connect         copymanga.org
// @connect         copymanga.tv
// @connect         mangacopy.com
// @connect         xsskc.com
// @connect         schale.network
// @connect         self
// @connect         127.0.0.1
// @connect         *
// @grant           GM_addElement
// @grant           GM_getResourceText
// @grant           GM_addStyle
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
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUxpcWB9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i////198il17idng49DY3PT297/K0MTP1M3X27rHzaCxupmstbTByK69xOfr7bfFy3WOmqi4wPz9/X+XomSBjqW1vZOmsN/l6GmFkomeqe7x8vn6+kv+1vUAAAAOdFJOUwDsAoYli9zV+lIqAZEDwV05SQAAAUZJREFUOMuFk+eWgjAUhGPBiLohjZACUqTp+z/gJkqJy4rzg3Nn+MjhwB0AANjv4BEtdITBHjhtQ4g+CIZbC4Qb9FGb0J4P0YrgCezQqgIA14EDGN8fYz+f3BGMASFkTJ+GDAYMUSONzrFL7SVvjNQIz4B9VERRmV0rbJWbrIwidnsd6ACMlEoip3uad3X2HJmqb3gCkkJELwk5DExRDxA6HnKaDEPSsBnAsZoANgJaoAkg12IJqBiPACImXQKF9IDULIHUkOk7kDpeAMykHqCEWACy8ACdSM7LGSg5F3HtAU1rrkaK9uGAshXS2lZ5QH/nVhmlD8rKlmbO3ZsZwLe8qnpdxJRnLaci1X1V5R32fjd5CndVkfYdGpy3D+htU952C/ypzPtdt3JflzZYBy7fi/O1euvl/XH1Pp+Cw3/1P1xOZwB+AWMcP/iw0AlKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC
// @resource        solid-js https://registry.npmmirror.com/solid-js/1.9.1/files/dist/solid.cjs
// @resource        fflate https://registry.npmmirror.com/fflate/0.8.2/files/umd/index.js
// @resource        jsqr https://registry.npmmirror.com/jsqr/1.4.0/files/dist/jsQR.js
// @resource        comlink https://registry.npmmirror.com/comlink/4.4.1/files/dist/umd/comlink.js
// @resource        dmzjDecrypt https://update.sleazyfork.org/scripts/467177/1207199/dmzjDecrypt.js
// @resource        solid-js|store https://registry.npmmirror.com/solid-js/1.9.1/files/store/dist/store.cjs
// @resource        solid-js|web https://registry.npmmirror.com/solid-js/1.9.1/files/web/dist/web.cjs
// @supportURL      https://github.com/hymbz/ComicReadScript/issues
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/ComicRead.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/ComicRead.meta.js
// ==/UserScript==
