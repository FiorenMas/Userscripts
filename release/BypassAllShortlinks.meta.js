// ==UserScript==
// @name       Bypass All Shortlinks Debloated
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Amm0ni4
// @noframes
// @version    95.3.1
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_addStyle
// @grant      GM_openInTab
// @grant      GM_setClipboard
// @grant      GM_xmlhttpRequest
// @grant      window.onurlchange
// @grant      GM_registerMenuCommand
// @icon       https://cdn-icons-png.flaticon.com/512/14025/14025295.png
// @require    https://update.greasyfork.org/scripts/528923/1562237/MonkeyConfig%20Mod.js
// @homepageURL    https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated
// @supportURL     https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues
// @match *://*.gocmod.com/*
// @match *://*.writedroid.in/*
// @match *://*.web1s.com/*
// @match *://*.modmania.eu.org/*
// @match *://*.ruwet.us/*
// @match *://*.autodime.com/*
// @match *://*.ahtio.com/*
// @match *://*.switchhindi.com/*
// @match *://*.olhonagrana.com/*
// @match *://*.1apple.xyz/*
// @match *://*.akcartoons.in/*
// @match *://*.blog.btcon.online/*
// @match *://*.nisnisin.com/*
// @match *://*.poco.rcccn.in/*
// @match *://*.links.rcccn.in/*
// @match *://*.suntechu.in/*
// @match *://*.market.finclub.in/*
// @match *://*.link.sharedp.com/*
// @match *://*.indirasari.com/*
// @match *://*.wikitraveltips.com/*
// @match *://*.encurtaclik.com/*
// @match *://*.appkamods.com/*
// @match *://*.keepzem.com/*
// @match *://*.short.sharedp.com/*
// @match *://*.earn.tensailab.com/*
// @match *://*.postazap.com/*
// @match *://*.mamahawa.com/*
// @match *://*.shakib.quick91.com/*
// @match *://*.reminimod.co/*
// @match *://*.indiamaja.com/*
// @match *://*.tbhlabsnews.com/*
// @match *://*.interestingfactsare.com/*
// @match *://*.djnonstopmusic.in/*
// @include /^(https?:\/\/)(.+)?((mewsr|techstudify).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(newshuta.in|60fpspubg.one)(\/.*)/
// @match *://*.tech.filohappy.in/*
// @match *://*.kelasadsense.com/*
// @match *://*.trust.bgmi32bitapk.in/*
// @match *://*.news.topsarkariyojana.in/*
// @include /^(https?:\/\/)(.+)?((cyberlynews|quizrent).com)(\/.*)/
// @match *://*.cafe.warrenrahul.in/*
// @match *://*.earn.bankshiksha.in/*
// @match *://*.techurlshort.in/*
// @match *://*.ninjamodz.litonmods.com/*
// @match *://*.rajdhanimaja.com/*
// @match *://*.highkeyfinance.com/*
// @match *://*.financeyogi.net/*
// @include /^(https?:\/\/)(.+)?((gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com)(\/.*)/
// @match *://*.ninjamodz.mtcremix.com/*
// @match *://*.bharatbestdeals.com/*
// @match *://*.earnbox.sattakingcharts.in/*
// @match *://*.a1.payalgaming.co.in/*
// @include /^(https?:\/\/)(.+)?((earnc1.bankshiksha|domain.bgmiupdate.com).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly).com|(bubblix|dailytech-news).eu|coinscap.info|insurancegold.in|wii.si)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(headlinerpost.com|posterify.net)(\/.*)/
// @match *://*.go.link4rev.site/*
// @match *://*.infinityskull.com/*
// @match *://*.link.linksfire.co/*
// @match *://*.dutchycorp.space/*
// @match *://*.financedoze.com/*
// @match *://*.ouo.io/*
// @match *://*.triggeredplay.com/*
// @match *://*.adbtc.top/*
// @match *://*.linkbox.to/*
// @match *://*.upload.ee/*
// @match *://*.dayuploads.com/*
// @match *://*.dddrive.me/*
// @match *://*.uppit.com/*
// @match *://*.krakenfiles.com/*
// @match *://*.file-upload.net/*
// @match *://*.hexupload.net/*
// @match *://*.dbree.me/*
// @match *://*.megaupto.com/*
// @match *://*.douploads.net/*
// @match *://*.dataupload.net/*
// @match *://*.filemoon.sx/*
// @match *://*.render-state.to/*
// @match *://*.bowfile.com/*
// @match *://*.enlacito.com/*
// @match *://*.dailyuploads.net/*
// @match *://*.bestfonts.pro/*
// @match *://*.uploadev.org/*
// @match *://*.files.fm/*
// @match *://*.gdflix.dad/*
// @match *://*.megaup.net/*
// @match *://*.mega4upload.net/*
// @match *://*.filespayouts.com/*
// @match *://*.uploady.io/*
// @match *://*.adoc.pub/*
// @match *://*.pdfcoffee.com/*
// @match *://*.file-upload.org/*
// @match *://*.up-4ever.net/*
// @match *://*.mexa.sh/*
// @match *://*.hitfile.net/*
// @match *://*.4fnet.org/*
// @match *://*.mp4upload.com/*
// @match *://*.workupload.com/*
// @match *://*.mega4up.org/*
// @match *://*.uploadhaven.com/*
// @match *://*.ac.totsugeki.com/*
// @match *://*.katfile.com/*
// @match *://*.anonym.ninja/*
// @match *://*.vosan.co/*
// @match *://*.apkmody.io/*
// @match *://*.upfion.com/*
// @match *://*.takefile.link/*
// @match *://*.modcombo.com/*
// @match *://*.fileresources.net/*
// @match *://*.freepreset.net/*
// @match *://*.doodrive.com/*
// @match *://*.qiwi.gg/*
// @match *://*.turbobit.net/*
// @match *://*.sharemods.com/*
// @match *://*.rawlazy.si/*
// @match *://*.downloader.tips/*
// @match *://*.modsbase.com/*
// @match *://*.filedm.com/*
// @match *://*.4shared.com/*
// @match *://*.the2.link/*
// @match *://*.megaurl.win/*
// @match *://*.keeplinks.org/*
// @match *://*.1shortlink.com/*
// @match *://*.earnlink.io/*
// @match *://*.mkomsel.com/*
// @match *://*.disheye.com/*
// @match *://*.jameeltips.us/*
// @match *://*.post.copydev.com/*
// @match *://*.1short.io/*
// @match *://*.1bitspace.com/*
// @match *://*.cshort.org/*
// @match *://*.revlink.pro/*
// @match *://*.pro.sh/*
// @match *://*.playpaste.com/*
// @match *://*.shortlinks2btc.somee.com/*
// @match *://*.kisalt.digital/*
// @match *://*.firefaucet.win/*
// @match *://*.rotizer.net/*
// @match *://*.aryx.xyz/*
// @match *://*.linkforearn.com/*
// @match *://*.webhostingtips.club/*
// @match *://*.downfile.site/*
// @match *://*.importantclass.com/*
// @match *://*.imagereviser.com/*
// @match *://*.shareus.io/*
// @match *://*.adtival.network/*
// @match *://*.explorerlives.com/*
// @match *://*.vuotnhanh.com/*
// @match *://*.forex-trnd.com/*
// @match *://*.modassir.exblog.jp/*
// @match *://*.sharetext.me/*
// @match *://*.comohoy.com/*
// @match *://*.linkforearn.click/*
// @match *://*.alorra.com/*
// @match *://*.apkw.ru/*
// @match *://*.wp.thunder-appz.eu.org/*
// @match *://*.programasvirtualespc.net/*
// @match *://*.fansonlinehub.com/*
// @match *://*.lksfy.com/*
// @match *://*.terabox.fun/*
// @match *://*.karyawan.co.id/*
// @match *://*.adfoc.us/*
// @match *://*.oii.io/*
// @match *://*.slink.bid/*
// @match *://*.blog.yurasu.xyz/*
// @match *://*.zegtrends.com/*
// @match *://*.bigbtc.win/*
// @match *://*.linkspy.cc/*
// @match *://*.jobinmeghalaya.in/*
// @match *://*.dinheiromoney.com/*
// @match *://*.itijobalert.in/*
// @match *://*.videolyrics.in/*
// @match *://*.sub2get.com/*
// @match *://*.leitup.com/*
// @match *://*.yitarx.com/*
// @match *://*.coinsrev.com/*
// @match *://*.newassets.hcaptcha.com/*
// @match *://*.mazen-ve3.com/*
// @match *://*.o-pro.online/*
// @match *://*.m.flyad.vip/*
// @match *://*.linkatla.com/*
// @match *://*.easylink.gamingwithtr.com/*
// @match *://*.onlinetechsolution.link/*
// @match *://*.indobo.com/*
// @match *://*.playnano.online/*
// @match *://*.rekonise.com/*
// @match *://*.acortalink.me/*
// @match *://*.bewbin.com/*
// @match *://*.lajangspot.web.id/*
// @match *://*.jioupload.com/*
// @match *://*.teknoasian.com/*
// @match *://*.socialwolvez.com/*
// @match *://*.suaurl.com/*
// @match *://*.letsboost.net/*
// @match *://*.bitcotasks.com/*
// @match *://*.shortit.pw/*
// @match *://*.recut.ru/*
// @match *://*.lanza.me/*
// @match *://*.lifeezee.com/*
// @match *://*.lolinez.com/*
// @match *://*.file-upload.in/*
// @match *://*.linksly.co/*
// @match *://*.appsinsta.com/*
// @match *://*.apkadmin.com/*
// @match *://*.amanguides.com/*
// @match *://*.8tm.net/*
// @match *://*.cpmlink.net/*
// @match *://*.noodlemagazine.com/*
// @match *://*.paycut.pro/*
// @match *://*.mohtawaa.com/*
// @match *://*.rockmods.net/*
// @match *://*.boost.ink/*
// @match *://*.foodupe.com/*
// @match *://*.mirrored.to/*
// @match *://*.sub2unlock.net/*
// @match *://*.mboost.me/*
// @match *://*.autofaucet.dutchycorp.space/*
// @include /^(https?:\/\/)(.+)?((g34new|dlgamingvn|v34down|phimsubmoi).com|nashib.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(appdrive\.*)/
// @include /^(https?:\/\/)(.+)?(userscloud.com|dosya.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?(usersdrive.com|ddownload.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(up-load.io|downloadani.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?(oxy\.*)/
// @include /^(https?:\/\/)(.+)?((uploadrar|fingau|getpczone|wokaz).com|uptomega.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kusonime|oploverz).org|(opinimedia|beritaotaku|caramasak).com|otakudesu.cc|resepkoki.net|neonime\.*)/
// @include /^(https?:\/\/)(.+)?(clickndownload.org|clicknupload\.*)/
// @include /^(https?:\/\/)(.+)?(1ink.cc|cuturl.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bedrat.xyz|uhtrdr47.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(proappapk.com|meclipstudy.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fc-lc|thotpacks).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?((devnote|formshelp).in|djbassking.live)(\/.*)/
// @include /^(https?:\/\/)(.+)?(offerwall.me|ewall.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(surl.li|surl.gd)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogsward|coinjest).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(uptobhai\.*|uplinkto\.*|shortlinkto\.*)/
// @include /^(https?:\/\/)(.+)?(dogefury.com|go.tfly.link|thanks.tinygo.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((dramaticqueen|emubliss).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(michaelemad.com|7misr4day.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bnbfree|freeth|freebitco).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(loanifyt.site|topshare.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techsl.online|jobmatric.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(khaddavi.net|contentmenarik.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cutnet.net|(exego|cety).app|(jixo|gamco).online|cutyion.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(financedoze.com|techhype.in|svream.net|rtjks.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(sfl.gl|moneyblink.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financewada|utkarshonlinetest).com|financenova.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(setroom.biz.id|travelinian.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fourlinez|newsonnline|phonesparrow|creditcarred|stockmarg).com|(alljntuworld|updatewallah|vyaapaarguru|viralmp3.com).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((keedabankingnews|aceforce2apk).com|themezon.net|healthvainsure.site|rokni.xyz|bloggingwow.store)(\/.*)/
// @include /^(https?:\/\/)(.+)?((10short|lollty).pro|mamahawa.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|tutorialsaya|baristakesehatan|merekrut).com|deltabtc.xyz|bit4me.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics)(\/.*)/
// @include /^(https?:\/\/)(.+)?(largestpanel.in|(djremixganna|financebolo|emubliss).com|(earnme|usanewstoday).club|earningtime.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((viralxns|uploadsoon).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @include /^(https?:\/\/)(.+)?(paste1s.com|note1s.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech|cointox.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(solidcoins.net|fishingbreeze.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((superheromaniac|spatsify|mastkhabre|ukrupdate).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bestloansoffers|worldzc).com|earningtime.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((exeo|exego).app|(falpus|exe-urls|exnion).com|4ace.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(pubghighdamage.com|anmolbetiyojana.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(aylink.co|cpmlink.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tmail|labgame).io|(gamezizo|fitdynamos).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(4hi.in|(10short|animerigel|encurt4).com|finish.wlink.us|passivecryptos.xyz|fbol.top|kut.li|shortie.sbs)(\/.*)/
// @include /^(https?:\/\/)(.+)?(infonerd.org|coingraph.us)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogmado|kredilerim|insuranceleadsinfo).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(azmath.info|expertvn.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(litecoin.host|cekip.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((ez4mods|game5s|sharedp|fastcars1).com|tech5s.co|a4a.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|(offeergames|todogame).online|whatgame.xyz|gold-24.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nishankhatri.xyz|(bebkub|owoanime|hyperkhabar|hamroguide).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kongutoday|proappapk|hipsonyc|teamtechnews).com|yotrickslog.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?(autodime.com|cryptorex.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(writedroid.eu.org|modmania.eu.org|writedroid.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((goodmorningimg|odiadance|newkhabar24|aiperceiver|kaomojihub).com|dvjobs.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((marketrook|governmentjobvacancies).com|(winezones|kabilnews|myscheme.org|mpsarkarihelp).in|biharhelp.co|wastenews.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stly.link|snaplessons.net|atravan.net|stfly.biz|airevue.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((ecryptly|equickle).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((horoscop|videoclip|newscrypto).info|article24.online|writeprofit.org|docadvice.eu|trendzilla.club|worldwallpaper.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?(revly.click|(clikern|kiddyshort).com|mitly.us|link.whf.bz|shortex.in|easyshort.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|(techacode|expertvn|ziggame|gamezigg).com|azmath.info|aztravels.net|handydecor.com.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?((askpaccosi|wellness4live|akash.classicoder).com|2the.space|inicerita.online|cryptomonitor.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((hosttbuzz|policiesreview|blogmystt|wp2hostt|advertisingcamps).com|clk.kim|dekhe.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techyreviewx.com|desiupload.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?(exactpay.online|neverdims.com|sproutworkers.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((btcpany|zombiebtc|claimfey|thefastpost).com|(panytourism|statepany).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fitnesswifi|earnmoneyyt|thardekho|dinoogaming|pokoarcade|hnablog|orbitlo|finquizy|indids|redfea).com|(ddieta|lmktec).net|vbnmx.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((admediaflex|cdrab|financekita|jobydt|foodxor|mealcoldnewsobjective).com|(ecq|cooklike).info|wpcheap.net|thecryptoworld.site|skyfreecoins.top|petly.lat|techreviewhub.store)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tinybc|phimne).com|(mgame|sportweb|bitcrypto).info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tutwuri.id|(besargaji|link2unlock).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hunterkiller.me|surflink.tech)(\/.*)/
// @include /^(https?:\/\/)(.+)?((lyricsbaazaar|ezeviral).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|ai.tempatwisata.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?((mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm).com|(loopmyhub|thepopxp).shop|cryptoblast.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(oncoin.info|nishankhatri.com.np|quanngon.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?((playonpc|yolasblog).online|(quins|megahosting).us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday|tradeshowrating).com|gally.shop|evegor.net|freeat30.org|(qanin|ivnlnews).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ify.ac|go.linkify.ru)(\/.*)/
// @include /^(https?:\/\/)(.+)?((grtjobs|jksb).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tejtime24|drinkspartner).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((techleets|bonloan).xyz|sharphindi.in|nyushuemu.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(xonnews.net|toilaquantri.com|share4u.men|camnangvay.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cricketgurupro|travelkuku).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods|pastescript|trimorspacks).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mbantul.my.id|crypto-fi.net|claimcrypto.cc|xtrabits.click|(web9academy|bioinflu|bico8).com|(ourcoincash|studyis).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|(beingtek|encurt4|10short).com|(zagl|shrinkforearn|beinglink).in|seulink.digital|oii.io|hamody.pro|metasafelink.site|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|tfly.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?((remixsounds|helpdeep|thinksrace).com|uprwssp.org|gkfun.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shrinke\.*|shrinkme\.*|(paid4link|linkbulks|linclik|up4cash|smoner|minimonetize|encurtadorcashlinks|yeifly).com|(wordcounter|shrink).icu|(dutchycorp|galaxy-link).space|dutchycorp.ovh|pahe.plus|(pwrpa|snipn).cc|paylinks.cloud|oke.io|tinygo.co|tlin.me|wordcount.im|link.freebtc.my.id|get.megafly.in|skyfreeshrt.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?(virtuous-tech.net|newsminer.uno)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela|howtoconcepts|tuasy|skyrimer|yodharealty|mobcupring|aiimsopd|advupdates|camdigest|heygirlish|blog4nx|todayheadliners|jobqwe|cryptonews.faucetbin|mobileflashtools).com|(paidinsurance|djstar|sevayojana|bjp.org).in|(sastainsurance|nashib).xyz|(cialisstrong|loanforuniversity).online|zaku.pro|veganab.co|cegen.org|skyfreecoins.top|manga4nx.site)(\/.*)/
// @match *://*.api.gplinks.com/*
// @match *://*.venzoars.com/*
// @include /^(https?:\/\/)(.+)?((surfsees|travelagancy).com)(\/.*)/
// @match *://*.multiup.io/*
// @match *://*.modsfire.com/*
// @match *://*.social-unlock.com/*
// @match *://*.blog.mphealth.online/*
// @match *://*.mphealth.online/*
// @match *://*.shrs.link/*
// @match *://*.www.gifans.com/*
// @match *://*.www.pythondunyasi.com/*
// @match *://*.jrlinks.in/*
// @grant      GM_deleteValue
// @match        https://acortalink.me/*
// @match         *://bleleadersto.com/s?*
// @match         *://tonordersitye.com/s?*
// @match         *://daughablelea.com/s?*
// @match         *://mdlinkshub.com/s?*
// @match         *://linkvertise.com/*
// @match        *://bstlar.com/*
// @match        https://bypass.city/bypass?bypass=*
// @match        https://adbypass.org/bypass?bypass=*
// @match       https://fc-lc.xyz/*
// @match       https://datanodes.to/download
// @match       *://www.ryuugames.com/?eroge=*
// @match       *://anchoreth.com/r-adsh?t=i&v=*
// @match       *://*.btcut.io/*
// @match       *://btcut.io/*
// @match       *://linkslice.io/*
// @match       *://zshort.io/*
// @match       *://easy4skip.com/*
// @match       *://lkfms.pro/*
// @match        https://paster.so/*
// @match        https://psa.wf/goto/*
// @match        https://moviezapiya.fun/
// @include       /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @include     /(mundopolo.net|myfirstdollar.net|adsense.tupaste.top|acorta2.com|web.admoneyclick.net|acortaphd.live|onlypc.net|link.manudatos.com)/
// @include     /comohoy.com/
// @include     /privatenudes.com\/model/
// @include     /sphinxanime.com\/short/
// @include     /japanpaw.com\/out/
// @include     /(iconicblogger.com|segurosdevida.site)/
// @include     /link.unlockner.com/
// @include     /(cybercityhelp|akcartoons).in/
// @include     /www.akcartoons.in/
// @include     /go.moonlinks.in/
// @include     /shrinkme.(us|site|cc|vip|dev|ink)/
// @include     /test.shrinkurl.org/
// @include     /shareus.io/
// @include     /shareus\.io\/go\?sid=/
// @include     /(verpeliculasonline.org|subtituladas.com)\/enlace/
// @include     /links.cuevana.ac\/short/
// @include     /ouo.io/
// @include     /exeo.app|mrgec.com|cety.app|cuty.me/
// @include     /1v.to\/t/
// @include     /linkspy.cc\/tr/
// @include     /linkspy.cc\/\/a/
// @include     /www.ovagames.com\/.*\.html$/
// @include     /((infytips|remixodiadj|bgmiaimassist).in|(cybertyrant|profitshort|technorozen|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gdspike|caronwhaley|maxxfour|thewizitale|inventoryidea|gamerxyt|betsatta|stockwallah|gtxhosty|anyrojgar).com|mphealth.online|hubdrive.me|advisecreate.fun|courselinkfree.us|10desires.(org|net)|theapknews.shop|trendzguruji.me|speedynews.xyz|nzarticles.pro|offerboom.top|kvkparbhani.org)/
// @include     /short-ly.co/
// @include     /uqozy.com|posterify.net|drinkspartner.com|manishclasses.in|boiscd.com/
// @include     /blogging.techworldx.net|10beasts.biz/
// @include     /starsddl.me\/short/
// @include     /(tech|technews).unblockedgames.world/
// @include     /seriezloaded.com.ng\/sl-download\/\?link=/
// @include     /www.itscybertech.com/
// @include     /thegadgetking.in/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(linkvertise.com|(linkvertise|link-to).net)/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(free-content.pro|(ebaticalfel|downbadleaks|megadropsz|megadumpz|stownrusis|iedprivatedqu|megaspremium|premiumstashdrop|teenspremium|utopianleaks|kmendation|eofmukindwo|realiukzemydre|daughablelea|tonordersitye|bleleadersto).com)|best-links.org\/s\?/
// @include     /^(https?:\/\/)(?!(bypass.city|adbypass.org))(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @include     /epicload.com\/files/
// @include     /www.gtaall.com\/get-manual/
// @include     /woowebtools.com|pallabmobile.in/
// @include     /doodrive.com\/f/
// @include     /ipamod.com\/redirect-to/
// @include     /9xflix\.(\w+)\/m\/goto/
// @include     /bookszone.in/
// @include     /yoshare.net/
// @include     /blog.disheye.com/
// @include     /reminimod.co/
// @include     /techrayzer.com/
// @include     /techfizia.com/
// @include     /tech5s.co/
// @include     /ez4mods.com/
// @include     /ez4short.com|zshort.io|lkfms.pro/
// @include     /learnmany.in/
// @include     /lksfy.in/
// @include     /droplink.co/
// @include     /lnks.primarchweb.in/
// @include     /highkeyfinance.com/
// @include     /toonhub4u.net\/redirect\/main.php\?url=/
// @include     /toonhub4u\.net\/([^\/]+)\/$/
// @include     /mdsuuniversity.org|instander.me|jameen.xyz|dhamakamusic.ink|eternalcbse.i|financialstudy.me|(foreverhealth|newzwala.co|nhmgujarat|jobkijankari|jobwaala|learnwithsaif|lyricsx|smartsetkari|theringtonesworld|recruitmentrasta|mediniweb|pmyojanasarkari|netflixvip|mghindinews|gentletrail|w3hindi|ryzenmusic).in|(anumin|awolio|cgbsesupport|gptproguide|iplquotes|kaisekareblog|minijankari|news36tech|newsloti|odiamusicsong|sugargliderfaqs|picassoappk|geniuseducares|ndlifestylego|raidersixgameapk|sarkariexam365|potter-world|jankari4u|trancebazar|taazaalerts).com/
// @include     /aipebel.com/
// @include     /raretoonsindia.rtilinks.com/
// @include     /(do|fast).rtilinks.com/
// @include     /vidhidepro.com\/d/
// @include     /www.mirrored.to\/files\/(?!.*\?hash=)/
// @include     /skyve.io/
// @include     /(itradercoin|nichapk|easyworldbusiness|riveh).com/
// @include     /blog.filepresident.com/
// @include     /gyanigurus.net\/view/
// @include     /mkvmoviespoint.casa\/goto/
// @include     /w.linkspoint.net/
// @include     /kingshortener.com/
// @include     /gdslink.xyz/
// @include     /financeyogi.net/
// @include     /jrlinks.in/
// @include     /go.tnshort.net/
// @include     /www.4fnet.org\/goto/
// @include     /(linkmo.net|adpayl.ink)\/[^?]+\?data=.+$/
// @include     /musicc.xyz/
// @include     /(cravesandflames|codesnse|cloutgist).com/
// @include     /go.(cravesandflames|codesnse|cloutgist).com/
// @include     /empebau.eu\/s/
// @include     /cpmlink.net\/go/
// @include     /10short.com/
// @include     /zegtrends.com/
// @include     /icutlink.com/
// @include     /motakhokhara.blogspot.com/
// @include     /xpshort.com/
// @include     /jobzspk.xyz/
// @include     /urls.cx/
// @include     /sunci.net/
// @include     /(adclicker.(io|info)|(discoveryultrasecure|yourihollier).com)\/url/
// @include     /antonimos.de|tiktokcounter.net|tiktokrealtime.com|tpayr.xyz|quesignifi.ca|lifgam.online|waezf.xyz|ashrfd.xyz/
// @include     /minimilionario.com\/noticia.php\?token=/
// @include     /usandoapp.com/
// @include     /v2links.(com|me)/
// @include     /(newsbawa|utkarshonlinetest|techbezzie|financewada).com/
// @include     /techtnet.com/
// @include     /asideway.com/
// @include     /web1s.asia\/api-mode/
// @include     /(linkvip|blitly).io/
// @include     /^https:\/\/megalink.pro\/[a-zA-Z0-9]+$/
// @include     /lnbz.la/
// @include     /dekhe.click|indianshortner.com|lnbz.la|oii.la|falpus.com|4ace.online|tii.la|oko.sh|tpi.li|shrinke.me|clk.(wiki|kim)|techy.veganab.co|atglinks.com|linx.cc|get.megaurl.in|wordcounter.icu|wordcount.im|exeo.app|pwrpa.cc|(go|get).megafly.in|birdurls.com|blog.graphicuv.com|try2link.com|owllink.net|oei.la|exego.app|link.theflash.eu.org|get.instantearn.in|mrproblogger.com|exe-urls.com|linkjust.com/
// @include     /ez4short.com\/[^\/]+\/\?token=[^\/]+$/
// @include     /shon.xyz/
// @include     /veganab.co\/\?link=/
// @include     /veganab.co/
// @include     /camdigest.com/
// @include     /tawda.xyz\/tag/
// @include     /pastebin.com\/raw/
// @include     /spacetica.com/
// @include     /linegee.net/
// @include     /(loanoffering|djmp3world).in|moonplusnews.com/
// @include     /4hi.in/
// @include     /lnk.news/
// @include     /imagereviser.com/
// @include     /upshrink.com/
// @include     /bangclinic.life/
// @include     /dow-dow-dow-dow-dow.xyz\/download\/\?id=/
// @include     /ofilmetorrent.com\/download\/\?id=/
// @include     /librospdfgratismundo.net/
// @include     /besargaji.com/
// @include     /moneyblink.com\/ready\/go\?u=/
// @include     /dw-anime.net\/short\/\?anonym=/
// @include     /fiuxy2.co\/threads/
// @include     /megalinks.info\/index.php\?v=/
// @include     /ocultandoo.blogspot.com/
// @include     /rodimalam.com/
// @include     /platinsport.com/
// @include     /(ay.live|aylink.co|gitlink.pro)\/[^\/]+$/
// @include     /(lopteapi.com|1link.vip|blitly.io|web1s.com|megalink.pro)\/[^\/]+$/
// @include     /short-url.link\/[^\/]+$/
// @include     /urlx.one\/[^\/]+$/
// @include     /trimorspacks.com|pastescript.com|updrop.link/
// @include     /earnmoneyyt.com/
// @include     /sheralinks.com/
// @include     /go.bloggingaro.com/
// @include     /land.povathemes.com/
// @include     /pahe.plus/
// @include     /www.(sinsitio.site|dixva.com)\/code\/\?go=/
// @include     /www.yitarx.com/
// @include     /myshrinker.com/
// @include     /thotpacks.xyz/
// @include     /tumangasdd.com/
// @include     /sexyforums.com\/redirect/
// @include     /forum.(sexyegirls|sorrymother).to\/redirect\?to=/
// @include     /paste.japan-paw.net\/\?v=/
// @include     /pastesmkv.xyz\/\?v=/
// @include     /ikramlar.online|segurosdevida.site/
// @include     /mh.gourlpro.com/
// @include     /playpastelinks.com/
// @include     /stfly.(cc|xyz|biz|me)|stly.link|(techtrendmakers|gadnest|optimizepics|bookbucketlyst).com|(blogbux|blogesque|exploreera|explorosity|trekcheck|torovalley|travize|metoza|techlike|crenue|atravan|transoa|techmize|snaplessons|airevue).net/
// @include     /ielts-isa.edu.vn/
// @include     /flash.getpczone.com|get.rahim-soft.com/
// @include     /(surfsees|travelagancy|venzoars|webbooki|pokoarcade|edigitalizes|finquizy).com|(fitnessholic|myindigocard).net|stockinsights.in|pandagamepad.co|techsl.online/
// @include     /cgsonglyricz.in|www.techhubcap.com/
// @include     /cryptings.in|vbnmx.online/
// @include     /techyblogs.in|readytechflip.com/
// @include     /wp2host.com/
// @include     /pahe.win/
// @include     /ontechhindi.com/
// @include     /thelatintwistcafe.com/
// @include     /(newshuta|5ghindi|gujaratalert|mahitimanch|gujmitra).in|(indiamaja|thespotifypremium).com|mtmanagers.pro/
// @include     /mayas.travel|eldiario24hrs.com|comomedir.com|aplicacionpara.org|constanteonline.com/
// @include     /animesgd.net/
// @include     /tucinehd.com\/links/
// @include     /render-state.to\/download\/\?link=/
// @include     /www.lanoticia.cc/
// @include     /altearnativasa.com/
// @include     /importantclass.com/
// @include     /bebkub.com/
// @include     /kbconlinegame.com/
// @include     /owoanime.com/
// @include     /keedabankingnews.com/
// @include     /secure.moderngyan.com/
// @include     /earnbox.sattakingcharts.in/
// @include     /set.seturl.in/
// @include     /links.kmhd.net/
// @include     /mastramstories.com\/api.php\?api/
// @include     /onlinetntextbooks.com/
// @include     /www.saferoms.com\/\?go=/
// @include     /hdpastes.com\/\?v=/
// @include     /shrinkforearn.in/
// @include     /encurtads.net|financacerta.com/
// @include     /shrtbr.com/
// @include     /dramaday.me\/[^\/]+\/$/
// @include     /^https:\/\/(fitdynamos.com|labgame.io)\/.*$/
// @include     /mobilenagari.com|defencewallah.in/
// @include     /(bgmiupdatehub|novelquote|superheromaniac|jkssbalerts|taazaloans|spatsify|sikhehindime|careersides).com|(sabarpratham|pubprofit|sarkariyojnaa|reliablesp).in|dear-lottery.org/
// @include     /rocklinks.in/
// @include     /www.udlinks.com/
// @include     /techkhulasha.com|blog.bloggerishyt.in/
// @include     /golink.bloggerishyt.in/
// @include     /skillheadlines.in/
// @include     /psccapk.in|secure.bgmiupdate.com.in|money.hustlershub.in|rg.sattakingcharts.in|payalgaming.co.in/
// @include     /www.spaste.com/
// @include     /click.convertkit-mail.com/
// @include     /hubcloud.(club|dad)\/tg\/go.php\?re=/
// @include     /bgmiaimassist.in|(stockwallah|inventoryidea).com/
// @include     /^https:\/\/relampagomovies\.com\/.+/
// @include     /(shramikcard|pmkisanlists|techishant|cinedesi|thevouz).in|cookad.net|(tejtime24|cyberlynews|quizrent).com/
// @include     /linkshortify.in|lksfy.com/
// @include     /tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/
// @include     /^https:\/\/[^\/]+\/safe\.php\?link=https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/
// @include     /^https:\/\/modijiurl\.com\/[^\/]+\/\?mid=.*$/
// @include     /delpez.com/
// @include     /mendationforc.info/
// @include     /paster.gg/
// @include     /go.zovo.ink/
// @include     /^https:\/\/kisalt\.com\/.*/
// @include     /((ukrupdate|mastkhabre).com|aryx.xyz)/
// @include     /app.link2unlock.com/
// @include     /freemodsapp.in/
// @include     /pandaznetwork.com/
// @include     /(upfiles.app|haxi.online|upfion.com)/
// @include     /dailyuploads.net/
// @include     /app2.olamovies.download\/generate\/\?id=/
// @include     /foodtechnos.in/
// @include     /mixrootmod.com/
// @include     /zaku.pro/
// @include     /aylink.co|cpmlink.pro/
// @include     /hypershort.com/
// @include     /instaserve.net|gomob.xyz|gamechilly.online/
// @include     /(desbloquea|drivelinks).me|(acortame-esto|recorta-enlace|enlace-protegido|super-enlace).com|short-info.link/
// @include     /tech.hipsonyc.com|itijobalert.in/
// @include     /golink.(gyanitheme.com|bloggerishyt.in)/
// @include     /pxanimeurdu.com/
// @include     /techarmor.xyz/
// @include     /get.cloudfam.io/
// @include     /monoschinos.club/
// @include     /(pelistop.xyz|tuconstanteonline.com|librolandia.cc|posicionamientoweb.click|dietadisociada.info)/
// @include     /subtituladas.org\/enlace/
// @include     /flycutlink.com/
// @include     /drop.download/
// @include     /file-upload.org/
// @include     /up-4ever.net/
// @include     /frdl.is/
// @include     /mega4upload.net/
// @include     /filespayouts.com/
// @include     /loanoffer.cc/
// @include     /count.vipurl.in/
// @include     /(smartfeecalculator|thecubexguide).com|(djxmaza|jytechs|gujjukhabar).in/
// @include     /goo.st/
// @include     /safez.es/
// @include     /acorte.xyz/
// @include     /sastainsurance.xyz/
// @include     /link4earn.com/
// @include     /kaomojihub.com/
// @include     /vplink.in/
// @include /^(https?:\/\/)(.+)?((actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay).xyz|gamcabd.org|gamerking.shop)(\/.*)/
// @include     /^(https?:\/\/)(.+)?((mega-enlace|acortados).com|tulink.org)/
// @include     /^https:\/\/(.*\.|)(playonpc.online|(quins|megahosting).us|(tradeshowrating|historyofyesterday|retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|ngebike).com|gally.shop|(qanin|ivnlnews|jobvox).xyz|evegor.net|freeat30.org)\/.*/
// @include     /quickeemail.com/
// @exclude /^(https?:\/\/)([^\/]+\.)?((github|aliyun|reddit|bing|yahoo|microsoft|whatsapp|amazon|ebay|payoneer|paypal|skrill|stripe|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|blogger|accounts.youtube|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet|docs|workspace|gemini|adservice|tagmanager).google|atlassian|pinterest|twitter|x|live|linkedin|fastbull|tradingview|deepseek|chatgpt|openai|grok|bilibili|indodax|bmcdn6|fbsbx|googlesyndication|amazon-adsystem|pubmatic|gstatic).com|proton.me|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|(doubleclick|yahoo).net|meta.ai|codepen.io|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @exclude /^https?:\/\/([a-z0-9]+\.)*(facebook|instagram|tiktok)\.com\/(?!(flx\/warn\/|linkshim\/|link\/v2)).*/
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/BypassAllShortlinks.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/BypassAllShortlinks.meta.js
// ==/UserScript==
