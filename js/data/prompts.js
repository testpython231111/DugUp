/* Dug Up — prompt data.
   Each line: tier|Display name|Wikipedia title (blank = same as display)|aliases separated by ;
   tier 1 = most common (Topsoil) ... 6 = rarest (Forgotten by History).
   Offline tiers are estimates of how widely read each topic is on Wikipedia. */
const PROMPT_DATA = [
{id:'rome', cat:'Rulers', q:'Name a Roman emperor', hint:'From Augustus to the fall of the West, 476 AD',
list:`
1|Augustus||octavian;octavius;augustus caesar;caesar augustus
1|Nero
1|Caligula
1|Marcus Aurelius||aurelius
2|Constantine the Great||constantine;constantine 1
2|Hadrian
2|Tiberius
2|Claudius
2|Trajan
2|Commodus
3|Vespasian
3|Diocletian
3|Caracalla
3|Septimius Severus||severus;septimius
3|Titus
3|Domitian
3|Elagabalus||heliogabalus
4|Antoninus Pius||antoninus
4|Nerva
4|Galba
4|Otho
4|Vitellius
4|Theodosius I||theodosius;theodosius the great
4|Julian|Julian (emperor)|julian the apostate
4|Aurelian
4|Romulus Augustulus||romulus augustus;romulus
4|Lucius Verus||verus
4|Valerian|Valerian (emperor)
4|Severus Alexander||alexander severus
4|Maximinus Thrax||maximinus;maximinus 1
4|Gallienus
4|Valentinian I||valentinian
4|Gordian III||gordian
4|Philip the Arab||philip;philip 1;philippus arabs
4|Decius||trajan decius
5|Pertinax
5|Didius Julianus||didius;julianus
5|Macrinus
5|Geta|Geta (emperor)
5|Gordian I
5|Claudius Gothicus||claudius 2
5|Probus|Probus (emperor)
5|Carus
5|Maximian
5|Galerius
5|Constantius I||constantius chlorus;chlorus
5|Licinius
5|Maxentius
5|Constantius II||constantius
5|Jovian
5|Valens
5|Gratian
5|Honorius|Honorius (emperor)
5|Arcadius
5|Theodosius II
5|Valentinian III
6|Gordian II
6|Pupienus
6|Balbinus
6|Trebonianus Gallus||gallus
6|Hostilian
6|Volusianus||volusian
6|Herennius Etruscus
6|Aemilian||aemilianus
6|Quintillus
6|Tacitus|Tacitus (emperor)
6|Florianus||florian
6|Carinus
6|Numerian
6|Severus II
6|Maximinus II||maximinus daza;maximinus daia
6|Constantine II|Constantine II (emperor)
6|Constans
6|Vetranio
6|Valentinian II
6|Constantius III
6|Petronius Maximus
6|Avitus
6|Majorian
6|Libius Severus
6|Anthemius
6|Olybrius
6|Glycerius
6|Julius Nepos||nepos
6|Marcian
6|Leo I|Leo I (emperor)|leo
6|Zeno|Zeno (emperor)
6|Basiliscus
`,
nope:{
 'julius caesar|caesar|gaius julius caesar':'Julius Caesar was dictator for life &mdash; never emperor. His heir Augustus was the first.',
 'justinian|justinian 1':'Justinian ruled the Eastern Roman Empire from 527 &mdash; after this dig\'s cut-off.',
 'charlemagne':'Crowned emperor in 800 AD &mdash; a different (Holy Roman) story.',
 'spartacus':'A gladiator who led a slave revolt &mdash; never emperor.',
 'constantine 11|constantine 11 palaiologos':'The last Byzantine emperor (1453) &mdash; far too late for this dig.'
}},

{id:'uspres', cat:'Rulers', q:'Name a US president', hint:'Any of them, from Washington on',
list:`
1|George Washington||washington
1|Abraham Lincoln||lincoln;abe lincoln;honest abe
1|Barack Obama||obama
1|Donald Trump||trump
1|John F. Kennedy||kennedy;jfk;john kennedy
1|Joe Biden||biden
2|Franklin D. Roosevelt||fdr;roosevelt;franklin roosevelt
2|Thomas Jefferson||jefferson
2|Theodore Roosevelt||teddy roosevelt;teddy;theodore roosevelt
2|Ronald Reagan||reagan
2|Richard Nixon||nixon
2|George W. Bush||bush;george bush;dubya;bush jr
2|Bill Clinton||clinton
3|George H. W. Bush||bush sr;bush senior;bush 41;george bush senior;george bush sr
3|Jimmy Carter||carter
3|Andrew Jackson||jackson
3|Dwight D. Eisenhower||eisenhower;ike
3|Harry S. Truman||truman
3|John Adams||adams
3|Woodrow Wilson||wilson
3|Ulysses S. Grant||grant
3|James Madison||madison
3|Lyndon B. Johnson||lbj;johnson;lyndon johnson
3|Gerald Ford||ford
4|James Monroe||monroe
4|John Quincy Adams||quincy adams;jqa
4|Herbert Hoover||hoover
4|Calvin Coolidge||coolidge
4|William McKinley||mckinley
4|Andrew Johnson
4|James K. Polk||polk
4|William Howard Taft||taft
5|Martin Van Buren||van buren
5|Grover Cleveland||cleveland
5|Warren G. Harding||harding
5|William Henry Harrison||harrison
5|Zachary Taylor||taylor
5|Rutherford B. Hayes||hayes
5|James A. Garfield||garfield
5|Benjamin Harrison
5|John Tyler||tyler
6|Millard Fillmore||fillmore
6|Franklin Pierce||pierce
6|James Buchanan||buchanan
6|Chester A. Arthur||arthur;chester arthur
`,
nope:{
 'benjamin franklin|ben franklin|franklin':'A Founding Father &mdash; but never president.',
 'alexander hamilton|hamilton':'First Treasury Secretary, star of the $10 bill &mdash; never president.'
}},

{id:'engmon', cat:'Rulers', q:'Name an English or British monarch', hint:'Anyone who reigned from 1066 onwards',
list:`
1|Elizabeth II||elizabeth 2
1|Henry VIII
1|Queen Victoria||victoria
1|Charles III
2|Elizabeth I||virgin queen;gloriana
2|William the Conqueror||william 1;william conqueror;william bastard
2|Richard III|Richard III of England
2|George III
2|Mary I|Mary I of England|bloody mary;mary tudor
3|Richard I|Richard I of England|richard lionheart;lionheart;richard lionhearted;coeur de lion
3|Henry V|Henry V of England
3|Edward VIII
3|George VI
3|John|John, King of England|king john;john lackland
3|Charles I|Charles I of England
3|Charles II|Charles II of England
3|James I|James VI and I|james 6;james 6 1
3|Edward I|Edward I of England|longshanks;edward longshanks
3|Edward the Confessor||edward confessor
3|Harold Godwinson||harold 2;harold
4|Henry VII|Henry VII of England|henry tudor
4|Edward III|Edward III of England
4|Edward VI
4|Henry II|Henry II of England
4|William III|William III of England|william orange;william mary
4|Mary II|Mary II of England
4|Anne|Anne, Queen of Great Britain|queen anne
4|George V
4|Edward VII
4|Henry IV|Henry IV of England|henry bolingbroke;bolingbroke
4|Henry VI|Henry VI of England
4|James II|James II of England|james 7
4|Edward II|Edward II of England
4|George I|George I of Great Britain
4|George II|George II of Great Britain
4|Richard II|Richard II of England
4|Edward IV|Edward IV of England
4|George IV
4|William IV
5|Henry III|Henry III of England
5|Edward V|Edward V of England
5|William II|William II of England|william rufus;rufus
5|Henry I|Henry I of England|henry beauclerc
5|Stephen|Stephen, King of England|stephen blois
5|Lady Jane Grey||jane grey;nine days queen
6|Empress Matilda||matilda;maud
`,
nope:{
 'alfred great|alfred':'A great king &mdash; but he reigned before 1066.',
 'cnut|canute|aethelred|ethelred|athelstan':'He ruled England &mdash; but before 1066.',
 'mary queen scots|mary stuart':'Queen of Scots &mdash; she never ruled England.',
 'oliver cromwell|cromwell':'Lord Protector, not a monarch &mdash; he turned the crown down!',
 'king arthur|arthur':'Legendary &mdash; no reign to dig up.'
},
amb:{
 'henry':'Which Henry? There are eight &mdash; add a number.',
 'edward':'Which Edward? Add a number.',
 'george':'Which George? There are six.',
 'richard':'Which Richard? Add a number.',
 'william':'Which William? Add a number.',
 'charles':'Which Charles? Add a number.',
 'james':'Which James? Add a number.',
 'mary':'Which Mary? Add a number.',
 'elizabeth':'Which Elizabeth? I or II?'
}},

{id:'wonders', cat:'Ancient World', q:'Name one of the Seven Wonders of the Ancient World', hint:'The classic Greek list',
list:`
1|Great Pyramid of Giza||great pyramid;pyramids;pyramid giza;pyramids giza;giza pyramids;pyramid khufu;pyramid;giza
2|Hanging Gardens of Babylon||hanging gardens;gardens babylon;babylon gardens
2|Colossus of Rhodes||colossus;rhodes colossus;rhodes
3|Lighthouse of Alexandria||pharos;pharos alexandria;lighthouse alexandria;lighthouse
4|Statue of Zeus at Olympia||statue zeus;zeus statue;statue zeus olympia;zeus
4|Temple of Artemis||temple artemis ephesus;artemision;artemis temple;temple artemis
5|Mausoleum at Halicarnassus||mausoleum halicarnassus;mausoleum mausolus;tomb mausolus;mausoleum;halicarnassus
`,
nope:{
 'colosseum|great wall china|great wall|stonehenge|petra|machu picchu|taj mahal|parthenon|acropolis|christ redeemer|chichen itza|sphinx|great sphinx|great sphinx giza':'Impressive &mdash; but not one of the original seven.'
}},

{id:'wives', cat:'Rulers', q:'Name one of Henry VIII\'s six wives', hint:'Divorced, beheaded, died&hellip;',
list:`
1|Anne Boleyn||boleyn
2|Catherine of Aragon||katherine aragon;katharine aragon;catherine aragon;aragon
3|Jane Seymour||seymour
4|Anne of Cleves||cleves;anne cleves
4|Catherine Howard||kathryn howard;katherine howard;howard
5|Catherine Parr||katherine parr;kateryn parr;parr
`,
nope:{
 'elizabeth 1|mary 1|elizabeth|mary|edward 6':'His children, not his wives!'
},
amb:{
 'anne':'Two of them were called Anne &mdash; which one?',
 'catherine':'Three of them were Catherines &mdash; which one?',
 'katherine':'Three of them were Catherines &mdash; which one?'
}},

{id:'moon', cat:'Modern History', q:'Name a person who walked on the Moon', hint:'Twelve people, 1969&ndash;1972',
list:`
1|Neil Armstrong||armstrong
2|Buzz Aldrin||aldrin;edwin aldrin;edwin buzz aldrin
3|Alan Shepard||shepard
3|Eugene Cernan||gene cernan;cernan
4|Pete Conrad||charles conrad;conrad
4|Alan Bean||bean
4|John Young|John Young (astronaut)|young
4|Edgar Mitchell||mitchell
5|David Scott||dave scott;scott
5|Harrison Schmitt||jack schmitt;schmitt
6|James Irwin||jim irwin;irwin
6|Charles Duke||charlie duke;duke
`,
nope:{
 'michael collins|collins':'He orbited the Moon on Apollo 11 &mdash; but never set foot on it.',
 'yuri gagarin|gagarin':'First human in space &mdash; but he never went to the Moon.',
 'jim lovell|james lovell|lovell':'Flew to the Moon twice &mdash; never landed.',
 'laika':'A very good dog &mdash; but she only orbited Earth.'
}},

{id:'soviet', cat:'Modern History', q:'Name a leader of the Soviet Union', hint:'1922&ndash;1991',
list:`
1|Joseph Stalin||stalin
1|Vladimir Lenin||lenin
2|Mikhail Gorbachev||gorbachev;gorby
3|Nikita Khrushchev||khrushchev;krushchev;khruschev
4|Leonid Brezhnev||brezhnev
5|Yuri Andropov||andropov
6|Konstantin Chernenko||chernenko
6|Georgy Malenkov||malenkov
`,
nope:{
 'vladimir putin|putin':'He leads Russia &mdash; the USSR was gone by 1991.',
 'leon trotsky|trotsky':'A key revolutionary &mdash; but he lost the power struggle to Stalin.',
 'boris yeltsin|yeltsin':'First president of Russia &mdash; after the USSR.',
 'karl marx|marx':'He inspired it &mdash; but died in 1883.'
}},

{id:'unsg', cat:'Modern History', q:'Name a Secretary-General of the United Nations', hint:'Since 1946',
list:`
1|Kofi Annan||annan;kofi
2|Ban Ki-moon||ban ki moon;ban;ban kimoon
2|António Guterres||guterres;antonio guterres
3|Dag Hammarskjöld||hammarskjold;dag hammarskjold;hammarskjoeld
4|Boutros Boutros-Ghali||boutros ghali;boutros boutros ghali;ghali
4|Kurt Waldheim||waldheim
5|U Thant||thant
5|Javier Pérez de Cuéllar||perez de cuellar;de cuellar;perez cuellar;cuellar
6|Trygve Lie||lie;trygve
`},

{id:'vikings', cat:'Medieval', q:'Name a famous Viking', hint:'Real or legendary, c. 790&ndash;1100',
list:`
1|Ragnar Lodbrok||ragnar;ragnar lothbrok;ragnar lodbrog
1|Leif Erikson||leif eriksson;leif ericson;leif ericsson;leif;leif lucky
1|Erik the Red||eric red;erik red;erik thorvaldsson;eirik raude
2|Harald Hardrada||harald hardrade;harald 3;harald sigurdsson;hardrada
2|Ivar the Boneless||ivar;ivar boneless
2|Rollo||hrolf;rolf
2|Björn Ironside||bjorn ironside;bjorn;bjorn jarnsida
3|Cnut the Great|Cnut|canute;knut;cnut;knud
3|Harald Bluetooth||harald blatand;bluetooth
3|Sweyn Forkbeard||svein forkbeard;sven forkbeard;forkbeard;sweyn
3|Olaf Tryggvason||olav tryggvason;tryggvason
3|Eric Bloodaxe||erik bloodaxe;eirik bloodaxe;bloodaxe
3|Lagertha||ladgerda
4|Freydís Eiríksdóttir||freydis;freydis eiriksdottir
4|Halfdan Ragnarsson||halfdan
4|Ubba||ubbe
4|Guthrum
4|Harald Fairhair||harald harfagre;fairhair;harald 1
4|Olaf II of Norway||saint olaf;olaf haraldsson;olav haraldsson;olav holy;olaf 2;olav 2;olaf holy
4|Sigurd Snake-in-the-Eye||sigurd snake eye;sigurd snake in eye
4|Egil Skallagrímsson||egil;egil skallagrimsson
4|Hrafna-Flóki Vilgerðarson||floki;hrafna floki;floki vilgerdarson;raven floki
5|Thorfinn Karlsefni||karlsefni
5|Gudrid Thorbjarnardóttir||gudrid
5|Bjarni Herjólfsson||bjarni;bjarni herjolfsson
5|Hastein||hasting
5|Thorkell the Tall||thorkell
5|Sigurd the Crusader||sigurd jorsalfar;sigurd 1;sigurd crusader
5|Magnus Barefoot||magnus 3;magnus barelegs
5|Gorm the Old||gorm
5|Ingólfr Arnarson||ingolf arnarson;ingolfur arnarson;ingolfr
5|Gunnhild, Mother of Kings||gunnhild
6|Ingvar the Far-Travelled||ingvar
6|Naddodd||naddoddr
6|Garðar Svavarsson||gardar svavarsson;gardar
6|Ketill Flatnose||ketil flatnose;ketill flatnef
6|Ohthere of Hålogaland||ohthere;ottar
6|Sigurd the Stout||sigurd stout
6|Thorfinn the Mighty||thorfinn mighty
6|Eiríkr Hákonarson||erik hakonsson;eirik hakonsson
6|Aud the Deep-Minded||aud deep minded;unn deep minded;aud
`,
nope:{
 'thor|odin|loki|freya|freyja|baldr|tyr':'That\'s a Norse god &mdash; not a Viking!',
 'hagar|hagar horrible|hiccup|vicky':'A fictional Viking &mdash; lovely, but not in the records.'
},
amb:{
 'harald':'Which Harald? Hardrada, Bluetooth or Fairhair?',
 'olaf':'Which Olaf? Tryggvason or Saint Olaf?',
 'olav':'Which Olav? Tryggvason or Saint Olaf?',
 'erik':'Which Erik? Add a nickname.',
 'eric':'Which Eric? Add a nickname.',
 'sigurd':'Which Sigurd? Add a nickname.'
}},

{id:'china', cat:'Asia', q:'Name a Chinese dynasty', hint:'Ruling houses from the Xia to the Qing',
list:`
1|Ming dynasty||ming
1|Qing dynasty||qing;ching;manchu
1|Han dynasty||han;western han;eastern han
1|Tang dynasty||tang
2|Song dynasty||song;sung;northern song;southern song
2|Qin dynasty||qin;chin
2|Yuan dynasty||yuan
3|Zhou dynasty||zhou;chou;western zhou;eastern zhou
3|Shang dynasty||shang;yin
3|Sui dynasty||sui
4|Xia dynasty||xia;hsia
4|Jin dynasty (266–420)||jin;western jin;eastern jin;sima jin
4|Northern Wei||tuoba wei
5|Jin dynasty (1115–1234)||jurchen jin;jurchen
5|Liao dynasty||liao;khitan
5|Western Xia||xi xia;tangut
5|Xin dynasty||xin;wang mang
5|Cao Wei||wei
5|Shu Han||shu
5|Eastern Wu||wu
6|Later Liang (Five Dynasties)||later liang
6|Later Tang||later tang
6|Later Jin (Five Dynasties)||later jin
6|Later Han (Five Dynasties)||later han
6|Later Zhou||later zhou
6|Northern Qi||northern qi
6|Northern Zhou||northern zhou
6|Liu Song dynasty||liu song
6|Southern Qi||southern qi
6|Liang dynasty||liang
6|Chen dynasty||chen
6|Western Liao||kara khitai;qara khitai
6|Northern Yuan||northern yuan
6|Wu Zhou||wu zhou;zhou wu zetian
6|Southern Ming||southern ming
`,
amb:{
 'mongol':'The Mongols ruled China as a dynasty &mdash; what was it called?',
 'mongols':'The Mongols ruled China as a dynasty &mdash; what was it called?',
 'three kingdoms':'The Three Kingdoms &mdash; name one of them!',
 'five dynasties':'Five Dynasties &mdash; name one of them!'
}},

{id:'ottoman', cat:'Empires', q:'Name an Ottoman sultan', hint:'1299&ndash;1922',
list:`
1|Suleiman the Magnificent||suleiman;suleyman;suleiman 1;kanuni;suleiman lawgiver
1|Mehmed II||mehmed conqueror;mehmet 2;mohammed 2;muhammad 2;fatih;mehmed fatih;fatih sultan mehmed
2|Osman I||osman;osman gazi;osman ghazi
2|Selim I||selim grim;yavuz selim
2|Abdul Hamid II||abdulhamid 2;abdulhamid;abdul hamid
3|Murad I||murat 1
3|Bayezid I||bayezid thunderbolt;yildirim bayezid;beyazit 1;bayazid 1
3|Mehmed VI||vahideddin;mehmed vahideddin;mehmet 6
3|Orhan||orhan gazi;orkhan;orhan ghazi
3|Selim II||selim sot
3|Murad IV||murat 4
3|Mahmud II||mahmut 2
4|Murad II||murat 2
4|Bayezid II||beyazit 2;bayazid 2
4|Murad III||murat 3
4|Ahmed I||ahmet 1
4|Mehmed IV||mehmet 4;mehmed hunter
4|Abdulmejid I||abdulmecid;abdulmejid;abdul mejid
4|Abdulaziz||abdul aziz
4|Mehmed V||mehmet 5;mehmed resad
4|Selim III
5|Mehmed I||mehmet 1;mehmed celebi
5|Mehmed III||mehmet 3
5|Ibrahim|Ibrahim (Ottoman sultan)|ibrahim 1;ibrahim mad;deli ibrahim
5|Mustafa I
5|Osman II||genc osman
5|Mustafa II
5|Ahmed III||ahmet 3
5|Mahmud I||mahmut 1
5|Mustafa III
5|Abdul Hamid I||abdulhamid 1
6|Suleiman II||suleyman 2
6|Ahmed II||ahmet 2
6|Osman III
6|Mustafa IV
6|Murad V||murat 5
`,
nope:{
 'ataturk|mustafa kemal|mustafa kemal ataturk|kemal ataturk':'Founder of modern Turkey &mdash; he abolished the sultanate in 1922.',
 'saladin':'A sultan of Egypt and Syria &mdash; centuries before the Ottomans.'
},
amb:{
 'mehmed':'Which Mehmed? There were six &mdash; add a number.',
 'mehmet':'Which Mehmed? There were six &mdash; add a number.',
 'murad':'Which Murad? Add a number.',
 'selim':'Which Selim? Add a number.',
 'mustafa':'Which Mustafa? Add a number.',
 'ahmed':'Which Ahmed? Add a number.',
 'mahmud':'Which Mahmud? Add a number.',
 'bayezid':'Which Bayezid? Add a number.'
}},

{id:'mughal', cat:'Empires', q:'Name a Mughal emperor', hint:'India, 1526&ndash;1857',
list:`
1|Akbar||akbar great;akbar 1;jalaluddin akbar
1|Shah Jahan||shahjahan;shah jahan 1;khurram
2|Babur||babar;zahiruddin babur
2|Aurangzeb||alamgir;alamgir 1;aurangzib;awrangzeb
3|Humayun
3|Jahangir||jahangeer
4|Bahadur Shah Zafar||bahadur shah 2;zafar;bahadur shah
5|Bahadur Shah I||bahadur shah 1;muazzam
5|Muhammad Shah||mohammad shah;rangila;muhammad shah rangila
5|Shah Alam II||shah alam;shah alam 2
5|Farrukhsiyar||farrukh siyar
5|Akbar II||akbar shah 2
6|Jahandar Shah
6|Rafi ud-Darajat||rafi ud darajat
6|Shah Jahan II||rafi ud daulah
6|Ahmad Shah Bahadur||ahmad shah;ahmed shah bahadur
6|Alamgir II
6|Shah Jahan III
6|Azam Shah||muhammad azam shah
`,
nope:{
 'mumtaz mahal|mumtaz':'Shah Jahan\'s beloved wife, for whom the Taj was built &mdash; not an emperor.',
 'tipu sultan':'Ruler of Mysore &mdash; not a Mughal.',
 'ashoka':'A Mauryan emperor &mdash; about 1,800 years earlier.'
},
amb:{
 'taj mahal':'That\'s the monument &mdash; who built it?'
}},

{id:'napoleon', cat:'Wars & Battles', q:'Name a battle of the Napoleonic era', hint:'Napoleon\'s wars, 1793&ndash;1815',
list:`
1|Battle of Waterloo||waterloo
1|Battle of Austerlitz||austerlitz;three emperors
1|Battle of Trafalgar||trafalgar
2|Battle of Borodino||borodino
2|Battle of Leipzig||leipzig;nations
2|Battle of the Nile||nile;aboukir bay;abukir bay
3|Battle of Jena–Auerstedt||jena;auerstedt;jena auerstedt;jena auerstadt
3|Battle of Wagram||wagram
3|Battle of Marengo||marengo
3|Battle of the Pyramids||pyramids;embabeh
3|Battle of Eylau||eylau;preussisch eylau
3|Battle of Friedland||friedland
3|Ulm campaign||ulm
4|Battle of Aspern-Essling||aspern;essling;aspern essling
4|Battle of Lützen (1813)||lutzen;grossgorschen
4|Battle of Bautzen (1813)||bautzen
4|Battle of Dresden||dresden
4|Battle of Ligny||ligny
4|Battle of Quatre Bras||quatre bras
4|Battle of Salamanca||salamanca;arapiles
4|Battle of Vitoria||vitoria;vittoria
4|Battle of Talavera||talavera
4|Battle of Arcole||arcole;arcola
4|Battle of Rivoli||rivoli
4|Battle of Lodi||lodi
4|Battle of Copenhagen (1801)||copenhagen
4|Battle of the Berezina||berezina;beresina
4|Battle of Smolensk (1812)||smolensk
4|Siege of Acre (1799)||acre
4|Battle of Wavre||wavre
5|Battle of Corunna||corunna;coruna;la coruna;elvina
5|Battle of Bussaco||bussaco;bucaco
5|Battle of Albuera||albuera
5|Battle of Fuentes de Oñoro||fuentes de onoro;fuentes onoro
5|Battle of Vimeiro||vimeiro
5|Siege of Badajoz (1812)||badajoz
5|Siege of Ciudad Rodrigo (1812)||ciudad rodrigo
5|Battle of Maida||maida
5|Battle of Hohenlinden||hohenlinden
5|Battle of Abukir (1799)||abukir;aboukir
5|Battle of Montmirail||montmirail
5|Battle of Laon||laon
5|Battle of Paris (1814)||paris
5|Battle of Toulouse (1814)||toulouse
5|Battle of Hanau||hanau
5|Battle of Kulm||kulm
5|Battle of the Katzbach||katzbach
5|Battle of Maloyaroslavets||maloyaroslavets
5|Battle of Krasnoi||krasnoi;krasny
5|Battle of Bailén||bailen;baylen
5|Siege of Toulon (1793)||toulon
5|Sieges of Saragossa||saragossa;zaragoza
5|Battle of Montenotte||montenotte
5|Battle of Castiglione||castiglione
5|Battle of Eckmühl||eckmuhl;eggmuhl
5|Battle of Heilsberg||heilsberg
6|Battle of Champaubert||champaubert
6|Battle of Arcis-sur-Aube||arcis sur aube
6|Battle of Orthez||orthez
6|Battle of Pułtusk (1806)||pultusk
6|Battle of Abensberg||abensberg
6|Battle of Raab||raab;gyor
6|Battle of Somosierra||somosierra
6|Battle of Schöngrabern||schongrabern;hollabrunn
6|Battle of Dürenstein||durenstein;durnstein
6|Battle of Elchingen||elchingen
6|Battle of Saalfeld||saalfeld
6|Battle of Golymin||golymin
6|Battle of Großbeeren||grossbeeren;gross beeren
6|Battle of Dennewitz||dennewitz
6|Battle of Montereau||montereau
6|Battle of La Rothière||la rothiere;rothiere
6|Battle of Craonne||craonne
6|Battle of Brienne||brienne
6|Battle of Znaim||znaim;znojmo
6|Battle of Tolentino||tolentino
6|Battle of Tarutino||tarutino;vinkovo
`,
nope:{
 'hastings':'1066 &mdash; about 750 years too early!',
 'gettysburg|bull run|antietam':'Wrong war, wrong continent.',
 'somme|verdun|ypres|gallipoli|marne':'That\'s World War I.',
 'stalingrad':'Wrong invasion of Russia &mdash; that one\'s WWII.'
}},

{id:'lost', cat:'Modern History', q:'Name a country that vanished in the 20th century', hint:'Dissolved, merged or renamed between 1901 and 2000',
list:`
1|Soviet Union||ussr;cccp;soviets;soviet russia;union soviet socialist republics
1|Yugoslavia||kingdom yugoslavia;sfr yugoslavia
1|Czechoslovakia
1|East Germany||gdr;ddr;german democratic republic
2|West Germany||frg;brd
2|Austria-Hungary||austria hungary;austro hungarian empire;austro hungary;austrohungary;dual monarchy;austro hungarian
2|Ottoman Empire||ottoman;ottomans;ottoman turkey
2|Russian Empire||tsarist russia;imperial russia
2|Prussia||kingdom prussia;free state prussia
2|South Vietnam||republic vietnam
2|Nazi Germany||third reich;greater german reich
3|Rhodesia||southern rhodesia
3|Zaire||republic zaire
3|Persia|Pahlavi Iran
3|Burma|Myanmar
3|Siam|Thailand
3|Ceylon|Dominion of Ceylon
3|North Vietnam||democratic republic vietnam
3|German Empire||kaiserreich;imperial germany;second reich
3|Weimar Republic||weimar;weimar germany
3|Vichy France||vichy;french state
3|Qing dynasty||qing;qing china;qing empire;manchu china;great qing
4|Manchukuo||manchuria;manchoukuo
4|United Arab Republic||uar
4|North Yemen||yemen arab republic
4|South Yemen||peoples democratic republic yemen;pdry
4|Tanganyika
4|Zanzibar|People's Republic of Zanzibar|sultanate zanzibar
4|Biafra||republic biafra
4|Ethiopian Empire||abyssinia
4|Korean Empire||daehan empire
4|Empire of Japan||imperial japan;empire japan
4|Kingdom of Italy||fascist italy
4|Free City of Danzig||danzig
4|East Pakistan
4|Democratic Kampuchea||kampuchea
4|Independent State of Croatia||ndh
5|Kingdom of Egypt
5|Kingdom of Iraq||hashemite iraq
5|Kingdom of Hejaz||hejaz;hijaz
5|Dominion of Newfoundland||newfoundland
5|Sikkim||kingdom sikkim
5|Hyderabad State
5|Orange Free State
5|South African Republic||transvaal;transvaal republic
5|Republic of Dahomey||dahomey
5|Republic of Upper Volta||upper volta
5|Central African Empire
5|Grand Duchy of Finland
5|Khmer Republic
5|Zimbabwe Rhodesia
5|Transkei
5|Saar Protectorate||saar
5|Free Territory of Trieste||trieste
5|Kingdom of Bohemia||bohemia
6|Tuvan People's Republic||tuva;tannu tuva
6|Free State of Fiume||fiume
6|Bophuthatswana
6|Ciskei
6|Venda
6|Hatay State||hatay;republic hatay
6|Tangier International Zone||tangier;tangier zone
6|Mali Federation
6|Federation of Malaya||malaya
6|Kingdom of Libya
6|Carpatho-Ukraine||carpathian ukraine
6|Slovak Republic (1939–1945)||first slovak republic;slovak state
6|Kingdom of Montenegro
6|Kingdom of Serbia
6|Kingdom of Bavaria
`,
nope:{
 'serbia montenegro':'It dissolved in 2006 &mdash; 21st century!',
 'kingdom hawaii|hawaii':'Overthrown in 1893 &mdash; just before the 20th century.',
 'texas|republic texas':'Joined the USA in 1845.',
 'roman empire|rome|holy roman empire|byzantine empire|byzantium|prussia 1701':'Gone &mdash; but long before the 1900s.',
 'netherlands antilles':'Dissolved in 2010 &mdash; too recent.'
},
amb:{
 'czech republic':'Still around! What was it part of before 1993?',
 'slovakia':'Still around! What was it part of before 1993?',
 'germany':'Germany is still here &mdash; which Germany vanished?',
 'vietnam':'Vietnam is still here &mdash; which Vietnam vanished?',
 'yemen':'Yemen is still here &mdash; which Yemen vanished?'
}},

{id:'greekphil', cat:'Art & Ideas', q:'Name an ancient Greek philosopher', hint:'From Thales to the last Neoplatonists',
list:`
1|Socrates
1|Plato
1|Aristotle
2|Pythagoras
2|Diogenes||diogenes sinope;diogenes cynic
2|Epicurus
2|Heraclitus
3|Thales of Miletus||thales
3|Zeno of Elea||zeno;zeno elea
3|Zeno of Citium||zeno citium;zeno stoic
3|Democritus
3|Parmenides
3|Archimedes
3|Hypatia
4|Anaximander
4|Anaximenes of Miletus||anaximenes
4|Empedocles
4|Anaxagoras
4|Protagoras
4|Plotinus
4|Epictetus
4|Euclid
4|Xenophon
4|Theophrastus
4|Gorgias
5|Leucippus
5|Xenophanes
5|Antisthenes
5|Aristippus
5|Pyrrho||pyrrho elis
5|Chrysippus
5|Cleanthes
5|Carneades
5|Porphyry|Porphyry (philosopher)
5|Proclus
5|Thrasymachus
5|Prodicus
5|Hippias
5|Speusippus
5|Xenocrates
5|Posidonius
5|Panaetius
5|Sextus Empiricus||sextus
5|Iamblichus
5|Philolaus
5|Crates of Thebes||crates
5|Eratosthenes
6|Hipparchia of Maroneia||hipparchia
6|Strato of Lampsacus||strato
6|Melissus of Samos||melissus
6|Alcmaeon of Croton||alcmaeon
6|Archytas
6|Diogenes of Apollonia
6|Timon of Phlius||timon
6|Arcesilaus
6|Crantor
6|Menippus
6|Bion of Borysthenes||bion
6|Anaxarchus
6|Damascius
6|Simplicius of Cilicia||simplicius
6|Ammonius Saccas||ammonius
6|Arete of Cyrene||arete
`,
nope:{
 'homer':'A poet, not a philosopher.',
 'herodotus|thucydides':'A historian &mdash; close, but not a philosopher.',
 'alexander great|alexander':'Aristotle\'s most famous student &mdash; a conqueror, not a philosopher.',
 'seneca|marcus aurelius|cicero|lucretius':'Roman, not Greek!',
 'confucius|laozi|lao tzu|sun tzu':'Wrong ancient civilization &mdash; that\'s China!',
 'hippocrates':'The father of medicine &mdash; not usually counted as a philosopher.'
}},

{id:'pharaoh', cat:'Ancient World', q:'Name an ancient Egyptian pharaoh', hint:'From Narmer to Cleopatra',
list:`
1|Tutankhamun||tutankhamen;king tut;tut;tutankhamon
1|Ramesses II||ramesses;ramses;rameses;ramses 2;rameses 2;ramesses great;ozymandias
1|Cleopatra||cleopatra 7;cleopatra 7 philopator
2|Khufu||cheops
2|Akhenaten||akhenaton;amenhotep 4;ikhnaton
2|Hatshepsut||hatchepsut
3|Nefertiti
3|Thutmose III||thutmose;tuthmosis 3;thutmosis 3;thothmes 3;tuthmosis;thutmosis
3|Khafre||chephren;khafra
3|Menkaure||mycerinus;menkaura
3|Djoser||zoser;netjerikhet
3|Seti I||seti;sethos 1
3|Narmer
3|Menes||meni
3|Amenhotep III||amenhotep;amenophis 3
4|Sneferu||snefru;snofru
4|Amenhotep I||amenophis 1
4|Amenhotep II||amenophis 2
4|Thutmose I||tuthmosis 1;thutmosis 1
4|Thutmose II||tuthmosis 2;thutmosis 2
4|Thutmose IV||tuthmosis 4;thutmosis 4
4|Ramesses I||ramses 1
4|Ramesses III||ramses 3
4|Merneptah
4|Horemheb
4|Ay|Ay (pharaoh)
4|Smenkhkare
4|Ahmose I||ahmose;amosis
4|Mentuhotep II||mentuhotep
4|Senusret III||senusret;sesostris 3;senwosret 3
4|Amenemhat III||amenemhat;amenemhet 3
4|Pepi II|Pepi II Neferkare|pepi
4|Taharqa||taharqo;tirhakah
4|Piye||piankhi
4|Ptolemy I Soter||ptolemy;ptolemy 1;ptolemy soter
4|Ptolemy II Philadelphus||ptolemy 2;ptolemy philadelphus
4|Ptolemy XIII|Ptolemy XIII Theos Philopator|ptolemy 13
4|Caesarion||ptolemy 15
4|Sobekneferu||neferusobek
4|Necho II||necho;nekau 2
4|Psamtik I||psamtik;psammetichus 1
5|Unas||wenis
5|Teti
5|Userkaf
5|Sahure
5|Djedefre||radjedef
5|Hor-Aha||aha;hor aha
5|Scorpion I||scorpion king;scorpion
5|Nectanebo II||nectanebo;nakhthorheb
5|Shoshenq I||shishak;sheshonk 1;shoshenq
5|Kamose
5|Seqenenre Tao||seqenenre;seqenenre taa
6|Shepseskaf
6|Djer
6|Den|Den (pharaoh)
6|Qa'a||qaa
6|Khasekhemwy
6|Nectanebo I
6|Osorkon II||osorkon
6|Psusennes I||psusennes
6|Seti II
6|Siptah
6|Twosret||tausret
6|Amenmesse
6|Neferneferuaten
6|Shabaka||shabako
6|Ramesses VI||ramses 6
6|Ramesses IX||ramses 9
6|Ramesses XI||ramses 11
6|Apepi||apophis
6|Khyan
6|Sobekhotep IV
6|Siamun
`,
nope:{
 'moses':'A prophet, not a pharaoh.',
 'imhotep':'Djoser\'s genius architect &mdash; never pharaoh.',
 'anubis|ra|re|osiris|horus|isis|set|seth|amun|amun ra|ptah|thoth':'That\'s a god &mdash; pharaohs only claimed to be one!',
 'nefertari':'Ramesses II\'s great royal wife &mdash; a queen, not a pharaoh.',
 'sphinx|great sphinx':'A monument, not a ruler!'
}},

{id:'tsars', cat:'Rulers', q:'Name a Russian tsar or empress', hint:'Tsars and emperors, 1547&ndash;1917 (plus Ivan the Great)',
list:`
1|Peter the Great||peter;peter 1;pyotr 1
1|Catherine the Great||catherine;catherine 2;ekaterina 2;yekaterina 2
1|Ivan the Terrible||ivan;ivan 4;ivan grozny
1|Nicholas II||nicholas;nicholas 2;nikolai 2;nicholas romanov
2|Alexander II|Alexander II of Russia|alexander 2;alexander liberator
2|Alexander I|Alexander I of Russia|alexander 1
2|Alexander III|Alexander III of Russia|alexander 3;alexander peacemaker
3|Nicholas I|Nicholas I of Russia|nicholas 1;nikolai 1
3|Elizabeth|Elizabeth of Russia|elizabeth petrovna;elizaveta;elizaveta petrovna
3|Boris Godunov||godunov;boris
3|Paul I|Paul I of Russia|paul 1;pavel 1;paul
3|Peter III|Peter III of Russia|peter 3
3|Anna|Anna of Russia|anna ioannovna;anna ivanovna
4|Michael I|Michael I of Russia|michael 1;mikhail 1;michael romanov;mikhail romanov;mikhail fyodorovich
4|Alexis|Alexis of Russia|alexei mikhailovich;aleksei mikhailovich;alexis 1;alexei
4|Catherine I|Catherine I of Russia|catherine 1;ekaterina 1
4|Feodor I|Feodor I of Russia|feodor 1;fyodor 1;fedor 1
4|Ivan VI|Ivan VI of Russia|ivan 6
4|Peter II|Peter II of Russia|peter 2
4|Ivan V|Ivan V of Russia|ivan 5
4|Feodor III|Feodor III of Russia|feodor 3;fyodor 3;fedor 3
4|Ivan III|Ivan III of Russia|ivan great;ivan 3
5|Vasili IV|Vasili IV of Russia|vasili 4;vasily 4;vasily shuisky;vasili shuisky;shuisky
5|False Dmitry I||false dmitry;dmitry;pseudo dmitry;false dmitri
5|Feodor II|Feodor II of Russia|feodor 2;fyodor 2
6|Michael II|Grand Duke Michael Alexandrovich of Russia|michael 2;michael alexandrovich;grand duke michael
`,
nope:{
 'rasputin|grigori rasputin':'Mystic, healer, menace &mdash; but never tsar.',
 'anastasia':'A grand duchess &mdash; she never ruled.',
 'lenin|stalin|trotsky':'Soviet era &mdash; the tsars were gone by then.'
},
amb:{
 'alexander':'Which Alexander? Russia had three &mdash; add a number.',
 'feodor':'Which Feodor? Add a number.',
 'fyodor':'Which Fyodor? Add a number.',
 'vasili':'Which Vasili? Add a number.',
 'michael':'Which Michael? Add a number.'
}},

{id:'explorers', cat:'Exploration', q:'Name a famous explorer', hint:'Land or sea &mdash; astronauts don\'t count',
list:`
1|Christopher Columbus||columbus;cristoforo colombo;cristobal colon
1|Marco Polo||polo
1|Ferdinand Magellan||magellan;fernao magalhaes;magalhaes
1|Vasco da Gama||da gama;vasco gama
1|James Cook||captain cook;cook
2|Roald Amundsen||amundsen
2|Ernest Shackleton||shackleton
2|Leif Erikson||leif eriksson;leif ericson;leif ericsson;leif
2|Hernán Cortés||cortes;hernan cortes;hernando cortez;cortez
2|Francisco Pizarro||pizarro
2|Lewis and Clark|Lewis and Clark Expedition|lewis clark;meriwether lewis;william clark;lewis;clark
2|Amerigo Vespucci||vespucci;amerigo
2|Robert Falcon Scott||scott;captain scott;robert scott
2|Zheng He||cheng ho
2|Ibn Battuta||ibn batuta;battuta;ibn battutah
2|Edmund Hillary||hillary
2|Francis Drake||drake
3|Sacagawea||sakakawea;sacajawea
3|Henry Hudson||hudson
3|Bartolomeu Dias||dias;bartholomew diaz;diaz
3|John Cabot||cabot;giovanni caboto
3|Jacques Cartier||cartier
3|Samuel de Champlain||champlain
3|Abel Tasman||tasman
3|David Livingstone||livingstone
3|Henry Morton Stanley||stanley;henry stanley
3|Fridtjof Nansen||nansen
3|Thor Heyerdahl||heyerdahl
3|Juan Ponce de León||ponce de leon;ponce
3|Hernando de Soto||de soto;desoto
3|Vitus Bering||bering
3|Robert Peary||peary
3|Tenzing Norgay||tenzing;sherpa tenzing
3|Walter Raleigh||raleigh
3|Vasco Núñez de Balboa||balboa;vasco nunez balboa
3|Alexander von Humboldt||humboldt
3|Erik the Red||eric red;erik red
3|Giovanni da Verrazzano||verrazzano;verrazano
3|Francisco Vázquez de Coronado||coronado
3|Jacques Cousteau||cousteau
4|Matthew Henson||henson
4|Francisco de Orellana||orellana
4|Mungo Park
4|Richard Francis Burton||richard burton;burton
4|John Hanning Speke||speke
4|Zebulon Pike||pike
4|Daniel Boone||boone
4|Willem Barentsz||barentsz;barents
4|John Franklin||franklin;john franklin
4|Pedro Álvares Cabral||cabral
4|Juan Sebastián Elcano||elcano;del cano
4|Álvar Núñez Cabeza de Vaca||cabeza de vaca
4|Alexander Mackenzie|Alexander Mackenzie (explorer)|mackenzie
4|Douglas Mawson||mawson
4|Burke and Wills|Burke and Wills expedition|burke wills;burke;wills
4|Gertrude Bell
4|Isabella Bird
4|Xuanzang||hsuan tsang;xuan zang
4|Zhang Qian
4|Louis Antoine de Bougainville||bougainville
4|Matthew Flinders||flinders
4|Richard E. Byrd||byrd
4|Ranulph Fiennes||fiennes
4|Reinhold Messner||messner
4|George Mallory||mallory
4|Henry the Navigator||prince henry;henry navigator
4|René-Robert Cavelier, Sieur de La Salle||la salle;de la salle
4|George Vancouver||vancouver
4|Hiram Bingham III||hiram bingham;bingham
4|Charles Darwin||darwin
5|Pytheas
5|Hanno the Navigator||hanno
5|Ahmad ibn Fadlan||ibn fadlan
5|Jean-François de La Pérouse||la perouse;laperouse
5|Juan Rodríguez Cabrillo||cabrillo
5|Sebastian Cabot|Sebastian Cabot (explorer)
5|Martin Frobisher||frobisher
5|William Baffin||baffin
5|Knud Rasmussen||rasmussen
5|Otto Sverdrup||sverdrup
5|Umberto Nobile||nobile
5|Salomon August Andrée||andree
5|Adolf Erik Nordenskiöld||nordenskiold
5|Frederick Cook
5|Børge Ousland||ousland;borge ousland
5|Freya Stark
5|Alexandra David-Néel||david neel
5|Sven Hedin||hedin
5|Nikolay Przhevalsky||przhevalsky;przewalski
5|Diogo Cão||diogo cao
5|John Wesley Powell||powell
5|Kit Carson||carson
5|Louis Jolliet||jolliet;joliet
5|Jacques Marquette||marquette
5|David Thompson|David Thompson (explorer)
5|Lawrence Oates||oates;captain oates
5|Tom Crean|Tom Crean (explorer)|crean
5|William of Rubruck||rubruck
5|Francis Younghusband||younghusband
5|Mary Kingsley||kingsley
5|Ida Pfeiffer||pfeiffer
6|Yermak Timofeyevich||yermak;ermak
6|Semyon Dezhnev||dezhnev
6|Dirk Hartog||hartog
6|Willem Janszoon||janszoon
6|Luis Váez de Torres||torres
6|Pedro Fernandes de Queirós||queiros;quiros
6|Gil Eanes||eanes
6|Étienne Brûlé||brule
6|Pierre-Esprit Radisson||radisson
6|Samuel Hearne||hearne
6|Apsley Cherry-Garrard||cherry garrard
6|Frank Wild
6|Frank Worsley||worsley
6|Rabban Bar Sauma||bar sauma
6|Afanasy Nikitin||nikitin
6|Pêro da Covilhã||covilha;pero da covilha
6|Estevanico||esteban
6|Fernão Mendes Pinto||mendes pinto
6|Heinrich Barth
6|René Caillié||caillie
6|Samuel Baker
6|Hjalmar Johansen||johansen
6|Liv Arnesen||arnesen
6|Carsten Borchgrevink||borchgrevink
6|Ann Bancroft
`,
nope:{
 'neil armstrong|armstrong|buzz aldrin|aldrin|yuri gagarin|gagarin':'A space explorer! This dig sticks to land and sea.',
 'indiana jones|dora|dora explorer|lara croft':'Fictional &mdash; sadly.',
 'howard carter':'An archaeologist &mdash; a digger after our own heart, but not an explorer.'
}},

{id:'wrecks', cat:'Exploration', q:'Name a famous shipwreck', hint:'Any ship that went down',
list:`
1|Titanic||titanic
2|RMS Lusitania||lusitania
2|Bismarck|German battleship Bismarck|bismark
2|Mary Rose
2|Vasa|Vasa (ship)|wasa
3|SS Edmund Fitzgerald||fitzgerald
3|SS Andrea Doria||doria
3|HMHS Britannic||britannic
3|MV Wilhelm Gustloff||gustloff
3|Yamato|Japanese battleship Yamato
3|HMS Hood
3|USS Arizona
3|Endurance|Endurance (1912 ship)
3|Batavia|Batavia (1628 ship)
3|Whydah Gally||whydah
3|Queen Anne's Revenge
3|Costa Concordia||concordia
3|MS Estonia
3|Kursk|Russian submarine Kursk (K-141)|k 141
3|Mary Celeste||marie celeste
4|RMS Empress of Ireland
4|RMS Lancastria
4|SS Central America||ship gold
4|USS Indianapolis|USS Indianapolis (CA-35)
4|Sultana|Sultana (steamboat)
4|HMS Bounty||bounty
4|San José|San José (ship)|san jose galleon
4|Nuestra Señora de Atocha||atocha
4|Antikythera wreck||antikythera;antikythera shipwreck
4|PS General Slocum||slocum
4|MV Sewol|Sinking of MV Sewol
4|HMS Erebus|HMS Erebus (1826)
4|HMS Terror|HMS Terror (1813)
4|Santa María|Santa María (ship)
4|Méduse|French frigate Méduse (1810)|medusa;raft medusa
4|Essex|Essex (whaleship)|whaleship essex
5|Uluburun shipwreck||uluburun
5|SS Eastland
5|MV Doña Paz
5|MV Le Joola||joola
5|MS Herald of Free Enterprise||herald
5|Scharnhorst|German battleship Scharnhorst
5|Tirpitz|German battleship Tirpitz
5|HMS Prince of Wales|HMS Prince of Wales (53)
5|HMS Repulse|HMS Repulse (1916)
5|Musashi|Japanese battleship Musashi
5|USS Monitor
5|H. L. Hunley|H. L. Hunley (submarine)|hunley
5|Kronan|Kronan (ship)
5|SS Cap Arcona
5|Andrea Gail
5|HMS Birkenhead|HMS Birkenhead (1845)
5|White Ship||blanche nef
5|USS Thresher|USS Thresher (SSN-593)
6|Royal Charter|Royal Charter (ship)
6|SS Arctic
6|SS Waratah
6|Mars|Mars (ship)
6|Grace Dieu|Grace Dieu (ship)
6|SS Morro Castle|SS Morro Castle (1930)
6|SS Princess Alice
6|Shinano|Japanese aircraft carrier Shinano
6|MV Goya||goya
6|USS Scorpion|USS Scorpion (SSN-589)
6|SS Republic|SS Republic (1853)
6|La Belle|La Belle (ship)
6|Gribshunden
`,
nope:{
 'black pearl|flying dutchman|pequod|nautilus':'Legendary or fictional &mdash; no wreck to dig up!',
 'hindenburg':'An airship &mdash; wrong element!',
 'victory|hms victory':'Still afloat in Portsmouth!'
}},

{id:'revs', cat:'Modern History', q:'Name a revolution', hint:'Political, social or technological',
list:`
1|French Revolution||french
1|American Revolution||american;american war independence;american revolutionary war
1|Russian Revolution||russian;bolshevik
1|Industrial Revolution||industrial
2|Glorious Revolution||glorious
2|Cuban Revolution||cuban
2|Iranian Revolution||iranian;islamic revolution
2|Haitian Revolution||haitian;haiti
2|Mexican Revolution||mexican
2|Velvet Revolution||velvet
2|October Revolution||october;red october
3|Revolutions of 1848||1848;spring nations;springtime peoples
3|Xinhai Revolution||xinhai;1911;chinese 1911
3|Cultural Revolution||cultural
3|Carnation Revolution||carnation
3|Hungarian Revolution of 1956||hungarian 1956;hungarian uprising;hungarian
3|Orange Revolution||orange
3|Rose Revolution||rose
3|February Revolution||february
3|Arab Spring
3|Scientific Revolution||scientific
3|Neolithic Revolution||neolithic;agricultural
3|Revolutions of 1989||1989;fall communism;autumn nations
3|Chinese Communist Revolution||chinese;chinese communist
4|Egyptian revolution of 2011||egyptian;egyptian 2011;tahrir
4|Tunisian revolution||tunisian;jasmine
4|Romanian revolution||romanian;romanian 1989
4|Green Revolution||green
4|Digital Revolution||digital;information
4|Sexual revolution||sexual
4|July Revolution||july;july 1830;french 1830
4|Belgian Revolution||belgian
4|German revolution of 1918–1919||german;november;german 1918
4|People Power Revolution||people power;edsa
4|Singing Revolution||singing
4|Nicaraguan Revolution||nicaraguan;sandinista
4|Greek War of Independence||greek;greek independence
4|Texas Revolution||texas;texan
4|Philippine Revolution||philippine
4|Revolution of Dignity||dignity;euromaidan;maidan
4|Hungarian Revolution of 1848||hungarian 1848
4|Russian Revolution of 1905||1905;russian 1905
4|Meiji Restoration||meiji
5|Quiet Revolution||quiet
5|5 October 1910 revolution||portuguese;portuguese 1910
5|Saffron Revolution||saffron
5|Bolivarian Revolution||bolivarian
5|Young Turk Revolution||young turk;young turks
5|Tulip Revolution||tulip
5|Cedar Revolution||cedar
5|Sudanese revolution||sudanese
5|Bulldozer Revolution|Overthrow of Slobodan Milošević|bulldozer
5|Commercial Revolution||commercial
5|Atlantic Revolutions||atlantic
5|Spanish Revolution of 1936||spanish;spanish 1936
5|Ethiopian Revolution||ethiopian
5|Persian Constitutional Revolution||persian constitutional;iranian constitutional;constitutional
5|May Revolution||may;argentine may;argentine
6|Jeans Revolution||jeans;denim
6|Liberal Revolution of 1820||liberal 1820;portuguese 1820
6|Saur Revolution||saur
6|Zanzibar Revolution||zanzibar
6|14 July Revolution||iraqi;iraqi 1958
6|April Revolution||april;korean 1960
6|Algerian Revolution|Algerian War|algerian
6|Puritan Revolution|Wars of the Three Kingdoms|english;puritan;english revolution
`},

{id:'renaissance', cat:'Art & Ideas', q:'Name a Renaissance artist', hint:'Painters, sculptors and architects, c. 1300&ndash;1600',
list:`
1|Leonardo da Vinci||leonardo;da vinci
1|Michelangelo||michelangelo buonarroti
1|Raphael||raffaello;raffaello sanzio
1|Donatello
1|Sandro Botticelli||botticelli
2|Titian||tiziano;tiziano vecellio
2|Albrecht Dürer||durer;albrecht durer;duerer
2|Jan van Eyck||van eyck
2|Hieronymus Bosch||bosch
3|Pieter Bruegel the Elder||bruegel;brueghel;pieter bruegel;breughel
3|Giotto||giotto di bondone
3|Masaccio
3|Filippo Brunelleschi||brunelleschi
3|Fra Angelico||angelico
3|Lorenzo Ghiberti||ghiberti
3|Andrea Mantegna||mantegna
3|Giovanni Bellini||bellini
3|Tintoretto
3|Paolo Veronese||veronese
3|Hans Holbein the Younger||holbein;hans holbein
3|El Greco
4|Giorgione
4|Antonio da Correggio||correggio
4|Piero della Francesca
4|Pietro Perugino||perugino
4|Paolo Uccello||uccello
4|Filippo Lippi||fra filippo lippi;lippi
4|Domenico Ghirlandaio||ghirlandaio
4|Andrea del Verrocchio||verrocchio
4|Lucas Cranach the Elder||cranach;lucas cranach
4|Donato Bramante||bramante
4|Benvenuto Cellini||cellini
4|Parmigianino
4|Agnolo Bronzino||bronzino
4|Pontormo||jacopo pontormo
4|Rogier van der Weyden||van der weyden
4|Hans Memling||memling
4|Sofonisba Anguissola||anguissola;sofonisba
4|Giorgio Vasari||vasari
4|Andrea del Sarto||del sarto
4|Luca della Robbia||della robbia
4|Leon Battista Alberti||alberti
4|Andrea Palladio||palladio
4|Cimabue
5|Vittore Carpaccio||carpaccio
5|Luca Signorelli||signorelli
5|Giulio Romano
5|Antonello da Messina||antonello
5|Benozzo Gozzoli||gozzoli
5|Filippino Lippi
5|Lorenzo Lotto||lotto
5|Sebastiano del Piombo
5|Rosso Fiorentino
5|Jacopo Bellini
5|Gentile Bellini
5|Pisanello
5|Duccio||duccio di buoninsegna
5|Simone Martini
5|Hugo van der Goes
5|Robert Campin||campin
5|Matthias Grünewald||grunewald
5|Albrecht Altdorfer||altdorfer
5|Lavinia Fontana
5|Pinturicchio
5|Fra Bartolomeo
6|Dieric Bouts||bouts
6|Gerard David
6|Quinten Massys||matsys;massys;quentin matsys
6|Joachim Patinir||patinir
6|Hans Baldung||baldung;baldung grien
6|Properzia de' Rossi||properzia de rossi
6|Plautilla Nelli
6|Jacopo della Quercia
6|Desiderio da Settignano
6|Michelozzo
6|Cosimo Tura
6|Carlo Crivelli||crivelli
6|Andrea del Castagno
6|Jean Fouquet||fouquet
6|Jean Clouet||clouet
6|Nicholas Hilliard||hilliard
6|Lucas van Leyden
6|Jan Gossaert||mabuse;gossaert
`,
nope:{
 'caravaggio|rubens|bernini|velazquez|artemisia gentileschi':'Baroque &mdash; just after the Renaissance.',
 'rembrandt|vermeer':'Dutch Golden Age &mdash; a century later.',
 'van gogh|monet|picasso|dali':'Way later &mdash; not the Renaissance!',
 'shakespeare|dante|petrarch|machiavelli':'A Renaissance writer &mdash; this dig wants artists.',
 'medici|lorenzo medici':'A patron, not an artist!'
}},

{id:'civs', cat:'Ancient World', q:'Name an ancient civilization or culture', hint:'Before c. 500 AD &mdash; plus the great American civilizations',
list:`
1|Ancient Egypt||egypt;egyptians;egyptian
1|Ancient Rome||rome;romans;roman;roman empire;roman republic
1|Ancient Greece||greece;greeks;greek;hellenes
1|Maya civilization||maya;mayans;mayan
1|Aztecs||aztec;aztec empire;mexica
1|Inca Empire||inca;incas;inka;inca civilization
2|Mesopotamia||mesopotamians;mesopotamian
2|Sumer||sumerians;sumerian
2|Babylonia||babylon;babylonians;babylonian
2|Achaemenid Empire||persia;persians;persian empire;achaemenid;ancient persia;achaemenids
2|Indus Valley Civilisation||indus valley;indus;harappa;harappan;indus valley civilization
2|Ancient China||china;chinese;shang;shang china
3|Phoenicia||phoenicians;phoenician
3|Ancient Carthage||carthage;carthaginians;punic
3|Assyria||assyrians;assyrian
3|Hittites||hittite;hittite empire;hatti
3|Minoan civilization||minoans;minoan
3|Mycenaean Greece||mycenaeans;mycenae;mycenaean
3|Olmecs||olmec
3|Etruscan civilization||etruscans;etruscan;etruria
3|Celts||celtic;gauls
3|Akkadian Empire||akkad;akkadian;akkadians
3|Kingdom of Kush||kush;kushites;nubia;nubians
3|Kingdom of Aksum||aksum;axum;aksumite
3|Scythians||scythia;scythian
3|Parthian Empire||parthia;parthians
3|Maurya Empire||maurya;mauryan;mauryans
3|Ancient Israel|Israelites|israelites;hebrews;israel judah
4|Elam||elamites;elamite
4|Norte Chico civilization||caral;norte chico;caral supe
4|Teotihuacan
4|Zapotec civilization||zapotec;zapotecs
4|Moche culture||moche;mochica
4|Nazca culture||nazca;nasca
4|Chavín culture||chavin
4|Tiwanaku||tiahuanaco
4|Wari culture||wari;huari
4|Lydia||lydians
4|Philistines||philistia
4|Toltec||toltecs
4|Sabaeans||saba;sheba;sabaean
4|Nabataeans||nabateans;nabataean kingdom
4|Ancestral Puebloans||anasazi;puebloans;ancestral pueblo
4|Mississippian culture||mississippians;cahokia
4|Urartu||urartians
5|Mitanni
5|Amorites
5|Kassites
5|Hurrians
5|Dilmun
5|Garamantes
5|Nok culture||nok
5|Hopewell tradition||hopewell
5|Jōmon period||jomon
5|Gojoseon||old joseon
5|Dacians||dacia
5|Thracians||thrace
5|Illyrians||illyria
5|Picts
5|Sea Peoples
5|Çatalhöyük||catalhoyuk;catal huyuk
5|Göbekli Tepe||gobekli tepe
5|Sanxingdui
5|Bactria||bactrians;greco bactrian
5|Xiongnu
5|Kushan Empire||kushan;kushans
5|Mixtecs||mixtec
5|Cycladic culture||cycladic
6|Adena culture||adena
6|Yayoi period||yayoi
6|Vinča culture||vinca
6|Cucuteni–Trypillia culture||cucuteni;trypillia;tripolye
6|Natufian culture||natufian;natufians
6|Hallstatt culture||hallstatt
6|La Tène culture||la tene
6|Liangzhu culture||liangzhu
6|Đông Sơn culture||dong son
6|Funan
6|Sogdia||sogdians;sogdiana
6|Tartessos||tartessians
6|Paracas culture||paracas
6|Valdivia culture||valdivia
6|Jiroft culture||jiroft
6|Nuragic civilization||nuragic;nuraghe
6|Magan|Magan (civilization)
6|Saka||sakas
`,
nope:{
 'vikings|viking|norse':'Medieval (793&ndash;1066) &mdash; not ancient.',
 'atlantis|lemuria|mu':'Legendary &mdash; no ruins to dig!',
 'ottomans|ottoman empire|mongols|mongol empire|byzantine empire':'Impressive &mdash; but medieval or later, not ancient.'
}},

{id:'ww2', cat:'Wars & Battles', q:'Name a battle or campaign of World War II', hint:'1939&ndash;1945, any front',
list:`
1|D-Day|Normandy landings|d day;dday;normandy;normandy landings;overlord;omaha beach;utah beach;juno beach;gold beach;sword beach
1|Battle of Stalingrad||stalingrad
1|Attack on Pearl Harbor||pearl harbor;pearl harbour
1|Battle of Britain||britain
1|Battle of Midway||midway
2|Battle of the Bulge||bulge;ardennes;ardennes offensive
2|Battle of Iwo Jima||iwo jima
2|Battle of Okinawa||okinawa
2|Battle of Berlin||berlin
2|Battle of Dunkirk||dunkirk;dunkerque;dynamo;dunkirk evacuation
2|Battle of Kursk||kursk;citadel
2|Second Battle of El Alamein||el alamein;alamein
3|Battle of the Atlantic||atlantic
3|Siege of Leningrad||leningrad
3|Operation Market Garden||market garden;arnhem
3|Battle of Moscow||moscow
3|Guadalcanal campaign||guadalcanal
3|Battle of Monte Cassino||monte cassino;cassino
3|Battle of Leyte Gulf||leyte gulf;leyte
3|Battle of the Coral Sea||coral sea
3|Operation Barbarossa||barbarossa
3|Battle of France||france;fall france
3|Battle of Crete||crete
3|Warsaw Uprising
3|Battle of Anzio||anzio;shingle
4|Battles of Narvik||narvik
4|Norwegian campaign||norway;weserubung
4|Battle of the Philippine Sea||philippine sea;marianas turkey shoot
4|Battle of Tarawa||tarawa
4|Battle of Saipan||saipan
4|Battle of Peleliu||peleliu
4|Battle of Kasserine Pass||kasserine;kasserine pass
4|Battle of Hürtgen Forest||hurtgen;hurtgen forest
4|Siege of Sevastopol (1941–1942)||sevastopol
4|Siege of Tobruk||tobruk
4|Battle of Singapore||singapore
4|Battle of Bataan||bataan
4|Battle of Imphal||imphal
4|Battle of Kohima||kohima
4|Battle of the River Plate||river plate
4|Sinking of the Bismarck|Last battle of the battleship Bismarck|bismarck
4|Battle of Taranto||taranto
4|Allied invasion of Sicily||sicily;husky
4|Battle of Shanghai||shanghai
4|Battle of Nanking||nanking;nanjing
4|Operation Bagration||bagration
4|Dieppe Raid||dieppe
4|Siege of Malta (World War II)||malta
4|Siege of Bastogne||bastogne
5|Battle of Corregidor||corregidor
5|Battle of Cape Matapan||matapan
5|Battle of Greece||greece
5|Operation Dragoon||dragoon
5|Battle of the Java Sea||java sea
5|Battle of Savo Island||savo island
5|Battle of Wake Island||wake island
5|Battle of Hong Kong||hong kong
5|Battle of Wuhan||wuhan
5|Battles of Khalkhin Gol||khalkhin gol;nomonhan
5|Battle of Westerplatte||westerplatte
5|Siege of Warsaw (1939)||warsaw 1939
5|Battle of Gazala||gazala
5|Battle of the Scheldt||scheldt
5|Battle of Aachen||aachen
5|Battle of Remagen||remagen
5|Siege of Budapest||budapest
5|Battle of Königsberg||konigsberg
5|Battle of the Seelow Heights||seelow heights;seelow
5|Battles of Rzhev||rzhev
5|Battle of Smolensk (1941)||smolensk
5|Battle of Kiev (1941)||kiev;kyiv
5|Defense of Brest Fortress||brest fortress;brest
5|Battle of Prokhorovka||prokhorovka
5|Battle of the Denmark Strait||denmark strait
5|Battle of the North Cape||north cape
5|Attack on Mers-el-Kébir||mers el kebir
5|St Nazaire Raid||nazaire;chariot
5|Norwegian heavy water sabotage||gunnerside;heavy water;vemork;telemark
5|Battle of Drøbak Sound||drobak;oscarsborg;blucher
5|Battle of Manila (1945)||manila
5|Battle of Luzon||luzon
5|Battle of Kwajalein||kwajalein
5|Battle of Guam (1944)||guam
5|Kokoda Track campaign||kokoda
5|Battle for Caen||caen
5|Falaise pocket||falaise
5|Liberation of Paris||paris
5|Pointe du Hoc
6|Battle of Midtskogen||midtskogen
6|Battle of Vinjesvingen||vinjesvingen
6|Battle of Carentan||carentan
6|Bougainville campaign||bougainville
6|Battle of Tinian||tinian
6|Battle of Attu||attu
6|Battle of Milne Bay||milne bay
6|Battle of the Bismarck Sea||bismarck sea
6|Battle of Cape Esperance||cape esperance
6|Battle of the Santa Cruz Islands||santa cruz
6|Battle of the Eastern Solomons||eastern solomons
6|Battle of Keren||keren
6|Battle of Dakar||dakar
6|Battle of Madagascar||madagascar
6|Battle of Narva (1944)||narva
6|Battle of Tali-Ihantala||tali ihantala
6|Battle of Ortona||ortona
6|Battle of Suomussalmi||suomussalmi
6|Battle of the Bzura||bzura
`,
nope:{
 'somme|verdun|ypres|gallipoli|marne|passchendaele|jutland':'That\'s World War I.',
 'waterloo|trafalgar|gettysburg':'Wrong century!',
 'hiroshima|nagasaki':'An atomic bombing &mdash; not a battle.',
 'winter war':'A whole war &mdash; name one of its battles!'
}},

{id:'japan', cat:'Asia', q:'Name a period of Japanese history', hint:'From the Jōmon to the Reiwa era',
list:`
1|Edo period||edo;tokugawa;tokugawa period
1|Meiji era|Meiji (era)|meiji;meiji period
2|Heian period||heian
2|Sengoku period||sengoku;warring states
2|Shōwa era||showa;showa period
2|Kamakura period||kamakura
3|Jōmon period||jomon
3|Muromachi period||muromachi;ashikaga
3|Nara period||nara
3|Heisei
3|Taishō era||taisho;taisho period
4|Yayoi period||yayoi
4|Kofun period||kofun
4|Asuka period||asuka
4|Azuchi–Momoyama period||azuchi momoyama;momoyama;azuchi
4|Reiwa
5|Nanboku-chō period||nanboku cho;nanbokucho;northern southern courts
5|Kenmu Restoration||kenmu
5|Yamato period||yamato
6|Japanese Paleolithic||paleolithic;palaeolithic
6|Occupation of Japan||occupation;allied occupation
`,
nope:{
 'samurai|shogun|shogunate':'That\'s a class or a title &mdash; not a period.'
}},

{id:'crusades', cat:'Medieval', q:'Name a crusade', hint:'The numbered ones count &mdash; and plenty more',
list:`
1|First Crusade||1
1|Third Crusade||3
2|Second Crusade||2
2|Fourth Crusade||4
2|Children's Crusade||childrens;children
3|Fifth Crusade||5
3|Sixth Crusade||6
3|Seventh Crusade||7
3|Eighth Crusade||8
3|Ninth Crusade||9;lord edwards
3|Albigensian Crusade||albigensian;cathar
3|People's Crusade||peoples;peasants
3|Northern Crusades||northern;baltic
4|Crusade of 1101||1101
4|Alexandrian Crusade||alexandrian
4|Crusade of Varna||varna
4|Crusade of Nicopolis||nicopolis
4|Barons' Crusade||barons;1239
4|Shepherds' Crusade (1251)||shepherds;pastoureaux
4|Wendish Crusade||wendish
4|Livonian Crusade||livonian
4|Hussite Wars||hussite;hussite wars;anti hussite
4|Norwegian Crusade||norwegian;sigurd
4|Reconquista
5|Swedish crusades||swedish
5|Aragonese Crusade||aragonese
5|Despenser's Crusade||despenser;despensers;norwich
5|Crusade of 1197||1197;german
5|Prussian Crusade||prussian
5|Bosnian Crusade||bosnian
5|Barbary Crusade||barbary;mahdia
5|Smyrniote crusades||smyrniote;smyrna
6|Savoyard crusade||savoyard
6|Drenther Crusade||drenther
6|Stedinger Crusade||stedinger
6|Crusade of the Poor||poor;1309
6|Venetian Crusade||venetian
6|Crusade of 1129||1129;damascus
6|Balearic Islands expedition||balearic;pisan
`,
amb:{
 'templars|knights templar|hospitallers|teutonic knights|teutonic order':'That\'s a military order &mdash; name a crusade they fought in!'
}},

{id:'queens', cat:'Rulers', q:'Name a queen or empress who ruled in her own right', hint:'Reigning monarchs &mdash; not consorts',
list:`
1|Cleopatra||cleopatra 7
1|Elizabeth I||elizabeth 1;elizabeth tudor;virgin queen;gloriana
1|Queen Victoria||victoria
1|Elizabeth II||elizabeth 2;elizabeth
1|Catherine the Great||catherine;catherine 2;catherine great
2|Mary I of England||mary 1;bloody mary;mary tudor
2|Maria Theresa||maria theresia
2|Hatshepsut
2|Isabella I of Castile||isabella;isabella 1;isabella castile;isabella catholic
2|Mary, Queen of Scots||mary scots;mary stuart;mary queen scots
2|Boudica||boudicca;boadicea
3|Wu Zetian||wu zhao;empress wu
3|Anne, Queen of Great Britain||anne;queen anne
3|Mary II||mary 2
3|Christina, Queen of Sweden||christina;kristina;christina sweden
3|Zenobia
3|Empress Dowager Cixi||cixi;tzu hsi;dowager cixi
3|Liliʻuokalani||liliuokalani
3|Margrethe II||margrethe;margrethe 2
3|Eleanor of Aquitaine||eleanor aquitaine
4|Nefertiti
4|Margaret I of Denmark||margaret 1;margrete 1;margaret denmark;margrete
4|Tamar of Georgia||tamar;tamara
4|Empress Matilda||matilda;maud
4|Juliana of the Netherlands||juliana
4|Wilhelmina of the Netherlands||wilhelmina
4|Beatrix of the Netherlands||beatrix
4|Ranavalona I||ranavalona;ranavalona 1
4|Nzinga of Ndongo and Matamba||nzinga;njinga;anna nzinga
4|Amina|Amina|queen amina;amina zazzau
4|Rani of Jhansi||lakshmibai;laxmibai;rani jhansi
4|Razia Sultana||razia;raziya
4|Irene of Athens||irene
4|Queen of Sheba||sheba
4|Elizabeth of Russia||elizabeth russia;elizabeth petrovna
4|Lady Jane Grey||jane grey
5|Sobekneferu||neferusobek
5|Zoe Porphyrogenita||zoe
5|Empress Suiko||suiko
5|Queen Seondeok of Silla||seondeok
5|Isabella II of Spain||isabella 2
5|Maria I of Portugal||maria 1
5|Joanna of Castile||juana la loca;joanna mad;joanna castile
5|Dido
5|Artemisia I of Caria||artemisia;artemisia 1
5|Anna of Russia||anna russia;anna ioannovna
5|Catherine I of Russia||catherine 1
5|Sālote Tupou III||salote;salote tupou
5|Zewditu||zauditu
6|Twosret||tausret
6|Empress Kōken||koken;shotoku
6|Queen Jindeok of Silla||jindeok
6|Queen Jinseong of Silla||jinseong
6|Maria II of Portugal||maria 2
6|Urraca of León and Castile||urraca
6|Petronilla of Aragon||petronilla
6|Joanna I of Naples||joanna 1 naples
6|Joanna II of Naples||joanna 2 naples
6|Mary of Burgundy||mary burgundy
6|Anne of Brittany||anne brittany
6|Ulrika Eleonora, Queen of Sweden||ulrika eleonora
6|Theodora Porphyrogenita||theodora porphyrogenita
6|Berenice IV||berenice 4
6|Salome Alexandra||salome alexandra
6|Cleopatra Thea||cleopatra thea
6|Ranavalona III||ranavalona 3
`,
nope:{
 'marie antoinette|josephine|anne boleyn|catherine aragon|nefertari|theodora|empress theodora|livia':'A queen or empress consort &mdash; she never ruled in her own right.',
 'margaret thatcher|thatcher|indira gandhi|golda meir|angela merkel':'A head of government &mdash; this dig is for reigning monarchs.',
 'helen troy|guinevere|daenerys':'Legend or fiction &mdash; no reign to dig up.'
},
amb:{
 'mary':'Which Mary? There are a few!'
}},

{id:'ruins', cat:'Ancient World', q:'Name an ancient city that now lies in ruins', hint:'Places you can only visit as ruins',
list:`
1|Pompeii
1|Troy
1|Machu Picchu||machu pichu
1|Petra
2|Babylon
2|Angkor||angkor wat;angkor thom
2|Carthage|Ancient Carthage
2|Chichen Itza||chichen
2|Teotihuacan
2|Tikal
3|Ur|Ur
3|Persepolis
3|Mohenjo-daro||mohenjo daro;mohenjodaro
3|Knossos
3|Ephesus
3|Palmyra
3|Herculaneum
3|Mycenae
3|Great Zimbabwe
3|Nineveh
3|Uruk
3|Delphi
3|Olympia|Olympia, Greece|olympia
3|Tenochtitlan||tenochtitlán
4|Harappa
4|Memphis|Memphis, Egypt
4|Thebes|Thebes, Egypt|thebes egypt
4|Amarna||akhetaten;tell el amarna
4|Hattusa||hattusas
4|Jericho|Tell es-Sultan|tell es sultan
4|Leptis Magna||lepcis magna
4|Pergamon||pergamum
4|Meroë||meroe
4|Chan Chan
4|Copán||copan
4|Palenque
4|Cahokia
4|Mesa Verde|Mesa Verde National Park
4|Hampi||vijayanagara
4|Bagan||pagan
4|Ctesiphon
4|Akrotiri|Akrotiri (prehistoric city)
4|Delos
4|Ugarit
4|Baalbek
4|Jerash||gerasa
4|Caral
4|Nan Madol
4|Tiwanaku||tiahuanaco
5|Timgad
5|Volubilis
5|Ebla
5|Mari|Mari, Syria
5|Pasargadae
5|Susa
5|Merv
5|Ani
5|Hierapolis
5|Aphrodisias
5|Dura-Europos||dura europos
5|Hatra
5|Nimrud
5|Assur||ashur
5|Lagash
5|Eridu
5|Kish|Kish (Sumer)
5|Nippur
5|Paestum
5|Ostia Antica||ostia
5|Sabratha
5|Cyrene|Cyrene, Libya
5|Tanis
5|Abydos|Abydos, Egypt
5|Dholavira
5|Lothal
5|Sigiriya
5|Anuradhapura
5|Ayutthaya|Ayutthaya Historical Park
5|Sukhothai|Sukhothai Historical Park
5|Mỹ Sơn||my son
5|Xanadu||shangdu
5|Yinxu||anyang;yin
5|Taxila
5|Nalanda|Nalanda mahavihara
5|Sardis
5|Gordion
5|Miletus
5|Uxmal
5|Calakmul
5|Monte Albán||monte alban
5|Tulum
5|Ciudad Perdida
5|Kuélap||kuelap
5|Chaco Canyon|Chaco Culture National Historical Park|pueblo bonito;chaco
5|L'Anse aux Meadows||lanse aux meadows;anse aux meadows
5|Skara Brae
5|Hedeby||haithabu
6|Termessos
6|Priene
6|Xanthos
6|Tiryns
6|Pylos|Palace of Nestor|nestor palace
6|Phaistos
6|Gournia
6|Kerma
6|Napata
6|El Mirador
6|Tula|Tula (Mesoamerican site)
6|Mitla
6|Caracol
6|Mayapan
6|Pachacamac
6|Choquequirao
6|Vilcabamba|Vilcabamba, Peru
6|Birka
6|Mystras||mistra
6|Gonur Depe
6|Shahr-i Sokhta||shahr sokhta;burnt city
6|Aï Khanoum||ai khanoum;ai khanum
6|Kalibangan
6|Rakhigarhi
`,
nope:{
 'atlantis|el dorado|shangri la|camelot':'Legendary &mdash; never found!',
 'rome|athens|jerusalem|alexandria|istanbul|constantinople|damascus|luxor':'Ancient, yes &mdash; but still very much alive!',
 'stonehenge':'A monument, not a city.'
}}
];

/* Dug Up — more prompts: people and events of the modern era */
PROMPT_DATA.push(
{id:'coldwar', cat:'Modern History', q:'Name an event of the Cold War', hint:'1947&ndash;1991',
list:`
1|Cuban Missile Crisis||cuban missile;missile crisis
1|Fall of the Berlin Wall||berlin wall;fall berlin wall
1|Space Race||space race
1|Korean War||korea
1|Vietnam War||vietnam
2|Berlin Blockade||berlin airlift;blockade berlin
2|Bay of Pigs Invasion||bay pigs
2|Sputnik 1||sputnik
2|Moon landing|Apollo 11|apollo 11;moon landing
2|Construction of the Berlin Wall|Berlin Wall|berlin wall built
2|Prague Spring||prague spring
2|Hungarian Revolution of 1956||hungarian revolution;hungarian uprising
2|Marshall Plan
2|McCarthyism||red scare;mccarthy
2|Soviet–Afghan War||soviet afghan war;afghan war
2|Dissolution of the Soviet Union||collapse soviet union;fall ussr
2|Chernobyl disaster||chernobyl
3|Truman Doctrine||truman doctrine
3|Founding of NATO|NATO|nato
3|Warsaw Pact
3|1960 U-2 incident||u 2 incident;gary powers
3|Iron Curtain speech|Sinews of Peace|iron curtain;sinews peace
3|Able Archer 83||able archer
3|Solidarity|Solidarity (Polish trade union)|solidarnosc
3|Reykjavík Summit||reykjavik summit;reykjavik
3|Helsinki Accords||helsinki
3|SALT I||salt 1;strategic arms limitation
3|Strategic Defense Initiative||star wars program;sdi
3|Kitchen Debate||kitchen debate
3|Suez Crisis||suez
3|1983 Soviet nuclear false alarm incident||stanislav petrov;petrov
3|Checkpoint Charlie standoff|Standoff at Checkpoint Charlie|checkpoint charlie
3|Operation Paperclip||paperclip
3|Iran–Contra affair||iran contra
3|Yom Kippur War||yom kippur
3|Malta Summit||malta summit
3|Revolutions of 1989||1989;autumn nations
3|Velvet Revolution||velvet revolution
3|Baltic Way||baltic way;baltic chain
3|Greek Civil War||greek civil war
3|Chinese Civil War||chinese civil war
3|Glienicke Bridge exchange|Glienicke Bridge|bridge spies;glienicke bridge
4|Venona project||venona
4|Rosenberg trial|Julius and Ethel Rosenberg|rosenbergs
4|Gouzenko Affair||gouzenko
4|Hollywood blacklist||hollywood ten;blacklist
4|Sino-Soviet split||sino soviet split
4|1956 Poznań protests||poznan protests
4|Tet Offensive||tet
4|Fall of Saigon||saigon
4|Soviet invasion of Czechoslovakia|Warsaw Pact invasion of Czechoslovakia|invasion czechoslovakia
4|Gulf of Tonkin incident||tonkin
4|Pueblo incident||uss pueblo
4|Korean Air Lines Flight 007||kal 007
4|1980 Summer Olympics boycott||olympic boycott 1980;moscow boycott
4|Ping-pong diplomacy||ping pong diplomacy
4|Nixon's visit to China|1972 visit by Richard Nixon to China|nixon china
4|Détente||detente
4|Anti-Ballistic Missile Treaty||abm treaty
4|INF Treaty||intermediate range nuclear forces
4|Berlin crisis of 1961||berlin crisis
4|Hungarian border opening|Pan-European Picnic|pan european picnic
4|Angolan Civil War||angola
4|Grenada invasion|United States invasion of Grenada|grenada
4|Cuban Revolution||cuban revolution
4|Domino theory||domino theory
4|Mutual assured destruction||mad;mutual assured destruction
4|Duck and cover||duck cover
4|Space Shuttle Challenger disaster||challenger
5|Operation Ajax|1953 Iranian coup d'état|ajax;iran coup 1953
5|1954 Guatemalan coup d'état|1954 Guatemalan coup d'état|guatemala coup
5|Congo Crisis||congo crisis
5|Malayan Emergency||malayan emergency
5|Taiwan Strait crises|First Taiwan Strait Crisis|taiwan strait crisis
5|Operation Gladio||gladio
5|Operation Ivy Bells||ivy bells
5|K-19 accident|Soviet submarine K-19|k 19
5|Project Azorian||azorian;glomar explorer
5|Thule incident|1968 Thule Air Base B-52 crash|thule
5|Palomares incident|1966 Palomares B-52 crash|palomares
5|Norwegian rocket incident|Norwegian rocket incident|black brant
5|Arne Treholt affair|Arne Treholt|treholt
6|Operation Anadyr||anadyr
6|Brezhnev Doctrine||brezhnev doctrine
6|Sinatra Doctrine||sinatra doctrine
6|Hallstein Doctrine||hallstein
`,
nope:{
 'world war 2|pearl harbor|d day|hiroshima':'Before the Cold War started (World War II).',
 '9 11|september 11|iraq war':'After the Cold War ended in 1991.',
 'cold war':'Very good &mdash; now name an event in it!'
}},

{id:'disasters', cat:'Modern History', q:'Name a famous historical disaster', hint:'Natural or man-made, any era',
list:`
1|Eruption of Mount Vesuvius in 79 AD|Eruption of Mount Vesuvius in 79 AD|vesuvius;pompeii eruption;pompeii
1|Sinking of the Titanic|Titanic|titanic
1|Chernobyl disaster||chernobyl
1|Great Fire of London||fire london
2|1755 Lisbon earthquake||lisbon earthquake
2|Great Chicago Fire||chicago fire
2|1906 San Francisco earthquake||san francisco earthquake
2|1883 eruption of Krakatoa||krakatoa
2|1815 eruption of Mount Tambora||tambora;year without summer
2|Hindenburg disaster||hindenburg
2|Black Death||plague;black plague
2|Dust Bowl
2|Great Famine (Ireland)||irish potato famine;potato famine
2|Space Shuttle Challenger disaster||challenger
2|Fukushima nuclear accident|Fukushima nuclear accident|fukushima
2|2004 Indian Ocean earthquake and tsunami||boxing day tsunami;indian ocean tsunami
2|Hurricane Katrina||katrina
3|Johnstown Flood||johnstown
3|1900 Galveston hurricane||galveston
3|Tunguska event||tunguska
3|Great Molasses Flood||molasses
3|Halifax Explosion||halifax
3|1908 Messina earthquake||messina
3|1923 Great Kantō earthquake||kanto earthquake
3|1976 Tangshan earthquake||tangshan
3|1980 eruption of Mount St. Helens||mount st helens;st helens
3|Bhopal disaster||bhopal
3|Aberfan disaster||aberfan
3|Great Fire of Rome||fire rome
3|1556 Shaanxi earthquake||shaanxi
3|Minoan eruption||thera;santorini eruption
3|Great Storm of 1703||great storm
3|Laki|Laki|laki eruption
3|1902 eruption of Mount Pelée||mount pelee;pelee
3|Armero tragedy||nevado del ruiz;armero
3|Tenerife airport disaster||tenerife
3|Apollo 1||apollo 1 fire
3|1931 China floods||china floods
3|Banqiao Dam failure||banqiao
3|Storegga Slide||storegga
3|Exxon Valdez oil spill||exxon valdez
3|Deepwater Horizon oil spill||deepwater horizon
3|Three Mile Island accident||three mile island
3|Sinking of the Lusitania|RMS Lusitania|lusitania
3|Great Smog of London||great smog
3|Triangle Shirtwaist Factory fire||triangle shirtwaist
3|Space Shuttle Columbia disaster||columbia
3|Lynmouth Flood||lynmouth
4|Great Fire of New York (1776)||new york fire 1776
4|Peshtigo fire||peshtigo
4|1970 Bhola cyclone||bhola cyclone
4|1991 Bangladesh cyclone||bangladesh cyclone
4|Cyclone Nargis||nargis
4|2010 Haiti earthquake||haiti earthquake
4|2011 Tōhoku earthquake and tsunami||tohoku;japan tsunami 2011
4|1953 North Sea flood||north sea flood;watersnoodramp
4|St. Lucia's flood||st lucias flood
4|Grote Mandrenke||grote mandrenke
4|Kyshtym disaster||kyshtym
4|Windscale fire||windscale
4|Seveso disaster||seveso
4|Love Canal||love canal
4|Minamata disease||minamata
4|Texas City disaster||texas city
4|Port Chicago disaster||port chicago
4|1999 İzmit earthquake||izmit
4|1985 Mexico City earthquake||mexico city earthquake
4|1960 Valdivia earthquake||valdivia;great chilean earthquake
4|1964 Alaska earthquake||alaska earthquake;good friday earthquake
4|Lake Nyos disaster||lake nyos
4|Vajont Dam||vajont
4|St. Francis Dam||st francis dam
4|Tay Bridge disaster||tay bridge
4|Sinking of the Wilhelm Gustloff|MV Wilhelm Gustloff|wilhelm gustloff
4|Sinking of MV Doña Paz|MV Doña Paz|dona paz
4|MS Estonia||estonia
4|Alexander L. Kielland platform disaster|Alexander L. Kielland (platform)|alexander kielland;kielland
4|Scandinavian Star||scandinavian star
4|1934 Tafjord rockslide|Tafjord|tafjord
4|1509 Constantinople earthquake||constantinople earthquake
5|Plague of Justinian||justinian plague
5|Antonine Plague||antonine plague
5|Eldgjá||eldgja
5|Great Plague of London||great plague
5|1918 flu pandemic|Spanish flu|spanish flu;1918 flu
5|Volcanic winter of 536||536
5|Great Fire of Meireki||meireki
5|Fire of Moscow (1812)||moscow 1812
5|Great Hanshin earthquake||kobe earthquake;great hanshin
6|Cocoliztli epidemics||cocoliztli
6|Great Hinckley Fire||hinckley fire
6|Lake Peigneur||lake peigneur
`,
nope:{
 'atlantis':'A legend &mdash; no record of it sinking.',
 'noahs flood|great flood':'A story from scripture and myth &mdash; this dig wants recorded history.',
 'covid|covid 19':'Sadly real &mdash; but try the pandemics dig.'
}}
);

/* Dug Up — more prompts: art and ideas */
PROMPT_DATA.push(
{id:'composers', cat:'Art & Ideas', q:'Name a classical composer born before 1900', hint:'From medieval chant to the late Romantics',
list:`
1|Wolfgang Amadeus Mozart||mozart;amadeus
1|Ludwig van Beethoven||beethoven
1|Johann Sebastian Bach||bach;js bach
2|Antonio Vivaldi||vivaldi
2|Pyotr Ilyich Tchaikovsky||tchaikovsky;tchaikovski;chaikovsky
2|Frédéric Chopin||chopin
2|George Frideric Handel||handel;haendel
2|Richard Wagner||wagner
2|Johannes Brahms||brahms
2|Joseph Haydn||haydn
2|Franz Schubert||schubert
2|Giuseppe Verdi||verdi
2|Claude Debussy||debussy
2|Franz Liszt||liszt
2|Sergei Rachmaninoff||rachmaninoff;rachmaninov
2|Gustav Mahler||mahler
2|Giacomo Puccini||puccini
2|Edvard Grieg||grieg
3|Johann Strauss II||strauss;johann strauss
3|Richard Strauss
3|Maurice Ravel||ravel
3|Igor Stravinsky||stravinsky
3|Gioachino Rossini||rossini
3|Robert Schumann||schumann
3|Felix Mendelssohn||mendelssohn
3|Antonín Dvořák||dvorak
3|Modest Mussorgsky||mussorgsky
3|Nikolai Rimsky-Korsakov||rimsky korsakov
3|Jean Sibelius||sibelius
3|Edward Elgar||elgar
3|Camille Saint-Saëns||saint saens
3|Georges Bizet||bizet
3|Erik Satie||satie
3|Hector Berlioz||berlioz
3|Henry Purcell||purcell
3|Claudio Monteverdi||monteverdi
3|Sergei Prokofiev||prokofiev
3|George Gershwin||gershwin
3|Gustav Holst||holst
3|Niccolò Paganini||paganini
3|Clara Schumann
3|Hildegard of Bingen||hildegard
3|Béla Bartók||bartok
3|Arnold Schoenberg||schoenberg;schonberg
3|Johann Pachelbel||pachelbel
3|Scott Joplin||joplin
3|Antonio Salieri||salieri
3|Giovanni Pierluigi da Palestrina||palestrina
4|Ralph Vaughan Williams||vaughan williams
4|Jacques Offenbach||offenbach
4|Georg Philipp Telemann||telemann
4|Domenico Scarlatti||scarlatti
4|Christoph Willibald Gluck||gluck
4|Gaetano Donizetti||donizetti
4|Vincenzo Bellini||bellini
4|Anton Bruckner||bruckner
4|Gabriel Fauré||faure
4|Alexander Borodin||borodin
4|Bedřich Smetana||smetana
4|Alexander Scriabin||scriabin
4|Charles Gounod||gounod
4|Jean-Baptiste Lully||lully
4|Jean-Philippe Rameau||rameau
4|Arcangelo Corelli||corelli
4|Tomaso Albinoni||albinoni
4|Carl Orff||orff
4|John Philip Sousa||sousa
4|Leoš Janáček||janacek
4|Carl Nielsen||nielsen
4|Mikhail Glinka||glinka
4|Thomas Tallis||tallis
4|William Byrd||byrd
4|Josquin des Prez||josquin
4|Gregorio Allegri||allegri
4|Carl Maria von Weber||weber
4|César Franck||franck
4|Max Bruch||bruch
4|Arthur Sullivan||sullivan
4|Ottorino Respighi||respighi
4|Manuel de Falla||falla
4|Heitor Villa-Lobos||villa lobos
4|Ole Bull
4|Fanny Mendelssohn
4|Engelbert Humperdinck (composer)|Engelbert Humperdinck (composer)|humperdinck
4|Leopold Mozart
4|Carl Philipp Emanuel Bach||cpe bach
5|Guillaume de Machaut||machaut
5|John Dowland||dowland
5|Carlo Gesualdo||gesualdo
5|François Couperin||couperin
5|Luigi Boccherini||boccherini
5|Johann Nepomuk Hummel||hummel
5|Carl Czerny||czerny
5|Giacomo Meyerbeer||meyerbeer
5|Hugo Wolf
5|Hubert Parry||parry
5|Frederick Delius||delius
5|Isaac Albéniz||albeniz
5|Enrique Granados||granados
5|Ruggero Leoncavallo||leoncavallo
5|Pietro Mascagni||mascagni
5|Jules Massenet||massenet
5|Léo Delibes||delibes
5|Amy Beach
5|Ethel Smyth||smyth
5|Lili Boulanger
5|Nadia Boulanger
5|Cécile Chaminade||chaminade
5|Barbara Strozzi||strozzi
5|Joseph Bologne, Chevalier de Saint-Georges|Joseph Bologne, Chevalier de Saint-Georges|chevalier saint georges;joseph bologne
5|Samuel Coleridge-Taylor||coleridge taylor
5|Johan Svendsen||svendsen
5|Niels Gade||gade
5|Franz Berwald||berwald
5|Alessandro Scarlatti
5|Perotin||perotinus
5|Thomas Weelkes||weelkes
6|Francesca Caccini||caccini
6|Agathe Backer Grøndahl||backer grondahl
6|Halfdan Kjerulf||kjerulf
6|Christian Sinding||sinding
6|Rikard Nordraak||nordraak
6|Hugo Alfvén||alfven
6|Ernest Chausson||chausson
6|Emmanuel Chabrier||chabrier
6|Rued Langgaard||langgaard
6|Léonin||leoninus
`,
amb:{'boulanger':'Lili or Nadia Boulanger? Add a first name!'},
nope:{
 'shostakovich|john williams|hans zimmer|philip glass|aaron copland|copland|leonard bernstein|ennio morricone|benjamin britten':'Born in the 1900s &mdash; this dig stops at 1900.',
 'elvis|beatles|taylor swift|abba':'Pop, not classical!'
}},

{id:'enlight', cat:'Art & Ideas', q:'Name a thinker of the Enlightenment', hint:'Philosophers, writers and scientists, c. 1650&ndash;1800',
list:`
1|Voltaire
1|John Locke||locke
1|Jean-Jacques Rousseau||rousseau
1|Immanuel Kant||kant
2|Isaac Newton||newton
2|Montesquieu||charles montesquieu
2|Adam Smith
2|David Hume||hume
2|Thomas Hobbes||hobbes
2|Denis Diderot||diderot
2|Benjamin Franklin||franklin
2|Thomas Paine||paine
2|Mary Wollstonecraft||wollstonecraft
2|Thomas Jefferson||jefferson
2|Baruch Spinoza||spinoza
2|René Descartes||descartes
2|Gottfried Wilhelm Leibniz||leibniz
2|Edmund Burke||burke
3|Jean le Rond d'Alembert||d alembert;dalembert;alembert
3|Marquis de Condorcet||condorcet
3|Cesare Beccaria||beccaria
3|Gotthold Ephraim Lessing||lessing
3|Johann Gottfried Herder||herder
3|Giambattista Vico||vico
3|Pierre Bayle||bayle
3|Baron d'Holbach||holbach;d holbach
3|Émilie du Châtelet||du chatelet;chatelet
3|Olympe de Gouges||gouges
3|Jeremy Bentham||bentham
3|Mikhail Lomonosov||lomonosov
3|Carl Linnaeus||linnaeus;carl linne
3|Jonathan Swift||swift
3|Samuel Johnson
3|Edward Gibbon||gibbon
3|Johann Wolfgang von Goethe||goethe
3|Friedrich Schiller||schiller
3|Hugo Grotius||grotius
3|George Berkeley||berkeley
3|Thomas Malthus||malthus
3|Joseph Priestley||priestley
3|Benjamin Rush||rush
4|Claude Adrien Helvétius||helvetius
4|Moses Mendelssohn||mendelssohn
4|Francis Hutcheson||hutcheson
4|Adam Ferguson||ferguson
4|Thomas Reid||reid
4|Anne Robert Jacques Turgot||turgot
4|François Quesnay||quesnay
4|Ludvig Holberg||holberg
4|Emanuel Swedenborg||swedenborg
4|Samuel von Pufendorf||pufendorf
4|Abbé Sieyès||sieyes
4|Germaine de Staël||madame de stael;stael
4|Bernard Mandeville||mandeville
4|William Godwin||godwin
4|Pierre Louis Maupertuis||maupertuis
4|Georges-Louis Leclerc, Comte de Buffon||buffon
4|Julien Offray de La Mettrie||la mettrie
4|Étienne Bonnot de Condillac||condillac
5|Anders Chydenius||chydenius
5|Christian Wolff (philosopher)|Christian Wolff (philosopher)|christian wolff;wolff
5|Christian Thomasius||thomasius
5|Guillaume Thomas François Raynal||abbe raynal;raynal
5|Earl of Shaftesbury|Anthony Ashley-Cooper, 3rd Earl of Shaftesbury|shaftesbury
5|Richard Price||price
5|Mary Astell||astell
5|Catharine Macaulay||macaulay
5|Johann Georg Hamann||hamann
5|Friedrich Heinrich Jacobi||jacobi
5|Pietro Verri||verri
6|Gaetano Filangieri||filangieri
6|Antonio Genovesi||genovesi
6|Ignacy Krasicki||krasicki
6|Hugo Kołłątaj||kollataj
6|Benito Jerónimo Feijóo||feijoo
6|Gaspar Melchor de Jovellanos||jovellanos
6|Peter Forsskål||forsskal
`,
nope:{
 'socrates|plato|aristotle':'Ancient Greece &mdash; about 2,000 years too early.',
 'karl marx|marx|nietzsche|hegel':'19th century &mdash; after the Enlightenment.',
 'galileo|copernicus':'The Scientific Revolution came first &mdash; just before the Enlightenment.'
}},

{id:'paintings', cat:'Art & Ideas', q:'Name a famous painting made before 1900', hint:'Title of the painting, not the painter',
list:`
1|Mona Lisa||la gioconda;gioconda
1|The Starry Night||starry night
1|The Last Supper|The Last Supper (Leonardo)|last supper
1|The Birth of Venus||birth venus
1|Girl with a Pearl Earring||pearl earring
2|The Night Watch||night watch
2|The Creation of Adam||creation adam
2|Sistine Chapel ceiling||sistine chapel
2|The Garden of Earthly Delights||garden earthly delights
2|Las Meninas||meninas
2|The Scream||scream
2|Liberty Leading the People||liberty leading people
2|The Great Wave off Kanagawa||great wave
2|Water Lilies|Water Lilies (Monet series)|water lilies
2|Impression, Sunrise||impression sunrise
2|The School of Athens||school athens
2|Arnolfini Portrait||arnolfini
2|Sunflowers|Sunflowers (Van Gogh series)|sunflowers
2|Primavera|Primavera (Botticelli)|primavera
2|Wanderer above the Sea of Fog||wanderer above sea fog;wanderer
2|The Raft of the Medusa||raft medusa
2|The Third of May 1808||third may 1808;third may
2|Napoleon Crossing the Alps||napoleon crossing alps
2|Washington Crossing the Delaware||washington crossing delaware
2|Whistler's Mother||whistlers mother;arrangement grey black
2|The Hay Wain||hay wain
3|The Fighting Temeraire||fighting temeraire;temeraire
3|Olympia|Olympia (Manet)|olympia
3|Le Déjeuner sur l'herbe||dejeuner sur lherbe;luncheon on grass;dejeuner sur herbe
3|A Sunday Afternoon on the Island of La Grande Jatte||sunday afternoon;grande jatte
3|Bal du moulin de la Galette||moulin galette
3|The Gleaners||gleaners
3|Ophelia|Ophelia (painting)|ophelia
3|The Lady of Shalott|The Lady of Shalott (painting)|lady shalott
3|The Hunters in the Snow||hunters snow
3|The Tower of Babel (Bruegel)|The Tower of Babel (Bruegel)|tower babel
3|Netherlandish Proverbs||netherlandish proverbs
3|The Ambassadors|The Ambassadors (Holbein)|ambassadors
3|Ghent Altarpiece||ghent altarpiece;adoration mystic lamb
3|The Death of Marat||death marat
3|Oath of the Horatii||oath horatii
3|The Swing|The Swing (Fragonard)|swing
3|Saturn Devouring His Son||saturn devouring his son;saturn
3|The Nightmare||nightmare
3|The Anatomy Lesson of Dr. Nicolaes Tulp||anatomy lesson
3|The Milkmaid|The Milkmaid (Vermeer)|milkmaid
3|The Calling of Saint Matthew||calling saint matthew;calling st matthew
3|Judith Slaying Holofernes (Artemisia Gentileschi)|Judith Slaying Holofernes (Artemisia Gentileschi)|judith slaying holofernes;judith beheading holofernes
3|The Sleeping Gypsy||sleeping gypsy
3|The Card Players||card players
3|The Potato Eaters||potato eaters
3|Café Terrace at Night||cafe terrace;cafe terrace at night
3|Bedroom in Arles||bedroom arles
3|Irises|Irises (painting)|irises
3|Lady with an Ermine||lady ermine
3|Salvator Mundi|Salvator Mundi (Leonardo)|salvator mundi
3|Virgin of the Rocks||madonna rocks;virgin rocks
3|Venus of Urbino||venus urbino
3|The Last Judgment|The Last Judgment (Michelangelo)|last judgment;last judgement
3|The Blue Boy||blue boy
3|The Goldfinch|The Goldfinch (painting)|goldfinch
3|The Maja Desnuda|La maja desnuda|naked maja;maja desnuda
3|Grande Odalisque||grande odalisque
3|The Angelus|The Angelus (painting)|angelus
3|The Coronation of Napoleon||coronation napoleon
3|Madame X|Madame X (Madame Pierre Gautreau)|madame x
3|Sistine Madonna||sistine madonna
3|L'Origine du monde||origin world;lorigine du monde
3|Wheatfield with Crows||wheatfield crows
3|A Bar at the Folies-Bergère||bar folies bergere;folies bergere
3|Luncheon of the Boating Party||luncheon boating party
3|Woman with a Parasol||woman parasol
3|The Laughing Cavalier||laughing cavalier
4|Rain, Steam and Speed||rain steam speed
4|The Slave Ship||slave ship
4|Flaming June||flaming june
4|The Death of General Wolfe||death general wolfe
4|Watson and the Shark||watson shark
4|Starry Night Over the Rhône||starry night over rhone
4|Bathers at Asnières||bathers asnieres
4|The Child's Bath||childs bath
4|Paris Street; Rainy Day||paris street rainy day
4|The Floor Scrapers||floor scrapers
4|Dance at Bougival||dance bougival
4|Rouen Cathedral|Rouen Cathedral (Monet series)|rouen cathedral
4|Haystacks|Haystacks (Monet series)|haystacks;wheatstacks
4|The Sick Child|The Sick Child (Munch)|sick child
4|Along the River During the Qingming Festival||qingming festival;along river
4|Fine Wind, Clear Morning||red fuji;fine wind clear morning
4|Barge Haulers on the Volga||barge haulers
4|Ivan the Terrible and His Son Ivan||ivan terrible his son
4|The Ninth Wave||ninth wave
4|The Jewish Bride||jewish bride
4|The Art of Painting||art painting;allegory painting
4|The Little Street||little street
4|View of Delft||view delft
4|The Burial of the Count of Orgaz||burial count orgaz
4|View of Toledo||view toledo
4|The Sea of Ice||sea ice
4|Lamentation of Christ (Mantegna)|Lamentation of Christ (Mantegna)|dead christ;lamentation christ
4|Medusa (Caravaggio)|Medusa (Caravaggio)|medusa
4|Bacchus (Caravaggio)|Bacchus (Caravaggio)|bacchus
4|Doni Tondo||doni tondo
4|Bacchus and Ariadne||bacchus ariadne
4|The Flagellation of Christ (Piero della Francesca)|Flagellation of Christ (Piero della Francesca)|flagellation christ
4|A Burial at Ornans||burial ornans
4|The Turkish Bath||turkish bath
4|The Death of Sardanapalus||death sardanapalus
4|Pilgrimage to Cythera||embarkation cythera;pilgrimage cythera
4|Proserpine|Proserpine (Rossetti painting)|proserpine
4|The Light of the World|The Light of the World (painting)|light world
4|A Rake's Progress||rakes progress
4|The Monarch of the Glen|The Monarch of the Glen (painting)|monarch glen
4|An Experiment on a Bird in the Air Pump||experiment bird air pump;air pump
4|Whistlejacket
4|Nocturne in Black and Gold – The Falling Rocket|Nocturne in Black and Gold – The Falling Rocket|falling rocket;nocturne black gold
4|The Gross Clinic||gross clinic
4|The Gulf Stream|The Gulf Stream (painting)|gulf stream
4|The Japanese Footbridge|The Water Lily Pond (Monet)|japanese footbridge
4|The Cradle|The Cradle (Morisot)|cradle
4|Self-Portrait with Bandaged Ear||bandaged ear
4|The Kiss (Hayez)|The Kiss (Hayez)|kiss hayez
5|Bridal Procession on the Hardangerfjord|Bridal Procession on the Hardangerfjord|brudeferden hardanger;bridal procession
5|Boyarynya Morozova||boyarynya morozova
5|Morning in a Pine Forest||morning pine forest
5|The Clothed Maja|La maja vestida|clothed maja;maja vestida
5|Transfiguration|Transfiguration (Raphael)|transfiguration
5|Supper at Emmaus (Caravaggio, London)|Supper at Emmaus (Caravaggio, London)|supper emmaus
5|The Boyhood of Raleigh||boyhood raleigh
5|The Death of Chatterton|Chatterton (painting)|death chatterton
5|Carnation, Lily, Lily, Rose||carnation lily lily rose
5|The Oxbow||oxbow
5|Breezing Up (A Fair Wind)|Breezing Up (A Fair Wind)|breezing up
5|The Banjo Lesson||banjo lesson
5|The Stone Breakers||stone breakers
6|The Hireling Shepherd||hireling shepherd
6|Isle of the Dead|Isle of the Dead (painting)|isle dead
6|Christ's Entry into Brussels in 1889||christs entry brussels
`,
nope:{
 'guernica|kiss klimt|american gothic|nighthawks|persistence memory|son man|christinas world|campbells soup cans':'Painted after 1900 &mdash; dig a little older!',
 'thinker|venus milo|pieta':'A sculpture, not a painting!',
 'kiss':'Klimt\'s <i>The Kiss</i> is from 1908 &mdash; just too young. (Hayez painted one in 1859, though!)'
}},

{id:'impress', cat:'Art & Ideas', q:'Name an Impressionist or Post-Impressionist painter', hint:'Roughly 1860&ndash;1905',
list:`
1|Claude Monet||monet
1|Vincent van Gogh||van gogh;gogh;vincent
2|Pierre-Auguste Renoir||renoir
2|Edgar Degas||degas
2|Paul Cézanne||cezanne
2|Paul Gauguin||gauguin
2|Georges Seurat||seurat
2|Édouard Manet||manet
2|Camille Pissarro||pissarro
2|Henri de Toulouse-Lautrec||toulouse lautrec;lautrec
3|Berthe Morisot||morisot
3|Mary Cassatt||cassatt
3|Alfred Sisley||sisley
3|Gustave Caillebotte||caillebotte
3|Paul Signac||signac
3|Frédéric Bazille||bazille
3|Henri Rousseau||rousseau;le douanier rousseau
3|Pierre Bonnard||bonnard
3|Édouard Vuillard||vuillard
3|Odilon Redon||redon
3|Henri Matisse||matisse
3|Edvard Munch||munch
3|Joaquín Sorolla||sorolla
3|Childe Hassam||hassam
3|Max Liebermann||liebermann
4|Émile Bernard||bernard
4|Eva Gonzalès||gonzales
4|Armand Guillaumin||guillaumin
4|Lovis Corinth||corinth
4|John Singer Sargent||sargent
4|James McNeill Whistler||whistler
4|Marie Bracquemond||bracquemond
4|Peder Severin Krøyer||kroyer;p s kroyer
4|William Merritt Chase||chase
4|Tom Roberts||roberts
4|Walter Sickert||sickert
4|Eugène Boudin||boudin
4|Maurice Denis||denis
4|Paul Sérusier||serusier
4|Félix Vallotton||vallotton
4|Henri-Edmond Cross||cross
5|Gustave Loiseau||loiseau
5|Maximilien Luce||luce
5|Théo van Rysselberghe||rysselberghe
5|Jean-Louis Forain||forain
5|Federico Zandomeneghi||zandomeneghi
5|Giuseppe De Nittis||de nittis
5|Konstantin Korovin||korovin
5|Frits Thaulow||thaulow
5|Anna Ancher
5|Michael Ancher
5|Theodore Robinson||robinson
5|J. Alden Weir||alden weir
5|John Henry Twachtman||twachtman
5|Frank Weston Benson||benson
5|Arthur Streeton||streeton
5|Frederick McCubbin||mccubbin
5|Philip Wilson Steer||wilson steer
5|Johan Jongkind||jongkind
6|Louis Anquetin||anquetin
6|Charles Angrand||angrand
6|Albert Dubois-Pillet||dubois pillet
6|Victor Borisov-Musatov||borisov musatov
6|Lilla Cabot Perry||cabot perry
6|Laurits Tuxen||tuxen
6|Edmund C. Tarbell||tarbell
`,
amb:{'ancher':'Anna or Michael Ancher? Add a first name!'},
nope:{
 'picasso|pablo picasso|dali|salvador dali|kandinsky|pollock|warhol|frida kahlo|magritte':'Later modern art &mdash; not Impressionism.',
 'da vinci|leonardo|michelangelo|raphael|rembrandt|vermeer':'An Old Master &mdash; centuries before Impressionism.'
}},

{id:'classwriters', cat:'Art & Ideas', q:'Name a writer of ancient Greece or Rome', hint:'Poets, historians, playwrights and orators',
list:`
1|Homer
1|Virgil||vergil
1|Ovid
2|Herodotus
2|Thucydides
2|Sophocles
2|Euripides
2|Aeschylus
2|Aristophanes
2|Cicero
2|Plutarch
2|Sappho
2|Horace
2|Tacitus
2|Livy
2|Seneca the Younger||seneca
2|Pliny the Elder||pliny
2|Hesiod
2|Aesop
2|Plato
2|Aristotle
2|Marcus Aurelius||aurelius
2|Julius Caesar||caesar
3|Xenophon
3|Polybius
3|Suetonius
3|Catullus
3|Juvenal
3|Lucretius
3|Pindar
3|Menander
3|Demosthenes
3|Plautus
3|Terence
3|Apuleius
3|Petronius
3|Martial
3|Pliny the Younger||pliny younger
3|Sallust
3|Strabo
3|Josephus||flavius josephus
3|Arrian
3|Cassius Dio||dio cassius
3|Lucian
3|Epictetus
3|Galen
3|Euclid
3|Cato the Elder||cato
3|Augustine of Hippo||augustine;saint augustine
3|Hippocrates
3|Vitruvius
3|Diodorus Siculus||diodorus
3|Pausanias (geographer)|Pausanias (geographer)|pausanias
4|Quintilian
4|Varro
4|Ammianus Marcellinus||ammianus
4|Procopius
4|Boethius
4|Lucan
4|Propertius
4|Ennius
4|Lysias
4|Isocrates
4|Callimachus
4|Theocritus
4|Apollonius of Rhodes||apollonius
4|Archilochus
4|Anacreon
4|Simonides of Ceos||simonides
4|Solon
4|Diogenes Laërtius||diogenes laertius
4|Plotinus
5|Longinus
5|Statius
5|Tibullus
5|Aulus Gellius||gellius
5|Bacchylides
5|Alcaeus of Mytilene||alcaeus
5|Tyrtaeus
5|Dionysius of Halicarnassus||dionysius halicarnassus
5|Appian
5|Velleius Paterculus||velleius
5|Cornelius Nepos||nepos
5|Frontinus
5|Macrobius
5|Claudian
5|Ausonius
5|Phaedrus (fabulist)|Phaedrus (fabulist)|phaedrus
5|Athenaeus
5|Longus
5|Sextus Empiricus
5|Porphyry (philosopher)|Porphyry (philosopher)|porphyry
6|Herodian
6|Valerius Maximus
6|Columella
6|Prudentius
6|Nonnus
6|Quintus Smyrnaeus||quintus smyrnaeus
6|Babrius
6|Heliodorus of Emesa||heliodorus
6|Chariton
6|Achilles Tatius
6|Seneca the Elder||seneca elder
`,
nope:{
 'shakespeare|dante|chaucer|boccaccio':'A great writer &mdash; but not ancient Greek or Roman.',
 'zeus|achilles|odysseus|hercules':'A character, not a writer!'
}},

{id:'epics', cat:'Art & Ideas', q:'Name an epic poem or saga written before 1600', hint:'Any language, any land',
list:`
1|Iliad
1|Odyssey
1|Epic of Gilgamesh||gilgamesh
1|Beowulf
2|Aeneid
2|Mahabharata
2|Ramayana
2|Divine Comedy||inferno;divina commedia
2|The Song of Roland||song roland;chanson roland
2|Nibelungenlied||nibelungen
2|Shahnameh||shahnama;book kings
2|Poetic Edda||edda;elder edda
2|Prose Edda||younger edda
2|Metamorphoses
2|The Canterbury Tales||canterbury tales
2|Bhagavad Gita||gita
3|Njáls saga||njals saga;njal;njala
3|Egils saga||egils saga;egil
3|Heimskringla
3|Völsunga saga||volsunga saga;saga volsungs
3|Laxdæla saga||laxdaela saga
3|Grettis saga||grettis saga;grettir
3|Orkneyinga saga||orkneyinga
3|Saga of Erik the Red||erik red saga;eiriks saga
3|Cantar de mio Cid||poem cid;cantar mio cid
3|Orlando Furioso
3|Jerusalem Delivered||gerusalemme liberata
3|The Faerie Queene||faerie queene
3|Os Lusíadas||lusiads;os lusiadas
3|Argonautica
3|Theogony
3|Works and Days||works days
3|The Tale of the Heike||heike monogatari;tale heike
3|Romance of the Three Kingdoms||three kingdoms
3|Journey to the West||journey west
3|Enûma Eliš||enuma elish
3|Sir Gawain and the Green Knight||gawain green knight;gawain
3|Le Morte d'Arthur||morte darthur;le morte darthur
3|Mabinogion
3|Táin Bó Cúailnge||tain bo cuailnge;tain;cattle raid cooley
3|Popol Vuh
4|Pharsalia
4|Thebaid|Thebaid (Latin poem)|thebaid
4|Water Margin
4|The Knight in the Panther's Skin||knight panthers skin
4|The Tale of Igor's Campaign||tale igors campaign;igor
4|Piers Plowman
4|Parzival
4|Roman de la Rose||romance rose
4|Silappatikaram||cilappatikaram
4|Epic of Sundiata||sundiata
4|Masnavi||mathnawi
4|Layla and Majnun||layla majnun
4|The Conference of the Birds||conference birds
4|Ragnars saga loðbrókar||ragnars saga
4|Ynglinga saga||ynglinga
4|Hildebrandslied
4|Gísla saga||gisla saga
4|Hrafnkels saga||hrafnkels saga
4|Eyrbyggja saga||eyrbyggja
4|Grænlendinga saga||greenland saga;graenlendinga saga
5|Atrahasis
5|Digenes Akritas||digenis akritas
5|Tristan (Gottfried von Strassburg)|Tristan (Gottfried von Strassburg)|tristan
5|Orlando Innamorato
5|Kumārasambhava||kumarasambhava
5|Raghuvaṃśa||raghuvamsha
5|Lebor Gabála Érenn||lebor gabala;book invasions
5|The Battle of Maldon||battle maldon poem
5|The Dream of the Rood||dream rood
5|La Araucana||araucana
5|Khamsa of Nizami||khamsa
5|Hrólfs saga kraka||hrolfs saga kraka
5|Jómsvíkinga saga||jomsvikinga saga
5|Gunnlaugs saga ormstungu||gunnlaugs saga
5|Hervarar saga ok Heiðreks||hervarar saga
6|Waltharius
6|Kudrun
6|Manimekalai
6|Buddhacarita
6|Widsith
6|Fagrskinna
6|Morkinskinna
6|Færeyinga saga||faereyinga saga;faroe saga
6|Kormáks saga||kormaks saga
6|Fóstbræðra saga||fostbraedra saga
`,
nope:{
 'paradise lost':'An epic indeed &mdash; but from 1667. Just too young!',
 'kalevala':'Compiled in 1835 from older folk songs &mdash; just too young for this dig!',
 'lord rings|hobbit|harry potter|game thrones':'Modern fantasy!'
}},

{id:'sculptures', cat:'Art & Ideas', q:'Name a famous sculpture or statue made before 1900', hint:'Marble, bronze, stone or clay',
list:`
1|David|David (Michelangelo)|david;michelangelos david
1|Venus de Milo||venus milo;aphrodite milos
1|The Thinker||thinker
1|Statue of Liberty||liberty;lady liberty
1|Great Sphinx of Giza||sphinx;great sphinx
2|Winged Victory of Samothrace||winged victory;nike samothrace
2|Pietà|Pietà (Michelangelo)|pieta
2|Laocoön and His Sons||laocoon
2|Terracotta Army||terracotta warriors
2|Discobolus||discus thrower
2|Nefertiti Bust||nefertiti
2|Moai||easter island statues;easter island heads
2|Venus of Willendorf||willendorf
2|Colossus of Rhodes||colossus
2|Manneken Pis
2|The Kiss (Rodin sculpture)|The Kiss (Rodin sculpture)|kiss rodin;kiss
2|Mask of Tutankhamun||tutankhamun mask;tutankhamun
2|Elgin Marbles||parthenon marbles;elgin marbles
2|Trevi Fountain||trevi
3|Statue of Zeus at Olympia||statue zeus;zeus olympia
3|Apollo Belvedere
3|Capitoline Wolf||she wolf
3|Ecstasy of Saint Teresa||ecstasy st teresa;ecstasy saint teresa
3|Apollo and Daphne (Bernini)|Apollo and Daphne (Bernini)|apollo daphne
3|The Rape of Proserpina||rape proserpina
3|Moses (Michelangelo)|Moses (Michelangelo)|moses
3|Perseus with the Head of Medusa||perseus head medusa;perseus
3|David (Donatello)|David (Donatello)|donatello david
3|Augustus of Prima Porta||prima porta
3|Equestrian Statue of Marcus Aurelius||marcus aurelius statue
3|Dying Gaul
3|Riace bronzes||riace
3|Bronze Horseman||bronze horseman
3|Colossi of Memnon||memnon
3|Leshan Giant Buddha||leshan
3|Kamakura Daibutsu|Kōtoku-in|great buddha kamakura;kamakura buddha
3|Buddhas of Bamiyan||bamiyan
3|Olmec colossal heads||olmec heads
3|Benin Bronzes||benin bronzes
3|Lewis chessmen||lewis chessmen
3|Athena Parthenos
3|Psyche Revived by Cupid's Kiss||psyche cupid;cupid psyche
4|Farnese Hercules
4|Charioteer of Delphi||delphi charioteer
4|Artemision Bronze||artemision
4|Doryphoros
4|Aphrodite of Knidos||knidos
4|Barberini Faun
4|Belvedere Torso
4|Lady of Elche||dama elche
4|Lion Monument||lion lucerne;dying lion
4|The Burghers of Calais||burghers calais
4|The Gates of Hell||gates hell
4|Lamassu
4|Seated Scribe
4|Narmer Palette
4|Great Buddha of Nara|Tōdai-ji|nara daibutsu;todai ji buddha
4|Little Dancer of Fourteen Years||little dancer
4|Lion-man|Löwenmensch figurine|lion man;lowenmensch
4|Hermes and the Infant Dionysus||hermes praxiteles
4|The Three Graces (Canova)|The Three Graces (Canova)|three graces
4|Bacchus (Michelangelo)|Bacchus (Michelangelo)|bacchus
4|Equestrian statue of Gattamelata||gattamelata
4|Fountain of the Four Rivers||four rivers fountain
4|Veiled Christ||veiled christ
5|Venus of Brassempouy||brassempouy
5|Venus of Hohle Fels||hohle fels
5|Kritios Boy
5|Bamberg Horseman||bamberger reiter
5|Venus de' Medici||medici venus
5|Venus Victrix (Canova)|Venus Victrix (Canova)|paolina borghese;venus victrix
5|Equestrian statue of Bartolomeo Colleoni||colleoni
5|The Veiled Virgin||veiled virgin
5|Spinario||boy thorn
5|Sleeping Hermaphroditus||hermaphroditus
6|Shaw Memorial
6|Ludovisi Throne
6|Gudea statues||gudea
`,
nope:{
 'christ redeemer|cristo redentor|mount rushmore|little mermaid|angel north|cloud gate|motherland calls':'Made after 1900 &mdash; dig deeper!',
 'mona lisa|starry night':'A painting &mdash; not a sculpture!'
}}
);

/* Dug Up — more prompts: literature, faith and buildings */
PROMPT_DATA.push(
{id:'poets', cat:'Art & Ideas', q:'Name a poet who died before 1900', hint:'Any language, any century',
list:`
1|William Shakespeare||shakespeare;bard
1|Dante Alighieri||dante
1|Edgar Allan Poe||poe
2|Lord Byron||byron
2|John Keats||keats
2|Percy Bysshe Shelley||shelley
2|William Wordsworth||wordsworth
2|Emily Dickinson||dickinson
2|Walt Whitman||whitman
2|Geoffrey Chaucer||chaucer
2|John Milton||milton
2|William Blake||blake
2|Alexander Pushkin||pushkin
2|Rumi
2|Sappho
2|Virgil||vergil
2|Petrarch||petrarca
2|Robert Burns||burns
2|Samuel Taylor Coleridge||coleridge
2|Alfred, Lord Tennyson||tennyson
2|Henry Wadsworth Longfellow||longfellow
2|Charles Baudelaire||baudelaire
2|Arthur Rimbaud||rimbaud
2|Li Bai||li po;li bo
2|Du Fu||tu fu
2|Matsuo Bashō||basho
2|Omar Khayyam||khayyam
2|Hafez||hafiz
2|Homer
3|John Donne||donne
3|Christina Rossetti
3|Dante Gabriel Rossetti
3|Elizabeth Barrett Browning
3|Robert Browning
3|Heinrich Heine||heine
3|Friedrich Hölderlin||holderlin
3|Paul Verlaine||verlaine
3|Victor Hugo||hugo
3|Stéphane Mallarmé||mallarme
3|Mikhail Lermontov||lermontov
3|Adam Mickiewicz||mickiewicz
3|Ovid
3|Horace
3|Catullus
3|Pindar
3|Saadi Shirazi||saadi;sadi
3|Kabir
3|Kalidasa
3|Wang Wei
3|Bai Juyi||po chu i
3|Su Shi||su dongpo
3|Li Qingzhao
3|Edmund Spenser||spenser
3|Gerard Manley Hopkins||hopkins
3|Walter Scott||sir walter scott;scott
3|Snorri Sturluson||snorri
3|Luís de Camões||camoes
3|Giovanni Boccaccio||boccaccio
3|Jean de La Fontaine||la fontaine
3|Friedrich Schiller||schiller
3|Johann Wolfgang von Goethe||goethe
3|Mirza Ghalib||ghalib
3|Ferdowsi||firdausi
3|Ralph Waldo Emerson||emerson
3|Lewis Carroll||carroll
3|Andrew Marvell||marvell
3|Alexander Pope||alexander pope
3|Ben Jonson||jonson
4|Kobayashi Issa||issa
4|Yosa Buson||buson
4|Ono no Komachi||komachi
4|Robert Herrick||herrick
4|George Herbert||herbert
4|John Clare||clare
4|Thomas Gray||gray
4|Oliver Goldsmith||goldsmith
4|Matthew Arnold||arnold
4|Algernon Charles Swinburne||swinburne
4|Henrik Wergeland||wergeland
4|Carl Michael Bellman||bellman
4|Egill Skallagrímsson||egill;egil skallagrimsson
4|Juana Inés de la Cruz||sor juana
4|Luis de Góngora||gongora
4|Giacomo Leopardi||leopardi
4|Ludovico Ariosto||ariosto
4|Torquato Tasso||tasso
4|François Villon||villon
4|Pierre de Ronsard||ronsard
4|Christine de Pizan||pizan
4|Walther von der Vogelweide||vogelweide
4|Novalis
4|Sándor Petőfi||petofi
4|Taras Shevchenko||shevchenko
4|Mihai Eminescu||eminescu
4|Amir Khusrau||khusrau;khusro
4|Mirabai||meera
4|Nizami Ganjavi||nizami
4|Al-Mutanabbi||mutanabbi
4|Phillis Wheatley||wheatley
4|Anne Bradstreet||bradstreet
4|Emma Lazarus||lazarus
4|Robert Louis Stevenson||stevenson
4|Edward Lear||lear
5|Felicia Hemans||hemans
5|Johan Sebastian Welhaven||welhaven
5|Petter Dass
5|Esaias Tegnér||tegner
5|Johan Ludvig Runeberg||runeberg
5|Adam Oehlenschläger||oehlenschlager
5|Garcilaso de la Vega||garcilaso
5|Rosalía de Castro||rosalia castro
5|Wolfram von Eschenbach||eschenbach
5|France Prešeren||preseren
5|Juliusz Słowacki||slowacki
5|Fyodor Tyutchev||tyutchev
5|Nikolay Nekrasov||nekrasov
5|Attar of Nishapur||attar
5|Abu Nuwas
5|Imru' al-Qais||imru al qais;imru ul qais
5|Judah Halevi||halevi
5|Oliver Wendell Holmes Sr.||oliver wendell holmes
5|John Greenleaf Whittier||whittier
5|William Cullen Bryant||cullen bryant
6|Solomon ibn Gabirol||gabirol
6|Sidney Lanier||lanier
6|Afanasy Fet||fet
6|Eduard Mörike||morike
6|Annette von Droste-Hülshoff||droste hulshoff
6|Kakinomoto no Hitomaro||hitomaro
`,
nope:{
 'tagore|yeats|t s eliot|robert frost|sylvia plath|maya angelou|langston hughes|pablo neruda|lorca|rilke|kipling':'Lived into the 1900s &mdash; this dig wants poets who died before 1900.'
}},

{id:'novels', cat:'Art & Ideas', q:'Name a novel first published before 1900', hint:'The book title, not the author',
list:`
1|Pride and Prejudice||pride prejudice
1|Don Quixote||quixote
1|Moby-Dick||moby dick
1|Frankenstein||frankenstein modern prometheus
1|Dracula
2|War and Peace||war peace
2|Crime and Punishment||crime punishment
2|Les Misérables||les miserables;miserables
2|Jane Eyre
2|Wuthering Heights
2|Great Expectations
2|A Tale of Two Cities||tale two cities
2|Oliver Twist
2|The Count of Monte Cristo||count monte cristo;monte cristo
2|The Three Musketeers||three musketeers
2|Anna Karenina
2|Madame Bovary
2|Adventures of Huckleberry Finn||huckleberry finn;huck finn
2|The Adventures of Tom Sawyer||tom sawyer
2|Alice's Adventures in Wonderland||alice wonderland;alices adventures wonderland
2|Treasure Island
2|Strange Case of Dr Jekyll and Mr Hyde||jekyll hyde;dr jekyll mr hyde
2|The Picture of Dorian Gray||dorian gray
2|Robinson Crusoe
2|Gulliver's Travels||gullivers travels
2|The Brothers Karamazov||brothers karamazov
2|Twenty Thousand Leagues Under the Seas||20000 leagues under sea;twenty thousand leagues under sea
2|Around the World in Eighty Days||around world 80 days;around world eighty days
2|Little Women
2|Emma|Emma (novel)|emma
2|Sense and Sensibility||sense sensibility
2|The Hunchback of Notre-Dame||hunchback notre dame;notre dame paris
2|The Scarlet Letter||scarlet letter
2|Uncle Tom's Cabin||uncle toms cabin
2|The Time Machine||time machine
2|The War of the Worlds||war worlds
2|A Christmas Carol||christmas carol
2|Candide
2|Heart of Darkness
2|The Tale of Genji||tale genji;genji monogatari
3|Journey to the Center of the Earth||journey centre earth;journey center earth
3|Dream of the Red Chamber||red chamber;story stone
3|Persuasion|Persuasion (novel)|persuasion
3|Mansfield Park
3|Northanger Abbey
3|David Copperfield
3|Bleak House
3|Middlemarch
3|Vanity Fair|Vanity Fair (novel)|vanity fair
3|Tess of the d'Urbervilles||tess durbervilles;tess
3|Far from the Madding Crowd||far madding crowd
3|Jude the Obscure||jude obscure
3|The Idiot||idiot
3|Notes from Underground||notes underground
3|Fathers and Sons|Fathers and Sons (novel)|fathers sons
3|Dead Souls
3|Eugene Onegin||onegin
3|The Red and the Black||red black
3|Germinal|Germinal (novel)|germinal
3|Les Liaisons dangereuses||dangerous liaisons;liaisons dangereuses
3|The Sorrows of Young Werther||young werther;werther
3|The Jungle Book||jungle book
3|Ivanhoe
3|The History of Tom Jones, a Foundling||tom jones
3|The Last of the Mohicans||last mohicans
3|Black Beauty
3|Heidi|Heidi (novel)|heidi
3|The Adventures of Pinocchio||pinocchio
3|The Invisible Man||invisible man
3|A Study in Scarlet||study scarlet
3|The Turn of the Screw||turn screw
3|Romance of the Three Kingdoms||three kingdoms
3|Journey to the West||journey west
4|A Hero of Our Time||hero our time
4|Oblomov
4|The Charterhouse of Parma||charterhouse parma
4|Le Père Goriot||pere goriot;father goriot
4|Nana|Nana (novel)|nana
4|Thérèse Raquin||therese raquin
4|Kidnapped|Kidnapped (novel)|kidnapped
4|Waverley|Waverley (novel)|waverley
4|Tristram Shandy|The Life and Opinions of Tristram Shandy, Gentleman|tristram shandy
4|Pamela|Pamela (novel)|pamela
4|Clarissa
4|Moll Flanders
4|The Castle of Otranto||castle otranto
4|The Moonstone||moonstone
4|The Woman in White|The Woman in White (novel)|woman white
4|The Swiss Family Robinson||swiss family robinson
4|Ben-Hur: A Tale of the Christ|Ben-Hur: A Tale of the Christ|ben hur
4|King Solomon's Mines||king solomons mines
4|The Island of Doctor Moreau||island doctor moreau;island dr moreau
4|The Sign of the Four||sign four
4|The Portrait of a Lady||portrait lady
4|The Red Badge of Courage||red badge courage
4|The Awakening|The Awakening (Chopin novel)|awakening
4|Little Dorrit
4|Hard Times|Hard Times (novel)|hard times
4|The Old Curiosity Shop||old curiosity shop
4|Nicholas Nickleby
4|The Pickwick Papers||pickwick papers
4|The Mill on the Floss||mill floss
4|Silas Marner
4|North and South|North and South (Gaskell novel)|north south
4|The Tenant of Wildfell Hall||tenant wildfell hall
4|Quo Vadis|Quo Vadis (novel)|quo vadis
4|The Betrothed|The Betrothed (Manzoni novel)|betrothed;promessi sposi
4|Hunger|Hunger (Hamsun novel)|hunger;sult
4|Water Margin
4|Noli Me Tángere|Noli Me Tángere (novel)|noli me tangere
4|Gargantua and Pantagruel||gargantua;pantagruel
4|The Mysterious Island||mysterious island
4|From the Earth to the Moon||earth moon
4|Bel-Ami|Bel Ami|bel ami
5|Effi Briest
5|Max Havelaar
5|Jin Ping Mei||plum golden vase
5|El filibusterismo||filibusterismo
5|Lazarillo de Tormes||lazarillo
5|Simplicius Simplicissimus||simplicissimus
5|The Princess of Cleves||princess cleves;princesse cleves
5|Manon Lescaut
5|Wilhelm Meister's Apprenticeship||wilhelm meister
5|Twenty Years After||twenty years after
5|Sentimental Education||sentimental education
5|Salammbô||salammbo
5|Eugénie Grandet||eugenie grandet
5|Lost Illusions||lost illusions
5|Looking Backward||looking backward
5|Agnes Grey
5|Cranford|Cranford (novel)|cranford
5|Barchester Towers
5|Adam Bede
5|Our Mutual Friend
5|Daisy Miller
5|Rob Roy|Rob Roy (novel)|rob roy
5|She: A History of Adventure|She: A History of Adventure|she
5|The Prisoner of Zenda||prisoner zenda
5|The Monk||monk
6|Paul et Virginie||paul virginie
6|The Last Man||last man
6|Lorna Doone
6|Five Weeks in a Balloon||five weeks balloon
`,
nope:{
 'hound baskervilles|wizard oz|wonderful wizard oz|peter pan|1984|great gatsby|ulysses|lord rings|hobbit|anne green gables':'Published in 1900 or later &mdash; dig deeper!',
 'iliad|odyssey|beowulf|aeneid':'An epic poem &mdash; not a novel.',
 'hamlet|romeo juliet|macbeth|king lear':'A play, not a novel!'
}},

{id:'playwrights', cat:'Art & Ideas', q:'Name a playwright born before 1870', hint:'From the Greek stage to the late 1800s',
list:`
1|William Shakespeare||shakespeare;bard
1|Sophocles
2|Euripides
2|Aeschylus
2|Aristophanes
2|Molière||moliere
2|Christopher Marlowe||marlowe
2|Henrik Ibsen||ibsen
2|Anton Chekhov||chekhov;tchekhov
2|Oscar Wilde||wilde
2|George Bernard Shaw||bernard shaw;shaw
2|August Strindberg||strindberg
2|Lope de Vega||lope
2|Pedro Calderón de la Barca||calderon
2|Jean Racine||racine
2|Pierre Corneille||corneille
2|Johann Wolfgang von Goethe||goethe
2|Friedrich Schiller||schiller
2|Ben Jonson||jonson
2|Kalidasa
3|Seneca the Younger||seneca
3|Plautus
3|Terence
3|Menander
3|Thomas Kyd||kyd
3|John Webster||webster
3|Thomas Middleton||middleton
3|Richard Brinsley Sheridan||sheridan
3|Oliver Goldsmith||goldsmith
3|William Congreve||congreve
3|Aphra Behn||behn
3|John Dryden||dryden
3|Carlo Goldoni||goldoni
3|Pierre Beaumarchais||beaumarchais
3|Pierre de Marivaux||marivaux
3|Victor Hugo||hugo
3|Alfred de Musset||musset
3|Edmond Rostand||rostand
3|Georges Feydeau||feydeau
3|Luigi Pirandello||pirandello
3|Maxim Gorky||gorky
3|Nikolai Gogol||gogol
3|Voltaire
3|Gotthold Ephraim Lessing||lessing
3|J. M. Barrie||barrie
3|W. B. Yeats||yeats
3|Bjørnstjerne Bjørnson||bjornson
3|Ludvig Holberg||holberg
3|Zeami Motokiyo||zeami
3|Chikamatsu Monzaemon||chikamatsu
3|Maurice Maeterlinck||maeterlinck
3|Gerhart Hauptmann||hauptmann
4|Francis Beaumont||beaumont
4|John Fletcher (playwright)|John Fletcher (playwright)|fletcher
4|Alexander Ostrovsky||ostrovsky
4|Alexander Griboyedov||griboyedov
4|Ivan Turgenev||turgenev
4|Heinrich von Kleist||kleist
4|Georg Büchner||buchner
4|Frank Wedekind||wedekind
4|Tang Xianzu
4|Tirso de Molina||tirso
4|Arthur Schnitzler||schnitzler
4|W. S. Gilbert||gilbert
4|John Gay||gay
4|Alexandre Dumas||dumas
4|Miguel de Cervantes||cervantes
5|Kan'ami||kanami
5|Guan Hanqing
5|Bhāsa||bhasa
5|Hrotsvitha||hrotsvit
5|Hans Sachs||sachs
5|Gil Vicente||vicente
5|Fernando de Rojas||rojas;celestina
5|Franz Grillparzer||grillparzer
5|Friedrich Hebbel||hebbel
5|Adam Oehlenschläger||oehlenschlager
5|Augusta, Lady Gregory|Augusta, Lady Gregory|lady gregory;gregory
5|Dion Boucicault||boucicault
5|Arthur Wing Pinero||pinero
5|Thomas Dekker (writer)|Thomas Dekker (writer)|dekker
5|John Ford (dramatist)|John Ford (dramatist)|john ford
5|George Peele||peele
5|Robert Greene (dramatist)|Robert Greene (dramatist)|greene
5|John Lyly||lyly
5|Philip Massinger||massinger
5|George Farquhar||farquhar
5|John Vanbrugh||vanbrugh
5|William Wycherley||wycherley
6|Shudraka
6|Wang Shifu (playwright)|Wang Shifu (playwright)|wang shifu
6|Juan Ruiz de Alarcón||ruiz alarcon
6|Johann Nestroy||nestroy
6|Ferdinand Raimund||raimund
6|Christian Dietrich Grabbe||grabbe
6|Gunnar Heiberg||heiberg
6|Tom Taylor
6|Cyril Tourneur||tourneur
6|Susanna Centlivre||centlivre
6|Thomas Otway||otway
`,
nope:{
 'arthur miller|tennessee williams|samuel beckett|beckett|harold pinter|eugene oneill|bertolt brecht|brecht|tom stoppard|noel coward':'Born after 1870 &mdash; try an older stage!',
 'hamlet|macbeth|romeo juliet':'A play &mdash; who wrote it?'
}},

{id:'reformation', cat:'Art & Ideas', q:'Name a figure of the Protestant or Catholic Reformation', hint:'Reformers, rulers and rivals, c. 1380&ndash;1650',
list:`
1|Martin Luther||luther
1|John Calvin||calvin;jean calvin
1|Henry VIII of England|Henry VIII|henry 8;henry viii
2|Huldrych Zwingli||zwingli;ulrich zwingli
2|Thomas Cromwell||cromwell
2|Thomas Cranmer||cranmer
2|John Knox||knox
2|Philip Melanchthon||melanchthon
2|Ignatius of Loyola||loyola;ignatius
2|Thomas More||more;saint thomas more
2|Erasmus||desiderius erasmus
2|Jan Hus||hus;john hus
2|John Wycliffe||wycliffe;wyclif
2|William Tyndale||tyndale
2|Elizabeth I||elizabeth 1;elizabeth i
2|Mary I of England||bloody mary;mary 1;mary tudor
2|Pope Leo X||leo 10
2|Charles V, Holy Roman Emperor|Charles V, Holy Roman Emperor|charles 5
3|Johann Tetzel||tetzel
3|Anne Boleyn||boleyn
3|Teresa of Ávila||teresa avila
3|Francis Xavier||xavier
3|Menno Simons||menno
3|Thomas Müntzer||muntzer;muenzer
3|Thomas Wolsey||wolsey;cardinal wolsey
3|Edward VI||edward 6
3|Henry IV of France||henry 4;henri 4
3|Catherine de' Medici||catherine medici
3|Philip II of Spain||philip 2
3|Girolamo Savonarola||savonarola
3|Lady Jane Grey||jane grey
4|Frederick the Wise||frederick wise
4|Katharina von Bora||von bora;katharina luther
4|Martin Bucer||bucer
4|Heinrich Bullinger||bullinger
4|Theodore Beza||beza
4|Michael Servetus||servetus
4|Hugh Latimer||latimer
4|Gustav Vasa||gustav 1;gustav vasa
4|Gaspard de Coligny||coligny
4|Pope Paul III||paul 3
4|Robert Bellarmine||bellarmine
4|Peter Waldo||waldo;valdes
4|Jacobus Arminius||arminius
4|William Cecil||cecil;lord burghley
4|John of Leiden||jan van leiden
5|Andreas Karlstadt||karlstadt
5|Balthasar Hubmaier||hubmaier
5|Conrad Grebel||grebel
5|Nicholas Ridley (martyr)|Nicholas Ridley (martyr)|ridley
5|Reginald Pole||pole
5|Stephen Gardiner||gardiner
5|Christian III of Denmark||christian 3
5|Olaus Petri
5|Mikael Agricola||agricola
5|Charles Borromeo||borromeo
5|Pope Pius V||pius 5
5|Peter Canisius||canisius
5|John Foxe||foxe
5|Matthew Parker||parker
5|Albert of Brandenburg|Albert of Brandenburg|albrecht brandenburg
5|Johann Eck||eck
5|Thomas Cajetan||cajetan
6|Hans Tausen||tausen
6|Primož Trubar||trubar
6|Faustus Socinus||socinus
6|Jan Matthys||matthys
6|Pope Adrian VI||adrian 6
`,
nope:{
 'jesus|saint paul|saint peter':'The early Church &mdash; 1,500 years before the Reformation.',
 'martin luther king jr|mlk':'Named after him &mdash; but MLK Jr. was a 20th-century civil-rights leader!'
}},

{id:'architects', cat:'Art & Ideas', q:'Name an architect born before 1900', hint:'Builders of temples, domes, towers and cities',
list:`
1|Antoni Gaudí||gaudi
1|Frank Lloyd Wright||lloyd wright;wright
2|Michelangelo
2|Filippo Brunelleschi||brunelleschi
2|Christopher Wren||wren
2|Andrea Palladio||palladio
2|Gian Lorenzo Bernini||bernini
2|Imhotep
2|Vitruvius
2|Gustave Eiffel||eiffel
2|Le Corbusier||corbusier
2|Ludwig Mies van der Rohe||mies van der rohe;mies
2|Walter Gropius||gropius
2|Donato Bramante||bramante
2|Mimar Sinan||sinan
2|Inigo Jones
2|Georges-Eugène Haussmann||haussmann;baron haussmann
2|Charles Rennie Mackintosh||mackintosh
3|Leon Battista Alberti||alberti
3|Francesco Borromini||borromini
3|Thomas Jefferson||jefferson
3|Louis Sullivan||sullivan
3|Isambard Kingdom Brunel||brunel
3|Giotto
3|Alvar Aalto||aalto
4|Carlo Maderno||maderno
4|Jules Hardouin-Mansart||hardouin mansart
4|François Mansart||mansart
4|Louis Le Vau||le vau
4|Karl Friedrich Schinkel||schinkel
4|Augustus Pugin||pugin
4|Charles Barry||barry
4|John Nash (architect)|John Nash (architect)|nash
4|Robert Adam||adam
4|John Soane||soane
4|Nicholas Hawksmoor||hawksmoor
4|John Vanbrugh||vanbrugh
4|Pierre Charles L'Enfant||lenfant;l enfant
4|Daniel Burnham||burnham
4|Frederick Law Olmsted||olmsted
4|Otto Wagner
4|Adolf Loos||loos
4|Victor Horta||horta
4|Charles Garnier (architect)|Charles Garnier (architect)|garnier
4|Eugène Viollet-le-Duc||viollet le duc
4|Joseph Paxton||paxton
4|Thomas Telford||telford
4|Ictinus||iktinos
4|Apollodorus of Damascus||apollodorus
4|Isidore of Miletus||isidore
4|Anthemius of Tralles||anthemius
4|Abbot Suger||suger
4|Bartolomeo Rastrelli||rastrelli
4|Edwin Lutyens||lutyens
4|Buckminster Fuller||fuller
5|Callicrates
5|Ustad Ahmad Lahauri||lahauri
5|Villard de Honnecourt||honnecourt
5|Arnolfo di Cambio||arnolfo
5|Michelozzo
5|Giulio Romano||romano
5|Jacopo Sansovino||sansovino
5|Juan de Herrera||herrera
5|Balthasar Neumann||neumann
5|Johann Bernhard Fischer von Erlach||fischer von erlach
5|Postnik Yakovlev||yakovlev;barma
5|Lluís Domènech i Montaner||domenech montaner
5|Eliel Saarinen||saarinen
5|Peter Behrens||behrens
5|Hendrik Petrus Berlage||berlage
5|Erich Mendelsohn||mendelsohn
5|Bruno Taut||taut
5|Julia Morgan||morgan
5|William Van Alen||van alen
5|Cass Gilbert||gilbert
5|Benjamin Henry Latrobe||latrobe
5|Henry Hobson Richardson||hh richardson;richardson
5|Hector Guimard||guimard
5|Claude Perrault||perrault
5|Vladimir Shukhov||shukhov
6|Vincenzo Scamozzi||scamozzi
6|Lukas von Hildebrandt||hildebrandt
6|Carlo Rossi (architect)|Carlo Rossi (architect)|carlo rossi
6|Konstantin Thon||thon
6|Josep Puig i Cadafalch||puig cadafalch
6|Lars Sonck||sonck
6|Ragnar Östberg||ostberg
6|Arnstein Arneberg||arneberg
6|Magnus Poulsson||poulsson
6|Christian Heinrich Grosch||grosch
6|Hans Linstow||linstow
6|Antonio Sant'Elia||sant elia
6|Tatsuno Kingo||tatsuno
6|Josiah Conder||conder
6|Alexey Shchusev||shchusev
`,
nope:{
 'zaha hadid|frank gehry|i m pei|norman foster|renzo piano|rem koolhaas|oscar niemeyer|bjarke ingels|tadao ando':'Born in the 1900s &mdash; this dig stops at 1900.'
}}
);

/* Dug Up — more prompts: science and invention */
PROMPT_DATA.push(
{id:'inv1', cat:'Science & Invention', q:'Name an invention from before 1800', hint:'Tools, machines and devices',
list:`
1|Wheel||the wheel
1|Printing press||gutenberg press
1|Compass||magnetic compass
1|Gunpowder||black powder
1|Paper
1|Telescope
1|Steam engine
2|Microscope
2|Mechanical clock|Clock|clock
2|Windmill
2|Plough||plow
2|Abacus
2|Glasses||eyeglasses;spectacles
2|Pendulum clock
2|Thermometer
2|Barometer
2|Spinning jenny
2|Water frame
2|Flying shuttle
2|Cotton gin
2|Hot air balloon||balloon
2|Lightning rod||lightning conductor
2|Bifocals
2|Seed drill
2|Smallpox vaccine||vaccine;vaccination
2|Porcelain
2|Movable type
2|Banknote||paper money
2|Crossbow
2|Catapult
2|Trebuchet
2|Stirrup
2|Sundial
3|Horse collar
3|Woodblock printing
3|Mechanical calculator||pascaline
3|Slide rule
3|Parachute
3|Submarine
3|Sextant
3|Marine chronometer||chronometer
3|Astrolabe
3|Antikythera mechanism||antikythera
3|Archimedes' screw||archimedes screw
3|Roman concrete||concrete
3|Water wheel
3|Wheelbarrow
3|Flush toilet||toilet;water closet
3|Piano||pianoforte
3|Pencil
3|Spinning wheel
3|Loom
3|Power loom
3|Guillotine
3|Musket
3|Cannon
3|Greek fire
3|Potter's wheel||potters wheel
3|Rocket||fire arrow
3|Silk
3|Water clock||clepsydra
3|Hourglass
3|Camera obscura
4|Armillary sphere
4|Pound lock||canal lock
4|Seismometer||seismoscope
4|Violin
4|Newcomen atmospheric engine||newcomen engine;atmospheric engine
4|Leyden jar
4|Reflecting telescope
4|Diving bell
4|Steamboat
4|Flintlock
4|Kite
4|Toothbrush
4|Lathe
4|Pulley
4|Aeolipile||heros engine
4|Blast furnace
4|Fardier à vapeur||cugnot;steam car;fardier
4|Smallpox inoculation|Variolation|variolation;inoculation
4|Umbrella
4|Soap
5|Magic lantern
5|Hydraulic press
5|Octant (instrument)|Octant (instrument)|octant
5|Hygrometer
5|Anemometer
5|Rain gauge
5|Odometer
5|Vernier scale||vernier
5|Bellows
5|Crucible steel
6|Micrometer
6|Spirit level
`,
nope:{
 'telephone|light bulb|lightbulb|car|automobile|airplane|aeroplane|radio|television|computer|internet|camera|photography|electric battery|battery|train|locomotive':'Invented after 1800 &mdash; that belongs in a later dig!',
 'fire':'Discovered, not invented &mdash; and long before history!'
}},

{id:'inv2', cat:'Science & Invention', q:'Name an invention of the 19th century', hint:'1800&ndash;1899',
list:`
1|Telephone||phone
1|Incandescent light bulb||light bulb;lightbulb;electric light
1|Automobile|Car|car;motor car;motorcar;benz patent motorwagen
1|Photograph||photography;camera
1|Steam locomotive||locomotive;train;railway;railroad
1|Electrical telegraph||telegraph
1|Phonograph
2|Electric battery|Battery (electricity)|battery;voltaic pile
2|Morse code
2|Bicycle||bike;velocipede
2|Typewriter
2|Sewing machine
2|Dynamite
2|Revolver
2|Machine gun
2|Stethoscope
2|X-ray||x rays;xray
2|Motion picture|Film|movie;movies;cinema;film;moving pictures
2|Radio
2|Elevator||lift;safety elevator
2|Internal combustion engine||combustion engine
2|Braille
2|Pasteurization||pasteurisation
2|Aspirin
3|Gatling gun
3|General anaesthesia|General anaesthesia|anesthesia;anaesthesia;ether anaesthesia
3|Refrigerator||fridge;refrigeration
3|Electric motor
3|Electric generator||dynamo;generator
3|Diesel engine
3|Pneumatic tire|Tire|pneumatic tyre;tire;tyre
3|Barbed wire
3|Safety pin
3|Zipper||zip
3|Match||friction match;matches
3|Bessemer process||bessemer
3|Airship||zeppelin;dirigible
3|Hypodermic needle||syringe
3|Tin can||canned food;canning
3|Analytical Engine||analytical engine
3|Difference engine
3|Jacquard machine||jacquard loom
3|Microphone
3|Gramophone record|Gramophone record|gramophone
3|Alternating current||ac power
3|Tesla coil
3|Vulcanization||vulcanised rubber;vulcanized rubber
3|Ferris wheel
3|Jeans||blue jeans
3|Coca-Cola||coke;coca cola
3|Postage stamp||penny black;stamp
3|Daguerreotype
3|Saxophone
3|Motorcycle
4|Maxim gun
4|Escalator
4|Fountain pen
4|Reinforced concrete
4|Ironclad warship||ironclad
4|Glider (sailplane)|Glider (sailplane)|glider
4|Antiseptic|Antiseptic|antiseptic surgery
4|Contact lens||contact lenses
4|Dishwasher
4|Washing machine
4|Lawn mower||lawnmower
4|Punched card||punch card
4|Fax||facsimile;pantelegraph
4|Loudspeaker||speaker
4|Induction motor
4|Transformer
4|Steam turbine
4|Torpedo
4|Nitroglycerin||nitroglycerine
4|Electric chair
4|Roller coaster||rollercoaster
4|Toilet paper
4|Traffic light||traffic lights;traffic signal
4|Davy lamp||safety lamp
4|Kaleidoscope
4|Photographic film||roll film
4|Harmonica
4|Accordion
4|Metronome
4|Winchester rifle||winchester
4|Tram||streetcar;trolley
4|Rotary printing press
4|Safety razor||razor
5|Arc lamp
5|Stereoscope
5|Celluloid
5|Parkesine
5|Linotype machine||linotype
5|Ophthalmoscope
5|Sphygmomanometer||blood pressure cuff
5|Smokeless powder
5|Steam hammer
5|Portland cement
5|Stapler
5|Ballpoint pen
5|Paper clip
5|Christmas card
5|Tuba
6|Pencil sharpener
6|Clothes iron|Clothes iron|electric iron
`,
nope:{
 'airplane|aeroplane|plane|television|tv|computer|internet|penicillin|radar|jet engine':'From the 1900s &mdash; this dig wants 1800&ndash;1899.',
 'printing press|telescope|compass|wheel|steam engine|microscope':'Older than 1800 &mdash; try the earlier inventions dig!'
}},

{id:'scientists', cat:'Science & Invention', q:'Name a scientist born before 1900', hint:'Physics, chemistry, biology, medicine, astronomy',
list:`
1|Albert Einstein||einstein
1|Isaac Newton||newton
1|Charles Darwin||darwin
1|Galileo Galilei||galileo
1|Marie Curie||curie;madame curie
1|Nikola Tesla||tesla
2|Thomas Edison||edison
2|Michael Faraday||faraday
2|James Clerk Maxwell||maxwell
2|Louis Pasteur||pasteur
2|Gregor Mendel||mendel
2|Nicolaus Copernicus||copernicus
2|Johannes Kepler||kepler
2|Archimedes
2|Dmitri Mendeleev||mendeleev
2|Max Planck||planck
2|Niels Bohr||bohr
2|Ernest Rutherford||rutherford
2|Antoine Lavoisier||lavoisier
2|Robert Hooke||hooke
2|Robert Boyle||boyle
2|Alexander Fleming||fleming
2|Sigmund Freud||freud
2|Erwin Schrödinger||schrodinger;schroedinger
2|Leonardo da Vinci||da vinci;leonardo
2|Tycho Brahe||tycho;brahe
2|Edwin Hubble||hubble
2|Carl Linnaeus||linnaeus
2|Alessandro Volta||volta
2|Hippocrates
3|Aristotle
3|Alfred Nobel||nobel
3|Benjamin Franklin||franklin
3|André-Marie Ampère||ampere
3|Georg Ohm||ohm
3|James Watt||watt
3|Alexander von Humboldt||humboldt
3|Edward Jenner||jenner
3|Joseph Lister||lister
3|Robert Koch||koch
3|Pierre Curie
3|Wilhelm Röntgen||rontgen;roentgen
3|Heinrich Hertz||hertz
3|Christiaan Huygens||huygens
3|Blaise Pascal||pascal
3|Antonie van Leeuwenhoek||leeuwenhoek
3|William Harvey||harvey
3|Andreas Vesalius||vesalius
3|Galen
3|Ptolemy
3|Eratosthenes
3|Avicenna||ibn sina
3|Ibn al-Haytham||alhazen;alhacen
3|Aryabhata
3|Charles Babbage||babbage
3|Alfred Russel Wallace||wallace
3|Mary Anning||anning
3|William Herschel||herschel
3|Edmond Halley||halley
3|John Dalton||dalton
3|Carl Friedrich Gauss||gauss
3|Lord Kelvin||kelvin;william thomson
3|Ivan Pavlov||pavlov
3|Lise Meitner||meitner
3|Leonhard Euler||euler
3|René Descartes||descartes
3|Francis Bacon
3|Hypatia
3|Florence Nightingale||nightingale
3|George Washington Carver||carver
4|Al-Khwarizmi||khwarizmi
4|Al-Biruni||biruni
4|Zhang Heng
4|Shen Kuo
4|Brahmagupta
4|Jean-Baptiste Lamarck||lamarck
4|Georges Cuvier||cuvier
4|Charles Lyell||lyell
4|Caroline Herschel
4|Henry Cavendish||cavendish
4|Amedeo Avogadro||avogadro
4|Humphry Davy||davy
4|Joseph Priestley||priestley
4|James Prescott Joule||joule
4|Ludwig Boltzmann||boltzmann
4|J. J. Thomson||jj thomson
4|Henri Becquerel||becquerel
4|Santiago Ramón y Cajal||ramon cajal;cajal
4|Emmy Noether||noether
4|C. V. Raman||raman
4|Fridtjof Nansen||nansen
4|Anders Celsius||celsius
4|Hans Christian Ørsted||orsted;oersted
4|Robert Bunsen||bunsen
4|Ignaz Semmelweis||semmelweis
4|John Snow||snow
4|Pierre-Simon Laplace||laplace
4|Joseph-Louis Lagrange||lagrange
4|Evangelista Torricelli||torricelli
4|Daniel Bernoulli||bernoulli
4|Democritus
4|Thales of Miletus||thales
4|Hipparchus
4|Aristarchus of Samos||aristarchus
4|Jabir ibn Hayyan||jabir;geber
4|Abu Bakr al-Razi||rhazes;al razi
4|Roger Bacon
4|Paracelsus
4|Luigi Galvani||galvani
4|Thomas Young (scientist)|Thomas Young (scientist)|thomas young
4|Joseph Fourier||fourier
4|John James Audubon||audubon
4|Srinivasa Ramanujan||ramanujan
5|Rudolf Clausius||clausius
5|Josiah Willard Gibbs||willard gibbs;gibbs
5|Svante Arrhenius||arrhenius
5|Hendrik Lorentz||lorentz
5|Camillo Golgi||golgi
5|Jagadish Chandra Bose
5|Satyendra Nath Bose
5|Kristian Birkeland||birkeland
5|Niels Henrik Abel||abel
5|Ole Rømer||romer;roemer
5|Jöns Jacob Berzelius||berzelius
5|Carl Wilhelm Scheele||scheele
5|Anders Jonas Ångström||angstrom
5|Gustav Kirchhoff||kirchhoff
5|Hermann von Helmholtz||helmholtz
5|Justus von Liebig||liebig
5|August Kekulé||kekule
5|Ernst Haeckel||haeckel
5|Rudolf Virchow||virchow
5|Thomas Hunt Morgan||hunt morgan
5|Nicolas Steno||steno
5|Giovanni Domenico Cassini||cassini
5|Anaximander
5|Empedocles
5|Theophrastus
5|Ulugh Beg
5|Nasir al-Din al-Tusi||al tusi;tusi
5|Georgius Agricola||agricola
5|Augustin-Jean Fresnel||fresnel
5|Nicolas Léonard Sadi Carnot||sadi carnot;carnot
5|Louis Agassiz||agassiz
6|Kitasato Shibasaburō||kitasato
6|Hideyo Noguchi||noguchi
6|Vilhelm Bjerknes||bjerknes
6|Friedrich Wöhler||wohler
6|Jan Swammerdam||swammerdam
6|Marcello Malpighi||malpighi
6|Lazzaro Spallanzani||spallanzani
6|Robert Grosseteste||grosseteste
6|Count Rumford|Benjamin Thompson|rumford
6|Asa Gray
`,
amb:{'bose':'Jagadish Chandra Bose or Satyendra Nath Bose? Add a first name!','bacon':'Francis or Roger Bacon? Add a first name!','thomson':'J. J. Thomson or William Thomson (Lord Kelvin)? Be more specific!'},
nope:{
 'stephen hawking|hawking|richard feynman|feynman|oppenheimer|carl sagan|neil degrasse tyson|alan turing|turing|jane goodall|heisenberg|rosalind franklin|enrico fermi|fermi':'Born in the 1900s &mdash; this dig stops at 1900.'
}},

{id:'womensci', cat:'Science & Invention', q:'Name a woman scientist or mathematician born before 1925', hint:'Physics, chemistry, medicine, maths, astronomy and more',
list:`
1|Marie Curie||curie;madame curie
1|Ada Lovelace||lovelace;ada
2|Rosalind Franklin||franklin
2|Lise Meitner||meitner
2|Hypatia
2|Mary Anning||anning
2|Florence Nightingale||nightingale
2|Katherine Johnson||katherine johnson
2|Grace Hopper||hopper
3|Emmy Noether||noether
3|Caroline Herschel||herschel
3|Dorothy Hodgkin||hodgkin
3|Chien-Shiung Wu||wu;madame wu
3|Barbara McClintock||mcclintock
3|Rachel Carson||carson
3|Irène Joliot-Curie||irene joliot curie;joliot curie
3|Henrietta Swan Leavitt||leavitt
3|Elizabeth Blackwell||blackwell
3|Hedy Lamarr||lamarr
3|Margaret Mead||mead
3|Maria Montessori||montessori
4|Gertrude B. Elion||elion
4|Gerty Cori||cori
4|Maria Goeppert Mayer||goeppert mayer
4|Rita Levi-Montalcini||levi montalcini
4|Cecilia Payne-Gaposchkin||payne gaposchkin;cecilia payne
4|Annie Jump Cannon||jump cannon;cannon
4|Maria Mitchell||mitchell
4|Sophie Germain||germain
4|Émilie du Châtelet||du chatelet;chatelet
4|Elizabeth Garrett Anderson||garrett anderson
4|Sofya Kovalevskaya||kovalevskaya;sofia kovalevskaya
4|Mary Somerville||somerville
4|Nettie Stevens||stevens
4|Alice Ball||ball
4|Dorothy Vaughan||vaughan
4|Mary Jackson (engineer)|Mary Jackson (engineer)|mary jackson
4|Marie Tharp||tharp
4|Inge Lehmann||lehmann
4|Hildegard of Bingen||hildegard
4|Maria Sibylla Merian||merian
4|Virginia Apgar||apgar
4|Anna Freud
5|Williamina Fleming||fleming
5|Hertha Ayrton||ayrton
5|Ellen Gleditsch||gleditsch
5|Trota of Salerno||trotula;trota
5|Laura Bassi||bassi
5|Maria Gaetana Agnesi||agnesi
5|Rebecca Lee Crumpler||crumpler
5|Ida Noddack||noddack
5|Kathleen Lonsdale||lonsdale
5|Helen B. Taussig||taussig
5|Ruth Benedict||benedict
5|Karen Horney||horney
5|Melanie Klein||klein
5|Janaki Ammal||ammal
5|Anandi Gopal Joshi||anandibai joshi
6|Kristine Bonnevie||bonnevie
6|Mary Putnam Jacobi||putnam jacobi
6|Agnes Pockels||pockels
6|Harriet Brooks||brooks
6|Marietta Blau||blau
6|Kamala Sohonie||sohonie
6|Toshiko Yuasa||yuasa
6|Kono Yasui||yasui
6|Elizabeth Fulhame||fulhame
`,
nope:{
 'jane goodall|vera rubin|mae jemison|sally ride|jennifer doudna|jocelyn bell burnell|valentina tereshkova':'Born after 1925 &mdash; this dig wants earlier pioneers.',
 'einstein|newton|darwin|tesla':'A great scientist &mdash; but this dig is about women in science.'
}},

{id:'pandemics', cat:'Science & Invention', q:'Name a pandemic or epidemic from history', hint:'Any era &mdash; from ancient plagues to modern outbreaks',
list:`
1|Black Death||bubonic plague;black plague;great mortality
1|Spanish flu||1918 flu;1918 influenza;1918 pandemic
1|COVID-19 pandemic||covid;covid 19;coronavirus;corona
2|Plague of Justinian||justinian plague
2|Plague of Athens||athens plague
2|Antonine Plague||antonine;plague galen
2|Great Plague of London||great plague;london plague
2|Cholera pandemics|Cholera outbreaks and pandemics|cholera
2|HIV/AIDS|HIV/AIDS|aids;hiv;aids epidemic
2|Smallpox|History of smallpox|smallpox epidemic
2|Polio|History of polio|polio epidemic;poliomyelitis
3|Third plague pandemic||third pandemic;modern plague
3|1957–1958 influenza pandemic|1957–1958 influenza pandemic|asian flu;1957 flu
3|Hong Kong flu||1968 flu
3|1889–1890 pandemic|1889–1890 pandemic|russian flu;1889 flu
3|Cocoliztli epidemics||cocoliztli
3|Plague of Cyprian||cyprian plague
3|1793 Philadelphia yellow fever epidemic||philadelphia yellow fever
3|Yellow fever||yellow fever epidemic
3|1854 Broad Street cholera outbreak||broad street;broad street pump
3|Epidemic typhus||typhus
3|Great Plague of Marseille||marseille plague
3|Great Plague of Vienna||vienna plague
3|Italian plague of 1629–1631||milan plague;italian plague
3|Sweating sickness||english sweat;sweating sickness
3|Dancing plague of 1518||dancing plague;dancing mania
3|2009 swine flu pandemic||swine flu;h1n1
3|SARS|2002–2004 SARS outbreak|sars
3|Western African Ebola virus epidemic||ebola;ebola epidemic
4|Zika|2015–2016 Zika virus epidemic|zika
4|MERS|Middle East respiratory syndrome|mers
4|Mpox|2022–2023 mpox outbreak|mpox;monkeypox
4|Great Plague of 1738||1738 plague
4|Russian plague of 1770–1772||moscow plague;plague riot
4|Manchurian plague||manchurian plague 1910
4|Encephalitis lethargica||sleeping sickness epidemic
4|Syphilis|History of syphilis|syphilis;great pox
4|Tuberculosis|History of tuberculosis|tuberculosis;consumption;tb
4|Great Plague of Seville||seville plague
5|Plague of Amwas||amwas
5|1817–1824 cholera pandemic|1817–1824 cholera pandemic|first cholera pandemic
5|1846–1860 cholera pandemic|1846–1860 cholera pandemic|third cholera pandemic
5|1875 Fiji measles outbreak||fiji measles
6|Plague of Sheroe||sheroe
6|1580 influenza pandemic||1580 flu
`,
amb:{'flu|influenza|plague':'Which one? Add a year or a name &mdash; e.g. &ldquo;1918 flu&rdquo; or &ldquo;Black Death&rdquo;.'},
nope:{
 'zombie|zombie apocalypse':'Fiction!',
 'typhoid mary|mary mallon':'A person &mdash; Mary Mallon &mdash; not an epidemic!'
}},

{id:'space', cat:'Science & Invention', q:'Name a space mission or spacecraft launched before 2000', hint:'Crewed or robotic',
list:`
1|Apollo 11
1|Sputnik 1||sputnik
1|Hubble Space Telescope||hubble
1|Voyager 1||voyager
2|Apollo 13
2|Vostok 1||gagarin flight
2|Voyager 2
2|International Space Station||iss;space station
2|Mir||mir space station
2|Space Shuttle Challenger||challenger
2|Apollo 8
2|Sputnik 2||laika
2|Cassini–Huygens||cassini;huygens probe
2|Pioneer 10
2|Viking 1
2|Mars Pathfinder||pathfinder;sojourner
2|Skylab
3|Explorer 1
3|Luna 2
3|Luna 9
3|Apollo 1
3|Mercury-Redstone 3||freedom 7
3|Mercury-Atlas 6||friendship 7
3|Vostok 6
3|Voskhod 2
3|Apollo 12
3|Apollo 14
3|Apollo 15
3|Apollo 17
3|Apollo–Soyuz||apollo soyuz
3|Galileo (spacecraft)|Galileo (spacecraft)|galileo
3|Telstar 1||telstar
3|Salyut 1
3|Buran (spacecraft)|Buran (spacecraft)|buran
3|STS-1||sts 1
3|Space Shuttle Columbia||columbia
4|Apollo 16
4|Apollo 10
4|Apollo 9
4|Luna 1
4|Luna 3
4|Luna 16
4|Lunokhod 1||lunokhod
4|Venera 7
4|Venera 13
4|Mariner 2
4|Mariner 4
4|Mariner 9
4|Mariner 10
4|Pioneer 11
4|Viking 2
4|Magellan (spacecraft)|Magellan (spacecraft)|magellan
4|Giotto (spacecraft)|Giotto (spacecraft)|giotto
4|Mars Global Surveyor
4|Mars Climate Orbiter
4|Stardust (spacecraft)|Stardust (spacecraft)|stardust
4|NEAR Shoemaker||near
4|Solar and Heliospheric Observatory||soho
4|Chandra X-ray Observatory||chandra
4|Cosmic Background Explorer||cobe
4|Soyuz 1
4|Soyuz 11
4|Aryabhata (satellite)|Aryabhata (satellite)|aryabhata
4|STS-7||sts 7
4|Gemini 4
5|Ulysses (spacecraft)|Ulysses (spacecraft)|ulysses
5|Deep Space 1
5|Lunar Prospector
5|Clementine (spacecraft)|Clementine (spacecraft)|clementine
5|Compton Gamma Ray Observatory||compton
5|Hipparcos
5|Dong Fang Hong I||dong fang hong 1
5|Shenzhou 1
5|Gemini 8
5|Ranger 7
5|Surveyor 1
5|Vega program||vega 1;vega 2
5|Helios (spacecraft)|Helios (spacecraft)|helios
5|TIROS-1||tiros 1
5|Landsat 1
6|Ohsumi (satellite)|Ohsumi (satellite)|ohsumi
6|Prospero (satellite)|Prospero (satellite)|prospero
6|Astérix (satellite)|Astérix (satellite)|asterix
6|Kosmos 954
6|Hiten
`,
amb:{'apollo':'Which Apollo? Add the number &mdash; e.g. Apollo 11.','gemini|mercury|luna|venera|mariner|pioneer|viking|soyuz|vostok|salyut|ranger|surveyor':'Which one? Add the number!'},
nope:{
 'apollo 18':'There was no Apollo 18 &mdash; it was cancelled!',
 'perseverance|curiosity rover|curiosity|james webb|jwst|james webb space telescope|artemis 1|chandrayaan|new horizons|rosetta|spirit|opportunity':'Launched in 2000 or later &mdash; dig deeper!',
 'enterprise|millennium falcon':'The real Shuttle <i>Enterprise</i> never reached space &mdash; and the starship is fiction!'
}},

{id:'aviation', cat:'Science & Invention', q:'Name an aviation pioneer', hint:'Balloonists, glider pilots and aviators, before 1940',
list:`
1|Wright brothers||wright;orville wright;wilbur wright;orville;wilbur
1|Amelia Earhart||earhart
2|Charles Lindbergh||lindbergh
2|Montgolfier brothers||montgolfier
2|Otto Lilienthal||lilienthal
2|Louis Blériot||bleriot
2|Ferdinand von Zeppelin||zeppelin;count zeppelin
2|Alberto Santos-Dumont||santos dumont
2|Manfred von Richthofen||red baron;richthofen
2|Igor Sikorsky||sikorsky
2|Howard Hughes||hughes
2|Bessie Coleman||coleman
3|Glenn Curtiss||curtiss
3|George Cayley||cayley
3|Leonardo da Vinci||da vinci;leonardo
3|Charles Kingsford Smith||kingsford smith
3|Amy Johnson
3|Alcock and Brown||alcock;brown
3|Richard E. Byrd||byrd
3|Roland Garros (aviator)|Roland Garros (aviator)|garros;roland garros
3|Antoine de Saint-Exupéry||saint exupery
3|William Boeing||boeing
4|Beryl Markham||markham
4|Jean Batten||batten
4|Roald Amundsen||amundsen
4|Umberto Nobile||nobile
4|Wiley Post||post
4|Jacqueline Cochran||cochran
4|Harriet Quimby||quimby
4|Raymonde de Laroche||de laroche;laroche
4|Clément Ader||ader
4|Samuel Pierpont Langley||langley
4|Octave Chanute||chanute
4|Henri Farman||farman
4|Anthony Fokker||fokker
4|Hugo Junkers||junkers
4|Willy Messerschmitt||messerschmitt
4|Frank Whittle||whittle
4|Jean-Pierre Blanchard||blanchard
4|Jean-François Pilâtre de Rozier||pilatre de rozier;de rozier
4|Jacques Charles||charles
4|Abbas ibn Firnas||ibn firnas;firnas
4|Eddie Rickenbacker||rickenbacker
4|Jimmy Doolittle||doolittle
4|Geoffrey de Havilland||de havilland
4|Thomas Sopwith||sopwith
4|Charles Rolls||rolls
4|Hanna Reitsch||reitsch
4|Valery Chkalov||chkalov
5|Bert Hinkler||hinkler
5|Hubert Wilkins||wilkins
5|Tryggve Gran||gran
5|Hiram Maxim||maxim
5|Percy Pilcher||pilcher
5|Gustave Whitehead||whitehead
5|Richard Pearse||pearse
5|Traian Vuia||vuia
5|Gabriel Voisin||voisin
5|Louis Paulhan||paulhan
5|Adolphe Pégoud||pegoud
5|Jean Mermoz||mermoz
5|Claude Dornier||dornier
5|Hans von Ohain||von ohain;ohain
5|Juan de la Cierva||de la cierva;cierva
5|Hugo Eckener||eckener
5|Sophie Blanchard
5|Hezârfen Ahmed Çelebi||hezarfen
5|Billy Mitchell||mitchell
5|Eugene Ely||ely
5|Hélène Dutrieu||dutrieu
5|Samuel Franklin Cody||cody
5|Alliott Verdon Roe||a v roe;verdon roe
5|Katharine Wright
5|Elly Beinhorn||beinhorn
5|Pyotr Nesterov||nesterov
5|Nikolay Zhukovsky||zhukovsky
6|Hans Fleischer Dons||fleischer dons;dons
6|Gidsken Jakobsen||jakobsen
6|Lilian Bland||bland
6|Eilmer of Malmesbury||eilmer
6|Lagâri Hasan Çelebi||lagari hasan
6|Bartolomeu de Gusmão||gusmao
6|Calbraith Perry Rodgers||cal rodgers;rodgers
6|Lincoln Beachey||beachey
6|Charlie Taylor (mechanic)|Charlie Taylor (mechanic)|charlie taylor
6|Pancho Barnes||barnes
6|Louise Thaden||thaden
`,
nope:{
 'neil armstrong|buzz aldrin|yuri gagarin|gagarin':'An astronaut &mdash; space is another dig!',
 'chuck yeager|yeager':'Broke the sound barrier in 1947 &mdash; this dig stops at 1940.',
 'icarus|daedalus':'A myth &mdash; though a very airy one!'
}},

{id:'maths', cat:'Science & Invention', q:'Name a mathematician born before 1900', hint:'From ancient geometry to modern proofs',
list:`
1|Pythagoras
1|Euclid
1|Archimedes
1|Isaac Newton||newton
2|Carl Friedrich Gauss||gauss
2|Leonhard Euler||euler
2|René Descartes||descartes
2|Blaise Pascal||pascal
2|Pierre de Fermat||fermat
2|Gottfried Wilhelm Leibniz||leibniz
2|Fibonacci||leonardo pisano;leonardo bonacci
2|Ada Lovelace||lovelace
2|Bernhard Riemann||riemann
2|Srinivasa Ramanujan||ramanujan
2|Al-Khwarizmi||khwarizmi
2|David Hilbert||hilbert
2|Georg Cantor||cantor
2|Henri Poincaré||poincare
2|Évariste Galois||galois
2|Hypatia
3|Thales of Miletus||thales
3|Omar Khayyam||khayyam
3|Aryabhata
3|Brahmagupta
3|John Napier||napier
3|Emmy Noether||noether
3|Charles Babbage||babbage
3|George Boole||boole
3|Joseph-Louis Lagrange||lagrange
3|Pierre-Simon Laplace||laplace
3|Joseph Fourier||fourier
3|Augustin-Louis Cauchy||cauchy
3|Niels Henrik Abel||abel
3|Karl Weierstrass||weierstrass
3|Sofya Kovalevskaya||kovalevskaya
3|Sophie Germain||germain
3|Christiaan Huygens||huygens
3|Gerolamo Cardano||cardano
3|Thomas Bayes||bayes
3|Nikolai Lobachevsky||lobachevsky
3|William Rowan Hamilton||rowan hamilton;hamilton
3|Bertrand Russell||russell
3|G. H. Hardy||hardy
3|Giuseppe Peano||peano
3|Gottlob Frege||frege
3|Eratosthenes
3|Diophantus
3|Zeno of Elea||zeno
3|Apollonius of Perga||apollonius
3|Bhaskara II||bhaskara
4|Sophus Lie||lie
4|Felix Klein||klein
4|Richard Dedekind||dedekind
4|Maria Gaetana Agnesi||agnesi
4|Émilie du Châtelet||du chatelet;chatelet
4|Daniel Bernoulli
4|Jacob Bernoulli
4|Johann Bernoulli
4|Niccolò Fontana Tartaglia||tartaglia
4|François Viète||viete;vieta
4|Marin Mersenne||mersenne
4|Bonaventura Cavalieri||cavalieri
4|John Wallis||wallis
4|Isaac Barrow||barrow
4|Brook Taylor||taylor
4|Abraham de Moivre||de moivre
4|Gaspard Monge||monge
4|Adrien-Marie Legendre||legendre
4|Siméon Denis Poisson||poisson
4|János Bolyai||bolyai
4|Arthur Cayley||cayley
4|Augustus De Morgan||de morgan
4|Alfred North Whitehead||whitehead
4|Hermann Minkowski||minkowski
4|Henri Lebesgue||lebesgue
4|Ernst Zermelo||zermelo
4|Pafnuty Chebyshev||chebyshev
4|Andrey Markov||markov
4|Eudoxus of Cnidus||eudoxus
4|Hipparchus
4|Zu Chongzhi
4|Liu Hui
4|Seki Takakazu||seki kowa;seki
4|Madhava of Sangamagrama||madhava
4|Stefan Banach||banach
4|Norbert Wiener||wiener
5|Girard Desargues||desargues
5|Colin Maclaurin||maclaurin
5|James Joseph Sylvester||sylvester
5|John Edensor Littlewood||littlewood
5|Émile Borel||borel
5|Felix Hausdorff||hausdorff
5|Hermann Weyl||weyl
5|Aleksandr Lyapunov||lyapunov
5|Qin Jiushao
5|Thābit ibn Qurra||thabit ibn qurra
5|Pappus of Alexandria||pappus
5|Hero of Alexandria||heron;hero alexandria
5|Nicole Oresme||oresme
5|Regiomontanus
5|Luca Pacioli||pacioli
6|Caspar Wessel||wessel
6|Axel Thue||thue
6|Ludwig Sylow||sylow
6|Carl Størmer||stormer
6|Viggo Brun||brun
6|Thoralf Skolem||skolem
`,
amb:{'bernoulli':'Daniel, Jacob or Johann Bernoulli? Add a first name!'},
nope:{
 'alan turing|turing|kurt godel|godel|john von neumann|von neumann|paul erdos|erdos|john nash|terence tao|kolmogorov|grothendieck':'Born in the 1900s &mdash; this dig stops at 1900.'
}}
);

/* Dug Up — more prompts: exploration and places */
PROMPT_DATA.push(
{id:'shipsx', cat:'Exploration', q:'Name a famous ship of exploration', hint:'Vessels of discovery, science and daring voyages',
list:`
1|Santa María|Santa María (ship)|santa maria
1|Mayflower
1|HMS Beagle||beagle
1|HMS Endeavour||endeavour;endeavor
2|Fram
2|Pinta|Pinta (ship)|pinta
2|Niña|Niña (ship)|nina
2|Victoria (ship)|Victoria (ship)|victoria;magellans ship
2|HMS Erebus|HMS Erebus (1826)|erebus
2|HMS Terror|HMS Terror (1813)|terror
2|Golden Hind||golden hinde
2|Endurance|Endurance (1912 ship)|endurance
2|Kon-Tiki|Kon-Tiki expedition|kon tiki
2|HMS Bounty||bounty
3|HMS Resolution|HMS Resolution (1771)|resolution
3|RRS Discovery||discovery
3|Terra Nova|Terra Nova (ship)|terra nova
3|Gjøa||gjoa
3|HMS Challenger|HMS Challenger (1858)|challenger
3|Chinese treasure ship||treasure ship;zheng he ship
4|Halve Maen||half moon;halve maen
4|Nimrod|Nimrod (ship)|nimrod
4|Belgica|Belgica (1884)|belgica
4|SS Vega||vega
4|Matthew (ship)|Matthew (ship)|matthew
4|São Gabriel|São Gabriel (ship)|sao gabriel
4|Ra II||ra 2;ra
4|RV Calypso||calypso
4|USS Nautilus (SSN-571)|USS Nautilus (SSN-571)|nautilus
4|Trieste (bathyscaphe)|Trieste (bathyscaphe)|trieste
4|Hōkūleʻa||hokulea
5|Maud (ship)|Maud (ship)|maud
5|Trinidad (ship)|Trinidad (ship)|trinidad
5|Duyfken
5|HMS Investigator|HMS Investigator (1798)|investigator
5|Le Griffon||griffon
5|DSV Alvin||alvin
5|USS Jeannette|USS Jeannette (1878)|jeannette
`,
nope:{
 'titanic|lusitania|queen mary':'Famous &mdash; but a passenger liner, not a ship of discovery.',
 'black pearl|flying dutchman|pequod|argo':'A ship of legend or fiction!'
}},

{id:'archaeologists', cat:'Exploration', q:'Name a famous archaeologist', hint:'Real diggers only &mdash; sorry, Indiana Jones!',
list:`
1|Howard Carter||carter
1|Heinrich Schliemann||schliemann
2|Arthur Evans||evans;sir arthur evans
2|Leonard Woolley||woolley
2|Flinders Petrie||petrie
2|Mary Leakey
2|Louis Leakey
2|Hiram Bingham III|Hiram Bingham III|hiram bingham;bingham
2|Austen Henry Layard||layard
2|Jean-François Champollion||champollion
2|Gertrude Bell||bell
2|Giovanni Battista Belzoni||belzoni
2|Auguste Mariette||mariette
2|Lord Carnarvon|George Herbert, 5th Earl of Carnarvon|carnarvon
3|Mortimer Wheeler||wheeler
3|Kathleen Kenyon||kenyon
3|Dorothy Garrod||garrod
3|V. Gordon Childe||gordon childe;childe
3|Zahi Hawass||hawass
3|Thor Heyerdahl||heyerdahl
3|Donald Johanson||johanson
3|Richard Leakey
3|Basil Brown (archaeologist)|Basil Brown (archaeologist)|basil brown
3|Henry Rawlinson||rawlinson
3|Thomas Jefferson||jefferson
4|Michael Ventris||ventris
4|Aurel Stein||stein
4|Eugène Dubois||dubois
4|Raymond Dart||dart
4|Edith Pretty||pretty
4|Marija Gimbutas||gimbutas
4|Helge Ingstad
4|Anne Stine Ingstad
4|Giuseppe Fiorelli||fiorelli
4|John Lloyd Stephens||stephens
4|Klaus Schmidt (archaeologist)|Klaus Schmidt (archaeologist)|klaus schmidt
4|Yigael Yadin||yadin
5|Alice Kober||kober
5|Wilhelm Dörpfeld||dorpfeld
5|Carl Blegen||blegen
5|Robert Koldewey||koldewey
5|Paul-Émile Botta||botta
5|Hormuzd Rassam||rassam
5|Paul Pelliot||pelliot
5|Pei Wenzhong
5|Margaret Murray||murray
5|Gertrude Caton-Thompson||caton thompson
5|Spyridon Marinatos||marinatos
5|Manolis Andronikos||andronikos
5|Augustus Pitt Rivers||pitt rivers
5|Frederick Catherwood||catherwood
5|Sylvanus Morley||morley
5|Tatiana Proskouriakoff||proskouriakoff
5|Yuri Knorozov||knorozov
5|Walter Alva||alva
5|Ian Hodder||hodder
5|James Mellaart||mellaart
5|Karl Richard Lepsius||lepsius
5|William Stukeley||stukeley
5|Mike Parker Pearson||parker pearson
6|Ernst Curtius||curtius
6|Albert von Le Coq||le coq
6|Li Ji (archaeologist)|Li Ji (archaeologist)|li ji
6|Davidson Black
6|Gabriel Gustafson||gustafson
6|Nicolay Nicolaysen||nicolaysen
6|Alfred Maudslay||maudslay
6|Max Uhle||uhle
6|Julio C. Tello||tello
6|Theodore M. Davis|Theodore M. Davis|theodore davis
6|O. G. S. Crawford||crawford
`,
amb:{'leakey':'Louis, Mary or Richard Leakey? Add a first name!','ingstad':'Helge or Anne Stine Ingstad? Add a first name!'},
nope:{
 'indiana jones|indy|lara croft|rick oconnell':'Fiction! Real diggers only.'
}},

{id:'traderoutes', cat:'Exploration', q:'Name a historic trade route', hint:'By land, river or sea',
list:`
1|Silk Road||silk route
2|Spice trade||spice route
2|Amber Road||amber route
2|Incense Route||incense road;frankincense trail
2|Trans-Saharan trade||trans saharan;saharan trade
2|Triangular trade||atlantic slave trade
2|Oregon Trail
2|Maritime Silk Road||maritime silk route
3|Royal Road||persian royal road
3|Grand Trunk Road||grand trunk
3|Trade route from the Varangians to the Greeks||varangians greeks
3|Manila galleon||manila galleons;galleon trade
3|Santa Fe Trail
3|Inca road system||qhapaq nan;inca roads
3|Northwest Passage
3|Indian Ocean trade
4|Tea Horse Road||tea horse
4|Volga trade route||volga route
4|Via Maris
4|King's Highway (ancient)|King's Highway (ancient)|kings highway
4|Chisholm Trail
4|California Trail
4|Cape Route||sea route india
4|Northern Sea Route||northeast passage
4|Spanish treasure fleet||treasure fleet
4|Tōkaidō (road)|Tōkaidō (road)|tokaido
4|Khyber Pass||khyber
4|Via Egnatia
4|Burma Road
5|Old Salt Route||salt road
5|Via Salaria
5|Natchez Trace
5|El Camino Real (California)|El Camino Real (California)|camino real
5|Nakasendō||nakasendo
5|Darb al-Arbaʽin||forty days road;darb al arbain
5|Via Francigena
5|Siberian Route||tea road
5|Great North Road (Great Britain)|Great North Road (Great Britain)|great north road
6|Via Claudia Augusta
6|Kyakhta trade||kyakhta
`,
nope:{
 'route 66|interstate|autobahn':'A highway &mdash; too modern for this dig!'
}},

{id:'polar', cat:'Exploration', q:'Name a polar explorer', hint:'Arctic or Antarctic, before 1960',
list:`
1|Roald Amundsen||amundsen
1|Robert Falcon Scott||scott;captain scott
1|Ernest Shackleton||shackleton
2|Fridtjof Nansen||nansen
2|Robert Peary||peary
2|Matthew Henson||henson
2|Richard E. Byrd||byrd
2|Frederick Cook||frederick cook
2|John Franklin||franklin
2|Lawrence Oates||oates;captain oates
2|Douglas Mawson||mawson
2|Vitus Bering||bering
2|Willem Barentsz||barentsz;barents
3|James Cook||captain cook;james cook
3|Edmund Hillary||hillary
3|Tom Crean (explorer)|Tom Crean (explorer)|tom crean;crean
3|James Clark Ross||james ross;james clark ross
3|Henry Hudson||hudson
4|Vivian Fuchs||fuchs
4|Frank Wild||wild
4|Edward Adrian Wilson||edward wilson;wilson
4|Frank Worsley||worsley
4|Apsley Cherry-Garrard||cherry garrard
4|Carsten Borchgrevink||borchgrevink
4|Hjalmar Johansen||johansen
4|Otto Sverdrup||sverdrup
4|Adolf Erik Nordenskiöld||adolf erik nordenskiold
4|S. A. Andrée||andree
4|Umberto Nobile||nobile
4|Knud Rasmussen||rasmussen
4|Vilhjalmur Stefansson||stefansson
4|John Rae (explorer)|John Rae (explorer)|john rae;rae
4|William Edward Parry||parry
4|Fabian Gottlieb von Bellingshausen||bellingshausen
4|Jules Dumont d'Urville||dumont durville;durville
4|Adrien de Gerlache||de gerlache;gerlache
4|Martin Frobisher||frobisher
4|William Baffin||baffin
4|Lincoln Ellsworth||ellsworth
5|Henry Bowers||bowers
5|Edgar Evans||evans
5|Olav Bjaaland||bjaaland
5|Helmer Hanssen||hanssen
5|Oscar Wisting||wisting
5|Adolphus Greely||greely
5|Elisha Kent Kane||kane
5|Charles Francis Hall||charles hall
5|John Ross (Royal Navy officer)|John Ross (Royal Navy officer)|john ross
5|Mikhail Lazarev||lazarev
5|Charles Wilkes||wilkes
5|Jean-Baptiste Charcot||charcot
5|Wilhelm Filchner||filchner
5|Nobu Shirase||shirase
5|Otto Nordenskjöld||otto nordenskjold
5|Semyon Dezhnev||dezhnev
5|Ivan Papanin||papanin
5|Hubert Wilkins||wilkins
5|Louise Arner Boyd||louise boyd
5|Ada Blackjack||blackjack
5|Peter Freuchen||freuchen
5|Hjalmar Riiser-Larsen||riiser larsen
5|Bernt Balchen||balchen
5|Tryggve Gran||gran
5|Carl Anton Larsen||c a larsen
6|Erich von Drygalski||drygalski
6|Henryk Arctowski||arctowski
6|Frederick George Jackson||frederick jackson
6|Finn Ronne||ronne
6|Ejnar Mikkelsen||mikkelsen
6|Eivind Astrup||astrup
6|Kristian Prestrud||prestrud
6|Sverre Hassel||hassel
`,
amb:{'cook':'Frederick Cook or James Cook? Add a first name!','ross':'James Clark Ross or John Ross? Add a first name!','nordenskiold|nordenskjold':'Adolf Erik Nordenski&ouml;ld or Otto Nordenskj&ouml;ld? Add a first name!'},
nope:{
 'neil armstrong|columbus|christopher columbus|marco polo':'An explorer &mdash; but not of the poles!',
 'santa claus|santa':'He lives at the North Pole &mdash; but he is no explorer!'
}},

{id:'expeditions', cat:'Exploration', q:'Name a famous expedition in history', hint:'Journeys of discovery, science or survival',
list:`
1|Lewis and Clark Expedition||lewis clark;corps discovery
1|Kon-Tiki expedition||kon tiki
2|Magellan expedition||magellan circumnavigation;magellans voyage;magellan
2|Terra Nova Expedition||scott expedition;terra nova
2|Imperial Trans-Antarctic Expedition||endurance expedition;shackleton expedition
2|Amundsen's South Pole expedition||amundsen expedition;amundsens expedition
2|Franklin's lost expedition||franklin expedition
2|Burke and Wills expedition||burke wills
2|1953 British Mount Everest expedition||everest 1953;hillary tenzing
2|Second voyage of HMS Beagle||beagle voyage;voyage beagle
2|Nansen's Fram expedition||fram expedition
2|Voyages of Christopher Columbus||columbus voyage;columbus 1492
3|Discovery of the sea route to India||vasco da gama voyage
3|Ming treasure voyages||zheng he voyages;treasure voyages
3|First voyage of James Cook||cook first voyage;cooks voyage
3|Challenger expedition
3|First Fleet
3|The Travels of Marco Polo||travels marco polo
3|Rihla|Rihla|ibn battuta travels
4|Lapérouse expedition||laperouse expedition
4|Discovery Expedition
4|Nimrod Expedition
4|Andrée's Arctic balloon expedition||andree expedition;andree balloon
4|Coronado expedition||coronado
4|Hernando de Soto expedition|Hernando de Soto|de soto expedition
4|Narváez expedition||narvaez expedition
4|Emin Pasha Relief Expedition||emin pasha
4|Powell Geographic Expedition of 1869||powell expedition
4|Great Northern Expedition||great northern expedition
4|Ra expeditions||ra expedition
4|1924 British Mount Everest expedition||mallory irvine;everest 1924
5|Belgian Antarctic Expedition||belgica expedition
5|Lady Franklin Bay Expedition||greely expedition
5|Jeannette expedition||jeannette
5|Vega expedition
5|Pike Expedition||pike expedition
5|Hayden Geological Survey of 1871||hayden survey
5|First Kamchatka expedition||kamchatka expedition
5|Malaspina Expedition||malaspina
5|Baudin expedition to Australia|Baudin expedition to Australia|baudin expedition
5|Commonwealth Trans-Antarctic Expedition||trans antarctic expedition 1958
5|Australasian Antarctic Expedition||mawson expedition
5|Southern Cross Expedition||southern cross
5|1954 Italian expedition to K2||k2 1954
6|Shackleton–Rowett Expedition||quest expedition
6|Second German North Polar Expedition||german north polar expedition
6|Swedish Antarctic Expedition
6|Scottish National Antarctic Expedition
6|Norwegian–British–Swedish Antarctic Expedition||maudheim
`,
nope:{
 'apollo 11|moon landing':'A space mission &mdash; try the space dig!',
 'fellowship ring|journey center earth':'Fiction!'
}},

{id:'castles', cat:'Places', q:'Name a famous castle or fortress', hint:'Anywhere in the world',
list:`
1|Neuschwanstein Castle||neuschwanstein
1|Windsor Castle||windsor
1|Edinburgh Castle
1|Tower of London
2|Bran Castle||dracula castle;draculas castle
2|Himeji Castle||himeji
2|Prague Castle
2|Château de Chambord||chambord
2|Alhambra
2|Balmoral Castle||balmoral
2|Moscow Kremlin||kremlin
2|Château de Chenonceau||chenonceau
3|Hohenzollern Castle||hohenzollern
3|Warwick Castle
3|Leeds Castle
3|Bodiam Castle
3|Caernarfon Castle||caernarfon
3|Conwy Castle||conwy
3|Dover Castle
3|Stirling Castle
3|Eilean Donan
3|Blarney Castle||blarney
3|Kronborg||elsinore;helsingor castle
3|Malbork Castle||malbork;marienburg
3|Wawel Castle||wawel
3|Krak des Chevaliers
3|Cité de Carcassonne||carcassonne
3|Castel Sant'Angelo||castel santangelo;sant angelo
3|Osaka Castle
3|Red Fort
3|Alcázar of Segovia||alcazar segovia
3|Alnwick Castle
3|Masada
4|Akershus Fortress||akershus
4|Harlech Castle
4|Urquhart Castle
4|Bunratty Castle
4|Chillon Castle||chillon
4|Hohensalzburg Fortress||hohensalzburg
4|Bled Castle
4|Peleș Castle||peles
4|Corvin Castle||hunyad castle
4|Trakai Island Castle||trakai
4|Château Gaillard
4|Matsumoto Castle
4|Nijō Castle||nijo castle
4|Edo Castle
4|Hwaseong Fortress||hwaseong
4|Mehrangarh
4|Amber Fort||amer fort
4|Citadel of Aleppo
4|Elmina Castle
4|Bamburgh Castle
4|Kenilworth Castle
4|Tintagel Castle||tintagel
4|Cardiff Castle
4|Hearst Castle
4|Dunnottar Castle
4|Glamis Castle
4|Rock of Cashel||cashel
4|Burg Eltz||eltz castle
4|Wartburg
4|Heidelberg Castle
5|Spiš Castle||spis castle
5|Kalmar Castle
5|Château de Vincennes||vincennes
5|Golconda Fort||golconda
5|Rumelihisarı||rumeli hisari
5|Château de Pierrefonds||pierrefonds
5|Castle of Good Hope
5|Cape Coast Castle
5|Château de Saumur
5|Castillo de San Marcos
5|Rochester Castle
5|Cawdor Castle
5|Kilkenny Castle
5|Lichtenstein Castle
5|Gripsholm Castle
5|Frederiksborg Castle
5|Olavinlinna
5|Bergenhus Fortress||bergenhus
6|Marksburg
6|Egeskov Castle
6|Turku Castle
6|Steinvikholm Castle||steinvikholm
6|Vardøhus Fortress||vardohus
`,
nope:{
 'hogwarts|winterfell|camelot|cinderella castle|disney castle|castle greyskull':'Fiction, legend or Disney!',
 'versailles|buckingham palace|topkapi':'A palace &mdash; there is a dig for those too!'
}},

{id:'worship', cat:'Places', q:'Name a famous place of worship built before 1900', hint:'Cathedrals, churches, mosques, temples and shrines',
list:`
1|Notre-Dame de Paris||notre dame;notre dame cathedral
1|St. Peter's Basilica||st peters;saint peters;saint peters basilica;st peters basilica
1|Hagia Sophia||aya sofya;ayasofya
1|Sagrada Família||sagrada familia
2|Westminster Abbey
2|St Paul's Cathedral||st pauls;saint pauls cathedral;st pauls cathedral
2|Sistine Chapel
2|Cologne Cathedral||kolner dom
2|Milan Cathedral||duomo milano;duomo milan
2|Florence Cathedral||duomo florence;santa maria del fiore
2|Chartres Cathedral||chartres
2|Saint Basil's Cathedral||st basils;saint basils
2|Canterbury Cathedral
2|Blue Mosque|Sultan Ahmed Mosque|sultan ahmed mosque
2|Dome of the Rock
2|Masjid al-Haram||great mosque mecca;masjid al haram
2|Kaaba
2|Golden Temple||harmandir sahib
2|Angkor Wat
2|Borobudur
2|Temple of Heaven
2|Shwedagon Pagoda||shwedagon
2|Western Wall||wailing wall
2|Mosque–Cathedral of Córdoba||mezquita;great mosque cordoba;mosque cathedral cordoba
2|Al-Aqsa Mosque||al aqsa
2|Church of the Holy Sepulchre||holy sepulchre
2|St Mark's Basilica||st marks;saint marks basilica;san marco
2|Mont-Saint-Michel||mont saint michel;mont st michel
2|Parthenon
2|Pantheon, Rome|Pantheon, Rome|pantheon
3|Nidaros Cathedral||nidarosdomen;nidaros
3|Pisa Cathedral||leaning tower pisa;pisa duomo
3|Reims Cathedral
3|Amiens Cathedral
3|Seville Cathedral
3|Cathedral of Santiago de Compostela||santiago de compostela cathedral
3|Salisbury Cathedral
3|York Minster
3|Durham Cathedral
3|Lincoln Cathedral
3|Sainte-Chapelle||sainte chapelle
3|Basilica of Saint-Denis||saint denis basilica
3|Aachen Cathedral
3|St. Stephen's Cathedral, Vienna|St. Stephen's Cathedral, Vienna|stephansdom;st stephens cathedral
3|St. Vitus Cathedral||st vitus
3|Sacré-Cœur, Paris|Sacré-Cœur, Paris|sacre coeur
3|Cathedral of Christ the Saviour||christ saviour cathedral
3|Saint Isaac's Cathedral||st isaacs
3|Süleymaniye Mosque||suleymaniye
3|Shah Mosque (Isfahan)|Shah Mosque (Isfahan)|shah mosque;imam mosque
3|Jama Masjid, Delhi|Jama Masjid, Delhi|jama masjid
3|Badshahi Mosque
3|Great Mosque of Djenné||djenne mosque
3|Umayyad Mosque
3|Kinkaku-ji||golden pavilion;kinkakuji
3|Tōdai-ji||todai ji;todaiji
3|Sensō-ji||senso ji;sensoji
3|Fushimi Inari-taisha||fushimi inari
3|Kiyomizu-dera||kiyomizu dera
3|Potala Palace||potala
3|Shaolin Monastery||shaolin temple
3|Mahabodhi Temple
3|Meteora
3|Rock-Hewn Churches, Lalibela|Rock-Hewn Churches, Lalibela|lalibela
3|Karnak
3|Abu Simbel||abu simbel temples
3|Solomon's Temple||temple solomon;first temple
4|Urnes Stave Church||urnes
4|Borgund Stave Church||borgund
4|Wells Cathedral
4|Ely Cathedral
4|Winchester Cathedral
4|Speyer Cathedral
4|Strasbourg Cathedral
4|Ulm Minster
4|Matthias Church||matthias
4|Kazan Cathedral, Saint Petersburg|Kazan Cathedral, Saint Petersburg|kazan cathedral
4|Hagia Irene
4|Chora Church||chora
4|Selimiye Mosque||selimiye
4|Sheikh Lotfollah Mosque
4|Great Mosque of Kairouan||kairouan mosque
4|Great Mosque of Samarra||samarra mosque;malwiya
4|Itsukushima Shrine||itsukushima
4|Ise Grand Shrine||ise shrine
4|Bulguksa
4|Jokhang
4|Giant Wild Goose Pagoda||big wild goose pagoda
4|Meenakshi Temple||meenakshi amman temple
4|Brihadisvara Temple||brihadeeswarar
4|Konark Sun Temple||konark
4|Kashi Vishwanath Temple||kashi vishwanath
4|Prambanan
4|Wat Arun
4|Wat Phra Kaew||emerald buddha temple
4|Rila Monastery
4|Saint Catherine's Monastery||st catherines monastery
4|Second Temple
4|St. Patrick's Cathedral (Manhattan)|St. Patrick's Cathedral (Manhattan)|st patricks cathedral
4|Mexico City Metropolitan Cathedral||mexico city cathedral
4|Basilica of Our Lady of Guadalupe||guadalupe basilica
4|Saint Sophia Cathedral, Kyiv|Saint Sophia Cathedral, Kyiv|st sophia kyiv
5|Heddal Stave Church||heddal
5|Old North Church
5|Trinity Church (Manhattan)|Trinity Church (Manhattan)|trinity church
5|Cusco Cathedral
5|Notre-Dame Basilica (Montreal)|Notre-Dame Basilica (Montreal)|notre dame montreal
5|Cathedral of the Dormition|Dormition Cathedral, Moscow|dormition cathedral
5|Lama Temple
`,
nope:{
 'hallgrimskirkja|hassan 2 mosque|sheikh zayed mosque|faisal mosque|lotus temple|church savior spilled blood|savior spilled blood':'Built after 1900 &mdash; dig a little older!',
 'taj mahal':'A tomb, not a place of worship &mdash; magnificent though!'
}},

{id:'palaces', cat:'Places', q:'Name a famous royal palace', hint:'Homes of kings, emperors and sultans',
list:`
1|Palace of Versailles||versailles;chateau versailles
1|Buckingham Palace||buckingham
1|Forbidden City
2|Topkapı Palace||topkapi
2|Schönbrunn Palace||schonbrunn;schoenbrunn
2|Winter Palace
2|Peterhof Palace||peterhof
2|Potala Palace||potala
2|Louvre Palace||louvre
2|Hampton Court Palace||hampton court
2|Palace of Westminster||houses parliament;westminster palace
2|Kensington Palace
2|Holyrood Palace|Holyrood Palace|holyroodhouse;holyrood
2|Sanssouci
2|Royal Palace of Madrid||palacio real
2|Hofburg
2|Doge's Palace||doges palace;palazzo ducale
2|Alhambra
3|Pitti Palace||palazzo pitti
3|Palazzo Vecchio
3|Royal Palace of Caserta||caserta
3|Palace of Knossos||knossos
3|Persepolis
3|Gyeongbokgung
3|Tokyo Imperial Palace||imperial palace tokyo
3|Summer Palace
3|Old Summer Palace||yuanmingyuan
3|Hawa Mahal
3|Dolmabahçe Palace||dolmabahce
3|Grand Palace||grand palace bangkok
3|Royal Palace, Oslo|Royal Palace, Oslo|slottet;oslo palace
3|Château de Fontainebleau||fontainebleau
3|Catherine Palace
3|Blenheim Palace||blenheim
3|Diocletian's Palace||diocletians palace
3|Domus Aurea||golden house
3|Alcázar of Seville||alcazar seville;royal alcazar
3|El Escorial||escorial
4|Changdeokgung
4|Kyoto Imperial Palace
4|Mysore Palace
4|City Palace, Jaipur|City Palace, Jaipur|city palace jaipur
4|Golestan Palace||golestan
4|Amalienborg
4|Christiansborg Palace||christiansborg
4|Stockholm Palace||kungliga slottet
4|Drottningholm Palace||drottningholm
4|Royal Palace of Amsterdam||amsterdam palace
4|Tuileries Palace||tuileries
4|Nymphenburg Palace||nymphenburg
4|Charlottenburg Palace||charlottenburg
4|Belvedere, Vienna|Belvedere, Vienna|belvedere
4|Royal Castle, Warsaw|Royal Castle, Warsaw|warsaw royal castle
4|ʻIolani Palace||iolani palace
4|Pena Palace||pena
4|Neuschwanstein Castle||neuschwanstein
5|Ali Qapu
5|Royal Palace of Brussels||brussels palace
5|Palais-Royal||palais royal
5|Château de Malmaison||malmaison
5|Linderhof Palace||linderhof
5|Herrenchiemsee
5|Zwinger
5|Würzburg Residence||wurzburg residence
5|Wilanów Palace||wilanow
5|Pavlovsk Palace||pavlovsk
5|Livadia Palace||livadia
5|Palace of Queluz||queluz
5|Chapultepec Castle||chapultepec
6|Het Loo Palace||het loo
6|Bygdøy Royal Estate||bygdoy kongsgard
`,
nope:{
 'white house':'A presidential residence &mdash; not a royal palace!',
 'taj mahal':'A tomb &mdash; not a palace!'
}},

{id:'capitals', cat:'Places', q:'Name a city that used to be a capital', hint:'Of a country, kingdom or empire &mdash; but not any more',
list:`
1|Istanbul||constantinople;byzantium
1|Kyoto
1|Rio de Janeiro||rio
1|Saint Petersburg||st petersburg;petrograd;leningrad
2|Philadelphia
2|New York City||new york
2|Kolkata||calcutta
2|Bonn
2|Babylon
2|Thebes, Egypt|Thebes, Egypt|thebes;luxor
2|Memphis, Egypt|Memphis, Egypt|memphis
2|Alexandria
2|Persepolis
2|Xi'an||xian;changan;chang an
2|Nanjing||nanking
2|Kraków||krakow;cracow
2|Toledo, Spain|Toledo, Spain|toledo
2|Aachen||aix la chapelle
2|Ravenna
2|Nara||heijo kyo
2|Carthage
2|Cusco||cuzco
2|Karachi
2|Melbourne
2|Lagos
3|Luoyang
3|Turku||abo
3|Trondheim||nidaros
3|Bergen
3|Valladolid
3|Milan
3|Trier
3|Kamakura
3|Gyeongju
3|Kaesong
3|Huế||hue
3|Ayutthaya
3|Mandalay
3|Bagan||pagan
3|Angkor
3|Hampi||vijayanagara
3|Fatehpur Sikri
3|Agra
3|Lahore
3|Almaty||alma ata
3|Yangon||rangoon
3|Córdoba, Spain|Córdoba, Spain|cordoba
3|Nineveh
3|Samarkand
3|Isfahan
3|Winchester
3|Roskilde
4|Auckland
4|Granada
4|Fez, Morocco|Fez, Morocco|fez;fes
4|Marrakesh||marrakech
4|Great Zimbabwe
4|Aksum||axum
4|Meroë||meroe
4|Antioch
4|Samarra
4|Ctesiphon
4|Susa
4|Hattusa
4|Mycenae
4|Karakorum
4|Bukhara
4|Tabriz
4|Bursa
4|Edirne||adrianople
4|Konya
4|Abidjan
4|Salvador, Bahia|Salvador, Bahia|salvador;bahia
5|Russell, New Zealand|Okiato|russell;okiato
5|Quebec City||quebec
5|Kingston, Ontario|Kingston, Ontario|kingston
5|Dunfermline
5|Coimbra
5|Oviedo
5|León, Spain|León, Spain|leon
5|Kairouan
5|Gao
5|Gondar
5|Napata
5|Pasargadae
5|Assur||ashur
5|Nimrud
5|Sardis
5|Pella
5|Herat
5|Qazvin
5|Nicaea||iznik
5|Kaunas
5|Nafplio||nauplia
5|Cetinje
5|Veliko Tarnovo||tarnovo
5|Vladimir, Russia|Vladimir, Russia|vladimir
5|Esztergom
5|Gniezno
6|Niani
6|Aegina
6|Guimarães||guimaraes
6|Székesfehérvár||szekesfehervar
6|Zomba
6|Belize City
`,
nope:{
 'london|paris|washington|washington dc|tokyo|berlin|moscow|rome|beijing|oslo|madrid|cairo|athens|stockholm|copenhagen|delhi|new delhi':'Still a capital today &mdash; this dig wants former capitals!'
}},

{id:'olympics', cat:'Places', q:'Name a city that hosted the Olympic Games before 2000', hint:'Summer or Winter',
list:`
1|Athens|1896 Summer Olympics|athens 1896;athens 2004
1|London|1948 Summer Olympics|london 1948;london 1908
1|Paris|1924 Summer Olympics|paris 1924;paris 1900
1|Los Angeles|1984 Summer Olympics|la;los angeles 1984;los angeles 1932
2|Tokyo|1964 Summer Olympics|tokyo 1964
2|Berlin|1936 Summer Olympics|berlin 1936
2|Moscow|1980 Summer Olympics|moscow 1980
2|Barcelona|1992 Summer Olympics|barcelona 1992
2|Atlanta|1996 Summer Olympics|atlanta 1996
2|Rome|1960 Summer Olympics|rome 1960
2|Seoul|1988 Summer Olympics|seoul 1988
2|Mexico City|1968 Summer Olympics|mexico city 1968;mexico
2|Munich|1972 Summer Olympics|munich 1972;munchen
2|Montreal|1976 Summer Olympics|montreal 1976
3|Lillehammer|1994 Winter Olympics|lillehammer 1994
3|Amsterdam|1928 Summer Olympics|amsterdam 1928
3|Stockholm|1912 Summer Olympics|stockholm 1912
3|Helsinki|1952 Summer Olympics|helsinki 1952
3|Melbourne|1956 Summer Olympics|melbourne 1956
3|Oslo|1952 Winter Olympics|oslo 1952
3|Sarajevo|1984 Winter Olympics|sarajevo 1984
3|Calgary|1988 Winter Olympics|calgary 1988
3|Nagano|1998 Winter Olympics|nagano 1998
3|Lake Placid|1980 Winter Olympics|lake placid 1980;lake placid 1932
3|St. Moritz|1948 Winter Olympics|st moritz;saint moritz
3|Innsbruck|1976 Winter Olympics|innsbruck 1976;innsbruck 1964
3|Antwerp|1920 Summer Olympics|antwerp 1920
3|St. Louis|1904 Summer Olympics|st louis;saint louis
4|Chamonix|1924 Winter Olympics|chamonix 1924
4|Garmisch-Partenkirchen|1936 Winter Olympics|garmisch partenkirchen;garmisch
4|Cortina d'Ampezzo|1956 Winter Olympics|cortina dampezzo;cortina
4|Squaw Valley|1960 Winter Olympics|squaw valley 1960;palisades tahoe
4|Grenoble|1968 Winter Olympics|grenoble 1968
4|Sapporo|1972 Winter Olympics|sapporo 1972
4|Albertville|1992 Winter Olympics|albertville 1992
`,
nope:{
 'sydney|beijing|salt lake city|turin|torino|vancouver|sochi|pyeongchang|rio de janeiro|rio|london 2012|tokyo 2020|paris 2024':'Those Games came in 2000 or later &mdash; this dig stops at 1999!',
 'olympia':'Home of the ancient Games &mdash; but the modern Olympics began in 1896!'
}},

{id:'walls', cat:'Places', q:'Name a famous historic wall or fortification line', hint:'Walls, lines, dykes and ramparts',
list:`
1|Great Wall of China||great wall
1|Hadrian's Wall||hadrians wall
1|Berlin Wall
2|Walls of Constantinople||theodosian walls
2|Maginot Line||maginot
2|Atlantic Wall
2|Antonine Wall
2|Western Wall||wailing wall
2|Ishtar Gate
3|Walls of Jericho|Jericho|jericho walls
3|Siegfried Line
3|Mannerheim Line
3|Offa's Dyke||offas dyke
3|Danevirke||danewerk
3|Limes Germanicus||limes;roman limes
3|Aurelian Walls
3|Walls of Dubrovnik||dubrovnik walls
3|Walls of Jerusalem||jerusalem walls
3|Hindenburg Line
3|Korean Demilitarized Zone||dmz;korean dmz
3|Iron Curtain
3|The Alamo|Alamo Mission|alamo
4|Servian Wall
4|Long Walls||long walls athens
4|Walls of Ávila||avila walls
4|York city walls||york walls
4|Walls of Benin||benin walls
4|Great Wall of Gorgan||gorgan wall;red snake
4|Kremlin Wall
4|Bar Lev Line
4|Gustav Line
4|Gothic Line
4|Stalin Line
4|Inner German border
4|Fort Sumter
4|Kumbhalgarh
4|Sacsayhuamán||sacsayhuaman
4|Lines of Torres Vedras||torres vedras
4|Fortifications of Vauban||vauban fortifications
4|Suomenlinna||sveaborg
4|Peter and Paul Fortress
4|Brest Fortress
5|Chester city walls||chester walls
5|Mareth Line
5|Metaxas Line
5|Molotov Line
5|Peace lines||belfast peace walls
5|Green Line (Cyprus)|Green Line (Cyprus)|cyprus green line
5|Fortress of Louisbourg||louisbourg
5|Fortifications of Valletta||valletta fortifications
5|Anastasian Wall
5|Fredriksten||fredriksten fortress
5|Fort Douaumont||douaumont
5|Fort Eben-Emael||eben emael
5|Derbent Wall||derbent
6|Wansdyke
6|Trajan's Wall||trajans wall
6|Hexamilion wall||hexamilion
6|Morice Line
`,
amb:{'wall|the wall':'Which wall? Be more specific!'},
nope:{
 'pink floyd':'A band, not a wall!',
 'wall game thrones|helms deep':'Fiction!'
}},

{id:'bridges', cat:'Places', q:'Name a famous bridge built before 1950', hint:'Stone, iron, steel or rope',
list:`
1|Golden Gate Bridge||golden gate
1|Tower Bridge
1|Brooklyn Bridge
1|London Bridge
2|Ponte Vecchio
2|Rialto Bridge||rialto
2|Charles Bridge||karluv most
2|Sydney Harbour Bridge||sydney harbor bridge
2|Pont du Gard
2|Bridge of Sighs
2|Forth Bridge
2|Pont Neuf
3|Ponte Sant'Angelo||pons aelius;sant angelo bridge
3|Stari Most||mostar bridge
3|Széchenyi Chain Bridge||chain bridge;szechenyi bridge
3|The Iron Bridge||iron bridge;ironbridge
3|Clifton Suspension Bridge||clifton bridge
3|Tacoma Narrows Bridge (1940)|Tacoma Narrows Bridge (1940)|tacoma narrows;galloping gertie
3|Pont Saint-Bénézet||pont davignon;pont saint benezet;avignon bridge
3|Marco Polo Bridge||lugou bridge
3|Glenfinnan Viaduct||glenfinnan
3|Milvian Bridge||pons milvius
4|Menai Suspension Bridge||menai bridge
4|Tay Bridge
4|Alcántara Bridge||alcantara bridge
4|Zhaozhou Bridge||anji bridge
4|Si-o-se-pol||33 arches
4|Kapellbrücke||chapel bridge;kapellbrucke
4|Pont Alexandre III||alexandre 3
4|Pont des Arts
4|Westminster Bridge
4|Waterloo Bridge
4|George Washington Bridge
4|San Francisco–Oakland Bay Bridge||bay bridge
4|Ludendorff Bridge||remagen bridge;bridge remagen
4|Pegasus Bridge
4|John Frost Bridge||arnhem bridge
4|Howrah Bridge
4|Trajan's Bridge||trajans bridge
5|Khaju Bridge
5|Q'eswachaka||qeswachaka;inca rope bridge
5|Kintai Bridge
5|Nihonbashi
5|Old Bridge, Heidelberg|Old Bridge, Heidelberg|heidelberg bridge
5|Hohenzollern Bridge
5|Galata Bridge
5|Eads Bridge
5|Quebec Bridge
5|Ambassador Bridge
5|Victoria Falls Bridge
5|Pamban Bridge
5|Garabit viaduct||garabit
5|Ribblehead Viaduct||ribblehead
5|Landwasser Viaduct||landwasser
5|Pons Fabricius||ponte fabricio
5|Arkadiko Bridge
6|Göltzsch Viaduct||goltzsch
6|Krämerbrücke||kramerbrucke
6|Ponte della Maddalena||devils bridge lucca
6|Caravan Bridge
`,
nope:{
 'millau viaduct|millau|akashi kaikyo|oresund bridge|oresund|danyang kunshan|millennium bridge|gateshead millennium bridge':'Built after 1950 &mdash; dig deeper!',
 'bifrost|rainbow bridge':'A bridge of myth!'
}},

{id:'canals', cat:'Places', q:'Name a famous canal', hint:'Dug before 1950',
list:`
1|Suez Canal||suez
1|Panama Canal||panama
2|Grand Canal (China)|Grand Canal (China)|grand canal;beijing hangzhou canal
2|Erie Canal||erie
2|Kiel Canal||kiel;nord ostsee kanal
2|Corinth Canal||corinth
2|Canal du Midi||midi
2|Grand Canal (Venice)|Grand Canal (Venice)|canal grande;venice grand canal
3|Manchester Ship Canal
3|Göta Canal||gota canal;gota kanal
3|Caledonian Canal
3|Bridgewater Canal
3|Rideau Canal
3|White Sea–Baltic Canal||white sea canal;belomorkanal
3|Canals of Amsterdam||amsterdam canals;grachten
3|Canal of the Pharaohs||ancient suez canal;necho canal
3|Regent's Canal||regents canal
4|Telemark Canal||telemarkskanalen
4|Chesapeake and Ohio Canal||c o canal
4|Welland Canal
4|Canal Saint-Martin||saint martin canal
4|Moscow Canal
4|North Sea Canal||noordzeekanaal
4|Cape Cod Canal
4|Xerxes Canal
4|Lingqu Canal||lingqu
4|Pontcysyllte Aqueduct||llangollen canal
5|Illinois and Michigan Canal
5|Sault Ste. Marie Canal||soo locks
5|Canal de Briare||briare
5|Kennet and Avon Canal
5|Leeds and Liverpool Canal
5|Grand Union Canal
5|Forth and Clyde Canal
5|Houston Ship Channel
5|Trollhätte Canal||trollhatte
6|Canal of Castile||canal castilla
6|Mittelland Canal||mittellandkanal
6|Ludwig Canal||ludwigskanal
6|Royal Canal
6|Mahmoudiyah Canal||mahmoudiyah
`,
nope:{
 'mars canals|martian canals|canals mars':'An optical illusion &mdash; Mars has no canals!',
 'english channel|channel':'A natural strait &mdash; nobody dug that one!'
}},

{id:'libraries', cat:'Places', q:'Name a famous library or archive founded before 1900', hint:'Scrolls, codices, books and records',
list:`
1|Library of Alexandria||alexandria library;great library
1|Library of Congress
2|Vatican Library||vatican apostolic library
2|British Library||british museum library
2|Bodleian Library||bodleian
2|House of Wisdom||bayt al hikma
2|Library of Ashurbanipal||ashurbanipal
2|Library of Pergamum||pergamon library
2|Bibliothèque nationale de France||bnf;bibliotheque nationale
2|New York Public Library||nypl
2|Library of Celsus||celsus
3|Library of Trinity College Dublin||long room;trinity college library
3|Nalanda||nalanda library;nalanda university
3|Timbuktu manuscripts||timbuktu
3|Vatican Apostolic Archive||vatican secret archives;vatican archives
3|Radcliffe Camera
3|Laurentian Library||biblioteca laurenziana
4|Imperial Library of Constantinople||constantinople library
4|Abbey library of Saint Gall||st gall library;saint gall
4|Villa of the Papyri||herculaneum papyri
4|Library of al-Qarawiyyin|University of al-Qarawiyyin|qarawiyyin
4|The National Archives (United Kingdom)|The National Archives (United Kingdom)|national archives
5|Biblioteca Marciana||marciana
5|Royal Library of El Escorial|El Escorial|escorial library
5|Admont Abbey library||admont
5|Strahov Monastery||strahov library
5|Ebla tablets||ebla archive
5|Library of Hadrian||hadrians library
5|Bibliotheca Corviniana||corvina library
5|Russian State Library||lenin library
5|National Library of Russia
5|Boston Public Library
5|Library Company of Philadelphia
5|John Rylands Library||rylands
5|Wren Library
5|Cambridge University Library
5|Tianyi Chamber||tianyi ge
5|General Archive of the Indies||archivo general indias
6|Herzog August Library||herzog august
6|Biblioteca Malatestiana||malatestiana
6|National Library of Norway||nasjonalbiblioteket
6|Royal Danish Library
6|Carolina Rediviva
`,
nope:{
 'google|internet|wikipedia|amazon':'Handy &mdash; but far too modern!',
 'bibliotheca alexandrina':'Opened in 2002 &mdash; a new library honouring the old one!'
}}
);

/* Dug Up — more prompts: revolutions, founders, rebels and orators */
PROMPT_DATA.push(
{id:'frenchrev', cat:'Modern History', q:'Name a figure of the French Revolution', hint:'1789&ndash;1799 &mdash; royals, radicals and rivals',
list:`
1|Maximilien Robespierre||robespierre
1|Marie Antoinette
1|Louis XVI||louis 16
1|Napoleon||napoleon bonaparte;bonaparte
2|Georges Danton||danton
2|Jean-Paul Marat||marat
2|Charlotte Corday||corday
2|Marquis de Lafayette||lafayette
2|Louis Antoine de Saint-Just||saint just
2|Olympe de Gouges||gouges
2|Honoré Gabriel Riqueti, comte de Mirabeau|Honoré Gabriel Riqueti, comte de Mirabeau|mirabeau
2|Abbé Sieyès||sieyes
2|Joseph Fouché||fouche
2|Camille Desmoulins||desmoulins
2|Jacques Necker||necker
2|Madame Roland||manon roland
2|Jacques-Louis David||david
2|Joseph-Ignace Guillotin||guillotin
2|Paul Barras||barras
2|Charles-Maurice de Talleyrand-Périgord||talleyrand
3|Jacques Pierre Brissot||brissot
3|Jacques Hébert||hebert
3|Georges Couthon||couthon
3|Antoine Quentin Fouquier-Tinville||fouquier tinville
3|Jean Sylvain Bailly||bailly
3|Pierre Victurnien Vergniaud||vergniaud
3|Lazare Carnot||carnot
3|Jean-Lambert Tallien||tallien
3|Marquis de Condorcet||condorcet
3|Louis XVII||louis 17
3|Thomas Paine||paine
3|Joséphine de Beauharnais||josephine
4|Louis Philippe II, Duke of Orléans|Louis Philippe II, Duke of Orléans|philippe egalite
4|François-Noël Babeuf||babeuf;gracchus babeuf
4|Charles-Henri Sanson||sanson
4|Marie-Thérèse of France||madame royale
4|Princess Marie Louise of Savoy|Princess Marie Louise of Savoy|lamballe;princesse de lamballe
4|Madame du Barry||du barry
4|Claude Joseph Rouget de Lisle||rouget de lisle
4|Axel von Fersen the Younger||fersen;axel fersen
5|Thérésa Tallien||theresa tallien;madame tallien
5|Jacques Roux||roux
5|Théroigne de Méricourt||theroigne
5|Élisabeth of France||madame elisabeth
5|Bertrand Barère||barere
5|Jean-Baptiste Carrier||carrier
5|Jean-Baptiste Drouet||drouet
5|Antoine Barnave||barnave
5|Fabre d'Églantine||fabre deglantine;fabre eglantine
5|Charles François Dumouriez||dumouriez
5|François de Charette||charette
6|Jean-Marie Collot d'Herbois||collot dherbois;collot
6|Jacques Nicolas Billaud-Varenne||billaud varenne
6|Anacharsis Cloots||cloots
6|Pierre Gaspard Chaumette||chaumette
6|François Hanriot||hanriot
6|Jacques Cathelineau||cathelineau
6|Henri de La Rochejaquelein||rochejaquelein
`,
nope:{
 'louis 14|sun king':'Died in 1715 &mdash; long before the Revolution.',
 'lenin|trotsky|stalin':'A different revolution &mdash; Russia, 1917!'
}},

{id:'russrev', cat:'Modern History', q:'Name a figure of the Russian Revolution or Civil War', hint:'1905&ndash;1922 &mdash; Reds, Whites and Romanovs',
list:`
1|Vladimir Lenin||lenin
1|Joseph Stalin||stalin
1|Leon Trotsky||trotsky
1|Nicholas II||nicholas 2;tsar nicholas
2|Alexander Kerensky||kerensky
2|Grigori Rasputin||rasputin
2|Alexandra Feodorovna (Alix of Hesse)|Alexandra Feodorovna (Alix of Hesse)|alexandra feodorovna;tsarina alexandra
2|Grand Duchess Anastasia Nikolaevna of Russia|Grand Duchess Anastasia Nikolaevna of Russia|anastasia
2|Alexei Nikolaevich, Tsarevich of Russia|Alexei Nikolaevich, Tsarevich of Russia|tsarevich alexei;alexei romanov
2|Grigory Zinoviev||zinoviev
2|Lev Kamenev||kamenev
2|Nikolai Bukharin||bukharin
2|Felix Dzerzhinsky||dzerzhinsky
2|Nadezhda Krupskaya||krupskaya
2|Alexandra Kollontai||kollontai
3|Lavr Kornilov||kornilov
3|Yakov Sverdlov||sverdlov
3|Maxim Gorky||gorky
3|Anton Denikin||denikin
3|Alexander Kolchak||kolchak
3|Pyotr Wrangel||wrangel
3|Nestor Makhno||makhno
3|Julius Martov||martov
3|Georgi Plekhanov||plekhanov
3|Fanny Kaplan||kaplan
3|Inessa Armand||armand
3|Felix Yusupov||yusupov
3|John Reed (journalist)|John Reed (journalist)|john reed
4|Pavel Milyukov||milyukov
4|Georgy Lvov||prince lvov;lvov
4|Grand Duke Michael Alexandrovich of Russia|Grand Duke Michael Alexandrovich of Russia|grand duke michael
4|Mikhail Frunze||frunze
4|Semyon Budyonny||budyonny
4|Vasily Chapayev||chapayev;chapaev
4|Mikhail Tukhachevsky||tukhachevsky
4|Vladimir Mayakovsky||mayakovsky
4|Grand Duchess Olga Nikolaevna of Russia|Grand Duchess Olga Nikolaevna of Russia|olga nikolaevna
4|Grand Duchess Tatiana Nikolaevna of Russia|Grand Duchess Tatiana Nikolaevna of Russia|tatiana nikolaevna
4|Grand Duchess Maria Nikolaevna of Russia|Grand Duchess Maria Nikolaevna of Russia|maria nikolaevna
4|Father Gapon|Georgy Gapon|gapon
5|Vladimir Antonov-Ovseyenko||antonov ovseyenko
5|Mikhail Rodzianko||rodzianko
5|Viktor Chernov||chernov
5|Maria Spiridonova||spiridonova
5|Karl Radek||radek
5|Alexei Rykov||rykov
5|Sergo Ordzhonikidze||ordzhonikidze
5|Yakov Yurovsky||yurovsky
5|Anatoly Lunacharsky||lunacharsky
5|Nikolai Yudenich||yudenich
5|Grigory Semyonov||semyonov
5|Roman von Ungern-Sternberg||ungern sternberg;mad baron
6|Moisei Uritsky||uritsky
6|Vladimir Purishkevich||purishkevich
6|Pierre Gilliard||gilliard
6|Alexander Shlyapnikov||shlyapnikov
6|Anna Vyrubova||vyrubova
6|Irakli Tsereteli||tsereteli
`,
nope:{
 'robespierre|danton|marie antoinette':'A different revolution &mdash; France, 1789!',
 'putin|gorbachev|yeltsin|brezhnev':'Much later Russian history!'
}},

{id:'latam', cat:'Modern History', q:'Name a leader of independence in Latin America or the Caribbean', hint:'c. 1780&ndash;1900',
list:`
1|Simón Bolívar||bolivar;simon bolivar
1|José de San Martín||san martin
2|Miguel Hidalgo y Costilla||hidalgo;miguel hidalgo
2|Bernardo O'Higgins||ohiggins
2|Toussaint Louverture||louverture;toussaint
2|Antonio José de Sucre||sucre
2|Francisco de Miranda||miranda
2|José María Morelos||morelos
2|Agustín de Iturbide||iturbide
2|Pedro I of Brazil||pedro 1;dom pedro
2|Jean-Jacques Dessalines||dessalines
2|José Martí||marti
2|Manuela Sáenz||manuela saenz;saenz
2|Juana Azurduy de Padilla||juana azurduy;azurduy
3|Vicente Guerrero||guerrero
3|Ignacio Allende||allende
3|Josefa Ortiz de Domínguez||la corregidora;josefa ortiz
3|Francisco de Paula Santander||santander
3|José Gervasio Artigas||artigas
3|Manuel Belgrano||belgrano
3|Henri Christophe||christophe
3|Alexandre Pétion||petion
3|Túpac Amaru II||tupac amaru
3|Antonio Nariño||narino
3|Policarpa Salavarrieta||la pola;salavarrieta
3|Mariano Moreno||moreno
3|José Miguel Carrera||carrera
3|Thomas Cochrane, 10th Earl of Dundonald|Thomas Cochrane, 10th Earl of Dundonald|cochrane;lord cochrane
3|Tiradentes
3|Juan Pablo Duarte||duarte
4|Cornelio Saavedra||saavedra
4|Manuel Rodríguez Erdoíza||manuel rodriguez
4|José Bonifácio de Andrada||jose bonifacio;andrada
4|Francisco Morazán||morazan
4|Antonio Maceo Grajales||antonio maceo;maceo
4|Máximo Gómez||maximo gomez
4|Carlos Manuel de Céspedes||cespedes
4|José Antonio Páez||paez
4|Guadalupe Victoria
5|Leopoldina of Austria||leopoldina
5|Maria Quitéria||maria quiteria
5|Ramón Emeterio Betances||betances
5|Rafael Urdaneta||urdaneta
5|Leona Vicario||vicario
5|Bartolina Sisa||bartolina
5|Túpac Katari||tupac katari
5|Micaela Bastidas||bastidas
5|Juan Santamaría||santamaria
5|Andrés de Santa Cruz||santa cruz
5|Pedro Domingo Murillo||murillo
5|Martín Miguel de Güemes||guemes
5|José Gaspar Rodríguez de Francia||dr francia;rodriguez de francia
6|José Matías Delgado||matias delgado
6|José Félix Ribas||ribas
6|Santiago Mariño||marino
6|Mariano Matamoros||matamoros
6|Nicolás Bravo||nicolas bravo
6|José Olaya||olaya
6|Juan José Castelli||castelli
6|Juan Antonio Lavalleja||lavalleja
`,
nope:{
 'che guevara|che|fidel castro|castro|emiliano zapata|zapata|pancho villa':'A later revolutionary &mdash; this dig is about independence (c. 1780&ndash;1900).',
 'george washington|washington':'An independence leader &mdash; but of the United States!'
}},

{id:'founders', cat:'Modern History', q:'Name a Founding Father of the United States', hint:'Signers, framers and revolutionaries',
list:`
1|George Washington||washington
1|Thomas Jefferson||jefferson
1|Benjamin Franklin||franklin;ben franklin
1|Alexander Hamilton||hamilton
2|John Adams
2|James Madison||madison
2|John Jay||jay
2|Samuel Adams||sam adams
2|John Hancock||hancock
2|Patrick Henry
2|Paul Revere||revere
2|James Monroe||monroe
2|Thomas Paine||paine
2|Gouverneur Morris
2|John Marshall||marshall
3|George Mason||mason
3|Roger Sherman||sherman
3|Robert Morris (financier)|Robert Morris (financier)|robert morris
3|Benjamin Rush||rush
3|John Dickinson||dickinson
3|Elbridge Gerry||gerry
3|Charles Carroll of Carrollton||charles carroll
3|Richard Henry Lee
3|Abigail Adams
4|Henry Knox||knox
4|John Witherspoon||witherspoon
4|Caesar Rodney||rodney
4|Button Gwinnett||gwinnett
4|Charles Pinckney||pinckney
4|Edmund Randolph
4|James Wilson||wilson
4|Robert R. Livingston||livingston
5|Charles Cotesworth Pinckney
5|Peyton Randolph
5|Rufus King
5|William Paterson (judge)|William Paterson (judge)|william paterson;paterson
5|Oliver Ellsworth||ellsworth
5|George Wythe||wythe
5|Francis Hopkinson||hopkinson
5|Thomas McKean||mckean
5|Josiah Bartlett||bartlett
5|Haym Salomon||salomon
5|Mercy Otis Warren||mercy warren
5|James Otis Jr.||james otis;otis
5|Silas Deane||deane
6|Luther Martin
6|Stephen Hopkins (politician)|Stephen Hopkins (politician)|stephen hopkins
6|Lyman Hall
6|George Read (American politician, born 1733)|George Read (American politician, born 1733)|george read
6|Thomas Heyward Jr.||heyward
6|Arthur Middleton||middleton
6|Francis Lightfoot Lee
6|Carter Braxton||braxton
6|John Langdon (politician)|John Langdon (politician)|langdon
6|Nathaniel Gorham||gorham
6|Jonathan Dayton||dayton
6|Robert Treat Paine
`,
amb:{'adams':'John, Samuel or Abigail Adams? Add a first name!','pinckney':'Charles or Charles Cotesworth Pinckney? Be more specific!','randolph':'Edmund or Peyton Randolph? Add a first name!'},
nope:{
 'abraham lincoln|lincoln':'A great president &mdash; but born in 1809, long after the founding!',
 'george 3|king george':'The king they rebelled against!'
}},

{id:'suffrage', cat:'Modern History', q:'Name a campaigner for women\'s rights or the vote', hint:'Suffragists, suffragettes and pioneers, before 1950',
list:`
1|Emmeline Pankhurst||pankhurst
1|Susan B. Anthony||susan anthony;anthony
2|Elizabeth Cady Stanton||cady stanton;stanton
2|Sojourner Truth
2|Millicent Fawcett||fawcett
2|Emily Davison||emily wilding davison;davison
2|Christabel Pankhurst
2|Sylvia Pankhurst
2|Lucretia Mott||mott
2|Alice Paul
2|Mary Wollstonecraft||wollstonecraft
2|Olympe de Gouges||gouges
2|Ida B. Wells||ida wells;wells
2|Carrie Chapman Catt||catt
2|Lucy Stone
2|Kate Sheppard||sheppard
3|Frederick Douglass||douglass
3|Gina Krog||krog
3|Clara Zetkin||zetkin
3|John Stuart Mill||mill
3|Sarojini Naidu||naidu
3|Huda Sha'arawi||huda shaarawi;shaarawi
4|Aletta Jacobs||jacobs
4|Hubertine Auclert||auclert
4|Constance Markievicz||markievicz
4|Annie Kenney||kenney
4|Sophia Duleep Singh||duleep singh
4|Josephine Butler||butler
4|Harriet Taylor Mill||harriet taylor
4|Inez Milholland||milholland
4|Victoria Woodhull||woodhull
4|Mary Church Terrell||church terrell;terrell
4|Amelia Bloomer||bloomer
4|Julia Ward Howe||ward howe
4|Raden Adjeng Kartini||kartini
4|Qiu Jin
4|Jeannette Rankin||rankin
4|Nellie McClung||mcclung
5|Fredrikke Marie Qvam||qvam
5|Flora Drummond||drummond
5|Edith Garrud||garrud
5|Muriel Matters||matters
5|Charlotte Despard||despard
5|Lydia Becker||becker
5|Barbara Bodichon||bodichon
5|Harriot Stanton Blatch||stanton blatch
5|Anna Howard Shaw||howard shaw
5|Lucy Burns||burns
5|Frances Willard (suffragist)|Frances Willard (suffragist)|frances willard;willard
5|Matilda Joslyn Gage||gage
5|Bertha Lutz||lutz
5|Hiratsuka Raichō||hiratsuka raicho;raicho
5|Fusae Ichikawa||ichikawa
5|Begum Rokeya||rokeya
5|Minna Canth||canth
5|Fredrika Bremer||bremer
5|Emmeline Pethick-Lawrence||pethick lawrence
5|Vida Goldstein||goldstein
5|Emily Murphy||murphy
6|Hermila Galindo||galindo
6|Maud Wood Park||wood park
6|Catherine Helen Spence||spence
6|Rose Scott||rose scott
`,
nope:{
 'margaret thatcher|thatcher|hillary clinton':'A politician of later times &mdash; not a suffrage campaigner.'
}},

{id:'spies', cat:'Modern History', q:'Name a famous real-life spy or spymaster', hint:'Any era &mdash; no fictional agents!',
list:`
1|Mata Hari
2|Kim Philby||philby
2|Julius Rosenberg
2|Ethel Rosenberg
2|Klaus Fuchs||fuchs
2|Richard Sorge||sorge
2|Juan Pujol García||garbo;pujol
2|Virginia Hall
2|Noor Inayat Khan||inayat khan
2|Violette Szabo||szabo
2|Nancy Wake||wake
2|Belle Boyd
2|Nathan Hale||hale
2|Benedict Arnold||arnold
2|Francis Walsingham||walsingham
2|Sidney Reilly||reilly;ace spies
3|Harriet Tubman||tubman
3|John André||andre;major andre
3|Eddie Chapman||zigzag;agent zigzag
3|Duško Popov||dusko popov;popov;tricycle
3|Guy Burgess||burgess
3|Donald Maclean (spy)|Donald Maclean (spy)|donald maclean;maclean
3|Anthony Blunt||blunt
3|Oleg Gordievsky||gordievsky
3|Oleg Penkovsky||penkovsky
3|Robert Hanssen||hanssen
3|Aldrich Ames||ames
3|Francis Gary Powers||gary powers;powers
3|Rudolf Abel||abel
3|Anna Chapman||chapman
3|Josephine Baker||baker
3|Hattori Hanzō||hattori hanzo;hanzo
4|John Cairncross||cairncross
4|Jonathan Pollard||pollard
4|Krystyna Skarbek||christine granville;skarbek
4|Culper Ring||culper
4|Wilhelm Canaris||canaris
4|Markus Wolf||markus wolf
4|George Blake||blake
4|Eli Cohen||cohen
4|Edith Cavell||cavell
4|Christopher Marlowe||marlowe
4|Chevalier d'Éon||deon;d eon
5|Elizabeth Van Lew||van lew
5|Rose O'Neal Greenhow||greenhow
5|Pauline Cushman||cushman
5|Mary Bowser||bowser
5|James Armistead Lafayette||armistead
5|Agent 355
5|Daniel Defoe||defoe
5|Fritz Kolbe||kolbe
5|Reinhard Gehlen||gehlen
5|Günter Guillaume||guillaume
5|Ruth Werner||sonya;werner
5|Melita Norwood||norwood
5|John Anthony Walker||john walker
5|Leopold Trepper||trepper
5|Arne Treholt||treholt
5|Max Manus||manus
5|Gunnar Sønsteby||sonsteby
5|Giacomo Casanova||casanova
5|Pierre Beaumarchais||beaumarchais
5|Aphra Behn||behn
6|Fritz Joubert Duquesne||duquesne
6|Elsbeth Schragmüller||schragmuller;fraulein doktor
6|Ana Montes||montes
6|Harro Schulze-Boysen||schulze boysen
6|Velvalee Dickinson||velvalee
`,
amb:{'rosenberg':'Julius or Ethel Rosenberg? Add a first name!'},
nope:{
 'james bond|bond|007|jason bourne|george smiley|smiley|ethan hunt|austin powers':'Fiction!'
}},

{id:'decolon', cat:'Modern History', q:'Name a leader who fought to end colonial rule in Africa or Asia', hint:'Mostly 1900s',
list:`
1|Mahatma Gandhi||gandhi;mohandas gandhi
1|Nelson Mandela||mandela
2|Jawaharlal Nehru||nehru
2|Ho Chi Minh
2|Kwame Nkrumah||nkrumah
2|Jomo Kenyatta||kenyatta
2|Sukarno||soekarno
2|Muhammad Ali Jinnah||jinnah
2|Patrice Lumumba||lumumba
2|Julius Nyerere||nyerere
2|Subhas Chandra Bose||bose;netaji
2|Sheikh Mujibur Rahman||mujib;mujibur rahman
2|Aung San
2|Gamal Abdel Nasser||nasser
3|Habib Bourguiba||bourguiba
3|Ahmed Ben Bella||ben bella
3|Léopold Sédar Senghor||senghor
3|Kenneth Kaunda||kaunda
3|Robert Mugabe||mugabe
3|Sam Nujoma||nujoma
3|Amílcar Cabral||cabral
3|Samora Machel||machel
3|Agostinho Neto||neto
3|Ahmed Sékou Touré||sekou toure;toure
3|Félix Houphouët-Boigny||houphouet boigny
3|Emilio Aguinaldo||aguinaldo
3|José Rizal||rizal
3|Tunku Abdul Rahman||tunku
3|Lee Kuan Yew
3|Bhagat Singh
3|Vallabhbhai Patel||sardar patel;patel
3|B. R. Ambedkar||ambedkar
3|Omar Mukhtar||mukhtar
3|Haile Selassie||selassie
3|Mustafa Kemal Atatürk||ataturk;mustafa kemal
4|Andrés Bonifacio||bonifacio
4|Syngman Rhee||rhee
4|Kim Ku
4|Yu Gwan-sun
4|Xanana Gusmão||gusmao
4|José Ramos-Horta||ramos horta
4|Mohammad Hatta||hatta
4|Abdul Ghaffar Khan||ghaffar khan;frontier gandhi
4|Bal Gangadhar Tilak||tilak
4|Sarojini Naidu||naidu
4|Abd el-Krim||abd el krim
4|Saad Zaghloul||zaghloul
4|Hastings Banda||banda
4|Seretse Khama||khama
4|Steve Biko||biko
4|Oliver Tambo||tambo
4|Nnamdi Azikiwe||azikiwe
4|Yaa Asantewaa||asantewaa
5|Messali Hadj||messali
5|Dedan Kimathi||kimathi
5|Tom Mboya||mboya
5|Milton Obote||obote
5|Walter Sisulu||sisulu
5|Obafemi Awolowo||awolowo
5|Funmilayo Ransome-Kuti||ransome kuti
5|Eduardo Mondlane||mondlane
5|Annie Besant||besant
6|Allal al-Fassi||al fassi
6|Ruben Um Nyobè||um nyobe
6|Sylvanus Olympio||olympio
6|Herbert Macaulay||macaulay
6|Jaramogi Oginga Odinga||oginga odinga
6|Bai Bureh
`,
nope:{
 'george washington|simon bolivar|bolivar':'An independence leader &mdash; but in the Americas!',
 'cecil rhodes|rhodes|lord curzon':'A colonial ruler &mdash; the other side of this story.'
}},

{id:'assassinations', cat:'Modern History', q:'Name a famous person who was assassinated', hint:'Any era &mdash; name the victim',
list:`
1|Julius Caesar||caesar;assassination julius caesar
1|Abraham Lincoln||lincoln
1|John F. Kennedy||jfk;kennedy;john kennedy
1|Archduke Franz Ferdinand of Austria|Archduke Franz Ferdinand of Austria|franz ferdinand
2|Martin Luther King Jr.||mlk;martin luther;martin luther jr
2|Mahatma Gandhi||gandhi
2|Malcolm X
2|Robert F. Kennedy||rfk;bobby kennedy
2|Thomas Becket||becket
2|Leon Trotsky||trotsky
2|Yitzhak Rabin||rabin
2|Anwar Sadat||sadat
2|Indira Gandhi
2|Olof Palme||palme
2|Benazir Bhutto||bhutto
3|Philip II of Macedon||philip 2
3|William McKinley||mckinley
3|James A. Garfield||garfield
3|Alexander II of Russia||alexander 2
3|Empress Elisabeth of Austria|Empress Elisabeth of Austria|sisi;elisabeth austria
3|Grigori Rasputin||rasputin
3|Harvey Milk||milk
3|John Lennon||lennon
3|Rajiv Gandhi
3|Patrice Lumumba||lumumba
3|Shinzo Abe||abe
3|Caligula
3|Jean-Paul Marat||marat
3|Reinhard Heydrich||heydrich
3|Alexander Litvinenko||litvinenko
4|Henry IV of France||henry 4;henri 4
4|William the Silent||william orange
4|Spencer Perceval||perceval
4|Huey Long||long
4|Medgar Evers||evers
4|Ngo Dinh Diem||diem
4|Park Chung Hee||park chung hee
4|Itō Hirobumi||ito hirobumi
4|Sakamoto Ryōma||sakamoto ryoma
4|Commodus
4|Domitian
4|Tiberius Gracchus
4|Paul I of Russia||paul 1
4|Gustav III||gustav 3
4|Alexander I of Yugoslavia||alexander 1 yugoslavia
4|Rosa Luxemburg||luxemburg
4|Pim Fortuyn||fortuyn
4|Theo van Gogh (film director)|Theo van Gogh (film director)|theo van gogh
4|Anna Lindh||lindh
4|Jo Cox
4|Boris Nemtsov||nemtsov
4|Anna Politkovskaya||politkovskaya
4|Kim Jong-nam
4|Louis Mountbatten, 1st Earl Mountbatten of Burma|Louis Mountbatten, 1st Earl Mountbatten of Burma|mountbatten
4|Michael Collins (Irish leader)|Michael Collins (Irish leader)|michael collins
4|Fred Hampton||hampton
4|Óscar Romero||romero
4|Benigno Aquino Jr.||ninoy aquino;benigno aquino
4|Rafic Hariri||hariri
4|Ali ibn Abi Talib||ali
4|Umar||umar ibn al khattab
4|Albrecht von Wallenstein||wallenstein
5|Liaquat Ali Khan||liaquat
5|Inukai Tsuyoshi||inukai
5|Ii Naosuke||naosuke
5|Umberto I of Italy||umberto 1
5|Carlos I of Portugal||carlos 1
5|Engelbert Dollfuss||dollfuss
5|Walther Rathenau||rathenau
5|Zoran Đinđić||djindjic;dindic
5|Folke Bernadotte||bernadotte
5|Abdullah I of Jordan||abdullah 1
5|Faisal of Saudi Arabia||king faisal;faisal
5|Uthman
5|Henry Stuart, Lord Darnley||darnley;lord darnley
5|David Rizzio||rizzio
5|George Villiers, 1st Duke of Buckingham|George Villiers, 1st Duke of Buckingham|buckingham;george villiers
5|Henry III of France||henry 3
5|Conrad of Montferrat||conrad montferrat
5|Nizam al-Mulk||nizam al mulk
5|Edward II of England||edward 2
6|Airey Neave||neave
6|Kurt Eisner||eisner
6|Luis Carlos Galán||galan
6|Edward the Martyr
6|James I of Scotland||james 1
6|Concino Concini||concini
`,
nope:{
 'hassan sabbah|hassan i sabbah':'Founder of the Order of Assassins &mdash; the hunter, not the hunted!',
 'brutus|john wilkes booth|lee harvey oswald|oswald|gavrilo princip|princip':'That\'s the assassin &mdash; name the victim!'
}},

{id:'speeches', cat:'Modern History', q:'Name a famous speech from history', hint:'Title or famous line',
list:`
1|I Have a Dream||dream speech
1|Gettysburg Address||gettysburg
2|We shall fight on the beaches||fight beaches;beaches speech
2|Their finest hour||finest hour
2|Blood, toil, tears and sweat||blood toil tears sweat
2|Never was so much owed by so many to so few|Never was so much owed by so many to so few|the few;so few
2|Ich bin ein Berliner||ich bin ein berliner;berliner speech
2|Tear down this wall!||tear down this wall
2|Pericles' Funeral Oration||funeral oration;pericles funeral oration
2|Sermon on the Mount
2|Give me liberty, or give me death!||give me liberty;liberty or death
2|Inaugural address of John F. Kennedy|Inaugural address of John F. Kennedy|ask not;kennedy inaugural
2|Infamy speech||day infamy;date which will live infamy
2|We choose to go to the Moon||moon speech;we choose go moon
2|Quit India speech||do or die;quit india
2|Tryst with Destiny||tryst destiny
3|Four Freedoms
3|Sinews of Peace||iron curtain speech
3|Speech to the Troops at Tilbury||tilbury speech;heart stomach king
3|Catilinarian Orations||catilinarians;in catilinam
3|George Washington's Farewell Address|George Washington's Farewell Address|farewell address
3|Eisenhower's farewell address||military industrial complex
3|I've Been to the Mountaintop||mountaintop speech
3|Wind of Change (speech)|Wind of Change (speech)|wind change
3|Rivers of Blood speech||rivers blood
3|Abraham Lincoln's second inaugural address|Abraham Lincoln's second inaugural address|malice toward none;second inaugural
3|House Divided Speech||house divided
3|Nothing to fear but fear itself|First inauguration of Franklin D. Roosevelt|fear itself;nothing fear but fear itself
3|Luckiest Man|Lou Gehrig|luckiest man;lou gehrig speech
3|I Am Prepared to Die||prepared die
3|Ain't I a Woman|Ain't I a Woman?|aint i woman
3|What to the Slave Is the Fourth of July|What to the Slave Is the Fourth of July?|what slave fourth july
3|Here I stand|Diet of Worms|here i stand
3|Council of Clermont||clermont;deus vult;urban 2 speech
3|Appeal of 18 June||appel du 18 juin;appeal 18 june
3|On the Cult of Personality and Its Consequences|On the Cult of Personality and Its Consequences|secret speech
3|1939 King's Speech|George VI|kings speech
3|Apology (Plato)|Apology (Plato)|apology socrates
4|Philippics||philippic
4|Atoms for Peace
4|The Ballot or the Bullet||ballot bullet
4|Checkers speech||checkers
4|A Time for Choosing||time choosing
4|The lady's not for turning|The lady's not for turning|lady not for turning
4|Cross of Gold speech||cross gold
4|Citizenship in a Republic||man arena
4|I am not a crook||not crook
4|Freedom or death (speech)|Freedom or death (speech)|freedom or death
4|I Will Fight No More Forever||fight no more forever
4|Chief Seattle's speech||chief seattle
4|Annus horribilis||annus horribilis
4|Edward VIII abdication crisis|Edward VIII abdication crisis|abdication speech
4|Space Shuttle Challenger disaster speech|Space Shuttle Challenger disaster|challenger speech;slipped surly bonds
4|A More Perfect Union (speech)|A More Perfect Union (speech)|more perfect union
4|Statement on the assassination of Martin Luther King Jr.|Robert F. Kennedy's speech on the assassination of Martin Luther King Jr.|rfk mlk speech
5|Haile Selassie's speech to the League of Nations|Haile Selassie|selassie league nations
5|Malala Day|Malala Yousafzai|malala speech
`,
nope:{
 'to be or not to be|friends romans countrymen|once more unto breach':'Shakespeare &mdash; a speech from a play, not from history!',
 'may force be with you':'Fiction!'
}}
);

/* Dug Up — more prompts: rogues, curiosities, dynasties and learning */
PROMPT_DATA.push(
{id:'pirates', cat:'Rogues & Outlaws', q:'Name a famous real pirate or privateer', hint:'Buccaneers, corsairs and sea raiders',
list:`
1|Blackbeard||edward teach;teach
1|Francis Drake||drake;sir francis drake
2|Henry Morgan||captain morgan;morgan
2|William Kidd||captain kidd;kidd
2|Anne Bonny||bonny
2|Mary Read
2|Calico Jack||jack rackham;rackham
2|Bartholomew Roberts||black bart;roberts
2|Ching Shih||zheng yi sao;cheng i sao
2|Grace O'Malley||granuaile;grainne mhaol
2|Hayreddin Barbarossa||barbarossa
2|Samuel Bellamy||black sam bellamy;black sam;bellamy
2|Stede Bonnet||bonnet;gentleman pirate
2|Henry Every||long ben;henry avery;every
2|Jean Lafitte||lafitte
3|Walter Raleigh||raleigh
3|John Hawkins (naval commander)|John Hawkins (naval commander)|john hawkins;hawkins
3|Charles Vane||vane
3|Klaus Störtebeker||stortebeker
4|Edward Low||ned low
4|Benjamin Hornigold||hornigold
4|Edward England
4|Thomas Tew||tew
4|Olivier Levasseur||la buse;levasseur
4|François l'Olonnais||lolonnais;olonnais
4|Sayyida al Hurra||al hurra
4|Koxinga||zheng chenggong
4|Turgut Reis||dragut
4|Oruç Reis||oruc reis;aruj
4|Piri Reis
4|Jan Janszoon||murat reis
4|William Dampier||dampier
4|Piet Hein (naval officer)|Piet Hein (naval officer)|piet hein
4|Robert Surcouf||surcouf
4|Jean Bart
4|Thomas Cavendish||cavendish
4|Cilician pirates||cilicia pirates
5|Henry Jennings||jennings
5|Victual Brothers||vitalienbruder
5|Jacquotte Delahaye||delahaye
5|Zheng Yi||cheng i
5|Cheung Po Tsai||cheung po
5|Kemal Reis
5|John Ward (pirate)|John Ward (pirate)|jack ward
5|Laurens de Graaf||de graaf
5|René Duguay-Trouin||duguay trouin
5|Howell Davis||davis
5|Israel Hands||hands
5|Teuta||queen teuta
5|Eustace the Monk||eustace
5|Roche Braziliano||braziliano
6|Gödeke Michels||michels
6|Wang Zhi (pirate)|Wang Zhi (pirate)|wang zhi
6|Murakami Takeyoshi||murakami
6|Peter Easton||easton
6|Henry Mainwaring||mainwaring
6|Bartholomew Sharp||sharp
6|Rachel Wall
6|Black Caesar (pirate)|Black Caesar (pirate)|black caesar
6|Paulsgrave Williams
6|Christopher Condent||condent
6|Christopher Myngs||myngs
`,
nope:{
 'jack sparrow|captain jack sparrow|captain hook|hook|long john silver|luffy|dread pirate roberts|captain barbossa':'Fiction!'
}},

{id:'outlaws', cat:'Rogues & Outlaws', q:'Name a famous outlaw, bandit or gangster', hint:'Real rogues, before 1950',
list:`
1|Billy the Kid||william bonney
1|Jesse James
1|Al Capone||capone;scarface
1|Bonnie and Clyde||bonnie parker;clyde barrow;bonnie;clyde
2|Butch Cassidy||cassidy
2|Sundance Kid
2|Ned Kelly
2|Dick Turpin||turpin
2|John Dillinger||dillinger
2|Baby Face Nelson
2|Pretty Boy Floyd
2|Machine Gun Kelly
2|Doc Holliday||holliday
2|Belle Starr
2|Lucky Luciano||luciano
2|Bugsy Siegel||siegel
3|Wild Bunch
3|Black Bart (outlaw)|Black Bart (outlaw)|black bart
3|Cole Younger||younger
3|Sam Bass
3|John Wesley Hardin||hardin
3|Dalton Gang||daltons
3|Ma Barker||kate barker
3|Meyer Lansky||lansky
3|Dutch Schultz||schultz
3|Arnold Rothstein||rothstein
3|Rob Roy MacGregor||rob roy
3|Pancho Villa||villa
4|Frank Costello||costello
4|Bugs Moran||moran
4|Hereward the Wake||hereward
4|Stenka Razin||razin
4|Yemelyan Pugachev||pugachev
4|Juraj Jánošík||janosik
4|Ishikawa Goemon||goemon
4|Joaquin Murrieta||murrieta
4|Lampião||lampiao
4|Jonathan Wild
4|Jack Sheppard
4|Burke and Hare murders|Burke and Hare murders|burke hare
4|Johnny Ringo||ringo
4|Ike Clanton||clanton
5|Salvatore Giuliano||giuliano
5|Nezumi Kozō||nezumi kozo
5|Song Jiang
5|Tiburcio Vásquez||vasquez
5|Maria Bonita
5|Captain Thunderbolt||thunderbolt
5|Ben Hall (bushranger)|Ben Hall (bushranger)|ben hall
5|Claude Duval||duval
5|Mary Frith||moll cutpurse
5|William Brodie||deacon brodie
5|Henry Plummer||plummer
5|Big Nose Kate
5|Pearl Hart
5|Kid Curry
5|Black Jack Ketchum||ketchum
5|Louis Dominique Cartouche||cartouche
5|Schinderhannes
5|Louis Mandrin||mandrin
6|Captain Moonlite||moonlite
6|Clay Allison||allison
6|Bill Doolin||doolin
6|Cherokee Bill
6|Rufus Buck
6|Harry Tracy
6|Diego Corrientes||corrientes
`,
nope:{
 'robin hood':'A legend &mdash; though perhaps inspired by real outlaws!',
 'wyatt earp|earp|pat garrett|eliot ness|bat masterson':'A lawman &mdash; the other side of the badge!',
 'kray twins|ronnie kray|reggie kray|john gotti|pablo escobar|escobar':'Active after 1950 &mdash; this dig stops at 1950.',
 'jack ripper':'A murderer never caught &mdash; not quite an outlaw.'
}},

{id:'animals', cat:'Curiosities', q:'Name a famous real animal from history', hint:'Creatures with a place in the history books',
list:`
1|Laika||laika dog
1|Hachikō||hachiko
1|Dolly (sheep)|Dolly (sheep)|dolly;dolly sheep
2|Bucephalus||bucephalas
2|Marengo (horse)|Marengo (horse)|marengo
2|Balto
2|Sergeant Stubby||stubby
2|Cher Ami
2|Ham (chimpanzee)|Ham (chimpanzee)|ham
2|Belka and Strelka|Belka and Strelka (dogs)|belka;strelka
2|Jumbo
2|Clever Hans
2|Greyfriars Bobby
2|Phar Lap
2|Seabiscuit
2|Secretariat (horse)|Secretariat (horse)|secretariat
2|Koko (gorilla)|Koko (gorilla)|koko
2|Harambe
2|Paul the Octopus||paul octopus
2|Knut (polar bear)|Knut (polar bear)|knut
2|Wojtek (bear)|Wojtek (bear)|wojtek
2|Incitatus
2|Martha (passenger pigeon)|Martha (pigeon)|martha
2|Lonesome George
3|Copenhagen (horse)|Copenhagen (horse)|copenhagen
3|Togo (dog)|Togo (dog)|togo
3|Comanche (horse)|Comanche (horse)|comanche
3|Traveller (horse)|Traveller (horse)|traveller
3|Smokey Bear
3|Unsinkable Sam
3|Larry (cat)|Larry (cat)|larry
3|Félicette||felicette
3|Jonathan (tortoise)|Jonathan (tortoise)|jonathan
3|Rin Tin Tin
4|Simon (cat)|Simon (cat)|simon
4|Benjamin (thylacine)|Benjamin (thylacine)|benjamin;last thylacine
4|Keiko (orca)|Keiko (orca)|keiko
4|Tilikum (orca)|Tilikum (orca)|tilikum
4|Shamu
4|Fala (dog)|Fala (dog)|fala
4|Blondi
4|Topsy (elephant)|Topsy (elephant)|topsy
4|Hanno (elephant)|Hanno (elephant)|hanno
4|Abul-Abbas||abul abbas
4|Dürer's Rhinoceros||durers rhinoceros;durer rhino
4|Alex (parrot)|Alex (parrot)|alex
4|Nim Chimpsky
4|Albert II (monkey)|Albert II (monkey)|albert 2
4|Mike the Headless Chicken||headless chicken
4|Pickles (dog)|Pickles (dog)|pickles
5|Mrs Chippy||mrs chippy
5|Harriet (tortoise)|Harriet (tortoise)|harriet
5|Checkers (dog)|Checkers (dog)|checkers
5|Bo (dog)|Bo (dog)|bo
5|Bamse (dog)|Bamse (dog)|bamse
5|Gander (dog)|Gander (dog)|gander
5|Judy (dog)|Judy (dog)|judy
5|Old Abe
5|Mary (elephant)|Mary (elephant)|mary
5|Clara (rhinoceros)|Clara (rhinoceros)|clara
5|Zarafa (giraffe)|Zarafa (giraffe)|zarafa
5|Chi Chi (giant panda)|Chi Chi (giant panda)|chi chi
5|Washoe (chimpanzee)|Washoe (chimpanzee)|washoe
5|Kanzi
5|Enos (chimpanzee)|Enos (chimpanzee)|enos
5|Chaser (dog)|Chaser (dog)|chaser
5|Bobbie the Wonder Dog||bobbie
6|Guy the Gorilla
6|Miss Baker
6|Owney (dog)|Owney (dog)|owney
6|G.I. Joe (pigeon)|G.I. Joe (pigeon)|gi joe
6|Winkie (pigeon)|Winkie (pigeon)|winkie
6|Old Tom (orca)|Old Tom (orca)|old tom
6|Tamworth Two||tamworth two
`,
nope:{
 'lassie|scooby doo|garfield|snoopy|mickey mouse|nemo|black beauty|moby dick':'A fictional animal!',
 'pegasus|cerberus|kraken|sleipnir':'A creature of myth!'
}},

{id:'trials', cat:'Curiosities', q:'Name a famous trial or court case', hint:'Any era, any country',
list:`
1|Trial of Socrates||socrates trial
1|Nuremberg trials||nuremberg
1|Salem witch trials||salem
2|Galileo affair||galileo trial;trial galileo
2|Trial of Joan of Arc||joan arc trial
2|Scopes trial||monkey trial;scopes
2|Trial of Charles I|Execution of Charles I|charles 1 trial
2|Dreyfus affair||dreyfus
2|Eichmann trial||eichmann
2|O. J. Simpson murder case||oj simpson;o j simpson trial
2|Rivonia Trial||rivonia;mandela trial
2|Sanhedrin trial of Jesus||trial jesus
2|Brown v. Board of Education||brown board education;brown v board
2|Roe v. Wade||roe wade
3|Trial of Saddam Hussein||saddam trial
3|International Military Tribunal for the Far East||tokyo trial;tokyo trials
3|Trials of Oscar Wilde|Oscar Wilde|oscar wilde trial
3|Sacco and Vanzetti||sacco vanzetti
3|Leopold and Loeb||leopold loeb
3|Chicago Seven||chicago 7;chicago eight
3|Marbury v. Madison||marbury madison
3|Dred Scott v. Sandford||dred scott
3|Plessy v. Ferguson||plessy ferguson
3|Miranda v. Arizona||miranda
3|United States v. The Amistad||amistad
3|Execution of Louis XVI||louis 16 trial
3|Moscow trials||show trials
3|Lizzie Borden||lizzie borden trial
3|Scottsboro Boys||scottsboro
3|Julius and Ethel Rosenberg||rosenberg trial
4|Trial of Thomas More|Thomas More|thomas more trial
4|Trial of Mary, Queen of Scots|Mary, Queen of Scots|mary queen scots trial
4|Trial of Marie Antoinette|Marie Antoinette|marie antoinette trial
4|Doctors' trial||doctors trial
4|Frankfurt Auschwitz trials||auschwitz trials
4|Trial of Vidkun Quisling|Vidkun Quisling|quisling trial
4|Trials of the Knights Templar|Trials of the Knights Templar|templar trials
4|Pendle witches||pendle
4|Trial of Jan Hus|Jan Hus|hus trial
4|Trial of Giordano Bruno|Giordano Bruno|bruno trial
4|R v Penguin Books Ltd||lady chatterley trial
4|Impeachment of Andrew Johnson||andrew johnson impeachment
4|Black Sox Scandal||black sox
4|Lindbergh kidnapping||hauptmann trial;lindbergh trial
4|Trial of the Gang of Four|Gang of Four|gang four trial
4|Trial of Nicolae and Elena Ceaușescu|Trial of Nicolae and Elena Ceaușescu|ceausescu trial
4|Trial of Slobodan Milošević||milosevic trial
5|Trial of Gilles de Rais|Gilles de Rais|gilles de rais
5|North Berwick witch trials||north berwick
5|Vardø witch trials||vardo witch trials
5|Dachau trials
5|Belsen trial
5|Trial of Philippe Pétain|Philippe Pétain|petain trial
5|Impeachment of Warren Hastings||warren hastings
5|Trial of Verres|Gaius Verres|verres
5|Great Trial of 1922|Mahatma Gandhi|gandhi trial
5|Lahore Conspiracy Case trial|Lahore Conspiracy Case trial|lahore conspiracy
5|Trial of the Pyx||pyx
6|Würzburg witch trial||wurzburg witch trial
6|Trial of the Generals|Battle of Arginusae|arginusae trial
6|Trial of Phryne|Phryne|phryne
`,
nope:{
 'judge judy|perry mason|kill mockingbird|twelve angry men':'Fiction (or television)!'
}},

{id:'treasures', cat:'Curiosities', q:'Name a famous treasure, hoard or crown jewel', hint:'Real or legendary &mdash; lost, found or locked away',
list:`
1|Holy Grail||grail
1|Ark of the Covenant||ark covenant
1|El Dorado
1|Amber Room
2|Crown Jewels of the United Kingdom||crown jewels
2|Tutankhamun's tomb|KV62|tutankhamun treasure;tutankhamun tomb
2|Sutton Hoo||sutton hoo treasure
2|Staffordshire Hoard
2|Oak Island||oak island money pit;money pit
2|Shroud of Turin||turin shroud
2|Hope Diamond
2|Koh-i-Noor||koh i noor;kohinoor
3|Treasure of Lima
3|Nazi gold
3|Yamashita's gold||yamashita gold;yamashita treasure
3|Fabergé egg||faberge egg;faberge eggs
3|Priam's Treasure||priams treasure
3|Atahualpa's ransom|Atahualpa|atahualpa ransom
3|King John's treasure|King John's treasure|king johns treasure
3|Holy Lance||spear destiny
3|Cullinan Diamond||cullinan
3|Peacock Throne
3|San José (ship)|San José (ship)|san jose galleon
3|Nuestra Señora de Atocha||atocha
3|Lost Dutchman's Gold Mine||lost dutchman
3|Knights Templar legends|Knights Templar legends|templar treasure
3|Mask of Agamemnon
4|Honjo Masamune||honjo masamune
4|Library of Ivan the Terrible||ivan library
4|Montezuma's treasure|Montezuma II|montezuma treasure
4|Copper Scroll
4|Florentine Diamond
4|Whydah Gally||whydah
4|Beale ciphers||beale treasure
4|Fenn treasure||forrest fenn
4|Hoxne Hoard
4|Varna Necropolis||varna gold
4|Bactrian gold||tillya tepe
4|Gundestrup cauldron
4|Rennes-le-Château||rennes le chateau
4|Iron Crown of Lombardy||iron crown
4|Honours of Scotland||scottish crown jewels
4|Irish Crown Jewels
4|Isabella Stewart Gardner Museum theft||gardner museum heist
4|Imperial Regalia of Japan||kusanagi;three sacred treasures
4|Heirloom Seal of the Realm||heirloom seal
4|Romanov jewels|Russian Crown Jewels|romanov jewels;russian crown jewels
5|Mildenhall Treasure
5|Snettisham Hoard
5|Cuerdale Hoard
5|Panagyurishte Treasure
5|Treasure of Nimrud|Nimrud|nimrud treasure
5|Golden horns of Gallehus||gallehus horns
5|Ardagh Chalice
5|Tara Brooch
5|Crown of Saint Wenceslas||wenceslas crown
5|Imperial Crown of the Holy Roman Empire||imperial crown hre
5|Kruger Millions
5|Confederate gold
5|The Concert (Vermeer)|The Concert (Vermeer)|concert vermeer
5|Just Judges|Ghent Altarpiece|just judges
6|Spillings Hoard
6|Hiddensee treasure
6|Treasure of Guarrazar||guarrazar
6|Pietroasele Treasure||pietroasa
6|Treasure of Nagyszentmiklós||nagyszentmiklos
6|Mold cape
6|Derrynaflan Hoard
6|Hildesheim Treasure
6|Boscoreale Treasure
6|Treasure of Lobengula|Lobengula|lobengula treasure
`,
nope:{
 'one piece|treasure sierra madre|national treasure|smaug':'Fiction!'
}},

{id:'hoaxes', cat:'Curiosities', q:'Name a famous hoax, forgery or impostor', hint:'Fakes that fooled the world',
list:`
1|Piltdown Man||piltdown
1|The War of the Worlds (1938 radio drama)|The War of the Worlds (1938 radio drama)|war worlds radio;war worlds broadcast;orson welles
1|Cottingley Fairies||cottingley
2|Hitler Diaries||hitler diaries;konrad kujau
2|Donation of Constantine
2|Cardiff Giant
2|Spaghetti-tree hoax||spaghetti tree
2|Surgeon's Photograph|Loch Ness Monster|surgeons photograph;loch ness photo
2|Mechanical Turk||turk chess;the turk
2|Anna Anderson||fake anastasia;anastasia impostor
2|Victor Lustig||lustig;eiffel tower sale
2|Charles Ponzi||ponzi;ponzi scheme
3|Han van Meegeren||van meegeren
3|Protocols of the Elders of Zion||protocols zion
3|Crystal skull||crystal skulls
3|Fiji mermaid||feejee mermaid
3|Great Moon Hoax||moon hoax 1835
3|Crop circle||crop circles
3|Frank Abagnale||abagnale;catch me if you can
3|Priory of Sion||plantard
3|Perkin Warbeck||warbeck
3|False Dmitry I||false dmitry
3|Martin Guerre||guerre
4|Alien autopsy||alien autopsy film
4|Sokal affair||sokal
4|Mary Toft||toft
4|Ossian||macpherson ossian
4|Vinland Map
4|Zinoviev letter
4|Kensington Runestone
4|Clifford Irving||irving hughes autobiography
4|George C. Parker||parker brooklyn bridge
4|Gregor MacGregor||poyais
4|Dreadnought hoax
4|Fox sisters
4|Amityville haunting|The Amityville Horror|amityville
4|Balloon boy hoax||balloon boy
5|Princess Caraboo||caraboo
5|George Psalmanazar||psalmanazar
5|Taxil hoax
5|Drake's Plate of Brass||plate brass
5|Archaeoraptor
5|Lambert Simnel||simnel
5|Tichborne case||tichborne claimant
5|William Henry Ireland||shakespeare forgeries
5|Thomas Chatterton||rowley poems;chatterton
5|Elmyr de Hory||de hory
5|Wolfgang Beltracchi||beltracchi
5|Shaun Greenhalgh||greenhalgh
5|Mark Hofmann||salamander letter;hofmann
5|Majestic 12
5|Sidd Finch
5|Gospel of Jesus's Wife||jesus wife papyrus
6|Ern Malley
6|Tom Keating||keating
6|Eric Hebborn||hebborn
6|Getty kouros
6|Tiara of Saitaferne||saitaferne
6|Etruscan terracotta warriors|Etruscan terracotta warriors|etruscan warriors
6|Calaveras Skull
6|Tasaday
6|Lord Gordon-Gordon||gordon gordon
`,
nope:{
 'moon landing|apollo 11|moon landing hoax':'Not a hoax &mdash; people really did walk on the Moon!',
 'flat earth':'Not a hoax &mdash; just wrong!'
}},

{id:'universities', cat:'Medieval', q:'Name a university or academy founded before 1500', hint:'Seats of learning, East and West',
list:`
1|University of Oxford||oxford;oxford university
1|University of Cambridge||cambridge;cambridge university
1|University of Bologna||bologna
2|University of Paris||sorbonne;paris university
2|University of Salamanca||salamanca
2|University of al-Qarawiyyin||al qarawiyyin;qarawiyyin
2|Al-Azhar University||al azhar
2|University of Padua||padua;padova
2|Charles University||prague university;charles university prague
2|Jagiellonian University||jagiellonian;krakow university
2|University of Vienna||vienna university
2|Heidelberg University||heidelberg
2|University of St Andrews||st andrews;saint andrews
2|Nalanda||nalanda university
3|Taxila||takshashila
3|University of Coimbra||coimbra
3|University of Montpellier||montpellier
3|University of Toulouse||toulouse
3|University of Naples Federico II||naples university
3|University of Siena||siena
3|University of Pisa||pisa
3|University of Glasgow||glasgow
3|University of Aberdeen||aberdeen
3|Leipzig University||leipzig;university leipzig
3|KU Leuven|Old University of Leuven|leuven;louvain
3|University of Basel||basel
3|University of Tübingen||tubingen
3|Uppsala University||uppsala
3|University of Copenhagen||copenhagen
3|Schola Medica Salernitana||salerno;salerno medical school
3|University of Sankore||sankore
4|University of Perugia||perugia
4|University of Rostock||rostock
4|University of Greifswald||greifswald
4|University of Freiburg||freiburg
4|University of Erfurt||erfurt
4|University of Cologne||cologne
4|Ludwig Maximilian University of Munich||ingolstadt;lmu munich
4|University of Würzburg||wurzburg
4|University of Valladolid||valladolid
4|University of Pavia||pavia
4|University of Alcalá||alcala;complutense
4|University of Lleida||lleida
4|University of Pécs||pecs
4|Sungkyunkwan University||sungkyunkwan
4|Guozijian||imperial academy
5|University of Florence||florence
5|University of Ferrara||ferrara
5|University of Turin||turin
5|University of Bordeaux||bordeaux
5|University of Caen Normandy||caen
5|University of Zaragoza||zaragoza
5|University of Valencia||valencia
5|University of Barcelona||barcelona
5|University of Santiago de Compostela||santiago compostela
5|University of Mainz||mainz
5|Hanlin Academy||hanlin
5|Yuelu Academy||yuelu
5|Al-Nizamiyya of Baghdad||nizamiyya
5|Al-Mustansiriya University||mustansiriya
5|University of Constantinople||pandidakterion
6|Academia Istropolitana||istropolitana
6|University of Poitiers||poitiers
6|Ashikaga Gakkō||ashikaga gakko
`,
nope:{
 'harvard|yale|princeton|mit|stanford|columbia university|vilnius university':'Founded after 1500 &mdash; dig deeper!',
 'plato academy|platonic academy|lyceum':'Ancient &mdash; but not a university in the medieval sense!'
}},

{id:'medthinkers', cat:'Medieval', q:'Name a philosopher or theologian of the Middle Ages', hint:'c. 400&ndash;1500, any faith or land',
list:`
1|Thomas Aquinas||aquinas;saint thomas aquinas
1|Augustine of Hippo||augustine;saint augustine
2|Avicenna||ibn sina
2|Averroes||ibn rushd
2|Maimonides||rambam
2|William of Ockham||ockham;occam
2|Peter Abelard||abelard
2|Anselm of Canterbury||anselm
2|Boethius
2|Hildegard of Bingen||hildegard
2|Al-Ghazali||ghazali
2|Al-Farabi||farabi
2|Roger Bacon||bacon
2|Duns Scotus||scotus;john duns scotus
2|Bede||venerable bede
2|Ibn Khaldun||khaldun
2|Meister Eckhart||eckhart
2|Albertus Magnus||albert great
2|Bonaventure
3|Rumi
3|Bernard of Clairvaux||bernard clairvaux
3|Heloise||heloise
3|John Scotus Eriugena||eriugena
3|Al-Kindi||kindi
3|Ibn Arabi||ibn al arabi
3|Nicholas of Cusa||cusanus
3|John Wycliffe||wycliffe
3|Christine de Pizan||pizan
3|Isidore of Seville||isidore
3|Alcuin||alcuin york
3|Adi Shankara||shankara;shankaracharya
4|Jan Hus||hus
4|Marsilius of Padua||marsilius
4|Peter Lombard||lombard
4|Robert Grosseteste||grosseteste
4|Jean Buridan||buridan
4|Nicole Oresme||oresme
4|Ramon Llull||llull;lull
4|Julian of Norwich||julian norwich
4|Catherine of Siena||catherine siena
4|John of Damascus||john damascus
4|Pseudo-Dionysius the Areopagite||pseudo dionysius
4|Pope Gregory I||gregory great;gregory 1
4|Rashi
4|Ibn Taymiyya||taymiyya
4|Zhu Xi
4|Wang Yangming
4|Ramanuja
4|Dōgen||dogen
4|Nichiren
4|Kūkai||kukai
4|Thomas à Kempis||kempis
4|Pico della Mirandola||mirandola
4|Marsilio Ficino||ficino
5|Hugh of Saint Victor||hugh st victor
5|Bridget of Sweden||birgitta
5|Marguerite Porete||porete
5|Siger of Brabant||siger
5|Gregory Palamas||palamas
5|Michael Psellos||psellos
5|Cassiodorus
5|Solomon ibn Gabirol||avicebron;gabirol
5|Judah Halevi||halevi
5|Nachmanides||ramban
5|Gersonides
5|Saadia Gaon||saadia
5|Ibn Bajja||avempace
5|Ibn Tufayl||tufayl
5|Shahab al-Din Yahya ibn Habash Suhrawardi|Shahab al-Din Yahya ibn Habash Suhrawardi|suhrawardi
5|Nasir al-Din al-Tusi||al tusi;tusi
5|Madhvacharya||madhva
5|Shinran
6|Hadewijch
6|Mechthild of Magdeburg||mechthild
6|Gilbert de la Porrée||gilbert porree
6|Jean Gerson||gerson
6|Fakhr al-Din al-Razi||fakhr razi
6|Hōnen||honen
6|Saichō||saicho
`,
nope:{
 'aristotle|plato|socrates':'Ancient Greek &mdash; though the medieval thinkers read them closely!',
 'martin luther|luther|calvin|descartes|erasmus':'Just after the Middle Ages &mdash; try another dig!'
}},

{id:'nicknames', cat:'Rulers', q:'Name a ruler known by a colourful epithet', hint:'Not &ldquo;the Great&rdquo; &mdash; think the Bald, the Fat, the Terrible&hellip;',
list:`
1|Ivan the Terrible||ivan 4;ivan terrible
1|Vlad the Impaler||vlad dracula;vlad tepes
1|Richard the Lionheart|Richard I of England|lionheart;richard lionheart;coeur de lion
2|Charles the Bald||charles bald
2|Harald Bluetooth||bluetooth
2|Pepin the Short||pepin short
2|Louis the Pious||louis pious
2|William the Conqueror||conqueror;william conqueror
2|Edward the Confessor||confessor
2|Æthelred the Unready||ethelred unready;aethelred unready
2|Suleiman the Magnificent||suleiman magnificent
2|Charles the Bold||charles bold
2|Philip IV of France|Philip IV of France|philip fair
2|Harald Hardrada||hardrada;harald hard ruler
2|Eric Bloodaxe||bloodaxe
2|Sweyn Forkbeard||forkbeard
2|Harald Fairhair||fairhair;harald harfagre
2|Frederick Barbarossa||barbarossa;redbeard
2|Joanna of Castile||joanna mad;juana loca
2|Charles VI of France|Charles VI of France|charles mad;charles well beloved
2|King John|John, King of England|john lackland;lackland
2|Bloody Mary|Mary I of England|bloody mary
3|Louis VI of France|Louis VI of France|louis fat
3|Charles the Simple||charles simple
3|Magnus Barefoot||barefoot;magnus barelegs
3|Peter of Castile||peter cruel
3|Alfonso X of Castile|Alfonso X of Castile|alfonso wise
3|Louis the Stammerer||stammerer
3|Charles the Fat||charles fat
3|William II of England|William II of England|william rufus;rufus
3|Edward I of England|Edward I of England|longshanks;hammer scots
3|Ivar the Boneless||boneless
3|Basil II||bulgar slayer;basil bulgar slayer
3|Mehmed the Conqueror|Mehmed II|mehmed conqueror
3|Selim I||selim grim
3|Charles Martel||charles hammer;martel
3|Henry the Navigator||navigator
3|Edward the Black Prince||black prince
4|Henry the Fowler||fowler
4|Edmund Ironside||ironside
4|Harold Harefoot||harefoot
4|Olaf II of Norway|Olaf II of Norway|olaf holy;saint olaf
4|Haakon the Good||haakon good
4|Gorm the Old||gorm old
4|Magnus the Lawmender|Magnus VI of Norway|lawmender;lagabote;magnus lagabote
4|Sigurd the Crusader||sigurd jorsalfare;jorsalfar;sigurd crusader
4|Halfdan the Black||halfdan black
4|Yaroslav the Wise||yaroslav wise
4|Ibrahim of the Ottoman Empire|Ibrahim of the Ottoman Empire|ibrahim mad
4|Bayezid I||bayezid thunderbolt;yildirim
4|Charles II of Spain|Charles II of Spain|charles bewitched
4|John the Fearless||fearless
4|Philip the Good||philip good
4|Philip the Bold||philip bold
4|Henry the Lion||henry lion
5|Robert II of France|Robert II of France|robert pious
5|Christian II of Denmark|Christian II of Denmark|christian tyrant
5|Eric the Victorious||eric victorious
5|Valdemar II of Denmark|Valdemar II of Denmark|valdemar victorious
5|Władysław I the Elbow-high|Władysław I the Elbow-high|elbow high;ladislaus short
5|Bolesław I the Brave|Bolesław I the Brave|boleslaw brave
5|Bolesław III Wrymouth|Bolesław III Wrymouth|wrymouth
5|Constantine V||copronymus
5|Justinian II||rhinotmetos;slit nosed
5|Michael III||michael drunkard
5|Leo VI the Wise||leo wise
5|Ivan I of Moscow||ivan kalita;moneybag
5|Dmitry Donskoy||donskoy
5|Alfonso the Battler|Alfonso I of Aragon|alfonso battler
5|Sancho I of León|Sancho I of León|sancho fat
5|Henry IV of Castile|Henry IV of Castile|henry impotent
5|John the Blind||john blind
5|Albert the Bear||albert bear
5|Louis XI|Louis XI|universal spider;louis spider
5|Malcolm III of Scotland|Malcolm III of Scotland|malcolm canmore;canmore
5|Harald Greycloak||greycloak
5|Magnus the Good||magnus good
5|Olaf Kyrre|Olaf III of Norway|olaf peaceful;olav kyrre
6|Inge the Hunchback|Inge I of Norway|inge hunchback
6|Magnus the Blind|Magnus IV of Norway|magnus blind
6|Vasily the Blind|Vasily II of Moscow|vasily blind
6|Fyodor I of Russia|Fyodor I of Russia|fyodor bellringer
6|Louis the Child||louis child
6|Frederick the Quarrelsome|Frederick II, Duke of Austria|frederick quarrelsome
6|Pepin the Hunchback||pepin hunchback
`,
nope:{
 'alexander great|peter great|catherine great|alfred great|frederick great|cyrus great':'&ldquo;The Great&rdquo; is too easy &mdash; this dig wants something more colourful!'
}},

{id:'houses', cat:'Rulers', q:'Name a royal house or ruling dynasty', hint:'Families that ruled &mdash; anywhere, any age',
list:`
1|House of Tudor||tudor;tudors
1|House of Habsburg||habsburg;hapsburg;habsburgs
1|House of Windsor||windsor
1|House of Romanov||romanov;romanovs
2|House of Bourbon||bourbon;bourbons
2|House of Stuart||stuart;stuarts;stewart
2|House of Plantagenet||plantagenet;plantagenets
2|House of York||york
2|House of Lancaster||lancaster
2|House of Medici||medici
2|Ming dynasty||ming
2|Qing dynasty||qing;manchu dynasty
2|Han dynasty||han
2|Tang dynasty||tang
2|Song dynasty||song
2|Ptolemaic dynasty||ptolemies;ptolemaic
2|Julio-Claudian dynasty||julio claudian
2|Carolingian dynasty||carolingian;carolingians
2|Merovingian dynasty||merovingian;merovingians
2|Capetian dynasty||capetian;capetians
2|House of Valois||valois
2|House of Hanover||hanover;hanoverian
2|House of Hohenzollern||hohenzollern
2|House of Savoy||savoy
2|Ottoman dynasty||house osman;ottomans
2|Mughal dynasty|Mughal dynasty|mughal;mughals
2|Abbasid Caliphate||abbasid;abbasids
2|Umayyad dynasty||umayyad;umayyads
2|Achaemenid dynasty||achaemenid;achaemenids
2|House of Borgia||borgia;borgias
3|House of Orange-Nassau||orange nassau
3|House of Wittelsbach||wittelsbach
3|House of Saxe-Coburg and Gotha||saxe coburg gotha;saxe coburg
3|Yuan dynasty||yuan
3|Joseon||joseon dynasty;yi dynasty
3|Imperial House of Japan||yamato dynasty;chrysanthemum throne
3|Tokugawa clan||tokugawa
3|Fatimid Caliphate||fatimid;fatimids
3|Ayyubid dynasty||ayyubid;ayyubids
3|Safavid dynasty||safavid;safavids
3|Pahlavi dynasty||pahlavi
3|Seleucid Empire|Seleucid Empire|seleucid;seleucids
3|Flavian dynasty||flavian
3|Severan dynasty||severan
3|Nerva–Antonine dynasty||antonine dynasty;nerva antonine
3|Komnenos||komnenian;comnenus
3|House of Oldenburg||oldenburg
3|House of Bernadotte||bernadotte
3|House of Vasa||vasa
3|House of Wessex||wessex
3|House of Normandy||normandy;norman dynasty
3|Rurik dynasty||rurikids;rurik
3|House of Grimaldi||grimaldi
3|Shang dynasty||shang
3|Zhou dynasty||zhou
3|Qin dynasty||qin
3|Maurya Empire||maurya;mauryan
3|Gupta Empire||gupta
3|Chola dynasty||chola
3|House of Saud||saud
4|Qajar dynasty||qajar
4|Antigonid dynasty||antigonid
4|Argead dynasty||argead;temenid
4|Constantinian dynasty||constantinian
4|Theodosian dynasty||theodosian
4|Macedonian dynasty||macedonian dynasty
4|Palaiologos||palaiologan;palaeologus
4|House of Glücksburg||glucksburg
4|Fairhair dynasty||fairhair dynasty;harfagre dynasty
4|House of Godwin||godwin;godwinson
4|House of Anjou||anjou;angevin
4|House of Trastámara||trastamara
4|House of Braganza||braganza
4|Jagiellonian dynasty||jagiellon;jagiellonian dynasty
4|Piast dynasty||piast
4|Árpád dynasty||arpad
4|Přemyslid dynasty||premyslid
4|House of Luxembourg||luxembourg
4|Hohenstaufen||staufen;hohenstaufen
4|Ottonian dynasty||ottonian
4|House of Sforza||sforza
4|Jin dynasty (266–420)|Jin dynasty (266–420)|jin
4|Sui dynasty||sui
4|Goryeo
4|Silla
4|Solomonic dynasty||solomonic
4|Alaouite dynasty||alaouite
4|Hashemites||hashemite
4|Kamehameha dynasty|House of Kamehameha|kamehameha
4|Chakri dynasty||chakri
4|Nguyễn dynasty||nguyen dynasty
5|House of Sverre||sverre
5|House of Blois||blois
5|House of Aviz||aviz
5|Salian dynasty||salian
5|House of Este||este
5|House of Visconti||visconti
5|House of Gonzaga||gonzaga
5|House of Liechtenstein||liechtenstein
5|Nemanjić dynasty||nemanjic
5|Liao dynasty||liao;khitan
5|Western Xia||xi xia
5|Chalukya dynasty||chalukya
5|Pallava dynasty||pallava
5|Keita dynasty||keita
5|Zagwe dynasty||zagwe
5|Konbaung dynasty||konbaung
6|Rashtrakuta dynasty||rashtrakuta
6|Kotromanić dynasty||kotromanic
6|Sailendra||sailendra
`,
nope:{
 'targaryen|house targaryen|lannister|house lannister|stark|house stark|atreides|house atreides':'Fiction!'
}},

{id:'britindep', cat:'Empires', q:'Name a country that won independence from the British Empire', hint:'Former colonies, dominions, mandates and protectorates',
list:`
1|United States||usa;us;america;united states america
1|India
1|Ireland||republic ireland;irish free state;eire
1|Australia
1|Canada
2|Pakistan
2|Sri Lanka||ceylon
2|Myanmar||burma
2|Malaysia||malaya
2|Singapore
2|Kenya
2|Nigeria
2|Ghana||gold coast
2|South Africa
2|New Zealand
2|Egypt
2|Israel
2|Jordan||transjordan
2|Iraq
2|Cyprus
2|Malta
2|Jamaica
3|Uganda
3|Tanzania||tanganyika;zanzibar
3|Zambia||northern rhodesia
3|Zimbabwe||rhodesia;southern rhodesia
3|Botswana||bechuanaland
3|Malawi||nyasaland
3|Sierra Leone
3|The Gambia||gambia
3|Sudan
3|Kuwait
3|Bahrain
3|Qatar
3|United Arab Emirates||uae;trucial states
3|Fiji
3|Belize||british honduras
3|Guyana||british guiana
3|Barbados
3|Trinidad and Tobago||trinidad
3|The Bahamas||bahamas
3|Mauritius
3|Afghanistan
4|Seychelles
4|Lesotho||basutoland
4|Eswatini||swaziland
4|Somalia||british somaliland;somaliland
4|Yemen||aden;south yemen
4|Brunei
4|Maldives
4|Solomon Islands
4|Cameroon||british cameroons
4|Antigua and Barbuda||antigua
4|Grenada
4|Dominica
4|Saint Lucia||st lucia
5|Tuvalu||ellice islands
5|Kiribati||gilbert islands
5|Vanuatu||new hebrides
5|Tonga
5|Saint Kitts and Nevis||st kitts nevis;st kitts
5|Saint Vincent and the Grenadines||st vincent grenadines;st vincent
`,
nope:{
 'france|germany|spain|norway|italy|russia|china|japan':'Never part of the British Empire!',
 'scotland|wales|england|northern ireland':'Still part of the United Kingdom!',
 'hong kong':'Handed back to China in 1997 &mdash; not independence!',
 'bangladesh':'Won independence from Pakistan in 1971 &mdash; though it was once part of British India!'
}}
);

/* Dug Up — more prompts: rulers. Wiki field '*' = use the prompt's wf template ({} = display name). */
PROMPT_DATA.push(
{id:'france', cat:'Rulers', q:'Name a king or emperor of France', hint:'From Clovis to Napoleon III', wf:'{} of France',
list:`
1|Louis XIV|Louis XIV|louis 14;sun king;roi soleil
1|Napoleon|Napoleon|napoleon 1;napoleon bonaparte;bonaparte
1|Louis XVI|Louis XVI|louis 16
1|Charlemagne||charles great;karl der grosse
2|Louis XV|Louis XV|louis 15
2|Henry IV|*|henri 4;good king henry
2|Francis I|*|francois 1
2|Louis XIII|Louis XIII|louis 13
2|Napoleon III|Napoleon III|louis napoleon;napoleon 3
2|Clovis I||clovis
3|Philip II Augustus|Philip II of France|philip augustus;philippe auguste;philip 2
3|Louis IX|*|saint louis;st louis;louis 9
3|Philip IV|*|philip fair;philippe le bel;philip 4
3|Charles VII|*|charles 7;charles victorious
3|Louis XVIII|Louis XVIII|louis 18
3|Charles X|*|charles 10
3|Louis Philippe I|Louis Philippe I|louis philippe;citizen king
3|Hugh Capet||hugues capet;capet
3|Pepin the Short||pepin;pippin;pippin short;pepin 3
4|Louis XI|Louis XI|louis 11;spider king
4|Louis XII|Louis XII|louis 12
4|Charles VIII|*|charles 8
4|Henry II|*|henri 2
4|Francis II|*|francois 2
4|Charles IX|*|charles 9
4|Henry III|*|henri 3
4|Charles VI|*|charles 6;charles mad
4|Charles V|*|charles 5;charles wise
4|John II|*|john 2;jean 2;john good
4|Philip VI|*|philip 6
4|Louis VII|*|louis 7
4|Louis VI|*|louis 6;louis fat
4|Charles the Bald||charles bald;charles 2
4|Louis the Pious||louis pious;louis 1
4|Dagobert I||dagobert
5|Philip I|*|philip 1
5|Robert II|*|robert 2;robert pious
5|Henry I|*|henri 1
5|Louis X|*|louis 10
5|Philip V|*|philip 5
5|Charles IV|*|charles 4
5|Louis VIII|*|louis 8;louis lion
5|Louis XVII|Louis XVII|louis 17
5|Napoleon II|Napoleon II|napoleon 2;aiglon
5|Childeric I||childeric
5|Chlothar I||chlothar;clotaire;clothar
5|Charles the Simple||charles simple;charles 3
6|Merovech||merovee
6|Chilperic I||chilperic
6|Childebert I||childebert
6|Odo|Odo of France|eudes
6|Rudolph|Rudolph of France|raoul
6|Louis IV|*|louis 4;louis outremer
6|Lothair|Lothair of France|lothaire
6|Louis V|*|louis 5;louis lazy
6|Robert I|*|robert 1
6|Charles the Fat||charles fat
6|Louis the Stammerer||louis stammerer;louis 2
6|Carloman II||carloman
`,
nope:{
 'marie antoinette|josephine':'A queen or empress consort &mdash; she never ruled.',
 'joan arc|jeanne arc':'She saved the throne for Charles VII &mdash; but never ruled.',
 'richelieu|cardinal richelieu|mazarin':'The power behind the throne &mdash; not the king.',
 'robespierre|danton':'A revolutionary &mdash; definitely not a monarch.',
 'charles martel':'Mayor of the palace who ran the kingdom &mdash; but never king.'
},
amb:{
 'louis':'Which Louis? There were eighteen!',
 'charles':'Which Charles? Add a number.',
 'henry|henri':'Which Henry? Add a number.',
 'philip|philippe':'Which Philip? Add a number.',
 'francis|francois':'Which Francis? Add a number.'
}},

{id:'hre', cat:'Rulers', q:'Name a Holy Roman Emperor', hint:'Crowned emperors from Charlemagne (800) to 1806', wf:'{}, Holy Roman Emperor',
list:`
1|Charlemagne||charles great
1|Charles V|*|charles 5;karl 5;carlos 1
1|Frederick Barbarossa||barbarossa;frederick 1
2|Otto the Great||otto 1;otto great
2|Frederick II|*|frederick 2;stupor mundi
2|Maximilian I|*|maximilian 1;maximilian
2|Francis II|*|francis 2;franz 2;francis 1 austria
2|Joseph II|*|joseph 2
2|Rudolf II|*|rudolf 2
3|Henry IV|*|henry 4;heinrich 4
3|Sigismund|*|sigismund
3|Charles IV|*|charles 4;karl 4
3|Leopold I|*|leopold 1
3|Ferdinand II|*|ferdinand 2
3|Louis the Pious||louis pious;louis 1
4|Otto II|*|otto 2
4|Otto III|*|otto 3
4|Henry II|*|henry 2;saint henry
4|Conrad II|*|conrad 2
4|Henry III|*|henry 3
4|Henry V|*|henry 5
4|Henry VI|*|henry 6
4|Frederick III|*|frederick 3
4|Ferdinand I|*|ferdinand 1
4|Maximilian II|*|maximilian 2
4|Matthias|*|matthias
4|Ferdinand III|*|ferdinand 3
4|Charles VI|*|charles 6
4|Francis I|*|francis 1;franz 1;francis stephen
4|Leopold II|*|leopold 2
4|Lothair I||lothair 1;lothar 1
5|Lothair III|*|lothair 3;lothar 3
5|Otto IV|*|otto 4
5|Louis IV|*|louis 4;louis bavarian
5|Henry VII|*|henry 7
5|Joseph I|*|joseph 1
5|Charles VII|*|charles 7
5|Charles the Bald||charles bald
5|Charles the Fat||charles fat
5|Arnulf of Carinthia||arnulf
6|Louis II|Louis II of Italy|louis 2
6|Guy of Spoleto|Guy III of Spoleto|guy spoleto
6|Lambert of Italy||lambert
6|Louis the Blind||louis blind;louis 3
6|Berengar I|Berengar I of Italy|berengar
`,
nope:{
 'maria theresa|maria theresia':'She ruled the Habsburg lands &mdash; but the imperial crown went to her husband, Francis I.',
 'napoleon':'Emperor of the French &mdash; and he ended the Holy Roman Empire in 1806.',
 'augustus|nero|caligula|julius caesar':'That\'s ancient Rome &mdash; a different empire altogether.',
 'wilhelm 2|kaiser wilhelm|wilhelm 1':'A German Kaiser &mdash; the Holy Roman Empire was gone by then.'
},
amb:{
 'henry|heinrich':'Which Henry? Add a number.',
 'otto':'Which Otto? Add a number.',
 'charles|karl':'Which Charles? Add a number.',
 'frederick|friedrich':'Which Frederick? Add a number.',
 'ferdinand':'Which Ferdinand? Add a number.',
 'leopold':'Which Leopold? Add a number.',
 'joseph':'Which Joseph? Add a number.'
}},

{id:'byzantine', cat:'Empires', q:'Name a Byzantine emperor', hint:'Eastern Roman emperors, 395&ndash;1453',
list:`
1|Justinian I||justinian;justinian great
1|Constantine XI Palaiologos||constantine 11;constantine palaiologos;constantine paleologus
1|Basil II||basil 2;basil bulgar slayer;bulgar slayer
2|Heraclius
2|Alexios I Komnenos||alexios 1;alexius 1;alexios komnenos;alexius comnenus
2|Leo III the Isaurian||leo 3;leo isaurian
2|Irene of Athens||irene
3|Manuel I Komnenos||manuel 1;manuel komnenos
3|Romanos IV Diogenes||romanos 4;romanus diogenes;romanos diogenes
3|Michael VIII Palaiologos||michael 8;michael palaiologos
3|Nikephoros II Phokas||nikephoros 2;nicephorus phocas;nikephoros phokas
3|John I Tzimiskes||john 1;john tzimiskes;tzimisces
3|Justin I||justin 1
3|Basil I||basil 1;basil macedonian
3|Leo VI the Wise||leo 6;leo wise
3|Constantine VII Porphyrogennetos||constantine 7;porphyrogenitus
3|Arcadius
3|Theodosius II||theodosius 2
4|Justin II||justin 2
4|Zeno|Zeno (emperor)
4|Anastasius I Dicorus||anastasius 1;anastasius
4|Maurice|Maurice (emperor)
4|Phocas
4|Justinian II||justinian 2;rhinotmetos
4|John II Komnenos||john 2;john komnenos
4|Andronikos I Komnenos||andronikos 1;andronicus 1
4|Isaac II Angelos||isaac 2;isaac angelos
4|Manuel II Palaiologos||manuel 2
4|John VIII Palaiologos||john 8
4|Zoe Porphyrogenita||zoe
4|Constantine V||constantine 5;copronymus
4|Romanos I Lekapenos||romanos 1;romanus lecapenus
4|Theophilos|Theophilos (emperor)|theophilus
4|Michael III||michael 3;michael drunkard
5|Constans II||constans 2
5|Leo I|Leo I (emperor)|leo 1;leo thracian
5|Marcian
5|Tiberius II Constantine||tiberius 2
5|Leo V the Armenian||leo 5
5|Michael II||michael 2
5|Romanos II||romanos 2
5|Constantine VIII||constantine 8
5|Romanos III Argyros||romanos 3
5|Michael IV the Paphlagonian||michael 4
5|Michael V Kalaphates||michael 5
5|Constantine IX Monomachos||constantine 9;monomachus
5|Theodora Porphyrogenita||theodora porphyrogenita
5|Isaac I Komnenos||isaac 1
5|Constantine X Doukas||constantine 10
5|Michael VII Doukas||michael 7
5|Alexios III Angelos||alexios 3
5|Alexios V Doukas||alexios 5;mourtzouphlos
5|Andronikos II Palaiologos||andronikos 2
5|John V Palaiologos||john 5
5|John VI Kantakouzenos||john 6;cantacuzenus
6|Leo IV the Khazar||leo 4
6|Constantine VI||constantine 6
6|Nikephoros I||nikephoros 1
6|Staurakios
6|Michael I Rangabe||michael 1
6|Leontios
6|Tiberius III||tiberius 3
6|Philippikos||philippicus;bardanes
6|Anastasios II||anastasius 2
6|Theodosios III||theodosius 3
6|Artabasdos
6|Constantine III|Constantine III (Byzantine emperor)|constantine 3
6|Heraklonas
6|Nikephoros III||nikephoros 3
6|Alexios IV Angelos||alexios 4
6|Andronikos III Palaiologos||andronikos 3
6|John VII Palaiologos||john 7
6|Basiliscus
`,
nope:{
 'constantine great|constantine 1|constantine':'He founded Constantinople &mdash; but ruled the whole empire before the split of 395.',
 'theodora|empress theodora':'Justinian\'s formidable empress &mdash; but a consort, not a ruler. (Try Theodora Porphyrogenita!)',
 'mehmed 2|mehmed conqueror':'He conquered Byzantium in 1453 &mdash; an Ottoman sultan.',
 'belisarius|narses':'A brilliant general &mdash; never emperor.'
},
amb:{
 'michael':'Which Michael? Add a number or family name.',
 'john':'Which John? Add a number or family name.',
 'leo':'Which Leo? Add a number.',
 'alexios|alexius':'Which Alexios? Add a number.',
 'romanos|romanus':'Which Romanos? Add a number.',
 'andronikos|andronicus':'Which Andronikos? Add a number.',
 'nikephoros|nicephorus':'Which Nikephoros? Add a number.',
 'manuel':'Which Manuel? Add a number.',
 'basil':'Which Basil? Add a number.',
 'isaac':'Which Isaac? Add a number.'
}},

{id:'chinaemp', cat:'Asia', q:'Name a Chinese emperor or empress', hint:'Any dynasty, 221 BC&ndash;1912',
list:`
1|Qin Shi Huang||shi huangdi;first emperor;qin shi huangdi;ying zheng
1|Puyi||pu yi;last emperor;xuantong
1|Kangxi Emperor||kangxi
1|Wu Zetian||empress wu;wu zhao
2|Qianlong Emperor||qianlong
2|Emperor Taizong of Tang||taizong;tang taizong;li shimin
2|Emperor Wu of Han||wu han;han wudi;wudi;liu che
2|Kublai Khan||kublai;khubilai;shizu yuan
2|Hongwu Emperor||hongwu;zhu yuanzhang
2|Yongle Emperor||yongle;zhu di
2|Empress Dowager Cixi||cixi;tzu hsi
3|Emperor Gaozu of Han||gaozu;liu bang
3|Emperor Xuanzong of Tang||xuanzong;tang xuanzong;minghuang
3|Yongzheng Emperor||yongzheng
3|Emperor Gaozu of Tang||li yuan;gaozu tang
3|Emperor Taizu of Song||taizu song;zhao kuangyin
3|Emperor Huizong of Song||huizong
3|Emperor Wen of Sui||wen sui;yang jian;wendi
3|Emperor Yang of Sui||yang sui;yang guang;yangdi
3|Guangxu Emperor||guangxu
3|Wanli Emperor||wanli
4|Daoguang Emperor||daoguang
4|Xianfeng Emperor||xianfeng
4|Tongzhi Emperor||tongzhi
4|Jiaqing Emperor||jiaqing
4|Shunzhi Emperor||shunzhi
4|Hong Taiji||huang taiji
4|Chongzhen Emperor||chongzhen
4|Jiajing Emperor||jiajing
4|Zhengde Emperor||zhengde
4|Xuande Emperor||xuande
4|Jianwen Emperor||jianwen
4|Emperor Guangwu of Han||guangwu;liu xiu
4|Emperor Wen of Han||wen han
4|Emperor Jing of Han||jing han
4|Emperor Gaozong of Tang||gaozong
4|Wang Mang
4|Qin Er Shi||er shi;huhai
4|Emperor Xiaowen of Northern Wei||xiaowen
4|Cao Pi||emperor wen wei
4|Emperor Wu of Jin||sima yan
5|Empress Lü||lu zhi;empress lu
5|Emperor Ling of Han||ling han
5|Emperor Xian of Han||xian han;liu xie
5|Emperor Ai of Han
5|Emperor Zhezong of Song||zhezong
5|Emperor Shenzong of Song||shenzong
5|Emperor Gaozong of Song||gaozong song
5|Emperor Renzong of Song||renzong
5|Zhengtong Emperor||zhengtong;yingzong
5|Hongzhi Emperor||hongzhi
5|Tianqi Emperor||tianqi
5|Emperor Wu of Liang||wu liang;xiao yan
5|Möngke Khan||mongke
5|Temür Khan||temur;chengzong
6|Emperor Ming of Han||ming han
6|Emperor Zhang of Han||zhang han
6|Emperor Xuan of Han||xuan han
6|Emperor Dezong of Tang||dezong
6|Emperor Xianzong of Tang||xianzong
6|Emperor Ruizong of Tang||ruizong
6|Emperor Zhongzong of Tang||zhongzong
6|Emperor Taizong of Song||taizong song
6|Emperor Zhenzong of Song||zhenzong
6|Toghon Temür||toghon temur;huizong yuan
6|Hongxi Emperor||hongxi
6|Chenghua Emperor||chenghua
6|Longqing Emperor||longqing
6|Taichang Emperor||taichang
6|Emperor Xiaozong of Song||xiaozong
`,
nope:{
 'confucius|laozi|sun tzu':'A great thinker &mdash; never an emperor.',
 'mao|mao zedong|chiang kai shek|sun yat sen':'20th-century leader &mdash; the emperors were gone by 1912.',
 'genghis khan|genghis':'Founded the Mongol Empire &mdash; but never ruled China as emperor. His grandson Kublai did!'
}},

{id:'shogun', cat:'Asia', q:'Name a shogun of Japan', hint:'Kamakura, Ashikaga and Tokugawa shoguns',
list:`
1|Tokugawa Ieyasu||ieyasu;tokugawa
2|Minamoto no Yoritomo||yoritomo;minamoto yoritomo
2|Tokugawa Yoshinobu||yoshinobu;keiki
3|Ashikaga Takauji||takauji
3|Tokugawa Iemitsu||iemitsu
3|Ashikaga Yoshimitsu||yoshimitsu
3|Tokugawa Yoshimune||yoshimune
3|Tokugawa Tsunayoshi||tsunayoshi;dog shogun
4|Tokugawa Hidetada||hidetada
4|Ashikaga Yoshimasa||yoshimasa
4|Ashikaga Yoshiaki||yoshiaki
4|Ashikaga Yoshinori||yoshinori
4|Minamoto no Sanetomo||sanetomo
4|Minamoto no Yoriie||yoriie
4|Tokugawa Ienari||ienari
4|Tokugawa Iemochi||iemochi
4|Tokugawa Ietsuna||ietsuna
4|Sakanoue no Tamuramaro||tamuramaro
5|Tokugawa Ienobu||ienobu
5|Tokugawa Ietsugu||ietsugu
5|Tokugawa Ieshige||ieshige
5|Tokugawa Ieharu||ieharu
5|Tokugawa Ieyoshi||ieyoshi
5|Tokugawa Iesada||iesada
5|Ashikaga Yoshiakira||yoshiakira
5|Ashikaga Yoshimochi||yoshimochi
5|Ashikaga Yoshiteru||yoshiteru
5|Ashikaga Yoshihisa||yoshihisa
5|Prince Munetaka||munetaka
5|Prince Morikuni||morikuni
6|Kujō Yoritsune||yoritsune
6|Kujō Yoritsugu||yoritsugu
6|Prince Koreyasu||koreyasu
6|Prince Hisaaki||hisaaki
6|Ashikaga Yoshikazu||yoshikazu
6|Ashikaga Yoshikatsu||yoshikatsu
6|Ashikaga Yoshitane||yoshitane;yoshiki
6|Ashikaga Yoshizumi||yoshizumi
6|Ashikaga Yoshiharu||yoshiharu
6|Ashikaga Yoshihide||yoshihide
6|Prince Moriyoshi||moriyoshi;morinaga
`,
nope:{
 'oda nobunaga|nobunaga':'He nearly unified Japan &mdash; but never took the title of shogun.',
 'toyotomi hideyoshi|hideyoshi':'He ruled Japan &mdash; but as regent, never as shogun.',
 'hirohito|meiji|naruhito|akihito':'That\'s an emperor &mdash; the shogun ruled in the emperor\'s name.',
 'miyamoto musashi|musashi':'A legendary swordsman &mdash; not a shogun.'
},
amb:{
 'ashikaga':'Which Ashikaga? Add a first name.',
 'minamoto':'Which Minamoto? Add a first name.'
}},

{id:'japanemp', cat:'Asia', q:'Name an emperor or empress of Japan', hint:'From legendary Jimmu to today', wf:'Emperor {}',
list:`
1|Hirohito||showa;emperor showa
1|Meiji|*|mutsuhito
1|Naruhito||reiwa
2|Akihito||heisei
2|Jimmu|*|jimmu tenno
2|Taishō|*|yoshihito;taisho
3|Kanmu|*|kammu
3|Go-Daigo|*|go daigo;godaigo
3|Shōmu|*|shomu
3|Tenmu|*|temmu
3|Tenji|*|tenchi
3|Empress Suiko||suiko
3|Kōmei|*|komei
4|Go-Toba|*|go toba
4|Empress Jitō||jito
4|Empress Kōken||koken;shotoku
4|Saga|*|saga
4|Daigo|*|daigo
4|Shirakawa|*|shirakawa
4|Go-Shirakawa|*|go shirakawa
4|Antoku|*|antoku
4|Ōjin|*|ojin
4|Nintoku|*|nintoku
4|Kinmei|*|kinmei
4|Empress Genmei||genmei
5|Go-Mizunoo|*|go mizunoo
5|Kōkaku|*|kokaku
5|Ninkō|*|ninko
5|Go-Sakuramachi|*|empress go sakuramachi
5|Empress Meishō||meisho
5|Kōtoku|*|kotoku
5|Empress Kōgyoku||kogyoku;saimei
5|Murakami|*|murakami
5|Ichijō|*|ichijo
5|Go-Sanjō|*|go sanjo
5|Toba|*|toba
5|Sutoku|*|sutoku
5|Takakura|*|takakura
6|Suizei|*|suizei
6|Keikō|*|keiko
6|Yūryaku|*|yuryaku
6|Keitai|*|keitai
6|Bidatsu|*|bidatsu
6|Yōmei|*|yomei
6|Jomei|*|jomei
6|Empress Genshō||gensho
6|Junnin|*|junnin
6|Kōnin|*|konin
6|Heizei|*|heizei
6|Uda|*|uda
6|Kazan|*|kazan
6|Go-Kōmyō|*|go komyo
6|Reigen|*|reigen
`,
nope:{
 'tokugawa ieyasu|ieyasu|yoritomo':'A shogun &mdash; the real power, but not the emperor.',
 'oda nobunaga|nobunaga|hideyoshi':'A warlord who unified Japan &mdash; not the emperor.'
}},

{id:'ukpm', cat:'Modern History', q:'Name a British prime minister', hint:'From Walpole (1721) to today',
list:`
1|Winston Churchill||churchill
1|Margaret Thatcher||thatcher
1|Tony Blair||blair
1|Boris Johnson||johnson;boris
2|Theresa May||may
2|David Cameron||cameron
2|Keir Starmer||starmer
2|Rishi Sunak||sunak
2|Liz Truss||truss
2|Gordon Brown||brown
2|Andy Burnham||burnham
3|Clement Attlee||attlee
3|Neville Chamberlain||chamberlain
3|Benjamin Disraeli||disraeli
3|William Ewart Gladstone|William Ewart Gladstone|gladstone;william gladstone
3|Robert Walpole||walpole
3|William Pitt the Younger||pitt younger;pitt
3|John Major||major
3|Harold Wilson||wilson
3|Duke of Wellington|Arthur Wellesley, 1st Duke of Wellington|wellington;arthur wellesley
4|David Lloyd George||lloyd george
4|Edward Heath||heath;ted heath
4|Anthony Eden||eden
4|Harold Macmillan||macmillan
4|James Callaghan||callaghan;jim callaghan
4|Stanley Baldwin||baldwin
4|Robert Peel||peel
4|Lord Palmerston|Henry John Temple, 3rd Viscount Palmerston|palmerston
4|William Pitt the Elder||pitt elder;chatham
4|Lord North|Frederick North, Lord North|north
4|Ramsay MacDonald||macdonald;ramsay macdonald
4|H. H. Asquith||asquith;herbert asquith
4|Lord Salisbury|Robert Gascoyne-Cecil, 3rd Marquess of Salisbury|salisbury
5|Alec Douglas-Home||douglas home
5|Arthur Balfour||balfour
5|Henry Campbell-Bannerman||campbell bannerman
5|Bonar Law||law;andrew bonar law
5|Lord Melbourne|William Lamb, 2nd Viscount Melbourne|melbourne
5|Lord Liverpool|Robert Jenkinson, 2nd Earl of Liverpool|liverpool
5|Earl Grey|Charles Grey, 2nd Earl Grey|grey
5|George Canning||canning
5|Spencer Perceval||perceval
5|Lord John Russell|John Russell, 1st Earl Russell|russell
5|Lord Rosebery|Archibald Primrose, 5th Earl of Rosebery|rosebery
5|Earl of Derby|Edward Smith-Stanley, 14th Earl of Derby|derby
5|Earl of Aberdeen|George Hamilton-Gordon, 4th Earl of Aberdeen|aberdeen
5|Earl of Bute|John Stuart, 3rd Earl of Bute|bute
6|Henry Pelham||pelham
6|Duke of Newcastle|Thomas Pelham-Holles, 1st Duke of Newcastle|newcastle
6|Earl of Wilmington|Spencer Compton, 1st Earl of Wilmington|wilmington
6|Duke of Devonshire|William Cavendish, 4th Duke of Devonshire|devonshire
6|George Grenville||george grenville
6|Marquess of Rockingham|Charles Watson-Wentworth, 2nd Marquess of Rockingham|rockingham
6|Duke of Grafton|Augustus FitzRoy, 3rd Duke of Grafton|grafton
6|Earl of Shelburne|William Petty, 2nd Earl of Shelburne|shelburne
6|Duke of Portland|William Cavendish-Bentinck, 3rd Duke of Portland|portland
6|Henry Addington||addington;sidmouth
6|Lord Grenville|William Grenville, 1st Baron Grenville|william grenville
6|Viscount Goderich|F. J. Robinson, 1st Viscount Goderich|goderich
`,
nope:{
 'queen elizabeth|elizabeth 2|king charles|charles 3|victoria':'A monarch &mdash; the prime minister governs in their name.',
 'oliver cromwell|cromwell':'Lord Protector in the 1650s &mdash; long before the office existed.',
 'nigel farage|farage|jeremy corbyn|corbyn':'A party leader &mdash; but never prime minister.'
},
amb:{
 'pitt':'Elder or Younger? Both were prime minister.',
 'william pitt':'Elder or Younger? Both were prime minister.'
}},

{id:'usvp', cat:'Modern History', q:'Name a US vice president', hint:'From John Adams to today',
list:`
1|Kamala Harris||harris
1|Joe Biden||biden
1|Mike Pence||pence
1|JD Vance||vance;j d vance
2|Dick Cheney||cheney
2|Al Gore||gore
2|John Adams||adams
2|Thomas Jefferson||jefferson
2|Richard Nixon||nixon
3|Dan Quayle||quayle
3|George H. W. Bush||bush;george bush
3|Walter Mondale||mondale
3|Spiro Agnew||agnew
3|Nelson Rockefeller||rockefeller
3|Gerald Ford||ford
3|Lyndon B. Johnson||lbj;johnson
3|Aaron Burr||burr
3|Theodore Roosevelt||teddy roosevelt;roosevelt
3|Harry S. Truman||truman
4|Hubert Humphrey||humphrey
4|John C. Calhoun||calhoun
4|Calvin Coolidge||coolidge
4|Martin Van Buren||van buren
4|Andrew Johnson
4|Chester A. Arthur||arthur
4|Millard Fillmore||fillmore
4|John Tyler||tyler
4|Henry A. Wallace||wallace
4|Alben W. Barkley||barkley
4|John Nance Garner||garner
4|George Clinton|George Clinton (vice president)|clinton
4|Elbridge Gerry||gerry
5|Daniel D. Tompkins||tompkins
5|Richard Mentor Johnson||richard johnson
5|George M. Dallas||dallas
5|William R. King||king
5|John C. Breckinridge||breckinridge
5|Hannibal Hamlin||hamlin
5|Schuyler Colfax||colfax
5|Henry Wilson
5|William A. Wheeler||wheeler
5|Thomas A. Hendricks||hendricks
5|Levi P. Morton||morton
5|Adlai Stevenson I||adlai stevenson;stevenson
5|Garret Hobart||hobart
5|Charles W. Fairbanks||fairbanks
5|James S. Sherman||sherman
5|Thomas R. Marshall||marshall
5|Charles G. Dawes||dawes
5|Charles Curtis||curtis
`,
nope:{
 'benjamin franklin|alexander hamilton':'A Founding Father &mdash; never vice president.',
 'hillary clinton|tim walz|tim kaine|paul ryan|sarah palin':'A candidate on a ticket &mdash; but never vice president.'
},
amb:{
 'johnson':'Which Johnson? Lyndon, Andrew or Richard Mentor?'
}},

{id:'firstlady', cat:'Modern History', q:'Name a US First Lady', hint:'Wives (and a few hostesses) of US presidents',
list:`
1|Michelle Obama||michelle
1|Jacqueline Kennedy||jackie kennedy;jackie o;jacqueline kennedy onassis;jackie
1|Eleanor Roosevelt||eleanor
1|Melania Trump||melania
1|Hillary Clinton||hillary;hillary rodham clinton
2|Martha Washington||martha
2|Nancy Reagan||nancy
2|Laura Bush||laura
2|Abigail Adams||abigail
2|Jill Biden||jill
2|Mary Todd Lincoln||mary lincoln
3|Barbara Bush||barbara
3|Rosalynn Carter||rosalynn
3|Dolley Madison||dolly madison;dolley
3|Betty Ford||betty
3|Lady Bird Johnson||lady bird
3|Edith Wilson|Edith Wilson|edith bolling wilson
3|Pat Nixon||pat
3|Mamie Eisenhower||mamie
4|Bess Truman||bess
4|Grace Coolidge||grace
4|Lou Henry Hoover||lou hoover
4|Edith Roosevelt||edith kermit roosevelt
4|Frances Cleveland||frances
4|Julia Grant||julia
4|Louisa Adams||louisa catherine adams
4|Rachel Jackson||rachel
4|Martha Jefferson||martha wayles jefferson
4|Ellen Wilson||ellen axson wilson
4|Florence Harding||florence
4|Helen Taft||nellie taft;helen herron taft
4|Ida McKinley||ida
5|Elizabeth Monroe||elizabeth kortright monroe
5|Sarah Polk||sarah
5|Lucy Hayes||lucy;lemonade lucy
5|Lucretia Garfield||lucretia
5|Caroline Harrison||caroline
5|Mary Harrison McKee
5|Margaret Taylor||margaret
5|Abigail Fillmore
5|Jane Pierce||jane
5|Harriet Lane||harriet
5|Eliza Johnson||eliza
5|Letitia Tyler||letitia
5|Julia Tyler||julia gardiner tyler
5|Anna Harrison||anna
5|Hannah Van Buren||angelica van buren
`,
nope:{
 'kamala harris|harris':'Vice President &mdash; not a First Lady.',
 'betsy ross':'Legendary flag-maker &mdash; never First Lady.'
}},

{id:'pope', cat:'Medieval', q:'Name a pope', hint:'Any pope, from Saint Peter to today', wf:'Pope {}',
list:`
1|Pope Francis||francis
1|John Paul II|*|john paul 2;karol wojtyla;wojtyla
1|Leo XIV|*|leo 14;robert prevost;prevost
1|Benedict XVI|*|benedict 16;ratzinger
2|Saint Peter||peter;simon peter;st peter
2|John XXIII|*|john 23;roncalli
2|Gregory the Great|Pope Gregory I|gregory 1;gregory great
2|Alexander VI|*|alexander 6;rodrigo borgia;borgia
2|Urban II|*|urban 2
2|Paul VI|*|paul 6;montini
2|Pius XII|*|pius 12;pacelli
2|Leo X|*|leo 10
2|Julius II|*|julius 2;warrior pope
3|Innocent III|*|innocent 3
3|Gregory VII|*|gregory 7;hildebrand
3|Leo the Great|Pope Leo I|leo 1;leo great
3|Leo III|*|leo 3
3|Gregory XIII|*|gregory 13
3|John Paul I|*|john paul 1;luciani
3|Pius IX|*|pius 9;pio nono
3|Leo XIII|*|leo 13
3|Boniface VIII|*|boniface 8
3|Clement VII|*|clement 7
3|Sixtus IV|*|sixtus 4
3|Pius X|*|pius 10
3|Pius XI|*|pius 11
4|Clement V|*|clement 5
4|Pius II|*|pius 2;piccolomini
4|Nicholas V|*|nicholas 5
4|Paul III|*|paul 3
4|Pius V|*|pius 5
4|Sixtus V|*|sixtus 5
4|Celestine V|*|celestine 5
4|Benedict XV|*|benedict 15
4|Innocent X|*|innocent 10
4|Urban VIII|*|urban 8
4|Clement XIV|*|clement 14
4|Adrian IV|*|adrian 4;hadrian 4;nicholas breakspear
4|Linus|Pope Linus|linus
4|Clement I|*|clement 1;clement rome
4|Sylvester I|*|sylvester 1
4|Stephen II|*|stephen 2
4|Formosus|Pope Formosus|formosus
5|Calixtus III|*|callixtus 3;calixtus 3
5|Innocent VIII|*|innocent 8
5|Paul IV|*|paul 4
5|Gregory IX|*|gregory 9
5|Innocent IV|*|innocent 4
5|Gregory XI|*|gregory 11
5|Martin V|*|martin 5
5|Eugene IV|*|eugene 4
5|Benedict XIV|*|benedict 14
5|Pius VII|*|pius 7
5|Gregory XVI|*|gregory 16
5|Stephen VI|*|stephen 6;cadaver synod
5|John XII|*|john 12
5|Sylvester II|*|sylvester 2;gerbert
5|Leo IX|*|leo 9
5|Urban VI|*|urban 6
5|Hadrian VI|*|adrian 6;hadrian 6
5|Damasus I|*|damasus 1
6|Anacletus|Pope Anacletus|anacletus;cletus
6|Evaristus|Pope Evaristus|evaristus
6|Alexander I|*|alexander 1
6|Sixtus I|*|sixtus 1
6|Telesphorus|Pope Telesphorus|telesphorus
6|Hyginus|Pope Hyginus|hyginus
6|Pius I|*|pius 1
6|Victor I|*|victor 1
6|Zephyrinus|Pope Zephyrinus|zephyrinus
6|Callixtus I|*|callixtus 1
6|Urban I|*|urban 1
6|Pontian|Pope Pontian|pontian
6|Fabian|Pope Fabian|fabian
6|Cornelius|Pope Cornelius|cornelius
6|Marcellinus|Pope Marcellinus|marcellinus
6|Liberius|Pope Liberius|liberius
6|Hormisdas|Pope Hormisdas|hormisdas
6|Honorius I|*|honorius 1
6|Zachary|Pope Zachary|zachary;zacharias
6|Nicholas I|*|nicholas 1
`,
nope:{
 'martin luther|luther|calvin':'He broke away from the papacy &mdash; definitely not a pope!',
 'dalai lama':'A Tibetan Buddhist leader &mdash; not a pope.',
 'jesus|christ':'Not a pope &mdash; try Peter, traditionally the first.',
 'joan|pope joan':'A medieval legend &mdash; she almost certainly never existed.'
},
amb:{
 'john':'Which John? There were twenty-one &mdash; add a number.',
 'gregory':'Which Gregory? Add a number.',
 'benedict':'Which Benedict? Add a number.',
 'pius':'Which Pius? Add a number.',
 'leo':'Which Leo? Add a number.',
 'clement':'Which Clement? Add a number.',
 'innocent':'Which Innocent? Add a number.',
 'urban':'Which Urban? Add a number.',
 'paul':'Which Paul? Add a number.',
 'alexander':'Which Alexander? Add a number.',
 'john paul':'First or second? Add a number.'
}},

{id:'norway', cat:'Rulers', q:'Name a king or queen of Norway', hint:'From Harald Fairhair to Haakon VIII', wf:'{} of Norway',
list:`
1|Harald V|*|harald 5
1|Haakon VIII|*|haakon 8;hakon 8;crown prince haakon
1|Olav V|*|olav 5;olaf 5
1|Haakon VII|*|haakon 7;hakon 7
2|Harald Fairhair||harald harfagre;harald 1;fairhair;harald hårfagre
2|Olaf II|*|saint olaf;olav haraldsson;olaf 2;olav 2;olaf haraldsson
2|Harald Hardrada||harald 3;hardrada;harald hardrade
2|Olaf Tryggvason||olaf 1;olav tryggvason
3|Haakon the Good||haakon 1;hakon good
3|Eric Bloodaxe||erik bloodaxe;eirik blodoks
3|Sverre|Sverre of Norway|sverre sigurdsson
3|Haakon IV|*|haakon 4;haakon old
3|Magnus the Lawmender|Magnus VI of Norway|magnus 6;magnus lagabote;lawmender
3|Sigurd the Crusader||sigurd 1;sigurd jorsalfar
3|Oscar II|Oscar II|oscar 2
3|Margaret I|Margaret I of Denmark|margaret;margrete
3|Christian IV|Christian IV of Denmark|christian 4
4|Magnus the Good|Magnus the Good|magnus 1
4|Magnus Barefoot||magnus 3;magnus berrfott
4|Olaf Kyrre|Olaf III of Norway|olaf 3;olav kyrre
4|Haakon V|*|haakon 5
4|Eric II|*|eric 2;erik priesthater
4|Magnus VII|Magnus Eriksson|magnus 7;magnus eriksson
4|Haakon VI|*|haakon 6
4|Olaf IV|Olaf II of Denmark|olaf 4
4|Charles XIV John|Charles XIV John|karl johan;charles 14;bernadotte
4|Christian Frederick|Christian VIII of Denmark|christian 8;christian frederik
4|Oscar I|Oscar I|oscar 1
4|Charles XV|Charles XV|charles 15;karl 15
4|Frederick III|Frederick III of Denmark|frederick 3
4|Christian III|Christian III of Denmark|christian 3
4|Christian II|Christian II of Denmark|christian 2
5|Harald Greycloak||harald 2;harald grafell
5|Magnus Erlingsson||magnus 5
5|Sigurd Mouth|Sigurd II of Norway|sigurd 2;sigurd munn
5|Inge the Hunchback|Inge I of Norway|inge 1
5|Eystein I|*|eystein 1
5|Harald Gille||harald 4
5|Magnus the Blind|Magnus IV of Norway|magnus 4
5|Haakon the Broad-shouldered|Haakon II of Norway|haakon 2
5|Inge Bårdsson|Inge II of Norway|inge 2
5|Guttorm|Guttorm of Norway|guttorm
5|Eric of Pomerania||erik pomerania
5|Christopher of Bavaria||christopher
5|Christian I|Christian I of Denmark|christian 1
5|Hans|John, King of Denmark|john denmark
5|Frederick I|Frederick I of Denmark|frederick 1
5|Christian V|Christian V of Denmark|christian 5
5|Frederick IV|Frederick IV of Denmark|frederick 4
5|Christian VI|Christian VI of Denmark|christian 6
5|Frederick V|Frederick V of Denmark|frederick 5
5|Christian VII|Christian VII of Denmark|christian 7
5|Frederick VI|Frederick VI of Denmark|frederick 6
5|Charles XIII|Charles XIII|charles 13;karl 13
6|Sweyn Knutsson||sweyn;svein alfivason
6|Cnut the Great|Cnut|canute;knut
6|Haakon Magnusson||haakon toresfostre
6|Eystein II|*|eystein 2
6|Magnus II|*|magnus 2
6|Sigurd Slembe||slembe
6|Haakon III|*|haakon 3
6|Karl Knutsson|Charles VIII of Sweden|karl knutsson;charles 8 sweden
`,
nope:{
 'queen sonja|sonja|mette marit':'A queen consort &mdash; not a reigning monarch.',
 'ingrid alexandra|ingrid':'Heir to the throne &mdash; not (yet) a queen.',
 'quisling|vidkun quisling':'A collaborator during WWII &mdash; certainly not a king.',
 'roald amundsen|nansen':'A national hero &mdash; but not royalty.'
},
amb:{
 'haakon|hakon':'Which Haakon? Add a number.',
 'olaf|olav':'Which Olaf? Add a number or nickname.',
 'harald':'Which Harald? Add a number or nickname.',
 'magnus':'Which Magnus? Add a number or nickname.',
 'christian':'Which Christian? Add a number.',
 'frederick|frederik':'Which Frederick? Add a number.',
 'oscar':'Which Oscar? Add a number.',
 'sigurd':'Which Sigurd? Add a nickname.'
}},

{id:'spain', cat:'Rulers', q:'Name a monarch of Spain', hint:'From the Catholic Monarchs (1479) to today', wf:'{} of Spain',
list:`
1|Juan Carlos I|*|juan carlos;juan carlos 1
1|Felipe VI|*|felipe 6;philip 6
1|Isabella I|Isabella I of Castile|isabella;isabella 1;isabel catolica
1|Philip II|*|philip 2;felipe 2
2|Ferdinand II|Ferdinand II of Aragon|ferdinand 2;ferdinand catholic
2|Charles I|Charles V, Holy Roman Emperor|charles 1;carlos 1;charles 5
2|Alfonso XIII|*|alfonso 13
2|Philip V|*|philip 5;felipe 5
3|Charles III|*|charles 3;carlos 3
3|Charles II|*|charles 2;carlos 2;bewitched
3|Ferdinand VII|*|ferdinand 7;fernando 7
3|Isabella II|*|isabella 2;isabel 2
3|Joanna of Castile||joanna;juana loca;joanna mad
3|Joseph Bonaparte||joseph 1;jose 1;pepe botella
4|Philip III|*|philip 3;felipe 3
4|Philip IV|*|philip 4;felipe 4
4|Charles IV|*|charles 4;carlos 4
4|Alfonso XII|*|alfonso 12
4|Ferdinand VI|*|ferdinand 6
4|Amadeo I|*|amadeo;amadeus
5|Louis I|*|louis 1;luis 1
5|Philip I|Philip I of Castile|philip 1;philip handsome
`,
nope:{
 'franco|francisco franco':'A dictator who ruled as Caudillo &mdash; never king.',
 'el cid|cid':'A legendary knight &mdash; not a monarch.',
 'catherine aragon':'Queen of England &mdash; daughter of the Catholic Monarchs.'
},
amb:{
 'philip|felipe':'Which Philip? Add a number.',
 'charles|carlos':'Which Charles? Add a number.',
 'ferdinand|fernando':'Which Ferdinand? Add a number.',
 'alfonso':'Which Alfonso? Add a number.',
 'isabella|isabel':'Which Isabella? Add a number.'
}},

{id:'persia', cat:'Empires', q:'Name a king of ancient Persia', hint:'Achaemenid, Parthian and Sasanian kings',
list:`
1|Cyrus the Great||cyrus;cyrus 2
1|Darius I|Darius the Great|darius;darius great;darius 1
1|Xerxes I||xerxes;xerxes great
2|Darius III||darius 3
2|Cambyses II||cambyses;cambyses 2
2|Artaxerxes I||artaxerxes;artaxerxes 1
3|Khosrow I||khosrow 1;khosrau anushirvan;chosroes 1;anushirvan
3|Shapur I||shapur 1;shapur
3|Ardashir I||ardashir 1;ardashir
3|Khosrow II||khosrow 2;chosroes 2;khosrau parviz
3|Artaxerxes II||artaxerxes 2
3|Artaxerxes III||artaxerxes 3
3|Shapur II||shapur 2;shapur great
3|Yazdegerd III||yazdegerd 3;yazdgerd 3
4|Bardiya||smerdis
4|Darius II||darius 2
4|Xerxes II||xerxes 2
4|Bahram V||bahram gur;bahram 5
4|Kavad I||kavad 1;kavadh
4|Mithridates I of Parthia||mithridates 1
4|Mithridates II||mithridates 2
4|Arsaces I of Parthia||arsaces;arsaces 1
4|Orodes II||orodes 2;orodes
4|Phraates IV||phraates 4
4|Peroz I||peroz;firuz
4|Teispes
4|Cyrus I||cyrus 1
4|Cambyses I||cambyses 1
5|Arses of Persia||artaxerxes 4;arses
5|Vologases I||vologases 1;vologases
5|Artabanus IV of Parthia||artabanus 4
5|Hormizd IV||hormizd 4
5|Yazdegerd I||yazdegerd 1
5|Bahram I||bahram 1
5|Narseh||narses persia
5|Shapur III||shapur 3
5|Boran||queen boran;borandukht
5|Azarmidokht
5|Phraates II||phraates 2
5|Mithridates III of Parthia||mithridates 3
5|Achaemenes
6|Sogdianus
6|Gotarzes II||gotarzes 2
6|Vardanes I||vardanes
6|Pacorus II||pacorus 2
6|Osroes I||osroes
6|Hormizd I||hormizd 1
6|Bahram II||bahram 2
6|Bahram III||bahram 3
6|Valash|Balash|balash
6|Jamasp
6|Kavad II||kavad 2;sheroe
6|Ardashir III||ardashir 3
`,
nope:{
 'alexander great|alexander':'He conquered Persia &mdash; a Macedonian, not a Persian king.',
 'leonidas':'The Spartan who fought Xerxes at Thermopylae &mdash; very much not Persian.',
 'nebuchadnezzar|hammurabi':'A Babylonian king &mdash; different empire.'
},
amb:{
 'darius':'Which Darius? Add a number.',
 'artaxerxes':'Which Artaxerxes? Add a number.',
 'khosrow|chosroes|khosrau':'Which Khosrow? Add a number.',
 'shapur':'Which Shapur? Add a number.',
 'bahram':'Which Bahram? Add a number or nickname.',
 'yazdegerd':'Which Yazdegerd? Add a number.'
}},

{id:'thegreat', cat:'Rulers', q:'Name a ruler known as "the Great"', hint:'Any ruler with the nickname "the Great"',
list:`
1|Alexander the Great||alexander;alexander 3 macedon
1|Peter the Great||peter;peter 1
1|Catherine the Great||catherine;catherine 2
2|Alfred the Great||alfred
2|Frederick the Great||frederick 2 prussia;frederick;old fritz
2|Cyrus the Great||cyrus
2|Charlemagne||charles great
2|Constantine the Great||constantine
3|Darius the Great||darius;darius 1
3|Otto the Great||otto 1;otto
3|Ramesses the Great|Ramesses II|ramesses 2;ramses;ramesses
3|Akbar the Great|Akbar|akbar
3|Herod the Great||herod
3|Theodosius the Great|Theodosius I|theodosius;theodosius 1
3|Ivan the Great|Ivan III of Russia|ivan 3
3|Pompey the Great|Pompey|pompey;pompey magnus;gnaeus pompeius
3|Cnut the Great|Cnut|canute;knut;cnut
3|Suleiman the Magnificent||suleiman
4|Kamehameha the Great|Kamehameha I|kamehameha;kamehameha 1
4|Casimir the Great|Casimir III the Great|casimir 3;casimir
4|Ashoka the Great|Ashoka|ashoka;asoka
4|Shapur the Great|Shapur II|shapur 2
4|Antiochus the Great|Antiochus III the Great|antiochus 3;antiochus
4|Basil the Great||basil caesarea
4|Pope Gregory the Great|Pope Gregory I|gregory 1;gregory
4|Pope Leo the Great|Pope Leo I|leo 1
4|Albert the Great|Albertus Magnus|albertus magnus
4|Sancho the Great|Sancho III of Pamplona|sancho 3;sancho
4|Louis the Great|Louis I of Hungary|louis 1 hungary
4|Mithridates the Great|Mithridates VI Eupator|mithridates 6;mithridates
4|Tigranes the Great||tigranes
5|Valdemar the Great|Valdemar I of Denmark|valdemar;valdemar 1
5|Rhodri the Great|Rhodri the Great|rhodri mawr;rhodri
5|Llywelyn the Great||llywelyn
5|Mstislav the Great||mstislav
5|Vladimir the Great||vladimir;volodymyr;vladimir 1
5|Stefan the Great|Stephen the Great|stephen great;stefan cel mare;stephen 3 moldavia
5|Rajaraja the Great|Rajaraja I|rajaraja;rajaraja chola
5|Simeon the Great|Simeon I of Bulgaria|simeon 1;simeon
5|Abbas the Great|Abbas the Great|abbas 1;shah abbas
5|Ferdinand the Great|Ferdinand I of León|ferdinand 1 leon
6|Hugh the Great||hugh great
6|Vytautas the Great||vytautas;witold
6|Peter III of Aragon|Peter III of Aragon|peter 3 aragon
6|Sargon of Akkad||sargon;sargon great;sargon akkad
`,
nope:{
 'gatsby|great gatsby':'Great, yes &mdash; but fictional and not a ruler.',
 'great britain|great wall':'Great &mdash; but not a person!'
}}
);

/* Dug Up — more prompts: the ancient world */
PROMPT_DATA.push(
{id:'polis', cat:'Ancient World', q:'Name an ancient Greek city-state', hint:'Any polis, from Sicily to the Black Sea',
list:`
1|Athens||athenai
1|Sparta||lacedaemon;lakedaimon
2|Corinth||korinthos
2|Thebes|Thebes, Greece|thebai
2|Syracuse|Syracuse, Sicily|syrakousai
3|Argos
3|Megara
3|Miletus||miletos
3|Rhodes||rhodos
3|Ephesus||ephesos
3|Byzantium||byzantion
3|Samos
3|Mycenae||mykenai
3|Delphi
4|Massalia||marseille;massilia
4|Delos
4|Aegina
4|Chalcis||chalkis
4|Eretria
4|Plataea||plataia
4|Elis
4|Sicyon||sikyon
4|Mantinea
4|Tegea
4|Messene
4|Mytilene||lesbos
4|Chios
4|Naxos
4|Corcyra||kerkyra;corfu
4|Halicarnassus||halikarnassos
4|Smyrna||izmir
4|Croton||kroton;crotone
4|Sybaris
4|Taras||tarentum;taranto
4|Akragas||agrigento;agrigentum
4|Cyrene
4|Epidaurus||epidavros
4|Megalopolis
5|Thasos
5|Kos||cos
5|Knidos||cnidus
5|Phocaea||phokaia
5|Abdera
5|Olynthus||olynthos
5|Potidaea
5|Amphipolis
5|Locri||lokroi
5|Neapolis||naples
5|Cumae||kyme
5|Gela
5|Selinunte||selinus
5|Naukratis||naucratis
5|Sinope
5|Trapezus||trebizond;trabzon
5|Chersonesus||chersonesos
5|Olbia|Pontic Olbia|olbia
5|Colophon||kolophon
5|Priene
5|Troezen||troizen
5|Orchomenus||orchomenos
5|Thespiae||thespiai
5|Tanagra
5|Ithaca
6|Phlius
6|Panticapaeum||pantikapaion;kerch
6|Histria|Histria (ancient city)|istros
6|Tomis||constanta
6|Phaselis
6|Erythrae||erythrai
6|Teos
6|Clazomenae||klazomenai
6|Hermione|Hermione, Greece
6|Naupactus||nafpaktos
6|Heraclea Pontica||heraclea
6|Leontini
6|Himera
6|Zancle||messina
`,
nope:{
 'troy|ilion':'Homer\'s enemy city in Anatolia &mdash; not a Greek polis.',
 'olympia':'A sanctuary in the territory of Elis &mdash; not a city-state itself.',
 'rome|carthage':'Not Greek!',
 'macedon|macedonia':'A kingdom, not a city-state.'
}},

{id:'provinces', cat:'Ancient World', q:'Name a province of the Roman Empire', hint:'Latin or modern names both count',
list:`
1|Britannia|Roman Britain|britain;roman britain
1|Gaul||gallia
1|Hispania||spain
1|Aegyptus|Egypt (Roman province)|egypt
2|Judaea|Judaea (Roman province)|judea;iudaea
2|Syria|Roman Syria|syria
2|Dacia|Roman Dacia|dacia
2|Germania|Germania Superior|germany;germania superior
2|Macedonia|Macedonia (Roman province)|macedon
3|Africa|Africa (Roman province)|africa proconsularis
3|Asia|Asia (Roman province)|asia minor;provincia asia
3|Achaea|Achaea (Roman province)|achaia;greece
3|Sicilia|Sicilia (Roman province)|sicily
3|Thracia||thrace
3|Pannonia
3|Mauretania|Mauretania Tingitana|mauritania;mauretania tingitana
3|Numidia|Numidia (Roman province)|numidia
3|Galatia|Galatia (Roman province)
3|Cappadocia|Cappadocia (Roman province)
3|Arabia Petraea||arabia
3|Mesopotamia|Mesopotamia (Roman province)
3|Armenia|Armenia (Roman province)
3|Bithynia et Pontus||bithynia;pontus
4|Gallia Narbonensis||narbonensis;provincia narbonensis
4|Gallia Lugdunensis||lugdunensis
4|Gallia Belgica||belgica
4|Gallia Aquitania||aquitania;aquitaine
4|Lusitania||portugal
4|Hispania Baetica||baetica
4|Hispania Tarraconensis||tarraconensis
4|Raetia||rhaetia
4|Noricum
4|Dalmatia|Dalmatia (Roman province)|dalmatia;illyricum
4|Moesia
4|Cilicia
4|Lycia et Pamphylia||lycia;pamphylia
4|Creta et Cyrenaica||cyrenaica;crete;creta
4|Cyprus|Cyprus (Roman province)
4|Sardinia et Corsica||sardinia;corsica
4|Epirus|Epirus (Roman province)|epirus vetus
4|Cisalpine Gaul||gallia cisalpina
4|Germania Inferior
5|Assyria|Assyria (Roman province)
5|Alpes Maritimae
5|Alpes Cottiae
5|Alpes Poeninae
5|Mauretania Caesariensis
5|Britannia Superior
5|Britannia Inferior
5|Pannonia Superior
5|Pannonia Inferior
5|Moesia Superior
5|Moesia Inferior
5|Dacia Aureliana
5|Osroene
5|Syria Palaestina||palaestina;palestine
5|Phoenice|Phoenice (Roman province)|phoenicia
5|Valeria|Valeria (province)
6|Tripolitania
6|Byzacena
6|Isauria
6|Lycaonia
6|Pisidia
6|Scythia Minor
6|Valentia|Valentia (Roman Britain)
6|Maxima Caesariensis
6|Flavia Caesariensis
`,
nope:{
 'rome|italia|italy':'The heartland &mdash; Italy wasn\'t a province.',
 'parthia|persia':'Rome\'s great rival &mdash; never a province.',
 'scotland|caledonia|hibernia|ireland':'Rome never conquered it.'
}},

{id:'romanbuild', cat:'Ancient World', q:'Name a famous Roman building or monument', hint:'Anywhere in the Roman world',
list:`
1|Colosseum
1|Pantheon|Pantheon, Rome|pantheon
1|Hadrian's Wall||hadrians wall
2|Roman Forum||forum;forum romanum
2|Circus Maximus
2|Pont du Gard
2|Aqueduct of Segovia||segovia aqueduct
2|Arch of Constantine
2|Trajan's Column||trajans column
2|Baths of Caracalla
3|Appian Way||via appia
3|Castel Sant'Angelo||mausoleum hadrian;hadrians mausoleum;castel santangelo
3|Arch of Titus
3|Ara Pacis
3|Domus Aurea||golden house
3|Hadrian's Villa||villa adriana;hadrians villa
3|Diocletian's Palace||diocletians palace;split palace
3|Library of Celsus
3|Verona Arena||arena verona
3|Antonine Wall
3|Roman Baths|Roman Baths (Bath)|baths bath;bath
3|Maison Carrée||maison carree
4|Theatre of Marcellus
4|Arena of Nîmes||arenes nimes;nimes amphitheatre
4|Pula Arena
4|Amphitheatre of El Jem||el jem;thysdrus
4|Porta Nigra
4|Cloaca Maxima
4|Curia Julia||curia;senate house
4|Temple of Saturn
4|Temple of Vesta
4|Basilica of Maxentius||basilica constantine
4|Mausoleum of Augustus
4|Pyramid of Cestius
4|Trajan's Market||trajans market
4|Baths of Diocletian
4|Arch of Septimius Severus
4|Theatre of Pompey
4|Temple of Venus and Roma
4|Leptis Magna
5|Aqueduct of Valens||valens aqueduct
5|Basilica Aemilia
5|Temple of Bel
5|Temple of Bacchus|Baalbek|baalbek
5|Hadrian's Gate||hadrians gate
5|Arch of Trajan|Arch of Trajan (Benevento)
5|Pons Fabricius
5|Milvian Bridge
5|Alcántara Bridge||alcantara bridge
5|Theatre of Orange|Roman Theatre of Orange
5|Arles Amphitheatre
5|Pont Julien
5|Ludus Magnus
5|Temple of Castor and Pollux
5|Arch of Augustus|Arch of Augustus (Rimini)
5|Column of Marcus Aurelius
6|Villa Romana del Casale
6|Villa of the Papyri
6|Temple of Portunus
6|Temple of Hercules Victor
6|Mamertine Prison||tullianum
6|Aqueduct of Tarragona|Les Ferreres Aqueduct|devils bridge tarragona
6|Theatre of Mérida|Roman Theatre (Mérida)|merida theatre
6|Fishbourne Roman Palace||fishbourne
6|Vindolanda
6|Ostia Antica||ostia
`,
nope:{
 'parthenon|acropolis':'That\'s Greek &mdash; centuries older.',
 'trevi fountain|spanish steps|st peters basilica|sistine chapel':'In Rome, but built long after the Romans (18th century or Renaissance).',
 'leaning tower pisa|pisa':'Medieval &mdash; about a thousand years too late.'
}},

{id:'greekmonu', cat:'Ancient World', q:'Name a famous ancient Greek temple or monument', hint:'Temples, theatres and sanctuaries',
list:`
1|Parthenon
1|Acropolis of Athens||acropolis
2|Temple of Zeus at Olympia||temple zeus olympia
2|Temple of Apollo at Delphi|Temple of Apollo (Delphi)|temple apollo delphi;oracle delphi;delphi
2|Theatre of Epidaurus|Ancient Theatre of Epidaurus|epidaurus theatre
2|Temple of Poseidon at Sounion|Temple of Poseidon (Sounion)|sounion;temple poseidon
2|Erechtheion||erechtheum
3|Temple of Hephaestus||hephaisteion;theseion
3|Temple of Olympian Zeus|Temple of Olympian Zeus, Athens|olympieion
3|Lion Gate
3|Treasury of Atreus||tomb agamemnon
3|Propylaea|Propylaea (Acropolis of Athens)|propylaia
3|Temple of Athena Nike
3|Pergamon Altar||altar pergamon;altar zeus pergamon
3|Odeon of Herodes Atticus
3|Theatre of Dionysus
3|Ancient Agora of Athens||agora
3|Stoa of Attalos||stoa attalus
4|Temple of Aphaia
4|Tower of the Winds
4|Temple of Concordia|Temple of Concordia, Agrigento|concordia agrigento
4|Valley of the Temples
4|Temples of Paestum|Paestum|paestum
4|Temple of Segesta|Segesta|segesta
4|Temple of Apollo Epicurius at Bassae||bassae;temple bassae
4|Terrace of the Lions||naxian lions
4|Palace of Knossos|Knossos|knossos
4|Temple of Hera|Heraion of Olympia|heraion;temple hera olympia
4|Stadium of Olympia|Olympia, Greece|olympia stadium
4|Panathenaic Stadium||kallimarmaro
4|Theatre of Delphi
4|Tholos of Delphi|Tholos of Delphi|tholos
5|Temple of Artemis at Corfu|Temple of Artemis (Corfu)
5|Temple of Apollo at Corinth|Temple of Apollo (Corinth)
5|Sanctuary of Asclepius|Asclepieion of Epidaurus|asclepieion
5|Choragic Monument of Lysicrates||lysicrates monument
5|Philippeion
5|Temple of Athena Lindia|Acropolis of Lindos|lindos
5|Theatre of Dodona|Dodona|dodona
5|Telesterion|Eleusis|eleusis
5|Long Walls
5|Pnyx
5|Kerameikos
5|Palace of Nestor||pylos palace
6|Temple of Apollo at Didyma|Didyma|didyma
6|Temple of Hera at Samos|Heraion of Samos|heraion samos
6|Monument of Philopappos||philopappos
6|Stoa Poikile||painted stoa
6|Temple of Zeus at Nemea|Nemea|nemea
6|Sanctuary of Poseidon at Isthmia|Isthmia|isthmia
`,
nope:{
 'colosseum|pantheon':'That\'s Roman!',
 'colossus rhodes|mausoleum halicarnassus':'A Wonder of the World &mdash; long gone. (Valid, but not in this dig.)',
 'great pyramid|sphinx':'That\'s Egyptian!'
}},

{id:'pyramids', cat:'Ancient World', q:'Name an ancient pyramid', hint:'Egypt, Nubia or the Americas',
list:`
1|Great Pyramid of Giza||great pyramid;pyramid khufu;pyramid cheops;khufu
1|Pyramid of Djoser||step pyramid;djoser
2|Pyramid of Khafre||khafre;chephren
2|Pyramid of Menkaure||menkaure;mycerinus
2|Pyramid of the Sun
2|El Castillo, Chichen Itza||el castillo;temple kukulcan;kukulcan;chichen itza
2|Bent Pyramid||bent
3|Red Pyramid||red
3|Pyramid of the Moon
3|Great Pyramid of Cholula||cholula
3|Meidum Pyramid||meidum
3|Nubian pyramids||meroe;pyramids meroe
3|Pyramid of Cestius||cestius
3|Temple of the Inscriptions||palenque pyramid
3|Pyramid of the Magician||uxmal;magician
3|Tikal Temple I|Tikal Temple I|temple great jaguar;tikal
4|Pyramid of Unas||unas
4|Pyramid of Teti||teti
4|Pyramid of Userkaf||userkaf
4|Pyramid of Sahure||sahure
4|Black Pyramid||amenemhat 3;dahshur black
4|Pyramid of Neferirkare||neferirkare
4|Pyramid of Djedefre||abu rawash;djedefre
4|Layer Pyramid||khaba
4|Temple of the Feathered Serpent|Temple of the Feathered Serpent, Teotihuacan|feathered serpent
4|El Tajín|El Tajín|pyramid niches;el tajin
4|La Danta|El Mirador|danta;el mirador
4|Pyramids of Güímar||guimar
5|Pyramid of Amenemhat I||amenemhat 1
5|Pyramid of Senusret II||senusret 2;lahun pyramid;el lahun
5|Hawara pyramid|Pyramid of Amenemhat III (Hawara)|hawara
5|Pyramid of Pepi II||pepi 2
5|Pyramid of Nyuserre||nyuserre
5|Pyramid of Khendjer||khendjer
5|Pyramid of Ahmose||ahmose
5|Pyramids of Nuri|Nuri|nuri;taharqa pyramid
5|Pyramids of El-Kurru|El-Kurru|el kurru
5|Pyramid of Neferefre
5|Gebel Barkal
5|Great Pyramid of La Venta|La Venta|la venta
5|Temple of Kukulcán at Mayapan|Mayapan|mayapan
5|Nohoch Mul|Cobá|coba
5|Pyramid of Tenayuca|Tenayuca
6|Pyramid of Huni|Meidum Pyramid|huni
6|Sekhemkhet pyramid|Buried Pyramid|buried pyramid;sekhemkhet
6|Pyramid of Sneferu at Seila|Seila Pyramid|seila
6|Calakmul Structure II|Calakmul|calakmul
6|Pyramid of Cuicuilco|Cuicuilco|cuicuilco
6|Huaca del Sol|Huaca del Sol|huaca sol
6|Caral pyramids|Caral|caral
`,
nope:{
 'louvre pyramid|louvre':'Gorgeous &mdash; but built in 1989.',
 'luxor las vegas':'Nice try.',
 'ziggurat ur|ziggurat':'A ziggurat &mdash; close cousin, but not a pyramid.',
 'sphinx|great sphinx':'Right next to the pyramids &mdash; but a sphinx.'
}},

{id:'scripts', cat:'Ancient World', q:'Name an ancient writing system', hint:'Scripts and alphabets from before c. 1500 AD',
list:`
1|Egyptian hieroglyphs||hieroglyphs;hieroglyphics
1|Cuneiform
2|Latin alphabet||latin;roman alphabet
2|Greek alphabet||greek
2|Runes||runic;futhark;elder futhark;younger futhark;runic alphabet
2|Linear B
2|Linear A
2|Phoenician alphabet||phoenician
3|Maya script||maya glyphs;mayan hieroglyphs;maya
3|Indus script||indus;harappan script
3|Oracle bone script||oracle bones;oracle bone
3|Chinese characters||hanzi;chinese
3|Hieratic
3|Demotic|Demotic (Egyptian)|demotic
3|Ogham||ogam
3|Aramaic alphabet||aramaic
3|Hebrew alphabet||hebrew
3|Arabic script||arabic alphabet;arabic
3|Brahmi||brahmi script
3|Sanskrit|Devanagari|devanagari
3|Cyrillic script||cyrillic
3|Hangul||hangeul;korean alphabet
4|Glagolitic script||glagolitic
4|Kharosthi
4|Old Persian cuneiform||old persian
4|Ugaritic alphabet||ugaritic
4|Proto-Sinaitic script||proto sinaitic
4|Etruscan alphabet||etruscan
4|Gothic alphabet||gothic
4|Coptic alphabet||coptic
4|Meroitic script||meroitic
4|Rongorongo
4|Old Turkic script||orkhon;old turkic
4|Armenian alphabet||armenian
4|Georgian scripts||georgian
4|Ge'ez script||geez;ethiopic
4|Tifinagh
4|Kana|Kana|hiragana;katakana;man'yogana
4|Syriac alphabet||syriac
5|Cypriot syllabary||cypriot
5|Luwian hieroglyphs||luwian;anatolian hieroglyphs
5|Proto-Elamite
5|Linear Elamite
5|Old Hungarian script||rovas;hungarian runes
5|Zapotec script||zapotec
5|Isthmian script||epi olmec
5|Quipu||khipu
5|Tamil-Brahmi
5|Grantha script||grantha
5|Pallava script||pallava
5|Kawi script||kawi
5|Tangut script||tangut
5|Khitan scripts||khitan
5|Sogdian alphabet||sogdian
5|Avestan alphabet||avestan
5|Pahlavi scripts||pahlavi
5|Nabataean alphabet||nabataean
5|South Arabian alphabet||musnad;ancient south arabian
6|Cretan hieroglyphs
6|Byblos syllabary
6|Phaistos Disc||phaistos
6|Vinča symbols||vinca
6|Jurchen script||jurchen
6|Old Uyghur alphabet||uyghur
6|Hatran alphabet||hatran
6|Palmyrene alphabet||palmyrene
6|Paleo-Hebrew alphabet||paleo hebrew
`,
nope:{
 'english|french|spanish':'That\'s a language &mdash; name the script!',
 'morse code|braille':'Brilliant inventions &mdash; but 19th century.',
 'emoji':'Ancient? Not quite.'
}},

{id:'finds', cat:'Ancient World', q:'Name a famous archaeological find', hint:'Treasures, tombs, fossils and lost cities that were dug up',
list:`
1|Tutankhamun's tomb|KV62|tutankhamun;king tut tomb;tomb tutankhamun;tutankhamuns tomb
1|Terracotta Army||terracotta warriors;terracotta
1|Rosetta Stone
1|Dead Sea Scrolls
2|Ötzi||otzi;iceman;otzi iceman
2|Sutton Hoo
2|Lascaux|Lascaux|lascaux cave;lascaux paintings
2|Pompeii
2|Lucy|Lucy (Australopithecus)|lucy australopithecus
2|Machu Picchu
2|Troy
2|Antikythera mechanism
3|Mask of Agamemnon||agamemnon mask
3|Oseberg ship
3|Gokstad ship
3|Nebra sky disc
3|Venus of Willendorf||willendorf
3|Staffordshire Hoard
3|Royal Cemetery at Ur||royal tombs ur;ur
3|Knossos
3|Göbekli Tepe||gobekli tepe
3|Bust of Nefertiti||nefertiti bust
3|Tollund Man||tollund
3|Chauvet Cave||chauvet
3|Altamira|Cave of Altamira|altamira cave
3|Richard III's remains|Exhumation and reburial of Richard III of England|richard 3 car park;richard 3 remains
3|Mary Rose
3|Vasa|Vasa (ship)
3|Library of Ashurbanipal||ashurbanipal library
4|Ishtar Gate
4|Cyrus Cylinder
4|Code of Hammurabi||hammurabi stele
4|Behistun Inscription||behistun;bisotun
4|Sanxingdui
4|Mawangdui
4|Tomb of Philip II|Vergina|vergina;aigai
4|Lindow Man
4|Gundestrup cauldron||gundestrup
4|Lewis chessmen||lewis chess
4|Hoxne Hoard
4|Cuerdale Hoard
4|Lion-man|Löwenmensch figurine|lowenmensch;lion man
4|Laetoli footprints||laetoli
4|Turkana Boy
4|Peking Man
4|Homo floresiensis||hobbit;flores man
4|Uluburun shipwreck||uluburun
4|L'Anse aux Meadows||lanse aux meadows
4|Çatalhöyük||catalhoyuk
4|Mohenjo-daro||mohenjo daro
4|Venus of Hohle Fels||hohle fels
4|Mold cape
4|Battersea Shield
4|Snettisham Hoard
4|Vix Grave|Vix Grave|vix krater
4|Riace bronzes||riace warriors
4|Uffington White Horse
4|Taung Child
4|Nag Hammadi library||nag hammadi
5|Tomb of the Diver||tomb diver
5|Varna Necropolis||varna gold
5|Panagyurishte Treasure||panagyurishte
5|Mildenhall Treasure
5|Galloway Hoard
5|Vindolanda tablets||vindolanda
5|Ain Ghazal statues||ain ghazal
5|Narmer Palette
5|Standard of Ur
5|Golden Hat of Berlin|Berlin Gold Hat|golden hat
5|Trundholm sun chariot||sun chariot
5|Egtved Girl
5|Grauballe Man
5|Haraldskær Woman
5|Ram in a Thicket
5|Warka Vase
5|Antikythera youth
5|Derveni papyrus
5|Pylos Combat Agate
5|Griffin Warrior Tomb
5|Amesbury Archer
5|Ardi|Ardi|ardipithecus
5|Kennewick Man
5|Naia|Naia (skeleton)
6|Hinton St Mary Mosaic
6|Ringlemere Cup
6|Ballana tombs
6|Sacred Well of Chichen Itza|Sacred Cenote|sacred cenote
6|Lady of Elche
6|Bodies of Herculaneum|Herculaneum|herculaneum skeletons
6|Golden Man|Issyk kurgan|issyk kurgan;issyk golden man
6|Pazyryk carpet||pazyryk
6|Siberian Ice Maiden||ice maiden;princess ukok
6|Sima de los Huesos
6|Dmanisi skulls||dmanisi
6|Rising Star Cave|Homo naledi|homo naledi
`,
nope:{
 'ark covenant|holy grail':'Legend has it&hellip; but nobody has actually dug it up.',
 'atlantis|el dorado':'Never found!',
 'jurassic park':'Fiction &mdash; and mosquitoes in amber don\'t work like that.'
}},

{id:'ancientwomen', cat:'Ancient World', q:'Name a famous woman of ancient Greece or Rome', hint:'Real women, not goddesses',
list:`
1|Cleopatra
1|Sappho
2|Hypatia
2|Livia||livia drusilla
2|Agrippina the Younger||agrippina;agrippina younger
2|Messalina||valeria messalina
2|Boudica||boudicca;boadicea
2|Aspasia
2|Zenobia
3|Olympias
3|Julia the Elder||julia;julia augusti
3|Cornelia|Cornelia (mother of the Gracchi)|cornelia africana;mother gracchi
3|Lucretia
3|Agrippina the Elder||agrippina elder
3|Helena|Helena, mother of Constantine I|saint helena;helena augusta
3|Theodora|Theodora (wife of Justinian I)|empress theodora
3|Xanthippe
3|Gorgo|Gorgo, Queen of Sparta|gorgo
3|Artemisia I of Caria||artemisia
3|Julia Domna
3|Fulvia
3|Octavia the Younger||octavia
4|Porcia|Porcia Catonis|portia
4|Servilia|Servilia (mother of Brutus)|servilia
4|Clodia
4|Hortensia
4|Sulpicia
4|Julia Maesa
4|Poppaea Sabina||poppaea
4|Galla Placidia
4|Pulcheria
4|Antonia Minor||antonia
4|Plotina|Pompeia Plotina|plotina
4|Faustina the Younger||faustina
4|Tanaquil
4|Cloelia
4|Verginia
4|Arsinoe II
4|Berenice II
4|Phryne
4|Diotima of Mantinea||diotima
4|Hipparchia of Maroneia||hipparchia
4|Agnodice
4|Arete of Cyrene||arete
5|Telesilla
5|Corinna
5|Erinna
5|Praxilla
5|Anyte of Tegea||anyte
5|Nossis
5|Myrtis of Anthedon||myrtis
5|Cynisca
5|Elpinice
5|Agariste
5|Neaira||neaera
5|Theano|Theano (philosopher)
5|Aristoclea||themistoclea
5|Claudia Quinta
5|Julia Soaemias
5|Julia Mamaea
5|Domitia Longina||domitia
5|Vibia Sabina||sabina
5|Plautilla|Fulvia Plautilla
5|Fausta
5|Eudoxia|Aelia Eudoxia
5|Aelia Eudocia||eudocia
6|Melinno
6|Laïs of Corinth|Laïs of Corinth|lais
6|Leaena
6|Timoclea
6|Chilonis
6|Cratesipolis
6|Amastris
6|Stratonice of Syria||stratonice
`,
nope:{
 'athena|aphrodite|hera|venus|juno|minerva':'A goddess &mdash; this dig wants real women.',
 'helen troy|penelope|medea|antigone':'A figure of myth &mdash; this dig wants real women.'
}},

{id:'mesopotamia', cat:'Ancient World', q:'Name a king or queen of ancient Mesopotamia', hint:'Sumer, Akkad, Babylon and Assyria',
list:`
1|Hammurabi||hammurapi
1|Nebuchadnezzar II||nebuchadnezzar;nebuchadrezzar
1|Gilgamesh
2|Sargon of Akkad||sargon;sargon great
2|Ashurbanipal||assurbanipal;sardanapalus
2|Sennacherib
2|Semiramis||shammuramat
3|Tiglath-Pileser III||tiglath pileser 3;tiglath pileser;pul
3|Sargon II||sargon 2
3|Esarhaddon
3|Shalmaneser III||shalmaneser 3
3|Ashurnasirpal II||ashurnasirpal 2;ashurnasirpal
3|Naram-Sin of Akkad||naram sin
3|Ur-Nammu||ur nammu
3|Nabonidus
3|Belshazzar
3|Nabopolassar
4|Shulgi
4|Gudea
4|Lugalzagesi
4|Eannatum
4|Urukagina||uruinimgina
4|Rimush
4|Manishtushu
4|Shamshi-Adad I||shamshi adad
4|Shalmaneser V||shalmaneser 5
4|Tukulti-Ninurta I||tukulti ninurta
4|Ashur-uballit I||ashur uballit
4|Merodach-Baladan II||merodach baladan;marduk apla iddina
4|Samsu-iluna||samsu iluna
4|Rim-Sin I||rim sin
4|Zimri-Lim||zimri lim
4|Kubaba|Kugbau|ku baba
4|Puabi
4|Enmerkar
4|Lugalbanda
4|Etana
5|Ishbi-Erra||ishbi erra
5|Ibbi-Sin||ibbi sin
5|Amar-Sin||amar sin
5|Shu-Sin||shu sin
5|Shar-Kali-Sharri||shar kali sharri
5|Enheduanna
5|Sumu-abum||sumuabum
5|Burna-Buriash II||burnaburiash
5|Kurigalzu
5|Nebuchadnezzar I||nebuchadnezzar 1
5|Tiglath-Pileser I||tiglath pileser 1
5|Ashur-dan II
5|Adad-nirari II
5|Sin-shar-ishkun
5|Ashur-uballit II
5|Amel-Marduk||evil merodach
5|Neriglissar
5|Labashi-Marduk
5|Mesannepada
5|Enmebaragesi
6|Alulim
6|Dumuzid the Shepherd|Dumuzid the Shepherd|dumuzid
6|En-men-lu-ana|En-men-lu-ana|enmenluana
6|Ziusudra
6|Lugal-anne-mundu|Lugal-Anne-Mundu
6|Akurgal
6|Enannatum I|Enannatum I|enannatum
6|Utu-hengal||utuhegal
6|Puzur-Inshushinak
6|Erishum I
`,
nope:{
 'cyrus great|cyrus|darius|xerxes':'A Persian king &mdash; he conquered Babylon.',
 'marduk|ishtar|inanna|enlil':'That\'s a god!',
 'ramesses|tutankhamun':'An Egyptian pharaoh &mdash; wrong river valley.'
}},

{id:'hellenistic', cat:'Ancient World', q:'Name a Hellenistic king or queen', hint:'Rulers of the kingdoms after Alexander, 323&ndash;30 BC',
list:`
1|Cleopatra||cleopatra 7
1|Ptolemy I Soter||ptolemy 1;ptolemy soter;ptolemy
2|Seleucus I Nicator||seleucus;seleucus 1
2|Antiochus III the Great||antiochus 3;antiochus great
2|Pyrrhus of Epirus||pyrrhus
2|Mithridates VI Eupator||mithridates 6;mithridates;mithridates great
3|Antigonus I Monophthalmus||antigonus 1;antigonus one eyed;antigonus
3|Demetrius I of Macedon||demetrius poliorcetes;demetrius besieger
3|Antiochus IV Epiphanes||antiochus 4;antiochus epiphanes
3|Ptolemy II Philadelphus||ptolemy 2;ptolemy philadelphus
3|Lysimachus
3|Cassander
3|Philip V of Macedon||philip 5
3|Perseus of Macedon||perseus
3|Attalus I||attalus
3|Eumenes II
3|Arsinoe II
3|Berenice II
3|Hiero II of Syracuse||hiero 2;hiero
3|Agathocles of Syracuse||agathocles
4|Antigonus II Gonatas||antigonus gonatas;antigonus 2
4|Ptolemy III Euergetes||ptolemy 3
4|Ptolemy IV Philopator||ptolemy 4
4|Ptolemy V Epiphanes||ptolemy 5
4|Ptolemy VI Philometor||ptolemy 6
4|Ptolemy VIII Physcon||ptolemy 8;physcon
4|Ptolemy XII Auletes||ptolemy 12;auletes
4|Ptolemy XIII||ptolemy 13
4|Arsinoe IV
4|Antiochus I Soter||antiochus 1
4|Antiochus II Theos||antiochus 2
4|Seleucus II Callinicus||seleucus 2
4|Seleucus IV Philopator||seleucus 4
4|Demetrius I Soter||demetrius soter
4|Antiochus VII Sidetes||antiochus 7
4|Attalus III||attalus 3
4|Eumenes I
4|Philetaerus
4|Euthydemus I||euthydemus
4|Demetrius I of Bactria||demetrius bactria
4|Menander I||milinda;menander
4|Diodotus I||diodotus
4|Cleomenes III
4|Agis IV
4|Nabis
4|Antigonus III Doson||antigonus doson
4|Philip III Arrhidaeus||philip arrhidaeus;philip 3
4|Alexander IV of Macedon||alexander 4
5|Cleopatra Thea
5|Cleopatra Selene II||cleopatra selene
5|Berenice IV
5|Ptolemy XV Caesarion||caesarion
5|Seleucus III Ceraunus||seleucus 3
5|Antiochus Hierax
5|Alexander Balas
5|Demetrius II Nicator||demetrius 2
5|Tigranes the Great||tigranes
5|Pharnaces II of Pontus||pharnaces
5|Prusias II of Bithynia||prusias
5|Nicomedes IV of Bithynia||nicomedes
5|Eucratides I||eucratides
5|Juba II
6|Achaeus|Achaeus (general)|achaeus
6|Molon|Molon (general)
6|Ptolemy Keraunos||keraunos;ceraunus
6|Antipater|Antipater|antipater regent
6|Perdiccas
6|Polyperchon
6|Arsinoe III
6|Cleopatra I Syra||cleopatra 1
`,
nope:{
 'alexander great|alexander':'The man himself &mdash; Hellenistic rule began with his death in 323 BC.',
 'julius caesar|mark antony':'Roman &mdash; though deeply tangled up with Cleopatra.',
 'hannibal':'A Carthaginian general, not a Hellenistic king.'
}},

{id:'greekleaders', cat:'Ancient World', q:'Name a statesman or general of ancient Greece', hint:'Before Alexander\'s conquests',
list:`
1|Pericles
1|Leonidas I||leonidas
2|Themistocles
2|Solon
2|Philip II of Macedon||philip 2;philip macedon
2|Alcibiades
2|Draco|Draco (lawgiver)|draco;draconian
2|Lycurgus|Lycurgus of Sparta|lycurgus
3|Cleisthenes
3|Miltiades|Miltiades the Younger
3|Aristides
3|Epaminondas
3|Demosthenes
3|Lysander
3|Peisistratos||pisistratus
3|Pausanias|Pausanias (general)
3|Cimon
3|Nicias
3|Cleon
3|Brasidas
3|Xenophon
4|Pelopidas
4|Phocion
4|Agesilaus II||agesilaus
4|Archidamus II||archidamus
4|Hippias|Hippias (tyrant)|hippias tyrant
4|Polycrates
4|Periander
4|Dionysius I of Syracuse||dionysius elder;dionysius 1
4|Gelon
4|Hiero I of Syracuse||hiero 1
4|Cleomenes I
4|Thrasybulus
4|Conon
4|Iphicrates
4|Chabrias
4|Timoleon
4|Demosthenes, son of Alcisthenes|Demosthenes (general)|demosthenes alcisthenes;demosthenes pylos;demosthenes strategos
4|Lamachus
4|Eurybiades
4|Leotychidas
4|Hipparchus|Hipparchus (son of Peisistratos)
4|Harmodius and Aristogeiton||harmodius;aristogeiton;tyrannicides
5|Pittacus of Mytilene||pittacus
5|Cleobulus
5|Thrasybulus of Miletus
5|Gylippus
5|Callicratidas
5|Ephialtes|Ephialtes (statesman)
5|Isagoras
5|Theramenes
5|Critias
5|Aeschines
5|Isocrates
5|Hypereides||hyperides
5|Lycurgus of Athens
5|Eubulus|Eubulus (statesman)
5|Jason of Pherae||jason pherae
5|Phalaris
5|Pheidon
5|Kypselos||cypselus
5|Thucydides|Thucydides, son of Melesias|thucydides melesias
6|Pagondas
6|Xanthippus
6|Callias|Callias II
6|Gorgidas
6|Androcles
6|Phormio
6|Cleombrotus I
6|Agis II
`,
nope:{
 'alexander great|alexander':'He comes right after this dig\'s time window &mdash; and he\'d win too easily.',
 'zeus|achilles|odysseus|agamemnon':'A figure of myth, not history.',
 'socrates|plato|aristotle':'A philosopher &mdash; try the philosophy dig!'
}},

{id:'republic', cat:'Ancient World', q:'Name a figure of the Roman Republic', hint:'509&ndash;27 BC &mdash; consuls, generals, rebels and writers',
list:`
1|Julius Caesar||caesar;gaius julius caesar
1|Cicero||marcus tullius cicero;tully
1|Mark Antony||marcus antonius;antony
1|Spartacus
2|Pompey||pompey great;gnaeus pompeius;pompeius magnus
2|Brutus|Marcus Junius Brutus|marcus brutus
2|Scipio Africanus||scipio
2|Cato the Younger||cato younger;cato uticensis
2|Cato the Elder||cato elder;cato censor
2|Crassus|Marcus Licinius Crassus|marcus crassus
2|Sulla||lucius cornelius sulla
2|Octavian|Augustus|octavian;octavius;augustus
3|Gaius Marius||marius
3|Tiberius Gracchus
3|Gaius Gracchus
3|Cincinnatus
3|Lucius Junius Brutus||junius brutus
3|Cassius|Gaius Cassius Longinus|gaius cassius
3|Catiline
3|Lepidus|Marcus Aemilius Lepidus (triumvir)|lepidus triumvir
3|Agrippa|Marcus Vipsanius Agrippa|marcus agrippa
3|Fabius Maximus||fabius cunctator;cunctator
3|Camillus|Marcus Furius Camillus
3|Coriolanus|Gaius Marcius Coriolanus
3|Lucullus
3|Publius Clodius Pulcher||clodius
3|Sertorius|Quintus Sertorius
4|Appius Claudius Caecus||appius claudius
4|Scipio Aemilianus
4|Lucius Aemilius Paullus Macedonicus||aemilius paullus
4|Titus Quinctius Flamininus||flamininus
4|Marcus Claudius Marcellus||marcellus
4|Marcus Atilius Regulus||regulus
4|Gaius Duilius||duilius
4|Horatius Cocles||horatius
4|Gaius Mucius Scaevola||mucius scaevola;scaevola
4|Lucius Cornelius Cinna||cinna
4|Lucius Appuleius Saturninus||saturninus
4|Marcus Livius Drusus|Marcus Livius Drusus (reformer)|livius drusus
4|Quintus Fabius Maximus Rullianus||rullianus
4|Publius Decius Mus|Publius Decius Mus (consul 340 BC)|decius mus
4|Gnaeus Pompeius Strabo||pompeius strabo
4|Titus Labienus||labienus
4|Gaius Verres||verres
4|Publius Cornelius Dolabella|Publius Cornelius Dolabella (consul 44 BC)|dolabella
4|Sextus Pompey||sextus pompeius
4|Decimus Junius Brutus Albinus||decimus brutus
4|Gaius Scribonius Curio|Gaius Scribonius Curio (tribune 50 BC)|curio
5|Quintus Hortensius||hortensius
5|Gaius Flaminius
5|Varro|Gaius Terentius Varro|terentius varro
5|Lucius Aemilius Paullus|Lucius Aemilius Paullus (consul 216 BC)|paullus cannae
5|Marcus Valerius Corvus||valerius corvus
5|Manius Curius Dentatus||curius dentatus
5|Gaius Fabricius Luscinus||fabricius
5|Quintus Caecilius Metellus Numidicus||metellus
5|Lucius Licinius Murena||murena
5|Gaius Antonius Hybrida||antonius hybrida
5|Marcus Calpurnius Bibulus||bibulus
5|Quintus Lutatius Catulus||catulus
6|Spurius Cassius Vecellinus||spurius cassius
6|Spurius Maelius||maelius
6|Marcus Manlius Capitolinus||manlius capitolinus
6|Lucius Sextius||sextius
6|Gaius Licinius Stolo||licinius stolo
6|Publius Valerius Publicola||publicola;poplicola
`,
nope:{
 'nero|caligula|hadrian|trajan|marcus aurelius':'An emperor &mdash; the Republic was over by then.',
 'hannibal':'Rome\'s greatest enemy &mdash; a Carthaginian.',
 'romulus|remus':'Legendary founder of Rome &mdash; before the Republic (and possibly before history).'
}}
);

/* Dug Up — more prompts: myths and legends of the ancient world */
PROMPT_DATA.push(
{id:'greekgods', cat:'Myths & Legends', q:'Name a god or goddess of Greek mythology', hint:'Olympians, Titans, primordials and minor gods',
list:`
1|Zeus
1|Athena||athene;pallas athena
1|Poseidon
1|Hades
1|Aphrodite
2|Apollo
2|Ares
2|Hera
2|Hermes
2|Artemis
2|Dionysus||dionysos;bacchus
2|Hephaestus||hephaistos
2|Demeter
2|Persephone||kore
3|Hestia
3|Kronos||cronus;cronos
3|Gaia||gaea;ge
3|Uranus||ouranos
3|Eros
3|Nike|Nike (mythology)|nike
3|Pan|Pan (god)|pan
3|Helios
3|Selene
3|Eos
3|Nemesis|Nemesis (mythology)
3|Hecate||hekate
3|Rhea|Rhea (mythology)
3|Prometheus
3|Atlas|Atlas (mythology)
3|Thanatos
3|Hypnos
3|Tyche
3|Chaos|Chaos (cosmogony)
3|Asclepius||asklepios
4|Iris|Iris (mythology)
4|Hebe|Hebe (mythology)
4|Morpheus
4|Nyx
4|Erebus
4|Tartarus
4|Oceanus
4|Tethys|Tethys (mythology)
4|Hyperion|Hyperion (Titan)
4|Themis
4|Mnemosyne
4|Epimetheus
4|Leto
4|Metis|Metis (mythology)
4|Eris|Eris (mythology)
4|Harmonia
4|Triton|Triton (mythology)
4|Amphitrite
4|Pontus|Pontus (mythology)
4|Aeolus
4|Boreas|Boreas (god)
4|Zephyrus
4|Hymen|Hymen (god)|hymenaios
4|Priapus
4|Hygieia||hygeia
4|Plutus
4|Nereus
4|Proteus
4|Phobos|Phobos (mythology)
4|Deimos|Deimos (deity)
4|Ganymede|Ganymede (mythology)
5|Coeus
5|Crius
5|Iapetus
5|Phoebe|Phoebe (Titaness)
5|Theia
5|Dione|Dione (Titaness)
5|Styx
5|Thetis||thetis
5|Hemera
5|Aether|Aether (mythology)
5|Ananke
5|Chronos
5|Achlys
5|Momus
5|Hesperus
5|Eosphorus|Phosphorus (morning star)|phosphorus
5|Asteria
5|Astraea
5|Bia
5|Kratos|Kratos (mythology)
5|Zelus
5|Notus
5|Eurus
5|Glaucus
5|Palaemon
5|Ino|Ino (Greek mythology)|leucothea
5|Despoina
5|Enyo
5|Eileithyia
5|Pheme
5|Peitho
5|Hermaphroditus
5|Aristaeus
5|Charon
6|Pallas|Pallas (Titan)
6|Perses|Perses (Titan)
6|Astraeus
6|Clymene|Clymene (Oceanid)
6|Phorcys
6|Ceto
6|Thaumas
6|Eurybia
6|Ourea
6|Erinyes||furies
6|Moirai||fates
6|Horae||hours
6|Keres
6|Oizys
6|Geras
6|Apate
6|Philotes
6|Dolos
6|Penia
6|Aergia
6|Pothos
6|Himeros
6|Anteros
`,
nope:{
 'jupiter|juno|mars|venus|minerva|neptune|mercury|vulcan|diana|ceres|vesta|pluto':'That\'s the Roman name &mdash; give me the Greek one!',
 'hercules|heracles|perseus|achilles|odysseus|theseus':'A hero, not a god (well, mostly).',
 'medusa|cyclops|minotaur|hydra':'A monster, not a god.',
 'thor|odin|loki':'Wrong pantheon &mdash; that\'s Norse!'
}},

{id:'romangods', cat:'Myths & Legends', q:'Name a god or goddess of Roman religion', hint:'Use the Roman names',
list:`
1|Jupiter|Jupiter (god)|jove
1|Mars|Mars (mythology)
1|Venus|Venus (mythology)
1|Neptune|Neptune (mythology)
2|Juno|Juno (mythology)
2|Minerva
2|Mercury|Mercury (mythology)
2|Pluto|Pluto (mythology)|dis pater;dis
2|Apollo
2|Diana|Diana (mythology)
2|Cupid||amor
2|Bacchus||liber
2|Vulcan|Vulcan (mythology)
3|Ceres|Ceres (mythology)
3|Vesta|Vesta (mythology)
3|Janus
3|Saturn|Saturn (mythology)
3|Proserpina||proserpine
3|Aurora|Aurora (mythology)
3|Fortuna
3|Faunus
3|Sol|Sol (Roman mythology)|sol invictus
3|Luna|Luna (goddess)
3|Victoria|Victoria (mythology)
3|Bellona|Bellona (goddess)
3|Quirinus
3|Lares
3|Penates
3|Mithras|Mithraism|mithra
4|Ops
4|Terminus|Terminus (god)
4|Flora|Flora (mythology)
4|Pomona
4|Vertumnus
4|Portunus||portunus
4|Fauna|Fauna (deity)|bona dea
4|Aesculapius|Asclepius|asclepius
4|Somnus
4|Mors|Mors (mythology)
4|Orcus
4|Libertas
4|Concordia|Concordia (mythology)
4|Pax|Pax (goddess)
4|Spes
4|Fides|Fides (deity)
4|Pietas
4|Salus
4|Juventas
4|Silvanus|Silvanus (mythology)
4|Picus
4|Pales
4|Robigus
4|Consus
4|Lucina|Lucina (goddess)
4|Libitina
4|Feronia|Feronia (mythology)
4|Cybele|Cybele|magna mater
4|Isis
5|Vediovis
5|Summanus
5|Angerona
5|Carmenta
5|Egeria|Egeria (mythology)
5|Larunda
5|Mania|Mania (deity)
5|Volturnus
5|Fontus
5|Tiberinus
5|Anna Perenna
5|Laverna
5|Furrina
5|Nenia
5|Cardea
5|Mefitis
5|Necessitas
5|Discordia
5|Invidia
5|Trivia|Hecate|hecate
5|Genius|Genius (mythology)
5|Juturna
5|Nortia
5|Sancus
6|Volupta
6|Vacuna
6|Verminus
6|Cloacina
6|Sterquilinus
6|Fornax|Fornax (goddess)
6|Rumina
6|Potina
6|Edusa
6|Cunina
6|Vaticanus|Vaticanus (god)
`,
nope:{
 'zeus|hera|ares|aphrodite|athena|poseidon|hermes|hades|artemis|dionysus|hephaestus':'That\'s the Greek name &mdash; give me the Roman one!',
 'romulus|remus|aeneas':'A legendary founder &mdash; not a god (though Romulus was later worshipped as Quirinus!).',
 'caesar|augustus':'Deified after death &mdash; but not part of this pantheon dig.'
}},

{id:'egyptgods', cat:'Myths & Legends', q:'Name a god or goddess of ancient Egypt', hint:'From Ra to the minor household gods',
list:`
1|Ra||re;amun ra;amon ra
1|Anubis
1|Osiris
1|Isis
1|Horus
2|Set|Set (deity)|seth
2|Thoth
2|Bastet||bast
2|Amun||amon;amen
2|Hathor
2|Sekhmet
2|Ptah
2|Aten
3|Ma'at||maat
3|Nut|Nut (goddess)
3|Geb
3|Shu|Shu (Egyptian god)
3|Tefnut
3|Nephthys
3|Sobek
3|Khnum
3|Bes
3|Taweret||tawaret
3|Khonsu
3|Mut
3|Apep||apophis
3|Atum
3|Neith
3|Khepri
4|Wadjet
4|Nekhbet
4|Hapi|Hapi (Nile god)
4|Min|Min (god)
4|Montu
4|Serket||selket
4|Heka|Heka (god)
4|Seshat
4|Meretseger
4|Wepwawet
4|Anuket
4|Satis|Satet|satet
4|Hapi son of Horus|Four sons of Horus|four sons horus;imsety;qebehsenuef;duamutef
4|Nun|Nun (mythology)
4|Renenutet
4|Meskhenet
4|Ammit
4|Bennu
4|Apis|Apis (deity)|apis bull
4|Serapis
4|Imhotep|Imhotep|imhotep deified
4|Nefertem
4|Sopdet||sothis
4|Mafdet||mafdet
4|Anhur||onuris
4|Shezmu
5|Wosret
5|Pakhet
5|Menhit
5|Mehen
5|Aker|Aker (deity)
5|Kek|Kek (mythology)
5|Heh|Heh (god)
5|Naunet
5|Amunet
5|Hu|Hu (mythology)
5|Sia|Sia (god)
5|Iusaaset
5|Nehebkau
5|Andjety
5|Bat|Bat (goddess)
5|Ash|Ash (god)
5|Babi|Babi (mythology)
5|Dedun
5|Mandulis
5|Reshep||resheph
5|Qetesh
5|Astarte
5|Anat
6|Hedetet
6|Kebechet
6|Ihy||ihy
6|Tatenen
6|Sokar|Seker|seker
6|Khentiamentiu
6|Hemen
6|Wenut|Unut|unut
6|Werethekau
6|Hesat
6|Shesmetet||shesmetet
`,
nope:{
 'tutankhamun|ramesses|cleopatra|khufu|akhenaten':'A pharaoh &mdash; godlike, but not a god.',
 'sphinx':'A monument (and a creature) &mdash; not a god.',
 'zeus|odin|jupiter':'Wrong pantheon entirely.'
}},

{id:'norsegods', cat:'Myths & Legends', q:'Name a figure from Norse mythology', hint:'Gods, giants and creatures of the Norse myths',
list:`
1|Odin||woden;wotan;othinn
1|Thor||thunor;donar
1|Loki
2|Freyja||freya
2|Frigg||frigga
2|Baldr||balder;baldur
2|Heimdall||heimdallr
2|Týr||tyr;tiw
2|Freyr||frey;yngvi
2|Hel|Hel (mythological being)|hela
2|Fenrir||fenris;fenris wolf
2|Jörmungandr||jormungandr;midgard serpent;world serpent
3|Njörðr||njord;njordr
3|Sleipnir
3|Ymir
3|Sif
3|Bragi
3|Iðunn||idunn;idun
3|Skaði||skadi
3|Höðr||hodr;hod
3|Víðarr||vidar
3|Váli||vali
3|Ullr||ull;uller
3|Forseti
3|Mímir||mimir;mimer
3|Hugin and Munin|Huginn and Muninn|huginn;muninn;hugin;munin
3|Valkyries|Valkyrie|valkyrie;valkyries
3|Norns||norn;urd;verdandi;skuld
3|Surtr||surt
3|Ratatoskr||ratatosk
3|Nidhogg|Níðhöggr|nidhoggr
3|Yggdrasil
4|Sigyn
4|Hœnir||hoenir
4|Kvasir
4|Ægir||aegir
4|Rán||ran
4|Sól|Sól (Germanic mythology)|sol;sunna
4|Máni||mani
4|Nanna|Nanna (Norse deity)
4|Eir
4|Saga|Sága and Sökkvabekkr|saga
4|Gefjon||gefjun
4|Fulla
4|Gerðr||gerd
4|Thrym||thrymr
4|Útgarða-Loki||utgarda loki
4|Angrboða||angrboda
4|Hati and Sköll|Sköll|skoll;hati
4|Garmr||garm
4|Audhumla||audumla
4|Búri||buri
4|Borr||bor
4|Bestla
4|Vili and Vé||vili;ve
4|Magni
4|Móði||modi
4|Þrúðr||thrud
4|Hermóðr||hermod
4|Járnsaxa||jarnsaxa
4|Gullinbursti
4|Tanngrisnir and Tanngnjóstr||tanngrisnir;tanngnjostr
5|Lofn
5|Sjöfn||sjofn
5|Vár||var
5|Vör||vor
5|Syn|Syn (goddess)
5|Hlín||hlin
5|Snotra
5|Gná||gna
5|Hnoss
5|Gersemi
5|Nerthus
5|Jörð||jord
5|Rindr||rind
5|Gunnlöð||gunnlod
5|Suttungr||suttung
5|Hrungnir
5|Thiazi||thjazi
5|Aegir's daughters|Nine Daughters of Ægir|nine daughters
5|Dagr||dag
5|Nótt||nott;natt
5|Delling
5|Andhrímnir||andhrimnir
5|Heiðrún||heidrun
5|Eikþyrnir||eikthyrnir
5|Dvalinn
5|Brokkr and Eitri|Brokkr|brokkr;eitri;sindri
5|Andvari
5|Fáfnir||fafnir
5|Regin|Reginn|reginn
6|Mundilfari
6|Nörfi||narfi
6|Annar|Annar (mythology)
6|Gymir
6|Byggvir
6|Beyla
6|Hyrrokkin
6|Bölþorn||bolthorn
6|Vafþrúðnir||vafthrudnir
6|Hræsvelgr||hraesvelg
6|Hlóðyn||hlodyn
`,
nope:{
 'zeus|hercules|jupiter':'Wrong pantheon &mdash; that\'s Greek or Roman.',
 'ragnar|ragnar lodbrok|harald|leif erikson':'A (semi-)historical Viking &mdash; not a myth.',
 'valhalla|asgard|midgard':'A place, not a being &mdash; who lives there?'
}},

{id:'aztecgods', cat:'Myths & Legends', q:'Name a god of the Aztecs or the Maya', hint:'Mesoamerican deities',
list:`
1|Quetzalcoatl||feathered serpent
1|Huitzilopochtli
2|Tlaloc
2|Tezcatlipoca||smoking mirror
2|Kukulkan||kukulcan
2|Xipe Totec
2|Mictlantecuhtli
3|Chaac||chac
3|Itzamna
3|Ix Chel||ixchel
3|Coatlicue
3|Xochiquetzal
3|Tonatiuh
3|Chalchiuhtlicue
3|Xolotl
3|Ehecatl
3|Coyolxauhqui
3|Hunahpu and Xbalanque|Maya Hero Twins|hero twins;hunahpu;xbalanque
3|Ah Puch||ah puch;yum cimil
4|Mixcoatl
4|Itzpapalotl
4|Tlazolteotl
4|Mayahuel
4|Centeotl||cinteotl
4|Huehuecoyotl
4|Chicomecoatl
4|Ometeotl
4|Mictecacihuatl
4|Tlaltecuhtli
4|Xiuhtecuhtli
4|Camazotz
4|Kinich Ahau||kinich ahau
4|Yum Kaax||yum kaax
4|Huracan||hurakan
4|Tohil
4|Hun Hunahpu
4|Bolon Yokte
4|Maize god|Maya maize god|hun hunahpu maize
4|Xquic
4|Tepeyollotl
4|Tonacatecuhtli
4|Cihuacoatl
4|Tezcatzoncatl
5|Ixtab
5|K'awiil||kawiil;god k
5|Buluc Chabtan
5|Akan|Akan (Maya god)
5|Ek Chuaj||ek chuah
5|Gucumatz||qʼuqʼumatz;qukumatz
5|Vucub Caquix||seven macaw
5|Xmucane
5|Xpiyacoc
5|Ixchebelyax
5|Pauahtun
5|Bacab|Bacab|bacabs
5|Chantico
5|Atlacamani
5|Opochtli
5|Patecatl
5|Macuilxochitl
5|Xochipilli
5|Tepoztecatl
5|Teteoinnan
5|Toci
5|Ixtlilton
5|Xilonen
6|Atlaua
6|Amimitl
6|Tlahuizcalpantecuhtli
6|Itztlacoliuhqui
6|Nanahuatzin
6|Tecciztecatl
6|Camaxtli||camaxtli
`,
nope:{
 'montezuma|moctezuma|cuauhtemoc':'An Aztec emperor &mdash; human, not divine.',
 'inti|viracocha|pachamama':'That\'s Inca &mdash; wrong empire, but nice!'
}},

{id:'mesogods', cat:'Myths & Legends', q:'Name a god or goddess of ancient Mesopotamia', hint:'Sumerian, Akkadian, Babylonian and Assyrian',
list:`
1|Marduk
1|Ishtar||inanna
2|Enlil
2|Enki||ea
2|Tiamat
2|Anu||an
3|Shamash||utu
3|Sin|Sin (mythology)|nanna;suen
3|Nergal
3|Ereshkigal
3|Apsu||abzu
3|Ashur|Ashur (god)|assur
3|Nabu
3|Dumuzid||tammuz;dumuzi
3|Ninhursag||ninhursaga
3|Pazuzu
3|Lamashtu
3|Adad||ishkur;hadad
4|Ninurta
4|Kingu
4|Ninlil
4|Nammu
4|Nisaba
4|Gula|Gula (goddess)
4|Lahmu and Lahamu|Lahmu|lahmu;lahamu
4|Anshar
4|Kishar
4|Geshtinanna
4|Ningishzida
4|Nanshe
4|Ningal
4|Ninkasi
4|Dagan
4|Shala
4|Tishpak
4|Neti|Neti (god)
4|Namtar
4|Belet-Seri
4|Nusku
4|Gibil
4|Girra
5|Nintinugga
5|Ningirsu
5|Bau|Bau (goddess)
5|Kusu
5|Lugalbanda
5|Shara|Shara (god)
5|Zababa
5|Amurru|Amurru (god)
5|Sarpanit
5|Tashmetum
5|Ninsun
5|Uttu
5|Ninsar
5|Ninkurra
5|Lulal
5|Latarak
5|Mamitu
5|Erra|Erra (god)
6|Enbilulu
6|Emesh
6|Enten
6|Ninazu
6|Ninmah
6|Ki|Ki (goddess)
6|Ishum
6|Shullat and Hanish|Shullat|shullat;hanish
`,
nope:{
 'gilgamesh':'A legendary king &mdash; two-thirds divine, but not counted as a god here.',
 'baal':'A Canaanite god &mdash; next door, but not Mesopotamian.',
 'osiris|isis|ra':'Egyptian &mdash; wrong river valley!'
}},

{id:'troy', cat:'Myths & Legends', q:'Name a hero or figure of the Trojan War', hint:'Greeks, Trojans and the people caught between them',
list:`
1|Achilles
1|Hector
1|Odysseus||ulysses
1|Helen of Troy||helen
1|Paris|Paris (mythology)
2|Agamemnon
2|Menelaus
2|Priam
2|Patroclus
2|Ajax the Great||ajax;aias;telamonian ajax
2|Aeneas
2|Cassandra
3|Andromache
3|Hecuba
3|Nestor|Nestor (mythology)
3|Diomedes
3|Penthesilea
3|Neoptolemus||pyrrhus son achilles
3|Briseis
3|Iphigenia
3|Clytemnestra
3|Laocoön||laocoon
3|Calchas
3|Philoctetes
3|Troilus
3|Memnon|Memnon (mythology)
3|Sarpedon
3|Ajax the Lesser||lesser ajax
3|Chryseis
4|Deiphobus
4|Palamedes
4|Teucer
4|Idomeneus
4|Glaucus|Glaucus (son of Hippolochus)
4|Antenor|Antenor (mythology)
4|Polydamas
4|Pandarus
4|Rhesus|Rhesus of Thrace
4|Protesilaus
4|Sinon
4|Astyanax
4|Polyxena
4|Thersites
4|Machaon
4|Podalirius
4|Automedon
4|Phoenix|Phoenix (son of Amyntor)
4|Eurypylus
4|Anchises
4|Creusa|Creusa (wife of Aeneas)
4|Polydorus
4|Helenus
4|Dolon|Dolon (mythology)
5|Antilochus
5|Stentor
5|Epeius
5|Coroebus
5|Laodice
5|Oenone
5|Talthybius
5|Chryses
5|Euphorbus
5|Asteropaios||asteropaeus
5|Cycnus
5|Iphidamas
5|Mentor|Mentor (Greek myth)
5|Eurybates
5|Tecmessa
5|Medon
5|Agapenor
5|Thoas
6|Agelaus
6|Laodamia
6|Oileus
6|Peneleos
6|Menestheus
6|Elephenor
6|Tlepolemus
6|Nireus
6|Acamas
6|Archelochus
`,
nope:{
 'zeus|athena|apollo|aphrodite|hera|poseidon':'A god who meddled &mdash; this dig wants mortals and heroes.',
 'hercules|heracles|perseus|theseus|jason':'A Greek hero &mdash; but from the generation before Troy.',
 'brad pitt':'He played Achilles &mdash; does that count? (No.)'
}},

{id:'heroes', cat:'Myths & Legends', q:'Name a legendary hero', hint:'From myths, sagas and folk legends around the world',
list:`
1|Hercules||heracles;herakles
1|Achilles
1|King Arthur||arthur
1|Robin Hood
2|Odysseus||ulysses
2|Perseus
2|Theseus
2|Jason|Jason (mythology)
2|Beowulf
2|Gilgamesh
2|Hua Mulan||mulan
2|Sigurd||siegfried;sigurd fafnisbane
3|Cú Chulainn||cuchulainn;cu chulainn
3|William Tell
3|Sun Wukong||monkey king
3|Bellerophon
3|Aeneas
3|Hector
3|Atalanta
3|Finn McCool||fionn mac cumhaill;fionn
3|Rostam||rustam
3|Väinämöinen||vainamoinen
3|Maui|Māui (Māori mythology)|maui
3|Momotarō||momotaro;peach boy
3|Roland
3|El Cid||cid
3|Lancelot
3|Rama
3|Arjuna
4|Hiawatha
4|Ilya Muromets
4|Dobrynya Nikitich
4|Alyosha Popovich
4|Kintarō||kintaro
4|Yamato Takeru
4|Hou Yi
4|Yu the Great||yu great
4|Gesar||king gesar
4|Manas|Epic of Manas|manas
4|Sundiata Keita||sundiata;sunjata
4|Mwindo
4|Tristan
4|Gawain
4|Percival||parzival;perceval
4|Galahad
4|Holger Danske||ogier dane;ogier
4|Starkad||starkather
4|Hrólfr Kraki||hrolf kraki
4|Grettir the Strong||grettir
4|Egil Skallagrimsson||egil
4|Dietrich von Bern||dietrich bern
4|Wayland the Smith||weland;volund
4|Hereward the Wake||hereward
4|Bran the Blessed
4|Pwyll
4|Lemminkäinen||lemminkainen
4|Cadmus
4|Orpheus
4|Meleager
4|Pelops
4|Castor and Pollux||castor;pollux;dioscuri
5|Diarmuid Ua Duibhne||diarmuid
5|Oisín||oisin
5|Ferdiad
5|Culhwch
5|Taliesin
5|Sadko
5|Prince Igor
5|Marko Kraljević||marko kraljevic
5|Janosik|Juraj Jánošík|janosik
5|Toldi
5|Kalevipoeg
5|Lāčplēsis||lacplesis
5|Digenis Akritas
5|Koroglu||köroğlu;koroglu
5|Battal Gazi
5|Antar|Antarah ibn Shaddad|antarah;antar
5|Sohrab
5|Esfandiyar
5|Garshasp
5|Kamapuaa||kamapuaa
5|Tawhaki
5|Glooscap
5|Paul Bunyan
5|John Henry|John Henry (folklore)
5|Pecos Bill
6|Benkei
6|Urashima Tarō||urashima taro
6|Yoshitsune|Minamoto no Yoshitsune|minamoto yoshitsune
6|Ivan Tsarevich
6|Svyatogor
6|Volga Svyatoslavich
6|Mikula Selyaninovich||mikula
6|Peredur
6|Fergus mac Róich||fergus
6|Conall Cernach
6|Kullervo
`,
nope:{
 'superman|batman|spider man|luke skywalker|harry potter':'A modern fictional hero &mdash; this dig wants myths and legends.',
 'zeus|odin|thor':'A god, not a hero.',
 'napoleon|alexander great|joan arc':'A real historical figure &mdash; legendary, but real!'
}},

{id:'arthur', cat:'Myths & Legends', q:'Name a character from the legends of King Arthur', hint:'Knights, ladies, wizards and villains of Camelot',
list:`
1|King Arthur||arthur;arthur pendragon
1|Merlin
1|Lancelot||sir lancelot;lancelot du lac
1|Guinevere||gwenhwyfar;guenevere
2|Morgan le Fay||morgan;morgana
2|Mordred||modred
2|Gawain||gawaine;gwalchmai
2|Galahad
2|Percival||parzival;perceval;peredur
2|Lady of the Lake||nimue;viviane;vivien
2|Tristan||tristram;tristan isolde
2|Isolde||iseult;isolt
3|Uther Pendragon||uther
3|Igraine||ygraine
3|Kay|Sir Kay|kay
3|Bedivere||bedwyr
3|Elaine of Astolat||lady shalott;elaine
3|Gareth|Sir Gareth
3|Bors
3|Green Knight
3|Fisher King
3|Morgause
3|Pellinore
3|Lamorak
3|Ector|Sir Ector
4|Gaheris
4|Agravain
4|Yvain||owain;ywain
4|Erec|Erec and Enide|erec
4|Enide
4|Lot|King Lot
4|Lucan|Sir Lucan
4|Dagonet
4|Dinadan
4|Palamedes|Palamedes (Arthurian legend)
4|Lionel|Sir Lionel
4|Ector de Maris
4|Tor|Sir Tor
4|Elaine of Corbenic
4|Mark of Cornwall||king mark
4|Vortigern
4|Ambrosius Aurelianus
4|Galehaut
4|Brangaine||brangaine;brangwain
4|Sagramore
4|Accolon
4|Breunor||la cote male taile
4|Bertilak de Hautdesert||bertilak
5|Balin and Balan||balin;balan
5|Pelleas
5|Ettarre
5|Lynette
5|Lyonesse|Lyonesse|lyonors
5|Meleagant||meliagant
5|Turquine
5|Carados
5|Lohengrin
5|Elaine of Benoic||elaine benoic
5|Ban|King Ban
5|Bohort|King Bors
5|Leodegrance
5|Ragnelle|Dame Ragnelle
5|Gwenhwyfach||gwenhwyfach
5|Culhwch
5|Olwen
5|Cador
6|Brastias
6|Ulfius
6|Griflet
6|Safir
6|Segwarides
6|Clarissant
6|Dodinel
`,
nope:{
 'excalibur':'The sword! Now name a person.',
 'camelot|avalon':'A place &mdash; who lived there?',
 'robin hood|maid marian':'A different English legend &mdash; Sherwood, not Camelot.'
}}
);

/* Dug Up — more prompts: the medieval world and great empires */
PROMPT_DATA.push(
{id:'knights', cat:'Medieval', q:'Name a famous medieval knight or warrior', hint:'Real people of medieval Europe, c. 800&ndash;1500',
list:`
1|Richard the Lionheart|Richard I of England|richard lionheart;lionheart;richard 1
1|William Wallace||wallace;braveheart
1|El Cid||cid;rodrigo diaz de vivar;rodrigo diaz
1|Joan of Arc||jeanne darc;maid orleans;joan arc
2|William Marshal|William Marshal, 1st Earl of Pembroke|marshal
2|Godfrey of Bouillon||godfrey bouillon;godfrey
2|Edward the Black Prince||black prince;edward woodstock
2|Vlad the Impaler||vlad dracula;vlad 3;dracula;vlad tepes
2|Robert the Bruce||bruce;robert bruce;robert 1 scotland
3|Bertrand du Guesclin||du guesclin;guesclin
3|Jacques de Molay||molay
3|Baldwin IV of Jerusalem||baldwin 4;leper king
3|Bohemond I of Antioch||bohemond;bohemond taranto
3|Tancred, Prince of Galilee||tancred
3|Balian of Ibelin||balian
3|Henry Percy (Hotspur)|Henry Percy (Hotspur)|hotspur;henry percy
3|Ulrich von Liechtenstein||ulrich liechtenstein
3|Skanderbeg||gjergj kastrioti;george castriot
3|John Hunyadi||hunyadi;janos hunyadi
4|Raymond IV of Toulouse||raymond toulouse;raymond saint gilles
4|Raynald of Châtillon||reynald chatillon;raynald chatillon
4|Guy of Lusignan||guy lusignan
4|Raymond III of Tripoli||raymond tripoli
4|John Hawkwood||hawkwood
4|Götz von Berlichingen||berlichingen;gotz berlichingen;iron hand
4|Jan Žižka||zizka;jan zizka
4|James Douglas, Lord of Douglas||black douglas;james douglas
4|Pierre Terrail, seigneur de Bayard||bayard;chevalier bayard
4|Gilles de Rais||rais
4|Hugues de Payens||hugh payens;hugues payens
4|Owain Glyndŵr||owain glyndwr;owen glendower;glyndwr
4|Simon de Montfort, 6th Earl of Leicester||simon de montfort;montfort
4|Robert Guiscard||guiscard
4|John of Gaunt||gaunt
4|Zawisza the Black|Zawisza Czarny|zawisza czarny;zawisza
4|Sir John Chandos||john chandos;chandos
5|Geoffroi de Charny||charny
5|Jean II Le Maingre||boucicaut
5|Hermann von Salza||salza
5|Thomas Malory||malory
5|Roger de Flor||flor
5|Roger I of Sicily||roger 1 sicily
5|Tancred of Hauteville
5|Charles the Bold||charles bold
5|John Fastolf||fastolf
5|Jean de Joinville||joinville
5|Jacques de Lalaing||lalaing
5|William Longespée, 3rd Earl of Salisbury||william longespee
5|Gerard de Ridefort||ridefort
5|Robert de Sablé||sable
5|Jean de Brienne|John of Brienne|john brienne
5|Ulrich von Jungingen||jungingen
6|Suero de Quiñones||quinones;paso honroso
6|Thomas Erpingham||erpingham
6|Jean de Vienne (admiral)||jean de vienne
6|Arnaud de Cervole||cervole;archpriest
6|Walter Manny||manny
6|Konrad von Wallenrode||wallenrode
6|Bertrand de Born||born
`,
nope:{
 'lancelot|galahad|gawain|ivanhoe|don quixote|tirant':'A knight of fiction &mdash; this dig wants real ones.',
 'saladin':'The sultan who fought the crusaders &mdash; not a European knight.',
 'king arthur|arthur':'Legendary &mdash; try the Arthurian dig!'
}},

{id:'scots', cat:'Rulers', q:'Name a king or queen of Scots', hint:'From Kenneth MacAlpin to the Union of the Crowns (1603)', wf:'{} of Scotland',
list:`
1|Robert the Bruce|Robert the Bruce|robert bruce;bruce;robert 1
1|Mary, Queen of Scots||mary;mary stuart;mary queen scots
1|Macbeth|Macbeth, King of Scotland|macbeth
2|James VI|James VI and I|james 6;james 6 1
2|Kenneth MacAlpin||kenneth 1;kenneth macalpin;cinaed mac ailpin
2|Duncan I|*|duncan;duncan 1
2|Malcolm III|*|malcolm canmore;malcolm 3;canmore
2|David I|*|david 1
2|William the Lion||william 1;william lion
2|James IV|*|james 4
3|James I|*|james 1
3|James II|*|james 2
3|James III|*|james 3
3|James V|*|james 5
3|Alexander III|*|alexander 3
3|Alexander II|*|alexander 2
3|Robert II|*|robert 2
3|Robert III|*|robert 3
3|Malcolm IV|*|malcolm 4;malcolm maiden
3|David II|*|david 2
3|John Balliol||john balliol;balliol;toom tabard
3|Margaret, Maid of Norway||maid norway;margaret norway
3|Edgar|*|edgar
3|Alexander I|*|alexander 1
4|Malcolm II|*|malcolm 2
4|Donald III|*|donald bane;donald 3
4|Duncan II|*|duncan 2
4|Lulach||lulach simple
4|Constantine II|*|constantine 2
4|Edward Balliol||edward balliol
4|Kenneth II|*|kenneth 2
4|Kenneth III|*|kenneth 3
4|Malcolm I|*|malcolm 1
4|Indulf||ildulb
5|Donald I|*|donald 1
5|Donald II|*|donald 2
5|Constantine I|*|constantine 1
5|Áed|Áed of Scotland|aed
5|Giric||grig
5|Dub|Dub of Scotland|dub
5|Cuilén||cuilen
5|Amlaíb|Amlaíb of Scotland|amlaib
5|Constantine III|*|constantine 3
`,
nope:{
 'william wallace|wallace':'Guardian of Scotland and a national hero &mdash; but never king.',
 'elizabeth 1|elizabeth':'Queen of England, not Scotland.',
 'bonnie prince charlie|charles edward stuart|young pretender':'The Young Pretender &mdash; never crowned.',
 'rob roy':'An outlaw and folk hero &mdash; not a king.'
},
amb:{
 'james':'Which James? There were seven &mdash; add a number.',
 'malcolm':'Which Malcolm? Add a number.',
 'alexander':'Which Alexander? Add a number.',
 'david':'Which David? Add a number.',
 'robert':'Which Robert? Add a number (or say Robert the Bruce).',
 'kenneth':'Which Kenneth? Add a number.',
 'constantine':'Which Constantine? Add a number.',
 'donald':'Which Donald? Add a number.',
 'duncan':'Which Duncan? Add a number.'
}},

{id:'islamic', cat:'Art & Ideas', q:'Name a scholar of the medieval Islamic world', hint:'Scientists, philosophers, poets and travellers, c. 750&ndash;1500',
list:`
1|Avicenna||ibn sina
1|Al-Khwarizmi||khwarizmi;muhammad ibn musa al khwarizmi
1|Averroes||ibn rushd
1|Omar Khayyam||khayyam
2|Ibn Khaldun||khaldun
2|Al-Biruni||biruni
2|Rhazes|Abu Bakr al-Razi|al razi;razi
2|Alhazen|Ibn al-Haytham|ibn al haytham;al haytham;alhacen
2|Al-Farabi||farabi;alpharabius
2|Rumi||jalal al din rumi;mevlana
2|Ibn Battuta||battuta
2|Al-Ghazali||ghazali;algazel
3|Al-Kindi||kindi
3|Ismail al-Jazari||al jazari;jazari
3|Al-Zahrawi||abulcasis;zahrawi
3|Jabir ibn Hayyan||geber;jabir
3|Muhammad al-Idrisi||al idrisi;idrisi
3|Nasir al-Din al-Tusi||al tusi;tusi
3|Ibn al-Nafis||al nafis
3|Al-Battani||albategnius;battani
3|Thabit ibn Qurra||thabit
3|Ulugh Beg
3|Al-Tabari||tabari
3|Al-Masudi||masudi;mas'udi
3|Maimonides||rambam;moses maimonides
3|Ibn Arabi||ibn al arabi
3|Hafez||hafiz
3|Saadi Shirazi||saadi;sadi
3|Ferdowsi||firdausi;firdowsi
3|Al-Jahiz||jahiz
4|Banu Musa
4|Hunayn ibn Ishaq||hunayn;johannitius
4|Ibn Tufail||abubacer
4|Ibn Bajja||avempace
4|Abd al-Rahman al-Sufi||al sufi;azophi
4|Jamshid al-Kashi||al kashi
4|Ibn Zuhr||avenzoar
4|Ibn Yunus
4|Ibn al-Shatir
4|Abbas ibn Firnas||ibn firnas
4|Fatima al-Fihri||al fihri
4|Al-Muqaddasi||muqaddasi
4|Ibn Jubayr
4|Yaqut al-Hamawi||yaqut
4|Al-Khazini||khazini
4|Al-Karaji||karaji
4|Abu Kamil
4|Kamal al-Din al-Farisi||al farisi
4|Taqi al-Din Muhammad ibn Ma'ruf||taqi al din
4|Nizam al-Mulk
4|Ibn Hazm
4|Al-Zarqali||arzachel;zarqali
4|Sibawayh||sibawayhi
4|Nizami Ganjavi||nizami
4|Attar of Nishapur||attar
4|Jami
5|Abd al-Latif al-Baghdadi
5|Ibn al-Baitar
5|Ali Qushji||al qushji
5|Al-Samawal al-Maghribi||samawal
5|Al-Bitruji||alpetragius
5|Ibn Wahshiyya
5|Al-Khalil ibn Ahmad al-Farahidi||al khalil;farahidi
5|Al-Dinawari||dinawari
5|Maslama al-Majriti||al majriti
5|Ibn Qutaybah
5|Al-Mawardi||mawardi
5|Al-Uqlidisi||uqlidisi
5|Ibn Fadlan||ahmad ibn fadlan
5|Al-Maqrizi||maqrizi
5|Ibn Hawqal
5|Al-Istakhri||istakhri
5|Abu al-Wafa' Buzjani||abu al wafa
5|Al-Mahani
5|Ibn Sahl|Ibn Sahl (mathematician)
6|Mariam al-Asturlabi||al ijliya;mariam ijliya
6|Sutayta al-Mahamali||sutayta
6|Al-Kharaqi
6|Ibn al-Haim
6|Al-Qalasadi||qalasadi
6|Ibn al-Banna' al-Marrakushi||ibn al banna
`,
nope:{
 'saladin|harun al rashid|mehmed 2':'A ruler &mdash; try the rulers dig!',
 'aristotle|plato|galen':'A Greek whose work these scholars preserved &mdash; but not one of them.',
 'aladdin|sinbad|scheherazade':'A character from the Arabian Nights &mdash; fiction!'
}},

{id:'medwomen', cat:'Medieval', q:'Name a famous woman of the Middle Ages', hint:'Anywhere in the world, c. 500&ndash;1500',
list:`
1|Joan of Arc||jeanne darc;maid orleans
1|Eleanor of Aquitaine||eleanor aquitaine
2|Hildegard of Bingen||hildegard
2|Christine de Pizan||pizan;christine pisan
2|Empress Matilda||matilda;maud
2|Murasaki Shikibu||murasaki;lady murasaki
2|Wu Zetian||empress wu
2|Isabella I of Castile||isabella
2|Theodora|Theodora (wife of Justinian I)|empress theodora
3|Heloise||heloise abelard;héloïse
3|Isabella of France||she wolf france;isabella france
3|Catherine of Siena||catherine siena
3|Julian of Norwich||julian norwich
3|Clare of Assisi||saint clare
3|Anna Komnene||anna comnena;anna komnene
3|Æthelflæd||aethelflaed;ethelfleda;lady mercians
3|Emma of Normandy||emma
3|Tamar of Georgia||tamar
3|Blanche of Castile||blanche castile
3|Olga of Kiev||olga kiev;saint olga
3|Margaret I of Denmark||margaret 1;margrete
3|Birgitta of Sweden||bridget sweden;saint birgitta
3|Razia Sultana||razia
3|Sei Shōnagon||sei shonagon
3|Tomoe Gozen||tomoe
3|Jadwiga of Poland||jadwiga
3|Marie de France
3|Matilda of Tuscany||matilda tuscany
3|Lady Godiva||godiva
3|Margery Kempe||kempe
3|Margaret of Anjou||margaret anjou
3|Queen Seondeok of Silla||seondeok
4|Hrotsvitha||hrotsvit;roswitha
4|Trota of Salerno||trotula
4|Shajar al-Durr||shajar al durr
4|Khutulun
4|Sorghaghtani Beki||sorghaghtani
4|Agnès Sorel||agnes sorel
4|Isabeau of Bavaria||isabeau
4|Philippa of Hainault||philippa
4|Eleanor of Castile
4|Marguerite Porete||porete
4|Mechthild of Magdeburg||mechthild
4|Gertrude the Great
4|Radegund||radegunde
4|Brunhilda of Austrasia||brunhilda;brunhild
4|Fredegund
4|Theodelinda
4|Irene of Athens||irene
4|Zoe Porphyrogenita||zoe
4|Arwa al-Sulayhi
4|Sitt al-Mulk
4|Rabia of Basra||rabia basri;rabia
4|Lal Ded||lalleshwari
4|Akka Mahadevi
4|Jeanne de Clisson||lioness brittany
4|Saint Margaret of Scotland||margaret scotland
4|Melisende, Queen of Jerusalem||melisende
4|Sibylla, Queen of Jerusalem||sibylla
4|Caterina Sforza
4|Lucrezia Borgia
4|Mary of Burgundy
4|Margaret Beaufort
4|Elizabeth Woodville
4|Aud the Deep-Minded||aud
4|Sigrid the Haughty||sigrid storrada
5|Dhuoda
5|Hadewijch
5|Christina of Markyate
5|Gudrid Thorbjarnardóttir||gudrid
5|Freydís Eiríksdóttir||freydis
5|Catherine of Valois
5|Joan of Kent
5|Alice Perrers
5|Ermengarde of Narbonne||ermengarde
5|Isabella I of Jerusalem
5|Isabella d'Este||isabella este
5|Anne of Brittany
5|Margaret Paston
5|Æthelthryth||etheldreda;audrey
5|Hilda of Whitby||hild
5|Bertha of Kent
5|Adela of Normandy
5|Mahaut of Artois
5|Jacqueline, Countess of Hainaut||jacqueline hainaut
5|Toregene Khatun||toregene
5|Mandukhai Khatun||mandukhai
6|Marguerite d'Oingt
6|Hodierna of Jerusalem||hodierna
6|Ingeborg of Denmark, Queen of France||ingeborg
6|Gunhild of Wenden
6|Eupraxia of Kiev||eupraxia
6|Sophia of Minsk
`,
nope:{
 'guinevere|isolde|morgan le fay|maid marian':'Legend or fiction &mdash; this dig wants real women.',
 'elizabeth 1|catherine great|marie antoinette':'Brilliant &mdash; but after the Middle Ages.',
 'cleopatra|boudica':'Ancient &mdash; before the Middle Ages.'
}},

{id:'hansa', cat:'Places', q:'Name a member city of the Hanseatic League', hint:'Member towns and the great Kontor trading posts',
list:`
1|Lübeck||lubeck
1|Hamburg
1|Bergen
2|Bremen
2|Gdańsk||danzig;gdansk
2|Riga
2|Tallinn||reval
2|Visby
2|Veliky Novgorod||novgorod
2|London|Steelyard|steelyard;stalhof
2|Bruges||brugge
2|Cologne||koln;köln
3|Stralsund
3|Rostock
3|Wismar
3|Lüneburg||luneburg
3|Stockholm
3|Königsberg||konigsberg;kaliningrad
3|Elbląg||elbing;elblag
3|Toruń||thorn;torun
3|Kraków||krakow;cracow
3|Dortmund
3|Münster||munster
3|Szczecin||stettin
3|Greifswald
3|Tartu||dorpat
3|Groningen
3|Deventer
3|Kampen|Kampen, Overijssel
3|Zwolle
3|Braunschweig||brunswick
3|Magdeburg
4|Berlin
4|Kołobrzeg||kolberg;kolobrzeg
4|Anklam
4|Soest
4|Hildesheim
4|Goslar
4|Hanover||hannover
4|Pärnu||pernau;parnu
4|Wrocław||breslau;wroclaw
4|Halle|Halle (Saale)
4|Frankfurt (Oder)||frankfurt oder
4|Kalmar
4|Duisburg
4|Wesel
4|Nijmegen
4|Arnhem
4|Zutphen
4|Harderwijk
4|Hamelin||hameln
4|Göttingen||gottingen
4|Kiel
4|Stade
5|Elburg
5|Einbeck
5|Uelzen
5|Stendal
5|Salzwedel
5|Lemgo
5|Herford
5|Paderborn
5|Osnabrück||osnabruck
5|Minden
5|Brandenburg an der Havel||brandenburg
5|Buxtehude
5|Demmin
5|Słupsk||stolp;slupsk
5|Chełmno||kulm;chelmno
5|Braniewo||braunsberg
5|Viljandi||fellin
5|Cēsis||wenden;cesis
5|Turku||abo
5|Bolsward
6|Hasselt|Hasselt, Overijssel
6|Doesburg
6|Hattem
6|Tiel
6|Roermond
6|Venlo
6|Attendorn
6|Brilon
6|Medebach
6|Lippstadt
`,
nope:{
 'oslo':'Hansa merchants traded there &mdash; but Norway\'s Hanseatic hub was Bergen.',
 'copenhagen':'Denmark\'s capital was more often the League\'s rival!',
 'amsterdam':'A rising rival &mdash; never a member.',
 'venice|genoa':'A great trading republic &mdash; but Mediterranean, not Hanseatic.'
}},

{id:'khans', cat:'Empires', q:'Name a Mongol khan', hint:'Great Khans and rulers of the Mongol khanates',
list:`
1|Genghis Khan||genghis;chinggis;chinggis khan;temujin
1|Kublai Khan||kublai;khubilai
2|Ögedei Khan||ogedei;ogodei
2|Möngke Khan||mongke;mangu
2|Batu Khan||batu
2|Hulagu Khan||hulagu;hulegu
3|Güyük Khan||guyuk
3|Tolui
3|Chagatai Khan||chagatai;chaghatai
3|Jochi
3|Berke
3|Ghazan
3|Özbeg Khan||ozbeg;uzbeg khan
3|Tokhtamysh||toqtamish
3|Toghon Temür||toghon temur
3|Ariq Böke||ariq boke;arigh boke
3|Kaidu||qaidu
4|Arghun
4|Abaqa Khan||abaqa
4|Duwa
4|Öljaitü||oljeitu;oljaitu
4|Abu Sa'id Bahadur Khan||abu said
4|Temür Khan||temur khan;chengzong
4|Töregene Khatun||toregene
4|Dayan Khan
4|Altan Khan
4|Ligdan Khan||ligdan
4|Mandukhai Khatun||mandukhai
4|Toqta||tokhta
4|Jani Beg||janibeg
4|Möngke Temür||mongke temur
5|Oghul Qaimish
5|Esen Taishi||esen
5|Sartaq
5|Tekuder
5|Gaykhatu
5|Baydu
5|Kebek
5|Tarmashirin
5|Külüg Khan||khayishan;kulug
5|Ayurbarwada Buyantu Khan||ayurbarwada;renzong
5|Yesün Temür||yesun temur
5|Tugh Temür||tugh temur
5|Tini Beg
5|Berdi Beg
5|Biligtü Khan||biligtu
6|Rinchinbal Khan||rinchinbal
6|Gegeen Khan||shidebala
6|Uskhal Khan||togus temur
6|Elbeg Nigülesügchi Khan||elbeg
6|Taisun Khan||toghtoa bukha
6|Tode Mongke||tode mongke
`,
nope:{
 'timur|tamerlane':'A Turco-Mongol conqueror &mdash; but he ruled as emir, never taking the title of khan.',
 'attila':'King of the Huns &mdash; eight centuries earlier.',
 'babur':'Founder of the Mughal Empire &mdash; descended from Genghis, but no khan.'
}},

{id:'islamrulers', cat:'Empires', q:'Name a ruler of the medieval Islamic world', hint:'Caliphs, sultans, emirs and mansas, 632&ndash;1500',
list:`
1|Saladin||salah ad din;salahuddin
1|Harun al-Rashid||harun rashid;haroun al rashid
1|Mansa Musa||musa 1 mali;musa keita
1|Mehmed II||mehmed conqueror;mehmet 2;fatih
2|Abu Bakr
2|Umar||omar;umar ibn al khattab
2|Uthman||othman;uthman ibn affan
2|Ali|Ali ibn Abi Talib|ali ibn abi talib
2|Muawiya I||muawiyah;mu'awiya
2|Timur||tamerlane;tamburlaine
2|Baybars||baibars
2|Abd al-Rahman III||abd al rahman 3;abd ar rahman 3
2|Al-Ma'mun||mamun;al mamun
2|Mahmud of Ghazni||mahmud ghaznavi
2|Alp Arslan
3|Abd al-Malik ibn Marwan||abd al malik
3|Al-Mansur||al mansur abbasid
3|Al-Walid I||walid 1
3|Umar II
3|Abd al-Rahman I||abd al rahman 1
3|Hisham ibn Abd al-Malik||hisham
3|Al-Mu'tasim||mutasim
3|Al-Mutawakkil||mutawakkil
3|Al-Mu'izz li-Din Allah||al muizz
3|Al-Hakim bi-Amr Allah||al hakim
3|Nur ad-Din|Nur ad-Din (died 1174)|nur al din;nureddin
3|Imad al-Din Zengi||zengi;zangi
3|Malik-Shah I||malik shah
3|Tughril|Tughril Beg|tughril beg;toghrul
3|Qutuz
3|Qalawun||qalaun
3|Shajar al-Durr
3|Yusuf ibn Tashfin
3|Abu Yusuf Yaqub al-Mansur||yaqub al mansur
3|Muhammad XII of Granada||boabdil
3|Osman I||osman
3|Bayezid I||bayezid thunderbolt
3|Murad II
3|Ulugh Beg
3|Askia Muhammad I||askia muhammad;askia great
3|Sunni Ali
3|Iltutmish
3|Razia Sultana||razia
3|Alauddin Khalji||alauddin khilji
3|Muhammad bin Tughluq||muhammad tughlaq
3|Qutb ud-Din Aibak||qutb al din aibak;aibak
4|Abd al-Mu'min||abd al mumin
4|Ibn Tumart
4|Orhan
4|Murad I
4|Bayezid II
4|Shah Rukh|Shah Rukh (Timurid dynasty)|shahrukh
4|Firuz Shah Tughlaq||firuz shah
4|Muhammad of Ghor||muhammad ghori
4|Ahmad ibn Tulun||ibn tulun
4|Barquq
4|Qaitbay||qaytbay
4|Al-Mustansir Billah||al mustansir
4|Al-Musta'sim||mustasim
4|Muhammad I of Granada||ibn al ahmar
4|Sanjar|Ahmad Sanjar|ahmad sanjar
4|Al-Aziz Billah||al aziz
4|Yazid I
4|Marwan II
4|Abu al-Abbas al-Saffah||al saffah;saffah
4|Al-Mahdi
4|Al-Amin
4|Kafur|Abu al-Misk Kafur|kafur
4|Al-Nasir Muhammad||nasir muhammad
5|Yusuf I of Granada||yusuf 1
5|Abu al-Hasan Ali, Sultan of Granada||muley hacen
5|Al-Mu'tamid ibn Abbad||al mutamid
5|Uzun Hasan
5|Kilij Arslan I||kilij arslan
5|Kayqubad I||kaykubad
5|Muhammad II of Khwarazm||ala ad din muhammad
5|Jalal ad-Din Mingburnu||jalal al din
5|Al-Ashraf Khalil||khalil
5|Al-Kamil
5|Al-Adil I||al adil
5|Al-Muizz Aybak||aybak
5|Sultan Hasan|An-Nasir Hasan|sultan hasan
5|Faraj|An-Nasir Faraj|faraj
5|Al-Muhtadi
5|Al-Radi
6|Qara Yusuf
6|Jahan Shah|Jahan Shah (Qara Qoyunlu)
6|Toghrul III
6|Al-Zahir Ghazi
6|Ali ibn Yusuf
6|Mansa Uli||uli
6|Mansa Sulayman||sulayman
`,
nope:{
 'suleiman|suleiman magnificent':'A sultan &mdash; but 16th century, after this dig\'s cut-off.',
 'akbar|babur|aurangzeb':'A Mughal emperor &mdash; 16th century or later.',
 'avicenna|ibn khaldun|ibn battuta':'A scholar, not a ruler &mdash; try the scholars dig!'
}},

{id:'empires', cat:'Empires', q:'Name an empire', hint:'Any empire in history',
list:`
1|Roman Empire||roman;rome;romans
1|British Empire||british
1|Mongol Empire||mongol;mongols
1|Ottoman Empire||ottoman;ottomans
2|Persian Empire|Achaemenid Empire|persian;achaemenid;persia
2|Byzantine Empire||byzantine;byzantium;eastern roman empire
2|Holy Roman Empire||holy roman
2|Spanish Empire||spanish
2|Aztec Empire||aztec;aztecs
2|Inca Empire||inca;incas;tawantinsuyu
2|Russian Empire||russian;tsarist russia
2|Mughal Empire||mughal
2|Austro-Hungarian Empire|Austria-Hungary|austria hungary;austro hungarian
2|French Empire|First French Empire|napoleonic empire;french
3|Portuguese Empire||portuguese
3|Maurya Empire||maurya;mauryan
3|Gupta Empire||gupta
3|Mali Empire||mali
3|Songhai Empire||songhai
3|Ghana Empire||ghana;wagadu
3|Khmer Empire||khmer;angkor
3|Carthaginian Empire|Ancient Carthage|carthage
3|Assyrian Empire|Neo-Assyrian Empire|assyria;assyrian;neo assyrian
3|Babylonian Empire|Neo-Babylonian Empire|babylon;neo babylonian;babylonian
3|Akkadian Empire||akkad;akkadian
3|Hittite Empire|Hittites|hittite;hittites
3|Macedonian Empire|Macedonia (ancient kingdom)|alexanders empire;macedonian
3|Seleucid Empire||seleucid
3|Parthian Empire||parthia;parthian
3|Sasanian Empire||sassanid;sasanian;sassanian
3|Umayyad Caliphate||umayyad
3|Abbasid Caliphate||abbasid
3|Carolingian Empire||carolingian;frankish empire
3|German Empire||kaiserreich;second reich
3|Empire of Japan||japanese empire;imperial japan
3|Dutch Empire||dutch
3|Qing dynasty||qing empire;qing
3|Ethiopian Empire||abyssinia;ethiopian
3|Timurid Empire||timurid
3|Safavid Iran|Safavid Iran|safavid;safavid empire
3|Golden Horde
3|Han dynasty||han empire;han
4|Fatimid Caliphate||fatimid
4|Seljuk Empire||seljuk;great seljuk
4|Benin Empire|Kingdom of Benin|benin
4|Ashanti Empire||ashanti;asante
4|Zulu Kingdom|Zulu Kingdom|zulu
4|Kanem–Bornu Empire||kanem bornu;bornu
4|Kingdom of Aksum||aksum;axum;aksumite
4|Kushan Empire||kushan
4|Sikh Empire||sikh
4|Maratha Empire|Maratha Confederacy|maratha
4|Vijayanagara Empire||vijayanagara
4|Chola dynasty||chola
4|Srivijaya
4|Majapahit
4|Tibetan Empire||tibetan
4|Khazar Khaganate||khazar;khazars
4|Bulgarian Empire|First Bulgarian Empire|bulgarian
4|Serbian Empire||serbian
4|Angevin Empire||angevin
4|North Sea Empire||cnut empire
4|Swedish Empire||swedish;stormaktstiden
4|Empire of Brazil||brazilian empire
4|Mexican Empire|First Mexican Empire|mexican
4|Latin Empire||latin
4|Empire of Trebizond||trebizond
4|Empire of Nicaea||nicaea
4|Gallic Empire||gallic
4|Palmyrene Empire||palmyrene;palmyra
4|Ghaznavid dynasty||ghaznavid
4|Khwarazmian Empire||khwarazmian
4|Göktürk Khaganate|First Turkic Khaganate|gokturk;turkic khaganate
4|Xiongnu
4|Hunnic Empire||huns;hunnic
4|Wari Empire|Wari culture|wari
4|Almohad Caliphate||almohad
4|Almoravid dynasty||almoravid
4|Mamluk Sultanate||mamluk;mamluks
4|Ayyubid dynasty||ayyubid
4|Rashidun Caliphate||rashidun
4|Neo-Sumerian Empire|Third Dynasty of Ur|ur 3
4|Median Empire||medes;median
4|Ptolemaic Kingdom||ptolemaic
5|Kingdom of Mutapa||mutapa;monomotapa
5|Oyo Empire||oyo
5|Sokoto Caliphate||sokoto
5|Toucouleur Empire||toucouleur
5|Wassoulou Empire||wassoulou
5|Kong Empire||kong
5|Luba Empire||luba
5|Lunda Empire||lunda
5|Rozvi Empire||rozvi
5|Kingdom of Kongo||kongo
5|Comanche|Comancheria|comancheria
5|Durrani Empire||durrani
5|Uyghur Khaganate||uyghur
5|Avar Khaganate||avars
5|Rouran Khaganate||rouran
5|Gurjara-Pratihara||pratihara
5|Pala Empire||pala
5|Rashtrakuta dynasty||rashtrakuta
5|Kara-Khanid Khanate||karakhanid
5|Empire of Harsha|Pushyabhuti dynasty|harsha
5|Second Bulgarian Empire
5|Haitian Empire|First Empire of Haiti|haiti empire
5|Central African Empire
5|Korean Empire
5|Sui dynasty||sui
6|Chagatai Khanate||chagatai
6|Ilkhanate||ilkhanate
6|Northern Yuan
6|Empire of Thessalonica
6|Kingdom of Kush|Kingdom of Kush|kush
6|Elamite Empire|Elam|elam
6|Mitanni
6|Urartu
6|Jolof Empire||jolof
6|Kaabu
`,
nope:{
 'galactic empire|empire strikes back':'From a galaxy far, far away &mdash; not history.',
 'empire state building':'A building, not an empire.',
 'usa|united states|soviet union|ussr':'Debatable! But not officially an empire &mdash; not in this dig.'
}},

{id:'africa', cat:'Empires', q:'Name a historical African kingdom or empire', hint:'Any era before 1900',
list:`
1|Mali Empire||mali
1|Ancient Egypt||egypt
1|Ancient Carthage||carthage
1|Zulu Kingdom||zulu
2|Songhai Empire||songhai
2|Ghana Empire||ghana;wagadu
2|Kingdom of Kush||kush;nubia;kushite
2|Kingdom of Aksum||aksum;axum
2|Ethiopian Empire||abyssinia;ethiopia
2|Great Zimbabwe|Kingdom of Zimbabwe|zimbabwe;kingdom zimbabwe
2|Ashanti Empire||ashanti;asante
2|Kingdom of Benin||benin;benin empire
2|Kingdom of Kongo||kongo
3|Kanem–Bornu Empire||kanem;bornu;kanem bornu
3|Kingdom of Mutapa||mutapa;monomotapa
3|Kingdom of Dahomey||dahomey
3|Oyo Empire||oyo
3|Numidia
3|Mauretania
3|Buganda
3|Kingdom of Rwanda||rwanda
3|Kingdom of Ndongo||ndongo
3|Sokoto Caliphate||sokoto
3|Kilwa Sultanate||kilwa
3|Mapungubwe|Kingdom of Mapungubwe
3|Merina Kingdom||merina;madagascar kingdom
3|Kingdom of Makuria||makuria
3|Fatimid Caliphate||fatimid
3|Almoravid dynasty||almoravid
3|Almohad Caliphate||almohad
3|Mamluk Sultanate||mamluk
4|Kingdom of Matamba||matamba
4|Luba Empire||luba
4|Lunda Empire||lunda
4|Kuba Kingdom||kuba
4|Rozvi Empire||rozvi
4|Kingdom of Burundi||burundi
4|Bunyoro|Bunyoro-Kitara|kitara
4|Adal Sultanate||adal
4|Ajuran Sultanate||ajuran
4|Sultanate of Darfur||darfur
4|Funj Sultanate||funj;sennar
4|Wadai Empire||wadai
4|Kingdom of Nri||nri
4|Ife|Ife Empire|ile ife
4|Hausa Kingdoms||hausa;kano
4|Bamum Kingdom|Bamum Kingdom|bamum
4|Jolof Empire||jolof;wolof
4|Kaabu|Kaabu Empire
4|Mossi Kingdoms||mossi
4|Kong Empire||kong
4|Wassoulou Empire||wassoulou;samori
4|Toucouleur Empire||toucouleur;tukulor
4|Bamana Empire||bambara empire;segou
4|Kingdom of Alodia||alodia
4|Nobatia
4|Garamantes
4|Ptolemaic Kingdom||ptolemaic
4|Zirid dynasty||zirid
4|Marinid Sultanate||marinid
4|Hafsid dynasty||hafsid
4|Ayyubid dynasty||ayyubid
5|Kingdom of Kerma||kerma
5|Punt|Land of Punt|land punt
5|Dʿmt||dmt
5|Mthethwa Paramountcy||mthethwa
5|Ndwandwe
5|Ndebele Kingdom|Mthwakazi|mthwakazi;matabele
5|Kingdom of Lesotho|Basotho|basotho;lesotho
5|Gaza Empire||gaza empire
5|Kingdom of Loango||loango
5|Kingdom of Kakongo||kakongo
5|Tekrur||takrur
5|Kingdom of Sine||sine
5|Kingdom of Saloum||saloum
5|Kingdom of Tlemcen||tlemcen;zayyanid
5|Emirate of Harar||harar
5|Zagwe dynasty||zagwe
5|Kingdom of Semien||semien
6|Kingdom of Kasanje||kasanje
6|Dendi Kingdom||dendi
6|Kingdom of Igala|Igala Kingdom|igala
6|Kingdom of Nupe|Nupe Kingdom|nupe
`,
nope:{
 'wakanda':'Fictional &mdash; sadly.',
 'south africa|nigeria|kenya':'A modern country &mdash; which old kingdom was there before?'
}}
);

/* Dug Up — more prompts: Asia */
PROMPT_DATA.push(
{id:'samurai', cat:'Asia', q:'Name a famous samurai or Japanese warlord', hint:'Real warriors and daimyo, before 1877',
list:`
1|Oda Nobunaga||nobunaga
1|Miyamoto Musashi||musashi
1|Tokugawa Ieyasu||ieyasu
1|Toyotomi Hideyoshi||hideyoshi
2|Takeda Shingen||shingen
2|Uesugi Kenshin||kenshin
2|Date Masamune||masamune;one eyed dragon
2|Saigō Takamori||saigo takamori;saigo;last samurai
2|Minamoto no Yoshitsune||yoshitsune
2|Sanada Yukimura|Sanada Yukimura|sanada nobushige;yukimura
2|Hattori Hanzō||hattori hanzo;hanzo
2|Akechi Mitsuhide||mitsuhide
2|Yasuke
3|Sasaki Kojirō||kojiro;sasaki kojiro
3|Kusunoki Masashige||masashige
3|Minamoto no Yoritomo||yoritomo
3|Taira no Kiyomori||kiyomori
3|Honda Tadakatsu||tadakatsu
3|Ishida Mitsunari||mitsunari
3|Imagawa Yoshimoto||yoshimoto
3|Mōri Motonari||mori motonari;motonari
3|Shimazu Yoshihiro||shimazu
3|Katō Kiyomasa||kato kiyomasa;kiyomasa
3|Tomoe Gozen||tomoe
3|Ōishi Yoshio|Ōishi Kuranosuke|oishi;47 ronin;forty seven ronin
3|Benkei|Saitō Musashibō Benkei|benkei
3|Hōjō Sōun|Hōjō Sōun|hojo soun
3|Kuroda Kanbei||kanbei;kuroda yoshitaka
4|Takeda Katsuyori||katsuyori
4|Chōsokabe Motochika||chosokabe
4|Ii Naomasa||naomasa
4|Sakai Tadatsugu||tadatsugu
4|Maeda Toshiie||toshiie
4|Fukushima Masanori||masanori
4|Yamamoto Kansuke||kansuke
4|Naoe Kanetsugu||kanetsugu
4|Ōtani Yoshitsugu||otani yoshitsugu
4|Kobayakawa Hideaki||hideaki
4|Konishi Yukinaga||yukinaga
4|Shibata Katsuie||katsuie
4|Niwa Nagahide||nagahide
4|Hōjō Ujiyasu||hojo ujiyasu
4|Asai Nagamasa||nagamasa
4|Ashikaga Takauji||takauji
4|Nitta Yoshisada||yoshisada
4|Hōjō Tokimune||tokimune
4|Taira no Masakado||masakado
4|Minamoto no Yoshiie||yoshiie
4|Kumagai Naozane||naozane
4|Nasu no Yoichi||yoichi
4|Hijikata Toshizō||hijikata
4|Kondō Isami||kondo isami
4|Okita Sōji||okita soji
4|Sakamoto Ryōma||sakamoto ryoma;ryoma
5|Yagyū Munenori||munenori
5|Ittō Ittōsai||itto ittosai
5|Tsukahara Bokuden||bokuden
5|Kamiizumi Nobutsuna||nobutsuna
5|Torii Mototada||mototada
5|Sanada Masayuki||masayuki
5|Sanada Nobuyuki||nobuyuki
5|Gamō Ujisato||ujisato
5|Hosokawa Tadaoki||tadaoki
5|Hosokawa Gracia||gracia
5|Ōtomo Sōrin||sorin
5|Ryūzōji Takanobu||takanobu
5|Saitō Dōsan||dosan
5|Matsunaga Hisahide||hisahide
5|Miyoshi Nagayoshi||nagayoshi
5|Ōuchi Yoshitaka||yoshitaka
5|Murakami Yoshikiyo||yoshikiyo
5|Yamanaka Yukimori||yukimori
5|Katakura Kagetsuna||kagetsuna
5|Kawakami Gensai||gensai
6|Hōjō Tsunashige||tsunashige
6|Onna-musha Nakano Takeko|Nakano Takeko|nakano takeko
6|Yamauchi Kazutoyo||kazutoyo
6|Kuki Yoshitaka||kuki
6|Tachibana Ginchiyo||ginchiyo
6|Tachibana Muneshige||muneshige
6|Kani Saizō||saizo
`,
nope:{
 'jack|samurai jack|afro samurai|rurouni kenshin|himura kenshin':'Fiction &mdash; this dig wants real warriors.',
 'shogun|ninja':'A title or a type &mdash; name a person!',
 'tom cruise':'He was in The Last Samurai &mdash; but no.'
}},

{id:'india', cat:'Asia', q:'Name an Indian empire, kingdom or dynasty', hint:'Before 1858',
list:`
1|Mughal Empire||mughal;mughals
1|Maurya Empire||maurya;mauryan
1|Gupta Empire||gupta
2|Chola dynasty||chola;cholas
2|Maratha Empire|Maratha Confederacy|maratha;marathas
2|Delhi Sultanate||delhi sultanate
2|Vijayanagara Empire||vijayanagara;vijayanagar
2|Kushan Empire||kushan;kushans
2|Sikh Empire||sikh;khalsa raj
3|Satavahana dynasty||satavahana;andhra
3|Pala Empire||pala
3|Pallava dynasty||pallava
3|Chalukya dynasty||chalukya;chalukyas
3|Rashtrakuta dynasty||rashtrakuta
3|Pandya dynasty||pandya
3|Chera dynasty||chera
3|Nanda Empire||nanda
3|Shunga Empire||shunga;sunga
3|Pushyabhuti dynasty|Pushyabhuti dynasty|harsha;vardhana;empire harsha
3|Hoysala Empire||hoysala
3|Kakatiya dynasty||kakatiya
3|Bahmani Sultanate||bahmani
3|Lodi dynasty||lodi
3|Tughlaq dynasty||tughlaq
3|Khalji dynasty||khalji;khilji
3|Mamluk dynasty (Delhi)|Mamluk dynasty (Delhi)|slave dynasty
3|Mysore|Kingdom of Mysore|kingdom mysore
3|Hyderabad State||nizam;asaf jahi
4|Sayyid dynasty||sayyid
4|Sur Empire||sur;suri
4|Ahom kingdom||ahom
4|Mahameghavahana dynasty||kalinga;kharavela
4|Haryanka dynasty||haryanka;magadha
4|Shishunaga dynasty||shishunaga
4|Kanva dynasty||kanva
4|Gurjara-Pratihara||pratihara
4|Western Ganga dynasty||western ganga
4|Eastern Ganga dynasty||eastern ganga
4|Kadamba dynasty||kadamba
4|Kalachuri dynasty||kalachuri
4|Yadava dynasty|Seuna (Yadava) dynasty|yadava;seuna
4|Paramara dynasty||paramara
4|Chandela dynasty||chandela
4|Chahamanas of Shakambhari||chauhan;chahamana
4|Sena dynasty||sena
4|Vakataka dynasty||vakataka
4|Indo-Greek Kingdom||indo greek
4|Western Satraps||kshatrapa
4|Indo-Scythians||saka
4|Bengal Sultanate||bengal sultanate
4|Gujarat Sultanate||gujarat sultanate
4|Deccan sultanates||bijapur;golconda;ahmadnagar
4|Travancore|Kingdom of Travancore
4|Durrani Empire||durrani
5|Kosala
5|Kuru Kingdom||kuru
5|Panchala
5|Avanti|Avanti (India)
5|Vatsa
5|Licchavi|Licchavi (kingdom)
5|Mahajanapadas
5|Vishnukundina dynasty||vishnukundina
5|Ikshvaku dynasty|Andhra Ikshvaku|ikshvaku
5|Maitraka dynasty||maitraka
5|Kamarupa
5|Chutiya Kingdom||chutiya
5|Garhwal Kingdom||garhwal
5|Zamorin|Zamorin of Calicut|calicut
5|Reddy dynasty||reddy
5|Musunuri Nayakas||musunuri
5|Nayakas of Madurai|Madurai Nayak dynasty|madurai nayak
5|Thanjavur Maratha kingdom||thanjavur maratha
6|Kingdom of Cochin||cochin
6|Bhonsle|Bhonsle dynasty
6|Gaekwad dynasty||gaekwad
6|Holkar
6|Scindia||sindhia
`,
nope:{
 'british raj|east india company':'Colonial rule &mdash; this dig is about Indian dynasties.',
 'pakistan|bangladesh|india':'A modern country &mdash; name a historical empire.',
 'ashoka|akbar|chandragupta':'A ruler &mdash; now name his empire!'
}},

{id:'korea', cat:'Asia', q:'Name a Korean kingdom or dynasty', hint:'From Gojoseon to the Korean Empire',
list:`
1|Joseon||joseon dynasty;chosun;choson
1|Goryeo||koryo;goryeo dynasty
2|Silla
2|Goguryeo||koguryo
2|Baekje||paekche
2|Gojoseon||old joseon
2|Korean Empire||daehan empire
3|Unified Silla|Unified Silla|later silla
3|Balhae||bohai;parhae
3|Gaya confederacy|Gaya confederacy|gaya;kaya
3|Three Kingdoms of Korea||three kingdoms
3|Buyeo||puyo
4|Later Baekje||hubaekje
4|Taebong||later goguryeo
4|Okjeo
4|Dongye
4|Mahan confederacy||mahan
4|Jinhan confederacy||jinhan
4|Byeonhan confederacy||byeonhan
4|Gija Joseon||gija
4|Wiman Joseon||wiman
4|Tamna||jeju kingdom
5|Usan-guk||usan
5|Jin|Jin (Korean state)|jin state
5|Geumgwan Gaya||geumgwan
5|Daegaya
5|Ara Gaya||ara
5|Later Three Kingdoms
6|Hwando||
6|Yemaek
`,
nope:{
 'north korea|south korea':'A modern state &mdash; name a historical kingdom.',
 'han|tang|ming|qing':'That\'s a Chinese dynasty!',
 'edo|heian':'That\'s a Japanese period!'
}},

{id:'chphil', cat:'Asia', q:'Name a Chinese philosopher or thinker', hint:'Before 1900',
list:`
1|Confucius||kongzi;kong fuzi;kong qiu
1|Laozi||lao tzu;lao zi;laotze
1|Sun Tzu||sunzi;sun wu
2|Mencius||mengzi;meng zi
2|Zhuangzi||chuang tzu;zhuang zhou
2|Mozi||mo tzu;mo di
2|Han Feizi||han fei;han fei tzu
2|Xunzi||hsun tzu;xun kuang
3|Zhu Xi||chu hsi
3|Wang Yangming||wang shouren
3|Dong Zhongshu
3|Shang Yang
3|Li Si
3|Gongsun Long
3|Hui Shi||huizi
3|Yang Zhu
3|Liezi||lie yukou
3|Guan Zhong||guanzi
3|Huineng
3|Han Yu
3|Wang Chong
3|Kang Youwei
3|Zengzi
4|Zhou Dunyi
4|Cheng Yi|Cheng Yi (philosopher)
4|Cheng Hao
4|Zhang Zai
4|Lu Jiuyuan||lu xiangshan
4|Wang Fuzhi
4|Huang Zongxi
4|Gu Yanwu
4|Dai Zhen
4|Liang Qichao
4|Tan Sitong
4|Zisi||kong ji
4|Yan Hui
4|Zi Gong||zigong
4|Ji Kang||xi kang
4|Wang Bi
4|Guo Xiang
4|Ge Hong
4|Fazang
4|Xuanzang
4|Linji Yixuan||linji
4|Shen Buhai
4|Shen Dao
4|Zou Yan
4|Xu Xing
4|Deng Xi
5|Li Zhi|Li Zhi (philosopher)
5|Yan Yuan|Yan Yuan (philosopher)
5|Zhang Xuecheng
5|Shao Yong
5|Chen Liang
5|Ye Shi
5|Zhan Ruoshui
5|Liu Zongzhou
5|Fang Yizhi
5|Lü Buwei||lu buwei
5|Yang Xiong|Yang Xiong (author)
5|Huan Tan
5|Jia Yi
5|Liu An
5|Kumarajiva
5|Sengzhao
5|Zhiyi
5|Daoan
`,
nope:{
 'buddha|siddhartha':'Born in India &mdash; though Buddhism shaped Chinese thought enormously.',
 'mao|mao zedong':'A 20th-century political leader &mdash; outside this dig.',
 'plato|socrates|aristotle':'Wrong civilization &mdash; that\'s Greece!'
}},

{id:'seasia', cat:'Asia', q:'Name a historical kingdom or empire of Southeast Asia', hint:'Before 1900',
list:`
1|Khmer Empire||khmer;angkor;kambuja
2|Srivijaya
2|Majapahit
2|Ayutthaya Kingdom||ayutthaya;siam
2|Sukhothai Kingdom||sukhothai
2|Pagan Kingdom||pagan;bagan
2|Champa
2|Đại Việt||dai viet
3|Funan
3|Lan Xang||lan xang;lane xang
3|Lan Na||lanna
3|Mataram Sultanate||mataram
3|Singhasari
3|Malacca Sultanate||malacca;melaka
3|Bruneian Empire||brunei;brunei sultanate
3|Konbaung dynasty||konbaung;alaungpaya
3|Taungoo dynasty||toungoo;taungoo
3|Rattanakosin Kingdom||rattanakosin;bangkok kingdom
3|Nguyễn dynasty||nguyen
3|Lê dynasty||le dynasty;later le
3|Trần dynasty||tran
3|Lý dynasty||ly dynasty
3|Chenla
3|Aceh Sultanate||aceh
3|Sultanate of Sulu||sulu
4|Kediri Kingdom||kediri
4|Tarumanagara
4|Pyu city-states||pyu
4|Hanthawaddy Kingdom||hanthawaddy;pegu
4|Mrauk U Kingdom||arakan;mrauk u
4|Ternate Sultanate||ternate
4|Tidore Sultanate||tidore
4|Sultanate of Maguindanao||maguindanao
4|Demak Sultanate||demak
4|Banten Sultanate||banten
4|Gowa Sultanate||gowa;makassar
4|Medang Kingdom||medang;mataram kingdom
4|Sailendra dynasty||sailendra
4|Thonburi Kingdom||thonburi
4|Ava Kingdom||ava;inwa
4|Mon kingdoms|Mon kingdoms|mon
4|Dvaravati
4|Tambralinga
4|Langkasuka
4|Kingdom of Tondo||tondo
4|Rajahnate of Cebu||cebu
4|Sultanate of Johor||johor
4|Tây Sơn dynasty||tay son
4|Hồ dynasty||ho dynasty
4|Mạc dynasty||mac dynasty
5|Kingdom of Sunda||sunda
5|Galuh Kingdom||galuh
5|Pajajaran||pakuan pajajaran
5|Kalingga Kingdom||kalingga;holing
5|Kutai
5|Kingdom of Champasak||champasak
5|Kingdom of Luang Prabang||luang prabang
5|Kingdom of Vientiane||vientiane kingdom
5|Pattani Kingdom||pattani
5|Kedah Sultanate||kedah
5|Ma-i
5|Rajahnate of Butuan||butuan
5|Sultanate of Lanao||lanao
5|Bone State|Bone State|bone
5|Kingdom of Bali|Bali Kingdom|bali
5|Kingdom of Kahuripan||kahuripan
6|Đinh dynasty||dinh dynasty
6|Early Lê dynasty||early le
6|Thaton Kingdom||thaton
6|Kingdom of Sri Ksetra|Sri Ksetra Kingdom|sri ksetra
`,
nope:{
 'vietnam|thailand|indonesia|myanmar|cambodia':'A modern country &mdash; name a historical kingdom.',
 'angkor wat':'The temple! Now name the empire that built it.'
}},

{id:'koreanpeople', cat:'Asia', q:'Name a famous figure from Korean history', hint:'Before 1950',
list:`
1|King Sejong the Great|Sejong the Great|sejong;king sejong
1|Yi Sun-sin||yi sun shin;admiral yi
2|Gwanggaeto the Great||gwanggaeto
2|Queen Seondeok of Silla||seondeok
2|Jumong|Dongmyeong of Goguryeo|dongmyeong;jumong
2|Kim Yu-sin||kim yusin
2|Empress Myeongseong||queen min;myeongseong
2|Yu Gwan-sun||yu gwansun
2|Ahn Jung-geun||an jung geun
2|Kim Gu
3|Wang Geon||taejo goryeo
3|Taejo of Joseon||yi seong gye;taejo joseon
3|Jang Bogo
3|Jeong Yak-yong||dasan
3|Heo Jun
3|Shin Saimdang||sin saimdang
3|Yi Hwang||toegye
3|Yi I||yulgok
3|Heungseon Daewongun||daewongun
3|Gojong of Korea||gojong;emperor gojong
3|Sunjong of Korea||sunjong
3|Eulji Mundeok
3|Yeon Gaesomun
3|Gyebaek
3|Jang Yeong-sil||jang yeongsil
3|Jeong Mong-ju||jeong mongju
3|Taejong of Joseon||taejong;yi bang won
3|Sejo of Joseon||sejo
3|Yeongjo of Joseon||yeongjo
3|Jeongjo of Joseon||jeongjo
3|Crown Prince Sado||sado
3|Hwang Jini
3|Seo Jae-pil||philip jaisohn
3|Syngman Rhee||rhee
3|Dosan Ahn Chang-ho||ahn chang ho
4|Wonhyo
4|Choe Chiwon
4|Uisang
4|Jangsu of Goguryeo||jangsu
4|Geunchogo of Baekje||geunchogo
4|Muryeong of Baekje||muryeong
4|Jinheung of Silla||jinheung
4|Munmu of Silla||munmu
4|Gang Gam-chan||gang gamchan
4|Seo Hui
4|Kim Busik
4|Il-yeon||iryeon
4|Choe Yeong
4|Gwak Jae-u||gwak jaeu
4|Kim Jeong-ho||kim jeongho
4|Kim Hong-do||kim hongdo;danwon
4|Sin Yun-bok||hyewon
4|Heo Nanseolheon||heo nanseolheon
4|Heo Gyun||heo gyun
4|Choe Je-u||choe jeu
4|Jeon Bong-jun||jeon bongjun
4|Yun Bong-gil||yun bonggil
4|Lee Bong-chang||lee bongchang
4|Han Yong-un
4|Yi Sang|Yi Sang (writer)
4|Na Hye-sok||na hyeseok
5|Seol Chong
5|Gim Jeong-hui||chusa;kim jeong hui
5|Park Ji-won||park jiwon
5|Song Si-yeol
5|Jo Gwang-jo
5|Hwang Hui
5|Maeng Sa-seong
5|Kim Si-seup||kim siseup
5|Jeong Do-jeon||jeong dojeon
5|Gwon Yul
5|Seosan Daesa|Hyujeong|hyujeong
5|Nongae
5|Queen Inhyeon||inhyeon
5|Jang Hui-bin||jang huibin
5|Lady Hyegyeong||hyegyeong
`,
nope:{
 'kim jong un|kim il sung|park chung hee':'20th-century or modern politics &mdash; outside this dig.',
 'genghis khan|kublai khan':'Mongol &mdash; they invaded Korea, but aren\'t Korean.'
}},

{id:'chinapeople', cat:'Asia', q:'Name a famous person from imperial China', hint:'Not an emperor &mdash; generals, poets, scholars, explorers&hellip; 221 BC&ndash;1912',
list:`
1|Zheng He||cheng ho
1|Cao Cao
1|Zhuge Liang||kongming
1|Li Bai||li po;li bo
2|Guan Yu
2|Liu Bei
2|Du Fu||tu fu
2|Sima Qian||ssu ma chien
2|Yang Guifei
2|Lin Zexu||lin tse hsu
2|Sun Quan
2|Xiang Yu
3|Lü Bu||lu bu
3|Zhou Yu
3|Zhao Yun||zilong
3|Zhang Fei
3|Han Xin
3|Cai Lun||tsai lun
3|Zhang Qian
3|Zhang Heng
3|Hua Tuo
3|Ban Zhao
3|Wang Xizhi
3|Su Shi||su dongpo
3|Bai Juyi||po chu i
3|Li Qingzhao
3|Yue Fei
3|Wen Tianxiang
3|Hai Rui
3|Shen Kuo
3|Bi Sheng
3|Zu Chongzhi
3|Xuanzang||hsuan tsang
3|Faxian||fa hsien
3|Wang Anshi
3|Sima Guang
3|Ouyang Xiu
3|Zeng Guofan
3|Li Hongzhang
3|Hong Xiuquan
3|Qiu Jin
3|Sun Yat-sen||sun yatsen;sun zhongshan
4|Diaochan||diao chan
4|Huang Zhong
4|Ma Chao
4|Sima Yi
4|Lu Xun|Lu Xun (Three Kingdoms)|lu xun general
4|Xiahou Dun
4|Dong Zhuo
4|Yuan Shao
4|Lu Su
4|Jiang Wei
4|Meng Tian
4|Bai Qi
4|Wei Qing
4|Huo Qubing
4|Ban Chao
4|Ma Yuan|Ma Yuan (Han dynasty)
4|Shangguan Wan'er
4|Di Renjie
4|Guo Ziyi
4|An Lushan
4|Wang Wei|Wang Wei (Tang dynasty)
4|Han Yu
4|Liu Zongyuan
4|Wang Zhaojun
4|Xi Shi
4|Lady Dai||xin zhui
4|Zhang Zhongjing
4|Sun Simiao
4|Li Shizhen
4|Song Yingxing
4|Xu Guangqi
4|Matteo Ricci
4|Qi Jiguang
4|Yuan Chonghuan
4|Wu Sangui
4|Koxinga||zheng chenggong
4|Heshen
4|Cao Xueqin
4|Wu Cheng'en||wu chengen
4|Luo Guanzhong
4|Shi Nai'an||shi naian
4|Pu Songling
4|Zhang Zeduan
4|Gu Kaizhi
4|Wu Daozi
4|Guo Shoujing
4|Shen Zhou
4|Wen Zhengming
4|Tang Yin
4|Dong Qichang
5|Fan Zhongyan
5|Kou Zhun
5|Bao Zheng||judge bao
5|Liang Hongyu
5|Mu Guiying
5|Han Shizhong
5|Qin Hui
5|Cai Jing
5|Wang Yangming||wang yangming
5|Xu Xiake
5|Zheng Qiao
5|Jia Sidao
5|Liu Bowen||liu ji
5|Yu Qian
5|Zhang Juzheng
5|Wei Zhongxian
5|Ji Xiaolan||ji yun
5|Zuo Zongtang
5|Kang Youwei
5|Tan Sitong
5|Rong Hong||yung wing
`,
nope:{
 'qin shi huang|kangxi|qianlong|puyi|wu zetian|kublai khan':'An emperor or empress &mdash; try the emperors dig!',
 'confucius|laozi|sun tzu|mencius':'Before the imperial era began in 221 BC.',
 'mulan|hua mulan|sun wukong|monkey king':'A figure of legend or fiction.',
 'mao|mao zedong|deng xiaoping':'After the empire ended in 1912.'
}},

{id:'indiapeople', cat:'Asia', q:'Name a famous figure from ancient or medieval India', hint:'Before 1600 &mdash; rulers, scholars, poets and sages',
list:`
1|Ashoka||asoka;ashoka great
1|Chandragupta Maurya||chandragupta;sandrokottos
1|Gautama Buddha||buddha;siddhartha;siddhartha gautama
2|Chanakya||kautilya;vishnugupta
2|Akbar
2|Kalidasa
2|Aryabhata
2|Samudragupta
2|Porus
2|Mahavira
2|Prithviraj Chauhan||prithviraj
3|Chandragupta II||vikramaditya
3|Bindusara
3|Harsha|Harsha (emperor)|harshavardhana
3|Kanishka
3|Pulakeshin II||pulakesin
3|Rajaraja I||rajaraja chola
3|Rajendra I||rajendra chola
3|Krishnadevaraya
3|Brahmagupta
3|Panini
3|Sushruta
3|Charaka
3|Varahamihira
3|Bhaskara II||bhaskaracharya
3|Thiruvalluvar||tiruvalluvar
3|Adi Shankaracharya||shankara;adi shankara
3|Nagarjuna
3|Kabir
3|Guru Nanak||nanak
3|Mirabai
3|Tulsidas
3|Rani Durgavati||durgavati
3|Rana Sanga
3|Maharana Pratap||rana pratap
3|Babur
3|Alauddin Khalji||alauddin khilji
3|Razia Sultana||razia
3|Amir Khusrau||amir khusro
4|Bimbisara
4|Ajatashatru
4|Mahapadma Nanda||mahapadma
4|Pushyamitra Shunga
4|Kharavela
4|Gautamiputra Satakarni
4|Rudradaman I||rudradaman
4|Menander I||milinda
4|Skandagupta
4|Kumaragupta I||kumaragupta
4|Mihirakula
4|Yashodharman
4|Shashanka
4|Dharmapala|Dharmapala (Pala dynasty)
4|Devapala|Devapala (Pala dynasty)
4|Amoghavarsha
4|Mahendravarman I||mahendravarman
4|Narasimhavarman I||narasimhavarman
4|Kulottunga I||kulottunga
4|Bhoja
4|Vishnuvardhana
4|Ramanuja
4|Madhvacharya||madhva
4|Basava||basavanna
4|Jayadeva
4|Bana|Banabhatta|banabhatta
4|Bhavabhuti
4|Kalhana
4|Valmiki
4|Vyasa
4|Patanjali
4|Vatsyayana
4|Madhava of Sangamagrama||madhava
4|Lalitaditya Muktapida||lalitaditya
4|Muhammad bin Tughluq
4|Ibn Battuta
4|Hemu|Hem Chandra Vikramaditya
4|Chand Bardai
4|Sher Shah Suri||sher shah
5|Megasthenes
5|Bhadrabahu
5|Mahendra|Mahinda (Buddhist monk)|mahinda
5|Sanghamitra
5|Gargi Vachaknavi||gargi
5|Maitreyi
5|Lilavati|Lilavati
5|Khana|Khana (poet)
5|Andal
5|Karaikal Ammaiyar
5|Avvaiyar
5|Ilango Adigal
5|Kamban
5|Pampa|Adikavi Pampa
5|Annamacharya
5|Purandara Dasa
5|Vidyaranya
5|Sayana
5|Rani Rudrama Devi||rudrama devi
5|Ganapati|Ganapati (Kakatiya dynasty)
`,
nope:{
 'gandhi|mahatma gandhi|nehru|subhas chandra bose':'A modern figure &mdash; after this dig\'s cut-off.',
 'rama|krishna|shiva|vishnu|ganesha|hanuman':'A figure of sacred story, not of history &mdash; outside this dig.',
 'alexander great':'He invaded India &mdash; but he was Macedonian.'
}}
);

/* Dug Up — more prompts: wars and battles */
PROMPT_DATA.push(
{id:'acw', cat:'Wars & Battles', q:'Name a battle of the American Civil War', hint:'1861&ndash;1865',
list:`
1|Battle of Gettysburg||gettysburg
1|Battle of Fort Sumter||fort sumter;sumter
1|Battle of Antietam||antietam;sharpsburg
1|First Battle of Bull Run||bull run;first manassas;manassas
2|Battle of Shiloh||shiloh;pittsburg landing
2|Siege of Vicksburg||vicksburg
2|Battle of Fredericksburg||fredericksburg
2|Battle of Chancellorsville||chancellorsville
2|Battle of Appomattox Court House||appomattox
2|Atlanta campaign||atlanta;battle atlanta
2|Sherman's March to the Sea||march sea;shermans march
2|Second Battle of Bull Run||second bull run;second manassas
3|Battle of Chickamauga||chickamauga
3|Battle of the Wilderness||wilderness
3|Battle of Spotsylvania Court House||spotsylvania
3|Battle of Cold Harbor||cold harbor
3|Siege of Petersburg||petersburg
3|Battle of Hampton Roads||hampton roads;monitor merrimack;monitor virginia
3|Seven Days Battles||seven days
3|Battle of Franklin|Battle of Franklin (1864)|franklin
3|Battle of Nashville||nashville
3|Chattanooga campaign||chattanooga
3|Battle of Stones River||stones river;murfreesboro
3|Battle of Mobile Bay||mobile bay
3|Battle of Fort Donelson||fort donelson
3|Battle of Pea Ridge||pea ridge;elkhorn tavern
3|Battle of Wilson's Creek||wilsons creek
3|Valley campaign|Jackson's Valley campaign|shenandoah valley;valley campaign
3|Siege of Port Hudson||port hudson
3|Second Battle of Fort Wagner||fort wagner
3|Battle of Kennesaw Mountain||kennesaw mountain
3|Capture of New Orleans||new orleans
3|Peninsula campaign||peninsula
4|Battle of Brandy Station||brandy station
4|Battle of Perryville||perryville
4|Battle of Cedar Creek||cedar creek
4|Battle of Gaines' Mill||gaines mill
4|Battle of Malvern Hill||malvern hill
4|Battle of Seven Pines||seven pines;fair oaks
4|Battle of Champion Hill||champion hill
4|Battle of the Crater||crater
4|Battle of Five Forks||five forks
4|Battle of Sailor's Creek||saylers creek;sailors creek
4|Battle of Monocacy||monocacy
4|Battle of Glorieta Pass||glorieta pass
4|Battle of Ball's Bluff||balls bluff
4|Battle of Fort Pillow||fort pillow
4|Battle of Olustee||olustee
4|Battle of Mansfield||mansfield;sabine crossroads
4|Battle of Westport||westport
4|Battle of Cedar Mountain||cedar mountain
4|Battle of Harpers Ferry||harpers ferry
4|Battle of South Mountain||south mountain
4|Battle of Lookout Mountain||lookout mountain
4|Battle of Missionary Ridge||missionary ridge
4|Battle of Resaca||resaca
4|Battle of Peachtree Creek||peachtree creek
4|Battle of Bentonville||bentonville
4|Second Battle of Fort Fisher||fort fisher
4|Battle of Fort Henry||fort henry
4|Battle of Brice's Crossroads||brices crossroads
5|Battle of Fort Stedman||fort stedman
5|Battle of Spring Hill||spring hill
5|Battle of Mill Springs||mill springs
5|Second Battle of Corinth||corinth
5|Battle of Iuka||iuka
5|Battle of Prairie Grove||prairie grove
5|Battle of Valverde||valverde
5|Battle of Picacho Pass||picacho pass
5|Battle of Island Number Ten||island number ten;island no 10
5|First Battle of Memphis||memphis
5|Battle of Galveston||galveston
5|Second Battle of Sabine Pass||sabine pass
5|Battle of Natural Bridge||natural bridge
5|Battle of Palmito Ranch||palmito ranch
5|Battle of Big Bethel||big bethel
5|Battle of Chantilly||chantilly;ox hill
5|Battle of Jonesborough||jonesborough;jonesboro
5|Battle of Cherbourg (1864)|Battle of Cherbourg (1864)|cherbourg;alabama kearsarge
5|Battle of Philippi|Battle of Philippi (1861)|philippi
5|Battle of Rich Mountain||rich mountain
6|Battle of Honey Springs||honey springs
6|Battle of Baxter Springs||baxter springs
6|Battle of New Market||new market
6|Battle of Trevilian Station||trevilian station
6|Battle of Hatcher's Run||hatchers run
6|Battle of Fort Blakeley||fort blakeley
`,
nope:{
 'lexington concord|bunker hill|yorktown|saratoga':'That\'s the American Revolution &mdash; about 85 years earlier.',
 'alamo|san jacinto':'The Texas Revolution (1836).',
 'little bighorn|wounded knee':'After the Civil War &mdash; the American Indian Wars.',
 'waterloo|somme':'Wrong war, wrong continent!'
}},

{id:'ww1', cat:'Wars & Battles', q:'Name a battle or campaign of World War I', hint:'1914&ndash;1918, any front',
list:`
1|Battle of the Somme||somme
1|Battle of Verdun||verdun
1|Gallipoli campaign||gallipoli;dardanelles
1|First Battle of the Marne||marne;first marne
2|Battle of Passchendaele||passchendaele;third ypres
2|Battle of Jutland||jutland;skagerrak
2|Battle of Tannenberg||tannenberg
2|First Battle of Ypres||ypres;first ypres;wipers
2|Battle of Vimy Ridge||vimy ridge;vimy
2|Battle of Cambrai (1917)|Battle of Cambrai (1917)|cambrai
2|Battle of Amiens (1918)|Battle of Amiens (1918)|amiens
2|Hundred Days Offensive||hundred days
2|German spring offensive||spring offensive;kaiserschlacht;ludendorff offensive;operation michael
2|Brusilov offensive||brusilov
3|Battle of Caporetto||caporetto;kobarid
3|Battles of the Isonzo||isonzo
3|Battle of Arras (1917)|Battle of Arras (1917)|arras
3|Battle of Loos||loos
3|Battle of Mons||mons
3|Battle of the Frontiers||frontiers
3|Battle of Messines (1917)|Battle of Messines (1917)|messines
3|Second Battle of the Marne||second marne
3|Meuse–Argonne offensive||meuse argonne
3|Battle of Belleau Wood||belleau wood
3|Gorlice–Tarnów offensive||gorlice tarnow
3|First Battle of the Masurian Lakes||masurian lakes
3|Battle of Neuve Chapelle||neuve chapelle
3|Battle of Le Cateau||le cateau
3|Kerensky offensive||kerensky offensive;july offensive
3|Siege of Kut||kut
3|Battle of Megiddo (1918)|Battle of Megiddo (1918)|megiddo
3|Battle of Beersheba (1917)|Battle of Beersheba (1917)|beersheba
3|Battle of Coronel||coronel
3|Battle of the Falkland Islands||falkland islands;falklands 1914
3|Second Battle of Ypres||second ypres
3|Battle of Vittorio Veneto||vittorio veneto
3|Battle of the Piave River||piave
3|Battle of Cer||cer
3|Battle of Kolubara||kolubara
3|Arab Revolt||arab revolt
3|Battle of Fromelles||fromelles
3|Battle of Saint-Mihiel||saint mihiel;st mihiel
3|Battle of Heligoland Bight (1914)|Battle of Heligoland Bight (1914)|heligoland bight
3|Battle of Dogger Bank (1915)|Battle of Dogger Bank (1915)|dogger bank
4|Battle of Aubers Ridge||aubers ridge
4|Battle of Liège||liege
4|Siege of Antwerp (1914)|Siege of Antwerp (1914)|antwerp
4|Siege of Przemyśl||przemysl
4|Battle of Galicia||galicia
4|Battle of Łódź (1914)|Battle of Łódź (1914)|lodz
4|Erzurum offensive||erzurum
4|Battle of Sarikamish||sarikamish
4|Battle of Romani||romani
4|First Battle of Gaza||gaza
4|Lake Naroch offensive||lake naroch
4|Battle of Doiran (1917)|Battle of Doiran (1917)|doiran
4|Battle of Château-Thierry (1918)|Battle of Château-Thierry (1918)|chateau thierry
4|Battle of Hamel||hamel
4|Battle of Mont Saint-Quentin||mont st quentin
4|Battle of the Hindenburg Line||hindenburg line
4|Siege of Tsingtao||tsingtao;qingdao
4|Battle of Tanga||tanga
4|East African campaign (World War I)|East African campaign (World War I)|east african campaign
4|Battle of Ctesiphon (1915)|Battle of Ctesiphon (1915)|ctesiphon
4|Battle of Mărășești||marasesti
4|Battle of Kosturino||kosturino
4|Zeebrugge Raid||zeebrugge
4|Battle of the Aisne|First Battle of the Aisne|aisne
4|Nivelle offensive||nivelle;chemin des dames
4|Battle of Flers–Courcelette||flers courcelette
4|Battle of Delville Wood||delville wood
4|Battle of Pozières||pozieres
4|Battle of Moreuil Wood||moreuil wood
5|Battle of Rufiji Delta||rufiji
5|Battle of Penang||penang
5|Battle of Cocos||cocos;emden
5|Battle of Bita Paka||bita paka
5|Battle of Mahiwa||mahiwa
5|Battle of Otranto Straits|Battle of the Strait of Otranto (1917)|otranto
5|Battle of Mojkovac||mojkovac
5|Battle of Dobro Pole||dobro pole
5|Battle of Asiago||asiago
5|Battle of Mount Ortigara||ortigara
5|Battle of Kostiuchnówka||kostiuchnowka
5|Battle of Rarańcza||rarancza
`,
nope:{
 'stalingrad|d day|normandy|midway|pearl harbor':'That\'s World War II.',
 'waterloo|trafalgar':'A century too early!',
 'christmas truce':'A famous moment of peace &mdash; not a battle!'
}},

{id:'romebattles', cat:'Wars & Battles', q:'Name a battle of ancient Rome', hint:'Republic and Empire, before 476 AD',
list:`
1|Battle of Cannae||cannae
1|Battle of Actium||actium
1|Battle of Alesia|Siege of Alesia|alesia;siege alesia
1|Battle of the Teutoburg Forest||teutoburg;teutoburg forest;varus disaster
2|Battle of Zama||zama
2|Battle of Pharsalus||pharsalus
2|Battle of the Milvian Bridge||milvian bridge
2|Battle of Adrianople||adrianople
2|Battle of Carrhae||carrhae
2|Battle of Watling Street||watling street
2|Battle of Philippi||philippi
2|Battle of Lake Trasimene||trasimene;trasimeno
2|Battle of the Trebia||trebia
2|Battle of the Catalaunian Plains||catalaunian plains;chalons
3|Battle of Cynoscephalae||cynoscephalae
3|Battle of Pydna||pydna
3|Battle of Magnesia||magnesia
3|Battle of Heraclea||heraclea
3|Battle of Asculum||asculum
3|Battle of the Allia||allia
3|Battle of Arausio||arausio
3|Battle of Aquae Sextiae||aquae sextiae
3|Battle of Vercellae||vercellae
3|Battle of Munda||munda
3|Battle of Thapsus||thapsus
3|Battle of Mons Graupius||mons graupius
3|Battle of Dyrrhachium (48 BC)|Battle of Dyrrhachium (48 BC)|dyrrhachium
3|Battle of Mylae||mylae
3|Battle of the Aegates||aegates;aegates islands
3|Battle of Ilipa||ilipa
3|Battle of the Metaurus||metaurus
3|Battle of Bibracte||bibracte
3|Battle of Gergovia||gergovia
3|Siege of Masada||masada
3|Siege of Jerusalem (70 CE)|Siege of Jerusalem (70 CE)|jerusalem 70
3|Battle of the Caudine Forks||caudine forks
3|Siege of Carthage (Third Punic War)|Siege of Carthage (Third Punic War)|carthage 146;sack carthage
3|Siege of Syracuse (213–212 BC)|Siege of Syracuse (213–212 BC)|syracuse
3|Battle of Zela||zela;veni vidi vici
4|Battle of Sentinum||sentinum
4|Battle of Lake Regillus||lake regillus
4|Battle of Beneventum (275 BC)|Battle of Beneventum (275 BC)|beneventum
4|Battle of Chaeronea (86 BC)|Battle of Chaeronea (86 BC)|chaeronea
4|Battle of Orchomenus||orchomenus
4|Battle of Tigranocerta||tigranocerta
4|Battle of Forum Gallorum||forum gallorum
4|Battle of Mutina||mutina
4|Battle of Naulochus||naulochus
4|First Battle of Bedriacum||bedriacum
4|Battle of Lugdunum||lugdunum
4|Battle of Issus (194)|Battle of Issus (194)|issus 194
4|Battle of Edessa||edessa
4|Battle of Strasbourg||argentoratum;strasbourg
4|Battle of the Frigidus||frigidus
4|Battle of Abritus||abritus
4|Battle of Naissus||naissus
4|Battle of Mursa Major||mursa
4|Battle of Ctesiphon (363)|Battle of Ctesiphon (363)|ctesiphon
4|Battle of Pollentia||pollentia
4|Siege of Numantia||numantia
4|Battle of Agrigentum||agrigentum
4|Battle of Cape Ecnomus||ecnomus
4|Battle of Drepana||drepana
4|Battle of Baecula||baecula
4|Battle of Cissa||cissa
4|Battle of the Upper Baetis||upper baetis
4|Battle of Cremona (69)|Second Battle of Bedriacum|second bedriacum
4|Battle of Tapae||tapae
4|Battle of Adamclisi|Tropaeum Traiani|adamclisi
5|Battle of Lilybaeum||lilybaeum
5|Battle of the Colline Gate||colline gate
5|Battle of Sacriportus||sacriportus
5|Battle of Mount Gaurus||mount gaurus
5|Battle of Vesuvius||vesuvius
5|Battle of the Silarus River||silarus
5|Battle of Arretium||arretium
5|Battle of Telamon||telamon
5|Battle of Clastidium||clastidium
5|Battle of Thermopylae (191 BC)|Battle of Thermopylae (191 BC)|thermopylae 191
5|Battle of Corinth (146 BC)|Battle of Corinth (146 BC)|corinth 146
5|Battle of Idistaviso||idistaviso
5|Battle of the Angrivarian Wall||angrivarian wall
5|Battle of Medway||medway
5|Battle of Caer Caradoc||caer caradoc;caratacus
5|Battle of Lake Benacus||lake benacus
5|Battle of Verona (312)|Battle of Verona (312)|verona
5|Battle of Turin (312)|Battle of Turin (312)|turin
5|Battle of Chrysopolis||chrysopolis
5|Battle of Adrianople (324)|Battle of Adrianople (324)|adrianople 324
6|Battle of Mount Algidus||mount algidus
6|Battle of Vadimonian Lake||vadimo
6|Battle of Noreia||noreia
6|Battle of Fidentia||fidentia
6|Battle of Thala||thala
6|Battle of Ruspina||ruspina
`,
nope:{
 'thermopylae|marathon|salamis':'A Greek battle &mdash; before Rome was a power.',
 'hastings|agincourt':'Medieval &mdash; long after Rome.',
 'colosseum':'Plenty of fights there &mdash; but no battles!'
}},

{id:'greekbattles', cat:'Wars & Battles', q:'Name a battle of ancient Greece or Alexander', hint:'Greek, Persian and Macedonian battles, c. 500&ndash;300 BC',
list:`
1|Battle of Thermopylae||thermopylae;300
1|Battle of Marathon||marathon
1|Battle of Salamis||salamis
2|Battle of Plataea||plataea
2|Battle of Gaugamela||gaugamela;arbela
2|Battle of Issus||issus
2|Battle of the Granicus||granicus
2|Battle of Leuctra||leuctra
2|Battle of Chaeronea (338 BC)|Battle of Chaeronea (338 BC)|chaeronea
3|Battle of the Hydaspes||hydaspes;jhelum
3|Battle of Mycale||mycale
3|Battle of Artemisium||artemisium
3|Battle of Aegospotami||aegospotami
3|Battle of Mantinea (362 BC)|Battle of Mantinea (362 BC)|mantinea
3|Sicilian Expedition||syracuse;sicilian expedition
3|Battle of Sphacteria||sphacteria
3|Battle of Delium||delium
3|Battle of Arginusae||arginusae
3|Battle of Cunaxa||cunaxa
3|Battle of Ipsus||ipsus
3|Siege of Tyre (332 BC)|Siege of Tyre (332 BC)|tyre
3|Battle of Coronea (394 BC)|Battle of Coronea (394 BC)|coronea
3|Battle of Amphipolis||amphipolis
3|Battle of Raphia||raphia
3|Siege of Rhodes (305–304 BC)|Siege of Rhodes (305–304 BC)|rhodes
3|Battle of Pylos||pylos
4|Battle of Corupedium||corupedium
4|Battle of Sellasia||sellasia
4|Battle of Tegyra||tegyra
4|Battle of Haliartus||haliartus
4|Battle of Potidaea||potidaea
4|Siege of Halicarnassus||halicarnassus
4|Battle of Crannon||crannon
4|Battle of Cyzicus||cyzicus
4|Battle of Notium||notium
4|Battle of the Eurymedon||eurymedon
4|Battle of Himera (480 BC)|Battle of Himera (480 BC)|himera
4|Battle of Cumae||cumae
4|Battle of Sepeia||sepeia
4|Battle of the 300 Champions||champions;thyrea
4|Battle of Lechaeum||lechaeum
4|Battle of Nemea||nemea
4|Battle of Lade||lade
4|Battle of Mantinea (418 BC)|Battle of Mantinea (418 BC)|mantinea 418
4|Siege of Plataea (429 BC)|Siege of Plataea|siege plataea 429
4|Battle of Paraitakene||paraitakene
4|Battle of Gabiene||gabiene
4|Battle of Gaza (312 BC)|Battle of Gaza (312 BC)|gaza
4|Battle of Megalopolis||megalopolis
4|Battle of Sybota||sybota
4|Battle of the Persian Gate||persian gate
4|Siege of the Sogdian Rock||sogdian rock
4|Battle of the Jaxartes||jaxartes
5|Battle of Olpae||olpae
5|Battle of Solygeia||solygeia
5|Battle of Tanagra (457 BC)|Battle of Tanagra (457 BC)|tanagra
5|Battle of Oenophyta||oenophyta
5|Battle of Coronea (447 BC)|Battle of Coronea (447 BC)|coronea 447
5|Battle of Spartolos||spartolos
5|Battle of Naupactus||naupactus
5|Battle of Salamis (306 BC)||salamis cyprus;salamis 306
5|Battle of Embata||embata
5|Battle of Naxos||naxos
5|Battle of Leucimme||leucimme
5|Battle of Thebes|Battle of Thebes|thebes 335
5|Siege of Gaza (332 BC)|Siege of Gaza|siege gaza 332
5|Battle of the Hellespont||hellespont
5|Battle of Abydos||abydos
6|Battle of Cnidus||cnidus
6|Battle of Alyzia||alyzia
6|Battle of Mount Lycaeum||lycaeum
6|Battle of Ladoceia||ladoceia
6|Battle of Dyme||dyme
`,
nope:{
 'troy|trojan war':'A war of legend &mdash; Homer\'s, not history\'s.',
 'cannae|zama|actium':'A Roman battle &mdash; try the Roman dig!',
 'hastings|agincourt':'Much later &mdash; medieval.'
}},

{id:'hyw', cat:'Wars & Battles', q:'Name a battle of the Hundred Years\' War', hint:'England against France, 1337&ndash;1453',
list:`
1|Battle of Agincourt||agincourt;azincourt
1|Battle of Crécy||crecy
1|Battle of Poitiers||poitiers
1|Siege of Orléans||orleans
2|Battle of Sluys||sluys
2|Battle of Castillon||castillon
2|Battle of Patay||patay
2|Battle of Formigny||formigny
2|Battle of Verneuil||verneuil
2|Battle of Auray||auray
3|Siege of Calais (1346–1347)|Siege of Calais (1346–1347)|calais
3|Battle of La Rochelle||la rochelle
3|Battle of Cocherel||cocherel
3|Battle of Nájera||najera;navarrete
3|Battle of Neville's Cross||nevilles cross
3|Battle of Mauron||mauron
3|Battle of La Roche-Derrien||la roche derrien
3|Battle of Morlaix||morlaix
3|Battle of Cravant||cravant
3|Battle of Baugé||bauge
3|Battle of the Herrings||herrings;rouvray
3|Battle of Jargeau||jargeau
3|Siege of Rouen||rouen
3|Siege of Harfleur||harfleur
3|Combat of the Thirty||combat thirty
3|Battle of Winchelsea||les espagnols sur mer;winchelsea
3|Battle of Pontvallain||pontvallain
4|Battle of Meung-sur-Loire||meung sur loire
4|Battle of Beaugency||beaugency
4|Battle of Valmont||valmont
4|Battle of Gerberoy||gerberoy
4|Battle of Chizé||chize
4|Battle of Arnemuiden||arnemuiden
4|Battle of Auberoche||auberoche
4|Battle of Saint-Pol-de-Léon||saint pol de leon
4|Battle of Ardres||ardres
4|Battle of Brignais||brignais
4|Siege of Meaux||meaux
4|Siege of Limoges||limoges
4|Battle of Bergerac|Siege of Bergerac|bergerac
4|Battle of Caen (1346)|Battle of Caen (1346)|caen
4|Battle of Blanchetaque||blanchetaque
4|Siege of Montargis||montargis
4|Battle of Lagny||lagny
4|Battle of Saint-Jacques-sur-la-Birse||st jakob an der birs;saint jacques
4|Battle of Montiel||montiel
4|Siege of Guînes||guines
5|Battle of Cadsand||cadsand
5|Battle of Saint-Omer||saint omer
5|Battle of Lunalonge||lunalonge
5|Battle of Saintes (1351)|Battle of Saintes (1351)|saintes
5|Battle of Nogent-sur-Seine||nogent sur seine
5|Siege of Mont-Saint-Michel||mont saint michel
5|Siege of Pontoise (1441)||pontoise
5|Siege of Le Mans (1428)||le mans
`,
nope:{
 'hastings':'1066 &mdash; nearly three centuries too early!',
 'bosworth|towton|tewkesbury':'The Wars of the Roses &mdash; England against itself, just after.',
 'bannockburn':'Scotland versus England (1314) &mdash; before this war.'
}},

{id:'naval', cat:'Wars & Battles', q:'Name a famous naval battle', hint:'Any era, any ocean (or lake)',
list:`
1|Battle of Trafalgar||trafalgar
1|Battle of Midway||midway
1|Battle of Salamis||salamis
1|Battle of Jutland||jutland
1|Spanish Armada||armada;spanish armada
2|Battle of Lepanto||lepanto
2|Battle of Actium||actium
2|Battle of the Coral Sea||coral sea
2|Battle of Leyte Gulf||leyte gulf
2|Battle of Tsushima||tsushima
2|Battle of Hampton Roads||hampton roads;monitor merrimack
2|Battle of the Nile||nile;aboukir bay
2|Battle of the Atlantic||atlantic
2|Battle of Navarino||navarino
2|Attack on Pearl Harbor||pearl harbor
3|Battle of the Chesapeake||chesapeake;virginia capes
3|Battle of Sluys||sluys
3|Battle of Svolder||svolder;svold
3|Battle of Hjörungavágr||hjorungavagr;jomsvikings
3|Battle of Red Cliffs||red cliffs;chibi
3|Battle of Myeongnyang||myeongnyang
3|Battle of Hansan Island||hansan
3|Battle of Noryang||noryang
3|Battle of the Yalu River (1894)|Battle of the Yalu River (1894)|yalu
3|Battle of Copenhagen (1801)|Battle of Copenhagen (1801)|copenhagen
3|Battle of Camperdown||camperdown
3|Battle of Cape St. Vincent (1797)|Battle of Cape St. Vincent (1797)|cape st vincent
3|Glorious First of June||first june
3|Battle of Quiberon Bay||quiberon bay
3|Battle of the Saintes||saintes
3|Battle of Beachy Head (1690)|Battle of Beachy Head (1690)|beachy head
3|Battles of Barfleur and La Hougue||barfleur;la hougue
3|Battle of the Downs||downs
3|Four Days' Battle||four days battle
3|Raid on the Medway||medway
3|Battle of Solebay||solebay
3|Battle of Mylae||mylae
3|Battle of the Aegates||aegates
3|Battle of Arginusae||arginusae
3|Battle of Aegospotami||aegospotami
3|Battle of Lissa (1866)|Battle of Lissa (1866)|lissa;vis
3|Battle of Manila Bay||manila bay
3|Battle of Santiago de Cuba||santiago de cuba
3|Battle of Mobile Bay||mobile bay
3|Battle of the River Plate||river plate
3|Battle of the Denmark Strait||denmark strait
3|Battle of Cape Matapan||matapan
3|Battle of Taranto||taranto
3|Battle of the Philippine Sea||philippine sea
3|Battle of Savo Island||savo island
3|Battle of the North Cape||north cape
3|Battle of Coronel||coronel
3|Battle of Dogger Bank (1915)|Battle of Dogger Bank (1915)|dogger bank
3|Battle of Gangut||gangut;hanko
3|Battle of Chesma||chesma;cesme
3|Battle of Sinop||sinop;sinope
3|Battle of Lake Erie||lake erie
3|Battle of Diu (1509)|Battle of Diu (1509)|diu
3|Battle of Preveza||preveza
3|Battle of Bạch Đằng (1288)|Battle of Bạch Đằng (1288)|bach dang
4|Battle of Svensksund||svensksund;ruotsinsalmi
4|Battle of Køge Bay (1677)|Battle of Køge Bay (1677)|koge bay
4|Battle of the Sound||sound;oresund
4|Battle of Hogland||hogland
4|Battle of Heligoland (1864)|Battle of Heligoland (1864)|heligoland 1864
4|Battle of Grand Port||grand port
4|Battle of Lissa (1811)|Battle of Lissa (1811)|lissa 1811
4|Battle of Valcour Island||valcour island
4|Battle of Plattsburgh||plattsburgh;lake champlain
4|Battle of Flamborough Head||flamborough head
4|USS Constitution vs HMS Guerriere||constitution guerriere
4|Battle of Djerba||djerba
4|Battle of Zonchio||zonchio
4|Battle of Chioggia||chioggia
4|Battle of Curzola||curzola
4|Battle of Meloria (1284)|Battle of Meloria (1284)|meloria
4|Battle of Dan-no-ura||dan no ura
4|Battle of Yashima||yashima
4|Battle of Lake Poyang||lake poyang;poyang
4|Battle of Yamen||yamen
4|Battle of Tangdao||tangdao
4|Battle of Baekgang||baekgang;hakusukinoe
4|Battle of Chemulpo Bay||chemulpo
4|Battle of Port Arthur||port arthur
4|Battle of Cape Ecnomus||ecnomus
4|Battle of Cyzicus||cyzicus
4|Battle of Naulochus||naulochus
4|Battle of Artemisium||artemisium
4|Battle of Mycale||mycale
4|Battle of Fehmarn (1644)|Battle of Fehmarn (1644)|fehmarn
4|Battle of Kentish Knock||kentish knock
4|Battle of Scheveningen||scheveningen
4|Battle of Texel||texel
4|Battle of Lowestoft||lowestoft
5|Battle of Ushant (1778)|Battle of Ushant (1778)|ushant
5|Battle of Dogger Bank (1781)||dogger bank 1781
5|Battle of Algeciras||algeciras
5|Battle of Basque Roads||basque roads
5|Battle of Cape Finisterre (1805)|Battle of Cape Finisterre (1805)|cape finisterre
5|Battle of Pulo Aura||pulo aura
5|Battle of Riachuelo||riachuelo
5|Battle of Angamos||angamos
5|Battle of Iquique||iquique
5|Battle of Fuzhou||fuzhou;foochow
5|Battle of Weihaiwei||weihaiwei
5|Battle of the Gulf of Riga||gulf riga
5|Battle of Elli||elli
5|Battle of Lemnos (1912)|Battle of Lemnos (1912)|lemnos
6|Battle of the Eurymedon||eurymedon
6|Battle of Sybota||sybota
6|Battle of Notium||notium
6|Battle of Embata||embata
6|Battle of Ostia (849)|Battle of Ostia (849)|ostia
6|Battle of Nesjar||nesjar
6|Battle of Fimreite||fimreite
`,
nope:{
 'titanic|lusitania|bismarck':'A famous sinking &mdash; name a battle!',
 'waterloo|gettysburg|stalingrad':'A land battle!',
 'pirates caribbean':'Fiction &mdash; arr.'
}}
);

/* Dug Up — more prompts: wars and commanders */
PROMPT_DATA.push(
{id:'wars', cat:'Wars & Battles', q:'Name a war fought before 1900', hint:'Wars that began before 1900, anywhere',
list:`
1|Hundred Years' War||hundred years war
1|American Civil War||civil war;us civil war
1|Napoleonic Wars||napoleonic
1|American Revolutionary War||american revolution;war independence;revolutionary war
2|Peloponnesian War||peloponnesian war
2|Thirty Years' War||thirty years war
2|Seven Years' War||seven years war
2|Punic Wars||punic war;punic
2|Wars of the Roses||roses
2|Crimean War||crimean
2|Opium Wars||opium war;first opium war
2|War of 1812||1812
2|English Civil War||english civil war
2|Greco-Persian Wars||persian wars
2|Gallic Wars||gallic war
2|Franco-Prussian War||franco prussian
3|Mexican–American War||mexican american war
3|Boer War|Second Boer War|second boer war;anglo boer war
3|Spanish–American War||spanish american war
3|First Sino-Japanese War||sino japanese war
3|Anglo-Zulu War||zulu war
3|Great Northern War||great northern war
3|War of the Spanish Succession||spanish succession
3|War of the Austrian Succession||austrian succession
3|Eighty Years' War||eighty years war;dutch revolt
3|Wars of the Three Kingdoms||three kingdoms wars
3|Hussite Wars||hussite
3|Reconquista
3|Samnite Wars||samnite
3|Jewish–Roman wars||jewish roman wars;first jewish roman war
3|Macedonian Wars||macedonian war
3|Wars of the Diadochi||diadochi
3|Norman Conquest||norman conquest
3|Mongol invasions||mongol conquests
3|Imjin War||japanese invasions korea
3|Boshin War||boshin
3|Satsuma Rebellion||satsuma
3|Taiping Rebellion||taiping
3|Paraguayan War||war triple alliance;triple alliance
3|War of the Pacific||war pacific
3|Austro-Prussian War||seven weeks war
3|Russo-Turkish War (1877–1878)|Russo-Turkish War (1877–1878)|russo turkish war
3|Greek War of Independence||greek independence
3|Indian Rebellion of 1857||indian mutiny;sepoy mutiny;1857
3|French and Indian War||french indian war
3|Anglo-Dutch Wars||anglo dutch war
3|Italian Wars||italian wars
3|French Wars of Religion||wars religion
3|Jacobite risings||jacobite
3|Second Schleswig War||schleswig war;dano prussian war
3|First Schleswig War||three years war denmark
4|Pastry War||pastry
4|Anglo-Zanzibar War||zanzibar war;shortest war
4|War of Jenkins' Ear||jenkins ear
4|Pig War|Pig War (1859)|pig war
4|War of the Bucket||bucket
4|Kalmar War||kalmar
4|Northern Seven Years' War||northern seven years war
4|Scanian War||scanian
4|Anglo-Afghan Wars|First Anglo-Afghan War|anglo afghan war
4|Anglo-Sikh Wars|First Anglo-Sikh War|anglo sikh war
4|Anglo-Maratha Wars||anglo maratha
4|Anglo-Burmese Wars|First Anglo-Burmese War|anglo burmese war
4|Anglo-Ashanti wars||ashanti war
4|Xhosa Wars||xhosa wars;cape frontier wars
4|New Zealand Wars||maori wars
4|Black Hawk War||black hawk
4|Seminole Wars||seminole
4|Great Sioux War of 1876||great sioux war;sioux war
4|Texas Revolution||texas revolution
4|King Philip's War||king philips war
4|Pequot War||pequot
4|Queen Anne's War||queen annes war
4|Nine Years' War||nine years war;war grand alliance
4|Franco-Dutch War||franco dutch war
4|The Anarchy||anarchy
4|War of the Sicilian Vespers||sicilian vespers
4|Second Barons' War||barons war
4|Irish Confederate Wars||confederate wars
4|Cromwellian conquest of Ireland||cromwellian conquest
4|Russo-Persian Wars||russo persian war
4|Russo-Swedish War (1808–1809)|Finnish War|finnish war
4|Hundred Days||hundred days
4|Byzantine–Sasanian wars||byzantine sasanian
4|Arab–Byzantine wars||arab byzantine
4|Wars of Scottish Independence||scottish independence
4|Platine War||platine
4|Ragamuffin War||ragamuffin;farrapos
4|Reform War||reform war
4|Franco-Mexican War|Second French intervention in Mexico|french intervention mexico
4|Sino-French War||sino french
4|Second Opium War||arrow war
5|Livonian War||livonian
5|Dacke War||dacke
5|Count's Feud||counts feud
5|Torstenson War||torstenson
5|War of the Polish Succession||polish succession
5|War of the Bavarian Succession||potato war;bavarian succession
5|War of the Quadruple Alliance||quadruple alliance
5|War of Devolution||devolution
5|Russo-Swedish War (1788–1790)|Russo-Swedish War (1788–1790)|gustav 3 russian war
5|Theatre War|Theatre War|cowberry war
5|Gunboat War||gunboat war
5|Swedish–Norwegian War (1814)|Swedish–Norwegian War (1814)|swedish norwegian war
5|Hat's Russian War||hats russian war
5|Herzegovina uprising (1875–1877)||herzegovina uprising
5|War of Chioggia||chioggia war
5|Ottoman–Habsburg wars||ottoman habsburg
6|War of the League of Cambrai||league cambrai
6|War of the Eight Saints||eight saints
6|Toggenburg War||toggenburg
6|Old Zürich War||old zurich war
6|Swabian War||swabian war
6|Mughal–Safavid war (1649–1653)||mughal safavid war
`,
nope:{
 'world war 1|world war 2|first world war|second world war|vietnam war|korean war|cold war':'Twentieth century &mdash; this dig stops at 1900.',
 'star wars|war worlds':'Fiction!',
 'trojan war':'A legendary war &mdash; Homer\'s, not history\'s.'
}},

{id:'commanders', cat:'Wars & Battles', q:'Name a famous military commander from before 1900', hint:'Generals, admirals and warlords',
list:`
1|Napoleon||napoleon bonaparte;bonaparte
1|Alexander the Great||alexander
1|Julius Caesar||caesar
1|Hannibal||hannibal barca
1|Genghis Khan||genghis;chinggis
2|Duke of Wellington|Arthur Wellesley, 1st Duke of Wellington|wellington;arthur wellesley
2|Horatio Nelson||nelson;admiral nelson;lord nelson
2|Robert E. Lee||lee;robert lee
2|Ulysses S. Grant||grant
2|Saladin
2|Sun Tzu||sunzi
2|Frederick the Great||frederick 2 prussia
2|Scipio Africanus||scipio
2|Attila||attila hun
2|Spartacus
2|Joan of Arc||jeanne darc
2|Stonewall Jackson||jackson;thomas jackson
2|William Tecumseh Sherman||sherman
2|George Washington||washington
2|Timur||tamerlane
3|Gustavus Adolphus||gustav 2 adolf;gustavus
3|Duke of Marlborough|John Churchill, 1st Duke of Marlborough|marlborough;john churchill
3|Prince Eugene of Savoy||eugene savoy
3|Albrecht von Wallenstein||wallenstein
3|Count of Tilly|Johann Tserclaes, Count of Tilly|tilly
3|Turenne|Henri de La Tour d'Auvergne, Viscount of Turenne|turenne
3|Belisarius
3|Charles Martel||martel
3|El Cid||cid
3|Babur
3|Shivaji
3|Oda Nobunaga||nobunaga
3|Tokugawa Ieyasu||ieyasu
3|Toyotomi Hideyoshi||hideyoshi
3|Yi Sun-sin||yi sun shin
3|Zhuge Liang
3|Cao Cao
3|Khalid ibn al-Walid||khalid ibn walid
3|Subutai||subotai
3|Vercingetorix
3|Arminius||hermann
3|Leonidas I||leonidas
3|Themistocles
3|Epaminondas
3|Philip II of Macedon||philip 2
3|Pyrrhus of Epirus||pyrrhus
3|Gaius Marius||marius
3|Sulla
3|Pompey
3|Mark Antony||antony
3|Simón Bolívar||bolivar
3|José de San Martín||san martin
3|Toussaint Louverture||louverture
3|Mikhail Kutuzov||kutuzov
3|Alexander Suvorov||suvorov
3|Gebhard Leberecht von Blücher||blucher
3|Michel Ney||ney
3|Joachim Murat||murat
3|Louis-Nicolas Davout||davout
3|Helmuth von Moltke the Elder||moltke
3|George Armstrong Custer||custer
3|Shaka||shaka zulu
3|Giuseppe Garibaldi||garibaldi
3|Crazy Horse
3|Geronimo
3|Charles XII of Sweden||charles 12;karl 12
3|Peter Wessel Tordenskiold||tordenskjold;tordenskiold
4|Narses
4|Aetius|Flavius Aetius|flavius aetius
4|Stilicho
4|Agrippa|Marcus Vipsanius Agrippa
4|Germanicus
4|Han Xin
4|Bai Qi
4|Yue Fei
4|Qi Jiguang
4|Hernán Cortés||cortes
4|Francisco Pizarro||pizarro
4|Jan Žižka||zizka
4|John Hunyadi||hunyadi
4|Skanderbeg
4|Vlad the Impaler||vlad dracula
4|Edward the Black Prince||black prince
4|Bertrand du Guesclin||du guesclin
4|Great Condé|Louis, Grand Condé|conde
4|Vauban|Sébastien Le Prestre de Vauban
4|Maurice of Nassau||maurice nassau
4|Oliver Cromwell||cromwell
4|Thomas Fairfax||fairfax
4|Prince Rupert of the Rhine||prince rupert
4|James Wolfe||wolfe
4|Louis-Joseph de Montcalm||montcalm
4|Nathanael Greene||greene
4|Marquis de Lafayette||lafayette
4|Horatio Gates||gates
4|Charles Cornwallis||cornwallis
4|John Paul Jones||paul jones
4|André Masséna||massena
4|Jean Lannes||lannes
4|Carl von Clausewitz||clausewitz
4|George B. McClellan||mcclellan
4|George Meade||meade
4|James Longstreet||longstreet
4|J. E. B. Stuart||jeb stuart;stuart
4|Philip Sheridan||sheridan
4|Nathan Bedford Forrest||forrest
4|Antonio López de Santa Anna||santa anna
4|Bernardo O'Higgins||ohiggins
4|Antonio José de Sucre||sucre
4|Admiral Tōgō Heihachirō||togo heihachiro;togo
4|Saigō Takamori||saigo
4|Cetshwayo
4|Sitting Bull
4|Tecumseh
4|Samori Ture||samori
4|Menelik II||menelik
4|Abd al-Qadir al-Jaza'iri||abd al qadir
4|Imam Shamil||shamil
4|Nader Shah||nadir shah
4|Mehmed II||mehmed conqueror
4|Suleiman the Magnificent||suleiman
4|Baybars
4|Tariq ibn Ziyad||tariq
4|Mahmud of Ghazni||mahmud ghazni
5|Iphicrates
5|Lysander
5|Brasidas
5|Hamilcar Barca||hamilcar
5|Hasdrubal Barca||hasdrubal
5|Quintus Fabius Maximus||fabius maximus
5|Sertorius
5|Lucullus
5|Corbulo|Gnaeus Domitius Corbulo
5|Agricola|Gnaeus Julius Agricola
5|Majorian
5|Flavius Ricimer||ricimer
5|Heraclius
5|John Tzimiskes||tzimiskes
5|Bohemond of Taranto||bohemond
5|Godfrey of Bouillon||godfrey bouillon
5|Jebe
5|Muqali
5|Batu Khan||batu
5|Tomás de Zumalacárregui||zumalacarregui
5|Radetzky|Joseph Radetzky von Radetz|radetzky
5|Kościuszko|Tadeusz Kościuszko|kosciuszko
5|Józef Poniatowski||poniatowski
5|Eugène de Beauharnais||beauharnais
5|Jean-Baptiste Bernadotte|Charles XIV John|bernadotte;karl johan
5|Carl Gustaf Armfeldt||armfeldt
5|Lennart Torstensson||torstensson
5|Johan Banér||baner
5|Magnus Stenbock||stenbock
5|Ivan Mazepa||mazepa
5|Bogdan Khmelnytsky||khmelnytsky
6|Yermak Timofeyevich||yermak
6|Jan III Sobieski||sobieski
6|Stanisław Żółkiewski||zolkiewski
6|Jan Karol Chodkiewicz||chodkiewicz
6|Niels Juel||juel
6|Cort Adeler||adeler
`,
nope:{
 'eisenhower|patton|rommel|zhukov|montgomery|macarthur':'A World War II commander &mdash; after 1900.',
 'achilles|hector|odysseus':'A hero of legend, not history.',
 'rambo|sharpe':'Fiction!'
}},

{id:'ww2cmd', cat:'Wars & Battles', q:'Name a military commander of World War II', hint:'Generals, admirals and air marshals on any side',
list:`
1|Dwight D. Eisenhower||eisenhower;ike
1|George S. Patton||patton
1|Erwin Rommel||rommel;desert fox
1|Georgy Zhukov||zhukov
1|Bernard Montgomery||montgomery;monty
1|Douglas MacArthur||macarthur
2|Isoroku Yamamoto||yamamoto
2|Chester W. Nimitz||nimitz
2|Omar Bradley||bradley
2|Heinz Guderian||guderian
2|Erich von Manstein||manstein
2|Charles de Gaulle||de gaulle
2|Konstantin Rokossovsky||rokossovsky
2|Ivan Konev||konev
2|Vasily Chuikov||chuikov
2|Karl Dönitz||donitz;doenitz
2|Hermann Göring||goring;goering
2|George C. Marshall||marshall
2|William Halsey Jr.||halsey;bull halsey
2|Raymond A. Spruance||spruance
3|Walter Model||model
3|Albert Kesselring||kesselring
3|Gerd von Rundstedt||rundstedt
3|Friedrich Paulus||paulus
3|Wilhelm Keitel||keitel
3|Alfred Jodl||jodl
3|Erich Raeder||raeder
3|Fedor von Bock||bock
3|Wilhelm Ritter von Leeb||leeb
3|Franz Halder||halder
3|William Slim||slim
3|Harold Alexander||alexander
3|Archibald Wavell||wavell
3|Claude Auchinleck||auchinleck
3|Hugh Dowding||dowding
3|Arthur Harris||harris;bomber harris
3|Louis Mountbatten||mountbatten
3|Philippe Leclerc de Hauteclocque||leclerc
3|Alphonse Juin||juin
3|Władysław Anders||anders
3|Carl Gustaf Emil Mannerheim||mannerheim
3|Otto Ruge||ruge
3|Carl Gustav Fleischer||fleischer
3|Chiang Kai-shek||chiang
3|Zhu De
3|Peng Dehuai
3|Lin Biao
3|Tomoyuki Yamashita||yamashita;tiger malaya
3|Masaharu Homma||homma
3|Tadamichi Kuribayashi||kuribayashi
3|Mitsuru Ushijima||ushijima
3|Chūichi Nagumo||nagumo
3|Tamon Yamaguchi||yamaguchi
3|Takeo Kurita||kurita
3|Ernest King||ernest king
3|Joseph Stilwell||stilwell;vinegar joe
3|Claire Lee Chennault||chennault
3|Mark W. Clark||mark clark
3|Matthew Ridgway||ridgway
3|James M. Gavin||gavin
3|Jimmy Doolittle||doolittle
3|Curtis LeMay||lemay
3|Carl Spaatz||spaatz
3|Henry H. Arnold||hap arnold;arnold
3|Orde Wingate||wingate
3|Aleksandr Vasilevsky||vasilevsky
3|Semyon Timoshenko||timoshenko
3|Nikolai Vatutin||vatutin
3|Rodion Malinovsky||malinovsky
4|Bernard Freyberg||freyberg
4|Harry Crerar||crerar
4|Thomas Blamey||blamey
4|Leslie Morshead||morshead
4|Fyodor Tolbukhin||tolbukhin
4|Kirill Meretskov||meretskov
4|Ivan Bagramyan||bagramyan
4|Leonid Govorov||govorov
4|Semyon Budyonny||budyonny
4|Kliment Voroshilov||voroshilov
4|Pietro Badoglio||badoglio
4|Rodolfo Graziani||graziani
4|Giovanni Messe||messe
4|Ugo Cavallero||cavallero
4|Walther von Brauchitsch||brauchitsch
4|Ewald von Kleist||kleist
4|Hermann Hoth||hoth
4|Paul Hausser||hausser
4|Ferdinand Schörner||schorner
4|Gotthard Heinrici||heinrici
4|Hasso von Manteuffel||manteuffel
4|Kurt Student||student
4|Hans-Jürgen von Arnim||arnim
4|Wilhelm Canaris||canaris
4|Andrew Cunningham||cunningham
4|Bertram Ramsay||ramsay
4|Arthur Tedder||tedder
4|Trafford Leigh-Mallory||leigh mallory
4|Frederick Browning||browning
4|Miles Dempsey||dempsey
4|Brian Horrocks||horrocks
4|Richard O'Connor||oconnor
4|Alan Brooke|Alan Brooke, 1st Viscount Alanbrooke|alanbrooke
4|Courtney Hodges||hodges
4|William Hood Simpson||simpson
4|Alexander Patch||patch
4|Jacob L. Devers||devers
4|Lucian Truscott||truscott
4|Terry de la Mesa Allen||terry allen
4|Anthony McAuliffe||mcauliffe;nuts
4|Holland Smith||holland smith;howlin mad
4|Alexander Vandegrift||vandegrift
4|Thomas Kinkaid||kinkaid
4|Marc Mitscher||mitscher
4|Frank Jack Fletcher||fletcher
4|Jonathan Wainwright||wainwright
4|Walter Krueger||krueger
4|Robert Eichelberger||eichelberger
4|Hideki Tojo||tojo
4|Shigeyoshi Inoue||inoue
4|Jisaburō Ozawa||ozawa
4|Hitoshi Imamura||imamura
4|Renya Mutaguchi||mutaguchi
4|Josip Broz Tito||tito
5|Draža Mihailović||mihailovic
5|Tadeusz Bór-Komorowski||bor komorowski
5|Stanisław Maczek||maczek
5|Stanisław Sosabowski||sosabowski
5|Henri Giraud||giraud
5|Jean de Lattre de Tassigny||de lattre
5|Maurice Gamelin||gamelin
5|Maxime Weygand||weygand
5|Henri Guisan||guisan
5|Alexandros Papagos||papagos
5|Ion Antonescu||antonescu
5|Andrey Vlasov||vlasov
5|Ivan Chernyakhovsky||chernyakhovsky
5|Pavel Rotmistrov||rotmistrov
5|Mikhail Katukov||katukov
5|Pavel Rybalko||rybalko
5|Vasily Sokolovsky||sokolovsky
5|Hugo Sperrle||sperrle
5|Adolf Galland||galland
5|Erhard Milch||milch
5|Sepp Dietrich||sepp dietrich
5|Hans Speidel||speidel
5|Walter Warlimont||warlimont
5|Hyakutake Harukichi||hyakutake
5|Kiyotake Kawaguchi||kawaguchi
6|Ole Berg|Ole Berg (general)
6|Kristian Laake||laake
6|Henry Diesen||diesen
6|Jacob Hvinden Haug||hvinden haug
6|Wilhelm Steffens||steffens
`,
nope:{
 'hitler|adolf hitler|mussolini|stalin|churchill|roosevelt':'A political leader &mdash; this dig wants military commanders.',
 'napoleon|wellington|lee|grant':'Before 1900 &mdash; try the commanders dig!',
 'captain america|captain miller':'Fiction!'
}},

{id:'amrev', cat:'Wars & Battles', q:'Name a battle of the American Revolutionary War', hint:'1775&ndash;1783',
list:`
1|Battles of Lexington and Concord||lexington;concord;lexington concord
1|Battle of Bunker Hill||bunker hill;breeds hill
1|Siege of Yorktown||yorktown
1|Battles of Saratoga||saratoga
2|Battle of Trenton||trenton
2|Battle of Long Island||long island;brooklyn
2|Battle of Brandywine||brandywine
2|Battle of Princeton||princeton
2|Valley Forge|Valley Forge|valley forge
2|Battle of Monmouth||monmouth
2|Battle of Cowpens||cowpens
3|Siege of Boston||boston
3|Battle of Germantown||germantown
3|Battle of Kings Mountain||kings mountain
3|Battle of Guilford Court House||guilford court house
3|Battle of Camden||camden
3|Siege of Charleston||charleston
3|Battle of the Chesapeake||chesapeake;virginia capes
3|Battle of Bennington||bennington
3|Battle of Oriskany||oriskany
3|Battle of Harlem Heights||harlem heights
3|Battle of White Plains||white plains
3|Battle of Fort Washington||fort washington
3|Battle of Quebec (1775)|Battle of Quebec (1775)|quebec
3|Capture of Fort Ticonderoga||ticonderoga
3|Battle of Stony Point||stony point
3|Siege of Savannah||savannah
3|Battle of Valcour Island||valcour island
3|Battle of Flamborough Head||flamborough head;bonhomme richard
4|Battle of Moores Creek Bridge||moores creek
4|Battle of Sullivan's Island||sullivans island
4|Battle of Hubbardton||hubbardton
4|Battle of Freeman's Farm||freemans farm
4|Battle of Bemis Heights||bemis heights
4|Battle of Paoli||paoli
4|Battle of Red Bank||red bank
4|Siege of Fort Mifflin||fort mifflin
4|Battle of Rhode Island||rhode island
4|Battle of Paulus Hook||paulus hook
4|Battle of Waxhaws||waxhaws
4|Battle of Eutaw Springs||eutaw springs
4|Siege of Ninety-Six||ninety six
4|Battle of Hobkirk's Hill||hobkirks hill
4|Battle of Green Spring||green spring
4|Battle of Groton Heights||groton heights;fort griswold
4|Battle of Blue Licks||blue licks
4|Siege of Pensacola||pensacola
4|Great Siege of Gibraltar||gibraltar
4|Battle of the Saintes||saintes
4|Battle of Minisink||minisink
4|Battle of Newtown||newtown
4|Siege of Fort Stanwix||fort stanwix
4|Battle of Ridgefield||ridgefield
4|Battle of Assunpink Creek||assunpink;second trenton
4|Battle of Bound Brook||bound brook
4|Battle of Short Hills||short hills
4|Battle of Cooch's Bridge||coochs bridge
5|Battle of Great Bridge||great bridge
5|Battle of Kettle Creek||kettle creek
5|Battle of Brier Creek||brier creek
5|Battle of Stono Ferry||stono ferry
5|Battle of Musgrove Mill||musgrove mill
5|Battle of Williamson's Plantation||huck's defeat;williamsons plantation
5|Battle of Ramsour's Mill||ramsours mill
5|Battle of Springfield (1780)|Battle of Springfield (1780)|springfield
5|Battle of Connecticut Farms||connecticut farms
5|Battle of Wyoming||wyoming
5|Cherry Valley massacre||cherry valley
5|Battle of Fort Montgomery||fort montgomery
5|Battle of Machias||machias
5|Battle of Chelsea Creek||chelsea creek
6|Battle of Fort Slongo||fort slongo
6|Battle of Edge Hill||edge hill
6|Battle of Crooked Billet||crooked billet
6|Battle of Quinton's Bridge||quintons bridge
6|Battle of Hanging Rock||hanging rock
`,
nope:{
 'gettysburg|bull run|antietam':'The Civil War &mdash; about 85 years later.',
 'alamo':'Texas, 1836.',
 'boston tea party':'A protest (1773) &mdash; not a battle.'
}},

{id:'medbattles', cat:'Wars & Battles', q:'Name a battle fought in medieval Europe', hint:'c. 500&ndash;1500',
list:`
1|Battle of Hastings||hastings
1|Battle of Agincourt||agincourt
1|Battle of Crécy||crecy
1|Battle of Bannockburn||bannockburn
2|Battle of Tours||tours;poitiers 732
2|Battle of Stamford Bridge||stamford bridge
2|Battle of Bosworth Field||bosworth
2|Battle of Poitiers||poitiers
2|Battle of Stirling Bridge||stirling bridge
2|Battle of Grunwald||grunwald;tannenberg 1410
2|Fall of Constantinople||constantinople 1453
2|Battle of Kosovo||kosovo
2|Battle on the Ice||lake peipus;ice
2|Battle of Lechfeld||lechfeld
3|Battle of Las Navas de Tolosa||las navas de tolosa
3|Battle of Bouvines||bouvines
3|Battle of Legnano||legnano
3|Battle of Manzikert||manzikert
3|Battle of Kulikovo||kulikovo
3|Battle of Nicopolis||nicopolis
3|Battle of Varna||varna
3|Battle of Towton||towton
3|Battle of Falkirk (1298)|Battle of Falkirk (1298)|falkirk
3|Battle of the Golden Spurs||golden spurs;courtrai
3|Battle of Morgarten||morgarten
3|Battle of Sempach||sempach
3|Battle of Stiklestad||stiklestad
3|Battle of Edington||edington
3|Battle of Brunanburh||brunanburh
3|Battle of Maldon||maldon
3|Battle of Clontarf||clontarf
3|Battle of Roncevaux Pass||roncevaux;roncesvalles
3|Battle of Lewes||lewes
3|Battle of Evesham||evesham
3|Battle of Otterburn||otterburn
3|Battle of Shrewsbury||shrewsbury
3|Battle of Tewkesbury||tewkesbury
3|Battle of Barnet||barnet
3|Battle of Mohi||mohi;sajo
3|Battle of Legnica||legnica;liegnitz
3|Battle of Marchfeld||marchfeld;durnkrut
3|Battle of Nancy||nancy
3|Battle of Morat||morat;murten
3|Battle of Grandson||grandson
3|Battle of Castillon||castillon
3|Battle of Orleans|Siege of Orléans|orleans
3|Battle of Hafrsfjord||hafrsfjord
3|Battle of Svolder||svolder
3|Battle of Fulford||fulford
3|Battle of Benevento||benevento
3|Battle of Tagliacozzo||tagliacozzo
3|Battle of Montaperti||montaperti
3|Battle of Campaldino||campaldino
4|Battle of Dyrrhachium (1081)|Battle of Dyrrhachium (1081)|dyrrhachium
4|Battle of Myriokephalon||myriokephalon
4|Battle of Civitate||civitate
4|Battle of Kleidion||kleidion
4|Battle of Achelous (917)|Battle of Achelous (917)|achelous
4|Battle of Pliska||pliska
4|Battle of Dorylaeum (1097)|Battle of Dorylaeum (1097)|dorylaeum
4|Battle of Antioch (1098)|Siege of Antioch|antioch
4|Battle of Hattin||hattin
4|Battle of Arsuf||arsuf
4|Battle of Muret||muret
4|Battle of Worringen||worringen
4|Battle of Mühldorf||muhldorf
4|Battle of Halidon Hill||halidon hill
4|Battle of Dupplin Moor||dupplin moor
4|Battle of Neville's Cross||nevilles cross
4|Battle of Aljubarrota||aljubarrota
4|Battle of Nájera||najera
4|Battle of Rosebecque||roosebeke;westrozebeke
4|Battle of Othée||othee
4|Battle of Kressenbrunn||kressenbrunn
4|Battle of Ashdown||ashdown
4|Battle of Assandun||assandun
4|Battle of Largs||largs
4|Battle of Bornhöved (1227)|Battle of Bornhöved (1227)|bornhoved
4|Battle of Lyndanisse||lyndanisse
4|Battle of Saule||saule
4|Battle of Durbe||durbe
4|Battle of Rudau||rudau
4|Battle of Vorskla River||vorskla
4|Battle of Kalka River||kalka
4|Battle of the Neva||neva
4|Battle of Velbazhd||velbazhd
4|Battle of Maritsa||maritsa
4|Battle of Rovine||rovine
4|Battle of Ankara||ankara
5|Battle of Mons Badonicus||badon;mount badon
5|Battle of Catraeth||catraeth
5|Battle of Dun Nechtain||nechtansmere;dun nechtain
5|Battle of Vouillé||vouille
5|Battle of Tolbiac||tolbiac
5|Battle of Fontenoy (841)|Battle of Fontenoy (841)|fontenoy 841
5|Battle of Andernach (876)|Battle of Andernach (876)|andernach
5|Battle of Riade||riade
5|Battle of Soissons (923)|Battle of Soissons (923)|soissons
5|Battle of Bråvalla||bravalla
5|Battle of Fyrisvellir||fyrisvellir
5|Battle of Nesjar||nesjar
5|Battle of Lyrskog Heath||lyrskog heath
5|Battle of the Helgeå||helgea
5|Battle of Niså||nisa
5|Battle of Fimreite||fimreite
5|Battle of Kalvskinnet||kalvskinnet
5|Battle of Brunkeberg||brunkeberg
5|Battle of Hemmingstedt||hemmingstedt
`,
nope:{
 'waterloo|austerlitz|trafalgar':'Napoleonic &mdash; centuries later.',
 'thermopylae|cannae|actium':'Ancient &mdash; before the Middle Ages.',
 'helms deep|pelennor fields|blackwater':'Fiction!'
}},

{id:'asiabattles', cat:'Wars & Battles', q:'Name a battle fought in Asia before 1900', hint:'From the Middle East to Japan',
list:`
1|Battle of Red Cliffs||red cliffs;chibi
1|Battle of Sekigahara||sekigahara
1|Battle of Gaugamela||gaugamela
2|Battle of Talas||talas
2|First Battle of Panipat||panipat;first panipat
2|Third Battle of Panipat||third panipat
2|Battle of Plassey||plassey;palashi
2|Battle of Ain Jalut||ain jalut
2|Battle of Manzikert||manzikert
2|Battle of Nagashino||nagashino
2|Battle of Okehazama||okehazama
2|Battle of Dan-no-ura||dan no ura
2|Battle of Myeongnyang||myeongnyang
2|Battle of Hydaspes||hydaspes
2|Battle of Kadesh||kadesh
2|Battle of Hattin||hattin
2|Battle of al-Qadisiyyah||qadisiyyah;qadisiya
3|Battle of Gaixia||gaixia
3|Battle of Changping||changping
3|Battle of Feishui||feishui;fei river
3|Battle of Yamen||yamen
3|Tumu Crisis||tumu
3|Battle of Talikota||talikota
3|Battle of Haldighati||haldighati
3|Battles of Tarain|Second Battle of Tarain|tarain
3|Battle of Buxar||buxar
3|Battle of Assaye||assaye
3|Battle of Ichi-no-Tani||ichi no tani
3|Battles of Kawanakajima||kawanakajima
3|Battle of Sarhu||sarhu
3|Battle of Shanhai Pass||shanhai pass
3|Battle of the Yalu River (1894)|Battle of the Yalu River (1894)|yalu
3|Battle of Hansan Island||hansan
3|Battle of Noryang||noryang
3|Battle of Yarmouk||yarmouk
3|Battle of Badr||badr
3|Battle of Karbala||karbala
3|Battle of Chaldiran||chaldiran
3|Battle of Ankara||ankara
3|Siege of Baghdad (1258)|Siege of Baghdad (1258)|baghdad 1258
3|Battle of Köse Dağ||kose dag
3|Battle of Bach Dang (938)|Battle of Bạch Đằng (938)|bach dang 938
3|Battle of Ngọc Hồi-Đống Đa||dong da
3|Battle of Kurikara||kurikara
3|Battle of Uji (1180)|Battle of Uji (1180)|uji
3|Siege of Osaka||osaka
3|Battle of Shiroyama||shiroyama
3|Battle of Toba–Fushimi||toba fushimi
3|Battle of Hakodate||hakodate
3|Battle of Pyongyang (1894)|Battle of Pyongyang (1894)|pyongyang
3|Battle of Weihaiwei||weihaiwei
4|Battle of Muye||muye
4|Battle of Chengpu||chengpu
4|Battle of Maling||maling
4|Battle of Julu||julu
4|Battle of Baideng||baideng
4|Battle of Mobei||mobei
4|Battle of Kunyang||kunyang
4|Battle of Guandu||guandu
4|Battle of Yiling||yiling;xiaoting
4|Battle of Hulao||hulao
4|Battle of Xiangyang||xiangyang
4|Battle of Lake Poyang||poyang
4|Battle of Ningyuan||ningyuan
4|Battle of Song-Jin||songjin
4|Battle of Salsu||salsu
4|Battle of Ansi||ansi
4|Battle of Hwangsanbeol||hwangsanbeol
4|Battle of Gwiju||gwiju
4|Battle of Haengju||haengju
4|Siege of Jinju (1593)|Siege of Jinju (1593)|jinju
4|Battle of Mikatagahara||mikatagahara
4|Battle of Anegawa||anegawa
4|Battle of Yamazaki||yamazaki
4|Battle of Shizugatake||shizugatake
4|Battle of Kōnodai||konodai
4|Battle of Kawagoe Castle||kawagoe
4|Battle of Itsukushima||itsukushima
4|Battle of Minatogawa||minatogawa
4|Mongol invasions of Japan||kamikaze;bun'ei;koan;hakata bay
4|Battle of Kalinga|Kalinga War|kalinga
4|Battle of the Ten Kings||ten kings
4|Battle of Takkolam||takkolam
4|Battle of Koppam||koppam
4|Battle of Khanwa||khanwa
4|Second Battle of Panipat||second panipat
4|Battle of Chausa||chausa
4|Battle of Kannauj||kannauj
4|Battle of Samugarh||samugarh
4|Battle of Karnal||karnal
4|Battle of Wandiwash||wandiwash
4|Battle of Seringapatam|Siege of Seringapatam (1799)|seringapatam
4|Battle of Chillianwala||chillianwala
4|Battle of Gujrat||gujrat
4|Siege of Lucknow||lucknow
4|Battle of Maiwand||maiwand
4|Battle of Saragarhi||saragarhi
4|Battle of Nahavand||nahavand
4|Battle of Nineveh (627)|Battle of Nineveh (627)|nineveh 627
4|Battle of Didgori||didgori
4|Battle of Avarayr||avarayr
4|Battle of Marj Dabiq||marj dabiq
5|Battle of Herat (1270)||herat
5|Battle of Parwan||parwan
5|Battle of the Indus||indus
5|Siege of Samarkand (1220)||samarkand
5|Battle of Ngasaunggyan||ngasaunggyan
5|Battle of Nong Sarai||nong sarai
`,
nope:{
 'waterloo|hastings|agincourt':'Wrong continent &mdash; that\'s Europe.',
 'stalingrad|midway|iwo jima|okinawa':'After 1900 &mdash; World War II.',
 'thermopylae':'Fought in Greece &mdash; Europe, just barely!'
}},

{id:'crusadebattles', cat:'Wars & Battles', q:'Name a battle or siege of the Crusades', hint:'Holy Land, Iberia, the Baltic and beyond, 1095&ndash;1500',
list:`
1|Siege of Jerusalem (1099)|Siege of Jerusalem (1099)|jerusalem;jerusalem 1099
1|Battle of Hattin||hattin
1|Siege of Acre (1189–1191)|Siege of Acre (1189–1191)|acre
2|Siege of Antioch||antioch
2|Battle of Arsuf||arsuf
2|Sack of Constantinople (1204)|Sack of Constantinople|constantinople 1204
2|Battle of Montgisard||montgisard
2|Battle of Dorylaeum (1097)|Battle of Dorylaeum (1097)|dorylaeum
2|Siege of Jerusalem (1187)|Siege of Jerusalem (1187)|jerusalem 1187
2|Battle of Las Navas de Tolosa||las navas de tolosa
2|Battle on the Ice||lake peipus
2|Battle of Grunwald||grunwald
3|Battle of Ascalon||ascalon
3|Battle of Jaffa (1192)|Battle of Jaffa (1192)|jaffa
3|Siege of Nicaea||nicaea
3|Battle of Harran||harran
3|Battle of Ager Sanguinis||ager sanguinis;field blood
3|Battle of Inab||inab
3|Siege of Damascus (1148)|Siege of Damascus (1148)|damascus
3|Battle of La Forbie||la forbie;harbiyah
3|Battle of Al Mansurah||mansurah;mansoura
3|Battle of Fariskur||fariskur
3|Battle of Nicopolis||nicopolis
3|Battle of Varna||varna
3|Battle of Muret||muret
3|Siege of Zara||zara;zadar
3|Siege of Damietta (1218–1219)|Siege of Damietta (1218–1219)|damietta
3|Siege of Tunis (1270)|Eighth Crusade|tunis
3|Siege of Acre (1291)|Siege of Acre (1291)|fall acre;acre 1291
3|Fall of Tripoli (1289)|Fall of Tripoli (1289)|tripoli
3|Siege of Edessa (1144)|Siege of Edessa (1144)|edessa
3|Siege of Lisbon||lisbon
3|Massacre at Béziers||beziers
3|Siege of Carcassonne (1209)|Siege of Carcassonne (1209)|carcassonne
3|Siege of Montségur||montsegur
4|Battle of Cresson||cresson
4|Siege of Kerak||kerak
4|First Battle of Ramla||ramla
4|Battle of Tell Danith||tell danith
4|Battle of Hab||hab
4|Battle of Azaz (1125)|Battle of Azaz (1125)|azaz
4|Battle of Mersivan||mersivan
4|Battle of Heraclea (1101)|Battle of Heraclea (1101)|heraclea
4|Battle of Myriokephalon||myriokephalon
4|Battle of Iconium (1190)|Battle of Iconium (1190)|iconium
4|Battle of Al-Babein||al babein
4|Siege of Tyre (1124)|Siege of Tyre (1124)|tyre
4|Siege of Sidon (1110)||sidon
4|Mahdia campaign||mahdia
4|Battle of Saule||saule
4|Battle of Durbe||durbe
4|Battle of Rudau||rudau
4|Battle of Lyndanisse||lyndanisse
4|Siege of Rhodes (1480)|Siege of Rhodes (1480)|rhodes
4|Siege of Belgrade (1456)|Siege of Belgrade (1456)|belgrade
4|Battle of Alarcos||alarcos
4|Siege of Seville||seville
4|Granada War||granada
5|Siege of Shaizar||shaizar
5|Battle of Lake Huleh||huleh
5|Battle of Marj Ayyun||marj ayyun
5|Battle of Jacob's Ford||jacobs ford;vadum jacob
5|Battle of Belvoir Castle||belvoir
`,
nope:{
 'thermopylae|cannae':'Ancient &mdash; long before the Crusades.',
 'kingdom heaven':'A film (about Balian and Jerusalem, 1187) &mdash; name the battle!',
 'hastings|agincourt':'Medieval, yes &mdash; but not a crusade.'
}}
);

/* Dug Up — more prompts: the modern world */
PROMPT_DATA.push(
{id:'treaties', cat:'Modern History', q:'Name a famous treaty or peace agreement', hint:'Any era',
list:`
1|Treaty of Versailles||versailles
1|Peace of Westphalia||westphalia
1|Treaty of Paris (1783)|Treaty of Paris (1783)|paris 1783
2|Treaty of Tordesillas||tordesillas
2|Treaty of Utrecht||utrecht
2|Treaty of Ghent||ghent
2|Treaty of Brest-Litovsk||brest litovsk
2|Treaty of Nanking||nanking;nanjing
2|Treaty of Kiel||kiel
2|Treaty of Waitangi||waitangi
2|Treaty of Guadalupe Hidalgo||guadalupe hidalgo
2|Treaty of Rome||rome treaty
2|Maastricht Treaty||maastricht
2|Congress of Vienna||vienna 1815
2|Molotov–Ribbentrop Pact||molotov ribbentrop;nazi soviet pact
2|North Atlantic Treaty||nato treaty;washington treaty
2|Warsaw Pact
2|Camp David Accords||camp david
2|Good Friday Agreement||belfast agreement;good friday
2|Oslo Accords||oslo
2|Treaty on the Non-Proliferation of Nuclear Weapons||non proliferation;npt
2|Egyptian–Hittite peace treaty||kadesh treaty;egyptian hittite treaty
3|Treaty of Trianon||trianon
3|Treaty of Sèvres||sevres
3|Treaty of Lausanne||lausanne
3|Treaty of Verdun||verdun 843
3|Treaty of Troyes||troyes
3|Treaty of Brétigny||bretigny
3|Peace of Ryswick||ryswick;rijswijk
3|Treaty of Aix-la-Chapelle (1748)|Treaty of Aix-la-Chapelle (1748)|aix la chapelle
3|Treaty of Hubertusburg||hubertusburg
3|Peace of Pressburg|Peace of Pressburg (1805)|pressburg
3|Treaties of Tilsit||tilsit
3|Treaty of Amiens||amiens
3|Treaty of Campo Formio||campo formio
3|Treaty of Fontainebleau (1814)|Treaty of Fontainebleau (1814)|fontainebleau
3|Treaty of Frankfurt (1871)|Treaty of Frankfurt (1871)|frankfurt
3|Treaty of Portsmouth||portsmouth
3|Treaty of Shimonoseki||shimonoseki
3|Treaty of Rapallo (1922)|Treaty of Rapallo (1922)|rapallo
3|Locarno Treaties||locarno
3|Kellogg–Briand Pact||kellogg briand
3|Dayton Agreement||dayton
3|Antarctic Treaty System||antarctic treaty
3|Outer Space Treaty||outer space
3|Treaty of Tianjin||tianjin;tientsin
3|Treaty of Aigun||aigun
3|Convention of Kanagawa||kanagawa
3|Treaty of San Stefano||san stefano
3|Congress of Berlin||berlin 1878
3|Treaty of London (1839)|Treaty of London (1839)|scrap paper;london 1839
3|Treaty of Union|Treaty of Union|acts union;union 1707
3|Treaty of Lisbon||lisbon
3|Jay Treaty||jay
3|Louisiana Purchase||louisiana
3|Adams–Onís Treaty||adams onis;transcontinental treaty
3|Treaty of Paris (1763)|Treaty of Paris (1763)|paris 1763
3|Treaty of Paris (1898)|Treaty of Paris (1898)|paris 1898
3|Treaty of Nerchinsk||nerchinsk
3|Peace of Augsburg||augsburg
3|Treaty of Roskilde||roskilde
3|Treaty of Wedmore||wedmore
3|Treaty of Saint-Germain-en-Laye (1919)|Treaty of Saint-Germain-en-Laye (1919)|saint germain
3|Convention of Moss||moss convention;convention moss
3|Helsinki Accords||helsinki final act
3|Paris Peace Accords||paris peace accords
3|Treaty of Neuilly-sur-Seine||neuilly
3|Munich Agreement||munich
3|Atlantic Charter
4|Treaty of Karlowitz||karlowitz
4|Treaty of Passarowitz||passarowitz
4|Treaty of Küçük Kaynarca||kucuk kaynarca;kuchuk kainarji
4|Treaty of Adrianople (1829)|Treaty of Adrianople (1829)|adrianople
4|Treaty of Paris (1856)|Treaty of Paris (1856)|paris 1856
4|Treaty of Zurich||zurich
4|Treaty of Prague (1866)|Peace of Prague (1866)|prague 1866
4|Treaty of Constantinople (1913)||constantinople 1913
4|Treaty of Bucharest (1913)|Treaty of Bucharest (1913)|bucharest
4|Treaty of Riga||riga
4|Treaty of Tartu (Russian–Estonian)|Treaty of Tartu (Russian–Estonian)|tartu
4|Treaty of Kars||kars
4|Treaty of Stolbovo||stolbovo
4|Treaty of Nystad||nystad;uusikaupunki
4|Treaty of Westminster (1654)|Treaty of Westminster (1654)|westminster
4|Treaty of Breda (1667)|Treaty of Breda (1667)|breda
4|Treaty of Dover||dover
4|Treaty of Nijmegen||nijmegen
4|Treaty of the Pyrenees||pyrenees
4|Peace of Lodi||lodi
4|Treaty of Cateau-Cambrésis||cateau cambresis
4|Treaty of Madrid (1526)|Treaty of Madrid (1526)|madrid
4|Treaty of Arras (1435)|Treaty of Arras (1435)|arras
4|Treaty of Windsor (1386)|Treaty of Windsor (1386)|windsor
4|Treaty of Alcáçovas||alcacovas
4|Treaty of Zaragoza||zaragoza;saragossa
4|Treaty of Paris (1259)|Treaty of Paris (1259)|paris 1259
4|Treaty of Northampton||northampton
4|Treaty of Perth||perth
4|Treaty of Falaise||falaise
4|Treaty of Fort Laramie (1868)|Treaty of Fort Laramie (1868)|fort laramie
4|Treaty of Greenville||greenville
4|Treaty of Wanghia||wanghia
4|Treaty of Whampoa||whampoa
4|Treaty of Ganghwa||ganghwa
4|Treaty of Gandamak||gandamak
4|Treaty of Vereeniging||vereeniging
4|Treaty of Wuchale||wuchale
5|Treaty of Lutatius||lutatius
5|Treaty of Apamea||apamea
5|Treaty of Brundisium||brundisium
5|Treaty of Misenum||misenum
5|Peace of Callias||callias
5|Peace of Nicias||nicias
5|Peace of Antalcidas||kings peace;antalcidas
5|Treaty of Andelot||andelot
5|Treaty of Meerssen||meerssen
5|Treaty of Ribemont||ribemont
5|Treaty of Saint-Clair-sur-Epte||saint clair sur epte
5|Peace of Constance||constance
5|Treaty of Melno||melno
5|Peace of Thorn (1411)|Peace of Thorn (1411)|thorn 1411
5|Peace of Szeged||szeged
5|Kalmar Union||kalmar union
6|Treaty of Noteborg||noteborg;oreshek
6|Treaty of Teusina||teusina
6|Treaty of Knäred||knared
6|Treaty of Brömsebro (1645)|Treaty of Brömsebro (1645)|bromsebro
6|Treaty of Copenhagen (1660)|Treaty of Copenhagen (1660)|copenhagen 1660
6|Treaty of Fredrikshamn||fredrikshamn;hamina
`,
nope:{
 'declaration independence|magna carta|bill rights':'A founding document &mdash; not a treaty between powers.',
 'un charter|united nations':'The UN Charter is close &mdash; but this dig wants a named peace treaty or pact.',
 'eu|nato|united nations':'An organisation &mdash; what was the treaty that founded it?'
}},

{id:'documents', cat:'Modern History', q:'Name a famous historical document', hint:'Charters, declarations, laws and manifestos',
list:`
1|Magna Carta
1|Declaration of Independence|United States Declaration of Independence|declaration independence
1|United States Constitution||us constitution;american constitution;constitution
2|Rosetta Stone
2|Code of Hammurabi||hammurabi
2|Domesday Book||domesday
2|Emancipation Proclamation||emancipation
2|The Communist Manifesto||communist manifesto
2|Ninety-five Theses||95 theses
2|Declaration of the Rights of Man and of the Citizen||rights man citizen;droits homme
2|Bill of Rights 1689||english bill rights
2|United States Bill of Rights||bill rights
2|Universal Declaration of Human Rights||udhr;human rights declaration
2|Gettysburg Address||gettysburg address
2|Mayflower Compact||mayflower compact
2|Constitution of Norway||norwegian constitution;eidsvoll;grunnloven
3|Edict of Nantes||nantes
3|Golden Bull of 1356||golden bull
3|Balfour Declaration||balfour
3|The Federalist Papers||federalist papers;federalist
3|Common Sense|Common Sense|common sense
3|Twelve Tables
3|Edicts of Ashoka||ashoka edicts
3|Cyrus Cylinder
3|Dead Sea Scrolls
3|Zimmermann Telegram||zimmermann
3|Monroe Doctrine||monroe
3|Marshall Plan
3|Pentagon Papers
3|J'Accuse...!||j accuse;jaccuse
3|Act of Supremacy 1534||act supremacy
3|Petition of Right
3|Instrument of Government (1653)|Instrument of Government (1653)|instrument government
3|Inter caetera||inter caetera
3|Donation of Constantine
3|Articles of Confederation
3|Northwest Ordinance
3|Declaration of Arbroath||arbroath
3|Royal Proclamation of 1763||royal proclamation
3|Edict of Milan||milan
3|Edict of Worms (1521)|Edict of Worms|worms
3|Treaty of Versailles
3|Book of Kells
3|Gutenberg Bible
3|Wannsee Conference||wannsee protocol
3|Atlantic Charter
4|Statute of Westminster 1931||statute westminster
4|Acts of Union 1707||acts union
4|Pragmatic Sanction of 1713||pragmatic sanction
4|Napoleonic Code||code napoleon;civil code
4|Justinian's Code|Corpus Juris Civilis|corpus juris civilis;justinian code
4|Code of Ur-Nammu||ur nammu
4|Constitution of Medina||medina charter
4|Charter of Liberties||charter liberties
4|Provisions of Oxford||provisions oxford
4|Habeas Corpus Act 1679||habeas corpus
4|Declaration of Breda||breda
4|Virginia Declaration of Rights||virginia declaration
4|Declaration of Sentiments||seneca falls
4|Fourteen Points||fourteen points;14 points
4|Long Telegram||kennan
4|Sinews of Peace||iron curtain speech;sinews peace
4|Edict of Fontainebleau||fontainebleau edict
4|Alhambra Decree||alhambra decree
4|Unam sanctam||unam sanctam
4|Dictatus papae||dictatus papae
4|Concordat of Worms||concordat worms
4|Pact of Umar||pact umar
4|Rights of Man|Rights of Man|paine rights man
4|A Vindication of the Rights of Woman||vindication rights woman
4|Treaty of Tordesillas
4|Dutch Act of Abjuration|Act of Abjuration|act abjuration
4|Union of Utrecht
5|Mainz Psalter
5|Sachsenspiegel
5|Russkaya Pravda
5|Grágás
5|Gulating Law|Gulaþing Law|gulating;gulathing
5|Landslov||landslov;landsloven
5|Jyske Lov||jutland law
5|Twelve Articles||twelve articles
5|Leges Henrici Primi
5|Assize of Clarendon||clarendon
5|Constitutions of Clarendon||constitutions clarendon
5|Ordinance of Labourers 1349||ordinance labourers
5|Statute of Rhuddlan||rhuddlan
5|Edict of Torda||torda
5|Warsaw Confederation||warsaw confederation
6|Golden Liberty|Golden Liberty|golden liberty;nihil novi
6|Henrician Articles||henrician articles
`,
nope:{
 'harry potter|bible|quran':'A famous book &mdash; but this dig is after charters, laws and declarations.',
 'mona lisa':'A painting &mdash; not a document!'
}}
);

/* Daily rotation — frozen seasons of prompt ids, played back to back, seven per dig (Feature Spec 02).
   Dig #1 = first seven ids of season 1. Published digs never change as long as you only ADD ids at the END of the
   LAST season. See context/02-architecture.md "Slik legger du til et nytt prompt". Freeze the next season with:
   node tools/check.mjs --freeze-season */
const ROTATION = [
[ // season 1 — seed 'dugup-order-v1'
  'wars','space','hre','polis','medthinkers','latam','koreanpeople',
  'libraries','epics','coldwar','medbattles','greekleaders','scots','mesogods',
  'byzantine','chinapeople','russrev','enlight','civs','asiabattles','capitals',
  'inv1','hoaxes','pope','traderoutes','rome','soviet','china',
  'reformation','finds','ottoman','ukpm','ww2cmd','heroes','thegreat',
  'korea','architects','worship','spies','pyramids','commanders','womensci',
  'crusades','unsg','engmon','mughal','republic','shipsx','outlaws',
  'sculptures','chinaemp','norsegods','speeches','crusadebattles','bridges','provinces',
  'classwriters','spain','revs','treasures','shogun','hyw','empires',
  'aviation','vikings','romanbuild','documents','renaissance','tsars','troy',
  'olympics','japanemp','polar','usvp','amrev','hellenistic','paintings',
  'khans','frenchrev','queens','samurai','romebattles','pharaoh','pandemics',
  'medwomen','novels','canals','decolon','egyptgods','wives','ruins',
  'suffrage','indiapeople','napoleon','animals','persia','wrecks','impress',
  'founders','greekmonu','houses','walls','greekbattles','japan','maths',
  'romangods','playwrights','universities','moon','wonders','britindep','nicknames',
  'treaties','naval','poets','india','hansa','scripts','expeditions',
  'firstlady','arthur','norway','acw','islamic','scientists','knights',
  'chphil','islamrulers','lost','mesopotamia','trials','greekphil','palaces',
  'disasters','ww1','france','ancientwomen','seasia','aztecgods','assassinations',
  'africa','archaeologists','composers',
],
[ // season 2 — seed 'dugup-order-v2', frozen 2026-11-22
  'republic','amrev','universities','samurai','rome','reformation','hyw',
  'usvp','mesogods','islamrulers','expeditions','chinapeople','maths','impress',
  'disasters','ancientwomen','palaces','thegreat','ruins','decolon','commanders',
  'crusades','russrev','composers','hellenistic','japan','bridges','spain',
  'africa','acw','troy','firstlady','trials','enlight','provinces',
  'scientists','korea','engmon','traderoutes','unsg','ww1','capitals',
  'medthinkers','greekleaders','playwrights','ukpm','byzantine','koreanpeople','norway',
  'aztecgods','asiabattles','treaties','pharaoh','islamic','womensci','libraries',
  'china','lost','outlaws','houses','romebattles','khans','civs',
  'shipsx','pope','novels','suffrage','egyptgods','animals','japanemp',
  'greekmonu','wars','hre','revs','epics','hansa','inv1',
  'mughal','wonders','coldwar','crusadebattles','chinaemp','wives','greekphil',
  'knights','heroes','archaeologists','founders','scripts','canals','greekbattles',
  'renaissance','shogun','queens','moon','empires','aviation','polis',
  'latam','naval','classwriters','arthur','chphil','medwomen','scots',
  'hoaxes','olympics','finds','frenchrev','ottoman','wrecks','sculptures',
  'medbattles','speeches','india','tsars','mesopotamia','space','assassinations',
  'paintings','norsegods','walls','napoleon','vikings','pyramids','seasia',
  'britindep','france','spies','poets','ww2cmd','romanbuild','polar',
  'documents','indiapeople','nicknames','worship','pandemics','romangods','architects',
  'treasures','soviet','persia',
],
];



