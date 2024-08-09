// ==UserScript==
// @name                Selection and Copying Restorer (Universal)
// @name:zh-TW          Selection and Copying Restorer (Universal)
// @name:zh-CN          选择和复制还原器（通用）
// @version             1.21.0.2
// @description         Unlock right-click, remove restrictions on copy, cut, select text, right-click menu, text copying, text selection, image right-click, and enhance functionality: Alt key hyperlink text selection.
// @namespace           https://greasyfork.org/users/371179
// @author              CY Fung
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @match               http://*/*
// @match               https://*/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @exclude             https://github.dev/*
// @exclude             https://vscode.dev/*
// @exclude             https://www.photopea.com/*
// @exclude             https://www.google.com/maps/*
// @exclude             https://docs.google.com/*
// @exclude             https://drive.google.com/*
// @exclude             https://mail.google.com/*
// @exclude             https://www.dropbox.com/*
// @exclude             https://outlook.live.com/mail/*
// @exclude             https://www.terabox.com/*
// @exclude             https://leetcode.cn/*
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/selection-copier.png
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.setValue
// @grant               GM.getValue
// @grant               GM_addValueChangeListener
// @grant               unsafeWindow
// @inject-into         page

// @compatible          firefox Violentmonkey
// @compatible          firefox Tampermonkey
// @compatible          chrome Violentmonkey
// @compatible          chrome Tampermonkey
// @compatible          opera Violentmonkey
// @compatible          opera Tampermonkey
// @compatible          safari Stay
// @compatible          edge Violentmonkey
// @compatible          edge Tampermonkey
// @compatible          brave Violentmonkey
// @compatible          brave Tampermonkey

// @description:zh-TW   破解鎖右鍵，解除禁止復制、剪切、選擇文本、右鍵菜單、文字複製、文字選取、圖片右鍵等限制。增強功能：Alt鍵超連結文字選取。
// @description:zh-CN   破解锁右键，解除禁止复制、剪切、选择文本、右键菜单、文字复制、文字选取、图片右键等限制。增强功能：Alt键超连结文字选取。

// @description:ja    右クリックを解除し、コピー、切り取り、テキスト選択、コンテキストメニュー、テキストのコピー、テキストの選択、画像の右クリックなどの制限を解除します。機能の強化：Altキーでハイパーリンクテキストの選択ができます。
// @description:ko    우클릭 잠금 해제, 복사, 잘라내기, 텍스트 선택, 컨텍스트 메뉴, 텍스트 복사, 텍스트 선택, 이미지 우클릭 등의 제한을 해제합니다. 기능 강화: Alt 키로 하이퍼링크 텍스트 선택.
// @description:ru    Взломать запрет правой кнопкой мыши, снять ограничения на копирование, вырезание, выбор текста, контекстное меню, копирование текста, выбор текста, правая кнопка мыши на изображении и т.д. Усиление функций: выбор текста гиперссылки с помощью клавиши Alt.
// @description:af    Ontsloot regskliek, verwyder beperkings op kopieer, uitknip, teks selekteer, konteks-menu, teks kopieer, teks selekteer, prentjie regskliek, ensovoorts. Versterk funksie: Alt-sleutel vir skakelteks seleksie.
// @description:az    Sağ klikkiləri açın, kopyala, kəs, mətn seçin, kontekst menyusu, mətni kopyalayın, mətni seçin, şəkil sağ klikk, kimi məhdudiyyətlərdən azad olun. Gücləndirilmiş funksiya: Alt düyməsi ilə hiperlink mətn seçimi.
// @description:id    Buka blokir klik kanan, hapus pembatasan penyalinan, pemotongan, memilih teks, menu klik kanan, menyalin teks, memilih teks, klik kanan gambar, dan sebagainya. Peningkatan fitur: Pilih teks tautan dengan tombol Alt.
// @description:ms    Buka kunci klik kanan, hapuskan sekatan salin, potong, pilih teks, menu klik kanan, salin teks, pilih teks, klik kanan imej, dan lain-lain. Tingkatkan ciri: Pilih teks pautan dengan tombol Alt.
// @description:bs    Otključaj desni klik, ukloni ograničenja kopiranja, izrezivanja, odabira teksta, desni klik menija, kopiranja teksta, odabira teksta, desni klik na slici i tako dalje. Poboljšane funkcije: Odabir teksta hiperveze pomoću tipke Alt.
// @description:ca    Desbloqueja el clic dret, elimina les restriccions de còpia, talla, selecció de text, menú contextual, còpia de text, selecció de text, clic dret a la imatge, i així successivament. Millora de funcionalitats: selecció de text d'enllaç amb la tecla Alt.
// @description:cs    Odemkněte pravé tlačítko myši, odstraňte omezení kopírování, výstřižek, výběru textu, kontextového menu, kopírování textu, výběru textu, pravého tlačítka myši na obrázku atd. Vylepšené funkce: Výběr textu hypertextového odkazu pomocí klávesy Alt.
// @description:da    Lås højreklik op, fjern begrænsninger for kopiering, klipning, tekstvalg, højreklikmenu, tekstkopiering, tekstvalg, højreklik på billede osv. Forbedrede funktioner: Vælg teksten af hyperlink ved hjælp af Alt-tasten.
// @description:de    Entsperren Sie den Rechtsklick, entfernen Sie Einschränkungen für Kopieren, Ausschneiden, Textauswahl, Rechtsklickmenü, Textkopieren, Textauswahl, Rechtsklick auf ein Bild usw. Verbesserte Funktionen: Auswahl des Textes eines Hyperlinks mit der Alt-Taste.
// @description:et    Vabastage paremklõps, eemaldage piirangud kopeerimisel, lõikamisel, teksti valimisel, paremklõpsumenüüs, teksti kopeerimisel, teksti valimisel, pildi paremklõpsamisel jne. Täiustatud funktsioonid: valige hüperlingi tekst Alt-klahviga.
// @description:es    Desbloquear clic derecho, eliminar restricciones de copia, corte, selección de texto, menú contextual, copia de texto, selección de texto, clic derecho en imagen, etc. Mejora de funciones: selección de texto de hipervínculo con la tecla Alt.
// @description:eu    Eskubiko klika desblokeatu, kopiatzearen murrizketak kentzen, ebakiak, testua hautatu, klik ezkerreko menua, testuaren kopia, testuaren hautapena, irudiko eskubiko klika, eta abar. Hobetu funtzioak: Hiperestekaren testu hautapena Alt tekla bidez.
// @description:fr    Débloquez le clic droit, supprimez les restrictions de copie, de découpe, de sélection de texte, de menu clic droit, de copie de texte, de sélection de texte, de clic droit sur l'image, etc. Améliorez les fonctionnalités : Sélectionnez le texte du lien hypertexte avec la touche Alt.
// @description:gl    Desbloquear o clic dereito, eliminar as restricións de copia, recorte, selección de texto, menú contextual, copia de texto, selección de texto, clic dereito na imaxe, etc. Mellora das funcións: Seleccione o texto do hipervínculo coa tecla Alt.
// @description:hr    Otključajte desni klik, uklonite ograničenja kopiranja, izrezivanja, odabira teksta, desni klik izbornika, kopiranja teksta, odabira teksta, desni klik na slici itd. Poboljšane funkcije: Odaberite tekst hiperlinka pomoću tipke Alt.
// @description:zu    Sushintsha isikhuthazo sangokucindezela, lungisa imilayezo yokuqhutshwa, ukuketha umfundi, imenyu yokuqhutshwa, ukukopisha umlayezo, ukukhetha umlayezo, uqhube ikhasi lokucindezelwa kwesithombe, noma kanye. Enhla kwezinhlelo: Khetha umbhalo wohlelo lokuqhubekisa ngekhodi ye-Alt.
// @description:is    Opna hægri smell, fjarlægðu takmörk á afriti, klippingu, textavalinu, hægrismelltu valmynd, textaafriti, textavalinu, hægri smelltu á mynd o.fl. Styrktarstig: Veldu texta tengils með Alt-takk
// @description:it    Sblocca il clic destro, rimuovi le restrizioni di copia, taglia, selezione del testo, menu contestuale, copia del testo, selezione del testo, clic destro su un'immagine, ecc. Migliora le funzionalità: seleziona il testo del collegamento ipertestuale con il tasto Alt.
// @description:sw    Fungua Bonyeza-Kulia, Ondoa Vizuizi vya Kunakili, Kukata, Kuteua Maandishi, Menyu ya Bonyeza-Kulia, Kunakili Maandishi, Kuteua Maandishi, Bonyeza-Kulia kwenye Picha, na kadhalika. Boresha Kazi: Teua Nakala ya Kiunganishi cha Maandishi kwa Kutumia Kitufe cha Alt.
// @description:lv    Atbloķēt labo peles pogu, noņemt ierobežojumus attēla kopēšanā, izgriešanā, teksta izvēlē, labā peles kliķa izvēlnē, teksta kopēšanā, teksta izvēlē, un tā tālāk. Uzlabotas funkcijas: Atlaseshiperhipersaites teksts ar Alt taustiņu.
// @description:lt    Atrakinti dešinįjį pelės klavišą, pašalinti apribojimus kopijavimui, iškirpimui, teksto pasirinkimui, dešiniojo pelės klavišo meniu, teksto kopijavimui, teksto pasirinkimui, dešinysis pelės klavišas ant paveikslėlio ir tt. Pakeistos funkcijos: Pasirinkite hiperkryžiaus teksto su Alt klavišu.
// @description:hu    Feloldja a jobb egérgomb tiltását, megszünteti a másolás, kivágás, szövegkijelölés, jobb egérgomb menü, szövegmásolás, szövegválasztás, kép jobb egérgombjának stb. korlátozásait. Fejlesztett funkciók: Hiperhivatkozás szöveg kijelölése az Alt billentyű segítségével.
// @description:nl    Ontgrendel rechtsklikken, verwijder beperkingen op kopiëren, knippen, tekst selecteren, rechtsklikmenu, tekst kopiëren, tekst selecteren, rechtsklikken op afbeelding, enzovoort. Versterk functies: Selecteer tekst van hyperlink met Alt-toets.
// @description:uz    O'ng tugmani oching, nusxalash, kesish, matn tanlash, o'ng tugmasi menyusi, matn nusxalash, matn tanlash, tasvirda o'ng tugmani va hokazo chegaralarni bekor qiling. Qo'shimcha imkoniyatlar: Hyperlink matnini Alt tugmasi bilan tanlang.
// @description:pl    Odblokuj prawy przycisk myszy, usuń ograniczenia kopiowania, wycinania, zaznaczania tekstu, menu kontekstowego, kopiowania tekstu, zaznaczania tekstu, prawego przycisku myszy na obrazie, itp. Wzmocnione funkcje: Wybierz tekst hiperłącza za pomocą klawisza Alt.
// @description:pt    Desbloquear o clique direito, remover restrições de cópia, recorte, seleção de texto, menu de clique direito, cópia de texto, seleção de texto, clique direito em imagem, etc. Melhorar recursos: Selecionar texto do link com a tecla Alt.
// @description:pt-BR Desbloquear o clique direito, remover restrições de cópia, recorte, seleção de texto, menu de clique direito, cópia de texto, seleção de texto, clique direito em imagem, etc. Melhorar recursos: Selecionar texto de hiperlink com a tecla Alt.
// @description:ro    Deblocați clic dreapta, eliminați restricțiile de copiere, tăiere, selectare text, meniu clic dreapta, copiere text, selectare text, clic dreapta pe imagine, etc. Îmbunătățirea funcționalității: Selectați textul unui hyperlink cu tasta Alt.
// @description:sq    Zbulo klikimin e djathtë, hiqni kufizimet për kopjimin, prerjen, zgjedhjen e tekstit, menynë e klikimit të djathtë, kopjimin e tekstit, zgjedhjen e tekstit, klikimin e djathtë në imazh, dhe të tjera. Përmirësim i funksioneve: Zgjidhni tekstin e lidhjes me tastinë Alt.
// @description:sk    Odomknite pravé tlačidlo myši, odstráňte obmedzenia kopírovania, výrezu, výberu textu, kontextového menu, kopírovania textu, výberu textu, pravého tlačidla myši na obrázku atď. Vylepšené funkcie: Výber textu hypertextového odkazu pomocou klávesy Alt.
// @description:sl    Odklenite desni klik, odstranite omejitve kopiranja, izrezovanja, izbire besedila, desni klik menija, kopiranja besedila, izbire besedila, desni klik na sliki itd. Izboljšane funkcije: Izberite besedilo hiperpovezave s tipko Alt.
// @description:sr    Одкључајте десни клик, уклоните ограничења за копирање, исецање, избор текста, десни клик мени, копирање текста, избор текста, десни клик на слици итд. Побољшане функције: Изаберите текст хипервезе притиском на тастер Alt.
// @description:fi    Poista oikean hiiren painikkeen esto, poista rajoitukset kopioinnilta, leikkaamiselta, tekstin valinnalta, oikean hiiren painikkeen valikolta, tekstin kopiointilta, tekstin valinnalta, kuvan oikealta hiiren painikkeelta jne. Paranna toimintoja: Valitse hyperlinkin teksti Alt-näppäimellä.
// @description:sv    Lås upp högerklick, ta bort begränsningar för kopiering, klippning, textval, högerklickmeny, textkopiering, textval, högerklick på bild, etc. Förbättra funktioner: Välj text av hyperlänk med Alt-tangenten.
// @description:vi    Mở khóa chuột phải, loại bỏ hạn chế sao chép, cắt, chọn văn bản, menu chuột phải, sao chép văn bản, chọn văn bản, chuột phải trên hình ảnh, vv. Tăng cường tính năng: Chọn văn bản liên kết với phím Alt.
// @description:tr    Sağ tıklamayı açın, kopyalama, kesme, metin seçme, sağ tık menüsü, metin kopyalama, metin seçme, resimde sağ tıklama vb. kısıtlamaları kaldırın. İyileştirilmiş işlevler: Alt tuşuyla bağlantı metni seçin.
// @description:be    Разблакаваць правы клік, скасаваць абмежаванні па капіраванні, выразі, выбару тэксту, кантэкстнага меню, капіравання тэксту, выбару тэксту, правага кліку на малюнку і г. д. Пашыраныя функцыі: Выберыце тэкст гіперспасылкі з дапамогай клавішы Alt.
// @description:bg    Разкодирайте десен бутон, премахнете ограниченията за копиране, изрязване, избор на текст, контекстно меню, копиране на текст, избор на текст, десен бутон върху изображение и т.н. Подобрени функции: Избор на текст на хипервръзка с бутона Alt.
// @description:ky    Оң жаңыкты ачыңыз, көчүрмө, тандоо тексти, оң кликтык меню, текстти көчүрүү, тексти тандаңыз, сүрөттө оң кликтүү боюнча чеделерди алыңыз ж.б. Коюлу функциялар: Alt түймөсү боюнча желек текстти тандаңыз.
// @description:kk    Оң басқару түймесін ашыңыз, көшіру, мәтінді таңдау, оң баспас меню, мәтінді көшіру, мәтінді таңдау, суретте оң баспас еткізу ж.б. шектіліктерді алыңыз. Дайындауларды жеткізіңіз: Alt түймесімен қосымша түймен текстті таңдаңыз.
// @description:mk    Отклучете го десниот клик, отстрани ограничувања за копирање, исечење, избор на текст, десни клик мени, копирање на текст, избор на текст, десен клик на слика итн. Подобрување на функциите: Изберете текст на хиперлинк со копчето Alt.
// @description:mn    Зүүн дараалжаа сэргээх, хуулах, текст сонгох, зүүн дараалжын цэс, текст хуулах, текст сонгох, зураг дээр зүүн дараахыг сонгох гэх мэт хязгаарыг цуцлах. Үйлдэл нэмэх: Alt товчлуур ашиглан холбоосын текстээ сонгоно уу.
// @description:uk    Розблокуйте правий клік, видаліть обмеження щодо копіювання, вирізання, вибору тексту, контекстного меню, копіювання тексту, вибору тексту, правий клік на зображенні тощо. Покращені функції: Вибір тексту гіперпосилання за допомогою клавіші Alt.
// @description:el    Ξεκλειδώστε το δεξί κλικ, καταργήστε τους περιορισμούς αντιγραφής, αποκοπής, επιλογής κειμένου, μενού δεξιού κλικ, αντιγραφής κειμένου, επιλογής κειμένου, δεξί κλικ σε εικόνα κ.λπ. Βελτιωμένες λειτουργίες: Επιλογή κειμένου υπερσυνδέσμου με το πλήκτρο Alt.
// @description:hy    Բացեք աջ կոճակը, հանեք պահեստավորումները ֆայլի պատճենում, նշումը, տեքստի ընտրությունը, աջ կոճակի մենյուում, տեքստի պատճենումը, տեքստի ընտրությունը, աջ կոճակ պատկերի վրա և այլն: Մասնակցային ֆունկցիաների ընդհանուրավորում. Նշեք հիպերհղման տեքստը Alt ստեղնով:
// @description:ur    دائیں کلک کھولیں، کاپی، کٹ، متن منتخب کریں، دائیں کلک مینو، متن کاپی، متن منتخب کریں، تصویر پر دائیں کلک وغیرہ کی پابندیوں کو ختم کریں۔ تازہ کاری شدہ خصوصیات: Alt کلید کے ساتھ ہائپر لنک متن کا انتخاب کریں۔
// @description:ar    فتح النقرة اليمنى ، إزالة قيود النسخ ، القص ، اختيار النص ، قائمة النقرة اليمنى ، نسخ النص ، اختيار النص ، نقرة يمنى على الصورة ، وما إلى ذلك. تعزيز الوظائف: حدد نص الارتباط باستخدام مفتاح Alt.
// @description:fa    باز کردن کلیک راست ، برداشتن محدودیت های کپی ، برش ، انتخاب متن ، منوی کلیک راست ، کپی متن ، انتخاب متن ، کلیک راست بر روی تصویر و غیره. تقویت ویژگی ها: انتخاب متن پیوند با کلید Alt.
// @description:ne    दायाँ क्लिक खोल्नुहोस्, प्रतिलिपि, काट, पाठ चयन गर्नुहोस्, दायाँ क्लिक मेनु, पाठ प्रतिलिपि, पाठ चयन, तस्वीरमा दायाँ क्लिक, आदिको सीमाहरू हटाउनुहोस्। सुधारिएका सुविधाहरू: एल्ट बटनसहित हायपरलिंक पाठ छान्नुहोस्।
// @description:mr    उजवा क्लिक अनलॉक करा, प्रतिलिपि, कट, मजकूर निवडा, उजवा क्लिक मेनू, मजकूर प्रतिलिपि, मजकूर निवडा, प्रतिमेवर उजवा क्लिक इत्यादी सीमांकन काढा. सुधारित क्षमता: आल्ट की बटणाच्या मदतीने हायपरलिंकमधील मजकूर निवडा.
// @description:hi    दायीं क्लिक अनलॉक करें, प्रतिलिपि, कट, पाठ चयन करें, दायीं क्लिक मेन्यू, पाठ प्रतिलिपि, पाठ चयन, छवि पर दायीं क्लिक इत्यादि प्रतिबंधों को हटाएँ। सुधारित सुविधाएं: एल्ट कुंजी के साथ हाइपरलिंक पाठ चयन करें।
// @description:as    সোণা ক্লিক আনলক কৰক, প্ৰতিলিপি কৰক, কেটা কৰক, পাঠ বাছনি কৰক, সোণা ক্লিক মেনু, পাঠৰ প্ৰতিলিপি কৰক, পাঠ বাছনি কৰক, ছবিৰ সোণা ক্লিক আদিক। উন্নত সুবিধাসমূহ: আল্ট বুটামটো সহ হাইপাৰলিংকৰ পাঠ বাছনি কৰক।
// @description:bn    ডান ক্লিক আনলক করুন, কপি, কাট, পাঠ নির্বাচন করুন, ডান ক্লিক মেনু, পাঠ কপি, পাঠ নির্বাচন, চিত্রে ডান ক্লিক ইত্যাদি সীমাবদ্ধতা অপসারণ করুন। উন্নত বৈশিষ্ট্যগুলি: এল্ট বাটন সহ হাইপারলিংক পাঠ নির্বাচন করুন।
// @description:pa    ਸੱਜਾ ਕਲਿੱਕ ਖੋਲੋ, ਪਾਉਣੀ, ਕੱਟੋ, ਲਿਖਤ ਚੁਣੋ, ਸੱਜਾ ਕਲਿੱਕ ਮੀਨੂ, ਲਿਖਤ ਪਾਉਣੀ, ਲਿਖਤ ਚੁਣੋ, ਚਿੱਤਰ 'ਤੇ ਸੱਜਾ ਕਲਿੱਕ ਵਗੈਰਹ ਪਾਬੰਦੀਆਂ ਹਟਾਓ। ਸੁਧਾਰਿਤ ਫੀਚਰਾਂ: ਐਲਟ ਬਟਨ ਨਾਲ ਹਾਇਪਰਲਿੰਕ ਦੀ ਲਿਖਤ ਚੋਣ ਕਰੋ।
// @description:gu    જમણી ક્લિક ખોલો, કૉપિ, કાપો, ટેક્સ્ટ પસંદ કરો, જમણી ક્લિક મેનૂ, ટેક્સ્ટ કૉપિ, ટેક્સ્ટ પસંદ, ચિત્ર પર જમણી ક્લિક વગેરે પાબંધીઓ કાઢો. સુધારેલી વૈશિષ્ટ્યો: એલ્ટ બટન સાથે હાયપરલિંકના ટેક્સ્ટ પસંદ કરો.
// @description:or    ଡାହାଣହାତରେ ଖୋଲନ୍ତୁ, କପି କରିବା, କଟି କରିବା, ପାଠବାରେ ଚୟନ କରିବା, ଡାହାଣହାତ ମେନୁ, ପାଠବା ଏବଂ ଚିତ୍ର ଡାହାଣହାତ ପାଠ ଚୟନର ମର୍ମ୍ମ କେତେଟେ ପାରିବେ ବିବରଣୀ ମିଳିବା: ଅଲ୍ଟ କୀ ହେଇଲା ହାଇପରଲିଙ୍କ ପାଠ ଚୟନ।
// @description:ta    வலப்பதிவு மூலம் தடைகளை நீக்குங்கள், நகலைப் பட்டைக்கு மாற்றுங்கள், உரையை தேர்வு செய்யுங்கள், வலப்பதிவு மெனு, உரை நகலைப் படக்குகள், உரை தேர்வுகளைப் படக்குகள், பட வலப்பதிவுகள் போன்ற வரைபடங்களின் வரைபடத்தை அதிகரித்துக்கொள்ளுங்கள். அதிகப்படியான செயல்பாடு: அல்ட் விசை அடைவு உரை தேர்வு.
// @description:te    డౌన్‌లోడ్ చేయడానికి రైట్ క్లిక్ ని అనుమతించండి, నకలు, కట్, వచ్చేయి, కుడిచేయండి, టెక్స్ట్ నకలుచేయండి, చిత్రం రైట్ క్లిక్ చేయండి, అదనపు కొంత క్షేత్రాలను మెరుగుపరచండి: అల్ట్ కీ హైపర్‌లింక్ టెక్స్ట్ ఎంపికను పెంచుతుంది.
// @description:kn    ಬಲ ಕ್ಲಿಕ್ ಬಿರುದುಗಳನ್ನು ತೆರೆಯಲು ಅನುಮತಿಸುವುದು, ನಕಲು, ಕಟ್ಟು, ಆಯ್ಕೆ ಮಾಡುವುದು, ಬಲ ಕ್ಲಿಕ್ ಮೆನು, ಪಠ್ಯ ನಕಲು, ಪಠ್ಯ ಆಯ್ಕೆ, ಚಿತ್ರ ಬಲ ಕ್ಲಿಕ್ ಮುಂತಾದ ಮಿತಿಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಪ್ರಭಾವವನ್ನು ಹೆಚ್ಚಿಸುವುದು: Alt ಕೀ ಹೈಪರ್‌ಲಿಂಕ್ ಪಠ್ಯ ಆಯ್ಕೆ.
// @description:ml    വലത് ക്ലിക്ക് അനുവദനീയമാക്കുക, പകരം പകർത്തുക, ടെക്സ്റ്റ് തിരിച്ചുവയ്ക്കുക, റൈറ്റ്-ക്ലിക്ക് മെനു, ടെക്സ്റ്റ് പകർത്തൽ, ടെക്സ്റ്റ് തിരിച്ചൽ, ചിത്രം റൈറ്റ്-ക്ലിക്ക് എന്നിവ നീക്കംചെയ്യുക. പ്രവർത്തനം വരുത്തുക: Alt കീ ഹൈപർലിങ്ക് ടെക്സ്റ്റ് തിരിച്ചൽ.
// @description:si    දකුණු ක්ලික් කරන්න ඉඩ දෙන්න, පිටුව පිරවීම, පෙළ තෝරාගන්නවා, දකුණු ක්ලික් මෙනුව, පෙළ පිරවීම, පෙළ තෝරාගන්න, පින්තුර දකුණු ක්ලික් කරන්න ඇති සීමාවෙන් සහාය ලෙස වැහියාව ඇති ක්ලික් විශේෂිත: Alt යතුර හයිපර්ලින්ක් පෙළ තෝරාගන්න.
// @description:th    ปลดล็อกคลิกขวาเพื่อย้าย, ย้าย, เลือกข้อความ, เมนูคลิกขวา, คัดลอกข้อความ, เลือกข้อความ, คลิกขวาภาพ และเพิ่มฟังก์ชัน: คีย์ Alt เพื่อเลือกข้อความลิงก์
// @description:lo    ປິດການຄວບຄຸມຂອງຄລິບບີກມາ, ລືມ, ປ້ອງກັນຂໍ້ມູນ, ບໍ່ສາມາດປິດຄໍາເວລາການຄວບຄຸມ, ຄຳສັ່ງຂໍ້ມູນ, ຄຳເລືອກຂໍ້ມູນ, ຂອບເຂດປະສານຂອງຮູບພາບ, ການຮຽກຮູບຂອງຂ້ອຍແລ້ວ. ປີ້ນດີໃຫ້: Alt ເຄື່ອນຍຸກສະແດງຂ້ອຍກຳລັງເລືອກຂ້ອຍຂອງລິ້ງສຽງ.
// @description:my    ရိုးရှင်းမည့်နေရာများကို ဖျောက်ပြောင်းရန် ရှိနိုင်ပါသည်။ ကျေးဇူးပြု၍ စာသား ကို ကော်ပီအောင် ရှင်းမည်မဟုတ်ပါ။
// @description:ka    მარჯვნივ დააკლიკეთ უფლებებს, დააკოპირეთ, არჩევანის ტექსტი, მარჯვნივ კლიკის მენიუ, ტექსტის კოპირება, ტექსტის არჩევა, სურათის მარჯვნივ კლიკი და გამოწერა, დაამატეთ ფუნქციები: Alt ღილაკის დაჭერით ტექსტის არჩევა.
// @description:am    የቀኝ ጠቋሚውን ምቀይረህ ለማውረድ ያደረጉትን ማንኛውንም ማግኛት ሊያሳይ ይችላሉ, ቅጥ ወይም የጽሁፍ መጻፊያውን ለመርዝ ያደረጉትን ማንኛውንም ማግኛት ሊያሳይ ይችላሉ. መልክዎ ከፍተኛ ስለሆነ: Alt አውታርክ ጽሁፍ መርዝ መርጃዎን.
// @description:km    ដាក់អនុញ្ញាតឱ្យចុចត្រូវលើរបារអង្គចុចស្ដាប់, បិទ, ជ្រើសរើសអត្ថបទ, ម៉ឺនុយចុចស្ដាប់, ការចម្អិនអត្ថបទ, ការជ្រើសរើសអត្ថបទ, ចុចត្រូវលើរបាររូបភាព និងបន្ថែមមនុស្សពីអត្ថបទ: Alt កិច្ចការតម្រូវការចម្អិនអត្ថបទ។
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Selection20and20Copying20Restorer2028Universal29.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Selection20and20Copying20Restorer2028Universal29.meta.js
// ==/UserScript==
