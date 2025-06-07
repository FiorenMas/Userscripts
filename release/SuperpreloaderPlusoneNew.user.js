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
(function(){function Fe(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fn,mi;function je(){if(mi)return fn;mi=1;var t=Array.isArray;return fn=t,fn}var tu=je(),zt=Fe(tu),dn,hi;function nu(){if(hi)return dn;hi=1;function t(){this.__data__=[],this.size=0}return dn=t,dn}var mn,gi;function bi(){if(gi)return mn;gi=1;function t(e,n){return e===n||e!==e&&n!==n}return mn=t,mn}var hn,vi;function Gt(){if(vi)return hn;vi=1;var t=bi();function e(n,r){for(var a=n.length;a--;)if(t(n[a][0],r))return a;return-1}return hn=e,hn}var gn,yi;function ru(){if(yi)return gn;yi=1;var t=Gt(),e=Array.prototype,n=e.splice;function r(a){var i=this.__data__,s=t(i,a);if(s<0)return!1;var o=i.length-1;return s==o?i.pop():n.call(i,s,1),--this.size,!0}return gn=r,gn}var bn,wi;function au(){if(wi)return bn;wi=1;var t=Gt();function e(n){var r=this.__data__,a=t(r,n);return a<0?void 0:r[a][1]}return bn=e,bn}var vn,_i;function iu(){if(_i)return vn;_i=1;var t=Gt();function e(n){return t(this.__data__,n)>-1}return vn=e,vn}var yn,xi;function su(){if(xi)return yn;xi=1;var t=Gt();function e(n,r){var a=this.__data__,i=t(a,n);return i<0?(++this.size,a.push([n,r])):a[i][1]=r,this}return yn=e,yn}var wn,Ai;function Kt(){if(Ai)return wn;Ai=1;var t=nu(),e=ru(),n=au(),r=iu(),a=su();function i(s){var o=-1,u=s==null?0:s.length;for(this.clear();++o<u;){var c=s[o];this.set(c[0],c[1])}}return i.prototype.clear=t,i.prototype.delete=e,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,wn=i,wn}var _n,ki;function ou(){if(ki)return _n;ki=1;var t=Kt();function e(){this.__data__=new t,this.size=0}return _n=e,_n}var xn,Ei;function lu(){if(Ei)return xn;Ei=1;function t(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}return xn=t,xn}var An,Ii;function uu(){if(Ii)return An;Ii=1;function t(e){return this.__data__.get(e)}return An=t,An}var kn,Ci;function cu(){if(Ci)return kn;Ci=1;function t(e){return this.__data__.has(e)}return kn=t,kn}var En,Ti;function Ri(){if(Ti)return En;Ti=1;var t=typeof global=="object"&&global&&global.Object===Object&&global;return En=t,En}var In,Si;function at(){if(Si)return In;Si=1;var t=Ri(),e=typeof self=="object"&&self&&self.Object===Object&&self,n=t||e||Function("return this")();return In=n,In}var Cn,Li;function qt(){if(Li)return Cn;Li=1;var t=at(),e=t.Symbol;return Cn=e,Cn}var Tn,qi;function pu(){if(qi)return Tn;qi=1;var t=qt(),e=Object.prototype,n=e.hasOwnProperty,r=e.toString,a=t?t.toStringTag:void 0;function i(s){var o=n.call(s,a),u=s[a];try{s[a]=void 0;var c=!0}catch{}var p=r.call(s);return c&&(o?s[a]=u:delete s[a]),p}return Tn=i,Tn}var Rn,Ni;function fu(){if(Ni)return Rn;Ni=1;var t=Object.prototype,e=t.toString;function n(r){return e.call(r)}return Rn=n,Rn}var Sn,Oi;function vt(){if(Oi)return Sn;Oi=1;var t=qt(),e=pu(),n=fu(),r="[object Null]",a="[object Undefined]",i=t?t.toStringTag:void 0;function s(o){return o==null?o===void 0?a:r:i&&i in Object(o)?e(o):n(o)}return Sn=s,Sn}var Ln,Pi;function Nt(){if(Pi)return Ln;Pi=1;function t(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}return Ln=t,Ln}var qn,Mi;function Nn(){if(Mi)return qn;Mi=1;var t=vt(),e=Nt(),n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function s(o){if(!e(o))return!1;var u=t(o);return u==r||u==a||u==n||u==i}return qn=s,qn}var On,Fi;function du(){if(Fi)return On;Fi=1;var t=at(),e=t["__core-js_shared__"];return On=e,On}var Pn,Di;function mu(){if(Di)return Pn;Di=1;var t=du(),e=function(){var r=/[^.]+$/.exec(t&&t.keys&&t.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function n(r){return!!e&&e in r}return Pn=n,Pn}var Mn,Bi;function Ui(){if(Bi)return Mn;Bi=1;var t=Function.prototype,e=t.toString;function n(r){if(r!=null){try{return e.call(r)}catch{}try{return r+""}catch{}}return""}return Mn=n,Mn}var Fn,ji;function hu(){if(ji)return Fn;ji=1;var t=Nn(),e=mu(),n=Nt(),r=Ui(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,s=Function.prototype,o=Object.prototype,u=s.toString,c=o.hasOwnProperty,p=RegExp("^"+u.call(c).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(l){if(!n(l)||e(l))return!1;var f=t(l)?p:i;return f.test(r(l))}return Fn=h,Fn}var Dn,Hi;function gu(){if(Hi)return Dn;Hi=1;function t(e,n){return e?.[n]}return Dn=t,Dn}var Bn,zi;function yt(){if(zi)return Bn;zi=1;var t=hu(),e=gu();function n(r,a){var i=e(r,a);return t(i)?i:void 0}return Bn=n,Bn}var Un,Gi;function jn(){if(Gi)return Un;Gi=1;var t=yt(),e=at(),n=t(e,"Map");return Un=n,Un}var Hn,Ki;function Wt(){if(Ki)return Hn;Ki=1;var t=yt(),e=t(Object,"create");return Hn=e,Hn}var zn,Wi;function bu(){if(Wi)return zn;Wi=1;var t=Wt();function e(){this.__data__=t?t(null):{},this.size=0}return zn=e,zn}var Gn,Ji;function vu(){if(Ji)return Gn;Ji=1;function t(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}return Gn=t,Gn}var Kn,Yi;function yu(){if(Yi)return Kn;Yi=1;var t=Wt(),e="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function a(i){var s=this.__data__;if(t){var o=s[i];return o===e?void 0:o}return r.call(s,i)?s[i]:void 0}return Kn=a,Kn}var Wn,Zi;function wu(){if(Zi)return Wn;Zi=1;var t=Wt(),e=Object.prototype,n=e.hasOwnProperty;function r(a){var i=this.__data__;return t?i[a]!==void 0:n.call(i,a)}return Wn=r,Wn}var Jn,Xi;function _u(){if(Xi)return Jn;Xi=1;var t=Wt(),e="__lodash_hash_undefined__";function n(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=t&&a===void 0?e:a,this}return Jn=n,Jn}var Yn,Vi;function xu(){if(Vi)return Yn;Vi=1;var t=bu(),e=vu(),n=yu(),r=wu(),a=_u();function i(s){var o=-1,u=s==null?0:s.length;for(this.clear();++o<u;){var c=s[o];this.set(c[0],c[1])}}return i.prototype.clear=t,i.prototype.delete=e,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,Yn=i,Yn}var Zn,Qi;function Au(){if(Qi)return Zn;Qi=1;var t=xu(),e=Kt(),n=jn();function r(){this.size=0,this.__data__={hash:new t,map:new(n||e),string:new t}}return Zn=r,Zn}var Xn,$i;function ku(){if($i)return Xn;$i=1;function t(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}return Xn=t,Xn}var Vn,es;function Jt(){if(es)return Vn;es=1;var t=ku();function e(n,r){var a=n.__data__;return t(r)?a[typeof r=="string"?"string":"hash"]:a.map}return Vn=e,Vn}var Qn,ts;function Eu(){if(ts)return Qn;ts=1;var t=Jt();function e(n){var r=t(this,n).delete(n);return this.size-=r?1:0,r}return Qn=e,Qn}var $n,ns;function Iu(){if(ns)return $n;ns=1;var t=Jt();function e(n){return t(this,n).get(n)}return $n=e,$n}var er,rs;function Cu(){if(rs)return er;rs=1;var t=Jt();function e(n){return t(this,n).has(n)}return er=e,er}var tr,as;function Tu(){if(as)return tr;as=1;var t=Jt();function e(n,r){var a=t(this,n),i=a.size;return a.set(n,r),this.size+=a.size==i?0:1,this}return tr=e,tr}var nr,is;function rr(){if(is)return nr;is=1;var t=Au(),e=Eu(),n=Iu(),r=Cu(),a=Tu();function i(s){var o=-1,u=s==null?0:s.length;for(this.clear();++o<u;){var c=s[o];this.set(c[0],c[1])}}return i.prototype.clear=t,i.prototype.delete=e,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,nr=i,nr}var ar,ss;function Ru(){if(ss)return ar;ss=1;var t=Kt(),e=jn(),n=rr(),r=200;function a(i,s){var o=this.__data__;if(o instanceof t){var u=o.__data__;if(!e||u.length<r-1)return u.push([i,s]),this.size=++o.size,this;o=this.__data__=new n(u)}return o.set(i,s),this.size=o.size,this}return ar=a,ar}var ir,os;function ls(){if(os)return ir;os=1;var t=Kt(),e=ou(),n=lu(),r=uu(),a=cu(),i=Ru();function s(o){var u=this.__data__=new t(o);this.size=u.size}return s.prototype.clear=e,s.prototype.delete=n,s.prototype.get=r,s.prototype.has=a,s.prototype.set=i,ir=s,ir}var sr,us;function Su(){if(us)return sr;us=1;var t="__lodash_hash_undefined__";function e(n){return this.__data__.set(n,t),this}return sr=e,sr}var or,cs;function Lu(){if(cs)return or;cs=1;function t(e){return this.__data__.has(e)}return or=t,or}var lr,ps;function fs(){if(ps)return lr;ps=1;var t=rr(),e=Su(),n=Lu();function r(a){var i=-1,s=a==null?0:a.length;for(this.__data__=new t;++i<s;)this.add(a[i])}return r.prototype.add=r.prototype.push=e,r.prototype.has=n,lr=r,lr}var ur,ds;function qu(){if(ds)return ur;ds=1;function t(e,n){for(var r=-1,a=e==null?0:e.length;++r<a;)if(n(e[r],r,e))return!0;return!1}return ur=t,ur}var cr,ms;function hs(){if(ms)return cr;ms=1;function t(e,n){return e.has(n)}return cr=t,cr}var pr,gs;function bs(){if(gs)return pr;gs=1;var t=fs(),e=qu(),n=hs(),r=1,a=2;function i(s,o,u,c,p,h){var l=u&r,f=s.length,T=o.length;if(f!=T&&!(l&&T>f))return!1;var x=h.get(s),b=h.get(o);if(x&&b)return x==o&&b==s;var g=-1,E=!0,P=u&a?new t:void 0;for(h.set(s,o),h.set(o,s);++g<f;){var O=s[g],_=o[g];if(c)var A=l?c(_,O,g,o,s,h):c(O,_,g,s,o,h);if(A!==void 0){if(A)continue;E=!1;break}if(P){if(!e(o,function(S,U){if(!n(P,U)&&(O===S||p(O,S,u,c,h)))return P.push(U)})){E=!1;break}}else if(!(O===_||p(O,_,u,c,h))){E=!1;break}}return h.delete(s),h.delete(o),E}return pr=i,pr}var fr,vs;function Nu(){if(vs)return fr;vs=1;var t=at(),e=t.Uint8Array;return fr=e,fr}var dr,ys;function Ou(){if(ys)return dr;ys=1;function t(e){var n=-1,r=Array(e.size);return e.forEach(function(a,i){r[++n]=[i,a]}),r}return dr=t,dr}var mr,ws;function Pu(){if(ws)return mr;ws=1;function t(e){var n=-1,r=Array(e.size);return e.forEach(function(a){r[++n]=a}),r}return mr=t,mr}var hr,_s;function Mu(){if(_s)return hr;_s=1;var t=qt(),e=Nu(),n=bi(),r=bs(),a=Ou(),i=Pu(),s=1,o=2,u="[object Boolean]",c="[object Date]",p="[object Error]",h="[object Map]",l="[object Number]",f="[object RegExp]",T="[object Set]",x="[object String]",b="[object Symbol]",g="[object ArrayBuffer]",E="[object DataView]",P=t?t.prototype:void 0,O=P?P.valueOf:void 0;function _(A,S,U,d,j,w,H){switch(U){case E:if(A.byteLength!=S.byteLength||A.byteOffset!=S.byteOffset)return!1;A=A.buffer,S=S.buffer;case g:return!(A.byteLength!=S.byteLength||!w(new e(A),new e(S)));case u:case c:case l:return n(+A,+S);case p:return A.name==S.name&&A.message==S.message;case f:case x:return A==S+"";case h:var Y=a;case T:var Se=d&s;if(Y||(Y=i),A.size!=S.size&&!Se)return!1;var Be=H.get(A);if(Be)return Be==S;d|=o,H.set(A,S);var ht=r(Y(A),Y(S),d,j,w,H);return H.delete(A),ht;case b:if(O)return O.call(A)==O.call(S)}return!1}return hr=_,hr}var gr,xs;function As(){if(xs)return gr;xs=1;function t(e,n){for(var r=-1,a=n.length,i=e.length;++r<a;)e[i+r]=n[r];return e}return gr=t,gr}var br,ks;function Fu(){if(ks)return br;ks=1;var t=As(),e=je();function n(r,a,i){var s=a(r);return e(r)?s:t(s,i(r))}return br=n,br}var vr,Es;function Du(){if(Es)return vr;Es=1;function t(e,n){for(var r=-1,a=e==null?0:e.length,i=0,s=[];++r<a;){var o=e[r];n(o,r,e)&&(s[i++]=o)}return s}return vr=t,vr}var yr,Is;function Bu(){if(Is)return yr;Is=1;function t(){return[]}return yr=t,yr}var wr,Cs;function Uu(){if(Cs)return wr;Cs=1;var t=Du(),e=Bu(),n=Object.prototype,r=n.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(s){return s==null?[]:(s=Object(s),t(a(s),function(o){return r.call(s,o)}))}:e;return wr=i,wr}var _r,Ts;function ju(){if(Ts)return _r;Ts=1;function t(e,n){for(var r=-1,a=Array(e);++r<e;)a[r]=n(r);return a}return _r=t,_r}var xr,Rs;function ft(){if(Rs)return xr;Rs=1;function t(e){return e!=null&&typeof e=="object"}return xr=t,xr}var Ar,Ss;function Hu(){if(Ss)return Ar;Ss=1;var t=vt(),e=ft(),n="[object Arguments]";function r(a){return e(a)&&t(a)==n}return Ar=r,Ar}var kr,Ls;function Yt(){if(Ls)return kr;Ls=1;var t=Hu(),e=ft(),n=Object.prototype,r=n.hasOwnProperty,a=n.propertyIsEnumerable,i=t(function(){return arguments}())?t:function(s){return e(s)&&r.call(s,"callee")&&!a.call(s,"callee")};return kr=i,kr}var Ot={exports:{}},Er,qs;function zu(){if(qs)return Er;qs=1;function t(){return!1}return Er=t,Er}Ot.exports;var Ns;function Ir(){return Ns||(Ns=1,function(t,e){var n=at(),r=zu(),a=e&&!e.nodeType&&e,i=a&&!0&&t&&!t.nodeType&&t,s=i&&i.exports===a,o=s?n.Buffer:void 0,u=o?o.isBuffer:void 0,c=u||r;t.exports=c}(Ot,Ot.exports)),Ot.exports}var Cr,Os;function Ps(){if(Os)return Cr;Os=1;var t=9007199254740991,e=/^(?:0|[1-9]\d*)$/;function n(r,a){var i=typeof r;return a=a??t,!!a&&(i=="number"||i!="symbol"&&e.test(r))&&r>-1&&r%1==0&&r<a}return Cr=n,Cr}var Tr,Ms;function Rr(){if(Ms)return Tr;Ms=1;var t=9007199254740991;function e(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=t}return Tr=e,Tr}var Sr,Fs;function Gu(){if(Fs)return Sr;Fs=1;var t=vt(),e=Rr(),n=ft(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",s="[object Date]",o="[object Error]",u="[object Function]",c="[object Map]",p="[object Number]",h="[object Object]",l="[object RegExp]",f="[object Set]",T="[object String]",x="[object WeakMap]",b="[object ArrayBuffer]",g="[object DataView]",E="[object Float32Array]",P="[object Float64Array]",O="[object Int8Array]",_="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",U="[object Uint8ClampedArray]",d="[object Uint16Array]",j="[object Uint32Array]",w={};w[E]=w[P]=w[O]=w[_]=w[A]=w[S]=w[U]=w[d]=w[j]=!0,w[r]=w[a]=w[b]=w[i]=w[g]=w[s]=w[o]=w[u]=w[c]=w[p]=w[h]=w[l]=w[f]=w[T]=w[x]=!1;function H(Y){return n(Y)&&e(Y.length)&&!!w[t(Y)]}return Sr=H,Sr}var Lr,Ds;function Bs(){if(Ds)return Lr;Ds=1;function t(e){return function(n){return e(n)}}return Lr=t,Lr}var Pt={exports:{}};Pt.exports;var Us;function Ku(){return Us||(Us=1,function(t,e){var n=Ri(),r=e&&!e.nodeType&&e,a=r&&!0&&t&&!t.nodeType&&t,i=a&&a.exports===r,s=i&&n.process,o=function(){try{var u=a&&a.require&&a.require("util").types;return u||s&&s.binding&&s.binding("util")}catch{}}();t.exports=o}(Pt,Pt.exports)),Pt.exports}var qr,js;function Nr(){if(js)return qr;js=1;var t=Gu(),e=Bs(),n=Ku(),r=n&&n.isTypedArray,a=r?e(r):t;return qr=a,qr}var Or,Hs;function Wu(){if(Hs)return Or;Hs=1;var t=ju(),e=Yt(),n=je(),r=Ir(),a=Ps(),i=Nr(),s=Object.prototype,o=s.hasOwnProperty;function u(c,p){var h=n(c),l=!h&&e(c),f=!h&&!l&&r(c),T=!h&&!l&&!f&&i(c),x=h||l||f||T,b=x?t(c.length,String):[],g=b.length;for(var E in c)(p||o.call(c,E))&&!(x&&(E=="length"||f&&(E=="offset"||E=="parent")||T&&(E=="buffer"||E=="byteLength"||E=="byteOffset")||a(E,g)))&&b.push(E);return b}return Or=u,Or}var Pr,zs;function Gs(){if(zs)return Pr;zs=1;var t=Object.prototype;function e(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||t;return n===a}return Pr=e,Pr}var Mr,Ks;function Ju(){if(Ks)return Mr;Ks=1;function t(e,n){return function(r){return e(n(r))}}return Mr=t,Mr}var Fr,Ws;function Yu(){if(Ws)return Fr;Ws=1;var t=Ju(),e=t(Object.keys,Object);return Fr=e,Fr}var Dr,Js;function Ys(){if(Js)return Dr;Js=1;var t=Gs(),e=Yu(),n=Object.prototype,r=n.hasOwnProperty;function a(i){if(!t(i))return e(i);var s=[];for(var o in Object(i))r.call(i,o)&&o!="constructor"&&s.push(o);return s}return Dr=a,Dr}var Br,Zs;function Zt(){if(Zs)return Br;Zs=1;var t=Nn(),e=Rr();function n(r){return r!=null&&e(r.length)&&!t(r)}return Br=n,Br}var Ur,Xs;function jr(){if(Xs)return Ur;Xs=1;var t=Wu(),e=Ys(),n=Zt();function r(a){return n(a)?t(a):e(a)}return Ur=r,Ur}var Hr,Vs;function Zu(){if(Vs)return Hr;Vs=1;var t=Fu(),e=Uu(),n=jr();function r(a){return t(a,n,e)}return Hr=r,Hr}var zr,Qs;function Xu(){if(Qs)return zr;Qs=1;var t=Zu(),e=1,n=Object.prototype,r=n.hasOwnProperty;function a(i,s,o,u,c,p){var h=o&e,l=t(i),f=l.length,T=t(s),x=T.length;if(f!=x&&!h)return!1;for(var b=f;b--;){var g=l[b];if(!(h?g in s:r.call(s,g)))return!1}var E=p.get(i),P=p.get(s);if(E&&P)return E==s&&P==i;var O=!0;p.set(i,s),p.set(s,i);for(var _=h;++b<f;){g=l[b];var A=i[g],S=s[g];if(u)var U=h?u(S,A,g,s,i,p):u(A,S,g,i,s,p);if(!(U===void 0?A===S||c(A,S,o,u,p):U)){O=!1;break}_||(_=g=="constructor")}if(O&&!_){var d=i.constructor,j=s.constructor;d!=j&&"constructor"in i&&"constructor"in s&&!(typeof d=="function"&&d instanceof d&&typeof j=="function"&&j instanceof j)&&(O=!1)}return p.delete(i),p.delete(s),O}return zr=a,zr}var Gr,$s;function Vu(){if($s)return Gr;$s=1;var t=yt(),e=at(),n=t(e,"DataView");return Gr=n,Gr}var Kr,eo;function Qu(){if(eo)return Kr;eo=1;var t=yt(),e=at(),n=t(e,"Promise");return Kr=n,Kr}var Wr,to;function $u(){if(to)return Wr;to=1;var t=yt(),e=at(),n=t(e,"Set");return Wr=n,Wr}var Jr,no;function ec(){if(no)return Jr;no=1;var t=yt(),e=at(),n=t(e,"WeakMap");return Jr=n,Jr}var Yr,ro;function ao(){if(ro)return Yr;ro=1;var t=Vu(),e=jn(),n=Qu(),r=$u(),a=ec(),i=vt(),s=Ui(),o="[object Map]",u="[object Object]",c="[object Promise]",p="[object Set]",h="[object WeakMap]",l="[object DataView]",f=s(t),T=s(e),x=s(n),b=s(r),g=s(a),E=i;return(t&&E(new t(new ArrayBuffer(1)))!=l||e&&E(new e)!=o||n&&E(n.resolve())!=c||r&&E(new r)!=p||a&&E(new a)!=h)&&(E=function(P){var O=i(P),_=O==u?P.constructor:void 0,A=_?s(_):"";if(A)switch(A){case f:return l;case T:return o;case x:return c;case b:return p;case g:return h}return O}),Yr=E,Yr}var Zr,io;function tc(){if(io)return Zr;io=1;var t=ls(),e=bs(),n=Mu(),r=Xu(),a=ao(),i=je(),s=Ir(),o=Nr(),u=1,c="[object Arguments]",p="[object Array]",h="[object Object]",l=Object.prototype,f=l.hasOwnProperty;function T(x,b,g,E,P,O){var _=i(x),A=i(b),S=_?p:a(x),U=A?p:a(b);S=S==c?h:S,U=U==c?h:U;var d=S==h,j=U==h,w=S==U;if(w&&s(x)){if(!s(b))return!1;_=!0,d=!1}if(w&&!d)return O||(O=new t),_||o(x)?e(x,b,g,E,P,O):n(x,b,S,g,E,P,O);if(!(g&u)){var H=d&&f.call(x,"__wrapped__"),Y=j&&f.call(b,"__wrapped__");if(H||Y){var Se=H?x.value():x,Be=Y?b.value():b;return O||(O=new t),P(Se,Be,g,E,O)}}return w?(O||(O=new t),r(x,b,g,E,P,O)):!1}return Zr=T,Zr}var Xr,so;function oo(){if(so)return Xr;so=1;var t=tc(),e=ft();function n(r,a,i,s,o){return r===a?!0:r==null||a==null||!e(r)&&!e(a)?r!==r&&a!==a:t(r,a,i,s,n,o)}return Xr=n,Xr}var Vr,lo;function nc(){if(lo)return Vr;lo=1;var t=ls(),e=oo(),n=1,r=2;function a(i,s,o,u){var c=o.length,p=c,h=!u;if(i==null)return!p;for(i=Object(i);c--;){var l=o[c];if(h&&l[2]?l[1]!==i[l[0]]:!(l[0]in i))return!1}for(;++c<p;){l=o[c];var f=l[0],T=i[f],x=l[1];if(h&&l[2]){if(T===void 0&&!(f in i))return!1}else{var b=new t;if(u)var g=u(T,x,f,i,s,b);if(!(g===void 0?e(x,T,n|r,u,b):g))return!1}}return!0}return Vr=a,Vr}var Qr,uo;function co(){if(uo)return Qr;uo=1;var t=Nt();function e(n){return n===n&&!t(n)}return Qr=e,Qr}var $r,po;function rc(){if(po)return $r;po=1;var t=co(),e=jr();function n(r){for(var a=e(r),i=a.length;i--;){var s=a[i],o=r[s];a[i]=[s,o,t(o)]}return a}return $r=n,$r}var ea,fo;function mo(){if(fo)return ea;fo=1;function t(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==void 0||e in Object(r))}}return ea=t,ea}var ta,ho;function ac(){if(ho)return ta;ho=1;var t=nc(),e=rc(),n=mo();function r(a){var i=e(a);return i.length==1&&i[0][2]?n(i[0][0],i[0][1]):function(s){return s===a||t(s,a,i)}}return ta=r,ta}var na,go;function Xt(){if(go)return na;go=1;var t=vt(),e=ft(),n="[object Symbol]";function r(a){return typeof a=="symbol"||e(a)&&t(a)==n}return na=r,na}var ra,bo;function aa(){if(bo)return ra;bo=1;var t=je(),e=Xt(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,s){if(t(i))return!1;var o=typeof i;return o=="number"||o=="symbol"||o=="boolean"||i==null||e(i)?!0:r.test(i)||!n.test(i)||s!=null&&i in Object(s)}return ra=a,ra}var ia,vo;function ic(){if(vo)return ia;vo=1;var t=rr(),e="Expected a function";function n(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(e);var i=function(){var s=arguments,o=a?a.apply(this,s):s[0],u=i.cache;if(u.has(o))return u.get(o);var c=r.apply(this,s);return i.cache=u.set(o,c)||u,c};return i.cache=new(n.Cache||t),i}return n.Cache=t,ia=n,ia}var sa,yo;function sc(){if(yo)return sa;yo=1;var t=ic(),e=500;function n(r){var a=t(r,function(s){return i.size===e&&i.clear(),s}),i=a.cache;return a}return sa=n,sa}var oa,wo;function oc(){if(wo)return oa;wo=1;var t=sc(),e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=t(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(e,function(s,o,u,c){i.push(u?c.replace(n,"$1"):o||s)}),i});return oa=r,oa}var la,_o;function xo(){if(_o)return la;_o=1;function t(e,n){for(var r=-1,a=e==null?0:e.length,i=Array(a);++r<a;)i[r]=n(e[r],r,e);return i}return la=t,la}var ua,Ao;function lc(){if(Ao)return ua;Ao=1;var t=qt(),e=xo(),n=je(),r=Xt(),a=t?t.prototype:void 0,i=a?a.toString:void 0;function s(o){if(typeof o=="string")return o;if(n(o))return e(o,s)+"";if(r(o))return i?i.call(o):"";var u=o+"";return u=="0"&&1/o==-1/0?"-0":u}return ua=s,ua}var ca,ko;function uc(){if(ko)return ca;ko=1;var t=lc();function e(n){return n==null?"":t(n)}return ca=e,ca}var pa,Eo;function Io(){if(Eo)return pa;Eo=1;var t=je(),e=aa(),n=oc(),r=uc();function a(i,s){return t(i)?i:e(i,s)?[i]:n(r(i))}return pa=a,pa}var fa,Co;function Vt(){if(Co)return fa;Co=1;var t=Xt();function e(n){if(typeof n=="string"||t(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return fa=e,fa}var da,To;function Ro(){if(To)return da;To=1;var t=Io(),e=Vt();function n(r,a){a=t(a,r);for(var i=0,s=a.length;r!=null&&i<s;)r=r[e(a[i++])];return i&&i==s?r:void 0}return da=n,da}var ma,So;function cc(){if(So)return ma;So=1;var t=Ro();function e(n,r,a){var i=n==null?void 0:t(n,r);return i===void 0?a:i}return ma=e,ma}var ha,Lo;function pc(){if(Lo)return ha;Lo=1;function t(e,n){return e!=null&&n in Object(e)}return ha=t,ha}var ga,qo;function fc(){if(qo)return ga;qo=1;var t=Io(),e=Yt(),n=je(),r=Ps(),a=Rr(),i=Vt();function s(o,u,c){u=t(u,o);for(var p=-1,h=u.length,l=!1;++p<h;){var f=i(u[p]);if(!(l=o!=null&&c(o,f)))break;o=o[f]}return l||++p!=h?l:(h=o==null?0:o.length,!!h&&a(h)&&r(f,h)&&(n(o)||e(o)))}return ga=s,ga}var ba,No;function dc(){if(No)return ba;No=1;var t=pc(),e=fc();function n(r,a){return r!=null&&e(r,a,t)}return ba=n,ba}var va,Oo;function mc(){if(Oo)return va;Oo=1;var t=oo(),e=cc(),n=dc(),r=aa(),a=co(),i=mo(),s=Vt(),o=1,u=2;function c(p,h){return r(p)&&a(h)?i(s(p),h):function(l){var f=e(l,p);return f===void 0&&f===h?n(l,p):t(h,f,o|u)}}return va=c,va}var ya,Po;function wa(){if(Po)return ya;Po=1;function t(e){return e}return ya=t,ya}var _a,Mo;function hc(){if(Mo)return _a;Mo=1;function t(e){return function(n){return n?.[e]}}return _a=t,_a}var xa,Fo;function gc(){if(Fo)return xa;Fo=1;var t=Ro();function e(n){return function(r){return t(r,n)}}return xa=e,xa}var Aa,Do;function bc(){if(Do)return Aa;Do=1;var t=hc(),e=gc(),n=aa(),r=Vt();function a(i){return n(i)?t(r(i)):e(i)}return Aa=a,Aa}var ka,Bo;function Uo(){if(Bo)return ka;Bo=1;var t=ac(),e=mc(),n=wa(),r=je(),a=bc();function i(s){return typeof s=="function"?s:s==null?n:typeof s=="object"?r(s)?e(s[0],s[1]):t(s):a(s)}return ka=i,ka}var Ea,jo;function vc(){if(jo)return Ea;jo=1;var t=Uo(),e=Zt(),n=jr();function r(a){return function(i,s,o){var u=Object(i);if(!e(i)){var c=t(s,3);i=n(i),s=function(h){return c(u[h],h,u)}}var p=a(i,s,o);return p>-1?u[c?i[p]:p]:void 0}}return Ea=r,Ea}var Ia,Ho;function zo(){if(Ho)return Ia;Ho=1;function t(e,n,r,a){for(var i=e.length,s=r+(a?1:-1);a?s--:++s<i;)if(n(e[s],s,e))return s;return-1}return Ia=t,Ia}var Ca,Go;function yc(){if(Go)return Ca;Go=1;var t=/\s/;function e(n){for(var r=n.length;r--&&t.test(n.charAt(r)););return r}return Ca=e,Ca}var Ta,Ko;function wc(){if(Ko)return Ta;Ko=1;var t=yc(),e=/^\s+/;function n(r){return r&&r.slice(0,t(r)+1).replace(e,"")}return Ta=n,Ta}var Ra,Wo;function _c(){if(Wo)return Ra;Wo=1;var t=wc(),e=Nt(),n=Xt(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,o=parseInt;function u(c){if(typeof c=="number")return c;if(n(c))return r;if(e(c)){var p=typeof c.valueOf=="function"?c.valueOf():c;c=e(p)?p+"":p}if(typeof c!="string")return c===0?c:+c;c=t(c);var h=i.test(c);return h||s.test(c)?o(c.slice(2),h?2:8):a.test(c)?r:+c}return Ra=u,Ra}var Sa,Jo;function xc(){if(Jo)return Sa;Jo=1;var t=_c(),e=1/0,n=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=t(a),a===e||a===-1/0){var i=a<0?-1:1;return i*n}return a===a?a:0}return Sa=r,Sa}var La,Yo;function Ac(){if(Yo)return La;Yo=1;var t=xc();function e(n){var r=t(n),a=r%1;return r===r?a?r-a:r:0}return La=e,La}var qa,Zo;function kc(){if(Zo)return qa;Zo=1;var t=zo(),e=Uo(),n=Ac(),r=Math.max;function a(i,s,o){var u=i==null?0:i.length;if(!u)return-1;var c=o==null?0:n(o);return c<0&&(c=r(u+c,0)),t(i,e(s,3),c)}return qa=a,qa}var Na,Xo;function Ec(){if(Xo)return Na;Xo=1;var t=vc(),e=kc(),n=t(e);return Na=n,Na}var Ic=Ec(),Vo=Fe(Ic),Cc=`.sp-separator {
  line-height: 1.8 !important;
  opacity: 1 !important;
  position: relative !important;
  float: none !important;
  top: 0 !important;
  left: 0 !important;
  min-width: 366px;
  width: auto;
  text-align: center !important;
  font-size: 14px !important;
  display: block !important;
  padding: 3px 0 !important;
  margin: 5px 10px 8px;
  clear: both !important;
  border-style: solid !important;
  border-color: #cccccc !important;
  border-width: 1px !important;
  -moz-border-radius: 30px !important;
  border-radius: 30px !important;
  background-color: #ffffff !important;
}

.sp-separator:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}

#sp-separator-hover {
  display: none;
}

.sp-separator:hover #sp-separator-hover {
  display: block;
}

.sp-separator .sp-someinfo {
  position: absolute !important;
  right: 10px !important;
  font-size: 12px !important;
  font-style: italic !important;
  background: none !important;
}

.sp-separator img {
  vertical-align: middle !important;
  cursor: pointer !important;
  padding: 0 !important;
  margin: 0 5px !important;
  border: none !important;
  display: inline-block !important;
  float: none !important;
  width: auto;
  height: auto;
}

.sp-separator a {
  margin: 0 20px 0 -6px !important;
  display: inline !important;
  text-shadow: #fff 0 1px 0 !important;
  background: none !important;
  color: #595959 !important;
}

.sp-separator input {
  padding: 0 !important;
  line-height: 23px !important;
}

.sp-separator .sp-md-span {
  font-weight: bold !important;
  margin: 0 20px !important;
}

#sp-sp-md-number {
  width: 6ch !important;
  vertical-align: middle !important;
  display: inline-block !important;
  text-align: left !important;
}`,Tc=`.sp-prefs-spinner {
  margin: 40px auto;
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 10px;
}

.sp-prefs-spinner > div {
  background-color: #333;
  height: 100%;
  width: 25%;
  display: inline-block;
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.sp-prefs-spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.sp-prefs-spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.sp-prefs-spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.sp-prefs-spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes sk-stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}`,Rc=`@charset "UTF-8";
#sp-prefs-setup {
  z-index: 2147483647;
  padding: 20px 30px;
  box-sizing: content-box;
  border-radius: 3px !important;
  border: 1px solid #a0a0a0 !important;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;
  background: -moz-linear-gradient(top, #fcfcfc, #f2f2f7 100%) !important;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#fcfcfc), to(#f2f2f7)) !important;
  font-family: "Arial", "sans-serif" !important;
  color: transparent;
  max-height: 80%;
  overflow: auto;
}

#sp-prefs-setup * {
  color: black;
  text-align: left;
  line-height: normal;
  font-size: 12px;
  min-height: 12px;
}

#sp-prefs-setup a {
  color: black;
  text-decoration: underline;
}

#sp-prefs-setup div {
  text-align: center;
  font-weight: bold;
  font-size: 15px;
}

#sp-prefs-setup ul {
  margin: 15px 0 15px 0;
  padding: 0;
  list-style: none;
  background: none;
  border: 0;
}

#sp-prefs-setup input,
#sp-prefs-setup select {
  border: 1px solid gray;
  padding: 2px;
  background: white;
  margin: 0px;
  height: auto;
}

#sp-prefs-setup input[type=checkbox] {
  cursor: pointer !important;
  visibility: visible !important;
  position: static !important;
}

#sp-prefs-setup input.inputShift {
  margin-left: 2px;
}

#sp-prefs-setup li {
  margin: 0;
  padding: 5px 0;
  vertical-align: middle;
  background: none;
  border: 0;
  font-size: 12px;
}

#sp-prefs-setup button {
  margin: 0 10px;
  text-align: center;
  white-space: nowrap;
  background-color: #f9f9f9 !important;
  border: 1px solid #ccc !important;
  box-shadow: inset 0 10px 5px white !important;
  border-radius: 3px !important;
  padding: 3px 3px !important;
}

#sp-prefs-setup textarea {
  width: 98%;
  height: 60px;
  margin: 3px 0;
  font-weight: 50;
  background: white;
}

#sp-prefs-setup b {
  font-weight: bold;
  font-family: "\u5FAE\u8F6F\u96C5\u9ED1", sans-serif;
}

#sp-prefs-setup button:disabled {
  color: gray;
}

#sp-prefs-setup label {
  cursor: pointer;
  user-select: none;
  display: inline;
}

#sp-prefs-setup label input[type=checkbox] {
  vertical-align: middle;
}`,Sc=`#sp-fw-container {
  z-index: 999999 !important;
  text-align: left !important;
}
@media print {
  #sp-fw-container {
    display: none;
  }
}

#sp-fw-container * {
  font-size: 13px !important;
  color: black !important;
  float: none !important;
  line-height: 13px !important;
  width: auto;
}

#sp-fw-main-head {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
}

#sp-fw-span-info {
  position: absolute !important;
  right: 1px !important;
  top: 0 !important;
  font-size: 11px !important;
  line-height: 11px !important;
  background: none !important;
  font-style: italic !important;
  color: #5a5a5a !important;
  text-shadow: white 0px 1px 1px !important;
}

#sp-fw-main select {
  background: white;
  height: auto;
}

#sp-fw-container input {
  vertical-align: middle !important;
  display: inline-block !important;
  outline: none !important;
  padding: 0px !important;
  margin: 0 !important;
  margin-right: 3px !important;
  background: white;
  border: 1px solid gray;
  cursor: pointer !important;
  height: auto;
}

#sp-fw-container input[type=number] {
  width: 6ch !important;
  text-align: left !important;
  margin: 0 3px !important;
}

#sp-fw-container input[type=number]:hover::-webkit-inner-spin-button {
  height: 60px;
}

#sp-fw-container input[type=checkbox] {
  position: static !important;
}

#sp-fw-container input[type=button] {
  width: auto !important;
  height: auto !important;
}

#sp-fw-container li {
  list-style: none !important;
  margin: 3px 0 !important;
  border: none !important;
  float: none !important;
}

#sp-fw-container fieldset {
  border: 2px groove #ccc !important;
  -moz-border-radius: 3px !important;
  border-radius: 3px !important;
  padding: 4px 9px 6px 9px !important;
  margin: 2px !important;
  display: block !important;
  width: auto !important;
  height: auto !important;
}

#sp-fw-container legend {
  line-height: 20px !important;
  margin-bottom: 0px !important;
}

#sp-fw-container fieldset > ul {
  padding: 0 !important;
  margin: 0 !important;
}

#sp-fw-container ul#sp-fw-a_useiframe-extend {
  padding-left: 40px !important;
}

#sp-fw-rect {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  float: right !important;
  height: 10px !important;
  width: 10px !important;
  padding: 0 !important;
  margin: 0 !important;
  -moz-border-radius: 3px !important;
  border-radius: 3px !important;
  border: 1px solid white !important;
  -webkit-box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.8) !important;
  -moz-box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.8) !important;
  box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.8) !important;
  opacity: 0.8 !important;
}

#sp-fw-dot,
#sp-fw-cur-mode {
  position: absolute !important;
  z-index: 9999 !important;
  width: 5px !important;
  height: 5px !important;
  padding: 0 !important;
  -moz-border-radius: 3px !important;
  border-radius: 3px !important;
  border: 1px solid white !important;
  opacity: 1 !important;
  -webkit-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.9) !important;
  -moz-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.9) !important;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.9) !important;
}

#sp-fw-dot {
  right: -3px !important;
  top: -3px !important;
}

#sp-fw-cur-mode {
  left: -3px !important;
  top: -3px !important;
  width: 6px !important;
  height: 6px !important;
}

#sp-fw-content {
  padding: 0 !important;
  margin: 5px 5px 0 0 !important;
  -moz-border-radius: 3px !important;
  border-radius: 3px !important;
  border: 1px solid #a0a0a0 !important;
  -webkit-box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;
}

#sp-fw-main {
  padding: 5px !important;
  border: 1px solid white !important;
  -moz-border-radius: 3px !important;
  border-radius: 3px !important;
  background-color: #f2f2f7 !important;
  background: -moz-linear-gradient(top, #fcfcfc, #f2f2f7 100%) !important;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#fcfcfc), to(#f2f2f7)) !important;
}

#sp-fw-foot {
  position: relative !important;
  left: 0 !important;
  right: 0 !important;
  top: 2px !important;
  padding-left: 2px;
  min-height: 20px !important;
}

#sp-fw-container .sp-fw-spanbutton {
  padding: 2px 3px !important;
  border: 1px solid #ccc !important;
  -moz-border-radius: 3px !important;
  border-radius: 3px !important;
  cursor: pointer !important;
  background-color: #f9f9f9 !important;
  -webkit-box-shadow: inset 0 10px 5px white !important;
  -moz-box-shadow: inset 0 10px 5px white !important;
  box-shadow: inset 0 10px 5px white !important;
  display: inline-block;
}

#sp-fw-container #sp-fw-savebutton {
  position: absolute !important;
  right: 2px !important;
}

#sp-fw-container label {
  cursor: pointer;
  user-select: none;
  display: inline;
}`;const Lc=[["aol",/AOLShield\/([0-9._]+)/],["edge",/Edge\/([0-9._]+)/],["edge-ios",/EdgiOS\/([0-9._]+)/],["yandexbrowser",/YaBrowser\/([0-9._]+)/],["kakaotalk",/KAKAOTALK\s([0-9.]+)/],["samsung",/SamsungBrowser\/([0-9.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9.]+)$/],["beaker",/BeakerBrowser\/([0-9.]+)/],["edge-chromium",/Edg\/([0-9.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9.]+)(:?\s|$)/],["crios",/CriOS\/([0-9.]+)(:?\s|$)/],["waterfox",/Waterfox\/([0-9.]+)(?:\s|$)/],["firefox",/Firefox\/([0-9.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9.]+)/],["opera",/Opera\/([0-9.]+)(?:\s|$)/],["opera",/OPR\/([0-9.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv:([0-9.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9.]+)/],["android",/Android\s([0-9.]+)/],["ios",/Version\/([0-9._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9._]+).*Safari/],["facebook",/FBAV\/([0-9.]+)/],["instagram",/Instagram\s([0-9.]+)/],["ios-webview",/AppleWebKit\/([0-9.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9.]+).*Gecko\)$/]],Qo=3;function qc(t){return t!==""&&Lc.reduce(function(e,n){var r=n[0],a=n[1];if(e)return e;var i=a.exec(t);return!!i&&[r,i]},!1)}function Nc(t){const e=qc(t);if(!e)return{name:null,version:null};const[n,r]=e;let a=r[1]&&r[1].split(/[._]/).slice(0,3);if(a||(a=["1"]),a.length<Qo)for(let s=0;s<Qo-a.length;s++)a.push("0");const i=a.join(".");return{name:n,version:i}}const Oa=Nc(navigator.userAgent),Ct=GM.info;(!("scriptHandler"in Ct)||!("version"in Ct))&&(console.warn("[Super-preloader] You may use an unsupported userscript manager"),"scriptHander"in Ct||(Ct.scriptHandler="Greasemonkey"));const He={name:Ct.scriptHandler,version:Ct.version},Oc=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,$o=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");const e=t.match(Oc);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},el=t=>t==="*"||t==="x"||t==="X",tl=t=>{const e=parseInt(t,10);return isNaN(e)?t:e},Pc=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],Mc=(t,e)=>{if(el(t)||el(e))return 0;const[n,r]=Pc(tl(t),tl(e));return n>r?1:n<r?-1:0},nl=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){const r=Mc(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0},wt=(t,e)=>{const n=$o(t),r=$o(e),a=n.pop(),i=r.pop(),s=nl(n,r);return s!==0?s:a&&i?nl(a.split("."),i.split(".")):a||i?a?-1:1:0};var Pa={exports:{}},rl;function Fc(){return rl||(rl=1,function(t){(function(e,n){t.exports?t.exports=n():e.log=n()})(this,function(){var e=function(){},n="undefined",r=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"],i={},s=null;function o(x,b){var g=x[b];if(typeof g.bind=="function")return g.bind(x);try{return Function.prototype.bind.call(g,x)}catch{return function(){return Function.prototype.apply.apply(g,[x,arguments])}}}function u(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function c(x){return x==="debug"&&(x="log"),typeof console===n?!1:x==="trace"&&r?u:console[x]!==void 0?o(console,x):console.log!==void 0?o(console,"log"):e}function p(){for(var x=this.getLevel(),b=0;b<a.length;b++){var g=a[b];this[g]=b<x?e:this.methodFactory(g,x,this.name)}if(this.log=this.debug,typeof console===n&&x<this.levels.SILENT)return"No console available for logging"}function h(x){return function(){typeof console!==n&&(p.call(this),this[x].apply(this,arguments))}}function l(x,b,g){return c(x)||h.apply(this,arguments)}function f(x,b){var g=this,E,P,O,_="loglevel";typeof x=="string"?_+=":"+x:typeof x=="symbol"&&(_=void 0);function A(w){var H=(a[w]||"silent").toUpperCase();if(!(typeof window===n||!_)){try{window.localStorage[_]=H;return}catch{}try{window.document.cookie=encodeURIComponent(_)+"="+H+";"}catch{}}}function S(){var w;if(!(typeof window===n||!_)){try{w=window.localStorage[_]}catch{}if(typeof w===n)try{var H=window.document.cookie,Y=encodeURIComponent(_),Se=H.indexOf(Y+"=");Se!==-1&&(w=/^([^;]+)/.exec(H.slice(Se+Y.length+1))[1])}catch{}return g.levels[w]===void 0&&(w=void 0),w}}function U(){if(!(typeof window===n||!_)){try{window.localStorage.removeItem(_)}catch{}try{window.document.cookie=encodeURIComponent(_)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function d(w){var H=w;if(typeof H=="string"&&g.levels[H.toUpperCase()]!==void 0&&(H=g.levels[H.toUpperCase()]),typeof H=="number"&&H>=0&&H<=g.levels.SILENT)return H;throw new TypeError("log.setLevel() called with invalid level: "+w)}g.name=x,g.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},g.methodFactory=b||l,g.getLevel=function(){return O??P??E},g.setLevel=function(w,H){return O=d(w),H!==!1&&A(O),p.call(g)},g.setDefaultLevel=function(w){P=d(w),S()||g.setLevel(w,!1)},g.resetLevel=function(){O=null,U(),p.call(g)},g.enableAll=function(w){g.setLevel(g.levels.TRACE,w)},g.disableAll=function(w){g.setLevel(g.levels.SILENT,w)},g.rebuild=function(){if(s!==g&&(E=d(s.getLevel())),p.call(g),s===g)for(var w in i)i[w].rebuild()},E=d(s?s.getLevel():"WARN");var j=S();j!=null&&(O=d(j)),p.call(g)}s=new f,s.getLogger=function(b){if(typeof b!="symbol"&&typeof b!="string"||b==="")throw new TypeError("You must supply a name when creating a logger.");var g=i[b];return g||(g=i[b]=new f(b,s.methodFactory)),g};var T=typeof window!==n?window.log:void 0;return s.noConflict=function(){return typeof window!==n&&window.log===s&&(window.log=T),s},s.getLoggers=function(){return i},s.default=s,s})}(Pa)),Pa.exports}var Dc=Fc(),Bc=Fe(Dc);const y=Bc.noConflict();function Qt(t){if(String.fromCodePoint){var e=parseInt(t,16);return String.fromCodePoint(e)}else return y.error("[Super-preloader]","Shame on your browser!"),""}var Uc="8.0.1",jc="Mach6",Hc="GPL-3.0",zc={url:"https://github.com/machsix/Super-preloader/issues"},Gc="https://github.com/machsix/Super-preloader",Mt={version:Uc,author:jc,license:Hc,bugs:zc,homepage:Gc};const Ma=new Date,ie={name:"Super_preloaderPlus_one_New",shortname:"Super-preloader","name-CN":"Super_preloaderPlus_one_\u6539",namespace:"https://github.com/machsix",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==",author:Mt.author,version:Mt.version,license:Mt.license,changelog:"".concat(Qt("1F595")," Baidu"),greasyfork:"https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new",updateTime:"".concat(Ma.getFullYear(),"/").concat(Ma.getMonth()+1,"/").concat(Ma.getDate()),homepageURL:Mt.homepage,feedbackURL:Mt.bugs.url,rewriteStorage:"6.6.83"};ie.downloadURL="https://machsix.github.io/Super-preloader/Super_preloaderPlus_one_New.user.js",ie.updateURL=ie.downloadURL;const dt={title:ie.name,image:ie.icon,onload:function(){},show:(t,e)=>wt(t,"8.0.0")<0&&wt(e,"8.0.0")>=0,extratext:{zh_CN:"Drop support of non ES6 browsers",en_US:"Drop support of non ES6 browsers"}};`// ==UserScript==
// @name         `.concat(ie.name,`
// @name:zh-CN   `).concat(ie["name-CN"],`
// @name:zh-TW   `).concat(ie["name-CN"],`
// @namespace    `).concat(ie.namespace,`
// @description  Preload and Autopager
// @description:zh-CN  \u9884\u8BFB+\u7FFB\u9875..\u5168\u52A0\u901F\u4F60\u7684\u6D4F\u89C8\u4F53\u9A8C
// @description:zh-TW  \u9884\u8BFB+\u7FFB\u9875..\u5168\u52A0\u901F\u4F60\u7684\u6D4F\u89C8\u4F53\u9A8C
// @author       `).concat(ie.author,`
// @contributers alexolog, heroboy, suchunchen, YFdyh000
// @thanksto     ywzhaiqi, NLF
// @version      `).concat(ie.version,`
// @license      `).concat(ie.license,`
// @update       `).concat(ie.updateTime,`
// @homepageURL  `).concat(ie.homepageURL,`
// @downloadURL  `).concat(ie.downloadURL,`
// @updateURL    `).concat(ie.updateURL,`
// @supportURL   `).concat(ie.homepageURL,`/issue
// @contributionURL https://ko-fi.com/machsix
// @icon         `).concat(ie.icon,`
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
`);const $t={Linear:function(e,n,r,a){return r*e/a+n},Quad:{easeIn:function(e,n,r,a){return r*(e/=a)*e+n},easeOut:function(e,n,r,a){return-r*(e/=a)*(e-2)+n},easeInOut:function(e,n,r,a){return(e/=a/2)<1?r/2*e*e+n:-r/2*(--e*(e-2)-1)+n}},Cubic:{easeIn:function(e,n,r,a){return r*(e/=a)*e*e+n},easeOut:function(e,n,r,a){return r*((e=e/a-1)*e*e+1)+n},easeInOut:function(e,n,r,a){return(e/=a/2)<1?r/2*e*e*e+n:r/2*((e-=2)*e*e+2)+n}},Quart:{easeIn:function(e,n,r,a){return r*(e/=a)*e*e*e+n},easeOut:function(e,n,r,a){return-r*((e=e/a-1)*e*e*e-1)+n},easeInOut:function(e,n,r,a){return(e/=a/2)<1?r/2*e*e*e*e+n:-r/2*((e-=2)*e*e*e-2)+n}},Quint:{easeIn:function(e,n,r,a){return r*(e/=a)*e*e*e*e+n},easeOut:function(e,n,r,a){return r*((e=e/a-1)*e*e*e*e+1)+n},easeInOut:function(e,n,r,a){return(e/=a/2)<1?r/2*e*e*e*e*e+n:r/2*((e-=2)*e*e*e*e+2)+n}},Sine:{easeIn:function(e,n,r,a){return-r*Math.cos(e/a*(Math.PI/2))+r+n},easeOut:function(e,n,r,a){return r*Math.sin(e/a*(Math.PI/2))+n},easeInOut:function(e,n,r,a){return-r/2*(Math.cos(Math.PI*e/a)-1)+n}},Expo:{easeIn:function(e,n,r,a){return e==0?n:r*Math.pow(2,10*(e/a-1))+n},easeOut:function(e,n,r,a){return e==a?n+r:r*(-Math.pow(2,-10*e/a)+1)+n},easeInOut:function(e,n,r,a){return e==0?n:e==a?n+r:(e/=a/2)<1?r/2*Math.pow(2,10*(e-1))+n:r/2*(-Math.pow(2,-10*--e)+2)+n}},Circ:{easeIn:function(e,n,r,a){return-r*(Math.sqrt(1-(e/=a)*e)-1)+n},easeOut:function(e,n,r,a){return r*Math.sqrt(1-(e=e/a-1)*e)+n},easeInOut:function(e,n,r,a){return(e/=a/2)<1?-r/2*(Math.sqrt(1-e*e)-1)+n:r/2*(Math.sqrt(1-(e-=2)*e)+1)+n}},Elastic:{easeIn:function(e,n,r,a,i,s){if(e==0)return n;if((e/=a)==1)return n+r;s||(s=a*.3);var o;return!i||i<Math.abs(r)?(i=r,o=s/4):o=s/(2*Math.PI)*Math.asin(r/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*a-o)*(2*Math.PI)/s))+n},easeOut:function(e,n,r,a,i,s){if(e==0)return n;if((e/=a)==1)return n+r;s||(s=a*.3);var o;return!i||i<Math.abs(r)?(i=r,o=s/4):o=s/(2*Math.PI)*Math.asin(r/i),i*Math.pow(2,-10*e)*Math.sin((e*a-o)*(2*Math.PI)/s)+r+n},easeInOut:function(e,n,r,a,i,s){if(e==0)return n;if((e/=a/2)==2)return n+r;s||(s=a*(.3*1.5));var o;return!i||i<Math.abs(r)?(i=r,o=s/4):o=s/(2*Math.PI)*Math.asin(r/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*a-o)*(2*Math.PI)/s))+n:i*Math.pow(2,-10*(e-=1))*Math.sin((e*a-o)*(2*Math.PI)/s)*.5+r+n}},Back:{easeIn:function(e,n,r,a,i){return i==null&&(i=1.70158),r*(e/=a)*e*((i+1)*e-i)+n},easeOut:function(e,n,r,a,i){return i==null&&(i=1.70158),r*((e=e/a-1)*e*((i+1)*e+i)+1)+n},easeInOut:function(e,n,r,a,i){return i==null&&(i=1.70158),(e/=a/2)<1?r/2*(e*e*(((i*=1.525)+1)*e-i))+n:r/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+n}},Bounce:{easeIn:function(e,n,r,a){return r-$t.Bounce.easeOut(a-e,0,r,a)+n},easeOut:function(e,n,r,a){return(e/=a)<1/2.75?r*(7.5625*e*e)+n:e<2/2.75?r*(7.5625*(e-=1.5/2.75)*e+.75)+n:e<2.5/2.75?r*(7.5625*(e-=2.25/2.75)*e+.9375)+n:r*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOut:function(e,n,r,a){return e<a/2?$t.Bounce.easeIn(e*2,0,r,a)*.5+n:$t.Bounce.easeOut(e*2-a,0,r,a)*.5+r*.5+n}}},Kc=["Linear","Quad","Cubic","Quart","Quint","Sine","Expo","Circ","Elastic","Back","Bounce"],Wc=["easeIn","easeOut","easeInOut"];function Jc(t,e){for(const[n,r]of Object.entries(e))t.setAttribute(n,r)}function ne(t,e){const r=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:document).createElement(t);return Object.prototype.hasOwnProperty.call(e,"attr")&&Jc(r,e.attr),Object.prototype.hasOwnProperty.call(e,"innerHTML")&&(r.innerHTML=e.innerHTML),Array.isArray(e.children)&&e.children.length>0&&e.children.forEach(a=>{r.appendChild(a)}),Array.isArray(e.eventListener)&&e.eventListener.length>0&&e.eventListener.forEach(a=>{r.addEventListener(a.type,a.listener,a.useCapture||!1)}),r}function De(t){if(t.nodeName==="INPUT")switch(t.type){case"checkbox":return!!t.checked;case"number":{const e=t.hasAttribute("min")?parseInt(t.min):void 0,n=t.hasAttribute("max")?parseInt(t.max):void 0;return e>=t.valueAsNumber?e:n<t.valueAsNumber?n:t.valueAsNumber}default:return t.value}else return t.nodeName==="SELECT"?t.selectedOptions[0].value:t.nodeName==="TEXTAREA"?t.value:t.nodeName==="A"?t.href:t.innerHTML}function Re(t,e){if(t.nodeName==="INPUT")switch(t.type){case"checkbox":t.checked=!!e;break;case"number":{t.hasAttribute("min")&&e<t.min&&(e=t.min),t.hasAttribute("max")&&e>t.max&&(e=t.max),t.value=e;break}default:t.value=e}else if(t.nodeName==="SELECT"){for(let n=0;n<t.options.length;n++)if(t.options[n].value===e){t.selectedIndex=n;break}}else t.nodeName==="TEXTAREA"?t.value=e:t.nodeName==="A"?t.href=e:t.innerHTML=e}function Yc(t,e,n){return(e=Xc(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function al(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function _t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?al(Object(n),!0).forEach(function(r){Yc(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):al(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zc(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Xc(t){var e=Zc(t,"string");return typeof e=="symbol"?e:e+""}var Fa,il;function Vc(){if(il)return Fa;il=1;var t=vt(),e=je(),n=ft(),r="[object String]";function a(i){return typeof i=="string"||!e(i)&&n(i)&&t(i)==r}return Fa=a,Fa}var Qc=Vc(),$e=Fe(Qc),Da,sl;function $c(){if(sl)return Da;sl=1;function t(e){return e!==e}return Da=t,Da}var Ba,ol;function ep(){if(ol)return Ba;ol=1;function t(e,n,r){for(var a=r-1,i=e.length;++a<i;)if(e[a]===n)return a;return-1}return Ba=t,Ba}var Ua,ll;function tp(){if(ll)return Ua;ll=1;var t=zo(),e=$c(),n=ep();function r(a,i,s){return i===i?n(a,i,s):t(a,e,s)}return Ua=r,Ua}var ja,ul;function np(){if(ul)return ja;ul=1;var t=tp();function e(n,r){var a=n==null?0:n.length;return!!a&&t(n,r,0)>-1}return ja=e,ja}var Ha,cl;function rp(){if(cl)return Ha;cl=1;function t(e,n,r){for(var a=-1,i=e==null?0:e.length;++a<i;)if(r(n,e[a]))return!0;return!1}return Ha=t,Ha}var za,pl;function ap(){if(pl)return za;pl=1;var t=fs(),e=np(),n=rp(),r=xo(),a=Bs(),i=hs(),s=200;function o(u,c,p,h){var l=-1,f=e,T=!0,x=u.length,b=[],g=c.length;if(!x)return b;p&&(c=r(c,a(p))),h?(f=n,T=!1):c.length>=s&&(f=i,T=!1,c=new t(c));e:for(;++l<x;){var E=u[l],P=p==null?E:p(E);if(E=h||E!==0?E:0,T&&P===P){for(var O=g;O--;)if(c[O]===P)continue e;b.push(E)}else f(c,P,h)||b.push(E)}return b}return za=o,za}var Ga,fl;function ip(){if(fl)return Ga;fl=1;var t=qt(),e=Yt(),n=je(),r=t?t.isConcatSpreadable:void 0;function a(i){return n(i)||e(i)||!!(r&&i&&i[r])}return Ga=a,Ga}var Ka,dl;function ml(){if(dl)return Ka;dl=1;var t=As(),e=ip();function n(r,a,i,s,o){var u=-1,c=r.length;for(i||(i=e),o||(o=[]);++u<c;){var p=r[u];a>0&&i(p)?a>1?n(p,a-1,i,s,o):t(o,p):s||(o[o.length]=p)}return o}return Ka=n,Ka}var Wa,hl;function sp(){if(hl)return Wa;hl=1;function t(e,n,r){switch(r.length){case 0:return e.call(n);case 1:return e.call(n,r[0]);case 2:return e.call(n,r[0],r[1]);case 3:return e.call(n,r[0],r[1],r[2])}return e.apply(n,r)}return Wa=t,Wa}var Ja,gl;function op(){if(gl)return Ja;gl=1;var t=sp(),e=Math.max;function n(r,a,i){return a=e(a===void 0?r.length-1:a,0),function(){for(var s=arguments,o=-1,u=e(s.length-a,0),c=Array(u);++o<u;)c[o]=s[a+o];o=-1;for(var p=Array(a+1);++o<a;)p[o]=s[o];return p[a]=i(c),t(r,this,p)}}return Ja=n,Ja}var Ya,bl;function lp(){if(bl)return Ya;bl=1;function t(e){return function(){return e}}return Ya=t,Ya}var Za,vl;function up(){if(vl)return Za;vl=1;var t=yt(),e=function(){try{var n=t(Object,"defineProperty");return n({},"",{}),n}catch{}}();return Za=e,Za}var Xa,yl;function cp(){if(yl)return Xa;yl=1;var t=lp(),e=up(),n=wa(),r=e?function(a,i){return e(a,"toString",{configurable:!0,enumerable:!1,value:t(i),writable:!0})}:n;return Xa=r,Xa}var Va,wl;function pp(){if(wl)return Va;wl=1;var t=800,e=16,n=Date.now;function r(a){var i=0,s=0;return function(){var o=n(),u=e-(o-s);if(s=o,u>0){if(++i>=t)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return Va=r,Va}var Qa,_l;function fp(){if(_l)return Qa;_l=1;var t=cp(),e=pp(),n=e(t);return Qa=n,Qa}var $a,xl;function dp(){if(xl)return $a;xl=1;var t=wa(),e=op(),n=fp();function r(a,i){return n(e(a,i,t),a+"")}return $a=r,$a}var ei,Al;function mp(){if(Al)return ei;Al=1;var t=Zt(),e=ft();function n(r){return e(r)&&t(r)}return ei=n,ei}var ti,kl;function hp(){if(kl)return ti;kl=1;var t=ap(),e=ml(),n=dp(),r=mp(),a=n(function(i,s){return r(i)?t(i,e(s,1,r,!0)):[]});return ti=a,ti}var gp=hp(),El=Fe(gp);function bp(t,e,n,r){r=r||function(f,T,x,b,g){var E=T.split(`
`),P=Math.max(b-3,0),O=Math.min(E.length,b+3),_=g(x),A=E.slice(P,O).map(function(S,U){var d=U+P+1;return(d==b?" >> ":"    ")+d+"| "+S}).join(`
`);throw f.path=_,f.message=(_||"ejs")+":"+b+`
`+A+`

`+f.message,f},e=e||function(l){return l==null?"":String(l).replace(i,s)};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},i=/[&<>'"]/g;function s(l){return a[l]||l}var o=1,u=`Super_preloaderPlus_one_New is upgraded from v<%= locals.oldversion %> to v<%= locals.newversion%>
`,c=void 0;try{let l=function(f){f!=null&&(p+=f)};var h=l,p="";return l("Super_preloaderPlus_one_New is upgraded from v"),l(e(t.oldversion)),l(" to v"),l(e(t.newversion)),l(`
`),o=2,p}catch(l){r(l,u,c,o,e)}}function vp(t,e,n,r){r=r||function(f,T,x,b,g){var E=T.split(`
`),P=Math.max(b-3,0),O=Math.min(E.length,b+3),_=g(x),A=E.slice(P,O).map(function(S,U){var d=U+P+1;return(d==b?" >> ":"    ")+d+"| "+S}).join(`
`);throw f.path=_,f.message=(_||"ejs")+":"+b+`
`+A+`

`+f.message,f},e=e||function(l){return l==null?"":String(l).replace(i,s)};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},i=/[&<>'"]/g;function s(l){return a[l]||l}var o=1,u=`<div>Super_preloaderPlus_one_New Settings</div>
<ul>
  <li>Version: <b><%= locals.scriptInfo.version %></b> Update time: <b><%= locals.scriptInfo.updateTime %></b>
    <a id="sp-prefs-homepageURL" target="_blank" href="<%= locals.scriptInfo.homepageURL %>" />Homepage</a>
    <a id="sp-prefs-homepageURL-feedback" target="_blank" href="<%= locals.scriptInfo.feedbackURL %>" /> Feedback
    </a>
  </li>
  <li>Maintainer: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b> Changelog:
    <b><%= locals.scriptInfo.changelog %></b></li>
  <li>Number of rules: <b><%= locals.prefs.numOfRule %></b> Next update: <b><%= locals.nextUpdateDate %></b> <button
      id="sp-prefs-updaterule">Update rules</button></li>
  <li>
    <label for="sp-prefs-debug"><input type="checkbox" id="sp-prefs-debug" /> Debug mode</label>
    <label for="sp-prefs-ChineseUI"><input class="inputShift" type="checkbox" tile="English/Chinese UI" id="sp-prefs-ChineseUI" /> Chinese UI</label>
    <label for="sp-prefs-floatWindow"><input class="inputShift" type="checkbox" id="sp-prefs-floatWindow" /> Float window</label>
  </li>
  <li>
    <label for="sp-prefs-disableBuiltinRules"><input type="checkbox" id="sp-prefs-disableBuiltinRules"  title="Disable builtin js rules"/> Disable builtin rules</label>
    <label for="sp-prefs-disableBuiltinSubscriptionRules"><input class="inputShift" type="checkbox" id="sp-prefs-disableBuiltinSubscriptionRules" title="Disable the subscription of rules from wedata.net and etc."/> Disable rule subscription</label>
    <label for="sp-prefs-autoMatchKeyMatch"><input class="inputShift" type="checkbox" id="sp-prefs-autoMatchKeyMatch" /> Disable auto match</label>
  </li>
  <li><label for="sp-prefs-enableHistory"><input type="checkbox" id="sp-prefs-enableHistory" /> Add next page to history</label></li>
  <li>
    <label for="sp-prefs-dblclick_pause"><input type="checkbox" id="sp-prefs-dblclick_pause" /> Double click to stop preload (Default: Ctrl + Long Left)</label>
  </li>
  <li><label for="sp-prefs-SITEINFO_D-useiframe"><input type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> Enable iframe mode globally</label></li>
  <li><label for="sp-prefs-SITEINFO_D-a_enable"><input type="checkbox" title="Enable autopagger, otherwise only prefetcher is enabled"
      id="sp-prefs-SITEINFO_D-a_enable" checked /> Enable autopagger globally</label></li>
  <li><label for="sp-prefs-arrowKeyPage"><input type="checkbox" id="sp-prefs-arrowKeyPage" /> Turn to the next page with \u2190 \u2192</label></li>
  <li><label for="sp-prefs-SITEINFO_D-a_force_enable"><input type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" /> Mandatorily join pages if not covered by the
    rules</label></li>
  <li>Custom excludes:
    <div><textarea id="sp-prefs-excludes"
        placeholder="Customized excludes. You can use either wildcard character like &quot;https://www.google.com/*&quot; or regular expression &quot;re:^https?://www\\\\.google\\\\.com(/.*)?&quot;. The first one will match &quot;https://www.google.com/apple&quot; but not &quot;https://www.google.com&quot;. The second one matches everything. But you need to add the &quot;re:&quot; prefix and escape backslash" ></textarea></div>
  </li>
  <li><a href="https://machsix.github.io/Super-preloader/siterule.html" style="color: blue;" target="_blank">Custom
      rules:</a>
    <div><textarea id="sp-prefs-custom_siteinfo" placeholder="&#8598;Click to learn how to write custom rules"></textarea></div>
  </li>
  <li>Custom CSS:
    <div><textarea id="sp-prefs-customCSS"
        placeholder="Customized the apperance of separator and setting panel by modifying class 'sp-separator' and 'sp-prefs-setup'. E.g.: '.sp-separator {filter: invert(1.0)}' for dark mode"></textarea></div>
  </li>
</ul>
<div><button id="sp-prefs-ok" style="width:100px;">OK</button><button id="sp-prefs-cancel"
    style="width:100px;">Cancel</button><button id="sp-prefs-reset" style="width:100px;">Reset</button></div>
`,c=void 0;try{let l=function(f){f!=null&&(p+=f)};var h=l,p="";return l(`<div>Super_preloaderPlus_one_New Settings</div>
<ul>
  <li>Version: <b>`),o=3,l(e(t.scriptInfo.version)),l("</b> Update time: <b>"),l(e(t.scriptInfo.updateTime)),l(`</b>
    <a id="sp-prefs-homepageURL" target="_blank" href="`),o=4,l(e(t.scriptInfo.homepageURL)),l(`" />Homepage</a>
    <a id="sp-prefs-homepageURL-feedback" target="_blank" href="`),o=5,l(e(t.scriptInfo.feedbackURL)),l(`" /> Feedback
    </a>
  </li>
  <li>Maintainer: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b> Changelog:
    <b>`),o=9,l(e(t.scriptInfo.changelog)),l(`</b></li>
  <li>Number of rules: <b>`),o=10,l(e(t.prefs.numOfRule)),l("</b> Next update: <b>"),l(e(t.nextUpdateDate)),l(`</b> <button
      id="sp-prefs-updaterule">Update rules</button></li>
  <li>
    <label for="sp-prefs-debug"><input type="checkbox" id="sp-prefs-debug" /> Debug mode</label>
    <label for="sp-prefs-ChineseUI"><input class="inputShift" type="checkbox" tile="English/Chinese UI" id="sp-prefs-ChineseUI" /> Chinese UI</label>
    <label for="sp-prefs-floatWindow"><input class="inputShift" type="checkbox" id="sp-prefs-floatWindow" /> Float window</label>
  </li>
  <li>
    <label for="sp-prefs-disableBuiltinRules"><input type="checkbox" id="sp-prefs-disableBuiltinRules"  title="Disable builtin js rules"/> Disable builtin rules</label>
    <label for="sp-prefs-disableBuiltinSubscriptionRules"><input class="inputShift" type="checkbox" id="sp-prefs-disableBuiltinSubscriptionRules" title="Disable the subscription of rules from wedata.net and etc."/> Disable rule subscription</label>
    <label for="sp-prefs-autoMatchKeyMatch"><input class="inputShift" type="checkbox" id="sp-prefs-autoMatchKeyMatch" /> Disable auto match</label>
  </li>
  <li><label for="sp-prefs-enableHistory"><input type="checkbox" id="sp-prefs-enableHistory" /> Add next page to history</label></li>
  <li>
    <label for="sp-prefs-dblclick_pause"><input type="checkbox" id="sp-prefs-dblclick_pause" /> Double click to stop preload (Default: Ctrl + Long Left)</label>
  </li>
  <li><label for="sp-prefs-SITEINFO_D-useiframe"><input type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> Enable iframe mode globally</label></li>
  <li><label for="sp-prefs-SITEINFO_D-a_enable"><input type="checkbox" title="Enable autopagger, otherwise only prefetcher is enabled"
      id="sp-prefs-SITEINFO_D-a_enable" checked /> Enable autopagger globally</label></li>
  <li><label for="sp-prefs-arrowKeyPage"><input type="checkbox" id="sp-prefs-arrowKeyPage" /> Turn to the next page with \u2190 \u2192</label></li>
  <li><label for="sp-prefs-SITEINFO_D-a_force_enable"><input type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" /> Mandatorily join pages if not covered by the
    rules</label></li>
  <li>Custom excludes:
    <div><textarea id="sp-prefs-excludes"
        placeholder="Customized excludes. You can use either wildcard character like &quot;https://www.google.com/*&quot; or regular expression &quot;re:^https?://www\\\\.google\\\\.com(/.*)?&quot;. The first one will match &quot;https://www.google.com/apple&quot; but not &quot;https://www.google.com&quot;. The second one matches everything. But you need to add the &quot;re:&quot; prefix and escape backslash" ></textarea></div>
  </li>
  <li><a href="https://machsix.github.io/Super-preloader/siterule.html" style="color: blue;" target="_blank">Custom
      rules:</a>
    <div><textarea id="sp-prefs-custom_siteinfo" placeholder="&#8598;Click to learn how to write custom rules"></textarea></div>
  </li>
  <li>Custom CSS:
    <div><textarea id="sp-prefs-customCSS"
        placeholder="Customized the apperance of separator and setting panel by modifying class 'sp-separator' and 'sp-prefs-setup'. E.g.: '.sp-separator {filter: invert(1.0)}' for dark mode"></textarea></div>
  </li>
</ul>
<div><button id="sp-prefs-ok" style="width:100px;">OK</button><button id="sp-prefs-cancel"
    style="width:100px;">Cancel</button><button id="sp-prefs-reset" style="width:100px;">Reset</button></div>
`),o=47,p}catch(l){r(l,u,c,o,e)}}function yp(t,e,n,r){r=r||function(f,T,x,b,g){var E=T.split(`
`),P=Math.max(b-3,0),O=Math.min(E.length,b+3),_=g(x),A=E.slice(P,O).map(function(S,U){var d=U+P+1;return(d==b?" >> ":"    ")+d+"| "+S}).join(`
`);throw f.path=_,f.message=(_||"ejs")+":"+b+`
`+A+`

`+f.message,f},e=e||function(l){return l==null?"":String(l).replace(i,s)};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},i=/[&<>'"]/g;function s(l){return a[l]||l}var o=1,u=`<div id="sp-fw-rect" style="background-color:#000;">
  <div id="sp-fw-dot" style="display:none;"></div>
  <div id="sp-fw-cur-mode" style="display:none;"></div>
</div>
<div id="sp-fw-content">
  <div id="sp-fw-main">
    <div id="sp-fw-main-head">
      <label for="sp-fw-a_enable">Mode</label>
      <select id="sp-fw-a_enable" name="sp-fw-a_enable">
        <option value="preloader">Preloader</option>
        <option value="autopager">Autopager</option>
      </select>
      <span id="sp-fw-span-info">Super_preloader</span>
    </div>
    <fieldset>
      <legend title="Preloader helps accelerating loading">Preloader Settings</legend>
      <ul>
        <li>
          <label for="sp-fw-useiframe">
            <input type="checkbox"
              title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal."
              id="sp-fw-useiframe" name="sp-fw-useiframe" />Use iframe
          </label>
          <label for="sp-fw-viewcontent">
            <input type="checkbox" title="Check preload contents." id="sp-fw-viewcontent"
              name="sp-fw-viewcontent" />Show
            preloaded content
          </label>
        </li>
      </ul>
    </fieldset>
    <fieldset id="sp-fw-autopager-field" style="display:block;">
      <legend title="Autopager frees you from clicking next page">Autopager Settings</legend>
      <ul>
        <li>
          <label for="sp-fw-a_useiframe">
            <input type="checkbox"
              title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal"
              id="sp-fw-a_useiframe" name="sp-fw-a_useiframe" />Use iframe</input>
          </label>
          <label for="sp-fw-a_newIframe">
            <input type="checkbox" title="Use a new iframe for the next page. It may solve problems with figures"
              id="sp-fw-a_newIframe" name="sp-fw-a_newIframe">Use new iframe</input>
          </label>
          <ul id="sp-fw-a_useiframe-extend">
            <li>
              <label for="sp-fw-a_iloaded">
                <input type="checkbox" title="Append the content untill iframe is fully loaded" id="sp-fw-a_iloaded"
                  name="sp-fw-a_iloaded" />Wait iframe to be fully loaded
              </label>
            </li>
            <li>
              <label for="sp-fw-a_itimeout">
                <input type="number" min="0"
                  title="Wait for X ms untill the content is appended to the current page. (Default: 0)"
                  id="sp-fw-a_itimeout" name="sp-fw-a_itimeout" /> ms delay
              </label>
            </li>
          </ul>
        </li>
        <li>
          <label for="sp-fw-a_manualA">
            <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA"
              title="The next page won\\'t be appended to the current page and you need to click a button" />Manual mode
          </label>
        </li>
        <li>
          <label for="sp-fw-a_remain">
            Trigger autopager until the height is <input type="number" min="0" id="sp-fw-a_remain"
              name="sp-fw-a_remain" />x
            page height
          </label>
        </li>
        <li>
          <label for="sp-fw-a_maxpage">
            Turn at most <input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage" /> pages
          </label>
        </li>
        <li>
          <label for="sp-fw-a_separator">
            <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator"
              title="Show the page navigation bar" />Navigation bar
          </label>
        </li>
        <li>
          <label for="sp-fw-a_force">
            <input type="checkbox"
              title="Append the whole next page to current page (When there is not rule for the website, this is the only method)"
              id="sp-fw-a_force" name="sp-fw-a_force" />Force to join page
          </label>
        </li>
        <li>
          <label for="sp-fw-a_ipages_0">
            <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0"
              title="Turn X pages instantly once the script is loaded. This is good for some gallery." />Turn <input
              type="number" min="0" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="0 for infinity" /> pages
          </label>
          instantly
          <span class="sp-fw-spanbutton" id="sp-fw-a_starti">Start</span>
        </li>
      </ul>
    </fieldset>
    <div id="sp-fw-foot">
      <label for="sp-fw-enable">
        <input type="checkbox" id="sp-fw-enable" title="Enable for thie website" name="sp-fw-enable" />Enable
      </label>
      <span id="sp-fw-setup" class="sp-fw-spanbutton" title="Global Settings">Global Settings</span>
      <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="Save settings">Save</span>
    </div>
  </div>
</div>
`,c=void 0;try{let l=function(f){f!=null&&(p+=f)};var h=l,p="";return l(`<div id="sp-fw-rect" style="background-color:#000;">
  <div id="sp-fw-dot" style="display:none;"></div>
  <div id="sp-fw-cur-mode" style="display:none;"></div>
</div>
<div id="sp-fw-content">
  <div id="sp-fw-main">
    <div id="sp-fw-main-head">
      <label for="sp-fw-a_enable">Mode</label>
      <select id="sp-fw-a_enable" name="sp-fw-a_enable">
        <option value="preloader">Preloader</option>
        <option value="autopager">Autopager</option>
      </select>
      <span id="sp-fw-span-info">Super_preloader</span>
    </div>
    <fieldset>
      <legend title="Preloader helps accelerating loading">Preloader Settings</legend>
      <ul>
        <li>
          <label for="sp-fw-useiframe">
            <input type="checkbox"
              title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal."
              id="sp-fw-useiframe" name="sp-fw-useiframe" />Use iframe
          </label>
          <label for="sp-fw-viewcontent">
            <input type="checkbox" title="Check preload contents." id="sp-fw-viewcontent"
              name="sp-fw-viewcontent" />Show
            preloaded content
          </label>
        </li>
      </ul>
    </fieldset>
    <fieldset id="sp-fw-autopager-field" style="display:block;">
      <legend title="Autopager frees you from clicking next page">Autopager Settings</legend>
      <ul>
        <li>
          <label for="sp-fw-a_useiframe">
            <input type="checkbox"
              title="Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal"
              id="sp-fw-a_useiframe" name="sp-fw-a_useiframe" />Use iframe</input>
          </label>
          <label for="sp-fw-a_newIframe">
            <input type="checkbox" title="Use a new iframe for the next page. It may solve problems with figures"
              id="sp-fw-a_newIframe" name="sp-fw-a_newIframe">Use new iframe</input>
          </label>
          <ul id="sp-fw-a_useiframe-extend">
            <li>
              <label for="sp-fw-a_iloaded">
                <input type="checkbox" title="Append the content untill iframe is fully loaded" id="sp-fw-a_iloaded"
                  name="sp-fw-a_iloaded" />Wait iframe to be fully loaded
              </label>
            </li>
            <li>
              <label for="sp-fw-a_itimeout">
                <input type="number" min="0"
                  title="Wait for X ms untill the content is appended to the current page. (Default: 0)"
                  id="sp-fw-a_itimeout" name="sp-fw-a_itimeout" /> ms delay
              </label>
            </li>
          </ul>
        </li>
        <li>
          <label for="sp-fw-a_manualA">
            <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA"
              title="The next page won\\'t be appended to the current page and you need to click a button" />Manual mode
          </label>
        </li>
        <li>
          <label for="sp-fw-a_remain">
            Trigger autopager until the height is <input type="number" min="0" id="sp-fw-a_remain"
              name="sp-fw-a_remain" />x
            page height
          </label>
        </li>
        <li>
          <label for="sp-fw-a_maxpage">
            Turn at most <input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage" /> pages
          </label>
        </li>
        <li>
          <label for="sp-fw-a_separator">
            <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator"
              title="Show the page navigation bar" />Navigation bar
          </label>
        </li>
        <li>
          <label for="sp-fw-a_force">
            <input type="checkbox"
              title="Append the whole next page to current page (When there is not rule for the website, this is the only method)"
              id="sp-fw-a_force" name="sp-fw-a_force" />Force to join page
          </label>
        </li>
        <li>
          <label for="sp-fw-a_ipages_0">
            <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0"
              title="Turn X pages instantly once the script is loaded. This is good for some gallery." />Turn <input
              type="number" min="0" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="0 for infinity" /> pages
          </label>
          instantly
          <span class="sp-fw-spanbutton" id="sp-fw-a_starti">Start</span>
        </li>
      </ul>
    </fieldset>
    <div id="sp-fw-foot">
      <label for="sp-fw-enable">
        <input type="checkbox" id="sp-fw-enable" title="Enable for thie website" name="sp-fw-enable" />Enable
      </label>
      <span id="sp-fw-setup" class="sp-fw-spanbutton" title="Global Settings">Global Settings</span>
      <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="Save settings">Save</span>
    </div>
  </div>
</div>
`),o=112,p}catch(l){r(l,u,c,o,e)}}function wp(t,e,n,r){r=r||function(f,T,x,b,g){var E=T.split(`
`),P=Math.max(b-3,0),O=Math.min(E.length,b+3),_=g(x),A=E.slice(P,O).map(function(S,U){var d=U+P+1;return(d==b?" >> ":"    ")+d+"| "+S}).join(`
`);throw f.path=_,f.message=(_||"ejs")+":"+b+`
`+A+`

`+f.message,f},e=e||function(l){return l==null?"":String(l).replace(i,s)};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},i=/[&<>'"]/g;function s(l){return a[l]||l}var o=1,u=`Super_preloaderPlus_one_\u6539 \u4ECE v<%= locals.oldversion %> \u5347\u7EA7\u5230 v<%= locals.newversion%>
`,c=void 0;try{let l=function(f){f!=null&&(p+=f)};var h=l,p="";return l("Super_preloaderPlus_one_\u6539 \u4ECE v"),l(e(t.oldversion)),l(" \u5347\u7EA7\u5230 v"),l(e(t.newversion)),l(`
`),o=2,p}catch(l){r(l,u,c,o,e)}}function _p(t,e,n,r){r=r||function(f,T,x,b,g){var E=T.split(`
`),P=Math.max(b-3,0),O=Math.min(E.length,b+3),_=g(x),A=E.slice(P,O).map(function(S,U){var d=U+P+1;return(d==b?" >> ":"    ")+d+"| "+S}).join(`
`);throw f.path=_,f.message=(_||"ejs")+":"+b+`
`+A+`

`+f.message,f},e=e||function(l){return l==null?"":String(l).replace(i,s)};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},i=/[&<>'"]/g;function s(l){return a[l]||l}var o=1,u=`<div>Super_preloaderPlus_one_New\u8BBE\u7F6E</div>
<ul>
  <li>\u811A\u672C\u7248\u672C: <b><%= locals.scriptInfo.version %></b> \u66F4\u65B0\u65F6\u95F4: <b><%= locals.scriptInfo.updateTime %></b>
    <a id="sp-prefs-homepageURL" target="_blank" href="<%= locals.scriptInfo.homepageURL %>" />\u811A\u672C\u4E3B\u9875</a>
    <a id="sp-prefs-homepageURL-feedback" target="_blank" href="<%= locals.scriptInfo.feedbackURL %>">\u53CD\u9988\u89C4\u5219</a>
  </li>
  <li>\u7EF4\u62A4\u8005: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b> \u66F4\u65B0\u65E5\u5FD7:
    <b><%= locals.scriptInfo.changelog %></b></li>
  <li>\u89C4\u5219\u6570\u76EE: <b><%= locals.prefs.numOfRule %></b> \u4E0B\u6B21\u66F4\u65B0\u65F6\u95F4: <b><%= locals.nextUpdateDate %></b>
    <button id="sp-prefs-updaterule">\u66F4\u65B0\u89C4\u5219</button></li>
  <li>
    <label for="sp-prefs-debug"><input type="checkbox" id="sp-prefs-debug" /> \u8C03\u8BD5\u6A21\u5F0F</label>
    <label for="sp-prefs-ChineseUI"><input class="inputShift" type="checkbox" id="sp-prefs-ChineseUI" /> \u4E2D\u6587\u754C\u9762</label>
    <label for="sp-prefs-floatWindow"><input class="inputShift" type="checkbox" id="sp-prefs-floatWindow" /> \u5F00\u542F\u60AC\u6D6E\u7A97</label>
  </li>
  <li>
    <label for="sp-prefs-disableBuiltinRules"><input type="checkbox" id="sp-prefs-disableBuiltinRules"  title="\u7981\u7528\u5185\u5EFA\u7684js\u683C\u5F0F\u89C4\u5219"/> \u7981\u7528\u5185\u5EFA\u89C4\u5219</label>
    <label for="sp-prefs-disableBuiltinSubscriptionRules"><input class="inputShift" type="checkbox" id="sp-prefs-disableBuiltinSubscriptionRules" title="\u7981\u7528\u4ECEwedata.net\u7B49\u6570\u636E\u5E93\u7684\u8BA2\u9605\u89C4\u5219"/> \u7981\u7528\u8BA2\u9605\u89C4\u5219</label>
    <label for="sp-prefs-autoMatchKeyMatch"><input class="inputShift" type="checkbox" id="sp-prefs-autoMatchKeyMatch" /> \u7981\u7528\u81EA\u52A8\u5339\u914D</label>
  </li>
  <li><label for="sp-prefs-enableHistory"><input type="checkbox" id="sp-prefs-enableHistory" /> \u6DFB\u52A0\u4E0B\u4E00\u9875\u5230\u5386\u53F2\u8BB0\u5F55</label></li>
  <li><label for="sp-prefs-dblclick_pause"><input type="checkbox" id="sp-prefs-dblclick_pause" /> \u9F20\u6807\u53CC\u51FB\u6682\u505C\u7FFB\u9875\uFF08\u9ED8\u8BA4\u4E3A Ctrl + \u957F\u6309\u5DE6\u952E\uFF09</label></li>
  <li>
    <label for="sp-prefs-SITEINFO_D-a_enable"><input title="\u542F\u7528\u81EA\u52A8\u7FFB\u9875\uFF0C\u5426\u5219\u4EC5\u542F\u7528\u9884\u8BFB" type="checkbox" id="sp-prefs-SITEINFO_D-a_enable" checked /> \u81EA\u52A8\u7FFB\u9875</label>
    <label for="sp-prefs-SITEINFO_D-useiframe"><input class="inputShift" type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> \u5168\u5C40iframe\u65B9\u5F0F</label>
    <label for="sp-prefs-SITEINFO_D-a_force_enable">
      <input class="inputShift" title="\u5F3A\u884C\u62FC\u63A5\u89C4\u5219\u4E2D\u6CA1\u6709\u7684\u7AD9\u70B9\uFF0C\u4E0D\u5EFA\u8BAE\u542F\u7528" type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" />
    \u5168\u5C40\u5F3A\u5236\u62FC\u63A5\uFF08\u4E0D\u5EFA\u8BAE\uFF09</label>
  </li>
  <li><label for="sp-prefs-arrowKeyPage"><input type="checkbox" id="sp-prefs-arrowKeyPage" /> \u4F7F\u7528 &larr; &rarr; \u7FFB\u9875</label> </li>
  <li>\u81EA\u5B9A\u4E49\u6392\u9664\u5217\u8868\uFF1A
    <div><textarea id="sp-prefs-excludes" placeholder="\u81EA\u5B9A\u4E49\u6392\u9664\u5217\u8868\uFF0C\u652F\u6301\u901A\u914D\u7B26\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4F8B\u5982\uFF1A&quot;http://*.douban.com/*&quot;\u6216&quot;re:http://.*\\\\.douban\\\\.com/.*&quot;. \u4E24\u8005\u7B49\u6548\u3002\u6B63\u5219\u8868\u8FBE\u5F0F\u9700\u8981\u6DFB\u52A0&quot;re:&quot;\u7684\u524D\u7F00\u5E76\u5BF9\u53CD\u659C\u7EBF\u8F6C\u4E49"></textarea></div>
  </li>
  <li><a href="https://machsix.github.io/Super-preloader/zh-cn/siterule.html" style="color: blue;"
      target="_blank">\u81EA\u5B9A\u4E49\u7AD9\u70B9\u89C4\u5219\uFF1A</a>
    <div><textarea id="sp-prefs-custom_siteinfo" placeholder="&#8598;\u70B9\u51FB\u5B66\u4E60\u5982\u4F55\u81EA\u5B9A\u4E49\u7AD9\u70B9\u89C4\u5219, \u81EA\u5B9A\u4E49\u89C4\u5219\u5E94\u4E3A\u4E00\u4E2Aarray"></textarea></div>
  </lii>
  <li>\u81EA\u5B9A\u4E49\u754C\u9762:
    <div><textarea id="sp-prefs-customCSS"
        placeholder="\u901A\u8FC7\u4FEE\u6539'sp-separator'\u548C'sp-prefs-setup'\u7684CSS\u81EA\u5B9A\u4E49\u754C\u9762"></textarea></div>
  </li>
</ul>
<div><button id="sp-prefs-ok" style="width:100px;">\u786E\u5B9A</button><button id="sp-prefs-cancel"
    style="width:100px;">\u53D6\u6D88</button><button id="sp-prefs-reset" style="width:100px;">\u91CD\u7F6E</button></div>
`,c=void 0;try{let l=function(f){f!=null&&(p+=f)};var h=l,p="";return l(`<div>Super_preloaderPlus_one_New\u8BBE\u7F6E</div>
<ul>
  <li>\u811A\u672C\u7248\u672C: <b>`),o=3,l(e(t.scriptInfo.version)),l("</b> \u66F4\u65B0\u65F6\u95F4: <b>"),l(e(t.scriptInfo.updateTime)),l(`</b>
    <a id="sp-prefs-homepageURL" target="_blank" href="`),o=4,l(e(t.scriptInfo.homepageURL)),l(`" />\u811A\u672C\u4E3B\u9875</a>
    <a id="sp-prefs-homepageURL-feedback" target="_blank" href="`),o=5,l(e(t.scriptInfo.feedbackURL)),l(`">\u53CD\u9988\u89C4\u5219</a>
  </li>
  <li>\u7EF4\u62A4\u8005: <b><a href="https://greasyfork.org/en/users/32861-mach6">Mach6</a></b> \u66F4\u65B0\u65E5\u5FD7:
    <b>`),o=8,l(e(t.scriptInfo.changelog)),l(`</b></li>
  <li>\u89C4\u5219\u6570\u76EE: <b>`),o=9,l(e(t.prefs.numOfRule)),l("</b> \u4E0B\u6B21\u66F4\u65B0\u65F6\u95F4: <b>"),l(e(t.nextUpdateDate)),l(`</b>
    <button id="sp-prefs-updaterule">\u66F4\u65B0\u89C4\u5219</button></li>
  <li>
    <label for="sp-prefs-debug"><input type="checkbox" id="sp-prefs-debug" /> \u8C03\u8BD5\u6A21\u5F0F</label>
    <label for="sp-prefs-ChineseUI"><input class="inputShift" type="checkbox" id="sp-prefs-ChineseUI" /> \u4E2D\u6587\u754C\u9762</label>
    <label for="sp-prefs-floatWindow"><input class="inputShift" type="checkbox" id="sp-prefs-floatWindow" /> \u5F00\u542F\u60AC\u6D6E\u7A97</label>
  </li>
  <li>
    <label for="sp-prefs-disableBuiltinRules"><input type="checkbox" id="sp-prefs-disableBuiltinRules"  title="\u7981\u7528\u5185\u5EFA\u7684js\u683C\u5F0F\u89C4\u5219"/> \u7981\u7528\u5185\u5EFA\u89C4\u5219</label>
    <label for="sp-prefs-disableBuiltinSubscriptionRules"><input class="inputShift" type="checkbox" id="sp-prefs-disableBuiltinSubscriptionRules" title="\u7981\u7528\u4ECEwedata.net\u7B49\u6570\u636E\u5E93\u7684\u8BA2\u9605\u89C4\u5219"/> \u7981\u7528\u8BA2\u9605\u89C4\u5219</label>
    <label for="sp-prefs-autoMatchKeyMatch"><input class="inputShift" type="checkbox" id="sp-prefs-autoMatchKeyMatch" /> \u7981\u7528\u81EA\u52A8\u5339\u914D</label>
  </li>
  <li><label for="sp-prefs-enableHistory"><input type="checkbox" id="sp-prefs-enableHistory" /> \u6DFB\u52A0\u4E0B\u4E00\u9875\u5230\u5386\u53F2\u8BB0\u5F55</label></li>
  <li><label for="sp-prefs-dblclick_pause"><input type="checkbox" id="sp-prefs-dblclick_pause" /> \u9F20\u6807\u53CC\u51FB\u6682\u505C\u7FFB\u9875\uFF08\u9ED8\u8BA4\u4E3A Ctrl + \u957F\u6309\u5DE6\u952E\uFF09</label></li>
  <li>
    <label for="sp-prefs-SITEINFO_D-a_enable"><input title="\u542F\u7528\u81EA\u52A8\u7FFB\u9875\uFF0C\u5426\u5219\u4EC5\u542F\u7528\u9884\u8BFB" type="checkbox" id="sp-prefs-SITEINFO_D-a_enable" checked /> \u81EA\u52A8\u7FFB\u9875</label>
    <label for="sp-prefs-SITEINFO_D-useiframe"><input class="inputShift" type="checkbox" id="sp-prefs-SITEINFO_D-useiframe" /> \u5168\u5C40iframe\u65B9\u5F0F</label>
    <label for="sp-prefs-SITEINFO_D-a_force_enable">
      <input class="inputShift" title="\u5F3A\u884C\u62FC\u63A5\u89C4\u5219\u4E2D\u6CA1\u6709\u7684\u7AD9\u70B9\uFF0C\u4E0D\u5EFA\u8BAE\u542F\u7528" type="checkbox" id="sp-prefs-SITEINFO_D-a_force_enable" />
    \u5168\u5C40\u5F3A\u5236\u62FC\u63A5\uFF08\u4E0D\u5EFA\u8BAE\uFF09</label>
  </li>
  <li><label for="sp-prefs-arrowKeyPage"><input type="checkbox" id="sp-prefs-arrowKeyPage" /> \u4F7F\u7528 &larr; &rarr; \u7FFB\u9875</label> </li>
  <li>\u81EA\u5B9A\u4E49\u6392\u9664\u5217\u8868\uFF1A
    <div><textarea id="sp-prefs-excludes" placeholder="\u81EA\u5B9A\u4E49\u6392\u9664\u5217\u8868\uFF0C\u652F\u6301\u901A\u914D\u7B26\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4F8B\u5982\uFF1A&quot;http://*.douban.com/*&quot;\u6216&quot;re:http://.*\\\\.douban\\\\.com/.*&quot;. \u4E24\u8005\u7B49\u6548\u3002\u6B63\u5219\u8868\u8FBE\u5F0F\u9700\u8981\u6DFB\u52A0&quot;re:&quot;\u7684\u524D\u7F00\u5E76\u5BF9\u53CD\u659C\u7EBF\u8F6C\u4E49"></textarea></div>
  </li>
  <li><a href="https://machsix.github.io/Super-preloader/zh-cn/siterule.html" style="color: blue;"
      target="_blank">\u81EA\u5B9A\u4E49\u7AD9\u70B9\u89C4\u5219\uFF1A</a>
    <div><textarea id="sp-prefs-custom_siteinfo" placeholder="&#8598;\u70B9\u51FB\u5B66\u4E60\u5982\u4F55\u81EA\u5B9A\u4E49\u7AD9\u70B9\u89C4\u5219, \u81EA\u5B9A\u4E49\u89C4\u5219\u5E94\u4E3A\u4E00\u4E2Aarray"></textarea></div>
  </lii>
  <li>\u81EA\u5B9A\u4E49\u754C\u9762:
    <div><textarea id="sp-prefs-customCSS"
        placeholder="\u901A\u8FC7\u4FEE\u6539'sp-separator'\u548C'sp-prefs-setup'\u7684CSS\u81EA\u5B9A\u4E49\u754C\u9762"></textarea></div>
  </li>
</ul>
<div><button id="sp-prefs-ok" style="width:100px;">\u786E\u5B9A</button><button id="sp-prefs-cancel"
    style="width:100px;">\u53D6\u6D88</button><button id="sp-prefs-reset" style="width:100px;">\u91CD\u7F6E</button></div>
`),o=45,p}catch(l){r(l,u,c,o,e)}}function xp(t,e,n,r){r=r||function(f,T,x,b,g){var E=T.split(`
`),P=Math.max(b-3,0),O=Math.min(E.length,b+3),_=g(x),A=E.slice(P,O).map(function(S,U){var d=U+P+1;return(d==b?" >> ":"    ")+d+"| "+S}).join(`
`);throw f.path=_,f.message=(_||"ejs")+":"+b+`
`+A+`

`+f.message,f},e=e||function(l){return l==null?"":String(l).replace(i,s)};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},i=/[&<>'"]/g;function s(l){return a[l]||l}var o=1,u=`<div id="sp-fw-rect" style="background-color:#000;">
  <div id="sp-fw-dot" style="display:none;"></div>
  <div id="sp-fw-cur-mode" style="display:none;"></div>
</div>
<div id="sp-fw-content">
  <div id="sp-fw-main">
    <div id="sp-fw-main-head">
      <label for="sp-fw-a_enable">\u5DE5\u4F5C\u6A21\u5F0F</label>
      <select id="sp-fw-a_enable" name="sp-fw-a_enable">
        <option value="preloader">\u9884\u8BFB\u6A21\u5F0F</option>
        <option value="autopager">\u81EA\u52A8\u7FFB\u9875\u6A21\u5F0F</option>
      </select>
      <!-- <span id="sp-fw-span-info">Super_preloader</span> -->
    </div>
    <fieldset>
      <legend title="\u9884\u8BFB\u6A21\u5F0F\u7684\u76F8\u5173\u8BBE\u7F6E">\u9884\u8BFB\u8BBE\u7F6E</legend>
      <ul>
        <li>
          <label for="sp-fw-useiframe">
            <input type="checkbox" title="\u4F7F\u7528iframe\u9884\u5148\u8F7D\u5165\u597D\u4E0B\u4E00\u9875\u5230\u7F13\u5B58,\u5426\u5219\u4F7F\u7528xhr\u8BF7\u6C42\u4E0B\u4E00\u9875\u6E90\u7801,\u53D6\u51FA\u6240\u6709\u7684\u56FE\u7247\u8FDB\u884C\u9884\u8BFB" id="sp-fw-useiframe"
              name="sp-fw-useiframe" />\u4F7F\u7528iframe\u65B9\u5F0F
          </label>
        </li>
        <li>
          <label for="sp-fw-viewcontent">
            <input type="checkbox" title="\u67E5\u770B\u9884\u8BFB\u7684\u5185\u5BB9,\u5C06\u5176\u663E\u793A\u5728\u9875\u9762\u7684\u5E95\u90E8,\u770B\u770B\u9884\u8BFB\u4E86\u4E9B\u4EC0\u4E48." id="sp-fw-viewcontent"
              name="sp-fw-viewcontent" />\u67E5\u770B\u9884\u8BFB\u7684\u5185\u5BB9
          </label>
        </li>
      </ul>
    </fieldset>
    <fieldset id="sp-fw-autopager-field" style="display:block;">
      <legend title="\u81EA\u52A8\u7FFB\u9875\u6A21\u5F0F\u7684\u76F8\u5173\u8BBE\u7F6E">\u7FFB\u9875\u8BBE\u7F6E</legend>
      <ul>
        <li>
          <label for="sp-fw-a_useiframe">
            <input type="checkbox" title="\u4F7F\u7528iframe\u65B9\u5F0F\u8FDB\u884C\u7FFB\u9875,\u5426\u5219\u4F7F\u7528xhr\u65B9\u5F0F\u7FFB\u9875,\u53EF\u4EE5\u89E3\u51B3\u67D0\u4E9B\u7F51\u9875xhr\u65B9\u5F0F\u65E0\u6CD5\u7FFB\u9875\u7684\u95EE\u9898,\u5982\u679Cxhr\u7FFB\u9875\u6B63\u5E38\u7684\u8BDD,\u5C31\u4E0D\u8981\u52FE\u8FD9\u9879\u5427."
              id="sp-fw-a_useiframe" name="sp-fw-a_useiframe" />\u4F7F\u7528iframe\u65B9\u5F0F</input>
          </label>
          <label for="sp-fw-a_newIframe">
            <input type="checkbox" title="\u6BCF\u4E2A\u4E0B\u4E00\u9875\u90FD\u7528\u65B0\u7684iframe\uFF0C\u53EF\u4EE5\u89E3\u51B3\u4E0B\u4E00\u9875\u56FE\u7247\u6216\u6309\u94AE\u70B9\u51FB\u7684\u95EE\u9898" id="sp-fw-a_newIframe"
              name="sp-fw-a_newIframe">\u65B0iframe</input>
          </label>
          <ul id="sp-fw-a_useiframe-extend">
            <li>
              <label for="sp-fw-a_iloaded">
                <input type="checkbox" title="\u7B49\u5F85iframe\u5B8C\u5168\u8F7D\u5165\u540E(\u53D1\u751Fload\u4E8B\u4EF6),\u5C06\u5185\u5BB9\u53D6\u51FA,\u5426\u5219\u5728DOM\u5B8C\u6210\u540E,\u5C31\u76F4\u63A5\u53D6\u51FA\u6765..(\u52FE\u4E0A\u540E,\u4F1A\u6BD4\u8F83\u6162,\u4F46\u662F\u53EF\u80FD\u4F1A\u89E3\u51B3\u4E00\u4E9B\u95EE\u9898.)"
                  id="sp-fw-a_iloaded" name="sp-fw-a_iloaded" />\u7B49\u5F85iframe\u5B8C\u5168\u8F7D\u5165
              </label>
            </li>
            <li>
              <label for="sp-fw-a_itimeout">
                <input type="number" min="0" title="\u5728\u53EF\u4EE5\u4ECEiframe\u53D6\u6570\u636E\u7684\u65F6\u5019,\u7EE7\u7EED\u7B49\u5F85\u8BBE\u5B9A\u7684ms\u624D\u5F00\u59CB\u53D6\u51FA\u6570\u636E(\u6B64\u9879\u4E3A\u7279\u6B8A\u7F51\u9875\u51C6\u5907,\u5982\u679C\u6B63\u5E38,\u8BF7\u8BBE\u7F6E\u4E3A0)"
                  id="sp-fw-a_itimeout" name="sp-fw-a_itimeout" />ms\u5EF6\u65F6\u53D6\u51FA
              </label>
            </li>
          </ul>
        </li>
        <li>
          <label for="sp-fw-a_manualA">
            <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA"
              title="\u4E0D\u4F1A\u81EA\u52A8\u62FC\u63A5\u4E0A\u6765,\u4F1A\u51FA\u73B0\u4E00\u4E2A\u7C7B\u4F3C\u7FFB\u9875\u5BFC\u822A\u7684\u7684\u56FE\u5F62,\u70B9\u51FB\u7FFB\u9875(\u5728\u8BBA\u575B\u7684\u5E16\u5B50\u5185\u5BB9\u9875\u9762,\u53EF\u4EE5\u8003\u8651\u52FE\u9009\u6B64\u9879,\u4ECE\u800C\u4E0D\u5F71\u54CD\u4F60\u7684\u56DE\u5E16)" />\u624B\u52A8\u6A21\u5F0F
          </label>
        </li>
        <li>
          <label for="sp-fw-a_remain">
            \u5269\u4F59<input type="number" min="0" id="sp-fw-a_remain" name="sp-fw-a_remain"
              title="\u5F53\u5269\u4F59\u7684\u9875\u9762\u7684\u9AD8\u5EA6\u662F\u6D4F\u89C8\u5668\u53EF\u89C1\u7A97\u53E3\u9AD8\u5EA6\u7684\u51E0\u500D\u5F00\u59CB\u7FFB\u9875" />\u500D\u9875\u9762\u9AD8\u5EA6\u89E6\u53D1
          </label>
        </li>
        <li>
          <label for="sp-fw-a_maxpage">
            \u6700\u591A\u7FFB<input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage"
              title="\u6700\u591A\u7FFB\u9875\u6570\u91CF,\u5F53\u8FBE\u5230\u8FD9\u4E2A\u7FFB\u9875\u6570\u91CF\u7684\u65F6\u5019,\u81EA\u52A8\u7FFB\u9875\u505C\u6B62." />\u9875
          </label>
        </li>
        <li>
          <label for="sp-fw-a_separator">
            <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator"
              title="\u5206\u5272\u9875\u9762\u4E3B\u8981\u5185\u5BB9\u7684\u5BFC\u822A\u6761,\u53EF\u4EE5\u8FDB\u884C\u9875\u9762\u4E3B\u8981\u5185\u5BB9\u4E4B\u95F4\u7684\u5FEB\u901F\u8DF3\u8F6C\u5B9A\u4F4D\u7B49." />\u663E\u793A\u7FFB\u9875\u5BFC\u822A
          </label>
        </li>
        <li>
          <label for="sp-fw-a_force">
            <input type="checkbox" title="\u5C06\u4E0B\u4E00\u9875\u7684body\u90E8\u5206\u5185\u5BB9\u6574\u4E2A\u62FC\u63A5\u4E0A\u6765.(\u5F53\u9700\u7FFB\u9875\u7684\u7F51\u7AD9\u6CA1\u6709\u9AD8\u7EA7\u89C4\u5219\u65F6,\u8BE5\u9879\u5F3A\u5236\u52FE\u9009,\u65E0\u6CD5\u53D6\u6D88.)" id="sp-fw-a_force"
              name="sp-fw-a_force" />\u5F3A\u5236\u62FC\u63A5
          </label>
        </li>
        <li>
          <label for="sp-fw-a_ipages_0">
            <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0" title="\u5728JS\u52A0\u8F7D\u540E,\u7ACB\u5373\u8FDE\u7EED\u7FFB\u540E\u9762\u8BBE\u5B9A\u7684\u9875\u6570" />\u542F\u7528
            \u7ACB\u5373\u7FFB<input type="number" min="0" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="0\u4E3A\u65E0\u7A77\u591A" />\u9875
          </label>
          <span class="sp-fw-spanbutton" title="\u73B0\u5728\u7ACB\u5373\u5F00\u59CB\u8FDE\u7EED\u7FFB\u9875" id="sp-fw-a_starti">\u5F00\u59CB</span>
        </li>
      </ul>
    </fieldset>
    <div id="sp-fw-foot">
      <label for="sp-fw-enable">
        <input type="checkbox" id="sp-fw-enable" title="\u603B\u5F00\u5173,\u542F\u7528js,\u5426\u5219\u7981\u7528." name="sp-fw-enable" />\u542F\u7528
      </label>
      <span id="sp-fw-setup" class="sp-fw-spanbutton" title="\u6253\u5F00\u8BBE\u7F6E\u7A97\u53E3">\u8BBE\u7F6E</span>
      <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="\u4FDD\u5B58\u8BBE\u7F6E">\u4FDD\u5B58</span>
    </div>
  </div>
</div>
`,c=void 0;try{let l=function(f){f!=null&&(p+=f)};var h=l,p="";return l(`<div id="sp-fw-rect" style="background-color:#000;">
  <div id="sp-fw-dot" style="display:none;"></div>
  <div id="sp-fw-cur-mode" style="display:none;"></div>
</div>
<div id="sp-fw-content">
  <div id="sp-fw-main">
    <div id="sp-fw-main-head">
      <label for="sp-fw-a_enable">\u5DE5\u4F5C\u6A21\u5F0F</label>
      <select id="sp-fw-a_enable" name="sp-fw-a_enable">
        <option value="preloader">\u9884\u8BFB\u6A21\u5F0F</option>
        <option value="autopager">\u81EA\u52A8\u7FFB\u9875\u6A21\u5F0F</option>
      </select>
      <!-- <span id="sp-fw-span-info">Super_preloader</span> -->
    </div>
    <fieldset>
      <legend title="\u9884\u8BFB\u6A21\u5F0F\u7684\u76F8\u5173\u8BBE\u7F6E">\u9884\u8BFB\u8BBE\u7F6E</legend>
      <ul>
        <li>
          <label for="sp-fw-useiframe">
            <input type="checkbox" title="\u4F7F\u7528iframe\u9884\u5148\u8F7D\u5165\u597D\u4E0B\u4E00\u9875\u5230\u7F13\u5B58,\u5426\u5219\u4F7F\u7528xhr\u8BF7\u6C42\u4E0B\u4E00\u9875\u6E90\u7801,\u53D6\u51FA\u6240\u6709\u7684\u56FE\u7247\u8FDB\u884C\u9884\u8BFB" id="sp-fw-useiframe"
              name="sp-fw-useiframe" />\u4F7F\u7528iframe\u65B9\u5F0F
          </label>
        </li>
        <li>
          <label for="sp-fw-viewcontent">
            <input type="checkbox" title="\u67E5\u770B\u9884\u8BFB\u7684\u5185\u5BB9,\u5C06\u5176\u663E\u793A\u5728\u9875\u9762\u7684\u5E95\u90E8,\u770B\u770B\u9884\u8BFB\u4E86\u4E9B\u4EC0\u4E48." id="sp-fw-viewcontent"
              name="sp-fw-viewcontent" />\u67E5\u770B\u9884\u8BFB\u7684\u5185\u5BB9
          </label>
        </li>
      </ul>
    </fieldset>
    <fieldset id="sp-fw-autopager-field" style="display:block;">
      <legend title="\u81EA\u52A8\u7FFB\u9875\u6A21\u5F0F\u7684\u76F8\u5173\u8BBE\u7F6E">\u7FFB\u9875\u8BBE\u7F6E</legend>
      <ul>
        <li>
          <label for="sp-fw-a_useiframe">
            <input type="checkbox" title="\u4F7F\u7528iframe\u65B9\u5F0F\u8FDB\u884C\u7FFB\u9875,\u5426\u5219\u4F7F\u7528xhr\u65B9\u5F0F\u7FFB\u9875,\u53EF\u4EE5\u89E3\u51B3\u67D0\u4E9B\u7F51\u9875xhr\u65B9\u5F0F\u65E0\u6CD5\u7FFB\u9875\u7684\u95EE\u9898,\u5982\u679Cxhr\u7FFB\u9875\u6B63\u5E38\u7684\u8BDD,\u5C31\u4E0D\u8981\u52FE\u8FD9\u9879\u5427."
              id="sp-fw-a_useiframe" name="sp-fw-a_useiframe" />\u4F7F\u7528iframe\u65B9\u5F0F</input>
          </label>
          <label for="sp-fw-a_newIframe">
            <input type="checkbox" title="\u6BCF\u4E2A\u4E0B\u4E00\u9875\u90FD\u7528\u65B0\u7684iframe\uFF0C\u53EF\u4EE5\u89E3\u51B3\u4E0B\u4E00\u9875\u56FE\u7247\u6216\u6309\u94AE\u70B9\u51FB\u7684\u95EE\u9898" id="sp-fw-a_newIframe"
              name="sp-fw-a_newIframe">\u65B0iframe</input>
          </label>
          <ul id="sp-fw-a_useiframe-extend">
            <li>
              <label for="sp-fw-a_iloaded">
                <input type="checkbox" title="\u7B49\u5F85iframe\u5B8C\u5168\u8F7D\u5165\u540E(\u53D1\u751Fload\u4E8B\u4EF6),\u5C06\u5185\u5BB9\u53D6\u51FA,\u5426\u5219\u5728DOM\u5B8C\u6210\u540E,\u5C31\u76F4\u63A5\u53D6\u51FA\u6765..(\u52FE\u4E0A\u540E,\u4F1A\u6BD4\u8F83\u6162,\u4F46\u662F\u53EF\u80FD\u4F1A\u89E3\u51B3\u4E00\u4E9B\u95EE\u9898.)"
                  id="sp-fw-a_iloaded" name="sp-fw-a_iloaded" />\u7B49\u5F85iframe\u5B8C\u5168\u8F7D\u5165
              </label>
            </li>
            <li>
              <label for="sp-fw-a_itimeout">
                <input type="number" min="0" title="\u5728\u53EF\u4EE5\u4ECEiframe\u53D6\u6570\u636E\u7684\u65F6\u5019,\u7EE7\u7EED\u7B49\u5F85\u8BBE\u5B9A\u7684ms\u624D\u5F00\u59CB\u53D6\u51FA\u6570\u636E(\u6B64\u9879\u4E3A\u7279\u6B8A\u7F51\u9875\u51C6\u5907,\u5982\u679C\u6B63\u5E38,\u8BF7\u8BBE\u7F6E\u4E3A0)"
                  id="sp-fw-a_itimeout" name="sp-fw-a_itimeout" />ms\u5EF6\u65F6\u53D6\u51FA
              </label>
            </li>
          </ul>
        </li>
        <li>
          <label for="sp-fw-a_manualA">
            <input type="checkbox" id="sp-fw-a_manualA" name="sp-fw-a_manualA"
              title="\u4E0D\u4F1A\u81EA\u52A8\u62FC\u63A5\u4E0A\u6765,\u4F1A\u51FA\u73B0\u4E00\u4E2A\u7C7B\u4F3C\u7FFB\u9875\u5BFC\u822A\u7684\u7684\u56FE\u5F62,\u70B9\u51FB\u7FFB\u9875(\u5728\u8BBA\u575B\u7684\u5E16\u5B50\u5185\u5BB9\u9875\u9762,\u53EF\u4EE5\u8003\u8651\u52FE\u9009\u6B64\u9879,\u4ECE\u800C\u4E0D\u5F71\u54CD\u4F60\u7684\u56DE\u5E16)" />\u624B\u52A8\u6A21\u5F0F
          </label>
        </li>
        <li>
          <label for="sp-fw-a_remain">
            \u5269\u4F59<input type="number" min="0" id="sp-fw-a_remain" name="sp-fw-a_remain"
              title="\u5F53\u5269\u4F59\u7684\u9875\u9762\u7684\u9AD8\u5EA6\u662F\u6D4F\u89C8\u5668\u53EF\u89C1\u7A97\u53E3\u9AD8\u5EA6\u7684\u51E0\u500D\u5F00\u59CB\u7FFB\u9875" />\u500D\u9875\u9762\u9AD8\u5EA6\u89E6\u53D1
          </label>
        </li>
        <li>
          <label for="sp-fw-a_maxpage">
            \u6700\u591A\u7FFB<input type="number" min="0" id="sp-fw-a_maxpage" name="sp-fw-a_maxpage"
              title="\u6700\u591A\u7FFB\u9875\u6570\u91CF,\u5F53\u8FBE\u5230\u8FD9\u4E2A\u7FFB\u9875\u6570\u91CF\u7684\u65F6\u5019,\u81EA\u52A8\u7FFB\u9875\u505C\u6B62." />\u9875
          </label>
        </li>
        <li>
          <label for="sp-fw-a_separator">
            <input type="checkbox" id="sp-fw-a_separator" name="sp-fw-a_separator"
              title="\u5206\u5272\u9875\u9762\u4E3B\u8981\u5185\u5BB9\u7684\u5BFC\u822A\u6761,\u53EF\u4EE5\u8FDB\u884C\u9875\u9762\u4E3B\u8981\u5185\u5BB9\u4E4B\u95F4\u7684\u5FEB\u901F\u8DF3\u8F6C\u5B9A\u4F4D\u7B49." />\u663E\u793A\u7FFB\u9875\u5BFC\u822A
          </label>
        </li>
        <li>
          <label for="sp-fw-a_force">
            <input type="checkbox" title="\u5C06\u4E0B\u4E00\u9875\u7684body\u90E8\u5206\u5185\u5BB9\u6574\u4E2A\u62FC\u63A5\u4E0A\u6765.(\u5F53\u9700\u7FFB\u9875\u7684\u7F51\u7AD9\u6CA1\u6709\u9AD8\u7EA7\u89C4\u5219\u65F6,\u8BE5\u9879\u5F3A\u5236\u52FE\u9009,\u65E0\u6CD5\u53D6\u6D88.)" id="sp-fw-a_force"
              name="sp-fw-a_force" />\u5F3A\u5236\u62FC\u63A5
          </label>
        </li>
        <li>
          <label for="sp-fw-a_ipages_0">
            <input type="checkbox" id="sp-fw-a_ipages_0" name="sp-fw-a_ipages_0" title="\u5728JS\u52A0\u8F7D\u540E,\u7ACB\u5373\u8FDE\u7EED\u7FFB\u540E\u9762\u8BBE\u5B9A\u7684\u9875\u6570" />\u542F\u7528
            \u7ACB\u5373\u7FFB<input type="number" min="0" id="sp-fw-a_ipages_1" name="sp-fw-a_ipages_1" title="0\u4E3A\u65E0\u7A77\u591A" />\u9875
          </label>
          <span class="sp-fw-spanbutton" title="\u73B0\u5728\u7ACB\u5373\u5F00\u59CB\u8FDE\u7EED\u7FFB\u9875" id="sp-fw-a_starti">\u5F00\u59CB</span>
        </li>
      </ul>
    </fieldset>
    <div id="sp-fw-foot">
      <label for="sp-fw-enable">
        <input type="checkbox" id="sp-fw-enable" title="\u603B\u5F00\u5173,\u542F\u7528js,\u5426\u5219\u7981\u7528." name="sp-fw-enable" />\u542F\u7528
      </label>
      <span id="sp-fw-setup" class="sp-fw-spanbutton" title="\u6253\u5F00\u8BBE\u7F6E\u7A97\u53E3">\u8BBE\u7F6E</span>
      <span id="sp-fw-savebutton" class="sp-fw-spanbutton" title="\u4FDD\u5B58\u8BBE\u7F6E">\u4FDD\u5B58</span>
    </div>
  </div>
</div>
`),o=107,p}catch(l){r(l,u,c,o,e)}}function Ap(t,e,n,r){r=r||function(f,T,x,b,g){var E=T.split(`
`),P=Math.max(b-3,0),O=Math.min(E.length,b+3),_=g(x),A=E.slice(P,O).map(function(S,U){var d=U+P+1;return(d==b?" >> ":"    ")+d+"| "+S}).join(`
`);throw f.path=_,f.message=(_||"ejs")+":"+b+`
`+A+`

`+f.message,f},e=e||function(l){return l==null?"":String(l).replace(i,s)};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},i=/[&<>'"]/g;function s(l){return a[l]||l}var o=1,u=`<div><%= locals.notice %></div>
<div class="sp-prefs-spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div></div>
`,c=void 0;try{let l=function(f){f!=null&&(p+=f)};var h=l,p="";return l("<div>"),l(e(t.notice)),l(`</div>
<div class="sp-prefs-spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div></div>
`),o=3,p}catch(l){r(l,u,c,o,e)}}var kp={spinner:{update:"Updating ....",reset:"Reseting ...."}},Ep={spinner:{update:"\u66F4\u65B0\u4E2D ....",reset:"\u91CD\u7F6E\u4E2D ...."}},Il={en_US:kp,zh_CN:Ep};const en={};en.upgradeNotification=bp,en["sp-prefs"]=vp,en.floatWindow=yp;const tn={};tn.upgradeNotification=wp,tn["sp-prefs"]=_p,tn.floatWindow=xp;const Cl={};Cl.spinner=Ap;const mt={en_US:en,zh_CN:tn},Ip=Object.keys(Il),Cp=Object.keys(mt);for(const t of Cp)if(Ip.includes(t)){const e=Il[t],n={};for(const[r,a]of Object.entries(e.spinner))n[r]=Cl.spinner({notice:a});mt[t].spinner=n}else mt[t].spinner=mt.en_US.spinner;const Tp=Object.keys(mt);let xt=mt.en_US;function Rp(){return(navigator.language||navigator.userLanguage).indexOf("zh")!==-1?"zh_CN":"en_US"}let oe=Rp();function Sp(t){Tp.includes(t)?(oe=t,xt=mt[oe]):(oe="en_US",xt=mt[oe])}const Tt={function:"\0",undefined:"",null:""};function Lp(t,e){return e instanceof RegExp?"".concat(e.toString()):typeof e=="function"?"".concat(Tt.function).concat(e.toString()):e===null?"".concat(Tt.null):e===void 0?"".concat(Tt.undefined):e}function qp(t,e){if(typeof e!="string"||e.length===0)return e;const n=e.slice(0,1);try{switch(n){case Tt.undefined:return;case Tt.null:return null;case Tt.function:return new Function("return ".concat(e.slice(1)))();default:return e}}catch(r){return console.error("Error parsing function:",r),null}}function Np(t){return JSON.stringify(t,Lp)}function Op(t){return JSON.parse(t,qp)}var ni={stringify:Np,parse:Op},Pp=Nt(),Mp=Fe(Pp),ri,Tl;function Fp(){if(Tl)return ri;Tl=1;var t=vt(),e=ft(),n="[object Boolean]";function r(a){return a===!0||a===!1||e(a)&&t(a)==n}return ri=r,ri}var Dp=Fp(),Rl=Fe(Dp),ai,Sl;function Bp(){if(Sl)return ai;Sl=1;var t=Ys(),e=ao(),n=Yt(),r=je(),a=Zt(),i=Ir(),s=Gs(),o=Nr(),u="[object Map]",c="[object Set]",p=Object.prototype,h=p.hasOwnProperty;function l(f){if(f==null)return!0;if(a(f)&&(r(f)||typeof f=="string"||typeof f.splice=="function"||i(f)||o(f)||n(f)))return!f.length;var T=e(f);if(T==u||T==c)return!f.size;if(s(f))return!t(f).length;for(var x in f)if(h.call(f,x))return!1;return!0}return ai=l,ai}var Up=Bp(),nn=Fe(Up),ii,Ll;function jp(){if(Ll)return ii;Ll=1;function t(e){return e===null}return ii=t,ii}var Hp=jp(),ql=Fe(Hp),si,Nl;function zp(){if(Nl)return si;Nl=1;function t(e){return e===void 0}return si=t,si}var Gp=zp(),Ol=Fe(Gp);function Kp(t){return Array.prototype.map.call(new Uint8Array(t),e=>("00"+e.toString(16)).slice(-2))}function Wp(t){return new TextEncoder().encode(t)}function Jp(t){return Kp(Wp(t))}function Yp(t){function e(n){return/^[A-Za-z0-9;,/?:@&=+$-_.!~*'()#]*$/.test(n)}return[].map.call(t,n=>e(n)?n:"%".concat(Jp(n).map(r=>r.toUpperCase()).join("%"))).join("")}var Zp=t=>{const e={};for(const[n,r]of Object.entries(t))e[n.toLowerCase()]=r;return e};const it=t=>Ol(t)||ql(t),Pl={parse(t){const e=t.replace(/^\?/,""),n=/([^&=]+)=?([^&]*)/g,r=function(o){return decodeURIComponent(o.replace(/\+/g," "))},a={};let i;for(;i=n.exec(e);)a[r(i[1])]=r(i[2]);return a},stringify(t){return Object.keys(t).map(e=>e+"="+t[e]).join("&")}},rn={method:"GET",retry:0,headers:{},stream:!1,cache:!0,dnsCache:!1,encoding:null,prefixUrl:"",timeout:0,searchParams:{},body:null,data:null,binary:!1,user:null,password:null,context:null,html:!1,noHeader:!1,cookie:null,withCredentials:!0};function Xp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:rn;const n=[];if(!it(t.headers)&&$e(t.headers))try{t.headers=JSON.parse(t.headers)}catch(r){console.error("[Super-preloader] [got] header: ".concat(t.headers," error: ").concat(r)),delete t.headers}if(!it(t.headers)&&!nn(t.headers)){t.headers=Zp(t.headers);const{headers:r}=t;if(r)for(const[a,i]of Object.entries(r))(ql(i)||Ol(i))&&delete r[a]}if(t.headers=_t(_t({},e.headers),t.headers),nn(t.headers)&&delete t.headers,n.push("headers"),it(t.prefixUrl))t.url[0]==="/"&&(t.prefixUrl="".concat(window.location.protocol,"//").concat(window.location.host));else try{t.prefixUrl=t.prefixUrl.toString(),t.prefixUrl.endsWith("/")||(t.prefixUrl+="/")}catch(r){y.error("[Super-preloader]","[Super-preloader] [got] prefixUrl: ".concat(t.prefixUrl," error: ").concat(r)),delete t.prefixUrl}t.method=t.method.toUpperCase(),t.timeout&&(t.timeout=parseInt(t.timeout)),Object.prototype.hasOwnProperty.call(t,"html")?t.html&&(t.binary=!1):t.html=e.html,n.push("encoding"),n.push("html"),t.searchParams?$e(t.searchParams)&&(t.searchParams=Pl.parse(t.searchParams)):t.searchParams={},n.push("searchParams"),t.body&&(t.data=t.body);for(const r in e)r in n||it(t[r])&&(t[r]=e[r]);return it(t.cookie)||(Rl(t.cookie)&&t.cookie&&(t.cookie=document.cookie),$e(t.cookie)&&(Object.prototype.hasOwnProperty.call(t,"headers")?t.headers.cookie=t.cookie:t.headers={cookie:t.cookie})),(t.noHeader||nn(t.headers))&&delete t.headers,Rl(t.cache)&&!t.cache&&(t.searchParams.timestamp=new Date().getTime()),nn(t.searchParams)&&delete t.searchParams,t}function Vp(t){const e={};return["method","url","timeout","headers","binary","user","password","context","withCredentials","data"].forEach(n=>{it(t[n])||(e[n]=t[n])}),t.prefixUrl&&(e.url=t.prefixUrl+t.url),t.html&&$e(t.encoding)&&(e.overrideMimeType="text/html; charset=".concat(t.encoding)),it(t.searchParams)||(e.url+="?".concat(Pl.stringify(t.searchParams))),e.url=Yp(e.url),e}function Ml(t,e){let n=_t({},e);return it(e)&&Mp(t)&&(n=_t({},t)),$e(t)&&(n.url=t),n}function Fl(t){const e=n=>{let r=_t({},n);r=Xp(r,e.defaults);const a=Vp(r);y.debug("[Super-preloader]","GM_xmlhttpRequest",a);const i=(o,u,c)=>function(p){const h={data:p.responseText,body:p.responseText,statusCode:p.status,statusMessage:p.statusText,method:r.method,url:p.finalUrl,requestUrl:r.url,retryCount:c,executorName:u};return Object.assign(h,p),o(h)},s=function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return new Promise((c,p)=>{a.onload=i(c,"onload",u),["onabort","onerror","ontimeout"].forEach(h=>{a[h]=i(p,h,u)}),GM.xmlHttpRequest(a)})};return new Promise((o,u)=>{const c=p=>{s(p).then(h=>o(h)).catch(h=>{p<r.retry?c(p+1):u(h)})};c(0)})};e.defaults={};for(const n in rn)e.defaults[n]=it(t[n])?rn[n]:t[n];return e.get=function(n,r){const a=Ml(n,r);return a.method="GET",this(a)},e.post=function(n,r){const a=Ml(n,r);return a.method="POST",this(a)},e.create=Fl,e}const an=Fl(rn);var oi,Dl;function Qp(){if(Dl)return oi;Dl=1;var t=ml();function e(n){var r=n==null?0:n.length;return r?t(n,1):[]}return oi=e,oi}var $p=Qp(),ef=Fe($p),tf=Nn(),nf=Fe(tf);const Bl=an.create({cache:!1});class Ul{constructor(e,n,r,a){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:null;this.name=e,this.url=zt(n)?n:[n],this.detailUrl=zt(r)?r:[r],this.allowFail=a,this.rule=[],nf(i)?this.ruleParser=i:this.ruleParser=s=>JSON.parse(s.data)}setRule(e){this.rule=e}getRule(){return this.rule}async downloadRule(){let e=[],n=null;for(const r of this.url)try{const a=await Bl.get(r);e=this.ruleParser(a),y.info("[Super-preloader]","[DownloadRule] ".concat(this.name," from ").concat(r," [Status] Success"));break}catch(a){y.error("[Super-preloader]","[DownloadRule] ".concat(this.name," from ").concat(r," [Status] ").concat(a)),n=a}if(e)return e;throw new Error(n)}async updateRule(e){let n=null,r=null;const a={ok:this.allowFail,value:[],error:null};for(const s of this.detailUrl)try{const o=await Bl.get(s);if(o.statusCode!==200)throw new Error("Status code: ".concat(o.statusCode));try{n=JSON.parse(o.data)}catch{n={}}if(!Object.hasOwnProperty.call(n,"updated_at"))throw new Error("No updated_at field");break}catch(o){y.error("[Super-preloader]","[UpdateRule] ".concat(this.name," from ").concat(s," [Status] ").concat(o)),n=null,r=o}if(!n)return a.error=r,a;const i=new Date(n.updated_at);if(e<i||this.rule.length<1)try{const s=await this.downloadRule();y.info("[Super-preloader]","[UpdateRule] ".concat(this.name," [Status] Success")),this.rule=s}catch(s){return a.error=s,a}else y.info("[Super-preloader]","[UpdateRule] ".concat(this.name," [Status] No need to update"));return a.ok=!0,a.value=this.rule,a}}const rf=new Ul("machsix.github.io",["https://machsix.github.io/Super-preloader/mydata.json"],["https://machsix.github.io/Super-preloader/mydata_detail.json"],!1),af=new Ul("wedata.net",["http://wedata.net/databases/autopagerize/items_all.json","https://machsix.github.io/Super-preloader/wedata.json"],["http://wedata.net/databases/AutoPagerize.json","https://machsix.github.io/Super-preloader/wedata_detail.json"],!0,t=>($e(t.data)?JSON.parse(t.data):t.data).filter(e=>{const n=["Generic Posts Rule","hAtom"];for(let r=0;r<n.length;r++)if(n[r].indexOf(e.name)>=0)return!1;return!0}).map(e=>_t({name:e.name,resource_url:e.resource_url},e.data))),jl=[rf,af];var Ft={providers:jl,rule:jl.map(()=>[]),expire:new Date("1992-05-15"),updatePeriodInDay:1,resetExpire(){this.expire=new Date("1992-05-15")},getRule(){return ef(this.rule)},async saveRule(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;await GM.setValue("jsonRuleInfo",{expire:this.expire.toJSON(),updatePeriodInDay:this.updatePeriodInDay}),t&&await GM.setValue("SITEINFO_json",this.rule)},async updateRule(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)&&this.resetExpire();const e=new Date(+this.expire-this.updatePeriodInDay*24*60*60*1e3),n=new Date;if(n>this.expire){const r=this.providers.map(a=>a.updateRule(e));await Promise.all(r).then(a=>{a.every(s=>s.ok)?(this.rule=a.map(s=>{let{value:o}=s;return o||this.rule}),this.expire=new Date(+n+this.updatePeriodInDay*24*60*60*1e3),y.info("[Super-preloader]","[UpdateRule] Next update at: ".concat(this.expire)),this.saveRule()):(this.expire=n,y.error("[Super-preloader]","[UpdateRule] Fail"),this.saveRule(!1))})}else y.info("[Super-preloader]","[UpdateRule] Next update at: ".concat(this.expire))},async loadRule(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,[e,n]=await Promise.all([GM.getValue("jsonRuleInfo",{expire:this.expire.toJSON(),updatePeriodInDay:this.updatePeriodInDay}),GM.getValue("SITEINFO_json",this.rule)]);return $e(e)&&(e=JSON.parse(e)),$e(n)&&(n=JSON.parse(n)),this.expire=new Date(e.expire),this.updatePeriodInDay=parseInt(e.updatePeriodInDay),this.rule=n,(t||this.getRule().length===0)&&await this.updateRule(!0),this.getRule()}};const Rt={prefs:{floatWindow:!0,customCSS:"",FW_position:2,FW_offset:[20,38],FW_RAS:!0,pauseA:!0,Pbutton:[2,0,0],mouseA:!0,Atimeout:200,stop_ipage:!0,Aplus:!0,sepP:!0,sepT:!0,s_method:3,s_ease:2,s_FPS:60,s_duration:333,DisableI:!0,arrowKeyPage:!1,sepStartN:2,forceTargetWindow:!0,debug:!0,enableHistory:!1,autoGetPreLink:!1,excludes:"",custom_siteinfo:"[]",lazyImgSrc:"zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder",ChineseUI:!1,dblclick_pause:!1,factoryCheck:!0,disappearDelay:-1,numOfRule:4308,disableBuiltinRules:!1,disableBuiltinSubscriptionRules:!1},SITEINFO_D:{enable:!0,useiframe:!1,viewcontent:!1,autopager:{enable:!0,force_enable:!1,manualA:!1,useiframe:!1,iloaded:!1,itimeout:0,newIframe:!1,remain:1,maxpage:99,ipages:[!1,2],separator:!0,separatorReal:!0,reload:!1,sandbox:!1,relatedObj:!0}},autoMatch:{keyMatch:!0,cases:!1,digitalCheck:!0,pfwordl:{previous:{enable:!0,maxPrefix:3,character:[" ","\u3000","[","\uFF3B","<","\uFF1C","?","?","<<","\u300E","\u300C","\u3010","(","\u2190"]},next:{enable:!0,maxPrefix:2,character:[" ","\u3000","[","\uFF3B","\u300E","\u300C","\u3010","("]}},sfwordl:{previous:{enable:!0,maxSubfix:2,character:[" ","\u3000","]","\uFF3D","\u300F","\u300D","\u3011",")"]},next:{enable:!0,maxSubfix:3,character:[" ","\u3000","]","\uFF3D",">","\uFE65","?","?",">>","\u300F","\u300D","\u3011",")","\u2192"]}},useiframe:!1,viewcontent:!1,FA:{enable:!1,manualA:!1,useiframe:!1,iloaded:!1,itimeout:0,remain:1,maxpage:99,ipages:[!1,2],separator:!0}},version:"1.0.0"},Dt=Object.keys(Rt),te={};function Hl(t,e){let n=!1;El(Object.keys(e),Object.keys(t)).forEach(i=>{t[i]=e[i],n=!0}),El(Object.keys(t),Object.keys(e)).forEach(i=>{delete t[i],n=!0});for(const i of Object.keys(t))!Array.isArray(t[i])&&typeof t[i]=="object"&&(n=n||Hl(t[i],e[i]));return n}async function sf(){y.info("[Super-preloader]","settings are reset"),await Promise.all(Dt.map(t=>GM.setValue(t,Rt[t])))}async function of(t){await Promise.all(Object.keys(t).filter(e=>Dt.includes(e)).map(e=>GM.setValue(e,t[e])))}async function lf(t){const e=/^(\d{1,3}\.){3}\d{1,3}$/;try{const n=await an.get("https://1.1.1.1/dns-query",{searchParams:{name:t,type:"A"},headers:{accept:"application/dns-json"}}),r=JSON.parse(n.data);for(const a of r.Answer)if(e.test(a.data))return a.data;return"127.0.0.1"}catch(n){return y.error("[Super-preloader]","Error fetching DNS:",n),"127.0.0.1"}}async function uf(){const t=await Promise.all(Dt.map(u=>GM.getValue(u,Rt[u])));Dt.forEach((u,c)=>{te[Dt[c]]=t[c]});const e=te.version;wt(te.version,ie.rewriteStorage)===-1&&($e(te.prefs)&&(te.prefs=JSON.parse(te.prefs)),$e(te.SITEINFO_D)&&(te.SITEINFO_D=JSON.parse(te.SITEINFO_D)));const r=wt(te.version,ie.version),a=wt(te.version,Rt.version)===0,i=[];if(r!==0||te.prefs.factoryCheck!==!1){te.prefs.disableBuiltinSubscriptionRules!==!0&&i.push(Ft.loadRule(!0)),y.info("[Super-preloader]","[UpdateCheck] version is updated ".concat(te.version," => ").concat(ie.version)),te.version=ie.version,te.autoMatch.useiframe=te.SITEINFO_D.useiframe||!1,i.push(GM.setValue("version",te.version));const u=Hl(te,Rt);te.prefs.factoryCheck=!1,u&&(y.info("[Super-preloader]","[UpdateCheck] settings are updated"),Object.keys(te).forEach(c=>{c!=="version"&&i.push(GM.setValue(c,te[c]))}))}else te.prefs.disableBuiltinSubscriptionRules?i.push(Promise.resolve([])):i.push(Ft.loadRule());if(typeof te.prefs.debug<"u"&&y.setLevel(te.prefs.debug?"debug":"info"),te.prefs.ChineseUI&&Sp("zh_CN"),r<0&&(dt.show(e,ie.version)||a)){const u={text:"",title:dt.title,image:dt.image,onload:dt.onload};u.text=xt.upgradeNotification({oldversion:e,newversion:te.version}),Object.keys(dt).includes("extratext")&&(Object.keys(dt.extratext).includes(oe)?u.text+=dt.extratext[oe]:u.text+=dt.extratext.en_US),GM.notification(u)}const[s]=await Promise.all(i),o=[].concat(te.prefs.excludes.split(/[\n\r]+/).map(u=>u.trim()));return _t({jsonRule:s,blackList:o},te)}let st=[],Bt=-1;function cf(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"spfwset",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;const n=localStorage.getItem(t);try{return ni.parse(n)||e}catch(r){console.error("Error parsing localStorage value:",r);const a=ni.parse(decodeURIComponent(n))||e;return zl(a,t),a}}function zl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"spfwset";localStorage.setItem(e,ni.stringify(t))}function pf(t){if(st=cf("spfwset")||[],!st)return t;for(let e=0;e<st.length;e++){const n=st[e];if(n.Rurl===t.Rurl){for(const[r,a]of Object.entries(n))t[r]=a;return Bt=e,y.debug("[Super-preloader]","Load local settings ",n),t}}return Bt=-1,t}function ff(t){return st.length===0||Bt===-1?(st.push(t),Bt+=1):st[Bt]=t,zl(st),st}function Gl(t){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:document).querySelector(t)}function df(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document;return[].slice.call(e.querySelectorAll(t))}function de(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document;e=e||n;try{const r=n.evaluate(t,e,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);return r.singleNodeValue&&r.singleNodeValue.nodeType===1&&r.singleNodeValue}catch(r){throw console.error(r),new Error("Invalid xpath: ".concat(t))}}function ot(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document;e=e||n;const r=[];try{const a=n.evaluate(t,e,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(let i=0;i<a.snapshotLength;i++){const s=a.snapshotItem(i);s.nodeType===1&&r.push(s)}}catch(a){throw console.error(a),new Error("Invalid xpath: ".concat(t))}return r}function me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:window,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:void 0;if(!t)return[];if(e=e||n,typeof t=="string")return t.search(/^css;/i)===0?df(t.slice(4),e):ot(t,e,n);{const i=t(n,r,a);if(Array.isArray(i))return i;throw new Error("Wrong type is returned by getAllElements")}}function mf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:window,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:void 0,i=[];if(typeof t=="string"&&t.search(/^css;/i)!==0){t=t.replace(/^id\((.*?)\)/g,"//*[@id=$1]");const u=/(.*\w+)\[\d+\]$/.exec(t);u&&(i=me(t,e,n,r,a),t=u[1])}const s=me(t,e,n,r,a);let o=[];if(i.length>0){const u=[];for(let c=0;c<i.length;c++)u.push([].reduce.call(s[0].children,(p,h)=>p+(h.nodeName!="SCRIPT"?1:0),0)),o.push(i[c]);for(let c=0;c<s.length;c++)for(let p=0;p<i.length&&s[c]!==i[p];p++)if(s[c].className===i[p].className&&s[c].childElementCount===u[p]){o.push(s[c]);break}}else o=s;return o}function Kl(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:window,i=mf(t,n,r,a,e);return i=i.filter(s=>s.offsetParent!==null),i.length>0?i[i.length-1]:null}function sn(t){return t instanceof RegExp?t:t instanceof Array?new RegExp(t[0],t[1]):(t.search(/^wildc;/i)===0&&(t=Wl(t.slice(6))),new RegExp(t))}function Wl(t){return t.source?t.source:"^"+t.replace(/[()[\]{}|+.,^$?\\]/g,"\\$&").replace(/\*+/g,function(n){return n==="*"?".*":"[^/]*"})+"$"}function We(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,r=n.getElementsByTagName("head");r?r=r[0]:r=n.documentElement;const a=n.createElement("style");return e&&a.setAttribute("id",e),a.setAttribute("type","text/css"),a.textContent=t,r?r.appendChild(a):null}var li={exports:{}};/*!
 * displacejs.js 1.4.0 - Tiny javascript library to create moveable DOM elements.
 * Copyright (c) 2021 Catalin Covic - https://github.com/catc/displace
 * License: MIT
 */var Jl;function hf(){return Jl||(Jl=1,function(t,e){(function(r,a){t.exports=a()})(this,function(){return function(n){var r={};function a(i){if(r[i])return r[i].exports;var s=r[i]={exports:{},id:i,loaded:!1};return n[i].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}return a.m=n,a.c=r,a.p="",a(0)}([function(n,r,a){var i=a(1),s=o(i);function o(u){return u&&u.__esModule?u:{default:u}}n.exports=s.default},function(n,r,a){Object.defineProperty(r,"__esModule",{value:!0});var i=a(2),s=a(3);function o(l,f){if(!(l instanceof f))throw new TypeError("Cannot call a class as a function")}var u=(0,i.generateMoveFn)(),c={constrain:!1,relativeTo:null,handle:null,ignoreFn:null,highlightInputs:!1,onMouseDown:null,onMouseMove:null,onMouseUp:null,onTouchStart:null,onTouchMove:null,onTouchStop:null,customMove:null},p=function(){function l(f,T){if(o(this,l),!f)throw Error("Must include moveable element");this.el=f,this.opts=T,h.call(this)}return l.prototype.reinit=function(){this.destroy(),h.call(this)},l.prototype.destroy=function(){var T=this.events;this.handle.removeEventListener("mousedown",T.mousedown,!1),document.removeEventListener("mousemove",T.mousemove,!1),document.removeEventListener("mouseup",T.mouseup,!1),this.handle.removeEventListener("touchstart",T.touchstart,!1),document.removeEventListener("touchmove",T.touchmove,!1),document.removeEventListener("touchstop",T.touchstop,!1),document.removeEventListener("touchmove",this.events.scrollFix,{passive:!1})},l}();function h(){var l=this,f=this.el,T=this.opts||c,x={};if(f.style.position="absolute",this.handle=T.handle||f,T.constrain){for(var b=T.relativeTo||f.parentNode,g=f,E=0,P=0;g!==b;)g=g.parentNode,(0,i.isRelative)(g)&&(E-=g.offsetLeft,P-=g.offsetTop),g===b&&(E+=g.offsetLeft,P+=g.offsetTop);var O=E+b.offsetWidth-f.offsetWidth,_=P+b.offsetHeight-f.offsetHeight;x.xClamp=(0,i.generateClamp)(E,O),x.yClamp=(0,i.generateClamp)(P,_)}this.opts=T,this.data=x,this.events={mousedown:s.mousedown.bind(this),mouseup:s.mouseup.bind(this),touchstart:s.touchstart.bind(this),touchstop:s.touchstop.bind(this),scrollFix:function(S){l.isDragging&&S.preventDefault()}},this.handleMove=u(this.opts.customMove),this.handle.addEventListener("mousedown",this.events.mousedown,!1),this.handle.addEventListener("touchstart",this.events.touchstart,!1),document.addEventListener("touchmove",this.events.scrollFix,{passive:!1})}r.default=function(l,f){return new p(l,f)}},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.generateClamp=a,r.isRelative=i,r.generateMoveFn=s;function a(u,c){return function(p){return Math.min(Math.max(p,u),c)}}function i(u){return window.getComputedStyle(u).position==="relative"}function s(){return window.requestAnimationFrame?function(u){var c=u||o;return function(p,h,l){window.requestAnimationFrame(function(){c(p,h,l)})}}:function(u){return function(c,p,h){var l=u||o;l(c,p,h)}}}function o(u,c,p){u.style.left=c+"px",u.style.top=p+"px"}},function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.mousedown=a,r.mousemove=i,r.mouseup=s,r.touchstart=o,r.touchmove=u,r.touchstop=c;function a(p){var h=this.opts;if(h.highlightInputs){var l=p.target.tagName.toLowerCase();if(l==="input"||l==="textarea")return}if(!(h.ignoreFn&&h.ignoreFn(p))){if(p.button===0){var f=this.el,T=this.events;typeof h.onMouseDown=="function"&&h.onMouseDown(f,p);var x=p.clientX-f.offsetLeft,b=p.clientY-f.offsetTop;T.mousemove=i.bind(this,x,b),document.addEventListener("mousemove",T.mousemove,!1),document.addEventListener("mouseup",T.mouseup,!1)}p.preventDefault()}}function i(p,h,l){var f=this.el,T=this.opts,x=this.data;typeof T.onMouseMove=="function"&&T.onMouseMove(f,l);var b=l.clientX-p,g=l.clientY-h;return T.constrain&&(b=x.xClamp(b),g=x.yClamp(g)),this.handleMove(f,b,g),l.preventDefault(),!1}function s(p){var h=this.el,l=this.opts,f=this.events;typeof l.onMouseUp=="function"&&l.onMouseUp(h,p),document.removeEventListener("mouseup",f.mouseup,!1),document.removeEventListener("mousemove",f.mousemove,!1)}function o(p){var h=this.opts;if(h.highlightInputs){var l=p.target.tagName.toLowerCase();if(l==="input"||l==="textarea")return}if(!(h.ignoreFn&&h.ignoreFn(p))){var f=this.el,T=this.events;typeof h.onTouchStart=="function"&&h.onTouchStart(f,p);var x=p.targetTouches[0],b=x.clientX-f.offsetLeft,g=x.clientY-f.offsetTop;T.touchmove=u.bind(this,b,g),this.isDragging=!0,document.addEventListener("touchmove",T.touchmove,!1),document.addEventListener("touchend",T.touchstop,!1),document.addEventListener("touchcancel",T.touchstop,!1)}}function u(p,h,l){var f=this.el,T=this.opts,x=this.data;typeof T.onTouchMove=="function"&&T.onTouchMove(f,l);var b=l.targetTouches[0],g=b.clientX-p,E=b.clientY-h;return T.constrain&&(g=x.xClamp(g),E=x.yClamp(E)),this.handleMove(f,g,E),l.preventDefault(),!1}function c(p){this.isDragging=!1;var h=this.el,l=this.opts,f=this.events;typeof l.onTouchStop=="function"&&l.onTouchStop(h,p),document.removeEventListener("touchmove",f.touchmove,!1),document.removeEventListener("touchend",f.touchstop,!1),document.removeEventListener("touchcancel",f.touchstop,!1)}}])})}(li)),li.exports}var gf=hf(),bf=Fe(gf);function Yl(t,e){const n=e==="attributes"?{attributes:!0}:{childList:!0};return new Promise(r=>{new MutationObserver((a,i)=>{r({element:t,type:e,mutationList:a,observer:i})}).observe(t,n)})}const vf=[{name:"2048 image mode",url:"https?://[^/]*/2048/",pageElement:'//ul[@id="waterfall"]/li',nextLink:'//div[@class="pages"]/b/following-sibling::a'},{name:"2048 text mode",url:"https?://[^/]*/2048/",pageElement:'//table[@id="ajaxtable"]/tbody[2]/tr[contains(@class,"tr3")]',nextLink:'//div[@class="pages"]/b/following-sibling::a',autopager:{relatedObj:!0,documentFilter:"startFilter",startFilter:function(e){try{e.querySelector("tr[onmouseover]").remove()}catch(a){console.error(a)}var n=e.querySelectorAll("#ajaxtable .tr3");if(n.length>0)for(var r=0;r<n.length;r++){const a=n[r],i=a.querySelector("td:nth-of-type(2) a").href;i&&fetch(i).then(s=>s.text()).then(s=>{const u=new DOMParser().parseFromString(s,"text/html").querySelector("td.r_one img");u&&(a.querySelector("td:nth-of-type(1)").innerHTML="",a.querySelector("td:nth-of-type(1)").appendChild(ne("IMG",{attr:{src:u.src,width:"840",title:"Powered by Super-Preloader Plus",onload:'if(this.height>"840")this.width=this.width*840/this.height;'}})))})}}}},{name:"Discuz \u8BBA\u575B - \u641C\u7D22",url:"^https?://bbs\\.[a-z]+\\.cn/search\\.php\\?mod=forum",preLink:'//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',nextLink:'//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',autopager:{pageElement:'//div[@id="threadlist"]',replaceE:'//div[@class="pg"][child::a[@class="nxt"]]'}},{name:"Discuz \u8BBA\u575B - \u5BFC\u8BFB",url:/^https?:\/\/(?:bbs|u)\.[^/]+\/(?:forum\.php\?mod=guide|home\.php\?mod=space)/i,preLink:'//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',nextLink:'//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',autopager:{pageElement:"//div[@id='postlist'] | //form[@method='post'][@name] | //div[@id='threadlist']/div[@class='bm_c'] | //div[@class='xld xlda']",replaceE:'//div[@class="pg"][child::a[@class="nxt"]]'}},{name:"Discuz\u8BBA\u575B\u5217\u8868",url:/^https?:\/\/(?:www\.[^/]+\/|[^/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:forum)|(?:showforum)|(?:viewforum)|(?:forumdisplay))+/i,preLink:'//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',nextLink:'//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/a[@class="p_curpage"]/following-sibling::a[@class="p_num"]',autopager:{pageElement:'//form[@method="post"][@name] | //div[@id="postlist"] | //div[@id="threadlist"]',replaceE:'//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',lazyImgSrc:"file|pagespeed_lsc_url"}},{name:"Discuz\u8BBA\u575B\u5E16\u5B50",url:/^https?:\/\/(?:www\.[^/]+\/|[^/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:thread)|(?:viewthread)|(?:showtopic)|(?:viewtopic))+/i,preLink:'//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',nextLink:'//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/descendant::a[text()="??"]',autopager:{pageElement:'//div[@id="postlist"] | //form[@method="post"][@name]',replaceE:'//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',lazyImgSrc:"zoomfile",stylish:'.mbbs_code{font-family:Monaco,Consolas,"Lucida Console","Courier New",serif;font-size:12px;line-height:1.8em;list-style-type:decimal-leading-zero;padding-left:10px;background:none repeat scroll 0 0 #f7f7f7;color:#666;border:1px solid #ccc;overflow:hidden;padding:10px 0 5px 10px}',filter:function(e){const n=document.querySelectorAll("#postlistreply");if(n.length>1){const r=n[0];r.parentNode.removeChild(r)}},documentFilter:function(e){const n=e.querySelectorAll('pre[class^="brush:"]');[].forEach.call(n,function(r){r.classList.add("mbbs_code")})}}},{name:"phpWind\u8BBA\u575B\u5217\u8868",url:/^https?:\/\/(?:www\.[^/]+\/|[^/]+\/(?:bbs\/)?)?thread/i,preLink:'//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',nextLink:'//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',autopager:{pageElement:'//div[@class="t z"] | //div[@class="z"] | //div[@id="ajaxtable"]'}},{name:"phpWind\u8BBA\u575B\u5E16\u5B50",url:/^https?:\/\/(?:www\.[^/]+\/|[^/]+\/(?:bbs\/)?)?read/i,preLink:'//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',nextLink:'//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',autopager:{pageElement:'//div[@class="t5"] | //div[@class="read_t"] | //div[@id="pw_content"]'}},{name:"phpBB\u5217\u8868",url:/^https?:\/\/[^/]+(\/[a-z,0-9]+)?\/viewforum/i,exampleUrl:"http://www.firefox.net.cn/forum/viewforum.php?f=4",nextLink:"auto;",autopager:{pageElement:'(//div[@id="page-body"]/div[@class="forumbg"]|//table[@class="forumline"]|//table[@class="tablebg"])',remain:1/3}},{name:"phpBB\u5E16\u5B50",url:/^https?:\/\/[^/]+(\/[a-z,0-9]+)?\/viewtopic/i,exampleUrl:"http://www.firefox.net.cn/forum/viewtopic.php?t=34339",nextLink:"auto;",autopager:{pageElement:'(//div[@id="page-body"]/div[contains(@class,"post")]|//table[@class="forumline"]|//table[@class="tablebg"])'}},{name:"phpBB Search",url:/^https?:\/\/forum\.[^/]+\/search\.php/i,exampleUrl:"http://forum.everedit.net/search.php?keywords=%E5%A4%A7%E7%BA%B2",nextLink:"auto;",autopager:{pageElement:'id("page-body")/div[starts-with(@class, "search post")]',replaceE:'id("page-body")/ul[@class="linklist"]'}},{name:"discuz\u8BBA\u575B\u901A\u7528\u641C\u7D22",url:"^https?://[^/]+/f/(?:discuz|search)",nextLink:"auto;",pageElement:'id("result-items")'},{name:"View forum - \u901A\u7528",url:"^https?://.+?/viewforum\\.php\\?",nextLink:'//span[@class="gensmall"]/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class="nav"])[last()]/b[last()]/following-sibling::a[1]  | //div[@class="pagination"]/span/strong/following-sibling::a[1] | //a[text()="Next"]',pageElement:'//ul[contains(concat(" ",@class," ")," topics ")]|//form[table/@class="forumline"]'},{name:"wiki \u901A\u7528",url:".\\?(?:.+&)?search=",nextLink:'//a[@class="mw-nextlink"]',pageElement:'//ul[@class="mw-search-results"]'},{name:"\u901A\u7528 Forum \u89C4\u52191",url:"^https?://.*((showthread\\.php\\?)|(forum|thread))",nextLink:'//a[@rel="next"]',pageElement:'//div[@id="posts"]|//ol[@id="posts"]/li',separatorReal:!1},{name:"\u901A\u7528 Forum \u89C4\u52192 vBulletin threads",url:"^https?://[^?#]+?/showthread\\.php\\?",nextLink:'//tr[@valign="top"]//div[@class="pagenav"]//a[contains(text(), ">")]',pageElement:'(//div[@class="pagenav"])[1]|//div[@id="posts"]/node()',separatorReal:!1},{name:"\u901A\u7528 Forum \u89C4\u52193 vBulletin thread_list",url:"^https?://.*((forumdisplay\\.php\\?)|forum)",nextLink:"auto;",pageElement:'//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"] | //div[@id="threadlist"] | //div[@id="postlist"]',separatorReal:!1},{name:"\u901A\u7528 Forum \u89C4\u52194",url:/^https?:\/\/forums\..*\/threads/i,nextLink:`(//div[@class="PageNav"])[1]//a[contains(text(),' > ')]`,pageElement:'//ol[@id="messageList"]/li',separatorReal:!1},{name:"PHPWind 5.3.0 / 6.0.0 / 6.3.2 / 7.0.0 / 7.5.0 - View Thread",url:"^https?://.+/read\\.php\\?.*tid((=[0-9]+.*)|(-[0-9]+.*\\.html?))$",nextLink:"auto;",pageElement:'//form[@name="delatc"]',exampleUrl:"http://www.yydzh.com/read.php?tid=1584013"},{name:"Typecho",url:"^https?://",nextLink:"//ol[@class='page-navigator']/li[@class='next']/a",autopager:{pageElement:function(e,n,r){const a=de("//head/meta[@name='generator']",e,e);if(!a||!a.content.includes("Typecho")||!e.documentElement.outerHTML.includes("Typecho"))return null;try{return ot("//article[@class='post'] | //div[@class='blog-post']",e,e)}catch(i){return console.error(i),null}},relatedObj:!0}},{name:"XenForo thread",url:"^http(s)?://.+/(forums?|threads|community)/",exampleUrl:"https://xenforo.com/community/threads/job-xf-emailunsubscribe-invalid-header-value-detected.177611/",pageElement:"//div[@class='block-container lbContainer']",nextLink:"//a[@class='pageNav-jump pageNav-jump--next']"},{name:"WordPress",url:"^https?://[^/]+(/page/\\d+)?",nextLink:function(e,n,r){const a=r.replace(/^(.*)(#[^/]*)?$/,"$1");if(a.slice(a.length-5,a.length)===".html"||a.slice(a.length-4,a.length)===".htm")return;const i=/^(https?:\/\/.*?)(\/page\/\d+\/?)?$/.exec(a);if(i[2]){const s=Number(/\/page\/(\d+)/.exec(i[2])[1])+1;return a.replace(/^(https?:\/\/.*?\/page\/)\d+(.*)$/,"$1"+String(s)+"$2")}else return a.replace(/^(.*?)\/?$/,"$1")+"/page/2"},autopager:{pageElement:function(e,n,r){const a=[/^https?:\/\/bwg\.net\/?$/,/^https?:\/\/sunbox\.cc\/?$/,/^https?:\/\/anime1\.me/,/^https?:\/\/github\.com/];for(var i=0;i<a.length;i++)if(a[i].test(r))return null;const s=["wp-content","wp-plugin","wp-comment"];var o=!1;for(i=0;i<s.length;i++)if(e.documentElement.outerHTML.indexOf(s[i])>-1){o=!0;break}if(!o)return null;const u=["\u53D1\u8868\u8BC4\u8BBA","\u63D0\u4EA4\u8BC4\u8BBA","\u6DFB\u52A0\u7559\u8A00","\u63D0\u4EA4\u7559\u8A00","\u30B3\u30E1\u30F3\u30C8\u3092\u9001\u4FE1","SUBMIT COMMENT","POST COMMENT","Submit Comment","Post comment","Post Comment"];for(i=0;i<u.length;i++)if(de("//input[@value='"+u[i]+"']",e,e)||de("//a[text()='"+u[i]+"']",e,e))return null;if((document.documentElement.textContent||document.documentElement.innerText).indexOf("comment-form"))return null;const c=["//button[@id='submit']","//div[@class='single-post-box']","//div[@class='single_post']"];for(i=0;i<c.length;i++)if(de(c[i],e,e))return null;var p=me("//div[contains(@class,'main')]//article[starts-with(@id,'post-')]",e,e,n);return p.length>0||(p=me("//article[starts-with(@id,'post-')]",e,e,n),p.length>0)||(p=me("//*[contains(@class,'container')]//article|//*[contains(@class,'container')]//div[contains(@class,'article-post')]",e,e,n),p.length>0)||(p=me("//div[@id='main']/div[@class='post-entry']",e,e,n),p.length>0)||(p=me("//*[contains(@class,'container')]//div[substring(@class,string-length(@class) -string-length('post')+1)='post']",e,e,n)),p},relatedObj:!0}},{name:"Generic Posts Rule created by swdyh",exampleUrl:"http://wedata.net/items/400.json",url:"^https?://.+",pageElement:"(//article[not(contains(../@class,'widget'))][not(contains(@class,'columns four'))][not(ancestor::*[starts-with(@class,'sidebar')])]|//*[starts-with(@id,'post-')][not(contains(@id,'post-rating'))])[not(.//*[contains(@class,'admz')])][not(id('load-more-posts') or @id='fpost' or contains(@class,'carousel'))][parent::node()[not(self::h2)][not(@id='side')][not(contains(@class,'thumbnail'))][not(following-sibling::*[not(@id='side')][article or *[starts-with(@id,'post-')]])]/*[self::article or starts-with(@id,'post-')][following-sibling::node()[self::article or starts-with(@id,'post-')][not(contains(@id,'nav'))] or not(following-sibling::*)][parent::*[not(contains(@class,'userContent'))]]]|id('content')[count(div)>1]/div[contains(@class,'post')][not(contains(div/@class,'breadcrumb'))][not(contains(div/@class,'nav'))]",nextLink:"(//*[not(contains(@class,'_inactive'))]/a[starts-with(@class,'nextpostslink') or contains(@class,'next page-numbers') or (.|..)[normalize-space(@rel)='next' or normalize-space(@class)='next' or contains(@class,'pagination-next')]][not(span/@class='link-text')]|//*[contains(@class,'nav-previous')][not(contains(@class,'pull'))]/a|(//*[contains(@class,'current')][number()>0]/following-sibling::a[1]|(//li|//span|//div)[(.//*|.)[contains(@class,'current')]][number()>0]/following-sibling::*[self::li or self::span or self::div][1]/a))[not(starts-with(@href, '#'))]",autopager:{stylish:'@-moz-document domain("wotopi.jp") { .figure-list{display:flex; flex-wrap:wrap;} }'}}],yf=[{name:"Google\u641C\u7D22",url:"^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp|search|#|$|\\?)",exampleUrl:"http://www.google.com",enable:!0,useiframe:!1,viewcontent:!1,nextLink:'id("pnnext") | id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a | id("nn")/parent::a',preLink:'//a[@id="pnprev"]',autopager:{enable:!0,useiframe:!1,iloaded:!1,itimeout:0,newIframe:!1,pageElement:'//div[@id="res"]|//div[@id="extrares"]',remain:1/3,relatedObj:["css;div#navcnt","bottom"],replaceE:'//div[@id="navcnt"]',ipages:[!1,2],separator:!0,separatorReal:!0,maxpage:66,manualA:!1,lazyImgSrc:"imgsrc",documentFilter:function(e,n){const r=e.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]',e,null,9,null).singleNodeValue;if(r)try{new Function("document","window","google",r.nodeValue)(e,unsafeWindow,unsafeWindow.google)}catch(u){console.log("Error in setImagesSrc: ",u)}const a=ot("//g-scrolling-carousel/div/div/div",e,e);if(a.length>0)for(const u of a)u.style.cssText+="display: flex;flex-wrap: nowrap;width: 600px;white-space: nowrap;overflow-x: auto;";const i=ot("//g-scrolling-carousel/div/div/div/div[not(@data-vis)]//g-img/img",e,e);if(i.length>0)for(const u of i)u.setAttribute("src",u.getAttribute("data-src")),u.style.opacity="1";ot("//script[contains(text(), '_setImagesSrc') and contains(text(), 'data:image')]",e,e).forEach(u=>{const c=u.innerHTML.replace(/^\(function\(\){(.*)}\)\(\);?$/,"$1").replace(/_setImagesSrc.*/,""),p=new Function(c+"return {ii, s}")();p.ii.forEach(h=>{e.getElementById(h).setAttribute("src",p.s)})});const o=e.getElementById("brs");o&&o.remove()},startFilter:function(e,n){const r=e.createElement("script");r.type="text/javascript",r.textContent='                  Object.defineProperty(window, "rwt", {                      configurable: false,                      enumerable: true,                      get: function () {                          return function() {};                      },                  });                  ',e.documentElement.appendChild(r),e.documentElement.removeChild(r);const a=e.getElementById("brs");a&&(a.id="ibrs"),console.log("%cGoogle    is %s","font-weight:bold;color:red",Qt("1F4A9"));const i=de("//input[@title='Search']",e,e);i?console.log("%cMicrosoft is %s %csearch with Bing %s","font-weight:bold;color:00bbee",Qt("1F451"),"font-weight:bold;color:00bbee",encodeURI("https://www.bing.com/search?q="+i.value)):console.log("%cMicrosoft is %s","font-weight:bold;color:00bbee",Qt("1F451"))}}},{name:"4khd",url:"^https?://(www\\.)?4khd\\.(com|[^/]*workers\\.dev)(/(pages|search|\\?query).*)?",pageElement:"//li[contains(@class,'post')]",exampleUrl:"https://www.4khd.com/search/forger",nextLink:"//span[contains(@class, 'current')]/following-sibling::a",autopager:{useiframe:!0,ipages:[!0,10],separator:!1,startFilter:function(e,n){try{const r=e.querySelector(".fr-mobile-hide");if(r){const a=r.className;r.setAttribute("class",a.replace("fr-mobile-hide","").replace("fr-tablet-hide",""))}}catch(r){console.error(r)}}}},{name:"4khd_post",url:"^https?://(www\\.)?4khd\\.(com|[^/]*workers\\.dev)/.*\\.html$",pageElement:"//div[contains(@class,'entry-content')]",nextLink:"//li[@class='numpages current']/following-sibling::li/a",useiframe:!0,autopager:{ipages:[!0,10],separator:!0}},{name:"\u6027\u611F\u5C24\u7269",url:"^https?://(www\\.)?jpxgmn\\.(com|[^/]*workers\\.dev)/[^/]*/[^/]*\\.html",pageElement:"//article[@class='article-content']/p",exampleUrl:"http://www.xgyw.cc/Xgyw/Xgyw6874.html",nextLink:"//div[@class='pagination']/ul/a[text()='\u4E0B\u4E00\u9875']",autopager:{ipages:[!0,30],startFilter:function(e,n){[e.querySelector("div.pagination > p"),e.querySelector('header > a[href^="http"]'),e.querySelector("ins")].forEach(i=>{i&&i.remove()});const a=e.querySelector('div[class^="div_"]');a&&a.closest("div").remove()}}},{name:"\u6027\u611F\u5C24\u7269search",url:"^https?://(www\\.)?jpxgmn\\.(com|[^/]*workers\\.dev)/plus/search.*",pageElement:"//div[@class='node']",exampleUrl:"https://www.xgmn5.xyz/plus/search/index.asp?keyword=%E5%B0%A4%E5%A6%AE%E4%B8%9D",nextLink:"//div[@class='pagination']/ul/a[@class='current']/following-sibling::a",autopager:{ipages:[!0,5],startFilter:async function(e,n){e.getElementById("thumbCss")||We("img.thumb{width:100%;height:auto;display:block}@media only screen and (min-width:1025px){img.thumb{width:50%}}","thumbCss",e);const r=e.querySelectorAll("div.node > a");r.length>0&&await Promise.all([].map.call(r,async a=>{const i=a.getAttribute("href"),s=await an.get(i),u=new DOMParser().parseFromString(s.data,"text/html").querySelector("article.article-content > p > img");if(u){const c=ne("img",{attr:{src:u.getAttribute("src"),class:"thumb"}});a.parentNode.insertBefore(c,a.nextSibling)}}))},documentFilter:"startFilter"}},{name:"\u6027\u611F\u5C24\u72692",url:"^https?://(www\\.)?jpxgmn\\.com/new\\.html",pageElement:"//li[@class='related_box']",exampleUrl:"http://www.xgyw.cc/Xgyw",nextLink:"null;",autopager:{ipages:[!0,10],startFilter:function(e,n){e.querySelectorAll('li > a[href^="/html"]').forEach(a=>{a.closest("li").remove()})}}},{name:"\u767E\u5EA6\u641C\u7D22",url:"^https?://www\\.baidu\\.com/",enable:!0,nextLink:'//div[@id="page"]//a[contains(text(),"\u4E0B\u4E00\u9875")][@href]',preLink:'//div[@id="page"]//a[contains(text(),"\u4E0A\u4E00\u9875")][@href]',autopager:{pageElement:"css;div#content_left > *",HT_insert:["css;div#content_left",2],replaceE:"css;#page",stylish:".autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}",startFilter:function(e,n){try{n.document.cookie="ISSW=1"}catch(r){console.error(r)}},filter:function(e){["c-img-border","c-img-radius-large"].forEach(n=>{const r=document.querySelectorAll("."+n);[].forEach.call(r,a=>{console.log(a);let i=a.getAttribute("class");i=i.replace(RegExp("\\b"+n+"\\b","g"),""),a.setAttribute("class",i)})})}}},{name:"kongregate",url:"^https?://www\\.kongregate\\.com",nextLink:"(//li[@class='next_link']/a)[1]",autopager:{scriptFilter:"renderPosts",pageElement:"//table[@class='posts']/tbody",filter:function(e){const n=ot(".//script[contains(text(), 'renderPosts')]",e[0],document);if(n.length>0)for(const r of n)try{new Function(r.innerText)()}catch(a){console.error(a)}}}},{name:"kongregate_list",url:"^https?://www\\.kongregate\\.com",nextLink:"(//li[@class='next_link']/a)[1]",pageElement:"//div[@id='featurewide']/table/tbody"},{name:"\u5C0F\u6728\u866B-\u5E16\u5B50",url:"^https?://(www\\.)?muchong\\.com/t-.*$",nextLink:"auto;",pageElement:"//div[@id='maincontent']/table/tbody[@id]",autopager:{relatedObj:!0,sepdivDom:function(e,n){const r=e.createElement("td");r.appendChild(n);const a=e.createElement("tr");r.setAttribute("colspan","2"),a.appendChild(r);const i=e.createElement("tbody");return i.appendChild(r),i}}},{name:"gelbooru.com",url:"https?://gelbooru\\.com",nextLink:"css;.pagination > a[alt='next']",autopager:{pageElement:"//div[contains(@class,'thumbnail-preview')]",filter:function(e){[].forEach.call(e,function(n){n.querySelector("a").removeAttribute("target")})}}},{name:"smzdm-comment",url:/^https?:\/\/\w+\.smzdm\.com(\/\w+)?\/p\/[\d\w\W]+/i,exampleUrl:"https://post.smzdm.com/p/559992/",nextLink:'//ul[@class="pagination"]/li[@class="pagedown"]/a',autopager:{pageElement:'id("commentTabBlockNew")/ul[@class="comment_listBox"]',excludeElement:'//div[@class="article-card J_trigger_ani"]',replaceE:'(//ul[@class="pagination"])[1]',startFilter:function(e){const n=e.querySelector(".pagination");n&&n.parentNode.removeChild(n)}}},{name:"\u548C\u8BAF\u535A\u5BA2",url:/^https?:\/\/\w+\.blog\.hexun\.com\//i,exampleUrl:"http://23802543.blog.hexun.com/",nextLink:function(e){var n=e.querySelector('.PageSkip_1 a[title="\u4E0B\u4E00\u9875"]').getAttribute("href");return n=n.replace(/(\/p\d+\/).*/,"$1default.html"),n},autopager:{pageElement:'id("DefaultContainer1_ArticleList_Panel1")'}},{name:"m-team artist detail",url:"^https?://kp\\.m-team\\.cc/artist\\.php?",nextLink:'//b[@title="Alt+Pagedown"]/parent::a',autopager:{pageElement:'//form[@id="form2"]/table',relatedObj:!0,documentFilter:"startFilter",startFilter:function(e){const n=ot("//div[@class='artist']/div[@class='atl']/form/table/tbody/tr/td[@colspan='5']/parent::tr",e,e);if(n.length>0)for(var r=0;r<n.length;r++){var a=n[r].getElementsByTagName("img");if(a){const s=a[0].getAttribute("src"),o=ne("tr",{attr:{align:"center"},children:[ne("td",{attr:{colspan:5,style:"border-bottom:1px dashed black;"},children:[ne("img",{attr:{src:s,style:"display:block; width:100%; height:auto;"}})]})]});n[r].parentNode.insertBefore(o,n[r])}}}}},{name:"m-team adults",url:"^https?://kp\\.m-team\\.cc/adult\\.php",nextLink:'//b[@title="Alt+Pagedown"]/parent::a',autopager:{pageElement:'//table[@class="torrents"]',startFilter:function(e){const n=e.getElementsByClassName("torrentimg");[].forEach.call(n,function(r){const a=r.getElementsByTagName("img");if(a){const i=ne("img",{attr:{src:a[0].getAttribute("src"),style:"display:block; width:100%; height:auto;"}}),s=ne("td",{attr:{colspan:2,style:"border-bottom:1px solid black;"}}),o=ne("tr",{attr:{align:"center"}});s.appendChild(i),o.appendChild(s),r.parentNode.parentNode.insertBefore(o,r.parentNode)}})},documentFilter:"startFilter"}},{name:"idope.se",url:/^https?:\/\/idope\.se\/torrent-list\/.+/i,exampleUrl:"https://idope.se/torrent-list/transformer/?p=3",preLink:{startAfter:"?p=",inc:-1,min:1},nextLink:{startAfter:"?p=",mFails:[/^https?:\/\/idope\.se\/torrent-list\/.+/i,"/?p=1"],inc:1,isLast:function(e,n,r){if(!e.getElementById("next"))return!0}},autopager:{pageElement:'//*[@id="div2child"]',useiframe:!0}},{name:"\u5929\u6DAF\u8BBA\u575B\u5E16\u5B50",url:/^https?:\/\/bbs\.tianya\.cn\/.+\.shtml/i,exampleUrl:"http://bbs.tianya.cn/post-feeling-2792523-1.shtml",nextLink:'//div[@class="atl-pages"]/descendant::a[text()="\u4E0B\u9875"][@href]',autopager:{useiframe:!0,pageElement:'//div[@class="atl-main"]',lazyImgSrc:"original",filter:function(e){const n=unsafeWindow.see_only_uname,r=unsafeWindow.setOnlyUser;n&&r(n)}}},{name:"Firefox\u4E2D\u6587\u793E\u533A - \u5217\u8868",url:"^https?://www\\.firefox\\.net\\.cn/thread",nextLink:'//div[@class="pages"]/a[contains(text(), "\u4E0B\u4E00\u9875")]',autopager:{pageElement:'id("J_posts_list")',replaceE:"css;.pages",documentFilter:function(e){[].forEach.call(e.querySelectorAll("img.J_avatar"),function(n){n.setAttribute("onerror",'this.src="http://www.firefox.net.cn/res/images/face/face_small.jpg";')})}}},{name:"\u5C0F\u7C73\u624B\u673A\u5B98\u65B9\u8BBA\u575B",url:"^https?://bbs\\.xiaomi\\.cn/",nextLink:"//a[@class='nxt' and (text()='\u4E0B\u4E00\u9875')]",autopager:{pageElement:"id('postlist') | id('threadlist')",replaceE:'//div[@class="pg"][child::a[@class="nxt"]]',documentFilter:function(e){const n=e.querySelector("div[id^='post_']");n&&n.parentNode.removeChild(n)}}},{name:"\u6E38\u6C11\u661F\u7A7A",url:/^https?:\/\/www\.gamersky\.com\/\w+\/\d{6}\/.*.shtml/i,exampleUrl:"https://www.gamersky.com/ent/201510/671493.shtml | https://www.gamersky.com/handbook/201707/922480.shtml",nextLink:function(e,n,r){const a=de('//div[@class="page_css"]//a[(text()="\u4E0B\u4E00\u9875")]',e,e);if(!a)return null;const i=/^(https)?:\/\/.*$/.exec(r);if(i){var s=/^https?:\/\/(.*)$/.exec(a.getAttribute("href"));return i[1]+"://"+s[1]}return a.getAttribute("href")},autopager:{relatedObj:!0,pageElement:'//div[@class="Mid2L_con"]',replaceE:'//div[@class="page_css"]'}},{name:"ali213 - \u653B\u7565",url:/^http:\/\/gl\.ali213\.net\/html/,exampleUrl:"http://gl.ali213.net/html/2011/25399_2.html",nextLink:"id('after_this_page')",autopager:{useiframe:!0,pageElement:"//div[@class='glzjshow_con']",replaceE:"id('after_this_page')",startFilter:function(e){const n=de('//div[@class="glzjshow_plun"]',e,e);n&&(n.style.display="none")}}},{name:"\u591A\u73A9 - \u653B\u7565",url:/^https?:\/\/tv\.duowan\.com\/\d+\/\d+\.html/,exampleUrl:"http://tv.duowan.com/1801/380717306538.html",nextLink:"id('pageNum')//a[text()='\u4E0B\u4E00\u9875']",autopager:{useiframe:!0,replaceE:"id('pageNum')",pageElement:"//div[@class='box-bd'][last()]",startFilter:function(e){const n=e.querySelector("#pageNum");n&&de("//div[@class='box-bd'][last()]",e,e).after(n);const r=e.querySelector(".aside-wrap");r&&(r.style.display="none")},documentFilter:function(e){const n=e.querySelector("#pageNum");n&&(n.style.display="none")}}},{name:"yuyouge.com",url:"^https?://www\\.yuyouge\\.com",nextLink:"auto;",pageElement:"//article/div[@id='h1']|//article/div[@id='txtContent']",documentFilter:function(e){const n=document.querySelector("#txtContent").getAttribute("style"),r=document.querySelector("#txtContent").getAttribute("class");[].forEach.call(e.querySelectorAll("#txtContent"),function(a){a.setAttribute("style",n),a.setAttribute("class",r)})}},{name:"\u7535\u73A9\u5DF4\u58EB - \u56FE\u6587",url:"^https?://pc\\.tgbus\\.com/.*\\d+/$",exampleUrl:"http://pc.tgbus.com/tuwen_180/88983/",nextLink:"//div[contains(@class, 'art-page')]/a[text()='\u4E0B\u4E00\u9875']",autopager:{pageElement:"//div[@class='art-body']",documentFilter:function(e){const n=e.querySelector(".art-pagination");n&&n.parentNode.removeChild(n),e.querySelector(".art-page").style.display="none"}}},{name:"koolshare\u6269\u5C55\u9875\u9762",url:"^https?://koolshare\\.cn/home\\.php",exampleUrl:"http://koolshare.cn/home.php",nextLink:"//a[contains(text(),'\u4E0B\u4E00\u9875')]",pageElement:"id('ct')//tbody",autopager:{documentFilter:function(e){const n=e.querySelector(".th");n&&n.parentNode.removeChild(n)}}},{name:"Jable",url:/^https?:\/\/jable\.tv/i,nextLink:function(e,n,r){const a=de("//ul[@class='pagination']/li[span[contains(@class,'active')]]/following-sibling::li[1]/a",e,e),i=a.getAttribute("data-block-id"),s=a.getAttribute("data-parameters").replace(/:/g,"=").replace(/;/g,"&");return r+"?mode=async&function=get_block&block_id="+i+"&"+s+"&_="+Date.now()},autopager:{enable:!1,useiframe:!0,pageElement:"//ul[@class='pagination']/preceding-sibling::div/div"},exampleUrl:"http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html"},{name:"Netflav",url:"^https?://netflav\\.com",nextLink:{startAfter:"?page=",mFails:[/^https?:\/\/(?:netflav\.com)\/.+/i,"?page=1"],inc:1,isLast:function(e,n,r){const a=Number(de("//div[@id='general-pagination']/div/a[@aria-current='true']",e,e).innerText),i=Number(de("(//div[@id='general-pagination']/div/a[@type='nextItem']/preceding-sibling::a)[last()]",e,e).innerText);if(a==i)return!0}},autopager:{useiframe:!0,iloaded:!0,pageElement:"(//div[@id='general-pagination']/preceding-sibling::div)[last()]/div",HT_insert:["(//div[@id='general-pagination']/preceding-sibling::div)[last()]",2]},exampleUrl:"https://netflav.com/chinese-sub?page=1"},{name:"\u60A0\u60A0\u7F8E\u56FE",url:/^https?:\/\/www\.youyourentiyishu\.com/i,nextLink:function(e,n,r){const a=r.match(/\d+-(\d+)\.html/);if(a){const s=Number(a[1])+1,o=r.replace(a[1]+".html",s+".html"),u=e.querySelector("a.next").getAttribute("href");return o!=u?void 0:o}else return r.replace(".html","-2.html")},autopager:{enable:!0,pageElement:'//div[@class="showimg"]/a',ipages:[!0,30]},exampleUrl:"http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html"},{name:"laomaoit - \u8001\u6B81\u8F6F\u4EF6\u5206\u4EAB",url:"^https?://www\\.(laomoit|mpyit)\\.com",exampleUrl:"https://www.laomoit.com",nextLink:'//div[@id="pagenavi"]//a[text()="\u4E0B\u4E00\u9875"]',autopager:{pageElement:'id("post") | id("content")',replaceE:"css;#pagenavi",documentFilter:function(e){const n=e.querySelector(".browse");n&&n.parentNode.removeChild(n);const r=e.querySelector("#map");r&&r.parentNode.removeChild(r)}}},{name:"geekbench",url:/^https?:\/\/browser\.geekbench\.com/i,nextLink:"//li[contains(@class,'page-item next next_page')]/a",autopager:{pageElement:"//div[@class='row']/div[@class='col-12 list-col']",sepdivDom:function(e,n){return n.className+=" col-12 list-col",n}}},{name:"CSDN\u535A\u5BA2",url:/^https?:\/\/blog\.csdn\.net/i,exampleUrl:"http://blog.csdn.net/wangjieest?viewmode=list",nextLink:function(e,n,r){for(var a=0;a<e.scripts.length;a++){const i=e.scripts[a].text;if(typeof i<"u"&&i.indexOf("currentPage")>0){const s=i.match(/currentPage[ ]?=[ ]?(\d+)/);if(s.length!=2)continue;const o=i.match(/baseUrl[ ]?=[ ]?'([^']+)'/);if(o.length!=2)continue;return o[1]+"/"+(parseInt(s[1])+1)}}return null},autopager:{pageElement:'//div[@id="article_list"] | // div[@class="article-list"]',documentFilter:function(e){const n=e.querySelector(".article-list");n&&(n.style.marginBottom="0")},startFilter:function(e,n){const r=e.querySelector(".article-list");r&&(r.style.marginBottom="0");const a=document.querySelector("#pageBox");a&&a.parentNode.parentNode.appendChild(a);const i=document.querySelector(".box-box-large");i&&i.parentNode.removeChild(i)}}},{name:"CSDN\u8BDD\u9898",url:/^https?:\/\/bbs\.csdn\.net\/topics\//i,exampleUrl:"http://bbs.csdn.net/topics/390244325",nextLink:'(//div[@class="page_nav"])[1]/a[text()="\u4E0B\u4E00\u9875"]',autopager:{pageElement:'id("bbs_detail_wrap")',documentFilter:function(e){const n=e.querySelector(".bbs_title_h");n&&n.parentNode.removeChild(n);const r=e.querySelector(".bbs_title_bar");r&&r.parentNode.removeChild(r);const a=e.querySelector(".bbs_bread_wrap");a&&a.parentNode.removeChild(a);const i=e.querySelectorAll(".mod_fun_wrap");if(i){let s=0;i.length==2&&(s=1),i[s].style.display="none"}},startFilter:function(e){const n=e.querySelectorAll(".mod_fun_wrap");if(n){let a=0;n.length==2&&(a=1),n[a].style.display="none"}const r=e.querySelector(".post_feed_box");r&&r.parentNode.removeChild(r)},sepdivDom:function(e,n){return n.className+=" bbs_detail_wrap",n}}},{name:"bl-novel",url:"^https?://bl-novel\\.in/novel",nextLink:"//a[@id='pb_next']",pageElement:"//div[@id='nr']",documentFilter:function(e,n){var r=e.getElementsByTagName("script"),a=/chapter\s*=\s*secret\(['"](.*)['"],\s*['"](.*)['"],\s*(\w+)\s*\)/g,i;[].forEach.call(r,function(s){if(s.innerText.indexOf("var chapter")>=0){var o=a.exec(s.innerText),u=o[1],c=o[2];o[3].indexOf("true")>=0?i=secret(u,c,!0):i=secret(u,c,!1),e.getElementById("nr1").innerHTML=i}})}},{name:"\u7B2C\u4E00\u7248\u4E3B",url:"^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",nextLink:"auto;",pageElement:"//div[@id='content']"},{name:"\u7B2C\u4E00\u7248\u4E3B",url:"^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)",pageElement:"//div[@id='content']",nextLink:function(e,n,r){var a=ot("//div[@class='chapterPages']/a",e),i=r.substr(0,r.lastIndexOf("/"))+"/",s=0;for(s=0;s<a.length;s++)if(a[s].className==="curr")return s+1<a.length?i+a[s+1].getAttribute("href"):wf(r)+de("//span[@class='next']/a").getAttribute("href")}},{name:"\u8D77\u70B9\u6587\u5B66-\u6392\u884C\u699C",url:/^https?:\/\/www\.(qidian)\.com(\/mm)?\/rank\/.*/i,exampleUrl:"https://www.qidian.com/rank/collect",nextLink:function(e,n,r){var a=de('//div[@id="page-container"]',e);if(a===null)return;const i=Number(a.dataset.page)+1;if(!(i>a.dataset.pagemax))return r.indexOf("page=")!=-1?r.replace(/page=\d+/,"page="+i):r.indexOf("?")!=-1?r+"&page="+i:r+"?page="+i},autopager:{pageElement:'//div[@class="rank-body"]'}},{name:"rushi.net",url:"^https?://www.rushi.net/Home/Works",nextLink:"css;.gopage .next-btn",autopager:{pageElement:"css;.work_list_line",startFilter:t=>{const e=document.querySelector(".hot-company-job");e&&e.parentNode.removeChild(e)},documentFilter:"startFilter"}},{name:"\u4F18\u4E66-\u4E66\u5355|\u8BC4\u8BBA",url:/^https?:\/\/www\.yousuu\.com\/(comments|booklist)/i,nextLink:function(e,n,r){var a=de('//ul[contains(@class, "pagination")]',e);if(a!==null){var i;if(a.childNodes.length==2)i=a.childNodes[1];else for(var s=a.childNodes.length-1;s>=0;s--)if(a.children[s].className=="active"){if(s==a.childNodes.length-2)return;i=a.childNodes[s+1]}var o=/jumpurl\('(\w+)','?(\d+)'?\)/.exec(i.innerHTML);if(!(o===null||o.length!=3)){var u=o[1]+"="+o[2];return r.indexOf(o[1]+"=")!=-1?r.replace(new RegExp(o[1]+"=\\d+"),u):r.indexOf("?")!=-1?r+"&"+u:r+"?"+u}}},autopager:{pageElement:'//table[contains(@class, "shudanlist")] | //ul[contains(@class, "ys-comments")] | //div[@class="ro"]'}},{name:"\u52A8\u6F2B\u4E4B\u5BB6\u6F2B\u753B\u7F51",url:/^https?:\/\/(www|manhua)\.(dmzj|178)\.com\/\w+\/\d+\.shtml/,exampleUrl:"https://manhua.dmzj.com/yuanlian/36944.shtml#@page=1",nextLink:function(e,n,r){const a=Number(de('//*[@id="page_select"]/option[@selected][1]',e).text.match(/(\d+)/)[1]),s=Number(de('//*[@id="page_select"]/option[last()]',e).text.match(/(\d+)/)[1]),o=a+1;if(!(o>s))return r.replace(/\.shtml(?:#@page=\d+)?/,".shtml#@page="+o)},autopager:{useiframe:!0,reload:!0,ipages:[!0,20],pageElement:'//div[@id="center_box"]/img'}},{name:"\u770B\u6F2B\u753B",url:/^https?:\/\/www\.manhuagui\.com\/comic\/.+/i,nextLink:function(e,n,r){const a=Number(de('//*[@id="page"]',e).innerHTML),s=Number(de('//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]',e).text),o=a+1;if(!(o>s))return r.replace(/\.html(?:#p=\d+)?/,".html#p="+o)},autopager:{useiframe:!0,newIframe:!1,reload:!0,pageElement:'//div[@class="clearfix"]',ipages:[!0,20]},exampleUrl:"https://www.manhuagui.com/comic/17332/372862.html"},{name:"SF\u5728\u7EBF\u6F2B\u753B",url:"^https?://(manhua\\.sfacg\\.com/mh|www\\.acg456\\.com)/.+",exampleUrl:"https://manhua.sfacg.com/mh/YULINGSHI/20087/#p=2",preLink:{startAfter:"#p=",inc:-1,min:1},nextLink:{startAfter:"#p=",mFails:[/^https?:\/\/(?:manhua\.sfacg\.com\/mh|www\.acg456\.com)\/.+/i,"#p=1"],inc:1,isLast:function(e,n,r){const a=Number(e.getElementById("TotalPage").innerText)-1;if(Number(e.getElementById("CurrentPage").innerText)==a)return!0}},autopager:{pageElement:'//img[@id="curPic"]',useiframe:!0,reload:!0,replaceE:'id("Pages")'}},{name:"\u54E6\u6F2B\u753B",url:/^https?:\/\/www\.omanhua\.com\/comic\//i,exampleUrl:"http://www.omanhua.com/comic/2957/36463/index.html?p=2",nextLink:{startAfter:"?p=",mFails:[/^http:\/\/www\.omanhua\.com\/comic\/.+/i,"?p=1"],inc:1,isLast:function(e,n,r){const a=e.getElementById("pageSelect");if(a){const s=a.options.length;if(a.selectedIndex==s-1)return!0}}},autopager:{useiframe:!0,pageElement:'//img[@id="mangaFile"]'}},{name:"\u6C57\u6C57\u6F2B\u753B",url:/^https?:\/\/\w+\.(?:vs20|3gmanhua|hhcomic|huhudm|huhumh|hhimm|hhmmoo)\.(?:com|net)\/\w+\/\d+\.html/i,exampleUrl:"http://www.hhmmoo.com/page315224/1.html?s=1\uFF1B http://www.hhmmoo.com/page315224/4.html?s=1&d=0",nextLink:function(e,n,r){const a=r.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/),i=Number(a[2]);var s=a[4];s||(s="&d=0");const o=i+1;var u=document.getElementById("hdPageCount");if(u)u=Number(u.value);else if(u=document.getElementById("spPageCount"),u)u=Number(u.innerText);else return;if(o!=u+1)return a[1]+o+a[3]+s},autopager:{useiframe:!0,pageElement:'//div[@id="iBody"]',ipages:[!0,20]}},{name:"99\u6F2B\u753B",url:/^https?:\/\/(cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(com|cc)/i,exampleUrl:"http://dm.99manga.com/comic/35416/316645/?p=2&s=0",nextLink:{startAfter:"?p=",inc:1,mFails:[/^https?:\/\/(?:cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(?:com|cc)\/.+/i,"?p=1&s=0"],isLast:function(e,n,r){const a=Number(e.getElementById("spPageCount").innerText);if(Number(e.getElementById("spPageIndex").innerText)==a)return!0}},autopager:{useiframe:!0,pageElement:'//*[@id="iBody"]'}},{name:"\u5929\u4F7F\u6F2B\u753B\u7F51,TSDM\u6F2B\u753B\u7EC4",url:/^https?:\/\/mh\.tsdm\.net\/comic\/.+/i,exampleUrl:"http://mh.tsdm.net/comic/4697/68059.html",useiframe:!0,preLink:{startAfter:"?p=",inc:-1,min:1},nextLink:{startAfter:"?p=",mFails:[/^http:\/\/mh\.tsdm\.net\/comic\/.+\.html/i,"?p=1"],inc:1,isLast:function(e,n,r){const a=e.getElementById("qTcms_select_i");if(a){const s=a.options.length;if(a.selectedIndex==s-1)return!0}}},autopager:{useiframe:!0,remain:1/2,pageElement:'//img[@id="qTcms_pic"]',ipages:[!0,20]}},{name:"930mh",url:/^https?:\/\/www\.930mh\.com\/manhua\/.+/i,exampleUrl:"http://www.930mh.com/manhua/13355/500671.html?p=2",preLink:{startAfter:"?p=",inc:-1,min:1},nextLink:{startAfter:"?p=",mFails:[/^https?:\/\/www\.930mh\.com\/manhua\/.+\.html/i,"?p=1"],inc:1,isLast:function(e,n,r){const i=e.getElementById("images").children[1].innerText.match(/\d+/g);if(Number(i[0])>=Number(i[1]))return!0}},autopager:{pageElement:'//div[@id="images"]/img',useiframe:!0,ipages:[!0,20]}},{name:"sis001.com",url:/^https?:\/\/(\w+\.)?sis001\.com\/forum\/(forum|thread)[0-9-]+\.html/i,exampleUrl:"https://www.sis001.com/forum/forum-230-1.html",nextLink:'//div[@class="pages_btns"]//a[@class="next"]',autopager:{pageElement:'//div[@class="mainbox"]//table[last()]',replaceE:'//div[@class="pages_btns"]',startFilter:function(e,n){const r=e.querySelector("#ad_text");r&&r.parentNode.removeChild(r)}}},{name:"\u8150\u6F2B\u753B",url:"^https?://www\\.fmhuaaa\\.net/manhua/\\d+/.+",enable:!0,pageElement:'//div[@class="bi"] //a',exampleUrl:"http://www.fmhuaaa.net/manhua/6265/832101.html",nextLink:'//div[@class="bp"]/a[text()="\u4E0B\u4E00\u9875"][@href]',autopager:{startFilter:(t,e)=>{t.getElementById("bigpic").src=t.getElementById("bigpic").src.replace("fmvip.xzglasses.com","fmvip.xzglasses.com"),Array.from(t.querySelectorAll("iframe")).forEach(n=>n.remove())},documentFilter:(t,e)=>{var n=t.body.innerHTML.match(/imgurl = '(.+)';/);n&&(n="//fmvip.xzglasses.com"+n[1]),t.getElementById("bigpic").src=n,t.getElementById("bigpic").dataset.link=n}}},{name:"xkcd",url:"^https?://(?:www\\.)?xkcd\\.com",nextLink:function(e,n,r){if(r.match(/\d+/)){var i=e.querySelector("a[rel=next]").getAttribute("href");return i="https://www.xkcd.com/"+i,i}else return r+"/2/"},pageElement:'id("middleContainer")'},{name:"javdb.com",url:"https?://javdb\\.com",nextLink:"//li[a[contains(@class,'is-current')]]/following-sibling::li[1]/a",pageElement:"//div[@class='grid columns']",documentFilter:function(e,n){const a=document.querySelector(".grid-item.column:nth-of-type(2)").offsetLeft||168;e.querySelector(".grid.columns").setAttribute("style","display: grid; grid-template-columns: repeat( auto-fit, ".concat(a,"px);justify-content: center;"))}},{name:"avgle.com/users/videos",url:"^https?://avgle\\.com/user/\\w+/videos.*",nextLink:"css;.pagination li:last-child .prevnext",pageElement:'//div[div[contains(@id,"video")] and @class="row"]',exampleUrl:"https://avgle.com/user/dksc/videos",filter:function(e){for(const n of e)for(const r of n.querySelectorAll("img"))r.getAttribute("data-original")||r.setAttribute("data-original",r.src)}},{name:"avgle.com",url:"^https?://avgle\\.com",nextLink:"css;.pagination li:last-child .prevnext",pageElement:"css;.container .row .row",filter:function(e){for(const n of e)for(const r of n.querySelectorAll("img"))r.getAttribute("data-original")||r.setAttribute("data-original",r.src)}},{name:"mygalgame",url:"^https://www\\.kkgal\\.com(/page/)?",nextLink:"css;.pagination-zan li:last-child a",pageElement:"css;#article-list",filter:function(e){if(e[0].querySelectorAll(".article")[0].getAttribute("aos")!="flip-up")return;let r=!0;const a=s=>{s.some(o=>{const u=o.target.firstElementChild;if(u){if(o.boundingClientRect.top>window.innerHeight-o.boundingClientRect.height*.3){if(r)return r=!1,!0;if(u.classList.contains("aos-animate")){u.classList.remove("aos-animate");return}u.classList.add("aos-animate")}else u.classList.add("aos-animate");o.intersectionRatio>.5&&u.classList.add("aos-animate")}})},i=new IntersectionObserver(a,{threshold:[.2,1]});e[0].querySelectorAll(".article").forEach(s=>{const o=document.createElement("div");s.parentElement.insertBefore(o,s),o.appendChild(s),i.observe(o)})}}];function wf(t){var e=_f(t,"/");return e.length>2?t.substr(0,e[2]):t}function _f(t,e){for(var n=[],r=-1;(r=t.indexOf(e,r+1))!=-1;)n.push(r);return n}let At,Zl,Xl;function St(t,e){if(!At){const n=ne("div",{attr:{style:"            position:fixed!important;            z-index:2147483647!important;            float:none!important;            width:auto!important;            height:auto!important;            font-size:13px!important;            padding:3px 20px 2px 5px!important;            background-color:#7f8f9c!important;            border:none!important;            color:#000!important;            text-align:left!important;            left:0!important;            bottom:0!important;            opacity:0;            -moz-border-radius:0 6px 0 0!important;            border-radius:0 6px 0 0!important;            -o-transition:opacity 0.3s ease-in-out;            -webkit-transition:opacity 0.3s ease-in-out;            -moz-transition:opacity 0.3s ease-in-out;        "}});document.body.appendChild(n),At=n}clearTimeout(Zl),clearTimeout(Xl),At.innerHTML=t,At.style.display="block",At.style.opacity="0.96",e===void 0&&(e=1666),e>0&&(Xl=setTimeout(function(){At.style.opacity="0"},e),Zl=setTimeout(function(){At.style.display="none"},e+300))}const et={};et["sp-separator"]=Cc,et["sp-prefs-spinner"]=Tc,et["sp-prefs-setup"]=Rc,et["sp-fw"]=Sc,function(){const t={html:!0,encoding:document.characterSet};y.setLevel("warn"),Oa.name==="firefox"?(He.name==="Violentmonkey"&&wt(He.version,"2.12.3")<=0||He.name==="Tampermonkey"&&wt(He.version,"4.10.6103")<0)&&(y.warn("[Super-preloader]","".concat(He.name,"  v").concat(He.version," has a flaw with Firefox, which may affect this script")),y.warn("[Super-preloader]","Check https://github.com/Tampermonkey/tampermonkey/issues/786 and https://github.com/violentmonkey/violentmonkey/issues/606 to learn more"),t.cookie=!0):He.name==="Tampermonkey"&&Oa.name==="safari"&&(y.warn("[Super-preloader]","".concat(He.name," has a flaw with Safari, which may affect this script")),y.warn("[Super-preloader]","Check https://github.com/Tampermonkey/tampermonkey/issues/786 and https://github.com/violentmonkey/violentmonkey/issues/606 to learn more"),t.cookie=!0),He.name.toLowerCase().includes("adguard")&&y.warn("[Super-preloader]","".concat(He.name," has issues with some specific like Google due to the way it injects script"));const e=an.create(t),n=ie;let r=[];if(document.documentElement.matches("svg")||document.querySelector("body > pre:only-child, body > img:only-child, body > video:only-child, body > embed:only-child, body > #outerContainer:first-child + #printContainer:last-child")||window.name==="mynovelreader-iframe")return;function a(){return window.name==="superpreloader-iframe"}if(a()){const _=function(){const S=window.frameElement?JSON.parse(window.frameElement.getAttribute("mutationObserver")):null;if(!S)window.parent.postMessage("superpreloader-iframe:DOMLoaded","*");else{const U=S.observers;let d=null;const j=[];U&&["attributes","addedNodes","removedNodes"].forEach(H=>{const Y=me(U[H]);Y.length>0&&(S.relatedObj?(j.push(Yl(Y[Y.length-1],H)),Y[0].scrollIntoView(),Y[Y.length-1].scrollIntoView()):j.push(Yl(Y[Y.length-1],H)))}),d?d=Promise.all(j):d=Promise.resolve(void 0);const w=S.timeout&&0;setTimeout(()=>{d.then(H=>{H&&H.forEach(Y=>{let{element:Se,type:Be,mutationList:ht,observer:kt}=Y;kt.disconnect()}),window.parent.postMessage("superpreloader-iframe:DOMLoaded","*")})},w)}};window.opera?document.addEventListener("DOMContentLoaded",_,!1):_();return}const i=[["\u732B\u6251\u5E16\u5B50",!0,/^https?:\/\/dzh\.mop\.com\/[a-z]{3,6}\/\d{8}\/.*\.shtml$/i],["\u94C1\u8840\u793E\u533A",!0,/^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i],["\u94C1\u8840\u793E\u533A-2",!0,/^https?:\/\/bbs\.qichelian\.com\/bbsqcl\.php\?fid/i],["\u767E\u5EA6\u7F51\u76D8\u641C\u7D22\u5F15\u64CE-\u767E\u5EA6",!0,/^https?:\/\/www\.baidu\.com\/baidu/i],["\u767E\u5EA6\u7F51\u76D8\u641C\u7D22\u5F15\u64CE-Google",!0,/^https?:\/\/74\.125\.128\.147\/custom/i]],s=[{url:/^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|#|$|\?)/,timer:2e3,mutationSelector:"#main"},{url:/^https?:\/\/www\.baidu\.com\/($|#wd=)/,timer:1e3,mutationSelector:"#wrapper_wrapper"},{url:/^https?:\/\/www\.newsmth\.net/,timer:1e3}],o={top:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==",bottom:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==",pre:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==",next:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC",next_gray:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==",pre_gray:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC",text_span_style:"color:#595959!important;"},u={loading:"#8B00E8",prefetcher:"#5564AF",autopager:"#038B00",Apause:"#B7B700",Astop:"#A00000",dot:"#00FF05"};let c=["\u4E0A\u4E00\u9875","\u4E0A\u4E00\u9801","\u4E0A1\u9875","\u4E0A1\u9801","\u4E0A\u9875","\u4E0A\u9801","\u7FFB\u4E0A\u9801","\u7FFB\u4E0A\u9875","\u4E0A\u4E00\u5F20","\u4E0A\u4E00\u5F35","\u4E0A\u4E00\u5E45","\u4E0A\u4E00\u7AE0","\u4E0A\u4E00\u8282","\u4E0A\u4E00\u7BC0","\u4E0A\u4E00\u7BC7","\u524D\u4E00\u9875","\u524D\u4E00\u9801","\u540E\u9000","\u5F8C\u9000","\u4E0A\u7BC7","previous","previous Page","\u524D\u3078","\u524D\u306E\u30DA\u30FC\u30B8"],p=["\u4E0B\u4E00\u9875","\u4E0B\u4E00\u9801","\u4E0B1\u9875","\u4E0B1\u9801","\u4E0B\u9875","\u4E0B\u9875 \u203A","\u4E0B\u9801","\u7FFB\u9875","\u7FFB\u9801","\u7FFB\u4E0B\u9801","\u7FFB\u4E0B\u9875","\u4E0B\u4E00\u5F20","\u4E0B\u4E00\u5F35","\u4E0B\u4E00\u5E45","\u4E0B\u4E00\u7AE0","\u4E0B\u4E00\u8282","\u4E0B\u4E00\u7BC0","\u4E0B\u4E00\u7BC7","\u524D\u8FDB","\u4E0B\u7BC7","\u540E\u9875","\u5F80\u540E","Next","Next Page","\u6B21\u3078","\u6B21\u306E\u30DA\u30FC\u30B8","\u6B21\u306E\u30DA\u30FC\u30B8 \xBB","\u4E0B\u4E00\u9875 \u2192","\u4E0B\u4E00\u9801 \u2192","\u4E0B1\u9875 \u2192","\u4E0B1\u9801 \u2192","\u4E0B\u9875 \u2192","\u4E0B\u9801 \u2192","\u7FFB\u9875 \u2192","\u7FFB\u9801 \u2192","\u7FFB\u4E0B\u9801 \u2192","\u7FFB\u4E0B\u9875 \u2192","\u4E0B\u4E00\u5F20 \u2192","\u4E0B\u4E00\u5F35 \u2192","\u4E0B\u4E00\u5E45 \u2192","\u4E0B\u4E00\u7AE0 \u2192","\u4E0B\u4E00\u8282 \u2192","\u4E0B\u4E00\u7BC0 \u2192","\u4E0B\u4E00\u7BC7 \u2192","\u524D\u8FDB \u2192","\u4E0B\u7BC7 \u2192","\u540E\u9875 \u2192","\u5F80\u540E \u2192","Next \u2192","Next Page \u2192","\u6B21\u3078 \u2192","\u6B21\u306E\u30DA\u30FC\u30B8 \u2192","\u4E0B\u4E00\u9875 \xBB","\u4E0B\u4E00\u9801 \xBB","\u4E0B1\u9875 \xBB","\u4E0B1\u9801 \xBB","\u4E0B\u9875 \xBB","\u4E0B\u9801 \xBB","\u7FFB\u9875 \xBB","\u7FFB\u9801 \xBB","\u7FFB\u4E0B\u9801 \xBB","\u7FFB\u4E0B\u9875 \xBB","\u4E0B\u4E00\u5F20 \xBB","\u4E0B\u4E00\u5F35 \xBB","\u4E0B\u4E00\u5E45 \xBB","\u4E0B\u4E00\u7AE0 \xBB","\u4E0B\u4E00\u8282 \xBB","\u4E0B\u4E00\u7BC0 \xBB","\u4E0B\u4E00\u7BC7 \xBB","\u524D\u8FDB \xBB","\u4E0B\u7BC7 \xBB","\u540E\u9875 \xBB","\u5F80\u540E \xBB","Next \xBB","Next Page \xBB","\u6B21\u3078 \xBB","\u540E\u4E00\u9875","\u5F8C\u4E00\u9801","\u4E0B\u4E00\u9875 \u203A","\u4E0B\u4E00\u9801 \u203A","\u4E0B1\u9875 \u203A","\u4E0B1\u9801 \u203A","\u4E0B\u9801 \u203A","\u7FFB\u9875 \u203A","\u7FFB\u9801 \u203A","\u7FFB\u4E0B\u9801 \u203A","\u7FFB\u4E0B\u9875 \u203A","\u4E0B\u4E00\u5F20 \u203A","\u4E0B\u4E00\u5F35 \u203A","\u4E0B\u4E00\u5E45 \u203A","\u4E0B\u4E00\u7AE0 \u203A","\u4E0B\u4E00\u8282 \u203A","\u4E0B\u4E00\u7BC0 \u203A","\u4E0B\u4E00\u7BC7 \u203A","\u524D\u8FDB \u203A","\u4E0B\u7BC7 \u203A","\u540E\u9875 \u203A","\u5F80\u540E \u203A","Next \u203A","Next >","Next Page \u203A","\u6B21\u3078 \u203A","\u6B21\u306E\u30DA\u30FC\u30B8 \u203A","\xBB","\u2192","\u65E9\u671F\u6587\u7AE0\u2192"];const h=["search?","search_","forum","thread"];Promise.all([uf(),lf(location.hostname)]).then(function(_){let[A,S]=_,{jsonRule:U}=A;const{prefs:d,SITEINFO_D:j,autoMatch:w,version:H,blackList:Y}=A;d.debug?y.setLevel("debug"):y.setLevel(5),y.debug("[Super-preloader]","Script Manager: ",JSON.stringify({name:He.name,version:He.version||"unknown"})),y.debug("[Super-preloader]","Browser: ",JSON.stringify(Oa)),y.debug("[Super-preloader]","Server ip: ', ".concat(S));const Se=function(){const R=document,M=function(Ue){return R.getElementById("sp-prefs-"+Ue)};if(M("setup"))return;const se=We(et["sp-prefs-setup"]);d.customCSS.length>0&&We(d.customCSS);var Z=R.createElement("div");Z.id="sp-prefs-setup",Z.style.position="fixed",d.FW_position!==2?(Z.style.right="38px",Z.style.top="20px"):(Z.style.right="".concat(d.FW_offset[1],"px"),Z.style.top="".concat(d.FW_offset[0],"px"));const F=d.disableBuiltinSubscriptionRules?"N/A":Ft.expire.toDateString();Z.innerHTML=xt["sp-prefs"]({prefs:d,scriptInfo:n,nextUpdateDate:F}),R.body.appendChild(Z);const be=()=>{se&&se.parentNode.removeChild(se);const ve=M("setup");ve.parentNode.removeChild(ve)},pe=(ve,Ue,Oe)=>{ve.addEventListener(Ue,Oe,!1)};pe(M("ok"),"click",function(){Object.keys(Rt.prefs).forEach(ve=>{const Ue=M(ve);Ue!==null&&(d[ve]=De(Ue))}),d.debug?y.setLevel("debug"):y.setLevel(5),w.keyMatch=!M("autoMatchKeyMatch").checked,j.useiframe=!!M("SITEINFO_D-useiframe").checked,j.autopager.enable=!!M("SITEINFO_D-a_enable").checked,j.autopager.force_enable=!!M("SITEINFO_D-a_force_enable").checked,w.useiframe=j.useiframe,of({prefs:d,SITEINFO_D:j,autoMatch:w}).then(()=>{Be.loadSetting(),be(),location.reload()})}),pe(M("reset"),"click",()=>{M("setup").innerHTML=xt.spinner.reset,We(et["sp-prefs-spinner"]),sf().then(()=>{location.reload()})}),d.disableBuiltinSubscriptionRules&&M("updaterule").setAttribute("disabled",""),pe(M("updaterule"),"click",function(){d.disableBuiltinSubscriptionRules||(M("setup").innerHTML=xt.spinner.update,We(et["sp-prefs-spinner"]),Ft.updateRule(!0).then(()=>{U=Ft.getRule(),Be.loadSetting(),be(),location.reload()}))}),pe(M("cancel"),"click",be),M("debug").checked=y.getLevel()===y.levels.DEBUG,M("ChineseUI").checked=d.ChineseUI,M("floatWindow").checked=d.floatWindow,M("enableHistory").checked=d.enableHistory,M("dblclick_pause").checked=d.dblclick_pause,M("SITEINFO_D-useiframe").checked=j.useiframe,M("SITEINFO_D-a_enable").checked=j.autopager.enable,M("arrowKeyPage").checked=d.arrowKeyPage,M("SITEINFO_D-a_force_enable").checked=j.autopager.force_enable,M("excludes").value=d.excludes,M("custom_siteinfo").value=d.custom_siteinfo,M("customCSS").value=d.customCSS,M("disableBuiltinRules").checked=d.disableBuiltinRules,M("disableBuiltinSubscriptionRules").checked=d.disableBuiltinSubscriptionRules,M("autoMatchKeyMatch").checked=!w.keyMatch},Be={spinit:function(){if(document.body.getAttribute("name")==="MyNovelReader")return;this.loadSetting(),oe==="zh_CN"?GM.registerMenuCommand("Super_preloaderPlus_one_New \u8BBE\u7F6E",Se):GM.registerMenuCommand("Super_preloaderPlus_one_New Settings",Se);const R=location.href,M=Vo(s,function(se){return sn(se.url).test(R)});M?(l=!0,f=M.timer,y.debug("[Super-preloader]","This site does not refresh the page.",M),new Promise(function(Z,F){setTimeout(Z,f)}).then(function(Z){ht(window,document)})):ht(window,document),window.screen.height>window.screen.width&&We("div.sp-separator { min-width:auto !important; }")},loadSetting:function(){const R=j.autopager.enable;R!==void 0&&(j.autopager.enable=R);const M=function(F){d.dblclick_pause&&(d.mouseA=!1,d.Pbutton=[0,0,0])},se=function(){let F;try{F=new Function("","return "+d.custom_siteinfo)()}catch{y.error("[Super-preloader]","Custom site rule error:",d.custom_siteinfo)}zt(F)&&(r=r.concat(F))};M(),se()}};Be.spinit();function ht(K,R){const M=new Date,se=function(){},Z=R.location.href.replace(/#.*$/,"");var F=Z;const be=Z.match(/https?:\/\/([^/]+)/)[1],pe=[];var ve={updateColor:se,loadedIcon:se,CmodeIcon:se};function Ue(m){We(et["sp-fw"]);const k=R.createElement("div");k.id="sp-fw-container",k.innerHTML=xt.floatWindow(),R.body.appendChild(k);function C(ee){return R.getElementById(ee)}const q=C("sp-fw-rect"),B=C("sp-fw-content"),v={show:function(){B.style.display="block"},hide:function(){B.style.display="none"}};v.hide();let I,G;q.addEventListener("mouseover",function(ee){I=setTimeout(v.show,100)},!1),q.addEventListener("mouseleave",function(ee){clearTimeout(I)},!1),k.addEventListener("mouseover",function(ee){clearTimeout(G)},!1),k.addEventListener("mouseleave",function(ee){ee.relatedTarget!==null&&(G=setTimeout(v.hide,288))},!1);const X=C("sp-fw-dot");X.style.backgroundColor=u.dot;const $=C("sp-fw-cur-mode");$.style.backgroundColor=m.a_enable?u.autopager:u.prefetcher;const V=C("sp-fw-a_enable"),ye=C("sp-fw-autopager-field"),ke=C("sp-fw-useiframe"),le=C("sp-fw-viewcontent"),ue=C("sp-fw-a_useiframe"),we=C("sp-fw-a_iloaded"),Je=C("sp-fw-a_itimeout"),ze=C("sp-fw-a_manualA"),Le=C("sp-fw-a_remain"),re=C("sp-fw-a_maxpage"),ae=C("sp-fw-a_separator"),Ce=C("sp-fw-a_ipages_0"),Ee=C("sp-fw-a_ipages_1"),qe=C("sp-fw-a_force"),Pe=C("sp-fw-a_newIframe");Pe.addEventListener("click",function(){ue.checked=Pe.checked},!1);const Ge=C("sp-fw-a_starti");Ge.addEventListener("click",function(ee){if(!ee.currentTarget.disabled){var J=parseInt(Ee.value);(isNaN(J)||J<0)&&(J=m.a_ipages[1],Ee.value=J),Ut.startipages(J)}},!1);const Ke=C("sp-fw-enable");C("sp-fw-setup").addEventListener("click",Se,!1),C("sp-fw-savebutton").addEventListener("click",function(ee){const J={Rurl:m.Rurl,useiframe:De(ke),viewcontent:De(le),enable:De(Ke)};if(m.a_enable!==void 0){const Ne=De;J.a_enable=De(V)==="autopager",J.a_useiframe=De(ue),J.a_newIframe=De(Pe),J.a_iloaded=De(we),J.a_manualA=De(ze),J.a_force=De(qe);const Ze=Ne(Je);J.a_itimeout=isNaN(Ze)?m.a_itimeout:Ze>=0?Ze:0;const ut=Ne(Le);J.a_remain=isNaN(ut)?m.a_remain:Number(ut);const Xe=Ne(re);J.a_maxpage=isNaN(Xe)?m.a_maxpage:Xe>=1?Xe:1;const tt=Ne(Ee);J.a_ipages=[De(Ce),isNaN(tt)?m.a_ipages[1]:tt>=0?tt:1],J.a_separator=De(ae)}ff(J),(ee.shiftKey?!d.FW_RAS:d.FW_RAS)&&setTimeout(function(){location.reload()},1)},!1),m.a_enable===void 0?(V.disabled=!0,ye.style.display="none"):(Re(V,m.a_enable?"autopager":"preloader"),Re(ue,m.a_useiframe),Re(Pe,m.a_newIframe),Re(we,m.a_iloaded),Re(Je,m.a_itimeout),Re(ze,m.a_manualA),Re(qe,m.a_force),Re(Le,m.a_remain),Re(re,m.a_maxpage),Re(ae,m.a_separator),Re(Ce,m.a_ipages[0]),Re(Ee,m.a_ipages[1])),m.a_enable||(Ge.disabled=!0),m.hasRule||(qe.disabled=!0),Re(ke,m.useiframe),Re(le,m.viewcontent),Re(Ke,m.enable);const _e={loading:"\u8BFB\u53D6\u4E2D\u72B6\u6001",prefetcher:"\u9884\u8BFB\u72B6\u6001",autopager:"\u7FFB\u9875\u72B6\u6001",Apause:"\u7FFB\u9875\u72B6\u6001(\u6682\u505C)",Astop:"\u7FFB\u9875\u72B6\u6001(\u505C\u6B62)(\u7FFB\u9875\u5B8C\u6210,\u6216\u8005\u88AB\u5F02\u5E38\u505C\u6B62)(\u65E0\u6CD5\u518D\u5F00\u542F)",dot:"\u8BFB\u53D6\u5B8C\u540E"};oe!=="zh_CN"&&(_e.loading="Loading",_e.prefetcher="Prefetching",_e.autopager="Autopagger (Running)",_e.Apause="Autopagger (Pause)",_e.Astop="Autopagger (Stop)",_e.dot="Finish loading"),ve={updateColor:function(J){q.style.backgroundColor=u[J],q.setAttribute("title",_e[J])},loadedIcon:function(J){X.style.display=J=="show"?"block":"none"},CmodeIcon:function(J){$.style.display=J=="show"?"block":"none"}};const xe=parseInt(d.FW_offset[0]+"",10),Ie=parseInt(d.FW_offset[1]+"",10),Ye=d.FW_position;switch(k.style.position="fixed",Ye){case 1:k.style.top=xe+"px",k.style.left=Ie+"px";break;case 2:k.style.top=xe+"px",k.style.right=Ie+"px";break;case 3:k.style.bottom=xe+"px",k.style.right=Ie+"px";break;case 4:k.style.bottom=xe+"px",k.style.left=Ie+"px";break}}function Oe(m,k){var C=Oe.TweenF;C||(C=$t[Kc[d.s_method]],C=C[Wc[d.s_ease]]||C,Oe.TweenF=C);const q=1e3/d.s_FPS;var B=0;const v=m,I=k-m,G=Math.ceil(d.s_duration/q),X=K.scrollX;function $(){const V=Math.ceil(C(B,v,I,G));K.scroll(X,V),B<G&&(B++,setTimeout($,q))}$()}function Vl(m){m.stopPropagation();const k=m.currentTarget,C=m.target;function q($){var V=k.id;return V=V.replace(/(sp-separator-)(.+)/,function(ye,ke,le){return ke+String(Number(le)+($=="pre"?-1:1))}),V?R.getElementById(V):null}function B($,V){d.sepT?Oe($,V):K.scroll(K.scrollX,V)}var v,I;switch(C.className){case"sp-sp-gotop":B(K.scrollY,0);break;case"sp-sp-gopre":{const $=q("pre");if(!$)return;v=K.scrollY;var G=$.getBoundingClientRect().top;d.sepP?(I=k.getBoundingClientRect().top,G=v-(I-G)):G+=v-6,B(v,G);break}case"sp-sp-gonext":{const $=q("next");if(!$)return;v=K.scrollY;var X=$.getBoundingClientRect().top;d.sepP?(I=k.getBoundingClientRect().top,X=v+(-I+X)):X+=v-6,B(v,X);break}case"sp-sp-gobottom":B(K.scrollY,Math.max(R.documentElement.scrollHeight,R.body.scrollHeight));break}}var Ut={startipages:se},jt=!1;function on(m,k){k.updateColor("autopager");var C,q,B;if(m.a_HT_insert)C=lt(m.a_HT_insert[0]),B=m.a_HT_insert[1];else{if(q=me(m.a_pageElement,R,R,null,F),q.length>0){const z=q[q.length-1];C=z.nextSibling?z.nextSibling:z.parentNode.appendChild(R.createTextNode(" "))}B=-1}if(C)y.debug("[Super-preloader]","Verify that the insertion position node can be found: success",C);else{y.error("[Super-preloader]","Verify that the insertion position node can be found: failed. JS execution stopped",m.a_HT_insert?m.a_HT_insert[0]:""),k.updateColor("Astop");return}if(K.navigator.language!="en"&&y.debug("[Super-preloader]","Language: ",K.navigator.language),q===void 0&&(q=me(m.a_pageElement)),q.length>0)y.debug("[Super-preloader]","Verify that the main element can be found: success",q);else{y.error("[Super-preloader]","Verify that the main element can be found: failure",m.a_pageElement),k.updateColor("Astop");return}m.a_stylish&&We(m.a_stylish,"Super_preloader-style");var v;B!=2&&(v=C.parentNode);var I;B==-1||B==1?I=function(D){return v.insertBefore(D,C)}:B==2?I=function(D){return C.appendChild(D)}:B==0&&(I=function(D){return v.insertBefore(D,C.nextSibling)});var G,X;function $(z){const D=z.data;if(G=X=g(D),!G){y.error("[Super-preloader]","Document object creation failed"),ye();return}k.updateColor("autopager"),k.CmodeIcon("hide"),k.loadedIcon("show"),Le=!1,ct()}function V(z){y.error("[Super-preloader]","XHR is failed to be loaded"),y.error("[Super-preloader]",z),ye()}function ye(z){y.debug("[Super-preloader]","Remove various event listeners"),k.updateColor("Astop");const D=pe;for(var N=0,W=D.length;N<W;N++)D[N]();if(z){const Te=R.querySelector(".sp-separator");if(Te){var Me=C;if(B==2){const nt=C.children.length;nt>0&&(Me=C.children[nt-1])}const Qe=R.createRange();Qe.setStartBefore(Te),Qe.setEndBefore(Me),Qe.deleteContents(),Qe.detach(),B==2&&C.removeChild(Me)}const ce=R.getElementById("Super_preloader-style");ce&&ce.parentNode.removeChild(ce)}}l&&!jt&&(K.addEventListener("hashchange",ke,!1),jt=!0,y.debug("[Super-preloader]","Successfully added hashchange event"));function ke(z){y.debug("[Super-preloader]","hashchange event triggered"),ye(!0),setTimeout(function(){fe=lt(m.nextLink||"auto;"),Q=O(fe),on(m,k)},f)}var le,ue;function we(z){const D=z.currentTarget,N=D.contentDocument.body;N&&N.firstChild&&setTimeout(function(){G=D.contentDocument,X=D.contentWindow||G,k.updateColor("autopager"),k.CmodeIcon("hide"),k.loadedIcon("show"),Le=!1,ct()},m.a_itimeout)}function Je(z){if(ue=!1,m.a_newIframe||!le){let D=null;const N=R.createElement("iframe");if(le=N,N.name="superpreloader-iframe",N.width="100%",N.height="0",N.frameBorder="0",N.style.cssText="                    margin:0!important;                    padding:0!important;                    visibility:hidden!important;                ",m.a_sandbox!=!1&&N.setAttribute("sandbox",""),N.src=z,m.a_mutationObserver&&(N.setAttribute("mutationObserver",JSON.stringify(m.a_mutationObserver)),m.a_mutationObserver.relatedObj&&(D=me(m.a_mutationObserver.relatedObj),D.length>0?D=D[0]:D=null)),m.a_iloaded)N.addEventListener("load",we,!1),pe.push(function(){N.removeEventListener("load",we,!1)});else{const W=function(Te){!ue&&Te.data=="superpreloader-iframe:DOMLoaded"&&(ue=!0,we.call(N,{currentTarget:N}),m.a_newIframe&&K.removeEventListener("message",W,!1))};K.addEventListener("message",W,!1),pe.push(function(){K.removeEventListener("message",W,!1)})}D?D.parentNode.insertBefore(N,D):R.body.appendChild(N)}else le.src=z,le.contentDocument.location.replace(z),m.a_reload&&le.contentWindow.location.reload()}function ze(z){const D={headers:m.a_headers?m.a_headers:{Referer:F}};e.get(z,D).then(N=>{N.finalUrl===F?(y.debug("[Super-preloader]","Same final address"),V(N)):($(N),y.debug("[Super-preloader]","XHRrequest complete"))}).catch(N=>{V(N)})}var Le;function re(){Le=!0,k.updateColor("loading"),k.CmodeIcon("show"),y.debug("[Super-preloader]","Get next page",m.a_useiframe?"(iframe method)":"(XHR method)",Q),Et.push(Q),m.a_useiframe?Je(Q):/(?:http|\/).*/.test(Q)?ze(Q):y.error("[Super-preloader]","Lazyload or Invalid nextLinkElem",fe)}let[ae=!1,Ce=2]=m.a_ipages;ae&&Ce===0&&(Ce=Number.MAX_SAFE_INTEGER);var Ee=se,qe=se;d.Aplus?(qe=re,re()):(Ee=re,ae&&re());var Pe;function Ge(){if(!Pe){We(et["sp-separator"]);const z=async N=>{if(G){let W=Number(N.value);(isNaN(W)||W<1)&&(N.value=W=1),ae=!0,Ce=W+ee,await J()}},D=ne("div",{attr:{id:"sp-sp-manualdiv",class:"sp-separator"},children:[ne("span",{attr:{class:"sp-md-span"},innerHTML:oe==="zh_CN"?"\u4E0B":"Next"}),ne("input",{attr:{type:"number",value:1,min:1,title:oe==="zh_CN"?"\u8F93\u5165\u4F60\u60F3\u8981\u62FC\u63A5\u7684\u9875\u6570(\u5FC5\u987B>=1),\u7136\u540E\u6309\u56DE\u8F66.":"Type number of pageringzing and press enter",id:"sp-sp-md-number"},eventListener:[{type:"keyup",listener:N=>{N.keyCode==13&&z(N.target)}}]}),ne("span",{attr:{class:"sp-md-span"},innerHTML:oe==="zh_CN"?"\u9875":"page"}),ne("img",{attr:{id:"sp-sp-md-imgnext",src:xe.next}}),ne("div",{attr:{class:"sp-someinfo",id:"sp-separator-hover"},children:[ne("a",{attr:{href:"https://github.com/machsix/Super-preloader",target:"_blank"},innerHTML:"Powered by Super-preloader"})]})]});Pe=D,R.body.appendChild(D),D.addEventListener("click",function(N){N.target.id!=="sp-sp-md-number"&&z(R.getElementById("sp-sp-md-number")).then(()=>{Pe.remove()})},!1)}I(Pe)}async function Ke(){Le=!0,m.a_manualA&&!ae?(y.debug("[Super-preloader]","Manual stitching"),Ge()):(y.debug("[Super-preloader]","Direct stitching"),await J())}var gt;const _e=d.sepStartN,xe=o;var Ie=_e;function Ye(z,D,N){const W=R.createElement("div");if(m.a_separator){gt||(gt=We(et["sp-separator"]),d.customCSS.length>0&&We(d.customCSS)),W.className="sp-separator",W.id="sp-separator-"+Ie,W.addEventListener("click",Vl,!1);let Me="";oe==="zh_CN"?Me='<b>\u7B2C <span style="'+o.text_span_style+'">'+Ie+"</span> \u9875</b>"+(m.a_separatorReal?kt(z,D,N):""):Me='<b>Page <span style="'+o.text_span_style+'">'+Ie+"</span></b>"+(m.a_separatorReal?kt(z,D,N):""),W.appendChild(ne("a",{attr:{class:"sp-sp-nextlink",target:"_blank",href:D,title:D},innerHTML:Me})),W.appendChild(ne("img",{attr:{src:xe.top,class:"sp-sp-gotop",alt:oe==="zh_CN"?"\u53BB\u5230\u9876\u90E8":"To Top",title:oe==="zh_CN"?"\u53BB\u5230\u9876\u90E8":"To Top"}})),W.appendChild(ne("img",{attr:{src:Ie==_e?xe.pre_gray:xe.pre,class:"sp-sp-gopre",title:oe==="zh_CN"?"\u4E0A\u6EDA\u4E00\u9875":"Scroll up a page"}}));const Te=ne("img",{attr:{src:xe.next_gray,class:"sp-sp-gonext",title:oe==="zh_CN"?"\u4E0B\u6EDA\u4E00\u9875":"Scroll down a page"}});W.appendChild(Te),W.appendChild(ne("img",{attr:{src:xe.bottom,class:"sp-sp-gobottom",alt:oe==="zh_CN"?"\u53BB\u5230\u5E95\u90E8":"To Bottom",title:oe==="zh_CN"?"\u53BB\u5230\u5E95\u90E8":"To Bottom"}})),W.appendChild(ne("div",{attr:{class:"sp-someinfo",id:"sp-separator-hover"},children:[ne("a",{attr:{href:"https://github.com/machsix/Super-preloader",target:"_blank"},innerHTML:"Powered by Super-preloader"})]})),Ie+=1}else W.style.cssText="                    height:0!important;                    width:0!important;                    margin:0!important;                    padding:0!important;                    border:none!important;                    clear:both!important;                    display:block!important;                    visibility:hidden!important;                ";return W}var ee=0;async function J(){if(!G){y.error("[Super-preloader]","No document");return}if(m.a_documentFilter)try{await m.a_documentFilter(G,typeof Q=="string"&&Q),y.debug("[Super-preloader]","Successfully executeed documentFilter")}catch(he){y.error("[Super-preloader]","Error executing documentFilter",he,m.a_documentFilter.toString())}const z=Gl("title",G).textContent,D=R.createDocumentFragment(),N=me(m.a_pageElement,void 0,G,X,typeof Q=="string"&&Q),W=N.length;if(W<=0){y.error("[Super-preloader]","Failed to get the main content of the next page",m.a_pageElement),ye();return}else y.debug("[Super-preloader]","Successfully got the main content of the next page",N);const Me=F;F=String(Q);const Te=lt(m.nextLink,void 0,G,X);Te?Te===fe?fe=null:fe=Te:fe=null,Q=O(fe),b(G,m.a_scriptFilter);var ce,Qe,nt;for(ce=0;ce<W;ce++)Qe=N[ce],nt=Qe.nodeName,!(nt=="BODY"||nt=="HTML"||nt=="SCRIPT")&&D.appendChild(Qe);if(m.filter&&typeof m.filter=="string"){var bt=[];try{bt=me(m.filter,D)}catch{}var ci;for(ce=bt.length-1;ce>=0;ce--)ci=bt[ce],ci.parentNode.removeChild(ci)}m.lazyImgSrc&&x(m.lazyImgSrc,D);var pi;!K.opera&&m.a_useiframe&&!m.a_iloaded&&(pi=me("css;img[src]",D)),d.forceTargetWindow&&Array.prototype.slice.call(D.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])')).forEach(function(ge){ge.setAttribute("target","_blank"),ge.getAttribute("onclick")=="atarget(this)"&&ge.removeAttribute("onclick")});const un=Ye(Me,F,Q);let cn=un;if(m.a_sepdivDom!==void 0&&typeof m.a_sepdivDom=="function")cn=m.a_sepdivDom(G,un);else if(N[0]&&N[0].tagName==="TR"&&N[N.length-1].tagName==="TR"){const he=C.parentNode;let ge=me("child::tr[1]/child::*[self::td or self::th]",he);ge.length==0&&(ge=me("child::*[self::td or self::th]",N[0]));const pt=[].reduce.call(ge,(rt,di)=>rt+(parseInt(di.getAttribute("colspan"),10)||1),0);cn=ne("tr",{children:[ne("td",{attr:{colspan:pt},children:[un]})]})}else if(N[0]&&N[0].tagName==="TBODY"&&N[N.length-1].tagName==="TBODY"){const he=N[N.length-1].getElementsByTagName("tr");if(he){const ge=[].reduce.call(he[he.length-1].children,(pt,rt)=>pt+(parseInt(rt.getAttribute("colspan"),10)||1),0);cn=ne("tbody",{children:[ne("tr",{children:[ne("td",{attr:{colspan:ge},children:[un]})]})]})}else y.warn("[Super-preloader]","No trs found")}if(D.insertBefore(cn,D.firstChild),I(D),m.filter&&typeof m.filter=="function")try{m.filter(N),y.debug("[Super-preloader]","Execution of filter(pages) succeeded")}catch(he){y.error("[Super-preloader]","Error executing filter(pages)",he,m.filter.toString())}if(pi&&setTimeout(function(){const he=pi;var ge,pt,rt;for(ge=0,pt=he.length;ge<pt;ge++){rt=he[ge];const di=rt.src;rt.src=di}},99),m.a_replaceE){const he=me(m.a_replaceE),ge=he.length;if(ge>0){const pt=me(m.a_replaceE,void 0,G,X),rt=pt.length;if(rt==ge){var fi,pn;for(ce=0;ce<rt;ce++)fi=he[ce],pn=pt[ce],pn=G.importNode(pn,!0),fi.parentNode.replaceChild(pn,fi)}}}ee+=1,ae&&ee>=Ce&&(ae=!1),k.loadedIcon("hide"),Pe&&(Pe.style.display="none");const $l=R.createEvent("Event");if($l.initEvent("Super_preloaderPageLoaded",!0,!1),R.dispatchEvent($l),d.enableHistory)try{K.history.pushState(null,z,F)}catch{}if(ee>=m.a_maxpage){y.debug("[Super-preloader]","Reached the set maximum number of page turns ".concat(m.a_maxpage)),St('<b>Status</b>:Reached the set maximum number of page turns:<b style="color:red">'+m.a_maxpage+"</b>"),ye();return}const eu=function(ge){setTimeout(ge,199)};Q&&!Et.includes(Q)?(G=X=null,ae?m.a_useiframe?eu(re):re():(Le=!1,m.a_useiframe?eu(qe):qe())):(y.error("[Super-preloader]","No next page link found.",m.nextLink),ye())}var Ne,Ze;m.a_relatedObj&&(zt(m.a_relatedObj)?(Ne=m.a_relatedObj[0],Ze=m.a_relatedObj[1]):(Ne=m.a_pageElement,Ze="bottom"));function ut(){const z=F||void 0,D=K.scrollY,N=K.innerHeight;R.body.clientHeight;const W=Kl(Ne,z),Me=W&&W.nodeType==1?W.getBoundingClientRect()[Ze]+D:Math.max(R.documentElement.scrollHeight,R.body.scrollHeight);let Te=0;if(m.a_excludeElement!=null){const ce=Kl(m.a_excludeElement,z);ce!==null&&(Te=ce.offsetHeight)}return(Me-D-N-Te)/N}let Xe=!1;if(d.pauseA){const z=["target","shiftKey","ctrlKey","altKey"],D=d.mouseA?"mousedown":"dblclick",N=z[d.Pbutton[0]],W=z[d.Pbutton[1]],Me=z[d.Pbutton[2]],Te=function(){Xe=!Xe,d.stop_ipage&&(ae=!1),Xe?(k.updateColor("Apause"),St(oe==="zh_CN"?'<b>\u72B6\u6001</b>:\u81EA\u52A8\u7FFB\u9875<span style="color:red!important;"><b> \u6682\u505C</b></span>.':'<b>Status</b>:Autopagger<span style="color:red!important;"><b> Pause</b></span>.',d.disappearDelay)):(k.updateColor("autopager"),k.CmodeIcon("hide"),St(oe==="zh_CN"?'<b>\u72B6\u6001</b>:\u81EA\u52A8\u7FFB\u9875<span style="color:red!important;"><b> \u542F\u7528</b></span>.':'<b>Status</b>:Autopagger<span style="color:red!important;"><b> Enable</b></span>.')),ct()};var tt;const ce=function(){clearTimeout(tt),R.removeEventListener("mouseup",ce,!1)},Qe=function(bt){(!m.a_manualA||ae)&&bt[N]&&bt[W]&&bt[Me]&&(bt.type=="mousedown"?(R.addEventListener("mouseup",ce,!1),tt=setTimeout(Te,d.Atimeout)):Te())};R.addEventListener(D,Qe,!1),pe.push(function(){R.removeEventListener(D,Qe,!1)})}function ct(){!Xe&&!Le&&(ut()<=m.a_remain||ae)&&(G?Ke():Ee())}var Ve;function It(){clearTimeout(Ve),Ve=setTimeout(ct,100)}K.addEventListener("scroll",It,!1),pe.push(function(){K.removeEventListener("scroll",It,!1)}),Ut={startipages:async function(D){D>0&&(ae=!0,Ce=D+ee,St("<b>Status</b>:Current number of pages turned: <b>"+ee+'</b>,Continue to turn page <b style="color:red!important;">'+Ce+"</b>"),m.a_manualA&&await J(),ct())}}}function ln(m,k){function C(){const q=R.createElement("div"),B=q.cloneNode(!1),v=R.createElement("hr");return q.style.cssText="                margin:3px!important;                padding:5px!important;                border-radius:8px!important;                -moz-border-radius:8px!important;                border-bottom:1px solid #E30005!important;                border-top:1px solid #E30005!important;                background-color:#F5F5F5!important;                float:none!important;                display:none!important;            ",q.title="Prefetched content",B.style.cssText="                text-align:left!important;                color:red!important;                font-size:13px!important;                float:none!important;                display:block!important;                position:static!important;            ",v.style.cssText="                display:block!important;                border:1px inset #000!important;            ",q.appendChild(B),q.appendChild(v),R.body.appendChild(q),{div:q,div2:B}}if(k.updateColor("prefetcher"),k.updateColor("loading"),k.CmodeIcon("show"),m.useiframe){const q=R.createElement("iframe");if(q.name="superpreloader-iframe",q.src=String(Q),q.width="100%",q.height="0",q.frameBorder="0",q.style.cssText="                margin:0!important;                padding:0!important;            ",q.addEventListener("load",function(B){const v=B.currentTarget.contentDocument.body;v&&v.firstChild&&(k.updateColor("prefetcher"),k.CmodeIcon("hide"),k.loadedIcon("show"),B.currentTarget.removeEventListener("load",arguments.callee,!1),m.lazyImgSrc&&x(m.lazyImgSrc,v))},!1),m.viewcontent){const B=C();B.div.style.display="block",B.div2.innerHTML="iframe full prefetch: <br />Prefetch URL: <b>"+Q+"</b>",q.height="300px",B.div.appendChild(q)}else R.body.appendChild(q)}else{const q={headers:m.a_headers?m.a_headers:{Referer:F}};e.get(Q,q).then(B=>{const v=g(B.data);if(!v){y.error("[Super-preloader]","Document object creation failed!");return}m.lazyImgSrc&&x(m.lazyImgSrc,v);const I=v.images,G=I.length;var X;const $=[];var V;const ye={};var ke;for(V=G-1;V>=0;V--)ke=I[V].getAttribute("src"),!(!ke||ye[ke])&&(ye[ke]=!0,X=R.createElement("img"),X.src=ke,$.push(X));var le=C(),ue=le.div;for(V=$.length,le.div2.innerHTML="Number of prefetched pictures: <b>"+V+"</b><br />Prefetch URL:<b>"+Q+"</b>",y.info("[Super-preloader]","Number of prefetched pictures: "+V+"Prefetch URL: "+Q),V-=1;V>=0;V--)ue.appendChild($[V]);m.viewcontent&&(le.div.style.display="block"),k.updateColor("prefetcher"),k.loadedIcon("show"),k.CmodeIcon("hide")})}}if(new RegExp(Y.map(m=>m.substring(0,3).toLowerCase()=="re:"?m.substring(4):Wl(m)).join("|")).test(Z)){y.debug("[Super-preloader]","Matched blacklist, JS execution stopped");return}if(d.DisableI&&K.self!=K.parent&&!Vo(i,function(k){return k[1]&&k[2].test(Z)})){y.debug("[Super-preloader]","The page with url:".concat(Z," is not a top-level window, JS execution stopped"));return}y.debug("[Super-preloader]","Page url is: ".concat(Z,", JS loaded successfully")),d.disableBuiltinRules?y.warn("[Super-preloader]","Builtin js rules are disabled"):r=r.concat(yf),d.disableBuiltinSubscriptionRules?y.warn("[Super-preloader]","Remote json rules are disabled"):r=r.concat(U),d.disableBuiltinRules||(r=r.concat(vf)),(!d.numOfRule||d.numOfRule!=r.length)&&(d.numOfRule=r.length,GM.setValue("prefs",d));const Et=[R.location.href];var fe,Q,Ae;let L={};(async function(){const k=j.autopager;var C;const q=r.length;oe==="zh_CN"?(y.debug("[Super-preloader]","\u9AD8\u7EA7\u89C4\u5219\u6570\u76EE:".concat(q)),y.debug("[Super-preloader]","Number of rules > ".concat(q-U.length," from other sources, such as: wedata.net"))):y.debug("[Super-preloader]","Number of advanced rules:".concat(q));for(var B=0;B<q;B++){const v=r[B];if(!(v.autopager&&v.autopager.ip&&v.autopager.ip.indexOf(S)<0)&&(C=sn(v.url),C.test(Z))){if(oe==="zh_CN"?(y.debug("[Super-preloader]","Find current site rules:",v),y.debug("[Super-preloader]","\u89C4\u5219ID: ".concat(B+1))):(y.debug("[Super-preloader]","Find rule for this website:",v),y.debug("[Super-preloader]","Rule ID: ".concat(B+1))),v.autopager&&v.autopager.startFilter)try{await v.autopager.startFilter(R,K),y.debug("[Super-preloader]","startFilter executed successfully")}catch(X){y.error("[Super-preloader]","Error executing startFilter",X)}if(v.nextLink==="null;"){y.debug("[Super-preloader]","Find the rule for a site without nextpage",v),L.hasRule=!1;break}if(fe=lt(v.nextLink||"auto;"),!fe){y.warn("[Super-preloader]","Could not find the next page link, continue searching for other rules, skiping rule:",v);continue}if(Q=E(fe),Q===R.location.href){fe=null;continue}v.preLink&&v.preLink!="auto;"?Ae=lt(v.preLink):d.autoGetPreLink&&(Ae=lt("auto;")),L={},L.Rurl=String(C),L.nextLink=v.nextLink||"auto;",L.viewcontent=v.viewcontent,L.enable=v.enable===void 0?j.enable:v.enable,L.useiframe=v.useiframe===void 0?j.useiframe:v.useiframe,v.pageElement&&(typeof v.autopager!="object"&&(v.autopager={}),v.autopager.pageElement=v.pageElement,v.autopager.useiframe||(v.autopager.useiframe=v.useiframe),v.preLink&&(v.autopager.preLink=v.preLink),v.insertBefore&&(v.autopager.HT_insert=[v.insertBefore,1]));const I=v.autopager;if(I){if(L.a_pageElement=I.pageElement,!L.a_pageElement)break;L.a_manualA=I.manualA===void 0?k.manualA:I.manualA,L.a_enable=I.enable===void 0?k.enable:I.enable,L.a_useiframe=I.useiframe===void 0?k.useiframe:I.useiframe,L.a_mutationObserver=L.a_useiframe?I.mutationObserver===void 0?null:I.mutationObserver:null,L.a_newIframe=I.newIframe===void 0?k.newIframe:I.newIframe,L.a_iloaded=I.iloaded===void 0?k.iloaded:I.iloaded,L.a_itimeout=I.itimeout===void 0?k.itimeout:I.itimeout,L.a_remain=I.remain===void 0?k.remain:I.remain,L.a_maxpage=I.maxpage===void 0?k.maxpage:I.maxpage,L.a_separator=I.separator===void 0?k.separator:I.separator,L.a_sepdivDom=I.sepdivDom===void 0?void 0:I.sepdivDom,L.a_separatorReal=I.separatorReal===void 0?k.separatorReal:I.separatorReal,L.a_replaceE=I.replaceE,L.a_HT_insert=I.HT_insert,L.a_relatedObj=I.relatedObj===void 0?k.relatedObj:I.relatedObj,L.a_ipages=I.ipages===void 0?k.ipages:I.ipages,L.filter=v.filter||I.filter;const X=v.documentFilter||I.documentFilter;X==="startFilter"?L.a_documentFilter=$=>v.autopager.startFilter($):typeof X=="function"?L.a_documentFilter=X:L.a_documentFilter=void 0,L.a_scriptFilter=I.scriptFilter===void 0?"":I.scriptFilter,L.a_stylish=v.stylish||I.stylish,L.lazyImgSrc=I.lazyImgSrc,L.a_headers=I.headers===void 0?void 0:I.headers,L.a_reload=I.reload===void 0?k.reload:I.reload,L.a_sandbox=I.sandbox===void 0?k.sandbox:I.sandbox,L.a_excludeElement=I.excludeElement}const G=lt(L.a_pageElement);if(!G||Array.isArray(G)&&G.length===0){fe=null,y.error("[Super-preloader]","Could not find content, skiping rule:",v,"Continue to search for other rules.");continue}L.hasRule=!0;break}}if(!L.hasRule){if(!w.keyMatch)y.warn("[Super-preloader]","Auto match is disabled");else if(y.warn("[Super-preloader]","No rules are found. Auto match starts"),fe=Ht(),fe){const v=w.FA;L.Rurl=K.localStorage?"am:"+(Z.match(/^https?:\/\/[^:]*\//i)||[])[0]:"am:automatch",L.enable=!0,L.nextLink="auto;",L.viewcontent=w.viewcontent,L.useiframe=w.useiframe||j.autopager.useiframe,L.a_force=!0,L.a_manualA=v.manualA,L.a_enable=v.enable||j.autopager.force_enable,L.a_useiframe=v.useiframe||j.useiframe,L.a_iloaded=v.iloaded,L.a_itimeout=v.itimeout,L.a_remain=v.remain,L.a_maxpage=v.maxpage,L.a_separator=v.separator,L.a_ipages=v.ipages}}L.lazyImgSrc||(L.lazyImgSrc=d.lazyImgSrc),y.debug("[Super-preloader]","Total time spent on searching for advanced rules and automatic matching: ".concat(new Date().getTime()-M.getTime(),"ms"))})().then(()=>{if(!fe&&!Ae){y.warn("[Super-preloader]","No related links found, JS execution stopped. Total time spent: ".concat(new Date().getTime()-M.getTime(),"ms"));return}else if(Q)y.debug("[Super-preloader]","Previous link element:",Ae),y.debug("[Super-preloader]","Next link element:",fe),Q=O(fe),y.debug("[Super-preloader]","Next link:",Q),Ae=Ae?Ae.href||Ae:void 0;else{y.error("[Super-preloader]","The link to the next page does not exist, JS cannot continue."),y.debug("[Super-preloader]","Total time spent:".concat(new Date().getTime()-M.getTime(),"ms"));return}if({go:function(){typeof Q=="string"&&(K.location.href=Q)},back:function(){Ae||lt("auto;"),typeof Ae=="string"&&(K.location.href=Ae)},register:function(C){C.arrowKeyPage&&(y.debug("[Super-preloader]","Adding left and right arrow keys to autopager listener."),R.addEventListener("keyup",q=>{const B=q.target.nodeName;if(!(B!="BODY"&&B!="HTML")&&!(q.ctrlKey||q.shiftKey||q.altKey||q.metaKey))switch(q.keyCode){case 37:this.back();break;case 39:this.go();break}},!1),y.debug("[Super-preloader]","\u6DFB\u52A0\u9F20\u6807\u624B\u52BF\u7FFB\u9875\u76D1\u542C"),R.addEventListener("superPreloader.go",()=>{this.go()},!1),R.addEventListener("superPreloader.back",()=>{this.back()},!1))}}.register(d),pf(L),!L.enable){y.warn("[Super-preloader]","This rule is disabled, script execution is stopped"),y.debug("[Super-preloader]","Total time spent:".concat(new Date().getTime()-M.getTime(),"ms"));return}if(L.hasRule||(L.a_force=!0),L.a_force&&(L.a_pageElement="//body/*",L.a_HT_insert=void 0,L.a_relatedObj=void 0),d.floatWindow){y.debug("[Super-preloader]","Creating a floating window"),Ue(L);const k=P();bf(R.getElementById("sp-fw-container"),{handle:R.getElementById("sp-fw-rect"),customMove:(C,q,B)=>{delete C.style.left,delete C.style.bottom;let v=R.body.clientWidth-k-q;v<0?v=0:v>K.innerWidth-k&&(v=K.innerWidth-k);let I=B;I>K.innerHeight-R.getElementById("sp-fw-rect").scrollHeight?I=K.innerHeight-R.getElementById("sp-fw-rect").scrollHeight:I<0&&(I=0),C.style.right="".concat(v,"px"),C.style.top="".concat(I,"px")},onMouseUp:C=>{d.FW_offset[0]=parseInt(C.style.top.replace("px",""),10),d.FW_offset[1]=parseInt(C.style.right.replace("px",""),10),d.FW_position=2,GM.setValue("prefs",d)}}),R.getElementById("sp-fw-container").style.position="fixed"}y.debug("[Super-preloader]","Total time spent:".concat(new Date().getTime()-M.getTime(),"ms")),L.a_enable?(y.debug("[Super-preloader]","Initializing, autopager mode."),on(L,ve)):(y.debug("[Super-preloader]","Initializing, prefetch mode."),ln(L,ve))});function lt(m,k,C,q){const B=F;var v;if(!m)return v;if(C=C||R,q=q||K,k=k||C,typeof m=="string")m.search(/^css;/i)===0?v=Gl(m.slice(4),k):m.toLowerCase()=="auto;"?v=Ht(C):v=de(m,k,C);else if(typeof m=="function")v=m(C,q,B);else if(m instanceof Array)for(var I=0,G=m.length;I<G&&(v=lt(m[I],k,C,q),!v);I++);else v=T(m,C,q,B);return v}var Ql;function Ht(m,k){if(!w.keyMatch)return null;ui.done||(ui(),ui.done=!0);const C=new Date;if(m=m||R,m==R){if(Ql)return Q;Ql=!0}const q=c,B=p,v=p.length,I=c.length,G=E,X=ot,$=Number,V=be,ye=m.links,ke=ye.length,le=F;var ue,we;Ht.checked?we=!0:(ue=Q,we=Ae);const Je=w.digitalCheck,ze=/^\s*\D{0,1}(\d+)\D{0,1}\s*$/;var Le,re,ae,Ce,Ee,qe,Pe=1,Ge,Ke,gt,_e,xe,Ie,Ye,ee,J,Ne,Ze,ut,Xe,tt,ct,Ve,It;function z(D,N){var W=D.getAttribute("href");if(W=="#")return null;if(W=G(W),/^https?:/i.test(W)&&W.replace(/#.*$/,"")!=le&&W.match(/https?:\/\/([^/]+)/)[1]==V)return y.debug("[Super-preloader]",N=="pre"?"previous":"nextmatch:",ae),D}for(y.debug("[Super-preloader]","Number of full document links:".concat(ke)),Le=0;Le<ke&&!(ue&&we);Le++)if(re=ye[Le],!!re){if(ae=re.textContent,ae){if(Je&&(Ce=ae.match(ze),Ce)){if(Ce=Ce[1],Ee=re,qe=0,!ue){for(Ge=re.previousSibling,Ke=re.previousElementSibling;!(Ge||Ke)&&qe<Pe;)Ee=Ee.parentNode,Ee&&(Ge=Ee.previousSibling,Ke=Ee.previousElementSibling),qe++;if(gt=qe>0,(Ge||Ke)&&(_e=Ge?Ge.textContent.match(ze):"",_e?xe=Ge:(_e=Ke?Ke.textContent.match(ze):"",xe=Ke),_e&&(_e=_e[1],$(_e)==$(Ce)-1))){Ie=xe.nodeType,(Ie==3||Ie==1&&(gt?X("./descendant-or-self::a[@href]",xe,m).length===0:!xe.hasAttribute("href")||G(xe.getAttribute("href"))==le))&&(ue=z(re,"next"));continue}}if(!we){for(Ye=re.nextSibling,ee=re.nextElementSibling;!(Ye||ee)&&qe<Pe;)Ee=Ee.parentNode,Ee&&(Ye=re.nextSibling,ee=re.nextElementSibling),qe++;gt=qe>0,(Ye||ee)&&(J=Ye?Ye.textContent.match(ze):"",J?Ne=Ye:(J=ee?ee.textContent.match(ze):"",Ne=ee),J&&(J=J[1],$(J)==$(Ce)+1&&(Ie=Ne.nodeType,(Ie==3||Ie==1&&(gt?X("./descendant-or-self::a[@href]",Ne,m).length===0:!Ne.hasAttribute("href")||G(Ne.getAttribute("href"))==le))&&(we=z(re,"pre")))))}continue}}else ae=re.title;if(!ae)for(Ze=re.getElementsByTagName("img"),ut=0,Xe=Ze.length;ut<Xe&&(tt=Ze[ut],ae=tt.alt||tt.title,!ae);ut++);if(ae){if(!ue){for(ct=!1,Ve=0;Ve<v;Ve++)if(It=B[Ve],!!It.test(ae)){ue=z(re,"next"),ct=!0;break}if(ct||ue)continue}if(!we){for(Ve=0;Ve<I;Ve++)if(It=q[Ve],!!It.test(ae)){we=z(re,"pre");break}}}}return y.debug("[Super-preloader]","Time to search ".concat(Le," links:").concat(new Date().getTime()-C.getTime(),"ms")),Ht.checked||(Ae=we,Ht.checked=!0),ue}function ui(){function m(k,C,q){function B(ze){return ze.replace(/\\/g,"\\\\").replace(/\+/g,"\\+").replace(/\./g,"\\.").replace(/\?/g,"\\?").replace(/\{/g,"\\{").replace(/\}/g,"\\}").replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/\$/g,"\\$").replace(/\*/g,"\\*").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\|/g,"\\|").replace(/\//g,"\\/")}const v=w.pfwordl,I=w.sfwordl,G=v[k].enable,X=v[k].maxPrefix,$=v[k].character,V=I[k].enable,ye=I[k].maxSubfix,ke=I[k].character;var le,ue,we;le=X>0?"["+(G?B($.join("")):".")+"]{0,"+X+"}":"",le="^\\s*"+le,ue=ye>0?"["+(V?B(ke.join("")):".")+"]{0,"+ye+"}":"",ue=ue+"\\s*$",we=w.cases?"":"i";for(var Je=0;Je<q;Je++)C[Je]=new RegExp(le+B(C[Je])+ue,we);return C}c=m("previous",c,c.length),p=m("next",p,p.length)}}function kt(K,R,M){const se=function(Ut,jt){if(!Ut||!jt)return[0,0];const on=Ut.split(/-|\.|&|\/|=|#|\?/),ln=jt.split(/-|\.|&|\/|=|#|\?/);var Lt,Et;const fe=function(Ae){return Ae&&Ae.replace(/^p/,"")};for(;ln.length!==0;)if(Lt=fe(ln.pop()),Et=fe(on.pop()),Lt!=Et&&/[0-9]+/.test(Lt)&&(Lt=="2"||/[0-9]+/.test(Et)))return[parseInt(Et)||1,parseInt(Lt)];return[0,0]};var Z,F=[];if(M?F=se(R,M):(F=se(K,R),Z=F[1]-F[0],F[1]=F[1]+Z,F[0]=F[0]+Z),isNaN(F[0])||isNaN(F[1]))return"";var be=!1;if(Z=F[1]-F[0],Z===1&&F[1]<1e4&&(be=!0),!be&&Z!==1&&F[1]%Z===0&&F[0]%Z===0&&(be=!0),!be){for(var pe,ve=0,Ue=h.length;ve<Ue;ve++)if(pe=h[ve],R.toLocaleLowerCase().indexOf(pe)>=0){be=!0;break}}var Oe;return be?oe==="zh_CN"?F[1]-F[0]>1?Oe=' [ \u5B9E\u9645\uFF1A\u7B2C <span style="'+o.text_span_style+'">'+F[0]+" - "+F[1]+"</span> \u9879 ]":F[1]-F[0]===1?Oe=' [ \u5B9E\u9645\uFF1A\u7B2C <span style="'+o.text_span_style+'">'+F[0]+"</span> \u9875 ]":(F[0]===0&&F[1])===0&&(Oe=' [ <span style="'+o.text_span_style+'">\u5B9E\u9645\u7F51\u9875\u7ED3\u675F</span> ]'):F[1]-F[0]>1?Oe=' [ Actual elements/pages: <span style="'+o.text_span_style+'">'+F[0]+" - "+F[1]+"</span> ]":F[1]-F[0]===1?Oe=' [ Actual elements/pages: <span style="'+o.text_span_style+'">'+F[0]+"</span> ]":(F[0]===0&&F[1])===0&&(Oe=' [ <span style="'+o.text_span_style+'">Actual elements ends</span> ]'):Oe="",Oe||""}}).catch(_=>{console.log(_)});var l=!1,f=0;function T(_,A,S,U){var d=U;function j(R){const M=_.mFails;if(!M)return R;var se;if(typeof M=="string")se=M;else{const be=[];for(var Z=0,F=M.length;Z<F;Z++){const pe=M[Z];if(pe)if(typeof pe!="string"||pe.indexOf("re;")===0){const ve=typeof pe=="string"?sn(pe.slice(3)):pe,Ue=R.match(ve);if(!Ue)return R;be.push(Ue)}else be.push(pe)}se=be.join("")}return se}var w=_.startAfter,H;if(typeof w=="string"){if(w[0]=="#"&&(d=A.location.href),H=d.indexOf(w),H==-1&&(d=j(d),H=d.indexOf(w),H==-1))return null}else{const R=d.match(w);if(R)w=R[0],H=d.indexOf(w);else if(d=j(d),w=(d.match(w)||[])[0],!w||(H=d.indexOf(w),H==-1))return}H+=w.length;const Y=_.max===void 0?9999:_.max,Se=_.min===void 0?1:_.min,Be=d.slice(0,H),ht=d.slice(H),kt=ht.replace(/^(\d+)(.*)$/,function(R,M,se){return M=Number(M)+_.inc,M>=Y||M<Se?R:M+se});if(kt!==ht){var K;try{K=_.isLast(A,unsafeWindow,d)}catch{}return K?void 0:Be+kt}return null}function x(_,A){_.split("|").forEach(function(U){U=U.trim(),[].forEach.call(A.querySelectorAll("img["+U+"]"),function(d){const j=d.getAttribute(U);j&&j!=d.src&&(d.setAttribute("src",j),d.removeAttribute(U))})})}function b(_,A){const S=me("css;script",_);var U;A&&(U=sn(A));for(var d,j=S.length-1;j>=0;j--){d=S[j];var w=!1;U?(Object.prototype.hasOwnProperty.call(d,"src")&&(U.test(d.src)||(w=!0)),d.text&&(U.test(d.text)||(w=!0)),w&&d.parentNode.removeChild(d)):d.parentNode.removeChild(d)}}function g(_){if(!_)return y.error("[Super-preloader]","No string found to be converted to DOM"),null;if(document.documentElement.nodeName!="HTML")return new DOMParser().parseFromString(_,"application/xhtml+xml");var A;try{A=new DOMParser().parseFromString(_,"text/html")}catch{}if(A)return A;if(document.implementation.createHTMLDocument)A=document.implementation.createHTMLDocument("superPreloader");else try{A=document.cloneNode(!1),A.appendChild(A.importNode(document.documentElement,!1)),A.documentElement.appendChild(A.createElement("head")),A.documentElement.appendChild(A.createElement("body"))}catch{}if(!A)return;const S=document.createRange();S.selectNodeContents(document.body);const U=S.createContextualFragment(_);A.body.appendChild(U);const d={TITLE:!0,META:!0,LINK:!0,STYLE:!0,BASE:!0};var j;const w=A.body,H=w.childNodes;for(var Y=H.length-1;Y>=0;Y--)j=H[Y],d[j.nodeName]&&w.removeChild(j);return A}function E(_){typeof _!="string"&&(_=_.getAttribute("href"));let A=E.a;return A||(E.a=A=document.createElement("a")),A.href=_,A.href}function P(){const _=document.getElementById("sp-fw-container"),A=_.cloneNode(!0);A.id="".concat(_.id),A.style.visibility="hidden",A.querySelector("#sp-fw-content").style.display="block",document.body.appendChild(A);const S=A.querySelector("#sp-fw-content").offsetWidth;return A.remove(),S}function O(_){if(_)return typeof _=="string"||_.hasAttribute("href")?E(_):"javascript:void(0);"}}()})();
