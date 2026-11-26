// Dug Up — loads index.html and its local scripts in a Node vm with a minimal DOM stub.
// Shared by tools/check.mjs and tools/rarity.mjs. Built-in modules only.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

// A value that tolerates any use: every property is another stub, calling or constructing returns a stub,
// and coercion gives 0 / ''. Assigned properties are remembered so `el.x = 1; el.x` behaves.
export function chameleon(){
  const props = new Map();
  return new Proxy(function(){}, {
    get(_, k){
      if (k === Symbol.toPrimitive) return hint => (hint === 'number' ? 0 : '');
      if (k === Symbol.iterator) return function*(){};
      if (k === 'then') return undefined; // never look like a Promise
      if (k === 'length') return 0;
      if (!props.has(k)) props.set(k, chameleon());
      return props.get(k);
    },
    set(_, k, v){ props.set(k, v); return true; },
    apply(){ return chameleon(); },
    construct(){ return chameleon(); }
  });
}

// The page's scripts in document order: inline ones, and local src files (relative paths, read from disk next to
// the html). Absolute/remote src (Vercel analytics) is skipped. `overrides` maps a src to replacement source text.
export function pageScripts(htmlFile, html, overrides = {}){
  const base = path.dirname(htmlFile);
  return [...html.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)].map((m, i) => {
    const src = ((m[1] || '').match(/\ssrc="([^"]*)"/) || [])[1];
    if (src === undefined) return { name: `index.html#script${i + 1}`, code: m[2] };
    if (/^(\/|[a-z]+:)/i.test(src)) return null;
    return { name: src, file: path.join(base, src), code: src in overrides ? overrides[src] : fs.readFileSync(path.join(base, src), 'utf8') };
  }).filter(Boolean);
}

export function loadGame(htmlFile, html, overrides = {}){
  const scripts = pageScripts(htmlFile, html, overrides);
  if (!scripts.some(s => s.code.includes('const PROMPT_DATA'))) throw new Error('PROMPT_DATA script not found');

  const mem = new Map();
  const noop = () => 0;
  const sandbox = {
    console,
    document: chameleon(),
    navigator: chameleon(),
    location: chameleon(),
    performance: { now: () => 0 },
    localStorage: {
      getItem: k => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => { mem.set(k, String(v)); },
      removeItem: k => { mem.delete(k); },
      key: i => [...mem.keys()][i] ?? null,
      get length(){ return mem.size; }
    },
    btoa, atob,
    // Wikipedia is "down": the game must fall back to offline tiers (invariant 7).
    fetch: () => Promise.reject(new Error('offline (test)')),
    AbortController,
    URL, URLSearchParams, TextEncoder, TextDecoder,
    setTimeout: noop, clearTimeout: noop, setInterval: noop, clearInterval: noop,
    requestAnimationFrame: noop, cancelAnimationFrame: noop,
    addEventListener: noop, removeEventListener: noop,
    matchMedia: () => chameleon(),
    Image: function(){ return chameleon(); },
    FontFace: function(){ return chameleon(); },
    AudioContext: function(){ return chameleon(); }
  };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  const ctx = vm.createContext(sandbox);
  scripts.forEach(s => vm.runInContext(s.code, ctx, { filename: s.name }));
  if (!sandbox.__dugup) throw new Error('window.__dugup test hook was not set — did BOOT fail?');
  // PRACTICE_IDS lives inside the app IIFE; practicePrompts() drops unknown ids, which the length check catches.
  const hook = sandbox.__dugup;
  return {
    PROMPT_DATA: vm.runInContext('PROMPT_DATA', ctx),
    ROTATION: Array.from(vm.runInContext('typeof ROTATION === "undefined" ? [] : ROTATION', ctx), s => Array.from(s)),
    RARITY: vm.runInContext('typeof RARITY === "undefined" ? null : RARITY', ctx),
    SUMMARIES: vm.runInContext('typeof SUMMARIES === "undefined" ? null : SUMMARIES', ctx),
    PRACTICE_IDS: hook.practicePrompts().map(p => p.id),
    localStorage: sandbox.localStorage,
    ...hook
  };
}
