// ==UserScript==
// @version      8.0.0
// @name         Magic Userscript+ : Show Site All UserJS
// @author       Magic <magicoflolis@tuta.io>
// @supportURL   https://github.com/magicoflolis/Userscript-Plus/issues
// @namespace    https://github.com/magicoflolis/Userscript-Plus
// @homepageURL  https://github.com/magicoflolis/Userscript-Plus
// @icon         data:image/png;base64,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
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
// @exclude-match     *://*.youtube.com/*
// @exclude-match     *://*.netflix.com/*
// @match     https://*/*
// @noframes
// @run-at     document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Magic20Userscript2B203A20Show20Site20All20UserJS.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Magic20Userscript2B203A20Show20Site20All20UserJS.meta.js
// ==/UserScript==
        this.META_START_COMMENT = this.isUserCSS ? '/* ==UserStyle==' : '// ==UserScript==';
        this.META_END_COMMENT = this.isUserCSS ? '==/UserStyle== */' : '// ==/UserScript==';
        this.META_START_COMMENT = this.isUserCSS ? '/* ==UserStyle==' : '// ==UserScript==';
        this.META_END_COMMENT = this.isUserCSS ? '==/UserStyle== */' : '// ==/UserScript==';
(()=>{"use strict";if(typeof window>"u"||(()=>{try{return window.self!==window.top}catch{return!0}})())return;let Me=self.userjs;if((document instanceof Document||document instanceof XMLDocument&&document.createElement("div")instanceof HTMLDivElement)&&/^text\/html|^application\/(xhtml|xml)/.test(document.contentType||"")===!0&&(!(self.userjs instanceof Object)||Me.UserJS!==!0)?Me=self.userjs={UserJS:!0}:console.error("[%cMagic Userscript+%c] %cERROR","color: rgb(29, 155, 240);","","color: rgb(249, 24, 128);",`MIME type is not a document, got "${document.contentType||""}"`),!(typeof Me=="object"&&Me.UserJS))return;const We={ar:{createdby:"\u0627\u0646\u0634\u0623 \u0645\u0646 \u0642\u0628\u0644",name:"\u0627\u0633\u0645",daily_installs:"\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u064A\u0648\u0645\u064A",close:"\u064A\u063A\u0644\u0642",filterA:"\u0645\u0646\u0642\u064A",max:"\u062A\u062D\u0642\u064A\u0642 \u0623\u0642\u0635\u0649 \u0642\u062F\u0631",min:"\u062A\u0635\u063A\u064A\u0631",search:"\u064A\u0628\u062D\u062B",search_placeholder:"\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0646\u0635\u064A\u0629",install:"\u062A\u062B\u0628\u064A\u062A",issue:"\u0625\u0635\u062F\u0627\u0631 \u062C\u062F\u064A\u062F",version_number:"\u0627\u0644\u0625\u0635\u062F\u0627\u0631",updated:"\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B",total_installs:"\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u062B\u0628\u064A\u062A",ratings:"\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A",good:"\u062C\u064A\u062F",ok:"\u062C\u064A\u062F",bad:"\u0633\u064A\u0621",created_date:"\u062A\u0645 \u0625\u0646\u0634\u0627\u0624\u0647",redirect:"\u0634\u0648\u0643\u0629 \u062F\u0647\u0646\u064A\u0629 \u0644\u0644\u0643\u0628\u0627\u0631",filter:"\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649",dtime:"\u0639\u0631\u0636 \u0627\u0644\u0645\u0647\u0644\u0629",save:"\u062D\u0641\u0638",reset:"\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646",preview_code:"\u0643\u0648\u062F \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629",saveFile:"\u0627\u062D\u0641\u0638 \u0627\u0644\u0645\u0644\u0641",newTab:"\u0639\u0644\u0627\u0645\u0629 \u062A\u0628\u0648\u064A\u0628 \u062C\u062F\u064A\u062F\u0629",applies_to:"\u064A\u0646\u0637\u0628\u0642 \u0639\u0644\u0649",license:"\u0627\u0644\u062A\u0631\u062E\u064A\u0635",no_license:"\u0644\u0627 \u064A\u0648\u062C\u062F",antifeatures:"\u0625\u0639\u0644\u0627\u0646\u0627\u062A",userjs_fullscreen:"\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A",listing_none:"(\u0644\u0627 \u064A\u0648\u062C\u062F)",export_config:"\u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631",export_theme:"\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0633\u0645\u0629",import_config:"\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F",import_theme:"\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0646\u0633\u0642",code_size:"\u062D\u062C\u0645 \u0627\u0644\u0631\u0645\u0632",prmpt_css:"\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0643\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u061F",userjs_inject:"\u062D\u0642\u0646 Userscript+",userjs_close:"\u0625\u063A\u0644\u0627\u0642 Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},de:{createdby:"Erstellt von",name:"Name",daily_installs:"T\xE4gliche Installationen",close:"Schlie\xDFen Sie",filterA:"Filter",max:"Maximieren Sie",min:"minimieren",search:"Suche",search_placeholder:"Suche nach Userscripts",install:"Installieren Sie",issue:"Neue Ausgabe",version_number:"Version",updated:"Zuletzt aktualisiert",total_installs:"Installationen insgesamt",ratings:"Bewertungen",good:"Gut",ok:"Okay",bad:"Schlecht",created_date:"Erstellt",redirect:"Greasy Fork f\xFCr Erwachsene",filter:"Andere Sprachen herausfiltern",dtime:"Zeit\xFCberschreitung anzeigen",save:"Speichern Sie",reset:"Zur\xFCcksetzen",preview_code:"Vorschau Code",saveFile:"Datei speichern",newTab:"Neue Registerkarte",applies_to:"Gilt f\xFCr",license:"Lizenz",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatischer Vollbildmodus",listing_none:"(Keine)",export_config:"Konfig exportieren",export_theme:"Thema exportieren",import_config:"Konfig importieren",import_theme:"Thema importieren",code_size:"Code Gr\xF6\xDFe",prmpt_css:"Als UserStyle installieren?",userjs_inject:"Userscript+ einf\xFCgen",userjs_close:"Userscript+ schlie\xDFen",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Quelltext",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},en:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search for userscripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Okay",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Download",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},en_GB:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search for userscripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Okay",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Download",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},es:{createdby:"Creado por",name:"Nombre",daily_installs:"Instalaciones diarias",close:"Ya no se muestra",filterA:"Filtro",max:"Maximizar",min:"Minimizar",search:"Busque en",search_placeholder:"Buscar userscripts",install:"Instalar",issue:"Nueva edici\xF3n",version_number:"Versi\xF3n",updated:"\xDAltima actualizaci\xF3n",total_installs:"Total de instalaciones",ratings:"Clasificaciones",good:"Bueno",ok:"Ok",bad:"Malo",created_date:"Creado",redirect:"Greasy Fork para adultos",filter:"Filtrar otros idiomas",dtime:"Mostrar el tiempo de espera",save:"Guardar",reset:"Reiniciar",preview_code:"Vista previa del c\xF3digo",saveFile:"Guardar archivo",newTab:"Guardar archivo",applies_to:"Se aplica a",license:"Licencia",no_license:"Desconocida",antifeatures:"Caracter\xEDsticas indeseables",userjs_fullscreen:"Pantalla completa autom\xE1tica",listing_none:"(Ninguno)",export_config:"Exportar configuraci\xF3n",export_theme:"Exportar tema",import_config:"Importar configuraci\xF3n",import_theme:"Importar tema",code_size:"C\xF3digo Tama\xF1o",prmpt_css:"\xBFInstalar como UserStyle?",userjs_inject:"Inyectar Userscript+",userjs_close:"Cerrar Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"C\xF3digo",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},fr:{createdby:"Cr\xE9\xE9 par",name:"Nom",daily_installs:"Installations quotidiennes",close:"Ne plus montrer",filterA:"Filtre",max:"Maximiser",min:"Minimiser",search:"Recherche",search_placeholder:"Rechercher des userscripts",install:"Installer",issue:"Nouveau num\xE9ro",version_number:"Version",updated:"Derni\xE8re mise \xE0 jour",total_installs:"Total des installations",ratings:"Notations",good:"Bon",ok:"Ok",bad:"Mauvais",created_date:"Cr\xE9\xE9",redirect:"Greasy Fork pour les adultes",filter:"Filtrer les autres langues",dtime:"D\xE9lai d'affichage",save:"Sauvez",reset:"R\xE9initialiser",preview_code:"Pr\xE9visualiser le code",saveFile:"Enregistrer le fichier",newTab:"Nouvel onglet",applies_to:"S'applique \xE0",license:"Licence",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Plein \xE9cran automatique",listing_none:"(Aucun)",export_config:"Export Config",export_theme:"Exporter le th\xE8me",import_config:"Importer la configuration",import_theme:"Importer le th\xE8me",code_size:"Code Taille",prmpt_css:"Installer comme UserStyle ?",userjs_inject:"Injecter Userscript+",userjs_close:"Fermer Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},ja:{createdby:"\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F",name:"\u540D\u524D",daily_installs:"\u30C7\u30A4\u30EA\u30FC\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",close:"\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F",filterA:"\u30D5\u30A3\u30EB\u30BF\u30FC",max:"\u6700\u5927\u5316",min:"\u30DF\u30CB\u30DE\u30E0",search:"\u691C\u7D22",search_placeholder:"\u30E6\u30FC\u30B6\u30FC\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u691C\u7D22",install:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",issue:"\u65B0\u520A\u306E\u3054\u6848\u5185",version_number:"\u30D0\u30FC\u30B8\u30E7\u30F3",updated:"\u6700\u7D42\u66F4\u65B0\u65E5",total_installs:"\u7DCF\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6570",ratings:"\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0",good:"\u30B0\u30C3\u30C9",ok:"\u826F\u3044",bad:"\u60AA\u3044",created_date:"\u4F5C\u6210",redirect:"\u5927\u4EBA\u306EGreasyfork",filter:"\u4ED6\u306E\u8A00\u8A9E\u3092\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u3059\u308B",dtime:"\u8868\u793A\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8",save:"\u62EF\u6551",reset:"\u30EA\u30BB\u30C3\u30C8",preview_code:"\u30B3\u30FC\u30C9\u306E\u30D7\u30EC\u30D3\u30E5\u30FC",saveFile:"\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58",newTab:"\u65B0\u3057\u3044\u30BF\u30D6",applies_to:"\u9069\u7528\u5BFE\u8C61",license:"\u30E9\u30A4\u30BB\u30F3\u30B9",no_license:"\u4E0D\u660E",antifeatures:"\u30A2\u30F3\u30C1\u6A5F\u80FD",userjs_fullscreen:"\u81EA\u52D5\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3",listing_none:"(\u306A\u3057)",export_config:"\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u8A2D\u5B9A",export_theme:"\u30C6\u30FC\u30DE\u306E\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",import_config:"\u8A2D\u5B9A\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",import_theme:"\u30C6\u30FC\u30DE\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",code_size:"\u30B3\u30FC\u30C9\u30FB\u30B5\u30A4\u30BA",prmpt_css:"UserStyle\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u304B\uFF1F",userjs_inject:"Userscript+ \u3092\u633F\u5165",userjs_close:"Userscript+ \u3092\u9589\u3058\u308B",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u30B3\u30FC\u30C9",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},nl:{createdby:"Gemaakt door",name:"Naam",daily_installs:"Dagelijkse Installaties",close:"Sluit",filterA:"Filter",max:"Maximaliseer",min:"Minimaliseer",search:"Zoek",search_placeholder:"Zoeken naar gebruikersscripts",install:"Installeer",issue:"Nieuw Issue",version_number:"Versie",updated:"Laatste Update",total_installs:"Totale Installaties",ratings:"Beoordeling",good:"Goed",ok:"Ok",bad:"Slecht",created_date:"Aangemaakt",redirect:"Greasy Fork voor volwassenen",filter:"Filter andere talen",dtime:"Weergave timeout",save:"Opslaan",reset:"Opnieuw instellen",preview_code:"Voorbeeldcode",saveFile:"Bestand opslaan",newTab:"Nieuw tabblad",applies_to:"Geldt voor",license:"Licentie",no_license:"N.v.t.",antifeatures:"Functies voor eigen gewin",userjs_fullscreen:"Automatisch volledig scherm",listing_none:"(Geen)",export_config:"Configuratie exporteren",export_theme:"Thema exporteren",import_config:"Configuratie importeren",import_theme:"Thema importeren",code_size:"Code Grootte",prmpt_css:"Installeren als UserStyle?",userjs_inject:"Injecteer Userscript+",userjs_close:"Sluit Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},pl:{createdby:"Stworzony przez",name:"Nazwa",daily_installs:"Codzienne instalacje",close:"Zamknij",filterA:"Filtr",max:"Maksymalizuj",min:"Minimalizuj",search:"Wyszukiwanie",search_placeholder:"Wyszukiwanie skrypt\xF3w u\u017Cytkownika",install:"Instalacja",issue:"Nowy numer",version_number:"Wersja",updated:"Ostatnia aktualizacja",total_installs:"\u0141\u0105czna liczba instalacji",ratings:"Oceny",good:"Dobry",ok:"Ok",bad:"Z\u0142y",created_date:"Utworzony",redirect:"Greasy Fork dla doros\u0142ych",filter:"Odfiltruj inne j\u0119zyki",dtime:"Limit czasu wy\u015Bwietlania",save:"Zapisz",reset:"Reset",preview_code:"Kod podgl\u0105du",saveFile:"Zapisz plik",newTab:"Nowa karta",applies_to:"Dotyczy",license:"Licencja",no_license:"N/A",antifeatures:"Antywzorce",userjs_fullscreen:"Automatyczny pe\u0142ny ekran",listing_none:"(Brak)",export_config:"Konfiguracja eksportu",export_theme:"Motyw eksportu",import_config:"Importuj konfiguracj\u0119",import_theme:"Importuj motyw",code_size:"Kod Rozmiar",prmpt_css:"Zainstalowa\u0107 jako UserStyle?",userjs_inject:"Wstrzyknij Userscript+",userjs_close:"Zamknij Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Kod",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},ru:{createdby:"\u0421\u0434\u0435\u043B\u0430\u043D\u043E",name:"\u0418\u043C\u044F",daily_installs:"\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438",close:"\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C",filterA:"\u0424\u0438\u043B\u044C\u0442\u0440",max:"\u041C\u0430\u043A\u0441\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C",min:"\u041C\u0438\u043D\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A",search_placeholder:"\u041F\u043E\u0438\u0441\u043A \u044E\u0437\u0435\u0440\u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432",install:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435",issue:"\u041D\u043E\u0432\u044B\u0439 \u0432\u044B\u043F\u0443\u0441\u043A",version_number:"\u0412\u0435\u0440\u0441\u0438\u044F",updated:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",total_installs:"\u0412\u0441\u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A",ratings:"\u0420\u0435\u0439\u0442\u0438\u043D\u0433\u0438",good:"\u0425\u043E\u0440\u043E\u0448\u043E",ok:"\u0425\u043E\u0440\u043E\u0448\u043E",bad:"\u041F\u043B\u043E\u0445\u043E",created_date:"\u0421\u043E\u0437\u0434\u0430\u043D\u043E",redirect:"Greasy Fork \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445",filter:"\u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u044F\u0437\u044B\u043A\u0438",dtime:"\u0422\u0430\u0439\u043C-\u0430\u0443\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",reset:"\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",preview_code:"\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043A\u043E\u0434\u0430",saveFile:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B",newTab:"\u041D\u043E\u0432\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430",applies_to:"\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A",license:"\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F",no_license:"\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E",antifeatures:"\u041D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",userjs_fullscreen:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",listing_none:"(\u043D\u0435\u0442)",export_config:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",export_theme:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0442\u0435\u043C\u044B",import_config:"\u0418\u043C\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",import_theme:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043C\u0443",code_size:"\u041A\u043E\u0434 \u0420\u0430\u0437\u043C\u0435\u0440",prmpt_css:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u043A UserStyle?",userjs_inject:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C Userscript+",userjs_close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},zh:{createdby:"\u7531...\u5236\u4F5C",name:"\u59D3\u540D",daily_installs:"\u65E5\u5E38\u5B89\u88C5",close:"\u4E0D\u518D\u663E\u793A",filterA:"\u8FC7\u6EE4\u5668",max:"\u6700\u5927\u5316",min:"\u6700\u5C0F\u5316",search:"\u641C\u7D22",search_placeholder:"\u641C\u7D22\u7528\u6237\u811A\u672C",install:"\u5B89\u88C5",issue:"\u65B0\u95EE\u9898",version_number:"\u7248\u672C",updated:"\u6700\u540E\u66F4\u65B0",total_installs:"\u603B\u5B89\u88C5\u91CF",ratings:"\u8BC4\u7EA7",good:"\u597D\u7684",ok:"\u597D\u7684",bad:"\u4E0D\u597D",created_date:"\u521B\u5EFA",redirect:"\u5927\u4EBA\u7684Greasyfork",filter:"\u8FC7\u6EE4\u6389\u5176\u4ED6\u8BED\u8A00",dtime:"\u663E\u793A\u8D85\u65F6",save:"\u62EF\u6551",reset:"\u91CD\u7F6E",preview_code:"\u9884\u89C8\u4EE3\u7801",saveFile:"\u4FDD\u5B58\u5B58\u6863",newTab:"\u65B0\u6807\u7B7E",applies_to:"\u9002\u7528\u4E8E",license:"\u8BB8\u53EF\u8BC1",no_license:"\u6682\u65E0",antifeatures:"\u53EF\u80FD\u4E0D\u53D7\u6B22\u8FCE\u7684\u529F\u80FD",userjs_fullscreen:"\u81EA\u52A8\u5168\u5C4F",listing_none:"(\u65E0)",export_config:"\u5BFC\u51FA\u914D\u7F6E",export_theme:"\u5BFC\u51FA\u4E3B\u9898",import_config:"\u5BFC\u5165\u914D\u7F6E",import_theme:"\u5BFC\u5165\u4E3B\u9898",code_size:"\u4EE3\u7801 \u5C3A\u5BF8",prmpt_css:"\u5B89\u88C5\u4E3A\u7528\u6237\u98CE\u683C\uFF1F",userjs_inject:"\u6CE8\u5165 Userscript+",userjs_close:"\u5173\u95ED Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u4EE3\u7801",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},zh_CN:{createdby:"\u7531...\u5236\u4F5C",name:"\u59D3\u540D",daily_installs:"\u65E5\u5E38\u5B89\u88C5",close:"\u4E0D\u518D\u663E\u793A",filterA:"\u8FC7\u6EE4\u5668",max:"\u6700\u5927\u5316",min:"\u6700\u5C0F\u5316",search:"\u641C\u7D22",search_placeholder:"\u641C\u7D22\u7528\u6237\u811A\u672C",install:"\u5B89\u88C5",issue:"\u65B0\u95EE\u9898",version_number:"\u7248\u672C",updated:"\u6700\u540E\u66F4\u65B0",total_installs:"\u603B\u5B89\u88C5\u91CF",ratings:"\u8BC4\u7EA7",good:"\u597D\u7684",ok:"\u597D\u7684",bad:"\u4E0D\u597D",created_date:"\u521B\u5EFA",redirect:"\u5927\u4EBA\u7684Greasyfork",filter:"\u8FC7\u6EE4\u6389\u5176\u4ED6\u8BED\u8A00",dtime:"\u663E\u793A\u8D85\u65F6",save:"\u62EF\u6551",reset:"\u91CD\u7F6E",preview_code:"\u9884\u89C8\u4EE3\u7801",saveFile:"\u4FDD\u5B58\u5B58\u6863",newTab:"\u65B0\u6807\u7B7E",applies_to:"\u9002\u7528\u4E8E",license:"\u8BB8\u53EF\u8BC1",no_license:"\u6682\u65E0",antifeatures:"\u53EF\u80FD\u4E0D\u53D7\u6B22\u8FCE\u7684\u529F\u80FD",userjs_fullscreen:"\u81EA\u52A8\u5168\u5C4F",listing_none:"(\u65E0)",export_config:"\u5BFC\u51FA\u914D\u7F6E",export_theme:"\u5BFC\u51FA\u4E3B\u9898",import_config:"\u5BFC\u5165\u914D\u7F6E",import_theme:"\u5BFC\u5165\u4E3B\u9898",code_size:"\u4EE3\u7801 \u5C3A\u5BF8",prmpt_css:"\u5B89\u88C5\u4E3A\u7528\u6237\u98CE\u683C\uFF1F",userjs_inject:"\u6CE8\u5165 Userscript+",userjs_close:"\u5173\u95ED Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u4EE3\u7801",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},zh_TW:{createdby:"\u7531...\u5236\u4F5C",name:"\u59D3\u540D",daily_installs:"\u65E5\u5E38\u5B89\u88C5",close:"\u4E0D\u518D\u663E\u793A",filterA:"\u8FC7\u6EE4\u5668",max:"\u6700\u5927\u5316",min:"\u6700\u5C0F\u5316",search:"\u641C\u7D22",search_placeholder:"\u641C\u7D22\u7528\u6237\u811A\u672C",install:"\u5B89\u88C5",issue:"\u65B0\u95EE\u9898",version_number:"\u7248\u672C",updated:"\u6700\u540E\u66F4\u65B0",total_installs:"\u603B\u5B89\u88C5\u91CF",ratings:"\u8BC4\u7EA7",good:"\u597D\u7684",ok:"\u597D\u7684",bad:"\u4E0D\u597D",created_date:"\u521B\u5EFA",redirect:"\u5927\u4EBA\u7684Greasyfork",filter:"\u8FC7\u6EE4\u6389\u5176\u4ED6\u8BED\u8A00",dtime:"\u663E\u793A\u8D85\u65F6",save:"\u62EF\u6551",reset:"\u91CD\u7F6E",preview_code:"\u9884\u89C8\u4EE3\u7801",saveFile:"\u4FDD\u5B58\u5B58\u6863",newTab:"\u65B0\u6807\u7B7E",applies_to:"\u9002\u7528\u4E8E",license:"\u8BB8\u53EF\u8BC1",no_license:"\u6682\u65E0",antifeatures:"\u53EF\u80FD\u4E0D\u53D7\u6B22\u8FCE\u7684\u529F\u80FD",userjs_fullscreen:"\u81EA\u52A8\u5168\u5C4F",listing_none:"(\u65E0)",export_config:"\u5BFC\u51FA\u914D\u7F6E",export_theme:"\u5BFC\u51FA\u4E3B\u9898",import_config:"\u5BFC\u5165\u914D\u7F6E",import_theme:"\u5BFC\u5165\u4E3B\u9898",code_size:"\u4EE3\u7801 \u5C3A\u5BF8",prmpt_css:"\u4F5C\u70BA\u4F7F\u7528\u8005\u6A23\u5F0F\u5B89\u88DD\uFF1F",userjs_inject:"\u6CE8\u5165\u7528\u6236\u8173\u672C+",userjs_close:"\u95DC\u9589\u7528\u6236\u8173\u672C+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u4EE3\u78BC",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"}},Ke=`mujs-root {
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

mujs-config,
tab-root,
mujs-column,
mujs-row,
.mujs-sty-flex {
  display: flex;
}

mujs-config,
mujs-column,
mujs-row {
  gap: 0.5em;
}

mujs-column count-frame[data-type=greasyfork] {
  background: var(--mujs-gf-color, hsl(204, 100%, 40%));
}
mujs-column count-frame[data-type=sleazyfork] {
  background: var(--mujs-sf-color, hsl(12, 86%, 50%));
}
mujs-column count-frame[data-type=github] {
  background: hsl(213, 13%, 16%);
}
mujs-column count-frame[data-type=openuserjs] {
  background: hsla(12, 86%, 50%, 0.568);
}
@media screen and (max-width: 800px) {
  mujs-column {
    flex-flow: row wrap;
  }
}

mujs-config,
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
mujs-main mujs-toolbar tab-root {
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
mujs-main tab-root {
  gap: 0.5em;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-flow: row wrap;
}
mujs-main tab-root tab-content {
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
  mujs-main tab-root tab-content {
    min-width: 6em !important;
  }
}
mujs-main tab-root tab-content.active {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
mujs-main tab-root tab-content:not(.active):hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
mujs-main tab-root tab-content tab-host {
  float: left;
  overflow: auto;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
}
mujs-main tab-root tab-content tab-close {
  float: right;
}
mujs-main tab-root tab-add {
  order: 999999999999;
  font-size: 20px;
  padding: 0px 0.25em;
}
mujs-main tab-root tab-add:hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
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
mujs-main mujs-config *:not(input[type=password], input[type=text], input[type=number]) {
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
  top: 1%;
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

mujs-mainframe {
  background: transparent;
  position: fixed;
  bottom: var(--mujs-position-bottom, 1rem);
  right: var(--mujs-position-right, 1rem);
  top: var(--mujs-position-top, unset);
  left: var(--mujs-position-left, unset);
}
mujs-mainframe count-frame {
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  height: auto;
  padding: 14px 16px;
}
mujs-mainframe.error {
  opacity: 1 !important;
}
mujs-mainframe.error count-frame {
  background: var(--mujs-even-err, hsl(0, 100%, 22%)) !important;
}
mujs-mainframe:not(.hidden) {
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
  mujs-body table .frame:not(.webext-page) td > mujs-column > mujs-config,
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
mujs-body table th[data-tag=name] {
  width: 50%;
}
@media screen and (max-width: 800px) {
  mujs-body table th[data-tag=name] {
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
  mujs-config {
    margin: 0px auto 1rem auto !important;
  }
}
mujs-config mujs-section {
  border-radius: 16px;
  padding: 0.5em;
}
mujs-config mujs-section:nth-child(even) {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
mujs-config mujs-section:nth-child(even) input,
mujs-config mujs-section:nth-child(even) select {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%));
}
mujs-config mujs-section:nth-child(even) select option {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%));
}
mujs-config mujs-section:nth-child(even) select option:hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
mujs-config mujs-section:nth-child(odd) {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;
}
mujs-config mujs-section:nth-child(odd) input,
mujs-config mujs-section:nth-child(odd) select {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
mujs-config mujs-section:nth-child(odd) select option {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
mujs-config mujs-section:nth-child(odd) select option:hover {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;
}
mujs-config mujs-section[data-name=theme] .sub-section {
  border-radius: 4px;
}
mujs-config mujs-section[data-name=theme] .sub-section:nth-child(even) {
  background: var(--mujs-even-row, hsl(222, 14%, 18%));
}
mujs-config mujs-section[data-name=theme] .sub-section:nth-child(odd) {
  background: var(--mujs-odd-row, hsl(222, 14%, 33%));
}
mujs-config mujs-section[data-name=theme] input,
mujs-config mujs-section[data-name=theme] select {
  background: inherit;
}
mujs-config mujs-section[data-name=theme] select option {
  background: inherit;
}
mujs-config mujs-section[data-name=theme] select option:hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
mujs-config mujs-section svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
  background: transparent;
}
mujs-config mujs-section[data-name=exp], mujs-config mujs-section[data-name=blacklist] {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.25em;
}
mujs-config mujs-section[data-name=exp] > mujs-btn:hover, mujs-config mujs-section[data-name=blacklist] > mujs-btn:hover {
  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;
}
mujs-config mujs-section[data-name=exp] > mujs-btn, mujs-config mujs-section[data-name=blacklist] > mujs-btn {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
}
mujs-config mujs-section input[type=text]::-webkit-input-placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
mujs-config mujs-section input[type=text]::-moz-placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
mujs-config mujs-section input[type=text]:-ms-input-placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
mujs-config mujs-section input[type=text]::-ms-input-placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
mujs-config mujs-section input[type=text]::placeholder {
  color: var(--mujs-placeholder, hsl(81, 56%, 54%));
}
mujs-config mujs-section > label:not([data-blacklist]) {
  display: flex;
  justify-content: space-between;
}
mujs-config mujs-section > label[data-blacklist] {
  display: grid;
  grid-auto-flow: column;
}
mujs-config mujs-section > label[data-blacklist]:not(.new-list) {
  grid-template-columns: repeat(2, 1fr);
}
mujs-config mujs-section > label.new-list {
  order: 999999999999;
}
mujs-config mujs-section > label.new-list mujs-add {
  font-size: 20px;
}
mujs-config mujs-section > label input:not([type=checkbox]) {
  font-size: 14px;
  position: relative;
  border-radius: 4px;
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
}
mujs-config mujs-section select,
mujs-config mujs-section select option {
  color: var(--mujs-txt-color, hsl(0, 0%, 100%));
  border: 1px solid transparent;
  list-style: none;
  outline-style: none;
  pointer-events: auto;
}
mujs-config mujs-section select {
  text-align: center;
  border-radius: 4px;
}
mujs-config mujs-section > *.sub-section {
  padding: 0.2em;
}
mujs-config mujs-section > *.sub-section[data-engine] {
  flex-wrap: wrap;
}
mujs-config mujs-section > *.sub-section[data-engine] input {
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
}
mujs-config mujs-section > *.sub-section input[type=text] {
  margin: 0.2em 0px;
}
mujs-config .mujs-inlab {
  position: relative;
  width: 38px;
}
mujs-config .mujs-inlab input[type=checkbox] {
  display: none;
}
mujs-config .mujs-inlab input[type=checkbox]:checked + label {
  margin-left: 0;
  background: var(--mujs-chck-color, hsla(0, 0%, 100%, 0.568));
}
mujs-config .mujs-inlab input[type=checkbox]:checked + label:before {
  right: 0px;
}
mujs-config .mujs-inlab input[type=checkbox][data-name=greasyfork]:checked + label {
  background: var(--mujs-gf-color, hsl(204, 100%, 40%));
}
mujs-config .mujs-inlab input[type=checkbox][data-name=sleazyfork]:checked + label {
  background: var(--mujs-sf-color, hsl(12, 86%, 50%));
}
mujs-config .mujs-inlab input[type=checkbox][data-name=openuserjs]:checked + label {
  background: var(--mujs-chck-open, hsla(12, 86%, 50%, 0.568));
}
mujs-config .mujs-inlab input[type=checkbox][data-name=github]:checked + label {
  background: var(--mujs-chck-git, hsla(213, 13%, 16%, 0.568));
}
mujs-config .mujs-inlab label {
  padding: 0;
  display: block;
  overflow: hidden;
  height: 16px;
  border-radius: 20px;
  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));
}
mujs-config .mujs-inlab label:before {
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
mujs-config .mujs-sty-flex mujs-btn {
  margin: auto;
}
mujs-config .mujs-sty-flex mujs-btn[data-command=reset] {
  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));
  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));
}
mujs-config .mujs-sty-flex mujs-btn[data-command=reset]:hover {
  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));
  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));
}
mujs-config .mujs-sty-flex mujs-btn[data-command=save] {
  background: var(--mujs-gf-color, hsl(204, 100%, 40%));
  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));
}
mujs-config .mujs-sty-flex mujs-btn[data-command=save]:hover {
  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));
  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));
}
mujs-config:not(.webext-page) {
  margin: 1rem 25rem;
}
mujs-config {
  height: fit-content;
  height: -moz-fit-content;
  height: -webkit-fit-content;
  display: flex;
  flex-flow: column wrap;
  gap: 0.5em;
}
@media screen and (max-height: 720px) {
  mujs-config:not(.webext-page) {
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
mujs-config mujs-section *:not(input[type=text], input[type=number], [data-theme], [data-blacklist]),
.mainbtn,
mujs-mainframe,
mujs-btn {
  cursor: pointer !important;
}`;class B extends null{static#e="[%cMagic Userscript+%c]";static#t="color: rgb(29, 155, 240);";static dbg(...e){const t=new Date;console.debug(`${B.#e} %cDBG`,B.#t,"","color: rgb(255, 212, 0);",`[${t.getHours()}:${("0"+t.getMinutes()).slice(-2)}:${("0"+t.getSeconds()).slice(-2)}]`,...e)}static err(...e){console.error(`${B.#e} %cERROR`,B.#t,"","color: rgb(249, 24, 128);",...e);const t=B.#e.replace(/%c/g,"");for(const s of e.filter(r=>r instanceof Error&&"cause"in r&&!Object.is(r.name,"")))B.alert(`${t} ${s.message} Caused by: ${s.cause}`)}static info(...e){console.info(`${B.#e} %cINF`,B.#t,"","color: rgb(0, 186, 124);",...e)}static log(...e){console.log(`${B.#e} %cLOG`,B.#t,"","color: rgb(219, 160, 73);",...e)}static alert(e){typeof alert<"u"&&alert(e)}}const{err:Je,info:ye}=B;let X={};function Ze(){const o=e=>e&&e.Math===Math&&e;return o(typeof globalThis=="object"&&globalThis)||o(typeof window=="object"&&window)||o(typeof self=="object"&&self)||void 0}const V=Ze();if(V==null)return;const Ne={XMLHttpRequest:V.XMLHttpRequest,customElements:V.customElements,createElement:V.document.createElement.bind(V.document),createElementNS:V.document.createElementNS.bind(V.document),createTextNode:V.document.createTextNode.bind(V.document),setTimeout:V.setTimeout,clearTimeout:V.clearTimeout,navigator:V.navigator,scheduler:{postTask(o,e){return"scheduler"in V&&"postTask"in V.scheduler?V.scheduler.postTask(o,e):(e=Object.assign({},e),e.delay===void 0&&(e.delay=0),e.delay=Number(e.delay),e.delay<0?Promise.reject(new TypeError('"delay" must be a positive number.')):new Promise(t=>{V.setTimeout(()=>{t(o())},e.delay)}))},yield(){return"scheduler"in V&&"yield"in V.scheduler?V.scheduler.yield():new Promise(o=>{V.setTimeout(o,0)})}},groupBy(o,e){return"groupBy"in Object?Object.groupBy(o,e):o.reduce((t={},...s)=>{const r=e(...s);return t[r]??=[],t[r].push(s[0]),t},{})}};for(const[o,e]of Object.entries(Ne))if(!(/scheduler|navigator|customElements/.test(o)||typeof e=="function"))throw new Error(`Safe "${o}" returned "${e}"`,{cause:"_self"});X=Ne;const we=function(){},Ae=async function(){},he="about:blank";let j,fe;try{typeof window=="object"&&(fe=new URL(window.location.href))}catch{fe=new URL(he)}const $e=o=>{let e;return typeof o=="string"&&(e=o.replace(/^www\./,"")),e||""},Fe=o=>{let e;return typeof o=="string"&&(e=o.split(".").splice(-2).join(".").replace(/\/|https:/g,"")),e||""},Ie=o=>Fe($e(o));function pe(o){try{return Object.prototype.toString.call(o).match(/\[object (.*)\]/)?.[1]||""}catch{return""}}const be=o=>/Document|Element|HTML/.test(pe(o)),H=o=>/Function/.test(pe(o)),ge=o=>/Document|Element|HTML|Window/.test(pe(o)),Y=o=>/Object/.test(pe(o));function ne(o,e,t){if(o==null)return[];if(Array.isArray(o))return o;if(o instanceof Window||o instanceof Document)return[o];if(ge(o))return Array.of(o);const s=Object.assign({},e),r=["entries","keys","values"].find(p=>p in s||s[p]);if(typeof o=="string")return t instanceof Element||t instanceof Document?[...t.querySelectorAll(o)]:r==="keys"&&typeof t=="string"?o.split(t):r==="keys"?[...o]:[o];if(r!=null){const p=pe(o);if(/Object/.test(p)){const v=r;if(Object[v])return Array.from(Object[v](o))}else if(/Set|Map/.test(p)){const v=o,w=r;if(v[w])return Array.from(v[w]())}}return Array.from(o)}const Ue=o=>/RegExp/.test(pe(o)),xe=o=>typeof o=="string"&&/\.user\.css$/.test(o),Xe=o=>typeof o=="string"&&/\.user\.js$/.test(o),J=o=>Object.is(o,null)||Object.is(o,void 0),ae=o=>typeof o=="string"?Object.is(o.replaceAll("\0","").trim(),""):Object.is(ne(o,{keys:!0}).length,0),F=o=>J(o)||ae(o),Le=o=>JSON.parse(JSON.stringify(o)),Ee=(()=>{const{navigator:o}=X;if(o){const{userAgent:e="",userAgentData:t={}}=o,{platform:s="",mobile:r=!1}=Object(t);return/Mobile|Tablet/.test(String(e))||!!r||/Android|Apple/.test(String(s))}return!1})();class N extends null{static#e={script:{icon:"",name:"Magic Userscript+",namespace:"https://github.com/magicoflolis/Userscript-Plus",updateURL:"https://github.com/magicoflolis/Userscript-Plus/raw/master/dist/magic-userjs.js",version:"Bookmarklet",bugs:"https://github.com/magicoflolis/Userscript-Plus/issues"}};static get isGM(){return typeof GM<"u"||typeof GM_xmlhttpRequest<"u"}static async wrap(e){return e}static addElement(){return(typeof GM.addElement<"u"&&H(GM.addElement)&&GM.addElement||typeof GM_addElement<"u"&&H(GM_addElement)&&GM_addElement||we)(...arguments)}static openInTab(){return(typeof GM.openInTab<"u"&&H(GM.openInTab)&&GM.openInTab||typeof GM_openInTab<"u"&&H(GM_openInTab)&&GM_openInTab||window.open)(...arguments)}static get info(){return typeof GM.info<"u"&&Y(GM.info)&&GM.info||typeof GM_info<"u"&&Y(GM_info)&&GM_info||N.#e}static async setValue(){return await(typeof GM.setValue<"u"&&H(GM.setValue)&&GM.setValue||typeof GM_setValue<"u"&&H(GM_setValue)&&N.wrap(GM_setValue)||Ae)(...arguments)}static async getValue(){return await(typeof GM.getValue<"u"&&H(GM.getValue)&&GM.getValue||typeof GM_getValue<"u"&&H(GM_getValue)&&N.wrap(GM_getValue)||Ae)(...arguments)}static registerMenuCommand(){return(typeof GM.registerMenuCommand<"u"&&H(GM.registerMenuCommand)&&GM.registerMenuCommand||typeof GM_registerMenuCommand<"u"&&H(GM_registerMenuCommand)&&GM_registerMenuCommand||we)(...arguments)}static xmlHttpRequest(){return(typeof GM.xmlHttpRequest<"u"&&H(GM.xmlHttpRequest)&&GM.xmlHttpRequest||typeof GM_xmlhttpRequest<"u"&&H(GM_xmlhttpRequest)&&N.wrap(GM_xmlhttpRequest)||function(t){return new Promise((s,r)=>{const p=new X.XMLHttpRequest;let v="GET",w=he,$;for(const[T,O]of ne(t,{entries:!0}))if(H(O)){const[,D]=/^on(\w+)/g.exec(T)||[];D&&(/progress/i.test(D)?p.addEventListener(D,O):p.addEventListener(D,oe=>{O(oe),/error|abort/.test(D)?r(oe):s(oe)}))}else typeof O=="string"?T==="responseType"?p.responseType=/buffer/i.test(O)?"arraybuffer":O:T==="method"?v=O:T==="url"&&(w=O):O instanceof URL?w=O:T==="body"&&($=O);p.open(v,w),F(p.responseType)&&(p.responseType="text"),$?p.send($):p.send()})})(...arguments)}}const Ge={local:/localhost|router|gov|(\d+\.){3}\d+/,finance:/school|pay|bank|money|cart|checkout|authorize|bill|wallet|venmo|zalo|skrill|bluesnap|coin|crypto|currancy|insurance|finance/,social:/login|join|signin|signup|sign-up|password|reset|password_reset/,unsupported:{host:"fakku.net",pathname:"/hentai/.+/read/page/.+"}},W={autofetch:!1,autoinject:!0,autoSort:"daily_installs",clearTabCache:!0,cache:!0,autoexpand:!1,filterlang:!1,sleazyredirect:!1,time:1e4,blacklist:["userjs-local","userjs-finance","userjs-social","userjs-unsupported"],preview:{code:!1,metadata:!1},engines:[{enabled:!0,name:"greasyfork",query:encodeURIComponent("https://api.greasyfork.org/scripts/by-site/{host}.json?language=all"),unsupported:["pornhub.com"]},{enabled:!1,name:"sleazyfork",query:encodeURIComponent("https://api.sleazyfork.org/scripts/by-site/{host}.json?language=all"),unsupported:["pornhub.com"]},{enabled:!1,name:"openuserjs",query:encodeURIComponent("https://openuserjs.org/?q={host}"),unsupported:[]},{enabled:!1,name:"github",token:"",query:encodeURIComponent("https://api.github.com/search/repositories?q=topic:{domain}+topic:userscript"),unsupported:[]}],theme:{"even-row":"","odd-row":"","even-err":"","odd-err":"","background-color":"","gf-color":"","sf-color":"","border-b-color":"","gf-btn-color":"","sf-btn-color":"","sf-txt-color":"","txt-color":"","chck-color":"","chck-gf":"","chck-git":"","chck-open":"",placeholder:"","position-top":"","position-bottom":"","position-left":"","position-right":"","font-family":""},recommend:{author:!0,others:!0,authorID:166061,authorUrl:"https://github.com/magicoflolis",blacklist:[478597],list:[33005,394820,438684,4870,394420,25068,483444,1682,22587,789,28497,386908,24204,404443,4336,368183,393396,473830,12179,423001,376510,23840,40525,6456,"https://openuserjs.org/install/Patabugen/Always_Remember_Me.user.js","https://openuserjs.org/install/nokeya/Direct_links_out.user.js","https://github.com/jijirae/y2monkey/raw/main/y2monkey.user.js","https://github.com/jijirae/r2monkey/raw/main/r2monkey.user.js","https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js","https://github.com/jesus2099/konami-command/raw/master/INSTALL-USER-SCRIPT.user.js","https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js"]},filters:{ASCII:{enabled:!1,name:"Non-ASCII",regExp:"[^\\x00-\\x7F\\s]+"},Latin:{enabled:!1,name:"Non-Latin",regExp:"[^\\u0000-\\u024F\\u2000-\\u214F\\s]+"},Games:{enabled:!1,name:"Games",flag:"iu",regExp:"Aimbot|AntiGame|Agar|agar\\.io|alis\\.io|angel\\.io|ExtencionRipXChetoMalo|AposBot|DFxLite|ZTx-Lite|AposFeedingBot|AposLoader|Balz|Blah Blah|Orc Clan Script|Astro\\s*Empires|^\\s*Attack|^\\s*Battle|BiteFight|Blood\\s*Wars|Bloble|Bonk|Bots|Bots4|Brawler|\\bBvS\\b|Business\\s*Tycoon|Castle\\s*Age|City\\s*Ville|chopcoin\\.io|Comunio|Conquer\\s*Club|CosmoPulse|cursors\\.io|Dark\\s*Orbit|Dead\\s*Frontier|Diep\\.io|\\bDOA\\b|doblons\\.io|DotD|Dossergame|Dragons\\s*of\\s*Atlantis|driftin\\.io|Dugout|\\bDS[a-z]+\\n|elites\\.io|Empire\\s*Board|eRep(ublik)?|Epicmafia|Epic.*War|ExoPlanet|Falcon Tools|Feuerwache|Farming|FarmVille|Fightinfo|Frontier\\s*Ville|Ghost\\s*Trapper|Gladiatus|Goalline|Gondal|gota\\.io|Grepolis|Hobopolis|\\bhwm(\\b|_)|Ikariam|\\bIT2\\b|Jellyneo|Kapi\\s*Hospital|Kings\\s*Age|Kingdoms?\\s*of|knastv(o|oe)gel|Knight\\s*Fight|\\b(Power)?KoC(Atta?ck)?\\b|\\bKOL\\b|Kongregate|Krunker|Last\\s*Emperor|Legends?\\s*of|Light\\s*Rising|lite\\.ext\\.io|Lockerz|\\bLoU\\b|Mafia\\s*(Wars|Mofo)|Menelgame|Mob\\s*Wars|Mouse\\s*Hunt|Molehill\\s*Empire|MooMoo|MyFreeFarm|narwhale\\.io|Neopets|NeoQuest|Nemexia|\\bOGame\\b|Ogar(io)?|Pardus|Pennergame|Pigskin\\s*Empire|PlayerScripts|pokeradar\\.io|Popmundo|Po?we?r\\s*(Bot|Tools)|PsicoTSI|Ravenwood|Schulterglatze|Skribbl|slither\\.io|slitherplus\\.io|slitheriogameplay|SpaceWars|splix\\.io|Survivio|\\bSW_[a-z]+\\n|\\bSnP\\b|The\\s*Crims|The\\s*West|torto\\.io|Travian|Treasure\\s*Isl(and|e)|Tribal\\s*Wars|TW.?PRO|Vampire\\s*Wars|vertix\\.io|War\\s*of\\s*Ninja|World\\s*of\\s*Tanks|West\\s*Wars|wings\\.io|\\bWoD\\b|World\\s*of\\s*Dungeons|wtf\\s*battles|Wurzelimperium|Yohoho|Zombs"},SocialNetworks:{enabled:!1,name:"Social Networks",flag:"iu",regExp:"Face\\s*book|Google(\\+| Plus)|\\bHabbo|Kaskus|\\bLepra|Leprosorium|MySpace|meinVZ|odnoklassniki|\u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438|Orkut|sch(ue|\xFC)ler(VZ|\\.cc)?|studiVZ|Unfriend|Valenth|VK|vkontakte|\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435|Qzone|Twitter|TweetDeck"},Clutter:{enabled:!1,name:"Clutter",flag:"iu",regExp:"^\\s*(.{1,3})\\1+\\n|^\\s*(.+?)\\n+\\2\\n*$|^\\s*.{1,5}\\n|do\\s*n('|o)?t (install|download)|nicht installieren|(just )?(\\ban? |\\b)test(ing|s|\\d|\\b)|^\\s*.{0,4}test.{0,4}\\n|\\ntest(ing)?\\s*|^\\s*(\\{@|Smolka|Hacks)|\\[\\d{4,5}\\]|free\\s*download|theme|(night|dark) ?(mode)?"}}};class Z extends null{static#e=new Map(Object.entries(We));static toDate(e){const{navigator:t}=X,s=typeof e=="string"?new Date(e):e;return new Intl.DateTimeFormat(t.language).format(s)}static toNumber(e){const{navigator:t}=X;return new Intl.NumberFormat(t.language).format(e)}static i18n$(e){let t="INVALID KEY";try{const s=Z.#e;if(s.has(Z.current)?t=s.get(Z.current):t=s.get("en"),Y(t)&&e in t)return t[e]}catch(s){B.err(s),t="ERROR OCCURED"}return t}static get current(){const{navigator:e}=X;return e.language.split("-").find(t=>Z.#e.has(t))||"en"}}const{i18n$:_}=Z,je=o=>{let e=o;for(;;)try{const t=decodeURIComponent(e);if(t===e)return e;e=t}catch{return e}},K=(o,e)=>(e||document).querySelector(o),ie=(o,e)=>(e||document).querySelectorAll(o),ve=(o,e)=>Ee&&typeof TouchEvent<"u"?o:e,te=(o,e,t,s)=>{s===void 0||typeof s=="boolean"?s={capture:!0}:s.capture=!0;for(const r of ne(o).filter(ge)){if(e==="click"&&Ee){r.addEventListener(ve("touchstart","click"),t,s);continue}r.addEventListener(e,t,s)}};function Be(o,e){const t=(Array.isArray(e)?e:typeof e=="string"?e.split(" "):[]).filter(s=>typeof s=="string"&&!ae(s));ae(t)||o.classList.add(...t)}function Se(o,e){if(o!=null&&Y(e))for(const[t,s]of Object.entries(e))/^_mujs/i.test(t)?o[t]=s:Y(s)?Se(o[t],s):H(s)?/^on/.test(t)?o[t]=s:o.addEventListener(t,s):/^class/i.test(t)?Be(o,s):o.tagName==="A"&&typeof s=="string"&&/^(download|type)/i.test(t)?o.setAttribute(t,s):o[t]=s;return o}const l=(o,...e)=>{const t=X.createElement(o);for(let s=0;s<e.length;s++){const r=e[s];if(s===0)Be(t,r);else if(s===1&&typeof r=="string"&&!F(r)){t.textContent=r;continue}Se(t,r)}return t};class h extends null{static HTML(e){return ne(e).filter(ge)}static attr(e,t,s){for(const r of h.HTML(e)){if(s===void 0)return r.getAttribute(t)||void 0;s===null?r.removeAttribute(t):r.setAttribute(t,s)}}static prop(e,t,s=void 0){const r=h.HTML(e);if(s===void 0)return r.find(p=>p[t]);for(const p of r)p[t]=s}static text(e,t){const s=h.HTML(e);if(t===void 0)return s.length!==0?s[0].textContent:void 0;for(const r of s)r.textContent=t}static remove(e){return h.HTML(e).some(t=>t.remove()),h}static rmChildren(e){for(const t of h.HTML(e))for(const s of t.children)s&&s.remove()}static get cl(){return{add(e,t){const s=ne(t,{keys:!0}," ");return h.HTML(e).some(r=>r.classList.add(...s))},remove(e,t){const s=ne(t,{keys:!0}," ");return h.HTML(e).some(r=>r.classList.remove(...s))},toggle(e,t,s){let r;for(const p of h.HTML(e))r=p.classList.toggle(t,s);return r},has(e,t){return h.HTML(e).some(s=>s.classList.contains(t))}}}}class Ye{eventListeners=new Map;events=new Set;pool=new Set;blank=he;protocal="mujs:";protoReg=new RegExp(`${this.protocal}(.+)`,"i");custom=we;el={add:l("tab-add",{textContent:"+",dataset:{command:"new-tab"}}),head:l("tab-root")};constructor(e){this.el.head.append(this.el.add),e&&(this.el.root=e,this.el.root.append(this.el.head))}get _pool(){return ne(this.pool).filter(e=>!J(e))}get _active(){return this._pool.find(({classList:e})=>e.contains("active"))||null}getTab(e){const t=this.validate(e);return this._pool.find(({dataset:s})=>s.host===t)||null}validate(e){return typeof e=="string"?e:e instanceof URL||e instanceof Location?e.toString():""}addListener(e,t,s){const r={type:e,listener:t};this.events.has(r)||(F(s)||(r.options=s),this.events.add(r))}#e(e,...t){for(const s of ne(this.events).filter(r=>r.type===e))H(s.listener)&&s.listener.call(this,...t),Y(s.options)&&s.options.once===!0&&this.events.delete(event);return this}addEventListener(e,t,s){this.eventListeners.has(e)||this.eventListeners.set(e,new Set);const r={listener:t,options:s},p=this.eventListeners.get(e);p&&!p.has(r)&&p.add(r)}dispatchEvent(e){const t=e.type;if(!(t in this.eventListeners))return!0;const s=this.eventListeners.get(t)||new Set;for(const r of ne(s))r.listener(e);return!e.defaultPrevented}intFN(e){const t=this.validate(e),[,s]=this.protoReg.exec(t)||[];return this.#e("internal",s,e)}active(e,t=!0){return be(e)?(this.pool.has(e)||this.pool.add(e),this.#e("active",e,t)):this}close(e){return be(e)&&(this.pool.has(e)&&this.pool.delete(e),this.#e("close",e),e.remove()),this}create(e=void 0){if(typeof e=="string"){const v=this.getTab(e);if(this.protoReg.test(e)&&v)return this.active(v),null}const t=l("tab-content",{dataset:{command:"switch-tab"},style:`order: ${this.el.head.childElementCount};`}),s=l("tab-close",{dataset:{command:"close-tab"},title:_("close"),textContent:"X"}),r=l("tab-host");t.append(r,s),this.el.head.append(t),this.active(t,!1);const[,p]=this.protoReg.exec(e)??[];return this.#e("create",t,r,s,p,e),t}}class De{ids=[];set(e,t){return new Promise((s,r)=>{const p=X.setTimeout(()=>{this.clear(p),typeof t=="string"?r(new Error(t)):s()},e);this.ids.push(p)})}clear(...e){return this.ids=this.ids.filter(t=>e.includes(t)?(X.clearTimeout(t),!1):!0),this}}class U extends null{static type={_:{viewBox:"0 0 0 0"},close:{viewBox:"0 0 384 512",html:'<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>'},code:{viewBox:"0 0 640 512",html:'<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>'},collapse:{viewBox:"0 0 448 512",html:'<path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/>'},download:{viewBox:"0 0 384 512",html:'<path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>'},expand:{viewBox:"0 0 448 512",html:'<path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/>'},gear:{viewBox:"0 0 512 512",html:'<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>'},github:{viewBox:"0 0 496 512",html:'<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>'},globe:{viewBox:"0 0 512 512",html:'<path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>'},info:{viewBox:"0 0 512 512",html:'<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>'},install:{viewBox:"0 0 512 512",html:'<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>'},issue:{viewBox:"0 0 512 512",html:'<path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/>'},minus:{viewBox:"0 0 448 512",html:'<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>'},nav:{viewBox:"0 0 448 512",html:'<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>'},pager:{viewBox:"0 0 512 512",html:'<path d="M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm64 32l0 64c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zM80 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0z"/>'},verified:{viewBox:"0 0 56 56",fill:"currentColor",stroke:"currentColor",html:'<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z"/></g>'},refresh:{viewBox:"0 0 512 512",fill:"currentColor",html:'<path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/>'}};static load(e,t){e in U.type||(e="_");const s=X.createElementNS("http://www.w3.org/2000/svg","svg"),r=U.type[e];for(const[p,v]of Object.entries(r))p!=="html"&&s.setAttributeNS(null,p,v);try{typeof r.html=="string"&&(s.innerHTML=r.html,s.setAttribute("id",`mujs_${e}`))}catch{}return Se(s,t),be(t)?(t.appendChild(s),s):s.outerHTML}}class ee extends null{static#e=window.localStorage||{};static prefix="MUJS";static getItem(e){return ee.#e.getItem(`${ee.prefix}-${e}`)}static has(e){return ee.getItem(e)!=null}static setItem(e,t){return ee.#e.setItem(`${ee.prefix}-${e}`,t),ee}static remove(e){return ee.#e.removeItem(`${ee.prefix}-${e}`),ee}static async setValue(e,t){return t&&(t=typeof t=="string"?t:JSON.stringify(t),N.isGM?await N.setValue(e,t):ee.setItem(e,t)),ee}static async getValue(e,t){try{const s=Object.assign({},t),r=v=>{if(typeof v=="string")try{const w=JSON.parse(v);if(!F(w))return w}catch{}return s},p=N.isGM?await N.getValue(e,JSON.stringify(s)):ee.getItem(e);return r(p)}catch(s){return s.cause="getValue",B.err(s),t}}}class Oe extends null{static cmds=new Set;static register(e,t){return N.isGM&&(H(t)&&!this.cmds.has(t)&&this.cmds.add(t),N.registerMenuCommand(e,t)),Oe}}const se={req(o,e="GET",t="json",s,r=!1){const p=Object.assign({},s);return typeof e=="string"&&(p.method=e.toUpperCase().replaceAll(/\W/g,"")),typeof t=="string"&&(t=t.toLowerCase().replaceAll(/\W/g,"")),p.credentials&&N.isGM&&!r?(p.anonymous=Object.is(p.credentials,"omit"),delete p.credentials):p.onprogress&&delete p.onprogress,new Promise((v,w)=>{if(F(o))w(new Error('"url" parameter is empty',{cause:"Network.req"}));else if(r){const $=o instanceof Request?o:new Request(o,p);fetch($).then(T=>{if(T.ok)if(/array|buffer/i.test(t))v(T.arrayBuffer());else if(/json/i.test(t))v(T.json());else if(/text/i.test(t))v(T.text());else if(/blob/i.test(t))v(T.blob());else if(/form|data/i.test(t))v(T.formData());else if(/clone|copy/i.test(t))v(T.clone());else if(/document/i.test(t)){const O=T.text(),D=new DOMParser;if(O instanceof Promise)O.then(oe=>{const me=D.parseFromString(oe,"text/html");v(me)});else{const oe=D.parseFromString(O,"text/html");v(oe)}}else v(T);else w(T)}).catch(w)}else{const $={url:o,responseType:t,...p,onerror(T){const O=new Error(`status: ${T.status} finalURL: ${o}`,{cause:"Network.req::onerror"});O.name="",w(O)},onload(T){if(T.status!==200){const O=new Error(`status: ${T.status} finalURL: ${o}`,{cause:"Network.req::onload"});O.name="",w(O)}else/basic/i.test(t)?v(T):v(T.response)}};N.xmlHttpRequest($)}})},format(o,e=2){if(Number.isNaN(o))return`0 ${this.sizes[0]}`;const t=1024,s=e<0?0:e,r=Math.floor(Math.log(o)/Math.log(t));return`${parseFloat((o/Math.pow(t,r)).toFixed(s))} ${this.sizes[r]}`},sizes:["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"]},ke={cnt:{total:{count:0}},set(o){if(!this.cnt[o.name]){const e=l("count-frame",{_mujs:o});return this.cnt[o.name]={count:0,root:e},e}return this.cnt[o.name].root},update(o,e){this.cnt[e.name].count+=o,this.cnt.total.count+=o,this.updateAll()},updateAll(){for(const o of Object.values(this.cnt))h.attr(o.root,"count",String(o.count))},reset(){for(const[o,e]of Object.entries(this.cnt)){e.count=0,h.attr(e.root,"count",String(e.count));const t=j.engines.find(s=>o===s.name);t&&h.cl[t.enabled?"remove":"add"](e.root,"hidden")}}};class Te{static prompts=[];injected;userjsCache;isBlacklisted;opacityMin;opacityMax;#e={unsaved:!1,rebuild:!1};#t;#s;constructor(){this.refresh=this.refresh.bind(this),this.showError=this.showError.bind(this),this.toElem=this.toElem.bind(this),this.webpage=fe,this.host=Ie(fe.hostname??he),this.injected=!1,this.#t==null&&(this.#t=l("main-userjs"),ge(this.#t)||(this.#t=N.addElement("main-userjs"))),this.#s==null&&(this.#s=l("mujs-root"),ge(this.#s)||(this.#s=N.addElement("mujs-root"))),this.userjsCache=new Map,this.isBlacklisted=!1,this.opacityMin="0.15",this.opacityMax="1",this.timeouts={frame:new De,mouse:new De},this.injFN=we,window.addEventListener("beforeunload",this,!1)}get frame(){return this.#t==null&&(this.#t=l("main-userjs"),ge(this.#t)||(this.#t=N.addElement("main-userjs"))),this.#t}get root(){return this.#s==null&&(this.#s=l("mujs-root"),ge(this.#s)||(this.#s=N.addElement("mujs-root"))),this.#s}set cache(e){typeof e=="boolean"?(this.#e.unsaved=e,this.#e.rebuild=e):(this.#e.unsaved=!1,this.#e.rebuild=!1)}get cache(){return this.#e}setCache(e,t){typeof e=="boolean"&&(this.#e.unsaved=e),J(e)&&J(t)?this.#e.rebuild=!1:typeof t=="boolean"&&(this.#e.rebuild=t)}inject(e,t){if(this.checkBlacklist(this.host))this.showError(`Blacklisted: "${this.host}"`),this.remove();else if(!J(t))try{t.documentElement.appendChild(this.frame),this.injected?H(this.injFN.build)&&this.injFN.build():(this.injected=!0,this.initFn(),H(e)&&this.elementsReady&&(this.injFN=e()))}catch(s){B.err(s),this.remove()}return this}initFn(){if(this.setTheme(),ke.cnt.total.root=this.mainbtn,this.countframe)for(const w of j.engines)this.countframe.append(ke.set(w));const{refresh:e,urlBar:t,host:s,userjsCache:r,cfgpage:p,table:v}=this;return this.Tabs=new Ye(this.toolbar),this.Tabs.addListener("internal",function(w){w==="settings"&&(h.cl.remove(p,"hidden"),h.cl.add(v,"hidden"),h.prop(t,"placeholder","Search settings"))}),this.Tabs.addListener("active",function(w,$){if(h.cl.add([v,p],"hidden"),h.cl.remove(this.pool,"active"),h.cl.add(w,"active"),$){const T=w.dataset.host??this.blank;T===this.blank?(h.cl.add(p,"hidden"),h.cl.remove(v,"hidden"),e()):T.startsWith(this.protocal)?this.intFN(T):(h.cl.add(p,"hidden"),h.cl.remove(v,"hidden"),this.custom(T))}else h.cl.remove(v,"hidden")}),this.Tabs.addListener("close",function(w){if(j.clearTabCache){const{host:T}=w.dataset,O=Array.from(r.values()).filter(({_mujs:D})=>!F(D)&&D.info.host===T);for(const D of O)O.splice(O.indexOf(D),1)}w.classList.contains("active")&&e();const $=w.nextElementSibling??w.previousElementSibling;$&&$.dataset.command!=="new-tab"&&this.active($)}),this.Tabs.addListener("create",function(w,$,T,O,D){J(D)?(e(),w.dataset.host=this.blank,$.title=$.textContent=_("newTab")):O?(w.dataset.host=D||O,$.title=$.textContent=O||D,this.intFN(D)):w.dataset.host=$.title=$.textContent=D||O}),this.Tabs.create(s),this}init(){try{return this.mainframe=l("mujs-mainframe",{style:`opacity: ${this.opacityMin};`}),this.countframe=l("mujs-column"),this.mainbtn=l("count-frame","mainbtn"),this.urlBar=l("input","mujs-url-bar",{autocomplete:"off",spellcheck:!1,type:"text",placeholder:_("search_placeholder")}),this.rateContainer=l("mujs-column","rate-container"),this.footer=l("mujs-row","mujs-footer"),this.tabbody=l("tbody"),this.promptElem=l("mujs-row","mujs-prompt"),this.toolbar=l("mujs-toolbar"),this.table=l("table"),this.tabhead=l("thead"),this.header=l("mujs-header"),this.tbody=l("mujs-body"),this.cfgpage=l("mujs-config","hidden"),this.main=l("mujs-main","hidden"),this.urlContainer=l("mujs-url"),this.btnframe=l("mujs-column","btn-frame"),this.btnHandles=l("mujs-column","btn-handles"),this.btnHide=l("mujs-btn","hide-list",{title:_("min"),dataset:{command:"hide-list"}}),U.load("minus",this.btnHide),this.btnfullscreen=l("mujs-btn","fullscreen",{title:_("max"),dataset:{command:"fullscreen"}}),U.load("expand",this.btnfullscreen),this.closebtn=l("mujs-btn","close",{title:_("close"),dataset:{command:"close"}}),U.load("close",this.closebtn),this.btncfg=l("mujs-btn","settings hidden",{title:"Settings",dataset:{command:"settings"}}),U.load("gear",this.btncfg),this.btnhome=l("mujs-btn","github hidden",{title:`GitHub (v${/\d+\.\d+\.\d+|Book/.test(N.info.script.version)?N.info.script.version:N.info.script.version.slice(0,5)})`,dataset:{command:"open-tab",webpage:N.info.script.namespace}}),U.load("github",this.btnhome),this.btnissue=l("mujs-btn","issue hidden",{title:_("issue"),dataset:{command:"open-tab",webpage:N.info.script.bugs??"https://github.com/magicoflolis/Userscript-Plus/issues"}}),U.load("issue",this.btnissue),this.btngreasy=l("mujs-btn","greasy hidden",{title:"Greasy Fork",dataset:{command:"open-tab",webpage:"https://greasyfork.org/scripts/421603"}}),U.load("globe",this.btngreasy),this.btnnav=l("mujs-btn","nav",{title:"Navigation",dataset:{command:"navigation"}}),U.load("nav",this.btnnav),((...t)=>{const s=l("tr");for(const r of t){const p=l("th",r.class??"",r);h.text(p)!==_("install")&&(h.cl.add(p,"mujs-pointer"),p.dataset.command="sort_by",p.dataset.asc=!1),s.append(p)}this.tabhead.append(s),this.table.append(this.tabhead,this.tabbody)})({class:"mujs-header-name",textContent:_("name"),dataset:{sort:"name"}},{textContent:_("createdby"),dataset:{sort:"users"}},{textContent:_("daily_installs"),dataset:{sort:"daily_installs"}},{textContent:_("updated"),dataset:{sort:"code_updated_at"}},{textContent:_("install")}),Ee?(h.cl.add([this.btnHide,this.btnfullscreen,this.closebtn],"hidden"),this.btnframe.append(this.btnHide,this.btnfullscreen,this.closebtn,this.btnhome,this.btngreasy,this.btnissue,this.btncfg,this.btnnav)):(this.btnHandles.append(this.btnHide,this.btnfullscreen,this.closebtn),this.btnframe.append(this.btnhome,this.btngreasy,this.btnissue,this.btncfg,this.btnnav)),this.toolbar.append(this.btnHandles),this.urlContainer.append(this.urlBar),this.header.append(this.urlContainer,this.rateContainer,this.countframe,this.btnframe),this.tbody.append(this.table,this.cfgpage),this.main.append(this.toolbar,this.header,this.tbody,this.footer,this.promptElem),this.mainframe.append(this.mainbtn),this.root&&this.root.append(this.mainframe,this.main),!0}catch(e){B.err(e)}return!1}handleEvent(e){e.type==="beforeunload"&&this.remove()}remove(){return this.userjsCache.clear(),h.remove(this.frame),this}async save(){this.setCache(!1);const e=Le(j);if(e!==W){const t=(s,r)=>JSON.stringify(s)===JSON.stringify(r);for(const[s,r]of Object.entries(e))s in W?(Array.isArray(r)&&t(r,W[s])||Y(r)&&t(r,W[s])||Object.is(r,W[s]))&&delete e[s]:delete e[s];await ee.setValue("Config",e),ye("Saved config:",{config:e,cfg:j,DEFAULT_CONFIG:W}),this.redirect()}return j}checkBlacklist(e){if(!this.injected)return!1;if(e=e||this.host,/accounts*\.google\./.test(this.webpage.host))return this.isBlacklisted=!0;let t=!1;for(const s of ne(j.blacklist))if(typeof s=="string"){if(s.startsWith("userjs-")){const[,r]=/userjs-(\w+)/.exec(s)??[],p=Ge[r];Ue(p)?p.test(e)&&(t=!0):Y(p)&&p.host===this.host&&(t=!0)}}else if(Y(s)){if(!s.enabled)continue;if(s.regex===!0&&new RegExp(s.url,s.flags).test(e)&&(t=!0),Array.isArray(s.url))for(const r of s.url)e.includes(r)&&(t=!0);e.includes(s.url)&&(t=!0)}return this.isBlacklisted=t}setTheme(){const e=j.theme??W.theme;if(this.root&&e!==W.theme){const{style:t}=this.root;for(const[s,r]of Object.entries(e)){const p=`--mujs-${s}`,v=t.getPropertyValue(p);F(r)&&(e[s]=v),v!==r&&(t.removeProperty(p),t.setProperty(p,r))}}return this}makePrompt(e,t={},s=!0,...r){h.remove(Te.prompts);const p=l("mu-js","prompt",{dataset:{prompt:e}}),v=l("mu-js","prompt-head");U.load("refresh",v);for(const w of r)be(w)&&v.appendChild(w);if(p.append(v),s){const w=l("mu-js","prompt-body",{dataset:t}),$=l("mujs-btn","prompt-confirm",{textContent:"Confirm",dataset:{command:"prompt-confirm"}}),T=l("mujs-btn","prompt-deny",{textContent:"Deny",dataset:{command:"prompt-deny"}});w.append($,T),p.append(w)}else{const w=l("mu-js","prompt-body"),$=l("mujs-btn","prompt-deny",{textContent:_("close")});te($,ve("touchend","click"),()=>{p.remove()}),w.append($),p.append(w)}return Te.prompts.push(p),this.promptElem.append(p),p}showError(...e){B.err(...e);let t="";for(const r of e)r instanceof Error?t+=`${r.message}${"cause"in r?` Caused by: "${r.cause}"`:""}
`:Y(r)?t+=JSON.stringify(r)+`
`:typeof r=="string"&&(t+=`${r}
`);const s=l("mu-js","error");return s.appendChild(X.createTextNode(t)),this.footer.append(s),this}refresh(){return this.urlBar.placeholder=_("newTab"),ke.reset(),h.cl.remove(this.toElem(),"hidden"),h.cl.remove(this.cfgpage._mujs.sections,"hidden"),h.rmChildren([this.tabbody,this.rateContainer,this.footer]),this}reloadConfig(){if(!this.cfgpage)return this;for(const e of this.cfgpage._mujs.base){const[,t,s]=/^(\w+)-(.+)/.exec(e.value)??[];let r=W[e.value],p=j[e.value];if(e.tag==="engine"){const v=W.engines.find($=>$.name===e.value),w=j.engines.find($=>$.name===e.value);v&&(r=v),w&&(p=w)}else t&&(r=W[t][s],p=j[t][s]);e.cache=p,e.type==="checkbox"?t?t==="filters"?e.elem.checked=j[t][s].enabled:e.elem.checked=p:e.tag==="engine"&&(e.elem.checked=p.enabled,e.elemUrl.value=je(p.query),e.elemUrl.placeholder=je(r.query),e.elemToken&&(e.elemToken=p.token)):e.elem.value=p}return this.setTheme()}redirect(){const e=window.top.location,t=/greasyfork\.org/.test(e.hostname);if(j.sleazyredirect&&t&&/scripts\/\d+/.test(e.href)&&K("span.sign-in-link")){const s=t?"sleazyfork":"greasyfork";if(!K("#script-info")&&(s=="greasyfork"||K("div.width-constraint>section>p>a"))){const r=e.href.replace(/\/\/([^.]+\.)?(greasyfork|sleazyfork)\.org/,"//$1"+s+".org");ye(`Redirecting to "${r}"`),H(e.assign)?e.assign(r):e.href=r}}return this}async timeoutFrame(e){const{frame:t}=this.timeouts;if(t.clear(...t.ids),!h.cl.has(this.mainframe,"hidden")){e=e??j.time??W.time;let s=1e4;typeof e=="number"&&!Number.isNaN(e)&&(s=this.isBlacklisted?e/2:e),await t.set(s),this.remove(),t.clear(...t.ids)}return this}toElem(){return Array.from(this).map(({_mujs:e})=>e.root)}*[Symbol.iterator](){const e=Array.from(this.userjsCache.values()).filter(({_mujs:t})=>!F(t)&&t.info.engine.enabled);for(const t of e)yield t}}const f=new Te,le={build:Ae};class Qe extends HTMLElement{constructor(){if(super(),!H(this.attachShadow))throw new Error('Failed to initialize: "attachShadow not supported"',{cause:"MainUserJS"});const e=this.attachShadow({mode:"closed"});this.dataset.insertedBy=N.info.script.name,this.style="visibility: visible;",this._mujs={webpage:fe,host:Ie(fe.hostname)},this._mujsElements={root:f.root};const t=(s,r,p)=>{const v={cause:"loadCSS"};if(this._mujsElements.stylesheet instanceof HTMLStyleElement)return this._mujsElements.stylesheet;if(typeof p!="boolean"&&(p=!N.isGM),(typeof r!="string"||F(r))&&(r="CSS"),typeof s!="string")throw new Error('"css" must be a typeof "string"',v);if(ae(s))throw new Error(`"${r}" contains empty CSS string`,v);let w;if(p){if(w=l("style",{textContent:s,dataset:{insertedBy:N.info.script.name,role:r,useMake:p}}),w instanceof HTMLStyleElement)return e.appendChild(w),this._mujsElements.stylesheet=w,w;throw new Error(`An unknown error occured, Role: ${r}; useMake: ${p}`,v)}return!Object.is(N.addElement,we)&&(w=N.addElement(e,"style",{textContent:s}),w instanceof HTMLStyleElement||w instanceof HTMLElement)?(w.dataset.insertedBy=N.info.script.name,w.dataset.role=r,w.dataset.useMake=p,this._mujsElements.stylesheet=w,w):t(s,r,!0)};t(Ke,"primary-stylesheet"),e.appendChild(f.root),f.elementsReady=f.init()}}class et extends HTMLElement{static observedAttributes=["count"];constructor(){super()}connectedCallback(){if(this._mujs){const e=this._mujs;e.enabled||this.classList.add("hidden"),this.dataset.type=e.name,this.title=je(e.query??e.url)}this.setAttribute("count","0")}attributeChangedCallback(e,t,s){Object.is(t,s)||(this.textContent=s)}}class tt extends HTMLElement{constructor(){super(),this._mujs={base:[],sections:new Set}}}class st extends HTMLElement{constructor(){super(),this.initClick=!0;const e=["mouseenter","mouseleave"];e.push(ve("touchstart","mouseup"));const t=s=>{s.preventDefault(),s.stopPropagation();const r=s instanceof MouseEvent;if(s.type==="mouseup"||s.type==="touchstart"){if(f.timeouts.frame.clear(...f.timeouts.frame.ids),r&&s.button===2)return;if(r&&s.button===1||s.ctrlKey&&s.altKey&&!s.shiftKey)return f.remove();!s.ctrlKey&&!s.altKey&&s.shiftKey?f.Tabs.create():!s.ctrlKey&&s.altKey&&!s.shiftKey&&f.Tabs.create("mujs:settings"),this.initClick&&!j.autofetch&&(this.initClick=!1,le.build()),h.cl.remove(f.main,"hidden"),h.cl.add(this,"hidden"),(s.ctrlKey&&!s.altKey&&!s.shiftKey||j.autoexpand)&&(h.cl.add([f.btnfullscreen,f.main],"expanded"),h.rmChildren(f.btnfullscreen),U.load("collapse",f.btnfullscreen))}else s.type==="mouseenter"?(this.style.opacity=f.opacityMax,f.timeouts.frame.clear(...f.timeouts.frame.ids)):s.type==="mouseleave"&&(this.style.opacity=f.opacityMin,f.timeoutFrame())};for(const s of e)this.addEventListener(s,t)}}class nt extends HTMLElement{constructor(){super(),this._mujs={}}}try{const o=X.customElements;o.define("main-userjs",Qe),o.define("count-frame",et),o.define("mujs-config",tt),o.define("mujs-mainframe",st),o.define("mujs-main",nt)}catch(o){B.err(o)}function ze(){try{const{scheduler:o}=X,{btnfullscreen:e,mainframe:t,main:s,Tabs:r,showError:p}=f,v={download(n){return Y(n)&&n.url&&(n.url=`data:text/plain;charset=utf-8,${encodeURIComponent(Y(n.url)?JSON.stringify(n.url,null," "):n.url)}`,l("a",{download:n.filename||"file",href:n.url,type:n.type||"text/plain"}).dispatchEvent(new MouseEvent("click"))),f.inject(ze,document)},install(n){const b=window.top.location,c=typeof n=="string"?n:n.href;return H(b.assign)?b.assign(c):b.href=c,be(n)&&n.remove(),f.inject(ze,document)}},w=(n,b,c,i)=>{const d=n._mujs.code[b]??n._mujs.code.data_meta[b];if(F(d)){const a=l("mujs-a",{textContent:_("listing_none")});c.append(a);return}if(h.rmChildren(c),h.cl.remove(i,"hidden"),Y(d))if(b==="resource")for(const[a,u]of Object.entries(d)){const y=l("mujs-a",{textContent:a??"ERROR"});u.startsWith("http")&&(y.dataset.command="open-tab",y.dataset.webpage=u),c.append(y)}else{const a=l("mujs-a",{textContent:d.text});d.domain&&(a.dataset.command="open-tab",a.dataset.webpage=`https://${d.text}`),c.append(a)}else if(typeof d=="string"){const a=l("mujs-a",{textContent:d});c.append(a)}else for(const a of d)if(typeof a=="string"&&a.startsWith("http")){const u=l("mujs-a",{textContent:a,dataset:{command:"open-tab",webpage:a}});c.append(u)}else if(Y(a)){const u=l("mujs-a",{textContent:a.text});a.domain&&(u.dataset.command="open-tab",u.dataset.webpage=`https://${a.text}`),c.append(u)}else{const u=l("mujs-a",{textContent:a});c.append(u)}};class ${constructor(){const b=[ve("touchstart","mouseup"),"updateditem"];Ee||b.push("mouseenter","mouseleave");for(const c of b)te(s,c,this,!1)}$handleEvent(b){const{type:c}=b;if(b instanceof CustomEvent&&c==="updateditem"){const i=b.detail;if(!i._mujs)return;if(i.deleted===!0){i._mujs.root.remove(),f.userjsCache.delete(i.id),ke.reset(),ce.sortRecords();return}F(i.code_urls)||(i.code_url=i.code_urls[0].code_url);for(const d of ie("[data-name]",i._mujs.root)){const a=d.dataset.name;if(a==="code"){i._mujs.code.data_code_block&&(j.preview.code&&!j.preview.metadata?d.value=i._mujs.code.data_code_block:j.preview.metadata&&!j.preview.code?d.value=i._mujs.code.data_meta_block:d.value=`${i._mujs.code.META_START_COMMENT}${i._mujs.code.data_meta_block}${i._mujs.code.META_END_COMMENT}${i._mujs.code.data_code_block}`);continue}i[a]&&(a==="license"?(h.attr(d,"title",i.license??_("no_license")),h.text(d,`${_("license")}: ${i.license??_("no_license")}`)):a==="code_updated_at"?(h.text(d,Z.toDate(i.code_updated_at)),d.dataset.value=new Date(i.code_updated_at).toISOString()):a==="created_date"?(h.text(d,`${_("created_date")}: ${Z.toDate(i.created_at)}`),d.dataset.value=new Date(i.created_at).toISOString()):a==="total_installs"?h.text(d,`${_("total_installs")}: ${Z.toNumber(i.total_installs)}`):h.text(d,i[a]))}if(i._mujs.code.data_code_block)for(const d of ie('mujs-column[data-el="matches"]',i._mujs.root))w(i,d.dataset.type,K(".mujs-grants",d),d);f.userjsCache.has(i.id)&&f.userjsCache.set(i.id,i)}else if(b.preventDefault(),b.stopPropagation(),!J(b.target)&&(c==="mouseup"&&b.button===1||c==="touchstart")){const i=b.target.closest("[data-command]");if(J(i))return;const{dataset:{command:d}}=i;d==="switch-tab"||d==="close-tab"?r.close(i):d==="new-tab"&&r.create()}else c==="mouseenter"?(f.timeouts.frame.clear(...f.timeouts.frame.ids),f.timeouts.mouse.clear(...f.timeouts.mouse.ids),s.style.opacity=f.opacityMax):c==="mouseleave"&&f.timeouts.mouse.set(j.time).then(()=>{s.style.opacity=f.opacityMin})}handleEvent(b){this.$handleEvent(b)}}new $,te(s,ve("touchend","click"),async n=>{try{if(!n.target)return;const c=n.target.closest("[data-command]");if(J(c))return;let i=c.dataset,d=i.command;if(/^prompt-/.test(c.dataset.command)){i=c.parentElement.dataset,d=i.command;let a=c.parentElement.parentElement;if(/prompt-install/.test(c.dataset.command))a=c.parentElement.parentElement.parentElement,v.install(c.dataset.code_url);else if(/prompt-download/.test(c.dataset.command)){a=c.parentElement.parentElement.parentElement;const u=f.userjsCache.get(+c.dataset.userjs);if(u){const y=await u._mujs.code.request(!1,c.dataset.code_url);typeof y.code=="string"&&v.download({url:y.code,filename:`${u.name}-${Date.now()}.user.${xe(c.dataset.code_url)?"css":"js"}`})}}a.remove();return}if(d==="install-script"){const a=f.userjsCache.get(+i.userjs);if(J(a))return;if(a.code_urls.length>1){const u=l("mujs-list",{style:"display: flex; flex-direction: column;"});for(const y of a.code_urls){const m=l("mujs-a",{title:y.code_url,textContent:y.name,dataset:{command:"prompt-install",code_url:y.code_url}});u.append(m)}f.makePrompt("Multiple detected:",i,!1,u)}else v.install(a.code_url)}else if(/open-tab|more-info/.test(d)&&i.webpage){d==="more-info"&&n.preventDefault();const a=N.isGM&&{active:!0,insert:!0}||"_blank";return N.openInTab(i.webpage,a)}else if(d==="navigation")for(const a of[...ie("mujs-btn",c.parentElement)].filter(u=>!h.cl.has(u,"nav")))h.cl.toggle(a,"hidden");else if(d==="list-description"){const a=[],u=new Set(["TD","MUJS-A","MU-JS"]),y=c.parentElement;for(const m of Object.values(y._mujs))u.has(m.tagName)||m.tagName==="TEXTAREA"&&F(m.value)||a.push(m);c.nextElementSibling&&(a.push(c.nextElementSibling),c.nextElementSibling.nextElementSibling&&a.push(c.nextElementSibling.nextElementSibling)),h.cl.has(a[0],"hidden")?h.cl.remove(a,"hidden"):h.cl.add(a,"hidden")}else if(d==="close")f.remove();else if(d==="fullscreen")h.cl.has(e,"expanded")?(h.cl.remove([e,s],"expanded"),h.rmChildren(e),U.load("expand",e)):(h.cl.add([e,s],"expanded"),h.rmChildren(e),U.load("collapse",e));else if(d==="hide-list")h.cl.add(s,"hidden"),h.cl.remove(t,"hidden"),f.timeoutFrame();else if(d==="save"){if(f.setCache(null,!0),h.rmChildren(f.rateContainer),!h.prop(c,"disabled")){const a=await f.save();f.cache.rebuild&&a.autofetch&&le.build(),f.cache=null}}else if(d==="reset")j=W,h.remove(ie(".error",f.footer)),f.cache=!0,f.reloadConfig();else if(d==="settings")f.cache.unsaved&&p("Unsaved changes"),r.create("mujs:settings"),f.setCache(null);else if(d==="new-tab")r.create();else if(d==="switch-tab")r.active(c);else if(d==="close-tab"&&c.parentElement)r.close(c.parentElement);else if(d==="download-userjs"){const a=f.userjsCache.get(+i.userjs);if(J(a))return;if(a.code_urls.length>1){const u=l("mujs-list",{style:"display: flex; flex-direction: column;"});for(const y of a.code_urls){const m=l("mujs-a",{title:y.code_url,textContent:y.name,dataset:{command:"prompt-download",code_url:y.code_url,userjs:i.userjs}});u.append(m)}f.makePrompt("Multiple detected:",i,!1,u)}else{const u=await a._mujs.code.request(!1);typeof u.code=="string"&&v.download({url:u.code,filename:`${a.name}-${Date.now()}.user.${xe(a.code_url)?"css":"js"}`})}}else if(d==="load-userjs"||d==="load-header"){if(!f.userjsCache.has(+i.userjs))return;const a=K("textarea",c.parentElement.parentElement);if(!F(a.value)&&d===a.dataset.load){h.cl.toggle(a,"hidden");return}a.dataset.load=d;const u=f.userjsCache.get(+i.userjs),y=await u._mujs.code.request();if(typeof y.data_code_block!="string"){a.value="An error occured";return}a.value=d==="load-userjs"?y.data_code_block:y.data_meta_block,h.cl.remove(a,"hidden");for(const m of ie('mujs-column[data-el="matches"]',c.parentElement.parentElement))w(u,m.dataset.type,K(".mujs-grants",m),m)}else if(d==="load-page"){if(!f.userjsCache.has(+i.userjs))return;let a=K("mujs-page",c.parentElement.parentElement);if(!a){a=l("mujs-page"),c.parentElement.parentElement.append(a);const u=f.userjsCache.get(+i.userjs),y=u._mujs.info.engine;let m;if(y.name.includes("fork")){const{navigator:{language:q}}=X,{current:A}=Z;m=u.url.replace(/\/scripts/,`/${/^(zh|fr|es)/.test(A)?q:A}/scripts`)}else if(y.name.includes("github")){const q=await se.req(u.page_url,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${y.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).catch(()=>({}));if(!q.download_url)return;const A=await se.req(q.download_url,"GET","text"),G=a.attachShadow({mode:"closed"}),R=l("div",{innerHTML:A});G.append(R);return}else m=u.url;if(!m)return;const g=await se.req(m,"GET","document"),E=()=>{const q=new URL(u.url),A=K(".user-content",g.documentElement);for(const G of ie("[href]",A))G.target="_blank",G.style="pointer-events: auto;",G.href.startsWith("/")&&(G.href=`${q.origin}${G.href}`);for(const G of ie("img[src]",A))G.style="max-width: 25em; max-height: 25em; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;";return A?A.innerHTML:"No additional info available"},x=a.attachShadow({mode:"closed"}),P=l("div",{style:"pointer-events: none;",innerHTML:E()});x.append(P);return}if(!h.cl.has(a,"hidden")){h.cl.add(a,"hidden");return}h.cl.remove(a,"hidden")}else if(/export-/.test(d)){const a=d==="export-config";v.download({url:a?j:j.theme,filename:`Magic_Userscript_${a?"config":"theme"}-${Date.now()}.json`})}else if(/import-/.test(d)){if(K("input",c.parentElement)){K("input",c.parentElement).click();return}const a=l("input","hidden",{type:"file",accept:".json"});te(a,"change",function(){if(J(this.files))return;const[u]=this.files;if(u===void 0||u.name==="")return;const y=new FileReader;y.onload=function(){try{const m=JSON.parse(typeof this.result=="string"?this.result:null);if(!Y(m))throw new Error(`Invalid file contents in "${u.name}"`,{cause:"FileReader"});const g=Le(W);Object.keys(m).find(E=>Object.keys(g.theme).includes(E))?(j.theme={...g.theme,...m},f.setTheme().save()):(j={...g,...m},f.cache=!0,f.reloadConfig().save().then(E=>{E.autofetch&&le.build(),f.cache=null}))}catch(m){p(m)}finally{a.remove()}},y.readAsText(u)},!1),c.parentElement.append(a),a.click()}else d==="sort_by"&&c.dataset.sort&&(c.dataset.asc=ce.sortBy(c.dataset.sort,c.dataset.asc==="true"))}catch(b){p(b)}});const T=["com","net","org","de","co.uk"],O=["http://*","https://*","http://*/*","https://*/*","http*://*","http*://*/*","*","*://*","*://*/*","http*"],D=class{constructor(n,b){this.isUserCSS=b===!0,this.META_START_COMMENT=this.isUserCSS?"/* ==UserStyle==":"// ==UserScript==",this.META_END_COMMENT=this.isUserCSS?"==/UserStyle== */":"// ==/UserScript==",typeof n=="string"&&(this.code=n,this.get_meta_block(),this.get_code_block(),this.parse_meta(),this.calculate_applies_to_names())}get_meta_block(){if(F(this.code))return"";if(this.data_meta_block)return this.data_meta_block;const n=this.code.indexOf(this.META_START_COMMENT);if(J(n))return"";const b=this.code.indexOf(this.META_END_COMMENT,n);if(J(b))return"";const c=this.code.substring(n+this.META_START_COMMENT.length,b);return this.data_meta_block=c,this.data_meta_block}get_code_block(){if(F(this.code))return"";if(this.data_code_block)return this.data_code_block;const n=this.code.indexOf(this.META_START_COMMENT);if(J(n))return null;const b=this.code.indexOf(this.META_END_COMMENT,n);if(J(b))return null;const c=this.code.substring(b+this.META_END_COMMENT.length,this.code.length);return this.data_code_block=c.split(`
`).filter(Boolean).join(`
`),this.data_code_block}parse_meta(){if(F(this.code))return{};if(this.data_meta)return this.data_meta;const n={},b=new Map,c=this.isUserCSS&&/@([a-zA-Z:-]+)\s+(.*)/||/\/\/\s+@([a-zA-Z:-]+)\s+(.*)/;for(const i of this.get_meta_block().split(`
`).filter(Boolean)){let[,d,a]=c.exec(i)??[];if(!d)continue;d=d.trim(),a=a.trim(),b.has(d)||b.set(d,[]);const u=b.get(d);u.push(a),b.set(d,u)}for(const[i,d]of b)d.length>1?n[i]=d:n[i]=d[0];return this.data_meta=n,this.data_meta}calculate_applies_to_names(){if(F(this.code))return[];if(this.data_names)return this.data_names;let n=[];for(const[b,c]of Object.entries(this.parse_meta()))/include|match/i.test(b)&&(Array.isArray(c)?n=n.concat(c):n=n.concat([c]));return F(n)?[]:this.intersect(n,O)?(this.data_names=[{domain:!1,text:"All sites",tld_extra:!1}],this.data_names):(this.data_names=D.getNames(n),this.data_names)}intersect(n,...b){const c=new Set(n);return!ae([...c].filter(i=>b.every(d=>d.includes(i))))}static getNames(n=[]){const b=new Map,c=i=>{b.has(i.text)||b.set(i.text,i)};for(let i of n){const d=i;let a=[];if(i.match(/^\/(.*)\/$/))a=[i];else{let u=/^\*(https?:.*)/i.exec(i);u&&(i=u[1]),i=i.replace(/^\*:/i,"http:").replace(/^\*\/\//i,"http://").replace(/^http\*:/i,"http:").replace(/^(https?):([^/])/i,"$1://$2"),u=/^([a-z]+:\/\/)\*\.?([a-z0-9-]+(?:.[a-z0-9-]+)+.*)/i.exec(i),u&&(i=u[1]+u[2]),u=/^\*\.?([a-z0-9-]+\.[a-z0-9-]+.*)/i.exec(i),u&&(i=`http://${u[1]}`),u=/^http\*(?:\/\/)?\.?((?:[a-z0-9-]+)(?:\.[a-z0-9-]+)+.*)/i.exec(i),u&&(i=`http://${u[1]}`),u=/^([a-z]+:\/\/([a-z0-9-]+(?:\.[a-z0-9-]+)*\.))\*(.*)/.exec(i),u?u[2].match(/A([0-9]+\.){2,}z/)?(i=`${u[1]}tld${u[3]}`,a=[i.split("*")[0]]):a=[i]:a=[i]}for(const u of a)try{const y=new URL(u),{host:m}=y;if(J(m))c({text:d,domain:!1,tld_extra:!1});else if(!m.includes(".")&&m.includes("*"))c({text:d,domain:!1,tld_extra:!1});else if(m.endsWith(".tld"))for(let g=0;g<T.length;g++){const E=T[g];c({text:m.replace(/tld$/i,E),domain:!0,tld_extra:g!=0})}else m.endsWith(".")?c({text:m.slice(0,-1),domain:!0,tld_extra:!1}):c({text:m,domain:!0,tld_extra:!1})}catch{c({text:d,domain:!1,tld_extra:!1})}}return[...b.values()]}async request(n=!1,b,c){if(this.data_code_block)return this;const i=await se.req(b,"GET","text").catch(Je);if(typeof i!="string")return this;this.isUserCSS=xe(b),this.META_START_COMMENT=this.isUserCSS?"/* ==UserStyle==":"// ==UserScript==",this.META_END_COMMENT=this.isUserCSS?"==/UserStyle== */":"// ==/UserScript==",this.code=i,this.get_meta_block(),this.get_code_block(),this.parse_meta(),this.calculate_applies_to_names();const{data_meta:d}=this;if(n&&(d[`name:${Z.current}`]&&(Object.assign(c,{name:d[`name:${Z.current}`]}),this.translated=!0),d[`description:${Z.current}`]&&(Object.assign(c,{description:d[`description:${Z.current}`]}),this.translated=!0)),Array.isArray(d.grant)&&(d.grant=[...new Set(d.grant.flat())]),d.resource){const a={};if(typeof d.resource=="string"){const[,u,y]=/(.+)\s+(.+)/.exec(d.resource)??[];u&&(a[u.trim()]=y)}else for(const u of d.resource){const[,y,m]=/(.+)\s+(http.+)/.exec(u)??[];y&&(a[y.trim()]=m)}d.resource=a}return Object.assign(this,{code_size:[se.format(i.length)],meta:d}),this}},oe={id:0,bad_ratings:0,good_ratings:0,ok_ratings:0,daily_installs:0,total_installs:0,name:"NOT FOUND",description:"NOT FOUND",version:"0.0.0",url:he,code_url:he,created_at:Date.now(),code_updated_at:Date.now(),locale:"NOT FOUND",deleted:!1,users:[]},me=(n="",b={})=>{if(!b.root||!b.type)return;const{root:c,type:i}=b,d=l("mu-js","mujs-list",{textContent:`${n}: `}),a=l("mu-js","mujs-grants"),u=l("mujs-column","mujs-list",{dataset:{el:"matches",type:i}});u.append(d,a),c.append(u);const y=b.list??[];if(F(y)){const m=l("mujs-a",{textContent:_("listing_none")});a.append(m),h.cl.add(u,"hidden");return}for(const m of y)if(typeof m=="string"&&m.startsWith("http")){const g=l("mujs-a",{textContent:m,dataset:{command:"open-tab",webpage:m}});a.append(g)}else if(Y(m))if(i==="resource")for(const[g,E]of Object.entries(m)){const x=l("mujs-a",{textContent:g??"ERROR"});E.startsWith("http")&&(x.dataset.command="open-tab",x.dataset.webpage=E),a.append(x)}else{const g=l("mujs-a",{textContent:m.text});m.domain&&(g.dataset.command="open-tab",g.dataset.webpage=`https://${m.text}`),a.append(g)}else{const g=l("mujs-a",{textContent:m});a.append(g)}},Re=(n,b)=>{if([n.deleted===!0,n.id===421603,j.recommend.blacklist.includes(n.id),j.recommend.blacklist.includes(n.url)].some(ue=>ue===!0))return;f.userjsCache.has(n.id)||f.userjsCache.set(n.id,n);const i=l("td","install-btn"),d=l("td","mujs-uframe"),a=l("td","mujs-list",{textContent:n.daily_installs,dataset:{name:"daily_installs"}}),u=l("td","mujs-list",{textContent:Z.toDate(n.code_updated_at),dataset:{name:"code_updated_at",value:new Date(n.code_updated_at).toISOString()}}),y=l("td","mujs-name"),m=l("mujs-column","mujs-list hidden",{dataset:{el:"more-info"}}),g=l("mujs-column","mujs-list hidden"),E=l("mujs-row","mujs-list"),x=l("mujs-row","mujs-list"),P=l("mujs-column","mujs-list"),q=l("mujs-a","mujs-homepage",{textContent:n.name,title:n.url,dataset:{command:"open-tab",webpage:n.url}}),A=l("mu-js","mujs-list",{textContent:`${_("version_number")}: ${n.version}`}),G=l("mu-js","mujs-list",{textContent:`${_("created_date")}: ${Z.toDate(n.created_at)}`,dataset:{name:"created_at",value:new Date(n.created_at).toISOString()}}),R=l("mu-js","mujs-list",{title:n.license??_("no_license"),textContent:`${_("license")}: ${n.license??_("no_license")}`,dataset:{name:"license"}}),re=l("mu-js","mujs-list",{textContent:`${_("total_installs")}: ${Z.toNumber(n.total_installs)}`,dataset:{name:"total_installs"}}),de=l("mu-js","mujs-list",{title:_("ratings"),textContent:`${_("ratings")}:`}),I=l("mu-js","mujs-list mujs-ratings",{title:_("good"),textContent:n.good_ratings,dataset:{name:"good_ratings",el:"good"}}),k=l("mu-js","mujs-list mujs-ratings",{title:_("ok"),textContent:n.ok_ratings,dataset:{name:"ok_ratings",el:"ok"}}),M=l("mu-js","mujs-list mujs-ratings",{title:_("bad"),textContent:n.bad_ratings,dataset:{name:"bad_ratings",el:"bad"}}),C=l("mu-js","mujs-list mujs-pointer",{title:n.description,textContent:n.description,dataset:{command:"list-description"}}),z=l("mu-jsbtn","install",{title:`${_("install")} "${n.name}"`,textContent:_("install")+" ",dataset:{command:"install-script",userjs:n.id}});U.load("install",z);const S=l("mu-jsbtn",{textContent:_("saveFile")+" ",dataset:{command:"download-userjs",userjs:n.id,userjsName:n.name}});U.load("download",S);const L=l("tr","frame",{dataset:{engine:b,scriptId:n.id}}),Q=l("textarea","code-area hidden",{dataset:{name:"code"},rows:"10",autocomplete:!1,spellcheck:!1,wrap:"soft"}),_e=l("mu-jsbtn",{textContent:_("code")+" ",dataset:{command:"load-userjs",userjs:n.id}});U.load("code",_e);const qe=l("mu-jsbtn",{textContent:_("metadata")+" ",dataset:{command:"load-header",userjs:n.id}});U.load("code",qe),!b.includes("fork")&&j.recommend.others&&j.recommend.list.includes(n.url)&&(L.dataset.good="upsell");for(const ue of n.users){const Ve=l("mujs-a",{textContent:ue.name+" ",title:ue.url,dataset:{command:"open-tab",webpage:ue.url}});j.recommend.author&&(ue.id===j.recommend.authorID||ue.url===j.recommend.authorUrl)&&(L.dataset.author="upsell",U.load("verified",Ve)),d.append(Ve)}j.recommend.others&&j.recommend.list.includes(n.id)&&(L.dataset.good="upsell"),i.append(z),P.append(de,I,k,M),E.append(re,P,A,G),me(_("code_size"),{list:n._mujs.code.code_size,type:"code_size",root:E}),x.append(R);const Ce=n._mujs.code?.data_meta??{};me(_("antifeatures"),{list:Ce.antifeatures??[],type:"antifeatures",root:x}),me(_("applies_to"),{list:n._mujs.code?.data_names??[],type:"data_names",root:x}),me("@grant",{list:Ce.grant??[],type:"grant",root:x}),me("@require",{list:Ce.require,type:"require",root:x}),me("@resource",{list:J(Ce.resource)?[]:[Ce.resource],type:"resource",root:x}),m.append(E,x),g.append(S,_e,qe),y.append(q,C,m,g,Q),y._mujs={fmore:m,fBtns:g,codeArea:Q};const He=l("mu-jsbtn",{textContent:"Page ",dataset:{command:"load-page",userjs:n.id}});U.load("pager",He),g.append(He),n._mujs.code?.translated&&L.classList.add("translated");for(const ue of[y,d,a,u,i])L.append(ue);n._mujs.root=L},Pe=()=>{const n=new Map,b={pool:n,enabled(){return[...n.values()].filter(c=>c.enabled)},refresh(){Object.is(n.size,0)||n.clear();for(const[c,i]of Object.entries(j.filters))n.has(c)||n.set(c,{...i,reg:new RegExp(i.regExp,i.flag),keyReg:new RegExp(c.trim().toLocaleLowerCase(),"gi"),valueReg:new RegExp(i.name.trim().toLocaleLowerCase(),"gi")});return this},get(c){return[...n.values()].find(i=>i.keyReg.test(c)||i.valueReg.test(c))},match({name:c,users:i}){const d=b.enabled();if(Object.is(d.length,0))return!0;for(const a of d)if([{name:c},...i].find(u=>u.name.match(a.reg)))return!1;return!0}};for(const[c,i]of Object.entries(j.filters))n.has(c)||n.set(c,{...i,reg:new RegExp(i.regExp,i.flag),keyReg:new RegExp(c.trim().toLocaleLowerCase(),"gi"),valueReg:new RegExp(i.name.trim().toLocaleLowerCase(),"gi")});return b.refresh()},rt=class{#e;#t;constructor(n=void 0){this.build=this.build.bind(this),this.groupBy=this.groupBy.bind(this),this.dispatch=this.dispatch.bind(this),this.sortRecords=this.sortRecords.bind(this),this.#e=j.engines??[],this.setHost(n)}setEngines(n=[]){const{host:b}=this;return this.#e=n.filter(c=>c.enabled&&Array.isArray(c.unsupported)&&c.unsupported.includes(b)?(f.timeoutFrame(),p(`[${c.name}]: Unsupported on "${b}"`),!1):c.enabled),this.#e}setHost(n){return n??=f.host,this.#t=n,this.blacklisted=f.checkBlacklist(n),this.#e=this.setEngines(this.engines),this.domain=this.getDomain(this.#t),this.blacklisted&&(p(`Blacklisted "${n}"`),f.timeoutFrame()),n}dispatch(n){return s.dispatchEvent(new CustomEvent("updateditem",{detail:n})),this}get engines(){return this.#e}get host(){return this.#t}getDomain(n=""){return n==="*"?"all-sites":n.split(".").at(-2)??he}build(){try{f.refresh();const{blacklisted:n,engines:b,host:c,domain:i,dispatch:d}=this;if(n||F(b))return f.opacityMin="0",t.style.opacity=f.opacityMin,this;const a=[],u=Pe(),y=Array.from(this);ye("Building list",{hostCache:y,engines:b,container:f,list:this});const m=this.groupBy(),g=b.filter(x=>!m[x.name]),E=g.filter(x=>y.find(({_mujs:P})=>x.name===P.info.engine.name));if(!ae(g)&&ae(E))for(const x of b){ye(`Fetching from "${x.name}" for "${c}"`);const P=je(x.query).replace(/\{host\}/g,c).replace(/\{domain\}/g,i),q=I=>{I.cause||(I.cause=x.name);let k=I;I.message.startsWith("status: 429")?k=`reason: "Too many requests..." ${I}`:I.message.startsWith("status: 403")&&(k=`reason: "Forbidden" ${I}`),p(`[${x.name}]:`,k)},A=I=>{const k={...oe,...I,code_urls:[],_mujs:{root:{},info:{engine:x,host:c},code:{meta:{}}}};return k._mujs.code.request=async(M=!1,C)=>{if(typeof k._mujs.code.data_code_block=="string")return k._mujs.code;const z=await new D().request(M,C??k.code_url,k);if(C)return z;for(const[S,L]of Object.entries(z))k._mujs.code[S]=L;return k._mujs.code},k},G=async I=>{if(!I){p("Invalid data received from the server, check internet connection");return}const M=(Array.isArray(I)?I:Array.isArray(I.query)?I.query:[]).filter(Boolean).filter(z=>!z.deleted).filter(u.match);if(ae(M))return;const C=X.groupBy(M.map(A),({locale:z})=>{const[S=z]=z.split("-");return S});for(const[z,S]of Object.entries(C))if(S)for(const L of S)j.filterlang&&z!==Z.current&&!(await L._mujs.code.request(!0)).translated||(!L._mujs.code.data_code_block&&(j.preview.code||j.preview.metadata)&&L._mujs.code.request().then(()=>{d(L)}),xe(L.code_url)&&L.code_urls.push({name:`${L.name} (.user.css)`,code_url:L.code_url},{name:`${L.name} (.user.js)`,code_url:L.code_url.replace(/\.user\.css$/,".user.js")}),Re(L,x.name))},R=async I=>{try{if(!I){p("Invalid data received from the server, TODO fix this");return}const k=I.documentElement;if(/openuserjs/gi.test(x.name)){const M=ie(".col-sm-8 .tr-link",k)??[];for(const C of M){for(;J(K(".script-version",C));)await new Promise(L=>requestAnimationFrame(L));const z=h.prop(K(".tr-link-a",C),"href").replace(new RegExp(document.location.origin,"gi"),"https://openuserjs.org"),S=A({name:h.text(K(".tr-link-a",C)),description:h.text(K("p",C)),version:h.text(K(".script-version",C)),url:z,code_url:`${z.replace(/\/scripts/gi,"/install")}.user.js`,total_installs:h.text(K("td:nth-child(2) p",C)),created_at:h.attr(K("td:nth-child(4) time",C),"datetime"),code_updated_at:h.attr(K("td:nth-child(4) time",C),"datetime"),users:[{name:h.text(K(".inline-block a",C)),url:h.prop(K(".inline-block a",C),"href")}]});u.match(S)||(!S._mujs.code.data_code_block&&(j.preview.code||j.preview.metadata)&&S._mujs.code.request().then(()=>{d(S)}),Re(S,x.name))}}}catch(k){p(k)}},re=I=>{try{if(ae(I.items))return;for(const k of I.items){const M=A({id:k.id??0,name:k.name,description:F(k.description)?_("no_license"):k.description,url:k.html_url,code_url:k.html_url,page_url:`${k.url}/contents/README.md`,created_at:k.created_at,code_updated_at:k.updated_at||Date.now(),daily_installs:k.watchers_count??0,good_ratings:k.stargazers_count??0,users:[{name:k.owner.login,url:k.owner.html_url}]});k.license?.name&&(M.license=k.license.name);const C=k.contents_url.replace(/\{\+path\}/,""),z=async S=>{const L=await se.req(S,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${x.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).catch(q);for(const Q of L)Q.type==="file"?Xe(Q.name)?M.code_urls.push({name:Q.name,code_url:Q.download_url}):xe(Q.name)&&M.code_urls.push({name:Q.name,code_url:Q.download_url}):Q.type==="dir"&&await z(`${C}/${Q.path}`)};z(C).then(()=>{if(F(M.code_urls))M.deleted=!0;else if(!M._mujs.code.data_code_block&&(j.preview.code||j.preview.metadata)){M._mujs.code.request().then(()=>{d(M)});return}d(M)}),Re(M,x.name)}}catch(k){p(k)}};let de;if(/github/gi.test(x.name)){if(F(x.token)){p(`[${x.name}]: Token required for use`);continue}se.req(`https://api.github.com/search/repositories?q=topic:${i}+topic:userstyle`,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${x.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(re).catch(q),de=se.req(P,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${x.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(re).then(()=>{se.req("https://api.github.com/rate_limit","GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${x.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(I=>{for(const[k,M]of Object.entries(I.resources.code_search)){const C=l("mujs-row","rate-info",{textContent:`${k.toUpperCase()}: ${M}`});f.rateContainer.append(C)}}).catch(q)})}else/openuserjs/gi.test(x.name)?de=se.req(P,"GET","document").then(R):de=se.req(P).then(G);de&&a.push(de.catch(q))}f.urlBar.placeholder=_("search_placeholder"),f.urlBar.value="",ae(a)?Promise.resolve().then(this.sortRecords):Promise.allSettled(a).then(this.sortRecords).catch(p)}catch(n){p(n)}return this}sortBy(n=j.autoSort,b=!1){const i=Array.from(this).flat().sort((a,u)=>/code_updated_at|created_at/.test(n)?a[n]>u[n]:/name|users|description/.test(n)?Array.isArray(a[n])?a[n][0].name.localeCompare(u[n][0].name):a[n].localeCompare(u[n]):u[n]-a[n]),d=b?i.reverse():i;for(const a of d)be(a._mujs.root)&&f.tabbody.append(a._mujs.root);return`${!b}`}sortRecords(){this.sortBy(j.autoSort);for(const[n,b]of Object.entries(this.groupBy()))ke.update(b.length,{name:n});return this}groupBy(){return X.groupBy(Array.from(this),({_mujs:n})=>n.info.engine.name)}*[Symbol.iterator](){const{host:n,engines:b}=this,c=Array.from(f).filter(({_mujs:i})=>i.info.host===n&&b.find(d=>d.enabled&&d.name===i.info.engine.name));for(const i of c)yield i}},ce=new rt,it=()=>{const n=l("mu-js","mujs-sty-flex"),b=l("mujs-btn","save",{textContent:_("save"),dataset:{command:"save"},disabled:!1}),c=l("mujs-btn","reset",{textContent:_("reset"),dataset:{command:"reset"}});n.append(c,b);const i=(m,g)=>{g=g??_("no_license"),m=m??_("no_license");const E=l("mujs-section",{dataset:{name:g}}),x=l("label",{dataset:{command:g}}),P=l("mu-js",{textContent:m});if(g==="filters"){const q=U.load("info",P);Se(q,{dataset:{command:"more-info",webpage:"https://greasyfork.org/scripts/12179"}})}return te(E,"click",q=>{const A=q.target.closest("[data-command]");if(!A)return;if(A.dataset.command===g){const R=ie(`[data-${g}]`,E);h.cl.has(R,"hidden")?h.cl.remove(R,"hidden"):h.cl.add(R,"hidden")}}),x.append(P),E.append(x),f.cfgpage.append(E),f.cfgpage._mujs.sections.has(E)||f.cfgpage._mujs.sections.add(E),E},d={general:i("General","general"),load:i("Automation","load"),list:i("List","list"),filters:i("List Filters ","filters"),blacklist:i("Blacklist (READONLY)","blacklist"),engine:i("Search Engines","engine"),theme:i("Theme Colors","theme"),exp:i("Import / Export","exp")},a=(m,g,E="checkbox",x="general",P={})=>{const[q,A,G]=/^(\w+)-(.+)/.exec(g)??[],R=l("label","sub-section hidden",{dataset:{[x]:m}}),re=l("mu-js",{innerHTML:m});R.append(re);const de=()=>{if(x==="engine"){const C=W.engines.find(z=>z.name===g);if(C)return C}return A?W[A][G]:W[g]},I=()=>{if(x==="engine"){const C=j.engines.find(z=>z.name===g);if(C)return C}return A?j[A][G]:j[g]},k={text:m,tag:x,value:g,type:E,attrs:P,default:de(),cache:I()};if(E==="select"){const C=l("select",{dataset:{[x]:m},...P});for(const z of Object.keys(oe)){if(z==="deleted"||z==="users")continue;const S=l("option",{value:z,textContent:z});C.append(S)}return C.value=j[g],R.append(C),d[x]&&d[x].append(R),k.elem=C,f.cfgpage._mujs.base.push(k),te(C,"change",function(){f.cache=!0,j[g]=this.value},!1),R}const M=l("input",{type:E,dataset:{[x]:m},...P});if(x==="engine"&&(M.dataset.name=g),d[x]&&d[x].append(R),E==="checkbox"){const C=l("mu-js","mujs-inlab"),z=l("label",{onclick(){M.dispatchEvent(new MouseEvent("click"))}});if(C.append(M,z),R.append(C),A?A==="filters"?M.checked=j[A][G].enabled:M.checked=j[A][G]:M.checked=j[g],te(M,"change",function(){f.setCache(!0,/filterlang/i.test(g)),A?A==="filters"?j[A][G].enabled=this.checked:j[A][G]=this.checked:j[g]=this.checked},!1),x==="engine"){const S=j.engines.find(L=>L.name===g);if(S){if(M.checked=S.enabled,M.dataset.engine=S.name,te(M,"change",function(){f.cache=!0,S.enabled=this.checked,ce.setEngines(j.engines)},!1),S.query){const L=W.engines.find(_e=>_e.name===S.name),Q=l("input",{type:"text",defaultValue:"",value:je(S.query),placeholder:je(L.query),dataset:{name:q,engine:S.name}});te(Q,"change",function(){f.cache=!0;try{S.query=encodeURIComponent(new URL(this.value).toString()),ce.setEngines(j.engines)}catch(_e){B.err(_e)}},!1),k.elemUrl=Q,R.append(Q)}if(S.name==="github"){const L=l("input",{type:"text",defaultValue:"",value:S.token??"",placeholder:"Paste Access Token",dataset:{engine:"github-token"}});te(L,"change",function(){f.cache=!0,S.token=this.value,ce.setEngines(j.engines)},!1),k.elemToken=L,R.append(L)}}}}else E==="text"&&(M.defaultValue="",M.value=g??"",M.placeholder=g??"",x==="theme"&&(M.dataset[x]=m,te(M,"change",function(){let C=!0;try{const z=f.root.style,S=`--mujs-${m}`,L=z.getPropertyValue(S);if(F(this.value)){j.theme[m]=W.theme[m],z.removeProperty(S);return}if(L===this.value)return;z.removeProperty(S),z.setProperty(S,this.value),j.theme[m]=this.value}catch(z){B.err(z),C=!1}finally{C?(h.cl.remove(this,"mujs-invalid"),h.prop(b,"disabled",!1)):(h.cl.add(this,"mujs-invalid"),h.prop(b,"disabled",!0))}},!1))),R.append(M);return k.elem=M,f.cfgpage._mujs.base.push(k),R};N.isGM&&(a(_("userjs_sync"),"cache"),a(_("userjs_autoinject"),"autoinject","checkbox","load")),a(`${_("redirect")} ${U.load("info",{dataset:{command:"more-info",webpage:"https://greasyfork.org/scripts/23840"}})}`,"sleazyredirect"),a(`${_("dtime")} (ms)`,"time","number","general",{defaultValue:1e4,value:j.time,min:0,step:500,onbeforeinput(m){m.target.validity.badInput?(h.cl.add(m.target,"mujs-invalid"),h.prop(b,"disabled",!0)):(h.cl.remove(m.target,"mujs-invalid"),h.prop(b,"disabled",!1))},oninput(m){f.setCache(!0);const g=m.target;g.validity.badInput||g.validity.rangeUnderflow&&g.value!=="-1"?(h.cl.add(g,"mujs-invalid"),h.prop(b,"disabled",!0)):(h.cl.remove(g,"mujs-invalid"),h.prop(b,"disabled",!1),j.time=F(g.value)?j.time:parseFloat(g.value))}}),a(_("auto_fetch"),"autofetch","checkbox","load"),a(_("userjs_fullscreen"),"autoexpand","checkbox","load",{onchange(m){m.target.checked?(h.cl.add([e,s],"expanded"),h.rmChildren(e),U.load("collapse",e)):(h.cl.remove([e,s],"expanded"),h.rmChildren(e),U.load("expand",e))}}),a("Clear on Tab close","clearTabCache","checkbox","load"),a(_("default_sort"),"autoSort","select","list"),a(_("filter"),"filterlang","checkbox","list"),a(_("preview_code"),"preview-code","checkbox","list"),a(_("preview_metadata"),"preview-metadata","checkbox","list"),a(_("recommend_author"),"recommend-author","checkbox","list"),a(_("recommend_other"),"recommend-others","checkbox","list");for(const[m,g]of Object.entries(j.filters))a(g.name,`filters-${m}`,"checkbox","filters");const u={greasyfork:"Greasy Fork",sleazyfork:"Sleazy Fork",openuserjs:"Open UserJS",github:`GitHub API ${U.load("info",{dataset:{command:"more-info",webpage:"https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"}})}`};for(const[m,g]of Object.entries(u))a(g,m,"checkbox","engine");for(const[m,g]of Object.entries(j.theme))a(m,g,"text","theme");const y=(m,g="",E=!1,x="String")=>{let P=m;if(typeof m=="string"&&m.startsWith("userjs-")){E=!0;const R=m.substring(7);P=`Built-in "${R}"`,g=Ge[R]}else if(Y(m)&&!m.enabled)return;x=pe(g),g=(Ue(g)?g.toString():JSON.stringify(g))??"";const q=l("label","hidden",{textContent:P,dataset:{blacklist:m}}),A=l("input",{type:"text",defaultValue:"",value:g,placeholder:g,dataset:{blacklist:m}});te(A,"change",function(){let R=!0;try{if(F(this.value))return;R=!0}catch(re){B.err(re),R=!1}finally{R?(h.cl.remove(this,"mujs-invalid"),h.prop(b,"disabled",!1)):(h.cl.add(this,"mujs-invalid"),h.prop(b,"disabled",!0))}},!1);const G=l("select",{dataset:{blacklist:m},disabled:E});if(E){A.readOnly=!0;const R=l("option",{value:x,textContent:x});G.append(R)}else for(const R of["String","RegExp","Object"]){const re=l("option",{value:R,textContent:R});G.append(re)}G.value=x,q.append(A,G),d.blacklist.append(q)};for(const m of j.blacklist)y(m);for(const m of["import","export"])for(const g of["config","theme"]){const E=l("mujs-btn",`mujs-${m} sub-section hidden`,{textContent:_(`${m}_${g}`),dataset:{command:`${m}-${g}`,exp:`${m}-${g}`}});d.exp.append(E)}f.cfgpage.append(n)};f.Tabs.custom=n=>{ce.setHost(n),le.build()},te(f.urlBar,"input",function(){if(this.placeholder===_("newTab"))return;if(F(this.value)){h.cl.remove([...f.toElem(),...f.cfgpage._mujs.sections],"hidden");return}const n=new Set;if(!h.cl.has(f.cfgpage,"hidden")){const a=new RegExp(this.value,"gi");for(const u of f.cfgpage._mujs.sections)be(u)&&(n.has(u)||u.textContent.match(a)&&n.add(u));h.cl.add(f.cfgpage._mujs.sections,"hidden"),h.cl.remove([...n],"hidden");return}const b=Array.from(f).filter(({_mujs:a})=>!n.has(a.root)),c=(a,u)=>{const y=new RegExp(this.value.replace(a,""),"gi");b.filter(m=>`${m[u]}`.match(y)&&n.add(m._mujs.root))},[,i,d]=/^(id|license|name|description):(.+)/.exec(this.value)??[];if(i){const a=new RegExp(d,"gi");b.filter(u=>`${u[i]}`.match(a)&&n.add(u._mujs.root))}if(this.value.match(/^(code_url|url):/))c(/^(code_url|url):/,"code_url");else if(this.value.match(/^(author|users?):/)){const[,a]=/^[\w_]+:(.+)/.exec(this.value)??[];if(a){const u=new RegExp(a,"gi");for(const y of b.filter(m=>!F(m.users)))for(const m of y.users)for(const g of Object.values(m))(typeof g=="string"&&g.match(u)||typeof g=="number"&&`${g}`.match(u))&&n.add(y._mujs.root)}}else if(this.value.match(/^(locale|i18n):/))c(/^(locale|i18n):/,"locale");else if(this.value.match(/^(search_engine|engine):/)){const[,a]=/^[\w_]+:(\w+)/.exec(this.value)??[];if(a){const u=new RegExp(a,"gi");for(const{_mujs:y}of b)y.info.engine.name.match(u)&&n.add(y.root)}}else if(this.value.match(/^filter:/)){const[,a]=/^\w+:(.+)/.exec(this.value)??[];if(a){const y=Pe().get(a.trim().toLocaleLowerCase());if(y){const{reg:m}=y;for(const{name:g,users:E,_mujs:x}of b)[{name:g},...E].find(P=>P.name.match(m))||n.add(x.root)}}}else if(this.value.match(/^recommend:/))for(const{url:a,id:u,users:y,_mujs:m}of b)(y.find(g=>g.id===j.recommend.authorID)||j.recommend.list.includes(a)||j.recommend.list.includes(u))&&n.add(m.root);else{const a=new RegExp(this.value,"gi");for(const u of b)if(u.name&&u.name.match(a)&&n.add(u._mujs.root),u.description&&u.description.match(a)&&n.add(u._mujs.root),u._mujs.code.data_meta)for(const y of Object.keys(u._mujs.code.data_meta))/name|desc/i.test(y)&&y.match(a)&&n.add(u._mujs.root)}h.cl.add(f.toElem(),"hidden"),h.cl.remove([...n],"hidden")},!1),te(f.urlBar,"change",function(){const n=r._active;if(this.placeholder===_("newTab")&&n){const b=n.firstElementChild,c=Fe($e(this.value));if(r.protoReg.test(this.value)){const i=r.getTab(this.value);r.close(n),i?r.active(i):r.create(this.value),this.placeholder=_("search_placeholder"),this.value=""}else c==="*"?(n.dataset.host=c,b.title=b.textContent="<All Sites>",ce.setHost(c),le.build()):f.checkBlacklist(c)?p(`Blacklisted: "${c}"`):(n.dataset.host=b.title=b.textContent=c,ce.setHost(c),le.build())}},!1),o.postTask(it,{priority:"background"}),le.build=async()=>{await o.postTask(ce.build,{priority:"background"}),f.timeoutFrame()},j.autofetch?le.build():f.timeoutFrame()}catch(o){B.err(o),f.remove()}return le}const at=o=>{typeof o=="function"&&(document.readyState==="interactive"||document.readyState==="complete"?o(document):document.addEventListener("DOMContentLoaded",e=>o(e.target),{once:!0}))};async function ot(){if(typeof window.trustedTypes<"u"){const e=["outlook"].join("|");new RegExp(e,"gi").test(fe.hostname)&&await new Promise(s=>X.setTimeout(s,1e3)),window.trustedTypes.defaultPolicy==null&&window.trustedTypes.createPolicy("default",{createHTML:s=>s,createScript:s=>s,createScriptURL:s=>s})}const o=Le(W);j={...o,...await ee.getValue("Config",o)},j.engines=j.engines.map(e=>(Array.isArray(e.unsupported)||(e.unsupported=e.name.includes("fork")?["pornhub.com"]:[]),e)),ye("Config:",j),at(e=>{try{if(typeof e>"u")throw new Error('"doc" is null, reload the webpage or use a different one',{cause:"loadDOM"});f.redirect(),j.autoinject?f.inject(ze,e):f.timeoutFrame(),Oe.register(_("userjs_inject"),()=>{f.inject(ze,e)}).register(_("userjs_close"),()=>{f.remove()})}catch(t){B.err(t)}})}ot()})();
