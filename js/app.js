(function(){
'use strict';

/* =========================================================
   CONFIG
   ========================================================= */
const ROUND_SIZE = 7;
const TIME_LIMIT = 30;           // seconds per prompt
const SHARE_URL = 'dugup.eu';
const EPOCH = Date.UTC(2026, 10, 22); // Dig #1 = 22 Nov 2026

const TIERS = [
  {name:'Just a Rock',          pts:0,   emoji:'🪨', spr:'rock'},
  {name:'Topsoil',              pts:10,  emoji:'🟫', spr:'soil'},
  {name:'Pottery Shard',        pts:15,  emoji:'🏺', spr:'shard'},
  {name:'Old Coin',             pts:30,  emoji:'🪙', spr:'coin'},
  {name:'Relic',                pts:60,  emoji:'🗿', spr:'relic'},
  {name:'Lost Scroll',          pts:85,  emoji:'📜', spr:'scroll'},
  {name:'Forgotten by History', pts:100, emoji:'👑', spr:'crown'}
];
const TIER_BLURB = [
  '', 'Everybody digs this one up.', 'A common find &mdash; still counts!', 'Now we\'re getting somewhere.',
  'A proper find. The museum will want this.', 'Very few diggers reach this deep.', 'Almost nobody remembers this one. Magnificent.'
];

/* =========================================================
   SMALL UTILS
   ========================================================= */
const $ = id => document.getElementById(id);
const store = {
  get(k, d){ try{ const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
function hashStr(s){ let h = 2166136261 >>> 0; for (let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function mulberry32(a){ return function(){ a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffle(arr, rnd){ for (let i=arr.length-1;i>0;i--){ const j = Math.floor(rnd()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function pad2(n){ return (n<10?'0':'') + n; }
function dateKey(d){ d = d || new Date(); return d.getFullYear() + '-' + pad2(d.getMonth()+1) + '-' + pad2(d.getDate()); }
function dayNumber(d){ d = d || new Date(); return Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - EPOCH) / 86400000) + 1; }
function yesterdayKey(){ const d = new Date(); d.setDate(d.getDate()-1); return dateKey(d); }
function wikiURL(title){ return 'https://en.wikipedia.org/wiki/' + encodeURIComponent(title.replace(/ /g,'_')); }
function hx(h){ h = h.replace('#',''); return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)]; }
function mix(a, b, t){ const A = hx(a), B = hx(b); return '#' + A.map((v,i) => Math.round(v + (B[i]-v)*t).toString(16).padStart(2,'0')).join(''); }

/* =========================================================
   PIXEL ART
   ========================================================= */
const PAL = {
  o:'#2b1a10', h:'#d9a35b', H:'#a8743e', b:'#7a3b1e', s:'#f5c79a', S:'#d99a6c', e:'#2b1a10',
  r:'#c8442f', R:'#8f2a1f', c:'#7d9a3c', C:'#5b7330', p:'#8a5a36', P:'#654024', k:'#4a3020',
  w:'#b07a42', W:'#7d5230', m:'#dfe6e9', M:'#8f9ca3', y:'#ffd84a', Y:'#d79a1e', g:'#fff6c9',
  t:'#c96b3a', T:'#8e4424', q:'#f2e2b8', Q:'#cfb57e', d:'#7a5134', D:'#55361f', G:'#6abe30', L:'#99e550',
  x:'#9aa0a6', X:'#6b7177', z:'#c9ced2', v:'#e04848', V:'#a02a2a', u:'#4aa3df', n:'#efe6d2', N:'#c7b997',
  K:'#1f1b1b', j:'#62b06d', J:'#3e7d4b', f:'#ffb347',
  a:'#efc47c', B:'#5a3a20', l:'#9cb85a', i:'#6b4a33'
};
const SPR = {
  torso:[
    '....oooo....',
    '...ohhhHo...',
    '..obbbbbbo..',
    'oohhhhhhhhoo',
    'oHHHHHHHHHHo',
    '..oSSSSSSo..',
    '..oSsssessso',
    '..oSsssssSo.',
    '...oSSSSo...',
    '..orrrrRRo..',
    '..occllcCo..',
    '..occcBcCo..',
    '..occBccCo..',
    '..obBbybbo..'
  ],
  legs:[
    '..oPPPpppo..',
    '..oPPoppo...',
    '..oPPoppo...',
    '..okkokkko..',
    '..oooooooo..'
  ],
  legsC:[
    '..oPPPpppo..',
    '..oPPoppo...',
    '..okkokkko..',
    '..oooooooo..'
  ],
  spk:[
    '....Y......',
    '...Yy...g..',
    'YYYyy.g..g.',
    'Yyyyy..g..g',
    'Yyyyy..g..g',
    'Yyyyy..g..g',
    'YYYyy.g..g.',
    '...Yy...g..',
    '....Y......'
  ],
  spkOff:[
    '....Y......',
    '...Yy......',
    'YYYyy.v...v',
    'Yyyyy..v.v.',
    'Yyyyy...v..',
    'Yyyyy..v.v.',
    'YYYyy.v...v',
    '...Yy......',
    '....Y......'
  ],
  rock:[
    '............',
    '............',
    '....oooo....',
    '..ooxzzxoo..',
    '.oxzzzxxxXo.',
    '.oxzxxxxXXo.',
    'oxxxxxxXXXXo',
    'oXxxxxXXXXXo',
    '.oXXXXXXXXo.',
    '..oooooooo..',
    '............',
    '............'
  ],
  soil:[
    '....oo..oo..',
    '...oLLooLGo.',
    '....oGLGGo..',
    '.....oGGo...',
    '..ooooGoooo.',
    '.oddddGdddDo',
    'odddDddddDDo',
    'oddxdddDdDDo',
    'oDdddddDDDDo',
    '.oDDDDDDDDo.',
    '..oooooooo..',
    '............'
  ],
  shard:[
    '............',
    '...ooo......',
    '..ottToo....',
    '.otttttToo..',
    '.oqqqqqqqTo.',
    'ottttttttTo.',
    'otTqtTqtTTo.',
    'otttttttTTo.',
    '.oTTttTTTo..',
    '..ooTTTTo...',
    '....oooo....',
    '............'
  ],
  coin:[
    '............',
    '....oooo....',
    '..ooyyyyoo..',
    '.oygyyyyyYo.',
    '.oyyYYYYyYo.',
    'oyyYyyyyYyYo',
    'oyyYyYYyYyYo',
    'oyyYyyyyYyYo',
    '.oyyYYYYyYo.',
    '.oYyyyyyYYo.',
    '..ooYYYYoo..',
    '....oooo....'
  ],
  relic:[
    '.....oo.....',
    '....oyYo....',
    '....oYYo....',
    '...ooyyoo...',
    '..oyyyyyYo..',
    '.oygyvvyyYo.',
    '.oyyvgvVyYo.',
    '.oyyvVVVyYo.',
    '.oYyyvVyyYo.',
    '..oYyyyyYo..',
    '...oYYYYo...',
    '....oooo....'
  ],
  scroll:[
    '.oooooooooo.',
    'oqqqqqqqqqQo',
    'oQQQQQQQQQQo',
    '.oqqqqqqqqo.',
    '.oqDDqDDDqo.',
    '.oqqqqqqqqo.',
    '.oqDDDqDDqo.',
    '.oqqqvvqqqo.',
    '.oqqqVVqqqo.',
    'oqqqqqqqqqQo',
    'oQQQQQQQQQQo',
    '.oooooooooo.'
  ],
  crown:[
    '............',
    '.o...oo...o.',
    'oyo.oyyo.oyo',
    'oyyoyyyyoyyo',
    'oyyyyyyyyyYo',
    'oyvyyuuyyvYo',
    'oyyyyyyyyyYo',
    'oYYYYYYYYYYo',
    'oyygyyyygyYo',
    'oYYYYYYYYYYo',
    '.oooooooooo.',
    '............'
  ],
  bone:['N...N','nnnnn','N...N'],
  skull:['.nnn.','nnnnn','nDnDn','.nnn.','.N.N.'],
  amphora:['.T.T.','TtttT','.ttt.','ttttt','tttTT','.tTT.','..T..'],
  coinS:['.y.','yYy','.Y.'],
  coal:['KK.','KKK'],
  gear:['x.x.x','.xxx.','xx.xx','.xxx.','x.x.x'],
  bottle:['.j.','.j.','jjj','jJj','jjj','jjJ'],
  sword:['y.......','YmmmmmmM','y.......'],
  arrow:['.z.','zxz','xXx','.X.'],
  shardS:['tt..','tTt.','.TT.'],
  ammonite:['.zzzz.','z....x','z.zx.x','z.z..x','.z.xx.','..x...'],
  dino:[
    '....nnnnnnn...',
    '..nnnNnnnnnnn.',
    '.nnDDnnnnnnnnn',
    'nnnDDnnnnNNnnn',
    'nnnnnnnnnNNNn.',
    'nnnnnnnn......',
    '.n.n.n.nnnnnn.',
    '..............'
  ],
  lantern:['.o.','oyo','yfy','.o.']
};

const sprCache = {};
function sprCanvas(name){
  if (sprCache[name]) return sprCache[name];
  const rows = SPR[name], h = rows.length, w = rows[0].length;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  for (let j=0;j<h;j++) for (let i=0;i<w;i++){ const ch = rows[j][i]; if (ch === '.' || !PAL[ch]) continue; g.fillStyle = PAL[ch]; g.fillRect(i,j,1,1); }
  sprCache[name] = c; return c;
}
const urlCache = {};
function sprURL(name){
  if (!urlCache[name]){ try{ urlCache[name] = sprCanvas(name).toDataURL(); }catch(e){ urlCache[name] = ''; } }
  return urlCache[name];
}
function headURL(sk){
  const src = skinCanvas('torso', sk); const c = document.createElement('canvas'); c.width = 12; c.height = 12;
  const g = c.getContext('2d'); g.drawImage(src, 0, 0, 12, 9, 0, 2, 12, 9);
  try{ return c.toDataURL(); }catch(e){ return ''; }
}

/* =========================================================
   OUTFITS — palette swaps + replacement rows for the 12x14 torso
   ========================================================= */
const SKINS = [
  {id:'explorer', name:'Explorer', desc:'Your trusty field kit.', req:null},
  {id:'miner', name:'Miner', desc:'Hard hat and headlamp &mdash; lights up the deep.', req:{type:'digs', n:3},
   pal:{c:'#4f6d8f', C:'#3b5370', l:'#a9bfd6', B:'#2e3440', P:'#3b5370', p:'#4f6d8f', k:'#2b2b2b'},
   rows:{0:'...oooooo...', 1:'..oyyyyyyo..', 2:'..oyyyyyoggo', 3:'.oyyyyyyyyoo', 4:'oYYYYYYYYYYo'},
   arms:['#3b5370', '#4f6d8f'], lamp:true},
  {id:'roman', name:'Legionary', desc:'Veni, vidi, fodi &mdash; I came, I saw, I dug.', req:{type:'digs', n:10},
   pal:{c:'#c8442f', C:'#8f2a1f', l:'#ffd84a', B:'#7a5134', b:'#b07a42', r:'#cfd6da', R:'#8f9ca3', P:'#d99a6c', p:'#f5c79a', k:'#7a5134'},
   rows:{0:'..ovvvvvo...', 1:'...ommmmo...', 2:'..ommmmmmo..', 3:'.ommmmmmmmo.', 4:'oMMMMMMMMMMo'},
   arms:['#8f2a1f', '#c8442f']},
  {id:'viking', name:'Historically Inaccurate Viking', desc:'Real Vikings never wore horned helmets &mdash; that was a 19th-century opera costume. We don\'t care.', req:{type:'streak', n:7},
   pal:{c:'#6b4a33', C:'#4a3020', l:'#9aa0a6', B:'#8a5a36', r:'#5b7330', R:'#3e5a26', P:'#7a5134', p:'#9a6a44', k:'#4a3020'},
   rows:{0:'.q..oooo..q.', 1:'.qoommmmooq.', 2:'..ommmmmmo..', 3:'.oMmmmmmmmo.', 4:'oMMMMMMMMMMo', 7:'..oStttttto.', 8:'...ottttto..'},
   arms:['#4a3020', '#6b4a33']},
  {id:'pharaoh', name:'Pharaoh', desc:'Striped nemes, golden collar, zero regrets.', req:{type:'digs', n:25},
   pal:{u:'#3a6fd8', c:'#efe6d2', C:'#c7b997', l:'#ffd84a', B:'#d79a1e', b:'#3a6fd8', r:'#ffd84a', R:'#d79a1e', P:'#efe6d2', p:'#c7b997', k:'#d79a1e'},
   rows:{0:'....oooo....', 1:'...oyuyuo...', 2:'..oyuyuyuo..', 3:'.oyuyuyuyuo.', 4:'ouyuyuyuyuyo'},
   arms:['#d99a6c', '#f5c79a']},
  {id:'knight', name:'Knight', desc:'Fifty finds on your shelves earns you the armour.', req:{type:'museum', n:50},
   pal:{c:'#efe6d2', C:'#c7b997', l:'#c8442f', B:'#8a5a36', r:'#9aa0a6', R:'#6b7177', P:'#9aa0a6', p:'#b8bec3', k:'#6b7177'},
   rows:{0:'...oooooo...', 1:'..ommmmmmo..', 2:'.ommmmmmmmo.', 3:'.ommmmmmmmo.', 4:'.oMmmmmmmmo.', 5:'.oMmmKKKKKo.', 6:'.oMmmmmmzmo.', 7:'.oMMmmmmmMo.', 8:'..oMMMMMMo..'},
   arms:['#6b7177', '#9aa0a6'], hands:['#6b7177', '#b8bec3'], noBlink:true},
  {id:'victorian', name:'Gentleman Antiquarian', desc:'Top hat, tweed and a moustache, c. 1880.', req:{type:'digs', n:50},
   pal:{v:'#7a1f2a', c:'#5a3a20', C:'#3e2a18', l:'#efe6d2', B:'#2b1a10', b:'#2b1a10', r:'#efe6d2', R:'#c7b997', P:'#4a4440', p:'#5e5852', k:'#1f1b1b'},
   rows:{0:'...oKKKKo...', 1:'...oKKKKo...', 2:'...ovvvvo...', 3:'...oKKKKo...', 4:'.oKKKKKKKKo.', 7:'..oSsssKKKo.'},
   arms:['#3e2a18', '#5a3a20']},
  {id:'dino', name:'Dino Suit', desc:'Dig all the way down to the fossil beds and come back as one.', req:{type:'depth', n:580},
   pal:{c:'#62b06d', C:'#3e7d4b', l:'#f2e2b8', B:'#3e7d4b', b:'#3e7d4b', r:'#3e7d4b', R:'#2b5a35', P:'#3e7d4b', p:'#62b06d', k:'#2b5a35'},
   rows:{0:'...oooooo...', 1:'..ojjjjjjoo.', 2:'.ojjjjjjKjjo', 3:'ojjjjjjnjnjo', 4:'oJJJJJJJJJJo'},
   arms:['#3e7d4b', '#62b06d']},
  {id:'royal', name:'Royal', desc:'A perfect dig deserves a crown.', req:{type:'perfect', n:1},
   pal:{c:'#7b3fa0', C:'#58287a', l:'#ffd84a', B:'#efe6d2', b:'#ffd84a', r:'#efe6d2', R:'#c7b997', P:'#58287a', p:'#7b3fa0', k:'#2b1a10'},
   rows:{0:'...y.yy.y...', 1:'..oyyyyyyo..', 2:'..oyvyyuyo..', 3:'.oddddddddo.', 4:'.oddddddddo.'},
   arms:['#58287a', '#7b3fa0']},
  {id:'golden', name:'Golden Digger', desc:'One hundred digs. Solid gold, shovel included.', req:{type:'digs', n:100},
   pal:{h:'#ffd84a', H:'#d79a1e', b:'#fff6c9', c:'#ffd84a', C:'#d79a1e', l:'#fff6c9', B:'#d79a1e', r:'#fff6c9', R:'#efc47c', P:'#d79a1e', p:'#ffd84a', k:'#a87a1e'},
   arms:['#d79a1e', '#ffd84a'], blade:'#ffd84a', bladeHi:'#fff6c9', sparkle:true}
];
const REQ_TEXT = {
  digs: n => 'Play ' + n + ' digs',
  streak: n => 'Keep a ' + n + '-day streak',
  museum: n => 'Put ' + n + ' finds in your museum',
  depth: n => 'Dig ' + n + ' m deep in one go',
  perfect: () => 'Find something on all 7 prompts in one dig'
};
function skinById(id){ return SKINS.find(s => s.id === id) || SKINS[0]; }
const skinCache = {};
function skinCanvas(name, sk){
  sk = sk || SKINS[0];
  if (!sk.pal && !sk.rows) return sprCanvas(name);
  const key = name + '|' + sk.id;
  if (skinCache[key]) return skinCache[key];
  const rows = SPR[name].slice();
  if (name === 'torso' && sk.rows) for (const k in sk.rows) rows[+k] = sk.rows[k];
  const pal = Object.assign({}, PAL, sk.pal || {});
  const h = rows.length, w = rows[0].length;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  for (let j=0;j<h;j++) for (let i=0;i<w;i++){ const ch = rows[j][i]; if (ch === '.' || !pal[ch]) continue; g.fillStyle = pal[ch]; g.fillRect(i,j,1,1); }
  skinCache[key] = c; return c;
}

/* 9-slice pixel frames for CSS border-image */
function frameURL(n, rings, fill){
  // grid (2n+1)^2, ring d = distance to edge; ring entries are [topLeftColor, bottomRightColor]
  const S = 2*n + 1; let r = '';
  for (let y=0;y<S;y++) for (let x=0;x<S;x++){
    const d = Math.min(x, y, S-1-x, S-1-y);
    if (d === 0 && (x===0||x===S-1) && (y===0||y===S-1)) continue; // notched corner
    let col;
    if (d >= n) col = fill;
    else { const ring = rings[d]; const tl = (y===d) ? true : (y===S-1-d) ? false : (x===d); col = tl ? ring[0] : ring[1]; }
    r += '<rect x="'+x+'" y="'+y+'" width="1" height="1" fill="'+col+'"/>';
  }
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="'+S+'" height="'+S+'" viewBox="0 0 '+S+' '+S+'" shape-rendering="crispEdges">'+r+'</svg>';
  return 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")';
}
function installFrames(){
  const root = document.documentElement.style;
  const O = '#3b1d0c';
  root.setProperty('--f-parch', frameURL(4, [[O,O],['#e09a58','#8a4a1c'],['#b4692c','#b4692c'],['#fff4d6','#e2c186']], '#f7e4b5'));
  root.setProperty('--f-wood',  frameURL(4, [[O,O],['#c98544','#5e3114'],['#8a4c1f','#8a4c1f'],['#4a2511','#4a2511']], '#2a1a10'));
  root.setProperty('--f-gold',  frameURL(4, [[O,O],['#ffe28f','#a85e08'],['#f6b627','#f6b627'],['#ffd35f','#e3971c']], '#f6b627'));
  root.setProperty('--f-woodbtn', frameURL(4, [[O,O],['#d58a43','#4f2710'],['#9a5524','#9a5524'],['#b06a33','#844419']], '#9a5524'));
  root.setProperty('--f-inset', frameURL(3, [['#5a3a20','#5a3a20'],['#b98d55','#f3dcae'],['#fff7df','#fff7df']], '#fff7df'));
  // background dirt tile
  const c = document.createElement('canvas'); c.width = 32; c.height = 32; const g = c.getContext('2d');
  const rnd = mulberry32(77); g.fillStyle = '#3a2414'; g.fillRect(0,0,32,32);
  for (let i=0;i<70;i++){ g.fillStyle = rnd()<0.5 ? '#432a18' : '#311d10'; g.fillRect(Math.floor(rnd()*32), Math.floor(rnd()*32), 1, 1); }
  for (let i=0;i<4;i++){ const x = Math.floor(rnd()*30), y = Math.floor(rnd()*31); g.fillStyle = '#4f3423'; g.fillRect(x,y,2,1); g.fillStyle='#2a180c'; g.fillRect(x,y+1,2,1); }
  try{ root.setProperty('--bgtile', 'url("' + c.toDataURL() + '")'); }catch(e){}
}

/* 3x5 pixel font for the scene */
const FONT = {
A:'010101111101101',B:'110101110101110',C:'011100100100011',D:'110101101101110',E:'111100110100111',F:'111100110100100',
G:'011100101101011',H:'101101111101101',I:'111010010010111',J:'001001001101010',K:'101101110101101',L:'100100100100111',
M:'101111111101101',N:'110101101101101',O:'010101101101010',P:'110101110100100',Q:'010101101110011',R:'110101110101101',
S:'011100010001110',T:'111010010010010',U:'101101101101111',V:'101101101101010',W:'101101111111101',X:'101101010101101',
Y:'101101010010010',Z:'111001010100111','0':'111101101101111','1':'010110010010111','2':'110001010100111','3':'110001010001110',
'4':'101101111001001','5':'111100110001110','6':'011100111101111','7':'111001010010010','8':'111101111101111','9':'111101111001110',
'-':'000000111000000','.':'000000000000010',':':'000010000010000','/':'001001010100100','+':'000010111010000',' ':'000000000000000',
'!':'010010010000010'
};
function textW(s, z){ z = z || 1; return (String(s).length*4 - 1) * z; }
function drawText(g, s, x, y, color, shadow, z){
  s = String(s).toUpperCase(); z = z || 1; x = Math.round(x); y = Math.round(y);
  const pass = (col, oy) => { g.fillStyle = col; for (let k=0;k<s.length;k++){ const f = FONT[s[k]] || FONT[' ']; for (let i=0;i<15;i++) if (f[i]==='1') g.fillRect(x + (k*4 + i%3)*z, y + oy + (i/3|0)*z, z, z); } };
  if (shadow) pass(shadow, z);
  pass(color, 0);
}

/* =========================================================
   TEXT NORMALISATION & MATCHING
   ========================================================= */
const STOP = new Set(['the','of','a','an','and','at','in','on','battle','battles','siege','sieges','operation','dynasty','period','era',
  'revolution','revolutions','crusade','crusades','king','queen','emperor','empress','tsar','czar','tsarina','tsaritsa','sultan',
  'pharaoh','president','sir','pope','prince','princess','lord','lady','hms','rms','uss','ss','ms','mv','sms','hmhs','ps','dr',
  'captain','capt','mr','mrs','general','admiral']);
const NUMW = {first:'1',second:'2',third:'3',fourth:'4',fifth:'5',sixth:'6',seventh:'7',eighth:'8',ninth:'9',tenth:'10',eleventh:'11',twelfth:'12',thirteenth:'13',fourteenth:'14',fifteenth:'15'};
const ROMAN_RE = /^(x{0,3})(ix|iv|v?i{0,3})$/;
function romanToInt(s){ const v = {i:1,v:5,x:10}; let n = 0; for (let i=0;i<s.length;i++){ const a = v[s[i]], b = v[s[i+1]] || 0; n += a < b ? -a : a; } return n; }
function normalize(str){
  let s = String(str || '').toLowerCase();
  s = s.replace(/[øØ]/g,'o').replace(/æ/g,'ae').replace(/œ/g,'oe').replace(/ß/g,'ss').replace(/[ðđ]/g,'d').replace(/þ/g,'th').replace(/ł/g,'l').replace(/ı/g,'i');
  s = s.normalize('NFD').replace(/[̀-ͯ]/g,'');
  s = s.replace(/[’'`ʻʼ‘]/g,'');
  s = s.replace(/[^a-z0-9]+/g,' ').trim();
  const toks = [];
  for (let t of s.split(' ')){
    if (!t) continue;
    if (NUMW[t]) t = NUMW[t];
    const m = t.match(/^(\d+)(st|nd|rd|th)$/);
    if (m) t = m[1];
    else if (/^[ivx]+$/.test(t) && ROMAN_RE.test(t)) t = String(romanToInt(t));
    if (STOP.has(t)) continue;
    toks.push(t);
  }
  const letters = toks.filter(t => !/^\d+$/.test(t)).join('');
  const digits = toks.filter(t => /^\d+$/.test(t)).join(',');
  return {letters, digits, key: letters + '#' + digits};
}
function lev(a, b, max){
  if (a === b) return 0;
  const la = a.length, lb = b.length;
  if (Math.abs(la - lb) > max) return max + 1;
  let prev = new Array(lb+1), cur = new Array(lb+1);
  for (let j=0;j<=lb;j++) prev[j] = j;
  for (let i=1;i<=la;i++){
    cur[0] = i; let best = cur[0];
    for (let j=1;j<=lb;j++){
      const cost = a.charCodeAt(i-1) === b.charCodeAt(j-1) ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j-1] + 1, prev[j-1] + cost);
      if (cur[j] < best) best = cur[j];
    }
    if (best > max) return max + 1;
    const t = prev; prev = cur; cur = t;
  }
  return prev[lb];
}
function allowed(n){ return n <= 3 ? 0 : n <= 5 ? 1 : n <= 11 ? 2 : 3; }

function buildPrompts(){
  return PROMPT_DATA.map(p => {
    const answers = [];
    p.list.trim().split('\n').forEach(line => {
      line = line.trim(); if (!line) return;
      const parts = line.split('|');
      const disp = parts[1].trim(); let wk = (parts[2] && parts[2].trim()) || disp;
      if (wk === '*') wk = p.wf ? p.wf.replace('{}', disp) : disp;
      const a = {tier: +parts[0], display: disp, wiki: wk, keys: []};
      const seen = new Set();
      [a.display].concat(parts[3] ? parts[3].split(';') : []).forEach(sv => {
        const n = normalize(sv); if (!n.letters && !n.digits) return;
        if (seen.has(n.key)) return; seen.add(n.key); a.keys.push(n);
      });
      answers.push(a);
    });
    const nopeList = [];
    Object.keys(p.nope || {}).forEach(k => k.split('|').forEach(sv => { const n = normalize(sv); if (n.letters || n.digits) nopeList.push({n, msg: p.nope[k]}); }));
    const ambMap = {};
    Object.keys(p.amb || {}).forEach(k => k.split('|').forEach(sv => { const n = normalize(sv); ambMap[n.key] = p.amb[k]; }));
    return {id:p.id, cat:p.cat, q:p.q, hint:p.hint || '', answers, nopeList, ambMap};
  });
}

function matchAnswer(p, input){
  const n = normalize(input);
  if (!n.letters && !n.digits) return {type:'amb', msg:'Be a little more specific!'};
  if (p.ambMap[n.key]) return {type:'amb', msg:p.ambMap[n.key]};
  // 1. exact valid
  for (const a of p.answers) for (const k of a.keys) if (k.key === n.key) return {type:'ok', answer:a};
  // 2. exact nope
  for (const e of p.nopeList) if (e.n.key === n.key) return {type:'nope', msg:e.msg};
  // 3. fuzzy valid (digits must match exactly)
  let best = null, bestD = 99, bestLen = 0;
  if (n.letters){
    for (const a of p.answers) for (const k of a.keys){
      if (k.digits !== n.digits || !k.letters) continue;
      const max = allowed(Math.min(k.letters.length, n.letters.length));
      if (!max) continue;
      const d = lev(n.letters, k.letters, max);
      if (d <= max && (d < bestD || (d === bestD && k.letters.length > bestLen))){ best = a; bestD = d; bestLen = k.letters.length; }
    }
  }
  if (best) return {type:'ok', answer:best, fuzzy:true};
  // 4. fuzzy nope
  if (n.letters){
    for (const e of p.nopeList){
      if (e.n.digits !== n.digits || !e.n.letters) continue;
      const max = Math.min(1, allowed(Math.min(e.n.letters.length, n.letters.length)));
      if (max && lev(n.letters, e.n.letters, max) <= max) return {type:'nope', msg:e.msg};
    }
  }
  // 5. contained alias ("hadrian the roman one")
  if (n.letters.length >= 6){
    for (const a of p.answers) for (const k of a.keys){
      if (k.letters.length >= 5 && n.letters.indexOf(k.letters) !== -1 && (!k.digits || n.digits.split(',').indexOf(k.digits) !== -1) && k.letters.length > bestLen){ best = a; bestLen = k.letters.length; }
    }
    if (best) return {type:'ok', answer:best, fuzzy:true};
  }
  return {type:'none'};
}

const PROMPTS = buildPrompts();
function tierOf(a){ return a.liveTier || a.tier; }

function pickRound(seed){
  const rnd = mulberry32(hashStr(seed));
  const idx = shuffle(PROMPTS.map((_, i) => i), rnd);
  const out = [], cats = {};
  for (const i of idx){
    const p = PROMPTS[i];
    if ((cats[p.cat] || 0) >= 2) continue;
    cats[p.cat] = (cats[p.cat] || 0) + 1; out.push(p);
    if (out.length === ROUND_SIZE) break;
  }
  return out;
}

/* Practice is always the same seven prompts, and they never appear in a daily dig, so practice can't spoil anything. */
const PRACTICE_IDS = ['uspres', 'greekgods', 'inv2', 'castles', 'pirates', 'ww2', 'explorers'];
function practicePrompts(){ return PRACTICE_IDS.map(id => PROMPTS.find(p => p.id === id)).filter(Boolean); }

/* Daily rotation: the frozen seasons in ROTATION (data script) are played back to back, seven ids per dig.
   A dig only depends on the ids before it, so appending to the last season never moves a published dig.
   When the frozen seasons run out, the next season is generated from seed 'dugup-order-v<season>'
   (freeze it with `node tools/check.mjs --freeze-season` so new prompts can't reshuffle it). */
const PROMPT_BY_ID = {};
PROMPTS.forEach(p => { PROMPT_BY_ID[p.id] = p; });
// One category-spread order of every non-practice prompt (the algorithm season 1 was made with).
function seasonOrder(seed){
  const rnd = mulberry32(hashStr(seed));
  const byCat = {};
  PROMPTS.forEach(p => { if (!PRACTICE_IDS.includes(p.id)) (byCat[p.cat] = byCat[p.cat] || []).push(p.id); });
  const items = [];
  Object.keys(byCat).sort().forEach(c => {
    const arr = shuffle(byCat[c].slice(), rnd), off = rnd();
    arr.forEach((id, j) => items.push({id, pos: (j + off) / arr.length, tie: rnd()}));
  });
  items.sort((a, b) => a.pos - b.pos || a.tie - b.tie);
  return items.map(x => x.id);
}
const FROZEN_SEASONS = (typeof ROTATION !== 'undefined' && Array.isArray(ROTATION)) ? ROTATION.length : 0;
// Unknown or practice ids are skipped so a data mistake can't crash the page (tools/check.mjs reports them).
const STREAM = [].concat.apply([], FROZEN_SEASONS ? ROTATION : []).filter(id => PROMPT_BY_ID[id] && !PRACTICE_IDS.includes(id));
const SEASON_START = [0];
(FROZEN_SEASONS ? ROTATION : []).forEach(s => SEASON_START.push(SEASON_START[SEASON_START.length - 1] + s.filter(id => PROMPT_BY_ID[id] && !PRACTICE_IDS.includes(id)).length));
// Next season after the stream so far; nothing from the last two digs comes back in the first two digs of the new one.
function generateSeason(s){
  const order = seasonOrder('dugup-order-v' + s), W = ROUND_SIZE * 2, recent = STREAM.slice(-W);
  const head = order.filter(id => !recent.includes(id)).slice(0, W);
  return head.concat(order.filter(id => !head.includes(id)));
}
function extendStream(pos){
  while (pos >= STREAM.length){
    const next = generateSeason(SEASON_START.length);
    if (!next.length) break;
    next.forEach(id => STREAM.push(id));
    SEASON_START.push(STREAM.length);
  }
}
function seasonIds(s){ // ids of season s (1-based), generating it if needed
  while (SEASON_START.length <= s) extendStream(STREAM.length);
  return STREAM.slice(SEASON_START[s - 1], SEASON_START[s]);
}
function dailyPrompts(n){
  const start = (Math.max(1, n) - 1) * ROUND_SIZE, out = [];
  extendStream(start + ROUND_SIZE - 1);
  for (let k = 0; k < ROUND_SIZE; k++) out.push(PROMPT_BY_ID[STREAM[start + k]]);
  return out;
}
function dateKeyAgo(k){ const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() - k); return dateKey(d); }

/* =========================================================
   RARITY — tiers and Wikipedia page views, precomputed monthly by tools/rarity.mjs into js/data/rarity.js
   (Feature Spec 05). The game never calls Wikipedia; answers missing from RARITY keep their PROMPT_DATA tier.
   ========================================================= */
const RARITY_DATA = (typeof RARITY !== 'undefined' && RARITY && RARITY.p) ? RARITY : null;
const RARITY_MONTH = (function(){
  const m = RARITY_DATA && /^(\d{4})-(\d{2})/.exec(RARITY_DATA.updated || '');
  return m ? ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][+m[2] - 1] + ' ' + m[1] : '';
})();
(function applyRarity(){
  if (!RARITY_DATA) return;
  PROMPTS.forEach(p => {
    const r = RARITY_DATA.p[p.id];
    if (r) p.answers.forEach(a => {
      const e = r[a.display];
      if (e && e[0] >= 1 && e[0] <= 6){ a.liveTier = e[0]; a.views = e[1] || 0; }
    });
  });
})();
function updateBadge(){
  const b = $('dataBadge');
  if (RARITY_DATA){ b.textContent = '● Rarity from Wikipedia · ' + RARITY_MONTH; b.classList.add('live'); b.title = 'Rarity is ranked from Wikipedia page views over 60 days, updated monthly (last: ' + RARITY_MONTH + ').'; }
  else { b.textContent = 'Rarity estimated'; b.classList.remove('live'); b.title = 'Built-in rarity estimates are used.'; }
}


/* =========================================================
   SOUND — everything is synthesised with Web Audio (no files)
   ========================================================= */
const Sound = (function(){
  let ac = null, master = null, bus = null, noiseBuf = null;
  let muted = !!store.get('dugup:muted', false);
  const VOL = 0.8;

  function init(){
    if (ac){ if (ac.state === 'suspended') ac.resume().catch(() => {}); return true; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try{
      ac = new AC();
      const comp = ac.createDynamicsCompressor();
      comp.threshold.value = -16; comp.knee.value = 12; comp.ratio.value = 5; comp.attack.value = 0.002; comp.release.value = 0.12;
      master = ac.createGain(); master.gain.value = muted ? 0 : VOL;
      master.connect(comp); comp.connect(ac.destination);
      // little echo for the chimes and jingles
      const delay = ac.createDelay(0.5); delay.delayTime.value = 0.13;
      const fb = ac.createGain(); fb.gain.value = 0.28;
      const wet = ac.createGain(); wet.gain.value = 0.22;
      bus = ac.createGain();
      bus.connect(master); bus.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(wet); wet.connect(master);
      noiseBuf = ac.createBuffer(1, Math.floor(ac.sampleRate), ac.sampleRate);
      const d = noiseBuf.getChannelData(0); for (let i=0;i<d.length;i++) d[i] = Math.random()*2 - 1;
      if (ac.state === 'suspended') ac.resume().catch(() => {});
      return true;
    }catch(e){ ac = null; return false; }
  }
  const ready = () => !!ac && !muted && ac.state === 'running';
  const N = m => 440 * Math.pow(2, (m - 69) / 12);

  function env(g, t0, a, peak, dur){
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t0 + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  }
  function tone(o){
    const t0 = ac.currentTime + (o.at || 0);
    const osc = ac.createOscillator(); osc.type = o.type || 'square';
    osc.frequency.setValueAtTime(o.f, t0);
    if (o.f2) osc.frequency.exponentialRampToValueAtTime(o.f2, t0 + (o.glide || o.dur));
    if (o.vib){
      const lfo = ac.createOscillator(), lg = ac.createGain();
      lfo.frequency.value = o.vib; lg.gain.value = o.f * 0.012;
      lfo.connect(lg); lg.connect(osc.frequency); lfo.start(t0); lfo.stop(t0 + o.dur + 0.05);
    }
    const g = ac.createGain(); env(g, t0, o.a || 0.005, o.vol || 0.2, o.dur);
    osc.connect(g); g.connect(o.dest || master);
    osc.start(t0); osc.stop(t0 + o.dur + 0.05);
  }
  function noise(o){
    const t0 = ac.currentTime + (o.at || 0);
    const src = ac.createBufferSource(); src.buffer = noiseBuf;
    const fl = ac.createBiquadFilter(); fl.type = o.type || 'lowpass';
    fl.frequency.setValueAtTime(o.f || 1000, t0);
    if (o.f2) fl.frequency.exponentialRampToValueAtTime(o.f2, t0 + o.dur);
    fl.Q.value = o.q || 0.8;
    const g = ac.createGain(); env(g, t0, o.a || 0.003, o.vol || 0.3, o.dur);
    src.connect(fl); fl.connect(g); g.connect(o.dest || master);
    src.start(t0, Math.random() * 0.5); src.stop(t0 + o.dur + 0.05);
  }
  function sparkle(at, n, vol){
    const pent = [84, 86, 88, 91, 93, 96, 98, 100];
    for (let i=0;i<n;i++) tone({type:'sine', f:N(pent[Math.floor(Math.random()*pent.length)]), at: at + i*0.055 + Math.random()*0.02, dur:0.13, vol: vol || 0.05, dest:bus});
  }
  const safe = fn => function(){ if (!ready()) return; try{ fn.apply(null, arguments); }catch(e){ if (window.__dugupDebug) console.error('sound error', e && e.message); } };

  const api = {
    init,
    state: () => ac ? ac.state : 'none',
    isMuted: () => muted,
    setMuted(m){
      muted = !!m; store.set('dugup:muted', muted);
      if (ac && master){ const t = ac.currentTime; master.gain.cancelScheduledValues(t); master.gain.setTargetAtTime(muted ? 0 : VOL, t, 0.02); }
    },
    // shovel bites into the ground — lower and crunchier the deeper you are
    dig: safe(function(depthM){
      const k = 1 - Math.min(0.35, (depthM || 0) / 2000), r = 0.9 + Math.random()*0.2;
      tone({type:'sine', f:150*k*r, f2:46*k, dur:0.15, vol:0.6, a:0.002});
      noise({type:'lowpass', f:1500*r, f2:280, dur:0.14, vol:0.55, q:0.7});
      noise({type:'bandpass', f:3200*r, dur:0.05, vol:0.16, q:1.2});
      noise({type:'bandpass', f:900*r, f2:480, at:0.05, dur:0.1, vol:0.12, q:2});
    }),
    toss: safe(function(){
      noise({type:'bandpass', f:500, f2:1700, dur:0.15, vol:0.06, q:1.4});
      noise({type:'lowpass', at:0.16, f:1100, f2:350, dur:0.12, vol:0.09});
    }),
    clonk: safe(function(){
      tone({type:'square', f:262, dur:0.07, vol:0.15});
      tone({type:'square', f:277, dur:0.07, vol:0.12});
      tone({type:'triangle', f:1250, f2:880, dur:0.38, vol:0.24, a:0.001});
      tone({type:'sine', f:2490, f2:2200, dur:0.26, vol:0.07});
      noise({type:'highpass', f:2600, dur:0.06, vol:0.32});
      tone({type:'triangle', f:N(55), f2:N(47), at:0.34, dur:0.34, vol:0.2});
    }),
    find: safe(function(tier){
      if (tier === 1){
        tone({type:'triangle', f:N(76), dur:0.12, vol:0.24, dest:bus});
        tone({type:'triangle', f:N(79), at:0.08, dur:0.2, vol:0.24, dest:bus});
      } else if (tier === 2){
        [N(84), N(88)].forEach((f, i) => {
          tone({type:'triangle', f, at:i*0.09, dur:0.18, vol:0.2, dest:bus});
          tone({type:'sine', f:f*2.01, at:i*0.09, dur:0.1, vol:0.06, dest:bus});
        });
        noise({type:'highpass', f:5000, dur:0.03, vol:0.12});
      } else if (tier === 3){
        tone({type:'square', f:N(83), dur:0.08, vol:0.13, dest:bus});
        tone({type:'square', f:N(88), at:0.075, dur:0.5, vol:0.13, a:0.002, dest:bus});
        tone({type:'triangle', f:N(88), at:0.075, dur:0.5, vol:0.12, dest:bus});
      } else if (tier === 4){
        [72, 76, 79, 84].forEach((m, i) => tone({type: i%2 ? 'triangle' : 'square', f:N(m), at:i*0.065, dur: i === 3 ? 0.65 : 0.14, vol: i === 3 ? 0.14 : 0.11, dest:bus}));
        tone({type:'triangle', f:N(96), at:0.26, dur:0.55, vol:0.06, vib:7, dest:bus});
        sparkle(0.25, 5);
      } else if (tier === 5){
        noise({type:'bandpass', f:2400, f2:700, dur:0.3, vol:0.08, q:1.2});
        [74, 78, 81, 86, 90].forEach((m, i) => tone({type:'triangle', f:N(m), at:0.05 + i*0.06, dur: i === 4 ? 0.75 : 0.16, vol:0.13, dest:bus}));
        tone({type:'square', f:N(86), at:0.35, dur:0.6, vol:0.05, vib:6, dest:bus});
        sparkle(0.3, 8);
      } else if (tier === 6){
        tone({type:'sine', f:90, f2:38, dur:0.55, vol:0.45});
        [[67,0,0.1],[72,0.1,0.1],[76,0.2,0.1],[79,0.3,0.2],[76,0.5,0.1],[79,0.6,0.1]].forEach(([m, at, d]) => {
          tone({type:'square', f:N(m), at, dur:d + 0.05, vol:0.11, dest:bus});
          tone({type:'triangle', f:N(m - 12), at, dur:d + 0.05, vol:0.12, dest:bus});
        });
        [72, 76, 79, 84].forEach(m => tone({type: m === 84 ? 'square' : 'triangle', f:N(m), at:0.72, dur:1.1, vol: m === 84 ? 0.08 : 0.1, vib:5.5, dest:bus}));
        tone({type:'triangle', f:N(48), at:0.72, dur:1.1, vol:0.16, dest:bus});
        sparkle(0.75, 14, 0.055);
      }
    }),
    tick: safe(function(urgent){
      tone({type:'square', f: urgent ? 1560 : 1120, dur:0.03, vol: urgent ? 0.075 : 0.055});
      noise({type:'highpass', f:4200, dur:0.015, vol:0.05});
    }),
    timeout: safe(function(){
      tone({type:'square', f:N(69), f2:N(65), dur:0.22, vol:0.1, vib:9});
      tone({type:'square', f:N(64), f2:N(57), at:0.22, dur:0.42, vol:0.1, vib:9});
    }),
    click: safe(function(){
      tone({type:'triangle', f:640, f2:430, dur:0.06, vol:0.15});
      noise({type:'bandpass', f:2000, dur:0.02, vol:0.06});
    }),
    key: safe(function(){
      noise({type:'bandpass', f:3300 + Math.random()*900, dur:0.014, vol:0.035, q:3});
    }),
    amb: safe(function(){
      tone({type:'square', f:N(67), dur:0.08, vol:0.07});
      tone({type:'square', f:N(72), at:0.09, dur:0.13, vol:0.07});
    }),
    start: safe(function(){
      [72, 79, 84].forEach((m, i) => tone({type:'square', f:N(m), at:i*0.07, dur:0.12, vol:0.08, dest:bus}));
    }),
    finish: safe(function(score){
      const mel = score >= 300 ? [72,76,79,84,79,84,88] : score >= 150 ? [72,76,79,84] : [67,72,71,67];
      mel.forEach((m, i) => {
        const last = i === mel.length - 1;
        tone({type:'square', f:N(m), at:i*0.11, dur: last ? 0.55 : 0.12, vol:0.09, dest:bus});
        tone({type:'triangle', f:N(m - 12), at:i*0.11, dur: last ? 0.55 : 0.12, vol:0.1, dest:bus});
      });
      if (score >= 300) sparkle(0.75, 8);
    })
  };
  return api;
})();

/* =========================================================
   SCENE — the dig site
   ========================================================= */
const ERAS = [
  {label:'MODERN',      short:'MODERN',   name:'the Modern Era',    top:0,   c:['#7c4f2c','#5e3a1f','#95633a'], obj:['bottle','bottle','gear']},
  {label:'INDUSTRIAL',  short:'INDUSTRY', name:'the Industrial Age',top:50,  c:['#6b4630','#4c3020','#82593c'], obj:['coal','coal','gear']},
  {label:'RENAISSANCE', short:'RENAISS.', name:'the Renaissance',   top:120, c:['#9a6a3d','#734a28','#b27e4c'], obj:['coinS','shardS']},
  {label:'MEDIEVAL',    short:'MEDIEVAL', name:'the Middle Ages',   top:200, c:['#7b5b41','#5a412c','#93714f'], obj:['sword','coinS','skull']},
  {label:'ROMAN',       short:'ROMAN',    name:'the Roman Era',     top:290, c:['#a15d3a','#7a4229','#b8734b'], obj:['amphora','coinS','shardS']},
  {label:'BRONZE AGE',  short:'BRONZE',   name:'the Bronze Age',    top:380, c:['#6d5a49','#4e3f33','#857060'], obj:['arrow','coinS']},
  {label:'STONE AGE',   short:'STONE AGE',name:'the Stone Age',     top:470, c:['#5b504b','#413936','#70645d'], obj:['bone','arrow','skull']},
  {label:'FOSSILS',     short:'FOSSILS',  name:'the Fossil Beds',   top:580, c:['#4b4349','#332d32','#5f565d'], obj:['ammonite','bone','ammonite']},
  {label:'BEDROCK',     short:'BEDROCK',  name:'bedrock',           top:760, c:['#33303a','#24222a','#45414d'], obj:[]}
];
function eraAt(m){ let e = ERAS[0]; for (const x of ERAS) if (m >= x.top) e = x; return e; }

/* Time of day, from the player's local clock (no location needed) */
const PHASES = {
  night:  {bands:['#0e1330','#121a3c','#172148','#1c2954','#223160','#29396a','#314272'], cloud:['#3b4675','#2d365e'], amb:'rgba(14,18,52,0.42)', moon:true, stars:1, birds:false, lights:true},
  dawn:   {bands:['#3a4c8e','#5f5b9d','#9a6a9e','#d4828f','#f3a184','#fbc58e','#ffe2ad'], cloud:['#ffd9cc','#e3aec0'], amb:'rgba(110,70,120,0.16)', sun:{x:0.3, y:-19, c:['#fff4d6','#ffcf7d','#ffb47e']}, stars:0.25, birds:true, lights:true},
  day:    {bands:['#4fa6d8','#66b6e0','#83c7e8','#a3d7ec','#c6e6e6','#e9e9cf','#fbe2ad'], cloud:['#ffffff','#dceef5'], amb:null, sun:{x:-22, y:15, c:['#fffbe6','#fff0a8','#fde7a6']}, birds:true},
  golden: {bands:['#5b9ccc','#77afd3','#9cc2d3','#c9d2c0','#ecd3a0','#f9c58a','#fdb675'], cloud:['#fff2e0','#f2d0b2'], amb:'rgba(255,160,80,0.07)', sun:{x:-30, y:28, c:['#fff3d0','#ffd27a','#ffbb6a']}, birds:true},
  dusk:   {bands:['#252f68','#3c3b7a','#6a4885','#a25880','#da6f71','#f29462','#fac078'], cloud:['#ee9f98','#b1728b'], amb:'rgba(60,34,90,0.26)', sun:{x:0.7, y:-17, c:['#ffe7c2','#ff9f63','#f57a5a']}, stars:0.35, birds:false, lights:true}
};
function phaseAt(d){
  const h = d.getHours() + d.getMinutes() / 60;
  if (h < 5 || h >= 21.5) return 'night';
  if (h < 7) return 'dawn';
  if (h < 17) return 'day';
  if (h < 19) return 'golden';
  return 'dusk';
}

const Scene = (function(){
  const cv = $('scene'); let ctx = cv.getContext('2d');
  const MPX = 2, SKY = 64, DEPTH = 440, SHOVEL = 14;
  let W = 120, H = 84, S = 3, cx = 60, sL = 47, sR = 72, off = null;
  let depth = 0, depthT = 0, cam = -60, t = 0, last = 0;
  let parts = [], clouds = [], birds = [];
  let shakeT = 0, flashA = 0, blink = 3, exclT = -9, sweatT = -9;
  let item = null, floatTxt = null, job = null;
  let skin = SKINS[0], lampPos = null;
  let phase = phaseAt(new Date()), PH = PHASES[phase], phaseCheck = 0, forcedPhase = null, stars = [];
  const hooks = {impact(){}, toss(){}, clonk(){}, find(){}};

  /* ---------- poses: shovel = grip point + angle; hands = point on the shovel (t) or free (x,y) ---------- */
  const RAW = {
    idle:   {lean:0,  crouch:0, tip:[6,3],    ang:90,   hf:{t:1.5},          hb:{x:-3,y:-5}},
    windup: {lean:-1, crouch:0, p0:[2,-5],    ang:-135, hf:{t:2},            hb:{t:5}},
    strike: {lean:1,  crouch:1, tip:[9,3],    ang:68,   hf:{t:2},            hb:{t:3.5}},
    scoop:  {lean:1,  crouch:1, p0:[-2,-6],   ang:15,   hf:{t:5},            hb:{t:2}, dirt:1},
    toss:   {lean:0,  crouch:0, p0:[-1,-5],   ang:-50,  hf:{t:6},            hb:{t:2.5}, dirt:1},
    recoil: {lean:-1, crouch:0, p0:[1,-9],    ang:35,   hf:{t:2},            hb:{t:4.5}},
    holdup: {lean:0,  crouch:0, tip:[-9,3],   ang:95,   hf:{x:5,y:-15},      hb:{x:-5,y:-15}},
    shrug:  {lean:0,  crouch:0, tip:[8,3],    ang:92,   hf:{x:5,y:-10},      hb:{x:-6,y:-10}}
  };
  function compile(p){
    const a = p.ang * Math.PI / 180, d = [Math.cos(a), Math.sin(a)];
    const p0 = p.p0 ? p.p0.slice() : [p.tip[0] - SHOVEL*d[0], p.tip[1] - SHOVEL*d[1]];
    const hand = h => h.t != null ? [p0[0] + h.t*d[0], p0[1] + h.t*d[1]] : [h.x, h.y];
    return {lean:p.lean, crouch:p.crouch, p0, ang:p.ang, hf:hand(p.hf), hb:hand(p.hb), dirt:!!p.dirt};
  }
  const P = {}; for (const k in RAW) P[k] = compile(RAW[k]);
  const lerp = (a, b, e) => a + (b - a) * e;
  const lerp2 = (A, B, e) => [lerp(A[0], B[0], e), lerp(A[1], B[1], e)];
  function mixPose(A, B, e){
    return {lean:lerp(A.lean, B.lean, e), crouch:lerp(A.crouch, B.crouch, e), p0:lerp2(A.p0, B.p0, e), ang:lerp(A.ang, B.ang, e),
            hf:lerp2(A.hf, B.hf, e), hb:lerp2(A.hb, B.hb, e), dirt: e < 0.5 ? A.dirt : B.dirt};
  }
  const EASE = {in: k => k*k, out: k => 1 - (1-k)*(1-k), io: k => k < 0.5 ? 2*k*k : 1 - Math.pow(-2*k + 2, 2)/2, lin: k => k};
  let pose = P.idle, seg = null, track = [];
  function queue(name, dur, e, on){ track.push({to: P[name], dur, e: EASE[e || 'io'], on}); }
  function clearAnim(){ track = []; seg = null; }
  function stepAnim(dt){
    if (!seg && track.length){ const n = track.shift(); seg = {from: pose, to: n.to, dur: n.dur, k: 0, e: n.e, on: n.on}; }
    if (seg){
      seg.k += dt / seg.dur;
      if (seg.k >= 1){ pose = seg.to; const on = seg.on; seg = null; if (on) on(); }
      else pose = mixPose(seg.from, seg.to, seg.e(seg.k));
    }
  }

  /* ---------- pixel primitives (integer pixels only, so it stays crisp) ---------- */
  function line(x0, y0, x1, y1, size, col){
    x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
    const dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1, dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    let err = dx + dy; const o = -((size - 1) >> 1);
    ctx.fillStyle = col;
    for (let guard = 0; guard < 400; guard++){
      ctx.fillRect(x0 + o, y0 + o, size, size);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2*err;
      if (e2 >= dy){ err += dy; x0 += sx; }
      if (e2 <= dx){ err += dx; y0 += sy; }
    }
  }
  function inside(x, y, pts){
    let c = false;
    for (let i=0, j=pts.length-1; i<pts.length; j=i++){
      const xi = pts[i][0], yi = pts[i][1], xj = pts[j][0], yj = pts[j][1];
      if (((yi > y) !== (yj > y)) && (x < (xj - xi)*(y - yi)/(yj - yi) + xi)) c = !c;
    }
    return c;
  }
  function poly(pts, col){
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (const p of pts){ x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]); }
    ctx.fillStyle = col;
    for (let y = Math.floor(y0); y <= Math.ceil(y1); y++) for (let x = Math.floor(x0); x <= Math.ceil(x1); x++) if (inside(x + 0.5, y + 0.5, pts)) ctx.fillRect(x, y, 1, 1);
  }

  /* ---------- the digger ---------- */
  function arm(Sh, Hd, cols){
    const a = 3.6, b = 3.6;
    let dx = Hd[0] - Sh[0], dy = Hd[1] - Sh[1], d = Math.hypot(dx, dy) || 0.001;
    if (d > a + b - 0.2){ const k = (a + b - 0.2) / d; dx *= k; dy *= k; d = a + b - 0.2; Hd = [Sh[0] + dx, Sh[1] + dy]; }
    const ang = Math.atan2(dy, dx), off = Math.acos(Math.max(-1, Math.min(1, (a*a + d*d - b*b) / (2*a*d))));
    const e1 = [Sh[0] + a*Math.cos(ang + off), Sh[1] + a*Math.sin(ang + off)];
    const e2 = [Sh[0] + a*Math.cos(ang - off), Sh[1] + a*Math.sin(ang - off)];
    const E = e1[1] >= e2[1] ? e1 : e2;  // elbows hang downwards
    line(Sh[0], Sh[1], E[0], E[1], 3, cols.o); line(E[0], E[1], Hd[0], Hd[1], 3, cols.o);
    line(Sh[0], Sh[1], E[0], E[1], 1, cols.sl); line(E[0], E[1], Hd[0], Hd[1], 1, cols.sl);
    ctx.fillStyle = cols.hand; ctx.fillRect(Math.round(Hd[0]), Math.round(Hd[1]), 1, 1);
  }
  function shovel(p0, angDeg, dirt, eraCols){
    const a = angDeg * Math.PI / 180, d = [Math.cos(a), Math.sin(a)], n = [-d[1], d[0]];
    const at = s => [p0[0] + d[0]*s, p0[1] + d[1]*s];
    const g0 = at(0), h1 = at(9);
    const gA = [g0[0] + n[0]*1.2, g0[1] + n[1]*1.2], gB = [g0[0] - n[0]*1.2, g0[1] - n[1]*1.2];
    line(g0[0], g0[1], h1[0], h1[1], 3, PAL.o);
    line(gA[0], gA[1], gB[0], gB[1], 3, PAL.o);
    line(g0[0], g0[1], h1[0], h1[1], 1, '#b07a42');
    line(gA[0], gA[1], gB[0], gB[1], 1, '#c98d4c');
    const b0 = at(8.8), b1 = at(11.8), tip = at(SHOVEL + 0.6);
    const pts = [[b0[0] + n[0]*1.5, b0[1] + n[1]*1.5], [b1[0] + n[0]*1.8, b1[1] + n[1]*1.8], tip, [b1[0] - n[0]*1.8, b1[1] - n[1]*1.8], [b0[0] - n[0]*1.5, b0[1] - n[1]*1.5]];
    poly(pts, skin.blade || '#c3ccd1');
    const hA = at(9.6), hB = at(12.2);
    line(hA[0] + n[0]*0.7, hA[1] + n[1]*0.7, hB[0] + n[0]*0.7, hB[1] + n[1]*0.7, 1, skin.bladeHi || '#f2f6f7');
    for (let i=0;i<pts.length;i++){ const A = pts[i], B = pts[(i + 1) % pts.length]; line(A[0], A[1], B[0], B[1], 1, PAL.o); }
    if (dirt){
      const c = at(11), up = n[1] <= 0 ? n : [-n[0], -n[1]];
      for (let i=-1;i<=1;i++) for (let j=1;j<=2;j++){
        if (j === 2 && i !== 0) continue;
        ctx.fillStyle = (i + j) % 2 ? eraCols[0] : eraCols[2];
        ctx.fillRect(Math.round(c[0] + d[0]*i + up[0]*j), Math.round(c[1] + d[1]*i + up[1]*j), 1, 1);
      }
    }
  }
  function charX(){ return cx - 2; }
  function feetW(){ return depth / MPX; }
  function drawRig(fx, fy){
    const p = pose;
    const idleNow = !seg && !track.length && !job;
    const breathe = idleNow && !item ? (Math.floor(t * 1.25) % 2) : 0;
    const lean = Math.round(p.lean), cr = Math.round(p.crouch);
    const legs = cr >= 1 ? 'legsC' : 'legs', lh = SPR[legs].length;
    const lx = fx - 6, ly = fy - lh;
    const tx = lx + lean, ty = ly - 14 + breathe;
    ctx.drawImage(skinCanvas(legs, skin), lx, ly);
    ctx.drawImage(skinCanvas('torso', skin), tx, ty);
    if (blink < 0 && !skin.noBlink){ ctx.fillStyle = PAL.s; ctx.fillRect(tx + 7, ty + 6, 1, 1); }
    lampPos = skin.lamp ? [tx + 10, ty + 2] : null;
    const ac = skin.arms || ['#5b7330', '#7d9a3c'], hc = skin.hands || ['#d99a6c', '#f5c79a'];
    const SF = [tx + 6, ty + 10], SB = [tx + 4, ty + 10];
    const HF = [fx + p.hf[0], fy + p.hf[1]], HB = [fx + p.hb[0], fy + p.hb[1]];
    arm(SB, HB, {o: PAL.o, sl: ac[0], hand: hc[0]});
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, fy); ctx.clip();
    shovel([fx + p.p0[0], fy + p.p0[1]], p.ang, p.dirt, eraAt(depth).c);
    ctx.restore();
    arm(SF, HF, {o: PAL.o, sl: ac[1], hand: hc[1]});
    // sweat drop (timeout / miss)
    const sw = t - sweatT;
    if (sw < 1.2){ ctx.fillStyle = '#9fd6ff'; ctx.fillRect(tx + 1, ty + 6 + Math.floor(sw * 5), 1, 2); }
    // "!" on a clonk
    if (t - exclT < 0.7) drawText(ctx, '!', fx - 1, fy - 27, '#ffd84a', PAL.o);
  }

  /* ---------- particles ---------- */
  function emit(o){ o.max = o.life; parts.push(o); }
  function impactFX(tipX, floorY, rock){
    const e = eraAt(depth);
    for (let i=0;i<9;i++) emit({type:'dirt', x: tipX + Math.random()*3 - 1.5, y: floorY - 1, vx: (Math.random()*2 - 1)*34 + 6, vy: -42 - Math.random()*62, g: 320, life: 0.5 + Math.random()*0.3, size: Math.random() < 0.2 ? 2 : 1, col: e.c[Math.random() < 0.5 ? 0 : 2]});
    for (let i=0;i<2;i++) emit({type:'dust', x: tipX + Math.random()*4 - 2, y: floorY - 2, vx: (Math.random()*2 - 1)*10, vy: -6 - Math.random()*6, g: 0, life: 0.4, size: 1, col: mix(e.c[2], '#fff1d0', 0.4)});
    shakeT = Math.max(shakeT, 0.09);
    if (rock){
      for (let i=0;i<12;i++){ const a = -Math.PI*Math.random(), sp = 45 + Math.random()*75; emit({type:'spark', x: tipX, y: floorY - 1, vx: Math.cos(a)*sp, vy: Math.sin(a)*sp, g: 180, life: 0.22 + Math.random()*0.18, size: 1, col: Math.random() < 0.5 ? '#fff6c9' : '#ffd84a'}); }
      shakeT = 0.2;
    }
  }
  function tossFX(){
    const a = pose.ang * Math.PI / 180;
    const x = charX() + pose.p0[0] + Math.cos(a)*12, y = feetW() + pose.p0[1] + Math.sin(a)*12;
    const e = eraAt(depth);
    emit({type:'clump', x, y, vx: 14 + Math.random()*10, vy: -95 - Math.random()*25, g: 250, life: 0.45, size: 2, col: e.c[0]});
    for (let i=0;i<4;i++) emit({type:'dirt', x, y, vx: 6 + Math.random()*24, vy: -75 - Math.random()*35, g: 250, life: 0.45, size: 1, col: e.c[2]});
    hooks.toss();
  }
  function celebrateFX(tier){
    const fx = charX(), fy = feetW();
    const n = tier >= 6 ? 14 : tier >= 4 ? 8 : tier >= 3 ? 5 : 3;
    for (let i=0;i<n;i++) emit({type:'twinkle', x: fx + Math.random()*28 - 13, y: fy - 32 + Math.random()*18, vx: 0, vy: -4, g: 0, life: 0.5 + Math.random()*0.9, size: 1, col: '#fff6c9', ph: Math.random()*6});
    if (tier >= 5) flashA = tier === 6 ? 0.6 : 0.28;
    if (tier === 6){
      const cols = ['#ffd84a','#e04848','#4aa3df','#6abe30','#fff6dc','#ef7fa0'];
      for (let i=0;i<40;i++) emit({type:'confetti', x: fx + Math.random()*56 - 28, y: fy - 56 - Math.random()*24, vx: 0, vy: 18 + Math.random()*24, g: 6, life: 1.8 + Math.random()*1.2, size: 1, col: cols[i % cols.length], ph: Math.random()*6});
      shakeT = 0.25;
    }
  }
  function updateParts(dt){
    const floor = feetW(), surfaceLevel = floor < 0.5;
    for (const p of parts){
      p.life -= dt; p.vy += p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.type === 'confetti') p.x += Math.sin(t*6 + p.ph) * 14 * dt;
      if (p.type === 'dirt' || p.type === 'clump'){
        const inShaft = p.x >= sL && p.x <= sR;
        if ((inShaft || surfaceLevel) && p.vy > 0 && p.y >= floor - 0.5 && p.y < floor + 4){ p.y = floor - 0.5; p.vy = Math.abs(p.vy) > 40 ? -p.vy*0.25 : 0; p.vx *= 0.5; }
        if (p.y > 0.5 && !surfaceLevel){ if (p.x < sL + 1){ p.x = sL + 1; p.vx = -p.vx*0.4; } if (p.x > sR - 1){ p.x = sR - 1; p.vx = -p.vx*0.4; } }
      }
    }
    parts = parts.filter(p => p.life > 0);
  }
  function drawParts(camR, front){
    for (const p of parts){
      const isFront = p.type === 'spark' || p.type === 'confetti' || p.type === 'twinkle';
      if (isFront !== front) continue;
      const x = Math.round(p.x), y = Math.round(p.y - camR), k = Math.max(0, p.life / p.max);
      if (p.type === 'dust'){
        ctx.globalAlpha = 0.5 * k; ctx.fillStyle = p.col;
        const r = 1 + Math.round((1 - k) * 2);
        ctx.fillRect(x - r, y, r*2 + 1, 1); ctx.fillRect(x, y - r, 1, r*2 + 1);
        if (r > 1){ ctx.fillRect(x - r + 1, y - 1, r*2 - 1, 3); ctx.fillRect(x - 1, y - r + 1, 3, r*2 - 1); }
        ctx.globalAlpha = 1;
      } else if (p.type === 'twinkle'){
        if (Math.floor((t + p.ph) * 10) % 3 === 0) continue;
        ctx.fillStyle = p.col; ctx.fillRect(x, y - 1, 1, 3); ctx.fillRect(x - 1, y, 3, 1);
      } else if (p.type === 'confetti'){
        ctx.fillStyle = p.col; if (Math.floor((t + p.ph) * 8) % 2) ctx.fillRect(x, y, 2, 1); else ctx.fillRect(x, y, 1, 2);
      } else {
        if (p.type === 'clump' && k < 0.3) ctx.globalAlpha = k / 0.3;
        ctx.fillStyle = p.col; ctx.fillRect(x, y, p.size, p.size);
        if (p.type === 'clump'){ ctx.fillStyle = mix(p.col, '#000000', 0.3); ctx.fillRect(x, y + p.size - 1, p.size, 1); }
        ctx.globalAlpha = 1;
      }
    }
  }

  /* ---------- found item ---------- */
  function drawItem(fx, fy, camR){
    if (!item) return;
    const age = t - item.t0, tgt = [fx - 6, fy - 29];
    let x, y;
    if (age < 0.25 && item.from){ const k = age / 0.25; x = lerp(item.from[0] - 6, tgt[0], k); y = lerp(item.from[1] - camR - 6, tgt[1], k) - Math.sin(k*Math.PI)*9; }
    else { x = tgt[0]; y = tgt[1] + (Math.floor(age * 2.5) % 2); }
    if (item.released != null){
      const r = t - item.released; y -= r * 26;
      if (r > 0.55){ item = null; return; }
      if (Math.floor(r * 18) % 2) return;
    }
    const cx2 = x + 6, cy2 = y + 6;
    if (item.tier >= 3 && age >= 0.2 && item.released == null){
      const n = item.tier >= 5 ? 12 : 8, R = item.tier === 6 ? 25 : item.tier === 5 ? 20 : item.tier === 4 ? 16 : 12;
      const rot = age * 0.9;
      ctx.save();
      ctx.globalAlpha = Math.min(1, (age - 0.2) * 4) * (item.tier === 6 ? 0.34 : 0.24);
      ctx.fillStyle = item.tier === 6 ? '#fff1a8' : '#ffe9b0';
      for (let i=0;i<n;i++){
        const a0 = rot + i*2*Math.PI/n, a1 = a0 + Math.PI/n*0.55;
        ctx.beginPath(); ctx.moveTo(cx2, cy2); ctx.lineTo(cx2 + Math.cos(a0)*R, cy2 + Math.sin(a0)*R); ctx.lineTo(cx2 + Math.cos(a1)*R, cy2 + Math.sin(a1)*R); ctx.closePath(); ctx.fill();
      }
      const g = ctx.createRadialGradient(cx2, cy2, 1, cx2, cy2, R*0.6);
      g.addColorStop(0, 'rgba(255,246,205,0.95)'); g.addColorStop(1, 'rgba(255,246,205,0)');
      ctx.globalAlpha = 0.55; ctx.fillStyle = g; ctx.fillRect(cx2 - R, cy2 - R, R*2, R*2);
      ctx.restore();
    }
    ctx.drawImage(sprCanvas(TIERS[item.tier].spr), Math.round(x), Math.round(y));
  }

  /* ---------- world building (static layers drawn once) ---------- */
  function layout(){
    const frame = cv.parentElement;
    const avail = Math.max(200, frame.clientWidth);
    S = avail < 300 ? 2 : 3;
    W = Math.floor(avail / S);
    H = (window.innerHeight || 800) >= 760 ? 84 : 64;
    cv.width = W; cv.height = H;
    cv.style.width = (W * S) + 'px'; cv.style.height = (H * S) + 'px';
    cx = Math.floor(W / 2); sL = cx - 13; sR = cx + 12;
    build();
    const r = mulberry32(5);
    clouds = []; for (let i=0;i<3;i++) clouds.push({x: r()*W, y: 6 + Math.floor(r()*16), w: 10 + Math.floor(r()*10), v: 1.5 + r()*2});
    birds = []; for (let i=0;i<2;i++) birds.push({x: r()*W, y: 10 + Math.floor(r()*14), v: 4 + r()*4, ph: r()*6});
    snapCam();
  }
  function boundary(i, x){ return Math.floor(ERAS[i].top / MPX) + Math.round(1.3*Math.sin(x*0.23 + i*1.7) + 0.9*Math.sin(x*0.071 + i*0.9)); }
  function h2(x, y, s){ let h = Math.imul(x*374761393 + y*668265263 + (s || 0)*2147483647, 1274126177); h = (h ^ (h >>> 13)) >>> 0; return (h % 10000) / 10000; }

  function build(){
    off = document.createElement('canvas'); off.width = W; off.height = SKY + DEPTH;
    const g = off.getContext('2d');
    const img = g.createImageData(W, SKY + DEPTH), D = img.data;
    const put = (x, y, c) => { const k = (y*W + x)*4; D[k] = c[0]; D[k+1] = c[1]; D[k+2] = c[2]; D[k+3] = 255; };
    const bay = [[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]];
    const bands = PH.bands.map(hx);
    for (let y=0;y<SKY;y++){
      const f = (y / (SKY - 1)) * (bands.length - 1), base = Math.floor(f), fr = f - base;
      for (let x=0;x<W;x++) put(x, y, (fr > bay[y%4][x%4]/16 && base + 1 < bands.length) ? bands[base + 1] : bands[base]);
    }
    stars = [];
    if (PH.stars){
      const sr = mulberry32(77), n = Math.round(W * (SKY - 18) / 55 * PH.stars);
      for (let i=0;i<n;i++){
        const x = Math.floor(sr()*W), y = Math.floor(sr()*(SKY - 20)), b = sr();
        put(x, y, hx(b < 0.15 ? '#ffffff' : b < 0.55 ? '#c9d3ff' : '#8d98c8'));
        if (b < 0.3) stars.push({x, y, ph: sr()*6.28, c: b < 0.15 ? '#ffffff' : '#dfe5ff'});
      }
    }
    if (PH.sun){
      const sx = PH.sun.x < 1 && PH.sun.x > 0 ? Math.round(W * PH.sun.x) : (PH.sun.x < 0 ? W + PH.sun.x : PH.sun.x);
      const sy = PH.sun.y < 0 ? SKY + PH.sun.y : PH.sun.y, c = PH.sun.c.map(hx);
      for (let y=sy-11;y<=sy+11;y++) for (let x=sx-11;x<=sx+11;x++){
        if (x < 0 || x >= W || y < 0 || y >= SKY) continue; const d = Math.hypot(x - sx, y - sy);
        if (d <= 4.5) put(x, y, c[0]); else if (d <= 6.5) put(x, y, c[1]); else if (d <= 9 && bay[y%4][x%4] < 6) put(x, y, c[2]);
      }
    }
    if (PH.moon){
      const mx = Math.round(W * 0.62), my = 12;
      for (let y=my-9;y<=my+9;y++) for (let x=mx-9;x<=mx+9;x++){
        if (x < 0 || x >= W || y < 0) continue;
        const d = Math.hypot(x - mx, y - my), cut = Math.hypot(x - mx - 2.5, y - my + 1.5);
        if (d <= 4.6 && cut > 4.1) put(x, y, hx(d > 3.6 ? '#e8e2bd' : '#fbf6d8'));
        else if (d <= 7.5 && d > 4.6 && bay[y%4][x%4] < 3) put(x, y, hx('#3a4677'));
      }
    }
    const far = hx('#a7cf85'), farTop = hx('#c3e3a0'), near = hx('#7cb35a'), nearTop = hx('#98cc6e');
    for (let x=0;x<W;x++){
      const hf = SKY - 16 - Math.round(4*Math.sin(x*0.045 + 0.5) + 3*Math.sin(x*0.11 + 2));
      for (let y=hf;y<SKY;y++) put(x, y, y === hf ? farTop : far);
      const hn = SKY - 8 - Math.round(3*Math.sin(x*0.07 + 1.3) + 2*Math.sin(x*0.19));
      for (let y=hn;y<SKY;y++) put(x, y, y === hn ? nearTop : near);
    }
    const eraCols = ERAS.map(e => e.c.map(hx)), lineCols = ERAS.map(e => hx(mix(e.c[1], '#000000', 0.25)));
    for (let x=0;x<W;x++){
      const bnd = ERAS.map((_, i) => i === 0 ? 0 : boundary(i, x));
      for (let y=0;y<DEPTH;y++){
        let ei = 0; for (let i=1;i<ERAS.length;i++) if (y >= bnd[i]) ei = i;
        const cols = eraCols[ei], hv = h2(x, y, 1);
        let col = cols[0];
        if (ei > 0 && y === bnd[ei]) col = lineCols[ei];
        else {
          const band = (y + Math.round(2*Math.sin(x*0.09 + ei*2))) % 11;
          if (band === 0 && hv < 0.75) col = cols[1];
          else if (band === 1 && hv < 0.35) col = cols[2];
          else if (hv < 0.06) col = cols[1];
          else if (hv > 0.95) col = cols[2];
        }
        put(x, SKY + y, col);
      }
      put(x, SKY, hx(h2(x, 0, 2) < 0.25 ? '#6abe30' : '#8fd14f'));
      put(x, SKY + 1, hx('#6abe30'));
      put(x, SKY + 2, hx('#4e9a2c'));
      if (h2(x, 1, 3) < 0.3) put(x, SKY + 3, hx('#4e9a2c'));
    }
    g.putImageData(img, 0, 0);

    const rnd = mulberry32(20261122);
    const nearShaft = (x0, x1) => x1 > sL - 3 && x0 < sR + 3;
    g.fillStyle = '#3e2614';
    for (let i=0;i<Math.floor(W/8);i++){
      let x = Math.floor(rnd()*W); const len = 4 + Math.floor(rnd()*12);
      for (let k=0;k<len;k++){ g.fillRect(x, SKY + 3 + k, 1, 1); if (rnd() < 0.3) x += rnd() < 0.5 ? -1 : 1; }
    }
    for (let i=0;i<ERAS.length-1;i++){
      const top = Math.floor(ERAS[i].top / MPX) + 4, bot = Math.floor(ERAS[i+1].top / MPX) - 3;
      const n = Math.round(W * (bot - top) / (i >= 6 ? 120 : 220));
      for (let k=0;k<n;k++){
        const x = Math.floor(rnd()*(W - 3)), y = SKY + top + Math.floor(rnd()*(bot - top));
        const w = 2 + (rnd() < 0.4 ? 1 : 0), hh = rnd() < 0.5 ? 1 : 2;
        const base = mix(ERAS[i].c[2], '#9a9288', 0.55);
        g.fillStyle = base; g.fillRect(x, y, w, hh);
        g.fillStyle = mix(base, '#ffffff', 0.3); g.fillRect(x, y, 1, 1);
        g.fillStyle = mix(base, '#000000', 0.35); g.fillRect(x, y + hh, w, 1);
      }
    }
    for (let i=0;i<ERAS.length-1;i++){
      const e = ERAS[i]; if (!e.obj.length) continue;
      const top = Math.floor(e.top / MPX) + 6, bot = Math.floor(ERAS[i+1].top / MPX) - 9;
      const n = Math.max(2, Math.round(W / 38));
      for (let k=0;k<n;k++){
        const sp = sprCanvas(e.obj[Math.floor(rnd()*e.obj.length)]);
        let x, tries = 0;
        do { x = 3 + Math.floor(rnd()*(W - sp.width - 6)); tries++; } while (nearShaft(x, x + sp.width) && tries < 14);
        if (nearShaft(x, x + sp.width)) continue;
        g.drawImage(sp, x, SKY + top + Math.floor(rnd()*Math.max(1, bot - top)));
      }
    }
    { const sp = sprCanvas('dino'); const x = sR + 6 + sp.width < W - 2 ? sR + 6 : 2; g.drawImage(sp, x, SKY + Math.floor(650 / MPX)); }
    const room = sL - 5;
    for (let i=0;i<ERAS.length;i++){
      const e = ERAS[i], y = SKY + Math.floor(e.top / MPX) + (i === 0 ? 6 : 4);
      const lab = textW(e.label) <= room ? e.label : e.short;
      const dark = mix(e.c[1], '#000000', 0.3);
      drawText(g, lab, 2, y, mix(e.c[2], '#fff1d0', 0.5), dark);
      drawText(g, e.top + 'M', 2, y + 7, mix(e.c[2], '#fff1d0', 0.25), dark);
    }
    for (let m=50;m<=860;m+=50){
      const y = SKY + Math.floor(m / MPX), e = eraAt(m);
      g.fillStyle = mix(e.c[2], '#fff1d0', 0.35); g.fillRect(W - 3, y, 3, 1);
      if (m % 100 === 0){ const s = m + 'M'; drawText(g, s, W - 5 - textW(s), y - 2, mix(e.c[2], '#fff1d0', 0.3), mix(e.c[1], '#000000', 0.3)); }
    }
    drawCamp(g, rnd);
  }

  function drawCamp(g, rnd){
    const base = SKY;
    for (let i=0;i<4;i++){
      const x = Math.floor(rnd()*W); if (x > cx - 30 && x < cx + 30) continue;
      const ty = base - 9 - Math.floor(rnd()*3);
      g.fillStyle = '#5a3a20'; g.fillRect(x, ty + 6, 1, 3);
      [1,3,3,5,5,7].forEach((w, r) => { g.fillStyle = '#3f7d3a'; g.fillRect(x - (w >> 1), ty - 1 + r, w, 1); g.fillStyle = '#56994a'; g.fillRect(x - (w >> 1), ty - 1 + r, 1, 1); });
    }
    const tx = Math.max(3, cx - 46), tw = 19, th = 12, apex = tx + 9;
    for (let r=0;r<th;r++){
      const half = Math.floor(r * 9 / (th - 1)), y = base - th + r;
      for (let x=apex-half;x<=apex+half;x++){
        let col = x < apex ? '#f1e3bd' : '#d7c38f';
        if (r % 4 === 2) col = x < apex ? '#d9594a' : '#b2463a';
        if (x === apex - half || x === apex + half) col = '#5a3a20';
        g.fillStyle = col; g.fillRect(x, y, 1, 1);
      }
    }
    g.fillStyle = PH.lights ? '#ffcf6a' : '#3e2614';
    for (let r=6;r<th;r++){ const half = Math.floor((r - 6)*3/5); g.fillRect(apex - half, base - th + r, half*2 + 1, 1); }
    g.fillStyle = '#5a3a20'; g.fillRect(apex, base - th - 3, 1, 3);
    g.fillStyle = '#c8442f'; g.fillRect(apex + 1, base - th - 3, 3, 2);
    const crx = tx + tw + 2;
    g.fillStyle = '#5a3a20'; g.fillRect(crx, base - 6, 7, 6);
    g.fillStyle = '#b07a42'; g.fillRect(crx + 1, base - 5, 5, 4);
    g.fillStyle = '#7d5230'; g.fillRect(crx + 1, base - 3, 5, 1); g.fillRect(crx + 3, base - 5, 1, 4);
    const s = 'DUG UP', bw = textW(s) + 6, sx = cx + 22;
    if (sx + bw < W - 2){
      g.fillStyle = '#6e4524'; g.fillRect(sx + 2, base - 8, 1, 8); g.fillRect(sx + bw - 3, base - 8, 1, 8);
      g.fillStyle = '#5a3a20'; g.fillRect(sx, base - 17, bw, 10);
      g.fillStyle = '#c98a4a'; g.fillRect(sx + 1, base - 16, bw - 2, 8);
      g.fillStyle = '#e2a866'; g.fillRect(sx + 1, base - 16, bw - 2, 1);
      drawText(g, s, sx + 3, base - 14, '#3b2312');
    }
    const fcols = ['#fff6dc','#ffd84a','#ef7fa0','#9fd6ff'];
    for (let x=1;x<W-1;x++){
      if (x > sL - 2 && x < sR + 10) continue;
      const v = h2(x, 7, 9);
      if (v < 0.12){ g.fillStyle = '#6abe30'; g.fillRect(x, base - 1, 1, 1); if (v < 0.05) g.fillRect(x + 1, base - 2, 1, 1); }
      else if (v > 0.94){ g.fillStyle = '#4e9a2c'; g.fillRect(x, base - 2, 1, 2); g.fillStyle = fcols[Math.floor(h2(x, 3, 4) * 4)]; g.fillRect(x, base - 3, 1, 1); }
    }
  }

  /* ---------- per-frame drawing ---------- */
  function camTarget(){ return Math.max(-SKY, Math.min(feetW() - H * 0.64, DEPTH - H)); }
  function snapCam(){ cam = camTarget(); }

  function drawShaft(camR, feet){
    const top = -camR, bot = feet - camR;
    if (feet <= 0) return;
    const y0 = Math.max(top, 0), y1 = Math.min(bot, H);
    for (let y=y0;y<y1;y++){
      const wy = y + camR;
      const l = sL + (h2(1, wy, 11) < 0.35 ? 1 : 0), r = sR - (h2(2, wy, 12) < 0.35 ? 1 : 0);
      ctx.fillStyle = '#21140b'; ctx.fillRect(l, y, r - l + 1, 1);
      ctx.fillStyle = '#170d07'; ctx.fillRect(l, y, 2, 1); ctx.fillRect(r - 1, y, 2, 1);
      ctx.fillStyle = '#4a2e1a'; ctx.fillRect(l - 1, y, 1, 1); ctx.fillRect(r + 1, y, 1, 1);
      if (h2(3, wy, 5) < 0.4){ ctx.fillStyle = '#2c1b0f'; ctx.fillRect(l + 2 + Math.floor(h2(4, wy, 6) * (r - l - 4)), y, 1, 1); }
    }
    // support posts
    ctx.fillStyle = '#6e4524'; ctx.fillRect(sL + 1, y0, 1, y1 - y0); ctx.fillRect(sR - 1, y0, 1, y1 - y0);
    // ladder
    ctx.fillStyle = '#7d5230'; ctx.fillRect(sL + 3, y0, 1, y1 - y0); ctx.fillRect(sL + 7, y0, 1, y1 - y0);
    ctx.fillStyle = '#b07a42';
    for (let y=y0;y<y1;y++) if (((y + camR) % 4) === 0){ ctx.fillRect(sL + 3, y, 5, 1); }
    // beams + lanterns
    for (let wy = 34; wy < feet - 4; wy += 60){
      const y = wy - camR; if (y < -8 || y > H + 8) continue;
      ctx.fillStyle = '#a8743e'; ctx.fillRect(sL + 1, y, sR - sL - 1, 1);
      ctx.fillStyle = '#7d5230'; ctx.fillRect(sL + 1, y + 1, sR - sL - 1, 2);
      ctx.fillStyle = '#4a2e18'; ctx.fillRect(sL + 1, y + 3, sR - sL - 1, 1);
      const lx = sR - 4, ly = y + 5;
      ctx.fillStyle = 'rgba(255,190,90,0.10)'; ctx.beginPath(); ctx.arc(lx + 1, ly + 2, 10, 0, 6.3); ctx.fill();
      ctx.fillStyle = 'rgba(255,205,120,0.16)'; ctx.beginPath(); ctx.arc(lx + 1, ly + 2, 5, 0, 6.3); ctx.fill();
      ctx.fillStyle = '#3b2312'; ctx.fillRect(lx + 1, y + 4, 1, 1);
      ctx.drawImage(sprCanvas('lantern'), lx, ly);
    }
    // rim + floor
    if (top >= 0 && top < H){ ctx.fillStyle = '#5e3a1f'; ctx.fillRect(sL - 1, top, sR - sL + 3, 1); }
    if (bot >= 0 && bot < H){
      const e = eraAt(depth);
      ctx.fillStyle = e.c[1]; ctx.fillRect(sL, bot, sR - sL + 1, 1);
      ctx.fillStyle = e.c[2];
      for (let x=sL+1;x<sR;x++) if (h2(x, feet, 7) < 0.25) ctx.fillRect(x, bot - 1, 1, 1);
    }
  }
  function drawHeap(camR){
    const mh = Math.min(8, Math.floor(depth / 45)); if (!mh) return;
    const gy = -camR;
    for (let r=0;r<mh;r++){
      const y = gy - 1 - r; if (y < 0 || y >= H) continue;
      const w = (mh - r) * 2 + 1;
      for (let k=0;k<w;k++){ const x = sR + 2 + k; ctx.fillStyle = h2(x, r, 8) < 0.2 ? '#5e3a1f' : (r === mh - 1 || k === w - 1 ? '#95633a' : '#7c4f2c'); ctx.fillRect(x, y, 1, 1); }
    }
  }
  function drawSky(camR){
    for (const c of clouds){
      const y = Math.round(c.y - SKY - camR); if (y > H || y < -8) continue;
      const x = Math.round(c.x), w = c.w;
      ctx.fillStyle = PH.cloud[0]; ctx.fillRect(x + 3, y, w - 7, 1); ctx.fillRect(x + 1, y + 1, w - 3, 1); ctx.fillRect(x, y + 2, w, 2);
      ctx.fillStyle = PH.cloud[1]; ctx.fillRect(x + 1, y + 4, w - 2, 1);
    }
    for (const s of stars){
      const y = s.y - SKY - camR; if (y < 0 || y >= H) continue;
      const v = Math.sin(t * 1.7 + s.ph);
      if (v > 0.55){ ctx.fillStyle = s.c; ctx.fillRect(s.x, y, 1, 1); if (v > 0.93){ ctx.globalAlpha = 0.5; ctx.fillRect(s.x - 1, y, 3, 1); ctx.fillRect(s.x, y - 1, 1, 3); ctx.globalAlpha = 1; } }
    }
    if (!PH.birds) return;
    ctx.fillStyle = '#3b2a2a';
    for (const b of birds){
      const y = Math.round(b.y - SKY - camR), x = Math.round(b.x); if (y > H || y < -4) continue;
      if (Math.floor(t * 4 + b.ph) % 2){ ctx.fillRect(x - 2, y, 1, 1); ctx.fillRect(x + 2, y, 1, 1); ctx.fillRect(x - 1, y + 1, 1, 1); ctx.fillRect(x + 1, y + 1, 1, 1); }
      else { ctx.fillRect(x - 2, y + 1, 2, 1); ctx.fillRect(x + 1, y + 1, 2, 1); ctx.fillRect(x, y, 1, 1); }
    }
  }

  function update(dt){
    t += dt;
    phaseCheck -= dt;
    if (phaseCheck <= 0){ phaseCheck = 20; const ph = forcedPhase || phaseAt(new Date()); if (ph !== phase){ phase = ph; PH = PHASES[ph]; build(); } }
    stepAnim(dt);
    const diff = depthT - depth;
    depth = Math.abs(diff) < 0.05 ? depthT : depth + diff * Math.min(1, dt * 9);
    cam += (camTarget() - cam) * Math.min(1, dt * 7);
    updateParts(dt);
    for (const c of clouds){ c.x += c.v * dt; if (c.x > W + 4) c.x = -c.w - 4; }
    for (const b of birds){ b.x += b.v * dt; if (b.x > W + 6){ b.x = -6; b.y = 12 + Math.random()*22; } }
    blink -= dt; if (blink < -0.14) blink = 2.5 + Math.random()*3;
    if (skin.sparkle && Math.random() < dt * 2.2) emit({type:'twinkle', x: charX() + Math.random()*16 - 8, y: feetW() - 3 - Math.random()*18, vx: 0, vy: -5, g: 0, life: 0.5, size: 1, col: '#fff6c9', ph: Math.random()*6});
    shakeT = Math.max(0, shakeT - dt);
    flashA = Math.max(0, flashA - dt * 1.6);
  }

  function draw(){
    const camR = Math.round(cam), feet = Math.round(feetW());
    const sh = shakeT > 0 ? ((Math.floor(t * 60) % 2) ? 1 : -1) : 0;
    ctx.save(); ctx.translate(sh, shakeT > 0.1 ? (Math.floor(t * 50) % 2) : 0);
    ctx.drawImage(off, 0, camR + SKY, W, H, 0, 0, W, H);
    drawSky(camR);
    drawShaft(camR, feet);
    drawHeap(camR);
    const fx = charX(), fy = feet - camR;
    drawRig(fx, fy);
    drawParts(camR, false);
    if (PH.amb){
      const gy = -camR + 4;
      if (gy > 0){
        ctx.fillStyle = PH.amb; ctx.fillRect(-2, -2, W + 4, Math.min(H + 2, gy + 2));
        const fade = ctx.createLinearGradient(0, gy, 0, gy + 12); fade.addColorStop(0, PH.amb); fade.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = fade; ctx.fillRect(-2, gy, W + 4, 12);
      }
      if (PH.lights && -camR > 0){
        const tx = Math.max(3, cx - 46) + 9, ty = -camR - 3;
        const gl = ctx.createRadialGradient(tx, ty, 1, tx, ty, 14); gl.addColorStop(0, 'rgba(255,196,110,0.32)'); gl.addColorStop(1, 'rgba(255,196,110,0)');
        ctx.fillStyle = gl; ctx.fillRect(tx - 15, ty - 15, 30, 30);
      }
    }
    if (feet <= 6 && lampPos && PH.lights){
      const [x0, y0] = lampPos;
      ctx.fillStyle = 'rgba(255,236,170,0.14)'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0 + 30, y0 + 2); ctx.lineTo(x0 + 26, y0 + 22); ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(255,246,200,0.13)'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0 + 18, y0 + 4); ctx.lineTo(x0 + 15, y0 + 13); ctx.closePath(); ctx.fill();
    }
    if (feet > 6){
      const surf = Math.max(0, -camR), dark = Math.min(0.52, 0.1 + depth / 1400);
      const gx = fx, gy = fy - 10;
      const grad = ctx.createRadialGradient(gx, gy, 5, gx, gy, 52);
      grad.addColorStop(0, 'rgba(255,196,120,0.10)');
      grad.addColorStop(0.32, 'rgba(18,10,28,0)');
      grad.addColorStop(1, 'rgba(18,10,28,' + dark.toFixed(3) + ')');
      ctx.fillStyle = grad; ctx.fillRect(-2, surf, W + 4, H - surf + 2);
      if (lampPos){
        const [x0, y0] = lampPos, k = Math.max(Math.min(1, depth / 160), PH.lights ? 0.7 : 0);
        ctx.fillStyle = 'rgba(255,236,170,' + (0.2 * k).toFixed(3) + ')';
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0 + 30, y0 + 2); ctx.lineTo(x0 + 26, y0 + 22); ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(255,246,200,' + (0.18 * k).toFixed(3) + ')';
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0 + 18, y0 + 4); ctx.lineTo(x0 + 15, y0 + 13); ctx.closePath(); ctx.fill();
      }
    }
    drawItem(fx, fy, camR);
    drawParts(camR, true);
    if (floatTxt){
      const a = t - floatTxt.t0;
      if (a > 1.6) floatTxt = null;
      else if (!(a > 1.2 && Math.floor(a * 16) % 2)) drawText(ctx, floatTxt.s, fx + 1 - textW(floatTxt.s) / 2, fy - 38 - Math.min(8, a * 16), '#ffd84a', PAL.o);
    }
    ctx.restore();
    if (flashA > 0){ ctx.fillStyle = 'rgba(255,250,225,' + flashA.toFixed(3) + ')'; ctx.fillRect(0, 0, W, H); }
    // HUD
    const label = Math.round(depth) + 'M', bw = textW(label) + 5;
    ctx.fillStyle = 'rgba(30,18,10,0.78)'; ctx.fillRect(W - bw - 6, 3, bw, 9);
    drawText(ctx, label, W - bw - 3, 5, '#ffd84a');
  }

  function loop(now){
    const dt = Math.min(0.05, (now - last) / 1000 || 0); last = now;
    update(dt); draw();
    requestAnimationFrame(loop);
  }

  /* ---------- digging jobs ---------- */
  function strikeLanded(per, lastHit){
    if (!job) return;
    const a = pose.ang * Math.PI / 180;
    const tipX = charX() + pose.p0[0] + Math.cos(a)*SHOVEL, fl = feetW();
    const rock = lastHit && job.tier === 0;
    depthT = Math.min(job.target, depthT + per);
    impactFX(tipX, fl, rock);
    hooks.impact(depthT);
    if (!lastHit) return;
    if (rock){
      hooks.clonk(); exclT = t;
      queue('recoil', 0.1, 'out'); queue('shrug', 0.18, 'out', resolve); queue('shrug', 0.9, 'lin'); queue('idle', 0.3, 'io');
    } else {
      depthT = job.target;
      item = {tier: job.tier, t0: t, from: [tipX, fl - 2]};
      for (let i=0;i<6;i++) emit({type:'twinkle', x: tipX + Math.random()*8 - 4, y: fl - 2 - Math.random()*6, vx: 0, vy: -10, g: 0, life: 0.4, size: 1, col: '#fff6c9', ph: Math.random()*6});
      queue('holdup', 0.24, 'out', resolve); queue('holdup', 1.4, 'lin'); queue('idle', 0.3, 'io', release);
    }
  }
  function resolve(){
    if (!job || job.done) return;
    job.done = true;
    if (job.tier > 0){ floatTxt = {s: '+' + TIERS[job.tier].pts + 'M', t0: t}; celebrateFX(job.tier); }
    hooks.find(job.tier);
    const cb = job.onFind; job.onFind = null; if (cb) cb();
  }
  function release(){ if (item) item.released = t; }

  return {
    hooks,
    init(){
      layout();
      let rz, lastW = window.innerWidth;
      window.addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { if (Math.abs(window.innerWidth - lastW) > 2 || !job){ lastW = window.innerWidth; layout(); } }, 200); });
      requestAnimationFrame(n => { last = n; loop(n); });
    },
    setDepth(m, instant){
      clearAnim(); job = null; item = null; floatTxt = null; pose = P.idle;
      depthT = Math.max(0, Math.min(m, 840));
      if (instant){ depth = depthT; parts = []; snapCam(); }
    },
    dig(opts){
      if (job && !job.done) this.skip();
      clearAnim(); item = null; floatTxt = null;
      const tier = opts.tier, meters = opts.meters || 0, N = [2,2,2,3,3,4,5][tier] || 2, per = meters / N;
      job = {tier, onFind: opts.onFind, done: false, target: depthT + meters};
      queue('windup', 0.16, 'out');
      for (let i=0;i<N;i++){
        const lastHit = i === N - 1;
        queue('strike', 0.07, 'in', () => strikeLanded(per, lastHit));
        if (!lastHit){ queue('strike', 0.05, 'lin'); queue('scoop', 0.09, 'out'); queue('toss', 0.1, 'out', tossFX); queue('windup', 0.13, 'io'); }
      }
    },
    skip(){
      if (!job || job.done) return false;
      clearAnim(); depthT = job.target; depth = depthT; snapCam();
      if (job.tier === 0){ pose = P.shrug; exclT = t; hooks.clonk(); resolve(); queue('shrug', 0.8, 'lin'); queue('idle', 0.3, 'io'); }
      else { pose = P.holdup; item = {tier: job.tier, t0: t - 0.3, from: null}; resolve(); queue('holdup', 1.1, 'lin'); queue('idle', 0.3, 'io', release); }
      return true;
    },
    busy(){ return !!job && !job.done; },
    shrug(){
      clearAnim(); job = null; item = null; sweatT = t;
      queue('shrug', 0.2, 'out'); queue('shrug', 1.0, 'lin'); queue('idle', 0.3, 'io');
    },
    celebrate(tier){
      clearAnim(); job = null; floatTxt = null;
      if (!tier){ this.shrug(); return; }
      item = {tier, t0: t, from: [charX() + 8, feetW() - 2]};
      queue('holdup', 0.24, 'out', () => celebrateFX(tier)); queue('holdup', 1.8, 'lin'); queue('idle', 0.3, 'io', release);
    },
    setSkin(id){ skin = skinById(id); },
    // force a time of day (tests); null goes back to the clock
    setPhase(name){ forcedPhase = PHASES[name] ? name : null; phaseCheck = 0; },
    phase(){ return phase; },
    // draw the archaeologist (idle, standing) into another canvas — used by the wardrobe
    preview(c2, id){
      const keep = [ctx, skin, pose, blink, sweatT, exclT, lampPos];
      try{
        ctx = c2.getContext('2d'); ctx.imageSmoothingEnabled = false; ctx.clearRect(0, 0, c2.width, c2.height);
        skin = skinById(id); pose = P.idle; blink = 1; sweatT = -99; exclT = -99;
        drawRig(Math.round(c2.width / 2) + 1, c2.height - 1);
      } finally { [ctx, skin, pose, blink, sweatT, exclT, lampPos] = keep; }
    },
    // test helper: draw a pose at the surface without animating
    _pose(name){ clearAnim(); job = null; pose = P[name] || P.idle; }
  };
})();

/* =========================================================
   GAME
   ========================================================= */
const screens = {title: $('screen-title'), play: $('screen-play'), results: $('screen-results'), archive: $('screen-archive'), museum: $('screen-museum'), wardrobe: $('screen-wardrobe')};
function show(name){ for (const k in screens) screens[k].classList.toggle('hidden', k !== name); document.body.classList.toggle('playing', name === 'play' || name === 'results'); }

const state = {mode: null, prompts: [], idx: 0, rows: [], score: 0, t0: 0, timer: null, answered: false, revealAt: 0, dayKey: null, dayNum: 0, lastSec: 99, digging: false};
let toastTimer = null;

function getStats(){ return Object.assign({streak: 0, last: null, best: 0, digs: 0, bestStreak: 0, maxDepth: 0, perfect: 0}, store.get('dugup:stats', {})); }

/* ---------- museum: every real find, kept forever ---------- */
function museumGet(){ return store.get('dugup:museum', {}); }
// practice prompts never appear in real digs, so anything from them on the shelves came from practice
(function purgePractice(){ const m = museumGet(); let ch = false; for (const k in m) if (PRACTICE_IDS.includes(m[k].p)){ delete m[k]; ch = true; } if (ch) store.set('dugup:museum', m); })();
function museumAdd(p, a, tier){
  const m = museumGet(), k = p.id + '|' + a.display, e = m[k];
  if (e){ e.n = (e.n || 1) + 1; e.t = Math.max(e.t, tier); }
  else m[k] = {t: tier, p: p.id, q: p.q, w: a.wiki, a: a.display, n: 1, d: dateKey()};
  store.set('dugup:museum', m);
}
function museumCount(){ return Object.keys(museumGet()).length; }

/* ---------- outfits ---------- */
function skinHave(sk, st, mus){
  if (!sk.req) return 0;
  const r = sk.req.type;
  return r === 'digs' ? st.digs : r === 'streak' ? Math.max(st.bestStreak, st.streak) : r === 'museum' ? mus : r === 'depth' ? st.maxDepth : r === 'perfect' ? st.perfect : 0;
}
function skinUnlocked(sk, st, mus){ return !sk.req || skinHave(sk, st, mus) >= sk.req.n; }
function unlockedIds(){ const st = getStats(), mus = museumCount(); return SKINS.filter(sk => skinUnlocked(sk, st, mus)).map(sk => sk.id); }
function currentSkin(){ const id = store.get('dugup:skin', 'explorer'); return unlockedIds().includes(id) ? id : 'explorer'; }
function applySkin(){ const id = currentSkin(); Scene.setSkin(id); $('logoIcon').src = headURL(skinById(id)); }

function renderTitle(){
  const key = dateKey(), num = dayNumber();
  const saved = store.get('dugup:daily:' + key, null);
  $('btnDaily').textContent = saved ? ("Today's Dig #" + num + ' ✓ — results') : ("Today's Dig #" + num);
  const st = getStats();
  const streak = (st.last === key || st.last === yesterdayKey()) ? st.streak : 0;
  $('btnArchive').classList.toggle('hidden', num <= 1);
  const mc = museumCount();
  $('btnMuseum').textContent = mc ? 'Museum (' + mc + ')' : 'Museum';
  $('stats').innerHTML =
    '<div class="stat"><b>' + streak + '</b><span>day streak</span></div>' +
    '<div class="stat"><b>' + (st.best || 0) + ' m</b><span>deepest dig</span></div>' +
    '<div class="stat"><b>' + (st.digs || 0) + '</b><span>digs</span></div>';
}
function renderTierList(){
  let h = '';
  for (let i=1;i<TIERS.length;i++) h += '<li><img class="px" src="' + sprURL(TIERS[i].spr) + '" alt=""><span>' + TIERS[i].name + '<span class="pts">+' + TIERS[i].pts + ' m</span></span></li>';
  h += '<li><img class="px" src="' + sprURL('rock') + '" alt=""><span>Wrong or too slow<span class="pts">+0 m</span></span></li>';
  $('tierList').innerHTML = h;
}
function renderSoundBtn(){
  const m = Sound.isMuted(), b = $('btnSound');
  $('soundIcon').src = sprURL(m ? 'spkOff' : 'spk');
  b.setAttribute('aria-pressed', m ? 'false' : 'true');
  b.setAttribute('aria-label', m ? 'Sound is off — turn on' : 'Sound is on — turn off');
  b.title = m ? 'Sound off' : 'Sound on';
}

function startRound(mode, opt){
  if (mode === 'daily' || mode === 'archive'){
    const key = mode === 'daily' ? dateKey() : opt.key, num = mode === 'daily' ? dayNumber() : opt.num;
    const saved = store.get('dugup:daily:' + key, null);
    if (saved){ renderResults(saved, false); show('results'); window.scrollTo(0, 0); return; }
    state.dayKey = key; state.dayNum = num;
    state.prompts = dailyPrompts(num);
  } else {
    state.dayKey = null; state.dayNum = 0;
    state.prompts = practicePrompts();
  }
  Sound.start();
  state.mode = mode; state.idx = 0; state.rows = []; state.score = 0; state.unlocked0 = unlockedIds();
  Scene.setDepth(0, true);
  show('play');
  window.scrollTo(0, 0);
  nextPrompt();
}

function nextPrompt(){
  const p = state.prompts[state.idx];
  $('digNum').textContent = 'DIG ' + (state.idx + 1) + '/' + ROUND_SIZE;
  $('promptCat').textContent = p.cat;
  $('promptText').textContent = p.q;
  $('promptHint').innerHTML = p.hint;
  $('scoreVal').textContent = state.score;
  $('revealArea').classList.add('hidden');
  $('digStatus').classList.add('hidden');
  $('askArea').classList.remove('hidden');
  $('toast').innerHTML = '';
  const inp = $('answer'); inp.value = ''; inp.disabled = false;
  inp.focus();
  state.answered = false; state.digging = false; state.lastSec = 99;
  state.t0 = performance.now();
  clearInterval(state.timer);
  tick();
  state.timer = setInterval(tick, 100);
}

function tick(){
  const left = Math.max(0, TIME_LIMIT - (performance.now() - state.t0) / 1000);
  const sec = Math.ceil(left);
  $('timerFill').style.width = (left / TIME_LIMIT * 100) + '%';
  $('timerSecs').textContent = sec;
  const tm = $('timer'); tm.classList.toggle('warn', left <= 15 && left > 7); tm.classList.toggle('low', left <= 7);
  if (sec !== state.lastSec){ if (sec <= 5 && sec > 0) Sound.tick(sec <= 3); state.lastSec = sec; }
  if (left <= 0) finishPrompt(null, true);
}

function toast(msg){
  const el = $('toast'); el.innerHTML = msg;
  const f = $('answerForm'); f.classList.remove('shake'); void f.offsetWidth; f.classList.add('shake');
  Sound.amb();
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.innerHTML = ''; }, 3500);
}

function onSubmit(e){
  e.preventDefault();
  if (state.answered) return;
  const v = $('answer').value.trim();
  if (!v){ toast('Type an answer first!'); return; }
  const p = state.prompts[state.idx];
  const r = matchAnswer(p, v);
  if (r.type === 'amb'){ toast(r.msg); try{ $('answer').select(); }catch(_){} return; }
  finishPrompt(v, false, r);
}

function finishPrompt(input, timeout, res){
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);
  const p = state.prompts[state.idx];
  let tier = 0, a = null;
  if (!timeout && res && res.type === 'ok'){ a = res.answer; tier = tierOf(a); if (state.mode !== 'practice') museumAdd(p, a, tier); }
  const pts = TIERS[tier].pts;
  state.score += pts;
  state.rows.push({q: p.q, cat: p.cat, input: input || '', answer: a ? a.display : null, wiki: a ? a.wiki : null, tier, pts, timeout: !!timeout, views: a && a.views ? a.views : null});
  $('askArea').classList.add('hidden');
  try{ $('answer').blur(); }catch(e){}
  try{ window.scrollTo({top: 0, behavior: 'smooth'}); }catch(e){ window.scrollTo(0, 0); }
  const reveal = () => { state.digging = false; $('digStatus').classList.add('hidden'); renderReveal(p, input, timeout, res, a, tier); };
  if (timeout){ Sound.timeout(); Scene.shrug(); reveal(); return; }
  state.digging = true;
  $('digStatus').classList.remove('hidden');
  Scene.dig({tier, meters: pts, onFind: reveal});
}

function skipDig(){ if (state.digging) Scene.skip(); }

function sampleFinds(p, exclude, minTier, n){
  const pool = p.answers.filter(a => a !== exclude && tierOf(a) >= minTier);
  return shuffle(pool.slice(), Math.random).slice(0, n);
}
function findLinks(list){ return list.map(a => '<a href="' + wikiURL(a.wiki) + '" target="_blank" rel="noopener">' + esc(a.display) + '</a>').join(' · '); }

function renderReveal(p, input, timeout, res, a, tier){
  const T = TIERS[tier];
  const area = $('revealArea');
  area.className = 'reveal tier-' + tier;
  $('revealIcon').src = sprURL(T.spr);
  $('revealTier').textContent = timeout ? 'Out of time!' : T.name;
  $('revealPts').textContent = '+' + T.pts + ' m';
  let h = '';
  if (a){
    h += '<p class="found">You dug up <a href="' + wikiURL(a.wiki) + '" target="_blank" rel="noopener"><b>' + esc(a.display) + '</b></a></p>';
    h += '<p>' + TIER_BLURB[tier] + '</p>';
    if (a.views) h += '<p class="note">≈ ' + a.views.toLocaleString('en-US') + ' Wikipedia reads in 60 days (' + RARITY_MONTH + ')</p>';
    else h += '<p class="note">Rarity estimated from Wikipedia popularity.</p>';
    const deeper = sampleFinds(p, a, Math.max(5, Math.min(6, tier + 1)), 3);
    if (tier < 6 && deeper.length) h += '<p class="deeper">Deeper finds: ' + findLinks(deeper) + '</p>';
    else if (tier === 6) h += '<p class="deeper">Top of the dig. Nobody gets deeper than that.</p>';
  } else {
    if (timeout) h += '<p>The whistle blew before you struck anything.</p>';
    else if (res && res.type === 'nope') h += '<p class="found">' + esc(input) + '?</p><p>' + res.msg + '</p>';
    else h += '<p class="found">' + esc(input) + '?</p><p>Not in our dig records for this one. Check your spelling &mdash; or our records may be missing it.</p>';
    const ex = [];
    const common = p.answers.filter(x => tierOf(x) <= 2), mid = p.answers.filter(x => tierOf(x) >= 3 && tierOf(x) <= 4), rare = p.answers.filter(x => tierOf(x) >= 5);
    [common, mid, rare].forEach(arr => { if (arr.length) ex.push(arr[Math.floor(Math.random()*arr.length)]); });
    if (ex.length) h += '<p class="deeper">Real finds include: ' + findLinks(ex) + '</p>';
  }
  $('revealBody').innerHTML = h;
  $('scoreVal').textContent = state.score;
  $('btnNext').textContent = state.idx + 1 >= ROUND_SIZE ? 'See my dig' : 'Keep digging';
  area.classList.remove('hidden');
  state.revealAt = performance.now();
  setTimeout(() => { try{ $('btnNext').focus({preventScroll: true}); }catch(e){} }, 30);
}

function onNext(){
  if (performance.now() - state.revealAt < 350) return;
  Sound.click();
  state.idx++;
  if (state.idx >= ROUND_SIZE) finishRound();
  else nextPrompt();
}

function finishRound(){
  const res = {mode: state.mode, key: state.dayKey, num: state.dayNum, score: state.score, rows: state.rows, live: !!RARITY_DATA};
  const st = getStats();
  if (state.mode !== 'practice'){   // practice never counts toward the museum, stats or outfits
    st.digs = (st.digs || 0) + 1;
    st.maxDepth = Math.max(st.maxDepth || 0, state.score);
    if (state.rows.every(r => r.tier > 0)) st.perfect = (st.perfect || 0) + 1;
  }
  if (state.mode === 'daily'){
    const today = state.dayKey;
    if (st.last !== today){ st.streak = (st.last === yesterdayKey()) ? (st.streak || 0) + 1 : 1; st.last = today; }
    st.bestStreak = Math.max(st.bestStreak || 0, st.streak);
    st.best = Math.max(st.best || 0, state.score);
  }
  if (state.mode === 'daily' || state.mode === 'archive') store.set('dugup:daily:' + state.dayKey, res);
  store.set('dugup:stats', st);
  const before = state.unlocked0 || [];
  res.unlocks = unlockedIds().filter(id => !before.includes(id));
  renderResults(res, true);
  show('results');
  window.scrollTo(0, 0);
}

let countdown = null;
function renderResults(res, fresh){
  const era = eraAt(res.score);
  $('resTitle').textContent = res.mode === 'daily' ? ('Dig #' + res.num + ' complete!') : res.mode === 'archive' ? ('Past Dig #' + res.num + ' complete!') : 'Practice dig complete!';
  $('resDepth').textContent = res.score;
  $('resEra').textContent = res.score > 0 ? ('You dug down to ' + era.name + '.') : 'Nothing but rocks today.';
  $('resIcons').innerHTML = res.rows.map(r => '<img class="px" src="' + sprURL(TIERS[r.tier].spr) + '" alt="' + TIERS[r.tier].name + '" title="' + TIERS[r.tier].name + '">').join('');
  $('resRows').innerHTML = res.rows.map(r => {
    const ans = r.answer
      ? '<a href="' + wikiURL(r.wiki) + '" target="_blank" rel="noopener">' + esc(r.answer) + '</a>'
      : (r.timeout ? '<i>out of time</i>' : '<s>' + esc(r.input) + '</s>');
    return '<li><img class="px" src="' + sprURL(TIERS[r.tier].spr) + '" alt=""><span class="q">' + ans + '<small>' + esc(r.q) + '</small></span><span class="p">+' + r.pts + '</span></li>';
  }).join('');
  const head = res.mode === 'daily' ? ('Dug Up #' + res.num + ' ⛏️ ' + res.score + ' m') : res.mode === 'archive' ? ('Dug Up #' + res.num + ' (late dig) ⛏️ ' + res.score + ' m') : ('Dug Up · practice ⛏️ ' + res.score + ' m');
  const text = head + '\n' + res.rows.map(r => TIERS[r.tier].emoji).join('') + (SHARE_URL ? '\n' + SHARE_URL : '\n#DugUp');
  $('shareText').textContent = text;
  $('btnCopy').textContent = 'Copy result';
  Scene.setDepth(res.score, true);
  const best = res.rows.reduce((m, r) => Math.max(m, r.tier), 0);
  Scene.celebrate(best);
  if (fresh) Sound.finish(res.score);
  const ub = $('unlockBox'), nu = fresh && res.unlocks ? res.unlocks : [];
  if (nu.length){
    ub.innerHTML = '<img class="px" src="' + headURL(skinById(nu[0])) + '" alt=""><div><b>New outfit unlocked: ' + nu.map(id => esc(skinById(id).name)).join(', ') + '!</b><br><button type="button" class="linkish" id="btnTryOn">Try it on in the wardrobe &rsaquo;</button></div>';
    ub.classList.remove('hidden');
    $('btnTryOn').addEventListener('click', () => { store.set('dugup:skin', nu[0]); applySkin(); Sound.click(); openWardrobe(); });
    if (fresh) setTimeout(() => Sound.find(5), 1500);
  } else { ub.classList.add('hidden'); ub.innerHTML = ''; }
  clearInterval(countdown);
  const nd = $('nextDig');
  if (res.mode === 'daily'){
    const upd = () => {
      const now = new Date(), mid = new Date(now); mid.setHours(24, 0, 0, 0);
      const s = Math.max(0, Math.floor((mid - now) / 1000));
      nd.textContent = 'Next dig in ' + pad2(Math.floor(s/3600)) + ':' + pad2(Math.floor(s%3600/60)) + ':' + pad2(s%60);
      if (s === 0){ clearInterval(countdown); renderTitle(); }
    };
    upd(); countdown = setInterval(upd, 1000);
  } else nd.textContent = res.mode === 'archive' ? 'Late digs do not count toward your streak.' : '';
}

/* ---------- past digs ---------- */
const DOW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function openArchive(){
  const n = dayNumber(); let h = '';
  for (let k = 1; k <= 7 && n - k >= 1; k++){
    const key = dateKeyAgo(k), num = n - k, saved = store.get('dugup:daily:' + key, null);
    const d = new Date(key + 'T12:00:00');
    const label = (k === 1 ? 'Yesterday' : DOW[d.getDay()] + ' ' + d.getDate() + ' ' + MON[d.getMonth()]);
    h += '<li><span class="a-num">#' + num + '</span><span class="a-day">' + label + '</span>' +
      (saved ? '<span class="a-score">' + saved.score + ' m ✓</span><button type="button" class="btn btn-wood small-btn" data-key="' + key + '" data-num="' + num + '">View</button>'
             : '<span class="a-score dim">not dug</span><button type="button" class="btn btn-gold small-btn" data-key="' + key + '" data-num="' + num + '">Dig</button>') + '</li>';
  }
  $('archList').innerHTML = h || '<li class="empty">No past digs yet &mdash; come back tomorrow!</li>';
  $('archList').querySelectorAll('button[data-key]').forEach(b => b.addEventListener('click', () => { Sound.click(); startRound('archive', {key: b.dataset.key, num: +b.dataset.num}); }));
  show('archive'); window.scrollTo(0, 0);
}

/* ---------- museum ---------- */
function openMuseum(){
  const m = museumGet(), list = Object.values(m);
  const byTier = [0,0,0,0,0,0,0]; list.forEach(e => byTier[e.t]++);
  const prompts = new Set(list.map(e => e.p)).size;
  $('musSummary').innerHTML = list.length
    ? '<b>' + list.length + '</b> different find' + (list.length === 1 ? '' : 's') + ' from <b>' + prompts + '</b> prompt' + (prompts === 1 ? '' : 's') + '. Every real answer from your daily and past digs gets a place on these shelves.'
    : 'Your shelves are empty &mdash; go dig something up! Finds from daily and past digs are kept here (practice does not count).';
  let c = '';
  for (let t = 6; t >= 1; t--) c += '<span class="mc' + (byTier[t] ? '' : ' dim') + '" title="' + TIERS[t].name + '"><img class="px" src="' + sprURL(TIERS[t].spr) + '" alt="">' + byTier[t] + '</span>';
  $('musCounts').innerHTML = c;
  let h = '';
  for (let t = 6; t >= 1; t--){
    const items = list.filter(e => e.t === t).sort((x, y) => x.a.localeCompare(y.a));
    if (!items.length) continue;
    h += '<div class="shelf tier-' + t + '"><h3><img class="px" src="' + sprURL(TIERS[t].spr) + '" alt="">' + TIERS[t].name + ' <small>' + items.length + '</small></h3><div class="shelf-items">' +
      items.map(e => '<a href="' + wikiURL(e.w) + '" target="_blank" rel="noopener" title="' + esc(e.q) + (e.n > 1 ? ' — found ' + e.n + ' times' : '') + '">' + esc(e.a) + (e.n > 1 ? '<sup>×' + e.n + '</sup>' : '') + '</a>').join('') + '</div></div>';
  }
  $('musShelves').innerHTML = h;
  show('museum'); window.scrollTo(0, 0);
}

/* ---------- wardrobe ---------- */
function openWardrobe(){
  const st = getStats(), mus = museumCount(), cur = currentSkin();
  const g = $('wardGrid'); g.innerHTML = '';
  for (const sk of SKINS){
    const ok = skinUnlocked(sk, st, mus), have = skinHave(sk, st, mus);
    const card = document.createElement('div');
    card.className = 'ward-card' + (ok ? '' : ' locked') + (sk.id === cur ? ' on' : '');
    const cv = document.createElement('canvas'); cv.width = 22; cv.height = 23; cv.className = 'px ward-pic';
    Scene.preview(cv, sk.id);
    if (!ok){ const x = cv.getContext('2d'); x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(43,26,16,0.82)'; x.fillRect(0, 0, cv.width, cv.height); }
    card.appendChild(cv);
    const info = document.createElement('div'); info.className = 'ward-info';
    let h = '<b>' + esc(sk.name) + '</b>';
    if (ok) h += '<span class="ward-desc">' + sk.desc + '</span>';
    if (sk.req && !ok){
      const pct = Math.min(100, Math.round(100 * have / sk.req.n));
      h += '<span class="ward-req">' + REQ_TEXT[sk.req.type](sk.req.n) + '</span><span class="ward-bar"><i style="width:' + pct + '%"></i></span><span class="ward-prog">' + Math.min(have, sk.req.n) + ' / ' + sk.req.n + (sk.req.type === 'depth' ? ' m' : '') + '</span>';
    }
    info.innerHTML = h;
    card.appendChild(info);
    if (ok){
      const b = document.createElement('button'); b.type = 'button';
      b.className = 'btn small-btn ' + (sk.id === cur ? 'btn-wood' : 'btn-gold');
      b.textContent = sk.id === cur ? 'Wearing' : 'Wear';
      b.disabled = sk.id === cur;
      b.addEventListener('click', () => { store.set('dugup:skin', sk.id); applySkin(); Sound.click(); openWardrobe(); });
      card.appendChild(b);
    }
    g.appendChild(card);
  }
  const n = unlockedIds().length;
  $('wardSummary').textContent = n + ' of ' + SKINS.length + ' outfits unlocked.';
  show('wardrobe');
}
function goCamp(){ Sound.click(); clearInterval(countdown); renderTitle(); Scene.setDepth(0, true); show('title'); window.scrollTo(0, 0); }

function copyShare(){
  Sound.click();
  const text = $('shareText').textContent; const btn = $('btnCopy');
  const fallback = () => {
    try{ const r = document.createRange(); r.selectNodeContents($('shareText')); const s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }catch(e){}
    btn.textContent = 'Selected — copy it!';
  };
  try{
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(() => { btn.textContent = 'Copied!'; }, fallback);
    } else fallback();
  }catch(e){ fallback(); }
}

/* =========================================================
   BOOT
   ========================================================= */
installFrames();
$('logoIcon').src = headURL();
renderTierList();
renderTitle();
renderSoundBtn();
Scene.hooks.impact = d => Sound.dig(d);
Scene.hooks.toss = () => Sound.toss();
Scene.hooks.clonk = () => Sound.clonk();
Scene.hooks.find = tier => Sound.find(tier);
Scene.init();
applySkin();
updateBadge();

// audio may only start from a user gesture
['pointerdown', 'keydown', 'touchend'].forEach(ev => document.addEventListener(ev, () => Sound.init(), {capture: true, passive: true}));

$('btnDaily').addEventListener('click', () => startRound('daily'));
$('btnPractice').addEventListener('click', () => startRound('practice'));
$('btnAgain').addEventListener('click', () => startRound('practice'));
$('btnHome').addEventListener('click', goCamp);
$('btnArchive').addEventListener('click', () => { Sound.click(); openArchive(); });
$('btnMuseum').addEventListener('click', () => { Sound.click(); openMuseum(); });
$('btnWardrobe').addEventListener('click', () => { Sound.click(); openWardrobe(); });
$('btnResMuseum').addEventListener('click', () => { Sound.click(); clearInterval(countdown); openMuseum(); });
document.querySelectorAll('[data-back]').forEach(b => b.addEventListener('click', goCamp));
$('btnSound').addEventListener('click', () => { Sound.init(); Sound.setMuted(!Sound.isMuted()); renderSoundBtn(); Sound.click(); });
$('answerForm').addEventListener('submit', onSubmit);
$('answer').addEventListener('input', () => Sound.key());
$('btnNext').addEventListener('click', onNext);
$('btnCopy').addEventListener('click', copyShare);
$('btnSkip').addEventListener('click', skipDig);
$('scene').addEventListener('click', skipDig);
document.addEventListener('keydown', e => {
  if (screens.play.classList.contains('hidden')) return;
  if (state.digging && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); skipDig(); return; }
  if (e.key === 'Enter' && !$('revealArea').classList.contains('hidden')){
    if (performance.now() - state.revealAt > 450 && document.activeElement !== $('btnNext')){ e.preventDefault(); onNext(); }
  }
});

// test hook (harmless in production)
window.__dugup = {PROMPTS, matchAnswer, normalize, pickRound, dailyPrompts, practicePrompts, seasonOrder, seasonIds, FROZEN_SEASONS, RARITY_MONTH, state, Scene, Sound, SKINS, unlockedIds, openWardrobe, openMuseum, openArchive};
})();

