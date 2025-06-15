// ==UserScript==
// @version      7.6.6
// @name         Magic Userscript+ : Show Site All UserJS
// @author       Magic <magicoflolis@tuta.io>
// @supportURL   https://github.com/magicoflolis/Userscript-Plus/issues
// @namespace    https://github.com/magicoflolis/Userscript-Plus
// @homepageURL  https://github.com/magicoflolis/Userscript-Plus
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8TRZFKBzuIOGSoTnZREcGlVLEIFkpboVUHk0u/oElDkuLiKLgWHPxYrDq4OOvq4CoIgh8gzg5Oii5S4v+SQosYD4778e7e4+4dIDSrTLN6YoCm22Y6EZdy+VWp7xUigghhDqLMLCOZWczCd3zdI8DXuyjP8j/35xhUCxYDAhJxjBmmTbxBPLNpG5z3icOsLKvE58QTJl2Q+JHrisdvnEsuCzwzbGbT88RhYqnUxUoXs7KpEU8TR1RNp3wh57HKeYuzVq2z9j35C4MFfSXDdZqjSGAJSaQgQUEdFVRhI0qrToqFNO3Hffwjrj9FLoVcFTByLKAGDbLrB/+D391axalJLykYB3pfHOdjDOjbBVoNx/k+dpzWCSA+A1d6x19rArOfpDc6WuQICG0DF9cdTdkDLneA4SdDNmVXEmkKxSLwfkbflAeGboGBNa+39j5OH4AsdbV8AxwcAuMlyl73eXd/d2//nmn39wOjunK6jS33SAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+gDDBAAJWyXgRAAABRPSURBVHjazVt9VNRl9v9854VhhjdBiHcUaFQEDTVCdk1IstTV0jb1LLZkJZrl4knLTnZaKjdqdXdLXcvfyoHUErPUBBEMLREJ6egJFBUUBF9WMd6R4WW+M/P5/eHMdxkYEJS0e8498MzzzPN87537PM+9n3u/An49kgFwA+AJIACAP4AxAEIA+AFwBzDEPLYJQB2AqwDOATgN4AqAywBubNu2rTk+Pl4EAJIyABAEwTQYDyn8CoIrAEQD+BOAMLPgLgAcAGDs2LGQyWSora1FYGAg6urqUFZWBgCIiYnBqVOn0NDQAAA6T0/Pm/X19ZflcvkZo9G4w2AwHAFgwG+Q5ACCg4KClixZsuT82rVrTTt27CCAHpybm8vq6moWFRXRZDKxpqaGkyZN4q0fl3zyySelsaIoMiYmhg899BD/9re/mQAUAogHEGxe8/5TaGiob0RERMrSpUuvZ2Zmmo4cOcIjR44wLy/PpgIOHjzI2tpaTp06lVqtlhUVFUxLS5MU8MQTT0hjLQqZPHkySRIAFy1aZAwNDa0C8C/z9rpvNBbAPwBctyVob3zw4EEWFBRQJpNJFvH999/3WwE5OTncs2ePZUwVgDjzWXPHB9Wd0GsACuRy+UoXFxev5cuXo7OzEyStWBBsHzGiKMJkunWGmUwmyGQy6X+lUgkAcHBw6HXxoUOHWv4dDiAFwNcAJtzpgTUQUgNYIgjCP2bNmiX7+9//jo0bN2Lz5s3IyspCUFCQJIz5xB7Q5FVVVZg9ezby8vKwYsWKgTzTFACZAFYC+BZA+6ArQKlUOouiuAZAgiAIMq1WixEjRuCjjz6Cq6srPvzwQ1RUVNze5GQyKyV1bW/atAnJycmIj49Henr6/66qLpbUdbzRaMS0adOQm5sLAN4A/g/ARADvAGgZvCNeLvdUq9VbzVcQAXDo0KHcs2cPDQYD29ramJiYSKVSedszICIigpGRkTbb9vb2nDRpEmNiYujk5MQZM2bQ3d2dbm5unDFjhtX4qKgonj59mt7e3t3XEAH82+xnDAp5AThjSxgPDw9++eWXNJlMbGpq4htvvCEdbr82r1ixgr/73e966zeaz4W7VoIzgAyZTMaoqChOnTqVarW6hxIyMzNpMBio0+m4ZMmSflnCPWCj2RKc71R4NYD1AIwODg4sKipiU1MTV69e3UNAT09Pfv311yTJxsZGLl++/J5Zwm1YNMugvhMFxAFoA0CFQsH33nuPHR0dbGtr49KlS6lSqawW8/LyYnZ2Ng0GA2/evMkXXniBCoXit6CEFrNbPiB6SalUtncVwNnZmcnJySTJlpYWvv7665TL5VaL+fj4cN++fSTJ+vp6vvzyy31agrOzc1/7eMAcFRXFIUOG2Oq7NhA/YaRcLr85bNgwuri4WE2kUqn48ccfs7OzkzqdjgkJCT0swdfXl7m5uTQajWxubuaCBQskRYWGhjIrK4uCIBAAY2JiSFJq3y2T5PTp03vrP9wfj1EA8PkjjzzC8+fPMysriz4+PlYTubi4cN26dSTJ5uZmm/vdz8+PBw4cIEnW1tbyxRdfpCAIDA4OpsFgsBo7WML3Y64287buk7x9fX07oqOj2dLSQpPJxMzMzB5KUKvV3LRpE/V6PW/evMmFCxfSzs7Oaoy/vz9/+OEHGo1GNjY2cu7cudRoNExNTeWePXuYkZHBsLAw7t+/n4IgUBAEPv/889y+fTu/+OILvvDCC5JAGRkZjIiI4OrVq/nll19aRYxdOSMjg+PHjycAJiUl8cMPP+TMmTO5Y8cOzpo1yxI7ePYV0v5rzpw51Gg0/Mtf/kKdTkeDwcCcnBx6enpaLebq6sr169dLJ7+t/a7Vann+/HmS5I0bN7hgwQK6urpy1apVLCwslLaASqViSkoKW1tbWVJSwuLiYt68eZNpaWlUKpUkyR9//JE///wzL126xOrqagYFBdncAhblZGdns66ujoWFhTx16hQ7Ozvp7+9PcxRpM5QOBlBu2cdOTk5877332NraSpPJxN27d9PLy8tqQQcHB27ZsoWiKLKlpYULFiyQrkhHR0e+++671Ov1tFB9fT1nz54tKSo6OpokOWbMGDY0NPC1116jWq2mvb09ly9fzsbGRoaHh5MkP/nkE9rb23PMmDESTnA7BVy4cIHBwcF0cXHhTz/9xH/+8580yxhsSwHx5nuT0dHRTEpKokql4sqVK9ne3k5RFLl//356eHhYLerm5sbPPvtMEvDFF1+kvb09165dy/b2dnan69ev86mnnqIgCJJwlnC366Hr7OxMk8nE2NhYkpRcYVvASW8KyM/Pl/qys7OZk5Nj8Q3ibQVFhZbBjz32GHU6HQFQqVQyOTmZOp2ORqOR6enpPZTg5OTErVu30mAwsKmpiSkpKezs7GRvdO7cOXp7e9PHx4cGg4GRkZHs7Ozkww8/LM05fvx4dnR0cNKkST0E7q8Cjh49aqUAC0gjCEJh90Aw1uw6SgqwABAWc37rrbfY0dFBURS5d+9eurm5WS3u7u7OlJQU9of0ej2fffZZOjk5UafT0dPTkydOnGBpaSmfeeYZzpkzh6dOnWJxcTG9vLwGTQGWtqOjo9EsM2Rm/lNXcKQ7kOHs7IwNGzZg48aNEEURTz31FD7++OOuwATa2tpw/vx5GAy3xyyVSiV8fX1hMplgMplw48YNvPTSS7h48SJ27NiB9PR0XL58GQsXLkRNTY3t+7oXsMXyeV9h9/z5861kdgdwvPt92tULtFxTarWaSUlJ1Ov11Ov13LVrF4cMGUKlUsl33nmHOp2uXxYgiiLnz59Pi5ttWUcmk1GhUFChUFjdKAqFwuqO79629blcLrfyVLu2zX+PW6LFUAD/7a+zoVKp+Mknn7C9vZ0Gg4Fbtmzh66+/zo6ODvaXzp07R19f3/sdI/zXLDumA2gdyJcdHByYnJxMURSp1+v7PPC6k8lk4ubNm38LIXMrgOlyM572zEAiJVEUUVBQAHd3d4wbNw4qlar/mRhBwKhRo3DlyhWcPXtWAkfvA9kBOCoHsBDAIwP9tsFgwNGjR6HRaBAZGWl14Nx2ZTs7PProo6irq0NxcfGAwdNBpEsAcOhOzSgoKIhqtZr/+c9/BnQGWKilpYVxcXE2cYO3336b77777q+9DQ4BQNmdfDk0NJS5ubm0s7Ojs7Mz169fT6PRaHPP90W//PIL4+Pje8QRmzZtYkpKyqAIGh0dzRMnTrC5uZm7du2in5+fpa8M5qzsgCaUyWRMT0+3+NbS7fDBBx+wvLyc9fX1rK2t5cmTJ/nSSy/xq6++oiiKvSqhqamJc+fO/VUQpMDAQNbW1jI9PZ0JCQksLy/nd999R3t7ewKow7fffmuqq6tjWlqapBlRFBkfH8+srCzJJe4e6lZUVEggaVlZGbVaLRUKBYOCgjhp0iRGRkbS29ubgiDQ3d2d27dv79MSampqOH/+fOke379/Pw8fPmxz24WHh9vkBx98sMf41atXs7KykgEBAQTAWbNmsba2lsHBwQRgwLx584wrVqxgdXU18/PzOXToUJJkVVUVk5KSGBcX12PShx9+WHJhAXDt2rVWgYeDgwMfe+wxenh48NVXX6W/vz/d3Ny4Z8+ePi2hsbGRs2fPplwuZ0JCAg8dOtRj7cOHD/f6/cLCwh7j09PTWVhYKDlBTk5OFEWR4eHhtKTa6yzwVFtbGydOnEiSfOutt3pFWCzRm+UunzBhAltaWjh69GgC4LJly5iXl0dBEOjm5sbg4GA6OTnxgQce4M6dO/u0hGvXrtGCSSQkJPRYWy6XS95id+6OUQJgZmam1Y8jCAJJWhRQpzArYOjJkyehVquhVt9CkH/++ederyeDwQCDwQCVSgVRFFFWVobS0lIkJCRg5cqVWLFiBdasWQMPDw9s2bIFTzzxBGpraxEXF4dly5ZBo9FgxowZkMt74hLe3t5ISUnB888/j23btvXof+ONNzB27Fibz1VWVob333/f6rOGhgZ4enrCzs4Oer0e7u7u0Ov1aGtrA4A6mUKh+K9SqcTTTz+NlpYWNDc3S0L2Ro2NjWhoaEBQUBAAQKfTYdeuXZgyZQoWL14MOzs7HDt2DFqtFjNnzsTcuXMRFhYGPz8/hIaGYvHixdi3b1+v87u5uWHz5s2IjY3t0Tds2DCEhoba5MDAwB7ji4qK4OPjg5CQEMhkMsyZMwcNDQ1obGwEgKtITEzcn5mZyaamJn7zzTfUaDQkyccff7zXk9XR0ZGFhYVctmyZ9NmQIUN45coV3rhxg/v27aNcLmd4eDibm5uZm5vLvXv3sqCggBcvXpSSKdnZ2TavTgvV1tbyySefvKski6urK8vLy1lSUsLdu3ezvr6eqampljk3YsGCBe/n5+fzzTfflCDu0tJSTpw4sc+Jly5dypycHKt9l5SUxNLSUgmalsvlXLp0KY8dO8ZPP/2U0dHRPHPmDAEwODiYPj4+zMjI6PNMuHTpUp8/Rn94+PDh/OKLL1hUVMQ1a9ZIcsrl8iV3FAxZMrm7d+9mWFjYXT2ct7e3lEfo64qMjY0d7HRbq6+v79MDDod7i7/vhv39/Zmdnd2nJVRVVXHy5MmDGg4LghBqExC5H+zv788jR4706Tpfu3aN0dHRg2UJEiAiM9fZ3PdE5vDhw5mbm9unJVRUVDAqKmow1kvpCgNagaL3WwnHjh3r0xKuXLnC3//+93ez/SRQ1AoWDwwM5PDhwwc84eTJkymKIgEwICCAw4YNs+rXaDSSlwiAo0ePpoODQ6/toKAgHjlypE9LKC8vt4LRB8g9YHFoNJqF5eXlpr/+9a8DntCS4rL46l1dz64wu+UX6w/MrdVqefz48T4tobq6mpGRkQO1BKvEiKwLrJ2/bt26ms8++wwAEBAQgGHDhsHNzQ0jRoyAp+etnKK7uztGjBgBb29vm16c0Wjs4UVaYC+S8Pf3BwD4+fkhJCQEo0aNAgD4+/sjJCQEDg4OCAwMRGVlJf785z/jxx9/7NVjDAgIQFpamuQay2Qy+Pj4YOTIkdBqtXB1dZVgOA8PD/j6+kIQhIsACmwmR11cXDZYNPX999+zsrJSMsWysjJOmTKFRUVF0rVkMeuuFvDdd99JlZ8WtmR3ANzWtKdNm0aSfPPNNxkUFMSQkBCeOHHitgfjhAkTqFarmZKSQpPJRKPRyIKCAoaEhDA0NJR5eXkcNWpUn8lRmFPHVZYS1oaGBs6ZM4djx45ldXU1q6urrdobN260qQCj0cj29naJLaixIAi0s7MjSc6cOVNKhHZty2QykuSZM2c4cuRIqlQqjho1isePH+8TaT59+jRHjx5NjUZDZ2dnhoSEMD8/n3v37uVXX33FxMREm+nx7oWSNwC8bb4i1GfPnkVGRgaMRiMqKythb29v1X7wwQdtavHChQv46KOPJKB05MiRWLVqFQBAr9dLf9vb/1fQ2b29bt06lJeXAwCuXr2KxYsXY9u2bXjooYdsIs1hYWHYu3cv5s2bh6qqKjz99NPo6OjA1KlTcfHiRSQkJLSbZbtxu1rhHACFDQ0N0Ov1MBqN0j7u2jYajbC3t7epgOvXr+Pzzz9HamoqUlNTceDAgQHDtR0dHdL/EyZMQGtrK5577jmcPHmy1+9otVps2bIFSqUSxcXF8PLywoULF/D++++jpaWl0CzbbYulGwCsysrKaureMVjwdUdHBwICAnptA8DLL78MX19feHt7IykpCYmJiaioqMCSJUtQWlraa84hIiICr732GnJychAbG4tFixbhm2++uQ5glVm2flWLn9y5c+erhw8f7uwtIdlbctJWX/f2gQMHsGHDBnR0dCA2NrZHGwBu3ryJkpISVFZWIiwsDPv378fIkSNRX1+P5557DiUlJb2uHx0dDZlMhk2bNuHSpUut5iLqkwMulHR0dPy3pWhixowZ/MMf/iCd7NOnT5fa3t7eXLx4cY/Pu0Z8ln4AfOCBBzhv3jwmJCTQz8/Pqu3r6yv5BY8//jgXLlzIRx55hDKZjF5eXlKhxMSJE3nu3Dmbh+LWrVspCAI1Gs1dFUpaSmX/fa/d5O4vTvTG48ePZ3FxsZXwlZWVluvOBODTuymVtZC7ufDYeC8VMG3atH6NHTFiBNPS0piXl8ddu3Z19QwPDGbFuLvZEsR7oQCNRmMT4e2NlUolhwwZYkl2mABsHUzhu26H9ebaW/5GWXe3FeL9qSD/k7n29p4K5+Pjc7uiimvmZ1PjHtAEc+1t271SwKFDh1hQUGAVLU6dOpX+/v7t5me5Jy9NSX4CgLkApgH4ALfe3vpVyWAwQBRFAMCUKVNgNBrxww8/VBsMhrfNHl7DHb0OdBfP1I5b7/juBCAPDg72GjdunLOXl5csMTERoaGhOH36NERRhEajQVxcHOLj4zF58mSIoojLly9Dq9UiOTkZJ06cwMqVK/Hoo4/i7NmzaGtrg4ODA1555RU8++yz0Ov1GDduHI4ePYqSkhJDfX191blz57aaTKYXzNheO+4zyZVK5YMajWahq6vrT4sWLTLl5eUxNTWVLi4uzMnJYW1tLauqqnj58mXW1dVx1qxZUqlsVlYWq6qq2Nrays2bN1OlUnH79u2sqqriwYMH+corr9DLy8uoUCiOC4Lw23p1tpdtFatSqVLHjx9fEhUV9curr77aYYHaVCoVk5KSWFRUxJiYGOr1es6bN49yuZxxcXFcv349PTw8+Mc//rHd09PzuvkXTjFjeIrBflihl/2mkMlkTgAUwi1HXiDZaPbpXVtbW39xcnKiOUByNcf6wi23X2gAgPj4eHl4ePiI4uJij5qaGv+Wlhbftra2EL1erzWZTN4k3a5everk4+ODixcvNpGs02g01wIDA6uvXr16IiIioik/P/9UZ2dnjZ+fX8OVK1dczOuZBEGQ63S6RkdHR5vRGUlPk8nUJJfLOy1tAI2CIOi7j/1/l0eTL0xHMHkAAAAASUVORK5CYII=
// @license      MIT
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @connect     greasyfork.org
// @connect     sleazyfork.org
// @connect     github.com
// @connect     githubusercontent.com
// @connect     openuserjs.org
// @grant     GM_addElement
// @grant     GM_info
// @grant     GM_getValue
// @grant     GM_openInTab
// @grant     GM_setValue
// @grant     GM_registerMenuCommand
// @grant     GM_xmlhttpRequest
// @grant     GM.addElement
// @grant     GM.info
// @grant     GM.getValue
// @grant     GM.openInTab
// @grant     GM.setValue
// @grant     GM.registerMenuCommand
// @grant     GM.xmlHttpRequest
// @match     https://*/*
// @noframes
// @run-at     document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/AMagic20Userscript2B203A20Show20Site20All20UserJS.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/AMagic20Userscript2B203A20Show20Site20All20UserJS.meta.js
// ==/UserScript==
        this.META_START_COMMENT = this.isUserCSS ? '/* ==UserStyle==' : '// ==UserScript==';
        this.META_END_COMMENT = this.isUserCSS ? '==/UserStyle== */' : '// ==/UserScript==';
        this.META_START_COMMENT = this.isUserCSS ? '/* ==UserStyle==' : '// ==UserScript==';
        this.META_END_COMMENT = this.isUserCSS ? '==/UserStyle== */' : '// ==/UserScript==';
(()=>{"use strict";if((()=>{try{return window.self!==window.top}catch{return!0}})())return;let ce=self.userjs;if((document instanceof Document||document instanceof XMLDocument&&document.createElement("div")instanceof HTMLDivElement)&&/^text\/html|^application\/(xhtml|xml)/.test(document.contentType||"")===!0&&(!(self.userjs instanceof Object)||ce.UserJS!==!0)?ce=self.userjs={UserJS:!0}:console.error("[%cMagic Userscript+%c] %cERROR","color: rgb(29, 155, 240);","","color: rgb(249, 24, 128);",`MIME type is not a document, got "${document.contentType||""}"`),!(typeof ce=="object"&&ce.UserJS))return;window.trustedTypes&&window.trustedTypes.createPolicy&&window.trustedTypes.createPolicy("default",{createHTML:e=>e});const Xe={ar:{createdby:"\u0627\u0646\u0634\u0623 \u0645\u0646 \u0642\u0628\u0644",name:"\u0627\u0633\u0645",daily_installs:"\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u064A\u0648\u0645\u064A",close:"\u064A\u063A\u0644\u0642",filterA:"\u0645\u0646\u0642\u064A",max:"\u062A\u062D\u0642\u064A\u0642 \u0623\u0642\u0635\u0649 \u0642\u062F\u0631",min:"\u062A\u0635\u063A\u064A\u0631",search:"\u064A\u0628\u062D\u062B",search_placeholder:"\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0646\u0635\u064A\u0629",install:"\u062A\u062B\u0628\u064A\u062A",issue:"\u0625\u0635\u062F\u0627\u0631 \u062C\u062F\u064A\u062F",version_number:"\u0627\u0644\u0625\u0635\u062F\u0627\u0631",updated:"\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B",total_installs:"\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u062B\u0628\u064A\u062A",ratings:"\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A",good:"\u062C\u064A\u062F",ok:"\u062C\u064A\u062F",bad:"\u0633\u064A\u0621",created_date:"\u062A\u0645 \u0625\u0646\u0634\u0627\u0624\u0647",redirect:"\u0634\u0648\u0643\u0629 \u062F\u0647\u0646\u064A\u0629 \u0644\u0644\u0643\u0628\u0627\u0631",filter:"\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649",dtime:"\u0639\u0631\u0636 \u0627\u0644\u0645\u0647\u0644\u0629",save:"\u062D\u0641\u0638",reset:"\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646",preview_code:"\u0643\u0648\u062F \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629",saveFile:"\u0627\u062D\u0641\u0638 \u0627\u0644\u0645\u0644\u0641",newTab:"\u0639\u0644\u0627\u0645\u0629 \u062A\u0628\u0648\u064A\u0628 \u062C\u062F\u064A\u062F\u0629",applies_to:"\u064A\u0646\u0637\u0628\u0642 \u0639\u0644\u0649",license:"\u0627\u0644\u062A\u0631\u062E\u064A\u0635",no_license:"\u0644\u0627 \u064A\u0648\u062C\u062F",antifeatures:"\u0625\u0639\u0644\u0627\u0646\u0627\u062A",userjs_fullscreen:"\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A",listing_none:"(\u0644\u0627 \u064A\u0648\u062C\u062F)",export_config:"\u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631",export_theme:"\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0633\u0645\u0629",import_config:"\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F",import_theme:"\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0646\u0633\u0642",code_size:"\u062D\u062C\u0645 \u0627\u0644\u0631\u0645\u0632",prmpt_css:"\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0643\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u061F",userjs_inject:"\u062D\u0642\u0646 Userscript+",userjs_close:"\u0625\u063A\u0644\u0627\u0642 Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},de:{createdby:"Erstellt von",name:"Name",daily_installs:"T\xE4gliche Installationen",close:"Schlie\xDFen Sie",filterA:"Filter",max:"Maximieren Sie",min:"minimieren",search:"Suche",search_placeholder:"Suche nach Userscripts",install:"Installieren Sie",issue:"Neue Ausgabe",version_number:"Version",updated:"Zuletzt aktualisiert",total_installs:"Installationen insgesamt",ratings:"Bewertungen",good:"Gut",ok:"Okay",bad:"Schlecht",created_date:"Erstellt",redirect:"Greasy Fork f\xFCr Erwachsene",filter:"Andere Sprachen herausfiltern",dtime:"Zeit\xFCberschreitung anzeigen",save:"Speichern Sie",reset:"Zur\xFCcksetzen",preview_code:"Vorschau Code",saveFile:"Datei speichern",newTab:"Neue Registerkarte",applies_to:"Gilt f\xFCr",license:"Lizenz",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatischer Vollbildmodus",listing_none:"(Keine)",export_config:"Konfig exportieren",export_theme:"Thema exportieren",import_config:"Konfig importieren",import_theme:"Thema importieren",code_size:"Code Gr\xF6\xDFe",prmpt_css:"Als UserStyle installieren?",userjs_inject:"Userscript+ einf\xFCgen",userjs_close:"Userscript+ schlie\xDFen",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Quelltext",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},en:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search for userscripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Okay",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Download",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},en_GB:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search for userscripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Okay",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Download",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},es:{createdby:"Creado por",name:"Nombre",daily_installs:"Instalaciones diarias",close:"Ya no se muestra",filterA:"Filtro",max:"Maximizar",min:"Minimizar",search:"Busque en",search_placeholder:"Buscar userscripts",install:"Instalar",issue:"Nueva edici\xF3n",version_number:"Versi\xF3n",updated:"\xDAltima actualizaci\xF3n",total_installs:"Total de instalaciones",ratings:"Clasificaciones",good:"Bueno",ok:"Ok",bad:"Malo",created_date:"Creado",redirect:"Greasy Fork para adultos",filter:"Filtrar otros idiomas",dtime:"Mostrar el tiempo de espera",save:"Guardar",reset:"Reiniciar",preview_code:"Vista previa del c\xF3digo",saveFile:"Guardar archivo",newTab:"Guardar archivo",applies_to:"Se aplica a",license:"Licencia",no_license:"Desconocida",antifeatures:"Caracter\xEDsticas indeseables",userjs_fullscreen:"Pantalla completa autom\xE1tica",listing_none:"(Ninguno)",export_config:"Exportar configuraci\xF3n",export_theme:"Exportar tema",import_config:"Importar configuraci\xF3n",import_theme:"Importar tema",code_size:"C\xF3digo Tama\xF1o",prmpt_css:"\xBFInstalar como UserStyle?",userjs_inject:"Inyectar Userscript+",userjs_close:"Cerrar Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"C\xF3digo",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},fr:{createdby:"Cr\xE9\xE9 par",name:"Nom",daily_installs:"Installations quotidiennes",close:"Ne plus montrer",filterA:"Filtre",max:"Maximiser",min:"Minimiser",search:"Recherche",search_placeholder:"Rechercher des userscripts",install:"Installer",issue:"Nouveau num\xE9ro",version_number:"Version",updated:"Derni\xE8re mise \xE0 jour",total_installs:"Total des installations",ratings:"Notations",good:"Bon",ok:"Ok",bad:"Mauvais",created_date:"Cr\xE9\xE9",redirect:"Greasy Fork pour les adultes",filter:"Filtrer les autres langues",dtime:"D\xE9lai d'affichage",save:"Sauvez",reset:"R\xE9initialiser",preview_code:"Pr\xE9visualiser le code",saveFile:"Enregistrer le fichier",newTab:"Nouvel onglet",applies_to:"S'applique \xE0",license:"Licence",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Plein \xE9cran automatique",listing_none:"(Aucun)",export_config:"Export Config",export_theme:"Exporter le th\xE8me",import_config:"Importer la configuration",import_theme:"Importer le th\xE8me",code_size:"Code Taille",prmpt_css:"Installer comme UserStyle ?",userjs_inject:"Injecter Userscript+",userjs_close:"Fermer Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},ja:{createdby:"\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F",name:"\u540D\u524D",daily_installs:"\u30C7\u30A4\u30EA\u30FC\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",close:"\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F",filterA:"\u30D5\u30A3\u30EB\u30BF\u30FC",max:"\u6700\u5927\u5316",min:"\u30DF\u30CB\u30DE\u30E0",search:"\u691C\u7D22",search_placeholder:"\u30E6\u30FC\u30B6\u30FC\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u691C\u7D22",install:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",issue:"\u65B0\u520A\u306E\u3054\u6848\u5185",version_number:"\u30D0\u30FC\u30B8\u30E7\u30F3",updated:"\u6700\u7D42\u66F4\u65B0\u65E5",total_installs:"\u7DCF\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6570",ratings:"\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0",good:"\u30B0\u30C3\u30C9",ok:"\u826F\u3044",bad:"\u60AA\u3044",created_date:"\u4F5C\u6210",redirect:"\u5927\u4EBA\u306EGreasyfork",filter:"\u4ED6\u306E\u8A00\u8A9E\u3092\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u3059\u308B",dtime:"\u8868\u793A\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8",save:"\u62EF\u6551",reset:"\u30EA\u30BB\u30C3\u30C8",preview_code:"\u30B3\u30FC\u30C9\u306E\u30D7\u30EC\u30D3\u30E5\u30FC",saveFile:"\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58",newTab:"\u65B0\u3057\u3044\u30BF\u30D6",applies_to:"\u9069\u7528\u5BFE\u8C61",license:"\u30E9\u30A4\u30BB\u30F3\u30B9",no_license:"\u4E0D\u660E",antifeatures:"\u30A2\u30F3\u30C1\u6A5F\u80FD",userjs_fullscreen:"\u81EA\u52D5\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3",listing_none:"(\u306A\u3057)",export_config:"\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u8A2D\u5B9A",export_theme:"\u30C6\u30FC\u30DE\u306E\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",import_config:"\u8A2D\u5B9A\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",import_theme:"\u30C6\u30FC\u30DE\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",code_size:"\u30B3\u30FC\u30C9\u30FB\u30B5\u30A4\u30BA",prmpt_css:"UserStyle\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u304B\uFF1F",userjs_inject:"Userscript+ \u3092\u633F\u5165",userjs_close:"Userscript+ \u3092\u9589\u3058\u308B",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u30B3\u30FC\u30C9",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},nl:{createdby:"Gemaakt door",name:"Naam",daily_installs:"Dagelijkse Installaties",close:"Sluit",filterA:"Filter",max:"Maximaliseer",min:"Minimaliseer",search:"Zoek",search_placeholder:"Zoeken naar gebruikersscripts",install:"Installeer",issue:"Nieuw Issue",version_number:"Versie",updated:"Laatste Update",total_installs:"Totale Installaties",ratings:"Beoordeling",good:"Goed",ok:"Ok",bad:"Slecht",created_date:"Aangemaakt",redirect:"Greasy Fork voor volwassenen",filter:"Filter andere talen",dtime:"Weergave timeout",save:"Opslaan",reset:"Opnieuw instellen",preview_code:"Voorbeeldcode",saveFile:"Bestand opslaan",newTab:"Nieuw tabblad",applies_to:"Geldt voor",license:"Licentie",no_license:"N.v.t.",antifeatures:"Functies voor eigen gewin",userjs_fullscreen:"Automatisch volledig scherm",listing_none:"(Geen)",export_config:"Configuratie exporteren",export_theme:"Thema exporteren",import_config:"Configuratie importeren",import_theme:"Thema importeren",code_size:"Code Grootte",prmpt_css:"Installeren als UserStyle?",userjs_inject:"Injecteer Userscript+",userjs_close:"Sluit Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},pl:{createdby:"Stworzony przez",name:"Nazwa",daily_installs:"Codzienne instalacje",close:"Zamknij",filterA:"Filtr",max:"Maksymalizuj",min:"Minimalizuj",search:"Wyszukiwanie",search_placeholder:"Wyszukiwanie skrypt\xF3w u\u017Cytkownika",install:"Instalacja",issue:"Nowy numer",version_number:"Wersja",updated:"Ostatnia aktualizacja",total_installs:"\u0141\u0105czna liczba instalacji",ratings:"Oceny",good:"Dobry",ok:"Ok",bad:"Z\u0142y",created_date:"Utworzony",redirect:"Greasy Fork dla doros\u0142ych",filter:"Odfiltruj inne j\u0119zyki",dtime:"Limit czasu wy\u015Bwietlania",save:"Zapisz",reset:"Reset",preview_code:"Kod podgl\u0105du",saveFile:"Zapisz plik",newTab:"Nowa karta",applies_to:"Dotyczy",license:"Licencja",no_license:"N/A",antifeatures:"Antywzorce",userjs_fullscreen:"Automatyczny pe\u0142ny ekran",listing_none:"(Brak)",export_config:"Konfiguracja eksportu",export_theme:"Motyw eksportu",import_config:"Importuj konfiguracj\u0119",import_theme:"Importuj motyw",code_size:"Kod Rozmiar",prmpt_css:"Zainstalowa\u0107 jako UserStyle?",userjs_inject:"Wstrzyknij Userscript+",userjs_close:"Zamknij Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Kod",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},ru:{createdby:"\u0421\u0434\u0435\u043B\u0430\u043D\u043E",name:"\u0418\u043C\u044F",daily_installs:"\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438",close:"\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C",filterA:"\u0424\u0438\u043B\u044C\u0442\u0440",max:"\u041C\u0430\u043A\u0441\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C",min:"\u041C\u0438\u043D\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A",search_placeholder:"\u041F\u043E\u0438\u0441\u043A \u044E\u0437\u0435\u0440\u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432",install:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435",issue:"\u041D\u043E\u0432\u044B\u0439 \u0432\u044B\u043F\u0443\u0441\u043A",version_number:"\u0412\u0435\u0440\u0441\u0438\u044F",updated:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",total_installs:"\u0412\u0441\u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A",ratings:"\u0420\u0435\u0439\u0442\u0438\u043D\u0433\u0438",good:"\u0425\u043E\u0440\u043E\u0448\u043E",ok:"\u0425\u043E\u0440\u043E\u0448\u043E",bad:"\u041F\u043B\u043E\u0445\u043E",created_date:"\u0421\u043E\u0437\u0434\u0430\u043D\u043E",redirect:"Greasy Fork \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445",filter:"\u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u044F\u0437\u044B\u043A\u0438",dtime:"\u0422\u0430\u0439\u043C-\u0430\u0443\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",reset:"\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",preview_code:"\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043A\u043E\u0434\u0430",saveFile:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B",newTab:"\u041D\u043E\u0432\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430",applies_to:"\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A",license:"\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F",no_license:"\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E",antifeatures:"\u041D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",userjs_fullscreen:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",listing_none:"(\u043D\u0435\u0442)",export_config:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",export_theme:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0442\u0435\u043C\u044B",import_config:"\u0418\u043C\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",import_theme:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043C\u0443",code_size:"\u041A\u043E\u0434 \u0420\u0430\u0437\u043C\u0435\u0440",prmpt_css:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u043A UserStyle?",userjs_inject:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C Userscript+",userjs_close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},zh:{createdby:"\u7531...\u5236\u4F5C",name:"\u59D3\u540D",daily_installs:"\u65E5\u5E38\u5B89\u88C5",close:"\u4E0D\u518D\u663E\u793A",filterA:"\u8FC7\u6EE4\u5668",max:"\u6700\u5927\u5316",min:"\u6700\u5C0F\u5316",search:"\u641C\u7D22",search_placeholder:"\u641C\u7D22\u7528\u6237\u811A\u672C",install:"\u5B89\u88C5",issue:"\u65B0\u95EE\u9898",version_number:"\u7248\u672C",updated:"\u6700\u540E\u66F4\u65B0",total_installs:"\u603B\u5B89\u88C5\u91CF",ratings:"\u8BC4\u7EA7",good:"\u597D\u7684",ok:"\u597D\u7684",bad:"\u4E0D\u597D",created_date:"\u521B\u5EFA",redirect:"\u5927\u4EBA\u7684Greasyfork",filter:"\u8FC7\u6EE4\u6389\u5176\u4ED6\u8BED\u8A00",dtime:"\u663E\u793A\u8D85\u65F6",save:"\u62EF\u6551",reset:"\u91CD\u7F6E",preview_code:"\u9884\u89C8\u4EE3\u7801",saveFile:"\u4FDD\u5B58\u5B58\u6863",newTab:"\u65B0\u6807\u7B7E",applies_to:"\u9002\u7528\u4E8E",license:"\u8BB8\u53EF\u8BC1",no_license:"\u6682\u65E0",antifeatures:"\u53EF\u80FD\u4E0D\u53D7\u6B22\u8FCE\u7684\u529F\u80FD",userjs_fullscreen:"\u81EA\u52A8\u5168\u5C4F",listing_none:"(\u65E0)",export_config:"\u5BFC\u51FA\u914D\u7F6E",export_theme:"\u5BFC\u51FA\u4E3B\u9898",import_config:"\u5BFC\u5165\u914D\u7F6E",import_theme:"\u5BFC\u5165\u4E3B\u9898",code_size:"\u4EE3\u7801 \u5C3A\u5BF8",prmpt_css:"\u5B89\u88C5\u4E3A\u7528\u6237\u98CE\u683C\uFF1F",userjs_inject:"\u6CE8\u5165 Userscript+",userjs_close:"\u5173\u95ED Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u4EE3\u7801",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},zh_CN:{createdby:"\u7531...\u5236\u4F5C",name:"\u59D3\u540D",daily_installs:"\u65E5\u5E38\u5B89\u88C5",close:"\u4E0D\u518D\u663E\u793A",filterA:"\u8FC7\u6EE4\u5668",max:"\u6700\u5927\u5316",min:"\u6700\u5C0F\u5316",search:"\u641C\u7D22",search_placeholder:"\u641C\u7D22\u7528\u6237\u811A\u672C",install:"\u5B89\u88C5",issue:"\u65B0\u95EE\u9898",version_number:"\u7248\u672C",updated:"\u6700\u540E\u66F4\u65B0",total_installs:"\u603B\u5B89\u88C5\u91CF",ratings:"\u8BC4\u7EA7",good:"\u597D\u7684",ok:"\u597D\u7684",bad:"\u4E0D\u597D",created_date:"\u521B\u5EFA",redirect:"\u5927\u4EBA\u7684Greasyfork",filter:"\u8FC7\u6EE4\u6389\u5176\u4ED6\u8BED\u8A00",dtime:"\u663E\u793A\u8D85\u65F6",save:"\u62EF\u6551",reset:"\u91CD\u7F6E",preview_code:"\u9884\u89C8\u4EE3\u7801",saveFile:"\u4FDD\u5B58\u5B58\u6863",newTab:"\u65B0\u6807\u7B7E",applies_to:"\u9002\u7528\u4E8E",license:"\u8BB8\u53EF\u8BC1",no_license:"\u6682\u65E0",antifeatures:"\u53EF\u80FD\u4E0D\u53D7\u6B22\u8FCE\u7684\u529F\u80FD",userjs_fullscreen:"\u81EA\u52A8\u5168\u5C4F",listing_none:"(\u65E0)",export_config:"\u5BFC\u51FA\u914D\u7F6E",export_theme:"\u5BFC\u51FA\u4E3B\u9898",import_config:"\u5BFC\u5165\u914D\u7F6E",import_theme:"\u5BFC\u5165\u4E3B\u9898",code_size:"\u4EE3\u7801 \u5C3A\u5BF8",prmpt_css:"\u5B89\u88C5\u4E3A\u7528\u6237\u98CE\u683C\uFF1F",userjs_inject:"\u6CE8\u5165 Userscript+",userjs_close:"\u5173\u95ED Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u4EE3\u7801",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},zh_TW:{createdby:"\u7531...\u5236\u4F5C",name:"\u59D3\u540D",daily_installs:"\u65E5\u5E38\u5B89\u88C5",close:"\u4E0D\u518D\u663E\u793A",filterA:"\u8FC7\u6EE4\u5668",max:"\u6700\u5927\u5316",min:"\u6700\u5C0F\u5316",search:"\u641C\u7D22",search_placeholder:"\u641C\u7D22\u7528\u6237\u811A\u672C",install:"\u5B89\u88C5",issue:"\u65B0\u95EE\u9898",version_number:"\u7248\u672C",updated:"\u6700\u540E\u66F4\u65B0",total_installs:"\u603B\u5B89\u88C5\u91CF",ratings:"\u8BC4\u7EA7",good:"\u597D\u7684",ok:"\u597D\u7684",bad:"\u4E0D\u597D",created_date:"\u521B\u5EFA",redirect:"\u5927\u4EBA\u7684Greasyfork",filter:"\u8FC7\u6EE4\u6389\u5176\u4ED6\u8BED\u8A00",dtime:"\u663E\u793A\u8D85\u65F6",save:"\u62EF\u6551",reset:"\u91CD\u7F6E",preview_code:"\u9884\u89C8\u4EE3\u7801",saveFile:"\u4FDD\u5B58\u5B58\u6863",newTab:"\u65B0\u6807\u7B7E",applies_to:"\u9002\u7528\u4E8E",license:"\u8BB8\u53EF\u8BC1",no_license:"\u6682\u65E0",antifeatures:"\u53EF\u80FD\u4E0D\u53D7\u6B22\u8FCE\u7684\u529F\u80FD",userjs_fullscreen:"\u81EA\u52A8\u5168\u5C4F",listing_none:"(\u65E0)",export_config:"\u5BFC\u51FA\u914D\u7F6E",export_theme:"\u5BFC\u51FA\u4E3B\u9898",import_config:"\u5BFC\u5165\u914D\u7F6E",import_theme:"\u5BFC\u5165\u4E3B\u9898",code_size:"\u4EE3\u7801 \u5C3A\u5BF8",prmpt_css:"\u4F5C\u70BA\u4F7F\u7528\u8005\u6A23\u5F0F\u5B89\u88DD\uFF1F",userjs_inject:"\u6CE8\u5165\u7528\u6236\u8173\u672C+",userjs_close:"\u95DC\u9589\u7528\u6236\u8173\u672C+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u4EE3\u78BC",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"}},Ye=`mujs-root {
  --mujs-even-row: hsl(222, 14%, 22%);
  --mujs-odd-row: hsl(222, 14%, 11%);
  --mujs-even-err: hsl(0, 100%, 22%);
  --mujs-odd-err: hsl(0, 100%, 11%);
  --mujs-background-color: hsl(222, 14%, 33%);
  --mujs-gf-color: hsl(204, 100%, 40%);
  --mujs-sf-color: hsl(12, 86%, 50%);
  --mujs-border-b-color: hsla(0, 0%, 0%, 0);
  --mujs-gf-btn-color: hsl(211, 87%, 56%);
  --mujs-sf-btn-color: hsl(12, 86%, 50%);
  --mujs-sf-txt-color: hsl(12, 79%, 55%);
  --mujs-txt-color: hsl(0, 0%, 100%);
  --mujs-chck-color: hsla(0, 0%, 100%, 0.568);
  --mujs-chck-gf: hsla(197, 100%, 50%, 0.568);
  --mujs-chck-git: hsla(213, 13%, 16%, 0.568);
  --mujs-chck-open: hsla(12, 86%, 50%, 0.568);
  --mujs-placeholder: hsl(81, 56%, 54%);
  --mujs-position-top: unset;
  --mujs-position-bottom: 1em;
  --mujs-position-left: unset;
  --mujs-position-right: 1em;
  --mujs-font-family: Arial, Helvetica, sans-serif;
  font-family: var(--mujs-font-family, Arial, Helvetica, sans-serif);
  text-rendering: optimizeLegibility;
  word-break: normal;
  font-size: 14px;
  color: var(--mujs-txt-color, hsl(0, 0%, 100%));
}

mujs-root * {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  scrollbar-color: var(--mujs-txt-color, hsl(0, 0%, 100%)) hsl(224, 14%, 21%);
  scrollbar-width: thin;
}
@supports not (scrollbar-width: thin) {
  mujs-root * ::-webkit-scrollbar {
    width: 1.4vw;
    height: 3.3vh;
  }
  mujs-root * ::-webkit-scrollbar-track {
    background-color: hsl(224, 14%, 21%);
    border-radius: 16px;
    margin-top: 3px;
    margin-bottom: 3px;
    box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
  }
  mujs-root * ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: var(--mujs-txt-color, hsl(0, 0%, 100%));
    background-image: -webkit-linear-gradient(45deg, hsla(0, 0%, 100%, 0.2) 25%, transparent 25%, transparent 50%, hsla(0, 0%, 100%, 0.2) 50%, hsla(0, 0%, 100%, 0.2) 75%, transparent 75%, transparent);
  }
  mujs-root * ::-webkit-scrollbar-thumb:hover {
    background: var(--mujs-txt-color, hsl(0, 0%, 100%));
  }
}

mu-js {
  line-height: normal;
}

mujs-section > label,
.mujs-homepag e,
td.mujs-list,
.install {
  font-size: 16px;
}

.install,
.mujs-homepage {
  font-weight: 700;
}

mujs-section > label,
td.mujs-list {
  font-weight: 500;
}

.mujs-invalid {
  border-radius: 8px !important;
  border-width: 2px !important;
  border-style: solid !important;
  border-color: hsl(0, 100%, 50%) !important;
}

mujs-tabs,
mujs-column,
mujs-row,
.mujs-sty-flex {
  display: flex;
}

mujs-column,
mujs-row {
  gap: 0.5em;
}

mujs-column count-frame[data-counter=greasyfork] {
  background: var(--mujs-gf-color, hsl(204, 100%, 40%));
}
mujs-column count-frame[data-counter=sleazyfork] {
  background: var(--mujs-sf-color, hsl(12, 86%, 50%));
}
mujs-column count-frame[data-counter=github] {
  background: hsl(213, 13%, 16%);
}
mujs-column count-frame[data-counter=openuserjs] {
  background: hsla(12, 86%, 50%, 0.568);
}
@media screen and (max-width: 800px) {
  mujs-column {
    flex-flow: row wrap;
  }
}

mujs-row {
  flex-flow: column wrap;
}

mu-js {
  cursor: default;
}

.hidden {
  display: none !important;
  z-index: -1 !important;
}

mujs-main {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  background: var(--mujs-background-color, hsl(222, 14%, 33%)) !important;
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
  border-radius: 16px;
}
@media screen and (max-height: 720px) {
  mujs-main:not(.webext-page) {
    height: 100% !important;
    bottom: 0rem !important;
    right: 0rem !important;
    margin: 0rem !important;
  }
}
mujs-main.expanded {
  height: 100% !important;
  bottom: 0rem !important;
}
mujs-main:not(.webext-page) {
  position: fixed;
  height: 492px;
}
mujs-main:not(.webext-page):not(.expanded) {
  margin-left: 1rem;
  margin-right: 1rem;
  right: 1rem;
  bottom: 1rem;
}
mujs-main:not(.hidden) {
  z-index: 100000000000000000 !important;
  display: flex !important;
  flex-direction: column !important;
}
mujs-main > * {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
}
mujs-main mujs-toolbar {
  order: 0;
  padding: 0.5em;
  display: flex;
  place-content: space-between;
}
mujs-main mujs-toolbar mujs-tabs {
  overflow: hidden;
  order: 0;
}
mujs-main mujs-toolbar mujs-column {
  flex-flow: row nowrap;
  order: 999999999999;
}
mujs-main mujs-toolbar > * {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
mujs-main mujs-tabs {
  gap: 0.5em;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-flow: row wrap;
}
mujs-main mujs-tabs mujs-tab {
  padding: 0.25em;
  min-width: 150px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  display: flex;
  place-content: space-between;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
}
@media screen and (max-width: 800px) {
  mujs-main mujs-tabs mujs-tab {
    min-width: 6em !important;
  }
}
mujs-main mujs-tabs mujs-tab.active {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
mujs-main mujs-tabs mujs-tab:not(.active):hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
mujs-main mujs-tabs mujs-tab mujs-host {
  float: left;
  overflow: auto;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
}
mujs-main mujs-tabs mujs-tab mu-js {
  float: right;
}
mujs-main mujs-tabs mujs-addtab {
  order: 999999999999;
  font-size: 20px;
  padding: 0px 0.25em;
}
mujs-main mujs-tabs mujs-addtab:hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
mujs-main mujs-tab,
mujs-main mujs-btn,
mujs-main input {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}
mujs-main input {
  background: hsla(0, 0%, 0%, 0);
  color: var(--mujs-txt-color, hsl(0, 0%, 100%));
}
mujs-main input:not([type=checkbox]) {
  border: transparent;
  outline: none !important;
}
mujs-main mujs-page,
mujs-main textarea {
  background: inherit;
  overflow-y: auto;
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
  border-radius: 5px;
  outline: none;
  font-family: monospace;
  font-size: 14px;
}
mujs-main mujs-page {
  padding: 0.5em;
  margin: 0.5em;
}
mujs-main textarea {
  overflow-y: auto;
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
  resize: vertical;
}
mujs-main textarea:focus {
  outline: none;
}
mujs-main th,
mujs-main .mujs-cfg *:not(input[type=password], input[type=text], input[type=number]) {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
mujs-main .mujs-footer {
  order: 3;
  overflow-x: hidden;
  text-align: center;
  border-radius: 16px;
}
mujs-main .mujs-footer > * {
  min-height: 50px;
}
mujs-main .mujs-footer .error:nth-child(even) {
  background: var(--mujs-even-err, hsl(0, 100%, 22%)) !important;
}
mujs-main .mujs-footer .error:nth-child(odd) {
  background: var(--mujs-odd-err, hsl(0, 100%, 11%)) !important;
}
mujs-main .mujs-prompt {
  align-items: center;
  justify-content: center;
}
mujs-main .mujs-prompt svg {
  width: 14px;
  height: 14px;
  background: transparent;
}
mujs-main .mujs-prompt > .prompt {
  position: absolute;
  background: var(--mujs-background-color, hsl(222, 14%, 33%)) !important;
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
  border-radius: 16px;
  text-align: center;
  padding: 0.5em;
  z-index: 1;
}
mujs-main .mujs-prompt > .prompt .prompt-head {
  font-size: 18px;
}
mujs-main .mujs-prompt > .prompt .prompt-body {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5em;
  padding-top: 0.5em;
}
mujs-main .mujs-prompt > .prompt mujs-btn.prompt-deny {
  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));
  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));
}
mujs-main .mujs-prompt > .prompt mujs-btn.prompt-deny:hover {
  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));
  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));
}
mujs-main .mujs-prompt > .prompt mujs-btn.prompt-confirm {
  background: var(--mujs-gf-color, hsl(204, 100%, 40%));
  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));
}
mujs-main .mujs-prompt > .prompt mujs-btn.prompt-confirm:hover {
  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));
  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));
}

.mainframe {
  background: transparent;
  position: fixed;
  bottom: var(--mujs-position-bottom, 1rem);
  right: var(--mujs-position-right, 1rem);
  top: var(--mujs-position-top, unset);
  left: var(--mujs-position-left, unset);
}
.mainframe count-frame {
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  height: auto;
  padding: 14px 16px;
}
.mainframe.error {
  opacity: 1 !important;
}
.mainframe.error count-frame {
  background: var(--mujs-even-err, hsl(0, 100%, 22%)) !important;
}
.mainframe:not(.hidden) {
  z-index: 100000000000000000 !important;
  display: block;
}

count-frame {
  border-radius: 1000px;
  margin: 0px 3px;
  padding: 4px 6px;
  border: 2px solid var(--mujs-border-b-color, hsla(0, 0%, 0%, 0));
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  text-align: center;
  min-width: 1em;
  background: var(--mujs-background-color, hsl(222, 14%, 33%));
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

mujs-header {
  order: 1;
  display: flex;
  border-bottom: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
  font-size: 1em;
  place-content: space-between;
  height: fit-content;
  height: -moz-fit-content;
  height: -webkit-fit-content;
  gap: 1em;
}
mujs-header > *:not(mujs-url) {
  height: fit-content;
  height: -moz-fit-content;
  height: -webkit-fit-content;
}
mujs-header mujs-url {
  order: 0;
  flex-grow: 1;
}
mujs-header mujs-url > input {
  width: 100%;
  height: 100%;
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
  border-radius: 4px;
}
mujs-header .rate-container {
  order: 1;
}
mujs-header .btn-frame {
  order: 999999999999;
}

mujs-body {
  order: 2;
  overflow-x: hidden;
  padding: 0px;
  height: 100%;
  border: 1px solid var(--mujs-border-b-color, hsla(0, 0%, 0%, 0));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
mujs-body .mujs-ratings {
  padding: 0 0.25em;
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
  border-radius: 1000px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
mujs-body mu-jsbtn {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
mujs-body table,
mujs-body th,
mujs-body td {
  border-collapse: collapse;
}
mujs-body table {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
}
@media screen and (max-width: 1180px) {
  mujs-body table thead > tr {
    display: table-column;
  }
  mujs-body table .frame:not(.webext-page) {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
  mujs-body table .frame:not(.webext-page) td {
    margin: auto;
  }
  mujs-body table .frame:not(.webext-page) td > mujs-a,
  mujs-body table .frame:not(.webext-page) td > mu-js,
  mujs-body table .frame:not(.webext-page) td > mujs-column {
    text-align: center;
    justify-content: center;
  }
  mujs-body table .frame:not(.webext-page) td > mujs-a {
    width: 100%;
  }
}
@media screen and (max-width: 1180px) and (max-width: 800px) {
  mujs-body table .frame:not(.webext-page) td > mujs-column {
    flex-flow: column wrap;
  }
  mujs-body table .frame:not(.webext-page) td > mujs-column > mujs-row {
    align-content: center;
  }
  mujs-body table .frame:not(.webext-page) td > mujs-column mujs-column {
    justify-content: center;
  }
}
@media screen and (max-width: 1180px) {
  mujs-body table .frame:not(.webext-page) td:not(.mujs-name, .install-btn) {
    width: 25%;
  }
}
@media screen and (max-width: 1180px) and (max-width: 800px) {
  mujs-body table .frame:not(.webext-page) td.install-btn {
    width: 100%;
  }
}
@media screen and (max-width: 1180px) {
  mujs-body table .frame:not(.webext-page) .mujs-name {
    width: 100%;
  }
}
@media screen and (max-width: 550px) {
  mujs-body table .frame:not(.webext-page) td {
    margin: 1rem !important;
  }
  mujs-body table .frame:not(.webext-page) td:not(.mujs-name, .install-btn) {
    width: auto !important;
  }
}
mujs-body table th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: hsla(222, 14%, 33%, 0.75);
  border-bottom: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
}
mujs-body table th.mujs-header-name {
  width: 50%;
}
@media screen and (max-width: 800px) {
  mujs-body table th.mujs-header-name {
    width: auto !important;
  }
}
mujs-body table .frame:nth-child(even) {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
mujs-body table .frame:nth-child(even) textarea {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;
}
mujs-body table .frame:nth-child(odd) {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;
}
mujs-body table .frame:nth-child(odd) textarea {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
mujs-body table .frame:not([data-engine=sleazyfork], [data-engine=greasyfork]) mujs-a {
  color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));
}
mujs-body table .frame:not([data-engine=sleazyfork], [data-engine=greasyfork]) mu-jsbtn {
  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));
  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));
}
mujs-body table .frame:not([data-engine=sleazyfork], [data-engine=greasyfork]) mu-jsbtn:hover {
  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));
  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));
}
mujs-body table .frame[data-engine=sleazyfork] mujs-a, mujs-body table .frame[data-engine=greasyfork] mujs-a {
  color: var(--mujs-gf-color, hsl(197, 100%, 50%));
}
mujs-body table .frame[data-engine=sleazyfork] mujs-a:hover, mujs-body table .frame[data-engine=greasyfork] mujs-a:hover {
  color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));
}
mujs-body table .frame[data-engine=sleazyfork] mu-jsbtn, mujs-body table .frame[data-engine=greasyfork] mu-jsbtn {
  background: var(--mujs-gf-color, hsl(204, 100%, 40%));
  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));
}
mujs-body table .frame[data-engine=sleazyfork] mu-jsbtn:hover, mujs-body table .frame[data-engine=greasyfork] mu-jsbtn:hover {
  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));
  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));
}
mujs-body table .frame[data-good] mujs-a, mujs-body table .frame[data-author] mujs-a {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
mujs-body table .frame[data-good] mujs-a:hover, mujs-body table .frame[data-author] mujs-a:hover {
  color: hsl(81, 56%, 43%);
}
mujs-body table .frame[data-good] .mujs-list, mujs-body table .frame[data-author] .mujs-list {
  color: hsl(0, 0%, 100%);
}
mujs-body table .frame[data-good] mu-jsbtn, mujs-body table .frame[data-author] mu-jsbtn {
  color: hsl(215, 47%, 24%);
  background: var(--mujs-placeholder, hsl(81, 56%, 54%));
  border-color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
mujs-body table .frame[data-good] mu-jsbtn:hover, mujs-body table .frame[data-author] mu-jsbtn:hover {
  background: hsl(81, 56%, 65%);
  border-color: hsl(81, 56%, 65%);
}
mujs-body table .frame.translated:not([data-good], [data-author]) mujs-a {
  color: hsl(249, 56%, 65%);
}
mujs-body table .frame.translated:not([data-good], [data-author]) mujs-a:hover {
  color: hsl(249, 56%, 85%);
}
mujs-body table .frame.translated:not([data-good], [data-author]) mu-jsbtn {
  color: hsl(215, 47%, 85%);
  background: hsl(249, 56%, 65%);
  border-color: hsl(249, 56%, 65%);
}
mujs-body table .frame.translated:not([data-good], [data-author]) mu-jsbtn:hover {
  background: hsl(249, 56%, 65%);
  border-color: hsl(249, 56%, 65%);
}
mujs-body table .frame .mujs-ratings[data-el=good] {
  border-color: hsl(120, 50%, 40%);
  background-color: hsla(120, 50%, 40%, 0.102);
  color: hsl(120, 100%, 60%);
}
mujs-body table .frame .mujs-ratings[data-el=ok] {
  border-color: hsl(60, 100%, 30%);
  background-color: hsla(60, 100%, 30%, 0.102);
  color: hsl(60, 100%, 50%);
}
mujs-body table .frame .mujs-ratings[data-el=bad] {
  border-color: hsl(0, 100%, 30%);
  background-color: hsla(0, 50%, 40%, 0.102);
  color: hsl(0, 100%, 50%);
}
mujs-body table .frame svg {
  width: 12px;
  height: 12px;
  fill: currentColor;
  background: transparent;
}
mujs-body table .frame > td:not(.mujs-name) {
  text-align: center;
}
mujs-body table .frame > .mujs-name > mujs-a {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
mujs-body table .frame > .mujs-name mu-jsbtn,
mujs-body table .frame > .mujs-name mu-js {
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}
mujs-body table .frame > .mujs-name > mu-jsbtn {
  margin: auto;
}
mujs-body table .frame > .mujs-name > mujs-column > mu-jsbtn {
  padding: 0px 7px;
}
@media screen and (max-width: 800px) {
  mujs-body table .frame > .mujs-name > mujs-column > mu-jsbtn {
    width: 100%;
  }
}
mujs-body table .frame > .mujs-uframe > mujs-a {
  font-size: 16px;
  font-weight: 500;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
mujs-body table .frame [data-el=more-info] > mujs-row {
  gap: 0.25em;
}
mujs-body table .frame [data-el=matches] {
  gap: 0.25em;
  max-width: 40em;
}
mujs-body table .frame [data-el=matches] .mujs-grants {
  display: inline-flex;
  flex-flow: row wrap;
  overflow: auto;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  max-height: 5em;
  gap: 0.2em;
}
mujs-body table .frame [data-el=matches] .mujs-grants > mujs-a {
  display: inline;
}
mujs-body table .frame [data-el=matches] .mujs-grants > mujs-a:not([data-command]) {
  cursor: default !important;
  color: var(--mujs-txt-color, hsl(0, 0%, 100%));
}
mujs-body table .frame [data-el=matches] .mujs-grants > mujs-a::after {
  content: ", ";
  color: var(--mujs-txt-color, hsl(0, 0%, 100%));
}
mujs-body table .frame [data-el=matches] .mujs-grants > mujs-a:last-child::after {
  content: "";
}
@media screen and (max-width: 800px) {
  mujs-body table .frame [data-el=matches] {
    align-self: center;
    width: 30em !important;
  }
}
mujs-body table .frame [data-name=license] {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
@media screen and (max-width: 800px) {
  mujs-body table .frame [data-name=license] {
    width: 100% !important;
    width: -moz-available !important;
    width: -webkit-fill-available !important;
  }
}

@media screen and (max-width: 1150px) {
  .mujs-cfg {
    margin: 0px auto 1rem auto !important;
  }
}
.mujs-cfg {
  height: fit-content;
  height: -moz-fit-content;
  height: -webkit-fit-content;
}
.mujs-cfg mujs-section {
  border-radius: 16px;
  padding: 0.5em;
}
.mujs-cfg mujs-section:nth-child(even) {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
.mujs-cfg mujs-section:nth-child(even) input,
.mujs-cfg mujs-section:nth-child(even) select {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%));
}
.mujs-cfg mujs-section:nth-child(even) select option {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%));
}
.mujs-cfg mujs-section:nth-child(even) select option:hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
.mujs-cfg mujs-section:nth-child(odd) {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;
}
.mujs-cfg mujs-section:nth-child(odd) input,
.mujs-cfg mujs-section:nth-child(odd) select {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
.mujs-cfg mujs-section:nth-child(odd) select option {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
.mujs-cfg mujs-section:nth-child(odd) select option:hover {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;
}
.mujs-cfg mujs-section[data-name=theme] .sub-section {
  border-radius: 4px;
}
.mujs-cfg mujs-section[data-name=theme] .sub-section:nth-child(even) {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
.mujs-cfg mujs-section[data-name=theme] .sub-section:nth-child(odd) {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%));
}
.mujs-cfg mujs-section[data-name=theme] input,
.mujs-cfg mujs-section[data-name=theme] select {
  background: inherit;
}
.mujs-cfg mujs-section[data-name=theme] select option {
  background: inherit;
}
.mujs-cfg mujs-section[data-name=theme] select option:hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
.mujs-cfg mujs-section svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
  background: transparent;
}
.mujs-cfg mujs-section[data-name=exp], .mujs-cfg mujs-section[data-name=blacklist] {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.25em;
}
.mujs-cfg mujs-section[data-name=exp] > mujs-btn, .mujs-cfg mujs-section[data-name=blacklist] > mujs-btn {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
}
.mujs-cfg mujs-section[data-name=exp] > mujs-btn:hover, .mujs-cfg mujs-section[data-name=blacklist] > mujs-btn:hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
.mujs-cfg mujs-section input[type=text]::-webkit-input-placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
.mujs-cfg mujs-section input[type=text]::-moz-placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
.mujs-cfg mujs-section input[type=text]:-ms-input-placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
.mujs-cfg mujs-section input[type=text]::-ms-input-placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
.mujs-cfg mujs-section input[type=text]::placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
.mujs-cfg mujs-section > label:not([data-blacklist]) {
  display: flex;
  justify-content: space-between;
}
.mujs-cfg mujs-section > label[data-blacklist] {
  display: grid;
  grid-auto-flow: column;
}
.mujs-cfg mujs-section > label[data-blacklist]:not(.new-list) {
  grid-template-columns: repeat(2, 1fr);
}
.mujs-cfg mujs-section > label.new-list {
  order: 999999999999;
}
.mujs-cfg mujs-section > label.new-list mujs-add {
  font-size: 20px;
}
.mujs-cfg mujs-section > label input:not([type=checkbox]) {
  font-size: 14px;
  position: relative;
  border-radius: 4px;
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
}
.mujs-cfg mujs-section select,
.mujs-cfg mujs-section select option {
  color: var(--mujs-txt-color, hsl(0, 0%, 100%));
  border: 1px solid transparent;
  list-style: none;
  outline-style: none;
  pointer-events: auto;
}
.mujs-cfg mujs-section select {
  text-align: center;
  border-radius: 4px;
}
.mujs-cfg mujs-section > *.sub-section {
  padding: 0.2em;
}
.mujs-cfg mujs-section > *.sub-section[data-engine] {
  flex-wrap: wrap;
}
.mujs-cfg mujs-section > *.sub-section[data-engine] input {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
}
.mujs-cfg mujs-section > *.sub-section input[type=text] {
  margin: 0.2em 0px;
}
.mujs-cfg .mujs-inlab {
  position: relative;
  width: 38px;
}
.mujs-cfg .mujs-inlab input[type=checkbox] {
  display: none;
}
.mujs-cfg .mujs-inlab input[type=checkbox]:checked + label {
  margin-left: 0;
  background: var(--mujs-chck-color, hsla(0, 0%, 100%, 0.568));
}
.mujs-cfg .mujs-inlab input[type=checkbox]:checked + label:before {
  right: 0px;
}
.mujs-cfg .mujs-inlab input[type=checkbox][data-name=greasyfork]:checked + label {
  background: var(--mujs-gf-color, hsl(204, 100%, 40%));
}
.mujs-cfg .mujs-inlab input[type=checkbox][data-name=sleazyfork]:checked + label {
  background: var(--mujs-sf-color, hsl(12, 86%, 50%));
}
.mujs-cfg .mujs-inlab input[type=checkbox][data-name=openuserjs]:checked + label {
  background: var(--mujs-chck-open, hsla(12, 86%, 50%, 0.568));
}
.mujs-cfg .mujs-inlab input[type=checkbox][data-name=github]:checked + label {
  background: var(--mujs-chck-git, hsla(213, 13%, 16%, 0.568));
}
.mujs-cfg .mujs-inlab label {
  padding: 0;
  display: block;
  overflow: hidden;
  height: 16px;
  border-radius: 20px;
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
}
.mujs-cfg .mujs-inlab label:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  margin: -2px;
  background: var(--mujs-txt-color, hsl(0, 0%, 100%));
  position: absolute;
  top: 0;
  right: 20px;
  border-radius: 20px;
}
.mujs-cfg .mujs-sty-flex mujs-btn {
  margin: auto;
}
.mujs-cfg .mujs-sty-flex mujs-btn[data-command=reset] {
  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));
  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));
}
.mujs-cfg .mujs-sty-flex mujs-btn[data-command=reset]:hover {
  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));
  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));
}
.mujs-cfg .mujs-sty-flex mujs-btn[data-command=save] {
  background: var(--mujs-gf-color, hsl(204, 100%, 40%));
  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));
}
.mujs-cfg .mujs-sty-flex mujs-btn[data-command=save]:hover {
  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));
  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));
}
.mujs-cfg:not(.webext-page) {
  margin: 1rem 25rem;
}
@media screen and (max-height: 720px) {
  .mujs-cfg:not(.webext-page) {
    height: 100%;
    height: -moz-available;
    height: -webkit-fill-available;
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    overflow-x: auto;
    padding: 0.5em;
  }
}

mujs-a {
  display: inline-block;
}

.mujs-name {
  display: flex;
  flex-flow: column wrap;
  gap: 0.5em;
}
.mujs-name span {
  font-size: 0.8em !important;
}

mujs-btn {
  font-style: normal;
  font-weight: 500;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  text-align: center;
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
  font-size: 16px;
  border-radius: 4px;
  line-height: 1;
  padding: 6px 15px;
}
mujs-btn svg {
  width: 14px;
  height: 14px;
  fill: var(--mujs-txt-color, hsl(0, 0%, 100%));
}

mu-jsbtn {
  font-size: 14px;
  border-radius: 4px;
  font-style: normal;
  padding: 7px 15%;
  font-weight: 400;
  font-variant: normal;
  line-height: normal;
  display: block;
  text-align: center;
}

mujs-a,
mu-jsbtn,
.mujs-pointer,
.mujs-cfg mujs-section *:not(input[type=text], input[type=number], [data-theme], [data-blacklist]),
.mainbtn,
.mainframe,
mujs-btn {
  cursor: pointer !important;
}`,ie={title:"[%cMagic Userscript+%c]",color:"color: rgb(29, 155, 240);",dbg(...e){const t=new Date;console.debug(`${ie.title} %cDBG`,ie.color,"","color: rgb(255, 212, 0);",`[${t.getHours()}:${("0"+t.getMinutes()).slice(-2)}:${("0"+t.getSeconds()).slice(-2)}]`,...e)},err(...e){console.error(`${ie.title} %cERROR`,ie.color,"","color: rgb(249, 24, 128);",...e);const t=typeof alert<"u"&&alert,n=ie.title.replace(/%c/g,"");for(const l of e)typeof l=="object"&&"cause"in l&&t&&t(`${n} (${l.cause}) ${l.message}`)},info(...e){console.info(`${ie.title} %cINF`,ie.color,"","color: rgb(0, 186, 124);",...e)},log(...e){console.log(`${ie.title} %cLOG`,ie.color,"","color: rgb(219, 160, 73);",...e)}},{err:V,info:ye}=ie;let w,ze;try{ze=new URL(window.location.href??je)}catch{}const Fe=function(){},Qe=async function(){},je="about:blank",Ie=e=>e.replace(/^www\./,""),Ue=e=>e.split(".").splice(-2).join(".").replace(/\/|https:/g,""),et=e=>Ue(Ie(e)),xe=e=>Object.prototype.toString.call(e).match(/\[object (.*)\]/)[1],Be=e=>/RegExp/.test(xe(e)),Se=e=>/Element/.test(xe(e)),ue=e=>/HTML/.test(xe(e)),le=e=>/Object/.test(xe(e)),B=e=>/Function/.test(xe(e)),ve=e=>/\.user\.css$/.test(e),tt=e=>/\.user\.js$/.test(e),W=e=>Object.is(e,null)||Object.is(e,void 0),pe=e=>typeof e=="string"&&Object.is(e.trim(),"")||(e instanceof Set||e instanceof Map)&&Object.is(e.size,0)||Array.isArray(e)&&Object.is(e.length,0)||le(e)&&Object.is(Object.keys(e).length,0),N=e=>W(e)||pe(e);let Y;{const t=(()=>{const n=l=>l&&l.Math===Math&&l;return n(typeof globalThis=="object"&&globalThis)||n(typeof window=="object"&&window)||n(typeof self=="object"&&self)})();try{const n={XMLHttpRequest:t.XMLHttpRequest,CustomEvent:t.CustomEvent,createElement:t.document.createElement.bind(t.document),createElementNS:t.document.createElementNS.bind(t.document),createTextNode:t.document.createTextNode.bind(t.document),setTimeout:t.setTimeout,clearTimeout:t.clearTimeout,navigator:t.navigator,scheduler:{postTask(l,g){return"scheduler"in t&&"postTask"in t.scheduler?t.scheduler.postTask(l,g):(g=Object.assign({},g),g.delay===void 0&&(g.delay=0),g.delay=Number(g.delay),g.delay<0?Promise.reject(new TypeError('"delay" must be a positive number.')):new Promise(y=>{t.setTimeout(()=>{y(l())},g.delay)}))},yield(){return"scheduler"in t&&"yield"in t.scheduler?t.scheduler.yield():new Promise(l=>{t.setTimeout(l,0)})}},groupBy(l,g){return"groupBy"in Object?Object.groupBy(l,g):l.reduce((y={},...x)=>{const I=g(...x);return y[I]??=[],y[I].push(x[0]),y},{})}};for(const[l,g]of Object.entries(n))if(!(/scheduler|navigator/.test(l)||B(g)))throw new Error(`Safe "${l}" returned "${g}"`,{cause:"_self"});Y=n}catch(n){V(n),Y=null}}const De=166061,Te=[33005,394820,438684,4870,394420,25068,483444,1682,22587,789,28497,386908,24204,404443,4336,368183,393396,473830,12179,423001,376510,23840,40525,6456,"https://openuserjs.org/install/Patabugen/Always_Remember_Me.user.js","https://openuserjs.org/install/nokeya/Direct_links_out.user.js","https://github.com/jijirae/y2monkey/raw/main/y2monkey.user.js","https://github.com/jijirae/r2monkey/raw/main/r2monkey.user.js","https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js","https://github.com/jesus2099/konami-command/raw/master/INSTALL-USER-SCRIPT.user.js","https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js"],Ge=[478597],st={greasyfork:["pornhub.com"],sleazyfork:["pornhub.com"],openuserjs:[],github:[]},ke=(()=>{if(ce.isMobile!==void 0)return ce.isMobile;try{const{navigator:e}=Y;if(e){const{userAgent:t="",userAgentData:n={}}=e,{platform:l="",mobile:g=!1}=Object(n);ce.isMobile=/Mobile|Tablet/.test(String(t))||!!g||/Android|Apple/.test(String(l))}else ce.isMobile=!1}catch(e){ce.isMobile=!1,e.cause="getUAData",V(e)}return ce.isMobile})(),de=typeof GM<"u"||typeof GM_xmlhttpRequest<"u",He={local:/localhost|router|gov|(\d+\.){3}\d+/,finance:/school|pay|bank|money|cart|checkout|authorize|bill|wallet|venmo|zalo|skrill|bluesnap|coin|crypto|currancy|insurance|finance/,social:/login|join|signin|signup|sign-up|password|reset|password_reset/,unsupported:{host:"fakku.net",pathname:"/hentai/.+/read/page/.+"}},se={autofetch:!1,autoinject:!0,autoSort:"daily_installs",clearTabCache:!0,cache:!0,autoexpand:!1,filterlang:!1,sleazyredirect:!1,time:1e4,blacklist:["userjs-local","userjs-finance","userjs-social","userjs-unsupported"],preview:{code:!1,metadata:!1},engines:[{enabled:!0,name:"greasyfork",query:encodeURIComponent("https://greasyfork.org/scripts/by-site/{host}.json?language=all")},{enabled:!1,name:"sleazyfork",query:encodeURIComponent("https://sleazyfork.org/scripts/by-site/{host}.json?language=all")},{enabled:!1,name:"openuserjs",query:encodeURIComponent("https://openuserjs.org/?q={host}")},{enabled:!1,name:"github",token:"",query:encodeURIComponent("https://api.github.com/search/repositories?q=topic:{domain}+topic:userscript")}],theme:{"even-row":"","odd-row":"","even-err":"","odd-err":"","background-color":"","gf-color":"","sf-color":"","border-b-color":"","gf-btn-color":"","sf-btn-color":"","sf-txt-color":"","txt-color":"","chck-color":"","chck-gf":"","chck-git":"","chck-open":"",placeholder:"","position-top":"","position-bottom":"","position-left":"","position-right":"","font-family":""},recommend:{author:!0,others:!0},filters:{ASCII:{enabled:!1,name:"Non-ASCII",regExp:"[^\\x00-\\x7F\\s]+"},Latin:{enabled:!1,name:"Non-Latin",regExp:"[^\\u0000-\\u024F\\u2000-\\u214F\\s]+"},Games:{enabled:!1,name:"Games",flag:"iu",regExp:"Aimbot|AntiGame|Agar|agar\\.io|alis\\.io|angel\\.io|ExtencionRipXChetoMalo|AposBot|DFxLite|ZTx-Lite|AposFeedingBot|AposLoader|Balz|Blah Blah|Orc Clan Script|Astro\\s*Empires|^\\s*Attack|^\\s*Battle|BiteFight|Blood\\s*Wars|Bloble|Bonk|Bots|Bots4|Brawler|\\bBvS\\b|Business\\s*Tycoon|Castle\\s*Age|City\\s*Ville|chopcoin\\.io|Comunio|Conquer\\s*Club|CosmoPulse|cursors\\.io|Dark\\s*Orbit|Dead\\s*Frontier|Diep\\.io|\\bDOA\\b|doblons\\.io|DotD|Dossergame|Dragons\\s*of\\s*Atlantis|driftin\\.io|Dugout|\\bDS[a-z]+\\n|elites\\.io|Empire\\s*Board|eRep(ublik)?|Epicmafia|Epic.*War|ExoPlanet|Falcon Tools|Feuerwache|Farming|FarmVille|Fightinfo|Frontier\\s*Ville|Ghost\\s*Trapper|Gladiatus|Goalline|Gondal|gota\\.io|Grepolis|Hobopolis|\\bhwm(\\b|_)|Ikariam|\\bIT2\\b|Jellyneo|Kapi\\s*Hospital|Kings\\s*Age|Kingdoms?\\s*of|knastv(o|oe)gel|Knight\\s*Fight|\\b(Power)?KoC(Atta?ck)?\\b|\\bKOL\\b|Kongregate|Krunker|Last\\s*Emperor|Legends?\\s*of|Light\\s*Rising|lite\\.ext\\.io|Lockerz|\\bLoU\\b|Mafia\\s*(Wars|Mofo)|Menelgame|Mob\\s*Wars|Mouse\\s*Hunt|Molehill\\s*Empire|MooMoo|MyFreeFarm|narwhale\\.io|Neopets|NeoQuest|Nemexia|\\bOGame\\b|Ogar(io)?|Pardus|Pennergame|Pigskin\\s*Empire|PlayerScripts|pokeradar\\.io|Popmundo|Po?we?r\\s*(Bot|Tools)|PsicoTSI|Ravenwood|Schulterglatze|Skribbl|slither\\.io|slitherplus\\.io|slitheriogameplay|SpaceWars|splix\\.io|Survivio|\\bSW_[a-z]+\\n|\\bSnP\\b|The\\s*Crims|The\\s*West|torto\\.io|Travian|Treasure\\s*Isl(and|e)|Tribal\\s*Wars|TW.?PRO|Vampire\\s*Wars|vertix\\.io|War\\s*of\\s*Ninja|World\\s*of\\s*Tanks|West\\s*Wars|wings\\.io|\\bWoD\\b|World\\s*of\\s*Dungeons|wtf\\s*battles|Wurzelimperium|Yohoho|Zombs"},SocialNetworks:{enabled:!1,name:"Social Networks",flag:"iu",regExp:"Face\\s*book|Google(\\+| Plus)|\\bHabbo|Kaskus|\\bLepra|Leprosorium|MySpace|meinVZ|odnoklassniki|\u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438|Orkut|sch(ue|\xFC)ler(VZ|\\.cc)?|studiVZ|Unfriend|Valenth|VK|vkontakte|\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435|Qzone|Twitter|TweetDeck"},Clutter:{enabled:!1,name:"Clutter",flag:"iu",regExp:"^\\s*(.{1,3})\\1+\\n|^\\s*(.+?)\\n+\\2\\n*$|^\\s*.{1,5}\\n|do\\s*n('|o)?t (install|download)|nicht installieren|(just )?(\\ban? |\\b)test(ing|s|\\d|\\b)|^\\s*.{0,4}test.{0,4}\\n|\\ntest(ing)?\\s*|^\\s*(\\{@|Smolka|Hacks)|\\[\\d{4,5}\\]|free\\s*download|theme|(night|dark) ?(mode)?"}}},te=class{static i18nMap=new Map(Object.entries(Xe));static toDate(e=""){const{navigator:{language:t}}=Y;return new Intl.DateTimeFormat(t).format(typeof e=="string"?new Date(e):e)}static toNumber(e){const{navigator:{language:t}}=Y;return new Intl.NumberFormat(t).format(e)}static i18n$(e){try{return te.i18nMap.get(te.current)?.[e]??"Invalid Key"}catch(t){return V(t),"error"}}static get current(){const{navigator:{language:e}}=Y,[t="en"]=e.split("-");return t}},{i18n$:_}=te,at=(...e)=>[...new Set(e.flat())],_e=e=>{try{if(decodeURI(e)!==decodeURIComponent(e))return _e(decodeURIComponent(e))}catch(t){V(t)}return e},ae=(e,t=!0,n)=>Object.is(e,null)||Object.is(e,void 0)?[]:Array.isArray(e)?e:typeof e=="string"?t?Array.from((n||document).querySelectorAll(e)):Array.of(e):/object HTML/.test(Object.prototype.toString.call(e))?Array.of(e):Array.from(e),P=(e,t)=>{try{return(t||document).querySelector(e)}catch(n){V(n)}return null},he=(e,t)=>{try{return(t||document).querySelectorAll(e)}catch(n){V(n)}return[]},Q=(e,t,n,l={})=>{for(const g of ae(e).filter(ue)){if(ke&&t==="click"){g.addEventListener("touchstart",n,l);continue}g.addEventListener(t,n,l)}},Le=(e,t={})=>{if(!e)return e;for(const[n,l]of Object.entries(t))if(/^_mujs/i.test(n))e[n]=l;else if(typeof l=="object")Le(e[n],l);else if(B(l)){if(/^on/.test(n)){e[n]=l;continue}Q(e,n,l)}else/^class/i.test(n)?h.cl.add(e,l):e[n]=l;return e},i=(e,t,n)=>{let l;try{l=Y.createElement(e.toLowerCase()),(typeof t=="string"||Array.isArray(t))&&!N(t)&&h.cl.add(l,t),typeof n=="string"&&!N(n)&&(l.textContent=n),Le(l,le(t)&&t||le(n)&&n||{})}catch(g){if(g instanceof DOMException)throw new Error(`${g.name}: ${g.message}`,{cause:"make"});g.cause="make",V(g)}return l},fe=(()=>{if(de){if(le(GM.info))return GM.info;if(le(GM_info))return GM_info}return{script:{icon:"",name:"Magic Userscript+",namespace:"https://github.com/magicoflolis/Userscript-Plus",updateURL:"https://github.com/magicoflolis/Userscript-Plus/raw/master/dist/magic-userjs.js",version:"Bookmarklet",bugs:"https://github.com/magicoflolis/Userscript-Plus/issues"}}})(),h={attr(e,t,n=void 0){for(const l of ae(e).filter(ue)){if(n===void 0)return l.getAttribute(t);n===null?l.removeAttribute(t):l.setAttribute(t,n)}},prop(e,t,n=void 0){for(const l of ae(e).filter(ue)){if(n===void 0)return l[t];l[t]=n}},text(e,t){const n=ae(e).filter(ue);if(t===void 0)return n.length!==0?n[0].textContent:void 0;for(const l of n)l.textContent=t},remove(e){ae(e).filter(ue).some(t=>t.remove())},cl:{add(e,t){return t=ae(typeof t=="string"&&t.split(" ")||t,!1),ae(e).filter(ue).some(n=>n.classList.add(...t))},remove(e,t){return t=ae(t,!1),ae(e).filter(ue).some(n=>n.classList.remove(...t))},toggle(e,t,n){let l;for(const g of ae(e).filter(ue))l=g.classList.toggle(t,n);return l},has(e,t){return ae(e).filter(ue).some(n=>n.classList.contains(t))}}},D={close:{viewBox:"0 0 384 512",html:'<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>'},code:{viewBox:"0 0 640 512",html:'<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>'},collapse:{viewBox:"0 0 448 512",html:'<path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/>'},download:{viewBox:"0 0 384 512",html:'<path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>'},expand:{viewBox:"0 0 448 512",html:'<path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/>'},gear:{viewBox:"0 0 512 512",html:'<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>'},github:{viewBox:"0 0 496 512",html:'<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>'},globe:{viewBox:"0 0 512 512",html:'<path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>'},info:{viewBox:"0 0 512 512",html:'<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>'},install:{viewBox:"0 0 512 512",html:'<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>'},issue:{viewBox:"0 0 512 512",html:'<path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/>'},minus:{viewBox:"0 0 448 512",html:'<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>'},nav:{viewBox:"0 0 448 512",html:'<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>'},pager:{viewBox:"0 0 512 512",html:'<path d="M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm64 32l0 64c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zM80 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0z"/>'},verified:{viewBox:"0 0 56 56",fill:"currentColor",stroke:"currentColor",html:'<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z"/></g>'},refresh:{viewBox:"0 0 512 512",fill:"currentColor",html:'<path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/>'},load(e,t){const n=Y.createElementNS("http://www.w3.org/2000/svg","svg");for(const[l,g]of Object.entries(D[e]))l!=="html"&&n.setAttributeNS(null,l,g);try{typeof D[e].html=="string"&&(n.innerHTML=D[e].html,n.setAttribute("id",`mujs_${e??"Unknown"}`))}catch{}return Se(t)?(t.appendChild(n),n):(le(t)&&Le(n,t),n.outerHTML)}},Pe={prefix:"MUJS",events:new Set,getItem(e){return window.localStorage.getItem(e)},has(e){return!this.getItem(e)},setItem(e,t){window.localStorage.setItem(e,t)},remove(e){window.localStorage.removeItem(e)},async setValue(e,t){t&&(t=typeof t=="string"?t:JSON.stringify(t),de?B(GM.setValue)?await GM.setValue(e,t):B(GM_setValue)&&GM_setValue(e,t):this.setItem(`${this.prefix}-${e}`,t))},async getValue(e,t={}){try{if(de){let n;if(B(GM.getValue)?n=await GM.getValue(e,JSON.stringify(t)):B(GM_getValue)&&(n=GM_getValue(e,JSON.stringify(t))),!W(n))return JSON.parse(n)}return this.has(`${this.prefix}-${e}`)?JSON.parse(this.getItem(`${this.prefix}-${e}`)):t}catch(n){return n.cause="getValue",V(n),t}}},qe={cmds:new Set,register(e,t){if(de){if(B(t)){if(this.cmds.has(t))return;this.cmds.add(t)}B(GM.registerMenuCommand)?GM.registerMenuCommand(e,t):B(GM_registerMenuCommand)&&GM_registerMenuCommand(e,t)}}},ne={async req(e,t="GET",n="json",l,g=!1){if(N(e))throw new Error('"url" parameter is empty');l=Object.assign({},l),t=this.bscStr(t,!1),n=this.bscStr(n,!0);const y={method:t,...l};return de&&!g?y.credentials&&(Object.assign(y,{anonymous:!1}),Object.is(y.credentials,"omit")&&Object.assign(y,{anonymous:!0}),delete y.credentials):y.onprogress&&delete y.onprogress,new Promise((x,I)=>{de&&!g?ne.xmlRequest({url:e,responseType:n,...y,onerror:A=>{I(new Error(`${A.status} ${e}`))},onload:A=>{A.status!==200&&I(new Error(`${A.status} ${e}`)),n.match(/basic/)&&x(A),x(A.response)}}):fetch(e,y).then(A=>{A.ok||I(A);const Z=(H="text")=>B(A[H])?A[H]():A;if(n.match(/buffer/))x(Z("arrayBuffer"));else if(n.match(/json/))x(Z("json"));else if(n.match(/text/))x(Z("text"));else if(n.match(/blob/))x(Z("blob"));else if(n.match(/formdata/))x(Z("formData"));else if(n.match(/clone/))x(Z("clone"));else if(n.match(/document/)){const H=Z("text"),v=new DOMParser;if(H instanceof Promise)H.then(F=>{const q=v.parseFromString(F,"text/html");x(q)});else{const F=v.parseFromString(H,"text/html");x(F)}}else x(A)}).catch(I)})},format(e,t=2){if(Number.isNaN(e))return`0 ${this.sizes[0]}`;const n=1024,l=t<0?0:t,g=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/Math.pow(n,g)).toFixed(l))} ${this.sizes[g]}`},sizes:["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],async xmlRequest(e){if(de){if(B(GM.xmlHttpRequest))return GM.xmlHttpRequest(e);if(B(GM_xmlhttpRequest))return GM_xmlhttpRequest(e)}return await new Promise((t,n)=>{const l=new Y.XMLHttpRequest;let g="GET",y=je,x;for(const[I,A]of Object.entries(e))I==="onload"?l.addEventListener("load",()=>{B(A)&&A(l),t(l)}):I==="onerror"?l.addEventListener("error",Z=>{B(A)&&A(Z),n(Z)}):I==="onabort"?l.addEventListener("abort",Z=>{B(A)&&A(Z),n(Z)}):I==="onprogress"?l.addEventListener("progress",A):I==="responseType"?A==="buffer"?l.responseType="arraybuffer":l.responseType=A:I==="method"?g=A:I==="url"?y=A:I==="body"&&(x=A);l.open(g,y),N(l.responseType)&&(l.responseType="text"),x?l.send(x):l.send()})},bscStr(e="",t=!0){return e[t?"toLowerCase":"toUpperCase"]().replaceAll(/\W/g,"")}},Ce={cnt:{total:{count:0}},set(e){if(!this.cnt[e.name]){const t=i("count-frame",e.enabled?"":"hidden",{dataset:{counter:e.name},title:_e(e.query??e.url),textContent:"0"});return this.cnt[e.name]={root:t,count:0},t}return this.cnt[e.name].root},update(e,t){this.cnt[t.name].count+=e,this.cnt.total.count+=e,this.updateAll()},updateAll(){for(const e of Object.values(this.cnt))h.text(e.root,e.count)},reset(){for(const[e,t]of Object.entries(this.cnt)){h.text(t.root,0),t.count=0;const n=w.engines.find(l=>e===l.name);n&&h.cl[n.enabled?"remove":"add"](t.root,"hidden")}}},Ae=class{static prompts=[];webpage;host;injected;shadowRoot;shadowSupport;frame;userjsCache;root;unsaved;isBlacklisted;rebuild;opacityMin;opacityMax;constructor(){if(this.remove=this.remove.bind(this),this.refresh=this.refresh.bind(this),this.showError=this.showError.bind(this),this.toElem=this.toElem.bind(this),this.webpage=ze,this.host=et(ze?.hostname??je),this.injected=!1,this.shadowRoot=void 0,this.shadowSupport=B(i("main-userjs").attachShadow),!this.shadowSupport)throw new Error('Failed to initialize: "attachShadow not supported"',{cause:"Container"});this.frame=i("main-userjs",{style:"visibility: visible;",dataset:{insertedBy:fe.script.name,role:"primary-container"}}),this.shadowRoot=this.frame.attachShadow({mode:"closed"}),this.userjsCache=new Map,this.root=i("mujs-root"),this.unsaved=!1,this.isBlacklisted=!1,this.rebuild=!1,this.opacityMin="0.15",this.opacityMax="1",this.elementsReady=this.init();const e=class{constructor(){this.ids=[]}set(t,n){return new Promise((l,g)=>{const y=Y.setTimeout(()=>{Object.is(n,null)||Object.is(n,void 0)?l():g(n),this.clear(y)},t);this.ids.push(y)})}clear(...t){this.ids=this.ids.filter(n=>t.includes(n)?(Y.clearTimeout(n),!1):!0)}};this.timeouts={frame:new e,mouse:new e},this.injFN=Fe,window.addEventListener("beforeunload",this.remove)}inject(e,t){if(this.checkBlacklist(this.host)){V(`Blacklisted "${this.host}"`),this.remove();return}if(!(!this.shadowRoot||W(t)))try{if(t.documentElement.appendChild(this.frame),this.injected){B(this.injFN.build)&&this.injFN.build();return}if(this.shadowRoot.append(this.root),W(this.loadCSS(Ye,"primary-stylesheet")))throw new Error("Failed to initialize script!",{cause:"loadCSS"});this.injected=!0,this.initFn(),B(e)&&this.elementsReady&&(this.injFN=e.call(this,this.shadowRoot))}catch(n){V(n),this.remove()}}initFn(){if(this.setTheme(),Ce.cnt.total.root=this.mainbtn,this.countframe)for(const H of w.engines)this.countframe.append(Ce.set(H));const{refresh:e,urlBar:t,host:n,userjsCache:l,cfgpage:g,table:y}=this;class x{constructor(v){this.pool=new Set,this.blank=je,this.protocal="mujs:",this.protoReg=new RegExp(`${this.protocal}(.+)`,"i"),this.el={add:i("mujs-addtab",{textContent:"+",dataset:{command:"new-tab"}}),head:i("mujs-tabs"),root:v},this.el.head.append(this.el.add),this.el.root.append(this.el.head),this.custom=Fe}getTab(v){return[...this.pool].find(({dataset:F})=>v===F.host)}getActive(){return[...this.pool].find(v=>v.classList.contains("active"))}intFN(v){const[,F]=this.protoReg.exec(v)??[];F==="settings"&&(h.cl.remove(g,"hidden"),h.cl.add(y,"hidden"),t.placeholder="Search settings")}active(v,F=!0){if(this.pool.has(v)||this.pool.add(v),h.cl.add([y,g],"hidden"),h.cl.remove([...this.pool],"active"),h.cl.add(v,"active"),!F){h.cl.remove(y,"hidden");return}const q=v.dataset.host??this.blank;q===this.blank?(h.cl.add(g,"hidden"),h.cl.remove(y,"hidden"),e()):q.startsWith(this.protocal)?this.intFN(q):(h.cl.add(g,"hidden"),h.cl.remove(y,"hidden"),this.custom(q))}close(v){if(this.pool.has(v)&&this.pool.delete(v),w.clearTabCache){const{host:q}=v.dataset,J=Array.from(l.values()).filter(({_mujs:X})=>!N(X)&&X.info.host===q);for(const X of J)J.splice(J.indexOf(X),1)}v.classList.contains("active")&&e();const F=v.nextElementSibling??v.previousElementSibling;F&&F.dataset.command!=="new-tab"&&this.active(F),v.remove()}create(v=void 0){if(typeof v=="string"){const Ee=this.getTab(v);if(this.protoReg.test(v)&&Ee){this.active(Ee);return}}const F=i("mujs-tab",{dataset:{command:"switch-tab"},style:`order: ${this.el.head.childElementCount};`}),q=i("mu-js",{dataset:{command:"close-tab"},title:_("close"),textContent:"X"}),J=i("mujs-host"),[,X]=this.protoReg.exec(v)??[];return F.append(J,q),this.el.head.append(F),this.active(F,!1),W(v)?(e(),F.dataset.host=this.blank,J.title=_("newTab"),J.textContent=_("newTab")):X?(F.dataset.host=v||X,J.title=X||F.dataset.host,J.textContent=J.title,this.intFN(v)):(F.dataset.host=v||X,J.title=v||X,J.textContent=J.title),F}}this.Tabs=new x(this.toolbar),this.Tabs.create(n);const I=this.tabbody,A=(H,v)=>H.children[v].dataset.value||H.children[v].textContent,Z=(H,v)=>(F,q)=>((J,X)=>J!==""&&X!==""&&!isNaN(J)&&!isNaN(X)?J-X:J.toString().localeCompare(X))(A(v?F:q,H),A(v?q:F,H));for(const H of this.tabhead.rows[0].cells)h.text(H)!==_("install")&&(h.cl.add(H,"mujs-pointer"),Q(H,"click",()=>{Array.from(I.querySelectorAll("tr")).sort(Z(Array.from(H.parentNode.children).indexOf(H),this.asc=!this.asc)).forEach(v=>I.appendChild(v))}))}init(){try{return this.mainframe=i("mu-js","mainframe",{style:`opacity: ${this.opacityMin};`}),this.countframe=i("mujs-column"),this.mainbtn=i("count-frame","mainbtn",{textContent:"0"}),this.urlBar=i("input","mujs-url-bar",{autocomplete:"off",spellcheck:!1,type:"text",placeholder:_("search_placeholder")}),this.rateContainer=i("mujs-column","rate-container"),this.footer=i("mujs-row","mujs-footer"),this.tabbody=i("tbody"),this.promptElem=i("mujs-row","mujs-prompt"),this.toolbar=i("mujs-toolbar"),this.table=i("table"),this.tabhead=i("thead"),this.header=i("mujs-header"),this.tbody=i("mujs-body"),this.cfgpage=i("mujs-row","mujs-cfg hidden",{_mujs:{base:[],sections:new Set}}),this.main=i("mujs-main","hidden"),this.urlContainer=i("mujs-url"),this.btnframe=i("mujs-column","btn-frame"),this.btnHandles=i("mujs-column","btn-handles"),this.btnHide=i("mujs-btn","hide-list",{title:_("min"),innerHTML:D.load("minus"),dataset:{command:"hide-list"}}),this.btnfullscreen=i("mujs-btn","fullscreen",{title:_("max"),innerHTML:D.load("expand"),dataset:{command:"fullscreen"}}),this.closebtn=i("mujs-btn","close",{title:_("close"),innerHTML:D.load("close"),dataset:{command:"close"}}),this.btncfg=i("mujs-btn","settings hidden",{title:"Settings",innerHTML:D.load("gear"),dataset:{command:"settings"}}),this.btnhome=i("mujs-btn","github hidden",{title:`GitHub (v${/\d+\.\d+\.\d+|Book/.test(fe.script.version)?fe.script.version:fe.script.version.slice(0,5)})`,innerHTML:D.load("github"),dataset:{command:"open-tab",webpage:fe.script.namespace}}),this.btnissue=i("mujs-btn","issue hidden",{innerHTML:D.load("issue"),title:_("issue"),dataset:{command:"open-tab",webpage:fe.script.bugs??"https://github.com/magicoflolis/Userscript-Plus/issues"}}),this.btngreasy=i("mujs-btn","greasy hidden",{title:"Greasy Fork",innerHTML:D.load("globe"),dataset:{command:"open-tab",webpage:"https://greasyfork.org/scripts/421603"}}),this.btnnav=i("mujs-btn","nav",{title:"Navigation",innerHTML:D.load("nav"),dataset:{command:"navigation"}}),((t=[])=>{const n=i("tr");for(const l of t){const g=i("th",l.class??"",l);n.append(g)}this.tabhead.append(n),this.table.append(this.tabhead,this.tabbody)})([{class:"mujs-header-name",textContent:_("name")},{textContent:_("createdby")},{textContent:_("daily_installs")},{textContent:_("updated")},{textContent:_("install")}]),ke?(h.cl.add([this.btnHide,this.btnfullscreen,this.closebtn],"hidden"),this.btnframe.append(this.btnHide,this.btnfullscreen,this.closebtn,this.btnhome,this.btngreasy,this.btnissue,this.btncfg,this.btnnav)):(this.btnHandles.append(this.btnHide,this.btnfullscreen,this.closebtn),this.btnframe.append(this.btnhome,this.btngreasy,this.btnissue,this.btncfg,this.btnnav)),this.toolbar.append(this.btnHandles),this.urlContainer.append(this.urlBar),this.header.append(this.urlContainer,this.rateContainer,this.countframe,this.btnframe),this.tbody.append(this.table,this.cfgpage),this.main.append(this.toolbar,this.header,this.tbody,this.footer,this.promptElem),this.mainframe.append(this.mainbtn),this.root.append(this.mainframe,this.main),!0}catch(e){V(e)}return!1}remove(){this.userjsCache.clear(),h.remove(this.frame)}async save(){return this.unsaved=!1,await Pe.setValue("Config",w),ye("Saved config:",w),this.redirect(),w}loadCSS(e,t="CSS",n=!0){try{if(this.stylesheet)return this.stylesheet;if(typeof t!="string")throw new Error('"name" must be a typeof "string"',{cause:"loadCSS"});if(typeof e!="string")throw new Error('"css" must be a typeof "string"',{cause:"loadCSS"});if(pe(e))throw new Error(`"${t}" contains empty CSS string`,{cause:"loadCSS"});const l=N(this.root.shadowRoot)?this.root:this.root.shadowRoot;if(n&&de){const y=B(GM.addElement)&&GM.addElement||B(GM_addElement)&&GM_addElement;if(!B(y))return this.loadCSS(e,t,!1);const x=y(l,"style",{textContent:e});if(Se(x))return x.dataset.insertedBy=fe.script.name,x.dataset.role=t,this.stylesheet=x,this.stylesheet}const g=i("style",{textContent:e,dataset:{insertedBy:fe.script.name,role:t}});return l.appendChild(g),this.stylesheet=g,this.stylesheet}catch(l){V(l)}}checkBlacklist(e){if(e=e||this.host,/accounts*\.google\./.test(this.webpage.host))return this.isBlacklisted=!0,this.isBlacklisted;let t=!1;for(const n of ae(w.blacklist))if(typeof n=="string"){if(n.startsWith("userjs-")){const[,l]=/userjs-(\w+)/.exec(n)??[],g=He[l];Be(g)?g.test(e)&&(t=!0):le(g)&&g.host===this.host&&(t=!0)}}else if(le(n)){if(!n.enabled)continue;if(n.regex===!0&&new RegExp(n.url,n.flags).test(e)&&(t=!0),Array.isArray(n.url))for(const l of n.url)e.includes(l)&&(t=!0);e.includes(n.url)&&(t=!0)}return this.isBlacklisted=t,this.isBlacklisted}setTheme(){const e=w.theme??se.theme;if(e===se.theme)return;const{style:t}=this.root;for(const[n,l]of Object.entries(e)){const g=`--mujs-${n}`,y=t.getPropertyValue(g);N(l)&&(e[n]=y),y!==l&&(t.removeProperty(g),t.setProperty(g,l))}}makePrompt(e,t={},n=!0){h.remove(Ae.prompts);const l=i("mu-js","prompt",{dataset:{prompt:e}}),g=i("mu-js","prompt-head",{innerHTML:`${D.load("refresh")} ${e}`});if(l.append(g),n){const y=i("mu-js","prompt-body",{dataset:t}),x=i("mujs-btn","prompt-confirm",{innerHTML:"Confirm",dataset:{command:"prompt-confirm"}}),I=i("mujs-btn","prompt-deny",{innerHTML:"Deny",dataset:{command:"prompt-deny"}});y.append(x,I),l.append(y)}else{const y=i("mu-js","prompt-body"),x=i("mujs-btn","prompt-deny",{textContent:_("close")});Q(x,ke?"touchend":"click",()=>{l.remove()}),y.append(x),l.append(y)}return Ae.prompts.push(l),this.promptElem.append(l),l}showError(...e){V(...e);const t=i("mu-js","error");let n="";for(const l of e)n+=`${typeof l=="string"?l:`${l.cause?`[${l.cause}] `:""}${l.message}${l.stack?` ${l.stack}`:""}`}
`;t.appendChild(Y.createTextNode(n)),this.footer.append(t)}refresh(){this.urlBar.placeholder=_("newTab"),Ce.reset(),h.cl.remove(this.toElem(),"hidden"),h.cl.remove(this.cfgpage._mujs.sections,"hidden"),h.prop([this.tabbody,this.rateContainer,this.footer],"innerHTML","")}redirect(){const e=window.top.location,{hostname:t}=e,n=/greasyfork\.org/.test(t);if(!n&&w.sleazyredirect)return;const l=n?"sleazyfork":"greasyfork";if(P("span.sign-in-link")&&/scripts\/\d+/.test(e.href)&&!P("#script-info")&&(l=="greasyfork"||P("div.width-constraint>section>p>a"))){const g=e.href.replace(/\/\/([^.]+\.)?(greasyfork|sleazyfork)\.org/,"//$1"+l+".org");ye(`Redirecting to "${g}"`),B(e.assign)?e.assign(g):e.href=g}}async timeoutFrame(e){const t=this.timeouts.frame;if(t.clear(...t.ids),h.cl.has(this.mainframe,"hidden"))return;e=e??w.time??se.time;let n=1e4;typeof e=="number"&&!Number.isNaN(e)&&(n=this.isBlacklisted?e/2:e),await t.set(n),this.remove(),t.clear(...t.ids)}toElem(){return Array.from(this).map(({_mujs:e})=>e.root)}*[Symbol.iterator](){const e=Array.from(this.userjsCache.values()).filter(({_mujs:t})=>!N(t)&&t.info.engine.enabled);for(const t of e)yield t}},f=new Ae;function Ve(){const e={build:Qe};try{const{scheduler:t}=Y,{btnfullscreen:n,mainframe:l,main:g,Tabs:y,showError:x,cfgpage:{_mujs:{sections:I,base:A}}}=f,Z=()=>{for(const r of A){const[,a,o]=/^(\w+)-(.+)/.exec(r.value)??[];let d=se[r.value],c=w[r.value];if(r.tag==="engine"){const s=se.engines.find(p=>p.name===r.value),m=w.engines.find(p=>p.name===r.value);s&&(d=s),m&&(c=m)}else a&&(d=se[a][o],c=w[a][o]);r.cache=c,r.type==="checkbox"?a?a==="filters"?r.elem.checked=w[a][o].enabled:r.elem.checked=c:r.tag==="engine"&&(r.elem.checked=c.enabled,r.elemUrl.value=_e(c.query),r.elemUrl.placeholder=_e(d.query),r.elemToken&&(r.elemToken=c.token)):r.elem.value=c}f.setTheme()},H=async r=>{const a=window.top.location;B(a.assign)?a.assign(r.href):a.href=r.href,r.remove(),await Oe()},v=async r=>{if(!r.url)return;const a=i("a");a.href=r.url,a.setAttribute("download",r.filename||""),a.setAttribute("type","text/plain"),a.dispatchEvent(new MouseEvent("click")),await Oe()},F=(r,a,o,d)=>{const c=r._mujs.code[a]??r._mujs.code.data_meta[a];if(N(c)){const s=i("mujs-a",{textContent:_("listing_none")});o.append(s);return}if(h.prop(o,"innerHTML",""),h.cl.remove(d,"hidden"),le(c))if(a==="resource")for(const[s,m]of Object.entries(c)){const p=i("mujs-a",{textContent:s??"ERROR"});m.startsWith("http")&&(p.dataset.command="open-tab",p.dataset.webpage=m),o.append(p)}else{const s=i("mujs-a",{textContent:c.text});c.domain&&(s.dataset.command="open-tab",s.dataset.webpage=`https://${c.text}`),o.append(s)}else if(typeof c=="string"){const s=i("mujs-a",{textContent:c});o.append(s)}else for(const s of c)if(typeof s=="string"&&s.startsWith("http")){const m=i("mujs-a",{textContent:s,dataset:{command:"open-tab",webpage:s}});o.append(m)}else if(le(s)){const m=i("mujs-a",{textContent:s.text});s.domain&&(m.dataset.command="open-tab",m.dataset.webpage=`https://${s.text}`),o.append(m)}else{const m=i("mujs-a",{textContent:s});o.append(m)}},q=f.timeouts.frame;if(Q(g,ke?"touchend":"click",async r=>{try{if(W(r.target))return;const o=r.target.closest("[data-command]");if(W(o))return;let d=o.dataset,c=d.command;if(/^prompt-/.test(o.dataset.command)){d=o.parentElement.dataset,c=d.command;let s=o.parentElement.parentElement;if(/prompt-install/.test(o.dataset.command)){s=o.parentElement.parentElement.parentElement;const m=i("a",{onclick(p){p.preventDefault(),H(p.target)}});m.href=o.dataset.code_url,m.click()}else if(/prompt-download/.test(o.dataset.command)){s=o.parentElement.parentElement.parentElement;const m=f.userjsCache.get(+o.dataset.userjs);if(m){const p=await m._mujs.code.request(!1,o.dataset.code_url);typeof p.code=="string"&&v({url:"data:text/plain;charset=utf-8,"+encodeURIComponent(p.code),filename:`${m.name}${ve(o.dataset.code_url)?".user.css":".user.js"}`})}}s.remove();return}if(c==="install-script"){const s=f.userjsCache.get(+d.userjs);if(W(s))return;if(s.code_urls.length>1){const m=i("mujs-list",{style:"display: flex; flex-direction: column;"});for(const p of s.code_urls){const u=i("mujs-a",{title:p.code_url,textContent:p.name,dataset:{command:"prompt-install",code_url:p.code_url}});m.append(u)}f.makePrompt(`Multiple detected: ${m.outerHTML}`,d,!1)}else{const m=i("a",{onclick(p){p.preventDefault(),H(p.target)}});m.href=s.code_url,m.click()}}else if(/open-tab|more-info/.test(c)&&d.webpage){if(c==="more-info"&&r.preventDefault(),ie.log(c),de){if(B(GM.openInTab))return GM.openInTab(d.webpage);if(B(GM_openInTab))return GM_openInTab(d.webpage,{active:!0,insert:!0})}return window.open(d.webpage,"_blank")}else if(c==="navigation")for(const s of ae(he("mujs-btn",o.parentElement)).filter(m=>!h.cl.has(m,"nav")))h.cl.toggle(s,"hidden");else if(c==="list-description"){const s=[],m=new Set(["TD","MUJS-A","MU-JS"]),p=o.parentElement;for(const u of Object.values(p._mujs))m.has(u.tagName)||u.tagName==="TEXTAREA"&&N(u.value)||s.push(u);o.nextElementSibling&&(s.push(o.nextElementSibling),o.nextElementSibling.nextElementSibling&&s.push(o.nextElementSibling.nextElementSibling)),h.cl.has(s[0],"hidden")?h.cl.remove(s,"hidden"):h.cl.add(s,"hidden")}else if(c==="close")f.remove();else if(c==="fullscreen")h.cl.has(n,"expanded")?(h.cl.remove([n,g],"expanded"),h.prop(n,"innerHTML",D.load("expand"))):(h.cl.add([n,g],"expanded"),h.prop(n,"innerHTML",D.load("collapse")));else if(c==="hide-list")h.cl.add(g,"hidden"),h.cl.remove(l,"hidden"),f.timeoutFrame();else if(c==="save"){if(f.rebuild=!0,h.prop(f.rateContainer,"innerHTML",""),!h.prop(o,"disabled")){const s=await f.save();f.rebuild&&s.autofetch&&e.build(),f.unsaved=!1,f.rebuild=!1}}else if(c==="reset")w=se,h.remove(he(".error",f.footer)),f.unsaved=!0,f.rebuild=!0,Z();else if(c==="settings")f.unsaved&&x("Unsaved changes"),y.create("mujs:settings"),f.rebuild=!1;else if(c==="new-tab")y.create();else if(c==="switch-tab")y.active(o);else if(c==="close-tab"&&o.parentElement)y.close(o.parentElement);else if(c==="download-userjs"){const s=f.userjsCache.get(+d.userjs);if(W(s))return;if(s.code_urls.length>1){const m=i("mujs-list",{style:"display: flex; flex-direction: column;"});for(const p of s.code_urls){const u=i("mujs-a",{title:p.code_url,textContent:p.name,dataset:{command:"prompt-download",code_url:p.code_url,userjs:d.userjs}});m.append(u)}f.makePrompt(`Multiple detected: ${m.outerHTML}`,d,!1)}else{const m=await s._mujs.code.request(!1);typeof m.code=="string"&&v({url:"data:text/plain;charset=utf-8,"+encodeURIComponent(m.code),filename:`${s.name}${ve(s.code_url)?".user.css":".user.js"}`})}}else if(c==="load-userjs"||c==="load-header"){if(!f.userjsCache.has(+d.userjs))return;const s=P("textarea",o.parentElement.parentElement);if(!N(s.value)&&c===s.dataset.load){h.cl.toggle(s,"hidden");return}s.dataset.load=c;const m=f.userjsCache.get(+d.userjs),p=await m._mujs.code.request();if(typeof p.data_code_block!="string"){s.value="An error occured";return}s.value=c==="load-userjs"?p.data_code_block:p.data_meta_block,h.cl.remove(s,"hidden");for(const u of he('mujs-column[data-el="matches"]',o.parentElement.parentElement))F(m,u.dataset.type,P(".mujs-grants",u),u)}else if(c==="load-page"){if(!f.userjsCache.has(+d.userjs))return;let s=P("mujs-page",o.parentElement.parentElement);if(!s){s=i("mujs-page"),o.parentElement.parentElement.append(s);const m=f.userjsCache.get(+d.userjs),p=m._mujs.info.engine;let u;if(p.name.includes("fork")){const{navigator:{language:j}}=Y,{current:R}=te;u=m.url.replace(/\/scripts/,`/${/^(zh|fr|es)/.test(R)?j:R}/scripts`)}else if(p.name.includes("github")){const j=await ne.req(m.page_url,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${p.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).catch(()=>({}));if(!j.download_url)return;const R=await ne.req(j.download_url,"GET","text");if(f.shadowSupport){const K=s.attachShadow({mode:"closed"}),z=i("div",{innerHTML:R});K.append(z)}return}else u=m.url;if(!u)return;const b=await ne.req(u,"GET","document"),E=()=>{let j="An error occured";const R=new URL(m.url),K=P(".user-content",b.documentElement);for(const z of he("[href]",K))z.target="_blank",z.style="pointer-events: auto;",z.href.startsWith("/")&&(z.href=`${R.origin}${z.href}`);for(const z of he("img[src]",K))z.style="max-width: 25em; max-height: 25em; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;";return K?j=K.innerHTML:j="No additional info available",j};if(f.shadowSupport){const j=s.attachShadow({mode:"closed"}),R=i("div",{style:"pointer-events: none;",innerHTML:E()});j.append(R)}return}if(!h.cl.has(s,"hidden")){h.cl.add(s,"hidden");return}h.cl.remove(s,"hidden")}else if(/export-/.test(c)){const s=c==="export-cfg";v({url:"data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(s?w:w.theme,null," ")),filename:`Magic_Userscript_${s?"config":"theme"}.json`})}else if(/import-/.test(c)){if(P("input",o.parentElement)){P("input",o.parentElement).click();return}const s=i("input","hidden",{type:"file",accept:".json",onchange(m){const p=m.target.files[0];if(p===void 0||p.name==="")return;const u=new FileReader;u.onload=function(){if(typeof u.result!="string")return;const b=JSON.parse(u.result);b.blacklist?(w=b,f.unsaved=!0,f.rebuild=!0,Z(),f.save().then(E=>{E.autofetch&&e.build(),f.unsaved=!1,f.rebuild=!1})):(w.theme=b,f.setTheme()),s.remove()},u.readAsText(p)}});o.parentElement.append(s),s.click()}}catch(a){x(a)}}),Q(g,"auxclick",r=>{if(r.button!==1)return;const a=r.target.closest("[data-command]");if(!a)return;const d=a.dataset.command;d==="switch-tab"||d==="close-tab"?y.close(a):d==="new-tab"&&y.create()}),!ke){const r=async(a,o)=>{o==="mouseenter"?(q.clear(...q.ids),f.timeouts.mouse.clear(...f.timeouts.mouse.ids),a.style.opacity=f.opacityMax):o==="mouseleave"&&(await f.timeouts.mouse.set(w.time),a.style.opacity=f.opacityMin)};for(const a of["mouseenter","mouseleave"])Q(g,a,o=>{o.preventDefault(),o.stopPropagation(),r(o.target,o.type)})}Q(g,"updateditem",r=>{const a=r.detail;if(a._mujs){if(a.deleted===!0){a._mujs.root.remove(),f.userjsCache.delete(a.id),Ce.reset(),be.sortRecords();return}N(a.code_urls)||(a.code_url=a.code_urls[0].code_url);for(const o of he("[data-name]",a._mujs.root)){const d=o.dataset.name;if(d==="code"){a._mujs.code.data_code_block&&(w.preview.code&&!w.preview.metadata?o.value=a._mujs.code.data_code_block:w.preview.metadata&&!w.preview.code?o.value=a._mujs.code.data_meta_block:o.value=`${a._mujs.code.META_START_COMMENT}${a._mujs.code.data_meta_block}${a._mujs.code.META_END_COMMENT}${a._mujs.code.data_code_block}`);continue}a[d]&&(d==="license"?(h.attr(o,"title",a.license??_("no_license")),h.text(o,`${_("license")}: ${a.license??_("no_license")}`)):d==="code_updated_at"?(h.text(o,te.toDate(a.code_updated_at)),o.dataset.value=new Date(a.code_updated_at).toISOString()):d==="created_date"?(h.text(o,`${_("created_date")}: ${te.toDate(a.created_at)}`),o.dataset.value=new Date(a.created_at).toISOString()):d==="total_installs"?h.text(o,`${_("total_installs")}: ${te.toNumber(a.total_installs)}`):h.text(o,a[d]))}if(a._mujs.code.data_code_block)for(const o of he('mujs-column[data-el="matches"]',a._mujs.root))F(a,o.dataset.type,P(".mujs-grants",o),o);f.userjsCache.has(a.id)&&f.userjsCache.set(a.id,a)}});const X=["com","net","org","de","co.uk"],Ee=["http://*","https://*","http://*/*","https://*/*","http*://*","http*://*/*","*","*://*","*://*/*","http*"];class $e{code;data_meta_block;data_code_block;data_meta;data_names;constructor(a,o){this.isUserCSS=o===!0,this.META_START_COMMENT=this.isUserCSS?"/* ==UserStyle==":"// ==UserScript==",this.META_END_COMMENT=this.isUserCSS?"==/UserStyle== */":"// ==/UserScript==",a&&(this.code=a,this.get_meta_block(),this.get_code_block(),this.parse_meta(),this.calculate_applies_to_names())}get_meta_block(){if(N(this.code))return"";if(this.data_meta_block)return this.data_meta_block;const a=this.code.indexOf(this.META_START_COMMENT);if(W(a))return"";const o=this.code.indexOf(this.META_END_COMMENT,a);if(W(o))return"";const d=this.code.substring(a+this.META_START_COMMENT.length,o);return this.data_meta_block=d,this.data_meta_block}get_code_block(){if(N(this.code))return"";if(this.data_code_block)return this.data_code_block;const a=this.code.indexOf(this.META_START_COMMENT);if(W(a))return null;const o=this.code.indexOf(this.META_END_COMMENT,a);if(W(o))return null;const d=this.code.substring(o+this.META_END_COMMENT.length,this.code.length);return this.data_code_block=d.split(`
`).filter(Boolean).join(`
`),this.data_code_block}parse_meta(){if(N(this.code))return{};if(this.data_meta)return this.data_meta;const a={},o=new Map,d=this.isUserCSS&&/@([a-zA-Z:-]+)\s+(.*)/||/\/\/\s+@([a-zA-Z:-]+)\s+(.*)/;for(const c of this.get_meta_block().split(`
`).filter(Boolean)){let[,s,m]=d.exec(c)??[];if(!s)continue;s=s.trim(),m=m.trim(),o.has(s)||o.set(s,[]);const p=o.get(s);p.push(m),o.set(s,p)}for(const[c,s]of o)s.length>1?a[c]=s:a[c]=s[0];return this.data_meta=a,this.data_meta}calculate_applies_to_names(){if(N(this.code))return[];if(this.data_names)return this.data_names;let a=[];for(const[o,d]of Object.entries(this.parse_meta()))/include|match/i.test(o)&&(Array.isArray(d)?a=a.concat(d):a=a.concat([d]));return N(a)?[]:this.intersect(a,Ee)?(this.data_names=[{domain:!1,text:"All sites",tld_extra:!1}],this.data_names):(this.data_names=$e.getNames(a),this.data_names)}intersect(a,...o){return!pe([...new Set(a)].filter(d=>o.every(c=>c.includes(d))))}static getNames(a=[]){const o=new Map,d=c=>{o.has(c.text)||o.set(c.text,c)};for(let c of a){const s=c;let m=[];if(c.match(/^\/(.*)\/$/))m=[c];else{let p=/^\*(https?:.*)/i.exec(c);p&&(c=p[1]),c=c.replace(/^\*:/i,"http:").replace(/^\*\/\//i,"http://").replace(/^http\*:/i,"http:").replace(/^(https?):([^/])/i,"$1://$2"),p=/^([a-z]+:\/\/)\*\.?([a-z0-9-]+(?:.[a-z0-9-]+)+.*)/i.exec(c),p&&(c=p[1]+p[2]),p=/^\*\.?([a-z0-9-]+\.[a-z0-9-]+.*)/i.exec(c),p&&(c=`http://${p[1]}`),p=/^http\*(?:\/\/)?\.?((?:[a-z0-9-]+)(?:\.[a-z0-9-]+)+.*)/i.exec(c),p&&(c=`http://${p[1]}`),p=/^([a-z]+:\/\/([a-z0-9-]+(?:\.[a-z0-9-]+)*\.))\*(.*)/.exec(c),p?p[2].match(/A([0-9]+\.){2,}z/)?(c=`${p[1]}tld${p[3]}`,m=[c.split("*")[0]]):m=[c]:m=[c]}for(const p of m)try{const u=new URL(p),{host:b}=u;if(W(b))d({text:s,domain:!1,tld_extra:!1});else if(!b.includes(".")&&b.includes("*"))d({text:s,domain:!1,tld_extra:!1});else if(b.endsWith(".tld"))for(let E=0;E<X.length;E++){const j=X[E];d({text:b.replace(/tld$/i,j),domain:!0,tld_extra:E!=0})}else b.endsWith(".")?d({text:b.slice(0,-1),domain:!0,tld_extra:!1}):d({text:b,domain:!0,tld_extra:!1})}catch{d({text:s,domain:!1,tld_extra:!1})}}return[...o.values()]}async request(a=!1,o,d){if(this.data_code_block)return this;const c=await ne.req(o,"GET","text").catch(V);if(typeof c!="string")return this;this.isUserCSS=ve(o),this.META_START_COMMENT=this.isUserCSS?"/* ==UserStyle==":"// ==UserScript==",this.META_END_COMMENT=this.isUserCSS?"==/UserStyle== */":"// ==/UserScript==",this.code=c,this.get_meta_block(),this.get_code_block(),this.parse_meta(),this.calculate_applies_to_names();const{data_meta:s}=this;if(a&&(s[`name:${te.current}`]&&(Object.assign(d,{name:s[`name:${te.current}`]}),this.translated=!0),s[`description:${te.current}`]&&(Object.assign(d,{description:s[`description:${te.current}`]}),this.translated=!0)),Array.isArray(s.grant)&&(s.grant=at(s.grant)),s.resource){const m={};if(typeof s.resource=="string"){const[,p,u]=/(.+)\s+(.+)/.exec(s.resource)??[];p&&(m[p.trim()]=u)}else for(const p of s.resource){const[,u,b]=/(.+)\s+(http.+)/.exec(p)??[];u&&(m[u.trim()]=b)}s.resource=m}return Object.assign(this,{code_size:[ne.format(c.length)],meta:s}),this}}const We={id:0,bad_ratings:0,good_ratings:0,ok_ratings:0,daily_installs:0,total_installs:0,name:"NOT FOUND",description:"NOT FOUND",version:"0.0.0",url:je,code_url:je,created_at:Date.now(),code_updated_at:Date.now(),locale:"NOT FOUND",deleted:!1,users:[]},we=(r="",a={})=>{if(!a.root||!a.type)return;const{root:o,type:d}=a,c=i("mu-js","mujs-list",{textContent:`${r}: `}),s=i("mu-js","mujs-grants"),m=i("mujs-column","mujs-list",{dataset:{el:"matches",type:d}});m.append(c,s),o.append(m);const p=a.list??[];if(N(p)){const u=i("mujs-a",{textContent:_("listing_none")});s.append(u),h.cl.add(m,"hidden");return}for(const u of p)if(typeof u=="string"&&u.startsWith("http")){const b=i("mujs-a",{textContent:u,dataset:{command:"open-tab",webpage:u}});s.append(b)}else if(le(u))if(d==="resource")for(const[b,E]of Object.entries(u)){const j=i("mujs-a",{textContent:b??"ERROR"});E.startsWith("http")&&(j.dataset.command="open-tab",j.dataset.webpage=E),s.append(j)}else{const b=i("mujs-a",{textContent:u.text});u.domain&&(b.dataset.command="open-tab",b.dataset.webpage=`https://${u.text}`),s.append(b)}else{const b=i("mujs-a",{textContent:u});s.append(b)}},Re=(r,a)=>{if([r.deleted===!0,r.id===421603,Ge.includes(r.id),Ge.includes(r.url)].some(me=>me===!0))return;f.userjsCache.has(r.id)||f.userjsCache.set(r.id,r);const d=i("td","install-btn"),c=i("td","mujs-uframe"),s=i("td","mujs-list",{textContent:r.daily_installs,dataset:{name:"daily_installs"}}),m=i("td","mujs-list",{textContent:te.toDate(r.code_updated_at),dataset:{name:"code_updated_at",value:new Date(r.code_updated_at).toISOString()}}),p=i("td","mujs-name"),u=i("mujs-column","mujs-list hidden",{dataset:{el:"more-info"}}),b=i("mujs-column","mujs-list hidden"),E=i("mujs-row","mujs-list"),j=i("mujs-row","mujs-list"),R=i("mujs-column","mujs-list"),K=i("mujs-a","mujs-homepage",{textContent:r.name,title:r.url,dataset:{command:"open-tab",webpage:r.url}}),z=i("mu-js","mujs-list",{textContent:`${_("version_number")}: ${r.version}`}),ee=i("mu-js","mujs-list",{textContent:`${_("created_date")}: ${te.toDate(r.created_at)}`,dataset:{name:"created_at",value:new Date(r.created_at).toISOString()}}),$=i("mu-js","mujs-list",{title:r.license??_("no_license"),textContent:`${_("license")}: ${r.license??_("no_license")}`,dataset:{name:"license"}}),re=i("mu-js","mujs-list",{textContent:`${_("total_installs")}: ${te.toNumber(r.total_installs)}`,dataset:{name:"total_installs"}}),oe=i("mu-js","mujs-list",{title:_("ratings"),textContent:`${_("ratings")}:`}),G=i("mu-js","mujs-list mujs-ratings",{title:_("good"),textContent:r.good_ratings,dataset:{name:"good_ratings",el:"good"}}),M=i("mu-js","mujs-list mujs-ratings",{title:_("ok"),textContent:r.ok_ratings,dataset:{name:"ok_ratings",el:"ok"}}),T=i("mu-js","mujs-list mujs-ratings",{title:_("bad"),textContent:r.bad_ratings,dataset:{name:"bad_ratings",el:"bad"}}),S=i("mu-js","mujs-list mujs-pointer",{title:r.description,textContent:r.description,dataset:{command:"list-description"}}),U=i("mu-jsbtn","install",{innerHTML:`${D.load("install")} ${_("install")}`,title:`${_("install")} "${r.name}"`,dataset:{command:"install-script",userjs:r.id}}),C=i("mu-jsbtn",{innerHTML:`${D.load("download")} ${_("saveFile")}`,dataset:{command:"download-userjs",userjs:r.id,userjsName:r.name}}),O=i("tr","frame",{dataset:{engine:a,scriptId:r.id}}),L=i("textarea","code-area hidden",{dataset:{name:"code"},rows:"10",autocomplete:!1,spellcheck:!1,wrap:"soft"}),ge=i("mu-jsbtn",{innerHTML:`${D.load("code")} ${_("code")}`,dataset:{command:"load-userjs",userjs:r.id}}),Ne=i("mu-jsbtn",{innerHTML:`${D.load("code")} ${_("metadata")}`,dataset:{command:"load-header",userjs:r.id}});!a.includes("fork")&&w.recommend.others&&Te.includes(r.url)&&(O.dataset.good="upsell");for(const me of r.users){const Ze=i("mujs-a",{innerHTML:me.name,title:me.url,dataset:{command:"open-tab",webpage:me.url}});w.recommend.author&&(me.id===De||me.url==="https://github.com/magicoflolis")&&(O.dataset.author="upsell",h.prop(Ze,"innerHTML",`${me.name} ${D.load("verified")}`)),c.append(Ze)}w.recommend.others&&Te.includes(r.id)&&(O.dataset.good="upsell"),d.append(U),R.append(oe,G,M,T),E.append(re,R,z,ee),we(_("code_size"),{list:r._mujs.code.code_size,type:"code_size",root:E}),j.append($);const Me=r._mujs.code?.data_meta??{};we(_("antifeatures"),{list:Me.antifeatures??[],type:"antifeatures",root:j}),we(_("applies_to"),{list:r._mujs.code?.data_names??[],type:"data_names",root:j}),we("@grant",{list:Me.grant??[],type:"grant",root:j}),we("@require",{list:Me.require,type:"require",root:j}),we("@resource",{list:W(Me.resource)?[]:[Me.resource],type:"resource",root:j}),u.append(E,j),b.append(C,ge,Ne),p.append(K,S,u,b,L),p._mujs={fmore:u,fBtns:b,codeArea:L};const it=i("mu-jsbtn",{innerHTML:`${D.load("pager")} Page`,dataset:{command:"load-page",userjs:r.id}});b.append(it),r._mujs.code?.translated&&O.classList.add("translated");for(const me of[p,c,s,m,d])O.append(me);return r._mujs.root=O,r._mujs.root},Je=()=>{const r=new Map,a={pool:r,enabled(){return[...r.values()].filter(o=>o.enabled)},refresh(){Object.is(r.size,0)||r.clear();for(const[o,d]of Object.entries(w.filters))r.has(o)||r.set(o,{...d,reg:new RegExp(d.regExp,d.flag),keyReg:new RegExp(o.trim().toLocaleLowerCase(),"gi"),valueReg:new RegExp(d.name.trim().toLocaleLowerCase(),"gi")});return this},get(o){return[...r.values()].find(d=>d.keyReg.test(o)||d.valueReg.test(o))},match({name:o,users:d}){const c=a.enabled();if(Object.is(c.length,0))return!0;for(const s of c)if([{name:o},...d].find(m=>m.name.match(s.reg)))return!1;return!0}};for(const[o,d]of Object.entries(w.filters))r.has(o)||r.set(o,{...d,reg:new RegExp(d.regExp,d.flag),keyReg:new RegExp(o.trim().toLocaleLowerCase(),"gi"),valueReg:new RegExp(d.name.trim().toLocaleLowerCase(),"gi")});return a.refresh()},nt=class{#e;#t;constructor(r=void 0){this.build=this.build.bind(this),this.groupBy=this.groupBy.bind(this),this.dispatch=this.dispatch.bind(this),this.sortRecords=this.sortRecords.bind(this),this.#e=w.engines??[],this.setHost(r)}setEngines(r=[]){const{host:a}=this,o=r.filter(d=>d.enabled?(st[d.name]??[]).includes(a)?(x(`Engine: "${d.name}" unsupported on "${a}"`),f.timeoutFrame(),!1):!0:!1);return this.#e=o,o}setHost(r){return N(r)&&(r=f.host),this.#t=r,this.blacklisted=f.checkBlacklist(r),this.#e=this.setEngines(this.engines),this.domain=this.getDomain(this.#t),this.blacklisted&&(x(`Blacklisted "${r}"`),f.timeoutFrame()),r}dispatch(r){const{CustomEvent:a}=Y,o=new a("updateditem",{detail:r});g.dispatchEvent(o)}get engines(){return this.#e}get host(){return this.#t}getDomain(r=""){return r==="*"?"all-sites":r.split(".").at(-2)??je}build(){try{f.refresh();const{blacklisted:r,engines:a,host:o,domain:d,dispatch:c}=this;if(r||N(a)){f.opacityMin="0",l.style.opacity=f.opacityMin;return}const s=[],m=Je(),p=Array.from(this);ye("Building list",{hostCache:p,engines:a,container:f,list:this});const u=this.groupBy(),b=a.filter(j=>!u[j.name]),E=b.filter(j=>p.find(({_mujs:R})=>j.name===R.info.engine.name));if(!pe(b)&&pe(E))for(const j of a){ye(`Fetching from "${j.name}" for "${o}"`);const R=G=>{if(G.cause||(G.cause=j.name),G.message.startsWith("429")){x(`Engine: "${j.name}" Too many requests...`);return}x(`Engine: "${j.name}"`,G.message)},K=G=>{const M={...We,...G,code_urls:[],_mujs:{root:{},info:{engine:j,host:o},code:{meta:{}}}};return M._mujs.code.request=async(T=!1,S)=>{if(typeof M._mujs.code.data_code_block=="string")return M._mujs.code;const U=new $e;if(await U.request(T,S??M.code_url,M),S)return U;for(const[C,O]of Object.entries(U))M._mujs.code[C]=O;return M._mujs.code},M},z=G=>j.query?_e(j.query).replace(/\{host\}/g,o).replace(/\{domain\}/g,d):G,ee=async G=>{if(!G){x("Invalid data received from the server, check internet connection");return}const T=(Array.isArray(G)?G:Array.isArray(G.query)?G.query:[]).filter(Boolean).filter(C=>!C.deleted).filter(m.match);if(pe(T))return;const{groupBy:S}=Y,U=S(T.map(K),({locale:C})=>{const[O=C]=C.split("-");return O});for(const[C,O]of Object.entries(U)){if(!O)break;for(const L of O)w.filterlang&&C!==te.current&&!(await L._mujs.code.request(!0)).translated||(!L._mujs.code.data_code_block&&(w.preview.code||w.preview.metadata)&&L._mujs.code.request().then(()=>{c(L)}),ve(L.code_url)&&L.code_urls.push({name:`${L.name} (.user.css)`,code_url:L.code_url},{name:`${L.name} (.user.js)`,code_url:L.code_url.replace(/\.user\.css$/,".user.js")}),Re(L,j.name))}},$=async G=>{try{if(!G){x("Invalid data received from the server, TODO fix this");return}const M=G.documentElement;if(/openuserjs/gi.test(j.name)){const T=he(".col-sm-8 .tr-link",M)??[];for(const S of T){for(;W(P(".script-version",S));)await new Promise(O=>requestAnimationFrame(O));const U=h.prop(P(".tr-link-a",S),"href").replace(new RegExp(document.location.origin,"gi"),"https://openuserjs.org"),C=K({name:h.text(P(".tr-link-a",S)),description:h.text(P("p",S)),version:h.text(P(".script-version",S)),url:U,code_url:`${U.replace(/\/scripts/gi,"/install")}.user.js`,total_installs:h.text(P("td:nth-child(2) p",S)),created_at:h.attr(P("td:nth-child(4) time",S),"datetime"),code_updated_at:h.attr(P("td:nth-child(4) time",S),"datetime"),users:[{name:h.text(P(".inline-block a",S)),url:h.prop(P(".inline-block a",S),"href")}]});m.match(C)||(!C._mujs.code.data_code_block&&(w.preview.code||w.preview.metadata)&&C._mujs.code.request().then(()=>{c(C)}),Re(C,j.name))}}}catch(M){x(M)}},re=G=>{try{if(pe(G.items))return;for(const M of G.items){const T=K({id:M.id??0,name:M.name,description:N(M.description)?_("no_license"):M.description,url:M.html_url,code_url:M.html_url,page_url:`${M.url}/contents/README.md`,created_at:M.created_at,code_updated_at:M.updated_at||Date.now(),daily_installs:M.watchers_count??0,good_ratings:M.stargazers_count??0,users:[{name:M.owner.login,url:M.owner.html_url}]});M.license?.name&&(T.license=M.license.name);const S=M.contents_url.replace(/\{\+path\}/,""),U=async C=>{const O=await ne.req(C,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${j.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).catch(R);for(const L of O)L.type==="file"?tt(L.name)?T.code_urls.push({name:L.name,code_url:L.download_url}):ve(L.name)&&T.code_urls.push({name:L.name,code_url:L.download_url}):L.type==="dir"&&await U(`${S}/${L.path}`)};U(S).then(()=>{if(N(T.code_urls))T.deleted=!0;else if(!T._mujs.code.data_code_block&&(w.preview.code||w.preview.metadata)){T._mujs.code.request().then(()=>{c(T)});return}c(T)}),Re(T,j.name)}}catch(M){x(M)}};let oe;if(/github/gi.test(j.name)){if(N(j.token)){x(`"${j.name}" requires a token to use`);continue}ne.req(`https://api.github.com/search/repositories?q=topic:${d}+topic:userstyle`,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${j.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(re).catch(R),oe=ne.req(z(`https://api.github.com/search/repositories?q=topic:${d}+topic:userscript`),"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${j.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(re).then(()=>{ne.req("https://api.github.com/rate_limit","GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${j.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(G=>{for(const[M,T]of Object.entries(G.resources.code_search)){const S=i("mujs-row","rate-info",{textContent:`${M.toUpperCase()}: ${T}`});f.rateContainer.append(S)}}).catch(R)})}else/openuserjs/gi.test(j.name)?oe=ne.req(z(`${j.url}${o}`),"GET","document").then($):oe=ne.req(z(`${j.url}/scripts/by-site/${o}.json?language=all`)).then(ee);oe&&s.push(oe.catch(R))}else for(const j of p)f.tabbody.append(j._mujs.root);if(f.urlBar.placeholder=_("search_placeholder"),f.urlBar.value="",pe(s)){this.sortRecords();return}Promise.allSettled(s).then(this.sortRecords).catch(x)}catch(r){x(r)}}sortRecords(){const r=Array.from(this);for(const a of r.flat().sort((o,d)=>{const c=w.autoSort??"daily_installs";return d[c]-o[c]}))Se(a._mujs.root)&&f.tabbody.append(a._mujs.root);for(const[a,o]of Object.entries(this.groupBy(r)))Ce.update(o.length,{name:a})}groupBy(){return Y.groupBy(Array.from(this),({_mujs:r})=>r.info.engine.name)}*[Symbol.iterator](){const{host:r,engines:a}=this,o=Array.from(f).filter(({_mujs:d})=>d.info.host===r&&a.find(c=>c.enabled&&c.name===d.info.engine.name));for(const d of o)yield d}},be=new nt,rt=()=>{const r=i("mu-js","mujs-sty-flex"),a=i("mujs-btn","save",{textContent:_("save"),dataset:{command:"save"},disabled:!1}),o=i("mujs-btn","reset",{textContent:_("reset"),dataset:{command:"reset"}});r.append(o,a);const d=(u,b)=>{b=b??_("no_license"),u=u??_("no_license");const E=i("mujs-section",{dataset:{name:b}}),j=i("label",{dataset:{command:b}}),R=i("mu-js",{innerHTML:u});return Q(E,"click",K=>{const z=K.target.closest("[data-command]");if(!z)return;if(z.dataset.command===b){const $=he(`[data-${b}]`,E);h.cl.has($,"hidden")?h.cl.remove($,"hidden"):h.cl.add($,"hidden")}}),j.append(R),E.append(j),f.cfgpage.append(E),!I.has(E)&&I.add(E),E},c={general:d("General","general"),load:d("Automation","load"),list:d("List","list"),filters:d(`List Filters ${D.load("info",{dataset:{command:"more-info",webpage:"https://greasyfork.org/scripts/12179"}})}`,"filters"),blacklist:d("Blacklist (WIP)","blacklist"),engine:d("Search Engines","engine"),theme:d("Theme Colors","theme"),exp:d("Import / Export","exp")},s=(u,b,E="checkbox",j="general",R={})=>{const[K,z,ee]=/^(\w+)-(.+)/.exec(b)??[],$=i("label","sub-section hidden",{dataset:{[j]:u}}),re=i("mu-js",{innerHTML:u});$.append(re);const oe=()=>{if(j==="engine"){const S=se.engines.find(U=>U.name===b);if(S)return S}return z?se[z][ee]:se[b]},G=()=>{if(j==="engine"){const S=w.engines.find(U=>U.name===b);if(S)return S}return z?w[z][ee]:w[b]},M={text:u,tag:j,value:b,type:E,attrs:R,default:oe(),cache:G()};if(E==="select"){const S=i("select",{dataset:{[j]:u},...R});for(const U of Object.keys(We)){if(U==="deleted"||U==="users")continue;const C=i("option",{value:U,textContent:U});S.append(C)}return S.value=w[b],$.append(S),c[j]&&c[j].append($),M.elem=S,A.push(M),$}const T=i("input",{type:E,dataset:{[j]:u},...R});if(j==="engine"&&(T.dataset.name=b),c[j]&&c[j].append($),E==="checkbox"){const S=i("mu-js","mujs-inlab"),U=i("label",{onclick(){T.dispatchEvent(new MouseEvent("click"))}});if(S.append(T,U),$.append(S),z?z==="filters"?T.checked=w[z][ee].enabled:T.checked=w[z][ee]:T.checked=w[b],Q(T,"change",C=>{f.unsaved=!0,/filterlang/i.test(b)&&(f.rebuild=!0),z?z==="filters"?w[z][ee].enabled=C.target.checked:w[z][ee]=C.target.checked:w[b]=C.target.checked}),j==="engine"){const C=w.engines.find(O=>O.name===b);if(C){if(T.checked=C.enabled,T.dataset.engine=C.name,Q(T,"change",O=>{f.unsaved=!0,f.rebuild=!0,C.enabled=O.target.checked,be.setEngines(w.engines)}),C.query){const O=se.engines.find(ge=>ge.name===C.name),L=i("input",{type:"text",defaultValue:"",value:_e(C.query),placeholder:_e(O.query),dataset:{name:K,engine:C.name},onchange(ge){f.unsaved=!0,f.rebuild=!0;try{C.query=encodeURIComponent(new URL(ge.target.value).toString()),be.setEngines(w.engines)}catch(Ne){V(Ne)}}});M.elemUrl=L,$.append(L)}if(C.name==="github"){const O=i("input",{type:"text",defaultValue:"",value:C.token??"",placeholder:"Paste Access Token",dataset:{engine:"github-token"},onchange(L){f.unsaved=!0,f.rebuild=!0,C.token=L.target.value,be.setEngines(w.engines)}});M.elemToken=O,$.append(O)}}}}else E==="text"&&(T.defaultValue="",T.value=b??"",T.placeholder=b??"",j==="theme"&&(T.dataset[j]=u,Q(T,"change",S=>{let U=!0;try{const C=S.target.value,O=f.root.style,L=`--mujs-${u}`,ge=O.getPropertyValue(L);if(N(C)){w.theme[u]=se.theme[u],O.removeProperty(L);return}if(ge===C)return;O.removeProperty(L),O.setProperty(L,C),w.theme[u]=C}catch(C){V(C),U=!1}finally{U?(h.cl.remove(S.target,"mujs-invalid"),h.prop(a,"disabled",!1)):(h.cl.add(S.target,"mujs-invalid"),h.prop(a,"disabled",!0))}}))),$.append(T);return M.elem=T,A.push(M),$};de&&(s(_("userjs_sync"),"cache"),s(_("userjs_autoinject"),"autoinject","checkbox","load")),s(`${_("redirect")} ${D.load("info",{dataset:{command:"more-info",webpage:"https://greasyfork.org/scripts/23840"}})}`,"sleazyredirect"),s(`${_("dtime")} (ms)`,"time","number","general",{defaultValue:1e4,value:w.time,min:0,step:500,onbeforeinput(u){u.target.validity.badInput?(h.cl.add(u.target,"mujs-invalid"),h.prop(a,"disabled",!0)):(h.cl.remove(u.target,"mujs-invalid"),h.prop(a,"disabled",!1))},oninput(u){f.unsaved=!0;const b=u.target;b.validity.badInput||b.validity.rangeUnderflow&&b.value!=="-1"?(h.cl.add(b,"mujs-invalid"),h.prop(a,"disabled",!0)):(h.cl.remove(b,"mujs-invalid"),h.prop(a,"disabled",!1),w.time=N(b.value)?w.time:parseFloat(b.value))}}),s(_("auto_fetch"),"autofetch","checkbox","load"),s(_("userjs_fullscreen"),"autoexpand","checkbox","load",{onchange(u){u.target.checked?(h.cl.add([n,g],"expanded"),h.prop(n,"innerHTML",D.load("collapse"))):(h.cl.remove([n,g],"expanded"),h.prop(n,"innerHTML",D.load("expand")))}}),s("Clear on Tab close","clearTabCache","checkbox","load"),s(_("default_sort"),"autoSort","select","list"),s(_("filter"),"filterlang","checkbox","list"),s(_("preview_code"),"preview-code","checkbox","list"),s(_("preview_metadata"),"preview-metadata","checkbox","list"),s(_("recommend_author"),"recommend-author","checkbox","list"),s(_("recommend_other"),"recommend-others","checkbox","list");for(const[u,b]of Object.entries(w.filters))s(b.name,`filters-${u}`,"checkbox","filters");s("Greasy Fork","greasyfork","checkbox","engine"),s("Sleazy Fork","sleazyfork","checkbox","engine"),s("Open UserJS","openuserjs","checkbox","engine"),s(`GitHub API ${D.load("info",{dataset:{command:"more-info",webpage:"https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"}})}`,"github","checkbox","engine");for(const[u,b]of Object.entries(w.theme))s(u,b,"text","theme");const m=(u,b="",E=!1,j="String")=>{let R=u;if(typeof u=="string"){if(u.startsWith("userjs-")){E=!0;const $=u.substring(7);R=`Built-in "${$}"`,b=He[$]}}else if(!u.enabled)return;Be(b)?(b=b.toString(),j="RegExp"):(b=JSON.stringify(b),j="Object");const K=i("label","hidden",{textContent:R,dataset:{blacklist:u}}),z=i("input",{type:"text",defaultValue:"",value:b??"",placeholder:b??"",dataset:{blacklist:u},onchange($){let re=!0;try{const oe=$.target.value;if(N(oe))return;re=!0}catch(oe){V(oe),re=!1}finally{re?(h.cl.remove($.target,"mujs-invalid"),h.prop(a,"disabled",!1)):(h.cl.add($.target,"mujs-invalid"),h.prop(a,"disabled",!0))}}}),ee=i("select",{disabled:E,dataset:{blacklist:u}});if(E){z.readOnly=!0;const $=i("option",{value:j,textContent:j});ee.append($)}else for(const $ of["String","RegExp","Object"]){const re=i("option",{value:$,textContent:$});ee.append(re)}ee.value=j,K.append(z,ee),c.blacklist.append(K)};for(const u of w.blacklist)m(u);const p={export:{cfg:i("mujs-btn","mujs-export sub-section hidden",{textContent:_("export_config"),dataset:{command:"export-cfg",exp:"export-cfg"}}),theme:i("mujs-btn","mujs-export sub-section hidden",{textContent:_("export_theme"),dataset:{command:"export-theme",exp:"export-theme"}})},import:{cfg:i("mujs-btn","mujs-import sub-section hidden",{textContent:_("import_config"),dataset:{command:"import-cfg",exp:"import-cfg"}}),theme:i("mujs-btn","mujs-import sub-section hidden",{textContent:_("import_theme"),dataset:{command:"import-theme",exp:"import-theme"}})}};for(const u of Object.values(p))for(const b of Object.values(u))c.exp.append(b);f.cfgpage.append(r)};f.Tabs.custom=r=>{be.setHost(r),e.build()},Q(l,"mouseenter",r=>{r.preventDefault(),r.stopPropagation(),!W(r.target)&&(r.target.style.opacity=f.opacityMax,q.clear(...q.ids))}),Q(l,"mouseleave",r=>{r.preventDefault(),r.stopPropagation(),!W(r.target)&&(r.target.style.opacity=f.opacityMin,f.timeoutFrame())});let Ke=!0;Q(l,"click",r=>{r.preventDefault(),q.clear(...q.ids),Ke&&!w.autofetch&&(Ke=!1,e.build()),h.cl.remove(g,"hidden"),h.cl.add(l,"hidden"),w.autoexpand&&(h.cl.add([f.btnfullscreen,g],"expanded"),h.prop(f.btnfullscreen,"innerHTML",D.load("collapse")))}),Q(f.urlBar,"input",r=>{if(r.preventDefault(),f.urlBar.placeholder===_("newTab"))return;const a=r.target.value;if(N(a)){h.cl.remove([...f.toElem(),...I],"hidden");return}const o=new Set;if(!h.cl.has(f.cfgpage,"hidden")){const s=new RegExp(a,"gi");for(const m of I)Se(m)&&(o.has(m)||m.textContent.match(s)&&o.add(m));h.cl.add(I,"hidden"),h.cl.remove([...o],"hidden");return}const d=Array.from(f).filter(({_mujs:s})=>!o.has(s.root)),c=(s,m)=>{const p=a.replace(s,""),u=new RegExp(p,"gi");for(const b of d)typeof k=="number"&&`${b[m]}`.match(u)&&o.add(b._mujs.root)};if(a.match(/^(code_url|url):/))c(/^(code_url|url):/,"code_url");else if(a.match(/^(author|users?):/)){const[,s]=/^[\w_]+:(.+)/.exec(a)??[];if(s){const m=new RegExp(s,"gi");for(const p of d.filter(u=>!N(u.users)))for(const u of p.users)for(const b of Object.values(u))(typeof b=="string"&&b.match(m)||typeof b=="number"&&`${b}`.match(m))&&o.add(p._mujs.root)}}else if(a.match(/^(locale|i18n):/))c(/^(locale|i18n):/,"locale");else if(a.match(/^id:/))c(/^id:/,"id");else if(a.match(/^license:/))c(/^license:/,"license");else if(a.match(/^name:/))c(/^name:/,"name");else if(a.match(/^description:/))c(/^description:/,"description");else if(a.match(/^(search_engine|engine):/)){const[,s]=/^[\w_]+:(\w+)/.exec(a)??[];if(s){const m=new RegExp(s,"gi");for(const{_mujs:p}of d)p.info.engine.name.match(m)&&o.add(p.root)}}else if(a.match(/^filter:/)){const[,s]=/^\w+:(.+)/.exec(a)??[];if(s){const p=Je().get(s.trim().toLocaleLowerCase());if(p){const{reg:u}=p;for(const{name:b,users:E,_mujs:j}of d)[{name:b},...E].find(R=>R.name.match(u))||o.add(j.root)}}}else if(a.match(/^recommend:/))for(const{url:s,id:m,users:p,_mujs:u}of d)(p.find(b=>b.id===De)||Te.includes(s)||Te.includes(m))&&o.add(u.root);else{const s=new RegExp(a,"gi");for(const m of d)if(m.name&&m.name.match(s)&&o.add(m._mujs.root),m.description&&m.description.match(s)&&o.add(m._mujs.root),m._mujs.code.data_meta)for(const p of Object.keys(m._mujs.code.data_meta))/name|desc/i.test(p)&&p.match(s)&&o.add(m._mujs.root)}h.cl.add(f.toElem(),"hidden"),h.cl.remove([...o],"hidden")}),Q(f.urlBar,"change",r=>{if(r.preventDefault(),W(r.target))return;const{target:a}=r,o=y.getActive();if(f.urlBar.placeholder===_("newTab")&&o){const d=o.firstElementChild,c=Ue(Ie(a.value));if(y.protoReg.test(a.value)){const s=y.getTab(a.value);y.close(o),s?y.active(s):y.create(a.value),a.placeholder=_("search_placeholder"),a.value=""}else c==="*"?(o.dataset.host=c,d.title="<All Sites>",d.textContent="<All Sites>",be.setHost(c),e.build()):f.checkBlacklist(c)?x(`Blacklisted "${c}"`):(o.dataset.host=c,d.title=c,d.textContent=c,be.setHost(c),e.build())}}),t.postTask(rt,{priority:"background"}),e.build=async()=>{await t.postTask(be.build,{priority:"background"}),f.timeoutFrame()},w.autofetch?e.build():f.timeoutFrame()}catch(t){V(t),f.remove()}return e}const ot=e=>{B(e)&&(document.readyState==="interactive"||document.readyState==="complete"?e(document):document.addEventListener("DOMContentLoaded",t=>e(t.target),{once:!0}))},Oe=async(e="Config")=>{const t=await Pe.getValue(e,se);w={...se,...t},ye("Config:",w),ot(n=>{try{if(window.location===null)throw new Error('"window.location" is null, reload the webpage or use a different one',{cause:"loadDOM"});if(n===null)throw new Error('"doc" is null, reload the webpage or use a different one',{cause:"loadDOM"});f.redirect(),w.autoinject?f.inject(Ve,n):f.timeoutFrame(),qe.register(_("userjs_inject"),()=>{f.inject(Ve,n)}),qe.register(_("userjs_close"),()=>{f.remove()})}catch(l){V(l)}})};Oe()})();
