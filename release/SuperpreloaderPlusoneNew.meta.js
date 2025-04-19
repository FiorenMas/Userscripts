// ==UserScript==
// @name         Super_preloaderPlus_one_New
// @namespace    https://github.com/machsix
// @author       Mach6
// @contributers alexolog, heroboy, suchunchen, YFdyh000
// @thanksto     ywzhaiqi, NLF
// @version      8.0.1
// @license      GPL-3.0
// @update       2025/4/18
// @homepageURL  https://github.com/machsix/Super-preloader
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/SuperpreloaderPlusoneNew.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/SuperpreloaderPlusoneNew.meta.js
// @supportURL   https://github.com/machsix/Super-preloader/issue
// @contributionURL https://ko-fi.com/machsix
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==
// @require      https://cdn.jsdelivr.net/gh/machsix/gm4-polyfill@2.0/gm4-polyfill-mach6-legacy.js
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.info
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM.registerMenuCommand
// @connect      wedata.net
// @connect      github.io
// @run-at       document-idle
// @include      http*
// @exclude      http*://mail.google.com/*
// @exclude      http*://maps.google*
// @exclude      http*://www.google.com/reader*
// @exclude      http*://www.google.com/calendar*
// @exclude      https://docs.google.com/*
// @exclude      http*://app.yinxiang.com/*
// @exclude      http*://www.dropbox.com/*
// @exclude      http*://www.toodledo.com/*
// @exclude      http*://cloud.feedly.com/*
// @exclude      http*://weibo.com/*
// @exclude      http*://w.qq.com/*
// @exclude      http*://web2.qq.com/*
// @exclude      http*://openapi.qzone.qq.com/*
// @exclude      http*://*cloud.vip.xunlei.com/*
// @exclude      http*://www.wumii.com/*
// @exclude      http*://pan.baidu.com/*
// @exclude      http*://yun.baidu.com/*
// @exclude      http*://www.cnbeta.com/*
// @exclude      http*://www.youku.com/
// @exclude      http*://v.youku.com/*
// @exclude      http*://www.iqiyi.com/*
// @exclude      http*://www.duokan.com/reader/*
// @exclude      https://www.kohls.com/*
// @exclude      http*://list.jd.com/*
// @exclude      http*://eclick.baidu.com/*
// @exclude      http*://googleads.g.doubleclick.net/*
// @exclude      http*://pos.baidu.com/*
// @exclude      http*://tpc.googlesyndication.com/*
// @exclude      http*://ad.doubleclick.net/*
// @exclude      http*://ad.agrantsem.com/*
// @exclude      http*://www.youtube.com/embed/*
// @exclude      https://assets.tumblr.com/*
// @exclude      http*://www.paypal.com/*
// @exclude      http*://dash.cloudflare.com/*
// @exclude      http*://assets.tumblr.com/*
// @exclude      http*://www.tumblr.com/video/*
// @exclude      http*://*.awsapps.com/*
// @exlucde      http*://www.commcarehq.org/accounts/login/*gre
// @exclude      http*://simkl.com/*
// ==/UserScript==
	"// ==UserScript==\n// @name         ".concat(SCRIPT_INFO.name, "\n// @name:zh-CN   ").concat(SCRIPT_INFO['name-CN'], "\n// @name:zh-TW   ").concat(SCRIPT_INFO['name-CN'], "\n// @namespace    ").concat(SCRIPT_INFO.namespace, "\n// @description  Preload and Autopager\n// @description:zh-CN  \u9884\u8BFB+\u7FFB\u9875..\u5168\u52A0\u901F\u4F60\u7684\u6D4F\u89C8\u4F53\u9A8C\n// @description:zh-TW  \u9884\u8BFB+\u7FFB\u9875..\u5168\u52A0\u901F\u4F60\u7684\u6D4F\u89C8\u4F53\u9A8C\n// @author       ").concat(SCRIPT_INFO.author, "\n// @contributers alexolog, heroboy, suchunchen, YFdyh000\n// @thanksto     ywzhaiqi, NLF\n// @version      ").concat(SCRIPT_INFO.version, "\n// @license      ").concat(SCRIPT_INFO.license, "\n// @update       ").concat(SCRIPT_INFO.updateTime, "\n// @homepageURL  ").concat(SCRIPT_INFO.homepageURL, "\n// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/SuperpreloaderPlusoneNew.user.js

	const Tween = {
	  Linear: function Linear(t, b, c, d) {
	    return c * t / d + b;
	  },
	  Quad: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return -c * (t /= d) * (t - 2) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
	      return -c / 2 * (--t * (t - 2) - 1) + b;
	    }
	  },
	  Cubic: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return c * ((t = t / d - 1) * t * t + 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	      return c / 2 * ((t -= 2) * t * t + 2) + b;
	    }
	  },
	  Quart: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t * t + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	    }
	  },
	  Quint: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t * t * t + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
	      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	    }
	  },
	  Sine: {
	    easeIn: function easeIn(t, b, c, d) {
	      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return c * Math.sin(t / d * (Math.PI / 2)) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	    }
	  },
	  Expo: {
	    easeIn: function easeIn(t, b, c, d) {
	      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if (t == 0) return b;
	      if (t == d) return b + c;
	      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	    }
	  },
	  Circ: {
	    easeIn: function easeIn(t, b, c, d) {
	      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	    }
	  },
	  Elastic: {
	    easeIn: function easeIn(t, b, c, d, a, p) {
	      if (t == 0) return b;
	      if ((t /= d) == 1) return b + c;
	      if (!p) p = d * 0.3;
	      var s;
	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p / 4;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(c / a);
	      }
	      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	    },
	    easeOut: function easeOut(t, b, c, d, a, p) {
	      if (t == 0) return b;
	      if ((t /= d) == 1) return b + c;
	      if (!p) p = d * 0.3;
	      var s;
	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p / 4;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(c / a);
	      }
	      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d, a, p) {
	      if (t == 0) return b;
	      if ((t /= d / 2) == 2) return b + c;
	      if (!p) p = d * (0.3 * 1.5);
	      var s;
	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p / 4;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(c / a);
	      }
	      if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
	    }
	  },
	  Back: {
	    easeIn: function easeIn(t, b, c, d, s) {
	      if (s == undefined) s = 1.70158;
	      return c * (t /= d) * t * ((s + 1) * t - s) + b;
	    },
	    easeOut: function easeOut(t, b, c, d, s) {
	      if (s == undefined) s = 1.70158;
	      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d, s) {
	      if (s == undefined) s = 1.70158;
	      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
	      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	    }
	  },
	  Bounce: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      if ((t /= d) < 1 / 2.75) {
	        return c * (7.5625 * t * t) + b;
	      } else if (t < 2 / 2.75) {
	        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
	      } else if (t < 2.5 / 2.75) {
	        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
	      } else {
	        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
	      }
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
	    }
	  }
	};
	const TweenM = ['Linear', 'Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Elastic', 'Back', 'Bounce'];
	const TweenEase = ['easeIn', 'easeOut', 'easeInOut'];

	/**
	 * Set multiple attributes of a dom element
	 * @param {object} el dom element
	 * @param {object} attr dom attributes
	 */
	function setMultipleAttributes(el, attr) {
	  for (const [key, val] of Object.entries(attr)) {
	    el.setAttribute(key, val);
	  }
	}

	/**
	 * Create a dom element
	 * @param {string} type element type
	 * @param {object} conf configuration of the dom, could be 'attr', 'innnerHTML', 'children', 'eventListner'
	 * @param {Document} doc dom to attach
	 * @returns {HTMLElement} dom element
	 */
	function createDOM(type, conf) {
	  let doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  const e = doc.createElement(type);
	  if (Object.prototype.hasOwnProperty.call(conf, 'attr')) {
	    setMultipleAttributes(e, conf.attr);
	  }
	  if (Object.prototype.hasOwnProperty.call(conf, 'innerHTML')) {
	    e.innerHTML = conf.innerHTML;
	  }
	  if (Array.isArray(conf.children)) {
	    if (conf.children.length > 0) {
	      conf.children.forEach(c => {
	        e.appendChild(c);
	      });
	    }
	  }
	  if (Array.isArray(conf.eventListener)) {
	    if (conf.eventListener.length > 0) {
	      conf.eventListener.forEach(x => {
	        e.addEventListener(x.type, x.listener, x.useCapture || false);
	      });
	    }
	  }
	  return e;
	}

	/**
	 * Get attributes for settings
	 * @param {HTMLElement} obj dom element
	 * @returns {string|boolean|number} dom element main property
	 */
	function getProperty(obj) {
	  if (obj.nodeName === 'INPUT') {
	    switch (obj.type) {
	      case 'checkbox':
	        return !!obj.checked;
	      case 'number':
	        {
	          const min = obj.hasAttribute('min') ? parseInt(obj.min) : undefined;
	          const max = obj.hasAttribute('max') ? parseInt(obj.max) : undefined;
	          if (min >= obj.valueAsNumber) return min;
	          if (max < obj.valueAsNumber) return max;
	          return obj.valueAsNumber;
	        }
	      default:
	        return obj.value;
	    }
	  } else if (obj.nodeName === 'SELECT') {
	    return obj.selectedOptions[0].value;
	  } else if (obj.nodeName === 'TEXTAREA') {
	    return obj.value;
	  } else if (obj.nodeName === 'A') {
	    return obj.href;
	  } else {
	    return obj.innerHTML;
	  }
	}

	/**
	 * Set attributes for settings
	 * @param {object} obj dom element
	 * @param {object} value value set to dom element
	 * @returns {undefined}
	 */
	function setProperty(obj, value) {
	  if (obj.nodeName === 'INPUT') {
	    switch (obj.type) {
	      case 'checkbox':
	        obj.checked = !!value;
	        break;
	      case 'number':
	        {
	          if (obj.hasAttribute('min')) {
	            if (value < obj.min) {
	              value = obj.min;
	            }
	          }
	          if (obj.hasAttribute('max')) {
	            if (value > obj.max) {
	              value = obj.max;
	            }
	          }
	          obj.value = value;
	          break;
	        }
	      default:
	        obj.value = value;
	    }
	  } else if (obj.nodeName === 'SELECT') {
	    for (let i = 0; i < obj.options.length; i++) {
	      if (obj.options[i].value === value) {
	        obj.selectedIndex = i;
	        break;
	      }
	    }
	  } else if (obj.nodeName === 'TEXTAREA') {
	    obj.value = value;
	  } else if (obj.nodeName === 'A') {
	    obj.href = value;
	  } else {
	    obj.innerHTML = value;
	  }
	}

	function _defineProperty$1(e, r, t) {
	  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
	    value: t,
	    enumerable: true,
	    configurable: true,
	    writable: true
	  }) : e[r] = t, e;
	}
	function ownKeys(e, r) {
	  var t = Object.keys(e);
	  if (Object.getOwnPropertySymbols) {
	    var o = Object.getOwnPropertySymbols(e);
	    r && (o = o.filter(function (r) {
	      return Object.getOwnPropertyDescriptor(e, r).enumerable;
	    })), t.push.apply(t, o);
	  }
	  return t;
	}
	function _objectSpread2(e) {
	  for (var r = 1; r < arguments.length; r++) {
	    var t = null != arguments[r] ? arguments[r] : {};
	    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
	      _defineProperty$1(e, r, t[r]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
	      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
	    });
	  }
	  return e;
	}
	function _toPrimitive(t, r) {
	  if ("object" != typeof t || !t) return t;
	  var e = t[Symbol.toPrimitive];
	  if (void 0 !== e) {
	    var i = e.call(t, r);
	    if ("object" != typeof i) return i;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return ("string" === r ? String : Number)(t);
	}
	function _toPropertyKey(t) {
	  var i = _toPrimitive(t, "string");
	  return "symbol" == typeof i ? i : i + "";
	}

	var isString_1;
	var hasRequiredIsString;

	function requireIsString () {
		if (hasRequiredIsString) return isString_1;
		hasRequiredIsString = 1;
		var baseGetTag = require_baseGetTag(),
		    isArray = requireIsArray(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var stringTag = '[object String]';

		/**
		 * Checks if `value` is classified as a `String` primitive or object.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
		 * @example
		 *
		 * _.isString('abc');
		 * // => true
		 *
		 * _.isString(1);
		 * // => false
		 */
		function isString(value) {
		  return typeof value == 'string' ||
		    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
		}

		isString_1 = isString;
		return isString_1;
	}

	var isStringExports = requireIsString();
	var _isString = /*@__PURE__*/getDefaultExportFromCjs(isStringExports);

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */

	var _baseIsNaN;
	var hasRequired_baseIsNaN;

	function require_baseIsNaN () {
		if (hasRequired_baseIsNaN) return _baseIsNaN;
		hasRequired_baseIsNaN = 1;
		function baseIsNaN(value) {
		  return value !== value;
		}

		_baseIsNaN = baseIsNaN;
		return _baseIsNaN;
	}

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */

	var _strictIndexOf;
	var hasRequired_strictIndexOf;

	function require_strictIndexOf () {
		if (hasRequired_strictIndexOf) return _strictIndexOf;
		hasRequired_strictIndexOf = 1;
		function strictIndexOf(array, value, fromIndex) {
		  var index = fromIndex - 1,
		      length = array.length;

		  while (++index < length) {
		    if (array[index] === value) {
		      return index;
		    }
		  }
		  return -1;
		}

		_strictIndexOf = strictIndexOf;
		return _strictIndexOf;
	}

	var _baseIndexOf;
	var hasRequired_baseIndexOf;

	function require_baseIndexOf () {
		if (hasRequired_baseIndexOf) return _baseIndexOf;
		hasRequired_baseIndexOf = 1;
		var baseFindIndex = require_baseFindIndex(),
		    baseIsNaN = require_baseIsNaN(),
		    strictIndexOf = require_strictIndexOf();

		/**
		 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {*} value The value to search for.
		 * @param {number} fromIndex The index to search from.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */
		function baseIndexOf(array, value, fromIndex) {
		  return value === value
		    ? strictIndexOf(array, value, fromIndex)
		    : baseFindIndex(array, baseIsNaN, fromIndex);
		}

		_baseIndexOf = baseIndexOf;
		return _baseIndexOf;
	}

	var _arrayIncludes;
	var hasRequired_arrayIncludes;

	function require_arrayIncludes () {
		if (hasRequired_arrayIncludes) return _arrayIncludes;
		hasRequired_arrayIncludes = 1;
		var baseIndexOf = require_baseIndexOf();

		/**
		 * A specialized version of `_.includes` for arrays without support for
		 * specifying an index to search from.
		 *
		 * @private
		 * @param {Array} [array] The array to inspect.
		 * @param {*} target The value to search for.
		 * @returns {boolean} Returns `true` if `target` is found, else `false`.
		 */
		function arrayIncludes(array, value) {
		  var length = array == null ? 0 : array.length;
		  return !!length && baseIndexOf(array, value, 0) > -1;
		}

		_arrayIncludes = arrayIncludes;
		return _arrayIncludes;
	}

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */

	var _arrayIncludesWith;
	var hasRequired_arrayIncludesWith;

	function require_arrayIncludesWith () {
		if (hasRequired_arrayIncludesWith) return _arrayIncludesWith;
		hasRequired_arrayIncludesWith = 1;
		function arrayIncludesWith(array, value, comparator) {
		  var index = -1,
		      length = array == null ? 0 : array.length;

		  while (++index < length) {
		    if (comparator(value, array[index])) {
		      return true;
		    }
		  }
		  return false;
		}

		_arrayIncludesWith = arrayIncludesWith;
		return _arrayIncludesWith;
	}

	var _baseDifference;
	var hasRequired_baseDifference;

	function require_baseDifference () {
		if (hasRequired_baseDifference) return _baseDifference;
		hasRequired_baseDifference = 1;
		var SetCache = require_SetCache(),
		    arrayIncludes = require_arrayIncludes(),
		    arrayIncludesWith = require_arrayIncludesWith(),
		    arrayMap = require_arrayMap(),
		    baseUnary = require_baseUnary(),
		    cacheHas = require_cacheHas();

		/** Used as the size to enable large array optimizations. */
		var LARGE_ARRAY_SIZE = 200;

		/**
		 * The base implementation of methods like `_.difference` without support
		 * for excluding multiple arrays or iteratee shorthands.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {Array} values The values to exclude.
		 * @param {Function} [iteratee] The iteratee invoked per element.
		 * @param {Function} [comparator] The comparator invoked per element.
		 * @returns {Array} Returns the new array of filtered values.
		 */
		function baseDifference(array, values, iteratee, comparator) {
		  var index = -1,
		      includes = arrayIncludes,
		      isCommon = true,
		      length = array.length,
		      result = [],
		      valuesLength = values.length;

		  if (!length) {
		    return result;
		  }
		  if (iteratee) {
		    values = arrayMap(values, baseUnary(iteratee));
		  }
		  if (comparator) {
		    includes = arrayIncludesWith;
		    isCommon = false;
		  }
		  else if (values.length >= LARGE_ARRAY_SIZE) {
		    includes = cacheHas;
		    isCommon = false;
		    values = new SetCache(values);
		  }
		  outer:
		  while (++index < length) {
		    var value = array[index],
		        computed = iteratee == null ? value : iteratee(value);

		    value = (comparator || value !== 0) ? value : 0;
		    if (isCommon && computed === computed) {
		      var valuesIndex = valuesLength;
		      while (valuesIndex--) {
		        if (values[valuesIndex] === computed) {
		          continue outer;
		        }
		      }
		      result.push(value);
		    }
		    else if (!includes(values, computed, comparator)) {
		      result.push(value);
		    }
		  }
		  return result;
		}

		_baseDifference = baseDifference;
		return _baseDifference;
	}

	var _isFlattenable;
	var hasRequired_isFlattenable;

	function require_isFlattenable () {
		if (hasRequired_isFlattenable) return _isFlattenable;
		hasRequired_isFlattenable = 1;
		var Symbol = require_Symbol(),
		    isArguments = requireIsArguments(),
		    isArray = requireIsArray();

		/** Built-in value references. */
		var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

		/**
		 * Checks if `value` is a flattenable `arguments` object or array.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
		 */
		function isFlattenable(value) {
		  return isArray(value) || isArguments(value) ||
		    !!(spreadableSymbol && value && value[spreadableSymbol]);
		}

		_isFlattenable = isFlattenable;
		return _isFlattenable;
	}

	var _baseFlatten;
	var hasRequired_baseFlatten;

	function require_baseFlatten () {
		if (hasRequired_baseFlatten) return _baseFlatten;
		hasRequired_baseFlatten = 1;
		var arrayPush = require_arrayPush(),
		    isFlattenable = require_isFlattenable();

		/**
		 * The base implementation of `_.flatten` with support for restricting flattening.
		 *
		 * @private
		 * @param {Array} array The array to flatten.
		 * @param {number} depth The maximum recursion depth.
		 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
		 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
		 * @param {Array} [result=[]] The initial result value.
		 * @returns {Array} Returns the new flattened array.
		 */
		function baseFlatten(array, depth, predicate, isStrict, result) {
		  var index = -1,
		      length = array.length;

		  predicate || (predicate = isFlattenable);
		  result || (result = []);

		  while (++index < length) {
		    var value = array[index];
		    if (depth > 0 && predicate(value)) {
		      if (depth > 1) {
		        // Recursively flatten arrays (susceptible to call stack limits).
		        baseFlatten(value, depth - 1, predicate, isStrict, result);
		      } else {
		        arrayPush(result, value);
		      }
		    } else if (!isStrict) {
		      result[result.length] = value;
		    }
		  }
		  return result;
		}

		_baseFlatten = baseFlatten;
		return _baseFlatten;
	}

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */

	var _apply;
	var hasRequired_apply;

	function require_apply () {
		if (hasRequired_apply) return _apply;
		hasRequired_apply = 1;
		function apply(func, thisArg, args) {
		  switch (args.length) {
		    case 0: return func.call(thisArg);
		    case 1: return func.call(thisArg, args[0]);
		    case 2: return func.call(thisArg, args[0], args[1]);
		    case 3: return func.call(thisArg, args[0], args[1], args[2]);
		  }
		  return func.apply(thisArg, args);
		}

		_apply = apply;
		return _apply;
	}

	var _overRest;
	var hasRequired_overRest;

	function require_overRest () {
		if (hasRequired_overRest) return _overRest;
		hasRequired_overRest = 1;
		var apply = require_apply();

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeMax = Math.max;

		/**
		 * A specialized version of `baseRest` which transforms the rest array.
		 *
		 * @private
		 * @param {Function} func The function to apply a rest parameter to.
		 * @param {number} [start=func.length-1] The start position of the rest parameter.
		 * @param {Function} transform The rest array transform.
		 * @returns {Function} Returns the new function.
		 */
		function overRest(func, start, transform) {
		  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
		  return function() {
		    var args = arguments,
		        index = -1,
		        length = nativeMax(args.length - start, 0),
		        array = Array(length);

		    while (++index < length) {
		      array[index] = args[start + index];
		    }
		    index = -1;
		    var otherArgs = Array(start + 1);
		    while (++index < start) {
		      otherArgs[index] = args[index];
		    }
		    otherArgs[start] = transform(array);
		    return apply(func, this, otherArgs);
		  };
		}

		_overRest = overRest;
		return _overRest;
	}

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */

	var constant_1;
	var hasRequiredConstant;

	function requireConstant () {
		if (hasRequiredConstant) return constant_1;
		hasRequiredConstant = 1;
		function constant(value) {
		  return function() {
		    return value;
		  };
		}

		constant_1 = constant;
		return constant_1;
	}

	var _defineProperty;
	var hasRequired_defineProperty;

	function require_defineProperty () {
		if (hasRequired_defineProperty) return _defineProperty;
		hasRequired_defineProperty = 1;
		var getNative = require_getNative();

		var defineProperty = (function() {
		  try {
		    var func = getNative(Object, 'defineProperty');
		    func({}, '', {});
		    return func;
		  } catch (e) {}
		}());

		_defineProperty = defineProperty;
		return _defineProperty;
	}

	var _baseSetToString;
	var hasRequired_baseSetToString;

	function require_baseSetToString () {
		if (hasRequired_baseSetToString) return _baseSetToString;
		hasRequired_baseSetToString = 1;
		var constant = requireConstant(),
		    defineProperty = require_defineProperty(),
		    identity = requireIdentity();

		/**
		 * The base implementation of `setToString` without support for hot loop shorting.
		 *
		 * @private
		 * @param {Function} func The function to modify.
		 * @param {Function} string The `toString` result.
		 * @returns {Function} Returns `func`.
		 */
		var baseSetToString = !defineProperty ? identity : function(func, string) {
		  return defineProperty(func, 'toString', {
		    'configurable': true,
		    'enumerable': false,
		    'value': constant(string),
		    'writable': true
		  });
		};

		_baseSetToString = baseSetToString;
		return _baseSetToString;
	}

	/** Used to detect hot functions by number of calls within a span of milliseconds. */

	var _shortOut;
	var hasRequired_shortOut;

	function require_shortOut () {
		if (hasRequired_shortOut) return _shortOut;
		hasRequired_shortOut = 1;
		var HOT_COUNT = 800,
		    HOT_SPAN = 16;

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeNow = Date.now;

		/**
		 * Creates a function that'll short out and invoke `identity` instead
		 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
		 * milliseconds.
		 *
		 * @private
		 * @param {Function} func The function to restrict.
		 * @returns {Function} Returns the new shortable function.
		 */
		function shortOut(func) {
		  var count = 0,
		      lastCalled = 0;

		  return function() {
		    var stamp = nativeNow(),
		        remaining = HOT_SPAN - (stamp - lastCalled);

		    lastCalled = stamp;
		    if (remaining > 0) {
		      if (++count >= HOT_COUNT) {
		        return arguments[0];
		      }
		    } else {
		      count = 0;
		    }
		    return func.apply(undefined, arguments);
		  };
		}

		_shortOut = shortOut;
		return _shortOut;
	}

	var _setToString;
	var hasRequired_setToString;

	function require_setToString () {
		if (hasRequired_setToString) return _setToString;
		hasRequired_setToString = 1;
		var baseSetToString = require_baseSetToString(),
		    shortOut = require_shortOut();

		/**
		 * Sets the `toString` method of `func` to return `string`.
		 *
		 * @private
		 * @param {Function} func The function to modify.
		 * @param {Function} string The `toString` result.
		 * @returns {Function} Returns `func`.
		 */
		var setToString = shortOut(baseSetToString);

		_setToString = setToString;
		return _setToString;
	}

	var _baseRest;
	var hasRequired_baseRest;

	function require_baseRest () {
		if (hasRequired_baseRest) return _baseRest;
		hasRequired_baseRest = 1;
		var identity = requireIdentity(),
		    overRest = require_overRest(),
		    setToString = require_setToString();

		/**
		 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
		 *
		 * @private
		 * @param {Function} func The function to apply a rest parameter to.
		 * @param {number} [start=func.length-1] The start position of the rest parameter.
		 * @returns {Function} Returns the new function.
		 */
		function baseRest(func, start) {
		  return setToString(overRest(func, start, identity), func + '');
		}

		_baseRest = baseRest;
		return _baseRest;
	}

	var isArrayLikeObject_1;
	var hasRequiredIsArrayLikeObject;

	function requireIsArrayLikeObject () {
		if (hasRequiredIsArrayLikeObject) return isArrayLikeObject_1;
		hasRequiredIsArrayLikeObject = 1;
		var isArrayLike = requireIsArrayLike(),
		    isObjectLike = requireIsObjectLike();

		/**
		 * This method is like `_.isArrayLike` except that it also checks if `value`
		 * is an object.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array-like object,
		 *  else `false`.
		 * @example
		 *
		 * _.isArrayLikeObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isArrayLikeObject(document.body.children);
		 * // => true
		 *
		 * _.isArrayLikeObject('abc');
		 * // => false
		 *
		 * _.isArrayLikeObject(_.noop);
		 * // => false
		 */
		function isArrayLikeObject(value) {
		  return isObjectLike(value) && isArrayLike(value);
		}

		isArrayLikeObject_1 = isArrayLikeObject;
		return isArrayLikeObject_1;
	}

	var difference_1;
	var hasRequiredDifference;

	function requireDifference () {
		if (hasRequiredDifference) return difference_1;
		hasRequiredDifference = 1;
		var baseDifference = require_baseDifference(),
		    baseFlatten = require_baseFlatten(),
		    baseRest = require_baseRest(),
		    isArrayLikeObject = requireIsArrayLikeObject();

		/**
		 * Creates an array of `array` values not included in the other given arrays
		 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		 * for equality comparisons. The order and references of result values are
		 * determined by the first array.
		 *
		 * **Note:** Unlike `_.pullAll`, this method returns a new array.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Array
		 * @param {Array} array The array to inspect.
		 * @param {...Array} [values] The values to exclude.
		 * @returns {Array} Returns the new array of filtered values.
		 * @see _.without, _.xor
		 * @example
		 *
		 * _.difference([2, 1], [2, 3]);
		 * // => [1]
		 */
		var difference = baseRest(function(array, values) {
		  return isArrayLikeObject(array)
		    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
		    : [];
		});

		difference_1 = difference;
		return difference_1;
	}

	var differenceExports = requireDifference();
	var _difference = /*@__PURE__*/getDefaultExportFromCjs(differenceExports);

	function anonymous$6(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "Super_preloaderPlus_one_New is upgraded from v<%= locals.oldversion %> to v<%= locals.newversion%>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("Super_preloaderPlus_one_New is upgraded from v")
	    ; __append(escapeFn( locals.oldversion ))
	    ; __append(" to v")
	    ; __append(escapeFn( locals.newversion))
	    ; __append("\n")
	    ; __line = 2;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$5(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div>Super_preloaderPlus_one_New Settings</div>\n<ul>\n  <li>Version: <b><%= locals.scriptInfo.version %></b> Update time: <b><%= locals.scriptInfo.updateTime %></b>\n    <a id=\"sp-prefs-homepageURL\" target=\"_blank\" href=\"<%= locals.scriptInfo.homepageURL %>\" />Homepage</a>\n    <a id=\"sp-prefs-homepageURL-feedback\" target=\"_blank\" href=\"<%= locals.scriptInfo.feedbackURL %>\" /> Feedback\n    </a>\n  </li>\n  <li>Maintainer: <b><a href=\"https://greasyfork.org/en/users/32861-mach6\">Mach6</a></b> Changelog:\n    <b><%= locals.scriptInfo.changelog %></b></li>\n  <li>Number of rules: <b><%= locals.prefs.numOfRule %></b> Next update: <b><%= locals.nextUpdateDate %></b> <button\n      id=\"sp-prefs-updaterule\">Update rules</button></li>\n  <li>\n    <label for=\"sp-prefs-debug\"><input type=\"checkbox\" id=\"sp-prefs-debug\" /> Debug mode</label>\n    <label for=\"sp-prefs-ChineseUI\"><input class=\"inputShift\" type=\"checkbox\" tile=\"English/Chinese UI\" id=\"sp-prefs-ChineseUI\" /> Chinese UI</label>\n    <label for=\"sp-prefs-floatWindow\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-floatWindow\" /> Float window</label>\n  </li>\n  <li>\n    <label for=\"sp-prefs-disableBuiltinRules\"><input type=\"checkbox\" id=\"sp-prefs-disableBuiltinRules\"  title=\"Disable builtin js rules\"/> Disable builtin rules</label>\n    <label for=\"sp-prefs-disableBuiltinSubscriptionRules\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-disableBuiltinSubscriptionRules\" title=\"Disable the subscription of rules from wedata.net and etc.\"/> Disable rule subscription</label>\n    <label for=\"sp-prefs-autoMatchKeyMatch\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-autoMatchKeyMatch\" /> Disable auto match</label>\n  </li>\n  <li><label for=\"sp-prefs-enableHistory\"><input type=\"checkbox\" id=\"sp-prefs-enableHistory\" /> Add next page to history</label></li>\n  <li>\n    <label for=\"sp-prefs-dblclick_pause\"><input type=\"checkbox\" id=\"sp-prefs-dblclick_pause\" /> Double click to stop preload (Default: Ctrl + Long Left)</label>\n  </li>\n  <li><label for=\"sp-prefs-SITEINFO_D-useiframe\"><input type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-useiframe\" /> Enable iframe mode globally</label></li>\n  <li><label for=\"sp-prefs-SITEINFO_D-a_enable\"><input type=\"checkbox\" title=\"Enable autopagger, otherwise only prefetcher is enabled\"\n      id=\"sp-prefs-SITEINFO_D-a_enable\" checked /> Enable autopagger globally</label></li>\n  <li><label for=\"sp-prefs-arrowKeyPage\"><input type=\"checkbox\" id=\"sp-prefs-arrowKeyPage\" /> Turn to the next page with ← →</label></li>\n  <li><label for=\"sp-prefs-SITEINFO_D-a_force_enable\"><input type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_force_enable\" /> Mandatorily join pages if not covered by the\n    rules</label></li>\n  <li>Custom excludes:\n    <div><textarea id=\"sp-prefs-excludes\"\n        placeholder=\"Customized excludes. You can use either wildcard character like &quot;https://www.google.com/*&quot; or regular expression &quot;re:^https?://www\\\\.google\\\\.com(/.*)?&quot;. The first one will match &quot;https://www.google.com/apple&quot; but not &quot;https://www.google.com&quot;. The second one matches everything. But you need to add the &quot;re:&quot; prefix and escape backslash\" ></textarea></div>\n  </li>\n  <li><a href=\"https://machsix.github.io/Super-preloader/siterule.html\" style=\"color: blue;\" target=\"_blank\">Custom\n      rules:</a>\n    <div><textarea id=\"sp-prefs-custom_siteinfo\" placeholder=\"&#8598;Click to learn how to write custom rules\"></textarea></div>\n  </li>\n  <li>Custom CSS:\n    <div><textarea id=\"sp-prefs-customCSS\"\n        placeholder=\"Customized the apperance of separator and setting panel by modifying class 'sp-separator' and 'sp-prefs-setup'. E.g.: '.sp-separator {filter: invert(1.0)}' for dark mode\"></textarea></div>\n  </li>\n</ul>\n<div><button id=\"sp-prefs-ok\" style=\"width:100px;\">OK</button><button id=\"sp-prefs-cancel\"\n    style=\"width:100px;\">Cancel</button><button id=\"sp-prefs-reset\" style=\"width:100px;\">Reset</button></div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div>Super_preloaderPlus_one_New Settings</div>\n<ul>\n  <li>Version: <b>")
	    ; __line = 3
	    ; __append(escapeFn( locals.scriptInfo.version ))
	    ; __append("</b> Update time: <b>")
	    ; __append(escapeFn( locals.scriptInfo.updateTime ))
	    ; __append("</b>\n    <a id=\"sp-prefs-homepageURL\" target=\"_blank\" href=\"")
	    ; __line = 4
	    ; __append(escapeFn( locals.scriptInfo.homepageURL ))
	    ; __append("\" />Homepage</a>\n    <a id=\"sp-prefs-homepageURL-feedback\" target=\"_blank\" href=\"")
	    ; __line = 5
	    ; __append(escapeFn( locals.scriptInfo.feedbackURL ))
	    ; __append("\" /> Feedback\n    </a>\n  </li>\n  <li>Maintainer: <b><a href=\"https://greasyfork.org/en/users/32861-mach6\">Mach6</a></b> Changelog:\n    <b>")
	    ; __line = 9
	    ; __append(escapeFn( locals.scriptInfo.changelog ))
	    ; __append("</b></li>\n  <li>Number of rules: <b>")
	    ; __line = 10
	    ; __append(escapeFn( locals.prefs.numOfRule ))
	    ; __append("</b> Next update: <b>")
	    ; __append(escapeFn( locals.nextUpdateDate ))
	    ; __append("</b> <button\n      id=\"sp-prefs-updaterule\">Update rules</button></li>\n  <li>\n    <label for=\"sp-prefs-debug\"><input type=\"checkbox\" id=\"sp-prefs-debug\" /> Debug mode</label>\n    <label for=\"sp-prefs-ChineseUI\"><input class=\"inputShift\" type=\"checkbox\" tile=\"English/Chinese UI\" id=\"sp-prefs-ChineseUI\" /> Chinese UI</label>\n    <label for=\"sp-prefs-floatWindow\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-floatWindow\" /> Float window</label>\n  </li>\n  <li>\n    <label for=\"sp-prefs-disableBuiltinRules\"><input type=\"checkbox\" id=\"sp-prefs-disableBuiltinRules\"  title=\"Disable builtin js rules\"/> Disable builtin rules</label>\n    <label for=\"sp-prefs-disableBuiltinSubscriptionRules\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-disableBuiltinSubscriptionRules\" title=\"Disable the subscription of rules from wedata.net and etc.\"/> Disable rule subscription</label>\n    <label for=\"sp-prefs-autoMatchKeyMatch\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-autoMatchKeyMatch\" /> Disable auto match</label>\n  </li>\n  <li><label for=\"sp-prefs-enableHistory\"><input type=\"checkbox\" id=\"sp-prefs-enableHistory\" /> Add next page to history</label></li>\n  <li>\n    <label for=\"sp-prefs-dblclick_pause\"><input type=\"checkbox\" id=\"sp-prefs-dblclick_pause\" /> Double click to stop preload (Default: Ctrl + Long Left)</label>\n  </li>\n  <li><label for=\"sp-prefs-SITEINFO_D-useiframe\"><input type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-useiframe\" /> Enable iframe mode globally</label></li>\n  <li><label for=\"sp-prefs-SITEINFO_D-a_enable\"><input type=\"checkbox\" title=\"Enable autopagger, otherwise only prefetcher is enabled\"\n      id=\"sp-prefs-SITEINFO_D-a_enable\" checked /> Enable autopagger globally</label></li>\n  <li><label for=\"sp-prefs-arrowKeyPage\"><input type=\"checkbox\" id=\"sp-prefs-arrowKeyPage\" /> Turn to the next page with ← →</label></li>\n  <li><label for=\"sp-prefs-SITEINFO_D-a_force_enable\"><input type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_force_enable\" /> Mandatorily join pages if not covered by the\n    rules</label></li>\n  <li>Custom excludes:\n    <div><textarea id=\"sp-prefs-excludes\"\n        placeholder=\"Customized excludes. You can use either wildcard character like &quot;https://www.google.com/*&quot; or regular expression &quot;re:^https?://www\\\\.google\\\\.com(/.*)?&quot;. The first one will match &quot;https://www.google.com/apple&quot; but not &quot;https://www.google.com&quot;. The second one matches everything. But you need to add the &quot;re:&quot; prefix and escape backslash\" ></textarea></div>\n  </li>\n  <li><a href=\"https://machsix.github.io/Super-preloader/siterule.html\" style=\"color: blue;\" target=\"_blank\">Custom\n      rules:</a>\n    <div><textarea id=\"sp-prefs-custom_siteinfo\" placeholder=\"&#8598;Click to learn how to write custom rules\"></textarea></div>\n  </li>\n  <li>Custom CSS:\n    <div><textarea id=\"sp-prefs-customCSS\"\n        placeholder=\"Customized the apperance of separator and setting panel by modifying class 'sp-separator' and 'sp-prefs-setup'. E.g.: '.sp-separator {filter: invert(1.0)}' for dark mode\"></textarea></div>\n  </li>\n</ul>\n<div><button id=\"sp-prefs-ok\" style=\"width:100px;\">OK</button><button id=\"sp-prefs-cancel\"\n    style=\"width:100px;\">Cancel</button><button id=\"sp-prefs-reset\" style=\"width:100px;\">Reset</button></div>\n")
	    ; __line = 47;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$4(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div id=\"sp-fw-rect\" style=\"background-color:#000;\">\n  <div id=\"sp-fw-dot\" style=\"display:none;\"></div>\n  <div id=\"sp-fw-cur-mode\" style=\"display:none;\"></div>\n</div>\n<div id=\"sp-fw-content\">\n  <div id=\"sp-fw-main\">\n    <div id=\"sp-fw-main-head\">\n      <label for=\"sp-fw-a_enable\">Mode</label>\n      <select id=\"sp-fw-a_enable\" name=\"sp-fw-a_enable\">\n        <option value=\"preloader\">Preloader</option>\n        <option value=\"autopager\">Autopager</option>\n      </select>\n      <span id=\"sp-fw-span-info\">Super_preloader</span>\n    </div>\n    <fieldset>\n      <legend title=\"Preloader helps accelerating loading\">Preloader Settings</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-useiframe\">\n            <input type=\"checkbox\"\n              title=\"Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal.\"\n              id=\"sp-fw-useiframe\" name=\"sp-fw-useiframe\" />Use iframe\n          </label>\n          <label for=\"sp-fw-viewcontent\">\n            <input type=\"checkbox\" title=\"Check preload contents.\" id=\"sp-fw-viewcontent\"\n              name=\"sp-fw-viewcontent\" />Show\n            preloaded content\n          </label>\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id=\"sp-fw-autopager-field\" style=\"display:block;\">\n      <legend title=\"Autopager frees you from clicking next page\">Autopager Settings</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-a_useiframe\">\n            <input type=\"checkbox\"\n              title=\"Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal\"\n              id=\"sp-fw-a_useiframe\" name=\"sp-fw-a_useiframe\" />Use iframe</input>\n          </label>\n          <label for=\"sp-fw-a_newIframe\">\n            <input type=\"checkbox\" title=\"Use a new iframe for the next page. It may solve problems with figures\"\n              id=\"sp-fw-a_newIframe\" name=\"sp-fw-a_newIframe\">Use new iframe</input>\n          </label>\n          <ul id=\"sp-fw-a_useiframe-extend\">\n            <li>\n              <label for=\"sp-fw-a_iloaded\">\n                <input type=\"checkbox\" title=\"Append the content untill iframe is fully loaded\" id=\"sp-fw-a_iloaded\"\n                  name=\"sp-fw-a_iloaded\" />Wait iframe to be fully loaded\n              </label>\n            </li>\n            <li>\n              <label for=\"sp-fw-a_itimeout\">\n                <input type=\"number\" min=\"0\"\n                  title=\"Wait for X ms untill the content is appended to the current page. (Default: 0)\"\n                  id=\"sp-fw-a_itimeout\" name=\"sp-fw-a_itimeout\" /> ms delay\n              </label>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_manualA\">\n            <input type=\"checkbox\" id=\"sp-fw-a_manualA\" name=\"sp-fw-a_manualA\"\n              title=\"The next page won\\'t be appended to the current page and you need to click a button\" />Manual mode\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_remain\">\n            Trigger autopager until the height is <input type=\"number\" min=\"0\" id=\"sp-fw-a_remain\"\n              name=\"sp-fw-a_remain\" />x\n            page height\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_maxpage\">\n            Turn at most <input type=\"number\" min=\"0\" id=\"sp-fw-a_maxpage\" name=\"sp-fw-a_maxpage\" /> pages\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_separator\">\n            <input type=\"checkbox\" id=\"sp-fw-a_separator\" name=\"sp-fw-a_separator\"\n              title=\"Show the page navigation bar\" />Navigation bar\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_force\">\n            <input type=\"checkbox\"\n              title=\"Append the whole next page to current page (When there is not rule for the website, this is the only method)\"\n              id=\"sp-fw-a_force\" name=\"sp-fw-a_force\" />Force to join page\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_ipages_0\">\n            <input type=\"checkbox\" id=\"sp-fw-a_ipages_0\" name=\"sp-fw-a_ipages_0\"\n              title=\"Turn X pages instantly once the script is loaded. This is good for some gallery.\" />Turn <input\n              type=\"number\" min=\"0\" id=\"sp-fw-a_ipages_1\" name=\"sp-fw-a_ipages_1\" title=\"0 for infinity\" /> pages\n          </label>\n          instantly\n          <span class=\"sp-fw-spanbutton\" id=\"sp-fw-a_starti\">Start</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id=\"sp-fw-foot\">\n      <label for=\"sp-fw-enable\">\n        <input type=\"checkbox\" id=\"sp-fw-enable\" title=\"Enable for thie website\" name=\"sp-fw-enable\" />Enable\n      </label>\n      <span id=\"sp-fw-setup\" class=\"sp-fw-spanbutton\" title=\"Global Settings\">Global Settings</span>\n      <span id=\"sp-fw-savebutton\" class=\"sp-fw-spanbutton\" title=\"Save settings\">Save</span>\n    </div>\n  </div>\n</div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div id=\"sp-fw-rect\" style=\"background-color:#000;\">\n  <div id=\"sp-fw-dot\" style=\"display:none;\"></div>\n  <div id=\"sp-fw-cur-mode\" style=\"display:none;\"></div>\n</div>\n<div id=\"sp-fw-content\">\n  <div id=\"sp-fw-main\">\n    <div id=\"sp-fw-main-head\">\n      <label for=\"sp-fw-a_enable\">Mode</label>\n      <select id=\"sp-fw-a_enable\" name=\"sp-fw-a_enable\">\n        <option value=\"preloader\">Preloader</option>\n        <option value=\"autopager\">Autopager</option>\n      </select>\n      <span id=\"sp-fw-span-info\">Super_preloader</span>\n    </div>\n    <fieldset>\n      <legend title=\"Preloader helps accelerating loading\">Preloader Settings</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-useiframe\">\n            <input type=\"checkbox\"\n              title=\"Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal.\"\n              id=\"sp-fw-useiframe\" name=\"sp-fw-useiframe\" />Use iframe\n          </label>\n          <label for=\"sp-fw-viewcontent\">\n            <input type=\"checkbox\" title=\"Check preload contents.\" id=\"sp-fw-viewcontent\"\n              name=\"sp-fw-viewcontent\" />Show\n            preloaded content\n          </label>\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id=\"sp-fw-autopager-field\" style=\"display:block;\">\n      <legend title=\"Autopager frees you from clicking next page\">Autopager Settings</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-a_useiframe\">\n            <input type=\"checkbox\"\n              title=\"Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal\"\n              id=\"sp-fw-a_useiframe\" name=\"sp-fw-a_useiframe\" />Use iframe</input>\n          </label>\n          <label for=\"sp-fw-a_newIframe\">\n            <input type=\"checkbox\" title=\"Use a new iframe for the next page. It may solve problems with figures\"\n              id=\"sp-fw-a_newIframe\" name=\"sp-fw-a_newIframe\">Use new iframe</input>\n          </label>\n          <ul id=\"sp-fw-a_useiframe-extend\">\n            <li>\n              <label for=\"sp-fw-a_iloaded\">\n                <input type=\"checkbox\" title=\"Append the content untill iframe is fully loaded\" id=\"sp-fw-a_iloaded\"\n                  name=\"sp-fw-a_iloaded\" />Wait iframe to be fully loaded\n              </label>\n            </li>\n            <li>\n              <label for=\"sp-fw-a_itimeout\">\n                <input type=\"number\" min=\"0\"\n                  title=\"Wait for X ms untill the content is appended to the current page. (Default: 0)\"\n                  id=\"sp-fw-a_itimeout\" name=\"sp-fw-a_itimeout\" /> ms delay\n              </label>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_manualA\">\n            <input type=\"checkbox\" id=\"sp-fw-a_manualA\" name=\"sp-fw-a_manualA\"\n              title=\"The next page won\\'t be appended to the current page and you need to click a button\" />Manual mode\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_remain\">\n            Trigger autopager until the height is <input type=\"number\" min=\"0\" id=\"sp-fw-a_remain\"\n              name=\"sp-fw-a_remain\" />x\n            page height\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_maxpage\">\n            Turn at most <input type=\"number\" min=\"0\" id=\"sp-fw-a_maxpage\" name=\"sp-fw-a_maxpage\" /> pages\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_separator\">\n            <input type=\"checkbox\" id=\"sp-fw-a_separator\" name=\"sp-fw-a_separator\"\n              title=\"Show the page navigation bar\" />Navigation bar\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_force\">\n            <input type=\"checkbox\"\n              title=\"Append the whole next page to current page (When there is not rule for the website, this is the only method)\"\n              id=\"sp-fw-a_force\" name=\"sp-fw-a_force\" />Force to join page\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_ipages_0\">\n            <input type=\"checkbox\" id=\"sp-fw-a_ipages_0\" name=\"sp-fw-a_ipages_0\"\n              title=\"Turn X pages instantly once the script is loaded. This is good for some gallery.\" />Turn <input\n              type=\"number\" min=\"0\" id=\"sp-fw-a_ipages_1\" name=\"sp-fw-a_ipages_1\" title=\"0 for infinity\" /> pages\n          </label>\n          instantly\n          <span class=\"sp-fw-spanbutton\" id=\"sp-fw-a_starti\">Start</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id=\"sp-fw-foot\">\n      <label for=\"sp-fw-enable\">\n        <input type=\"checkbox\" id=\"sp-fw-enable\" title=\"Enable for thie website\" name=\"sp-fw-enable\" />Enable\n      </label>\n      <span id=\"sp-fw-setup\" class=\"sp-fw-spanbutton\" title=\"Global Settings\">Global Settings</span>\n      <span id=\"sp-fw-savebutton\" class=\"sp-fw-spanbutton\" title=\"Save settings\">Save</span>\n    </div>\n  </div>\n</div>\n")
	    ; __line = 112;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$3(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "Super_preloaderPlus_one_改 从 v<%= locals.oldversion %> 升级到 v<%= locals.newversion%>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("Super_preloaderPlus_one_改 从 v")
	    ; __append(escapeFn( locals.oldversion ))
	    ; __append(" 升级到 v")
	    ; __append(escapeFn( locals.newversion))
	    ; __append("\n")
	    ; __line = 2;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$2(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div>Super_preloaderPlus_one_New设置</div>\n<ul>\n  <li>脚本版本: <b><%= locals.scriptInfo.version %></b> 更新时间: <b><%= locals.scriptInfo.updateTime %></b>\n    <a id=\"sp-prefs-homepageURL\" target=\"_blank\" href=\"<%= locals.scriptInfo.homepageURL %>\" />脚本主页</a>\n    <a id=\"sp-prefs-homepageURL-feedback\" target=\"_blank\" href=\"<%= locals.scriptInfo.feedbackURL %>\">反馈规则</a>\n  </li>\n  <li>维护者: <b><a href=\"https://greasyfork.org/en/users/32861-mach6\">Mach6</a></b> 更新日志:\n    <b><%= locals.scriptInfo.changelog %></b></li>\n  <li>规则数目: <b><%= locals.prefs.numOfRule %></b> 下次更新时间: <b><%= locals.nextUpdateDate %></b>\n    <button id=\"sp-prefs-updaterule\">更新规则</button></li>\n  <li>\n    <label for=\"sp-prefs-debug\"><input type=\"checkbox\" id=\"sp-prefs-debug\" /> 调试模式</label>\n    <label for=\"sp-prefs-ChineseUI\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-ChineseUI\" /> 中文界面</label>\n    <label for=\"sp-prefs-floatWindow\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-floatWindow\" /> 开启悬浮窗</label>\n  </li>\n  <li>\n    <label for=\"sp-prefs-disableBuiltinRules\"><input type=\"checkbox\" id=\"sp-prefs-disableBuiltinRules\"  title=\"禁用内建的js格式规则\"/> 禁用内建规则</label>\n    <label for=\"sp-prefs-disableBuiltinSubscriptionRules\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-disableBuiltinSubscriptionRules\" title=\"禁用从wedata.net等数据库的订阅规则\"/> 禁用订阅规则</label>\n    <label for=\"sp-prefs-autoMatchKeyMatch\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-autoMatchKeyMatch\" /> 禁用自动匹配</label>\n  </li>\n  <li><label for=\"sp-prefs-enableHistory\"><input type=\"checkbox\" id=\"sp-prefs-enableHistory\" /> 添加下一页到历史记录</label></li>\n  <li><label for=\"sp-prefs-dblclick_pause\"><input type=\"checkbox\" id=\"sp-prefs-dblclick_pause\" /> 鼠标双击暂停翻页（默认为 Ctrl + 长按左键）</label></li>\n  <li>\n    <label for=\"sp-prefs-SITEINFO_D-a_enable\"><input title=\"启用自动翻页，否则仅启用预读\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_enable\" checked /> 自动翻页</label>\n    <label for=\"sp-prefs-SITEINFO_D-useiframe\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-useiframe\" /> 全局iframe方式</label>\n    <label for=\"sp-prefs-SITEINFO_D-a_force_enable\">\n      <input class=\"inputShift\" title=\"强行拼接规则中没有的站点，不建议启用\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_force_enable\" />\n    全局强制拼接（不建议）</label>\n  </li>\n  <li><label for=\"sp-prefs-arrowKeyPage\"><input type=\"checkbox\" id=\"sp-prefs-arrowKeyPage\" /> 使用 &larr; &rarr; 翻页</label> </li>\n  <li>自定义排除列表：\n    <div><textarea id=\"sp-prefs-excludes\" placeholder=\"自定义排除列表，支持通配符或正则表达式。例如：&quot;http://*.douban.com/*&quot;或&quot;re:http://.*\\\\.douban\\\\.com/.*&quot;. 两者等效。正则表达式需要添加&quot;re:&quot;的前缀并对反斜线转义\"></textarea></div>\n  </li>\n  <li><a href=\"https://machsix.github.io/Super-preloader/zh-cn/siterule.html\" style=\"color: blue;\"\n      target=\"_blank\">自定义站点规则：</a>\n    <div><textarea id=\"sp-prefs-custom_siteinfo\" placeholder=\"&#8598;点击学习如何自定义站点规则, 自定义规则应为一个array\"></textarea></div>\n  </lii>\n  <li>自定义界面:\n    <div><textarea id=\"sp-prefs-customCSS\"\n        placeholder=\"通过修改'sp-separator'和'sp-prefs-setup'的CSS自定义界面\"></textarea></div>\n  </li>\n</ul>\n<div><button id=\"sp-prefs-ok\" style=\"width:100px;\">确定</button><button id=\"sp-prefs-cancel\"\n    style=\"width:100px;\">取消</button><button id=\"sp-prefs-reset\" style=\"width:100px;\">重置</button></div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div>Super_preloaderPlus_one_New设置</div>\n<ul>\n  <li>脚本版本: <b>")
	    ; __line = 3
	    ; __append(escapeFn( locals.scriptInfo.version ))
	    ; __append("</b> 更新时间: <b>")
	    ; __append(escapeFn( locals.scriptInfo.updateTime ))
	    ; __append("</b>\n    <a id=\"sp-prefs-homepageURL\" target=\"_blank\" href=\"")
	    ; __line = 4
	    ; __append(escapeFn( locals.scriptInfo.homepageURL ))
	    ; __append("\" />脚本主页</a>\n    <a id=\"sp-prefs-homepageURL-feedback\" target=\"_blank\" href=\"")
	    ; __line = 5
	    ; __append(escapeFn( locals.scriptInfo.feedbackURL ))
	    ; __append("\">反馈规则</a>\n  </li>\n  <li>维护者: <b><a href=\"https://greasyfork.org/en/users/32861-mach6\">Mach6</a></b> 更新日志:\n    <b>")
	    ; __line = 8
	    ; __append(escapeFn( locals.scriptInfo.changelog ))
	    ; __append("</b></li>\n  <li>规则数目: <b>")
	    ; __line = 9
	    ; __append(escapeFn( locals.prefs.numOfRule ))
	    ; __append("</b> 下次更新时间: <b>")
	    ; __append(escapeFn( locals.nextUpdateDate ))
	    ; __append("</b>\n    <button id=\"sp-prefs-updaterule\">更新规则</button></li>\n  <li>\n    <label for=\"sp-prefs-debug\"><input type=\"checkbox\" id=\"sp-prefs-debug\" /> 调试模式</label>\n    <label for=\"sp-prefs-ChineseUI\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-ChineseUI\" /> 中文界面</label>\n    <label for=\"sp-prefs-floatWindow\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-floatWindow\" /> 开启悬浮窗</label>\n  </li>\n  <li>\n    <label for=\"sp-prefs-disableBuiltinRules\"><input type=\"checkbox\" id=\"sp-prefs-disableBuiltinRules\"  title=\"禁用内建的js格式规则\"/> 禁用内建规则</label>\n    <label for=\"sp-prefs-disableBuiltinSubscriptionRules\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-disableBuiltinSubscriptionRules\" title=\"禁用从wedata.net等数据库的订阅规则\"/> 禁用订阅规则</label>\n    <label for=\"sp-prefs-autoMatchKeyMatch\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-autoMatchKeyMatch\" /> 禁用自动匹配</label>\n  </li>\n  <li><label for=\"sp-prefs-enableHistory\"><input type=\"checkbox\" id=\"sp-prefs-enableHistory\" /> 添加下一页到历史记录</label></li>\n  <li><label for=\"sp-prefs-dblclick_pause\"><input type=\"checkbox\" id=\"sp-prefs-dblclick_pause\" /> 鼠标双击暂停翻页（默认为 Ctrl + 长按左键）</label></li>\n  <li>\n    <label for=\"sp-prefs-SITEINFO_D-a_enable\"><input title=\"启用自动翻页，否则仅启用预读\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_enable\" checked /> 自动翻页</label>\n    <label for=\"sp-prefs-SITEINFO_D-useiframe\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-useiframe\" /> 全局iframe方式</label>\n    <label for=\"sp-prefs-SITEINFO_D-a_force_enable\">\n      <input class=\"inputShift\" title=\"强行拼接规则中没有的站点，不建议启用\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_force_enable\" />\n    全局强制拼接（不建议）</label>\n  </li>\n  <li><label for=\"sp-prefs-arrowKeyPage\"><input type=\"checkbox\" id=\"sp-prefs-arrowKeyPage\" /> 使用 &larr; &rarr; 翻页</label> </li>\n  <li>自定义排除列表：\n    <div><textarea id=\"sp-prefs-excludes\" placeholder=\"自定义排除列表，支持通配符或正则表达式。例如：&quot;http://*.douban.com/*&quot;或&quot;re:http://.*\\\\.douban\\\\.com/.*&quot;. 两者等效。正则表达式需要添加&quot;re:&quot;的前缀并对反斜线转义\"></textarea></div>\n  </li>\n  <li><a href=\"https://machsix.github.io/Super-preloader/zh-cn/siterule.html\" style=\"color: blue;\"\n      target=\"_blank\">自定义站点规则：</a>\n    <div><textarea id=\"sp-prefs-custom_siteinfo\" placeholder=\"&#8598;点击学习如何自定义站点规则, 自定义规则应为一个array\"></textarea></div>\n  </lii>\n  <li>自定义界面:\n    <div><textarea id=\"sp-prefs-customCSS\"\n        placeholder=\"通过修改'sp-separator'和'sp-prefs-setup'的CSS自定义界面\"></textarea></div>\n  </li>\n</ul>\n<div><button id=\"sp-prefs-ok\" style=\"width:100px;\">确定</button><button id=\"sp-prefs-cancel\"\n    style=\"width:100px;\">取消</button><button id=\"sp-prefs-reset\" style=\"width:100px;\">重置</button></div>\n")
	    ; __line = 45;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$1(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div id=\"sp-fw-rect\" style=\"background-color:#000;\">\n  <div id=\"sp-fw-dot\" style=\"display:none;\"></div>\n  <div id=\"sp-fw-cur-mode\" style=\"display:none;\"></div>\n</div>\n<div id=\"sp-fw-content\">\n  <div id=\"sp-fw-main\">\n    <div id=\"sp-fw-main-head\">\n      <label for=\"sp-fw-a_enable\">工作模式</label>\n      <select id=\"sp-fw-a_enable\" name=\"sp-fw-a_enable\">\n        <option value=\"preloader\">预读模式</option>\n        <option value=\"autopager\">自动翻页模式</option>\n      </select>\n      <!-- <span id=\"sp-fw-span-info\">Super_preloader</span> -->\n    </div>\n    <fieldset>\n      <legend title=\"预读模式的相关设置\">预读设置</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-useiframe\">\n            <input type=\"checkbox\" title=\"使用iframe预先载入好下一页到缓存,否则使用xhr请求下一页源码,取出所有的图片进行预读\" id=\"sp-fw-useiframe\"\n              name=\"sp-fw-useiframe\" />使用iframe方式\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-viewcontent\">\n            <input type=\"checkbox\" title=\"查看预读的内容,将其显示在页面的底部,看看预读了些什么.\" id=\"sp-fw-viewcontent\"\n              name=\"sp-fw-viewcontent\" />查看预读的内容\n          </label>\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id=\"sp-fw-autopager-field\" style=\"display:block;\">\n      <legend title=\"自动翻页模式的相关设置\">翻页设置</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-a_useiframe\">\n            <input type=\"checkbox\" title=\"使用iframe方式进行翻页,否则使用xhr方式翻页,可以解决某些网页xhr方式无法翻页的问题,如果xhr翻页正常的话,就不要勾这项吧.\"\n              id=\"sp-fw-a_useiframe\" name=\"sp-fw-a_useiframe\" />使用iframe方式</input>\n          </label>\n          <label for=\"sp-fw-a_newIframe\">\n            <input type=\"checkbox\" title=\"每个下一页都用新的iframe，可以解决下一页图片或按钮点击的问题\" id=\"sp-fw-a_newIframe\"\n              name=\"sp-fw-a_newIframe\">新iframe</input>\n          </label>\n          <ul id=\"sp-fw-a_useiframe-extend\">\n            <li>\n              <label for=\"sp-fw-a_iloaded\">\n                <input type=\"checkbox\" title=\"等待iframe完全载入后(发生load事件),将内容取出,否则在DOM完成后,就直接取出来..(勾上后,会比较慢,但是可能会解决一些问题.)\"\n                  id=\"sp-fw-a_iloaded\" name=\"sp-fw-a_iloaded\" />等待iframe完全载入\n              </label>\n            </li>\n            <li>\n              <label for=\"sp-fw-a_itimeout\">\n                <input type=\"number\" min=\"0\" title=\"在可以从iframe取数据的时候,继续等待设定的ms才开始取出数据(此项为特殊网页准备,如果正常,请设置为0)\"\n                  id=\"sp-fw-a_itimeout\" name=\"sp-fw-a_itimeout\" />ms延时取出\n              </label>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_manualA\">\n            <input type=\"checkbox\" id=\"sp-fw-a_manualA\" name=\"sp-fw-a_manualA\"\n              title=\"不会自动拼接上来,会出现一个类似翻页导航的的图形,点击翻页(在论坛的帖子内容页面,可以考虑勾选此项,从而不影响你的回帖)\" />手动模式\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_remain\">\n            剩余<input type=\"number\" min=\"0\" id=\"sp-fw-a_remain\" name=\"sp-fw-a_remain\"\n              title=\"当剩余的页面的高度是浏览器可见窗口高度的几倍开始翻页\" />倍页面高度触发\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_maxpage\">\n            最多翻<input type=\"number\" min=\"0\" id=\"sp-fw-a_maxpage\" name=\"sp-fw-a_maxpage\"\n              title=\"最多翻页数量,当达到这个翻页数量的时候,自动翻页停止.\" />页\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_separator\">\n            <input type=\"checkbox\" id=\"sp-fw-a_separator\" name=\"sp-fw-a_separator\"\n              title=\"分割页面主要内容的导航条,可以进行页面主要内容之间的快速跳转定位等.\" />显示翻页导航\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_force\">\n            <input type=\"checkbox\" title=\"将下一页的body部分内容整个拼接上来.(当需翻页的网站没有高级规则时,该项强制勾选,无法取消.)\" id=\"sp-fw-a_force\"\n              name=\"sp-fw-a_force\" />强制拼接\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_ipages_0\">\n            <input type=\"checkbox\" id=\"sp-fw-a_ipages_0\" name=\"sp-fw-a_ipages_0\" title=\"在JS加载后,立即连续翻后面设定的页数\" />启用\n            立即翻<input type=\"number\" min=\"0\" id=\"sp-fw-a_ipages_1\" name=\"sp-fw-a_ipages_1\" title=\"0为无穷多\" />页\n          </label>\n          <span class=\"sp-fw-spanbutton\" title=\"现在立即开始连续翻页\" id=\"sp-fw-a_starti\">开始</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id=\"sp-fw-foot\">\n      <label for=\"sp-fw-enable\">\n        <input type=\"checkbox\" id=\"sp-fw-enable\" title=\"总开关,启用js,否则禁用.\" name=\"sp-fw-enable\" />启用\n      </label>\n      <span id=\"sp-fw-setup\" class=\"sp-fw-spanbutton\" title=\"打开设置窗口\">设置</span>\n      <span id=\"sp-fw-savebutton\" class=\"sp-fw-spanbutton\" title=\"保存设置\">保存</span>\n    </div>\n  </div>\n</div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div id=\"sp-fw-rect\" style=\"background-color:#000;\">\n  <div id=\"sp-fw-dot\" style=\"display:none;\"></div>\n  <div id=\"sp-fw-cur-mode\" style=\"display:none;\"></div>\n</div>\n<div id=\"sp-fw-content\">\n  <div id=\"sp-fw-main\">\n    <div id=\"sp-fw-main-head\">\n      <label for=\"sp-fw-a_enable\">工作模式</label>\n      <select id=\"sp-fw-a_enable\" name=\"sp-fw-a_enable\">\n        <option value=\"preloader\">预读模式</option>\n        <option value=\"autopager\">自动翻页模式</option>\n      </select>\n      <!-- <span id=\"sp-fw-span-info\">Super_preloader</span> -->\n    </div>\n    <fieldset>\n      <legend title=\"预读模式的相关设置\">预读设置</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-useiframe\">\n            <input type=\"checkbox\" title=\"使用iframe预先载入好下一页到缓存,否则使用xhr请求下一页源码,取出所有的图片进行预读\" id=\"sp-fw-useiframe\"\n              name=\"sp-fw-useiframe\" />使用iframe方式\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-viewcontent\">\n            <input type=\"checkbox\" title=\"查看预读的内容,将其显示在页面的底部,看看预读了些什么.\" id=\"sp-fw-viewcontent\"\n              name=\"sp-fw-viewcontent\" />查看预读的内容\n          </label>\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id=\"sp-fw-autopager-field\" style=\"display:block;\">\n      <legend title=\"自动翻页模式的相关设置\">翻页设置</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-a_useiframe\">\n            <input type=\"checkbox\" title=\"使用iframe方式进行翻页,否则使用xhr方式翻页,可以解决某些网页xhr方式无法翻页的问题,如果xhr翻页正常的话,就不要勾这项吧.\"\n              id=\"sp-fw-a_useiframe\" name=\"sp-fw-a_useiframe\" />使用iframe方式</input>\n          </label>\n          <label for=\"sp-fw-a_newIframe\">\n            <input type=\"checkbox\" title=\"每个下一页都用新的iframe，可以解决下一页图片或按钮点击的问题\" id=\"sp-fw-a_newIframe\"\n              name=\"sp-fw-a_newIframe\">新iframe</input>\n          </label>\n          <ul id=\"sp-fw-a_useiframe-extend\">\n            <li>\n              <label for=\"sp-fw-a_iloaded\">\n                <input type=\"checkbox\" title=\"等待iframe完全载入后(发生load事件),将内容取出,否则在DOM完成后,就直接取出来..(勾上后,会比较慢,但是可能会解决一些问题.)\"\n                  id=\"sp-fw-a_iloaded\" name=\"sp-fw-a_iloaded\" />等待iframe完全载入\n              </label>\n            </li>\n            <li>\n              <label for=\"sp-fw-a_itimeout\">\n                <input type=\"number\" min=\"0\" title=\"在可以从iframe取数据的时候,继续等待设定的ms才开始取出数据(此项为特殊网页准备,如果正常,请设置为0)\"\n                  id=\"sp-fw-a_itimeout\" name=\"sp-fw-a_itimeout\" />ms延时取出\n              </label>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_manualA\">\n            <input type=\"checkbox\" id=\"sp-fw-a_manualA\" name=\"sp-fw-a_manualA\"\n              title=\"不会自动拼接上来,会出现一个类似翻页导航的的图形,点击翻页(在论坛的帖子内容页面,可以考虑勾选此项,从而不影响你的回帖)\" />手动模式\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_remain\">\n            剩余<input type=\"number\" min=\"0\" id=\"sp-fw-a_remain\" name=\"sp-fw-a_remain\"\n              title=\"当剩余的页面的高度是浏览器可见窗口高度的几倍开始翻页\" />倍页面高度触发\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_maxpage\">\n            最多翻<input type=\"number\" min=\"0\" id=\"sp-fw-a_maxpage\" name=\"sp-fw-a_maxpage\"\n              title=\"最多翻页数量,当达到这个翻页数量的时候,自动翻页停止.\" />页\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_separator\">\n            <input type=\"checkbox\" id=\"sp-fw-a_separator\" name=\"sp-fw-a_separator\"\n              title=\"分割页面主要内容的导航条,可以进行页面主要内容之间的快速跳转定位等.\" />显示翻页导航\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_force\">\n            <input type=\"checkbox\" title=\"将下一页的body部分内容整个拼接上来.(当需翻页的网站没有高级规则时,该项强制勾选,无法取消.)\" id=\"sp-fw-a_force\"\n              name=\"sp-fw-a_force\" />强制拼接\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_ipages_0\">\n            <input type=\"checkbox\" id=\"sp-fw-a_ipages_0\" name=\"sp-fw-a_ipages_0\" title=\"在JS加载后,立即连续翻后面设定的页数\" />启用\n            立即翻<input type=\"number\" min=\"0\" id=\"sp-fw-a_ipages_1\" name=\"sp-fw-a_ipages_1\" title=\"0为无穷多\" />页\n          </label>\n          <span class=\"sp-fw-spanbutton\" title=\"现在立即开始连续翻页\" id=\"sp-fw-a_starti\">开始</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id=\"sp-fw-foot\">\n      <label for=\"sp-fw-enable\">\n        <input type=\"checkbox\" id=\"sp-fw-enable\" title=\"总开关,启用js,否则禁用.\" name=\"sp-fw-enable\" />启用\n      </label>\n      <span id=\"sp-fw-setup\" class=\"sp-fw-spanbutton\" title=\"打开设置窗口\">设置</span>\n      <span id=\"sp-fw-savebutton\" class=\"sp-fw-spanbutton\" title=\"保存设置\">保存</span>\n    </div>\n  </div>\n</div>\n")
	    ; __line = 107;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div><%= locals.notice %></div>\n<div class=\"sp-prefs-spinner\"><div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div></div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div>")
	    ; __append(escapeFn( locals.notice ))
	    ; __append("</div>\n<div class=\"sp-prefs-spinner\"><div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div></div>\n")
	    ; __line = 3;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	var en_US$1={spinner:{update:"Updating ....",reset:"Reseting ...."}};var zh_CN$1={spinner:{update:"更新中 ....",reset:"重置中 ...."}};var i8n = {en_US:en_US$1,zh_CN:zh_CN$1};

	const en_US = {};
	en_US["upgradeNotification"] = anonymous$6;
	en_US["sp-prefs"] = anonymous$5;
	en_US["floatWindow"] = anonymous$4;
	const zh_CN = {};
	zh_CN["upgradeNotification"] = anonymous$3;
	zh_CN["sp-prefs"] = anonymous$2;
	zh_CN["floatWindow"] = anonymous$1;
	const jsonTemplate = {};
	jsonTemplate["spinner"] = anonymous;
	const ejs = {
	  en_US,
	  zh_CN
	};
	const availableJsonLangs = Object.keys(i8n);
	const availableEjsLangs = Object.keys(ejs);
	for (const lang of availableEjsLangs) {
	  if (availableJsonLangs.includes(lang)) {
	    const li8n = i8n[lang];
	    // spinner
	    const spinner = {};
	    for (const [k, v] of Object.entries(li8n.spinner)) {
	      spinner[k] = jsonTemplate.spinner({
	        notice: v
	      });
	    }
	    ejs[lang].spinner = spinner;
	  } else {
	    ejs[lang].spinner = ejs.en_US.spinner;
	  }
	}

	const availableLangs = Object.keys(ejs);
	let template = ejs.en_US;

	/**
	 * Detects the user's language based on the browser's settings.
	 * @returns {string} The detected language code ('zh_CN' or 'en_US').
	 */
	function langDetect() {
	  const userLang = navigator.language || navigator.userLanguage;
	  if (userLang.indexOf('zh') !== -1) {
	    return 'zh_CN';
	  } else {
	    return 'en_US';
	  }
	}
	let userLang = langDetect();
	/**
	 * Sets the user's language and updates the template accordingly.
	 * @param {string} x - The language code to set ('zh_CN' or 'en_US').
	 */
	function setLang(x) {
	  if (availableLangs.includes(x)) {
	    userLang = x;
	    template = ejs[userLang];
	  } else {
	    userLang = 'en_US';
	    template = ejs[userLang];
	  }
	}

	const magicKey = {
	  function: '\u0000',
	  undefined: '\u0001',
	  null: '\u0002'
	};

	/**
	 * Custom replacer function for JSON.stringify.
	 * Converts special types like RegExp, functions, null, and undefined into string representations.
	 * @param {string} _key - The key of the property being stringified.
	 * @param {*} val - The value of the property being stringified.
	 * @returns {*} The transformed value.
	 */
	function replacer(_key, val) {
	  if (val instanceof RegExp) {
	    return "".concat(val.toString());
	  }
	  if (typeof val === 'function') {
	    return "".concat(magicKey.function).concat(val.toString());
	  }
	  if (val === null) {
	    return "".concat(magicKey.null);
	  }
	  if (val === undefined) {
	    return "".concat(magicKey.undefined);
	  }
	  return val;
	}

	/**
	 * Custom reviver function for JSON.parse.
	 * Restores special types like RegExp, functions, null, and undefined from string representations.
	 * @param {string} _key - The key of the property being parsed.
	 * @param {*} val - The value of the property being parsed.
	 * @returns {*} The restored value.
	 */
	function reviver(_key, val) {
	  if (typeof val !== 'string') {
	    return val;
	  }
	  if (val.length === 0) return val;
	  const mk = val.slice(0, 1);
	  try {
	    switch (mk) {
	      case magicKey.undefined:
	        return undefined;
	      case magicKey.null:
	        return null;
	      case magicKey.function:
	        return new Function("return ".concat(val.slice(1)))();
	      default:
	        return val;
	    }
	  } catch (error) {
	    // CSP rule may block new Function
	    console.error('Error parsing function:', error);
	    return null;
	  }
	}

	/**
	 * Converts an object into a JSON string with custom handling for special types.
	 * @param {*} obj - The object to stringify.
	 * @returns {string} The JSON string representation of the object.
	 */
	function stringify(obj) {
	  return JSON.stringify(obj, replacer);
	}

	/**
	 * Parses a JSON string with custom handling for special types.
	 * @param {string} obj - The JSON string to parse.
	 * @returns {*} The parsed object.
	 */
	function parse(obj) {
	  return JSON.parse(obj, reviver);
	}
	var JSONE = {
	  stringify,
	  parse
	};

	var isObjectExports = requireIsObject();
	var _isObject = /*@__PURE__*/getDefaultExportFromCjs(isObjectExports);

	var isBoolean_1;
	var hasRequiredIsBoolean;

	function requireIsBoolean () {
		if (hasRequiredIsBoolean) return isBoolean_1;
		hasRequiredIsBoolean = 1;
		var baseGetTag = require_baseGetTag(),
		    isObjectLike = requireIsObjectLike();

		/** `Object#toString` result references. */
		var boolTag = '[object Boolean]';

		/**
		 * Checks if `value` is classified as a boolean primitive or object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
		 * @example
		 *
		 * _.isBoolean(false);
		 * // => true
		 *
		 * _.isBoolean(null);
		 * // => false
		 */
		function isBoolean(value) {
		  return value === true || value === false ||
		    (isObjectLike(value) && baseGetTag(value) == boolTag);
		}

		isBoolean_1 = isBoolean;
		return isBoolean_1;
	}

	var isBooleanExports = requireIsBoolean();
	var _isBoolean = /*@__PURE__*/getDefaultExportFromCjs(isBooleanExports);

	var isEmpty_1;
	var hasRequiredIsEmpty;

	function requireIsEmpty () {
		if (hasRequiredIsEmpty) return isEmpty_1;
		hasRequiredIsEmpty = 1;
		var baseKeys = require_baseKeys(),
		    getTag = require_getTag(),
		    isArguments = requireIsArguments(),
		    isArray = requireIsArray(),
		    isArrayLike = requireIsArrayLike(),
		    isBuffer = requireIsBuffer(),
		    isPrototype = require_isPrototype(),
		    isTypedArray = requireIsTypedArray();

		/** `Object#toString` result references. */
		var mapTag = '[object Map]',
		    setTag = '[object Set]';

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Checks if `value` is an empty object, collection, map, or set.
		 *
		 * Objects are considered empty if they have no own enumerable string keyed
		 * properties.
		 *
		 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
		 * jQuery-like collections are considered empty if they have a `length` of `0`.
		 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
		 * @example
		 *
		 * _.isEmpty(null);
		 * // => true
		 *
		 * _.isEmpty(true);
		 * // => true
		 *
		 * _.isEmpty(1);
		 * // => true
		 *
		 * _.isEmpty([1, 2, 3]);
		 * // => false
		 *
		 * _.isEmpty({ 'a': 1 });
		 * // => false
		 */
		function isEmpty(value) {
		  if (value == null) {
		    return true;
		  }
		  if (isArrayLike(value) &&
		      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
		        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
		    return !value.length;
		  }
		  var tag = getTag(value);
		  if (tag == mapTag || tag == setTag) {
		    return !value.size;
		  }
		  if (isPrototype(value)) {
		    return !baseKeys(value).length;
		  }
		  for (var key in value) {
		    if (hasOwnProperty.call(value, key)) {
		      return false;
		    }
		  }
		  return true;
		}

		isEmpty_1 = isEmpty;
		return isEmpty_1;
	}

	var isEmptyExports = requireIsEmpty();
	var _isEmpty = /*@__PURE__*/getDefaultExportFromCjs(isEmptyExports);

	/**
	 * Checks if `value` is `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	 * @example
	 *
	 * _.isNull(null);
	 * // => true
	 *
	 * _.isNull(void 0);
	 * // => false
	 */

	var isNull_1;
	var hasRequiredIsNull;

	function requireIsNull () {
		if (hasRequiredIsNull) return isNull_1;
		hasRequiredIsNull = 1;
		function isNull(value) {
		  return value === null;
		}

		isNull_1 = isNull;
		return isNull_1;
	}

	var isNullExports = requireIsNull();
	var _isNull = /*@__PURE__*/getDefaultExportFromCjs(isNullExports);

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */

	var isUndefined_1;
	var hasRequiredIsUndefined;

	function requireIsUndefined () {
		if (hasRequiredIsUndefined) return isUndefined_1;
		hasRequiredIsUndefined = 1;
		function isUndefined(value) {
		  return value === undefined;
		}

		isUndefined_1 = isUndefined;
		return isUndefined_1;
	}

	var isUndefinedExports = requireIsUndefined();
	var _isUndefined = /*@__PURE__*/getDefaultExportFromCjs(isUndefinedExports);

	// #if IS_REMOVE
	// lite verions of https://github.com/machsix/iconv-browser
	//
	//
	// another option: https://github.com/r12a/r12a.github.io/blob/master/apps/conversion/conversionfunctions.js
	// to use rollup, you need to set `ignoreGlobal = true` for commonjs
	//                or manually commented out
	// #endif

	/**
	 * Arraybuffer -> Hex
	 * @param {ArrayBuffer} buffer The bytes in an ArrayBuffer.
	 * @returns {Array} hex representation of bytes
	 */
	function buf2hex(buffer) {
	  // buffer is an ArrayBuffer
	  return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2));
	}

	/**
	 * Encode a string into utf8 arraybuffer
	 * @param {string} text string to encode
	 * @returns {ArrayBuffer} encoded string
	 */
	function encode(text) {
	  return new TextEncoder().encode(text);
	}

	/**
	 *
	 * @param {string} text string to encode
	 * @returns {Array} array of hex value for the corresponding arraybuffer
	 */
	function encodeHex(text) {
	  return buf2hex(encode(text));
	}

	/**
	 * Encode a string into a URI-encoded format.
	 * @param {string} text The string to encode.
	 * @returns {string} The URI-encoded string.
	 */
	function encodeURIE(text) {
	  /**
	   * Checks if a string is a valid URI component.
	   * @param {string} str The string to check.
	   * @returns {boolean} True if the string is a valid URI component, false otherwise.
	   */
	  function isURIcomponent(str) {
	    return /^[A-Za-z0-9;,/?:@&=+$-_.!~*'()#]*$/.test(str);
	  }
	  return [].map.call(text, x => {
	    if (isURIcomponent(x)) {
	      return x;
	    } else {
	      return "%".concat(encodeHex(x).map(x => x.toUpperCase()).join('%'));
	    }
	  }).join('');
	}

	var lowercaseKeys = object => {
	  const result = {};
	  for (const [key, value] of Object.entries(object)) {
	    result[key.toLowerCase()] = value;
	  }
	  return result;
	};

	const isNullOrUndefined = x => _isUndefined(x) || _isNull(x);
	const queryString = {
	  parse(text) {
	    const query = text.replace(/^\?/, '');
	    const search = /([^&=]+)=?([^&]*)/g;
	    const decode = function decode(s) {
	      return decodeURIComponent(s.replace(/\+/g, ' '));
	    };
	    const searchParams = {};
	    let match;
	    while (match = search.exec(query)) {
	      searchParams[decode(match[1])] = decode(match[2]);
	    }
	    return searchParams;
	  },
	  stringify(params) {
	    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
	  }
	};

	/** @type {RequestObject} */
	const defaults = {
	  method: 'GET',
	  retry: 0,
	  headers: {},
	  stream: false,
	  cache: true,
	  dnsCache: false,
	  encoding: null,
	  prefixUrl: '',
	  timeout: 0,
	  // wait forever
	  searchParams: {},
	  // queryString for get
	  body: null,
	  // post body
	  data: null,
	  // equivalent to body
	  // additional options from GM.xmlHttpRequest
	  binary: false,
	  user: null,
	  password: null,
	  context: null,
	  html: false,
	  // set to true to overrideMimeType = `text/html`;
	  noHeader: false,
	  cookie: null,
	  // true: document.cookie, string: specific cookie
	  withCredentials: true // VM for cross domain cookie https://github.com/violentmonkey/violentmonkey/issues/761
	};

	/**
	 * Normalize options and merge with defaults
	 * @param {RequestObject} options got style request options
	 * @param {RequestObject} thisDefaults default values to overwrite options
	 * @returns {RequestObject} normalized options
	 */
	function normalizeArguments(options) {
	  let thisDefaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults;
	  const keyNotMerge = [];
	  // `options.headers`
	  if (!isNullOrUndefined(options.headers) && _isString(options.headers)) {
	    try {
	      options.headers = JSON.parse(options.headers);
	    } catch (error) {
	      console.error("[Super-preloader] [got] header: ".concat(options.headers, " error: ").concat(error));
	      delete options.headers;
	    }
	  }
	  if (!isNullOrUndefined(options.headers) && !_isEmpty(options.headers)) {
	    options.headers = lowercaseKeys(options.headers);
	    const {
	      headers
	    } = options;
	    if (headers) {
	      for (const [key, value] of Object.entries(headers)) {
	        if (_isNull(value) || _isUndefined(value)) {
	          delete headers[key];
	        }
	      }
	    }
	  }
	  options.headers = _objectSpread2(_objectSpread2({}, thisDefaults.headers), options.headers);
	  if (_isEmpty(options.headers)) {
	    delete options.headers;
	  }
	  keyNotMerge.push('headers');

	  // `options.prefixUrl`
	  if (!isNullOrUndefined(options.prefixUrl)) {
	    try {
	      options.prefixUrl = options.prefixUrl.toString();
	      if (!options.prefixUrl.endsWith('/')) {
	        options.prefixUrl += '/';
	      }
	    } catch (error) {
	      logger.error("[Super-preloader]", "[Super-preloader] [got] prefixUrl: ".concat(options.prefixUrl, " error: ").concat(error));
	      delete options.prefixUrl;
	    }
	  } else if (options.url[0] === '/') {
	    options.prefixUrl = "".concat(window.location.protocol, "//").concat(window.location.host);
	  }

	  // `options.method`
	  options.method = options.method.toUpperCase();

	  // `options.timeout`
	  if (options.timeout) {
	    options.timeout = parseInt(options.timeout);
	  }

	  // `options.html` and `options.encoding`
	  if (Object.prototype.hasOwnProperty.call(options, 'html')) {
	    if (options.html) {
	      options.binary = false;
	    }
	  } else {
	    options.html = thisDefaults.html;
	  }
	  keyNotMerge.push('encoding');
	  keyNotMerge.push('html');

	  // `options.searchParams` , searchParams must be encoded in "utf8"
	  if (options.searchParams) {
	    if (_isString(options.searchParams)) {
	      options.searchParams = queryString.parse(options.searchParams);
	    }
	  } else {
	    options.searchParams = {};
	  }
	  keyNotMerge.push('searchParams');

	  // `options.body` => `options.data`
	  if (options.body) {
	    options.data = options.body;
	  }

	  // merge with thisDefaults
	  for (const key in thisDefaults) {
	    if (!(key in keyNotMerge)) {
	      if (isNullOrUndefined(options[key])) {
	        options[key] = thisDefaults[key];
	      }
	    }
	  }

	  // `options.cookie`, dirty fix for older versions of TM and VM on Firefox
	  if (!isNullOrUndefined(options.cookie)) {
	    if (_isBoolean(options.cookie) && options.cookie) {
	      options.cookie = document.cookie;
	    }
	    if (_isString(options.cookie)) {
	      if (Object.prototype.hasOwnProperty.call(options, 'headers')) {
	        options.headers.cookie = options.cookie;
	      } else {
	        options.headers = {
	          cookie: options.cookie
	        };
	      }
	    }
	  }
	  if (options.noHeader || _isEmpty(options.headers)) {
	    delete options.headers;
	  }

	  // `options.cache`
	  if (_isBoolean(options.cache) && !options.cache) {
	    options.searchParams.timestamp = new Date().getTime();
	  }
	  if (_isEmpty(options.searchParams)) {
	    delete options.searchParams;
	  }
	  return options;
	}

	/**
	 * Convert got style options to options supported by GM.xmlhttpRequest
	 * You need to add callback after call this function
	 * @param {RequestObject} options Got-style options
	 * @returns {object} GM-style options
	 */
	function gotopt2gmopt(options) {
	  const config = {};
	  ['method', 'url', 'timeout', 'headers', 'binary', 'user', 'password', 'context', 'withCredentials', 'data'].forEach(key => {
	    if (!isNullOrUndefined(options[key])) {
	      config[key] = options[key];
	    }
	  });

	  // process `options.prefixUrl`
	  if (options.prefixUrl) {
	    config.url = options.prefixUrl + options.url;
	  }
	  // process `options.encoding`
	  if (options.html && _isString(options.encoding)) {
	    config.overrideMimeType = "text/html; charset=".concat(options.encoding);
	  }
	  // process `options.searchParams`
	  if (!isNullOrUndefined(options.searchParams)) {
	    config.url += "?".concat(queryString.stringify(options.searchParams));
	  }
	  config.url = encodeURIE(config.url);
	  return config;
	}

	/**
	 * Parse input for post and get method
	 * @param {string} url Link of request
	 * @param {RequestObject} optionsIn Option of request
	 * @returns {RequestObject} option for request
	 */
	function parseArgument(url, optionsIn) {
	  let gotOptions = _objectSpread2({}, optionsIn); // shadow copy
	  if (isNullOrUndefined(optionsIn)) {
	    if (_isObject(url)) {
	      gotOptions = _objectSpread2({}, url);
	    }
	  }
	  if (_isString(url)) {
	    gotOptions.url = url;
	  }
	  return gotOptions;
	}

	/**
	 * Create an instance of got
	 * @param {RequestObject} thisDefaults default option
	 * @returns {object} an instance of got
	 */
	function create(thisDefaults) {
	  /**
	   * General interface of request
	   * @param {object} optionsIn - options of get
	   * @returns {Pormise<ResponseObject>} Promise of response
	   */
	  const request = optionsIn => {
	    let gotOptions = _objectSpread2({}, optionsIn); // make a shadow copy

	    // merge parameter
	    gotOptions = normalizeArguments(gotOptions, request.defaults);

	    // got => gm
	    const gmOptions = gotopt2gmopt(gotOptions);
	    logger.debug("[Super-preloader]", 'GM_xmlhttpRequest', gmOptions);

	    // helper functions
	    const genCallback = (executor, name, retryCount) => function (xmlResponse) {
	      // convert XMLHttpRequest response to Node.js HTTP response
	      // Note: retryCount is added manually
	      /** @type {ResponseObject} */
	      const nodeResponse = {
	        data: xmlResponse.responseText,
	        body: xmlResponse.responseText,
	        statusCode: xmlResponse.status,
	        statusMessage: xmlResponse.statusText,
	        method: gotOptions.method,
	        url: xmlResponse.finalUrl,
	        requestUrl: gotOptions.url,
	        retryCount: retryCount,
	        executorName: name // use to track back which callback function is called
	      };
	      Object.assign(nodeResponse, xmlResponse);
	      return executor(nodeResponse);
	    };

	    /**
	     * Convert GM callback stype API to Promise style
	     * @param {number} retryCount number of retry
	     * @returns {Promise<ResponseObject>} Promise of response
	     */
	    const genPromise = function genPromise() {
	      let retryCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      return new Promise((resolve, reject) => {
	        gmOptions.onload = genCallback(resolve, 'onload', retryCount);
	        ['onabort', 'onerror', 'ontimeout'].forEach(method => {
	          gmOptions[method] = genCallback(reject, method, retryCount);
	        });
	        GM.xmlHttpRequest(gmOptions);
	      });
	    };
	    return new Promise((resolve, reject) => {
	      const retryPromise = retryCount => {
	        genPromise(retryCount).then(nodeResponse => resolve(nodeResponse)).catch(nodeResponse => {
	          if (retryCount < gotOptions.retry) {
	            retryPromise(retryCount + 1);
	          } else {
	            reject(nodeResponse);
	          }
	        });
	      };
	      retryPromise(0);
	    });
	  };
	  request.defaults = {};
	  for (const key in defaults) {
	    request.defaults[key] = isNullOrUndefined(thisDefaults[key]) ? defaults[key] : thisDefaults[key];
	  }

	  /**
	   *
	   * @param {string} url Link of request
	   * @param {RequestObject} optionsIn Request option
	   * @returns {Promise<ResponseObject>} promise of request
	   */
	  request.get = function (url, optionsIn) {
	    const options = parseArgument(url, optionsIn);
	    options.method = 'GET';
	    return this(options);
	  };
	  request.post = function (url, optionsIn) {
	    const options = parseArgument(url, optionsIn);
	    options.method = 'POST';
	    return this(options);
	  };
	  request.create = create;
	  return request;
	}
	const got$1 = create(defaults);

	var flatten_1;
	var hasRequiredFlatten;

	function requireFlatten () {
		if (hasRequiredFlatten) return flatten_1;
		hasRequiredFlatten = 1;
		var baseFlatten = require_baseFlatten();

		/**
		 * Flattens `array` a single level deep.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Array
		 * @param {Array} array The array to flatten.
		 * @returns {Array} Returns the new flattened array.
		 * @example
		 *
		 * _.flatten([1, [2, [3, [4]], 5]]);
		 * // => [1, 2, [3, [4]], 5]
		 */
		function flatten(array) {
		  var length = array == null ? 0 : array.length;
		  return length ? baseFlatten(array, 1) : [];
		}

		flatten_1 = flatten;
		return flatten_1;
	}

	var flattenExports = requireFlatten();
	var _flatten = /*@__PURE__*/getDefaultExportFromCjs(flattenExports);

	var isFunctionExports = requireIsFunction();
	var _isFunction = /*@__PURE__*/getDefaultExportFromCjs(isFunctionExports);

	const got = got$1.create({
	  cache: false
	});

	// Definition of provider
	class RuleProvider {
	  /**
	   * Constructor of a rule provider
	   * @param {string} name Identifier of rule provider
	   * @param {Array[string]} url URL to fetch rule
	   * @param {Array[string]} detailUrl URL to fetch rule detail
	   * @param {boolean} allowFail Allow fail to download rule
	   * @param {Function} ruleParser parser to parse axios response
	   */
	  constructor(name, url, detailUrl, allowFail) {
	    let ruleParser = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	    this.name = name;
	    this.url = _isArray(url) ? url : [url];
	    this.detailUrl = _isArray(detailUrl) ? detailUrl : [detailUrl];
	    this.allowFail = allowFail;
	    this.rule = [];
	    if (_isFunction(ruleParser)) {
	      this.ruleParser = ruleParser;
	    } else {
	      this.ruleParser = res => JSON.parse(res.data);
	    }
	  }
	  setRule(rule) {
	    this.rule = rule;
	  }
	  getRule() {
	    return this.rule;
	  }

	  /**
	   * Download rule and return the rule
	   * @returns {Array} rule
	   */
	  async downloadRule() {
	    let rule = [];
	    let e = null;
	    for (const url of this.url) {
	      try {
	        const res = await got.get(url);
	        rule = this.ruleParser(res);
	        logger.info("[Super-preloader]", "[DownloadRule] ".concat(this.name, " from ").concat(url, " [Status] Success"));
	        break;
	      } catch (error) {
	        logger.error("[Super-preloader]", "[DownloadRule] ".concat(this.name, " from ").concat(url, " [Status] ").concat(error));
	        e = error;
	      }
	    }
	    if (rule) {
	      return rule;
	    } else {
	      throw new Error(e);
	    }
	  }

	  /**
	   * Update rule
	   * @param {object} lastUpdate Date
	   * @returns {Array} rule
	   */
	  async updateRule(lastUpdate) {
	    let detail = null;
	    let error = null;
	    const r = {
	      ok: this.allowFail,
	      value: [],
	      error: null
	    };
	    for (const url of this.detailUrl) {
	      try {
	        const res = await got.get(url);
	        if (res.statusCode !== 200) {
	          throw new Error("Status code: ".concat(res.statusCode));
	        }
	        try {
	          detail = JSON.parse(res.data);
	          // eslint-disable-next-line no-unused-vars
	        } catch (parseError) {
	          detail = {};
	        }
	        if (!Object.hasOwnProperty.call(detail, 'updated_at')) {
	          throw new Error('No updated_at field');
	        }
	        break;
	      } catch (err) {
	        logger.error("[Super-preloader]", "[UpdateRule] ".concat(this.name, " from ").concat(url, " [Status] ").concat(err));
	        detail = null;
	        error = err;
	      }
	    }
	    if (!detail) {
	      r.error = error;
	      return r;
	    }
	    const ruleLastUpdate = new Date(detail.updated_at);
	    if (lastUpdate < ruleLastUpdate || this.rule.length < 1) {
	      try {
	        const rule = await this.downloadRule();
	        logger.info("[Super-preloader]", "[UpdateRule] ".concat(this.name, " [Status] Success"));
	        this.rule = rule;
	      } catch (err) {
	        r.error = err;
	        return r;
	      }
	    } else {
	      logger.info("[Super-preloader]", "[UpdateRule] ".concat(this.name, " [Status] No need to update"));
	    }
	    r.ok = true;
	    r.value = this.rule;
	    return r;
	  }
	}

	// Providers
	const MyData = new RuleProvider('machsix.github.io', ['https://machsix.github.io/Super-preloader/mydata.json'], ['https://machsix.github.io/Super-preloader/mydata_detail.json'], false);
	const WeData = new RuleProvider('wedata.net', ['http://wedata.net/databases/autopagerize/items_all.json', 'https://machsix.github.io/Super-preloader/wedata.json'], ['http://wedata.net/databases/AutoPagerize.json', 'https://machsix.github.io/Super-preloader/wedata_detail.json'], true, res => (_isString(res.data) ? JSON.parse(res.data) : res.data).filter(i => {
	  const nameFilter = ['Generic Posts Rule', 'hAtom'];
	  for (let j = 0; j < nameFilter.length; j++) {
	    if (nameFilter[j].indexOf(i.name) >= 0) {
	      return false;
	    }
	  }
	  return true;
	}).map(i => _objectSpread2({
	  name: i.name,
	  resource_url: i.resource_url
	}, i.data)));
	const p = [MyData, WeData];

	/**
	 * Module to handle json doc
	 * @module jsonRuleLoader
	 */
	var jsonRuleLoader = {
	  providers: p,
	  rule: p.map(() => []),
	  expire: new Date('1992-05-15'),
	  updatePeriodInDay: 1,
	  resetExpire() {
	    this.expire = new Date('1992-05-15');
	  },
	  getRule() {
	    return _flatten(this.rule);
	  },
	  async saveRule() {
	    let saveDB = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    await GM.setValue('jsonRuleInfo', {
	      expire: this.expire.toJSON(),
	      updatePeriodInDay: this.updatePeriodInDay
	    });
	    if (saveDB) {
	      await GM.setValue('SITEINFO_json', this.rule);
	    }
	  },
	  async updateRule() {
	    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    if (force) {
	      this.resetExpire();
	    }
	    const lastUpdate = new Date(+this.expire - this.updatePeriodInDay * 24 * 60 * 60 * 1000);
	    const today = new Date();
	    if (today > this.expire) {
	      const promises = this.providers.map(x => x.updateRule(lastUpdate));
	      await Promise.all(promises).then(values => {
	        const status = values.every(x => x.ok);
	        if (status) {
	          this.rule = values.map(_ref => {
	            let {
	              value
	            } = _ref;
	            return value ? value : this.rule;
	          });
	          this.expire = new Date(+today + this.updatePeriodInDay * 24 * 60 * 60 * 1000);
	          logger.info("[Super-preloader]", "[UpdateRule] Next update at: ".concat(this.expire));
	          this.saveRule();
	        } else {
	          this.expire = today;
	          logger.error("[Super-preloader]", '[UpdateRule] Fail');
	          this.saveRule(false);
	        }
	      });
	    } else {
	      logger.info("[Super-preloader]", "[UpdateRule] Next update at: ".concat(this.expire));
	    }
	  },
	  async loadRule() {
	    let forceUpdateRule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    let [jsonRuleInfo, rule] = await Promise.all([GM.getValue('jsonRuleInfo', {
	      expire: this.expire.toJSON(),
	      updatePeriodInDay: this.updatePeriodInDay
	    }), GM.getValue('SITEINFO_json', this.rule)]);
	    if (_isString(jsonRuleInfo)) jsonRuleInfo = JSON.parse(jsonRuleInfo);
	    if (_isString(rule)) rule = JSON.parse(rule);
	    this.expire = new Date(jsonRuleInfo.expire);
	    this.updatePeriodInDay = parseInt(jsonRuleInfo.updatePeriodInDay);
	    this.rule = rule;
	    if (forceUpdateRule || this.getRule().length === 0) {
	      await this.updateRule(true);
	    }
	    return this.getRule();
	  }
	};

	// ---------------------- Settings stored in GM storaged, changed by control pannel ---------------
	/**@type {ISettings} */
	const factorySettings = {
	  prefs: {
	    floatWindow: true,
	    // 显示悬浮窗
	    customCSS: '',
	    FW_position: 2,
	    // 1:出现在左上角;2:出现在右上角;3：出现在右下角;4：出现在左下角;
	    FW_offset: [20, 38],
	    // 偏离版边的垂直和水平方向的数值..(单位:像素)
	    FW_RAS: true,
	    // 点击悬浮窗上的保存按钮..立即刷新页面;
	    pauseA: true,
	    // 快速停止自动翻页(当前模式为翻页模式的时候生效.);
	    Pbutton: [2, 0, 0],
	    // 需要按住的键.....0: 不按住任何键;1: shift鍵;2: ctrl鍵; 3: alt鍵;(同时按3个键.就填 1 2 3)(一个都不按.就填 0 0 0)
	    mouseA: true,
	    // 按住鼠标左键..否则.双击;
	    Atimeout: 200,
	    // 按住左键时..延时.多少生效..(单位:ms);
	    stop_ipage: true,
	    // 如果在连续翻页过程中暂停.重新启用后.不在继续..连续翻页..

	    Aplus: true,
	    // 自动翻页模式的时候..提前预读好一页..就是翻完第1页,立马预读第2页,翻完第2页,立马预读第3页..(大幅加快翻页快感-_-!!)(建议开启)..
	    sepP: true,
	    // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候是否保持相对位置..
	    sepT: true,
	    // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候使用动画过渡..
	    s_method: 3,
	    // 动画方式 0-10 一种11种动画效果..自己试试吧
	    s_ease: 2,
	    // 淡入淡出效果 0：淡入 1：淡出 2：淡入淡出
	    s_FPS: 60,
	    // 帧速.(单位:帧/秒)
	    s_duration: 333,
	    // 动画持续时长.(单位:ms);
	    DisableI: true,
	    // 只在顶层窗口加载JS..提升性能..如果开启了这项,那么DIExclude数组有效,里面的网页即使不在顶层窗口也会加载....
	    arrowKeyPage: false,
	    // 允许使用 左右方向键 翻页..
	    sepStartN: 2,
	    // 翻页导航上的,从几开始计数.(貌似有人在意这个,所以弄个开关出来,反正简单.-_-!!)

	    // 新增或修改的
	    forceTargetWindow: true,
	    // 下一页的链接设置成在新标签页打开
	    debug: true,
	    enableHistory: false,
	    // 把下一页链接添加到历史记录
	    autoGetPreLink: false,
	    // 一开始不自动查找上一页链接，改为调用时再查找
	    excludes: '',
	    custom_siteinfo: '[]',
	    lazyImgSrc: 'zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder',
	    ChineseUI: false,
	    dblclick_pause: false,
	    factoryCheck: true,
	    disappearDelay: -1,
	    //暂停翻页状态栏disappearDelay ms后消失, -1为不消失
	    numOfRule: 4308,
	    disableBuiltinRules: false,
	    //禁用内建打包在代码里的规则
	    disableBuiltinSubscriptionRules: false //禁用内建订阅远程的规则
	  },
	  SITEINFO_D: {
	    enable: true,
	    // 启用
	    useiframe: false,
	    // (预读)是否使用iframe..
	    viewcontent: false,
	    // 查看预读的内容,显示在页面的最下方.
	    autopager: {
	      enable: true,
	      // 启用自动翻页...
	      force_enable: false,
	      // 默认启用强制拼接
	      manualA: false,
	      // 手动翻页.
	      useiframe: false,
	      // (翻页)是否使用iframe..
	      iloaded: false,
	      // 是否在iframe完全load后操作..否则在DOM完成后操作
	      itimeout: 0,
	      // 延时多少ms后,在操作..
	      newIframe: false,
	      remain: 1,
	      // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
	      maxpage: 99,
	      // 最多翻多少页..
	      ipages: [false, 2],
	      // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
	      separator: true,
	      // 显示翻页导航..(推荐显示.)
	      separatorReal: true,
	      // 显示真实的页数
	      reload: false,
	      // 强制重载iframe
	      sandbox: false,
	      // Iframe sandbox 选项
	      relatedObj: true
	    }
	  },
	  autoMatch: {
	    keyMatch: true,
	    // 是否启用关键字匹配
	    cases: false,
	    // 关键字区分大小写....
	    digitalCheck: true,
	    // 对数字连接进行检测,从中找出下一页的链接
	    pfwordl: {
	      // 关键字前面的字符限定.
	      previous: {
	        // 上一页关键字前面的字符,例如 "上一页" 要匹配 "[上一页" ,那么prefix要的设置要不小于1,并且character要包含字符 "["
	        enable: true,
	        maxPrefix: 3,
	        character: [' ', '　', '[', '［', '<', '＜', '?', '?', '<<', '『', '「', '【', '(', '←']
	      },
	      next: {
	        // 下一页关键字前面的字符
	        enable: true,
	        maxPrefix: 2,
	        character: [' ', '　', '[', '［', '『', '「', '【', '(']
	      }
	    },
	    sfwordl: {
	      // 关键字后面的字符限定.
	      previous: {
	        // 上一页关键字后面的字符
	        enable: true,
	        maxSubfix: 2,
	        character: [' ', '　', ']', '］', '』', '」', '】', ')']
	      },
	      next: {
	        // 下一页关键字后面的字符
	        enable: true,
	        maxSubfix: 3,
	        character: [' ', '　', ']', '］', '>', '﹥', '?', '?', '>>', '』', '」', '】', ')', '→']
	      }
	    },
	    useiframe: false,
	    // (预读)是否使用iframe..
	    viewcontent: false,
	    // 查看预读的内容,显示在页面的最下方.
	    FA: {
	      // 强制拼接 选项 功能设置.
	      enable: false,
	      // 默认启用 强制拼接
	      manualA: false,
	      // 手动翻页.
	      useiframe: false,
	      // (翻页)是否使用iframe..
	      iloaded: false,
	      // (只在opera有效)如果使用iframe翻页..是否在iframe完全load后操作..否则在DOM完成后操作
	      itimeout: 0,
	      // 当使用iframe翻页时在完成后继续等待多少ms后,在操作..
	      remain: 1,
	      // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
	      maxpage: 99,
	      // 最多翻多少页..
	      ipages: [false, 2],
	      // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
	      separator: true // 显示翻页导航..(推荐显示.)..
	    }
	  },
	  version: '1.0.0' // set a small value for first-time installation
	};

	// const settingsKeys = ["prefs", "SITEINFO_D", "autoMatch", "version"];
	/** @type {string[]} */
	const settingsKeys = Object.keys(factorySettings);

	/** @type {ISettings} */
	//@ts-ignore Partial<ISettings> is temp.
	const settings = {};

	/**
	 * Merge a new object to the old one
	 * @param {object} oldProp old property
	 * @param {object} newProp new property
	 * @returns {boolean} whether the object is different
	 */
	function mergeProperty(oldProp, newProp) {
	  let hasDifferency = false;
	  const newKeys = _difference(Object.keys(newProp), Object.keys(oldProp));
	  newKeys.forEach(key => {
	    oldProp[key] = newProp[key];
	    hasDifferency = true;
	  });
	  const oldKeys = _difference(Object.keys(oldProp), Object.keys(newProp));
	  oldKeys.forEach(key => {
	    delete oldProp[key];
	    hasDifferency = true;
	  });
	  for (const k of Object.keys(oldProp)) {
	    if (!Array.isArray(oldProp[k]) && typeof oldProp[k] === 'object') {
	      hasDifferency = hasDifferency || mergeProperty(oldProp[k], newProp[k]);
	    }
	  }
	  return hasDifferency;
	}

	/**
	 * Resets the settings to their factory defaults and saves them using GM storage.
	 * @returns {Promise<void>} A promise that resolves when the settings are reset.
	 */
	async function resetSettings() {
	  logger.info("[Super-preloader]", 'settings are reset');
	  await Promise.all(settingsKeys.map(key => GM.setValue(key, factorySettings[key])));
	}

	/**
	 * Saves the provided settings values to GM storage.
	 * @param {object} values - The settings values to save.
	 * @returns {Promise<void>} A promise that resolves when the settings are saved.
	 */
	async function saveSettings(values) {
	  await Promise.all(Object.keys(values).filter(x => settingsKeys.includes(x)).map(key => GM.setValue(key, values[key])));
	}

	/**
	 * Fetches the IPv4 address of a given hostname using a DNS-over-HTTPS query.
	 * @param {string} hostname - The hostname to resolve to an IP address.
	 * @returns {Promise<string>} A promise that resolves to the IPv4 address or '127.0.0.1' on error.
	 */
	async function getServerIp(hostname) {
	  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
	  try {
	    const res = await got$1.get('https://1.1.1.1/dns-query', {
	      searchParams: {
	        name: hostname,
	        type: 'A'
	      },
	      headers: {
	        accept: 'application/dns-json'
	      }
	    });
	    const result = JSON.parse(res.data);
	    for (const d of result.Answer) {
	      if (ipv4Regex.test(d.data)) {
	        return d.data;
	      }
	    }
	    return '127.0.0.1';
	  } catch (error) {
	    logger.error("[Super-preloader]", 'Error fetching DNS:', error);
	    return '127.0.0.1';
	  }
	}

	/**
	 * Loads the settings from GM storage, merges them with factory defaults, and performs necessary updates.
	 * @returns {Promise<object>} A promise that resolves to the loaded settings, including jsonRule and blackList.
	 */
	async function loadSettings() {
	  const values = await Promise.all(settingsKeys.map(key => GM.getValue(key, factorySettings[key])));
	  settingsKeys.forEach((x, i) => {
	    settings[settingsKeys[i]] = values[i];
	  });
	  const myOldVersion = settings.version;
	  const isRewrote = compareVersions(settings.version, SCRIPT_INFO.rewriteStorage) === -1;
	  if (isRewrote) {
	    // old version uses string to store this data
	    if (_isString(settings.prefs)) settings.prefs = JSON.parse(settings.prefs);
	    if (_isString(settings.SITEINFO_D)) settings.SITEINFO_D = JSON.parse(settings.SITEINFO_D);
	  }
	  const verDiff = compareVersions(settings.version, SCRIPT_INFO.version);
	  const isInstalled = compareVersions(settings.version, factorySettings.version) === 0;

	  // check the consistency of settings and merge prefs
	  /** @type {Array<Promise>} */
	  const postLoading = []; // async function to run after loading settings
	  if (verDiff !== 0 || settings.prefs.factoryCheck !== false) {
	    if (settings.prefs.disableBuiltinSubscriptionRules !== true) {
	      postLoading.push(jsonRuleLoader.loadRule(true));
	    }
	    logger.info("[Super-preloader]", "[UpdateCheck] version is updated ".concat(settings.version, " => ").concat(SCRIPT_INFO.version));
	    settings.version = SCRIPT_INFO.version;
	    settings.autoMatch.useiframe = settings.SITEINFO_D.useiframe || false;
	    postLoading.push(GM.setValue('version', settings.version));
	    const hasDifferency = mergeProperty(settings, factorySettings);
	    settings.prefs.factoryCheck = false;
	    if (hasDifferency) {
	      logger.info("[Super-preloader]", '[UpdateCheck] settings are updated');
	      Object.keys(settings).forEach(key => {
	        if (key !== 'version') {
	          postLoading.push(GM.setValue(key, settings[key]));
	        }
	      });
	    }
	  } else {
	    if (settings.prefs.disableBuiltinSubscriptionRules) {
	      postLoading.push(Promise.resolve([])); //insert an empty jsonRule
	    } else {
	      postLoading.push(jsonRuleLoader.loadRule());
	    }
	  }

	  // set global variables based on prefs
	  if (typeof settings.prefs.debug !== 'undefined') {
	    logger.setLevel(settings.prefs.debug ? 'debug' : 'info');
	  }
	  if (settings.prefs.ChineseUI) {
	    setLang('zh_CN');
	  }

	  // send notification
	  if (verDiff < 0) {
	    if (NOTIFICATION.show(myOldVersion, SCRIPT_INFO.version) || isInstalled) {
	      const opts = {
	        text: '',
	        title: NOTIFICATION.title,
	        image: NOTIFICATION.image,
	        onload: NOTIFICATION.onload
	      };
	      opts.text = template.upgradeNotification({
	        oldversion: myOldVersion,
	        newversion: settings.version
	      });
	      if (Object.keys(NOTIFICATION).includes('extratext')) {
	        if (Object.keys(NOTIFICATION.extratext).includes(userLang)) {
	          opts.text += NOTIFICATION.extratext[userLang];
	        } else {
	          opts.text += NOTIFICATION.extratext.en_US;
	        }
	      }
	      GM.notification(opts);
	    }
	  }
	  const [jsonRule] = await Promise.all(postLoading);

	  /** @type {string[]} */
	  const blackList = [].concat(settings.prefs.excludes.split(/[\n\r]+/).map(line => line.trim()));
	  return _objectSpread2({
	    jsonRule,
	    blackList
	  }, settings);
	}

	// ---------------------- Settings stored in localStorage, changed by floatWindow ---------------
	let domainSettings = [];
	let localSettingIndex = -1;

	/**
	 * Retrieves a value from localStorage and parses it as JSON.
	 * If parsing fails or the key does not exist, returns the provided fallback value.
	 * @param {string} [key] - The key to retrieve from localStorage.
	 * @param {*} [fallback] - The fallback value to return if the key does not exist or parsing fails.
	 * @returns {*} The parsed value from localStorage or the fallback value.
	 */
	function getLocalStorage() {
	  let key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'spfwset';
	  let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  const valStr = localStorage.getItem(key);
	  try {
	    return JSONE.parse(valStr) || fallback;
	  } catch (err) {
	    console.error('Error parsing localStorage value:', err);
	    // compatability with old version
	    const val = JSONE.parse(decodeURIComponent(valStr)) || fallback;
	    setLocalStorage(val, key);
	    return val;
	  }
	}

	/**
	 * Saves a value to localStorage after stringifying it.
	 * @param {*} val - The value to save in localStorage.
	 * @param {string} [key] - The key under which the value will be stored.
	 */
	function setLocalStorage(val) {
	  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'spfwset';
	  localStorage.setItem(key, JSONE.stringify(val));
	}

	/**
	 * Append local pageSetting to the rules, note we may have more than one pageSetting
	 * because localStorage stores rule for a domain but not a URL
	 * @param {object} pageSetting Local pageSetting for a website
	 * @returns {object} modified pageSetting
	 */
	function loadLocalSetting(pageSetting) {
	  domainSettings = getLocalStorage('spfwset') || [];
	  if (!domainSettings) return pageSetting;
	  for (let i = 0; i < domainSettings.length; i++) {
	    const localSetting = domainSettings[i];
	    if (localSetting.Rurl === pageSetting.Rurl) {
	      for (const [key, value] of Object.entries(localSetting)) {
	        pageSetting[key] = value;
	      }
	      localSettingIndex = i;
	      logger.debug("[Super-preloader]", 'Load local settings ', localSetting);
	      return pageSetting;
	    }
	  }
	  localSettingIndex = -1;
	  return pageSetting;
	}

	/**
	 * Saves the local settings for a specific domain or page.
	 * If no existing settings are found, it adds a new entry.
	 * @param {object} localSetting - The local settings object to save.
	 * @returns {object[]} The updated list of domain settings.
	 */
	function saveLocalSetting(localSetting) {
	  if (domainSettings.length === 0 || localSettingIndex === -1) {
	    // no local setting or no suitable local setting
	    domainSettings.push(localSetting);
	    localSettingIndex += 1;
	  } else {
	    domainSettings[localSettingIndex] = localSetting;
	  }
	  setLocalStorage(domainSettings);
	  return domainSettings;
	}

	//@ts-check
	/**
	 * Select a single element by css selector
	 * @param {string} css css of dom
	 * @param {HTMLElement|Document} contextNode dom contextNode
	 * @returns {HTMLElement} a dom node
	 */
	function getElementByCSS(css) {
	  let contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	  return contextNode.querySelector(css);
	}

	/**
	 * Select multiple elements by css selector
	 * @param {string} css css of dom
	 * @param {ParentNode} contextNode dom contextNode
	 * @returns {HTMLElement[]} an array of Nodes
	 */
	function getAllElementsByCSS(css) {
	  let contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	  return [].slice.call(contextNode.querySelectorAll(css));
	}

	/**
	 * Select an element by xpath selector
	 * @param {string} xpath a string representing the XPath to be evaluated
	 * @param {Node} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
	 * @param {Document} doc the document to select from
	 * @returns {HTMLElement} a dom node
	 */
	function getElementByXpath(xpath) {
	  let contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  let doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  contextNode = contextNode || doc;
	  try {
	    const result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	    // @ts-ignore
	    return /** @type {HTMLElement} */result.singleNodeValue && result.singleNodeValue.nodeType === 1 && result.singleNodeValue;
	  } catch (err) {
	    console.error(err);
	    throw new Error("Invalid xpath: ".concat(xpath));
	  }
	}

	/**
	 * Select multiple elements by xpath selector
	 * @param {string} xpath a string representing the XPath to be evaluated
	 * @param {Node} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
	 * @param {Document} doc the document to select from
	 * @returns {HTMLElement[]} an array of Nodes
	 */
	function getAllElementsByXpath(xpath, contextNode) {
	  let doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  contextNode = contextNode || doc;
	  const result = [];
	  try {
	    const query = doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	    for (let i = 0; i < query.snapshotLength; i++) {
	      const node = query.snapshotItem(i);
	      //if node is an element node
	      if (node.nodeType === 1) result.push(node);
	    }
	  } catch (err) {
	    console.error(err);
	    throw new Error("Invalid xpath: ".concat(xpath));
	  }
	  // @ts-ignore
	  return result;
	}

	/**
	 * Get all elements matching the selector
	 * @param {ISelectorFunction} selector css selector or xpath selector
	 * @param {Element|Document|DocumentFragment} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
	 * @param {Document} doc the document to select from
	 * @param {Window} win window of the browser
	 * @param {string} _cplink current page link
	 * @returns {HTMLElement[]} an array of nodes
	 */
	function getAllElements(selector) {
	  let contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
	  let doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  let win = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;
	  let _cplink = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
	  if (!selector) return [];
	  //@ts-ignore
	  contextNode = contextNode || doc;
	  if (typeof selector === 'string') {
	    if (selector.search(/^css;/i) === 0) {
	      return getAllElementsByCSS(selector.slice(4), contextNode);
	    } else {
	      return getAllElementsByXpath(selector, contextNode, doc);
	    }
	  } else {
	    const query = selector(doc, win, _cplink);
	    if (!Array.isArray(query)) {
	      throw new Error('Wrong type is returned by getAllElements');
	    } else {
	      return query;
	    }
	  }
	}

	/**
	 * Get all elements matching the selector
	 * Some bad xpath like
	 * （1）//div[@id='content']/p
	 * （2） id('content')
	 * will only return the p element under the first div matching the id.
	 * The script can result in multiple div with the same id
	 * This function handles such kind of condition
	 * @param {ISelectorFunction} selector css selector or xpath selector
	 * @param {Element|Document|DocumentFragment} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
	 * @param {Document} doc the document to select from
	 * @param {Window} win window of the browser
	 * @param {string} _cplink current page link
	 * @returns {HTMLElement[]} an array of nodes
	 */
	function getAllElementsDuplicate(selector) {
	  let contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
	  let doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  let win = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;
	  let _cplink = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
	  let firstElems = [];
	  if (typeof selector === 'string') {
	    if (selector.search(/^css;/i) !== 0) {
	      // replace all id('x') by //*[@id='x']
	      selector = selector.replace(/^id\((.*?)\)/g, '//*[@id=$1]');
	      // prevent xpath like `//div[2]`
	      const strippedSelector = /(.*\w+)\[\d+\]$/.exec(selector);
	      if (strippedSelector) {
	        firstElems = getAllElements(selector, contextNode, doc, win, _cplink);
	        selector = strippedSelector[1];
	      }
	    }
	  }
	  const elems = getAllElements(selector, contextNode, doc, win, _cplink);
	  let eles = [];
	  if (firstElems.length > 0) {
	    const childNodeCount = [];
	    for (let i = 0; i < firstElems.length; i++) {
	      childNodeCount.push([].reduce.call(elems[0].children, (x, y) => x + (y.nodeName != 'SCRIPT' ? 1 : 0), 0));
	      eles.push(firstElems[i]);
	    }
	    for (let i = 0; i < elems.length; i++) {
	      for (let j = 0; j < firstElems.length; j++) {
	        if (elems[i] === firstElems[j]) break;
	        if (elems[i].className === firstElems[j].className && elems[i].childElementCount === childNodeCount[j]) {
	          eles.push(elems[i]);
	          break;
	        }
	      }
	    }
	  } else {
	    eles = elems;
	  }
	  return eles;
	}

	/**
	 * Get the last visible element matching the given selector
	 * @param {ISelectorFunction} selector selector
	 * @param {string} _cplink _cplink
	 * @param {HTMLElement} contextNode contextNode
	 * @param {Document} doc doc
	 * @param {Window} win win
	 * @returns {HTMLElement} Last dom element
	 */
	// @ts-ignore
	function getLastVisibleElement(selector, _cplink) {
	  let contextNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (/** @type {HTMLElement | Document} */document);
	  let doc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;
	  let win = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : window;
	  let eles = getAllElementsDuplicate(selector, contextNode, doc, win, _cplink);
	  eles = eles.filter(e => e.offsetParent !== null);
	  if (eles.length > 0) {
	    return eles[eles.length - 1];
	  } else {
	    return null;
	  }
	}

	/**
	 * Converts an input object to a regular expression.
	 * @param {RegExp|Array|string} obj - The input object to convert. Can be a RegExp, an array with pattern and flags, or a string.
	 * @returns {RegExp} - The resulting regular expression.
	 */
	function toRE(obj) {
	  if (obj instanceof RegExp) {
	    return obj;
	  } else if (obj instanceof Array) {
	    return new RegExp(obj[0], obj[1]);
	  } else {
	    if (obj.search(/^wildc;/i) === 0) {
	      obj = wildcardToRegExpStr(obj.slice(6));
	    }
	    return new RegExp(obj);
	  }
	}

	/**
	 * Converts a wildcard string to a regular expression string.
	 * @param {string} urlstr - The input string containing wildcards.
	 * @returns {string} - The resulting regular expression string.
	 */
	function wildcardToRegExpStr(urlstr) {
	  if (urlstr.source) return urlstr.source;
	  const reg = urlstr.replace(/[()[\]{}|+.,^$?\\]/g, '\\$&').replace(/\*+/g, function (str) {
	    return str === '*' ? '.*' : '[^/]*';
	  });
	  return '^' + reg + '$';
	}

	/**
	 * Adds a CSS style block to the document.
	 * @param {string} aCss - The CSS rules to add.
	 * @param {string} [aId] - The optional ID to assign to the style element.
	 * @param {Document} [doc] - The document to which the style will be added.
	 * @returns {HTMLStyleElement|null} The appended style element or null if no head element exists.
	 */
	function addStyle(aCss, aId) {
	  let doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  let head = doc.getElementsByTagName('head');
	  if (!head) {
	    head = doc.documentElement;
	  } else {
	    head = head[0];
	  }
	  const style = doc.createElement('style');
	  if (aId) {
	    style.setAttribute('id', aId);
	  }
	  style.setAttribute('type', 'text/css');
	  style.textContent = aCss;
	  if (head) {
	    return head.appendChild(style);
	  } else {
	    return null;
	  }
	}

	var displace$1 = {exports: {}};

	/*!
	 * displacejs.js 1.4.0 - Tiny javascript library to create moveable DOM elements.
	 * Copyright (c) 2021 Catalin Covic - https://github.com/catc/displace
	 * License: MIT
	 */

	var hasRequiredDisplace;

	function requireDisplace () {
		if (hasRequiredDisplace) return displace$1.exports;
		hasRequiredDisplace = 1;
		(function (module, exports) {
			(function webpackUniversalModuleDefinition(root, factory) {
				module.exports = factory();
			})(this, function() {
			return /******/ (function(modules) { // webpackBootstrap
			/******/ 	// The module cache
			/******/ 	var installedModules = {};

			/******/ 	// The require function
			/******/ 	function __webpack_require__(moduleId) {

			/******/ 		// Check if module is in cache
			/******/ 		if(installedModules[moduleId])
			/******/ 			return installedModules[moduleId].exports;

			/******/ 		// Create a new module (and put it into the cache)
			/******/ 		var module = installedModules[moduleId] = {
			/******/ 			exports: {},
			/******/ 			id: moduleId,
			/******/ 			loaded: false
			/******/ 		};

			/******/ 		// Execute the module function
			/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ 		// Flag the module as loaded
			/******/ 		module.loaded = true;

			/******/ 		// Return the exports of the module
			/******/ 		return module.exports;
			/******/ 	}


			/******/ 	// expose the modules object (__webpack_modules__)
			/******/ 	__webpack_require__.m = modules;

			/******/ 	// expose the module cache
			/******/ 	__webpack_require__.c = installedModules;

			/******/ 	// __webpack_public_path__
			/******/ 	__webpack_require__.p = "";

			/******/ 	// Load entry module and return exports
			/******/ 	return __webpack_require__(0);
			/******/ })
			/************************************************************************/
			/******/ ([
			/* 0 */
			/***/ (function(module, exports, __webpack_require__) {

				var _displace = __webpack_require__(1);

				var _displace2 = _interopRequireDefault(_displace);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				module.exports = _displace2.default;

			/***/ }),
			/* 1 */
			/***/ (function(module, exports, __webpack_require__) {

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _utils = __webpack_require__(2);

				var _events = __webpack_require__(3);

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var moveFn = (0, _utils.generateMoveFn)();

				var defaultOpts = {
					constrain: false,
					relativeTo: null,
					handle: null,
					ignoreFn: null,
					highlightInputs: false,

					// events
					onMouseDown: null,
					onMouseMove: null,
					onMouseUp: null,
					onTouchStart: null,
					onTouchMove: null,
					onTouchStop: null,

					customMove: null
				};

				var Displace = function () {
					function Displace(el, opts) {
						_classCallCheck(this, Displace);

						if (!el) {
							throw Error('Must include moveable element');
						}
						this.el = el;
						this.opts = opts;

						// init
						setup.call(this);
					}

					Displace.prototype.reinit = function reinit() {
						this.destroy();
						setup.call(this);
					};

					Displace.prototype.destroy = function destroy() {
						var events = this.events;

						this.handle.removeEventListener('mousedown', events.mousedown, false);
						document.removeEventListener('mousemove', events.mousemove, false);
						document.removeEventListener('mouseup', events.mouseup, false);

						this.handle.removeEventListener('touchstart', events.touchstart, false);
						document.removeEventListener('touchmove', events.touchmove, false);
						document.removeEventListener('touchstop', events.touchstop, false);
						document.removeEventListener('touchmove', this.events.scrollFix, { passive: false });
					};

					return Displace;
				}();

				function setup() {
					var _this = this;

					var el = this.el;
					var opts = this.opts || defaultOpts;
					var data = {};

					// set required css
					el.style.position = 'absolute';

					// set the handle
					this.handle = opts.handle || el;

					// generate min / max ranges
					if (opts.constrain) {
						var relTo = opts.relativeTo || el.parentNode;

						var traverse = el;
						var minX = 0;
						var minY = 0;
						while (traverse !== relTo) {
							traverse = traverse.parentNode;
							if ((0, _utils.isRelative)(traverse)) {
								minX -= traverse.offsetLeft;
								minY -= traverse.offsetTop;
							}
							if (traverse === relTo) {
								minX += traverse.offsetLeft;
								minY += traverse.offsetTop;
							}
						}

						var maxX = minX + relTo.offsetWidth - el.offsetWidth;
						var maxY = minY + relTo.offsetHeight - el.offsetHeight;

						data.xClamp = (0, _utils.generateClamp)(minX, maxX);
						data.yClamp = (0, _utils.generateClamp)(minY, maxY);
					}

					this.opts = opts;
					this.data = data;
					this.events = {
						// mouse events
						mousedown: _events.mousedown.bind(this),
						mouseup: _events.mouseup.bind(this),

						// touch events
						touchstart: _events.touchstart.bind(this),
						touchstop: _events.touchstop.bind(this),

						// disable scrolling on mobile while dragging
						// https://github.com/bevacqua/dragula/issues/487
						scrollFix: function scrollFix(e) {
							if (_this.isDragging) {
								e.preventDefault();
							}
						}
					};

					// create move function - either use default move functionality or custom (if provided)
					this.handleMove = moveFn(this.opts.customMove);

					// add init events to handle
					this.handle.addEventListener('mousedown', this.events.mousedown, false);
					this.handle.addEventListener('touchstart', this.events.touchstart, false);

					// scroll fix for mobile
					document.addEventListener('touchmove', this.events.scrollFix, { passive: false });
				}

				// export factory fn

				exports.default = function (el, opts) {
					return new Displace(el, opts);
				};

			/***/ }),
			/* 2 */
			/***/ (function(module, exports) {

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.generateClamp = generateClamp;
				exports.isRelative = isRelative;
				exports.generateMoveFn = generateMoveFn;
				function generateClamp(min, max) {
					return function (val) {
						return Math.min(Math.max(val, min), max);
					};
				}

				function isRelative(el) {
					return window.getComputedStyle(el).position === 'relative';
				}

				function generateMoveFn() {
					if (window.requestAnimationFrame) {
						return function (customFn) {
							var move = customFn || defaultMove;

							return function (el, x, y) {
								window.requestAnimationFrame(function () {
									move(el, x, y);
								});
							};
						};
					}
					return function (customFn) {
						return function (el, x, y) {
							var move = customFn || defaultMove;
							move(el, x, y);
						};
					};
				}

				function defaultMove(el, x, y) {
					el.style.left = x + 'px';
					el.style.top = y + 'px';
				}

			/***/ }),
			/* 3 */
			/***/ (function(module, exports) {

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.mousedown = mousedown;
				exports.mousemove = mousemove;
				exports.mouseup = mouseup;
				exports.touchstart = touchstart;
				exports.touchmove = touchmove;
				exports.touchstop = touchstop;
				// mouse events
				function mousedown(e) {
					var opts = this.opts;
					if (opts.highlightInputs) {
						// allow for selection of text in inputs/textareas
						var target = e.target.tagName.toLowerCase();
						if (target === 'input' || target === 'textarea') {
							return;
						}
					}

					if (opts.ignoreFn && opts.ignoreFn(e)) {
						return;
					}

					// only left button is clicked
					if (e.button === 0) {
						var el = this.el;
						var events = this.events;

						if (typeof opts.onMouseDown === 'function') {
							opts.onMouseDown(el, e);
						}

						// determine initial offset and bind to mousemove handler
						var wOff = e.clientX - el.offsetLeft;
						var hOff = e.clientY - el.offsetTop;
						events.mousemove = mousemove.bind(this, wOff, hOff);

						document.addEventListener('mousemove', events.mousemove, false);
						document.addEventListener('mouseup', events.mouseup, false);
					}

					// prevent highlighting text when dragging (IE)
					e.preventDefault();
				}
				function mousemove(offsetW, offsetH, e) {
					var el = this.el;
					var opts = this.opts;
					var data = this.data;

					if (typeof opts.onMouseMove === 'function') {
						opts.onMouseMove(el, e);
					}

					var x = e.clientX - offsetW;
					var y = e.clientY - offsetH;

					if (opts.constrain) {
						// clamp values if out of range
						x = data.xClamp(x);
						y = data.yClamp(y);
					}
					this.handleMove(el, x, y);

					// prevent highlighting text when dragging
					e.preventDefault();
					return false;
				}
				function mouseup(e) {
					var el = this.el;
					var opts = this.opts;
					var events = this.events;

					if (typeof opts.onMouseUp === 'function') {
						opts.onMouseUp(el, e);
					}

					document.removeEventListener('mouseup', events.mouseup, false);
					document.removeEventListener('mousemove', events.mousemove, false);
				}
				// touch events
				function touchstart(e) {
					var opts = this.opts;
					if (opts.highlightInputs) {
						// allow for selection of text in inputs/textareas
						var target = e.target.tagName.toLowerCase();
						if (target === 'input' || target === 'textarea') {
							return;
						}
					}

					if (opts.ignoreFn && opts.ignoreFn(e)) {
						return;
					}

					var el = this.el;
					var events = this.events;

					if (typeof opts.onTouchStart === 'function') {
						opts.onTouchStart(el, e);
					}

					var touch = e.targetTouches[0];
					var wOff = touch.clientX - el.offsetLeft;
					var hOff = touch.clientY - el.offsetTop;

					events.touchmove = touchmove.bind(this, wOff, hOff);

					// disable scrolling
					this.isDragging = true;

					document.addEventListener('touchmove', events.touchmove, false);
					document.addEventListener('touchend', events.touchstop, false);
					document.addEventListener('touchcancel', events.touchstop, false);
				}
				function touchmove(offsetW, offsetH, e) {
					var el = this.el;
					var opts = this.opts;
					var data = this.data;

					if (typeof opts.onTouchMove === 'function') {
						opts.onTouchMove(el, e);
					}

					var touch = e.targetTouches[0];
					var x = touch.clientX - offsetW;
					var y = touch.clientY - offsetH;

					if (opts.constrain) {
						// clamp values if out of range
						x = data.xClamp(x);
						y = data.yClamp(y);
					}
					this.handleMove(el, x, y);

					// prevent highlighting text when dragging
					e.preventDefault();
					return false;
				}
				function touchstop(e) {
					// re-enable scrolling
					this.isDragging = false;

					var el = this.el;
					var opts = this.opts;
					var events = this.events;

					if (typeof opts.onTouchStop === 'function') {
						opts.onTouchStop(el, e);
					}

					document.removeEventListener('touchmove', events.touchmove, false);
					document.removeEventListener('touchend', events.touchstop, false);
					document.removeEventListener('touchcancel', events.touchstop, false);
				}
			/***/ })
			/******/ ])
			});
		} (displace$1));
		return displace$1.exports;
	}

	var displaceExports = requireDisplace();
	var displace = /*@__PURE__*/getDefaultExportFromCjs(displaceExports);

	/**
	 * Waits for an element satisfying selector to exist, then resolves promise with the element.
	 * Useful for resolving race conditions.
	 * @param {object} element dom element
	 * @param {string} type type of observer
	 * @returns {Promise} promise when observed
	 */
	function elementReady(element, type) {
	  const config = type === 'attributes' ? {
	    attributes: true
	  } : {
	    childList: true
	  };
	  return new Promise(resolve => {
	    new MutationObserver((mutationList, observer) => {
	      resolve({
	        element: element,
	        type: type,
	        mutationList: mutationList,
	        observer: observer
	      });
	    }).observe(element, config);
	  });
	}

	//@ts-check
	///<reference path="../index.d.ts"/>
	// General rules for CMS like phpwind
	/**@type {IRule[]} */
	const jsGeneralRule = [{
	  name: '2048 image mode',
	  url: 'https?://[^/]*/2048/',
	  pageElement: '//ul[@id="waterfall"]/li',
	  nextLink: '//div[@class="pages"]/b/following-sibling::a'
	}, {
	  name: '2048 text mode',
	  url: 'https?://[^/]*/2048/',
	  pageElement: '//table[@id="ajaxtable"]/tbody[2]/tr[contains(@class,"tr3")]',
	  nextLink: '//div[@class="pages"]/b/following-sibling::a',
	  autopager: {
	    relatedObj: true,
	    documentFilter: 'startFilter',
	    startFilter: function startFilter(doc) {
	      try {
	        doc.querySelector('tr[onmouseover]').remove();
	      } catch (err) {
	        console.error(err);
	      }
	      var trs = doc.querySelectorAll('#ajaxtable .tr3');
	      if (trs.length > 0) {
	        for (var i = 0; i < trs.length; i++) {
	          const thisTrs = trs[i];
	          //@ts-ignore
	          const postLink = thisTrs.querySelector('td:nth-of-type(2) a').href;
	          if (postLink) {
	            fetch(postLink).then(r => r.text()).then(html => {
	              const doc = new DOMParser().parseFromString(html, 'text/html');
	              const imgNode = doc.querySelector('td.r_one img');
	              if (imgNode) {
	                thisTrs.querySelector('td:nth-of-type(1)').innerHTML = '';
	                thisTrs.querySelector('td:nth-of-type(1)').appendChild(createDOM('IMG', {
	                  attr: {
	                    //@ts-ignore
	                    src: imgNode.src,
	                    width: '840',
	                    title: 'Powered by Super-Preloader Plus',
	                    onload: 'if(this.height>"840")this.width=this.width*840/this.height;'
	                  }
	                }));
	              }
	            });
	          }
	        }
	      }
	    }
	  }
	}, {
	  name: 'Discuz 论坛 - 搜索',
	  url: '^https?://bbs\\.[a-z]+\\.cn/search\\.php\\?mod=forum',
	  preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
	  nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
	  autopager: {
	    pageElement: '//div[@id="threadlist"]',
	    replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
	  }
	}, {
	  name: 'Discuz 论坛 - 导读',
	  url: /^https?:\/\/(?:bbs|u)\.[^/]+\/(?:forum\.php\?mod=guide|home\.php\?mod=space)/i,
	  preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
	  nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
	  autopager: {
	    pageElement: "//div[@id='postlist'] | //form[@method='post'][@name] | //div[@id='threadlist']/div[@class='bm_c'] | //div[@class='xld xlda']",
	    replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
	  }
	}, {
	  name: 'Discuz论坛列表',
	  url: /^https?:\/\/(?:www\.[^/]+\/|[^/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:forum)|(?:showforum)|(?:viewforum)|(?:forumdisplay))+/i,
	  preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
	  nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/a[@class="p_curpage"]/following-sibling::a[@class="p_num"]',
	  autopager: {
	    pageElement: '//form[@method="post"][@name] | //div[@id="postlist"] | //div[@id="threadlist"]',
	    replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
	    lazyImgSrc: 'file|pagespeed_lsc_url'
	  }
	}, {
	  name: 'Discuz论坛帖子',
	  url: /^https?:\/\/(?:www\.[^/]+\/|[^/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:thread)|(?:viewthread)|(?:showtopic)|(?:viewtopic))+/i,
	  preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
	  nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/descendant::a[text()="??"]',
	  autopager: {
	    pageElement: '//div[@id="postlist"] | //form[@method="post"][@name]',
	    replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
	    lazyImgSrc: 'zoomfile',
	    stylish: '.mbbs_code{font-family:Monaco,Consolas,"Lucida Console","Courier New",serif;font-size:12px;line-height:1.8em;list-style-type:decimal-leading-zero;padding-left:10px;background:none repeat scroll 0 0 #f7f7f7;color:#666;border:1px solid #ccc;overflow:hidden;padding:10px 0 5px 10px}',
	    filter: function filter(_pages) {
	      // 回复后插入到最后一页
	      const replays = document.querySelectorAll('#postlistreply');
	      if (replays.length > 1) {
	        const first = replays[0];
	        first.parentNode.removeChild(first);
	      }

	      // 在卡饭论坛如果不存在，会提示，所以默认禁用
	      // var SyntaxHighlighter = unsafeWindow.SyntaxHighlighter;
	      // if (SyntaxHighlighter && SyntaxHighlighter.highlight) {
	      //     SyntaxHighlighter.highlight();
	      // }
	    },
	    documentFilter: function documentFilter(doc) {
	      // 卡饭论坛的下一页代码区域可能无法着色，所以手动修改并添加样式
	      const pres = doc.querySelectorAll('pre[class^="brush:"]');
	      [].forEach.call(pres, function (pre) {
	        pre.classList.add('mbbs_code');
	      });
	    }
	  }
	}, {
	  name: 'phpWind论坛列表',
	  url: /^https?:\/\/(?:www\.[^/]+\/|[^/]+\/(?:bbs\/)?)?thread/i,
	  preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
	  nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
	  autopager: {
	    pageElement: '//div[@class="t z"] | //div[@class="z"] | //div[@id="ajaxtable"]'
	  }
	}, {
	  name: 'phpWind论坛帖子',
	  url: /^https?:\/\/(?:www\.[^/]+\/|[^/]+\/(?:bbs\/)?)?read/i,
	  preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
	  nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
	  autopager: {
	    pageElement: '//div[@class="t5"] | //div[@class="read_t"] | //div[@id="pw_content"]'
	  }
	}, {
	  name: 'phpBB列表',
	  url: /^https?:\/\/[^/]+(\/[a-z,0-9]+)?\/viewforum/i,
	  exampleUrl: 'http://www.firefox.net.cn/forum/viewforum.php?f=4',
	  nextLink: 'auto;',
	  autopager: {
	    pageElement: '(//div[@id="page-body"]/div[@class="forumbg"]|//table[@class="forumline"]|//table[@class="tablebg"])',
	    // replaceE:'//fildset[@class="display-options")]',
	    remain: 1 / 3
	  }
	}, {
	  name: 'phpBB帖子',
	  url: /^https?:\/\/[^/]+(\/[a-z,0-9]+)?\/viewtopic/i,
	  exampleUrl: 'http://www.firefox.net.cn/forum/viewtopic.php?t=34339',
	  nextLink: 'auto;',
	  autopager: {
	    // pageElement:'//div[@id="page-body"]',
	    pageElement: '(//div[@id="page-body"]/div[contains(@class,"post")]|//table[@class="forumline"]|//table[@class="tablebg"])'
	    // replaceE:"//fildset[@class='display-options']",
	  }
	}, {
	  name: 'phpBB Search',
	  url: /^https?:\/\/forum\.[^/]+\/search\.php/i,
	  exampleUrl: 'http://forum.everedit.net/search.php?keywords=%E5%A4%A7%E7%BA%B2',
	  nextLink: 'auto;',
	  autopager: {
	    pageElement: 'id("page-body")/div[starts-with(@class, "search post")]',
	    replaceE: 'id("page-body")/ul[@class="linklist"]'
	  }
	}, {
	  name: 'discuz论坛通用搜索',
	  url: '^https?://[^/]+/f/(?:discuz|search)',
	  nextLink: 'auto;',
	  pageElement: 'id("result-items")'
	}, {
	  name: 'View forum - 通用',
	  url: '^https?://.+?/viewforum\\.php\\?',
	  nextLink: '//span[@class="gensmall"]/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class="nav"])[last()]/b[last()]/following-sibling::a[1]  | //div[@class="pagination"]/span/strong/following-sibling::a[1] | //a[text()="Next"]',
	  pageElement: '//ul[contains(concat(" ",@class," ")," topics ")]|//form[table/@class="forumline"]'
	}, {
	  name: 'wiki 通用',
	  url: '.\\?(?:.+&)?search=',
	  nextLink: '//a[@class="mw-nextlink"]',
	  pageElement: '//ul[@class="mw-search-results"]'
	}, {
	  name: '通用 Forum 规则1',
	  url: '^https?://.*((showthread\\.php\\?)|(forum|thread))',
	  nextLink: '//a[@rel="next"]',
	  pageElement: '//div[@id="posts"]|//ol[@id="posts"]/li',
	  separatorReal: false
	}, {
	  name: '通用 Forum 规则2 vBulletin threads',
	  url: '^https?://[^?#]+?/showthread\\.php\\?',
	  nextLink: '//tr[@valign="top"]//div[@class="pagenav"]//a[contains(text(), ">")]',
	  pageElement: '(//div[@class="pagenav"])[1]|//div[@id="posts"]/node()',
	  separatorReal: false
	}, {
	  name: '通用 Forum 规则3 vBulletin thread_list',
	  url: '^https?://.*((forumdisplay\\.php\\?)|forum)',
	  nextLink: 'auto;',
	  pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"] | //div[@id="threadlist"] | //div[@id="postlist"]',
	  separatorReal: false
	}, {
	  name: '通用 Forum 规则4',
	  url: /^https?:\/\/forums\..*\/threads/i,
	  nextLink: "(//div[@class=\"PageNav\"])[1]//a[contains(text(),' > ')]",
	  pageElement: '//ol[@id="messageList"]/li',
	  separatorReal: false
	}, {
	  name: 'PHPWind 5.3.0 / 6.0.0 / 6.3.2 / 7.0.0 / 7.5.0 - View Thread',
	  url: '^https?://.+/read\\.php\\?.*tid((=[0-9]+.*)|(-[0-9]+.*\\.html?))$',
	  nextLink: 'auto;',
	  pageElement: '//form[@name="delatc"]',
	  exampleUrl: 'http://www.yydzh.com/read.php?tid=1584013'
	}, {
	  name: 'Typecho',
	  url: '^https?://',
	  nextLink: "//ol[@class='page-navigator']/li[@class='next']/a",
	  autopager: {
	    pageElement: function pageElement(doc, _win, _cplink) {
	      const gen = getElementByXpath("//head/meta[@name='generator']", doc, doc);
	      //@ts-ignore
	      if (!gen || !gen.content.includes('Typecho') || !doc.documentElement.outerHTML.includes('Typecho')) {
	        return null;
	      }
	      try {
	        return getAllElementsByXpath("//article[@class='post'] | //div[@class='blog-post']", doc, doc);
	      } catch (error) {
	        console.error(error);
	        return null;
	      }
	    },
	    relatedObj: true
	  }
	}, {
	  name: 'XenForo thread',
	  url: '^http(s)?://.+/(forums?|threads|community)/',
	  exampleUrl: 'https://xenforo.com/community/threads/job-xf-emailunsubscribe-invalid-header-value-detected.177611/',
	  pageElement: "//div[@class='block-container lbContainer']",
	  nextLink: "//a[@class='pageNav-jump pageNav-jump--next']"
	}, {
	  name: 'WordPress',
	  url: '^https?://[^/]+(/page/\\d+)?',
	  nextLink: function nextLink(_doc, _win, _cplink) {
	    const cplink = _cplink.replace(/^(.*)(#[^/]*)?$/, '$1');
	    if (cplink.slice(cplink.length - 5, cplink.length) === '.html') {
	      return undefined;
	    }
	    if (cplink.slice(cplink.length - 4, cplink.length) === '.htm') {
	      return undefined;
	    }
	    const a = /^(https?:\/\/.*?)(\/page\/\d+\/?)?$/.exec(cplink);
	    if (a[2]) {
	      const b = Number(/\/page\/(\d+)/.exec(a[2])[1]) + 1;
	      return cplink.replace(/^(https?:\/\/.*?\/page\/)\d+(.*)$/, '$1' + String(b) + '$2');
	    } else {
	      return cplink.replace(/^(.*?)\/?$/, '$1') + '/page/2';
	    }
	  },
	  autopager: {
	    pageElement: function pageElement(doc, win, _cplink) {
	      const blackList = [/^https?:\/\/bwg\.net\/?$/, /^https?:\/\/sunbox\.cc\/?$/, /^https?:\/\/anime1\.me/, /^https?:\/\/github\.com/];
	      for (var i = 0; i < blackList.length; i++) {
	        if (blackList[i].test(_cplink)) {
	          return null;
	        }
	      }
	      // detect if this is wordpress
	      const wpText = ['wp-content', 'wp-plugin', 'wp-comment'];
	      var isWP = false;
	      for (i = 0; i < wpText.length; i++) {
	        if (doc.documentElement.outerHTML.indexOf(wpText[i]) > -1) {
	          isWP = true;
	          break;
	        }
	      }
	      if (!isWP) {
	        return null;
	      }

	      // if this is the page of an article, return null
	      const submitComment = ['发表评论', '提交评论', '添加留言', '提交留言', 'コメントを送信', 'SUBMIT COMMENT', 'POST COMMENT', 'Submit Comment', 'Post comment', 'Post Comment'];
	      for (i = 0; i < submitComment.length; i++) {
	        if (getElementByXpath("//input[@value='" + submitComment[i] + "']", doc, doc)) {
	          return null;
	        }
	        if (getElementByXpath("//a[text()='" + submitComment[i] + "']", doc, doc)) {
	          return null;
	        }
	      }
	      if ((document.documentElement.textContent || document.documentElement.innerText).indexOf('comment-form')) {
	        // https://www.vlchelp.com/how-to-disable-building-font-cache/
	        return null;
	      }
	      const postXpath = ["//button[@id='submit']", "//div[@class='single-post-box']", "//div[@class='single_post']"];
	      for (i = 0; i < postXpath.length; i++) {
	        if (getElementByXpath(postXpath[i], doc, doc)) {
	          return null;
	        }
	      }

	      // get from latest post
	      // example https://next.365cent.com/ v5.1.1
	      var posts = getAllElements("//div[contains(@class,'main')]//article[starts-with(@id,'post-')]", doc, doc, win);
	      if (posts.length > 0) {
	        return posts;
	      }
	      posts = getAllElements("//article[starts-with(@id,'post-')]", doc, doc, win);
	      if (posts.length > 0) {
	        return posts;
	      }
	      posts = getAllElements("//*[contains(@class,'container')]//article|//*[contains(@class,'container')]//div[contains(@class,'article-post')]", doc, doc, win);
	      if (posts.length > 0) {
	        return posts;
	      }
	      //https://www.portablesoft.org/
	      posts = getAllElements("//div[@id='main']/div[@class='post-entry']", doc, doc, win);
	      if (posts.length > 0) {
	        return posts;
	      }
	      posts = getAllElements("//*[contains(@class,'container')]//div[substring(@class,string-length(@class) -string-length('post')+1)='post']", doc, doc, win);
	      return posts;
	    },
	    relatedObj: true
	  }
	}, {
	  name: 'Generic Posts Rule created by swdyh',
	  exampleUrl: 'http://wedata.net/items/400.json',
	  url: '^https?://.+',
	  pageElement: "(//article[not(contains(../@class,'widget'))][not(contains(@class,'columns four'))][not(ancestor::*[starts-with(@class,'sidebar')])]|//*[starts-with(@id,'post-')][not(contains(@id,'post-rating'))])[not(.//*[contains(@class,'admz')])][not(id('load-more-posts') or @id='fpost' or contains(@class,'carousel'))][parent::node()[not(self::h2)][not(@id='side')][not(contains(@class,'thumbnail'))][not(following-sibling::*[not(@id='side')][article or *[starts-with(@id,'post-')]])]/*[self::article or starts-with(@id,'post-')][following-sibling::node()[self::article or starts-with(@id,'post-')][not(contains(@id,'nav'))] or not(following-sibling::*)][parent::*[not(contains(@class,'userContent'))]]]|id('content')[count(div)>1]/div[contains(@class,'post')][not(contains(div/@class,'breadcrumb'))][not(contains(div/@class,'nav'))]",
	  nextLink: "(//*[not(contains(@class,'_inactive'))]/a[starts-with(@class,'nextpostslink') or contains(@class,'next page-numbers') or (.|..)[normalize-space(@rel)='next' or normalize-space(@class)='next' or contains(@class,'pagination-next')]][not(span/@class='link-text')]|//*[contains(@class,'nav-previous')][not(contains(@class,'pull'))]/a|(//*[contains(@class,'current')][number()>0]/following-sibling::a[1]|(//li|//span|//div)[(.//*|.)[contains(@class,'current')]][number()>0]/following-sibling::*[self::li or self::span or self::div][1]/a))[not(starts-with(@href, '#'))]",
	  autopager: {
	    stylish: '@-moz-document domain("wotopi.jp") { .figure-list{display:flex; flex-wrap:wrap;} }'
	  }
	}];

	//@ts-check
	///<reference path="../index.d.ts"/>

	/**@type {Array<IRule>} */
	const jsSiteRule = [{
	  // 站点名字...(可选)             // 站点正则...(~~必须~~)
	  name: 'Google搜索',
	  url: '^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp|search|#|$|\\?)',
	  // url:'wildc;http://www.google.com.hk/search*',
	  exampleUrl: 'http://www.google.com',
	  // 站点实例...(可选)
	  enable: true,
	  // 启用.(总开关)(可选)
	  useiframe: false,
	  // 是否用iframe预读...(可选)
	  // sandbox: "allow-forms allow-modals allow-same-origin allow-scripts";    //设置sandbox选项
	  viewcontent: false,
	  nextLink: 'id("pnnext") | id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a | id("nn")/parent::a',
	  // BaisicOptions: check(function getElement)
	  // 1. auto
	  //    nextLink:'auto;',
	  // 2. xpath selector
	  //    nextLink:'//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',              //下一页链接 xpath 或者 CSS选择器 或者 函数返回值(此函数必须使用第一个传入的参数作为document对象) (~~必选~~)
	  // 3. css selector (prefix must be `css;`)
	  //    nextLink:'css;table#nav>tbody>tr>td.b:last-child>a',
	  // 4. function (function(document, window, currentURL))
	  //    nextLink:function(D,W){return D.evaluate('//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',D,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;},
	  //
	  // Complex Options:
	  // 5. array:
	  //    Check the above types one-by-one
	  // 6. object:
	  //    check function hrefInc
	  //
	  // 新增 Array 的格式，依次查找

	  // preLink:'auto;',
	  preLink: '//a[@id="pnprev"]',
	  // preLink:'//table[@id="nav"]/descendant::a[1][parent::td[@class="b"]]',            //上一页链接 xpath 或者 CSS选择器 或者 函数返回值 (可选)
	  autopager: {
	    enable: true,
	    // 启用(自动翻页)(可选)
	    useiframe: false,
	    // 是否使用iframe翻页(可选)
	    iloaded: false,
	    // 是否在iframe完全load之后操作..否则在DOM完成后操作.
	    itimeout: 0,
	    // 延时多少ms后,在操作..
	    // reload: true,      // Force reload iframe when the src is changed
	    newIframe: false,
	    // 下一页使用新的 iframe，能解决按钮无法点击的问题
	    pageElement: '//div[@id="res"]|//div[@id="extrares"]',
	    // 主体内容 xpath 或 CSS选择器 或函数返回值(~~必须~~)
	    // pageElement:'css;div#ires',
	    // pageElement:function(doc,win){return doc.getElementById('ires')},
	    // filter:'//li[@class="g"]',                                                                        //(此项功能未完成)xpath 或 CSS选择器从匹配到的节点里面过滤掉符合的节点.
	    remain: 1 / 3,
	    // 剩余页面的高度..是显示高度的 remain 倍开始翻页(可选)
	    relatedObj: ['css;div#navcnt', 'bottom'],
	    // 以这个元素当做最底的元素,计算页面总高度的计算.(可选)
	    replaceE: '//div[@id="navcnt"]',
	    // 需要替换的部分 xpath或 CSS选择器 一般是页面的本来的翻页导航(可选);
	    // replaceE:'css;div#navcnt',
	    ipages: [false, 2],
	    // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.(可选)
	    separator: true,
	    // 是否显示翻页导航(可选)
	    // sepdivDom: function(doc, sepdiv) {
	    //   // 一个用于创建翻页条node的函数
	    //   // 例子参见小木虫-帖子
	    //   const td = doc.createElement("td");
	    //   td.appendChild(sepdiv);
	    //   const tr = doc.createElement("tr");
	    //   td.setAttribute("colspan", 2);
	    //   tr.appendChild(td);
	    //   const tbody = doc.createElement("tbody");
	    //   return tbody;
	    // },
	    separatorReal: true,
	    maxpage: 66,
	    // 最多翻页数量(可选)
	    manualA: false,
	    // 是否使用手动翻页.
	    // HT_insert: ['//div[@id="res"]', 0], // 插入方式此项为一个数组: [节点xpath或CSS选择器,插入方式(0: 插入到给定节点之后 1：插入到给定节点之前;2：附加到给定节点的里面;)](可选);
	    // HT_insert:['css;div#res',2],
	    lazyImgSrc: 'imgsrc',
	    documentFilter: function documentFilter(doc, _nextLink) {
	      // 作用于xhr或iframe加载的下一页
	      // 可以是一个函数 接收doc, nextLink 两个参数，也可以是字符串'startFilter'
	      const x = doc.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', doc, null, 9, null).singleNodeValue;
	      if (x) {
	        try {
	          // @ts-ignore
	          new Function('document', 'window', 'google', x.nodeValue)(doc, unsafeWindow, unsafeWindow.google);
	        } catch (err) {
	          console.log('Error in setImagesSrc: ', err);
	        }
	      }
	      // Fix images
	      // add horizontal flexibly first
	      const imgPs = getAllElementsByXpath('//g-scrolling-carousel/div/div/div', doc, doc);
	      if (imgPs.length > 0) {
	        for (const d of imgPs) {
	          d.style.cssText += 'display: flex;flex-wrap: nowrap;width: 600px;white-space: nowrap;overflow-x: auto;';
	        }
	      }

	      // Fix image of Youtube Video
	      const hiddenImgs = getAllElementsByXpath('//g-scrolling-carousel/div/div/div/div[not(@data-vis)]//g-img/img', doc, doc);
	      if (hiddenImgs.length > 0) {
	        for (const d of hiddenImgs) {
	          d.setAttribute('src', d.getAttribute('data-src'));
	          d.style.opacity = '1';
	        }
	      }

	      // Fix g-img
	      const w = getAllElementsByXpath("//script[contains(text(), '_setImagesSrc') and contains(text(), 'data:image')]", doc, doc);
	      w.forEach(x => {
	        const script = x.innerHTML.replace(/^\(function\(\){(.*)}\)\(\);?$/, '$1').replace(/_setImagesSrc.*/, '');
	        const lzLoad = new Function(script + 'return {ii, s}')();
	        lzLoad.ii.forEach(i => {
	          doc.getElementById(i).setAttribute('src', lzLoad.s);
	        });
	      });
	      const brs = doc.getElementById('brs');
	      if (brs) {
	        brs.remove();
	      }
	    },
	    // filter: function() {
	    // 在添加内容到页面后运行
	    //},
	    startFilter: function startFilter(doc, _win) {
	      // 只作用一次, 用于打开的页面
	      // 函数： 接收doc, win 两个参数
	      // 移除 Google 重定向
	      const script = doc.createElement('script');
	      script.type = 'text/javascript';
	      script.textContent = '\
                  Object.defineProperty(window, "rwt", {\
                      configurable: false,\
                      enumerable: true,\
                      get: function () {\
                          return function() {};\
                      },\
                  });\
                  ';
	      doc.documentElement.appendChild(script);
	      doc.documentElement.removeChild(script);

	      // change id of related search
	      const brs = doc.getElementById('brs');
	      if (brs) {
	        brs.id = 'ibrs';
	      }
	      console.log('%cGoogle    is %s', 'font-weight:bold;color:red', emoji('1F4A9'));
	      const keyword = getElementByXpath("//input[@title='Search']", doc, doc);
	      if (keyword) {
	        //@ts-ignore
	        console.log('%cMicrosoft is %s %csearch with Bing %s', 'font-weight:bold;color:00bbee', emoji('1F451'), 'font-weight:bold;color:00bbee', encodeURI('https://www.bing.com/search?q=' + keyword.value));
	      } else {
	        console.log('%cMicrosoft is %s', 'font-weight:bold;color:00bbee', emoji('1F451'));
	      }
	    }
	  }
	}, {
	  name: '4khd',
	  url: '^https?://(www\\.)?4khd\\.(com|[^/]*workers\\.dev)(/(pages|search|\\?query).*)?',
	  pageElement: "//li[contains(@class,'post')]",
	  exampleUrl: 'https://www.4khd.com/search/forger',
	  nextLink: "//span[contains(@class, 'current')]/following-sibling::a",
	  autopager: {
	    useiframe: true,
	    ipages: [true, 10],
	    separator: false,
	    startFilter: function startFilter(doc, _win) {
	      // 设置百度搜索类型为 s?wd=
	      try {
	        const elem = doc.querySelector('.fr-mobile-hide');
	        if (elem) {
	          const className = elem.className;
	          elem.setAttribute('class', className.replace('fr-mobile-hide', '').replace('fr-tablet-hide', ''));
	        }
	      } catch (error) {
	        console.error(error);
	      }
	    }
	  }
	}, {
	  name: '4khd_post',
	  url: '^https?://(www\\.)?4khd\\.(com|[^/]*workers\\.dev)/.*\\.html$',
	  pageElement: "//div[contains(@class,'entry-content')]",
	  nextLink: "//li[@class='numpages current']/following-sibling::li/a",
	  useiframe: true,
	  autopager: {
	    ipages: [true, 10],
	    separator: true
	  }
	}, {
	  name: '性感尤物',
	  url: '^https?://(www\\.)?jpxgmn\\.(com|[^/]*workers\\.dev)/[^/]*/[^/]*\\.html',
	  pageElement: "//article[@class='article-content']/p",
	  exampleUrl: 'http://www.xgyw.cc/Xgyw/Xgyw6874.html',
	  nextLink: "//div[@class='pagination']/ul/a[text()='下一页']",
	  autopager: {
	    ipages: [true, 30],
	    startFilter: function startFilter(doc, _win) {
	      const p = [doc.querySelector('div.pagination > p'), doc.querySelector('header > a[href^="http"]'), doc.querySelector('ins')];
	      p.forEach(x => {
	        if (x) {
	          x.remove();
	        }
	      });
	      const ad = doc.querySelector('div[class^="div_"]');
	      if (ad) {
	        ad.closest('div').remove();
	      }
	    }
	  }
	}, {
	  name: '性感尤物search',
	  url: '^https?://(www\\.)?jpxgmn\\.(com|[^/]*workers\\.dev)/plus/search.*',
	  pageElement: "//div[@class='node']",
	  exampleUrl: 'https://www.xgmn5.xyz/plus/search/index.asp?keyword=%E5%B0%A4%E5%A6%AE%E4%B8%9D',
	  nextLink: "//div[@class='pagination']/ul/a[@class='current']/following-sibling::a",
	  autopager: {
	    ipages: [true, 5],
	    startFilter: async function startFilter(doc, _win) {
	      if (!doc.getElementById('thumbCss')) {
	        addStyle('img.thumb{width:100%;height:auto;display:block}@media only screen and (min-width:1025px){img.thumb{width:50%}}', 'thumbCss', doc);
	      }
	      const items = doc.querySelectorAll('div.node > a');
	      if (items.length > 0) {
	        await Promise.all([].map.call(items, async a => {
	          const link = a.getAttribute('href');
	          const res = await got$1.get(link);
	          const docPage = new DOMParser().parseFromString(res.data, 'text/html');
	          const img = docPage.querySelector('article.article-content > p > img');
	          if (img) {
	            const newImg = createDOM('img', {
	              attr: {
	                src: img.getAttribute('src'),
	                class: 'thumb'
	                // style: 'display:block; width:50%; height:auto;'
	              }
	            });
	            a.parentNode.insertBefore(newImg, a.nextSibling);
	          }
	        }));
	      }
	    },
	    documentFilter: 'startFilter'
	  }
	}, {
	  name: '性感尤物2',
	  url: '^https?://(www\\.)?jpxgmn\\.com/new\\.html',
	  pageElement: "//li[@class='related_box']",
	  exampleUrl: 'http://www.xgyw.cc/Xgyw',
	  nextLink: 'null;',
	  autopager: {
	    ipages: [true, 10],
	    startFilter: function startFilter(doc, _win) {
	      const a = doc.querySelectorAll('li > a[href^="/html"]');
	      a.forEach(x => {
	        const li = x.closest('li');
	        li.remove();
	      });
	    }
	  }
	}, {
	  name: '百度搜索',
	  url: '^https?://www\\.baidu\\.com/',
	  // 由于 Super_preloader 默认去掉了 # 后面部分
	  // url: "^https?://www\\.baidu\\.com/(s|baidu|#wd=)",
	  enable: true,
	  nextLink: '//div[@id="page"]//a[contains(text(),"下一页")][@href]',
	  preLink: '//div[@id="page"]//a[contains(text(),"上一页")][@href]',
	  autopager: {
	    pageElement: 'css;div#content_left > *',
	    HT_insert: ['css;div#content_left', 2],
	    replaceE: 'css;#page',
	    stylish: '.autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}',
	    startFilter: function startFilter(_doc, win) {
	      // 设置百度搜索类型为 s?wd=
	      try {
	        win.document.cookie = 'ISSW=1';
	      } catch (error) {
	        console.error(error);
	      }
	    },
	    filter: function filter(_pageElements) {
	      ['c-img-border', 'c-img-radius-large'].forEach(style => {
	        const elements = document.querySelectorAll('.' + style);
	        [].forEach.call(elements, div => {
	          console.log(div);
	          let css = div.getAttribute('class');
	          css = css.replace(RegExp('\\b' + style + '\\b', 'g'), '');
	          div.setAttribute('class', css);
	        });
	      });
	    }
	  }
	}, {
	  name: 'kongregate',
	  url: '^https?://www\\.kongregate\\.com',
	  nextLink: "(//li[@class='next_link']/a)[1]",
	  autopager: {
	    scriptFilter: 'renderPosts',
	    pageElement: "//table[@class='posts']/tbody",
	    filter: function filter(pageElements) {
	      const scripts = getAllElementsByXpath(".//script[contains(text(), 'renderPosts')]", pageElements[0], document);
	      if (scripts.length > 0) {
	        for (const s of scripts) {
	          try {
	            new Function(s.innerText)();
	          } catch (error) {
	            console.error(error);
	          }
	        }
	      }
	    }
	  }
	}, {
	  name: 'kongregate_list',
	  url: '^https?://www\\.kongregate\\.com',
	  nextLink: "(//li[@class='next_link']/a)[1]",
	  pageElement: "//div[@id='featurewide']/table/tbody"
	}, {
	  name: '小木虫-帖子',
	  url: '^https?://(www\\.)?muchong\\.com/t-.*$',
	  nextLink: 'auto;',
	  pageElement: "//div[@id='maincontent']/table/tbody[@id]",
	  autopager: {
	    relatedObj: true,
	    sepdivDom: function sepdivDom(doc, sepdiv) {
	      const td = doc.createElement('td');
	      td.appendChild(sepdiv);
	      const tr = doc.createElement('tr');
	      td.setAttribute('colspan', '2');
	      tr.appendChild(td);
	      const tbody = doc.createElement('tbody');
	      tbody.appendChild(td);
	      return tbody;
	    }
	  }
	}, {
	  name: 'gelbooru.com',
	  url: 'https?://gelbooru\\.com',
	  nextLink: "css;.pagination > a[alt='next']",
	  autopager: {
	    pageElement: "//div[contains(@class,'thumbnail-preview')]",
	    filter: function filter(pageElements) {
	      // 头像载入出错的修正
	      [].forEach.call(pageElements, function (div) {
	        div.querySelector('a').removeAttribute('target');
	      });
	    }
	  }
	}, {
	  name: 'smzdm-comment',
	  url: /^https?:\/\/\w+\.smzdm\.com(\/\w+)?\/p\/[\d\w\W]+/i,
	  exampleUrl: 'https://post.smzdm.com/p/559992/',
	  // 还有另外一种评论
	  // exampleUrl: 'https://www.smzdm.com/p/11496450/ | https://test.smzdm.com/pingce/p/70095121/',
	  nextLink: '//ul[@class="pagination"]/li[@class="pagedown"]/a',
	  autopager: {
	    pageElement: 'id("commentTabBlockNew")/ul[@class="comment_listBox"]',
	    excludeElement: '//div[@class="article-card J_trigger_ani"]',
	    replaceE: '(//ul[@class="pagination"])[1]',
	    startFilter: function startFilter(doc) {
	      const firstDiv = doc.querySelector('.pagination');
	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    }
	  }
	}, {
	  name: '和讯博客',
	  url: /^https?:\/\/\w+\.blog\.hexun\.com\//i,
	  exampleUrl: 'http://23802543.blog.hexun.com/',
	  nextLink: function nextLink(doc) {
	    var url = doc.querySelector('.PageSkip_1 a[title="下一页"]').getAttribute('href');
	    url = url.replace(/(\/p\d+\/).*/, '$1default.html');
	    return url;
	  },
	  autopager: {
	    pageElement: 'id("DefaultContainer1_ArticleList_Panel1")'
	  }
	}, {
	  name: 'm-team artist detail',
	  url: '^https?://kp\\.m-team\\.cc/artist\\.php?',
	  nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
	  autopager: {
	    pageElement: '//form[@id="form2"]/table',
	    relatedObj: true,
	    documentFilter: 'startFilter',
	    startFilter: function startFilter(doc) {
	      const trs = getAllElementsByXpath("//div[@class='artist']/div[@class='atl']/form/table/tbody/tr/td[@colspan='5']/parent::tr", doc, doc);
	      if (trs.length > 0) {
	        for (var i = 0; i < trs.length; i++) {
	          var imgs = trs[i].getElementsByTagName('img');
	          if (imgs) {
	            const img = imgs[0];
	            const imgSrc = img.getAttribute('src');
	            const newtr = createDOM('tr', {
	              attr: {
	                align: 'center'
	              },
	              children: [createDOM('td', {
	                attr: {
	                  colspan: 5,
	                  style: 'border-bottom:1px dashed black;'
	                },
	                children: [createDOM('img', {
	                  attr: {
	                    src: imgSrc,
	                    style: 'display:block; width:100%; height:auto;'
	                  }
	                })]
	              })]
	            });
	            trs[i].parentNode.insertBefore(newtr, trs[i]);
	          }
	        }
	      }
	    }
	  }
	}, {
	  name: 'm-team adults',
	  url: '^https?://kp\\.m-team\\.cc/adult\\.php',
	  nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
	  autopager: {
	    pageElement: '//table[@class="torrents"]',
	    startFilter: function startFilter(doc) {
	      const tds = doc.getElementsByClassName('torrentimg');
	      [].forEach.call(tds, function (td) {
	        const imgSrc = td.getElementsByTagName('img');
	        if (imgSrc) {
	          const newImg = createDOM('img', {
	            attr: {
	              src: imgSrc[0].getAttribute('src'),
	              style: 'display:block; width:100%; height:auto;'
	            }
	          });
	          const newtd = createDOM('td', {
	            attr: {
	              colspan: 2,
	              style: 'border-bottom:1px solid black;'
	            }
	          });
	          const newtr = createDOM('tr', {
	            attr: {
	              align: 'center'
	            }
	          });
	          newtd.appendChild(newImg);
	          newtr.appendChild(newtd);
	          td.parentNode.parentNode.insertBefore(newtr, td.parentNode);
	        }
	      });
	    },
	    documentFilter: 'startFilter'
	  }
	}, {
	  name: 'idope.se',
	  url: /^https?:\/\/idope\.se\/torrent-list\/.+/i,
	  exampleUrl: 'https://idope.se/torrent-list/transformer/?p=3',
	  preLink: {
	    startAfter: '?p=',
	    inc: -1,
	    min: 1
	  },
	  nextLink: {
	    startAfter: '?p=',
	    mFails: [/^https?:\/\/idope\.se\/torrent-list\/.+/i, '/?p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      const pageSel = doc.getElementById('next');
	      if (!pageSel) {
	        return true;
	      }
	    }
	  },
	  autopager: {
	    pageElement: '//*[@id="div2child"]',
	    useiframe: true
	  }
	}, {
	  name: '天涯论坛帖子',
	  url: /^https?:\/\/bbs\.tianya\.cn\/.+\.shtml/i,
	  exampleUrl: 'http://bbs.tianya.cn/post-feeling-2792523-1.shtml',
	  nextLink: '//div[@class="atl-pages"]/descendant::a[text()="下页"][@href]',
	  autopager: {
	    useiframe: true,
	    pageElement: '//div[@class="atl-main"]',
	    lazyImgSrc: 'original',
	    filter: function filter(_pages) {
	      //@ts-ignore
	      const see_only_uname = unsafeWindow.see_only_uname;
	      //@ts-ignore
	      const setOnlyUser = unsafeWindow.setOnlyUser;
	      if (see_only_uname) {
	        setOnlyUser(see_only_uname);
	      }
	    }
	  }
	}, {
	  name: 'Firefox中文社区 - 列表',
	  url: '^https?://www\\.firefox\\.net\\.cn/thread',
	  nextLink: '//div[@class="pages"]/a[contains(text(), "下一页")]',
	  autopager: {
	    pageElement: 'id("J_posts_list")',
	    replaceE: 'css;.pages',
	    documentFilter: function documentFilter(doc) {
	      // 头像载入出错的修正
	      [].forEach.call(doc.querySelectorAll('img.J_avatar'), function (img) {
	        img.setAttribute('onerror', 'this.src="http://www.firefox.net.cn/res/images/face/face_small.jpg";');
	      });
	    }
	  }
	}, {
	  name: '小米手机官方论坛',
	  url: '^https?://bbs\\.xiaomi\\.cn/',
	  nextLink: "//a[@class='nxt' and (text()='下一页')]",
	  autopager: {
	    pageElement: "id('postlist') | id('threadlist')",
	    replaceE: '//div[@class="pg"][child::a[@class="nxt"]]',
	    documentFilter: function documentFilter(doc) {
	      const firstDiv = doc.querySelector("div[id^='post_']");
	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    }
	  }
	}, {
	  name: '游民星空',
	  url: /^https?:\/\/www\.gamersky\.com\/\w+\/\d{6}\/.*.shtml/i,
	  exampleUrl: 'https://www.gamersky.com/ent/201510/671493.shtml | https://www.gamersky.com/handbook/201707/922480.shtml',
	  nextLink: function nextLink(doc, _win, cplink) {
	    const node = getElementByXpath('//div[@class="page_css"]//a[(text()="下一页")]', doc, doc);
	    if (!node) {
	      return null;
	    }
	    // 请求协议保持一致
	    const a = /^(https)?:\/\/.*$/.exec(cplink);
	    if (a) {
	      var b = /^https?:\/\/(.*)$/.exec(node.getAttribute('href'));
	      return a[1] + '://' + b[1];
	    }
	    return node.getAttribute('href');
	  },
	  autopager: {
	    relatedObj: true,
	    pageElement: '//div[@class="Mid2L_con"]',
	    replaceE: '//div[@class="page_css"]'
	  }
	  // credit : https://greasyfork.org/en/forum/discussion/42040/x
	}, {
	  name: 'ali213 - 攻略',
	  url: /^http:\/\/gl\.ali213\.net\/html/,
	  exampleUrl: 'http://gl.ali213.net/html/2011/25399_2.html',
	  nextLink: "id('after_this_page')",
	  autopager: {
	    useiframe: true,
	    pageElement: "//div[@class='glzjshow_con']",
	    replaceE: "id('after_this_page')",
	    startFilter: function startFilter(doc) {
	      const comments = getElementByXpath('//div[@class="glzjshow_plun"]', doc, doc);
	      if (comments) {
	        comments.style.display = 'none';
	      }
	    }
	  }
	}, {
	  name: '多玩 - 攻略',
	  url: /^https?:\/\/tv\.duowan\.com\/\d+\/\d+\.html/,
	  exampleUrl: 'http://tv.duowan.com/1801/380717306538.html',
	  nextLink: "id('pageNum')//a[text()='下一页']",
	  autopager: {
	    useiframe: true,
	    replaceE: "id('pageNum')",
	    pageElement: "//div[@class='box-bd'][last()]",
	    startFilter: function startFilter(doc) {
	      const pager = doc.querySelector('#pageNum');
	      if (pager) {
	        getElementByXpath("//div[@class='box-bd'][last()]", doc, doc).after(pager);
	      }
	      //删除侧边栏
	      const ad = doc.querySelector('.aside-wrap');
	      if (ad) {
	        //@ts-ignore
	        ad.style.display = 'none';
	      }
	    },
	    documentFilter: function documentFilter(doc) {
	      const pager = doc.querySelector('#pageNum');
	      if (pager) {
	        //@ts-ignore
	        pager.style.display = 'none';
	      }
	    }
	  }
	}, {
	  name: 'yuyouge.com',
	  url: '^https?://www\\.yuyouge\\.com',
	  nextLink: 'auto;',
	  pageElement: "//article/div[@id='h1']|//article/div[@id='txtContent']",
	  documentFilter: function documentFilter(doc) {
	    const style = document.querySelector('#txtContent').getAttribute('style');
	    const cls = document.querySelector('#txtContent').getAttribute('class');
	    [].forEach.call(doc.querySelectorAll('#txtContent'), function (div) {
	      div.setAttribute('style', style);
	      div.setAttribute('class', cls);
	    });
	  }
	},
	// {
	//   name: "bilibili",
	//   url: "^https?://(search\\.bilibili\\.com|space\\.bilibili\\.com/)",
	//   nextLink: {
	//     startAfter: "&page=",
	//     mFails: ["re;^https?://.*", "&page=1"],
	//     inc: 1
	//   },
	//   autopager: {
	//     enable: false,
	//     remain: 0.001,
	//     useiframe: true,
	//     pageElement: "//li[contains(@class,'video-item')]/parent::*",
	//     mutationObserver: {
	//       relatedObj: "css;.page-wrap",
	//       observers: {
	//         attributes: "css;li.video-item  .lazy-img img" // the node to monitor change of attributes
	//       }
	//     }
	//   }
	// },
	{
	  name: '电玩巴士 - 图文',
	  url: '^https?://pc\\.tgbus\\.com/.*\\d+/$',
	  exampleUrl: 'http://pc.tgbus.com/tuwen_180/88983/',
	  nextLink: "//div[contains(@class, 'art-page')]/a[text()='下一页']",
	  autopager: {
	    pageElement: "//div[@class='art-body']",
	    documentFilter: function documentFilter(doc) {
	      // 删除导航
	      const navigator = doc.querySelector('.art-pagination');
	      if (navigator) {
	        navigator.parentNode.removeChild(navigator);
	      }
	      // 隐藏分页
	      //@ts-ignore
	      doc.querySelector('.art-page').style.display = 'none';
	    }
	  }
	}, {
	  name: 'koolshare扩展页面',
	  url: '^https?://koolshare\\.cn/home\\.php',
	  exampleUrl: 'http://koolshare.cn/home.php',
	  nextLink: "//a[contains(text(),'下一页')]",
	  pageElement: "id('ct')//tbody",
	  autopager: {
	    // 只执行一次，删除多余的表头
	    documentFilter: function documentFilter(doc) {
	      const firstDiv = doc.querySelector('.th');
	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    }
	  }
	}, {
	  name: 'Jable',
	  url: /^https?:\/\/jable\.tv/i,
	  nextLink: function nextLink(doc, _win, cplink) {
	    const a = getElementByXpath("//ul[@class='pagination']/li[span[contains(@class,'active')]]/following-sibling::li[1]/a", doc, doc);
	    const blockID = a.getAttribute('data-block-id');
	    const parms = a.getAttribute('data-parameters').replace(/:/g, '=').replace(/;/g, '&');
	    // const containerID = a.getAttribute("data-container-id");
	    const nextLink = cplink + '?mode=async&function=get_block&block_id=' + blockID + '&' + parms + '&_=' + Date.now();
	    return nextLink;
	  },
	  autopager: {
	    enable: false,
	    useiframe: true,
	    pageElement: "//ul[@class='pagination']/preceding-sibling::div/div"
	  },
	  exampleUrl: 'http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html'
	}, {
	  name: 'Netflav',
	  url: '^https?://netflav\\.com',
	  nextLink: {
	    startAfter: '?page=',
	    mFails: [/^https?:\/\/(?:netflav\.com)\/.+/i, '?page=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      const CurrentPage = Number(getElementByXpath("//div[@id='general-pagination']/div/a[@aria-current='true']", doc, doc).innerText);
	      const TotalPage = Number(getElementByXpath("(//div[@id='general-pagination']/div/a[@type='nextItem']/preceding-sibling::a)[last()]", doc, doc).innerText);
	      if (CurrentPage == TotalPage) {
	        return true;
	      }
	    }
	  },
	  autopager: {
	    useiframe: true,
	    iloaded: true,
	    pageElement: "(//div[@id='general-pagination']/preceding-sibling::div)[last()]/div",
	    HT_insert: ["(//div[@id='general-pagination']/preceding-sibling::div)[last()]", 2]
	  },
	  exampleUrl: 'https://netflav.com/chinese-sub?page=1'
	}, {
	  name: '悠悠美图',
	  url: /^https?:\/\/www\.youyourentiyishu\.com/i,
	  nextLink: function nextLink(doc, _win, cplink) {
	    const m = cplink.match(/\d+-(\d+)\.html/);
	    if (!m) {
	      return cplink.replace('.html', '-2.html');
	    } else {
	      const current = Number(m[1]);
	      const next = current + 1;
	      const url = cplink.replace(m[1] + '.html', next + '.html');
	      const url2 = doc.querySelector('a.next').getAttribute('href');
	      if (url != url2) {
	        return undefined;
	      } else {
	        return url;
	      }
	    }
	  },
	  autopager: {
	    enable: true,
	    pageElement: '//div[@class="showimg"]/a',
	    ipages: [true, 30]
	  },
	  exampleUrl: 'http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html'
	}, {
	  name: 'laomaoit - 老殁软件分享',
	  url: '^https?://www\\.(laomoit|mpyit)\\.com',
	  exampleUrl: 'https://www.laomoit.com',
	  nextLink: '//div[@id="pagenavi"]//a[text()="下一页"]',
	  autopager: {
	    pageElement: 'id("post") | id("content")',
	    replaceE: 'css;#pagenavi',
	    // 删除页面上不需要的元素
	    documentFilter: function documentFilter(doc) {
	      const nodeBrowse = doc.querySelector('.browse');
	      if (nodeBrowse) {
	        nodeBrowse.parentNode.removeChild(nodeBrowse);
	      }
	      const nodeMap = doc.querySelector('#map');
	      if (nodeMap) {
	        nodeMap.parentNode.removeChild(nodeMap);
	      }
	    }
	  }
	}, {
	  name: 'geekbench',
	  url: /^https?:\/\/browser\.geekbench\.com/i,
	  nextLink: "//li[contains(@class,'page-item next next_page')]/a",
	  autopager: {
	    pageElement: "//div[@class='row']/div[@class='col-12 list-col']",
	    sepdivDom: function sepdivDom(_doc, sepdiv) {
	      sepdiv.className += ' col-12 list-col';
	      return sepdiv;
	    }
	  }
	}, {
	  name: 'CSDN博客',
	  url: /^https?:\/\/blog\.csdn\.net/i,
	  exampleUrl: 'http://blog.csdn.net/wangjieest?viewmode=list',
	  nextLink: function nextLink(doc, _win, _cplink) {
	    for (var i = 0; i < doc.scripts.length; i++) {
	      const scriptText = doc.scripts[i].text;
	      if (typeof scriptText != 'undefined' && scriptText.indexOf('currentPage') > 0) {
	        const pageMatches = scriptText.match(/currentPage[ ]?=[ ]?(\d+)/);
	        if (pageMatches.length != 2) {
	          continue;
	        }
	        const baseUrlMatches = scriptText.match(/baseUrl[ ]?=[ ]?'([^']+)'/);
	        if (baseUrlMatches.length != 2) {
	          continue;
	        }
	        return baseUrlMatches[1] + '/' + (parseInt(pageMatches[1]) + 1);
	      }
	    }
	    return null;
	  },
	  autopager: {
	    pageElement: '//div[@id="article_list"] | // div[@class="article-list"]',
	    documentFilter: function documentFilter(doc) {
	      // 文档底部的 marginBottom 重置
	      const articleList = doc.querySelector('.article-list');
	      if (articleList) {
	        //@ts-ignore
	        articleList.style.marginBottom = '0';
	      }
	    },
	    startFilter: function startFilter(doc, _win) {
	      // 文档底部的 marginBottom 重置
	      const articleList = doc.querySelector('.article-list');
	      if (articleList) {
	        //@ts-ignore
	        articleList.style.marginBottom = '0';
	      }
	      // 移动分页位置
	      const pageBox = document.querySelector('#pageBox');
	      if (pageBox) {
	        pageBox.parentNode.parentNode.appendChild(pageBox);
	      }
	      // 删除广告
	      const adBox = document.querySelector('.box-box-large');
	      if (adBox) {
	        adBox.parentNode.removeChild(adBox);
	      }
	    }
	  }
	}, {
	  name: 'CSDN话题',
	  url: /^https?:\/\/bbs\.csdn\.net\/topics\//i,
	  exampleUrl: 'http://bbs.csdn.net/topics/390244325',
	  nextLink: '(//div[@class="page_nav"])[1]/a[text()="下一页"]',
	  autopager: {
	    pageElement: 'id("bbs_detail_wrap")',
	    documentFilter: function documentFilter(doc) {
	      // 删除文档中的多余表头
	      const titleH = doc.querySelector('.bbs_title_h');
	      if (titleH) {
	        titleH.parentNode.removeChild(titleH);
	      }
	      const titleBar = doc.querySelector('.bbs_title_bar');
	      if (titleBar) {
	        titleBar.parentNode.removeChild(titleBar);
	      }
	      const breadWrap = doc.querySelector('.bbs_bread_wrap');
	      if (breadWrap) {
	        breadWrap.parentNode.removeChild(breadWrap);
	      }
	      // 尾页的分页信息隐藏
	      const pageNav = doc.querySelectorAll('.mod_fun_wrap');
	      if (pageNav) {
	        let index = 0;
	        if (pageNav.length == 2) {
	          index = 1;
	        }
	        //@ts-ignore
	        pageNav[index].style.display = 'none';
	      }
	    },
	    startFilter: function startFilter(doc) {
	      // 尾页的分页信息隐藏
	      const pageNav = doc.querySelectorAll('.mod_fun_wrap');
	      if (pageNav) {
	        let index = 0;
	        if (pageNav.length == 2) {
	          index = 1;
	        }
	        //@ts-ignore
	        pageNav[index].style.display = 'none';
	      }
	      // 扩展的其他话题信息移除，长度太长，导致翻页信息有点问题
	      const feedBox = doc.querySelector('.post_feed_box');
	      if (feedBox) {
	        feedBox.parentNode.removeChild(feedBox);
	      }
	    },
	    sepdivDom: function sepdivDom(_doc, sepdiv) {
	      sepdiv.className += ' bbs_detail_wrap';
	      return sepdiv;
	    }
	  }
	}, {
	  name: 'bl-novel',
	  url: '^https?://bl-novel\\.in/novel',
	  nextLink: "//a[@id='pb_next']",
	  pageElement: "//div[@id='nr']",
	  documentFilter: function documentFilter(doc, _nextLink) {
	    var scripts = doc.getElementsByTagName('script');
	    var re = /chapter\s*=\s*secret\(['"](.*)['"],\s*['"](.*)['"],\s*(\w+)\s*\)/g;
	    var c;
	    [].forEach.call(scripts, function (x) {
	      if (x.innerText.indexOf('var chapter') >= 0) {
	        var temp = re.exec(x.innerText);
	        var content = temp[1];
	        var salt = temp[2];
	        // function secret is provided by the website
	        if (temp[3].indexOf('true') >= 0) {
	          //@ts-ignore
	          // eslint-disable-next-line no-undef
	          c = secret(content, salt, true);
	        } else {
	          //@ts-ignore
	          // eslint-disable-next-line no-undef
	          c = secret(content, salt, false);
	        }
	        doc.getElementById('nr1').innerHTML = c;
	      }
	    });
	  }
	}, {
	  name: '第一版主',
	  url: '^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)',
	  nextLink: 'auto;',
	  pageElement: "//div[@id='content']"
	}, {
	  name: '第一版主',
	  url: '^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)',
	  pageElement: "//div[@id='content']",
	  nextLink: function nextLink(doc, _win, cplink) {
	    var chapters = getAllElementsByXpath("//div[@class='chapterPages']/a", doc);
	    var prefix = cplink.substr(0, cplink.lastIndexOf('/')) + '/';
	    var i = 0;
	    for (i = 0; i < chapters.length; i++) {
	      if (chapters[i].className === 'curr') {
	        if (i + 1 < chapters.length) {
	          return prefix + chapters[i + 1].getAttribute('href');
	        } else {
	          return getDomain(cplink) + getElementByXpath("//span[@class='next']/a").getAttribute('href');
	        }
	      }
	    }
	  }
	}, {
	  name: '起点文学-排行榜',
	  url: /^https?:\/\/www\.(qidian)\.com(\/mm)?\/rank\/.*/i,
	  exampleUrl: 'https://www.qidian.com/rank/collect',
	  nextLink: function nextLink(doc, _win, cplink) {
	    var res = getElementByXpath('//div[@id="page-container"]', doc);
	    if (res === null) {
	      return undefined;
	    }
	    const next = Number(res.dataset.page) + 1;
	    //@ts-ignore
	    if (next > res.dataset.pagemax) {
	      return undefined;
	    } else {
	      if (cplink.indexOf('page=') != -1) {
	        return cplink.replace(/page=\d+/, 'page=' + next);
	      } else if (cplink.indexOf('?') != -1) {
	        return cplink + '&page=' + next;
	      } else {
	        return cplink + '?page=' + next;
	      }
	    }
	  },
	  autopager: {
	    pageElement: '//div[@class="rank-body"]'
	  }
	}, {
	  name: 'rushi.net',
	  url: '^https?://www.rushi.net/Home/Works',
	  nextLink: 'css;.gopage .next-btn',
	  // 或者//div[@class='gopage']//a[contains(@class,'next-btn')]
	  autopager: {
	    pageElement: 'css;.work_list_line',
	    startFilter: _doc => {
	      const firstDiv = document.querySelector('.hot-company-job');
	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    },
	    documentFilter: 'startFilter'
	  }
	}, {
	  name: '优书-书单|评论',
	  url: /^https?:\/\/www\.yousuu\.com\/(comments|booklist)/i,
	  nextLink: function nextLink(doc, _win, cplink) {
	    var res = getElementByXpath('//ul[contains(@class, "pagination")]', doc);
	    if (res === null) {
	      return undefined;
	    }
	    var nextNode;
	    if (res.childNodes.length == 2) {
	      // 只有2个子节点，首页|下一页
	      nextNode = res.childNodes[1];
	    } else {
	      // 其他类型 << 1 2(active) 3 ... >>
	      // 找到active的后一项
	      for (var i = res.childNodes.length - 1; i >= 0; i--) {
	        if (res.children[i].className == 'active') {
	          // 如果当前页是最后第二项，就不翻页
	          if (i == res.childNodes.length - 2) {
	            return undefined;
	          }
	          nextNode = res.childNodes[i + 1];
	        }
	      }
	    }
	    //@ts-ignore
	    var findout = /jumpurl\('(\w+)','?(\d+)'?\)/.exec(nextNode.innerHTML);
	    if (findout === null || findout.length != 3) {
	      return undefined;
	    }
	    var pageInfo = findout[1] + '=' + findout[2];
	    if (cplink.indexOf(findout[1] + '=') != -1) {
	      return cplink.replace(new RegExp(findout[1] + '=\\d+'), pageInfo);
	    } else if (cplink.indexOf('?') != -1) {
	      return cplink + '&' + pageInfo;
	    } else {
	      return cplink + '?' + pageInfo;
	    }
	  },
	  autopager: {
	    pageElement: '//table[contains(@class, "shudanlist")] | //ul[contains(@class, "ys-comments")] | //div[@class="ro"]'
	  }
	}, {
	  name: '动漫之家漫画网',
	  url: /^https?:\/\/(www|manhua)\.(dmzj|178)\.com\/\w+\/\d+\.shtml/,
	  exampleUrl: 'https://manhua.dmzj.com/yuanlian/36944.shtml#@page=1',
	  nextLink: function nextLink(doc, _win, cplink) {
	    //@ts-ignore
	    const current = Number(getElementByXpath('//*[@id="page_select"]/option[@selected][1]', doc).text.match(/(\d+)/)[1]);
	    const xpath_last = '//*[@id="page_select"]/option[last()]';
	    //@ts-ignore
	    const end_num = Number(getElementByXpath(xpath_last, doc).text.match(/(\d+)/)[1]);
	    const next = current + 1;
	    if (next > end_num) {
	      return undefined;
	    } else {
	      return cplink.replace(/\.shtml(?:#@page=\d+)?/, '.shtml#@page=' + next);
	    }
	  },
	  autopager: {
	    useiframe: true,
	    reload: true,
	    // do not create new iframe but reload
	    ipages: [true, 20],
	    pageElement: '//div[@id="center_box"]/img'
	  }
	}, {
	  name: '看漫画',
	  url: /^https?:\/\/www\.manhuagui\.com\/comic\/.+/i,
	  // this is a set which uses hash to change page
	  // we need to manually add hash
	  nextLink: function nextLink(doc, _win, cplink) {
	    const current = Number(getElementByXpath('//*[@id="page"]', doc).innerHTML);
	    const xpath_last = '//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]';
	    //@ts-ignore
	    const end_num = Number(getElementByXpath(xpath_last, doc).text);
	    const next = current + 1;
	    if (next > end_num) {
	      return undefined;
	    } else {
	      return cplink.replace(/\.html(?:#p=\d+)?/, '.html#p=' + next);
	    }
	  },
	  autopager: {
	    useiframe: true,
	    newIframe: false,
	    reload: true,
	    // do not create new iframe but reload
	    pageElement: '//div[@class="clearfix"]',
	    ipages: [true, 20]
	  },
	  exampleUrl: 'https://www.manhuagui.com/comic/17332/372862.html'
	}, {
	  name: 'SF在线漫画',
	  url: '^https?://(manhua\\.sfacg\\.com/mh|www\\.acg456\\.com)/.+',
	  exampleUrl: 'https://manhua.sfacg.com/mh/YULINGSHI/20087/#p=2',
	  preLink: {
	    startAfter: '#p=',
	    inc: -1,
	    min: 1
	  },
	  nextLink: {
	    startAfter: '#p=',
	    mFails: [/^https?:\/\/(?:manhua\.sfacg\.com\/mh|www\.acg456\.com)\/.+/i, '#p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      const TotalPage = Number(doc.getElementById('TotalPage').innerText) - 1;
	      const CurrentPage = Number(doc.getElementById('CurrentPage').innerText);
	      if (CurrentPage == TotalPage) {
	        return true;
	      }
	    }
	  },
	  autopager: {
	    pageElement: '//img[@id="curPic"]',
	    useiframe: true,
	    reload: true,
	    replaceE: 'id("Pages")'
	  }
	}, {
	  name: '哦漫画',
	  url: /^https?:\/\/www\.omanhua\.com\/comic\//i,
	  exampleUrl: 'http://www.omanhua.com/comic/2957/36463/index.html?p=2',
	  nextLink: {
	    startAfter: '?p=',
	    mFails: [/^http:\/\/www\.omanhua\.com\/comic\/.+/i, '?p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      const select = doc.getElementById('pageSelect');
	      if (select) {
	        const s2os = select.options;
	        const s2osl = s2os.length;
	        if (select.selectedIndex == s2osl - 1) return true;
	      }
	    }
	  },
	  autopager: {
	    useiframe: true,
	    pageElement: '//img[@id="mangaFile"]'
	  }
	}, {
	  name: '汗汗漫画',
	  url: /^https?:\/\/\w+\.(?:vs20|3gmanhua|hhcomic|huhudm|huhumh|hhimm|hhmmoo)\.(?:com|net)\/\w+\/\d+\.html/i,
	  exampleUrl: 'http://www.hhmmoo.com/page315224/1.html?s=1； http://www.hhmmoo.com/page315224/4.html?s=1&d=0',
	  nextLink: function nextLink(_doc, _win, cplink) {
	    // created based on http://www.hhmmoo.com/script/view.js
	    const m = cplink.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/);
	    // const url_head = m[1];
	    const current = Number(m[2]);
	    var dID = m[4];
	    if (!dID) dID = '&d=0';
	    const next = current + 1;
	    // const xpath = '//div[@class="cH1"]/b[1]';
	    var maxpage = document.getElementById('hdPageCount');
	    if (maxpage) {
	      //@ts-ignore
	      maxpage = Number(maxpage.value);
	    } else {
	      maxpage = document.getElementById('spPageCount');
	      if (maxpage) {
	        //@ts-ignore
	        maxpage = Number(maxpage.innerText);
	      } else {
	        return undefined;
	      }
	    }
	    //@ts-ignore
	    if (next == maxpage + 1) {
	      return undefined;
	    } else {
	      return m[1] + next + m[3] + dID;
	    }
	  },
	  autopager: {
	    useiframe: true,
	    pageElement: '//div[@id="iBody"]',
	    ipages: [true, 20]
	  }
	}, {
	  name: '99漫画',
	  url: /^https?:\/\/(cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(com|cc)/i,
	  exampleUrl: 'http://dm.99manga.com/comic/35416/316645/?p=2&s=0',
	  nextLink: {
	    startAfter: '?p=',
	    inc: 1,
	    mFails: [/^https?:\/\/(?:cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(?:com|cc)\/.+/i, '?p=1&s=0'],
	    isLast: function isLast(doc, _win, _lhref) {
	      const maxpage = Number(doc.getElementById('spPageCount').innerText);
	      const current = Number(doc.getElementById('spPageIndex').innerText);
	      if (current == maxpage) return true;
	    }
	  },
	  autopager: {
	    useiframe: true,
	    pageElement: '//*[@id="iBody"]'
	  }
	}, {
	  name: '天使漫画网,TSDM漫画组',
	  url: /^https?:\/\/mh\.tsdm\.net\/comic\/.+/i,
	  exampleUrl: 'http://mh.tsdm.net/comic/4697/68059.html',
	  useiframe: true,
	  preLink: {
	    startAfter: '?p=',
	    inc: -1,
	    min: 1
	  },
	  nextLink: {
	    startAfter: '?p=',
	    mFails: [/^http:\/\/mh\.tsdm\.net\/comic\/.+\.html/i, '?p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      const pageSelect = doc.getElementById('qTcms_select_i');
	      if (pageSelect) {
	        const s2os = pageSelect.options;
	        const s2osl = s2os.length;
	        if (pageSelect.selectedIndex == s2osl - 1) return true;
	      }
	    }
	  },
	  autopager: {
	    useiframe: true,
	    remain: 1 / 2,
	    pageElement: '//img[@id="qTcms_pic"]',
	    ipages: [true, 20]
	  }
	}, {
	  name: '930mh',
	  url: /^https?:\/\/www\.930mh\.com\/manhua\/.+/i,
	  exampleUrl: 'http://www.930mh.com/manhua/13355/500671.html?p=2',
	  preLink: {
	    startAfter: '?p=',
	    inc: -1,
	    min: 1
	  },
	  nextLink: {
	    startAfter: '?p=',
	    mFails: [/^https?:\/\/www\.930mh\.com\/manhua\/.+\.html/i, '?p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      const index = doc.getElementById('images').children[1].innerText;
	      const nums = index.match(/\d+/g);
	      if (Number(nums[0]) >= Number(nums[1])) {
	        return true;
	      }
	    }
	  },
	  autopager: {
	    pageElement: '//div[@id="images"]/img',
	    useiframe: true,
	    ipages: [true, 20]
	  }
	}, {
	  name: 'sis001.com',
	  url: /^https?:\/\/(\w+\.)?sis001\.com\/forum\/(forum|thread)[0-9-]+\.html/i,
	  exampleUrl: 'https://www.sis001.com/forum/forum-230-1.html',
	  nextLink: '//div[@class="pages_btns"]//a[@class="next"]',
	  autopager: {
	    pageElement: '//div[@class="mainbox"]//table[last()]',
	    replaceE: '//div[@class="pages_btns"]',
	    startFilter: function startFilter(doc, _win) {
	      const firstDiv = doc.querySelector('#ad_text');
	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    }
	  }
	}, {
	  name: '腐漫画',
	  url: '^https?://www\\.fmhuaaa\\.net/manhua/\\d+/.+',
	  enable: true,
	  pageElement: '//div[@class="bi"] //a',
	  exampleUrl: 'http://www.fmhuaaa.net/manhua/6265/832101.html',
	  nextLink: '//div[@class="bp"]/a[text()="下一页"][@href]',
	  autopager: {
	    startFilter: (d, _win) => {
	      //@ts-ignore
	      d.getElementById('bigpic').src = d.getElementById('bigpic').src.replace('fmvip.xzglasses.com', 'fmvip.xzglasses.com');
	      Array.from(d.querySelectorAll('iframe')).forEach(frame => frame.remove());
	    },
	    documentFilter: (d, _nextLink) => {
	      var link = d.body.innerHTML.match(/imgurl = '(.+)';/);
	      //@ts-ignore
	      if (link) link = '//fmvip.xzglasses.com' + link[1];
	      //@ts-ignore
	      d.getElementById('bigpic').src = link;
	      //@ts-ignore
	      d.getElementById('bigpic').dataset.link = link;
	    }
	  }
	}, {
	  name: 'xkcd',
	  url: '^https?://(?:www\\.)?xkcd\\.com',
	  nextLink: function nextLink(doc, _win, cplink) {
	    const m = cplink.match(/\d+/);
	    if (!m) {
	      return cplink + '/2/';
	    } else {
	      var url = doc.querySelector('a[rel=next]').getAttribute('href');
	      url = 'https://www.xkcd.com/' + url;
	      return url;
	    }
	  },
	  pageElement: 'id("middleContainer")'
	}, {
	  name: 'javdb.com',
	  url: 'https?://javdb\\.com',
	  nextLink: "//li[a[contains(@class,'is-current')]]/following-sibling::li[1]/a",
	  pageElement: "//div[@class='grid columns']",
	  documentFilter: function documentFilter(doc, _nextLink) {
	    const item = document.querySelector('.grid-item.column:nth-of-type(2)');
	    //@ts-ignore
	    const width = item.offsetLeft || 168;
	    const grid = doc.querySelector('.grid.columns');
	    grid.setAttribute('style', "display: grid; grid-template-columns: repeat( auto-fit, ".concat(width, "px);justify-content: center;"));
	  }
	}, {
	  name: 'avgle.com/users/videos',
	  url: '^https?://avgle\\.com/user/\\w+/videos.*',
	  nextLink: 'css;.pagination li:last-child .prevnext',
	  pageElement: '//div[div[contains(@id,"video")] and @class="row"]',
	  exampleUrl: 'https://avgle.com/user/dksc/videos',
	  filter: function filter(elems) {
	    for (const elem of elems) {
	      for (const img of elem.querySelectorAll('img')) {
	        if (!img.getAttribute('data-original')) {
	          img.setAttribute('data-original', img.src);
	        }
	      }
	    }
	  }
	}, {
	  name: 'avgle.com',
	  url: '^https?://avgle\\.com',
	  nextLink: 'css;.pagination li:last-child .prevnext',
	  pageElement: 'css;.container .row .row',
	  filter: function filter(elems) {
	    for (const elem of elems) {
	      for (const img of elem.querySelectorAll('img')) {
	        if (!img.getAttribute('data-original')) {
	          img.setAttribute('data-original', img.src);
	        }
	      }
	    }
	  }
	}, {
	  name: 'mygalgame',
	  url: '^https://www\\.kkgal\\.com(/page/)?',
	  nextLink: 'css;.pagination-zan li:last-child a',
	  pageElement: 'css;#article-list',
	  /**
	   * callback
	   * @description 一个作用预读内容 element 的 js 函数，执行于预读内容被插入到当前页面后。
	   * @param {HTMLElement[]} pageElements 页面元素
	   * @returns {void}
	   */
	  filter: function filter(pageElements) {
	    /**@type {NodeListOf<HTMLDivElement>} */
	    const article = pageElements[0].querySelectorAll('.article');
	    if (!(article[0].getAttribute('aos') == 'flip-up')) {
	      return;
	    }
	    let firstFlag = true;
	    /**@type {IntersectionObserverCallback} */
	    const intersectionCallback = entries => {
	      // 第一次进入不执行
	      entries.some(entry => {
	        const mainElement = entry.target.firstElementChild;
	        if (!mainElement) {
	          return;
	        }
	        if (entry.boundingClientRect.top > window.innerHeight - entry.boundingClientRect.height * 0.3) {
	          if (firstFlag) {
	            firstFlag = false;
	            return true;
	          }
	          if (mainElement.classList.contains('aos-animate')) {
	            mainElement.classList.remove('aos-animate');
	            return;
	          }
	          mainElement.classList.add('aos-animate');
	        } else {
	          mainElement.classList.add('aos-animate');
	        }
	        if (entry.intersectionRatio > 0.5) {
	          mainElement.classList.add('aos-animate');
	        }
	      });
	    };
	    const observer = new IntersectionObserver(intersectionCallback, {
	      threshold: [0.2, 1]
	    });
	    pageElements[0].querySelectorAll('.article').forEach(element => {
	      const divElement = document.createElement('div');
	      element.parentElement.insertBefore(divElement, element);
	      divElement.appendChild(element);
	      observer.observe(divElement);
	    });
	  }
	}];

	/**
	 * Extracts the protocol and domain from a given URL.
	 * @param {string} cplink - The complete URL string.
	 * @returns {string} The protocol and domain part of the URL.
	 */
	function getDomain(cplink) {
	  // Get [PROTOCOL]://[DOMAIN]
	  var a = getAllIndexes(cplink, '/');
	  if (a.length > 2) {
	    return cplink.substr(0, a[2]);
	  } else {
	    return cplink;
	  }
	}

	/**
	 * Finds all indexes of a specified value in an array.
	 * @param {string} arr - The array to search.
	 * @param {string} val - The value to find in the array.
	 * @returns {Array<number>} An array of indexes where the value is found.
	 */
	function getAllIndexes(arr, val) {
	  var indexes = [];
	  var i = -1;
	  while ((i = arr.indexOf(val, i + 1)) != -1) {
	    indexes.push(i);
	  }
	  return indexes;
	}

	let noticeDiv, noticeDivto, noticeDivto2;

	/**
	 * Displays a notification with the specified HTML content and duration.
	 * @param {string} html_txt - The HTML content to display in the notification.
	 * @param {number} [showTime] - The duration (in milliseconds) to show the notification. Defaults to 1666 ms.
	 */
	function notice(html_txt, showTime) {
	  if (!noticeDiv) {
	    const div = createDOM('div', {
	      attr: {
	        style: '\
            position:fixed!important;\
            z-index:2147483647!important;\
            float:none!important;\
            width:auto!important;\
            height:auto!important;\
            font-size:13px!important;\
            padding:3px 20px 2px 5px!important;\
            background-color:#7f8f9c!important;\
            border:none!important;\
            color:#000!important;\
            text-align:left!important;\
            left:0!important;\
            bottom:0!important;\
            opacity:0;\
            -moz-border-radius:0 6px 0 0!important;\
            border-radius:0 6px 0 0!important;\
            -o-transition:opacity 0.3s ease-in-out;\
            -webkit-transition:opacity 0.3s ease-in-out;\
            -moz-transition:opacity 0.3s ease-in-out;\
        '
	      }
	    });
	    document.body.appendChild(div);
	    noticeDiv = div;
	  }
	  clearTimeout(noticeDivto);
	  clearTimeout(noticeDivto2);
	  noticeDiv.innerHTML = html_txt;
	  noticeDiv.style.display = 'block';
	  noticeDiv.style.opacity = '0.96';
	  if (showTime === undefined) {
	    showTime = 1666;
	  }
	  if (showTime > 0) {
	    noticeDivto2 = setTimeout(function () {
	      noticeDiv.style.opacity = '0';
	    }, showTime);
	    noticeDivto = setTimeout(function () {
	      noticeDiv.style.display = 'none';
	    }, showTime + 300);
	  }
	}

	const spcss = {};
	spcss["sp-separator"] = _wcImport4;
	spcss["sp-prefs-spinner"] = _wcImport3;
	spcss["sp-prefs-setup"] = _wcImport2;
	spcss["sp-fw"] = _wcImport;
	(function () {
	  // use charset from currentDocument
	  const gotConfig = {
	    html: true,
	    encoding: document.characterSet
	  };
	  logger.setLevel('warn');

	  // `options.cookie`, dirty fix for older versions of TM and VM on Firefox
	  if (BROWSER.name === 'firefox') {
	    if (SCRIPT_MANAGER.name === 'Violentmonkey' && compareVersions(SCRIPT_MANAGER.version, '2.12.3') <= 0 || SCRIPT_MANAGER.name === 'Tampermonkey' && compareVersions(SCRIPT_MANAGER.version, '4.10.6103') < 0) {
	      logger.warn("[Super-preloader]", "".concat(SCRIPT_MANAGER.name, "  v").concat(SCRIPT_MANAGER.version, " has a flaw with Firefox, which may affect this script"));
	      logger.warn("[Super-preloader]", 'Check https://github.com/Tampermonkey/tampermonkey/issues/786 and https://github.com/violentmonkey/violentmonkey/issues/606 to learn more');
	      gotConfig.cookie = true;
	    }
	  } else if (SCRIPT_MANAGER.name === 'Tampermonkey' && BROWSER.name === 'safari') {
	    logger.warn("[Super-preloader]", "".concat(SCRIPT_MANAGER.name, " has a flaw with Safari, which may affect this script"));
	    logger.warn("[Super-preloader]", 'Check https://github.com/Tampermonkey/tampermonkey/issues/786 and https://github.com/violentmonkey/violentmonkey/issues/606 to learn more');
	    gotConfig.cookie = true;
	  }
	  if (SCRIPT_MANAGER.name.toLowerCase().includes('adguard')) {
	    logger.warn("[Super-preloader]", "".concat(SCRIPT_MANAGER.name, " has issues with some specific like Google due to the way it injects script"));
	  }
	  const got = got$1.create(gotConfig);
	  const scriptInfo = SCRIPT_INFO;

	  // ----------------------------------
	  // all rules
	  /** @type {IRule[]} */
	  let SSRules = [];
	  // ----------------------------------

	  // Check if we are looking at a file instead of a webpage
	  if (
	  // <svg>: SVG Document
	  document.documentElement.matches('svg') ||
	  // <pre>: plain text
	  // <img>: Image
	  // <video>: Audio and video
	  // <embed>: PDF (Chrome)
	  // body > #outerContainer:first-child + #printContainer:last-child: PDF (Firefox)
	  document.querySelector('body > pre:only-child, body > img:only-child, body > video:only-child, body > embed:only-child, body > #outerContainer:first-child + #printContainer:last-child')) {
	    return;
	  }
	  if (window.name === 'mynovelreader-iframe') {
	    return;
	  }
	  function CheckIframe() {
	    if (window.name === 'superpreloader-iframe') {
	      return true;
	    } else {
	      return false;
	    }
	  }

	  // how to trigger lazy_load
	  // https://wiki.greasespot.net/Generate_Click_Events
	  if (CheckIframe()) {
	    // 搜狗,iframe里面怎么不加载js啊?
	    // 去掉了原版的另一种方法，因为新版本 chrome 已经支持。旧版本 chrome iframe里面 无法访问window.parent,返回undefined
	    const domLoaded = function domLoaded() {
	      //window.scroll(window.scrollX, 99999);
	      const mutationObserver = window.frameElement ? JSON.parse(window.frameElement.getAttribute('mutationObserver')) : null;
	      if (!mutationObserver) {
	        window.parent.postMessage('superpreloader-iframe:DOMLoaded', '*');
	      } else {
	        const observers = mutationObserver.observers;

	        /**@type {Promise} */
	        let p = null;
	        /**@type {Array<Promise>} */
	        const parr = [];
	        if (observers) {
	          ['attributes', 'addedNodes', 'removedNodes'].forEach(key => {
	            const el = getAllElements(observers[key]);
	            if (el.length > 0) {
	              if (mutationObserver.relatedObj) {
	                //el.forEach((x) => {
	                //  p.push(elementReady(x, key));
	                //});
	                parr.push(elementReady(el[el.length - 1], key));
	                el[0].scrollIntoView();
	                el[el.length - 1].scrollIntoView();
	              } else {
	                parr.push(elementReady(el[el.length - 1], key));
	              }
	            }
	          });
	        }
	        if (p) {
	          p = Promise.all(parr);
	        } else {
	          p = Promise.resolve(undefined);
	        }
	        const timeout = mutationObserver.timeout && 0;
	        setTimeout(() => {
	          p.then(values => {
	            if (values) {
	              values.forEach(_ref => {
	                let {
	                  element,
	                  type,
	                  mutationList,
	                  observer
	                } = _ref;
	                observer.disconnect();
	              });
	            }
	            //window.scrollTo(0, scrollLocation);
	            window.parent.postMessage('superpreloader-iframe:DOMLoaded', '*');
	          });
	        }, timeout);
	      }
	    };
	    //@ts-ignore
	    if (window.opera) {
	      document.addEventListener('DOMContentLoaded', domLoaded, false);
	    } else {
	      domLoaded();
	    }
	    return;
	  }

	  // 在以下网站上允许在非顶层窗口上加载JS..比如猫扑之类的框架集网页.
	  const DIExclude = [['猫扑帖子', true, /^https?:\/\/dzh\.mop\.com\/[a-z]{3,6}\/\d{8}\/.*\.shtml$/i], ['铁血社区', true, /^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i], ['铁血社区-2', true, /^https?:\/\/bbs\.qichelian\.com\/bbsqcl\.php\?fid/i],
	  // 像 http://so.baiduyun.me/ 内嵌的百度、Google 框架
	  ['百度网盘搜索引擎-百度', true, /^https?:\/\/www\.baidu\.com\/baidu/i], ['百度网盘搜索引擎-Google', true, /^https?:\/\/74\.125\.128\.147\/custom/i]];

	  // 页面不刷新的站点
	  const HashchangeSites = [{
	    url: /^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|#|$|\?)/,
	    timer: 2000,
	    mutationSelector: '#main'
	  },
	  // 运营商可能会在 #wd= 前面添加 ?tn=07084049_pg
	  {
	    url: /^https?:\/\/www\.baidu\.com\/($|#wd=)/,
	    timer: 1000,
	    mutationSelector: '#wrapper_wrapper'
	  }, {
	    url: /^https?:\/\/www\.newsmth\.net/,
	    timer: 1000
	  }];

	  //  ///////// ----- End of Rules obtained from online json files -------///////////

	  // 分页导航的6个图标以及颜色设置:
	  const sep_icons = {
	    top: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==',
	    bottom: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==',
	    pre: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==',
	    next: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC',
	    next_gray: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==',
	    pre_gray: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC',
	    text_span_style: 'color:#595959!important;'
	  };

	  // 悬浮窗的状态颜色.
	  const FWKG_color = {
	    loading: '#8B00E8',
	    // 读取中状态
	    prefetcher: '#5564AF',
	    // 预读状态
	    autopager: '#038B00',
	    // 翻页状态
	    Apause: '#B7B700',
	    // 翻页状态(暂停).
	    Astop: '#A00000',
	    // 翻页状态(停止)(翻页完成,或者被异常停止.)(无法再开启)
	    dot: '#00FF05' // 读取完后,会显示一个小点,那么小点的颜色.
	  };

	  // 上一页关键字
	  let prePageKey = ['上一页', '上一頁', '上1页', '上1頁', '上页', '上頁', '翻上頁', '翻上页', '上一张', '上一張', '上一幅', '上一章', '上一节', '上一節', '上一篇', '前一页', '前一頁', '后退', '後退', '上篇', 'previous', 'previous Page', '前へ', '前のページ'];

	  // 下一页关键字
	  let nextPageKey = ['下一页', '下一頁', '下1页', '下1頁', '下页', '下页 ›', '下頁', '翻页', '翻頁', '翻下頁', '翻下页', '下一张', '下一張', '下一幅', '下一章', '下一节', '下一節', '下一篇', '前进', '下篇', '后页', '往后', 'Next', 'Next Page', '次へ', '次のページ', '次のページ »', '下一页 →', '下一頁 →', '下1页 →', '下1頁 →', '下页 →', '下頁 →', '翻页 →', '翻頁 →', '翻下頁 →', '翻下页 →', '下一张 →', '下一張 →', '下一幅 →', '下一章 →', '下一节 →', '下一節 →', '下一篇 →', '前进 →', '下篇 →', '后页 →', '往后 →', 'Next →', 'Next Page →', '次へ →', '次のページ →', '下一页 »', '下一頁 »', '下1页 »', '下1頁 »', '下页 »', '下頁 »', '翻页 »', '翻頁 »', '翻下頁 »', '翻下页 »', '下一张 »', '下一張 »', '下一幅 »', '下一章 »', '下一节 »', '下一節 »', '下一篇 »', '前进 »', '下篇 »', '后页 »', '往后 »', 'Next »', 'Next Page »', '次へ »', '后一页', '後一頁', '下一页 ›', '下一頁 ›', '下1页 ›', '下1頁 ›', '下頁 ›', '翻页 ›', '翻頁 ›', '翻下頁 ›', '翻下页 ›', '下一张 ›', '下一張 ›', '下一幅 ›', '下一章 ›', '下一节 ›', '下一節 ›', '下一篇 ›', '前进 ›', '下篇 ›', '后页 ›', '往后 ›', 'Next ›', 'Next >', 'Next Page ›', '次へ ›', '次のページ ›', '»', '→', '早期文章→'];
	  // THX to https://greasyfork.org/en/forum/discussion/39361/x
	  // 出在自动翻页信息附加显示真实相对页面信息，一般能智能识别出来。如果还有站点不能识别，可以把地址的特征字符串加到下面
	  // 最好不要乱加，一些不规律的站点显示出来的数字也没有意义
	  const REALPAGE_SITE_PATTERN = ['search?', 'search_', 'forum', 'thread'];

	  // ------------------------下面的不要管他-----------------
	  /// ////////////////////////////////////////////////////////////////

	  Promise.all([loadSettings(), getServerIp(location.hostname)])
	  // @ts-ignore
	  .then(function (_ref2) {
	    let [values, serverIp] = _ref2;
	    let {
	      jsonRule
	    } = values;
	    const {
	      prefs,
	      SITEINFO_D,
	      autoMatch,
	      version,
	      blackList
	    } = values;
	    if (prefs.debug) {
	      logger.setLevel('debug');
	    } else {
	      logger.setLevel(5);
	    }
	    logger.debug("[Super-preloader]", 'Script Manager: ', JSON.stringify({
	      name: SCRIPT_MANAGER.name,
	      version: SCRIPT_MANAGER.version || 'unknown'
	    }));
	    logger.debug("[Super-preloader]", 'Browser: ', JSON.stringify(BROWSER));
	    logger.debug("[Super-preloader]", "Server ip: ', ".concat(serverIp));
	    const setup = function setup() {
	      const d = document;

	      /**
	       *
	       * @param {string} s s
	       * @returns {HTMLInputElement} elem
	       */
	      const $ = function $(s) {
	        // @ts-ignore
	        return d.getElementById('sp-prefs-' + s);
	      };
	      if ($('setup')) return;
	      const styleNode = addStyle(spcss['sp-prefs-setup']);
	      if (prefs.customCSS.length > 0) {
	        addStyle(prefs.customCSS);
	      }
	      var div = d.createElement('div');
	      div.id = 'sp-prefs-setup';
	      div.style.position = 'fixed';
	      if (prefs.FW_position !== 2) {
	        div.style.right = '38px';
	        div.style.top = '20px';
	      } else {
	        div.style.right = "".concat(prefs.FW_offset[1], "px");
	        div.style.top = "".concat(prefs.FW_offset[0], "px");
	      }
	      const nextUpdateDate = prefs.disableBuiltinSubscriptionRules ? 'N/A' : jsonRuleLoader.expire.toDateString();
	      div.innerHTML = template['sp-prefs']({
	        prefs,
	        scriptInfo,
	        nextUpdateDate: nextUpdateDate
	      });
	      d.body.appendChild(div);
	      const close = () => {
	        if (styleNode) {
	          styleNode.parentNode.removeChild(styleNode);
	        }
	        const div = $('setup');
	        div.parentNode.removeChild(div);
	      };
	      const on = (node, e, f) => {
	        node.addEventListener(e, f, false);
	      };
	      on($('ok'), 'click', function () {
	        Object.keys(factorySettings.prefs).forEach(key => {
	          const el = $(key);
	          if (el !== null) {
	            prefs[key] = getProperty(el);
	          }
	        });
	        if (prefs.debug) {
	          logger.setLevel('debug');
	        } else {
	          logger.setLevel(5);
	        }
	        autoMatch.keyMatch = !$('autoMatchKeyMatch').checked;
	        SITEINFO_D.useiframe = !!$('SITEINFO_D-useiframe').checked;
	        SITEINFO_D.autopager.enable = !!$('SITEINFO_D-a_enable').checked;
	        SITEINFO_D.autopager.force_enable = !!$('SITEINFO_D-a_force_enable').checked;
	        autoMatch.useiframe = SITEINFO_D.useiframe;
	        saveSettings({
	          prefs,
	          SITEINFO_D,
	          autoMatch
	        }).then(() => {
	          SP.loadSetting();
	          close();
	          location.reload();
	        });
	      });
	      on($('reset'), 'click', () => {
	        $('setup').innerHTML = template.spinner.reset;
	        addStyle(spcss['sp-prefs-spinner']);
	        resetSettings().then(() => {
	          location.reload();
	        });
	      });
	      if (prefs.disableBuiltinSubscriptionRules) {
	        $('updaterule').setAttribute('disabled', '');
	      }
	      on($('updaterule'), 'click', function () {
	        if (prefs.disableBuiltinSubscriptionRules) return;
	        $('setup').innerHTML = template.spinner.update;
	        addStyle(spcss['sp-prefs-spinner']);
	        jsonRuleLoader.updateRule(true).then(() => {
	          jsonRule = jsonRuleLoader.getRule();
	          SP.loadSetting();
	          close();
	          location.reload();
	        });
	      });
	      on($('cancel'), 'click', close);
	      $('debug').checked = logger.getLevel() === logger.levels.DEBUG;
	      $('ChineseUI').checked = prefs.ChineseUI;
	      $('floatWindow').checked = prefs.floatWindow;
	      $('enableHistory').checked = prefs.enableHistory;
	      // $('forceTargetWindow').checked = prefs.forceTargetWindow;
	      $('dblclick_pause').checked = prefs.dblclick_pause;
	      $('SITEINFO_D-useiframe').checked = SITEINFO_D.useiframe;
	      $('SITEINFO_D-a_enable').checked = SITEINFO_D.autopager.enable;
	      $('arrowKeyPage').checked = prefs.arrowKeyPage;
	      $('SITEINFO_D-a_force_enable').checked = SITEINFO_D.autopager.force_enable;
	      $('excludes').value = prefs.excludes;
	      $('custom_siteinfo').value = prefs.custom_siteinfo;
	      $('customCSS').value = prefs.customCSS;
	      $('disableBuiltinRules').checked = prefs.disableBuiltinRules;
	      $('disableBuiltinSubscriptionRules').checked = prefs.disableBuiltinSubscriptionRules;
	      $('autoMatchKeyMatch').checked = !autoMatch.keyMatch;
	    };

	    // main functions
	    const SP = {
	      spinit: function spinit() {
	        if (document.body.getAttribute('name') === 'MyNovelReader') {
	          return;
	        }
	        this.loadSetting();
	        if (userLang === 'zh_CN') {
	          GM.registerMenuCommand('Super_preloaderPlus_one_New 设置', setup);
	        } else {
	          GM.registerMenuCommand('Super_preloaderPlus_one_New Settings', setup);
	        }

	        // 查找是否是页面不刷新的站点
	        const locationHref = location.href;
	        const hashSite = _find(HashchangeSites, function (x) {
	          return toRE(x.url).test(locationHref);
	        });
	        if (hashSite) {
	          isHashchangeSite = true;
	          hashchangeTimer = hashSite.timer;
	          logger.debug("[Super-preloader]", 'This site does not refresh the page.', hashSite);
	          const p1 = new Promise(function (resolve, reject) {
	            setTimeout(resolve, hashchangeTimer);
	          });
	          p1.then(function (values) {
	            init(window, document);
	          });
	        } else {
	          init(window, document);
	        }
	        // 分辨率 高度 > 宽度 的是手机
	        if (window.screen.height > window.screen.width) {
	          addStyle('div.sp-separator { min-width:auto !important; }');
	        }
	      },
	      loadSetting: function loadSetting() {
	        const a_enable = SITEINFO_D.autopager.enable;
	        if (a_enable !== undefined) {
	          SITEINFO_D.autopager.enable = a_enable;
	        }
	        const loadDblclickPause = function loadDblclickPause(reload) {
	          const dblclickPause = prefs.dblclick_pause;
	          if (dblclickPause) {
	            prefs.mouseA = false;
	            prefs.Pbutton = [0, 0, 0];
	          }
	        };
	        const loadCustomSiteInfo = function loadCustomSiteInfo() {
	          let userRules;
	          try {
	            userRules = new Function('', 'return ' + prefs.custom_siteinfo)();
	          } catch (e) {
	            logger.error("[Super-preloader]", 'Custom site rule error:', prefs.custom_siteinfo);
	          }
	          if (_isArray(userRules)) {
	            SSRules = SSRules.concat(userRules);
	          }
	        };
	        loadDblclickPause();
	        loadCustomSiteInfo();
	      }
	    };
	    SP.spinit();
	    /**
	     *
	     * @param {Window} window window
	     * @param {Document} document document
	     * @returns {void}
	     */
	    function init(window, document) {
	      const startTime = new Date();
	      /**@type {(...rest:any[])=>void} */
	      const nullFn = function nullFn() {}; // 空函数.
	      const url = document.location.href.replace(/#.*$/, ''); // url 去掉hash
	      var cplink = url; // 翻上来的最近的页面的url;
	      const domain_port = url.match(/https?:\/\/([^/]+)/)[1]; // 端口和域名,用来验证是否跨域.

	      // 新加的，以示区别
	      const remove = []; // 需要移除的事件

	      // 悬浮窗
	      var floatWO = {
	        updateColor: nullFn,
	        loadedIcon: nullFn,
	        CmodeIcon: nullFn
	      };
	      /**
	       *
	       * @param {IRuntimeRule} SSS a rule
	       * @returns {void}
	       */
	      function floatWindow(SSS) {
	        // inject css
	        addStyle(spcss['sp-fw']);

	        // create container
	        const div = document.createElement('div');
	        div.id = 'sp-fw-container';
	        div.innerHTML = template.floatWindow();
	        document.body.appendChild(div);

	        // helper function to get element
	        /**
	         *
	         * @param {string} id id
	         * @returns {HTMLInputElement} return
	         */
	        function $(id) {
	          //@ts-ignore
	          return document.getElementById(id);
	        }
	        const rect = $('sp-fw-rect'); // 悬浮窗的小正方形,用颜色描述当前的状态.
	        const spanel = $('sp-fw-content'); // 设置面板.

	        // 设置面板显隐
	        const spanelc = {
	          show: function show() {
	            spanel.style.display = 'block';
	          },
	          hide: function hide() {
	            spanel.style.display = 'none';
	          }
	        };
	        spanelc.hide();
	        let rectt1, rectt2;
	        rect.addEventListener('mouseover', function (e) {
	          rectt1 = setTimeout(spanelc.show, 100);
	        }, false);
	        rect.addEventListener('mouseleave', function (e) {
	          clearTimeout(rectt1);
	        }, false);
	        div.addEventListener('mouseover', function (e) {
	          clearTimeout(rectt2);
	        }, false);
	        div.addEventListener('mouseleave', function (e) {
	          // Firefox bug
	          // https://stackoverflow.com/questions/46831247/select-triggers-mouseleave-event-on-parent-element-in-mozilla-firefox
	          if (e.relatedTarget === null) return;
	          rectt2 = setTimeout(spanelc.hide, 288);
	        }, false);
	        const dot = $('sp-fw-dot'); // 载入完成后,显示的小点
	        dot.style.backgroundColor = FWKG_color.dot;
	        const cur_mode = $('sp-fw-cur-mode'); // 当载入状态时,用来描述当前是翻页模式,还是预读模式.
	        cur_mode.style.backgroundColor = SSS.a_enable ? FWKG_color.autopager : FWKG_color.prefetcher;
	        const a_enable = $('sp-fw-a_enable'); // 启用翻页模式
	        const autopager_field = $('sp-fw-autopager-field'); // 翻页设置区域

	        // 预读设置
	        const useiframe = $('sp-fw-useiframe');
	        const viewcontent = $('sp-fw-viewcontent');

	        // 翻页设置
	        const a_useiframe = $('sp-fw-a_useiframe');
	        const a_iloaded = $('sp-fw-a_iloaded');
	        const a_itimeout = $('sp-fw-a_itimeout');
	        const a_manualA = $('sp-fw-a_manualA');
	        const a_remain = $('sp-fw-a_remain');
	        const a_maxpage = $('sp-fw-a_maxpage');
	        const a_separator = $('sp-fw-a_separator');
	        const a_ipages_0 = $('sp-fw-a_ipages_0');
	        const a_ipages_1 = $('sp-fw-a_ipages_1');
	        const a_force = $('sp-fw-a_force');

	        // newIframe 输入框的点击
	        const a_newIframe = $('sp-fw-a_newIframe');
	        a_newIframe.addEventListener('click', function () {
	          a_useiframe.checked = a_newIframe.checked;
	        }, false);
	        const a_starti = $('sp-fw-a_starti'); // 开始立即翻页
	        a_starti.addEventListener('click', function (e) {
	          //@ts-ignore
	          if (e.currentTarget.disabled) return;
	          var value = parseInt(a_ipages_1.value);
	          if (isNaN(value) || value < 0) {
	            value = SSS.a_ipages[1];
	            //@ts-ignore
	            a_ipages_1.value = value;
	          }
	          autoPO.startipages(value);
	        }, false);

	        // 总开关
	        const enable = $('sp-fw-enable');
	        $('sp-fw-setup').addEventListener('click', setup, false);

	        // 保存设置按钮.
	        const savebutton = $('sp-fw-savebutton');
	        savebutton.addEventListener('click', function (e) {
	          const value = {
	            Rurl: SSS.Rurl,
	            useiframe: getProperty(useiframe),
	            viewcontent: getProperty(viewcontent),
	            enable: getProperty(enable)
	          };
	          if (SSS.a_enable !== undefined) {
	            /** @type {(s:HTMLElement)=>number} */
	            //@ts-ignore
	            const getPropertyNumber = getProperty;
	            value.a_enable = getProperty(a_enable) === 'autopager';
	            value.a_useiframe = getProperty(a_useiframe);
	            value.a_newIframe = getProperty(a_newIframe);
	            value.a_iloaded = getProperty(a_iloaded);
	            value.a_manualA = getProperty(a_manualA);
	            value.a_force = getProperty(a_force);
	            const t_a_itimeout = getPropertyNumber(a_itimeout);
	            value.a_itimeout = isNaN(t_a_itimeout) ? SSS.a_itimeout : t_a_itimeout >= 0 ? t_a_itimeout : 0;
	            const t_a_remain = getPropertyNumber(a_remain);
	            value.a_remain = isNaN(t_a_remain) ? SSS.a_remain : Number(t_a_remain);
	            const t_a_maxpage = getPropertyNumber(a_maxpage);
	            value.a_maxpage = isNaN(t_a_maxpage) ? SSS.a_maxpage : t_a_maxpage >= 1 ? t_a_maxpage : 1;
	            const t_a_ipages_1 = getPropertyNumber(a_ipages_1);
	            value.a_ipages = [getProperty(a_ipages_0), isNaN(t_a_ipages_1) ? SSS.a_ipages[1] : t_a_ipages_1 >= 0 ? t_a_ipages_1 : 1];
	            value.a_separator = getProperty(a_separator);
	          }
	          saveLocalSetting(value);
	          if (e.shiftKey ? !prefs.FW_RAS : prefs.FW_RAS) {
	            // 按住shift键,执行反向操作.
	            setTimeout(function () {
	              location.reload();
	            }, 1);
	          }
	        }, false);

	        // 载入翻页设置.
	        if (SSS.a_enable === undefined) {
	          // 未定义翻页功能.
	          a_enable.disabled = true;
	          autopager_field.style.display = 'none';
	        } else {
	          setProperty(a_enable, SSS.a_enable ? 'autopager' : 'preloader');
	          setProperty(a_useiframe, SSS.a_useiframe);
	          setProperty(a_newIframe, SSS.a_newIframe);
	          setProperty(a_iloaded, SSS.a_iloaded);
	          setProperty(a_itimeout, SSS.a_itimeout);
	          setProperty(a_manualA, SSS.a_manualA);
	          setProperty(a_force, SSS.a_force);
	          setProperty(a_remain, SSS.a_remain);
	          setProperty(a_maxpage, SSS.a_maxpage);
	          setProperty(a_separator, SSS.a_separator);
	          setProperty(a_ipages_0, SSS.a_ipages[0]);
	          setProperty(a_ipages_1, SSS.a_ipages[1]);
	        }
	        if (!SSS.a_enable) {
	          // 当前不是翻页模式,禁用立即翻页按钮.
	          a_starti.disabled = true;
	        }
	        if (!SSS.hasRule) {
	          // 如果没有高级规则,那么此项不允许操作.
	          a_force.disabled = true;
	        }

	        // 载入预读设置.
	        setProperty(useiframe, SSS.useiframe);
	        setProperty(viewcontent, SSS.viewcontent);

	        // 总开关
	        setProperty(enable, SSS.enable);
	        const FWKG_state = {
	          loading: '读取中状态',
	          prefetcher: '预读状态',
	          autopager: '翻页状态',
	          Apause: '翻页状态(暂停)',
	          Astop: '翻页状态(停止)(翻页完成,或者被异常停止)(无法再开启)',
	          dot: '读取完后'
	        };
	        if (userLang !== 'zh_CN') {
	          FWKG_state.loading = 'Loading';
	          FWKG_state.prefetcher = 'Prefetching';
	          FWKG_state.autopager = 'Autopagger (Running)';
	          FWKG_state.Apause = 'Autopagger (Pause)';
	          FWKG_state.Astop = 'Autopagger (Stop)';
	          FWKG_state.dot = 'Finish loading';
	        }
	        floatWO = {
	          updateColor: function updateColor(state) {
	            rect.style.backgroundColor = FWKG_color[state];
	            rect.setAttribute('title', FWKG_state[state]);
	          },
	          loadedIcon: function loadedIcon(command) {
	            dot.style.display = command == 'show' ? 'block' : 'none';
	          },
	          CmodeIcon: function CmodeIcon(command) {
	            cur_mode.style.display = command == 'show' ? 'block' : 'none';
	          }
	        };
	        const vertical = parseInt(prefs.FW_offset[0] + '', 10);
	        const horiz = parseInt(prefs.FW_offset[1] + '', 10);
	        const FW_position = prefs.FW_position;

	        // 非opera用fixed定位.
	        div.style.position = 'fixed';
	        switch (FW_position) {
	          case 1:
	            div.style.top = vertical + 'px';
	            div.style.left = horiz + 'px';
	            break;
	          case 2:
	            div.style.top = vertical + 'px';
	            div.style.right = horiz + 'px';
	            break;
	          case 3:
	            div.style.bottom = vertical + 'px';
	            div.style.right = horiz + 'px';
	            break;
	          case 4:
	            div.style.bottom = vertical + 'px';
	            div.style.left = horiz + 'px';
	            break;
	        }
	      }
	      function sp_transition(start, end) {
	        //@ts-ignore
	        var TweenF = sp_transition.TweenF;
	        if (!TweenF) {
	          TweenF = Tween[TweenM[prefs.s_method]];
	          TweenF = TweenF[TweenEase[prefs.s_ease]] || TweenF;
	          //@ts-ignore
	          sp_transition.TweenF = TweenF;
	        }
	        const frameSpeed = 1000 / prefs.s_FPS;
	        var t = 0; // 次数,开始
	        const b = start; // 开始
	        const c = end - start; // 结束
	        const d = Math.ceil(prefs.s_duration / frameSpeed); // 次数,结束

	        const x = window.scrollX;
	        function transition() {
	          const y = Math.ceil(TweenF(t, b, c, d));
	          window.scroll(x, y);
	          if (t < d) {
	            t++;
	            setTimeout(transition, frameSpeed);
	          }
	        }
	        transition();
	      }
	      function sepHandler(e) {
	        e.stopPropagation();
	        const div = e.currentTarget;
	        const target = e.target;
	        function getRelativeDiv(which) {
	          var id = div.id;
	          id = id.replace(/(sp-separator-)(.+)/, function (a, b, c) {
	            return b + String(Number(c) + (which == 'pre' ? -1 : 1));
	          });
	          return id ? document.getElementById(id) : null;
	        }
	        function scrollIt(a, b) {
	          // a=a!==undefined? a : window.scrollY;
	          if (prefs.sepT) {
	            sp_transition(a, b);
	          } else {
	            window.scroll(window.scrollX, b);
	          }
	        }
	        var o_scrollY, divS;
	        switch (target.className) {
	          case 'sp-sp-gotop':
	            scrollIt(window.scrollY, 0);
	            break;
	          case 'sp-sp-gopre':
	            {
	              const prediv = getRelativeDiv('pre');
	              if (!prediv) return;
	              o_scrollY = window.scrollY;
	              var preDS = prediv.getBoundingClientRect().top;
	              if (prefs.sepP) {
	                divS = div.getBoundingClientRect().top;
	                preDS = o_scrollY - (divS - preDS);
	              } else {
	                preDS += o_scrollY - 6;
	              }
	              scrollIt(o_scrollY, preDS);
	              break;
	            }
	          case 'sp-sp-gonext':
	            {
	              const nextdiv = getRelativeDiv('next');
	              if (!nextdiv) return;
	              o_scrollY = window.scrollY;
	              var nextDS = nextdiv.getBoundingClientRect().top;
	              if (prefs.sepP) {
	                divS = div.getBoundingClientRect().top;
	                nextDS = o_scrollY + (-divS + nextDS);
	              } else {
	                nextDS += o_scrollY - 6;
	              }
	              scrollIt(o_scrollY, nextDS);
	              break;
	            }
	          case 'sp-sp-gobottom':
	            scrollIt(window.scrollY, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
	            break;
	        }
	      }

	      // autopager
	      var autoPO = {
	        /**@type {(value?:number)=>void} f*/
	        startipages: nullFn
	      };
	      var hashchangeAdded = false;
	      /**
	       * @param {IRuntimeRule} SSS a rule
	       * @param {*} floatWO float window object
	       * @returns {void}
	       */
	      function autopager(SSS, floatWO) {
	        // return;
	        // 更新悬浮窗的颜色.
	        floatWO.updateColor('autopager');

	        // 获取插入位置节点.
	        var insertPoint;
	        var pageElement;
	        var insertMode;
	        if (SSS.a_HT_insert) {
	          insertPoint = getElement(SSS.a_HT_insert[0]);
	          insertMode = SSS.a_HT_insert[1];
	        } else {
	          pageElement = getAllElements(SSS.a_pageElement, document, document, null, cplink);
	          if (pageElement.length > 0) {
	            const pELast = pageElement[pageElement.length - 1];
	            insertPoint = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(' '));
	          }
	          insertMode = -1;
	        }
	        if (insertPoint) {
	          logger.debug("[Super-preloader]", 'Verify that the insertion position node can be found: success', insertPoint);
	        } else {
	          logger.error("[Super-preloader]", 'Verify that the insertion position node can be found: failed. JS execution stopped', SSS.a_HT_insert ? SSS.a_HT_insert[0] : '');
	          floatWO.updateColor('Astop');
	          return;
	        }
	        if (window.navigator.language != 'en') {
	          logger.debug("[Super-preloader]", 'Language: ', window.navigator.language);
	        }
	        if (pageElement === undefined) {
	          pageElement = getAllElements(SSS.a_pageElement);
	        }
	        if (pageElement.length > 0) {
	          logger.debug("[Super-preloader]", 'Verify that the main element can be found: success', pageElement);
	        } else {
	          logger.error("[Super-preloader]", 'Verify that the main element can be found: failure', SSS.a_pageElement);
	          floatWO.updateColor('Astop');
	          return;
	        }
	        if (SSS.a_stylish) {
	          // 插入自定义样式
	          addStyle(SSS.a_stylish, 'Super_preloader-style');
	        }

	        /** @type {Node} */
	        var insertPointP;
	        if (insertMode != 2) {
	          insertPointP = insertPoint.parentNode;
	        }
	        var addIntoDoc;
	        if (insertMode == -1 || insertMode == 1) {
	          addIntoDoc = function addIntoDoc(obj) {
	            return insertPointP.insertBefore(obj, insertPoint);
	          };
	        } else if (insertMode == 2) {
	          addIntoDoc = function addIntoDoc(obj) {
	            return insertPoint.appendChild(obj);
	          };
	        } else if (insertMode == 0) {
	          addIntoDoc = function addIntoDoc(obj) {
	            return insertPointP.insertBefore(obj, insertPoint.nextSibling);
	          };
	        }

	        /** @type {HTMLDocument} */
	        var doc, win;
	        function XHRLoaded(res) {
	          const str = res.data;
	          doc = win = createDocumentByString(str);
	          if (!doc) {
	            logger.error("[Super-preloader]", 'Document object creation failed');
	            removeL();
	            return;
	          }
	          floatWO.updateColor('autopager');
	          floatWO.CmodeIcon('hide');
	          floatWO.loadedIcon('show');
	          working = false;
	          scroll();
	        }
	        function XHRNotLoaded(res) {
	          logger.error("[Super-preloader]", 'XHR is failed to be loaded');
	          logger.error("[Super-preloader]", res);
	          removeL();
	        }
	        function removeL(isRemoveAddPage) {
	          logger.debug("[Super-preloader]", 'Remove various event listeners');
	          floatWO.updateColor('Astop');
	          const _remove = remove;
	          for (var i = 0, ii = _remove.length; i < ii; i++) {
	            _remove[i]();
	          }
	          if (isRemoveAddPage) {
	            const separator = document.querySelector('.sp-separator');
	            if (separator) {
	              var insertBefore = insertPoint;
	              if (insertMode == 2) {
	                const l = insertPoint.children.length;
	                if (l > 0) {
	                  insertBefore = insertPoint.children[l - 1];
	                }
	              }
	              const range = document.createRange();
	              range.setStartBefore(separator);
	              range.setEndBefore(insertBefore);
	              range.deleteContents();
	              range.detach();
	              if (insertMode == 2) {
	                // 还需要额外移除？
	                insertPoint.removeChild(insertBefore);
	              }
	            }
	            const style = document.getElementById('Super_preloader-style');
	            if (style) {
	              style.parentNode.removeChild(style);
	            }
	          }
	        }
	        if (isHashchangeSite && !hashchangeAdded) {
	          window.addEventListener('hashchange', onhashChange, false);
	          hashchangeAdded = true;
	          logger.debug("[Super-preloader]", 'Successfully added hashchange event');
	        }
	        function onhashChange(event) {
	          logger.debug("[Super-preloader]", 'hashchange event triggered');
	          removeL(true);
	          setTimeout(function () {
	            nextlinkElem = getElement(SSS.nextLink || 'auto;');
	            nextlink = elemToHref(nextlinkElem);
	            // preLink = getElement(SSS.preLink || 'auto;');
	            autopager(SSS, floatWO);
	          }, hashchangeTimer);
	        }

	        /** @type {HTMLIFrameElement} */
	        var iframe;
	        var messageR;

	        /**
	         * Event handler of iframe loaded
	         * @param {IFrameLoadedEvent} event Iframe loaded event
	         * @returns {void}
	         */
	        function iframeLoaded(event) {
	          const iframe = event.currentTarget;
	          const body = iframe.contentDocument.body;
	          if (body && body.firstChild) {
	            setTimeout(function () {
	              doc = iframe.contentDocument;
	              // removeScripts(doc, SSS.a_scriptFilter);
	              win = iframe.contentWindow || doc;
	              floatWO.updateColor('autopager');
	              floatWO.CmodeIcon('hide');
	              floatWO.loadedIcon('show');
	              working = false;
	              scroll();
	            }, SSS.a_itimeout);
	          }
	        }

	        /**
	         * Load next page in iframe
	         * @param {string} link Link of the next page
	         * @returns {void}
	         */
	        function iframeRequest(link) {
	          messageR = false;
	          if (SSS.a_newIframe || !iframe) {
	            let insertLoc = null;
	            const i = document.createElement('iframe');
	            iframe = i;
	            i.name = 'superpreloader-iframe';
	            i.width = '100%';
	            i.height = '0';
	            i.frameBorder = '0';
	            i.style.cssText = '\
                    margin:0!important;\
                    padding:0!important;\
                    visibility:hidden!important;\
                ';
	            if (SSS.a_sandbox != false) {
	              //sandbox is readonly property
	              //i.sandbox = SSS.a_sandbox;
	              i.setAttribute('sandbox', '');
	            }
	            i.src = link;
	            if (SSS.a_mutationObserver) {
	              i.setAttribute('mutationObserver', JSON.stringify(SSS.a_mutationObserver));
	              if (SSS.a_mutationObserver.relatedObj) {
	                insertLoc = getAllElements(SSS.a_mutationObserver.relatedObj);
	                if (insertLoc.length > 0) {
	                  insertLoc = insertLoc[0];
	                } else {
	                  insertLoc = null;
	                }
	              }
	            }
	            if (SSS.a_iloaded) {
	              i.addEventListener('load', iframeLoaded, false);
	              remove.push(function () {
	                i.removeEventListener('load', iframeLoaded, false);
	              });
	            } else {
	              const _messagehandler = function messagehandler(e) {
	                if (!messageR && e.data == 'superpreloader-iframe:DOMLoaded') {
	                  messageR = true;
	                  iframeLoaded.call(i, {
	                    currentTarget: i
	                  });
	                  if (SSS.a_newIframe) {
	                    window.removeEventListener('message', _messagehandler, false);
	                  }
	                }
	              };
	              window.addEventListener('message', _messagehandler, false);
	              remove.push(function () {
	                window.removeEventListener('message', _messagehandler, false);
	              });
	            }
	            if (insertLoc) {
	              insertLoc.parentNode.insertBefore(i, insertLoc);
	            } else {
	              document.body.appendChild(i);
	            }
	          } else {
	            iframe.src = link;
	            iframe.contentDocument.location.replace(link);
	            if (SSS.a_reload) {
	              iframe.contentWindow.location.reload();
	            }
	          }
	        }

	        /**
	         * Send XHR request to obtain next page content
	         * @param {string} link Link of next page
	         * @returns {void}
	         */
	        function XHRrequest(link) {
	          const reqConf = {
	            headers: SSS.a_headers ? SSS.a_headers : {
	              Referer: cplink
	            }
	          };
	          got.get(link, reqConf).then(
	          /**
	           * Handling of XHR request
	           * @param {ResponseObject} res Response of got
	           * @returns {void}
	           */
	          res => {
	            if (res.finalUrl === cplink) {
	              logger.debug("[Super-preloader]", 'Same final address');
	              XHRNotLoaded(res);
	            } else {
	              XHRLoaded(res);
	              logger.debug("[Super-preloader]", 'XHRrequest complete');
	            }
	          }).catch(
	          /**
	           * Error handling of XHR request
	           * @param {ResponseObject} res Response of got
	           * @returns {void}
	           */
	          res => {
	            XHRNotLoaded(res);
	          });
	        }
	        var working;
	        function doRequest() {
	          working = true;
	          floatWO.updateColor('loading');
	          floatWO.CmodeIcon('show');
	          logger.debug("[Super-preloader]", 'Get next page', SSS.a_useiframe ? '(iframe method)' : '(XHR method)', nextlink);
	          pagedLinks.push(nextlink);
	          if (SSS.a_useiframe) {
	            iframeRequest(nextlink);
	          } else {
	            if (/(?:http|\/).*/.test(nextlink)) {
	              // request next page by XHR
	              XHRrequest(nextlink);
	            } else {
	              logger.error("[Super-preloader]", 'Lazyload or Invalid nextLinkElem', nextlinkElem);
	            }
	          }
	        }
	        let [ipagesmode = false, ipagesnumber = 2] = SSS.a_ipages;
	        if (ipagesmode && ipagesnumber === 0) {
	          ipagesnumber = Number.MAX_SAFE_INTEGER;
	        }
	        var scrollDo = nullFn;
	        var afterInsertDo = nullFn;
	        if (prefs.Aplus) {
	          afterInsertDo = doRequest;
	          doRequest();
	        } else {
	          scrollDo = doRequest;
	          if (ipagesmode) doRequest();
	        }
	        var manualDiv;
	        function manualAdiv() {
	          if (!manualDiv) {
	            addStyle(spcss['sp-separator']);
	            const spage = async el => {
	              if (doc) {
	                let value = Number(el.value);
	                if (isNaN(value) || value < 1) {
	                  el.value = value = 1;
	                }
	                ipagesmode = true;
	                ipagesnumber = value + paged;
	                await insertedIntoDoc();
	              }
	            };
	            const div = createDOM('div', {
	              attr: {
	                id: 'sp-sp-manualdiv',
	                class: 'sp-separator'
	              },
	              children: [createDOM('span', {
	                attr: {
	                  class: 'sp-md-span'
	                },
	                innerHTML: userLang === 'zh_CN' ? '下' : 'Next'
	              }), createDOM('input', {
	                attr: {
	                  type: 'number',
	                  value: 1,
	                  min: 1,
	                  title: userLang === 'zh_CN' ? '输入你想要拼接的页数(必须>=1),然后按回车.' : 'Type number of pageringzing and press enter',
	                  id: 'sp-sp-md-number'
	                },
	                eventListener: [{
	                  type: 'keyup',
	                  listener: e => {
	                    if (e.keyCode == 13) {
	                      // 回车
	                      spage(e.target);
	                    }
	                  }
	                }]
	              }), createDOM('span', {
	                attr: {
	                  class: 'sp-md-span'
	                },
	                innerHTML: userLang === 'zh_CN' ? '页' : 'page'
	              }), createDOM('img', {
	                attr: {
	                  id: 'sp-sp-md-imgnext',
	                  src: _sep_icons.next
	                }
	              }), createDOM('div', {
	                attr: {
	                  class: 'sp-someinfo',
	                  id: 'sp-separator-hover'
	                },
	                children: [createDOM('a', {
	                  attr: {
	                    href: 'https://github.com/machsix/Super-preloader',
	                    target: '_blank'
	                  },
	                  innerHTML: 'Powered by Super-preloader'
	                })]
	              })]
	            });
	            manualDiv = div;
	            document.body.appendChild(div);
	            div.addEventListener('click', function (e) {
	              //@ts-ignore
	              if (e.target.id === 'sp-sp-md-number') return;
	              spage(document.getElementById('sp-sp-md-number')).then(() => {
	                manualDiv.remove();
	              });
	            }, false);
	          }
	          addIntoDoc(manualDiv);
	          //manualDiv.style.display = "block";
	        }
	        async function beforeInsertIntoDoc() {
	          working = true;
	          if (SSS.a_manualA && !ipagesmode) {
	            // 显示手动翻页触发条.
	            logger.debug("[Super-preloader]", 'Manual stitching');
	            manualAdiv();
	          } else {
	            // 直接拼接.
	            logger.debug("[Super-preloader]", 'Direct stitching');
	            await insertedIntoDoc();
	          }
	        }
	        var sepStyle;
	        //looks like goNextImg is useless here.
	        //const goNextImg = [false];
	        const sNumber = prefs.sepStartN;
	        const _sep_icons = sep_icons;
	        var curNumber = sNumber;
	        function createSep(lastUrl, currentUrl, nextUrl) {
	          const div = document.createElement('div');
	          if (SSS.a_separator) {
	            if (!sepStyle) {
	              sepStyle = addStyle(spcss['sp-separator']);
	              if (prefs.customCSS.length > 0) addStyle(prefs.customCSS);
	            }
	            div.className = 'sp-separator';
	            div.id = 'sp-separator-' + curNumber;
	            div.addEventListener('click', sepHandler, false);
	            let pageStr = '';
	            if (userLang === 'zh_CN') {
	              pageStr = '<b>第 <span style="' + sep_icons.text_span_style + '">' + curNumber + '</span> 页</b>' + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : '');
	            } else {
	              pageStr = '<b>Page <span style="' + sep_icons.text_span_style + '">' + curNumber + '</span></b>' + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : '');
	            }
	            div.appendChild(createDOM('a', {
	              attr: {
	                class: 'sp-sp-nextlink',
	                target: '_blank',
	                href: currentUrl,
	                title: currentUrl
	              },
	              innerHTML: pageStr
	            }));
	            div.appendChild(createDOM('img', {
	              attr: {
	                src: _sep_icons.top,
	                class: 'sp-sp-gotop',
	                alt: userLang === 'zh_CN' ? '去到顶部' : 'To Top',
	                title: userLang === 'zh_CN' ? '去到顶部' : 'To Top'
	              }
	            }));
	            div.appendChild(createDOM('img', {
	              attr: {
	                src: curNumber == sNumber ? _sep_icons.pre_gray : _sep_icons.pre,
	                class: 'sp-sp-gopre',
	                title: userLang === 'zh_CN' ? '上滚一页' : 'Scroll up a page'
	              }
	            }));
	            const i_next = createDOM('img', {
	              attr: {
	                src: _sep_icons.next_gray,
	                class: 'sp-sp-gonext',
	                title: userLang === 'zh_CN' ? '下滚一页' : 'Scroll down a page'
	              }
	            });

	            //if (goNextImg.length == 2) {
	            //  goNextImg.shift();
	            //}
	            //goNextImg.push(i_next);
	            div.appendChild(i_next);
	            div.appendChild(createDOM('img', {
	              attr: {
	                src: _sep_icons.bottom,
	                class: 'sp-sp-gobottom',
	                alt: userLang === 'zh_CN' ? '去到底部' : 'To Bottom',
	                title: userLang === 'zh_CN' ? '去到底部' : 'To Bottom'
	              }
	            }));
	            div.appendChild(createDOM('div', {
	              attr: {
	                class: 'sp-someinfo',
	                id: 'sp-separator-hover'
	              },
	              children: [createDOM('a', {
	                attr: {
	                  href: 'https://github.com/machsix/Super-preloader',
	                  target: '_blank'
	                },
	                innerHTML: 'Powered by Super-preloader'
	              })]
	            }));
	            curNumber += 1;
	          } else {
	            div.style.cssText = '\
                    height:0!important;\
                    width:0!important;\
                    margin:0!important;\
                    padding:0!important;\
                    border:none!important;\
                    clear:both!important;\
                    display:block!important;\
                    visibility:hidden!important;\
                ';
	          }
	          return div;
	        }
	        var paged = 0;
	        async function insertedIntoDoc() {
	          if (!doc) {
	            logger.error("[Super-preloader]", 'No document');
	            return;
	          }
	          if (SSS.a_documentFilter) {
	            try {
	              await SSS.a_documentFilter(doc, typeof nextlink === 'string' && nextlink);
	              logger.debug("[Super-preloader]", 'Successfully executeed documentFilter');
	            } catch (e) {
	              logger.error("[Super-preloader]", 'Error executing documentFilter', e, SSS.a_documentFilter.toString());
	            }
	          }
	          const docTitle = getElementByCSS('title', doc).textContent;
	          const fragment = document.createDocumentFragment();
	          const pageElements = getAllElements(SSS.a_pageElement, undefined, doc, win, typeof nextlink === 'string' && nextlink);
	          const ii = pageElements.length;
	          if (ii <= 0) {
	            logger.error("[Super-preloader]", 'Failed to get the main content of the next page', SSS.a_pageElement);
	            removeL();
	            return;
	          } else {
	            logger.debug("[Super-preloader]", 'Successfully got the main content of the next page', pageElements);
	          }

	          // 提前查找下一页链接，后面再赋值
	          const lastUrl = cplink;
	          cplink = String(nextlink);
	          /** @type {HTMLElement | string} */
	          const nl = getElement(SSS.nextLink, undefined, doc, win);
	          if (nl) {
	            if (nl === nextlinkElem) {
	              nextlinkElem = null;
	            } else {
	              nextlinkElem = nl;
	            }
	          } else {
	            nextlinkElem = null;
	          }
	          nextlink = elemToHref(nextlinkElem);
	          // 有部分下一页的信息是在script中（比如新加的csdn的规则），因此先查找下一页信息，再执行 removeScripts
	          removeScripts(doc, SSS.a_scriptFilter);
	          var i, pe_x, pe_x_nn;
	          for (i = 0; i < ii; i++) {
	            pe_x = pageElements[i];
	            pe_x_nn = pe_x.nodeName;
	            if (pe_x_nn == 'BODY' || pe_x_nn == 'HTML' || pe_x_nn == 'SCRIPT') continue;
	            fragment.appendChild(pe_x);
	          }
	          if (SSS.filter && typeof SSS.filter === 'string') {
	            // 功能未完善.
	            var nodes = [];
	            try {
	              nodes = getAllElements(SSS.filter, fragment);
	            } catch (e) {}
	            var nodes_x;
	            for (i = nodes.length - 1; i >= 0; i--) {
	              nodes_x = nodes[i];
	              nodes_x.parentNode.removeChild(nodes_x);
	            }
	          }

	          // lazyImgSrc
	          if (SSS.lazyImgSrc) {
	            handleLazyImgSrc(SSS.lazyImgSrc, fragment);
	          }
	          var imgs;
	          //@ts-ignore
	          if (!window.opera && SSS.a_useiframe && !SSS.a_iloaded) {
	            imgs = getAllElements('css;img[src]', fragment); // 收集所有图片
	          }

	          // 处理下一页内容部分链接是否新标签页打开
	          if (prefs.forceTargetWindow) {
	            const arr = Array.prototype.slice.call(fragment.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])'));
	            arr.forEach(function (elem) {
	              elem.setAttribute('target', '_blank');
	              if (elem.getAttribute('onclick') == 'atarget(this)') {
	                // 卡饭论坛的控制是否在新标签页打开
	                elem.removeAttribute('onclick');
	              }
	            });
	          }

	          /** @type {HTMLElement} */
	          const sepdiv = createSep(lastUrl, cplink, nextlink);
	          let toInsert = sepdiv;
	          if (SSS.a_sepdivDom !== undefined && typeof SSS.a_sepdivDom === 'function') {
	            toInsert = SSS.a_sepdivDom(doc, sepdiv);
	          } else if (pageElements[0] && pageElements[0].tagName === 'TR' && pageElements[pageElements.length - 1].tagName === 'TR') {
	            const insertParent = insertPoint.parentNode;
	            let colNodes = getAllElements('child::tr[1]/child::*[self::td or self::th]', insertParent);
	            if (colNodes.length == 0) {
	              colNodes = getAllElements('child::*[self::td or self::th]', pageElements[0]);
	            }
	            const ncol = [].reduce.call(colNodes, (acc, cur) => acc + (parseInt(cur.getAttribute('colspan'), 10) || 1), 0);
	            toInsert = createDOM('tr', {
	              children: [createDOM('td', {
	                attr: {
	                  colspan: ncol
	                },
	                children: [sepdiv]
	              })]
	            });
	          } else if (pageElements[0] && pageElements[0].tagName === 'TBODY' && pageElements[pageElements.length - 1].tagName === 'TBODY') {
	            // https://bbs.kafan.cn/forum-8-1.html
	            const trs = pageElements[pageElements.length - 1].getElementsByTagName('tr');
	            if (trs) {
	              const ncol = [].reduce.call(trs[trs.length - 1].children, (acc, cur) => acc + (parseInt(cur.getAttribute('colspan'), 10) || 1), 0);
	              toInsert = createDOM('tbody', {
	                children: [createDOM('tr', {
	                  children: [createDOM('td', {
	                    attr: {
	                      colspan: ncol
	                    },
	                    children: [sepdiv]
	                  })]
	                })]
	              });
	            } else {
	              logger.warn("[Super-preloader]", 'No trs found');
	            }
	          }
	          fragment.insertBefore(toInsert, fragment.firstChild);
	          addIntoDoc(fragment);

	          // filter
	          if (SSS.filter && typeof SSS.filter === 'function') {
	            try {
	              SSS.filter(pageElements);
	              logger.debug("[Super-preloader]", 'Execution of filter(pages) succeeded');
	            } catch (e) {
	              logger.error("[Super-preloader]", 'Error executing filter(pages)', e, SSS.filter.toString());
	            }
	          }
	          if (imgs) {
	            // 非opera,在iframeDOM取出数据时需要重载图片.
	            setTimeout(function () {
	              const _imgs = imgs;
	              var i, ii, img;
	              for (i = 0, ii = _imgs.length; i < ii; i++) {
	                img = _imgs[i];
	                const src = img.src;
	                img.src = src;
	              }
	            }, 99);
	          }
	          if (SSS.a_replaceE) {
	            const oldE = getAllElements(SSS.a_replaceE);
	            const oldE_lt = oldE.length;
	            if (oldE_lt > 0) {
	              const newE = getAllElements(SSS.a_replaceE, undefined, doc, win);
	              const newE_lt = newE.length;
	              if (newE_lt == oldE_lt) {
	                // 替换
	                var oldE_x, newE_x;
	                for (i = 0; i < newE_lt; i++) {
	                  oldE_x = oldE[i];
	                  newE_x = newE[i];
	                  newE_x = doc.importNode(newE_x, true);
	                  oldE_x.parentNode.replaceChild(newE_x, oldE_x);
	                }
	              }
	            }
	          }
	          paged += 1;
	          if (ipagesmode && paged >= ipagesnumber) {
	            ipagesmode = false;
	          }
	          floatWO.loadedIcon('hide');
	          if (manualDiv) {
	            manualDiv.style.display = 'none';
	          }
	          //if (goNextImg[0]) goNextImg[0].src = _sep_icons.next;

	          const ev = document.createEvent('Event');
	          ev.initEvent('Super_preloaderPageLoaded', true, false);
	          document.dispatchEvent(ev);
	          if (prefs.enableHistory) {
	            try {
	              window.history.pushState(null, docTitle, cplink);
	            } catch (e) {}
	          }
	          if (paged >= SSS.a_maxpage) {
	            logger.debug("[Super-preloader]", "Reached the set maximum number of page turns ".concat(SSS.a_maxpage));
	            notice('<b>Status</b>:' + 'Reached the set maximum number of page turns:<b style="color:red">' + SSS.a_maxpage + '</b>');
	            removeL();
	            return;
	          }
	          const delayiframe = function delayiframe(fn) {
	            setTimeout(fn, 199);
	          };
	          if (nextlink && !pagedLinks.includes(nextlink)) {
	            // debug('Found the next page link:', nextlink);
	            doc = win = null;
	            if (ipagesmode) {
	              if (SSS.a_useiframe) {
	                // 延时点,firefox,太急会卡-_-!
	                delayiframe(doRequest);
	              } else {
	                doRequest();
	              }
	            } else {
	              working = false;
	              if (SSS.a_useiframe) {
	                delayiframe(afterInsertDo);
	              } else {
	                afterInsertDo();
	              }
	            }
	          } else {
	            logger.error("[Super-preloader]", 'No next page link found.', SSS.nextLink);
	            removeL();
	          }
	        }

	        // 返回,剩余高度是总高度的比值.
	        var relatedObj_0, relatedObj_1;
	        if (SSS.a_relatedObj) {
	          if (_isArray(SSS.a_relatedObj)) {
	            relatedObj_0 = SSS.a_relatedObj[0];
	            relatedObj_1 = SSS.a_relatedObj[1];
	          } else {
	            relatedObj_0 = SSS.a_pageElement;
	            relatedObj_1 = 'bottom';
	          }
	        }
	        function getRemain() {
	          const _cplink = cplink || undefined;
	          const scrolly = window.scrollY;
	          const windowHeight = window.innerHeight;
	          document.body.clientHeight;
	          const obj = getLastVisibleElement(relatedObj_0, _cplink);
	          const scrollH = obj && obj.nodeType == 1 ? obj.getBoundingClientRect()[relatedObj_1] + scrolly : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
	          let exElementHeight = 0;
	          if (SSS.a_excludeElement != undefined) {
	            const exElementNode = getLastVisibleElement(SSS.a_excludeElement, _cplink);
	            if (exElementNode !== null) {
	              exElementHeight = exElementNode.offsetHeight;
	            }
	          }
	          return (scrollH - scrolly - windowHeight - exElementHeight) / windowHeight; // 剩余高度于页面总高度的比例.
	        }
	        let pause = false;
	        if (prefs.pauseA) {
	          const Sbutton = ['target', 'shiftKey', 'ctrlKey', 'altKey'];
	          const ltype = prefs.mouseA ? 'mousedown' : 'dblclick';
	          const button_1 = Sbutton[prefs.Pbutton[0]];
	          const button_2 = Sbutton[prefs.Pbutton[1]];
	          const button_3 = Sbutton[prefs.Pbutton[2]];
	          const pauseIt = function pauseIt() {
	            pause = !pause;
	            if (prefs.stop_ipage) ipagesmode = false;
	            if (pause) {
	              floatWO.updateColor('Apause');
	              if (userLang === 'zh_CN') {
	                notice('<b>状态</b>:' + '自动翻页<span style="color:red!important;"><b> 暂停</b></span>.', prefs.disappearDelay);
	              } else {
	                notice('<b>Status</b>:' + 'Autopagger<span style="color:red!important;"><b> Pause</b></span>.', prefs.disappearDelay);
	              }
	            } else {
	              floatWO.updateColor('autopager');
	              floatWO.CmodeIcon('hide');
	              if (userLang === 'zh_CN') {
	                notice('<b>状态</b>:' + '自动翻页<span style="color:red!important;"><b> 启用</b></span>.');
	              } else {
	                notice('<b>Status</b>:' + 'Autopagger<span style="color:red!important;"><b> Enable</b></span>.');
	              }
	            }
	            scroll();
	          };
	          var Sctimeout;
	          const _clearPause = function clearPause() {
	            clearTimeout(Sctimeout);
	            document.removeEventListener('mouseup', _clearPause, false);
	          };
	          const pausehandler = function pausehandler(e) {
	            if (!SSS.a_manualA || ipagesmode) {
	              if (e[button_1] && e[button_2] && e[button_3]) {
	                if (e.type == 'mousedown') {
	                  document.addEventListener('mouseup', _clearPause, false);
	                  Sctimeout = setTimeout(pauseIt, prefs.Atimeout);
	                } else {
	                  pauseIt();
	                }
	              }
	            }
	          };
	          document.addEventListener(ltype, pausehandler, false);
	          remove.push(function () {
	            document.removeEventListener(ltype, pausehandler, false);
	          });
	        }
	        function scroll() {
	          if (!pause && !working && (getRemain() <= SSS.a_remain || ipagesmode)) {
	            if (doc) {
	              // 有的话,就插入到文档.
	              beforeInsertIntoDoc();
	            } else {
	              // 否则就请求文档.
	              scrollDo();
	            }
	          }
	        }
	        var timeout;
	        function timeoutfn() {
	          clearTimeout(timeout);
	          timeout = setTimeout(scroll, 100);
	        }
	        window.addEventListener('scroll', timeoutfn, false);
	        remove.push(function () {
	          window.removeEventListener('scroll', timeoutfn, false);
	        });
	        autoPO = {
	          startipages: async function startipages(value) {
	            if (value > 0) {
	              ipagesmode = true;
	              ipagesnumber = value + paged;
	              notice('<b>Status</b>:' + 'Current number of pages turned: <b>' + paged + '</b>,' + 'Continue to turn page <b style="color:red!important;">' + ipagesnumber + '</b>');
	              if (SSS.a_manualA) await insertedIntoDoc();
	              scroll();
	            }
	          }
	        };
	      }

	      /**
	       * prefetcher
	       * @param {IRuntimeRule} SSS a rule
	       * @param {*} floatWO float window object
	       * @returns {void}
	       */
	      function prefetcher(SSS, floatWO) {
	        function cContainer() {
	          const div = document.createElement('div');
	          /** @type {HTMLElement} */
	          //@ts-ignore
	          const div2 = div.cloneNode(false);
	          const hr = document.createElement('hr');
	          div.style.cssText = '\
                margin:3px!important;\
                padding:5px!important;\
                border-radius:8px!important;\
                -moz-border-radius:8px!important;\
                border-bottom:1px solid #E30005!important;\
                border-top:1px solid #E30005!important;\
                background-color:#F5F5F5!important;\
                float:none!important;\
                display:none!important;\
            ';
	          div.title = 'Prefetched content';
	          div2.style.cssText = '\
                text-align:left!important;\
                color:red!important;\
                font-size:13px!important;\
                float:none!important;\
                display:block!important;\
                position:static!important;\
            ';
	          hr.style.cssText = '\
                display:block!important;\
                border:1px inset #000!important;\
            ';
	          div.appendChild(div2);
	          div.appendChild(hr);
	          document.body.appendChild(div);
	          return {
	            div: div,
	            div2: div2
	          };
	        }
	        floatWO.updateColor('prefetcher');
	        floatWO.updateColor('loading');
	        floatWO.CmodeIcon('show');
	        if (SSS.useiframe) {
	          const iframe = document.createElement('iframe');
	          iframe.name = 'superpreloader-iframe';
	          iframe.src = String(nextlink);
	          iframe.width = '100%';
	          iframe.height = '0';
	          iframe.frameBorder = '0';
	          iframe.style.cssText = '\
                margin:0!important;\
                padding:0!important;\
            ';
	          iframe.addEventListener('load', function (e) {
	            //@ts-ignore
	            const body = e.currentTarget.contentDocument.body;
	            if (body && body.firstChild) {
	              floatWO.updateColor('prefetcher');
	              floatWO.CmodeIcon('hide');
	              floatWO.loadedIcon('show');
	              //@ts-ignore
	              e.currentTarget.removeEventListener('load', arguments.callee, false);
	              if (SSS.lazyImgSrc) {
	                handleLazyImgSrc(SSS.lazyImgSrc, body);
	              }
	            }
	          }, false);
	          if (SSS.viewcontent) {
	            const container = cContainer();
	            container.div.style.display = 'block';
	            container.div2.innerHTML = 'iframe full prefetch: ' + '<br />' + 'Prefetch URL: ' + '<b>' + nextlink + '</b>';
	            iframe.height = '300px';
	            container.div.appendChild(iframe);
	          } else {
	            document.body.appendChild(iframe);
	          }
	        } else {
	          const reqConf = {
	            headers: SSS.a_headers ? SSS.a_headers : {
	              Referer: cplink
	            }
	          };
	          got.get(nextlink, reqConf).then(res => {
	            const doc = createDocumentByString(res.data);
	            if (!doc) {
	              logger.error("[Super-preloader]", 'Document object creation failed!');
	              return;
	            }
	            if (SSS.lazyImgSrc) {
	              handleLazyImgSrc(SSS.lazyImgSrc, doc);
	            }
	            const images = doc.images;
	            const isl = images.length;
	            var img;
	            const iarray = [];
	            var i;
	            const existSRC = {};
	            var isrc;
	            for (i = isl - 1; i >= 0; i--) {
	              isrc = images[i].getAttribute('src');
	              if (!isrc || existSRC[isrc]) {
	                continue;
	              } else {
	                existSRC[isrc] = true;
	              }
	              img = document.createElement('img');
	              img.src = isrc;
	              iarray.push(img);
	            }
	            var container = cContainer();
	            var div = container.div;
	            i = iarray.length;
	            container.div2.innerHTML = 'Number of prefetched pictures: ' + '<b>' + i + '</b>' + '<br />' + 'Prefetch URL:' + '<b>' + nextlink + '</b>';
	            logger.info("[Super-preloader]", 'Number of prefetched pictures: ' + i + 'Prefetch URL: ' + nextlink);
	            for (i -= 1; i >= 0; i--) {
	              div.appendChild(iarray[i]);
	            }
	            if (SSS.viewcontent) {
	              container.div.style.display = 'block';
	            }
	            floatWO.updateColor('prefetcher');
	            floatWO.loadedIcon('show');
	            floatWO.CmodeIcon('hide');
	          });
	        }
	      }

	      // 执行开始..///////////////////

	      // 分析黑名单
	      const blackList_re = new RegExp(blackList.map(x => {
	        if (x.substring(0, 3).toLowerCase() == 're:') {
	          return x.substring(4);
	        } else {
	          return wildcardToRegExpStr(x);
	        }
	      }).join('|'));
	      if (blackList_re.test(url)) {
	        logger.debug("[Super-preloader]", 'Matched blacklist, JS execution stopped');
	        return;
	      }

	      // 是否在frame上加载..
	      if (prefs.DisableI && window.self != window.parent) {
	        const isReturn = !_find(DIExclude, function (x) {
	          //@ts-ignore
	          return x[1] && x[2].test(url);
	        });
	        if (isReturn) {
	          logger.debug("[Super-preloader]", "The page with url:".concat(url, " is not a top-level window, JS execution stopped"));
	          return;
	        }
	      }
	      logger.debug("[Super-preloader]", "Page url is: ".concat(url, ", JS loaded successfully"));

	      // 第一阶段..分析高级模式..
	      if (prefs.disableBuiltinRules) {
	        logger.warn("[Super-preloader]", 'Builtin js rules are disabled');
	      } else {
	        SSRules = SSRules.concat(jsSiteRule);
	      }
	      if (prefs.disableBuiltinSubscriptionRules) {
	        logger.warn("[Super-preloader]", 'Remote json rules are disabled');
	      } else {
	        SSRules = SSRules.concat(jsonRule);
	      }
	      if (!prefs.disableBuiltinRules) {
	        SSRules = SSRules.concat(jsGeneralRule);
	      }
	      if (!prefs.numOfRule || prefs.numOfRule != SSRules.length) {
	        prefs.numOfRule = SSRules.length;
	        GM.setValue('prefs', prefs);
	      }

	      // 重要的变量两枚.
	      /** @type {Array<string|HTMLElement>} */
	      const pagedLinks = [document.location.href];
	      /** @type {HTMLElement|string} */
	      var nextlinkElem;
	      /** @type {string} */
	      var nextlink;
	      /** @type {HTMLElement|string} */
	      var prelink;

	      //= ==============

	      /**@type {IRuntimeRule} */
	      let SSS = {};
	      const findCurSiteInfo = async function findCurSiteInfo() {
	        const SIIAD = SITEINFO_D.autopager;
	        var Rurl;
	        const ii = SSRules.length;
	        if (userLang === 'zh_CN') {
	          logger.debug("[Super-preloader]", "\u9AD8\u7EA7\u89C4\u5219\u6570\u76EE:".concat(ii));
	          logger.debug("[Super-preloader]", "Number of rules > ".concat(ii - jsonRule.length, " from other sources, such as: wedata.net"));
	        } else {
	          logger.debug("[Super-preloader]", "Number of advanced rules:".concat(ii));
	        }
	        for (var i = 0; i < ii; i++) {
	          const SII = SSRules[i];
	          if (SII.autopager && SII.autopager.ip) {
	            if (SII.autopager.ip.indexOf(serverIp) < 0) {
	              continue;
	            }
	          }
	          Rurl = toRE(SII.url);
	          if (Rurl.test(url)) {
	            if (userLang === 'zh_CN') {
	              logger.debug("[Super-preloader]", 'Find current site rules:', SII);
	              logger.debug("[Super-preloader]", "\u89C4\u5219ID: ".concat(i + 1));
	            } else {
	              logger.debug("[Super-preloader]", 'Find rule for this website:', SII);
	              logger.debug("[Super-preloader]", "Rule ID: ".concat(i + 1));
	            }

	            // 运行规则的 startFilter
	            if (SII.autopager && SII.autopager.startFilter) {
	              try {
	                await SII.autopager.startFilter(document, window);
	                logger.debug("[Super-preloader]", 'startFilter executed successfully');
	              } catch (e) {
	                logger.error("[Super-preloader]", 'Error executing startFilter', e);
	              }
	            }
	            if (SII.nextLink === 'null;') {
	              logger.debug("[Super-preloader]", 'Find the rule for a site without nextpage', SII);
	              SSS.hasRule = false;
	              break;
	            }
	            nextlinkElem = getElement(SII.nextLink || 'auto;');
	            if (!nextlinkElem) {
	              logger.warn("[Super-preloader]", 'Could not find the next page link, continue searching for other rules, skiping rule:', SII);
	              continue;
	            }
	            // extract next page link from an a link
	            nextlink = getFullHref(nextlinkElem);
	            if (nextlink === document.location.href) {
	              nextlinkElem = null;
	              continue;
	            }
	            if (SII.preLink && SII.preLink != 'auto;') {
	              // 如果设定了具体的preLink
	              prelink = getElement(SII.preLink);
	            } else {
	              if (prefs.autoGetPreLink) {
	                prelink = getElement('auto;');
	              }
	            }
	            SSS = {};
	            SSS.Rurl = String(Rurl);
	            SSS.nextLink = SII.nextLink || 'auto;';
	            SSS.viewcontent = SII.viewcontent;
	            SSS.enable = SII.enable === undefined ? SITEINFO_D.enable : SII.enable;
	            SSS.useiframe = SII.useiframe === undefined ? SITEINFO_D.useiframe : SII.useiframe;
	            if (SII.pageElement) {
	              // 如果是Oautopager的规则..
	              if (typeof SII.autopager !== 'object') SII.autopager = {};
	              SII.autopager.pageElement = SII.pageElement;
	              if (!SII.autopager.useiframe) SII.autopager.useiframe = SII.useiframe;
	              if (SII.preLink) SII.autopager.preLink = SII.preLink;
	              if (SII.insertBefore) SII.autopager.HT_insert = [SII.insertBefore, 1];
	            }

	            // 自动翻页设置.
	            const SIIA = SII.autopager;
	            if (SIIA) {
	              SSS.a_pageElement = SIIA.pageElement;
	              if (!SSS.a_pageElement) break;
	              SSS.a_manualA = SIIA.manualA === undefined ? SIIAD.manualA : SIIA.manualA;
	              SSS.a_enable = SIIA.enable === undefined ? SIIAD.enable : SIIA.enable;
	              SSS.a_useiframe = SIIA.useiframe === undefined ? SIIAD.useiframe : SIIA.useiframe;
	              SSS.a_mutationObserver = SSS.a_useiframe ? SIIA.mutationObserver === undefined ? null : SIIA.mutationObserver : null;
	              SSS.a_newIframe = SIIA.newIframe === undefined ? SIIAD.newIframe : SIIA.newIframe;
	              SSS.a_iloaded = SIIA.iloaded === undefined ? SIIAD.iloaded : SIIA.iloaded;
	              SSS.a_itimeout = SIIA.itimeout === undefined ? SIIAD.itimeout : SIIA.itimeout;
	              SSS.a_remain = SIIA.remain === undefined ? SIIAD.remain : SIIA.remain;
	              SSS.a_maxpage = SIIA.maxpage === undefined ? SIIAD.maxpage : SIIA.maxpage;
	              SSS.a_separator = SIIA.separator === undefined ? SIIAD.separator : SIIA.separator;
	              SSS.a_sepdivDom = SIIA.sepdivDom === undefined ? undefined : SIIA.sepdivDom;
	              SSS.a_separatorReal = SIIA.separatorReal === undefined ? SIIAD.separatorReal : SIIA.separatorReal;
	              SSS.a_replaceE = SIIA.replaceE;
	              SSS.a_HT_insert = SIIA.HT_insert;
	              SSS.a_relatedObj = SIIA.relatedObj === undefined ? SIIAD.relatedObj : SIIA.relatedObj;
	              SSS.a_ipages = SIIA.ipages === undefined ? SIIAD.ipages : SIIA.ipages;

	              // new
	              SSS.filter = SII.filter || SIIA.filter; // 新增了函数的形式，原来的功能是移除 pageElement
	              const documentFilter = SII.documentFilter || SIIA.documentFilter;
	              if (documentFilter === 'startFilter') {
	                SSS.a_documentFilter = doc => SII.autopager.startFilter(doc);
	              } else if (typeof documentFilter === 'function') {
	                SSS.a_documentFilter = documentFilter;
	              } else {
	                SSS.a_documentFilter = undefined;
	              }
	              SSS.a_scriptFilter = SIIA.scriptFilter === undefined ? '' : SIIA.scriptFilter;
	              SSS.a_stylish = SII.stylish || SIIA.stylish;
	              SSS.lazyImgSrc = SIIA.lazyImgSrc;
	              SSS.a_headers = SIIA.headers === undefined ? undefined : SIIA.headers; // custom header for XHRLoaded
	              SSS.a_reload = SIIA.reload === undefined ? SIIAD.reload : SIIA.reload; // force reload iframe
	              SSS.a_sandbox = SIIA.sandbox === undefined ? SIIAD.sandbox : SIIA.sandbox;

	              // 在翻页的时候会有一些其他元素占据了页面的高度，导致翻页不精准。
	              // 比如正文下面的推荐文章列表（占据超过整个页面10%就很难受）
	              SSS.a_excludeElement = SIIA.excludeElement;
	            }

	            // 检验是否存在内容
	            const pageElement = getElement(SSS.a_pageElement);
	            if (!pageElement || Array.isArray(pageElement) && pageElement.length === 0) {
	              nextlinkElem = null;
	              logger.error("[Super-preloader]", 'Could not find content, skiping rule:', SII, 'Continue to search for other rules.');
	              continue;
	            }
	            SSS.hasRule = true;
	            break;
	          }
	        }
	        if (!SSS.hasRule) {
	          // 自动搜索.
	          if (!autoMatch.keyMatch) {
	            logger.warn("[Super-preloader]", 'Auto match is disabled');
	          } else {
	            logger.warn("[Super-preloader]", 'No rules are found. Auto match starts');
	            nextlinkElem = autoGetLink();
	            if (nextlinkElem) {
	              // 强制模式.
	              const FA = autoMatch.FA;
	              SSS.Rurl = window.localStorage ? 'am:' + (url.match(/^https?:\/\/[^:]*\//i) || [])[0] : 'am:automatch';
	              SSS.enable = true;
	              SSS.nextLink = 'auto;';
	              SSS.viewcontent = autoMatch.viewcontent;
	              SSS.useiframe = autoMatch.useiframe || SITEINFO_D.autopager.useiframe;
	              SSS.a_force = true;
	              SSS.a_manualA = FA.manualA;
	              SSS.a_enable = FA.enable || SITEINFO_D.autopager.force_enable; // Force join is enabled when this becomes true
	              SSS.a_useiframe = FA.useiframe || SITEINFO_D.useiframe;
	              SSS.a_iloaded = FA.iloaded;
	              SSS.a_itimeout = FA.itimeout;
	              SSS.a_remain = FA.remain;
	              SSS.a_maxpage = FA.maxpage;
	              SSS.a_separator = FA.separator;
	              SSS.a_ipages = FA.ipages;
	            }
	          }
	        }

	        // 如果规则没 lazyImgSrc，设置默认值
	        if (!SSS.lazyImgSrc) {
	          SSS.lazyImgSrc = prefs.lazyImgSrc;
	        }
	        logger.debug("[Super-preloader]", "Total time spent on searching for advanced rules and automatic matching: ".concat(new Date().getTime() - startTime.getTime(), "ms"));
	      };
	      findCurSiteInfo().then(() => {
	        // 上下页都没有找到啊
	        if (!nextlinkElem && !prelink) {
	          logger.warn("[Super-preloader]", "No related links found, JS execution stopped. Total time spent: ".concat(new Date().getTime() - startTime.getTime(), "ms"));
	          return;
	        } else if (!nextlink) {
	          logger.error("[Super-preloader]", 'The link to the next page does not exist, JS cannot continue.');
	          logger.debug("[Super-preloader]", "Total time spent:".concat(new Date().getTime() - startTime.getTime(), "ms"));
	          return;
	        } else {
	          logger.debug("[Super-preloader]", 'Previous link element:', prelink);
	          logger.debug("[Super-preloader]", 'Next link element:', nextlinkElem);
	          nextlink = elemToHref(nextlinkElem);
	          logger.debug("[Super-preloader]", 'Next link:', nextlink);
	          //@ts-ignore
	          prelink = prelink ? prelink.href || prelink : undefined;
	        }
	        const keyBinding = {
	          go: function go() {
	            if (typeof nextlink === 'string') window.location.href = nextlink;
	          },
	          back: function back() {
	            //fixme
	            if (!prelink) getElement('auto;');
	            if (typeof prelink === 'string') window.location.href = prelink;
	          },
	          register: function register(/**@type {IPrefs} */prefs) {
	            if (prefs.arrowKeyPage) {
	              logger.debug("[Super-preloader]", 'Adding left and right arrow keys to autopager listener.');
	              document.addEventListener('keyup', e => {
	                //@ts-ignore
	                const tarNN = e.target.nodeName;
	                if (tarNN != 'BODY' && tarNN != 'HTML') return;

	                // check is a combo pressed
	                if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
	                  return;
	                }
	                switch (e.keyCode) {
	                  case 37:
	                    this.back();
	                    break;
	                  case 39:
	                    this.go();
	                    break;
	                }
	              }, false);

	              // 监听下一页事件.
	              logger.debug("[Super-preloader]", '添加鼠标手势翻页监听');
	              document.addEventListener('superPreloader.go', () => {
	                this.go();
	              }, false);

	              // 监听下一页事件.
	              document.addEventListener('superPreloader.back', () => {
	                this.back();
	              }, false);
	            }
	          }
	        };
	        keyBinding.register(prefs);
	        loadLocalSetting(SSS);
	        if (!SSS.enable) {
	          logger.warn("[Super-preloader]", 'This rule is disabled, script execution is stopped');
	          logger.debug("[Super-preloader]", "Total time spent:".concat(new Date().getTime() - startTime.getTime(), "ms"));
	          return;
	        }
	        if (!SSS.hasRule) {
	          SSS.a_force = true;
	        }
	        if (SSS.a_force) {
	          SSS.a_pageElement = '//body/*';
	          SSS.a_HT_insert = undefined;
	          SSS.a_relatedObj = undefined;
	        }
	        if (prefs.floatWindow) {
	          logger.debug("[Super-preloader]", 'Creating a floating window');
	          floatWindow(SSS);
	          const floatWindowWidth = getFloatWindowWith();
	          displace(document.getElementById('sp-fw-container'), {
	            handle: document.getElementById('sp-fw-rect'),
	            customMove: (el, x, y) => {
	              delete el.style.left;
	              delete el.style.bottom;
	              let right = document.body.clientWidth - floatWindowWidth - x;
	              if (right < 0) {
	                right = 0;
	              } else if (right > window.innerWidth - floatWindowWidth) {
	                right = window.innerWidth - floatWindowWidth;
	              }
	              let top = y;
	              if (top > window.innerHeight - document.getElementById('sp-fw-rect').scrollHeight) {
	                top = window.innerHeight - document.getElementById('sp-fw-rect').scrollHeight;
	              } else if (top < 0) {
	                top = 0;
	              }
	              el.style.right = "".concat(right, "px");
	              el.style.top = "".concat(top, "px");
	            },
	            onMouseUp: el => {
	              prefs.FW_offset[0] = parseInt(el.style.top.replace('px', ''), 10);
	              prefs.FW_offset[1] = parseInt(el.style.right.replace('px', ''), 10);
	              prefs.FW_position = 2;
	              GM.setValue('prefs', prefs);
	            }
	          });
	          document.getElementById('sp-fw-container').style.position = 'fixed';
	        }
	        logger.debug("[Super-preloader]", "Total time spent:".concat(new Date().getTime() - startTime.getTime(), "ms"));

	        // 预读或者翻页.
	        if (SSS.a_enable) {
	          logger.debug("[Super-preloader]", 'Initializing, autopager mode.');
	          autopager(SSS, floatWO);
	        } else {
	          logger.debug("[Super-preloader]", 'Initializing, prefetch mode.');
	          prefetcher(SSS, floatWO);
	        }
	      });

	      // 获取单个元素,混合
	      /**
	       *
	       * @param {string|Function|Array|IHrefIncObject} selector selector
	       * @param {HTMLElement|Document=} contextNode element
	       * @param {Document=} doc document
	       * @param {Window=} win window
	       * @returns {HTMLElement} element
	       */
	      function getElement(selector, contextNode, doc, win) {
	        const _cplink = cplink;
	        var ret;
	        if (!selector) return ret;
	        doc = doc || document;
	        win = win || window;
	        contextNode = contextNode || doc;
	        if (typeof selector === 'string') {
	          if (selector.search(/^css;/i) === 0) {
	            ret = getElementByCSS(selector.slice(4), contextNode);
	          } else if (selector.toLowerCase() == 'auto;') {
	            ret = autoGetLink(doc);
	          } else {
	            ret = getElementByXpath(selector, contextNode, doc);
	          }
	        } else if (typeof selector === 'function') {
	          ret = selector(doc, win, _cplink);
	        } else if (selector instanceof Array) {
	          for (var i = 0, l = selector.length; i < l; i++) {
	            ret = getElement(selector[i], contextNode, doc, win);
	            if (ret) {
	              break;
	            }
	          }
	        } else {
	          ret = hrefInc(selector, doc, win, _cplink);
	        }
	        return ret;
	      }
	      var docChecked;
	      /**
	       *
	       * @param {Document=} doc document
	       * @param {Window=} win window
	       * @returns {HTMLElement|null} a
	       */
	      function autoGetLink(doc, win) {
	        if (!autoMatch.keyMatch) return null;
	        //@ts-ignore
	        if (!parseKWRE.done) {
	          parseKWRE();
	          //@ts-ignore
	          parseKWRE.done = true;
	        }
	        const startTime = new Date();
	        doc = doc || document;
	        if (doc == document) {
	          // 当前文档,只检查一次.
	          if (docChecked) {
	            // @ts-ignore
	            return nextlink;
	          }
	          docChecked = true;
	        }
	        const _prePageKey = prePageKey;
	        const _nextPageKey = nextPageKey;
	        const _nPKL = nextPageKey.length;
	        const _pPKL = prePageKey.length;
	        const _getFullHref = getFullHref;
	        const _getAllElementsByXpath = getAllElementsByXpath;
	        const _Number = Number;
	        const _domain_port = domain_port;
	        const alllinks = doc.links;
	        const alllinksl = alllinks.length;
	        const curLHref = cplink;
	        var _nextlink;
	        var _prelink;
	        //@ts-ignore
	        if (!autoGetLink.checked) {
	          // 第一次检查
	          _nextlink = nextlink;
	          _prelink = prelink;
	        } else {
	          _prelink = true;
	        }
	        const DCEnable = autoMatch.digitalCheck;
	        const DCRE = /^\s*\D{0,1}(\d+)\D{0,1}\s*$/;
	        var i, a, atext, numtext;
	        var aP;
	        var initSD;
	        var searchD = 1;
	        var preS1;
	        var preS2;
	        var searchedD;
	        var pSNText;
	        var preSS;
	        var nodeType;
	        var nextS1, nextS2, nSNText, nextSS;
	        var aimgs, j, jj, aimg_x, xbreak, k, keytext;
	        function finalCheck(a, type) {
	          var ahref = a.getAttribute('href'); // 在chrome上当是非当前页面文档对象的时候直接用a.href访问,不返回href
	          if (ahref == '#') {
	            return null;
	          }
	          ahref = _getFullHref(ahref); // 从相对路径获取完全的href;

	          // 3个条件:http协议链接,非跳到当前页面的链接,非跨域
	          if (/^https?:/i.test(ahref) && ahref.replace(/#.*$/, '') != curLHref && ahref.match(/https?:\/\/([^/]+)/)[1] == _domain_port) {
	            logger.debug("[Super-preloader]", type == 'pre' ? 'previous' : 'next' + 'match:', atext);
	            return a; // 返回对象A
	            // return ahref;
	          }
	        }
	        logger.debug("[Super-preloader]", "Number of full document links:".concat(alllinksl));
	        for (i = 0; i < alllinksl; i++) {
	          if (_nextlink && _prelink) break;
	          a = alllinks[i];
	          if (!a) continue; // undefined跳过
	          // links集合返回的本来就是包含href的a元素..所以不用检测
	          // if(!a.hasAttribute("href"))continue;
	          atext = a.textContent;
	          if (atext) {
	            if (DCEnable) {
	              numtext = atext.match(DCRE);
	              if (numtext) {
	                // 是不是纯数字
	                // debug(numtext);
	                numtext = numtext[1];
	                aP = a;
	                initSD = 0;
	                if (!_nextlink) {
	                  preS1 = a.previousSibling;
	                  preS2 = a.previousElementSibling;
	                  while (!(preS1 || preS2) && initSD < searchD) {
	                    aP = aP.parentNode;
	                    if (aP) {
	                      preS1 = aP.previousSibling;
	                      //@ts-ignore
	                      preS2 = aP.previousElementSibling;
	                    }
	                    initSD++;
	                  }
	                  searchedD = initSD > 0;
	                  if (preS1 || preS2) {
	                    pSNText = preS1 ? preS1.textContent.match(DCRE) : '';
	                    if (pSNText) {
	                      preSS = preS1;
	                    } else {
	                      pSNText = preS2 ? preS2.textContent.match(DCRE) : '';
	                      preSS = preS2;
	                    }
	                    if (pSNText) {
	                      pSNText = pSNText[1];
	                      if (_Number(pSNText) == _Number(numtext) - 1) {
	                        nodeType = preSS.nodeType;
	                        if (nodeType == 3 || nodeType == 1 && (searchedD ? _getAllElementsByXpath('./descendant-or-self::a[@href]', preSS, doc).length === 0 : !preSS.hasAttribute('href') || _getFullHref(preSS.getAttribute('href')) == curLHref)) {
	                          _nextlink = finalCheck(a, 'next');
	                        }
	                        continue;
	                      }
	                    }
	                  }
	                }
	                if (!_prelink) {
	                  nextS1 = a.nextSibling;
	                  nextS2 = a.nextElementSibling;
	                  while (!(nextS1 || nextS2) && initSD < searchD) {
	                    aP = aP.parentNode;
	                    if (aP) {
	                      nextS1 = a.nextSibling;
	                      nextS2 = a.nextElementSibling;
	                    }
	                    initSD++;
	                  }
	                  searchedD = initSD > 0;
	                  if (nextS1 || nextS2) {
	                    nSNText = nextS1 ? nextS1.textContent.match(DCRE) : '';
	                    if (nSNText) {
	                      nextSS = nextS1;
	                    } else {
	                      nSNText = nextS2 ? nextS2.textContent.match(DCRE) : '';
	                      nextSS = nextS2;
	                    }
	                    if (nSNText) {
	                      nSNText = nSNText[1];
	                      if (_Number(nSNText) == _Number(numtext) + 1) {
	                        nodeType = nextSS.nodeType;
	                        if (nodeType == 3 ||
	                        // @ts-ignore
	                        nodeType == 1 && (searchedD ? _getAllElementsByXpath('./descendant-or-self::a[@href]', nextSS, doc).length === 0 : !nextSS.hasAttribute('href') || _getFullHref(nextSS.getAttribute('href')) == curLHref)) {
	                          _prelink = finalCheck(a, 'pre');
	                        }
	                      }
	                    }
	                  }
	                }
	                continue;
	              }
	            }
	          } else {
	            atext = a.title;
	          }
	          if (!atext) {
	            aimgs = a.getElementsByTagName('img');
	            for (j = 0, jj = aimgs.length; j < jj; j++) {
	              aimg_x = aimgs[j];
	              atext = aimg_x.alt || aimg_x.title;
	              if (atext) break;
	            }
	          }
	          if (!atext) continue;
	          if (!_nextlink) {
	            xbreak = false;
	            for (k = 0; k < _nPKL; k++) {
	              keytext = _nextPageKey[k];
	              //@ts-ignore
	              if (!keytext.test(atext)) continue;
	              _nextlink = finalCheck(a, 'next');
	              xbreak = true;
	              break;
	            }
	            if (xbreak || _nextlink) continue;
	          }
	          if (!_prelink) {
	            for (k = 0; k < _pPKL; k++) {
	              keytext = _prePageKey[k];
	              //@ts-ignore
	              if (!keytext.test(atext)) continue;
	              _prelink = finalCheck(a, 'pre');
	              break;
	            }
	          }
	        }
	        logger.debug("[Super-preloader]", "Time to search ".concat(i, " links:").concat(new Date().getTime() - startTime.getTime(), "ms"));
	        //@ts-ignore
	        if (!autoGetLink.checked) {
	          // 只在第一次检测的时候,抛出上一页链接.
	          prelink = _prelink;
	          //@ts-ignore
	          autoGetLink.checked = true;
	        }
	        return _nextlink;
	      }
	      function parseKWRE() {
	        function modifyPageKey(name, pageKey, pageKeyLength) {
	          function strMTE(str) {
	            return str.replace(/\\/g, '\\\\').replace(/\+/g, '\\+').replace(/\./g, '\\.').replace(/\?/g, '\\?').replace(/\{/g, '\\{').replace(/\}/g, '\\}').replace(/\[/g, '\\[').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/\$/g, '\\$').replace(/\*/g, '\\*').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\|/g, '\\|').replace(/\//g, '\\/');
	          }
	          const pfwordl = autoMatch.pfwordl;
	          const sfwordl = autoMatch.sfwordl;
	          const RE_enable_a = pfwordl[name].enable;
	          const RE_maxPrefix = pfwordl[name].maxPrefix;
	          const RE_character_a = pfwordl[name].character;
	          const RE_enable_b = sfwordl[name].enable;
	          const RE_maxSubfix = sfwordl[name].maxSubfix;
	          const RE_character_b = sfwordl[name].character;
	          var plwords, slwords, rep;
	          plwords = RE_maxPrefix > 0 ? '[' + (RE_enable_a ? strMTE(RE_character_a.join('')) : '.') + ']{0,' + RE_maxPrefix + '}' : '';
	          plwords = '^\\s*' + plwords;
	          slwords = RE_maxSubfix > 0 ? '[' + (RE_enable_b ? strMTE(RE_character_b.join('')) : '.') + ']{0,' + RE_maxSubfix + '}' : '';
	          slwords = slwords + '\\s*$';
	          rep = autoMatch.cases ? '' : 'i';
	          for (var i = 0; i < pageKeyLength; i++) {
	            pageKey[i] = new RegExp(plwords + strMTE(pageKey[i]) + slwords, rep);
	          }
	          return pageKey;
	        }

	        // 转成正则.
	        prePageKey = modifyPageKey('previous', prePageKey, prePageKey.length);
	        nextPageKey = modifyPageKey('next', nextPageKey, nextPageKey.length);
	      }
	    }

	    // By lastDream2013 略加修改，原版只能用于 Firefox
	    function getRalativePageStr(lastUrl, currentUrl, nextUrl) {
	      const getRalativePageNumArray = function getRalativePageNumArray(lasturl, url) {
	        if (!lasturl || !url) {
	          return [0, 0];
	        }
	        const lasturlarray = lasturl.split(/-|\.|&|\/|=|#|\?/);
	        const urlarray = url.split(/-|\.|&|\/|=|#|\?/);
	        var url_info;
	        var lasturl_info;
	        // 一些 url_info 为 p1,p2,p3 之类的
	        const handleInfo = function handleInfo(s) {
	          if (s) {
	            return s.replace(/^p/, '');
	          }
	          return s;
	        };
	        while (urlarray.length !== 0) {
	          url_info = handleInfo(urlarray.pop());
	          lasturl_info = handleInfo(lasturlarray.pop());
	          if (url_info != lasturl_info) {
	            if (/[0-9]+/.test(url_info) && (url_info == '2' || /[0-9]+/.test(lasturl_info))) {
	              return [parseInt(lasturl_info) || 1, parseInt(url_info)];
	            }
	          }
	        }
	        return [0, 0];
	      };
	      var relativeOff;

	      // 论坛和搜索引擎网页显示实际页面信息
	      var relativePageNumarray = [];
	      if (nextUrl) {
	        relativePageNumarray = getRalativePageNumArray(currentUrl, nextUrl);
	      } else {
	        relativePageNumarray = getRalativePageNumArray(lastUrl, currentUrl);
	        relativeOff = relativePageNumarray[1] - relativePageNumarray[0]; // 用的上一页的相对信息比较的，要补充差值……
	        relativePageNumarray[1] = relativePageNumarray[1] + relativeOff;
	        relativePageNumarray[0] = relativePageNumarray[0] + relativeOff;
	      }

	      // console.log('[获取实际页数] ', '要比较的3个页数：',arguments, '，得到的差值:', relativePageNumarray);
	      if (isNaN(relativePageNumarray[0]) || isNaN(relativePageNumarray[1])) {
	        return '';
	      }
	      var realPageSiteMatch = false;
	      relativeOff = relativePageNumarray[1] - relativePageNumarray[0];
	      // 上一页与下一页差值为1，并最大数值不超过10000(一般论坛也不会超过这么多页……)
	      if (relativeOff === 1 && relativePageNumarray[1] < 10000) {
	        realPageSiteMatch = true;
	      }

	      // 上一页与下一页差值不为1，但上一页与下一页差值能被上一页与下一面所整除的，有规律的页面
	      if (!realPageSiteMatch && relativeOff !== 1) {
	        if (relativePageNumarray[1] % relativeOff === 0 && relativePageNumarray[0] % relativeOff === 0) {
	          realPageSiteMatch = true;
	        }
	      }
	      if (!realPageSiteMatch) {
	        // 不满足以上条件，再根据地址特征来匹配
	        var sitePattern;
	        for (var i = 0, length = REALPAGE_SITE_PATTERN.length; i < length; i++) {
	          sitePattern = REALPAGE_SITE_PATTERN[i];
	          if (currentUrl.toLocaleLowerCase().indexOf(sitePattern) >= 0) {
	            realPageSiteMatch = true;
	            break;
	          }
	        }
	      }
	      var relativePageStr;
	      if (realPageSiteMatch) {
	        // 如果匹配就显示实际网页信息
	        if (userLang === 'zh_CN') {
	          if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
	            // 一般是搜索引擎的第xx - xx项……
	            relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + ' - ' + relativePageNumarray[1] + '</span> 项 ]';
	          } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
	            // 一般的翻页数，差值应该是1
	            relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + '</span> 页 ]';
	          } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
	            // 找不到的话……
	            relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">实际网页结束</span> ]';
	          }
	        } else {
	          if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
	            // 一般是搜索引擎的第xx - xx项……
	            relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + ' - ' + relativePageNumarray[1] + '</span> ]';
	          } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
	            // 一般的翻页数，差值应该是1
	            relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + '</span> ]';
	          } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
	            // 找不到的话……
	            relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">Actual elements ends</span> ]';
	          }
	        }
	      } else {
	        relativePageStr = '';
	      }
	      return relativePageStr || '';
	    }
	  }).catch(err => {
	    console.log(err);
	  });

	  // ------------------------下面的不要管他-----------------
	  /// ////////////////////////////////////////////////////////////////

	  // 变量
	  var isHashchangeSite = false;
	  var hashchangeTimer = 0;

	  // ====================  libs  ==============================
	  /**
	   *
	   * @param {IHrefIncObject} obj obj
	   * @param {Document=} doc document
	   * @param {Window=} win window
	   * @param {string=} cplink cplink
	   * @returns {string} next link
	   * @description 地址栏递增处理函数
	   */
	  function hrefInc(obj, doc, win, cplink) {
	    var _cplink = cplink;
	    function getHref(href) {
	      const mFails = obj.mFails;
	      if (!mFails) return href;
	      var str;
	      if (typeof mFails === 'string') {
	        str = mFails;
	      } else {
	        const array = [];
	        for (var i = 0, ii = mFails.length; i < ii; i++) {
	          const fx = mFails[i];
	          if (!fx) continue;
	          if (typeof fx !== 'string' || fx.indexOf('re;') === 0) {
	            const fxre = typeof fx === 'string' ? toRE(fx.slice(3)) : fx;
	            const mValue = href.match(fxre);
	            if (!mValue) return href;
	            array.push(mValue);
	          } else {
	            array.push(fx);
	          }
	        }
	        str = array.join('');
	      }
	      return str;
	    }
	    var sa = obj.startAfter;
	    var index;
	    if (typeof sa === 'string') {
	      if (sa[0] == '#') {
	        _cplink = doc.location.href;
	      }
	      index = _cplink.indexOf(sa);
	      if (index == -1) {
	        _cplink = getHref(_cplink);
	        index = _cplink.indexOf(sa);
	        if (index == -1) return null;
	      }
	    } else {
	      const tsa = _cplink.match(sa);
	      if (!tsa) {
	        _cplink = getHref(_cplink);
	        sa = (_cplink.match(sa) || [])[0];
	        if (!sa) return;
	        index = _cplink.indexOf(sa);
	        if (index == -1) return;
	      } else {
	        sa = tsa[0];
	        index = _cplink.indexOf(sa);
	      }
	    }
	    index += sa.length;
	    const max = obj.max === undefined ? 9999 : obj.max;
	    const min = obj.min === undefined ? 1 : obj.min;
	    const aStr = _cplink.slice(0, index);
	    const bStr = _cplink.slice(index);
	    const nbStr = bStr.replace(/^(\d+)(.*)$/, function (a, b, c) {
	      b = Number(b) + obj.inc;
	      if (b >= max || b < min) return a;
	      return b + c;
	    });
	    if (nbStr !== bStr) {
	      var ilresult;
	      try {
	        ilresult = obj.isLast(doc, unsafeWindow, _cplink);
	      } catch (e) {}
	      if (ilresult) return;
	      return aStr + nbStr;
	    }
	    return null;
	  }

	  // ====================  functions  ==============================
	  function handleLazyImgSrc(rule, doc) {
	    const imgAttrs = rule.split('|');
	    imgAttrs.forEach(function (attr) {
	      attr = attr.trim();
	      [].forEach.call(doc.querySelectorAll('img[' + attr + ']'), function (img) {
	        const newSrc = img.getAttribute(attr);
	        if (newSrc && newSrc != img.src) {
	          img.setAttribute('src', newSrc);
	          img.removeAttribute(attr);
	        }
	      });
	    });
	  }

	  /**
	   *
	   * @param {HTMLDocument} doc Document Fragment
	   * @param {string} scriptFilter Regex string
	   * @description Remove scripts node from doc
	   * @returns {void}
	   */
	  function removeScripts(doc, scriptFilter) {
	    const scripts = getAllElements('css;script', doc);
	    var regFilter;
	    if (scriptFilter) {
	      regFilter = toRE(scriptFilter);
	    }
	    /** @type {HTMLScriptElement} */
	    var scripts_x;
	    for (var i = scripts.length - 1; i >= 0; i--) {
	      //@ts-ignore
	      scripts_x = scripts[i];
	      var iremove = false;
	      if (regFilter) {
	        if (Object.prototype.hasOwnProperty.call(scripts_x, 'src')) {
	          if (!regFilter.test(scripts_x.src)) {
	            iremove = true;
	          }
	        }
	        if (scripts_x.text) {
	          if (!regFilter.test(scripts_x.text)) {
	            iremove = true;
	          }
	        }
	        if (iremove) {
	          scripts_x.parentNode.removeChild(scripts_x);
	        }
	      } else {
	        scripts_x.parentNode.removeChild(scripts_x);
	      }
	    }
	  }

	  /**
	   *
	   * @param {string} str str
	   * @returns {HTMLDocument} document
	   */
	  function createDocumentByString(str) {
	    // string转为DOM
	    if (!str) {
	      logger.error("[Super-preloader]", 'No string found to be converted to DOM');
	      return null;
	    }
	    if (document.documentElement.nodeName != 'HTML') {
	      return new DOMParser().parseFromString(str, 'application/xhtml+xml');
	    }
	    /**@type {HTMLDocument} */
	    var doc;
	    try {
	      // firefox and chrome 30+，Opera 12 会报错
	      doc = new DOMParser().parseFromString(str, 'text/html');
	    } catch (ex) {}
	    if (doc) {
	      return doc;
	    }
	    if (document.implementation.createHTMLDocument) {
	      doc = document.implementation.createHTMLDocument('superPreloader');
	    } else {
	      try {
	        //@ts-ignore
	        doc = document.cloneNode(false);
	        doc.appendChild(doc.importNode(document.documentElement, false));
	        doc.documentElement.appendChild(doc.createElement('head'));
	        doc.documentElement.appendChild(doc.createElement('body'));
	      } catch (e) {}
	    }
	    if (!doc) return;
	    const range = document.createRange();
	    range.selectNodeContents(document.body);
	    const fragment = range.createContextualFragment(str);
	    doc.body.appendChild(fragment);
	    const headChildNames = {
	      TITLE: true,
	      META: true,
	      LINK: true,
	      STYLE: true,
	      BASE: true
	    };
	    var child;
	    const body = doc.body;
	    const bchilds = body.childNodes;
	    for (var i = bchilds.length - 1; i >= 0; i--) {
	      // 移除head的子元素
	      child = bchilds[i];
	      if (headChildNames[child.nodeName]) body.removeChild(child);
	    }
	    return doc;
	  }

	  /**
	   *
	   * @param {string|HTMLElement} href href
	   * @returns {string} href
	   * @description 从相对路径的a.href获取完全的href值.
	   */
	  function getFullHref(href) {
	    // getAttribute may give relative url but href always give full url
	    if (typeof href !== 'string') href = href.getAttribute('href');

	    /** @type {HTMLAnchorElement} */
	    // @ts-ignore
	    let a = getFullHref.a;
	    if (!a) {
	      //@ts-ignore
	      getFullHref.a = a = document.createElement('a');
	    }
	    a.href = href;
	    return a.href;
	  }
	  function getFloatWindowWith() {
	    const el = document.getElementById('sp-fw-container');
	    /** @type {HTMLElement} */
	    //@ts-ignore
	    const elc = el.cloneNode(true);
	    elc.id = "".concat(el.id);
	    elc.style.visibility = 'hidden';
	    //@ts-ignore
	    elc.querySelector('#sp-fw-content').style.display = 'block';
	    document.body.appendChild(elc);
	    //@ts-ignore
	    const width = elc.querySelector('#sp-fw-content').offsetWidth;
	    elc.remove();
	    return width;
	  }

	  /**
	   * Get next page link from an element
	   * @param {string | HTMLElement} elem nextlink element
	   * @returns {string} link of next page
	   */
	  function elemToHref(elem) {
	    if (!elem) return undefined;
	    if (typeof elem === 'string' || elem.hasAttribute('href')) {
	      return getFullHref(elem);
	    } else {
	      return 'javascript:void(0);'; // pseudo href
	    }
	  }
	})();

})();
