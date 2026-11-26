/* Dug Up — prompt data.
   Each line: tier|Display name|Wikipedia title (blank = same as display)|aliases separated by ;
   tier 1 = most common (Topsoil) ... 6 = rarest (Forgotten by History).
   Offline tiers are estimates of how widely read each topic is on Wikipedia. */
const PROMPT_DATA = [
{id:'rome', cat:'Rulers', q:'Name a Roman emperor', hint:'From Augustus to the fall of the West, 476 AD',
list:`
1|Augustus||octavian;octavius;augustus caesar;caesar augustus;gaius julius caesar octavianus;gaius octavius thurinus
1|Nero||nero claudius caesar augustus germanicus;nero caesar
1|Caligula||gaius julius caesar augustus germanicus
1|Marcus Aurelius||aurelius;marc aurel
2|Constantine the Great||constantine;constantine 1;saint constantine the great;flavius valerius constantinus
2|Hadrian
2|Tiberius
2|Claudius||tiberius claudius caesar augustus germanicus
2|Trajan||traianus;marcus ulpius traianus
2|Commodus||lucius aurelius commodus antoninus
3|Vespasian
3|Diocletian
3|Caracalla||lucius septimius bassianus
3|Septimius Severus||severus;septimius
3|Titus
3|Domitian||titus flavius domitianus
3|Elagabalus||heliogabalus
4|Antoninus Pius||antoninus
4|Nerva
4|Galba
4|Otho||marcus salvius otho
4|Vitellius
4|Theodosius I||theodosius;theodosius the great
4|Julian|Julian (emperor)|julian the apostate;flavius claudius julianus
4|Aurelian
4|Romulus Augustulus||romulus augustus;romulus;augustulus
4|Lucius Verus||verus;lucius aurelius verus
4|Valerian|Valerian (emperor)|publius licinius valerianus
4|Severus Alexander||alexander severus;m. aurelius severus alexander augustus;marcus aurelius severus alexander
4|Maximinus Thrax||maximinus;maximinus 1
4|Gallienus||publius licinius egnatius gallienus
4|Valentinian I||valentinian
4|Gordian III||gordian;gordianus iii
4|Philip the Arab||philip;philip 1;philippus arabs;marcus julius philippus
4|Decius||trajan decius
5|Pertinax
5|Didius Julianus||didius;julianus
5|Macrinus
5|Geta|Geta (emperor)|publius septimius geta
5|Gordian I
5|Claudius Gothicus||claudius 2
5|Probus|Probus (emperor)|marcus aurelius probus
5|Carus
5|Maximian||maximianus herculius
5|Galerius
5|Constantius I||constantius chlorus;chlorus;flavius constantius;flavius valerius constantius
5|Licinius
5|Maxentius
5|Constantius II||constantius
5|Jovian
5|Valens
5|Gratian||gratianus
5|Honorius|Honorius (emperor)|flavius augustus honorius
5|Arcadius
5|Theodosius II||theodosius the younger
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
6|Tacitus|Tacitus (emperor)|marcus claudius tacitus
6|Florianus||florian
6|Carinus
6|Numerian
6|Severus II||flavius valerius severus;valerius severus
6|Maximinus II||maximinus daza;maximinus daia
6|Constantine II|Constantine II (emperor)
6|Constans
6|Vetranio
6|Valentinian II
6|Constantius III
6|Petronius Maximus
6|Avitus
6|Majorian||julius valerius majorianus;maiorianus
6|Libius Severus
6|Anthemius
6|Olybrius
6|Glycerius
6|Julius Nepos||nepos
6|Marcian||marcianus
6|Leo I|Leo I (emperor)|leo;leo i the thracian
6|Zeno|Zeno (emperor)|zeno i;tarasicodissa
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
1|Abraham Lincoln||lincoln;abe lincoln;honest abe;great emancipator
1|Barack Obama||obama;barack
1|Donald Trump||trump;djt;donald j. trump, sr;potus 47
1|John F. Kennedy||kennedy;jfk;john kennedy
1|Joe Biden||biden;joseph robinette biden jr.;joseph r. biden, jr.
2|Franklin D. Roosevelt||fdr;roosevelt;franklin roosevelt
2|Thomas Jefferson||jefferson
2|Theodore Roosevelt||teddy roosevelt;teddy;theodore roosevelt
2|Ronald Reagan||reagan;ronald wilson reagan
2|Richard Nixon||nixon
2|George W. Bush||bush;george bush;dubya;bush jr;george walker bush;bush 43;george w;gw bush
2|Bill Clinton||clinton;william jefferson clinton
3|George H. W. Bush||bush sr;bush senior;bush 41;george bush senior;george bush sr;george herbert walker bush;ghwb;hw bush
3|Jimmy Carter||carter;james earl carter jr.;james e. carter, junior
3|Andrew Jackson||jackson
3|Dwight D. Eisenhower||eisenhower;ike
3|Harry S. Truman||truman
3|John Adams||adams
3|Woodrow Wilson||wilson
3|Ulysses S. Grant||grant
3|James Madison||madison
3|Lyndon B. Johnson||lbj;johnson;lyndon johnson
3|Gerald Ford||ford;gerald rudolph ford;jerry ford
4|James Monroe||monroe
4|John Quincy Adams||quincy adams;jqa;john q. adams
4|Herbert Hoover||hoover
4|Calvin Coolidge||coolidge
4|William McKinley||mckinley
4|Andrew Johnson
4|James K. Polk||polk;james knox polk
4|William Howard Taft||taft;william taft;howard taft
5|Martin Van Buren||van buren;old kinderhook
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
1|Henry VIII||henry, duke of york
1|Queen Victoria||victoria
1|Charles III||charles philip arthur george;charles windsor;charles mountbatten-windsor
2|Elizabeth I||virgin queen;gloriana;elizabeth of england
2|William the Conqueror||william 1;william conqueror;william bastard;william ii, duke of normandy;william ii of normandy;guillaume le bâtard
2|Richard III|Richard III of England|richard of gloucester
2|George III||george william frederick
2|Mary I|Mary I of England|bloody mary;mary tudor
3|Richard I|Richard I of England|richard lionheart;lionheart;richard lionhearted;coeur de lion;richard coeur de lion
3|Henry V|Henry V of England|henry of monmouth
3|Edward VIII||the duke of windsor;david windsor
3|George VI||albert, duke of york
3|John|John, King of England|king john;john lackland;king john of england;john i of england;john, duke of normandy
3|Charles I|Charles I of England
3|Charles II|Charles II of England
3|James I|James VI and I|james 6;james 6 1;james i and vi
3|Edward I|Edward I of England|longshanks;edward longshanks
3|Edward the Confessor||edward confessor;saint edward the confessor;st edward the confessor
3|Harold Godwinson||harold 2;harold
4|Henry VII|Henry VII of England|henry tudor;henry, earl of richmond
4|Edward III|Edward III of England|edward of windsor
4|Edward VI||edward tudor
4|Henry II|Henry II of England|henry fitzempress;henry plantagenet;henry curtmantle
4|William III|William III of England|william orange;william mary;william iii & ii;william ii of scotland;william ii and iii
4|Mary II|Mary II of England|mary ii of england
4|Anne|Anne, Queen of Great Britain|queen anne;anne of england
4|George V||george frederick ernest albert
4|Edward VII
4|Henry IV|Henry IV of England|henry bolingbroke;bolingbroke
4|Henry VI|Henry VI of England
4|James II|James II of England|james 7;james vii & ii;james, duke of york;james ii and vii;james stuart, duke of york
4|Edward II|Edward II of England|edward of caernarfon;edward of caernarvon;edward of carnarvon
4|George I|George I of Great Britain|george, elector of hanover;georg ludwig
4|George II|George II of Great Britain|georg august
4|Richard II|Richard II of England
4|Edward IV|Edward IV of England
4|George IV
4|William IV||william, duke of clarence
5|Henry III|Henry III of England
5|Edward V|Edward V of England
5|William II|William II of England|william rufus;rufus;william the red
5|Henry I|Henry I of England|henry beauclerc
5|Stephen|Stephen, King of England|stephen blois
5|Lady Jane Grey||jane grey;nine days queen;lady jane dudley
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
3|Lighthouse of Alexandria||pharos;pharos alexandria;lighthouse alexandria;lighthouse;great lighthouse
4|Statue of Zeus at Olympia||statue zeus;zeus statue;statue zeus olympia;zeus;zeus olympios
4|Temple of Artemis||temple artemis ephesus;artemision;artemis temple;temple artemis;temple of ephesus;artemis ephesia
5|Mausoleum at Halicarnassus||mausoleum halicarnassus;mausoleum mausolus;tomb mausolus;mausoleum;halicarnassus
`,
nope:{
 'colosseum|great wall china|great wall|stonehenge|petra|machu picchu|taj mahal|parthenon|acropolis|christ redeemer|chichen itza|sphinx|great sphinx|great sphinx giza':'Impressive &mdash; but not one of the original seven.'
}},

{id:'wives', cat:'Rulers', q:'Name one of Henry VIII\'s six wives', hint:'Divorced, beheaded, died&hellip;',
list:`
1|Anne Boleyn||boleyn;anne bullen
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
1|Neil Armstrong||armstrong;first man on the moon
2|Buzz Aldrin||aldrin;edwin aldrin;edwin buzz aldrin;edwin e. aldrin jr.
3|Alan Shepard||shepard;alan bartlett shepard, jr.;alan b. shepard jr.
3|Eugene Cernan||gene cernan;cernan
4|Pete Conrad||charles conrad;conrad;charles "pete" conrad jr.
4|Alan Bean||bean
4|John Young|John Young (astronaut)|young
4|Edgar Mitchell||mitchell
5|David Scott||dave scott;scott
5|Harrison Schmitt||jack schmitt;schmitt
6|James Irwin||jim irwin;irwin
6|Charles Duke||charlie duke;duke;charles moss duke jr.
`,
nope:{
 'michael collins|collins':'He orbited the Moon on Apollo 11 &mdash; but never set foot on it.',
 'yuri gagarin|gagarin':'First human in space &mdash; but he never went to the Moon.',
 'jim lovell|james lovell|lovell':'Flew to the Moon twice &mdash; never landed.',
 'laika':'A very good dog &mdash; but she only orbited Earth.'
}},

{id:'soviet', cat:'Modern History', q:'Name a leader of the Soviet Union', hint:'1922&ndash;1991',
list:`
1|Joseph Stalin||stalin;iosif dzhugashvili;ioseb besarionis dze jughashvili;iosif vissarionovich dzhugashvili;ioseb dzhugashvili
1|Vladimir Lenin||lenin;vladimir ulyanov;v. i. lenin;vladimir ilyich ulyanov;vladimir ilyich
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
1|Leif Erikson||leif eriksson;leif ericson;leif ericsson;leif;leif lucky;leifur eiríksson
1|Erik the Red||eric red;erik red;erik thorvaldsson;eirik raude
2|Harald Hardrada||harald hardrade;harald 3;harald sigurdsson;hardrada;harold iii of norway
2|Ivar the Boneless||ivar;ivar boneless;ivar beinlaus;ívarr inn beinlausi
2|Rollo||hrolf;rolf
2|Björn Ironside||bjorn ironside;bjorn;bjorn jarnsida
3|Cnut the Great|Cnut|canute;knut;cnut;knud;cnut of england
3|Harald Bluetooth||harald blatand;bluetooth;harold i of denmark;harald i of denmark;harald gormsson
3|Sweyn Forkbeard||svein forkbeard;sven forkbeard;forkbeard;sweyn;swein i of denmark;svend tveskæg
3|Olaf Tryggvason||olav tryggvason;tryggvason;olaf i of norway;olav i of norway;olaf trygvesson
3|Eric Bloodaxe||erik bloodaxe;eirik bloodaxe;bloodaxe;eric i of norway;eirik i of norway
3|Lagertha||ladgerda
4|Freydís Eiríksdóttir||freydis;freydis eiriksdottir
4|Halfdan Ragnarsson||halfdan
4|Ubba||ubbe;ubbe ragnarsson
4|Guthrum
4|Harald Fairhair||harald harfagre;fairhair;harald 1;harald finehair
4|Olaf II of Norway||saint olaf;olaf haraldsson;olav haraldsson;olav holy;olaf 2;olav 2;olaf holy;st olaf;st. olav;st olave
4|Sigurd Snake-in-the-Eye||sigurd snake eye;sigurd snake in eye
4|Egil Skallagrímsson||egil;egil skallagrimsson;egill skallagrimsson
4|Hrafna-Flóki Vilgerðarson||floki;hrafna floki;floki vilgerdarson;raven floki
5|Thorfinn Karlsefni||karlsefni;þorfinnr "karlsefni" þórðarson
5|Gudrid Thorbjarnardóttir||gudrid;guðríður þorbjarnardóttir
5|Bjarni Herjólfsson||bjarni;bjarni herjolfsson
5|Hastein||hasting;haesten;haestan;haesteinn
5|Thorkell the Tall||thorkell;thorkel the high
5|Sigurd the Crusader||sigurd jorsalfar;sigurd 1;sigurd crusader
5|Magnus Barefoot||magnus 3;magnus barelegs;magnús óláfsson (died 1103)
5|Gorm the Old||gorm;gorm inn gamli;gorm of denmark
5|Ingólfr Arnarson||ingolf arnarson;ingolfur arnarson;ingolfr
5|Gunnhild, Mother of Kings||gunnhild
6|Ingvar the Far-Travelled||ingvar
6|Naddodd||naddoddr
6|Garðar Svavarsson||gardar svavarsson;gardar
6|Ketill Flatnose||ketil flatnose;ketill flatnef;flatnose;ketill bjǫrnsson
6|Ohthere of Hålogaland||ohthere;ottar;voyage of ohthere
6|Sigurd the Stout||sigurd stout;sigurd hlodvirsson;sigurd hlodvisson
6|Thorfinn the Mighty||thorfinn mighty;thorfinn sigurdsson;thorfinn sigurdsson, earl of orkney
6|Eiríkr Hákonarson||erik hakonsson;eirik hakonsson;eric of hlathir;erik of hlathir;erik of lade
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
1|Ming dynasty||ming;ming china;ming empire;great ming
1|Qing dynasty||qing;ching;manchu;qing dynasties;great qing empire
1|Han dynasty||han;western han;eastern han;han china;former han dynasty
1|Tang dynasty||tang;tang china;tang empire;great tang
2|Song dynasty||song;sung;northern song;southern song;song china;song empire
2|Qin dynasty||qin;chin;qin empire
2|Yuan dynasty||yuan;empire of the great khan;yuan empire;great yuan;yuan china
3|Zhou dynasty||zhou;chou;western zhou;eastern zhou;zhou china;zhou kingdom;kingdom of zhou;state of zhou
3|Shang dynasty||shang;yin
3|Sui dynasty||sui;sui china;sui empire
4|Xia dynasty||xia;hsia
4|Jin dynasty (266–420)||jin;western jin;eastern jin;sima jin;jin dynasty (265-420);xijin
4|Northern Wei||tuoba wei;yuan wei
5|Jin dynasty (1115–1234)||jurchen jin;jurchen
5|Liao dynasty||liao;khitan;liao empire
5|Western Xia||xi xia;tangut;minyak;xixia
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
6|Chen dynasty||chen;southern chen dynasty
6|Western Liao||kara khitai;qara khitai;kara-khitan khanate;kara-khitans
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
2|Selim I||selim grim;yavuz selim;selim the stern;salim khan i
2|Abdul Hamid II||abdulhamid 2;abdulhamid;abdul hamid
3|Murad I||murat 1
3|Bayezid I||bayezid thunderbolt;yildirim bayezid;beyazit 1;bayazid 1;bajazet i
3|Mehmed VI||vahideddin;mehmed vahideddin;mehmet 6;mehmed vahdettin
3|Orhan||orhan gazi;orkhan;orhan ghazi;orhan i
3|Selim II||selim sot
3|Murad IV||murat 4
3|Mahmud II||mahmut 2
4|Murad II||murat 2
4|Bayezid II||beyazit 2;bayazid 2;bajazet ii
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
5|Osman II||genc osman;osman the young;othman ii
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
2|Aurangzeb||alamgir;alamgir 1;aurangzib;awrangzeb;muhi al-din muhammad
3|Humayun
3|Jahangir||jahangeer;nur-ud-din mohammad salim
4|Bahadur Shah Zafar||bahadur shah 2;zafar;bahadur shah
5|Bahadur Shah I||bahadur shah 1;muazzam;shah alam i;muhammad mu'azzam
5|Muhammad Shah||mohammad shah;rangila;muhammad shah rangila
5|Shah Alam II||shah alam;shah alam 2
5|Farrukhsiyar||farrukh siyar
5|Akbar II||akbar shah 2
6|Jahandar Shah
6|Rafi ud-Darajat||rafi ud darajat;rafi ul-darjat
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
1|Battle of Waterloo||waterloo;battle of mont-saint-jean
1|Battle of Austerlitz||austerlitz;three emperors
1|Battle of Trafalgar||trafalgar
2|Battle of Borodino||borodino;battle of the moskowa;bataille de la moskowa
2|Battle of Leipzig||leipzig;nations
2|Battle of the Nile||nile;aboukir bay;abukir bay
3|Battle of Jena–Auerstedt||jena;auerstedt;jena auerstedt;jena auerstadt;battle of iena
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
5|Battle of Paris (1814)||paris;battle of montmartre
5|Battle of Toulouse (1814)||toulouse
5|Battle of Hanau||hanau
5|Battle of Kulm||kulm
5|Battle of the Katzbach||katzbach
5|Battle of Maloyaroslavets||maloyaroslavets
5|Battle of Krasnoi||krasnoi;krasny
5|Battle of Bailén||bailen;baylen
5|Siege of Toulon (1793)||toulon;fall of toulon
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
1|Soviet Union||ussr;cccp;soviets;soviet russia;union soviet socialist republics;united soviet socialist republics;sssr;all-union
1|Yugoslavia||kingdom yugoslavia;sfr yugoslavia;former yugoslav
1|Czechoslovakia||politics of czechoslovakia
1|East Germany||gdr;ddr;german democratic republic;deutsche demokratische republik;democratic republic of germany
2|West Germany||frg;brd;bonn republic;federal republic of germany (1949-1990)
2|Austria-Hungary||austria hungary;austro hungarian empire;austro hungary;austrohungary;dual monarchy;austro hungarian;austrian-hungarian empire;dual state;austria-hungarian;austria-hungarian empire
2|Ottoman Empire||ottoman;ottomans;ottoman turkey;turkish empire;sublime ottoman state;osman empire;osmanlı i̇mparatorluğu
2|Russian Empire||tsarist russia;imperial russia;empire of russia;tsarist regime;tsarist russian empire;pre-revolutionary russia
2|Prussia||kingdom prussia;free state prussia;prussian state
2|South Vietnam||republic vietnam;south vietnamese;vnch
2|Nazi Germany||third reich;greater german reich;nazi regime;hitler's germany;thousand year reich;german nazi
3|Rhodesia||southern rhodesia;republic of rhodesia
3|Zaire||republic zaire
3|Persia|Pahlavi Iran|imperial state of iran;pahlavi empire;pahlavi government;imperial state of persia
3|Burma|Myanmar|birmania;mayanmar
3|Siam|Thailand|kingdom of thailand;thailand;tailand;thailan
3|Ceylon|Dominion of Ceylon
3|North Vietnam||democratic republic vietnam;north vietnamese
3|German Empire||kaiserreich;imperial germany;second reich;empire of germany;second german empire;deutsches kaiserreich
3|Weimar Republic||weimar;weimar germany;german republic;weimarer republik
3|Vichy France||vichy;french state;vichysm;vichyites;vichyite
3|Qing dynasty||qing;qing china;qing empire;manchu china;great qing;qing dynasties
4|Manchukuo||manchuria;manchoukuo;empire of manchuria;state of manchuria
4|United Arab Republic||uar
4|North Yemen||yemen arab republic;northern yemen
4|South Yemen||peoples democratic republic yemen;pdry;southern yemen;democratic yemen;pdr yemen;yemen democratic republic
4|Tanganyika
4|Zanzibar|People's Republic of Zanzibar|sultanate zanzibar
4|Biafra||republic biafra
4|Ethiopian Empire||abyssinia;empire of ethiopia;abyssinian empire;kingdom of ethiopia;imperial ethiopia
4|Korean Empire||daehan empire;empire of korea;great korean empire
4|Empire of Japan||imperial japan;empire japan;imperial japanese;dai nippon;japanese expansion;japanese imperial
4|Kingdom of Italy||fascist italy;italian monarchy
4|Free City of Danzig||danzig;free state of danzig
4|East Pakistan
4|Democratic Kampuchea||kampuchea;khmer rouge rule of cambodia;pol pot regime;khmer rouge regime;cambodia under pol pot
4|Independent State of Croatia||ndh;fascist croatia
5|Kingdom of Egypt
5|Kingdom of Iraq||hashemite iraq;hashemite kingdom of iraq
5|Kingdom of Hejaz||hejaz;hijaz
5|Dominion of Newfoundland||newfoundland
5|Sikkim||kingdom sikkim
5|Hyderabad State||hyderabad deccan;nizamate of hyderabad;nizam state;princely state of hyderabad
5|Orange Free State||transorangia
5|South African Republic||transvaal;transvaal republic;zuid-afrikaansche republiek;zuid afrikaanse republiek
5|Republic of Dahomey||dahomey
5|Republic of Upper Volta||upper volta
5|Central African Empire
5|Grand Duchy of Finland||grand principality of finland;russian finland
5|Khmer Republic
5|Zimbabwe Rhodesia
5|Transkei||republic of transkei
5|Saar Protectorate||saar
5|Free Territory of Trieste||trieste
5|Kingdom of Bohemia||bohemia;bohemian kingdom
6|Tuvan People's Republic||tuva;tannu tuva;tuvinian people's republic
6|Free State of Fiume||fiume;free state of rijeka
6|Bophuthatswana||republic of bophuthatswana
6|Ciskei
6|Venda
6|Hatay State||hatay;republic hatay
6|Tangier International Zone||tangier;tangier zone
6|Mali Federation
6|Federation of Malaya||malaya;persekutuan tanah melayu
6|Kingdom of Libya||united kingdom of libya
6|Carpatho-Ukraine||carpathian ukraine;republic of carpathian ukraine;republic of carpatho-ukraine;trans-carpathian ukraine (1938-1939)
6|Slovak Republic (1939–1945)||first slovak republic;slovak state;slovak republic (1939–45);fascist slovakia;wwii slovak republic;slovak republic
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
1|Aristotle||stagirite;aristotelis
2|Pythagoras
2|Diogenes||diogenes sinope;diogenes cynic
2|Epicurus||garden of epicurus
2|Heraclitus||heraclitean;herakleitos;heraklit
3|Thales of Miletus||thales
3|Zeno of Elea||zeno;zeno elea
3|Zeno of Citium||zeno citium;zeno stoic
3|Democritus
3|Parmenides
3|Archimedes
3|Hypatia
4|Anaximander||anaximandros
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
5|Pyrrho||pyrrho elis;pyrrhonists
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
6|Diogenes of Apollonia||diogenes apolloniates
6|Timon of Phlius||timon
6|Arcesilaus
6|Crantor
6|Menippus
6|Bion of Borysthenes||bion;bion the borysthenite
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
1|Tutankhamun||tutankhamen;king tut;tut;tutankhamon;racial identity of tutankhamun;nebkheperure
1|Ramesses II||ramesses;ramses;rameses;ramses 2;rameses 2;ramesses great;ozymandias
1|Cleopatra||cleopatra 7;cleopatra 7 philopator
2|Khufu||cheops
2|Akhenaten||akhenaton;amenhotep 4;ikhnaton;amenophis iv;echnaton
2|Hatshepsut||hatchepsut
3|Nefertiti||nofretete
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
4|Ramesses I||ramses 1;paramessu
4|Ramesses III||ramses 3
4|Merneptah
4|Horemheb
4|Ay|Ay (pharaoh)
4|Smenkhkare
4|Ahmose I||ahmose;amosis;amasis i
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
5|Hor-Aha||aha;hor aha;athothis
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
6|Shabaka||shabako;sabaco
6|Ramesses VI||ramses 6
6|Ramesses IX||ramses 9
6|Ramesses XI||ramses 11
6|Apepi||apophis;apepi i
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
1|Peter the Great||peter;peter 1;pyotr 1;pyotr velikiy
1|Catherine the Great||catherine;catherine 2;ekaterina 2;yekaterina 2;sophie of anhalt-zerbst
1|Ivan the Terrible||ivan;ivan 4;ivan grozny;ivan iv of russia;ivan iv vasilyevich
1|Nicholas II||nicholas;nicholas 2;nikolai 2;nicholas romanov
2|Alexander II|Alexander II of Russia|alexander 2;alexander liberator
2|Alexander I|Alexander I of Russia|alexander 1
2|Alexander III|Alexander III of Russia|alexander 3;alexander peacemaker
3|Nicholas I|Nicholas I of Russia|nicholas 1;nikolai 1;nikolay i of russia
3|Elizabeth|Elizabeth of Russia|elizabeth petrovna;elizaveta;elizaveta petrovna;elisabeth of russia
3|Boris Godunov||godunov;boris
3|Paul I|Paul I of Russia|paul 1;pavel 1;paul;paul of russia;paul petrovich;pavel petrovich
3|Peter III|Peter III of Russia|peter 3;charles peter ulrich;duke peter of holstein-gottorp;peter fyodorovich romanov
3|Anna|Anna of Russia|anna ioannovna;anna ivanovna;anna i of russia
4|Michael I|Michael I of Russia|michael 1;mikhail 1;michael romanov;mikhail romanov;mikhail fyodorovich;michael feodorovich romanov
4|Alexis|Alexis of Russia|alexei mikhailovich;aleksei mikhailovich;alexis 1;alexei;aleksei i of russia;aleksey i of russia
4|Catherine I|Catherine I of Russia|catherine 1;ekaterina 1;marta helena skowrońska;catherine i alexeyevna
4|Feodor I|Feodor I of Russia|feodor 1;fyodor 1;fedor 1
4|Ivan VI|Ivan VI of Russia|ivan 6;ivan vi antonovich
4|Peter II|Peter II of Russia|peter 2;peter alexeyevich
4|Ivan V|Ivan V of Russia|ivan 5
4|Feodor III|Feodor III of Russia|feodor 3;fyodor 3;fedor 3
4|Ivan III|Ivan III of Russia|ivan great;ivan 3;ivan iii of moscow;ivan iii vasilyevich
5|Vasili IV|Vasili IV of Russia|vasili 4;vasily 4;vasily shuisky;vasili shuisky;shuisky
5|False Dmitry I||false dmitry;dmitry;pseudo dmitry;false dmitri;false demetrius i
5|Feodor II|Feodor II of Russia|feodor 2;fyodor 2
6|Michael II|Grand Duke Michael Alexandrovich of Russia|michael 2;michael alexandrovich;grand duke michael;mikhail alexandrovich romanov
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
1|Christopher Columbus||columbus;cristoforo colombo;cristobal colon;christoffa corombo
1|Marco Polo||polo
1|Ferdinand Magellan||magellan;fernao magalhaes;magalhaes;fernando de magallanes;fernando magallanes
1|Vasco da Gama||da gama;vasco gama
1|James Cook||captain cook;cook
2|Roald Amundsen||amundsen
2|Ernest Shackleton||shackleton;ernest henry shackleton
2|Leif Erikson||leif eriksson;leif ericson;leif ericsson;leif;leifur eiríksson
2|Hernán Cortés||cortes;hernan cortes;hernando cortez;cortez
2|Francisco Pizarro||pizarro
2|Lewis and Clark|Lewis and Clark Expedition|lewis clark;meriwether lewis;william clark;lewis;clark
2|Amerigo Vespucci||vespucci;amerigo
2|Robert Falcon Scott||scott;captain scott;robert scott
2|Zheng He||cheng ho;ma he;ma zheng
2|Ibn Battuta||ibn batuta;battuta;ibn battutah
2|Edmund Hillary||hillary
2|Francis Drake||drake
3|Sacagawea||sakakawea;sacajawea
3|Henry Hudson||hudson
3|Bartolomeu Dias||dias;bartholomew diaz;diaz
3|John Cabot||cabot;giovanni caboto;zuan chabotto
3|Jacques Cartier||cartier
3|Samuel de Champlain||champlain
3|Abel Tasman||tasman;abel janszoon tasman
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
3|Giovanni da Verrazzano||verrazzano;verrazano;giovanni de verrazano
3|Francisco Vázquez de Coronado||coronado
3|Jacques Cousteau||cousteau
4|Matthew Henson||henson
4|Francisco de Orellana||orellana;francisco oregliana
4|Mungo Park
4|Richard Francis Burton||richard burton;burton
4|John Hanning Speke||speke
4|Zebulon Pike||pike;zebulon montgomery pike
4|Daniel Boone||boone
4|Willem Barentsz||barentsz;barents;william barents
4|John Franklin||franklin;john franklin
4|Pedro Álvares Cabral||cabral
4|Juan Sebastián Elcano||elcano;del cano
4|Álvar Núñez Cabeza de Vaca||cabeza de vaca
4|Alexander Mackenzie|Alexander Mackenzie (explorer)|mackenzie
4|Douglas Mawson||mawson
4|Burke and Wills|Burke and Wills expedition|burke wills;burke;wills
4|Gertrude Bell
4|Isabella Bird
4|Xuanzang||hsuan tsang;xuan zang;huen tsang;hieun tsang;hiuen tsang;hiuen-tsiang
4|Zhang Qian||chang chien
4|Louis Antoine de Bougainville||bougainville
4|Matthew Flinders||flinders
4|Richard E. Byrd||byrd;richard evelyn byrd;richard byrd jr.
4|Ranulph Fiennes||fiennes
4|Reinhold Messner||messner
4|George Mallory||mallory
4|Henry the Navigator||prince henry;henry navigator;infante henrique of portugal;infante d. henrique
4|René-Robert Cavelier, Sieur de La Salle||la salle;de la salle;robert cavelier de la salle;sieur de la salle;rené-robert cavelier de la salle;cavalier de la salle
4|George Vancouver||vancouver
4|Hiram Bingham III||hiram bingham;bingham
4|Charles Darwin||darwin
5|Pytheas
5|Hanno the Navigator||hanno;periplus of hanno
5|Ahmad ibn Fadlan||ibn fadlan
5|Jean-François de La Pérouse||la perouse;laperouse
5|Juan Rodríguez Cabrillo||cabrillo;joão rodrigues cabrilho;joão cabrilho
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
5|William of Rubruck||rubruck;william of ruysbroeck
5|Francis Younghusband||younghusband
5|Mary Kingsley||kingsley
5|Ida Pfeiffer||pfeiffer
6|Yermak Timofeyevich||yermak;ermak
6|Semyon Dezhnev||dezhnev;dezhnyov
6|Dirk Hartog||hartog
6|Willem Janszoon||janszoon;willem jansz
6|Luis Váez de Torres||torres
6|Pedro Fernandes de Queirós||queiros;quiros
6|Gil Eanes||eanes
6|Étienne Brûlé||brule
6|Pierre-Esprit Radisson||radisson
6|Samuel Hearne||hearne
6|Apsley Cherry-Garrard||cherry garrard
6|Frank Wild
6|Frank Worsley||worsley
6|Rabban Bar Sauma||bar sauma;rabban sawma
6|Afanasy Nikitin||nikitin
6|Pêro da Covilhã||covilha;pero da covilha;pedro de covilham
6|Estevanico||esteban;mustafa azemmouri
6|Fernão Mendes Pinto||mendes pinto
6|Heinrich Barth
6|René Caillié||caillie
6|Samuel Baker||samuel white baker
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
2|Vasa|Vasa (ship)|wasa;regalskeppet vasa;vasa ship
3|SS Edmund Fitzgerald||fitzgerald
3|SS Andrea Doria||doria
3|HMHS Britannic||britannic
3|MV Wilhelm Gustloff||gustloff
3|Yamato|Japanese battleship Yamato
3|HMS Hood||hms hood (51)
3|USS Arizona
3|Endurance|Endurance (1912 ship)
3|Batavia|Batavia (1628 ship)
3|Whydah Gally||whydah
3|Queen Anne's Revenge
3|Costa Concordia||concordia
3|MS Estonia||ms viking sally
3|Kursk|Russian submarine Kursk (K-141)|k 141;russian submarine kursk (k-141);soviet submarine k-141
3|Mary Celeste||marie celeste
4|RMS Empress of Ireland
4|RMS Lancastria
4|SS Central America||ship gold;columbus-america discovery group
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
4|Santa María|Santa María (ship)|gallega
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
1|French Revolution||french;révolution française
1|American Revolution||american;american war independence;american revolutionary war;american rebellion
1|Russian Revolution||russian;bolshevik;revolutionary russia;october 1917 revolution
1|Industrial Revolution||industrial;first industrial revolution
2|Glorious Revolution||glorious;english revolution of 1688;bloodless revolution
2|Cuban Revolution||cuban;cuban civil war;cuban revolution of 1959
2|Iranian Revolution||iranian;islamic revolution;1979 revolution in iran;revolution of iran
2|Haitian Revolution||haitian;haiti;haitian slave revolt;st. domingue slave revolt
2|Mexican Revolution||mexican;revolutionary mexico
2|Velvet Revolution||velvet;gentle revolution
2|October Revolution||october;red october;great october socialist revolution;bolshevik revolution of 1917;bolshevik coup;soviet revolution
3|Revolutions of 1848||1848;spring nations;springtime peoples;springtime of nations;1848 liberal revolutions
3|Xinhai Revolution||xinhai;1911;chinese 1911;xinhai revolt
3|Cultural Revolution||cultural;chinese cultural revolution
3|Carnation Revolution||carnation
3|Hungarian Revolution of 1956||hungarian 1956;hungarian uprising;hungarian;soviet invasion of hungary;soviet intervention in hungary;russian invasion of hungary;hungarian revolt
3|Orange Revolution||orange
3|Rose Revolution||rose
3|February Revolution||february
3|Arab Spring||2010–2011 arab world protests
3|Scientific Revolution||scientific;new science
3|Neolithic Revolution||neolithic;agricultural;first agricultural revolution;invention of agriculture;development of farming;origin of agriculture
3|Revolutions of 1989||1989;fall communism;autumn nations;fall of the iron curtain;fall of the eastern bloc
3|Chinese Communist Revolution||chinese;chinese communist;communist revolution in china
4|Egyptian revolution of 2011||egyptian;egyptian 2011;tahrir;25 january revolution;egypt revolution of 2011
4|Tunisian revolution||tunisian;jasmine;2010–2011 tunisian uprising;december revolution
4|Romanian revolution||romanian;romanian 1989
4|Green Revolution||green;third agricultural revolution
4|Digital Revolution||digital;information
4|Sexual revolution||sexual
4|July Revolution||july;july 1830;french 1830;second french revolution
4|Belgian Revolution||belgian;independence of belgium
4|German revolution of 1918–1919||german;november;german 1918;german revolution of 1918-19
4|People Power Revolution||people power;edsa;1986 edsa revolution;edsa people power revolution;edsa i;philippine revolution of 1986
4|Singing Revolution||singing;estonian independence movement
4|Nicaraguan Revolution||nicaraguan;sandinista
4|Greek War of Independence||greek;greek independence;independence of greece
4|Texas Revolution||texas;texan;texian revolt
4|Philippine Revolution||philippine;philippine revolutionary war;tagalog war
4|Revolution of Dignity||dignity;euromaidan;maidan;february 2014 euromaidan riots;2013–2014 ukrainian revolution;february 2014 maidan revolution;ukrainian revolution of 2014
4|Hungarian Revolution of 1848||hungarian 1848;hungarian war of independence;1848 revolution in hungary
4|Russian Revolution of 1905||1905;russian 1905;first russian revolution
4|Meiji Restoration||meiji;japanese modernization (1868-1930)
5|Quiet Revolution||quiet
5|5 October 1910 revolution||portuguese;portuguese 1910
5|Saffron Revolution||saffron;2007 burmese anti-government protests;2007 myanmar anti-government protests
5|Bolivarian Revolution||bolivarian
5|Young Turk Revolution||young turk;young turks
5|Tulip Revolution||tulip
5|Cedar Revolution||cedar
5|Sudanese revolution||sudanese;2018–19 sudanese protests
5|Bulldozer Revolution|Overthrow of Slobodan Milošević|bulldozer
5|Commercial Revolution||commercial
5|Atlantic Revolutions||atlantic
5|Spanish Revolution of 1936||spanish;spanish 1936
5|Ethiopian Revolution||ethiopian
5|Persian Constitutional Revolution||persian constitutional;iranian constitutional;constitutional
5|May Revolution||may;argentine may;argentine
6|Jeans Revolution||jeans;denim
6|Liberal Revolution of 1820||liberal 1820;portuguese 1820;revolution of porto
6|Saur Revolution||saur
6|Zanzibar Revolution||zanzibar
6|14 July Revolution||iraqi;iraqi 1958
6|April Revolution||april;korean 1960
6|Algerian Revolution|Algerian War|algerian;algerian war;algeria's independence;algeria war;algerian war of independence
6|Puritan Revolution|Wars of the Three Kingdoms|english;puritan;english revolution
`},

{id:'renaissance', cat:'Art & Ideas', q:'Name a Renaissance artist', hint:'Painters, sculptors and architects, c. 1300&ndash;1600',
list:`
1|Leonardo da Vinci||leonardo;da vinci
1|Michelangelo||michelangelo buonarroti
1|Raphael||raffaello;raffaello sanzio;rafael sanzio
1|Donatello
1|Sandro Botticelli||botticelli
2|Titian||tiziano;tiziano vecellio
2|Albrecht Dürer||durer;albrecht durer;duerer
2|Jan van Eyck||van eyck
2|Hieronymus Bosch||bosch;el bosco
3|Pieter Bruegel the Elder||bruegel;brueghel;pieter bruegel;breughel
3|Giotto||giotto di bondone
3|Masaccio
3|Filippo Brunelleschi||brunelleschi
3|Fra Angelico||angelico
3|Lorenzo Ghiberti||ghiberti
3|Andrea Mantegna||mantegna
3|Giovanni Bellini||bellini;giambellino
3|Tintoretto
3|Paolo Veronese||veronese
3|Hans Holbein the Younger||holbein;hans holbein
3|El Greco||domenikos theotokopoulos;dominikos theotokopoulos;domenicos theotocopoulos
4|Giorgione
4|Antonio da Correggio||correggio;antonio allegri
4|Piero della Francesca
4|Pietro Perugino||perugino;pietro vannucci
4|Paolo Uccello||uccello
4|Filippo Lippi||fra filippo lippi;lippi
4|Domenico Ghirlandaio||ghirlandaio
4|Andrea del Verrocchio||verrocchio
4|Lucas Cranach the Elder||cranach;lucas cranach
4|Donato Bramante||bramante
4|Benvenuto Cellini||cellini
4|Parmigianino
4|Agnolo Bronzino||bronzino;agnolo di cosimo
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
5|Rosso Fiorentino||il rosso
5|Jacopo Bellini
5|Gentile Bellini
5|Pisanello
5|Duccio||duccio di buoninsegna
5|Simone Martini
5|Hugo van der Goes
5|Robert Campin||campin;master of flémalle
5|Matthias Grünewald||grunewald
5|Albrecht Altdorfer||altdorfer
5|Lavinia Fontana
5|Pinturicchio||bernardino di betto
5|Fra Bartolomeo
6|Dieric Bouts||bouts
6|Gerard David
6|Quinten Massys||matsys;massys;quentin matsys
6|Joachim Patinir||patinir
6|Hans Baldung||baldung;baldung grien
6|Properzia de' Rossi||properzia de rossi
6|Plautilla Nelli||suor plautilla nelli
6|Jacopo della Quercia
6|Desiderio da Settignano
6|Michelozzo
6|Cosimo Tura||cosme tura
6|Carlo Crivelli||crivelli
6|Andrea del Castagno||andrea di bartolo di bargilla
6|Jean Fouquet||fouquet
6|Jean Clouet||clouet
6|Nicholas Hilliard||hilliard
6|Lucas van Leyden
6|Jan Gossaert||mabuse;gossaert;jan mabuse
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
1|Ancient Egypt||egypt;egyptians;egyptian;ancient egyptian;ancient egyptians;ancient egyptian civilization;appearance of the ancient egyptians
1|Ancient Rome||rome;romans;roman;roman empire;roman republic;ancient roman;classical rome;state of rome;first rome
1|Ancient Greece||greece;greeks;greek;hellenes;hellenic world;ancient greek world;hellenic civilisation;ancient greek civilization
1|Maya civilization||maya;mayans;mayan;maya culture;ancient maya
1|Aztecs||aztec;aztec empire;mexica
1|Inca Empire||inca;incas;inka;inca civilization;tahuantinsuyu;tahuantinsuyo;inca culture;tawantinsuyo
2|Mesopotamia||mesopotamians;mesopotamian;ancient iraq
2|Sumer||sumerians;sumerian;sumerologist
2|Babylonia||babylon;babylonians;babylonian
2|Achaemenid Empire||persia;persians;persian empire;achaemenid;ancient persia;achaemenids;first persian empire;ancient persians
2|Indus Valley Civilisation||indus valley;indus;harappa;harappan;indus valley civilization;harrapan civilization;harrapan civilisation;culture of harappa
2|Ancient China||china;chinese;shang;shang china
3|Phoenicia||phoenicians;phoenician
3|Ancient Carthage||carthage;carthaginians;punic
3|Assyria||assyrians;assyrian
3|Hittites||hittite;hittite empire;hatti
3|Minoan civilization||minoans;minoan
3|Mycenaean Greece||mycenaeans;mycenae;mycenaean;mycenean civilisation;mycenean greeks
3|Olmecs||olmec;olmeca civilization
3|Etruscan civilization||etruscans;etruscan;etruria;ancient etruscans
3|Celts||celtic;gauls;celtae;keltoi
3|Akkadian Empire||akkad;akkadian;akkadians;empire of akkad
3|Kingdom of Kush||kush;kushites;nubia;nubians
3|Kingdom of Aksum||aksum;axum;aksumite;kingdom of axum;axumite empire;axumites;axumite kingdom
3|Scythians||scythia;scythian;scyth;scyths
3|Parthian Empire||parthia;parthians;arsacid empire;arsacid;arsacids;ashkanian
3|Maurya Empire||maurya;mauryan;mauryans
3|Ancient Israel|Israelites|israelites;hebrews;israel judah;ancient israelites
4|Elam||elamites;elamite
4|Norte Chico civilization||caral;norte chico;caral supe
4|Teotihuacan
4|Zapotec civilization||zapotec;zapotecs
4|Moche culture||moche;mochica
4|Nazca culture||nazca;nasca;ica-nazca culture
4|Chavín culture||chavin
4|Tiwanaku||tiahuanaco
4|Wari culture||wari;huari
4|Lydia||lydians;maeonia
4|Philistines||philistia;peleshet
4|Toltec||toltecs
4|Sabaeans||saba;sheba;sabaean
4|Nabataeans||nabateans;nabataean kingdom
4|Ancestral Puebloans||anasazi;puebloans;ancestral pueblo;ancient puebloan
4|Mississippian culture||mississippians;cahokia
4|Urartu||urartians
5|Mitanni||mittani;hanigalbat;naharin;hanilgalbat
5|Amorites
5|Kassites||kassite babylonia
5|Hurrians||hurri;ḫurru
5|Dilmun||telmun
5|Garamantes||garamantian
5|Nok culture||nok;nok civilization
5|Hopewell tradition||hopewell;hopewellian culture;hopewellian exchange
5|Jōmon period||jomon
5|Gojoseon||old joseon;dangun joseon
5|Dacians||dacia
5|Thracians||thrace
5|Illyrians||illyria
5|Picts||pictland;pictavia
5|Sea Peoples
5|Çatalhöyük||catalhoyuk;catal huyuk
5|Göbekli Tepe||gobekli tepe
5|Sanxingdui
5|Bactria||bactrians;greco bactrian;pakhlo
5|Xiongnu||hunnu;sunnu
5|Kushan Empire||kushan;kushans;kusana
5|Mixtecs||mixtec
5|Cycladic culture||cycladic
6|Adena culture||adena
6|Yayoi period||yayoi
6|Vinča culture||vinca;turdaș-vinča culture
6|Cucuteni–Trypillia culture||cucuteni;trypillia;tripolye;trypillian culture
6|Natufian culture||natufian;natufians
6|Hallstatt culture||hallstatt
6|La Tène culture||la tene
6|Liangzhu culture||liangzhu
6|Đông Sơn culture||dong son;dongsonian
6|Funan||nokor phnom
6|Sogdia||sogdians;sogdiana
6|Tartessos||tartessians
6|Paracas culture||paracas
6|Valdivia culture||valdivia
6|Jiroft culture||jiroft
6|Nuragic civilization||nuragic;nuraghe
6|Magan|Magan (civilization)|majan;makkan
6|Saka||sakas;sacae;sacaraucae;sacia
`,
nope:{
 'vikings|viking|norse':'Medieval (793&ndash;1066) &mdash; not ancient.',
 'atlantis|lemuria|mu':'Legendary &mdash; no ruins to dig!',
 'ottomans|ottoman empire|mongols|mongol empire|byzantine empire':'Impressive &mdash; but medieval or later, not ancient.'
}},

{id:'ww2', cat:'Wars & Battles', q:'Name a battle or campaign of World War II', hint:'1939&ndash;1945, any front',
list:`
1|D-Day|Normandy landings|d day;dday;normandy;normandy landings;overlord;omaha beach;utah beach;juno beach;gold beach;sword beach
1|Battle of Stalingrad||stalingrad;defence of stalingrad;battle for stalingrad;defeat at stalingrad
1|Attack on Pearl Harbor||pearl harbor;pearl harbour;japanese attack on pearl harbor;bombing of pearl harbor;december 7, 1941;attacked pearl harbor
1|Battle of Britain||britain;battle of england
1|Battle of Midway||midway;battle for midway
2|Battle of the Bulge||bulge;ardennes;ardennes offensive
2|Battle of Iwo Jima||iwo jima
2|Battle of Okinawa||okinawa;l-day;fighting on okinawa
2|Battle of Berlin||berlin;battle for berlin;fall of berlin
2|Battle of Dunkirk||dunkirk;dunkerque;dynamo;dunkirk evacuation;battle of st omer-la bassée
2|Battle of Kursk||kursk;citadel
2|Second Battle of El Alamein||el alamein;alamein
3|Battle of the Atlantic||atlantic;second battle of the atlantic;battle of the north atlantic
3|Siege of Leningrad||leningrad;blockade of leningrad
3|Operation Market Garden||market garden;arnhem
3|Battle of Moscow||moscow;battle for moscow;assault on moscow
3|Guadalcanal campaign||guadalcanal;invasion of guadalcanal
3|Battle of Monte Cassino||monte cassino;cassino
3|Battle of Leyte Gulf||leyte gulf;leyte;battle for leyte gulf;battle of sibuyan sea
3|Battle of the Coral Sea||coral sea
3|Operation Barbarossa||barbarossa
3|Battle of France||france;fall france;westfeldzug;battle for france;north-west europe 1940
3|Battle of Crete||crete;unternehmen merkur
3|Warsaw Uprising||warsaw rising
3|Battle of Anzio||anzio;shingle
4|Battles of Narvik||narvik
4|Norwegian campaign||norway;weserubung;allied campaign in norway;german invasion of norway
4|Battle of the Philippine Sea||philippine sea;marianas turkey shoot;great marianas turkey shoot
4|Battle of Tarawa||tarawa
4|Battle of Saipan||saipan
4|Battle of Peleliu||peleliu
4|Battle of Kasserine Pass||kasserine;kasserine pass
4|Battle of Hürtgen Forest||hurtgen;hurtgen forest;battle of hürtgenwald
4|Siege of Sevastopol (1941–1942)||sevastopol;siege of sevastopol (1941-42)
4|Siege of Tobruk||tobruk
4|Battle of Singapore||singapore
4|Battle of Bataan||bataan
4|Battle of Imphal||imphal
4|Battle of Kohima||kohima
4|Battle of the River Plate||river plate
4|Sinking of the Bismarck|Last battle of the battleship Bismarck|bismarck
4|Battle of Taranto||taranto;attack on taranto;raid on taranto
4|Allied invasion of Sicily||sicily;husky;allied landings in sicily;landing in sicily;sicily campaign
4|Battle of Shanghai||shanghai;battle of songhu
4|Battle of Nanking||nanking;nanjing
4|Operation Bagration||bagration;belorussian offensive;belorussian strategic offensive;liberation of belarus
4|Dieppe Raid||dieppe
4|Siege of Malta (World War II)||malta;siege of malta (1940)
4|Siege of Bastogne||bastogne
5|Battle of Corregidor||corregidor
5|Battle of Cape Matapan||matapan
5|Battle of Greece||greece
5|Operation Dragoon||dragoon
5|Battle of the Java Sea||java sea
5|Battle of Savo Island||savo island
5|Battle of Wake Island||wake island
5|Battle of Hong Kong||hong kong;fall of hong kong
5|Battle of Wuhan||wuhan
5|Battles of Khalkhin Gol||khalkhin gol;nomonhan
5|Battle of Westerplatte||westerplatte
5|Siege of Warsaw (1939)||warsaw 1939
5|Battle of Gazala||gazala;unternehmen theseus
5|Battle of the Scheldt||scheldt
5|Battle of Aachen||aachen
5|Battle of Remagen||remagen
5|Siege of Budapest||budapest
5|Battle of Königsberg||konigsberg
5|Battle of the Seelow Heights||seelow heights;seelow
5|Battles of Rzhev||rzhev
5|Battle of Smolensk (1941)||smolensk
5|Battle of Kiev (1941)||kiev;kyiv;first battle of kiev;battle of kyiv (1941)
5|Defense of Brest Fortress||brest fortress;brest
5|Battle of Prokhorovka||prokhorovka
5|Battle of the Denmark Strait||denmark strait
5|Battle of the North Cape||north cape
5|Attack on Mers-el-Kébir||mers el kebir
5|St Nazaire Raid||nazaire;chariot
5|Norwegian heavy water sabotage||gunnerside;heavy water;vemork;telemark
5|Battle of Drøbak Sound||drobak;oscarsborg;blucher
5|Battle of Manila (1945)||manila;liberation of manila;bombing of manila
5|Battle of Luzon||luzon
5|Battle of Kwajalein||kwajalein
5|Battle of Guam (1944)||guam;second battle of guam
5|Kokoda Track campaign||kokoda;kokoda campaign
5|Battle for Caen||caen
5|Falaise pocket||falaise
5|Liberation of Paris||paris
5|Pointe du Hoc
6|Battle of Midtskogen||midtskogen
6|Battle of Vinjesvingen||vinjesvingen
6|Battle of Carentan||carentan
6|Bougainville campaign||bougainville
6|Battle of Tinian||tinian
6|Battle of Attu||attu;battle for attu
6|Battle of Milne Bay||milne bay
6|Battle of the Bismarck Sea||bismarck sea
6|Battle of Cape Esperance||cape esperance
6|Battle of the Santa Cruz Islands||santa cruz
6|Battle of the Eastern Solomons||eastern solomons
6|Battle of Keren||keren
6|Battle of Dakar||dakar
6|Battle of Madagascar||madagascar
6|Battle of Narva (1944)||narva
6|Battle of Tali-Ihantala||tali ihantala;ihantala
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
1|Edo period||edo;tokugawa;tokugawa period;edo japan
1|Meiji era|Meiji (era)|meiji;meiji period
2|Heian period||heian
2|Sengoku period||sengoku;warring states
2|Shōwa era||showa;showa period;shōwa (1926–1989)
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
6|Occupation of Japan||occupation;allied occupation;occupied japan;american occupation of japan;u.s.-led allied occupation of japan;us occupation of japan
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
3|Northern Crusades||northern;baltic;germanic crusaders
4|Crusade of 1101||1101
4|Alexandrian Crusade||alexandrian
4|Crusade of Varna||varna
4|Crusade of Nicopolis||nicopolis
4|Barons' Crusade||barons;1239
4|Shepherds' Crusade (1251)||shepherds;pastoureaux
4|Wendish Crusade||wendish
4|Livonian Crusade||livonian;conquest of estonia;estonian crusade
4|Hussite Wars||hussite;hussite wars;anti hussite
4|Norwegian Crusade||norwegian;sigurd
4|Reconquista||christian reconquest
5|Swedish crusades||swedish
5|Aragonese Crusade||aragonese
5|Despenser's Crusade||despenser;despensers;norwich
5|Crusade of 1197||1197;german
5|Prussian Crusade||prussian;conquest of prussia;polish-teutonic crusade on old prussians
5|Bosnian Crusade||bosnian;crusade against bosnia
5|Barbary Crusade||barbary;mahdia
5|Smyrniote crusades||smyrniote;smyrna
6|Savoyard crusade||savoyard;reconquest of gallipoli
6|Drenther Crusade||drenther;friso-drentic war
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
1|Cleopatra||cleopatra 7;cleopatra vii thea philopator
1|Elizabeth I||elizabeth 1;elizabeth tudor;virgin queen;gloriana;elizabeth of england
1|Queen Victoria||victoria
1|Elizabeth II||elizabeth 2;elizabeth
1|Catherine the Great||catherine;catherine 2;catherine great;sophie of anhalt-zerbst
2|Mary I of England||mary 1;bloody mary;mary tudor
2|Maria Theresa||maria theresia
2|Hatshepsut
2|Isabella I of Castile||isabella;isabella 1;isabella castile;isabella catholic;isabel i of castile;isabel of castile;isabel i of spain;isabel the catholic
2|Mary, Queen of Scots||mary scots;mary stuart;mary queen scots;mary i of scotland
2|Boudica||boudicca;boadicea
3|Wu Zetian||wu zhao;empress wu;wu meiniang
3|Anne, Queen of Great Britain||anne;queen anne;anne of england
3|Mary II||mary 2;mary ii of england
3|Christina, Queen of Sweden||christina;kristina;christina sweden
3|Zenobia
3|Empress Dowager Cixi||cixi;tzu hsi;dowager cixi;empress xiaoqinxian
3|Liliʻuokalani||liliuokalani
3|Margrethe II||margrethe;margrethe 2
3|Eleanor of Aquitaine||eleanor aquitaine;eleanor, duchess of aquitaine;alienor of aquitaine
4|Nefertiti||nofretete
4|Margaret I of Denmark||margaret 1;margrete 1;margaret denmark;margrete
4|Tamar of Georgia||tamar;tamara;tamar i
4|Empress Matilda||matilda;maud
4|Juliana of the Netherlands||juliana
4|Wilhelmina of the Netherlands||wilhelmina
4|Beatrix of the Netherlands||beatrix
4|Ranavalona I||ranavalona;ranavalona 1
4|Nzinga of Ndongo and Matamba||nzinga;njinga;anna nzinga;ana de sousa nzinga mbande
4|Amina|Amina|queen amina;amina zazzau
4|Rani of Jhansi||lakshmibai;laxmibai;rani jhansi;rani laxmibai;rani lakshmi bai;manikarnika tambe;jhansi ki rani
4|Razia Sultana||razia;raziya
4|Irene of Athens||irene
4|Queen of Sheba||sheba;makeda;bilquis;balkis
4|Elizabeth of Russia||elizabeth russia;elizabeth petrovna
4|Lady Jane Grey||jane grey;lady jane dudley
5|Sobekneferu||neferusobek
5|Zoe Porphyrogenita||zoe;zoe of byzantium
5|Empress Suiko||suiko;nukatabe
5|Queen Seondeok of Silla||seondeok
5|Isabella II of Spain||isabella 2;isabel ii of spain
5|Maria I of Portugal||maria 1;mary i of portugal
5|Joanna of Castile||juana la loca;joanna mad;joanna castile;juana of castile;juana i;joanna of aragon
5|Dido||dido of carthage
5|Artemisia I of Caria||artemisia;artemisia 1
5|Anna of Russia||anna russia;anna ioannovna
5|Catherine I of Russia||catherine 1;marta helena skowrońska;catherine i alexeyevna
5|Sālote Tupou III||salote;salote tupou
5|Zewditu||zauditu
6|Twosret||tausret
6|Empress Kōken||koken;shotoku
6|Queen Jindeok of Silla||jindeok
6|Queen Jinseong of Silla||jinseong
6|Maria II of Portugal||maria 2;mary ii of portugal;maria da glória
6|Urraca of León and Castile||urraca
6|Petronilla of Aragon||petronilla
6|Joanna I of Naples||joanna 1 naples;joan i of naples;giovanna i of naples
6|Joanna II of Naples||joanna 2 naples;joan ii of naples
6|Mary of Burgundy||mary burgundy;mary the rich;mary, duchess of burgundy
6|Anne of Brittany||anne brittany;anne, duchess of brittany;anne de bretagne
6|Ulrika Eleonora, Queen of Sweden||ulrika eleonora
6|Theodora Porphyrogenita||theodora porphyrogenita;theodora (11th century)
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
1|Troy||hisarlik, canakkale;hisarlik;hissarlik;ilion
1|Machu Picchu||machu pichu
1|Petra
2|Babylon||babil;babilu
2|Angkor||angkor wat;angkor thom
2|Carthage|Ancient Carthage|carthaginian civilization
2|Chichen Itza||chichen
2|Teotihuacan
2|Tikal
3|Ur|Ur|muqaiyir;tell el-muqayyar
3|Persepolis||persepolitan
3|Mohenjo-daro||mohenjo daro;mohenjodaro;archaeological ruins at moenjodaro
3|Knossos||cnossus
3|Ephesus||apasa;ephesian
3|Palmyra||site of palmyra
3|Herculaneum
3|Mycenae||mykene
3|Great Zimbabwe||zimbabwe ruins
3|Nineveh||ninevite;kouyunjik;ninevites;ninawa
3|Uruk||erech;unug
3|Delphi||archaeological site of delphi
3|Olympia|Olympia, Greece|olympia;altis;archaeological site of olympia
3|Tenochtitlan||tenochtitlán;tenocha
4|Harappa||harrapa
4|Memphis|Memphis, Egypt|mit rahina;ineb-hedj;men-nefer
4|Thebes|Thebes, Egypt|thebes egypt
4|Amarna||akhetaten;tell el amarna
4|Hattusa||hattusas;bogaskoy
4|Jericho|Tell es-Sultan|tell es sultan
4|Leptis Magna||lepcis magna;lepcis;archaeological site of leptis magna
4|Pergamon||pergamum
4|Meroë||meroe
4|Chan Chan
4|Copán||copan
4|Palenque
4|Cahokia
4|Mesa Verde|Mesa Verde National Park
4|Hampi||vijayanagara;group of monuments at hampi
4|Bagan||pagan
4|Ctesiphon
4|Akrotiri|Akrotiri (prehistoric city)
4|Delos||isle of delphos
4|Ugarit||ras shamra
4|Baalbek||heliopolis of phoenicia;heliopolis syriaca
4|Jerash||gerasa
4|Caral
4|Nan Madol
4|Tiwanaku||tiahuanaco
5|Timgad||thamugadi
5|Volubilis
5|Ebla||eblaites;tell mardikh
5|Mari|Mari, Syria
5|Pasargadae
5|Susa||shushan
5|Merv||alexandria margiana;marw;marv, turkmenistan;marw al-shahijan
5|Ani
5|Hierapolis
5|Aphrodisias
5|Dura-Europos||dura europos
5|Hatra
5|Nimrud||kalhu;calah
5|Assur||ashur
5|Lagash
5|Eridu||tell abu shahrain
5|Kish|Kish (Sumer)|kishite language
5|Nippur||nibru
5|Paestum
5|Ostia Antica||ostia
5|Sabratha
5|Cyrene|Cyrene, Libya|archaeological site of cyrene;sanctuary of apollo, cyrene
5|Tanis
5|Abydos|Abydos, Egypt|abdju
5|Dholavira||khadirbet
5|Lothal
5|Sigiriya
5|Anuradhapura
5|Ayutthaya|Ayutthaya Historical Park
5|Sukhothai|Sukhothai Historical Park
5|Mỹ Sơn||my son
5|Xanadu||shangdu
5|Yinxu||anyang;yin
5|Taxila||takṣaśilā;takshasila;takkasīlā;shah dheri
5|Nalanda|Nalanda mahavihara
5|Sardis||archaeological exploration of sardis
5|Gordion||gordium
5|Miletus||milet;millawanda;milawata
5|Uxmal
5|Calakmul
5|Monte Albán||monte alban
5|Tulum
5|Ciudad Perdida||teyuna
5|Kuélap||kuelap
5|Chaco Canyon|Chaco Culture National Historical Park|pueblo bonito;chaco;chacoan civilization
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
6|Tula|Tula (Mesoamerican site)|tula national park
6|Mitla
6|Caracol
6|Mayapan
6|Pachacamac
6|Choquequirao
6|Vilcabamba|Vilcabamba, Peru|espíritu pampa
6|Birka
6|Mystras||mistra;archaeological site of mystras
6|Gonur Depe||gunar tepe
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
1|Fall of the Berlin Wall||berlin wall;fall berlin wall;mauerfall;collapse of the berlin wall;fall of the wall
1|Space Race||space race;moon race
1|Korean War||korea;korean civil war
1|Vietnam War||vietnam;second indochina war;vietnam-american war;vietnamese war
2|Berlin Blockade||berlin airlift;blockade berlin
2|Bay of Pigs Invasion||bay pigs
2|Sputnik 1||sputnik
2|Moon landing|Apollo 11|apollo 11;moon landing
2|Construction of the Berlin Wall|Berlin Wall|berlin wall built;anti-fascist protection wall;division of berlin;berliner mauer
2|Prague Spring||prague spring
2|Hungarian Revolution of 1956||hungarian revolution;hungarian uprising;soviet invasion of hungary;soviet intervention in hungary;russian invasion of hungary;hungarian revolt
2|Marshall Plan||marshall aid;european recovery program
2|McCarthyism||red scare;mccarthy;second red scare;mccarthyites
2|Soviet–Afghan War||soviet afghan war;afghan war;soviet occupation of afghanistan;soviet intervention in afghanistan;soviet war in afghanistan;russian war in afghanistan
2|Dissolution of the Soviet Union||collapse soviet union;fall ussr;end of the soviet union;dissolution of the ussr;fall of the soviet union;soviet union's collapse
2|Chernobyl disaster||chernobyl;chornobyl accident
3|Truman Doctrine||truman doctrine
3|Founding of NATO|NATO|nato;otan
3|Warsaw Pact||warsaw treaty organization;warsaw bloc
3|1960 U-2 incident||u 2 incident;gary powers;u-2 crisis of 1960;1960 us-soviet summit
3|Iron Curtain speech|Sinews of Peace|iron curtain;sinews peace
3|Able Archer 83||able archer
3|Solidarity|Solidarity (Polish trade union)|solidarnosc
3|Reykjavík Summit||reykjavik summit;reykjavik
3|Helsinki Accords||helsinki
3|SALT I||salt 1;strategic arms limitation;salt
3|Strategic Defense Initiative||star wars program;sdi
3|Kitchen Debate||kitchen debate
3|Suez Crisis||suez;1956 suez war;suez war;suez emergency;tripartite aggression
3|1983 Soviet nuclear false alarm incident||stanislav petrov;petrov
3|Checkpoint Charlie standoff|Standoff at Checkpoint Charlie|checkpoint charlie
3|Operation Paperclip||paperclip;operation overcast
3|Iran–Contra affair||iran contra;irangate;contragate
3|Yom Kippur War||yom kippur;1973 october war;fourth arab-israeli war;october war;arab-israeli war of 1973
3|Malta Summit||malta summit
3|Revolutions of 1989||1989;autumn nations;fall of the iron curtain;fall of the eastern bloc
3|Velvet Revolution||velvet revolution;gentle revolution
3|Baltic Way||baltic way;baltic chain
3|Greek Civil War||greek civil war
3|Chinese Civil War||chinese civil war;china's civil war;china civil war;first chinese civil war;red chinese
3|Glienicke Bridge exchange|Glienicke Bridge|bridge spies;glienicke bridge;glienicker brücke
4|Venona project||venona
4|Rosenberg trial|Julius and Ethel Rosenberg|rosenbergs
4|Gouzenko Affair||gouzenko
4|Hollywood blacklist||hollywood ten;blacklist
4|Sino-Soviet split||sino soviet split;sino-soviet conflict
4|1956 Poznań protests||poznan protests;poznań june
4|Tet Offensive||tet
4|Fall of Saigon||saigon;liberation of saigon;capture of saigon
4|Soviet invasion of Czechoslovakia|Warsaw Pact invasion of Czechoslovakia|invasion czechoslovakia
4|Gulf of Tonkin incident||tonkin
4|Pueblo incident||uss pueblo
4|Korean Air Lines Flight 007||kal 007;korean air flight 007;korean air flight kal-007;korean air 007;korean airlines 007
4|1980 Summer Olympics boycott||olympic boycott 1980;moscow boycott
4|Ping-pong diplomacy||ping pong diplomacy
4|Nixon's visit to China|1972 visit by Richard Nixon to China|nixon china
4|Détente||detente
4|Anti-Ballistic Missile Treaty||abm treaty
4|INF Treaty||intermediate range nuclear forces;intermediate nuclear forces treaty
4|Berlin crisis of 1961||berlin crisis
4|Hungarian border opening|Pan-European Picnic|pan european picnic
4|Angolan Civil War||angola
4|Grenada invasion|United States invasion of Grenada|grenada;1983 invasion of grenada;u.s. invasion of grenada;american invasion of grenada;urgent fury
4|Cuban Revolution||cuban revolution;cuban civil war;cuban revolution of 1959
4|Domino theory||domino theory
4|Mutual assured destruction||mad;mutual assured destruction;mutually assured destruction;assured destruction;mutual deterrence
4|Duck and cover||duck cover
4|Space Shuttle Challenger disaster||challenger;space shuttle challenger memorial
5|Operation Ajax|1953 Iranian coup d'état|ajax;iran coup 1953
5|1954 Guatemalan coup d'état|1954 Guatemalan coup d'état|guatemala coup;pbsuccess
5|Congo Crisis||congo crisis;katanga crisis
5|Malayan Emergency||malayan emergency;first malayan emergency;malay emergency
5|Taiwan Strait crises|First Taiwan Strait Crisis|taiwan strait crisis
5|Operation Gladio||gladio
5|Operation Ivy Bells||ivy bells
5|K-19 accident|Soviet submarine K-19|k 19
5|Project Azorian||azorian;glomar explorer;project jennifer
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
1|Eruption of Mount Vesuvius in 79 AD|Eruption of Mount Vesuvius in 79 AD|vesuvius;pompeii eruption;pompeii;eruption of vesuvius;79 eruption of vesuvius
1|Sinking of the Titanic|Titanic|titanic
1|Chernobyl disaster||chernobyl;chornobyl accident
1|Great Fire of London||fire london;great fire of 1666;first great fire of london
2|1755 Lisbon earthquake||lisbon earthquake;earthquake of 1755;great lisbon earthquake
2|Great Chicago Fire||chicago fire
2|1906 San Francisco earthquake||san francisco earthquake;earthquake of 1906;san francisco fire
2|1883 eruption of Krakatoa||krakatoa
2|1815 eruption of Mount Tambora||tambora;year without summer
2|Hindenburg disaster||hindenburg
2|Black Death||plague;black plague
2|Dust Bowl||dirty thirties
2|Great Famine (Ireland)||irish potato famine;potato famine;irish famine;great hunger;an gorta mór;great irish famine
2|Space Shuttle Challenger disaster||challenger;space shuttle challenger memorial
2|Fukushima nuclear accident|Fukushima nuclear accident|fukushima;2011 japanese nuclear accidents
2|2004 Indian Ocean earthquake and tsunami||boxing day tsunami;indian ocean tsunami;2004 tsunami;the asian tsunami;2004 asian tsunami;2004 earthquake
2|Hurricane Katrina||katrina
3|Johnstown Flood||johnstown
3|1900 Galveston hurricane||galveston;great galveston hurricane;hurricane of 1900
3|Tunguska event||tunguska
3|Great Molasses Flood||molasses;boston molasses disaster
3|Halifax Explosion||halifax
3|1908 Messina earthquake||messina
3|1923 Great Kantō earthquake||kanto earthquake;great tokyo earthquake;1923 tokyo earthquake;great kanto earthquake;1923 tokyo fire
3|1976 Tangshan earthquake||tangshan
3|1980 eruption of Mount St. Helens||mount st helens;st helens;mt. st. helens eruption;eruption of mount st. helens
3|Bhopal disaster||bhopal
3|Aberfan disaster||aberfan
3|Great Fire of Rome||fire rome
3|1556 Shaanxi earthquake||shaanxi;shensi earthquake;1556 huaxian earthquake
3|Minoan eruption||thera;santorini eruption;theran eruption
3|Great Storm of 1703||great storm
3|Laki|Laki|laki eruption;laki fissure;laki volcano;lakagigar
3|1902 eruption of Mount Pelée||mount pelee;pelee
3|Armero tragedy||nevado del ruiz;armero
3|Tenerife airport disaster||tenerife;pan am flight 1736;flight 4805
3|Apollo 1||apollo 1 fire;apollo 204 review board;apollo one
3|1931 China floods||china floods;central china flood of 1931
3|Banqiao Dam failure||banqiao
3|Storegga Slide||storegga
3|Exxon Valdez oil spill||exxon valdez
3|Deepwater Horizon oil spill||deepwater horizon;bp oil spill
3|Three Mile Island accident||three mile island;tmi-2
3|Sinking of the Lusitania|RMS Lusitania|lusitania
3|Great Smog of London||great smog;london smog
3|Triangle Shirtwaist Factory fire||triangle shirtwaist
3|Space Shuttle Columbia disaster||columbia
3|Lynmouth Flood||lynmouth
4|Great Fire of New York (1776)||new york fire 1776
4|Peshtigo fire||peshtigo;great peshtigo fire
4|1970 Bhola cyclone||bhola cyclone
4|1991 Bangladesh cyclone||bangladesh cyclone
4|Cyclone Nargis||nargis
4|2010 Haiti earthquake||haiti earthquake;2010 haitian earthquake
4|2011 Tōhoku earthquake and tsunami||tohoku;japan tsunami 2011;2011 sendai earthquake and tsunami;2011 tsunami;2011 earthquake and tsunami;2011 japan earthquake
4|1953 North Sea flood||north sea flood;watersnoodramp;flood of 1953
4|St. Lucia's flood||st lucias flood
4|Grote Mandrenke||grote mandrenke
4|Kyshtym disaster||kyshtym;eastern ural radioactive trace;mayak disaster;east ural radioactive trace
4|Windscale fire||windscale
4|Seveso disaster||seveso
4|Love Canal||love canal
4|Minamata disease||minamata
4|Texas City disaster||texas city
4|Port Chicago disaster||port chicago
4|1999 İzmit earthquake||izmit;marmara earthquake;1999 gölcük earthquake
4|1985 Mexico City earthquake||mexico city earthquake;1985 mexico earthquake;mexican earthquake of 1985
4|1960 Valdivia earthquake||valdivia;great chilean earthquake;1960 chilean earthquake;1960 chile earthquake
4|1964 Alaska earthquake||alaska earthquake;good friday earthquake;great alaskan earthquake
4|Lake Nyos disaster||lake nyos
4|Vajont Dam||vajont
4|St. Francis Dam||st francis dam;saint francis dam
4|Tay Bridge disaster||tay bridge;tay rail bridge disaster
4|Sinking of the Wilhelm Gustloff|MV Wilhelm Gustloff|wilhelm gustloff
4|Sinking of MV Doña Paz|MV Doña Paz|dona paz
4|MS Estonia||estonia;ms viking sally
4|Alexander L. Kielland platform disaster|Alexander L. Kielland (platform)|alexander kielland;kielland
4|Scandinavian Star||scandinavian star
4|1934 Tafjord rockslide|Tafjord|tafjord
4|1509 Constantinople earthquake||constantinople earthquake;1509 istanbul earthquake
5|Plague of Justinian||justinian plague
5|Antonine Plague||antonine plague
5|Eldgjá||eldgja
5|Great Plague of London||great plague;london plague of 1665
5|1918 flu pandemic|Spanish flu|spanish flu;1918 flu
5|Volcanic winter of 536||536;climate changes of 535-536
5|Great Fire of Meireki||meireki
5|Fire of Moscow (1812)||moscow 1812
5|Great Hanshin earthquake||kobe earthquake;great hanshin;1995 hanshin earthquake
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
1|Wolfgang Amadeus Mozart||mozart;amadeus;wolfgang amadeus;wolfgangmozart
1|Ludwig van Beethoven||beethoven
1|Johann Sebastian Bach||bach;js bach
2|Antonio Vivaldi||vivaldi
2|Pyotr Ilyich Tchaikovsky||tchaikovsky;tchaikovski;chaikovsky
2|Frédéric Chopin||chopin
2|George Frideric Handel||handel;haendel;georg friedrich haendel
2|Richard Wagner||wagner
2|Johannes Brahms||brahms
2|Joseph Haydn||haydn
2|Franz Schubert||schubert
2|Giuseppe Verdi||verdi
2|Claude Debussy||debussy
2|Franz Liszt||liszt
2|Sergei Rachmaninoff||rachmaninoff;rachmaninov;sergey rakhmaninov
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
3|Clara Schumann||clara wieck;clara wieck schumann
3|Hildegard of Bingen||hildegard;st. hildegard of bingen
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
4|Ole Bull||ole bornemann bull
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
5|Amy Beach||amy marcy cheney beach
5|Ethel Smyth||smyth
5|Lili Boulanger
5|Nadia Boulanger
5|Cécile Chaminade||chaminade
5|Barbara Strozzi||strozzi
5|Joseph Bologne, Chevalier de Saint-Georges|Joseph Bologne, Chevalier de Saint-Georges|chevalier saint georges;joseph bologne
5|Samuel Coleridge-Taylor||coleridge taylor
5|Johan Svendsen||svendsen
5|Niels Gade||gade;niels wilhelm gade
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
1|Voltaire||voltairian;françois-marie arouet
1|John Locke||locke
1|Jean-Jacques Rousseau||rousseau
1|Immanuel Kant||kant;emanuel kant
2|Isaac Newton||newton;i. newton
2|Montesquieu||charles montesquieu
2|Adam Smith
2|David Hume||hume;d. hume
2|Thomas Hobbes||hobbes
2|Denis Diderot||diderot
2|Benjamin Franklin||franklin
2|Thomas Paine||paine
2|Mary Wollstonecraft||wollstonecraft
2|Thomas Jefferson||jefferson
2|Baruch Spinoza||spinoza;spinozist
2|René Descartes||descartes;renatus cartesius;cartesius
2|Gottfried Wilhelm Leibniz||leibniz
2|Edmund Burke||burke
3|Jean le Rond d'Alembert||d alembert;dalembert;alembert;jean d'alembert;jean-baptiste le rond d'alembert
3|Marquis de Condorcet||condorcet;nicolas de caritat
3|Cesare Beccaria||beccaria;cesare, marquis of beccaria
3|Gotthold Ephraim Lessing||lessing
3|Johann Gottfried Herder||herder
3|Giambattista Vico||vico;giovanni battista vico;g. b. vico
3|Pierre Bayle||bayle
3|Baron d'Holbach||holbach;d holbach;paul henri thiry d'holbach
3|Émilie du Châtelet||du chatelet;chatelet
3|Olympe de Gouges||gouges
3|Jeremy Bentham||bentham;benthamite
3|Mikhail Lomonosov||lomonosov
3|Carl Linnaeus||linnaeus;carl linne;carl von linné;linné
3|Jonathan Swift||swift
3|Samuel Johnson||doctor johnson
3|Edward Gibbon||gibbon
3|Johann Wolfgang von Goethe||goethe;goethean
3|Friedrich Schiller||schiller
3|Hugo Grotius||grotius;hugo de groot;grotian
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
4|Georges-Louis Leclerc, Comte de Buffon||buffon;georges-louis leclerc
4|Julien Offray de La Mettrie||la mettrie;julien la mettrie
4|Étienne Bonnot de Condillac||condillac
5|Anders Chydenius||chydenius
5|Christian Wolff (philosopher)|Christian Wolff (philosopher)|christian wolff;wolff;leibnizian-wolffian;wolffian
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
1|Mona Lisa||la gioconda;gioconda;the joconde;la joconde
1|The Starry Night||starry night
1|The Last Supper|The Last Supper (Leonardo)|last supper;ultima cena
1|The Birth of Venus||birth venus;botticelli's venus
1|Girl with a Pearl Earring||pearl earring
2|The Night Watch||night watch
2|The Creation of Adam||creation adam
2|Sistine Chapel ceiling||sistine chapel
2|The Garden of Earthly Delights||garden earthly delights
2|Las Meninas||meninas
2|The Scream||scream;der schrei
2|Liberty Leading the People||liberty leading people
2|The Great Wave off Kanagawa||great wave
2|Water Lilies|Water Lilies (Monet series)|water lilies;the water lily pond
2|Impression, Sunrise||impression sunrise;impression, soleil levant
2|The School of Athens||school athens
2|Arnolfini Portrait||arnolfini
2|Sunflowers|Sunflowers (Van Gogh series)|sunflowers
2|Primavera|Primavera (Botticelli)|primavera
2|Wanderer above the Sea of Fog||wanderer above sea fog;wanderer;der wanderer über dem nebelmeer
2|The Raft of the Medusa||raft medusa;le radeau de la méduse
2|The Third of May 1808||third may 1808;third may
2|Napoleon Crossing the Alps||napoleon crossing alps
2|Washington Crossing the Delaware||washington crossing delaware
2|Whistler's Mother||whistlers mother;arrangement grey black
2|The Hay Wain||hay wain
3|The Fighting Temeraire||fighting temeraire;temeraire
3|Olympia|Olympia (Manet)|olympia
3|Le Déjeuner sur l'herbe||dejeuner sur lherbe;luncheon on grass;dejeuner sur herbe
3|A Sunday Afternoon on the Island of La Grande Jatte||sunday afternoon;grande jatte
3|Bal du moulin de la Galette||moulin galette;au moulin de la galette
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
3|Judith Slaying Holofernes (Artemisia Gentileschi)|Judith Slaying Holofernes (Artemisia Gentileschi)|judith slaying holofernes;judith beheading holofernes;judith and holofernes
3|The Sleeping Gypsy||sleeping gypsy
3|The Card Players||card players
3|The Potato Eaters||potato eaters
3|Café Terrace at Night||cafe terrace;cafe terrace at night
3|Bedroom in Arles||bedroom arles;the bedroom
3|Irises|Irises (painting)|irises
3|Lady with an Ermine||lady ermine
3|Salvator Mundi|Salvator Mundi (Leonardo)|salvator mundi
3|Virgin of the Rocks||madonna rocks;virgin rocks
3|Venus of Urbino||venus urbino
3|The Last Judgment|The Last Judgment (Michelangelo)|last judgment;last judgement
3|The Blue Boy||blue boy
3|The Goldfinch|The Goldfinch (painting)|goldfinch
3|The Maja Desnuda|La maja desnuda|naked maja;maja desnuda;the nude maja;la maja desnuda
3|Grande Odalisque||grande odalisque;la grande odalisque
3|The Angelus|The Angelus (painting)|angelus
3|The Coronation of Napoleon||coronation napoleon
3|Madame X|Madame X (Madame Pierre Gautreau)|madame x
3|Sistine Madonna||sistine madonna;sixtinian madonna
3|L'Origine du monde||origin world;lorigine du monde
3|Wheatfield with Crows||wheatfield crows
3|A Bar at the Folies-Bergère||bar folies bergere;folies bergere;un bar aux folies bergère
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
4|Along the River During the Qingming Festival||qingming festival;along river;qingming shanghe tu;qingming scroll
4|Fine Wind, Clear Morning||red fuji;fine wind clear morning
4|Barge Haulers on the Volga||barge haulers;burlaks on the volga
4|Ivan the Terrible and His Son Ivan||ivan terrible his son
4|The Ninth Wave||ninth wave
4|The Jewish Bride||jewish bride
4|The Art of Painting||art painting;allegory painting
4|The Little Street||little street
4|View of Delft||view delft
4|The Burial of the Count of Orgaz||burial count orgaz
4|View of Toledo||view toledo
4|The Sea of Ice||sea ice
4|Lamentation of Christ (Mantegna)|Lamentation of Christ (Mantegna)|dead christ;lamentation christ;lamentation over the dead christ
4|Medusa (Caravaggio)|Medusa (Caravaggio)|medusa
4|Bacchus (Caravaggio)|Bacchus (Caravaggio)|bacchus
4|Doni Tondo||doni tondo
4|Bacchus and Ariadne||bacchus ariadne
4|The Flagellation of Christ (Piero della Francesca)|Flagellation of Christ (Piero della Francesca)|flagellation christ;the flagellation
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
4|The Kiss (Hayez)|The Kiss (Hayez)|kiss hayez;il bacio
5|Bridal Procession on the Hardangerfjord|Bridal Procession on the Hardangerfjord|brudeferden hardanger;bridal procession
5|Boyarynya Morozova||boyarynya morozova;feodosiya morozova
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
5|Michael Ancher||michael peter ancher
5|Theodore Robinson||robinson
5|J. Alden Weir||alden weir;julian alden weir
5|John Henry Twachtman||twachtman
5|Frank Weston Benson||benson
5|Arthur Streeton||streeton
5|Frederick McCubbin||mccubbin
5|Philip Wilson Steer||wilson steer;philip steer
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
1|Homer||homeric epics;homeros;maeonides;homerus
1|Virgil||vergil;vergilius;publius vergilius maro;virgilius;publius virgilius maro
1|Ovid||publius ovidius naso;ovidius
2|Herodotus
2|Thucydides
2|Sophocles
2|Euripides
2|Aeschylus
2|Aristophanes
2|Cicero
2|Plutarch
2|Sappho
2|Horace||quintus horatius flaccus;orace
2|Tacitus
2|Livy||titus livius;titus livy
2|Seneca the Younger||seneca;lucius annaeus seneca;lucius annaeus seneca the younger
2|Pliny the Elder||pliny;gaius plinius secundus
2|Hesiod||hesiodic;hesiodus
2|Aesop||aesopus
2|Plato
2|Aristotle||stagirite;aristotelis
2|Marcus Aurelius||aurelius;marc aurel
2|Julius Caesar||caesar;divus iulius;julius ceaser
3|Xenophon
3|Polybius
3|Suetonius||gaius suetonius tranquillus
3|Catullus
3|Juvenal||decimus junius juvenalis;juvenalis
3|Lucretius||titus lucretius carus
3|Pindar
3|Menander
3|Demosthenes
3|Plautus
3|Terence||publius terentius afer
3|Apuleius
3|Petronius||gaius petronius arbiter
3|Martial||marcus valerius martialis;martialis
3|Pliny the Younger||pliny younger;gaius plinius caecilius secundus;plinius the younger
3|Sallust||gaius sallustius crispus
3|Strabo
3|Josephus||flavius josephus
3|Arrian||flavius arrianus;flavius arrianus xenophon
3|Cassius Dio||dio cassius;lucius cassius dio
3|Lucian
3|Epictetus
3|Galen||galenic medicine;galenus
3|Euclid
3|Cato the Elder||cato
3|Augustine of Hippo||augustine;saint augustine;st augustine;st. augustine of hippo;blessed augustine;aurelius augustinus
3|Hippocrates
3|Vitruvius||marcus vitruvius pollio;vitruv
3|Diodorus Siculus||diodorus
3|Pausanias (geographer)|Pausanias (geographer)|pausanias
4|Quintilian||marcus fabius quintilianus
4|Varro
4|Ammianus Marcellinus||ammianus
4|Procopius
4|Boethius
4|Lucan||marcus annaeus lucanus
4|Propertius
4|Ennius
4|Lysias
4|Isocrates
4|Callimachus
4|Theocritus
4|Apollonius of Rhodes||apollonius;apollonios rhodios
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
5|Appian||appianus
5|Velleius Paterculus||velleius;marcus velleius paterculus
5|Cornelius Nepos||nepos
5|Frontinus
5|Macrobius
5|Claudian||claudius claudianus
5|Ausonius
5|Phaedrus (fabulist)|Phaedrus (fabulist)|phaedrus
5|Athenaeus
5|Longus
5|Sextus Empiricus
5|Porphyry (philosopher)|Porphyry (philosopher)|porphyry
6|Herodian
6|Valerius Maximus
6|Columella
6|Prudentius||aurelius prudentius
6|Nonnus
6|Quintus Smyrnaeus||quintus smyrnaeus;quintus of smyrna
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
1|Odyssey||oddysey;the oddessy;oddessey;odýsseia
1|Epic of Gilgamesh||gilgamesh
1|Beowulf
2|Aeneid
2|Mahabharata||sakas in the mahabharata;scythians in the mahabharata;jaya samhita
2|Ramayana
2|Divine Comedy||inferno;divina commedia;la divina commedia;dante's divine comedy
2|The Song of Roland||song roland;chanson roland;la chanson de roland;rolandslied
2|Nibelungenlied||nibelungen
2|Shahnameh||shahnama;book kings
2|Poetic Edda||edda;elder edda;eddaic verse
2|Prose Edda||younger edda;snorra edda
2|Metamorphoses
2|The Canterbury Tales||canterbury tales;the canterbury pilgrims
2|Bhagavad Gita||gita;bhagvat-geeta
3|Njáls saga||njals saga;njal;njala
3|Egils saga||egils saga;egil
3|Heimskringla
3|Völsunga saga||volsunga saga;saga volsungs
3|Laxdæla saga||laxdaela saga
3|Grettis saga||grettis saga;grettir
3|Orkneyinga saga||orkneyinga
3|Saga of Erik the Red||erik red saga;eiriks saga
3|Cantar de mio Cid||poem cid;cantar mio cid;poema de mio cid;the lay of the cid;song of the cid
3|Orlando Furioso
3|Jerusalem Delivered||gerusalemme liberata;la gerusalemme liberata
3|The Faerie Queene||faerie queene
3|Os Lusíadas||lusiads;os lusiadas
3|Argonautica
3|Theogony
3|Works and Days||works days
3|The Tale of the Heike||heike monogatari;tale heike;the heike story
3|Romance of the Three Kingdoms||three kingdoms
3|Journey to the West||journey west
3|Enûma Eliš||enuma elish
3|Sir Gawain and the Green Knight||gawain green knight;gawain
3|Le Morte d'Arthur||morte darthur;le morte darthur
3|Mabinogion
3|Táin Bó Cúailnge||tain bo cuailnge;tain;cattle raid cooley
3|Popol Vuh||popol wuj
4|Pharsalia
4|Thebaid|Thebaid (Latin poem)|thebaid
4|Water Margin||outlaws of the marsh;all men are brothers;shuihu zhuan
4|The Knight in the Panther's Skin||knight panthers skin;vepkhistkaosani
4|The Tale of Igor's Campaign||tale igors campaign;igor;lay of igor's campaign;the song of igor's campaign
4|Piers Plowman||piers ploughman;the vision of piers plowman
4|Parzival
4|Roman de la Rose||romance rose;le roman de la rose
4|Silappatikaram||cilappatikaram;silapadhigaaram
4|Epic of Sundiata||sundiata
4|Masnavi||mathnawi
4|Layla and Majnun||layla majnun;majnu;qays and layla;laila and majnoon;majnun laïla
4|The Conference of the Birds||conference birds
4|Ragnars saga loðbrókar||ragnars saga
4|Ynglinga saga||ynglinga
4|Hildebrandslied||lay of hildebrand;song of hildebrandt
4|Gísla saga||gisla saga;gisli's saga
4|Hrafnkels saga||hrafnkels saga;hrafnkell
4|Eyrbyggja saga||eyrbyggja
4|Grænlendinga saga||greenland saga;graenlendinga saga
5|Atrahasis||epic of atrahasis
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
5|Hrólfs saga kraka||hrolfs saga kraka;hrólfr kraki's saga;hrólf kraki's saga;the saga of hrolf kraki
5|Jómsvíkinga saga||jomsvikinga saga;saga of the jomsvikings
5|Gunnlaugs saga ormstungu||gunnlaugs saga;the saga of gunnlaug serpent-tongue
5|Hervarar saga ok Heiðreks||hervarar saga;heiðreks saga
6|Waltharius
6|Kudrun
6|Manimekalai
6|Buddhacarita
6|Widsith||widsið
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
1|The Thinker||thinker;le penseur
1|Statue of Liberty||liberty;lady liberty
1|Great Sphinx of Giza||sphinx;great sphinx;egyptian sphinx
2|Winged Victory of Samothrace||winged victory;nike samothrace
2|Pietà|Pietà (Michelangelo)|pieta
2|Laocoön and His Sons||laocoon
2|Terracotta Army||terracotta warriors;terracotta soldiers
2|Discobolus||discus thrower
2|Nefertiti Bust||nefertiti
2|Moai||easter island statues;easter island heads
2|Venus of Willendorf||willendorf;woman of willendorf
2|Colossus of Rhodes||colossus
2|Manneken Pis
2|The Kiss (Rodin sculpture)|The Kiss (Rodin sculpture)|kiss rodin;kiss
2|Mask of Tutankhamun||tutankhamun mask;tutankhamun
2|Elgin Marbles||parthenon marbles;elgin marbles
2|Trevi Fountain||trevi;fontana di trevi
3|Statue of Zeus at Olympia||statue zeus;zeus olympia
3|Apollo Belvedere
3|Capitoline Wolf||she wolf;lupa capitolina;she-wolf of the capitol
3|Ecstasy of Saint Teresa||ecstasy st teresa;ecstasy saint teresa;transverberation of saint teresa
3|Apollo and Daphne (Bernini)|Apollo and Daphne (Bernini)|apollo daphne
3|The Rape of Proserpina||rape proserpina
3|Moses (Michelangelo)|Moses (Michelangelo)|moses;michelangelo's moses
3|Perseus with the Head of Medusa||perseus head medusa;perseus
3|David (Donatello)|David (Donatello)|donatello david
3|Augustus of Prima Porta||prima porta
3|Equestrian Statue of Marcus Aurelius||marcus aurelius statue
3|Dying Gaul||dying galatian
3|Riace bronzes||riace
3|Bronze Horseman||bronze horseman
3|Colossi of Memnon||memnon
3|Leshan Giant Buddha||leshan
3|Kamakura Daibutsu|Kōtoku-in|great buddha kamakura;kamakura buddha
3|Buddhas of Bamiyan||bamiyan
3|Olmec colossal heads||olmec heads;colossal heads
3|Benin Bronzes||benin bronzes
3|Lewis chessmen||lewis chessmen
3|Athena Parthenos
3|Psyche Revived by Cupid's Kiss||psyche cupid;cupid psyche
4|Farnese Hercules
4|Charioteer of Delphi||delphi charioteer
4|Artemision Bronze||artemision
4|Doryphoros
4|Aphrodite of Knidos||knidos;aphrodite of cnidus;cnidian aphrodite
4|Barberini Faun
4|Belvedere Torso
4|Lady of Elche||dama elche;lady of elx
4|Lion Monument||lion lucerne;dying lion;löwendenkmal
4|The Burghers of Calais||burghers calais
4|The Gates of Hell||gates hell
4|Lamassu
4|Seated Scribe
4|Narmer Palette
4|Great Buddha of Nara|Tōdai-ji|nara daibutsu;todai ji buddha
4|Little Dancer of Fourteen Years||little dancer
4|Lion-man|Löwenmensch figurine|lion man;lowenmensch
4|Hermes and the Infant Dionysus||hermes praxiteles;hermes of olympia
4|The Three Graces (Canova)|The Three Graces (Canova)|three graces
4|Bacchus (Michelangelo)|Bacchus (Michelangelo)|bacchus
4|Equestrian statue of Gattamelata||gattamelata;equestrian monument of gattamelata
4|Fountain of the Four Rivers||four rivers fountain
4|Veiled Christ||veiled christ
5|Venus of Brassempouy||brassempouy
5|Venus of Hohle Fels||hohle fels;venus of schelklingen
5|Kritios Boy
5|Bamberg Horseman||bamberger reiter;bamberg rider
5|Venus de' Medici||medici venus
5|Venus Victrix (Canova)|Venus Victrix (Canova)|paolina borghese;venus victrix
5|Equestrian statue of Bartolomeo Colleoni||colleoni
5|The Veiled Virgin||veiled virgin
5|Spinario||boy thorn
5|Sleeping Hermaphroditus||hermaphroditus;borghese hermaphrodite
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
1|William Shakespeare||shakespeare;bard;bill shakespear;billy shakes
1|Dante Alighieri||dante;alighieri
1|Edgar Allan Poe||poe;edgar poe
2|Lord Byron||byron
2|John Keats||keats
2|Percy Bysshe Shelley||shelley;percy shelly
2|William Wordsworth||wordsworth
2|Emily Dickinson||dickinson
2|Walt Whitman||whitman
2|Geoffrey Chaucer||chaucer
2|John Milton||milton
2|William Blake||blake
2|Alexander Pushkin||pushkin;alexander sergeyevich pushkin;alexander sergeevich pushkin
2|Rumi||jalal ad-din muhammad rumi;jalal al-din muhammad rumi;jalal ad-din muhammad balkhi;maulana rumi
2|Sappho
2|Virgil||vergil;vergilius;publius vergilius maro;virgilius;publius virgilius maro
2|Petrarch||petrarca
2|Robert Burns||burns
2|Samuel Taylor Coleridge||coleridge
2|Alfred, Lord Tennyson||tennyson
2|Henry Wadsworth Longfellow||longfellow;henry wadsworth
2|Charles Baudelaire||baudelaire
2|Arthur Rimbaud||rimbaud
2|Li Bai||li po;li bo;li tai-po
2|Du Fu||tu fu
2|Matsuo Bashō||basho
2|Omar Khayyam||khayyam;xayyam;omar the tentmaker
2|Hafez||hafiz
2|Homer||homeric epics;homeros;maeonides;homerus
3|John Donne||donne
3|Christina Rossetti||christina georgina rossetti
3|Dante Gabriel Rossetti||dante rossetti
3|Elizabeth Barrett Browning||elizabeth barrett;elizabeth browning
3|Robert Browning
3|Heinrich Heine||heine
3|Friedrich Hölderlin||holderlin
3|Paul Verlaine||verlaine
3|Victor Hugo||hugo;victor marie hugo
3|Stéphane Mallarmé||mallarme
3|Mikhail Lermontov||lermontov
3|Adam Mickiewicz||mickiewicz
3|Ovid||publius ovidius naso;ovidius
3|Horace||quintus horatius flaccus;orace
3|Catullus
3|Pindar
3|Saadi Shirazi||saadi;sadi
3|Kabir||kabirdas
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
3|Johann Wolfgang von Goethe||goethe;goethean
3|Mirza Ghalib||ghalib
3|Ferdowsi||firdausi
3|Ralph Waldo Emerson||emerson
3|Lewis Carroll||carroll;charles lutwidge dodgson
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
4|Novalis||friedrich von hardenberg
4|Sándor Petőfi||petofi
4|Taras Shevchenko||shevchenko
4|Mihai Eminescu||eminescu
4|Amir Khusrau||khusrau;khusro;amir khosrow dehlavi
4|Mirabai||meera;meerabai
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
5|Attar of Nishapur||attar;farid al-din attar;fariduddin attar;farid ad-din attar
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
1|Don Quixote||quixote;don quijote de la mancha
1|Moby-Dick||moby dick
1|Frankenstein||frankenstein modern prometheus;the modern prometheus
1|Dracula
2|War and Peace||war peace
2|Crime and Punishment||crime punishment
2|Les Misérables||les miserables;miserables
2|Jane Eyre
2|Wuthering Heights||wuthering
2|Great Expectations
2|A Tale of Two Cities||tale two cities
2|Oliver Twist
2|The Count of Monte Cristo||count monte cristo;monte cristo;le comte de monte-cristo
2|The Three Musketeers||three musketeers
2|Anna Karenina||karenina
2|Madame Bovary||emma bovary
2|Adventures of Huckleberry Finn||huckleberry finn;huck finn;the adventures of huck finn
2|The Adventures of Tom Sawyer||tom sawyer
2|Alice's Adventures in Wonderland||alice wonderland;alices adventures wonderland
2|Treasure Island
2|Strange Case of Dr Jekyll and Mr Hyde||jekyll hyde;dr jekyll mr hyde;mr. hyde;dr. jekyll;doctor jekyll and mister hyde;doctor jekyll
2|The Picture of Dorian Gray||dorian gray
2|Robinson Crusoe
2|Gulliver's Travels||gullivers travels;gulliver in lilliput
2|The Brothers Karamazov||brothers karamazov;karamazov
2|Twenty Thousand Leagues Under the Seas||20000 leagues under sea;twenty thousand leagues under sea;20,000 leagues under the sea
2|Around the World in Eighty Days||around world 80 days;around world eighty days
2|Little Women
2|Emma|Emma (novel)|emma
2|Sense and Sensibility||sense sensibility;scents and sensibility
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
3|Tess of the d'Urbervilles||tess durbervilles;tess;tess durbeyfield
3|Far from the Madding Crowd||far madding crowd
3|Jude the Obscure||jude obscure
3|The Idiot||idiot
3|Notes from Underground||notes underground
3|Fathers and Sons|Fathers and Sons (novel)|fathers sons
3|Dead Souls
3|Eugene Onegin||onegin
3|The Red and the Black||red black;le rouge et le noir
3|Germinal|Germinal (novel)|germinal
3|Les Liaisons dangereuses||dangerous liaisons;liaisons dangereuses
3|The Sorrows of Young Werther||young werther;werther;die leiden des jungen werthers;the sorrows of werther
3|The Jungle Book||jungle book;rudyard kipling's the jungle book
3|Ivanhoe||wilfred of ivanhoe
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
4|The Charterhouse of Parma||charterhouse parma;la chartreuse de parme
4|Le Père Goriot||pere goriot;father goriot;old goriot
4|Nana|Nana (novel)|nana
4|Thérèse Raquin||therese raquin;camille raquin;madame raquin
4|Kidnapped|Kidnapped (novel)|kidnapped
4|Waverley|Waverley (novel)|waverley
4|Tristram Shandy|The Life and Opinions of Tristram Shandy, Gentleman|tristram shandy;uncle toby shandy
4|Pamela|Pamela (novel)|pamela;virtue rewarded
4|Clarissa
4|Moll Flanders
4|The Castle of Otranto||castle otranto
4|The Moonstone||moonstone
4|The Woman in White|The Woman in White (novel)|woman white
4|The Swiss Family Robinson||swiss family robinson
4|Ben-Hur: A Tale of the Christ|Ben-Hur: A Tale of the Christ|ben hur
4|King Solomon's Mines||king solomons mines
4|The Island of Doctor Moreau||island doctor moreau;island dr moreau;doctor moreau
4|The Sign of the Four||sign four
4|The Portrait of a Lady||portrait lady
4|The Red Badge of Courage||red badge courage
4|The Awakening|The Awakening (Chopin novel)|awakening
4|Little Dorrit
4|Hard Times|Hard Times (novel)|hard times
4|The Old Curiosity Shop||old curiosity shop
4|Nicholas Nickleby
4|The Pickwick Papers||pickwick papers;pickwick club
4|The Mill on the Floss||mill floss
4|Silas Marner
4|North and South|North and South (Gaskell novel)|north south
4|The Tenant of Wildfell Hall||tenant wildfell hall
4|Quo Vadis|Quo Vadis (novel)|quo vadis
4|The Betrothed|The Betrothed (Manzoni novel)|betrothed;promessi sposi;i promessi sposi
4|Hunger|Hunger (Hamsun novel)|hunger;sult
4|Water Margin||outlaws of the marsh;all men are brothers;shuihu zhuan
4|Noli Me Tángere|Noli Me Tángere (novel)|noli me tangere
4|Gargantua and Pantagruel||gargantua;pantagruel
4|The Mysterious Island||mysterious island;l'île mystérieuse
4|From the Earth to the Moon||earth moon
4|Bel-Ami|Bel Ami|bel ami
5|Effi Briest
5|Max Havelaar
5|Jin Ping Mei||plum golden vase;the golden lotus
5|El filibusterismo||filibusterismo
5|Lazarillo de Tormes||lazarillo
5|Simplicius Simplicissimus||simplicissimus;der abenteuerliche simplicissimus teutsch
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
6|Five Weeks in a Balloon||five weeks balloon;cinq semaines en ballon
`,
nope:{
 'hound baskervilles|wizard oz|wonderful wizard oz|peter pan|1984|great gatsby|ulysses|lord rings|hobbit|anne green gables':'Published in 1900 or later &mdash; dig deeper!',
 'iliad|odyssey|beowulf|aeneid':'An epic poem &mdash; not a novel.',
 'hamlet|romeo juliet|macbeth|king lear':'A play, not a novel!'
}},

{id:'playwrights', cat:'Art & Ideas', q:'Name a playwright born before 1870', hint:'From the Greek stage to the late 1800s',
list:`
1|William Shakespeare||shakespeare;bard;bill shakespear;billy shakes
1|Sophocles
2|Euripides
2|Aeschylus
2|Aristophanes
2|Molière||moliere;jean-baptiste poquelin
2|Christopher Marlowe||marlowe
2|Henrik Ibsen||ibsen
2|Anton Chekhov||chekhov;tchekhov;checkov
2|Oscar Wilde||wilde;wildean;sebastian melmoth
2|George Bernard Shaw||bernard shaw;shaw;gb shaw
2|August Strindberg||strindberg
2|Lope de Vega||lope;félix lope de vega
2|Pedro Calderón de la Barca||calderon
2|Jean Racine||racine
2|Pierre Corneille||corneille
2|Johann Wolfgang von Goethe||goethe;goethean
2|Friedrich Schiller||schiller
2|Ben Jonson||jonson
2|Kalidasa
3|Seneca the Younger||seneca;lucius annaeus seneca;lucius annaeus seneca the younger
3|Plautus
3|Terence||publius terentius afer
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
3|Victor Hugo||hugo;victor marie hugo
3|Alfred de Musset||musset
3|Edmond Rostand||rostand
3|Georges Feydeau||feydeau
3|Luigi Pirandello||pirandello
3|Maxim Gorky||gorky
3|Nikolai Gogol||gogol
3|Voltaire||voltairian;françois-marie arouet
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
4|Tirso de Molina||tirso;gabriel téllez
4|Arthur Schnitzler||schnitzler
4|W. S. Gilbert||gilbert
4|John Gay||gay
4|Alexandre Dumas||dumas
4|Miguel de Cervantes||cervantes
5|Kan'ami||kanami
5|Guan Hanqing
5|Bhāsa||bhasa
5|Hrotsvitha||hrotsvit;canoness hroswitha;hroswitha of gandersheim
5|Hans Sachs||sachs
5|Gil Vicente||vicente
5|Fernando de Rojas||rojas;celestina
5|Franz Grillparzer||grillparzer
5|Friedrich Hebbel||hebbel
5|Adam Oehlenschläger||oehlenschlager
5|Augusta, Lady Gregory|Augusta, Lady Gregory|lady gregory;gregory
5|Dion Boucicault||boucicault
5|Arthur Wing Pinero||pinero
5|Thomas Dekker (writer)|Thomas Dekker (writer)|dekker;thomas dekker
5|John Ford (dramatist)|John Ford (dramatist)|john ford
5|George Peele||peele
5|Robert Greene (dramatist)|Robert Greene (dramatist)|greene;robert greene (16th century)
5|John Lyly||lyly
5|Philip Massinger||massinger
5|George Farquhar||farquhar
5|John Vanbrugh||vanbrugh
5|William Wycherley||wycherley
6|Shudraka
6|Wang Shifu (playwright)|Wang Shifu (playwright)|wang shifu
6|Juan Ruiz de Alarcón||ruiz alarcon;hernando ruiz de alarcón
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
1|Martin Luther||luther;junker jörg
1|John Calvin||calvin;jean calvin
1|Henry VIII of England|Henry VIII|henry 8;henry viii;henry, duke of york
2|Huldrych Zwingli||zwingli;ulrich zwingli
2|Thomas Cromwell||cromwell
2|Thomas Cranmer||cranmer
2|John Knox||knox
2|Philip Melanchthon||melanchthon
2|Ignatius of Loyola||loyola;ignatius;saint ignatius of loyola;st ignatius of loyola
2|Thomas More||more;saint thomas more;st thomas more
2|Erasmus||desiderius erasmus;erasmians;erasmian
2|Jan Hus||hus;john hus
2|John Wycliffe||wycliffe;wyclif;john wyclif;wycliffites
2|William Tyndale||tyndale
2|Elizabeth I||elizabeth 1;elizabeth i;elizabeth of england
2|Mary I of England||bloody mary;mary 1;mary tudor
2|Pope Leo X||leo 10;giovanni di lorenzo de' medici
2|Charles V, Holy Roman Emperor|Charles V, Holy Roman Emperor|charles 5;charles i of spain;carlos i of spain;carlos v, holy roman emperor;charles quint
3|Johann Tetzel||tetzel
3|Anne Boleyn||boleyn;anne bullen
3|Teresa of Ávila||teresa avila;saint teresa of avila;teresa of jesus;st teresa of avila;saint teresa of jesus
3|Francis Xavier||xavier
3|Menno Simons||menno
3|Thomas Müntzer||muntzer;muenzer
3|Thomas Wolsey||wolsey;cardinal wolsey
3|Edward VI||edward 6;edward tudor
3|Henry IV of France||henry 4;henri 4;henry iii of navarre;henry of navarre;henri de navarre
3|Catherine de' Medici||catherine medici
3|Philip II of Spain||philip 2;philip i of portugal;felipe ii of spain;philip i of england
3|Girolamo Savonarola||savonarola
3|Lady Jane Grey||jane grey;lady jane dudley
4|Frederick the Wise||frederick wise;frederick iii, elector of saxony;frederick vi, landgrave of thuringia;friedrich iii, elector of saxony
4|Katharina von Bora||von bora;katharina luther
4|Martin Bucer||bucer;martin butzer
4|Heinrich Bullinger||bullinger
4|Theodore Beza||beza
4|Michael Servetus||servetus;miguel servet;michel servet
4|Hugh Latimer||latimer
4|Gustav Vasa||gustav 1;gustav vasa
4|Gaspard de Coligny||coligny
4|Pope Paul III||paul 3;alessandro farnèse
4|Robert Bellarmine||bellarmine
4|Peter Waldo||waldo;valdes;peter valdes
4|Jacobus Arminius||arminius
4|William Cecil||cecil;lord burghley
4|John of Leiden||jan van leiden;jan bockelson
5|Andreas Karlstadt||karlstadt;andreas bodenstein
5|Balthasar Hubmaier||hubmaier
5|Conrad Grebel||grebel
5|Nicholas Ridley (martyr)|Nicholas Ridley (martyr)|ridley
5|Reginald Pole||pole;cardinal pole
5|Stephen Gardiner||gardiner
5|Christian III of Denmark||christian 3
5|Olaus Petri
5|Mikael Agricola||agricola
5|Charles Borromeo||borromeo;saint charles borromeo;st. charles borromeo
5|Pope Pius V||pius 5;michele ghislieri
5|Peter Canisius||canisius
5|John Foxe||foxe
5|Matthew Parker||parker
5|Albert of Brandenburg|Albert of Brandenburg|albrecht brandenburg;albert of mainz;albrecht of mainz
5|Johann Eck||eck;john eck;johannes eck
5|Thomas Cajetan||cajetan;gaetanus
6|Hans Tausen||tausen
6|Primož Trubar||trubar
6|Faustus Socinus||socinus;fausto paolo sozzini
6|Jan Matthys||matthys
6|Pope Adrian VI||adrian 6;adrian of utrecht
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
2|Vitruvius||marcus vitruvius pollio;vitruv
2|Gustave Eiffel||eiffel
2|Le Corbusier||corbusier;charles-edouard jeanneret
2|Ludwig Mies van der Rohe||mies van der rohe;mies;miesian
2|Walter Gropius||gropius
2|Donato Bramante||bramante
2|Mimar Sinan||sinan;koca mimar sinan agha
2|Inigo Jones
2|Georges-Eugène Haussmann||haussmann;baron haussmann;haussmannian architecture
2|Charles Rennie Mackintosh||mackintosh
3|Leon Battista Alberti||alberti
3|Francesco Borromini||borromini
3|Thomas Jefferson||jefferson
3|Louis Sullivan||sullivan;sullivanesque
3|Isambard Kingdom Brunel||brunel;i. k. brunel;isambard kingdom
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
4|Adolf Loos||loos;adolph loos
4|Victor Horta||horta
4|Charles Garnier (architect)|Charles Garnier (architect)|garnier
4|Eugène Viollet-le-Duc||viollet le duc;eugène-emmanuel viollet-le-duc
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
5|Ustad Ahmad Lahauri||lahauri;ahmad ma'mar lahori
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
1|Wheel||the wheel;wheeled
1|Printing press||gutenberg press;printing presses;printery
1|Compass||magnetic compass
1|Gunpowder||black powder
1|Paper||sheet of paper
1|Telescope
1|Steam engine||steam power;steam propulsion;steam navigation;steam powered
2|Microscope
2|Mechanical clock|Clock|clock
2|Windmill||wind engine
2|Plough||plow;ploughman;steel plow;ploughing
2|Abacus||rekenrek;abaci
2|Glasses||eyeglasses;spectacles
2|Pendulum clock||regulator clock
2|Thermometer
2|Barometer||barometric;baroscope
2|Spinning jenny
2|Water frame
2|Flying shuttle
2|Cotton gin||cotton ginning
2|Hot air balloon||balloon
2|Lightning rod||lightning conductor;lightning protection
2|Bifocals
2|Seed drill||sowing machine;drill;grain drill
2|Smallpox vaccine||vaccine;vaccination;smallpox vaccination
2|Porcelain||fine china
2|Movable type||typefounding;metal movable type
2|Banknote||paper money
2|Crossbow||arbalist;crossbowmen;crossbowman
2|Catapult
2|Trebuchet||manjaniq
2|Stirrup||rikab-dar
2|Sundial||shadow clock;sun clock
3|Horse collar
3|Woodblock printing||block printing;block print
3|Mechanical calculator||pascaline;calculating machine;calculating machines;mechanical calculating machine
3|Slide rule||slipstick
3|Parachute
3|Submarine
3|Sextant
3|Marine chronometer||chronometer
3|Astrolabe
3|Antikythera mechanism||antikythera;anthitykera mechanism
3|Archimedes' screw||archimedes screw
3|Roman concrete||concrete;opus caementicium
3|Water wheel||mill wheel
3|Wheelbarrow
3|Flush toilet||toilet;water closet
3|Piano||pianoforte;pianino
3|Pencil
3|Spinning wheel
3|Loom||tappet loom;shuttle loom;hand-loom
3|Power loom
3|Guillotine
3|Musket
3|Cannon
3|Greek fire
3|Potter's wheel||potters wheel;potter's kick wheel
3|Rocket||fire arrow
3|Silk||silk weaving;filament silk;mulberry silk;silken
3|Water clock||clepsydra
3|Hourglass||sand timer
3|Camera obscura
4|Armillary sphere||armillary;spherical astrolabe
4|Pound lock||canal lock;lock;lock and dam;navigation lock;ship lock
4|Seismometer||seismoscope;seismograph;seismography;seismographs;seismic station
4|Violin||geige
4|Newcomen atmospheric engine||newcomen engine;atmospheric engine;newcomen steam engine
4|Leyden jar
4|Reflecting telescope||reflector telescope
4|Diving bell
4|Steamboat
4|Flintlock
4|Kite||kite flying
4|Toothbrush
4|Lathe
4|Pulley
4|Aeolipile||heros engine
4|Blast furnace||iron furnace;shaft furnace breather
4|Fardier à vapeur||cugnot;steam car;fardier
4|Smallpox inoculation|Variolation|variolation;inoculation
4|Umbrella||parasol
4|Soap||hand soap;bar soap
5|Magic lantern||lantern slide;lantern slides
5|Hydraulic press
5|Octant (instrument)|Octant (instrument)|octant
5|Hygrometer||humidity sensor
5|Anemometer||wind gauge
5|Rain gauge||pluviometer;udometer
5|Odometer
5|Vernier scale||vernier
5|Bellows
5|Crucible steel||crucible technique
6|Micrometer
6|Spirit level||bubble level;engineer's spirit level;level
`,
nope:{
 'telephone|light bulb|lightbulb|car|automobile|airplane|aeroplane|radio|television|computer|internet|camera|photography|electric battery|battery|train|locomotive':'Invented after 1800 &mdash; that belongs in a later dig!',
 'fire':'Discovered, not invented &mdash; and long before history!'
}},

{id:'inv2', cat:'Science & Invention', q:'Name an invention of the 19th century', hint:'1800&ndash;1899',
list:`
1|Telephone||phone
1|Incandescent light bulb||light bulb;lightbulb;electric light;incandescent lamp;incandescent light;tungsten light;incandescent lighting
1|Automobile|Car|car;motor car;motorcar;benz patent motorwagen;cars
1|Photograph||photography;camera;photo;photos;still photo;photographic image
1|Steam locomotive||locomotive;train;railway;railroad;steam train;steam trains
1|Electrical telegraph||telegraph
1|Phonograph||turntable;record player;gramaphone
2|Electric battery|Battery (electricity)|battery;voltaic pile;electric batteries
2|Morse code
2|Bicycle||bike;velocipede;bycicle;push-bike
2|Typewriter||typing machine
2|Sewing machine
2|Dynamite
2|Revolver||six shooter
2|Machine gun||machine gunner
2|Stethoscope
2|X-ray||x rays;xray;x-radiation
2|Motion picture|Film|movie;movies;cinema;film;moving pictures;moving images;moving image;motion photography
2|Radio||radiocommunication service
2|Elevator||lift;safety elevator
2|Internal combustion engine||combustion engine;internal combustion;car engine;car engines
2|Braille
2|Pasteurization||pasteurisation;pasteurized;pasteurised;pasteurizing
2|Aspirin||acetylsalicylic acid
3|Gatling gun||gatling
3|General anaesthesia|General anaesthesia|anesthesia;anaesthesia;ether anaesthesia
3|Refrigerator||fridge;refrigeration
3|Electric motor||electric engine;rotary motor;electric actuators
3|Electric generator||dynamo;generator;energy generation
3|Diesel engine||diesel propulsion;compression ignition engine;diesel motor;diesel car
3|Pneumatic tire|Tire|pneumatic tyre;tire;tyre;car tire;rubber tire;automobile tire;rubber tires
3|Barbed wire||barb wire
3|Safety pin
3|Zipper||zip;zip fastener
3|Match||friction match;matches;matchstick;matchsticks
3|Bessemer process||bessemer
3|Airship||zeppelin;dirigible
3|Hypodermic needle||syringe;hypodermic;hypodermic injection
3|Tin can||canned food;canning;steel can;food can
3|Analytical Engine||analytical engine;babbage engine
3|Difference engine
3|Jacquard machine||jacquard loom;jacquard weaving;jacquard knit;jacquard woven;weaving machine
3|Microphone
3|Gramophone record|Gramophone record|gramophone;vinyl record;vinyl records;phonograph records;shellac disc
3|Alternating current||ac power;sinusoidal current
3|Tesla coil
3|Vulcanization||vulcanised rubber;vulcanized rubber;vulcanized;vulcanizing;vulcanised;vulcanize
3|Ferris wheel||observation wheel;giant wheel
3|Jeans||blue jeans
3|Coca-Cola||coke;coca cola;coke-cola
3|Postage stamp||penny black;stamp
3|Daguerreotype||daguerrotypist
3|Saxophone
3|Motorcycle||motorbike;motorbikes
4|Maxim gun||maxim machine gun
4|Escalator
4|Fountain pen
4|Reinforced concrete||ferro-concrete;ferrous concrete;reinforced cement concrete;steel reinforced concrete
4|Ironclad warship||ironclad
4|Glider (sailplane)|Glider (sailplane)|glider;sailplane;sailplanes
4|Antiseptic|Antiseptic|antiseptic surgery;germicide
4|Contact lens||contact lenses;contacts
4|Dishwasher||dishwashing machine
4|Washing machine||clothes washer;laundry machine
4|Lawn mower||lawnmower;lawn mowing;rotary-blade lawn mower
4|Punched card||punch card
4|Fax||facsimile;pantelegraph;telefax;fax machines;fax machine
4|Loudspeaker||speaker
4|Induction motor||asynchronous motor;ac induction motor
4|Transformer
4|Steam turbine||parsons turbine;geared turbine;curtis steam turbine
4|Torpedo||torpedoes;torpedoed
4|Nitroglycerin||nitroglycerine;glyceryl trinitrate;trinitroglycerin
4|Electric chair
4|Roller coaster||rollercoaster
4|Toilet paper||toilet roll;bathroom tissue
4|Traffic light||traffic lights;traffic signal;traffic semaphore;amber light;stop light;stoplights
4|Davy lamp||safety lamp
4|Kaleidoscope
4|Photographic film||roll film;film photograph;daylight film;wet film
4|Harmonica||mouth organ;harmonicist;french harp
4|Accordion||accordionist
4|Metronome
4|Winchester rifle||winchester
4|Tram||streetcar;trolley;tram system;tramcar;tramcars
4|Rotary printing press||cylinder press;rotary press
4|Safety razor||razor
5|Arc lamp
5|Stereoscope||stereograph;stereo card
5|Celluloid
5|Parkesine
5|Linotype machine||linotype
5|Ophthalmoscope
5|Sphygmomanometer||blood pressure cuff;blood pressure monitor;blood pressure meter
5|Smokeless powder||smokeless gunpowder;smokeless propellant
5|Steam hammer||drop hammer
5|Portland cement
5|Stapler
5|Ballpoint pen||ball point;ballpen
5|Paper clip
5|Christmas card
5|Tuba
6|Pencil sharpener||pencil parer
6|Clothes iron|Clothes iron|electric iron;iron;steam iron
`,
nope:{
 'airplane|aeroplane|plane|television|tv|computer|internet|penicillin|radar|jet engine':'From the 1900s &mdash; this dig wants 1800&ndash;1899.',
 'printing press|telescope|compass|wheel|steam engine|microscope':'Older than 1800 &mdash; try the earlier inventions dig!'
}},

{id:'scientists', cat:'Science & Invention', q:'Name a scientist born before 1900', hint:'Physics, chemistry, biology, medicine, astronomy',
list:`
1|Albert Einstein||einstein
1|Isaac Newton||newton;i. newton
1|Charles Darwin||darwin
1|Galileo Galilei||galileo
1|Marie Curie||curie;madame curie;maria skłodowska;marie sklodowska
1|Nikola Tesla||tesla
2|Thomas Edison||edison
2|Michael Faraday||faraday
2|James Clerk Maxwell||maxwell
2|Louis Pasteur||pasteur
2|Gregor Mendel||mendel
2|Nicolaus Copernicus||copernicus;mikołaj kopernik;kopernik
2|Johannes Kepler||kepler
2|Archimedes
2|Dmitri Mendeleev||mendeleev
2|Max Planck||planck
2|Niels Bohr||bohr;niels henrik david bohr
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
2|Carl Linnaeus||linnaeus;carl von linné;linné
2|Alessandro Volta||volta
2|Hippocrates
3|Aristotle||stagirite;aristotelis
3|Alfred Nobel||nobel
3|Benjamin Franklin||franklin
3|André-Marie Ampère||ampere
3|Georg Ohm||ohm;georg simon ohm
3|James Watt||watt
3|Alexander von Humboldt||humboldt
3|Edward Jenner||jenner
3|Joseph Lister||lister
3|Robert Koch||koch
3|Pierre Curie
3|Wilhelm Röntgen||rontgen;roentgen;wilhelm conrad roentgen
3|Heinrich Hertz||hertz
3|Christiaan Huygens||huygens
3|Blaise Pascal||pascal
3|Antonie van Leeuwenhoek||leeuwenhoek
3|William Harvey||harvey
3|Andreas Vesalius||vesalius
3|Galen||galenic medicine;galenus
3|Ptolemy||ptolemaeus;claudius ptolemaeus;claudius ptolemaus;ptolemeus
3|Eratosthenes
3|Avicenna||ibn sina;avicennian logic;abuali ibn sino;abu ali sina
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
3|Ivan Pavlov||pavlov;i. p. pavlov
3|Lise Meitner||meitner
3|Leonhard Euler||euler
3|René Descartes||descartes;renatus cartesius;cartesius
3|Francis Bacon||viscount st alban;viscount st albans
3|Hypatia
3|Florence Nightingale||nightingale
3|George Washington Carver||carver
4|Al-Khwarizmi||khwarizmi;muḥammad ibn mūsā al-ḵwārizmī
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
4|J. J. Thomson||jj thomson;joseph john thomson
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
4|Pierre-Simon Laplace||laplace;laplacean correction
4|Joseph-Louis Lagrange||lagrange
4|Evangelista Torricelli||torricelli
4|Daniel Bernoulli||bernoulli
4|Democritus
4|Thales of Miletus||thales
4|Hipparchus
4|Aristarchus of Samos||aristarchus
4|Jabir ibn Hayyan||jabir;geber
4|Abu Bakr al-Razi||rhazes;al razi;muhammad ibn zakariya al-razi;muhammad ibn zakarīya rāzi;muhammad ibn zakariya ar-razi
4|Roger Bacon||doctor mirabilis
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
5|Niels Henrik Abel||abel;niels abel
5|Ole Rømer||romer;roemer
5|Jöns Jacob Berzelius||berzelius
5|Carl Wilhelm Scheele||scheele
5|Anders Jonas Ångström||angstrom
5|Gustav Kirchhoff||kirchhoff
5|Hermann von Helmholtz||helmholtz
5|Justus von Liebig||liebig
5|August Kekulé||kekule;friedrich august kekule von stradonitz
5|Ernst Haeckel||haeckel
5|Rudolf Virchow||virchow
5|Thomas Hunt Morgan||hunt morgan
5|Nicolas Steno||steno;niels stensen
5|Giovanni Domenico Cassini||cassini
5|Anaximander||anaximandros
5|Empedocles
5|Theophrastus
5|Ulugh Beg
5|Nasir al-Din al-Tusi||al tusi;tusi;khajeh nasir toosi
5|Georgius Agricola||agricola;georg bauer
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
1|Marie Curie||curie;madame curie;maria skłodowska;marie sklodowska
1|Ada Lovelace||lovelace;ada;ada byron
2|Rosalind Franklin||franklin
2|Lise Meitner||meitner
2|Hypatia
2|Mary Anning||anning
2|Florence Nightingale||nightingale
2|Katherine Johnson||katherine johnson;katherine goble
2|Grace Hopper||hopper
3|Emmy Noether||noether
3|Caroline Herschel||herschel
3|Dorothy Hodgkin||hodgkin
3|Chien-Shiung Wu||wu;madame wu;c. s. wu
3|Barbara McClintock||mcclintock
3|Rachel Carson||carson
3|Irène Joliot-Curie||irene joliot curie;joliot curie;irène curie
3|Henrietta Swan Leavitt||leavitt
3|Elizabeth Blackwell||blackwell
3|Hedy Lamarr||lamarr
3|Margaret Mead||mead
3|Maria Montessori||montessori
4|Gertrude B. Elion||elion
4|Gerty Cori||cori
4|Maria Goeppert Mayer||goeppert mayer;maria goeppert;maria mayer;maria göppert
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
4|Alice Ball||ball;alice augusta ball
4|Dorothy Vaughan||vaughan
4|Mary Jackson (engineer)|Mary Jackson (engineer)|mary jackson
4|Marie Tharp||tharp
4|Inge Lehmann||lehmann
4|Hildegard of Bingen||hildegard;st. hildegard of bingen
4|Maria Sibylla Merian||merian
4|Virginia Apgar||apgar
4|Anna Freud
5|Williamina Fleming||fleming;williamina paton stevens fleming
5|Hertha Ayrton||ayrton
5|Ellen Gleditsch||gleditsch
5|Trota of Salerno||trotula;trota
5|Laura Bassi||bassi
5|Maria Gaetana Agnesi||agnesi
5|Rebecca Lee Crumpler||crumpler
5|Ida Noddack||noddack;ida tacke
5|Kathleen Lonsdale||lonsdale
5|Helen B. Taussig||taussig
5|Ruth Benedict||benedict
5|Karen Horney||horney
5|Melanie Klein||klein
5|Janaki Ammal||ammal
5|Anandi Gopal Joshi||anandibai joshi;anandibai joshee
6|Kristine Bonnevie||bonnevie
6|Mary Putnam Jacobi||putnam jacobi;mary corinna putnam jacobi
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
1|Spanish flu||1918 flu;1918 influenza;1918 pandemic;spanish influenza;spanish influenza pandemic;great influenza pandemic;1918 flu epidemic
1|COVID-19 pandemic||covid;covid 19;coronavirus;corona;2019–20 wuhan coronavirus outbreak;2019–20 coronavirus outbreak;2020 pandemic;2019-20 covid-19 pandemic
2|Plague of Justinian||justinian plague
2|Plague of Athens||athens plague;athenian plague
2|Antonine Plague||antonine;plague galen
2|Great Plague of London||great plague;london plague
2|Cholera pandemics|Cholera outbreaks and pandemics|cholera
2|HIV/AIDS|HIV/AIDS|aids;hiv;aids epidemic;aids patients;acquired immune deficiency syndrome;acquired immunodeficiency syndrome;aids-related complications
2|Smallpox|History of smallpox|smallpox epidemic
2|Polio|History of polio|polio epidemic;poliomyelitis
3|Third plague pandemic||third pandemic;modern plague
3|1957–1958 influenza pandemic|1957–1958 influenza pandemic|asian flu;1957 flu;1957–58 influenza pandemic
3|Hong Kong flu||1968 flu;1968 flu pandemic
3|1889–1890 pandemic|1889–1890 pandemic|russian flu;1889 flu;1889–90 flu pandemic;1889–90 influenza pandemic
3|Cocoliztli epidemics||cocoliztli
3|Plague of Cyprian||cyprian plague
3|1793 Philadelphia yellow fever epidemic||philadelphia yellow fever;yellow fever epidemic of 1793
3|Yellow fever||yellow fever epidemic;american plague;bronze john
3|1854 Broad Street cholera outbreak||broad street;broad street pump
3|Epidemic typhus||typhus;putrid fever
3|Great Plague of Marseille||marseille plague
3|Great Plague of Vienna||vienna plague
3|Italian plague of 1629–1631||milan plague;italian plague;italian plague of 1629–31;great plague of milan
3|Sweating sickness||english sweat;sweating sickness;english sweating sickness;sudor anglicus
3|Dancing plague of 1518||dancing plague;dancing mania
3|2009 swine flu pandemic||swine flu;h1n1;2009 flu pandemic;2009 flu pandemic summary
3|SARS|2002–2004 SARS outbreak|sars;2002-2004 sars outbreak;sars epidemic;progress of the sars outbreak;2003 sars outbreak
3|Western African Ebola virus epidemic||ebola;ebola epidemic;west african ebola virus epidemic;2014 west africa ebola outbreak;west african ebola epidemic;west africa ebola virus epidemic
4|Zika|2015–2016 Zika virus epidemic|zika
4|MERS|Middle East respiratory syndrome|mers;middle east respiratory syndrome;middle eastern respiratory syndrome
4|Mpox|2022–2023 mpox outbreak|mpox;monkeypox;2022 mpox outbreak
4|Great Plague of 1738||1738 plague
4|Russian plague of 1770–1772||moscow plague;plague riot;russian plague of 1770–72
4|Manchurian plague||manchurian plague 1910
4|Encephalitis lethargica||sleeping sickness epidemic;lethargica;lethargic encephalitis
4|Syphilis|History of syphilis|syphilis;great pox
4|Tuberculosis|History of tuberculosis|tuberculosis;consumption;tb
4|Great Plague of Seville||seville plague
5|Plague of Amwas||amwas;plague of emmaus
5|1817–1824 cholera pandemic|1817–1824 cholera pandemic|first cholera pandemic;first cholera pandemic (1817–24)
5|1846–1860 cholera pandemic|1846–1860 cholera pandemic|third cholera pandemic;third cholera pandemic (1852–60)
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
1|Apollo 11||appolo 11;apollo eleven
1|Sputnik 1||sputnik
1|Hubble Space Telescope||hubble
1|Voyager 1||voyager
2|Apollo 13||appolo 13
2|Vostok 1||gagarin flight;first human spaceflight;first manned space flight
2|Voyager 2
2|International Space Station||iss;space station
2|Mir||mir space station
2|Space Shuttle Challenger||challenger
2|Apollo 8
2|Sputnik 2||laika
2|Cassini–Huygens||cassini;huygens probe;saturn orbiter/titan probe
2|Pioneer 10
2|Viking 1
2|Mars Pathfinder||pathfinder;sojourner
2|Skylab
3|Explorer 1
3|Luna 2
3|Luna 9
3|Apollo 1||apollo 204 review board;apollo one
3|Mercury-Redstone 3||freedom 7
3|Mercury-Atlas 6||friendship 7;mercury friendship 7;ma-6 mission
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
3|Buran (spacecraft)|Buran (spacecraft)|buran;shuttle buran;russian space shuttle
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
4|NEAR Shoemaker||near;near earth asteroid rendezvous
4|Solar and Heliospheric Observatory||soho;soho spacecraft
4|Chandra X-ray Observatory||chandra
4|Cosmic Background Explorer||cobe
4|Soyuz 1
4|Soyuz 11
4|Aryabhata (satellite)|Aryabhata (satellite)|aryabhata
4|STS-7||sts 7
4|Gemini 4
5|Ulysses (spacecraft)|Ulysses (spacecraft)|ulysses
5|Deep Space 1||deep space one
5|Lunar Prospector
5|Clementine (spacecraft)|Clementine (spacecraft)|clementine
5|Compton Gamma Ray Observatory||compton;cgro
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
2|Charles Lindbergh||lindbergh;lucky lindy;lone eagle
2|Montgolfier brothers||montgolfier;joseph montgolfier;joseph-michel montgolfier;jacques montgolfier
2|Otto Lilienthal||lilienthal
2|Louis Blériot||bleriot
2|Ferdinand von Zeppelin||zeppelin;count zeppelin
2|Alberto Santos-Dumont||santos dumont
2|Manfred von Richthofen||red baron;richthofen;baron manfred von richtofen
2|Igor Sikorsky||sikorsky
2|Howard Hughes||hughes;howard robard hughes, jr.
2|Bessie Coleman||coleman
3|Glenn Curtiss||curtiss
3|George Cayley||cayley
3|Leonardo da Vinci||da vinci;leonardo
3|Charles Kingsford Smith||kingsford smith
3|Amy Johnson
3|Alcock and Brown||alcock;brown
3|Richard E. Byrd||byrd;richard evelyn byrd;richard byrd jr.
3|Roland Garros (aviator)|Roland Garros (aviator)|garros;roland garros;roland georges garros
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
4|Charles Rolls||rolls;charles stewart rolls
4|Hanna Reitsch||reitsch
4|Valery Chkalov||chkalov
5|Bert Hinkler||hinkler
5|Hubert Wilkins||wilkins
5|Tryggve Gran||gran
5|Hiram Maxim||maxim
5|Percy Pilcher||pilcher
5|Gustave Whitehead||whitehead;gustav weißkopf
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
5|Samuel Franklin Cody||cody;samuel cody
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
6|Charlie Taylor (mechanic)|Charlie Taylor (mechanic)|charlie taylor;charles edward taylor
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
1|Isaac Newton||newton;i. newton
2|Carl Friedrich Gauss||gauss
2|Leonhard Euler||euler
2|René Descartes||descartes;renatus cartesius;cartesius
2|Blaise Pascal||pascal
2|Pierre de Fermat||fermat
2|Gottfried Wilhelm Leibniz||leibniz
2|Fibonacci||leonardo pisano;leonardo bonacci;leonardo of pisa
2|Ada Lovelace||lovelace;ada byron
2|Bernhard Riemann||riemann
2|Srinivasa Ramanujan||ramanujan
2|Al-Khwarizmi||khwarizmi;muḥammad ibn mūsā al-ḵwārizmī
2|David Hilbert||hilbert
2|Georg Cantor||cantor
2|Henri Poincaré||poincare
2|Évariste Galois||galois
2|Hypatia
3|Thales of Miletus||thales
3|Omar Khayyam||khayyam;xayyam;omar the tentmaker
3|Aryabhata
3|Brahmagupta
3|John Napier||napier
3|Emmy Noether||noether
3|Charles Babbage||babbage
3|George Boole||boole
3|Joseph-Louis Lagrange||lagrange
3|Pierre-Simon Laplace||laplace;laplacean correction
3|Joseph Fourier||fourier
3|Augustin-Louis Cauchy||cauchy
3|Niels Henrik Abel||abel;niels abel
3|Karl Weierstrass||weierstrass
3|Sofya Kovalevskaya||kovalevskaya;sonia kovalevsky
3|Sophie Germain||germain
3|Christiaan Huygens||huygens
3|Gerolamo Cardano||cardano;jerome cardan;hieronymus cardanus
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
4|Jacob Bernoulli||jakob i bernoulli;james bernoulli
4|Johann Bernoulli
4|Niccolò Fontana Tartaglia||tartaglia
4|François Viète||viete;vieta;franciscus vieta
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
1|Santa María|Santa María (ship)|santa maria;gallega
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
3|Chinese treasure ship||treasure ship;zheng he ship;baochuan
4|Halve Maen||half moon;halve maen
4|Nimrod|Nimrod (ship)|nimrod
4|Belgica|Belgica (1884)|belgica
4|SS Vega||vega
4|Matthew (ship)|Matthew (ship)|matthew
4|São Gabriel|São Gabriel (ship)|sao gabriel
4|Ra II||ra 2;ra
4|RV Calypso||calypso
4|USS Nautilus (SSN-571)|USS Nautilus (SSN-571)|nautilus;nautilus-class submarine (1954)
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
2|Mary Leakey||mary douglas leakey
2|Louis Leakey||leakey foundation
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
3|Richard Leakey||richard erskine frere leakey
3|Basil Brown (archaeologist)|Basil Brown (archaeologist)|basil brown
3|Henry Rawlinson||rawlinson
3|Thomas Jefferson||jefferson
4|Michael Ventris||ventris
4|Aurel Stein||stein
4|Eugène Dubois||dubois
4|Raymond Dart||dart
4|Edith Pretty||pretty
4|Marija Gimbutas||gimbutas;marija gimbutienė
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
5|Augustus Pitt Rivers||pitt rivers;augustus henry lane-fox
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
1|Silk Road||silk route;silk trade;silk way
2|Spice trade||spice route
2|Amber Road||amber route;amber trail;amber path
2|Incense Route||incense road;frankincense trail;perfume route;frankincense road
2|Trans-Saharan trade||trans saharan;saharan trade;caravan trade
2|Triangular trade||atlantic slave trade;triangle trade;triangular slave trade
2|Oregon Trail||oregon national historic trail
2|Maritime Silk Road||maritime silk route
3|Royal Road||persian royal road
3|Grand Trunk Road||grand trunk;great trunk road;gt karnal road;gt road
3|Trade route from the Varangians to the Greeks||varangians greeks;austrvegr;route from varangians to greeks;dvina trade route
3|Manila galleon||manila galleons;galleon trade;nao de china;manila-acapulco galleon trade;tornaviaje;manila-acapulco galleon
3|Santa Fe Trail||santa fe national historic trail;old santa fe trail
3|Inca road system||qhapaq nan;inca roads
3|Northwest Passage||northwestern passages
3|Indian Ocean trade
4|Tea Horse Road||tea horse;ancient tea route;southern silk road
4|Volga trade route||volga route;khazarian way
4|Via Maris||way of horus
4|King's Highway (ancient)|King's Highway (ancient)|kings highway
4|Chisholm Trail
4|California Trail||california national historic trail
4|Cape Route||sea route india;trading route to india
4|Northern Sea Route||northeast passage;northern maritime route
4|Spanish treasure fleet||treasure fleet;spanish silver fleet;spanish plate fleet;flota system
4|Tōkaidō (road)|Tōkaidō (road)|tokaido
4|Khyber Pass||khyber
4|Via Egnatia||egnatian way
4|Burma Road
5|Old Salt Route||salt road
5|Via Salaria
5|Natchez Trace
5|El Camino Real (California)|El Camino Real (California)|camino real
5|Nakasendō||nakasendo
5|Darb al-Arbaʽin||forty days road;darb al arbain
5|Via Francigena
5|Siberian Route||tea road;great siberian road
5|Great North Road (Great Britain)|Great North Road (Great Britain)|great north road
6|Via Claudia Augusta||via claudia;via claudia julia augusta
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
2|Richard E. Byrd||byrd;richard evelyn byrd;richard byrd jr.
2|Frederick Cook||frederick cook
2|John Franklin||franklin
2|Lawrence Oates||oates;captain oates
2|Douglas Mawson||mawson
2|Vitus Bering||bering
2|Willem Barentsz||barentsz;barents;william barents
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
5|Elisha Kent Kane||kane;elisha kane
5|Charles Francis Hall||charles hall
5|John Ross (Royal Navy officer)|John Ross (Royal Navy officer)|john ross
5|Mikhail Lazarev||lazarev
5|Charles Wilkes||wilkes
5|Jean-Baptiste Charcot||charcot
5|Wilhelm Filchner||filchner
5|Nobu Shirase||shirase
5|Otto Nordenskjöld||otto nordenskjold
5|Semyon Dezhnev||dezhnev;dezhnyov
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
1|Lewis and Clark Expedition||lewis clark;corps discovery;louis and clark
1|Kon-Tiki expedition||kon tiki
2|Magellan expedition||magellan circumnavigation;magellans voyage;magellan;first circumnavigation of the globe;armada de molucca
2|Terra Nova Expedition||scott expedition;terra nova;british antarctic expedition, 1910–13;british antarctic expedition 1910
2|Imperial Trans-Antarctic Expedition||endurance expedition;shackleton expedition;transantarctic expedition
2|Amundsen's South Pole expedition||amundsen expedition;amundsens expedition
2|Franklin's lost expedition||franklin expedition
2|Burke and Wills expedition||burke wills
2|1953 British Mount Everest expedition||everest 1953;hillary tenzing
2|Second voyage of HMS Beagle||beagle voyage;voyage beagle
2|Nansen's Fram expedition||fram expedition;1893 arctic expedition
2|Voyages of Christopher Columbus||columbus voyage;columbus 1492;expedition of christopher columbus;voyages of columbus;christopher columbus's voyages
3|Discovery of the sea route to India||vasco da gama voyage
3|Ming treasure voyages||zheng he voyages;treasure voyages;zheng he's treasure voyages
3|First voyage of James Cook||cook first voyage;cooks voyage
3|Challenger expedition
3|First Fleet
3|The Travels of Marco Polo||travels marco polo;il milione;le livre des merveilles
3|Rihla|Rihla|ibn battuta travels
4|Lapérouse expedition||laperouse expedition
4|Discovery Expedition||british national antarctic expedition
4|Nimrod Expedition||british antarctic expedition, 1907–09
4|Andrée's Arctic balloon expedition||andree expedition;andree balloon
4|Coronado expedition||coronado
4|Hernando de Soto expedition|Hernando de Soto|de soto expedition
4|Narváez expedition||narvaez expedition
4|Emin Pasha Relief Expedition||emin pasha
4|Powell Geographic Expedition of 1869||powell expedition;powell geographic expedition
4|Great Northern Expedition||great northern expedition;second kamchatka expedition
4|Ra expeditions||ra expedition
4|1924 British Mount Everest expedition||mallory irvine;everest 1924;mallory's 1924 expedition
5|Belgian Antarctic Expedition||belgica expedition
5|Lady Franklin Bay Expedition||greely expedition
5|Jeannette expedition||jeannette
5|Vega expedition
5|Pike Expedition||pike expedition;zebulon pike expedition
5|Hayden Geological Survey of 1871||hayden survey
5|First Kamchatka expedition||kamchatka expedition
5|Malaspina Expedition||malaspina
5|Baudin expedition to Australia|Baudin expedition to Australia|baudin expedition
5|Commonwealth Trans-Antarctic Expedition||trans antarctic expedition 1958
5|Australasian Antarctic Expedition||mawson expedition
5|Southern Cross Expedition||southern cross
5|1954 Italian expedition to K2||k2 1954
6|Shackleton–Rowett Expedition||quest expedition
6|Second German North Polar Expedition||german north polar expedition;german polar expedition
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
1|Neuschwanstein Castle||neuschwanstein;schloss neuschwanstein;fairytale castle
1|Windsor Castle||windsor
1|Edinburgh Castle
1|Tower of London
2|Bran Castle||dracula castle;draculas castle
2|Himeji Castle||himeji
2|Prague Castle
2|Château de Chambord||chambord
2|Alhambra
2|Balmoral Castle||balmoral
2|Moscow Kremlin||kremlin;kreml
2|Château de Chenonceau||chenonceau
3|Hohenzollern Castle||hohenzollern;burg hohenzollern
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
3|Malbork Castle||malbork;marienburg;ordensburg marienburg
3|Wawel Castle||wawel;kraków castle
3|Krak des Chevaliers||crac des chevaliers
3|Cité de Carcassonne||carcassonne
3|Castel Sant'Angelo||castel santangelo;sant angelo
3|Osaka Castle
3|Red Fort||delhi fort;lal quila;lal kila
3|Alcázar of Segovia||alcazar segovia;segovia castle
3|Alnwick Castle
3|Masada
4|Akershus Fortress||akershus
4|Harlech Castle||castell harlech
4|Urquhart Castle
4|Bunratty Castle
4|Chillon Castle||chillon;château de chillon;château of chillon;chateau du chillon
4|Hohensalzburg Fortress||hohensalzburg;festung hohensalzburg
4|Bled Castle
4|Peleș Castle||peles
4|Corvin Castle||hunyad castle;hunedoara castle;castle of vajdahunyad;castelul corvinilor
4|Trakai Island Castle||trakai
4|Château Gaillard
4|Matsumoto Castle
4|Nijō Castle||nijo castle
4|Edo Castle||chiyoda castle
4|Hwaseong Fortress||hwaseong
4|Mehrangarh
4|Amber Fort||amer fort;amber palace
4|Citadel of Aleppo
4|Elmina Castle||são jorge da mina;fort elmina
4|Bamburgh Castle||bebbanburg;din guardi;din guaire
4|Kenilworth Castle
4|Tintagel Castle||tintagel
4|Cardiff Castle
4|Hearst Castle||hearst residence
4|Dunnottar Castle||dunnottar;dunottar
4|Glamis Castle
4|Rock of Cashel||cashel
4|Burg Eltz||eltz castle
4|Wartburg
4|Heidelberg Castle||heidelberg palace
5|Spiš Castle||spis castle
5|Kalmar Castle
5|Château de Vincennes||vincennes;castle of vincennes;fort of vincennes
5|Golconda Fort||golconda
5|Rumelihisarı||rumeli hisari
5|Château de Pierrefonds||pierrefonds
5|Castle of Good Hope||castle de goede hoop
5|Cape Coast Castle||fort carlsborg;cape castle
5|Château de Saumur
5|Castillo de San Marcos
5|Rochester Castle
5|Cawdor Castle
5|Kilkenny Castle
5|Lichtenstein Castle
5|Gripsholm Castle||gripsholm
5|Frederiksborg Castle||frederiksborg palace;frederiksborg slot
5|Olavinlinna||st. olaf's castle;olofsborg
5|Bergenhus Fortress||bergenhus
6|Marksburg
6|Egeskov Castle||egeskov
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
1|Notre-Dame de Paris||notre dame;notre dame cathedral;cathédrale notre-dame de paris
1|St. Peter's Basilica||st peters;saint peters;saint peters basilica;st peters basilica;basilica of saint peter;archpriest of saint peter's basilica;basilica of st. peter;archpriest of st. peter's basilica
1|Hagia Sophia||aya sofya;ayasofya;hagia sofia;church of the holy wisdom;ayia sophia
1|Sagrada Família||sagrada familia;basilica of the sagrada familia;la sagrada familia;basilica de la sagrada familia
2|Westminster Abbey||st peter's abbey, westminster
2|St Paul's Cathedral||st pauls;saint pauls cathedral;st pauls cathedral
2|Sistine Chapel||sistine
2|Cologne Cathedral||kolner dom
2|Milan Cathedral||duomo milano;duomo milan;museo del duomo di milano
2|Florence Cathedral||duomo florence;santa maria del fiore;duomo di firenze
2|Chartres Cathedral||chartres;notre-dame de chartres;cathédrale notre-dame de chartres
2|Saint Basil's Cathedral||st basils;saint basils
2|Canterbury Cathedral||christ church, canterbury;christ church priory;christ church cathedral priory
2|Blue Mosque|Sultan Ahmed Mosque|sultan ahmed mosque
2|Dome of the Rock
2|Masjid al-Haram||great mosque mecca;masjid al haram;grand mosque of mecca;al-masjid al-haram;al-haram mosque
2|Kaaba||ka'bah
2|Golden Temple||harmandir sahib
2|Angkor Wat||angkor protected landscape
2|Borobudur
2|Temple of Heaven
2|Shwedagon Pagoda||shwedagon
2|Western Wall||wailing wall;west wall
2|Mosque–Cathedral of Córdoba||mezquita;great mosque cordoba;mosque cathedral cordoba;cordoba mosque;grand mosque of cordoba;la mezquita;cordoba cathedral
2|Al-Aqsa Mosque||al aqsa;qibli mosque
2|Church of the Holy Sepulchre||holy sepulchre;basilica of the holy sepulchre;basilica of the holy sepulcher
2|St Mark's Basilica||st marks;saint marks basilica;san marco;basilica of st. mark;basilica di san marco;basilica of san marco;cathedral of saint mark, venice
2|Mont-Saint-Michel||mont saint michel;mont st michel;le mont-saint-michel
2|Parthenon||temple of athena
2|Pantheon, Rome|Pantheon, Rome|pantheon;roman pantheon
3|Nidaros Cathedral||nidarosdomen;nidaros;trondheim cathedral
3|Pisa Cathedral||leaning tower pisa;pisa duomo;duomo di pisa
3|Reims Cathedral||notre-dame de reims;cathedral of notre-dame, reims;cathédrale notre-dame de reims
3|Amiens Cathedral||notre-dame d'amiens;cathedral of notre dame, amiens
3|Seville Cathedral||cathedral of sevilla;virgen de la antigua
3|Cathedral of Santiago de Compostela||santiago de compostela cathedral
3|Salisbury Cathedral
3|York Minster||york cathedral
3|Durham Cathedral||durham abbey
3|Lincoln Cathedral||lincoln mystery plays
3|Sainte-Chapelle||sainte chapelle;la sainte-chapelle
3|Basilica of Saint-Denis||saint denis basilica;abbey of saint-denis;basilique saint-denis;abbey church of st denis;royal basilica of saint denis
3|Aachen Cathedral||aachener dom
3|St. Stephen's Cathedral, Vienna|St. Stephen's Cathedral, Vienna|stephansdom;st stephens cathedral;vienna cathedral
3|St. Vitus Cathedral||st vitus;saint vitus cathedral;prague cathedral;cathedral of saint vitus
3|Sacré-Cœur, Paris|Sacré-Cœur, Paris|sacre coeur;basilique du sacré-cœur, paris;basilique du sacré-cœur de montmartre;basilique du sacré-coeur;basilica of sacré-coeur
3|Cathedral of Christ the Saviour||christ saviour cathedral
3|Saint Isaac's Cathedral||st isaacs
3|Süleymaniye Mosque||suleymaniye;suleiman mosque
3|Shah Mosque (Isfahan)|Shah Mosque (Isfahan)|shah mosque;imam mosque;masjed-e imam;masjed-e shah
3|Jama Masjid, Delhi|Jama Masjid, Delhi|jama masjid;jama mosque, delhi
3|Badshahi Mosque||badshahi masjid
3|Great Mosque of Djenné||djenne mosque
3|Umayyad Mosque||great mosque of damascus;great umayyad mosque of damascus;grand mosque of damascus
3|Kinkaku-ji||golden pavilion;kinkakuji;rokuon-ji;temple of the golden pavilion
3|Tōdai-ji||todai ji;todaiji;nara great buddha
3|Sensō-ji||senso ji;sensoji;asakusa temple
3|Fushimi Inari-taisha||fushimi inari
3|Kiyomizu-dera||kiyomizu dera;kiyomizu temple
3|Potala Palace||potala
3|Shaolin Monastery||shaolin temple;shaolin monk;shaolin monks
3|Mahabodhi Temple||mahabodhi
3|Meteora
3|Rock-Hewn Churches, Lalibela|Rock-Hewn Churches, Lalibela|lalibela
3|Karnak||temple of karnak;ipet-sut;great temple at karnak
3|Abu Simbel||abu simbel temples;temple of ramesses ii;temple of abu simbel;aboo-simbel
3|Solomon's Temple||temple solomon;first temple
4|Urnes Stave Church||urnes
4|Borgund Stave Church||borgund
4|Wells Cathedral
4|Ely Cathedral
4|Winchester Cathedral
4|Speyer Cathedral
4|Strasbourg Cathedral||notre dame of strasbourg;notre-dame de strasbourg;cathédrale notre-dame-de-strasbourg
4|Ulm Minster||ulmer münster
4|Matthias Church||matthias
4|Kazan Cathedral, Saint Petersburg|Kazan Cathedral, Saint Petersburg|kazan cathedral
4|Hagia Irene
4|Chora Church||chora
4|Selimiye Mosque||selimiye
4|Sheikh Lotfollah Mosque
4|Great Mosque of Kairouan||kairouan mosque;mosque of uqba;great mosque of sidi-uqba;grand mosque of kairouan
4|Great Mosque of Samarra||samarra mosque;malwiya
4|Itsukushima Shrine||itsukushima
4|Ise Grand Shrine||ise shrine;ise jingū;ise shintō
4|Bulguksa
4|Jokhang
4|Giant Wild Goose Pagoda||big wild goose pagoda;greater wild goose pagoda;great wild goose pagoda;great goose pagoda
4|Meenakshi Temple||meenakshi amman temple;arulmigu meenakshi sundareshwarar temple;madurai meenakshi temple;madurai meenakshi amman temple
4|Brihadisvara Temple||brihadeeswarar;brihadeeswara temple;brihadeshwara temple;brahadeeswara temple;rajarajeshwara
4|Konark Sun Temple||konark;sun temple, konârak
4|Kashi Vishwanath Temple||kashi vishwanath
4|Prambanan
4|Wat Arun||temple of dawn
4|Wat Phra Kaew||emerald buddha temple
4|Rila Monastery
4|Saint Catherine's Monastery||st catherines monastery;sinai monastery;holy monastery of sinai;monastery of saint catherine
4|Second Temple
4|St. Patrick's Cathedral (Manhattan)|St. Patrick's Cathedral (Manhattan)|st patricks cathedral
4|Mexico City Metropolitan Cathedral||mexico city cathedral;sagrario metropolitano
4|Basilica of Our Lady of Guadalupe||guadalupe basilica;basílica de guadalupe
4|Saint Sophia Cathedral, Kyiv|Saint Sophia Cathedral, Kyiv|st sophia kyiv;saint sophia's cathedral, kiev;saint sophia cathedral in kiev
5|Heddal Stave Church||heddal
5|Old North Church
5|Trinity Church (Manhattan)|Trinity Church (Manhattan)|trinity church;parish of trinity church;trinity episcopal church, new york
5|Cusco Cathedral||cathedral of santo domingo, cusco
5|Notre-Dame Basilica (Montreal)|Notre-Dame Basilica (Montreal)|notre dame montreal;notre-dame de montréal basilica;basilique notre-dame de montréal
5|Cathedral of the Dormition|Dormition Cathedral, Moscow|dormition cathedral;assumption cathedral in moscow
5|Lama Temple||yonghegong
`,
nope:{
 'hallgrimskirkja|hassan 2 mosque|sheikh zayed mosque|faisal mosque|lotus temple|church savior spilled blood|savior spilled blood':'Built after 1900 &mdash; dig a little older!',
 'taj mahal':'A tomb, not a place of worship &mdash; magnificent though!'
}},

{id:'palaces', cat:'Places', q:'Name a famous royal palace', hint:'Homes of kings, emperors and sultans',
list:`
1|Palace of Versailles||versailles;chateau versailles;palace and park of versailles;court of versailles
1|Buckingham Palace||buckingham
1|Forbidden City||forbidden palace
2|Topkapı Palace||topkapi
2|Schönbrunn Palace||schonbrunn;schoenbrunn;schloss schönbrunn;palace and gardens of schönbrunn
2|Winter Palace
2|Peterhof Palace||peterhof
2|Potala Palace||potala
2|Louvre Palace||louvre;palais du louvre
2|Hampton Court Palace||hampton court
2|Palace of Westminster||houses parliament;westminster palace;new palace of westminster
2|Kensington Palace
2|Holyrood Palace|Holyrood Palace|holyroodhouse;holyrood;palace of holyroodhouse
2|Sanssouci
2|Royal Palace of Madrid||palacio real;capilla real de madrid
2|Hofburg
2|Doge's Palace||doges palace;palazzo ducale;ducal palace, venice
2|Alhambra
3|Pitti Palace||palazzo pitti
3|Palazzo Vecchio||palazzo della signoria
3|Royal Palace of Caserta||caserta;palace at caserta
3|Palace of Knossos||knossos
3|Persepolis||persepolitan
3|Gyeongbokgung||gyeongbok palace
3|Tokyo Imperial Palace||imperial palace tokyo;kokyo;imperial palace of japan;japanese imperial palace
3|Summer Palace||new summer palace
3|Old Summer Palace||yuanmingyuan;garden of perfect brightness;gardens of perfect brightness
3|Hawa Mahal
3|Dolmabahçe Palace||dolmabahce
3|Grand Palace||grand palace bangkok
3|Royal Palace, Oslo|Royal Palace, Oslo|slottet;oslo palace
3|Château de Fontainebleau||fontainebleau;palace and park of fontainebleau
3|Catherine Palace||grand catherine palace
3|Blenheim Palace||blenheim
3|Diocletian's Palace||diocletians palace;palace of diocletian
3|Domus Aurea||golden house
3|Alcázar of Seville||alcazar seville;royal alcazar
3|El Escorial||escorial
4|Changdeokgung||changdeok palace
4|Kyoto Imperial Palace||kyoto gosho
4|Mysore Palace||ambavilas palace
4|City Palace, Jaipur|City Palace, Jaipur|city palace jaipur
4|Golestan Palace||golestan
4|Amalienborg
4|Christiansborg Palace||christiansborg
4|Stockholm Palace||kungliga slottet;royal palace of stockholm;stockholm castle;stockholm royal palace
4|Drottningholm Palace||drottningholm
4|Royal Palace of Amsterdam||amsterdam palace;royal palace;dam palace;the dutch royal palace;paleis op de dam
4|Tuileries Palace||tuileries;palais des tuileries;les tuileries
4|Nymphenburg Palace||nymphenburg;schloss nymphenburg
4|Charlottenburg Palace||charlottenburg
4|Belvedere, Vienna|Belvedere, Vienna|belvedere;schloss belvedere
4|Royal Castle, Warsaw|Royal Castle, Warsaw|warsaw royal castle;warsaw castle;royal castle
4|ʻIolani Palace||iolani palace
4|Pena Palace||pena;pena national palace;palácio da pena
4|Neuschwanstein Castle||neuschwanstein;schloss neuschwanstein;fairytale castle
5|Ali Qapu
5|Royal Palace of Brussels||brussels palace;palais de bruxelles
5|Palais-Royal||palais royal;palais-cardinal;place du palais-royal;palais brion
5|Château de Malmaison||malmaison;palace of malmaison
5|Linderhof Palace||linderhof;schloss linderhof
5|Herrenchiemsee
5|Zwinger
5|Würzburg Residence||wurzburg residence;würzburger residenz;residenz, würzburg
5|Wilanów Palace||wilanow
5|Pavlovsk Palace||pavlovsk
5|Livadia Palace||livadia;maley palace
5|Palace of Queluz||queluz
5|Chapultepec Castle||chapultepec;castillo de chapultepec
6|Het Loo Palace||het loo;paleis het loo
6|Bygdøy Royal Estate||bygdoy kongsgard
`,
nope:{
 'white house':'A presidential residence &mdash; not a royal palace!',
 'taj mahal':'A tomb &mdash; not a palace!'
}},

{id:'capitals', cat:'Places', q:'Name a city that used to be a capital', hint:'Of a country, kingdom or empire &mdash; but not any more',
list:`
1|Istanbul||constantinople;byzantium
1|Kyoto||meaco
1|Rio de Janeiro||rio;consolação, rio de janeiro;rio grande, rio de janeiro;rio, brazil
1|Saint Petersburg||st petersburg;petrograd;leningrad;sankt petersburg;sankt peterburg;peterburg;st. petersberg, russia
2|Philadelphia||philly
2|New York City||new york;nueva york;n.y.c.;nyny
2|Kolkata||calcutta
2|Bonn||bonn, germany
2|Babylon||babil;babilu
2|Thebes, Egypt|Thebes, Egypt|thebes;luxor;egyptian thebes
2|Memphis, Egypt|Memphis, Egypt|memphis;mit rahina;ineb-hedj;men-nefer
2|Alexandria
2|Persepolis||persepolitan
2|Xi'an||xian;changan;chang an;xi'an, shaanxi;xi'an, china;sian-fu
2|Nanjing||nanking;jiangning prefecture;yingtian;yingtian prefecture
2|Kraków||krakow;cracow
2|Toledo, Spain|Toledo, Spain|toledo
2|Aachen||aix la chapelle
2|Ravenna||ravennate
2|Nara||heijo kyo
2|Carthage||archaeological site of carthage;carthaginia;carthagians;carthagina
2|Cusco||cuzco;balconies of cusco
2|Karachi||karachiite;kharak;kalachi-jo-kun
2|Melbourne||naarm
2|Lagos||lagosian
3|Luoyang||chengzhou;luoyi
3|Turku||abo
3|Trondheim||nidaros
3|Bergen||bjørgvin
3|Valladolid
3|Milan||milano, italy
3|Trier||treves
3|Kamakura
3|Gyeongju||seorabeol;kyongju;seorabol;geumseong
3|Kaesong||gaeseong;gaegyeong;songak
3|Huế||hue;thừa thiên huế;hue, vietnam;thua thien
3|Ayutthaya
3|Mandalay
3|Bagan||pagan
3|Angkor
3|Hampi||vijayanagara;group of monuments at hampi
3|Fatehpur Sikri
3|Agra||agra, uttar pradesh;agra, india
3|Lahore
3|Almaty||alma ata;verniy
3|Yangon||rangoon
3|Córdoba, Spain|Córdoba, Spain|cordoba
3|Nineveh||ninevite;kouyunjik;ninevites;ninawa
3|Samarkand||markanda;marakanda;maracanda
3|Isfahan||esfahan;spahan;ispahan
3|Winchester
3|Roskilde
4|Auckland||tāmaki makaurau
4|Granada||iliberis
4|Fez, Morocco|Fez, Morocco|fez;fes
4|Marrakesh||marrakech;medina of marrakesh
4|Great Zimbabwe||zimbabwe ruins
4|Aksum||axum;axum, ethiopia
4|Meroë||meroe
4|Antioch||antiochian;antiochene
4|Samarra
4|Ctesiphon
4|Susa||shushan
4|Hattusa||hattush;bogaskoy
4|Mycenae||mykene
4|Karakorum||kharkhorum
4|Bukhara||historic centre of bukhara;buxoro;bukhoro
4|Tabriz
4|Bursa
4|Edirne||adrianople;adrianopolis;odrin;adrianoupolis
4|Konya||ikonion;konieh
4|Abidjan
4|Salvador, Bahia|Salvador, Bahia|salvador;bahia
5|Russell, New Zealand|Okiato|russell;okiato
5|Quebec City||quebec
5|Kingston, Ontario|Kingston, Ontario|kingston;barriefield, ontario
5|Dunfermline
5|Coimbra
5|Oviedo
5|León, Spain|León, Spain|leon;león, león
5|Kairouan||qayrawan;qairawan
5|Gao
5|Gondar
5|Napata
5|Pasargadae
5|Assur||ashur
5|Nimrud||kalhu;calah
5|Sardis||archaeological exploration of sardis
5|Pella
5|Herat
5|Qazvin
5|Nicaea||iznik;nikaia
5|Kaunas||kovno;kowno
5|Nafplio||nauplia;nauplion
5|Cetinje||cettigne
5|Veliko Tarnovo||tarnovo;tarnovgrad
5|Vladimir, Russia|Vladimir, Russia|vladimir
5|Esztergom
5|Gniezno||gnesen
6|Niani
6|Aegina
6|Guimarães||guimaraes
6|Székesfehérvár||szekesfehervar;stuhlweissenburg
6|Zomba
6|Belize City||belize town
`,
nope:{
 'london|paris|washington|washington dc|tokyo|berlin|moscow|rome|beijing|oslo|madrid|cairo|athens|stockholm|copenhagen|delhi|new delhi':'Still a capital today &mdash; this dig wants former capitals!'
}},

{id:'olympics', cat:'Places', q:'Name a city that hosted the Olympic Games before 2000', hint:'Summer or Winter',
list:`
1|Athens|1896 Summer Olympics|athens 1896;athens 2004;games of the i olympiad
1|London|1948 Summer Olympics|london 1948;london 1908
1|Paris|1924 Summer Olympics|paris 1924;paris 1900
1|Los Angeles|1984 Summer Olympics|la;los angeles 1984;los angeles 1932
2|Tokyo|1964 Summer Olympics|tokyo 1964
2|Berlin|1936 Summer Olympics|berlin 1936
2|Moscow|1980 Summer Olympics|moscow 1980
2|Barcelona|1992 Summer Olympics|barcelona 1992
2|Atlanta|1996 Summer Olympics|atlanta 1996;1996 olympics;1996 olympic games
2|Rome|1960 Summer Olympics|rome 1960;1960 rome olympics
2|Seoul|1988 Summer Olympics|seoul 1988;games of the xxiv olympiad;1988 olympics in seoul
2|Mexico City|1968 Summer Olympics|mexico city 1968;mexico
2|Munich|1972 Summer Olympics|munich 1972;munchen
2|Montreal|1976 Summer Olympics|montreal 1976
3|Lillehammer|1994 Winter Olympics|lillehammer 1994;1994 olympics
3|Amsterdam|1928 Summer Olympics|amsterdam 1928
3|Stockholm|1912 Summer Olympics|stockholm 1912
3|Helsinki|1952 Summer Olympics|helsinki 1952;games of the xv olympiad
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
1|Great Wall of China||great wall;wall of china;liaodong wall;wall of genghis khan
1|Hadrian's Wall||hadrians wall;wall of hadrian
1|Berlin Wall||anti-fascist protection wall;division of berlin;berliner mauer
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
3|Limes Germanicus||limes;roman limes;germanic limes;upper germanic & rhaetian limes
3|Aurelian Walls
3|Walls of Dubrovnik||dubrovnik walls
3|Walls of Jerusalem||jerusalem walls
3|Hindenburg Line||advance to the hindenburg line
3|Korean Demilitarized Zone||dmz;korean dmz;demilitarized zone
3|Iron Curtain
3|The Alamo|Alamo Mission|alamo;san antonio de valero;mission san antonio de valero
4|Servian Wall
4|Long Walls||long walls athens
4|Walls of Ávila||avila walls
4|York city walls||york walls
4|Walls of Benin||benin walls
4|Great Wall of Gorgan||gorgan wall;red snake;great wall of golestan
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
4|Suomenlinna||sveaborg;fortress of suomenlinna
4|Peter and Paul Fortress||petropavlovskaya fortress
4|Brest Fortress||hero fortress;brest-litovsk fortress
5|Chester city walls||chester walls
5|Mareth Line
5|Metaxas Line
5|Molotov Line
5|Peace lines||belfast peace walls;peace walls;peace wall;belfast peace lines
5|Green Line (Cyprus)|Green Line (Cyprus)|cyprus green line;green line;cyprus buffer zone;un buffer zone in cyprus;un buffer zone
5|Fortress of Louisbourg||louisbourg
5|Fortifications of Valletta||valletta fortifications
5|Anastasian Wall
5|Fredriksten||fredriksten fortress
5|Fort Douaumont||douaumont
5|Fort Eben-Emael||eben emael
5|Derbent Wall||derbent
6|Wansdyke
6|Trajan's Wall||trajans wall;lower trajan wall
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
1|Golden Gate Bridge||golden gate;gg bridge
1|Tower Bridge||london tower bridge
1|Brooklyn Bridge
1|London Bridge
2|Ponte Vecchio
2|Rialto Bridge||rialto;ponte di rialto
2|Charles Bridge||karluv most;judith bridge
2|Sydney Harbour Bridge||sydney harbor bridge
2|Pont du Gard||nimes aqueduct
2|Bridge of Sighs
2|Forth Bridge||forth railway bridge;forth rail bridge
2|Pont Neuf
3|Ponte Sant'Angelo||pons aelius;sant angelo bridge
3|Stari Most||mostar bridge
3|Széchenyi Chain Bridge||chain bridge;szechenyi bridge;lánchíd
3|The Iron Bridge||iron bridge;ironbridge
3|Clifton Suspension Bridge||clifton bridge
3|Tacoma Narrows Bridge (1940)|Tacoma Narrows Bridge (1940)|tacoma narrows;galloping gertie
3|Pont Saint-Bénézet||pont davignon;pont saint benezet;avignon bridge
3|Marco Polo Bridge||lugou bridge;lugouqiao
3|Glenfinnan Viaduct||glenfinnan
3|Milvian Bridge||pons milvius
4|Menai Suspension Bridge||menai bridge
4|Tay Bridge||tay rail bridge
4|Alcántara Bridge||alcantara bridge
4|Zhaozhou Bridge||anji bridge
4|Si-o-se-pol||33 arches
4|Kapellbrücke||chapel bridge;kapellbrucke
4|Pont Alexandre III||alexandre 3
4|Pont des Arts
4|Westminster Bridge
4|Waterloo Bridge
4|George Washington Bridge
4|San Francisco–Oakland Bay Bridge||bay bridge;san francisco bay bridge;oakland bay bridge
4|Ludendorff Bridge||remagen bridge;bridge remagen
4|Pegasus Bridge
4|John Frost Bridge||arnhem bridge;arnhem road bridge
4|Howrah Bridge||rabindra setu
4|Trajan's Bridge||trajans bridge
5|Khaju Bridge
5|Q'eswachaka||qeswachaka;inca rope bridge
5|Kintai Bridge
5|Nihonbashi||nihombashi, tokyo
5|Old Bridge, Heidelberg|Old Bridge, Heidelberg|heidelberg bridge
5|Hohenzollern Bridge
5|Galata Bridge
5|Eads Bridge
5|Quebec Bridge
5|Ambassador Bridge
5|Victoria Falls Bridge
5|Pamban Bridge||pamban channel
5|Garabit viaduct||garabit
5|Ribblehead Viaduct||ribblehead
5|Landwasser Viaduct||landwasser
5|Pons Fabricius||ponte fabricio;ponte dei quattro capi
5|Arkadiko Bridge
6|Göltzsch Viaduct||goltzsch;göltzschtalbrücke
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
1|Suez Canal||suez;suez shipyard
1|Panama Canal||panama;canal de panamá
2|Grand Canal (China)|Grand Canal (China)|grand canal;beijing hangzhou canal;beijing-hangzhou grand canal;jinghang canal
2|Erie Canal||erie
2|Kiel Canal||kiel;nord ostsee kanal;kaiser wilhelm canal
2|Corinth Canal||corinth
2|Canal du Midi||midi
2|Grand Canal (Venice)|Grand Canal (Venice)|canal grande;venice grand canal;rio businiacus
3|Manchester Ship Canal
3|Göta Canal||gota canal;gota kanal
3|Caledonian Canal
3|Bridgewater Canal
3|Rideau Canal||rideau waterway
3|White Sea–Baltic Canal||white sea canal;belomorkanal
3|Canals of Amsterdam||amsterdam canals;grachten
3|Canal of the Pharaohs||ancient suez canal;necho canal;darius canal
3|Regent's Canal||regents canal
4|Telemark Canal||telemarkskanalen
4|Chesapeake and Ohio Canal||c o canal
4|Welland Canal
4|Canal Saint-Martin||saint martin canal
4|Moscow Canal||moscow-volga canal;moskva-volga canal
4|North Sea Canal||noordzeekanaal
4|Cape Cod Canal
4|Xerxes Canal
4|Lingqu Canal||lingqu
4|Pontcysyllte Aqueduct||llangollen canal
5|Illinois and Michigan Canal||i&m canal
5|Sault Ste. Marie Canal||soo locks
5|Canal de Briare||briare
5|Kennet and Avon Canal
5|Leeds and Liverpool Canal
5|Grand Union Canal||warwick and birmingham canal;warwick and napton canal
5|Forth and Clyde Canal
5|Houston Ship Channel
5|Trollhätte Canal||trollhatte
6|Canal of Castile||canal castilla
6|Mittelland Canal||mittellandkanal
6|Ludwig Canal||ludwigskanal;ludwig-donau-main-kanal
6|Royal Canal
6|Mahmoudiyah Canal||mahmoudiyah
`,
nope:{
 'mars canals|martian canals|canals mars':'An optical illusion &mdash; Mars has no canals!',
 'english channel|channel':'A natural strait &mdash; nobody dug that one!'
}},

{id:'libraries', cat:'Places', q:'Name a famous library or archive founded before 1900', hint:'Scrolls, codices, books and records',
list:`
1|Library of Alexandria||alexandria library;great library;royal library of alexandria
1|Library of Congress||united states library of congress;us library of congress
2|Vatican Library||vatican apostolic library;biblioteca apostolica;biblioteca apostolica vaticana;vaticani arabi;biblioteca vaticana
2|British Library||british museum library
2|Bodleian Library||bodleian
2|House of Wisdom||bayt al hikma;baghdad house of wisdom
2|Library of Ashurbanipal||ashurbanipal;royal library of ashurbanipal
2|Library of Pergamum||pergamon library
2|Bibliothèque nationale de France||bnf;bibliotheque nationale;national library of france;national library of paris;french national library;bibliothèque du roi
2|New York Public Library||nypl;new york library
2|Library of Celsus||celsus
3|Library of Trinity College Dublin||long room;trinity college library
3|Nalanda||nalanda library;nalanda university
3|Timbuktu manuscripts||timbuktu
3|Vatican Apostolic Archive||vatican secret archives;vatican archives;archivio segreto vaticano
3|Radcliffe Camera
3|Laurentian Library||biblioteca laurenziana;biblioteca medicea laurenziana
4|Imperial Library of Constantinople||constantinople library
4|Abbey library of Saint Gall||st gall library;saint gall
4|Villa of the Papyri||herculaneum papyri
4|Library of al-Qarawiyyin|University of al-Qarawiyyin|qarawiyyin;university of al quaraouiyine;al-qarawiyyin university
4|The National Archives (United Kingdom)|The National Archives (United Kingdom)|national archives;british national archives;uk national archives
5|Biblioteca Marciana||marciana;sansovino library;library of st. mark
5|Royal Library of El Escorial|El Escorial|escorial library
5|Admont Abbey library||admont
5|Strahov Monastery||strahov library
5|Ebla tablets||ebla archive
5|Library of Hadrian||hadrians library
5|Bibliotheca Corviniana||corvina library
5|Russian State Library||lenin library
5|National Library of Russia||russian national library;imperial public library
5|Boston Public Library
5|Library Company of Philadelphia
5|John Rylands Library||rylands;john rylands university library
5|Wren Library
5|Cambridge University Library
5|Tianyi Chamber||tianyi ge;tianyi pavilion
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
1|Maximilien Robespierre||robespierre;the incorruptible
1|Marie Antoinette||archduchess maria antonia of austria
1|Louis XVI||louis 16;louis-auguste;louis capet;citizen capet
1|Napoleon||napoleon bonaparte;bonaparte;nepolian;little corporal
2|Georges Danton||danton;dantonistes
2|Jean-Paul Marat||marat
2|Charlotte Corday||corday
2|Marquis de Lafayette||lafayette;gilbert du motier
2|Louis Antoine de Saint-Just||saint just;louis de saint-just;louis saint-just;louis antoine léon de saint-just
2|Olympe de Gouges||gouges
2|Honoré Gabriel Riqueti, comte de Mirabeau|Honoré Gabriel Riqueti, comte de Mirabeau|mirabeau
2|Abbé Sieyès||sieyes
2|Joseph Fouché||fouche
2|Camille Desmoulins||desmoulins
2|Jacques Necker||necker
2|Madame Roland||manon roland
2|Jacques-Louis David||david;louis david
2|Joseph-Ignace Guillotin||guillotin
2|Paul Barras||barras
2|Charles-Maurice de Talleyrand-Périgord||talleyrand;charles-maurice de talleyrand;charles talleyrand
3|Jacques Pierre Brissot||brissot
3|Jacques Hébert||hebert
3|Georges Couthon||couthon
3|Antoine Quentin Fouquier-Tinville||fouquier tinville
3|Jean Sylvain Bailly||bailly
3|Pierre Victurnien Vergniaud||vergniaud
3|Lazare Carnot||carnot
3|Jean-Lambert Tallien||tallien
3|Marquis de Condorcet||condorcet;nicolas de caritat
3|Louis XVII||louis 17;lost dauphin;louis-charles de france
3|Thomas Paine||paine
3|Joséphine de Beauharnais||josephine
4|Louis Philippe II, Duke of Orléans|Louis Philippe II, Duke of Orléans|philippe egalite;louis philippe joseph, duc d'orléans
4|François-Noël Babeuf||babeuf;gracchus babeuf
4|Charles-Henri Sanson||sanson
4|Marie-Thérèse of France||madame royale;marie-thérèse, duchess of angoulême;marie-thérèse-charlotte of france;marie-thérèse charlotte de france;marie thérèse charlotte
4|Princess Marie Louise of Savoy|Princess Marie Louise of Savoy|lamballe;princesse de lamballe;princess de lamballe;marie-louise, princesse de lamballe;madame de lamballe
4|Madame du Barry||du barry;mme du barry;jeanne du barry
4|Claude Joseph Rouget de Lisle||rouget de lisle
4|Axel von Fersen the Younger||fersen;axel fersen;axel von fersen, jr.;hans axel von fersen
5|Thérésa Tallien||theresa tallien;madame tallien;thérésa cabarrús;thérèse cabarrus;thérésa de cabarrus
5|Jacques Roux||roux
5|Théroigne de Méricourt||theroigne;anne josephe theroigne de mericourt
5|Élisabeth of France||madame elisabeth
5|Bertrand Barère||barere
5|Jean-Baptiste Carrier||carrier
5|Jean-Baptiste Drouet||drouet
5|Antoine Barnave||barnave
5|Fabre d'Églantine||fabre deglantine;fabre eglantine
5|Charles François Dumouriez||dumouriez
5|François de Charette||charette;françois-athanase charette de la contrie
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
1|Vladimir Lenin||lenin;vladimir ulyanov;v. i. lenin;vladimir ilyich ulyanov;vladimir ilyich
1|Joseph Stalin||stalin;iosif dzhugashvili;ioseb besarionis dze jughashvili;iosif vissarionovich dzhugashvili;ioseb dzhugashvili
1|Leon Trotsky||trotsky
1|Nicholas II||nicholas 2;tsar nicholas
2|Alexander Kerensky||kerensky
2|Grigori Rasputin||rasputin
2|Alexandra Feodorovna (Alix of Hesse)|Alexandra Feodorovna (Alix of Hesse)|alexandra feodorovna;tsarina alexandra;alix of hesse;alix of hesse-darmstadt
2|Grand Duchess Anastasia Nikolaevna of Russia|Grand Duchess Anastasia Nikolaevna of Russia|anastasia;grand duchess anastasia;grand duchess anastasia of russia
2|Alexei Nikolaevich, Tsarevich of Russia|Alexei Nikolaevich, Tsarevich of Russia|tsarevich alexei;alexei romanov;alexei nikolaevich;aleksey nicolaievich romanov;alexei nikolaevich romanov
2|Grigory Zinoviev||zinoviev;zinovievist
2|Lev Kamenev||kamenev
2|Nikolai Bukharin||bukharin
2|Felix Dzerzhinsky||dzerzhinsky;feliks dzierżyński;felix edmundovich dzerzhinskiy
2|Nadezhda Krupskaya||krupskaya;nadia krupskaia
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
3|John Reed (journalist)|John Reed (journalist)|john reed;john silas reed
4|Pavel Milyukov||milyukov;paul miliukov
4|Georgy Lvov||prince lvov;lvov
4|Grand Duke Michael Alexandrovich of Russia|Grand Duke Michael Alexandrovich of Russia|grand duke michael;mikhail alexandrovich romanov;michael ii of russia
4|Mikhail Frunze||frunze
4|Semyon Budyonny||budyonny
4|Vasily Chapayev||chapayev;chapaev
4|Mikhail Tukhachevsky||tukhachevsky
4|Vladimir Mayakovsky||mayakovsky;vladimir majakovskij
4|Grand Duchess Olga Nikolaevna of Russia|Grand Duchess Olga Nikolaevna of Russia|olga nikolaevna
4|Grand Duchess Tatiana Nikolaevna of Russia|Grand Duchess Tatiana Nikolaevna of Russia|tatiana nikolaevna;grand duchess tatiana of russia;grand duchess tatiana nikolaevna;tatiana romanov
4|Grand Duchess Maria Nikolaevna of Russia|Grand Duchess Maria Nikolaevna of Russia|maria nikolaevna;grand duchess maria nikolaevna
4|Father Gapon|Georgy Gapon|gapon
5|Vladimir Antonov-Ovseyenko||antonov ovseyenko
5|Mikhail Rodzianko||rodzianko
5|Viktor Chernov||chernov
5|Maria Spiridonova||spiridonova
5|Karl Radek||radek
5|Alexei Rykov||rykov
5|Sergo Ordzhonikidze||ordzhonikidze;sergo orjonikidze
5|Yakov Yurovsky||yurovsky
5|Anatoly Lunacharsky||lunacharsky;a. v. lunacharsky
5|Nikolai Yudenich||yudenich
5|Grigory Semyonov||semyonov
5|Roman von Ungern-Sternberg||ungern sternberg;mad baron;baron ungern-sternberg;baron ungern;roman ungern;baron ungern von sternberg
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
2|Miguel Hidalgo y Costilla||hidalgo;miguel hidalgo;father hidalgo
2|Bernardo O'Higgins||ohiggins
2|Toussaint Louverture||louverture;toussaint
2|Antonio José de Sucre||sucre
2|Francisco de Miranda||miranda
2|José María Morelos||morelos
2|Agustín de Iturbide||iturbide;agustín i;agustin i of mexico
2|Pedro I of Brazil||pedro 1;dom pedro;pedro iv of portugal;peter iv of portugal;peter i of brazil
2|Jean-Jacques Dessalines||dessalines;jacques i of haiti
2|José Martí||marti
2|Manuela Sáenz||manuela saenz;saenz
2|Juana Azurduy de Padilla||juana azurduy;azurduy
3|Vicente Guerrero||guerrero
3|Ignacio Allende||allende
3|Josefa Ortiz de Domínguez||la corregidora;josefa ortiz
3|Francisco de Paula Santander||santander
3|José Gervasio Artigas||artigas
3|Manuel Belgrano||belgrano
3|Henri Christophe||christophe;henry i of haiti
3|Alexandre Pétion||petion
3|Túpac Amaru II||tupac amaru
3|Antonio Nariño||narino
3|Policarpa Salavarrieta||la pola;salavarrieta;policarpa
3|Mariano Moreno||moreno
3|José Miguel Carrera||carrera
3|Thomas Cochrane, 10th Earl of Dundonald|Thomas Cochrane, 10th Earl of Dundonald|cochrane;lord cochrane;marquess of maranhão
3|Tiradentes||joaquim josé da silva xavier
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
5|Leopoldina of Austria||leopoldina;maria leopoldina;maria leopoldina of brazil
5|Maria Quitéria||maria quiteria
5|Ramón Emeterio Betances||betances
5|Rafael Urdaneta||urdaneta
5|Leona Vicario||vicario
5|Bartolina Sisa||bartolina
5|Túpac Katari||tupac katari
5|Micaela Bastidas||bastidas
5|Juan Santamaría||santamaria
5|Andrés de Santa Cruz||santa cruz
5|Pedro Domingo Murillo||murillo;pedro murillo
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
3|Abigail Adams||abigail smith adams
4|Henry Knox||knox
4|John Witherspoon||witherspoon
4|Caesar Rodney||rodney
4|Button Gwinnett||gwinnett
4|Charles Pinckney||pinckney
4|Edmund Randolph||edmund jennings randolph
4|James Wilson||wilson
4|Robert R. Livingston||livingston
5|Charles Cotesworth Pinckney||charles c. pinckney
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
2|Lucretia Mott||mott;lucretia coffin mott
2|Alice Paul
2|Mary Wollstonecraft||wollstonecraft
2|Olympe de Gouges||gouges
2|Ida B. Wells||ida wells;wells;ida bell wells-barnett
2|Carrie Chapman Catt||catt
2|Lucy Stone
2|Kate Sheppard||sheppard
3|Frederick Douglass||douglass
3|Gina Krog||krog
3|Clara Zetkin||zetkin
3|John Stuart Mill||mill;js mill;stuart mill;john stewart mill
3|Sarojini Naidu||naidu
3|Huda Sha'arawi||huda shaarawi;shaarawi
4|Aletta Jacobs||jacobs
4|Hubertine Auclert||auclert
4|Constance Markievicz||markievicz;countess markiewicz
4|Annie Kenney||kenney
4|Sophia Duleep Singh||duleep singh;sophia singh
4|Josephine Butler||butler
4|Harriet Taylor Mill||harriet taylor
4|Inez Milholland||milholland
4|Victoria Woodhull||woodhull;victoria claflin
4|Mary Church Terrell||church terrell;terrell
4|Amelia Bloomer||bloomer
4|Julia Ward Howe||ward howe;julia howe
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
5|Barbara Bodichon||bodichon;barbara leigh smith
5|Harriot Stanton Blatch||stanton blatch;harriot eaton stanton blatch;harriot eaton stanton
5|Anna Howard Shaw||howard shaw
5|Lucy Burns||burns
5|Frances Willard (suffragist)|Frances Willard (suffragist)|frances willard;willard
5|Matilda Joslyn Gage||gage;matilda gage
5|Bertha Lutz||lutz
5|Hiratsuka Raichō||hiratsuka raicho;raicho
5|Fusae Ichikawa||ichikawa
5|Begum Rokeya||rokeya;roquia sakhawat hussain
5|Minna Canth||canth
5|Fredrika Bremer||bremer
5|Emmeline Pethick-Lawrence||pethick lawrence;emmeline pethick
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
1|Mata Hari||margaretha geertruida zelle
2|Kim Philby||philby
2|Julius Rosenberg
2|Ethel Rosenberg
2|Klaus Fuchs||fuchs
2|Richard Sorge||sorge
2|Juan Pujol García||garbo;pujol;juan pujol;arabel
2|Virginia Hall
2|Noor Inayat Khan||inayat khan
2|Violette Szabo||szabo
2|Nancy Wake||wake;white mouse
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
3|Donald Maclean (spy)|Donald Maclean (spy)|donald maclean;maclean;donald duart maclean
3|Anthony Blunt||blunt
3|Oleg Gordievsky||gordievsky
3|Oleg Penkovsky||penkovsky
3|Robert Hanssen||hanssen
3|Aldrich Ames||ames;aldrich hazen ames
3|Francis Gary Powers||gary powers;powers
3|Rudolf Abel||abel;vilyam genrikhovich fisher;rudolph abel;vilyam genrikovich fisher;william august fisher
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
4|Eli Cohen||cohen;kamel amin thaabet
4|Edith Cavell||cavell
4|Christopher Marlowe||marlowe
4|Chevalier d'Éon||deon;d eon
5|Elizabeth Van Lew||van lew
5|Rose O'Neal Greenhow||greenhow
5|Pauline Cushman||cushman
5|Mary Bowser||bowser
5|James Armistead Lafayette||armistead;james armistead
5|Agent 355
5|Daniel Defoe||defoe
5|Fritz Kolbe||kolbe
5|Reinhard Gehlen||gehlen
5|Günter Guillaume||guillaume
5|Ruth Werner||sonya;werner
5|Melita Norwood||norwood;melita stedman sirnis
5|John Anthony Walker||john walker;walker spy ring
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
1|Mahatma Gandhi||gandhi;mohandas gandhi;ghandi;mahatma ghandi;gandhiji;gahndi
1|Nelson Mandela||mandela;madiba;rolihlahla
2|Jawaharlal Nehru||nehru;1st prime minister of india
2|Ho Chi Minh||nguyen sinh cung;nguyen ai quoc;nguyễn tất thành;uncle ho
2|Kwame Nkrumah||nkrumah;osagyefo
2|Jomo Kenyatta||kenyatta;johnstone kamau
2|Sukarno||soekarno;bung karno
2|Muhammad Ali Jinnah||jinnah;quaid-e-azam;quaid-i-azam;founder of pakistan
2|Patrice Lumumba||lumumba;lumumbists
2|Julius Nyerere||nyerere
2|Subhas Chandra Bose||bose;netaji;subash chandra bose;subhas bose;subhash bose
2|Sheikh Mujibur Rahman||mujib;mujibur rahman;bangabandhu sheikh mujibur rahman;sheikh mujib
2|Aung San||bogyoke aung san
2|Gamal Abdel Nasser||nasser
3|Habib Bourguiba||bourguiba
3|Ahmed Ben Bella||ben bella
3|Léopold Sédar Senghor||senghor
3|Kenneth Kaunda||kaunda
3|Robert Mugabe||mugabe
3|Sam Nujoma||nujoma
3|Amílcar Cabral||cabral
3|Samora Machel||machel
3|Agostinho Neto||neto;antónio agostinho neto
3|Ahmed Sékou Touré||sekou toure;toure
3|Félix Houphouët-Boigny||houphouet boigny;boigny
3|Emilio Aguinaldo||aguinaldo
3|José Rizal||rizal
3|Tunku Abdul Rahman||tunku
3|Lee Kuan Yew||lky
3|Bhagat Singh||sardar bhagat singh;shaheed bhagat singh
3|Vallabhbhai Patel||sardar patel;patel
3|B. R. Ambedkar||ambedkar;babasaheb
3|Omar Mukhtar||mukhtar;ʿomar el-mokhtar
3|Haile Selassie||selassie;tafari makonnen;ras tafari;tafari makonnen woldemikael;haile sellassie i
3|Mustafa Kemal Atatürk||ataturk;mustafa kemal
4|Andrés Bonifacio||bonifacio
4|Syngman Rhee||rhee;rhee syng-man
4|Kim Ku||kim koo
4|Yu Gwan-sun
4|Xanana Gusmão||gusmao
4|José Ramos-Horta||ramos horta
4|Mohammad Hatta||hatta
4|Abdul Ghaffar Khan||ghaffar khan;frontier gandhi;bacha khan;khan abdul gaffar khan;badshah khan;khān abdul ghaffār khān
4|Bal Gangadhar Tilak||tilak
4|Sarojini Naidu||naidu
4|Abd el-Krim||abd el krim;muhammad ibn 'abd al-karim al-khattabi;abdelkrim el khattabi
4|Saad Zaghloul||zaghloul;saad zaghlul pasha
4|Hastings Banda||banda;kamuzu
4|Seretse Khama||khama;seretse ii
4|Steve Biko||biko;stephen biko;bantu steve biko;bantu stephen biko;steve bantu biko
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
6|Allal al-Fassi||al fassi;allal el fassi
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
1|Julius Caesar||caesar;assassination julius caesar;divus iulius;julius ceaser
1|Abraham Lincoln||lincoln;great emancipator
1|John F. Kennedy||jfk;kennedy;john kennedy
1|Archduke Franz Ferdinand of Austria|Archduke Franz Ferdinand of Austria|franz ferdinand;archduke franz ferdinand;francis ferdinand;archduke francis ferdinand
2|Martin Luther King Jr.||mlk;martin luther;martin luther jr;mlk jr
2|Mahatma Gandhi||gandhi;ghandi;mahatma ghandi;gandhiji;gahndi
2|Malcolm X||malcolm little;malik shabazz;el-hajj malik el-shabazz
2|Robert F. Kennedy||rfk;bobby kennedy;robert francis kennedy
2|Thomas Becket||becket;thomas of canterbury;st. thomas of canterbury;saint thomas of canterbury
2|Leon Trotsky||trotsky
2|Yitzhak Rabin||rabin
2|Anwar Sadat||sadat
2|Indira Gandhi||indira ghandi;indira nehru;indira priyadarshini gandhi
2|Olof Palme||palme
2|Benazir Bhutto||bhutto
3|Philip II of Macedon||philip 2;philip the great;phillip of macedon;philip of macedonia
3|William McKinley||mckinley
3|James A. Garfield||garfield;james abram garfield
3|Alexander II of Russia||alexander 2
3|Empress Elisabeth of Austria|Empress Elisabeth of Austria|sisi;elisabeth austria;duchess elisabeth in bavaria;elisabeth in bavaria;elizabeth of bavaria;empress elizabeth of austria-hungary
3|Grigori Rasputin||rasputin
3|Harvey Milk||milk
3|John Lennon||lennon;the smart beatle;john lenin
3|Rajiv Gandhi
3|Patrice Lumumba||lumumba;lumumbists
3|Shinzo Abe||abe;prime minister shinzō abe
3|Caligula||gaius julius caesar augustus germanicus
3|Jean-Paul Marat||marat
3|Reinhard Heydrich||heydrich
3|Alexander Litvinenko||litvinenko
4|Henry IV of France||henry 4;henri 4;henry iii of navarre;henry of navarre;henri de navarre
4|William the Silent||william orange;willem van oranje
4|Spencer Perceval||perceval
4|Huey Long||long;huey pierce long, jr.;huey p. long, jr.;huey pierce long;the kingfish
4|Medgar Evers||evers;medgar evans
4|Ngo Dinh Diem||diem;ngo diem
4|Park Chung Hee||park chung hee;takagi masao
4|Itō Hirobumi||ito hirobumi;itō shunsuke
4|Sakamoto Ryōma||sakamoto ryoma
4|Commodus||lucius aurelius commodus antoninus
4|Domitian||titus flavius domitianus
4|Tiberius Gracchus
4|Paul I of Russia||paul 1;paul of russia;pavel i petrovich;pavel i of russia;paul petrovich
4|Gustav III||gustav 3;gustavus iii;gustavus iii of sweden;gustaf iii of sweden
4|Alexander I of Yugoslavia||alexander 1 yugoslavia;alexander i karađorđević
4|Rosa Luxemburg||luxemburg
4|Pim Fortuyn||fortuyn
4|Theo van Gogh (film director)|Theo van Gogh (film director)|theo van gogh
4|Anna Lindh||lindh
4|Jo Cox
4|Boris Nemtsov||nemtsov
4|Anna Politkovskaya||politkovskaya
4|Kim Jong-nam
4|Louis Mountbatten, 1st Earl Mountbatten of Burma|Louis Mountbatten, 1st Earl Mountbatten of Burma|mountbatten;louis, earl mountbatten of burma;1st earl mountbatten of burma
4|Michael Collins (Irish leader)|Michael Collins (Irish leader)|michael collins;collins 22 society
4|Fred Hampton||hampton
4|Óscar Romero||romero;oscar arnulfo romero y galdamez
4|Benigno Aquino Jr.||ninoy aquino;benigno aquino
4|Rafic Hariri||hariri
4|Ali ibn Abi Talib||ali;maula ali;imam ali;ali al murtaza
4|Umar||umar ibn al khattab;caliph umar;caliph omar;omar bin al-khattab;umar b. al-khattab
4|Albrecht von Wallenstein||wallenstein;albrecht von waldstein
5|Liaquat Ali Khan||liaquat;nawabzada liaquat ali khan;nawab liaquat ali khan
5|Inukai Tsuyoshi||inukai
5|Ii Naosuke||naosuke
5|Umberto I of Italy||umberto 1;humbert i of italy
5|Carlos I of Portugal||carlos 1;charles i of portugal;charles of portugal;carlos of portugal
5|Engelbert Dollfuss||dollfuss
5|Walther Rathenau||rathenau
5|Zoran Đinđić||djindjic;dindic;zoran djindjic
5|Folke Bernadotte||bernadotte;count folke bernadotte of wisborg
5|Abdullah I of Jordan||abdullah 1;emir abdullah
5|Faisal of Saudi Arabia||king faisal;faisal;shah faisal
5|Uthman||ibn ʿaffān
5|Henry Stuart, Lord Darnley||darnley;lord darnley;henry stewart, lord darnley;henry, lord darnley
5|David Rizzio||rizzio;david riccio
5|George Villiers, 1st Duke of Buckingham|George Villiers, 1st Duke of Buckingham|buckingham;george villiers
5|Henry III of France||henry 3;henry, duke of anjou
5|Conrad of Montferrat||conrad montferrat;conrad, marquis of montferrat;conrad i of jerusalem
5|Nizam al-Mulk||nizam al mulk
5|Edward II of England||edward 2;edward of caernarfon;edward of caernarvon;edward of carnarvon
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
3|Catilinarian Orations||catilinarians;in catilinam;catiline orations
3|George Washington's Farewell Address|George Washington's Farewell Address|farewell address;washington's farewell address
3|Eisenhower's farewell address||military industrial complex
3|I've Been to the Mountaintop||mountaintop speech
3|Wind of Change (speech)|Wind of Change (speech)|wind change
3|Rivers of Blood speech||rivers blood
3|Abraham Lincoln's second inaugural address|Abraham Lincoln's second inaugural address|malice toward none;second inaugural;lincoln's second inaugural address
3|House Divided Speech||house divided
3|Nothing to fear but fear itself|First inauguration of Franklin D. Roosevelt|fear itself;nothing fear but fear itself
3|Luckiest Man|Lou Gehrig|luckiest man;lou gehrig speech;lou gehrig;lou gherig
3|I Am Prepared to Die||prepared die
3|Ain't I a Woman|Ain't I a Woman?|aint i woman
3|What to the Slave Is the Fourth of July|What to the Slave Is the Fourth of July?|what slave fourth july
3|Here I stand|Diet of Worms|here i stand;diet of worms
3|Council of Clermont||clermont;deus vult;urban 2 speech
3|Appeal of 18 June||appel du 18 juin;appeal 18 june
3|On the Cult of Personality and Its Consequences|On the Cult of Personality and Its Consequences|secret speech;khrushchev's secret speech;khrushchev report
3|1939 King's Speech|George VI|kings speech
3|Apology (Plato)|Apology (Plato)|apology socrates;plato's apology
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
5|Malala Day|Malala Yousafzai|malala speech;malala;malala yousafzai
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
1|Blackbeard||edward teach;teach;edward thatch;edward thache jr.
1|Francis Drake||drake;sir francis drake
2|Henry Morgan||captain morgan;morgan
2|William Kidd||captain kidd;kidd
2|Anne Bonny||bonny
2|Mary Read
2|Calico Jack||jack rackham;rackham;john rackham;john rackam
2|Bartholomew Roberts||black bart;roberts
2|Ching Shih||zheng yi sao;cheng i sao;shi xianggu
2|Grace O'Malley||granuaile;grainne mhaol;gráinne o'malley;gráinne ní mháille
2|Hayreddin Barbarossa||barbarossa;hızır reis;barbaros hayreddin pasha
2|Samuel Bellamy||black sam bellamy;black sam;bellamy
2|Stede Bonnet||bonnet;gentleman pirate
2|Henry Every||long ben;henry avery;every
2|Jean Lafitte||lafitte;jean lafayette
3|Walter Raleigh||raleigh
3|John Hawkins (naval commander)|John Hawkins (naval commander)|john hawkins;hawkins
3|Charles Vane||vane
3|Klaus Störtebeker||stortebeker
4|Edward Low||ned low
4|Benjamin Hornigold||hornigold
4|Edward England
4|Thomas Tew||tew
4|Olivier Levasseur||la buse;levasseur
4|François l'Olonnais||lolonnais;olonnais;jean-david nau
4|Sayyida al Hurra||al hurra
4|Koxinga||zheng chenggong;cheng ch'eng-kung
4|Turgut Reis||dragut
4|Oruç Reis||oruc reis;aruj;oruç barbarossa;barbarossa i
4|Piri Reis
4|Jan Janszoon||murat reis
4|William Dampier||dampier
4|Piet Hein (naval officer)|Piet Hein (naval officer)|piet hein
4|Robert Surcouf||surcouf
4|Jean Bart
4|Thomas Cavendish||cavendish
4|Cilician pirates||cilicia pirates
5|Henry Jennings||jennings
5|Victual Brothers||vitalienbruder;likedeeler
5|Jacquotte Delahaye||delahaye
5|Zheng Yi||cheng i
5|Cheung Po Tsai||cheung po
5|Kemal Reis
5|John Ward (pirate)|John Ward (pirate)|jack ward;john ward
5|Laurens de Graaf||de graaf
5|René Duguay-Trouin||duguay trouin
5|Howell Davis||davis
5|Israel Hands||hands
5|Teuta||queen teuta
5|Eustace the Monk||eustace
5|Roche Braziliano||braziliano;roc brasiliano;rock brasiliano
6|Gödeke Michels||michels
6|Wang Zhi (pirate)|Wang Zhi (pirate)|wang zhi
6|Murakami Takeyoshi||murakami
6|Peter Easton||easton
6|Henry Mainwaring||mainwaring
6|Bartholomew Sharp||sharp;bartolomé charpes
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
1|Billy the Kid||william bonney;henry mccarty
1|Jesse James||jesse woodson james;james brothers
1|Al Capone||capone;scarface
1|Bonnie and Clyde||bonnie parker;clyde barrow;bonnie;clyde;bonny and clyde
2|Butch Cassidy||cassidy;robert leroy parker
2|Sundance Kid||harry longabaugh;harry alonzo longabaugh
2|Ned Kelly||kelly gang;edward "ned" kelly
2|Dick Turpin||turpin
2|John Dillinger||dillinger
2|Baby Face Nelson||george "baby face" nelson;lester gillis
2|Pretty Boy Floyd||charles arthur floyd;charles arthur "pretty boy" floyd;charles "pretty boy" floyd
2|Machine Gun Kelly
2|Doc Holliday||holliday
2|Belle Starr
2|Lucky Luciano||luciano;salvatore lucania
2|Bugsy Siegel||siegel
3|Wild Bunch
3|Black Bart (outlaw)|Black Bart (outlaw)|black bart;charles bolles;charles boles
3|Cole Younger||younger
3|Sam Bass
3|John Wesley Hardin||hardin
3|Dalton Gang||daltons
3|Ma Barker||kate barker;herman barker
3|Meyer Lansky||lansky
3|Dutch Schultz||schultz;abraham landau
3|Arnold Rothstein||rothstein
3|Rob Roy MacGregor||rob roy;robert roy macgregor;robert roy mcgregor;james mor macgregor
3|Pancho Villa||villa
4|Frank Costello||costello
4|Bugs Moran||moran
4|Hereward the Wake||hereward
4|Stenka Razin||razin
4|Yemelyan Pugachev||pugachev
4|Juraj Jánošík||janosik
4|Ishikawa Goemon||goemon
4|Joaquin Murrieta||murrieta
4|Lampião||lampiao;virgulino ferreira da silva
4|Jonathan Wild
4|Jack Sheppard
4|Burke and Hare murders|Burke and Hare murders|burke hare;west port murders;william burke and william hare
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
5|Big Nose Kate||kate elder
5|Pearl Hart
5|Kid Curry
5|Black Jack Ketchum||ketchum
5|Louis Dominique Cartouche||cartouche
5|Schinderhannes||johannes bückler
5|Louis Mandrin||mandrin
6|Captain Moonlite||moonlite;andrew george scott
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
1|Laika||laika dog;muttnik;first dog in space
1|Hachikō||hachiko
1|Dolly (sheep)|Dolly (sheep)|dolly;dolly sheep
2|Bucephalus||bucephalas
2|Marengo (horse)|Marengo (horse)|marengo
2|Balto
2|Sergeant Stubby||stubby
2|Cher Ami
2|Ham (chimpanzee)|Ham (chimpanzee)|ham;ham the chimp
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
2|Wojtek (bear)|Wojtek (bear)|wojtek;voytek
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
4|Benjamin (thylacine)|Benjamin (thylacine)|benjamin;last thylacine;thylacinus cynocephalus;thylacines
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
4|Mike the Headless Chicken||headless chicken;miracle mike the headless chicken
4|Pickles (dog)|Pickles (dog)|pickles
5|Mrs Chippy||mrs chippy
5|Harriet (tortoise)|Harriet (tortoise)|harriet
5|Checkers (dog)|Checkers (dog)|checkers
5|Bo (dog)|Bo (dog)|bo
5|Bamse (dog)|Bamse (dog)|bamse
5|Gander (dog)|Gander (dog)|gander
5|Judy (dog)|Judy (dog)|judy
5|Old Abe
5|Mary (elephant)|Mary (elephant)|mary;mighty mary
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
1|Nuremberg trials||nuremberg;international military tribunal;international military tribunal at nuremberg
1|Salem witch trials||salem;witches of salem
2|Galileo affair||galileo trial;trial galileo;prosecution of galileo
2|Trial of Joan of Arc||joan arc trial
2|Scopes trial||monkey trial;scopes
2|Trial of Charles I|Execution of Charles I|charles 1 trial;charles i's execution;execution of charles i
2|Dreyfus affair||dreyfus;anti-dreyfusard;dreyfusards;anti-dreyfusards
2|Eichmann trial||eichmann;trial of adolf eichmann;adolf eichmann trial;prosecution of adolf eichmann
2|O. J. Simpson murder case||oj simpson;o j simpson trial;o. j. simpson case;o. j. simpson murder trial;murder trial of o.j. simpson;acquittal of o.j. simpson
2|Rivonia Trial||rivonia;mandela trial
2|Sanhedrin trial of Jesus||trial jesus
2|Brown v. Board of Education||brown board education;brown v board
2|Roe v. Wade||roe wade;roe vs. wade
3|Trial of Saddam Hussein||saddam trial;al-dujail trial
3|International Military Tribunal for the Far East||tokyo trial;tokyo trials;tokyo tribunal;imtfe
3|Trials of Oscar Wilde|Oscar Wilde|oscar wilde trial;wildean;oscar wild;oscar fingal o'flahertie wills wilde
3|Sacco and Vanzetti||sacco vanzetti;nicola sacco;bartolomeo vanzetti;nicola sacco and bartolomeo vanzetti
3|Leopold and Loeb||leopold loeb;richard loeb;nathan leopold;nathan freudenthal leopold, jr.
3|Chicago Seven||chicago 7;chicago eight
3|Marbury v. Madison||marbury madison
3|Dred Scott v. Sandford||dred scott;scott v. sandford
3|Plessy v. Ferguson||plessy ferguson
3|Miranda v. Arizona||miranda
3|United States v. The Amistad||amistad
3|Execution of Louis XVI||louis 16 trial
3|Moscow trials||show trials;moscow show trials;moscow show trial;trial of the seventeen
3|Lizzie Borden||lizzie borden trial;abby borden;andrew jackson borden;andrew borden;emma lenora borden
3|Scottsboro Boys||scottsboro
3|Julius and Ethel Rosenberg||rosenberg trial
4|Trial of Thomas More|Thomas More|thomas more trial
4|Trial of Mary, Queen of Scots|Mary, Queen of Scots|mary queen scots trial
4|Trial of Marie Antoinette|Marie Antoinette|marie antoinette trial
4|Doctors' trial||doctors trial;nuremberg medical tribunal
4|Frankfurt Auschwitz trials||auschwitz trials
4|Trial of Vidkun Quisling|Vidkun Quisling|quisling trial
4|Trials of the Knights Templar|Trials of the Knights Templar|templar trials;knights templar trial
4|Pendle witches||pendle
4|Trial of Jan Hus|Jan Hus|hus trial
4|Trial of Giordano Bruno|Giordano Bruno|bruno trial
4|R v Penguin Books Ltd||lady chatterley trial
4|Impeachment of Andrew Johnson||andrew johnson impeachment
4|Black Sox Scandal||black sox;chicago black sox
4|Lindbergh kidnapping||hauptmann trial;lindbergh trial;lindbergh baby;lindbergh baby kidnapping;charles augustus lindbergh, jr.
4|Trial of the Gang of Four|Gang of Four|gang four trial
4|Trial of Nicolae and Elena Ceaușescu|Trial of Nicolae and Elena Ceaușescu|ceausescu trial
4|Trial of Slobodan Milošević||milosevic trial
5|Trial of Gilles de Rais|Gilles de Rais|gilles de rais
5|North Berwick witch trials||north berwick
5|Vardø witch trials||vardo witch trials
5|Dachau trials||dachau military tribunal;dachau international military tribunal
5|Belsen trial
5|Trial of Philippe Pétain|Philippe Pétain|petain trial
5|Impeachment of Warren Hastings||warren hastings
5|Trial of Verres|Gaius Verres|verres
5|Great Trial of 1922|Mahatma Gandhi|gandhi trial
5|Lahore Conspiracy Case trial|Lahore Conspiracy Case trial|lahore conspiracy;first lahore conspiracy trial
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
1|Holy Grail||grail;sangreal;sangraal
1|Ark of the Covenant||ark covenant;ark of god
1|El Dorado
1|Amber Room||amber chamber
2|Crown Jewels of the United Kingdom||crown jewels;british regalia;british crown jewels;english crown jewels
2|Tutankhamun's tomb|KV62|tutankhamun treasure;tutankhamun tomb
2|Sutton Hoo||sutton hoo treasure
2|Staffordshire Hoard
2|Oak Island||oak island money pit;money pit
2|Shroud of Turin||turin shroud;holy shroud
2|Hope Diamond
2|Koh-i-Noor||koh i noor;kohinoor
3|Treasure of Lima
3|Nazi gold
3|Yamashita's gold||yamashita gold;yamashita treasure;kin no yuri
3|Fabergé egg||faberge egg;faberge eggs
3|Priam's Treasure||priams treasure;treasure of priam
3|Atahualpa's ransom|Atahualpa|atahualpa ransom;atahuallpa
3|King John's treasure|King John's treasure|king johns treasure
3|Holy Lance||spear destiny;spear of longinus;lance of longinus;holy spear
3|Cullinan Diamond||cullinan;star of africa;great star of africa
3|Peacock Throne||takht e taus
3|San José (ship)|San José (ship)|san jose galleon
3|Nuestra Señora de Atocha||atocha
3|Lost Dutchman's Gold Mine||lost dutchman
3|Knights Templar legends|Knights Templar legends|templar treasure
3|Mask of Agamemnon
4|Honjo Masamune||honjo masamune
4|Library of Ivan the Terrible||ivan library
4|Montezuma's treasure|Montezuma II|montezuma treasure;montezuma ii
4|Copper Scroll
4|Florentine Diamond
4|Whydah Gally||whydah
4|Beale ciphers||beale treasure
4|Fenn treasure||forrest fenn
4|Hoxne Hoard
4|Varna Necropolis||varna gold
4|Bactrian gold||tillya tepe
4|Gundestrup cauldron
4|Rennes-le-Château||rennes le chateau;rennes de chateau
4|Iron Crown of Lombardy||iron crown
4|Honours of Scotland||scottish crown jewels;scottish regalia;regalia of scotland
4|Irish Crown Jewels||crown jewels of ireland
4|Isabella Stewart Gardner Museum theft||gardner museum heist;isabella stewart gardner museum heist
4|Imperial Regalia of Japan||kusanagi;three sacred treasures;japanese imperial regalia;sacred treasures
4|Heirloom Seal of the Realm||heirloom seal;imperial seal of china
4|Romanov jewels|Russian Crown Jewels|romanov jewels;russian crown jewels;imperial crown of russia;russian imperial crown;great imperial crown;crown jewels of russia
5|Mildenhall Treasure
5|Snettisham Hoard||snettisham torc
5|Cuerdale Hoard
5|Panagyurishte Treasure
5|Treasure of Nimrud|Nimrud|nimrud treasure
5|Golden horns of Gallehus||gallehus horns
5|Ardagh Chalice
5|Tara Brooch
5|Crown of Saint Wenceslas||wenceslas crown;crown of st. wenceslas
5|Imperial Crown of the Holy Roman Empire||imperial crown hre;reichskrone
5|Kruger Millions
5|Confederate gold
5|The Concert (Vermeer)|The Concert (Vermeer)|concert vermeer
5|Just Judges|Ghent Altarpiece|just judges
6|Spillings Hoard
6|Hiddensee treasure
6|Treasure of Guarrazar||guarrazar
6|Pietroasele Treasure||pietroasa
6|Treasure of Nagyszentmiklós||nagyszentmiklos;treasure of sânnicolau mare
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
1|The War of the Worlds (1938 radio drama)|The War of the Worlds (1938 radio drama)|war worlds radio;war worlds broadcast;orson welles;war of the worlds panic
1|Cottingley Fairies||cottingley
2|Hitler Diaries||hitler diaries;konrad kujau
2|Donation of Constantine
2|Cardiff Giant
2|Spaghetti-tree hoax||spaghetti tree
2|Surgeon's Photograph|Loch Ness Monster|surgeons photograph;loch ness photo;nessie
2|Mechanical Turk||turk chess;the turk
2|Anna Anderson||fake anastasia;anastasia impostor;franziska schanzkowska
2|Victor Lustig||lustig;eiffel tower sale
2|Charles Ponzi||ponzi;ponzi scheme
3|Han van Meegeren||van meegeren
3|Protocols of the Elders of Zion||protocols zion;elders of zion;the zionist protocols
3|Crystal skull||crystal skulls
3|Fiji mermaid||feejee mermaid
3|Great Moon Hoax||moon hoax 1835
3|Crop circle||crop circles
3|Frank Abagnale||abagnale;catch me if you can
3|Priory of Sion||plantard;prieuré de sion
3|Perkin Warbeck||warbeck
3|False Dmitry I||false dmitry;false demetrius i
3|Martin Guerre||guerre;arnaud du tilh
4|Alien autopsy||alien autopsy film
4|Sokal affair||sokal
4|Mary Toft||toft
4|Ossian||macpherson ossian;the works of ossian
4|Vinland Map
4|Zinoviev letter
4|Kensington Runestone||kensington stone
4|Clifford Irving||irving hughes autobiography
4|George C. Parker||parker brooklyn bridge
4|Gregor MacGregor||poyais
4|Dreadnought hoax
4|Fox sisters
4|Amityville haunting|The Amityville Horror|amityville
4|Balloon boy hoax||balloon boy
5|Princess Caraboo||caraboo
5|George Psalmanazar||psalmanazar
5|Taxil hoax||taxil
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
1|University of Cambridge||cambridge;cambridge university;cantabrigiensis;cantab.
1|University of Bologna||bologna;alma mater studiorum
2|University of Paris||sorbonne;paris university;university of sorbonne;faculté de médecine de paris
2|University of Salamanca||salamanca
2|University of al-Qarawiyyin||al qarawiyyin;qarawiyyin;university of al quaraouiyine;university of al karaouine
2|Al-Azhar University||al azhar;azharite;university of azhar;azhari
2|University of Padua||padua;padova;university of padova
2|Charles University||prague university;charles university prague;german university of prague
2|Jagiellonian University||jagiellonian;krakow university;cracow academy;kraków academy;university of cracow
2|University of Vienna||vienna university;universität wien
2|Heidelberg University||heidelberg;ruprecht karl university of heidelberg;ruprecht-karls-universität heidelberg;universität heidelberg
2|University of St Andrews||st andrews;saint andrews;university of saint andrews
2|Nalanda||nalanda university
3|Taxila||takshashila;takkasīlā
3|University of Coimbra||coimbra;estudo geral
3|University of Montpellier||montpellier
3|University of Toulouse||toulouse
3|University of Naples Federico II||naples university;università federico ii
3|University of Siena||siena
3|University of Pisa||pisa
3|University of Glasgow||glasgow
3|University of Aberdeen||aberdeen
3|Leipzig University||leipzig;university leipzig;karl marx university, leipzig
3|KU Leuven|Old University of Leuven|leuven;louvain
3|University of Basel||basel
3|University of Tübingen||tubingen;eberhard karls university of tübingen
3|Uppsala University||uppsala
3|University of Copenhagen||copenhagen;københavns universitet
3|Schola Medica Salernitana||salerno;salerno medical school;school of salerno
3|University of Sankore||sankore
4|University of Perugia||perugia
4|University of Rostock||rostock
4|University of Greifswald||greifswald
4|University of Freiburg||freiburg;albert ludwigs university of freiburg;albert ludwig university of freiburg;albert-ludwigs-universität
4|University of Erfurt||erfurt
4|University of Cologne||cologne
4|Ludwig Maximilian University of Munich||ingolstadt;lmu munich
4|University of Würzburg||wurzburg;julius maximilian university of würzburg
4|University of Valladolid||valladolid
4|University of Pavia||pavia
4|University of Alcalá||alcala;complutense;universidad de alcalá de henares
4|University of Lleida||lleida
4|University of Pécs||pecs
4|Sungkyunkwan University||sungkyunkwan
4|Guozijian||imperial academy
5|University of Florence||florence;firenze university press
5|University of Ferrara||ferrara
5|University of Turin||turin;university of torino
5|University of Bordeaux||bordeaux
5|University of Caen Normandy||caen;university of caen;university of caen lower normandy;université de caen;caen university
5|University of Zaragoza||zaragoza
5|University of Valencia||valencia
5|University of Barcelona||barcelona
5|University of Santiago de Compostela||santiago compostela;universidad de santiago de compostela
5|University of Mainz||mainz;johannes gutenberg university of mainz;gutenberg university;johannes gutenberg university
5|Hanlin Academy||hanlin
5|Yuelu Academy||yuelu
5|Al-Nizamiyya of Baghdad||nizamiyya
5|Al-Mustansiriya University||mustansiriya;mustansiriyah university
5|University of Constantinople||pandidakterion;university of magnaura;magnaura school
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
1|Thomas Aquinas||aquinas;saint thomas aquinas;doctor angelicus;doctor communis;thomas of aquino
1|Augustine of Hippo||augustine;saint augustine;st augustine;st. augustine of hippo;blessed augustine;aurelius augustinus
2|Avicenna||ibn sina;avicennian logic;abuali ibn sino;abu ali sina
2|Averroes||ibn rushd
2|Maimonides||rambam;moses ben maimon;moshe ben maimon
2|William of Ockham||ockham;occam;william of occam;doctor singularis et invincibilis
2|Peter Abelard||abelard
2|Anselm of Canterbury||anselm;saint anselm of canterbury;st anselm;saint anselm;archbishop anselm
2|Boethius
2|Hildegard of Bingen||hildegard;st. hildegard of bingen
2|Al-Ghazali||ghazali;algazelus
2|Al-Farabi||farabi
2|Roger Bacon||bacon;doctor mirabilis
2|Duns Scotus||scotus;john duns scotus;doctor subtilis
2|Bede||venerable bede;saint bede;st. bede;bede of jarrow;beda venerabilis
2|Ibn Khaldun||khaldun;khaldunian
2|Meister Eckhart||eckhart
2|Albertus Magnus||albert great;albertus;albert magnus;st. albert the great;st. albertus magnus
2|Bonaventure||bonaventura of bagnoreggio;saint bonaventura
3|Rumi||jalal ad-din muhammad rumi;jalal al-din muhammad rumi;jalal ad-din muhammad balkhi;maulana rumi
3|Bernard of Clairvaux||bernard clairvaux;saint bernard of clairvaux;st. bernard of clairvaux;bernhard von clairvaux
3|Heloise||heloise
3|John Scotus Eriugena||eriugena;johannes scotus eriugena
3|Al-Kindi||kindi
3|Ibn Arabi||ibn al arabi
3|Nicholas of Cusa||cusanus;cardinal nicholas of cusa;nicholas of kues;nikolaus von kues;cusa
3|John Wycliffe||wycliffe;john wyclif;wycliffites
3|Christine de Pizan||pizan
3|Isidore of Seville||isidore;st. isidore of seville;saint isidore of seville
3|Alcuin||alcuin york;flaccus albinus alcuinus
3|Adi Shankara||shankara;shankaracharya;adi sankaracharya
4|Jan Hus||hus;john huss
4|Marsilius of Padua||marsilius
4|Peter Lombard||lombard
4|Robert Grosseteste||grosseteste
4|Jean Buridan||buridan
4|Nicole Oresme||oresme
4|Ramon Llull||llull;lull;raymond lull
4|Julian of Norwich||julian norwich
4|Catherine of Siena||catherine siena;st. catherine of siena;saint catherine of siena
4|John of Damascus||john damascus;john damascene;st. john damascene;saint john of damascus;st john of damascus
4|Pseudo-Dionysius the Areopagite||pseudo dionysius
4|Pope Gregory I||gregory great;gregory 1;st gregory;saint gregory;saint gregory the great;st. gregory the great
4|Rashi||shlomo yitzhaki
4|Ibn Taymiyya||taymiyya
4|Zhu Xi
4|Wang Yangming
4|Ramanuja||ramanujacharya;sri ramanujacharya
4|Dōgen||dogen
4|Nichiren
4|Kūkai||kukai;kobo daishi
4|Thomas à Kempis||kempis
4|Pico della Mirandola||mirandola;giovanni pico
4|Marsilio Ficino||ficino
5|Hugh of Saint Victor||hugh st victor
5|Bridget of Sweden||birgitta;saint bridget of sweden;st. bridget of sweden;saint birgitta of sweden
5|Marguerite Porete||porete
5|Siger of Brabant||siger
5|Gregory Palamas||palamas
5|Michael Psellos||psellos
5|Cassiodorus
5|Solomon ibn Gabirol||avicebron;gabirol
5|Judah Halevi||halevi
5|Nachmanides||ramban;moshe ben nachman;moshe ben nahman
5|Gersonides||levi ben gerson;levi ben gershon;ralbag
5|Saadia Gaon||saadia
5|Ibn Bajja||avempace
5|Ibn Tufayl||tufayl
5|Shahab al-Din Yahya ibn Habash Suhrawardi|Shahab al-Din Yahya ibn Habash Suhrawardi|suhrawardi
5|Nasir al-Din al-Tusi||al tusi;tusi;khajeh nasir toosi
5|Madhvacharya||madhva
5|Shinran
6|Hadewijch
6|Mechthild of Magdeburg||mechthild
6|Gilbert de la Porrée||gilbert porree;gilbert of poitiers
6|Jean Gerson||gerson
6|Fakhr al-Din al-Razi||fakhr razi;fakhruddin razi;al-fakhr al-razi
6|Hōnen||honen
6|Saichō||saicho;dengyō daishi
`,
nope:{
 'aristotle|plato|socrates':'Ancient Greek &mdash; though the medieval thinkers read them closely!',
 'martin luther|luther|calvin|descartes|erasmus':'Just after the Middle Ages &mdash; try another dig!'
}},

{id:'nicknames', cat:'Rulers', q:'Name a ruler known by a colourful epithet', hint:'Not &ldquo;the Great&rdquo; &mdash; think the Bald, the Fat, the Terrible&hellip;',
list:`
1|Ivan the Terrible||ivan 4;ivan terrible;ivan iv of russia;ivan iv vasilyevich
1|Vlad the Impaler||vlad dracula;vlad tepes;vlad iii of wallachia;vladimir dracula;vlad iii dracul;dracular
1|Richard the Lionheart|Richard I of England|lionheart;richard lionheart;coeur de lion;richard coeur de lion
2|Charles the Bald||charles bald;charles ii of france
2|Harald Bluetooth||bluetooth;harold i of denmark;harald i of denmark;harald gormsson
2|Pepin the Short||pepin short;pippin the younger;pippin iii;pepin the younger;pépin le bref
2|Louis the Pious||louis pious;louis i of france;louis the fair;louis le pieux
2|William the Conqueror||conqueror;william conqueror;william i of england;william ii, duke of normandy;william ii of normandy;guillaume le bâtard
2|Edward the Confessor||confessor
2|Æthelred the Unready||ethelred unready;aethelred unready;æthelred of england;ethelred ii;ethelred ii of england;aethelred ii
2|Suleiman the Magnificent||suleiman magnificent;suleyman i;süleyman i the magnificent
2|Charles the Bold||charles bold;charles i, duke of burgundy;charles, duke of burgundy;charles of burgundy;charles le téméraire
2|Philip IV of France|Philip IV of France|philip fair;philip i of navarre;philippe iv
2|Harald Hardrada||hardrada;harald hard ruler;harald iii of norway;haraldr sigurðarson;harold iii of norway
2|Eric Bloodaxe||bloodaxe;eric i of norway;eirik i of norway
2|Sweyn Forkbeard||forkbeard;sweyn i of denmark;swein i of denmark;svend tveskæg
2|Harald Fairhair||fairhair;harald harfagre;harald i of norway;harald finehair
2|Frederick Barbarossa||barbarossa;redbeard;frederick iii, duke of swabia
2|Joanna of Castile||joanna mad;juana loca;juana of castile;juana i;joanna of aragon
2|Charles VI of France|Charles VI of France|charles mad;charles well beloved
2|King John|John, King of England|john lackland;lackland;king john of england;john i of england;john, duke of normandy
2|Bloody Mary|Mary I of England|bloody mary
3|Louis VI of France|Louis VI of France|louis fat
3|Charles the Simple||charles simple;charles iii of france
3|Magnus Barefoot||barefoot;magnus barelegs;magnus iii of norway;magnús óláfsson (died 1103)
3|Peter of Castile||peter cruel;pedro of castile;pedro the cruel;pedro i of castile
3|Alfonso X of Castile|Alfonso X of Castile|alfonso wise;alfonso x;alfonso el sabio;alphonso x
3|Louis the Stammerer||stammerer;louis ii of france
3|Charles the Fat||charles fat
3|William II of England|William II of England|william rufus;rufus;william the red
3|Edward I of England|Edward I of England|longshanks;hammer scots;edward i plantagenet
3|Ivar the Boneless||boneless;ivar beinlaus;ívarr inn beinlausi
3|Basil II||bulgar slayer;basil bulgar slayer
3|Mehmed the Conqueror|Mehmed II|mehmed conqueror
3|Selim I||selim grim;selim the stern;salim khan i
3|Charles Martel||charles hammer;martel;karl martell
3|Henry the Navigator||navigator;henry, duke of viseu;prince henry of portugal;infante henrique of portugal;infante d. henrique
3|Edward the Black Prince||black prince
4|Henry the Fowler||fowler;henry i of germany
4|Edmund Ironside||ironside;edmund ii;edmund ii of england
4|Harold Harefoot||harefoot;harold i
4|Olaf II of Norway|Olaf II of Norway|olaf holy;saint olaf;st olaf;st. olav;olaf haraldson;olaf ii haraldsson
4|Haakon the Good||haakon good;haakon i of norway;hákon aðalsteinsfóstri
4|Gorm the Old||gorm old;gorm inn gamli;gorm of denmark
4|Magnus the Lawmender|Magnus VI of Norway|lawmender;lagabote;magnus lagabote;magnus vi of norway
4|Sigurd the Crusader||sigurd jorsalfare;jorsalfar;sigurd crusader;sigurd i of norway;sigurd i magnusson
4|Halfdan the Black||halfdan black;hálfdan svarti
4|Yaroslav the Wise||yaroslav wise;yaroslav i of kiev
4|Ibrahim of the Ottoman Empire|Ibrahim of the Ottoman Empire|ibrahim mad
4|Bayezid I||bayezid thunderbolt;yildirim;beyazid i;bajazet i
4|Charles II of Spain|Charles II of Spain|charles bewitched;carlos ii of spain;charles v of naples
4|John the Fearless||fearless;john i, duke of burgundy
4|Philip the Good||philip good;philip iii of burgundy;philip iii, duke of burgundy
4|Philip the Bold||philip bold;philip ii, duke of burgundy;philip ii of burgundy;philippe the bold
4|Henry the Lion||henry lion;henry iii, duke of saxony
5|Robert II of France|Robert II of France|robert pious
5|Christian II of Denmark|Christian II of Denmark|christian tyrant
5|Eric the Victorious||eric victorious;eric vi of sweden;erik segersäll
5|Valdemar II of Denmark|Valdemar II of Denmark|valdemar victorious;valdemar ii;valdemar sejr
5|Władysław I the Elbow-high|Władysław I the Elbow-high|elbow high;ladislaus short;władysław łokietek;władysław i of poland
5|Bolesław I the Brave|Bolesław I the Brave|boleslaw brave;bolesław i chrobry;bolesław i of poland;boleslaus i of poland;bolesław chrobry
5|Bolesław III Wrymouth|Bolesław III Wrymouth|wrymouth;boleslaus iii of poland;boleslaw iii of poland
5|Constantine V||copronymus
5|Justinian II||rhinotmetos;slit nosed
5|Michael III||michael drunkard
5|Leo VI the Wise||leo wise
5|Ivan I of Moscow||ivan kalita;moneybag;ivan i of russia
5|Dmitry Donskoy||donskoy;demetrius of the don
5|Alfonso the Battler|Alfonso I of Aragon|alfonso battler;alfonso i of aragón
5|Sancho I of León|Sancho I of León|sancho fat
5|Henry IV of Castile|Henry IV of Castile|henry impotent;enrique iv;enrique iv of castile
5|John the Blind||john blind;john i, count of luxemburg;john of luxembourg;john i of bohemia;john of luxemburg
5|Albert the Bear||albert bear;albert i of brandenburg;albert i, margrave of brandenburg;albrecht the bear
5|Louis XI|Louis XI|universal spider;louis spider
5|Malcolm III of Scotland|Malcolm III of Scotland|malcolm canmore;canmore;máel coluim iii
5|Harald Greycloak||greycloak;harald ii of norway
5|Magnus the Good||magnus good;magnus i of norway
5|Olaf Kyrre|Olaf III of Norway|olaf peaceful;olav kyrre;olav iii of norway
6|Inge the Hunchback|Inge I of Norway|inge hunchback;inge i of norway
6|Magnus the Blind|Magnus IV of Norway|magnus blind;magnus iv of norway
6|Vasily the Blind|Vasily II of Moscow|vasily blind;vasily ii;vasili ii of russia;vasily ii of russia
6|Fyodor I of Russia|Fyodor I of Russia|fyodor bellringer;feodor i;fedor i of russia;fyodor i
6|Louis the Child||louis child
6|Frederick the Quarrelsome|Frederick II, Duke of Austria|frederick quarrelsome;frederick ii, duke of austria
6|Pepin the Hunchback||pepin hunchback;pippin the hunchback
`,
nope:{
 'alexander great|peter great|catherine great|alfred great|frederick great|cyrus great':'&ldquo;The Great&rdquo; is too easy &mdash; this dig wants something more colourful!'
}},

{id:'houses', cat:'Rulers', q:'Name a royal house or ruling dynasty', hint:'Families that ruled &mdash; anywhere, any age',
list:`
1|House of Tudor||tudor;tudors
1|House of Habsburg||habsburg;hapsburg;habsburgs;count of habsburg;house of austria;joseph branch of the habsburg
1|House of Windsor||windsor
1|House of Romanov||romanov;romanovs;russian imperial family;russian imperial house
2|House of Bourbon||bourbon;bourbons
2|House of Stuart||stuart;stuarts;stewart;house of stewart
2|House of Plantagenet||plantagenet;plantagenets
2|House of York||york;yorkist;yorkists
2|House of Lancaster||lancaster
2|House of Medici||medici;medicean
2|Ming dynasty||ming;ming china;ming empire;great ming
2|Qing dynasty||qing;manchu dynasty;qing dynasties;great qing empire
2|Han dynasty||han;han china;house of liu;former han dynasty
2|Tang dynasty||tang;tang china;tang empire;great tang
2|Song dynasty||song;song china;song empire
2|Ptolemaic dynasty||ptolemies;ptolemaic;lagids
2|Julio-Claudian dynasty||julio claudian
2|Carolingian dynasty||carolingian;carolingians;karlings;karling
2|Merovingian dynasty||merovingian;merovingians
2|Capetian dynasty||capetian;capetians;house of france;senior capets
2|House of Valois||valois
2|House of Hanover||hanover;hanoverian;house of brunswick
2|House of Hohenzollern||hohenzollern;count of hohenzollern
2|House of Savoy||savoy;italian royal family
2|Ottoman dynasty||house osman;ottomans;osmanli;imperial house of osman
2|Mughal dynasty|Mughal dynasty|mughal;mughals;moghul dynasty;house of babur
2|Abbasid Caliphate||abbasid;abbasids;abassid;caliphs of baghdad
2|Umayyad dynasty||umayyad;umayyads;banu umayya;marwanids;al-marwani family;banu umayyah
2|Achaemenid dynasty||achaemenid;achaemenids
2|House of Borgia||borgia;borgias;house of borja
3|House of Orange-Nassau||orange nassau;house of orange;royal house of the netherlands
3|House of Wittelsbach||wittelsbach;house of bavaria
3|House of Saxe-Coburg and Gotha||saxe coburg gotha;saxe coburg
3|Yuan dynasty||yuan;empire of the great khan;yuan empire;great yuan;yuan china
3|Joseon||joseon dynasty;yi dynasty;great joseon state;kingdom of joseon
3|Imperial House of Japan||yamato dynasty;chrysanthemum throne;imperial household of japan;japanese imperial family;imperial family of japan;japanese royal family
3|Tokugawa clan||tokugawa
3|Fatimid Caliphate||fatimid;fatimids
3|Ayyubid dynasty||ayyubid;ayyubids
3|Safavid dynasty||safavid;safavids
3|Pahlavi dynasty||pahlavi;house of pahlavi;iranian imperial family
3|Seleucid Empire|Seleucid Empire|seleucid;seleucids
3|Flavian dynasty||flavian
3|Severan dynasty||severan
3|Nerva–Antonine dynasty||antonine dynasty;nerva antonine;good emperors;adoptive emperors
3|Komnenos||komnenian;comnenus
3|House of Oldenburg||oldenburg
3|House of Bernadotte||bernadotte
3|House of Vasa||vasa;vasa family
3|House of Wessex||wessex;cerdicings
3|House of Normandy||normandy;norman dynasty
3|Rurik dynasty||rurikids;rurik
3|House of Grimaldi||grimaldi
3|Shang dynasty||shang
3|Zhou dynasty||zhou;zhou china;zhou kingdom;kingdom of zhou;state of zhou
3|Qin dynasty||qin;qin empire
3|Maurya Empire||maurya;mauryan
3|Gupta Empire||gupta
3|Chola dynasty||chola;chodas
3|House of Saud||saud;al saud;monarchy of saudi arabia;saudi monarchy;saudi royal family
4|Qajar dynasty||qajar
4|Antigonid dynasty||antigonid
4|Argead dynasty||argead;temenid
4|Constantinian dynasty||constantinian;house of constantine
4|Theodosian dynasty||theodosian;house of theodosius
4|Macedonian dynasty||macedonian dynasty
4|Palaiologos||palaiologan;palaeologus;house of palaiologos
4|House of Glücksburg||glucksburg
4|Fairhair dynasty||fairhair dynasty;harfagre dynasty;house of fairhair;st. olaf dynasty
4|House of Godwin||godwin;godwinson
4|House of Anjou||anjou;angevin
4|House of Trastámara||trastamara
4|House of Braganza||braganza;portuguese royal family
4|Jagiellonian dynasty||jagiellon;jagiellonian dynasty;house of jagiellon;cross of jagiellons
4|Piast dynasty||piast;house of piast
4|Árpád dynasty||arpad;house of arpad
4|Přemyslid dynasty||premyslid;house of přemysl;house of přemyslid
4|House of Luxembourg||luxembourg
4|Hohenstaufen||staufen;hohenstaufen;house of hohenstaufen;staufer
4|Ottonian dynasty||ottonian;liudolfing;liudolfings
4|House of Sforza||sforza
4|Jin dynasty (266–420)|Jin dynasty (266–420)|jin;jin dynasty (265-420);xijin
4|Sui dynasty||sui;sui china;sui empire
4|Goryeo||kingdom of goryeo;gaoli
4|Silla||kingdom of silla;saro-guk
4|Solomonic dynasty||solomonic;house of solomon
4|Alaouite dynasty||alaouite;'alawi dynasty;royal family of morocco;moroccan royal family;'alawis
4|Hashemites||hashemite;house of hashim;jordanian royal family
4|Kamehameha dynasty|House of Kamehameha|kamehameha
4|Chakri dynasty||chakri;thai royal family;house of chakri
4|Nguyễn dynasty||nguyen dynasty;dai nam
5|House of Sverre||sverre
5|House of Blois||blois;house of champagne
5|House of Aviz||aviz
5|Salian dynasty||salian;house of salian
5|House of Este||este;d'este;este family;marquis of este;d'este family
5|House of Visconti||visconti
5|House of Gonzaga||gonzaga
5|House of Liechtenstein||liechtenstein;princely family of liechtenstein;princely house of liechtenstein
5|Nemanjić dynasty||nemanjic;house of nemanjić
5|Liao dynasty||liao;khitan;liao empire
5|Western Xia||xi xia;tangut empire;minyak;xixia
5|Chalukya dynasty||chalukya;badami chalukyas;badami chalukya empire
5|Pallava dynasty||pallava;origin of pallava
5|Keita dynasty||keita
5|Zagwe dynasty||zagwe
5|Konbaung dynasty||konbaung
6|Rashtrakuta dynasty||rashtrakuta
6|Kotromanić dynasty||kotromanic;house of kotromanić
6|Sailendra||sailendra
`,
nope:{
 'targaryen|house targaryen|lannister|house lannister|stark|house stark|atreides|house atreides':'Fiction!'
}},

{id:'britindep', cat:'Empires', q:'Name a country that won independence from the British Empire', hint:'Former colonies, dominions, mandates and protectorates',
list:`
1|United States||usa;us;america;united states america;états-unis;estados unidos;thestates;the states
1|India||bhārat gaṇarājya
1|Ireland||republic ireland;irish free state;eire;irlanda;irlandia
1|Australia||commonwealth of australia;australian commonwealth;dominion of australia
1|Canada
2|Pakistan||federation of pakistan;state of pakistan
2|Sri Lanka||ceylon;ilangai
2|Myanmar||burma;birmania
2|Malaysia||malaya;federation of malaysia
2|Singapore||s'pore
2|Kenya
2|Nigeria||najeriya;giant of africa
2|Ghana||gold coast
2|South Africa||suid-afrika
2|New Zealand
2|Egypt
2|Israel||state of israel
2|Jordan||transjordan;urdunn;urdun;jordanie
2|Iraq||iraw;south iraq;central iraq
2|Cyprus||kypros
2|Malta
2|Jamaica
3|Uganda
3|Tanzania||tanganyika;zanzibar
3|Zambia||northern rhodesia
3|Zimbabwe||rhodesia;southern rhodesia
3|Botswana||bechuanaland
3|Malawi||nyasaland
3|Sierra Leone||salone
3|The Gambia||gambia
3|Sudan
3|Kuwait||state of kuwait;koweit
3|Bahrain||al-bahrayn
3|Qatar||state of qatar
3|United Arab Emirates||uae;trucial states;united emirates;the emirates;arab emirates
3|Fiji||fiji islands
3|Belize||british honduras;dominion of belize
3|Guyana||british guiana
3|Barbados
3|Trinidad and Tobago||trinidad;trinidadian and tobagonian
3|The Bahamas||bahamas;commonwealth of the bahamas
3|Mauritius||dina arobi;ile maurice;crown colony of mauritius
3|Afghanistan||islamic emirate of afghanistan;afghania;second islamic emirate of afghanistan
4|Seychelles
4|Lesotho||basutoland
4|Eswatini||swaziland
4|Somalia||british somaliland;somaliland;soomaaliya
4|Yemen||aden;south yemen;jemen;al-yaman
4|Brunei
4|Maldives
4|Solomon Islands||solomon is.
4|Cameroon||british cameroons
4|Antigua and Barbuda||antigua
4|Grenada
4|Dominica||commonwealth of dominica
4|Saint Lucia||st lucia
5|Tuvalu||ellice islands
5|Kiribati||gilbert islands
5|Vanuatu||new hebrides
5|Tonga||friendly islands
5|Saint Kitts and Nevis||st kitts nevis;st kitts;saint christopher and nevis;st. christopher and nevis;skn
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
1|Louis XIV|Louis XIV|louis 14;sun king;roi soleil;le roi soleil
1|Napoleon|Napoleon|napoleon 1;napoleon bonaparte;bonaparte;nepolian;little corporal
1|Louis XVI|Louis XVI|louis 16;louis-auguste;louis capet;citizen capet
1|Charlemagne||charles great;karl der grosse;carolus magnus;charles i of france;karolus magnus;carlomagno;karl the great
2|Louis XV|Louis XV|louis 15
2|Henry IV|*|henri 4;good king henry;henry iii of navarre;henry of navarre;henri de navarre
2|Francis I|*|francois 1
2|Louis XIII|Louis XIII|louis 13
2|Napoleon III|Napoleon III|louis napoleon;napoleon 3;napoléon iii of france;charles louis napoléon bonaparte
2|Clovis I||clovis
3|Philip II Augustus|Philip II of France|philip augustus;philippe auguste;philip 2;philippe ii of france
3|Louis IX|*|saint louis;st louis;louis 9
3|Philip IV|*|philip fair;philippe le bel;philip 4;philip i of navarre;philippe iv
3|Charles VII|*|charles 7;charles victorious
3|Louis XVIII|Louis XVIII|louis 18
3|Charles X|*|charles 10
3|Louis Philippe I|Louis Philippe I|louis philippe;citizen king
3|Hugh Capet||hugues capet;capet
3|Pepin the Short||pepin;pippin;pippin short;pepin 3
4|Louis XI|Louis XI|louis 11;spider king
4|Louis XII|Louis XII|louis 12
4|Charles VIII|*|charles 8;charles the affable
4|Henry II|*|henri 2
4|Francis II|*|francois 2
4|Charles IX|*|charles 9
4|Henry III|*|henri 3;henry, duke of anjou
4|Charles VI|*|charles 6;charles mad
4|Charles V|*|charles 5;charles wise
4|John II|*|john 2;jean 2;john good;jean ii of france
4|Philip VI|*|philip 6;philip of valois;philippe vi of france;philip the fortunate
4|Louis VII|*|louis 7
4|Louis VI|*|louis 6;louis fat
4|Charles the Bald||charles bald;charles 2
4|Louis the Pious||louis pious;louis 1;louis the fair;louis le pieux
4|Dagobert I
4|Philip III|*
5|Philip I|*|philip 1
5|Robert II|*|robert 2;robert pious
5|Henry I|*|henri 1
5|Louis X|*|louis 10;louis i of navarre;louis x and i
5|Philip V|*|philip 5;philip the tall;philip ii of navarre
5|Charles IV|*|charles 4;charles iv and i;charles the fair;charles i of navarre
5|Louis VIII|*|louis 8;louis lion
5|Louis XVII|Louis XVII|louis 17;lost dauphin;louis-charles de france
5|Napoleon II|Napoleon II|napoleon 2;aiglon;duke of reichstadt;napoléon françois joseph charles bonaparte;napoleon ii of france;duc de reichstadt
5|Childeric I
5|Chlothar I
5|Charles the Simple||charles simple;charles 3
5|John I|*|john the posthumous;john i the posthumous
6|Merovech||merovee
6|Chilperic I
6|Childebert I
6|Odo|Odo of France|eudes;odo, count of paris
6|Rudolph|Rudolph of France|raoul
6|Louis IV|*|louis 4;louis outremer
6|Lothair|Lothair of France|lothaire;lothar ii of france;lothar of france
6|Louis V|*|louis 5;louis lazy
6|Robert I|*|robert 1
6|Charles the Fat||charles fat
6|Louis the Stammerer||louis stammerer;louis 2
6|Carloman II
6|Childeric III
6|Carloman I||carloman, son of pippin iii
6|Chlothar II||clotaire ii
6|Chlodio
6|Clovis II
6|Louis III|*
6|Theuderic III
6|Theuderic IV
6|Chilperic II
6|Chlothar III||clotaire iii
6|Childebert III||childebert iv
6|Dagobert III
6|Clovis IV
6|Childeric II
6|Clovis III
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
 'francis|francois':'Which Francis? Add a number.',
 'john':'Which John? Add a number.',
 'robert':'Which Robert? Add a number.',
 'theuderic':'Which Theuderic? Add a number.',
 'dagobert':'Which Dagobert? Add a number.',
 'childeric':'Which Childeric? Add a number.',
 'chlothar':'Which Chlothar? Add a number.',
 'clotaire':'Which Clotaire (Chlothar)? Add a number.',
 'clothar':'Which Chlothar? Add a number.',
 'chilperic':'Which Chilperic? Add a number.',
 'childebert':'Which Childebert? Add a number.',
 'carloman':'Which Carloman? Add a number.'
}},

{id:'hre', cat:'Rulers', q:'Name a Holy Roman Emperor', hint:'Crowned emperors from Charlemagne (800) to 1806', wf:'{}, Holy Roman Emperor',
list:`
1|Charlemagne||charles great;carolus magnus;charles i of france;karolus magnus;carlomagno
1|Charles V|*|charles 5;karl 5;carlos 1;charles i of spain;carlos v, holy roman emperor;charles quint;charles v and i
1|Frederick Barbarossa||barbarossa;frederick 1;frederick iii, duke of swabia
2|Otto the Great||otto 1;otto great;otto i of germany
2|Frederick II|*|frederick 2;stupor mundi;frederick i of sicily;fredrick ii, holy roman emperor;frederick roger of sicily
2|Maximilian I|*|maximilian 1;maximilian
2|Francis II|*|francis 2;franz 2;francis 1 austria;franz i of austria;emperor franz
2|Joseph II|*|joseph 2;josef ii
2|Rudolf II|*|rudolf 2;rudolph ii, holy roman emperor;emperor rudolf;emperor rudolph ii
3|Henry IV|*|henry 4;heinrich 4;henry viii, duke of bavaria
3|Sigismund|*|sigismund
3|Charles IV|*|charles 4;karl 4;charles i of luxembourg;charles of luxembourg;charles i of bohemia
3|Leopold I|*|leopold 1
3|Ferdinand II|*|ferdinand 2
3|Louis the Pious||louis pious;louis 1;louis the fair;louis le pieux
4|Otto II|*|otto 2
4|Otto III|*|otto 3;holy roman emperor otto iii
4|Henry II|*|henry 2;saint henry
4|Conrad II|*|conrad 2;conrad the salic
4|Henry III|*|henry 3;henry vi, duke of bavaria
4|Henry V|*|henry 5
4|Henry VI|*|henry 6;heinrich vi
4|Frederick III|*|frederick 3;frederick v of austria
4|Ferdinand I|*|ferdinand 1
4|Maximilian II|*|maximilian 2
4|Matthias|*|matthias;mathias, holy roman emperor;mathias ii of hungary
4|Ferdinand III|*|ferdinand 3
4|Charles VI|*|charles 6;charles ii of bohemia
4|Francis I|*|francis 1;franz 1;francis stephen;francis ii stephen;francis iii stephen;francis of lorraine;francis iii, duke of lorraine
4|Leopold II|*|leopold 2;peter leopold
4|Lothair I||lothair 1;lothar 1
5|Lothair III|*|lothair 3;lothar 3;lothair ii, holy roman emperor;lothair of supplinburg;lothar ii, holy roman emperor;emperor lothair ii
5|Otto IV|*|otto 4;otto iv of germany
5|Louis IV|*|louis 4;louis bavarian;louis v of germany;ludwig the bavarian
5|Henry VII|*|henry 7
5|Joseph I|*|joseph 1
5|Charles VII|*|charles 7;charles albert of bavaria;karl albrecht, elector of bavaria
5|Charles the Bald||charles bald;charles ii of france
5|Charles the Fat||charles fat
5|Arnulf of Carinthia||arnulf
6|Louis II|Louis II of Italy|louis 2
6|Guy of Spoleto|Guy III of Spoleto|guy spoleto;guy of italy
6|Lambert of Italy||lambert
6|Louis the Blind||louis blind;louis 3;louis of provence
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
3|Constantine VII Porphyrogennetos||constantine 7;porphyrogenitus;constantine porphyrogenitus;constantine porphyrogennetos
3|Arcadius
3|Theodosius II||theodosius 2;theodosius the younger
4|Justin II||justin 2
4|Zeno|Zeno (emperor)|zeno i;tarasicodissa
4|Anastasius I Dicorus||anastasius 1;anastasius
4|Maurice|Maurice (emperor)
4|Phocas
4|Justinian II||justinian 2;rhinotmetos
4|John II Komnenos||john 2;john komnenos
4|Andronikos I Komnenos||andronikos 1;andronicus 1;andronikos komnenos;misophaes
4|Isaac II Angelos||isaac 2;isaac angelos;isaakios ii angelos
4|Manuel II Palaiologos||manuel 2
4|John VIII Palaiologos||john 8
4|Zoe Porphyrogenita||zoe;zoe of byzantium
4|Constantine V||constantine 5;copronymus
4|Romanos I Lekapenos||romanos 1;romanus lecapenus
4|Theophilos|Theophilos (emperor)|theophilus
4|Michael III||michael 3;michael drunkard
4|Alexios II Komnenos
4|Constantine IV
4|Leo II|Leo II (emperor)
5|Constans II||constans 2
5|Leo I|Leo I (emperor)|leo 1;leo thracian
5|Marcian||marcianus
5|Tiberius II Constantine||tiberius 2;tiberius constantine
5|Leo V the Armenian||leo 5;leo the armenian
5|Michael II||michael 2;michael the amorian
5|Romanos II||romanos 2
5|Constantine VIII||constantine 8
5|Romanos III Argyros||romanos 3;romanos argyros
5|Michael IV the Paphlagonian||michael 4
5|Michael V Kalaphates||michael 5;michael kalaphates
5|Constantine IX Monomachos||constantine 9;monomachus;constantine monomachos
5|Theodora Porphyrogenita||theodora porphyrogenita;theodora (11th century)
5|Isaac I Komnenos||isaac 1
5|Constantine X Doukas||constantine 10;constantine ducas;constantine doukas
5|Michael VII Doukas||michael 7
5|Alexios III Angelos||alexios 3
5|Alexios V Doukas||alexios 5;mourtzouphlos;alexios doukas;alexius v ducas
5|Andronikos II Palaiologos||andronikos 2;andronicus ii palaeologus
5|John V Palaiologos||john 5
5|John VI Kantakouzenos||john 6;cantacuzenus;john kantakouzenos;john vi cantacuzenus;john cantacuzenus;john vi cantacuzene
5|Alexander|Alexander (Byzantine emperor)
6|Leo IV the Khazar||leo 4
6|Constantine VI||constantine 6
6|Nikephoros I||nikephoros 1
6|Staurakios
6|Michael I Rangabe||michael 1;michael rhangabe
6|Leontios
6|Tiberius III||tiberius 3
6|Philippikos||philippicus;bardanes
6|Anastasios II||anastasius 2
6|Theodosios III||theodosius 3
6|Artabasdos
6|Constantine III|Constantine III (Byzantine emperor)|constantine 3
6|Heraklonas
6|Nikephoros III||nikephoros 3;nikephoros botaneiates
6|Alexios IV Angelos||alexios 4
6|Andronikos III Palaiologos||andronikos 3;andronicus iii palaeologus
6|John VII Palaiologos||john 7
6|Basiliscus
6|Andronikos IV Palaiologos
6|Michael VI Bringas||michael vi;michael vi stratiotikos
6|John III Doukas Vatatzes||john iii vatatzes;john iii ducas vatatzes;john vatatzes;john iii of nicaea
6|Theodore I Laskaris||theodore i komnenos laskaris
6|John IV Doukas Laskaris||john iv laskaris
6|Theodore II Laskaris||theodore ii doukas laskaris
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
 'isaac':'Which Isaac? Add a number.',
 'justin':'Which Justin? Add a number.',
 'tiberius':'Which Tiberius? Add a number.',
 'theodore':'Which Theodore? Add a number.'
}},

{id:'chinaemp', cat:'Asia', q:'Name a Chinese emperor or empress', hint:'Any dynasty, 221 BC&ndash;1912',
list:`
1|Qin Shi Huang||shi huangdi;first emperor;qin shi huangdi;ying zheng;zheng of qin;shi huang
1|Puyi||pu yi;last emperor;xuantong;henry pu yi;aisin-gioro puyi
1|Kangxi Emperor||kangxi
1|Wu Zetian||empress wu;wu zhao;wu meiniang
2|Qianlong Emperor||qianlong;hongli
2|Emperor Taizong of Tang||taizong;tang taizong;li shimin
2|Emperor Wu of Han||wu han;han wudi;wudi;liu che
2|Kublai Khan||kublai;khubilai;shizu yuan;setsen khan
2|Hongwu Emperor||hongwu;zhu yuanzhang
2|Yongle Emperor||yongle;zhu di
2|Empress Dowager Cixi||cixi;tzu hsi;empress xiaoqinxian
3|Emperor Gaozu of Han||gaozu;liu bang;emperor gao of han;kao tsu of han china
3|Emperor Xuanzong of Tang||xuanzong;tang xuanzong;minghuang;li longji;tang ming huang
3|Yongzheng Emperor||yongzheng;yinzhen
3|Emperor Gaozu of Tang||li yuan;gaozu tang
3|Emperor Taizu of Song||taizu song;zhao kuangyin
3|Emperor Huizong of Song||huizong
3|Emperor Wen of Sui||wen sui;yang jian;wendi
3|Emperor Yang of Sui||yang sui;yang guang;yangdi;emperor yang
3|Guangxu Emperor||guangxu;zaitian
3|Wanli Emperor||wanli;zhu yijun;ming shenzong
4|Daoguang Emperor||daoguang
4|Xianfeng Emperor||xianfeng
4|Tongzhi Emperor||tongzhi;zaichun
4|Jiaqing Emperor||jiaqing;yongyan
4|Shunzhi Emperor||shunzhi;fulin
4|Hong Taiji||huang taiji
4|Chongzhen Emperor||chongzhen;zhu youjian
4|Jiajing Emperor||jiajing;zhu houcong;ming shizong
4|Zhengde Emperor||zhengde;zhu houzhao
4|Xuande Emperor||xuande;zhu zhanji
4|Jianwen Emperor||jianwen;zhu yunwen
4|Emperor Guangwu of Han||guangwu;liu xiu
4|Emperor Wen of Han||wen han;liu heng
4|Emperor Jing of Han||jing han
4|Emperor Gaozong of Tang||gaozong
4|Wang Mang
4|Qin Er Shi||er shi;huhai
4|Emperor Xiaowen of Northern Wei||xiaowen
4|Cao Pi||emperor wen wei
4|Emperor Wu of Jin||sima yan
5|Empress Lü||lu zhi;empress lu;empress dowager lü;empress dowager lü zhi
5|Emperor Ling of Han||ling han
5|Emperor Xian of Han||xian han;liu xie;han xiandi
5|Emperor Ai of Han
5|Emperor Zhezong of Song||zhezong
5|Emperor Shenzong of Song||shenzong
5|Emperor Gaozong of Song||gaozong song;zhao gou
5|Emperor Renzong of Song||renzong
5|Zhengtong Emperor||zhengtong;yingzong;zhu qizhen
5|Hongzhi Emperor||hongzhi;zhu youcheng
5|Tianqi Emperor||tianqi;zhu youjiao
5|Emperor Wu of Liang||wu liang;xiao yan
5|Möngke Khan||mongke
5|Temür Khan||temur;chengzong;öljeyitü khan
6|Emperor Ming of Han||ming han
6|Emperor Zhang of Han||zhang han;emperor zhang
6|Emperor Xuan of Han||xuan han;liu bingyi
6|Emperor Dezong of Tang||dezong
6|Emperor Xianzong of Tang||xianzong
6|Emperor Ruizong of Tang||ruizong
6|Emperor Zhongzong of Tang||zhongzong
6|Emperor Taizong of Song||taizong song;zhao kuangyi;zhao guangyi
6|Emperor Zhenzong of Song||zhenzong
6|Toghon Temür||toghon temur;huizong yuan;zhizheng;ukhaantu khan
6|Hongxi Emperor||hongxi;zhu gaochi
6|Chenghua Emperor||chenghua;zhu jianshen
6|Longqing Emperor||longqing;zhu zaiji;new governance of longqing
6|Taichang Emperor||taichang;zhu changluo
6|Emperor Xiaozong of Song||xiaozong
`,
nope:{
 'confucius|laozi|sun tzu':'A great thinker &mdash; never an emperor.',
 'mao|mao zedong|chiang kai shek|sun yat sen':'20th-century leader &mdash; the emperors were gone by 1912.',
 'genghis khan|genghis':'Founded the Mongol Empire &mdash; but never ruled China as emperor. His grandson Kublai did!'
}},

{id:'shogun', cat:'Asia', q:'Name a shogun of Japan', hint:'Kamakura, Ashikaga and Tokugawa shoguns',
list:`
1|Tokugawa Ieyasu||ieyasu;tokugawa;matsudaira motoyasu;tōshō daigongen
2|Minamoto no Yoritomo||yoritomo;minamoto yoritomo
2|Tokugawa Yoshinobu||yoshinobu;keiki;hitotsubashi keiki
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
4|Tokugawa Iemochi||iemochi;tokugawa yoshitomi
4|Tokugawa Ietsuna||ietsuna
4|Sakanoue no Tamuramaro||tamuramaro
5|Tokugawa Ienobu||ienobu;tokugawa tsunatoyo
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
2|Jimmu|*|jimmu tenno;wakamikenu no mikoto
2|Taishō|*|yoshihito;taisho
2|Go-Yōzei|*
3|Kanmu|*|kammu
3|Go-Daigo|*|go daigo;godaigo
3|Shōmu|*|shomu
3|Tenmu|*|temmu
3|Tenji|*|tenchi
3|Empress Suiko||suiko;nukatabe
3|Kōmei|*|komei;osahito
3|Go-Momozono|*
3|Ōgimachi|*
3|Sujin|*
3|Higashiyama|*
4|Go-Toba|*|go toba
4|Empress Jitō||jito;uno-no-sarara
4|Empress Kōken||koken;shotoku
4|Saga|*|saga;saga tennō
4|Daigo|*|daigo
4|Shirakawa|*|shirakawa
4|Go-Shirakawa|*|go shirakawa
4|Antoku|*|antoku
4|Ōjin|*|ojin
4|Nintoku|*|nintoku
4|Kinmei|*|kinmei
4|Empress Genmei||genmei
4|Momozono|*
4|Sakuramachi|*
4|Seiwa|*
4|Nakamikado|*
4|Chūai|*
4|Go-Nara|*
4|Annei|*
4|Suinin|*
4|Go-Sai|*
4|Kōan|*
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
5|Itoku|*
5|Kōshō|*
5|Kōrei|*
5|Kōgen|*
5|Go-Komatsu|*
5|Go-Kashiwabara|*
5|Go-Hanazono|*
5|Kaika|*
5|Go-Tsuchimikado|*
5|Ankō|*
5|Go-Uda|*
5|Kenzō|*
5|Go-Kameyama|*
5|Richū|*
5|Seimu|*
5|Monmu|*
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
6|Kōbun|Prince Ōtomo|otomo;prince otomo
6|Tsuchimikado|*
6|Seinei|*
6|Ingyō|*
6|Konoe|*
6|Go-Fukakusa|*
6|Senka|*
6|Go-Murakami|*
6|Buretsu|*
6|Sushun|*
6|Shōkō|*
6|Ninmyō|*
6|Go-Saga|*
6|Hanzei|*
6|Yōzei|*
6|Ankan|*
6|Nijō|*
6|Ninken|*
6|Fushimi|*
6|Kameyama|*
6|Go-Fushimi|*
6|Juntoku|*
6|Hanazono|*
6|Horikawa|*
6|Kōkō|*
6|Go-Horikawa|*
6|Chōkei|*
6|Go-Ichijō|*|atsuhira
6|Montoku|*
6|Go-Suzaku|*
6|Shijō|*
6|Rokujō|*
6|Chūkyō|*
6|Junna|*
6|Go-Nijō|*
6|Go-Reizei|*
6|Sanjō|*
6|En'yū|*
6|Reizei|*
6|Suzaku|*
6|Kōgon|*
6|Go-Kōgon|*
6|Sukō|*
6|Kōmyō|*
6|Go-En'yū|*
`,
nope:{
 'tokugawa ieyasu|ieyasu|yoritomo':'A shogun &mdash; the real power, but not the emperor.',
 'oda nobunaga|nobunaga|hideyoshi':'A warlord who unified Japan &mdash; not the emperor.'
}},

{id:'ukpm', cat:'Modern History', q:'Name a British prime minister', hint:'From Walpole (1721) to today',
list:`
1|Winston Churchill||churchill;churchillian
1|Margaret Thatcher||thatcher
1|Tony Blair||blair
1|Boris Johnson||johnson;boris
2|Theresa May||may;theresa mary may
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
3|Duke of Wellington|Arthur Wellesley, 1st Duke of Wellington|wellington;arthur wellesley;1st duke of wellington;marquis of torres vedras
4|David Lloyd George||lloyd george
4|Edward Heath||heath;ted heath
4|Anthony Eden||eden
4|Harold Macmillan||macmillan
4|James Callaghan||callaghan;jim callaghan
4|Stanley Baldwin||baldwin
4|Robert Peel||peel
4|Lord Palmerston|Henry John Temple, 3rd Viscount Palmerston|palmerston
4|William Pitt the Elder||pitt elder;chatham;william pitt, earl of chatham
4|Lord North|Frederick North, Lord North|north
4|Ramsay MacDonald||macdonald;ramsay macdonald
4|H. H. Asquith||asquith;herbert asquith
4|Lord Salisbury|Robert Gascoyne-Cecil, 3rd Marquess of Salisbury|salisbury;3rd marquess of salisbury
5|Alec Douglas-Home||douglas home
5|Arthur Balfour||balfour
5|Henry Campbell-Bannerman||campbell bannerman
5|Bonar Law||law;andrew bonar law
5|Lord Melbourne|William Lamb, 2nd Viscount Melbourne|melbourne
5|Lord Liverpool|Robert Jenkinson, 2nd Earl of Liverpool|liverpool;lord hawkesbury
5|Earl Grey|Charles Grey, 2nd Earl Grey|grey;2nd earl grey
5|George Canning||canning
5|Spencer Perceval||perceval
5|Lord John Russell|John Russell, 1st Earl Russell|russell
5|Lord Rosebery|Archibald Primrose, 5th Earl of Rosebery|rosebery;5th earl of rosebery;archibald philip primrose
5|Earl of Derby|Edward Smith-Stanley, 14th Earl of Derby|derby;14th earl of derby
5|Earl of Aberdeen|George Hamilton-Gordon, 4th Earl of Aberdeen|aberdeen
5|Earl of Bute|John Stuart, 3rd Earl of Bute|bute;3rd earl of bute
6|Henry Pelham||pelham
6|Duke of Newcastle|Thomas Pelham-Holles, 1st Duke of Newcastle|newcastle;thomas pelham-holles
6|Earl of Wilmington|Spencer Compton, 1st Earl of Wilmington|wilmington
6|Duke of Devonshire|William Cavendish, 4th Duke of Devonshire|devonshire;4th duke of devonshire
6|George Grenville||george grenville
6|Marquess of Rockingham|Charles Watson-Wentworth, 2nd Marquess of Rockingham|rockingham;charles watson-wentworth
6|Duke of Grafton|Augustus FitzRoy, 3rd Duke of Grafton|grafton;augustus henry fitzroy
6|Earl of Shelburne|William Petty, 2nd Earl of Shelburne|shelburne
6|Duke of Portland|William Cavendish-Bentinck, 3rd Duke of Portland|portland;3rd duke of portland
6|Henry Addington||addington;sidmouth
6|Lord Grenville|William Grenville, 1st Baron Grenville|william grenville
6|Viscount Goderich|F. J. Robinson, 1st Viscount Goderich|goderich;frederick john robinson;f. j. robinson
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
1|Joe Biden||biden;joseph robinette biden jr.;joseph r. biden, jr.
1|Mike Pence||pence
1|JD Vance||vance;j d vance;james donald bowman
2|Dick Cheney||cheney
2|Al Gore||gore;albert gore jr.;albert gore;albert arnold gore jr.;ai gore
2|John Adams||adams
2|Thomas Jefferson||jefferson
2|Richard Nixon||nixon
3|Dan Quayle||quayle
3|George H. W. Bush||bush;george bush;george herbert walker bush;ghwb;hw bush
3|Walter Mondale||mondale
3|Spiro Agnew||agnew
3|Nelson Rockefeller||rockefeller
3|Gerald Ford||ford;gerald rudolph ford;jerry ford
3|Lyndon B. Johnson||lbj;johnson
3|Aaron Burr||burr
3|Theodore Roosevelt||teddy roosevelt;roosevelt
3|Harry S. Truman||truman
4|Hubert Humphrey||humphrey
4|John C. Calhoun||calhoun
4|Calvin Coolidge||coolidge
4|Martin Van Buren||van buren;old kinderhook
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
5|William R. King||king;william rufus de vane king
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
1|Jacqueline Kennedy||jackie kennedy;jackie o;jacqueline kennedy onassis;jackie;jacqueline bouvier;jacqueline onassis;jacqueline bouvier kennedy;jacqueline bouvier kennedy onassis
1|Eleanor Roosevelt||eleanor;anna eleanor roosevelt
1|Melania Trump||melania
1|Hillary Clinton||hillary;hillary rodham clinton;senator hillary clinton
2|Martha Washington||martha
2|Nancy Reagan||nancy
2|Laura Bush||laura
2|Abigail Adams||abigail
2|Jill Biden||jill;jill jacobs;jill tracy jacobs;jill jacobs stevenson;jill jacobs biden
2|Mary Todd Lincoln||mary lincoln;mary todd
3|Barbara Bush||barbara
3|Rosalynn Carter||rosalynn
3|Dolley Madison||dolly madison;dolley
3|Betty Ford||betty;elizabeth bloomer
3|Lady Bird Johnson||lady bird;claudia alta "lady bird" taylor;ladybird johnson
3|Edith Wilson|Edith Wilson|edith bolling wilson;edith bolling;edith bolling galt;edith bolling galt wilson;edith galt wilson
3|Pat Nixon||pat;patricia nixon
3|Mamie Eisenhower||mamie
4|Bess Truman||bess;bess wallace
4|Grace Coolidge||grace
4|Lou Henry Hoover||lou hoover
4|Edith Roosevelt||edith kermit roosevelt;edith carow;edith kermit carow;edith carow roosevelt
4|Frances Cleveland||frances
4|Julia Grant||julia
4|Louisa Adams||louisa catherine adams;louisa catherine johnson adams;louisa catherine johnson
4|Rachel Jackson||rachel
4|Martha Jefferson||martha wayles jefferson;martha wayles;martha wayles skelton jefferson;martha wayles skelton;martha skelton
4|Ellen Wilson||ellen axson wilson
4|Florence Harding||florence
4|Helen Taft||nellie taft;helen herron taft
4|Ida McKinley||ida;ida saxton
5|Elizabeth Monroe||elizabeth kortright monroe;elizabeth kortright
5|Sarah Polk||sarah
5|Lucy Hayes||lucy;lemonade lucy;lucy ware webb
5|Lucretia Garfield||lucretia
5|Caroline Harrison||caroline
5|Mary Harrison McKee
5|Margaret Taylor||margaret
5|Abigail Fillmore||abigail powers
5|Jane Pierce||jane;jane appleton pierce
5|Harriet Lane||harriet
5|Eliza Johnson||eliza
5|Letitia Tyler||letitia
5|Julia Tyler||julia gardiner tyler;julia gardiner
5|Anna Harrison||anna;anna tuthill symmes
5|Hannah Van Buren||angelica van buren;hannah hoes
`,
nope:{
 'kamala harris|harris':'Vice President &mdash; not a First Lady.',
 'betsy ross':'Legendary flag-maker &mdash; never First Lady.'
}},

{id:'pope', cat:'Medieval', q:'Name a pope', hint:'Any pope, from Saint Peter to today', wf:'Pope {}',
list:`
1|Pope Francis||francis;jorge mario bergoglio;jorge bergoglio;cardinal jorge mario bergoglio;pope franciscus;papa francisco
1|John Paul II|*|john paul 2;karol wojtyla;wojtyla;saint john paul ii;karol józef wojtyła;st. john paul ii;jan paweł ii;papa juan pablo ii;jpii;cardinal wojtyła
1|Leo XIV|*|leo 14;robert prevost;prevost;robert francis prevost;pope leon xiv
1|Benedict XVI|*|benedict 16;ratzinger
2|Saint Peter||peter;simon peter;st peter;simon bar jonah;kephas;shamoon al-safa
2|John XXIII|*|john 23;roncalli;saint john xxiii
2|Gregory the Great|Pope Gregory I|gregory 1;gregory great;st gregory;saint gregory;saint gregory the great;st. gregory the great;gregory dialogus;gregorian mass
2|Alexander VI|*|alexander 6;rodrigo borgia;borgia;roderic de borja;rodrigo de borja
2|Urban II|*|urban 2
2|Paul VI|*|paul 6;montini;pope saint paul vi;paulus vi
2|Pius XII|*|pius 12;pacelli
2|Leo X|*|leo 10;giovanni di lorenzo de' medici
2|Julius II|*|julius 2;warrior pope;giuliano della rovere
3|Innocent III|*|innocent 3
3|Gregory VII|*|gregory 7;hildebrand
3|Leo the Great|Pope Leo I|leo 1;leo great;st leo the great;saint leo the great;leo i of rome
3|Leo III|*|leo 3
3|Gregory XIII|*|gregory 13
3|John Paul I|*|john paul 1;luciani;albino luciani
3|Pius IX|*|pius 9;pio nono;giovanni mastai-ferretti
3|Leo XIII|*|leo 13;gioacchino pecci
3|Boniface VIII|*|boniface 8
3|Clement VII|*|clement 7;giulio di giuliano de' medici;cardinal giulio de' medici
3|Sixtus IV|*|sixtus 4;francesco della rovere;doctor acutissimus
3|Pius X|*|pius 10;giuseppe sarto;saint pius x;pope st. pius x
3|Pius XI|*|pius 11;achille ratti
3|Benedict IX|*
3|Benedict XII|*|jacques fournier
3|Gregory III|*|saint gregory iii
3|Benedict XIII|*
4|Clement V|*|clement 5
4|Pius II|*|pius 2;piccolomini
4|Nicholas V|*|nicholas 5;tommaso parentucelli
4|Paul III|*|paul 3;alessandro farnèse
4|Pius V|*|pius 5;michele ghislieri
4|Sixtus V|*|sixtus 5;cardinal montalto
4|Celestine V|*|celestine 5
4|Benedict XV|*|benedict 15;giacomo della chiesa
4|Innocent X|*|innocent 10;giovanni battista pamphilj;giovanni battista pamphili
4|Urban VIII|*|urban 8;maffeo barberini
4|Clement XIV|*|clement 14
4|Adrian IV|*|adrian 4;hadrian 4;nicholas breakspear
4|Linus|Pope Linus|linus
4|Clement I|*|clement 1;clement rome;clemens romanus
4|Sylvester I|*|sylvester 1;st. sylvester
4|Stephen II|*|stephen 2
4|Formosus|Pope Formosus|formosus
4|John XXII|*
4|Paul II|*|pietro barbo
4|Alexander III|*
4|Alexander II|*|anselm of baggio;anselmo da baggio;anselmo de baggio of lucca
5|Calixtus III|*|callixtus 3;calixtus 3
5|Innocent VIII|*|innocent 8
5|Paul IV|*|paul 4;gian pietro carafa;giovanni pietro carafa
5|Gregory IX|*|gregory 9;ugolino di conti
5|Innocent IV|*|innocent 4;sinibaldo fieschi
5|Gregory XI|*|gregory 11
5|Martin V|*|martin 5
5|Eugene IV|*|eugene 4;eugenius iv;gabriel condulmier
5|Benedict XIV|*|benedict 14;prospero lambertini
5|Pius VII|*|pius 7;barnaba chiaramonti
5|Gregory XVI|*|gregory 16;bartolomeo cappellari
5|Stephen VI|*|stephen 6;cadaver synod
5|John XII|*|john 12
5|Sylvester II|*|sylvester 2;gerbert
5|Leo IX|*|leo 9;bruno of toul
5|Urban VI|*|urban 6
5|Hadrian VI|*|adrian 6;hadrian 6;adrian of utrecht
5|Damasus I|*|damasus 1;st. damasus
5|Pius VI|*
5|Gelasius I|*
5|Miltiades|*|melchiades
5|Paul V|*
5|Leo VIII|*
5|Clement VI|*
5|Anicetus|*
5|Sixtus II|*
5|Hilarius|*
6|Anacletus|Pope Anacletus|anacletus;cletus
6|Evaristus|Pope Evaristus|evaristus
6|Alexander I|*|alexander 1
6|Sixtus I|*|sixtus 1
6|Telesphorus|Pope Telesphorus|telesphorus
6|Hyginus|Pope Hyginus|hyginus
6|Pius I|*|pius 1
6|Victor I|*|victor 1
6|Zephyrinus|Pope Zephyrinus|zephyrinus
6|Callixtus I|*|callixtus 1;saint callistus;saint callixtus;st. callistus;st. calixtus
6|Urban I|*|urban 1
6|Pontian|Pope Pontian|pontian;pope pontianus
6|Fabian|Pope Fabian|fabian
6|Cornelius|Pope Cornelius|cornelius
6|Marcellinus|Pope Marcellinus|marcellinus
6|Liberius|Pope Liberius|liberius
6|Hormisdas|Pope Hormisdas|hormisdas
6|Honorius I|*|honorius 1
6|Zachary|Pope Zachary|zachary;zacharias
6|Nicholas I|*|nicholas 1
6|Innocent VII|*
6|Leo XII|*|annibale della genga
6|John VIII|*
6|Nicholas III|*
6|Anterus|*
6|Eleutherius|*
6|Martin I|*|martin the confessor
6|Soter|*
6|Julius I|*
6|Clement VIII|*
6|Leo XI|*|alessandro ottaviano de' medici
6|Mark|*
6|Sergius III|*
6|Clement XI|*|giovanni francesco albani
6|Pius IV|*|giovanni angelo medici
6|Alexander VII|*|fabio chigi
6|Julius III|*
6|Gregory XII|*|angelo correr
6|Nicholas II|*
6|Alexander IV|*
6|Stephen I|*
6|Nicholas IV|*
6|Leo IV|*
6|Caius|*
6|Pius III|*
6|Eusebius|*
6|Innocent XI|*|benedetto odescalchi
6|Stephen IX|*|frederick of lorraine
6|Gregory V|*
6|Silverius|*
6|Paschal II|*
6|Dionysius|*
6|Gregory X|*|teobaldo visconti
6|Benedict V|*
6|Urban VII|*
6|Lucius I|*
6|Vigilius|*
6|Agatho|*
6|Anastasius II|*
6|Zosimus|*
6|John I|*
6|Lando|*
6|Constantine|*
6|Boniface VI|*
6|Honorius III|*
6|John XI|*
6|Felix I|*
6|Victor II|*
6|Innocent I|*
6|Symmachus|*
6|John XIII|*
6|Paul I|*
6|John II|*
6|Boniface IV|*
6|Innocent II|*
6|Gregory II|*
6|Adrian I|*|hadrian i
6|Sergius I|*
6|Anastasius I|*
6|John IV|*
6|Benedict III|*
6|Clement XII|*|lorenzo corsini
6|Victor III|*
6|Leo V|*
6|Stephen III|*
6|John XXI|*|pietro ispano
6|Eutychian|*
6|Simplicius|*
6|Leo II|*
6|Conon|*
6|Felix IV|*
6|John VI|*
6|Adrian II|*|pope hadrian ii
6|Agapetus I|*
6|Theodore II|*
6|Gregory XV|*
6|Celestine I|*
6|Innocent XIII|*
6|Sisinnius|*
6|Adeodatus I|*|pope deusdedit
6|Theodore I|*
6|Clement XIII|*
6|Stephen V|*
6|Pius VIII|*|francesco castiglioni
6|John XIV|*
6|Felix III|*
6|Sixtus III|*
6|Pelagius II|*
6|Romanus|*
6|Urban V|*|guillaume grimoard
6|Celestine III|*
6|Gregory IV|*
6|Valentine|*
6|John VII|*
6|Donus|*
6|Boniface II|*
6|Benedict VIII|*
6|Eugene III|*|pope eugenius iii
6|Benedict XI|*|niccolo boccasini
6|Vitalian|*
6|John IX|*
6|Benedict I|*
6|Boniface III|*
6|Boniface IX|*
6|Marcellus I|*
6|Sabinian|*
6|Leo VI|*
6|Gregory VI|*
6|Innocent XII|*
6|Benedict IV|*
6|Sergius II|*
6|John III|*
6|John V|*
6|John X|*
6|Stephen IV|*
6|Callixtus II|*|guy of vienne;gui de bourgogne
6|Marcellus II|*|marcello cervini
6|Benedict II|*
6|Severinus|*
6|Alexander VIII|*|pietro ottoboni
6|Clement II|*
6|Paschal I|*
6|Clement X|*
6|Clement IV|*
6|Urban IV|*|james pantaleon
6|Clement IX|*|giulio rospigliosi
6|Pelagius I|*
6|Siricius|*
6|Innocent VI|*
6|Urban III|*
6|John XIX|*
6|Lucius III|*|ubaldo allucingoli
6|Gregory VIII|*|alberto di morra
6|Eugene I|*
6|Innocent V|*
6|Martin IV|*
6|Boniface V|*
6|Eugene II|*|pope eugenius ii
6|Boniface I|*
6|Adrian V|*|ottobuono de' fieschi
6|Gregory XIV|*
6|John XVII|*
6|Honorius II|*
6|Clement III|*
6|Honorius IV|*
6|Adrian III|*
6|Anastasius IV|*
6|Stephen VIII|*
6|Innocent IX|*
6|Damasus II|*
6|Celestine IV|*
6|Lucius II|*
6|Gelasius II|*
6|Sylvester III|*
6|Celestine II|*
6|Adeodatus II|*
6|Benedict VI|*
6|John XV|*
6|Leo VII|*
6|Benedict VII|*
6|Marinus I|*|pope martin ii
6|Sergius IV|*
6|John XVIII|*
6|Agapetus II|*
6|Marinus II|*|pope martin iii
6|Anastasius III|*
6|Stephen VII|*
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
 'john paul':'First or second? Add a number.',
 'julius':'Which Julius? Add a number.',
 'boniface':'Which Boniface? Add a number.',
 'sixtus':'Which Sixtus? Add a number.',
 'nicholas':'Which Nicholas? Add a number.',
 'celestine':'Which Celestine? Add a number.',
 'adrian':'Which Adrian? Add a number.',
 'sylvester':'Which Sylvester? Add a number.',
 'stephen':'Which Stephen? Add a number.',
 'martin':'Which Martin? Add a number.',
 'eugene':'Which Eugene? Add a number.',
 'damasus':'Which Damasus? Add a number.',
 'gelasius':'Which Gelasius? Add a number.',
 'victor':'Which Victor? Add a number.',
 'callixtus':'Which Callixtus? Add a number.',
 'honorius':'Which Honorius? Add a number.',
 'sergius':'Which Sergius? Add a number.',
 'paschal':'Which Paschal? Add a number.',
 'lucius':'Which Lucius? Add a number.',
 'anastasius':'Which Anastasius? Add a number.',
 'felix':'Which Felix? Add a number.',
 'agapetus':'Which Agapetus? Add a number.',
 'theodore':'Which Theodore? Add a number.',
 'adeodatus':'Which Adeodatus? Add a number.',
 'pelagius':'Which Pelagius? Add a number.',
 'marcellus':'Which Marcellus? Add a number.',
 'marinus':'Which Marinus? Add a number.',
 'hadrian':'Which Hadrian? Add a number.',
 'calixtus':'Which Calixtus? Add a number.'
}},

{id:'norway', cat:'Rulers', q:'Name a king or queen of Norway', hint:'From Harald Fairhair to Haakon VIII', wf:'{} of Norway',
list:`
1|Harald V|*|harald 5
1|Haakon VIII|*|haakon 8;hakon 8;crown prince haakon
1|Olav V|*|olav 5;olaf 5;olav v of norway
1|Haakon VII|*|haakon 7;hakon 7;carl of denmark
2|Harald Fairhair||harald harfagre;harald 1;fairhair;harald hårfagre;harald finehair
2|Olaf II|*|saint olaf;olav haraldsson;olaf 2;olav 2;olaf haraldsson;olav ii of norway;st olaf;st. olav;st olave
2|Harald Hardrada||harald 3;hardrada;harald hardrade;haraldr sigurðarson;harold iii of norway
2|Olaf Tryggvason||olaf 1;olav tryggvason;olaf i of norway;olav i of norway;olaf trygvesson
3|Haakon the Good||haakon 1;hakon good;hákon aðalsteinsfóstri
3|Eric Bloodaxe||erik bloodaxe;eirik blodoks;eric i of norway;eirik i of norway;eiríkr bloodaxe
3|Sverre|Sverre of Norway|sverre sigurdsson
3|Haakon IV|*|haakon 4;haakon old;håkon håkonsson;haakon haakonsson;haakon haakonarson;håkon iv of norway
3|Magnus the Lawmender|Magnus VI of Norway|magnus 6;magnus lagabote;lawmender
3|Sigurd the Crusader||sigurd 1;sigurd jorsalfar
3|Oscar II|Oscar II|oscar 2
3|Margaret I|Margaret I of Denmark|margaret;margrete;margrethe i
3|Christian IV|Christian IV of Denmark|christian 4
4|Magnus the Good|Magnus the Good|magnus 1
4|Magnus Barefoot||magnus 3;magnus berrfott;magnús óláfsson (died 1103)
4|Olaf Kyrre|Olaf III of Norway|olaf 3;olav kyrre;olav iii of norway
4|Haakon V|*|haakon 5;haakon v magnusson;hakon v of norway
4|Eric II|*|eric 2;erik priesthater;eirik ii of norway
4|Magnus VII|Magnus Eriksson|magnus 7;magnus eriksson;magnus iv of sweden
4|Haakon VI|*|haakon 6;haakon i of sweden;håkan magnusson
4|Olaf IV|Olaf II of Denmark|olaf 4;olaf iv of norway;olav iv;olav iv of norway;oluf ii of denmark
4|Charles XIV John|Charles XIV John|karl johan;charles 14;bernadotte;charles xiv & iii john;jean baptiste jules bernadotte;carl xiv johan of sweden;marshal bernadotte
4|Christian Frederick|Christian VIII of Denmark|christian 8;christian frederik
4|Oscar I|Oscar I|oscar 1
4|Charles XV|Charles XV|charles 15;karl 15;charles xv & iv;charles iv of norway
4|Frederick III|Frederick III of Denmark|frederick 3;frederik iii of denmark
4|Christian III|Christian III of Denmark|christian 3
4|Christian II|Christian II of Denmark|christian 2
5|Harald Greycloak||harald 2;harald grafell
5|Magnus Erlingsson||magnus 5
5|Sigurd Mouth|Sigurd II of Norway|sigurd 2;sigurd munn
5|Inge the Hunchback|Inge I of Norway|inge 1;inge i of norway
5|Eystein I|*|eystein 1;øystein magnusson
5|Harald Gille||harald 4
5|Magnus the Blind|Magnus IV of Norway|magnus 4
5|Haakon the Broad-shouldered|Haakon II of Norway|haakon 2;haakon herdebrei
5|Inge Bårdsson|Inge II of Norway|inge 2;inge ii of norway
5|Guttorm|Guttorm of Norway|guttorm
5|Eric of Pomerania||erik pomerania;eric vii of denmark;eric iii of norway;eric xiii of sweden
5|Christopher of Bavaria||christopher
5|Christian I|Christian I of Denmark|christian 1
5|Hans|John, King of Denmark|john denmark
5|Frederick I|Frederick I of Denmark|frederick 1;frederik i of denmark
5|Christian V|Christian V of Denmark|christian 5
5|Frederick IV|Frederick IV of Denmark|frederick 4
5|Christian VI|Christian VI of Denmark|christian 6
5|Frederick V|Frederick V of Denmark|frederick 5;frederik v of denmark
5|Christian VII|Christian VII of Denmark|christian 7
5|Frederick VI|Frederick VI of Denmark|frederick 6;frederik vi of denmark
5|Charles XIII|Charles XIII|charles 13;karl 13;charles ii of norway
6|Sweyn Knutsson||sweyn;svein alfivason
6|Cnut the Great|Cnut|canute;knut;cnut of england
6|Haakon Magnusson||haakon toresfostre
6|Eystein II|*|eystein 2
6|Magnus II|*|magnus 2
6|Sigurd Slembe||slembe
6|Haakon III|*|haakon 3;haakon sverresson;håkon iii of norway
6|Karl Knutsson|Charles VIII of Sweden|karl knutsson;charles 8 sweden;karl viii;charles i of norway;charles ii of sweden;charles knutsson bonde
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
1|Juan Carlos I|*|juan carlos;juan carlos 1;infante juan carlos of spain
1|Felipe VI|*|felipe 6;philip 6;felipe de borbón
1|Isabella I|Isabella I of Castile|isabella;isabella 1;isabel catolica;isabel i of castile;isabel of castile;isabel i of spain;isabel de castilla
1|Philip II|*|philip 2;felipe 2;philip i of portugal;philip i of england
2|Ferdinand II|Ferdinand II of Aragon|ferdinand 2;ferdinand catholic;ferdinand v of spain;ferdinand v of castile;fernando ii of aragon
2|Charles I|Charles V, Holy Roman Emperor|charles 1;carlos 1;charles 5;carlos v, holy roman emperor;charles quint
2|Alfonso XIII|*|alfonso 13
2|Philip V|*|philip 5;felipe 5;philip of anjou;philip, duke of anjou
3|Charles III|*|charles 3;carlos 3;charles i, duke of parma;charles vii of naples;charles v of sicily
3|Charles II|*|charles 2;carlos 2;bewitched;charles v of naples
3|Ferdinand VII|*|ferdinand 7;fernando 7
3|Isabella II|*|isabella 2;isabel 2
3|Joanna of Castile||joanna;juana loca;joanna mad;juana of castile;juana i
3|Joseph Bonaparte||joseph 1;jose 1;pepe botella;joseph napoleon
4|Philip III|*|philip 3;felipe 3;philip ii of portugal;philip iii & ii
4|Philip IV|*|philip 4;felipe 4;philip iii of portugal;philip iv & iii
4|Charles IV|*|charles 4;carlos 4
4|Alfonso XII|*|alfonso 12
4|Ferdinand VI|*|ferdinand 6;fernando vi;fernando vi of spain
4|Amadeo I|*|amadeo;amadeus;amedeo, 1st duke of aosta
5|Louis I|*|louis 1;luis 1;louis of spain
5|Philip I|Philip I of Castile|philip 1;philip handsome;philip iv of burgundy
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
3|Khosrow I||khosrow 1;khosrau anushirvan;chosroes 1;anushirvan;khosrau i;khusrau i;khosrau i of persia
3|Shapur I||shapur 1;shapur
3|Ardashir I||ardashir 1;ardashir
3|Khosrow II||khosrow 2;chosroes 2;khosrau parviz;khosrau ii;khosrau ii of persia;khusrau ii
3|Artaxerxes II||artaxerxes 2
3|Artaxerxes III||artaxerxes 3
3|Shapur II||shapur 2;shapur great
3|Yazdegerd III||yazdegerd 3;yazdgerd 3
4|Bardiya||smerdis;gaumâta
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
4|Cyrus I||cyrus 1;cyrus i of anshan
4|Cambyses I||cambyses 1
5|Arses of Persia||artaxerxes 4;arses
5|Vologases I||vologases 1;vologases;vologases iii
5|Artabanus IV of Parthia||artabanus 4;artabanus v of parthia
5|Hormizd IV||hormizd 4
5|Yazdegerd I||yazdegerd 1
5|Bahram I||bahram 1
5|Narseh||narses persia
5|Shapur III||shapur 3
5|Boran||queen boran;borandukht;purandokht
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
6|Jamasp||djamasp
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
1|Alexander the Great||alexander;alexander 3 macedon;sikandar-e-azam;alejandro magno
1|Peter the Great||peter;peter 1;pyotr velikiy
1|Catherine the Great||catherine;catherine 2;sophie of anhalt-zerbst
2|Alfred the Great||alfred;st alfred the great
2|Frederick the Great||frederick 2 prussia;frederick;old fritz;friedrich ii of prussia;friedrich the great
2|Cyrus the Great||cyrus
2|Charlemagne||charles great;carolus magnus;charles i of france;karolus magnus;carlomagno
2|Constantine the Great||constantine;saint constantine the great;flavius valerius constantinus
3|Darius the Great||darius;darius 1
3|Otto the Great||otto 1;otto;otto i of germany
3|Ramesses the Great|Ramesses II|ramesses 2;ramses;ramesses
3|Akbar the Great|Akbar|akbar;jalaluddin mohammad akbar;jalaluddin muhammad akbar
3|Herod the Great||herod;herod i
3|Theodosius the Great|Theodosius I|theodosius;theodosius 1
3|Ivan the Great|Ivan III of Russia|ivan 3;ivan iii of moscow;ivan iii vasilyevich
3|Pompey the Great|Pompey|pompey;pompey magnus;gnaeus pompeius;pompeians;pompeius;gnaeus pompey magnus;cn. pompey magnus
3|Cnut the Great|Cnut|canute;knut;cnut;cnut of england
3|Suleiman the Magnificent||suleiman;suleyman i;süleyman i the magnificent
4|Kamehameha the Great|Kamehameha I|kamehameha;kamehameha 1
4|Casimir the Great|Casimir III the Great|casimir 3;casimir;kazimierz iii the great;kazimierz iii wielki;kazimierz wielki
4|Ashoka the Great|Ashoka|ashoka;asoka;piodasses
4|Shapur the Great|Shapur II|shapur 2
4|Antiochus the Great|Antiochus III the Great|antiochus 3;antiochus
4|Basil the Great||basil caesarea;saint basil;st. basil;saint basil the great;st. basil the great
4|Pope Gregory the Great|Pope Gregory I|gregory 1;gregory;st gregory;saint gregory;saint gregory the great;st. gregory the great
4|Pope Leo the Great|Pope Leo I|leo 1;st leo the great;saint leo the great;leo i of rome
4|Albert the Great|Albertus Magnus|albertus magnus;albertus;albert magnus;st. albert the great;st. albertus magnus
4|Sancho the Great|Sancho III of Pamplona|sancho 3;sancho
4|Louis the Great|Louis I of Hungary|louis 1 hungary;louis i of poland
4|Mithridates the Great|Mithridates VI Eupator|mithridates 6;mithridates;mithradates vi eupator;mithradates eupator;mithradates vi of pontus
4|Tigranes the Great||tigranes;tigran the great;tigran ii
5|Valdemar the Great|Valdemar I of Denmark|valdemar;valdemar 1
5|Rhodri the Great|Rhodri the Great|rhodri mawr;rhodri
5|Llywelyn the Great||llywelyn
5|Mstislav the Great||mstislav
5|Vladimir the Great||vladimir;volodymyr;vladimir 1;volodimer i of kiev;saint vladimir;st. vladimir
5|Stefan the Great|Stephen the Great|stephen great;stefan cel mare;stephen 3 moldavia;ștefan iii of moldavia
5|Rajaraja the Great|Rajaraja I|rajaraja;rajaraja chola;raja raja chola i
5|Simeon the Great|Simeon I of Bulgaria|simeon 1;simeon
5|Abbas the Great|Abbas the Great|abbas 1;shah abbas
5|Ferdinand the Great|Ferdinand I of León|ferdinand 1 leon;ferdinand i of castile
6|Hugh the Great||hugh great
6|Vytautas the Great||vytautas;witold
6|Peter III of Aragon|Peter III of Aragon|peter 3 aragon;peter iii the great;peter i of sicily
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
1|Athens||athenai;athenian;athína
1|Sparta||lacedaemon;lakedaimon;spartans;ancient spartans
2|Corinth||korinthos
2|Thebes|Thebes, Greece|thebai;thiva
2|Syracuse|Syracuse, Sicily|syrakousai;siracusa, sicily
3|Argos
3|Megara||megarian
3|Miletus||miletos;milet;millawanda;milawata
3|Rhodes||rhodos
3|Ephesus||ephesos;apasa;ephesian
3|Byzantium||byzantion;byzanz
3|Samos
3|Mycenae||mykenai;mykene
3|Delphi||archaeological site of delphi
4|Massalia||marseille;massilia;massaliotes
4|Delos||isle of delphos
4|Aegina
4|Chalcis||chalkis;chalkida;chalcidians
4|Eretria
4|Plataea||plataia
4|Elis||elis prefecture
4|Sicyon||sikyon
4|Mantinea
4|Tegea||nikli
4|Messene
4|Mytilene||lesbos
4|Chios
4|Naxos
4|Corcyra||kerkyra;corfu
4|Halicarnassus||halikarnassos
4|Smyrna||izmir
4|Croton||kroton;crotone
4|Sybaris||sybaritic
4|Taras||tarentum;taranto
4|Akragas||agrigento;agrigentum
4|Cyrene
4|Epidaurus||epidavros
4|Megalopolis
5|Thasos
5|Kos||cos;kos, greece
5|Knidos||cnidus
5|Phocaea||phokaia;phocaeans
5|Abdera
5|Olynthus||olynthos
5|Potidaea
5|Amphipolis||amfipoli
5|Locri||lokroi
5|Neapolis||naples
5|Cumae||kyme
5|Gela||gela, sicily;gela, italy
5|Selinunte||selinus
5|Naukratis||naucratis
5|Sinope
5|Trapezus||trebizond;trabzon
5|Chersonesus||chersonesos;chersonese peninsula
5|Olbia|Pontic Olbia|olbia
5|Colophon||kolophon
5|Priene
5|Troezen||troizen;troizina;damala
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
1|Britannia|Roman Britain|britain;roman britain;roman rule in britain;diocese of the britains;diocese of britain;diocese of britannia
1|Gaul||gallia;ancient gaul
1|Hispania||spain;roman iberia;hispano-roman
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
3|Mauretania|Mauretania Tingitana|mauritania;mauretania tingitana;tingitana;tingitania
3|Numidia|Numidia (Roman province)|numidia
3|Galatia|Galatia (Roman province)
3|Cappadocia|Cappadocia (Roman province)
3|Arabia Petraea||arabia;roman arabia;byzantine arabia
3|Mesopotamia|Mesopotamia (Roman province)
3|Armenia|Armenia (Roman province)
3|Bithynia et Pontus||bithynia;pontus
4|Gallia Narbonensis||narbonensis;provincia narbonensis;transalpine gaul;gallia transalpina;narbonese gaul
4|Gallia Lugdunensis||lugdunensis
4|Gallia Belgica||belgica;belgic gaul
4|Gallia Aquitania||aquitania;aquitaine;aquitanica ii;aquitanica i
4|Lusitania||portugal;hispania lusitania
4|Hispania Baetica||baetica
4|Hispania Tarraconensis||tarraconensis
4|Raetia||rhaetia
4|Noricum
4|Dalmatia|Dalmatia (Roman province)|dalmatia;illyricum
4|Moesia
4|Cilicia||cilician sea;cilicians;kilikia
4|Lycia et Pamphylia||lycia;pamphylia
4|Creta et Cyrenaica||cyrenaica;crete;creta;roman crete
4|Cyprus|Cyprus (Roman province)
4|Sardinia et Corsica||sardinia;corsica;roman sardinia
4|Epirus|Epirus (Roman province)|epirus vetus
4|Cisalpine Gaul||gallia cisalpina;gallia transpadana;transpadana;transpadane;transpadane gaul
4|Germania Inferior||germania secunda;germania ii
5|Assyria|Assyria (Roman province)
5|Alpes Maritimae
5|Alpes Cottiae
5|Alpes Poeninae||alpes graiae et vallis poeninae;vallis poenina;alpes graiae
5|Mauretania Caesariensis
5|Britannia Superior
5|Britannia Inferior
5|Pannonia Superior
5|Pannonia Inferior
5|Moesia Superior
5|Moesia Inferior
5|Dacia Aureliana
5|Osroene
5|Syria Palaestina||palaestina;palestine;provincia syria palaestina
5|Phoenice|Phoenice (Roman province)|phoenicia
5|Valeria|Valeria (province)
6|Tripolitania
6|Byzacena||byzacium;africa byzacena
6|Isauria||isaurians
6|Lycaonia
6|Pisidia||pisidians
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
1|Colosseum||roman coliseum
1|Pantheon|Pantheon, Rome|pantheon
1|Hadrian's Wall||hadrians wall;wall of hadrian
2|Roman Forum||forum;forum romanum;foro romano
2|Circus Maximus||circo massimo
2|Pont du Gard
2|Aqueduct of Segovia||segovia aqueduct
2|Arch of Constantine
2|Trajan's Column||trajans column;column of trajan
2|Baths of Caracalla
3|Appian Way||via appia
3|Castel Sant'Angelo||mausoleum hadrian;hadrians mausoleum;castel santangelo
3|Arch of Titus
3|Ara Pacis
3|Domus Aurea||golden house
3|Hadrian's Villa||villa adriana;hadrians villa
3|Diocletian's Palace||diocletians palace;split palace;palace of diocletian
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
4|Basilica of Maxentius||basilica constantine;basilica nova
4|Mausoleum of Augustus||tomb of augustus
4|Pyramid of Cestius||pyramid of gaius cestius;piramide cestia
4|Trajan's Market||trajans market;markets of trajan;market of trajan
4|Baths of Diocletian||diocletian's baths
4|Arch of Septimius Severus||arch of severus
4|Theatre of Pompey||pompey's theatre;pompey's theater;theatrum pompeium
4|Temple of Venus and Roma
4|Leptis Magna||lepcis;archaeological site of leptis magna
5|Aqueduct of Valens||valens aqueduct
5|Basilica Aemilia
5|Temple of Bel
5|Temple of Bacchus|Baalbek|baalbek
5|Hadrian's Gate||hadrians gate
5|Arch of Trajan|Arch of Trajan (Benevento)
5|Pons Fabricius||ponte dei quattro capi
5|Milvian Bridge
5|Alcántara Bridge||alcantara bridge
5|Theatre of Orange|Roman Theatre of Orange|roman theatre of orange;théâtre antique d'orange
5|Arles Amphitheatre
5|Pont Julien
5|Ludus Magnus
5|Temple of Castor and Pollux
5|Arch of Augustus|Arch of Augustus (Rimini)
5|Column of Marcus Aurelius
6|Villa Romana del Casale||villa del casale
6|Villa of the Papyri
6|Temple of Portunus||temple of fortuna virilis
6|Temple of Hercules Victor||sanctuary of hercules victor
6|Mamertine Prison||tullianum;carcere mamertino
6|Aqueduct of Tarragona|Les Ferreres Aqueduct|devils bridge tarragona;pont de les ferreres;aqüeducte de les ferreres;acueducto de les ferreres
6|Theatre of Mérida|Roman Theatre (Mérida)|merida theatre;roman theatre of mérida
6|Fishbourne Roman Palace||fishbourne
6|Vindolanda||chesterholm
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
1|Acropolis of Athens||acropolis;athenian acropolis
2|Temple of Zeus at Olympia||temple zeus olympia
2|Temple of Apollo at Delphi|Temple of Apollo (Delphi)|temple apollo delphi;oracle delphi;delphi;temple of delphi
2|Theatre of Epidaurus|Ancient Theatre of Epidaurus|epidaurus theatre;epidaurus ancient theatre
2|Temple of Poseidon at Sounion|Temple of Poseidon (Sounion)|sounion;temple poseidon
2|Erechtheion||erechtheum
3|Temple of Hephaestus||hephaisteion;theseion;theseum
3|Temple of Olympian Zeus|Temple of Olympian Zeus, Athens|olympieion;temple of jupiter olympius
3|Lion Gate
3|Treasury of Atreus||tomb agamemnon
3|Propylaea|Propylaea (Acropolis of Athens)|propylaia
3|Temple of Athena Nike||priestess of athena nike;nike apteros
3|Pergamon Altar||altar pergamon;altar zeus pergamon;great altar of pergamon
3|Odeon of Herodes Atticus
3|Theatre of Dionysus||temple of dionysus eleuthereus
3|Ancient Agora of Athens||agora;athenian agora;ancient agora
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
4|Panathenaic Stadium||kallimarmaro;panathinaiko stadium;panathinaiko
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
5|Kerameikos||ceramicus
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
1|Great Pyramid of Giza||great pyramid;pyramid khufu;pyramid cheops;khufu;giza pyramid
1|Pyramid of Djoser||step pyramid;djoser;pyramid of zoser
2|Pyramid of Khafre||khafre;chephren
2|Pyramid of Menkaure||menkaure;mycerinus
2|Pyramid of the Sun
2|El Castillo, Chichen Itza||el castillo;temple kukulcan;kukulcan;chichen itza
2|Bent Pyramid||bent
3|Red Pyramid||red
3|Pyramid of the Moon
3|Great Pyramid of Cholula||cholula;pyramid of cholula;tlachihualtepetl
3|Meidum Pyramid||meidum
3|Nubian pyramids||meroe;pyramids meroe
3|Pyramid of Cestius||cestius;piramide cestia
3|Temple of the Inscriptions||palenque pyramid
3|Pyramid of the Magician||uxmal;magician
3|Tikal Temple I|Tikal Temple I|temple great jaguar;tikal
4|Pyramid of Unas||unas
4|Pyramid of Teti||teti
4|Pyramid of Userkaf||userkaf
4|Pyramid of Sahure||sahure
4|Black Pyramid||amenemhat 3;dahshur black;pyramid of amenemhat iii
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
1|Egyptian hieroglyphs||hieroglyphs;hieroglyphics;ancient egyptian writing;medew netcher;writing in ancient egypt
1|Cuneiform||sumerian script
2|Latin alphabet||latin;roman alphabet
2|Greek alphabet||greek
2|Runes||runic;futhark;elder futhark;younger futhark;runic alphabet
2|Linear B
2|Linear A
2|Phoenician alphabet||phoenician;northwest semitic abjad;canaanite script;canaanite alphabet
3|Maya script||maya glyphs;mayan hieroglyphs;maya;mayan writing;maya writing
3|Indus script||indus;harappan script
3|Oracle bone script||oracle bones;oracle bone;oracle script;jiaguwen
3|Chinese characters||hanzi;chinese;han characters;han script;sinograph;han character
3|Hieratic
3|Demotic|Demotic (Egyptian)|demotic
3|Ogham||ogam
3|Aramaic alphabet||aramaic;imperial aramaic;imperial aramaic script
3|Hebrew alphabet||hebrew
3|Arabic script||arabic alphabet;arabic
3|Brahmi||brahmi script;middle-brahmi script
3|Sanskrit|Devanagari|devanagari;devnagari script
3|Cyrillic script||cyrillic;cyrilic alphabet
3|Hangul||hangeul;korean alphabet;chosongul
4|Glagolitic script||glagolitic;glagoljica
4|Kharosthi||kharoshthi script
4|Old Persian cuneiform||old persian;persian cuneiform
4|Ugaritic alphabet||ugaritic
4|Proto-Sinaitic script||proto sinaitic;wadi el-hol script
4|Etruscan alphabet||etruscan
4|Gothic alphabet||gothic
4|Coptic alphabet||coptic
4|Meroitic script||meroitic
4|Rongorongo
4|Old Turkic script||orkhon;old turkic;turkic runes
4|Armenian alphabet||armenian
4|Georgian scripts||georgian
4|Ge'ez script||geez;ethiopic;ge'ez alphabet;ge'ez writing system;ge'ez abugida;ethiopian script
4|Tifinagh||berber script
4|Kana|Kana|hiragana;katakana;man'yogana;japanese alphabet;japanese kana
4|Syriac alphabet||syriac;estrangela
5|Cypriot syllabary||cypriot
5|Luwian hieroglyphs||luwian;anatolian hieroglyphs
5|Proto-Elamite
5|Linear Elamite
5|Old Hungarian script||rovas;hungarian runes;old hungarian alphabet;rovásírás
5|Zapotec script||zapotec
5|Isthmian script||epi olmec
5|Quipu||khipu
5|Tamil-Brahmi||tamili;tamizhi
5|Grantha script||grantha
5|Pallava script||pallava
5|Kawi script||kawi;old kawi;kawi alphabet
5|Tangut script||tangut
5|Khitan scripts||khitan
5|Sogdian alphabet||sogdian
5|Avestan alphabet||avestan
5|Pahlavi scripts||pahlavi
5|Nabataean alphabet||nabataean
5|South Arabian alphabet||musnad;ancient south arabian;old south arabian script;south arabian script;old south arabian alphabet
6|Cretan hieroglyphs||minoan hieroglyphic signary
6|Byblos syllabary
6|Phaistos Disc||phaistos
6|Vinča symbols||vinca;danube script
6|Jurchen script||jurchen
6|Old Uyghur alphabet||uyghur;uighur script
6|Hatran alphabet||hatran;aramaic of hatra
6|Palmyrene alphabet||palmyrene
6|Paleo-Hebrew alphabet||paleo hebrew;proto-hebrew;ancient hebrew alphabet;ktav ivri
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
1|Rosetta Stone||decree of memphis
1|Dead Sea Scrolls||qumran scrolls;qumran documents;qumran caves scrolls
2|Ötzi||otzi;iceman;otzi iceman
2|Sutton Hoo
2|Lascaux|Lascaux|lascaux cave;lascaux paintings;cave paintings at lascaux
2|Pompeii
2|Lucy|Lucy (Australopithecus)|lucy australopithecus;dinkinesh
2|Machu Picchu
2|Troy||hisarlik, canakkale;hisarlik;hissarlik;ilion
2|Antikythera mechanism||anthitykera mechanism
3|Mask of Agamemnon||agamemnon mask
3|Oseberg ship||oseberg
3|Gokstad ship
3|Nebra sky disc||nebra disk
3|Venus of Willendorf||willendorf;woman of willendorf
3|Staffordshire Hoard
3|Royal Cemetery at Ur||royal tombs ur;ur
3|Knossos||cnossus
3|Göbekli Tepe||gobekli tepe
3|Bust of Nefertiti||nefertiti bust
3|Tollund Man||tollund
3|Chauvet Cave||chauvet;grotte chauvet
3|Altamira|Cave of Altamira|altamira cave
3|Richard III's remains|Exhumation and reburial of Richard III of England|richard 3 car park;richard 3 remains;exhumation of richard iii
3|Mary Rose
3|Vasa|Vasa (ship)|regalskeppet vasa;vasa ship
3|Library of Ashurbanipal||ashurbanipal library;royal library of ashurbanipal
4|Ishtar Gate
4|Cyrus Cylinder
4|Code of Hammurabi||hammurabi stele;laws of hammurabi;stela of hammurabi;hammurabi's code
4|Behistun Inscription||behistun;bisotun;bisutun inscription
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
4|Turkana Boy||knm wt 15000;nariokotome skeleton;nariokotome boy
4|Peking Man||homo erectus pekinensis;homo pekinensis
4|Homo floresiensis||hobbit;flores man;indonesian hobbit;homo florensis
4|Uluburun shipwreck||uluburun
4|L'Anse aux Meadows||lanse aux meadows
4|Çatalhöyük||catalhoyuk
4|Mohenjo-daro||mohenjo daro;archaeological ruins at moenjodaro
4|Venus of Hohle Fels||hohle fels;venus of schelklingen
4|Mold cape
4|Battersea Shield
4|Snettisham Hoard||snettisham torc
4|Vix Grave|Vix Grave|vix krater;cratère de vix
4|Riace bronzes||riace warriors
4|Uffington White Horse||uffington horse
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
5|Trundholm sun chariot||sun chariot;solvognen
5|Egtved Girl
5|Grauballe Man
5|Haraldskær Woman
5|Ram in a Thicket
5|Warka Vase||uruk vase
5|Antikythera youth
5|Derveni papyrus
5|Pylos Combat Agate
5|Griffin Warrior Tomb
5|Amesbury Archer
5|Ardi|Ardi|ardipithecus
5|Kennewick Man
5|Naia|Naia (skeleton)|hoya negro skeleton
6|Hinton St Mary Mosaic
6|Ringlemere Cup||ringlemere gold cup
6|Ballana tombs
6|Sacred Well of Chichen Itza|Sacred Cenote|sacred cenote;cenote sagrado
6|Lady of Elche||lady of elx
6|Bodies of Herculaneum|Herculaneum|herculaneum skeletons;herculanum
6|Golden Man|Issyk kurgan|issyk kurgan;issyk golden man
6|Pazyryk carpet||pazyryk
6|Siberian Ice Maiden||ice maiden;princess ukok
6|Sima de los Huesos
6|Dmanisi skulls||dmanisi;homo georgicus;homo erectus georgicus;homo erectus ergaster georgicus
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
2|Agrippina the Younger||agrippina;agrippina younger;julia agrippina;agrippinilla
2|Messalina||valeria messalina;marcus valerius messalla barbatus
2|Boudica||boudicca;boadicea
2|Aspasia
2|Zenobia
3|Olympias
3|Julia the Elder||julia;julia augusti
3|Cornelia|Cornelia (mother of the Gracchi)|cornelia africana;mother gracchi
3|Lucretia
3|Agrippina the Elder||agrippina elder
3|Helena|Helena, mother of Constantine I|saint helena;helena augusta;helen of constantinople
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
4|Hortensia||hydrangia
4|Sulpicia
4|Julia Maesa
4|Poppaea Sabina||poppaea
4|Galla Placidia||aelia galla placidia
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
5|Cynisca||kyniska
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
1|Nebuchadnezzar II||nebuchadnezzar;nebuchadrezzar;nabuchodonosor
1|Gilgamesh
2|Sargon of Akkad||sargon;sargon great
2|Ashurbanipal||assurbanipal;sardanapalus
2|Sennacherib
2|Semiramis||shammuramat
3|Tiglath-Pileser III||tiglath pileser 3;tiglath pileser;pul
3|Sargon II||sargon 2;sargon ii of assyria
3|Esarhaddon
3|Shalmaneser III||shalmaneser 3
3|Ashurnasirpal II||ashurnasirpal 2;ashurnasirpal
3|Naram-Sin of Akkad||naram sin;naram-suen of akkad
3|Ur-Nammu||ur nammu
3|Nabonidus
3|Belshazzar
3|Nabopolassar
4|Shulgi
4|Gudea
4|Lugalzagesi
4|Eannatum
4|Urukagina||uruinimgina;code of urukagina
4|Rimush
4|Manishtushu
4|Shamshi-Adad I||shamshi adad;samsi-addu
4|Shalmaneser V||shalmaneser 5
4|Tukulti-Ninurta I||tukulti ninurta
4|Ashur-uballit I||ashur uballit
4|Merodach-Baladan II||merodach baladan;marduk apla iddina;marduk-baladan;baladan;marduk-apal-iddina ii
4|Samsu-iluna||samsu iluna
4|Rim-Sin I||rim sin
4|Zimri-Lim||zimri lim
4|Kubaba|Kugbau|ku baba;kug-bau
4|Puabi||shub-ad of ur
4|Enmerkar
4|Lugalbanda
4|Etana
5|Ishbi-Erra||ishbi erra
5|Ibbi-Sin||ibbi sin;ibbi-suen
5|Amar-Sin||amar sin;amar-suena
5|Shu-Sin||shu sin;shu-suen
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
5|Amel-Marduk||evil merodach;awil-marduk
5|Neriglissar||nergal-sharezer
5|Labashi-Marduk
5|Mesannepada
5|Enmebaragesi
6|Alulim
6|Dumuzid the Shepherd|Dumuzid the Shepherd|dumuzid;dumuzi;tammuz;thammuz
6|En-men-lu-ana|En-men-lu-ana|enmenluana
6|Ziusudra||xixouthros;xisuthros
6|Lugal-anne-mundu|Lugal-Anne-Mundu
6|Akurgal
6|Enannatum I|Enannatum I|enannatum
6|Utu-hengal||utuhegal
6|Puzur-Inshushinak||kutik-inshushinak
6|Erishum I
`,
nope:{
 'cyrus great|cyrus|darius|xerxes':'A Persian king &mdash; he conquered Babylon.',
 'marduk|ishtar|inanna|enlil':'That\'s a god!',
 'ramesses|tutankhamun':'An Egyptian pharaoh &mdash; wrong river valley.'
}},

{id:'hellenistic', cat:'Ancient World', q:'Name a Hellenistic king or queen', hint:'Rulers of the kingdoms after Alexander, 323&ndash;30 BC',
list:`
1|Cleopatra||cleopatra 7;cleopatra vii thea philopator
1|Ptolemy I Soter||ptolemy 1;ptolemy soter;ptolemy
2|Seleucus I Nicator||seleucus;seleucus 1
2|Antiochus III the Great||antiochus 3;antiochus great
2|Pyrrhus of Epirus||pyrrhus
2|Mithridates VI Eupator||mithridates 6;mithridates;mithridates great;mithradates eupator;mithradates vi of pontus
3|Antigonus I Monophthalmus||antigonus 1;antigonus one eyed;antigonus
3|Demetrius I of Macedon||demetrius poliorcetes;demetrius besieger
3|Antiochus IV Epiphanes||antiochus 4;antiochus epiphanes
3|Ptolemy II Philadelphus||ptolemy 2;ptolemy philadelphus
3|Lysimachus
3|Cassander
3|Philip V of Macedon||philip 5
3|Perseus of Macedon||perseus
3|Attalus I||attalus
3|Eumenes II||eumenes of pergamum
3|Arsinoe II
3|Berenice II
3|Hiero II of Syracuse||hiero 2;hiero
3|Agathocles of Syracuse||agathocles
4|Antigonus II Gonatas||antigonus gonatas;antigonus 2
4|Ptolemy III Euergetes||ptolemy 3;ptolemy euergetes
4|Ptolemy IV Philopator||ptolemy 4;ptolemy philopator
4|Ptolemy V Epiphanes||ptolemy 5
4|Ptolemy VI Philometor||ptolemy 6;ptolemy philometor
4|Ptolemy VIII Physcon||ptolemy 8;physcon;ptolemy viii euergetes ii
4|Ptolemy XII Auletes||ptolemy 12;auletes;ptolemy auletes
4|Ptolemy XIII||ptolemy 13
4|Arsinoe IV
4|Antiochus I Soter||antiochus 1;antiochus soter
4|Antiochus II Theos||antiochus 2
4|Seleucus II Callinicus||seleucus 2
4|Seleucus IV Philopator||seleucus 4
4|Demetrius I Soter||demetrius soter;demetrius i of syria
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
5|Cleopatra Selene II||cleopatra selene;cleopatra viii
5|Berenice IV
5|Ptolemy XV Caesarion||caesarion;ptolemy xv;ptolemy xv caesar;ptolemy xv of egypt
5|Seleucus III Ceraunus||seleucus 3
5|Antiochus Hierax
5|Alexander Balas
5|Demetrius II Nicator||demetrius 2
5|Tigranes the Great||tigranes;tigran the great;tigran ii
5|Pharnaces II of Pontus||pharnaces
5|Prusias II of Bithynia||prusias
5|Nicomedes IV of Bithynia||nicomedes
5|Eucratides I||eucratides
5|Juba II||juba ii of mauretania
6|Achaeus|Achaeus (general)|achaeus
6|Molon|Molon (general)
6|Ptolemy Keraunos||keraunos;ceraunus
6|Antipater|Antipater|antipater regent;antipatros
6|Perdiccas
6|Polyperchon
6|Arsinoe III
6|Cleopatra I Syra||cleopatra 1;cleopatra i of egypt
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
2|Philip II of Macedon||philip 2;philip macedon;philip the great
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
4|Dionysius I of Syracuse||dionysius elder;dionysius 1;dionysios of syracuse
4|Gelon||gelon i
4|Hiero I of Syracuse||hiero 1;hieron of syracuse
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
1|Julius Caesar||caesar;gaius julius caesar;divus iulius;julius ceaser
1|Cicero||marcus tullius cicero;tully
1|Mark Antony||marcus antonius;antony
1|Spartacus
2|Pompey||pompey great;gnaeus pompeius;pompeius magnus;pompeians;pompeius;gnaeus pompey magnus;cn. pompey magnus
2|Brutus|Marcus Junius Brutus|marcus brutus;marcus junius brutus the younger
2|Scipio Africanus||scipio;publius cornelius scipio africanus
2|Cato the Younger||cato younger;cato uticensis;marcus porcius cato uticensis;cato of utica;marcus porcius cato the younger
2|Cato the Elder||cato elder;cato censor
2|Crassus|Marcus Licinius Crassus|marcus crassus
2|Sulla||lucius cornelius sulla
2|Octavian|Augustus|octavian;octavius;augustus;gaius julius caesar octavianus;gaius julius caesar augustus;gaius octavius thurinus;caesar octavian
3|Gaius Marius||marius
3|Tiberius Gracchus
3|Gaius Gracchus||gaius sempronius gracchus
3|Cincinnatus
3|Lucius Junius Brutus||junius brutus
3|Cassius|Gaius Cassius Longinus|gaius cassius;caius cassius longinus
3|Catiline||lucius sergius catilina
3|Lepidus|Marcus Aemilius Lepidus (triumvir)|lepidus triumvir;marcus aemilius lepidus (49 bc)
3|Agrippa|Marcus Vipsanius Agrippa|marcus agrippa
3|Fabius Maximus||fabius cunctator;cunctator
3|Camillus|Marcus Furius Camillus
3|Coriolanus|Gaius Marcius Coriolanus
3|Lucullus
3|Publius Clodius Pulcher||clodius;publius clodius
3|Sertorius|Quintus Sertorius
4|Appius Claudius Caecus||appius claudius;tiberius claudius nero
4|Scipio Aemilianus||publius cornelius scipio aemilianus;publius cornelius scipio aemilianus africanus;scipio africanus minor
4|Lucius Aemilius Paullus Macedonicus||aemilius paullus
4|Titus Quinctius Flamininus||flamininus
4|Marcus Claudius Marcellus||marcellus
4|Marcus Atilius Regulus||regulus
4|Gaius Duilius||duilius
4|Horatius Cocles||horatius;publius horatius cocles
4|Gaius Mucius Scaevola||mucius scaevola;scaevola;gaius mucius
4|Lucius Cornelius Cinna||cinna
4|Lucius Appuleius Saturninus||saturninus
4|Marcus Livius Drusus|Marcus Livius Drusus (reformer)|livius drusus
4|Quintus Fabius Maximus Rullianus||rullianus;fabius maximus rullianus
4|Publius Decius Mus|Publius Decius Mus (consul 340 BC)|decius mus
4|Gnaeus Pompeius Strabo||pompeius strabo;pompey strabo
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
5|Lucius Licinius Murena||murena;licinia
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
1|Zeus||zeus pater
1|Athena||athene;pallas athena
1|Poseidon
1|Hades||aidoneus
1|Aphrodite||cypris
2|Apollo||phoebus;musagetes;loxias
2|Ares
2|Hera
2|Hermes
2|Artemis
2|Dionysus||dionysos;bacchus
2|Hephaestus||hephaistos
2|Demeter||demetra
2|Persephone||kore
3|Hestia
3|Kronos||cronus;cronos
3|Gaia||gaea;ge
3|Uranus||ouranos
3|Eros
3|Nike|Nike (mythology)|nike
3|Pan|Pan (god)|pan;panmegas
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
3|Asclepius||asklepios;aesculap
4|Iris|Iris (mythology)
4|Hebe|Hebe (mythology)
4|Morpheus
4|Nyx||nox
4|Erebus
4|Tartarus||tartarean
4|Oceanus||okeanos
4|Tethys|Tethys (mythology)
4|Hyperion|Hyperion (Titan)
4|Themis||thmaist
4|Mnemosyne
4|Epimetheus
4|Leto||latona
4|Metis|Metis (mythology)
4|Eris|Eris (mythology)
4|Harmonia
4|Triton|Triton (mythology)
4|Amphitrite
4|Pontus|Pontus (mythology)
4|Aeolus||aiolos
4|Boreas|Boreas (god)
4|Zephyrus
4|Hymen|Hymen (god)|hymenaios
4|Priapus||priapic
4|Hygieia||hygeia
4|Plutus||ploutos
4|Nereus
4|Proteus||protean
4|Phobos|Phobos (mythology)
4|Deimos|Deimos (deity)
4|Ganymede|Ganymede (mythology)
5|Coeus||koios
5|Crius
5|Iapetus
5|Phoebe|Phoebe (Titaness)
5|Theia||euryphaessa
5|Dione|Dione (Titaness)
5|Styx
5|Thetis||thetis
5|Hemera
5|Aether|Aether (mythology)
5|Ananke
5|Chronos
5|Achlys
5|Momus
5|Hesperus||iubar
5|Eosphorus|Phosphorus (morning star)|phosphorus;heosphoros
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
5|Eileithyia||ilithyia
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
6|Erinyes||furies;semnai;dirae;furiae
6|Moirai||fates;moerae
6|Horae||hours
6|Keres
6|Oizys
6|Geras||senectus
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
1|Jupiter|Jupiter (god)|jove;iuppiter;dies pater;dies piter
1|Mars|Mars (mythology)
1|Venus|Venus (mythology)
1|Neptune|Neptune (mythology)
2|Juno|Juno (mythology)
2|Minerva
2|Mercury|Mercury (mythology)
2|Pluto|Pluto (mythology)|dis pater;dis;plouton
2|Apollo||phoebus;musagetes;loxias
2|Diana|Diana (mythology)
2|Cupid||amor
2|Bacchus||liber;bacchic;dyonisos
2|Vulcan|Vulcan (mythology)
3|Ceres|Ceres (mythology)
3|Vesta|Vesta (mythology)
3|Janus||bifrons
3|Saturn|Saturn (mythology)
3|Proserpina||proserpine
3|Aurora|Aurora (mythology)
3|Fortuna
3|Faunus
3|Sol|Sol (Roman mythology)|sol invictus
3|Luna|Luna (goddess)
3|Victoria|Victoria (mythology)
3|Bellona|Bellona (goddess)|duellona
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
4|Aesculapius|Asclepius|asclepius;aesculap
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
4|Robigus||robigo
4|Consus
4|Lucina|Lucina (goddess)
4|Libitina
4|Feronia|Feronia (mythology)
4|Cybele|Cybele|magna mater
4|Isis||auset
5|Vediovis||vēiove;vēive
5|Summanus
5|Angerona
5|Carmenta||nicostrata
5|Egeria|Egeria (mythology)
5|Larunda||larentina
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
5|Sancus||semo sancus dius fidius
6|Volupta||volupia
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
1|Anubis||anpu
1|Osiris||aser
1|Isis||auset
1|Horus||khenty-irty
2|Set|Set (deity)|seth;sutekh;setekh
2|Thoth||djehuty;zehuti;theuth;taautos
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
3|Sobek||suchus
3|Khnum
3|Bes
3|Taweret||tawaret
3|Khonsu||chons
3|Mut
3|Apep||apophis
3|Atum||atum-ra;atum-re
3|Neith||priestess of neith
3|Khepri||khepera;xeper
4|Wadjet
4|Nekhbet
4|Hapi|Hapi (Nile god)
4|Min|Min (god)
4|Montu
4|Serket||selket
4|Heka|Heka (god)
4|Seshat
4|Meretseger
4|Wepwawet||apuat
4|Anuket||ankt
4|Satis|Satet|satet
4|Hapi son of Horus|Four sons of Horus|four sons horus;imsety;qebehsenuef;duamutef
4|Nun|Nun (mythology)
4|Renenutet
4|Meskhenet
4|Ammit||amam;the swallower
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
5|Dedun||dedwen
5|Mandulis
5|Reshep||resheph;reshef;reshpu
5|Qetesh||qudshu
5|Astarte||ashtoreth;athtart;ashteroth
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
1|Odin||woden;wotan;othinn;wōdanaz;wuodan;yggr
1|Thor||thunor;donar;thunraz;thunaer
1|Loki||loptr
2|Freyja||freya;sýr
2|Frigg||frigga;frige;frea
2|Baldr||balder;baldur;phol
2|Heimdall||heimdallr
2|Týr||tyr;tiw;tiwaz;teiwaz;ziu;mars thingsus
2|Freyr||frey;yngvi;fricco;froh;frikko
2|Hel|Hel (mythological being)|hela
2|Fenrir||fenris;fenris wolf;vánagandr;fenrisúlfr
2|Jörmungandr||jormungandr;midgard serpent;world serpent;miðgarðsormr
3|Njörðr||njord;njordr
3|Sleipnir
3|Ymir||aurgelmir;bláinn;ymir's daughter;ymir's son
3|Sif
3|Bragi
3|Iðunn||idunn;idun
3|Skaði||skadi
3|Höðr||hodr;hod
3|Víðarr||vidar
3|Váli||vali
3|Ullr||ull;uller;wuldor
3|Forseti
3|Mímir||mimir;mimer
3|Hugin and Munin|Huginn and Muninn|huginn;muninn;hugin;munin;odin's ravens
3|Valkyries|Valkyrie|valkyrie;valkyries
3|Norns||norn;urd;verdandi;skuld;nornir
3|Surtr||surt
3|Ratatoskr||ratatosk
3|Nidhogg|Níðhöggr|nidhoggr;malice striker
3|Yggdrasil
4|Sigyn
4|Hœnir||hoenir
4|Kvasir
4|Ægir||aegir;hlér
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
4|Útgarða-Loki||utgarda loki;skrýmir;utgarthilocus
4|Angrboða||angrboda
4|Hati and Sköll|Sköll|skoll;hati
4|Garmr||garm
4|Audhumla||audumla
4|Búri||buri
4|Borr||bor
4|Bestla
4|Vili and Vé||vili;ve
4|Magni
4|Móði||modi;modi and magni
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
5|Rindr||rind;wecha
5|Gunnlöð||gunnlod
5|Suttungr||suttung
5|Hrungnir
5|Thiazi||thjazi
5|Aegir's daughters|Nine Daughters of Ægir|nine daughters;daughters of ægir;billow maidens
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
1|Huitzilopochtli||huichilobos;mextli
2|Tlaloc||tlaloque
2|Tezcatlipoca||smoking mirror;omacatl
2|Kukulkan||kukulcan
2|Xipe Totec
2|Mictlantecuhtli||chalmecatl;acolnahuacatl
3|Chaac||chac
3|Itzamna
3|Ix Chel||ixchel;itzel
3|Coatlicue
3|Xochiquetzal
3|Tonatiuh
3|Chalchiuhtlicue
3|Xolotl
3|Ehecatl
3|Coyolxauhqui
3|Hunahpu and Xbalanque|Maya Hero Twins|hero twins;hunahpu;xbalanque;mayan hero twins
3|Ah Puch||ah puch;yum cimil;cizin
4|Mixcoatl||camaxtle
4|Itzpapalotl||itzpapalotltotec;itzpapalotlcihuatl;obsidian butterfly;itztli
4|Tlazolteotl||ixcuina
4|Mayahuel
4|Centeotl||cinteotl
4|Huehuecoyotl
4|Chicomecoatl
4|Ometeotl||ōmecihuātl
4|Mictecacihuatl||chalmecacihuilt
4|Tlaltecuhtli||tlalcihuatl;ilancueye
4|Xiuhtecuhtli
4|Camazotz
4|Kinich Ahau||kinich ahau;ah kin;kinich kakmo
4|Yum Kaax||yum kaax
4|Huracan||hurakan
4|Tohil
4|Hun Hunahpu
4|Bolon Yokte
4|Maize god|Maya maize god|hun hunahpu maize;tonsured maize god
4|Xquic
4|Tepeyollotl
4|Tonacatecuhtli||ometecuhtli
4|Cihuacoatl||teoyaomicqui
4|Tezcatzoncatl
5|Ixtab
5|K'awiil||kawiil;god k;bolon dzacab
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
5|Chantico||xantico;quaxolotl
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
6|Camaxtli||camaxtli;mixcōhuātl
`,
nope:{
 'montezuma|moctezuma|cuauhtemoc':'An Aztec emperor &mdash; human, not divine.',
 'inti|viracocha|pachamama':'That\'s Inca &mdash; wrong empire, but nice!'
}},

{id:'mesogods', cat:'Myths & Legends', q:'Name a god or goddess of ancient Mesopotamia', hint:'Sumerian, Akkadian, Babylonian and Assyrian',
list:`
1|Marduk||bel-marduk;merodach
1|Ishtar||inanna
1|Anunnaki||annuna;annanuki
2|Enlil||ellil
2|Enki||ea;nudimmud
2|Tiamat
2|Anu||an
2|Lamassu||shedu;lammasu;winged assyrian bulls
2|Anat
2|Apkallu
3|Shamash||utu;šamaš
3|Sin|Sin (mythology)|nanna;suen;enzu
3|Nergal
3|Ereshkigal
3|Apsu||abzu;engur
3|Ashur|Ashur (god)|assur
3|Nabu||nebo
3|Dumuzid||tammuz;dumuzi
3|Ninhursag||ninhursaga
3|Pazuzu
3|Lamashtu||labartu
3|Adad||ishkur;hadad;ramman;rapiu
3|Anzû||imdugud
3|Bel|Bel (mythology)|bêlu
3|Hanbi
3|Igigi
3|Nanaya
3|Išḫara
4|Ninurta
4|Kingu
4|Ninlil||sud
4|Nammu
4|Nisaba||nanibgal
4|Gula|Gula (goddess)
4|Lahmu and Lahamu|Lahmu|lahmu;lahamu
4|Anshar
4|Kishar
4|Geshtinanna
4|Ningishzida||ningisida
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
4|Gibil||girru
4|Girra
4|Aya|Aya (goddess)|ayu-ikalti;sherida;sudaĝ
4|Ninshubur
4|Alalu
4|Damgalnuna||damkina
4|Lugal-irra and Meslamta-ea||lugal-irra
4|Siduri
5|Nintinugga
5|Ningirsu
5|Bau|Bau (goddess)|baba
5|Kusu
5|Lugalbanda
5|Shara|Shara (god)
5|Zababa
5|Amurru|Amurru (god)
5|Sarpanit||zarpanitum
5|Tashmetum
5|Ninsun
5|Uttu
5|Ninsar||ninnisig
5|Ninkurra
5|Lulal
5|Latarak
5|Mamitu
5|Erra|Erra (god)
5|Antu|Antu (goddess)
5|Mamu|Mamu (deity)|mumudu
5|The Four Winds|The Four Winds (Mesopotamian)
5|Šulak
5|Pabilsaĝ
5|Gugalanna
5|Nirah
5|Annunitum
5|Aruru|Aruru (goddess)
5|Mummu
5|Enmesharra
5|Asalluhi||asaruludu
5|Ninkilim
5|Mami|Mami (goddess)|nintu;nintud
5|Geshtu-E
5|Isimud||izzummi
5|Ninti||nintiḫal
5|Ninisina
5|Sebitti
5|Kajamanu
5|Ištaran
5|Belili
5|Uraš
5|Enkimdu
5|Manzat|Manzat (goddess)
5|Kilili
5|Ninsianna
5|Abu|Abu (god)
5|Damu
5|Ninkarrak
5|Sisig|Sisig (mythology)|zaqīqu
5|Succoth-benoth
6|Enbilulu
6|Emesh
6|Enten
6|Ninazu
6|Ninmah||ninkharsag
6|Ki|Ki (goddess)
6|Ishum
6|Shullat and Hanish|Shullat|shullat;hanish;hani
6|Lisin
6|Zagar|Zagar (god)|zaqar
6|Haya|Haya (god)
6|Kittum||niĝgina
6|Ningirima
6|Duttur||sirtur
6|Manungal||nungal
6|Šulpae
6|Mullissu||mylitta
6|Lagamal||lagamaru
6|Kakka||gaga
6|Ancestors of Enlil||enki and ninki
6|Urash|Urash (god)
6|Papsukkal
6|Ninimma
6|Šumugan||sumuqan
6|Wer|Wer (god)|iluwer
6|Laṣ
6|Ningirida
6|Kitītum
6|Ninurima
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
1|Odysseus||ulysses;odiseo
1|Helen of Troy||helen
1|Paris|Paris (mythology)
2|Agamemnon
2|Menelaus
2|Priam||priamus
2|Patroclus
2|Ajax the Great||ajax;aias;telamonian ajax;telamonian aias;ajax the greater
2|Aeneas
2|Cassandra
3|Andromache
3|Hecuba||hekabe
3|Nestor|Nestor (mythology)
3|Diomedes
3|Penthesilea
3|Neoptolemus||pyrrhus son achilles
3|Briseis||briseida
3|Iphigenia
3|Clytemnestra
3|Laocoön||laocoon
3|Calchas
3|Philoctetes
3|Troilus
3|Memnon|Memnon (mythology)
3|Sarpedon
3|Ajax the Lesser||lesser ajax;locrian ajax;ajax the less
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
5|Cycnus||kyknos
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
1|Robin Hood||robin of locksley
2|Odysseus||ulysses;odiseo
2|Perseus
2|Theseus
2|Jason|Jason (mythology)
2|Beowulf
2|Gilgamesh
2|Hua Mulan||mulan
2|Sigurd||siegfried;sigurd fafnisbane
3|Cú Chulainn||cuchulainn;cu chulainn;sétanta
3|William Tell||wilhelm tell;guillaume tell;guglielmo tell
3|Sun Wukong||monkey king;wukong;seiten taisei;son goku
3|Bellerophon||leophontes;bellerophontes
3|Aeneas
3|Hector
3|Atalanta
3|Finn McCool||fionn mac cumhaill;fionn;finn mac umaill
3|Rostam||rustam
3|Väinämöinen||vainamoinen
3|Maui|Māui (Māori mythology)|maui
3|Momotarō||momotaro;peach boy
3|Roland||orlando
3|El Cid||cid
3|Lancelot||llenlleawg
3|Rama||sri rama;sriram;raghava rama;shri ram
3|Arjuna||dhananjaya
4|Hiawatha
4|Ilya Muromets
4|Dobrynya Nikitich
4|Alyosha Popovich
4|Kintarō||kintaro;sakata no kintoki;kintoki;sakata kintoki
4|Yamato Takeru
4|Hou Yi||shen yi;yi the archer;hou-i
4|Yu the Great||yu great;si yu;da yu
4|Gesar||king gesar
4|Manas|Epic of Manas|manas
4|Sundiata Keita||sundiata;sunjata
4|Mwindo
4|Tristan
4|Gawain||gwalchmei;gwalcmai
4|Percival||parzival;perceval
4|Galahad
4|Holger Danske||ogier dane;ogier
4|Starkad||starkather;starkodder
4|Hrólfr Kraki||hrolf kraki;hroðulf;rolf krake;hrothulf
4|Grettir the Strong||grettir
4|Egil Skallagrimsson||egil;egill skallagrimsson
4|Dietrich von Bern||dietrich bern;theodoric cycle
4|Wayland the Smith||weland;volund
4|Hereward the Wake||hereward
4|Bran the Blessed||bendigeidfran;brân
4|Pwyll
4|Lemminkäinen||lemminkainen
4|Cadmus||kadmos;cadmeians
4|Orpheus||orphée
4|Meleager||meleagros
4|Pelops
4|Castor and Pollux||castor;pollux;dioscuri;gemini twins;dioskouroi;polydeukes;heavenly twins
5|Diarmuid Ua Duibhne||diarmuid
5|Oisín||oisin
5|Ferdiad
5|Culhwch
5|Taliesin||gwion bach;gwion
5|Sadko
5|Prince Igor
5|Marko Kraljević||marko kraljevic
5|Janosik|Juraj Jánošík|janosik
5|Toldi
5|Kalevipoeg
5|Lāčplēsis||lacplesis;spīdola;spīdala
5|Digenis Akritas
5|Koroglu||köroğlu;koroglu
5|Battal Gazi
5|Antar|Antarah ibn Shaddad|antarah;antar;'antara ibn shaddad
5|Sohrab
5|Esfandiyar
5|Garshasp
5|Kamapuaa||kamapuaa
5|Tawhaki
5|Glooscap||gluskab;gluskabe
5|Paul Bunyan||babe the blue ox
5|John Henry|John Henry (folklore)
5|Pecos Bill||slue-foot sue
6|Benkei
6|Urashima Tarō||urashima taro;urashimataro and the turtle
6|Yoshitsune|Minamoto no Yoshitsune|minamoto yoshitsune;ushiwakamaru
6|Ivan Tsarevich
6|Svyatogor
6|Volga Svyatoslavich
6|Mikula Selyaninovich||mikula
6|Peredur||gwrgi
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
1|Lancelot||sir lancelot;lancelot du lac;llenlleawg
1|Guinevere||gwenhwyfar;guenevere
2|Morgan le Fay||morgan;morgana;morganthe
2|Mordred||modred;medraut
2|Gawain||gawaine;gwalchmai
2|Galahad
2|Percival||parzival;perceval;peredur
2|Lady of the Lake||nimue;viviane;vivien;nyneve
2|Tristan||tristram;tristan isolde
2|Isolde||iseult;isolt
3|Uther Pendragon||uther
3|Igraine||ygraine;ygerna;eigyr;ygerne
3|Kay|Sir Kay|kay
3|Bedivere||bedwyr
3|Elaine of Astolat||lady shalott;elaine
3|Gareth|Sir Gareth|beaumains
3|Bors
3|Green Knight||bercilak
3|Fisher King||pellam;anfortas;pelles
3|Morgause
3|Pellinore
3|Lamorak
3|Ector|Sir Ector
4|Gaheris
4|Agravain
4|Yvain||owain;ywain
4|Erec|Erec and Enide|erec;erec et enide
4|Enide
4|Lot|King Lot|lot of lothian
4|Lucan|Sir Lucan
4|Dagonet
4|Dinadan
4|Palamedes|Palamedes (Arthurian legend)
4|Lionel|Sir Lionel
4|Ector de Maris
4|Tor|Sir Tor
4|Elaine of Corbenic
4|Mark of Cornwall||king mark
4|Vortigern||gwrtheyrn
4|Ambrosius Aurelianus||aurelius ambrosius;emrys wledig
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
5|Meleagant||meliagant;melwas
5|Turquine
5|Carados||caradog freichfras
5|Lohengrin
5|Elaine of Benoic||elaine benoic
5|Ban|King Ban
5|Bohort|King Bors
5|Leodegrance
5|Ragnelle|Dame Ragnelle
5|Gwenhwyfach||gwenhwyfach;guinevak
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
1|Richard the Lionheart|Richard I of England|richard lionheart;lionheart;richard 1;richard coeur de lion
1|William Wallace||wallace;braveheart;uilleam uallas
1|El Cid||cid;rodrigo diaz de vivar;rodrigo diaz
1|Joan of Arc||jeanne darc;maid orleans;joan arc;la pucelle;saint joan of arc;st. joan of arc;jehanne
2|William Marshal|William Marshal, 1st Earl of Pembroke|marshal
2|Godfrey of Bouillon||godfrey bouillon;godfrey;godefroy de bouillon;geoffrey de bouillon;godfroi de bouillon
2|Edward the Black Prince||black prince;edward woodstock
2|Vlad the Impaler||vlad dracula;vlad 3;dracula;vlad tepes;vlad iii of wallachia;vladimir dracula;vlad iii dracul
2|Robert the Bruce||bruce;robert bruce;robert 1 scotland;robert de brus
3|Bertrand du Guesclin||du guesclin;guesclin
3|Jacques de Molay||molay;james of molay
3|Baldwin IV of Jerusalem||baldwin 4;leper king
3|Bohemond I of Antioch||bohemond;bohemond taranto
3|Tancred, Prince of Galilee||tancred
3|Balian of Ibelin||balian
3|Henry Percy (Hotspur)|Henry Percy (Hotspur)|hotspur;henry percy
3|Ulrich von Liechtenstein||ulrich liechtenstein
3|Skanderbeg||gjergj kastrioti;george castriot
3|John Hunyadi||hunyadi;janos hunyadi;iancu de hunedoara;sibinjanin janko
4|Raymond IV of Toulouse||raymond toulouse;raymond saint gilles;raymond iv, count of toulouse;raymond i of tripoli
4|Raynald of Châtillon||reynald chatillon;raynald chatillon;renaud de chatillon
4|Guy of Lusignan||guy lusignan
4|Raymond III of Tripoli||raymond tripoli;raymond iii, count of tripoli
4|John Hawkwood||hawkwood
4|Götz von Berlichingen||berlichingen;gotz berlichingen;iron hand;goetz von berlichingen iron hand;gotz
4|Jan Žižka||zizka;jan zizka
4|James Douglas, Lord of Douglas||black douglas;james douglas
4|Pierre Terrail, seigneur de Bayard||bayard;chevalier bayard;pierre terrail
4|Gilles de Rais||rais;gilles de retz;gilles de laval
4|Hugues de Payens||hugh payens;hugues payens
4|Owain Glyndŵr||owain glyndwr;owen glendower;glyndwr;owain glendower
4|Simon de Montfort, 6th Earl of Leicester||simon de montfort;montfort
4|Robert Guiscard||guiscard
4|John of Gaunt||gaunt;john, duke of lancaster
4|Zawisza the Black|Zawisza Czarny|zawisza czarny;zawisza
4|Sir John Chandos||john chandos;chandos
5|Geoffroi de Charny||charny
5|Jean II Le Maingre||boucicaut;marshal de boucicaut;jean le maingre;jean boucicaut
5|Hermann von Salza||salza
5|Thomas Malory||malory
5|Roger de Flor||flor;ruggiero da flor
5|Roger I of Sicily||roger 1 sicily;roger i, count of sicily;count roger i of sicily;constance of sicily (died 1138);roger bosso
5|Tancred of Hauteville
5|Charles the Bold||charles bold;charles i, duke of burgundy;charles, duke of burgundy;charles of burgundy;charles le téméraire
5|John Fastolf||fastolf
5|Jean de Joinville||joinville
5|Jacques de Lalaing||lalaing
5|William Longespée, 3rd Earl of Salisbury||william longespee;william longsword, earl of salisbury
5|Gerard de Ridefort||ridefort
5|Robert de Sablé||sable
5|Jean de Brienne|John of Brienne|john brienne
5|Ulrich von Jungingen||jungingen
6|Suero de Quiñones||quinones;paso honroso
6|Thomas Erpingham||erpingham
6|Jean de Vienne (admiral)||jean de vienne
6|Arnaud de Cervole||cervole;archpriest
6|Walter Manny||manny
6|Konrad von Wallenrode||wallenrode;conrad of wallenrode
6|Bertrand de Born||born
`,
nope:{
 'lancelot|galahad|gawain|ivanhoe|don quixote|tirant':'A knight of fiction &mdash; this dig wants real ones.',
 'saladin':'The sultan who fought the crusaders &mdash; not a European knight.',
 'king arthur|arthur':'Legendary &mdash; try the Arthurian dig!'
}},

{id:'scots', cat:'Rulers', q:'Name a king or queen of Scots', hint:'From Kenneth MacAlpin to the Union of the Crowns (1603)', wf:'{} of Scotland',
list:`
1|Robert the Bruce|Robert the Bruce|robert bruce;bruce;robert 1;robert de brus
1|Mary, Queen of Scots||mary;mary stuart;mary queen scots;mary i of scotland
1|Macbeth|Macbeth, King of Scotland|macbeth;mac bethad mac findláich
2|James VI|James VI and I|james 6;james 6 1;james i and vi;james i of england
2|Kenneth MacAlpin||kenneth 1;kenneth macalpin;cinaed mac ailpin;an ferbasach
2|Duncan I|*|duncan;duncan 1;donnchad i of scotland;donnchad mac crínáin
2|Malcolm III|*|malcolm canmore;malcolm 3;canmore;máel coluim iii of scotland;máel coluim iii
2|David I|*|david 1
2|William the Lion||william 1;william lion;william of scotland
2|James IV|*|james 4
3|James I|*|james 1
3|James II|*|james 2
3|James III|*|james 3
3|James V|*|james 5
3|Alexander III|*|alexander 3
3|Alexander II|*|alexander 2
3|Robert II|*|robert 2;robert the steward
3|Robert III|*|robert 3
3|Malcolm IV|*|malcolm 4;malcolm maiden
3|David II|*|david 2
3|John Balliol||john balliol;balliol;toom tabard;john of scotland;john i of scotland;john de baliol
3|Margaret, Maid of Norway||maid norway;margaret norway
3|Edgar|*|edgar
3|Alexander I|*|alexander 1
4|Malcolm II|*|malcolm 2;máel coluim ii of scotland
4|Donald III|*|donald bane;donald 3
4|Duncan II|*|duncan 2;donnchad ii of scotland
4|Lulach||lulach simple
4|Constantine II|*|constantine 2;constantín mac áeda;causantín mac áeda
4|Edward Balliol||edward balliol
4|Kenneth II|*|kenneth 2;cináed mac maíl choluim
4|Kenneth III|*|kenneth 3;cináed mac duib
4|Malcolm I|*|malcolm 1;máel coluim mac domnaill
4|Indulf||ildulb;illulb mac custantín
5|Donald I|*|donald 1
5|Donald II|*|donald 2;domnall mac causantín;domnall ii
5|Constantine I|*|constantine 1
5|Áed|Áed of Scotland|aed;áed of scotland;áed of the white flowers
5|Giric||grig
5|Dub|Dub of Scotland|dub;dub of scotland
5|Cuilén||cuilen;culen of scotland
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
1|Avicenna||ibn sina;avicennian logic;abuali ibn sino;abu ali sina
1|Al-Khwarizmi||khwarizmi;muhammad ibn musa al khwarizmi
1|Averroes||ibn rushd
1|Omar Khayyam||khayyam;xayyam;omar the tentmaker
2|Ibn Khaldun||khaldun;khaldunian
2|Al-Biruni||biruni
2|Rhazes|Abu Bakr al-Razi|al razi;razi;muhammad ibn zakariya al-razi;muhammad ibn zakarīya rāzi;muhammad ibn zakariya ar-razi
2|Alhazen|Ibn al-Haytham|ibn al haytham;al haytham;alhacen
2|Al-Farabi||farabi;alpharabius
2|Rumi||jalal al din rumi;mevlana;jalal ad-din muhammad rumi;jalal al-din muhammad rumi;jalal ad-din muhammad balkhi;maulana rumi
2|Ibn Battuta||battuta
2|Al-Ghazali||ghazali;algazel;algazelus
3|Al-Kindi||kindi
3|Ismail al-Jazari||al jazari;jazari
3|Al-Zahrawi||abulcasis;zahrawi
3|Jabir ibn Hayyan||geber;jabir
3|Muhammad al-Idrisi||al idrisi;idrisi;edrisi
3|Nasir al-Din al-Tusi||al tusi;tusi;khajeh nasir toosi
3|Ibn al-Nafis||al nafis
3|Al-Battani||albategnius;battani;muhammad ibn jābir al-harrānī al-battānī
3|Thabit ibn Qurra||thabit
3|Ulugh Beg
3|Al-Tabari||tabari
3|Al-Masudi||masudi;mas'udi
3|Maimonides||rambam;moses maimonides;moses ben maimon;moshe ben maimon
3|Ibn Arabi||ibn al arabi
3|Hafez||hafiz
3|Saadi Shirazi||saadi;sadi
3|Ferdowsi||firdausi;firdowsi
3|Al-Jahiz||jahiz
4|Banu Musa||ahmad ibn mūsā ibn shākir;hasan bin musa
4|Hunayn ibn Ishaq||hunayn;johannitius;al-ibadi
4|Ibn Tufail||abubacer
4|Ibn Bajja||avempace
4|Abd al-Rahman al-Sufi||al sufi;azophi
4|Jamshid al-Kashi||al kashi;ghiyath al-kashi
4|Ibn Zuhr||avenzoar
4|Ibn Yunus
4|Ibn al-Shatir
4|Abbas ibn Firnas||ibn firnas
4|Fatima al-Fihri||al fihri
4|Al-Muqaddasi||muqaddasi
4|Ibn Jubayr||jubair al hakim
4|Yaqut al-Hamawi||yaqut
4|Al-Khazini||khazini
4|Al-Karaji||karaji
4|Abu Kamil
4|Kamal al-Din al-Farisi||al farisi
4|Taqi al-Din Muhammad ibn Ma'ruf||taqi al din
4|Nizam al-Mulk
4|Ibn Hazm||abu muhammad bin hazm
4|Al-Zarqali||arzachel;zarqali
4|Sibawayh||sibawayhi
4|Nizami Ganjavi||nizami
4|Attar of Nishapur||attar;farid al-din attar;fariduddin attar;farid ad-din attar
4|Jami
5|Abd al-Latif al-Baghdadi
5|Ibn al-Baitar
5|Ali Qushji||al qushji;ali kuşçu
5|Al-Samawal al-Maghribi||samawal;ibn yaḥyā al-maghribī al-samawʾal;al-samaw'al
5|Al-Bitruji||alpetragius;nur ed-din al betrugi;nur ad-din al-betrugi
5|Ibn Wahshiyya
5|Al-Khalil ibn Ahmad al-Farahidi||al khalil;farahidi;khalil ibn ahmad
5|Al-Dinawari||dinawari
5|Maslama al-Majriti||al majriti;maslamah ibn ahmad al-majriti
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
1|Joan of Arc||jeanne darc;maid orleans;la pucelle;saint joan of arc;st. joan of arc;jehanne
1|Eleanor of Aquitaine||eleanor aquitaine;eleanor, duchess of aquitaine;alienor of aquitaine
2|Hildegard of Bingen||hildegard;st. hildegard of bingen
2|Christine de Pizan||pizan;christine pisan
2|Empress Matilda||matilda;maud
2|Murasaki Shikibu||murasaki;lady murasaki
2|Wu Zetian||empress wu;wu meiniang
2|Isabella I of Castile||isabella;isabel i of castile;isabel of castile;isabel i of spain;isabel the catholic
2|Theodora|Theodora (wife of Justinian I)|empress theodora
3|Heloise||heloise abelard;héloïse
3|Isabella of France||she wolf france;isabella france
3|Catherine of Siena||catherine siena;st. catherine of siena;saint catherine of siena
3|Julian of Norwich||julian norwich
3|Clare of Assisi||saint clare;st. clare of assisi
3|Anna Komnene||anna comnena;anna komnene
3|Æthelflæd||aethelflaed;ethelfleda;lady mercians
3|Emma of Normandy||emma
3|Tamar of Georgia||tamar;tamar i
3|Blanche of Castile||blanche castile
3|Olga of Kiev||olga kiev;saint olga;olga of kyiv;st. olga
3|Margaret I of Denmark||margaret 1;margrete;margrethe i
3|Birgitta of Sweden||bridget sweden;saint birgitta;saint bridget of sweden;st. bridget of sweden
3|Razia Sultana||razia
3|Sei Shōnagon||sei shonagon
3|Tomoe Gozen||tomoe
3|Jadwiga of Poland||jadwiga;hedwig of poland;saint jadwiga
3|Marie de France
3|Matilda of Tuscany||matilda tuscany;matilde of canossa;matilda of canossa;matilde di canossa;countess matilda
3|Lady Godiva||godiva
3|Margery Kempe||kempe
3|Margaret of Anjou||margaret anjou
3|Queen Seondeok of Silla||seondeok
4|Hrotsvitha||hrotsvit;roswitha;canoness hroswitha;hroswitha of gandersheim
4|Trota of Salerno||trotula
4|Shajar al-Durr||shajar al durr
4|Khutulun
4|Sorghaghtani Beki||sorghaghtani;sorqaqtani
4|Agnès Sorel||agnes sorel
4|Isabeau of Bavaria||isabeau;isabella of bavaria
4|Philippa of Hainault||philippa
4|Eleanor of Castile||eleanor, countess of ponthieu
4|Marguerite Porete||porete;margaret porete
4|Mechthild of Magdeburg||mechthild
4|Gertrude the Great||gertrude of helfta
4|Radegund||radegunde
4|Brunhilda of Austrasia||brunhilda;brunhild
4|Fredegund
4|Theodelinda
4|Irene of Athens||irene
4|Zoe Porphyrogenita||zoe;zoe of byzantium
4|Arwa al-Sulayhi||al-hurra al-malika
4|Sitt al-Mulk
4|Rabia of Basra||rabia basri;rabia
4|Lal Ded||lalleshwari
4|Akka Mahadevi
4|Jeanne de Clisson||lioness brittany;jeanne de belleville
4|Saint Margaret of Scotland||margaret scotland;margaret of wessex;st. margaret of scotland
4|Melisende, Queen of Jerusalem||melisende
4|Sibylla, Queen of Jerusalem||sibylla
4|Caterina Sforza
4|Lucrezia Borgia
4|Mary of Burgundy||mary the rich;mary, duchess of burgundy
4|Margaret Beaufort||margaret, countess of richmond;margaret of richmond
4|Elizabeth Woodville
4|Aud the Deep-Minded||aud
4|Sigrid the Haughty||sigrid storrada
5|Dhuoda
5|Hadewijch
5|Christina of Markyate
5|Gudrid Thorbjarnardóttir||gudrid;guðríður þorbjarnardóttir
5|Freydís Eiríksdóttir||freydis
5|Catherine of Valois
5|Joan of Kent||joan, countess of kent;joan, 4th countess of kent;fair maid of kent
5|Alice Perrers
5|Ermengarde of Narbonne||ermengarde
5|Isabella I of Jerusalem||isabella of jerusalem
5|Isabella d'Este||isabella este
5|Anne of Brittany||anne, duchess of brittany;anne de bretagne
5|Margaret Paston||margaret mautby
5|Æthelthryth||etheldreda;audrey;æðelþryð
5|Hilda of Whitby||hild;saint hilda;st hilda;saint hilda of whitby
5|Bertha of Kent
5|Adela of Normandy||adela, countess of blois;adela of blois
5|Mahaut of Artois||mahaut, countess of artois
5|Jacqueline, Countess of Hainaut||jacqueline hainaut;jacoba of beieren
5|Toregene Khatun||toregene
5|Mandukhai Khatun||mandukhai
6|Marguerite d'Oingt
6|Hodierna of Jerusalem||hodierna
6|Ingeborg of Denmark, Queen of France||ingeborg
6|Gunhild of Wenden
6|Eupraxia of Kiev||eupraxia
6|Sophia of Minsk||sofia of minsk;sophia of polotsk
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
1|Bergen||bjørgvin
2|Bremen
2|Gdańsk||danzig;gdansk;politics of gdańsk
2|Riga||riga, latvia
2|Tallinn||reval;lindanise
2|Visby
2|Veliky Novgorod||novgorod;holmgard
2|London|Steelyard|steelyard;stalhof
2|Bruges||brugge
2|Cologne||koln;köln;oppidum ubiorum
3|Stralsund
3|Rostock
3|Wismar
3|Lüneburg||luneburg;liuni
3|Stockholm
3|Königsberg||konigsberg;kaliningrad
3|Elbląg||elbing;elblag
3|Toruń||thorn;torun
3|Kraków||krakow;cracow
3|Dortmund
3|Münster||munster
3|Szczecin||stettin
3|Greifswald
3|Tartu||dorpat;tarbatu
3|Groningen||coat of arms of groningen
3|Deventer
3|Kampen|Kampen, Overijssel
3|Zwolle
3|Braunschweig||brunswick
3|Magdeburg
4|Berlin||federal state of berlin;state of berlin
4|Kołobrzeg||kolberg;kolobrzeg
4|Anklam
4|Soest
4|Hildesheim
4|Goslar
4|Hanover||hannover
4|Pärnu||pernau;parnu;parnawa
4|Wrocław||breslau;wroclaw;wratislaw
4|Halle|Halle (Saale)
4|Frankfurt (Oder)||frankfurt oder
4|Kalmar
4|Duisburg
4|Wesel
4|Nijmegen||ulpia noviomagus batavorum
4|Arnhem
4|Zutphen
4|Harderwijk
4|Hamelin||hameln
4|Göttingen||gottingen
4|Kiel||kiel, germany
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
5|Cēsis||wenden;cesis;kieś
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
1|Genghis Khan||genghis;chinggis;chinggis khan;temujin;chengiz khan;chenghiz khan;changez khan;dschingis khan
1|Kublai Khan||kublai;khubilai;setsen khan
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
3|Toghon Temür||toghon temur;zhizheng;ukhaantu khan
3|Ariq Böke||ariq boke;arigh boke
3|Kaidu||qaidu
4|Arghun
4|Abaqa Khan||abaqa;abagha
4|Duwa||duwa khan
4|Öljaitü||oljeitu;oljaitu;muhammad khodabandeh;uljaytu;charbanda
4|Abu Sa'id Bahadur Khan||abu said
4|Temür Khan||temur khan;chengzong;öljeyitü khan
4|Töregene Khatun||toregene
4|Dayan Khan||batu-möngke dayan khan
4|Altan Khan
4|Ligdan Khan||ligdan
4|Mandukhai Khatun||mandukhai
4|Toqta||tokhta
4|Jani Beg||janibeg
4|Möngke Temür||mongke temur
5|Oghul Qaimish
5|Esen Taishi||esen;esen tayisi
5|Sartaq||sartak khan
5|Tekuder||teguder
5|Gaykhatu
5|Baydu
5|Kebek
5|Tarmashirin
5|Külüg Khan||khayishan;kulug
5|Ayurbarwada Buyantu Khan||ayurbarwada;renzong;buyantu khan
5|Yesün Temür||yesun temur
5|Tugh Temür||tugh temur;jayaatu khan
5|Tini Beg
5|Berdi Beg
5|Biligtü Khan||biligtu;ayushiridara
6|Rinchinbal Khan||rinchinbal
6|Gegeen Khan||shidebala
6|Uskhal Khan||togus temur
6|Elbeg Nigülesügchi Khan||elbeg
6|Taisun Khan||toghtoa bukha;tayisung khan toghtoa bukha;tayisung khan
6|Tode Mongke||tode mongke;tuda-mengu
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
1|Mansa Musa||musa 1 mali;musa keita;musa
1|Mehmed II||mehmed conqueror;mehmet 2;fatih
2|Abu Bakr||hazrati abu bakr siddique
2|Umar||omar;umar ibn al khattab;caliph umar;caliph omar;omar bin al-khattab;umar b. al-khattab
2|Uthman||othman;uthman ibn affan;ibn ʿaffān
2|Ali|Ali ibn Abi Talib|ali ibn abi talib;maula ali;imam ali;ali al murtaza
2|Muawiya I||muawiyah;mu'awiya
2|Timur||tamerlane;tamburlaine;timurleng;sahib qiran;amir temur
2|Baybars||baibars
2|Abd al-Rahman III||abd al rahman 3;abd ar rahman 3
2|Al-Ma'mun||mamun;al mamun
2|Mahmud of Ghazni||mahmud ghaznavi
2|Alp Arslan
3|Abd al-Malik ibn Marwan||abd al malik;ʿabdu l-malik ibn marwan
3|Al-Mansur||al mansur abbasid;abu ja'far al-mansur
3|Al-Walid I||walid 1;al-walid ibn abd al-malik
3|Umar II||umar bin abdul aziz;omar ii;umar ibn abdul aziz
3|Abd al-Rahman I||abd al rahman 1;abd al-rahman ibn mu'awiya;abd-ar-rahman i
3|Hisham ibn Abd al-Malik||hisham
3|Al-Mu'tasim||mutasim
3|Al-Mutawakkil||mutawakkil
3|Al-Mu'izz li-Din Allah||al muizz;ma'ad al-muizz li-deenillah
3|Al-Hakim bi-Amr Allah||al hakim
3|Nur ad-Din|Nur ad-Din (died 1174)|nur al din;nureddin;noor uddin zangi
3|Imad al-Din Zengi||zengi;zangi
3|Malik-Shah I||malik shah
3|Tughril|Tughril Beg|tughril beg;toghrul;tugrul
3|Qutuz
3|Qalawun||qalaun;al mansur qalawun
3|Shajar al-Durr
3|Yusuf ibn Tashfin||ibn tashfin
3|Abu Yusuf Yaqub al-Mansur||yaqub al mansur;yaqub, almohad caliph
3|Muhammad XII of Granada||boabdil;muhammad xiii of granada
3|Osman I||osman
3|Bayezid I||bayezid thunderbolt;beyazid i;bajazet i
3|Murad II
3|Ulugh Beg
3|Askia Muhammad I||askia muhammad;askia great;askia
3|Sunni Ali||sonni ali ber
3|Iltutmish||altamash
3|Razia Sultana||razia
3|Alauddin Khalji||alauddin khilji;ali gurshasp
3|Muhammad bin Tughluq||muhammad tughlaq
3|Qutb ud-Din Aibak||qutb al din aibak;aibak
4|Abd al-Mu'min||abd al mumin
4|Ibn Tumart
4|Orhan||orhan i
4|Murad I
4|Bayezid II||beyazid ii;bajazet ii
4|Shah Rukh|Shah Rukh (Timurid dynasty)|shahrukh;shahrukh mirza
4|Firuz Shah Tughlaq||firuz shah;feroz shah tughlaq
4|Muhammad of Ghor||muhammad ghori;mu'izz al-din;mu'izz al-din muhammad;shahabuddin muhammad ghauri
4|Ahmad ibn Tulun||ibn tulun
4|Barquq||barkuk
4|Qaitbay||qaytbay
4|Al-Mustansir Billah||al mustansir;ma'ad al-mustansir billah
4|Al-Musta'sim||mustasim
4|Muhammad I of Granada||ibn al ahmar
4|Sanjar|Ahmad Sanjar|ahmad sanjar
4|Al-Aziz Billah||al aziz;abu mansoor nizar al-aziz billah
4|Yazid I||yazid ibn mu'awiyah;yazid ibn muawiya
4|Marwan II||marwan ibn muhammad
4|Abu al-Abbas al-Saffah||al saffah;saffah
4|Al-Mahdi
4|Al-Amin
4|Kafur|Abu al-Misk Kafur|kafur
4|Al-Nasir Muhammad||nasir muhammad
5|Yusuf I of Granada||yusuf 1
5|Abu al-Hasan Ali, Sultan of Granada||muley hacen
5|Al-Mu'tamid ibn Abbad||al mutamid;muhammad ibn abbad al mutamid;abbad iii al-mu'tamid;muhammad al-mu'tamid
5|Uzun Hasan
5|Kilij Arslan I||kilij arslan
5|Kayqubad I||kaykubad;alaeddin keykubad i;kayqubad the great;alaattin keykubat i
5|Muhammad II of Khwarazm||ala ad din muhammad;muḥammad b. tekish
5|Jalal ad-Din Mingburnu||jalal al din;jalaluddin manguberdi;mingburnu;jalal-ud-din mangabarni
5|Al-Ashraf Khalil||khalil
5|Al-Kamil||malik al-kamil
5|Al-Adil I||al adil;saphadin
5|Al-Muizz Aybak||aybak
5|Sultan Hasan|An-Nasir Hasan|sultan hasan;an-nasir hassan
5|Faraj|An-Nasir Faraj|faraj
5|Al-Muhtadi
5|Al-Radi||ar-radi
6|Qara Yusuf
6|Jahan Shah|Jahan Shah (Qara Qoyunlu)
6|Toghrul III||toghrul iii of seljuq
6|Al-Zahir Ghazi||az-zahir ghazi;malik az-zahir
6|Ali ibn Yusuf
6|Mansa Uli||uli;mansa wali keita
6|Mansa Sulayman||sulayman
`,
nope:{
 'suleiman|suleiman magnificent':'A sultan &mdash; but 16th century, after this dig\'s cut-off.',
 'akbar|babur|aurangzeb':'A Mughal emperor &mdash; 16th century or later.',
 'avicenna|ibn khaldun|ibn battuta':'A scholar, not a ruler &mdash; try the scholars dig!'
}},

{id:'empires', cat:'Empires', q:'Name an empire', hint:'Any empire in history',
list:`
1|Roman Empire||roman;rome;romans;imperial rome;imperial roman;imperium romanum;imperio romano
1|British Empire||british
1|Mongol Empire||mongol;mongols;mongolian empire;turco-mongol empire
1|Ottoman Empire||ottoman;ottomans;turkish empire;sublime ottoman state;osman empire;osmanlı i̇mparatorluğu
2|Persian Empire|Achaemenid Empire|persian;achaemenid;persia;achaemenian empire;first persian empire;ancient persians
2|Byzantine Empire||byzantine;byzantium;eastern roman empire;eastern roman;eastern empire;east roman empire;rhomania
2|Holy Roman Empire||holy roman;first reich;hre;heiliges römisches reich
2|Spanish Empire||spanish;empire of spain;imperial spain
2|Aztec Empire||aztec;aztecs;mexica empire
2|Inca Empire||inca;incas;tawantinsuyu
2|Russian Empire||russian;tsarist russia;empire of russia;imperial russian;tsarist regime;tsarist russian empire
2|Mughal Empire||mughal;moghul empire;mogul empire;baburid empire
2|Austro-Hungarian Empire|Austria-Hungary|austria hungary;austro hungarian
2|French Empire|First French Empire|napoleonic empire;french;napoleonic france;first empire;first french empire
3|Portuguese Empire||portuguese;first portuguese empire
3|Maurya Empire||maurya;mauryan
3|Gupta Empire||gupta
3|Mali Empire||mali;malinke empire;kingdom of mali;malian empire;mandin
3|Songhai Empire||songhai
3|Ghana Empire||ghana;wagadu;kingdom of ghana;ancient ghana
3|Khmer Empire||khmer;angkor;angkorian empire;kambujadeśa
3|Carthaginian Empire|Ancient Carthage|carthage
3|Assyrian Empire|Neo-Assyrian Empire|assyria;assyrian;neo assyrian;new assyrian empire
3|Babylonian Empire|Neo-Babylonian Empire|babylon;neo babylonian;babylonian;second babylonian empire;chaldean empire;neo-babylon
3|Akkadian Empire||akkad;akkadian;empire of akkad
3|Hittite Empire|Hittites|hittite;hittites
3|Macedonian Empire|Macedonia (ancient kingdom)|alexanders empire;macedonian;kingdom of macedon;ancient macedonia;kingdom of macedonia;ancient macedon
3|Seleucid Empire||seleucid
3|Parthian Empire||parthia;parthian;arsacid empire;arsacid;arsacids;ashkanian
3|Sasanian Empire||sassanid;sasanian;sassanian;ērānšahr;eranshahr;persian empire of the sassanids
3|Umayyad Caliphate||umayyad;ummayad;caliphate of damascus
3|Abbasid Caliphate||abbasid;abassid;caliphs of baghdad
3|Carolingian Empire||carolingian;frankish empire
3|German Empire||kaiserreich;second reich;empire of germany;second german empire;deutsches kaiserreich
3|Empire of Japan||japanese empire;imperial japan;imperial japanese;dai nippon;japanese expansion;japanese imperial
3|Dutch Empire||dutch;netherlands empire
3|Qing dynasty||qing empire;qing;qing dynasties;great qing empire
3|Ethiopian Empire||abyssinia;ethiopian;empire of ethiopia;abyssinian empire;kingdom of ethiopia;imperial ethiopia
3|Timurid Empire||timurid
3|Safavid Iran|Safavid Iran|safavid;safavid empire
3|Golden Horde||kipchak khanate;jochid ulus;jochids;ulus jochi
3|Han dynasty||han empire;han;han china;former han dynasty
4|Fatimid Caliphate||fatimid;fatimite
4|Seljuk Empire||seljuk;great seljuk;great seljuq empire;seljuq armenia
4|Benin Empire|Kingdom of Benin|benin;edo empire;great benin empire
4|Ashanti Empire||ashanti;asante;asanteman;kingdom of ashanti;ashantiland;asanteman confederation
4|Zulu Kingdom|Zulu Kingdom|zulu;zulu empire;zulu state
4|Kanem–Bornu Empire||kanem bornu;bornu;kanem empire;borno empire
4|Kingdom of Aksum||aksum;axum;aksumite;kingdom of axum;axumite empire;axumites;axumite kingdom
4|Kushan Empire||kushan;kushanas;kusana
4|Sikh Empire||sikh
4|Maratha Empire|Maratha Confederacy|maratha;mahratta confederacy
4|Vijayanagara Empire||vijayanagara;bijanagar;karnata empire;kingdom of bisnaga
4|Chola dynasty||chola;chodas
4|Srivijaya
4|Majapahit||kingdom of majapahit;wilwatikta
4|Tibetan Empire||tibetan
4|Khazar Khaganate||khazar;khazars;khazaria;kazaria;khazarian
4|Bulgarian Empire|First Bulgarian Empire|bulgarian;danube bulgaria;bulgar khanate;first bulgarian state
4|Serbian Empire||serbian
4|Angevin Empire||angevin;plantagenet empire
4|North Sea Empire||cnut empire
4|Swedish Empire||swedish;stormaktstiden;sweden as a great power
4|Empire of Brazil||brazilian empire
4|Mexican Empire|First Mexican Empire|mexican;america mexicana
4|Latin Empire||latin;empire of romania
4|Empire of Trebizond||trebizond;trapezuntine empire;empire of trabzon
4|Empire of Nicaea||nicaea;nicaean empire;nicene empire;nicean empire
4|Gallic Empire||gallic
4|Palmyrene Empire||palmyrene;palmyra
4|Ghaznavid dynasty||ghaznavid;yamini dynasty
4|Khwarazmian Empire||khwarazmian;khwarezmid empire;khwarezm empire
4|Göktürk Khaganate|First Turkic Khaganate|gokturk;turkic khaganate;first turkic kaganate;first turkic kaghanate
4|Xiongnu||hunnu;sunnu
4|Hunnic Empire||huns;hunnic
4|Wari Empire|Wari culture|wari
4|Almohad Caliphate||almohad;almohades
4|Almoravid dynasty||almoravid
4|Mamluk Sultanate||mamluk;mamluks;egyptian mamluks;egyptian mamluk sultanate
4|Ayyubid dynasty||ayyubid
4|Rashidun Caliphate||rashidun
4|Neo-Sumerian Empire|Third Dynasty of Ur|ur 3;neo-sumerian;ur iii empire
4|Median Empire||medes;median
4|Ptolemaic Kingdom||ptolemaic;hellenistic egypt
5|Kingdom of Mutapa||mutapa;monomotapa;mwenemutapa;munhumutapa
5|Oyo Empire||oyo
5|Sokoto Caliphate||sokoto;fulani empire;sardauna of sokoto;fulani empire of sokoto;sultanate of sokoto
5|Toucouleur Empire||toucouleur
5|Wassoulou Empire||wassoulou
5|Kong Empire||kong
5|Luba Empire||luba;kingdom of luba;luba kingdom;kings of luba
5|Lunda Empire||lunda;kingdom of lunda
5|Rozvi Empire||rozvi
5|Kingdom of Kongo||kongo;kongo empire
5|Comanche|Comancheria|comancheria
5|Durrani Empire||durrani;afghan empire;sadozai kingdom
5|Uyghur Khaganate||uyghur;huige;huihu
5|Avar Khaganate||avars;carpathian avars
5|Rouran Khaganate||rouran;jou-jan;nirun;juanjuan
5|Gurjara-Pratihara||pratihara
5|Pala Empire||pala
5|Rashtrakuta dynasty||rashtrakuta
5|Kara-Khanid Khanate||karakhanid;qarakhanid state
5|Empire of Harsha|Pushyabhuti dynasty|harsha;vardhanas;kingdom of thanesar
5|Second Bulgarian Empire
5|Haitian Empire|First Empire of Haiti|haiti empire;empire of haiti (1804-1806);first empire of haiti (1804);first haitian empire
5|Central African Empire
5|Korean Empire||empire of korea;great korean empire
5|Sui dynasty||sui;sui china;sui empire
6|Chagatai Khanate||chagatai;jaghatai khanate;jagatai khanate
6|Ilkhanate||ilkhanate;ilkhanid;il-khanids
6|Northern Yuan
6|Empire of Thessalonica
6|Kingdom of Kush|Kingdom of Kush|kush;kushite nubia
6|Elamite Empire|Elam|elam
6|Mitanni||mittani;kingdom of mitanni;hanigalbat;naharin
6|Urartu||kingdom of urartu;kingdom of van;kingdom of ararat;vannic armenian kingdom
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
1|Mali Empire||mali;malinke empire;kingdom of mali;malian empire;mandin
1|Ancient Egypt||egypt;ancient egyptian;ancient egyptians;egyptian civilization;ancient egyptian civilization
1|Ancient Carthage||carthage;carthaginian republic;carthaginian civilization
1|Zulu Kingdom||zulu;zulu empire;zulu state
2|Songhai Empire||songhai
2|Ghana Empire||ghana;wagadu;kingdom of ghana;ancient ghana
2|Kingdom of Kush||kush;nubia;kushite
2|Kingdom of Aksum||aksum;axum;kingdom of axum;aksumites;axumite empire;axumites
2|Ethiopian Empire||abyssinia;ethiopia;empire of ethiopia;abyssinian empire;kingdom of ethiopia;imperial ethiopia
2|Great Zimbabwe|Kingdom of Zimbabwe|zimbabwe;kingdom zimbabwe
2|Ashanti Empire||ashanti;asante;asanteman;kingdom of ashanti;ashantiland;asanteman confederation
2|Kingdom of Benin||benin;benin empire;edo empire;great benin empire
2|Kingdom of Kongo||kongo;kongo empire
3|Kanem–Bornu Empire||kanem;bornu;kanem bornu;borno empire
3|Kingdom of Mutapa||mutapa;monomotapa;mwenemutapa;munhumutapa
3|Kingdom of Dahomey||dahomey
3|Oyo Empire||oyo
3|Numidia||numidian kingdom
3|Mauretania
3|Buganda||kingdom of buganda
3|Kingdom of Rwanda||rwanda;rwandan monarchy;kingdom of banyarwanda
3|Kingdom of Ndongo||ndongo
3|Sokoto Caliphate||sokoto;fulani empire;sardauna of sokoto;fulani empire of sokoto;sultanate of sokoto
3|Kilwa Sultanate||kilwa
3|Mapungubwe|Kingdom of Mapungubwe
3|Merina Kingdom||merina;madagascar kingdom
3|Kingdom of Makuria||makuria
3|Fatimid Caliphate||fatimid;fatimite
3|Almoravid dynasty||almoravid
3|Almohad Caliphate||almohad;almohades
3|Mamluk Sultanate||mamluk;egyptian mamluks;egyptian mamluk sultanate
4|Kingdom of Matamba||matamba
4|Luba Empire||luba;kingdom of luba;luba kingdom;kings of luba
4|Lunda Empire||lunda;kingdom of lunda
4|Kuba Kingdom||kuba
4|Rozvi Empire||rozvi
4|Kingdom of Burundi||burundi;burundian monarchy
4|Bunyoro|Bunyoro-Kitara|kitara;kingdom of bunyoro
4|Adal Sultanate||adal;sultanate of harar;adal kingdom;adal empire
4|Ajuran Sultanate||ajuran
4|Sultanate of Darfur||darfur;fur sultanate
4|Funj Sultanate||funj;sennar;sultanate of sennar;kingdom of sennar;funjistan
4|Wadai Empire||wadai;ouaddai empire;ouaddai kingdom
4|Kingdom of Nri||nri
4|Ife|Ife Empire|ile ife
4|Hausa Kingdoms||hausa;kano;hausaland
4|Bamum Kingdom|Bamum Kingdom|bamum
4|Jolof Empire||jolof;wolof
4|Kaabu|Kaabu Empire
4|Mossi Kingdoms||mossi;yatenga kingdom
4|Kong Empire||kong
4|Wassoulou Empire||wassoulou;samori
4|Toucouleur Empire||toucouleur;tukulor
4|Bamana Empire||bambara empire;segou;segu empire
4|Kingdom of Alodia||alodia
4|Nobatia||nobadia;nobatae
4|Garamantes||garamantian kingdom;garamantian empire;garamantian
4|Ptolemaic Kingdom||ptolemaic;hellenistic egypt
4|Zirid dynasty||zirid
4|Marinid Sultanate||marinid
4|Hafsid dynasty||hafsid
4|Ayyubid dynasty||ayyubid
5|Kingdom of Kerma||kerma
5|Punt|Land of Punt|land punt;kingdom of punt
5|Dʿmt||dmt;kingdom of d'mt;da'amat
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
5|Kingdom of Semien||semien;kingdom of beta israel
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
1|Tokugawa Ieyasu||ieyasu;matsudaira motoyasu;tōshō daigongen
1|Toyotomi Hideyoshi||hideyoshi;kinoshita tōkichirō
2|Takeda Shingen||shingen
2|Uesugi Kenshin||kenshin;nagao kagetora
2|Date Masamune||masamune;one eyed dragon
2|Saigō Takamori||saigo takamori;saigo;last samurai
2|Minamoto no Yoshitsune||yoshitsune;ushiwakamaru
2|Sanada Yukimura|Sanada Yukimura|sanada nobushige;yukimura
2|Hattori Hanzō||hattori hanzo;hanzo
2|Akechi Mitsuhide||mitsuhide
2|Yasuke
3|Sasaki Kojirō||kojiro;sasaki kojiro;sasaki ganryu;ganryu;kojirou sasaki
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
3|Benkei|Saitō Musashibō Benkei|benkei;saito musashibo benkei;musashibo benkei
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
4|Okita Sōji||okita soji;souji okita
4|Sakamoto Ryōma||sakamoto ryoma;ryoma
5|Yagyū Munenori||munenori
5|Ittō Ittōsai||itto ittosai
5|Tsukahara Bokuden||bokuden
5|Kamiizumi Nobutsuna||nobutsuna;kamiizumi hidetsuna
5|Torii Mototada||mototada
5|Sanada Masayuki||masayuki
5|Sanada Nobuyuki||nobuyuki
5|Gamō Ujisato||ujisato
5|Hosokawa Tadaoki||tadaoki
5|Hosokawa Gracia||gracia
5|Ōtomo Sōrin||sorin;otomo yoshishige
5|Ryūzōji Takanobu||takanobu
5|Saitō Dōsan||dosan
5|Matsunaga Hisahide||hisahide
5|Miyoshi Nagayoshi||nagayoshi;miyoshi chōkei
5|Ōuchi Yoshitaka||yoshitaka
5|Murakami Yoshikiyo||yoshikiyo
5|Yamanaka Yukimori||yukimori;yamanaka shikanosuke
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
1|Mughal Empire||mughal;mughals;moghul empire;mogul empire;baburid empire
1|Maurya Empire||maurya;mauryan
1|Gupta Empire||gupta
2|Chola dynasty||chola;cholas;chodas
2|Maratha Empire|Maratha Confederacy|maratha;marathas;mahratta confederacy
2|Delhi Sultanate||delhi sultanate
2|Vijayanagara Empire||vijayanagara;vijayanagar;bijanagar;karnata empire;kingdom of bisnaga
2|Kushan Empire||kushan;kushans;kusana
2|Sikh Empire||sikh;khalsa raj
3|Satavahana dynasty||satavahana;andhra
3|Pala Empire||pala
3|Pallava dynasty||pallava;origin of pallava
3|Chalukya dynasty||chalukya;chalukyas;badami chalukya empire
3|Rashtrakuta dynasty||rashtrakuta
3|Pandya dynasty||pandya;pandyan empire;pandiyan dynasty;pandyan kingdom;pandiyan kingdom
3|Chera dynasty||chera;keralaputra;early cheras
3|Nanda Empire||nanda;nandvanshi
3|Shunga Empire||shunga;sunga
3|Pushyabhuti dynasty|Pushyabhuti dynasty|harsha;vardhana;empire harsha;kingdom of thanesar
3|Hoysala Empire||hoysala
3|Kakatiya dynasty||kakatiya
3|Bahmani Sultanate||bahmani
3|Lodi dynasty||lodi;lodi empire
3|Tughlaq dynasty||tughlaq
3|Khalji dynasty||khalji;khilji
3|Mamluk dynasty (Delhi)|Mamluk dynasty (Delhi)|slave dynasty
3|Mysore|Kingdom of Mysore|kingdom mysore
3|Hyderabad State||nizam;asaf jahi;hyderabad deccan;nizamate of hyderabad;princely state of hyderabad
4|Sayyid dynasty||sayyid
4|Sur Empire||sur;suri
4|Ahom kingdom||ahom;kingdom of assam
4|Mahameghavahana dynasty||kalinga;kharavela
4|Haryanka dynasty||haryanka;magadha
4|Shishunaga dynasty||shishunaga
4|Kanva dynasty||kanva
4|Gurjara-Pratihara||pratihara
4|Western Ganga dynasty||western ganga;ganga dynasty
4|Eastern Ganga dynasty||eastern ganga
4|Kadamba dynasty||kadamba
4|Kalachuri dynasty||kalachuri
4|Yadava dynasty|Seuna (Yadava) dynasty|yadava;seuna
4|Paramara dynasty||paramara
4|Chandela dynasty||chandela;kingdom of bundelkhand
4|Chahamanas of Shakambhari||chauhan;chahamana;sapadalaksha;kingdom of sambhar
4|Sena dynasty||sena;sena empire;sen dynasty
4|Vakataka dynasty||vakataka
4|Indo-Greek Kingdom||indo greek;yavana kingdom
4|Western Satraps||kshatrapa;western kshatrapas;western kshatrapa
4|Indo-Scythians||saka
4|Bengal Sultanate||bengal sultanate;sultans of bengal
4|Gujarat Sultanate||gujarat sultanate;sultanate of guzerat
4|Deccan sultanates||bijapur;golconda;ahmadnagar
4|Travancore|Kingdom of Travancore|kingdom of travancore;thiruvithamkoor
4|Durrani Empire||durrani;afghan empire;sadozai kingdom
5|Kosala
5|Kuru Kingdom||kuru
5|Panchala
5|Avanti|Avanti (India)
5|Vatsa
5|Licchavi|Licchavi (kingdom)
5|Mahajanapadas||kingdoms of ancient india
5|Vishnukundina dynasty||vishnukundina
5|Ikshvaku dynasty|Andhra Ikshvaku|ikshvaku
5|Maitraka dynasty||maitraka
5|Kamarupa||pragjyotisha
5|Chutiya Kingdom||chutiya;sutiya kingdom;kingdom of sadiya
5|Garhwal Kingdom||garhwal
5|Zamorin|Zamorin of Calicut|calicut;saamoothiri;samoothiri;samuthiri
5|Reddy dynasty||reddy;reddi kingdom
5|Musunuri Nayakas||musunuri
5|Nayakas of Madurai|Madurai Nayak dynasty|madurai nayak
5|Thanjavur Maratha kingdom||thanjavur maratha;rajah of tanjore;raja of thanjavur
6|Kingdom of Cochin||cochin;maharaja of cochin;kingdom of kochi;kochi rajas;perumpadapu swaroopam
6|Bhonsle|Bhonsle dynasty
6|Gaekwad dynasty||gaekwad;maharaja of baroda;gaekwar of baroda
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
1|Joseon||joseon dynasty;chosun;choson;great joseon state;kingdom of joseon
1|Goryeo||koryo;goryeo dynasty;kingdom of goryeo;gaoli
2|Silla||kingdom of silla;saro-guk
2|Goguryeo||koguryo
2|Baekje||paekche
2|Gojoseon||old joseon;dangun joseon
2|Korean Empire||daehan empire;empire of korea;great korean empire
3|Unified Silla|Unified Silla|later silla;united silla
3|Balhae||bohai;parhae
3|Gaya confederacy|Gaya confederacy|gaya;kaya;fall of the gaya confederacy;goryeong gaya
3|Three Kingdoms of Korea||three kingdoms;korean three kingdoms
3|Buyeo||puyo;bukbuyeo
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
1|Laozi||lao tzu;lao zi;laotze;lao tseu;li er
1|Sun Tzu||sunzi;sun wu
2|Mencius||mengzi;meng zi
2|Zhuangzi||chuang tzu;zhuang zhou
2|Mozi||mo tzu;mo di;mo ti;micius
2|Han Feizi||han fei;han fei tzu
2|Xunzi||hsun tzu;xun kuang
3|Zhu Xi||chu hsi
3|Wang Yangming||wang shouren
3|Dong Zhongshu
3|Shang Yang
3|Li Si
3|Gongsun Long||gongsun longzi
3|Hui Shi||huizi
3|Yang Zhu||yang chu
3|Liezi||lie yukou;lieh tzu
3|Guan Zhong||guanzi
3|Huineng
3|Han Yu
3|Wang Chong
3|Kang Youwei
3|Zengzi||zeng shen;zeng can
4|Zhou Dunyi||zhou maoshu
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
4|Xuanzang||huen tsang;hieun tsang;hiuen tsang;hiuen-tsiang
4|Linji Yixuan||linji
4|Shen Buhai
4|Shen Dao
4|Zou Yan
4|Xu Xing
4|Deng Xi
5|Li Zhi|Li Zhi (philosopher)
5|Yan Yuan|Yan Yuan (philosopher)
5|Zhang Xuecheng
5|Shao Yong||sau yung
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
5|Daoan||dao an
`,
nope:{
 'buddha|siddhartha':'Born in India &mdash; though Buddhism shaped Chinese thought enormously.',
 'mao|mao zedong':'A 20th-century political leader &mdash; outside this dig.',
 'plato|socrates|aristotle':'Wrong civilization &mdash; that\'s Greece!'
}},

{id:'seasia', cat:'Asia', q:'Name a historical kingdom or empire of Southeast Asia', hint:'Before 1900',
list:`
1|Khmer Empire||khmer;angkor;kambuja;angkorian empire;kambujadeśa
2|Srivijaya
2|Majapahit||kingdom of majapahit;wilwatikta
2|Ayutthaya Kingdom||ayutthaya;siam;ayuthia kingdom
2|Sukhothai Kingdom||sukhothai
2|Pagan Kingdom||pagan;bagan
2|Champa||kingdom of champa
2|Đại Việt||dai viet;đại cồ việt
3|Funan||kingdom of funan;nokor phnom
3|Lan Xang||lan xang;lane xang;kingdom of lan xang
3|Lan Na||lanna
3|Mataram Sultanate||mataram
3|Singhasari
3|Malacca Sultanate||malacca;melaka
3|Bruneian Empire||brunei;brunei sultanate;sultanate of brunei (1368-1888);bruneian sultanate (1368-1888)
3|Konbaung dynasty||konbaung;alaungpaya
3|Taungoo dynasty||toungoo;taungoo
3|Rattanakosin Kingdom||rattanakosin;bangkok kingdom;early rattanakosin
3|Nguyễn dynasty||nguyen;dai nam
3|Lê dynasty||le dynasty;later le
3|Trần dynasty||tran
3|Lý dynasty||ly dynasty;later lý dynasty
3|Chenla||zhenla;chân lạp
3|Aceh Sultanate||aceh
3|Sultanate of Sulu||sulu
4|Kediri Kingdom||kediri
4|Tarumanagara||taruma kingdom
4|Pyu city-states||pyu
4|Hanthawaddy Kingdom||hanthawaddy;pegu;kingdom of pegu
4|Mrauk U Kingdom||arakan;mrauk u
4|Ternate Sultanate||ternate
4|Tidore Sultanate||tidore
4|Sultanate of Maguindanao||maguindanao
4|Demak Sultanate||demak;kingdom of demak
4|Banten Sultanate||banten
4|Gowa Sultanate||gowa;makassar;sultanate of makassar;gowa kingdom
4|Medang Kingdom||medang;mataram kingdom
4|Sailendra dynasty||sailendra
4|Thonburi Kingdom||thonburi
4|Ava Kingdom||ava;inwa
4|Mon kingdoms|Mon kingdoms|mon
4|Dvaravati
4|Tambralinga
4|Langkasuka
4|Kingdom of Tondo||tondo
4|Rajahnate of Cebu||cebu;singhapala
4|Sultanate of Johor||johor
4|Tây Sơn dynasty||tay son
4|Hồ dynasty||ho dynasty
4|Mạc dynasty||mac dynasty
5|Kingdom of Sunda||sunda
5|Galuh Kingdom||galuh
5|Pajajaran||pakuan pajajaran
5|Kalingga Kingdom||kalingga;holing;heling kingdom
5|Kutai
5|Kingdom of Champasak||champasak;principality of champāsak
5|Kingdom of Luang Prabang||luang prabang
5|Kingdom of Vientiane||vientiane kingdom
5|Pattani Kingdom||pattani;sultanate of patani;sultanate of pattani
5|Kedah Sultanate||kedah
5|Ma-i
5|Rajahnate of Butuan||butuan;kingdom of butuan
5|Sultanate of Lanao||lanao
5|Bone State|Bone State|bone;bone sultanate
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
1|King Sejong the Great|Sejong the Great|sejong;king sejong;yi to
1|Yi Sun-sin||yi sun shin;admiral yi;lee sun-sin
2|Gwanggaeto the Great||gwanggaeto
2|Queen Seondeok of Silla||seondeok
2|Jumong|Dongmyeong of Goguryeo|dongmyeong;jumong;chumo of goguryeo;chumo the holy;chumong
2|Kim Yu-sin||kim yusin
2|Empress Myeongseong||queen min;myeongseong
2|Yu Gwan-sun||yu gwansun
2|Ahn Jung-geun||an jung geun
2|Kim Gu||kim koo
3|Wang Geon||taejo goryeo;wang kon;wang gun
3|Taejo of Joseon||yi seong gye;taejo joseon
3|Jang Bogo
3|Jeong Yak-yong||dasan
3|Heo Jun
3|Shin Saimdang||sin saimdang
3|Yi Hwang||toegye
3|Yi I||yulgok
3|Heungseon Daewongun||daewongun;yi ha-eung
3|Gojong of Korea||gojong;emperor gojong
3|Sunjong of Korea||sunjong
3|Eulji Mundeok
3|Yeon Gaesomun
3|Gyebaek
3|Jang Yeong-sil||jang yeongsil
3|Jeong Mong-ju||jeong mongju;chŏng mong-ju
3|Taejong of Joseon||taejong;yi bang won
3|Sejo of Joseon||sejo
3|Yeongjo of Joseon||yeongjo
3|Jeongjo of Joseon||jeongjo;yi san
3|Crown Prince Sado||sado
3|Hwang Jini||hwang chini;hwang jin-i
3|Seo Jae-pil||philip jaisohn;soh jaipil
3|Syngman Rhee||rhee;rhee syng-man
3|Dosan Ahn Chang-ho||ahn chang ho;an chang-ho
4|Wonhyo
4|Choe Chiwon
4|Uisang
4|Jangsu of Goguryeo||jangsu
4|Geunchogo of Baekje||geunchogo
4|Muryeong of Baekje||muryeong
4|Jinheung of Silla||jinheung
4|Munmu of Silla||munmu;kim beop-min
4|Gang Gam-chan||gang gamchan;kang kam-ch'an
4|Seo Hui
4|Kim Busik
4|Il-yeon||iryeon
4|Choe Yeong||choi young
4|Gwak Jae-u||gwak jaeu
4|Kim Jeong-ho||kim jeongho
4|Kim Hong-do||kim hongdo;danwon
4|Sin Yun-bok||hyewon
4|Heo Nanseolheon||heo nanseolheon
4|Heo Gyun||heo gyun
4|Choe Je-u||choe jeu
4|Jeon Bong-jun||jeon bongjun
4|Yun Bong-gil||yun bonggil;yoon bong-gil
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
5|Jeong Do-jeon||jeong dojeon;chŏng to-jŏn
5|Gwon Yul
5|Seosan Daesa|Hyujeong|hyujeong
5|Nongae
5|Queen Inhyeon||inhyeon
5|Jang Hui-bin||jang huibin;royal noble consort hui-bin jang
5|Lady Hyegyeong||hyegyeong
`,
nope:{
 'kim jong un|kim il sung|park chung hee':'20th-century or modern politics &mdash; outside this dig.',
 'genghis khan|kublai khan':'Mongol &mdash; they invaded Korea, but aren\'t Korean.'
}},

{id:'chinapeople', cat:'Asia', q:'Name a famous person from imperial China', hint:'Not an emperor &mdash; generals, poets, scholars, explorers&hellip; 221 BC&ndash;1912',
list:`
1|Zheng He||cheng ho;ma he;ma zheng
1|Cao Cao||cao aman
1|Zhuge Liang||kongming
1|Li Bai||li po;li bo;li tai-po
2|Guan Yu||guan di;guan gong;kwan tai;kwan ti
2|Liu Bei
2|Du Fu||tu fu
2|Sima Qian||ssu ma chien
2|Yang Guifei||yang yuhuan;consort yang yuhuan
2|Lin Zexu||lin tse hsu
2|Sun Quan
2|Xiang Yu
3|Lü Bu||lu bu;pu lu;ryofu
3|Zhou Yu
3|Zhao Yun||zilong;zhao zilong
3|Zhang Fei
3|Han Xin
3|Cai Lun||tsai lun
3|Zhang Qian||chang chien
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
3|Xuanzang||hsuan tsang;huen tsang;hieun tsang;hiuen tsang;hiuen-tsiang
3|Faxian||fa hsien;fa hian
3|Wang Anshi
3|Sima Guang
3|Ouyang Xiu
3|Zeng Guofan
3|Li Hongzhang
3|Hong Xiuquan
3|Qiu Jin
3|Sun Yat-sen||sun yatsen;sun zhongshan;sun wen
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
4|Di Renjie||dee renjie;ti jen-chieh
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
4|Xu Guangqi||paul xu
4|Matteo Ricci
4|Qi Jiguang
4|Yuan Chonghuan
4|Wu Sangui
4|Koxinga||zheng chenggong;cheng ch'eng-kung
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
4|Tang Yin||tang bohu
4|Dong Qichang
5|Fan Zhongyan
5|Kou Zhun
5|Bao Zheng||judge bao;justice bao;justice pao
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
1|Ashoka||asoka;ashoka great;piodasses
1|Chandragupta Maurya||chandragupta;sandrokottos
1|Gautama Buddha||buddha;siddhartha;siddhartha gautama;shakyamuni;sakyamuni;shaka nyorai;gautama
2|Chanakya||kautilya;vishnugupta
2|Akbar
2|Kalidasa
2|Aryabhata
2|Samudragupta
2|Porus
2|Mahavira||mahaveer;mahāvīr swami;nirgrantha jnatiputra;shri mahaveer ji
2|Prithviraj Chauhan||prithviraj;prithviraja iii;rai pithora
3|Chandragupta II||vikramaditya;chandragupta vikramaditya
3|Bindusara||amitraghata;amitrochates
3|Harsha|Harsha (emperor)|harshavardhana
3|Kanishka
3|Pulakeshin II||pulakesin;immadi pulikeshi
3|Rajaraja I||rajaraja chola;raja raja chola i;rajarajan
3|Rajendra I||rajendra chola
3|Krishnadevaraya||sri krishna deva raya
3|Brahmagupta
3|Panini
3|Sushruta
3|Charaka
3|Varahamihira
3|Bhaskara II||bhaskaracharya
3|Thiruvalluvar||tiruvalluvar;valluvar
3|Adi Shankaracharya||shankara;adi shankara;sankaracarya
3|Nagarjuna
3|Kabir||kabirdas
3|Guru Nanak||nanak
3|Mirabai||meera bai
3|Tulsidas
3|Rani Durgavati||durgavati
3|Rana Sanga||rana sangram singh
3|Maharana Pratap||rana pratap;pratap singh i;pratap singh of mewar;pratap singh, maharana of mewar
3|Babur
3|Alauddin Khalji||alauddin khilji;ali gurshasp
3|Razia Sultana||razia
3|Amir Khusrau||amir khusro;amir khosrow dehlavi;hazrat amir khusrau
4|Bimbisara
4|Ajatashatru||kunika
4|Mahapadma Nanda||mahapadma
4|Pushyamitra Shunga||pushyamitra
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
4|Amoghavarsha||nrupatunga
4|Mahendravarman I||mahendravarman
4|Narasimhavarman I||narasimhavarman
4|Kulottunga I||kulottunga;kulothunga chola i
4|Bhoja||raja bhoj
4|Vishnuvardhana
4|Ramanuja||ramanujacharya;sri ramanujacharya
4|Madhvacharya||madhva
4|Basava||basavanna;basaveshwara
4|Jayadeva||joydev
4|Bana|Banabhatta|banabhatta
4|Bhavabhuti
4|Kalhana
4|Valmiki
4|Vyasa||vedavyasa;ved vyas;vyasadeva;badarayana vyas
4|Patanjali
4|Vatsyayana
4|Madhava of Sangamagrama||madhava
4|Lalitaditya Muktapida||lalitaditya
4|Muhammad bin Tughluq||mohammad tughlaq
4|Ibn Battuta
4|Hemu|Hem Chandra Vikramaditya|hem chandra vikramaditya;hemu vikramaditya
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
5|Andal||aandaal
5|Karaikal Ammaiyar
5|Avvaiyar
5|Ilango Adigal
5|Kamban||kambar, tamil
5|Pampa|Adikavi Pampa
5|Annamacharya||annamayya
5|Purandara Dasa
5|Vidyaranya||madhavacharya of sringeri
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
3|Siege of Petersburg||petersburg;siege of richmond
3|Battle of Hampton Roads||hampton roads;monitor merrimack;monitor virginia
3|Seven Days Battles||seven days
3|Battle of Franklin|Battle of Franklin (1864)|franklin;second battle of franklin
3|Battle of Nashville||nashville
3|Chattanooga campaign||chattanooga;chattanooga–ringgold campaign
3|Battle of Stones River||stones river;murfreesboro;second battle of murfreesboro
3|Battle of Mobile Bay||mobile bay
3|Battle of Fort Donelson||fort donelson
3|Battle of Pea Ridge||pea ridge;elkhorn tavern
3|Battle of Wilson's Creek||wilsons creek
3|Valley campaign|Jackson's Valley campaign|shenandoah valley;valley campaign;jackson's valley campaign;stonewall jackson's valley campaign
3|Siege of Port Hudson||port hudson
3|Second Battle of Fort Wagner||fort wagner
3|Battle of Kennesaw Mountain||kennesaw mountain
3|Capture of New Orleans||new orleans
3|Peninsula campaign||peninsula
4|Battle of Brandy Station||brandy station
4|Battle of Perryville||perryville
4|Battle of Cedar Creek||cedar creek;battle of belle grove
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
4|Battle of Olustee||olustee;battle of ocean pond
4|Battle of Mansfield||mansfield;sabine crossroads
4|Battle of Westport||westport
4|Battle of Cedar Mountain||cedar mountain
4|Battle of Harpers Ferry||harpers ferry
4|Battle of South Mountain||south mountain
4|Battle of Lookout Mountain||lookout mountain;battle above the clouds
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
5|Battle of Picacho Pass||picacho pass;battle of picacho peak
5|Battle of Island Number Ten||island number ten;island no 10;battle of new madrid;battle of island number 10
5|First Battle of Memphis||memphis
5|Battle of Galveston||galveston;second battle of galveston
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
1|Battle of the Somme||somme;battle of the somme (1916);first battle of the somme
1|Battle of Verdun||verdun;first offensive battle of verdun;second offensive battle of verdun
1|Gallipoli campaign||gallipoli;dardanelles;defence of gallipoli;dardanelles campaign
1|First Battle of the Marne||marne;first marne;battle of the two morins;battle of the ourcq;marne 1914
2|Battle of Passchendaele||passchendaele;third ypres;ypres 1917;second battle of flanders
2|Battle of Jutland||jutland;skagerrak
2|Battle of Tannenberg||tannenberg
2|First Battle of Ypres||ypres;first ypres;wipers;ypres 1914
2|Battle of Vimy Ridge||vimy ridge;vimy;vimy, 1917
2|Battle of Cambrai (1917)|Battle of Cambrai (1917)|cambrai;first battle of cambrai
2|Battle of Amiens (1918)|Battle of Amiens (1918)|amiens;battle of montdidier
2|Hundred Days Offensive||hundred days;pursuit to mons;100 days offensive;advance to victory
2|German spring offensive||spring offensive;kaiserschlacht;ludendorff offensive;operation michael
2|Brusilov offensive||brusilov
3|Battle of Caporetto||caporetto;kobarid;twelfth battle of the isonzo
3|Battles of the Isonzo||isonzo
3|Battle of Arras (1917)|Battle of Arras (1917)|arras;battle of bullecourt;second battle of arras;third battle of the scarpe
3|Battle of Loos||loos
3|Battle of Mons||mons
3|Battle of the Frontiers||frontiers
3|Battle of Messines (1917)|Battle of Messines (1917)|messines
3|Second Battle of the Marne||second marne;battle of reims (1918);champagne-marne;battle of the marne (1918);aisne-marne offensive
3|Meuse–Argonne offensive||meuse argonne
3|Battle of Belleau Wood||belleau wood
3|Gorlice–Tarnów offensive||gorlice tarnow
3|First Battle of the Masurian Lakes||masurian lakes
3|Battle of Neuve Chapelle||neuve chapelle
3|Battle of Le Cateau||le cateau
3|Kerensky offensive||kerensky offensive;july offensive;june offensive
3|Siege of Kut||kut
3|Battle of Megiddo (1918)|Battle of Megiddo (1918)|megiddo
3|Battle of Beersheba (1917)|Battle of Beersheba (1917)|beersheba
3|Battle of Coronel||coronel
3|Battle of the Falkland Islands||falkland islands;falklands 1914;battle of the falklands
3|Second Battle of Ypres||second ypres;ypres 1915
3|Battle of Vittorio Veneto||vittorio veneto
3|Battle of the Piave River||piave;battle of solstizio
3|Battle of Cer||cer
3|Battle of Kolubara||kolubara
3|Arab Revolt||arab revolt;great arab revolt
3|Battle of Fromelles||fromelles
3|Battle of Saint-Mihiel||saint mihiel;st mihiel
3|Battle of Heligoland Bight (1914)|Battle of Heligoland Bight (1914)|heligoland bight;battle of heligoland (1914);first battle of heligoland bight
3|Battle of Dogger Bank (1915)|Battle of Dogger Bank (1915)|dogger bank
4|Battle of Aubers Ridge||aubers ridge
4|Battle of Liège||liege
4|Siege of Antwerp (1914)|Siege of Antwerp (1914)|antwerp
4|Siege of Przemyśl||przemysl
4|Battle of Galicia||galicia;battle of lemberg (1914)
4|Battle of Łódź (1914)|Battle of Łódź (1914)|lodz
4|Erzurum offensive||erzurum
4|Battle of Sarikamish||sarikamish
4|Battle of Romani||romani
4|First Battle of Gaza||gaza;first battle of gaza (1917)
4|Lake Naroch offensive||lake naroch
4|Battle of Doiran (1917)|Battle of Doiran (1917)|doiran
4|Battle of Château-Thierry (1918)|Battle of Château-Thierry (1918)|chateau thierry
4|Battle of Hamel||hamel
4|Battle of Mont Saint-Quentin||mont st quentin
4|Battle of the Hindenburg Line||hindenburg line
4|Siege of Tsingtao||tsingtao;qingdao
4|Battle of Tanga||tanga;battle of the bees
4|East African campaign (World War I)|East African campaign (World War I)|east african campaign;german east africa campaign
4|Battle of Ctesiphon (1915)|Battle of Ctesiphon (1915)|ctesiphon
4|Battle of Mărășești||marasesti
4|Battle of Kosturino||kosturino
4|Zeebrugge Raid||zeebrugge
4|Battle of the Aisne|First Battle of the Aisne|aisne;aisne 1914
4|Nivelle offensive||nivelle;chemin des dames
4|Battle of Flers–Courcelette||flers courcelette;battle of courcelette
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
5|Battle of Asiago||asiago;trentino offensive;strafexpedition
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
1|Battle of the Teutoburg Forest||teutoburg;teutoburg forest;varus disaster;clades variana
2|Battle of Zama||zama
2|Battle of Pharsalus||pharsalus
2|Battle of the Milvian Bridge||milvian bridge
2|Battle of Adrianople||adrianople
2|Battle of Carrhae||carrhae
2|Battle of Watling Street||watling street
2|Battle of Philippi||philippi;second battle of philippi;first battle of philippi
2|Battle of Lake Trasimene||trasimene;trasimeno
2|Battle of the Trebia||trebia
2|Battle of the Catalaunian Plains||catalaunian plains;chalons;battle of the catalaunian fields
3|Battle of Cynoscephalae||cynoscephalae
3|Battle of Pydna||pydna
3|Battle of Magnesia||magnesia
3|Battle of Heraclea||heraclea
3|Battle of Asculum||asculum
3|Battle of the Allia||allia;gallic sack of rome;sack of rome (387 bc)
3|Battle of Arausio||arausio
3|Battle of Aquae Sextiae||aquae sextiae
3|Battle of Vercellae||vercellae;battle of the raudian field
3|Battle of Munda||munda
3|Battle of Thapsus||thapsus
3|Battle of Mons Graupius||mons graupius
3|Battle of Dyrrhachium (48 BC)|Battle of Dyrrhachium (48 BC)|dyrrhachium
3|Battle of Mylae||mylae
3|Battle of the Aegates||aegates;aegates islands
3|Battle of Ilipa||ilipa;battle of carmona
3|Battle of the Metaurus||metaurus
3|Battle of Bibracte||bibracte
3|Battle of Gergovia||gergovia
3|Siege of Masada||masada
3|Siege of Jerusalem (70 CE)|Siege of Jerusalem (70 CE)|jerusalem 70;destruction of jerusalem
3|Battle of the Caudine Forks||caudine forks
3|Siege of Carthage (Third Punic War)|Siege of Carthage (Third Punic War)|carthage 146;sack carthage;destruction of carthage;fall of carthage
3|Siege of Syracuse (213–212 BC)|Siege of Syracuse (213–212 BC)|syracuse;siege of syracuse (214–212 bc);siege of syracuse (214–212 bce)
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
4|Battle of the Frigidus||frigidus;6 september 394
4|Battle of Abritus||abritus
4|Battle of Naissus||naissus
4|Battle of Mursa Major||mursa
4|Battle of Ctesiphon (363)|Battle of Ctesiphon (363)|ctesiphon
4|Battle of Pollentia||pollentia
4|Siege of Numantia||numantia
4|Battle of Agrigentum||agrigentum
4|Battle of Cape Ecnomus||ecnomus
4|Battle of Drepana||drepana;battle of drepanum
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
5|Battle of Vesuvius||vesuvius;battle of veseris
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
1|Battle of Thermopylae||thermopylae;300;300 spartans
1|Battle of Marathon||marathon
1|Battle of Salamis||salamis
2|Battle of Plataea||plataea
2|Battle of Gaugamela||gaugamela;arbela
2|Battle of Issus||issus;first battle of issus
2|Battle of the Granicus||granicus
2|Battle of Leuctra||leuctra
2|Battle of Chaeronea (338 BC)|Battle of Chaeronea (338 BC)|chaeronea
3|Battle of the Hydaspes||hydaspes;jhelum
3|Battle of Mycale||mycale
3|Battle of Artemisium||artemisium
3|Battle of Aegospotami||aegospotami
3|Battle of Mantinea (362 BC)|Battle of Mantinea (362 BC)|mantinea
3|Sicilian Expedition||syracuse;sicilian expedition;syracusan expedition;athenian expedition
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
3|Siege of Calais (1346–1347)|Siege of Calais (1346–1347)|calais;siege of calais (1346-47)
3|Battle of La Rochelle||la rochelle;defeat at la rochelle
3|Battle of Cocherel||cocherel
3|Battle of Nájera||najera;navarrete
3|Battle of Neville's Cross||nevilles cross;battle of durham
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
4|Battle of Caen (1346)|Battle of Caen (1346)|caen;storming of caen
4|Battle of Blanchetaque||blanchetaque
4|Siege of Montargis||montargis
4|Battle of Lagny||lagny
4|Battle of Saint-Jacques-sur-la-Birse||st jakob an der birs;saint jacques
4|Battle of Montiel||montiel;battle of campo de montiel
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
1|Battle of Midway||midway;battle for midway
1|Battle of Salamis||salamis
1|Battle of Jutland||jutland
1|Spanish Armada||armada;spanish armada
2|Battle of Lepanto||lepanto
2|Battle of Actium||actium
2|Battle of the Coral Sea||coral sea
2|Battle of Leyte Gulf||leyte gulf;battle for leyte gulf;battle of sibuyan sea
2|Battle of Tsushima||tsushima
2|Battle of Hampton Roads||hampton roads;monitor merrimack
2|Battle of the Nile||nile;aboukir bay
2|Battle of the Atlantic||atlantic;second battle of the atlantic;battle of the north atlantic
2|Battle of Navarino||navarino
2|Attack on Pearl Harbor||pearl harbor;japanese attack on pearl harbor;bombing of pearl harbor;december 7, 1941;attacked pearl harbor
3|Battle of the Chesapeake||chesapeake;virginia capes
3|Battle of Sluys||sluys
3|Battle of Svolder||svolder;svold
3|Battle of Hjörungavágr||hjorungavagr;jomsvikings
3|Battle of Red Cliffs||red cliffs;chibi
3|Battle of Myeongnyang||myeongnyang
3|Battle of Hansan Island||hansan;battle of hansando
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
3|Raid on the Medway||medway;dutch attack on the medway
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
3|Battle of Taranto||taranto;attack on taranto;raid on taranto
3|Battle of the Philippine Sea||philippine sea;great marianas turkey shoot
3|Battle of Savo Island||savo island
3|Battle of the North Cape||north cape
3|Battle of Coronel||coronel
3|Battle of Dogger Bank (1915)|Battle of Dogger Bank (1915)|dogger bank
3|Battle of Gangut||gangut;hanko;battle of ahvenanmaa
3|Battle of Chesma||chesma;cesme
3|Battle of Sinop||sinop;sinope
3|Battle of Lake Erie||lake erie
3|Battle of Diu (1509)|Battle of Diu (1509)|diu
3|Battle of Preveza||preveza
3|Battle of Bạch Đằng (1288)|Battle of Bạch Đằng (1288)|bach dang
4|Battle of Svensksund||svensksund;ruotsinsalmi;second battle of svensksund;rochensalm
4|Battle of Køge Bay (1677)|Battle of Køge Bay (1677)|koge bay
4|Battle of the Sound||sound;oresund
4|Battle of Hogland||hogland
4|Battle of Heligoland (1864)|Battle of Heligoland (1864)|heligoland 1864
4|Battle of Grand Port||grand port
4|Battle of Lissa (1811)|Battle of Lissa (1811)|lissa 1811
4|Battle of Valcour Island||valcour island;battle of lake champlain (1776)
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
4|Battle of Fehmarn (1644)|Battle of Fehmarn (1644)|fehmarn;action of 13 october 1644
4|Battle of Kentish Knock||kentish knock
4|Battle of Scheveningen||scheveningen
4|Battle of Texel||texel
4|Battle of Lowestoft||lowestoft
5|Battle of Ushant (1778)|Battle of Ushant (1778)|ushant;first battle of ushant
5|Battle of Dogger Bank (1781)||dogger bank 1781
5|Battle of Algeciras||algeciras
5|Battle of Basque Roads||basque roads
5|Battle of Cape Finisterre (1805)|Battle of Cape Finisterre (1805)|cape finisterre
5|Battle of Pulo Aura||pulo aura
5|Battle of Riachuelo||riachuelo
5|Battle of Angamos||angamos;naval battle of angamos
5|Battle of Iquique||iquique;naval battle of iquique
5|Battle of Fuzhou||fuzhou;foochow
5|Battle of Weihaiwei||weihaiwei
5|Battle of the Gulf of Riga||gulf riga
5|Battle of Elli||elli;naval battle of elli
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
1|Hundred Years' War||hundred years war;100 year war;100 years war
1|American Civil War||civil war;us civil war;united states civil war;usa civil war
1|Napoleonic Wars||napoleonic
1|American Revolutionary War||american revolution;war independence;revolutionary war;war of american independence;united states war of independence;american war for independence;us revolutionary war
1|Peasants' Revolt||english peasants' revolt of 1381;english peasant revolt;wat tyler's rebellion
1|Boxer Rebellion||boxer uprising;boxer war;boxer rising
2|Peloponnesian War||peloponnesian war;second peloponnesian war;archidamian war
2|Thirty Years' War||thirty years war;30 years war;30 year war
2|Seven Years' War||seven years war;7 years war;7 year war
2|Punic Wars||punic war;punic;carthaginian wars
2|Wars of the Roses||roses
2|Crimean War||crimean
2|Opium Wars||opium war;first opium war
2|War of 1812||1812;american war of 1812;anglo-american war of 1812;second american revolution;invasion of canada (1812)
2|English Civil War||english civil war
2|Greco-Persian Wars||persian wars
2|Gallic Wars||gallic war;conquest of gaul;caesar's conquest of gaul;roman conquest of gaul;roman invasion of gaul
2|Franco-Prussian War||franco prussian;franco-german war of 1870;franco-german war;war of 1870
2|First Crusade||princes' crusade
2|Philippine–American War||philippine insurrection;filipino-american war;filipino insurrection;philippine war
2|Peninsular War||spanish war of independence;spanish independence war;napoleonic invasion of spain;war of spanish independence
2|Third Crusade
2|American Indian Wars||indian wars;plains wars;plains indian wars;native american wars
2|War of the First Coalition
2|French Revolutionary Wars||wars of the french revolution
2|Haitian Revolution||haitian slave revolt;st. domingue slave revolt
3|Mexican–American War||mexican american war;u.s.-mexican war;war with mexico
3|Boer War|Second Boer War|second boer war;anglo boer war;second anglo-boer war;south african war
3|Spanish–American War||spanish american war
3|First Sino-Japanese War||sino japanese war;sino-japanese war (1894-1895)
3|Anglo-Zulu War||zulu war
3|Great Northern War||great northern war;great nordic war;third northern war
3|War of the Spanish Succession||spanish succession
3|War of the Austrian Succession||austrian succession
3|Eighty Years' War||eighty years war;dutch revolt;dutch war of independence;revolt of the netherlands;hispano-dutch war;80 years war
3|Wars of the Three Kingdoms||three kingdoms wars;british civil wars;british civil war
3|Hussite Wars||hussite
3|Reconquista
3|Samnite Wars||samnite
3|Jewish–Roman wars||jewish roman wars;first jewish roman war;roman-jewish war
3|Macedonian Wars||macedonian war;roman-macedonian wars
3|Wars of the Diadochi||diadochi
3|Norman Conquest||norman conquest;norman invasion of 1066;conquest of england;norman invasion;norman invasion of england
3|Mongol invasions||mongol conquests
3|Imjin War||japanese invasions korea;japanese invasion of joseon;chŏngyu war
3|Boshin War||boshin
3|Satsuma Rebellion||satsuma;seinan war
3|Taiping Rebellion||taiping;taiping civil war
3|Paraguayan War||war triple alliance;triple alliance;war of paraguay
3|War of the Pacific||war pacific
3|Austro-Prussian War||seven weeks war;war of 1866;unification war;german war
3|Russo-Turkish War (1877–1878)|Russo-Turkish War (1877–1878)|russo turkish war;eleventh russo-turkish war;russo-turkish war of 1877-78;russo-ottoman war (1877-1878);russo-turkish war of 1877-8
3|Greek War of Independence||greek independence;greek revolution of 1821;greek revolt
3|Indian Rebellion of 1857||indian mutiny;sepoy mutiny;1857;sepoy rebellion;indian rebellion;mutiny of 1857;revolt of 1857;first war of indian independence;indian war of independence;indian war of 1857;1857 rebellion;uprising of 1857;sepoy revolt;war of independence of 1857
3|French and Indian War||french indian war
3|Anglo-Dutch Wars||anglo dutch war;dutch wars
3|Italian Wars||italian wars;habsburg–valois wars;french wars in italy
3|French Wars of Religion||wars religion;huguenot wars;franco-spanish war (1595–98);franco-spanish war (1595–1598);french religious wars
3|Jacobite risings||jacobite;jacobite rebellion;jacobite uprising;jacobite wars
3|Second Schleswig War||schleswig war;dano prussian war;danish-prussian war;second schleswig-holstein war;german-danish war;prusso-danish war
3|First Schleswig War||three years war denmark
3|Fourth Crusade
3|Mexican War of Independence
3|First Barbary War||tripolitan war
3|War of the Sixth Coalition||german war of liberation
3|War of the Third Coalition||calabrian insurrection
3|Albigensian Crusade||albigensian war
3|June Rebellion
3|Great Turkish War||habsburg-ottoman war (1683–1699);austro-turkish war (1683–1699);war of the holy league (1683–1699);vienna war (1683-1699)
3|War in the Vendée||revolt in the vendée;vendée revolt;vendée uprising;vendee peasant rising
3|Whiskey Rebellion
3|War of the Fourth Coalition
3|German Peasants' War||german peasants' revolt
3|Second Crusade
3|Mahdist War||mahdist revolution;mahdist revolt
3|Wars of Alexander the Great||alexander's invasion of persia;alexander's conquest of persia;alexander's conquest of egypt
3|Third Servile War||gladiator war
3|Utah War||utah mormon war
3|Second Punic War||hannibalic war;hannibal's invasion of italy
4|Pastry War||pastry;first franco-mexican war
4|Anglo-Zanzibar War||zanzibar war;shortest war;british-zanzibar war
4|War of Jenkins' Ear||jenkins ear
4|Pig War|Pig War (1859)|pig war
4|War of the Bucket||bucket;war of the oaken bucket
4|Kalmar War||kalmar
4|Northern Seven Years' War||northern seven years war;nordic seven years' war;scandinavian seven years' war
4|Scanian War||scanian;swedish-brandenburg war;gyldenløve war
4|Anglo-Afghan Wars|First Anglo-Afghan War|anglo afghan war;first afghan war
4|Anglo-Sikh Wars|First Anglo-Sikh War|anglo sikh war
4|Anglo-Maratha Wars||anglo maratha
4|Anglo-Burmese Wars|First Anglo-Burmese War|anglo burmese war;first burmese war
4|Anglo-Ashanti wars||ashanti war;anglo-asante wars;anglo-asante war
4|Xhosa Wars||xhosa wars;cape frontier wars;war of the axe;sixth frontier war;kaffir wars;kaffir war
4|New Zealand Wars||maori wars;new zealand land wars
4|Black Hawk War||black hawk
4|Seminole Wars||seminole;florida seminole wars;seminole indian war
4|Great Sioux War of 1876||great sioux war;sioux war;black hills war;lakota war;great sioux war of 1876-77;great sioux war of 1876–1877
4|Texas Revolution||texas revolution;texas war for independance;texas war of independence;texian revolution;texan war of independence;texian revolt
4|King Philip's War||king philips war
4|Pequot War||pequot
4|Queen Anne's War||queen annes war
4|Nine Years' War||nine years war;war grand alliance;war of the league of augsburg;war of the palatinate succession;war of the palatine succession;war of the english succession;9 years war
4|Franco-Dutch War||franco dutch war
4|The Anarchy||anarchy
4|War of the Sicilian Vespers||sicilian vespers;war of the vespers;war of the vesper
4|Second Barons' War||barons war
4|Irish Confederate Wars||confederate wars;eleven years war
4|Cromwellian conquest of Ireland||cromwellian conquest;cromwellian invasion of ireland
4|Russo-Persian Wars||russo persian war;russo-iranian wars
4|Russo-Swedish War (1808–1809)|Finnish War|finnish war;war of finland
4|Hundred Days||hundred days;war of the seventh coalition
4|Byzantine–Sasanian wars||byzantine sasanian;roman–iranian wars;byzantine-sassanid wars;roman–sasanian wars;roman-persian wars
4|Arab–Byzantine wars||arab byzantine;roman-arab wars
4|Wars of Scottish Independence||scottish independence
4|Platine War||platine
4|Ragamuffin War||ragamuffin;farrapos;farroupilha revolution;war of the ragamuffins;war of tatters
4|Reform War||reform war
4|Franco-Mexican War|Second French intervention in Mexico|french intervention mexico;second franco-mexican war
4|Sino-French War||sino french;franco-chinese war
4|Second Opium War||arrow war;second anglo-chinese war;third china war;second china war
4|War of the Second Coalition
4|Shays's Rebellion
4|Irish Rebellion of 1798||1798 rebellion;1798 rising;united irishmen rebellion;united irishmen rebellion of 1798
4|First Boer War||first anglo-boer war;transvaal war
4|Maccabean Revolt
4|Lincoln County War
4|Beaver Wars||iroquois wars;french and iroquois wars;huron-iroquois war
4|Nat Turner's Rebellion||turner's rebellion;southampton insurrection;nat turner's slave rebellion
4|Genpei War||jishō-juei war
4|War of the Fifth Coalition
4|Toledo War
4|First Barons' War
4|Yellow Turban Rebellion||yellow scarves rebellion
4|January Uprising||1863 uprising;polish uprising of 1863;1863 polish revolution
4|Gothic War (535–554)||gothic war (535–552);gothic wars (6th century);gothic war (6th century)
4|First English Civil War
4|Pontiac's War||pontiacs rebellion
4|War of Actium||final war of the roman republic;roman conquest of egypt;last war of the roman republic;conquest of ptolemaic egypt
4|Granada War||conquest of granada
4|Dakota War of 1862||us-dakota war of 1862;dakota war;sioux uprising
4|Social War (91–87 BC)||social war;social war (90–88 bc);marsic war;social war (91-88 bc)
4|First Italo-Ethiopian War||first italo-abyssinian war
4|Zanj Rebellion||zanj revolt
4|Anglo-Spanish War (1585–1604)||anglo–spanish war (1585)
4|November Uprising||november insurrection;uprising of 1831;polish uprising of 1831
4|Kalinga War
4|Sixth Crusade
4|Fifth Crusade
4|1838 Mormon War||missouri mormon war
4|Shimabara Rebellion||shimabara uprising
4|Williamite War in Ireland||williamite war;war of the two kings;williamite wars
4|Marcomannic Wars
4|Greco-Turkish War (1897)
4|Cuban War of Independence||war of '95
4|Ōnin War
4|Second English Civil War
4|Black War
4|King William's War||second indian war
4|Seventh Crusade
4|Khmelnytsky Uprising||chmielnicki uprising;khmelnytsky rebellion
4|Pueblo Revolt||pueblo rebellion
4|Red Cloud's War
4|Northwest Indian War
4|Caucasian War||caucasus war
4|Dominican War of Independence
4|Johnson County War
4|Pyrrhic War
4|Franco-Spanish War (1635–1659)||franco-spanish war (1635);franco-spanish war (1635-59)
4|Apache Wars
4|Portuguese Restoration War||acclamation war
4|Peasants' War (1798)
4|Eighth Crusade
4|Kościuszko Uprising||uprising of 1794;kosciuszko insurrection
4|First War of Scottish Independence
4|Second Italian War of Independence||austro-sardinian war;franco-austrian war
4|First Punic War
4|Third Punic War
4|Byzantine–Sasanian War of 602–628||byzantine-sassanid war of 602–628;byzantine–sassanid war of 602–28
4|Second Anglo-Afghan War||second afghan war;roberts's war
4|Second Anglo-Dutch War||second dutch war
4|Third Anglo-Dutch War
4|Third Anglo-Maratha War||pindari war;pindaree war;third mahratta war;third maratha war
4|Second Seminole War
4|First Italian War of Independence
4|Philippine Revolution||philippine revolutionary war;tagalog war
5|Livonian War||livonian
5|Dacke War||dacke
5|Count's Feud||counts feud;count's war
5|Torstenson War||torstenson;hannibal war
5|War of the Polish Succession||polish succession
5|War of the Bavarian Succession||potato war;bavarian succession
5|War of the Quadruple Alliance||quadruple alliance
5|War of Devolution||devolution
5|Russo-Swedish War (1788–1790)|Russo-Swedish War (1788–1790)|gustav 3 russian war;gustav iii's russian war;russo-swedish war (1788–90)
5|Theatre War|Theatre War|cowberry war
5|Gunboat War||gunboat war
5|Swedish–Norwegian War (1814)|Swedish–Norwegian War (1814)|swedish norwegian war;norwegian war of independence
5|Hat's Russian War||hats russian war
5|Herzegovina uprising (1875–1877)||herzegovina uprising;herzegovina uprising (1875–77);herzegovina uprising (1875–78);herzegovina uprising (1875-1878)
5|War of Chioggia||chioggia war
5|Ottoman–Habsburg wars||ottoman habsburg
5|Cimbrian War
5|Long Turkish War||long war;long war (1591–1606);austro-turkish war (1593–1606)
5|Second Barbary War
5|Cologne War
5|Anglo-Egyptian War||british-egyptian war;second anglo-egyptian war;british conquest of egypt (1882)
5|Crusade of 1101
5|Monmouth Rebellion
5|North-West Rebellion
5|First Carlist War
5|Crusade of Varna
5|Sonderbund War
5|Dutch–Portuguese War||luso-dutch war
5|Russo-Turkish War (1768–1774)||sixth russo-turkish war;russo-turkish war of 1768–74
5|Stono Rebellion||stono river slave rebellion site
5|Musket Wars
5|Austro-Turkish War (1788–1791)||austro-turkish war (1787–91);austro-turkish war (1788–91);austro-turkish war (1787-1791)
5|Ionian Revolt
5|Third Mithridatic War
5|Creek War||red stick war;creek indian war
5|Anglo-Nepalese War||the gurkha war;gorkha war;nepal war;anglo-nepali war;ghoorka war;anglo-gorkha war
5|Conquest of the Desert
5|Pugachev's Rebellion||pugachev uprising
5|Ridda Wars||wars of apostasy
5|Dungan Revolt (1862–1877)||dungan revolt (1862–77);hui minorities' war;muslim rebellion
5|Ten Years' War
5|Thousand Days' War
5|Saxon Wars
5|Anglo-French War (1778–1783)||anglo-french war (1778–83);anglo-french war 1778
5|Brazilian War of Independence||war of independence of brazil
5|Argentine War of Independence||argentinian war of independence
5|Cretan War (1645–1669)||cretan war (1645–69);war of candia;candian war;ottoman conquest of crete
5|First Mithridatic War
5|Bishops' Wars
5|Mithridatic Wars
5|Cisplatine War||argentine–brazilian war;argentina-brazil war
5|Egyptian–Ottoman War (1839–1841)||egyptian–ottoman war (1839–41);second turko-egyptian war;second egyptian-ottoman war
5|Ottoman–Mamluk War (1516–1517)||ottoman–mamluk war (1516–17);ottoman conquest of egypt
5|Iberian War
5|Conquest of Wales by Edward I||conquest of wales;edwardian conquest of wales;welsh uprising (1282)
5|Serbo-Bulgarian War
5|Ottoman–Safavid War (1623–1639)||ottoman–safavid war (1623–39)
5|Second Anglo-Maratha War||second maratha war
5|Third Italian War of Independence
5|Fourth Anglo-Dutch War
5|First Anglo-Maratha War
5|Second Anglo-Sikh War||second sikh war
5|Italian War of 1494–1495||first italian war;italian war of 1494-1498;italian war of 1494-98;charles viii's italian war
5|First Anglo-Dutch War||first dutch war
5|Russo-Persian War (1804–1813)||russo-persian war (1804–13)
5|Second War of Scottish Independence
5|Serbian Revolution
6|War of the League of Cambrai||league cambrai;anglo-french war (1512–14);war of the holy league (1511–1514)
6|War of the Eight Saints||eight saints
6|Toggenburg War||toggenburg;second war of villmergen
6|Old Zürich War||old zurich war
6|Swabian War||swabian war
6|Mughal–Safavid war (1649–1653)||mughal safavid war;mughal–safavid war (1649–53)
6|Russo-Persian War (1826–1828)||russo-persian war (1826–28)
6|Third Anglo-Burmese War||third burmese war
6|Third Macedonian War
6|Italian War of 1551–1559||italian war of 1551–59;italian war of 1551
6|Italian War of 1521–1526||italian war of 1521–26;italian war of 1521
6|First Macedonian War
6|Italian War of 1542–1546||italian war of 1542–46
6|Second Macedonian War
6|Russo-Persian War (1722–1723)||russo-persian war (1722–23)
6|Byzantine–Sasanian War of 572–591||byzantine–sassanid war of 572–591;roman–persian war of 572–591
6|Ingrian War
6|Second Mithridatic War
6|Roman–Sasanian War of 421–422||roman-sassanid war (421-422)
6|First Bishops' War
6|Karonga War
`,
nope:{
 'world war 1|world war 2|first world war|second world war|vietnam war|korean war|cold war':'Twentieth century &mdash; this dig stops at 1900.',
 'star wars|war worlds':'Fiction!',
 'trojan war':'A legendary war &mdash; Homer\'s, not history\'s.'
},
amb:{
 'mexican war':'Which one? The Mexican&ndash;American War or the Mexican War of Independence?'
}},

{id:'commanders', cat:'Wars & Battles', q:'Name a famous military commander from before 1900', hint:'Generals, admirals and warlords',
list:`
1|Napoleon||napoleon bonaparte;bonaparte;nepolian;little corporal
1|Alexander the Great||alexander;sikandar-e-azam;alejandro magno
1|Julius Caesar||caesar;divus iulius;julius ceaser
1|Hannibal||hannibal barca
1|Genghis Khan||genghis;chinggis;chingiz khan;chengiz khan;chenghiz khan;changez khan
2|Duke of Wellington|Arthur Wellesley, 1st Duke of Wellington|wellington;arthur wellesley;1st duke of wellington;marquis of torres vedras
2|Horatio Nelson||nelson;admiral nelson;lord nelson
2|Robert E. Lee||lee;robert lee;robert edward lee;gen. robert e. lee
2|Ulysses S. Grant||grant
2|Saladin||salah ad-din al-ayubi;salahuddin ayyubi;salahadin;salahuddin ayyub
2|Sun Tzu||sunzi
2|Frederick the Great||frederick 2 prussia;friedrich ii of prussia;friedrich the great
2|Scipio Africanus||scipio;publius cornelius scipio africanus
2|Attila||attila hun;atilla;atilla the hun
2|Spartacus
2|Joan of Arc||jeanne darc;la pucelle;saint joan of arc;st. joan of arc;jehanne
2|Stonewall Jackson||jackson;thomas jackson
2|William Tecumseh Sherman||sherman;tecumseh sherman
2|George Washington||washington
2|Timur||tamerlane;timurleng;sahib qiran;amir temur
3|Gustavus Adolphus||gustav 2 adolf;gustavus;gustav ii;gustav ii adolph
3|Duke of Marlborough|John Churchill, 1st Duke of Marlborough|marlborough;john churchill;1st duke of marlborough
3|Prince Eugene of Savoy||eugene savoy
3|Albrecht von Wallenstein||wallenstein;albrecht von waldstein
3|Count of Tilly|Johann Tserclaes, Count of Tilly|tilly;johan tzerclaes, count of tilly;johan t'serclaes, count of tilly;johann tserclaes;johann tserclaes count of tilly
3|Turenne|Henri de La Tour d'Auvergne, Viscount of Turenne|turenne;henri de la tour d'auvergne
3|Belisarius
3|Charles Martel||martel;karl martell
3|El Cid||cid
3|Babur
3|Shivaji||chhatrapati shivaji maharaj;chatrapati shivaji maharaj;sher shivraj;raja shivchatrapati
3|Oda Nobunaga||nobunaga
3|Tokugawa Ieyasu||ieyasu;matsudaira motoyasu;tōshō daigongen
3|Toyotomi Hideyoshi||hideyoshi;kinoshita tōkichirō
3|Yi Sun-sin||yi sun shin;lee sun-sin
3|Zhuge Liang
3|Cao Cao||cao aman
3|Khalid ibn al-Walid||khalid ibn walid;khalid bin waleed;khalid ibn al-waleed
3|Subutai||subotai;subedei
3|Vercingetorix
3|Arminius||hermann
3|Leonidas I||leonidas
3|Themistocles
3|Epaminondas
3|Philip II of Macedon||philip 2;philip the great;phillip of macedon;philip of macedonia
3|Pyrrhus of Epirus||pyrrhus
3|Gaius Marius||marius
3|Sulla||lucius cornelius sulla felix
3|Pompey||gnaeus pompeius magnus;pompeians;pompeius;gnaeus pompey magnus
3|Mark Antony||antony
3|Simón Bolívar||bolivar
3|José de San Martín||san martin
3|Toussaint Louverture||louverture
3|Mikhail Kutuzov||kutuzov
3|Alexander Suvorov||suvorov;alexander vasilyevich suvorov
3|Gebhard Leberecht von Blücher||blucher
3|Michel Ney||ney;marshal ney;marshall ney
3|Joachim Murat||murat
3|Louis-Nicolas Davout||davout
3|Helmuth von Moltke the Elder||moltke;helmuth karl bernhard von moltke;helmuth graf von moltke;helmut von moltke
3|George Armstrong Custer||custer
3|Shaka||shaka zulu
3|Giuseppe Garibaldi||garibaldi
3|Crazy Horse||chief crazy horse
3|Geronimo
3|Charles XII of Sweden||charles 12;karl 12;carolus rex
3|Peter Wessel Tordenskiold||tordenskjold;tordenskiold;peder tordenskjold
4|Narses
4|Aetius|Flavius Aetius|flavius aetius
4|Stilicho
4|Agrippa|Marcus Vipsanius Agrippa
4|Germanicus||julius caesar germanicus
4|Han Xin
4|Bai Qi
4|Yue Fei
4|Qi Jiguang
4|Hernán Cortés||cortes
4|Francisco Pizarro||pizarro
4|Jan Žižka||zizka
4|John Hunyadi||hunyadi;iancu de hunedoara;sibinjanin janko
4|Skanderbeg||george kastrioti
4|Vlad the Impaler||vlad dracula;vlad iii of wallachia;vlad iii țepeș;vladimir dracula;vlad iii dracul
4|Edward the Black Prince||black prince
4|Bertrand du Guesclin||du guesclin;bertrand de guesclin
4|Great Condé|Louis, Grand Condé|conde;louis ii de bourbon
4|Vauban|Sébastien Le Prestre de Vauban
4|Maurice of Nassau||maurice nassau;maurice of orange
4|Oliver Cromwell||cromwell
4|Thomas Fairfax||fairfax
4|Prince Rupert of the Rhine||prince rupert
4|James Wolfe||wolfe
4|Louis-Joseph de Montcalm||montcalm
4|Nathanael Greene||greene
4|Marquis de Lafayette||lafayette;gilbert du motier
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
4|Philip Sheridan||sheridan;philip henry sheridan
4|Nathan Bedford Forrest||forrest
4|Antonio López de Santa Anna||santa anna
4|Bernardo O'Higgins||ohiggins
4|Antonio José de Sucre||sucre
4|Admiral Tōgō Heihachirō||togo heihachiro;togo
4|Saigō Takamori||saigo
4|Cetshwayo
4|Sitting Bull||chief sitting bull;tatanka iyotake
4|Tecumseh
4|Samori Ture||samori
4|Menelik II||menelik;menelek ii of ethiopia
4|Abd al-Qadir al-Jaza'iri||abd al qadir;abdelkader el djezairi;abd al-kader al-jazairi;emir abdelkader al-jazairi
4|Imam Shamil||shamil
4|Nader Shah||nadir shah
4|Mehmed II||mehmed conqueror
4|Suleiman the Magnificent||suleiman;suleyman i;süleyman i the magnificent
4|Baybars
4|Tariq ibn Ziyad||tariq
4|Mahmud of Ghazni||mahmud ghazni;mahmud of ghaznavid
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
5|Majorian||julius valerius majorianus;maiorianus
5|Flavius Ricimer||ricimer
5|Heraclius
5|John Tzimiskes||tzimiskes;john i tzimisces
5|Bohemond of Taranto||bohemond;bohemund i of antioch
5|Godfrey of Bouillon||godfrey bouillon;godefroy de bouillon;geoffrey de bouillon;godfroi de bouillon
5|Jebe
5|Muqali
5|Batu Khan||batu
5|Tomás de Zumalacárregui||zumalacarregui
5|Radetzky|Joseph Radetzky von Radetz|radetzky
5|Kościuszko|Tadeusz Kościuszko|kosciuszko;thaddeus kosciusko
5|Józef Poniatowski||poniatowski
5|Eugène de Beauharnais||beauharnais;eugène, duke of leuchtenberg
5|Jean-Baptiste Bernadotte|Charles XIV John|bernadotte;karl johan;charles xiv john of sweden;charles xiv & iii john;charles xiv of sweden;carl xiv johan of sweden
5|Carl Gustaf Armfeldt||armfeldt
5|Lennart Torstensson||torstensson
5|Johan Banér||baner
5|Magnus Stenbock||stenbock
5|Ivan Mazepa||mazepa;ivan stepanovich mazepa-koledinsky
5|Bogdan Khmelnytsky||khmelnytsky;bohdan chmielnicki
6|Yermak Timofeyevich||yermak;ermak timofeevich
6|Jan III Sobieski||sobieski;john iii of poland
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
1|George S. Patton||patton;george smith patton, jr.
1|Erwin Rommel||rommel;desert fox
1|Georgy Zhukov||zhukov
1|Bernard Montgomery||montgomery;monty
1|Douglas MacArthur||macarthur;gaijin shogun
2|Isoroku Yamamoto||yamamoto
2|Chester W. Nimitz||nimitz
2|Omar Bradley||bradley
2|Heinz Guderian||guderian
2|Erich von Manstein||manstein
2|Charles de Gaulle||de gaulle;gaulle
2|Konstantin Rokossovsky||rokossovsky;konstanty rokossowski
2|Ivan Konev||konev
2|Vasily Chuikov||chuikov
2|Karl Dönitz||donitz;doenitz
2|Hermann Göring||goring;goering
2|George C. Marshall||marshall
2|William Halsey Jr.||halsey;bull halsey;william "bull" halsey
2|Raymond A. Spruance||spruance
3|Walter Model||model
3|Albert Kesselring||kesselring
3|Gerd von Rundstedt||rundstedt
3|Friedrich Paulus||paulus
3|Wilhelm Keitel||keitel
3|Alfred Jodl||jodl
3|Erich Raeder||raeder
3|Fedor von Bock||bock;von bock
3|Wilhelm Ritter von Leeb||leeb;wilhelm von leeb
3|Franz Halder||halder
3|William Slim||slim;bill slim
3|Harold Alexander||alexander
3|Archibald Wavell||wavell
3|Claude Auchinleck||auchinleck
3|Hugh Dowding||dowding
3|Arthur Harris||harris;bomber harris
3|Louis Mountbatten||mountbatten;louis, earl mountbatten of burma;1st earl mountbatten of burma
3|Philippe Leclerc de Hauteclocque||leclerc;philippe leclerc;philippe de hauteclocque;jacques leclerc
3|Alphonse Juin||juin;alphonse pierre juin
3|Władysław Anders||anders
3|Carl Gustaf Emil Mannerheim||mannerheim
3|Otto Ruge||ruge
3|Carl Gustav Fleischer||fleischer
3|Chiang Kai-shek||chiang;jiang jieshi;jiang zhongzheng;generalissimo chiang kai-shek
3|Zhu De
3|Peng Dehuai
3|Lin Biao||lin piao
3|Tomoyuki Yamashita||yamashita;tiger malaya
3|Masaharu Homma||homma
3|Tadamichi Kuribayashi||kuribayashi
3|Mitsuru Ushijima||ushijima
3|Chūichi Nagumo||nagumo
3|Tamon Yamaguchi||yamaguchi
3|Takeo Kurita||kurita
3|Ernest King||ernest king
3|Joseph Stilwell||stilwell;vinegar joe;joe stillwell
3|Claire Lee Chennault||chennault
3|Mark W. Clark||mark clark;mark wayne clark
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
4|Ivan Bagramyan||bagramyan;hovhannes baghramyan
4|Leonid Govorov||govorov
4|Semyon Budyonny||budyonny
4|Kliment Voroshilov||voroshilov
4|Pietro Badoglio||badoglio;duke of addis abeba
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
4|Alexander Vandegrift||vandegrift;alexander archer vandegrift
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
4|Josip Broz Tito||tito;josip tito;marshal tito;marshal josip broz tito;josef broz tito
5|Draža Mihailović||mihailovic
5|Tadeusz Bór-Komorowski||bor komorowski
5|Stanisław Maczek||maczek
5|Stanisław Sosabowski||sosabowski
5|Henri Giraud||giraud
5|Jean de Lattre de Tassigny||de lattre;jean de lattre
5|Maurice Gamelin||gamelin
5|Maxime Weygand||weygand
5|Henri Guisan||guisan
5|Alexandros Papagos||papagos;alexander papagos
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
5|Sepp Dietrich||sepp dietrich;josef dietrich;josef "sepp" dietrich;joseph dietrich
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
3|Battle of Valcour Island||valcour island;battle of lake champlain (1776)
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
4|Great Siege of Gibraltar||gibraltar;relief of gibraltar
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
2|Battle of Grunwald||grunwald;tannenberg 1410;battle of žalgiris
2|Fall of Constantinople||constantinople 1453;fall of byzantium;capture of constantinople;fall of istanbul
2|Battle of Kosovo||kosovo
2|Battle on the Ice||lake peipus;ice
2|Battle of Lechfeld||lechfeld
3|Battle of Las Navas de Tolosa||las navas de tolosa;battle of navas de tolosa
3|Battle of Bouvines||bouvines
3|Battle of Legnano||legnano
3|Battle of Manzikert||manzikert;battle of malazgirt
3|Battle of Kulikovo||kulikovo
3|Battle of Nicopolis||nicopolis
3|Battle of Varna||varna
3|Battle of Towton||towton
3|Battle of Falkirk (1298)|Battle of Falkirk (1298)|falkirk
3|Battle of the Golden Spurs||golden spurs;courtrai
3|Battle of Morgarten||morgarten
3|Battle of Sempach||sempach
3|Battle of Stiklestad||stiklestad
3|Battle of Edington||edington;battle of ethandun
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
3|Battle of Svolder||svolder;battle of swold
3|Battle of Fulford||fulford
3|Battle of Benevento||benevento
3|Battle of Tagliacozzo||tagliacozzo
3|Battle of Montaperti||montaperti
3|Battle of Campaldino||campaldino
4|Battle of Dyrrhachium (1081)|Battle of Dyrrhachium (1081)|dyrrhachium
4|Battle of Myriokephalon||myriokephalon
4|Battle of Civitate||civitate
4|Battle of Kleidion||kleidion;battle of klyuch;battle of belasitsa
4|Battle of Achelous (917)|Battle of Achelous (917)|achelous
4|Battle of Pliska||pliska
4|Battle of Dorylaeum (1097)|Battle of Dorylaeum (1097)|dorylaeum
4|Battle of Antioch (1098)|Siege of Antioch|antioch
4|Battle of Hattin||hattin;the horns of hattin;horns of hittin
4|Battle of Arsuf||arsuf
4|Battle of Muret||muret
4|Battle of Worringen||worringen
4|Battle of Mühldorf||muhldorf
4|Battle of Halidon Hill||halidon hill
4|Battle of Dupplin Moor||dupplin moor
4|Battle of Neville's Cross||nevilles cross;battle of durham
4|Battle of Aljubarrota||aljubarrota
4|Battle of Nájera||najera
4|Battle of Rosebecque||roosebeke;westrozebeke
4|Battle of Othée||othee
4|Battle of Kressenbrunn||kressenbrunn
4|Battle of Ashdown||ashdown
4|Battle of Assandun||assandun;battle of ashingdon
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
4|Battle of Maritsa||maritsa;battle of marica
4|Battle of Rovine||rovine
4|Battle of Ankara||ankara;battle of angora
5|Battle of Mons Badonicus||badon;mount badon
5|Battle of Catraeth||catraeth
5|Battle of Dun Nechtain||nechtansmere;dun nechtain;battle of dunnichen
5|Battle of Vouillé||vouille
5|Battle of Tolbiac||tolbiac
5|Battle of Fontenoy (841)|Battle of Fontenoy (841)|fontenoy 841;battle of fontenoy-en-puisaye;battle of fontenay-en-puisaye
5|Battle of Andernach (876)|Battle of Andernach (876)|andernach
5|Battle of Riade||riade
5|Battle of Soissons (923)|Battle of Soissons (923)|soissons
5|Battle of Bråvalla||bravalla;battle of the brávellir
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
2|First Battle of Panipat||panipat;first panipat;battle of panipat (1526)
2|Third Battle of Panipat||third panipat;battle of panipat (1761)
2|Battle of Plassey||plassey;palashi
2|Battle of Ain Jalut||ain jalut
2|Battle of Manzikert||manzikert;battle of malazgirt
2|Battle of Nagashino||nagashino
2|Battle of Okehazama||okehazama;dengakuhazama
2|Battle of Dan-no-ura||dan no ura
2|Battle of Myeongnyang||myeongnyang
2|Battle of Hydaspes||hydaspes
2|Battle of Kadesh||kadesh
2|Battle of Hattin||hattin;the horns of hattin;horns of hittin
2|Battle of al-Qadisiyyah||qadisiyyah;qadisiya;battle of new qadisiyya
3|Battle of Gaixia||gaixia
3|Battle of Changping||changping
3|Battle of Feishui||feishui;fei river
3|Battle of Yamen||yamen
3|Tumu Crisis||tumu;tumu incident
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
3|Battle of Hansan Island||hansan;battle of hansando
3|Battle of Noryang||noryang
3|Battle of Yarmouk||yarmouk;battle of yaqusa
3|Battle of Badr||badr
3|Battle of Karbala||karbala
3|Battle of Chaldiran||chaldiran
3|Battle of Ankara||ankara;battle of angora
3|Siege of Baghdad (1258)|Siege of Baghdad (1258)|baghdad 1258;sack of baghdad
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
4|Battle of Gwiju||gwiju;battle of guju;battle of kwiju
4|Battle of Haengju||haengju
4|Siege of Jinju (1593)|Siege of Jinju (1593)|jinju
4|Battle of Mikatagahara||mikatagahara
4|Battle of Anegawa||anegawa
4|Battle of Yamazaki||yamazaki
4|Battle of Shizugatake||shizugatake
4|Battle of Kōnodai||konodai
4|Battle of Kawagoe Castle||kawagoe
4|Battle of Itsukushima||itsukushima;battle of miyajima
4|Battle of Minatogawa||minatogawa
4|Mongol invasions of Japan||kamikaze;bun'ei;koan;hakata bay;mongolian invasions of japan
4|Battle of Kalinga|Kalinga War|kalinga
4|Battle of the Ten Kings||ten kings;dasarajna
4|Battle of Takkolam||takkolam
4|Battle of Koppam||koppam
4|Battle of Khanwa||khanwa
4|Second Battle of Panipat||second panipat;battle of panipat (1556)
4|Battle of Chausa||chausa
4|Battle of Kannauj||kannauj
4|Battle of Samugarh||samugarh
4|Battle of Karnal||karnal
4|Battle of Wandiwash||wandiwash
4|Battle of Seringapatam|Siege of Seringapatam (1799)|seringapatam;siege of srirangapatna (1799);battle of srirangapatna;siege of srirangapattana (1799)
4|Battle of Chillianwala||chillianwala
4|Battle of Gujrat||gujrat
4|Siege of Lucknow||lucknow;relief of lucknow;defence of lucknow 1857
4|Battle of Maiwand||maiwand
4|Battle of Saragarhi||saragarhi
4|Battle of Nahavand||nahavand
4|Battle of Nineveh (627)|Battle of Nineveh (627)|nineveh 627
4|Battle of Didgori||didgori
4|Battle of Avarayr||avarayr;battle of vartanantz
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
1|Battle of Hattin||hattin;the horns of hattin;horns of hittin
1|Siege of Acre (1189–1191)|Siege of Acre (1189–1191)|acre;siege of acre (1189);siege of acre (1189–91);siege of acre (1191)
2|Siege of Antioch||antioch
2|Battle of Arsuf||arsuf
2|Sack of Constantinople (1204)|Sack of Constantinople|constantinople 1204
2|Battle of Montgisard||montgisard
2|Battle of Dorylaeum (1097)|Battle of Dorylaeum (1097)|dorylaeum
2|Siege of Jerusalem (1187)|Siege of Jerusalem (1187)|jerusalem 1187
2|Battle of Las Navas de Tolosa||las navas de tolosa;battle of navas de tolosa
2|Battle on the Ice||lake peipus
2|Battle of Grunwald||grunwald;battle of žalgiris
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
3|Siege of Zara||zara;zadar;sack of zara
3|Siege of Damietta (1218–1219)|Siege of Damietta (1218–1219)|damietta;siege of damietta (1218–19)
3|Siege of Tunis (1270)|Eighth Crusade|tunis
3|Siege of Acre (1291)|Siege of Acre (1291)|fall acre;acre 1291
3|Fall of Tripoli (1289)|Fall of Tripoli (1289)|tripoli;fall of tripoli
3|Siege of Edessa (1144)|Siege of Edessa (1144)|edessa;fall of edessa
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
4|Siege of Belgrade (1456)|Siege of Belgrade (1456)|belgrade;siege of nándorfehérvár
4|Battle of Alarcos||alarcos
4|Siege of Seville||seville
4|Granada War||granada;fall of granada
5|Siege of Shaizar||shaizar
5|Battle of Lake Huleh||huleh
5|Battle of Marj Ayyun||marj ayyun;battle of marj uyun
5|Battle of Jacob's Ford||jacobs ford;vadum jacob
5|Battle of Belvoir Castle||belvoir;battle of le forbelet
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
1|Treaty of Versailles||versailles;versailles peace treaty
1|Peace of Westphalia||westphalia;treaty of westphalia;pax germanica;congress of westphalia
1|Treaty of Paris (1783)|Treaty of Paris (1783)|paris 1783;treaties of versailles of 1783
2|Treaty of Tordesillas||tordesillas;tordesilhas line
2|Treaty of Utrecht||utrecht;treaties of utrecht;congress of utrecht
2|Treaty of Ghent||ghent
2|Treaty of Brest-Litovsk||brest litovsk;peace of brest-litovsk
2|Treaty of Nanking||nanking;nanjing
2|Treaty of Kiel||kiel;peace of kiel
2|Treaty of Waitangi||waitangi
2|Treaty of Guadalupe Hidalgo||guadalupe hidalgo;tratado de guadalupe hidalgo;treaty of guadalupe
2|Treaty of Rome||rome treaty;treaties of rome;treaty establishing the european community;eec treaty;teec
2|Maastricht Treaty||maastricht;treaty on eu;treaty of the european union
2|Congress of Vienna||vienna 1815;treaty of vienna (1815)
2|Molotov–Ribbentrop Pact||molotov ribbentrop;nazi soviet pact;hitler-stalin pact;german-soviet pact;german-soviet non-aggression pact
2|North Atlantic Treaty||nato treaty;washington treaty
2|Warsaw Pact||warsaw treaty organization;warsaw bloc
2|Camp David Accords||camp david
2|Good Friday Agreement||belfast agreement;good friday
2|Oslo Accords||oslo;oslo peace process
2|Treaty on the Non-Proliferation of Nuclear Weapons||non proliferation;npt;nuclear non-proliferation treaty;nonproliferation treaty;nuclear proliferation treaty
2|Egyptian–Hittite peace treaty||kadesh treaty;egyptian hittite treaty;ramses–hattusili treaty
3|Treaty of Trianon||trianon
3|Treaty of Sèvres||sevres
3|Treaty of Lausanne||lausanne
3|Treaty of Verdun||verdun 843;partition of verdun
3|Treaty of Troyes||troyes
3|Treaty of Brétigny||bretigny;peace of brétigny;treaty of calais
3|Peace of Ryswick||ryswick;rijswijk;treaty of ryswick;treaty of rijswijk;peace of rijswijk
3|Treaty of Aix-la-Chapelle (1748)|Treaty of Aix-la-Chapelle (1748)|aix la chapelle
3|Treaty of Hubertusburg||hubertusburg;peace of hubertusburg
3|Peace of Pressburg|Peace of Pressburg (1805)|pressburg;treaty of pressburg (1805)
3|Treaties of Tilsit||tilsit;treaty of tilsit;peace of tilsit
3|Treaty of Amiens||amiens;peace of amiens
3|Treaty of Campo Formio||campo formio;peace of campo formio
3|Treaty of Fontainebleau (1814)|Treaty of Fontainebleau (1814)|fontainebleau;abdication of napoleon, 1814;abdication of fontainebleau
3|Treaty of Frankfurt (1871)|Treaty of Frankfurt (1871)|frankfurt
3|Treaty of Portsmouth||portsmouth
3|Treaty of Shimonoseki||shimonoseki
3|Treaty of Rapallo (1922)|Treaty of Rapallo (1922)|rapallo;rapallo treaty
3|Locarno Treaties||locarno;locarno treaty;treaty of locarno
3|Kellogg–Briand Pact||kellogg briand
3|Dayton Agreement||dayton
3|Antarctic Treaty System||antarctic treaty
3|Outer Space Treaty||outer space
3|Treaty of Tianjin||tianjin;tientsin;treaties of tientsin;treaties of tianjin
3|Treaty of Aigun||aigun
3|Convention of Kanagawa||kanagawa;treaty of kanagawa;treaty of peace and amity
3|Treaty of San Stefano||san stefano
3|Congress of Berlin||berlin 1878;berlin agreement
3|Treaty of London (1839)|Treaty of London (1839)|scrap paper;london 1839;belgian neutrality treaty;london conference of 1838–1839
3|Treaty of Union|Treaty of Union|acts union;union 1707
3|Treaty of Lisbon||lisbon
3|Jay Treaty||jay
3|Louisiana Purchase||louisiana;sale of louisiana
3|Adams–Onís Treaty||adams onis;transcontinental treaty;florida purchase;spanish cession
3|Treaty of Paris (1763)|Treaty of Paris (1763)|paris 1763;peace of paris (1763)
3|Treaty of Paris (1898)|Treaty of Paris (1898)|paris 1898
3|Treaty of Nerchinsk||nerchinsk
3|Peace of Augsburg||augsburg
3|Treaty of Roskilde||roskilde
3|Treaty of Wedmore||wedmore
3|Treaty of Saint-Germain-en-Laye (1919)|Treaty of Saint-Germain-en-Laye (1919)|saint germain;treaty of saint-germain
3|Convention of Moss||moss convention;convention moss
3|Helsinki Accords||helsinki final act;helsinki agreement
3|Paris Peace Accords||paris peace accords;1968 vietnam peace talks
3|Treaty of Neuilly-sur-Seine||neuilly;treaty of neuilly
3|Munich Agreement||munich
3|Atlantic Charter
4|Treaty of Karlowitz||karlowitz
4|Treaty of Passarowitz||passarowitz;treaty of požarevac;peace of passarowitz
4|Treaty of Küçük Kaynarca||kucuk kaynarca;kuchuk kainarji;treaty of kuchuk-kainarji
4|Treaty of Adrianople (1829)|Treaty of Adrianople (1829)|adrianople
4|Treaty of Paris (1856)|Treaty of Paris (1856)|paris 1856
4|Treaty of Zurich||zurich
4|Treaty of Prague (1866)|Peace of Prague (1866)|prague 1866
4|Treaty of Constantinople (1913)||constantinople 1913
4|Treaty of Bucharest (1913)|Treaty of Bucharest (1913)|bucharest
4|Treaty of Riga||riga;peace of riga;riga peace treaty
4|Treaty of Tartu (Russian–Estonian)|Treaty of Tartu (Russian–Estonian)|tartu;treaty of tartu
4|Treaty of Kars||kars
4|Treaty of Stolbovo||stolbovo
4|Treaty of Nystad||nystad;uusikaupunki;peace of nystad
4|Treaty of Westminster (1654)|Treaty of Westminster (1654)|westminster
4|Treaty of Breda (1667)|Treaty of Breda (1667)|breda;peace of breda
4|Treaty of Dover||dover;secret treaty of dover
4|Treaty of Nijmegen||nijmegen;peace of nijmegen
4|Treaty of the Pyrenees||pyrenees;peace of the pyrenees
4|Peace of Lodi||lodi
4|Treaty of Cateau-Cambrésis||cateau cambresis;peace of cateau cambrésis
4|Treaty of Madrid (1526)|Treaty of Madrid (1526)|madrid
4|Treaty of Arras (1435)|Treaty of Arras (1435)|arras
4|Treaty of Windsor (1386)|Treaty of Windsor (1386)|windsor
4|Treaty of Alcáçovas||alcacovas
4|Treaty of Zaragoza||zaragoza;saragossa;capitulation of zaragoza;treaty of saragossa
4|Treaty of Paris (1259)|Treaty of Paris (1259)|paris 1259
4|Treaty of Northampton||northampton
4|Treaty of Perth||perth
4|Treaty of Falaise||falaise
4|Treaty of Fort Laramie (1868)|Treaty of Fort Laramie (1868)|fort laramie
4|Treaty of Greenville||greenville
4|Treaty of Wanghia||wanghia
4|Treaty of Whampoa||whampoa;treaty of huangpu
4|Treaty of Ganghwa||ganghwa;japan-korea treaty of 1876;korea-japan treaty of 1876
4|Treaty of Gandamak||gandamak
4|Treaty of Vereeniging||vereeniging;peace of vereeniging
4|Treaty of Wuchale||wuchale
5|Treaty of Lutatius||lutatius
5|Treaty of Apamea||apamea;peace of apamea
5|Treaty of Brundisium||brundisium
5|Treaty of Misenum||misenum
5|Peace of Callias||callias
5|Peace of Nicias||nicias
5|Peace of Antalcidas||kings peace;antalcidas;treaty of antalcidas
5|Treaty of Andelot||andelot
5|Treaty of Meerssen||meerssen;treaty of mersen
5|Treaty of Ribemont||ribemont
5|Treaty of Saint-Clair-sur-Epte||saint clair sur epte
5|Peace of Constance||constance
5|Treaty of Melno||melno;peace of melno
5|Peace of Thorn (1411)|Peace of Thorn (1411)|thorn 1411;first peace of thorn
5|Peace of Szeged||szeged
5|Kalmar Union||kalmar union
6|Treaty of Noteborg||noteborg;oreshek
6|Treaty of Teusina||teusina;treaty of tyavzino
6|Treaty of Knäred||knared
6|Treaty of Brömsebro (1645)|Treaty of Brömsebro (1645)|bromsebro;second treaty of brömsebro (1645)
6|Treaty of Copenhagen (1660)|Treaty of Copenhagen (1660)|copenhagen 1660
6|Treaty of Fredrikshamn||fredrikshamn;hamina;treaty of hamina
`,
nope:{
 'declaration independence|magna carta|bill rights':'A founding document &mdash; not a treaty between powers.',
 'un charter|united nations':'The UN Charter is close &mdash; but this dig wants a named peace treaty or pact.',
 'eu|nato|united nations':'An organisation &mdash; what was the treaty that founded it?'
}},

{id:'documents', cat:'Modern History', q:'Name a famous historical document', hint:'Charters, declarations, laws and manifestos',
list:`
1|Magna Carta||great charter;magna charta sureties;magna carter
1|Declaration of Independence|United States Declaration of Independence|declaration independence;american declaration of independence;us declaration of independence;independence of the united states;july 4, 1776
1|United States Constitution||us constitution;american constitution;constitution
2|Rosetta Stone||decree of memphis
2|Code of Hammurabi||hammurabi;laws of hammurabi;stela of hammurabi;stele of hammurabi
2|Domesday Book||domesday
2|Emancipation Proclamation||emancipation
2|The Communist Manifesto||communist manifesto;manifesto of the communist party
2|Ninety-five Theses||95 theses
2|Declaration of the Rights of Man and of the Citizen||rights man citizen;droits homme;declaration of 1789;declaration of rights of man
2|Bill of Rights 1689||english bill rights;bill of rights 1688
2|United States Bill of Rights||bill rights;us bill of rights
2|Universal Declaration of Human Rights||udhr;human rights declaration;un declaration of human rights
2|Gettysburg Address||gettysburg address
2|Mayflower Compact||mayflower compact
2|Constitution of Norway||norwegian constitution;eidsvoll;grunnloven
3|Edict of Nantes||nantes
3|Golden Bull of 1356||golden bull;golden bull of charles iv
3|Balfour Declaration||balfour
3|The Federalist Papers||federalist papers;federalist
3|Common Sense|Common Sense|common sense
3|Twelve Tables||law of the twelve tables
3|Edicts of Ashoka||ashoka edicts;ashoka rock edict;rock edicts;ashokan rock edicts
3|Cyrus Cylinder
3|Dead Sea Scrolls||qumran scrolls;qumran documents;qumran caves scrolls
3|Zimmermann Telegram||zimmermann;zimmerman note
3|Monroe Doctrine||monroe
3|Marshall Plan||marshall aid;european recovery program
3|Pentagon Papers
3|J'Accuse...!||j accuse;jaccuse
3|Act of Supremacy 1534||act supremacy
3|Petition of Right
3|Instrument of Government (1653)|Instrument of Government (1653)|instrument government
3|Inter caetera||inter caetera
3|Donation of Constantine
3|Articles of Confederation
3|Northwest Ordinance||ordinance of 1787
3|Declaration of Arbroath||arbroath
3|Royal Proclamation of 1763||royal proclamation;proclamation of 1763;proclamation line of 1763;indian line;proclamation line
3|Edict of Milan||milan
3|Edict of Worms (1521)|Edict of Worms|worms
3|Treaty of Versailles||versailles peace treaty
3|Book of Kells
3|Gutenberg Bible||42-line bible
3|Wannsee Conference||wannsee protocol
3|Atlantic Charter
4|Statute of Westminster 1931||statute westminster
4|Acts of Union 1707||acts union;union of england and scotland;union with england act 1707;union with england act
4|Pragmatic Sanction of 1713||pragmatic sanction
4|Napoleonic Code||code napoleon;civil code;french civil code;napoleonic law;napoleonic civil code
4|Justinian's Code|Corpus Juris Civilis|corpus juris civilis;justinian code
4|Code of Ur-Nammu||ur nammu
4|Constitution of Medina||medina charter
4|Charter of Liberties||charter liberties;coronation charter
4|Provisions of Oxford||provisions oxford
4|Habeas Corpus Act 1679||habeas corpus
4|Declaration of Breda||breda
4|Virginia Declaration of Rights||virginia declaration;virginia bill of rights
4|Declaration of Sentiments||seneca falls;declaration of rights and sentiments
4|Fourteen Points||fourteen points;14 points
4|Long Telegram||kennan;the sources of soviet conduct
4|Sinews of Peace||iron curtain speech;sinews peace
4|Edict of Fontainebleau||fontainebleau edict
4|Alhambra Decree||alhambra decree;1492 expulsion
4|Unam sanctam||unam sanctam
4|Dictatus papae||dictatus papae
4|Concordat of Worms||concordat worms;diet of worms (1122)
4|Pact of Umar||pact umar;covenant of umar i
4|Rights of Man|Rights of Man|paine rights man
4|A Vindication of the Rights of Woman||vindication rights woman
4|Treaty of Tordesillas||tordesilhas line;tordesillas line
4|Dutch Act of Abjuration|Act of Abjuration|act abjuration
4|Union of Utrecht
5|Mainz Psalter
5|Sachsenspiegel||saxon law
5|Russkaya Pravda||justice of the rus'
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
5|Warsaw Confederation||warsaw confederation;warsaw compact
6|Golden Liberty|Golden Liberty|golden liberty;nihil novi;golden freedoms;golden freedom;golden liberties;noble democracy
6|Henrician Articles||henrician articles
`,
nope:{
 'harry potter|bible|quran':'A famous book &mdash; but this dig is after charters, laws and declarations.',
 'mona lisa':'A painting &mdash; not a document!'
}}
);

/* Daily rotation — frozen seasons of prompt ids, played back to back, seven per dig (Feature Spec 02 and 04).
   Dig #1 = first seven ids of season 1. Don't edit by hand: add a new prompt with
   node tools/check.mjs --add-prompt <id>  (puts it into every season that hasn't started; locked digs never change)
   and freeze further ahead with  node tools/check.mjs --freeze-until <YYYY-MM-DD>.
   See context/02-architecture.md "Slik legger du til et nytt prompt". */
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
[ // season 3 — seed 'dugup-order-v3', frozen 2026-11-22
  'epics','china','moon','scientists','crusadebattles','olympics','scots',
  'knights','classwriters','islamrulers','samurai','troy','acw','finds',
  'romanbuild','soviet','queens','usvp','architects','animals','polar',
  'bridges','japanemp','greekleaders','disasters','space','britindep','medbattles',
  'composers','france','pope','romangods','unsg','koreanpeople','ruins',
  'napoleon','libraries','impress','frenchrev','thegreat','mughal','hellenistic',
  'shipsx','india','firstlady','womensci','naval','outlaws','enlight',
  'crusades','egyptgods','hre','scripts','assassinations','canals','treasures',
  'japan','amrev','paintings','empires','lost','ancientwomen','rome',
  'revs','maths','poets','wars','shogun','heroes','wrecks',
  'palaces','vikings','polis','norway','coldwar','ottoman','renaissance',
  'commanders','chinapeople','provinces','spies','engmon','capitals','aztecgods',
  'reformation','documents','inv1','greekbattles','wonders','indiapeople','persia',
  'medwomen','hoaxes','expeditions','founders','nicknames','playwrights','pharaoh',
  'ww2cmd','chphil','latam','hansa','arthur','sculptures','africa',
  'spain','pyramids','russrev','aviation','ww1','universities','seasia',
  'ukpm','novels','mesopotamia','traderoutes','houses','walls','romebattles',
  'treaties','mesogods','byzantine','korea','republic','greekphil','trials',
  'speeches','tsars','pandemics','asiabattles','medthinkers','greekmonu','worship',
  'chinaemp','islamic','suffrage','khans','hyw','wives','norsegods',
  'archaeologists','decolon','civs',
],
[ // season 4 — seed 'dugup-order-v4', frozen 2026-11-22
  'ancientwomen','medwomen','shipsx','nicknames','frenchrev','chphil','republic',
  'enlight','speeches','ww1','romangods','capitals','treaties','japanemp',
  'khans','wives','scientists','civs','playwrights','hyw','knights',
  'latam','queens','archaeologists','britindep','pyramids','korea','classwriters',
  'soviet','egyptgods','crusadebattles','bridges','treasures','tsars','greekmonu',
  'coldwar','aviation','renaissance','indiapeople','ww2cmd','mughal','universities',
  'decolon','romanbuild','thegreat','worship','islamic','mesogods','traderoutes',
  'india','documents','medbattles','finds','sculptures','ottoman','moon',
  'engmon','maths','china','greekbattles','pope','ruins','olympics',
  'usvp','troy','novels','hoaxes','france','lost','romebattles',
  'provinces','shogun','polar','empires','reformation','russrev','palaces',
  'pandemics','hre','wonders','naval','vikings','japan','heroes',
  'assassinations','greekphil','islamrulers','hellenistic','norway','revs','acw',
  'chinapeople','libraries','architects','expeditions','unsg','mesopotamia','space',
  'scots','aztecgods','wars','outlaws','medthinkers','trials','composers',
  'byzantine','koreanpeople','ukpm','polis','hansa','suffrage','asiabattles',
  'houses','impress','samurai','greekleaders','disasters','inv1','norsegods',
  'wrecks','africa','napoleon','spain','crusades','epics','scripts',
  'firstlady','canals','seasia','spies','amrev','poets','pharaoh',
  'rome','persia','arthur','chinaemp','founders','animals','womensci',
  'walls','commanders','paintings',
],
[ // season 5 — seed 'dugup-order-v5', frozen 2026-11-22
  'unsg','pope','libraries','greekbattles','provinces','egyptgods','composers',
  'india','maths','assassinations','nicknames','ancientwomen','wars','russrev',
  'africa','enlight','treasures','hansa','chphil','france','expeditions',
  'romanbuild','usvp','universities','napoleon','mesogods','impress','aviation',
  'frenchrev','koreanpeople','hellenistic','rome','britindep','ww1','outlaws',
  'capitals','architects','ukpm','mesopotamia','samurai','troy','houses',
  'suffrage','knights','commanders','polar','sculptures','khans','wonders',
  'scientists','decolon','bridges','japanemp','animals','tsars','amrev',
  'reformation','lost','scripts','heroes','shogun','founders','medthinkers',
  'byzantine','novels','medbattles','norway','civs','canals','archaeologists',
  'pandemics','latam','seasia','paintings','ww2cmd','ruins','engmon',
  'documents','norsegods','islamrulers','worship','islamic','treaties','vikings',
  'pharaoh','japan','acw','scots','hoaxes','space','disasters',
  'traderoutes','polis','classwriters','asiabattles','korea','aztecgods','empires',
  'speeches','queens','walls','finds','poets','moon','medwomen',
  'crusadebattles','china','wives','inv1','greekmonu','firstlady','ottoman',
  'playwrights','arthur','palaces','hyw','wrecks','chinapeople','coldwar',
  'thegreat','greekleaders','renaissance','soviet','trials','crusades','naval',
  'persia','chinaemp','republic','olympics','womensci','spain','greekphil',
  'revs','romangods','romebattles','pyramids','spies','indiapeople','shipsx',
  'epics','hre','mughal',
],
[ // season 6 — seed 'dugup-order-v6', frozen 2026-11-22
  'polar','paintings','speeches','vikings','pharaoh','moon','hansa',
  'korea','wars','composers','polis','ottoman','nicknames','mesogods',
  'romebattles','hre','womensci','soviet','outlaws','poets','china',
  'naval','mesopotamia','treaties','pope','shipsx','capitals','engmon',
  'treasures','scientists','assassinations','byzantine','architects','finds','napoleon',
  'chinaemp','arthur','unsg','wives','greekmonu','reformation','walls',
  'commanders','japanemp','usvp','universities','khans','pandemics','thegreat',
  'wrecks','scripts','classwriters','coldwar','aztecgods','greekbattles','india',
  'disasters','worship','ancientwomen','scots','playwrights','mughal','hoaxes',
  'crusadebattles','ukpm','indiapeople','medthinkers','civs','inv1','greekphil',
  'norsegods','tsars','documents','traderoutes','ww2cmd','bridges','wonders',
  'seasia','firstlady','africa','renaissance','spain','medbattles','founders',
  'provinces','knights','chinapeople','egyptgods','sculptures','space','palaces',
  'spies','norway','hyw','empires','ruins','expeditions','novels',
  'suffrage','animals','samurai','romanbuild','france','acw','frenchrev',
  'canals','heroes','medwomen','enlight','maths','shogun','britindep',
  'lost','pyramids','asiabattles','houses','islamic','revs','archaeologists',
  'koreanpeople','greekleaders','libraries','romangods','ww1','rome','russrev',
  'islamrulers','epics','crusades','aviation','republic','chphil','decolon',
  'trials','amrev','impress','queens','olympics','hellenistic','latam',
  'troy','persia','japan',
],
[ // season 7 — seed 'dugup-order-v7', frozen 2026-11-22
  'medwomen','maths','romangods','paintings','moon','walls','treasures',
  'pharaoh','houses','hyw','unsg','archaeologists','koreanpeople','frenchrev',
  'chphil','persia','impress','ruins','asiabattles','tsars','canals',
  'troy','pope','scientists','empires','novels','decolon','indiapeople',
  'greekleaders','medbattles','documents','scots','sculptures','expeditions','ancientwomen',
  'shogun','capitals','islamrulers','speeches','aztecgods','commanders','knights',
  'poets','pandemics','rome','animals','firstlady','provinces','china',
  'romebattles','reformation','founders','olympics','wives','mughal','pyramids',
  'norsegods','seasia','disasters','polar','crusadebattles','composers','universities',
  'aviation','republic','engmon','revs','worship','japanemp','britindep',
  'epics','acw','civs','coldwar','heroes','france','lost',
  'trials','classwriters','samurai','greekmonu','naval','wrecks','medthinkers',
  'womensci','hansa','ottoman','spies','norway','renaissance','wonders',
  'chinaemp','wars','mesogods','usvp','spain','hellenistic','enlight',
  'treaties','palaces','byzantine','napoleon','japan','crusades','space',
  'soviet','shipsx','finds','nicknames','architects','arthur','ww2cmd',
  'latam','chinapeople','hoaxes','libraries','mesopotamia','khans','islamic',
  'hre','suffrage','outlaws','ww1','vikings','inv1','india',
  'romanbuild','ukpm','playwrights','egyptgods','traderoutes','thegreat','bridges',
  'amrev','africa','assassinations','scripts','korea','greekphil','russrev',
  'queens','greekbattles','polis',
],
[ // season 8 — seed 'dugup-order-v8', frozen 2026-11-22
  'napoleon','chinapeople','tsars','frenchrev','reformation','khans','mesopotamia',
  'vikings','capitals','latam','hyw','epics','chphil','civs',
  'egyptgods','queens','founders','pandemics','africa','greekbattles','traderoutes',
  'greekphil','lost','ruins','indiapeople','rome','canals','romangods',
  'pope','speeches','trials','ww1','poets','scripts','japan',
  'hre','empires','spies','womensci','naval','bridges','composers',
  'republic','coldwar','arthur','wrecks','china','thegreat','universities',
  'provinces','assassinations','renaissance','ww2cmd','britindep','worship','treaties',
  'india','norway','aviation','finds','paintings','asiabattles','heroes',
  'suffrage','hoaxes','crusades','byzantine','hellenistic','archaeologists','koreanpeople',
  'houses','classwriters','documents','acw','walls','pyramids','usvp',
  'maths','chinaemp','scots','enlight','aztecgods','crusadebattles','islamrulers',
  'russrev','greekleaders','medthinkers','libraries','impress','korea','wives',
  'firstlady','wars','expeditions','polis','mesogods','ukpm','playwrights',
  'scientists','ottoman','japanemp','france','animals','amrev','greekmonu',
  'olympics','soviet','outlaws','medwomen','architects','decolon','shogun',
  'engmon','commanders','pharaoh','norsegods','persia','shipsx','islamic',
  'disasters','inv1','palaces','romanbuild','medbattles','seasia','spain',
  'revs','sculptures','knights','ancientwomen','mughal','unsg','romebattles',
  'troy','samurai','nicknames','hansa','novels','treasures','moon',
  'space','wonders','polar',
],
[ // season 9 — seed 'dugup-order-v9', frozen 2026-11-22
  'romanbuild','india','ukpm','egyptgods','poets','tsars','asiabattles',
  'suffrage','khans','vikings','korea','hoaxes','impress','russrev',
  'ancientwomen','space','hansa','scripts','france','medbattles','archaeologists',
  'shogun','firstlady','arthur','persia','novels','finds','worship',
  'scots','crusadebattles','moon','medwomen','pandemics','chphil','hellenistic',
  'greekphil','founders','commanders','wives','mesogods','empires','speeches',
  'traderoutes','pharaoh','japanemp','palaces','sculptures','treasures','ww2cmd',
  'unsg','engmon','medthinkers','inv1','wonders','epics','japan',
  'lost','ottoman','outlaws','aztecgods','walls','hyw','polis',
  'norway','renaissance','treaties','koreanpeople','wrecks','amrev','mesopotamia',
  'soviet','pope','maths','africa','hre','architects','capitals',
  'troy','chinaemp','latam','greekleaders','wars','enlight','animals',
  'houses','frenchrev','seasia','greekmonu','britindep','greekbattles','usvp',
  'polar','canals','crusades','composers','womensci','romangods','thegreat',
  'pyramids','documents','samurai','romebattles','classwriters','revs','islamrulers',
  'spain','provinces','olympics','china','napoleon','paintings','disasters',
  'norsegods','knights','scientists','shipsx','civs','rome','assassinations',
  'trials','byzantine','playwrights','chinapeople','ww1','bridges','ruins',
  'decolon','nicknames','heroes','reformation','acw','spies','indiapeople',
  'universities','republic','aviation','mughal','coldwar','expeditions','queens',
  'libraries','islamic','naval',
],
[ // season 10 — seed 'dugup-order-v10', frozen 2026-11-22
  'composers','treaties','scots','japan','mesopotamia','wars','trials',
  'shipsx','worship','mesogods','khans','maths','latam','pharaoh',
  'islamic','universities','spain','chinapeople','acw','coldwar','novels',
  'greekleaders','libraries','decolon','byzantine','wives','aztecgods','amrev',
  'indiapeople','womensci','founders','wrecks','reformation','greekmonu','pope',
  'houses','crusadebattles','revs','korea','hansa','hellenistic','persia',
  'classwriters','treasures','lost','romangods','ww2cmd','rome','samurai',
  'republic','inv1','enlight','documents','crusades','polar','capitals',
  'mughal','commanders','moon','thegreat','pyramids','chphil','sculptures',
  'arthur','firstlady','civs','napoleon','tsars','impress','india',
  'aviation','olympics','russrev','ottoman','medthinkers','polis','ww1',
  'animals','suffrage','expeditions','playwrights','norsegods','norway','koreanpeople',
  'spies','finds','canals','hyw','britindep','renaissance','engmon',
  'scientists','assassinations','shogun','romanbuild','medwomen','heroes','greekbattles',
  'poets','unsg','archaeologists','hre','palaces','ancientwomen','seasia',
  'empires','disasters','greekphil','naval','pandemics','scripts','speeches',
  'france','hoaxes','japanemp','vikings','egyptgods','paintings','romebattles',
  'bridges','frenchrev','islamrulers','ruins','nicknames','ukpm','china',
  'traderoutes','architects','outlaws','asiabattles','wonders','space','usvp',
  'troy','walls','queens','knights','africa','epics','chinaemp',
  'provinces','medbattles','soviet',
],
[ // season 11 — seed 'dugup-order-v11', frozen 2026-11-22
  'mesogods','shogun','coldwar','thegreat','commanders','womensci','greekleaders',
  'reformation','founders','islamrulers','koreanpeople','wars','wives','palaces',
  'knights','archaeologists','spies','pharaoh','novels','norsegods','animals',
  'assassinations','amrev','indiapeople','norway','pyramids','poets','britindep',
  'pandemics','unsg','worship','outlaws','vikings','asiabattles','ancientwomen',
  'chphil','houses','playwrights','treaties','arthur','wrecks','africa',
  'soviet','provinces','napoleon','japan','renaissance','bridges','france',
  'scientists','lost','finds','medthinkers','hyw','aztecgods','classwriters',
  'trials','china','speeches','engmon','byzantine','hellenistic','libraries',
  'traderoutes','russrev','naval','paintings','chinaemp','maths','queens',
  'republic','usvp','egyptgods','pope','crusadebattles','architects','persia',
  'suffrage','canals','korea','mesopotamia','scots','sculptures','firstlady',
  'medbattles','expeditions','scripts','inv1','samurai','heroes','khans',
  'revs','nicknames','treasures','composers','capitals','medwomen','acw',
  'polis','moon','seasia','hre','epics','documents','ww2cmd',
  'romanbuild','ottoman','troy','space','walls','shipsx','frenchrev',
  'india','enlight','spain','universities','civs','ww1','ukpm',
  'impress','empires','chinapeople','greekmonu','rome','latam','hansa',
  'romebattles','romangods','hoaxes','aviation','islamic','disasters','ruins',
  'japanemp','polar','tsars','crusades','greekbattles','mughal','decolon',
  'greekphil','olympics','wonders',
],
[ // season 12 — seed 'dugup-order-v12', frozen 2026-11-22
  'medbattles','reformation','lost','archaeologists','republic','scientists','founders',
  'palaces','chphil','egyptgods','sculptures','persia','asiabattles','medwomen',
  'tsars','suffrage','norway','provinces','islamic','chinaemp','napoleon',
  'coldwar','worship','romanbuild','khans','houses','treasures','norsegods',
  'maths','unsg','polar','novels','amrev','seasia','vikings',
  'greekleaders','decolon','queens','paintings','olympics','crusadebattles','britindep',
  'samurai','frenchrev','pharaoh','mesogods','epics','pandemics','france',
  'disasters','greekbattles','polis','shipsx','knights','japan','latam',
  'hansa','enlight','islamrulers','nicknames','pyramids','naval','usvp',
  'trials','heroes','koreanpeople','composers','womensci','revs','hellenistic',
  'scots','acw','bridges','pope','mughal','shogun','speeches',
  'wrecks','renaissance','wonders','romangods','commanders','spain','moon',
  'korea','greekphil','libraries','scripts','ottoman','space','documents',
  'ww2cmd','wives','medthinkers','classwriters','outlaws','firstlady','ancientwomen',
  'indiapeople','animals','aztecgods','expeditions','wars','soviet','hre',
  'capitals','playwrights','africa','ruins','india','aviation','ukpm',
  'hyw','universities','mesopotamia','thegreat','impress','arthur','treaties',
  'japanemp','walls','empires','romebattles','finds','russrev','traderoutes',
  'architects','engmon','china','inv1','spies','greekmonu','ww1',
  'poets','hoaxes','troy','crusades','canals','rome','byzantine',
  'assassinations','chinapeople','civs',
],
[ // season 13 — seed 'dugup-order-v13', frozen 2026-11-22
  'worship','britindep','vikings','naval','polar','indiapeople','hre',
  'coldwar','space','sculptures','finds','documents','ww2cmd','arthur',
  'hoaxes','korea','playwrights','scots','civs','capitals','usvp',
  'africa','universities','commanders','renaissance','ukpm','scientists','koreanpeople',
  'pyramids','tsars','wrecks','outlaws','russrev','heroes','hansa',
  'crusadebattles','islamic','islamrulers','scripts','chphil','france','treasures',
  'treaties','paintings','republic','crusades','acw','disasters','pandemics',
  'japanemp','houses','walls','troy','empires','expeditions','unsg',
  'mesopotamia','architects','asiabattles','chinapeople','lost','queens','greekmonu',
  'epics','knights','hyw','palaces','moon','ottoman','maths',
  'egyptgods','seasia','rome','greekleaders','greekphil','latam','animals',
  'romebattles','traderoutes','ruins','decolon','shogun','engmon','canals',
  'classwriters','khans','medwomen','greekbattles','norsegods','founders','inv1',
  'hellenistic','impress','chinaemp','nicknames','firstlady','napoleon','bridges',
  'polis','persia','shipsx','soviet','composers','china','thegreat',
  'romangods','pope','ww1','romanbuild','spies','aviation','trials',
  'reformation','olympics','frenchrev','india','mughal','wives','wonders',
  'medbattles','poets','speeches','mesogods','archaeologists','ancientwomen','samurai',
  'spain','medthinkers','amrev','revs','womensci','libraries','enlight',
  'byzantine','pharaoh','suffrage','japan','wars','norway','novels',
  'aztecgods','assassinations','provinces',
],
[ // season 14 — seed 'dugup-order-v14', frozen 2026-11-22
  'moon','capitals','islamic','pyramids','firstlady','koreanpeople','ww1',
  'animals','hre','mughal','pandemics','troy','republic','paintings',
  'assassinations','bridges','china','crusadebattles','crusades','shipsx','latam',
  'norway','greekleaders','composers','speeches','persia','romebattles','chinaemp',
  'arthur','maths','scripts','hansa','france','classwriters','revs',
  'outlaws','asiabattles','medthinkers','chphil','decolon','hellenistic','ottoman',
  'traderoutes','epics','thegreat','trials','russrev','aztecgods','libraries',
  'naval','provinces','korea','aviation','greekphil','disasters','rome',
  'byzantine','ruins','wars','vikings','lost','reformation','india',
  'olympics','nicknames','mesogods','archaeologists','unsg','romanbuild','napoleon',
  'enlight','space','shogun','soviet','islamrulers','tsars','mesopotamia',
  'amrev','canals','knights','treasures','playwrights','treaties','norsegods',
  'japan','ancientwomen','houses','frenchrev','acw','britindep','polar',
  'poets','scientists','wonders','coldwar','japanemp','worship','spain',
  'novels','hyw','universities','romangods','usvp','greekmonu','indiapeople',
  'africa','ukpm','queens','renaissance','commanders','palaces','polis',
  'womensci','expeditions','suffrage','hoaxes','seasia','impress','heroes',
  'ww2cmd','scots','medwomen','civs','documents','empires','walls',
  'chinapeople','architects','founders','pharaoh','greekbattles','engmon','inv1',
  'spies','egyptgods','khans','wrecks','sculptures','samurai','finds',
  'medbattles','pope','wives',
],
[ // season 15 — seed 'dugup-order-v15', frozen 2026-11-22
  'worship','ww1','epics','scots','seasia','universities','expeditions',
  'firstlady','republic','romebattles','empires','playwrights','revs','spain',
  'egyptgods','inv1','hellenistic','chinapeople','bridges','usvp','romangods',
  'amrev','poets','treasures','provinces','norway','crusades','assassinations',
  'korea','persia','womensci','shipsx','enlight','commanders','capitals',
  'disasters','ruins','tsars','koreanpeople','aztecgods','suffrage','architects',
  'naval','scripts','africa','pope','moon','france','palaces',
  'india','scientists','sculptures','ancientwomen','asiabattles','polar','decolon',
  'mesogods','hre','trials','ottoman','chinaemp','civs','impress',
  'documents','medbattles','olympics','knights','founders','pharaoh','thegreat',
  'paintings','maths','indiapeople','crusadebattles','lost','norsegods','khans',
  'wrecks','mesopotamia','classwriters','rome','canals','russrev','china',
  'wars','vikings','romanbuild','coldwar','novels','pandemics','mughal',
  'queens','heroes','samurai','ww2cmd','unsg','hoaxes','finds',
  'walls','outlaws','reformation','traderoutes','ukpm','engmon','acw',
  'japan','polis','britindep','medthinkers','islamic','latam','troy',
  'aviation','hansa','nicknames','hyw','greekmonu','soviet','shogun',
  'greekphil','speeches','pyramids','byzantine','napoleon','houses','archaeologists',
  'chphil','renaissance','medwomen','libraries','arthur','frenchrev','animals',
  'space','wonders','greekbattles','treaties','wives','composers','japanemp',
  'islamrulers','greekleaders','spies',
],
[ // season 16 — seed 'dugup-order-v16', frozen 2026-11-22
  'engmon','wars','persia','documents','crusades','ancientwomen','greekphil',
  'olympics','chinapeople','houses','moon','egyptgods','treasures','greekmonu',
  'greekbattles','space','composers','soviet','khans','korea','acw',
  'france','wrecks','polis','hansa','treaties','poets','vikings',
  'romangods','japan','amrev','speeches','ruins','tsars','architects',
  'pandemics','ottoman','unsg','libraries','outlaws','romanbuild','asiabattles',
  'india','rome','classwriters','latam','medthinkers','shipsx','troy',
  'animals','mesopotamia','africa','crusadebattles','founders','samurai','enlight',
  'norway','palaces','inv1','pyramids','usvp','ww1','islamic',
  'chinaemp','heroes','frenchrev','scots','medwomen','mughal','finds',
  'archaeologists','worship','napoleon','russrev','renaissance','japanemp','maths',
  'spain','hellenistic','revs','paintings','naval','britindep','mesogods',
  'trials','indiapeople','republic','assassinations','knights','bridges','wives',
  'impress','ww2cmd','disasters','polar','civs','scientists','seasia',
  'hre','empires','decolon','novels','aztecgods','medbattles','walls',
  'wonders','suffrage','universities','china','queens','reformation','scripts',
  'hyw','lost','islamrulers','aviation','expeditions','chphil','canals',
  'arthur','firstlady','playwrights','nicknames','hoaxes','greekleaders','commanders',
  'spies','pope','koreanpeople','sculptures','pharaoh','byzantine','thegreat',
  'romebattles','ukpm','capitals','norsegods','womensci','epics','provinces',
  'shogun','coldwar','traderoutes',
],
[ // season 17 — seed 'dugup-order-v17', frozen 2026-11-22
  'palaces','ancientwomen','trials','ww1','troy','soviet','france',
  'vikings','chinaemp','impress','moon','maths','ww2cmd','canals',
  'epics','byzantine','provinces','hre','britindep','coldwar','japanemp',
  'republic','enlight','polar','mesogods','naval','decolon','knights',
  'thegreat','mesopotamia','chphil','sculptures','libraries','suffrage','aviation',
  'persia','medbattles','finds','disasters','treasures','norway','renaissance',
  'aztecgods','korea','hyw','wrecks','treaties','hansa','pyramids',
  'pope','composers','ottoman','spain','koreanpeople','documents','inv1',
  'wars','pharaoh','arthur','classwriters','russrev','scots','india',
  'bridges','greekbattles','romanbuild','khans','firstlady','medthinkers','greekphil',
  'shipsx','tsars','founders','samurai','greekleaders','womensci','hoaxes',
  'commanders','romangods','paintings','worship','lost','islamrulers','wonders',
  'wives','shogun','romebattles','speeches','islamic','crusades','hellenistic',
  'archaeologists','spies','heroes','outlaws','engmon','scientists','olympics',
  'acw','japan','poets','africa','usvp','polis','queens',
  'amrev','reformation','china','assassinations','medwomen','civs','animals',
  'capitals','norsegods','mughal','unsg','pandemics','napoleon','architects',
  'rome','traderoutes','indiapeople','greekmonu','revs','novels','crusadebattles',
  'walls','nicknames','frenchrev','scripts','chinapeople','egyptgods','empires',
  'universities','latam','playwrights','space','asiabattles','ruins','houses',
  'seasia','expeditions','ukpm',
],
[ // season 18 — seed 'dugup-order-v18', frozen 2026-11-22
  'khans','enlight','vikings','soviet','capitals','greekmonu','crusadebattles',
  'france','founders','impress','mesogods','wonders','scientists','byzantine',
  'chinapeople','expeditions','medbattles','coldwar','rome','japanemp','architects',
  'canals','hoaxes','medwomen','documents','romanbuild','acw','tsars',
  'korea','outlaws','epics','ukpm','norsegods','mughal','civs',
  'polar','inv1','bridges','greekbattles','treaties','reformation','houses',
  'samurai','hellenistic','pope','latam','naval','empires','classwriters',
  'aztecgods','finds','decolon','wives','india','olympics','womensci',
  'treasures','hyw','disasters','novels','archaeologists','ancientwomen','spain',
  'shogun','africa','knights','spies','egyptgods','wars','composers',
  'hansa','mesopotamia','firstlady','thegreat','seasia','pandemics','greekleaders',
  'paintings','amrev','lost','islamrulers','wrecks','scots','libraries',
  'indiapeople','universities','heroes','moon','provinces','islamic','commanders',
  'revs','animals','norway','koreanpeople','republic','persia','greekphil',
  'maths','ww2cmd','frenchrev','walls','troy','pharaoh','crusades',
  'russrev','queens','playwrights','china','traderoutes','napoleon','britindep',
  'suffrage','ruins','poets','palaces','hre','japan','aviation',
  'asiabattles','speeches','romangods','polis','medthinkers','renaissance','assassinations',
  'ottoman','nicknames','chphil','trials','ww1','shipsx','scripts',
  'worship','unsg','sculptures','space','arthur','engmon','chinaemp',
  'romebattles','usvp','pyramids',
],
[ // season 19 — seed 'dugup-order-v19', frozen 2026-11-22
  'provinces','greekphil','inv1','pope','medbattles','moon','rome',
  'mesogods','civs','islamic','japanemp','spies','bridges','treasures',
  'greekbattles','islamrulers','hre','suffrage','greekleaders','wrecks','paintings',
  'scientists','korea','vikings','romangods','commanders','soviet','queens',
  'pharaoh','palaces','novels','byzantine','disasters','japan','napoleon',
  'republic','houses','coldwar','architects','arthur','space','medwomen',
  'walls','koreanpeople','polar','acw','wonders','revs','mughal',
  'hoaxes','enlight','wives','lost','polis','samurai','romebattles',
  'impress','norsegods','assassinations','olympics','tsars','aviation','crusades',
  'khans','mesopotamia','naval','seasia','unsg','traderoutes','composers',
  'engmon','pyramids','founders','canals','wars','indiapeople','troy',
  'epics','britindep','speeches','greekmonu','thegreat','maths','medthinkers',
  'trials','ww2cmd','firstlady','renaissance','chphil','scripts','libraries',
  'archaeologists','usvp','norway','heroes','africa','hyw','playwrights',
  'chinaemp','ancientwomen','frenchrev','womensci','universities','spain','sculptures',
  'asiabattles','treaties','capitals','hellenistic','india','empires','aztecgods',
  'russrev','scots','shipsx','reformation','ww1','finds','animals',
  'documents','chinapeople','hansa','pandemics','knights','poets','ruins',
  'nicknames','ottoman','crusadebattles','decolon','egyptgods','outlaws','shogun',
  'latam','classwriters','romanbuild','amrev','france','worship','expeditions',
  'ukpm','persia','china',
],
[ // season 20 — seed 'dugup-order-v20', frozen 2026-11-22
  'nicknames','bridges','treaties','sculptures','samurai','medwomen','civs',
  'assassinations','wrecks','thegreat','africa','arthur','medbattles','renaissance',
  'amrev','founders','finds','korea','pandemics','libraries','spain',
  'disasters','impress','wars','trials','pharaoh','crusades','chinaemp',
  'islamrulers','revs','troy','paintings','walls','wives','acw',
  'expeditions','greekleaders','speeches','womensci','japan','poets','latam',
  'republic','scots','ww2cmd','byzantine','pope','olympics','aztecgods',
  'japanemp','suffrage','architects','hellenistic','crusadebattles','rome','ukpm',
  'inv1','traderoutes','indiapeople','britindep','hoaxes','greekmonu','playwrights',
  'decolon','hyw','hansa','queens','egyptgods','knights','ruins',
  'moon','epics','shogun','asiabattles','ottoman','lost','tsars',
  'scientists','pyramids','greekphil','capitals','shipsx','chphil','spies',
  'mesogods','commanders','mesopotamia','norway','universities','composers','soviet',
  'mughal','china','naval','canals','treasures','ancientwomen','russrev',
  'space','france','reformation','romangods','documents','koreanpeople','greekbattles',
  'archaeologists','romanbuild','persia','medthinkers','classwriters','houses','frenchrev',
  'worship','scripts','india','ww1','firstlady','islamic','aviation',
  'heroes','engmon','wonders','empires','unsg','napoleon','chinapeople',
  'novels','palaces','polar','vikings','usvp','hre','animals',
  'polis','romebattles','outlaws','seasia','enlight','coldwar','norsegods',
  'maths','khans','provinces',
],
];



