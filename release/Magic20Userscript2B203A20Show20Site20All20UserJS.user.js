// ==UserScript==
// @version      7.6.1
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
// @grant     GM_addValueChangeListener
// @grant     GM_addElement
// @grant     GM_info
// @grant     GM_getValue
// @grant     GM_openInTab
// @grant     GM_setValue
// @grant     GM_registerMenuCommand
// @grant     GM_removeValueChangeListener
// @grant     GM_xmlhttpRequest
// @grant     GM.addValueChangeListener
// @grant     GM.addElement
// @grant     GM.info
// @grant     GM.getValue
// @grant     GM.openInTab
// @grant     GM.setValue
// @grant     GM.registerMenuCommand
// @grant     GM.removeValueChangeListener
// @grant     GM.xmlHttpRequest
// @match     https://*/*
// @noframes
// @run-at     document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Magic20Userscript2B203A20Show20Site20All20UserJS.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Magic20Userscript2B203A20Show20Site20All20UserJS.meta.js
// ==/UserScript==
        'https://api.github.com/search/code?q="// ==UserScript=="+{host}+ "// ==/UserScript=="+in:file+language:js&per_page=30'
      )
    }
  ],
  theme: {
    'even-row': '',
    'odd-row': '',
    'even-err': '',
    'odd-err': '',
    'background-color': '',
    'gf-color': '',
    'sf-color': '',
    'border-b-color': '',
    'gf-btn-color': '',
    'sf-btn-color': '',
    'sf-txt-color': '',
    'txt-color': '',
    'chck-color': '',
    'chck-gf': '',
    'chck-git': '',
    'chck-open': '',
    placeholder: '',
    'position-top': '',
    'position-bottom': '',
    'position-left': '',
    'position-right': '',
    'font-family': ''
  },
  recommend: {
    author: true,
    others: true
  },
  filters: {
    ASCII: {
      enabled: false,
      name: 'Non-ASCII',
      regExp: '[^\\x00-\\x7F\\s]+'
    },
    Latin: {
      enabled: false,
      name: 'Non-Latin',
      regExp: '[^\\u0000-\\u024F\\u2000-\\u214F\\s]+'
    },
    Games: {
      enabled: false,
      name: 'Games',
      flag: 'iu',
      regExp:
        'Aimbot|AntiGame|Agar|agar\\.io|alis\\.io|angel\\.io|ExtencionRipXChetoMalo|AposBot|DFxLite|ZTx-Lite|AposFeedingBot|AposLoader|Balz|Blah Blah|Orc Clan Script|Astro\\s*Empires|^\\s*Attack|^\\s*Battle|BiteFight|Blood\\s*Wars|Bloble|Bonk|Bots|Bots4|Brawler|\\bBvS\\b|Business\\s*Tycoon|Castle\\s*Age|City\\s*Ville|chopcoin\\.io|Comunio|Conquer\\s*Club|CosmoPulse|cursors\\.io|Dark\\s*Orbit|Dead\\s*Frontier|Diep\\.io|\\bDOA\\b|doblons\\.io|DotD|Dossergame|Dragons\\s*of\\s*Atlantis|driftin\\.io|Dugout|\\bDS[a-z]+\\n|elites\\.io|Empire\\s*Board|eRep(ublik)?|Epicmafia|Epic.*War|ExoPlanet|Falcon Tools|Feuerwache|Farming|FarmVille|Fightinfo|Frontier\\s*Ville|Ghost\\s*Trapper|Gladiatus|Goalline|Gondal|gota\\.io|Grepolis|Hobopolis|\\bhwm(\\b|_)|Ikariam|\\bIT2\\b|Jellyneo|Kapi\\s*Hospital|Kings\\s*Age|Kingdoms?\\s*of|knastv(o|oe)gel|Knight\\s*Fight|\\b(Power)?KoC(Atta?ck)?\\b|\\bKOL\\b|Kongregate|Krunker|Last\\s*Emperor|Legends?\\s*of|Light\\s*Rising|lite\\.ext\\.io|Lockerz|\\bLoU\\b|Mafia\\s*(Wars|Mofo)|Menelgame|Mob\\s*Wars|Mouse\\s*Hunt|Molehill\\s*Empire|MooMoo|MyFreeFarm|narwhale\\.io|Neopets|NeoQuest|Nemexia|\\bOGame\\b|Ogar(io)?|Pardus|Pennergame|Pigskin\\s*Empire|PlayerScripts|pokeradar\\.io|Popmundo|Po?we?r\\s*(Bot|Tools)|PsicoTSI|Ravenwood|Schulterglatze|Skribbl|slither\\.io|slitherplus\\.io|slitheriogameplay|SpaceWars|splix\\.io|Survivio|\\bSW_[a-z]+\\n|\\bSnP\\b|The\\s*Crims|The\\s*West|torto\\.io|Travian|Treasure\\s*Isl(and|e)|Tribal\\s*Wars|TW.?PRO|Vampire\\s*Wars|vertix\\.io|War\\s*of\\s*Ninja|World\\s*of\\s*Tanks|West\\s*Wars|wings\\.io|\\bWoD\\b|World\\s*of\\s*Dungeons|wtf\\s*battles|Wurzelimperium|Yohoho|Zombs'
    },
    SocialNetworks: {
      enabled: false,
      name: 'Social Networks',
      flag: 'iu',
      regExp:
        'Face\\s*book|Google(\\+| Plus)|\\bHabbo|Kaskus|\\bLepra|Leprosorium|MySpace|meinVZ|odnoklassniki|Одноклассники|Orkut|sch(ue|ü)ler(VZ|\\.cc)?|studiVZ|Unfriend|Valenth|VK|vkontakte|ВКонтакте|Qzone|Twitter|TweetDeck'
    },
    Clutter: {
      enabled: false,
      name: 'Clutter',
      flag: 'iu',
      regExp:
        "^\\s*(.{1,3})\\1+\\n|^\\s*(.+?)\\n+\\2\\n*$|^\\s*.{1,5}\\n|do\\s*n('|o)?t (install|download)|nicht installieren|(just )?(\\ban? |\\b)test(ing|s|\\d|\\b)|^\\s*.{0,4}test.{0,4}\\n|\\ntest(ing)?\\s*|^\\s*(\\{@|Smolka|Hacks)|\\[\\d{4,5}\\]|free\\s*download|theme|(night|dark) ?(mode)?"
    }
  }
};
// #endregion
// #region i18n
class i18nHandler {
  constructor() {
    if (userjs.pool !== undefined) {
      return this;
    }
    userjs.pool = new Map();
    for (const [k, v] of Object.entries(translations)) {
      if (!userjs.pool.has(k)) userjs.pool.set(k, v);
    }
  }
  /**
   * @param {string | Date | number} str
   */
  toDate(str = '') {
    const { navigator } = safeSelf();
    return new Intl.DateTimeFormat(navigator.language).format(
      typeof str === 'string' ? new Date(str) : str
    );
  }
  /**
   * @param {number | bigint} number
   */
  toNumber(number) {
    const { navigator } = safeSelf();
    return new Intl.NumberFormat(navigator.language).format(number);
  }
  /**
   * @type { import("../typings/UserJS.d.ts").i18n$ }
   */
  i18n$(key) {
    const { navigator } = safeSelf();
    const current = navigator.language.split('-')[0] ?? 'en';
    return userjs.pool.get(current)?.[key] ?? 'Invalid Key';
  }
}
const language = new i18nHandler();
const { i18n$ } = language;
// #endregion
// #region Utilities
const union = (...arr) => [...new Set(arr.flat())];
/**
 * @type { import("../typings/types.d.ts").qs }
 */
const qs = (selector, root) => {
  try {
    return (root || document).querySelector(selector);
  } catch (ex) {
    err(ex);
  }
  return null;
};
/**
 * @type { import("../typings/types.d.ts").qsA }
 */
const qsA = (selectors, root) => {
  try {
    return (root || document).querySelectorAll(selectors);
  } catch (ex) {
    err(ex);
  }
  return [];
};
/**
 * @type { import("../typings/types.d.ts").normalizeTarget }
 */
const normalizeTarget = (target, toQuery = true, root) => {
  if (Object.is(target, null) || Object.is(target, undefined)) {
    return [];
  }
  if (Array.isArray(target)) {
    return target;
  }
  if (typeof target === 'string') {
    return toQuery ? Array.from((root || document).querySelectorAll(target)) : [target];
  }
  if (isElem(target)) {
    return [target];
  }
  return Array.from(target);
};
/**
 * @type { import("../typings/types.d.ts").ael }
 */
const ael = (el, type, listener, options = {}) => {
  try {
    for (const elem of normalizeTarget(el)) {
      if (!elem) {
        continue;
      }
      if (isMobile && type === 'click') {
        elem.addEventListener('touchstart', listener, options);
        continue;
      }
      elem.addEventListener(type, listener, options);
    }
  } catch (ex) {
    ex.cause = 'ael';
    err(ex);
  }
};
/**
 * @type { import("../typings/types.d.ts").formAttrs }
 */
const formAttrs = (elem, attr = {}) => {
  if (!elem) {
    return elem;
  }
  for (const key in attr) {
    if (typeof attr[key] === 'object') {
      formAttrs(elem[key], attr[key]);
    } else if (isFN(attr[key])) {
      if (/^on/.test(key)) {
        elem[key] = attr[key];
        continue;
      }
      ael(elem, key, attr[key]);
    } else if (key === 'class') {
      elem.className = attr[key];
    } else {
      elem[key] = attr[key];
    }
  }
  return elem;
};
/**
 * @type { import("../typings/types.d.ts").make }
 */
const make = (tagName, cname, attrs) => {
  let el;
  try {
    const { createElement } = safeSelf();
    el = createElement(tagName);
    if (!isEmpty(cname)) {
      if (typeof cname === 'string') {
        el.className = cname;
      } else if (isObj(cname)) {
        formAttrs(el, cname);
      }
    }
    if (!isEmpty(attrs)) {
      if (typeof attrs === 'string') {
        el.textContent = attrs;
      } else if (isObj(attrs)) {
        formAttrs(el, attrs);
      }
    }
  } catch (ex) {
    ex.cause = 'make';
    err(ex);
  }
  return el;
};

/**
 * @type { import("../typings/UserJS.d.ts").getGMInfo }
 */
const getGMInfo = () => {
  if (isGM) {
    if (isObj(GM.info)) {
      return GM.info;
    } else if (isObj(GM_info)) {
      return GM_info;
    }
  }
  return {
    script: {
      icon: '',
      name: 'Magic Userscript+',
      namespace: 'https://github.com/magicoflolis/Userscript-Plus',
      updateURL: 'https://github.com/magicoflolis/Userscript-Plus/raw/master/dist/magic-userjs.js',
      version: 'Bookmarklet',
      bugs: 'https://github.com/magicoflolis/Userscript-Plus/issues'
    }
  };
};
const $info = getGMInfo();
// #endregion
/**
 * @type { import("../typings/types.d.ts").dom }
 */
const dom = {
  attr(target, attr, value = undefined) {
    for (const elem of normalizeTarget(target)) {
      if (value === undefined) {
        return elem.getAttribute(attr);
      }
      if (value === null) {
        elem.removeAttribute(attr);
      } else {
        elem.setAttribute(attr, value);
      }
    }
  },
  prop(target, prop, value = undefined) {
    for (const elem of normalizeTarget(target)) {
      if (value === undefined) {
        return elem[prop];
      }
      elem[prop] = value;
    }
  },
  text(target, text) {
    const targets = normalizeTarget(target);
    if (text === undefined) {
      return targets.length !== 0 ? targets[0].textContent : undefined;
    }
    for (const elem of targets) {
      elem.textContent = text;
    }
  },
  cl: {
    add(target, token) {
      token = Array.isArray(token) ? token : [token];
      return normalizeTarget(target).some((elem) => elem.classList.add(...token));
    },
    remove(target, token) {
      token = Array.isArray(token) ? token : [token];
      return normalizeTarget(target).some((elem) => elem.classList.remove(...token));
    },
    toggle(target, token, force) {
      let r;
      for (const elem of normalizeTarget(target)) {
        r = elem.classList.toggle(token, force);
      }
      return r;
    },
    has(target, token) {
      return normalizeTarget(target).some((elem) => elem.classList.contains(token));
    }
  }
};
class Memorize {
  constructor() {
    /**
     * @type {Map<string, Map<string, any>>}
     */
    this.store = new Map();
    /**
     * @type { { [key: string]: Map<string, any>; userjs: Map<number, import("../typings/types.d.ts").GSForkQuery> } }
     */
    this.maps = {};
    this.create('cfg', 'container', 'userjs');
  }
  /**
   * @template { string } S
   * @param { ...S } maps
   * @returns { S | S[] }
   */
  create(...maps) {
    const resp = [];
    for (const key of maps) {
      if (this.store.has(key)) {
        return this.store.get(key);
      }
      const m = new Map();
      this.store.set(key, m);
      this.maps[key] = m;
      resp.push(this.store.get(key));
    }
    return resp.length >= 2 ? resp : resp[0];
  }
}
const memory = new Memorize();
//#region Icon SVGs
const iconSVG = {
  close: {
    viewBox: '0 0 384 512',
    html: '<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>'
  },
  code: {
    viewBox: '0 0 640 512',
    html: '<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>'
  },
  collapse: {
    viewBox: '0 0 448 512',
    html: '<path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/>'
  },
  download: {
    viewBox: '0 0 384 512',
    html: '<path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>'
  },
  expand: {
    viewBox: '0 0 448 512',
    html: '<path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/>'
  },
  gear: {
    viewBox: '0 0 512 512',
    html: '<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>'
  },
  github: {
    viewBox: '0 0 496 512',
    html: '<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>'
  },
  globe: {
    viewBox: '0 0 512 512',
    html: '<path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>'
  },
  install: {
    viewBox: '0 0 512 512',
    html: '<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>'
  },
  issue: {
    viewBox: '0 0 512 512',
    html: '<path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/>'
  },
  minus: {
    viewBox: '0 0 448 512',
    html: '<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>'
  },
  nav: {
    viewBox: '0 0 448 512',
    html: '<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>'
  },
  pager: {
    viewBox: '0 0 512 512',
    html: '<path d="M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm64 32l0 64c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zM80 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0z"/>'
  },
  verified: {
    viewBox: '0 0 56 56',
    fill: 'currentColor',
    stroke: 'currentColor',
    html: '<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z"/></g>'
  },
  refresh: {
    viewBox: '0 0 512 512',
    fill: 'currentColor',
    html: '<path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/>'
  },
  load(type, container) {
    const { createElementNS } = safeSelf();
    const svgElem = createElementNS('http://www.w3.org/2000/svg', 'svg');
    for (const [k, v] of Object.entries(iconSVG[type])) {
      if (k === 'html') {
        continue;
      }
      svgElem.setAttributeNS(null, k, v);
    }
    try {
      if (typeof iconSVG[type].html === 'string') {
        svgElem.innerHTML = iconSVG[type].html;
        dom.attr(svgElem, 'id', `mujs_${type ?? 'Unknown'}`);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (ex) {
      /* empty */
    }
    if (container) {
      container.appendChild(svgElem);
      return svgElem;
    }
    return svgElem.outerHTML;
  }
};
//#endregion
/**
 * @type { import("../typings/UserJS.d.ts").StorageSystem }
 */
const StorageSystem = {
  prefix: 'MUJS',
  events: new Set(),
  getItem(key) {
    return window.localStorage.getItem(key);
  },
  has(key) {
    return !isNull(this.getItem(key));
  },
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  },
  remove(key) {
    window.localStorage.removeItem(key);
  },
  addListener(name, callback) {
    if (isGM) {
      let GMType;
      if (isFN(GM.addValueChangeListener)) {
        GMType = GM.addValueChangeListener(name, callback);
      } else if (isFN(GM_addValueChangeListener)) {
        GMType = GM_addValueChangeListener(name, callback);
      }
      if (GMType) {
        return this.events.add(GMType) && GMType;
      }
    }
    return (
      this.events.add(callback) &&
      window.addEventListener('storage', (evt) => {
        const { key, oldValue, newValue } = evt;
        if (key === name) callback(key, oldValue, newValue, false);
      })
    );
  },
  attach() {
    window.addEventListener('beforeunload', () => {
      for (const e of this.events) {
        if (isGM && typeof e === 'number' && !Number.isNaN(e)) {
          if (isFN(GM.removeValueChangeListener)) {
            GM.removeValueChangeListener(e);
          } else if (isFN(GM_addValueChangeListener)) {
            GM_removeValueChangeListener(e);
          }
        } else {
          window.removeEventListener('storage', e);
        }
        this.events.delete(e);
      }
    });
  },
  async setValue(key, v) {
    if (!v) {
      return;
    }
    v = typeof v === 'string' ? v : JSON.stringify(v);
    if (isGM) {
      if (isFN(GM.setValue)) {
        await GM.setValue(key, v);
      } else if (isFN(GM_setValue)) {
        GM_setValue(key, v);
      }
    } else {
      this.setItem(`${this.prefix}-${key}`, v);
    }
  },
  async getValue(key, def = {}) {
    try {
      if (isGM) {
        let GMType;
        if (isFN(GM.getValue)) {
          GMType = await GM.getValue(key, JSON.stringify(def));
        } else if (isFN(GM_getValue)) {
          GMType = GM_getValue(key, JSON.stringify(def));
        }
        if (!isNull(GMType)) {
          return JSON.parse(GMType);
        }
      }
      return this.has(`${this.prefix}-${key}`)
        ? JSON.parse(this.getItem(`${this.prefix}-${key}`))
        : def;
    } catch (ex) {
      err(ex);
      return def;
    }
  }
};
const Command = {
  cmds: new Set(),
  register(text, command) {
    if (!isGM) {
      return;
    }

    if (isFN(command)) {
      if (this.cmds.has(command)) {
        return;
      }
      this.cmds.add(command);
    }

    if (isFN(GM.registerMenuCommand)) {
      GM.registerMenuCommand(text, command);
    } else if (isFN(GM_registerMenuCommand)) {
      GM_registerMenuCommand(text, command);
    }
  }
};
/**
 * @type { import("../typings/UserJS.d.ts").Network }
 */
const Network = {
  async req(url, method = 'GET', responseType = 'json', data, useFetch = false) {
    if (isEmpty(url)) {
      throw new Error('"url" parameter is empty');
    }
    data = Object.assign({}, data);
    method = this.bscStr(method, false);
    responseType = this.bscStr(responseType);
    const params = {
      method,
      ...data
    };
    if (isGM && !useFetch) {
      if (params.credentials) {
        Object.assign(params, {
          anonymous: false
        });
        if (Object.is(params.credentials, 'omit')) {
          Object.assign(params, {
            anonymous: true
          });
        }
        delete params.credentials;
      }
    } else if (params.onprogress) {
      delete params.onprogress;
    }
    return new Promise((resolve, reject) => {
      if (isGM && !useFetch) {
        Network.xmlRequest({
          url,
          responseType,
          ...params,
          onerror: (r_1) => {
            reject(new Error(`${r_1.status} ${url}`));
          },
          onload: (r_1) => {
            if (r_1.status !== 200) reject(new Error(`${r_1.status} ${url}`));
            if (responseType.match(/basic/)) resolve(r_1);
            resolve(r_1.response);
          }
        });
      } else {
        fetch(url, params)
          .then((response_1) => {
            if (!response_1.ok) reject(response_1);
            const check = (str_2 = 'text') => {
              return isFN(response_1[str_2]) ? response_1[str_2]() : response_1;
            };
            if (responseType.match(/buffer/)) {
              resolve(check('arrayBuffer'));
            } else if (responseType.match(/json/)) {
              resolve(check('json'));
            } else if (responseType.match(/text/)) {
              resolve(check('text'));
            } else if (responseType.match(/blob/)) {
              resolve(check('blob'));
            } else if (responseType.match(/formdata/)) {
              resolve(check('formData'));
            } else if (responseType.match(/clone/)) {
              resolve(check('clone'));
            } else if (responseType.match(/document/)) {
              const respTxt = check('text');
              const domParser = new DOMParser();
              if (respTxt instanceof Promise) {
                respTxt.then((txt) => {
                  const doc = domParser.parseFromString(txt, 'text/html');
                  resolve(doc);
                });
              } else {
                const doc = domParser.parseFromString(respTxt, 'text/html');
                resolve(doc);
              }
            } else {
              resolve(response_1);
            }
          })
          .catch(reject);
      }
    });
  },
  format(bytes, decimals = 2) {
    if (Number.isNaN(bytes)) return `0 ${this.sizes[0]}`;
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${this.sizes[i]}`;
  },
  sizes: ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
  async xmlRequest(details) {
    if (isGM) {
      if (isFN(GM.xmlHttpRequest)) {
        return GM.xmlHttpRequest(details);
      } else if (isFN(GM_xmlhttpRequest)) {
        return GM_xmlhttpRequest(details);
      }
    }
    return await new Promise((resolve, reject) => {
      const { XMLHttpRequest } = safeSelf();
      const req = new XMLHttpRequest();
      let method = 'GET';
      let url = BLANK_PAGE;
      let body;
      for (const [key, value] of Object.entries(details)) {
        if (key === 'onload') {
          req.addEventListener('load', () => {
            if (isFN(value)) {
              value(req);
            }
            resolve(req);
          });
        } else if (key === 'onerror') {
          req.addEventListener('error', (evt) => {
            if (isFN(value)) {
              value(evt);
            }
            reject(evt);
          });
        } else if (key === 'onabort') {
          req.addEventListener('abort', (evt) => {
            if (isFN(value)) {
              value(evt);
            }
            reject(evt);
          });
        } else if (key === 'onprogress') {
          req.addEventListener('progress', value);
        } else if (key === 'responseType') {
          if (value === 'buffer') {
            req.responseType = 'arraybuffer';
          } else {
            req.responseType = value;
          }
        } else if (key === 'method') {
          method = value;
        } else if (key === 'url') {
          url = value;
        } else if (key === 'body') {
          body = value;
        }
      }
      req.open(method, url);

      if (isEmpty(req.responseType)) {
        req.responseType = 'text';
      }

      if (body) {
        req.send(body);
      } else {
        req.send();
      }
    });
  },
  bscStr(str = '', lowerCase = true) {
    const txt = str[lowerCase ? 'toLowerCase' : 'toUpperCase']();
    return txt.replaceAll(/\W/g, '');
  }
};
const Counter = {
  cnt: {
    total: {
      count: 0
    }
  },
  set(engine) {
    if (!this.cnt[engine.name]) {
      const counter = make('count-frame', engine.enabled ? '' : 'hidden', {
        dataset: {
          counter: engine.name
        },
        title: engine.query ? decodeURIComponent(engine.query) : engine.url,
        textContent: '0'
      });
      this.cnt[engine.name] = {
        root: counter,
        count: 0
      };
      return counter;
    }
    return this.cnt[engine.name].root;
  },
  update(count, engine) {
    this.cnt[engine.name].count += count;
    this.cnt.total.count += count;
    this.updateAll();
  },
  updateAll() {
    for (const v of Object.values(this.cnt)) dom.text(v.root, v.count);
  },
  reset() {
    for (const [k, v] of Object.entries(this.cnt)) {
      dom.text(v.root, 0);
      v.count = 0;
      const engine = cfg.engines.find((engine) => k === engine.name);
      if (engine) {
        dom.cl[engine.enabled ? 'remove' : 'add'](v.root, 'hidden');
      }
    }
  }
};

// #region Container
/**
 * @type { import("../typings/UserJS.d.ts").Container }
 */
class Container {
  webpage;
  host;
  domain;
  ready;
  injected;
  shadowRoot;
  supported;
  frame;
  cache;
  userjsCache;
  root;
  unsaved;
  isBlacklisted;
  rebuild;
  opacityMin;
  opacityMax;
  constructor(url) {
    this.remove = this.remove.bind(this);
    this.refresh = this.refresh.bind(this);
    this.showError = this.showError.bind(this);
    this.toArr = this.toArr.bind(this);
    this.toElem = this.toElem.bind(this);

    this.webpage = this.strToURL(url);
    this.host = this.getHost(this.webpage.host);
    this.domain = this.getDomain(this.webpage.host);
    this.ready = false;
    this.injected = false;
    this.shadowRoot = undefined;
    this.supported = isFN(make('main-userjs').attachShadow);
    this.frame = this.supported
      ? make('main-userjs', {
          dataset: {
            insertedBy: $info.script.name,
            role: 'primary-container'
          }
        })
      : make('iframe', 'mujs-iframe', {
          dataset: {
            insertedBy: $info.script.name,
            role: 'primary-iframe'
          },
          loading: 'lazy',
          src: BLANK_PAGE,
          style:
            'position: fixed;bottom: 1rem;right: 1rem;height: 525px;width: 90%;margin: 0px 1rem;z-index: 100000000000000020 !important;',
          onload: (iFrame) => {
            /**
             * @type { HTMLIFrameElement }
             */
            const target = iFrame.target;
            if (!target.contentDocument) {
              return;
            }
            this.shadowRoot = target.contentDocument.documentElement;
            this.ready = true;
            dom.cl.add([this.shadowRoot, target.contentDocument.body], 'mujs-iframe');
          }
        });
    if (this.supported) {
      this.shadowRoot = this.frame.attachShadow({ mode: 'closed' });
      this.ready = true;
    }
    this.cache = memory.maps.container;
    this.userjsCache = memory.maps.userjs;
    this.root = make('mujs-root');
    this.unsaved = false;
    this.isBlacklisted = false;
    this.rebuild = false;
    this.opacityMin = '0.15';
    this.opacityMax = '1';
    this.elementsReady = this.init();

    const Timeout = class {
      constructor() {
        this.ids = [];
      }

      set(delay, reason) {
        const { setTimeout } = safeSelf();
        return new Promise((resolve, reject) => {
          const id = setTimeout(() => {
            Object.is(reason, null) || Object.is(reason, undefined) ? resolve() : reject(reason);
            this.clear(id);
          }, delay);
          this.ids.push(id);
        });
      }

      clear(...ids) {
        const { clearTimeout } = safeSelf();
        this.ids = this.ids.filter((id) => {
          if (ids.includes(id)) {
            clearTimeout(id);
            return false;
          }
          return true;
        });
      }
    };
    this.timeouts = {
      frame: new Timeout(),
      mouse: new Timeout()
    };

    this.injFN = () => {};

    window.addEventListener('beforeunload', this.remove);
  }
  /**
   * @param { function(): * } callback
   * @param { Document } doc
   */
  async inject(callback, doc) {
    if (this.checkBlacklist(this.host)) {
      err(`Blacklisted "${this.host}"`);
      this.remove();
      return;
    }
    if (!this.shadowRoot) {
      return;
    }
    if (doc === null) {
      return;
    }

    while (this.ready === false) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    try {
      doc.documentElement.appendChild(this.frame);
      if (this.injected) {
        if (isFN(this.injFN.build)) {
          this.injFN.build();
        }
        return;
      }
      this.shadowRoot.append(this.root);
      if (isNull(this.loadCSS(main_css, 'primary-stylesheet'))) {
        throw new Error('Failed to initialize script!', { cause: 'loadCSS' });
      }
      this.injected = true;
      this.initFn();
      if (this.elementsReady && isFN(callback)) {
        this.injFN = callback.call(this, this.shadowRoot);
      }
    } catch (ex) {
      err(ex);
      this.remove();
    }
  }
  initFn() {
    this.renderTheme(cfg.theme);

    Counter.cnt.total.root = this.mainbtn;
    for (const engine of cfg.engines) this.countframe.append(Counter.set(engine));
    const { cfgpage, table, supported, frame, refresh, cache, urlBar, host } = this;

    class Tabs {
      /**
       * @param { HTMLElement } root
       */
      constructor(root) {
        /**
         * @type { Set<HTMLElement> }
         */
        this.pool = new Set();
        this.blank = BLANK_PAGE;
        this.protocal = 'mujs:';
        this.protoReg = new RegExp(`${this.protocal}(.+)`, 'i');
        this.el = {
          add: make('mujs-addtab', {
            textContent: '+',
            dataset: {
              command: 'new-tab'
            }
          }),
          head: make('mujs-tabs'),
          root
        };
        this.el.head.append(this.el.add);
        this.el.root.append(this.el.head);
        this.custom = () => {};
      }
      /**
       * @param {string} hostname
       */
      getTab(hostname) {
        return [...this.pool].find(({ dataset }) => hostname === dataset.host);
      }
      getActive() {
        return [...this.pool].find((tab) => tab.classList.contains('active'));
      }
      /**
       * @param {string} hostname
       */
      intFN(hostname) {
        if (!hostname.startsWith(this.protocal)) {
          return;
        }
        if (hostname.match(this.protoReg)[1] === 'settings') {
          dom.cl.remove(cfgpage, 'hidden');
          dom.cl.add(table, 'hidden');
          if (!supported) {
            dom.attr(frame, 'style', 'height: 100%;');
          }
        }
      }
      /**
       * @param {HTMLElement} tab
       * @param {boolean} [build]
       */
      active(tab, build = true) {
        if (!this.pool.has(tab)) this.pool.add(tab);
        dom.cl.add(cfgpage, 'hidden');
        dom.cl.remove(table, 'hidden');
        dom.cl.remove([...this.pool], 'active');
        dom.cl.add(tab, 'active');
        if (!build) {
          return;
        }
        const host = tab.dataset.host ?? this.blank;
        if (host === this.blank) {
          refresh();
        } else if (host.startsWith(this.protocal)) {
          this.intFN(host);
        } else {
          this.custom(host);
        }
      }
      /** @param { HTMLElement } tab */
      close(tab) {
        if (this.pool.has(tab)) this.pool.delete(tab);
        const host = tab.dataset.host;
        if (cfg.clearTabCache && cache.has(host)) cache.delete(host);
        if (tab.classList.contains('active')) refresh();
        const sibling = tab.nextElementSibling ?? tab.previousElementSibling;
        if (sibling) {
          if (sibling.dataset.command !== 'new-tab') {
            this.active(sibling);
          }
        }
        tab.remove();
      }
      /**
       * @param {string} [hostname]
       */
      create(hostname = undefined) {
        if (typeof hostname === 'string') {
          const createdTab = this.getTab(hostname);
          if (this.protoReg.test(hostname) && createdTab) {
            this.active(createdTab);
            return;
          }
        }
        const tab = make('mujs-tab', {
          dataset: {
            command: 'switch-tab'
          },
          style: `order: ${this.el.head.childElementCount};`
        });
        const tabClose = make('mu-js', {
          dataset: {
            command: 'close-tab'
          },
          title: i18n$('close'),
          textContent: 'X'
        });
        const tabHost = make('mujs-host');
        tab.append(tabHost, tabClose);
        this.el.head.append(tab);
        this.active(tab, false);
        if (isNull(hostname)) {
          refresh();
          urlBar.placeholder = i18n$('newTab');
          tab.dataset.host = this.blank;
          tabHost.title = i18n$('newTab');
          tabHost.textContent = i18n$('newTab');
        } else if (hostname.startsWith(this.protocal)) {
          const type = hostname.match(this.protoReg)[1];
          tab.dataset.host = hostname || host;
          tabHost.title = type || tab.dataset.host;
          tabHost.textContent = tabHost.title;
          this.intFN(hostname);
        } else {
          tab.dataset.host = hostname || host;
          tabHost.title = hostname || host;
          tabHost.textContent = tabHost.title;
        }
        return tab;
      }
    }
    this.tab = new Tabs(this.toolbar);
    this.tab.create(host);

    const tabbody = this.tabbody;
    const getCellValue = (tr, idx) => tr.children[idx].dataset.value || tr.children[idx].textContent;
    const comparer = (idx, asc) => (a, b) =>
      ((v1, v2) =>
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2))(
        getCellValue(asc ? a : b, idx),
        getCellValue(asc ? b : a, idx)
      );
    for (const th of this.tabhead.rows[0].cells) {
      if (dom.text(th) === i18n$('install')) continue;
      dom.cl.add(th, 'mujs-pointer');
      ael(th, 'click', () => {
        /** [Stack Overflow Reference](https://stackoverflow.com/questions/14267781/sorting-html-table-with-javascript/53880407#53880407) */
        Array.from(tabbody.querySelectorAll('tr'))
          .sort(comparer(Array.from(th.parentNode.children).indexOf(th), (this.asc = !this.asc)))
          .forEach((tr) => tabbody.appendChild(tr));
      });
    }
  }
  init() {
    try {
      // #region Elements
      this.mainframe = make('mu-js', 'mainframe', {
        style: `opacity: ${this.opacityMin};`
      });
      this.countframe = make('mujs-column');
      this.mainbtn = make('count-frame', 'mainbtn', {
        textContent: '0'
      });
      this.urlBar = make('input', 'mujs-url-bar', {
        autocomplete: 'off',
        spellcheck: false,
        type: 'text',
        placeholder: i18n$('search_placeholder')
      });
      this.rateContainer = make('mujs-column', 'rate-container');
      this.footer = make('mujs-row', 'mujs-footer');
      this.tabbody = make('tbody');
      this.promptElem = make('mujs-row', 'mujs-prompt');
      this.toolbar = make('mujs-toolbar');
      this.table = make('table');
      this.tabhead = make('thead');
      this.header = make('mujs-header');
      this.tbody = make('mujs-body');
      this.cfgpage = make('mujs-row', 'mujs-cfg hidden');
      this.btnframe = make('mujs-column', 'btn-frame');
      this.fsearch = make('mujs-btn', 'hidden');
      this.btnHandles = make('mujs-column', 'btn-handles');
      this.btnHide = make('mujs-btn', 'hide-list', {
        title: i18n$('min'),
        innerHTML: iconSVG.load('minus'),
        dataset: {
          command: 'hide-list'
        }
      });
      this.btnfullscreen = make('mujs-btn', 'fullscreen', {
        title: i18n$('max'),
        innerHTML: iconSVG.load('expand'),
        dataset: {
          command: 'fullscreen'
        }
      });
      this.main = make('mujs-main', 'hidden');
      this.urlContainer = make('mujs-url');
      this.closebtn = make('mujs-btn', 'close', {
        title: i18n$('close'),
        innerHTML: iconSVG.load('close'),
        dataset: {
          command: 'close'
        }
      });
      this.btncfg = make('mujs-btn', 'settings hidden', {
        title: 'Settings',
        innerHTML: iconSVG.load('gear'),
        dataset: {
          command: 'settings'
        }
      });
      this.btnhome = make('mujs-btn', 'github hidden', {
        title: `GitHub (v${
          $info.script.version.includes('.') || $info.script.version.includes('Book')
            ? $info.script.version
            : $info.script.version.slice(0, 5)
        })`,
        innerHTML: iconSVG.load('github'),
        dataset: {
          command: 'open-tab',
          webpage: $info.script.namespace
        }
      });
      this.btnissue = make('mujs-btn', 'issue hidden', {
        innerHTML: iconSVG.load('issue'),
        title: i18n$('issue'),
        dataset: {
          command: 'open-tab',
          webpage: $info.script.bugs ?? 'https://github.com/magicoflolis/Userscript-Plus/issues'
        }
      });
      this.btngreasy = make('mujs-btn', 'greasy hidden', {
        title: 'Greasy Fork',
        innerHTML: iconSVG.load('globe'),
        dataset: {
          command: 'open-tab',
          webpage: 'https://greasyfork.org/scripts/421603'
        }
      });
      this.btnnav = make('mujs-btn', 'nav', {
        title: 'Navigation',
        innerHTML: iconSVG.load('nav'),
        dataset: {
          command: 'navigation'
        }
      });
      const makeTHead = (rows = []) => {
        const tr = make('tr');
        for (const r of rows) {
          const tparent = make('th', r.class ?? '', r);
          tr.append(tparent);
        }
        this.tabhead.append(tr);
        this.table.append(this.tabhead, this.tabbody);
      };
      makeTHead([
        {
          class: 'mujs-header-name',
          textContent: i18n$('name')
        },
        {
          textContent: i18n$('createdby')
        },
        {
          textContent: i18n$('daily_installs')
        },
        {
          textContent: i18n$('updated')
        },
        {
          textContent: i18n$('install')
        }
      ]);
      // #endregion
      if (isMobile) {
        dom.cl.add([this.btnHide, this.btnfullscreen, this.closebtn], 'hidden');
        this.btnframe.append(
          this.btnHide,
          this.btnfullscreen,
          this.closebtn,
          this.btnhome,
          this.btngreasy,
          this.btnissue,
          this.btncfg,
          this.btnnav
        );
      } else {
        this.btnHandles.append(this.btnHide, this.btnfullscreen, this.closebtn);
        this.btnframe.append(this.btnhome, this.btngreasy, this.btnissue, this.btncfg, this.btnnav);
      }
      this.toolbar.append(this.btnHandles);
      this.urlContainer.append(this.urlBar);
      this.header.append(this.urlContainer, this.rateContainer, this.countframe, this.btnframe);
      this.tbody.append(this.table, this.cfgpage);
      this.main.append(this.toolbar, this.header, this.tbody, this.footer, this.promptElem);
      this.mainframe.append(this.mainbtn);
      // this.exBtn.append(this.importCFG, this.importTheme, this.exportCFG, this.exportTheme);
      // this.header.append(this.exBtn);
      this.root.append(this.mainframe, this.main);

      return true;
    } catch (ex) {
      err(ex);
    }
    return false;
  }
  remove() {
    memory.store.clear();
    if (this.frame) {
      this.frame.remove();
    }
  }
  async save() {
    this.unsaved = false;
    await StorageSystem.setValue('Config', cfg);
    info('Saved config:', cfg);
    this.redirect();
    return cfg;
  }
  /**
   * @param { string } css - CSS to inject
   * @param { string } name - Name of stylesheet
   * @return { HTMLStyleElement } Style element
   */
  loadCSS(css, name = 'CSS') {
    try {
      if (typeof name !== 'string') {
        throw new Error('"name" must be a typeof "string"', { cause: 'loadCSS' });
      }
      if (qs(`style[data-role="${name}"]`, this.root)) {
        return qs(`style[data-role="${name}"]`, this.root);
      }
      if (typeof css !== 'string') {
        throw new Error('"css" must be a typeof "string"', { cause: 'loadCSS' });
      }
      if (isBlank(css)) {
        throw new Error(`"${name}" contains empty CSS string`, { cause: 'loadCSS' });
      }
      const parent = isEmpty(this.root.shadowRoot) ? this.root : this.root.shadowRoot;
      if (isGM) {
        let sty;
        if (isFN(GM.addElement)) {
          sty = GM.addElement(parent, 'style', {
            textContent: css
          });
        } else if (isFN(GM_addElement)) {
          sty = GM_addElement(parent, 'style', {
            textContent: css
          });
        }
        if (isElem(sty)) {
          sty.dataset.insertedBy = $info.script.name;
          sty.dataset.role = name;
          return sty;
        }
      }
      const sty = make('style', {
        textContent: css,
        dataset: {
          insertedBy: $info.script.name,
          role: name
        }
      });
      parent.appendChild(sty);
      return sty;
    } catch (ex) {
      err(ex);
    }
  }
  checkBlacklist(str) {
    str = str || this.host;
    let blacklisted = false;
    if (/accounts*\.google\./.test(this.webpage.host)) {
      blacklisted = true;
    }
    for (const b of normalizeTarget(cfg.blacklist)) {
      if (typeof b === 'string') {
        if (b.startsWith('userjs-')) {
          const r = /userjs-(\w+)/.exec(b)[1];
          const biList = builtinList[r];
          if (isRegExp(biList)) {
            if (!biList.test(str)) continue;
            blacklisted = true;
          } else if (isObj(biList) && biList.host === this.host) {
            blacklisted = true;
          }
        }
      } else if (isObj(b)) {
        if (!b.enabled) {
          continue;
        }
        if (b.regex === true) {
          const reg = new RegExp(b.url, b.flags);
          if (!reg.test(str)) continue;
          blacklisted = true;
        }
        if (Array.isArray(b.url)) {
          for (const c of b.url) {
            if (!str.includes(c)) continue;
            blacklisted = true;
          }
        }
        if (!str.includes(b.url)) continue;
        blacklisted = true;
      }
    }
    this.isBlacklisted = blacklisted;
    return this.isBlacklisted;
  }
  getInfo(url) {
    const webpage = this.strToURL(url || this.webpage);
    const host = this.getHost(webpage.host);
    const domain = this.getDomain(webpage.host);
    return {
      domain,
      host,
      webpage
    };
  }
  /**
   * @template { string } S
   * @param { S } str
   */
  getHost(str = '') {
    return str.split('.').splice(-2).join('.');
  }
  /**
   * @template { string } S
   * @param { S } str
   */
  getDomain(str = '') {
    return str.split('.').at(-2) ?? BLANK_PAGE;
  }
  renderTheme(theme) {
    theme = theme || cfg.theme;
    if (theme === DEFAULT_CONFIG.theme) {
      return;
    }
    const sty = this.root.style;
    for (const [k, v] of Object.entries(theme)) {
      const str = `--mujs-${k}`;
      const prop = sty.getPropertyValue(str);
      if (isEmpty(v)) {
        theme[k] = prop;
      }
      if (prop === v) {
        continue;
      }
      sty.removeProperty(str);
      sty.setProperty(str, v);
    }
  }
  makePrompt(txt, dataset = {}, usePrompt = true) {
    if (qs('.prompt', this.promptElem)) {
      for (const elem of qsA('.prompt', this.promptElem)) {
        if (elem.dataset.prompt) {
          elem.remove();
        }
      }
    }
    const el = make('mu-js', 'prompt', {
      dataset: {
        prompt: txt
      }
    });
    const elHead = make('mu-js', 'prompt-head', {
      innerHTML: `${iconSVG.load('refresh')} ${txt}`
    });
    el.append(elHead);
    if (usePrompt) {
      const elPrompt = make('mu-js', 'prompt-body', { dataset });
      const elYes = make('mujs-btn', 'prompt-confirm', {
        innerHTML: 'Confirm',
        dataset: {
          command: 'prompt-confirm'
        }
      });
      const elNo = make('mujs-btn', 'prompt-deny', {
        innerHTML: 'Deny',
        dataset: {
          command: 'prompt-deny'
        }
      });
      elPrompt.append(elYes, elNo);
      el.append(elPrompt);
    }
    this.promptElem.append(el);
  }
  /**
   * @template {string | Error} E
   * @param {...E} ex
   */
  showError(...ex) {
    err(...ex);
    const error = make('mu-js', 'error');
    let str = '';
    for (const e of ex) {
      str += `${typeof e === 'string' ? e : `${e.cause ? `[${e.cause}] ` : ''}${e.message}${e.stack ? ` ${e.stack}` : ''}`}\n`;
      if (isObj(e)) {
        if (e.notify) {
          dom.cl.add(this.mainframe, 'error');
        }
      }
    }
    const { createTextNode } = safeSelf();
    error.appendChild(createTextNode(str));
    this.footer.append(error);
  }
  toArr() {
    return Array.from(this.userjsCache.values()).filter(({ _mujs }) => {
      return isElem(_mujs.root) && _mujs.info.engine.enabled;
    });
  }
  toElem() {
    return this.toArr().map(({ _mujs }) => {
      return _mujs.root;
    });
  }
  refresh() {
    this.urlBar.placeholder = i18n$('newTab');
    Counter.reset();
    dom.cl.remove(this.toElem(), 'hidden');
    dom.cl.remove(qsA('mujs-section[data-name]', this.cfgpage), 'hidden');
    dom.prop([this.tabbody, this.rateContainer, this.footer], 'innerHTML', '');
  }
  /**
   * @template {string | URL} S
   * @param {S} str
   * @returns {URL}
   */
  strToURL(str) {
    const WIN_LOCATION = window.location ?? BLANK_PAGE;
    try {
      str = str ?? WIN_LOCATION;
      return objToStr(str).includes('URL') ? str : new URL(str);
    } catch (ex) {
      ex.cause = 'strToURL';
      this.showError(ex);
    }
    return WIN_LOCATION;
  }
  /**
   * Redirects sleazyfork userscripts from greasyfork.org to sleazyfork.org
   *
   * Taken from: https://greasyfork.org/scripts/23840
   */
  redirect() {
    const locObj = window.top.location;
    const { hostname } = locObj;
    const gfSite = /greasyfork\.org/.test(hostname);
    if (!gfSite && cfg.sleazyredirect) {
      return;
    }
    const otherSite = gfSite ? 'sleazyfork' : 'greasyfork';
    if (!qs('span.sign-in-link')) {
      return;
    }
    if (!/scripts\/\d+/.test(locObj.href)) {
      return;
    }
    if (
      !qs('#script-info') &&
      (otherSite == 'greasyfork' || qs('div.width-constraint>section>p>a'))
    ) {
      const str = locObj.href.replace(
        /\/\/([^.]+\.)?(greasyfork|sleazyfork)\.org/,
        '//$1' + otherSite + '.org'
      );
      info(`Redirecting to "${str}"`);
      if (isFN(locObj.assign)) {
        locObj.assign(str);
      } else {
        locObj.href = str;
      }
    }
  }
}
const container = new Container();
// #endregion
// #region Primary Function
function primaryFN() {
  const respHandles = {
    build: async () => {}
  };
  try {
    const { scheduler } = safeSelf();
    const {
      mainframe,
      urlBar,
      rateContainer,
      footer,
      tabbody,
      cfgpage,
      fsearch,
      btnfullscreen,
      main,
      tab,
      showError
    } = container;
    const frameTimeout = container.timeouts.frame;
    const cfgMap = memory.maps.cfg;
    const rebuildCfg = () => {
      for (const engine of cfg.engines) {
        if (cfgMap.has(engine.name)) {
          const inp = cfgMap.get(engine.name);
          inp.checked = engine.enabled;
          if (engine.name === 'github') {
            const txt = cfgMap.get('github-token');
            dom.prop(txt, 'value', engine.token);
          }
        }
      }
      for (const [k, v] of Object.entries(cfg)) {
        if (typeof v === 'boolean') {
          if (cfgMap.has(k)) {
            const inp = cfgMap.get(k);
            if (inp.type === 'checkbox') {
              inp.checked = v;
            } else {
              dom.prop(inp, 'value', v);
            }
          }
        }
      }
      // dom.prop(cfgMap.get('blacklist'), 'value', JSON.stringify(cfg.blacklist, null, ' '));
      for (const [k, v] of Object.entries(cfg.theme)) {
        dom.prop(cfgMap.get(k), 'value', v);
      }
      container.renderTheme(cfg.theme);
    };
    const doInstallProcess = async (installLink) => {
      const locObj = window.top.location;
      if (isFN(locObj.assign)) {
        locObj.assign(installLink.href);
      } else {
        locObj.href = installLink.href;
      }
      installLink.remove();
      await init();
    };
    const applyTo = (ujs, name, elem, root) => {
      const n = ujs._mujs.code[name] ?? ujs._mujs.code.data_meta[name];
      if (isEmpty(n)) {
        const el = make('mujs-a', {
          textContent: i18n$('listing_none')
        });
        elem.append(el);
        return;
      }
      dom.prop(elem, 'innerHTML', '');
      dom.cl.remove(root, 'hidden');
      if (isObj(n)) {
        if (name === 'resource') {
          for (const [k, v] of Object.entries(n)) {
            const el = make('mujs-a', {
              textContent: k ?? 'ERROR'
            });
            if (v.startsWith('http')) {
              el.dataset.command = 'open-tab';
              el.dataset.webpage = v;
            }
            elem.append(el);
          }
        } else {
          const el = make('mujs-a', {
            textContent: n.text
          });
          if (n.domain) {
            el.dataset.command = 'open-tab';
            el.dataset.webpage = `https://${n.text}`;
          }
          elem.append(el);
        }
      } else if (typeof n === 'string') {
        const el = make('mujs-a', {
          textContent: n
        });
        elem.append(el);
      } else {
        for (const c of n) {
          if (typeof c === 'string' && c.startsWith('http')) {
            const el = make('mujs-a', {
              textContent: c,
              dataset: {
                command: 'open-tab',
                webpage: c
              }
            });
            elem.append(el);
          } else if (isObj(c)) {
            const el = make('mujs-a', {
              textContent: c.text
            });
            if (c.domain) {
              el.dataset.command = 'open-tab';
              el.dataset.webpage = `https://${c.text}`;
            }
            elem.append(el);
          } else {
            const el = make('mujs-a', {
              textContent: c
            });
            elem.append(el);
          }
        }
      }
    };
    // #region Main event handlers
    ael(main, isMobile ? 'touchend' : 'click', async (evt) => {
      try {
        /** @type { HTMLElement } */
        const target = evt.target.closest('[data-command]');
        if (!target) {
          return;
        }
        const prmpt = /prompt-/.test(target.dataset.command);
        let dataset = target.dataset;
        let cmd = dataset.command;
        let prmptChoice = false;
        if (prmpt) {
          dataset = target.parentElement.dataset;
          cmd = dataset.command;
          prmptChoice = /confirm/.test(target.dataset.command);
          target.parentElement.parentElement.remove();
        }
        if (cmd === 'install-script' && dataset.userjs) {
          let installCode = dataset.userjs;
          if (!prmpt && dataset.userjs.endsWith('.user.css')) {
            container.makePrompt(i18n$('prmpt_css'), dataset);
            return;
          } else if (prmpt !== prmptChoice) {
            installCode = dataset.userjs.replace(/\.user\.css$/, '.user.js');
          }
          const dlBtn = make('a', {
            onclick(evt) {
              evt.preventDefault();
              doInstallProcess(evt.target);
            }
          });
          dlBtn.href = installCode;
          dlBtn.click();
        } else if (cmd === 'open-tab' && dataset.webpage) {
          if (isGM) {
            if (isFN(GM.openInTab)) {
              return GM.openInTab(dataset.webpage);
            } else if (isFN(GM_openInTab)) {
              return GM_openInTab(dataset.webpage, {
                active: true,
                insert: true
              });
            }
          }
          return window.open(dataset.webpage, '_blank');
        } else if (cmd === 'navigation') {
          for (const e of qsA('mujs-btn', target.parentElement)) {
            if (dom.cl.has(e, 'nav')) continue;
            if (dom.cl.has(e, 'hidden')) {
              dom.cl.remove(e, 'hidden');
            } else {
              dom.cl.add(e, 'hidden');
            }
          }
        } else if (cmd === 'list-description') {
          const arr = [];
          const ignoreTags = new Set(['TD', 'MUJS-A', 'MU-JS']);
          for (const node of target.parentElement.childNodes) {
            if (ignoreTags.has(node.tagName)) {
              continue;
            }
            if (node.tagName === 'TEXTAREA' && isEmpty(node.value)) {
              continue;
            }
            arr.push(node);
          }
          if (target.nextElementSibling) {
            arr.push(target.nextElementSibling);
            if (target.nextElementSibling.nextElementSibling) {
              arr.push(target.nextElementSibling.nextElementSibling);
            }
          }
          if (dom.cl.has(arr[0], 'hidden')) {
            dom.cl.remove(arr, 'hidden');
          } else {
            dom.cl.add(arr, 'hidden');
          }
        } else if (cmd === 'close') {
          container.remove();
        } else if (cmd === 'show-filter') {
          dom.cl.toggle(fsearch, 'hidden');
        } else if (cmd === 'fullscreen') {
          if (dom.cl.has(btnfullscreen, 'expanded')) {
            dom.cl.remove([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('expand'));
          } else {
            dom.cl.add([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('collapse'));
          }
        } else if (cmd === 'hide-list') {
          dom.cl.add(main, 'hidden');
          dom.cl.remove(mainframe, 'hidden');
          timeoutFrame();
        } else if (cmd === 'save') {
          container.rebuild = true;
          dom.prop(rateContainer, 'innerHTML', '');
          if (!dom.prop(target, 'disabled')) {
            const config = await container.save();
            if (container.rebuild) {
              container.cache.clear();
              if (config.autofetch) {
                respHandles.build();
              }
            }
            container.unsaved = false;
            container.rebuild = false;
          }
        } else if (cmd === 'reset') {
          cfg = DEFAULT_CONFIG;
          dom.cl.remove(mainframe, 'error');
          if (qs('.error', footer)) {
            for (const elem of qsA('.error', footer)) {
              elem.remove();
            }
          }
          container.unsaved = true;
          container.rebuild = true;
          rebuildCfg();
        } else if (cmd === 'settings') {
          if (container.unsaved) {
            showError('Unsaved changes');
          }
          tab.create('mujs:settings');
          container.rebuild = false;
        } else if (cmd === 'new-tab') {
          tab.create();
        } else if (cmd === 'switch-tab') {
          tab.active(target);
        } else if (cmd === 'close-tab' && target.parentElement) {
          tab.close(target.parentElement);
        } else if (cmd === 'download-userjs') {
          if (!container.userjsCache.has(+dataset.userjs)) {
            return;
          }
          const dataUserJS = container.userjsCache.get(+dataset.userjs);
          let installCode = dataUserJS.code_url;
          if (!prmpt && dataUserJS.code_url.endsWith('.user.css')) {
            container.makePrompt('Download as UserStyle?', dataset);
            return;
          } else if (prmpt !== prmptChoice) {
            installCode = dataUserJS.code_url.replace(/\.user\.css$/, '.user.js');
          }
          const r = await dataUserJS._mujs.code.request(false, installCode);
          const txt = r.data;
          if (typeof txt !== 'string') {
            return;
          }
          const userjsName = dataset.userjsName ?? dataset.userjs;
          const userjsExt = prmpt !== prmptChoice ? '.user.js' : '.user.css';
          const makeUserJS = new Blob([txt], { type: 'text/plain' });
          const dlBtn = make('a', 'mujs_Downloader');
          dlBtn.href = URL.createObjectURL(makeUserJS);
          dlBtn.download = `${userjsName}${userjsExt}`;
          dlBtn.click();
          URL.revokeObjectURL(dlBtn.href);
          dlBtn.remove();
        } else if (cmd === 'load-userjs' || cmd === 'load-header') {
          if (!container.userjsCache.has(+dataset.userjs)) {
            return;
          }
          const codeArea = qs('textarea', target.parentElement.parentElement);
          if (!isEmpty(codeArea.value) && cmd === codeArea.dataset.load) {
            dom.cl.toggle(codeArea, 'hidden');
            return;
          }
          codeArea.dataset.load = cmd;
          const dataUserJS = container.userjsCache.get(+dataset.userjs);
          const code_obj = await dataUserJS._mujs.code.request();
          if (typeof code_obj.data_code_block !== 'string') {
            codeArea.value = 'An error occured';
            return;
          }
          codeArea.value =
            cmd === 'load-userjs' ? code_obj.data_code_block : code_obj.data_meta_block;
          dom.cl.remove(codeArea, 'hidden');
          for (const e of qsA(
            'mujs-column[data-el="matches"]',
            target.parentElement.parentElement
          )) {
            applyTo(dataUserJS, e.dataset.type, qs('.mujs-grants', e), e);
          }
        } else if (cmd === 'load-page') {
          if (!container.userjsCache.has(+dataset.userjs)) {
            return;
          }
          let pageArea = qs('mujs-page', target.parentElement.parentElement);
          if (!pageArea) {
            pageArea = make('mujs-page');
            target.parentElement.parentElement.append(pageArea);
            const dataUserJS = container.userjsCache.get(+dataset.userjs);
            const engine = dataUserJS._mujs.info.engine;
            let pageURL;
            if (engine.name.includes('fork')) {
              const { navigator } = safeSelf();
              const current = navigator.language.split('-')[0] ?? 'en';
              pageURL = dataUserJS.url.replace(
                /\/scripts/,
                `/${/^(zh|fr|es)/.test(current) ? navigator.language : current}/scripts`
              );
            } else if (engine.name.includes('github')) {
              const page_url = await Network.req(dataUserJS.page_url, 'GET', 'json', {
                headers: {
                  Accept: 'application/vnd.github+json',
                  Authorization: `Bearer ${engine.token}`,
                  'X-GitHub-Api-Version': '2022-11-28'
                }
              }).catch(() => {
                return {};
              });
              if (!page_url.download_url) {
                return;
              }
              const page = await Network.req(page_url.download_url, 'GET', 'text');
              if (container.supported) {
                const shadow = pageArea.attachShadow({ mode: 'closed' });
                const div = make('div', {
                  innerHTML: page
                });
                shadow.append(div);
              }
              return;
            } else {
              pageURL = dataUserJS.url;
            }
            if (!pageURL) {
              return;
            }
            const page = await Network.req(pageURL, 'GET', 'document');
            const getContent = () => {
              let content = 'An error occured';
              const h = new URL(dataUserJS.url);
              const root = qs('.user-content', page.documentElement);
              for (const e of qsA('[href]', root)) {
                e.target = '_blank';
                e.style = 'pointer-events: auto;';
                if (e.href.startsWith('/')) {
                  e.href = `${h.origin}${e.href}`;
                }
              }
              for (const e of qsA('img[src]', root)) {
                e.style =
                  'max-width: 25em; max-height: 25em; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;';
              }
              if (root) {
                content = root.innerHTML;
              } else {
                content = 'No additional info available';
              }
              return content;
            };
            if (container.supported) {
              const shadow = pageArea.attachShadow({ mode: 'closed' });
              const div = make('div', {
                style: 'pointer-events: none;',
                innerHTML: getContent()
              });
              shadow.append(div);
            }
            return;
          }
          if (!dom.cl.has(pageArea, 'hidden')) {
            dom.cl.add(pageArea, 'hidden');
            return;
          }
          dom.cl.remove(pageArea, 'hidden');
        } else if (/export-/.test(cmd)) {
          const str = JSON.stringify(cmd === 'export-cfg' ? cfg : cfg.theme, null, ' ');
          const bytes = new TextEncoder().encode(str);
          const blob = new Blob([bytes], { type: 'application/json;charset=utf-8' });
          const dlBtn = make('a', 'mujs-exporter', {
            href: URL.createObjectURL(blob),
            download: `Magic_Userscript_${cmd === 'export-cfg' ? 'config' : 'theme'}.json`
          });
          dlBtn.click();
          URL.revokeObjectURL(dlBtn.href);
        } else if (/import-/.test(cmd)) {
          if (qs('input', target.parentElement)) {
            qs('input', target.parentElement).click();
            return;
          }
          const inpJSON = make('input', 'hidden', {
            type: 'file',
            accept: '.json',
            onchange(evt) {
              try {
                [...evt.target.files].forEach((file) => {
                  const reader = new FileReader();
                  reader.readAsText(file);
                  reader.onload = () => {
                    const result = JSON.parse(reader.result);
                    if (result.blacklist) {
                      log(`Imported config: { ${file.name} }`, result);
                      cfg = result;
                      container.unsaved = true;
                      container.rebuild = true;
                      rebuildCfg();
                      container.save().then((config) => {
                        container.cache.clear();
                        if (config.autofetch) {
                          respHandles.build();
                        }
                        container.unsaved = false;
                        container.rebuild = false;
                      });
                    } else {
                      log(`Imported theme: { ${file.name} }`, result);
                      cfg.theme = result;
                      container.renderTheme(cfg.theme);
                    }
                    inpJSON.remove();
                  };
                  reader.onerror = () => {
                    showError(reader.error);
                    inpJSON.remove();
                  };
                });
              } catch (ex) {
                showError(ex);
                inpJSON.remove();
              }
            }
          });
          target.parentElement.append(inpJSON);
          inpJSON.click();
        }
      } catch (ex) {
        showError(ex);
      }
    });
    ael(main, 'auxclick', (evt) => {
      if (evt.button !== 1) {
        return;
      }
      /** @type { HTMLElement } */
      const target = evt.target.closest('[data-command]');
      if (!target) {
        return;
      }
      const dataset = target.dataset;
      const cmd = dataset.command;
      if (cmd === 'switch-tab' || cmd === 'close-tab') {
        tab.close(target);
      } else if (cmd === 'new-tab') {
        tab.create();
      }
    });
    if (!isMobile) {
      const fade = async (target, type) => {
        if (type === 'mouseenter') {
          frameTimeout.clear(...frameTimeout.ids);
          container.timeouts.mouse.clear(...container.timeouts.mouse.ids);
          target.style.opacity = container.opacityMax;
        } else if (type === 'mouseleave') {
          await container.timeouts.mouse.set(cfg.time);
          target.style.opacity = container.opacityMin;
        }
      };
      for (const e of ['mouseenter', 'mouseleave']) {
        ael(main, e, (evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          fade(evt.target, evt.type);
        });
      }
    }
    ael(main, 'updateditem', (evt) => {
      /**
       * @type {import("../typings/types.d.ts").GSForkQuery}
       */
      const ujs = evt.detail;
      if (!ujs._mujs) return;
      for (const elem of qsA('[data-name]', ujs._mujs.root)) {
        const name = elem.dataset.name;
        if (name === 'code') {
          if (ujs._mujs.code.data_code_block) {
            if (cfg.preview.code && !cfg.preview.metadata) {
              elem.value = ujs._mujs.code.data_code_block;
            } else if (cfg.preview.metadata && !cfg.preview.code) {
              elem.value = ujs._mujs.code.data_meta_block;
            } else {
              elem.value = `${ujs._mujs.code.META_START_COMMENT}${ujs._mujs.code.data_meta_block}${ujs._mujs.code.META_END_COMMENT}${ujs._mujs.code.data_code_block}`;
            }
          }
          continue;
        }
        if (!ujs[name]) continue;
        if (name === 'license') {
          dom.attr(elem, 'title', ujs.license ?? i18n$('no_license'));
          dom.text(elem, `${i18n$('license')}: ${ujs.license ?? i18n$('no_license')}`);
        } else if (name === 'code_updated_at') {
          dom.text(elem, language.toDate(ujs.code_updated_at));
          elem.dataset.value = new Date(ujs.code_updated_at).toISOString();
        } else if (name === 'created_date') {
          dom.text(elem, `${i18n$('created_date')}: ${language.toDate(ujs.created_at)}`);
          elem.dataset.value = new Date(ujs.created_at).toISOString();
        } else if (name === 'total_installs') {
          dom.text(elem, `${i18n$('total_installs')}: ${language.toNumber(ujs.total_installs)}`);
        } else {
          dom.text(elem, ujs[name]);
        }
      }
      if (ujs._mujs.code.data_code_block) {
        for (const e of qsA('mujs-column[data-el="matches"]', ujs._mujs.root)) {
          applyTo(ujs, e.dataset.type, qs('.mujs-grants', e), e);
        }
      }
      if (container.userjsCache.has(ujs.id)) container.userjsCache.set(ujs.id, ujs);
    });
    // #endregion
    const TLD_EXPANSION = ['com', 'net', 'org', 'de', 'co.uk'];
    const APPLIES_TO_ALL_PATTERNS = [
      'http://*',
      'https://*',
      'http://*/*',
      'https://*/*',
      'http*://*',
      'http*://*/*',
      '*',
      '*://*',
      '*://*/*',
      'http*'
    ];
    class ParseUserJS {
      /**
       * @type { string }
       */
      code;
      /**
       * @type { string }
       */
      data_meta_block;
      /**
       * @type { string }
       */
      data_code_block;
      /**
       * @type { { [meta: string]: string | string[] | { [resource: string]: string } } }
       */
      data_meta;
      /**
       * @type { {text: string;domain: boolean;tld_extra: boolean}[] }
       */
      data_names;
      constructor(code, isUserCSS) {
        this.code = code;
        this.META_START_COMMENT = isUserCSS ? '/* ==UserStyle==' : '// ==UserScript==';
        this.META_END_COMMENT = isUserCSS ? '==/UserStyle== */' : '// ==/UserScript==';
                    `${engine.url}"// ==UserScript=="+${host}+ "// ==/UserScript=="+in:file+language:js&per_page=30`
                  ),
                  'GET',
                  'json',
                  {
                    headers: {
                      Accept: 'application/vnd.github+json',
                      Authorization: `Bearer ${engine.token}`,
                      'X-GitHub-Api-Version': '2022-11-28'
                    }
                  }
                )
                  .then(gitFN)
                  .then(() => {
                    Network.req('https://api.github.com/rate_limit', 'GET', 'json', {
                      headers: {
                        Accept: 'application/vnd.github+json',
                        Authorization: `Bearer ${engine.token}`,
                        'X-GitHub-Api-Version': '2022-11-28'
                      }
                    })
                      .then((data) => {
                        for (const [key, value] of Object.entries(data.resources.code_search)) {
                          const txt = make('mujs-row', 'rate-info', {
                            textContent: `${key.toUpperCase()}: ${value}`
                          });
                          rateContainer.append(txt);
                        }
                      })
                      .catch(respError);
                  });
              } else if (/openuserjs/gi.test(engine.name)) {
                netFN = Network.req(toQuery(`${engine.url}${host}`), 'GET', 'document').then(
                  openuserjs
                );
              } else {
                netFN = Network.req(
                  toQuery(`${engine.url}/scripts/by-site/${host}.json?language=all`)
                ).then(forkFN);
              }
              if (netFN) {
                fetchRecords.push(netFN.catch(respError));
              }
            }
          } else {
            for (const ujs of hostCache) tabbody.append(ujs._mujs.root);
          }

          urlBar.placeholder = i18n$('search_placeholder');
          urlBar.value = '';

          if (isBlank(fetchRecords)) {
            this.sortRecords();
            return;
          }
          Promise.allSettled(fetchRecords).then(this.sortRecords).catch(showError);
        } catch (ex) {
          showError(ex);
        }
      }

      sortRecords() {
        const arr = this.toArr();
        for (const ujs of arr.flat().sort((a, b) => {
          const sortType = cfg.autoSort ?? 'daily_installs';
          return b[sortType] - a[sortType];
        })) {
          if (isElem(ujs._mujs.root)) tabbody.append(ujs._mujs.root);
        }
        for (const [name, value] of Object.entries(this.groupBy(arr)))
          Counter.update(value.length, { name });
      }

      toArr() {
        const h = this.intHost;
        return container.toArr().filter(({ _mujs }) => _mujs.info.host === h);
      }

      groupBy(arr) {
        const callback = ({ _mujs }) => _mujs.info.engine.name;
        if (isFN(Object.groupBy)) {
          return Object.groupBy(arr, callback);
        }
        /** [Object.groupBy polyfill](https://gist.github.com/gtrabanco/7c97bd41aa74af974fa935bfb5044b6e) */
        return arr.reduce((acc = {}, ...args) => {
          const key = callback(...args);
          acc[key] ??= [];
          acc[key].push(args[0]);
          return acc;
        }, {});
      }
      // #endregion
    }
    const MUList = new List();
    // #endregion
    // #region Make Config
    const makecfg = () => {
      const cbtn = make('mu-js', 'mujs-sty-flex');
      const savebtn = make('mujs-btn', 'save', {
        textContent: i18n$('save'),
        dataset: {
          command: 'save'
        },
        disabled: false
      });
      const resetbtn = make('mujs-btn', 'reset', {
        textContent: i18n$('reset'),
        dataset: {
          command: 'reset'
        }
      });
      cbtn.append(resetbtn, savebtn);

      const makesection = (name, tag) => {
        tag = tag ?? i18n$('no_license');
        name = name ?? i18n$('no_license');
        const sec = make('mujs-section', {
          dataset: {
            name: tag
          }
        });
        const lb = make('label', {
          dataset: {
            command: tag
          }
        });
        const divDesc = make('mu-js', {
          textContent: name
        });
        ael(sec, 'click', (evt) => {
          /** @type { HTMLElement } */
          const target = evt.target.closest('[data-command]');
          if (!target) {
            return;
          }
          const cmd = target.dataset.command;
          if (cmd === tag) {
            const a = qsA(`[data-${tag}]`, sec);
            if (dom.cl.has(a, 'hidden')) {
              dom.cl.remove(a, 'hidden');
            } else {
              dom.cl.add(a, 'hidden');
            }
          }
        });

        lb.append(divDesc);
        sec.append(lb);
        cfgpage.append(sec);
        return sec;
      };
      const sections = {
        general: makesection('General', 'general'),
        load: makesection('Automation', 'load'),
        list: makesection('List', 'list'),
        filters: makesection('List Filters', 'filters'),
        blacklist: makesection('Blacklist (WIP)', 'blacklist'),
        engine: makesection('Search Engines', 'engine'),
        theme: makesection('Theme Colors', 'theme'),
        exp: makesection('Import / Export', 'exp')
      };
      const makeRow = (text, value, type = 'checkbox', tag = 'general', attrs = {}) => {
        const lb = make('label', 'sub-section hidden', {
          textContent: text,
          dataset: {
            [tag]: text
          }
        });
        cfgMap.set(text, value);
        if (type === 'select') {
          const inp = make('select', {
            dataset: {
              [tag]: text
            },
            ...attrs
          });
          for (const selV of Object.keys(template)) {
            if (selV === 'deleted' || selV === 'users') continue;
            const o = make('option', {
              value: selV,
              textContent: selV
            });
            inp.append(o);
          }
          inp.value = cfg[value];
          lb.append(inp);
          if (sections[tag]) {
            sections[tag].append(lb);
          }
          return lb;
        }
        const inp = make('input', {
          type,
          dataset: {
            [tag]: text
          },
          ...attrs
        });

        if (tag === 'engine') {
          inp.dataset.name = value;
        }

        if (sections[tag]) {
          sections[tag].append(lb);
        }

        if (type === 'checkbox') {
          const inlab = make('mu-js', 'mujs-inlab');
          const la = make('label', {
            onclick() {
              inp.dispatchEvent(new MouseEvent('click'));
            }
          });
          inlab.append(inp, la);
          lb.append(inlab);

          const nm = /^(\w+)-(.+)/.exec(value);
          if (nm) {
            if (nm[1] === 'filters') {
              inp.checked = cfg[nm[1]][nm[2]].enabled;
            } else {
              inp.checked = cfg[nm[1]][nm[2]];
            }
          } else {
            inp.checked = cfg[value];
          }
          ael(inp, 'change', (evt) => {
            container.unsaved = true;
            if (/filterlang/i.test(value)) {
              container.rebuild = true;
            }
            if (nm) {
              if (nm[1] === 'filters') {
                cfg[nm[1]][nm[2]].enabled = evt.target.checked;
              } else {
                cfg[nm[1]][nm[2]] = evt.target.checked;
              }
            } else {
              cfg[value] = evt.target.checked;
            }
          });

          if (tag === 'engine') {
            const engine = cfg.engines.find((engine) => engine.name === value);
            if (engine) {
              inp.checked = engine.enabled;
              inp.dataset.engine = engine.name;
              ael(inp, 'change', (evt) => {
                container.unsaved = true;
                container.rebuild = true;
                engine.enabled = evt.target.checked;
              });

              if (engine.query) {
                const d = DEFAULT_CONFIG.engines.find((e) => e.name === engine.name);
                const urlInp = make('input', {
                  type: 'text',
                  defaultValue: '',
                  value: decodeURIComponent(engine.query) ?? '',
                  placeholder: decodeURIComponent(d.query) ?? '',
                  dataset: {
                    name: nm,
                    engine: engine.name
                  },
                  onchange(evt) {
                    container.unsaved = true;
                    container.rebuild = true;
                    try {
                      engine.query = encodeURIComponent(new URL(evt.target.value).toString());
                    } catch (ex) {
                      err(ex);
                    }
                  }
                });
                lb.append(urlInp);
              }
              if (engine.name === 'github') {
                const ghToken = make('input', {
                  type: 'text',
                  defaultValue: '',
                  value: engine.token ?? '',
                  placeholder: 'Paste Access Token',
                  dataset: {
                    engine: 'github-token'
                  },
                  onchange(evt) {
                    container.unsaved = true;
                    container.rebuild = true;
                    engine.token = evt.target.value;
                  }
                });
                lb.append(ghToken);
                cfgMap.set('github-token', ghToken);
              }
            }
          }
        } else {
          if (type === 'text') {
            inp.defaultValue = '';
            inp.value = value ?? '';
            inp.placeholder = value ?? '';
          }

          lb.append(inp);
        }

        return lb;
      };
      if (isGM) {
        makeRow(i18n$('userjs_sync'), 'cache');
        makeRow(i18n$('userjs_autoinject'), 'autoinject', 'checkbox', 'load');
      }
      makeRow(i18n$('redirect'), 'sleazyredirect');
      makeRow(`${i18n$('dtime')} (ms)`, 'time', 'number', 'general', {
        defaultValue: 10000,
        value: cfg.time,
        min: 0,
        step: 500,
        onbeforeinput(evt) {
          if (evt.target.validity.badInput) {
            dom.cl.add(evt.target, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', true);
          } else {
            dom.cl.remove(evt.target, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', false);
          }
        },
        oninput(evt) {
          container.unsaved = true;
          const t = evt.target;
          if (t.validity.badInput || (t.validity.rangeUnderflow && t.value !== '-1')) {
            dom.cl.add(t, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', true);
          } else {
            dom.cl.remove(t, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', false);
            cfg.time = isEmpty(t.value) ? cfg.time : parseFloat(t.value);
          }
        }
      });

      makeRow(i18n$('auto_fetch'), 'autofetch', 'checkbox', 'load');
      makeRow(i18n$('userjs_fullscreen'), 'autoexpand', 'checkbox', 'load', {
        onchange(e) {
          if (e.target.checked) {
            dom.cl.add([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('collapse'));
          } else {
            dom.cl.remove([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('expand'));
          }
        }
      });
      makeRow('Clear on Tab close', 'clearTabCache', 'checkbox', 'load');

      makeRow('Default Sort', 'autoSort', 'select', 'list');
      makeRow(i18n$('filter'), 'filterlang', 'checkbox', 'list');
      makeRow(i18n$('preview_code'), 'preview-code', 'checkbox', 'list');
      makeRow('Preview Metadata', 'preview-metadata', 'checkbox', 'list');
      makeRow('Recommend author', 'recommend-author', 'checkbox', 'list');
      makeRow('Recommend scripts', 'recommend-others', 'checkbox', 'list');

      for (const [k, v] of Object.entries(cfg.filters)) {
        makeRow(v.name, `filters-${k}`, 'checkbox', 'filters');
      }

      makeRow('Greasy Fork', 'greasyfork', 'checkbox', 'engine');
      makeRow('Sleazy Fork', 'sleazyfork', 'checkbox', 'engine');
      makeRow('Open UserJS', 'openuserjs', 'checkbox', 'engine');
      makeRow('GitHub API', 'github', 'checkbox', 'engine');

      for (const [k, v] of Object.entries(cfg.theme)) {
        const lb = make('label', 'hidden', {
          textContent: k,
          dataset: {
            theme: k
          }
        });
        const inp = make('input', {
          type: 'text',
          defaultValue: '',
          value: v ?? '',
          placeholder: v ?? '',
          dataset: {
            theme: k
          },
          onchange(evt) {
            let isvalid = true;
            try {
              const val = evt.target.value;
              const sty = container.root.style;
              const str = `--mujs-${k}`;
              const prop = sty.getPropertyValue(str);
              if (isEmpty(val)) {
                cfg.theme[k] = DEFAULT_CONFIG.theme[k];
                sty.removeProperty(str);
                return;
              }
              if (prop === val) {
                return;
              }
              sty.removeProperty(str);
              sty.setProperty(str, val);
              cfg.theme[k] = val;
            } catch (ex) {
              err(ex);
              isvalid = false;
            } finally {
              if (isvalid) {
                dom.cl.remove(evt.target, 'mujs-invalid');
                dom.prop(savebtn, 'disabled', false);
              } else {
                dom.cl.add(evt.target, 'mujs-invalid');
                dom.prop(savebtn, 'disabled', true);
              }
            }
          }
        });
        cfgMap.set(k, inp);
        lb.append(inp);
        sections.theme.append(lb);
      }

      // const blacklist = make('textarea', {
      //   dataset: {
      //     name: 'blacklist'
      //   },
      //   rows: '10',
      //   autocomplete: false,
      //   spellcheck: false,
      //   wrap: 'soft',
      //   value: JSON.stringify(cfg.blacklist, null, ' '),
      //   oninput(evt) {
      //     let isvalid = true;
      //     try {
      //       cfg.blacklist = JSON.parse(evt.target.value);
      //       isvalid = true;
      //     } catch (ex) {
      //       err(ex);
      //       isvalid = false;
      //     } finally {
      //       if (isvalid) {
      //         dom.cl.remove(evt.target, 'mujs-invalid');
      //         dom.prop(savebtn, 'disabled', false);
      //       } else {
      //         dom.cl.add(evt.target, 'mujs-invalid');
      //         dom.prop(savebtn, 'disabled', true);
      //       }
      //     }
      //   }
      // });
      // cfgMap.set('blacklist', blacklist);
      // const addList = make('mujs-add', {
      //   textContent: '+',
      //   dataset: {
      //     command: 'new-list'
      //   }
      // });
      // const n = make('input', {
      //   type: 'text',
      //   defaultValue: '',
      //   value: '',
      //   placeholder: 'Name',
      // });
      // const inpValue = make('input', {
      //   type: 'text',
      //   defaultValue: '',
      //   value: '',
      //   placeholder: 'Value',
      // });
      // const label = make('label', 'new-list hidden', {
      //   dataset: {
      //     blacklist: 'new-list'
      //   }
      // });
      // label.append(n, inpValue, addList);
      // listSec.append(label);
      // ael(addList, 'click', () => {
      //   if (isEmpty(n.value) || isEmpty(inpValue.value)) {
      //     return
      //   };
      //   createList(n.value, n.value, inpValue.value);
      // });
      const createList = (key, v = '', disabled = false, type = 'String') => {
        let txt = key;
        if (typeof key === 'string') {
          if (key.startsWith('userjs-')) {
            disabled = true;
            const s = key.substring(7);
            txt = `Built-in "${s}"`;
            v = builtinList[s];
          }
        } else {
          if (!key.enabled) {
            return;
          }
        }

        if (isRegExp(v)) {
          v = v.toString();
          type = 'RegExp';
        } else {
          v = JSON.stringify(v);
          type = 'Object';
        }

        const lb = make('label', 'hidden', {
          textContent: txt,
          dataset: {
            blacklist: key
          }
        });
        const inp = make('input', {
          type: 'text',
          defaultValue: '',
          value: v ?? '',
          placeholder: v ?? '',
          dataset: {
            blacklist: key
          },
          onchange(evt) {
            let isvalid = true;
            try {
              const val = evt.target.value;
              if (isEmpty(val)) {
                return;
              }
              isvalid = true;
            } catch (ex) {
              err(ex);
              isvalid = false;
            } finally {
              if (isvalid) {
                dom.cl.remove(evt.target, 'mujs-invalid');
                dom.prop(savebtn, 'disabled', false);
              } else {
                dom.cl.add(evt.target, 'mujs-invalid');
                dom.prop(savebtn, 'disabled', true);
              }
            }
          }
        });
        const selType = make('select', {
          disabled,
          dataset: {
            blacklist: key
          }
        });
        if (disabled) {
          inp.readOnly = true;
          const o = make('option', {
            value: type,
            textContent: type
          });
          selType.append(o);
        } else {
          for (const selV of ['String', 'RegExp', 'Object']) {
            const o = make('option', {
              value: selV,
              textContent: selV
            });
            selType.append(o);
          }
        }
        selType.value = type;
        lb.append(inp, selType);
        sections.blacklist.append(lb);
      };
      for (const key of cfg.blacklist) {
        createList(key);
      }

      const transfers = {
        export: {
          cfg: make('mujs-btn', 'mujs-export sub-section hidden', {
            textContent: i18n$('export_config'),
            dataset: {
              command: 'export-cfg',
              exp: 'export-cfg'
            }
          }),
          theme: make('mujs-btn', 'mujs-export sub-section hidden', {
            textContent: i18n$('export_theme'),
            dataset: {
              command: 'export-theme',
              exp: 'export-theme'
            }
          })
        },
        import: {
          cfg: make('mujs-btn', 'mujs-import sub-section hidden', {
            textContent: i18n$('import_config'),
            dataset: {
              command: 'import-cfg',
              exp: 'import-cfg'
            }
          }),
          theme: make('mujs-btn', 'mujs-import sub-section hidden', {
            textContent: i18n$('import_theme'),
            dataset: {
              command: 'import-theme',
              exp: 'import-theme'
            }
          })
        }
      };
      for (const value of Object.values(transfers)) {
        for (const v of Object.values(value)) {
          sections.exp.append(v);
        }
      }

      cfgpage.append(cbtn);
    };
    // #endregion
    container.tab.custom = (host) => {
      MUList.host = host;
      respHandles.build();
    };
    ael(mainframe, 'mouseenter', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.target.style.opacity = container.opacityMax;
      frameTimeout.clear(...frameTimeout.ids);
    });
    ael(mainframe, 'mouseleave', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.target.style.opacity = container.opacityMin;
      timeoutFrame();
    });
    ael(mainframe, 'click', (evt) => {
      evt.preventDefault();
      frameTimeout.clear(...frameTimeout.ids);
      dom.cl.remove(main, 'hidden');
      dom.cl.add(mainframe, 'hidden');
      if (cfg.autoexpand) {
        dom.cl.add([btnfullscreen, main], 'expanded');
        dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('collapse'));
      }
      if (dom.cl.has(mainframe, 'error')) {
        tab.create('mujs:settings');
      }
    });
    ael(urlBar, 'input', (evt) => {
      evt.preventDefault();
      if (urlBar.placeholder === i18n$('newTab')) {
        return;
      }
      /**
       * @type { string }
       */
      const val = evt.target.value;
      const section = qsA('mujs-section[data-name]', cfgpage);
      if (isEmpty(val)) {
        dom.cl.remove(container.toElem(), 'hidden');
        dom.cl.remove(section, 'hidden');
        return;
      }
      const finds = new Set();
      if (!dom.cl.has(cfgpage, 'hidden')) {
        const reg = new RegExp(val, 'gi');
        for (const elem of section) {
          if (!isElem(elem)) {
            continue;
          }
          if (finds.has(elem)) {
            continue;
          }
          if (elem.dataset.name.match(reg)) {
            finds.add(elem);
          }
        }
        dom.cl.add(section, 'hidden');
        dom.cl.remove([...finds], 'hidden');
        return;
      }
      const cacheValues = container.toArr().filter(({ _mujs }) => {
        return !finds.has(_mujs.root);
      });
      /**
       * @param {RegExpMatchArray} regExp
       * @param {keyof import("../typings/types.d.ts").GSForkQuery} key
       */
      const ezQuery = (regExp, key) => {
        const q_value = val.replace(regExp, '');
        const reg = new RegExp(q_value, 'gi');
        for (const v of cacheValues) {
          let k = v[key];
          if (typeof k === 'number') {
            k = `${v[key]}`;
          }
          if (k && k.match(reg)) {
            finds.add(v._mujs.root);
          }
        }
      };
      if (val.match(/^(code_url|url):/)) {
        ezQuery(/^(code_url|url):/, 'code_url');
      } else if (val.match(/^(author|users?):/)) {
        const parts = /^[\w_]+:(.+)/.exec(val);
        if (parts) {
          const reg = new RegExp(parts[1], 'gi');
          for (const v of cacheValues.filter((v) => !isEmpty(v.users))) {
            for (const user of v.users) {
              for (const value of Object.values(user)) {
                if (typeof value === 'string' && value.match(reg)) {
                  finds.add(v._mujs.root);
                } else if (typeof value === 'number' && `${value}`.match(reg)) {
                  finds.add(v._mujs.root);
                }
              }
            }
          }
        }
      } else if (val.match(/^(locale|i18n):/)) {
        ezQuery(/^(locale|i18n):/, 'locale');
      } else if (val.match(/^id:/)) {
        ezQuery(/^id:/, 'id');
      } else if (val.match(/^license:/)) {
        ezQuery(/^license:/, 'license');
      } else if (val.match(/^name:/)) {
        ezQuery(/^name:/, 'name');
      } else if (val.match(/^description:/)) {
        ezQuery(/^description:/, 'description');
      } else if (val.match(/^(search_engine|engine):/)) {
        const parts = /^[\w_]+:(\w+)/.exec(val);
        if (parts) {
          const reg = new RegExp(parts[1], 'gi');
          for (const { _mujs } of cacheValues) {
            if (!_mujs.info.engine.name.match(reg)) {
              continue;
            }
            finds.add(_mujs.root);
          }
        }
      } else if (val.match(/^filter:/)) {
        const parts = /^\w+:(.+)/.exec(val);
        if (parts) {
          const bsFilter = loadFilters();
          const filterType = bsFilter.get(parts[1].trim().toLocaleLowerCase());
          if (filterType) {
            const { reg } = filterType;
            for (const { name, users, _mujs } of cacheValues) {
              if ([{ name }, ...users].find((o) => o.name.match(reg))) {
                continue;
              }
              finds.add(_mujs.root);
            }
          }
        }
      } else if (val.match(/^recommend:/)) {
        for (const { url, id, users, _mujs } of cacheValues) {
          if (
            users.find((u) => u.id === authorID) ||
            goodUserJS.includes(url) ||
            goodUserJS.includes(id)
          ) {
            finds.add(_mujs.root);
          }
        }
      } else {
        const reg = new RegExp(val, 'gi');
        for (const v of cacheValues) {
          if (v.name && v.name.match(reg)) finds.add(v._mujs.root);
          if (v.description && v.description.match(reg)) finds.add(v._mujs.root);
          if (v._mujs.code.data_meta) {
            for (const key of Object.keys(v._mujs.code.data_meta)) {
              if (/name|desc/i.test(key) && key.match(reg)) finds.add(v._mujs.root);
            }
          }
        }
      }
      dom.cl.add(qsA('tr[data-engine]', tabbody), 'hidden');
      dom.cl.remove([...finds], 'hidden');
    });
    ael(urlBar, 'change', (evt) => {
      evt.preventDefault();
      const val = evt.target.value;
      const tabElem = tab.getActive();
      if (urlBar.placeholder === i18n$('newTab') && tabElem) {
        const tabHost = tabElem.firstElementChild;
        if (tab.protoReg.test(val)) {
          const createdTab = tab.getTab(val);
          tab.close(tabElem);
          if (createdTab) {
            tab.active(createdTab);
          } else {
            tab.create(val);
          }
          evt.target.placeholder = i18n$('search_placeholder');
          evt.target.value = '';
          return;
        } else if (val === '*') {
          tabElem.dataset.host = val;
          tabHost.title = '<All Sites>';
          tabHost.textContent = '<All Sites>';
          MUList.host = val;
          respHandles.build();
          return;
        }
        const value = container.getHost(val);
        if (container.checkBlacklist(value)) {
          showError(`Blacklisted "${value}"`);
          return;
        }
        tabElem.dataset.host = value;
        tabHost.title = value;
        tabHost.textContent = value;
        MUList.host = value;
        respHandles.build();
      }
    });
    scheduler.postTask(makecfg, { priority: 'background' });

    respHandles.build = async () => {
      const time = await scheduler.postTask(MUList.build, { priority: 'background' });
      return timeoutFrame(time);
    };

    if (cfg.autofetch) {
      respHandles.build();
    }
    dbg('Container', container);
  } catch (ex) {
    err(ex);
    container.remove();
  }
  return respHandles;
}
// #endregion
/**
 * @template { Function } F
 * @param { (this: F, doc: Document) => * } onDomReady
 */
const loadDOM = (onDomReady) => {
  if (isFN(onDomReady)) {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      onDomReady(document);
    } else {
      document.addEventListener('DOMContentLoaded', (evt) => onDomReady(evt.target), {
        once: true
      });
    }
  }
};

const init = async (prefix = 'Config') => {
  const stored = await StorageSystem.getValue(prefix, DEFAULT_CONFIG);
  cfg = {
    ...DEFAULT_CONFIG,
    ...stored
  };
  info('Config:', cfg);
  loadDOM((doc) => {
    try {
      if (window.location === null) {
        throw new Error('"window.location" is null, reload the webpage or use a different one', {
          cause: 'loadDOM'
        });
      }
      if (doc === null) {
        throw new Error('"doc" is null, reload the webpage or use a different one', {
          cause: 'loadDOM'
        });
      }
      container.redirect();

      if (cfg.autoinject) container.inject(primaryFN, doc);

      Command.register(i18n$('userjs_inject'), () => {
        container.inject(primaryFN, doc);
      });
      Command.register(i18n$('userjs_close'), () => {
        container.remove();
      });
    } catch (ex) {
      err(ex);
    }
  });
};
init();

})();
(()=>{"use strict";if((()=>{try{return window.self!==window.top}catch(e){return!0}})())return;let e=self.userjs;if(!(document instanceof Document||document instanceof XMLDocument&&document.createElement("div")instanceof HTMLDivElement)||!1!==/^image\/|^text\/plain/.test(document.contentType||"")||self.userjs instanceof Object!=!1&&!0===e.UserJS||(e=self.userjs={UserJS:!0}),"object"!=typeof e||!e.UserJS)return;window.trustedTypes&&window.trustedTypes.createPolicy&&window.trustedTypes.createPolicy("default",{createHTML:e=>e});const t={ar:{createdby:"انشأ من قبل",name:"اسم",daily_installs:"التثبيت اليومي",close:"يغلق",filterA:"منقي",max:"تحقيق أقصى قدر",min:"تصغير",search:"يبحث",search_placeholder:"بحث في البرامج النصية",install:"تثبيت",issue:"إصدار جديد",version_number:"الإصدار",updated:"آخر تحديث",total_installs:"إجمالي التثبيت",ratings:"التقييمات",good:"جيد",ok:"جيد",bad:"سيء",created_date:"تم إنشاؤه",redirect:"شوكة دهنية للكبار",filter:"تصفية اللغات الأخرى",dtime:"عرض المهلة",save:"حفظ",reset:"إعادة تعيين",preview_code:"كود المعاينة",saveFile:"احفظ الملف",newTab:"علامة تبويب جديدة",applies_to:"ينطبق على",license:"الترخيص",no_license:"لا يوجد",antifeatures:"إعلانات",userjs_fullscreen:"ملء الشاشة الكاملة التلقائي",listing_none:"(لا يوجد)",export_config:"تهيئة التصدير",export_theme:"تصدير السمة",import_config:"استيراد تهيئة الاستيراد",import_theme:"استيراد النسق",code_size:"حجم الرمز",prmpt_css:"التثبيت كأسلوب المستخدم؟",userjs_inject:"حقن Userscript+",userjs_close:"إغلاق Userscript+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},de:{createdby:"Erstellt von",name:"Name",daily_installs:"Tägliche Installationen",close:"Schließen Sie",filterA:"Filter",max:"Maximieren Sie",min:"minimieren",search:"Suche",search_placeholder:"Suche nach Userscripts",install:"Installieren Sie",issue:"Neue Ausgabe",version_number:"Version",updated:"Zuletzt aktualisiert",total_installs:"Installationen insgesamt",ratings:"Bewertungen",good:"Gut",ok:"Okay",bad:"Schlecht",created_date:"Erstellt",redirect:"Greasy Fork für Erwachsene",filter:"Andere Sprachen herausfiltern",dtime:"Zeitüberschreitung anzeigen",save:"Speichern Sie",reset:"Zurücksetzen",preview_code:"Vorschau Code",saveFile:"Datei speichern",newTab:"Neue Registerkarte",applies_to:"Gilt für",license:"Lizenz",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatischer Vollbildmodus",listing_none:"(Keine)",export_config:"Konfig exportieren",export_theme:"Thema exportieren",import_config:"Konfig importieren",import_theme:"Thema importieren",code_size:"Code Größe",prmpt_css:"Als UserStyle installieren?",userjs_inject:"Userscript+ einfügen",userjs_close:"Userscript+ schließen",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},en:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search for userscripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Okay",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Download",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},en_GB:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search scripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Ok",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Save File",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},es:{createdby:"Creado por",name:"Nombre",daily_installs:"Instalaciones diarias",close:"Ya no se muestra",filterA:"Filtro",max:"Maximizar",min:"Minimizar",search:"Busque en",search_placeholder:"Buscar userscripts",install:"Instalar",issue:"Nueva edición",version_number:"Versión",updated:"Última actualización",total_installs:"Total de instalaciones",ratings:"Clasificaciones",good:"Bueno",ok:"Ok",bad:"Malo",created_date:"Creado",redirect:"Greasy Fork para adultos",filter:"Filtrar otros idiomas",dtime:"Mostrar el tiempo de espera",save:"Guardar",reset:"Reiniciar",preview_code:"Vista previa del código",saveFile:"Guardar archivo",newTab:"Guardar archivo",applies_to:"Se aplica a",license:"Licencia",no_license:"Desconocida",antifeatures:"Características indeseables",userjs_fullscreen:"Pantalla completa automática",listing_none:"(Ninguno)",export_config:"Exportar configuración",export_theme:"Exportar tema",import_config:"Importar configuración",import_theme:"Importar tema",code_size:"Código Tamaño",prmpt_css:"¿Instalar como UserStyle?",userjs_inject:"Inyectar Userscript+",userjs_close:"Cerrar Userscript+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},fr:{createdby:"Créé par",name:"Nom",daily_installs:"Installations quotidiennes",close:"Ne plus montrer",filterA:"Filtre",max:"Maximiser",min:"Minimiser",search:"Recherche",search_placeholder:"Rechercher des userscripts",install:"Installer",issue:"Nouveau numéro",version_number:"Version",updated:"Dernière mise à jour",total_installs:"Total des installations",ratings:"Notations",good:"Bon",ok:"Ok",bad:"Mauvais",created_date:"Créé",redirect:"Greasy Fork pour les adultes",filter:"Filtrer les autres langues",dtime:"Délai d'affichage",save:"Sauvez",reset:"Réinitialiser",preview_code:"Prévisualiser le code",saveFile:"Enregistrer le fichier",newTab:"Nouvel onglet",applies_to:"S'applique à",license:"Licence",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Plein écran automatique",listing_none:"(Aucun)",export_config:"Export Config",export_theme:"Exporter le thème",import_config:"Importer la configuration",import_theme:"Importer le thème",code_size:"Code Taille",prmpt_css:"Installer comme UserStyle ?",userjs_inject:"Injecter Userscript+",userjs_close:"Fermer Userscript+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},ja:{createdby:"によって作成された",name:"名前",daily_installs:"デイリーインストール",close:"表示されなくなりました",filterA:"フィルター",max:"最大化",min:"ミニマム",search:"検索",search_placeholder:"ユーザースクリプトの検索",install:"インストール",issue:"新刊のご案内",version_number:"バージョン",updated:"最終更新日",total_installs:"総インストール数",ratings:"レーティング",good:"グッド",ok:"良い",bad:"悪い",created_date:"作成",redirect:"大人のGreasyfork",filter:"他の言語をフィルタリングする",dtime:"表示タイムアウト",save:"拯救",reset:"リセット",preview_code:"コードのプレビュー",saveFile:"ファイルを保存",newTab:"新しいタブ",applies_to:"適用対象",license:"ライセンス",no_license:"不明",antifeatures:"アンチ機能",userjs_fullscreen:"自動フルスクリーン",listing_none:"(なし)",export_config:"エクスポート設定",export_theme:"テーマのエクスポート",import_config:"設定のインポート",import_theme:"テーマのインポート",code_size:"コード・サイズ",prmpt_css:"UserStyleとしてインストールしますか？",userjs_inject:"Userscript+ を挿入",userjs_close:"Userscript+ を閉じる",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},nl:{createdby:"Gemaakt door",name:"Naam",daily_installs:"Dagelijkse Installaties",close:"Sluit",filterA:"Filter",max:"Maximaliseer",min:"Minimaliseer",search:"Zoek",search_placeholder:"Zoeken naar gebruikersscripts",install:"Installeer",issue:"Nieuw Issue",version_number:"Versie",updated:"Laatste Update",total_installs:"Totale Installaties",ratings:"Beoordeling",good:"Goed",ok:"Ok",bad:"Slecht",created_date:"Aangemaakt",redirect:"Greasy Fork voor volwassenen",filter:"Filter andere talen",dtime:"Weergave timeout",save:"Opslaan",reset:"Opnieuw instellen",preview_code:"Voorbeeldcode",saveFile:"Bestand opslaan",newTab:"Nieuw tabblad",applies_to:"Geldt voor",license:"Licentie",no_license:"N.v.t.",antifeatures:"Functies voor eigen gewin",userjs_fullscreen:"Automatisch volledig scherm",listing_none:"(Geen)",export_config:"Configuratie exporteren",export_theme:"Thema exporteren",import_config:"Configuratie importeren",import_theme:"Thema importeren",code_size:"Code Grootte",prmpt_css:"Installeren als UserStyle?",userjs_inject:"Injecteer Userscript+",userjs_close:"Sluit Userscript+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},pl:{createdby:"Stworzony przez",name:"Nazwa",daily_installs:"Codzienne instalacje",close:"Zamknij",filterA:"Filtr",max:"Maksymalizuj",min:"Minimalizuj",search:"Wyszukiwanie",search_placeholder:"Wyszukiwanie skryptów użytkownika",install:"Instalacja",issue:"Nowy numer",version_number:"Wersja",updated:"Ostatnia aktualizacja",total_installs:"Łączna liczba instalacji",ratings:"Oceny",good:"Dobry",ok:"Ok",bad:"Zły",created_date:"Utworzony",redirect:"Greasy Fork dla dorosłych",filter:"Odfiltruj inne języki",dtime:"Limit czasu wyświetlania",save:"Zapisz",reset:"Reset",preview_code:"Kod podglądu",saveFile:"Zapisz plik",newTab:"Nowa karta",applies_to:"Dotyczy",license:"Licencja",no_license:"N/A",antifeatures:"Antywzorce",userjs_fullscreen:"Automatyczny pełny ekran",listing_none:"(Brak)",export_config:"Konfiguracja eksportu",export_theme:"Motyw eksportu",import_config:"Importuj konfigurację",import_theme:"Importuj motyw",code_size:"Kod Rozmiar",prmpt_css:"Zainstalować jako UserStyle?",userjs_inject:"Wstrzyknij Userscript+",userjs_close:"Zamknij Userscript+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},ru:{createdby:"Сделано",name:"Имя",daily_installs:"Ежедневные установки",close:"Больше не показывать",filterA:"Фильтр",max:"Максимизировать",min:"Минимизировать",search:"Поиск",search_placeholder:"Поиск юзерскриптов",install:"Установите",issue:"Новый выпуск",version_number:"Версия",updated:"Последнее обновление",total_installs:"Всего установок",ratings:"Рейтинги",good:"Хорошо",ok:"Хорошо",bad:"Плохо",created_date:"Создано",redirect:"Greasy Fork для взрослых",filter:"Отфильтровать другие языки",dtime:"Тайм-аут отображения",save:"Сохранить",reset:"Перезагрузить",preview_code:"Предварительный просмотр кода",saveFile:"Сохранить файл",newTab:"Новая вкладка",applies_to:"Применяется к",license:"Лицензия",no_license:"Недоступно",antifeatures:"Нежелательная функциональность",userjs_fullscreen:"Автоматический полноэкранный режим",listing_none:"(нет)",export_config:"Экспорт конфигурации",export_theme:"Экспорт темы",import_config:"Импорт конфигурации",import_theme:"Импортировать тему",code_size:"Код Размер",prmpt_css:"Установить как UserStyle?",userjs_inject:"Вставить Userscript+",userjs_close:"Закрыть Userscript+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},zh:{createdby:"由...制作",name:"姓名",daily_installs:"日常安装",close:"不再显示",filterA:"过滤器",max:"最大化",min:"最小化",search:"搜索",search_placeholder:"搜索用户脚本",install:"安装",issue:"新问题",version_number:"版本",updated:"最后更新",total_installs:"总安装量",ratings:"评级",good:"好的",ok:"好的",bad:"不好",created_date:"创建",redirect:"大人的Greasyfork",filter:"过滤掉其他语言",dtime:"显示超时",save:"拯救",reset:"重置",preview_code:"预览代码",saveFile:"保存存档",newTab:"新标签",applies_to:"适用于",license:"许可证",no_license:"暂无",antifeatures:"可能不受欢迎的功能",userjs_fullscreen:"自动全屏",listing_none:"(无)",export_config:"导出配置",export_theme:"导出主题",import_config:"导入配置",import_theme:"导入主题",code_size:"代码 尺寸",prmpt_css:"安装为用户风格？",userjs_inject:"注入 Userscript+",userjs_close:"关闭 Userscript+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},zh_CN:{createdby:"由...制作",name:"姓名",daily_installs:"日常安装",close:"不再显示",filterA:"过滤器",max:"最大化",min:"最小化",search:"搜索",search_placeholder:"搜索用户脚本",install:"安装",issue:"新问题",version_number:"版本",updated:"最后更新",total_installs:"总安装量",ratings:"评级",good:"好的",ok:"好的",bad:"不好",created_date:"创建",redirect:"大人的Greasyfork",filter:"过滤掉其他语言",dtime:"显示超时",save:"拯救",reset:"重置",preview_code:"预览代码",saveFile:"保存存档",newTab:"新标签",applies_to:"适用于",license:"许可证",no_license:"暂无",antifeatures:"可能不受欢迎的功能",userjs_fullscreen:"自动全屏",listing_none:"(无)",export_config:"导出配置",export_theme:"导出主题",import_config:"导入配置",import_theme:"导入主题",code_size:"代码 尺寸",prmpt_css:"安装为用户风格？",userjs_inject:"注入 Userscript+",userjs_close:"关闭 Userscript+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"},zh_TW:{createdby:"由...制作",name:"姓名",daily_installs:"日常安装",close:"不再显示",filterA:"过滤器",max:"最大化",min:"最小化",search:"搜索",search_placeholder:"搜索用户脚本",install:"安装",issue:"新问题",version_number:"版本",updated:"最后更新",total_installs:"总安装量",ratings:"评级",good:"好的",ok:"好的",bad:"不好",created_date:"创建",redirect:"大人的Greasyfork",filter:"过滤掉其他语言",dtime:"显示超时",save:"拯救",reset:"重置",preview_code:"预览代码",saveFile:"保存存档",newTab:"新标签",applies_to:"适用于",license:"许可证",no_license:"暂无",antifeatures:"可能不受欢迎的功能",userjs_fullscreen:"自动全屏",listing_none:"(无)",export_config:"导出配置",export_theme:"导出主题",import_config:"导入配置",import_theme:"导入主题",code_size:"代码 尺寸",prmpt_css:"作為使用者樣式安裝？",userjs_inject:"注入用戶腳本+",userjs_close:"關閉用戶腳本+",userjs_sync:"Sync with UserScript Manager",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load"}},n=(...e)=>{console.error("[%cMagic Userscript+%c] %cERROR","color: rgb(29, 155, 240);","","color: rgb(249, 24, 128);",...e);const t="undefined"!=typeof alert&&alert;for(const n of e)"object"==typeof n&&"cause"in n&&t&&t(`[Magic Userscript+] (${n.cause}) ${n.message}`)},s=(...e)=>{console.info("[%cMagic Userscript+%c] %cINF","color: rgb(29, 155, 240);","","color: rgb(0, 186, 124);",...e)},a=(...e)=>{console.log("[%cMagic Userscript+%c] %cLOG","color: rgb(29, 155, 240);","","color: rgb(219, 160, 73);",...e)};let o={};const r=e=>Object.prototype.toString.call(e),i=e=>r(e).includes("RegExp"),l=e=>r(e).includes("Element"),c=e=>r(e).includes("Object"),d=e=>r(e).includes("Function"),m=e=>Object.is(e,null)||Object.is(e,void 0),u=e=>"string"==typeof e&&Object.is(e.trim(),"")||(e instanceof Set||e instanceof Map)&&Object.is(e.size,0)||Array.isArray(e)&&Object.is(e.length,0)||c(e)&&Object.is(Object.keys(e).length,0),h=e=>m(e)||u(e);function p(){if(e.safeSelf)return e.safeSelf;const t=function(){const e=function(e){return e&&e.Math===Math&&e};return e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof this&&this)||function(){return this}()||Function("return this")()}(),s={XMLHttpRequest:t.XMLHttpRequest,CustomEvent:t.CustomEvent,createElement:t.document.createElement.bind(t.document),createElementNS:t.document.createElementNS.bind(t.document),createTextNode:t.document.createTextNode.bind(t.document),setTimeout:t.setTimeout,clearTimeout:t.clearTimeout,navigator:t.navigator,scheduler:{postTask:(e,n)=>"scheduler"in t&&"postTask"in t.scheduler?t.scheduler.postTask(e,n):(void 0===(n=Object.assign({},n)).delay&&(n.delay=0),n.delay=Number(n.delay),n.delay<0?Promise.reject(new TypeError('"delay" must be a positive number.')):new Promise((s=>{t.setTimeout((()=>{s(e())}),n.delay)}))),yield:()=>"scheduler"in t&&"yield"in t.scheduler?(scheduler.yield(),t.scheduler.yield()):new Promise((e=>{t.setTimeout(e,0)}))}};for(const[e,t]of Object.entries(s))"scheduler"!==e&&"navigator"!==e&&(d(t)||n({message:`Safe handles "${e}" returned "${t}"`,cause:"safeSelf"}));return e.safeSelf=s,e.safeSelf}const f="about:blank",b=166061,g=[33005,394820,438684,4870,394420,25068,483444,1682,22587,789,28497,386908,24204,404443,4336,368183,393396,473830,12179,423001,376510,23840,40525,6456,"https://openuserjs.org/install/Patabugen/Always_Remember_Me.user.js","https://openuserjs.org/install/nokeya/Direct_links_out.user.js","https://github.com/jijirae/y2monkey/raw/main/y2monkey.user.js","https://github.com/jijirae/r2monkey/raw/main/r2monkey.user.js","https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js","https://github.com/jesus2099/konami-command/raw/master/INSTALL-USER-SCRIPT.user.js","https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js"],j=[478597],y={greasyfork:["pornhub.com"],sleazyfork:["pornhub.com"],openuserjs:[],github:[]},w=(()=>{if(void 0!==e.isMobile)return e.isMobile;try{const{navigator:t}=p();if(t){const{userAgent:n,userAgentData:s}=t,{platform:a,mobile:o}=s?Object(s):{};e.isMobile=/Mobile|Tablet/.test(n?String(n):"")||Boolean(o)||/Android|Apple/.test(a?String(a):"")}else e.isMobile=!1}catch(t){e.isMobile=!1,t.cause="getUAData",n(t)}return e.isMobile})(),v="undefined"!=typeof GM,_={local:/localhost|router|gov|(\d+\.){3}\d+/,finance:/school|pay|bank|money|cart|checkout|authorize|bill|wallet|venmo|zalo|skrill|bluesnap|coin|crypto|currancy|insurance|finance/,social:/login|join|signin|signup|sign-up|password|reset|password_reset/,unsupported:{host:"fakku.net",pathname:"/hentai/.+/read/page/.+"}},x={autofetch:!0,autoinject:!0,autoSort:"daily_installs",clearTabCache:!0,cache:!0,autoexpand:!1,filterlang:!1,sleazyredirect:!1,time:1e4,blacklist:["userjs-local","userjs-finance","userjs-social","userjs-unsupported"],preview:{code:!1,metadata:!1},engines:[{enabled:!0,name:"greasyfork",query:encodeURIComponent("https://greasyfork.org/scripts/by-site/{host}.json?language=all")},{enabled:!1,name:"sleazyfork",query:encodeURIComponent("https://sleazyfork.org/scripts/by-site/{host}.json?language=all")},{enabled:!1,name:"openuserjs",query:encodeURIComponent("https://openuserjs.org/?q={host}")},{enabled:!1,name:"github",token:"",query:encodeURIComponent('https://api.github.com/search/code?q="// ==UserScript=="+{host}+ "// ==/UserScript=="+in:file+language:js&per_page=30')}],theme:{"even-row":"","odd-row":"","even-err":"","odd-err":"","background-color":"","gf-color":"","sf-color":"","border-b-color":"","gf-btn-color":"","sf-btn-color":"","sf-txt-color":"","txt-color":"","chck-color":"","chck-gf":"","chck-git":"","chck-open":"",placeholder:"","position-top":"","position-bottom":"","position-left":"","position-right":"","font-family":""},recommend:{author:!0,others:!0},filters:{ASCII:{enabled:!1,name:"Non-ASCII",regExp:"[^\\x00-\\x7F\\s]+"},Latin:{enabled:!1,name:"Non-Latin",regExp:"[^\\u0000-\\u024F\\u2000-\\u214F\\s]+"},Games:{enabled:!1,name:"Games",flag:"iu",regExp:"Aimbot|AntiGame|Agar|agar\\.io|alis\\.io|angel\\.io|ExtencionRipXChetoMalo|AposBot|DFxLite|ZTx-Lite|AposFeedingBot|AposLoader|Balz|Blah Blah|Orc Clan Script|Astro\\s*Empires|^\\s*Attack|^\\s*Battle|BiteFight|Blood\\s*Wars|Bloble|Bonk|Bots|Bots4|Brawler|\\bBvS\\b|Business\\s*Tycoon|Castle\\s*Age|City\\s*Ville|chopcoin\\.io|Comunio|Conquer\\s*Club|CosmoPulse|cursors\\.io|Dark\\s*Orbit|Dead\\s*Frontier|Diep\\.io|\\bDOA\\b|doblons\\.io|DotD|Dossergame|Dragons\\s*of\\s*Atlantis|driftin\\.io|Dugout|\\bDS[a-z]+\\n|elites\\.io|Empire\\s*Board|eRep(ublik)?|Epicmafia|Epic.*War|ExoPlanet|Falcon Tools|Feuerwache|Farming|FarmVille|Fightinfo|Frontier\\s*Ville|Ghost\\s*Trapper|Gladiatus|Goalline|Gondal|gota\\.io|Grepolis|Hobopolis|\\bhwm(\\b|_)|Ikariam|\\bIT2\\b|Jellyneo|Kapi\\s*Hospital|Kings\\s*Age|Kingdoms?\\s*of|knastv(o|oe)gel|Knight\\s*Fight|\\b(Power)?KoC(Atta?ck)?\\b|\\bKOL\\b|Kongregate|Krunker|Last\\s*Emperor|Legends?\\s*of|Light\\s*Rising|lite\\.ext\\.io|Lockerz|\\bLoU\\b|Mafia\\s*(Wars|Mofo)|Menelgame|Mob\\s*Wars|Mouse\\s*Hunt|Molehill\\s*Empire|MooMoo|MyFreeFarm|narwhale\\.io|Neopets|NeoQuest|Nemexia|\\bOGame\\b|Ogar(io)?|Pardus|Pennergame|Pigskin\\s*Empire|PlayerScripts|pokeradar\\.io|Popmundo|Po?we?r\\s*(Bot|Tools)|PsicoTSI|Ravenwood|Schulterglatze|Skribbl|slither\\.io|slitherplus\\.io|slitheriogameplay|SpaceWars|splix\\.io|Survivio|\\bSW_[a-z]+\\n|\\bSnP\\b|The\\s*Crims|The\\s*West|torto\\.io|Travian|Treasure\\s*Isl(and|e)|Tribal\\s*Wars|TW.?PRO|Vampire\\s*Wars|vertix\\.io|War\\s*of\\s*Ninja|World\\s*of\\s*Tanks|West\\s*Wars|wings\\.io|\\bWoD\\b|World\\s*of\\s*Dungeons|wtf\\s*battles|Wurzelimperium|Yohoho|Zombs"},SocialNetworks:{enabled:!1,name:"Social Networks",flag:"iu",regExp:"Face\\s*book|Google(\\+| Plus)|\\bHabbo|Kaskus|\\bLepra|Leprosorium|MySpace|meinVZ|odnoklassniki|Одноклассники|Orkut|sch(ue|ü)ler(VZ|\\.cc)?|studiVZ|Unfriend|Valenth|VK|vkontakte|ВКонтакте|Qzone|Twitter|TweetDeck"},Clutter:{enabled:!1,name:"Clutter",flag:"iu",regExp:"^\\s*(.{1,3})\\1+\\n|^\\s*(.+?)\\n+\\2\\n*$|^\\s*.{1,5}\\n|do\\s*n('|o)?t (install|download)|nicht installieren|(just )?(\\ban? |\\b)test(ing|s|\\d|\\b)|^\\s*.{0,4}test.{0,4}\\n|\\ntest(ing)?\\s*|^\\s*(\\{@|Smolka|Hacks)|\\[\\d{4,5}\\]|free\\s*download|theme|(night|dark) ?(mode)?"}}};const k=new class{constructor(){if(void 0!==e.pool)return this;e.pool=new Map;for(const[n,s]of Object.entries(t))e.pool.has(n)||e.pool.set(n,s)}toDate(e=""){const{navigator:t}=p();return new Intl.DateTimeFormat(t.language).format("string"==typeof e?new Date(e):e)}toNumber(e){const{navigator:t}=p();return new Intl.NumberFormat(t.language).format(e)}i18n$(t){const{navigator:n}=p(),s=n.language.split("-")[0]??"en";return e.pool.get(s)?.[t]??"Invalid Key"}},{i18n$:C}=k,M=(...e)=>[...new Set(e.flat())],z=(e,t)=>{try{return(t||document).querySelector(e)}catch(e){n(e)}return null},S=(e,t)=>{try{return(t||document).querySelectorAll(e)}catch(e){n(e)}return[]},T=(e,t=!0,n)=>Object.is(e,null)||Object.is(e,void 0)?[]:Array.isArray(e)?e:"string"==typeof e?t?Array.from((n||document).querySelectorAll(e)):[e]:l(e)?[e]:Array.from(e),L=(e,t,s,a={})=>{try{for(const n of T(e))n&&(w&&"click"===t?n.addEventListener("touchstart",s,a):n.addEventListener(t,s,a))}catch(e){e.cause="ael",n(e)}},E=(e,t={})=>{if(!e)return e;for(const n in t)if("object"==typeof t[n])E(e[n],t[n]);else if(d(t[n])){if(/^on/.test(n)){e[n]=t[n];continue}L(e,n,t[n])}else"class"===n?e.className=t[n]:e[n]=t[n];return e},A=(e,t,s)=>{let a;try{const{createElement:n}=p();a=n(e),h(t)||("string"==typeof t?a.className=t:c(t)&&E(a,t)),h(s)||("string"==typeof s?a.textContent=s:c(s)&&E(a,s))}catch(e){e.cause="make",n(e)}return a},$=(()=>{if(v){if(c(GM.info))return GM.info;if(c(GM_info))return GM_info}return{script:{icon:"",name:"Magic Userscript+",namespace:"https://github.com/magicoflolis/Userscript-Plus",updateURL:"https://github.com/magicoflolis/Userscript-Plus/raw/master/dist/magic-userjs.js",version:"Bookmarklet",bugs:"https://github.com/magicoflolis/Userscript-Plus/issues"}}})(),O={attr(e,t,n=void 0){for(const s of T(e)){if(void 0===n)return s.getAttribute(t);null===n?s.removeAttribute(t):s.setAttribute(t,n)}},prop(e,t,n=void 0){for(const s of T(e)){if(void 0===n)return s[t];s[t]=n}},text(e,t){const n=T(e);if(void 0===t)return 0!==n.length?n[0].textContent:void 0;for(const e of n)e.textContent=t},cl:{add:(e,t)=>(t=Array.isArray(t)?t:[t],T(e).some((e=>e.classList.add(...t)))),remove:(e,t)=>(t=Array.isArray(t)?t:[t],T(e).some((e=>e.classList.remove(...t)))),toggle(e,t,n){let s;for(const a of T(e))s=a.classList.toggle(t,n);return s},has:(e,t)=>T(e).some((e=>e.classList.contains(t)))}};const R=new class{constructor(){this.store=new Map,this.maps={},this.create("cfg","container","userjs")}create(...e){const t=[];for(const n of e){if(this.store.has(n))return this.store.get(n);const e=new Map;this.store.set(n,e),this.maps[n]=e,t.push(this.store.get(n))}return t.length>=2?t:t[0]}},U={close:{viewBox:"0 0 384 512",html:'<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>'},code:{viewBox:"0 0 640 512",html:'<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>'},collapse:{viewBox:"0 0 448 512",html:'<path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/>'},download:{viewBox:"0 0 384 512",html:'<path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>'},expand:{viewBox:"0 0 448 512",html:'<path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/>'},gear:{viewBox:"0 0 512 512",html:'<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>'},github:{viewBox:"0 0 496 512",html:'<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>'},globe:{viewBox:"0 0 512 512",html:'<path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>'},install:{viewBox:"0 0 512 512",html:'<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>'},issue:{viewBox:"0 0 512 512",html:'<path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/>'},minus:{viewBox:"0 0 448 512",html:'<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>'},nav:{viewBox:"0 0 448 512",html:'<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>'},pager:{viewBox:"0 0 512 512",html:'<path d="M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm64 32l0 64c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zM80 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0z"/>'},verified:{viewBox:"0 0 56 56",fill:"currentColor",stroke:"currentColor",html:'<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z"/></g>'},refresh:{viewBox:"0 0 512 512",fill:"currentColor",html:'<path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/>'},load(e,t){const{createElementNS:n}=p(),s=n("http://www.w3.org/2000/svg","svg");for(const[t,n]of Object.entries(U[e]))"html"!==t&&s.setAttributeNS(null,t,n);try{"string"==typeof U[e].html&&(s.innerHTML=U[e].html,O.attr(s,"id",`mujs_${e??"Unknown"}`))}catch(e){}return t?(t.appendChild(s),s):s.outerHTML}},N={prefix:"MUJS",events:new Set,getItem:e=>window.localStorage.getItem(e),has(e){return!m(this.getItem(e))},setItem(e,t){window.localStorage.setItem(e,t)},remove(e){window.localStorage.removeItem(e)},addListener(e,t){if(v){let n;if(d(GM.addValueChangeListener)?n=GM.addValueChangeListener(e,t):d(GM_addValueChangeListener)&&(n=GM_addValueChangeListener(e,t)),n)return this.events.add(n)&&n}return this.events.add(t)&&window.addEventListener("storage",(n=>{const{key:s,oldValue:a,newValue:o}=n;s===e&&t(s,a,o,!1)}))},attach(){window.addEventListener("beforeunload",(()=>{for(const e of this.events)v&&"number"==typeof e&&!Number.isNaN(e)?d(GM.removeValueChangeListener)?GM.removeValueChangeListener(e):d(GM_addValueChangeListener)&&GM_removeValueChangeListener(e):window.removeEventListener("storage",e),this.events.delete(e)}))},async setValue(e,t){t&&(t="string"==typeof t?t:JSON.stringify(t),v?d(GM.setValue)?await GM.setValue(e,t):d(GM_setValue)&&GM_setValue(e,t):this.setItem(`${this.prefix}-${e}`,t))},async getValue(e,t={}){try{if(v){let n;if(d(GM.getValue)?n=await GM.getValue(e,JSON.stringify(t)):d(GM_getValue)&&(n=GM_getValue(e,JSON.stringify(t))),!m(n))return JSON.parse(n)}return this.has(`${this.prefix}-${e}`)?JSON.parse(this.getItem(`${this.prefix}-${e}`)):t}catch(e){return n(e),t}}},I={cmds:new Set,register(e,t){if(v){if(d(t)){if(this.cmds.has(t))return;this.cmds.add(t)}d(GM.registerMenuCommand)?GM.registerMenuCommand(e,t):d(GM_registerMenuCommand)&&GM_registerMenuCommand(e,t)}}},F={async req(e,t="GET",n="json",s,a=!1){if(h(e))throw new Error('"url" parameter is empty');s=Object.assign({},s),t=this.bscStr(t,!1),n=this.bscStr(n);const o={method:t,...s};return v&&!a?o.credentials&&(Object.assign(o,{anonymous:!1}),Object.is(o.credentials,"omit")&&Object.assign(o,{anonymous:!0}),delete o.credentials):o.onprogress&&delete o.onprogress,new Promise(((t,s)=>{v&&!a?F.xmlRequest({url:e,responseType:n,...o,onerror:t=>{s(new Error(`${t.status} ${e}`))},onload:a=>{200!==a.status&&s(new Error(`${a.status} ${e}`)),n.match(/basic/)&&t(a),t(a.response)}}):fetch(e,o).then((e=>{e.ok||s(e);const a=(t="text")=>d(e[t])?e[t]():e;if(n.match(/buffer/))t(a("arrayBuffer"));else if(n.match(/json/))t(a("json"));else if(n.match(/text/))t(a("text"));else if(n.match(/blob/))t(a("blob"));else if(n.match(/formdata/))t(a("formData"));else if(n.match(/clone/))t(a("clone"));else if(n.match(/document/)){const e=a("text"),n=new DOMParser;if(e instanceof Promise)e.then((e=>{const s=n.parseFromString(e,"text/html");t(s)}));else{const s=n.parseFromString(e,"text/html");t(s)}}else t(e)})).catch(s)}))},format(e,t=2){if(Number.isNaN(e))return`0 ${this.sizes[0]}`;const n=t<0?0:t,s=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/Math.pow(1024,s)).toFixed(n))} ${this.sizes[s]}`},sizes:["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],async xmlRequest(e){if(v){if(d(GM.xmlHttpRequest))return GM.xmlHttpRequest(e);if(d(GM_xmlhttpRequest))return GM_xmlhttpRequest(e)}return await new Promise(((t,n)=>{const{XMLHttpRequest:s}=p(),a=new s;let o,r="GET",i=f;for(const[s,l]of Object.entries(e))"onload"===s?a.addEventListener("load",(()=>{d(l)&&l(a),t(a)})):"onerror"===s?a.addEventListener("error",(e=>{d(l)&&l(e),n(e)})):"onabort"===s?a.addEventListener("abort",(e=>{d(l)&&l(e),n(e)})):"onprogress"===s?a.addEventListener("progress",l):"responseType"===s?a.responseType="buffer"===l?"arraybuffer":l:"method"===s?r=l:"url"===s?i=l:"body"===s&&(o=l);a.open(r,i),h(a.responseType)&&(a.responseType="text"),o?a.send(o):a.send()}))},bscStr:(e="",t=!0)=>e[t?"toLowerCase":"toUpperCase"]().replaceAll(/\W/g,"")},G={cnt:{total:{count:0}},set(e){if(!this.cnt[e.name]){const t=A("count-frame",e.enabled?"":"hidden",{dataset:{counter:e.name},title:e.query?decodeURIComponent(e.query):e.url,textContent:"0"});return this.cnt[e.name]={root:t,count:0},t}return this.cnt[e.name].root},update(e,t){this.cnt[t.name].count+=e,this.cnt.total.count+=e,this.updateAll()},updateAll(){for(const e of Object.values(this.cnt))O.text(e.root,e.count)},reset(){for(const[e,t]of Object.entries(this.cnt)){O.text(t.root,0),t.count=0;const n=o.engines.find((t=>e===t.name));n&&O.cl[n.enabled?"remove":"add"](t.root,"hidden")}}};const B=new class{webpage;host;domain;ready;injected;shadowRoot;supported;frame;cache;userjsCache;root;unsaved;isBlacklisted;rebuild;opacityMin;opacityMax;constructor(e){this.remove=this.remove.bind(this),this.refresh=this.refresh.bind(this),this.showError=this.showError.bind(this),this.toArr=this.toArr.bind(this),this.toElem=this.toElem.bind(this),this.webpage=this.strToURL(e),this.host=this.getHost(this.webpage.host),this.domain=this.getDomain(this.webpage.host),this.ready=!1,this.injected=!1,this.shadowRoot=void 0,this.supported=d(A("main-userjs").attachShadow),this.frame=this.supported?A("main-userjs",{dataset:{insertedBy:$.script.name,role:"primary-container"}}):A("iframe","mujs-iframe",{dataset:{insertedBy:$.script.name,role:"primary-iframe"},loading:"lazy",src:f,style:"position: fixed;bottom: 1rem;right: 1rem;height: 525px;width: 90%;margin: 0px 1rem;z-index: 100000000000000020 !important;",onload:e=>{const t=e.target;t.contentDocument&&(this.shadowRoot=t.contentDocument.documentElement,this.ready=!0,O.cl.add([this.shadowRoot,t.contentDocument.body],"mujs-iframe"))}}),this.supported&&(this.shadowRoot=this.frame.attachShadow({mode:"closed"}),this.ready=!0),this.cache=R.maps.container,this.userjsCache=R.maps.userjs,this.root=A("mujs-root"),this.unsaved=!1,this.isBlacklisted=!1,this.rebuild=!1,this.opacityMin="0.15",this.opacityMax="1",this.elementsReady=this.init();const t=class{constructor(){this.ids=[]}set(e,t){const{setTimeout:n}=p();return new Promise(((s,a)=>{const o=n((()=>{Object.is(t,null)||Object.is(t,void 0)?s():a(t),this.clear(o)}),e);this.ids.push(o)}))}clear(...e){const{clearTimeout:t}=p();this.ids=this.ids.filter((n=>!e.includes(n)||(t(n),!1)))}};this.timeouts={frame:new t,mouse:new t},this.injFN=()=>{},window.addEventListener("beforeunload",this.remove)}async inject(e,t){if(this.checkBlacklist(this.host))return n(`Blacklisted "${this.host}"`),void this.remove();if(this.shadowRoot&&null!==t){for(;!1===this.ready;)await new Promise((e=>requestAnimationFrame(e)));try{if(t.documentElement.appendChild(this.frame),this.injected)return void(d(this.injFN.build)&&this.injFN.build());if(this.shadowRoot.append(this.root),m(this.loadCSS('mujs-root {\n  --mujs-even-row: hsl(222, 14%, 22%);\n  --mujs-odd-row: hsl(222, 14%, 11%);\n  --mujs-even-err: hsl(0, 100%, 22%);\n  --mujs-odd-err: hsl(0, 100%, 11%);\n  --mujs-background-color: hsl(222, 14%, 33%);\n  --mujs-gf-color: hsl(204, 100%, 40%);\n  --mujs-sf-color: hsl(12, 86%, 50%);\n  --mujs-border-b-color: hsla(0, 0%, 0%, 0);\n  --mujs-gf-btn-color: hsl(211, 87%, 56%);\n  --mujs-sf-btn-color: hsl(12, 86%, 50%);\n  --mujs-sf-txt-color: hsl(12, 79%, 55%);\n  --mujs-txt-color: hsl(0, 0%, 100%);\n  --mujs-chck-color: hsla(0, 0%, 100%, 0.568);\n  --mujs-chck-gf: hsla(197, 100%, 50%, 0.568);\n  --mujs-chck-git: hsla(213, 13%, 16%, 0.568);\n  --mujs-chck-open: hsla(12, 86%, 50%, 0.568);\n  --mujs-placeholder: hsl(81, 56%, 54%);\n  --mujs-position-top: unset;\n  --mujs-position-bottom: 1em;\n  --mujs-position-left: unset;\n  --mujs-position-right: 1em;\n  --mujs-font-family: Arial, Helvetica, sans-serif;\n  font-family: var(--mujs-font-family, Arial, Helvetica, sans-serif);\n  text-rendering: optimizeLegibility;\n  word-break: normal;\n  font-size: 14px;\n  color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\n\nmujs-root * {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  scrollbar-color: var(--mujs-txt-color, hsl(0, 0%, 100%)) hsl(224, 14%, 21%);\n  scrollbar-width: thin;\n}\n@supports not (scrollbar-width: thin) {\n  mujs-root * ::-webkit-scrollbar {\n    width: 1.4vw;\n    height: 3.3vh;\n  }\n  mujs-root * ::-webkit-scrollbar-track {\n    background-color: hsl(224, 14%, 21%);\n    border-radius: 16px;\n    margin-top: 3px;\n    margin-bottom: 3px;\n    box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);\n  }\n  mujs-root * ::-webkit-scrollbar-thumb {\n    border-radius: 16px;\n    background-color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n    background-image: -webkit-linear-gradient(45deg, hsla(0, 0%, 100%, 0.2) 25%, transparent 25%, transparent 50%, hsla(0, 0%, 100%, 0.2) 50%, hsla(0, 0%, 100%, 0.2) 75%, transparent 75%, transparent);\n  }\n  mujs-root * ::-webkit-scrollbar-thumb:hover {\n    background: var(--mujs-txt-color, hsl(0, 0%, 100%));\n  }\n}\n\nmu-js {\n  line-height: normal;\n}\n\nmujs-section > label,\n.mujs-homepag e,\ntd.mujs-list,\n.install {\n  font-size: 16px;\n}\n\n.install,\n.mujs-homepage {\n  font-weight: 700;\n}\n\nmujs-section > label,\ntd.mujs-list {\n  font-weight: 500;\n}\n\n.mujs-invalid {\n  border-radius: 8px !important;\n  border-width: 2px !important;\n  border-style: solid !important;\n  border-color: hsl(0, 100%, 50%) !important;\n}\n\nmujs-tabs,\nmujs-column,\nmujs-row,\n.mujs-sty-flex {\n  display: flex;\n}\n\nmujs-column,\nmujs-row {\n  gap: 0.5em;\n}\n\nmujs-column count-frame[data-counter=greasyfork] {\n  background: var(--mujs-gf-color, hsl(204, 100%, 40%));\n}\nmujs-column count-frame[data-counter=sleazyfork] {\n  background: var(--mujs-sf-color, hsl(12, 86%, 50%));\n}\nmujs-column count-frame[data-counter=github] {\n  background: hsl(213, 13%, 16%);\n}\nmujs-column count-frame[data-counter=openuserjs] {\n  background: hsla(12, 86%, 50%, 0.568);\n}\n@media screen and (max-width: 800px) {\n  mujs-column {\n    flex-flow: row wrap;\n  }\n}\n\nmujs-row {\n  flex-flow: column wrap;\n}\n\nmu-js {\n  cursor: default;\n}\n\n.hidden {\n  display: none !important;\n  z-index: -1 !important;\n}\n\nmujs-main {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n  background: var(--mujs-background-color, hsl(222, 14%, 33%)) !important;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 16px;\n}\n@media screen and (max-height: 720px) {\n  mujs-main:not(.webext-page) {\n    height: 100% !important;\n    bottom: 0rem !important;\n    right: 0rem !important;\n    margin: 0rem !important;\n  }\n}\nmujs-main.expanded {\n  height: 100% !important;\n  bottom: 0rem !important;\n}\nmujs-main:not(.webext-page) {\n  position: fixed;\n  height: 492px;\n}\nmujs-main:not(.webext-page):not(.expanded) {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  right: 1rem;\n  bottom: 1rem;\n}\nmujs-main:not(.hidden) {\n  z-index: 100000000000000000 !important;\n  display: flex !important;\n  flex-direction: column !important;\n}\nmujs-main > * {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n}\nmujs-main mujs-toolbar {\n  order: 0;\n  padding: 0.5em;\n  display: flex;\n  place-content: space-between;\n}\nmujs-main mujs-toolbar mujs-tabs {\n  overflow: hidden;\n  order: 0;\n}\nmujs-main mujs-toolbar mujs-column {\n  flex-flow: row nowrap;\n  order: 999999999999;\n}\nmujs-main mujs-toolbar > * {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nmujs-main mujs-tabs {\n  gap: 0.5em;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  flex-flow: row wrap;\n}\nmujs-main mujs-tabs mujs-tab {\n  padding: 0.25em;\n  min-width: 150px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  place-content: space-between;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background: transparent;\n}\n@media screen and (max-width: 800px) {\n  mujs-main mujs-tabs mujs-tab {\n    min-width: 6em !important;\n  }\n}\nmujs-main mujs-tabs mujs-tab.active {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n}\nmujs-main mujs-tabs mujs-tab:not(.active):hover {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n}\nmujs-main mujs-tabs mujs-tab mujs-host {\n  float: left;\n  overflow: auto;\n  overflow-wrap: break-word;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\nmujs-main mujs-tabs mujs-tab mu-js {\n  float: right;\n}\nmujs-main mujs-tabs mujs-addtab {\n  order: 999999999999;\n  font-size: 20px;\n  padding: 0px 0.25em;\n}\nmujs-main mujs-tabs mujs-addtab:hover {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n}\nmujs-main mujs-tab,\nmujs-main mujs-btn,\nmujs-main input {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\nmujs-main input {\n  background: hsla(0, 0%, 0%, 0);\n  color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\nmujs-main input:not([type=checkbox]) {\n  border: transparent;\n  outline: none !important;\n}\nmujs-main mujs-page,\nmujs-main textarea {\n  background: inherit;\n  overflow-y: auto;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 5px;\n  outline: none;\n  font-family: monospace;\n  font-size: 14px;\n}\nmujs-main mujs-page {\n  padding: 0.5em;\n  margin: 0.5em;\n}\nmujs-main textarea {\n  overflow-y: auto;\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n  resize: vertical;\n}\nmujs-main textarea:focus {\n  outline: none;\n}\nmujs-main th,\nmujs-main .mujs-cfg *:not(input[type=password], input[type=text], input[type=number]) {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\nmujs-main .mujs-footer {\n  order: 3;\n  overflow-x: hidden;\n  text-align: center;\n  border-radius: 16px;\n}\nmujs-main .mujs-footer > * {\n  min-height: 50px;\n}\nmujs-main .mujs-footer .error:nth-child(even) {\n  background: var(--mujs-even-err, hsl(0, 100%, 22%)) !important;\n}\nmujs-main .mujs-footer .error:nth-child(odd) {\n  background: var(--mujs-odd-err, hsl(0, 100%, 11%)) !important;\n}\nmujs-main .mujs-prompt {\n  align-items: center;\n  justify-content: center;\n}\nmujs-main .mujs-prompt svg {\n  width: 14px;\n  height: 14px;\n  background: transparent;\n}\nmujs-main .mujs-prompt > .prompt {\n  position: absolute;\n  background: var(--mujs-background-color, hsl(222, 14%, 33%)) !important;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 16px;\n  text-align: center;\n  padding: 0.5em;\n  z-index: 1;\n}\nmujs-main .mujs-prompt > .prompt .prompt-head {\n  font-size: 18px;\n}\nmujs-main .mujs-prompt > .prompt .prompt-body {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 0.5em;\n  padding-top: 0.5em;\n}\nmujs-main .mujs-prompt > .prompt mujs-btn[data-command=prompt-deny] {\n  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n}\nmujs-main .mujs-prompt > .prompt mujs-btn[data-command=prompt-deny]:hover {\n  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n}\nmujs-main .mujs-prompt > .prompt mujs-btn[data-command=prompt-confirm] {\n  background: var(--mujs-gf-color, hsl(204, 100%, 40%));\n  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));\n}\nmujs-main .mujs-prompt > .prompt mujs-btn[data-command=prompt-confirm]:hover {\n  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n}\n\n.mainframe {\n  background: transparent;\n  position: fixed;\n  bottom: var(--mujs-position-bottom, 1rem);\n  right: var(--mujs-position-right, 1rem);\n  top: var(--mujs-position-top, unset);\n  left: var(--mujs-position-left, unset);\n}\n.mainframe count-frame {\n  width: fit-content;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  height: auto;\n  padding: 14px 16px;\n}\n.mainframe.error {\n  opacity: 1 !important;\n}\n.mainframe.error count-frame {\n  background: var(--mujs-even-err, hsl(0, 100%, 22%)) !important;\n}\n.mainframe:not(.hidden) {\n  z-index: 100000000000000000 !important;\n  display: block;\n}\n\ncount-frame {\n  border-radius: 1000px;\n  margin: 0px 3px;\n  padding: 4px 6px;\n  border: 2px solid var(--mujs-border-b-color, hsla(0, 0%, 0%, 0));\n  font-size: 16px;\n  font-weight: 400;\n  display: inline-block;\n  text-align: center;\n  min-width: 1em;\n  background: var(--mujs-background-color, hsl(222, 14%, 33%));\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmujs-header {\n  order: 1;\n  display: flex;\n  border-bottom: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 1em;\n  place-content: space-between;\n  height: fit-content;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  gap: 1em;\n}\nmujs-header > *:not(mujs-url) {\n  height: fit-content;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n}\nmujs-header mujs-url {\n  order: 0;\n  flex-grow: 1;\n}\nmujs-header mujs-url > input {\n  width: 100%;\n  height: 100%;\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 4px;\n}\nmujs-header .rate-container {\n  order: 1;\n}\nmujs-header .btn-frame {\n  order: 999999999999;\n}\n\nmujs-body {\n  order: 2;\n  overflow-x: hidden;\n  padding: 0px;\n  height: 100%;\n  border: 1px solid var(--mujs-border-b-color, hsla(0, 0%, 0%, 0));\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n}\nmujs-body .mujs-ratings {\n  padding: 0 0.25em;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 1000px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nmujs-body mu-jsbtn {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\nmujs-body table,\nmujs-body th,\nmujs-body td {\n  border-collapse: collapse;\n}\nmujs-body table {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n}\n@media screen and (max-width: 1180px) {\n  mujs-body table thead > tr {\n    display: table-column;\n  }\n  mujs-body table .frame:not(.webext-page) {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n  }\n  mujs-body table .frame:not(.webext-page) td {\n    margin: auto;\n  }\n  mujs-body table .frame:not(.webext-page) td > mujs-a,\n  mujs-body table .frame:not(.webext-page) td > mu-js,\n  mujs-body table .frame:not(.webext-page) td > mujs-column {\n    text-align: center;\n    justify-content: center;\n  }\n  mujs-body table .frame:not(.webext-page) td > mujs-a {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1180px) and (max-width: 800px) {\n  mujs-body table .frame:not(.webext-page) td > mujs-column {\n    flex-flow: column wrap;\n  }\n  mujs-body table .frame:not(.webext-page) td > mujs-column > mujs-row {\n    align-content: center;\n  }\n  mujs-body table .frame:not(.webext-page) td > mujs-column mujs-column {\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 1180px) {\n  mujs-body table .frame:not(.webext-page) td:not(.mujs-name, .install-btn) {\n    width: 25%;\n  }\n}\n@media screen and (max-width: 1180px) and (max-width: 800px) {\n  mujs-body table .frame:not(.webext-page) td.install-btn {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1180px) {\n  mujs-body table .frame:not(.webext-page) .mujs-name {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 550px) {\n  mujs-body table .frame:not(.webext-page) td {\n    margin: 1rem !important;\n  }\n  mujs-body table .frame:not(.webext-page) td:not(.mujs-name, .install-btn) {\n    width: auto !important;\n  }\n}\nmujs-body table th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: hsla(222, 14%, 33%, 0.75);\n  border-bottom: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\nmujs-body table th.mujs-header-name {\n  width: 50%;\n}\n@media screen and (max-width: 800px) {\n  mujs-body table th.mujs-header-name {\n    width: auto !important;\n  }\n}\nmujs-body table .frame:nth-child(even) {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;\n}\nmujs-body table .frame:nth-child(even) textarea {\n  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;\n}\nmujs-body table .frame:nth-child(odd) {\n  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;\n}\nmujs-body table .frame:nth-child(odd) textarea {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;\n}\nmujs-body table .frame:not([data-engine=sleazyfork], [data-engine=greasyfork]) mujs-a {\n  color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n}\nmujs-body table .frame:not([data-engine=sleazyfork], [data-engine=greasyfork]) mu-jsbtn {\n  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n}\nmujs-body table .frame:not([data-engine=sleazyfork], [data-engine=greasyfork]) mu-jsbtn:hover {\n  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n}\nmujs-body table .frame[data-engine=sleazyfork] mujs-a, mujs-body table .frame[data-engine=greasyfork] mujs-a {\n  color: var(--mujs-gf-color, hsl(197, 100%, 50%));\n}\nmujs-body table .frame[data-engine=sleazyfork] mujs-a:hover, mujs-body table .frame[data-engine=greasyfork] mujs-a:hover {\n  color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n}\nmujs-body table .frame[data-engine=sleazyfork] mu-jsbtn, mujs-body table .frame[data-engine=greasyfork] mu-jsbtn {\n  background: var(--mujs-gf-color, hsl(204, 100%, 40%));\n  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));\n}\nmujs-body table .frame[data-engine=sleazyfork] mu-jsbtn:hover, mujs-body table .frame[data-engine=greasyfork] mu-jsbtn:hover {\n  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n}\nmujs-body table .frame[data-good] mujs-a, mujs-body table .frame[data-author] mujs-a {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\nmujs-body table .frame[data-good] mujs-a:hover, mujs-body table .frame[data-author] mujs-a:hover {\n  color: hsl(81, 56%, 43%);\n}\nmujs-body table .frame[data-good] .mujs-list, mujs-body table .frame[data-author] .mujs-list {\n  color: hsl(0, 0%, 100%);\n}\nmujs-body table .frame[data-good] mu-jsbtn, mujs-body table .frame[data-author] mu-jsbtn {\n  color: hsl(215, 47%, 24%);\n  background: var(--mujs-placeholder, hsl(81, 56%, 54%));\n  border-color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\nmujs-body table .frame[data-good] mu-jsbtn:hover, mujs-body table .frame[data-author] mu-jsbtn:hover {\n  background: hsl(81, 56%, 65%);\n  border-color: hsl(81, 56%, 65%);\n}\nmujs-body table .frame.translated:not([data-good], [data-author]) mujs-a {\n  color: hsl(249, 56%, 65%);\n}\nmujs-body table .frame.translated:not([data-good], [data-author]) mujs-a:hover {\n  color: hsl(249, 56%, 85%);\n}\nmujs-body table .frame.translated:not([data-good], [data-author]) mu-jsbtn {\n  color: hsl(215, 47%, 85%);\n  background: hsl(249, 56%, 65%);\n  border-color: hsl(249, 56%, 65%);\n}\nmujs-body table .frame.translated:not([data-good], [data-author]) mu-jsbtn:hover {\n  background: hsl(249, 56%, 65%);\n  border-color: hsl(249, 56%, 65%);\n}\nmujs-body table .frame .mujs-ratings[data-el=good] {\n  border-color: hsl(120, 50%, 40%);\n  background-color: hsla(120, 50%, 40%, 0.102);\n  color: hsl(120, 100%, 60%);\n}\nmujs-body table .frame .mujs-ratings[data-el=ok] {\n  border-color: hsl(60, 100%, 30%);\n  background-color: hsla(60, 100%, 30%, 0.102);\n  color: hsl(60, 100%, 50%);\n}\nmujs-body table .frame .mujs-ratings[data-el=bad] {\n  border-color: hsl(0, 100%, 30%);\n  background-color: hsla(0, 50%, 40%, 0.102);\n  color: hsl(0, 100%, 50%);\n}\nmujs-body table .frame svg {\n  width: 12px;\n  height: 12px;\n  fill: currentColor;\n  background: transparent;\n}\nmujs-body table .frame > td:not(.mujs-name) {\n  text-align: center;\n}\nmujs-body table .frame > .mujs-name > mujs-a {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nmujs-body table .frame > .mujs-name mu-jsbtn,\nmujs-body table .frame > .mujs-name mu-js {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\nmujs-body table .frame > .mujs-name > mu-jsbtn {\n  margin: auto;\n}\nmujs-body table .frame > .mujs-name > mujs-column > mu-jsbtn {\n  padding: 0px 7px;\n}\n@media screen and (max-width: 800px) {\n  mujs-body table .frame > .mujs-name > mujs-column > mu-jsbtn {\n    width: 100%;\n  }\n}\nmujs-body table .frame > .mujs-uframe > mujs-a {\n  font-size: 16px;\n  font-weight: 500;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\nmujs-body table .frame [data-el=more-info] > mujs-row {\n  gap: 0.25em;\n}\nmujs-body table .frame [data-el=matches] {\n  gap: 0.25em;\n  max-width: 40em;\n}\nmujs-body table .frame [data-el=matches] .mujs-grants {\n  display: inline-flex;\n  flex-flow: row wrap;\n  overflow: auto;\n  overflow-wrap: break-word;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-height: 5em;\n  gap: 0.2em;\n}\nmujs-body table .frame [data-el=matches] .mujs-grants > mujs-a {\n  display: inline;\n}\nmujs-body table .frame [data-el=matches] .mujs-grants > mujs-a:not([data-command]) {\n  cursor: default !important;\n  color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\nmujs-body table .frame [data-el=matches] .mujs-grants > mujs-a::after {\n  content: ", ";\n  color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\nmujs-body table .frame [data-el=matches] .mujs-grants > mujs-a:last-child::after {\n  content: "";\n}\n@media screen and (max-width: 800px) {\n  mujs-body table .frame [data-el=matches] {\n    width: 30em !important;\n  }\n}\nmujs-body table .frame [data-name=license] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n@media screen and (max-width: 800px) {\n  mujs-body table .frame [data-name=license] {\n    width: 100% !important;\n    width: -moz-available !important;\n    width: -webkit-fill-available !important;\n  }\n}\n\n@media screen and (max-width: 1150px) {\n  .mujs-cfg {\n    margin: 0px auto 1rem auto !important;\n  }\n}\n.mujs-cfg {\n  height: fit-content;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n}\n.mujs-cfg mujs-section {\n  border-radius: 16px;\n  padding: 0.5em;\n}\n.mujs-cfg mujs-section:nth-child(even) {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;\n}\n.mujs-cfg mujs-section:nth-child(even) input,\n.mujs-cfg mujs-section:nth-child(even) select {\n  background: var(--mujs-odd-row, hsl(222, 14%, 33%));\n}\n.mujs-cfg mujs-section:nth-child(even) select option {\n  background: var(--mujs-odd-row, hsl(222, 14%, 33%));\n}\n.mujs-cfg mujs-section:nth-child(even) select option:hover {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;\n}\n.mujs-cfg mujs-section:nth-child(odd) {\n  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;\n}\n.mujs-cfg mujs-section:nth-child(odd) input,\n.mujs-cfg mujs-section:nth-child(odd) select {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n}\n.mujs-cfg mujs-section:nth-child(odd) select option {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n}\n.mujs-cfg mujs-section:nth-child(odd) select option:hover {\n  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;\n}\n.mujs-cfg mujs-section[data-name=theme], .mujs-cfg mujs-section[data-name=exp], .mujs-cfg mujs-section[data-name=blacklist] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: 0.25em;\n}\n.mujs-cfg mujs-section[data-name=theme] > mujs-btn, .mujs-cfg mujs-section[data-name=exp] > mujs-btn, .mujs-cfg mujs-section[data-name=blacklist] > mujs-btn {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n}\n.mujs-cfg mujs-section[data-name=theme] > mujs-btn:hover, .mujs-cfg mujs-section[data-name=exp] > mujs-btn:hover, .mujs-cfg mujs-section[data-name=blacklist] > mujs-btn:hover {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;\n}\n.mujs-cfg mujs-section input[type=text]::-webkit-input-placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section input[type=text]::-moz-placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section input[type=text]:-ms-input-placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section input[type=text]::-ms-input-placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section input[type=text]::placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section > label:not([data-blacklist]) {\n  display: flex;\n  justify-content: space-between;\n}\n.mujs-cfg mujs-section > label[data-blacklist] {\n  display: grid;\n  grid-auto-flow: column;\n}\n.mujs-cfg mujs-section > label[data-blacklist]:not(.new-list) {\n  grid-template-columns: repeat(2, 1fr);\n}\n.mujs-cfg mujs-section > label.new-list {\n  order: 999999999999;\n}\n.mujs-cfg mujs-section > label.new-list mujs-add {\n  font-size: 20px;\n}\n.mujs-cfg mujs-section > label input:not([type=checkbox]) {\n  font-size: 14px;\n  position: relative;\n  border-radius: 4px;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\n.mujs-cfg mujs-section select,\n.mujs-cfg mujs-section select option {\n  color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border: 1px solid transparent;\n  list-style: none;\n  outline-style: none;\n  pointer-events: auto;\n}\n.mujs-cfg mujs-section select {\n  text-align: center;\n  border-radius: 4px;\n}\n.mujs-cfg mujs-section > *.sub-section {\n  padding: 0.2em;\n}\n.mujs-cfg mujs-section > *.sub-section[data-engine] {\n  flex-wrap: wrap;\n}\n.mujs-cfg mujs-section > *.sub-section[data-engine] input {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n}\n.mujs-cfg mujs-section > *.sub-section input[type=text] {\n  margin: 0.2em 0px;\n}\n.mujs-cfg .mujs-inlab {\n  position: relative;\n  width: 38px;\n}\n.mujs-cfg .mujs-inlab input[type=checkbox] {\n  display: none;\n}\n.mujs-cfg .mujs-inlab input[type=checkbox]:checked + label {\n  margin-left: 0;\n  background: var(--mujs-chck-color, hsla(0, 0%, 100%, 0.568));\n}\n.mujs-cfg .mujs-inlab input[type=checkbox]:checked + label:before {\n  right: 0px;\n}\n.mujs-cfg .mujs-inlab input[type=checkbox][data-name=greasyfork]:checked + label {\n  background: var(--mujs-gf-color, hsl(204, 100%, 40%));\n}\n.mujs-cfg .mujs-inlab input[type=checkbox][data-name=sleazyfork]:checked + label {\n  background: var(--mujs-sf-color, hsl(12, 86%, 50%));\n}\n.mujs-cfg .mujs-inlab input[type=checkbox][data-name=openuserjs]:checked + label {\n  background: var(--mujs-chck-open, hsla(12, 86%, 50%, 0.568));\n}\n.mujs-cfg .mujs-inlab input[type=checkbox][data-name=github]:checked + label {\n  background: var(--mujs-chck-git, hsla(213, 13%, 16%, 0.568));\n}\n.mujs-cfg .mujs-inlab label {\n  padding: 0;\n  display: block;\n  overflow: hidden;\n  height: 16px;\n  border-radius: 20px;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\n.mujs-cfg .mujs-inlab label:before {\n  content: "";\n  display: block;\n  width: 20px;\n  height: 20px;\n  margin: -2px;\n  background: var(--mujs-txt-color, hsl(0, 0%, 100%));\n  position: absolute;\n  top: 0;\n  right: 20px;\n  border-radius: 20px;\n}\n.mujs-cfg .mujs-sty-flex mujs-btn {\n  margin: auto;\n}\n.mujs-cfg .mujs-sty-flex mujs-btn[data-command=reset] {\n  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n}\n.mujs-cfg .mujs-sty-flex mujs-btn[data-command=reset]:hover {\n  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n}\n.mujs-cfg .mujs-sty-flex mujs-btn[data-command=save] {\n  background: var(--mujs-gf-color, hsl(204, 100%, 40%));\n  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));\n}\n.mujs-cfg .mujs-sty-flex mujs-btn[data-command=save]:hover {\n  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n}\n.mujs-cfg:not(.webext-page) {\n  margin: 1rem 25rem;\n}\n@media screen and (max-height: 720px) {\n  .mujs-cfg:not(.webext-page) {\n    height: 100%;\n    height: -moz-available;\n    height: -webkit-fill-available;\n    width: 100%;\n    width: -moz-available;\n    width: -webkit-fill-available;\n    overflow-x: auto;\n    padding: 0.5em;\n  }\n}\n\nmujs-a {\n  display: inline-block;\n}\n\n.mujs-name {\n  display: flex;\n  flex-flow: column wrap;\n  gap: 0.5em;\n}\n.mujs-name span {\n  font-size: 0.8em !important;\n}\n\nmujs-btn {\n  font-style: normal;\n  font-weight: 500;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  text-align: center;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  font-size: 16px;\n  border-radius: 4px;\n  line-height: 1;\n  padding: 6px 15px;\n}\nmujs-btn svg {\n  width: 14px;\n  height: 14px;\n  fill: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\n\nmu-jsbtn {\n  font-size: 14px;\n  border-radius: 4px;\n  font-style: normal;\n  padding: 7px 15%;\n  font-weight: 400;\n  font-variant: normal;\n  line-height: normal;\n  display: block;\n  text-align: center;\n}\n\nmujs-a,\nmu-jsbtn,\n.mujs-pointer,\n.mujs-cfg mujs-section *:not(input[type=text], input[type=number], [data-theme], [data-blacklist]),\n.mainbtn,\n.mainframe,\nmujs-btn {\n  cursor: pointer !important;\n}\n',"primary-stylesheet")))throw new Error("Failed to initialize script!",{cause:"loadCSS"});this.injected=!0,this.initFn(),this.elementsReady&&d(e)&&(this.injFN=e.call(this,this.shadowRoot))}catch(e){n(e),this.remove()}}}initFn(){this.renderTheme(o.theme),G.cnt.total.root=this.mainbtn;for(const e of o.engines)this.countframe.append(G.set(e));const{cfgpage:e,table:t,supported:n,frame:s,refresh:a,cache:r,urlBar:i,host:l}=this;this.tab=new class{constructor(e){this.pool=new Set,this.blank=f,this.protocal="mujs:",this.protoReg=new RegExp(`${this.protocal}(.+)`,"i"),this.el={add:A("mujs-addtab",{textContent:"+",dataset:{command:"new-tab"}}),head:A("mujs-tabs"),root:e},this.el.head.append(this.el.add),this.el.root.append(this.el.head),this.custom=()=>{}}getTab(e){return[...this.pool].find((({dataset:t})=>e===t.host))}getActive(){return[...this.pool].find((e=>e.classList.contains("active")))}intFN(a){a.startsWith(this.protocal)&&"settings"===a.match(this.protoReg)[1]&&(O.cl.remove(e,"hidden"),O.cl.add(t,"hidden"),n||O.attr(s,"style","height: 100%;"))}active(n,s=!0){if(this.pool.has(n)||this.pool.add(n),O.cl.add(e,"hidden"),O.cl.remove(t,"hidden"),O.cl.remove([...this.pool],"active"),O.cl.add(n,"active"),!s)return;const o=n.dataset.host??this.blank;o===this.blank?a():o.startsWith(this.protocal)?this.intFN(o):this.custom(o)}close(e){this.pool.has(e)&&this.pool.delete(e);const t=e.dataset.host;o.clearTabCache&&r.has(t)&&r.delete(t),e.classList.contains("active")&&a();const n=e.nextElementSibling??e.previousElementSibling;n&&"new-tab"!==n.dataset.command&&this.active(n),e.remove()}create(e=void 0){if("string"==typeof e){const t=this.getTab(e);if(this.protoReg.test(e)&&t)return void this.active(t)}const t=A("mujs-tab",{dataset:{command:"switch-tab"},style:`order: ${this.el.head.childElementCount};`}),n=A("mu-js",{dataset:{command:"close-tab"},title:C("close"),textContent:"X"}),s=A("mujs-host");if(t.append(s,n),this.el.head.append(t),this.active(t,!1),m(e))a(),i.placeholder=C("newTab"),t.dataset.host=this.blank,s.title=C("newTab"),s.textContent=C("newTab");else if(e.startsWith(this.protocal)){const n=e.match(this.protoReg)[1];t.dataset.host=e||l,s.title=n||t.dataset.host,s.textContent=s.title,this.intFN(e)}else t.dataset.host=e||l,s.title=e||l,s.textContent=s.title;return t}}(this.toolbar),this.tab.create(l);const c=this.tabbody,d=(e,t)=>e.children[t].dataset.value||e.children[t].textContent;for(const e of this.tabhead.rows[0].cells)O.text(e)!==C("install")&&(O.cl.add(e,"mujs-pointer"),L(e,"click",(()=>{var t,n;Array.from(c.querySelectorAll("tr")).sort((t=Array.from(e.parentNode.children).indexOf(e),n=this.asc=!this.asc,(e,s)=>{return a=d(n?e:s,t),o=d(n?s:e,t),""===a||""===o||isNaN(a)||isNaN(o)?a.toString().localeCompare(o):a-o;var a,o})).forEach((e=>c.appendChild(e)))})))}init(){try{this.mainframe=A("mu-js","mainframe",{style:`opacity: ${this.opacityMin};`}),this.countframe=A("mujs-column"),this.mainbtn=A("count-frame","mainbtn",{textContent:"0"}),this.urlBar=A("input","mujs-url-bar",{autocomplete:"off",spellcheck:!1,type:"text",placeholder:C("search_placeholder")}),this.rateContainer=A("mujs-column","rate-container"),this.footer=A("mujs-row","mujs-footer"),this.tabbody=A("tbody"),this.promptElem=A("mujs-row","mujs-prompt"),this.toolbar=A("mujs-toolbar"),this.table=A("table"),this.tabhead=A("thead"),this.header=A("mujs-header"),this.tbody=A("mujs-body"),this.cfgpage=A("mujs-row","mujs-cfg hidden"),this.btnframe=A("mujs-column","btn-frame"),this.fsearch=A("mujs-btn","hidden"),this.btnHandles=A("mujs-column","btn-handles"),this.btnHide=A("mujs-btn","hide-list",{title:C("min"),innerHTML:U.load("minus"),dataset:{command:"hide-list"}}),this.btnfullscreen=A("mujs-btn","fullscreen",{title:C("max"),innerHTML:U.load("expand"),dataset:{command:"fullscreen"}}),this.main=A("mujs-main","hidden"),this.urlContainer=A("mujs-url"),this.closebtn=A("mujs-btn","close",{title:C("close"),innerHTML:U.load("close"),dataset:{command:"close"}}),this.btncfg=A("mujs-btn","settings hidden",{title:"Settings",innerHTML:U.load("gear"),dataset:{command:"settings"}}),this.btnhome=A("mujs-btn","github hidden",{title:`GitHub (v${$.script.version.includes(".")||$.script.version.includes("Book")?$.script.version:$.script.version.slice(0,5)})`,innerHTML:U.load("github"),dataset:{command:"open-tab",webpage:$.script.namespace}}),this.btnissue=A("mujs-btn","issue hidden",{innerHTML:U.load("issue"),title:C("issue"),dataset:{command:"open-tab",webpage:$.script.bugs??"https://github.com/magicoflolis/Userscript-Plus/issues"}}),this.btngreasy=A("mujs-btn","greasy hidden",{title:"Greasy Fork",innerHTML:U.load("globe"),dataset:{command:"open-tab",webpage:"https://greasyfork.org/scripts/421603"}}),this.btnnav=A("mujs-btn","nav",{title:"Navigation",innerHTML:U.load("nav"),dataset:{command:"navigation"}});return((e=[])=>{const t=A("tr");for(const n of e){const e=A("th",n.class??"",n);t.append(e)}this.tabhead.append(t),this.table.append(this.tabhead,this.tabbody)})([{class:"mujs-header-name",textContent:C("name")},{textContent:C("createdby")},{textContent:C("daily_installs")},{textContent:C("updated")},{textContent:C("install")}]),w?(O.cl.add([this.btnHide,this.btnfullscreen,this.closebtn],"hidden"),this.btnframe.append(this.btnHide,this.btnfullscreen,this.closebtn,this.btnhome,this.btngreasy,this.btnissue,this.btncfg,this.btnnav)):(this.btnHandles.append(this.btnHide,this.btnfullscreen,this.closebtn),this.btnframe.append(this.btnhome,this.btngreasy,this.btnissue,this.btncfg,this.btnnav)),this.toolbar.append(this.btnHandles),this.urlContainer.append(this.urlBar),this.header.append(this.urlContainer,this.rateContainer,this.countframe,this.btnframe),this.tbody.append(this.table,this.cfgpage),this.main.append(this.toolbar,this.header,this.tbody,this.footer,this.promptElem),this.mainframe.append(this.mainbtn),this.root.append(this.mainframe,this.main),!0}catch(e){n(e)}return!1}remove(){R.store.clear(),this.frame&&this.frame.remove()}async save(){return this.unsaved=!1,await N.setValue("Config",o),s("Saved config:",o),this.redirect(),o}loadCSS(e,t="CSS"){try{if("string"!=typeof t)throw new Error('"name" must be a typeof "string"',{cause:"loadCSS"});if(z(`style[data-role="${t}"]`,this.root))return z(`style[data-role="${t}"]`,this.root);if("string"!=typeof e)throw new Error('"css" must be a typeof "string"',{cause:"loadCSS"});if(u(e))throw new Error(`"${t}" contains empty CSS string`,{cause:"loadCSS"});const n=h(this.root.shadowRoot)?this.root:this.root.shadowRoot;if(v){let s;if(d(GM.addElement)?s=GM.addElement(n,"style",{textContent:e}):d(GM_addElement)&&(s=GM_addElement(n,"style",{textContent:e})),l(s))return s.dataset.insertedBy=$.script.name,s.dataset.role=t,s}const s=A("style",{textContent:e,dataset:{insertedBy:$.script.name,role:t}});return n.appendChild(s),s}catch(e){n(e)}}checkBlacklist(e){e=e||this.host;let t=!1;/accounts*\.google\./.test(this.webpage.host)&&(t=!0);for(const n of T(o.blacklist))if("string"==typeof n){if(n.startsWith("userjs-")){const s=/userjs-(\w+)/.exec(n)[1],a=_[s];if(i(a)){if(!a.test(e))continue;t=!0}else c(a)&&a.host===this.host&&(t=!0)}}else if(c(n)){if(!n.enabled)continue;if(!0===n.regex){if(!new RegExp(n.url,n.flags).test(e))continue;t=!0}if(Array.isArray(n.url))for(const s of n.url)e.includes(s)&&(t=!0);if(!e.includes(n.url))continue;t=!0}return this.isBlacklisted=t,this.isBlacklisted}getInfo(e){const t=this.strToURL(e||this.webpage),n=this.getHost(t.host);return{domain:this.getDomain(t.host),host:n,webpage:t}}getHost(e=""){return e.split(".").splice(-2).join(".")}getDomain(e=""){return e.split(".").at(-2)??f}renderTheme(e){if((e=e||o.theme)===x.theme)return;const t=this.root.style;for(const[n,s]of Object.entries(e)){const a=`--mujs-${n}`,o=t.getPropertyValue(a);h(s)&&(e[n]=o),o!==s&&(t.removeProperty(a),t.setProperty(a,s))}}makePrompt(e,t={},n=!0){if(z(".prompt",this.promptElem))for(const e of S(".prompt",this.promptElem))e.dataset.prompt&&e.remove();const s=A("mu-js","prompt",{dataset:{prompt:e}}),a=A("mu-js","prompt-head",{innerHTML:`${U.load("refresh")} ${e}`});if(s.append(a),n){const e=A("mu-js","prompt-body",{dataset:t}),n=A("mujs-btn","prompt-confirm",{innerHTML:"Confirm",dataset:{command:"prompt-confirm"}}),a=A("mujs-btn","prompt-deny",{innerHTML:"Deny",dataset:{command:"prompt-deny"}});e.append(n,a),s.append(e)}this.promptElem.append(s)}showError(...e){n(...e);const t=A("mu-js","error");let s="";for(const t of e)s+=`${"string"==typeof t?t:`${t.cause?`[${t.cause}] `:""}${t.message}${t.stack?` ${t.stack}`:""}`}\n`,c(t)&&t.notify&&O.cl.add(this.mainframe,"error");const{createTextNode:a}=p();t.appendChild(a(s)),this.footer.append(t)}toArr(){return Array.from(this.userjsCache.values()).filter((({_mujs:e})=>l(e.root)&&e.info.engine.enabled))}toElem(){return this.toArr().map((({_mujs:e})=>e.root))}refresh(){this.urlBar.placeholder=C("newTab"),G.reset(),O.cl.remove(this.toElem(),"hidden"),O.cl.remove(S("mujs-section[data-name]",this.cfgpage),"hidden"),O.prop([this.tabbody,this.rateContainer,this.footer],"innerHTML","")}strToURL(e){const t=window.location??f;try{return r(e=e??t).includes("URL")?e:new URL(e)}catch(e){e.cause="strToURL",this.showError(e)}return t}redirect(){const e=window.top.location,{hostname:t}=e,n=/greasyfork\.org/.test(t);if(!n&&o.sleazyredirect)return;const a=n?"sleazyfork":"greasyfork";if(z("span.sign-in-link")&&/scripts\/\d+/.test(e.href)&&!z("#script-info")&&("greasyfork"==a||z("div.width-constraint>section>p>a"))){const t=e.href.replace(/\/\/([^.]+\.)?(greasyfork|sleazyfork)\.org/,"//$1"+a+".org");s(`Redirecting to "${t}"`),d(e.assign)?e.assign(t):e.href=t}}};function D(){const t={build:async()=>{}};try{const{scheduler:r}=p(),{mainframe:T,urlBar:E,rateContainer:$,footer:N,tabbody:I,cfgpage:D,fsearch:q,btnfullscreen:V,main:P,tab:W,showError:Z}=B,K=B.timeouts.frame,J=R.maps.cfg,X=()=>{for(const e of o.engines)if(J.has(e.name)){if(J.get(e.name).checked=e.enabled,"github"===e.name){const t=J.get("github-token");O.prop(t,"value",e.token)}}for(const[e,t]of Object.entries(o))if("boolean"==typeof t&&J.has(e)){const n=J.get(e);"checkbox"===n.type?n.checked=t:O.prop(n,"value",t)}for(const[e,t]of Object.entries(o.theme))O.prop(J.get(e),"value",t);B.renderTheme(o.theme)},Y=async e=>{const t=window.top.location;d(t.assign)?t.assign(e.href):t.href=e.href,e.remove(),await H()},Q=(e,t,n,s)=>{const a=e._mujs.code[t]??e._mujs.code.data_meta[t];if(h(a)){const e=A("mujs-a",{textContent:C("listing_none")});n.append(e)}else if(O.prop(n,"innerHTML",""),O.cl.remove(s,"hidden"),c(a))if("resource"===t)for(const[e,t]of Object.entries(a)){const s=A("mujs-a",{textContent:e??"ERROR"});t.startsWith("http")&&(s.dataset.command="open-tab",s.dataset.webpage=t),n.append(s)}else{const e=A("mujs-a",{textContent:a.text});a.domain&&(e.dataset.command="open-tab",e.dataset.webpage=`https://${a.text}`),n.append(e)}else if("string"==typeof a){const e=A("mujs-a",{textContent:a});n.append(e)}else for(const e of a)if("string"==typeof e&&e.startsWith("http")){const t=A("mujs-a",{textContent:e,dataset:{command:"open-tab",webpage:e}});n.append(t)}else if(c(e)){const t=A("mujs-a",{textContent:e.text});e.domain&&(t.dataset.command="open-tab",t.dataset.webpage=`https://${e.text}`),n.append(t)}else{const t=A("mujs-a",{textContent:e});n.append(t)}};if(L(P,w?"touchend":"click",(async e=>{try{const n=e.target.closest("[data-command]");if(!n)return;const s=/prompt-/.test(n.dataset.command);let r=n.dataset,i=r.command,l=!1;if(s&&(r=n.parentElement.dataset,i=r.command,l=/confirm/.test(n.dataset.command),n.parentElement.parentElement.remove()),"install-script"===i&&r.userjs){let e=r.userjs;if(!s&&r.userjs.endsWith(".user.css"))return void B.makePrompt(C("prmpt_css"),r);s!==l&&(e=r.userjs.replace(/\.user\.css$/,".user.js"));const t=A("a",{onclick(e){e.preventDefault(),Y(e.target)}});t.href=e,t.click()}else{if("open-tab"===i&&r.webpage){if(v){if(d(GM.openInTab))return GM.openInTab(r.webpage);if(d(GM_openInTab))return GM_openInTab(r.webpage,{active:!0,insert:!0})}return window.open(r.webpage,"_blank")}if("navigation"===i)for(const e of S("mujs-btn",n.parentElement))O.cl.has(e,"nav")||(O.cl.has(e,"hidden")?O.cl.remove(e,"hidden"):O.cl.add(e,"hidden"));else if("list-description"===i){const e=[],t=new Set(["TD","MUJS-A","MU-JS"]);for(const s of n.parentElement.childNodes)t.has(s.tagName)||"TEXTAREA"===s.tagName&&h(s.value)||e.push(s);n.nextElementSibling&&(e.push(n.nextElementSibling),n.nextElementSibling.nextElementSibling&&e.push(n.nextElementSibling.nextElementSibling)),O.cl.has(e[0],"hidden")?O.cl.remove(e,"hidden"):O.cl.add(e,"hidden")}else if("close"===i)B.remove();else if("show-filter"===i)O.cl.toggle(q,"hidden");else if("fullscreen"===i)O.cl.has(V,"expanded")?(O.cl.remove([V,P],"expanded"),O.prop(V,"innerHTML",U.load("expand"))):(O.cl.add([V,P],"expanded"),O.prop(V,"innerHTML",U.load("collapse")));else if("hide-list"===i)O.cl.add(P,"hidden"),O.cl.remove(T,"hidden"),oe();else if("save"===i){if(B.rebuild=!0,O.prop($,"innerHTML",""),!O.prop(n,"disabled")){const e=await B.save();B.rebuild&&(B.cache.clear(),e.autofetch&&t.build()),B.unsaved=!1,B.rebuild=!1}}else if("reset"===i){if(o=x,O.cl.remove(T,"error"),z(".error",N))for(const e of S(".error",N))e.remove();B.unsaved=!0,B.rebuild=!0,X()}else if("settings"===i)B.unsaved&&Z("Unsaved changes"),W.create("mujs:settings"),B.rebuild=!1;else if("new-tab"===i)W.create();else if("switch-tab"===i)W.active(n);else if("close-tab"===i&&n.parentElement)W.close(n.parentElement);else if("download-userjs"===i){if(!B.userjsCache.has(+r.userjs))return;const e=B.userjsCache.get(+r.userjs);let t=e.code_url;if(!s&&e.code_url.endsWith(".user.css"))return void B.makePrompt("Download as UserStyle?",r);s!==l&&(t=e.code_url.replace(/\.user\.css$/,".user.js"));const n=(await e._mujs.code.request(!1,t)).data;if("string"!=typeof n)return;const a=r.userjsName??r.userjs,o=s!==l?".user.js":".user.css",i=new Blob([n],{type:"text/plain"}),c=A("a","mujs_Downloader");c.href=URL.createObjectURL(i),c.download=`${a}${o}`,c.click(),URL.revokeObjectURL(c.href),c.remove()}else if("load-userjs"===i||"load-header"===i){if(!B.userjsCache.has(+r.userjs))return;const e=z("textarea",n.parentElement.parentElement);if(!h(e.value)&&i===e.dataset.load)return void O.cl.toggle(e,"hidden");e.dataset.load=i;const t=B.userjsCache.get(+r.userjs),s=await t._mujs.code.request();if("string"!=typeof s.data_code_block)return void(e.value="An error occured");e.value="load-userjs"===i?s.data_code_block:s.data_meta_block,O.cl.remove(e,"hidden");for(const e of S('mujs-column[data-el="matches"]',n.parentElement.parentElement))Q(t,e.dataset.type,z(".mujs-grants",e),e)}else if("load-page"===i){if(!B.userjsCache.has(+r.userjs))return;let e=z("mujs-page",n.parentElement.parentElement);if(!e){e=A("mujs-page"),n.parentElement.parentElement.append(e);const t=B.userjsCache.get(+r.userjs),s=t._mujs.info.engine;let a;if(s.name.includes("fork")){const{navigator:e}=p(),n=e.language.split("-")[0]??"en";a=t.url.replace(/\/scripts/,`/${/^(zh|fr|es)/.test(n)?e.language:n}/scripts`)}else{if(s.name.includes("github")){const n=await F.req(t.page_url,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${s.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).catch((()=>({})));if(!n.download_url)return;const a=await F.req(n.download_url,"GET","text");if(B.supported){const t=e.attachShadow({mode:"closed"}),n=A("div",{innerHTML:a});t.append(n)}return}a=t.url}if(!a)return;const o=await F.req(a,"GET","document"),i=()=>{let e="An error occured";const n=new URL(t.url),s=z(".user-content",o.documentElement);for(const e of S("[href]",s))e.target="_blank",e.style="pointer-events: auto;",e.href.startsWith("/")&&(e.href=`${n.origin}${e.href}`);for(const e of S("img[src]",s))e.style="max-width: 25em; max-height: 25em; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;";return e=s?s.innerHTML:"No additional info available",e};if(B.supported){const t=e.attachShadow({mode:"closed"}),n=A("div",{style:"pointer-events: none;",innerHTML:i()});t.append(n)}return}if(!O.cl.has(e,"hidden"))return void O.cl.add(e,"hidden");O.cl.remove(e,"hidden")}else if(/export-/.test(i)){const e=JSON.stringify("export-cfg"===i?o:o.theme,null," "),t=(new TextEncoder).encode(e),n=new Blob([t],{type:"application/json;charset=utf-8"}),s=A("a","mujs-exporter",{href:URL.createObjectURL(n),download:`Magic_Userscript_${"export-cfg"===i?"config":"theme"}.json`});s.click(),URL.revokeObjectURL(s.href)}else if(/import-/.test(i)){if(z("input",n.parentElement))return void z("input",n.parentElement).click();const e=A("input","hidden",{type:"file",accept:".json",onchange(n){try{[...n.target.files].forEach((n=>{const s=new FileReader;s.readAsText(n),s.onload=()=>{const r=JSON.parse(s.result);r.blacklist?(a(`Imported config: { ${n.name} }`,r),o=r,B.unsaved=!0,B.rebuild=!0,X(),B.save().then((e=>{B.cache.clear(),e.autofetch&&t.build(),B.unsaved=!1,B.rebuild=!1}))):(a(`Imported theme: { ${n.name} }`,r),o.theme=r,B.renderTheme(o.theme)),e.remove()},s.onerror=()=>{Z(s.error),e.remove()}}))}catch(t){Z(t),e.remove()}}});n.parentElement.append(e),e.click()}}}catch(e){Z(e)}})),L(P,"auxclick",(e=>{if(1!==e.button)return;const t=e.target.closest("[data-command]");if(!t)return;const n=t.dataset.command;"switch-tab"===n||"close-tab"===n?W.close(t):"new-tab"===n&&W.create()})),!w){const e=async(e,t)=>{"mouseenter"===t?(K.clear(...K.ids),B.timeouts.mouse.clear(...B.timeouts.mouse.ids),e.style.opacity=B.opacityMax):"mouseleave"===t&&(await B.timeouts.mouse.set(o.time),e.style.opacity=B.opacityMin)};for(const t of["mouseenter","mouseleave"])L(P,t,(t=>{t.preventDefault(),t.stopPropagation(),e(t.target,t.type)}))}L(P,"updateditem",(e=>{const t=e.detail;if(t._mujs){for(const e of S("[data-name]",t._mujs.root)){const n=e.dataset.name;"code"!==n?t[n]&&("license"===n?(O.attr(e,"title",t.license??C("no_license")),O.text(e,`${C("license")}: ${t.license??C("no_license")}`)):"code_updated_at"===n?(O.text(e,k.toDate(t.code_updated_at)),e.dataset.value=new Date(t.code_updated_at).toISOString()):"created_date"===n?(O.text(e,`${C("created_date")}: ${k.toDate(t.created_at)}`),e.dataset.value=new Date(t.created_at).toISOString()):"total_installs"===n?O.text(e,`${C("total_installs")}: ${k.toNumber(t.total_installs)}`):O.text(e,t[n])):t._mujs.code.data_code_block&&(o.preview.code&&!o.preview.metadata?e.value=t._mujs.code.data_code_block:o.preview.metadata&&!o.preview.code?e.value=t._mujs.code.data_meta_block:e.value=`${t._mujs.code.META_START_COMMENT}${t._mujs.code.data_meta_block}${t._mujs.code.META_END_COMMENT}${t._mujs.code.data_code_block}`)}if(t._mujs.code.data_code_block)for(const e of S('mujs-column[data-el="matches"]',t._mujs.root))Q(t,e.dataset.type,z(".mujs-grants",e),e);B.userjsCache.has(t.id)&&B.userjsCache.set(t.id,t)}}));const ee=["com","net","org","de","co.uk"],te=["http://*","https://*","http://*/*","https://*/*","http*://*","http*://*/*","*","*://*","*://*/*","http*"];class ne{code;data_meta_block;data_code_block;data_meta;data_names;constructor(e,t){this.code=e,this.META_START_COMMENT=t?"/* ==UserStyle==":"// ==UserScript==",this.META_END_COMMENT=t?"==/UserStyle== */":"// ==/UserScript==",this.get_meta_block(),this.get_code_block(),this.parse_meta(),this.calculate_applies_to_names()}get_meta_block(){if(h(this.code))return null;if(this.data_meta_block)return this.data_meta_block;const e=this.code.indexOf(this.META_START_COMMENT);if(m(e))return null;const t=this.code.indexOf(this.META_END_COMMENT,e);if(m(t))return null;const n=this.code.substring(e+this.META_START_COMMENT.length,t);return this.data_meta_block=n,this.data_meta_block}get_code_block(){if(h(this.code))return null;if(this.data_code_block)return this.data_code_block;const e=this.code.indexOf(this.META_START_COMMENT);if(m(e))return null;const t=this.code.indexOf(this.META_END_COMMENT,e);if(m(t))return null;const n=this.code.substring(t+this.META_END_COMMENT.length,this.code.length);return this.data_code_block=n.split("\n").filter((e=>!h(e))).join("\n"),this.data_code_block}parse_meta(){if(h(this.code))return null;if(this.data_meta)return this.data_meta;const e={},t=new Map;for(const e of this.get_meta_block().split("\n")){const n=/\/\/\s+@([a-zA-Z:-]+)\s+(.*)/.exec(e);if(!n)continue;const s=n[1].trim(),a=n[2].trim();t.has(s)||t.set(s,[]);const o=t.get(s);o.push(a),t.set(s,o)}for(const[n,s]of t)s.length>1?e[n]=s:e[n]=s[0];return this.data_meta=e,this.data_meta}calculate_applies_to_names(){if(h(this.code))return null;if(this.data_names)return this.data_names;let e=[];for(const[t,n]of Object.entries(this.parse_meta()))/include|match/i.test(t)&&(e=Array.isArray(n)?e.concat(n):e.concat([n]));if(h(e))return[];if(this.intersect(e,te))return this.data_names=[{domain:!1,text:"All sites",tld_extra:!1}],this.data_names;const t=new Map,s=e=>{t.has(e.text)||t.set(e.text,e)};for(let t of e)try{const e=t;let n=[];if(t.match(/^\/(.*)\/$/))n=[t];else{let e=/^\*(https?:.*)/i.exec(t);e&&(t=e[1]),t=t.replace(/^\*:/i,"http:").replace(/^\*\/\//i,"http://").replace(/^http\*:/i,"http:").replace(/^(https?):([^/])/i,"$1://$2"),e=/^([a-z]+:\/\/)\*\.?([a-z0-9-]+(?:.[a-z0-9-]+)+.*)/i.exec(t),e&&(t=e[1]+e[2]),e=/^\*\.?([a-z0-9-]+\.[a-z0-9-]+.*)/i.exec(t),e&&(t=`http://${e[1]}`),e=/^http\*(?:\/\/)?\.?((?:[a-z0-9-]+)(?:\.[a-z0-9-]+)+.*)/i.exec(t),e&&(t=`http://${e[1]}`),e=/^([a-z]+:\/\/([a-z0-9-]+(?:\.[a-z0-9-]+)*\.))\*(.*)/.exec(t),e&&e[2].match(/A([0-9]+\.){2,}z/)?(t=`${e[1]}tld${e[3]}`,n=[t.split("*")[0]]):n=[t]}for(const t of n)try{const n=new URL(t),{host:a}=n;if(m(a))s({text:e,domain:!1,tld_extra:!1});else if(!a.includes(".")&&a.includes("*"))s({text:e,domain:!1,tld_extra:!1});else if(a.endsWith(".tld"))for(let e=0;e<ee.length;e++){const t=ee[e];s({text:a.replace(/tld$/i,t),domain:!0,tld_extra:0!=e})}else a.endsWith(".")?s({text:a.slice(0,-1),domain:!0,tld_extra:!1}):s({text:a,domain:!0,tld_extra:!1})}catch(t){s({text:e,domain:!1,tld_extra:!1})}}catch(e){n(e)}return this.data_names=[...t.values()],this.data_names}intersect(e,...t){return!u([...new Set(e)].filter((e=>t.every((t=>t.includes(e))))))}}const se={id:0,bad_ratings:0,good_ratings:0,ok_ratings:0,daily_installs:0,total_installs:0,name:"NOT FOUND",description:"NOT FOUND",version:"0.0.0",url:f,code_url:f,created_at:Date.now(),code_updated_at:Date.now(),locale:"NOT FOUND",deleted:!1,users:[]},ae=(e="",t={})=>{if(!t.root||!t.type)return;const{root:n,type:s}=t,a=A("mu-js","mujs-list",{textContent:`${e}: `}),o=A("mu-js","mujs-grants"),r=A("mujs-column","mujs-list",{dataset:{el:"matches",type:s}});r.append(a,o),n.append(r);const i=t.list??[];if(h(i)){const e=A("mujs-a",{textContent:C("listing_none")});return o.append(e),void O.cl.add(r,"hidden")}for(const e of i)if("string"==typeof e&&e.startsWith("http")){const t=A("mujs-a",{textContent:e,dataset:{command:"open-tab",webpage:e}});o.append(t)}else if(c(e))if("resource"===s)for(const[t,n]of Object.entries(e)){const e=A("mujs-a",{textContent:t??"ERROR"});n.startsWith("http")&&(e.dataset.command="open-tab",e.dataset.webpage=n),o.append(e)}else{const t=A("mujs-a",{textContent:e.text});e.domain&&(t.dataset.command="open-tab",t.dataset.webpage=`https://${e.text}`),o.append(t)}else{const t=A("mujs-a",{textContent:e});o.append(t)}},oe=async e=>{if(K.clear(...K.ids),O.cl.has(T,"hidden"))return;let t=1e4;return"number"!=typeof(e=e??o.time??x.time)||Number.isNaN(e)||(t=B.isBlacklisted?e/2:e),await K.set(t),B.remove(),K.clear(...K.ids)},re=(e,t)=>{if(421603===e.id)return;if(j.includes(e.id)||j.includes(e.url))return;B.userjsCache.has(e.id)||B.userjsCache.set(e.id,e);const n=A("td","install-btn"),s=A("td","mujs-uframe"),a=A("td","mujs-list",{textContent:e.daily_installs,dataset:{name:"daily_installs"}}),r=A("td","mujs-list",{textContent:k.toDate(e.code_updated_at),dataset:{name:"code_updated_at",value:new Date(e.code_updated_at).toISOString()}}),i=A("td","mujs-name"),l=A("mujs-column","mujs-list hidden",{dataset:{el:"more-info"}}),c=A("mujs-column","mujs-list hidden"),d=A("mujs-row","mujs-list"),u=A("mujs-row","mujs-list"),h=A("mujs-column","mujs-list"),p=A("mujs-a","mujs-homepage",{textContent:e.name,title:e.url,dataset:{command:"open-tab",webpage:e.url}}),f=A("mu-js","mujs-list",{textContent:`${C("version_number")}: ${e.version}`}),y=A("mu-js","mujs-list",{textContent:`${C("created_date")}: ${k.toDate(e.created_at)}`,dataset:{name:"created_at",value:new Date(e.created_at).toISOString()}}),w=A("mu-js","mujs-list",{title:e.license??C("no_license"),textContent:`${C("license")}: ${e.license??C("no_license")}`,dataset:{name:"license"}}),v=A("mu-js","mujs-list",{textContent:`${C("total_installs")}: ${k.toNumber(e.total_installs)}`,dataset:{name:"total_installs"}}),_=A("mu-js","mujs-list",{title:C("ratings"),textContent:`${C("ratings")}:`}),x=A("mu-js","mujs-list mujs-ratings",{title:C("good"),textContent:e.good_ratings,dataset:{name:"good_ratings",el:"good"}}),M=A("mu-js","mujs-list mujs-ratings",{title:C("ok"),textContent:e.ok_ratings,dataset:{name:"ok_ratings",el:"ok"}}),z=A("mu-js","mujs-list mujs-ratings",{title:C("bad"),textContent:e.bad_ratings,dataset:{name:"bad_ratings",el:"bad"}}),S=A("mu-js","mujs-list mujs-pointer",{title:e.description,textContent:e.description,dataset:{command:"list-description"}}),T=A("mu-jsbtn","install",{innerHTML:`${U.load("install")} ${C("install")}`,title:`${C("install")} "${e.name}"`,dataset:{command:"install-script",userjs:e.code_url}}),L=A("mu-jsbtn",{innerHTML:`${U.load("download")} ${C("saveFile")}`,dataset:{command:"download-userjs",userjs:e.id,userjsName:e.name}}),E=A("tr","frame",{dataset:{scriptId:e.id}}),$=A("textarea","code-area hidden",{dataset:{name:"code"},rows:"10",autocomplete:!1,spellcheck:!1,wrap:"soft"}),R=A("mu-jsbtn",{innerHTML:`${U.load("code")} ${C("preview_code")}`,dataset:{command:"load-userjs",userjs:e.id}}),N=A("mu-jsbtn",{innerHTML:`${U.load("code")} Metadata`,dataset:{command:"load-header",userjs:e.id}});E.dataset.engine=t,!t.includes("fork")&&o.recommend.others&&g.includes(e.url)&&(E.dataset.good="upsell");for(const t of e.users){const e=A("mujs-a",{innerHTML:t.name,title:t.url,dataset:{command:"open-tab",webpage:t.url}});o.recommend.author&&t.id===b&&(E.dataset.author="upsell",O.prop(e,"innerHTML",`${t.name} ${U.load("verified")}`)),s.append(e)}o.recommend.others&&g.includes(e.id)&&(E.dataset.good="upsell"),n.append(T),h.append(_,x,M,z),d.append(v,h,f,y),ae(C("code_size"),{list:e._mujs.code.code_size,type:"code_size",root:d}),u.append(w);const I=e._mujs.code?.data_meta??{};ae(C("antifeatures"),{list:I.antifeatures??[],type:"antifeatures",root:u}),ae(C("applies_to"),{list:e._mujs.code?.data_names??[],type:"data_names",root:u}),ae("@grant",{list:I.grant??[],type:"grant",root:u}),ae("@require",{list:I.require,type:"require",root:u}),ae("@resource",{list:m(I.resource)?[]:[I.resource],type:"resource",root:u}),l.append(d,u),c.append(L,R,N),i.append(p,S,l,c,$);const F=A("mu-jsbtn",{innerHTML:`${U.load("pager")} Page`,dataset:{command:"load-page",userjs:e.id}});c.append(F),e._mujs.code?.translated&&E.classList.add("translated");for(const e of[i,s,a,r,n])E.append(e);return e._mujs.root=E,e._mujs.root},ie=()=>{const e=new Map,t={pool:e,enabled:()=>[...e.values()].filter((e=>e.enabled)),refresh(){Object.is(e.size,0)||e.clear();for(const[t,n]of Object.entries(o.filters))e.has(t)||e.set(t,{...n,reg:new RegExp(n.regExp,n.flag),keyReg:new RegExp(t.trim().toLocaleLowerCase(),"gi"),valueReg:new RegExp(n.name.trim().toLocaleLowerCase(),"gi")});return this},get:t=>[...e.values()].find((e=>e.keyReg.test(t)||e.valueReg.test(t))),match({name:e,users:n}){const s=t.enabled();if(Object.is(s.length,0))return!0;for(const t of s)if([{name:e},...n].find((e=>e.name.match(t.reg))))return!1;return!0}};for(const[t,n]of Object.entries(o.filters))e.has(t)||e.set(t,{...n,reg:new RegExp(n.regExp,n.flag),keyReg:new RegExp(t.trim().toLocaleLowerCase(),"gi"),valueReg:new RegExp(n.name.trim().toLocaleLowerCase(),"gi")});return t.refresh()};class le{engines;intHost;constructor(e=void 0){this.build=this.build.bind(this),this.toArr=this.toArr.bind(this),this.groupBy=this.groupBy.bind(this),this.dispatch=this.dispatch.bind(this),this.sortRecords=this.sortRecords.bind(this),h(e)&&(e=B.host),this.engines=o.engines,this.host=e}dispatch(e){const{CustomEvent:t}=p(),n=new t("updateditem",{detail:e});P.dispatchEvent(n)}set host(e){if(this.intHost=e,!B.cache.has(e)){const t={};for(const e of o.engines)t[e.name]=[];B.cache.set(e,t)}this.blacklisted=B.checkBlacklist(e),this.blacklisted&&(Z(`Blacklisted "${e}"`),oe()),this.engines=o.engines.filter((t=>{if(!t.enabled)return!1;return!(y[t.name]??[]).includes(e)||(Z(`Engine: "${t.name}" unsupported on "${e}"`),oe(),!1)}))}get host(){return this.intHost}build(){try{B.refresh();const{blacklisted:t,engines:n,host:a,toArr:r,dispatch:i}=this;if(t||h(n))return B.opacityMin="0",void(T.style.opacity=B.opacityMin);const l=[],c=ie(),d=r();if(s("Building list",{hostCache:d,engines:n}),u(d))for(const t of n){s(`Fetching from "${t.name}" for "${a}"`);const n=e=>{e.cause||(e.cause=t.name),e.message.startsWith("429")?Z(`Engine: "${t.name}" Too many requests...`):Z(`Engine: "${t.name}"`,e.message)},r=n=>{const s={...se,...n,_mujs:{root:{},info:{engine:t,host:a},code:{meta:{},request:async function(t=!1,a){if(this.data_code_block)return this;a=a??n.code_url;const o=await F.req(a,"GET","text").catch(Z);if("string"!=typeof o)return this;const r=new ne(o,/\.user\.css/.test(a)),{data_meta:i}=r;if(t)for(const t of e.pool.keys())i[`name:${t}`]&&(Object.assign(s,{name:i[`name:${t}`]}),this.translated=!0),i[`description:${t}`]&&(Object.assign(s,{description:i[`description:${t}`]}),this.translated=!0);if(Array.isArray(i.grant)&&(i.grant=M(i.grant)),i.resource){const e={};if("string"==typeof i.resource){const t=/(.+)\s+(.+)/.exec(i.resource);t&&(e[t[1].trim()]=t[2])}else for(const t of i.resource){const n=/(.+)\s+(http.+)/.exec(t);n&&(e[n[1].trim()]=n[2])}i.resource=e}return Object.assign(this,{code_size:[F.format(o.length)],meta:i,...r}),this}}}};return s},d=e=>t.query?decodeURIComponent(t.query).replace(/\{host\}/g,a):e,p=async n=>{if(!n)return void Z("Invalid data received from the server, check internet connection");const s=(Array.isArray(n)?n:Array.isArray(n.query)?n.query:[]).filter(Boolean).filter((e=>!e.deleted)).filter(c.match);if(u(s))return;const a=s.map(r),l=[],d=a.filter((t=>!(o.filterlang&&!(t=>!!e.pool.has(t.locale.split("-")[0]??t.locale)||(l.push(t),!1))(t))));let m=d;const h=[];for(const e of l){(await e._mujs.code.request(!0)).translated&&h.push(e)}m=M(h,d);for(const e of m)e._mujs.code.data_code_block||!o.preview.code&&!o.preview.metadata||e._mujs.code.request().then((()=>{i(e)})),re(e,t.name)},f=async e=>{try{if(!e)return void Z("Invalid data received from the server, TODO fix this");const n=e.documentElement;if(/openuserjs/gi.test(t.name)){const e=S(".col-sm-8 .tr-link",n)??[];for(const n of e){for(;m(z(".script-version",n));)await new Promise((e=>requestAnimationFrame(e)));const e=O.prop(z(".tr-link-a",n),"href").replace(new RegExp(document.location.origin,"gi"),"https://openuserjs.org"),s=r({name:O.text(z(".tr-link-a",n)),description:O.text(z("p",n)),version:O.text(z(".script-version",n)),url:e,code_url:`${e.replace(/\/scripts/gi,"/install")}.user.js`,total_installs:O.text(z("td:nth-child(2) p",n)),created_at:O.attr(z("td:nth-child(4) time",n),"datetime"),code_updated_at:O.attr(z("td:nth-child(4) time",n),"datetime"),users:[{name:O.text(z(".inline-block a",n)),url:O.prop(z(".inline-block a",n),"href")}]});c.match(s)||(s._mujs.code.data_code_block||!o.preview.code&&!o.preview.metadata||s._mujs.code.request().then((()=>{i(s)})),re(s,t.name))}}}catch(e){Z(e)}},b=e=>{try{if(u(e.items))return void Z("Invalid data received from the server, TODO fix this");for(const n of e.items){const e=r({id:n.repository.id??n.id??0,name:n.repository.name??n.name,description:h(n.repository.description)?C("no_license"):n.repository.description,url:n.repository.html_url,code_url:n.html_url.replace(/\/blob\//g,"/raw/"),page_url:`${n.repository.url}/contents/README.md`,users:[{name:n.repository.owner.login,url:n.repository.owner.html_url}]});F.req(n.repository.url,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${t.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then((t=>{e.code_updated_at=n.commit||t.updated_at||Date.now(),e.created_at=t.created_at,e.daily_installs=t.watchers_count??0,e.good_ratings=t.stargazers_count??0,t.license?.name&&(e.license=t.license.name),i(e)})),e._mujs.code.data_code_block||!o.preview.code&&!o.preview.metadata||e._mujs.code.request().then((()=>{i(e)})),re(e,t.name)}}catch(e){Z(e)}};let g;if(/github/gi.test(t.name)){if(h(t.token)){Z(`"${t.name}" requires a token to use`);continue}g=F.req(d(`${t.url}"// ==UserScript=="+${a}+ "// ==/UserScript=="+in:file+language:js&per_page=30`),"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${t.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(b).then((()=>{F.req("https://api.github.com/rate_limit","GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${t.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then((e=>{for(const[t,n]of Object.entries(e.resources.code_search)){const e=A("mujs-row","rate-info",{textContent:`${t.toUpperCase()}: ${n}`});$.append(e)}})).catch(n)}))}else g=/openuserjs/gi.test(t.name)?F.req(d(`${t.url}${a}`),"GET","document").then(f):F.req(d(`${t.url}/scripts/by-site/${a}.json?language=all`)).then(p);g&&l.push(g.catch(n))}else for(const e of d)I.append(e._mujs.root);if(E.placeholder=C("search_placeholder"),E.value="",u(l))return void this.sortRecords();Promise.allSettled(l).then(this.sortRecords).catch(Z)}catch(e){Z(e)}}sortRecords(){const e=this.toArr();for(const t of e.flat().sort(((e,t)=>{const n=o.autoSort??"daily_installs";return t[n]-e[n]})))l(t._mujs.root)&&I.append(t._mujs.root);for(const[t,n]of Object.entries(this.groupBy(e)))G.update(n.length,{name:t})}toArr(){const e=this.intHost;return B.toArr().filter((({_mujs:t})=>t.info.host===e))}groupBy(e){const t=({_mujs:e})=>e.info.engine.name;return d(Object.groupBy)?Object.groupBy(e,t):e.reduce(((e={},...n)=>{const s=t(...n);return e[s]??=[],e[s].push(n[0]),e}),{})}}const ce=new le,de=()=>{const e=A("mu-js","mujs-sty-flex"),t=A("mujs-btn","save",{textContent:C("save"),dataset:{command:"save"},disabled:!1}),s=A("mujs-btn","reset",{textContent:C("reset"),dataset:{command:"reset"}});e.append(s,t);const a=(e,t)=>{t=t??C("no_license"),e=e??C("no_license");const n=A("mujs-section",{dataset:{name:t}}),s=A("label",{dataset:{command:t}}),a=A("mu-js",{textContent:e});return L(n,"click",(e=>{const s=e.target.closest("[data-command]");if(!s)return;if(s.dataset.command===t){const e=S(`[data-${t}]`,n);O.cl.has(e,"hidden")?O.cl.remove(e,"hidden"):O.cl.add(e,"hidden")}})),s.append(a),n.append(s),D.append(n),n},r={general:a("General","general"),load:a("Automation","load"),list:a("List","list"),filters:a("List Filters","filters"),blacklist:a("Blacklist (WIP)","blacklist"),engine:a("Search Engines","engine"),theme:a("Theme Colors","theme"),exp:a("Import / Export","exp")},l=(e,t,s="checkbox",a="general",i={})=>{const l=A("label","sub-section hidden",{textContent:e,dataset:{[a]:e}});if(J.set(e,t),"select"===s){const n=A("select",{dataset:{[a]:e},...i});for(const e of Object.keys(se)){if("deleted"===e||"users"===e)continue;const t=A("option",{value:e,textContent:e});n.append(t)}return n.value=o[t],l.append(n),r[a]&&r[a].append(l),l}const c=A("input",{type:s,dataset:{[a]:e},...i});if("engine"===a&&(c.dataset.name=t),r[a]&&r[a].append(l),"checkbox"===s){const e=A("mu-js","mujs-inlab"),s=A("label",{onclick(){c.dispatchEvent(new MouseEvent("click"))}});e.append(c,s),l.append(e);const r=/^(\w+)-(.+)/.exec(t);if(r?"filters"===r[1]?c.checked=o[r[1]][r[2]].enabled:c.checked=o[r[1]][r[2]]:c.checked=o[t],L(c,"change",(e=>{B.unsaved=!0,/filterlang/i.test(t)&&(B.rebuild=!0),r?"filters"===r[1]?o[r[1]][r[2]].enabled=e.target.checked:o[r[1]][r[2]]=e.target.checked:o[t]=e.target.checked})),"engine"===a){const e=o.engines.find((e=>e.name===t));if(e){if(c.checked=e.enabled,c.dataset.engine=e.name,L(c,"change",(t=>{B.unsaved=!0,B.rebuild=!0,e.enabled=t.target.checked})),e.query){const t=x.engines.find((t=>t.name===e.name)),s=A("input",{type:"text",defaultValue:"",value:decodeURIComponent(e.query)??"",placeholder:decodeURIComponent(t.query)??"",dataset:{name:r,engine:e.name},onchange(t){B.unsaved=!0,B.rebuild=!0;try{e.query=encodeURIComponent(new URL(t.target.value).toString())}catch(e){n(e)}}});l.append(s)}if("github"===e.name){const t=A("input",{type:"text",defaultValue:"",value:e.token??"",placeholder:"Paste Access Token",dataset:{engine:"github-token"},onchange(t){B.unsaved=!0,B.rebuild=!0,e.token=t.target.value}});l.append(t),J.set("github-token",t)}}}}else"text"===s&&(c.defaultValue="",c.value=t??"",c.placeholder=t??""),l.append(c);return l};v&&(l(C("userjs_sync"),"cache"),l(C("userjs_autoinject"),"autoinject","checkbox","load")),l(C("redirect"),"sleazyredirect"),l(`${C("dtime")} (ms)`,"time","number","general",{defaultValue:1e4,value:o.time,min:0,step:500,onbeforeinput(e){e.target.validity.badInput?(O.cl.add(e.target,"mujs-invalid"),O.prop(t,"disabled",!0)):(O.cl.remove(e.target,"mujs-invalid"),O.prop(t,"disabled",!1))},oninput(e){B.unsaved=!0;const n=e.target;n.validity.badInput||n.validity.rangeUnderflow&&"-1"!==n.value?(O.cl.add(n,"mujs-invalid"),O.prop(t,"disabled",!0)):(O.cl.remove(n,"mujs-invalid"),O.prop(t,"disabled",!1),o.time=h(n.value)?o.time:parseFloat(n.value))}}),l(C("auto_fetch"),"autofetch","checkbox","load"),l(C("userjs_fullscreen"),"autoexpand","checkbox","load",{onchange(e){e.target.checked?(O.cl.add([V,P],"expanded"),O.prop(V,"innerHTML",U.load("collapse"))):(O.cl.remove([V,P],"expanded"),O.prop(V,"innerHTML",U.load("expand")))}}),l("Clear on Tab close","clearTabCache","checkbox","load"),l("Default Sort","autoSort","select","list"),l(C("filter"),"filterlang","checkbox","list"),l(C("preview_code"),"preview-code","checkbox","list"),l("Preview Metadata","preview-metadata","checkbox","list"),l("Recommend author","recommend-author","checkbox","list"),l("Recommend scripts","recommend-others","checkbox","list");for(const[e,t]of Object.entries(o.filters))l(t.name,`filters-${e}`,"checkbox","filters");l("Greasy Fork","greasyfork","checkbox","engine"),l("Sleazy Fork","sleazyfork","checkbox","engine"),l("Open UserJS","openuserjs","checkbox","engine"),l("GitHub API","github","checkbox","engine");for(const[e,s]of Object.entries(o.theme)){const a=A("label","hidden",{textContent:e,dataset:{theme:e}}),i=A("input",{type:"text",defaultValue:"",value:s??"",placeholder:s??"",dataset:{theme:e},onchange(s){let a=!0;try{const t=s.target.value,n=B.root.style,a=`--mujs-${e}`,r=n.getPropertyValue(a);if(h(t))return o.theme[e]=x.theme[e],void n.removeProperty(a);if(r===t)return;n.removeProperty(a),n.setProperty(a,t),o.theme[e]=t}catch(e){n(e),a=!1}finally{a?(O.cl.remove(s.target,"mujs-invalid"),O.prop(t,"disabled",!1)):(O.cl.add(s.target,"mujs-invalid"),O.prop(t,"disabled",!0))}}});J.set(e,i),a.append(i),r.theme.append(a)}const c=(e,s="",a=!1,o="String")=>{let l=e;if("string"==typeof e){if(e.startsWith("userjs-")){a=!0;const t=e.substring(7);l=`Built-in "${t}"`,s=_[t]}}else if(!e.enabled)return;i(s)?(s=s.toString(),o="RegExp"):(s=JSON.stringify(s),o="Object");const c=A("label","hidden",{textContent:l,dataset:{blacklist:e}}),d=A("input",{type:"text",defaultValue:"",value:s??"",placeholder:s??"",dataset:{blacklist:e},onchange(e){let s=!0;try{const t=e.target.value;if(h(t))return;s=!0}catch(e){n(e),s=!1}finally{s?(O.cl.remove(e.target,"mujs-invalid"),O.prop(t,"disabled",!1)):(O.cl.add(e.target,"mujs-invalid"),O.prop(t,"disabled",!0))}}}),m=A("select",{disabled:a,dataset:{blacklist:e}});if(a){d.readOnly=!0;const e=A("option",{value:o,textContent:o});m.append(e)}else for(const e of["String","RegExp","Object"]){const t=A("option",{value:e,textContent:e});m.append(t)}m.value=o,c.append(d,m),r.blacklist.append(c)};for(const e of o.blacklist)c(e);const d={export:{cfg:A("mujs-btn","mujs-export sub-section hidden",{textContent:C("export_config"),dataset:{command:"export-cfg",exp:"export-cfg"}}),theme:A("mujs-btn","mujs-export sub-section hidden",{textContent:C("export_theme"),dataset:{command:"export-theme",exp:"export-theme"}})},import:{cfg:A("mujs-btn","mujs-import sub-section hidden",{textContent:C("import_config"),dataset:{command:"import-cfg",exp:"import-cfg"}}),theme:A("mujs-btn","mujs-import sub-section hidden",{textContent:C("import_theme"),dataset:{command:"import-theme",exp:"import-theme"}})}};for(const e of Object.values(d))for(const t of Object.values(e))r.exp.append(t);D.append(e)};B.tab.custom=e=>{ce.host=e,t.build()},L(T,"mouseenter",(e=>{e.preventDefault(),e.stopPropagation(),e.target.style.opacity=B.opacityMax,K.clear(...K.ids)})),L(T,"mouseleave",(e=>{e.preventDefault(),e.stopPropagation(),e.target.style.opacity=B.opacityMin,oe()})),L(T,"click",(e=>{e.preventDefault(),K.clear(...K.ids),O.cl.remove(P,"hidden"),O.cl.add(T,"hidden"),o.autoexpand&&(O.cl.add([V,P],"expanded"),O.prop(V,"innerHTML",U.load("collapse"))),O.cl.has(T,"error")&&W.create("mujs:settings")})),L(E,"input",(e=>{if(e.preventDefault(),E.placeholder===C("newTab"))return;const t=e.target.value,n=S("mujs-section[data-name]",D);if(h(t))return O.cl.remove(B.toElem(),"hidden"),void O.cl.remove(n,"hidden");const s=new Set;if(!O.cl.has(D,"hidden")){const e=new RegExp(t,"gi");for(const t of n)l(t)&&(s.has(t)||t.dataset.name.match(e)&&s.add(t));return O.cl.add(n,"hidden"),void O.cl.remove([...s],"hidden")}const a=B.toArr().filter((({_mujs:e})=>!s.has(e.root))),o=(e,n)=>{const o=t.replace(e,""),r=new RegExp(o,"gi");for(const e of a){let t=e[n];"number"==typeof t&&(t=`${e[n]}`),t&&t.match(r)&&s.add(e._mujs.root)}};if(t.match(/^(code_url|url):/))o(/^(code_url|url):/,"code_url");else if(t.match(/^(author|users?):/)){const e=/^[\w_]+:(.+)/.exec(t);if(e){const t=new RegExp(e[1],"gi");for(const e of a.filter((e=>!h(e.users))))for(const n of e.users)for(const a of Object.values(n))("string"==typeof a&&a.match(t)||"number"==typeof a&&`${a}`.match(t))&&s.add(e._mujs.root)}}else if(t.match(/^(locale|i18n):/))o(/^(locale|i18n):/,"locale");else if(t.match(/^id:/))o(/^id:/,"id");else if(t.match(/^license:/))o(/^license:/,"license");else if(t.match(/^name:/))o(/^name:/,"name");else if(t.match(/^description:/))o(/^description:/,"description");else if(t.match(/^(search_engine|engine):/)){const e=/^[\w_]+:(\w+)/.exec(t);if(e){const t=new RegExp(e[1],"gi");for(const{_mujs:e}of a)e.info.engine.name.match(t)&&s.add(e.root)}}else if(t.match(/^filter:/)){const e=/^\w+:(.+)/.exec(t);if(e){const t=ie().get(e[1].trim().toLocaleLowerCase());if(t){const{reg:e}=t;for(const{name:t,users:n,_mujs:o}of a)[{name:t},...n].find((t=>t.name.match(e)))||s.add(o.root)}}}else if(t.match(/^recommend:/))for(const{url:e,id:t,users:n,_mujs:o}of a)(n.find((e=>e.id===b))||g.includes(e)||g.includes(t))&&s.add(o.root);else{const e=new RegExp(t,"gi");for(const t of a)if(t.name&&t.name.match(e)&&s.add(t._mujs.root),t.description&&t.description.match(e)&&s.add(t._mujs.root),t._mujs.code.data_meta)for(const n of Object.keys(t._mujs.code.data_meta))/name|desc/i.test(n)&&n.match(e)&&s.add(t._mujs.root)}O.cl.add(S("tr[data-engine]",I),"hidden"),O.cl.remove([...s],"hidden")})),L(E,"change",(e=>{e.preventDefault();const n=e.target.value,s=W.getActive();if(E.placeholder===C("newTab")&&s){const a=s.firstElementChild;if(W.protoReg.test(n)){const t=W.getTab(n);return W.close(s),t?W.active(t):W.create(n),e.target.placeholder=C("search_placeholder"),void(e.target.value="")}if("*"===n)return s.dataset.host=n,a.title="<All Sites>",a.textContent="<All Sites>",ce.host=n,void t.build();const o=B.getHost(n);if(B.checkBlacklist(o))return void Z(`Blacklisted "${o}"`);s.dataset.host=o,a.title=o,a.textContent=o,ce.host=o,t.build()}})),r.postTask(de,{priority:"background"}),t.build=async()=>{const e=await r.postTask(ce.build,{priority:"background"});return oe(e)},o.autofetch&&t.build(),((...e)=>{const t=new Date;console.debug("[%cMagic Userscript+%c] %cDBG","color: rgb(29, 155, 240);","","color: rgb(255, 212, 0);",`[${t.getHours()}:${("0"+t.getMinutes()).slice(-2)}:${("0"+t.getSeconds()).slice(-2)}]`,...e)})("Container",B)}catch(e){n(e),B.remove()}return t}const H=async(e="Config")=>{const t=await N.getValue(e,x);var a;o={...x,...t},s("Config:",o),d(a=e=>{try{if(null===window.location)throw new Error('"window.location" is null, reload the webpage or use a different one',{cause:"loadDOM"});if(null===e)throw new Error('"doc" is null, reload the webpage or use a different one',{cause:"loadDOM"});B.redirect(),o.autoinject&&B.inject(D,e),I.register(C("userjs_inject"),(()=>{B.inject(D,e)})),I.register(C("userjs_close"),(()=>{B.remove()}))}catch(e){n(e)}})&&("interactive"===document.readyState||"complete"===document.readyState?a(document):document.addEventListener("DOMContentLoaded",(e=>a(e.target)),{once:!0}))};H()})();