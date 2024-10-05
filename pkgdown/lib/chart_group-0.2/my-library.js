var s6 = Object.defineProperty;
var _6 = (e, t, n) => t in e ? s6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Vt = (e, t, n) => (_6(e, typeof t != "symbol" ? t + "" : t, n), n);
function Pe() {
}
const Br = (e) => e;
function I_(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function dc(e) {
  return e();
}
function O_() {
  return /* @__PURE__ */ Object.create(null);
}
function Ht(e) {
  e.forEach(dc);
}
function Hr(e) {
  return typeof e == "function";
}
function ut(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function h6(e) {
  return Object.keys(e).length === 0;
}
function c6(e, ...t) {
  if (e == null) {
    for (const i of t)
      i(void 0);
    return Pe;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function wt(e, t, n) {
  e.$$.on_destroy.push(c6(t, n));
}
function D_(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
const mc = typeof window < "u";
let Al = mc ? () => window.performance.now() : () => Date.now(), ju = mc ? (e) => requestAnimationFrame(e) : Pe;
const Lr = /* @__PURE__ */ new Set();
function yc(e) {
  Lr.forEach((t) => {
    t.c(e) || (Lr.delete(t), t.f());
  }), Lr.size !== 0 && ju(yc);
}
function Cl(e) {
  let t;
  return Lr.size === 0 && ju(yc), {
    promise: new Promise((n) => {
      Lr.add(t = { c: e, f: n });
    }),
    abort() {
      Lr.delete(t);
    }
  };
}
const g6 = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function q(e, t) {
  e.appendChild(t);
}
function d6(e, t, n) {
  const i = Ku(e);
  if (!i.getElementById(t)) {
    const l = _e("style");
    l.id = t, l.textContent = n, bc(i, l);
  }
}
function Ku(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function m6(e) {
  const t = _e("style");
  return t.textContent = "/* empty */", bc(Ku(e), t), t.sheet;
}
function bc(e, t) {
  return q(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function j(e, t, n) {
  e.insertBefore(t, n || null);
}
function Z(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function xn(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function _e(e) {
  return document.createElement(e);
}
function ze(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ae(e) {
  return document.createTextNode(e);
}
function ve() {
  return Ae(" ");
}
function Le() {
  return Ae("");
}
function ot(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function v(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function y6(e) {
  return Array.from(e.childNodes);
}
function Oe(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function y(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
let Lo;
function b6() {
  if (Lo === void 0) {
    Lo = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Lo = !0;
    }
  }
  return Lo;
}
function ir(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const i = _e("iframe");
  i.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  ), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const l = b6();
  let f;
  return l ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", f = ot(
    window,
    "message",
    /** @param {MessageEvent} event */
    (u) => {
      u.source === i.contentWindow && t();
    }
  )) : (i.src = "about:blank", i.onload = () => {
    f = ot(i.contentWindow, "resize", t), t();
  }), q(e, i), () => {
    (l || f && i.contentWindow) && f(), Z(i);
  };
}
function w6(e, t, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: i });
}
class p6 {
  constructor(t = !1) {
    /**
     * @private
     * @default false
     */
    Vt(this, "is_svg", !1);
    /** parent for creating node */
    Vt(this, "e");
    /** html tag nodes */
    Vt(this, "n");
    /** target */
    Vt(this, "t");
    /** anchor */
    Vt(this, "a");
    this.is_svg = t, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(t) {
    this.h(t);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(t, n, i = null) {
    this.e || (this.is_svg ? this.e = ze(
      /** @type {keyof SVGElementTagNameMap} */
      n.nodeName
    ) : this.e = _e(
      /** @type {keyof HTMLElementTagNameMap} */
      n.nodeType === 11 ? "TEMPLATE" : n.nodeName
    ), this.t = n.tagName !== "TEMPLATE" ? n : (
      /** @type {HTMLTemplateElement} */
      n.content
    ), this.c(t)), this.i(i);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(t) {
    for (let n = 0; n < this.n.length; n += 1)
      j(this.t, this.n[n], t);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(Z);
  }
}
function v6(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
const Po = /* @__PURE__ */ new Map();
let Fo = 0;
function k6(e) {
  let t = 5381, n = e.length;
  for (; n--; )
    t = (t << 5) - t ^ e.charCodeAt(n);
  return t >>> 0;
}
function x6(e, t) {
  const n = { stylesheet: m6(t), rules: {} };
  return Po.set(e, n), n;
}
function wl(e, t, n, i, l, f, u, a = 0) {
  const _ = 16.666 / i;
  let c = `{
`;
  for (let x = 0; x <= 1; x += _) {
    const M = t + (n - t) * f(x);
    c += x * 100 + `%{${u(M, 1 - M)}}
`;
  }
  const d = c + `100% {${u(n, 1 - n)}}
}`, h = `__svelte_${k6(d)}_${a}`, g = Ku(e), { stylesheet: w, rules: p } = Po.get(g) || x6(g, e);
  p[h] || (p[h] = !0, w.insertRule(`@keyframes ${h} ${d}`, w.cssRules.length));
  const S = e.style.animation || "";
  return e.style.animation = `${S ? `${S}, ` : ""}${h} ${i}ms linear ${l}ms 1 both`, Fo += 1, h;
}
function pl(e, t) {
  const n = (e.style.animation || "").split(", "), i = n.filter(
    t ? (f) => f.indexOf(t) < 0 : (f) => f.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), l = n.length - i.length;
  l && (e.style.animation = i.join(", "), Fo -= l, Fo || M6());
}
function M6() {
  ju(() => {
    Fo || (Po.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && Z(t);
    }), Po.clear());
  });
}
function T6(e, t, n, i) {
  if (!t)
    return Pe;
  const l = e.getBoundingClientRect();
  if (t.left === l.left && t.right === l.right && t.top === l.top && t.bottom === l.bottom)
    return Pe;
  const {
    delay: f = 0,
    duration: u = 300,
    easing: a = Br,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: _ = Al() + f,
    // @ts-ignore todo:
    end: c = _ + u,
    tick: d = Pe,
    css: h
  } = n(e, { from: t, to: l }, i);
  let g = !0, w = !1, p;
  function S() {
    h && (p = wl(e, 0, 1, u, f, a, h)), f || (w = !0);
  }
  function x() {
    h && pl(e, p), g = !1;
  }
  return Cl((M) => {
    if (!w && M >= _ && (w = !0), w && M >= c && (d(1, 0), x()), !g)
      return !1;
    if (w) {
      const z = M - _, C = 0 + 1 * a(z / u);
      d(C, 1 - C);
    }
    return !0;
  }), S(), d(0, 1), x;
}
function S6(e) {
  const t = getComputedStyle(e);
  if (t.position !== "absolute" && t.position !== "fixed") {
    const { width: n, height: i } = t, l = e.getBoundingClientRect();
    e.style.position = "absolute", e.style.width = n, e.style.height = i, z6(e, l);
  }
}
function z6(e, t) {
  const n = e.getBoundingClientRect();
  if (t.left !== n.left || t.top !== n.top) {
    const i = getComputedStyle(e), l = i.transform === "none" ? "" : i.transform;
    e.style.transform = `${l} translate(${t.left - n.left}px, ${t.top - n.top}px)`;
  }
}
let vl;
function ml(e) {
  vl = e;
}
function Ju() {
  if (!vl)
    throw new Error("Function called outside component initialization");
  return vl;
}
function A6(e) {
  Ju().$$.on_mount.push(e);
}
function Qu(e) {
  Ju().$$.after_update.push(e);
}
function Vu(e) {
  Ju().$$.on_destroy.push(e);
}
const Sr = [], _t = [];
let Er = [];
const Eu = [], wc = /* @__PURE__ */ Promise.resolve();
let Ru = !1;
function pc() {
  Ru || (Ru = !0, wc.then($u));
}
function Ll() {
  return pc(), wc;
}
function it(e) {
  Er.push(e);
}
function It(e) {
  Eu.push(e);
}
const wu = /* @__PURE__ */ new Set();
let xr = 0;
function $u() {
  if (xr !== 0)
    return;
  const e = vl;
  do {
    try {
      for (; xr < Sr.length; ) {
        const t = Sr[xr];
        xr++, ml(t), C6(t.$$);
      }
    } catch (t) {
      throw Sr.length = 0, xr = 0, t;
    }
    for (ml(null), Sr.length = 0, xr = 0; _t.length; )
      _t.pop()();
    for (let t = 0; t < Er.length; t += 1) {
      const n = Er[t];
      wu.has(n) || (wu.add(n), n());
    }
    Er.length = 0;
  } while (Sr.length);
  for (; Eu.length; )
    Eu.pop()();
  Ru = !1, wu.clear(), ml(e);
}
function C6(e) {
  if (e.fragment !== null) {
    e.update(), Ht(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(it);
  }
}
function L6(e) {
  const t = [], n = [];
  Er.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), Er = t;
}
let sl;
function ea() {
  return sl || (sl = Promise.resolve(), sl.then(() => {
    sl = null;
  })), sl;
}
function $i(e, t, n) {
  e.dispatchEvent(w6(`${t ? "intro" : "outro"}${n}`));
}
const Do = /* @__PURE__ */ new Set();
let ui;
function We() {
  ui = {
    r: 0,
    c: [],
    p: ui
    // parent group
  };
}
function Be() {
  ui.r || Ht(ui.c), ui = ui.p;
}
function ee(e, t) {
  e && e.i && (Do.delete(e), e.i(t));
}
function ue(e, t, n, i) {
  if (e && e.o) {
    if (Do.has(e))
      return;
    Do.add(e), ui.c.push(() => {
      Do.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
const ta = { duration: 0 };
function Fi(e, t, n) {
  const i = { direction: "in" };
  let l = t(e, n, i), f = !1, u, a, _ = 0;
  function c() {
    u && pl(e, u);
  }
  function d() {
    const {
      delay: g = 0,
      duration: w = 300,
      easing: p = Br,
      tick: S = Pe,
      css: x
    } = l || ta;
    x && (u = wl(e, 0, 1, w, g, p, x, _++)), S(0, 1);
    const M = Al() + g, z = M + w;
    a && a.abort(), f = !0, it(() => $i(e, !0, "start")), a = Cl((C) => {
      if (f) {
        if (C >= z)
          return S(1, 0), $i(e, !0, "end"), c(), f = !1;
        if (C >= M) {
          const P = p((C - M) / w);
          S(P, 1 - P);
        }
      }
      return f;
    });
  }
  let h = !1;
  return {
    start() {
      h || (h = !0, pl(e), Hr(l) ? (l = l(i), ea().then(d)) : d());
    },
    invalidate() {
      h = !1;
    },
    end() {
      f && (c(), f = !1);
    }
  };
}
function kl(e, t, n) {
  const i = { direction: "out" };
  let l = t(e, n, i), f = !0, u;
  const a = ui;
  a.r += 1;
  let _;
  function c() {
    const {
      delay: d = 0,
      duration: h = 300,
      easing: g = Br,
      tick: w = Pe,
      css: p
    } = l || ta;
    p && (u = wl(e, 1, 0, h, d, g, p));
    const S = Al() + d, x = S + h;
    it(() => $i(e, !1, "start")), "inert" in e && (_ = /** @type {HTMLElement} */
    e.inert, e.inert = !0), Cl((M) => {
      if (f) {
        if (M >= x)
          return w(0, 1), $i(e, !1, "end"), --a.r || Ht(a.c), !1;
        if (M >= S) {
          const z = g((M - S) / h);
          w(1 - z, z);
        }
      }
      return f;
    });
  }
  return Hr(l) ? ea().then(() => {
    l = l(i), c();
  }) : c(), {
    end(d) {
      d && "inert" in e && (e.inert = _), d && l.tick && l.tick(1, 0), f && (u && pl(e, u), f = !1);
    }
  };
}
function Pt(e, t, n, i) {
  let f = t(e, n, { direction: "both" }), u = i ? 0 : 1, a = null, _ = null, c = null, d;
  function h() {
    c && pl(e, c);
  }
  function g(p, S) {
    const x = (
      /** @type {Program['d']} */
      p.b - u
    );
    return S *= Math.abs(x), {
      a: u,
      b: p.b,
      d: x,
      duration: S,
      start: p.start,
      end: p.start + S,
      group: p.group
    };
  }
  function w(p) {
    const {
      delay: S = 0,
      duration: x = 300,
      easing: M = Br,
      tick: z = Pe,
      css: C
    } = f || ta, P = {
      start: Al() + S,
      b: p
    };
    p || (P.group = ui, ui.r += 1), "inert" in e && (p ? d !== void 0 && (e.inert = d) : (d = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), a || _ ? _ = P : (C && (h(), c = wl(e, u, p, x, S, M, C)), p && z(0, 1), a = g(P, x), it(() => $i(e, p, "start")), Cl((O) => {
      if (_ && O > _.start && (a = g(_, x), _ = null, $i(e, a.b, "start"), C && (h(), c = wl(
        e,
        u,
        a.b,
        a.duration,
        0,
        M,
        f.css
      ))), a) {
        if (O >= a.end)
          z(u = a.b, 1 - u), $i(e, a.b, "end"), _ || (a.b ? h() : --a.group.r || Ht(a.group.c)), a = null;
        else if (O >= a.start) {
          const E = O - a.start;
          u = a.a + a.d * M(E / a.duration), z(u, 1 - u);
        }
      }
      return !!(a || _);
    }));
  }
  return {
    run(p) {
      Hr(f) ? ea().then(() => {
        f = f({ direction: p ? "in" : "out" }), w(p);
      }) : w(p);
    },
    end() {
      h(), a = _ = null;
    }
  };
}
function ke(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function vc(e, t) {
  e.d(1), t.delete(e.key);
}
function Kn(e, t) {
  ue(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function E6(e, t) {
  e.f(), vc(e, t);
}
function kn(e, t, n, i, l, f, u, a, _, c, d, h) {
  let g = e.length, w = f.length, p = g;
  const S = {};
  for (; p--; )
    S[e[p].key] = p;
  const x = [], M = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C = [];
  for (p = w; p--; ) {
    const B = h(l, f, p), D = n(B);
    let te = u.get(D);
    te ? i && C.push(() => te.p(B, t)) : (te = c(D, B), te.c()), M.set(D, x[p] = te), D in S && z.set(D, Math.abs(p - S[D]));
  }
  const P = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
  function E(B) {
    ee(B, 1), B.m(a, d), u.set(B.key, B), d = B.first, w--;
  }
  for (; g && w; ) {
    const B = x[w - 1], D = e[g - 1], te = B.key, W = D.key;
    B === D ? (d = B.first, g--, w--) : M.has(W) ? !u.has(te) || P.has(te) ? E(B) : O.has(W) ? g-- : z.get(te) > z.get(W) ? (O.add(te), E(B)) : (P.add(W), g--) : (_(D, u), g--);
  }
  for (; g--; ) {
    const B = e[g];
    M.has(B.key) || _(B, u);
  }
  for (; w; )
    E(x[w - 1]);
  return Ht(C), x;
}
function Ot(e, t, n) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
}
function Ke(e) {
  e && e.c();
}
function Ze(e, t, n) {
  const { fragment: i, after_update: l } = e.$$;
  i && i.m(t, n), it(() => {
    const f = e.$$.on_mount.map(dc).filter(Hr);
    e.$$.on_destroy ? e.$$.on_destroy.push(...f) : Ht(f), e.$$.on_mount = [];
  }), l.forEach(it);
}
function je(e, t) {
  const n = e.$$;
  n.fragment !== null && (L6(n.after_update), Ht(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function R6(e, t) {
  e.$$.dirty[0] === -1 && (Sr.push(e), pc(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ht(e, t, n, i, l, f, u = null, a = [-1]) {
  const _ = vl;
  ml(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: Pe,
    not_equal: l,
    bound: O_(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (_ ? _.$$.context : [])),
    // everything else
    callbacks: O_(),
    dirty: a,
    skip_bound: !1,
    root: t.target || _.$$.root
  };
  u && u(c.root);
  let d = !1;
  if (c.ctx = n ? n(e, t.props || {}, (h, g, ...w) => {
    const p = w.length ? w[0] : g;
    return c.ctx && l(c.ctx[h], c.ctx[h] = p) && (!c.skip_bound && c.bound[h] && c.bound[h](p), d && R6(e, h)), g;
  }) : [], c.update(), d = !0, Ht(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = y6(t.target);
      c.fragment && c.fragment.l(h), h.forEach(Z);
    } else
      c.fragment && c.fragment.c();
    t.intro && ee(e.$$.fragment), Ze(e, t.target, t.anchor), $u();
  }
  ml(_);
}
let kc;
typeof HTMLElement == "function" && (kc = class extends HTMLElement {
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    Vt(this, "$$ctor");
    /** Slots */
    Vt(this, "$$s");
    /** The Svelte component instance */
    Vt(this, "$$c");
    /** Whether or not the custom element is connected */
    Vt(this, "$$cn", !1);
    /** Component props data */
    Vt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Vt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Vt(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    Vt(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    Vt(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const l = this.$$c.$on(t, n);
      this.$$l_u.set(n, l);
    }
    super.addEventListener(t, n, i);
  }
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const l = this.$$l_u.get(n);
      l && (l(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(f) {
        return () => {
          let u;
          return {
            c: function() {
              u = _e("slot"), f !== "default" && v(u, "name", f);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, d) {
              j(c, u, d);
            },
            d: function(c) {
              c && Z(u);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = v6(this);
      for (const f of this.$$s)
        f in i && (n[f] = [t(f)]);
      for (const f of this.attributes) {
        const u = this.$$g_p(f.name);
        u in this.$$d || (this.$$d[u] = No(u, f.value, this.$$p_d, "toProp"));
      }
      for (const f in this.$$p_d)
        !(f in this.$$d) && this[f] !== void 0 && (this.$$d[f] = this[f], delete this[f]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const l = () => {
        this.$$r = !0;
        for (const f in this.$$p_d)
          if (this.$$d[f] = this.$$c.$$.ctx[this.$$c.$$.props[f]], this.$$p_d[f].reflect) {
            const u = No(
              f,
              this.$$d[f],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[f].attribute || f) : this.setAttribute(this.$$p_d[f].attribute || f, u);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const f in this.$$l)
        for (const u of this.$$l[f]) {
          const a = this.$$c.$on(f, u);
          this.$$l_u.set(u, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, i) {
    var l;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = No(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function No(e, t, n, i) {
  var f;
  const l = (f = n[e]) == null ? void 0 : f.type;
  if (t = l === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (l) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (l) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function I6(e, t, n, i, l, f) {
  let u = class extends kc {
    constructor() {
      super(e, n, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((a) => {
    Object.defineProperty(u.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(_) {
        var c;
        _ = No(a, _, t), this.$$d[a] = _, (c = this.$$c) == null || c.$set({ [a]: _ });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(u.prototype, a, {
      get() {
        var _;
        return (_ = this.$$c) == null ? void 0 : _[a];
      }
    });
  }), f && (u = f(u)), e.element = /** @type {any} */
  u, u;
}
class ct {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    je(this, 1), this.$destroy = Pe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Hr(n))
      return Pe;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const l = i.indexOf(n);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !h6(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const O6 = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(O6);
const Mr = [];
function El(e, t = Pe) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function l(a) {
    if (ut(e, a) && (e = a, n)) {
      const _ = !Mr.length;
      for (const c of i)
        c[1](), Mr.push(c, e);
      if (_) {
        for (let c = 0; c < Mr.length; c += 2)
          Mr[c][0](Mr[c + 1]);
        Mr.length = 0;
      }
    }
  }
  function f(a) {
    l(a(e));
  }
  function u(a, _ = Pe) {
    const c = [a, _];
    return i.add(c), i.size === 1 && (n = t(l, f) || Pe), a(e), () => {
      i.delete(c), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: l, update: f, subscribe: u };
}
const xc = El(null), N_ = El(null), D6 = El(null), Qi = El(null);
function Uo(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function N6(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Rl(e) {
  let t, n, i;
  e.length !== 2 ? (t = Uo, n = (a, _) => Uo(e(a), _), i = (a, _) => e(a) - _) : (t = e === Uo || e === N6 ? e : U6, n = e, i = e);
  function l(a, _, c = 0, d = a.length) {
    if (c < d) {
      if (t(_, _) !== 0)
        return d;
      do {
        const h = c + d >>> 1;
        n(a[h], _) < 0 ? c = h + 1 : d = h;
      } while (c < d);
    }
    return c;
  }
  function f(a, _, c = 0, d = a.length) {
    if (c < d) {
      if (t(_, _) !== 0)
        return d;
      do {
        const h = c + d >>> 1;
        n(a[h], _) <= 0 ? c = h + 1 : d = h;
      } while (c < d);
    }
    return c;
  }
  function u(a, _, c = 0, d = a.length) {
    const h = l(a, _, c, d - 1);
    return h > c && i(a[h - 1], _) > -i(a[h], _) ? h - 1 : h;
  }
  return { left: l, center: u, right: f };
}
function U6() {
  return 0;
}
function P6(e) {
  return e === null ? NaN : +e;
}
const F6 = Rl(Uo), W6 = F6.right;
Rl(P6).center;
const B6 = W6;
function Iu(e, t) {
  let n, i;
  if (t === void 0)
    for (const l of e)
      l != null && (n === void 0 ? l >= l && (n = i = l) : (n > l && (n = l), i < l && (i = l)));
  else {
    let l = -1;
    for (let f of e)
      (f = t(f, ++l, e)) != null && (n === void 0 ? f >= f && (n = i = f) : (n > f && (n = f), i < f && (i = f)));
  }
  return [n, i];
}
class U_ extends Map {
  constructor(t, n = X6) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [i, l] of t)
        this.set(i, l);
  }
  get(t) {
    return super.get(P_(this, t));
  }
  has(t) {
    return super.has(P_(this, t));
  }
  set(t, n) {
    return super.set(H6(this, t), n);
  }
  delete(t) {
    return super.delete(Y6(this, t));
  }
}
function P_({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : n;
}
function H6({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function Y6({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function X6(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const q6 = Math.sqrt(50), G6 = Math.sqrt(10), Z6 = Math.sqrt(2);
function Wo(e, t, n) {
  const i = (t - e) / Math.max(0, n), l = Math.floor(Math.log10(i)), f = i / Math.pow(10, l), u = f >= q6 ? 10 : f >= G6 ? 5 : f >= Z6 ? 2 : 1;
  let a, _, c;
  return l < 0 ? (c = Math.pow(10, -l) / u, a = Math.round(e * c), _ = Math.round(t * c), a / c < e && ++a, _ / c > t && --_, c = -c) : (c = Math.pow(10, l) * u, a = Math.round(e / c), _ = Math.round(t / c), a * c < e && ++a, _ * c > t && --_), _ < a && 0.5 <= n && n < 2 ? Wo(e, t, n * 2) : [a, _, c];
}
function Ou(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const i = t < e, [l, f, u] = i ? Wo(t, e, n) : Wo(e, t, n);
  if (!(f >= l))
    return [];
  const a = f - l + 1, _ = new Array(a);
  if (i)
    if (u < 0)
      for (let c = 0; c < a; ++c)
        _[c] = (f - c) / -u;
    else
      for (let c = 0; c < a; ++c)
        _[c] = (f - c) * u;
  else if (u < 0)
    for (let c = 0; c < a; ++c)
      _[c] = (l + c) / -u;
  else
    for (let c = 0; c < a; ++c)
      _[c] = (l + c) * u;
  return _;
}
function Du(e, t, n) {
  return t = +t, e = +e, n = +n, Wo(e, t, n)[2];
}
function Nu(e, t, n) {
  t = +t, e = +e, n = +n;
  const i = t < e, l = i ? Du(t, e, n) : Du(e, t, n);
  return (i ? -1 : 1) * (l < 0 ? 1 / -l : l);
}
function Uu(e, t) {
  let n;
  if (t === void 0)
    for (const i of e)
      i != null && (n < i || n === void 0 && i >= i) && (n = i);
  else {
    let i = -1;
    for (let l of e)
      (l = t(l, ++i, e)) != null && (n < l || n === void 0 && l >= l) && (n = l);
  }
  return n;
}
function Mc(e, t) {
  let n;
  if (t === void 0)
    for (const i of e)
      i != null && (n > i || n === void 0 && i >= i) && (n = i);
  else {
    let i = -1;
    for (let l of e)
      (l = t(l, ++i, e)) != null && (n > l || n === void 0 && l >= l) && (n = l);
  }
  return n;
}
function j6(e, t, n) {
  e = +e, t = +t, n = (l = arguments.length) < 2 ? (t = e, e = 0, 1) : l < 3 ? 1 : +n;
  for (var i = -1, l = Math.max(0, Math.ceil((t - e) / n)) | 0, f = new Array(l); ++i < l; )
    f[i] = e + i * n;
  return f;
}
function na(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Tc(e, t) {
  var n = Object.create(e.prototype);
  for (var i in t)
    n[i] = t[i];
  return n;
}
function Il() {
}
var xl = 0.7, Bo = 1 / xl, Rr = "\\s*([+-]?\\d+)\\s*", Ml = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ai = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", K6 = /^#([0-9a-f]{3,8})$/, J6 = new RegExp(`^rgb\\(${Rr},${Rr},${Rr}\\)$`), Q6 = new RegExp(`^rgb\\(${ai},${ai},${ai}\\)$`), V6 = new RegExp(`^rgba\\(${Rr},${Rr},${Rr},${Ml}\\)$`), $6 = new RegExp(`^rgba\\(${ai},${ai},${ai},${Ml}\\)$`), e3 = new RegExp(`^hsl\\(${Ml},${ai},${ai}\\)$`), t3 = new RegExp(`^hsla\\(${Ml},${ai},${ai},${Ml}\\)$`), F_ = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
na(Il, Tl, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: W_,
  // Deprecated! Use color.formatHex.
  formatHex: W_,
  formatHex8: n3,
  formatHsl: i3,
  formatRgb: B_,
  toString: B_
});
function W_() {
  return this.rgb().formatHex();
}
function n3() {
  return this.rgb().formatHex8();
}
function i3() {
  return Sc(this).formatHsl();
}
function B_() {
  return this.rgb().formatRgb();
}
function Tl(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = K6.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? H_(t) : n === 3 ? new vn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Eo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Eo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = J6.exec(e)) ? new vn(t[1], t[2], t[3], 1) : (t = Q6.exec(e)) ? new vn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = V6.exec(e)) ? Eo(t[1], t[2], t[3], t[4]) : (t = $6.exec(e)) ? Eo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = e3.exec(e)) ? q_(t[1], t[2] / 100, t[3] / 100, 1) : (t = t3.exec(e)) ? q_(t[1], t[2] / 100, t[3] / 100, t[4]) : F_.hasOwnProperty(e) ? H_(F_[e]) : e === "transparent" ? new vn(NaN, NaN, NaN, 0) : null;
}
function H_(e) {
  return new vn(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Eo(e, t, n, i) {
  return i <= 0 && (e = t = n = NaN), new vn(e, t, n, i);
}
function r3(e) {
  return e instanceof Il || (e = Tl(e)), e ? (e = e.rgb(), new vn(e.r, e.g, e.b, e.opacity)) : new vn();
}
function Pu(e, t, n, i) {
  return arguments.length === 1 ? r3(e) : new vn(e, t, n, i ?? 1);
}
function vn(e, t, n, i) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
}
na(vn, Pu, Tc(Il, {
  brighter(e) {
    return e = e == null ? Bo : Math.pow(Bo, e), new vn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xl : Math.pow(xl, e), new vn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new vn(er(this.r), er(this.g), er(this.b), Ho(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Y_,
  // Deprecated! Use color.formatHex.
  formatHex: Y_,
  formatHex8: l3,
  formatRgb: X_,
  toString: X_
}));
function Y_() {
  return `#${Vi(this.r)}${Vi(this.g)}${Vi(this.b)}`;
}
function l3() {
  return `#${Vi(this.r)}${Vi(this.g)}${Vi(this.b)}${Vi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function X_() {
  const e = Ho(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${er(this.r)}, ${er(this.g)}, ${er(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ho(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function er(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Vi(e) {
  return e = er(e), (e < 16 ? "0" : "") + e.toString(16);
}
function q_(e, t, n, i) {
  return i <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ii(e, t, n, i);
}
function Sc(e) {
  if (e instanceof ii)
    return new ii(e.h, e.s, e.l, e.opacity);
  if (e instanceof Il || (e = Tl(e)), !e)
    return new ii();
  if (e instanceof ii)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, i = e.b / 255, l = Math.min(t, n, i), f = Math.max(t, n, i), u = NaN, a = f - l, _ = (f + l) / 2;
  return a ? (t === f ? u = (n - i) / a + (n < i) * 6 : n === f ? u = (i - t) / a + 2 : u = (t - n) / a + 4, a /= _ < 0.5 ? f + l : 2 - f - l, u *= 60) : a = _ > 0 && _ < 1 ? 0 : u, new ii(u, a, _, e.opacity);
}
function o3(e, t, n, i) {
  return arguments.length === 1 ? Sc(e) : new ii(e, t, n, i ?? 1);
}
function ii(e, t, n, i) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
}
na(ii, o3, Tc(Il, {
  brighter(e) {
    return e = e == null ? Bo : Math.pow(Bo, e), new ii(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? xl : Math.pow(xl, e), new ii(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * t, l = 2 * n - i;
    return new vn(
      pu(e >= 240 ? e - 240 : e + 120, l, i),
      pu(e, l, i),
      pu(e < 120 ? e + 240 : e - 120, l, i),
      this.opacity
    );
  },
  clamp() {
    return new ii(G_(this.h), Ro(this.s), Ro(this.l), Ho(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ho(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${G_(this.h)}, ${Ro(this.s) * 100}%, ${Ro(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function G_(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ro(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function pu(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ia = (e) => () => e;
function f3(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function u3(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * t, n);
  };
}
function a3(e) {
  return (e = +e) == 1 ? zc : function(t, n) {
    return n - t ? u3(t, n, e) : ia(isNaN(t) ? n : t);
  };
}
function zc(e, t) {
  var n = t - e;
  return n ? f3(e, n) : ia(isNaN(e) ? t : e);
}
const Z_ = function e(t) {
  var n = a3(t);
  function i(l, f) {
    var u = n((l = Pu(l)).r, (f = Pu(f)).r), a = n(l.g, f.g), _ = n(l.b, f.b), c = zc(l.opacity, f.opacity);
    return function(d) {
      return l.r = u(d), l.g = a(d), l.b = _(d), l.opacity = c(d), l + "";
    };
  }
  return i.gamma = e, i;
}(1);
function s3(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, i = t.slice(), l;
  return function(f) {
    for (l = 0; l < n; ++l)
      i[l] = e[l] * (1 - f) + t[l] * f;
    return i;
  };
}
function _3(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function h3(e, t) {
  var n = t ? t.length : 0, i = e ? Math.min(n, e.length) : 0, l = new Array(i), f = new Array(n), u;
  for (u = 0; u < i; ++u)
    l[u] = ra(e[u], t[u]);
  for (; u < n; ++u)
    f[u] = t[u];
  return function(a) {
    for (u = 0; u < i; ++u)
      f[u] = l[u](a);
    return f;
  };
}
function c3(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(i) {
    return n.setTime(e * (1 - i) + t * i), n;
  };
}
function Yo(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function g3(e, t) {
  var n = {}, i = {}, l;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (l in t)
    l in e ? n[l] = ra(e[l], t[l]) : i[l] = t[l];
  return function(f) {
    for (l in n)
      i[l] = n[l](f);
    return i;
  };
}
var Fu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, vu = new RegExp(Fu.source, "g");
function d3(e) {
  return function() {
    return e;
  };
}
function m3(e) {
  return function(t) {
    return e(t) + "";
  };
}
function y3(e, t) {
  var n = Fu.lastIndex = vu.lastIndex = 0, i, l, f, u = -1, a = [], _ = [];
  for (e = e + "", t = t + ""; (i = Fu.exec(e)) && (l = vu.exec(t)); )
    (f = l.index) > n && (f = t.slice(n, f), a[u] ? a[u] += f : a[++u] = f), (i = i[0]) === (l = l[0]) ? a[u] ? a[u] += l : a[++u] = l : (a[++u] = null, _.push({ i: u, x: Yo(i, l) })), n = vu.lastIndex;
  return n < t.length && (f = t.slice(n), a[u] ? a[u] += f : a[++u] = f), a.length < 2 ? _[0] ? m3(_[0].x) : d3(t) : (t = _.length, function(c) {
    for (var d = 0, h; d < t; ++d)
      a[(h = _[d]).i] = h.x(c);
    return a.join("");
  });
}
function ra(e, t) {
  var n = typeof t, i;
  return t == null || n === "boolean" ? ia(t) : (n === "number" ? Yo : n === "string" ? (i = Tl(t)) ? (t = i, Z_) : y3 : t instanceof Tl ? Z_ : t instanceof Date ? c3 : _3(t) ? s3 : Array.isArray(t) ? h3 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? g3 : Yo)(e, t);
}
function b3(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
const Wu = Math.PI, Bu = 2 * Wu, Ji = 1e-6, w3 = Bu - Ji;
function Ac(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function p3(e) {
  let t = Math.floor(e);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t > 15)
    return Ac;
  const n = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let l = 1, f = i.length; l < f; ++l)
      this._ += Math.round(arguments[l] * n) / n + i[l];
  };
}
let v3 = class {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Ac : p3(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, i, l) {
    this._append`Q${+t},${+n},${this._x1 = +i},${this._y1 = +l}`;
  }
  bezierCurveTo(t, n, i, l, f, u) {
    this._append`C${+t},${+n},${+i},${+l},${this._x1 = +f},${this._y1 = +u}`;
  }
  arcTo(t, n, i, l, f) {
    if (t = +t, n = +n, i = +i, l = +l, f = +f, f < 0)
      throw new Error(`negative radius: ${f}`);
    let u = this._x1, a = this._y1, _ = i - t, c = l - n, d = u - t, h = a - n, g = d * d + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (g > Ji)
      if (!(Math.abs(h * _ - c * d) > Ji) || !f)
        this._append`L${this._x1 = t},${this._y1 = n}`;
      else {
        let w = i - u, p = l - a, S = _ * _ + c * c, x = w * w + p * p, M = Math.sqrt(S), z = Math.sqrt(g), C = f * Math.tan((Wu - Math.acos((S + g - x) / (2 * M * z))) / 2), P = C / z, O = C / M;
        Math.abs(P - 1) > Ji && this._append`L${t + P * d},${n + P * h}`, this._append`A${f},${f},0,0,${+(h * w > d * p)},${this._x1 = t + O * _},${this._y1 = n + O * c}`;
      }
  }
  arc(t, n, i, l, f, u) {
    if (t = +t, n = +n, i = +i, u = !!u, i < 0)
      throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(l), _ = i * Math.sin(l), c = t + a, d = n + _, h = 1 ^ u, g = u ? l - f : f - l;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Ji || Math.abs(this._y1 - d) > Ji) && this._append`L${c},${d}`, i && (g < 0 && (g = g % Bu + Bu), g > w3 ? this._append`A${i},${i},0,1,${h},${t - a},${n - _}A${i},${i},0,1,${h},${this._x1 = c},${this._y1 = d}` : g > Ji && this._append`A${i},${i},0,${+(g >= Wu)},${h},${this._x1 = t + i * Math.cos(f)},${this._y1 = n + i * Math.sin(f)}`);
  }
  rect(t, n, i, l) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${i = +i}v${+l}h${-i}Z`;
  }
  toString() {
    return this._;
  }
};
function k3(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Xo(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Or(e) {
  return e = Xo(Math.abs(e)), e ? e[1] : NaN;
}
function x3(e, t) {
  return function(n, i) {
    for (var l = n.length, f = [], u = 0, a = e[0], _ = 0; l > 0 && a > 0 && (_ + a + 1 > i && (a = Math.max(1, i - _)), f.push(n.substring(l -= a, l + a)), !((_ += a + 1) > i)); )
      a = e[u = (u + 1) % e.length];
    return f.reverse().join(t);
  };
}
function M3(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var T3 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Sl(e) {
  if (!(t = T3.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new la({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Sl.prototype = la.prototype;
function la(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
la.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function S3(e) {
  e:
    for (var t = e.length, n = 1, i = -1, l; n < t; ++n)
      switch (e[n]) {
        case ".":
          i = l = n;
          break;
        case "0":
          i === 0 && (i = n), l = n;
          break;
        default:
          if (!+e[n])
            break e;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? e.slice(0, i) + e.slice(l + 1) : e;
}
var Cc;
function z3(e, t) {
  var n = Xo(e, t);
  if (!n)
    return e + "";
  var i = n[0], l = n[1], f = l - (Cc = Math.max(-8, Math.min(8, Math.floor(l / 3))) * 3) + 1, u = i.length;
  return f === u ? i : f > u ? i + new Array(f - u + 1).join("0") : f > 0 ? i.slice(0, f) + "." + i.slice(f) : "0." + new Array(1 - f).join("0") + Xo(e, Math.max(0, t + f - 1))[0];
}
function j_(e, t) {
  var n = Xo(e, t);
  if (!n)
    return e + "";
  var i = n[0], l = n[1];
  return l < 0 ? "0." + new Array(-l).join("0") + i : i.length > l + 1 ? i.slice(0, l + 1) + "." + i.slice(l + 1) : i + new Array(l - i.length + 2).join("0");
}
const K_ = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: k3,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => j_(e * 100, t),
  r: j_,
  s: z3,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function J_(e) {
  return e;
}
var Q_ = Array.prototype.map, V_ = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function A3(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? J_ : x3(Q_.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", l = e.decimal === void 0 ? "." : e.decimal + "", f = e.numerals === void 0 ? J_ : M3(Q_.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", _ = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = Sl(h);
    var g = h.fill, w = h.align, p = h.sign, S = h.symbol, x = h.zero, M = h.width, z = h.comma, C = h.precision, P = h.trim, O = h.type;
    O === "n" ? (z = !0, O = "g") : K_[O] || (C === void 0 && (C = 12), P = !0, O = "g"), (x || g === "0" && w === "=") && (x = !0, g = "0", w = "=");
    var E = S === "$" ? n : S === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", B = S === "$" ? i : /[%p]/.test(O) ? u : "", D = K_[O], te = /[defgprs%]/.test(O);
    C = C === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function W(K) {
      var se = E, ce = B, fe, re, J;
      if (O === "c")
        ce = D(K) + ce, K = "";
      else {
        K = +K;
        var H = K < 0 || 1 / K < 0;
        if (K = isNaN(K) ? _ : D(Math.abs(K), C), P && (K = S3(K)), H && +K == 0 && p !== "+" && (H = !1), se = (H ? p === "(" ? p : a : p === "-" || p === "(" ? "" : p) + se, ce = (O === "s" ? V_[8 + Cc / 3] : "") + ce + (H && p === "(" ? ")" : ""), te) {
          for (fe = -1, re = K.length; ++fe < re; )
            if (J = K.charCodeAt(fe), 48 > J || J > 57) {
              ce = (J === 46 ? l + K.slice(fe + 1) : K.slice(fe)) + ce, K = K.slice(0, fe);
              break;
            }
        }
      }
      z && !x && (K = t(K, 1 / 0));
      var A = se.length + K.length + ce.length, R = A < M ? new Array(M - A + 1).join(g) : "";
      switch (z && x && (K = t(R + K, R.length ? M - ce.length : 1 / 0), R = ""), w) {
        case "<":
          K = se + K + ce + R;
          break;
        case "=":
          K = se + R + K + ce;
          break;
        case "^":
          K = R.slice(0, A = R.length >> 1) + se + K + ce + R.slice(A);
          break;
        default:
          K = R + se + K + ce;
          break;
      }
      return f(K);
    }
    return W.toString = function() {
      return h + "";
    }, W;
  }
  function d(h, g) {
    var w = c((h = Sl(h), h.type = "f", h)), p = Math.max(-8, Math.min(8, Math.floor(Or(g) / 3))) * 3, S = Math.pow(10, -p), x = V_[8 + p / 3];
    return function(M) {
      return w(S * M) + x;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var Io, hn, Lc;
C3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function C3(e) {
  return Io = A3(e), hn = Io.format, Lc = Io.formatPrefix, Io;
}
function L3(e) {
  return Math.max(0, -Or(Math.abs(e)));
}
function E3(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Or(t) / 3))) * 3 - Or(Math.abs(e)));
}
function R3(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Or(t) - Or(e)) + 1;
}
function Ol(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
const $_ = Symbol("implicit");
function Ec() {
  var e = new U_(), t = [], n = [], i = $_;
  function l(f) {
    let u = e.get(f);
    if (u === void 0) {
      if (i !== $_)
        return i;
      e.set(f, u = t.push(f) - 1);
    }
    return n[u % n.length];
  }
  return l.domain = function(f) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new U_();
    for (const u of f)
      e.has(u) || e.set(u, t.push(u) - 1);
    return l;
  }, l.range = function(f) {
    return arguments.length ? (n = Array.from(f), l) : n.slice();
  }, l.unknown = function(f) {
    return arguments.length ? (i = f, l) : i;
  }, l.copy = function() {
    return Ec(t, n).unknown(i);
  }, Ol.apply(l, arguments), l;
}
function yl() {
  var e = Ec().unknown(void 0), t = e.domain, n = e.range, i = 0, l = 1, f, u, a = !1, _ = 0, c = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var g = t().length, w = l < i, p = w ? l : i, S = w ? i : l;
    f = (S - p) / Math.max(1, g - _ + c * 2), a && (f = Math.floor(f)), p += (S - p - f * (g - _)) * d, u = f * (1 - _), a && (p = Math.round(p), u = Math.round(u));
    var x = j6(g).map(function(M) {
      return p + f * M;
    });
    return n(w ? x.reverse() : x);
  }
  return e.domain = function(g) {
    return arguments.length ? (t(g), h()) : t();
  }, e.range = function(g) {
    return arguments.length ? ([i, l] = g, i = +i, l = +l, h()) : [i, l];
  }, e.rangeRound = function(g) {
    return [i, l] = g, i = +i, l = +l, a = !0, h();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return f;
  }, e.round = function(g) {
    return arguments.length ? (a = !!g, h()) : a;
  }, e.padding = function(g) {
    return arguments.length ? (_ = Math.min(1, c = +g), h()) : _;
  }, e.paddingInner = function(g) {
    return arguments.length ? (_ = Math.min(1, g), h()) : _;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (c = +g, h()) : c;
  }, e.align = function(g) {
    return arguments.length ? (d = Math.max(0, Math.min(1, g)), h()) : d;
  }, e.copy = function() {
    return yl(t(), [i, l]).round(a).paddingInner(_).paddingOuter(c).align(d);
  }, Ol.apply(h(), arguments);
}
function Rc(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Rc(t());
  }, e;
}
function I3() {
  return Rc(yl.apply(null, arguments).paddingInner(1));
}
function O3(e) {
  return function() {
    return e;
  };
}
function D3(e) {
  return +e;
}
var eh = [0, 1];
function zr(e) {
  return e;
}
function Hu(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : O3(isNaN(t) ? NaN : 0.5);
}
function N3(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(i) {
    return Math.max(e, Math.min(t, i));
  };
}
function U3(e, t, n) {
  var i = e[0], l = e[1], f = t[0], u = t[1];
  return l < i ? (i = Hu(l, i), f = n(u, f)) : (i = Hu(i, l), f = n(f, u)), function(a) {
    return f(i(a));
  };
}
function P3(e, t, n) {
  var i = Math.min(e.length, t.length) - 1, l = new Array(i), f = new Array(i), u = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++u < i; )
    l[u] = Hu(e[u], e[u + 1]), f[u] = n(t[u], t[u + 1]);
  return function(a) {
    var _ = B6(e, a, 1, i) - 1;
    return f[_](l[_](a));
  };
}
function oa(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ic() {
  var e = eh, t = eh, n = ra, i, l, f, u = zr, a, _, c;
  function d() {
    var g = Math.min(e.length, t.length);
    return u !== zr && (u = N3(e[0], e[g - 1])), a = g > 2 ? P3 : U3, _ = c = null, h;
  }
  function h(g) {
    return g == null || isNaN(g = +g) ? f : (_ || (_ = a(e.map(i), t, n)))(i(u(g)));
  }
  return h.invert = function(g) {
    return u(l((c || (c = a(t, e.map(i), Yo)))(g)));
  }, h.domain = function(g) {
    return arguments.length ? (e = Array.from(g, D3), d()) : e.slice();
  }, h.range = function(g) {
    return arguments.length ? (t = Array.from(g), d()) : t.slice();
  }, h.rangeRound = function(g) {
    return t = Array.from(g), n = b3, d();
  }, h.clamp = function(g) {
    return arguments.length ? (u = g ? !0 : zr, d()) : u !== zr;
  }, h.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, h.unknown = function(g) {
    return arguments.length ? (f = g, h) : f;
  }, function(g, w) {
    return i = g, l = w, d();
  };
}
function Oc() {
  return Ic()(zr, zr);
}
function F3(e, t, n, i) {
  var l = Nu(e, t, n), f;
  switch (i = Sl(i ?? ",f"), i.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(t));
      return i.precision == null && !isNaN(f = E3(l, u)) && (i.precision = f), Lc(i, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(f = R3(l, Math.max(Math.abs(e), Math.abs(t)))) && (i.precision = f - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(f = L3(l)) && (i.precision = f - (i.type === "%") * 2);
      break;
    }
  }
  return hn(i);
}
function W3(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var i = t();
    return Ou(i[0], i[i.length - 1], n ?? 10);
  }, e.tickFormat = function(n, i) {
    var l = t();
    return F3(l[0], l[l.length - 1], n ?? 10, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = t(), l = 0, f = i.length - 1, u = i[l], a = i[f], _, c, d = 10;
    for (a < u && (c = u, u = a, a = c, c = l, l = f, f = c); d-- > 0; ) {
      if (c = Du(u, a, n), c === _)
        return i[l] = u, i[f] = a, t(i);
      if (c > 0)
        u = Math.floor(u / c) * c, a = Math.ceil(a / c) * c;
      else if (c < 0)
        u = Math.ceil(u * c) / c, a = Math.floor(a * c) / c;
      else
        break;
      _ = c;
    }
    return e;
  }, e;
}
function Dr() {
  var e = Oc();
  return e.copy = function() {
    return oa(e, Dr());
  }, Ol.apply(e, arguments), W3(e);
}
function Dc(e, t) {
  e = e.slice();
  var n = 0, i = e.length - 1, l = e[n], f = e[i], u;
  return f < l && (u = n, n = i, i = u, u = l, l = f, f = u), e[n] = t.floor(l), e[i] = t.ceil(f), e;
}
function th(e) {
  return Math.log(e);
}
function nh(e) {
  return Math.exp(e);
}
function B3(e) {
  return -Math.log(-e);
}
function H3(e) {
  return -Math.exp(-e);
}
function Y3(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function X3(e) {
  return e === 10 ? Y3 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function q3(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function ih(e) {
  return (t, n) => -e(-t, n);
}
function G3(e) {
  const t = e(th, nh), n = t.domain;
  let i = 10, l, f;
  function u() {
    return l = q3(i), f = X3(i), n()[0] < 0 ? (l = ih(l), f = ih(f), e(B3, H3)) : e(th, nh), t;
  }
  return t.base = function(a) {
    return arguments.length ? (i = +a, u()) : i;
  }, t.domain = function(a) {
    return arguments.length ? (n(a), u()) : n();
  }, t.ticks = (a) => {
    const _ = n();
    let c = _[0], d = _[_.length - 1];
    const h = d < c;
    h && ([c, d] = [d, c]);
    let g = l(c), w = l(d), p, S;
    const x = a == null ? 10 : +a;
    let M = [];
    if (!(i % 1) && w - g < x) {
      if (g = Math.floor(g), w = Math.ceil(w), c > 0) {
        for (; g <= w; ++g)
          for (p = 1; p < i; ++p)
            if (S = g < 0 ? p / f(-g) : p * f(g), !(S < c)) {
              if (S > d)
                break;
              M.push(S);
            }
      } else
        for (; g <= w; ++g)
          for (p = i - 1; p >= 1; --p)
            if (S = g > 0 ? p / f(-g) : p * f(g), !(S < c)) {
              if (S > d)
                break;
              M.push(S);
            }
      M.length * 2 < x && (M = Ou(c, d, x));
    } else
      M = Ou(g, w, Math.min(w - g, x)).map(f);
    return h ? M.reverse() : M;
  }, t.tickFormat = (a, _) => {
    if (a == null && (a = 10), _ == null && (_ = i === 10 ? "s" : ","), typeof _ != "function" && (!(i % 1) && (_ = Sl(_)).precision == null && (_.trim = !0), _ = hn(_)), a === 1 / 0)
      return _;
    const c = Math.max(1, i * a / t.ticks().length);
    return (d) => {
      let h = d / f(Math.round(l(d)));
      return h * i < i - 0.5 && (h *= i), h <= c ? _(d) : "";
    };
  }, t.nice = () => n(Dc(n(), {
    floor: (a) => f(Math.floor(l(a))),
    ceil: (a) => f(Math.ceil(l(a)))
  })), t;
}
function Nc() {
  const e = G3(Ic()).domain([1, 10]);
  return e.copy = () => oa(e, Nc()).base(e.base()), Ol.apply(e, arguments), e;
}
const ku = /* @__PURE__ */ new Date(), xu = /* @__PURE__ */ new Date();
function Yt(e, t, n, i) {
  function l(f) {
    return e(f = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+f)), f;
  }
  return l.floor = (f) => (e(f = /* @__PURE__ */ new Date(+f)), f), l.ceil = (f) => (e(f = new Date(f - 1)), t(f, 1), e(f), f), l.round = (f) => {
    const u = l(f), a = l.ceil(f);
    return f - u < a - f ? u : a;
  }, l.offset = (f, u) => (t(f = /* @__PURE__ */ new Date(+f), u == null ? 1 : Math.floor(u)), f), l.range = (f, u, a) => {
    const _ = [];
    if (f = l.ceil(f), a = a == null ? 1 : Math.floor(a), !(f < u) || !(a > 0))
      return _;
    let c;
    do
      _.push(c = /* @__PURE__ */ new Date(+f)), t(f, a), e(f);
    while (c < f && f < u);
    return _;
  }, l.filter = (f) => Yt((u) => {
    if (u >= u)
      for (; e(u), !f(u); )
        u.setTime(u - 1);
  }, (u, a) => {
    if (u >= u)
      if (a < 0)
        for (; ++a <= 0; )
          for (; t(u, -1), !f(u); )
            ;
      else
        for (; --a >= 0; )
          for (; t(u, 1), !f(u); )
            ;
  }), n && (l.count = (f, u) => (ku.setTime(+f), xu.setTime(+u), e(ku), e(xu), Math.floor(n(ku, xu))), l.every = (f) => (f = Math.floor(f), !isFinite(f) || !(f > 0) ? null : f > 1 ? l.filter(i ? (u) => i(u) % f === 0 : (u) => l.count(0, u) % f === 0) : l)), l;
}
const qo = Yt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
qo.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Yt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : qo);
qo.range;
const xi = 1e3, jn = xi * 60, Mi = jn * 60, Ti = Mi * 24, fa = Ti * 7, rh = Ti * 30, Mu = Ti * 365, Ar = Yt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * xi);
}, (e, t) => (t - e) / xi, (e) => e.getUTCSeconds());
Ar.range;
const ua = Yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * xi);
}, (e, t) => {
  e.setTime(+e + t * jn);
}, (e, t) => (t - e) / jn, (e) => e.getMinutes());
ua.range;
const Z3 = Yt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * jn);
}, (e, t) => (t - e) / jn, (e) => e.getUTCMinutes());
Z3.range;
const aa = Yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * xi - e.getMinutes() * jn);
}, (e, t) => {
  e.setTime(+e + t * Mi);
}, (e, t) => (t - e) / Mi, (e) => e.getHours());
aa.range;
const j3 = Yt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Mi);
}, (e, t) => (t - e) / Mi, (e) => e.getUTCHours());
j3.range;
const Dl = Yt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * jn) / Ti,
  (e) => e.getDate() - 1
);
Dl.range;
const sa = Yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ti, (e) => e.getUTCDate() - 1);
sa.range;
const K3 = Yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ti, (e) => Math.floor(e / Ti));
K3.range;
function rr(e) {
  return Yt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * jn) / fa);
}
const tf = rr(0), Go = rr(1), J3 = rr(2), Q3 = rr(3), Nr = rr(4), V3 = rr(5), $3 = rr(6);
tf.range;
Go.range;
J3.range;
Q3.range;
Nr.range;
V3.range;
$3.range;
function lr(e) {
  return Yt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / fa);
}
const Uc = lr(0), Zo = lr(1), e5 = lr(2), t5 = lr(3), Ur = lr(4), n5 = lr(5), i5 = lr(6);
Uc.range;
Zo.range;
e5.range;
t5.range;
Ur.range;
n5.range;
i5.range;
const _a = Yt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
_a.range;
const r5 = Yt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
r5.range;
const Si = Yt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Si.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Yt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Si.range;
const nr = Yt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
nr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Yt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
nr.range;
function l5(e, t, n, i, l, f) {
  const u = [
    [Ar, 1, xi],
    [Ar, 5, 5 * xi],
    [Ar, 15, 15 * xi],
    [Ar, 30, 30 * xi],
    [f, 1, jn],
    [f, 5, 5 * jn],
    [f, 15, 15 * jn],
    [f, 30, 30 * jn],
    [l, 1, Mi],
    [l, 3, 3 * Mi],
    [l, 6, 6 * Mi],
    [l, 12, 12 * Mi],
    [i, 1, Ti],
    [i, 2, 2 * Ti],
    [n, 1, fa],
    [t, 1, rh],
    [t, 3, 3 * rh],
    [e, 1, Mu]
  ];
  function a(c, d, h) {
    const g = d < c;
    g && ([c, d] = [d, c]);
    const w = h && typeof h.range == "function" ? h : _(c, d, h), p = w ? w.range(c, +d + 1) : [];
    return g ? p.reverse() : p;
  }
  function _(c, d, h) {
    const g = Math.abs(d - c) / h, w = Rl(([, , x]) => x).right(u, g);
    if (w === u.length)
      return e.every(Nu(c / Mu, d / Mu, h));
    if (w === 0)
      return qo.every(Math.max(Nu(c, d, h), 1));
    const [p, S] = u[g / u[w - 1][2] < u[w][2] / g ? w - 1 : w];
    return p.every(S);
  }
  return [a, _];
}
const [o5, f5] = l5(Si, _a, tf, Dl, aa, ua);
function Tu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Su(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function _l(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function u5(e) {
  var t = e.dateTime, n = e.date, i = e.time, l = e.periods, f = e.days, u = e.shortDays, a = e.months, _ = e.shortMonths, c = hl(l), d = cl(l), h = hl(f), g = cl(f), w = hl(u), p = cl(u), S = hl(a), x = cl(a), M = hl(_), z = cl(_), C = {
    a: H,
    A,
    b: R,
    B: de,
    c: null,
    d: sh,
    e: sh,
    f: E5,
    g: B5,
    G: Y5,
    H: A5,
    I: C5,
    j: L5,
    L: Pc,
    m: R5,
    M: I5,
    p: he,
    q: pt,
    Q: ch,
    s: gh,
    S: O5,
    u: D5,
    U: N5,
    V: U5,
    w: P5,
    W: F5,
    x: null,
    X: null,
    y: W5,
    Y: H5,
    Z: X5,
    "%": hh
  }, P = {
    a: Kt,
    A: Je,
    b: Ue,
    B: $e,
    c: null,
    d: _h,
    e: _h,
    f: j5,
    g: rw,
    G: ow,
    H: q5,
    I: G5,
    j: Z5,
    L: Wc,
    m: K5,
    M: J5,
    p: at,
    q: Xe,
    Q: ch,
    s: gh,
    S: Q5,
    u: V5,
    U: $5,
    V: ew,
    w: tw,
    W: nw,
    x: null,
    X: null,
    y: iw,
    Y: lw,
    Z: fw,
    "%": hh
  }, O = {
    a: W,
    A: K,
    b: se,
    B: ce,
    c: fe,
    d: uh,
    e: uh,
    f: M5,
    g: fh,
    G: oh,
    H: ah,
    I: ah,
    j: p5,
    L: x5,
    m: w5,
    M: v5,
    p: te,
    q: b5,
    Q: S5,
    s: z5,
    S: k5,
    u: c5,
    U: g5,
    V: d5,
    w: h5,
    W: m5,
    x: re,
    X: J,
    y: fh,
    Y: oh,
    Z: y5,
    "%": T5
  };
  C.x = E(n, C), C.X = E(i, C), C.c = E(t, C), P.x = E(n, P), P.X = E(i, P), P.c = E(t, P);
  function E(ae, me) {
    return function(be) {
      var Q = [], Ce = -1, ye = 0, He = ae.length, Qe, et, qe;
      for (be instanceof Date || (be = /* @__PURE__ */ new Date(+be)); ++Ce < He; )
        ae.charCodeAt(Ce) === 37 && (Q.push(ae.slice(ye, Ce)), (et = lh[Qe = ae.charAt(++Ce)]) != null ? Qe = ae.charAt(++Ce) : et = Qe === "e" ? " " : "0", (qe = me[Qe]) && (Qe = qe(be, et)), Q.push(Qe), ye = Ce + 1);
      return Q.push(ae.slice(ye, Ce)), Q.join("");
    };
  }
  function B(ae, me) {
    return function(be) {
      var Q = _l(1900, void 0, 1), Ce = D(Q, ae, be += "", 0), ye, He;
      if (Ce != be.length)
        return null;
      if ("Q" in Q)
        return new Date(Q.Q);
      if ("s" in Q)
        return new Date(Q.s * 1e3 + ("L" in Q ? Q.L : 0));
      if (me && !("Z" in Q) && (Q.Z = 0), "p" in Q && (Q.H = Q.H % 12 + Q.p * 12), Q.m === void 0 && (Q.m = "q" in Q ? Q.q : 0), "V" in Q) {
        if (Q.V < 1 || Q.V > 53)
          return null;
        "w" in Q || (Q.w = 1), "Z" in Q ? (ye = Su(_l(Q.y, 0, 1)), He = ye.getUTCDay(), ye = He > 4 || He === 0 ? Zo.ceil(ye) : Zo(ye), ye = sa.offset(ye, (Q.V - 1) * 7), Q.y = ye.getUTCFullYear(), Q.m = ye.getUTCMonth(), Q.d = ye.getUTCDate() + (Q.w + 6) % 7) : (ye = Tu(_l(Q.y, 0, 1)), He = ye.getDay(), ye = He > 4 || He === 0 ? Go.ceil(ye) : Go(ye), ye = Dl.offset(ye, (Q.V - 1) * 7), Q.y = ye.getFullYear(), Q.m = ye.getMonth(), Q.d = ye.getDate() + (Q.w + 6) % 7);
      } else
        ("W" in Q || "U" in Q) && ("w" in Q || (Q.w = "u" in Q ? Q.u % 7 : "W" in Q ? 1 : 0), He = "Z" in Q ? Su(_l(Q.y, 0, 1)).getUTCDay() : Tu(_l(Q.y, 0, 1)).getDay(), Q.m = 0, Q.d = "W" in Q ? (Q.w + 6) % 7 + Q.W * 7 - (He + 5) % 7 : Q.w + Q.U * 7 - (He + 6) % 7);
      return "Z" in Q ? (Q.H += Q.Z / 100 | 0, Q.M += Q.Z % 100, Su(Q)) : Tu(Q);
    };
  }
  function D(ae, me, be, Q) {
    for (var Ce = 0, ye = me.length, He = be.length, Qe, et; Ce < ye; ) {
      if (Q >= He)
        return -1;
      if (Qe = me.charCodeAt(Ce++), Qe === 37) {
        if (Qe = me.charAt(Ce++), et = O[Qe in lh ? me.charAt(Ce++) : Qe], !et || (Q = et(ae, be, Q)) < 0)
          return -1;
      } else if (Qe != be.charCodeAt(Q++))
        return -1;
    }
    return Q;
  }
  function te(ae, me, be) {
    var Q = c.exec(me.slice(be));
    return Q ? (ae.p = d.get(Q[0].toLowerCase()), be + Q[0].length) : -1;
  }
  function W(ae, me, be) {
    var Q = w.exec(me.slice(be));
    return Q ? (ae.w = p.get(Q[0].toLowerCase()), be + Q[0].length) : -1;
  }
  function K(ae, me, be) {
    var Q = h.exec(me.slice(be));
    return Q ? (ae.w = g.get(Q[0].toLowerCase()), be + Q[0].length) : -1;
  }
  function se(ae, me, be) {
    var Q = M.exec(me.slice(be));
    return Q ? (ae.m = z.get(Q[0].toLowerCase()), be + Q[0].length) : -1;
  }
  function ce(ae, me, be) {
    var Q = S.exec(me.slice(be));
    return Q ? (ae.m = x.get(Q[0].toLowerCase()), be + Q[0].length) : -1;
  }
  function fe(ae, me, be) {
    return D(ae, t, me, be);
  }
  function re(ae, me, be) {
    return D(ae, n, me, be);
  }
  function J(ae, me, be) {
    return D(ae, i, me, be);
  }
  function H(ae) {
    return u[ae.getDay()];
  }
  function A(ae) {
    return f[ae.getDay()];
  }
  function R(ae) {
    return _[ae.getMonth()];
  }
  function de(ae) {
    return a[ae.getMonth()];
  }
  function he(ae) {
    return l[+(ae.getHours() >= 12)];
  }
  function pt(ae) {
    return 1 + ~~(ae.getMonth() / 3);
  }
  function Kt(ae) {
    return u[ae.getUTCDay()];
  }
  function Je(ae) {
    return f[ae.getUTCDay()];
  }
  function Ue(ae) {
    return _[ae.getUTCMonth()];
  }
  function $e(ae) {
    return a[ae.getUTCMonth()];
  }
  function at(ae) {
    return l[+(ae.getUTCHours() >= 12)];
  }
  function Xe(ae) {
    return 1 + ~~(ae.getUTCMonth() / 3);
  }
  return {
    format: function(ae) {
      var me = E(ae += "", C);
      return me.toString = function() {
        return ae;
      }, me;
    },
    parse: function(ae) {
      var me = B(ae += "", !1);
      return me.toString = function() {
        return ae;
      }, me;
    },
    utcFormat: function(ae) {
      var me = E(ae += "", P);
      return me.toString = function() {
        return ae;
      }, me;
    },
    utcParse: function(ae) {
      var me = B(ae += "", !0);
      return me.toString = function() {
        return ae;
      }, me;
    }
  };
}
var lh = { "-": "", _: " ", 0: "0" }, jt = /^\s*\d+/, a5 = /^%/, s5 = /[\\^$*+?|[\]().{}]/g;
function Ve(e, t, n) {
  var i = e < 0 ? "-" : "", l = (i ? -e : e) + "", f = l.length;
  return i + (f < n ? new Array(n - f + 1).join(t) + l : l);
}
function _5(e) {
  return e.replace(s5, "\\$&");
}
function hl(e) {
  return new RegExp("^(?:" + e.map(_5).join("|") + ")", "i");
}
function cl(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function h5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 1));
  return i ? (e.w = +i[0], n + i[0].length) : -1;
}
function c5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 1));
  return i ? (e.u = +i[0], n + i[0].length) : -1;
}
function g5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.U = +i[0], n + i[0].length) : -1;
}
function d5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.V = +i[0], n + i[0].length) : -1;
}
function m5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.W = +i[0], n + i[0].length) : -1;
}
function oh(e, t, n) {
  var i = jt.exec(t.slice(n, n + 4));
  return i ? (e.y = +i[0], n + i[0].length) : -1;
}
function fh(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), n + i[0].length) : -1;
}
function y5(e, t, n) {
  var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return i ? (e.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), n + i[0].length) : -1;
}
function b5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 1));
  return i ? (e.q = i[0] * 3 - 3, n + i[0].length) : -1;
}
function w5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.m = i[0] - 1, n + i[0].length) : -1;
}
function uh(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.d = +i[0], n + i[0].length) : -1;
}
function p5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 3));
  return i ? (e.m = 0, e.d = +i[0], n + i[0].length) : -1;
}
function ah(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.H = +i[0], n + i[0].length) : -1;
}
function v5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.M = +i[0], n + i[0].length) : -1;
}
function k5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.S = +i[0], n + i[0].length) : -1;
}
function x5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 3));
  return i ? (e.L = +i[0], n + i[0].length) : -1;
}
function M5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 6));
  return i ? (e.L = Math.floor(i[0] / 1e3), n + i[0].length) : -1;
}
function T5(e, t, n) {
  var i = a5.exec(t.slice(n, n + 1));
  return i ? n + i[0].length : -1;
}
function S5(e, t, n) {
  var i = jt.exec(t.slice(n));
  return i ? (e.Q = +i[0], n + i[0].length) : -1;
}
function z5(e, t, n) {
  var i = jt.exec(t.slice(n));
  return i ? (e.s = +i[0], n + i[0].length) : -1;
}
function sh(e, t) {
  return Ve(e.getDate(), t, 2);
}
function A5(e, t) {
  return Ve(e.getHours(), t, 2);
}
function C5(e, t) {
  return Ve(e.getHours() % 12 || 12, t, 2);
}
function L5(e, t) {
  return Ve(1 + Dl.count(Si(e), e), t, 3);
}
function Pc(e, t) {
  return Ve(e.getMilliseconds(), t, 3);
}
function E5(e, t) {
  return Pc(e, t) + "000";
}
function R5(e, t) {
  return Ve(e.getMonth() + 1, t, 2);
}
function I5(e, t) {
  return Ve(e.getMinutes(), t, 2);
}
function O5(e, t) {
  return Ve(e.getSeconds(), t, 2);
}
function D5(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function N5(e, t) {
  return Ve(tf.count(Si(e) - 1, e), t, 2);
}
function Fc(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Nr(e) : Nr.ceil(e);
}
function U5(e, t) {
  return e = Fc(e), Ve(Nr.count(Si(e), e) + (Si(e).getDay() === 4), t, 2);
}
function P5(e) {
  return e.getDay();
}
function F5(e, t) {
  return Ve(Go.count(Si(e) - 1, e), t, 2);
}
function W5(e, t) {
  return Ve(e.getFullYear() % 100, t, 2);
}
function B5(e, t) {
  return e = Fc(e), Ve(e.getFullYear() % 100, t, 2);
}
function H5(e, t) {
  return Ve(e.getFullYear() % 1e4, t, 4);
}
function Y5(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Nr(e) : Nr.ceil(e), Ve(e.getFullYear() % 1e4, t, 4);
}
function X5(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ve(t / 60 | 0, "0", 2) + Ve(t % 60, "0", 2);
}
function _h(e, t) {
  return Ve(e.getUTCDate(), t, 2);
}
function q5(e, t) {
  return Ve(e.getUTCHours(), t, 2);
}
function G5(e, t) {
  return Ve(e.getUTCHours() % 12 || 12, t, 2);
}
function Z5(e, t) {
  return Ve(1 + sa.count(nr(e), e), t, 3);
}
function Wc(e, t) {
  return Ve(e.getUTCMilliseconds(), t, 3);
}
function j5(e, t) {
  return Wc(e, t) + "000";
}
function K5(e, t) {
  return Ve(e.getUTCMonth() + 1, t, 2);
}
function J5(e, t) {
  return Ve(e.getUTCMinutes(), t, 2);
}
function Q5(e, t) {
  return Ve(e.getUTCSeconds(), t, 2);
}
function V5(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function $5(e, t) {
  return Ve(Uc.count(nr(e) - 1, e), t, 2);
}
function Bc(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ur(e) : Ur.ceil(e);
}
function ew(e, t) {
  return e = Bc(e), Ve(Ur.count(nr(e), e) + (nr(e).getUTCDay() === 4), t, 2);
}
function tw(e) {
  return e.getUTCDay();
}
function nw(e, t) {
  return Ve(Zo.count(nr(e) - 1, e), t, 2);
}
function iw(e, t) {
  return Ve(e.getUTCFullYear() % 100, t, 2);
}
function rw(e, t) {
  return e = Bc(e), Ve(e.getUTCFullYear() % 100, t, 2);
}
function lw(e, t) {
  return Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function ow(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Ur(e) : Ur.ceil(e), Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function fw() {
  return "+0000";
}
function hh() {
  return "%";
}
function ch(e) {
  return +e;
}
function gh(e) {
  return Math.floor(+e / 1e3);
}
var Tr, ha, Pr;
uw({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function uw(e) {
  return Tr = u5(e), ha = Tr.format, Pr = Tr.parse, Tr.utcFormat, Tr.utcParse, Tr;
}
function aw(e) {
  return new Date(e);
}
function sw(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Hc(e, t, n, i, l, f, u, a, _, c) {
  var d = Oc(), h = d.invert, g = d.domain, w = c(".%L"), p = c(":%S"), S = c("%I:%M"), x = c("%I %p"), M = c("%a %d"), z = c("%b %d"), C = c("%B"), P = c("%Y");
  function O(E) {
    return (_(E) < E ? w : a(E) < E ? p : u(E) < E ? S : f(E) < E ? x : i(E) < E ? l(E) < E ? M : z : n(E) < E ? C : P)(E);
  }
  return d.invert = function(E) {
    return new Date(h(E));
  }, d.domain = function(E) {
    return arguments.length ? g(Array.from(E, sw)) : g().map(aw);
  }, d.ticks = function(E) {
    var B = g();
    return e(B[0], B[B.length - 1], E ?? 10);
  }, d.tickFormat = function(E, B) {
    return B == null ? O : c(B);
  }, d.nice = function(E) {
    var B = g();
    return (!E || typeof E.range != "function") && (E = t(B[0], B[B.length - 1], E ?? 10)), E ? g(Dc(B, E)) : d;
  }, d.copy = function() {
    return oa(d, Hc(e, t, n, i, l, f, u, a, _, c));
  }, d;
}
function _w() {
  return Ol.apply(Hc(o5, f5, Si, _a, tf, Dl, aa, ua, Ar, ha).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Gt(e) {
  return function() {
    return e;
  };
}
function Yc(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length)
      return t;
    if (n == null)
      t = null;
    else {
      const i = Math.floor(n);
      if (!(i >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      t = i;
    }
    return e;
  }, () => new v3(t);
}
function Xc(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function qc(e) {
  this._context = e;
}
qc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Gc(e) {
  return new qc(e);
}
function Zc(e) {
  return e[0];
}
function jc(e) {
  return e[1];
}
function Kc(e, t) {
  var n = Gt(!0), i = null, l = Gc, f = null, u = Yc(a);
  e = typeof e == "function" ? e : e === void 0 ? Zc : Gt(e), t = typeof t == "function" ? t : t === void 0 ? jc : Gt(t);
  function a(_) {
    var c, d = (_ = Xc(_)).length, h, g = !1, w;
    for (i == null && (f = l(w = u())), c = 0; c <= d; ++c)
      !(c < d && n(h = _[c], c, _)) === g && ((g = !g) ? f.lineStart() : f.lineEnd()), g && f.point(+e(h, c, _), +t(h, c, _));
    if (w)
      return f = null, w + "" || null;
  }
  return a.x = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Gt(+_), a) : e;
  }, a.y = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Gt(+_), a) : t;
  }, a.defined = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Gt(!!_), a) : n;
  }, a.curve = function(_) {
    return arguments.length ? (l = _, i != null && (f = l(i)), a) : l;
  }, a.context = function(_) {
    return arguments.length ? (_ == null ? i = f = null : f = l(i = _), a) : i;
  }, a;
}
function dh(e, t, n) {
  var i = null, l = Gt(!0), f = null, u = Gc, a = null, _ = Yc(c);
  e = typeof e == "function" ? e : e === void 0 ? Zc : Gt(+e), t = typeof t == "function" ? t : Gt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? jc : Gt(+n);
  function c(h) {
    var g, w, p, S = (h = Xc(h)).length, x, M = !1, z, C = new Array(S), P = new Array(S);
    for (f == null && (a = u(z = _())), g = 0; g <= S; ++g) {
      if (!(g < S && l(x = h[g], g, h)) === M)
        if (M = !M)
          w = g, a.areaStart(), a.lineStart();
        else {
          for (a.lineEnd(), a.lineStart(), p = g - 1; p >= w; --p)
            a.point(C[p], P[p]);
          a.lineEnd(), a.areaEnd();
        }
      M && (C[g] = +e(x, g, h), P[g] = +t(x, g, h), a.point(i ? +i(x, g, h) : C[g], n ? +n(x, g, h) : P[g]));
    }
    if (z)
      return a = null, z + "" || null;
  }
  function d() {
    return Kc().defined(l).curve(u).context(f);
  }
  return c.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Gt(+h), i = null, c) : e;
  }, c.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Gt(+h), c) : e;
  }, c.x1 = function(h) {
    return arguments.length ? (i = h == null ? null : typeof h == "function" ? h : Gt(+h), c) : i;
  }, c.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Gt(+h), n = null, c) : t;
  }, c.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Gt(+h), c) : t;
  }, c.y1 = function(h) {
    return arguments.length ? (n = h == null ? null : typeof h == "function" ? h : Gt(+h), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(t);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
  }, c.lineX1 = function() {
    return d().x(i).y(t);
  }, c.defined = function(h) {
    return arguments.length ? (l = typeof h == "function" ? h : Gt(!!h), c) : l;
  }, c.curve = function(h) {
    return arguments.length ? (u = h, f != null && (a = u(f)), c) : u;
  }, c.context = function(h) {
    return arguments.length ? (h == null ? f = a = null : a = u(f = h), c) : f;
  }, c;
}
function mh(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Jc(e) {
  this._context = e;
}
Jc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        mh(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        mh(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function hw(e) {
  return new Jc(e);
}
function dl(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
dl.prototype = {
  constructor: dl,
  scale: function(e) {
    return e === 1 ? this : new dl(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new dl(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
dl.prototype;
function yh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function cw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yh(Object(n), !0).forEach(function(i) {
      gw(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yh(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function bl(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bl = function(t) {
    return typeof t;
  } : bl = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bl(e);
}
function gw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function jo() {
  return jo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, jo.apply(this, arguments);
}
function dw(e, t) {
  if (e) {
    if (typeof e == "string")
      return bh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bh(e, t);
  }
}
function bh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++)
    i[n] = e[n];
  return i;
}
function Qc(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = dw(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var i = 0, l = function() {
      };
      return {
        s: l,
        n: function() {
          return i >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[i++]
          };
        },
        e: function(_) {
          throw _;
        },
        f: l
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var f = !0, u = !1, a;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var _ = n.next();
      return f = _.done, _;
    },
    e: function(_) {
      u = !0, a = _;
    },
    f: function() {
      try {
        !f && n.return != null && n.return();
      } finally {
        if (u)
          throw a;
      }
    }
  };
}
function mw(e, t) {
  var n = [], i = [];
  function l(f, u) {
    if (f.length === 1)
      n.push(f[0]), i.push(f[0]);
    else {
      for (var a = Array(f.length - 1), _ = 0; _ < a.length; _++)
        _ === 0 && n.push(f[0]), _ === a.length - 1 && i.push(f[_ + 1]), a[_] = [(1 - u) * f[_][0] + u * f[_ + 1][0], (1 - u) * f[_][1] + u * f[_ + 1][1]];
      l(a, u);
    }
  }
  return e.length && l(e, t), {
    left: n,
    right: i.reverse()
  };
}
function yw(e) {
  var t = {};
  return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], e.length === 4 ? t.type = "C" : e.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function bw(e, t) {
  t = t || 2;
  for (var n = [], i = e, l = 1 / t, f = 0; f < t - 1; f++) {
    var u = l / (1 - l * f), a = mw(i, u);
    n.push(a.left), i = a.right;
  }
  return n.push(i), n;
}
function ww(e, t, n) {
  var i = [[e.x, e.y]];
  return t.x1 != null && i.push([t.x1, t.y1]), t.x2 != null && i.push([t.x2, t.y2]), i.push([t.x, t.y]), bw(i, n).map(yw);
}
var pw = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, Ir = {
  M: ["x", "y"],
  L: ["x", "y"],
  H: ["x"],
  V: ["y"],
  C: ["x1", "y1", "x2", "y2", "x", "y"],
  S: ["x2", "y2", "x", "y"],
  Q: ["x1", "y1", "x", "y"],
  T: ["x", "y"],
  A: ["rx", "ry", "xAxisRotation", "largeArcFlag", "sweepFlag", "x", "y"],
  Z: []
};
Object.keys(Ir).forEach(function(e) {
  Ir[e.toLowerCase()] = Ir[e];
});
function Yu(e, t) {
  for (var n = Array(e), i = 0; i < e; i++)
    n[i] = t;
  return n;
}
function vw(e) {
  return "".concat(e.type).concat(Ir[e.type].map(function(t) {
    return e[t];
  }).join(","));
}
function kw(e, t) {
  var n = {
    x1: "x",
    y1: "y",
    x2: "x",
    y2: "y"
  }, i = ["xAxisRotation", "largeArcFlag", "sweepFlag"];
  if (e.type !== t.type && t.type.toUpperCase() !== "M") {
    var l = {};
    Object.keys(t).forEach(function(f) {
      var u = t[f], a = e[f];
      a === void 0 && (i.includes(f) ? a = u : (a === void 0 && n[f] && (a = e[n[f]]), a === void 0 && (a = 0))), l[f] = a;
    }), l.type = t.type, e = l;
  }
  return e;
}
function xw(e, t, n) {
  var i = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C")
    i = i.concat(ww(e, t, n));
  else {
    var l = jo({}, e);
    l.type === "M" && (l.type = "L"), i = i.concat(Yu(n - 1).map(function() {
      return l;
    })), i.push(t);
  }
  return i;
}
function wh(e, t, n) {
  var i = e.length - 1, l = t.length - 1, f = i / l, u = Yu(l).reduce(function(_, c, d) {
    var h = Math.floor(f * d);
    if (n && h < e.length - 1 && n(e[h], e[h + 1])) {
      var g = f * d % 1 < 0.5;
      _[h] && (g ? h > 0 ? h -= 1 : h < e.length - 1 && (h += 1) : h < e.length - 1 ? h += 1 : h > 0 && (h -= 1));
    }
    return _[h] = (_[h] || 0) + 1, _;
  }, []), a = u.reduce(function(_, c, d) {
    if (d === e.length - 1) {
      var h = Yu(c, jo({}, e[e.length - 1]));
      return h[0].type === "M" && h.forEach(function(g) {
        g.type = "L";
      }), _.concat(h);
    }
    return _.concat(xw(e[d], e[d + 1], c));
  }, []);
  return a.unshift(e[0]), a;
}
function ph(e) {
  for (var t = (e || "").match(pw) || [], n = [], i, l, f = 0; f < t.length; ++f)
    if (i = Ir[t[f]], i) {
      l = {
        type: t[f]
      };
      for (var u = 0; u < i.length; ++u)
        l[i[u]] = +t[f + u + 1];
      f += i.length, n.push(l);
    }
  return n;
}
function Mw(e, t, n) {
  var i = e == null ? [] : e.slice(), l = t == null ? [] : t.slice(), f = bl(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, u = f.excludeSegment, a = f.snapEndsToInput;
  if (!i.length && !l.length)
    return function() {
      return [];
    };
  var _ = (i.length === 0 || i[i.length - 1].type === "Z") && (l.length === 0 || l[l.length - 1].type === "Z");
  i.length > 0 && i[i.length - 1].type === "Z" && i.pop(), l.length > 0 && l[l.length - 1].type === "Z" && l.pop(), i.length ? l.length || l.push(i[0]) : i.push(l[0]);
  var c = Math.abs(l.length - i.length);
  c !== 0 && (l.length > i.length ? i = wh(i, l, u) : l.length < i.length && (l = wh(l, i, u))), i = i.map(function(h, g) {
    return kw(h, l[g]);
  });
  var d = i.map(function(h) {
    return cw({}, h);
  });
  return _ && (d.push({
    type: "Z"
  }), i.push({
    type: "Z"
  })), function(g) {
    if (g === 1 && a)
      return t ?? [];
    if (g === 0)
      return i;
    for (var w = 0; w < d.length; ++w) {
      var p = i[w], S = l[w], x = d[w], M = Qc(Ir[x.type]), z;
      try {
        for (M.s(); !(z = M.n()).done; ) {
          var C = z.value;
          x[C] = (1 - g) * p[C] + g * S[C], (C === "largeArcFlag" || C === "sweepFlag") && (x[C] = Math.round(x[C]));
        }
      } catch (P) {
        M.e(P);
      } finally {
        M.f();
      }
    }
    return d;
  };
}
function Tw(e, t, n) {
  var i = ph(e), l = ph(t), f = bl(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, u = f.excludeSegment, a = f.snapEndsToInput;
  if (!i.length && !l.length)
    return function() {
      return "";
    };
  var _ = Mw(i, l, {
    excludeSegment: u,
    snapEndsToInput: a
  });
  return function(d) {
    if (d === 1 && a)
      return t ?? "";
    var h = _(d), g = "", w = Qc(h), p;
    try {
      for (w.s(); !(p = w.n()).done; ) {
        var S = p.value;
        g += vw(S);
      }
    } catch (x) {
      w.e(x);
    } finally {
      w.f();
    }
    return g;
  };
}
var ki = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ko = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ko.exports;
(function(e, t) {
  (function() {
    var n, i = "4.17.21", l = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", a = "Invalid `variable` option passed into `_.template`", _ = "__lodash_hash_undefined__", c = 500, d = "__lodash_placeholder__", h = 1, g = 2, w = 4, p = 1, S = 2, x = 1, M = 2, z = 4, C = 8, P = 16, O = 32, E = 64, B = 128, D = 256, te = 512, W = 30, K = "...", se = 800, ce = 16, fe = 1, re = 2, J = 3, H = 1 / 0, A = 9007199254740991, R = 17976931348623157e292, de = 0 / 0, he = 4294967295, pt = he - 1, Kt = he >>> 1, Je = [
      ["ary", B],
      ["bind", x],
      ["bindKey", M],
      ["curry", C],
      ["curryRight", P],
      ["flip", te],
      ["partial", O],
      ["partialRight", E],
      ["rearg", D]
    ], Ue = "[object Arguments]", $e = "[object Array]", at = "[object AsyncFunction]", Xe = "[object Boolean]", ae = "[object Date]", me = "[object DOMException]", be = "[object Error]", Q = "[object Function]", Ce = "[object GeneratorFunction]", ye = "[object Map]", He = "[object Number]", Qe = "[object Null]", et = "[object Object]", qe = "[object Promise]", Y = "[object Proxy]", le = "[object RegExp]", Me = "[object Set]", xt = "[object String]", Mt = "[object Symbol]", Xt = "[object Undefined]", gt = "[object WeakMap]", Tt = "[object WeakSet]", $t = "[object ArrayBuffer]", yt = "[object DataView]", St = "[object Float32Array]", en = "[object Float64Array]", Nn = "[object Int8Array]", tn = "[object Int16Array]", ln = "[object Int32Array]", Jn = "[object Uint8Array]", cn = "[object Uint8ClampedArray]", Mn = "[object Uint16Array]", on = "[object Uint32Array]", Tn = /\b__p \+= '';/g, zt = /\b(__p \+=) '' \+/g, Un = /(__e\(.*?\)|\b__t\)) \+\n'';/g, gn = /&(?:amp|lt|gt|quot|#39);/g, At = /[&<>"']/g, Sn = RegExp(gn.source), zn = RegExp(At.source), Qn = /<%-([\s\S]+?)%>/g, Vn = /<%([\s\S]+?)%>/g, An = /<%=([\s\S]+?)%>/g, V = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tt = /^\w*$/, Ct = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fn = /[\\^$.*+?()[\]{}|]/g, un = RegExp(fn.source), Pn = /^\s+/, ri = /\s/, si = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Yr = /\{\n\/\* \[wrapped with (.+)\] \*/, or = /,? & /, fr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Xr = /[()=,{}\[\]\/\s]/, qr = /\\(\\)?/g, Cn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, dn = /\w*$/, X = /^[-+]0x[0-9a-f]+$/i, Lt = /^0b[01]+$/i, vt = /^\[object .+?Constructor\]$/, zi = /^0o[0-7]+$/i, Ai = /^(?:0|[1-9]\d*)$/, ur = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Fn = /($^)/, _i = /['\n\r\u2028\u2029\\]/g, hi = "\\ud800-\\udfff", Gr = "\\u0300-\\u036f", Zr = "\\ufe20-\\ufe2f", rf = "\\u20d0-\\u20ff", Nl = Gr + Zr + rf, Ul = "\\u2700-\\u27bf", Pl = "a-z\\xdf-\\xf6\\xf8-\\xff", lf = "\\xac\\xb1\\xd7\\xf7", of = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ff = "\\u2000-\\u206f", uf = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fl = "A-Z\\xc0-\\xd6\\xd8-\\xde", U = "\\ufe0e\\ufe0f", Ft = lf + of + ff + uf, Et = "['’]", af = "[" + hi + "]", Wl = "[" + Ft + "]", Wi = "[" + Nl + "]", Bl = "\\d+", sf = "[" + Ul + "]", Hl = "[" + Pl + "]", Yl = "[^" + hi + Ft + Bl + Ul + Pl + Fl + "]", jr = "\\ud83c[\\udffb-\\udfff]", h0 = "(?:" + Wi + "|" + jr + ")", ba = "[^" + hi + "]", _f = "(?:\\ud83c[\\udde6-\\uddff]){2}", hf = "[\\ud800-\\udbff][\\udc00-\\udfff]", ar = "[" + Fl + "]", wa = "\\u200d", pa = "(?:" + Hl + "|" + Yl + ")", c0 = "(?:" + ar + "|" + Yl + ")", va = "(?:" + Et + "(?:d|ll|m|re|s|t|ve))?", ka = "(?:" + Et + "(?:D|LL|M|RE|S|T|VE))?", xa = h0 + "?", Ma = "[" + U + "]?", g0 = "(?:" + wa + "(?:" + [ba, _f, hf].join("|") + ")" + Ma + xa + ")*", d0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", m0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ta = Ma + xa + g0, y0 = "(?:" + [sf, _f, hf].join("|") + ")" + Ta, b0 = "(?:" + [ba + Wi + "?", Wi, _f, hf, af].join("|") + ")", w0 = RegExp(Et, "g"), p0 = RegExp(Wi, "g"), cf = RegExp(jr + "(?=" + jr + ")|" + b0 + Ta, "g"), v0 = RegExp([
      ar + "?" + Hl + "+" + va + "(?=" + [Wl, ar, "$"].join("|") + ")",
      c0 + "+" + ka + "(?=" + [Wl, ar + pa, "$"].join("|") + ")",
      ar + "?" + pa + "+" + va,
      ar + "+" + ka,
      m0,
      d0,
      Bl,
      y0
    ].join("|"), "g"), k0 = RegExp("[" + wa + hi + Nl + U + "]"), x0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, M0 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], T0 = -1, mt = {};
    mt[St] = mt[en] = mt[Nn] = mt[tn] = mt[ln] = mt[Jn] = mt[cn] = mt[Mn] = mt[on] = !0, mt[Ue] = mt[$e] = mt[$t] = mt[Xe] = mt[yt] = mt[ae] = mt[be] = mt[Q] = mt[ye] = mt[He] = mt[et] = mt[le] = mt[Me] = mt[xt] = mt[gt] = !1;
    var dt = {};
    dt[Ue] = dt[$e] = dt[$t] = dt[yt] = dt[Xe] = dt[ae] = dt[St] = dt[en] = dt[Nn] = dt[tn] = dt[ln] = dt[ye] = dt[He] = dt[et] = dt[le] = dt[Me] = dt[xt] = dt[Mt] = dt[Jn] = dt[cn] = dt[Mn] = dt[on] = !0, dt[be] = dt[Q] = dt[gt] = !1;
    var S0 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, z0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, A0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, C0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, L0 = parseFloat, E0 = parseInt, Sa = typeof ki == "object" && ki && ki.Object === Object && ki, R0 = typeof self == "object" && self && self.Object === Object && self, Jt = Sa || R0 || Function("return this")(), gf = t && !t.nodeType && t, Bi = gf && !0 && e && !e.nodeType && e, za = Bi && Bi.exports === gf, df = za && Sa.process, Wn = function() {
      try {
        var N = Bi && Bi.require && Bi.require("util").types;
        return N || df && df.binding && df.binding("util");
      } catch {
      }
    }(), Aa = Wn && Wn.isArrayBuffer, Ca = Wn && Wn.isDate, La = Wn && Wn.isMap, Ea = Wn && Wn.isRegExp, Ra = Wn && Wn.isSet, Ia = Wn && Wn.isTypedArray;
    function Ln(N, $, G) {
      switch (G.length) {
        case 0:
          return N.call($);
        case 1:
          return N.call($, G[0]);
        case 2:
          return N.call($, G[0], G[1]);
        case 3:
          return N.call($, G[0], G[1], G[2]);
      }
      return N.apply($, G);
    }
    function I0(N, $, G, we) {
      for (var Ee = -1, nt = N == null ? 0 : N.length; ++Ee < nt; ) {
        var Wt = N[Ee];
        $(we, Wt, G(Wt), N);
      }
      return we;
    }
    function Bn(N, $) {
      for (var G = -1, we = N == null ? 0 : N.length; ++G < we && $(N[G], G, N) !== !1; )
        ;
      return N;
    }
    function O0(N, $) {
      for (var G = N == null ? 0 : N.length; G-- && $(N[G], G, N) !== !1; )
        ;
      return N;
    }
    function Oa(N, $) {
      for (var G = -1, we = N == null ? 0 : N.length; ++G < we; )
        if (!$(N[G], G, N))
          return !1;
      return !0;
    }
    function Ci(N, $) {
      for (var G = -1, we = N == null ? 0 : N.length, Ee = 0, nt = []; ++G < we; ) {
        var Wt = N[G];
        $(Wt, G, N) && (nt[Ee++] = Wt);
      }
      return nt;
    }
    function Xl(N, $) {
      var G = N == null ? 0 : N.length;
      return !!G && sr(N, $, 0) > -1;
    }
    function mf(N, $, G) {
      for (var we = -1, Ee = N == null ? 0 : N.length; ++we < Ee; )
        if (G($, N[we]))
          return !0;
      return !1;
    }
    function bt(N, $) {
      for (var G = -1, we = N == null ? 0 : N.length, Ee = Array(we); ++G < we; )
        Ee[G] = $(N[G], G, N);
      return Ee;
    }
    function Li(N, $) {
      for (var G = -1, we = $.length, Ee = N.length; ++G < we; )
        N[Ee + G] = $[G];
      return N;
    }
    function yf(N, $, G, we) {
      var Ee = -1, nt = N == null ? 0 : N.length;
      for (we && nt && (G = N[++Ee]); ++Ee < nt; )
        G = $(G, N[Ee], Ee, N);
      return G;
    }
    function D0(N, $, G, we) {
      var Ee = N == null ? 0 : N.length;
      for (we && Ee && (G = N[--Ee]); Ee--; )
        G = $(G, N[Ee], Ee, N);
      return G;
    }
    function bf(N, $) {
      for (var G = -1, we = N == null ? 0 : N.length; ++G < we; )
        if ($(N[G], G, N))
          return !0;
      return !1;
    }
    var N0 = wf("length");
    function U0(N) {
      return N.split("");
    }
    function P0(N) {
      return N.match(fr) || [];
    }
    function Da(N, $, G) {
      var we;
      return G(N, function(Ee, nt, Wt) {
        if ($(Ee, nt, Wt))
          return we = nt, !1;
      }), we;
    }
    function ql(N, $, G, we) {
      for (var Ee = N.length, nt = G + (we ? 1 : -1); we ? nt-- : ++nt < Ee; )
        if ($(N[nt], nt, N))
          return nt;
      return -1;
    }
    function sr(N, $, G) {
      return $ === $ ? J0(N, $, G) : ql(N, Na, G);
    }
    function F0(N, $, G, we) {
      for (var Ee = G - 1, nt = N.length; ++Ee < nt; )
        if (we(N[Ee], $))
          return Ee;
      return -1;
    }
    function Na(N) {
      return N !== N;
    }
    function Ua(N, $) {
      var G = N == null ? 0 : N.length;
      return G ? vf(N, $) / G : de;
    }
    function wf(N) {
      return function($) {
        return $ == null ? n : $[N];
      };
    }
    function pf(N) {
      return function($) {
        return N == null ? n : N[$];
      };
    }
    function Pa(N, $, G, we, Ee) {
      return Ee(N, function(nt, Wt, st) {
        G = we ? (we = !1, nt) : $(G, nt, Wt, st);
      }), G;
    }
    function W0(N, $) {
      var G = N.length;
      for (N.sort($); G--; )
        N[G] = N[G].value;
      return N;
    }
    function vf(N, $) {
      for (var G, we = -1, Ee = N.length; ++we < Ee; ) {
        var nt = $(N[we]);
        nt !== n && (G = G === n ? nt : G + nt);
      }
      return G;
    }
    function kf(N, $) {
      for (var G = -1, we = Array(N); ++G < N; )
        we[G] = $(G);
      return we;
    }
    function B0(N, $) {
      return bt($, function(G) {
        return [G, N[G]];
      });
    }
    function Fa(N) {
      return N && N.slice(0, Ya(N) + 1).replace(Pn, "");
    }
    function En(N) {
      return function($) {
        return N($);
      };
    }
    function xf(N, $) {
      return bt($, function(G) {
        return N[G];
      });
    }
    function Kr(N, $) {
      return N.has($);
    }
    function Wa(N, $) {
      for (var G = -1, we = N.length; ++G < we && sr($, N[G], 0) > -1; )
        ;
      return G;
    }
    function Ba(N, $) {
      for (var G = N.length; G-- && sr($, N[G], 0) > -1; )
        ;
      return G;
    }
    function H0(N, $) {
      for (var G = N.length, we = 0; G--; )
        N[G] === $ && ++we;
      return we;
    }
    var Y0 = pf(S0), X0 = pf(z0);
    function q0(N) {
      return "\\" + C0[N];
    }
    function G0(N, $) {
      return N == null ? n : N[$];
    }
    function _r(N) {
      return k0.test(N);
    }
    function Z0(N) {
      return x0.test(N);
    }
    function j0(N) {
      for (var $, G = []; !($ = N.next()).done; )
        G.push($.value);
      return G;
    }
    function Mf(N) {
      var $ = -1, G = Array(N.size);
      return N.forEach(function(we, Ee) {
        G[++$] = [Ee, we];
      }), G;
    }
    function Ha(N, $) {
      return function(G) {
        return N($(G));
      };
    }
    function Ei(N, $) {
      for (var G = -1, we = N.length, Ee = 0, nt = []; ++G < we; ) {
        var Wt = N[G];
        (Wt === $ || Wt === d) && (N[G] = d, nt[Ee++] = G);
      }
      return nt;
    }
    function Gl(N) {
      var $ = -1, G = Array(N.size);
      return N.forEach(function(we) {
        G[++$] = we;
      }), G;
    }
    function K0(N) {
      var $ = -1, G = Array(N.size);
      return N.forEach(function(we) {
        G[++$] = [we, we];
      }), G;
    }
    function J0(N, $, G) {
      for (var we = G - 1, Ee = N.length; ++we < Ee; )
        if (N[we] === $)
          return we;
      return -1;
    }
    function Q0(N, $, G) {
      for (var we = G + 1; we--; )
        if (N[we] === $)
          return we;
      return we;
    }
    function hr(N) {
      return _r(N) ? $0(N) : N0(N);
    }
    function $n(N) {
      return _r(N) ? eg(N) : U0(N);
    }
    function Ya(N) {
      for (var $ = N.length; $-- && ri.test(N.charAt($)); )
        ;
      return $;
    }
    var V0 = pf(A0);
    function $0(N) {
      for (var $ = cf.lastIndex = 0; cf.test(N); )
        ++$;
      return $;
    }
    function eg(N) {
      return N.match(cf) || [];
    }
    function tg(N) {
      return N.match(v0) || [];
    }
    var ng = function N($) {
      $ = $ == null ? Jt : cr.defaults(Jt.Object(), $, cr.pick(Jt, M0));
      var G = $.Array, we = $.Date, Ee = $.Error, nt = $.Function, Wt = $.Math, st = $.Object, Tf = $.RegExp, ig = $.String, Hn = $.TypeError, Zl = G.prototype, rg = nt.prototype, gr = st.prototype, jl = $["__core-js_shared__"], Kl = rg.toString, ft = gr.hasOwnProperty, lg = 0, Xa = function() {
        var r = /[^.]+$/.exec(jl && jl.keys && jl.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), Jl = gr.toString, og = Kl.call(st), fg = Jt._, ug = Tf(
        "^" + Kl.call(ft).replace(fn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ql = za ? $.Buffer : n, Ri = $.Symbol, Vl = $.Uint8Array, qa = Ql ? Ql.allocUnsafe : n, $l = Ha(st.getPrototypeOf, st), Ga = st.create, Za = gr.propertyIsEnumerable, eo = Zl.splice, ja = Ri ? Ri.isConcatSpreadable : n, Jr = Ri ? Ri.iterator : n, Hi = Ri ? Ri.toStringTag : n, to = function() {
        try {
          var r = Zi(st, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), ag = $.clearTimeout !== Jt.clearTimeout && $.clearTimeout, sg = we && we.now !== Jt.Date.now && we.now, _g = $.setTimeout !== Jt.setTimeout && $.setTimeout, no = Wt.ceil, io = Wt.floor, Sf = st.getOwnPropertySymbols, hg = Ql ? Ql.isBuffer : n, Ka = $.isFinite, cg = Zl.join, gg = Ha(st.keys, st), Bt = Wt.max, nn = Wt.min, dg = we.now, mg = $.parseInt, Ja = Wt.random, yg = Zl.reverse, zf = Zi($, "DataView"), Qr = Zi($, "Map"), Af = Zi($, "Promise"), dr = Zi($, "Set"), Vr = Zi($, "WeakMap"), $r = Zi(st, "create"), ro = Vr && new Vr(), mr = {}, bg = ji(zf), wg = ji(Qr), pg = ji(Af), vg = ji(dr), kg = ji(Vr), lo = Ri ? Ri.prototype : n, el = lo ? lo.valueOf : n, Qa = lo ? lo.toString : n;
      function k(r) {
        if (Rt(r) && !Re(r) && !(r instanceof Ye)) {
          if (r instanceof Yn)
            return r;
          if (ft.call(r, "__wrapped__"))
            return Vs(r);
        }
        return new Yn(r);
      }
      var yr = function() {
        function r() {
        }
        return function(o) {
          if (!kt(o))
            return {};
          if (Ga)
            return Ga(o);
          r.prototype = o;
          var s = new r();
          return r.prototype = n, s;
        };
      }();
      function oo() {
      }
      function Yn(r, o) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = n;
      }
      k.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Qn,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Vn,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: An,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: k
        }
      }, k.prototype = oo.prototype, k.prototype.constructor = k, Yn.prototype = yr(oo.prototype), Yn.prototype.constructor = Yn;
      function Ye(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = he, this.__views__ = [];
      }
      function xg() {
        var r = new Ye(this.__wrapped__);
        return r.__actions__ = mn(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = mn(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = mn(this.__views__), r;
      }
      function Mg() {
        if (this.__filtered__) {
          var r = new Ye(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function Tg() {
        var r = this.__wrapped__.value(), o = this.__dir__, s = Re(r), m = o < 0, b = s ? r.length : 0, T = Ud(0, b, this.__views__), L = T.start, I = T.end, F = I - L, ne = m ? I : L - 1, ie = this.__iteratees__, oe = ie.length, ge = 0, pe = nn(F, this.__takeCount__);
        if (!s || !m && b == F && pe == F)
          return vs(r, this.__actions__);
        var Te = [];
        e:
          for (; F-- && ge < pe; ) {
            ne += o;
            for (var De = -1, Se = r[ne]; ++De < oe; ) {
              var Fe = ie[De], Ge = Fe.iteratee, On = Fe.type, _n = Ge(Se);
              if (On == re)
                Se = _n;
              else if (!_n) {
                if (On == fe)
                  continue e;
                break e;
              }
            }
            Te[ge++] = Se;
          }
        return Te;
      }
      Ye.prototype = yr(oo.prototype), Ye.prototype.constructor = Ye;
      function Yi(r) {
        var o = -1, s = r == null ? 0 : r.length;
        for (this.clear(); ++o < s; ) {
          var m = r[o];
          this.set(m[0], m[1]);
        }
      }
      function Sg() {
        this.__data__ = $r ? $r(null) : {}, this.size = 0;
      }
      function zg(r) {
        var o = this.has(r) && delete this.__data__[r];
        return this.size -= o ? 1 : 0, o;
      }
      function Ag(r) {
        var o = this.__data__;
        if ($r) {
          var s = o[r];
          return s === _ ? n : s;
        }
        return ft.call(o, r) ? o[r] : n;
      }
      function Cg(r) {
        var o = this.__data__;
        return $r ? o[r] !== n : ft.call(o, r);
      }
      function Lg(r, o) {
        var s = this.__data__;
        return this.size += this.has(r) ? 0 : 1, s[r] = $r && o === n ? _ : o, this;
      }
      Yi.prototype.clear = Sg, Yi.prototype.delete = zg, Yi.prototype.get = Ag, Yi.prototype.has = Cg, Yi.prototype.set = Lg;
      function ci(r) {
        var o = -1, s = r == null ? 0 : r.length;
        for (this.clear(); ++o < s; ) {
          var m = r[o];
          this.set(m[0], m[1]);
        }
      }
      function Eg() {
        this.__data__ = [], this.size = 0;
      }
      function Rg(r) {
        var o = this.__data__, s = fo(o, r);
        if (s < 0)
          return !1;
        var m = o.length - 1;
        return s == m ? o.pop() : eo.call(o, s, 1), --this.size, !0;
      }
      function Ig(r) {
        var o = this.__data__, s = fo(o, r);
        return s < 0 ? n : o[s][1];
      }
      function Og(r) {
        return fo(this.__data__, r) > -1;
      }
      function Dg(r, o) {
        var s = this.__data__, m = fo(s, r);
        return m < 0 ? (++this.size, s.push([r, o])) : s[m][1] = o, this;
      }
      ci.prototype.clear = Eg, ci.prototype.delete = Rg, ci.prototype.get = Ig, ci.prototype.has = Og, ci.prototype.set = Dg;
      function gi(r) {
        var o = -1, s = r == null ? 0 : r.length;
        for (this.clear(); ++o < s; ) {
          var m = r[o];
          this.set(m[0], m[1]);
        }
      }
      function Ng() {
        this.size = 0, this.__data__ = {
          hash: new Yi(),
          map: new (Qr || ci)(),
          string: new Yi()
        };
      }
      function Ug(r) {
        var o = po(this, r).delete(r);
        return this.size -= o ? 1 : 0, o;
      }
      function Pg(r) {
        return po(this, r).get(r);
      }
      function Fg(r) {
        return po(this, r).has(r);
      }
      function Wg(r, o) {
        var s = po(this, r), m = s.size;
        return s.set(r, o), this.size += s.size == m ? 0 : 1, this;
      }
      gi.prototype.clear = Ng, gi.prototype.delete = Ug, gi.prototype.get = Pg, gi.prototype.has = Fg, gi.prototype.set = Wg;
      function Xi(r) {
        var o = -1, s = r == null ? 0 : r.length;
        for (this.__data__ = new gi(); ++o < s; )
          this.add(r[o]);
      }
      function Bg(r) {
        return this.__data__.set(r, _), this;
      }
      function Hg(r) {
        return this.__data__.has(r);
      }
      Xi.prototype.add = Xi.prototype.push = Bg, Xi.prototype.has = Hg;
      function ei(r) {
        var o = this.__data__ = new ci(r);
        this.size = o.size;
      }
      function Yg() {
        this.__data__ = new ci(), this.size = 0;
      }
      function Xg(r) {
        var o = this.__data__, s = o.delete(r);
        return this.size = o.size, s;
      }
      function qg(r) {
        return this.__data__.get(r);
      }
      function Gg(r) {
        return this.__data__.has(r);
      }
      function Zg(r, o) {
        var s = this.__data__;
        if (s instanceof ci) {
          var m = s.__data__;
          if (!Qr || m.length < l - 1)
            return m.push([r, o]), this.size = ++s.size, this;
          s = this.__data__ = new gi(m);
        }
        return s.set(r, o), this.size = s.size, this;
      }
      ei.prototype.clear = Yg, ei.prototype.delete = Xg, ei.prototype.get = qg, ei.prototype.has = Gg, ei.prototype.set = Zg;
      function Va(r, o) {
        var s = Re(r), m = !s && Ki(r), b = !s && !m && Ui(r), T = !s && !m && !b && vr(r), L = s || m || b || T, I = L ? kf(r.length, ig) : [], F = I.length;
        for (var ne in r)
          (o || ft.call(r, ne)) && !(L && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ne == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          b && (ne == "offset" || ne == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          T && (ne == "buffer" || ne == "byteLength" || ne == "byteOffset") || // Skip index properties.
          bi(ne, F))) && I.push(ne);
        return I;
      }
      function $a(r) {
        var o = r.length;
        return o ? r[Ff(0, o - 1)] : n;
      }
      function jg(r, o) {
        return vo(mn(r), qi(o, 0, r.length));
      }
      function Kg(r) {
        return vo(mn(r));
      }
      function Cf(r, o, s) {
        (s !== n && !ti(r[o], s) || s === n && !(o in r)) && di(r, o, s);
      }
      function tl(r, o, s) {
        var m = r[o];
        (!(ft.call(r, o) && ti(m, s)) || s === n && !(o in r)) && di(r, o, s);
      }
      function fo(r, o) {
        for (var s = r.length; s--; )
          if (ti(r[s][0], o))
            return s;
        return -1;
      }
      function Jg(r, o, s, m) {
        return Ii(r, function(b, T, L) {
          o(m, b, s(b), L);
        }), m;
      }
      function es(r, o) {
        return r && oi(o, qt(o), r);
      }
      function Qg(r, o) {
        return r && oi(o, bn(o), r);
      }
      function di(r, o, s) {
        o == "__proto__" && to ? to(r, o, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : r[o] = s;
      }
      function Lf(r, o) {
        for (var s = -1, m = o.length, b = G(m), T = r == null; ++s < m; )
          b[s] = T ? n : su(r, o[s]);
        return b;
      }
      function qi(r, o, s) {
        return r === r && (s !== n && (r = r <= s ? r : s), o !== n && (r = r >= o ? r : o)), r;
      }
      function Xn(r, o, s, m, b, T) {
        var L, I = o & h, F = o & g, ne = o & w;
        if (s && (L = b ? s(r, m, b, T) : s(r)), L !== n)
          return L;
        if (!kt(r))
          return r;
        var ie = Re(r);
        if (ie) {
          if (L = Fd(r), !I)
            return mn(r, L);
        } else {
          var oe = rn(r), ge = oe == Q || oe == Ce;
          if (Ui(r))
            return Ms(r, I);
          if (oe == et || oe == Ue || ge && !b) {
            if (L = F || ge ? {} : Ys(r), !I)
              return F ? Ad(r, Qg(L, r)) : zd(r, es(L, r));
          } else {
            if (!dt[oe])
              return b ? r : {};
            L = Wd(r, oe, I);
          }
        }
        T || (T = new ei());
        var pe = T.get(r);
        if (pe)
          return pe;
        T.set(r, L), b_(r) ? r.forEach(function(Se) {
          L.add(Xn(Se, o, s, Se, r, T));
        }) : m_(r) && r.forEach(function(Se, Fe) {
          L.set(Fe, Xn(Se, o, s, Fe, r, T));
        });
        var Te = ne ? F ? Jf : Kf : F ? bn : qt, De = ie ? n : Te(r);
        return Bn(De || r, function(Se, Fe) {
          De && (Fe = Se, Se = r[Fe]), tl(L, Fe, Xn(Se, o, s, Fe, r, T));
        }), L;
      }
      function Vg(r) {
        var o = qt(r);
        return function(s) {
          return ts(s, r, o);
        };
      }
      function ts(r, o, s) {
        var m = s.length;
        if (r == null)
          return !m;
        for (r = st(r); m--; ) {
          var b = s[m], T = o[b], L = r[b];
          if (L === n && !(b in r) || !T(L))
            return !1;
        }
        return !0;
      }
      function ns(r, o, s) {
        if (typeof r != "function")
          throw new Hn(u);
        return ul(function() {
          r.apply(n, s);
        }, o);
      }
      function nl(r, o, s, m) {
        var b = -1, T = Xl, L = !0, I = r.length, F = [], ne = o.length;
        if (!I)
          return F;
        s && (o = bt(o, En(s))), m ? (T = mf, L = !1) : o.length >= l && (T = Kr, L = !1, o = new Xi(o));
        e:
          for (; ++b < I; ) {
            var ie = r[b], oe = s == null ? ie : s(ie);
            if (ie = m || ie !== 0 ? ie : 0, L && oe === oe) {
              for (var ge = ne; ge--; )
                if (o[ge] === oe)
                  continue e;
              F.push(ie);
            } else
              T(o, oe, m) || F.push(ie);
          }
        return F;
      }
      var Ii = Cs(li), is = Cs(Rf, !0);
      function $g(r, o) {
        var s = !0;
        return Ii(r, function(m, b, T) {
          return s = !!o(m, b, T), s;
        }), s;
      }
      function uo(r, o, s) {
        for (var m = -1, b = r.length; ++m < b; ) {
          var T = r[m], L = o(T);
          if (L != null && (I === n ? L === L && !In(L) : s(L, I)))
            var I = L, F = T;
        }
        return F;
      }
      function ed(r, o, s, m) {
        var b = r.length;
        for (s = Ie(s), s < 0 && (s = -s > b ? 0 : b + s), m = m === n || m > b ? b : Ie(m), m < 0 && (m += b), m = s > m ? 0 : p_(m); s < m; )
          r[s++] = o;
        return r;
      }
      function rs(r, o) {
        var s = [];
        return Ii(r, function(m, b, T) {
          o(m, b, T) && s.push(m);
        }), s;
      }
      function Qt(r, o, s, m, b) {
        var T = -1, L = r.length;
        for (s || (s = Hd), b || (b = []); ++T < L; ) {
          var I = r[T];
          o > 0 && s(I) ? o > 1 ? Qt(I, o - 1, s, m, b) : Li(b, I) : m || (b[b.length] = I);
        }
        return b;
      }
      var Ef = Ls(), ls = Ls(!0);
      function li(r, o) {
        return r && Ef(r, o, qt);
      }
      function Rf(r, o) {
        return r && ls(r, o, qt);
      }
      function ao(r, o) {
        return Ci(o, function(s) {
          return wi(r[s]);
        });
      }
      function Gi(r, o) {
        o = Di(o, r);
        for (var s = 0, m = o.length; r != null && s < m; )
          r = r[fi(o[s++])];
        return s && s == m ? r : n;
      }
      function os(r, o, s) {
        var m = o(r);
        return Re(r) ? m : Li(m, s(r));
      }
      function an(r) {
        return r == null ? r === n ? Xt : Qe : Hi && Hi in st(r) ? Nd(r) : Kd(r);
      }
      function If(r, o) {
        return r > o;
      }
      function td(r, o) {
        return r != null && ft.call(r, o);
      }
      function nd(r, o) {
        return r != null && o in st(r);
      }
      function id(r, o, s) {
        return r >= nn(o, s) && r < Bt(o, s);
      }
      function Of(r, o, s) {
        for (var m = s ? mf : Xl, b = r[0].length, T = r.length, L = T, I = G(T), F = 1 / 0, ne = []; L--; ) {
          var ie = r[L];
          L && o && (ie = bt(ie, En(o))), F = nn(ie.length, F), I[L] = !s && (o || b >= 120 && ie.length >= 120) ? new Xi(L && ie) : n;
        }
        ie = r[0];
        var oe = -1, ge = I[0];
        e:
          for (; ++oe < b && ne.length < F; ) {
            var pe = ie[oe], Te = o ? o(pe) : pe;
            if (pe = s || pe !== 0 ? pe : 0, !(ge ? Kr(ge, Te) : m(ne, Te, s))) {
              for (L = T; --L; ) {
                var De = I[L];
                if (!(De ? Kr(De, Te) : m(r[L], Te, s)))
                  continue e;
              }
              ge && ge.push(Te), ne.push(pe);
            }
          }
        return ne;
      }
      function rd(r, o, s, m) {
        return li(r, function(b, T, L) {
          o(m, s(b), T, L);
        }), m;
      }
      function il(r, o, s) {
        o = Di(o, r), r = Zs(r, o);
        var m = r == null ? r : r[fi(Gn(o))];
        return m == null ? n : Ln(m, r, s);
      }
      function fs(r) {
        return Rt(r) && an(r) == Ue;
      }
      function ld(r) {
        return Rt(r) && an(r) == $t;
      }
      function od(r) {
        return Rt(r) && an(r) == ae;
      }
      function rl(r, o, s, m, b) {
        return r === o ? !0 : r == null || o == null || !Rt(r) && !Rt(o) ? r !== r && o !== o : fd(r, o, s, m, rl, b);
      }
      function fd(r, o, s, m, b, T) {
        var L = Re(r), I = Re(o), F = L ? $e : rn(r), ne = I ? $e : rn(o);
        F = F == Ue ? et : F, ne = ne == Ue ? et : ne;
        var ie = F == et, oe = ne == et, ge = F == ne;
        if (ge && Ui(r)) {
          if (!Ui(o))
            return !1;
          L = !0, ie = !1;
        }
        if (ge && !ie)
          return T || (T = new ei()), L || vr(r) ? Ws(r, o, s, m, b, T) : Od(r, o, F, s, m, b, T);
        if (!(s & p)) {
          var pe = ie && ft.call(r, "__wrapped__"), Te = oe && ft.call(o, "__wrapped__");
          if (pe || Te) {
            var De = pe ? r.value() : r, Se = Te ? o.value() : o;
            return T || (T = new ei()), b(De, Se, s, m, T);
          }
        }
        return ge ? (T || (T = new ei()), Dd(r, o, s, m, b, T)) : !1;
      }
      function ud(r) {
        return Rt(r) && rn(r) == ye;
      }
      function Df(r, o, s, m) {
        var b = s.length, T = b, L = !m;
        if (r == null)
          return !T;
        for (r = st(r); b--; ) {
          var I = s[b];
          if (L && I[2] ? I[1] !== r[I[0]] : !(I[0] in r))
            return !1;
        }
        for (; ++b < T; ) {
          I = s[b];
          var F = I[0], ne = r[F], ie = I[1];
          if (L && I[2]) {
            if (ne === n && !(F in r))
              return !1;
          } else {
            var oe = new ei();
            if (m)
              var ge = m(ne, ie, F, r, o, oe);
            if (!(ge === n ? rl(ie, ne, p | S, m, oe) : ge))
              return !1;
          }
        }
        return !0;
      }
      function us(r) {
        if (!kt(r) || Xd(r))
          return !1;
        var o = wi(r) ? ug : vt;
        return o.test(ji(r));
      }
      function ad(r) {
        return Rt(r) && an(r) == le;
      }
      function sd(r) {
        return Rt(r) && rn(r) == Me;
      }
      function _d(r) {
        return Rt(r) && zo(r.length) && !!mt[an(r)];
      }
      function as(r) {
        return typeof r == "function" ? r : r == null ? wn : typeof r == "object" ? Re(r) ? hs(r[0], r[1]) : _s(r) : E_(r);
      }
      function Nf(r) {
        if (!fl(r))
          return gg(r);
        var o = [];
        for (var s in st(r))
          ft.call(r, s) && s != "constructor" && o.push(s);
        return o;
      }
      function hd(r) {
        if (!kt(r))
          return jd(r);
        var o = fl(r), s = [];
        for (var m in r)
          m == "constructor" && (o || !ft.call(r, m)) || s.push(m);
        return s;
      }
      function Uf(r, o) {
        return r < o;
      }
      function ss(r, o) {
        var s = -1, m = yn(r) ? G(r.length) : [];
        return Ii(r, function(b, T, L) {
          m[++s] = o(b, T, L);
        }), m;
      }
      function _s(r) {
        var o = Vf(r);
        return o.length == 1 && o[0][2] ? qs(o[0][0], o[0][1]) : function(s) {
          return s === r || Df(s, r, o);
        };
      }
      function hs(r, o) {
        return eu(r) && Xs(o) ? qs(fi(r), o) : function(s) {
          var m = su(s, r);
          return m === n && m === o ? _u(s, r) : rl(o, m, p | S);
        };
      }
      function so(r, o, s, m, b) {
        r !== o && Ef(o, function(T, L) {
          if (b || (b = new ei()), kt(T))
            cd(r, o, L, s, so, m, b);
          else {
            var I = m ? m(nu(r, L), T, L + "", r, o, b) : n;
            I === n && (I = T), Cf(r, L, I);
          }
        }, bn);
      }
      function cd(r, o, s, m, b, T, L) {
        var I = nu(r, s), F = nu(o, s), ne = L.get(F);
        if (ne) {
          Cf(r, s, ne);
          return;
        }
        var ie = T ? T(I, F, s + "", r, o, L) : n, oe = ie === n;
        if (oe) {
          var ge = Re(F), pe = !ge && Ui(F), Te = !ge && !pe && vr(F);
          ie = F, ge || pe || Te ? Re(I) ? ie = I : Dt(I) ? ie = mn(I) : pe ? (oe = !1, ie = Ms(F, !0)) : Te ? (oe = !1, ie = Ts(F, !0)) : ie = [] : al(F) || Ki(F) ? (ie = I, Ki(I) ? ie = v_(I) : (!kt(I) || wi(I)) && (ie = Ys(F))) : oe = !1;
        }
        oe && (L.set(F, ie), b(ie, F, m, T, L), L.delete(F)), Cf(r, s, ie);
      }
      function cs(r, o) {
        var s = r.length;
        if (s)
          return o += o < 0 ? s : 0, bi(o, s) ? r[o] : n;
      }
      function gs(r, o, s) {
        o.length ? o = bt(o, function(T) {
          return Re(T) ? function(L) {
            return Gi(L, T.length === 1 ? T[0] : T);
          } : T;
        }) : o = [wn];
        var m = -1;
        o = bt(o, En(xe()));
        var b = ss(r, function(T, L, I) {
          var F = bt(o, function(ne) {
            return ne(T);
          });
          return { criteria: F, index: ++m, value: T };
        });
        return W0(b, function(T, L) {
          return Sd(T, L, s);
        });
      }
      function gd(r, o) {
        return ds(r, o, function(s, m) {
          return _u(r, m);
        });
      }
      function ds(r, o, s) {
        for (var m = -1, b = o.length, T = {}; ++m < b; ) {
          var L = o[m], I = Gi(r, L);
          s(I, L) && ll(T, Di(L, r), I);
        }
        return T;
      }
      function dd(r) {
        return function(o) {
          return Gi(o, r);
        };
      }
      function Pf(r, o, s, m) {
        var b = m ? F0 : sr, T = -1, L = o.length, I = r;
        for (r === o && (o = mn(o)), s && (I = bt(r, En(s))); ++T < L; )
          for (var F = 0, ne = o[T], ie = s ? s(ne) : ne; (F = b(I, ie, F, m)) > -1; )
            I !== r && eo.call(I, F, 1), eo.call(r, F, 1);
        return r;
      }
      function ms(r, o) {
        for (var s = r ? o.length : 0, m = s - 1; s--; ) {
          var b = o[s];
          if (s == m || b !== T) {
            var T = b;
            bi(b) ? eo.call(r, b, 1) : Hf(r, b);
          }
        }
        return r;
      }
      function Ff(r, o) {
        return r + io(Ja() * (o - r + 1));
      }
      function md(r, o, s, m) {
        for (var b = -1, T = Bt(no((o - r) / (s || 1)), 0), L = G(T); T--; )
          L[m ? T : ++b] = r, r += s;
        return L;
      }
      function Wf(r, o) {
        var s = "";
        if (!r || o < 1 || o > A)
          return s;
        do
          o % 2 && (s += r), o = io(o / 2), o && (r += r);
        while (o);
        return s;
      }
      function Ne(r, o) {
        return iu(Gs(r, o, wn), r + "");
      }
      function yd(r) {
        return $a(kr(r));
      }
      function bd(r, o) {
        var s = kr(r);
        return vo(s, qi(o, 0, s.length));
      }
      function ll(r, o, s, m) {
        if (!kt(r))
          return r;
        o = Di(o, r);
        for (var b = -1, T = o.length, L = T - 1, I = r; I != null && ++b < T; ) {
          var F = fi(o[b]), ne = s;
          if (F === "__proto__" || F === "constructor" || F === "prototype")
            return r;
          if (b != L) {
            var ie = I[F];
            ne = m ? m(ie, F, I) : n, ne === n && (ne = kt(ie) ? ie : bi(o[b + 1]) ? [] : {});
          }
          tl(I, F, ne), I = I[F];
        }
        return r;
      }
      var ys = ro ? function(r, o) {
        return ro.set(r, o), r;
      } : wn, wd = to ? function(r, o) {
        return to(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: cu(o),
          writable: !0
        });
      } : wn;
      function pd(r) {
        return vo(kr(r));
      }
      function qn(r, o, s) {
        var m = -1, b = r.length;
        o < 0 && (o = -o > b ? 0 : b + o), s = s > b ? b : s, s < 0 && (s += b), b = o > s ? 0 : s - o >>> 0, o >>>= 0;
        for (var T = G(b); ++m < b; )
          T[m] = r[m + o];
        return T;
      }
      function vd(r, o) {
        var s;
        return Ii(r, function(m, b, T) {
          return s = o(m, b, T), !s;
        }), !!s;
      }
      function _o(r, o, s) {
        var m = 0, b = r == null ? m : r.length;
        if (typeof o == "number" && o === o && b <= Kt) {
          for (; m < b; ) {
            var T = m + b >>> 1, L = r[T];
            L !== null && !In(L) && (s ? L <= o : L < o) ? m = T + 1 : b = T;
          }
          return b;
        }
        return Bf(r, o, wn, s);
      }
      function Bf(r, o, s, m) {
        var b = 0, T = r == null ? 0 : r.length;
        if (T === 0)
          return 0;
        o = s(o);
        for (var L = o !== o, I = o === null, F = In(o), ne = o === n; b < T; ) {
          var ie = io((b + T) / 2), oe = s(r[ie]), ge = oe !== n, pe = oe === null, Te = oe === oe, De = In(oe);
          if (L)
            var Se = m || Te;
          else
            ne ? Se = Te && (m || ge) : I ? Se = Te && ge && (m || !pe) : F ? Se = Te && ge && !pe && (m || !De) : pe || De ? Se = !1 : Se = m ? oe <= o : oe < o;
          Se ? b = ie + 1 : T = ie;
        }
        return nn(T, pt);
      }
      function bs(r, o) {
        for (var s = -1, m = r.length, b = 0, T = []; ++s < m; ) {
          var L = r[s], I = o ? o(L) : L;
          if (!s || !ti(I, F)) {
            var F = I;
            T[b++] = L === 0 ? 0 : L;
          }
        }
        return T;
      }
      function ws(r) {
        return typeof r == "number" ? r : In(r) ? de : +r;
      }
      function Rn(r) {
        if (typeof r == "string")
          return r;
        if (Re(r))
          return bt(r, Rn) + "";
        if (In(r))
          return Qa ? Qa.call(r) : "";
        var o = r + "";
        return o == "0" && 1 / r == -H ? "-0" : o;
      }
      function Oi(r, o, s) {
        var m = -1, b = Xl, T = r.length, L = !0, I = [], F = I;
        if (s)
          L = !1, b = mf;
        else if (T >= l) {
          var ne = o ? null : Rd(r);
          if (ne)
            return Gl(ne);
          L = !1, b = Kr, F = new Xi();
        } else
          F = o ? [] : I;
        e:
          for (; ++m < T; ) {
            var ie = r[m], oe = o ? o(ie) : ie;
            if (ie = s || ie !== 0 ? ie : 0, L && oe === oe) {
              for (var ge = F.length; ge--; )
                if (F[ge] === oe)
                  continue e;
              o && F.push(oe), I.push(ie);
            } else
              b(F, oe, s) || (F !== I && F.push(oe), I.push(ie));
          }
        return I;
      }
      function Hf(r, o) {
        return o = Di(o, r), r = Zs(r, o), r == null || delete r[fi(Gn(o))];
      }
      function ps(r, o, s, m) {
        return ll(r, o, s(Gi(r, o)), m);
      }
      function ho(r, o, s, m) {
        for (var b = r.length, T = m ? b : -1; (m ? T-- : ++T < b) && o(r[T], T, r); )
          ;
        return s ? qn(r, m ? 0 : T, m ? T + 1 : b) : qn(r, m ? T + 1 : 0, m ? b : T);
      }
      function vs(r, o) {
        var s = r;
        return s instanceof Ye && (s = s.value()), yf(o, function(m, b) {
          return b.func.apply(b.thisArg, Li([m], b.args));
        }, s);
      }
      function Yf(r, o, s) {
        var m = r.length;
        if (m < 2)
          return m ? Oi(r[0]) : [];
        for (var b = -1, T = G(m); ++b < m; )
          for (var L = r[b], I = -1; ++I < m; )
            I != b && (T[b] = nl(T[b] || L, r[I], o, s));
        return Oi(Qt(T, 1), o, s);
      }
      function ks(r, o, s) {
        for (var m = -1, b = r.length, T = o.length, L = {}; ++m < b; ) {
          var I = m < T ? o[m] : n;
          s(L, r[m], I);
        }
        return L;
      }
      function Xf(r) {
        return Dt(r) ? r : [];
      }
      function qf(r) {
        return typeof r == "function" ? r : wn;
      }
      function Di(r, o) {
        return Re(r) ? r : eu(r, o) ? [r] : Qs(lt(r));
      }
      var kd = Ne;
      function Ni(r, o, s) {
        var m = r.length;
        return s = s === n ? m : s, !o && s >= m ? r : qn(r, o, s);
      }
      var xs = ag || function(r) {
        return Jt.clearTimeout(r);
      };
      function Ms(r, o) {
        if (o)
          return r.slice();
        var s = r.length, m = qa ? qa(s) : new r.constructor(s);
        return r.copy(m), m;
      }
      function Gf(r) {
        var o = new r.constructor(r.byteLength);
        return new Vl(o).set(new Vl(r)), o;
      }
      function xd(r, o) {
        var s = o ? Gf(r.buffer) : r.buffer;
        return new r.constructor(s, r.byteOffset, r.byteLength);
      }
      function Md(r) {
        var o = new r.constructor(r.source, dn.exec(r));
        return o.lastIndex = r.lastIndex, o;
      }
      function Td(r) {
        return el ? st(el.call(r)) : {};
      }
      function Ts(r, o) {
        var s = o ? Gf(r.buffer) : r.buffer;
        return new r.constructor(s, r.byteOffset, r.length);
      }
      function Ss(r, o) {
        if (r !== o) {
          var s = r !== n, m = r === null, b = r === r, T = In(r), L = o !== n, I = o === null, F = o === o, ne = In(o);
          if (!I && !ne && !T && r > o || T && L && F && !I && !ne || m && L && F || !s && F || !b)
            return 1;
          if (!m && !T && !ne && r < o || ne && s && b && !m && !T || I && s && b || !L && b || !F)
            return -1;
        }
        return 0;
      }
      function Sd(r, o, s) {
        for (var m = -1, b = r.criteria, T = o.criteria, L = b.length, I = s.length; ++m < L; ) {
          var F = Ss(b[m], T[m]);
          if (F) {
            if (m >= I)
              return F;
            var ne = s[m];
            return F * (ne == "desc" ? -1 : 1);
          }
        }
        return r.index - o.index;
      }
      function zs(r, o, s, m) {
        for (var b = -1, T = r.length, L = s.length, I = -1, F = o.length, ne = Bt(T - L, 0), ie = G(F + ne), oe = !m; ++I < F; )
          ie[I] = o[I];
        for (; ++b < L; )
          (oe || b < T) && (ie[s[b]] = r[b]);
        for (; ne--; )
          ie[I++] = r[b++];
        return ie;
      }
      function As(r, o, s, m) {
        for (var b = -1, T = r.length, L = -1, I = s.length, F = -1, ne = o.length, ie = Bt(T - I, 0), oe = G(ie + ne), ge = !m; ++b < ie; )
          oe[b] = r[b];
        for (var pe = b; ++F < ne; )
          oe[pe + F] = o[F];
        for (; ++L < I; )
          (ge || b < T) && (oe[pe + s[L]] = r[b++]);
        return oe;
      }
      function mn(r, o) {
        var s = -1, m = r.length;
        for (o || (o = G(m)); ++s < m; )
          o[s] = r[s];
        return o;
      }
      function oi(r, o, s, m) {
        var b = !s;
        s || (s = {});
        for (var T = -1, L = o.length; ++T < L; ) {
          var I = o[T], F = m ? m(s[I], r[I], I, s, r) : n;
          F === n && (F = r[I]), b ? di(s, I, F) : tl(s, I, F);
        }
        return s;
      }
      function zd(r, o) {
        return oi(r, $f(r), o);
      }
      function Ad(r, o) {
        return oi(r, Bs(r), o);
      }
      function co(r, o) {
        return function(s, m) {
          var b = Re(s) ? I0 : Jg, T = o ? o() : {};
          return b(s, r, xe(m, 2), T);
        };
      }
      function br(r) {
        return Ne(function(o, s) {
          var m = -1, b = s.length, T = b > 1 ? s[b - 1] : n, L = b > 2 ? s[2] : n;
          for (T = r.length > 3 && typeof T == "function" ? (b--, T) : n, L && sn(s[0], s[1], L) && (T = b < 3 ? n : T, b = 1), o = st(o); ++m < b; ) {
            var I = s[m];
            I && r(o, I, m, T);
          }
          return o;
        });
      }
      function Cs(r, o) {
        return function(s, m) {
          if (s == null)
            return s;
          if (!yn(s))
            return r(s, m);
          for (var b = s.length, T = o ? b : -1, L = st(s); (o ? T-- : ++T < b) && m(L[T], T, L) !== !1; )
            ;
          return s;
        };
      }
      function Ls(r) {
        return function(o, s, m) {
          for (var b = -1, T = st(o), L = m(o), I = L.length; I--; ) {
            var F = L[r ? I : ++b];
            if (s(T[F], F, T) === !1)
              break;
          }
          return o;
        };
      }
      function Cd(r, o, s) {
        var m = o & x, b = ol(r);
        function T() {
          var L = this && this !== Jt && this instanceof T ? b : r;
          return L.apply(m ? s : this, arguments);
        }
        return T;
      }
      function Es(r) {
        return function(o) {
          o = lt(o);
          var s = _r(o) ? $n(o) : n, m = s ? s[0] : o.charAt(0), b = s ? Ni(s, 1).join("") : o.slice(1);
          return m[r]() + b;
        };
      }
      function wr(r) {
        return function(o) {
          return yf(C_(A_(o).replace(w0, "")), r, "");
        };
      }
      function ol(r) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new r();
            case 1:
              return new r(o[0]);
            case 2:
              return new r(o[0], o[1]);
            case 3:
              return new r(o[0], o[1], o[2]);
            case 4:
              return new r(o[0], o[1], o[2], o[3]);
            case 5:
              return new r(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new r(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new r(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var s = yr(r.prototype), m = r.apply(s, o);
          return kt(m) ? m : s;
        };
      }
      function Ld(r, o, s) {
        var m = ol(r);
        function b() {
          for (var T = arguments.length, L = G(T), I = T, F = pr(b); I--; )
            L[I] = arguments[I];
          var ne = T < 3 && L[0] !== F && L[T - 1] !== F ? [] : Ei(L, F);
          if (T -= ne.length, T < s)
            return Ns(
              r,
              o,
              go,
              b.placeholder,
              n,
              L,
              ne,
              n,
              n,
              s - T
            );
          var ie = this && this !== Jt && this instanceof b ? m : r;
          return Ln(ie, this, L);
        }
        return b;
      }
      function Rs(r) {
        return function(o, s, m) {
          var b = st(o);
          if (!yn(o)) {
            var T = xe(s, 3);
            o = qt(o), s = function(I) {
              return T(b[I], I, b);
            };
          }
          var L = r(o, s, m);
          return L > -1 ? b[T ? o[L] : L] : n;
        };
      }
      function Is(r) {
        return yi(function(o) {
          var s = o.length, m = s, b = Yn.prototype.thru;
          for (r && o.reverse(); m--; ) {
            var T = o[m];
            if (typeof T != "function")
              throw new Hn(u);
            if (b && !L && wo(T) == "wrapper")
              var L = new Yn([], !0);
          }
          for (m = L ? m : s; ++m < s; ) {
            T = o[m];
            var I = wo(T), F = I == "wrapper" ? Qf(T) : n;
            F && tu(F[0]) && F[1] == (B | C | O | D) && !F[4].length && F[9] == 1 ? L = L[wo(F[0])].apply(L, F[3]) : L = T.length == 1 && tu(T) ? L[I]() : L.thru(T);
          }
          return function() {
            var ne = arguments, ie = ne[0];
            if (L && ne.length == 1 && Re(ie))
              return L.plant(ie).value();
            for (var oe = 0, ge = s ? o[oe].apply(this, ne) : ie; ++oe < s; )
              ge = o[oe].call(this, ge);
            return ge;
          };
        });
      }
      function go(r, o, s, m, b, T, L, I, F, ne) {
        var ie = o & B, oe = o & x, ge = o & M, pe = o & (C | P), Te = o & te, De = ge ? n : ol(r);
        function Se() {
          for (var Fe = arguments.length, Ge = G(Fe), On = Fe; On--; )
            Ge[On] = arguments[On];
          if (pe)
            var _n = pr(Se), Dn = H0(Ge, _n);
          if (m && (Ge = zs(Ge, m, b, pe)), T && (Ge = As(Ge, T, L, pe)), Fe -= Dn, pe && Fe < ne) {
            var Nt = Ei(Ge, _n);
            return Ns(
              r,
              o,
              go,
              Se.placeholder,
              s,
              Ge,
              Nt,
              I,
              F,
              ne - Fe
            );
          }
          var ni = oe ? s : this, vi = ge ? ni[r] : r;
          return Fe = Ge.length, I ? Ge = Jd(Ge, I) : Te && Fe > 1 && Ge.reverse(), ie && F < Fe && (Ge.length = F), this && this !== Jt && this instanceof Se && (vi = De || ol(vi)), vi.apply(ni, Ge);
        }
        return Se;
      }
      function Os(r, o) {
        return function(s, m) {
          return rd(s, r, o(m), {});
        };
      }
      function mo(r, o) {
        return function(s, m) {
          var b;
          if (s === n && m === n)
            return o;
          if (s !== n && (b = s), m !== n) {
            if (b === n)
              return m;
            typeof s == "string" || typeof m == "string" ? (s = Rn(s), m = Rn(m)) : (s = ws(s), m = ws(m)), b = r(s, m);
          }
          return b;
        };
      }
      function Zf(r) {
        return yi(function(o) {
          return o = bt(o, En(xe())), Ne(function(s) {
            var m = this;
            return r(o, function(b) {
              return Ln(b, m, s);
            });
          });
        });
      }
      function yo(r, o) {
        o = o === n ? " " : Rn(o);
        var s = o.length;
        if (s < 2)
          return s ? Wf(o, r) : o;
        var m = Wf(o, no(r / hr(o)));
        return _r(o) ? Ni($n(m), 0, r).join("") : m.slice(0, r);
      }
      function Ed(r, o, s, m) {
        var b = o & x, T = ol(r);
        function L() {
          for (var I = -1, F = arguments.length, ne = -1, ie = m.length, oe = G(ie + F), ge = this && this !== Jt && this instanceof L ? T : r; ++ne < ie; )
            oe[ne] = m[ne];
          for (; F--; )
            oe[ne++] = arguments[++I];
          return Ln(ge, b ? s : this, oe);
        }
        return L;
      }
      function Ds(r) {
        return function(o, s, m) {
          return m && typeof m != "number" && sn(o, s, m) && (s = m = n), o = pi(o), s === n ? (s = o, o = 0) : s = pi(s), m = m === n ? o < s ? 1 : -1 : pi(m), md(o, s, m, r);
        };
      }
      function bo(r) {
        return function(o, s) {
          return typeof o == "string" && typeof s == "string" || (o = Zn(o), s = Zn(s)), r(o, s);
        };
      }
      function Ns(r, o, s, m, b, T, L, I, F, ne) {
        var ie = o & C, oe = ie ? L : n, ge = ie ? n : L, pe = ie ? T : n, Te = ie ? n : T;
        o |= ie ? O : E, o &= ~(ie ? E : O), o & z || (o &= ~(x | M));
        var De = [
          r,
          o,
          b,
          pe,
          oe,
          Te,
          ge,
          I,
          F,
          ne
        ], Se = s.apply(n, De);
        return tu(r) && js(Se, De), Se.placeholder = m, Ks(Se, r, o);
      }
      function jf(r) {
        var o = Wt[r];
        return function(s, m) {
          if (s = Zn(s), m = m == null ? 0 : nn(Ie(m), 292), m && Ka(s)) {
            var b = (lt(s) + "e").split("e"), T = o(b[0] + "e" + (+b[1] + m));
            return b = (lt(T) + "e").split("e"), +(b[0] + "e" + (+b[1] - m));
          }
          return o(s);
        };
      }
      var Rd = dr && 1 / Gl(new dr([, -0]))[1] == H ? function(r) {
        return new dr(r);
      } : mu;
      function Us(r) {
        return function(o) {
          var s = rn(o);
          return s == ye ? Mf(o) : s == Me ? K0(o) : B0(o, r(o));
        };
      }
      function mi(r, o, s, m, b, T, L, I) {
        var F = o & M;
        if (!F && typeof r != "function")
          throw new Hn(u);
        var ne = m ? m.length : 0;
        if (ne || (o &= ~(O | E), m = b = n), L = L === n ? L : Bt(Ie(L), 0), I = I === n ? I : Ie(I), ne -= b ? b.length : 0, o & E) {
          var ie = m, oe = b;
          m = b = n;
        }
        var ge = F ? n : Qf(r), pe = [
          r,
          o,
          s,
          m,
          b,
          ie,
          oe,
          T,
          L,
          I
        ];
        if (ge && Zd(pe, ge), r = pe[0], o = pe[1], s = pe[2], m = pe[3], b = pe[4], I = pe[9] = pe[9] === n ? F ? 0 : r.length : Bt(pe[9] - ne, 0), !I && o & (C | P) && (o &= ~(C | P)), !o || o == x)
          var Te = Cd(r, o, s);
        else
          o == C || o == P ? Te = Ld(r, o, I) : (o == O || o == (x | O)) && !b.length ? Te = Ed(r, o, s, m) : Te = go.apply(n, pe);
        var De = ge ? ys : js;
        return Ks(De(Te, pe), r, o);
      }
      function Ps(r, o, s, m) {
        return r === n || ti(r, gr[s]) && !ft.call(m, s) ? o : r;
      }
      function Fs(r, o, s, m, b, T) {
        return kt(r) && kt(o) && (T.set(o, r), so(r, o, n, Fs, T), T.delete(o)), r;
      }
      function Id(r) {
        return al(r) ? n : r;
      }
      function Ws(r, o, s, m, b, T) {
        var L = s & p, I = r.length, F = o.length;
        if (I != F && !(L && F > I))
          return !1;
        var ne = T.get(r), ie = T.get(o);
        if (ne && ie)
          return ne == o && ie == r;
        var oe = -1, ge = !0, pe = s & S ? new Xi() : n;
        for (T.set(r, o), T.set(o, r); ++oe < I; ) {
          var Te = r[oe], De = o[oe];
          if (m)
            var Se = L ? m(De, Te, oe, o, r, T) : m(Te, De, oe, r, o, T);
          if (Se !== n) {
            if (Se)
              continue;
            ge = !1;
            break;
          }
          if (pe) {
            if (!bf(o, function(Fe, Ge) {
              if (!Kr(pe, Ge) && (Te === Fe || b(Te, Fe, s, m, T)))
                return pe.push(Ge);
            })) {
              ge = !1;
              break;
            }
          } else if (!(Te === De || b(Te, De, s, m, T))) {
            ge = !1;
            break;
          }
        }
        return T.delete(r), T.delete(o), ge;
      }
      function Od(r, o, s, m, b, T, L) {
        switch (s) {
          case yt:
            if (r.byteLength != o.byteLength || r.byteOffset != o.byteOffset)
              return !1;
            r = r.buffer, o = o.buffer;
          case $t:
            return !(r.byteLength != o.byteLength || !T(new Vl(r), new Vl(o)));
          case Xe:
          case ae:
          case He:
            return ti(+r, +o);
          case be:
            return r.name == o.name && r.message == o.message;
          case le:
          case xt:
            return r == o + "";
          case ye:
            var I = Mf;
          case Me:
            var F = m & p;
            if (I || (I = Gl), r.size != o.size && !F)
              return !1;
            var ne = L.get(r);
            if (ne)
              return ne == o;
            m |= S, L.set(r, o);
            var ie = Ws(I(r), I(o), m, b, T, L);
            return L.delete(r), ie;
          case Mt:
            if (el)
              return el.call(r) == el.call(o);
        }
        return !1;
      }
      function Dd(r, o, s, m, b, T) {
        var L = s & p, I = Kf(r), F = I.length, ne = Kf(o), ie = ne.length;
        if (F != ie && !L)
          return !1;
        for (var oe = F; oe--; ) {
          var ge = I[oe];
          if (!(L ? ge in o : ft.call(o, ge)))
            return !1;
        }
        var pe = T.get(r), Te = T.get(o);
        if (pe && Te)
          return pe == o && Te == r;
        var De = !0;
        T.set(r, o), T.set(o, r);
        for (var Se = L; ++oe < F; ) {
          ge = I[oe];
          var Fe = r[ge], Ge = o[ge];
          if (m)
            var On = L ? m(Ge, Fe, ge, o, r, T) : m(Fe, Ge, ge, r, o, T);
          if (!(On === n ? Fe === Ge || b(Fe, Ge, s, m, T) : On)) {
            De = !1;
            break;
          }
          Se || (Se = ge == "constructor");
        }
        if (De && !Se) {
          var _n = r.constructor, Dn = o.constructor;
          _n != Dn && "constructor" in r && "constructor" in o && !(typeof _n == "function" && _n instanceof _n && typeof Dn == "function" && Dn instanceof Dn) && (De = !1);
        }
        return T.delete(r), T.delete(o), De;
      }
      function yi(r) {
        return iu(Gs(r, n, t_), r + "");
      }
      function Kf(r) {
        return os(r, qt, $f);
      }
      function Jf(r) {
        return os(r, bn, Bs);
      }
      var Qf = ro ? function(r) {
        return ro.get(r);
      } : mu;
      function wo(r) {
        for (var o = r.name + "", s = mr[o], m = ft.call(mr, o) ? s.length : 0; m--; ) {
          var b = s[m], T = b.func;
          if (T == null || T == r)
            return b.name;
        }
        return o;
      }
      function pr(r) {
        var o = ft.call(k, "placeholder") ? k : r;
        return o.placeholder;
      }
      function xe() {
        var r = k.iteratee || gu;
        return r = r === gu ? as : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function po(r, o) {
        var s = r.__data__;
        return Yd(o) ? s[typeof o == "string" ? "string" : "hash"] : s.map;
      }
      function Vf(r) {
        for (var o = qt(r), s = o.length; s--; ) {
          var m = o[s], b = r[m];
          o[s] = [m, b, Xs(b)];
        }
        return o;
      }
      function Zi(r, o) {
        var s = G0(r, o);
        return us(s) ? s : n;
      }
      function Nd(r) {
        var o = ft.call(r, Hi), s = r[Hi];
        try {
          r[Hi] = n;
          var m = !0;
        } catch {
        }
        var b = Jl.call(r);
        return m && (o ? r[Hi] = s : delete r[Hi]), b;
      }
      var $f = Sf ? function(r) {
        return r == null ? [] : (r = st(r), Ci(Sf(r), function(o) {
          return Za.call(r, o);
        }));
      } : yu, Bs = Sf ? function(r) {
        for (var o = []; r; )
          Li(o, $f(r)), r = $l(r);
        return o;
      } : yu, rn = an;
      (zf && rn(new zf(new ArrayBuffer(1))) != yt || Qr && rn(new Qr()) != ye || Af && rn(Af.resolve()) != qe || dr && rn(new dr()) != Me || Vr && rn(new Vr()) != gt) && (rn = function(r) {
        var o = an(r), s = o == et ? r.constructor : n, m = s ? ji(s) : "";
        if (m)
          switch (m) {
            case bg:
              return yt;
            case wg:
              return ye;
            case pg:
              return qe;
            case vg:
              return Me;
            case kg:
              return gt;
          }
        return o;
      });
      function Ud(r, o, s) {
        for (var m = -1, b = s.length; ++m < b; ) {
          var T = s[m], L = T.size;
          switch (T.type) {
            case "drop":
              r += L;
              break;
            case "dropRight":
              o -= L;
              break;
            case "take":
              o = nn(o, r + L);
              break;
            case "takeRight":
              r = Bt(r, o - L);
              break;
          }
        }
        return { start: r, end: o };
      }
      function Pd(r) {
        var o = r.match(Yr);
        return o ? o[1].split(or) : [];
      }
      function Hs(r, o, s) {
        o = Di(o, r);
        for (var m = -1, b = o.length, T = !1; ++m < b; ) {
          var L = fi(o[m]);
          if (!(T = r != null && s(r, L)))
            break;
          r = r[L];
        }
        return T || ++m != b ? T : (b = r == null ? 0 : r.length, !!b && zo(b) && bi(L, b) && (Re(r) || Ki(r)));
      }
      function Fd(r) {
        var o = r.length, s = new r.constructor(o);
        return o && typeof r[0] == "string" && ft.call(r, "index") && (s.index = r.index, s.input = r.input), s;
      }
      function Ys(r) {
        return typeof r.constructor == "function" && !fl(r) ? yr($l(r)) : {};
      }
      function Wd(r, o, s) {
        var m = r.constructor;
        switch (o) {
          case $t:
            return Gf(r);
          case Xe:
          case ae:
            return new m(+r);
          case yt:
            return xd(r, s);
          case St:
          case en:
          case Nn:
          case tn:
          case ln:
          case Jn:
          case cn:
          case Mn:
          case on:
            return Ts(r, s);
          case ye:
            return new m();
          case He:
          case xt:
            return new m(r);
          case le:
            return Md(r);
          case Me:
            return new m();
          case Mt:
            return Td(r);
        }
      }
      function Bd(r, o) {
        var s = o.length;
        if (!s)
          return r;
        var m = s - 1;
        return o[m] = (s > 1 ? "& " : "") + o[m], o = o.join(s > 2 ? ", " : " "), r.replace(si, `{
/* [wrapped with ` + o + `] */
`);
      }
      function Hd(r) {
        return Re(r) || Ki(r) || !!(ja && r && r[ja]);
      }
      function bi(r, o) {
        var s = typeof r;
        return o = o ?? A, !!o && (s == "number" || s != "symbol" && Ai.test(r)) && r > -1 && r % 1 == 0 && r < o;
      }
      function sn(r, o, s) {
        if (!kt(s))
          return !1;
        var m = typeof o;
        return (m == "number" ? yn(s) && bi(o, s.length) : m == "string" && o in s) ? ti(s[o], r) : !1;
      }
      function eu(r, o) {
        if (Re(r))
          return !1;
        var s = typeof r;
        return s == "number" || s == "symbol" || s == "boolean" || r == null || In(r) ? !0 : tt.test(r) || !V.test(r) || o != null && r in st(o);
      }
      function Yd(r) {
        var o = typeof r;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? r !== "__proto__" : r === null;
      }
      function tu(r) {
        var o = wo(r), s = k[o];
        if (typeof s != "function" || !(o in Ye.prototype))
          return !1;
        if (r === s)
          return !0;
        var m = Qf(s);
        return !!m && r === m[0];
      }
      function Xd(r) {
        return !!Xa && Xa in r;
      }
      var qd = jl ? wi : bu;
      function fl(r) {
        var o = r && r.constructor, s = typeof o == "function" && o.prototype || gr;
        return r === s;
      }
      function Xs(r) {
        return r === r && !kt(r);
      }
      function qs(r, o) {
        return function(s) {
          return s == null ? !1 : s[r] === o && (o !== n || r in st(s));
        };
      }
      function Gd(r) {
        var o = To(r, function(m) {
          return s.size === c && s.clear(), m;
        }), s = o.cache;
        return o;
      }
      function Zd(r, o) {
        var s = r[1], m = o[1], b = s | m, T = b < (x | M | B), L = m == B && s == C || m == B && s == D && r[7].length <= o[8] || m == (B | D) && o[7].length <= o[8] && s == C;
        if (!(T || L))
          return r;
        m & x && (r[2] = o[2], b |= s & x ? 0 : z);
        var I = o[3];
        if (I) {
          var F = r[3];
          r[3] = F ? zs(F, I, o[4]) : I, r[4] = F ? Ei(r[3], d) : o[4];
        }
        return I = o[5], I && (F = r[5], r[5] = F ? As(F, I, o[6]) : I, r[6] = F ? Ei(r[5], d) : o[6]), I = o[7], I && (r[7] = I), m & B && (r[8] = r[8] == null ? o[8] : nn(r[8], o[8])), r[9] == null && (r[9] = o[9]), r[0] = o[0], r[1] = b, r;
      }
      function jd(r) {
        var o = [];
        if (r != null)
          for (var s in st(r))
            o.push(s);
        return o;
      }
      function Kd(r) {
        return Jl.call(r);
      }
      function Gs(r, o, s) {
        return o = Bt(o === n ? r.length - 1 : o, 0), function() {
          for (var m = arguments, b = -1, T = Bt(m.length - o, 0), L = G(T); ++b < T; )
            L[b] = m[o + b];
          b = -1;
          for (var I = G(o + 1); ++b < o; )
            I[b] = m[b];
          return I[o] = s(L), Ln(r, this, I);
        };
      }
      function Zs(r, o) {
        return o.length < 2 ? r : Gi(r, qn(o, 0, -1));
      }
      function Jd(r, o) {
        for (var s = r.length, m = nn(o.length, s), b = mn(r); m--; ) {
          var T = o[m];
          r[m] = bi(T, s) ? b[T] : n;
        }
        return r;
      }
      function nu(r, o) {
        if (!(o === "constructor" && typeof r[o] == "function") && o != "__proto__")
          return r[o];
      }
      var js = Js(ys), ul = _g || function(r, o) {
        return Jt.setTimeout(r, o);
      }, iu = Js(wd);
      function Ks(r, o, s) {
        var m = o + "";
        return iu(r, Bd(m, Qd(Pd(m), s)));
      }
      function Js(r) {
        var o = 0, s = 0;
        return function() {
          var m = dg(), b = ce - (m - s);
          if (s = m, b > 0) {
            if (++o >= se)
              return arguments[0];
          } else
            o = 0;
          return r.apply(n, arguments);
        };
      }
      function vo(r, o) {
        var s = -1, m = r.length, b = m - 1;
        for (o = o === n ? m : o; ++s < o; ) {
          var T = Ff(s, b), L = r[T];
          r[T] = r[s], r[s] = L;
        }
        return r.length = o, r;
      }
      var Qs = Gd(function(r) {
        var o = [];
        return r.charCodeAt(0) === 46 && o.push(""), r.replace(Ct, function(s, m, b, T) {
          o.push(b ? T.replace(qr, "$1") : m || s);
        }), o;
      });
      function fi(r) {
        if (typeof r == "string" || In(r))
          return r;
        var o = r + "";
        return o == "0" && 1 / r == -H ? "-0" : o;
      }
      function ji(r) {
        if (r != null) {
          try {
            return Kl.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function Qd(r, o) {
        return Bn(Je, function(s) {
          var m = "_." + s[0];
          o & s[1] && !Xl(r, m) && r.push(m);
        }), r.sort();
      }
      function Vs(r) {
        if (r instanceof Ye)
          return r.clone();
        var o = new Yn(r.__wrapped__, r.__chain__);
        return o.__actions__ = mn(r.__actions__), o.__index__ = r.__index__, o.__values__ = r.__values__, o;
      }
      function Vd(r, o, s) {
        (s ? sn(r, o, s) : o === n) ? o = 1 : o = Bt(Ie(o), 0);
        var m = r == null ? 0 : r.length;
        if (!m || o < 1)
          return [];
        for (var b = 0, T = 0, L = G(no(m / o)); b < m; )
          L[T++] = qn(r, b, b += o);
        return L;
      }
      function $d(r) {
        for (var o = -1, s = r == null ? 0 : r.length, m = 0, b = []; ++o < s; ) {
          var T = r[o];
          T && (b[m++] = T);
        }
        return b;
      }
      function em() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var o = G(r - 1), s = arguments[0], m = r; m--; )
          o[m - 1] = arguments[m];
        return Li(Re(s) ? mn(s) : [s], Qt(o, 1));
      }
      var tm = Ne(function(r, o) {
        return Dt(r) ? nl(r, Qt(o, 1, Dt, !0)) : [];
      }), nm = Ne(function(r, o) {
        var s = Gn(o);
        return Dt(s) && (s = n), Dt(r) ? nl(r, Qt(o, 1, Dt, !0), xe(s, 2)) : [];
      }), im = Ne(function(r, o) {
        var s = Gn(o);
        return Dt(s) && (s = n), Dt(r) ? nl(r, Qt(o, 1, Dt, !0), n, s) : [];
      });
      function rm(r, o, s) {
        var m = r == null ? 0 : r.length;
        return m ? (o = s || o === n ? 1 : Ie(o), qn(r, o < 0 ? 0 : o, m)) : [];
      }
      function lm(r, o, s) {
        var m = r == null ? 0 : r.length;
        return m ? (o = s || o === n ? 1 : Ie(o), o = m - o, qn(r, 0, o < 0 ? 0 : o)) : [];
      }
      function om(r, o) {
        return r && r.length ? ho(r, xe(o, 3), !0, !0) : [];
      }
      function fm(r, o) {
        return r && r.length ? ho(r, xe(o, 3), !0) : [];
      }
      function um(r, o, s, m) {
        var b = r == null ? 0 : r.length;
        return b ? (s && typeof s != "number" && sn(r, o, s) && (s = 0, m = b), ed(r, o, s, m)) : [];
      }
      function $s(r, o, s) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var b = s == null ? 0 : Ie(s);
        return b < 0 && (b = Bt(m + b, 0)), ql(r, xe(o, 3), b);
      }
      function e_(r, o, s) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var b = m - 1;
        return s !== n && (b = Ie(s), b = s < 0 ? Bt(m + b, 0) : nn(b, m - 1)), ql(r, xe(o, 3), b, !0);
      }
      function t_(r) {
        var o = r == null ? 0 : r.length;
        return o ? Qt(r, 1) : [];
      }
      function am(r) {
        var o = r == null ? 0 : r.length;
        return o ? Qt(r, H) : [];
      }
      function sm(r, o) {
        var s = r == null ? 0 : r.length;
        return s ? (o = o === n ? 1 : Ie(o), Qt(r, o)) : [];
      }
      function _m(r) {
        for (var o = -1, s = r == null ? 0 : r.length, m = {}; ++o < s; ) {
          var b = r[o];
          m[b[0]] = b[1];
        }
        return m;
      }
      function n_(r) {
        return r && r.length ? r[0] : n;
      }
      function hm(r, o, s) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var b = s == null ? 0 : Ie(s);
        return b < 0 && (b = Bt(m + b, 0)), sr(r, o, b);
      }
      function cm(r) {
        var o = r == null ? 0 : r.length;
        return o ? qn(r, 0, -1) : [];
      }
      var gm = Ne(function(r) {
        var o = bt(r, Xf);
        return o.length && o[0] === r[0] ? Of(o) : [];
      }), dm = Ne(function(r) {
        var o = Gn(r), s = bt(r, Xf);
        return o === Gn(s) ? o = n : s.pop(), s.length && s[0] === r[0] ? Of(s, xe(o, 2)) : [];
      }), mm = Ne(function(r) {
        var o = Gn(r), s = bt(r, Xf);
        return o = typeof o == "function" ? o : n, o && s.pop(), s.length && s[0] === r[0] ? Of(s, n, o) : [];
      });
      function ym(r, o) {
        return r == null ? "" : cg.call(r, o);
      }
      function Gn(r) {
        var o = r == null ? 0 : r.length;
        return o ? r[o - 1] : n;
      }
      function bm(r, o, s) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var b = m;
        return s !== n && (b = Ie(s), b = b < 0 ? Bt(m + b, 0) : nn(b, m - 1)), o === o ? Q0(r, o, b) : ql(r, Na, b, !0);
      }
      function wm(r, o) {
        return r && r.length ? cs(r, Ie(o)) : n;
      }
      var pm = Ne(i_);
      function i_(r, o) {
        return r && r.length && o && o.length ? Pf(r, o) : r;
      }
      function vm(r, o, s) {
        return r && r.length && o && o.length ? Pf(r, o, xe(s, 2)) : r;
      }
      function km(r, o, s) {
        return r && r.length && o && o.length ? Pf(r, o, n, s) : r;
      }
      var xm = yi(function(r, o) {
        var s = r == null ? 0 : r.length, m = Lf(r, o);
        return ms(r, bt(o, function(b) {
          return bi(b, s) ? +b : b;
        }).sort(Ss)), m;
      });
      function Mm(r, o) {
        var s = [];
        if (!(r && r.length))
          return s;
        var m = -1, b = [], T = r.length;
        for (o = xe(o, 3); ++m < T; ) {
          var L = r[m];
          o(L, m, r) && (s.push(L), b.push(m));
        }
        return ms(r, b), s;
      }
      function ru(r) {
        return r == null ? r : yg.call(r);
      }
      function Tm(r, o, s) {
        var m = r == null ? 0 : r.length;
        return m ? (s && typeof s != "number" && sn(r, o, s) ? (o = 0, s = m) : (o = o == null ? 0 : Ie(o), s = s === n ? m : Ie(s)), qn(r, o, s)) : [];
      }
      function Sm(r, o) {
        return _o(r, o);
      }
      function zm(r, o, s) {
        return Bf(r, o, xe(s, 2));
      }
      function Am(r, o) {
        var s = r == null ? 0 : r.length;
        if (s) {
          var m = _o(r, o);
          if (m < s && ti(r[m], o))
            return m;
        }
        return -1;
      }
      function Cm(r, o) {
        return _o(r, o, !0);
      }
      function Lm(r, o, s) {
        return Bf(r, o, xe(s, 2), !0);
      }
      function Em(r, o) {
        var s = r == null ? 0 : r.length;
        if (s) {
          var m = _o(r, o, !0) - 1;
          if (ti(r[m], o))
            return m;
        }
        return -1;
      }
      function Rm(r) {
        return r && r.length ? bs(r) : [];
      }
      function Im(r, o) {
        return r && r.length ? bs(r, xe(o, 2)) : [];
      }
      function Om(r) {
        var o = r == null ? 0 : r.length;
        return o ? qn(r, 1, o) : [];
      }
      function Dm(r, o, s) {
        return r && r.length ? (o = s || o === n ? 1 : Ie(o), qn(r, 0, o < 0 ? 0 : o)) : [];
      }
      function Nm(r, o, s) {
        var m = r == null ? 0 : r.length;
        return m ? (o = s || o === n ? 1 : Ie(o), o = m - o, qn(r, o < 0 ? 0 : o, m)) : [];
      }
      function Um(r, o) {
        return r && r.length ? ho(r, xe(o, 3), !1, !0) : [];
      }
      function Pm(r, o) {
        return r && r.length ? ho(r, xe(o, 3)) : [];
      }
      var Fm = Ne(function(r) {
        return Oi(Qt(r, 1, Dt, !0));
      }), Wm = Ne(function(r) {
        var o = Gn(r);
        return Dt(o) && (o = n), Oi(Qt(r, 1, Dt, !0), xe(o, 2));
      }), Bm = Ne(function(r) {
        var o = Gn(r);
        return o = typeof o == "function" ? o : n, Oi(Qt(r, 1, Dt, !0), n, o);
      });
      function Hm(r) {
        return r && r.length ? Oi(r) : [];
      }
      function Ym(r, o) {
        return r && r.length ? Oi(r, xe(o, 2)) : [];
      }
      function Xm(r, o) {
        return o = typeof o == "function" ? o : n, r && r.length ? Oi(r, n, o) : [];
      }
      function lu(r) {
        if (!(r && r.length))
          return [];
        var o = 0;
        return r = Ci(r, function(s) {
          if (Dt(s))
            return o = Bt(s.length, o), !0;
        }), kf(o, function(s) {
          return bt(r, wf(s));
        });
      }
      function r_(r, o) {
        if (!(r && r.length))
          return [];
        var s = lu(r);
        return o == null ? s : bt(s, function(m) {
          return Ln(o, n, m);
        });
      }
      var qm = Ne(function(r, o) {
        return Dt(r) ? nl(r, o) : [];
      }), Gm = Ne(function(r) {
        return Yf(Ci(r, Dt));
      }), Zm = Ne(function(r) {
        var o = Gn(r);
        return Dt(o) && (o = n), Yf(Ci(r, Dt), xe(o, 2));
      }), jm = Ne(function(r) {
        var o = Gn(r);
        return o = typeof o == "function" ? o : n, Yf(Ci(r, Dt), n, o);
      }), Km = Ne(lu);
      function Jm(r, o) {
        return ks(r || [], o || [], tl);
      }
      function Qm(r, o) {
        return ks(r || [], o || [], ll);
      }
      var Vm = Ne(function(r) {
        var o = r.length, s = o > 1 ? r[o - 1] : n;
        return s = typeof s == "function" ? (r.pop(), s) : n, r_(r, s);
      });
      function l_(r) {
        var o = k(r);
        return o.__chain__ = !0, o;
      }
      function $m(r, o) {
        return o(r), r;
      }
      function ko(r, o) {
        return o(r);
      }
      var e2 = yi(function(r) {
        var o = r.length, s = o ? r[0] : 0, m = this.__wrapped__, b = function(T) {
          return Lf(T, r);
        };
        return o > 1 || this.__actions__.length || !(m instanceof Ye) || !bi(s) ? this.thru(b) : (m = m.slice(s, +s + (o ? 1 : 0)), m.__actions__.push({
          func: ko,
          args: [b],
          thisArg: n
        }), new Yn(m, this.__chain__).thru(function(T) {
          return o && !T.length && T.push(n), T;
        }));
      });
      function t2() {
        return l_(this);
      }
      function n2() {
        return new Yn(this.value(), this.__chain__);
      }
      function i2() {
        this.__values__ === n && (this.__values__ = w_(this.value()));
        var r = this.__index__ >= this.__values__.length, o = r ? n : this.__values__[this.__index__++];
        return { done: r, value: o };
      }
      function r2() {
        return this;
      }
      function l2(r) {
        for (var o, s = this; s instanceof oo; ) {
          var m = Vs(s);
          m.__index__ = 0, m.__values__ = n, o ? b.__wrapped__ = m : o = m;
          var b = m;
          s = s.__wrapped__;
        }
        return b.__wrapped__ = r, o;
      }
      function o2() {
        var r = this.__wrapped__;
        if (r instanceof Ye) {
          var o = r;
          return this.__actions__.length && (o = new Ye(this)), o = o.reverse(), o.__actions__.push({
            func: ko,
            args: [ru],
            thisArg: n
          }), new Yn(o, this.__chain__);
        }
        return this.thru(ru);
      }
      function f2() {
        return vs(this.__wrapped__, this.__actions__);
      }
      var u2 = co(function(r, o, s) {
        ft.call(r, s) ? ++r[s] : di(r, s, 1);
      });
      function a2(r, o, s) {
        var m = Re(r) ? Oa : $g;
        return s && sn(r, o, s) && (o = n), m(r, xe(o, 3));
      }
      function s2(r, o) {
        var s = Re(r) ? Ci : rs;
        return s(r, xe(o, 3));
      }
      var _2 = Rs($s), h2 = Rs(e_);
      function c2(r, o) {
        return Qt(xo(r, o), 1);
      }
      function g2(r, o) {
        return Qt(xo(r, o), H);
      }
      function d2(r, o, s) {
        return s = s === n ? 1 : Ie(s), Qt(xo(r, o), s);
      }
      function o_(r, o) {
        var s = Re(r) ? Bn : Ii;
        return s(r, xe(o, 3));
      }
      function f_(r, o) {
        var s = Re(r) ? O0 : is;
        return s(r, xe(o, 3));
      }
      var m2 = co(function(r, o, s) {
        ft.call(r, s) ? r[s].push(o) : di(r, s, [o]);
      });
      function y2(r, o, s, m) {
        r = yn(r) ? r : kr(r), s = s && !m ? Ie(s) : 0;
        var b = r.length;
        return s < 0 && (s = Bt(b + s, 0)), Ao(r) ? s <= b && r.indexOf(o, s) > -1 : !!b && sr(r, o, s) > -1;
      }
      var b2 = Ne(function(r, o, s) {
        var m = -1, b = typeof o == "function", T = yn(r) ? G(r.length) : [];
        return Ii(r, function(L) {
          T[++m] = b ? Ln(o, L, s) : il(L, o, s);
        }), T;
      }), w2 = co(function(r, o, s) {
        di(r, s, o);
      });
      function xo(r, o) {
        var s = Re(r) ? bt : ss;
        return s(r, xe(o, 3));
      }
      function p2(r, o, s, m) {
        return r == null ? [] : (Re(o) || (o = o == null ? [] : [o]), s = m ? n : s, Re(s) || (s = s == null ? [] : [s]), gs(r, o, s));
      }
      var v2 = co(function(r, o, s) {
        r[s ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function k2(r, o, s) {
        var m = Re(r) ? yf : Pa, b = arguments.length < 3;
        return m(r, xe(o, 4), s, b, Ii);
      }
      function x2(r, o, s) {
        var m = Re(r) ? D0 : Pa, b = arguments.length < 3;
        return m(r, xe(o, 4), s, b, is);
      }
      function M2(r, o) {
        var s = Re(r) ? Ci : rs;
        return s(r, So(xe(o, 3)));
      }
      function T2(r) {
        var o = Re(r) ? $a : yd;
        return o(r);
      }
      function S2(r, o, s) {
        (s ? sn(r, o, s) : o === n) ? o = 1 : o = Ie(o);
        var m = Re(r) ? jg : bd;
        return m(r, o);
      }
      function z2(r) {
        var o = Re(r) ? Kg : pd;
        return o(r);
      }
      function A2(r) {
        if (r == null)
          return 0;
        if (yn(r))
          return Ao(r) ? hr(r) : r.length;
        var o = rn(r);
        return o == ye || o == Me ? r.size : Nf(r).length;
      }
      function C2(r, o, s) {
        var m = Re(r) ? bf : vd;
        return s && sn(r, o, s) && (o = n), m(r, xe(o, 3));
      }
      var L2 = Ne(function(r, o) {
        if (r == null)
          return [];
        var s = o.length;
        return s > 1 && sn(r, o[0], o[1]) ? o = [] : s > 2 && sn(o[0], o[1], o[2]) && (o = [o[0]]), gs(r, Qt(o, 1), []);
      }), Mo = sg || function() {
        return Jt.Date.now();
      };
      function E2(r, o) {
        if (typeof o != "function")
          throw new Hn(u);
        return r = Ie(r), function() {
          if (--r < 1)
            return o.apply(this, arguments);
        };
      }
      function u_(r, o, s) {
        return o = s ? n : o, o = r && o == null ? r.length : o, mi(r, B, n, n, n, n, o);
      }
      function a_(r, o) {
        var s;
        if (typeof o != "function")
          throw new Hn(u);
        return r = Ie(r), function() {
          return --r > 0 && (s = o.apply(this, arguments)), r <= 1 && (o = n), s;
        };
      }
      var ou = Ne(function(r, o, s) {
        var m = x;
        if (s.length) {
          var b = Ei(s, pr(ou));
          m |= O;
        }
        return mi(r, m, o, s, b);
      }), s_ = Ne(function(r, o, s) {
        var m = x | M;
        if (s.length) {
          var b = Ei(s, pr(s_));
          m |= O;
        }
        return mi(o, m, r, s, b);
      });
      function __(r, o, s) {
        o = s ? n : o;
        var m = mi(r, C, n, n, n, n, n, o);
        return m.placeholder = __.placeholder, m;
      }
      function h_(r, o, s) {
        o = s ? n : o;
        var m = mi(r, P, n, n, n, n, n, o);
        return m.placeholder = h_.placeholder, m;
      }
      function c_(r, o, s) {
        var m, b, T, L, I, F, ne = 0, ie = !1, oe = !1, ge = !0;
        if (typeof r != "function")
          throw new Hn(u);
        o = Zn(o) || 0, kt(s) && (ie = !!s.leading, oe = "maxWait" in s, T = oe ? Bt(Zn(s.maxWait) || 0, o) : T, ge = "trailing" in s ? !!s.trailing : ge);
        function pe(Nt) {
          var ni = m, vi = b;
          return m = b = n, ne = Nt, L = r.apply(vi, ni), L;
        }
        function Te(Nt) {
          return ne = Nt, I = ul(Fe, o), ie ? pe(Nt) : L;
        }
        function De(Nt) {
          var ni = Nt - F, vi = Nt - ne, R_ = o - ni;
          return oe ? nn(R_, T - vi) : R_;
        }
        function Se(Nt) {
          var ni = Nt - F, vi = Nt - ne;
          return F === n || ni >= o || ni < 0 || oe && vi >= T;
        }
        function Fe() {
          var Nt = Mo();
          if (Se(Nt))
            return Ge(Nt);
          I = ul(Fe, De(Nt));
        }
        function Ge(Nt) {
          return I = n, ge && m ? pe(Nt) : (m = b = n, L);
        }
        function On() {
          I !== n && xs(I), ne = 0, m = F = b = I = n;
        }
        function _n() {
          return I === n ? L : Ge(Mo());
        }
        function Dn() {
          var Nt = Mo(), ni = Se(Nt);
          if (m = arguments, b = this, F = Nt, ni) {
            if (I === n)
              return Te(F);
            if (oe)
              return xs(I), I = ul(Fe, o), pe(F);
          }
          return I === n && (I = ul(Fe, o)), L;
        }
        return Dn.cancel = On, Dn.flush = _n, Dn;
      }
      var R2 = Ne(function(r, o) {
        return ns(r, 1, o);
      }), I2 = Ne(function(r, o, s) {
        return ns(r, Zn(o) || 0, s);
      });
      function O2(r) {
        return mi(r, te);
      }
      function To(r, o) {
        if (typeof r != "function" || o != null && typeof o != "function")
          throw new Hn(u);
        var s = function() {
          var m = arguments, b = o ? o.apply(this, m) : m[0], T = s.cache;
          if (T.has(b))
            return T.get(b);
          var L = r.apply(this, m);
          return s.cache = T.set(b, L) || T, L;
        };
        return s.cache = new (To.Cache || gi)(), s;
      }
      To.Cache = gi;
      function So(r) {
        if (typeof r != "function")
          throw new Hn(u);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, o[0]);
            case 2:
              return !r.call(this, o[0], o[1]);
            case 3:
              return !r.call(this, o[0], o[1], o[2]);
          }
          return !r.apply(this, o);
        };
      }
      function D2(r) {
        return a_(2, r);
      }
      var N2 = kd(function(r, o) {
        o = o.length == 1 && Re(o[0]) ? bt(o[0], En(xe())) : bt(Qt(o, 1), En(xe()));
        var s = o.length;
        return Ne(function(m) {
          for (var b = -1, T = nn(m.length, s); ++b < T; )
            m[b] = o[b].call(this, m[b]);
          return Ln(r, this, m);
        });
      }), fu = Ne(function(r, o) {
        var s = Ei(o, pr(fu));
        return mi(r, O, n, o, s);
      }), g_ = Ne(function(r, o) {
        var s = Ei(o, pr(g_));
        return mi(r, E, n, o, s);
      }), U2 = yi(function(r, o) {
        return mi(r, D, n, n, n, o);
      });
      function P2(r, o) {
        if (typeof r != "function")
          throw new Hn(u);
        return o = o === n ? o : Ie(o), Ne(r, o);
      }
      function F2(r, o) {
        if (typeof r != "function")
          throw new Hn(u);
        return o = o == null ? 0 : Bt(Ie(o), 0), Ne(function(s) {
          var m = s[o], b = Ni(s, 0, o);
          return m && Li(b, m), Ln(r, this, b);
        });
      }
      function W2(r, o, s) {
        var m = !0, b = !0;
        if (typeof r != "function")
          throw new Hn(u);
        return kt(s) && (m = "leading" in s ? !!s.leading : m, b = "trailing" in s ? !!s.trailing : b), c_(r, o, {
          leading: m,
          maxWait: o,
          trailing: b
        });
      }
      function B2(r) {
        return u_(r, 1);
      }
      function H2(r, o) {
        return fu(qf(o), r);
      }
      function Y2() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return Re(r) ? r : [r];
      }
      function X2(r) {
        return Xn(r, w);
      }
      function q2(r, o) {
        return o = typeof o == "function" ? o : n, Xn(r, w, o);
      }
      function G2(r) {
        return Xn(r, h | w);
      }
      function Z2(r, o) {
        return o = typeof o == "function" ? o : n, Xn(r, h | w, o);
      }
      function j2(r, o) {
        return o == null || ts(r, o, qt(o));
      }
      function ti(r, o) {
        return r === o || r !== r && o !== o;
      }
      var K2 = bo(If), J2 = bo(function(r, o) {
        return r >= o;
      }), Ki = fs(function() {
        return arguments;
      }()) ? fs : function(r) {
        return Rt(r) && ft.call(r, "callee") && !Za.call(r, "callee");
      }, Re = G.isArray, Q2 = Aa ? En(Aa) : ld;
      function yn(r) {
        return r != null && zo(r.length) && !wi(r);
      }
      function Dt(r) {
        return Rt(r) && yn(r);
      }
      function V2(r) {
        return r === !0 || r === !1 || Rt(r) && an(r) == Xe;
      }
      var Ui = hg || bu, $2 = Ca ? En(Ca) : od;
      function ey(r) {
        return Rt(r) && r.nodeType === 1 && !al(r);
      }
      function ty(r) {
        if (r == null)
          return !0;
        if (yn(r) && (Re(r) || typeof r == "string" || typeof r.splice == "function" || Ui(r) || vr(r) || Ki(r)))
          return !r.length;
        var o = rn(r);
        if (o == ye || o == Me)
          return !r.size;
        if (fl(r))
          return !Nf(r).length;
        for (var s in r)
          if (ft.call(r, s))
            return !1;
        return !0;
      }
      function ny(r, o) {
        return rl(r, o);
      }
      function iy(r, o, s) {
        s = typeof s == "function" ? s : n;
        var m = s ? s(r, o) : n;
        return m === n ? rl(r, o, n, s) : !!m;
      }
      function uu(r) {
        if (!Rt(r))
          return !1;
        var o = an(r);
        return o == be || o == me || typeof r.message == "string" && typeof r.name == "string" && !al(r);
      }
      function ry(r) {
        return typeof r == "number" && Ka(r);
      }
      function wi(r) {
        if (!kt(r))
          return !1;
        var o = an(r);
        return o == Q || o == Ce || o == at || o == Y;
      }
      function d_(r) {
        return typeof r == "number" && r == Ie(r);
      }
      function zo(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= A;
      }
      function kt(r) {
        var o = typeof r;
        return r != null && (o == "object" || o == "function");
      }
      function Rt(r) {
        return r != null && typeof r == "object";
      }
      var m_ = La ? En(La) : ud;
      function ly(r, o) {
        return r === o || Df(r, o, Vf(o));
      }
      function oy(r, o, s) {
        return s = typeof s == "function" ? s : n, Df(r, o, Vf(o), s);
      }
      function fy(r) {
        return y_(r) && r != +r;
      }
      function uy(r) {
        if (qd(r))
          throw new Ee(f);
        return us(r);
      }
      function ay(r) {
        return r === null;
      }
      function sy(r) {
        return r == null;
      }
      function y_(r) {
        return typeof r == "number" || Rt(r) && an(r) == He;
      }
      function al(r) {
        if (!Rt(r) || an(r) != et)
          return !1;
        var o = $l(r);
        if (o === null)
          return !0;
        var s = ft.call(o, "constructor") && o.constructor;
        return typeof s == "function" && s instanceof s && Kl.call(s) == og;
      }
      var au = Ea ? En(Ea) : ad;
      function _y(r) {
        return d_(r) && r >= -A && r <= A;
      }
      var b_ = Ra ? En(Ra) : sd;
      function Ao(r) {
        return typeof r == "string" || !Re(r) && Rt(r) && an(r) == xt;
      }
      function In(r) {
        return typeof r == "symbol" || Rt(r) && an(r) == Mt;
      }
      var vr = Ia ? En(Ia) : _d;
      function hy(r) {
        return r === n;
      }
      function cy(r) {
        return Rt(r) && rn(r) == gt;
      }
      function gy(r) {
        return Rt(r) && an(r) == Tt;
      }
      var dy = bo(Uf), my = bo(function(r, o) {
        return r <= o;
      });
      function w_(r) {
        if (!r)
          return [];
        if (yn(r))
          return Ao(r) ? $n(r) : mn(r);
        if (Jr && r[Jr])
          return j0(r[Jr]());
        var o = rn(r), s = o == ye ? Mf : o == Me ? Gl : kr;
        return s(r);
      }
      function pi(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = Zn(r), r === H || r === -H) {
          var o = r < 0 ? -1 : 1;
          return o * R;
        }
        return r === r ? r : 0;
      }
      function Ie(r) {
        var o = pi(r), s = o % 1;
        return o === o ? s ? o - s : o : 0;
      }
      function p_(r) {
        return r ? qi(Ie(r), 0, he) : 0;
      }
      function Zn(r) {
        if (typeof r == "number")
          return r;
        if (In(r))
          return de;
        if (kt(r)) {
          var o = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = kt(o) ? o + "" : o;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = Fa(r);
        var s = Lt.test(r);
        return s || zi.test(r) ? E0(r.slice(2), s ? 2 : 8) : X.test(r) ? de : +r;
      }
      function v_(r) {
        return oi(r, bn(r));
      }
      function yy(r) {
        return r ? qi(Ie(r), -A, A) : r === 0 ? r : 0;
      }
      function lt(r) {
        return r == null ? "" : Rn(r);
      }
      var by = br(function(r, o) {
        if (fl(o) || yn(o)) {
          oi(o, qt(o), r);
          return;
        }
        for (var s in o)
          ft.call(o, s) && tl(r, s, o[s]);
      }), k_ = br(function(r, o) {
        oi(o, bn(o), r);
      }), Co = br(function(r, o, s, m) {
        oi(o, bn(o), r, m);
      }), wy = br(function(r, o, s, m) {
        oi(o, qt(o), r, m);
      }), py = yi(Lf);
      function vy(r, o) {
        var s = yr(r);
        return o == null ? s : es(s, o);
      }
      var ky = Ne(function(r, o) {
        r = st(r);
        var s = -1, m = o.length, b = m > 2 ? o[2] : n;
        for (b && sn(o[0], o[1], b) && (m = 1); ++s < m; )
          for (var T = o[s], L = bn(T), I = -1, F = L.length; ++I < F; ) {
            var ne = L[I], ie = r[ne];
            (ie === n || ti(ie, gr[ne]) && !ft.call(r, ne)) && (r[ne] = T[ne]);
          }
        return r;
      }), xy = Ne(function(r) {
        return r.push(n, Fs), Ln(x_, n, r);
      });
      function My(r, o) {
        return Da(r, xe(o, 3), li);
      }
      function Ty(r, o) {
        return Da(r, xe(o, 3), Rf);
      }
      function Sy(r, o) {
        return r == null ? r : Ef(r, xe(o, 3), bn);
      }
      function zy(r, o) {
        return r == null ? r : ls(r, xe(o, 3), bn);
      }
      function Ay(r, o) {
        return r && li(r, xe(o, 3));
      }
      function Cy(r, o) {
        return r && Rf(r, xe(o, 3));
      }
      function Ly(r) {
        return r == null ? [] : ao(r, qt(r));
      }
      function Ey(r) {
        return r == null ? [] : ao(r, bn(r));
      }
      function su(r, o, s) {
        var m = r == null ? n : Gi(r, o);
        return m === n ? s : m;
      }
      function Ry(r, o) {
        return r != null && Hs(r, o, td);
      }
      function _u(r, o) {
        return r != null && Hs(r, o, nd);
      }
      var Iy = Os(function(r, o, s) {
        o != null && typeof o.toString != "function" && (o = Jl.call(o)), r[o] = s;
      }, cu(wn)), Oy = Os(function(r, o, s) {
        o != null && typeof o.toString != "function" && (o = Jl.call(o)), ft.call(r, o) ? r[o].push(s) : r[o] = [s];
      }, xe), Dy = Ne(il);
      function qt(r) {
        return yn(r) ? Va(r) : Nf(r);
      }
      function bn(r) {
        return yn(r) ? Va(r, !0) : hd(r);
      }
      function Ny(r, o) {
        var s = {};
        return o = xe(o, 3), li(r, function(m, b, T) {
          di(s, o(m, b, T), m);
        }), s;
      }
      function Uy(r, o) {
        var s = {};
        return o = xe(o, 3), li(r, function(m, b, T) {
          di(s, b, o(m, b, T));
        }), s;
      }
      var Py = br(function(r, o, s) {
        so(r, o, s);
      }), x_ = br(function(r, o, s, m) {
        so(r, o, s, m);
      }), Fy = yi(function(r, o) {
        var s = {};
        if (r == null)
          return s;
        var m = !1;
        o = bt(o, function(T) {
          return T = Di(T, r), m || (m = T.length > 1), T;
        }), oi(r, Jf(r), s), m && (s = Xn(s, h | g | w, Id));
        for (var b = o.length; b--; )
          Hf(s, o[b]);
        return s;
      });
      function Wy(r, o) {
        return M_(r, So(xe(o)));
      }
      var By = yi(function(r, o) {
        return r == null ? {} : gd(r, o);
      });
      function M_(r, o) {
        if (r == null)
          return {};
        var s = bt(Jf(r), function(m) {
          return [m];
        });
        return o = xe(o), ds(r, s, function(m, b) {
          return o(m, b[0]);
        });
      }
      function Hy(r, o, s) {
        o = Di(o, r);
        var m = -1, b = o.length;
        for (b || (b = 1, r = n); ++m < b; ) {
          var T = r == null ? n : r[fi(o[m])];
          T === n && (m = b, T = s), r = wi(T) ? T.call(r) : T;
        }
        return r;
      }
      function Yy(r, o, s) {
        return r == null ? r : ll(r, o, s);
      }
      function Xy(r, o, s, m) {
        return m = typeof m == "function" ? m : n, r == null ? r : ll(r, o, s, m);
      }
      var T_ = Us(qt), S_ = Us(bn);
      function qy(r, o, s) {
        var m = Re(r), b = m || Ui(r) || vr(r);
        if (o = xe(o, 4), s == null) {
          var T = r && r.constructor;
          b ? s = m ? new T() : [] : kt(r) ? s = wi(T) ? yr($l(r)) : {} : s = {};
        }
        return (b ? Bn : li)(r, function(L, I, F) {
          return o(s, L, I, F);
        }), s;
      }
      function Gy(r, o) {
        return r == null ? !0 : Hf(r, o);
      }
      function Zy(r, o, s) {
        return r == null ? r : ps(r, o, qf(s));
      }
      function jy(r, o, s, m) {
        return m = typeof m == "function" ? m : n, r == null ? r : ps(r, o, qf(s), m);
      }
      function kr(r) {
        return r == null ? [] : xf(r, qt(r));
      }
      function Ky(r) {
        return r == null ? [] : xf(r, bn(r));
      }
      function Jy(r, o, s) {
        return s === n && (s = o, o = n), s !== n && (s = Zn(s), s = s === s ? s : 0), o !== n && (o = Zn(o), o = o === o ? o : 0), qi(Zn(r), o, s);
      }
      function Qy(r, o, s) {
        return o = pi(o), s === n ? (s = o, o = 0) : s = pi(s), r = Zn(r), id(r, o, s);
      }
      function Vy(r, o, s) {
        if (s && typeof s != "boolean" && sn(r, o, s) && (o = s = n), s === n && (typeof o == "boolean" ? (s = o, o = n) : typeof r == "boolean" && (s = r, r = n)), r === n && o === n ? (r = 0, o = 1) : (r = pi(r), o === n ? (o = r, r = 0) : o = pi(o)), r > o) {
          var m = r;
          r = o, o = m;
        }
        if (s || r % 1 || o % 1) {
          var b = Ja();
          return nn(r + b * (o - r + L0("1e-" + ((b + "").length - 1))), o);
        }
        return Ff(r, o);
      }
      var $y = wr(function(r, o, s) {
        return o = o.toLowerCase(), r + (s ? z_(o) : o);
      });
      function z_(r) {
        return hu(lt(r).toLowerCase());
      }
      function A_(r) {
        return r = lt(r), r && r.replace(ur, Y0).replace(p0, "");
      }
      function eb(r, o, s) {
        r = lt(r), o = Rn(o);
        var m = r.length;
        s = s === n ? m : qi(Ie(s), 0, m);
        var b = s;
        return s -= o.length, s >= 0 && r.slice(s, b) == o;
      }
      function tb(r) {
        return r = lt(r), r && zn.test(r) ? r.replace(At, X0) : r;
      }
      function nb(r) {
        return r = lt(r), r && un.test(r) ? r.replace(fn, "\\$&") : r;
      }
      var ib = wr(function(r, o, s) {
        return r + (s ? "-" : "") + o.toLowerCase();
      }), rb = wr(function(r, o, s) {
        return r + (s ? " " : "") + o.toLowerCase();
      }), lb = Es("toLowerCase");
      function ob(r, o, s) {
        r = lt(r), o = Ie(o);
        var m = o ? hr(r) : 0;
        if (!o || m >= o)
          return r;
        var b = (o - m) / 2;
        return yo(io(b), s) + r + yo(no(b), s);
      }
      function fb(r, o, s) {
        r = lt(r), o = Ie(o);
        var m = o ? hr(r) : 0;
        return o && m < o ? r + yo(o - m, s) : r;
      }
      function ub(r, o, s) {
        r = lt(r), o = Ie(o);
        var m = o ? hr(r) : 0;
        return o && m < o ? yo(o - m, s) + r : r;
      }
      function ab(r, o, s) {
        return s || o == null ? o = 0 : o && (o = +o), mg(lt(r).replace(Pn, ""), o || 0);
      }
      function sb(r, o, s) {
        return (s ? sn(r, o, s) : o === n) ? o = 1 : o = Ie(o), Wf(lt(r), o);
      }
      function _b() {
        var r = arguments, o = lt(r[0]);
        return r.length < 3 ? o : o.replace(r[1], r[2]);
      }
      var hb = wr(function(r, o, s) {
        return r + (s ? "_" : "") + o.toLowerCase();
      });
      function cb(r, o, s) {
        return s && typeof s != "number" && sn(r, o, s) && (o = s = n), s = s === n ? he : s >>> 0, s ? (r = lt(r), r && (typeof o == "string" || o != null && !au(o)) && (o = Rn(o), !o && _r(r)) ? Ni($n(r), 0, s) : r.split(o, s)) : [];
      }
      var gb = wr(function(r, o, s) {
        return r + (s ? " " : "") + hu(o);
      });
      function db(r, o, s) {
        return r = lt(r), s = s == null ? 0 : qi(Ie(s), 0, r.length), o = Rn(o), r.slice(s, s + o.length) == o;
      }
      function mb(r, o, s) {
        var m = k.templateSettings;
        s && sn(r, o, s) && (o = n), r = lt(r), o = Co({}, o, m, Ps);
        var b = Co({}, o.imports, m.imports, Ps), T = qt(b), L = xf(b, T), I, F, ne = 0, ie = o.interpolate || Fn, oe = "__p += '", ge = Tf(
          (o.escape || Fn).source + "|" + ie.source + "|" + (ie === An ? Cn : Fn).source + "|" + (o.evaluate || Fn).source + "|$",
          "g"
        ), pe = "//# sourceURL=" + (ft.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++T0 + "]") + `
`;
        r.replace(ge, function(Se, Fe, Ge, On, _n, Dn) {
          return Ge || (Ge = On), oe += r.slice(ne, Dn).replace(_i, q0), Fe && (I = !0, oe += `' +
__e(` + Fe + `) +
'`), _n && (F = !0, oe += `';
` + _n + `;
__p += '`), Ge && (oe += `' +
((__t = (` + Ge + `)) == null ? '' : __t) +
'`), ne = Dn + Se.length, Se;
        }), oe += `';
`;
        var Te = ft.call(o, "variable") && o.variable;
        if (!Te)
          oe = `with (obj) {
` + oe + `
}
`;
        else if (Xr.test(Te))
          throw new Ee(a);
        oe = (F ? oe.replace(Tn, "") : oe).replace(zt, "$1").replace(Un, "$1;"), oe = "function(" + (Te || "obj") + `) {
` + (Te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (I ? ", __e = _.escape" : "") + (F ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + oe + `return __p
}`;
        var De = L_(function() {
          return nt(T, pe + "return " + oe).apply(n, L);
        });
        if (De.source = oe, uu(De))
          throw De;
        return De;
      }
      function yb(r) {
        return lt(r).toLowerCase();
      }
      function bb(r) {
        return lt(r).toUpperCase();
      }
      function wb(r, o, s) {
        if (r = lt(r), r && (s || o === n))
          return Fa(r);
        if (!r || !(o = Rn(o)))
          return r;
        var m = $n(r), b = $n(o), T = Wa(m, b), L = Ba(m, b) + 1;
        return Ni(m, T, L).join("");
      }
      function pb(r, o, s) {
        if (r = lt(r), r && (s || o === n))
          return r.slice(0, Ya(r) + 1);
        if (!r || !(o = Rn(o)))
          return r;
        var m = $n(r), b = Ba(m, $n(o)) + 1;
        return Ni(m, 0, b).join("");
      }
      function vb(r, o, s) {
        if (r = lt(r), r && (s || o === n))
          return r.replace(Pn, "");
        if (!r || !(o = Rn(o)))
          return r;
        var m = $n(r), b = Wa(m, $n(o));
        return Ni(m, b).join("");
      }
      function kb(r, o) {
        var s = W, m = K;
        if (kt(o)) {
          var b = "separator" in o ? o.separator : b;
          s = "length" in o ? Ie(o.length) : s, m = "omission" in o ? Rn(o.omission) : m;
        }
        r = lt(r);
        var T = r.length;
        if (_r(r)) {
          var L = $n(r);
          T = L.length;
        }
        if (s >= T)
          return r;
        var I = s - hr(m);
        if (I < 1)
          return m;
        var F = L ? Ni(L, 0, I).join("") : r.slice(0, I);
        if (b === n)
          return F + m;
        if (L && (I += F.length - I), au(b)) {
          if (r.slice(I).search(b)) {
            var ne, ie = F;
            for (b.global || (b = Tf(b.source, lt(dn.exec(b)) + "g")), b.lastIndex = 0; ne = b.exec(ie); )
              var oe = ne.index;
            F = F.slice(0, oe === n ? I : oe);
          }
        } else if (r.indexOf(Rn(b), I) != I) {
          var ge = F.lastIndexOf(b);
          ge > -1 && (F = F.slice(0, ge));
        }
        return F + m;
      }
      function xb(r) {
        return r = lt(r), r && Sn.test(r) ? r.replace(gn, V0) : r;
      }
      var Mb = wr(function(r, o, s) {
        return r + (s ? " " : "") + o.toUpperCase();
      }), hu = Es("toUpperCase");
      function C_(r, o, s) {
        return r = lt(r), o = s ? n : o, o === n ? Z0(r) ? tg(r) : P0(r) : r.match(o) || [];
      }
      var L_ = Ne(function(r, o) {
        try {
          return Ln(r, n, o);
        } catch (s) {
          return uu(s) ? s : new Ee(s);
        }
      }), Tb = yi(function(r, o) {
        return Bn(o, function(s) {
          s = fi(s), di(r, s, ou(r[s], r));
        }), r;
      });
      function Sb(r) {
        var o = r == null ? 0 : r.length, s = xe();
        return r = o ? bt(r, function(m) {
          if (typeof m[1] != "function")
            throw new Hn(u);
          return [s(m[0]), m[1]];
        }) : [], Ne(function(m) {
          for (var b = -1; ++b < o; ) {
            var T = r[b];
            if (Ln(T[0], this, m))
              return Ln(T[1], this, m);
          }
        });
      }
      function zb(r) {
        return Vg(Xn(r, h));
      }
      function cu(r) {
        return function() {
          return r;
        };
      }
      function Ab(r, o) {
        return r == null || r !== r ? o : r;
      }
      var Cb = Is(), Lb = Is(!0);
      function wn(r) {
        return r;
      }
      function gu(r) {
        return as(typeof r == "function" ? r : Xn(r, h));
      }
      function Eb(r) {
        return _s(Xn(r, h));
      }
      function Rb(r, o) {
        return hs(r, Xn(o, h));
      }
      var Ib = Ne(function(r, o) {
        return function(s) {
          return il(s, r, o);
        };
      }), Ob = Ne(function(r, o) {
        return function(s) {
          return il(r, s, o);
        };
      });
      function du(r, o, s) {
        var m = qt(o), b = ao(o, m);
        s == null && !(kt(o) && (b.length || !m.length)) && (s = o, o = r, r = this, b = ao(o, qt(o)));
        var T = !(kt(s) && "chain" in s) || !!s.chain, L = wi(r);
        return Bn(b, function(I) {
          var F = o[I];
          r[I] = F, L && (r.prototype[I] = function() {
            var ne = this.__chain__;
            if (T || ne) {
              var ie = r(this.__wrapped__), oe = ie.__actions__ = mn(this.__actions__);
              return oe.push({ func: F, args: arguments, thisArg: r }), ie.__chain__ = ne, ie;
            }
            return F.apply(r, Li([this.value()], arguments));
          });
        }), r;
      }
      function Db() {
        return Jt._ === this && (Jt._ = fg), this;
      }
      function mu() {
      }
      function Nb(r) {
        return r = Ie(r), Ne(function(o) {
          return cs(o, r);
        });
      }
      var Ub = Zf(bt), Pb = Zf(Oa), Fb = Zf(bf);
      function E_(r) {
        return eu(r) ? wf(fi(r)) : dd(r);
      }
      function Wb(r) {
        return function(o) {
          return r == null ? n : Gi(r, o);
        };
      }
      var Bb = Ds(), Hb = Ds(!0);
      function yu() {
        return [];
      }
      function bu() {
        return !1;
      }
      function Yb() {
        return {};
      }
      function Xb() {
        return "";
      }
      function qb() {
        return !0;
      }
      function Gb(r, o) {
        if (r = Ie(r), r < 1 || r > A)
          return [];
        var s = he, m = nn(r, he);
        o = xe(o), r -= he;
        for (var b = kf(m, o); ++s < r; )
          o(s);
        return b;
      }
      function Zb(r) {
        return Re(r) ? bt(r, fi) : In(r) ? [r] : mn(Qs(lt(r)));
      }
      function jb(r) {
        var o = ++lg;
        return lt(r) + o;
      }
      var Kb = mo(function(r, o) {
        return r + o;
      }, 0), Jb = jf("ceil"), Qb = mo(function(r, o) {
        return r / o;
      }, 1), Vb = jf("floor");
      function $b(r) {
        return r && r.length ? uo(r, wn, If) : n;
      }
      function e6(r, o) {
        return r && r.length ? uo(r, xe(o, 2), If) : n;
      }
      function t6(r) {
        return Ua(r, wn);
      }
      function n6(r, o) {
        return Ua(r, xe(o, 2));
      }
      function i6(r) {
        return r && r.length ? uo(r, wn, Uf) : n;
      }
      function r6(r, o) {
        return r && r.length ? uo(r, xe(o, 2), Uf) : n;
      }
      var l6 = mo(function(r, o) {
        return r * o;
      }, 1), o6 = jf("round"), f6 = mo(function(r, o) {
        return r - o;
      }, 0);
      function u6(r) {
        return r && r.length ? vf(r, wn) : 0;
      }
      function a6(r, o) {
        return r && r.length ? vf(r, xe(o, 2)) : 0;
      }
      return k.after = E2, k.ary = u_, k.assign = by, k.assignIn = k_, k.assignInWith = Co, k.assignWith = wy, k.at = py, k.before = a_, k.bind = ou, k.bindAll = Tb, k.bindKey = s_, k.castArray = Y2, k.chain = l_, k.chunk = Vd, k.compact = $d, k.concat = em, k.cond = Sb, k.conforms = zb, k.constant = cu, k.countBy = u2, k.create = vy, k.curry = __, k.curryRight = h_, k.debounce = c_, k.defaults = ky, k.defaultsDeep = xy, k.defer = R2, k.delay = I2, k.difference = tm, k.differenceBy = nm, k.differenceWith = im, k.drop = rm, k.dropRight = lm, k.dropRightWhile = om, k.dropWhile = fm, k.fill = um, k.filter = s2, k.flatMap = c2, k.flatMapDeep = g2, k.flatMapDepth = d2, k.flatten = t_, k.flattenDeep = am, k.flattenDepth = sm, k.flip = O2, k.flow = Cb, k.flowRight = Lb, k.fromPairs = _m, k.functions = Ly, k.functionsIn = Ey, k.groupBy = m2, k.initial = cm, k.intersection = gm, k.intersectionBy = dm, k.intersectionWith = mm, k.invert = Iy, k.invertBy = Oy, k.invokeMap = b2, k.iteratee = gu, k.keyBy = w2, k.keys = qt, k.keysIn = bn, k.map = xo, k.mapKeys = Ny, k.mapValues = Uy, k.matches = Eb, k.matchesProperty = Rb, k.memoize = To, k.merge = Py, k.mergeWith = x_, k.method = Ib, k.methodOf = Ob, k.mixin = du, k.negate = So, k.nthArg = Nb, k.omit = Fy, k.omitBy = Wy, k.once = D2, k.orderBy = p2, k.over = Ub, k.overArgs = N2, k.overEvery = Pb, k.overSome = Fb, k.partial = fu, k.partialRight = g_, k.partition = v2, k.pick = By, k.pickBy = M_, k.property = E_, k.propertyOf = Wb, k.pull = pm, k.pullAll = i_, k.pullAllBy = vm, k.pullAllWith = km, k.pullAt = xm, k.range = Bb, k.rangeRight = Hb, k.rearg = U2, k.reject = M2, k.remove = Mm, k.rest = P2, k.reverse = ru, k.sampleSize = S2, k.set = Yy, k.setWith = Xy, k.shuffle = z2, k.slice = Tm, k.sortBy = L2, k.sortedUniq = Rm, k.sortedUniqBy = Im, k.split = cb, k.spread = F2, k.tail = Om, k.take = Dm, k.takeRight = Nm, k.takeRightWhile = Um, k.takeWhile = Pm, k.tap = $m, k.throttle = W2, k.thru = ko, k.toArray = w_, k.toPairs = T_, k.toPairsIn = S_, k.toPath = Zb, k.toPlainObject = v_, k.transform = qy, k.unary = B2, k.union = Fm, k.unionBy = Wm, k.unionWith = Bm, k.uniq = Hm, k.uniqBy = Ym, k.uniqWith = Xm, k.unset = Gy, k.unzip = lu, k.unzipWith = r_, k.update = Zy, k.updateWith = jy, k.values = kr, k.valuesIn = Ky, k.without = qm, k.words = C_, k.wrap = H2, k.xor = Gm, k.xorBy = Zm, k.xorWith = jm, k.zip = Km, k.zipObject = Jm, k.zipObjectDeep = Qm, k.zipWith = Vm, k.entries = T_, k.entriesIn = S_, k.extend = k_, k.extendWith = Co, du(k, k), k.add = Kb, k.attempt = L_, k.camelCase = $y, k.capitalize = z_, k.ceil = Jb, k.clamp = Jy, k.clone = X2, k.cloneDeep = G2, k.cloneDeepWith = Z2, k.cloneWith = q2, k.conformsTo = j2, k.deburr = A_, k.defaultTo = Ab, k.divide = Qb, k.endsWith = eb, k.eq = ti, k.escape = tb, k.escapeRegExp = nb, k.every = a2, k.find = _2, k.findIndex = $s, k.findKey = My, k.findLast = h2, k.findLastIndex = e_, k.findLastKey = Ty, k.floor = Vb, k.forEach = o_, k.forEachRight = f_, k.forIn = Sy, k.forInRight = zy, k.forOwn = Ay, k.forOwnRight = Cy, k.get = su, k.gt = K2, k.gte = J2, k.has = Ry, k.hasIn = _u, k.head = n_, k.identity = wn, k.includes = y2, k.indexOf = hm, k.inRange = Qy, k.invoke = Dy, k.isArguments = Ki, k.isArray = Re, k.isArrayBuffer = Q2, k.isArrayLike = yn, k.isArrayLikeObject = Dt, k.isBoolean = V2, k.isBuffer = Ui, k.isDate = $2, k.isElement = ey, k.isEmpty = ty, k.isEqual = ny, k.isEqualWith = iy, k.isError = uu, k.isFinite = ry, k.isFunction = wi, k.isInteger = d_, k.isLength = zo, k.isMap = m_, k.isMatch = ly, k.isMatchWith = oy, k.isNaN = fy, k.isNative = uy, k.isNil = sy, k.isNull = ay, k.isNumber = y_, k.isObject = kt, k.isObjectLike = Rt, k.isPlainObject = al, k.isRegExp = au, k.isSafeInteger = _y, k.isSet = b_, k.isString = Ao, k.isSymbol = In, k.isTypedArray = vr, k.isUndefined = hy, k.isWeakMap = cy, k.isWeakSet = gy, k.join = ym, k.kebabCase = ib, k.last = Gn, k.lastIndexOf = bm, k.lowerCase = rb, k.lowerFirst = lb, k.lt = dy, k.lte = my, k.max = $b, k.maxBy = e6, k.mean = t6, k.meanBy = n6, k.min = i6, k.minBy = r6, k.stubArray = yu, k.stubFalse = bu, k.stubObject = Yb, k.stubString = Xb, k.stubTrue = qb, k.multiply = l6, k.nth = wm, k.noConflict = Db, k.noop = mu, k.now = Mo, k.pad = ob, k.padEnd = fb, k.padStart = ub, k.parseInt = ab, k.random = Vy, k.reduce = k2, k.reduceRight = x2, k.repeat = sb, k.replace = _b, k.result = Hy, k.round = o6, k.runInContext = N, k.sample = T2, k.size = A2, k.snakeCase = hb, k.some = C2, k.sortedIndex = Sm, k.sortedIndexBy = zm, k.sortedIndexOf = Am, k.sortedLastIndex = Cm, k.sortedLastIndexBy = Lm, k.sortedLastIndexOf = Em, k.startCase = gb, k.startsWith = db, k.subtract = f6, k.sum = u6, k.sumBy = a6, k.template = mb, k.times = Gb, k.toFinite = pi, k.toInteger = Ie, k.toLength = p_, k.toLower = yb, k.toNumber = Zn, k.toSafeInteger = yy, k.toString = lt, k.toUpper = bb, k.trim = wb, k.trimEnd = pb, k.trimStart = vb, k.truncate = kb, k.unescape = xb, k.uniqueId = jb, k.upperCase = Mb, k.upperFirst = hu, k.each = o_, k.eachRight = f_, k.first = n_, du(k, function() {
        var r = {};
        return li(k, function(o, s) {
          ft.call(k.prototype, s) || (r[s] = o);
        }), r;
      }(), { chain: !1 }), k.VERSION = i, Bn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        k[r].placeholder = k;
      }), Bn(["drop", "take"], function(r, o) {
        Ye.prototype[r] = function(s) {
          s = s === n ? 1 : Bt(Ie(s), 0);
          var m = this.__filtered__ && !o ? new Ye(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = nn(s, m.__takeCount__) : m.__views__.push({
            size: nn(s, he),
            type: r + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, Ye.prototype[r + "Right"] = function(s) {
          return this.reverse()[r](s).reverse();
        };
      }), Bn(["filter", "map", "takeWhile"], function(r, o) {
        var s = o + 1, m = s == fe || s == J;
        Ye.prototype[r] = function(b) {
          var T = this.clone();
          return T.__iteratees__.push({
            iteratee: xe(b, 3),
            type: s
          }), T.__filtered__ = T.__filtered__ || m, T;
        };
      }), Bn(["head", "last"], function(r, o) {
        var s = "take" + (o ? "Right" : "");
        Ye.prototype[r] = function() {
          return this[s](1).value()[0];
        };
      }), Bn(["initial", "tail"], function(r, o) {
        var s = "drop" + (o ? "" : "Right");
        Ye.prototype[r] = function() {
          return this.__filtered__ ? new Ye(this) : this[s](1);
        };
      }), Ye.prototype.compact = function() {
        return this.filter(wn);
      }, Ye.prototype.find = function(r) {
        return this.filter(r).head();
      }, Ye.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, Ye.prototype.invokeMap = Ne(function(r, o) {
        return typeof r == "function" ? new Ye(this) : this.map(function(s) {
          return il(s, r, o);
        });
      }), Ye.prototype.reject = function(r) {
        return this.filter(So(xe(r)));
      }, Ye.prototype.slice = function(r, o) {
        r = Ie(r);
        var s = this;
        return s.__filtered__ && (r > 0 || o < 0) ? new Ye(s) : (r < 0 ? s = s.takeRight(-r) : r && (s = s.drop(r)), o !== n && (o = Ie(o), s = o < 0 ? s.dropRight(-o) : s.take(o - r)), s);
      }, Ye.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, Ye.prototype.toArray = function() {
        return this.take(he);
      }, li(Ye.prototype, function(r, o) {
        var s = /^(?:filter|find|map|reject)|While$/.test(o), m = /^(?:head|last)$/.test(o), b = k[m ? "take" + (o == "last" ? "Right" : "") : o], T = m || /^find/.test(o);
        b && (k.prototype[o] = function() {
          var L = this.__wrapped__, I = m ? [1] : arguments, F = L instanceof Ye, ne = I[0], ie = F || Re(L), oe = function(Fe) {
            var Ge = b.apply(k, Li([Fe], I));
            return m && ge ? Ge[0] : Ge;
          };
          ie && s && typeof ne == "function" && ne.length != 1 && (F = ie = !1);
          var ge = this.__chain__, pe = !!this.__actions__.length, Te = T && !ge, De = F && !pe;
          if (!T && ie) {
            L = De ? L : new Ye(this);
            var Se = r.apply(L, I);
            return Se.__actions__.push({ func: ko, args: [oe], thisArg: n }), new Yn(Se, ge);
          }
          return Te && De ? r.apply(this, I) : (Se = this.thru(oe), Te ? m ? Se.value()[0] : Se.value() : Se);
        });
      }), Bn(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var o = Zl[r], s = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(r);
        k.prototype[r] = function() {
          var b = arguments;
          if (m && !this.__chain__) {
            var T = this.value();
            return o.apply(Re(T) ? T : [], b);
          }
          return this[s](function(L) {
            return o.apply(Re(L) ? L : [], b);
          });
        };
      }), li(Ye.prototype, function(r, o) {
        var s = k[o];
        if (s) {
          var m = s.name + "";
          ft.call(mr, m) || (mr[m] = []), mr[m].push({ name: o, func: s });
        }
      }), mr[go(n, M).name] = [{
        name: "wrapper",
        func: n
      }], Ye.prototype.clone = xg, Ye.prototype.reverse = Mg, Ye.prototype.value = Tg, k.prototype.at = e2, k.prototype.chain = t2, k.prototype.commit = n2, k.prototype.next = i2, k.prototype.plant = l2, k.prototype.reverse = o2, k.prototype.toJSON = k.prototype.valueOf = k.prototype.value = f2, k.prototype.first = k.prototype.head, Jr && (k.prototype[Jr] = r2), k;
    }, cr = ng();
    Bi ? ((Bi.exports = cr)._ = cr, gf._ = cr) : Jt._ = cr;
  }).call(ki);
})(Ko, Ko.exports);
var Jo = Ko.exports;
const Oo = /* @__PURE__ */ Vc(Jo);
function Qo(e) {
  return --e * e * ((1.70158 + 1) * e + 1.70158) + 1;
}
function rt(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function $c(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function zl(e) {
  return e * e * e * e * e;
}
function Sw(e, t, n) {
  if (t !== "timeseries")
    return e = e, e;
  const i = Pr(n);
  return e.map((l) => ({
    ...l,
    data: l.data.map((f) => ({
      ...f,
      x: new Date(i(f.x))
    }))
  }));
}
function zw(e, t, n) {
  let i = [];
  for (let l = 0; l < t.length; l++) {
    let f = [];
    f = e.filter(({ id: u }) => u === t[l]);
    for (let u = 0; u < f.length; u++)
      (f[u].type === "line" || f[u].type === "density" || f[u].type === "bands") && (f[u].path = n[f[u].type](f[u].data));
    i = i.concat(f);
  }
  return i;
}
function Aw(e, t, n, i, l, f, u, a, _, c) {
  let d, h, g, w, p, S, x, M, z = [], C = [...new Set(e.map((E) => E.type))], P = [];
  for (let E = 0; E < e.length; E++)
    P = P.concat(e[E].data);
  if (a ? f === "timeseries" ? d = a.map((E) => new Date(E)) : d = a : c === "factor" ? d = P.map((E) => E.x) : d = Iu(P, (E) => E.x), f === "timeseries" ? h = _w().domain(d).range([
    t + l * 1.5,
    i - l * 2
  ]) : typeof P[0].x == "number" ? h = Dr().domain(d).range([
    t + l * 1.5,
    i - l * 2
  ]) : h = I3().domain(d).range([
    t + l * 1.5,
    i - l * 2
  ]), C.includes("bands")) {
    let E = [];
    e.forEach((te) => {
      te.data.forEach((W) => {
        "y" in W && E.push(W.y), "y_min" in W && E.push(W.y_min), "y_max" in W && E.push(W.y_max);
      });
    });
    let B = Math.min(...E), D = Math.max(...E);
    g = [B, D];
  } else
    _ ? g = _ : g = Iu(P, (E) => +E.y);
  u === "linear" ? w = Dr().domain(g).range([
    n - l * 2,
    l * 2
  ]).nice() : w = Nc().domain(g).range([
    n - l * 2,
    l * 2
  ]).nice(), p = (E) => E.x, S = (E) => E.y, x = (E) => E.y_min, M = (E) => E.y_max;
  for (let E = 0; E < C.length; E++)
    switch (C[E]) {
      case "density":
        z[E] = dh().curve(hw).x((B) => h(p(B))).y0(n - l * 2).y1((B) => w(S(B)));
        break;
      case "line":
        z[E] = Kc().defined(function(B) {
          return B.y !== null;
        }).x((B) => h(p(B))).y((B) => w(S(B)));
        break;
      case "bands":
        z[E] = dh().x((B) => h(p(B))).y0((B) => w(x(B))).y1((B) => w(M(B)));
        break;
    }
  let O = {};
  for (let E = 0; E < C.length; E++)
    O[C[E]] = z[E];
  return [O, h, w];
}
function Cw(e, t, n, i, l, f) {
  if (!t || t.length === 0)
    return [];
  let u = e.flatMap((x) => x.data), a = [];
  if (n === "factor") {
    let x = l.domain();
    a = [l(x[0]), l(x[x.length - 1])];
  } else
    a = Iu(u, (x) => x.x), a = [l(a[0]), l(a[1])];
  const _ = Pr(f), c = a[0], d = a[1];
  let h = [], g = /* @__PURE__ */ new Set();
  for (let x of t) {
    let { x_start: M, x_end: z, y_start: C, y_end: P, legend_text: O } = x;
    n === "date" ? (M = l(new Date(_(M))), z = l(new Date(_(z)))) : (M = l(M), z = l(z)), C = C === "auto" ? i(i.domain()[0]) : C === "even" ? "even" : i(parseFloat(C)), P = P === "auto" ? i(i.domain()[1]) : P === "even" ? "even" : i(parseFloat(P));
    let E;
    n === "factor" ? E = M <= c ? l.domain()[0] : l.domain()[l.range().indexOf(M)] : E = M <= c ? l.invert(c) : l.invert(M), (M >= c && M <= d || z >= c && z <= d || M <= c && z >= d) && (h.push({
      ...x,
      x_start: M,
      x_end: z,
      y_start: C,
      y_end: P,
      x_position: E
    }), g.add(O));
  }
  let w = Array.from(g), p = i.range(), S = (p[1] - p[0]) / w.length;
  for (let x of h)
    if (x.y_start === "even" || x.y_end === "even") {
      let M = w.indexOf(x.legend_text), z = p[0] + M * S, C = z + S;
      x.y_position = i.invert(C), x.y_start = z, x.y_end = C;
    }
  return h;
}
function Lw(e, t, n, i, l) {
  let f = [null, null], u = 1 / 0;
  for (let a = 0; a < e.length; a++)
    for (let _ = 0; _ < e[a].data.length; _++) {
      let c = e[a].data[_], d = Math.sqrt(
        (t(c.x) - n) ** 2 + (i(c.y) - l) ** 2
      );
      d < u && (f = [a, _], u = d);
    }
  return f;
}
function Ew(e, t, n, i, l) {
  let f = null, u = 1 / 0;
  for (let a = 0; a < e.length; a++) {
    let _ = e[a].data, c = Math.sqrt(
      (t(_.x) - n) ** 2 + (i(_.y) - l) ** 2
    );
    c < u && (f = a, u = c);
  }
  return f;
}
function Rw(e, t, n, i) {
  const l = n.invert(t);
  function f(h, g) {
    const w = Rl((z) => new Date(z.x)).left, p = w(h, g, 1), S = h[p - 1], x = h[p];
    let M;
    return S && x ? M = g - new Date(S.x) > new Date(x.x) - g ? x : S : M = S || x, M;
  }
  function u(h, g) {
    switch (g) {
      case "hourly":
        return new Date(
          h.getFullYear(),
          h.getMonth(),
          h.getDate(),
          h.getHours(),
          0,
          0,
          0
        );
      case "daily":
        return new Date(h.getFullYear(), h.getMonth(), h.getDate());
      case "weekly":
        const w = h.getDay(), p = new Date(h);
        return p.setDate(h.getDate() - w), p.setHours(0, 0, 0, 0), p;
      case "monthly":
        return new Date(h.getFullYear(), h.getMonth(), 1);
      case "yearly":
        return new Date(h.getFullYear(), 0, 1);
      default:
        return h;
    }
  }
  const a = f(
    e.flatMap((h) => h.data).sort((h, g) => new Date(h.x) - new Date(g.x)),
    l
  ), _ = u(
    new Date(a.x),
    i
  );
  function c(h, g, w) {
    return h.find((p) => u(new Date(p.x), w).getTime() === g.getTime());
  }
  let d = [];
  return e.forEach((h) => {
    const g = c(
      h.data,
      _,
      i
    );
    g && d.push({
      colors: h.colors,
      data: { ...g },
      id: h.id,
      id_id: h.id_id,
      opacity: h.opacity,
      path: h.path,
      size: h.size,
      tooltip: h.tooltip,
      type: h.type,
      second_axis: h.second_axis
    });
  }), d;
}
function e0(e, t, n, i, l) {
  if (e === "bar") {
    t.sort((a, _) => a - _);
    let f = 0, u = Math.abs(l - t[0]);
    for (let a = 1; a < t.length; a++) {
      const _ = Math.abs(l - t[a]);
      _ < u && (u = _, f = a);
    }
    return f;
  } else {
    const f = Rl((a) => n(a)).left, u = f(i, l);
    if (u > 0 && u < i.length) {
      const a = n(i[u - 1]), _ = n(i[u]);
      return l - a < _ - l ? i[u - 1] : i[u];
    } else {
      if (u === 0)
        return i[0];
      if (u === i.length)
        return i[i.length - 1];
    }
    return null;
  }
}
function Iw(e, t) {
  return Oo.compact(
    Oo.map(e, (n) => {
      const i = Oo.filter(n.data, (l) => l.x === t);
      return Oo.isEmpty(i) ? null : {
        ...n,
        data: i[0]
      };
    })
  );
}
function Ow(e, t, n, i, l, f, u, a) {
  let _, c, d;
  if (i === "timeseries" ? (_ = e.filter((h) => h.tooltip === !0), _ = Rw(
    _,
    f,
    t,
    a
  )) : (d = t.domain(), c = e0("XYChart", void 0, t, d, f), _ = e.filter((h) => h.tooltip === !0), _ = Iw(
    _,
    c
  )), _ = _.filter((h) => h.data.y !== null), l === "vertical_line")
    return _;
  if (l === "single") {
    let h, g = Ew(
      _,
      t,
      f,
      n,
      u
    );
    return h = _[g], h;
  }
}
function Dw(e, t, n, i, l, f, u, a, _) {
  let c, d, h, g, w;
  return c = yl().domain(t).range([
    u + a * 1.5,
    i - a * 2
  ]).padding([0.3]), f === "grouped" ? d = yl().domain(n).range([0, c.bandwidth()]).padding([l]) : d = yl().domain("iii").range([0, c.bandwidth()]).padding([l]), g = Uu(e, (p) => +p.y), w = Mc(e, (p) => +p.y_start), console.log("ymin", w), h = Dr().domain([w, g]).range([
    _ - a / 2,
    a * 2
  ]).nice(), [c, d, g, h];
}
function Nw(e) {
  const t = e.reduce((n, i) => (n[i.x] = n[i.x] || [], n[i.x].push(i), n), {});
  return Object.keys(t).forEach((n) => {
    const i = t[n];
    i.sort((f, u) => f.y_start - u.y_start);
    let l = 0;
    i.forEach((f, u) => {
      if (u === 0) {
        let a = f.y_start;
        f.y -= a, f.y_start = 0, l = f.y;
      } else {
        let a = f.y_start;
        f.y_start = l, f.y -= a - f.y_start, l = f.y;
      }
    });
  }), Object.values(t).flat();
}
function Uw(e) {
  const t = e.reduce((i, l) => (i[l.x] = i[l.x] || [], i[l.x].push(l), i), {}), n = {};
  return Object.keys(t).forEach((i) => {
    n[i] = t[i].reduce(
      (l, { y: f, y_start: u }) => l + (f - u),
      0
    );
  }), Object.keys(t).forEach((i) => {
    let l = 0;
    t[i].forEach((f) => {
      const a = (f.y - f.y_start) / n[i] * 100;
      f.y_start = l, l += a, f.y = l;
    });
  }), Object.values(t).flat();
}
function vh(e, t, n) {
  const i = t(e.x_start), l = n(e.y_start), f = t(e.x_end), u = n(e.y_end), a = e.curvature || 0.2, _ = e.direction === "downward" ? -1 : 1, c = (i + f) / 2, d = (l + u) / 2, h = c + _ * Math.abs(u - l) * a, g = d - _ * Math.abs(f - i) * a;
  let w = `M ${i} ${l} Q ${h} ${g} ${f} ${u}`;
  const p = 10, S = Math.atan2(u - g, f - h), x = Math.PI / 8, M = f - p * Math.cos(S - x), z = u - p * Math.sin(S - x), C = f - p * Math.cos(S + x), P = u - p * Math.sin(S + x);
  return w += `M ${f} ${u} L ${M} ${z} M ${f} ${u} L ${C} ${P}`, w;
}
function ca(e, t, n) {
  const i = n * (Math.PI / 180);
  return Math.abs(e * Math.sin(i)) + Math.abs(t * Math.cos(i));
}
function Pw(e, t, n, i, l, f, u) {
  let a, _;
  return a = Dr().domain([Mc(e, (c) => c.x_start), Uu(e, (c) => c.x_end)]).range([u + l, t - i - l]), _ = Dr().domain([0, Uu(e, (c) => c.y)]).range([n - i - l - f, l]).nice(), [a, _];
}
function t0(e, t, n) {
  return console.log(n[0].data.x, "tooltip2_array_values[0].data.x"), e === "hour" && t === "timeseries" ? n[0].data.x.toString().replace(/^(.*?)T/, " ").split(" ").slice(0, 5).join(" ") : t === "timeseries" ? n[0].data.x.toDateString() : n[0].data.x.toString();
}
function pn(e, { delay: t = 0, duration: n = 400, easing: i = Br } = {}) {
  const l = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (f) => `opacity: ${f * l}`
  };
}
function Zt(e, { delay: t = 0, duration: n = 400, easing: i = $c, x: l = 0, y: f = 0, opacity: u = 0 } = {}) {
  const a = getComputedStyle(e), _ = +a.opacity, c = a.transform === "none" ? "" : a.transform, d = _ * (1 - u), [h, g] = D_(l), [w, p] = D_(f);
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (S, x) => `
			transform: ${c} translate(${(1 - S) * h}${g}, ${(1 - S) * w}${p});
			opacity: ${_ - d * x}`
  };
}
function Fw(e, { delay: t = 0, speed: n, duration: i, easing: l = rt } = {}) {
  let f = e.getTotalLength();
  const u = getComputedStyle(e);
  return u.strokeLinecap !== "butt" && (f += parseInt(u.strokeWidth)), i === void 0 ? n === void 0 ? i = 800 : i = f / n : typeof i == "function" && (i = i(f)), {
    delay: t,
    duration: i,
    easing: l,
    css: (a, _) => `
			stroke-dasharray: ${f};
			stroke-dashoffset: ${_ * f};
		`
  };
}
function kh(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Xu(e, t) {
  if (e === t || e !== e)
    return () => e;
  const n = typeof e;
  if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const i = t.map((l, f) => Xu(e[f], l));
    return (l) => i.map((f) => f(l));
  }
  if (n === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (kh(e) && kh(t)) {
      e = e.getTime(), t = t.getTime();
      const f = t - e;
      return (u) => new Date(e + u * f);
    }
    const i = Object.keys(t), l = {};
    return i.forEach((f) => {
      l[f] = Xu(e[f], t[f]);
    }), (f) => {
      const u = {};
      return i.forEach((a) => {
        u[a] = l[a](f);
      }), u;
    };
  }
  if (n === "number") {
    const i = t - e;
    return (l) => e + l * i;
  }
  throw new Error(`Cannot interpolate ${n} values`);
}
function Ut(e, t = {}) {
  const n = El(e);
  let i, l = e;
  function f(u, a) {
    if (e == null)
      return n.set(e = u), Promise.resolve();
    l = u;
    let _ = i, c = !1, {
      delay: d = 0,
      duration: h = 400,
      easing: g = Br,
      interpolate: w = Xu
    } = I_(I_({}, t), a);
    if (h === 0)
      return _ && (_.abort(), _ = null), n.set(e = l), Promise.resolve();
    const p = Al() + d;
    let S;
    return i = Cl((x) => {
      if (x < p)
        return !0;
      c || (S = w(e, u), typeof h == "function" && (h = h(e, u)), c = !0), _ && (_.abort(), _ = null);
      const M = x - p;
      return M > /** @type {number} */
      h ? (n.set(e = u), !1) : (n.set(e = S(g(M / h))), !0);
    }), i.promise;
  }
  return {
    set: f,
    update: (u, a) => f(u(l, e), a),
    subscribe: n.subscribe
  };
}
function Ww(e) {
  let t, n, i, l, f, u, a, _, c, d;
  return {
    c() {
      t = ze("path"), v(t, "stroke", n = /*line*/
      e[0].type == "bands" ? "none" : (
        /*line*/
        e[0].colors
      )), v(
        t,
        "d",
        /*$tweened_x*/
        e[6]
      ), v(t, "opacity", i = /*listener*/
      e[5] && /*tooltip2_array_values*/
      e[4] || /*hover_legend*/
      e[1] && /*current_categories*/
      e[2].includes(
        /*hover_legend*/
        e[1]
      ) ? (
        /*tooltip2_array_values*/
        e[4] && /*tooltip2_array_values*/
        e[4].id === /*line*/
        e[0].id || /*hover_legend*/
        e[1] === /*line*/
        e[0].id ? (
          /*line*/
          e[0].opacity
        ) : (
          /*line*/
          e[0].opacity * 0.2
        )
      ) : (
        /*line*/
        e[0].opacity
      )), v(t, "fill", l = /*line*/
      e[0].fill), v(t, "fill-opacity", 0.4), v(t, "stroke-width", f = /*hover_legend*/
      e[1] && /*current_categories*/
      e[2].includes(
        /*hover_legend*/
        e[1]
      ) || /*hover_legend*/
      e[1] === /*line*/
      e[0].id ? (
        /*line_size*/
        e[3] * 1.5
      ) : (
        /*line_size*/
        e[3]
      ));
    },
    m(h, g) {
      j(h, t, g), _ = !0, c || (d = [
        ot(
          t,
          "introstart",
          /*introstart_handler*/
          e[10]
        ),
        ot(
          t,
          "introend",
          /*introend_handler*/
          e[11]
        ),
        ot(
          t,
          "outrostart",
          /*outrostart_handler*/
          e[12]
        ),
        ot(
          t,
          "outroend",
          /*outroend_handler*/
          e[13]
        )
      ], c = !0);
    },
    p(h, [g]) {
      (!_ || g & /*line*/
      1 && n !== (n = /*line*/
      h[0].type == "bands" ? "none" : (
        /*line*/
        h[0].colors
      ))) && v(t, "stroke", n), (!_ || g & /*$tweened_x*/
      64) && v(
        t,
        "d",
        /*$tweened_x*/
        h[6]
      ), (!_ || g & /*listener, tooltip2_array_values, hover_legend, current_categories, line*/
      55 && i !== (i = /*listener*/
      h[5] && /*tooltip2_array_values*/
      h[4] || /*hover_legend*/
      h[1] && /*current_categories*/
      h[2].includes(
        /*hover_legend*/
        h[1]
      ) ? (
        /*tooltip2_array_values*/
        h[4] && /*tooltip2_array_values*/
        h[4].id === /*line*/
        h[0].id || /*hover_legend*/
        h[1] === /*line*/
        h[0].id ? (
          /*line*/
          h[0].opacity
        ) : (
          /*line*/
          h[0].opacity * 0.2
        )
      ) : (
        /*line*/
        h[0].opacity
      ))) && v(t, "opacity", i), (!_ || g & /*line*/
      1 && l !== (l = /*line*/
      h[0].fill)) && v(t, "fill", l), (!_ || g & /*hover_legend, current_categories, line, line_size*/
      15 && f !== (f = /*hover_legend*/
      h[1] && /*current_categories*/
      h[2].includes(
        /*hover_legend*/
        h[1]
      ) || /*hover_legend*/
      h[1] === /*line*/
      h[0].id ? (
        /*line_size*/
        h[3] * 1.5
      ) : (
        /*line_size*/
        h[3]
      ))) && v(t, "stroke-width", f);
    },
    i(h) {
      _ || (h && it(() => {
        _ && (a && a.end(1), u = Fi(t, Fw, { duration: 1e3, delay: 50 }), u.start());
      }), _ = !0);
    },
    o(h) {
      u && u.invalidate(), h && (a = kl(t, pn, { duration: 500, delay: 30 })), _ = !1;
    },
    d(h) {
      h && Z(t), h && a && a.end(), c = !1, Ht(d);
    }
  };
}
function Bw(e, t, n) {
  let i, { line: l } = t, { hover_legend: f } = t, { current_categories: u } = t, { line_size: a } = t, { tweenOptions: _ } = t, { path: c = l.path } = t, { tooltip2_array_values: d } = t, { listener: h } = t, g = Ut(c, _ == null ? void 0 : _.path);
  wt(e, g, (M) => n(6, i = M));
  const w = () => console.log("Density chart starting to appear"), p = () => console.log("Density chart appeared"), S = () => console.log("Density chart starting to disappear"), x = () => console.log("Density chart disappeared");
  return e.$$set = (M) => {
    "line" in M && n(0, l = M.line), "hover_legend" in M && n(1, f = M.hover_legend), "current_categories" in M && n(2, u = M.current_categories), "line_size" in M && n(3, a = M.line_size), "tweenOptions" in M && n(8, _ = M.tweenOptions), "path" in M && n(9, c = M.path), "tooltip2_array_values" in M && n(4, d = M.tooltip2_array_values), "listener" in M && n(5, h = M.listener);
  }, e.$$.update = () => {
    e.$$.dirty & /*path, tweenOptions*/
    768 && Ll().then(() => {
      g.set(c, _ == null ? void 0 : _.path);
    }), e.$$.dirty & /*tooltip2_array_values, line*/
    17 && d && console.log(d, l.id, "hi");
  }, [
    l,
    f,
    u,
    a,
    d,
    h,
    i,
    g,
    _,
    c,
    w,
    p,
    S,
    x
  ];
}
class Hw extends ct {
  constructor(t) {
    super(), ht(this, t, Bw, Ww, ut, {
      line: 0,
      hover_legend: 1,
      current_categories: 2,
      line_size: 3,
      tweenOptions: 8,
      path: 9,
      tooltip2_array_values: 4,
      listener: 5
    });
  }
}
function xh(e, t, n) {
  const i = e.slice();
  return i[18] = t[n][0], i[19] = t[n][1], i;
}
function Yw(e) {
  let t = (
    /*key*/
    e[18] + ""
  ), n, i, l;
  function f(_, c) {
    return typeof /*values*/
    _[19] == "string" ? Zw : (
      /*values*/
      _[19] instanceof Date ? Gw : qw
    );
  }
  let u = f(e), a = u(e);
  return {
    c() {
      n = Ae(t), i = Ae(`:
          `), l = _e("div"), a.c(), y(l, "font-weight", "bold");
    },
    m(_, c) {
      j(_, n, c), j(_, i, c), j(_, l, c), a.m(l, null);
    },
    p(_, c) {
      c & /*tooltip_value*/
      4 && t !== (t = /*key*/
      _[18] + "") && Oe(n, t), u === (u = f(_)) && a ? a.p(_, c) : (a.d(1), a = u(_), a && (a.c(), a.m(l, null)));
    },
    d(_) {
      _ && (Z(n), Z(i), Z(l)), a.d();
    }
  };
}
function Xw(e) {
  let t, n, i, l, f = (
    /*values*/
    e[19] + ""
  ), u;
  return {
    c() {
      t = _e("div"), n = _e("span"), i = ve(), l = _e("div"), u = Ae(f), y(
        n,
        "background",
        /*key*/
        e[18]
      ), y(n, "width", "9px"), y(n, "height", "9px"), y(n, "border-radius", "50%"), y(n, "margin", "3px"), y(n, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(t, "display", "flex");
    },
    m(a, _) {
      j(a, t, _), q(t, n), j(a, i, _), j(a, l, _), q(l, u);
    },
    p(a, _) {
      _ & /*tooltip_value*/
      4 && y(
        n,
        "background",
        /*key*/
        a[18]
      ), _ & /*tooltip_value*/
      4 && f !== (f = /*values*/
      a[19] + "") && Oe(u, f);
    },
    d(a) {
      a && (Z(t), Z(i), Z(l));
    }
  };
}
function qw(e) {
  let t = (
    /*format_number*/
    e[1](
      /*values*/
      e[19]
    ) + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(i, l) {
      j(i, n, l);
    },
    p(i, l) {
      l & /*format_number, tooltip_value*/
      6 && t !== (t = /*format_number*/
      i[1](
        /*values*/
        i[19]
      ) + "") && Oe(n, t);
    },
    d(i) {
      i && Z(n);
    }
  };
}
function Gw(e) {
  let t = (
    /*values*/
    e[19].toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(i, l) {
      j(i, n, l);
    },
    p(i, l) {
      l & /*tooltip_value*/
      4 && t !== (t = /*values*/
      i[19].toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + "") && Oe(n, t);
    },
    d(i) {
      i && Z(n);
    }
  };
}
function Zw(e) {
  let t = (
    /*values*/
    e[19] + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(i, l) {
      j(i, n, l);
    },
    p(i, l) {
      l & /*tooltip_value*/
      4 && t !== (t = /*values*/
      i[19] + "") && Oe(n, t);
    },
    d(i) {
      i && Z(n);
    }
  };
}
function Mh(e) {
  let t, n;
  function i(u, a) {
    return (
      /*key*/
      u[18] !== "x" && /*key*/
      u[18] !== "y" ? Xw : Yw
    );
  }
  let l = i(e), f = l(e);
  return {
    c() {
      t = _e("div"), f.c(), n = ve(), v(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(u, a) {
      j(u, t, a), f.m(t, null), q(t, n);
    },
    p(u, a) {
      l === (l = i(u)) && f ? f.p(u, a) : (f.d(1), f = l(u), f && (f.c(), f.m(t, n)));
    },
    d(u) {
      u && Z(t), f.d();
    }
  };
}
function jw(e) {
  let t, n, i, l, f = ke(Object.entries(
    /*tooltip_value*/
    e[2]
  )), u = [];
  for (let a = 0; a < f.length; a += 1)
    u[a] = Mh(xh(e, f, a));
  return {
    c() {
      t = _e("div"), n = _e("div");
      for (let a = 0; a < u.length; a += 1)
        u[a].c();
      y(n, "border", "1px solid " + /*colour*/
      e[0]), v(t, "class", "tooltip"), y(t, "position", "absolute"), y(
        t,
        "top",
        /*yPosition*/
        e[3] + "px"
      ), y(
        t,
        "left",
        /*xPosition*/
        e[4] + "px"
      ), y(t, "border-radius", "3px"), y(t, "pointer-events", "none"), y(t, "transition", "top 300ms ease, left 300ms ease"), y(t, "display", "flex"), y(t, "flex-direction", "column"), y(t, "justify-content", "stretch"), y(t, "margin-top", "15px"), y(t, "background-color", "rgba(255,255,255, 0.7)"), y(t, "width", "fit-content"), y(t, "white-space", "nowrap");
    },
    m(a, _) {
      j(a, t, _), q(t, n);
      for (let c = 0; c < u.length; c += 1)
        u[c] && u[c].m(n, null);
      l = !0;
    },
    p(a, [_]) {
      if (_ & /*Object, tooltip_value, Date, format_number*/
      6) {
        f = ke(Object.entries(
          /*tooltip_value*/
          a[2]
        ));
        let c;
        for (c = 0; c < f.length; c += 1) {
          const d = xh(a, f, c);
          u[c] ? u[c].p(d, _) : (u[c] = Mh(d), u[c].c(), u[c].m(n, null));
        }
        for (; c < u.length; c += 1)
          u[c].d(1);
        u.length = f.length;
      }
      (!l || _ & /*colour*/
      1) && y(n, "border", "1px solid " + /*colour*/
      a[0]), (!l || _ & /*yPosition*/
      8) && y(
        t,
        "top",
        /*yPosition*/
        a[3] + "px"
      ), (!l || _ & /*xPosition*/
      16) && y(
        t,
        "left",
        /*xPosition*/
        a[4] + "px"
      );
    },
    i(a) {
      l || (it(() => {
        l && (i || (i = Pt(t, Zt, {}, !0)), i.run(1));
      }), l = !0);
    },
    o(a) {
      i || (i = Pt(t, Zt, {}, !1)), i.run(0), l = !1;
    },
    d(a) {
      a && Z(t), xn(u, a), a && i && i.end();
    }
  };
}
const Th = 0;
function Kw(e, t, n) {
  let i, l, f, u, a, _, c, { x_scale: d } = t, { y_scale: h } = t, { format_tooltip: g } = t, { tooltip2_array_values: w } = t, { width: p } = t, { height: S } = t, { margin: x } = t, { buffer: M } = t, z, C;
  const P = -50;
  return e.$$set = (O) => {
    "x_scale" in O && n(5, d = O.x_scale), "y_scale" in O && n(6, h = O.y_scale), "format_tooltip" in O && n(7, g = O.format_tooltip), "tooltip2_array_values" in O && n(8, w = O.tooltip2_array_values), "width" in O && n(9, p = O.width), "height" in O && n(10, S = O.height), "margin" in O && n(11, x = O.margin), "buffer" in O && n(12, M = O.buffer);
  }, e.$$.update = () => {
    e.$$.dirty & /*x_scale, tooltip2_array_values*/
    288 && n(14, i = d(w.data.x)), e.$$.dirty & /*y_scale, tooltip2_array_values*/
    320 && n(13, l = h(w.data.y)), e.$$.dirty & /*x, width*/
    16896 && n(4, f = i + z > p ? i - z - P : i + P), e.$$.dirty & /*y, height, margin, buffer*/
    15360 && n(3, u = l + C > S - x - M ? l - C - Th - x - M : l + Th), e.$$.dirty & /*tooltip2_array_values*/
    256 && n(0, a = w.colors), e.$$.dirty & /*colour, tooltip2_array_values*/
    257 && n(2, _ = {
      [a]: w.id,
      x: w.data.x,
      y: w.data.y
    }), e.$$.dirty & /*format_tooltip*/
    128 && n(1, c = hn(g));
  }, [
    a,
    c,
    _,
    u,
    f,
    d,
    h,
    g,
    w,
    p,
    S,
    x,
    M,
    l,
    i
  ];
}
class Jw extends ct {
  constructor(t) {
    super(), ht(this, t, Kw, jw, ut, {
      x_scale: 5,
      y_scale: 6,
      format_tooltip: 7,
      tooltip2_array_values: 8,
      width: 9,
      height: 10,
      margin: 11,
      buffer: 12
    });
  }
}
function Sh(e, t, n) {
  const i = e.slice();
  return i[19] = t[n], i;
}
function zh(e) {
  let t, n, i, l, f, u, a;
  function _(w, p) {
    return (
      /*interval*/
      w[1] === "hour" && /*type*/
      w[2] === "timeseries" ? $w : (
        /*type*/
        w[2] === "timeseries" ? Vw : Qw
      )
    );
  }
  let c = _(e), d = c(e), h = ke(
    /*tooltip2_array_values*/
    e[0]
  ), g = [];
  for (let w = 0; w < h.length; w += 1)
    g[w] = Ah(Sh(e, h, w));
  return {
    c() {
      t = _e("div"), n = _e("h6"), d.c(), i = ve(), l = _e("div");
      for (let w = 0; w < g.length; w += 1)
        g[w].c();
      y(n, "background-color", "black"), y(n, "color", "white"), y(n, "margin", "1px"), y(n, "padding", "2%"), y(n, "font-size", "12px"), y(n, "font-weight", "2px"), y(n, "text-align", "center"), v(t, "class", "tooltip"), y(t, "position", "absolute"), y(
        t,
        "top",
        /*yPosition*/
        e[6] + "px"
      ), y(
        t,
        "left",
        /*xPosition*/
        e[7] + "px"
      ), y(t, "border-radius", "3px"), y(t, "pointer-events", "none"), y(t, "transition", "top 300ms ease, left 300ms ease"), y(t, "margin-top", "15px"), y(t, "background-color", "rgba(255,255,255, 0.8)"), y(t, "z-index", "1000"), it(() => (
        /*div1_elementresize_handler*/
        e[18].call(t)
      ));
    },
    m(w, p) {
      j(w, t, p), q(t, n), d.m(n, null), q(t, i), q(t, l);
      for (let S = 0; S < g.length; S += 1)
        g[S] && g[S].m(l, null);
      f = ir(
        t,
        /*div1_elementresize_handler*/
        e[18].bind(t)
      ), a = !0;
    },
    p(w, p) {
      if (c === (c = _(w)) && d ? d.p(w, p) : (d.d(1), d = c(w), d && (d.c(), d.m(n, null))), p & /*format_number, tooltip2_array_values*/
      33) {
        h = ke(
          /*tooltip2_array_values*/
          w[0]
        );
        let S;
        for (S = 0; S < h.length; S += 1) {
          const x = Sh(w, h, S);
          g[S] ? g[S].p(x, p) : (g[S] = Ah(x), g[S].c(), g[S].m(l, null));
        }
        for (; S < g.length; S += 1)
          g[S].d(1);
        g.length = h.length;
      }
      (!a || p & /*yPosition*/
      64) && y(
        t,
        "top",
        /*yPosition*/
        w[6] + "px"
      ), (!a || p & /*xPosition*/
      128) && y(
        t,
        "left",
        /*xPosition*/
        w[7] + "px"
      );
    },
    i(w) {
      a || (w && it(() => {
        a && (u || (u = Pt(t, Zt, {}, !0)), u.run(1));
      }), a = !0);
    },
    o(w) {
      w && (u || (u = Pt(t, Zt, {}, !1)), u.run(0)), a = !1;
    },
    d(w) {
      w && Z(t), d.d(), xn(g, w), f(), w && u && u.end();
    }
  };
}
function Qw(e) {
  let t = (
    /*tooltip2_array_values*/
    e[0][0].data.x.toString() + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(i, l) {
      j(i, n, l);
    },
    p(i, l) {
      l & /*tooltip2_array_values*/
      1 && t !== (t = /*tooltip2_array_values*/
      i[0][0].data.x.toString() + "") && Oe(n, t);
    },
    d(i) {
      i && Z(n);
    }
  };
}
function Vw(e) {
  let t = (
    /*tooltip2_array_values*/
    e[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(i, l) {
      j(i, n, l);
    },
    p(i, l) {
      l & /*tooltip2_array_values*/
      1 && t !== (t = /*tooltip2_array_values*/
      i[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + "") && Oe(n, t);
    },
    d(i) {
      i && Z(n);
    }
  };
}
function $w(e) {
  let t = (
    /*tooltip2_array_values*/
    e[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 5).join(" ") + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(i, l) {
      j(i, n, l);
    },
    p(i, l) {
      l & /*tooltip2_array_values*/
      1 && t !== (t = /*tooltip2_array_values*/
      i[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 5).join(" ") + "") && Oe(n, t);
    },
    d(i) {
      i && Z(n);
    }
  };
}
function ep(e) {
  let t;
  return {
    c() {
      t = _e("span"), y(
        t,
        "background",
        /*line*/
        e[19].colors
      ), y(t, "width", "18px"), y(t, "height", "3px"), y(t, "border-radius", "1px"), y(t, "margin", "3px"), y(t, "border", "1px solid rgba(0, 0, 0, 0.5)");
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i & /*tooltip2_array_values*/
      1 && y(
        t,
        "background",
        /*line*/
        n[19].colors
      );
    },
    d(n) {
      n && Z(t);
    }
  };
}
function tp(e) {
  let t;
  return {
    c() {
      t = _e("span"), y(
        t,
        "background",
        /*line*/
        e[19].colors
      ), y(t, "width", "9px"), y(t, "height", "9px"), y(t, "border-radius", "50%"), y(t, "margin", "3px"), y(t, "border", "1px solid rgba(0, 0, 0, 0.5)");
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i & /*tooltip2_array_values*/
      1 && y(
        t,
        "background",
        /*line*/
        n[19].colors
      );
    },
    d(n) {
      n && Z(t);
    }
  };
}
function Ah(e) {
  let t, n, i, l, f, u = (
    /*line*/
    e[19].id + ""
  ), a, _, c, d = (
    /*format_number*/
    e[5](
      /*line*/
      e[19].data.y
    ) + ""
  ), h, g;
  function w(x, M) {
    if (
      /*line*/
      x[19].type === "points"
    )
      return tp;
    if (
      /*line*/
      x[19].type === "line"
    )
      return ep;
  }
  let p = w(e), S = p && p(e);
  return {
    c() {
      t = _e("div"), n = _e("div"), i = _e("div"), S && S.c(), l = ve(), f = _e("span"), a = Ae(u), _ = ve(), c = _e("div"), h = Ae(d), g = ve(), y(i, "width", "18px"), y(i, "display", "flex"), y(i, "align-items", "center"), y(i, "justify-content", "center"), y(n, "display", "flex"), y(n, "align-items", "center"), v(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(x, M) {
      j(x, t, M), q(t, n), q(n, i), S && S.m(i, null), q(n, l), q(n, f), q(f, a), q(t, _), q(t, c), q(c, h), q(t, g);
    },
    p(x, M) {
      p === (p = w(x)) && S ? S.p(x, M) : (S && S.d(1), S = p && p(x), S && (S.c(), S.m(i, null))), M & /*tooltip2_array_values*/
      1 && u !== (u = /*line*/
      x[19].id + "") && Oe(a, u), M & /*format_number, tooltip2_array_values*/
      33 && d !== (d = /*format_number*/
      x[5](
        /*line*/
        x[19].data.y
      ) + "") && Oe(h, d);
    },
    d(x) {
      x && Z(t), S && S.d();
    }
  };
}
function np(e) {
  let t, n = (
    /*tooltip2_array_values*/
    e[0] && /*tooltip2_array_values*/
    e[0].length > 0 && zh(e)
  );
  return {
    c() {
      n && n.c(), t = Le();
    },
    m(i, l) {
      n && n.m(i, l), j(i, t, l);
    },
    p(i, [l]) {
      /*tooltip2_array_values*/
      i[0] && /*tooltip2_array_values*/
      i[0].length > 0 ? n ? (n.p(i, l), l & /*tooltip2_array_values*/
      1 && ee(n, 1)) : (n = zh(i), n.c(), ee(n, 1), n.m(t.parentNode, t)) : n && (We(), ue(n, 1, 1, () => {
        n = null;
      }), Be());
    },
    i(i) {
      ee(n);
    },
    o(i) {
      ue(n);
    },
    d(i) {
      i && Z(t), n && n.d(i);
    }
  };
}
const Ch = 20, Lh = 0;
function ip(e, t, n) {
  let i, l, f, u, a, { x_scale: _ } = t, { m_y: c } = t, { tooltip2_array_values: d } = t, { format_tooltip: h } = t, { height: g } = t, { width: w } = t, { margin: p } = t, { buffer: S } = t, { interval: x } = t, { type: M } = t, z, C, P;
  function O() {
    z = this.clientWidth, C = this.clientHeight, n(3, z), n(4, C);
  }
  return e.$$set = (E) => {
    "x_scale" in E && n(8, _ = E.x_scale), "m_y" in E && n(9, c = E.m_y), "tooltip2_array_values" in E && n(0, d = E.tooltip2_array_values), "format_tooltip" in E && n(10, h = E.format_tooltip), "height" in E && n(11, g = E.height), "width" in E && n(12, w = E.width), "margin" in E && n(13, p = E.margin), "buffer" in E && n(14, S = E.buffer), "interval" in E && n(1, x = E.interval), "type" in E && n(2, M = E.type);
  }, e.$$.update = () => {
    e.$$.dirty & /*tooltip2_array_values, type, maxYValue*/
    32773 && (d.forEach((E) => {
      E.second_axis && (E.data.y = E.data.y_og);
    }), n(15, P = Math.max(...d.map((E) => E.data.y))), n(0, d = d.map((E) => ({
      ...E,
      shape: M === "scatter" ? "point" : "line"
    })).sort((E, B) => B.data.y - E.data.y || B.data.y - P))), e.$$.dirty & /*x_scale, tooltip2_array_values*/
    257 && n(17, i = _(d[0].data.x)), e.$$.dirty & /*m_y*/
    512 && n(16, l = c), e.$$.dirty & /*x, tooltipWidth, width*/
    135176 && n(7, f = i + z > w ? i - z - Ch : i + Ch), e.$$.dirty & /*y, tooltipHeight, height, margin, buffer*/
    92176 && n(6, u = l + C > g - p - S ? l - C - Lh - p - S : l + Lh), e.$$.dirty & /*format_tooltip*/
    1024 && n(5, a = hn(h));
  }, [
    d,
    x,
    M,
    z,
    C,
    a,
    u,
    f,
    _,
    c,
    h,
    g,
    w,
    p,
    S,
    P,
    l,
    i,
    O
  ];
}
class rp extends ct {
  constructor(t) {
    super(), ht(this, t, ip, np, ut, {
      x_scale: 8,
      m_y: 9,
      tooltip2_array_values: 0,
      format_tooltip: 10,
      height: 11,
      width: 12,
      margin: 13,
      buffer: 14,
      interval: 1,
      type: 2
    });
  }
}
function lp(e) {
  let t, n, i, l, f, u, a, _, c;
  return {
    c() {
      t = ze("circle"), v(
        t,
        "cx",
        /*$tweened_cx*/
        e[7]
      ), v(
        t,
        "cy",
        /*$tweened_cy*/
        e[8]
      ), v(t, "fill", n = /*categories*/
      e[0].colors), v(t, "stroke", i = /*categories*/
      e[0].colors), v(t, "stroke-width", l = /*listener*/
      e[6] && /*tooltip2_array_values*/
      e[5] && /*tooltip2_array_values*/
      e[5].data.x === /*points*/
      e[1].x && /*tooltip2_array_values*/
      e[5].data.y === /*points*/
      e[1].y ? (
        /*categories*/
        e[0].size * 4
      ) : (
        /*categories*/
        e[0].size
      )), v(t, "stroke-opacity", f = /*listener*/
      e[6] && /*tooltip2_array_values*/
      e[5] && /*tooltip2_array_values*/
      e[5].data.x === /*points*/
      e[1].x && /*tooltip2_array_values*/
      e[5].data.y === /*points*/
      e[1].y ? (
        /*categories*/
        e[0].opacity * 0.2
      ) : 0), v(t, "opacity", u = /*listener*/
      e[6] && /*tooltip2_array_values*/
      e[5] || /*hover_legend*/
      e[3] && /*current_categories*/
      e[4].includes(
        /*hover_legend*/
        e[3]
      ) ? (
        /*tooltip2_array_values*/
        e[5] && /*tooltip2_array_values*/
        e[5].id === /*categories*/
        e[0].id || /*hover_legend*/
        e[3] === /*categories*/
        e[0].id ? (
          /*categories*/
          e[0].opacity
        ) : (
          /*categories*/
          e[0].opacity * 0.2
        )
      ) : (
        /*categories*/
        e[0].opacity
      )), v(t, "r", a = /*listener*/
      e[6] && /*tooltip2_array_values*/
      e[5] && /*tooltip2_array_values*/
      e[5].data.x === /*points*/
      e[1].x && /*tooltip2_array_values*/
      e[5].data.y === /*points*/
      e[1].y ? (
        /*categories*/
        e[0].size * 2
      ) : (
        /*categories*/
        e[0].size
      ));
    },
    m(d, h) {
      j(d, t, h), _ || (c = [
        ot(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[14]
        ),
        ot(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[15]
        )
      ], _ = !0);
    },
    p(d, [h]) {
      h & /*$tweened_cx*/
      128 && v(
        t,
        "cx",
        /*$tweened_cx*/
        d[7]
      ), h & /*$tweened_cy*/
      256 && v(
        t,
        "cy",
        /*$tweened_cy*/
        d[8]
      ), h & /*categories*/
      1 && n !== (n = /*categories*/
      d[0].colors) && v(t, "fill", n), h & /*categories*/
      1 && i !== (i = /*categories*/
      d[0].colors) && v(t, "stroke", i), h & /*listener, tooltip2_array_values, points, categories*/
      99 && l !== (l = /*listener*/
      d[6] && /*tooltip2_array_values*/
      d[5] && /*tooltip2_array_values*/
      d[5].data.x === /*points*/
      d[1].x && /*tooltip2_array_values*/
      d[5].data.y === /*points*/
      d[1].y ? (
        /*categories*/
        d[0].size * 4
      ) : (
        /*categories*/
        d[0].size
      )) && v(t, "stroke-width", l), h & /*listener, tooltip2_array_values, points, categories*/
      99 && f !== (f = /*listener*/
      d[6] && /*tooltip2_array_values*/
      d[5] && /*tooltip2_array_values*/
      d[5].data.x === /*points*/
      d[1].x && /*tooltip2_array_values*/
      d[5].data.y === /*points*/
      d[1].y ? (
        /*categories*/
        d[0].opacity * 0.2
      ) : 0) && v(t, "stroke-opacity", f), h & /*listener, tooltip2_array_values, hover_legend, current_categories, categories*/
      121 && u !== (u = /*listener*/
      d[6] && /*tooltip2_array_values*/
      d[5] || /*hover_legend*/
      d[3] && /*current_categories*/
      d[4].includes(
        /*hover_legend*/
        d[3]
      ) ? (
        /*tooltip2_array_values*/
        d[5] && /*tooltip2_array_values*/
        d[5].id === /*categories*/
        d[0].id || /*hover_legend*/
        d[3] === /*categories*/
        d[0].id ? (
          /*categories*/
          d[0].opacity
        ) : (
          /*categories*/
          d[0].opacity * 0.2
        )
      ) : (
        /*categories*/
        d[0].opacity
      )) && v(t, "opacity", u), h & /*listener, tooltip2_array_values, points, categories*/
      99 && a !== (a = /*listener*/
      d[6] && /*tooltip2_array_values*/
      d[5] && /*tooltip2_array_values*/
      d[5].data.x === /*points*/
      d[1].x && /*tooltip2_array_values*/
      d[5].data.y === /*points*/
      d[1].y ? (
        /*categories*/
        d[0].size * 2
      ) : (
        /*categories*/
        d[0].size
      )) && v(t, "r", a);
    },
    i: Pe,
    o: Pe,
    d(d) {
      d && Z(t), _ = !1, Ht(c);
    }
  };
}
function op(e, t, n) {
  let i, l, { x: f } = t, { y: u } = t, { categories: a } = t, { points: _ } = t, { tweenOptions: c } = t, { hovered_data: d } = t, { hover_legend: h } = t, { current_categories: g } = t, { tooltip2_array_values: w } = t, { listener: p } = t, S = Ut(f, c == null ? void 0 : c.x);
  wt(e, S, (C) => n(7, i = C));
  let x = Ut(u, c == null ? void 0 : c.y);
  wt(e, x, (C) => n(8, l = C));
  const M = (C) => {
    D6.set(_.x), d.set(a.id), N_.set(_);
  }, z = () => {
    d.set(null), N_.set(null);
  };
  return e.$$set = (C) => {
    "x" in C && n(11, f = C.x), "y" in C && n(12, u = C.y), "categories" in C && n(0, a = C.categories), "points" in C && n(1, _ = C.points), "tweenOptions" in C && n(13, c = C.tweenOptions), "hovered_data" in C && n(2, d = C.hovered_data), "hover_legend" in C && n(3, h = C.hover_legend), "current_categories" in C && n(4, g = C.current_categories), "tooltip2_array_values" in C && n(5, w = C.tooltip2_array_values), "listener" in C && n(6, p = C.listener);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions, y*/
    14336 && Ll().then(() => {
      S.set(f, c == null ? void 0 : c.x), x.set(u, c == null ? void 0 : c.y);
    });
  }, [
    a,
    _,
    d,
    h,
    g,
    w,
    p,
    i,
    l,
    S,
    x,
    f,
    u,
    c,
    M,
    z
  ];
}
class fp extends ct {
  constructor(t) {
    super(), ht(this, t, op, lp, ut, {
      x: 11,
      y: 12,
      categories: 0,
      points: 1,
      tweenOptions: 13,
      hovered_data: 2,
      hover_legend: 3,
      current_categories: 4,
      tooltip2_array_values: 5,
      listener: 6
    });
  }
}
function Eh(e, t, n) {
  const i = e.slice();
  return i[13] = t[n], i;
}
function Rh(e) {
  let t, n, i, l = (
    /*legend_entries*/
    e[13].legend_text + ""
  ), f, u, a, _, c;
  function d() {
    return (
      /*mouseover_handler*/
      e[9](
        /*legend_entries*/
        e[13]
      )
    );
  }
  function h(...g) {
    return (
      /*click_handler*/
      e[10](
        /*legend_entries*/
        e[13],
        ...g
      )
    );
  }
  return {
    c() {
      t = _e("p"), n = _e("span"), i = ve(), f = Ae(l), u = ve(), y(
        n,
        "background",
        /*legend_entries*/
        e[13].colors
      ), y(n, "width", "8px"), y(n, "height", "8px"), y(n, "display", "inline-block"), y(n, "border-radius", "50%"), y(n, "border", "1px solid rgba(0, 0, 0, 0.5)"), v(t, "style", a = /*$hovered_legend*/
      e[5] && /*$hovered_legend*/
      e[5] !== /*legend_entries*/
      e[13].legend_text ? "opacity: 0.3; margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;");
    },
    m(g, w) {
      j(g, t, w), q(t, n), q(t, i), q(t, f), q(t, u), _ || (c = [
        ot(t, "mouseover", d),
        ot(t, "click", h)
      ], _ = !0);
    },
    p(g, w) {
      e = g, w & /*uniqueCombinations*/
      16 && y(
        n,
        "background",
        /*legend_entries*/
        e[13].colors
      ), w & /*uniqueCombinations*/
      16 && l !== (l = /*legend_entries*/
      e[13].legend_text + "") && Oe(f, l), w & /*$hovered_legend, uniqueCombinations*/
      48 && a !== (a = /*$hovered_legend*/
      e[5] && /*$hovered_legend*/
      e[5] !== /*legend_entries*/
      e[13].legend_text ? "opacity: 0.3; margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;") && v(t, "style", a);
    },
    d(g) {
      g && Z(t), _ = !1, Ht(c);
    }
  };
}
function up(e) {
  let t, n, i, l = ke(
    /*uniqueCombinations*/
    e[4]
  ), f = [];
  for (let u = 0; u < l.length; u += 1)
    f[u] = Rh(Eh(e, l, u));
  return {
    c() {
      t = _e("div");
      for (let u = 0; u < f.length; u += 1)
        f[u].c();
      v(t, "class", "legend"), y(t, "display", "flex"), y(t, "place-items", "center"), y(t, "justify-content", "flex-start"), y(t, "flex-direction", "row"), y(t, "flex-wrap", "wrap"), y(t, "column-gap", "10px"), y(t, "row-gap", "5px"), y(t, "margin-bottom", "0.25rem"), y(
        t,
        "margin-left",
        /*label_height*/
        e[0] + /*space_between_label_and_ticks*/
        e[1] + "px"
      );
    },
    m(u, a) {
      j(u, t, a);
      for (let _ = 0; _ < f.length; _ += 1)
        f[_] && f[_].m(t, null);
      e[11](t), n || (i = ot(
        t,
        "mouseleave",
        /*handleMouseLeave*/
        e[6]
      ), n = !0);
    },
    p(u, [a]) {
      if (a & /*$hovered_legend, uniqueCombinations, legendClicked, handleLegendClick*/
      184) {
        l = ke(
          /*uniqueCombinations*/
          u[4]
        );
        let _;
        for (_ = 0; _ < l.length; _ += 1) {
          const c = Eh(u, l, _);
          f[_] ? f[_].p(c, a) : (f[_] = Rh(c), f[_].c(), f[_].m(t, null));
        }
        for (; _ < f.length; _ += 1)
          f[_].d(1);
        f.length = l.length;
      }
      a & /*label_height, space_between_label_and_ticks*/
      3 && y(
        t,
        "margin-left",
        /*label_height*/
        u[0] + /*space_between_label_and_ticks*/
        u[1] + "px"
      );
    },
    i: Pe,
    o: Pe,
    d(u) {
      u && Z(t), xn(f, u), e[11](null), n = !1, i();
    }
  };
}
function ap(e, t, n) {
  let i, l;
  wt(e, Qi, (x) => n(5, l = x));
  let { filtered_segments_df: f } = t, { label_height: u } = t, { space_between_label_and_ticks: a } = t, _, c = !1;
  function d(x) {
    _ && !_.contains(x.target) && (Qi.set(null), n(3, c = !1));
  }
  function h() {
    c || Qi.set(null);
  }
  function g(x, M) {
    M.stopPropagation(), Qi.set(x.legend_text), n(3, c = !0);
  }
  const w = (x) => {
    c || Qi.set(x.legend_text);
  }, p = (x, M) => g(x, M);
  function S(x) {
    _t[x ? "unshift" : "push"](() => {
      _ = x, n(2, _);
    });
  }
  return e.$$set = (x) => {
    "filtered_segments_df" in x && n(8, f = x.filtered_segments_df), "label_height" in x && n(0, u = x.label_height), "space_between_label_and_ticks" in x && n(1, a = x.space_between_label_and_ticks);
  }, e.$$.update = () => {
    e.$$.dirty & /*filtered_segments_df*/
    256 && n(4, i = Array.from(new Map(f.map((x) => [
      `${x.colors}-${x.legend_text}`,
      {
        colors: x.colors,
        legend_text: x.legend_text
      }
    ])).values())), e.$$.dirty & /*legendContainer*/
    4 && (_ && document.addEventListener("dblclick", d), Vu(() => {
      document.removeEventListener("dblclick", d);
    }));
  }, [
    u,
    a,
    _,
    c,
    i,
    l,
    h,
    g,
    f,
    w,
    p,
    S
  ];
}
class sp extends ct {
  constructor(t) {
    super(), ht(this, t, ap, up, ut, {
      filtered_segments_df: 8,
      label_height: 0,
      space_between_label_and_ticks: 1
    });
  }
}
function Ih(e, t, n) {
  const i = e.slice();
  return i[21] = t[n], i[22] = t, i[23] = n, i;
}
function Oh(e, t, n) {
  const i = e.slice();
  return i[21] = t[n], i[24] = t, i[23] = n, i;
}
function Dh(e) {
  let t, n, i, l = ke(
    /*final_positions*/
    e[3]
  ), f = [];
  for (let _ = 0; _ < l.length; _ += 1)
    f[_] = Nh(Oh(e, l, _));
  let u = ke(
    /*final_positions*/
    e[3]
  ), a = [];
  for (let _ = 0; _ < u.length; _ += 1)
    a[_] = Uh(Ih(e, u, _));
  return {
    c() {
      t = ze("svg");
      for (let _ = 0; _ < f.length; _ += 1)
        f[_].c();
      n = ve();
      for (let _ = 0; _ < a.length; _ += 1)
        a[_].c();
      i = Le(), v(
        t,
        "width",
        /*width*/
        e[0]
      ), v(
        t,
        "height",
        /*height*/
        e[1]
      ), y(t, "position", "absolute"), y(t, "top", "0"), y(t, "left", "0");
    },
    m(_, c) {
      j(_, t, c);
      for (let d = 0; d < f.length; d += 1)
        f[d] && f[d].m(t, null);
      j(_, n, c);
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(_, c);
      j(_, i, c);
    },
    p(_, c) {
      if (c & /*lineElements, final_positions*/
      40) {
        l = ke(
          /*final_positions*/
          _[3]
        );
        let d;
        for (d = 0; d < l.length; d += 1) {
          const h = Oh(_, l, d);
          f[d] ? f[d].p(h, c) : (f[d] = Nh(h), f[d].c(), f[d].m(t, null));
        }
        for (; d < f.length; d += 1)
          f[d].d(1);
        f.length = l.length;
      }
      if (c & /*width*/
      1 && v(
        t,
        "width",
        /*width*/
        _[0]
      ), c & /*height*/
      2 && v(
        t,
        "height",
        /*height*/
        _[1]
      ), c & /*final_positions, tooltipElements, handleMouseDown*/
      88) {
        u = ke(
          /*final_positions*/
          _[3]
        );
        let d;
        for (d = 0; d < u.length; d += 1) {
          const h = Ih(_, u, d);
          a[d] ? a[d].p(h, c) : (a[d] = Uh(h), a[d].c(), a[d].m(i.parentNode, i));
        }
        for (; d < a.length; d += 1)
          a[d].d(1);
        a.length = u.length;
      }
    },
    d(_) {
      _ && (Z(t), Z(n), Z(i)), xn(f, _), xn(a, _);
    }
  };
}
function Nh(e) {
  let t, n = (
    /*i*/
    e[23]
  );
  const i = () => (
    /*line_binding*/
    e[16](t, n)
  ), l = () => (
    /*line_binding*/
    e[16](null, n)
  );
  return {
    c() {
      t = ze("line"), v(t, "class", "line"), y(t, "stroke", "black"), y(t, "stroke-width", "1");
    },
    m(f, u) {
      j(f, t, u), i();
    },
    p(f, u) {
      e = f, n !== /*i*/
      e[23] && (l(), n = /*i*/
      e[23], i());
    },
    d(f) {
      f && Z(t), l();
    }
  };
}
function Uh(e) {
  let t, n, i = (
    /*segment*/
    e[21].tooltip + ""
  ), l, f = (
    /*i*/
    e[23]
  ), u, a;
  const _ = () => (
    /*div_binding*/
    e[17](t, f)
  ), c = () => (
    /*div_binding*/
    e[17](null, f)
  );
  function d(...h) {
    return (
      /*mousedown_handler*/
      e[18](
        /*i*/
        e[23],
        ...h
      )
    );
  }
  return {
    c() {
      t = _e("div"), n = new p6(!1), l = ve(), n.a = l, y(t, "position", "absolute"), y(
        t,
        "top",
        /*segment*/
        e[21].top + "px"
      ), y(
        t,
        "left",
        /*segment*/
        e[21].left + "px"
      ), y(
        t,
        "background-color",
        /*segment*/
        e[21].colors
      ), y(t, "opacity", "0.8"), y(
        t,
        "width",
        /*segment*/
        e[21].width + "px"
      ), y(t, "height", "auto"), y(t, "display", "flex"), y(t, "flex-direction", "column"), y(t, "align-items", "start"), y(t, "padding", "2px"), y(t, "white-space", "normal"), y(t, "overflow-wrap", "break-word"), y(t, "font-family", "Arial"), y(
        t,
        "font-size",
        /*segment*/
        e[21].font_size + "px"
      ), y(
        t,
        "color",
        /*segment*/
        e[21].text_color
      ), y(t, "transform", "translate(" + /*segment*/
      e[21].dx + "px, " + /*segment*/
      e[21].dy + "px)"), y(t, "max-height", "200px"), y(t, "overflow-y", "auto"), y(t, "cursor", "move"), y(t, "user-select", "none"), y(t, "pointer-events", "auto");
    },
    m(h, g) {
      j(h, t, g), n.m(i, t), q(t, l), _(), u || (a = ot(t, "mousedown", d), u = !0);
    },
    p(h, g) {
      e = h, g & /*final_positions*/
      8 && i !== (i = /*segment*/
      e[21].tooltip + "") && n.p(i), g & /*final_positions*/
      8 && y(
        t,
        "top",
        /*segment*/
        e[21].top + "px"
      ), g & /*final_positions*/
      8 && y(
        t,
        "left",
        /*segment*/
        e[21].left + "px"
      ), g & /*final_positions*/
      8 && y(
        t,
        "background-color",
        /*segment*/
        e[21].colors
      ), g & /*final_positions*/
      8 && y(
        t,
        "width",
        /*segment*/
        e[21].width + "px"
      ), g & /*final_positions*/
      8 && y(
        t,
        "font-size",
        /*segment*/
        e[21].font_size + "px"
      ), g & /*final_positions*/
      8 && y(
        t,
        "color",
        /*segment*/
        e[21].text_color
      ), g & /*final_positions*/
      8 && y(t, "transform", "translate(" + /*segment*/
      e[21].dx + "px, " + /*segment*/
      e[21].dy + "px)"), f !== /*i*/
      e[23] && (c(), f = /*i*/
      e[23], _());
    },
    d(h) {
      h && Z(t), c(), u = !1, a();
    }
  };
}
function _p(e) {
  let t, n = (
    /*$hovered_legend*/
    e[2] && /*final_positions*/
    e[3] && Dh(e)
  );
  return {
    c() {
      n && n.c(), t = Le();
    },
    m(i, l) {
      n && n.m(i, l), j(i, t, l);
    },
    p(i, [l]) {
      /*$hovered_legend*/
      i[2] && /*final_positions*/
      i[3] ? n ? n.p(i, l) : (n = Dh(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Pe,
    o: Pe,
    d(i) {
      i && Z(t), n && n.d(i);
    }
  };
}
function hp(e) {
  let t = !0, n = e[0], i = n, l = n;
  for (let f = 1; f < e.length; f++) {
    let u = e[f], a = n;
    a.left + a.width > u.left ? (t ? (a = i || n, u.top = a.top + a.height + 1, i = u) : (a = l || n, u.top = a.top - u.height - 1, l = u), t = !t) : (n = u, i = u, l = u);
  }
  return e;
}
function cp(e, t) {
  const i = document.createElement("canvas").getContext("2d");
  return i.font = `${t}px Arial`, i.measureText(e).width;
}
function gp(e, t, n) {
  const i = document.createElement("div");
  i.style.position = "absolute", i.style.top = "0px", i.style.left = "0px", i.style.width = `${n}px`, i.style.fontSize = `${t}px`, i.style.lineHeight = "1.5", i.style.visibility = "hidden", i.style.whiteSpace = "normal", i.style.overflowWrap = "break-word", i.style.fontFamily = "Arial", i.style.padding = "2px", i.style.boxSizing = "border-box", i.style.border = "1px solid transparent", i.style.backgroundColor = "white", i.style.display = "flex", i.style.flexDirection = "column", i.style.alignItems = "start", i.style.height = "auto", i.innerHTML = e, document.body.appendChild(i);
  const l = i.scrollHeight;
  return document.body.removeChild(i), l;
}
function dp(e, t) {
  const n = t.initial_left, i = t.initial_top, l = t.left + t.dx, f = t.top + t.dy;
  e.setAttribute("x1", n), e.setAttribute("y1", i), e.setAttribute("x2", l), e.setAttribute("y2", f);
}
function mp(e, t, n) {
  let i;
  wt(e, Qi, (D) => n(2, i = D));
  let { y: l } = t, { filtered_segments_df: f } = t, { x_scale: u } = t, { y_scale: a } = t, { width: _ } = t, { height: c } = t, { line_generator_space: d } = t, { y_lines_spacing: h } = t, g = [], w, p, S;
  function x(D, te) {
    return D.map((ce) => {
      let fe = ce.y_position ? a(ce.y_position) : a(l), re = u(ce.x_position), J = Math.min(Math.max(ce.x_end - ce.x_start, 100), te);
      const H = cp(ce.tooltip, ce.font_size);
      H < J && (J = H);
      const A = gp(ce.tooltip, ce.font_size, J);
      let R = Math.max(A, 20);
      return {
        top: fe,
        left: re,
        width: J,
        height: R,
        dx: 0,
        dy: 0,
        colors: ce.colors,
        font_size: ce.font_size,
        text_color: ce.text_color,
        tooltip: ce.tooltip,
        initial_top: fe,
        initial_left: re,
        opacity: ce.opacity
      };
    });
  }
  function M(D, te) {
    const W = C[te], K = P[te], se = p[te], ce = D.clientX - se.dx, fe = D.clientY - se.dy;
    function re(H) {
      se.dx = H.clientX - ce, se.dy = H.clientY - fe, W.style.transform = `translate(${se.dx}px, ${se.dy}px)`, dp(K, se);
    }
    function J() {
      window.removeEventListener("mousemove", re), window.removeEventListener("mouseup", J);
    }
    window.addEventListener("mousemove", re), window.addEventListener("mouseup", J);
  }
  function z() {
    P.forEach((D) => {
      D && (D.setAttribute("x1", ""), D.setAttribute("y1", ""), D.setAttribute("x2", ""), D.setAttribute("y2", ""));
    });
  }
  let C = f.map(() => null), P = f.map(() => null);
  function O(D, te) {
    _t[D ? "unshift" : "push"](() => {
      P[te] = D, n(5, P);
    });
  }
  function E(D, te) {
    _t[D ? "unshift" : "push"](() => {
      C[te] = D, n(4, C);
    });
  }
  const B = (D, te) => M(te, D);
  return e.$$set = (D) => {
    "y" in D && n(7, l = D.y), "filtered_segments_df" in D && n(8, f = D.filtered_segments_df), "x_scale" in D && n(9, u = D.x_scale), "y_scale" in D && n(10, a = D.y_scale), "width" in D && n(0, _ = D.width), "height" in D && n(1, c = D.height), "line_generator_space" in D && n(11, d = D.line_generator_space), "y_lines_spacing" in D && n(12, h = D.y_lines_spacing);
  }, e.$$.update = () => {
    e.$$.dirty & /*filtered_segments_df, $hovered_legend*/
    260 && n(13, g = f.filter((D) => D.legend_text === i)), e.$$.dirty & /*filtered_segments_df_temp, width, y_lines_spacing, line_generator_space, tooltipPositions*/
    30721 && g.length > 0 && (n(14, w = x(g, _ - h - d * 4)), n(3, p = hp(w))), e.$$.dirty & /*$hovered_legend, previous_hovered_legend*/
    32772 && i !== S && (z(), n(15, S = i));
  }, [
    _,
    c,
    i,
    p,
    C,
    P,
    M,
    l,
    f,
    u,
    a,
    d,
    h,
    g,
    w,
    S,
    O,
    E,
    B
  ];
}
class yp extends ct {
  constructor(t) {
    super(), ht(this, t, mp, _p, ut, {
      y: 7,
      filtered_segments_df: 8,
      x_scale: 9,
      y_scale: 10,
      width: 0,
      height: 1,
      line_generator_space: 11,
      y_lines_spacing: 12
    });
  }
}
function bp(e) {
  let t, n, i;
  return {
    c() {
      t = ze("rect"), v(
        t,
        "x",
        /*$tweened_x1*/
        e[10]
      ), v(
        t,
        "y",
        /*$tweened_y2*/
        e[13]
      ), v(t, "width", n = /*$tweened_x2*/
      e[11] - /*$tweened_x1*/
      e[10]), v(t, "height", i = /*$tweened_y1*/
      e[12] - /*$tweened_y2*/
      e[13]), v(
        t,
        "fill",
        /*colors*/
        e[5]
      ), v(
        t,
        "opacity",
        /*opacity*/
        e[2]
      ), v(
        t,
        "stroke-width",
        /*outline_width*/
        e[1]
      ), v(
        t,
        "stroke",
        /*outline_color*/
        e[3]
      ), v(t, "clip-path", `url(#${ga})`);
    },
    m(l, f) {
      j(l, t, f);
    },
    p(l, f) {
      f & /*$tweened_x1*/
      1024 && v(
        t,
        "x",
        /*$tweened_x1*/
        l[10]
      ), f & /*$tweened_y2*/
      8192 && v(
        t,
        "y",
        /*$tweened_y2*/
        l[13]
      ), f & /*$tweened_x2, $tweened_x1*/
      3072 && n !== (n = /*$tweened_x2*/
      l[11] - /*$tweened_x1*/
      l[10]) && v(t, "width", n), f & /*$tweened_y1, $tweened_y2*/
      12288 && i !== (i = /*$tweened_y1*/
      l[12] - /*$tweened_y2*/
      l[13]) && v(t, "height", i), f & /*colors*/
      32 && v(
        t,
        "fill",
        /*colors*/
        l[5]
      ), f & /*opacity*/
      4 && v(
        t,
        "opacity",
        /*opacity*/
        l[2]
      ), f & /*outline_width*/
      2 && v(
        t,
        "stroke-width",
        /*outline_width*/
        l[1]
      ), f & /*outline_color*/
      8 && v(
        t,
        "stroke",
        /*outline_color*/
        l[3]
      );
    },
    d(l) {
      l && Z(t);
    }
  };
}
function wp(e) {
  let t;
  return {
    c() {
      t = ze("line"), v(
        t,
        "x1",
        /*$tweened_x1*/
        e[10]
      ), v(
        t,
        "x2",
        /*$tweened_x2*/
        e[11]
      ), v(
        t,
        "y1",
        /*$tweened_y1*/
        e[12]
      ), v(
        t,
        "y2",
        /*$tweened_y2*/
        e[13]
      ), v(
        t,
        "stroke",
        /*colors*/
        e[5]
      ), v(
        t,
        "stroke-dasharray",
        /*linetype*/
        e[4]
      ), v(t, "clip-path", `url(#${ga})`);
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i & /*$tweened_x1*/
      1024 && v(
        t,
        "x1",
        /*$tweened_x1*/
        n[10]
      ), i & /*$tweened_x2*/
      2048 && v(
        t,
        "x2",
        /*$tweened_x2*/
        n[11]
      ), i & /*$tweened_y1*/
      4096 && v(
        t,
        "y1",
        /*$tweened_y1*/
        n[12]
      ), i & /*$tweened_y2*/
      8192 && v(
        t,
        "y2",
        /*$tweened_y2*/
        n[13]
      ), i & /*colors*/
      32 && v(
        t,
        "stroke",
        /*colors*/
        n[5]
      ), i & /*linetype*/
      16 && v(
        t,
        "stroke-dasharray",
        /*linetype*/
        n[4]
      );
    },
    d(n) {
      n && Z(t);
    }
  };
}
function pp(e) {
  let t, n, i, l, f, u, a, _, c;
  function d(w, p) {
    return (
      /*type*/
      w[0] === "line" ? wp : bp
    );
  }
  let h = d(e), g = h(e);
  return {
    c() {
      t = ze("defs"), n = ze("clipPath"), i = ze("rect"), _ = ve(), g.c(), c = Le(), v(i, "x", l = /*y_lines_spacing*/
      e[9] + /*line_generator_space*/
      e[6] * 1.5), v(i, "y", f = /*line_generator_space*/
      e[6] * 2), v(i, "width", u = /*width*/
      e[7] - /*line_generator_space*/
      e[6] * 7), v(i, "height", a = /*x_lines_spacing*/
      e[8] - /*line_generator_space*/
      e[6] * 2), v(n, "id", ga);
    },
    m(w, p) {
      j(w, t, p), q(t, n), q(n, i), j(w, _, p), g.m(w, p), j(w, c, p);
    },
    p(w, [p]) {
      p & /*y_lines_spacing, line_generator_space*/
      576 && l !== (l = /*y_lines_spacing*/
      w[9] + /*line_generator_space*/
      w[6] * 1.5) && v(i, "x", l), p & /*line_generator_space*/
      64 && f !== (f = /*line_generator_space*/
      w[6] * 2) && v(i, "y", f), p & /*width, line_generator_space*/
      192 && u !== (u = /*width*/
      w[7] - /*line_generator_space*/
      w[6] * 7) && v(i, "width", u), p & /*x_lines_spacing, line_generator_space*/
      320 && a !== (a = /*x_lines_spacing*/
      w[8] - /*line_generator_space*/
      w[6] * 2) && v(i, "height", a), h === (h = d(w)) && g ? g.p(w, p) : (g.d(1), g = h(w), g && (g.c(), g.m(c.parentNode, c)));
    },
    i: Pe,
    o: Pe,
    d(w) {
      w && (Z(t), Z(_), Z(c)), g.d(w);
    }
  };
}
let ga = "clip-path";
function vp(e, t, n) {
  let i, l, f, u, { type: a } = t, { outline_width: _ } = t, { opacity: c } = t, { outline_color: d } = t, { linetype: h } = t, { colors: g } = t, { line_generator_space: w } = t, { width: p } = t, { x_lines_spacing: S } = t, { y_lines_spacing: x } = t, { x1: M } = t, { x2: z } = t, { y1: C } = t, { y2: P } = t, { tweenOptions: O } = t, E = Ut(M, O == null ? void 0 : O.x1);
  wt(e, E, (W) => n(10, i = W));
  let B = Ut(C, O == null ? void 0 : O.y1);
  wt(e, B, (W) => n(12, f = W));
  let D = Ut(z, O == null ? void 0 : O.x2);
  wt(e, D, (W) => n(11, l = W));
  let te = Ut(P, O == null ? void 0 : O.y2);
  return wt(e, te, (W) => n(13, u = W)), e.$$set = (W) => {
    "type" in W && n(0, a = W.type), "outline_width" in W && n(1, _ = W.outline_width), "opacity" in W && n(2, c = W.opacity), "outline_color" in W && n(3, d = W.outline_color), "linetype" in W && n(4, h = W.linetype), "colors" in W && n(5, g = W.colors), "line_generator_space" in W && n(6, w = W.line_generator_space), "width" in W && n(7, p = W.width), "x_lines_spacing" in W && n(8, S = W.x_lines_spacing), "y_lines_spacing" in W && n(9, x = W.y_lines_spacing), "x1" in W && n(18, M = W.x1), "x2" in W && n(19, z = W.x2), "y1" in W && n(20, C = W.y1), "y2" in W && n(21, P = W.y2), "tweenOptions" in W && n(22, O = W.tweenOptions);
  }, e.$$.update = () => {
    e.$$.dirty & /*x1, tweenOptions*/
    4456448 && E.set(M, O == null ? void 0 : O.x1), e.$$.dirty & /*y1, tweenOptions*/
    5242880 && B.set(C, O == null ? void 0 : O.y1), e.$$.dirty & /*x2, tweenOptions*/
    4718592 && D.set(z, O == null ? void 0 : O.x2), e.$$.dirty & /*y2, tweenOptions*/
    6291456 && te.set(P, O == null ? void 0 : O.y2);
  }, [
    a,
    _,
    c,
    d,
    h,
    g,
    w,
    p,
    S,
    x,
    i,
    l,
    f,
    u,
    E,
    B,
    D,
    te,
    M,
    z,
    C,
    P,
    O
  ];
}
class kp extends ct {
  constructor(t) {
    super(), ht(this, t, vp, pp, ut, {
      type: 0,
      outline_width: 1,
      opacity: 2,
      outline_color: 3,
      linetype: 4,
      colors: 5,
      line_generator_space: 6,
      width: 7,
      x_lines_spacing: 8,
      y_lines_spacing: 9,
      x1: 18,
      x2: 19,
      y1: 20,
      y2: 21,
      tweenOptions: 22
    });
  }
}
function Ph(e, t, n) {
  const i = e.slice();
  return i[5] = t[n], i;
}
function Fh(e, t, n) {
  const i = e.slice();
  return i[8] = t[n], i[10] = n, i;
}
function Wh(e, t) {
  let n, i = (
    /*line*/
    t[8] + ""
  ), l, f, u;
  return {
    key: e,
    first: null,
    c() {
      n = ze("tspan"), l = Ae(i), v(n, "x", f = /*x_scale*/
      t[1](
        /*annotation*/
        t[5].x
      )), v(n, "dy", u = /*index*/
      t[10] === 0 ? 0 : "1.2em"), this.first = n;
    },
    m(a, _) {
      j(a, n, _), q(n, l);
    },
    p(a, _) {
      t = a, _ & /*annotations_df*/
      1 && i !== (i = /*line*/
      t[8] + "") && Oe(l, i), _ & /*x_scale, annotations_df*/
      3 && f !== (f = /*x_scale*/
      t[1](
        /*annotation*/
        t[5].x
      )) && v(n, "x", f), _ & /*annotations_df*/
      1 && u !== (u = /*index*/
      t[10] === 0 ? 0 : "1.2em") && v(n, "dy", u);
    },
    d(a) {
      a && Z(n);
    }
  };
}
function Bh(e) {
  let t, n = [], i = /* @__PURE__ */ new Map(), l, f, u, a, _, c, d = ke(
    /*annotation*/
    e[5].text.split(`
`)
  );
  const h = (g) => (
    /*line*/
    g[8]
  );
  for (let g = 0; g < d.length; g += 1) {
    let w = Fh(e, d, g), p = h(w);
    i.set(p, n[g] = Wh(p, w));
  }
  return {
    c() {
      t = ze("text");
      for (let g = 0; g < n.length; g += 1)
        n[g].c();
      v(t, "x", l = /*x_scale*/
      e[1](
        /*annotation*/
        e[5].x
      )), v(t, "y", f = /*y_scale*/
      e[2](
        /*annotation*/
        e[5].y
      )), v(t, "fill", u = /*annotation*/
      e[5].color || "black"), v(t, "font-size", a = /*annotation*/
      e[5].font_size || "16px"), v(t, "text-anchor", _ = /*annotation*/
      e[5].text_anchor || "start"), v(t, "style", c = /*annotation*/
      e[5].style || "");
    },
    m(g, w) {
      j(g, t, w);
      for (let p = 0; p < n.length; p += 1)
        n[p] && n[p].m(t, null);
    },
    p(g, w) {
      w & /*x_scale, annotations_df*/
      3 && (d = ke(
        /*annotation*/
        g[5].text.split(`
`)
      ), n = kn(n, w, h, 1, g, d, i, t, vc, Wh, null, Fh)), w & /*x_scale, annotations_df*/
      3 && l !== (l = /*x_scale*/
      g[1](
        /*annotation*/
        g[5].x
      )) && v(t, "x", l), w & /*y_scale, annotations_df*/
      5 && f !== (f = /*y_scale*/
      g[2](
        /*annotation*/
        g[5].y
      )) && v(t, "y", f), w & /*annotations_df*/
      1 && u !== (u = /*annotation*/
      g[5].color || "black") && v(t, "fill", u), w & /*annotations_df*/
      1 && a !== (a = /*annotation*/
      g[5].font_size || "16px") && v(t, "font-size", a), w & /*annotations_df*/
      1 && _ !== (_ = /*annotation*/
      g[5].text_anchor || "start") && v(t, "text-anchor", _), w & /*annotations_df*/
      1 && c !== (c = /*annotation*/
      g[5].style || "") && v(t, "style", c);
    },
    d(g) {
      g && Z(t);
      for (let w = 0; w < n.length; w += 1)
        n[w].d();
    }
  };
}
function xp(e) {
  let t, n = ke(
    /*annotations_df*/
    e[0]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = Bh(Ph(e, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      t = Le();
    },
    m(l, f) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, f);
      j(l, t, f);
    },
    p(l, [f]) {
      if (f & /*x_scale, annotations_df, y_scale*/
      7) {
        n = ke(
          /*annotations_df*/
          l[0]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = Ph(l, n, u);
          i[u] ? i[u].p(a, f) : (i[u] = Bh(a), i[u].c(), i[u].m(t.parentNode, t));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = n.length;
      }
    },
    i: Pe,
    o: Pe,
    d(l) {
      l && Z(t), xn(i, l);
    }
  };
}
function Mp(e, t, n) {
  let { annotations_df: i } = t, { x_scale: l } = t, { y_scale: f } = t, { type: u } = t, { time_interval: a } = t;
  return e.$$set = (_) => {
    "annotations_df" in _ && n(0, i = _.annotations_df), "x_scale" in _ && n(1, l = _.x_scale), "y_scale" in _ && n(2, f = _.y_scale), "type" in _ && n(3, u = _.type), "time_interval" in _ && n(4, a = _.time_interval);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*type, annotations_df, time_interval*/
    25 && u === "timeseries")
      for (let _ = 0; _ < i.length; _++)
        n(0, i[_].x = Pr(a)(i[_].x), i), n(0, i[_].x = new Date(i[_].x), i);
  }, [i, l, f, u, a];
}
class Tp extends ct {
  constructor(t) {
    super(), ht(this, t, Mp, xp, ut, {
      annotations_df: 0,
      x_scale: 1,
      y_scale: 2,
      type: 3,
      time_interval: 4
    });
  }
}
function Hh(e, t, n) {
  const i = e.slice();
  return i[5] = t[n], i;
}
function Yh(e) {
  let t, n, i, l;
  return {
    c() {
      t = ze("path"), v(t, "d", n = vh(
        /*arrow*/
        e[5],
        /*x_scale*/
        e[1],
        /*y_scale*/
        e[2]
      )), v(t, "stroke", i = /*arrow*/
      e[5].color || "black"), v(t, "fill", "none"), v(t, "stroke-width", l = /*arrow*/
      e[5].width || "2");
    },
    m(f, u) {
      j(f, t, u);
    },
    p(f, u) {
      u & /*arrows_df, x_scale, y_scale*/
      7 && n !== (n = vh(
        /*arrow*/
        f[5],
        /*x_scale*/
        f[1],
        /*y_scale*/
        f[2]
      )) && v(t, "d", n), u & /*arrows_df*/
      1 && i !== (i = /*arrow*/
      f[5].color || "black") && v(t, "stroke", i), u & /*arrows_df*/
      1 && l !== (l = /*arrow*/
      f[5].width || "2") && v(t, "stroke-width", l);
    },
    d(f) {
      f && Z(t);
    }
  };
}
function Sp(e) {
  let t, n = ke(
    /*arrows_df*/
    e[0]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = Yh(Hh(e, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      t = Le();
    },
    m(l, f) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, f);
      j(l, t, f);
    },
    p(l, [f]) {
      if (f & /*arrows_df, x_scale, y_scale*/
      7) {
        n = ke(
          /*arrows_df*/
          l[0]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = Hh(l, n, u);
          i[u] ? i[u].p(a, f) : (i[u] = Yh(a), i[u].c(), i[u].m(t.parentNode, t));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = n.length;
      }
    },
    i: Pe,
    o: Pe,
    d(l) {
      l && Z(t), xn(i, l);
    }
  };
}
function zp(e, t, n) {
  let { arrows_df: i } = t, { x_scale: l } = t, { y_scale: f } = t, { type: u } = t, { time_interval: a } = t;
  return e.$$set = (_) => {
    "arrows_df" in _ && n(0, i = _.arrows_df), "x_scale" in _ && n(1, l = _.x_scale), "y_scale" in _ && n(2, f = _.y_scale), "type" in _ && n(3, u = _.type), "time_interval" in _ && n(4, a = _.time_interval);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*type, arrows_df, time_interval*/
    25 && u === "timeseries")
      for (let _ = 0; _ < i.length; _++)
        n(0, i[_].x_start = Pr(a)(i[_].x_start), i), n(0, i[_].x_start = new Date(i[_].x_start), i), n(0, i[_].x_end = Pr(a)(i[_].x_end), i), n(0, i[_].x_end = new Date(i[_].x_end), i);
    e.$$.dirty & /*arrows_df*/
    1 && console.log("arrows_df inside", i);
  }, [i, l, f, u, a];
}
class Ap extends ct {
  constructor(t) {
    super(), ht(this, t, zp, Sp, ut, {
      arrows_df: 0,
      x_scale: 1,
      y_scale: 2,
      type: 3,
      time_interval: 4
    });
  }
}
function Cp(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var da = Cp, Lp = typeof ki == "object" && ki && ki.Object === Object && ki, Ep = Lp, Rp = Ep, Ip = typeof self == "object" && self && self.Object === Object && self, Op = Rp || Ip || Function("return this")(), n0 = Op, Dp = n0, Np = function() {
  return Dp.Date.now();
}, Up = Np, Pp = /\s/;
function Fp(e) {
  for (var t = e.length; t-- && Pp.test(e.charAt(t)); )
    ;
  return t;
}
var Wp = Fp, Bp = Wp, Hp = /^\s+/;
function Yp(e) {
  return e && e.slice(0, Bp(e) + 1).replace(Hp, "");
}
var Xp = Yp, qp = n0, Gp = qp.Symbol, i0 = Gp, Xh = i0, r0 = Object.prototype, Zp = r0.hasOwnProperty, jp = r0.toString, gl = Xh ? Xh.toStringTag : void 0;
function Kp(e) {
  var t = Zp.call(e, gl), n = e[gl];
  try {
    e[gl] = void 0;
    var i = !0;
  } catch {
  }
  var l = jp.call(e);
  return i && (t ? e[gl] = n : delete e[gl]), l;
}
var Jp = Kp, Qp = Object.prototype, Vp = Qp.toString;
function $p(e) {
  return Vp.call(e);
}
var e4 = $p, qh = i0, t4 = Jp, n4 = e4, i4 = "[object Null]", r4 = "[object Undefined]", Gh = qh ? qh.toStringTag : void 0;
function l4(e) {
  return e == null ? e === void 0 ? r4 : i4 : Gh && Gh in Object(e) ? t4(e) : n4(e);
}
var o4 = l4;
function f4(e) {
  return e != null && typeof e == "object";
}
var u4 = f4, a4 = o4, s4 = u4, _4 = "[object Symbol]";
function h4(e) {
  return typeof e == "symbol" || s4(e) && a4(e) == _4;
}
var c4 = h4, g4 = Xp, Zh = da, d4 = c4, jh = 0 / 0, m4 = /^[-+]0x[0-9a-f]+$/i, y4 = /^0b[01]+$/i, b4 = /^0o[0-7]+$/i, w4 = parseInt;
function p4(e) {
  if (typeof e == "number")
    return e;
  if (d4(e))
    return jh;
  if (Zh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Zh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = g4(e);
  var n = y4.test(e);
  return n || b4.test(e) ? w4(e.slice(2), n ? 2 : 8) : m4.test(e) ? jh : +e;
}
var v4 = p4, k4 = da, zu = Up, Kh = v4, x4 = "Expected a function", M4 = Math.max, T4 = Math.min;
function S4(e, t, n) {
  var i, l, f, u, a, _, c = 0, d = !1, h = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(x4);
  t = Kh(t) || 0, k4(n) && (d = !!n.leading, h = "maxWait" in n, f = h ? M4(Kh(n.maxWait) || 0, t) : f, g = "trailing" in n ? !!n.trailing : g);
  function w(E) {
    var B = i, D = l;
    return i = l = void 0, c = E, u = e.apply(D, B), u;
  }
  function p(E) {
    return c = E, a = setTimeout(M, t), d ? w(E) : u;
  }
  function S(E) {
    var B = E - _, D = E - c, te = t - B;
    return h ? T4(te, f - D) : te;
  }
  function x(E) {
    var B = E - _, D = E - c;
    return _ === void 0 || B >= t || B < 0 || h && D >= f;
  }
  function M() {
    var E = zu();
    if (x(E))
      return z(E);
    a = setTimeout(M, S(E));
  }
  function z(E) {
    return a = void 0, g && i ? w(E) : (i = l = void 0, u);
  }
  function C() {
    a !== void 0 && clearTimeout(a), c = 0, i = _ = l = a = void 0;
  }
  function P() {
    return a === void 0 ? u : z(zu());
  }
  function O() {
    var E = zu(), B = x(E);
    if (i = arguments, l = this, _ = E, B) {
      if (a === void 0)
        return p(_);
      if (h)
        return clearTimeout(a), a = setTimeout(M, t), w(_);
    }
    return a === void 0 && (a = setTimeout(M, t)), u;
  }
  return O.cancel = C, O.flush = P, O;
}
var z4 = S4, A4 = z4, C4 = da, L4 = "Expected a function";
function E4(e, t, n) {
  var i = !0, l = !0;
  if (typeof e != "function")
    throw new TypeError(L4);
  return C4(n) && (i = "leading" in n ? !!n.leading : i, l = "trailing" in n ? !!n.trailing : l), A4(e, t, {
    leading: i,
    maxWait: t,
    trailing: l
  });
}
var R4 = E4;
const l0 = /* @__PURE__ */ Vc(R4);
function I4(e) {
  let t, n, i;
  return {
    c() {
      t = ze("rect"), v(t, "fill", "rgba(0, 0, 0, 0)"), v(
        t,
        "width",
        /*inner_width*/
        e[4]
      ), v(
        t,
        "height",
        /*inner_height*/
        e[5]
      );
    },
    m(l, f) {
      j(l, t, f), n || (i = [
        ot(
          t,
          "mousemove",
          /*handleMousemove*/
          e[6]
        ),
        ot(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[20]
        )
      ], n = !0);
    },
    p(l, [f]) {
      f & /*inner_width*/
      16 && v(
        t,
        "width",
        /*inner_width*/
        l[4]
      ), f & /*inner_height*/
      32 && v(
        t,
        "height",
        /*inner_height*/
        l[5]
      );
    },
    i: Pe,
    o: Pe,
    d(l) {
      l && Z(t), n = !1, Ht(i);
    }
  };
}
function O4(e, t, n) {
  let i, l, { x_scale: f } = t, { y_scale: u } = t, { tooltip2_array_values: a } = t, { height: _ } = t, { width: c } = t, { m: d } = t, { margin: h } = t, { filtered_data: g } = t, { type: w } = t, { tooltip: p } = t, { listener: S } = t, { buffer: x } = t, { time_series_interval: M } = t, { chart: z } = t, { labelPositions: C } = t, { nextLabelX: P } = t, { closestLabelX: O } = t;
  const E = l0(B, 10);
  function B(W) {
    if (n(7, d.x = W.offsetX, d), n(7, d.y = W.offsetY, d), z === "XYChart")
      n(0, a = Ow(g, f, u, w, p, d.x, d.y, M)), n(0, a = a.filter((K) => K.data && K.data.y !== void 0));
    else if (z === "bar") {
      let K = f.domain(), se = e0("bar", C, f, K, d.x);
      n(3, O = C[se]), n(2, P = C[se + 1] || f.range()[1]), n(0, a = g.filter((ce) => ce.x === K[se]));
    }
  }
  function D(W) {
    E(W);
  }
  const te = () => {
    n(0, a = void 0), n(1, S = !1), n(3, O = 0), n(2, P = 0);
  };
  return e.$$set = (W) => {
    "x_scale" in W && n(8, f = W.x_scale), "y_scale" in W && n(9, u = W.y_scale), "tooltip2_array_values" in W && n(0, a = W.tooltip2_array_values), "height" in W && n(10, _ = W.height), "width" in W && n(11, c = W.width), "m" in W && n(7, d = W.m), "margin" in W && n(12, h = W.margin), "filtered_data" in W && n(13, g = W.filtered_data), "type" in W && n(14, w = W.type), "tooltip" in W && n(15, p = W.tooltip), "listener" in W && n(1, S = W.listener), "buffer" in W && n(16, x = W.buffer), "time_series_interval" in W && n(17, M = W.time_series_interval), "chart" in W && n(18, z = W.chart), "labelPositions" in W && n(19, C = W.labelPositions), "nextLabelX" in W && n(2, P = W.nextLabelX), "closestLabelX" in W && n(3, O = W.closestLabelX);
  }, e.$$.update = () => {
    e.$$.dirty & /*height, margin, buffer*/
    70656 && n(5, i = _ - h - x), e.$$.dirty & /*width, margin, buffer*/
    71680 && n(4, l = c - h - x);
  }, [
    a,
    S,
    P,
    O,
    l,
    i,
    D,
    d,
    f,
    u,
    _,
    c,
    h,
    g,
    w,
    p,
    x,
    M,
    z,
    C,
    te
  ];
}
class o0 extends ct {
  constructor(t) {
    super(), ht(this, t, O4, I4, ut, {
      x_scale: 8,
      y_scale: 9,
      tooltip2_array_values: 0,
      height: 10,
      width: 11,
      m: 7,
      margin: 12,
      filtered_data: 13,
      type: 14,
      tooltip: 15,
      listener: 1,
      buffer: 16,
      time_series_interval: 17,
      chart: 18,
      labelPositions: 19,
      nextLabelX: 2,
      closestLabelX: 3
    });
  }
}
function D4(e) {
  let t, n, i;
  return {
    c() {
      t = ze("rect"), v(t, "fill", "rgba(0, 0, 0, 0)"), v(
        t,
        "width",
        /*inner_width*/
        e[2]
      ), v(
        t,
        "height",
        /*inner_height*/
        e[3]
      );
    },
    m(l, f) {
      j(l, t, f), n || (i = [
        ot(
          t,
          "mousemove",
          /*handleMousemove*/
          e[4]
        ),
        ot(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[13]
        )
      ], n = !0);
    },
    p(l, [f]) {
      f & /*inner_width*/
      4 && v(
        t,
        "width",
        /*inner_width*/
        l[2]
      ), f & /*inner_height*/
      8 && v(
        t,
        "height",
        /*inner_height*/
        l[3]
      );
    },
    i: Pe,
    o: Pe,
    d(l) {
      l && Z(t), n = !1, Ht(i);
    }
  };
}
function N4(e, t, n) {
  let i, l, { height: f } = t, { width: u } = t, { m: a } = t, { margin: _ } = t, { listener: c } = t, { tooltip2_array_values: d } = t, { filtered_data: h } = t, { x_scale: g } = t, { y_scale: w } = t, { buffer: p } = t;
  const S = l0(x, 10);
  function x(C) {
    n(5, a.x = C.offsetX, a), n(5, a.y = C.offsetY, a), n(0, c = !0), n(1, d = h.filter((E) => E.tooltip === !0));
    let [P, O] = Lw(d, g, a.x, w, a.y);
    n(1, d = {
      ...d[P],
      data: d[P].data[O]
    });
  }
  function M(C) {
    S(C);
  }
  const z = () => {
    n(0, c = !1), n(1, d = void 0);
  };
  return e.$$set = (C) => {
    "height" in C && n(6, f = C.height), "width" in C && n(7, u = C.width), "m" in C && n(5, a = C.m), "margin" in C && n(8, _ = C.margin), "listener" in C && n(0, c = C.listener), "tooltip2_array_values" in C && n(1, d = C.tooltip2_array_values), "filtered_data" in C && n(9, h = C.filtered_data), "x_scale" in C && n(10, g = C.x_scale), "y_scale" in C && n(11, w = C.y_scale), "buffer" in C && n(12, p = C.buffer);
  }, e.$$.update = () => {
    e.$$.dirty & /*height, margin, buffer*/
    4416 && n(3, i = f - _ - p), e.$$.dirty & /*width, margin, buffer*/
    4480 && n(2, l = u - _ - p);
  }, [
    c,
    d,
    l,
    i,
    M,
    a,
    f,
    u,
    _,
    h,
    g,
    w,
    p,
    z
  ];
}
class U4 extends ct {
  constructor(t) {
    super(), ht(this, t, N4, D4, ut, {
      height: 6,
      width: 7,
      m: 5,
      margin: 8,
      listener: 0,
      tooltip2_array_values: 1,
      filtered_data: 9,
      x_scale: 10,
      y_scale: 11,
      buffer: 12
    });
  }
}
function P4(e) {
  let t, n, i, l, f, u, a, _, c, d, h;
  return {
    c() {
      t = ze("line"), f = ve(), u = ze("text"), a = Ae(
        /*ticklabel*/
        e[3]
      ), v(
        t,
        "x1",
        /*y_lines_spacing*/
        e[5]
      ), v(t, "x2", n = /*width*/
      e[1] - /*line_generator_space*/
      e[7]), v(
        t,
        "y1",
        /*$tweened_y1*/
        e[8]
      ), v(
        t,
        "y2",
        /*$tweened_y1*/
        e[8]
      ), v(t, "stroke", "#ededed"), v(
        u,
        "y",
        /*$tweened_y1*/
        e[8]
      ), v(u, "x", _ = /*y_lines_spacing*/
      e[5] - /*space_between_ticks_and_gridline*/
      e[6]), v(u, "text-anchor", "end"), y(
        u,
        "font-size",
        /*font_size_yticks*/
        e[4] + "px"
      ), y(u, "font-family", "Arial, sans-serif"), v(u, "dy", "0.25em");
    },
    m(g, w) {
      j(g, t, w), j(g, f, w), j(g, u, w), q(u, a), h = !0;
    },
    p(g, [w]) {
      e = g, (!h || w & /*y_lines_spacing*/
      32) && v(
        t,
        "x1",
        /*y_lines_spacing*/
        e[5]
      ), (!h || w & /*width, line_generator_space*/
      130 && n !== (n = /*width*/
      e[1] - /*line_generator_space*/
      e[7])) && v(t, "x2", n), (!h || w & /*$tweened_y1*/
      256) && v(
        t,
        "y1",
        /*$tweened_y1*/
        e[8]
      ), (!h || w & /*$tweened_y1*/
      256) && v(
        t,
        "y2",
        /*$tweened_y1*/
        e[8]
      ), (!h || w & /*ticklabel*/
      8) && Oe(
        a,
        /*ticklabel*/
        e[3]
      ), (!h || w & /*$tweened_y1*/
      256) && v(
        u,
        "y",
        /*$tweened_y1*/
        e[8]
      ), (!h || w & /*y_lines_spacing, space_between_ticks_and_gridline*/
      96 && _ !== (_ = /*y_lines_spacing*/
      e[5] - /*space_between_ticks_and_gridline*/
      e[6])) && v(u, "x", _), (!h || w & /*font_size_yticks*/
      16) && y(
        u,
        "font-size",
        /*font_size_yticks*/
        e[4] + "px"
      );
    },
    i(g) {
      h || (g && it(() => {
        h && (l && l.end(1), i = Fi(t, pn, { duration: 500, easing: zl }), i.start());
      }), g && it(() => {
        h && (d && d.end(1), c = Fi(u, pn, { duration: 1e3, easing: zl }), c.start());
      }), h = !0);
    },
    o(g) {
      i && i.invalidate(), g && (l = kl(t, Zt, {
        duration: 2e3,
        y: (
          /*y1*/
          e[2] < /*height*/
          e[0] / 2 ? -/*height*/
          e[0] : (
            /*height*/
            e[0]
          )
        ),
        x: 0,
        easing: Qo
      })), c && c.invalidate(), g && (d = kl(u, Zt, {
        duration: 2e3,
        y: (
          /*y1*/
          e[2] < /*height*/
          e[0] / 2 ? -/*height*/
          e[0] : (
            /*height*/
            e[0]
          )
        ),
        x: 0,
        easing: Qo
      })), h = !1;
    },
    d(g) {
      g && (Z(t), Z(f), Z(u)), g && l && l.end(), g && d && d.end();
    }
  };
}
function F4(e, t, n) {
  let i, { tweenOptions: l } = t, { height: f } = t, { width: u } = t, { y1: a } = t, { ticklabel: _ } = t, { font_size_yticks: c } = t, { y_lines_spacing: d } = t, { space_between_ticks_and_gridline: h } = t, { line_generator_space: g } = t, w = Ut(a, l == null ? void 0 : l.y1);
  return wt(e, w, (p) => n(8, i = p)), e.$$set = (p) => {
    "tweenOptions" in p && n(10, l = p.tweenOptions), "height" in p && n(0, f = p.height), "width" in p && n(1, u = p.width), "y1" in p && n(2, a = p.y1), "ticklabel" in p && n(3, _ = p.ticklabel), "font_size_yticks" in p && n(4, c = p.font_size_yticks), "y_lines_spacing" in p && n(5, d = p.y_lines_spacing), "space_between_ticks_and_gridline" in p && n(6, h = p.space_between_ticks_and_gridline), "line_generator_space" in p && n(7, g = p.line_generator_space);
  }, e.$$.update = () => {
    e.$$.dirty & /*y1, tweenOptions*/
    1028 && Ll().then(() => {
      w.set(a, l == null ? void 0 : l.y1);
    });
  }, [
    f,
    u,
    a,
    _,
    c,
    d,
    h,
    g,
    i,
    w,
    l
  ];
}
class ma extends ct {
  constructor(t) {
    super(), ht(this, t, F4, P4, ut, {
      tweenOptions: 10,
      height: 0,
      width: 1,
      y1: 2,
      ticklabel: 3,
      font_size_yticks: 4,
      y_lines_spacing: 5,
      space_between_ticks_and_gridline: 6,
      line_generator_space: 7
    });
  }
}
function W4(e) {
  let t, n, i, l, f, u, a, _, c, d;
  return {
    c() {
      t = ze("line"), l = ve(), f = ze("text"), u = Ae(
        /*ticklabel*/
        e[2]
      ), v(
        t,
        "x1",
        /*$tweened_x1*/
        e[12]
      ), v(
        t,
        "x2",
        /*$tweened_x1*/
        e[12]
      ), v(
        t,
        "y1",
        /*x_lines_spacing*/
        e[10]
      ), v(
        t,
        "y2",
        /*line_generator_space*/
        e[11]
      ), v(t, "stroke", "#ededed"), v(f, "transform", a = `rotate(${-/*rotation_xaxis*/
      e[5]} ${/*$tweened_x1*/
      e[12]} ${/*x_ticks_spacing*/
      e[0]})`), v(
        f,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[8]
      ), v(
        f,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[9]
      ), v(
        f,
        "x",
        /*$tweened_x1*/
        e[12]
      ), v(
        f,
        "y",
        /*x_ticks_spacing*/
        e[0]
      ), y(
        f,
        "font-size",
        /*font_size_xticks*/
        e[3] + "px"
      ), y(f, "font-family", "Arial, sans-serif"), v(
        f,
        "dy",
        /*dy*/
        e[7]
      ), v(
        f,
        "dx",
        /*dx*/
        e[6]
      );
    },
    m(h, g) {
      j(h, t, g), j(h, l, g), j(h, f, g), q(f, u), d = !0;
    },
    p(h, [g]) {
      e = h, (!d || g & /*$tweened_x1*/
      4096) && v(
        t,
        "x1",
        /*$tweened_x1*/
        e[12]
      ), (!d || g & /*$tweened_x1*/
      4096) && v(
        t,
        "x2",
        /*$tweened_x1*/
        e[12]
      ), (!d || g & /*x_lines_spacing*/
      1024) && v(
        t,
        "y1",
        /*x_lines_spacing*/
        e[10]
      ), (!d || g & /*line_generator_space*/
      2048) && v(
        t,
        "y2",
        /*line_generator_space*/
        e[11]
      ), (!d || g & /*ticklabel*/
      4) && Oe(
        u,
        /*ticklabel*/
        e[2]
      ), (!d || g & /*rotation_xaxis, $tweened_x1, x_ticks_spacing*/
      4129 && a !== (a = `rotate(${-/*rotation_xaxis*/
      e[5]} ${/*$tweened_x1*/
      e[12]} ${/*x_ticks_spacing*/
      e[0]})`)) && v(f, "transform", a), (!d || g & /*text_anchor_x_axis*/
      256) && v(
        f,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[8]
      ), (!d || g & /*dominant_baseline_x_axis*/
      512) && v(
        f,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[9]
      ), (!d || g & /*$tweened_x1*/
      4096) && v(
        f,
        "x",
        /*$tweened_x1*/
        e[12]
      ), (!d || g & /*x_ticks_spacing*/
      1) && v(
        f,
        "y",
        /*x_ticks_spacing*/
        e[0]
      ), (!d || g & /*font_size_xticks*/
      8) && y(
        f,
        "font-size",
        /*font_size_xticks*/
        e[3] + "px"
      ), (!d || g & /*dy*/
      128) && v(
        f,
        "dy",
        /*dy*/
        e[7]
      ), (!d || g & /*dx*/
      64) && v(
        f,
        "dx",
        /*dx*/
        e[6]
      );
    },
    i(h) {
      d || (h && it(() => {
        d && (i && i.end(1), n = Fi(t, pn, { duration: 500, easing: zl }), n.start());
      }), h && it(() => {
        d && (c && c.end(1), _ = Fi(f, pn, { duration: 1e3, easing: zl }), _.start());
      }), d = !0);
    },
    o(h) {
      n && n.invalidate(), h && (i = kl(t, Zt, {
        duration: 2e3,
        x: (
          /*x1*/
          e[1] < /*width*/
          e[4] / 2 ? -/*width*/
          e[4] : (
            /*width*/
            e[4]
          )
        ),
        y: 0,
        easing: Qo
      })), _ && _.invalidate(), h && (c = kl(f, Zt, {
        duration: 2e3,
        x: (
          /*x1*/
          e[1] < /*width*/
          e[4] / 2 ? -/*width*/
          e[4] : (
            /*width*/
            e[4]
          )
        ),
        y: 0,
        easing: Qo
      })), d = !1;
    },
    d(h) {
      h && (Z(t), Z(l), Z(f)), h && i && i.end(), h && c && c.end();
    }
  };
}
function B4(e, t, n) {
  let i, { tweenOptions: l } = t, { x1: f } = t, { ticklabel: u } = t, { font_size_xticks: a } = t, { width: _ } = t, { rotation_xaxis: c } = t, { dx: d } = t, { dy: h } = t, { text_anchor_x_axis: g } = t, { dominant_baseline_x_axis: w } = t, { x_lines_spacing: p } = t, { x_ticks_spacing: S } = t, { line_generator_space: x } = t, M = Ut(f, l == null ? void 0 : l.x1);
  return wt(e, M, (z) => n(12, i = z)), e.$$set = (z) => {
    "tweenOptions" in z && n(14, l = z.tweenOptions), "x1" in z && n(1, f = z.x1), "ticklabel" in z && n(2, u = z.ticklabel), "font_size_xticks" in z && n(3, a = z.font_size_xticks), "width" in z && n(4, _ = z.width), "rotation_xaxis" in z && n(5, c = z.rotation_xaxis), "dx" in z && n(6, d = z.dx), "dy" in z && n(7, h = z.dy), "text_anchor_x_axis" in z && n(8, g = z.text_anchor_x_axis), "dominant_baseline_x_axis" in z && n(9, w = z.dominant_baseline_x_axis), "x_lines_spacing" in z && n(10, p = z.x_lines_spacing), "x_ticks_spacing" in z && n(0, S = z.x_ticks_spacing), "line_generator_space" in z && n(11, x = z.line_generator_space);
  }, e.$$.update = () => {
    e.$$.dirty & /*x_ticks_spacing*/
    1 && n(0, S = isNaN(S) ? 10 : S), e.$$.dirty & /*x1, tweenOptions*/
    16386 && Ll().then(() => {
      M.set(f, l == null ? void 0 : l.x1);
    });
  }, [
    S,
    f,
    u,
    a,
    _,
    c,
    d,
    h,
    g,
    w,
    p,
    x,
    i,
    M,
    l
  ];
}
class f0 extends ct {
  constructor(t) {
    super(), ht(this, t, B4, W4, ut, {
      tweenOptions: 14,
      x1: 1,
      ticklabel: 2,
      font_size_xticks: 3,
      width: 4,
      rotation_xaxis: 5,
      dx: 6,
      dy: 7,
      text_anchor_x_axis: 8,
      dominant_baseline_x_axis: 9,
      x_lines_spacing: 10,
      x_ticks_spacing: 0,
      line_generator_space: 11
    });
  }
}
function H4(e) {
  let t, n, i;
  return {
    c() {
      t = ze("text"), n = Ae(
        /*y_label*/
        e[2]
      ), v(
        t,
        "x",
        /*label_height*/
        e[1]
      ), v(
        t,
        "y",
        /*$tweened_axis_title_position*/
        e[3]
      ), y(t, "text-anchor", "middle"), y(
        t,
        "font-size",
        /*font_size_yaxis*/
        e[0] + "px"
      ), y(t, "font-family", "Arial, sans-serif"), v(t, "transform", i = `rotate(-90, ${/*label_height*/
      e[1]}, ${/*$tweened_axis_title_position*/
      e[3]})`);
    },
    m(l, f) {
      j(l, t, f), q(t, n);
    },
    p(l, [f]) {
      f & /*y_label*/
      4 && Oe(
        n,
        /*y_label*/
        l[2]
      ), f & /*label_height*/
      2 && v(
        t,
        "x",
        /*label_height*/
        l[1]
      ), f & /*$tweened_axis_title_position*/
      8 && v(
        t,
        "y",
        /*$tweened_axis_title_position*/
        l[3]
      ), f & /*font_size_yaxis*/
      1 && y(
        t,
        "font-size",
        /*font_size_yaxis*/
        l[0] + "px"
      ), f & /*label_height, $tweened_axis_title_position*/
      10 && i !== (i = `rotate(-90, ${/*label_height*/
      l[1]}, ${/*$tweened_axis_title_position*/
      l[3]})`) && v(t, "transform", i);
    },
    i: Pe,
    o: Pe,
    d(l) {
      l && Z(t);
    }
  };
}
function Y4(e, t, n) {
  let i, { tweenOptions: l } = t, { axis_title_position: f } = t, { font_size_yaxis: u } = t, { label_height: a } = t, { y_label: _ } = t, c = Ut(f, l == null ? void 0 : l.axis_title_position);
  return wt(e, c, (d) => n(3, i = d)), e.$$set = (d) => {
    "tweenOptions" in d && n(5, l = d.tweenOptions), "axis_title_position" in d && n(6, f = d.axis_title_position), "font_size_yaxis" in d && n(0, u = d.font_size_yaxis), "label_height" in d && n(1, a = d.label_height), "y_label" in d && n(2, _ = d.y_label);
  }, e.$$.update = () => {
    e.$$.dirty & /*axis_title_position, tweenOptions*/
    96 && c.set(f, l == null ? void 0 : l.axis_title_position);
  }, [
    u,
    a,
    _,
    i,
    c,
    l,
    f
  ];
}
class u0 extends ct {
  constructor(t) {
    super(), ht(this, t, Y4, H4, ut, {
      tweenOptions: 5,
      axis_title_position: 6,
      font_size_yaxis: 0,
      label_height: 1,
      y_label: 2
    });
  }
}
function X4(e) {
  let t, n, i;
  return {
    c() {
      t = ze("text"), n = Ae(
        /*x_label*/
        e[3]
      ), v(
        t,
        "x",
        /*$tweened_axis_title_position*/
        e[4]
      ), v(t, "y", i = /*height*/
      e[1] - /*label_height_x_axis*/
      e[2]), y(t, "text-anchor", "middle"), y(
        t,
        "font-size",
        /*font_size_xaxis*/
        e[0] + "px"
      ), y(t, "font-family", "Arial, sans-serif");
    },
    m(l, f) {
      j(l, t, f), q(t, n);
    },
    p(l, [f]) {
      f & /*x_label*/
      8 && Oe(
        n,
        /*x_label*/
        l[3]
      ), f & /*$tweened_axis_title_position*/
      16 && v(
        t,
        "x",
        /*$tweened_axis_title_position*/
        l[4]
      ), f & /*height, label_height_x_axis*/
      6 && i !== (i = /*height*/
      l[1] - /*label_height_x_axis*/
      l[2]) && v(t, "y", i), f & /*font_size_xaxis*/
      1 && y(
        t,
        "font-size",
        /*font_size_xaxis*/
        l[0] + "px"
      );
    },
    i: Pe,
    o: Pe,
    d(l) {
      l && Z(t);
    }
  };
}
function q4(e, t, n) {
  let i, { tweenOptions: l } = t, { axis_title_position: f } = t, { font_size_xaxis: u } = t, { height: a } = t, { label_height_x_axis: _ } = t, { x_label: c } = t, d = Ut(f, l == null ? void 0 : l.axis_title_position);
  return wt(e, d, (h) => n(4, i = h)), e.$$set = (h) => {
    "tweenOptions" in h && n(6, l = h.tweenOptions), "axis_title_position" in h && n(7, f = h.axis_title_position), "font_size_xaxis" in h && n(0, u = h.font_size_xaxis), "height" in h && n(1, a = h.height), "label_height_x_axis" in h && n(2, _ = h.label_height_x_axis), "x_label" in h && n(3, c = h.x_label);
  }, e.$$.update = () => {
    e.$$.dirty & /*axis_title_position, tweenOptions*/
    192 && d.set(f, l == null ? void 0 : l.axis_title_position);
  }, [
    u,
    a,
    _,
    c,
    i,
    d,
    l,
    f
  ];
}
class a0 extends ct {
  constructor(t) {
    super(), ht(this, t, q4, X4, ut, {
      tweenOptions: 6,
      axis_title_position: 7,
      font_size_xaxis: 0,
      height: 1,
      label_height_x_axis: 2,
      x_label: 3
    });
  }
}
function G4(e, { from: t, to: n }, i = {}) {
  const l = getComputedStyle(e), f = l.transform === "none" ? "" : l.transform, [u, a] = l.transformOrigin.split(" ").map(parseFloat), _ = t.left + t.width * u / n.width - (n.left + u), c = t.top + t.height * a / n.height - (n.top + a), { delay: d = 0, duration: h = (w) => Math.sqrt(w) * 120, easing: g = $c } = i;
  return {
    delay: d,
    duration: Hr(h) ? h(Math.sqrt(_ * _ + c * c)) : h,
    easing: g,
    css: (w, p) => {
      const S = p * _, x = p * c, M = w + p * t.width / n.width, z = w + p * t.height / n.height;
      return `transform: ${f} translate(${S}px, ${x}px) scale(${M}, ${z});`;
    }
  };
}
function Jh(e, t, n) {
  const i = e.slice();
  return i[33] = t[n], i;
}
function Qh(e, t, n) {
  const i = e.slice();
  return i[36] = t[n][0], i[37] = t[n][1], i;
}
function Vh(e) {
  let t, n, i, l, f, u, a, _ = [], c = /* @__PURE__ */ new Map(), d, h, g, w = ke(
    /*tooltip2_array_values*/
    e[0]
  );
  const p = (S) => (
    /*line*/
    S[33].id
  );
  for (let S = 0; S < w.length; S += 1) {
    let x = Jh(e, w, S), M = p(x);
    c.set(M, _[S] = e1(M, x));
  }
  return {
    c() {
      t = _e("div"), n = _e("div"), i = ve(), l = _e("h6"), f = Ae(
        /*h6_header*/
        e[12]
      ), u = ve(), a = _e("div");
      for (let S = 0; S < _.length; S += 1)
        _[S].c();
      y(n, "z-index", "-1"), y(
        n,
        "background-color",
        /*background_color_tt*/
        e[1]
      ), y(
        n,
        "opacity",
        /*opacity_tt*/
        e[2]
      ), y(n, "position", "absolute"), y(n, "top", "0"), y(n, "right", "0"), y(n, "bottom", "0"), y(n, "left", "0"), y(n, "border-radius", "3px"), y(n, "pointer-events", "none"), y(l, "background-color", "black"), y(l, "color", "white"), y(l, "margin", "1px"), y(l, "padding", "2%"), y(l, "font-size", "12px"), y(l, "font-weight", "2px"), y(l, "text-align", "center"), y(
        a,
        "padding",
        /*padding_tooltip*/
        e[3] + "px"
      ), y(
        a,
        "font-size",
        /*font_size_tooltip*/
        e[4] + "px"
      ), y(
        a,
        "color",
        /*text_color_tooltip*/
        e[6]
      ), y(
        a,
        "border-width",
        /*border_width_tooltip*/
        e[9]
      ), y(
        a,
        "border-color",
        /*border_color_tooltip*/
        e[7]
      ), y(
        a,
        "border-style",
        /*border_style_tooltip*/
        e[8]
      ), v(t, "class", "tooltip"), y(t, "position", "absolute"), y(
        t,
        "top",
        /*yPosition*/
        e[15] + "px"
      ), y(
        t,
        "left",
        /*xPosition*/
        e[16] + "px"
      ), y(t, "border-radius", "3px"), y(t, "pointer-events", "none"), y(t, "transition", "top 300ms ease, left 300ms ease"), y(t, "margin-top", "15px"), y(t, "z-index", "1000"), it(() => (
        /*div2_elementresize_handler*/
        e[31].call(t)
      ));
    },
    m(S, x) {
      j(S, t, x), q(t, n), q(t, i), q(t, l), q(l, f), q(t, u), q(t, a);
      for (let M = 0; M < _.length; M += 1)
        _[M] && _[M].m(a, null);
      d = ir(
        t,
        /*div2_elementresize_handler*/
        e[31].bind(t)
      ), g = !0;
    },
    p(S, x) {
      if (e = S, (!g || x[0] & /*background_color_tt*/
      2) && y(
        n,
        "background-color",
        /*background_color_tt*/
        e[1]
      ), (!g || x[0] & /*opacity_tt*/
      4) && y(
        n,
        "opacity",
        /*opacity_tt*/
        e[2]
      ), (!g || x[0] & /*h6_header*/
      4096) && Oe(
        f,
        /*h6_header*/
        e[12]
      ), x[0] & /*tooltip2_array_values, justify_content_tooltip*/
      33) {
        w = ke(
          /*tooltip2_array_values*/
          e[0]
        );
        for (let M = 0; M < _.length; M += 1)
          _[M].r();
        _ = kn(_, x, p, 1, e, w, c, a, E6, e1, null, Jh);
        for (let M = 0; M < _.length; M += 1)
          _[M].a();
      }
      (!g || x[0] & /*padding_tooltip*/
      8) && y(
        a,
        "padding",
        /*padding_tooltip*/
        e[3] + "px"
      ), (!g || x[0] & /*font_size_tooltip*/
      16) && y(
        a,
        "font-size",
        /*font_size_tooltip*/
        e[4] + "px"
      ), (!g || x[0] & /*text_color_tooltip*/
      64) && y(
        a,
        "color",
        /*text_color_tooltip*/
        e[6]
      ), (!g || x[0] & /*border_width_tooltip*/
      512) && y(
        a,
        "border-width",
        /*border_width_tooltip*/
        e[9]
      ), (!g || x[0] & /*border_color_tooltip*/
      128) && y(
        a,
        "border-color",
        /*border_color_tooltip*/
        e[7]
      ), (!g || x[0] & /*border_style_tooltip*/
      256) && y(
        a,
        "border-style",
        /*border_style_tooltip*/
        e[8]
      ), (!g || x[0] & /*yPosition*/
      32768) && y(
        t,
        "top",
        /*yPosition*/
        e[15] + "px"
      ), (!g || x[0] & /*xPosition*/
      65536) && y(
        t,
        "left",
        /*xPosition*/
        e[16] + "px"
      );
    },
    i(S) {
      g || (it(() => {
        g && (h || (h = Pt(
          t,
          Zt,
          /*animationParamsTooltip*/
          e[13],
          !0
        )), h.run(1));
      }), g = !0);
    },
    o(S) {
      h || (h = Pt(
        t,
        Zt,
        /*animationParamsTooltip*/
        e[13],
        !1
      )), h.run(0), g = !1;
    },
    d(S) {
      S && Z(t);
      for (let x = 0; x < _.length; x += 1)
        _[x].d();
      d(), S && h && h.end();
    }
  };
}
function Z4(e) {
  let t;
  return {
    c() {
      t = _e("span"), y(
        t,
        "background",
        /*line*/
        e[33].colors
      ), y(t, "width", "18px"), y(t, "height", "3px"), y(t, "border-radius", "1px"), y(t, "margin", "3px"), y(t, "border", "1px solid rgba(0, 0, 0, 0.5)");
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[0] & /*tooltip2_array_values*/
      1 && y(
        t,
        "background",
        /*line*/
        n[33].colors
      );
    },
    d(n) {
      n && Z(t);
    }
  };
}
function j4(e) {
  let t;
  return {
    c() {
      t = _e("span"), y(
        t,
        "background",
        /*line*/
        e[33].colors
      ), y(t, "width", "9px"), y(t, "height", "9px"), y(t, "border-radius", "50%"), y(t, "margin", "3px"), y(t, "border", "1px solid rgba(0, 0, 0, 0.5)");
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[0] & /*tooltip2_array_values*/
      1 && y(
        t,
        "background",
        /*line*/
        n[33].colors
      );
    },
    d(n) {
      n && Z(t);
    }
  };
}
function $h(e) {
  let t, n = (
    /*key*/
    e[36] + ""
  ), i, l, f, u = (
    /*value*/
    e[37] + ""
  ), a;
  return {
    c() {
      t = _e("div"), i = Ae(n), l = Ae(":  "), f = _e("strong"), a = Ae(u), y(t, "display", "flex"), y(
        t,
        "justify-content",
        /*justify_content_tooltip*/
        e[5]
      );
    },
    m(_, c) {
      j(_, t, c), q(t, i), q(t, l), q(t, f), q(f, a);
    },
    p(_, c) {
      c[0] & /*tooltip2_array_values*/
      1 && n !== (n = /*key*/
      _[36] + "") && Oe(i, n), c[0] & /*tooltip2_array_values*/
      1 && u !== (u = /*value*/
      _[37] + "") && Oe(a, u), c[0] & /*justify_content_tooltip*/
      32 && y(
        t,
        "justify-content",
        /*justify_content_tooltip*/
        _[5]
      );
    },
    d(_) {
      _ && Z(t);
    }
  };
}
function e1(e, t) {
  let n, i, l, f, u, a = (
    /*line*/
    t[33].id + ""
  ), _, c, d, h, g = Pe;
  function w(z, C) {
    if (
      /*line*/
      z[33].type === "points"
    )
      return j4;
    if (
      /*line*/
      z[33].type === "line"
    )
      return Z4;
  }
  let p = w(t), S = p && p(t), x = ke(Object.entries(
    /*line*/
    t[33].data.custom_tooltip[0]
  )), M = [];
  for (let z = 0; z < x.length; z += 1)
    M[z] = $h(Qh(t, x, z));
  return {
    key: e,
    first: null,
    c() {
      n = _e("div"), i = _e("div"), l = _e("div"), S && S.c(), f = ve(), u = _e("span"), _ = Ae(a), c = ve();
      for (let z = 0; z < M.length; z += 1)
        M[z].c();
      d = ve(), y(l, "width", "18px"), y(l, "display", "flex"), y(l, "align-items", "center"), y(l, "justify-content", "center"), y(i, "display", "flex"), y(i, "align-items", "center"), this.first = n;
    },
    m(z, C) {
      j(z, n, C), q(n, i), q(i, l), S && S.m(l, null), q(i, f), q(i, u), q(u, _), q(n, c);
      for (let P = 0; P < M.length; P += 1)
        M[P] && M[P].m(n, null);
      q(n, d);
    },
    p(z, C) {
      if (t = z, p === (p = w(t)) && S ? S.p(t, C) : (S && S.d(1), S = p && p(t), S && (S.c(), S.m(l, null))), C[0] & /*tooltip2_array_values*/
      1 && a !== (a = /*line*/
      t[33].id + "") && Oe(_, a), C[0] & /*justify_content_tooltip, tooltip2_array_values*/
      33) {
        x = ke(Object.entries(
          /*line*/
          t[33].data.custom_tooltip[0]
        ));
        let P;
        for (P = 0; P < x.length; P += 1) {
          const O = Qh(t, x, P);
          M[P] ? M[P].p(O, C) : (M[P] = $h(O), M[P].c(), M[P].m(n, d));
        }
        for (; P < M.length; P += 1)
          M[P].d(1);
        M.length = x.length;
      }
    },
    r() {
      h = n.getBoundingClientRect();
    },
    f() {
      S6(n), g();
    },
    a() {
      g(), g = T6(
        n,
        h,
        G4,
        /*animationParamsList*/
        t[14]
      );
    },
    d(z) {
      z && Z(n), S && S.d(), xn(M, z);
    }
  };
}
function K4(e) {
  let t, n, i = (
    /*tooltip2_array_values*/
    e[0] && /*tooltip2_array_values*/
    e[0].length > 0 && Vh(e)
  );
  return {
    c() {
      i && i.c(), t = Le();
    },
    m(l, f) {
      i && i.m(l, f), j(l, t, f), n = !0;
    },
    p(l, f) {
      /*tooltip2_array_values*/
      l[0] && /*tooltip2_array_values*/
      l[0].length > 0 ? i ? (i.p(l, f), f[0] & /*tooltip2_array_values*/
      1 && ee(i, 1)) : (i = Vh(l), i.c(), ee(i, 1), i.m(t.parentNode, t)) : i && (We(), ue(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(l) {
      n || (ee(i), n = !0);
    },
    o(l) {
      ue(i), n = !1;
    },
    d(l) {
      l && Z(t), i && i.d(l);
    }
  };
}
const t1 = 20, Au = 100;
function J4(e, t, n) {
  let i, l, f, u, a, { x_scale: _ } = t, { y_scale: c } = t, { m_y: d } = t, { tooltip2_array_values: h } = t, { format_tooltip: g } = t, { height: w } = t, { width: p } = t, { interval: S } = t, { type: x } = t, { background_color_tt: M } = t, { opacity_tt: z } = t, { animation_params_list: C } = t, { padding_tooltip: P } = t, { font_size_tooltip: O } = t, { justify_content_tooltip: E } = t, { text_color_tooltip: B } = t, { border_color_tooltip: D } = t, { show_delay_tooltip: te } = t, { border_style_tooltip: W } = t, { border_width_tooltip: K } = t, { tooltip_position: se } = t, ce, fe, re, J, H;
  function A() {
    re = this.clientWidth, J = this.clientHeight, n(10, re), n(11, J);
  }
  return e.$$set = (R) => {
    "x_scale" in R && n(19, _ = R.x_scale), "y_scale" in R && n(20, c = R.y_scale), "m_y" in R && n(21, d = R.m_y), "tooltip2_array_values" in R && n(0, h = R.tooltip2_array_values), "format_tooltip" in R && n(22, g = R.format_tooltip), "height" in R && n(23, w = R.height), "width" in R && n(24, p = R.width), "interval" in R && n(25, S = R.interval), "type" in R && n(26, x = R.type), "background_color_tt" in R && n(1, M = R.background_color_tt), "opacity_tt" in R && n(2, z = R.opacity_tt), "animation_params_list" in R && n(27, C = R.animation_params_list), "padding_tooltip" in R && n(3, P = R.padding_tooltip), "font_size_tooltip" in R && n(4, O = R.font_size_tooltip), "justify_content_tooltip" in R && n(5, E = R.justify_content_tooltip), "text_color_tooltip" in R && n(6, B = R.text_color_tooltip), "border_color_tooltip" in R && n(7, D = R.border_color_tooltip), "show_delay_tooltip" in R && n(17, te = R.show_delay_tooltip), "border_style_tooltip" in R && n(8, W = R.border_style_tooltip), "border_width_tooltip" in R && n(9, K = R.border_width_tooltip), "tooltip_position" in R && n(18, se = R.tooltip_position);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*background_color_tt*/
    2 && n(1, M = M || "white"), e.$$.dirty[0] & /*opacity_tt*/
    4 && n(2, z = z || "0.8"), e.$$.dirty[0] & /*padding_tooltip*/
    8 && n(3, P = P || 5), e.$$.dirty[0] & /*justify_content_tooltip*/
    32 && n(5, E = E || "space-between"), e.$$.dirty[0] & /*font_size_tooltip*/
    16 && n(4, O = O || 14), e.$$.dirty[0] & /*text_color_tooltip*/
    64 && n(6, B = B || "black"), e.$$.dirty[0] & /*border_color_tooltip, background_color_tt*/
    130 && n(7, D = D || M), e.$$.dirty[0] & /*show_delay_tooltip*/
    131072 && n(17, te = te || 0), e.$$.dirty[0] & /*border_style_tooltip*/
    256 && n(8, W = W || "solid"), e.$$.dirty[0] & /*border_width_tooltip*/
    512 && n(9, K = K || 0), e.$$.dirty[0] & /*tooltip_position*/
    262144 && n(18, se = se || null), e.$$.dirty[0] & /*tooltip2_array_values, type, maxYValue*/
    1140850689 && (n(30, H = Math.max(...h.map((R) => R.data.y))), n(0, h = h.map((R) => ({
      ...R,
      shape: x === "scatter" ? "point" : "line"
    })).sort((R, de) => de.data.y - R.data.y || de.data.y - H))), e.$$.dirty[0] & /*tooltip_position, height, x_scale, tooltip2_array_values, m_y*/
    11272193 && (se ? se === "top" && (n(28, ce = 0), n(29, fe = w)) : (n(28, ce = _(h[0].data.x)), n(29, fe = d))), e.$$.dirty[0] & /*x, tooltipWidth, width*/
    285213696 && n(16, i = ce + re > p ? ce - re - t1 : ce + t1), e.$$.dirty[0] & /*y, tooltipHeight, height*/
    545261568 && n(15, l = fe - J < 0 ? fe - Au : fe + J > w ? fe - J - Au : fe + Au), e.$$.dirty[0] & /*format_tooltip*/
    4194304 && hn(g), e.$$.dirty[0] & /*animation_params_list*/
    134217728 && n(14, f = C), e.$$.dirty[0] & /*show_delay_tooltip*/
    131072 && n(13, u = { delay: te }), e.$$.dirty[0] & /*interval, type, tooltip2_array_values*/
    100663297 && n(12, a = t0(S, x, h));
  }, [
    h,
    M,
    z,
    P,
    O,
    E,
    B,
    D,
    W,
    K,
    re,
    J,
    a,
    u,
    f,
    l,
    i,
    te,
    se,
    _,
    c,
    d,
    g,
    w,
    p,
    S,
    x,
    C,
    ce,
    fe,
    H,
    A
  ];
}
class Q4 extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      J4,
      K4,
      ut,
      {
        x_scale: 19,
        y_scale: 20,
        m_y: 21,
        tooltip2_array_values: 0,
        format_tooltip: 22,
        height: 23,
        width: 24,
        interval: 25,
        type: 26,
        background_color_tt: 1,
        opacity_tt: 2,
        animation_params_list: 27,
        padding_tooltip: 3,
        font_size_tooltip: 4,
        justify_content_tooltip: 5,
        text_color_tooltip: 6,
        border_color_tooltip: 7,
        show_delay_tooltip: 17,
        border_style_tooltip: 8,
        border_width_tooltip: 9,
        tooltip_position: 18
      },
      null,
      [-1, -1]
    );
  }
}
function V4(e) {
  let t, n, i, l, f, u, a, _, c, d, h, g, w, p, S, x, M, z, C, P, O, E, B, D, te, W, K, se, ce, fe, re, J, H, A, R;
  return {
    c() {
      t = ze("rect"), _ = ve(), c = ze("text"), d = Ae(
        /*tooltip_name_x*/
        e[12]
      ), w = ve(), p = ze("rect"), z = ve(), C = ze("text"), P = Ae(
        /*tooltip_name_y*/
        e[14]
      ), B = ve(), D = ze("line"), ce = ve(), fe = ze("line"), v(t, "x", n = /*adjusted_x1*/
      e[15] - /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.3 - 5), v(t, "y", i = /*x_ticks_spacing*/
      e[6] - /*font_size_xticks*/
      e[0] - 5), v(t, "width", l = /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.6 + 10), v(t, "height", f = /*font_size_xticks*/
      e[0] + 20), v(t, "rx", "5"), v(t, "ry", "5"), v(t, "fill", "darkgrey"), v(t, "transform", u = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`), v(c, "transform", h = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`), v(
        c,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[4]
      ), v(
        c,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[5]
      ), v(
        c,
        "x",
        /*x1*/
        e[13]
      ), v(
        c,
        "y",
        /*x_ticks_spacing*/
        e[6]
      ), y(
        c,
        "font-size",
        /*font_size_xticks*/
        e[0] * 1.2 + "px"
      ), y(c, "font-family", "Arial, sans-serif"), y(c, "fill", "white"), v(
        c,
        "dy",
        /*dy*/
        e[3]
      ), v(
        c,
        "dx",
        /*dx*/
        e[2]
      ), v(p, "x", S = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10] / 2 - /*rect_width*/
      e[17]), v(p, "y", x = /*y1*/
      e[19] - /*rect_height*/
      e[16] / 2), v(
        p,
        "width",
        /*rect_width*/
        e[17]
      ), v(
        p,
        "height",
        /*rect_height*/
        e[16]
      ), v(p, "rx", "5"), v(p, "ry", "5"), v(p, "fill", "darkgrey"), v(
        C,
        "y",
        /*y1*/
        e[19]
      ), v(C, "x", O = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10]), v(C, "text-anchor", "end"), y(
        C,
        "font-size",
        /*font_size_yticks*/
        e[11] + "px"
      ), y(C, "font-family", "Arial, sans-serif"), y(C, "fill", "white"), v(C, "dy", "0.35em"), v(D, "x1", te = /*vline*/
      e[8].x1), v(D, "y1", W = /*vline*/
      e[8].y1), v(D, "x2", K = /*vline*/
      e[8].x2), v(D, "y2", se = /*vline*/
      e[8].y2), v(D, "stroke", "black"), v(D, "stroke-width", "1"), v(D, "stroke-dasharray", "5,5"), v(fe, "x1", re = /*hline*/
      e[7].x1), v(fe, "y1", J = /*hline*/
      e[7].y1), v(fe, "x2", H = /*hline*/
      e[7].x2), v(fe, "y2", A = /*hline*/
      e[7].y2), v(fe, "stroke", "black"), v(fe, "stroke-width", "1"), v(fe, "stroke-dasharray", "5,5");
    },
    m(de, he) {
      j(de, t, he), j(de, _, he), j(de, c, he), q(c, d), j(de, w, he), j(de, p, he), j(de, z, he), j(de, C, he), q(C, P), j(de, B, he), j(de, D, he), j(de, ce, he), j(de, fe, he), R = !0;
    },
    p(de, [he]) {
      e = de, (!R || he & /*adjusted_x1, tooltip_name_x, font_size_xticks*/
      36865 && n !== (n = /*adjusted_x1*/
      e[15] - /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.3 - 5)) && v(t, "x", n), (!R || he & /*x_ticks_spacing, font_size_xticks*/
      65 && i !== (i = /*x_ticks_spacing*/
      e[6] - /*font_size_xticks*/
      e[0] - 5)) && v(t, "y", i), (!R || he & /*tooltip_name_x, font_size_xticks*/
      4097 && l !== (l = /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.6 + 10)) && v(t, "width", l), (!R || he & /*font_size_xticks*/
      1 && f !== (f = /*font_size_xticks*/
      e[0] + 20)) && v(t, "height", f), (!R || he & /*rotation_xaxis, x1, x_ticks_spacing*/
      8258 && u !== (u = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`)) && v(t, "transform", u), (!R || he & /*tooltip_name_x*/
      4096) && Oe(
        d,
        /*tooltip_name_x*/
        e[12]
      ), (!R || he & /*rotation_xaxis, x1, x_ticks_spacing*/
      8258 && h !== (h = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`)) && v(c, "transform", h), (!R || he & /*text_anchor_x_axis*/
      16) && v(
        c,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[4]
      ), (!R || he & /*dominant_baseline_x_axis*/
      32) && v(
        c,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[5]
      ), (!R || he & /*x1*/
      8192) && v(
        c,
        "x",
        /*x1*/
        e[13]
      ), (!R || he & /*x_ticks_spacing*/
      64) && v(
        c,
        "y",
        /*x_ticks_spacing*/
        e[6]
      ), (!R || he & /*font_size_xticks*/
      1) && y(
        c,
        "font-size",
        /*font_size_xticks*/
        e[0] * 1.2 + "px"
      ), (!R || he & /*dy*/
      8) && v(
        c,
        "dy",
        /*dy*/
        e[3]
      ), (!R || he & /*dx*/
      4) && v(
        c,
        "dx",
        /*dx*/
        e[2]
      ), (!R || he & /*y_lines_spacing, space_between_ticks_and_gridline, rect_width*/
      132608 && S !== (S = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10] / 2 - /*rect_width*/
      e[17])) && v(p, "x", S), (!R || he & /*y1, rect_height*/
      589824 && x !== (x = /*y1*/
      e[19] - /*rect_height*/
      e[16] / 2)) && v(p, "y", x), (!R || he & /*rect_width*/
      131072) && v(
        p,
        "width",
        /*rect_width*/
        e[17]
      ), (!R || he & /*rect_height*/
      65536) && v(
        p,
        "height",
        /*rect_height*/
        e[16]
      ), (!R || he & /*tooltip_name_y*/
      16384) && Oe(
        P,
        /*tooltip_name_y*/
        e[14]
      ), (!R || he & /*y1*/
      524288) && v(
        C,
        "y",
        /*y1*/
        e[19]
      ), (!R || he & /*y_lines_spacing, space_between_ticks_and_gridline*/
      1536 && O !== (O = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10])) && v(C, "x", O), (!R || he & /*font_size_yticks*/
      2048) && y(
        C,
        "font-size",
        /*font_size_yticks*/
        e[11] + "px"
      ), (!R || he & /*vline*/
      256 && te !== (te = /*vline*/
      e[8].x1)) && v(D, "x1", te), (!R || he & /*vline*/
      256 && W !== (W = /*vline*/
      e[8].y1)) && v(D, "y1", W), (!R || he & /*vline*/
      256 && K !== (K = /*vline*/
      e[8].x2)) && v(D, "x2", K), (!R || he & /*vline*/
      256 && se !== (se = /*vline*/
      e[8].y2)) && v(D, "y2", se), (!R || he & /*hline*/
      128 && re !== (re = /*hline*/
      e[7].x1)) && v(fe, "x1", re), (!R || he & /*hline*/
      128 && J !== (J = /*hline*/
      e[7].y1)) && v(fe, "y1", J), (!R || he & /*hline*/
      128 && H !== (H = /*hline*/
      e[7].x2)) && v(fe, "x2", H), (!R || he & /*hline*/
      128 && A !== (A = /*hline*/
      e[7].y2)) && v(fe, "y2", A);
    },
    i(de) {
      R || (it(() => {
        R && (a || (a = Pt(
          t,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), a.run(1));
      }), it(() => {
        R && (g || (g = Pt(
          c,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), g.run(1));
      }), it(() => {
        R && (M || (M = Pt(
          p,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), M.run(1));
      }), it(() => {
        R && (E || (E = Pt(
          C,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), E.run(1));
      }), R = !0);
    },
    o(de) {
      a || (a = Pt(
        t,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), a.run(0), g || (g = Pt(
        c,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), g.run(0), M || (M = Pt(
        p,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), M.run(0), E || (E = Pt(
        C,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), E.run(0), R = !1;
    },
    d(de) {
      de && (Z(t), Z(_), Z(c), Z(w), Z(p), Z(z), Z(C), Z(B), Z(D), Z(ce), Z(fe)), de && a && a.end(), de && g && g.end(), de && M && M.end(), de && E && E.end();
    }
  };
}
function $4(e, t, n) {
  let i, l, f, u, a, _, c, d, h, { x_scale: g } = t, { y_scale: w } = t, { font_size_xticks: p } = t, { rotation_xaxis: S } = t, { dx: x } = t, { dy: M } = t, { text_anchor_x_axis: z } = t, { dominant_baseline_x_axis: C } = t, { x_ticks_spacing: P } = t, { tooltip2_array_values: O } = t, { interval: E } = t, { type: B } = t, { show_delay_tooltip: D } = t, { hline: te } = t, { vline: W } = t, { y_lines_spacing: K } = t, { space_between_ticks_and_gridline: se } = t, { format_yaxis: ce } = t, { font_size_yticks: fe } = t;
  return e.$$set = (re) => {
    "x_scale" in re && n(20, g = re.x_scale), "y_scale" in re && n(21, w = re.y_scale), "font_size_xticks" in re && n(0, p = re.font_size_xticks), "rotation_xaxis" in re && n(1, S = re.rotation_xaxis), "dx" in re && n(2, x = re.dx), "dy" in re && n(3, M = re.dy), "text_anchor_x_axis" in re && n(4, z = re.text_anchor_x_axis), "dominant_baseline_x_axis" in re && n(5, C = re.dominant_baseline_x_axis), "x_ticks_spacing" in re && n(6, P = re.x_ticks_spacing), "tooltip2_array_values" in re && n(22, O = re.tooltip2_array_values), "interval" in re && n(23, E = re.interval), "type" in re && n(24, B = re.type), "show_delay_tooltip" in re && n(25, D = re.show_delay_tooltip), "hline" in re && n(7, te = re.hline), "vline" in re && n(8, W = re.vline), "y_lines_spacing" in re && n(9, K = re.y_lines_spacing), "space_between_ticks_and_gridline" in re && n(10, se = re.space_between_ticks_and_gridline), "format_yaxis" in re && n(26, ce = re.format_yaxis), "font_size_yticks" in re && n(11, fe = re.font_size_yticks);
  }, e.$$.update = () => {
    e.$$.dirty & /*tooltip2_array_values, interval, type*/
    29360128 && n(12, i = O ? t0(E, B, O) : null), e.$$.dirty & /*x_scale, tooltip2_array_values*/
    5242880 && n(13, l = g(O[0].data.x)), e.$$.dirty & /*y_scale, tooltip2_array_values*/
    6291456 && n(19, f = w(O[0].data.y)), e.$$.dirty & /*show_delay_tooltip*/
    33554432 && n(18, u = { delay: D }), e.$$.dirty & /*format_yaxis*/
    67108864 && n(27, a = hn(ce)), e.$$.dirty & /*format_number, tooltip2_array_values*/
    138412032 && n(14, _ = a(O[0].data.y)), e.$$.dirty & /*tooltip_name_y, font_size_yticks*/
    18432 && n(17, c = _.length * fe * 0.6), e.$$.dirty & /*font_size_yticks*/
    2048 && n(16, d = fe + 20), e.$$.dirty & /*x1*/
    8192 && n(15, h = l), e.$$.dirty & /*text_anchor_x_axis, x1, tooltip_name_x, font_size_xticks*/
    12305 && (z === "end" ? n(15, h = l - i.length * p * 0.6 / 2 - 5 / 2) : z === "start" && n(15, h = l + i.length * p * 0.6 / 2 + 5 / 2));
  }, [
    p,
    S,
    x,
    M,
    z,
    C,
    P,
    te,
    W,
    K,
    se,
    fe,
    i,
    l,
    _,
    h,
    d,
    c,
    u,
    f,
    g,
    w,
    O,
    E,
    B,
    D,
    ce,
    a
  ];
}
class ev extends ct {
  constructor(t) {
    super(), ht(this, t, $4, V4, ut, {
      x_scale: 20,
      y_scale: 21,
      font_size_xticks: 0,
      rotation_xaxis: 1,
      dx: 2,
      dy: 3,
      text_anchor_x_axis: 4,
      dominant_baseline_x_axis: 5,
      x_ticks_spacing: 6,
      tooltip2_array_values: 22,
      interval: 23,
      type: 24,
      show_delay_tooltip: 25,
      hline: 7,
      vline: 8,
      y_lines_spacing: 9,
      space_between_ticks_and_gridline: 10,
      format_yaxis: 26,
      font_size_yticks: 11
    });
  }
}
function n1(e, t, n) {
  const i = e.slice();
  return i[119] = t[n], i;
}
function i1(e, t, n) {
  const i = e.slice();
  return i[64] = t[n], i;
}
function r1(e, t, n) {
  const i = e.slice();
  return i[124] = t[n], i;
}
function l1(e, t, n) {
  const i = e.slice();
  return i[119] = t[n], i;
}
function o1(e, t, n) {
  const i = e.slice();
  return i[129] = t[n].x_start, i[130] = t[n].x_end, i[131] = t[n].y_start, i[132] = t[n].y_end, i[133] = t[n].colors, i[134] = t[n].opacity, i[135] = t[n].outline_color, i[136] = t[n].outline_width, i[137] = t[n].linetype, i[138] = t[n].key, i[51] = t[n].type, i;
}
function f1(e, t, n) {
  const i = e.slice();
  return i[141] = t[n], i;
}
function u1(e, t, n) {
  const i = e.slice();
  return i[141] = t[n], i;
}
function a1(e, t, n) {
  const i = e.slice();
  return i[50] = t[n].id, i[146] = t[n].color, i[51] = t[n].type, i;
}
function s1(e) {
  let t, n, i;
  return {
    c() {
      t = _e("div"), n = Ae(
        /*header*/
        e[4]
      ), v(t, "class", "header"), v(t, "style", i = "text-align: " + /*title_align*/
      e[5] + "; color: " + /*title_color*/
      e[6] + "; font-size: " + /*title_font_size*/
      e[7] + "px; font-weight: " + /*title_font_weight*/
      e[8] + "; padding-bottom: 10px; margin-left: " + /*label_height*/
      (e[52] + Pi) + "px; " + /*custom_css_header*/
      e[9]);
    },
    m(l, f) {
      j(l, t, f), q(t, n);
    },
    p(l, f) {
      f[0] & /*header*/
      16 && Oe(
        n,
        /*header*/
        l[4]
      ), f[0] & /*title_align, title_color, title_font_size, title_font_weight, custom_css_header*/
      992 | f[1] & /*label_height*/
      2097152 && i !== (i = "text-align: " + /*title_align*/
      l[5] + "; color: " + /*title_color*/
      l[6] + "; font-size: " + /*title_font_size*/
      l[7] + "px; font-weight: " + /*title_font_weight*/
      l[8] + "; padding-bottom: 10px; margin-left: " + /*label_height*/
      (l[52] + Pi) + "px; " + /*custom_css_header*/
      l[9]) && v(t, "style", i);
    },
    d(l) {
      l && Z(t);
    }
  };
}
function _1(e) {
  let t, n = ke(
    /*legend_cats*/
    e[75]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = h1(a1(e, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      t = Le();
    },
    m(l, f) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, f);
      j(l, t, f);
    },
    p(l, f) {
      if (f[1] & /*current_categories*/
      134217728 | f[2] & /*hover_legend, legend_cats, categories*/
      8212) {
        n = ke(
          /*legend_cats*/
          l[75]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = a1(l, n, u);
          i[u] ? i[u].p(a, f) : (i[u] = h1(a), i[u].c(), i[u].m(t.parentNode, t));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = n.length;
      }
    },
    d(l) {
      l && Z(t), xn(i, l);
    }
  };
}
function tv(e) {
  let t, n, i, l;
  return {
    c() {
      t = ze("svg"), n = ze("path"), v(n, "d", "M2 10 Q12 0 22 10"), v(n, "fill", i = /*color*/
      e[146]), v(n, "stroke", l = /*color*/
      e[146]), v(n, "stroke-width", "1"), v(t, "width", "24"), v(t, "height", "12"), v(t, "viewBox", "0 0 24 12"), y(t, "display", "inline-block"), y(t, "vertical-align", "middle");
    },
    m(f, u) {
      j(f, t, u), q(t, n);
    },
    p(f, u) {
      u[2] & /*legend_cats*/
      8192 && i !== (i = /*color*/
      f[146]) && v(n, "fill", i), u[2] & /*legend_cats*/
      8192 && l !== (l = /*color*/
      f[146]) && v(n, "stroke", l);
    },
    d(f) {
      f && Z(t);
    }
  };
}
function nv(e) {
  let t;
  return {
    c() {
      t = _e("span"), y(
        t,
        "background",
        /*color*/
        e[146]
      ), y(t, "width", "18px"), y(t, "height", "3px"), y(t, "display", "inline-block"), y(t, "border-radius", "1px"), y(t, "border", "1px solid rgba(0, 0, 0, 0.5)");
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[2] & /*legend_cats*/
      8192 && y(
        t,
        "background",
        /*color*/
        n[146]
      );
    },
    d(n) {
      n && Z(t);
    }
  };
}
function iv(e) {
  let t;
  return {
    c() {
      t = _e("span"), y(
        t,
        "background",
        /*color*/
        e[146]
      ), y(t, "width", "8px"), y(t, "height", "8px"), y(t, "display", "inline-block"), y(t, "border-radius", "50%"), y(t, "border", "1px solid rgba(0, 0, 0, 0.5)");
    },
    m(n, i) {
      j(n, t, i);
    },
    p(n, i) {
      i[2] & /*legend_cats*/
      8192 && y(
        t,
        "background",
        /*color*/
        n[146]
      );
    },
    d(n) {
      n && Z(t);
    }
  };
}
function h1(e) {
  let t, n, i = (
    /*id*/
    e[50].replace(/\.\d+$/, "") + ""
  ), l, f, u, a, _;
  function c(p, S) {
    if (
      /*type*/
      p[51] === "points"
    )
      return iv;
    if (
      /*type*/
      p[51] === "line"
    )
      return nv;
    if (
      /*type*/
      p[51] === "density"
    )
      return tv;
  }
  let d = c(e), h = d && d(e);
  function g() {
    return (
      /*mouseover_handler*/
      e[95](
        /*id*/
        e[50]
      )
    );
  }
  function w() {
    return (
      /*click_handler*/
      e[96](
        /*id*/
        e[50]
      )
    );
  }
  return {
    c() {
      t = _e("p"), h && h.c(), n = ve(), l = Ae(i), f = ve(), v(t, "style", u = /*hover_legend*/
      e[66] && /*hover_legend*/
      e[66] !== /*id*/
      e[50] && /*current_categories*/
      e[58].includes(
        /*hover_legend*/
        e[66]
      ) || !/*categories*/
      e[64][
        /*id*/
        e[50]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;");
    },
    m(p, S) {
      j(p, t, S), h && h.m(t, null), q(t, n), q(t, l), q(t, f), a || (_ = [
        ot(t, "mouseover", g),
        ot(t, "click", w)
      ], a = !0);
    },
    p(p, S) {
      e = p, d === (d = c(e)) && h ? h.p(e, S) : (h && h.d(1), h = d && d(e), h && (h.c(), h.m(t, n))), S[2] & /*legend_cats*/
      8192 && i !== (i = /*id*/
      e[50].replace(/\.\d+$/, "") + "") && Oe(l, i), S[1] & /*current_categories*/
      134217728 | S[2] & /*hover_legend, legend_cats, categories*/
      8212 && u !== (u = /*hover_legend*/
      e[66] && /*hover_legend*/
      e[66] !== /*id*/
      e[50] && /*current_categories*/
      e[58].includes(
        /*hover_legend*/
        e[66]
      ) || !/*categories*/
      e[64][
        /*id*/
        e[50]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;") && v(t, "style", u);
    },
    d(p) {
      p && Z(t), h && h.d(), a = !1, Ht(_);
    }
  };
}
function c1(e) {
  let t, n, i;
  return n = new sp({
    props: {
      filtered_segments_df: (
        /*filtered_segments_df*/
        e[76]
      ),
      label_height: (
        /*label_height*/
        e[52]
      ),
      space_between_label_and_ticks: Pi
    }
  }), {
    c() {
      t = _e("div"), Ke(n.$$.fragment), y(t, "padding-bottom", "15px");
    },
    m(l, f) {
      j(l, t, f), Ze(n, t, null), i = !0;
    },
    p(l, f) {
      const u = {};
      f[2] & /*filtered_segments_df*/
      16384 && (u.filtered_segments_df = /*filtered_segments_df*/
      l[76]), f[1] & /*label_height*/
      2097152 && (u.label_height = /*label_height*/
      l[52]), n.$set(u);
    },
    i(l) {
      i || (ee(n.$$.fragment, l), i = !0);
    },
    o(l) {
      ue(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && Z(t), je(n);
    }
  };
}
function g1(e, t) {
  let n, i, l;
  return i = new f0({
    props: {
      x1: (
        /*x_scale*/
        t[56](
          /*tickValue*/
          t[141]
        )
      ),
      width: (
        /*width*/
        t[0]
      ),
      x_ticks_spacing: (
        /*x_ticks_spacing*/
        t[73]
      ),
      x_lines_spacing: (
        /*x_lines_spacing*/
        t[61]
      ),
      rotation_xaxis: (
        /*rotation_xaxis*/
        t[13]
      ),
      line_generator_space: Wr,
      ticklabel: (
        /*format_x_axis*/
        t[63] === "null" ? (
          /*tickValue*/
          t[141]
        ) : (
          /*format_x_axis*/
          t[63](
            /*tickValue*/
            t[141]
          )
        )
      ),
      font_size_xticks: (
        /*font_size_xticks*/
        t[15]
      ),
      dx: (
        /*dx*/
        t[11]
      ),
      dy: (
        /*dy*/
        t[12]
      ),
      dominant_baseline_x_axis: (
        /*dominant_baseline_x_axis*/
        t[16]
      ),
      text_anchor_x_axis: (
        /*text_anchor_x_axis*/
        t[17]
      ),
      tweenOptions: {
        x1: {
          easing: rt,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Le(), Ke(i.$$.fragment), this.first = n;
    },
    m(f, u) {
      j(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[1] & /*x_scale*/
      33554432 | u[2] & /*x_ticks*/
      4096 && (a.x1 = /*x_scale*/
      t[56](
        /*tickValue*/
        t[141]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[2] & /*x_ticks_spacing*/
      2048 && (a.x_ticks_spacing = /*x_ticks_spacing*/
      t[73]), u[1] & /*x_lines_spacing*/
      1073741824 && (a.x_lines_spacing = /*x_lines_spacing*/
      t[61]), u[0] & /*rotation_xaxis*/
      8192 && (a.rotation_xaxis = /*rotation_xaxis*/
      t[13]), u[2] & /*format_x_axis, x_ticks*/
      4098 && (a.ticklabel = /*format_x_axis*/
      t[63] === "null" ? (
        /*tickValue*/
        t[141]
      ) : (
        /*format_x_axis*/
        t[63](
          /*tickValue*/
          t[141]
        )
      )), u[0] & /*font_size_xticks*/
      32768 && (a.font_size_xticks = /*font_size_xticks*/
      t[15]), u[0] & /*dx*/
      2048 && (a.dx = /*dx*/
      t[11]), u[0] & /*dy*/
      4096 && (a.dy = /*dy*/
      t[12]), u[0] & /*dominant_baseline_x_axis*/
      65536 && (a.dominant_baseline_x_axis = /*dominant_baseline_x_axis*/
      t[16]), u[0] & /*text_anchor_x_axis*/
      131072 && (a.text_anchor_x_axis = /*text_anchor_x_axis*/
      t[17]), i.$set(a);
    },
    i(f) {
      l || (ee(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function d1(e, t) {
  let n, i, l;
  return i = new ma({
    props: {
      y1: (
        /*y_scale*/
        t[57](
          /*tickValue*/
          t[141]
        )
      ),
      width: (
        /*width*/
        t[0]
      ),
      space_between_ticks_and_gridline: Vo,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[62]
      ),
      height: (
        /*height*/
        t[10]
      ),
      line_generator_space: Wr,
      ticklabel: (
        /*format_number*/
        t[60](
          /*tickValue*/
          t[141]
        )
      ),
      font_size_yticks: (
        /*font_size_yticks*/
        t[23]
      ),
      tweenOptions: {
        y1: {
          easing: rt,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Le(), Ke(i.$$.fragment), this.first = n;
    },
    m(f, u) {
      j(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[0] & /*yaxis_ticks*/
      1048576 | u[1] & /*y_scale*/
      67108864 && (a.y1 = /*y_scale*/
      t[57](
        /*tickValue*/
        t[141]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[2] & /*y_lines_spacing*/
      1 && (a.y_lines_spacing = /*y_lines_spacing*/
      t[62]), u[0] & /*height*/
      1024 && (a.height = /*height*/
      t[10]), u[0] & /*yaxis_ticks*/
      1048576 | u[1] & /*format_number, y_scale*/
      603979776 && (a.ticklabel = /*format_number*/
      t[60](
        /*tickValue*/
        t[141]
      )), u[0] & /*font_size_yticks*/
      8388608 && (a.font_size_yticks = /*font_size_yticks*/
      t[23]), i.$set(a);
    },
    i(f) {
      l || (ee(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function m1(e) {
  let t, n;
  return t = new ev({
    props: {
      x_scale: (
        /*x_scale*/
        e[56]
      ),
      y_scale: (
        /*y_scale*/
        e[57]
      ),
      font_size_xticks: (
        /*font_size_xticks*/
        e[15]
      ),
      rotation_xaxis: (
        /*rotation_xaxis*/
        e[13]
      ),
      dx: (
        /*dx*/
        e[11]
      ),
      dy: (
        /*dy*/
        e[12]
      ),
      text_anchor_x_axis: (
        /*text_anchor_x_axis*/
        e[17]
      ),
      dominant_baseline_x_axis: (
        /*dominant_baseline_x_axis*/
        e[16]
      ),
      x_ticks_spacing: (
        /*x_ticks_spacing*/
        e[73]
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[54]
      ),
      interval: (
        /*interval*/
        e[34]
      ),
      type: (
        /*type*/
        e[51]
      ),
      show_delay_tooltip: (
        /*show_delay_tooltip*/
        e[45]
      ),
      hline: (
        /*hline*/
        e[72]
      ),
      vline: (
        /*vline*/
        e[71]
      ),
      format_yaxis: (
        /*format_yaxis*/
        e[21]
      ),
      y_lines_spacing: (
        /*y_lines_spacing*/
        e[62]
      ),
      space_between_ticks_and_gridline: Vo,
      font_size_yticks: (
        /*font_size_yticks*/
        e[23]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*x_scale*/
      33554432 && (f.x_scale = /*x_scale*/
      i[56]), l[1] & /*y_scale*/
      67108864 && (f.y_scale = /*y_scale*/
      i[57]), l[0] & /*font_size_xticks*/
      32768 && (f.font_size_xticks = /*font_size_xticks*/
      i[15]), l[0] & /*rotation_xaxis*/
      8192 && (f.rotation_xaxis = /*rotation_xaxis*/
      i[13]), l[0] & /*dx*/
      2048 && (f.dx = /*dx*/
      i[11]), l[0] & /*dy*/
      4096 && (f.dy = /*dy*/
      i[12]), l[0] & /*text_anchor_x_axis*/
      131072 && (f.text_anchor_x_axis = /*text_anchor_x_axis*/
      i[17]), l[0] & /*dominant_baseline_x_axis*/
      65536 && (f.dominant_baseline_x_axis = /*dominant_baseline_x_axis*/
      i[16]), l[2] & /*x_ticks_spacing*/
      2048 && (f.x_ticks_spacing = /*x_ticks_spacing*/
      i[73]), l[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[54]), l[1] & /*interval*/
      8 && (f.interval = /*interval*/
      i[34]), l[1] & /*type*/
      1048576 && (f.type = /*type*/
      i[51]), l[1] & /*show_delay_tooltip*/
      16384 && (f.show_delay_tooltip = /*show_delay_tooltip*/
      i[45]), l[2] & /*hline*/
      1024 && (f.hline = /*hline*/
      i[72]), l[2] & /*vline*/
      512 && (f.vline = /*vline*/
      i[71]), l[0] & /*format_yaxis*/
      2097152 && (f.format_yaxis = /*format_yaxis*/
      i[21]), l[2] & /*y_lines_spacing*/
      1 && (f.y_lines_spacing = /*y_lines_spacing*/
      i[62]), l[0] & /*font_size_yticks*/
      8388608 && (f.font_size_yticks = /*font_size_yticks*/
      i[23]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function y1(e) {
  let t = [], n = /* @__PURE__ */ new Map(), i, l, f = ke(
    /*filtered_segments_df*/
    e[76]
  );
  const u = (a) => (
    /*key*/
    a[138]
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = o1(e, f, a), c = u(_);
    n.set(c, t[a] = b1(c, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      i = Le();
    },
    m(a, _) {
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(a, _);
      j(a, i, _), l = !0;
    },
    p(a, _) {
      _[0] & /*width*/
      1 | _[1] & /*x_lines_spacing*/
      1073741824 | _[2] & /*filtered_segments_df, y_lines_spacing*/
      16385 && (f = ke(
        /*filtered_segments_df*/
        a[76]
      ), We(), t = kn(t, _, u, 1, a, f, n, i.parentNode, Kn, b1, i, o1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          ee(t[_]);
        l = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ue(t[_]);
      l = !1;
    },
    d(a) {
      a && Z(i);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function b1(e, t) {
  let n, i, l;
  return i = new kp({
    props: {
      x1: (
        /*x_start*/
        t[129]
      ),
      x2: (
        /*x_end*/
        t[130]
      ),
      y1: (
        /*y_start*/
        t[131]
      ),
      y2: (
        /*y_end*/
        t[132]
      ),
      colors: (
        /*colors*/
        t[133]
      ),
      opacity: (
        /*opacity*/
        t[134]
      ),
      outline_color: (
        /*outline_color*/
        t[135]
      ),
      outline_width: (
        /*outline_width*/
        t[136]
      ),
      linetype: (
        /*linetype*/
        t[137]
      ),
      type: (
        /*type*/
        t[51]
      ),
      line_generator_space: Wr,
      width: (
        /*width*/
        t[0]
      ),
      x_lines_spacing: (
        /*x_lines_spacing*/
        t[61]
      ),
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[62]
      ),
      tweenOptions: {
        x1: {
          easing: rt,
          duration: 1e3
        },
        y1: {
          easing: rt,
          duration: 1e3
        },
        x2: {
          easing: rt,
          duration: 1e3
        },
        y2: {
          easing: rt,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Le(), Ke(i.$$.fragment), this.first = n;
    },
    m(f, u) {
      j(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[2] & /*filtered_segments_df*/
      16384 && (a.x1 = /*x_start*/
      t[129]), u[2] & /*filtered_segments_df*/
      16384 && (a.x2 = /*x_end*/
      t[130]), u[2] & /*filtered_segments_df*/
      16384 && (a.y1 = /*y_start*/
      t[131]), u[2] & /*filtered_segments_df*/
      16384 && (a.y2 = /*y_end*/
      t[132]), u[2] & /*filtered_segments_df*/
      16384 && (a.colors = /*colors*/
      t[133]), u[2] & /*filtered_segments_df*/
      16384 && (a.opacity = /*opacity*/
      t[134]), u[2] & /*filtered_segments_df*/
      16384 && (a.outline_color = /*outline_color*/
      t[135]), u[2] & /*filtered_segments_df*/
      16384 && (a.outline_width = /*outline_width*/
      t[136]), u[2] & /*filtered_segments_df*/
      16384 && (a.linetype = /*linetype*/
      t[137]), u[2] & /*filtered_segments_df*/
      16384 && (a.type = /*type*/
      t[51]), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[1] & /*x_lines_spacing*/
      1073741824 && (a.x_lines_spacing = /*x_lines_spacing*/
      t[61]), u[2] & /*y_lines_spacing*/
      1 && (a.y_lines_spacing = /*y_lines_spacing*/
      t[62]), i.$set(a);
    },
    i(f) {
      l || (ee(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function w1(e) {
  let t, n, i, l, f, u, a, _, c, d;
  return {
    c() {
      t = ze("circle"), u = ze("circle"), v(t, "cx", n = /*x_scale*/
      e[56](
        /*tooltip2_array_values*/
        e[54].data.x
      )), v(t, "cy", i = /*y_scale*/
      e[57](
        /*tooltip2_array_values*/
        e[54].data.y
      )), v(t, "r", l = /*tooltip2_array_values*/
      e[54].size * 2), v(t, "opacity", 1), v(t, "fill", f = /*tooltip2_array_values*/
      e[54].colors), v(u, "cx", a = /*x_scale*/
      e[56](
        /*tooltip2_array_values*/
        e[54].data.x
      )), v(u, "cy", _ = /*y_scale*/
      e[57](
        /*tooltip2_array_values*/
        e[54].data.y
      )), v(u, "r", c = /*tooltip2_array_values*/
      e[54].size * 4), v(u, "opacity", 0.1), v(u, "fill", d = /*tooltip2_array_values*/
      e[54].colors);
    },
    m(h, g) {
      j(h, t, g), j(h, u, g);
    },
    p(h, g) {
      g[1] & /*x_scale, tooltip2_array_values*/
      41943040 && n !== (n = /*x_scale*/
      h[56](
        /*tooltip2_array_values*/
        h[54].data.x
      )) && v(t, "cx", n), g[1] & /*y_scale, tooltip2_array_values*/
      75497472 && i !== (i = /*y_scale*/
      h[57](
        /*tooltip2_array_values*/
        h[54].data.y
      )) && v(t, "cy", i), g[1] & /*tooltip2_array_values*/
      8388608 && l !== (l = /*tooltip2_array_values*/
      h[54].size * 2) && v(t, "r", l), g[1] & /*tooltip2_array_values*/
      8388608 && f !== (f = /*tooltip2_array_values*/
      h[54].colors) && v(t, "fill", f), g[1] & /*x_scale, tooltip2_array_values*/
      41943040 && a !== (a = /*x_scale*/
      h[56](
        /*tooltip2_array_values*/
        h[54].data.x
      )) && v(u, "cx", a), g[1] & /*y_scale, tooltip2_array_values*/
      75497472 && _ !== (_ = /*y_scale*/
      h[57](
        /*tooltip2_array_values*/
        h[54].data.y
      )) && v(u, "cy", _), g[1] & /*tooltip2_array_values*/
      8388608 && c !== (c = /*tooltip2_array_values*/
      h[54].size * 4) && v(u, "r", c), g[1] & /*tooltip2_array_values*/
      8388608 && d !== (d = /*tooltip2_array_values*/
      h[54].colors) && v(u, "fill", d);
    },
    d(h) {
      h && (Z(t), Z(u));
    }
  };
}
function p1(e) {
  let t, n, i, l, f, u, a = ke(
    /*tooltip2_array_values*/
    e[54]
  ), _ = [];
  for (let c = 0; c < a.length; c += 1)
    _[c] = v1(l1(e, a, c));
  return {
    c() {
      for (let c = 0; c < _.length; c += 1)
        _[c].c();
      t = ze("g"), n = ze("line"), v(n, "y1", i = /*vline*/
      e[71].y1), v(n, "y2", l = /*vline*/
      e[71].y2), v(n, "x1", f = /*vline*/
      e[71].x1), v(n, "x2", u = /*vline*/
      e[71].x2), v(n, "stroke", "black"), v(
        n,
        "stroke-dasharray",
        /*line_type_axis_trigger*/
        e[1]
      ), v(t, "class", "tooltip-lines"), v(t, "transform", "translate(0, 0)");
    },
    m(c, d) {
      for (let h = 0; h < _.length; h += 1)
        _[h] && _[h].m(c, d);
      j(c, t, d), q(t, n);
    },
    p(c, d) {
      if (d[1] & /*x_scale, tooltip2_array_values, y_scale*/
      109051904) {
        a = ke(
          /*tooltip2_array_values*/
          c[54]
        );
        let h;
        for (h = 0; h < a.length; h += 1) {
          const g = l1(c, a, h);
          _[h] ? _[h].p(g, d) : (_[h] = v1(g), _[h].c(), _[h].m(t.parentNode, t));
        }
        for (; h < _.length; h += 1)
          _[h].d(1);
        _.length = a.length;
      }
      d[2] & /*vline*/
      512 && i !== (i = /*vline*/
      c[71].y1) && v(n, "y1", i), d[2] & /*vline*/
      512 && l !== (l = /*vline*/
      c[71].y2) && v(n, "y2", l), d[2] & /*vline*/
      512 && f !== (f = /*vline*/
      c[71].x1) && v(n, "x1", f), d[2] & /*vline*/
      512 && u !== (u = /*vline*/
      c[71].x2) && v(n, "x2", u), d[0] & /*line_type_axis_trigger*/
      2 && v(
        n,
        "stroke-dasharray",
        /*line_type_axis_trigger*/
        c[1]
      );
    },
    d(c) {
      c && Z(t), xn(_, c);
    }
  };
}
function v1(e) {
  let t, n, i, l, f, u, a, _, c, d;
  return {
    c() {
      t = ze("circle"), u = ze("circle"), v(t, "cx", n = /*x_scale*/
      e[56](
        /*line*/
        e[119].data.x
      )), v(t, "cy", i = /*y_scale*/
      e[57](
        /*line*/
        e[119].data.y
      )), v(t, "r", l = /*line*/
      e[119].size * 1.5), v(t, "opacity", 1), v(t, "fill", f = /*line*/
      e[119].colors), v(u, "cx", a = /*x_scale*/
      e[56](
        /*line*/
        e[119].data.x
      )), v(u, "cy", _ = /*y_scale*/
      e[57](
        /*line*/
        e[119].data.y
      )), v(u, "r", c = /*line*/
      e[119].size * 3), v(u, "opacity", 0.1), v(u, "fill", d = /*line*/
      e[119].colors);
    },
    m(h, g) {
      j(h, t, g), j(h, u, g);
    },
    p(h, g) {
      g[1] & /*x_scale, tooltip2_array_values*/
      41943040 && n !== (n = /*x_scale*/
      h[56](
        /*line*/
        h[119].data.x
      )) && v(t, "cx", n), g[1] & /*y_scale, tooltip2_array_values*/
      75497472 && i !== (i = /*y_scale*/
      h[57](
        /*line*/
        h[119].data.y
      )) && v(t, "cy", i), g[1] & /*tooltip2_array_values*/
      8388608 && l !== (l = /*line*/
      h[119].size * 1.5) && v(t, "r", l), g[1] & /*tooltip2_array_values*/
      8388608 && f !== (f = /*line*/
      h[119].colors) && v(t, "fill", f), g[1] & /*x_scale, tooltip2_array_values*/
      41943040 && a !== (a = /*x_scale*/
      h[56](
        /*line*/
        h[119].data.x
      )) && v(u, "cx", a), g[1] & /*y_scale, tooltip2_array_values*/
      75497472 && _ !== (_ = /*y_scale*/
      h[57](
        /*line*/
        h[119].data.y
      )) && v(u, "cy", _), g[1] & /*tooltip2_array_values*/
      8388608 && c !== (c = /*line*/
      h[119].size * 3) && v(u, "r", c), g[1] & /*tooltip2_array_values*/
      8388608 && d !== (d = /*line*/
      h[119].colors) && v(u, "fill", d);
    },
    d(h) {
      h && (Z(t), Z(u));
    }
  };
}
function k1(e) {
  let t = [], n = /* @__PURE__ */ new Map(), i, l, f = ke(
    /*pointsRendered*/
    e[70]
  );
  const u = (a) => (
    /*categories*/
    a[64].id_id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = i1(e, f, a), c = u(_);
    n.set(c, t[a] = M1(c, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      i = Le();
    },
    m(a, _) {
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(a, _);
      j(a, i, _), l = !0;
    },
    p(a, _) {
      _[1] & /*x_scale, y_scale, current_categories, tooltip2_array_values*/
      243269632 | _[2] & /*pointsRendered, hover_legend, listener*/
      336 && (f = ke(
        /*pointsRendered*/
        a[70]
      ), We(), t = kn(t, _, u, 1, a, f, n, i.parentNode, Kn, M1, i, i1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          ee(t[_]);
        l = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ue(t[_]);
      l = !1;
    },
    d(a) {
      a && Z(i);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function x1(e) {
  let t, n;
  return t = new fp({
    props: {
      x: (
        /*x_scale*/
        e[56](
          /*points*/
          e[124].x
        )
      ),
      y: (
        /*y_scale*/
        e[57](
          /*points*/
          e[124].y
        )
      ),
      categories: (
        /*categories*/
        e[64]
      ),
      points: (
        /*points*/
        e[124]
      ),
      tweenOptions: {
        x: {
          easing: rt,
          duration: 1e3
        },
        y: {
          easing: rt,
          duration: 1e3
        }
      },
      hovered_data: xc,
      hover_legend: (
        /*hover_legend*/
        e[66]
      ),
      current_categories: (
        /*current_categories*/
        e[58]
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[54]
      ),
      listener: (
        /*listener*/
        e[68]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*x_scale*/
      33554432 | l[2] & /*pointsRendered*/
      256 && (f.x = /*x_scale*/
      i[56](
        /*points*/
        i[124].x
      )), l[1] & /*y_scale*/
      67108864 | l[2] & /*pointsRendered*/
      256 && (f.y = /*y_scale*/
      i[57](
        /*points*/
        i[124].y
      )), l[2] & /*pointsRendered*/
      256 && (f.categories = /*categories*/
      i[64]), l[2] & /*pointsRendered*/
      256 && (f.points = /*points*/
      i[124]), l[2] & /*hover_legend*/
      16 && (f.hover_legend = /*hover_legend*/
      i[66]), l[1] & /*current_categories*/
      134217728 && (f.current_categories = /*current_categories*/
      i[58]), l[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[54]), l[2] & /*listener*/
      64 && (f.listener = /*listener*/
      i[68]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function M1(e, t) {
  let n, i, l, f = ke(
    /*categories*/
    t[64].data
  ), u = [];
  for (let _ = 0; _ < f.length; _ += 1)
    u[_] = x1(r1(t, f, _));
  const a = (_) => ue(u[_], 1, 1, () => {
    u[_] = null;
  });
  return {
    key: e,
    first: null,
    c() {
      n = Le();
      for (let _ = 0; _ < u.length; _ += 1)
        u[_].c();
      i = Le(), this.first = n;
    },
    m(_, c) {
      j(_, n, c);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(_, c);
      j(_, i, c), l = !0;
    },
    p(_, c) {
      if (t = _, c[1] & /*x_scale, y_scale, current_categories, tooltip2_array_values*/
      243269632 | c[2] & /*pointsRendered, hover_legend, listener*/
      336) {
        f = ke(
          /*categories*/
          t[64].data
        );
        let d;
        for (d = 0; d < f.length; d += 1) {
          const h = r1(t, f, d);
          u[d] ? (u[d].p(h, c), ee(u[d], 1)) : (u[d] = x1(h), u[d].c(), ee(u[d], 1), u[d].m(i.parentNode, i));
        }
        for (We(), d = f.length; d < u.length; d += 1)
          a(d);
        Be();
      }
    },
    i(_) {
      if (!l) {
        for (let c = 0; c < f.length; c += 1)
          ee(u[c]);
        l = !0;
      }
    },
    o(_) {
      u = u.filter(Boolean);
      for (let c = 0; c < u.length; c += 1)
        ue(u[c]);
      l = !1;
    },
    d(_) {
      _ && (Z(n), Z(i)), xn(u, _);
    }
  };
}
function T1(e) {
  let t = [], n = /* @__PURE__ */ new Map(), i, l, f = ke(
    /*linesRendered*/
    e[69]
  );
  const u = (a) => (
    /*line*/
    a[119].id_id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = n1(e, f, a), c = u(_);
    n.set(c, t[a] = S1(c, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      i = Le();
    },
    m(a, _) {
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(a, _);
      j(a, i, _), l = !0;
    },
    p(a, _) {
      _[1] & /*current_categories, tooltip2_array_values*/
      142606336 | _[2] & /*linesRendered, hover_legend, listener*/
      208 && (f = ke(
        /*linesRendered*/
        a[69]
      ), We(), t = kn(t, _, u, 1, a, f, n, i.parentNode, Kn, S1, i, n1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          ee(t[_]);
        l = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ue(t[_]);
      l = !1;
    },
    d(a) {
      a && Z(i);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function S1(e, t) {
  let n, i, l;
  return i = new Hw({
    props: {
      line: (
        /*line*/
        t[119]
      ),
      hover_legend: (
        /*hover_legend*/
        t[66]
      ),
      current_categories: (
        /*current_categories*/
        t[58]
      ),
      line_size: (
        /*line*/
        t[119].size
      ),
      path: (
        /*line*/
        t[119].path
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        t[54]
      ),
      tweenOptions: {
        path: {
          interpolate: Tw,
          duration: 1e3,
          easing: rt
        }
      },
      listener: (
        /*listener*/
        t[68]
      )
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Le(), Ke(i.$$.fragment), this.first = n;
    },
    m(f, u) {
      j(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[2] & /*linesRendered*/
      128 && (a.line = /*line*/
      t[119]), u[2] & /*hover_legend*/
      16 && (a.hover_legend = /*hover_legend*/
      t[66]), u[1] & /*current_categories*/
      134217728 && (a.current_categories = /*current_categories*/
      t[58]), u[2] & /*linesRendered*/
      128 && (a.line_size = /*line*/
      t[119].size), u[2] & /*linesRendered*/
      128 && (a.path = /*line*/
      t[119].path), u[1] & /*tooltip2_array_values*/
      8388608 && (a.tooltip2_array_values = /*tooltip2_array_values*/
      t[54]), u[2] & /*listener*/
      64 && (a.listener = /*listener*/
      t[68]), i.$set(a);
    },
    i(f) {
      l || (ee(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function z1(e) {
  let t, n;
  return t = new Ap({
    props: {
      arrows_df: (
        /*arrows_df*/
        e[30]
      ),
      x_scale: (
        /*x_scale*/
        e[56]
      ),
      y_scale: (
        /*y_scale*/
        e[57]
      ),
      type: (
        /*type*/
        e[51]
      ),
      time_interval: (
        /*time_interval*/
        e[35]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[0] & /*arrows_df*/
      1073741824 && (f.arrows_df = /*arrows_df*/
      i[30]), l[1] & /*x_scale*/
      33554432 && (f.x_scale = /*x_scale*/
      i[56]), l[1] & /*y_scale*/
      67108864 && (f.y_scale = /*y_scale*/
      i[57]), l[1] & /*type*/
      1048576 && (f.type = /*type*/
      i[51]), l[1] & /*time_interval*/
      16 && (f.time_interval = /*time_interval*/
      i[35]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function A1(e) {
  let t, n;
  return t = new Tp({
    props: {
      annotations_df: (
        /*annotations_df*/
        e[31]
      ),
      x_scale: (
        /*x_scale*/
        e[56]
      ),
      y_scale: (
        /*y_scale*/
        e[57]
      ),
      type: (
        /*type*/
        e[51]
      ),
      time_interval: (
        /*time_interval*/
        e[35]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*annotations_df*/
      1 && (f.annotations_df = /*annotations_df*/
      i[31]), l[1] & /*x_scale*/
      33554432 && (f.x_scale = /*x_scale*/
      i[56]), l[1] & /*y_scale*/
      67108864 && (f.y_scale = /*y_scale*/
      i[57]), l[1] & /*type*/
      1048576 && (f.type = /*type*/
      i[51]), l[1] & /*time_interval*/
      16 && (f.time_interval = /*time_interval*/
      i[35]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function C1(e) {
  let t, n, i, l, f, u, a;
  function _(g) {
    e[98](g);
  }
  function c(g) {
    e[99](g);
  }
  function d(g) {
    e[100](g);
  }
  let h = {
    height: (
      /*height*/
      e[10]
    ),
    width: (
      /*width*/
      e[0]
    ),
    x_scale: (
      /*x_scale*/
      e[56]
    ),
    y_scale: (
      /*y_scale*/
      e[57]
    ),
    margin: nf,
    filtered_data: (
      /*filtered_data*/
      e[55]
    ),
    type: (
      /*type*/
      e[51]
    ),
    tooltip: (
      /*tooltip*/
      e[33]
    ),
    buffer: Fr,
    time_series_interval: (
      /*time_series_interval*/
      e[36]
    ),
    chart: fv
  };
  return (
    /*tooltip2_array_values*/
    e[54] !== void 0 && (h.tooltip2_array_values = /*tooltip2_array_values*/
    e[54]), /*m*/
    e[67] !== void 0 && (h.m = /*m*/
    e[67]), /*listener*/
    e[68] !== void 0 && (h.listener = /*listener*/
    e[68]), n = new o0({ props: h }), _t.push(() => Ot(n, "tooltip2_array_values", _)), _t.push(() => Ot(n, "m", c)), _t.push(() => Ot(n, "listener", d)), {
      c() {
        t = ze("g"), Ke(n.$$.fragment), v(t, "transform", u = "translate(" + /*ticks_label_width*/
        (e[65] + /*label_height*/
        e[52] + 10) + " 10)");
      },
      m(g, w) {
        j(g, t, w), Ze(n, t, null), a = !0;
      },
      p(g, w) {
        const p = {};
        w[0] & /*height*/
        1024 && (p.height = /*height*/
        g[10]), w[0] & /*width*/
        1 && (p.width = /*width*/
        g[0]), w[1] & /*x_scale*/
        33554432 && (p.x_scale = /*x_scale*/
        g[56]), w[1] & /*y_scale*/
        67108864 && (p.y_scale = /*y_scale*/
        g[57]), w[1] & /*filtered_data*/
        16777216 && (p.filtered_data = /*filtered_data*/
        g[55]), w[1] & /*type*/
        1048576 && (p.type = /*type*/
        g[51]), w[1] & /*tooltip*/
        4 && (p.tooltip = /*tooltip*/
        g[33]), w[1] & /*time_series_interval*/
        32 && (p.time_series_interval = /*time_series_interval*/
        g[36]), !i && w[1] & /*tooltip2_array_values*/
        8388608 && (i = !0, p.tooltip2_array_values = /*tooltip2_array_values*/
        g[54], It(() => i = !1)), !l && w[2] & /*m*/
        32 && (l = !0, p.m = /*m*/
        g[67], It(() => l = !1)), !f && w[2] & /*listener*/
        64 && (f = !0, p.listener = /*listener*/
        g[68], It(() => f = !1)), n.$set(p), (!a || w[1] & /*label_height*/
        2097152 | w[2] & /*ticks_label_width*/
        8 && u !== (u = "translate(" + /*ticks_label_width*/
        (g[65] + /*label_height*/
        g[52] + 10) + " 10)")) && v(t, "transform", u);
      },
      i(g) {
        a || (ee(n.$$.fragment, g), a = !0);
      },
      o(g) {
        ue(n.$$.fragment, g), a = !1;
      },
      d(g) {
        g && Z(t), je(n);
      }
    }
  );
}
function L1(e) {
  let t, n, i, l, f, u, a;
  function _(g) {
    e[101](g);
  }
  function c(g) {
    e[102](g);
  }
  function d(g) {
    e[103](g);
  }
  let h = {
    height: (
      /*height*/
      e[10]
    ),
    width: (
      /*width*/
      e[0]
    ),
    margin: nf,
    x_scale: (
      /*x_scale*/
      e[56]
    ),
    y_scale: (
      /*y_scale*/
      e[57]
    ),
    filtered_data: (
      /*filtered_data*/
      e[55]
    ),
    buffer: Fr
  };
  return (
    /*listener*/
    e[68] !== void 0 && (h.listener = /*listener*/
    e[68]), /*m*/
    e[67] !== void 0 && (h.m = /*m*/
    e[67]), /*tooltip2_array_values*/
    e[54] !== void 0 && (h.tooltip2_array_values = /*tooltip2_array_values*/
    e[54]), n = new U4({ props: h }), _t.push(() => Ot(n, "listener", _)), _t.push(() => Ot(n, "m", c)), _t.push(() => Ot(n, "tooltip2_array_values", d)), {
      c() {
        t = ze("g"), Ke(n.$$.fragment), v(t, "transform", u = "translate(" + /*ticks_label_width*/
        (e[65] + /*label_height*/
        e[52] + 10) + " 10)");
      },
      m(g, w) {
        j(g, t, w), Ze(n, t, null), a = !0;
      },
      p(g, w) {
        const p = {};
        w[0] & /*height*/
        1024 && (p.height = /*height*/
        g[10]), w[0] & /*width*/
        1 && (p.width = /*width*/
        g[0]), w[1] & /*x_scale*/
        33554432 && (p.x_scale = /*x_scale*/
        g[56]), w[1] & /*y_scale*/
        67108864 && (p.y_scale = /*y_scale*/
        g[57]), w[1] & /*filtered_data*/
        16777216 && (p.filtered_data = /*filtered_data*/
        g[55]), !i && w[2] & /*listener*/
        64 && (i = !0, p.listener = /*listener*/
        g[68], It(() => i = !1)), !l && w[2] & /*m*/
        32 && (l = !0, p.m = /*m*/
        g[67], It(() => l = !1)), !f && w[1] & /*tooltip2_array_values*/
        8388608 && (f = !0, p.tooltip2_array_values = /*tooltip2_array_values*/
        g[54], It(() => f = !1)), n.$set(p), (!a || w[1] & /*label_height*/
        2097152 | w[2] & /*ticks_label_width*/
        8 && u !== (u = "translate(" + /*ticks_label_width*/
        (g[65] + /*label_height*/
        g[52] + 10) + " 10)")) && v(t, "transform", u);
      },
      i(g) {
        a || (ee(n.$$.fragment, g), a = !0);
      },
      o(g) {
        ue(n.$$.fragment, g), a = !1;
      },
      d(g) {
        g && Z(t), je(n);
      }
    }
  );
}
function E1(e) {
  let t, n;
  return t = new Jw({
    props: {
      x_scale: (
        /*x_scale*/
        e[56]
      ),
      y_scale: (
        /*y_scale*/
        e[57]
      ),
      format_tooltip: (
        /*format_tooltip*/
        e[24]
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[54]
      ),
      margin: nf,
      buffer: Fr,
      height: (
        /*height*/
        e[10]
      ),
      width: (
        /*width*/
        e[0]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*x_scale*/
      33554432 && (f.x_scale = /*x_scale*/
      i[56]), l[1] & /*y_scale*/
      67108864 && (f.y_scale = /*y_scale*/
      i[57]), l[0] & /*format_tooltip*/
      16777216 && (f.format_tooltip = /*format_tooltip*/
      i[24]), l[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[54]), l[0] & /*height*/
      1024 && (f.height = /*height*/
      i[10]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function rv(e) {
  let t, n;
  return t = new Q4({
    props: {
      x_scale: (
        /*x_scale*/
        e[56]
      ),
      y_scale: (
        /*y_scale*/
        e[57]
      ),
      m_y: (
        /*m*/
        e[67].y
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[54]
      ),
      format_tooltip: (
        /*format_tooltip*/
        e[24]
      ),
      height: (
        /*height*/
        e[10]
      ),
      width: (
        /*width*/
        e[0]
      ),
      interval: (
        /*interval*/
        e[34]
      ),
      type: (
        /*type*/
        e[51]
      ),
      background_color_tt: (
        /*background_color_tt*/
        e[37]
      ),
      opacity_tt: (
        /*opacity_tt*/
        e[38]
      ),
      animation_params_list: (
        /*animation_params_list*/
        e[39]
      ),
      justify_content_tooltip: (
        /*justify_content_tooltip*/
        e[40]
      ),
      font_size_tooltip: (
        /*font_size_tooltip*/
        e[41]
      ),
      padding_tooltip: (
        /*padding_tooltip*/
        e[42]
      ),
      text_color_tooltip: (
        /*text_color_tooltip*/
        e[43]
      ),
      border_color_tooltip: (
        /*border_color_tooltip*/
        e[44]
      ),
      show_delay_tooltip: (
        /*show_delay_tooltip*/
        e[45]
      ),
      border_style_tooltip: (
        /*border_style_tooltip*/
        e[46]
      ),
      border_width_tooltip: (
        /*border_width_tooltip*/
        e[47]
      ),
      tooltip_position: (
        /*tooltip_position*/
        e[48]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*x_scale*/
      33554432 && (f.x_scale = /*x_scale*/
      i[56]), l[1] & /*y_scale*/
      67108864 && (f.y_scale = /*y_scale*/
      i[57]), l[2] & /*m*/
      32 && (f.m_y = /*m*/
      i[67].y), l[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[54]), l[0] & /*format_tooltip*/
      16777216 && (f.format_tooltip = /*format_tooltip*/
      i[24]), l[0] & /*height*/
      1024 && (f.height = /*height*/
      i[10]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), l[1] & /*interval*/
      8 && (f.interval = /*interval*/
      i[34]), l[1] & /*type*/
      1048576 && (f.type = /*type*/
      i[51]), l[1] & /*background_color_tt*/
      64 && (f.background_color_tt = /*background_color_tt*/
      i[37]), l[1] & /*opacity_tt*/
      128 && (f.opacity_tt = /*opacity_tt*/
      i[38]), l[1] & /*animation_params_list*/
      256 && (f.animation_params_list = /*animation_params_list*/
      i[39]), l[1] & /*justify_content_tooltip*/
      512 && (f.justify_content_tooltip = /*justify_content_tooltip*/
      i[40]), l[1] & /*font_size_tooltip*/
      1024 && (f.font_size_tooltip = /*font_size_tooltip*/
      i[41]), l[1] & /*padding_tooltip*/
      2048 && (f.padding_tooltip = /*padding_tooltip*/
      i[42]), l[1] & /*text_color_tooltip*/
      4096 && (f.text_color_tooltip = /*text_color_tooltip*/
      i[43]), l[1] & /*border_color_tooltip*/
      8192 && (f.border_color_tooltip = /*border_color_tooltip*/
      i[44]), l[1] & /*show_delay_tooltip*/
      16384 && (f.show_delay_tooltip = /*show_delay_tooltip*/
      i[45]), l[1] & /*border_style_tooltip*/
      32768 && (f.border_style_tooltip = /*border_style_tooltip*/
      i[46]), l[1] & /*border_width_tooltip*/
      65536 && (f.border_width_tooltip = /*border_width_tooltip*/
      i[47]), l[1] & /*tooltip_position*/
      131072 && (f.tooltip_position = /*tooltip_position*/
      i[48]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function lv(e) {
  let t, n;
  return t = new rp({
    props: {
      x_scale: (
        /*x_scale*/
        e[56]
      ),
      m_y: (
        /*m*/
        e[67].y
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[54]
      ),
      format_tooltip: (
        /*format_tooltip*/
        e[24]
      ),
      height: (
        /*height*/
        e[10]
      ),
      width: (
        /*width*/
        e[0]
      ),
      margin: nf,
      buffer: Fr,
      interval: (
        /*interval*/
        e[34]
      ),
      type: (
        /*type*/
        e[51]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*x_scale*/
      33554432 && (f.x_scale = /*x_scale*/
      i[56]), l[2] & /*m*/
      32 && (f.m_y = /*m*/
      i[67].y), l[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[54]), l[0] & /*format_tooltip*/
      16777216 && (f.format_tooltip = /*format_tooltip*/
      i[24]), l[0] & /*height*/
      1024 && (f.height = /*height*/
      i[10]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), l[1] & /*interval*/
      8 && (f.interval = /*interval*/
      i[34]), l[1] & /*type*/
      1048576 && (f.type = /*type*/
      i[51]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function R1(e) {
  let t, n;
  return t = new yp({
    props: {
      y: (
        /*y_scale*/
        e[57].domain()[1]
      ),
      x_scale: (
        /*x_scale*/
        e[56]
      ),
      y_scale: (
        /*y_scale*/
        e[57]
      ),
      filtered_segments_df: (
        /*filtered_segments_df*/
        e[76]
      ),
      height: (
        /*height*/
        e[10]
      ),
      width: (
        /*width*/
        e[0]
      ),
      y_lines_spacing: (
        /*y_lines_spacing*/
        e[62]
      ),
      line_generator_space: Wr
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*y_scale*/
      67108864 && (f.y = /*y_scale*/
      i[57].domain()[1]), l[1] & /*x_scale*/
      33554432 && (f.x_scale = /*x_scale*/
      i[56]), l[1] & /*y_scale*/
      67108864 && (f.y_scale = /*y_scale*/
      i[57]), l[2] & /*filtered_segments_df*/
      16384 && (f.filtered_segments_df = /*filtered_segments_df*/
      i[76]), l[0] & /*height*/
      1024 && (f.height = /*height*/
      i[10]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), l[2] & /*y_lines_spacing*/
      1 && (f.y_lines_spacing = /*y_lines_spacing*/
      i[62]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function ov(e) {
  let t, n, i, l, f, u, a = [], _ = /* @__PURE__ */ new Map(), c, d, h = [], g = /* @__PURE__ */ new Map(), w, p, S, x, M, z, C, P, O, E, B, D, te, W, K, se, ce, fe, re, J, H = (
    /*header*/
    e[4] && s1(e)
  ), A = (
    /*show_legend*/
    e[2] && _1(e)
  ), R = (
    /*segments_df*/
    e[29] && /*show_legend_segments*/
    e[32] && c1(e)
  ), de = ke(
    /*x_ticks*/
    e[74]
  );
  const he = (Y) => (
    /*tickValue*/
    Y[141].toString()
  );
  for (let Y = 0; Y < de.length; Y += 1) {
    let le = u1(e, de, Y), Me = he(le);
    _.set(Me, a[Y] = g1(Me, le));
  }
  d = new a0({
    props: {
      axis_title_position: (
        /*x_scale*/
        (e[56](
          /*x_ticks*/
          e[74][0]
        ) + /*x_scale*/
        e[56](
          /*x_ticks*/
          e[74][
            /*x_ticks*/
            e[74].length - 1
          ]
        )) / 2
      ),
      tweenOptions: {
        axis_title_position: {
          easing: rt,
          duration: 1e3
        }
      },
      x_label: (
        /*x_label*/
        e[19]
      ),
      font_size_xaxis: (
        /*font_size_xaxis*/
        e[14]
      ),
      label_height_x_axis: (
        /*label_height_x_axis*/
        e[53]
      ),
      height: (
        /*height*/
        e[10]
      )
    }
  });
  let pt = ke(
    /*y_scale*/
    e[57].ticks(
      /*yaxis_ticks*/
      e[20]
    )
  );
  const Kt = (Y) => (
    /*tickValue*/
    Y[141]
  );
  for (let Y = 0; Y < pt.length; Y += 1) {
    let le = f1(e, pt, Y), Me = Kt(le);
    g.set(Me, h[Y] = d1(Me, le));
  }
  let Je = (
    /*crosshair*/
    e[49] && /*tooltip2_array_values*/
    e[54] && /*tooltip2_array_values*/
    e[54].length > 0 && m1(e)
  );
  S = new u0({
    props: {
      axis_title_position: (
        /*y_scale*/
        (e[57](
          /*ticks*/
          e[59][0]
        ) + /*y_scale*/
        e[57](
          /*ticks*/
          e[59][
            /*ticks*/
            e[59].length - 1
          ]
        )) / 2
      ),
      tweenOptions: {
        axis_title_position: {
          easing: rt,
          duration: 1e3
        }
      },
      y_label: (
        /*y_label*/
        e[25]
      ),
      font_size_yaxis: (
        /*font_size_yaxis*/
        e[22]
      ),
      label_height: (
        /*label_height*/
        e[52]
      )
    }
  });
  let Ue = (
    /*segments*/
    e[26] && y1(e)
  ), $e = (
    /*tooltip2_array_values*/
    e[54] && /*tooltip*/
    e[33] === "single" && /*x_axis_type*/
    (e[18] === "date" || /*x_axis_type*/
    e[18] === "factor" || /*x_axis_type*/
    e[18] === "numeric" && /*tooltip2_array_values*/
    (e[54].type === "line" || /*tooltip2_array_values*/
    e[54].type === "density")) && w1(e)
  ), at = (
    /*tooltip*/
    e[33] === "vertical_line" && /*tooltip2_array_values*/
    e[54] && /*tooltip2_array_values*/
    e[54].length > 0 && p1(e)
  ), Xe = (
    /*pointsRendered*/
    e[70].length > 0 && k1(e)
  ), ae = (
    /*linesRendered*/
    e[69].length > 0 && T1(e)
  ), me = (
    /*arrows*/
    e[28] && z1(e)
  ), be = (
    /*annotations*/
    e[27] && A1(e)
  ), Q = (
    /*x_axis_type*/
    (e[18] === "date" || /*x_axis_type*/
    e[18] === "factor") && C1(e)
  ), Ce = (
    /*x_axis_type*/
    e[18] === "numeric" && L1(e)
  ), ye = (
    /*tooltip2_array_values*/
    e[54] && [
      /*tooltip2_array_values*/
      e[54]
    ].length > 0 && /*tooltip*/
    e[33] === "single" && E1(e)
  );
  const He = [lv, rv], Qe = [];
  function et(Y, le) {
    return (
      /*tooltip2_array_values*/
      Y[54] && /*tooltip2_array_values*/
      Y[54].length > 0 && /*tooltip*/
      Y[33] === "vertical_line" && !/*custom_tooltip_data*/
      Y[3] ? 0 : (
        /*tooltip2_array_values*/
        Y[54] && /*tooltip2_array_values*/
        Y[54].length > 0 && /*tooltip*/
        Y[33] === "vertical_line" && /*custom_tooltip_data*/
        Y[3] ? 1 : -1
      )
    );
  }
  ~(W = et(e)) && (K = Qe[W] = He[W](e));
  let qe = (
    /*$hovered_legend*/
    e[77] && R1(e)
  );
  return {
    c() {
      H && H.c(), t = ve(), n = _e("div"), A && A.c(), i = ve(), R && R.c(), l = ve(), f = _e("div"), u = ze("svg");
      for (let Y = 0; Y < a.length; Y += 1)
        a[Y].c();
      c = Le(), Ke(d.$$.fragment);
      for (let Y = 0; Y < h.length; Y += 1)
        h[Y].c();
      w = Le(), Je && Je.c(), p = Le(), Ke(S.$$.fragment), Ue && Ue.c(), x = Le(), $e && $e.c(), M = Le(), at && at.c(), z = Le(), Xe && Xe.c(), C = Le(), ae && ae.c(), P = Le(), me && me.c(), O = Le(), be && be.c(), E = Le(), Q && Q.c(), B = Le(), Ce && Ce.c(), D = ve(), ye && ye.c(), te = ve(), K && K.c(), se = ve(), qe && qe.c(), v(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "flex-start"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(
        n,
        "margin-left",
        /*label_height*/
        e[52] + Pi + "px"
      ), y(n, "margin-bottom", "0.25rem"), y(u, "color", "black"), v(
        u,
        "height",
        /*height*/
        e[10]
      ), v(
        u,
        "width",
        /*width*/
        e[0]
      ), v(f, "class", "chart"), y(f, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[104].call(f)
      ));
    },
    m(Y, le) {
      H && H.m(Y, le), j(Y, t, le), j(Y, n, le), A && A.m(n, null), j(Y, i, le), R && R.m(Y, le), j(Y, l, le), j(Y, f, le), q(f, u);
      for (let Me = 0; Me < a.length; Me += 1)
        a[Me] && a[Me].m(u, null);
      q(u, c), Ze(d, u, null);
      for (let Me = 0; Me < h.length; Me += 1)
        h[Me] && h[Me].m(u, null);
      q(u, w), Je && Je.m(u, null), q(u, p), Ze(S, u, null), Ue && Ue.m(u, null), q(u, x), $e && $e.m(u, null), q(u, M), at && at.m(u, null), q(u, z), Xe && Xe.m(u, null), q(u, C), ae && ae.m(u, null), q(u, P), me && me.m(u, null), q(u, O), be && be.m(u, null), q(u, E), Q && Q.m(u, null), q(u, B), Ce && Ce.m(u, null), q(f, D), ye && ye.m(f, null), q(f, te), ~W && Qe[W].m(f, null), q(f, se), qe && qe.m(f, null), ce = ir(
        f,
        /*div1_elementresize_handler*/
        e[104].bind(f)
      ), fe = !0, re || (J = [
        ot(
          n,
          "mouseleave",
          /*mouseleave_handler*/
          e[97]
        ),
        ot(
          f,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[105]
        )
      ], re = !0);
    },
    p(Y, le) {
      /*header*/
      Y[4] ? H ? H.p(Y, le) : (H = s1(Y), H.c(), H.m(t.parentNode, t)) : H && (H.d(1), H = null), /*show_legend*/
      Y[2] ? A ? A.p(Y, le) : (A = _1(Y), A.c(), A.m(n, null)) : A && (A.d(1), A = null), (!fe || le[1] & /*label_height*/
      2097152) && y(
        n,
        "margin-left",
        /*label_height*/
        Y[52] + Pi + "px"
      ), /*segments_df*/
      Y[29] && /*show_legend_segments*/
      Y[32] ? R ? (R.p(Y, le), le[0] & /*segments_df*/
      536870912 | le[1] & /*show_legend_segments*/
      2 && ee(R, 1)) : (R = c1(Y), R.c(), ee(R, 1), R.m(l.parentNode, l)) : R && (We(), ue(R, 1, 1, () => {
        R = null;
      }), Be()), le[0] & /*width, rotation_xaxis, font_size_xticks, dx, dy, dominant_baseline_x_axis, text_anchor_x_axis*/
      243713 | le[1] & /*x_scale, x_lines_spacing*/
      1107296256 | le[2] & /*x_ticks, x_ticks_spacing, format_x_axis*/
      6146 && (de = ke(
        /*x_ticks*/
        Y[74]
      ), We(), a = kn(a, le, he, 1, Y, de, _, u, Kn, g1, c, u1), Be());
      const Me = {};
      le[1] & /*x_scale*/
      33554432 | le[2] & /*x_ticks*/
      4096 && (Me.axis_title_position = /*x_scale*/
      (Y[56](
        /*x_ticks*/
        Y[74][0]
      ) + /*x_scale*/
      Y[56](
        /*x_ticks*/
        Y[74][
          /*x_ticks*/
          Y[74].length - 1
        ]
      )) / 2), le[0] & /*x_label*/
      524288 && (Me.x_label = /*x_label*/
      Y[19]), le[0] & /*font_size_xaxis*/
      16384 && (Me.font_size_xaxis = /*font_size_xaxis*/
      Y[14]), le[1] & /*label_height_x_axis*/
      4194304 && (Me.label_height_x_axis = /*label_height_x_axis*/
      Y[53]), le[0] & /*height*/
      1024 && (Me.height = /*height*/
      Y[10]), d.$set(Me), le[0] & /*yaxis_ticks, width, height, font_size_yticks*/
      9438209 | le[1] & /*y_scale, format_number*/
      603979776 | le[2] & /*y_lines_spacing*/
      1 && (pt = ke(
        /*y_scale*/
        Y[57].ticks(
          /*yaxis_ticks*/
          Y[20]
        )
      ), We(), h = kn(h, le, Kt, 1, Y, pt, g, u, Kn, d1, w, f1), Be()), /*crosshair*/
      Y[49] && /*tooltip2_array_values*/
      Y[54] && /*tooltip2_array_values*/
      Y[54].length > 0 ? Je ? (Je.p(Y, le), le[1] & /*crosshair, tooltip2_array_values*/
      8650752 && ee(Je, 1)) : (Je = m1(Y), Je.c(), ee(Je, 1), Je.m(u, p)) : Je && (We(), ue(Je, 1, 1, () => {
        Je = null;
      }), Be());
      const xt = {};
      le[1] & /*y_scale, ticks*/
      335544320 && (xt.axis_title_position = /*y_scale*/
      (Y[57](
        /*ticks*/
        Y[59][0]
      ) + /*y_scale*/
      Y[57](
        /*ticks*/
        Y[59][
          /*ticks*/
          Y[59].length - 1
        ]
      )) / 2), le[0] & /*y_label*/
      33554432 && (xt.y_label = /*y_label*/
      Y[25]), le[0] & /*font_size_yaxis*/
      4194304 && (xt.font_size_yaxis = /*font_size_yaxis*/
      Y[22]), le[1] & /*label_height*/
      2097152 && (xt.label_height = /*label_height*/
      Y[52]), S.$set(xt), /*segments*/
      Y[26] ? Ue ? (Ue.p(Y, le), le[0] & /*segments*/
      67108864 && ee(Ue, 1)) : (Ue = y1(Y), Ue.c(), ee(Ue, 1), Ue.m(u, x)) : Ue && (We(), ue(Ue, 1, 1, () => {
        Ue = null;
      }), Be()), /*tooltip2_array_values*/
      Y[54] && /*tooltip*/
      Y[33] === "single" && /*x_axis_type*/
      (Y[18] === "date" || /*x_axis_type*/
      Y[18] === "factor" || /*x_axis_type*/
      Y[18] === "numeric" && /*tooltip2_array_values*/
      (Y[54].type === "line" || /*tooltip2_array_values*/
      Y[54].type === "density")) ? $e ? $e.p(Y, le) : ($e = w1(Y), $e.c(), $e.m(u, M)) : $e && ($e.d(1), $e = null), /*tooltip*/
      Y[33] === "vertical_line" && /*tooltip2_array_values*/
      Y[54] && /*tooltip2_array_values*/
      Y[54].length > 0 ? at ? at.p(Y, le) : (at = p1(Y), at.c(), at.m(u, z)) : at && (at.d(1), at = null), /*pointsRendered*/
      Y[70].length > 0 ? Xe ? (Xe.p(Y, le), le[2] & /*pointsRendered*/
      256 && ee(Xe, 1)) : (Xe = k1(Y), Xe.c(), ee(Xe, 1), Xe.m(u, C)) : Xe && (We(), ue(Xe, 1, 1, () => {
        Xe = null;
      }), Be()), /*linesRendered*/
      Y[69].length > 0 ? ae ? (ae.p(Y, le), le[2] & /*linesRendered*/
      128 && ee(ae, 1)) : (ae = T1(Y), ae.c(), ee(ae, 1), ae.m(u, P)) : ae && (We(), ue(ae, 1, 1, () => {
        ae = null;
      }), Be()), /*arrows*/
      Y[28] ? me ? (me.p(Y, le), le[0] & /*arrows*/
      268435456 && ee(me, 1)) : (me = z1(Y), me.c(), ee(me, 1), me.m(u, O)) : me && (We(), ue(me, 1, 1, () => {
        me = null;
      }), Be()), /*annotations*/
      Y[27] ? be ? (be.p(Y, le), le[0] & /*annotations*/
      134217728 && ee(be, 1)) : (be = A1(Y), be.c(), ee(be, 1), be.m(u, E)) : be && (We(), ue(be, 1, 1, () => {
        be = null;
      }), Be()), /*x_axis_type*/
      Y[18] === "date" || /*x_axis_type*/
      Y[18] === "factor" ? Q ? (Q.p(Y, le), le[0] & /*x_axis_type*/
      262144 && ee(Q, 1)) : (Q = C1(Y), Q.c(), ee(Q, 1), Q.m(u, B)) : Q && (We(), ue(Q, 1, 1, () => {
        Q = null;
      }), Be()), /*x_axis_type*/
      Y[18] === "numeric" ? Ce ? (Ce.p(Y, le), le[0] & /*x_axis_type*/
      262144 && ee(Ce, 1)) : (Ce = L1(Y), Ce.c(), ee(Ce, 1), Ce.m(u, null)) : Ce && (We(), ue(Ce, 1, 1, () => {
        Ce = null;
      }), Be()), (!fe || le[0] & /*height*/
      1024) && v(
        u,
        "height",
        /*height*/
        Y[10]
      ), (!fe || le[0] & /*width*/
      1) && v(
        u,
        "width",
        /*width*/
        Y[0]
      ), /*tooltip2_array_values*/
      Y[54] && [
        /*tooltip2_array_values*/
        Y[54]
      ].length > 0 && /*tooltip*/
      Y[33] === "single" ? ye ? (ye.p(Y, le), le[1] & /*tooltip2_array_values, tooltip*/
      8388612 && ee(ye, 1)) : (ye = E1(Y), ye.c(), ee(ye, 1), ye.m(f, te)) : ye && (We(), ue(ye, 1, 1, () => {
        ye = null;
      }), Be());
      let Mt = W;
      W = et(Y), W === Mt ? ~W && Qe[W].p(Y, le) : (K && (We(), ue(Qe[Mt], 1, 1, () => {
        Qe[Mt] = null;
      }), Be()), ~W ? (K = Qe[W], K ? K.p(Y, le) : (K = Qe[W] = He[W](Y), K.c()), ee(K, 1), K.m(f, se)) : K = null), /*$hovered_legend*/
      Y[77] ? qe ? (qe.p(Y, le), le[2] & /*$hovered_legend*/
      32768 && ee(qe, 1)) : (qe = R1(Y), qe.c(), ee(qe, 1), qe.m(f, null)) : qe && (We(), ue(qe, 1, 1, () => {
        qe = null;
      }), Be());
    },
    i(Y) {
      if (!fe) {
        ee(R);
        for (let le = 0; le < de.length; le += 1)
          ee(a[le]);
        ee(d.$$.fragment, Y);
        for (let le = 0; le < pt.length; le += 1)
          ee(h[le]);
        ee(Je), ee(S.$$.fragment, Y), ee(Ue), ee(Xe), ee(ae), ee(me), ee(be), ee(Q), ee(Ce), ee(ye), ee(K), ee(qe), fe = !0;
      }
    },
    o(Y) {
      ue(R);
      for (let le = 0; le < a.length; le += 1)
        ue(a[le]);
      ue(d.$$.fragment, Y);
      for (let le = 0; le < h.length; le += 1)
        ue(h[le]);
      ue(Je), ue(S.$$.fragment, Y), ue(Ue), ue(Xe), ue(ae), ue(me), ue(be), ue(Q), ue(Ce), ue(ye), ue(K), ue(qe), fe = !1;
    },
    d(Y) {
      Y && (Z(t), Z(n), Z(i), Z(l), Z(f)), H && H.d(Y), A && A.d(), R && R.d(Y);
      for (let le = 0; le < a.length; le += 1)
        a[le].d();
      je(d);
      for (let le = 0; le < h.length; le += 1)
        h[le].d();
      Je && Je.d(), je(S), Ue && Ue.d(), $e && $e.d(), at && at.d(), Xe && Xe.d(), ae && ae.d(), me && me.d(), be && be.d(), Q && Q.d(), Ce && Ce.d(), ye && ye.d(), ~W && Qe[W].d(), qe && qe.d(), ce(), re = !1, Ht(J);
    }
  };
}
const fv = "XYChart", nf = 30, Fr = 40;
let Wr = 20;
const Pi = 15, Vo = 5;
function I1(e) {
  requestAnimationFrame(() => {
    e();
  });
}
function uv(e, t, n) {
  let i, l, f, u, a;
  wt(e, Qi, (U) => n(77, a = U));
  let { data: _ = [] } = t, { id: c } = t;
  Vu(() => {
    console.log("Chart component destroyed:", c);
  }), A6(() => {
    console.log("Chart component mounted:", c);
  });
  let { width: d = 800 } = t, { show_legend: h } = t, { custom_tooltip_data: g } = t, { header: w } = t, { title_align: p } = t, { title_color: S } = t, { title_font_size: x } = t, { title_font_weight: M } = t, { custom_css_header: z } = t, { height: C = 400 } = t, { xaxis_ticks: P = 6 } = t, { format_xaxis: O } = t, { dx: E = "0em" } = t, { dy: B = "0em" } = t, { rotation_xaxis: D = 0 } = t, { font_size_xaxis: te = 14 } = t, { font_size_xticks: W = 12 } = t, { scale_x: K = "linear" } = t, { dominant_baseline_x_axis: se = "middle" } = t, { text_anchor_x_axis: ce = "middle" } = t, { line_type_axis_trigger: fe = "none" } = t, { x_axis_type: re } = t, { x_label: J } = t, { yaxis_ticks: H = 6 } = t, { format_yaxis: A = ",.3r" } = t, { font_size_yaxis: R = 14 } = t, { font_size_yticks: de = 12 } = t, { format_tooltip: he = "" } = t, { y_label: pt } = t, { segments: Kt } = t, { annotations: Je } = t, { arrows: Ue } = t, { segments_df: $e } = t, { arrows_df: at } = t, { annotations_df: Xe } = t, { show_legend_segments: ae } = t, { type: me } = t, { tooltip: be } = t, { interval: Q } = t, { time_interval: Ce } = t, { time_series_interval: ye = "daily" } = t, { background_color_tt: He } = t, { opacity_tt: Qe } = t, { animation_params_list: et } = t, { justify_content_tooltip: qe } = t, { font_size_tooltip: Y } = t, { padding_tooltip: le } = t, { text_color_tooltip: Me } = t, { border_color_tooltip: xt } = t, { show_delay_tooltip: Mt } = t, { border_style_tooltip: Xt } = t, { border_width_tooltip: gt } = t, { tooltip_position: Tt } = t, { crosshair: $t } = t, { x_range: yt } = t, { y_range: St } = t, en = [];
  function Nn(U) {
    let Ft = [];
    Ft = Object.keys(zt).filter((Et) => !U.includes(Et));
    for (let Et = 0; Et < U.length; Et++)
      n(64, zt[U[Et]] = !0, zt);
    for (let Et = 0; Et < Ft.length; Et++)
      n(64, zt[Ft[Et]] = !1, zt);
    return [zt, Ft, en];
  }
  let tn = Fr, ln = 20, Jn = Fr, cn, Mn = 10, on, Tn, zt = {}, Un = [], gn, At = null, Sn = { x: 0, y: 0 }, zn = !1, Qn, Vn, An = [], V = [], tt = [], Ct = [], fn = [], un = null, Pn = null, ri, si = [];
  const Yr = (U) => U.filter((Ft) => Ft.y !== null);
  let or = [], fr = [];
  const Xr = Jo.debounce(
    (U) => {
      n(69, or = U);
    },
    0
  ), qr = Jo.debounce(
    (U) => {
      n(70, fr = U);
    },
    0
  );
  let Cn = {}, dn = {}, X, Lt, vt, zi = C - 40, Ai = 40;
  function ur() {
    const Ft = document.createElement("canvas").getContext("2d"), Et = (sf, Hl) => {
      Ft.font = `${Hl}px Arial`;
      const { width: Yl } = Ft.measureText(sf), jr = Ft.measureText("M").actualBoundingBoxAscent + Ft.measureText("M").actualBoundingBoxDescent + 1;
      return { width: Yl, height: jr };
    }, af = Et(vt, de);
    n(65, tn = af.width);
    const Wl = Et(pt, R);
    n(52, Mn = Wl.height);
    const Wi = Et(f, W);
    Jn = Wi.width, cn = Wi.height;
    const Bl = Et("M", te);
    n(53, on = Bl.height), n(84, ln = ca(Jn, cn, D)), n(61, zi = C - ln - on - cn - Pi - Vo), n(62, Ai = tn + Mn + Pi + Vo);
  }
  Qu(ur);
  let Fn, _i, hi = 10;
  const Gr = (U) => n(66, Tn = U), Zr = (U) => n(64, zt[U] = !zt[U], zt), rf = () => n(66, Tn = null);
  function Nl(U) {
    At = U, n(54, At);
  }
  function Ul(U) {
    Sn = U, n(67, Sn);
  }
  function Pl(U) {
    zn = U, n(68, zn);
  }
  function lf(U) {
    zn = U, n(68, zn);
  }
  function of(U) {
    Sn = U, n(67, Sn);
  }
  function ff(U) {
    At = U, n(54, At);
  }
  function uf() {
    d = this.clientWidth, n(0, d);
  }
  const Fl = () => xc.set(null);
  return e.$$set = (U) => {
    "data" in U && n(78, _ = U.data), "id" in U && n(50, c = U.id), "width" in U && n(0, d = U.width), "show_legend" in U && n(2, h = U.show_legend), "custom_tooltip_data" in U && n(3, g = U.custom_tooltip_data), "header" in U && n(4, w = U.header), "title_align" in U && n(5, p = U.title_align), "title_color" in U && n(6, S = U.title_color), "title_font_size" in U && n(7, x = U.title_font_size), "title_font_weight" in U && n(8, M = U.title_font_weight), "custom_css_header" in U && n(9, z = U.custom_css_header), "height" in U && n(10, C = U.height), "xaxis_ticks" in U && n(79, P = U.xaxis_ticks), "format_xaxis" in U && n(80, O = U.format_xaxis), "dx" in U && n(11, E = U.dx), "dy" in U && n(12, B = U.dy), "rotation_xaxis" in U && n(13, D = U.rotation_xaxis), "font_size_xaxis" in U && n(14, te = U.font_size_xaxis), "font_size_xticks" in U && n(15, W = U.font_size_xticks), "scale_x" in U && n(81, K = U.scale_x), "dominant_baseline_x_axis" in U && n(16, se = U.dominant_baseline_x_axis), "text_anchor_x_axis" in U && n(17, ce = U.text_anchor_x_axis), "line_type_axis_trigger" in U && n(1, fe = U.line_type_axis_trigger), "x_axis_type" in U && n(18, re = U.x_axis_type), "x_label" in U && n(19, J = U.x_label), "yaxis_ticks" in U && n(20, H = U.yaxis_ticks), "format_yaxis" in U && n(21, A = U.format_yaxis), "font_size_yaxis" in U && n(22, R = U.font_size_yaxis), "font_size_yticks" in U && n(23, de = U.font_size_yticks), "format_tooltip" in U && n(24, he = U.format_tooltip), "y_label" in U && n(25, pt = U.y_label), "segments" in U && n(26, Kt = U.segments), "annotations" in U && n(27, Je = U.annotations), "arrows" in U && n(28, Ue = U.arrows), "segments_df" in U && n(29, $e = U.segments_df), "arrows_df" in U && n(30, at = U.arrows_df), "annotations_df" in U && n(31, Xe = U.annotations_df), "show_legend_segments" in U && n(32, ae = U.show_legend_segments), "type" in U && n(51, me = U.type), "tooltip" in U && n(33, be = U.tooltip), "interval" in U && n(34, Q = U.interval), "time_interval" in U && n(35, Ce = U.time_interval), "time_series_interval" in U && n(36, ye = U.time_series_interval), "background_color_tt" in U && n(37, He = U.background_color_tt), "opacity_tt" in U && n(38, Qe = U.opacity_tt), "animation_params_list" in U && n(39, et = U.animation_params_list), "justify_content_tooltip" in U && n(40, qe = U.justify_content_tooltip), "font_size_tooltip" in U && n(41, Y = U.font_size_tooltip), "padding_tooltip" in U && n(42, le = U.padding_tooltip), "text_color_tooltip" in U && n(43, Me = U.text_color_tooltip), "border_color_tooltip" in U && n(44, xt = U.border_color_tooltip), "show_delay_tooltip" in U && n(45, Mt = U.show_delay_tooltip), "border_style_tooltip" in U && n(46, Xt = U.border_style_tooltip), "border_width_tooltip" in U && n(47, gt = U.border_width_tooltip), "tooltip_position" in U && n(48, Tt = U.tooltip_position), "crosshair" in U && n(49, $t = U.crosshair), "x_range" in U && n(82, yt = U.x_range), "y_range" in U && n(83, St = U.y_range);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*line_type_axis_trigger*/
    2 && n(1, fe = fe || "none"), e.$$.dirty[1] & /*type, time_interval*/
    1048592 | e.$$.dirty[2] & /*data*/
    65536 && n(85, Un = Sw(_, me, Ce)), e.$$.dirty[2] & /*data, names, start*/
    50397184 && (n(86, gn = [...new Set(_.map((U) => U.id))]), n(88, Vn = _.map((U) => ({
      id: U.id,
      include_legend: U.include_legend,
      type: U.type,
      color: U.colors
    }))), n(87, Qn = Nn(gn)), n(64, zt = Qn[0]), Qn[1]), e.$$.dirty[2] & /*categories*/
    4 && n(58, ri = Object.keys(zt).filter((U) => zt[U])), e.$$.dirty[2] & /*names*/
    16777216 && n(58, ri = gn), e.$$.dirty[0] & /*width, x_axis_type*/
    262145 | e.$$.dirty[1] & /*current_categories, filtered_data, x_lines_spacing, type*/
    1225785344 | e.$$.dirty[2] & /*dataset, y_lines_spacing, scale_x, x_range, y_range, line_generator_scales, scales, line_generator, all_lines*/
    2025324545 | e.$$.dirty[3] & /*all_points*/
    1 && (n(55, An = Un.filter(({ id: U }) => ri.includes(U))), n(89, V = Aw(An, Ai, zi, d, Wr, me, K, yt, St, re)), n(91, Ct = V.slice(1, 3)), n(56, un = Ct[0]), n(57, Pn = Ct[1]), n(90, tt = V[0]), n(92, fn = zw(An, ri, tt)), n(92, fn = fn.filter(({ id: U }) => ri.includes(U))), n(93, si = fn.filter(({ type: U }) => ["points"].includes(U))), si.forEach((U) => {
      U.data = Yr(U.data);
    }), n(92, fn = fn.filter(({ type: U }) => ["line", "density", "bands"].includes(U))), I1(() => Xr(fn)), I1(() => qr(si))), e.$$.dirty[0] & /*segments_df, x_axis_type*/
    537133056 | e.$$.dirty[1] & /*y_scale, x_scale, time_interval*/
    100663312 | e.$$.dirty[2] & /*dataset*/
    8388608 && n(76, i = Cw(Un, $e, re, Pn, un, Ce)), e.$$.dirty[2] & /*include_legend*/
    67108864 && n(75, l = Vn.filter((U) => U.include_legend !== !1)), e.$$.dirty[1] & /*tooltip2_array_values, tooltip, x_lines_spacing, x_scale*/
    1115684868 && At && be === "vertical_line" && At.length > 0 && (n(71, Cn.y1 = zi, Cn), n(71, Cn.y2 = Wr, Cn), n(71, Cn.x1 = un(At[0].data.x), Cn), n(71, Cn.x2 = un(At[0].data.x), Cn)), e.$$.dirty[0] & /*width*/
    1 | e.$$.dirty[1] & /*tooltip2_array_values, tooltip, y_scale*/
    75497476 | e.$$.dirty[2] & /*y_lines_spacing*/
    1 && At && be === "vertical_line" && At.length > 0 && (n(72, dn.y1 = Pn(At[0].data.y), dn), n(72, dn.y2 = Pn(At[0].data.y), dn), n(72, dn.x1 = Ai, dn), n(72, dn.x2 = d, dn)), e.$$.dirty[0] & /*format_yaxis*/
    2097152 && n(60, Lt = hn(A)), e.$$.dirty[0] & /*yaxis_ticks*/
    1048576 | e.$$.dirty[1] & /*y_scale*/
    67108864 && n(59, X = Pn.ticks(H)), e.$$.dirty[1] & /*ticks, format_number*/
    805306368) {
      let U = 0;
      X.forEach((Ft) => {
        const Et = Lt(Ft).toString();
        Et.length > U && (U = Et.length, vt = Et);
      });
    }
    e.$$.dirty[1] & /*type, x_scale*/
    34603008 | e.$$.dirty[2] & /*format_xaxis, xaxis_ticks, format_x_axis, all_lines*/
    1074135042 | e.$$.dirty[3] & /*all_points*/
    1 && (me === "timeseries" ? (n(63, Fn = ha(O)), n(94, _i = un.ticks(P).map((U) => Fn(U)))) : (me === "points" || me === "line" || me === "density") && (typeof si.concat(fn)[0].data[0].x == "number" ? (n(63, Fn = hn(O)), n(94, _i = un.ticks(P).map((U) => hn(U)))) : (n(63, Fn = "null"), n(94, _i = un.domain())))), e.$$.dirty[3] & /*all_x_axis_tick_labels*/
    2 && (f = _i.reduce((U, Ft) => U.length > Ft.length ? U : Ft)), e.$$.dirty[0] & /*height*/
    1024 | e.$$.dirty[1] & /*label_height_x_axis*/
    4194304 | e.$$.dirty[2] & /*x_ticks_label_rotation_buffer*/
    4194304 && n(73, hi = C - ln - on - Pi), e.$$.dirty[1] & /*label_height*/
    2097152, e.$$.dirty[1] & /*x_scale*/
    33554432 | e.$$.dirty[2] & /*xaxis_ticks*/
    131072 && n(74, u = typeof un.domain()[0] == "string" ? un.domain() : un.ticks(P));
  }, [
    d,
    fe,
    h,
    g,
    w,
    p,
    S,
    x,
    M,
    z,
    C,
    E,
    B,
    D,
    te,
    W,
    se,
    ce,
    re,
    J,
    H,
    A,
    R,
    de,
    he,
    pt,
    Kt,
    Je,
    Ue,
    $e,
    at,
    Xe,
    ae,
    be,
    Q,
    Ce,
    ye,
    He,
    Qe,
    et,
    qe,
    Y,
    le,
    Me,
    xt,
    Mt,
    Xt,
    gt,
    Tt,
    $t,
    c,
    me,
    Mn,
    on,
    At,
    An,
    un,
    Pn,
    ri,
    X,
    Lt,
    zi,
    Ai,
    Fn,
    zt,
    tn,
    Tn,
    Sn,
    zn,
    or,
    fr,
    Cn,
    dn,
    hi,
    u,
    l,
    i,
    a,
    _,
    P,
    O,
    K,
    yt,
    St,
    ln,
    Un,
    gn,
    Qn,
    Vn,
    V,
    tt,
    Ct,
    fn,
    si,
    _i,
    Gr,
    Zr,
    rf,
    Nl,
    Ul,
    Pl,
    lf,
    of,
    ff,
    uf,
    Fl
  ];
}
class av extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      uv,
      ov,
      ut,
      {
        data: 78,
        id: 50,
        width: 0,
        show_legend: 2,
        custom_tooltip_data: 3,
        header: 4,
        title_align: 5,
        title_color: 6,
        title_font_size: 7,
        title_font_weight: 8,
        custom_css_header: 9,
        height: 10,
        xaxis_ticks: 79,
        format_xaxis: 80,
        dx: 11,
        dy: 12,
        rotation_xaxis: 13,
        font_size_xaxis: 14,
        font_size_xticks: 15,
        scale_x: 81,
        dominant_baseline_x_axis: 16,
        text_anchor_x_axis: 17,
        line_type_axis_trigger: 1,
        x_axis_type: 18,
        x_label: 19,
        yaxis_ticks: 20,
        format_yaxis: 21,
        font_size_yaxis: 22,
        font_size_yticks: 23,
        format_tooltip: 24,
        y_label: 25,
        segments: 26,
        annotations: 27,
        arrows: 28,
        segments_df: 29,
        arrows_df: 30,
        annotations_df: 31,
        show_legend_segments: 32,
        type: 51,
        tooltip: 33,
        interval: 34,
        time_interval: 35,
        time_series_interval: 36,
        background_color_tt: 37,
        opacity_tt: 38,
        animation_params_list: 39,
        justify_content_tooltip: 40,
        font_size_tooltip: 41,
        padding_tooltip: 42,
        text_color_tooltip: 43,
        border_color_tooltip: 44,
        show_delay_tooltip: 45,
        border_style_tooltip: 46,
        border_width_tooltip: 47,
        tooltip_position: 48,
        crosshair: 49,
        x_range: 82,
        y_range: 83
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
}
function sv(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = ze("rect"), v(
        t,
        "x",
        /*$tweened_x*/
        e[13]
      ), v(
        t,
        "y",
        /*$tweened_y*/
        e[14]
      ), v(
        t,
        "width",
        /*$tweened_width*/
        e[15]
      ), v(
        t,
        "height",
        /*$tweened_height*/
        e[16]
      ), v(
        t,
        "fill",
        /*color*/
        e[5]
      ), y(t, "transition", "opacity 0.5s ease"), v(t, "opacity", n = /*hovered_group*/
      e[2] || /*hover_legend*/
      e[9] && /*current_categories*/
      e[10].includes(
        /*hover_legend*/
        e[9]
      ) ? (
        /*group*/
        e[8] === /*hovered_group*/
        e[2] || /*group*/
        e[8] === /*hover_legend*/
        e[9] ? 1 : 0.2
      ) : 1);
    },
    m(u, a) {
      j(u, t, a), l || (f = [
        ot(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[29]
        ),
        ot(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[30]
        )
      ], l = !0);
    },
    p(u, [a]) {
      e = u, a & /*$tweened_x*/
      8192 && v(
        t,
        "x",
        /*$tweened_x*/
        e[13]
      ), a & /*$tweened_y*/
      16384 && v(
        t,
        "y",
        /*$tweened_y*/
        e[14]
      ), a & /*$tweened_width*/
      32768 && v(
        t,
        "width",
        /*$tweened_width*/
        e[15]
      ), a & /*$tweened_height*/
      65536 && v(
        t,
        "height",
        /*$tweened_height*/
        e[16]
      ), a & /*color*/
      32 && v(
        t,
        "fill",
        /*color*/
        e[5]
      ), a & /*hovered_group, hover_legend, current_categories, group*/
      1796 && n !== (n = /*hovered_group*/
      e[2] || /*hover_legend*/
      e[9] && /*current_categories*/
      e[10].includes(
        /*hover_legend*/
        e[9]
      ) ? (
        /*group*/
        e[8] === /*hovered_group*/
        e[2] || /*group*/
        e[8] === /*hover_legend*/
        e[9] ? 1 : 0.2
      ) : 1) && v(t, "opacity", n);
    },
    i(u) {
      i || it(() => {
        i = Fi(
          t,
          Zt,
          /*mode*/
          e[11] === "grouped" ? { x: -200, duration: 1e3, delay: 50 } : { y: 200, duration: 1e3, delay: 50 }
        ), i.start();
      });
    },
    o: Pe,
    d(u) {
      u && Z(t), l = !1, Ht(f);
    }
  };
}
function _v(e, t, n) {
  let i, l, f, u, { x: a } = t, { y: _ } = t, { width: c } = t, { height: d } = t, { color: h } = t, { tweenOptions: g } = t, { y_value: w } = t, { x_value: p } = t, { group: S } = t, { hover_legend: x } = t, { current_categories: M } = t, { mode: z } = t, { x_cat: C } = t, { xScale: P } = t, { hovered_y: O } = t, { hovered_x: E } = t, { hovered_group: B } = t, { hovered_color: D } = t, { hovered_x_cat: te } = t, { tooltip_axis_x: W } = t, K = Ut(a, g == null ? void 0 : g.x);
  wt(e, K, (A) => n(13, i = A));
  let se = Ut(_, g == null ? void 0 : g.y);
  wt(e, se, (A) => n(14, l = A));
  let ce = Ut(c, g == null ? void 0 : g.width);
  wt(e, ce, (A) => n(15, f = A));
  let fe = Ut(d, g == null ? void 0 : g.height);
  wt(e, fe, (A) => n(16, u = A));
  function re(A, R, de, he, pt, Kt, Je, Ue) {
    n(0, O = R), n(1, E = Ue === "grouped" ? de + he / 2 : P(pt) + he / 2), n(2, B = Kt), n(3, D = Je), n(22, te = pt), n(23, W = P(pt) + he / 2);
  }
  const J = (A) => re(A, w, p, c, C, S, h, z), H = () => {
    n(0, O = null), n(1, E = null), n(2, B = null), n(3, D = null);
  };
  return e.$$set = (A) => {
    "x" in A && n(24, a = A.x), "y" in A && n(25, _ = A.y), "width" in A && n(4, c = A.width), "height" in A && n(26, d = A.height), "color" in A && n(5, h = A.color), "tweenOptions" in A && n(27, g = A.tweenOptions), "y_value" in A && n(6, w = A.y_value), "x_value" in A && n(7, p = A.x_value), "group" in A && n(8, S = A.group), "hover_legend" in A && n(9, x = A.hover_legend), "current_categories" in A && n(10, M = A.current_categories), "mode" in A && n(11, z = A.mode), "x_cat" in A && n(12, C = A.x_cat), "xScale" in A && n(28, P = A.xScale), "hovered_y" in A && n(0, O = A.hovered_y), "hovered_x" in A && n(1, E = A.hovered_x), "hovered_group" in A && n(2, B = A.hovered_group), "hovered_color" in A && n(3, D = A.hovered_color), "hovered_x_cat" in A && n(22, te = A.hovered_x_cat), "tooltip_axis_x" in A && n(23, W = A.tooltip_axis_x);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions*/
    150994944 && K.set(a, g == null ? void 0 : g.x), e.$$.dirty & /*y, tweenOptions*/
    167772160 && se.set(_, g == null ? void 0 : g.y), e.$$.dirty & /*width, tweenOptions*/
    134217744 && ce.set(c, g == null ? void 0 : g.width), e.$$.dirty & /*height, tweenOptions*/
    201326592 && fe.set(d, g == null ? void 0 : g.height);
  }, [
    O,
    E,
    B,
    D,
    c,
    h,
    w,
    p,
    S,
    x,
    M,
    z,
    C,
    i,
    l,
    f,
    u,
    K,
    se,
    ce,
    fe,
    re,
    te,
    W,
    a,
    _,
    d,
    g,
    P,
    J,
    H
  ];
}
class hv extends ct {
  constructor(t) {
    super(), ht(this, t, _v, sv, ut, {
      x: 24,
      y: 25,
      width: 4,
      height: 26,
      color: 5,
      tweenOptions: 27,
      y_value: 6,
      x_value: 7,
      group: 8,
      hover_legend: 9,
      current_categories: 10,
      mode: 11,
      x_cat: 12,
      xScale: 28,
      hovered_y: 0,
      hovered_x: 1,
      hovered_group: 2,
      hovered_color: 3,
      hovered_x_cat: 22,
      tooltip_axis_x: 23
    });
  }
}
function cv(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = ze("text"), n = Ae(
        /*text*/
        e[0]
      ), v(t, "transform", i = `rotate(${-/*rotation*/
      e[2]} ${/*$tweened_x*/
      e[8]} ${/*$tweened_y*/
      e[9]})`), v(t, "font-size", l = /*font_size_xticks*/
      e[1] + "px"), v(
        t,
        "x",
        /*$tweened_x*/
        e[8]
      ), v(
        t,
        "y",
        /*$tweened_y*/
        e[9]
      ), v(
        t,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[4]
      ), v(
        t,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[5]
      ), v(
        t,
        "fill",
        /*colour_text*/
        e[3]
      ), v(
        t,
        "dy",
        /*dy*/
        e[7]
      ), v(
        t,
        "dx",
        /*dx*/
        e[6]
      );
    },
    m(u, a) {
      j(u, t, a), q(t, n);
    },
    p(u, [a]) {
      a & /*text*/
      1 && Oe(
        n,
        /*text*/
        u[0]
      ), a & /*rotation, $tweened_x, $tweened_y*/
      772 && i !== (i = `rotate(${-/*rotation*/
      u[2]} ${/*$tweened_x*/
      u[8]} ${/*$tweened_y*/
      u[9]})`) && v(t, "transform", i), a & /*font_size_xticks*/
      2 && l !== (l = /*font_size_xticks*/
      u[1] + "px") && v(t, "font-size", l), a & /*$tweened_x*/
      256 && v(
        t,
        "x",
        /*$tweened_x*/
        u[8]
      ), a & /*$tweened_y*/
      512 && v(
        t,
        "y",
        /*$tweened_y*/
        u[9]
      ), a & /*text_anchor_x_axis*/
      16 && v(
        t,
        "text-anchor",
        /*text_anchor_x_axis*/
        u[4]
      ), a & /*dominant_baseline_x_axis*/
      32 && v(
        t,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        u[5]
      ), a & /*colour_text*/
      8 && v(
        t,
        "fill",
        /*colour_text*/
        u[3]
      ), a & /*dy*/
      128 && v(
        t,
        "dy",
        /*dy*/
        u[7]
      ), a & /*dx*/
      64 && v(
        t,
        "dx",
        /*dx*/
        u[6]
      );
    },
    i(u) {
      u && (f || it(() => {
        f = Fi(t, pn, { duration: 1e3, easing: zl }), f.start();
      }));
    },
    o: Pe,
    d(u) {
      u && Z(t);
    }
  };
}
function gv(e, t, n) {
  let i, l, { x: f } = t, { y: u } = t, { tweenOptions: a } = t, { text: _ } = t, { font_size_xticks: c } = t, { rotation: d } = t, { colour_text: h } = t, { text_anchor_x_axis: g } = t, { dominant_baseline_x_axis: w } = t, { dx: p } = t, { dy: S } = t, x = Ut(u, a == null ? void 0 : a.y);
  wt(e, x, (z) => n(9, l = z));
  let M = Ut(f, a == null ? void 0 : a.x);
  return wt(e, M, (z) => n(8, i = z)), e.$$set = (z) => {
    "x" in z && n(12, f = z.x), "y" in z && n(13, u = z.y), "tweenOptions" in z && n(14, a = z.tweenOptions), "text" in z && n(0, _ = z.text), "font_size_xticks" in z && n(1, c = z.font_size_xticks), "rotation" in z && n(2, d = z.rotation), "colour_text" in z && n(3, h = z.colour_text), "text_anchor_x_axis" in z && n(4, g = z.text_anchor_x_axis), "dominant_baseline_x_axis" in z && n(5, w = z.dominant_baseline_x_axis), "dx" in z && n(6, p = z.dx), "dy" in z && n(7, S = z.dy);
  }, e.$$.update = () => {
    e.$$.dirty & /*y, tweenOptions, x*/
    28672 && Ll().then(() => {
      x.set(u, a == null ? void 0 : a.y), M.set(f, a == null ? void 0 : a.x);
    });
  }, [
    _,
    c,
    d,
    h,
    g,
    w,
    p,
    S,
    i,
    l,
    x,
    M,
    f,
    u,
    a
  ];
}
class ya extends ct {
  constructor(t) {
    super(), ht(this, t, gv, cv, ut, {
      x: 12,
      y: 13,
      tweenOptions: 14,
      text: 0,
      font_size_xticks: 1,
      rotation: 2,
      colour_text: 3,
      text_anchor_x_axis: 4,
      dominant_baseline_x_axis: 5,
      dx: 6,
      dy: 7
    });
  }
}
function dv(e) {
  let t, n, i = (
    /*tooltip_df*/
    e[3].x + ""
  ), l, f, u, a, _, c, d, h = (
    /*tooltip_df*/
    e[3].group + ""
  ), g, w, p, S, x = (
    /*tooltip_df*/
    e[3].y + ""
  ), M, z, C, P, O, E, B;
  return {
    c() {
      t = _e("div"), n = _e("div"), l = Ae(i), f = ve(), u = _e("div"), a = _e("div"), _ = _e("span"), c = ve(), d = _e("div"), g = Ae(h), w = Ae(":"), p = ve(), S = _e("div"), M = Ae(x), z = ve(), C = _e("div"), P = ve(), O = _e("div"), y(
        _,
        "background",
        /*tooltip_df*/
        e[3].color
      ), y(_, "width", "9px"), y(_, "height", "9px"), y(_, "border-radius", "50%"), y(_, "margin", "3px"), y(_, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(a, "display", "flex"), y(S, "font-weight", "bold"), y(u, "padding", "5px"), y(u, "font-size", "14px"), y(u, "display", "flex"), y(u, "flex-direction", "row"), y(u, "justify-content", "space-between"), y(u, "gap", "10px"), y(C, "position", "absolute"), y(C, "bottom", "-5px"), y(C, "left", "50%"), y(C, "transform", "translateX(-50%)"), y(C, "width", "0"), y(C, "height", "0"), y(C, "border-left", "5px solid transparent"), y(C, "border-right", "5px solid transparent"), y(C, "border-top", "5px solid #ccc"), y(O, "position", "absolute"), y(O, "bottom", "-4px"), y(O, "left", "50%"), y(O, "transform", "translateX(-50%)"), y(O, "width", "0"), y(O, "height", "0"), y(O, "border-left", "4px solid transparent"), y(O, "border-right", "4px solid transparent"), y(O, "border-top", "4px solid #fff"), v(t, "class", "tooltip-bars"), y(t, "transition", "all 500ms"), y(t, "position", "absolute"), y(
        t,
        "top",
        /*yScale*/
        e[0](
          /*hovered_y*/
          e[2]
        ) - 5 + "px"
      ), y(
        t,
        "left",
        /*hovered_x*/
        e[1] + "px"
      ), y(t, "background-color", "rgba(255, 255, 255, 0.5)"), y(t, "border", "1px solid #ccc"), y(t, "border-radius", "4px"), y(t, "padding", "5px 10px"), y(t, "box-shadow", "0px 2px 4px rgba(0,0,0,0.18)"), y(t, "transform", "translate(-50%, -100%)"), y(t, "white-space", "nowrap");
    },
    m(D, te) {
      j(D, t, te), q(t, n), q(n, l), q(t, f), q(t, u), q(u, a), q(a, _), q(u, c), q(u, d), q(d, g), q(d, w), q(u, p), q(u, S), q(S, M), q(t, z), q(t, C), q(t, P), q(t, O), B = !0;
    },
    p(D, [te]) {
      (!B || te & /*tooltip_df*/
      8) && i !== (i = /*tooltip_df*/
      D[3].x + "") && Oe(l, i), (!B || te & /*tooltip_df*/
      8) && y(
        _,
        "background",
        /*tooltip_df*/
        D[3].color
      ), (!B || te & /*tooltip_df*/
      8) && h !== (h = /*tooltip_df*/
      D[3].group + "") && Oe(g, h), (!B || te & /*tooltip_df*/
      8) && x !== (x = /*tooltip_df*/
      D[3].y + "") && Oe(M, x), (!B || te & /*yScale, hovered_y*/
      5) && y(
        t,
        "top",
        /*yScale*/
        D[0](
          /*hovered_y*/
          D[2]
        ) - 5 + "px"
      ), (!B || te & /*hovered_x*/
      2) && y(
        t,
        "left",
        /*hovered_x*/
        D[1] + "px"
      );
    },
    i(D) {
      B || (it(() => {
        B && (E || (E = Pt(t, Zt, { duration: 1e3 }, !0)), E.run(1));
      }), B = !0);
    },
    o(D) {
      E || (E = Pt(t, Zt, { duration: 1e3 }, !1)), E.run(0), B = !1;
    },
    d(D) {
      D && Z(t), D && E && E.end();
    }
  };
}
function mv(e, t, n) {
  let i, { yScale: l } = t, { hovered_x: f } = t, { hovered_y: u } = t, { hovered_group: a } = t, { hovered_color: _ } = t, { hovered_x_cat: c } = t;
  return e.$$set = (d) => {
    "yScale" in d && n(0, l = d.yScale), "hovered_x" in d && n(1, f = d.hovered_x), "hovered_y" in d && n(2, u = d.hovered_y), "hovered_group" in d && n(4, a = d.hovered_group), "hovered_color" in d && n(5, _ = d.hovered_color), "hovered_x_cat" in d && n(6, c = d.hovered_x_cat);
  }, e.$$.update = () => {
    e.$$.dirty & /*hovered_x_cat, hovered_color, hovered_group, hovered_y*/
    116 && n(3, i = {
      x: c,
      color: _,
      group: a,
      y: u
    }), e.$$.dirty & /*tooltip_df*/
    8 && console.log(i);
  }, [
    l,
    f,
    u,
    i,
    a,
    _,
    c
  ];
}
class yv extends ct {
  constructor(t) {
    super(), ht(this, t, mv, dv, ut, {
      yScale: 0,
      hovered_x: 1,
      hovered_y: 2,
      hovered_group: 4,
      hovered_color: 5,
      hovered_x_cat: 6
    });
  }
}
function O1(e, t, n) {
  const i = e.slice();
  return i[14] = t[n], i;
}
function D1(e) {
  let t, n, i = (
    /*tooltip_data*/
    e[0][0].x + ""
  ), l, f, u, a, _, c, d = ke(
    /*tooltip_data*/
    e[0]
  ), h = [];
  for (let g = 0; g < d.length; g += 1)
    h[g] = N1(O1(e, d, g));
  return {
    c() {
      t = _e("div"), n = _e("h6"), l = Ae(i), f = ve(), u = _e("div");
      for (let g = 0; g < h.length; g += 1)
        h[g].c();
      y(n, "background-color", "black"), y(n, "color", "white"), y(n, "margin", "1px"), y(n, "padding", "2%"), y(n, "font-size", "12px"), y(n, "font-weight", "2px"), y(n, "text-align", "center"), v(t, "class", "tooltip"), y(t, "position", "absolute"), y(
        t,
        "top",
        /*yPosition*/
        e[5] + "px"
      ), y(
        t,
        "left",
        /*x*/
        e[1] + "px"
      ), y(t, "border-radius", "3px"), y(t, "pointer-events", "none"), y(t, "transition", "top 300ms ease, left 300ms ease"), y(t, "margin-top", "15px"), y(t, "background-color", "rgba(255,255,255, 0.8)"), y(t, "z-index", "1000"), it(() => (
        /*div1_elementresize_handler*/
        e[13].call(t)
      ));
    },
    m(g, w) {
      j(g, t, w), q(t, n), q(n, l), q(t, f), q(t, u);
      for (let p = 0; p < h.length; p += 1)
        h[p] && h[p].m(u, null);
      a = ir(
        t,
        /*div1_elementresize_handler*/
        e[13].bind(t)
      ), c = !0;
    },
    p(g, w) {
      if ((!c || w & /*tooltip_data*/
      1) && i !== (i = /*tooltip_data*/
      g[0][0].x + "") && Oe(l, i), w & /*format_number, tooltip_data*/
      17) {
        d = ke(
          /*tooltip_data*/
          g[0]
        );
        let p;
        for (p = 0; p < d.length; p += 1) {
          const S = O1(g, d, p);
          h[p] ? h[p].p(S, w) : (h[p] = N1(S), h[p].c(), h[p].m(u, null));
        }
        for (; p < h.length; p += 1)
          h[p].d(1);
        h.length = d.length;
      }
      (!c || w & /*yPosition*/
      32) && y(
        t,
        "top",
        /*yPosition*/
        g[5] + "px"
      ), (!c || w & /*x*/
      2) && y(
        t,
        "left",
        /*x*/
        g[1] + "px"
      );
    },
    i(g) {
      c || (g && it(() => {
        c && (_ || (_ = Pt(t, Zt, {}, !0)), _.run(1));
      }), c = !0);
    },
    o(g) {
      g && (_ || (_ = Pt(t, Zt, {}, !1)), _.run(0)), c = !1;
    },
    d(g) {
      g && Z(t), xn(h, g), a(), g && _ && _.end();
    }
  };
}
function N1(e) {
  let t, n, i, l, f, u, a = (
    /*bars*/
    e[14].group + ""
  ), _, c, d, h = (
    /*format_number*/
    e[4](
      /*bars*/
      e[14].y_og
    ) + ""
  ), g, w;
  return {
    c() {
      t = _e("div"), n = _e("div"), i = _e("div"), l = _e("span"), f = ve(), u = _e("span"), _ = Ae(a), c = ve(), d = _e("div"), g = Ae(h), w = ve(), y(
        l,
        "background",
        /*bars*/
        e[14].colors
      ), y(l, "width", "9px"), y(l, "height", "9px"), y(l, "border-radius", "50%"), y(l, "margin", "3px"), y(l, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(i, "width", "18px"), y(i, "display", "flex"), y(i, "align-items", "center"), y(i, "justify-content", "center"), y(n, "display", "flex"), y(n, "align-items", "center"), v(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(p, S) {
      j(p, t, S), q(t, n), q(n, i), q(i, l), q(n, f), q(n, u), q(u, _), q(t, c), q(t, d), q(d, g), q(t, w);
    },
    p(p, S) {
      S & /*tooltip_data*/
      1 && y(
        l,
        "background",
        /*bars*/
        p[14].colors
      ), S & /*tooltip_data*/
      1 && a !== (a = /*bars*/
      p[14].group + "") && Oe(_, a), S & /*format_number, tooltip_data*/
      17 && h !== (h = /*format_number*/
      p[4](
        /*bars*/
        p[14].y_og
      ) + "") && Oe(g, h);
    },
    d(p) {
      p && Z(t);
    }
  };
}
function bv(e) {
  let t, n = (
    /*tooltip_data*/
    e[0] && D1(e)
  );
  return {
    c() {
      n && n.c(), t = Le();
    },
    m(i, l) {
      n && n.m(i, l), j(i, t, l);
    },
    p(i, [l]) {
      /*tooltip_data*/
      i[0] ? n ? (n.p(i, l), l & /*tooltip_data*/
      1 && ee(n, 1)) : (n = D1(i), n.c(), ee(n, 1), n.m(t.parentNode, t)) : n && (We(), ue(n, 1, 1, () => {
        n = null;
      }), Be());
    },
    i(i) {
      ee(n);
    },
    o(i) {
      ue(n);
    },
    d(i) {
      i && Z(t), n && n.d(i);
    }
  };
}
const U1 = 0;
function wv(e, t, n) {
  let i, l, { x: f } = t, { y: u } = t, { format_tooltip: a } = t, { height: _ } = t, { width: c } = t, { margin: d } = t, { buffer: h } = t, { tooltip_data: g } = t, w, p, S;
  function x() {
    w = this.clientWidth, p = this.clientHeight, n(3, w), n(2, p);
  }
  return e.$$set = (M) => {
    "x" in M && n(1, f = M.x), "y" in M && n(6, u = M.y), "format_tooltip" in M && n(7, a = M.format_tooltip), "height" in M && n(8, _ = M.height), "width" in M && n(9, c = M.width), "margin" in M && n(10, d = M.margin), "buffer" in M && n(11, h = M.buffer), "tooltip_data" in M && n(0, g = M.tooltip_data);
  }, e.$$.update = () => {
    e.$$.dirty & /*tooltip_data, maxYValue*/
    4097 && (n(12, S = Math.max(...g.map((M) => M.y))), n(0, g = g.map((M) => ({ ...M })).sort((M, z) => z.y - M.y || z.y - S))), e.$$.dirty & /*y, tooltipHeight, height, margin, buffer*/
    3396 && n(5, i = u + p > _ - d - h ? u - p - U1 - d - h : u + U1), e.$$.dirty & /*format_tooltip*/
    128 && n(4, l = hn(a)), e.$$.dirty & /*tooltip_data*/
    1 && console.log("tooltip_data", g);
  }, [
    g,
    f,
    p,
    w,
    l,
    i,
    u,
    a,
    _,
    c,
    d,
    h,
    S,
    x
  ];
}
class pv extends ct {
  constructor(t) {
    super(), ht(this, t, wv, bv, ut, {
      x: 1,
      y: 6,
      format_tooltip: 7,
      height: 8,
      width: 9,
      margin: 10,
      buffer: 11,
      tooltip_data: 0
    });
  }
}
const { Map: qu } = g6;
function P1(e, t, n) {
  const i = e.slice();
  return i[27] = t[n], i[103] = n, i;
}
function F1(e, t, n) {
  const i = e.slice();
  return i[27] = t[n], i[103] = n, i;
}
function W1(e, t, n) {
  const i = e.slice();
  return i[105] = t[n], i;
}
function B1(e, t, n) {
  const i = e.slice();
  return i[108] = t[n].group, i[109] = t[n].colors, i;
}
function H1(e) {
  let t, n;
  return {
    c() {
      t = _e("div"), n = Ae(
        /*header*/
        e[2]
      ), v(t, "class", "header"), y(
        t,
        "text-align",
        /*title_align*/
        e[3]
      ), y(
        t,
        "color",
        /*title_color*/
        e[4]
      ), y(
        t,
        "font-size",
        /*title_font_size*/
        e[5] + "px"
      ), y(
        t,
        "font-weight",
        /*title_font_weight*/
        e[6]
      ), y(t, "padding-bottom", "10px"), y(
        t,
        "margin-left",
        /*label_height*/
        e[28] + tr + "px"
      );
    },
    m(i, l) {
      j(i, t, l), q(t, n);
    },
    p(i, l) {
      l[0] & /*header*/
      4 && Oe(
        n,
        /*header*/
        i[2]
      ), l[0] & /*title_align*/
      8 && y(
        t,
        "text-align",
        /*title_align*/
        i[3]
      ), l[0] & /*title_color*/
      16 && y(
        t,
        "color",
        /*title_color*/
        i[4]
      ), l[0] & /*title_font_size*/
      32 && y(
        t,
        "font-size",
        /*title_font_size*/
        i[5] + "px"
      ), l[0] & /*title_font_weight*/
      64 && y(
        t,
        "font-weight",
        /*title_font_weight*/
        i[6]
      ), l[0] & /*label_height*/
      268435456 && y(
        t,
        "margin-left",
        /*label_height*/
        i[28] + tr + "px"
      );
    },
    d(i) {
      i && Z(t);
    }
  };
}
function Y1(e) {
  let t, n = ke(
    /*legend_cats*/
    e[56]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = X1(B1(e, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      t = Le();
    },
    m(l, f) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, f);
      j(l, t, f);
    },
    p(l, f) {
      if (f[1] & /*hover_legend, legend_cats, current_categories, categories*/
      33558568) {
        n = ke(
          /*legend_cats*/
          l[56]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = B1(l, n, u);
          i[u] ? i[u].p(a, f) : (i[u] = X1(a), i[u].c(), i[u].m(t.parentNode, t));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = n.length;
      }
    },
    d(l) {
      l && Z(t), xn(i, l);
    }
  };
}
function X1(e) {
  let t, n, i, l, f, u, a = (
    /*group*/
    e[108].replace(/\.\d+$/, "") + ""
  ), _, c, d, h, g;
  function w() {
    return (
      /*mouseover_handler*/
      e[75](
        /*group*/
        e[108]
      )
    );
  }
  function p() {
    return (
      /*click_handler*/
      e[76](
        /*group*/
        e[108]
      )
    );
  }
  return {
    c() {
      t = _e("p"), n = ze("svg"), i = ze("path"), u = ve(), _ = Ae(a), c = ve(), v(i, "d", "M 0 5.28 L 6 5.28 L 6 12 L 0 12 Z M 9 0 L 15 0 L 15 12 L 9 12 Z M 18 7.2 L 24 7.2 L 24 12 L 18 12 Z"), v(i, "fill", l = /*colors*/
      e[109]), v(i, "stroke", f = /*colors*/
      e[109]), v(i, "stroke-width", "1"), v(n, "width", "24"), v(n, "height", "12"), v(n, "viewBox", "0 0 24 12"), y(n, "display", "inline-block"), y(n, "vertical-align", "middle"), v(t, "style", d = /*hover_legend*/
      e[43] && /*hover_legend*/
      e[43] !== /*group*/
      e[108] && /*current_categories*/
      e[36].includes(
        /*hover_legend*/
        e[43]
      ) || !/*categories*/
      e[34][
        /*group*/
        e[108]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;");
    },
    m(S, x) {
      j(S, t, x), q(t, n), q(n, i), q(t, u), q(t, _), q(t, c), h || (g = [
        ot(t, "mouseover", w),
        ot(t, "click", p)
      ], h = !0);
    },
    p(S, x) {
      e = S, x[1] & /*legend_cats*/
      33554432 && l !== (l = /*colors*/
      e[109]) && v(i, "fill", l), x[1] & /*legend_cats*/
      33554432 && f !== (f = /*colors*/
      e[109]) && v(i, "stroke", f), x[1] & /*legend_cats*/
      33554432 && a !== (a = /*group*/
      e[108].replace(/\.\d+$/, "") + "") && Oe(_, a), x[1] & /*hover_legend, legend_cats, current_categories, categories*/
      33558568 && d !== (d = /*hover_legend*/
      e[43] && /*hover_legend*/
      e[43] !== /*group*/
      e[108] && /*current_categories*/
      e[36].includes(
        /*hover_legend*/
        e[43]
      ) || !/*categories*/
      e[34][
        /*group*/
        e[108]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;") && v(t, "style", d);
    },
    d(S) {
      S && Z(t), h = !1, Ht(g);
    }
  };
}
function q1(e, t) {
  let n, i, l;
  return i = new ma({
    props: {
      y1: (
        /*yScale*/
        t[33](
          /*tickValue*/
          t[105]
        )
      ),
      width: (
        /*width*/
        t[0]
      ),
      space_between_ticks_and_gridline: Gu,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[37]
      ),
      height: (
        /*height*/
        t[7]
      ),
      line_generator_space: _0,
      ticklabel: (
        /*format_number*/
        t[40](
          /*tickValue*/
          t[105]
        )
      ),
      font_size_yticks: (
        /*font_size_yticks*/
        t[18]
      ),
      tweenOptions: {
        y1: {
          easing: rt,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Le(), Ke(i.$$.fragment), this.first = n;
    },
    m(f, u) {
      j(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[0] & /*yaxis_ticks*/
      65536 | u[1] & /*yScale*/
      4 && (a.y1 = /*yScale*/
      t[33](
        /*tickValue*/
        t[105]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[1] & /*y_lines_spacing*/
      64 && (a.y_lines_spacing = /*y_lines_spacing*/
      t[37]), u[0] & /*height*/
      128 && (a.height = /*height*/
      t[7]), u[0] & /*yaxis_ticks*/
      65536 | u[1] & /*format_number, yScale*/
      516 && (a.ticklabel = /*format_number*/
      t[40](
        /*tickValue*/
        t[105]
      )), u[0] & /*font_size_yticks*/
      262144 && (a.font_size_yticks = /*font_size_yticks*/
      t[18]), i.$set(a);
    },
    i(f) {
      l || (ee(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function G1(e) {
  let t, n = (
    /*closestLabelX*/
    e[54] !== 0 && /*nextLabelX*/
    e[53] !== 0 && Z1(e)
  );
  return {
    c() {
      n && n.c(), t = Le();
    },
    m(i, l) {
      n && n.m(i, l), j(i, t, l);
    },
    p(i, l) {
      /*closestLabelX*/
      i[54] !== 0 && /*nextLabelX*/
      i[53] !== 0 ? n ? n.p(i, l) : (n = Z1(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && Z(t), n && n.d(i);
    }
  };
}
function Z1(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = ze("rect"), v(t, "style", "fill: rgba(0, 0, 0, 0.1); /* Adjust color and opacity as needed */ position: absolute; top: 0; z-index: -1; transition: 0.2s ease;"), v(t, "x", n = /*closestLabelX*/
      e[54] - /*labelPositions*/
      (e[52][1] - /*labelPositions*/
      e[52][0]) / 2), v(t, "width", i = /*labelPositions*/
      e[52][1] - /*labelPositions*/
      e[52][0]), v(t, "y", l = /*yScale*/
      e[33](
        /*yScale*/
        e[33].ticks(
          /*yaxis_ticks*/
          e[16]
        )[
          /*yScale*/
          e[33].ticks(
            /*yaxis_ticks*/
            e[16]
          ).length - 1
        ]
      )), v(t, "height", f = /*yScale*/
      e[33](
        /*yScale*/
        e[33].ticks(
          /*yaxis_ticks*/
          e[16]
        )[0]
      ) - /*yScale*/
      e[33](
        /*yScale*/
        e[33].ticks(
          /*yaxis_ticks*/
          e[16]
        )[
          /*yScale*/
          e[33].ticks(
            /*yaxis_ticks*/
            e[16]
          ).length - 1
        ]
      ));
    },
    m(u, a) {
      j(u, t, a);
    },
    p(u, a) {
      a[1] & /*closestLabelX, labelPositions*/
      10485760 && n !== (n = /*closestLabelX*/
      u[54] - /*labelPositions*/
      (u[52][1] - /*labelPositions*/
      u[52][0]) / 2) && v(t, "x", n), a[1] & /*labelPositions*/
      2097152 && i !== (i = /*labelPositions*/
      u[52][1] - /*labelPositions*/
      u[52][0]) && v(t, "width", i), a[0] & /*yaxis_ticks*/
      65536 | a[1] & /*yScale*/
      4 && l !== (l = /*yScale*/
      u[33](
        /*yScale*/
        u[33].ticks(
          /*yaxis_ticks*/
          u[16]
        )[
          /*yScale*/
          u[33].ticks(
            /*yaxis_ticks*/
            u[16]
          ).length - 1
        ]
      )) && v(t, "y", l), a[0] & /*yaxis_ticks*/
      65536 | a[1] & /*yScale*/
      4 && f !== (f = /*yScale*/
      u[33](
        /*yScale*/
        u[33].ticks(
          /*yaxis_ticks*/
          u[16]
        )[0]
      ) - /*yScale*/
      u[33](
        /*yScale*/
        u[33].ticks(
          /*yaxis_ticks*/
          u[16]
        )[
          /*yScale*/
          u[33].ticks(
            /*yaxis_ticks*/
            u[16]
          ).length - 1
        ]
      )) && v(t, "height", f);
    },
    d(u) {
      u && Z(t);
    }
  };
}
function j1(e, t) {
  let n, i, l, f, u, a, _, c, d;
  function h(z) {
    t[78](z);
  }
  function g(z) {
    t[79](z);
  }
  function w(z) {
    t[80](z);
  }
  function p(z) {
    t[81](z);
  }
  function S(z) {
    t[82](z);
  }
  function x(z) {
    t[83](z);
  }
  let M = {
    y_value: (
      /*data*/
      t[27].y
    ),
    x_value: (
      /*xScale*/
      t[31](
        /*data*/
        t[27].x
      ) + /*xSubgroup*/
      t[32](
        /*data*/
        t[27].group
      )
    ),
    x_cat: (
      /*data*/
      t[27].x
    ),
    group: (
      /*data*/
      t[27].group
    ),
    x: (
      /*mode*/
      t[26] === "grouped" ? (
        /*xScale*/
        t[31](
          /*data*/
          t[27].x
        ) + /*xSubgroup*/
        t[32](
          /*data*/
          t[27].group
        )
      ) : (
        /*xScale*/
        t[31](
          /*data*/
          t[27].x
        )
      )
    ),
    y: (
      /*yScale*/
      t[33](
        /*data*/
        t[27].y
      )
    ),
    width: (
      /*xSubgroup*/
      t[32].bandwidth()
    ),
    height: (
      /*yScale*/
      t[33](
        /*data*/
        t[27].y_start
      ) - /*yScale*/
      t[33](
        /*data*/
        t[27].y
      )
    ),
    color: (
      /*data*/
      t[27].colors
    ),
    hover_legend: (
      /*hover_legend*/
      t[43]
    ),
    current_categories: (
      /*current_categories*/
      t[36]
    ),
    mode: (
      /*mode*/
      t[26]
    ),
    xScale: (
      /*xScale*/
      t[31]
    ),
    tweenOptions: {
      x: {
        easing: rt,
        duration: 1e3
      },
      width: {
        easing: rt,
        duration: 1e3
      },
      height: {
        easing: rt,
        duration: 1e3
      },
      y: {
        easing: rt,
        duration: 1e3
      }
    }
  };
  return (
    /*hovered_y*/
    t[44] !== void 0 && (M.hovered_y = /*hovered_y*/
    t[44]), /*hovered_x*/
    t[45] !== void 0 && (M.hovered_x = /*hovered_x*/
    t[45]), /*hovered_group*/
    t[46] !== void 0 && (M.hovered_group = /*hovered_group*/
    t[46]), /*hovered_color*/
    t[47] !== void 0 && (M.hovered_color = /*hovered_color*/
    t[47]), /*hovered_x_cat*/
    t[38] !== void 0 && (M.hovered_x_cat = /*hovered_x_cat*/
    t[38]), /*tooltip_axis_x*/
    t[48] !== void 0 && (M.tooltip_axis_x = /*tooltip_axis_x*/
    t[48]), i = new hv({ props: M }), _t.push(() => Ot(i, "hovered_y", h)), _t.push(() => Ot(i, "hovered_x", g)), _t.push(() => Ot(i, "hovered_group", w)), _t.push(() => Ot(i, "hovered_color", p)), _t.push(() => Ot(i, "hovered_x_cat", S)), _t.push(() => Ot(i, "tooltip_axis_x", x)), {
      key: e,
      first: null,
      c() {
        n = Le(), Ke(i.$$.fragment), this.first = n;
      },
      m(z, C) {
        j(z, n, C), Ze(i, z, C), d = !0;
      },
      p(z, C) {
        t = z;
        const P = {};
        C[1] & /*filtered_data*/
        16 && (P.y_value = /*data*/
        t[27].y), C[1] & /*xScale, filtered_data, xSubgroup*/
        19 && (P.x_value = /*xScale*/
        t[31](
          /*data*/
          t[27].x
        ) + /*xSubgroup*/
        t[32](
          /*data*/
          t[27].group
        )), C[1] & /*filtered_data*/
        16 && (P.x_cat = /*data*/
        t[27].x), C[1] & /*filtered_data*/
        16 && (P.group = /*data*/
        t[27].group), C[0] & /*mode*/
        67108864 | C[1] & /*xScale, filtered_data, xSubgroup*/
        19 && (P.x = /*mode*/
        t[26] === "grouped" ? (
          /*xScale*/
          t[31](
            /*data*/
            t[27].x
          ) + /*xSubgroup*/
          t[32](
            /*data*/
            t[27].group
          )
        ) : (
          /*xScale*/
          t[31](
            /*data*/
            t[27].x
          )
        )), C[1] & /*yScale, filtered_data*/
        20 && (P.y = /*yScale*/
        t[33](
          /*data*/
          t[27].y
        )), C[1] & /*xSubgroup*/
        2 && (P.width = /*xSubgroup*/
        t[32].bandwidth()), C[1] & /*yScale, filtered_data*/
        20 && (P.height = /*yScale*/
        t[33](
          /*data*/
          t[27].y_start
        ) - /*yScale*/
        t[33](
          /*data*/
          t[27].y
        )), C[1] & /*filtered_data*/
        16 && (P.color = /*data*/
        t[27].colors), C[1] & /*hover_legend*/
        4096 && (P.hover_legend = /*hover_legend*/
        t[43]), C[1] & /*current_categories*/
        32 && (P.current_categories = /*current_categories*/
        t[36]), C[0] & /*mode*/
        67108864 && (P.mode = /*mode*/
        t[26]), C[1] & /*xScale*/
        1 && (P.xScale = /*xScale*/
        t[31]), !l && C[1] & /*hovered_y*/
        8192 && (l = !0, P.hovered_y = /*hovered_y*/
        t[44], It(() => l = !1)), !f && C[1] & /*hovered_x*/
        16384 && (f = !0, P.hovered_x = /*hovered_x*/
        t[45], It(() => f = !1)), !u && C[1] & /*hovered_group*/
        32768 && (u = !0, P.hovered_group = /*hovered_group*/
        t[46], It(() => u = !1)), !a && C[1] & /*hovered_color*/
        65536 && (a = !0, P.hovered_color = /*hovered_color*/
        t[47], It(() => a = !1)), !_ && C[1] & /*hovered_x_cat*/
        128 && (_ = !0, P.hovered_x_cat = /*hovered_x_cat*/
        t[38], It(() => _ = !1)), !c && C[1] & /*tooltip_axis_x*/
        131072 && (c = !0, P.tooltip_axis_x = /*tooltip_axis_x*/
        t[48], It(() => c = !1)), i.$set(P);
      },
      i(z) {
        d || (ee(i.$$.fragment, z), d = !0);
      },
      o(z) {
        ue(i.$$.fragment, z), d = !1;
      },
      d(z) {
        z && Z(n), je(i, z);
      }
    }
  );
}
function K1(e) {
  let t = [], n = new qu(), i, l, f = ke(
    /*filtered_data*/
    e[35]
  );
  const u = (a) => (
    /*data*/
    a[27].id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = P1(e, f, a), c = u(_);
    n.set(c, t[a] = Q1(c, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      i = Le();
    },
    m(a, _) {
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(a, _);
      j(a, i, _), l = !0;
    },
    p(a, _) {
      _[0] & /*mode, position, colour_text, show_bar_labels, font_size_xticks, rotation_xaxis, text_anchor_x_axis, dominant_baseline_x_axis, dx, dy, names*/
      1199601408 | _[1] & /*xScale, filtered_data, xSubgroup, yScale, x_ticks_spacing, current_categories, iteration*/
      16777527 && (f = ke(
        /*filtered_data*/
        a[35]
      ), We(), t = kn(t, _, u, 1, a, f, n, i.parentNode, Kn, Q1, i, P1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          ee(t[_]);
        l = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ue(t[_]);
      l = !1;
    },
    d(a) {
      a && Z(i);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function vv(e) {
  let t, n;
  return t = new ya({
    props: {
      tweenOptions: {
        y: {
          easing: rt,
          duration: 1e3
        },
        x: {
          easing: rt,
          duration: 1e3
        }
      },
      x: (
        /*mode*/
        e[26] === "grouped" ? (
          /*xScale*/
          e[31](
            /*data*/
            e[27].x
          ) + /*xSubgroup*/
          e[32](
            /*data*/
            e[27].group
          ) + /*xSubgroup*/
          e[32].bandwidth() * /*current_categories*/
          e[36].length / 2 + /*xSubgroup*/
          e[32].bandwidth() * ef * /*iteration*/
          e[39]
        ) : (
          /*xScale*/
          e[31](
            /*data*/
            e[27].x
          ) + /*xSubgroup*/
          e[32].bandwidth() / 2
        )
      ),
      y: (
        /*x_ticks_spacing*/
        e[55]
      ),
      text: (
        /*data*/
        e[27].x
      ),
      font_size_xticks: (
        /*font_size_xticks*/
        e[12]
      ),
      rotation: (
        /*rotation_xaxis*/
        e[10]
      ),
      colour_text: "black",
      text_anchor_x_axis: (
        /*text_anchor_x_axis*/
        e[14]
      ),
      dominant_baseline_x_axis: (
        /*dominant_baseline_x_axis*/
        e[13]
      ),
      dx: (
        /*dx*/
        e[8]
      ),
      dy: (
        /*dy*/
        e[9]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[0] & /*mode*/
      67108864 | l[1] & /*xScale, filtered_data, xSubgroup, current_categories, iteration*/
      307 && (f.x = /*mode*/
      i[26] === "grouped" ? (
        /*xScale*/
        i[31](
          /*data*/
          i[27].x
        ) + /*xSubgroup*/
        i[32](
          /*data*/
          i[27].group
        ) + /*xSubgroup*/
        i[32].bandwidth() * /*current_categories*/
        i[36].length / 2 + /*xSubgroup*/
        i[32].bandwidth() * ef * /*iteration*/
        i[39]
      ) : (
        /*xScale*/
        i[31](
          /*data*/
          i[27].x
        ) + /*xSubgroup*/
        i[32].bandwidth() / 2
      )), l[1] & /*x_ticks_spacing*/
      16777216 && (f.y = /*x_ticks_spacing*/
      i[55]), l[1] & /*filtered_data*/
      16 && (f.text = /*data*/
      i[27].x), l[0] & /*font_size_xticks*/
      4096 && (f.font_size_xticks = /*font_size_xticks*/
      i[12]), l[0] & /*rotation_xaxis*/
      1024 && (f.rotation = /*rotation_xaxis*/
      i[10]), l[0] & /*text_anchor_x_axis*/
      16384 && (f.text_anchor_x_axis = /*text_anchor_x_axis*/
      i[14]), l[0] & /*dominant_baseline_x_axis*/
      8192 && (f.dominant_baseline_x_axis = /*dominant_baseline_x_axis*/
      i[13]), l[0] & /*dx*/
      256 && (f.dx = /*dx*/
      i[8]), l[0] & /*dy*/
      512 && (f.dy = /*dy*/
      i[9]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function kv(e) {
  let t, n;
  return t = new ya({
    props: {
      tweenOptions: {
        y: {
          easing: rt,
          duration: 1e3
        },
        x: {
          easing: rt,
          duration: 1e3
        }
      },
      x: (
        /*xScale*/
        e[31](
          /*data*/
          e[27].x
        ) + /*xSubgroup*/
        e[32](
          /*data*/
          e[27].group
        ) + /*xSubgroup*/
        e[32].bandwidth() / 2
      ),
      y: (
        /*x_ticks_spacing*/
        e[55]
      ),
      text: (
        /*data*/
        e[27].x
      ),
      font_size_xticks: (
        /*font_size_xticks*/
        e[12]
      ),
      rotation: (
        /*rotation_xaxis*/
        e[10]
      ),
      colour_text: "black",
      text_anchor_x_axis: (
        /*text_anchor_x_axis*/
        e[14]
      ),
      dominant_baseline_x_axis: (
        /*dominant_baseline_x_axis*/
        e[13]
      ),
      dx: (
        /*dx*/
        e[8]
      ),
      dy: (
        /*dy*/
        e[9]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*xScale, filtered_data, xSubgroup*/
      19 && (f.x = /*xScale*/
      i[31](
        /*data*/
        i[27].x
      ) + /*xSubgroup*/
      i[32](
        /*data*/
        i[27].group
      ) + /*xSubgroup*/
      i[32].bandwidth() / 2), l[1] & /*x_ticks_spacing*/
      16777216 && (f.y = /*x_ticks_spacing*/
      i[55]), l[1] & /*filtered_data*/
      16 && (f.text = /*data*/
      i[27].x), l[0] & /*font_size_xticks*/
      4096 && (f.font_size_xticks = /*font_size_xticks*/
      i[12]), l[0] & /*rotation_xaxis*/
      1024 && (f.rotation = /*rotation_xaxis*/
      i[10]), l[0] & /*text_anchor_x_axis*/
      16384 && (f.text_anchor_x_axis = /*text_anchor_x_axis*/
      i[14]), l[0] & /*dominant_baseline_x_axis*/
      8192 && (f.dominant_baseline_x_axis = /*dominant_baseline_x_axis*/
      i[13]), l[0] & /*dx*/
      256 && (f.dx = /*dx*/
      i[8]), l[0] & /*dy*/
      512 && (f.dy = /*dy*/
      i[9]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function J1(e) {
  let t, n;
  return t = new ya({
    props: {
      tweenOptions: {
        y: {
          easing: rt,
          duration: 1e3
        },
        x: {
          easing: rt,
          duration: 1e3
        }
      },
      x: (
        /*mode*/
        e[26] === "grouped" ? (
          /*xScale*/
          e[31](
            /*data*/
            e[27].x
          ) + /*xSubgroup*/
          e[32](
            /*data*/
            e[27].group
          ) + /*xSubgroup*/
          e[32].bandwidth() / 2
        ) : (
          /*xScale*/
          e[31](
            /*data*/
            e[27].x
          ) + /*xSubgroup*/
          e[32].bandwidth() / 2
        )
      ),
      y: (
        /*position*/
        e[24] === "middle" ? (
          /*yScale*/
          e[33](
            /*data*/
            e[27].y_start + /*data*/
            (e[27].y - /*data*/
            e[27].y_start) / 2
          )
        ) : (
          /*yScale*/
          e[33](
            /*data*/
            e[27].y
          )
        )
      ),
      text: (
        /*mode*/
        e[26] === "grouped" ? Math.round(
          /*data*/
          e[27].y
        ) : Math.round(
          /*data*/
          e[27].y - /*data*/
          e[27].y_start
        )
      ),
      position: (
        /*position*/
        e[24]
      ),
      colour_text: (
        /*colour_text*/
        e[25]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[0] & /*mode*/
      67108864 | l[1] & /*xScale, filtered_data, xSubgroup*/
      19 && (f.x = /*mode*/
      i[26] === "grouped" ? (
        /*xScale*/
        i[31](
          /*data*/
          i[27].x
        ) + /*xSubgroup*/
        i[32](
          /*data*/
          i[27].group
        ) + /*xSubgroup*/
        i[32].bandwidth() / 2
      ) : (
        /*xScale*/
        i[31](
          /*data*/
          i[27].x
        ) + /*xSubgroup*/
        i[32].bandwidth() / 2
      )), l[0] & /*position*/
      16777216 | l[1] & /*yScale, filtered_data*/
      20 && (f.y = /*position*/
      i[24] === "middle" ? (
        /*yScale*/
        i[33](
          /*data*/
          i[27].y_start + /*data*/
          (i[27].y - /*data*/
          i[27].y_start) / 2
        )
      ) : (
        /*yScale*/
        i[33](
          /*data*/
          i[27].y
        )
      )), l[0] & /*mode*/
      67108864 | l[1] & /*filtered_data*/
      16 && (f.text = /*mode*/
      i[26] === "grouped" ? Math.round(
        /*data*/
        i[27].y
      ) : Math.round(
        /*data*/
        i[27].y - /*data*/
        i[27].y_start
      )), l[0] & /*position*/
      16777216 && (f.position = /*position*/
      i[24]), l[0] & /*colour_text*/
      33554432 && (f.colour_text = /*colour_text*/
      i[25]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function Q1(e, t) {
  let n, i, l, f, u, a;
  const _ = [kv, vv], c = [];
  function d(g, w) {
    return (
      /*names*/
      g[30].length === 1 ? 0 : (
        /*i*/
        g[103] % /*current_categories*/
        g[36].length === 0 ? 1 : -1
      )
    );
  }
  ~(i = d(t)) && (l = c[i] = _[i](t));
  let h = (
    /*show_bar_labels*/
    t[23] && J1(t)
  );
  return {
    key: e,
    first: null,
    c() {
      n = Le(), l && l.c(), f = Le(), h && h.c(), u = Le(), this.first = n;
    },
    m(g, w) {
      j(g, n, w), ~i && c[i].m(g, w), j(g, f, w), h && h.m(g, w), j(g, u, w), a = !0;
    },
    p(g, w) {
      t = g;
      let p = i;
      i = d(t), i === p ? ~i && c[i].p(t, w) : (l && (We(), ue(c[p], 1, 1, () => {
        c[p] = null;
      }), Be()), ~i ? (l = c[i], l ? l.p(t, w) : (l = c[i] = _[i](t), l.c()), ee(l, 1), l.m(f.parentNode, f)) : l = null), /*show_bar_labels*/
      t[23] ? h ? (h.p(t, w), w[0] & /*show_bar_labels*/
      8388608 && ee(h, 1)) : (h = J1(t), h.c(), ee(h, 1), h.m(u.parentNode, u)) : h && (We(), ue(h, 1, 1, () => {
        h = null;
      }), Be());
    },
    i(g) {
      a || (ee(l), ee(h), a = !0);
    },
    o(g) {
      ue(l), ue(h), a = !1;
    },
    d(g) {
      g && (Z(n), Z(f), Z(u)), ~i && c[i].d(g), h && h.d(g);
    }
  };
}
function V1(e) {
  let t, n, i, l, f, u, a, _, c;
  function d(x) {
    e[84](x);
  }
  function h(x) {
    e[85](x);
  }
  function g(x) {
    e[86](x);
  }
  function w(x) {
    e[87](x);
  }
  function p(x) {
    e[88](x);
  }
  let S = {
    height: (
      /*height*/
      e[7]
    ),
    width: (
      /*width*/
      e[0]
    ),
    x_scale: (
      /*xScale*/
      e[31]
    ),
    y_scale: (
      /*yScale*/
      e[33]
    ),
    margin: s0,
    filtered_data: (
      /*filtered_data*/
      e[35]
    ),
    type: (
      /*type*/
      e[22]
    ),
    chart: Mv,
    tooltip: (
      /*tooltip*/
      e[21]
    ),
    buffer: $o,
    labelPositions: (
      /*labelPositions*/
      e[52]
    )
  };
  return (
    /*tooltip2_array_values*/
    e[49] !== void 0 && (S.tooltip2_array_values = /*tooltip2_array_values*/
    e[49]), /*m*/
    e[50] !== void 0 && (S.m = /*m*/
    e[50]), /*listener*/
    e[51] !== void 0 && (S.listener = /*listener*/
    e[51]), /*closestLabelX*/
    e[54] !== void 0 && (S.closestLabelX = /*closestLabelX*/
    e[54]), /*nextLabelX*/
    e[53] !== void 0 && (S.nextLabelX = /*nextLabelX*/
    e[53]), n = new o0({ props: S }), _t.push(() => Ot(n, "tooltip2_array_values", d)), _t.push(() => Ot(n, "m", h)), _t.push(() => Ot(n, "listener", g)), _t.push(() => Ot(n, "closestLabelX", w)), _t.push(() => Ot(n, "nextLabelX", p)), {
      c() {
        t = ze("g"), Ke(n.$$.fragment), v(t, "transform", _ = "translate(" + /*ticks_label_width*/
        (e[42] + /*label_height*/
        e[28] + 10) + " 10)");
      },
      m(x, M) {
        j(x, t, M), Ze(n, t, null), c = !0;
      },
      p(x, M) {
        const z = {};
        M[0] & /*height*/
        128 && (z.height = /*height*/
        x[7]), M[0] & /*width*/
        1 && (z.width = /*width*/
        x[0]), M[1] & /*xScale*/
        1 && (z.x_scale = /*xScale*/
        x[31]), M[1] & /*yScale*/
        4 && (z.y_scale = /*yScale*/
        x[33]), M[1] & /*filtered_data*/
        16 && (z.filtered_data = /*filtered_data*/
        x[35]), M[0] & /*type*/
        4194304 && (z.type = /*type*/
        x[22]), M[0] & /*tooltip*/
        2097152 && (z.tooltip = /*tooltip*/
        x[21]), M[1] & /*labelPositions*/
        2097152 && (z.labelPositions = /*labelPositions*/
        x[52]), !i && M[1] & /*tooltip2_array_values*/
        262144 && (i = !0, z.tooltip2_array_values = /*tooltip2_array_values*/
        x[49], It(() => i = !1)), !l && M[1] & /*m*/
        524288 && (l = !0, z.m = /*m*/
        x[50], It(() => l = !1)), !f && M[1] & /*listener*/
        1048576 && (f = !0, z.listener = /*listener*/
        x[51], It(() => f = !1)), !u && M[1] & /*closestLabelX*/
        8388608 && (u = !0, z.closestLabelX = /*closestLabelX*/
        x[54], It(() => u = !1)), !a && M[1] & /*nextLabelX*/
        4194304 && (a = !0, z.nextLabelX = /*nextLabelX*/
        x[53], It(() => a = !1)), n.$set(z), (!c || M[0] & /*label_height*/
        268435456 | M[1] & /*ticks_label_width*/
        2048 && _ !== (_ = "translate(" + /*ticks_label_width*/
        (x[42] + /*label_height*/
        x[28] + 10) + " 10)")) && v(t, "transform", _);
      },
      i(x) {
        c || (ee(n.$$.fragment, x), c = !0);
      },
      o(x) {
        ue(n.$$.fragment, x), c = !1;
      },
      d(x) {
        x && Z(t), je(n);
      }
    }
  );
}
function $1(e) {
  let t, n;
  return t = new pv({
    props: {
      x: (
        /*m*/
        e[50].x
      ),
      y: (
        /*m*/
        e[50].y
      ),
      format_tooltip: (
        /*format_tooltip*/
        e[19]
      ),
      height: (
        /*height*/
        e[7]
      ),
      width: (
        /*width*/
        e[0]
      ),
      margin: s0,
      buffer: $o,
      tooltip_data: (
        /*tooltip2_array_values*/
        e[49]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*m*/
      524288 && (f.x = /*m*/
      i[50].x), l[1] & /*m*/
      524288 && (f.y = /*m*/
      i[50].y), l[0] & /*format_tooltip*/
      524288 && (f.format_tooltip = /*format_tooltip*/
      i[19]), l[0] & /*height*/
      128 && (f.height = /*height*/
      i[7]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), l[1] & /*tooltip2_array_values*/
      262144 && (f.tooltip_data = /*tooltip2_array_values*/
      i[49]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function ec(e) {
  let t, n;
  return t = new yv({
    props: {
      yScale: (
        /*yScale*/
        e[33]
      ),
      hovered_x: (
        /*hovered_x*/
        e[45]
      ),
      hovered_y: (
        /*hovered_y*/
        e[44]
      ),
      hovered_color: (
        /*hovered_color*/
        e[47]
      ),
      hovered_group: (
        /*hovered_group*/
        e[46]
      ),
      hovered_x_cat: (
        /*hovered_x_cat*/
        e[38]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[1] & /*yScale*/
      4 && (f.yScale = /*yScale*/
      i[33]), l[1] & /*hovered_x*/
      16384 && (f.hovered_x = /*hovered_x*/
      i[45]), l[1] & /*hovered_y*/
      8192 && (f.hovered_y = /*hovered_y*/
      i[44]), l[1] & /*hovered_color*/
      65536 && (f.hovered_color = /*hovered_color*/
      i[47]), l[1] & /*hovered_group*/
      32768 && (f.hovered_group = /*hovered_group*/
      i[46]), l[1] & /*hovered_x_cat*/
      128 && (f.hovered_x_cat = /*hovered_x_cat*/
      i[38]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function xv(e) {
  let t, n, i, l, f, u, a = [], _ = new qu(), c, d, h, g = [], w = new qu(), p, S = !Number.isNaN(
    /*x_ticks_spacing*/
    e[55]
  ), x, M, z, C, P, O, E, B = (
    /*header*/
    e[2] && H1(e)
  ), D = (
    /*show_legend*/
    e[1] && Y1(e)
  );
  u = new a0({
    props: {
      axis_title_position: (
        /*width*/
        (e[0] + /*y_lines_spacing*/
        e[37]) / 2
      ),
      tweenOptions: {
        axis_title_position: {
          easing: rt,
          duration: 1e3
        }
      },
      x_label: (
        /*x_label*/
        e[15]
      ),
      font_size_xaxis: (
        /*font_size_xaxis*/
        e[11]
      ),
      label_height_x_axis: (
        /*label_height_x_axis*/
        e[29]
      ),
      height: (
        /*height*/
        e[7]
      )
    }
  });
  let te = ke(
    /*yScale*/
    e[33].ticks(
      /*yaxis_ticks*/
      e[16]
    )
  );
  const W = (A) => (
    /*tickValue*/
    A[105]
  );
  for (let A = 0; A < te.length; A += 1) {
    let R = W1(e, te, A), de = W(R);
    _.set(de, a[A] = q1(de, R));
  }
  d = new u0({
    props: {
      axis_title_position: (
        /*yScale*/
        (e[33](
          /*ticks*/
          e[41][0]
        ) + /*yScale*/
        e[33](
          /*ticks*/
          e[41][
            /*ticks*/
            e[41].length - 1
          ]
        )) / 2
      ),
      tweenOptions: {
        axis_title_position: {
          easing: rt,
          duration: 1e3
        }
      },
      y_label: (
        /*y_label*/
        e[20]
      ),
      font_size_yaxis: (
        /*font_size_yaxis*/
        e[17]
      ),
      label_height: (
        /*label_height*/
        e[28]
      )
    }
  });
  let K = (
    /*tooltip*/
    e[21] === "vertical_line" && G1(e)
  ), se = ke(
    /*filtered_data*/
    e[35]
  );
  const ce = (A) => (
    /*data*/
    A[27].id
  );
  for (let A = 0; A < se.length; A += 1) {
    let R = F1(e, se, A), de = ce(R);
    w.set(de, g[A] = j1(de, R));
  }
  let fe = S && K1(e), re = (
    /*tooltip*/
    e[21] === "vertical_line" && V1(e)
  ), J = (
    /*tooltip*/
    e[21] === "vertical_line" && /*closestLabelX*/
    e[54] !== 0 && /*nextLabelX*/
    e[53] !== 0 && $1(e)
  ), H = (
    /*hovered_group*/
    e[46] && /*tooltip*/
    e[21] === "single" && ec(e)
  );
  return {
    c() {
      B && B.c(), t = ve(), n = _e("div"), D && D.c(), i = ve(), l = _e("div"), f = ze("svg"), Ke(u.$$.fragment);
      for (let A = 0; A < a.length; A += 1)
        a[A].c();
      c = Le(), Ke(d.$$.fragment), K && K.c(), h = Le();
      for (let A = 0; A < g.length; A += 1)
        g[A].c();
      p = Le(), fe && fe.c(), x = Le(), re && re.c(), M = ve(), J && J.c(), z = ve(), H && H.c(), v(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "flex-start"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(
        n,
        "margin-left",
        /*label_height*/
        e[28] + tr + "px"
      ), y(n, "margin-bottom", "0.25rem"), y(f, "color", "black"), v(
        f,
        "width",
        /*width*/
        e[0]
      ), v(
        f,
        "height",
        /*height*/
        e[7]
      ), v(l, "class", "chart"), y(l, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[89].call(l)
      ));
    },
    m(A, R) {
      B && B.m(A, R), j(A, t, R), j(A, n, R), D && D.m(n, null), j(A, i, R), j(A, l, R), q(l, f), Ze(u, f, null);
      for (let de = 0; de < a.length; de += 1)
        a[de] && a[de].m(f, null);
      q(f, c), Ze(d, f, null), K && K.m(f, null), q(f, h);
      for (let de = 0; de < g.length; de += 1)
        g[de] && g[de].m(f, null);
      q(f, p), fe && fe.m(f, null), q(f, x), re && re.m(f, null), q(l, M), J && J.m(l, null), q(l, z), H && H.m(l, null), C = ir(
        l,
        /*div1_elementresize_handler*/
        e[89].bind(l)
      ), P = !0, O || (E = ot(
        n,
        "mouseleave",
        /*mouseleave_handler*/
        e[77]
      ), O = !0);
    },
    p(A, R) {
      /*header*/
      A[2] ? B ? B.p(A, R) : (B = H1(A), B.c(), B.m(t.parentNode, t)) : B && (B.d(1), B = null), /*show_legend*/
      A[1] ? D ? D.p(A, R) : (D = Y1(A), D.c(), D.m(n, null)) : D && (D.d(1), D = null), (!P || R[0] & /*label_height*/
      268435456) && y(
        n,
        "margin-left",
        /*label_height*/
        A[28] + tr + "px"
      );
      const de = {};
      R[0] & /*width*/
      1 | R[1] & /*y_lines_spacing*/
      64 && (de.axis_title_position = /*width*/
      (A[0] + /*y_lines_spacing*/
      A[37]) / 2), R[0] & /*x_label*/
      32768 && (de.x_label = /*x_label*/
      A[15]), R[0] & /*font_size_xaxis*/
      2048 && (de.font_size_xaxis = /*font_size_xaxis*/
      A[11]), R[0] & /*label_height_x_axis*/
      536870912 && (de.label_height_x_axis = /*label_height_x_axis*/
      A[29]), R[0] & /*height*/
      128 && (de.height = /*height*/
      A[7]), u.$set(de), R[0] & /*yaxis_ticks, width, height, font_size_yticks*/
      327809 | R[1] & /*yScale, y_lines_spacing, format_number*/
      580 && (te = ke(
        /*yScale*/
        A[33].ticks(
          /*yaxis_ticks*/
          A[16]
        )
      ), We(), a = kn(a, R, W, 1, A, te, _, f, Kn, q1, c, W1), Be());
      const he = {};
      R[1] & /*yScale, ticks*/
      1028 && (he.axis_title_position = /*yScale*/
      (A[33](
        /*ticks*/
        A[41][0]
      ) + /*yScale*/
      A[33](
        /*ticks*/
        A[41][
          /*ticks*/
          A[41].length - 1
        ]
      )) / 2), R[0] & /*y_label*/
      1048576 && (he.y_label = /*y_label*/
      A[20]), R[0] & /*font_size_yaxis*/
      131072 && (he.font_size_yaxis = /*font_size_yaxis*/
      A[17]), R[0] & /*label_height*/
      268435456 && (he.label_height = /*label_height*/
      A[28]), d.$set(he), /*tooltip*/
      A[21] === "vertical_line" ? K ? K.p(A, R) : (K = G1(A), K.c(), K.m(f, h)) : K && (K.d(1), K = null), R[0] & /*mode*/
      67108864 | R[1] & /*filtered_data, xScale, xSubgroup, yScale, hover_legend, current_categories, hovered_y, hovered_x, hovered_group, hovered_color, hovered_x_cat, tooltip_axis_x*/
      258231 && (se = ke(
        /*filtered_data*/
        A[35]
      ), We(), g = kn(g, R, ce, 1, A, se, w, f, Kn, j1, p, F1), Be()), R[1] & /*x_ticks_spacing*/
      16777216 && (S = !Number.isNaN(
        /*x_ticks_spacing*/
        A[55]
      )), S ? fe ? (fe.p(A, R), R[1] & /*x_ticks_spacing*/
      16777216 && ee(fe, 1)) : (fe = K1(A), fe.c(), ee(fe, 1), fe.m(f, x)) : fe && (We(), ue(fe, 1, 1, () => {
        fe = null;
      }), Be()), /*tooltip*/
      A[21] === "vertical_line" ? re ? (re.p(A, R), R[0] & /*tooltip*/
      2097152 && ee(re, 1)) : (re = V1(A), re.c(), ee(re, 1), re.m(f, null)) : re && (We(), ue(re, 1, 1, () => {
        re = null;
      }), Be()), (!P || R[0] & /*width*/
      1) && v(
        f,
        "width",
        /*width*/
        A[0]
      ), (!P || R[0] & /*height*/
      128) && v(
        f,
        "height",
        /*height*/
        A[7]
      ), /*tooltip*/
      A[21] === "vertical_line" && /*closestLabelX*/
      A[54] !== 0 && /*nextLabelX*/
      A[53] !== 0 ? J ? (J.p(A, R), R[0] & /*tooltip*/
      2097152 | R[1] & /*closestLabelX, nextLabelX*/
      12582912 && ee(J, 1)) : (J = $1(A), J.c(), ee(J, 1), J.m(l, z)) : J && (We(), ue(J, 1, 1, () => {
        J = null;
      }), Be()), /*hovered_group*/
      A[46] && /*tooltip*/
      A[21] === "single" ? H ? (H.p(A, R), R[0] & /*tooltip*/
      2097152 | R[1] & /*hovered_group*/
      32768 && ee(H, 1)) : (H = ec(A), H.c(), ee(H, 1), H.m(l, null)) : H && (We(), ue(H, 1, 1, () => {
        H = null;
      }), Be());
    },
    i(A) {
      if (!P) {
        ee(u.$$.fragment, A);
        for (let R = 0; R < te.length; R += 1)
          ee(a[R]);
        ee(d.$$.fragment, A);
        for (let R = 0; R < se.length; R += 1)
          ee(g[R]);
        ee(fe), ee(re), ee(J), ee(H), P = !0;
      }
    },
    o(A) {
      ue(u.$$.fragment, A);
      for (let R = 0; R < a.length; R += 1)
        ue(a[R]);
      ue(d.$$.fragment, A);
      for (let R = 0; R < g.length; R += 1)
        ue(g[R]);
      ue(fe), ue(re), ue(J), ue(H), P = !1;
    },
    d(A) {
      A && (Z(t), Z(n), Z(i), Z(l)), B && B.d(A), D && D.d(), je(u);
      for (let R = 0; R < a.length; R += 1)
        a[R].d();
      je(d), K && K.d();
      for (let R = 0; R < g.length; R += 1)
        g[R].d();
      fe && fe.d(), re && re.d(), J && J.d(), H && H.d(), C(), O = !1, E();
    }
  };
}
const Mv = "bar", s0 = 30, $o = 40;
let ef = 0.1, _0 = 10;
const tr = 15, Gu = 5;
function Tv(e, t, n) {
  let i, l, f, u, a, _, { data: c = [] } = t, { width: d = 800 } = t, { show_legend: h } = t, { header: g } = t, { title_align: w } = t, { title_color: p } = t, { title_font_size: S } = t, { title_font_weight: x } = t, { title_padding: M } = t, { height: z = 400 } = t, { dx: C = "0em" } = t, { dy: P = "0em" } = t, { rotation_xaxis: O = 0 } = t, { font_size_xaxis: E = 14 } = t, { font_size_xticks: B = 12 } = t, { dominant_baseline_x_axis: D = "middle" } = t, { text_anchor_x_axis: te = "middle" } = t, { x_axis_type: W } = t, { x_label: K } = t, { yaxis_ticks: se = 6 } = t, { format_yaxis: ce = ",.3r" } = t, { font_size_yaxis: fe } = t, { font_size_yticks: re } = t, { format_tooltip: J = "" } = t, { y_label: H } = t, { tooltip_desc: A = "" } = t, { colorRange: R = [] } = t, { color_mapping: de } = t, { annotation_dates: he = [] } = t, { legend_text: pt = [] } = t, { scale_x: Kt = "" } = t, { annotation_lines: Je = 2 } = t, { colours: Ue = [] } = t, { tooltip: $e = "vertical_line" } = t, { interval: at = "day" } = t, { type: Xe = "" } = t, { show_bar_labels: ae } = t, { position: me } = t, { colour_text: be } = t, { mode: Q } = t;
  function Ce(X) {
    let Lt = [];
    Lt = Object.keys(Tt).filter((vt) => !X.includes(vt));
    for (let vt = 0; vt < X.length; vt++)
      n(34, Tt[X[vt]] = !0, Tt);
    for (let vt = 0; vt < Lt.length; vt++)
      n(34, Tt[Lt[vt]] = !1, Tt);
    return [Tt, Lt];
  }
  let ye = $o, He = 20, Qe = $o, et, qe = 10, Y, le, Me, xt, Mt, Xt, gt, Tt = {}, $t, yt = [], St, en, Nn, tn = z - 40, ln = 40;
  function Jn() {
    const Lt = document.createElement("canvas").getContext("2d"), vt = (_i, hi) => {
      Lt.font = `${hi}px Arial`;
      const { width: Gr } = Lt.measureText(_i), Zr = Lt.measureText("M").actualBoundingBoxAscent + Lt.measureText("M").actualBoundingBoxDescent + 1;
      return { width: Gr, height: Zr };
    }, zi = vt(Nn, re);
    n(42, ye = zi.width);
    const Ai = vt(H, fe);
    n(28, qe = Ai.height);
    const ur = vt(a, B);
    Qe = ur.width, et = ur.height;
    const Fn = vt("M", E);
    n(29, Y = Fn.height), n(69, He = ca(Qe, et, O)), n(73, tn = z - He - Y - et - tr - Gu), n(37, ln = ye + qe + tr + Gu);
  }
  Qu(Jn);
  let cn, Mn, on, Tn, zt, Un, gn, At = null, Sn = { x: 0, y: 0 }, zn = !1, Qn, Vn = 0, An = 0;
  const V = (X) => n(43, le = X), tt = (X) => n(34, Tt[X] = !Tt[X], Tt), Ct = () => n(43, le = null);
  function fn(X) {
    cn = X, n(44, cn);
  }
  function un(X) {
    Mn = X, n(45, Mn);
  }
  function Pn(X) {
    on = X, n(46, on);
  }
  function ri(X) {
    Tn = X, n(47, Tn);
  }
  function si(X) {
    zt = X, n(38, zt);
  }
  function Yr(X) {
    Un = X, n(48, Un);
  }
  function or(X) {
    At = X, n(49, At);
  }
  function fr(X) {
    Sn = X, n(50, Sn);
  }
  function Xr(X) {
    zn = X, n(51, zn);
  }
  function qr(X) {
    An = X, n(54, An);
  }
  function Cn(X) {
    Vn = X, n(53, Vn);
  }
  function dn() {
    d = this.clientWidth, n(0, d);
  }
  return e.$$set = (X) => {
    "data" in X && n(27, c = X.data), "width" in X && n(0, d = X.width), "show_legend" in X && n(1, h = X.show_legend), "header" in X && n(2, g = X.header), "title_align" in X && n(3, w = X.title_align), "title_color" in X && n(4, p = X.title_color), "title_font_size" in X && n(5, S = X.title_font_size), "title_font_weight" in X && n(6, x = X.title_font_weight), "title_padding" in X && n(57, M = X.title_padding), "height" in X && n(7, z = X.height), "dx" in X && n(8, C = X.dx), "dy" in X && n(9, P = X.dy), "rotation_xaxis" in X && n(10, O = X.rotation_xaxis), "font_size_xaxis" in X && n(11, E = X.font_size_xaxis), "font_size_xticks" in X && n(12, B = X.font_size_xticks), "dominant_baseline_x_axis" in X && n(13, D = X.dominant_baseline_x_axis), "text_anchor_x_axis" in X && n(14, te = X.text_anchor_x_axis), "x_axis_type" in X && n(58, W = X.x_axis_type), "x_label" in X && n(15, K = X.x_label), "yaxis_ticks" in X && n(16, se = X.yaxis_ticks), "format_yaxis" in X && n(59, ce = X.format_yaxis), "font_size_yaxis" in X && n(17, fe = X.font_size_yaxis), "font_size_yticks" in X && n(18, re = X.font_size_yticks), "format_tooltip" in X && n(19, J = X.format_tooltip), "y_label" in X && n(20, H = X.y_label), "tooltip_desc" in X && n(60, A = X.tooltip_desc), "colorRange" in X && n(61, R = X.colorRange), "color_mapping" in X && n(62, de = X.color_mapping), "annotation_dates" in X && n(63, he = X.annotation_dates), "legend_text" in X && n(64, pt = X.legend_text), "scale_x" in X && n(65, Kt = X.scale_x), "annotation_lines" in X && n(66, Je = X.annotation_lines), "colours" in X && n(67, Ue = X.colours), "tooltip" in X && n(21, $e = X.tooltip), "interval" in X && n(68, at = X.interval), "type" in X && n(22, Xe = X.type), "show_bar_labels" in X && n(23, ae = X.show_bar_labels), "position" in X && n(24, me = X.position), "colour_text" in X && n(25, be = X.colour_text), "mode" in X && n(26, Q = X.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*data, names*/
    1207959552 && (n(30, Me = [...new Set(c.map((X) => X.group))]), n(70, xt = [...new Set(c.map((X) => X.x))]), n(71, $t = Array.from(new Map(c.map((X) => [X.group, X])).values())), n(34, Tt = Ce(Me)[0]), Ce(Me)[1]), e.$$.dirty[2] & /*include_legend*/
    512 && n(56, i = $t.filter((X) => X.include_legend !== !1)), e.$$.dirty[1] & /*categories*/
    8 && n(36, St = Object.keys(Tt).filter((X) => Tt[X])), e.$$.dirty[0] & /*names*/
    1073741824 && n(36, St = Me), e.$$.dirty[0] & /*data, mode, width*/
    201326593 | e.$$.dirty[1] & /*current_categories, filtered_data, y_lines_spacing*/
    112 | e.$$.dirty[2] & /*x, x_lines_spacing, scales*/
    3328 && (n(35, yt = c.filter(({ group: X }) => St.includes(X))), Q === "stacked" ? n(35, yt = Nw(yt)) : Q === "percent" && n(35, yt = Uw(yt)), n(72, en = Dw(yt, xt, St, d, ef, Q, ln, _0, tn)), n(31, Mt = en[0]), n(32, Xt = en[1]), en[2], n(33, gt = en[3])), e.$$.dirty[1] & /*format_yaxis*/
    268435456 && n(40, l = hn(ce)), e.$$.dirty[0] & /*yaxis_ticks*/
    65536 | e.$$.dirty[1] & /*yScale*/
    4 && n(41, f = gt.ticks(se)), e.$$.dirty[1] & /*ticks, format_number*/
    1536) {
      let X = 0;
      f.forEach((Lt) => {
        const vt = l(Lt).toString();
        vt.length > X && (X = vt.length, Nn = vt);
      });
    }
    e.$$.dirty[1] & /*xScale*/
    1 && n(74, u = Mt.domain()), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    4096 && (a = u.reduce((X, Lt) => X.length > Lt.length ? X : Lt)), e.$$.dirty[0] & /*height, label_height_x_axis*/
    536871040 | e.$$.dirty[2] & /*x_ticks_label_rotation_buffer*/
    128 && n(55, _ = z - He - Y - tr), e.$$.dirty[0] & /*label_height*/
    268435456, e.$$.dirty[1] & /*current_categories*/
    32 && (St.length % 2 == 0 ? n(39, gn = St.length / 2 - 0.5) : n(39, gn = Math.floor(St.length / 2))), e.$$.dirty[1] & /*filtered_data, hovered_x_cat*/
    144 && yt.filter((X) => X.x === zt), e.$$.dirty[0] & /*names, mode*/
    1140850688 | e.$$.dirty[1] & /*filtered_data, xScale, xSubgroup, current_categories, iteration*/
    307 && n(52, Qn = yt.map((X, Lt) => Me.length === 1 ? Mt(X.x) + Xt(X.group) + Xt.bandwidth() / 2 : Lt % St.length === 0 ? Q === "grouped" ? Mt(X.x) + Xt(X.group) + Xt.bandwidth() * St.length / 2 + Xt.bandwidth() * ef * gn : Mt(X.x) + Xt.bandwidth() / 2 : null).filter((X) => X !== null));
  }, [
    d,
    h,
    g,
    w,
    p,
    S,
    x,
    z,
    C,
    P,
    O,
    E,
    B,
    D,
    te,
    K,
    se,
    fe,
    re,
    J,
    H,
    $e,
    Xe,
    ae,
    me,
    be,
    Q,
    c,
    qe,
    Y,
    Me,
    Mt,
    Xt,
    gt,
    Tt,
    yt,
    St,
    ln,
    zt,
    gn,
    l,
    f,
    ye,
    le,
    cn,
    Mn,
    on,
    Tn,
    Un,
    At,
    Sn,
    zn,
    Qn,
    Vn,
    An,
    _,
    i,
    M,
    W,
    ce,
    A,
    R,
    de,
    he,
    pt,
    Kt,
    Je,
    Ue,
    at,
    He,
    xt,
    $t,
    en,
    tn,
    u,
    V,
    tt,
    Ct,
    fn,
    un,
    Pn,
    ri,
    si,
    Yr,
    or,
    fr,
    Xr,
    qr,
    Cn,
    dn
  ];
}
class Sv extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      Tv,
      xv,
      ut,
      {
        data: 27,
        width: 0,
        show_legend: 1,
        header: 2,
        title_align: 3,
        title_color: 4,
        title_font_size: 5,
        title_font_weight: 6,
        title_padding: 57,
        height: 7,
        dx: 8,
        dy: 9,
        rotation_xaxis: 10,
        font_size_xaxis: 11,
        font_size_xticks: 12,
        dominant_baseline_x_axis: 13,
        text_anchor_x_axis: 14,
        x_axis_type: 58,
        x_label: 15,
        yaxis_ticks: 16,
        format_yaxis: 59,
        font_size_yaxis: 17,
        font_size_yticks: 18,
        format_tooltip: 19,
        y_label: 20,
        tooltip_desc: 60,
        colorRange: 61,
        color_mapping: 62,
        annotation_dates: 63,
        legend_text: 64,
        scale_x: 65,
        annotation_lines: 66,
        colours: 67,
        tooltip: 21,
        interval: 68,
        type: 22,
        show_bar_labels: 23,
        position: 24,
        colour_text: 25,
        mode: 26
      },
      null,
      [-1, -1, -1, -1]
    );
  }
}
function zv(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = ze("rect"), v(
        t,
        "x",
        /*$tweened_x*/
        e[13]
      ), v(
        t,
        "y",
        /*$tweened_y*/
        e[14]
      ), v(
        t,
        "width",
        /*$tweened_width*/
        e[15]
      ), v(
        t,
        "height",
        /*$tweened_height*/
        e[16]
      ), v(
        t,
        "fill",
        /*color*/
        e[5]
      ), y(t, "transition", "opacity 0.5s ease"), v(t, "opacity", n = /*hovered_group*/
      e[3] || /*hover_legend*/
      e[11] && /*current_categories*/
      e[12].includes(
        /*hover_legend*/
        e[11]
      ) ? (
        /*group*/
        e[10] === /*hovered_group*/
        e[3] || /*group*/
        e[10] === /*hover_legend*/
        e[11] ? (
          /*opacity*/
          e[9]
        ) : (
          /*opacity*/
          e[9] * 0.5
        )
      ) : (
        /*opacity*/
        e[9]
      ));
    },
    m(u, a) {
      j(u, t, a), l || (f = [
        ot(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[27]
        ),
        ot(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[28]
        )
      ], l = !0);
    },
    p(u, [a]) {
      a & /*$tweened_x*/
      8192 && v(
        t,
        "x",
        /*$tweened_x*/
        u[13]
      ), a & /*$tweened_y*/
      16384 && v(
        t,
        "y",
        /*$tweened_y*/
        u[14]
      ), a & /*$tweened_width*/
      32768 && v(
        t,
        "width",
        /*$tweened_width*/
        u[15]
      ), a & /*$tweened_height*/
      65536 && v(
        t,
        "height",
        /*$tweened_height*/
        u[16]
      ), a & /*color*/
      32 && v(
        t,
        "fill",
        /*color*/
        u[5]
      ), a & /*hovered_group, hover_legend, current_categories, group, opacity*/
      7688 && n !== (n = /*hovered_group*/
      u[3] || /*hover_legend*/
      u[11] && /*current_categories*/
      u[12].includes(
        /*hover_legend*/
        u[11]
      ) ? (
        /*group*/
        u[10] === /*hovered_group*/
        u[3] || /*group*/
        u[10] === /*hover_legend*/
        u[11] ? (
          /*opacity*/
          u[9]
        ) : (
          /*opacity*/
          u[9] * 0.5
        )
      ) : (
        /*opacity*/
        u[9]
      )) && v(t, "opacity", n);
    },
    i(u) {
      i || it(() => {
        i = Fi(t, Zt, { x: -200, duration: 1e3, delay: 50 }), i.start();
      });
    },
    o: Pe,
    d(u) {
      u && Z(t), l = !1, Ht(f);
    }
  };
}
function Av(e, t, n) {
  let i, l, f, u, { x: a } = t, { y: _ } = t, { width: c } = t, { height: d } = t, { color: h } = t, { tweenOptions: g } = t, { x_start: w } = t, { x_end: p } = t, { y_value: S } = t, { opacity: x } = t, { group: M } = t, { hover_legend: z } = t, { current_categories: C } = t, { hovered_x_start: P } = t, { hovered_x_end: O } = t, { hovered_y: E } = t, { hovered_group: B } = t, { hovered_color: D } = t, te = Ut(a, g == null ? void 0 : g.x);
  wt(e, te, (J) => n(13, i = J));
  let W = Ut(_, g == null ? void 0 : g.y);
  wt(e, W, (J) => n(14, l = J));
  let K = Ut(c, g == null ? void 0 : g.width);
  wt(e, K, (J) => n(15, f = J));
  let se = Ut(d, g == null ? void 0 : g.height);
  wt(e, se, (J) => n(16, u = J));
  function ce(J, H, A, R, de, he) {
    n(2, E = H), n(0, P = A), n(1, O = R), n(3, B = de), n(4, D = he);
  }
  const fe = (J) => ce(J, S, w, p, M, h), re = () => {
    n(2, E = null), n(0, P = null), n(1, O = null), n(3, B = null), n(4, D = null);
  };
  return e.$$set = (J) => {
    "x" in J && n(22, a = J.x), "y" in J && n(23, _ = J.y), "width" in J && n(24, c = J.width), "height" in J && n(25, d = J.height), "color" in J && n(5, h = J.color), "tweenOptions" in J && n(26, g = J.tweenOptions), "x_start" in J && n(6, w = J.x_start), "x_end" in J && n(7, p = J.x_end), "y_value" in J && n(8, S = J.y_value), "opacity" in J && n(9, x = J.opacity), "group" in J && n(10, M = J.group), "hover_legend" in J && n(11, z = J.hover_legend), "current_categories" in J && n(12, C = J.current_categories), "hovered_x_start" in J && n(0, P = J.hovered_x_start), "hovered_x_end" in J && n(1, O = J.hovered_x_end), "hovered_y" in J && n(2, E = J.hovered_y), "hovered_group" in J && n(3, B = J.hovered_group), "hovered_color" in J && n(4, D = J.hovered_color);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions*/
    71303168 && te.set(a, g == null ? void 0 : g.x), e.$$.dirty & /*y, tweenOptions*/
    75497472 && W.set(_, g == null ? void 0 : g.y), e.$$.dirty & /*width, tweenOptions*/
    83886080 && K.set(c, g == null ? void 0 : g.width), e.$$.dirty & /*height, tweenOptions*/
    100663296 && se.set(d, g == null ? void 0 : g.height);
  }, [
    P,
    O,
    E,
    B,
    D,
    h,
    w,
    p,
    S,
    x,
    M,
    z,
    C,
    i,
    l,
    f,
    u,
    te,
    W,
    K,
    se,
    ce,
    a,
    _,
    c,
    d,
    g,
    fe,
    re
  ];
}
class Cv extends ct {
  constructor(t) {
    super(), ht(this, t, Av, zv, ut, {
      x: 22,
      y: 23,
      width: 24,
      height: 25,
      color: 5,
      tweenOptions: 26,
      x_start: 6,
      x_end: 7,
      y_value: 8,
      opacity: 9,
      group: 10,
      hover_legend: 11,
      current_categories: 12,
      hovered_x_start: 0,
      hovered_x_end: 1,
      hovered_y: 2,
      hovered_group: 3,
      hovered_color: 4
    });
  }
}
function Lv(e) {
  let t, n, i = (
    /*tooltip_df*/
    e[5].x_start + ""
  ), l, f, u = (
    /*tooltip_df*/
    e[5].x_end + ""
  ), a, _, c, d, h, g, w, p = (
    /*tooltip_df*/
    e[5].group + ""
  ), S, x, M, z, C = (
    /*tooltip_df*/
    e[5].y + ""
  ), P, O, E, B, D, te, W;
  return {
    c() {
      t = _e("div"), n = _e("div"), l = Ae(i), f = Ae(" - "), a = Ae(u), _ = ve(), c = _e("div"), d = _e("div"), h = _e("span"), g = ve(), w = _e("div"), S = Ae(p), x = Ae(":"), M = ve(), z = _e("div"), P = Ae(C), O = ve(), E = _e("div"), B = ve(), D = _e("div"), y(
        h,
        "background",
        /*tooltip_df*/
        e[5].color
      ), y(h, "width", "9px"), y(h, "height", "9px"), y(h, "border-radius", "50%"), y(h, "margin", "3px"), y(h, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(d, "display", "flex"), y(z, "font-weight", "bold"), y(c, "padding", "5px"), y(c, "font-size", "14px"), y(c, "display", "flex"), y(c, "flex-direction", "row"), y(c, "justify-content", "space-between"), y(c, "gap", "10px"), y(E, "position", "absolute"), y(E, "bottom", "-5px"), y(E, "left", "50%"), y(E, "transform", "translateX(-50%)"), y(E, "width", "0"), y(E, "height", "0"), y(E, "border-left", "5px solid transparent"), y(E, "border-right", "5px solid transparent"), y(E, "border-top", "5px solid #ccc"), y(D, "position", "absolute"), y(D, "bottom", "-4px"), y(D, "left", "50%"), y(D, "transform", "translateX(-50%)"), y(D, "width", "0"), y(D, "height", "0"), y(D, "border-left", "4px solid transparent"), y(D, "border-right", "4px solid transparent"), y(D, "border-top", "4px solid #fff"), v(t, "class", "tooltip-bars"), y(t, "transition", "all 500ms"), y(t, "position", "absolute"), y(
        t,
        "top",
        /*yScale*/
        e[1](
          /*hovered_y*/
          e[4]
        ) - 5 + "px"
      ), y(
        t,
        "left",
        /*xScale*/
        e[0](
          /*hovered_x_end*/
          e[3]
        ) - /*xScale*/
        (e[0](
          /*hovered_x_end*/
          e[3]
        ) - /*xScale*/
        e[0](
          /*hovered_x_start*/
          e[2]
        )) / 2 + "px"
      ), y(t, "background-color", "rgba(255, 255, 255, 0.5)"), y(t, "border", "1px solid #ccc"), y(t, "border-radius", "4px"), y(t, "padding", "5px 10px"), y(t, "box-shadow", "0px 2px 4px rgba(0,0,0,0.18)"), y(t, "transform", "translate(-50%, -100%)"), y(t, "white-space", "nowrap");
    },
    m(K, se) {
      j(K, t, se), q(t, n), q(n, l), q(n, f), q(n, a), q(t, _), q(t, c), q(c, d), q(d, h), q(c, g), q(c, w), q(w, S), q(w, x), q(c, M), q(c, z), q(z, P), q(t, O), q(t, E), q(t, B), q(t, D), W = !0;
    },
    p(K, [se]) {
      (!W || se & /*tooltip_df*/
      32) && i !== (i = /*tooltip_df*/
      K[5].x_start + "") && Oe(l, i), (!W || se & /*tooltip_df*/
      32) && u !== (u = /*tooltip_df*/
      K[5].x_end + "") && Oe(a, u), (!W || se & /*tooltip_df*/
      32) && y(
        h,
        "background",
        /*tooltip_df*/
        K[5].color
      ), (!W || se & /*tooltip_df*/
      32) && p !== (p = /*tooltip_df*/
      K[5].group + "") && Oe(S, p), (!W || se & /*tooltip_df*/
      32) && C !== (C = /*tooltip_df*/
      K[5].y + "") && Oe(P, C), (!W || se & /*yScale, hovered_y*/
      18) && y(
        t,
        "top",
        /*yScale*/
        K[1](
          /*hovered_y*/
          K[4]
        ) - 5 + "px"
      ), (!W || se & /*xScale, hovered_x_end, hovered_x_start*/
      13) && y(
        t,
        "left",
        /*xScale*/
        K[0](
          /*hovered_x_end*/
          K[3]
        ) - /*xScale*/
        (K[0](
          /*hovered_x_end*/
          K[3]
        ) - /*xScale*/
        K[0](
          /*hovered_x_start*/
          K[2]
        )) / 2 + "px"
      );
    },
    i(K) {
      W || (it(() => {
        W && (te || (te = Pt(t, Zt, { duration: 1e3 }, !0)), te.run(1));
      }), W = !0);
    },
    o(K) {
      te || (te = Pt(t, Zt, { duration: 1e3 }, !1)), te.run(0), W = !1;
    },
    d(K) {
      K && Z(t), K && te && te.end();
    }
  };
}
function Ev(e, t, n) {
  let i, { xScale: l } = t, { yScale: f } = t, { hovered_x_start: u } = t, { hovered_x_end: a } = t, { hovered_group: _ } = t, { hovered_color: c } = t, { hovered_y: d } = t;
  return e.$$set = (h) => {
    "xScale" in h && n(0, l = h.xScale), "yScale" in h && n(1, f = h.yScale), "hovered_x_start" in h && n(2, u = h.hovered_x_start), "hovered_x_end" in h && n(3, a = h.hovered_x_end), "hovered_group" in h && n(6, _ = h.hovered_group), "hovered_color" in h && n(7, c = h.hovered_color), "hovered_y" in h && n(4, d = h.hovered_y);
  }, e.$$.update = () => {
    e.$$.dirty & /*hovered_x_start, hovered_x_end, hovered_color, hovered_group, hovered_y*/
    220 && n(5, i = {
      x_start: u,
      x_end: a,
      color: c,
      group: _,
      y: d
    });
  }, [
    l,
    f,
    u,
    a,
    d,
    i,
    _,
    c
  ];
}
class Rv extends ct {
  constructor(t) {
    super(), ht(this, t, Ev, Lv, ut, {
      xScale: 0,
      yScale: 1,
      hovered_x_start: 2,
      hovered_x_end: 3,
      hovered_group: 6,
      hovered_color: 7,
      hovered_y: 4
    });
  }
}
function tc(e, t, n) {
  const i = e.slice();
  return i[86] = t[n].x_start, i[87] = t[n].x_end, i[88] = t[n].y, i[89] = t[n].colors, i[90] = t[n].group, i[91] = t[n].opacity, i[92] = t[n].id, i;
}
function nc(e, t, n) {
  const i = e.slice();
  return i[95] = t[n], i;
}
function ic(e, t, n) {
  const i = e.slice();
  return i[95] = t[n], i;
}
function rc(e, t, n) {
  const i = e.slice();
  return i[100] = t[n], i[102] = n, i;
}
function lc(e) {
  let t, n;
  return {
    c() {
      t = _e("div"), n = Ae(
        /*header*/
        e[2]
      ), v(t, "class", "header"), y(
        t,
        "text-align",
        /*title_align*/
        e[3]
      ), y(
        t,
        "color",
        /*title_color*/
        e[4]
      ), y(
        t,
        "font-size",
        /*title_font_size*/
        e[5] + "px"
      ), y(
        t,
        "font-weight",
        /*title_font_weight*/
        e[6]
      ), y(
        t,
        "padding",
        /*title_padding*/
        e[7] + "px"
      );
    },
    m(i, l) {
      j(i, t, l), q(t, n);
    },
    p(i, l) {
      l[0] & /*header*/
      4 && Oe(
        n,
        /*header*/
        i[2]
      ), l[0] & /*title_align*/
      8 && y(
        t,
        "text-align",
        /*title_align*/
        i[3]
      ), l[0] & /*title_color*/
      16 && y(
        t,
        "color",
        /*title_color*/
        i[4]
      ), l[0] & /*title_font_size*/
      32 && y(
        t,
        "font-size",
        /*title_font_size*/
        i[5] + "px"
      ), l[0] & /*title_font_weight*/
      64 && y(
        t,
        "font-weight",
        /*title_font_weight*/
        i[6]
      ), l[0] & /*title_padding*/
      128 && y(
        t,
        "padding",
        /*title_padding*/
        i[7] + "px"
      );
    },
    d(i) {
      i && Z(t);
    }
  };
}
function oc(e) {
  let t, n = ke(Object.keys(
    /*categories*/
    e[27]
  )), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = fc(rc(e, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      t = Le();
    },
    m(l, f) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, f);
      j(l, t, f);
    },
    p(l, f) {
      if (f[0] & /*categories, current_categories, color_mapping*/
      675282944 | f[1] & /*hover_legend*/
      1) {
        n = ke(Object.keys(
          /*categories*/
          l[27]
        ));
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = rc(l, n, u);
          i[u] ? i[u].p(a, f) : (i[u] = fc(a), i[u].c(), i[u].m(t.parentNode, t));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = n.length;
      }
    },
    d(l) {
      l && Z(t), xn(i, l);
    }
  };
}
function fc(e) {
  let t, n, i, l = (
    /*cats*/
    e[100].replace(/\.\d+$/, "") + ""
  ), f, u, a, _, c;
  function d() {
    return (
      /*mouseover_handler*/
      e[66](
        /*cats*/
        e[100]
      )
    );
  }
  function h() {
    return (
      /*click_handler*/
      e[67](
        /*cats*/
        e[100]
      )
    );
  }
  return {
    c() {
      t = _e("p"), n = _e("span"), i = ve(), f = Ae(l), u = ve(), y(
        n,
        "background",
        /*color_mapping*/
        e[22][
          /*cats*/
          e[100]
        ]
      ), y(n, "width", "8px"), y(n, "height", "8px"), y(n, "display", "inline-block"), y(n, "border-radius", "50%"), y(n, "border", "1px solid rgba(0, 0, 0, 0.5)"), v(t, "style", a = /*hover_legend*/
      e[31] && /*hover_legend*/
      e[31] !== /*cats*/
      e[100] && /*current_categories*/
      e[29].includes(
        /*hover_legend*/
        e[31]
      ) || !/*categories*/
      e[27][
        /*cats*/
        e[100]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;");
    },
    m(g, w) {
      j(g, t, w), q(t, n), q(t, i), q(t, f), q(t, u), _ || (c = [
        ot(t, "mouseover", d),
        ot(t, "click", h)
      ], _ = !0);
    },
    p(g, w) {
      e = g, w[0] & /*color_mapping, categories*/
      138412032 && y(
        n,
        "background",
        /*color_mapping*/
        e[22][
          /*cats*/
          e[100]
        ]
      ), w[0] & /*categories*/
      134217728 && l !== (l = /*cats*/
      e[100].replace(/\.\d+$/, "") + "") && Oe(f, l), w[0] & /*categories, current_categories*/
      671088640 | w[1] & /*hover_legend*/
      1 && a !== (a = /*hover_legend*/
      e[31] && /*hover_legend*/
      e[31] !== /*cats*/
      e[100] && /*current_categories*/
      e[29].includes(
        /*hover_legend*/
        e[31]
      ) || !/*categories*/
      e[27][
        /*cats*/
        e[100]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;") && v(t, "style", a);
    },
    d(g) {
      g && Z(t), _ = !1, Ht(c);
    }
  };
}
function uc(e, t) {
  let n, i, l;
  return i = new f0({
    props: {
      x1: (
        /*xScale*/
        t[25](
          /*tickValue*/
          t[95]
        )
      ),
      width: (
        /*width*/
        t[0]
      ),
      x_ticks_spacing: (
        /*x_ticks_spacing*/
        t[40]
      ),
      x_lines_spacing: (
        /*x_lines_spacing*/
        t[37]
      ),
      rotation_xaxis: (
        /*rotation_xaxis*/
        t[12]
      ),
      line_generator_space: Cr,
      ticklabel: (
        /*format_x_axis*/
        t[39] === "null" ? (
          /*tickValue*/
          t[95]
        ) : (
          /*format_x_axis*/
          t[39](
            /*tickValue*/
            t[95]
          )
        )
      ),
      font_size_xticks: (
        /*font_size_xticks*/
        t[14]
      ),
      dx: (
        /*dx*/
        t[10]
      ),
      dy: (
        /*dy*/
        t[11]
      ),
      dominant_baseline_x_axis: (
        /*dominant_baseline_x_axis*/
        t[15]
      ),
      text_anchor_x_axis: (
        /*text_anchor_x_axis*/
        t[16]
      ),
      tweenOptions: {
        x1: {
          easing: rt,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Le(), Ke(i.$$.fragment), this.first = n;
    },
    m(f, u) {
      j(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[0] & /*xScale, xaxis_ticks*/
      33554944 && (a.x1 = /*xScale*/
      t[25](
        /*tickValue*/
        t[95]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[1] & /*x_ticks_spacing*/
      512 && (a.x_ticks_spacing = /*x_ticks_spacing*/
      t[40]), u[1] & /*x_lines_spacing*/
      64 && (a.x_lines_spacing = /*x_lines_spacing*/
      t[37]), u[0] & /*rotation_xaxis*/
      4096 && (a.rotation_xaxis = /*rotation_xaxis*/
      t[12]), u[0] & /*xScale, xaxis_ticks*/
      33554944 | u[1] & /*format_x_axis*/
      256 && (a.ticklabel = /*format_x_axis*/
      t[39] === "null" ? (
        /*tickValue*/
        t[95]
      ) : (
        /*format_x_axis*/
        t[39](
          /*tickValue*/
          t[95]
        )
      )), u[0] & /*font_size_xticks*/
      16384 && (a.font_size_xticks = /*font_size_xticks*/
      t[14]), u[0] & /*dx*/
      1024 && (a.dx = /*dx*/
      t[10]), u[0] & /*dy*/
      2048 && (a.dy = /*dy*/
      t[11]), u[0] & /*dominant_baseline_x_axis*/
      32768 && (a.dominant_baseline_x_axis = /*dominant_baseline_x_axis*/
      t[15]), u[0] & /*text_anchor_x_axis*/
      65536 && (a.text_anchor_x_axis = /*text_anchor_x_axis*/
      t[16]), i.$set(a);
    },
    i(f) {
      l || (ee(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function ac(e, t) {
  let n, i, l;
  return i = new ma({
    props: {
      y1: (
        /*yScale*/
        t[26](
          /*tickValue*/
          t[95]
        )
      ),
      width: (
        /*width*/
        t[0]
      ),
      space_between_ticks_and_gridline: Zu,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[38]
      ),
      height: (
        /*height*/
        t[8]
      ),
      line_generator_space: Cr,
      ticklabel: (
        /*format_number*/
        t[30](
          /*tickValue*/
          t[95]
        )
      ),
      font_size_yticks: (
        /*font_size_yticks*/
        t[20]
      ),
      tweenOptions: {
        y1: {
          easing: rt,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Le(), Ke(i.$$.fragment), this.first = n;
    },
    m(f, u) {
      j(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[0] & /*yScale, yaxis_ticks*/
      67371008 && (a.y1 = /*yScale*/
      t[26](
        /*tickValue*/
        t[95]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[1] & /*y_lines_spacing*/
      128 && (a.y_lines_spacing = /*y_lines_spacing*/
      t[38]), u[0] & /*height*/
      256 && (a.height = /*height*/
      t[8]), u[0] & /*format_number, yScale, yaxis_ticks*/
      1141112832 && (a.ticklabel = /*format_number*/
      t[30](
        /*tickValue*/
        t[95]
      )), u[0] & /*font_size_yticks*/
      1048576 && (a.font_size_yticks = /*font_size_yticks*/
      t[20]), i.$set(a);
    },
    i(f) {
      l || (ee(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function sc(e, t) {
  let n, i, l, f, u, a, _, c;
  function d(x) {
    t[69](x);
  }
  function h(x) {
    t[70](x);
  }
  function g(x) {
    t[71](x);
  }
  function w(x) {
    t[72](x);
  }
  function p(x) {
    t[73](x);
  }
  let S = {
    group: (
      /*group*/
      t[90]
    ),
    x: (
      /*xScale*/
      t[25](
        /*x_start*/
        t[86]
      )
    ),
    y: (
      /*yScale*/
      t[26](
        /*y*/
        t[88]
      )
    ),
    x_start: (
      /*x_start*/
      t[86]
    ),
    x_end: (
      /*x_end*/
      t[87]
    ),
    y_value: (
      /*y*/
      t[88]
    ),
    width: (
      /*xScale*/
      t[25](
        /*x_end*/
        t[87]
      ) - /*xScale*/
      t[25](
        /*x_start*/
        t[86]
      )
    ),
    height: (
      /*yScale*/
      t[26](0) - /*yScale*/
      t[26](
        /*y*/
        t[88]
      )
    ),
    color: (
      /*colors*/
      t[89]
    ),
    hover_legend: (
      /*hover_legend*/
      t[31]
    ),
    opacity: (
      /*opacity*/
      t[91]
    ),
    current_categories: (
      /*current_categories*/
      t[29]
    ),
    tweenOptions: {
      x: {
        easing: rt,
        duration: 1e3
      },
      width: {
        easing: rt,
        duration: 1e3
      },
      height: {
        easing: rt,
        duration: 1e3
      },
      y: {
        easing: rt,
        duration: 1e3
      }
    }
  };
  return (
    /*hovered_x_start*/
    t[33] !== void 0 && (S.hovered_x_start = /*hovered_x_start*/
    t[33]), /*hovered_x_end*/
    t[34] !== void 0 && (S.hovered_x_end = /*hovered_x_end*/
    t[34]), /*hovered_group*/
    t[35] !== void 0 && (S.hovered_group = /*hovered_group*/
    t[35]), /*hovered_color*/
    t[36] !== void 0 && (S.hovered_color = /*hovered_color*/
    t[36]), /*hovered_y*/
    t[32] !== void 0 && (S.hovered_y = /*hovered_y*/
    t[32]), i = new Cv({ props: S }), _t.push(() => Ot(i, "hovered_x_start", d)), _t.push(() => Ot(i, "hovered_x_end", h)), _t.push(() => Ot(i, "hovered_group", g)), _t.push(() => Ot(i, "hovered_color", w)), _t.push(() => Ot(i, "hovered_y", p)), {
      key: e,
      first: null,
      c() {
        n = Le(), Ke(i.$$.fragment), this.first = n;
      },
      m(x, M) {
        j(x, n, M), Ze(i, x, M), c = !0;
      },
      p(x, M) {
        t = x;
        const z = {};
        M[0] & /*filtered_data*/
        268435456 && (z.group = /*group*/
        t[90]), M[0] & /*xScale, filtered_data*/
        301989888 && (z.x = /*xScale*/
        t[25](
          /*x_start*/
          t[86]
        )), M[0] & /*yScale, filtered_data*/
        335544320 && (z.y = /*yScale*/
        t[26](
          /*y*/
          t[88]
        )), M[0] & /*filtered_data*/
        268435456 && (z.x_start = /*x_start*/
        t[86]), M[0] & /*filtered_data*/
        268435456 && (z.x_end = /*x_end*/
        t[87]), M[0] & /*filtered_data*/
        268435456 && (z.y_value = /*y*/
        t[88]), M[0] & /*xScale, filtered_data*/
        301989888 && (z.width = /*xScale*/
        t[25](
          /*x_end*/
          t[87]
        ) - /*xScale*/
        t[25](
          /*x_start*/
          t[86]
        )), M[0] & /*yScale, filtered_data*/
        335544320 && (z.height = /*yScale*/
        t[26](0) - /*yScale*/
        t[26](
          /*y*/
          t[88]
        )), M[0] & /*filtered_data*/
        268435456 && (z.color = /*colors*/
        t[89]), M[1] & /*hover_legend*/
        1 && (z.hover_legend = /*hover_legend*/
        t[31]), M[0] & /*filtered_data*/
        268435456 && (z.opacity = /*opacity*/
        t[91]), M[0] & /*current_categories*/
        536870912 && (z.current_categories = /*current_categories*/
        t[29]), !l && M[1] & /*hovered_x_start*/
        4 && (l = !0, z.hovered_x_start = /*hovered_x_start*/
        t[33], It(() => l = !1)), !f && M[1] & /*hovered_x_end*/
        8 && (f = !0, z.hovered_x_end = /*hovered_x_end*/
        t[34], It(() => f = !1)), !u && M[1] & /*hovered_group*/
        16 && (u = !0, z.hovered_group = /*hovered_group*/
        t[35], It(() => u = !1)), !a && M[1] & /*hovered_color*/
        32 && (a = !0, z.hovered_color = /*hovered_color*/
        t[36], It(() => a = !1)), !_ && M[1] & /*hovered_y*/
        2 && (_ = !0, z.hovered_y = /*hovered_y*/
        t[32], It(() => _ = !1)), i.$set(z);
      },
      i(x) {
        c || (ee(i.$$.fragment, x), c = !0);
      },
      o(x) {
        ue(i.$$.fragment, x), c = !1;
      },
      d(x) {
        x && Z(n), je(i, x);
      }
    }
  );
}
function _c(e) {
  let t, n;
  return t = new Rv({
    props: {
      xScale: (
        /*xScale*/
        e[25]
      ),
      yScale: (
        /*yScale*/
        e[26]
      ),
      hovered_x_start: (
        /*hovered_x_start*/
        e[33]
      ),
      hovered_x_end: (
        /*hovered_x_end*/
        e[34]
      ),
      hovered_group: (
        /*hovered_group*/
        e[35]
      ),
      hovered_color: (
        /*hovered_color*/
        e[36]
      ),
      hovered_y: (
        /*hovered_y*/
        e[32]
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l[0] & /*xScale*/
      33554432 && (f.xScale = /*xScale*/
      i[25]), l[0] & /*yScale*/
      67108864 && (f.yScale = /*yScale*/
      i[26]), l[1] & /*hovered_x_start*/
      4 && (f.hovered_x_start = /*hovered_x_start*/
      i[33]), l[1] & /*hovered_x_end*/
      8 && (f.hovered_x_end = /*hovered_x_end*/
      i[34]), l[1] & /*hovered_group*/
      16 && (f.hovered_group = /*hovered_group*/
      i[35]), l[1] & /*hovered_color*/
      32 && (f.hovered_color = /*hovered_color*/
      i[36]), l[1] & /*hovered_y*/
      2 && (f.hovered_y = /*hovered_y*/
      i[32]), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function Iv(e) {
  let t, n, i, l, f, u = [], a = /* @__PURE__ */ new Map(), _, c, d, h, g = [], w = /* @__PURE__ */ new Map(), p, S, x, M = [], z = /* @__PURE__ */ new Map(), C, P, O, E, B, D = (
    /*header*/
    e[2] && lc(e)
  ), te = (
    /*show_legend*/
    e[1] && oc(e)
  ), W = ke(
    /*xScale*/
    e[25].ticks(
      /*xaxis_ticks*/
      e[9]
    )
  );
  const K = (H) => (
    /*tickValue*/
    H[95].toString()
  );
  for (let H = 0; H < W.length; H += 1) {
    let A = ic(e, W, H), R = K(A);
    a.set(R, u[H] = uc(R, A));
  }
  let se = ke(
    /*yScale*/
    e[26].ticks(
      /*yaxis_ticks*/
      e[18]
    )
  );
  const ce = (H) => (
    /*tickValue*/
    H[95]
  );
  for (let H = 0; H < se.length; H += 1) {
    let A = nc(e, se, H), R = ce(A);
    w.set(R, g[H] = ac(R, A));
  }
  let fe = ke(
    /*filtered_data*/
    e[28]
  );
  const re = (H) => (
    /*id*/
    H[92]
  );
  for (let H = 0; H < fe.length; H += 1) {
    let A = tc(e, fe, H), R = re(A);
    z.set(R, M[H] = sc(R, A));
  }
  let J = (
    /*hovered_group*/
    e[35] && _c(e)
  );
  return {
    c() {
      D && D.c(), t = ve(), n = _e("div"), te && te.c(), i = ve(), l = _e("div"), f = ze("svg");
      for (let H = 0; H < u.length; H += 1)
        u[H].c();
      _ = ze("text"), c = Ae(
        /*x_label*/
        e[17]
      );
      for (let H = 0; H < g.length; H += 1)
        g[H].c();
      p = ze("text"), S = Ae(
        /*y_label*/
        e[21]
      );
      for (let H = 0; H < M.length; H += 1)
        M[H].c();
      C = ve(), J && J.c(), v(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "center"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(n, "margin-bottom", "0.25rem"), y(
        _,
        "font-size",
        /*font_size_xaxis*/
        e[13] + "px"
      ), v(_, "x", d = /*width*/
      (e[0] - Cr - /*y_lines_spacing*/
      e[38]) / 2), v(_, "y", h = /*height*/
      e[8] - /*label_height_x_axis*/
      e[24]), y(p, "text-anchor", "middle"), y(
        p,
        "font-size",
        /*font_size_yaxis*/
        e[19] + "px"
      ), y(p, "font-family", "Arial, sans-serif"), v(p, "transform", x = `translate(${/*label_height*/
      e[23]},${/*x_lines_spacing*/
      (e[37] + Cr) / 2}) rotate(-90)`), v(
        f,
        "width",
        /*width*/
        e[0]
      ), v(
        f,
        "height",
        /*height*/
        e[8]
      ), v(l, "class", "chart"), y(l, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[74].call(l)
      ));
    },
    m(H, A) {
      D && D.m(H, A), j(H, t, A), j(H, n, A), te && te.m(n, null), j(H, i, A), j(H, l, A), q(l, f);
      for (let R = 0; R < u.length; R += 1)
        u[R] && u[R].m(f, null);
      q(f, _), q(_, c);
      for (let R = 0; R < g.length; R += 1)
        g[R] && g[R].m(f, null);
      q(f, p), q(p, S);
      for (let R = 0; R < M.length; R += 1)
        M[R] && M[R].m(f, null);
      q(l, C), J && J.m(l, null), P = ir(
        l,
        /*div1_elementresize_handler*/
        e[74].bind(l)
      ), O = !0, E || (B = ot(
        n,
        "mouseleave",
        /*mouseleave_handler*/
        e[68]
      ), E = !0);
    },
    p(H, A) {
      /*header*/
      H[2] ? D ? D.p(H, A) : (D = lc(H), D.c(), D.m(t.parentNode, t)) : D && (D.d(1), D = null), /*show_legend*/
      H[1] ? te ? te.p(H, A) : (te = oc(H), te.c(), te.m(n, null)) : te && (te.d(1), te = null), A[0] & /*xScale, xaxis_ticks, width, rotation_xaxis, font_size_xticks, dx, dy, dominant_baseline_x_axis, text_anchor_x_axis*/
      33676801 | A[1] & /*x_ticks_spacing, x_lines_spacing, format_x_axis*/
      832 && (W = ke(
        /*xScale*/
        H[25].ticks(
          /*xaxis_ticks*/
          H[9]
        )
      ), We(), u = kn(u, A, K, 1, H, W, a, f, Kn, uc, _, ic), Be()), (!O || A[0] & /*x_label*/
      131072) && Oe(
        c,
        /*x_label*/
        H[17]
      ), (!O || A[0] & /*font_size_xaxis*/
      8192) && y(
        _,
        "font-size",
        /*font_size_xaxis*/
        H[13] + "px"
      ), (!O || A[0] & /*width*/
      1 | A[1] & /*y_lines_spacing*/
      128 && d !== (d = /*width*/
      (H[0] - Cr - /*y_lines_spacing*/
      H[38]) / 2)) && v(_, "x", d), (!O || A[0] & /*height, label_height_x_axis*/
      16777472 && h !== (h = /*height*/
      H[8] - /*label_height_x_axis*/
      H[24])) && v(_, "y", h), A[0] & /*yScale, yaxis_ticks, width, height, format_number, font_size_yticks*/
      1142161665 | A[1] & /*y_lines_spacing*/
      128 && (se = ke(
        /*yScale*/
        H[26].ticks(
          /*yaxis_ticks*/
          H[18]
        )
      ), We(), g = kn(g, A, ce, 1, H, se, w, f, Kn, ac, p, nc), Be()), (!O || A[0] & /*y_label*/
      2097152) && Oe(
        S,
        /*y_label*/
        H[21]
      ), (!O || A[0] & /*font_size_yaxis*/
      524288) && y(
        p,
        "font-size",
        /*font_size_yaxis*/
        H[19] + "px"
      ), (!O || A[0] & /*label_height*/
      8388608 | A[1] & /*x_lines_spacing*/
      64 && x !== (x = `translate(${/*label_height*/
      H[23]},${/*x_lines_spacing*/
      (H[37] + Cr) / 2}) rotate(-90)`)) && v(p, "transform", x), A[0] & /*filtered_data, xScale, yScale, current_categories*/
      905969664 | A[1] & /*hover_legend, hovered_x_start, hovered_x_end, hovered_group, hovered_color, hovered_y*/
      63 && (fe = ke(
        /*filtered_data*/
        H[28]
      ), We(), M = kn(M, A, re, 1, H, fe, z, f, Kn, sc, null, tc), Be()), (!O || A[0] & /*width*/
      1) && v(
        f,
        "width",
        /*width*/
        H[0]
      ), (!O || A[0] & /*height*/
      256) && v(
        f,
        "height",
        /*height*/
        H[8]
      ), /*hovered_group*/
      H[35] ? J ? (J.p(H, A), A[1] & /*hovered_group*/
      16 && ee(J, 1)) : (J = _c(H), J.c(), ee(J, 1), J.m(l, null)) : J && (We(), ue(J, 1, 1, () => {
        J = null;
      }), Be());
    },
    i(H) {
      if (!O) {
        for (let A = 0; A < W.length; A += 1)
          ee(u[A]);
        for (let A = 0; A < se.length; A += 1)
          ee(g[A]);
        for (let A = 0; A < fe.length; A += 1)
          ee(M[A]);
        ee(J), O = !0;
      }
    },
    o(H) {
      for (let A = 0; A < u.length; A += 1)
        ue(u[A]);
      for (let A = 0; A < g.length; A += 1)
        ue(g[A]);
      for (let A = 0; A < M.length; A += 1)
        ue(M[A]);
      ue(J), O = !1;
    },
    d(H) {
      H && (Z(t), Z(n), Z(i), Z(l)), D && D.d(H), te && te.d();
      for (let A = 0; A < u.length; A += 1)
        u[A].d();
      for (let A = 0; A < g.length; A += 1)
        g[A].d();
      for (let A = 0; A < M.length; A += 1)
        M[A].d();
      J && J.d(), P(), E = !1, B();
    }
  };
}
const Ov = 30, Cu = 40;
let Cr = 20;
const Lu = 15, Zu = 5;
function Dv(e, t, n) {
  let i, l, f, u, { data: a = [] } = t, { width: _ = 800 } = t, { show_legend: c } = t, { header: d } = t, { title_align: h } = t, { title_color: g } = t, { title_font_size: w } = t, { title_font_weight: p } = t, { title_padding: S } = t, { height: x = 400 } = t, { xaxis_ticks: M = 6 } = t, { format_xaxis: z } = t, { dx: C = "0em" } = t, { dy: P = "0em" } = t, { rotation_xaxis: O = 0 } = t, { font_size_xaxis: E = 14 } = t, { font_size_xticks: B = 12 } = t, { dominant_baseline_x_axis: D = "middle" } = t, { text_anchor_x_axis: te = "middle" } = t, { x_axis_type: W } = t, { x_label: K } = t, { yaxis_ticks: se = 6 } = t, { format_yaxis: ce = ",.3r" } = t, { font_size_yaxis: fe } = t, { font_size_yticks: re } = t, { format_tooltip: J = "" } = t, { y_label: H } = t, { tooltip_desc: A = "" } = t, { colorRange: R = [] } = t, { color_mapping: de } = t, { annotation_dates: he = [] } = t, { legend_text: pt = [] } = t, { scale_x: Kt = "" } = t, { annotation_lines: Je = 2 } = t, { colours: Ue = [] } = t, { tooltip: $e = "vertical_line" } = t, { interval: at = "day" } = t, { type: Xe = "" } = t, { show_bar_labels: ae } = t, { position: me } = t, { colour_text: be } = t, { mode: Q } = t;
  function Ce(V) {
    let tt = [];
    tt = Object.keys(gt).filter((Ct) => !V.includes(Ct));
    for (let Ct = 0; Ct < V.length; Ct++)
      n(27, gt[V[Ct]] = !0, gt);
    for (let Ct = 0; Ct < tt.length; Ct++)
      n(27, gt[tt[Ct]] = !1, gt);
    return [gt, tt];
  }
  let ye = Cu, He = 20, Qe = Cu, et, qe = 10, Y, le, Me, xt, Mt, Xt, gt = {}, Tt, $t, yt, St, en, Nn = [], tn, ln, Jn = x - 40, cn = 40;
  function Mn() {
    let tt = document.createElement("canvas").getContext("2d");
    tt.font = `${re}px Arial`, n(60, ye = tt.measureText(ln).width), tt.font = `${fe}px Arial`, tt.measureText(H).width, n(23, qe = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1), tt.font = `${B}px Arial`, Qe = tt.measureText(u).width, et = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1, tt.font = `${E}px Arial`, n(24, Y = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1), n(61, He = ca(Qe, et, O)), n(37, Jn = x - He - Y - et - Lu - Zu), n(38, cn = ye + qe + Lu + Zu);
  }
  Qu(Mn);
  let on, Tn;
  const zt = (V) => n(31, le = V), Un = (V) => n(27, gt[V] = !gt[V], gt), gn = () => n(31, le = null);
  function At(V) {
    $t = V, n(33, $t);
  }
  function Sn(V) {
    yt = V, n(34, yt);
  }
  function zn(V) {
    St = V, n(35, St);
  }
  function Qn(V) {
    en = V, n(36, en);
  }
  function Vn(V) {
    Tt = V, n(32, Tt);
  }
  function An() {
    _ = this.clientWidth, n(0, _);
  }
  return e.$$set = (V) => {
    "data" in V && n(41, a = V.data), "width" in V && n(0, _ = V.width), "show_legend" in V && n(1, c = V.show_legend), "header" in V && n(2, d = V.header), "title_align" in V && n(3, h = V.title_align), "title_color" in V && n(4, g = V.title_color), "title_font_size" in V && n(5, w = V.title_font_size), "title_font_weight" in V && n(6, p = V.title_font_weight), "title_padding" in V && n(7, S = V.title_padding), "height" in V && n(8, x = V.height), "xaxis_ticks" in V && n(9, M = V.xaxis_ticks), "format_xaxis" in V && n(42, z = V.format_xaxis), "dx" in V && n(10, C = V.dx), "dy" in V && n(11, P = V.dy), "rotation_xaxis" in V && n(12, O = V.rotation_xaxis), "font_size_xaxis" in V && n(13, E = V.font_size_xaxis), "font_size_xticks" in V && n(14, B = V.font_size_xticks), "dominant_baseline_x_axis" in V && n(15, D = V.dominant_baseline_x_axis), "text_anchor_x_axis" in V && n(16, te = V.text_anchor_x_axis), "x_axis_type" in V && n(43, W = V.x_axis_type), "x_label" in V && n(17, K = V.x_label), "yaxis_ticks" in V && n(18, se = V.yaxis_ticks), "format_yaxis" in V && n(44, ce = V.format_yaxis), "font_size_yaxis" in V && n(19, fe = V.font_size_yaxis), "font_size_yticks" in V && n(20, re = V.font_size_yticks), "format_tooltip" in V && n(45, J = V.format_tooltip), "y_label" in V && n(21, H = V.y_label), "tooltip_desc" in V && n(46, A = V.tooltip_desc), "colorRange" in V && n(47, R = V.colorRange), "color_mapping" in V && n(22, de = V.color_mapping), "annotation_dates" in V && n(48, he = V.annotation_dates), "legend_text" in V && n(49, pt = V.legend_text), "scale_x" in V && n(50, Kt = V.scale_x), "annotation_lines" in V && n(51, Je = V.annotation_lines), "colours" in V && n(52, Ue = V.colours), "tooltip" in V && n(53, $e = V.tooltip), "interval" in V && n(54, at = V.interval), "type" in V && n(55, Xe = V.type), "show_bar_labels" in V && n(56, ae = V.show_bar_labels), "position" in V && n(57, me = V.position), "colour_text" in V && n(58, be = V.colour_text), "mode" in V && n(59, Q = V.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty[1] & /*data*/
    1024 | e.$$.dirty[2] & /*names*/
    1 && (n(62, Me = [...new Set(a.map((V) => V.group))]), n(27, gt = Ce(Me)[0]), Ce(Me)[1]), e.$$.dirty[0] & /*categories*/
    134217728 && n(29, tn = Object.keys(gt).filter((V) => gt[V])), e.$$.dirty[2] & /*names*/
    1 && n(29, tn = Me), e.$$.dirty[1] & /*format_yaxis*/
    8192 && n(30, i = hn(ce)), e.$$.dirty[0] & /*current_categories, filtered_data, width, height*/
    805306625 | e.$$.dirty[1] & /*data, x_ticks_label_rotation_buffer, ticks_label_width*/
    1610613760 | e.$$.dirty[2] & /*scales*/
    2 && (n(28, Nn = a.filter(({ group: V }) => tn.includes(V))), n(63, Xt = Pw(Nn, _, x, Cu, Ov, He, ye + 10)), n(25, xt = Xt[0]), n(26, Mt = Xt[1])), e.$$.dirty[0] & /*yScale, yaxis_ticks*/
    67371008 && n(65, l = Mt.ticks(se)), e.$$.dirty[0] & /*format_number*/
    1073741824 | e.$$.dirty[2] & /*ticks*/
    8) {
      let V = 0;
      l.forEach((tt) => {
        const Ct = i(tt).toString();
        Ct.length > V && (V = Ct.length, ln = Ct);
      });
    }
    e.$$.dirty[0] & /*height, label_height_x_axis*/
    16777472 | e.$$.dirty[1] & /*x_ticks_label_rotation_buffer*/
    1073741824 && n(40, f = x - He - Y - Lu), e.$$.dirty[0] & /*label_height*/
    8388608, e.$$.dirty[0] & /*xScale, xaxis_ticks*/
    33554944 | e.$$.dirty[1] & /*format_xaxis*/
    2048 && (n(39, on = hn(z)), n(64, Tn = xt.ticks(M).map((V) => hn(V)))), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    4 && (u = Tn.reduce((V, tt) => V.length > tt.length ? V : tt));
  }, [
    _,
    c,
    d,
    h,
    g,
    w,
    p,
    S,
    x,
    M,
    C,
    P,
    O,
    E,
    B,
    D,
    te,
    K,
    se,
    fe,
    re,
    H,
    de,
    qe,
    Y,
    xt,
    Mt,
    gt,
    Nn,
    tn,
    i,
    le,
    Tt,
    $t,
    yt,
    St,
    en,
    Jn,
    cn,
    on,
    f,
    a,
    z,
    W,
    ce,
    J,
    A,
    R,
    he,
    pt,
    Kt,
    Je,
    Ue,
    $e,
    at,
    Xe,
    ae,
    me,
    be,
    Q,
    ye,
    He,
    Me,
    Xt,
    Tn,
    l,
    zt,
    Un,
    gn,
    At,
    Sn,
    zn,
    Qn,
    Vn,
    An
  ];
}
class Nv extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      Dv,
      Iv,
      ut,
      {
        data: 41,
        width: 0,
        show_legend: 1,
        header: 2,
        title_align: 3,
        title_color: 4,
        title_font_size: 5,
        title_font_weight: 6,
        title_padding: 7,
        height: 8,
        xaxis_ticks: 9,
        format_xaxis: 42,
        dx: 10,
        dy: 11,
        rotation_xaxis: 12,
        font_size_xaxis: 13,
        font_size_xticks: 14,
        dominant_baseline_x_axis: 15,
        text_anchor_x_axis: 16,
        x_axis_type: 43,
        x_label: 17,
        yaxis_ticks: 18,
        format_yaxis: 44,
        font_size_yaxis: 19,
        font_size_yticks: 20,
        format_tooltip: 45,
        y_label: 21,
        tooltip_desc: 46,
        colorRange: 47,
        color_mapping: 22,
        annotation_dates: 48,
        legend_text: 49,
        scale_x: 50,
        annotation_lines: 51,
        colours: 52,
        tooltip: 53,
        interval: 54,
        type: 55,
        show_bar_labels: 56,
        position: 57,
        colour_text: 58,
        mode: 59
      },
      null,
      [-1, -1, -1, -1]
    );
  }
}
function Uv(e) {
  d6(e, "svelte-xvrzmb", "body{background-color:#fafafa}svg{color:black}.chart-grid.svelte-xvrzmb{display:grid;gap:16px}");
}
function hc(e, t, n) {
  const i = e.slice();
  return i[6] = t[n], i;
}
function cc(e) {
  let t, n, i = [], l = /* @__PURE__ */ new Map(), f, u, a = ke(
    /*debouncedListInput*/
    e[0]
  );
  const _ = (c) => (
    /*input*/
    c[6].id
  );
  for (let c = 0; c < a.length; c += 1) {
    let d = hc(e, a, c), h = _(d);
    l.set(h, i[c] = gc(h, d));
  }
  return {
    c() {
      t = _e("div"), n = _e("div");
      for (let c = 0; c < i.length; c += 1)
        i[c].c();
      v(n, "class", "chart-grid svelte-xvrzmb"), y(n, "grid-template-columns", "repeat(" + /*debouncedListInput*/
      (e[0][0].facet_col ? (
        /*debouncedListInput*/
        e[0][0].facet_col
      ) : 1) + ", 1fr)"), y(n, "grid-template-rows", "repeat(" + /*debouncedListInput*/
      (e[0][0].facet_row ? (
        /*debouncedListInput*/
        e[0][0].facet_row
      ) : 1) + ", auto)"), v(t, "class", "chart-container"), y(t, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[3].call(t)
      ));
    },
    m(c, d) {
      j(c, t, d), q(t, n);
      for (let h = 0; h < i.length; h += 1)
        i[h] && i[h].m(n, null);
      f = ir(
        t,
        /*div1_elementresize_handler*/
        e[3].bind(t)
      ), u = !0;
    },
    p(c, d) {
      d & /*debouncedListInput, containerWidth*/
      3 && (a = ke(
        /*debouncedListInput*/
        c[0]
      ), We(), i = kn(i, d, _, 1, c, a, l, n, Kn, gc, null, hc), Be()), (!u || d & /*debouncedListInput*/
      1) && y(n, "grid-template-columns", "repeat(" + /*debouncedListInput*/
      (c[0][0].facet_col ? (
        /*debouncedListInput*/
        c[0][0].facet_col
      ) : 1) + ", 1fr)"), (!u || d & /*debouncedListInput*/
      1) && y(n, "grid-template-rows", "repeat(" + /*debouncedListInput*/
      (c[0][0].facet_row ? (
        /*debouncedListInput*/
        c[0][0].facet_row
      ) : 1) + ", auto)");
    },
    i(c) {
      if (!u) {
        for (let d = 0; d < a.length; d += 1)
          ee(i[d]);
        u = !0;
      }
    },
    o(c) {
      for (let d = 0; d < i.length; d += 1)
        ue(i[d]);
      u = !1;
    },
    d(c) {
      c && Z(t);
      for (let d = 0; d < i.length; d += 1)
        i[d].d();
      f();
    }
  };
}
function Pv(e) {
  let t, n;
  return t = new Nv({
    props: {
      data: (
        /*input*/
        e[6].data
      ),
      header: (
        /*input*/
        e[6].header
      ),
      height: (
        /*input*/
        e[6].height
      ),
      legend_text: (
        /*input*/
        e[6].legend_text
      ),
      tooltip_desc: (
        /*input*/
        e[6].tooltip_desc
      ),
      format_tooltip: (
        /*input*/
        e[6].format_tooltip
      ),
      format_yaxis: (
        /*input*/
        e[6].format_yaxis
      ),
      format_xaxis: (
        /*input*/
        e[6].format_xaxis
      ),
      yaxis_ticks: (
        /*input*/
        e[6].yaxis_ticks
      ),
      xaxis_ticks: (
        /*input*/
        e[6].xaxis_ticks
      ),
      annotation_lines: (
        /*input*/
        e[6].annotation_lines
      ),
      annotation_dates: (
        /*input*/
        e[6].annotation_dates
      ),
      colorRange: (
        /*input*/
        e[6].colorRange
      ),
      colours: (
        /*input*/
        e[6].colours
      ),
      tooltip: (
        /*input*/
        e[6].tooltip
      ),
      interval: (
        /*input*/
        e[6].interval
      ),
      type: (
        /*input*/
        e[6].type
      ),
      x_label: (
        /*input*/
        e[6].x_label
      ),
      y_label: (
        /*input*/
        e[6].y_label
      ),
      scale_x: (
        /*input*/
        e[6].scale_x
      ),
      width: (
        /*containerWidth*/
        e[1] / /*input*/
        (e[6].facet_col ? (
          /*input*/
          e[6].facet_col
        ) : 1) - 32
      ),
      scale_y: (
        /*input*/
        e[6].scale_y
      ),
      font_size_yaxis: (
        /*input*/
        e[6].font_size_yaxis
      ),
      font_size_xaxis: (
        /*input*/
        e[6].font_size_xaxis
      ),
      font_size_yticks: (
        /*input*/
        e[6].font_size_yticks
      ),
      font_size_xticks: (
        /*input*/
        e[6].font_size_xticks
      ),
      grid_lines: (
        /*input*/
        e[6].grid_lines
      ),
      show_legend: (
        /*input*/
        e[6].show_legend
      ),
      rotation_xaxis: (
        /*input*/
        e[6].rotation_xaxis
      ),
      show_bar_labels: (
        /*input*/
        e[6].show_bar_labels
      ),
      position: (
        /*input*/
        e[6].position
      ),
      colour_text: (
        /*input*/
        e[6].colour_text
      ),
      mode: (
        /*input*/
        e[6].mode
      ),
      color_mapping: (
        /*input*/
        e[6].color_mapping
      ),
      dx: (
        /*input*/
        e[6].dx
      ),
      dy: (
        /*input*/
        e[6].dy
      ),
      dominant_baseline_x_axis: (
        /*input*/
        e[6].dominant_baseline_x_axis
      ),
      text_anchor_x_axis: (
        /*input*/
        e[6].text_anchor_x_axis
      ),
      title_align: (
        /*input*/
        e[6].title_align
      ),
      title_color: (
        /*input*/
        e[6].title_color
      ),
      title_font_size: (
        /*input*/
        e[6].title_font_size
      ),
      title_font_weight: (
        /*input*/
        e[6].title_font_weight
      ),
      title_padding: (
        /*input*/
        e[6].title_padding
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l & /*debouncedListInput*/
      1 && (f.data = /*input*/
      i[6].data), l & /*debouncedListInput*/
      1 && (f.header = /*input*/
      i[6].header), l & /*debouncedListInput*/
      1 && (f.height = /*input*/
      i[6].height), l & /*debouncedListInput*/
      1 && (f.legend_text = /*input*/
      i[6].legend_text), l & /*debouncedListInput*/
      1 && (f.tooltip_desc = /*input*/
      i[6].tooltip_desc), l & /*debouncedListInput*/
      1 && (f.format_tooltip = /*input*/
      i[6].format_tooltip), l & /*debouncedListInput*/
      1 && (f.format_yaxis = /*input*/
      i[6].format_yaxis), l & /*debouncedListInput*/
      1 && (f.format_xaxis = /*input*/
      i[6].format_xaxis), l & /*debouncedListInput*/
      1 && (f.yaxis_ticks = /*input*/
      i[6].yaxis_ticks), l & /*debouncedListInput*/
      1 && (f.xaxis_ticks = /*input*/
      i[6].xaxis_ticks), l & /*debouncedListInput*/
      1 && (f.annotation_lines = /*input*/
      i[6].annotation_lines), l & /*debouncedListInput*/
      1 && (f.annotation_dates = /*input*/
      i[6].annotation_dates), l & /*debouncedListInput*/
      1 && (f.colorRange = /*input*/
      i[6].colorRange), l & /*debouncedListInput*/
      1 && (f.colours = /*input*/
      i[6].colours), l & /*debouncedListInput*/
      1 && (f.tooltip = /*input*/
      i[6].tooltip), l & /*debouncedListInput*/
      1 && (f.interval = /*input*/
      i[6].interval), l & /*debouncedListInput*/
      1 && (f.type = /*input*/
      i[6].type), l & /*debouncedListInput*/
      1 && (f.x_label = /*input*/
      i[6].x_label), l & /*debouncedListInput*/
      1 && (f.y_label = /*input*/
      i[6].y_label), l & /*debouncedListInput*/
      1 && (f.scale_x = /*input*/
      i[6].scale_x), l & /*containerWidth, debouncedListInput*/
      3 && (f.width = /*containerWidth*/
      i[1] / /*input*/
      (i[6].facet_col ? (
        /*input*/
        i[6].facet_col
      ) : 1) - 32), l & /*debouncedListInput*/
      1 && (f.scale_y = /*input*/
      i[6].scale_y), l & /*debouncedListInput*/
      1 && (f.font_size_yaxis = /*input*/
      i[6].font_size_yaxis), l & /*debouncedListInput*/
      1 && (f.font_size_xaxis = /*input*/
      i[6].font_size_xaxis), l & /*debouncedListInput*/
      1 && (f.font_size_yticks = /*input*/
      i[6].font_size_yticks), l & /*debouncedListInput*/
      1 && (f.font_size_xticks = /*input*/
      i[6].font_size_xticks), l & /*debouncedListInput*/
      1 && (f.grid_lines = /*input*/
      i[6].grid_lines), l & /*debouncedListInput*/
      1 && (f.show_legend = /*input*/
      i[6].show_legend), l & /*debouncedListInput*/
      1 && (f.rotation_xaxis = /*input*/
      i[6].rotation_xaxis), l & /*debouncedListInput*/
      1 && (f.show_bar_labels = /*input*/
      i[6].show_bar_labels), l & /*debouncedListInput*/
      1 && (f.position = /*input*/
      i[6].position), l & /*debouncedListInput*/
      1 && (f.colour_text = /*input*/
      i[6].colour_text), l & /*debouncedListInput*/
      1 && (f.mode = /*input*/
      i[6].mode), l & /*debouncedListInput*/
      1 && (f.color_mapping = /*input*/
      i[6].color_mapping), l & /*debouncedListInput*/
      1 && (f.dx = /*input*/
      i[6].dx), l & /*debouncedListInput*/
      1 && (f.dy = /*input*/
      i[6].dy), l & /*debouncedListInput*/
      1 && (f.dominant_baseline_x_axis = /*input*/
      i[6].dominant_baseline_x_axis), l & /*debouncedListInput*/
      1 && (f.text_anchor_x_axis = /*input*/
      i[6].text_anchor_x_axis), l & /*debouncedListInput*/
      1 && (f.title_align = /*input*/
      i[6].title_align), l & /*debouncedListInput*/
      1 && (f.title_color = /*input*/
      i[6].title_color), l & /*debouncedListInput*/
      1 && (f.title_font_size = /*input*/
      i[6].title_font_size), l & /*debouncedListInput*/
      1 && (f.title_font_weight = /*input*/
      i[6].title_font_weight), l & /*debouncedListInput*/
      1 && (f.title_padding = /*input*/
      i[6].title_padding), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function Fv(e) {
  let t, n;
  return t = new Sv({
    props: {
      data: (
        /*input*/
        e[6].data
      ),
      header: (
        /*input*/
        e[6].header
      ),
      height: (
        /*input*/
        e[6].height
      ),
      legend_text: (
        /*input*/
        e[6].legend_text
      ),
      tooltip_desc: (
        /*input*/
        e[6].tooltip_desc
      ),
      format_tooltip: (
        /*input*/
        e[6].format_tooltip
      ),
      format_yaxis: (
        /*input*/
        e[6].format_yaxis
      ),
      format_xaxis: (
        /*input*/
        e[6].format_xaxis
      ),
      yaxis_ticks: (
        /*input*/
        e[6].yaxis_ticks
      ),
      xaxis_ticks: (
        /*input*/
        e[6].xaxis_ticks
      ),
      annotation_lines: (
        /*input*/
        e[6].annotation_lines
      ),
      annotation_dates: (
        /*input*/
        e[6].annotation_dates
      ),
      colorRange: (
        /*input*/
        e[6].colorRange
      ),
      colours: (
        /*input*/
        e[6].colours
      ),
      tooltip: (
        /*input*/
        e[6].tooltip
      ),
      interval: (
        /*input*/
        e[6].interval
      ),
      type: (
        /*input*/
        e[6].type
      ),
      x_label: (
        /*input*/
        e[6].x_label
      ),
      y_label: (
        /*input*/
        e[6].y_label
      ),
      scale_x: (
        /*input*/
        e[6].scale_x
      ),
      scale_y: (
        /*input*/
        e[6].scale_y
      ),
      font_size_yaxis: (
        /*input*/
        e[6].font_size_yaxis
      ),
      font_size_xaxis: (
        /*input*/
        e[6].font_size_xaxis
      ),
      font_size_yticks: (
        /*input*/
        e[6].font_size_yticks
      ),
      font_size_xticks: (
        /*input*/
        e[6].font_size_xticks
      ),
      grid_lines: (
        /*input*/
        e[6].grid_lines
      ),
      show_legend: (
        /*input*/
        e[6].show_legend
      ),
      rotation_xaxis: (
        /*input*/
        e[6].rotation_xaxis
      ),
      show_bar_labels: (
        /*input*/
        e[6].show_bar_labels
      ),
      position: (
        /*input*/
        e[6].position
      ),
      colour_text: (
        /*input*/
        e[6].colour_text
      ),
      mode: (
        /*input*/
        e[6].mode
      ),
      color_mapping: (
        /*input*/
        e[6].color_mapping
      ),
      dx: (
        /*input*/
        e[6].dx
      ),
      dy: (
        /*input*/
        e[6].dy
      ),
      dominant_baseline_x_axis: (
        /*input*/
        e[6].dominant_baseline_x_axis
      ),
      text_anchor_x_axis: (
        /*input*/
        e[6].text_anchor_x_axis
      ),
      title_align: (
        /*input*/
        e[6].title_align
      ),
      title_color: (
        /*input*/
        e[6].title_color
      ),
      width: (
        /*containerWidth*/
        e[1] / /*input*/
        (e[6].facet_col ? (
          /*input*/
          e[6].facet_col
        ) : 1) - 32
      ),
      title_font_size: (
        /*input*/
        e[6].title_font_size
      ),
      title_font_weight: (
        /*input*/
        e[6].title_font_weight
      ),
      title_padding: (
        /*input*/
        e[6].title_padding
      ),
      isRotated: (
        /*input*/
        e[6].isRotated
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l & /*debouncedListInput*/
      1 && (f.data = /*input*/
      i[6].data), l & /*debouncedListInput*/
      1 && (f.header = /*input*/
      i[6].header), l & /*debouncedListInput*/
      1 && (f.height = /*input*/
      i[6].height), l & /*debouncedListInput*/
      1 && (f.legend_text = /*input*/
      i[6].legend_text), l & /*debouncedListInput*/
      1 && (f.tooltip_desc = /*input*/
      i[6].tooltip_desc), l & /*debouncedListInput*/
      1 && (f.format_tooltip = /*input*/
      i[6].format_tooltip), l & /*debouncedListInput*/
      1 && (f.format_yaxis = /*input*/
      i[6].format_yaxis), l & /*debouncedListInput*/
      1 && (f.format_xaxis = /*input*/
      i[6].format_xaxis), l & /*debouncedListInput*/
      1 && (f.yaxis_ticks = /*input*/
      i[6].yaxis_ticks), l & /*debouncedListInput*/
      1 && (f.xaxis_ticks = /*input*/
      i[6].xaxis_ticks), l & /*debouncedListInput*/
      1 && (f.annotation_lines = /*input*/
      i[6].annotation_lines), l & /*debouncedListInput*/
      1 && (f.annotation_dates = /*input*/
      i[6].annotation_dates), l & /*debouncedListInput*/
      1 && (f.colorRange = /*input*/
      i[6].colorRange), l & /*debouncedListInput*/
      1 && (f.colours = /*input*/
      i[6].colours), l & /*debouncedListInput*/
      1 && (f.tooltip = /*input*/
      i[6].tooltip), l & /*debouncedListInput*/
      1 && (f.interval = /*input*/
      i[6].interval), l & /*debouncedListInput*/
      1 && (f.type = /*input*/
      i[6].type), l & /*debouncedListInput*/
      1 && (f.x_label = /*input*/
      i[6].x_label), l & /*debouncedListInput*/
      1 && (f.y_label = /*input*/
      i[6].y_label), l & /*debouncedListInput*/
      1 && (f.scale_x = /*input*/
      i[6].scale_x), l & /*debouncedListInput*/
      1 && (f.scale_y = /*input*/
      i[6].scale_y), l & /*debouncedListInput*/
      1 && (f.font_size_yaxis = /*input*/
      i[6].font_size_yaxis), l & /*debouncedListInput*/
      1 && (f.font_size_xaxis = /*input*/
      i[6].font_size_xaxis), l & /*debouncedListInput*/
      1 && (f.font_size_yticks = /*input*/
      i[6].font_size_yticks), l & /*debouncedListInput*/
      1 && (f.font_size_xticks = /*input*/
      i[6].font_size_xticks), l & /*debouncedListInput*/
      1 && (f.grid_lines = /*input*/
      i[6].grid_lines), l & /*debouncedListInput*/
      1 && (f.show_legend = /*input*/
      i[6].show_legend), l & /*debouncedListInput*/
      1 && (f.rotation_xaxis = /*input*/
      i[6].rotation_xaxis), l & /*debouncedListInput*/
      1 && (f.show_bar_labels = /*input*/
      i[6].show_bar_labels), l & /*debouncedListInput*/
      1 && (f.position = /*input*/
      i[6].position), l & /*debouncedListInput*/
      1 && (f.colour_text = /*input*/
      i[6].colour_text), l & /*debouncedListInput*/
      1 && (f.mode = /*input*/
      i[6].mode), l & /*debouncedListInput*/
      1 && (f.color_mapping = /*input*/
      i[6].color_mapping), l & /*debouncedListInput*/
      1 && (f.dx = /*input*/
      i[6].dx), l & /*debouncedListInput*/
      1 && (f.dy = /*input*/
      i[6].dy), l & /*debouncedListInput*/
      1 && (f.dominant_baseline_x_axis = /*input*/
      i[6].dominant_baseline_x_axis), l & /*debouncedListInput*/
      1 && (f.text_anchor_x_axis = /*input*/
      i[6].text_anchor_x_axis), l & /*debouncedListInput*/
      1 && (f.title_align = /*input*/
      i[6].title_align), l & /*debouncedListInput*/
      1 && (f.title_color = /*input*/
      i[6].title_color), l & /*containerWidth, debouncedListInput*/
      3 && (f.width = /*containerWidth*/
      i[1] / /*input*/
      (i[6].facet_col ? (
        /*input*/
        i[6].facet_col
      ) : 1) - 32), l & /*debouncedListInput*/
      1 && (f.title_font_size = /*input*/
      i[6].title_font_size), l & /*debouncedListInput*/
      1 && (f.title_font_weight = /*input*/
      i[6].title_font_weight), l & /*debouncedListInput*/
      1 && (f.title_padding = /*input*/
      i[6].title_padding), l & /*debouncedListInput*/
      1 && (f.isRotated = /*input*/
      i[6].isRotated), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function Wv(e) {
  let t, n;
  return t = new av({
    props: {
      id: (
        /*input*/
        e[6].id
      ),
      data: (
        /*input*/
        e[6].data
      ),
      header: (
        /*input*/
        e[6].header
      ),
      height: (
        /*input*/
        e[6].height
      ),
      format_tooltip: (
        /*input*/
        e[6].format_tooltip
      ),
      format_yaxis: (
        /*input*/
        e[6].format_yaxis
      ),
      format_xaxis: (
        /*input*/
        e[6].format_xaxis
      ),
      yaxis_ticks: (
        /*input*/
        e[6].yaxis_ticks
      ),
      xaxis_ticks: (
        /*input*/
        e[6].xaxis_ticks
      ),
      tooltip: (
        /*input*/
        e[6].tooltip
      ),
      interval: (
        /*input*/
        e[6].interval
      ),
      type: (
        /*input*/
        e[6].type
      ),
      x_label: (
        /*input*/
        e[6].x_label
      ),
      y_label: (
        /*input*/
        e[6].y_label
      ),
      scale_x: (
        /*input*/
        e[6].scale_x
      ),
      font_size_yaxis: (
        /*input*/
        e[6].font_size_yaxis
      ),
      font_size_xaxis: (
        /*input*/
        e[6].font_size_xaxis
      ),
      font_size_yticks: (
        /*input*/
        e[6].font_size_yticks
      ),
      font_size_xticks: (
        /*input*/
        e[6].font_size_xticks
      ),
      time_interval: (
        /*input*/
        e[6].time_interval
      ),
      show_legend: (
        /*input*/
        e[6].show_legend
      ),
      rotation_xaxis: (
        /*input*/
        e[6].rotation_xaxis
      ),
      x_axis_type: (
        /*input*/
        e[6].x_axis_type
      ),
      segments: (
        /*input*/
        e[6].segments
      ),
      segments_df: (
        /*input*/
        e[6].add_segments_df
      ),
      annotations: (
        /*input*/
        e[6].annotations
      ),
      annotations_df: (
        /*input*/
        e[6].add_annotations_df
      ),
      arrows: (
        /*input*/
        e[6].arrows
      ),
      arrows_df: (
        /*input*/
        e[6].add_arrows_df
      ),
      show_legend_segments: (
        /*input*/
        e[6].show_legend_segments
      ),
      dx: (
        /*input*/
        e[6].dx
      ),
      dy: (
        /*input*/
        e[6].dy
      ),
      dominant_baseline_x_axis: (
        /*input*/
        e[6].dominant_baseline_x_axis
      ),
      text_anchor_x_axis: (
        /*input*/
        e[6].text_anchor_x_axis
      ),
      title_align: (
        /*input*/
        e[6].title_align
      ),
      title_color: (
        /*input*/
        e[6].title_color
      ),
      title_font_size: (
        /*input*/
        e[6].title_font_size
      ),
      title_font_weight: (
        /*input*/
        e[6].title_font_weight
      ),
      title_padding: (
        /*input*/
        e[6].title_padding
      ),
      time_series_interval: (
        /*input*/
        e[6].time_series_interval
      ),
      custom_tooltip_data: (
        /*input*/
        e[6].custom_tooltip_data
      ),
      width: (
        /*containerWidth*/
        e[1] / /*input*/
        (e[6].facet_col ? (
          /*input*/
          e[6].facet_col
        ) : 1) - 32
      ),
      background_color_tt: (
        /*input*/
        e[6].background_color_tt
      ),
      opacity_tt: (
        /*input*/
        e[6].opacity_tt
      ),
      x_range: (
        /*input*/
        e[6].x_range
      ),
      y_range: (
        /*input*/
        e[6].y_range
      ),
      animation_params_list: (
        /*input*/
        e[6].animation_params_list
      ),
      justify_content_tooltip: (
        /*input*/
        e[6].justify_content_tooltip
      ),
      font_size_tooltip: (
        /*input*/
        e[6].font_size_tooltip
      ),
      text_color_tooltip: (
        /*input*/
        e[6].text_color_tooltip
      ),
      border_color_tooltip: (
        /*input*/
        e[6].border_color_tooltip
      ),
      show_delay_tooltip: (
        /*input*/
        e[6].show_delay_tooltip
      ),
      border_style_tooltip: (
        /*input*/
        e[6].border_style_tooltip
      ),
      border_width_tooltip: (
        /*input*/
        e[6].border_width_tooltip
      ),
      tooltip_position: (
        /*input*/
        e[6].tooltip_position
      ),
      crosshair: (
        /*input*/
        e[6].crosshair
      ),
      line_type_axis_trigger: (
        /*input*/
        e[6].line_type_axis_trigger
      ),
      custom_css_header: (
        /*input*/
        e[6].custom_css_header
      )
    }
  }), {
    c() {
      Ke(t.$$.fragment);
    },
    m(i, l) {
      Ze(t, i, l), n = !0;
    },
    p(i, l) {
      const f = {};
      l & /*debouncedListInput*/
      1 && (f.id = /*input*/
      i[6].id), l & /*debouncedListInput*/
      1 && (f.data = /*input*/
      i[6].data), l & /*debouncedListInput*/
      1 && (f.header = /*input*/
      i[6].header), l & /*debouncedListInput*/
      1 && (f.height = /*input*/
      i[6].height), l & /*debouncedListInput*/
      1 && (f.format_tooltip = /*input*/
      i[6].format_tooltip), l & /*debouncedListInput*/
      1 && (f.format_yaxis = /*input*/
      i[6].format_yaxis), l & /*debouncedListInput*/
      1 && (f.format_xaxis = /*input*/
      i[6].format_xaxis), l & /*debouncedListInput*/
      1 && (f.yaxis_ticks = /*input*/
      i[6].yaxis_ticks), l & /*debouncedListInput*/
      1 && (f.xaxis_ticks = /*input*/
      i[6].xaxis_ticks), l & /*debouncedListInput*/
      1 && (f.tooltip = /*input*/
      i[6].tooltip), l & /*debouncedListInput*/
      1 && (f.interval = /*input*/
      i[6].interval), l & /*debouncedListInput*/
      1 && (f.type = /*input*/
      i[6].type), l & /*debouncedListInput*/
      1 && (f.x_label = /*input*/
      i[6].x_label), l & /*debouncedListInput*/
      1 && (f.y_label = /*input*/
      i[6].y_label), l & /*debouncedListInput*/
      1 && (f.scale_x = /*input*/
      i[6].scale_x), l & /*debouncedListInput*/
      1 && (f.font_size_yaxis = /*input*/
      i[6].font_size_yaxis), l & /*debouncedListInput*/
      1 && (f.font_size_xaxis = /*input*/
      i[6].font_size_xaxis), l & /*debouncedListInput*/
      1 && (f.font_size_yticks = /*input*/
      i[6].font_size_yticks), l & /*debouncedListInput*/
      1 && (f.font_size_xticks = /*input*/
      i[6].font_size_xticks), l & /*debouncedListInput*/
      1 && (f.time_interval = /*input*/
      i[6].time_interval), l & /*debouncedListInput*/
      1 && (f.show_legend = /*input*/
      i[6].show_legend), l & /*debouncedListInput*/
      1 && (f.rotation_xaxis = /*input*/
      i[6].rotation_xaxis), l & /*debouncedListInput*/
      1 && (f.x_axis_type = /*input*/
      i[6].x_axis_type), l & /*debouncedListInput*/
      1 && (f.segments = /*input*/
      i[6].segments), l & /*debouncedListInput*/
      1 && (f.segments_df = /*input*/
      i[6].add_segments_df), l & /*debouncedListInput*/
      1 && (f.annotations = /*input*/
      i[6].annotations), l & /*debouncedListInput*/
      1 && (f.annotations_df = /*input*/
      i[6].add_annotations_df), l & /*debouncedListInput*/
      1 && (f.arrows = /*input*/
      i[6].arrows), l & /*debouncedListInput*/
      1 && (f.arrows_df = /*input*/
      i[6].add_arrows_df), l & /*debouncedListInput*/
      1 && (f.show_legend_segments = /*input*/
      i[6].show_legend_segments), l & /*debouncedListInput*/
      1 && (f.dx = /*input*/
      i[6].dx), l & /*debouncedListInput*/
      1 && (f.dy = /*input*/
      i[6].dy), l & /*debouncedListInput*/
      1 && (f.dominant_baseline_x_axis = /*input*/
      i[6].dominant_baseline_x_axis), l & /*debouncedListInput*/
      1 && (f.text_anchor_x_axis = /*input*/
      i[6].text_anchor_x_axis), l & /*debouncedListInput*/
      1 && (f.title_align = /*input*/
      i[6].title_align), l & /*debouncedListInput*/
      1 && (f.title_color = /*input*/
      i[6].title_color), l & /*debouncedListInput*/
      1 && (f.title_font_size = /*input*/
      i[6].title_font_size), l & /*debouncedListInput*/
      1 && (f.title_font_weight = /*input*/
      i[6].title_font_weight), l & /*debouncedListInput*/
      1 && (f.title_padding = /*input*/
      i[6].title_padding), l & /*debouncedListInput*/
      1 && (f.time_series_interval = /*input*/
      i[6].time_series_interval), l & /*debouncedListInput*/
      1 && (f.custom_tooltip_data = /*input*/
      i[6].custom_tooltip_data), l & /*containerWidth, debouncedListInput*/
      3 && (f.width = /*containerWidth*/
      i[1] / /*input*/
      (i[6].facet_col ? (
        /*input*/
        i[6].facet_col
      ) : 1) - 32), l & /*debouncedListInput*/
      1 && (f.background_color_tt = /*input*/
      i[6].background_color_tt), l & /*debouncedListInput*/
      1 && (f.opacity_tt = /*input*/
      i[6].opacity_tt), l & /*debouncedListInput*/
      1 && (f.x_range = /*input*/
      i[6].x_range), l & /*debouncedListInput*/
      1 && (f.y_range = /*input*/
      i[6].y_range), l & /*debouncedListInput*/
      1 && (f.animation_params_list = /*input*/
      i[6].animation_params_list), l & /*debouncedListInput*/
      1 && (f.justify_content_tooltip = /*input*/
      i[6].justify_content_tooltip), l & /*debouncedListInput*/
      1 && (f.font_size_tooltip = /*input*/
      i[6].font_size_tooltip), l & /*debouncedListInput*/
      1 && (f.text_color_tooltip = /*input*/
      i[6].text_color_tooltip), l & /*debouncedListInput*/
      1 && (f.border_color_tooltip = /*input*/
      i[6].border_color_tooltip), l & /*debouncedListInput*/
      1 && (f.show_delay_tooltip = /*input*/
      i[6].show_delay_tooltip), l & /*debouncedListInput*/
      1 && (f.border_style_tooltip = /*input*/
      i[6].border_style_tooltip), l & /*debouncedListInput*/
      1 && (f.border_width_tooltip = /*input*/
      i[6].border_width_tooltip), l & /*debouncedListInput*/
      1 && (f.tooltip_position = /*input*/
      i[6].tooltip_position), l & /*debouncedListInput*/
      1 && (f.crosshair = /*input*/
      i[6].crosshair), l & /*debouncedListInput*/
      1 && (f.line_type_axis_trigger = /*input*/
      i[6].line_type_axis_trigger), l & /*debouncedListInput*/
      1 && (f.custom_css_header = /*input*/
      i[6].custom_css_header), t.$set(f);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function gc(e, t) {
  let n, i, l, f, u;
  const a = [Wv, Fv, Pv], _ = [];
  function c(d, h) {
    return (
      /*input*/
      d[6].type === "points" || /*input*/
      d[6].type === "timeseries" || /*input*/
      d[6].type === "line" || /*input*/
      d[6].type === "density" ? 0 : (
        /*input*/
        d[6].type === "bar" ? 1 : (
          /*input*/
          d[6].type === "histogram" ? 2 : -1
        )
      )
    );
  }
  return ~(i = c(t)) && (l = _[i] = a[i](t)), {
    key: e,
    first: null,
    c() {
      n = _e("div"), l && l.c(), f = ve(), this.first = n;
    },
    m(d, h) {
      j(d, n, h), ~i && _[i].m(n, null), q(n, f), u = !0;
    },
    p(d, h) {
      t = d;
      let g = i;
      i = c(t), i === g ? ~i && _[i].p(t, h) : (l && (We(), ue(_[g], 1, 1, () => {
        _[g] = null;
      }), Be()), ~i ? (l = _[i], l ? l.p(t, h) : (l = _[i] = a[i](t), l.c()), ee(l, 1), l.m(n, f)) : l = null);
    },
    i(d) {
      u || (ee(l), u = !0);
    },
    o(d) {
      ue(l), u = !1;
    },
    d(d) {
      d && Z(n), ~i && _[i].d();
    }
  };
}
function Bv(e) {
  let t, n, i = (
    /*debouncedListInput*/
    e[0].length > 0 && cc(e)
  );
  return {
    c() {
      i && i.c(), t = Le();
    },
    m(l, f) {
      i && i.m(l, f), j(l, t, f), n = !0;
    },
    p(l, [f]) {
      /*debouncedListInput*/
      l[0].length > 0 ? i ? (i.p(l, f), f & /*debouncedListInput*/
      1 && ee(i, 1)) : (i = cc(l), i.c(), ee(i, 1), i.m(t.parentNode, t)) : i && (We(), ue(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(l) {
      n || (ee(i), n = !0);
    },
    o(l) {
      ue(i), n = !1;
    },
    d(l) {
      l && Z(t), i && i.d(l);
    }
  };
}
function Hv(e, t, n) {
  let i = window.innerWidth, { list_input: l = [] } = t, f = [];
  const u = Jo.debounce(
    (_) => {
      n(0, f = [..._]);
    },
    20
  );
  Vu(() => {
    u.cancel();
  });
  function a() {
    i = this.clientWidth, n(1, i);
  }
  return e.$$set = (_) => {
    "list_input" in _ && n(2, l = _.list_input);
  }, e.$$.update = () => {
    e.$$.dirty & /*list_input*/
    4 && u(l), e.$$.dirty & /*debouncedListInput*/
    1 && console.log("debouncedListInput.length", f);
  }, [f, i, l, a];
}
class Yv extends ct {
  constructor(t) {
    super(), ht(this, t, Hv, Bv, ut, { list_input: 2 }, Uv);
  }
  get list_input() {
    return this.$$.ctx[2];
  }
  set list_input(t) {
    this.$$set({ list_input: t }), $u();
  }
}
customElements.define("linechart-groups-facet", I6(Yv, { list_input: {} }, [], [], !0));
export {
  Yv as MyComponent
};
