// ==UserScript==
// @version      8.1.0
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
(()=>{"use strict";if(typeof window>"u"||(()=>{try{return window.self!==window.top}catch{return!0}})())return;let Me=self.userjs;if((document instanceof Document||document instanceof XMLDocument&&document.createElement("div")instanceof HTMLDivElement)&&/^text\/html|^application\/(xhtml|xml)/.test(document.contentType||"")===!0&&(!(self.userjs instanceof Object)||Me.UserJS!==!0)?Me=self.userjs={UserJS:!0}:console.error("[%cMagic Userscript+%c] %cERROR","color: rgb(29, 155, 240);","","color: rgb(249, 24, 128);",`MIME type is not a document, got "${document.contentType||""}"`),!(typeof Me=="object"&&Me.UserJS))return;const Ze={ar:{createdby:"\u0627\u0646\u0634\u0623 \u0645\u0646 \u0642\u0628\u0644",name:"\u0627\u0633\u0645",daily_installs:"\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u064A\u0648\u0645\u064A",close:"\u064A\u063A\u0644\u0642",filterA:"\u0645\u0646\u0642\u064A",max:"\u062A\u062D\u0642\u064A\u0642 \u0623\u0642\u0635\u0649 \u0642\u062F\u0631",min:"\u062A\u0635\u063A\u064A\u0631",search:"\u064A\u0628\u062D\u062B",search_placeholder:"\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0646\u0635\u064A\u0629",install:"\u062A\u062B\u0628\u064A\u062A",issue:"\u0625\u0635\u062F\u0627\u0631 \u062C\u062F\u064A\u062F",version_number:"\u0627\u0644\u0625\u0635\u062F\u0627\u0631",updated:"\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B",total_installs:"\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u062B\u0628\u064A\u062A",ratings:"\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A",good:"\u062C\u064A\u062F",ok:"\u062C\u064A\u062F",bad:"\u0633\u064A\u0621",created_date:"\u062A\u0645 \u0625\u0646\u0634\u0627\u0624\u0647",redirect:"\u0634\u0648\u0643\u0629 \u062F\u0647\u0646\u064A\u0629 \u0644\u0644\u0643\u0628\u0627\u0631",filter:"\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649",dtime:"\u0639\u0631\u0636 \u0627\u0644\u0645\u0647\u0644\u0629",save:"\u062D\u0641\u0638",reset:"\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646",preview_code:"\u0643\u0648\u062F \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629",saveFile:"\u0627\u062D\u0641\u0638 \u0627\u0644\u0645\u0644\u0641",newTab:"\u0639\u0644\u0627\u0645\u0629 \u062A\u0628\u0648\u064A\u0628 \u062C\u062F\u064A\u062F\u0629",applies_to:"\u064A\u0646\u0637\u0628\u0642 \u0639\u0644\u0649",license:"\u0627\u0644\u062A\u0631\u062E\u064A\u0635",no_license:"\u0644\u0627 \u064A\u0648\u062C\u062F",antifeatures:"\u0625\u0639\u0644\u0627\u0646\u0627\u062A",userjs_fullscreen:"\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A",listing_none:"(\u0644\u0627 \u064A\u0648\u062C\u062F)",export_config:"\u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631",export_theme:"\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0633\u0645\u0629",import_config:"\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F",import_theme:"\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0646\u0633\u0642",code_size:"\u062D\u062C\u0645 \u0627\u0644\u0631\u0645\u0632",prmpt_css:"\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0643\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u061F",userjs_inject:"\u062D\u0642\u0646 Userscript+",userjs_close:"\u0625\u063A\u0644\u0627\u0642 Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},de:{createdby:"Erstellt von",name:"Name",daily_installs:"T\xE4gliche Installationen",close:"Schlie\xDFen Sie",filterA:"Filter",max:"Maximieren Sie",min:"minimieren",search:"Suche",search_placeholder:"Suche nach Userscripts",install:"Installieren Sie",issue:"Neue Ausgabe",version_number:"Version",updated:"Zuletzt aktualisiert",total_installs:"Installationen insgesamt",ratings:"Bewertungen",good:"Gut",ok:"Okay",bad:"Schlecht",created_date:"Erstellt",redirect:"Greasy Fork f\xFCr Erwachsene",filter:"Andere Sprachen herausfiltern",dtime:"Zeit\xFCberschreitung anzeigen",save:"Speichern Sie",reset:"Zur\xFCcksetzen",preview_code:"Vorschau Code",saveFile:"Datei speichern",newTab:"Neue Registerkarte",applies_to:"Gilt f\xFCr",license:"Lizenz",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatischer Vollbildmodus",listing_none:"(Keine)",export_config:"Konfig exportieren",export_theme:"Thema exportieren",import_config:"Konfig importieren",import_theme:"Thema importieren",code_size:"Code Gr\xF6\xDFe",prmpt_css:"Als UserStyle installieren?",userjs_inject:"Userscript+ einf\xFCgen",userjs_close:"Userscript+ schlie\xDFen",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Quelltext",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},en:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search for userscripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Okay",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Download",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},en_GB:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search for userscripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Okay",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Download",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},es:{createdby:"Creado por",name:"Nombre",daily_installs:"Instalaciones diarias",close:"Ya no se muestra",filterA:"Filtro",max:"Maximizar",min:"Minimizar",search:"Busque en",search_placeholder:"Buscar userscripts",install:"Instalar",issue:"Nueva edici\xF3n",version_number:"Versi\xF3n",updated:"\xDAltima actualizaci\xF3n",total_installs:"Total de instalaciones",ratings:"Clasificaciones",good:"Bueno",ok:"Ok",bad:"Malo",created_date:"Creado",redirect:"Greasy Fork para adultos",filter:"Filtrar otros idiomas",dtime:"Mostrar el tiempo de espera",save:"Guardar",reset:"Reiniciar",preview_code:"Vista previa del c\xF3digo",saveFile:"Guardar archivo",newTab:"Guardar archivo",applies_to:"Se aplica a",license:"Licencia",no_license:"Desconocida",antifeatures:"Caracter\xEDsticas indeseables",userjs_fullscreen:"Pantalla completa autom\xE1tica",listing_none:"(Ninguno)",export_config:"Exportar configuraci\xF3n",export_theme:"Exportar tema",import_config:"Importar configuraci\xF3n",import_theme:"Importar tema",code_size:"C\xF3digo Tama\xF1o",prmpt_css:"\xBFInstalar como UserStyle?",userjs_inject:"Inyectar Userscript+",userjs_close:"Cerrar Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"C\xF3digo",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},fr:{createdby:"Cr\xE9\xE9 par",name:"Nom",daily_installs:"Installations quotidiennes",close:"Ne plus montrer",filterA:"Filtre",max:"Maximiser",min:"Minimiser",search:"Recherche",search_placeholder:"Rechercher des userscripts",install:"Installer",issue:"Nouveau num\xE9ro",version_number:"Version",updated:"Derni\xE8re mise \xE0 jour",total_installs:"Total des installations",ratings:"Notations",good:"Bon",ok:"Ok",bad:"Mauvais",created_date:"Cr\xE9\xE9",redirect:"Greasy Fork pour les adultes",filter:"Filtrer les autres langues",dtime:"D\xE9lai d'affichage",save:"Sauvez",reset:"R\xE9initialiser",preview_code:"Pr\xE9visualiser le code",saveFile:"Enregistrer le fichier",newTab:"Nouvel onglet",applies_to:"S'applique \xE0",license:"Licence",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Plein \xE9cran automatique",listing_none:"(Aucun)",export_config:"Export Config",export_theme:"Exporter le th\xE8me",import_config:"Importer la configuration",import_theme:"Importer le th\xE8me",code_size:"Code Taille",prmpt_css:"Installer comme UserStyle ?",userjs_inject:"Injecter Userscript+",userjs_close:"Fermer Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},ja:{createdby:"\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F",name:"\u540D\u524D",daily_installs:"\u30C7\u30A4\u30EA\u30FC\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",close:"\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F",filterA:"\u30D5\u30A3\u30EB\u30BF\u30FC",max:"\u6700\u5927\u5316",min:"\u30DF\u30CB\u30DE\u30E0",search:"\u691C\u7D22",search_placeholder:"\u30E6\u30FC\u30B6\u30FC\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u691C\u7D22",install:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",issue:"\u65B0\u520A\u306E\u3054\u6848\u5185",version_number:"\u30D0\u30FC\u30B8\u30E7\u30F3",updated:"\u6700\u7D42\u66F4\u65B0\u65E5",total_installs:"\u7DCF\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6570",ratings:"\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0",good:"\u30B0\u30C3\u30C9",ok:"\u826F\u3044",bad:"\u60AA\u3044",created_date:"\u4F5C\u6210",redirect:"\u5927\u4EBA\u306EGreasyfork",filter:"\u4ED6\u306E\u8A00\u8A9E\u3092\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u3059\u308B",dtime:"\u8868\u793A\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8",save:"\u62EF\u6551",reset:"\u30EA\u30BB\u30C3\u30C8",preview_code:"\u30B3\u30FC\u30C9\u306E\u30D7\u30EC\u30D3\u30E5\u30FC",saveFile:"\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58",newTab:"\u65B0\u3057\u3044\u30BF\u30D6",applies_to:"\u9069\u7528\u5BFE\u8C61",license:"\u30E9\u30A4\u30BB\u30F3\u30B9",no_license:"\u4E0D\u660E",antifeatures:"\u30A2\u30F3\u30C1\u6A5F\u80FD",userjs_fullscreen:"\u81EA\u52D5\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3",listing_none:"(\u306A\u3057)",export_config:"\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u8A2D\u5B9A",export_theme:"\u30C6\u30FC\u30DE\u306E\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",import_config:"\u8A2D\u5B9A\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",import_theme:"\u30C6\u30FC\u30DE\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",code_size:"\u30B3\u30FC\u30C9\u30FB\u30B5\u30A4\u30BA",prmpt_css:"UserStyle\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u304B\uFF1F",userjs_inject:"Userscript+ \u3092\u633F\u5165",userjs_close:"Userscript+ \u3092\u9589\u3058\u308B",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u30B3\u30FC\u30C9",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},nl:{createdby:"Gemaakt door",name:"Naam",daily_installs:"Dagelijkse Installaties",close:"Sluit",filterA:"Filter",max:"Maximaliseer",min:"Minimaliseer",search:"Zoek",search_placeholder:"Zoeken naar gebruikersscripts",install:"Installeer",issue:"Nieuw Issue",version_number:"Versie",updated:"Laatste Update",total_installs:"Totale Installaties",ratings:"Beoordeling",good:"Goed",ok:"Ok",bad:"Slecht",created_date:"Aangemaakt",redirect:"Greasy Fork voor volwassenen",filter:"Filter andere talen",dtime:"Weergave timeout",save:"Opslaan",reset:"Opnieuw instellen",preview_code:"Voorbeeldcode",saveFile:"Bestand opslaan",newTab:"Nieuw tabblad",applies_to:"Geldt voor",license:"Licentie",no_license:"N.v.t.",antifeatures:"Functies voor eigen gewin",userjs_fullscreen:"Automatisch volledig scherm",listing_none:"(Geen)",export_config:"Configuratie exporteren",export_theme:"Thema exporteren",import_config:"Configuratie importeren",import_theme:"Thema importeren",code_size:"Code Grootte",prmpt_css:"Installeren als UserStyle?",userjs_inject:"Injecteer Userscript+",userjs_close:"Sluit Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Code",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},pl:{createdby:"Stworzony przez",name:"Nazwa",daily_installs:"Codzienne instalacje",close:"Zamknij",filterA:"Filtr",max:"Maksymalizuj",min:"Minimalizuj",search:"Wyszukiwanie",search_placeholder:"Wyszukiwanie skrypt\xF3w u\u017Cytkownika",install:"Instalacja",issue:"Nowy numer",version_number:"Wersja",updated:"Ostatnia aktualizacja",total_installs:"\u0141\u0105czna liczba instalacji",ratings:"Oceny",good:"Dobry",ok:"Ok",bad:"Z\u0142y",created_date:"Utworzony",redirect:"Greasy Fork dla doros\u0142ych",filter:"Odfiltruj inne j\u0119zyki",dtime:"Limit czasu wy\u015Bwietlania",save:"Zapisz",reset:"Reset",preview_code:"Kod podgl\u0105du",saveFile:"Zapisz plik",newTab:"Nowa karta",applies_to:"Dotyczy",license:"Licencja",no_license:"N/A",antifeatures:"Antywzorce",userjs_fullscreen:"Automatyczny pe\u0142ny ekran",listing_none:"(Brak)",export_config:"Konfiguracja eksportu",export_theme:"Motyw eksportu",import_config:"Importuj konfiguracj\u0119",import_theme:"Importuj motyw",code_size:"Kod Rozmiar",prmpt_css:"Zainstalowa\u0107 jako UserStyle?",userjs_inject:"Wstrzyknij Userscript+",userjs_close:"Zamknij Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"Kod",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},ru:{createdby:"\u0421\u0434\u0435\u043B\u0430\u043D\u043E",name:"\u0418\u043C\u044F",daily_installs:"\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438",close:"\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C",filterA:"\u0424\u0438\u043B\u044C\u0442\u0440",max:"\u041C\u0430\u043A\u0441\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C",min:"\u041C\u0438\u043D\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A",search_placeholder:"\u041F\u043E\u0438\u0441\u043A \u044E\u0437\u0435\u0440\u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432",install:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435",issue:"\u041D\u043E\u0432\u044B\u0439 \u0432\u044B\u043F\u0443\u0441\u043A",version_number:"\u0412\u0435\u0440\u0441\u0438\u044F",updated:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",total_installs:"\u0412\u0441\u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A",ratings:"\u0420\u0435\u0439\u0442\u0438\u043D\u0433\u0438",good:"\u0425\u043E\u0440\u043E\u0448\u043E",ok:"\u0425\u043E\u0440\u043E\u0448\u043E",bad:"\u041F\u043B\u043E\u0445\u043E",created_date:"\u0421\u043E\u0437\u0434\u0430\u043D\u043E",redirect:"Greasy Fork \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445",filter:"\u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u044F\u0437\u044B\u043A\u0438",dtime:"\u0422\u0430\u0439\u043C-\u0430\u0443\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",reset:"\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",preview_code:"\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043A\u043E\u0434\u0430",saveFile:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B",newTab:"\u041D\u043E\u0432\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430",applies_to:"\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A",license:"\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F",no_license:"\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E",antifeatures:"\u041D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",userjs_fullscreen:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",listing_none:"(\u043D\u0435\u0442)",export_config:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",export_theme:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0442\u0435\u043C\u044B",import_config:"\u0418\u043C\u043F\u043E\u0440\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",import_theme:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043C\u0443",code_size:"\u041A\u043E\u0434 \u0420\u0430\u0437\u043C\u0435\u0440",prmpt_css:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u043A UserStyle?",userjs_inject:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C Userscript+",userjs_close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},zh:{createdby:"\u7531...\u5236\u4F5C",name:"\u59D3\u540D",daily_installs:"\u65E5\u5E38\u5B89\u88C5",close:"\u4E0D\u518D\u663E\u793A",filterA:"\u8FC7\u6EE4\u5668",max:"\u6700\u5927\u5316",min:"\u6700\u5C0F\u5316",search:"\u641C\u7D22",search_placeholder:"\u641C\u7D22\u7528\u6237\u811A\u672C",install:"\u5B89\u88C5",issue:"\u65B0\u95EE\u9898",version_number:"\u7248\u672C",updated:"\u6700\u540E\u66F4\u65B0",total_installs:"\u603B\u5B89\u88C5\u91CF",ratings:"\u8BC4\u7EA7",good:"\u597D\u7684",ok:"\u597D\u7684",bad:"\u4E0D\u597D",created_date:"\u521B\u5EFA",redirect:"\u5927\u4EBA\u7684Greasyfork",filter:"\u8FC7\u6EE4\u6389\u5176\u4ED6\u8BED\u8A00",dtime:"\u663E\u793A\u8D85\u65F6",save:"\u62EF\u6551",reset:"\u91CD\u7F6E",preview_code:"\u9884\u89C8\u4EE3\u7801",saveFile:"\u4FDD\u5B58\u5B58\u6863",newTab:"\u65B0\u6807\u7B7E",applies_to:"\u9002\u7528\u4E8E",license:"\u8BB8\u53EF\u8BC1",no_license:"\u6682\u65E0",antifeatures:"\u53EF\u80FD\u4E0D\u53D7\u6B22\u8FCE\u7684\u529F\u80FD",userjs_fullscreen:"\u81EA\u52A8\u5168\u5C4F",listing_none:"(\u65E0)",export_config:"\u5BFC\u51FA\u914D\u7F6E",export_theme:"\u5BFC\u51FA\u4E3B\u9898",import_config:"\u5BFC\u5165\u914D\u7F6E",import_theme:"\u5BFC\u5165\u4E3B\u9898",code_size:"\u4EE3\u7801 \u5C3A\u5BF8",prmpt_css:"\u5B89\u88C5\u4E3A\u7528\u6237\u98CE\u683C\uFF1F",userjs_inject:"\u6CE8\u5165 Userscript+",userjs_close:"\u5173\u95ED Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u4EE3\u7801",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},zh_CN:{createdby:"\u7531...\u5236\u4F5C",name:"\u59D3\u540D",daily_installs:"\u65E5\u5E38\u5B89\u88C5",close:"\u4E0D\u518D\u663E\u793A",filterA:"\u8FC7\u6EE4\u5668",max:"\u6700\u5927\u5316",min:"\u6700\u5C0F\u5316",search:"\u641C\u7D22",search_placeholder:"\u641C\u7D22\u7528\u6237\u811A\u672C",install:"\u5B89\u88C5",issue:"\u65B0\u95EE\u9898",version_number:"\u7248\u672C",updated:"\u6700\u540E\u66F4\u65B0",total_installs:"\u603B\u5B89\u88C5\u91CF",ratings:"\u8BC4\u7EA7",good:"\u597D\u7684",ok:"\u597D\u7684",bad:"\u4E0D\u597D",created_date:"\u521B\u5EFA",redirect:"\u5927\u4EBA\u7684Greasyfork",filter:"\u8FC7\u6EE4\u6389\u5176\u4ED6\u8BED\u8A00",dtime:"\u663E\u793A\u8D85\u65F6",save:"\u62EF\u6551",reset:"\u91CD\u7F6E",preview_code:"\u9884\u89C8\u4EE3\u7801",saveFile:"\u4FDD\u5B58\u5B58\u6863",newTab:"\u65B0\u6807\u7B7E",applies_to:"\u9002\u7528\u4E8E",license:"\u8BB8\u53EF\u8BC1",no_license:"\u6682\u65E0",antifeatures:"\u53EF\u80FD\u4E0D\u53D7\u6B22\u8FCE\u7684\u529F\u80FD",userjs_fullscreen:"\u81EA\u52A8\u5168\u5C4F",listing_none:"(\u65E0)",export_config:"\u5BFC\u51FA\u914D\u7F6E",export_theme:"\u5BFC\u51FA\u4E3B\u9898",import_config:"\u5BFC\u5165\u914D\u7F6E",import_theme:"\u5BFC\u5165\u4E3B\u9898",code_size:"\u4EE3\u7801 \u5C3A\u5BF8",prmpt_css:"\u5B89\u88C5\u4E3A\u7528\u6237\u98CE\u683C\uFF1F",userjs_inject:"\u6CE8\u5165 Userscript+",userjs_close:"\u5173\u95ED Userscript+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u4EE3\u7801",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"},zh_TW:{createdby:"\u7531...\u5236\u4F5C",name:"\u59D3\u540D",daily_installs:"\u65E5\u5E38\u5B89\u88C5",close:"\u4E0D\u518D\u663E\u793A",filterA:"\u8FC7\u6EE4\u5668",max:"\u6700\u5927\u5316",min:"\u6700\u5C0F\u5316",search:"\u641C\u7D22",search_placeholder:"\u641C\u7D22\u7528\u6237\u811A\u672C",install:"\u5B89\u88C5",issue:"\u65B0\u95EE\u9898",version_number:"\u7248\u672C",updated:"\u6700\u540E\u66F4\u65B0",total_installs:"\u603B\u5B89\u88C5\u91CF",ratings:"\u8BC4\u7EA7",good:"\u597D\u7684",ok:"\u597D\u7684",bad:"\u4E0D\u597D",created_date:"\u521B\u5EFA",redirect:"\u5927\u4EBA\u7684Greasyfork",filter:"\u8FC7\u6EE4\u6389\u5176\u4ED6\u8BED\u8A00",dtime:"\u663E\u793A\u8D85\u65F6",save:"\u62EF\u6551",reset:"\u91CD\u7F6E",preview_code:"\u9884\u89C8\u4EE3\u7801",saveFile:"\u4FDD\u5B58\u5B58\u6863",newTab:"\u65B0\u6807\u7B7E",applies_to:"\u9002\u7528\u4E8E",license:"\u8BB8\u53EF\u8BC1",no_license:"\u6682\u65E0",antifeatures:"\u53EF\u80FD\u4E0D\u53D7\u6B22\u8FCE\u7684\u529F\u80FD",userjs_fullscreen:"\u81EA\u52A8\u5168\u5C4F",listing_none:"(\u65E0)",export_config:"\u5BFC\u51FA\u914D\u7F6E",export_theme:"\u5BFC\u51FA\u4E3B\u9898",import_config:"\u5BFC\u5165\u914D\u7F6E",import_theme:"\u5BFC\u5165\u4E3B\u9898",code_size:"\u4EE3\u7801 \u5C3A\u5BF8",prmpt_css:"\u4F5C\u70BA\u4F7F\u7528\u8005\u6A23\u5F0F\u5B89\u88DD\uFF1F",userjs_inject:"\u6CE8\u5165\u7528\u6236\u8173\u672C+",userjs_close:"\u95DC\u9589\u7528\u6236\u8173\u672C+",userjs_sync:"Sync",userjs_autoinject:"Inject on load",auto_fetch:"Fetch on load",code:"\u4EE3\u78BC",metadata:"Metadata",preview_metadata:"Preview Metadata",recommend_author:"Recommend Author",recommend_other:"Recommend Others",default_sort:"Default Sort"}},Xe=`mujs-root {
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
}`;class A extends null{static#e="[%cMagic Userscript+%c]";static#t="color: rgb(29, 155, 240);";static#s=new Set;static dbg(...e){const t=new Date;console.debug(`${A.#e} %cDBG`,A.#t,"","color: rgb(255, 212, 0);",`[${t.getHours()}:${("0"+t.getMinutes()).slice(-2)}:${("0"+t.getSeconds()).slice(-2)}]`,...e)}static err(...e){console.error(`${A.#e} %cERROR`,A.#t,"","color: rgb(249, 24, 128);",...e);const t=A.#e.replace(/%c/g,"");for(const s of e.filter(r=>r instanceof Error&&"cause"in r&&!Object.is(r.name,"")))A.#s.has(s.message)||(A.#s.add(s.message),A.alert(`${t} ${s.message} Caused by: ${s.cause}`))}static info(...e){console.info(`${A.#e} %cINF`,A.#t,"","color: rgb(0, 186, 124);",...e)}static log(...e){console.log(`${A.#e} %cLOG`,A.#t,"","color: rgb(219, 160, 73);",...e)}static alert(e){typeof alert<"u"&&alert(e)}}const Fe=a=>{try{return typeof a=="function"&&Reflect.getPrototypeOf(a)===Element&&Reflect.getPrototypeOf(a.prototype)===Element.prototype}catch{return!1}},me=(()=>{const a=[()=>HTMLElement,()=>HTMLElement.prototype.constructor,()=>Reflect.getPrototypeOf(HTMLDivElement),()=>Reflect.getPrototypeOf(HTMLSpanElement),()=>Reflect.getPrototypeOf(HTMLUnknownElement)];for(const e of a)try{const t=e();if(Fe(t))return t}catch{}})();if(me==null){A.err(new Error('Failed to find the native "HTMLElement"',{cause:"customElements"}));return}const Ie=typeof CustomElementRegistry=="function"?CustomElementRegistry.prototype:Reflect.getPrototypeOf(customElements),_e={define:Ie.define,get:Ie.get};if(typeof _e.define!="function"||typeof _e.get!="function"){A.err(new Error('Failed to find the native "customElements"',{cause:"customElements"}));return}const Ae=(()=>{try{const a="mujs-probe",e=Reflect.construct(CustomElementRegistry,[]);class t extends me{}if(Reflect.apply(_e.define,e,[a,t]),Reflect.apply(Document.prototype.createElement,document,[a,{customElementRegistry:e}])instanceof t)return Reflect.construct(CustomElementRegistry,[])}catch{}return customElements})(),Ye=(a,e)=>{const t=Reflect.apply(_e.get,Ae,[a]);if(t!==e){if(t!==void 0)throw new Error(`"${a}" is already defined by another script`);Reflect.apply(_e.define,Ae,[a,e])}};function Qe(){const a=e=>e&&e.Math===Math&&e;return a(typeof globalThis=="object"&&globalThis)||a(typeof window=="object"&&window)||a(typeof self=="object"&&self)||void 0}const ee=Qe();if(ee==null)return;const fe={createElement:ee.document.createElement.bind(ee.document),createElementNS:ee.document.createElementNS.bind(ee.document),createTextNode:ee.document.createTextNode.bind(ee.document),scheduler:{postTask(a,e){return"scheduler"in ee&&"postTask"in ee.scheduler?ee.scheduler.postTask(a,e):(e=Object.assign({},e),e.delay===void 0&&(e.delay=0),e.delay=Number(e.delay),e.delay<0?Promise.reject(new TypeError('"delay" must be a positive number.')):new Promise(t=>{setTimeout(()=>{t(a())},e.delay)}))},yield(){return"scheduler"in ee&&"yield"in ee.scheduler?ee.scheduler.yield():new Promise(a=>{setTimeout(a,0)})}},groupBy(a,e){return"groupBy"in Object?Object.groupBy(a,e):a.reduce((t={},...s)=>{const r=e(...s);return t[r]??=[],t[r].push(s[0]),t},{})}};for(const[a,e]of Object.entries(fe))if(!(/scheduler|navigator|customElements/.test(a)||typeof e=="function"))throw new Error(`Safe "${a}" returned "${e}"`,{cause:"_self"});const we=function(){},Re=async function(){},he="about:blank",xe=(()=>{try{return new URL(window.location.href)}catch{return new URL(he)}})();let j;const Ue=a=>{let e;return typeof a=="string"&&(e=a.replace(/^www\./,"")),e||""},Ge=a=>{let e;return typeof a=="string"&&(e=a.split(".").splice(-2).join(".").replace(/\/|https:/g,"")),e||""},Be=a=>Ge(Ue(a));function pe(a){try{return Object.prototype.toString.call(a).match(/\[object (.*)\]/)?.[1]||""}catch{return""}}const be=a=>/Document|Element|HTML/.test(pe(a)),q=a=>/Function/.test(pe(a)),ge=a=>/Document|Element|HTML|Window/.test(pe(a)),Z=a=>/Object/.test(pe(a));function se(a,e,t){if(a==null)return[];if(Array.isArray(a))return a;if(a instanceof Window||a instanceof Document)return[a];if(ge(a))return Array.of(a);const s=Object.assign({},e),r=["entries","keys","values"].find(f=>f in s||s[f]);if(typeof a=="string")return t instanceof Element||t instanceof Document?[...t.querySelectorAll(a)]:r==="keys"&&typeof t=="string"?a.split(t):r==="keys"?[...a]:[a];if(r!=null){const f=pe(a);if(/Object/.test(f)){const v=r;if(Object[v])return Array.from(Object[v](a))}else if(/Set|Map/.test(f)){const v=a,x=r;if(v[x])return Array.from(v[x]())}}return Array.from(a)}const De=a=>/RegExp/.test(pe(a)),ve=a=>typeof a=="string"&&/\.user\.css$/.test(a),et=a=>typeof a=="string"&&/\.user\.js$/.test(a),K=a=>Object.is(a,null)||Object.is(a,void 0),ne=a=>typeof a=="string"?Object.is(a.replaceAll("\0","").trim(),""):Object.is(se(a,{keys:!0}).length,0),I=a=>K(a)||ne(a),Oe=a=>JSON.parse(JSON.stringify(a)),Te=(()=>{const{userAgent:a="",userAgentData:e={}}=navigator,{platform:t="",mobile:s=!1}=Object(e);return/Mobile|Tablet/.test(String(a))||!!s||/Android|Apple/.test(String(t))})();class M extends null{static#e={script:{icon:"",name:"Magic Userscript+",namespace:"https://github.com/magicoflolis/Userscript-Plus",updateURL:"https://github.com/magicoflolis/Userscript-Plus/raw/master/dist/magic-userjs.js",version:"Bookmarklet",bugs:"https://github.com/magicoflolis/Userscript-Plus/issues"}};static get isGM(){return typeof GM<"u"||typeof GM_xmlhttpRequest<"u"}static async wrap(e){return e}static addElement(){return(M.isGM&&typeof GM.addElement<"u"&&q(GM.addElement)&&GM.addElement||typeof GM_addElement<"u"&&q(GM_addElement)&&GM_addElement||we)(...arguments)}static openInTab(){return(M.isGM&&typeof GM.openInTab<"u"&&q(GM.openInTab)&&GM.openInTab||typeof GM_openInTab<"u"&&q(GM_openInTab)&&GM_openInTab||window.open)(...arguments)}static get info(){return M.isGM&&typeof GM.info<"u"&&Z(GM.info)&&GM.info||typeof GM_info<"u"&&Z(GM_info)&&GM_info||M.#e}static async setValue(){return(M.isGM&&typeof GM.setValue<"u"&&q(GM.setValue)&&GM.setValue||typeof GM_setValue<"u"&&q(GM_setValue)&&M.wrap(GM_setValue)||Re)(...arguments)}static async getValue(){return(M.isGM&&typeof GM.getValue<"u"&&q(GM.getValue)&&GM.getValue||typeof GM_getValue<"u"&&q(GM_getValue)&&M.wrap(GM_getValue)||Re)(...arguments)}static registerMenuCommand(){return(M.isGM&&typeof GM.registerMenuCommand<"u"&&q(GM.registerMenuCommand)&&GM.registerMenuCommand||typeof GM_registerMenuCommand<"u"&&q(GM_registerMenuCommand)&&GM_registerMenuCommand||we)(...arguments)}static xmlHttpRequest(){return(M.isGM&&typeof GM.xmlHttpRequest<"u"&&q(GM.xmlHttpRequest)&&GM.xmlHttpRequest||typeof GM_xmlhttpRequest<"u"&&q(GM_xmlhttpRequest)&&M.wrap(GM_xmlhttpRequest)||function(t){return new Promise((s,r)=>{const f=new XMLHttpRequest;let v="GET",x=he,F;for(const[z,O]of se(t,{entries:!0}))if(q(O)){const[,P]=/^on(\w+)/g.exec(z)||[];P&&(/progress/i.test(P)?f.addEventListener(P,O):f.addEventListener(P,oe=>{O(oe),/error|abort/.test(P)?r(oe):s(oe)}))}else typeof O=="string"?z==="responseType"?f.responseType=/buffer/i.test(O)?"arraybuffer":O:z==="method"?v=O:z==="url"&&(x=O):O instanceof URL?x=O:z==="body"&&(F=O);f.open(v,x),I(f.responseType)&&(f.responseType="text"),F?f.send(F):f.send()})})(...arguments)}}const Pe={local:/localhost|router|gov|(\d+\.){3}\d+/,finance:/school|pay|bank|money|cart|checkout|authorize|bill|wallet|venmo|zalo|skrill|bluesnap|coin|crypto|currancy|insurance|finance/,social:/login|join|signin|signup|sign-up|password|reset|password_reset/,unsupported:{host:"fakku.net",pathname:"/hentai/.+/read/page/.+"}},V={autofetch:!1,autoinject:!0,autoSort:"daily_installs",clearTabCache:!0,cache:!0,autoexpand:!1,filterlang:!1,sleazyredirect:!1,time:1e4,blacklist:["userjs-local","userjs-finance","userjs-social","userjs-unsupported"],preview:{code:!1,metadata:!1},engines:[{enabled:!0,name:"greasyfork",query:encodeURIComponent("https://api.greasyfork.org/scripts/by-site/{host}.json?language=all"),unsupported:["pornhub.com"]},{enabled:!1,name:"sleazyfork",query:encodeURIComponent("https://api.sleazyfork.org/scripts/by-site/{host}.json?language=all"),unsupported:["pornhub.com"]},{enabled:!1,name:"openuserjs",query:encodeURIComponent("https://openuserjs.org/?q={host}"),unsupported:[]},{enabled:!1,name:"github",token:"",query:encodeURIComponent("https://api.github.com/search/repositories?q=topic:{domain}+topic:userscript"),unsupported:[]}],theme:{"even-row":"","odd-row":"","even-err":"","odd-err":"","background-color":"","gf-color":"","sf-color":"","border-b-color":"","gf-btn-color":"","sf-btn-color":"","sf-txt-color":"","txt-color":"","chck-color":"","chck-gf":"","chck-git":"","chck-open":"",placeholder:"","position-top":"","position-bottom":"","position-left":"","position-right":"","font-family":""},recommend:{author:!0,others:!0,authorID:166061,authorUrl:"https://github.com/magicoflolis",blacklist:[478597],list:[33005,394820,438684,4870,394420,25068,483444,1682,22587,789,28497,386908,24204,404443,4336,368183,393396,473830,12179,423001,376510,23840,40525,6456,"https://openuserjs.org/install/Patabugen/Always_Remember_Me.user.js","https://openuserjs.org/install/nokeya/Direct_links_out.user.js","https://github.com/jijirae/y2monkey/raw/main/y2monkey.user.js","https://github.com/jijirae/r2monkey/raw/main/r2monkey.user.js","https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js","https://github.com/jesus2099/konami-command/raw/master/INSTALL-USER-SCRIPT.user.js","https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js"]},filters:{ASCII:{enabled:!1,name:"Non-ASCII",regExp:"[^\\x00-\\x7F\\s]+"},Latin:{enabled:!1,name:"Non-Latin",regExp:"[^\\u0000-\\u024F\\u2000-\\u214F\\s]+"},Games:{enabled:!1,name:"Games",flag:"iu",regExp:"Aimbot|AntiGame|Agar|agar\\.io|alis\\.io|angel\\.io|ExtencionRipXChetoMalo|AposBot|DFxLite|ZTx-Lite|AposFeedingBot|AposLoader|Balz|Blah Blah|Orc Clan Script|Astro\\s*Empires|^\\s*Attack|^\\s*Battle|BiteFight|Blood\\s*Wars|Bloble|Bonk|Bots|Bots4|Brawler|\\bBvS\\b|Business\\s*Tycoon|Castle\\s*Age|City\\s*Ville|chopcoin\\.io|Comunio|Conquer\\s*Club|CosmoPulse|cursors\\.io|Dark\\s*Orbit|Dead\\s*Frontier|Diep\\.io|\\bDOA\\b|doblons\\.io|DotD|Dossergame|Dragons\\s*of\\s*Atlantis|driftin\\.io|Dugout|\\bDS[a-z]+\\n|elites\\.io|Empire\\s*Board|eRep(ublik)?|Epicmafia|Epic.*War|ExoPlanet|Falcon Tools|Feuerwache|Farming|FarmVille|Fightinfo|Frontier\\s*Ville|Ghost\\s*Trapper|Gladiatus|Goalline|Gondal|gota\\.io|Grepolis|Hobopolis|\\bhwm(\\b|_)|Ikariam|\\bIT2\\b|Jellyneo|Kapi\\s*Hospital|Kings\\s*Age|Kingdoms?\\s*of|knastv(o|oe)gel|Knight\\s*Fight|\\b(Power)?KoC(Atta?ck)?\\b|\\bKOL\\b|Kongregate|Krunker|Last\\s*Emperor|Legends?\\s*of|Light\\s*Rising|lite\\.ext\\.io|Lockerz|\\bLoU\\b|Mafia\\s*(Wars|Mofo)|Menelgame|Mob\\s*Wars|Mouse\\s*Hunt|Molehill\\s*Empire|MooMoo|MyFreeFarm|narwhale\\.io|Neopets|NeoQuest|Nemexia|\\bOGame\\b|Ogar(io)?|Pardus|Pennergame|Pigskin\\s*Empire|PlayerScripts|pokeradar\\.io|Popmundo|Po?we?r\\s*(Bot|Tools)|PsicoTSI|Ravenwood|Schulterglatze|Skribbl|slither\\.io|slitherplus\\.io|slitheriogameplay|SpaceWars|splix\\.io|Survivio|\\bSW_[a-z]+\\n|\\bSnP\\b|The\\s*Crims|The\\s*West|torto\\.io|Travian|Treasure\\s*Isl(and|e)|Tribal\\s*Wars|TW.?PRO|Vampire\\s*Wars|vertix\\.io|War\\s*of\\s*Ninja|World\\s*of\\s*Tanks|West\\s*Wars|wings\\.io|\\bWoD\\b|World\\s*of\\s*Dungeons|wtf\\s*battles|Wurzelimperium|Yohoho|Zombs"},SocialNetworks:{enabled:!1,name:"Social Networks",flag:"iu",regExp:"Face\\s*book|Google(\\+| Plus)|\\bHabbo|Kaskus|\\bLepra|Leprosorium|MySpace|meinVZ|odnoklassniki|\u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438|Orkut|sch(ue|\xFC)ler(VZ|\\.cc)?|studiVZ|Unfriend|Valenth|VK|vkontakte|\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435|Qzone|Twitter|TweetDeck"},Clutter:{enabled:!1,name:"Clutter",flag:"iu",regExp:"^\\s*(.{1,3})\\1+\\n|^\\s*(.+?)\\n+\\2\\n*$|^\\s*.{1,5}\\n|do\\s*n('|o)?t (install|download)|nicht installieren|(just )?(\\ban? |\\b)test(ing|s|\\d|\\b)|^\\s*.{0,4}test.{0,4}\\n|\\ntest(ing)?\\s*|^\\s*(\\{@|Smolka|Hacks)|\\[\\d{4,5}\\]|free\\s*download|theme|(night|dark) ?(mode)?"}}};class J extends null{static#e=new Map(Object.entries(Ze));static toDate(e){const t=typeof e=="string"?new Date(e):e;return new Intl.DateTimeFormat(navigator.language).format(t)}static toNumber(e){return new Intl.NumberFormat(navigator.language).format(e)}static i18n$(e){let t="INVALID KEY";try{const s=J.#e;if(s.has(J.current)?t=s.get(J.current):t=s.get("en"),Z(t)&&e in t)return t[e]}catch(s){A.err(s),t="ERROR OCCURED"}return t}static get current(){return navigator.language.split("-").find(e=>J.#e.has(e))||"en"}}const{i18n$:y}=J,je=a=>{let e=a;for(;;)try{const t=decodeURIComponent(e);if(t===e)return e;e=t}catch{return e}},W=(a,e)=>(e||document).querySelector(a),re=(a,e)=>(e||document).querySelectorAll(a),ke=(a,e)=>Te&&typeof TouchEvent<"u"?a:e,Q=(a,e,t,s)=>{s===void 0||typeof s=="boolean"?s={capture:!0}:s.capture=!0;for(const r of se(a).filter(ge)){if(e==="click"&&Te){r.addEventListener(ke("touchstart","click"),t,s);continue}r.addEventListener(e,t,s)}};function He(a,e){const t=(Array.isArray(e)?e:typeof e=="string"?e.split(" "):[]).filter(s=>typeof s=="string"&&!ne(s));ne(t)||a.classList.add(...t)}function Se(a,e){if(a!=null&&Z(e))for(const[t,s]of Object.entries(e))/^useGM|customElementRegistry/.test(t)||(/^_mujs/i.test(t)?a[t]=s:Z(s)?Se(a[t],s):q(s)?/^on/.test(t)?a[t]=s:a.addEventListener(t,s):/^class/i.test(t)?He(a,s):a.tagName==="A"&&typeof s=="string"&&/^(download|type)/i.test(t)?a.setAttribute(t,s):a[t]=s);return a}const l=(a,...e)=>{const t=fe.createElement(a,{customElementRegistry:Ae});for(let s=0;s<e.length;s++){const r=e[s];if(s===0)He(t,r);else if(s===1&&typeof r=="string"&&!I(r)){t.textContent=r;continue}Se(t,r)}return t};class h extends null{static HTML(e){return se(e).filter(ge)}static attr(e,t,s){for(const r of h.HTML(e)){if(s===void 0)return r.getAttribute(t)||void 0;s===null?r.removeAttribute(t):r.setAttribute(t,s)}}static prop(e,t,s=void 0){const r=h.HTML(e);if(s===void 0)return r.find(f=>f[t]);for(const f of r)f[t]=s}static text(e,t){const s=h.HTML(e);if(t===void 0)return s.length!==0?s[0].textContent:void 0;for(const r of s)r.textContent=t}static remove(e){return h.HTML(e).some(t=>t.remove()),h}static rmChildren(e){for(const t of h.HTML(e))for(const s of t.children)s&&s.remove()}static get cl(){return{add(e,t){const s=se(t,{keys:!0}," ");return h.HTML(e).some(r=>r.classList.add(...s))},remove(e,t){const s=se(t,{keys:!0}," ");return h.HTML(e).some(r=>r.classList.remove(...s))},toggle(e,t,s){let r;for(const f of h.HTML(e))r=f.classList.toggle(t,s);return r},has(e,t){return h.HTML(e).some(s=>s.classList.contains(t))}}}}class tt{eventListeners=new Map;events=new Set;pool=new Set;blank=he;protocal="mujs:";protoReg=new RegExp(`${this.protocal}(.+)`,"i");custom=we;el={add:l("tab-add",{textContent:"+",dataset:{command:"new-tab"}}),head:l("tab-root")};constructor(e){this.el.head.append(this.el.add),e&&(this.el.root=e,this.el.root.append(this.el.head))}get _pool(){return se(this.pool).filter(e=>!K(e))}get _active(){return this._pool.find(({classList:e})=>e.contains("active"))||null}getTab(e){const t=this.validate(e);return this._pool.find(({dataset:s})=>s.host===t)||null}validate(e){return typeof e=="string"?e:e instanceof URL||e instanceof Location?e.toString():""}addListener(e,t,s){const r={type:e,listener:t};this.events.has(r)||(I(s)||(r.options=s),this.events.add(r))}#e(e,...t){for(const s of se(this.events).filter(r=>r.type===e))q(s.listener)&&s.listener.call(this,...t),Z(s.options)&&s.options.once===!0&&this.events.delete(event);return this}addEventListener(e,t,s){this.eventListeners.has(e)||this.eventListeners.set(e,new Set);const r={listener:t,options:s},f=this.eventListeners.get(e);f&&!f.has(r)&&f.add(r)}dispatchEvent(e){const t=e.type;if(!(t in this.eventListeners))return!0;const s=this.eventListeners.get(t)||new Set;for(const r of se(s))r.listener(e);return!e.defaultPrevented}intFN(e){const t=this.validate(e),[,s]=this.protoReg.exec(t)||[];return this.#e("internal",s,e)}active(e,t=!0){return be(e)?(this.pool.has(e)||this.pool.add(e),this.#e("active",e,t)):this}close(e){return be(e)&&(this.pool.has(e)&&this.pool.delete(e),this.#e("close",e),e.remove()),this}create(e=void 0){if(typeof e=="string"){const v=this.getTab(e);if(this.protoReg.test(e)&&v)return this.active(v),null}const t=l("tab-content",{dataset:{command:"switch-tab"},style:`order: ${this.el.head.childElementCount};`}),s=l("tab-close",{dataset:{command:"close-tab"},title:y("close"),textContent:"X"}),r=l("tab-host");t.append(r,s),this.el.head.append(t),this.active(t,!1);const[,f]=this.protoReg.exec(e)??[];return this.#e("create",t,r,s,f,e),t}}class qe{ids=[];set(e,t){return new Promise((s,r)=>{const f=setTimeout(()=>{this.clear(f),typeof t=="string"?r(new Error(t)):s()},e);this.ids.push(f)})}clear(...e){return this.ids=this.ids.filter(t=>e.includes(t)?(clearTimeout(t),!1):!0),this}}class G extends null{static type={_:{viewBox:"0 0 0 0"},close:{viewBox:"0 0 384 512",html:'<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>'},code:{viewBox:"0 0 640 512",html:'<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>'},collapse:{viewBox:"0 0 448 512",html:'<path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/>'},download:{viewBox:"0 0 384 512",html:'<path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>'},expand:{viewBox:"0 0 448 512",html:'<path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/>'},gear:{viewBox:"0 0 512 512",html:'<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>'},github:{viewBox:"0 0 496 512",html:'<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>'},globe:{viewBox:"0 0 512 512",html:'<path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>'},info:{viewBox:"0 0 512 512",html:'<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>'},install:{viewBox:"0 0 512 512",html:'<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>'},issue:{viewBox:"0 0 512 512",html:'<path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/>'},minus:{viewBox:"0 0 448 512",html:'<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>'},nav:{viewBox:"0 0 448 512",html:'<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>'},pager:{viewBox:"0 0 512 512",html:'<path d="M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm64 32l0 64c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zM80 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0z"/>'},verified:{viewBox:"0 0 56 56",fill:"currentColor",stroke:"currentColor",html:'<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z"/></g>'},refresh:{viewBox:"0 0 512 512",fill:"currentColor",html:'<path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/>'}};static load(e,t){e in G.type||(e="_");const s=fe.createElementNS("http://www.w3.org/2000/svg","svg"),r=G.type[e];for(const[f,v]of Object.entries(r))f!=="html"&&s.setAttributeNS(null,f,v);try{if(typeof r.html=="string"){if(window.trustedTypes.defaultPolicy){const f=window.trustedTypes.defaultPolicy.createHTML(r.html);s.innerHTML=f}else s.innerHTML=r.html;s.setAttribute("id",`mujs_${e}`)}}catch{}return Se(s,t),be(t)?(t.appendChild(s),s):s.outerHTML}}class Y extends null{static prefix="MUJS";static get store(){return window.localStorage}static getItem(e){return Y.store.getItem(`${Y.prefix}-${e}`)}static has(e){return Y.getItem(e)!=null}static setItem(e,t){return Y.store.setItem(`${Y.prefix}-${e}`,t),Y}static remove(e){return Y.store.removeItem(`${Y.prefix}-${e}`),Y}static async setValue(e,t){if(t){const s=typeof t=="string"?t:JSON.stringify(t);M.isGM?await M.setValue(e,s):Y.setItem(e,s)}return Y}static async getValue(e,t){try{const s=f=>{if(typeof f=="string")try{const v=JSON.parse(f);if(!I(v))return v}catch{}return t},r=M.isGM?await M.getValue(e,JSON.stringify(t)):Y.getItem(e);return r==null?t:s(r)}catch(s){return s instanceof Error&&(s.cause="getValue"),A.err(s),t}}}class Ne extends null{static cmds=new Set;static register(e,t){return M.isGM&&(q(t)&&!this.cmds.has(t)&&this.cmds.add(t),M.registerMenuCommand(e,t)),Ne}}const te={req(a,e="GET",t="json",s,r=!1){const f=Object.assign({},s);return typeof e=="string"&&(f.method=e.toUpperCase().replaceAll(/\W/g,"")),typeof t=="string"&&(t=t.toLowerCase().replaceAll(/\W/g,"")),f.credentials&&M.isGM&&!r?(f.anonymous=Object.is(f.credentials,"omit"),delete f.credentials):f.onprogress&&delete f.onprogress,new Promise((v,x)=>{if(I(a))x(new Error('"url" parameter is empty',{cause:"Network.req"}));else if(r){const F=a instanceof Request?a:new Request(a,f);fetch(F).then(z=>{if(z.ok)if(/array|buffer/i.test(t))v(z.arrayBuffer());else if(/json/i.test(t))v(z.json());else if(/text/i.test(t))v(z.text());else if(/blob/i.test(t))v(z.blob());else if(/form|data/i.test(t))v(z.formData());else if(/clone|copy/i.test(t))v(z.clone());else if(/document/i.test(t)){const O=z.text(),P=new DOMParser;if(O instanceof Promise)O.then(oe=>{const ue=P.parseFromString(oe,"text/html");v(ue)});else{const oe=P.parseFromString(O,"text/html");v(oe)}}else v(z);else x(z)}).catch(x)}else{const F={url:a,responseType:t,...f,onerror(z){const O=new Error(`status: ${z.status} finalURL: ${a}`,{cause:"Network.req::onerror"});O.name="",x(O)},onload(z){if(z.status!==200){const O=new Error(`status: ${z.status} finalURL: ${a}`,{cause:"Network.req::onload"});O.name="",x(O)}else/basic/i.test(t)?v(z):v(z.response)}};M.xmlHttpRequest(F)}})},format(a,e=2){if(Number.isNaN(a))return`0 ${this.sizes[0]}`;const t=1024,s=e<0?0:e,r=Math.floor(Math.log(a)/Math.log(t));return`${parseFloat((a/Math.pow(t,r)).toFixed(s))} ${this.sizes[r]}`},sizes:["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"]},Ce={cnt:{total:{count:0}},set(a){if(!this.cnt[a.name]){const e=l("count-frame",{_mujs:a});return this.cnt[a.name]={count:0,root:e},e}return this.cnt[a.name].root},update(a,e){this.cnt[e.name].count+=a,this.cnt.total.count+=a,this.updateAll()},updateAll(){for(const a of Object.values(this.cnt))h.attr(a.root,"count",String(a.count))},reset(){for(const[a,e]of Object.entries(this.cnt)){e.count=0,h.attr(e.root,"count",String(e.count));const t=j.engines.find(s=>a===s.name);t&&h.cl[t.enabled?"remove":"add"](e.root,"hidden")}}};class ze{static prompts=[];injected;userjsCache;isBlacklisted;opacityMin;opacityMax;#e={unsaved:!1,rebuild:!1};#t;#s;constructor(){this.refresh=this.refresh.bind(this),this.showError=this.showError.bind(this),this.toElem=this.toElem.bind(this),this.webpage=xe,this.host=Be(xe.hostname??he),this.injected=!1,this.#t==null&&(this.#t=l("main-userjs"),ge(this.#t)||(this.#t=M.addElement("main-userjs"))),this.#s==null&&(this.#s=l("mujs-root"),ge(this.#s)||(this.#s=M.addElement("mujs-root"))),this.userjsCache=new Map,this.isBlacklisted=!1,this.opacityMin="0.15",this.opacityMax="1",this.timeouts={frame:new qe,mouse:new qe},this.injFN=we,window.addEventListener("beforeunload",this,!1)}get frame(){return this.#t==null&&(this.#t=l("main-userjs"),ge(this.#t)||(this.#t=M.addElement("main-userjs"))),this.#t}get root(){return this.#s==null&&(this.#s=l("mujs-root"),ge(this.#s)||(this.#s=M.addElement("mujs-root"))),this.#s}set cache(e){typeof e=="boolean"?(this.#e.unsaved=e,this.#e.rebuild=e):(this.#e.unsaved=!1,this.#e.rebuild=!1)}get cache(){return this.#e}setCache(e,t){typeof e=="boolean"&&(this.#e.unsaved=e),K(e)&&K(t)?this.#e.rebuild=!1:typeof t=="boolean"&&(this.#e.rebuild=t)}inject(e,t){if(this.checkBlacklist(this.host))this.showError(`Blacklisted: "${this.host}"`),this.remove();else if(!K(t))try{if(t.documentElement.appendChild(this.frame),this.injected?q(this.injFN.build)&&this.injFN.build():(this.injected=!0,this.initFn(),q(e)&&this.elementsReady&&(this.injFN=e())),I(this.frame.dataset.insertedBy)){const s="Failed to inject due to the current website!";this.host==="youtube.com"?A.err(s):A.err(new Error(s,{cause:this.host}))}}catch(s){A.err(s),this.remove()}return this}initFn(){if(this.setTheme(),Ce.cnt.total.root=this.mainbtn,this.countframe)for(const x of j.engines)this.countframe.append(Ce.set(x));const{refresh:e,urlBar:t,host:s,userjsCache:r,cfgpage:f,table:v}=this;return this.Tabs=new tt(this.toolbar),this.Tabs.addListener("internal",function(x){x==="settings"&&(h.cl.remove(f,"hidden"),h.cl.add(v,"hidden"),h.prop(t,"placeholder","Search settings"))}),this.Tabs.addListener("active",function(x,F){if(h.cl.add([v,f],"hidden"),h.cl.remove(this.pool,"active"),h.cl.add(x,"active"),F){const z=x.dataset.host??this.blank;z===this.blank?(h.cl.add(f,"hidden"),h.cl.remove(v,"hidden"),e()):z.startsWith(this.protocal)?this.intFN(z):(h.cl.add(f,"hidden"),h.cl.remove(v,"hidden"),this.custom(z))}else h.cl.remove(v,"hidden")}),this.Tabs.addListener("close",function(x){if(j.clearTabCache){const{host:z}=x.dataset,O=Array.from(r.values()).filter(({_mujs:P})=>!I(P)&&P.info.host===z);for(const P of O)O.splice(O.indexOf(P),1)}x.classList.contains("active")&&e();const F=x.nextElementSibling??x.previousElementSibling;F&&F.dataset.command!=="new-tab"&&this.active(F)}),this.Tabs.addListener("create",function(x,F,z,O,P){K(P)?(e(),x.dataset.host=this.blank,F.title=F.textContent=y("newTab")):O?(x.dataset.host=P||O,F.title=F.textContent=O||P,this.intFN(P)):x.dataset.host=F.title=F.textContent=P||O}),this.Tabs.create(s),this}init(){try{return this.mainframe=l("mujs-mainframe",{style:`opacity: ${this.opacityMin};`}),this.countframe=l("mujs-column"),this.mainbtn=l("count-frame","mainbtn"),this.urlBar=l("input","mujs-url-bar",{autocomplete:"off",spellcheck:!1,type:"text",placeholder:y("search_placeholder")}),this.rateContainer=l("mujs-column","rate-container"),this.footer=l("mujs-row","mujs-footer"),this.tabbody=l("tbody"),this.promptElem=l("mujs-row","mujs-prompt"),this.toolbar=l("mujs-toolbar"),this.table=l("table"),this.tabhead=l("thead"),this.header=l("mujs-header"),this.tbody=l("mujs-body"),this.cfgpage=l("mujs-config","hidden"),this.main=l("mujs-main","hidden"),this.urlContainer=l("mujs-url"),this.btnframe=l("mujs-column","btn-frame"),this.btnHandles=l("mujs-column","btn-handles"),this.btnHide=l("mujs-btn","hide-list",{title:y("min"),dataset:{command:"hide-list"}}),G.load("minus",this.btnHide),this.btnfullscreen=l("mujs-btn","fullscreen",{title:y("max"),dataset:{command:"fullscreen"}}),G.load("expand",this.btnfullscreen),this.closebtn=l("mujs-btn","close",{title:y("close"),dataset:{command:"close"}}),G.load("close",this.closebtn),this.btncfg=l("mujs-btn","settings hidden",{title:"Settings",dataset:{command:"settings"}}),G.load("gear",this.btncfg),this.btnhome=l("mujs-btn","github hidden",{title:`GitHub (v${/\d+\.\d+\.\d+|Book/.test(M.info.script.version)?M.info.script.version:M.info.script.version.slice(0,5)})`,dataset:{command:"open-tab",webpage:M.info.script.namespace}}),G.load("github",this.btnhome),this.btnissue=l("mujs-btn","issue hidden",{title:y("issue"),dataset:{command:"open-tab",webpage:M.info.script.bugs??"https://github.com/magicoflolis/Userscript-Plus/issues"}}),G.load("issue",this.btnissue),this.btngreasy=l("mujs-btn","greasy hidden",{title:"Greasy Fork",dataset:{command:"open-tab",webpage:"https://greasyfork.org/scripts/421603"}}),G.load("globe",this.btngreasy),this.btnnav=l("mujs-btn","nav",{title:"Navigation",dataset:{command:"navigation"}}),G.load("nav",this.btnnav),((...t)=>{const s=l("tr");for(const r of t){const f=l("th",r.class??"",r);h.text(f)!==y("install")&&(h.cl.add(f,"mujs-pointer"),f.dataset.command="sort_by",f.dataset.asc=!1),s.append(f)}this.tabhead.append(s),this.table.append(this.tabhead,this.tabbody)})({class:"mujs-header-name",textContent:y("name"),dataset:{sort:"name"}},{textContent:y("createdby"),dataset:{sort:"users"}},{textContent:y("daily_installs"),dataset:{sort:"daily_installs"}},{textContent:y("updated"),dataset:{sort:"code_updated_at"}},{textContent:y("install")}),Te?(h.cl.add([this.btnHide,this.btnfullscreen,this.closebtn],"hidden"),this.btnframe.append(this.btnHide,this.btnfullscreen,this.closebtn,this.btnhome,this.btngreasy,this.btnissue,this.btncfg,this.btnnav)):(this.btnHandles.append(this.btnHide,this.btnfullscreen,this.closebtn),this.btnframe.append(this.btnhome,this.btngreasy,this.btnissue,this.btncfg,this.btnnav)),this.toolbar.append(this.btnHandles),this.urlContainer.append(this.urlBar),this.header.append(this.urlContainer,this.rateContainer,this.countframe,this.btnframe),this.tbody.append(this.table,this.cfgpage),this.main.append(this.toolbar,this.header,this.tbody,this.footer,this.promptElem),this.mainframe.append(this.mainbtn),this.root&&this.root.append(this.mainframe,this.main),!0}catch(e){A.err(e)}return!1}handleEvent(e){e.type==="beforeunload"&&this.remove()}remove(){return this.userjsCache.clear(),h.remove(this.frame),this}async save(){this.setCache(!1);const e=Oe(j);if(e!==V){const t=(s,r)=>JSON.stringify(s)===JSON.stringify(r);for(const[s,r]of Object.entries(e))s in V?(Array.isArray(r)&&t(r,V[s])||Z(r)&&t(r,V[s])||Object.is(r,V[s]))&&delete e[s]:delete e[s];await Y.setValue("Config",e),A.info("Saved config:",{config:e,cfg:j,DEFAULT_CONFIG:V}),this.redirect()}return j}checkBlacklist(e){if(!this.injected)return!1;if(e=e||this.host,/accounts*\.google\./.test(this.webpage.host))return this.isBlacklisted=!0;let t=!1;for(const s of se(j.blacklist))if(typeof s=="string"){if(s.startsWith("userjs-")){const[,r]=/userjs-(\w+)/.exec(s)??[],f=Pe[r];De(f)?f.test(e)&&(t=!0):Z(f)&&f.host===this.host&&(t=!0)}}else if(Z(s)){if(!s.enabled)continue;if(s.regex===!0&&new RegExp(s.url,s.flags).test(e)&&(t=!0),Array.isArray(s.url))for(const r of s.url)e.includes(r)&&(t=!0);e.includes(s.url)&&(t=!0)}return this.isBlacklisted=t}setTheme(){const e=j.theme??V.theme;if(this.root&&e!==V.theme){const{style:t}=this.root;for(const[s,r]of Object.entries(e)){const f=`--mujs-${s}`,v=t.getPropertyValue(f);I(r)&&(e[s]=v),v!==r&&(t.removeProperty(f),t.setProperty(f,r))}}return this}makePrompt(e,t={},s=!0,...r){h.remove(ze.prompts);const f=l("mu-js","prompt",{dataset:{prompt:e}}),v=l("mu-js","prompt-head");G.load("refresh",v);for(const x of r)be(x)&&v.appendChild(x);if(f.append(v),s){const x=l("mu-js","prompt-body",{dataset:t}),F=l("mujs-btn","prompt-confirm",{textContent:"Confirm",dataset:{command:"prompt-confirm"}}),z=l("mujs-btn","prompt-deny",{textContent:"Deny",dataset:{command:"prompt-deny"}});x.append(F,z),f.append(x)}else{const x=l("mu-js","prompt-body"),F=l("mujs-btn","prompt-deny",{textContent:y("close")});Q(F,ke("touchend","click"),()=>{f.remove()}),x.append(F),f.append(x)}return ze.prompts.push(f),this.promptElem.append(f),f}showError(...e){A.err(...e);let t="";for(const r of e)r instanceof Error?t+=`${r.message}${"cause"in r?` Caused by: "${r.cause}"`:""}
`:Z(r)?t+=JSON.stringify(r)+`
`:typeof r=="string"&&(t+=`${r}
`);const s=l("mu-js","error");return s.appendChild(fe.createTextNode(t)),this.footer.append(s),this}refresh(){return this.urlBar.placeholder=y("newTab"),Ce.reset(),h.cl.remove(this.toElem(),"hidden"),h.cl.remove(this.cfgpage._mujs.sections,"hidden"),h.rmChildren([this.tabbody,this.rateContainer,this.footer]),this}reloadConfig(){if(!this.cfgpage)return this;for(const e of this.cfgpage._mujs.base){const[,t,s]=/^(\w+)-(.+)/.exec(e.value)??[];let r=V[e.value],f=j[e.value];if(e.tag==="engine"){const v=V.engines.find(F=>F.name===e.value),x=j.engines.find(F=>F.name===e.value);v&&(r=v),x&&(f=x)}else t&&(r=V[t][s],f=j[t][s]);e.cache=f,e.type==="checkbox"?t?t==="filters"?e.elem.checked=j[t][s].enabled:e.elem.checked=f:e.tag==="engine"&&(e.elem.checked=f.enabled,e.elemUrl.value=je(f.query),e.elemUrl.placeholder=je(r.query),e.elemToken&&(e.elemToken=f.token)):e.elem.value=f}return this.setTheme()}redirect(){const e=window.top.location,t=/greasyfork\.org/.test(e.hostname);if(j.sleazyredirect&&t&&/scripts\/\d+/.test(e.href)&&W("span.sign-in-link")){const s=t?"sleazyfork":"greasyfork";if(!W("#script-info")&&(s=="greasyfork"||W("div.width-constraint>section>p>a"))){const r=e.href.replace(/\/\/([^.]+\.)?(greasyfork|sleazyfork)\.org/,"//$1"+s+".org");A.info(`Redirecting to "${r}"`),q(e.assign)?e.assign(r):e.href=r}}return this}async timeoutFrame(e){const{frame:t}=this.timeouts;if(t.clear(...t.ids),!h.cl.has(this.mainframe,"hidden")){e=e??j.time??V.time;let s=1e4;typeof e=="number"&&!Number.isNaN(e)&&(s=this.isBlacklisted?e/2:e),await t.set(s),this.remove(),t.clear(...t.ids)}return this}toElem(){return Array.from(this).map(({_mujs:e})=>e.root)}*[Symbol.iterator](){const e=Array.from(this.userjsCache.values()).filter(({_mujs:t})=>!I(t)&&t.info.engine.enabled);for(const t of e)yield t}}const p=new ze,ie={build:Re};class st extends me{constructor(){if(super(),!q(this.attachShadow))throw new Error('Failed to initialize: "attachShadow not supported"',{cause:"MainUserJS"});const e=this.attachShadow({mode:"closed"});this.dataset.insertedBy=M.info.script.name,this.style="visibility: visible;",this._mujs={webpage:xe,host:Be(xe.hostname)},this._mujsElements={root:p.root};const t=(s,r,f)=>{const v={cause:"loadCSS"};if(this._mujsElements.stylesheet instanceof HTMLStyleElement)return this._mujsElements.stylesheet;if(typeof f!="boolean"&&(f=!M.isGM),(typeof r!="string"||I(r))&&(r="CSS"),typeof s!="string")throw new Error('"css" must be a typeof "string"',v);if(ne(s))throw new Error(`"${r}" contains empty CSS string`,v);let x;if(f){if(x=l("style",{textContent:s,dataset:{insertedBy:M.info.script.name,role:r,useMake:f}}),x instanceof HTMLStyleElement)return e.appendChild(x),this._mujsElements.stylesheet=x,x;throw new Error(`An unknown error occured, Role: ${r}; useMake: ${f}`,v)}return!Object.is(M.addElement,we)&&(x=M.addElement(e,"style",{textContent:s}),x instanceof HTMLStyleElement||x instanceof HTMLElement)?(x.dataset.insertedBy=M.info.script.name,x.dataset.role=r,x.dataset.useMake=f,this._mujsElements.stylesheet=x,x):t(s,r,!0)};t(Xe,"primary-stylesheet"),e.appendChild(p.root),p.elementsReady=p.init()}}class nt extends me{static observedAttributes=["count"];constructor(){super()}connectedCallback(){if(this._mujs){const e=this._mujs;e.enabled||this.classList.add("hidden"),this.dataset.type=e.name,this.title=je(e.query??e.url)}this.setAttribute("count","0")}attributeChangedCallback(e,t,s){Object.is(t,s)||(this.textContent=s)}}class ot extends me{constructor(){super(),this._mujs={base:[],sections:new Set}}}class at extends me{constructor(){super(),this.initClick=!0;const e=["mouseenter","mouseleave"];e.push(ke("touchstart","mouseup"));const t=s=>{s.preventDefault(),s.stopPropagation();const r=s instanceof MouseEvent;if(s.type==="mouseup"||s.type==="touchstart"){if(p.timeouts.frame.clear(...p.timeouts.frame.ids),r&&s.button===2)return;if(r&&s.button===1||s.ctrlKey&&s.altKey&&!s.shiftKey)return p.remove();!s.ctrlKey&&!s.altKey&&s.shiftKey?p.Tabs.create():!s.ctrlKey&&s.altKey&&!s.shiftKey&&p.Tabs.create("mujs:settings"),this.initClick&&!j.autofetch&&(this.initClick=!1,ie.build()),h.cl.remove(p.main,"hidden"),h.cl.add(this,"hidden"),(s.ctrlKey&&!s.altKey&&!s.shiftKey||j.autoexpand)&&(h.cl.add([p.btnfullscreen,p.main],"expanded"),h.rmChildren(p.btnfullscreen),G.load("collapse",p.btnfullscreen))}else s.type==="mouseenter"?(this.style.opacity=p.opacityMax,p.timeouts.frame.clear(...p.timeouts.frame.ids)):s.type==="mouseleave"&&(this.style.opacity=p.opacityMin,p.timeoutFrame())};for(const s of e)this.addEventListener(s,t)}}class rt extends me{constructor(){super(),this._mujs={}}}const it=[["main-userjs",st],["count-frame",nt],["mujs-config",ot],["mujs-mainframe",at],["mujs-main",rt]];for(const[a,e]of it)try{Ye(a,e)}catch(t){A.err(t)}function Le(){try{const{scheduler:a}=fe,{btnfullscreen:e,mainframe:t,main:s,Tabs:r,showError:f}=p,v={download(n){return Z(n)&&n.url&&(n.url=`data:text/plain;charset=utf-8,${encodeURIComponent(Z(n.url)?JSON.stringify(n.url,null," "):n.url)}`,l("a",{download:n.filename||"file",href:n.url,type:n.type||"text/plain"}).dispatchEvent(new MouseEvent("click"))),p.inject(Le,document)},install(n){const b=window.top.location,c=typeof n=="string"?n:n.href;return q(b.assign)?b.assign(c):b.href=c,be(n)&&n.remove(),p.inject(Le,document)}},x=(n,b,c,i)=>{const d=n._mujs.code[b]??n._mujs.code.data_meta[b];if(I(d)){const o=l("mujs-a",{textContent:y("listing_none")});c.append(o);return}if(h.rmChildren(c),h.cl.remove(i,"hidden"),Z(d))if(b==="resource")for(const[o,u]of Object.entries(d)){const _=l("mujs-a",{textContent:o??"ERROR"});u.startsWith("http")&&(_.dataset.command="open-tab",_.dataset.webpage=u),c.append(_)}else{const o=l("mujs-a",{textContent:d.text});d.domain&&(o.dataset.command="open-tab",o.dataset.webpage=`https://${d.text}`),c.append(o)}else if(typeof d=="string"){const o=l("mujs-a",{textContent:d});c.append(o)}else for(const o of d)if(typeof o=="string"&&o.startsWith("http")){const u=l("mujs-a",{textContent:o,dataset:{command:"open-tab",webpage:o}});c.append(u)}else if(Z(o)){const u=l("mujs-a",{textContent:o.text});o.domain&&(u.dataset.command="open-tab",u.dataset.webpage=`https://${o.text}`),c.append(u)}else{const u=l("mujs-a",{textContent:o});c.append(u)}};class F{constructor(){const b=[ke("touchstart","mouseup"),"updateditem"];Te||b.push("mouseenter","mouseleave");for(const c of b)Q(s,c,this,!1)}$handleEvent(b){const{type:c}=b;if(b instanceof CustomEvent&&c==="updateditem"){const i=b.detail;if(!i._mujs)return;if(i.deleted===!0){i._mujs.root.remove(),p.userjsCache.delete(i.id),Ce.reset(),le.sortRecords();return}I(i.code_urls)||(i.code_url=i.code_urls[0].code_url);for(const d of re("[data-name]",i._mujs.root)){const o=d.dataset.name;if(o==="code"){i._mujs.code.data_code_block&&(j.preview.code&&!j.preview.metadata?d.value=i._mujs.code.data_code_block:j.preview.metadata&&!j.preview.code?d.value=i._mujs.code.data_meta_block:d.value=`${i._mujs.code.META_START_COMMENT}${i._mujs.code.data_meta_block}${i._mujs.code.META_END_COMMENT}${i._mujs.code.data_code_block}`);continue}i[o]&&(o==="license"?(h.attr(d,"title",i.license??y("no_license")),h.text(d,`${y("license")}: ${i.license??y("no_license")}`)):o==="code_updated_at"?(h.text(d,J.toDate(i.code_updated_at)),d.dataset.value=new Date(i.code_updated_at).toISOString()):o==="created_date"?(h.text(d,`${y("created_date")}: ${J.toDate(i.created_at)}`),d.dataset.value=new Date(i.created_at).toISOString()):o==="total_installs"?h.text(d,`${y("total_installs")}: ${J.toNumber(i.total_installs)}`):h.text(d,i[o]))}if(i._mujs.code.data_code_block)for(const d of re('mujs-column[data-el="matches"]',i._mujs.root))x(i,d.dataset.type,W(".mujs-grants",d),d);p.userjsCache.has(i.id)&&p.userjsCache.set(i.id,i)}else if(b.preventDefault(),b.stopPropagation(),!K(b.target)&&(c==="mouseup"&&b.button===1||c==="touchstart")){const i=b.target.closest("[data-command]");if(K(i))return;const{dataset:{command:d}}=i;d==="switch-tab"||d==="close-tab"?r.close(i):d==="new-tab"&&r.create()}else c==="mouseenter"?(p.timeouts.frame.clear(...p.timeouts.frame.ids),p.timeouts.mouse.clear(...p.timeouts.mouse.ids),s.style.opacity=p.opacityMax):c==="mouseleave"&&p.timeouts.mouse.set(j.time).then(()=>{s.style.opacity=p.opacityMin})}handleEvent(b){this.$handleEvent(b)}}new F,Q(s,ke("touchend","click"),async n=>{try{if(!n.target)return;const c=n.target.closest("[data-command]");if(K(c))return;let i=c.dataset,d=i.command;if(/^prompt-/.test(c.dataset.command)){i=c.parentElement.dataset,d=i.command;let o=c.parentElement.parentElement;if(/prompt-install/.test(c.dataset.command))o=c.parentElement.parentElement.parentElement,v.install(c.dataset.code_url);else if(/prompt-download/.test(c.dataset.command)){o=c.parentElement.parentElement.parentElement;const u=p.userjsCache.get(+c.dataset.userjs);if(u){const _=await u._mujs.code.request(!1,c.dataset.code_url);typeof _.code=="string"&&v.download({url:_.code,filename:`${u.name}-${Date.now()}.user.${ve(c.dataset.code_url)?"css":"js"}`})}}o.remove();return}if(d==="install-script"){const o=p.userjsCache.get(+i.userjs);if(K(o))return;if(o.code_urls.length>1){const u=l("mujs-list",{style:"display: flex; flex-direction: column;"});for(const _ of o.code_urls){const m=l("mujs-a",{title:_.code_url,textContent:_.name,dataset:{command:"prompt-install",code_url:_.code_url}});u.append(m)}p.makePrompt("Multiple detected:",i,!1,u)}else v.install(o.code_url)}else if(/open-tab|more-info/.test(d)&&i.webpage){d==="more-info"&&n.preventDefault();const o=M.isGM&&{active:!0,insert:!0}||"_blank";return M.openInTab(i.webpage,o)}else if(d==="navigation")for(const o of[...re("mujs-btn",c.parentElement)].filter(u=>!h.cl.has(u,"nav")))h.cl.toggle(o,"hidden");else if(d==="list-description"){const o=[],u=new Set(["TD","MUJS-A","MU-JS"]),_=c.parentElement;for(const m of Object.values(_._mujs))u.has(m.tagName)||m.tagName==="TEXTAREA"&&I(m.value)||o.push(m);c.nextElementSibling&&(o.push(c.nextElementSibling),c.nextElementSibling.nextElementSibling&&o.push(c.nextElementSibling.nextElementSibling)),h.cl.has(o[0],"hidden")?h.cl.remove(o,"hidden"):h.cl.add(o,"hidden")}else if(d==="close")p.remove();else if(d==="fullscreen")h.cl.has(e,"expanded")?(h.cl.remove([e,s],"expanded"),h.rmChildren(e),G.load("expand",e)):(h.cl.add([e,s],"expanded"),h.rmChildren(e),G.load("collapse",e));else if(d==="hide-list")h.cl.add(s,"hidden"),h.cl.remove(t,"hidden"),p.timeoutFrame();else if(d==="save"){if(p.setCache(null,!0),h.rmChildren(p.rateContainer),!h.prop(c,"disabled")){const o=await p.save();p.cache.rebuild&&o.autofetch&&ie.build(),p.cache=null}}else if(d==="reset")j=V,h.remove(re(".error",p.footer)),p.cache=!0,p.reloadConfig();else if(d==="settings")p.cache.unsaved&&f("Unsaved changes"),r.create("mujs:settings"),p.setCache(null);else if(d==="new-tab")r.create();else if(d==="switch-tab")r.active(c);else if(d==="close-tab"&&c.parentElement)r.close(c.parentElement);else if(d==="download-userjs"){const o=p.userjsCache.get(+i.userjs);if(K(o))return;if(o.code_urls.length>1){const u=l("mujs-list",{style:"display: flex; flex-direction: column;"});for(const _ of o.code_urls){const m=l("mujs-a",{title:_.code_url,textContent:_.name,dataset:{command:"prompt-download",code_url:_.code_url,userjs:i.userjs}});u.append(m)}p.makePrompt("Multiple detected:",i,!1,u)}else{const u=await o._mujs.code.request(!1);typeof u.code=="string"&&v.download({url:u.code,filename:`${o.name}-${Date.now()}.user.${ve(o.code_url)?"css":"js"}`})}}else if(d==="load-userjs"||d==="load-header"){if(!p.userjsCache.has(+i.userjs))return;const o=W("textarea",c.parentElement.parentElement);if(!I(o.value)&&d===o.dataset.load){h.cl.toggle(o,"hidden");return}o.dataset.load=d;const u=p.userjsCache.get(+i.userjs),_=await u._mujs.code.request();if(typeof _.data_code_block!="string"){o.value="An error occured";return}o.value=d==="load-userjs"?_.data_code_block:_.data_meta_block,h.cl.remove(o,"hidden");for(const m of re('mujs-column[data-el="matches"]',c.parentElement.parentElement))x(u,m.dataset.type,W(".mujs-grants",m),m)}else if(d==="load-page"){if(!p.userjsCache.has(+i.userjs))return;let o=W("mujs-page",c.parentElement.parentElement);if(!o){o=l("mujs-page"),c.parentElement.parentElement.append(o);const u=p.userjsCache.get(+i.userjs),_=u._mujs.info.engine;let m;if(_.name.includes("fork")){const{current:D}=J;m=u.url.replace(/\/scripts/,`/${/^(zh|fr|es)/.test(D)?navigator.language:D}/scripts`)}else if(_.name.includes("github")){const D=await te.req(u.page_url,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${_.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).catch(()=>({}));if(!D.download_url)return;const N=await te.req(D.download_url,"GET","text"),B=o.attachShadow({mode:"closed"}),$=l("div",{innerHTML:N});B.append($);return}else m=u.url;if(!m)return;const g=await te.req(m,"GET","document"),T=()=>{const D=new URL(u.url),N=W(".user-content",g.documentElement);for(const B of re("[href]",N))B.target="_blank",B.style="pointer-events: auto;",B.href.startsWith("/")&&(B.href=`${D.origin}${B.href}`);for(const B of re("img[src]",N))B.style="max-width: 25em; max-height: 25em; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;";return N?N.innerHTML:"No additional info available"},w=o.attachShadow({mode:"closed"}),H=l("div",{style:"pointer-events: none;",innerHTML:T()});w.append(H);return}if(!h.cl.has(o,"hidden")){h.cl.add(o,"hidden");return}h.cl.remove(o,"hidden")}else if(/export-/.test(d)){const o=d==="export-config";v.download({url:o?j:j.theme,filename:`Magic_Userscript_${o?"config":"theme"}-${Date.now()}.json`})}else if(/import-/.test(d)){if(W("input",c.parentElement)){W("input",c.parentElement).click();return}const o=l("input","hidden",{type:"file",accept:".json"});Q(o,"change",function(){if(K(this.files))return;const[u]=this.files;if(u===void 0||u.name==="")return;const _=new FileReader;_.onload=function(){try{const m=JSON.parse(typeof this.result=="string"?this.result:null);if(!Z(m))throw new Error(`Invalid file contents in "${u.name}"`,{cause:"FileReader"});const g=Oe(V);Object.keys(m).find(T=>Object.keys(g.theme).includes(T))?(j.theme={...g.theme,...m},p.setTheme().save()):(j={...g,...m},p.cache=!0,p.reloadConfig().save().then(T=>{T.autofetch&&ie.build(),p.cache=null}))}catch(m){f(m)}finally{o.remove()}},_.readAsText(u)},!1),c.parentElement.append(o),o.click()}else d==="sort_by"&&c.dataset.sort&&(c.dataset.asc=le.sortBy(c.dataset.sort,c.dataset.asc==="true"))}catch(b){f(b)}});const z=["com","net","org","de","co.uk"],O=["http://*","https://*","http://*/*","https://*/*","http*://*","http*://*/*","*","*://*","*://*/*","http*"],P=class{constructor(n,b){this.isUserCSS=b===!0,this.META_START_COMMENT=this.isUserCSS?"/* ==UserStyle==":"// ==UserScript==",this.META_END_COMMENT=this.isUserCSS?"==/UserStyle== */":"// ==/UserScript==",typeof n=="string"&&(this.code=n,this.get_meta_block(),this.get_code_block(),this.parse_meta(),this.calculate_applies_to_names())}get_meta_block(){if(I(this.code))return"";if(this.data_meta_block)return this.data_meta_block;const n=this.code.indexOf(this.META_START_COMMENT);if(K(n))return"";const b=this.code.indexOf(this.META_END_COMMENT,n);if(K(b))return"";const c=this.code.substring(n+this.META_START_COMMENT.length,b);return this.data_meta_block=c,this.data_meta_block}get_code_block(){if(I(this.code))return"";if(this.data_code_block)return this.data_code_block;const n=this.code.indexOf(this.META_START_COMMENT);if(K(n))return null;const b=this.code.indexOf(this.META_END_COMMENT,n);if(K(b))return null;const c=this.code.substring(b+this.META_END_COMMENT.length,this.code.length);return this.data_code_block=c.split(`
`).filter(Boolean).join(`
`),this.data_code_block}parse_meta(){if(I(this.code))return{};if(this.data_meta)return this.data_meta;const n={},b=new Map,c=this.isUserCSS&&/@([a-zA-Z:-]+)\s+(.*)/||/\/\/\s+@([a-zA-Z:-]+)\s+(.*)/;for(const i of this.get_meta_block().split(`
`).filter(Boolean)){let[,d,o]=c.exec(i)??[];if(!d)continue;d=d.trim(),o=o.trim(),b.has(d)||b.set(d,[]);const u=b.get(d);u.push(o),b.set(d,u)}for(const[i,d]of b)d.length>1?n[i]=d:n[i]=d[0];return this.data_meta=n,this.data_meta}calculate_applies_to_names(){if(I(this.code))return[];if(this.data_names)return this.data_names;let n=[];for(const[b,c]of Object.entries(this.parse_meta()))/include|match/i.test(b)&&(Array.isArray(c)?n=n.concat(c):n=n.concat([c]));return I(n)?[]:this.intersect(n,O)?(this.data_names=[{domain:!1,text:"All sites",tld_extra:!1}],this.data_names):(this.data_names=P.getNames(n),this.data_names)}intersect(n,...b){const c=new Set(n);return!ne([...c].filter(i=>b.every(d=>d.includes(i))))}static getNames(n=[]){const b=new Map,c=i=>{b.has(i.text)||b.set(i.text,i)};for(let i of n){const d=i;let o=[];if(i.match(/^\/(.*)\/$/))o=[i];else{let u=/^\*(https?:.*)/i.exec(i);u&&(i=u[1]),i=i.replace(/^\*:/i,"http:").replace(/^\*\/\//i,"http://").replace(/^http\*:/i,"http:").replace(/^(https?):([^/])/i,"$1://$2"),u=/^([a-z]+:\/\/)\*\.?([a-z0-9-]+(?:.[a-z0-9-]+)+.*)/i.exec(i),u&&(i=u[1]+u[2]),u=/^\*\.?([a-z0-9-]+\.[a-z0-9-]+.*)/i.exec(i),u&&(i=`http://${u[1]}`),u=/^http\*(?:\/\/)?\.?((?:[a-z0-9-]+)(?:\.[a-z0-9-]+)+.*)/i.exec(i),u&&(i=`http://${u[1]}`),u=/^([a-z]+:\/\/([a-z0-9-]+(?:\.[a-z0-9-]+)*\.))\*(.*)/.exec(i),u?u[2].match(/A([0-9]+\.){2,}z/)?(i=`${u[1]}tld${u[3]}`,o=[i.split("*")[0]]):o=[i]:o=[i]}for(const u of o)try{const _=new URL(u),{host:m}=_;if(K(m))c({text:d,domain:!1,tld_extra:!1});else if(!m.includes(".")&&m.includes("*"))c({text:d,domain:!1,tld_extra:!1});else if(m.endsWith(".tld"))for(let g=0;g<z.length;g++){const T=z[g];c({text:m.replace(/tld$/i,T),domain:!0,tld_extra:g!=0})}else m.endsWith(".")?c({text:m.slice(0,-1),domain:!0,tld_extra:!1}):c({text:m,domain:!0,tld_extra:!1})}catch{c({text:d,domain:!1,tld_extra:!1})}}return[...b.values()]}async request(n=!1,b,c){if(this.data_code_block)return this;const i=await te.req(b,"GET","text").catch(A.err);if(typeof i!="string")return this;this.isUserCSS=ve(b),this.META_START_COMMENT=this.isUserCSS?"/* ==UserStyle==":"// ==UserScript==",this.META_END_COMMENT=this.isUserCSS?"==/UserStyle== */":"// ==/UserScript==",this.code=i,this.get_meta_block(),this.get_code_block(),this.parse_meta(),this.calculate_applies_to_names();const{data_meta:d}=this;if(n&&(d[`name:${J.current}`]&&(Object.assign(c,{name:d[`name:${J.current}`]}),this.translated=!0),d[`description:${J.current}`]&&(Object.assign(c,{description:d[`description:${J.current}`]}),this.translated=!0)),Array.isArray(d.grant)&&(d.grant=[...new Set(d.grant.flat())]),d.resource){const o={};if(typeof d.resource=="string"){const[,u,_]=/(.+)\s+(.+)/.exec(d.resource)??[];u&&(o[u.trim()]=_)}else for(const u of d.resource){const[,_,m]=/(.+)\s+(http.+)/.exec(u)??[];_&&(o[_.trim()]=m)}d.resource=o}return Object.assign(this,{code_size:[te.format(i.length)],meta:d}),this}},oe={id:0,bad_ratings:0,good_ratings:0,ok_ratings:0,daily_installs:0,total_installs:0,name:"NOT FOUND",description:"NOT FOUND",version:"0.0.0",url:he,code_url:he,created_at:Date.now(),code_updated_at:Date.now(),locale:"NOT FOUND",deleted:!1,users:[]},ue=(n="",b={})=>{if(!b.root||!b.type)return;const{root:c,type:i}=b,d=l("mu-js","mujs-list",{textContent:`${n}: `}),o=l("mu-js","mujs-grants"),u=l("mujs-column","mujs-list",{dataset:{el:"matches",type:i}});u.append(d,o),c.append(u);const _=b.list??[];if(I(_)){const m=l("mujs-a",{textContent:y("listing_none")});o.append(m),h.cl.add(u,"hidden");return}for(const m of _)if(typeof m=="string"&&m.startsWith("http")){const g=l("mujs-a",{textContent:m,dataset:{command:"open-tab",webpage:m}});o.append(g)}else if(Z(m))if(i==="resource")for(const[g,T]of Object.entries(m)){const w=l("mujs-a",{textContent:g??"ERROR"});T.startsWith("http")&&(w.dataset.command="open-tab",w.dataset.webpage=T),o.append(w)}else{const g=l("mujs-a",{textContent:m.text});m.domain&&(g.dataset.command="open-tab",g.dataset.webpage=`https://${m.text}`),o.append(g)}else{const g=l("mujs-a",{textContent:m});o.append(g)}},$e=(n,b)=>{if([n.deleted===!0,n.id===421603,j.recommend.blacklist.includes(n.id),j.recommend.blacklist.includes(n.url)].some(de=>de===!0))return;p.userjsCache.has(n.id)||p.userjsCache.set(n.id,n);const i=l("td","install-btn"),d=l("td","mujs-uframe"),o=l("td","mujs-list",{textContent:n.daily_installs,dataset:{name:"daily_installs"}}),u=l("td","mujs-list",{textContent:J.toDate(n.code_updated_at),dataset:{name:"code_updated_at",value:new Date(n.code_updated_at).toISOString()}}),_=l("td","mujs-name"),m=l("mujs-column","mujs-list hidden",{dataset:{el:"more-info"}}),g=l("mujs-column","mujs-list hidden"),T=l("mujs-row","mujs-list"),w=l("mujs-row","mujs-list"),H=l("mujs-column","mujs-list"),D=l("mujs-a","mujs-homepage",{textContent:n.name,title:n.url,dataset:{command:"open-tab",webpage:n.url}}),N=l("mu-js","mujs-list",{textContent:`${y("version_number")}: ${n.version}`}),B=l("mu-js","mujs-list",{textContent:`${y("created_date")}: ${J.toDate(n.created_at)}`,dataset:{name:"created_at",value:new Date(n.created_at).toISOString()}}),$=l("mu-js","mujs-list",{title:n.license??y("no_license"),textContent:`${y("license")}: ${n.license??y("no_license")}`,dataset:{name:"license"}}),ae=l("mu-js","mujs-list",{textContent:`${y("total_installs")}: ${J.toNumber(n.total_installs)}`,dataset:{name:"total_installs"}}),ce=l("mu-js","mujs-list",{title:y("ratings"),textContent:`${y("ratings")}:`}),U=l("mu-js","mujs-list mujs-ratings",{title:y("good"),textContent:n.good_ratings,dataset:{name:"good_ratings",el:"good"}}),k=l("mu-js","mujs-list mujs-ratings",{title:y("ok"),textContent:n.ok_ratings,dataset:{name:"ok_ratings",el:"ok"}}),E=l("mu-js","mujs-list mujs-ratings",{title:y("bad"),textContent:n.bad_ratings,dataset:{name:"bad_ratings",el:"bad"}}),C=l("mu-js","mujs-list mujs-pointer",{title:n.description,textContent:n.description,dataset:{command:"list-description"}}),L=l("mu-jsbtn","install",{title:`${y("install")} "${n.name}"`,textContent:y("install")+" ",dataset:{command:"install-script",userjs:n.id}});G.load("install",L);const S=l("mu-jsbtn",{textContent:y("saveFile")+" ",dataset:{command:"download-userjs",userjs:n.id,userjsName:n.name}});G.load("download",S);const R=l("tr","frame",{dataset:{engine:b,scriptId:n.id}}),X=l("textarea","code-area hidden",{dataset:{name:"code"},rows:"10",autocomplete:!1,spellcheck:!1,wrap:"soft"}),ye=l("mu-jsbtn",{textContent:y("code")+" ",dataset:{command:"load-userjs",userjs:n.id}});G.load("code",ye);const We=l("mu-jsbtn",{textContent:y("metadata")+" ",dataset:{command:"load-header",userjs:n.id}});G.load("code",We),!b.includes("fork")&&j.recommend.others&&j.recommend.list.includes(n.url)&&(R.dataset.good="upsell");for(const de of n.users){const Je=l("mujs-a",{textContent:de.name+" ",title:de.url,dataset:{command:"open-tab",webpage:de.url}});j.recommend.author&&(de.id===j.recommend.authorID||de.url===j.recommend.authorUrl)&&(R.dataset.author="upsell",G.load("verified",Je)),d.append(Je)}j.recommend.others&&j.recommend.list.includes(n.id)&&(R.dataset.good="upsell"),i.append(L),H.append(ce,U,k,E),T.append(ae,H,N,B),ue(y("code_size"),{list:n._mujs.code.code_size,type:"code_size",root:T}),w.append($);const Ee=n._mujs.code?.data_meta??{};ue(y("antifeatures"),{list:Ee.antifeatures??[],type:"antifeatures",root:w}),ue(y("applies_to"),{list:n._mujs.code?.data_names??[],type:"data_names",root:w}),ue("@grant",{list:Ee.grant??[],type:"grant",root:w}),ue("@require",{list:Ee.require,type:"require",root:w}),ue("@resource",{list:K(Ee.resource)?[]:[Ee.resource],type:"resource",root:w}),m.append(T,w),g.append(S,ye,We),_.append(D,C,m,g,X),_._mujs={fmore:m,fBtns:g,codeArea:X};const Ke=l("mu-jsbtn",{textContent:"Page ",dataset:{command:"load-page",userjs:n.id}});G.load("pager",Ke),g.append(Ke),n._mujs.code?.translated&&R.classList.add("translated");for(const de of[_,d,o,u,i])R.append(de);n._mujs.root=R},Ve=()=>{const n=new Map,b={pool:n,enabled(){return[...n.values()].filter(c=>c.enabled)},refresh(){Object.is(n.size,0)||n.clear();for(const[c,i]of Object.entries(j.filters))n.has(c)||n.set(c,{...i,reg:new RegExp(i.regExp,i.flag),keyReg:new RegExp(c.trim().toLocaleLowerCase(),"gi"),valueReg:new RegExp(i.name.trim().toLocaleLowerCase(),"gi")});return this},get(c){return[...n.values()].find(i=>i.keyReg.test(c)||i.valueReg.test(c))},match({name:c,users:i}){const d=b.enabled();if(Object.is(d.length,0))return!0;for(const o of d)if([{name:c},...i].find(u=>u.name.match(o.reg)))return!1;return!0}};for(const[c,i]of Object.entries(j.filters))n.has(c)||n.set(c,{...i,reg:new RegExp(i.regExp,i.flag),keyReg:new RegExp(c.trim().toLocaleLowerCase(),"gi"),valueReg:new RegExp(i.name.trim().toLocaleLowerCase(),"gi")});return b.refresh()},dt=class{#e;#t;constructor(n=void 0){this.build=this.build.bind(this),this.groupBy=this.groupBy.bind(this),this.dispatch=this.dispatch.bind(this),this.sortRecords=this.sortRecords.bind(this),this.#e=j.engines??[],this.setHost(n)}setEngines(n=[]){const{host:b}=this;return this.#e=n.filter(c=>c.enabled&&Array.isArray(c.unsupported)&&c.unsupported.includes(b)?(p.timeoutFrame(),f(`[${c.name}]: Unsupported on "${b}"`),!1):c.enabled),this.#e}setHost(n){return n??=p.host,this.#t=n,this.blacklisted=p.checkBlacklist(n),this.#e=this.setEngines(this.engines),this.domain=this.getDomain(this.#t),this.blacklisted&&(f(`Blacklisted "${n}"`),p.timeoutFrame()),n}dispatch(n){return s.dispatchEvent(new CustomEvent("updateditem",{detail:n})),this}get engines(){return this.#e}get host(){return this.#t}getDomain(n=""){return n==="*"?"all-sites":n.split(".").at(-2)??he}build(){try{p.refresh();const{blacklisted:n,engines:b,host:c,domain:i,dispatch:d}=this;if(n||I(b))return p.opacityMin="0",t.style.opacity=p.opacityMin,this;const o=[],u=Ve(),_=Array.from(this);A.info("Building list",{hostCache:_,engines:b,container:p,list:this});const m=this.groupBy(),g=b.filter(w=>!m[w.name]),T=g.filter(w=>_.find(({_mujs:H})=>w.name===H.info.engine.name));if(!ne(g)&&ne(T))for(const w of b){A.info(`Fetching from "${w.name}" for "${c}"`);const H=je(w.query).replace(/\{host\}/g,c).replace(/\{domain\}/g,i),D=U=>{U.cause||(U.cause=w.name);let k=U;U.message.startsWith("status: 429")?k=`reason: "Too many requests..." ${U}`:U.message.startsWith("status: 403")&&(k=`reason: "Forbidden" ${U}`),f(`[${w.name}]:`,k)},N=U=>{const k={...oe,...U,code_urls:[],_mujs:{root:{},info:{engine:w,host:c},code:{meta:{}}}};return k._mujs.code.request=async(E=!1,C)=>{if(typeof k._mujs.code.data_code_block=="string")return k._mujs.code;const L=await new P().request(E,C??k.code_url,k);if(C)return L;for(const[S,R]of Object.entries(L))k._mujs.code[S]=R;return k._mujs.code},k},B=async U=>{if(!U){f("Invalid data received from the server, check internet connection");return}const E=(Array.isArray(U)?U:Array.isArray(U.query)?U.query:[]).filter(Boolean).filter(L=>!L.deleted).filter(u.match);if(ne(E))return;const C=fe.groupBy(E.map(N),({locale:L})=>{const[S=L]=L.split("-");return S});for(const[L,S]of Object.entries(C))if(S)for(const R of S)j.filterlang&&L!==J.current&&!(await R._mujs.code.request(!0)).translated||(!R._mujs.code.data_code_block&&(j.preview.code||j.preview.metadata)&&R._mujs.code.request().then(()=>{d(R)}),ve(R.code_url)&&R.code_urls.push({name:`${R.name} (.user.css)`,code_url:R.code_url},{name:`${R.name} (.user.js)`,code_url:R.code_url.replace(/\.user\.css$/,".user.js")}),$e(R,w.name))},$=async U=>{try{if(!U){f("Invalid data received from the server, TODO fix this");return}const k=U.documentElement;if(/openuserjs/gi.test(w.name)){const E=re(".col-sm-8 .tr-link",k)??[];for(const C of E){for(;K(W(".script-version",C));)await new Promise(R=>requestAnimationFrame(R));const L=h.prop(W(".tr-link-a",C),"href").replace(new RegExp(document.location.origin,"gi"),"https://openuserjs.org"),S=N({name:h.text(W(".tr-link-a",C)),description:h.text(W("p",C)),version:h.text(W(".script-version",C)),url:L,code_url:`${L.replace(/\/scripts/gi,"/install")}.user.js`,total_installs:h.text(W("td:nth-child(2) p",C)),created_at:h.attr(W("td:nth-child(4) time",C),"datetime"),code_updated_at:h.attr(W("td:nth-child(4) time",C),"datetime"),users:[{name:h.text(W(".inline-block a",C)),url:h.prop(W(".inline-block a",C),"href")}]});u.match(S)||(!S._mujs.code.data_code_block&&(j.preview.code||j.preview.metadata)&&S._mujs.code.request().then(()=>{d(S)}),$e(S,w.name))}}}catch(k){f(k)}},ae=U=>{try{if(ne(U.items))return;for(const k of U.items){const E=N({id:k.id??0,name:k.name,description:I(k.description)?y("no_license"):k.description,url:k.html_url,code_url:k.html_url,page_url:`${k.url}/contents/README.md`,created_at:k.created_at,code_updated_at:k.updated_at||Date.now(),daily_installs:k.watchers_count??0,good_ratings:k.stargazers_count??0,users:[{name:k.owner.login,url:k.owner.html_url}]});k.license?.name&&(E.license=k.license.name);const C=k.contents_url.replace(/\{\+path\}/,""),L=async S=>{const R=await te.req(S,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${w.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).catch(D);for(const X of R)X.type==="file"?et(X.name)?E.code_urls.push({name:X.name,code_url:X.download_url}):ve(X.name)&&E.code_urls.push({name:X.name,code_url:X.download_url}):X.type==="dir"&&await L(`${C}/${X.path}`)};L(C).then(()=>{if(I(E.code_urls))E.deleted=!0;else if(!E._mujs.code.data_code_block&&(j.preview.code||j.preview.metadata)){E._mujs.code.request().then(()=>{d(E)});return}d(E)}),$e(E,w.name)}}catch(k){f(k)}};let ce;if(/github/gi.test(w.name)){if(I(w.token)){f(`[${w.name}]: Token required for use`);continue}te.req(`https://api.github.com/search/repositories?q=topic:${i}+topic:userstyle`,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${w.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(ae).catch(D),ce=te.req(H,"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${w.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(ae).then(()=>{te.req("https://api.github.com/rate_limit","GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${w.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(U=>{for(const[k,E]of Object.entries(U.resources.code_search)){const C=l("mujs-row","rate-info",{textContent:`${k.toUpperCase()}: ${E}`});p.rateContainer.append(C)}}).catch(D)})}else/openuserjs/gi.test(w.name)?ce=te.req(H,"GET","document").then($):ce=te.req(H).then(B);ce&&o.push(ce.catch(D))}p.urlBar.placeholder=y("search_placeholder"),p.urlBar.value="",ne(o)?Promise.resolve().then(this.sortRecords):Promise.allSettled(o).then(this.sortRecords).catch(f)}catch(n){f(n)}return this}sortBy(n=j.autoSort,b=!1){const i=Array.from(this).flat().sort((o,u)=>/code_updated_at|created_at/.test(n)?o[n]>u[n]:/name|users|description/.test(n)?Array.isArray(o[n])?o[n][0].name.localeCompare(u[n][0].name):o[n].localeCompare(u[n]):u[n]-o[n]),d=b?i.reverse():i;for(const o of d)be(o._mujs.root)&&p.tabbody.append(o._mujs.root);return`${!b}`}sortRecords(){this.sortBy(j.autoSort);for(const[n,b]of Object.entries(this.groupBy()))Ce.update(b.length,{name:n});return this}groupBy(){return fe.groupBy(Array.from(this),({_mujs:n})=>n.info.engine.name)}*[Symbol.iterator](){const{host:n,engines:b}=this,c=Array.from(p).filter(({_mujs:i})=>i.info.host===n&&b.find(d=>d.enabled&&d.name===i.info.engine.name));for(const i of c)yield i}},le=new dt,ut=()=>{const n=l("mu-js","mujs-sty-flex"),b=l("mujs-btn","save",{textContent:y("save"),dataset:{command:"save"},disabled:!1}),c=l("mujs-btn","reset",{textContent:y("reset"),dataset:{command:"reset"}});n.append(c,b);const i=(m,g)=>{g=g??y("no_license"),m=m??y("no_license");const T=l("mujs-section",{dataset:{name:g}}),w=l("label",{dataset:{command:g}}),H=l("mu-js",{textContent:m});if(g==="filters"){const D=G.load("info",H);Se(D,{dataset:{command:"more-info",webpage:"https://greasyfork.org/scripts/12179"}})}return Q(T,"click",D=>{const N=D.target.closest("[data-command]");if(!N)return;if(N.dataset.command===g){const $=re(`[data-${g}]`,T);h.cl.has($,"hidden")?h.cl.remove($,"hidden"):h.cl.add($,"hidden")}}),w.append(H),T.append(w),p.cfgpage.append(T),p.cfgpage._mujs.sections.has(T)||p.cfgpage._mujs.sections.add(T),T},d={general:i("General","general"),load:i("Automation","load"),list:i("List","list"),filters:i("List Filters ","filters"),blacklist:i("Blacklist (READONLY)","blacklist"),engine:i("Search Engines","engine"),theme:i("Theme Colors","theme"),exp:i("Import / Export","exp")},o=(m,g,T="checkbox",w="general",H={})=>{const[D,N,B]=/^(\w+)-(.+)/.exec(g)??[],$=l("label","sub-section hidden",{dataset:{[w]:m}}),ae=l("mu-js",{innerHTML:m});$.append(ae);const ce=()=>{if(w==="engine"){const C=V.engines.find(L=>L.name===g);if(C)return C}return N?V[N][B]:V[g]},U=()=>{if(w==="engine"){const C=j.engines.find(L=>L.name===g);if(C)return C}return N?j[N][B]:j[g]},k={text:m,tag:w,value:g,type:T,attrs:H,default:ce(),cache:U()};if(T==="select"){const C=l("select",{dataset:{[w]:m},...H});for(const L of Object.keys(oe)){if(L==="deleted"||L==="users")continue;const S=l("option",{value:L,textContent:L});C.append(S)}return C.value=j[g],$.append(C),d[w]&&d[w].append($),k.elem=C,p.cfgpage._mujs.base.push(k),Q(C,"change",function(){p.cache=!0,j[g]=this.value},!1),$}const E=l("input",{type:T,dataset:{[w]:m},...H});if(w==="engine"&&(E.dataset.name=g),d[w]&&d[w].append($),T==="checkbox"){const C=l("mu-js","mujs-inlab"),L=l("label",{onclick(){E.dispatchEvent(new MouseEvent("click"))}});if(C.append(E,L),$.append(C),N?N==="filters"?E.checked=j[N][B].enabled:E.checked=j[N][B]:E.checked=j[g],Q(E,"change",function(){p.setCache(!0,/filterlang/i.test(g)),N?N==="filters"?j[N][B].enabled=this.checked:j[N][B]=this.checked:j[g]=this.checked},!1),w==="engine"){const S=j.engines.find(R=>R.name===g);if(S){if(E.checked=S.enabled,E.dataset.engine=S.name,Q(E,"change",function(){p.cache=!0,S.enabled=this.checked,le.setEngines(j.engines)},!1),S.query){const R=V.engines.find(ye=>ye.name===S.name),X=l("input",{type:"text",defaultValue:"",value:je(S.query),placeholder:je(R.query),dataset:{name:D,engine:S.name}});Q(X,"change",function(){p.cache=!0;try{S.query=encodeURIComponent(new URL(this.value).toString()),le.setEngines(j.engines)}catch(ye){A.err(ye)}},!1),k.elemUrl=X,$.append(X)}if(S.name==="github"){const R=l("input",{type:"text",defaultValue:"",value:S.token??"",placeholder:"Paste Access Token",dataset:{engine:"github-token"}});Q(R,"change",function(){p.cache=!0,S.token=this.value,le.setEngines(j.engines)},!1),k.elemToken=R,$.append(R)}}}}else T==="text"&&(E.defaultValue="",E.value=g??"",E.placeholder=g??"",w==="theme"&&(E.dataset[w]=m,Q(E,"change",function(){let C=!0;try{const L=p.root.style,S=`--mujs-${m}`,R=L.getPropertyValue(S);if(I(this.value)){j.theme[m]=V.theme[m],L.removeProperty(S);return}if(R===this.value)return;L.removeProperty(S),L.setProperty(S,this.value),j.theme[m]=this.value}catch(L){A.err(L),C=!1}finally{C?(h.cl.remove(this,"mujs-invalid"),h.prop(b,"disabled",!1)):(h.cl.add(this,"mujs-invalid"),h.prop(b,"disabled",!0))}},!1))),$.append(E);return k.elem=E,p.cfgpage._mujs.base.push(k),$};M.isGM&&(o(y("userjs_sync"),"cache"),o(y("userjs_autoinject"),"autoinject","checkbox","load")),o(`${y("redirect")} ${G.load("info",{dataset:{command:"more-info",webpage:"https://greasyfork.org/scripts/23840"}})}`,"sleazyredirect"),o(`${y("dtime")} (ms)`,"time","number","general",{defaultValue:1e4,value:j.time,min:0,step:500,onbeforeinput(m){m.target.validity.badInput?(h.cl.add(m.target,"mujs-invalid"),h.prop(b,"disabled",!0)):(h.cl.remove(m.target,"mujs-invalid"),h.prop(b,"disabled",!1))},oninput(m){p.setCache(!0);const g=m.target;g.validity.badInput||g.validity.rangeUnderflow&&g.value!=="-1"?(h.cl.add(g,"mujs-invalid"),h.prop(b,"disabled",!0)):(h.cl.remove(g,"mujs-invalid"),h.prop(b,"disabled",!1),j.time=I(g.value)?j.time:parseFloat(g.value))}}),o(y("auto_fetch"),"autofetch","checkbox","load"),o(y("userjs_fullscreen"),"autoexpand","checkbox","load",{onchange(m){m.target.checked?(h.cl.add([e,s],"expanded"),h.rmChildren(e),G.load("collapse",e)):(h.cl.remove([e,s],"expanded"),h.rmChildren(e),G.load("expand",e))}}),o("Clear on Tab close","clearTabCache","checkbox","load"),o(y("default_sort"),"autoSort","select","list"),o(y("filter"),"filterlang","checkbox","list"),o(y("preview_code"),"preview-code","checkbox","list"),o(y("preview_metadata"),"preview-metadata","checkbox","list"),o(y("recommend_author"),"recommend-author","checkbox","list"),o(y("recommend_other"),"recommend-others","checkbox","list");for(const[m,g]of Object.entries(j.filters))o(g.name,`filters-${m}`,"checkbox","filters");const u={greasyfork:"Greasy Fork",sleazyfork:"Sleazy Fork",openuserjs:"Open UserJS",github:`GitHub API ${G.load("info",{dataset:{command:"more-info",webpage:"https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"}})}`};for(const[m,g]of Object.entries(u))o(g,m,"checkbox","engine");for(const[m,g]of Object.entries(j.theme))o(m,g,"text","theme");const _=(m,g="",T=!1,w="String")=>{let H=m;if(typeof m=="string"&&m.startsWith("userjs-")){T=!0;const $=m.substring(7);H=`Built-in "${$}"`,g=Pe[$]}else if(Z(m)&&!m.enabled)return;w=pe(g),g=(De(g)?g.toString():JSON.stringify(g))??"";const D=l("label","hidden",{textContent:H,dataset:{blacklist:m}}),N=l("input",{type:"text",defaultValue:"",value:g,placeholder:g,dataset:{blacklist:m}});Q(N,"change",function(){let $=!0;try{if(I(this.value))return;$=!0}catch(ae){A.err(ae),$=!1}finally{$?(h.cl.remove(this,"mujs-invalid"),h.prop(b,"disabled",!1)):(h.cl.add(this,"mujs-invalid"),h.prop(b,"disabled",!0))}},!1);const B=l("select",{dataset:{blacklist:m},disabled:T});if(T){N.readOnly=!0;const $=l("option",{value:w,textContent:w});B.append($)}else for(const $ of["String","RegExp","Object"]){const ae=l("option",{value:$,textContent:$});B.append(ae)}B.value=w,D.append(N,B),d.blacklist.append(D)};for(const m of j.blacklist)_(m);for(const m of["import","export"])for(const g of["config","theme"]){const T=l("mujs-btn",`mujs-${m} sub-section hidden`,{textContent:y(`${m}_${g}`),dataset:{command:`${m}-${g}`,exp:`${m}-${g}`}});d.exp.append(T)}p.cfgpage.append(n)};p.Tabs.custom=n=>{le.setHost(n),ie.build()},Q(p.urlBar,"input",function(){if(this.placeholder===y("newTab"))return;if(I(this.value)){h.cl.remove([...p.toElem(),...p.cfgpage._mujs.sections],"hidden");return}const n=new Set;if(!h.cl.has(p.cfgpage,"hidden")){const o=new RegExp(this.value,"gi");for(const u of p.cfgpage._mujs.sections)be(u)&&(n.has(u)||u.textContent.match(o)&&n.add(u));h.cl.add(p.cfgpage._mujs.sections,"hidden"),h.cl.remove([...n],"hidden");return}const b=Array.from(p).filter(({_mujs:o})=>!n.has(o.root)),c=(o,u)=>{const _=new RegExp(this.value.replace(o,""),"gi");b.filter(m=>`${m[u]}`.match(_)&&n.add(m._mujs.root))},[,i,d]=/^(id|license|name|description):(.+)/.exec(this.value)??[];if(i){const o=new RegExp(d,"gi");b.filter(u=>`${u[i]}`.match(o)&&n.add(u._mujs.root))}if(this.value.match(/^(code_url|url):/))c(/^(code_url|url):/,"code_url");else if(this.value.match(/^(author|users?):/)){const[,o]=/^[\w_]+:(.+)/.exec(this.value)??[];if(o){const u=new RegExp(o,"gi");for(const _ of b.filter(m=>!I(m.users)))for(const m of _.users)for(const g of Object.values(m))(typeof g=="string"&&g.match(u)||typeof g=="number"&&`${g}`.match(u))&&n.add(_._mujs.root)}}else if(this.value.match(/^(locale|i18n):/))c(/^(locale|i18n):/,"locale");else if(this.value.match(/^(search_engine|engine):/)){const[,o]=/^[\w_]+:(\w+)/.exec(this.value)??[];if(o){const u=new RegExp(o,"gi");for(const{_mujs:_}of b)_.info.engine.name.match(u)&&n.add(_.root)}}else if(this.value.match(/^filter:/)){const[,o]=/^\w+:(.+)/.exec(this.value)??[];if(o){const _=Ve().get(o.trim().toLocaleLowerCase());if(_){const{reg:m}=_;for(const{name:g,users:T,_mujs:w}of b)[{name:g},...T].find(H=>H.name.match(m))||n.add(w.root)}}}else if(this.value.match(/^recommend:/))for(const{url:o,id:u,users:_,_mujs:m}of b)(_.find(g=>g.id===j.recommend.authorID)||j.recommend.list.includes(o)||j.recommend.list.includes(u))&&n.add(m.root);else{const o=new RegExp(this.value,"gi");for(const u of b)if(u.name&&u.name.match(o)&&n.add(u._mujs.root),u.description&&u.description.match(o)&&n.add(u._mujs.root),u._mujs.code.data_meta)for(const _ of Object.keys(u._mujs.code.data_meta))/name|desc/i.test(_)&&_.match(o)&&n.add(u._mujs.root)}h.cl.add(p.toElem(),"hidden"),h.cl.remove([...n],"hidden")},!1),Q(p.urlBar,"change",function(){const n=r._active;if(this.placeholder===y("newTab")&&n){const b=n.firstElementChild,c=Ge(Ue(this.value));if(r.protoReg.test(this.value)){const i=r.getTab(this.value);r.close(n),i?r.active(i):r.create(this.value),this.placeholder=y("search_placeholder"),this.value=""}else c==="*"?(n.dataset.host=c,b.title=b.textContent="<All Sites>",le.setHost(c),ie.build()):p.checkBlacklist(c)?f(`Blacklisted: "${c}"`):(n.dataset.host=b.title=b.textContent=c,le.setHost(c),ie.build())}},!1),a.postTask(ut,{priority:"background"}),ie.build=async()=>{await a.postTask(le.build,{priority:"background"}),p.timeoutFrame()},j.autofetch?ie.build():p.timeoutFrame()}catch(a){A.err(a),p.remove()}return ie}const lt=a=>{typeof a=="function"&&(document.readyState==="interactive"||document.readyState==="complete"?a(document):document.addEventListener("DOMContentLoaded",e=>a(e.target),{once:!0}))};async function ct(){const a=t=>t;if(typeof window.trustedTypes<"u"){const t=["outlook"].join("|");new RegExp(t,"gi").test(xe.hostname)&&await new Promise(r=>setTimeout(r,1e3)),window.trustedTypes.defaultPolicy==null&&window.trustedTypes.createPolicy("default",{createHTML:a,createScript:a,createScriptURL:a})}const e=Oe(V);j={...e,...await Y.getValue("Config",e)},j.engines=j.engines.map(t=>(Array.isArray(t.unsupported)||(t.unsupported=t.name.includes("fork")?["pornhub.com"]:[]),t)),A.info("Config:",j),lt(t=>{try{if(typeof t>"u")throw new Error('"doc" is null, reload the webpage or use a different one',{cause:"loadDOM"});p.redirect(),j.autoinject?p.inject(Le,t):p.timeoutFrame(),Ne.register(y("userjs_inject"),()=>{p.inject(Le,t)}).register(y("userjs_close"),()=>{p.remove()}),Fe(window.HTMLElement)||A.info('This location overwrites "HTMLElement", using the native "HTMLElement" instead')}catch(s){A.err(s)}})}ct()})();
