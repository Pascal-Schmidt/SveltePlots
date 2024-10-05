var s6 = Object.defineProperty;
var _6 = (e, t, n) => t in e ? s6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Vt = (e, t, n) => (_6(e, typeof t != "symbol" ? t + "" : t, n), n);
function Pe() {
}
const Hr = (e) => e;
function E_(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function cc(e) {
  return e();
}
function R_() {
  return /* @__PURE__ */ Object.create(null);
}
function Zt(e) {
  e.forEach(cc);
}
function Yr(e) {
  return typeof e == "function";
}
function ft(e, t) {
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
function I_(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
const gc = typeof window < "u";
let Ll = gc ? () => window.performance.now() : () => Date.now(), ju = gc ? (e) => requestAnimationFrame(e) : Pe;
const Lr = /* @__PURE__ */ new Set();
function dc(e) {
  Lr.forEach((t) => {
    t.c(e) || (Lr.delete(t), t.f());
  }), Lr.size !== 0 && ju(dc);
}
function El(e) {
  let t;
  return Lr.size === 0 && ju(dc), {
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
function X(e, t) {
  e.appendChild(t);
}
function d6(e, t, n) {
  const i = Ku(e);
  if (!i.getElementById(t)) {
    const l = _e("style");
    l.id = t, l.textContent = n, mc(i, l);
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
  return t.textContent = "/* empty */", mc(Ku(e), t), t.sheet;
}
function mc(e, t) {
  return X(
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
function Ce(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function ze(e) {
  return document.createTextNode(e);
}
function ve() {
  return ze(" ");
}
function Le() {
  return ze("");
}
function dt(e, t, n, i) {
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
let Co;
function b6() {
  if (Co === void 0) {
    Co = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Co = !0;
    }
  }
  return Co;
}
function nr(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const i = _e("iframe");
  i.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  ), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const l = b6();
  let f;
  return l ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", f = dt(
    window,
    "message",
    /** @param {MessageEvent} event */
    (u) => {
      u.source === i.contentWindow && t();
    }
  )) : (i.src = "about:blank", i.onload = () => {
    f = dt(i.contentWindow, "resize", t), t();
  }), X(e, i), () => {
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
    this.e || (this.is_svg ? this.e = Ce(
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
const Uo = /* @__PURE__ */ new Map();
let Po = 0;
function k6(e) {
  let t = 5381, n = e.length;
  for (; n--; )
    t = (t << 5) - t ^ e.charCodeAt(n);
  return t >>> 0;
}
function x6(e, t) {
  const n = { stylesheet: m6(t), rules: {} };
  return Uo.set(e, n), n;
}
function vl(e, t, n, i, l, f, u, a = 0) {
  const _ = 16.666 / i;
  let h = `{
`;
  for (let x = 0; x <= 1; x += _) {
    const T = t + (n - t) * f(x);
    h += x * 100 + `%{${u(T, 1 - T)}}
`;
  }
  const d = h + `100% {${u(n, 1 - n)}}
}`, c = `__svelte_${k6(d)}_${a}`, g = Ku(e), { stylesheet: w, rules: p } = Uo.get(g) || x6(g, e);
  p[c] || (p[c] = !0, w.insertRule(`@keyframes ${c} ${d}`, w.cssRules.length));
  const S = e.style.animation || "";
  return e.style.animation = `${S ? `${S}, ` : ""}${c} ${i}ms linear ${l}ms 1 both`, Po += 1, c;
}
function kl(e, t) {
  const n = (e.style.animation || "").split(", "), i = n.filter(
    t ? (f) => f.indexOf(t) < 0 : (f) => f.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), l = n.length - i.length;
  l && (e.style.animation = i.join(", "), Po -= l, Po || M6());
}
function M6() {
  ju(() => {
    Po || (Uo.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && Z(t);
    }), Uo.clear());
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
    easing: a = Hr,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: _ = Ll() + f,
    // @ts-ignore todo:
    end: h = _ + u,
    tick: d = Pe,
    css: c
  } = n(e, { from: t, to: l }, i);
  let g = !0, w = !1, p;
  function S() {
    c && (p = vl(e, 0, 1, u, f, a, c)), f || (w = !0);
  }
  function x() {
    c && kl(e, p), g = !1;
  }
  return El((T) => {
    if (!w && T >= _ && (w = !0), w && T >= h && (d(1, 0), x()), !g)
      return !1;
    if (w) {
      const z = T - _, C = 0 + 1 * a(z / u);
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
let xl;
function bl(e) {
  xl = e;
}
function yc() {
  if (!xl)
    throw new Error("Function called outside component initialization");
  return xl;
}
function Ju(e) {
  yc().$$.after_update.push(e);
}
function bc(e) {
  yc().$$.on_destroy.push(e);
}
const Sr = [], st = [];
let Er = [];
const Eu = [], wc = /* @__PURE__ */ Promise.resolve();
let Ru = !1;
function pc() {
  Ru || (Ru = !0, wc.then(Qu));
}
function Rl() {
  return pc(), wc;
}
function it(e) {
  Er.push(e);
}
function Rt(e) {
  Eu.push(e);
}
const wu = /* @__PURE__ */ new Set();
let xr = 0;
function Qu() {
  if (xr !== 0)
    return;
  const e = xl;
  do {
    try {
      for (; xr < Sr.length; ) {
        const t = Sr[xr];
        xr++, bl(t), A6(t.$$);
      }
    } catch (t) {
      throw Sr.length = 0, xr = 0, t;
    }
    for (bl(null), Sr.length = 0, xr = 0; st.length; )
      st.pop()();
    for (let t = 0; t < Er.length; t += 1) {
      const n = Er[t];
      wu.has(n) || (wu.add(n), n());
    }
    Er.length = 0;
  } while (Sr.length);
  for (; Eu.length; )
    Eu.pop()();
  Ru = !1, wu.clear(), bl(e);
}
function A6(e) {
  if (e.fragment !== null) {
    e.update(), Zt(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(it);
  }
}
function C6(e) {
  const t = [], n = [];
  Er.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), Er = t;
}
let hl;
function Vu() {
  return hl || (hl = Promise.resolve(), hl.then(() => {
    hl = null;
  })), hl;
}
function Vi(e, t, n) {
  e.dispatchEvent(w6(`${t ? "intro" : "outro"}${n}`));
}
const Oo = /* @__PURE__ */ new Set();
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
  ui.r || Zt(ui.c), ui = ui.p;
}
function te(e, t) {
  e && e.i && (Oo.delete(e), e.i(t));
}
function ue(e, t, n, i) {
  if (e && e.o) {
    if (Oo.has(e))
      return;
    Oo.add(e), ui.c.push(() => {
      Oo.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
const $u = { duration: 0 };
function Fi(e, t, n) {
  const i = { direction: "in" };
  let l = t(e, n, i), f = !1, u, a, _ = 0;
  function h() {
    u && kl(e, u);
  }
  function d() {
    const {
      delay: g = 0,
      duration: w = 300,
      easing: p = Hr,
      tick: S = Pe,
      css: x
    } = l || $u;
    x && (u = vl(e, 0, 1, w, g, p, x, _++)), S(0, 1);
    const T = Ll() + g, z = T + w;
    a && a.abort(), f = !0, it(() => Vi(e, !0, "start")), a = El((C) => {
      if (f) {
        if (C >= z)
          return S(1, 0), Vi(e, !0, "end"), h(), f = !1;
        if (C >= T) {
          const F = p((C - T) / w);
          S(F, 1 - F);
        }
      }
      return f;
    });
  }
  let c = !1;
  return {
    start() {
      c || (c = !0, kl(e), Yr(l) ? (l = l(i), Vu().then(d)) : d());
    },
    invalidate() {
      c = !1;
    },
    end() {
      f && (h(), f = !1);
    }
  };
}
function Ml(e, t, n) {
  const i = { direction: "out" };
  let l = t(e, n, i), f = !0, u;
  const a = ui;
  a.r += 1;
  let _;
  function h() {
    const {
      delay: d = 0,
      duration: c = 300,
      easing: g = Hr,
      tick: w = Pe,
      css: p
    } = l || $u;
    p && (u = vl(e, 1, 0, c, d, g, p));
    const S = Ll() + d, x = S + c;
    it(() => Vi(e, !1, "start")), "inert" in e && (_ = /** @type {HTMLElement} */
    e.inert, e.inert = !0), El((T) => {
      if (f) {
        if (T >= x)
          return w(0, 1), Vi(e, !1, "end"), --a.r || Zt(a.c), !1;
        if (T >= S) {
          const z = g((T - S) / c);
          w(1 - z, z);
        }
      }
      return f;
    });
  }
  return Yr(l) ? Vu().then(() => {
    l = l(i), h();
  }) : h(), {
    end(d) {
      d && "inert" in e && (e.inert = _), d && l.tick && l.tick(1, 0), f && (u && kl(e, u), f = !1);
    }
  };
}
function Pt(e, t, n, i) {
  let f = t(e, n, { direction: "both" }), u = i ? 0 : 1, a = null, _ = null, h = null, d;
  function c() {
    h && kl(e, h);
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
      easing: T = Hr,
      tick: z = Pe,
      css: C
    } = f || $u, F = {
      start: Ll() + S,
      b: p
    };
    p || (F.group = ui, ui.r += 1), "inert" in e && (p ? d !== void 0 && (e.inert = d) : (d = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), a || _ ? _ = F : (C && (c(), h = vl(e, u, p, x, S, T, C)), p && z(0, 1), a = g(F, x), it(() => Vi(e, p, "start")), El((R) => {
      if (_ && R > _.start && (a = g(_, x), _ = null, Vi(e, a.b, "start"), C && (c(), h = vl(
        e,
        u,
        a.b,
        a.duration,
        0,
        T,
        f.css
      ))), a) {
        if (R >= a.end)
          z(u = a.b, 1 - u), Vi(e, a.b, "end"), _ || (a.b ? c() : --a.group.r || Zt(a.group.c)), a = null;
        else if (R >= a.start) {
          const I = R - a.start;
          u = a.a + a.d * T(I / a.duration), z(u, 1 - u);
        }
      }
      return !!(a || _);
    }));
  }
  return {
    run(p) {
      Yr(f) ? Vu().then(() => {
        f = f({ direction: p ? "in" : "out" }), w(p);
      }) : w(p);
    },
    end() {
      c(), a = _ = null;
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
function L6(e, t) {
  e.f(), vc(e, t);
}
function kn(e, t, n, i, l, f, u, a, _, h, d, c) {
  let g = e.length, w = f.length, p = g;
  const S = {};
  for (; p--; )
    S[e[p].key] = p;
  const x = [], T = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C = [];
  for (p = w; p--; ) {
    const G = c(l, f, p), D = n(G);
    let ee = u.get(D);
    ee ? i && C.push(() => ee.p(G, t)) : (ee = h(D, G), ee.c()), T.set(D, x[p] = ee), D in S && z.set(D, Math.abs(p - S[D]));
  }
  const F = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
  function I(G) {
    te(G, 1), G.m(a, d), u.set(G.key, G), d = G.first, w--;
  }
  for (; g && w; ) {
    const G = x[w - 1], D = e[g - 1], ee = G.key, W = D.key;
    G === D ? (d = G.first, g--, w--) : T.has(W) ? !u.has(ee) || F.has(ee) ? I(G) : R.has(W) ? g-- : z.get(ee) > z.get(W) ? (R.add(ee), I(G)) : (F.add(W), g--) : (_(D, u), g--);
  }
  for (; g--; ) {
    const G = e[g];
    T.has(G.key) || _(G, u);
  }
  for (; w; )
    I(x[w - 1]);
  return Zt(C), x;
}
function It(e, t, n) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
}
function Ke(e) {
  e && e.c();
}
function Ze(e, t, n) {
  const { fragment: i, after_update: l } = e.$$;
  i && i.m(t, n), it(() => {
    const f = e.$$.on_mount.map(cc).filter(Yr);
    e.$$.on_destroy ? e.$$.on_destroy.push(...f) : Zt(f), e.$$.on_mount = [];
  }), l.forEach(it);
}
function je(e, t) {
  const n = e.$$;
  n.fragment !== null && (C6(n.after_update), Zt(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function E6(e, t) {
  e.$$.dirty[0] === -1 && (Sr.push(e), pc(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function _t(e, t, n, i, l, f, u = null, a = [-1]) {
  const _ = xl;
  bl(e);
  const h = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: Pe,
    not_equal: l,
    bound: R_(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (_ ? _.$$.context : [])),
    // everything else
    callbacks: R_(),
    dirty: a,
    skip_bound: !1,
    root: t.target || _.$$.root
  };
  u && u(h.root);
  let d = !1;
  if (h.ctx = n ? n(e, t.props || {}, (c, g, ...w) => {
    const p = w.length ? w[0] : g;
    return h.ctx && l(h.ctx[c], h.ctx[c] = p) && (!h.skip_bound && h.bound[c] && h.bound[c](p), d && E6(e, c)), g;
  }) : [], h.update(), d = !0, Zt(h.before_update), h.fragment = i ? i(h.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = y6(t.target);
      h.fragment && h.fragment.l(c), c.forEach(Z);
    } else
      h.fragment && h.fragment.c();
    t.intro && te(e.$$.fragment), Ze(e, t.target, t.anchor), Qu();
  }
  bl(_);
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
            m: function(h, d) {
              j(h, u, d);
            },
            d: function(h) {
              h && Z(u);
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
        u in this.$$d || (this.$$d[u] = Do(u, f.value, this.$$p_d, "toProp"));
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
            const u = Do(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Do(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
function Do(e, t, n, i) {
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
function R6(e, t, n, i, l, f) {
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
        var h;
        _ = Do(a, _, t), this.$$d[a] = _, (h = this.$$c) == null || h.$set({ [a]: _ });
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
class ht {
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
    if (!Yr(n))
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
const I6 = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(I6);
const Mr = [];
function Il(e, t = Pe) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function l(a) {
    if (ft(e, a) && (e = a, n)) {
      const _ = !Mr.length;
      for (const h of i)
        h[1](), Mr.push(h, e);
      if (_) {
        for (let h = 0; h < Mr.length; h += 2)
          Mr[h][0](Mr[h + 1]);
        Mr.length = 0;
      }
    }
  }
  function f(a) {
    l(a(e));
  }
  function u(a, _ = Pe) {
    const h = [a, _];
    return i.add(h), i.size === 1 && (n = t(l, f) || Pe), a(e), () => {
      i.delete(h), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: l, update: f, subscribe: u };
}
const xc = Il(null), O_ = Il(null), O6 = Il(null), Ji = Il(null);
function No(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function D6(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Or(e) {
  let t, n, i;
  e.length !== 2 ? (t = No, n = (a, _) => No(e(a), _), i = (a, _) => e(a) - _) : (t = e === No || e === D6 ? e : N6, n = e, i = e);
  function l(a, _, h = 0, d = a.length) {
    if (h < d) {
      if (t(_, _) !== 0)
        return d;
      do {
        const c = h + d >>> 1;
        n(a[c], _) < 0 ? h = c + 1 : d = c;
      } while (h < d);
    }
    return h;
  }
  function f(a, _, h = 0, d = a.length) {
    if (h < d) {
      if (t(_, _) !== 0)
        return d;
      do {
        const c = h + d >>> 1;
        n(a[c], _) <= 0 ? h = c + 1 : d = c;
      } while (h < d);
    }
    return h;
  }
  function u(a, _, h = 0, d = a.length) {
    const c = l(a, _, h, d - 1);
    return c > h && i(a[c - 1], _) > -i(a[c], _) ? c - 1 : c;
  }
  return { left: l, center: u, right: f };
}
function N6() {
  return 0;
}
function U6(e) {
  return e === null ? NaN : +e;
}
const P6 = Or(No), F6 = P6.right;
Or(U6).center;
const W6 = F6;
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
class D_ extends Map {
  constructor(t, n = Y6) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [i, l] of t)
        this.set(i, l);
  }
  get(t) {
    return super.get(N_(this, t));
  }
  has(t) {
    return super.has(N_(this, t));
  }
  set(t, n) {
    return super.set(B6(this, t), n);
  }
  delete(t) {
    return super.delete(H6(this, t));
  }
}
function N_({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : n;
}
function B6({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function H6({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function Y6(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const X6 = Math.sqrt(50), q6 = Math.sqrt(10), G6 = Math.sqrt(2);
function Fo(e, t, n) {
  const i = (t - e) / Math.max(0, n), l = Math.floor(Math.log10(i)), f = i / Math.pow(10, l), u = f >= X6 ? 10 : f >= q6 ? 5 : f >= G6 ? 2 : 1;
  let a, _, h;
  return l < 0 ? (h = Math.pow(10, -l) / u, a = Math.round(e * h), _ = Math.round(t * h), a / h < e && ++a, _ / h > t && --_, h = -h) : (h = Math.pow(10, l) * u, a = Math.round(e / h), _ = Math.round(t / h), a * h < e && ++a, _ * h > t && --_), _ < a && 0.5 <= n && n < 2 ? Fo(e, t, n * 2) : [a, _, h];
}
function Ou(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const i = t < e, [l, f, u] = i ? Fo(t, e, n) : Fo(e, t, n);
  if (!(f >= l))
    return [];
  const a = f - l + 1, _ = new Array(a);
  if (i)
    if (u < 0)
      for (let h = 0; h < a; ++h)
        _[h] = (f - h) / -u;
    else
      for (let h = 0; h < a; ++h)
        _[h] = (f - h) * u;
  else if (u < 0)
    for (let h = 0; h < a; ++h)
      _[h] = (l + h) / -u;
  else
    for (let h = 0; h < a; ++h)
      _[h] = (l + h) * u;
  return _;
}
function Du(e, t, n) {
  return t = +t, e = +e, n = +n, Fo(e, t, n)[2];
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
function Z6(e, t, n) {
  e = +e, t = +t, n = (l = arguments.length) < 2 ? (t = e, e = 0, 1) : l < 3 ? 1 : +n;
  for (var i = -1, l = Math.max(0, Math.ceil((t - e) / n)) | 0, f = new Array(l); ++i < l; )
    f[i] = e + i * n;
  return f;
}
function ea(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Tc(e, t) {
  var n = Object.create(e.prototype);
  for (var i in t)
    n[i] = t[i];
  return n;
}
function Ol() {
}
var Tl = 0.7, Wo = 1 / Tl, Rr = "\\s*([+-]?\\d+)\\s*", Sl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ai = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", j6 = /^#([0-9a-f]{3,8})$/, K6 = new RegExp(`^rgb\\(${Rr},${Rr},${Rr}\\)$`), J6 = new RegExp(`^rgb\\(${ai},${ai},${ai}\\)$`), Q6 = new RegExp(`^rgba\\(${Rr},${Rr},${Rr},${Sl}\\)$`), V6 = new RegExp(`^rgba\\(${ai},${ai},${ai},${Sl}\\)$`), $6 = new RegExp(`^hsl\\(${Sl},${ai},${ai}\\)$`), e3 = new RegExp(`^hsla\\(${Sl},${ai},${ai},${Sl}\\)$`), U_ = {
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
ea(Ol, zl, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: P_,
  // Deprecated! Use color.formatHex.
  formatHex: P_,
  formatHex8: t3,
  formatHsl: n3,
  formatRgb: F_,
  toString: F_
});
function P_() {
  return this.rgb().formatHex();
}
function t3() {
  return this.rgb().formatHex8();
}
function n3() {
  return Sc(this).formatHsl();
}
function F_() {
  return this.rgb().formatRgb();
}
function zl(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = j6.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? W_(t) : n === 3 ? new vn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Lo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Lo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = K6.exec(e)) ? new vn(t[1], t[2], t[3], 1) : (t = J6.exec(e)) ? new vn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Q6.exec(e)) ? Lo(t[1], t[2], t[3], t[4]) : (t = V6.exec(e)) ? Lo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = $6.exec(e)) ? Y_(t[1], t[2] / 100, t[3] / 100, 1) : (t = e3.exec(e)) ? Y_(t[1], t[2] / 100, t[3] / 100, t[4]) : U_.hasOwnProperty(e) ? W_(U_[e]) : e === "transparent" ? new vn(NaN, NaN, NaN, 0) : null;
}
function W_(e) {
  return new vn(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Lo(e, t, n, i) {
  return i <= 0 && (e = t = n = NaN), new vn(e, t, n, i);
}
function i3(e) {
  return e instanceof Ol || (e = zl(e)), e ? (e = e.rgb(), new vn(e.r, e.g, e.b, e.opacity)) : new vn();
}
function Pu(e, t, n, i) {
  return arguments.length === 1 ? i3(e) : new vn(e, t, n, i ?? 1);
}
function vn(e, t, n, i) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
}
ea(vn, Pu, Tc(Ol, {
  brighter(e) {
    return e = e == null ? Wo : Math.pow(Wo, e), new vn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tl : Math.pow(Tl, e), new vn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new vn($i(this.r), $i(this.g), $i(this.b), Bo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: B_,
  // Deprecated! Use color.formatHex.
  formatHex: B_,
  formatHex8: r3,
  formatRgb: H_,
  toString: H_
}));
function B_() {
  return `#${Qi(this.r)}${Qi(this.g)}${Qi(this.b)}`;
}
function r3() {
  return `#${Qi(this.r)}${Qi(this.g)}${Qi(this.b)}${Qi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function H_() {
  const e = Bo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${$i(this.r)}, ${$i(this.g)}, ${$i(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Bo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function $i(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Qi(e) {
  return e = $i(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Y_(e, t, n, i) {
  return i <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ii(e, t, n, i);
}
function Sc(e) {
  if (e instanceof ii)
    return new ii(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ol || (e = zl(e)), !e)
    return new ii();
  if (e instanceof ii)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, i = e.b / 255, l = Math.min(t, n, i), f = Math.max(t, n, i), u = NaN, a = f - l, _ = (f + l) / 2;
  return a ? (t === f ? u = (n - i) / a + (n < i) * 6 : n === f ? u = (i - t) / a + 2 : u = (t - n) / a + 4, a /= _ < 0.5 ? f + l : 2 - f - l, u *= 60) : a = _ > 0 && _ < 1 ? 0 : u, new ii(u, a, _, e.opacity);
}
function l3(e, t, n, i) {
  return arguments.length === 1 ? Sc(e) : new ii(e, t, n, i ?? 1);
}
function ii(e, t, n, i) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
}
ea(ii, l3, Tc(Ol, {
  brighter(e) {
    return e = e == null ? Wo : Math.pow(Wo, e), new ii(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tl : Math.pow(Tl, e), new ii(this.h, this.s, this.l * e, this.opacity);
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
    return new ii(X_(this.h), Eo(this.s), Eo(this.l), Bo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Bo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${X_(this.h)}, ${Eo(this.s) * 100}%, ${Eo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function X_(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Eo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function pu(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ta = (e) => () => e;
function o3(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function f3(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * t, n);
  };
}
function u3(e) {
  return (e = +e) == 1 ? zc : function(t, n) {
    return n - t ? f3(t, n, e) : ta(isNaN(t) ? n : t);
  };
}
function zc(e, t) {
  var n = t - e;
  return n ? o3(e, n) : ta(isNaN(e) ? t : e);
}
const q_ = function e(t) {
  var n = u3(t);
  function i(l, f) {
    var u = n((l = Pu(l)).r, (f = Pu(f)).r), a = n(l.g, f.g), _ = n(l.b, f.b), h = zc(l.opacity, f.opacity);
    return function(d) {
      return l.r = u(d), l.g = a(d), l.b = _(d), l.opacity = h(d), l + "";
    };
  }
  return i.gamma = e, i;
}(1);
function a3(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, i = t.slice(), l;
  return function(f) {
    for (l = 0; l < n; ++l)
      i[l] = e[l] * (1 - f) + t[l] * f;
    return i;
  };
}
function s3(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _3(e, t) {
  var n = t ? t.length : 0, i = e ? Math.min(n, e.length) : 0, l = new Array(i), f = new Array(n), u;
  for (u = 0; u < i; ++u)
    l[u] = na(e[u], t[u]);
  for (; u < n; ++u)
    f[u] = t[u];
  return function(a) {
    for (u = 0; u < i; ++u)
      f[u] = l[u](a);
    return f;
  };
}
function h3(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(i) {
    return n.setTime(e * (1 - i) + t * i), n;
  };
}
function Ho(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function c3(e, t) {
  var n = {}, i = {}, l;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (l in t)
    l in e ? n[l] = na(e[l], t[l]) : i[l] = t[l];
  return function(f) {
    for (l in n)
      i[l] = n[l](f);
    return i;
  };
}
var Fu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, vu = new RegExp(Fu.source, "g");
function g3(e) {
  return function() {
    return e;
  };
}
function d3(e) {
  return function(t) {
    return e(t) + "";
  };
}
function m3(e, t) {
  var n = Fu.lastIndex = vu.lastIndex = 0, i, l, f, u = -1, a = [], _ = [];
  for (e = e + "", t = t + ""; (i = Fu.exec(e)) && (l = vu.exec(t)); )
    (f = l.index) > n && (f = t.slice(n, f), a[u] ? a[u] += f : a[++u] = f), (i = i[0]) === (l = l[0]) ? a[u] ? a[u] += l : a[++u] = l : (a[++u] = null, _.push({ i: u, x: Ho(i, l) })), n = vu.lastIndex;
  return n < t.length && (f = t.slice(n), a[u] ? a[u] += f : a[++u] = f), a.length < 2 ? _[0] ? d3(_[0].x) : g3(t) : (t = _.length, function(h) {
    for (var d = 0, c; d < t; ++d)
      a[(c = _[d]).i] = c.x(h);
    return a.join("");
  });
}
function na(e, t) {
  var n = typeof t, i;
  return t == null || n === "boolean" ? ta(t) : (n === "number" ? Ho : n === "string" ? (i = zl(t)) ? (t = i, q_) : m3 : t instanceof zl ? q_ : t instanceof Date ? h3 : s3(t) ? a3 : Array.isArray(t) ? _3 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? c3 : Ho)(e, t);
}
function y3(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
const Wu = Math.PI, Bu = 2 * Wu, Ki = 1e-6, b3 = Bu - Ki;
function Ac(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function w3(e) {
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
let p3 = class {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Ac : w3(t);
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
    let u = this._x1, a = this._y1, _ = i - t, h = l - n, d = u - t, c = a - n, g = d * d + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (g > Ki)
      if (!(Math.abs(c * _ - h * d) > Ki) || !f)
        this._append`L${this._x1 = t},${this._y1 = n}`;
      else {
        let w = i - u, p = l - a, S = _ * _ + h * h, x = w * w + p * p, T = Math.sqrt(S), z = Math.sqrt(g), C = f * Math.tan((Wu - Math.acos((S + g - x) / (2 * T * z))) / 2), F = C / z, R = C / T;
        Math.abs(F - 1) > Ki && this._append`L${t + F * d},${n + F * c}`, this._append`A${f},${f},0,0,${+(c * w > d * p)},${this._x1 = t + R * _},${this._y1 = n + R * h}`;
      }
  }
  arc(t, n, i, l, f, u) {
    if (t = +t, n = +n, i = +i, u = !!u, i < 0)
      throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(l), _ = i * Math.sin(l), h = t + a, d = n + _, c = 1 ^ u, g = u ? l - f : f - l;
    this._x1 === null ? this._append`M${h},${d}` : (Math.abs(this._x1 - h) > Ki || Math.abs(this._y1 - d) > Ki) && this._append`L${h},${d}`, i && (g < 0 && (g = g % Bu + Bu), g > b3 ? this._append`A${i},${i},0,1,${c},${t - a},${n - _}A${i},${i},0,1,${c},${this._x1 = h},${this._y1 = d}` : g > Ki && this._append`A${i},${i},0,${+(g >= Wu)},${c},${this._x1 = t + i * Math.cos(f)},${this._y1 = n + i * Math.sin(f)}`);
  }
  rect(t, n, i, l) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${i = +i}v${+l}h${-i}Z`;
  }
  toString() {
    return this._;
  }
};
function v3(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Yo(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Dr(e) {
  return e = Yo(Math.abs(e)), e ? e[1] : NaN;
}
function k3(e, t) {
  return function(n, i) {
    for (var l = n.length, f = [], u = 0, a = e[0], _ = 0; l > 0 && a > 0 && (_ + a + 1 > i && (a = Math.max(1, i - _)), f.push(n.substring(l -= a, l + a)), !((_ += a + 1) > i)); )
      a = e[u = (u + 1) % e.length];
    return f.reverse().join(t);
  };
}
function x3(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var M3 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Al(e) {
  if (!(t = M3.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new ia({
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
Al.prototype = ia.prototype;
function ia(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ia.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function T3(e) {
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
function S3(e, t) {
  var n = Yo(e, t);
  if (!n)
    return e + "";
  var i = n[0], l = n[1], f = l - (Cc = Math.max(-8, Math.min(8, Math.floor(l / 3))) * 3) + 1, u = i.length;
  return f === u ? i : f > u ? i + new Array(f - u + 1).join("0") : f > 0 ? i.slice(0, f) + "." + i.slice(f) : "0." + new Array(1 - f).join("0") + Yo(e, Math.max(0, t + f - 1))[0];
}
function G_(e, t) {
  var n = Yo(e, t);
  if (!n)
    return e + "";
  var i = n[0], l = n[1];
  return l < 0 ? "0." + new Array(-l).join("0") + i : i.length > l + 1 ? i.slice(0, l + 1) + "." + i.slice(l + 1) : i + new Array(l - i.length + 2).join("0");
}
const Z_ = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: v3,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => G_(e * 100, t),
  r: G_,
  s: S3,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function j_(e) {
  return e;
}
var K_ = Array.prototype.map, J_ = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function z3(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? j_ : k3(K_.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", l = e.decimal === void 0 ? "." : e.decimal + "", f = e.numerals === void 0 ? j_ : x3(K_.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", _ = e.nan === void 0 ? "NaN" : e.nan + "";
  function h(c) {
    c = Al(c);
    var g = c.fill, w = c.align, p = c.sign, S = c.symbol, x = c.zero, T = c.width, z = c.comma, C = c.precision, F = c.trim, R = c.type;
    R === "n" ? (z = !0, R = "g") : Z_[R] || (C === void 0 && (C = 12), F = !0, R = "g"), (x || g === "0" && w === "=") && (x = !0, g = "0", w = "=");
    var I = S === "$" ? n : S === "#" && /[boxX]/.test(R) ? "0" + R.toLowerCase() : "", G = S === "$" ? i : /[%p]/.test(R) ? u : "", D = Z_[R], ee = /[defgprs%]/.test(R);
    C = C === void 0 ? 6 : /[gprs]/.test(R) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function W(K) {
      var se = I, ce = G, fe, re, J;
      if (R === "c")
        ce = D(K) + ce, K = "";
      else {
        K = +K;
        var B = K < 0 || 1 / K < 0;
        if (K = isNaN(K) ? _ : D(Math.abs(K), C), F && (K = T3(K)), B && +K == 0 && p !== "+" && (B = !1), se = (B ? p === "(" ? p : a : p === "-" || p === "(" ? "" : p) + se, ce = (R === "s" ? J_[8 + Cc / 3] : "") + ce + (B && p === "(" ? ")" : ""), ee) {
          for (fe = -1, re = K.length; ++fe < re; )
            if (J = K.charCodeAt(fe), 48 > J || J > 57) {
              ce = (J === 46 ? l + K.slice(fe + 1) : K.slice(fe)) + ce, K = K.slice(0, fe);
              break;
            }
        }
      }
      z && !x && (K = t(K, 1 / 0));
      var A = se.length + K.length + ce.length, E = A < T ? new Array(T - A + 1).join(g) : "";
      switch (z && x && (K = t(E + K, E.length ? T - ce.length : 1 / 0), E = ""), w) {
        case "<":
          K = se + K + ce + E;
          break;
        case "=":
          K = se + E + K + ce;
          break;
        case "^":
          K = E.slice(0, A = E.length >> 1) + se + K + ce + E.slice(A);
          break;
        default:
          K = E + se + K + ce;
          break;
      }
      return f(K);
    }
    return W.toString = function() {
      return c + "";
    }, W;
  }
  function d(c, g) {
    var w = h((c = Al(c), c.type = "f", c)), p = Math.max(-8, Math.min(8, Math.floor(Dr(g) / 3))) * 3, S = Math.pow(10, -p), x = J_[8 + p / 3];
    return function(T) {
      return w(S * T) + x;
    };
  }
  return {
    format: h,
    formatPrefix: d
  };
}
var Ro, hn, Lc;
A3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function A3(e) {
  return Ro = z3(e), hn = Ro.format, Lc = Ro.formatPrefix, Ro;
}
function C3(e) {
  return Math.max(0, -Dr(Math.abs(e)));
}
function L3(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Dr(t) / 3))) * 3 - Dr(Math.abs(e)));
}
function E3(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Dr(t) - Dr(e)) + 1;
}
function Dl(e, t) {
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
const Q_ = Symbol("implicit");
function Ec() {
  var e = new D_(), t = [], n = [], i = Q_;
  function l(f) {
    let u = e.get(f);
    if (u === void 0) {
      if (i !== Q_)
        return i;
      e.set(f, u = t.push(f) - 1);
    }
    return n[u % n.length];
  }
  return l.domain = function(f) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new D_();
    for (const u of f)
      e.has(u) || e.set(u, t.push(u) - 1);
    return l;
  }, l.range = function(f) {
    return arguments.length ? (n = Array.from(f), l) : n.slice();
  }, l.unknown = function(f) {
    return arguments.length ? (i = f, l) : i;
  }, l.copy = function() {
    return Ec(t, n).unknown(i);
  }, Dl.apply(l, arguments), l;
}
function wl() {
  var e = Ec().unknown(void 0), t = e.domain, n = e.range, i = 0, l = 1, f, u, a = !1, _ = 0, h = 0, d = 0.5;
  delete e.unknown;
  function c() {
    var g = t().length, w = l < i, p = w ? l : i, S = w ? i : l;
    f = (S - p) / Math.max(1, g - _ + h * 2), a && (f = Math.floor(f)), p += (S - p - f * (g - _)) * d, u = f * (1 - _), a && (p = Math.round(p), u = Math.round(u));
    var x = Z6(g).map(function(T) {
      return p + f * T;
    });
    return n(w ? x.reverse() : x);
  }
  return e.domain = function(g) {
    return arguments.length ? (t(g), c()) : t();
  }, e.range = function(g) {
    return arguments.length ? ([i, l] = g, i = +i, l = +l, c()) : [i, l];
  }, e.rangeRound = function(g) {
    return [i, l] = g, i = +i, l = +l, a = !0, c();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return f;
  }, e.round = function(g) {
    return arguments.length ? (a = !!g, c()) : a;
  }, e.padding = function(g) {
    return arguments.length ? (_ = Math.min(1, h = +g), c()) : _;
  }, e.paddingInner = function(g) {
    return arguments.length ? (_ = Math.min(1, g), c()) : _;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (h = +g, c()) : h;
  }, e.align = function(g) {
    return arguments.length ? (d = Math.max(0, Math.min(1, g)), c()) : d;
  }, e.copy = function() {
    return wl(t(), [i, l]).round(a).paddingInner(_).paddingOuter(h).align(d);
  }, Dl.apply(c(), arguments);
}
function Rc(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Rc(t());
  }, e;
}
function R3() {
  return Rc(wl.apply(null, arguments).paddingInner(1));
}
function I3(e) {
  return function() {
    return e;
  };
}
function O3(e) {
  return +e;
}
var V_ = [0, 1];
function zr(e) {
  return e;
}
function Hu(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : I3(isNaN(t) ? NaN : 0.5);
}
function D3(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(i) {
    return Math.max(e, Math.min(t, i));
  };
}
function N3(e, t, n) {
  var i = e[0], l = e[1], f = t[0], u = t[1];
  return l < i ? (i = Hu(l, i), f = n(u, f)) : (i = Hu(i, l), f = n(f, u)), function(a) {
    return f(i(a));
  };
}
function U3(e, t, n) {
  var i = Math.min(e.length, t.length) - 1, l = new Array(i), f = new Array(i), u = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++u < i; )
    l[u] = Hu(e[u], e[u + 1]), f[u] = n(t[u], t[u + 1]);
  return function(a) {
    var _ = W6(e, a, 1, i) - 1;
    return f[_](l[_](a));
  };
}
function ra(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ic() {
  var e = V_, t = V_, n = na, i, l, f, u = zr, a, _, h;
  function d() {
    var g = Math.min(e.length, t.length);
    return u !== zr && (u = D3(e[0], e[g - 1])), a = g > 2 ? U3 : N3, _ = h = null, c;
  }
  function c(g) {
    return g == null || isNaN(g = +g) ? f : (_ || (_ = a(e.map(i), t, n)))(i(u(g)));
  }
  return c.invert = function(g) {
    return u(l((h || (h = a(t, e.map(i), Ho)))(g)));
  }, c.domain = function(g) {
    return arguments.length ? (e = Array.from(g, O3), d()) : e.slice();
  }, c.range = function(g) {
    return arguments.length ? (t = Array.from(g), d()) : t.slice();
  }, c.rangeRound = function(g) {
    return t = Array.from(g), n = y3, d();
  }, c.clamp = function(g) {
    return arguments.length ? (u = g ? !0 : zr, d()) : u !== zr;
  }, c.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, c.unknown = function(g) {
    return arguments.length ? (f = g, c) : f;
  }, function(g, w) {
    return i = g, l = w, d();
  };
}
function Oc() {
  return Ic()(zr, zr);
}
function P3(e, t, n, i) {
  var l = Nu(e, t, n), f;
  switch (i = Al(i ?? ",f"), i.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(t));
      return i.precision == null && !isNaN(f = L3(l, u)) && (i.precision = f), Lc(i, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(f = E3(l, Math.max(Math.abs(e), Math.abs(t)))) && (i.precision = f - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(f = C3(l)) && (i.precision = f - (i.type === "%") * 2);
      break;
    }
  }
  return hn(i);
}
function F3(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var i = t();
    return Ou(i[0], i[i.length - 1], n ?? 10);
  }, e.tickFormat = function(n, i) {
    var l = t();
    return P3(l[0], l[l.length - 1], n ?? 10, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = t(), l = 0, f = i.length - 1, u = i[l], a = i[f], _, h, d = 10;
    for (a < u && (h = u, u = a, a = h, h = l, l = f, f = h); d-- > 0; ) {
      if (h = Du(u, a, n), h === _)
        return i[l] = u, i[f] = a, t(i);
      if (h > 0)
        u = Math.floor(u / h) * h, a = Math.ceil(a / h) * h;
      else if (h < 0)
        u = Math.ceil(u * h) / h, a = Math.floor(a * h) / h;
      else
        break;
      _ = h;
    }
    return e;
  }, e;
}
function Nr() {
  var e = Oc();
  return e.copy = function() {
    return ra(e, Nr());
  }, Dl.apply(e, arguments), F3(e);
}
function Dc(e, t) {
  e = e.slice();
  var n = 0, i = e.length - 1, l = e[n], f = e[i], u;
  return f < l && (u = n, n = i, i = u, u = l, l = f, f = u), e[n] = t.floor(l), e[i] = t.ceil(f), e;
}
function $_(e) {
  return Math.log(e);
}
function eh(e) {
  return Math.exp(e);
}
function W3(e) {
  return -Math.log(-e);
}
function B3(e) {
  return -Math.exp(-e);
}
function H3(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Y3(e) {
  return e === 10 ? H3 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function X3(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function th(e) {
  return (t, n) => -e(-t, n);
}
function q3(e) {
  const t = e($_, eh), n = t.domain;
  let i = 10, l, f;
  function u() {
    return l = X3(i), f = Y3(i), n()[0] < 0 ? (l = th(l), f = th(f), e(W3, B3)) : e($_, eh), t;
  }
  return t.base = function(a) {
    return arguments.length ? (i = +a, u()) : i;
  }, t.domain = function(a) {
    return arguments.length ? (n(a), u()) : n();
  }, t.ticks = (a) => {
    const _ = n();
    let h = _[0], d = _[_.length - 1];
    const c = d < h;
    c && ([h, d] = [d, h]);
    let g = l(h), w = l(d), p, S;
    const x = a == null ? 10 : +a;
    let T = [];
    if (!(i % 1) && w - g < x) {
      if (g = Math.floor(g), w = Math.ceil(w), h > 0) {
        for (; g <= w; ++g)
          for (p = 1; p < i; ++p)
            if (S = g < 0 ? p / f(-g) : p * f(g), !(S < h)) {
              if (S > d)
                break;
              T.push(S);
            }
      } else
        for (; g <= w; ++g)
          for (p = i - 1; p >= 1; --p)
            if (S = g > 0 ? p / f(-g) : p * f(g), !(S < h)) {
              if (S > d)
                break;
              T.push(S);
            }
      T.length * 2 < x && (T = Ou(h, d, x));
    } else
      T = Ou(g, w, Math.min(w - g, x)).map(f);
    return c ? T.reverse() : T;
  }, t.tickFormat = (a, _) => {
    if (a == null && (a = 10), _ == null && (_ = i === 10 ? "s" : ","), typeof _ != "function" && (!(i % 1) && (_ = Al(_)).precision == null && (_.trim = !0), _ = hn(_)), a === 1 / 0)
      return _;
    const h = Math.max(1, i * a / t.ticks().length);
    return (d) => {
      let c = d / f(Math.round(l(d)));
      return c * i < i - 0.5 && (c *= i), c <= h ? _(d) : "";
    };
  }, t.nice = () => n(Dc(n(), {
    floor: (a) => f(Math.floor(l(a))),
    ceil: (a) => f(Math.ceil(l(a)))
  })), t;
}
function Nc() {
  const e = q3(Ic()).domain([1, 10]);
  return e.copy = () => ra(e, Nc()).base(e.base()), Dl.apply(e, arguments), e;
}
const ku = /* @__PURE__ */ new Date(), xu = /* @__PURE__ */ new Date();
function Ht(e, t, n, i) {
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
    let h;
    do
      _.push(h = /* @__PURE__ */ new Date(+f)), t(f, a), e(f);
    while (h < f && f < u);
    return _;
  }, l.filter = (f) => Ht((u) => {
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
const Xo = Ht(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Xo.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ht((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Xo);
Xo.range;
const ki = 1e3, jn = ki * 60, xi = jn * 60, Mi = xi * 24, la = Mi * 7, nh = Mi * 30, Mu = Mi * 365, Ar = Ht((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * ki);
}, (e, t) => (t - e) / ki, (e) => e.getUTCSeconds());
Ar.range;
const oa = Ht((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ki);
}, (e, t) => {
  e.setTime(+e + t * jn);
}, (e, t) => (t - e) / jn, (e) => e.getMinutes());
oa.range;
const G3 = Ht((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * jn);
}, (e, t) => (t - e) / jn, (e) => e.getUTCMinutes());
G3.range;
const fa = Ht((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ki - e.getMinutes() * jn);
}, (e, t) => {
  e.setTime(+e + t * xi);
}, (e, t) => (t - e) / xi, (e) => e.getHours());
fa.range;
const Z3 = Ht((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * xi);
}, (e, t) => (t - e) / xi, (e) => e.getUTCHours());
Z3.range;
const Nl = Ht(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * jn) / Mi,
  (e) => e.getDate() - 1
);
Nl.range;
const ua = Ht((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Mi, (e) => e.getUTCDate() - 1);
ua.range;
const j3 = Ht((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Mi, (e) => Math.floor(e / Mi));
j3.range;
function ir(e) {
  return Ht((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * jn) / la);
}
const ef = ir(0), qo = ir(1), K3 = ir(2), J3 = ir(3), Ur = ir(4), Q3 = ir(5), V3 = ir(6);
ef.range;
qo.range;
K3.range;
J3.range;
Ur.range;
Q3.range;
V3.range;
function rr(e) {
  return Ht((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / la);
}
const Uc = rr(0), Go = rr(1), $3 = rr(2), e5 = rr(3), Pr = rr(4), t5 = rr(5), n5 = rr(6);
Uc.range;
Go.range;
$3.range;
e5.range;
Pr.range;
t5.range;
n5.range;
const aa = Ht((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
aa.range;
const i5 = Ht((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
i5.range;
const Ti = Ht((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ti.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ht((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Ti.range;
const tr = Ht((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
tr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ht((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
tr.range;
function r5(e, t, n, i, l, f) {
  const u = [
    [Ar, 1, ki],
    [Ar, 5, 5 * ki],
    [Ar, 15, 15 * ki],
    [Ar, 30, 30 * ki],
    [f, 1, jn],
    [f, 5, 5 * jn],
    [f, 15, 15 * jn],
    [f, 30, 30 * jn],
    [l, 1, xi],
    [l, 3, 3 * xi],
    [l, 6, 6 * xi],
    [l, 12, 12 * xi],
    [i, 1, Mi],
    [i, 2, 2 * Mi],
    [n, 1, la],
    [t, 1, nh],
    [t, 3, 3 * nh],
    [e, 1, Mu]
  ];
  function a(h, d, c) {
    const g = d < h;
    g && ([h, d] = [d, h]);
    const w = c && typeof c.range == "function" ? c : _(h, d, c), p = w ? w.range(h, +d + 1) : [];
    return g ? p.reverse() : p;
  }
  function _(h, d, c) {
    const g = Math.abs(d - h) / c, w = Or(([, , x]) => x).right(u, g);
    if (w === u.length)
      return e.every(Nu(h / Mu, d / Mu, c));
    if (w === 0)
      return Xo.every(Math.max(Nu(h, d, c), 1));
    const [p, S] = u[g / u[w - 1][2] < u[w][2] / g ? w - 1 : w];
    return p.every(S);
  }
  return [a, _];
}
const [l5, o5] = r5(Ti, aa, ef, Nl, fa, oa);
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
function cl(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function f5(e) {
  var t = e.dateTime, n = e.date, i = e.time, l = e.periods, f = e.days, u = e.shortDays, a = e.months, _ = e.shortMonths, h = gl(l), d = dl(l), c = gl(f), g = dl(f), w = gl(u), p = dl(u), S = gl(a), x = dl(a), T = gl(_), z = dl(_), C = {
    a: B,
    A,
    b: E,
    B: de,
    c: null,
    d: uh,
    e: uh,
    f: L5,
    g: W5,
    G: H5,
    H: z5,
    I: A5,
    j: C5,
    L: Pc,
    m: E5,
    M: R5,
    p: he,
    q: pt,
    Q: _h,
    s: hh,
    S: I5,
    u: O5,
    U: D5,
    V: N5,
    w: U5,
    W: P5,
    x: null,
    X: null,
    y: F5,
    Y: B5,
    Z: Y5,
    "%": sh
  }, F = {
    a: Kt,
    A: Je,
    b: Ue,
    B: $e,
    c: null,
    d: ah,
    e: ah,
    f: Z5,
    g: iw,
    G: lw,
    H: X5,
    I: q5,
    j: G5,
    L: Wc,
    m: j5,
    M: K5,
    p: ut,
    q: Xe,
    Q: _h,
    s: hh,
    S: J5,
    u: Q5,
    U: V5,
    V: $5,
    w: ew,
    W: tw,
    x: null,
    X: null,
    y: nw,
    Y: rw,
    Z: ow,
    "%": sh
  }, R = {
    a: W,
    A: K,
    b: se,
    B: ce,
    c: fe,
    d: oh,
    e: oh,
    f: x5,
    g: lh,
    G: rh,
    H: fh,
    I: fh,
    j: w5,
    L: k5,
    m: b5,
    M: p5,
    p: ee,
    q: y5,
    Q: T5,
    s: S5,
    S: v5,
    u: h5,
    U: c5,
    V: g5,
    w: _5,
    W: d5,
    x: re,
    X: J,
    y: lh,
    Y: rh,
    Z: m5,
    "%": M5
  };
  C.x = I(n, C), C.X = I(i, C), C.c = I(t, C), F.x = I(n, F), F.X = I(i, F), F.c = I(t, F);
  function I(ae, me) {
    return function(be) {
      var Q = [], Ae = -1, ye = 0, He = ae.length, Qe, et, qe;
      for (be instanceof Date || (be = /* @__PURE__ */ new Date(+be)); ++Ae < He; )
        ae.charCodeAt(Ae) === 37 && (Q.push(ae.slice(ye, Ae)), (et = ih[Qe = ae.charAt(++Ae)]) != null ? Qe = ae.charAt(++Ae) : et = Qe === "e" ? " " : "0", (qe = me[Qe]) && (Qe = qe(be, et)), Q.push(Qe), ye = Ae + 1);
      return Q.push(ae.slice(ye, Ae)), Q.join("");
    };
  }
  function G(ae, me) {
    return function(be) {
      var Q = cl(1900, void 0, 1), Ae = D(Q, ae, be += "", 0), ye, He;
      if (Ae != be.length)
        return null;
      if ("Q" in Q)
        return new Date(Q.Q);
      if ("s" in Q)
        return new Date(Q.s * 1e3 + ("L" in Q ? Q.L : 0));
      if (me && !("Z" in Q) && (Q.Z = 0), "p" in Q && (Q.H = Q.H % 12 + Q.p * 12), Q.m === void 0 && (Q.m = "q" in Q ? Q.q : 0), "V" in Q) {
        if (Q.V < 1 || Q.V > 53)
          return null;
        "w" in Q || (Q.w = 1), "Z" in Q ? (ye = Su(cl(Q.y, 0, 1)), He = ye.getUTCDay(), ye = He > 4 || He === 0 ? Go.ceil(ye) : Go(ye), ye = ua.offset(ye, (Q.V - 1) * 7), Q.y = ye.getUTCFullYear(), Q.m = ye.getUTCMonth(), Q.d = ye.getUTCDate() + (Q.w + 6) % 7) : (ye = Tu(cl(Q.y, 0, 1)), He = ye.getDay(), ye = He > 4 || He === 0 ? qo.ceil(ye) : qo(ye), ye = Nl.offset(ye, (Q.V - 1) * 7), Q.y = ye.getFullYear(), Q.m = ye.getMonth(), Q.d = ye.getDate() + (Q.w + 6) % 7);
      } else
        ("W" in Q || "U" in Q) && ("w" in Q || (Q.w = "u" in Q ? Q.u % 7 : "W" in Q ? 1 : 0), He = "Z" in Q ? Su(cl(Q.y, 0, 1)).getUTCDay() : Tu(cl(Q.y, 0, 1)).getDay(), Q.m = 0, Q.d = "W" in Q ? (Q.w + 6) % 7 + Q.W * 7 - (He + 5) % 7 : Q.w + Q.U * 7 - (He + 6) % 7);
      return "Z" in Q ? (Q.H += Q.Z / 100 | 0, Q.M += Q.Z % 100, Su(Q)) : Tu(Q);
    };
  }
  function D(ae, me, be, Q) {
    for (var Ae = 0, ye = me.length, He = be.length, Qe, et; Ae < ye; ) {
      if (Q >= He)
        return -1;
      if (Qe = me.charCodeAt(Ae++), Qe === 37) {
        if (Qe = me.charAt(Ae++), et = R[Qe in ih ? me.charAt(Ae++) : Qe], !et || (Q = et(ae, be, Q)) < 0)
          return -1;
      } else if (Qe != be.charCodeAt(Q++))
        return -1;
    }
    return Q;
  }
  function ee(ae, me, be) {
    var Q = h.exec(me.slice(be));
    return Q ? (ae.p = d.get(Q[0].toLowerCase()), be + Q[0].length) : -1;
  }
  function W(ae, me, be) {
    var Q = w.exec(me.slice(be));
    return Q ? (ae.w = p.get(Q[0].toLowerCase()), be + Q[0].length) : -1;
  }
  function K(ae, me, be) {
    var Q = c.exec(me.slice(be));
    return Q ? (ae.w = g.get(Q[0].toLowerCase()), be + Q[0].length) : -1;
  }
  function se(ae, me, be) {
    var Q = T.exec(me.slice(be));
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
  function B(ae) {
    return u[ae.getDay()];
  }
  function A(ae) {
    return f[ae.getDay()];
  }
  function E(ae) {
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
  function ut(ae) {
    return l[+(ae.getUTCHours() >= 12)];
  }
  function Xe(ae) {
    return 1 + ~~(ae.getUTCMonth() / 3);
  }
  return {
    format: function(ae) {
      var me = I(ae += "", C);
      return me.toString = function() {
        return ae;
      }, me;
    },
    parse: function(ae) {
      var me = G(ae += "", !1);
      return me.toString = function() {
        return ae;
      }, me;
    },
    utcFormat: function(ae) {
      var me = I(ae += "", F);
      return me.toString = function() {
        return ae;
      }, me;
    },
    utcParse: function(ae) {
      var me = G(ae += "", !0);
      return me.toString = function() {
        return ae;
      }, me;
    }
  };
}
var ih = { "-": "", _: " ", 0: "0" }, jt = /^\s*\d+/, u5 = /^%/, a5 = /[\\^$*+?|[\]().{}]/g;
function Ve(e, t, n) {
  var i = e < 0 ? "-" : "", l = (i ? -e : e) + "", f = l.length;
  return i + (f < n ? new Array(n - f + 1).join(t) + l : l);
}
function s5(e) {
  return e.replace(a5, "\\$&");
}
function gl(e) {
  return new RegExp("^(?:" + e.map(s5).join("|") + ")", "i");
}
function dl(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function _5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 1));
  return i ? (e.w = +i[0], n + i[0].length) : -1;
}
function h5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 1));
  return i ? (e.u = +i[0], n + i[0].length) : -1;
}
function c5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.U = +i[0], n + i[0].length) : -1;
}
function g5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.V = +i[0], n + i[0].length) : -1;
}
function d5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.W = +i[0], n + i[0].length) : -1;
}
function rh(e, t, n) {
  var i = jt.exec(t.slice(n, n + 4));
  return i ? (e.y = +i[0], n + i[0].length) : -1;
}
function lh(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), n + i[0].length) : -1;
}
function m5(e, t, n) {
  var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return i ? (e.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), n + i[0].length) : -1;
}
function y5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 1));
  return i ? (e.q = i[0] * 3 - 3, n + i[0].length) : -1;
}
function b5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.m = i[0] - 1, n + i[0].length) : -1;
}
function oh(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.d = +i[0], n + i[0].length) : -1;
}
function w5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 3));
  return i ? (e.m = 0, e.d = +i[0], n + i[0].length) : -1;
}
function fh(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.H = +i[0], n + i[0].length) : -1;
}
function p5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.M = +i[0], n + i[0].length) : -1;
}
function v5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.S = +i[0], n + i[0].length) : -1;
}
function k5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 3));
  return i ? (e.L = +i[0], n + i[0].length) : -1;
}
function x5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 6));
  return i ? (e.L = Math.floor(i[0] / 1e3), n + i[0].length) : -1;
}
function M5(e, t, n) {
  var i = u5.exec(t.slice(n, n + 1));
  return i ? n + i[0].length : -1;
}
function T5(e, t, n) {
  var i = jt.exec(t.slice(n));
  return i ? (e.Q = +i[0], n + i[0].length) : -1;
}
function S5(e, t, n) {
  var i = jt.exec(t.slice(n));
  return i ? (e.s = +i[0], n + i[0].length) : -1;
}
function uh(e, t) {
  return Ve(e.getDate(), t, 2);
}
function z5(e, t) {
  return Ve(e.getHours(), t, 2);
}
function A5(e, t) {
  return Ve(e.getHours() % 12 || 12, t, 2);
}
function C5(e, t) {
  return Ve(1 + Nl.count(Ti(e), e), t, 3);
}
function Pc(e, t) {
  return Ve(e.getMilliseconds(), t, 3);
}
function L5(e, t) {
  return Pc(e, t) + "000";
}
function E5(e, t) {
  return Ve(e.getMonth() + 1, t, 2);
}
function R5(e, t) {
  return Ve(e.getMinutes(), t, 2);
}
function I5(e, t) {
  return Ve(e.getSeconds(), t, 2);
}
function O5(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function D5(e, t) {
  return Ve(ef.count(Ti(e) - 1, e), t, 2);
}
function Fc(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ur(e) : Ur.ceil(e);
}
function N5(e, t) {
  return e = Fc(e), Ve(Ur.count(Ti(e), e) + (Ti(e).getDay() === 4), t, 2);
}
function U5(e) {
  return e.getDay();
}
function P5(e, t) {
  return Ve(qo.count(Ti(e) - 1, e), t, 2);
}
function F5(e, t) {
  return Ve(e.getFullYear() % 100, t, 2);
}
function W5(e, t) {
  return e = Fc(e), Ve(e.getFullYear() % 100, t, 2);
}
function B5(e, t) {
  return Ve(e.getFullYear() % 1e4, t, 4);
}
function H5(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Ur(e) : Ur.ceil(e), Ve(e.getFullYear() % 1e4, t, 4);
}
function Y5(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ve(t / 60 | 0, "0", 2) + Ve(t % 60, "0", 2);
}
function ah(e, t) {
  return Ve(e.getUTCDate(), t, 2);
}
function X5(e, t) {
  return Ve(e.getUTCHours(), t, 2);
}
function q5(e, t) {
  return Ve(e.getUTCHours() % 12 || 12, t, 2);
}
function G5(e, t) {
  return Ve(1 + ua.count(tr(e), e), t, 3);
}
function Wc(e, t) {
  return Ve(e.getUTCMilliseconds(), t, 3);
}
function Z5(e, t) {
  return Wc(e, t) + "000";
}
function j5(e, t) {
  return Ve(e.getUTCMonth() + 1, t, 2);
}
function K5(e, t) {
  return Ve(e.getUTCMinutes(), t, 2);
}
function J5(e, t) {
  return Ve(e.getUTCSeconds(), t, 2);
}
function Q5(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function V5(e, t) {
  return Ve(Uc.count(tr(e) - 1, e), t, 2);
}
function Bc(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Pr(e) : Pr.ceil(e);
}
function $5(e, t) {
  return e = Bc(e), Ve(Pr.count(tr(e), e) + (tr(e).getUTCDay() === 4), t, 2);
}
function ew(e) {
  return e.getUTCDay();
}
function tw(e, t) {
  return Ve(Go.count(tr(e) - 1, e), t, 2);
}
function nw(e, t) {
  return Ve(e.getUTCFullYear() % 100, t, 2);
}
function iw(e, t) {
  return e = Bc(e), Ve(e.getUTCFullYear() % 100, t, 2);
}
function rw(e, t) {
  return Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function lw(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Pr(e) : Pr.ceil(e), Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function ow() {
  return "+0000";
}
function sh() {
  return "%";
}
function _h(e) {
  return +e;
}
function hh(e) {
  return Math.floor(+e / 1e3);
}
var Tr, sa, Fr;
fw({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function fw(e) {
  return Tr = f5(e), sa = Tr.format, Fr = Tr.parse, Tr.utcFormat, Tr.utcParse, Tr;
}
function uw(e) {
  return new Date(e);
}
function aw(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Hc(e, t, n, i, l, f, u, a, _, h) {
  var d = Oc(), c = d.invert, g = d.domain, w = h(".%L"), p = h(":%S"), S = h("%I:%M"), x = h("%I %p"), T = h("%a %d"), z = h("%b %d"), C = h("%B"), F = h("%Y");
  function R(I) {
    return (_(I) < I ? w : a(I) < I ? p : u(I) < I ? S : f(I) < I ? x : i(I) < I ? l(I) < I ? T : z : n(I) < I ? C : F)(I);
  }
  return d.invert = function(I) {
    return new Date(c(I));
  }, d.domain = function(I) {
    return arguments.length ? g(Array.from(I, aw)) : g().map(uw);
  }, d.ticks = function(I) {
    var G = g();
    return e(G[0], G[G.length - 1], I ?? 10);
  }, d.tickFormat = function(I, G) {
    return G == null ? R : h(G);
  }, d.nice = function(I) {
    var G = g();
    return (!I || typeof I.range != "function") && (I = t(G[0], G[G.length - 1], I ?? 10)), I ? g(Dc(G, I)) : d;
  }, d.copy = function() {
    return ra(d, Hc(e, t, n, i, l, f, u, a, _, h));
  }, d;
}
function sw() {
  return Dl.apply(Hc(l5, o5, Ti, aa, ef, Nl, fa, oa, Ar, sa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function qt(e) {
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
  }, () => new p3(t);
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
  var n = qt(!0), i = null, l = Gc, f = null, u = Yc(a);
  e = typeof e == "function" ? e : e === void 0 ? Zc : qt(e), t = typeof t == "function" ? t : t === void 0 ? jc : qt(t);
  function a(_) {
    var h, d = (_ = Xc(_)).length, c, g = !1, w;
    for (i == null && (f = l(w = u())), h = 0; h <= d; ++h)
      !(h < d && n(c = _[h], h, _)) === g && ((g = !g) ? f.lineStart() : f.lineEnd()), g && f.point(+e(c, h, _), +t(c, h, _));
    if (w)
      return f = null, w + "" || null;
  }
  return a.x = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : qt(+_), a) : e;
  }, a.y = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : qt(+_), a) : t;
  }, a.defined = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : qt(!!_), a) : n;
  }, a.curve = function(_) {
    return arguments.length ? (l = _, i != null && (f = l(i)), a) : l;
  }, a.context = function(_) {
    return arguments.length ? (_ == null ? i = f = null : f = l(i = _), a) : i;
  }, a;
}
function ch(e, t, n) {
  var i = null, l = qt(!0), f = null, u = Gc, a = null, _ = Yc(h);
  e = typeof e == "function" ? e : e === void 0 ? Zc : qt(+e), t = typeof t == "function" ? t : qt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? jc : qt(+n);
  function h(c) {
    var g, w, p, S = (c = Xc(c)).length, x, T = !1, z, C = new Array(S), F = new Array(S);
    for (f == null && (a = u(z = _())), g = 0; g <= S; ++g) {
      if (!(g < S && l(x = c[g], g, c)) === T)
        if (T = !T)
          w = g, a.areaStart(), a.lineStart();
        else {
          for (a.lineEnd(), a.lineStart(), p = g - 1; p >= w; --p)
            a.point(C[p], F[p]);
          a.lineEnd(), a.areaEnd();
        }
      T && (C[g] = +e(x, g, c), F[g] = +t(x, g, c), a.point(i ? +i(x, g, c) : C[g], n ? +n(x, g, c) : F[g]));
    }
    if (z)
      return a = null, z + "" || null;
  }
  function d() {
    return Kc().defined(l).curve(u).context(f);
  }
  return h.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : qt(+c), i = null, h) : e;
  }, h.x0 = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : qt(+c), h) : e;
  }, h.x1 = function(c) {
    return arguments.length ? (i = c == null ? null : typeof c == "function" ? c : qt(+c), h) : i;
  }, h.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : qt(+c), n = null, h) : t;
  }, h.y0 = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : qt(+c), h) : t;
  }, h.y1 = function(c) {
    return arguments.length ? (n = c == null ? null : typeof c == "function" ? c : qt(+c), h) : n;
  }, h.lineX0 = h.lineY0 = function() {
    return d().x(e).y(t);
  }, h.lineY1 = function() {
    return d().x(e).y(n);
  }, h.lineX1 = function() {
    return d().x(i).y(t);
  }, h.defined = function(c) {
    return arguments.length ? (l = typeof c == "function" ? c : qt(!!c), h) : l;
  }, h.curve = function(c) {
    return arguments.length ? (u = c, f != null && (a = u(f)), h) : u;
  }, h.context = function(c) {
    return arguments.length ? (c == null ? f = a = null : a = u(f = c), h) : f;
  }, h;
}
function gh(e, t, n) {
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
        gh(this, this._x1, this._y1);
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
        gh(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function _w(e) {
  return new Jc(e);
}
function yl(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
yl.prototype = {
  constructor: yl,
  scale: function(e) {
    return e === 1 ? this : new yl(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new yl(this.k, this.x + this.k * e, this.y + this.k * t);
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
yl.prototype;
function dh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function hw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dh(Object(n), !0).forEach(function(i) {
      cw(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dh(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function pl(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pl = function(t) {
    return typeof t;
  } : pl = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pl(e);
}
function cw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Zo() {
  return Zo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Zo.apply(this, arguments);
}
function gw(e, t) {
  if (e) {
    if (typeof e == "string")
      return mh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return mh(e, t);
  }
}
function mh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++)
    i[n] = e[n];
  return i;
}
function Qc(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = gw(e)) || t && e && typeof e.length == "number") {
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
function dw(e, t) {
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
function mw(e) {
  var t = {};
  return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], e.length === 4 ? t.type = "C" : e.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function yw(e, t) {
  t = t || 2;
  for (var n = [], i = e, l = 1 / t, f = 0; f < t - 1; f++) {
    var u = l / (1 - l * f), a = dw(i, u);
    n.push(a.left), i = a.right;
  }
  return n.push(i), n;
}
function bw(e, t, n) {
  var i = [[e.x, e.y]];
  return t.x1 != null && i.push([t.x1, t.y1]), t.x2 != null && i.push([t.x2, t.y2]), i.push([t.x, t.y]), yw(i, n).map(mw);
}
var ww = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, Ir = {
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
function pw(e) {
  return "".concat(e.type).concat(Ir[e.type].map(function(t) {
    return e[t];
  }).join(","));
}
function vw(e, t) {
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
function kw(e, t, n) {
  var i = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C")
    i = i.concat(bw(e, t, n));
  else {
    var l = Zo({}, e);
    l.type === "M" && (l.type = "L"), i = i.concat(Yu(n - 1).map(function() {
      return l;
    })), i.push(t);
  }
  return i;
}
function yh(e, t, n) {
  var i = e.length - 1, l = t.length - 1, f = i / l, u = Yu(l).reduce(function(_, h, d) {
    var c = Math.floor(f * d);
    if (n && c < e.length - 1 && n(e[c], e[c + 1])) {
      var g = f * d % 1 < 0.5;
      _[c] && (g ? c > 0 ? c -= 1 : c < e.length - 1 && (c += 1) : c < e.length - 1 ? c += 1 : c > 0 && (c -= 1));
    }
    return _[c] = (_[c] || 0) + 1, _;
  }, []), a = u.reduce(function(_, h, d) {
    if (d === e.length - 1) {
      var c = Yu(h, Zo({}, e[e.length - 1]));
      return c[0].type === "M" && c.forEach(function(g) {
        g.type = "L";
      }), _.concat(c);
    }
    return _.concat(kw(e[d], e[d + 1], h));
  }, []);
  return a.unshift(e[0]), a;
}
function bh(e) {
  for (var t = (e || "").match(ww) || [], n = [], i, l, f = 0; f < t.length; ++f)
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
function xw(e, t, n) {
  var i = e == null ? [] : e.slice(), l = t == null ? [] : t.slice(), f = pl(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, u = f.excludeSegment, a = f.snapEndsToInput;
  if (!i.length && !l.length)
    return function() {
      return [];
    };
  var _ = (i.length === 0 || i[i.length - 1].type === "Z") && (l.length === 0 || l[l.length - 1].type === "Z");
  i.length > 0 && i[i.length - 1].type === "Z" && i.pop(), l.length > 0 && l[l.length - 1].type === "Z" && l.pop(), i.length ? l.length || l.push(i[0]) : i.push(l[0]);
  var h = Math.abs(l.length - i.length);
  h !== 0 && (l.length > i.length ? i = yh(i, l, u) : l.length < i.length && (l = yh(l, i, u))), i = i.map(function(c, g) {
    return vw(c, l[g]);
  });
  var d = i.map(function(c) {
    return hw({}, c);
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
      var p = i[w], S = l[w], x = d[w], T = Qc(Ir[x.type]), z;
      try {
        for (T.s(); !(z = T.n()).done; ) {
          var C = z.value;
          x[C] = (1 - g) * p[C] + g * S[C], (C === "largeArcFlag" || C === "sweepFlag") && (x[C] = Math.round(x[C]));
        }
      } catch (F) {
        T.e(F);
      } finally {
        T.f();
      }
    }
    return d;
  };
}
function Mw(e, t, n) {
  var i = bh(e), l = bh(t), f = pl(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, u = f.excludeSegment, a = f.snapEndsToInput;
  if (!i.length && !l.length)
    return function() {
      return "";
    };
  var _ = xw(i, l, {
    excludeSegment: u,
    snapEndsToInput: a
  });
  return function(d) {
    if (d === 1 && a)
      return t ?? "";
    var c = _(d), g = "", w = Qc(c), p;
    try {
      for (w.s(); !(p = w.n()).done; ) {
        var S = p.value;
        g += pw(S);
      }
    } catch (x) {
      w.e(x);
    } finally {
      w.f();
    }
    return g;
  };
}
var vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jo = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
jo.exports;
(function(e, t) {
  (function() {
    var n, i = "4.17.21", l = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", a = "Invalid `variable` option passed into `_.template`", _ = "__lodash_hash_undefined__", h = 500, d = "__lodash_placeholder__", c = 1, g = 2, w = 4, p = 1, S = 2, x = 1, T = 2, z = 4, C = 8, F = 16, R = 32, I = 64, G = 128, D = 256, ee = 512, W = 30, K = "...", se = 800, ce = 16, fe = 1, re = 2, J = 3, B = 1 / 0, A = 9007199254740991, E = 17976931348623157e292, de = 0 / 0, he = 4294967295, pt = he - 1, Kt = he >>> 1, Je = [
      ["ary", G],
      ["bind", x],
      ["bindKey", T],
      ["curry", C],
      ["curryRight", F],
      ["flip", ee],
      ["partial", R],
      ["partialRight", I],
      ["rearg", D]
    ], Ue = "[object Arguments]", $e = "[object Array]", ut = "[object AsyncFunction]", Xe = "[object Boolean]", ae = "[object Date]", me = "[object DOMException]", be = "[object Error]", Q = "[object Function]", Ae = "[object GeneratorFunction]", ye = "[object Map]", He = "[object Number]", Qe = "[object Null]", et = "[object Object]", qe = "[object Promise]", H = "[object Proxy]", le = "[object RegExp]", Me = "[object Set]", xt = "[object String]", Mt = "[object Symbol]", Yt = "[object Undefined]", ct = "[object WeakMap]", Tt = "[object WeakSet]", $t = "[object ArrayBuffer]", yt = "[object DataView]", St = "[object Float32Array]", en = "[object Float64Array]", Nn = "[object Int8Array]", tn = "[object Int16Array]", ln = "[object Int32Array]", Jn = "[object Uint8Array]", cn = "[object Uint8ClampedArray]", Mn = "[object Uint16Array]", on = "[object Uint32Array]", Tn = /\b__p \+= '';/g, zt = /\b(__p \+=) '' \+/g, Un = /(__e\(.*?\)|\b__t\)) \+\n'';/g, gn = /&(?:amp|lt|gt|quot|#39);/g, At = /[&<>"']/g, Sn = RegExp(gn.source), zn = RegExp(At.source), Qn = /<%-([\s\S]+?)%>/g, Vn = /<%([\s\S]+?)%>/g, An = /<%=([\s\S]+?)%>/g, V = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tt = /^\w*$/, Ct = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fn = /[\\^$.*+?()[\]{}|]/g, un = RegExp(fn.source), Pn = /^\s+/, ri = /\s/, si = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Xr = /\{\n\/\* \[wrapped with (.+)\] \*/, lr = /,? & /, or = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, qr = /[()=,{}\[\]\/\s]/, Gr = /\\(\\)?/g, Cn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, dn = /\w*$/, Y = /^[-+]0x[0-9a-f]+$/i, Lt = /^0b[01]+$/i, vt = /^\[object .+?Constructor\]$/, Si = /^0o[0-7]+$/i, zi = /^(?:0|[1-9]\d*)$/, fr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Fn = /($^)/, _i = /['\n\r\u2028\u2029\\]/g, Ai = "\\ud800-\\udfff", Zr = "\\u0300-\\u036f", jr = "\\ufe20-\\ufe2f", nf = "\\u20d0-\\u20ff", Ul = Zr + jr + nf, Pl = "\\u2700-\\u27bf", Fl = "a-z\\xdf-\\xf6\\xf8-\\xff", rf = "\\xac\\xb1\\xd7\\xf7", lf = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", of = "\\u2000-\\u206f", ff = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", U = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ft = "\\ufe0e\\ufe0f", Ot = rf + lf + of + ff, Kr = "['’]", uf = "[" + Ai + "]", Jr = "[" + Ot + "]", ur = "[" + Ul + "]", Wl = "\\d+", af = "[" + Pl + "]", Bl = "[" + Fl + "]", Hl = "[^" + Ai + Ot + Wl + Pl + Fl + U + "]", sf = "\\ud83c[\\udffb-\\udfff]", h0 = "(?:" + ur + "|" + sf + ")", ma = "[^" + Ai + "]", _f = "(?:\\ud83c[\\udde6-\\uddff]){2}", hf = "[\\ud800-\\udbff][\\udc00-\\udfff]", ar = "[" + U + "]", ya = "\\u200d", ba = "(?:" + Bl + "|" + Hl + ")", c0 = "(?:" + ar + "|" + Hl + ")", wa = "(?:" + Kr + "(?:d|ll|m|re|s|t|ve))?", pa = "(?:" + Kr + "(?:D|LL|M|RE|S|T|VE))?", va = h0 + "?", ka = "[" + Ft + "]?", g0 = "(?:" + ya + "(?:" + [ma, _f, hf].join("|") + ")" + ka + va + ")*", d0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", m0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", xa = ka + va + g0, y0 = "(?:" + [af, _f, hf].join("|") + ")" + xa, b0 = "(?:" + [ma + ur + "?", ur, _f, hf, uf].join("|") + ")", w0 = RegExp(Kr, "g"), p0 = RegExp(ur, "g"), cf = RegExp(sf + "(?=" + sf + ")|" + b0 + xa, "g"), v0 = RegExp([
      ar + "?" + Bl + "+" + wa + "(?=" + [Jr, ar, "$"].join("|") + ")",
      c0 + "+" + pa + "(?=" + [Jr, ar + ba, "$"].join("|") + ")",
      ar + "?" + ba + "+" + wa,
      ar + "+" + pa,
      m0,
      d0,
      Wl,
      y0
    ].join("|"), "g"), k0 = RegExp("[" + ya + Ai + Ul + Ft + "]"), x0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, M0 = [
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
    mt[St] = mt[en] = mt[Nn] = mt[tn] = mt[ln] = mt[Jn] = mt[cn] = mt[Mn] = mt[on] = !0, mt[Ue] = mt[$e] = mt[$t] = mt[Xe] = mt[yt] = mt[ae] = mt[be] = mt[Q] = mt[ye] = mt[He] = mt[et] = mt[le] = mt[Me] = mt[xt] = mt[ct] = !1;
    var gt = {};
    gt[Ue] = gt[$e] = gt[$t] = gt[yt] = gt[Xe] = gt[ae] = gt[St] = gt[en] = gt[Nn] = gt[tn] = gt[ln] = gt[ye] = gt[He] = gt[et] = gt[le] = gt[Me] = gt[xt] = gt[Mt] = gt[Jn] = gt[cn] = gt[Mn] = gt[on] = !0, gt[be] = gt[Q] = gt[ct] = !1;
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
    }, L0 = parseFloat, E0 = parseInt, Ma = typeof vi == "object" && vi && vi.Object === Object && vi, R0 = typeof self == "object" && self && self.Object === Object && self, Jt = Ma || R0 || Function("return this")(), gf = t && !t.nodeType && t, Wi = gf && !0 && e && !e.nodeType && e, Ta = Wi && Wi.exports === gf, df = Ta && Ma.process, Wn = function() {
      try {
        var N = Wi && Wi.require && Wi.require("util").types;
        return N || df && df.binding && df.binding("util");
      } catch {
      }
    }(), Sa = Wn && Wn.isArrayBuffer, za = Wn && Wn.isDate, Aa = Wn && Wn.isMap, Ca = Wn && Wn.isRegExp, La = Wn && Wn.isSet, Ea = Wn && Wn.isTypedArray;
    function Ln(N, $, q) {
      switch (q.length) {
        case 0:
          return N.call($);
        case 1:
          return N.call($, q[0]);
        case 2:
          return N.call($, q[0], q[1]);
        case 3:
          return N.call($, q[0], q[1], q[2]);
      }
      return N.apply($, q);
    }
    function I0(N, $, q, we) {
      for (var Ee = -1, nt = N == null ? 0 : N.length; ++Ee < nt; ) {
        var Wt = N[Ee];
        $(we, Wt, q(Wt), N);
      }
      return we;
    }
    function Bn(N, $) {
      for (var q = -1, we = N == null ? 0 : N.length; ++q < we && $(N[q], q, N) !== !1; )
        ;
      return N;
    }
    function O0(N, $) {
      for (var q = N == null ? 0 : N.length; q-- && $(N[q], q, N) !== !1; )
        ;
      return N;
    }
    function Ra(N, $) {
      for (var q = -1, we = N == null ? 0 : N.length; ++q < we; )
        if (!$(N[q], q, N))
          return !1;
      return !0;
    }
    function Ci(N, $) {
      for (var q = -1, we = N == null ? 0 : N.length, Ee = 0, nt = []; ++q < we; ) {
        var Wt = N[q];
        $(Wt, q, N) && (nt[Ee++] = Wt);
      }
      return nt;
    }
    function Yl(N, $) {
      var q = N == null ? 0 : N.length;
      return !!q && sr(N, $, 0) > -1;
    }
    function mf(N, $, q) {
      for (var we = -1, Ee = N == null ? 0 : N.length; ++we < Ee; )
        if (q($, N[we]))
          return !0;
      return !1;
    }
    function bt(N, $) {
      for (var q = -1, we = N == null ? 0 : N.length, Ee = Array(we); ++q < we; )
        Ee[q] = $(N[q], q, N);
      return Ee;
    }
    function Li(N, $) {
      for (var q = -1, we = $.length, Ee = N.length; ++q < we; )
        N[Ee + q] = $[q];
      return N;
    }
    function yf(N, $, q, we) {
      var Ee = -1, nt = N == null ? 0 : N.length;
      for (we && nt && (q = N[++Ee]); ++Ee < nt; )
        q = $(q, N[Ee], Ee, N);
      return q;
    }
    function D0(N, $, q, we) {
      var Ee = N == null ? 0 : N.length;
      for (we && Ee && (q = N[--Ee]); Ee--; )
        q = $(q, N[Ee], Ee, N);
      return q;
    }
    function bf(N, $) {
      for (var q = -1, we = N == null ? 0 : N.length; ++q < we; )
        if ($(N[q], q, N))
          return !0;
      return !1;
    }
    var N0 = wf("length");
    function U0(N) {
      return N.split("");
    }
    function P0(N) {
      return N.match(or) || [];
    }
    function Ia(N, $, q) {
      var we;
      return q(N, function(Ee, nt, Wt) {
        if ($(Ee, nt, Wt))
          return we = nt, !1;
      }), we;
    }
    function Xl(N, $, q, we) {
      for (var Ee = N.length, nt = q + (we ? 1 : -1); we ? nt-- : ++nt < Ee; )
        if ($(N[nt], nt, N))
          return nt;
      return -1;
    }
    function sr(N, $, q) {
      return $ === $ ? J0(N, $, q) : Xl(N, Oa, q);
    }
    function F0(N, $, q, we) {
      for (var Ee = q - 1, nt = N.length; ++Ee < nt; )
        if (we(N[Ee], $))
          return Ee;
      return -1;
    }
    function Oa(N) {
      return N !== N;
    }
    function Da(N, $) {
      var q = N == null ? 0 : N.length;
      return q ? vf(N, $) / q : de;
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
    function Na(N, $, q, we, Ee) {
      return Ee(N, function(nt, Wt, at) {
        q = we ? (we = !1, nt) : $(q, nt, Wt, at);
      }), q;
    }
    function W0(N, $) {
      var q = N.length;
      for (N.sort($); q--; )
        N[q] = N[q].value;
      return N;
    }
    function vf(N, $) {
      for (var q, we = -1, Ee = N.length; ++we < Ee; ) {
        var nt = $(N[we]);
        nt !== n && (q = q === n ? nt : q + nt);
      }
      return q;
    }
    function kf(N, $) {
      for (var q = -1, we = Array(N); ++q < N; )
        we[q] = $(q);
      return we;
    }
    function B0(N, $) {
      return bt($, function(q) {
        return [q, N[q]];
      });
    }
    function Ua(N) {
      return N && N.slice(0, Ba(N) + 1).replace(Pn, "");
    }
    function En(N) {
      return function($) {
        return N($);
      };
    }
    function xf(N, $) {
      return bt($, function(q) {
        return N[q];
      });
    }
    function Qr(N, $) {
      return N.has($);
    }
    function Pa(N, $) {
      for (var q = -1, we = N.length; ++q < we && sr($, N[q], 0) > -1; )
        ;
      return q;
    }
    function Fa(N, $) {
      for (var q = N.length; q-- && sr($, N[q], 0) > -1; )
        ;
      return q;
    }
    function H0(N, $) {
      for (var q = N.length, we = 0; q--; )
        N[q] === $ && ++we;
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
      for (var $, q = []; !($ = N.next()).done; )
        q.push($.value);
      return q;
    }
    function Mf(N) {
      var $ = -1, q = Array(N.size);
      return N.forEach(function(we, Ee) {
        q[++$] = [Ee, we];
      }), q;
    }
    function Wa(N, $) {
      return function(q) {
        return N($(q));
      };
    }
    function Ei(N, $) {
      for (var q = -1, we = N.length, Ee = 0, nt = []; ++q < we; ) {
        var Wt = N[q];
        (Wt === $ || Wt === d) && (N[q] = d, nt[Ee++] = q);
      }
      return nt;
    }
    function ql(N) {
      var $ = -1, q = Array(N.size);
      return N.forEach(function(we) {
        q[++$] = we;
      }), q;
    }
    function K0(N) {
      var $ = -1, q = Array(N.size);
      return N.forEach(function(we) {
        q[++$] = [we, we];
      }), q;
    }
    function J0(N, $, q) {
      for (var we = q - 1, Ee = N.length; ++we < Ee; )
        if (N[we] === $)
          return we;
      return -1;
    }
    function Q0(N, $, q) {
      for (var we = q + 1; we--; )
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
    function Ba(N) {
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
      var q = $.Array, we = $.Date, Ee = $.Error, nt = $.Function, Wt = $.Math, at = $.Object, Tf = $.RegExp, ig = $.String, Hn = $.TypeError, Gl = q.prototype, rg = nt.prototype, gr = at.prototype, Zl = $["__core-js_shared__"], jl = rg.toString, ot = gr.hasOwnProperty, lg = 0, Ha = function() {
        var r = /[^.]+$/.exec(Zl && Zl.keys && Zl.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), Kl = gr.toString, og = jl.call(at), fg = Jt._, ug = Tf(
        "^" + jl.call(ot).replace(fn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Jl = Ta ? $.Buffer : n, Ri = $.Symbol, Ql = $.Uint8Array, Ya = Jl ? Jl.allocUnsafe : n, Vl = Wa(at.getPrototypeOf, at), Xa = at.create, qa = gr.propertyIsEnumerable, $l = Gl.splice, Ga = Ri ? Ri.isConcatSpreadable : n, Vr = Ri ? Ri.iterator : n, Bi = Ri ? Ri.toStringTag : n, eo = function() {
        try {
          var r = Gi(at, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), ag = $.clearTimeout !== Jt.clearTimeout && $.clearTimeout, sg = we && we.now !== Jt.Date.now && we.now, _g = $.setTimeout !== Jt.setTimeout && $.setTimeout, to = Wt.ceil, no = Wt.floor, Sf = at.getOwnPropertySymbols, hg = Jl ? Jl.isBuffer : n, Za = $.isFinite, cg = Gl.join, gg = Wa(at.keys, at), Bt = Wt.max, nn = Wt.min, dg = we.now, mg = $.parseInt, ja = Wt.random, yg = Gl.reverse, zf = Gi($, "DataView"), $r = Gi($, "Map"), Af = Gi($, "Promise"), dr = Gi($, "Set"), el = Gi($, "WeakMap"), tl = Gi(at, "create"), io = el && new el(), mr = {}, bg = Zi(zf), wg = Zi($r), pg = Zi(Af), vg = Zi(dr), kg = Zi(el), ro = Ri ? Ri.prototype : n, nl = ro ? ro.valueOf : n, Ka = ro ? ro.toString : n;
      function k(r) {
        if (Et(r) && !Re(r) && !(r instanceof Ye)) {
          if (r instanceof Yn)
            return r;
          if (ot.call(r, "__wrapped__"))
            return Js(r);
        }
        return new Yn(r);
      }
      var yr = function() {
        function r() {
        }
        return function(o) {
          if (!kt(o))
            return {};
          if (Xa)
            return Xa(o);
          r.prototype = o;
          var s = new r();
          return r.prototype = n, s;
        };
      }();
      function lo() {
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
      }, k.prototype = lo.prototype, k.prototype.constructor = k, Yn.prototype = yr(lo.prototype), Yn.prototype.constructor = Yn;
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
        var r = this.__wrapped__.value(), o = this.__dir__, s = Re(r), m = o < 0, b = s ? r.length : 0, M = Ud(0, b, this.__views__), L = M.start, O = M.end, P = O - L, ne = m ? O : L - 1, ie = this.__iteratees__, oe = ie.length, ge = 0, pe = nn(P, this.__takeCount__);
        if (!s || !m && b == P && pe == P)
          return ws(r, this.__actions__);
        var Te = [];
        e:
          for (; P-- && ge < pe; ) {
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
      Ye.prototype = yr(lo.prototype), Ye.prototype.constructor = Ye;
      function Hi(r) {
        var o = -1, s = r == null ? 0 : r.length;
        for (this.clear(); ++o < s; ) {
          var m = r[o];
          this.set(m[0], m[1]);
        }
      }
      function Sg() {
        this.__data__ = tl ? tl(null) : {}, this.size = 0;
      }
      function zg(r) {
        var o = this.has(r) && delete this.__data__[r];
        return this.size -= o ? 1 : 0, o;
      }
      function Ag(r) {
        var o = this.__data__;
        if (tl) {
          var s = o[r];
          return s === _ ? n : s;
        }
        return ot.call(o, r) ? o[r] : n;
      }
      function Cg(r) {
        var o = this.__data__;
        return tl ? o[r] !== n : ot.call(o, r);
      }
      function Lg(r, o) {
        var s = this.__data__;
        return this.size += this.has(r) ? 0 : 1, s[r] = tl && o === n ? _ : o, this;
      }
      Hi.prototype.clear = Sg, Hi.prototype.delete = zg, Hi.prototype.get = Ag, Hi.prototype.has = Cg, Hi.prototype.set = Lg;
      function hi(r) {
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
        var o = this.__data__, s = oo(o, r);
        if (s < 0)
          return !1;
        var m = o.length - 1;
        return s == m ? o.pop() : $l.call(o, s, 1), --this.size, !0;
      }
      function Ig(r) {
        var o = this.__data__, s = oo(o, r);
        return s < 0 ? n : o[s][1];
      }
      function Og(r) {
        return oo(this.__data__, r) > -1;
      }
      function Dg(r, o) {
        var s = this.__data__, m = oo(s, r);
        return m < 0 ? (++this.size, s.push([r, o])) : s[m][1] = o, this;
      }
      hi.prototype.clear = Eg, hi.prototype.delete = Rg, hi.prototype.get = Ig, hi.prototype.has = Og, hi.prototype.set = Dg;
      function ci(r) {
        var o = -1, s = r == null ? 0 : r.length;
        for (this.clear(); ++o < s; ) {
          var m = r[o];
          this.set(m[0], m[1]);
        }
      }
      function Ng() {
        this.size = 0, this.__data__ = {
          hash: new Hi(),
          map: new ($r || hi)(),
          string: new Hi()
        };
      }
      function Ug(r) {
        var o = wo(this, r).delete(r);
        return this.size -= o ? 1 : 0, o;
      }
      function Pg(r) {
        return wo(this, r).get(r);
      }
      function Fg(r) {
        return wo(this, r).has(r);
      }
      function Wg(r, o) {
        var s = wo(this, r), m = s.size;
        return s.set(r, o), this.size += s.size == m ? 0 : 1, this;
      }
      ci.prototype.clear = Ng, ci.prototype.delete = Ug, ci.prototype.get = Pg, ci.prototype.has = Fg, ci.prototype.set = Wg;
      function Yi(r) {
        var o = -1, s = r == null ? 0 : r.length;
        for (this.__data__ = new ci(); ++o < s; )
          this.add(r[o]);
      }
      function Bg(r) {
        return this.__data__.set(r, _), this;
      }
      function Hg(r) {
        return this.__data__.has(r);
      }
      Yi.prototype.add = Yi.prototype.push = Bg, Yi.prototype.has = Hg;
      function ei(r) {
        var o = this.__data__ = new hi(r);
        this.size = o.size;
      }
      function Yg() {
        this.__data__ = new hi(), this.size = 0;
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
        if (s instanceof hi) {
          var m = s.__data__;
          if (!$r || m.length < l - 1)
            return m.push([r, o]), this.size = ++s.size, this;
          s = this.__data__ = new ci(m);
        }
        return s.set(r, o), this.size = s.size, this;
      }
      ei.prototype.clear = Yg, ei.prototype.delete = Xg, ei.prototype.get = qg, ei.prototype.has = Gg, ei.prototype.set = Zg;
      function Ja(r, o) {
        var s = Re(r), m = !s && ji(r), b = !s && !m && Ui(r), M = !s && !m && !b && vr(r), L = s || m || b || M, O = L ? kf(r.length, ig) : [], P = O.length;
        for (var ne in r)
          (o || ot.call(r, ne)) && !(L && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ne == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          b && (ne == "offset" || ne == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          M && (ne == "buffer" || ne == "byteLength" || ne == "byteOffset") || // Skip index properties.
          yi(ne, P))) && O.push(ne);
        return O;
      }
      function Qa(r) {
        var o = r.length;
        return o ? r[Ff(0, o - 1)] : n;
      }
      function jg(r, o) {
        return po(mn(r), Xi(o, 0, r.length));
      }
      function Kg(r) {
        return po(mn(r));
      }
      function Cf(r, o, s) {
        (s !== n && !ti(r[o], s) || s === n && !(o in r)) && gi(r, o, s);
      }
      function il(r, o, s) {
        var m = r[o];
        (!(ot.call(r, o) && ti(m, s)) || s === n && !(o in r)) && gi(r, o, s);
      }
      function oo(r, o) {
        for (var s = r.length; s--; )
          if (ti(r[s][0], o))
            return s;
        return -1;
      }
      function Jg(r, o, s, m) {
        return Ii(r, function(b, M, L) {
          o(m, b, s(b), L);
        }), m;
      }
      function Va(r, o) {
        return r && oi(o, Xt(o), r);
      }
      function Qg(r, o) {
        return r && oi(o, bn(o), r);
      }
      function gi(r, o, s) {
        o == "__proto__" && eo ? eo(r, o, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : r[o] = s;
      }
      function Lf(r, o) {
        for (var s = -1, m = o.length, b = q(m), M = r == null; ++s < m; )
          b[s] = M ? n : su(r, o[s]);
        return b;
      }
      function Xi(r, o, s) {
        return r === r && (s !== n && (r = r <= s ? r : s), o !== n && (r = r >= o ? r : o)), r;
      }
      function Xn(r, o, s, m, b, M) {
        var L, O = o & c, P = o & g, ne = o & w;
        if (s && (L = b ? s(r, m, b, M) : s(r)), L !== n)
          return L;
        if (!kt(r))
          return r;
        var ie = Re(r);
        if (ie) {
          if (L = Fd(r), !O)
            return mn(r, L);
        } else {
          var oe = rn(r), ge = oe == Q || oe == Ae;
          if (Ui(r))
            return ks(r, O);
          if (oe == et || oe == Ue || ge && !b) {
            if (L = P || ge ? {} : Bs(r), !O)
              return P ? Ad(r, Qg(L, r)) : zd(r, Va(L, r));
          } else {
            if (!gt[oe])
              return b ? r : {};
            L = Wd(r, oe, O);
          }
        }
        M || (M = new ei());
        var pe = M.get(r);
        if (pe)
          return pe;
        M.set(r, L), m_(r) ? r.forEach(function(Se) {
          L.add(Xn(Se, o, s, Se, r, M));
        }) : g_(r) && r.forEach(function(Se, Fe) {
          L.set(Fe, Xn(Se, o, s, Fe, r, M));
        });
        var Te = ne ? P ? Jf : Kf : P ? bn : Xt, De = ie ? n : Te(r);
        return Bn(De || r, function(Se, Fe) {
          De && (Fe = Se, Se = r[Fe]), il(L, Fe, Xn(Se, o, s, Fe, r, M));
        }), L;
      }
      function Vg(r) {
        var o = Xt(r);
        return function(s) {
          return $a(s, r, o);
        };
      }
      function $a(r, o, s) {
        var m = s.length;
        if (r == null)
          return !m;
        for (r = at(r); m--; ) {
          var b = s[m], M = o[b], L = r[b];
          if (L === n && !(b in r) || !M(L))
            return !1;
        }
        return !0;
      }
      function es(r, o, s) {
        if (typeof r != "function")
          throw new Hn(u);
        return sl(function() {
          r.apply(n, s);
        }, o);
      }
      function rl(r, o, s, m) {
        var b = -1, M = Yl, L = !0, O = r.length, P = [], ne = o.length;
        if (!O)
          return P;
        s && (o = bt(o, En(s))), m ? (M = mf, L = !1) : o.length >= l && (M = Qr, L = !1, o = new Yi(o));
        e:
          for (; ++b < O; ) {
            var ie = r[b], oe = s == null ? ie : s(ie);
            if (ie = m || ie !== 0 ? ie : 0, L && oe === oe) {
              for (var ge = ne; ge--; )
                if (o[ge] === oe)
                  continue e;
              P.push(ie);
            } else
              M(o, oe, m) || P.push(ie);
          }
        return P;
      }
      var Ii = zs(li), ts = zs(Rf, !0);
      function $g(r, o) {
        var s = !0;
        return Ii(r, function(m, b, M) {
          return s = !!o(m, b, M), s;
        }), s;
      }
      function fo(r, o, s) {
        for (var m = -1, b = r.length; ++m < b; ) {
          var M = r[m], L = o(M);
          if (L != null && (O === n ? L === L && !In(L) : s(L, O)))
            var O = L, P = M;
        }
        return P;
      }
      function ed(r, o, s, m) {
        var b = r.length;
        for (s = Ie(s), s < 0 && (s = -s > b ? 0 : b + s), m = m === n || m > b ? b : Ie(m), m < 0 && (m += b), m = s > m ? 0 : b_(m); s < m; )
          r[s++] = o;
        return r;
      }
      function ns(r, o) {
        var s = [];
        return Ii(r, function(m, b, M) {
          o(m, b, M) && s.push(m);
        }), s;
      }
      function Qt(r, o, s, m, b) {
        var M = -1, L = r.length;
        for (s || (s = Hd), b || (b = []); ++M < L; ) {
          var O = r[M];
          o > 0 && s(O) ? o > 1 ? Qt(O, o - 1, s, m, b) : Li(b, O) : m || (b[b.length] = O);
        }
        return b;
      }
      var Ef = As(), is = As(!0);
      function li(r, o) {
        return r && Ef(r, o, Xt);
      }
      function Rf(r, o) {
        return r && is(r, o, Xt);
      }
      function uo(r, o) {
        return Ci(o, function(s) {
          return bi(r[s]);
        });
      }
      function qi(r, o) {
        o = Di(o, r);
        for (var s = 0, m = o.length; r != null && s < m; )
          r = r[fi(o[s++])];
        return s && s == m ? r : n;
      }
      function rs(r, o, s) {
        var m = o(r);
        return Re(r) ? m : Li(m, s(r));
      }
      function an(r) {
        return r == null ? r === n ? Yt : Qe : Bi && Bi in at(r) ? Nd(r) : Kd(r);
      }
      function If(r, o) {
        return r > o;
      }
      function td(r, o) {
        return r != null && ot.call(r, o);
      }
      function nd(r, o) {
        return r != null && o in at(r);
      }
      function id(r, o, s) {
        return r >= nn(o, s) && r < Bt(o, s);
      }
      function Of(r, o, s) {
        for (var m = s ? mf : Yl, b = r[0].length, M = r.length, L = M, O = q(M), P = 1 / 0, ne = []; L--; ) {
          var ie = r[L];
          L && o && (ie = bt(ie, En(o))), P = nn(ie.length, P), O[L] = !s && (o || b >= 120 && ie.length >= 120) ? new Yi(L && ie) : n;
        }
        ie = r[0];
        var oe = -1, ge = O[0];
        e:
          for (; ++oe < b && ne.length < P; ) {
            var pe = ie[oe], Te = o ? o(pe) : pe;
            if (pe = s || pe !== 0 ? pe : 0, !(ge ? Qr(ge, Te) : m(ne, Te, s))) {
              for (L = M; --L; ) {
                var De = O[L];
                if (!(De ? Qr(De, Te) : m(r[L], Te, s)))
                  continue e;
              }
              ge && ge.push(Te), ne.push(pe);
            }
          }
        return ne;
      }
      function rd(r, o, s, m) {
        return li(r, function(b, M, L) {
          o(m, s(b), M, L);
        }), m;
      }
      function ll(r, o, s) {
        o = Di(o, r), r = qs(r, o);
        var m = r == null ? r : r[fi(Gn(o))];
        return m == null ? n : Ln(m, r, s);
      }
      function ls(r) {
        return Et(r) && an(r) == Ue;
      }
      function ld(r) {
        return Et(r) && an(r) == $t;
      }
      function od(r) {
        return Et(r) && an(r) == ae;
      }
      function ol(r, o, s, m, b) {
        return r === o ? !0 : r == null || o == null || !Et(r) && !Et(o) ? r !== r && o !== o : fd(r, o, s, m, ol, b);
      }
      function fd(r, o, s, m, b, M) {
        var L = Re(r), O = Re(o), P = L ? $e : rn(r), ne = O ? $e : rn(o);
        P = P == Ue ? et : P, ne = ne == Ue ? et : ne;
        var ie = P == et, oe = ne == et, ge = P == ne;
        if (ge && Ui(r)) {
          if (!Ui(o))
            return !1;
          L = !0, ie = !1;
        }
        if (ge && !ie)
          return M || (M = new ei()), L || vr(r) ? Ps(r, o, s, m, b, M) : Od(r, o, P, s, m, b, M);
        if (!(s & p)) {
          var pe = ie && ot.call(r, "__wrapped__"), Te = oe && ot.call(o, "__wrapped__");
          if (pe || Te) {
            var De = pe ? r.value() : r, Se = Te ? o.value() : o;
            return M || (M = new ei()), b(De, Se, s, m, M);
          }
        }
        return ge ? (M || (M = new ei()), Dd(r, o, s, m, b, M)) : !1;
      }
      function ud(r) {
        return Et(r) && rn(r) == ye;
      }
      function Df(r, o, s, m) {
        var b = s.length, M = b, L = !m;
        if (r == null)
          return !M;
        for (r = at(r); b--; ) {
          var O = s[b];
          if (L && O[2] ? O[1] !== r[O[0]] : !(O[0] in r))
            return !1;
        }
        for (; ++b < M; ) {
          O = s[b];
          var P = O[0], ne = r[P], ie = O[1];
          if (L && O[2]) {
            if (ne === n && !(P in r))
              return !1;
          } else {
            var oe = new ei();
            if (m)
              var ge = m(ne, ie, P, r, o, oe);
            if (!(ge === n ? ol(ie, ne, p | S, m, oe) : ge))
              return !1;
          }
        }
        return !0;
      }
      function os(r) {
        if (!kt(r) || Xd(r))
          return !1;
        var o = bi(r) ? ug : vt;
        return o.test(Zi(r));
      }
      function ad(r) {
        return Et(r) && an(r) == le;
      }
      function sd(r) {
        return Et(r) && rn(r) == Me;
      }
      function _d(r) {
        return Et(r) && So(r.length) && !!mt[an(r)];
      }
      function fs(r) {
        return typeof r == "function" ? r : r == null ? wn : typeof r == "object" ? Re(r) ? ss(r[0], r[1]) : as(r) : C_(r);
      }
      function Nf(r) {
        if (!al(r))
          return gg(r);
        var o = [];
        for (var s in at(r))
          ot.call(r, s) && s != "constructor" && o.push(s);
        return o;
      }
      function hd(r) {
        if (!kt(r))
          return jd(r);
        var o = al(r), s = [];
        for (var m in r)
          m == "constructor" && (o || !ot.call(r, m)) || s.push(m);
        return s;
      }
      function Uf(r, o) {
        return r < o;
      }
      function us(r, o) {
        var s = -1, m = yn(r) ? q(r.length) : [];
        return Ii(r, function(b, M, L) {
          m[++s] = o(b, M, L);
        }), m;
      }
      function as(r) {
        var o = Vf(r);
        return o.length == 1 && o[0][2] ? Ys(o[0][0], o[0][1]) : function(s) {
          return s === r || Df(s, r, o);
        };
      }
      function ss(r, o) {
        return eu(r) && Hs(o) ? Ys(fi(r), o) : function(s) {
          var m = su(s, r);
          return m === n && m === o ? _u(s, r) : ol(o, m, p | S);
        };
      }
      function ao(r, o, s, m, b) {
        r !== o && Ef(o, function(M, L) {
          if (b || (b = new ei()), kt(M))
            cd(r, o, L, s, ao, m, b);
          else {
            var O = m ? m(nu(r, L), M, L + "", r, o, b) : n;
            O === n && (O = M), Cf(r, L, O);
          }
        }, bn);
      }
      function cd(r, o, s, m, b, M, L) {
        var O = nu(r, s), P = nu(o, s), ne = L.get(P);
        if (ne) {
          Cf(r, s, ne);
          return;
        }
        var ie = M ? M(O, P, s + "", r, o, L) : n, oe = ie === n;
        if (oe) {
          var ge = Re(P), pe = !ge && Ui(P), Te = !ge && !pe && vr(P);
          ie = P, ge || pe || Te ? Re(O) ? ie = O : Dt(O) ? ie = mn(O) : pe ? (oe = !1, ie = ks(P, !0)) : Te ? (oe = !1, ie = xs(P, !0)) : ie = [] : _l(P) || ji(P) ? (ie = O, ji(O) ? ie = w_(O) : (!kt(O) || bi(O)) && (ie = Bs(P))) : oe = !1;
        }
        oe && (L.set(P, ie), b(ie, P, m, M, L), L.delete(P)), Cf(r, s, ie);
      }
      function _s(r, o) {
        var s = r.length;
        if (s)
          return o += o < 0 ? s : 0, yi(o, s) ? r[o] : n;
      }
      function hs(r, o, s) {
        o.length ? o = bt(o, function(M) {
          return Re(M) ? function(L) {
            return qi(L, M.length === 1 ? M[0] : M);
          } : M;
        }) : o = [wn];
        var m = -1;
        o = bt(o, En(xe()));
        var b = us(r, function(M, L, O) {
          var P = bt(o, function(ne) {
            return ne(M);
          });
          return { criteria: P, index: ++m, value: M };
        });
        return W0(b, function(M, L) {
          return Sd(M, L, s);
        });
      }
      function gd(r, o) {
        return cs(r, o, function(s, m) {
          return _u(r, m);
        });
      }
      function cs(r, o, s) {
        for (var m = -1, b = o.length, M = {}; ++m < b; ) {
          var L = o[m], O = qi(r, L);
          s(O, L) && fl(M, Di(L, r), O);
        }
        return M;
      }
      function dd(r) {
        return function(o) {
          return qi(o, r);
        };
      }
      function Pf(r, o, s, m) {
        var b = m ? F0 : sr, M = -1, L = o.length, O = r;
        for (r === o && (o = mn(o)), s && (O = bt(r, En(s))); ++M < L; )
          for (var P = 0, ne = o[M], ie = s ? s(ne) : ne; (P = b(O, ie, P, m)) > -1; )
            O !== r && $l.call(O, P, 1), $l.call(r, P, 1);
        return r;
      }
      function gs(r, o) {
        for (var s = r ? o.length : 0, m = s - 1; s--; ) {
          var b = o[s];
          if (s == m || b !== M) {
            var M = b;
            yi(b) ? $l.call(r, b, 1) : Hf(r, b);
          }
        }
        return r;
      }
      function Ff(r, o) {
        return r + no(ja() * (o - r + 1));
      }
      function md(r, o, s, m) {
        for (var b = -1, M = Bt(to((o - r) / (s || 1)), 0), L = q(M); M--; )
          L[m ? M : ++b] = r, r += s;
        return L;
      }
      function Wf(r, o) {
        var s = "";
        if (!r || o < 1 || o > A)
          return s;
        do
          o % 2 && (s += r), o = no(o / 2), o && (r += r);
        while (o);
        return s;
      }
      function Ne(r, o) {
        return iu(Xs(r, o, wn), r + "");
      }
      function yd(r) {
        return Qa(kr(r));
      }
      function bd(r, o) {
        var s = kr(r);
        return po(s, Xi(o, 0, s.length));
      }
      function fl(r, o, s, m) {
        if (!kt(r))
          return r;
        o = Di(o, r);
        for (var b = -1, M = o.length, L = M - 1, O = r; O != null && ++b < M; ) {
          var P = fi(o[b]), ne = s;
          if (P === "__proto__" || P === "constructor" || P === "prototype")
            return r;
          if (b != L) {
            var ie = O[P];
            ne = m ? m(ie, P, O) : n, ne === n && (ne = kt(ie) ? ie : yi(o[b + 1]) ? [] : {});
          }
          il(O, P, ne), O = O[P];
        }
        return r;
      }
      var ds = io ? function(r, o) {
        return io.set(r, o), r;
      } : wn, wd = eo ? function(r, o) {
        return eo(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: cu(o),
          writable: !0
        });
      } : wn;
      function pd(r) {
        return po(kr(r));
      }
      function qn(r, o, s) {
        var m = -1, b = r.length;
        o < 0 && (o = -o > b ? 0 : b + o), s = s > b ? b : s, s < 0 && (s += b), b = o > s ? 0 : s - o >>> 0, o >>>= 0;
        for (var M = q(b); ++m < b; )
          M[m] = r[m + o];
        return M;
      }
      function vd(r, o) {
        var s;
        return Ii(r, function(m, b, M) {
          return s = o(m, b, M), !s;
        }), !!s;
      }
      function so(r, o, s) {
        var m = 0, b = r == null ? m : r.length;
        if (typeof o == "number" && o === o && b <= Kt) {
          for (; m < b; ) {
            var M = m + b >>> 1, L = r[M];
            L !== null && !In(L) && (s ? L <= o : L < o) ? m = M + 1 : b = M;
          }
          return b;
        }
        return Bf(r, o, wn, s);
      }
      function Bf(r, o, s, m) {
        var b = 0, M = r == null ? 0 : r.length;
        if (M === 0)
          return 0;
        o = s(o);
        for (var L = o !== o, O = o === null, P = In(o), ne = o === n; b < M; ) {
          var ie = no((b + M) / 2), oe = s(r[ie]), ge = oe !== n, pe = oe === null, Te = oe === oe, De = In(oe);
          if (L)
            var Se = m || Te;
          else
            ne ? Se = Te && (m || ge) : O ? Se = Te && ge && (m || !pe) : P ? Se = Te && ge && !pe && (m || !De) : pe || De ? Se = !1 : Se = m ? oe <= o : oe < o;
          Se ? b = ie + 1 : M = ie;
        }
        return nn(M, pt);
      }
      function ms(r, o) {
        for (var s = -1, m = r.length, b = 0, M = []; ++s < m; ) {
          var L = r[s], O = o ? o(L) : L;
          if (!s || !ti(O, P)) {
            var P = O;
            M[b++] = L === 0 ? 0 : L;
          }
        }
        return M;
      }
      function ys(r) {
        return typeof r == "number" ? r : In(r) ? de : +r;
      }
      function Rn(r) {
        if (typeof r == "string")
          return r;
        if (Re(r))
          return bt(r, Rn) + "";
        if (In(r))
          return Ka ? Ka.call(r) : "";
        var o = r + "";
        return o == "0" && 1 / r == -B ? "-0" : o;
      }
      function Oi(r, o, s) {
        var m = -1, b = Yl, M = r.length, L = !0, O = [], P = O;
        if (s)
          L = !1, b = mf;
        else if (M >= l) {
          var ne = o ? null : Rd(r);
          if (ne)
            return ql(ne);
          L = !1, b = Qr, P = new Yi();
        } else
          P = o ? [] : O;
        e:
          for (; ++m < M; ) {
            var ie = r[m], oe = o ? o(ie) : ie;
            if (ie = s || ie !== 0 ? ie : 0, L && oe === oe) {
              for (var ge = P.length; ge--; )
                if (P[ge] === oe)
                  continue e;
              o && P.push(oe), O.push(ie);
            } else
              b(P, oe, s) || (P !== O && P.push(oe), O.push(ie));
          }
        return O;
      }
      function Hf(r, o) {
        return o = Di(o, r), r = qs(r, o), r == null || delete r[fi(Gn(o))];
      }
      function bs(r, o, s, m) {
        return fl(r, o, s(qi(r, o)), m);
      }
      function _o(r, o, s, m) {
        for (var b = r.length, M = m ? b : -1; (m ? M-- : ++M < b) && o(r[M], M, r); )
          ;
        return s ? qn(r, m ? 0 : M, m ? M + 1 : b) : qn(r, m ? M + 1 : 0, m ? b : M);
      }
      function ws(r, o) {
        var s = r;
        return s instanceof Ye && (s = s.value()), yf(o, function(m, b) {
          return b.func.apply(b.thisArg, Li([m], b.args));
        }, s);
      }
      function Yf(r, o, s) {
        var m = r.length;
        if (m < 2)
          return m ? Oi(r[0]) : [];
        for (var b = -1, M = q(m); ++b < m; )
          for (var L = r[b], O = -1; ++O < m; )
            O != b && (M[b] = rl(M[b] || L, r[O], o, s));
        return Oi(Qt(M, 1), o, s);
      }
      function ps(r, o, s) {
        for (var m = -1, b = r.length, M = o.length, L = {}; ++m < b; ) {
          var O = m < M ? o[m] : n;
          s(L, r[m], O);
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
        return Re(r) ? r : eu(r, o) ? [r] : Ks(lt(r));
      }
      var kd = Ne;
      function Ni(r, o, s) {
        var m = r.length;
        return s = s === n ? m : s, !o && s >= m ? r : qn(r, o, s);
      }
      var vs = ag || function(r) {
        return Jt.clearTimeout(r);
      };
      function ks(r, o) {
        if (o)
          return r.slice();
        var s = r.length, m = Ya ? Ya(s) : new r.constructor(s);
        return r.copy(m), m;
      }
      function Gf(r) {
        var o = new r.constructor(r.byteLength);
        return new Ql(o).set(new Ql(r)), o;
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
        return nl ? at(nl.call(r)) : {};
      }
      function xs(r, o) {
        var s = o ? Gf(r.buffer) : r.buffer;
        return new r.constructor(s, r.byteOffset, r.length);
      }
      function Ms(r, o) {
        if (r !== o) {
          var s = r !== n, m = r === null, b = r === r, M = In(r), L = o !== n, O = o === null, P = o === o, ne = In(o);
          if (!O && !ne && !M && r > o || M && L && P && !O && !ne || m && L && P || !s && P || !b)
            return 1;
          if (!m && !M && !ne && r < o || ne && s && b && !m && !M || O && s && b || !L && b || !P)
            return -1;
        }
        return 0;
      }
      function Sd(r, o, s) {
        for (var m = -1, b = r.criteria, M = o.criteria, L = b.length, O = s.length; ++m < L; ) {
          var P = Ms(b[m], M[m]);
          if (P) {
            if (m >= O)
              return P;
            var ne = s[m];
            return P * (ne == "desc" ? -1 : 1);
          }
        }
        return r.index - o.index;
      }
      function Ts(r, o, s, m) {
        for (var b = -1, M = r.length, L = s.length, O = -1, P = o.length, ne = Bt(M - L, 0), ie = q(P + ne), oe = !m; ++O < P; )
          ie[O] = o[O];
        for (; ++b < L; )
          (oe || b < M) && (ie[s[b]] = r[b]);
        for (; ne--; )
          ie[O++] = r[b++];
        return ie;
      }
      function Ss(r, o, s, m) {
        for (var b = -1, M = r.length, L = -1, O = s.length, P = -1, ne = o.length, ie = Bt(M - O, 0), oe = q(ie + ne), ge = !m; ++b < ie; )
          oe[b] = r[b];
        for (var pe = b; ++P < ne; )
          oe[pe + P] = o[P];
        for (; ++L < O; )
          (ge || b < M) && (oe[pe + s[L]] = r[b++]);
        return oe;
      }
      function mn(r, o) {
        var s = -1, m = r.length;
        for (o || (o = q(m)); ++s < m; )
          o[s] = r[s];
        return o;
      }
      function oi(r, o, s, m) {
        var b = !s;
        s || (s = {});
        for (var M = -1, L = o.length; ++M < L; ) {
          var O = o[M], P = m ? m(s[O], r[O], O, s, r) : n;
          P === n && (P = r[O]), b ? gi(s, O, P) : il(s, O, P);
        }
        return s;
      }
      function zd(r, o) {
        return oi(r, $f(r), o);
      }
      function Ad(r, o) {
        return oi(r, Fs(r), o);
      }
      function ho(r, o) {
        return function(s, m) {
          var b = Re(s) ? I0 : Jg, M = o ? o() : {};
          return b(s, r, xe(m, 2), M);
        };
      }
      function br(r) {
        return Ne(function(o, s) {
          var m = -1, b = s.length, M = b > 1 ? s[b - 1] : n, L = b > 2 ? s[2] : n;
          for (M = r.length > 3 && typeof M == "function" ? (b--, M) : n, L && sn(s[0], s[1], L) && (M = b < 3 ? n : M, b = 1), o = at(o); ++m < b; ) {
            var O = s[m];
            O && r(o, O, m, M);
          }
          return o;
        });
      }
      function zs(r, o) {
        return function(s, m) {
          if (s == null)
            return s;
          if (!yn(s))
            return r(s, m);
          for (var b = s.length, M = o ? b : -1, L = at(s); (o ? M-- : ++M < b) && m(L[M], M, L) !== !1; )
            ;
          return s;
        };
      }
      function As(r) {
        return function(o, s, m) {
          for (var b = -1, M = at(o), L = m(o), O = L.length; O--; ) {
            var P = L[r ? O : ++b];
            if (s(M[P], P, M) === !1)
              break;
          }
          return o;
        };
      }
      function Cd(r, o, s) {
        var m = o & x, b = ul(r);
        function M() {
          var L = this && this !== Jt && this instanceof M ? b : r;
          return L.apply(m ? s : this, arguments);
        }
        return M;
      }
      function Cs(r) {
        return function(o) {
          o = lt(o);
          var s = _r(o) ? $n(o) : n, m = s ? s[0] : o.charAt(0), b = s ? Ni(s, 1).join("") : o.slice(1);
          return m[r]() + b;
        };
      }
      function wr(r) {
        return function(o) {
          return yf(z_(S_(o).replace(w0, "")), r, "");
        };
      }
      function ul(r) {
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
        var m = ul(r);
        function b() {
          for (var M = arguments.length, L = q(M), O = M, P = pr(b); O--; )
            L[O] = arguments[O];
          var ne = M < 3 && L[0] !== P && L[M - 1] !== P ? [] : Ei(L, P);
          if (M -= ne.length, M < s)
            return Os(
              r,
              o,
              co,
              b.placeholder,
              n,
              L,
              ne,
              n,
              n,
              s - M
            );
          var ie = this && this !== Jt && this instanceof b ? m : r;
          return Ln(ie, this, L);
        }
        return b;
      }
      function Ls(r) {
        return function(o, s, m) {
          var b = at(o);
          if (!yn(o)) {
            var M = xe(s, 3);
            o = Xt(o), s = function(O) {
              return M(b[O], O, b);
            };
          }
          var L = r(o, s, m);
          return L > -1 ? b[M ? o[L] : L] : n;
        };
      }
      function Es(r) {
        return mi(function(o) {
          var s = o.length, m = s, b = Yn.prototype.thru;
          for (r && o.reverse(); m--; ) {
            var M = o[m];
            if (typeof M != "function")
              throw new Hn(u);
            if (b && !L && bo(M) == "wrapper")
              var L = new Yn([], !0);
          }
          for (m = L ? m : s; ++m < s; ) {
            M = o[m];
            var O = bo(M), P = O == "wrapper" ? Qf(M) : n;
            P && tu(P[0]) && P[1] == (G | C | R | D) && !P[4].length && P[9] == 1 ? L = L[bo(P[0])].apply(L, P[3]) : L = M.length == 1 && tu(M) ? L[O]() : L.thru(M);
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
      function co(r, o, s, m, b, M, L, O, P, ne) {
        var ie = o & G, oe = o & x, ge = o & T, pe = o & (C | F), Te = o & ee, De = ge ? n : ul(r);
        function Se() {
          for (var Fe = arguments.length, Ge = q(Fe), On = Fe; On--; )
            Ge[On] = arguments[On];
          if (pe)
            var _n = pr(Se), Dn = H0(Ge, _n);
          if (m && (Ge = Ts(Ge, m, b, pe)), M && (Ge = Ss(Ge, M, L, pe)), Fe -= Dn, pe && Fe < ne) {
            var Nt = Ei(Ge, _n);
            return Os(
              r,
              o,
              co,
              Se.placeholder,
              s,
              Ge,
              Nt,
              O,
              P,
              ne - Fe
            );
          }
          var ni = oe ? s : this, pi = ge ? ni[r] : r;
          return Fe = Ge.length, O ? Ge = Jd(Ge, O) : Te && Fe > 1 && Ge.reverse(), ie && P < Fe && (Ge.length = P), this && this !== Jt && this instanceof Se && (pi = De || ul(pi)), pi.apply(ni, Ge);
        }
        return Se;
      }
      function Rs(r, o) {
        return function(s, m) {
          return rd(s, r, o(m), {});
        };
      }
      function go(r, o) {
        return function(s, m) {
          var b;
          if (s === n && m === n)
            return o;
          if (s !== n && (b = s), m !== n) {
            if (b === n)
              return m;
            typeof s == "string" || typeof m == "string" ? (s = Rn(s), m = Rn(m)) : (s = ys(s), m = ys(m)), b = r(s, m);
          }
          return b;
        };
      }
      function Zf(r) {
        return mi(function(o) {
          return o = bt(o, En(xe())), Ne(function(s) {
            var m = this;
            return r(o, function(b) {
              return Ln(b, m, s);
            });
          });
        });
      }
      function mo(r, o) {
        o = o === n ? " " : Rn(o);
        var s = o.length;
        if (s < 2)
          return s ? Wf(o, r) : o;
        var m = Wf(o, to(r / hr(o)));
        return _r(o) ? Ni($n(m), 0, r).join("") : m.slice(0, r);
      }
      function Ed(r, o, s, m) {
        var b = o & x, M = ul(r);
        function L() {
          for (var O = -1, P = arguments.length, ne = -1, ie = m.length, oe = q(ie + P), ge = this && this !== Jt && this instanceof L ? M : r; ++ne < ie; )
            oe[ne] = m[ne];
          for (; P--; )
            oe[ne++] = arguments[++O];
          return Ln(ge, b ? s : this, oe);
        }
        return L;
      }
      function Is(r) {
        return function(o, s, m) {
          return m && typeof m != "number" && sn(o, s, m) && (s = m = n), o = wi(o), s === n ? (s = o, o = 0) : s = wi(s), m = m === n ? o < s ? 1 : -1 : wi(m), md(o, s, m, r);
        };
      }
      function yo(r) {
        return function(o, s) {
          return typeof o == "string" && typeof s == "string" || (o = Zn(o), s = Zn(s)), r(o, s);
        };
      }
      function Os(r, o, s, m, b, M, L, O, P, ne) {
        var ie = o & C, oe = ie ? L : n, ge = ie ? n : L, pe = ie ? M : n, Te = ie ? n : M;
        o |= ie ? R : I, o &= ~(ie ? I : R), o & z || (o &= ~(x | T));
        var De = [
          r,
          o,
          b,
          pe,
          oe,
          Te,
          ge,
          O,
          P,
          ne
        ], Se = s.apply(n, De);
        return tu(r) && Gs(Se, De), Se.placeholder = m, Zs(Se, r, o);
      }
      function jf(r) {
        var o = Wt[r];
        return function(s, m) {
          if (s = Zn(s), m = m == null ? 0 : nn(Ie(m), 292), m && Za(s)) {
            var b = (lt(s) + "e").split("e"), M = o(b[0] + "e" + (+b[1] + m));
            return b = (lt(M) + "e").split("e"), +(b[0] + "e" + (+b[1] - m));
          }
          return o(s);
        };
      }
      var Rd = dr && 1 / ql(new dr([, -0]))[1] == B ? function(r) {
        return new dr(r);
      } : mu;
      function Ds(r) {
        return function(o) {
          var s = rn(o);
          return s == ye ? Mf(o) : s == Me ? K0(o) : B0(o, r(o));
        };
      }
      function di(r, o, s, m, b, M, L, O) {
        var P = o & T;
        if (!P && typeof r != "function")
          throw new Hn(u);
        var ne = m ? m.length : 0;
        if (ne || (o &= ~(R | I), m = b = n), L = L === n ? L : Bt(Ie(L), 0), O = O === n ? O : Ie(O), ne -= b ? b.length : 0, o & I) {
          var ie = m, oe = b;
          m = b = n;
        }
        var ge = P ? n : Qf(r), pe = [
          r,
          o,
          s,
          m,
          b,
          ie,
          oe,
          M,
          L,
          O
        ];
        if (ge && Zd(pe, ge), r = pe[0], o = pe[1], s = pe[2], m = pe[3], b = pe[4], O = pe[9] = pe[9] === n ? P ? 0 : r.length : Bt(pe[9] - ne, 0), !O && o & (C | F) && (o &= ~(C | F)), !o || o == x)
          var Te = Cd(r, o, s);
        else
          o == C || o == F ? Te = Ld(r, o, O) : (o == R || o == (x | R)) && !b.length ? Te = Ed(r, o, s, m) : Te = co.apply(n, pe);
        var De = ge ? ds : Gs;
        return Zs(De(Te, pe), r, o);
      }
      function Ns(r, o, s, m) {
        return r === n || ti(r, gr[s]) && !ot.call(m, s) ? o : r;
      }
      function Us(r, o, s, m, b, M) {
        return kt(r) && kt(o) && (M.set(o, r), ao(r, o, n, Us, M), M.delete(o)), r;
      }
      function Id(r) {
        return _l(r) ? n : r;
      }
      function Ps(r, o, s, m, b, M) {
        var L = s & p, O = r.length, P = o.length;
        if (O != P && !(L && P > O))
          return !1;
        var ne = M.get(r), ie = M.get(o);
        if (ne && ie)
          return ne == o && ie == r;
        var oe = -1, ge = !0, pe = s & S ? new Yi() : n;
        for (M.set(r, o), M.set(o, r); ++oe < O; ) {
          var Te = r[oe], De = o[oe];
          if (m)
            var Se = L ? m(De, Te, oe, o, r, M) : m(Te, De, oe, r, o, M);
          if (Se !== n) {
            if (Se)
              continue;
            ge = !1;
            break;
          }
          if (pe) {
            if (!bf(o, function(Fe, Ge) {
              if (!Qr(pe, Ge) && (Te === Fe || b(Te, Fe, s, m, M)))
                return pe.push(Ge);
            })) {
              ge = !1;
              break;
            }
          } else if (!(Te === De || b(Te, De, s, m, M))) {
            ge = !1;
            break;
          }
        }
        return M.delete(r), M.delete(o), ge;
      }
      function Od(r, o, s, m, b, M, L) {
        switch (s) {
          case yt:
            if (r.byteLength != o.byteLength || r.byteOffset != o.byteOffset)
              return !1;
            r = r.buffer, o = o.buffer;
          case $t:
            return !(r.byteLength != o.byteLength || !M(new Ql(r), new Ql(o)));
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
            var O = Mf;
          case Me:
            var P = m & p;
            if (O || (O = ql), r.size != o.size && !P)
              return !1;
            var ne = L.get(r);
            if (ne)
              return ne == o;
            m |= S, L.set(r, o);
            var ie = Ps(O(r), O(o), m, b, M, L);
            return L.delete(r), ie;
          case Mt:
            if (nl)
              return nl.call(r) == nl.call(o);
        }
        return !1;
      }
      function Dd(r, o, s, m, b, M) {
        var L = s & p, O = Kf(r), P = O.length, ne = Kf(o), ie = ne.length;
        if (P != ie && !L)
          return !1;
        for (var oe = P; oe--; ) {
          var ge = O[oe];
          if (!(L ? ge in o : ot.call(o, ge)))
            return !1;
        }
        var pe = M.get(r), Te = M.get(o);
        if (pe && Te)
          return pe == o && Te == r;
        var De = !0;
        M.set(r, o), M.set(o, r);
        for (var Se = L; ++oe < P; ) {
          ge = O[oe];
          var Fe = r[ge], Ge = o[ge];
          if (m)
            var On = L ? m(Ge, Fe, ge, o, r, M) : m(Fe, Ge, ge, r, o, M);
          if (!(On === n ? Fe === Ge || b(Fe, Ge, s, m, M) : On)) {
            De = !1;
            break;
          }
          Se || (Se = ge == "constructor");
        }
        if (De && !Se) {
          var _n = r.constructor, Dn = o.constructor;
          _n != Dn && "constructor" in r && "constructor" in o && !(typeof _n == "function" && _n instanceof _n && typeof Dn == "function" && Dn instanceof Dn) && (De = !1);
        }
        return M.delete(r), M.delete(o), De;
      }
      function mi(r) {
        return iu(Xs(r, n, $s), r + "");
      }
      function Kf(r) {
        return rs(r, Xt, $f);
      }
      function Jf(r) {
        return rs(r, bn, Fs);
      }
      var Qf = io ? function(r) {
        return io.get(r);
      } : mu;
      function bo(r) {
        for (var o = r.name + "", s = mr[o], m = ot.call(mr, o) ? s.length : 0; m--; ) {
          var b = s[m], M = b.func;
          if (M == null || M == r)
            return b.name;
        }
        return o;
      }
      function pr(r) {
        var o = ot.call(k, "placeholder") ? k : r;
        return o.placeholder;
      }
      function xe() {
        var r = k.iteratee || gu;
        return r = r === gu ? fs : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function wo(r, o) {
        var s = r.__data__;
        return Yd(o) ? s[typeof o == "string" ? "string" : "hash"] : s.map;
      }
      function Vf(r) {
        for (var o = Xt(r), s = o.length; s--; ) {
          var m = o[s], b = r[m];
          o[s] = [m, b, Hs(b)];
        }
        return o;
      }
      function Gi(r, o) {
        var s = G0(r, o);
        return os(s) ? s : n;
      }
      function Nd(r) {
        var o = ot.call(r, Bi), s = r[Bi];
        try {
          r[Bi] = n;
          var m = !0;
        } catch {
        }
        var b = Kl.call(r);
        return m && (o ? r[Bi] = s : delete r[Bi]), b;
      }
      var $f = Sf ? function(r) {
        return r == null ? [] : (r = at(r), Ci(Sf(r), function(o) {
          return qa.call(r, o);
        }));
      } : yu, Fs = Sf ? function(r) {
        for (var o = []; r; )
          Li(o, $f(r)), r = Vl(r);
        return o;
      } : yu, rn = an;
      (zf && rn(new zf(new ArrayBuffer(1))) != yt || $r && rn(new $r()) != ye || Af && rn(Af.resolve()) != qe || dr && rn(new dr()) != Me || el && rn(new el()) != ct) && (rn = function(r) {
        var o = an(r), s = o == et ? r.constructor : n, m = s ? Zi(s) : "";
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
              return ct;
          }
        return o;
      });
      function Ud(r, o, s) {
        for (var m = -1, b = s.length; ++m < b; ) {
          var M = s[m], L = M.size;
          switch (M.type) {
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
        var o = r.match(Xr);
        return o ? o[1].split(lr) : [];
      }
      function Ws(r, o, s) {
        o = Di(o, r);
        for (var m = -1, b = o.length, M = !1; ++m < b; ) {
          var L = fi(o[m]);
          if (!(M = r != null && s(r, L)))
            break;
          r = r[L];
        }
        return M || ++m != b ? M : (b = r == null ? 0 : r.length, !!b && So(b) && yi(L, b) && (Re(r) || ji(r)));
      }
      function Fd(r) {
        var o = r.length, s = new r.constructor(o);
        return o && typeof r[0] == "string" && ot.call(r, "index") && (s.index = r.index, s.input = r.input), s;
      }
      function Bs(r) {
        return typeof r.constructor == "function" && !al(r) ? yr(Vl(r)) : {};
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
            return xs(r, s);
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
        return Re(r) || ji(r) || !!(Ga && r && r[Ga]);
      }
      function yi(r, o) {
        var s = typeof r;
        return o = o ?? A, !!o && (s == "number" || s != "symbol" && zi.test(r)) && r > -1 && r % 1 == 0 && r < o;
      }
      function sn(r, o, s) {
        if (!kt(s))
          return !1;
        var m = typeof o;
        return (m == "number" ? yn(s) && yi(o, s.length) : m == "string" && o in s) ? ti(s[o], r) : !1;
      }
      function eu(r, o) {
        if (Re(r))
          return !1;
        var s = typeof r;
        return s == "number" || s == "symbol" || s == "boolean" || r == null || In(r) ? !0 : tt.test(r) || !V.test(r) || o != null && r in at(o);
      }
      function Yd(r) {
        var o = typeof r;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? r !== "__proto__" : r === null;
      }
      function tu(r) {
        var o = bo(r), s = k[o];
        if (typeof s != "function" || !(o in Ye.prototype))
          return !1;
        if (r === s)
          return !0;
        var m = Qf(s);
        return !!m && r === m[0];
      }
      function Xd(r) {
        return !!Ha && Ha in r;
      }
      var qd = Zl ? bi : bu;
      function al(r) {
        var o = r && r.constructor, s = typeof o == "function" && o.prototype || gr;
        return r === s;
      }
      function Hs(r) {
        return r === r && !kt(r);
      }
      function Ys(r, o) {
        return function(s) {
          return s == null ? !1 : s[r] === o && (o !== n || r in at(s));
        };
      }
      function Gd(r) {
        var o = Mo(r, function(m) {
          return s.size === h && s.clear(), m;
        }), s = o.cache;
        return o;
      }
      function Zd(r, o) {
        var s = r[1], m = o[1], b = s | m, M = b < (x | T | G), L = m == G && s == C || m == G && s == D && r[7].length <= o[8] || m == (G | D) && o[7].length <= o[8] && s == C;
        if (!(M || L))
          return r;
        m & x && (r[2] = o[2], b |= s & x ? 0 : z);
        var O = o[3];
        if (O) {
          var P = r[3];
          r[3] = P ? Ts(P, O, o[4]) : O, r[4] = P ? Ei(r[3], d) : o[4];
        }
        return O = o[5], O && (P = r[5], r[5] = P ? Ss(P, O, o[6]) : O, r[6] = P ? Ei(r[5], d) : o[6]), O = o[7], O && (r[7] = O), m & G && (r[8] = r[8] == null ? o[8] : nn(r[8], o[8])), r[9] == null && (r[9] = o[9]), r[0] = o[0], r[1] = b, r;
      }
      function jd(r) {
        var o = [];
        if (r != null)
          for (var s in at(r))
            o.push(s);
        return o;
      }
      function Kd(r) {
        return Kl.call(r);
      }
      function Xs(r, o, s) {
        return o = Bt(o === n ? r.length - 1 : o, 0), function() {
          for (var m = arguments, b = -1, M = Bt(m.length - o, 0), L = q(M); ++b < M; )
            L[b] = m[o + b];
          b = -1;
          for (var O = q(o + 1); ++b < o; )
            O[b] = m[b];
          return O[o] = s(L), Ln(r, this, O);
        };
      }
      function qs(r, o) {
        return o.length < 2 ? r : qi(r, qn(o, 0, -1));
      }
      function Jd(r, o) {
        for (var s = r.length, m = nn(o.length, s), b = mn(r); m--; ) {
          var M = o[m];
          r[m] = yi(M, s) ? b[M] : n;
        }
        return r;
      }
      function nu(r, o) {
        if (!(o === "constructor" && typeof r[o] == "function") && o != "__proto__")
          return r[o];
      }
      var Gs = js(ds), sl = _g || function(r, o) {
        return Jt.setTimeout(r, o);
      }, iu = js(wd);
      function Zs(r, o, s) {
        var m = o + "";
        return iu(r, Bd(m, Qd(Pd(m), s)));
      }
      function js(r) {
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
      function po(r, o) {
        var s = -1, m = r.length, b = m - 1;
        for (o = o === n ? m : o; ++s < o; ) {
          var M = Ff(s, b), L = r[M];
          r[M] = r[s], r[s] = L;
        }
        return r.length = o, r;
      }
      var Ks = Gd(function(r) {
        var o = [];
        return r.charCodeAt(0) === 46 && o.push(""), r.replace(Ct, function(s, m, b, M) {
          o.push(b ? M.replace(Gr, "$1") : m || s);
        }), o;
      });
      function fi(r) {
        if (typeof r == "string" || In(r))
          return r;
        var o = r + "";
        return o == "0" && 1 / r == -B ? "-0" : o;
      }
      function Zi(r) {
        if (r != null) {
          try {
            return jl.call(r);
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
          o & s[1] && !Yl(r, m) && r.push(m);
        }), r.sort();
      }
      function Js(r) {
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
        for (var b = 0, M = 0, L = q(to(m / o)); b < m; )
          L[M++] = qn(r, b, b += o);
        return L;
      }
      function $d(r) {
        for (var o = -1, s = r == null ? 0 : r.length, m = 0, b = []; ++o < s; ) {
          var M = r[o];
          M && (b[m++] = M);
        }
        return b;
      }
      function em() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var o = q(r - 1), s = arguments[0], m = r; m--; )
          o[m - 1] = arguments[m];
        return Li(Re(s) ? mn(s) : [s], Qt(o, 1));
      }
      var tm = Ne(function(r, o) {
        return Dt(r) ? rl(r, Qt(o, 1, Dt, !0)) : [];
      }), nm = Ne(function(r, o) {
        var s = Gn(o);
        return Dt(s) && (s = n), Dt(r) ? rl(r, Qt(o, 1, Dt, !0), xe(s, 2)) : [];
      }), im = Ne(function(r, o) {
        var s = Gn(o);
        return Dt(s) && (s = n), Dt(r) ? rl(r, Qt(o, 1, Dt, !0), n, s) : [];
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
        return r && r.length ? _o(r, xe(o, 3), !0, !0) : [];
      }
      function fm(r, o) {
        return r && r.length ? _o(r, xe(o, 3), !0) : [];
      }
      function um(r, o, s, m) {
        var b = r == null ? 0 : r.length;
        return b ? (s && typeof s != "number" && sn(r, o, s) && (s = 0, m = b), ed(r, o, s, m)) : [];
      }
      function Qs(r, o, s) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var b = s == null ? 0 : Ie(s);
        return b < 0 && (b = Bt(m + b, 0)), Xl(r, xe(o, 3), b);
      }
      function Vs(r, o, s) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var b = m - 1;
        return s !== n && (b = Ie(s), b = s < 0 ? Bt(m + b, 0) : nn(b, m - 1)), Xl(r, xe(o, 3), b, !0);
      }
      function $s(r) {
        var o = r == null ? 0 : r.length;
        return o ? Qt(r, 1) : [];
      }
      function am(r) {
        var o = r == null ? 0 : r.length;
        return o ? Qt(r, B) : [];
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
      function e_(r) {
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
        return s !== n && (b = Ie(s), b = b < 0 ? Bt(m + b, 0) : nn(b, m - 1)), o === o ? Q0(r, o, b) : Xl(r, Oa, b, !0);
      }
      function wm(r, o) {
        return r && r.length ? _s(r, Ie(o)) : n;
      }
      var pm = Ne(t_);
      function t_(r, o) {
        return r && r.length && o && o.length ? Pf(r, o) : r;
      }
      function vm(r, o, s) {
        return r && r.length && o && o.length ? Pf(r, o, xe(s, 2)) : r;
      }
      function km(r, o, s) {
        return r && r.length && o && o.length ? Pf(r, o, n, s) : r;
      }
      var xm = mi(function(r, o) {
        var s = r == null ? 0 : r.length, m = Lf(r, o);
        return gs(r, bt(o, function(b) {
          return yi(b, s) ? +b : b;
        }).sort(Ms)), m;
      });
      function Mm(r, o) {
        var s = [];
        if (!(r && r.length))
          return s;
        var m = -1, b = [], M = r.length;
        for (o = xe(o, 3); ++m < M; ) {
          var L = r[m];
          o(L, m, r) && (s.push(L), b.push(m));
        }
        return gs(r, b), s;
      }
      function ru(r) {
        return r == null ? r : yg.call(r);
      }
      function Tm(r, o, s) {
        var m = r == null ? 0 : r.length;
        return m ? (s && typeof s != "number" && sn(r, o, s) ? (o = 0, s = m) : (o = o == null ? 0 : Ie(o), s = s === n ? m : Ie(s)), qn(r, o, s)) : [];
      }
      function Sm(r, o) {
        return so(r, o);
      }
      function zm(r, o, s) {
        return Bf(r, o, xe(s, 2));
      }
      function Am(r, o) {
        var s = r == null ? 0 : r.length;
        if (s) {
          var m = so(r, o);
          if (m < s && ti(r[m], o))
            return m;
        }
        return -1;
      }
      function Cm(r, o) {
        return so(r, o, !0);
      }
      function Lm(r, o, s) {
        return Bf(r, o, xe(s, 2), !0);
      }
      function Em(r, o) {
        var s = r == null ? 0 : r.length;
        if (s) {
          var m = so(r, o, !0) - 1;
          if (ti(r[m], o))
            return m;
        }
        return -1;
      }
      function Rm(r) {
        return r && r.length ? ms(r) : [];
      }
      function Im(r, o) {
        return r && r.length ? ms(r, xe(o, 2)) : [];
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
        return r && r.length ? _o(r, xe(o, 3), !1, !0) : [];
      }
      function Pm(r, o) {
        return r && r.length ? _o(r, xe(o, 3)) : [];
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
      function n_(r, o) {
        if (!(r && r.length))
          return [];
        var s = lu(r);
        return o == null ? s : bt(s, function(m) {
          return Ln(o, n, m);
        });
      }
      var qm = Ne(function(r, o) {
        return Dt(r) ? rl(r, o) : [];
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
        return ps(r || [], o || [], il);
      }
      function Qm(r, o) {
        return ps(r || [], o || [], fl);
      }
      var Vm = Ne(function(r) {
        var o = r.length, s = o > 1 ? r[o - 1] : n;
        return s = typeof s == "function" ? (r.pop(), s) : n, n_(r, s);
      });
      function i_(r) {
        var o = k(r);
        return o.__chain__ = !0, o;
      }
      function $m(r, o) {
        return o(r), r;
      }
      function vo(r, o) {
        return o(r);
      }
      var e2 = mi(function(r) {
        var o = r.length, s = o ? r[0] : 0, m = this.__wrapped__, b = function(M) {
          return Lf(M, r);
        };
        return o > 1 || this.__actions__.length || !(m instanceof Ye) || !yi(s) ? this.thru(b) : (m = m.slice(s, +s + (o ? 1 : 0)), m.__actions__.push({
          func: vo,
          args: [b],
          thisArg: n
        }), new Yn(m, this.__chain__).thru(function(M) {
          return o && !M.length && M.push(n), M;
        }));
      });
      function t2() {
        return i_(this);
      }
      function n2() {
        return new Yn(this.value(), this.__chain__);
      }
      function i2() {
        this.__values__ === n && (this.__values__ = y_(this.value()));
        var r = this.__index__ >= this.__values__.length, o = r ? n : this.__values__[this.__index__++];
        return { done: r, value: o };
      }
      function r2() {
        return this;
      }
      function l2(r) {
        for (var o, s = this; s instanceof lo; ) {
          var m = Js(s);
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
            func: vo,
            args: [ru],
            thisArg: n
          }), new Yn(o, this.__chain__);
        }
        return this.thru(ru);
      }
      function f2() {
        return ws(this.__wrapped__, this.__actions__);
      }
      var u2 = ho(function(r, o, s) {
        ot.call(r, s) ? ++r[s] : gi(r, s, 1);
      });
      function a2(r, o, s) {
        var m = Re(r) ? Ra : $g;
        return s && sn(r, o, s) && (o = n), m(r, xe(o, 3));
      }
      function s2(r, o) {
        var s = Re(r) ? Ci : ns;
        return s(r, xe(o, 3));
      }
      var _2 = Ls(Qs), h2 = Ls(Vs);
      function c2(r, o) {
        return Qt(ko(r, o), 1);
      }
      function g2(r, o) {
        return Qt(ko(r, o), B);
      }
      function d2(r, o, s) {
        return s = s === n ? 1 : Ie(s), Qt(ko(r, o), s);
      }
      function r_(r, o) {
        var s = Re(r) ? Bn : Ii;
        return s(r, xe(o, 3));
      }
      function l_(r, o) {
        var s = Re(r) ? O0 : ts;
        return s(r, xe(o, 3));
      }
      var m2 = ho(function(r, o, s) {
        ot.call(r, s) ? r[s].push(o) : gi(r, s, [o]);
      });
      function y2(r, o, s, m) {
        r = yn(r) ? r : kr(r), s = s && !m ? Ie(s) : 0;
        var b = r.length;
        return s < 0 && (s = Bt(b + s, 0)), zo(r) ? s <= b && r.indexOf(o, s) > -1 : !!b && sr(r, o, s) > -1;
      }
      var b2 = Ne(function(r, o, s) {
        var m = -1, b = typeof o == "function", M = yn(r) ? q(r.length) : [];
        return Ii(r, function(L) {
          M[++m] = b ? Ln(o, L, s) : ll(L, o, s);
        }), M;
      }), w2 = ho(function(r, o, s) {
        gi(r, s, o);
      });
      function ko(r, o) {
        var s = Re(r) ? bt : us;
        return s(r, xe(o, 3));
      }
      function p2(r, o, s, m) {
        return r == null ? [] : (Re(o) || (o = o == null ? [] : [o]), s = m ? n : s, Re(s) || (s = s == null ? [] : [s]), hs(r, o, s));
      }
      var v2 = ho(function(r, o, s) {
        r[s ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function k2(r, o, s) {
        var m = Re(r) ? yf : Na, b = arguments.length < 3;
        return m(r, xe(o, 4), s, b, Ii);
      }
      function x2(r, o, s) {
        var m = Re(r) ? D0 : Na, b = arguments.length < 3;
        return m(r, xe(o, 4), s, b, ts);
      }
      function M2(r, o) {
        var s = Re(r) ? Ci : ns;
        return s(r, To(xe(o, 3)));
      }
      function T2(r) {
        var o = Re(r) ? Qa : yd;
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
          return zo(r) ? hr(r) : r.length;
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
        return s > 1 && sn(r, o[0], o[1]) ? o = [] : s > 2 && sn(o[0], o[1], o[2]) && (o = [o[0]]), hs(r, Qt(o, 1), []);
      }), xo = sg || function() {
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
      function o_(r, o, s) {
        return o = s ? n : o, o = r && o == null ? r.length : o, di(r, G, n, n, n, n, o);
      }
      function f_(r, o) {
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
          m |= R;
        }
        return di(r, m, o, s, b);
      }), u_ = Ne(function(r, o, s) {
        var m = x | T;
        if (s.length) {
          var b = Ei(s, pr(u_));
          m |= R;
        }
        return di(o, m, r, s, b);
      });
      function a_(r, o, s) {
        o = s ? n : o;
        var m = di(r, C, n, n, n, n, n, o);
        return m.placeholder = a_.placeholder, m;
      }
      function s_(r, o, s) {
        o = s ? n : o;
        var m = di(r, F, n, n, n, n, n, o);
        return m.placeholder = s_.placeholder, m;
      }
      function __(r, o, s) {
        var m, b, M, L, O, P, ne = 0, ie = !1, oe = !1, ge = !0;
        if (typeof r != "function")
          throw new Hn(u);
        o = Zn(o) || 0, kt(s) && (ie = !!s.leading, oe = "maxWait" in s, M = oe ? Bt(Zn(s.maxWait) || 0, o) : M, ge = "trailing" in s ? !!s.trailing : ge);
        function pe(Nt) {
          var ni = m, pi = b;
          return m = b = n, ne = Nt, L = r.apply(pi, ni), L;
        }
        function Te(Nt) {
          return ne = Nt, O = sl(Fe, o), ie ? pe(Nt) : L;
        }
        function De(Nt) {
          var ni = Nt - P, pi = Nt - ne, L_ = o - ni;
          return oe ? nn(L_, M - pi) : L_;
        }
        function Se(Nt) {
          var ni = Nt - P, pi = Nt - ne;
          return P === n || ni >= o || ni < 0 || oe && pi >= M;
        }
        function Fe() {
          var Nt = xo();
          if (Se(Nt))
            return Ge(Nt);
          O = sl(Fe, De(Nt));
        }
        function Ge(Nt) {
          return O = n, ge && m ? pe(Nt) : (m = b = n, L);
        }
        function On() {
          O !== n && vs(O), ne = 0, m = P = b = O = n;
        }
        function _n() {
          return O === n ? L : Ge(xo());
        }
        function Dn() {
          var Nt = xo(), ni = Se(Nt);
          if (m = arguments, b = this, P = Nt, ni) {
            if (O === n)
              return Te(P);
            if (oe)
              return vs(O), O = sl(Fe, o), pe(P);
          }
          return O === n && (O = sl(Fe, o)), L;
        }
        return Dn.cancel = On, Dn.flush = _n, Dn;
      }
      var R2 = Ne(function(r, o) {
        return es(r, 1, o);
      }), I2 = Ne(function(r, o, s) {
        return es(r, Zn(o) || 0, s);
      });
      function O2(r) {
        return di(r, ee);
      }
      function Mo(r, o) {
        if (typeof r != "function" || o != null && typeof o != "function")
          throw new Hn(u);
        var s = function() {
          var m = arguments, b = o ? o.apply(this, m) : m[0], M = s.cache;
          if (M.has(b))
            return M.get(b);
          var L = r.apply(this, m);
          return s.cache = M.set(b, L) || M, L;
        };
        return s.cache = new (Mo.Cache || ci)(), s;
      }
      Mo.Cache = ci;
      function To(r) {
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
        return f_(2, r);
      }
      var N2 = kd(function(r, o) {
        o = o.length == 1 && Re(o[0]) ? bt(o[0], En(xe())) : bt(Qt(o, 1), En(xe()));
        var s = o.length;
        return Ne(function(m) {
          for (var b = -1, M = nn(m.length, s); ++b < M; )
            m[b] = o[b].call(this, m[b]);
          return Ln(r, this, m);
        });
      }), fu = Ne(function(r, o) {
        var s = Ei(o, pr(fu));
        return di(r, R, n, o, s);
      }), h_ = Ne(function(r, o) {
        var s = Ei(o, pr(h_));
        return di(r, I, n, o, s);
      }), U2 = mi(function(r, o) {
        return di(r, D, n, n, n, o);
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
        return kt(s) && (m = "leading" in s ? !!s.leading : m, b = "trailing" in s ? !!s.trailing : b), __(r, o, {
          leading: m,
          maxWait: o,
          trailing: b
        });
      }
      function B2(r) {
        return o_(r, 1);
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
        return Xn(r, c | w);
      }
      function Z2(r, o) {
        return o = typeof o == "function" ? o : n, Xn(r, c | w, o);
      }
      function j2(r, o) {
        return o == null || $a(r, o, Xt(o));
      }
      function ti(r, o) {
        return r === o || r !== r && o !== o;
      }
      var K2 = yo(If), J2 = yo(function(r, o) {
        return r >= o;
      }), ji = ls(function() {
        return arguments;
      }()) ? ls : function(r) {
        return Et(r) && ot.call(r, "callee") && !qa.call(r, "callee");
      }, Re = q.isArray, Q2 = Sa ? En(Sa) : ld;
      function yn(r) {
        return r != null && So(r.length) && !bi(r);
      }
      function Dt(r) {
        return Et(r) && yn(r);
      }
      function V2(r) {
        return r === !0 || r === !1 || Et(r) && an(r) == Xe;
      }
      var Ui = hg || bu, $2 = za ? En(za) : od;
      function ey(r) {
        return Et(r) && r.nodeType === 1 && !_l(r);
      }
      function ty(r) {
        if (r == null)
          return !0;
        if (yn(r) && (Re(r) || typeof r == "string" || typeof r.splice == "function" || Ui(r) || vr(r) || ji(r)))
          return !r.length;
        var o = rn(r);
        if (o == ye || o == Me)
          return !r.size;
        if (al(r))
          return !Nf(r).length;
        for (var s in r)
          if (ot.call(r, s))
            return !1;
        return !0;
      }
      function ny(r, o) {
        return ol(r, o);
      }
      function iy(r, o, s) {
        s = typeof s == "function" ? s : n;
        var m = s ? s(r, o) : n;
        return m === n ? ol(r, o, n, s) : !!m;
      }
      function uu(r) {
        if (!Et(r))
          return !1;
        var o = an(r);
        return o == be || o == me || typeof r.message == "string" && typeof r.name == "string" && !_l(r);
      }
      function ry(r) {
        return typeof r == "number" && Za(r);
      }
      function bi(r) {
        if (!kt(r))
          return !1;
        var o = an(r);
        return o == Q || o == Ae || o == ut || o == H;
      }
      function c_(r) {
        return typeof r == "number" && r == Ie(r);
      }
      function So(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= A;
      }
      function kt(r) {
        var o = typeof r;
        return r != null && (o == "object" || o == "function");
      }
      function Et(r) {
        return r != null && typeof r == "object";
      }
      var g_ = Aa ? En(Aa) : ud;
      function ly(r, o) {
        return r === o || Df(r, o, Vf(o));
      }
      function oy(r, o, s) {
        return s = typeof s == "function" ? s : n, Df(r, o, Vf(o), s);
      }
      function fy(r) {
        return d_(r) && r != +r;
      }
      function uy(r) {
        if (qd(r))
          throw new Ee(f);
        return os(r);
      }
      function ay(r) {
        return r === null;
      }
      function sy(r) {
        return r == null;
      }
      function d_(r) {
        return typeof r == "number" || Et(r) && an(r) == He;
      }
      function _l(r) {
        if (!Et(r) || an(r) != et)
          return !1;
        var o = Vl(r);
        if (o === null)
          return !0;
        var s = ot.call(o, "constructor") && o.constructor;
        return typeof s == "function" && s instanceof s && jl.call(s) == og;
      }
      var au = Ca ? En(Ca) : ad;
      function _y(r) {
        return c_(r) && r >= -A && r <= A;
      }
      var m_ = La ? En(La) : sd;
      function zo(r) {
        return typeof r == "string" || !Re(r) && Et(r) && an(r) == xt;
      }
      function In(r) {
        return typeof r == "symbol" || Et(r) && an(r) == Mt;
      }
      var vr = Ea ? En(Ea) : _d;
      function hy(r) {
        return r === n;
      }
      function cy(r) {
        return Et(r) && rn(r) == ct;
      }
      function gy(r) {
        return Et(r) && an(r) == Tt;
      }
      var dy = yo(Uf), my = yo(function(r, o) {
        return r <= o;
      });
      function y_(r) {
        if (!r)
          return [];
        if (yn(r))
          return zo(r) ? $n(r) : mn(r);
        if (Vr && r[Vr])
          return j0(r[Vr]());
        var o = rn(r), s = o == ye ? Mf : o == Me ? ql : kr;
        return s(r);
      }
      function wi(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = Zn(r), r === B || r === -B) {
          var o = r < 0 ? -1 : 1;
          return o * E;
        }
        return r === r ? r : 0;
      }
      function Ie(r) {
        var o = wi(r), s = o % 1;
        return o === o ? s ? o - s : o : 0;
      }
      function b_(r) {
        return r ? Xi(Ie(r), 0, he) : 0;
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
        r = Ua(r);
        var s = Lt.test(r);
        return s || Si.test(r) ? E0(r.slice(2), s ? 2 : 8) : Y.test(r) ? de : +r;
      }
      function w_(r) {
        return oi(r, bn(r));
      }
      function yy(r) {
        return r ? Xi(Ie(r), -A, A) : r === 0 ? r : 0;
      }
      function lt(r) {
        return r == null ? "" : Rn(r);
      }
      var by = br(function(r, o) {
        if (al(o) || yn(o)) {
          oi(o, Xt(o), r);
          return;
        }
        for (var s in o)
          ot.call(o, s) && il(r, s, o[s]);
      }), p_ = br(function(r, o) {
        oi(o, bn(o), r);
      }), Ao = br(function(r, o, s, m) {
        oi(o, bn(o), r, m);
      }), wy = br(function(r, o, s, m) {
        oi(o, Xt(o), r, m);
      }), py = mi(Lf);
      function vy(r, o) {
        var s = yr(r);
        return o == null ? s : Va(s, o);
      }
      var ky = Ne(function(r, o) {
        r = at(r);
        var s = -1, m = o.length, b = m > 2 ? o[2] : n;
        for (b && sn(o[0], o[1], b) && (m = 1); ++s < m; )
          for (var M = o[s], L = bn(M), O = -1, P = L.length; ++O < P; ) {
            var ne = L[O], ie = r[ne];
            (ie === n || ti(ie, gr[ne]) && !ot.call(r, ne)) && (r[ne] = M[ne]);
          }
        return r;
      }), xy = Ne(function(r) {
        return r.push(n, Us), Ln(v_, n, r);
      });
      function My(r, o) {
        return Ia(r, xe(o, 3), li);
      }
      function Ty(r, o) {
        return Ia(r, xe(o, 3), Rf);
      }
      function Sy(r, o) {
        return r == null ? r : Ef(r, xe(o, 3), bn);
      }
      function zy(r, o) {
        return r == null ? r : is(r, xe(o, 3), bn);
      }
      function Ay(r, o) {
        return r && li(r, xe(o, 3));
      }
      function Cy(r, o) {
        return r && Rf(r, xe(o, 3));
      }
      function Ly(r) {
        return r == null ? [] : uo(r, Xt(r));
      }
      function Ey(r) {
        return r == null ? [] : uo(r, bn(r));
      }
      function su(r, o, s) {
        var m = r == null ? n : qi(r, o);
        return m === n ? s : m;
      }
      function Ry(r, o) {
        return r != null && Ws(r, o, td);
      }
      function _u(r, o) {
        return r != null && Ws(r, o, nd);
      }
      var Iy = Rs(function(r, o, s) {
        o != null && typeof o.toString != "function" && (o = Kl.call(o)), r[o] = s;
      }, cu(wn)), Oy = Rs(function(r, o, s) {
        o != null && typeof o.toString != "function" && (o = Kl.call(o)), ot.call(r, o) ? r[o].push(s) : r[o] = [s];
      }, xe), Dy = Ne(ll);
      function Xt(r) {
        return yn(r) ? Ja(r) : Nf(r);
      }
      function bn(r) {
        return yn(r) ? Ja(r, !0) : hd(r);
      }
      function Ny(r, o) {
        var s = {};
        return o = xe(o, 3), li(r, function(m, b, M) {
          gi(s, o(m, b, M), m);
        }), s;
      }
      function Uy(r, o) {
        var s = {};
        return o = xe(o, 3), li(r, function(m, b, M) {
          gi(s, b, o(m, b, M));
        }), s;
      }
      var Py = br(function(r, o, s) {
        ao(r, o, s);
      }), v_ = br(function(r, o, s, m) {
        ao(r, o, s, m);
      }), Fy = mi(function(r, o) {
        var s = {};
        if (r == null)
          return s;
        var m = !1;
        o = bt(o, function(M) {
          return M = Di(M, r), m || (m = M.length > 1), M;
        }), oi(r, Jf(r), s), m && (s = Xn(s, c | g | w, Id));
        for (var b = o.length; b--; )
          Hf(s, o[b]);
        return s;
      });
      function Wy(r, o) {
        return k_(r, To(xe(o)));
      }
      var By = mi(function(r, o) {
        return r == null ? {} : gd(r, o);
      });
      function k_(r, o) {
        if (r == null)
          return {};
        var s = bt(Jf(r), function(m) {
          return [m];
        });
        return o = xe(o), cs(r, s, function(m, b) {
          return o(m, b[0]);
        });
      }
      function Hy(r, o, s) {
        o = Di(o, r);
        var m = -1, b = o.length;
        for (b || (b = 1, r = n); ++m < b; ) {
          var M = r == null ? n : r[fi(o[m])];
          M === n && (m = b, M = s), r = bi(M) ? M.call(r) : M;
        }
        return r;
      }
      function Yy(r, o, s) {
        return r == null ? r : fl(r, o, s);
      }
      function Xy(r, o, s, m) {
        return m = typeof m == "function" ? m : n, r == null ? r : fl(r, o, s, m);
      }
      var x_ = Ds(Xt), M_ = Ds(bn);
      function qy(r, o, s) {
        var m = Re(r), b = m || Ui(r) || vr(r);
        if (o = xe(o, 4), s == null) {
          var M = r && r.constructor;
          b ? s = m ? new M() : [] : kt(r) ? s = bi(M) ? yr(Vl(r)) : {} : s = {};
        }
        return (b ? Bn : li)(r, function(L, O, P) {
          return o(s, L, O, P);
        }), s;
      }
      function Gy(r, o) {
        return r == null ? !0 : Hf(r, o);
      }
      function Zy(r, o, s) {
        return r == null ? r : bs(r, o, qf(s));
      }
      function jy(r, o, s, m) {
        return m = typeof m == "function" ? m : n, r == null ? r : bs(r, o, qf(s), m);
      }
      function kr(r) {
        return r == null ? [] : xf(r, Xt(r));
      }
      function Ky(r) {
        return r == null ? [] : xf(r, bn(r));
      }
      function Jy(r, o, s) {
        return s === n && (s = o, o = n), s !== n && (s = Zn(s), s = s === s ? s : 0), o !== n && (o = Zn(o), o = o === o ? o : 0), Xi(Zn(r), o, s);
      }
      function Qy(r, o, s) {
        return o = wi(o), s === n ? (s = o, o = 0) : s = wi(s), r = Zn(r), id(r, o, s);
      }
      function Vy(r, o, s) {
        if (s && typeof s != "boolean" && sn(r, o, s) && (o = s = n), s === n && (typeof o == "boolean" ? (s = o, o = n) : typeof r == "boolean" && (s = r, r = n)), r === n && o === n ? (r = 0, o = 1) : (r = wi(r), o === n ? (o = r, r = 0) : o = wi(o)), r > o) {
          var m = r;
          r = o, o = m;
        }
        if (s || r % 1 || o % 1) {
          var b = ja();
          return nn(r + b * (o - r + L0("1e-" + ((b + "").length - 1))), o);
        }
        return Ff(r, o);
      }
      var $y = wr(function(r, o, s) {
        return o = o.toLowerCase(), r + (s ? T_(o) : o);
      });
      function T_(r) {
        return hu(lt(r).toLowerCase());
      }
      function S_(r) {
        return r = lt(r), r && r.replace(fr, Y0).replace(p0, "");
      }
      function eb(r, o, s) {
        r = lt(r), o = Rn(o);
        var m = r.length;
        s = s === n ? m : Xi(Ie(s), 0, m);
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
      }), lb = Cs("toLowerCase");
      function ob(r, o, s) {
        r = lt(r), o = Ie(o);
        var m = o ? hr(r) : 0;
        if (!o || m >= o)
          return r;
        var b = (o - m) / 2;
        return mo(no(b), s) + r + mo(to(b), s);
      }
      function fb(r, o, s) {
        r = lt(r), o = Ie(o);
        var m = o ? hr(r) : 0;
        return o && m < o ? r + mo(o - m, s) : r;
      }
      function ub(r, o, s) {
        r = lt(r), o = Ie(o);
        var m = o ? hr(r) : 0;
        return o && m < o ? mo(o - m, s) + r : r;
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
        return r = lt(r), s = s == null ? 0 : Xi(Ie(s), 0, r.length), o = Rn(o), r.slice(s, s + o.length) == o;
      }
      function mb(r, o, s) {
        var m = k.templateSettings;
        s && sn(r, o, s) && (o = n), r = lt(r), o = Ao({}, o, m, Ns);
        var b = Ao({}, o.imports, m.imports, Ns), M = Xt(b), L = xf(b, M), O, P, ne = 0, ie = o.interpolate || Fn, oe = "__p += '", ge = Tf(
          (o.escape || Fn).source + "|" + ie.source + "|" + (ie === An ? Cn : Fn).source + "|" + (o.evaluate || Fn).source + "|$",
          "g"
        ), pe = "//# sourceURL=" + (ot.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++T0 + "]") + `
`;
        r.replace(ge, function(Se, Fe, Ge, On, _n, Dn) {
          return Ge || (Ge = On), oe += r.slice(ne, Dn).replace(_i, q0), Fe && (O = !0, oe += `' +
__e(` + Fe + `) +
'`), _n && (P = !0, oe += `';
` + _n + `;
__p += '`), Ge && (oe += `' +
((__t = (` + Ge + `)) == null ? '' : __t) +
'`), ne = Dn + Se.length, Se;
        }), oe += `';
`;
        var Te = ot.call(o, "variable") && o.variable;
        if (!Te)
          oe = `with (obj) {
` + oe + `
}
`;
        else if (qr.test(Te))
          throw new Ee(a);
        oe = (P ? oe.replace(Tn, "") : oe).replace(zt, "$1").replace(Un, "$1;"), oe = "function(" + (Te || "obj") + `) {
` + (Te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (O ? ", __e = _.escape" : "") + (P ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + oe + `return __p
}`;
        var De = A_(function() {
          return nt(M, pe + "return " + oe).apply(n, L);
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
          return Ua(r);
        if (!r || !(o = Rn(o)))
          return r;
        var m = $n(r), b = $n(o), M = Pa(m, b), L = Fa(m, b) + 1;
        return Ni(m, M, L).join("");
      }
      function pb(r, o, s) {
        if (r = lt(r), r && (s || o === n))
          return r.slice(0, Ba(r) + 1);
        if (!r || !(o = Rn(o)))
          return r;
        var m = $n(r), b = Fa(m, $n(o)) + 1;
        return Ni(m, 0, b).join("");
      }
      function vb(r, o, s) {
        if (r = lt(r), r && (s || o === n))
          return r.replace(Pn, "");
        if (!r || !(o = Rn(o)))
          return r;
        var m = $n(r), b = Pa(m, $n(o));
        return Ni(m, b).join("");
      }
      function kb(r, o) {
        var s = W, m = K;
        if (kt(o)) {
          var b = "separator" in o ? o.separator : b;
          s = "length" in o ? Ie(o.length) : s, m = "omission" in o ? Rn(o.omission) : m;
        }
        r = lt(r);
        var M = r.length;
        if (_r(r)) {
          var L = $n(r);
          M = L.length;
        }
        if (s >= M)
          return r;
        var O = s - hr(m);
        if (O < 1)
          return m;
        var P = L ? Ni(L, 0, O).join("") : r.slice(0, O);
        if (b === n)
          return P + m;
        if (L && (O += P.length - O), au(b)) {
          if (r.slice(O).search(b)) {
            var ne, ie = P;
            for (b.global || (b = Tf(b.source, lt(dn.exec(b)) + "g")), b.lastIndex = 0; ne = b.exec(ie); )
              var oe = ne.index;
            P = P.slice(0, oe === n ? O : oe);
          }
        } else if (r.indexOf(Rn(b), O) != O) {
          var ge = P.lastIndexOf(b);
          ge > -1 && (P = P.slice(0, ge));
        }
        return P + m;
      }
      function xb(r) {
        return r = lt(r), r && Sn.test(r) ? r.replace(gn, V0) : r;
      }
      var Mb = wr(function(r, o, s) {
        return r + (s ? " " : "") + o.toUpperCase();
      }), hu = Cs("toUpperCase");
      function z_(r, o, s) {
        return r = lt(r), o = s ? n : o, o === n ? Z0(r) ? tg(r) : P0(r) : r.match(o) || [];
      }
      var A_ = Ne(function(r, o) {
        try {
          return Ln(r, n, o);
        } catch (s) {
          return uu(s) ? s : new Ee(s);
        }
      }), Tb = mi(function(r, o) {
        return Bn(o, function(s) {
          s = fi(s), gi(r, s, ou(r[s], r));
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
            var M = r[b];
            if (Ln(M[0], this, m))
              return Ln(M[1], this, m);
          }
        });
      }
      function zb(r) {
        return Vg(Xn(r, c));
      }
      function cu(r) {
        return function() {
          return r;
        };
      }
      function Ab(r, o) {
        return r == null || r !== r ? o : r;
      }
      var Cb = Es(), Lb = Es(!0);
      function wn(r) {
        return r;
      }
      function gu(r) {
        return fs(typeof r == "function" ? r : Xn(r, c));
      }
      function Eb(r) {
        return as(Xn(r, c));
      }
      function Rb(r, o) {
        return ss(r, Xn(o, c));
      }
      var Ib = Ne(function(r, o) {
        return function(s) {
          return ll(s, r, o);
        };
      }), Ob = Ne(function(r, o) {
        return function(s) {
          return ll(r, s, o);
        };
      });
      function du(r, o, s) {
        var m = Xt(o), b = uo(o, m);
        s == null && !(kt(o) && (b.length || !m.length)) && (s = o, o = r, r = this, b = uo(o, Xt(o)));
        var M = !(kt(s) && "chain" in s) || !!s.chain, L = bi(r);
        return Bn(b, function(O) {
          var P = o[O];
          r[O] = P, L && (r.prototype[O] = function() {
            var ne = this.__chain__;
            if (M || ne) {
              var ie = r(this.__wrapped__), oe = ie.__actions__ = mn(this.__actions__);
              return oe.push({ func: P, args: arguments, thisArg: r }), ie.__chain__ = ne, ie;
            }
            return P.apply(r, Li([this.value()], arguments));
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
          return _s(o, r);
        });
      }
      var Ub = Zf(bt), Pb = Zf(Ra), Fb = Zf(bf);
      function C_(r) {
        return eu(r) ? wf(fi(r)) : dd(r);
      }
      function Wb(r) {
        return function(o) {
          return r == null ? n : qi(r, o);
        };
      }
      var Bb = Is(), Hb = Is(!0);
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
        return Re(r) ? bt(r, fi) : In(r) ? [r] : mn(Ks(lt(r)));
      }
      function jb(r) {
        var o = ++lg;
        return lt(r) + o;
      }
      var Kb = go(function(r, o) {
        return r + o;
      }, 0), Jb = jf("ceil"), Qb = go(function(r, o) {
        return r / o;
      }, 1), Vb = jf("floor");
      function $b(r) {
        return r && r.length ? fo(r, wn, If) : n;
      }
      function e6(r, o) {
        return r && r.length ? fo(r, xe(o, 2), If) : n;
      }
      function t6(r) {
        return Da(r, wn);
      }
      function n6(r, o) {
        return Da(r, xe(o, 2));
      }
      function i6(r) {
        return r && r.length ? fo(r, wn, Uf) : n;
      }
      function r6(r, o) {
        return r && r.length ? fo(r, xe(o, 2), Uf) : n;
      }
      var l6 = go(function(r, o) {
        return r * o;
      }, 1), o6 = jf("round"), f6 = go(function(r, o) {
        return r - o;
      }, 0);
      function u6(r) {
        return r && r.length ? vf(r, wn) : 0;
      }
      function a6(r, o) {
        return r && r.length ? vf(r, xe(o, 2)) : 0;
      }
      return k.after = E2, k.ary = o_, k.assign = by, k.assignIn = p_, k.assignInWith = Ao, k.assignWith = wy, k.at = py, k.before = f_, k.bind = ou, k.bindAll = Tb, k.bindKey = u_, k.castArray = Y2, k.chain = i_, k.chunk = Vd, k.compact = $d, k.concat = em, k.cond = Sb, k.conforms = zb, k.constant = cu, k.countBy = u2, k.create = vy, k.curry = a_, k.curryRight = s_, k.debounce = __, k.defaults = ky, k.defaultsDeep = xy, k.defer = R2, k.delay = I2, k.difference = tm, k.differenceBy = nm, k.differenceWith = im, k.drop = rm, k.dropRight = lm, k.dropRightWhile = om, k.dropWhile = fm, k.fill = um, k.filter = s2, k.flatMap = c2, k.flatMapDeep = g2, k.flatMapDepth = d2, k.flatten = $s, k.flattenDeep = am, k.flattenDepth = sm, k.flip = O2, k.flow = Cb, k.flowRight = Lb, k.fromPairs = _m, k.functions = Ly, k.functionsIn = Ey, k.groupBy = m2, k.initial = cm, k.intersection = gm, k.intersectionBy = dm, k.intersectionWith = mm, k.invert = Iy, k.invertBy = Oy, k.invokeMap = b2, k.iteratee = gu, k.keyBy = w2, k.keys = Xt, k.keysIn = bn, k.map = ko, k.mapKeys = Ny, k.mapValues = Uy, k.matches = Eb, k.matchesProperty = Rb, k.memoize = Mo, k.merge = Py, k.mergeWith = v_, k.method = Ib, k.methodOf = Ob, k.mixin = du, k.negate = To, k.nthArg = Nb, k.omit = Fy, k.omitBy = Wy, k.once = D2, k.orderBy = p2, k.over = Ub, k.overArgs = N2, k.overEvery = Pb, k.overSome = Fb, k.partial = fu, k.partialRight = h_, k.partition = v2, k.pick = By, k.pickBy = k_, k.property = C_, k.propertyOf = Wb, k.pull = pm, k.pullAll = t_, k.pullAllBy = vm, k.pullAllWith = km, k.pullAt = xm, k.range = Bb, k.rangeRight = Hb, k.rearg = U2, k.reject = M2, k.remove = Mm, k.rest = P2, k.reverse = ru, k.sampleSize = S2, k.set = Yy, k.setWith = Xy, k.shuffle = z2, k.slice = Tm, k.sortBy = L2, k.sortedUniq = Rm, k.sortedUniqBy = Im, k.split = cb, k.spread = F2, k.tail = Om, k.take = Dm, k.takeRight = Nm, k.takeRightWhile = Um, k.takeWhile = Pm, k.tap = $m, k.throttle = W2, k.thru = vo, k.toArray = y_, k.toPairs = x_, k.toPairsIn = M_, k.toPath = Zb, k.toPlainObject = w_, k.transform = qy, k.unary = B2, k.union = Fm, k.unionBy = Wm, k.unionWith = Bm, k.uniq = Hm, k.uniqBy = Ym, k.uniqWith = Xm, k.unset = Gy, k.unzip = lu, k.unzipWith = n_, k.update = Zy, k.updateWith = jy, k.values = kr, k.valuesIn = Ky, k.without = qm, k.words = z_, k.wrap = H2, k.xor = Gm, k.xorBy = Zm, k.xorWith = jm, k.zip = Km, k.zipObject = Jm, k.zipObjectDeep = Qm, k.zipWith = Vm, k.entries = x_, k.entriesIn = M_, k.extend = p_, k.extendWith = Ao, du(k, k), k.add = Kb, k.attempt = A_, k.camelCase = $y, k.capitalize = T_, k.ceil = Jb, k.clamp = Jy, k.clone = X2, k.cloneDeep = G2, k.cloneDeepWith = Z2, k.cloneWith = q2, k.conformsTo = j2, k.deburr = S_, k.defaultTo = Ab, k.divide = Qb, k.endsWith = eb, k.eq = ti, k.escape = tb, k.escapeRegExp = nb, k.every = a2, k.find = _2, k.findIndex = Qs, k.findKey = My, k.findLast = h2, k.findLastIndex = Vs, k.findLastKey = Ty, k.floor = Vb, k.forEach = r_, k.forEachRight = l_, k.forIn = Sy, k.forInRight = zy, k.forOwn = Ay, k.forOwnRight = Cy, k.get = su, k.gt = K2, k.gte = J2, k.has = Ry, k.hasIn = _u, k.head = e_, k.identity = wn, k.includes = y2, k.indexOf = hm, k.inRange = Qy, k.invoke = Dy, k.isArguments = ji, k.isArray = Re, k.isArrayBuffer = Q2, k.isArrayLike = yn, k.isArrayLikeObject = Dt, k.isBoolean = V2, k.isBuffer = Ui, k.isDate = $2, k.isElement = ey, k.isEmpty = ty, k.isEqual = ny, k.isEqualWith = iy, k.isError = uu, k.isFinite = ry, k.isFunction = bi, k.isInteger = c_, k.isLength = So, k.isMap = g_, k.isMatch = ly, k.isMatchWith = oy, k.isNaN = fy, k.isNative = uy, k.isNil = sy, k.isNull = ay, k.isNumber = d_, k.isObject = kt, k.isObjectLike = Et, k.isPlainObject = _l, k.isRegExp = au, k.isSafeInteger = _y, k.isSet = m_, k.isString = zo, k.isSymbol = In, k.isTypedArray = vr, k.isUndefined = hy, k.isWeakMap = cy, k.isWeakSet = gy, k.join = ym, k.kebabCase = ib, k.last = Gn, k.lastIndexOf = bm, k.lowerCase = rb, k.lowerFirst = lb, k.lt = dy, k.lte = my, k.max = $b, k.maxBy = e6, k.mean = t6, k.meanBy = n6, k.min = i6, k.minBy = r6, k.stubArray = yu, k.stubFalse = bu, k.stubObject = Yb, k.stubString = Xb, k.stubTrue = qb, k.multiply = l6, k.nth = wm, k.noConflict = Db, k.noop = mu, k.now = xo, k.pad = ob, k.padEnd = fb, k.padStart = ub, k.parseInt = ab, k.random = Vy, k.reduce = k2, k.reduceRight = x2, k.repeat = sb, k.replace = _b, k.result = Hy, k.round = o6, k.runInContext = N, k.sample = T2, k.size = A2, k.snakeCase = hb, k.some = C2, k.sortedIndex = Sm, k.sortedIndexBy = zm, k.sortedIndexOf = Am, k.sortedLastIndex = Cm, k.sortedLastIndexBy = Lm, k.sortedLastIndexOf = Em, k.startCase = gb, k.startsWith = db, k.subtract = f6, k.sum = u6, k.sumBy = a6, k.template = mb, k.times = Gb, k.toFinite = wi, k.toInteger = Ie, k.toLength = b_, k.toLower = yb, k.toNumber = Zn, k.toSafeInteger = yy, k.toString = lt, k.toUpper = bb, k.trim = wb, k.trimEnd = pb, k.trimStart = vb, k.truncate = kb, k.unescape = xb, k.uniqueId = jb, k.upperCase = Mb, k.upperFirst = hu, k.each = r_, k.eachRight = l_, k.first = e_, du(k, function() {
        var r = {};
        return li(k, function(o, s) {
          ot.call(k.prototype, s) || (r[s] = o);
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
          var M = this.clone();
          return M.__iteratees__.push({
            iteratee: xe(b, 3),
            type: s
          }), M.__filtered__ = M.__filtered__ || m, M;
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
          return ll(s, r, o);
        });
      }), Ye.prototype.reject = function(r) {
        return this.filter(To(xe(r)));
      }, Ye.prototype.slice = function(r, o) {
        r = Ie(r);
        var s = this;
        return s.__filtered__ && (r > 0 || o < 0) ? new Ye(s) : (r < 0 ? s = s.takeRight(-r) : r && (s = s.drop(r)), o !== n && (o = Ie(o), s = o < 0 ? s.dropRight(-o) : s.take(o - r)), s);
      }, Ye.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, Ye.prototype.toArray = function() {
        return this.take(he);
      }, li(Ye.prototype, function(r, o) {
        var s = /^(?:filter|find|map|reject)|While$/.test(o), m = /^(?:head|last)$/.test(o), b = k[m ? "take" + (o == "last" ? "Right" : "") : o], M = m || /^find/.test(o);
        b && (k.prototype[o] = function() {
          var L = this.__wrapped__, O = m ? [1] : arguments, P = L instanceof Ye, ne = O[0], ie = P || Re(L), oe = function(Fe) {
            var Ge = b.apply(k, Li([Fe], O));
            return m && ge ? Ge[0] : Ge;
          };
          ie && s && typeof ne == "function" && ne.length != 1 && (P = ie = !1);
          var ge = this.__chain__, pe = !!this.__actions__.length, Te = M && !ge, De = P && !pe;
          if (!M && ie) {
            L = De ? L : new Ye(this);
            var Se = r.apply(L, O);
            return Se.__actions__.push({ func: vo, args: [oe], thisArg: n }), new Yn(Se, ge);
          }
          return Te && De ? r.apply(this, O) : (Se = this.thru(oe), Te ? m ? Se.value()[0] : Se.value() : Se);
        });
      }), Bn(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var o = Gl[r], s = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(r);
        k.prototype[r] = function() {
          var b = arguments;
          if (m && !this.__chain__) {
            var M = this.value();
            return o.apply(Re(M) ? M : [], b);
          }
          return this[s](function(L) {
            return o.apply(Re(L) ? L : [], b);
          });
        };
      }), li(Ye.prototype, function(r, o) {
        var s = k[o];
        if (s) {
          var m = s.name + "";
          ot.call(mr, m) || (mr[m] = []), mr[m].push({ name: o, func: s });
        }
      }), mr[co(n, T).name] = [{
        name: "wrapper",
        func: n
      }], Ye.prototype.clone = xg, Ye.prototype.reverse = Mg, Ye.prototype.value = Tg, k.prototype.at = e2, k.prototype.chain = t2, k.prototype.commit = n2, k.prototype.next = i2, k.prototype.plant = l2, k.prototype.reverse = o2, k.prototype.toJSON = k.prototype.valueOf = k.prototype.value = f2, k.prototype.first = k.prototype.head, Vr && (k.prototype[Vr] = r2), k;
    }, cr = ng();
    Wi ? ((Wi.exports = cr)._ = cr, gf._ = cr) : Jt._ = cr;
  }).call(vi);
})(jo, jo.exports);
var Ko = jo.exports;
const Io = /* @__PURE__ */ Vc(Ko);
function Jo(e) {
  return --e * e * ((1.70158 + 1) * e + 1.70158) + 1;
}
function rt(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function $c(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Cl(e) {
  return e * e * e * e * e;
}
function Tw(e, t, n) {
  if (t !== "timeseries")
    return e = e, e;
  const i = Fr(n);
  return e.map((l) => ({
    ...l,
    data: l.data.map((f) => ({
      ...f,
      x: new Date(i(f.x))
    }))
  }));
}
function Sw(e, t, n) {
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
function zw(e, t, n, i, l, f, u, a, _) {
  let h, d, c, g, w, p, S, x, T = [], z = [...new Set(e.map((R) => R.type))], C = [];
  for (let R = 0; R < e.length; R++)
    C = C.concat(e[R].data);
  if (a ? h = a : h = Iu(C, (R) => R.x), f === "timeseries" ? d = sw().domain(h).range([
    t + l * 1.5,
    i - l * 2
  ]) : typeof C[0].x == "number" ? d = Nr().domain(h).range([
    t + l * 1.5,
    i - l * 2
  ]) : d = R3().domain(C.map((R) => R.x)).range([
    t + l * 1.5,
    i - l * 2
  ]), z.includes("bands")) {
    let R = [];
    e.forEach((D) => {
      D.data.forEach((ee) => {
        "y" in ee && R.push(ee.y), "y_min" in ee && R.push(ee.y_min), "y_max" in ee && R.push(ee.y_max);
      });
    });
    let I = Math.min(...R), G = Math.max(...R);
    c = [I, G];
  } else
    _ ? c = _ : c = Iu(C, (R) => +R.y);
  u === "linear" ? g = Nr().domain(c).range([
    n - l * 2,
    l * 2
  ]).nice() : g = Nc().domain(c).range([
    n - l * 2,
    l * 2
  ]).nice(), w = (R) => R.x, p = (R) => R.y, S = (R) => R.y_min, x = (R) => R.y_max;
  for (let R = 0; R < z.length; R++)
    switch (z[R]) {
      case "density":
        T[R] = ch().curve(_w).x((I) => d(w(I))).y0(n - l * 2).y1((I) => g(p(I)));
        break;
      case "line":
        T[R] = Kc().defined(function(I) {
          return I.y !== null;
        }).x((I) => d(w(I))).y((I) => g(p(I)));
        break;
      case "bands":
        T[R] = ch().x((I) => d(w(I))).y0((I) => g(S(I))).y1((I) => g(x(I)));
        break;
    }
  let F = {};
  for (let R = 0; R < z.length; R++)
    F[z[R]] = T[R];
  return [F, d, g];
}
function Aw(e, t, n, i, l, f) {
  if (!t || t.length === 0)
    return [];
  let u = e.flatMap((x) => x.data), a = [];
  if (n === "factor") {
    let x = l.domain();
    a = [l(x[0]), l(x[x.length - 1])];
  } else
    a = Iu(u, (x) => x.x), a = [l(a[0]), l(a[1])];
  const _ = Fr(f), h = a[0], d = a[1];
  let c = [], g = /* @__PURE__ */ new Set();
  for (let x of t) {
    let { x_start: T, x_end: z, y_start: C, y_end: F, legend_text: R } = x;
    n === "date" ? (T = l(new Date(_(T))), z = l(new Date(_(z)))) : (T = l(T), z = l(z)), C = C === "auto" ? i(i.domain()[0]) : C === "even" ? "even" : i(parseFloat(C)), F = F === "auto" ? i(i.domain()[1]) : F === "even" ? "even" : i(parseFloat(F));
    let I;
    n === "factor" ? I = T <= h ? l.domain()[0] : l.domain()[l.range().indexOf(T)] : I = T <= h ? l.invert(h) : l.invert(T), (T >= h && T <= d || z >= h && z <= d || T <= h && z >= d) && (c.push({
      ...x,
      x_start: T,
      x_end: z,
      y_start: C,
      y_end: F,
      x_position: I
    }), g.add(R));
  }
  let w = Array.from(g), p = i.range(), S = (p[1] - p[0]) / w.length;
  for (let x of c)
    if (x.y_start === "even" || x.y_end === "even") {
      let T = w.indexOf(x.legend_text), z = p[0] + T * S, C = z + S;
      x.y_position = i.invert(C), x.y_start = z, x.y_end = C;
    }
  return c;
}
function Cw(e, t, n, i, l) {
  let f = [null, null], u = 1 / 0;
  for (let a = 0; a < e.length; a++)
    for (let _ = 0; _ < e[a].data.length; _++) {
      let h = e[a].data[_], d = Math.sqrt(
        (t(h.x) - n) ** 2 + (i(h.y) - l) ** 2
      );
      d < u && (f = [a, _], u = d);
    }
  return f;
}
function Lw(e, t, n, i, l) {
  let f = null, u = 1 / 0;
  for (let a = 0; a < e.length; a++) {
    let _ = e[a].data, h = Math.sqrt(
      (t(_.x) - n) ** 2 + (i(_.y) - l) ** 2
    );
    h < u && (f = a, u = h);
  }
  return f;
}
function Ew(e, t, n, i) {
  const l = n.invert(t);
  function f(c, g) {
    const w = Or((z) => new Date(z.x)).left, p = w(c, g, 1), S = c[p - 1], x = c[p];
    let T;
    return S && x ? T = g - new Date(S.x) > new Date(x.x) - g ? x : S : T = S || x, T;
  }
  function u(c, g) {
    switch (g) {
      case "hourly":
        return new Date(
          c.getFullYear(),
          c.getMonth(),
          c.getDate(),
          c.getHours(),
          0,
          0,
          0
        );
      case "daily":
        return new Date(c.getFullYear(), c.getMonth(), c.getDate());
      case "weekly":
        const w = c.getDay(), p = new Date(c);
        return p.setDate(c.getDate() - w), p.setHours(0, 0, 0, 0), p;
      case "monthly":
        return new Date(c.getFullYear(), c.getMonth(), 1);
      case "yearly":
        return new Date(c.getFullYear(), 0, 1);
      default:
        return c;
    }
  }
  const a = f(
    e.flatMap((c) => c.data).sort((c, g) => new Date(c.x) - new Date(g.x)),
    l
  ), _ = u(
    new Date(a.x),
    i
  );
  function h(c, g, w) {
    return c.find((p) => u(new Date(p.x), w).getTime() === g.getTime());
  }
  let d = [];
  return e.forEach((c) => {
    const g = h(
      c.data,
      _,
      i
    );
    g && d.push({
      colors: c.colors,
      data: { ...g },
      id: c.id,
      id_id: c.id_id,
      opacity: c.opacity,
      path: c.path,
      size: c.size,
      tooltip: c.tooltip,
      type: c.type,
      second_axis: c.second_axis
    });
  }), d;
}
function e0(e, t, n, i, l) {
  if (e === "bar") {
    const f = Or((a) => a).left, u = f(t, l);
    if (u > 0 && u < t.length) {
      const a = t[u - 1], _ = t[u];
      return l - a < _ - l ? u - 1 : u;
    } else {
      if (u === 0)
        return 0;
      if (u >= t.length)
        return t.length - 1;
    }
  } else {
    const f = Or((a) => n(a)).left, u = f(i, l);
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
function Rw(e, t) {
  return Io.compact(
    Io.map(e, (n) => {
      const i = Io.filter(n.data, (l) => l.x === t);
      return Io.isEmpty(i) ? null : {
        ...n,
        data: i[0]
      };
    })
  );
}
function Iw(e, t, n, i, l, f, u, a) {
  let _, h, d;
  if (i === "timeseries" ? (_ = e.filter((c) => c.tooltip === !0), _ = Ew(
    _,
    f,
    t,
    a
  )) : (d = t.domain(), h = e0("XYChart", void 0, t, d, f), _ = e.filter((c) => c.tooltip === !0), _ = Rw(
    _,
    h
  )), _ = _.filter((c) => c.data.y !== null), l === "vertical_line")
    return _;
  if (l === "single") {
    let c, g = Lw(
      _,
      t,
      f,
      n,
      u
    );
    return c = _[g], c;
  }
}
function Ow(e, t, n, i, l, f, u, a, _) {
  let h, d, c, g, w;
  return h = wl().domain(t).range([
    u + a * 1.5,
    i - a * 2
  ]).padding([0.3]), f === "grouped" ? d = wl().domain(n).range([0, h.bandwidth()]).padding([l]) : d = wl().domain("iii").range([0, h.bandwidth()]).padding([l]), g = Uu(e, (p) => +p.y), w = Mc(e, (p) => +p.y_start), console.log("ymin", w), c = Nr().domain([w, g]).range([
    _ - a / 2,
    a * 2
  ]).nice(), [h, d, g, c];
}
function Dw(e) {
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
function Nw(e) {
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
function wh(e, t, n) {
  const i = t(e.x_start), l = n(e.y_start), f = t(e.x_end), u = n(e.y_end), a = e.curvature || 0.2, _ = e.direction === "downward" ? -1 : 1, h = (i + f) / 2, d = (l + u) / 2, c = h + _ * Math.abs(u - l) * a, g = d - _ * Math.abs(f - i) * a;
  let w = `M ${i} ${l} Q ${c} ${g} ${f} ${u}`;
  const p = 10, S = Math.atan2(u - g, f - c), x = Math.PI / 8, T = f - p * Math.cos(S - x), z = u - p * Math.sin(S - x), C = f - p * Math.cos(S + x), F = u - p * Math.sin(S + x);
  return w += `M ${f} ${u} L ${T} ${z} M ${f} ${u} L ${C} ${F}`, w;
}
function _a(e, t, n) {
  const i = n * (Math.PI / 180);
  return Math.abs(e * Math.sin(i)) + Math.abs(t * Math.cos(i));
}
function Uw(e, t, n, i, l, f, u) {
  let a, _;
  return a = Nr().domain([Mc(e, (h) => h.x_start), Uu(e, (h) => h.x_end)]).range([u + l, t - i - l]), _ = Nr().domain([0, Uu(e, (h) => h.y)]).range([n - i - l - f, l]).nice(), [a, _];
}
function t0(e, t, n) {
  return console.log(n[0].data.x, "tooltip2_array_values[0].data.x"), e === "hour" && t === "timeseries" ? n[0].data.x.toString().replace(/^(.*?)T/, " ").split(" ").slice(0, 5).join(" ") : t === "timeseries" ? n[0].data.x.toDateString() : n[0].data.x.toString();
}
function pn(e, { delay: t = 0, duration: n = 400, easing: i = Hr } = {}) {
  const l = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (f) => `opacity: ${f * l}`
  };
}
function Gt(e, { delay: t = 0, duration: n = 400, easing: i = $c, x: l = 0, y: f = 0, opacity: u = 0 } = {}) {
  const a = getComputedStyle(e), _ = +a.opacity, h = a.transform === "none" ? "" : a.transform, d = _ * (1 - u), [c, g] = I_(l), [w, p] = I_(f);
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (S, x) => `
			transform: ${h} translate(${(1 - S) * c}${g}, ${(1 - S) * w}${p});
			opacity: ${_ - d * x}`
  };
}
function Pw(e, { delay: t = 0, speed: n, duration: i, easing: l = rt } = {}) {
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
function ph(e) {
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
    if (ph(e) && ph(t)) {
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
  const n = Il(e);
  let i, l = e;
  function f(u, a) {
    if (e == null)
      return n.set(e = u), Promise.resolve();
    l = u;
    let _ = i, h = !1, {
      delay: d = 0,
      duration: c = 400,
      easing: g = Hr,
      interpolate: w = Xu
    } = E_(E_({}, t), a);
    if (c === 0)
      return _ && (_.abort(), _ = null), n.set(e = l), Promise.resolve();
    const p = Ll() + d;
    let S;
    return i = El((x) => {
      if (x < p)
        return !0;
      h || (S = w(e, u), typeof c == "function" && (c = c(e, u)), h = !0), _ && (_.abort(), _ = null);
      const T = x - p;
      return T > /** @type {number} */
      c ? (n.set(e = u), !1) : (n.set(e = S(g(T / c))), !0);
    }), i.promise;
  }
  return {
    set: f,
    update: (u, a) => f(u(l, e), a),
    subscribe: n.subscribe
  };
}
function Fw(e) {
  let t, n, i, l, f, u, a, _;
  return {
    c() {
      t = Ce("path"), v(t, "stroke", n = /*line*/
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
    m(h, d) {
      j(h, t, d), _ = !0;
    },
    p(h, [d]) {
      (!_ || d & /*line*/
      1 && n !== (n = /*line*/
      h[0].type == "bands" ? "none" : (
        /*line*/
        h[0].colors
      ))) && v(t, "stroke", n), (!_ || d & /*$tweened_x*/
      64) && v(
        t,
        "d",
        /*$tweened_x*/
        h[6]
      ), (!_ || d & /*listener, tooltip2_array_values, hover_legend, current_categories, line*/
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
      ))) && v(t, "opacity", i), (!_ || d & /*line*/
      1 && l !== (l = /*line*/
      h[0].fill)) && v(t, "fill", l), (!_ || d & /*hover_legend, current_categories, line, line_size*/
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
      _ || (it(() => {
        _ && (a && a.end(1), u = Fi(t, Pw, { duration: 1e3 }), u.start());
      }), _ = !0);
    },
    o(h) {
      u && u.invalidate(), a = Ml(t, pn, {}), _ = !1;
    },
    d(h) {
      h && Z(t), h && a && a.end();
    }
  };
}
function Ww(e, t, n) {
  let i, { line: l } = t, { hover_legend: f } = t, { current_categories: u } = t, { line_size: a } = t, { tweenOptions: _ } = t, { path: h = l.path } = t, { tooltip2_array_values: d } = t, { listener: c } = t, g = Ut(h, _ == null ? void 0 : _.path);
  return wt(e, g, (w) => n(6, i = w)), e.$$set = (w) => {
    "line" in w && n(0, l = w.line), "hover_legend" in w && n(1, f = w.hover_legend), "current_categories" in w && n(2, u = w.current_categories), "line_size" in w && n(3, a = w.line_size), "tweenOptions" in w && n(8, _ = w.tweenOptions), "path" in w && n(9, h = w.path), "tooltip2_array_values" in w && n(4, d = w.tooltip2_array_values), "listener" in w && n(5, c = w.listener);
  }, e.$$.update = () => {
    e.$$.dirty & /*path, tweenOptions*/
    768 && Rl().then(() => {
      g.set(h, _ == null ? void 0 : _.path);
    }), e.$$.dirty & /*tooltip2_array_values, line*/
    17 && d && console.log(d, l.id, "hi");
  }, [
    l,
    f,
    u,
    a,
    d,
    c,
    i,
    g,
    _,
    h
  ];
}
class Bw extends ht {
  constructor(t) {
    super(), _t(this, t, Ww, Fw, ft, {
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
function vh(e, t, n) {
  const i = e.slice();
  return i[18] = t[n][0], i[19] = t[n][1], i;
}
function Hw(e) {
  let t = (
    /*key*/
    e[18] + ""
  ), n, i, l;
  function f(_, h) {
    return typeof /*values*/
    _[19] == "string" ? Gw : (
      /*values*/
      _[19] instanceof Date ? qw : Xw
    );
  }
  let u = f(e), a = u(e);
  return {
    c() {
      n = ze(t), i = ze(`:
          `), l = _e("div"), a.c(), y(l, "font-weight", "bold");
    },
    m(_, h) {
      j(_, n, h), j(_, i, h), j(_, l, h), a.m(l, null);
    },
    p(_, h) {
      h & /*tooltip_value*/
      4 && t !== (t = /*key*/
      _[18] + "") && Oe(n, t), u === (u = f(_)) && a ? a.p(_, h) : (a.d(1), a = u(_), a && (a.c(), a.m(l, null)));
    },
    d(_) {
      _ && (Z(n), Z(i), Z(l)), a.d();
    }
  };
}
function Yw(e) {
  let t, n, i, l, f = (
    /*values*/
    e[19] + ""
  ), u;
  return {
    c() {
      t = _e("div"), n = _e("span"), i = ve(), l = _e("div"), u = ze(f), y(
        n,
        "background",
        /*key*/
        e[18]
      ), y(n, "width", "9px"), y(n, "height", "9px"), y(n, "border-radius", "50%"), y(n, "margin", "3px"), y(n, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(t, "display", "flex");
    },
    m(a, _) {
      j(a, t, _), X(t, n), j(a, i, _), j(a, l, _), X(l, u);
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
function Xw(e) {
  let t = (
    /*format_number*/
    e[1](
      /*values*/
      e[19]
    ) + ""
  ), n;
  return {
    c() {
      n = ze(t);
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
function qw(e) {
  let t = (
    /*values*/
    e[19].toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + ""
  ), n;
  return {
    c() {
      n = ze(t);
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
function Gw(e) {
  let t = (
    /*values*/
    e[19] + ""
  ), n;
  return {
    c() {
      n = ze(t);
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
function kh(e) {
  let t, n;
  function i(u, a) {
    return (
      /*key*/
      u[18] !== "x" && /*key*/
      u[18] !== "y" ? Yw : Hw
    );
  }
  let l = i(e), f = l(e);
  return {
    c() {
      t = _e("div"), f.c(), n = ve(), v(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(u, a) {
      j(u, t, a), f.m(t, null), X(t, n);
    },
    p(u, a) {
      l === (l = i(u)) && f ? f.p(u, a) : (f.d(1), f = l(u), f && (f.c(), f.m(t, n)));
    },
    d(u) {
      u && Z(t), f.d();
    }
  };
}
function Zw(e) {
  let t, n, i, l, f = ke(Object.entries(
    /*tooltip_value*/
    e[2]
  )), u = [];
  for (let a = 0; a < f.length; a += 1)
    u[a] = kh(vh(e, f, a));
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
      j(a, t, _), X(t, n);
      for (let h = 0; h < u.length; h += 1)
        u[h] && u[h].m(n, null);
      l = !0;
    },
    p(a, [_]) {
      if (_ & /*Object, tooltip_value, Date, format_number*/
      6) {
        f = ke(Object.entries(
          /*tooltip_value*/
          a[2]
        ));
        let h;
        for (h = 0; h < f.length; h += 1) {
          const d = vh(a, f, h);
          u[h] ? u[h].p(d, _) : (u[h] = kh(d), u[h].c(), u[h].m(n, null));
        }
        for (; h < u.length; h += 1)
          u[h].d(1);
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
        l && (i || (i = Pt(t, Gt, {}, !0)), i.run(1));
      }), l = !0);
    },
    o(a) {
      i || (i = Pt(t, Gt, {}, !1)), i.run(0), l = !1;
    },
    d(a) {
      a && Z(t), xn(u, a), a && i && i.end();
    }
  };
}
const xh = 0;
function jw(e, t, n) {
  let i, l, f, u, a, _, h, { x_scale: d } = t, { y_scale: c } = t, { format_tooltip: g } = t, { tooltip2_array_values: w } = t, { width: p } = t, { height: S } = t, { margin: x } = t, { buffer: T } = t, z, C;
  const F = -50;
  return e.$$set = (R) => {
    "x_scale" in R && n(5, d = R.x_scale), "y_scale" in R && n(6, c = R.y_scale), "format_tooltip" in R && n(7, g = R.format_tooltip), "tooltip2_array_values" in R && n(8, w = R.tooltip2_array_values), "width" in R && n(9, p = R.width), "height" in R && n(10, S = R.height), "margin" in R && n(11, x = R.margin), "buffer" in R && n(12, T = R.buffer);
  }, e.$$.update = () => {
    e.$$.dirty & /*x_scale, tooltip2_array_values*/
    288 && n(14, i = d(w.data.x)), e.$$.dirty & /*y_scale, tooltip2_array_values*/
    320 && n(13, l = c(w.data.y)), e.$$.dirty & /*x, width*/
    16896 && n(4, f = i + z > p ? i - z - F : i + F), e.$$.dirty & /*y, height, margin, buffer*/
    15360 && n(3, u = l + C > S - x - T ? l - C - xh - x - T : l + xh), e.$$.dirty & /*tooltip2_array_values*/
    256 && n(0, a = w.colors), e.$$.dirty & /*colour, tooltip2_array_values*/
    257 && n(2, _ = {
      [a]: w.id,
      x: w.data.x,
      y: w.data.y
    }), e.$$.dirty & /*format_tooltip*/
    128 && n(1, h = hn(g));
  }, [
    a,
    h,
    _,
    u,
    f,
    d,
    c,
    g,
    w,
    p,
    S,
    x,
    T,
    l,
    i
  ];
}
class Kw extends ht {
  constructor(t) {
    super(), _t(this, t, jw, Zw, ft, {
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
function Mh(e, t, n) {
  const i = e.slice();
  return i[19] = t[n], i;
}
function Th(e) {
  let t, n, i, l, f, u, a;
  function _(w, p) {
    return (
      /*interval*/
      w[1] === "hour" && /*type*/
      w[2] === "timeseries" ? Vw : (
        /*type*/
        w[2] === "timeseries" ? Qw : Jw
      )
    );
  }
  let h = _(e), d = h(e), c = ke(
    /*tooltip2_array_values*/
    e[0]
  ), g = [];
  for (let w = 0; w < c.length; w += 1)
    g[w] = Sh(Mh(e, c, w));
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
      j(w, t, p), X(t, n), d.m(n, null), X(t, i), X(t, l);
      for (let S = 0; S < g.length; S += 1)
        g[S] && g[S].m(l, null);
      f = nr(
        t,
        /*div1_elementresize_handler*/
        e[18].bind(t)
      ), a = !0;
    },
    p(w, p) {
      if (h === (h = _(w)) && d ? d.p(w, p) : (d.d(1), d = h(w), d && (d.c(), d.m(n, null))), p & /*format_number, tooltip2_array_values*/
      33) {
        c = ke(
          /*tooltip2_array_values*/
          w[0]
        );
        let S;
        for (S = 0; S < c.length; S += 1) {
          const x = Mh(w, c, S);
          g[S] ? g[S].p(x, p) : (g[S] = Sh(x), g[S].c(), g[S].m(l, null));
        }
        for (; S < g.length; S += 1)
          g[S].d(1);
        g.length = c.length;
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
        a && (u || (u = Pt(t, Gt, {}, !0)), u.run(1));
      }), a = !0);
    },
    o(w) {
      w && (u || (u = Pt(t, Gt, {}, !1)), u.run(0)), a = !1;
    },
    d(w) {
      w && Z(t), d.d(), xn(g, w), f(), w && u && u.end();
    }
  };
}
function Jw(e) {
  let t = (
    /*tooltip2_array_values*/
    e[0][0].data.x.toString() + ""
  ), n;
  return {
    c() {
      n = ze(t);
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
function Qw(e) {
  let t = (
    /*tooltip2_array_values*/
    e[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + ""
  ), n;
  return {
    c() {
      n = ze(t);
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
function Vw(e) {
  let t = (
    /*tooltip2_array_values*/
    e[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 5).join(" ") + ""
  ), n;
  return {
    c() {
      n = ze(t);
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
function $w(e) {
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
function ep(e) {
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
function Sh(e) {
  let t, n, i, l, f, u = (
    /*line*/
    e[19].id + ""
  ), a, _, h, d = (
    /*format_number*/
    e[5](
      /*line*/
      e[19].data.y
    ) + ""
  ), c, g;
  function w(x, T) {
    if (
      /*line*/
      x[19].type === "points"
    )
      return ep;
    if (
      /*line*/
      x[19].type === "line"
    )
      return $w;
  }
  let p = w(e), S = p && p(e);
  return {
    c() {
      t = _e("div"), n = _e("div"), i = _e("div"), S && S.c(), l = ve(), f = _e("span"), a = ze(u), _ = ve(), h = _e("div"), c = ze(d), g = ve(), y(i, "width", "18px"), y(i, "display", "flex"), y(i, "align-items", "center"), y(i, "justify-content", "center"), y(n, "display", "flex"), y(n, "align-items", "center"), v(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(x, T) {
      j(x, t, T), X(t, n), X(n, i), S && S.m(i, null), X(n, l), X(n, f), X(f, a), X(t, _), X(t, h), X(h, c), X(t, g);
    },
    p(x, T) {
      p === (p = w(x)) && S ? S.p(x, T) : (S && S.d(1), S = p && p(x), S && (S.c(), S.m(i, null))), T & /*tooltip2_array_values*/
      1 && u !== (u = /*line*/
      x[19].id + "") && Oe(a, u), T & /*format_number, tooltip2_array_values*/
      33 && d !== (d = /*format_number*/
      x[5](
        /*line*/
        x[19].data.y
      ) + "") && Oe(c, d);
    },
    d(x) {
      x && Z(t), S && S.d();
    }
  };
}
function tp(e) {
  let t, n = (
    /*tooltip2_array_values*/
    e[0] && /*tooltip2_array_values*/
    e[0].length > 0 && Th(e)
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
      1 && te(n, 1)) : (n = Th(i), n.c(), te(n, 1), n.m(t.parentNode, t)) : n && (We(), ue(n, 1, 1, () => {
        n = null;
      }), Be());
    },
    i(i) {
      te(n);
    },
    o(i) {
      ue(n);
    },
    d(i) {
      i && Z(t), n && n.d(i);
    }
  };
}
const zh = 20, Ah = 0;
function np(e, t, n) {
  let i, l, f, u, a, { x_scale: _ } = t, { m_y: h } = t, { tooltip2_array_values: d } = t, { format_tooltip: c } = t, { height: g } = t, { width: w } = t, { margin: p } = t, { buffer: S } = t, { interval: x } = t, { type: T } = t, z, C, F;
  function R() {
    z = this.clientWidth, C = this.clientHeight, n(3, z), n(4, C);
  }
  return e.$$set = (I) => {
    "x_scale" in I && n(8, _ = I.x_scale), "m_y" in I && n(9, h = I.m_y), "tooltip2_array_values" in I && n(0, d = I.tooltip2_array_values), "format_tooltip" in I && n(10, c = I.format_tooltip), "height" in I && n(11, g = I.height), "width" in I && n(12, w = I.width), "margin" in I && n(13, p = I.margin), "buffer" in I && n(14, S = I.buffer), "interval" in I && n(1, x = I.interval), "type" in I && n(2, T = I.type);
  }, e.$$.update = () => {
    e.$$.dirty & /*tooltip2_array_values, type, maxYValue*/
    32773 && (d.forEach((I) => {
      I.second_axis && (I.data.y = I.data.y_og);
    }), n(15, F = Math.max(...d.map((I) => I.data.y))), n(0, d = d.map((I) => ({
      ...I,
      shape: T === "scatter" ? "point" : "line"
    })).sort((I, G) => G.data.y - I.data.y || G.data.y - F))), e.$$.dirty & /*x_scale, tooltip2_array_values*/
    257 && n(17, i = _(d[0].data.x)), e.$$.dirty & /*m_y*/
    512 && n(16, l = h), e.$$.dirty & /*x, tooltipWidth, width*/
    135176 && n(7, f = i + z > w ? i - z - zh : i + zh), e.$$.dirty & /*y, tooltipHeight, height, margin, buffer*/
    92176 && n(6, u = l + C > g - p - S ? l - C - Ah - p - S : l + Ah), e.$$.dirty & /*format_tooltip*/
    1024 && n(5, a = hn(c));
  }, [
    d,
    x,
    T,
    z,
    C,
    a,
    u,
    f,
    _,
    h,
    c,
    g,
    w,
    p,
    S,
    F,
    l,
    i,
    R
  ];
}
class ip extends ht {
  constructor(t) {
    super(), _t(this, t, np, tp, ft, {
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
function rp(e) {
  let t, n, i, l, f, u, a, _, h;
  return {
    c() {
      t = Ce("circle"), v(
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
    m(d, c) {
      j(d, t, c), _ || (h = [
        dt(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[14]
        ),
        dt(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[15]
        )
      ], _ = !0);
    },
    p(d, [c]) {
      c & /*$tweened_cx*/
      128 && v(
        t,
        "cx",
        /*$tweened_cx*/
        d[7]
      ), c & /*$tweened_cy*/
      256 && v(
        t,
        "cy",
        /*$tweened_cy*/
        d[8]
      ), c & /*categories*/
      1 && n !== (n = /*categories*/
      d[0].colors) && v(t, "fill", n), c & /*categories*/
      1 && i !== (i = /*categories*/
      d[0].colors) && v(t, "stroke", i), c & /*listener, tooltip2_array_values, points, categories*/
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
      )) && v(t, "stroke-width", l), c & /*listener, tooltip2_array_values, points, categories*/
      99 && f !== (f = /*listener*/
      d[6] && /*tooltip2_array_values*/
      d[5] && /*tooltip2_array_values*/
      d[5].data.x === /*points*/
      d[1].x && /*tooltip2_array_values*/
      d[5].data.y === /*points*/
      d[1].y ? (
        /*categories*/
        d[0].opacity * 0.2
      ) : 0) && v(t, "stroke-opacity", f), c & /*listener, tooltip2_array_values, hover_legend, current_categories, categories*/
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
      )) && v(t, "opacity", u), c & /*listener, tooltip2_array_values, points, categories*/
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
      d && Z(t), _ = !1, Zt(h);
    }
  };
}
function lp(e, t, n) {
  let i, l, { x: f } = t, { y: u } = t, { categories: a } = t, { points: _ } = t, { tweenOptions: h } = t, { hovered_data: d } = t, { hover_legend: c } = t, { current_categories: g } = t, { tooltip2_array_values: w } = t, { listener: p } = t, S = Ut(f, h == null ? void 0 : h.x);
  wt(e, S, (C) => n(7, i = C));
  let x = Ut(u, h == null ? void 0 : h.y);
  wt(e, x, (C) => n(8, l = C));
  const T = (C) => {
    O6.set(_.x), d.set(a.id), O_.set(_);
  }, z = () => {
    d.set(null), O_.set(null);
  };
  return e.$$set = (C) => {
    "x" in C && n(11, f = C.x), "y" in C && n(12, u = C.y), "categories" in C && n(0, a = C.categories), "points" in C && n(1, _ = C.points), "tweenOptions" in C && n(13, h = C.tweenOptions), "hovered_data" in C && n(2, d = C.hovered_data), "hover_legend" in C && n(3, c = C.hover_legend), "current_categories" in C && n(4, g = C.current_categories), "tooltip2_array_values" in C && n(5, w = C.tooltip2_array_values), "listener" in C && n(6, p = C.listener);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions, y*/
    14336 && Rl().then(() => {
      S.set(f, h == null ? void 0 : h.x), x.set(u, h == null ? void 0 : h.y);
    });
  }, [
    a,
    _,
    d,
    c,
    g,
    w,
    p,
    i,
    l,
    S,
    x,
    f,
    u,
    h,
    T,
    z
  ];
}
class op extends ht {
  constructor(t) {
    super(), _t(this, t, lp, rp, ft, {
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
function Ch(e, t, n) {
  const i = e.slice();
  return i[13] = t[n], i;
}
function Lh(e) {
  let t, n, i, l = (
    /*legend_entries*/
    e[13].legend_text + ""
  ), f, u, a, _, h;
  function d() {
    return (
      /*mouseover_handler*/
      e[9](
        /*legend_entries*/
        e[13]
      )
    );
  }
  function c(...g) {
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
      t = _e("p"), n = _e("span"), i = ve(), f = ze(l), u = ve(), y(
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
      j(g, t, w), X(t, n), X(t, i), X(t, f), X(t, u), _ || (h = [
        dt(t, "mouseover", d),
        dt(t, "click", c)
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
      g && Z(t), _ = !1, Zt(h);
    }
  };
}
function fp(e) {
  let t, n, i, l = ke(
    /*uniqueCombinations*/
    e[4]
  ), f = [];
  for (let u = 0; u < l.length; u += 1)
    f[u] = Lh(Ch(e, l, u));
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
      e[11](t), n || (i = dt(
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
          const h = Ch(u, l, _);
          f[_] ? f[_].p(h, a) : (f[_] = Lh(h), f[_].c(), f[_].m(t, null));
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
function up(e, t, n) {
  let i, l;
  wt(e, Ji, (x) => n(5, l = x));
  let { filtered_segments_df: f } = t, { label_height: u } = t, { space_between_label_and_ticks: a } = t, _, h = !1;
  function d(x) {
    _ && !_.contains(x.target) && (Ji.set(null), n(3, h = !1));
  }
  function c() {
    h || Ji.set(null);
  }
  function g(x, T) {
    T.stopPropagation(), Ji.set(x.legend_text), n(3, h = !0);
  }
  const w = (x) => {
    h || Ji.set(x.legend_text);
  }, p = (x, T) => g(x, T);
  function S(x) {
    st[x ? "unshift" : "push"](() => {
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
    4 && (_ && document.addEventListener("dblclick", d), bc(() => {
      document.removeEventListener("dblclick", d);
    }));
  }, [
    u,
    a,
    _,
    h,
    i,
    l,
    c,
    g,
    f,
    w,
    p,
    S
  ];
}
class ap extends ht {
  constructor(t) {
    super(), _t(this, t, up, fp, ft, {
      filtered_segments_df: 8,
      label_height: 0,
      space_between_label_and_ticks: 1
    });
  }
}
function Eh(e, t, n) {
  const i = e.slice();
  return i[21] = t[n], i[22] = t, i[23] = n, i;
}
function Rh(e, t, n) {
  const i = e.slice();
  return i[21] = t[n], i[24] = t, i[23] = n, i;
}
function Ih(e) {
  let t, n, i, l = ke(
    /*final_positions*/
    e[3]
  ), f = [];
  for (let _ = 0; _ < l.length; _ += 1)
    f[_] = Oh(Rh(e, l, _));
  let u = ke(
    /*final_positions*/
    e[3]
  ), a = [];
  for (let _ = 0; _ < u.length; _ += 1)
    a[_] = Dh(Eh(e, u, _));
  return {
    c() {
      t = Ce("svg");
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
    m(_, h) {
      j(_, t, h);
      for (let d = 0; d < f.length; d += 1)
        f[d] && f[d].m(t, null);
      j(_, n, h);
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(_, h);
      j(_, i, h);
    },
    p(_, h) {
      if (h & /*lineElements, final_positions*/
      40) {
        l = ke(
          /*final_positions*/
          _[3]
        );
        let d;
        for (d = 0; d < l.length; d += 1) {
          const c = Rh(_, l, d);
          f[d] ? f[d].p(c, h) : (f[d] = Oh(c), f[d].c(), f[d].m(t, null));
        }
        for (; d < f.length; d += 1)
          f[d].d(1);
        f.length = l.length;
      }
      if (h & /*width*/
      1 && v(
        t,
        "width",
        /*width*/
        _[0]
      ), h & /*height*/
      2 && v(
        t,
        "height",
        /*height*/
        _[1]
      ), h & /*final_positions, tooltipElements, handleMouseDown*/
      88) {
        u = ke(
          /*final_positions*/
          _[3]
        );
        let d;
        for (d = 0; d < u.length; d += 1) {
          const c = Eh(_, u, d);
          a[d] ? a[d].p(c, h) : (a[d] = Dh(c), a[d].c(), a[d].m(i.parentNode, i));
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
function Oh(e) {
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
      t = Ce("line"), v(t, "class", "line"), y(t, "stroke", "black"), y(t, "stroke-width", "1");
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
function Dh(e) {
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
  ), h = () => (
    /*div_binding*/
    e[17](null, f)
  );
  function d(...c) {
    return (
      /*mousedown_handler*/
      e[18](
        /*i*/
        e[23],
        ...c
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
    m(c, g) {
      j(c, t, g), n.m(i, t), X(t, l), _(), u || (a = dt(t, "mousedown", d), u = !0);
    },
    p(c, g) {
      e = c, g & /*final_positions*/
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
      e[23] && (h(), f = /*i*/
      e[23], _());
    },
    d(c) {
      c && Z(t), h(), u = !1, a();
    }
  };
}
function sp(e) {
  let t, n = (
    /*$hovered_legend*/
    e[2] && /*final_positions*/
    e[3] && Ih(e)
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
      i[3] ? n ? n.p(i, l) : (n = Ih(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Pe,
    o: Pe,
    d(i) {
      i && Z(t), n && n.d(i);
    }
  };
}
function _p(e) {
  let t = !0, n = e[0], i = n, l = n;
  for (let f = 1; f < e.length; f++) {
    let u = e[f], a = n;
    a.left + a.width > u.left ? (t ? (a = i || n, u.top = a.top + a.height + 1, i = u) : (a = l || n, u.top = a.top - u.height - 1, l = u), t = !t) : (n = u, i = u, l = u);
  }
  return e;
}
function hp(e, t) {
  const i = document.createElement("canvas").getContext("2d");
  return i.font = `${t}px Arial`, i.measureText(e).width;
}
function cp(e, t, n) {
  const i = document.createElement("div");
  i.style.position = "absolute", i.style.top = "0px", i.style.left = "0px", i.style.width = `${n}px`, i.style.fontSize = `${t}px`, i.style.lineHeight = "1.5", i.style.visibility = "hidden", i.style.whiteSpace = "normal", i.style.overflowWrap = "break-word", i.style.fontFamily = "Arial", i.style.padding = "2px", i.style.boxSizing = "border-box", i.style.border = "1px solid transparent", i.style.backgroundColor = "white", i.style.display = "flex", i.style.flexDirection = "column", i.style.alignItems = "start", i.style.height = "auto", i.innerHTML = e, document.body.appendChild(i);
  const l = i.scrollHeight;
  return document.body.removeChild(i), l;
}
function gp(e, t) {
  const n = t.initial_left, i = t.initial_top, l = t.left + t.dx, f = t.top + t.dy;
  e.setAttribute("x1", n), e.setAttribute("y1", i), e.setAttribute("x2", l), e.setAttribute("y2", f);
}
function dp(e, t, n) {
  let i;
  wt(e, Ji, (D) => n(2, i = D));
  let { y: l } = t, { filtered_segments_df: f } = t, { x_scale: u } = t, { y_scale: a } = t, { width: _ } = t, { height: h } = t, { line_generator_space: d } = t, { y_lines_spacing: c } = t, g = [], w, p, S;
  function x(D, ee) {
    return D.map((ce) => {
      let fe = ce.y_position ? a(ce.y_position) : a(l), re = u(ce.x_position), J = Math.min(Math.max(ce.x_end - ce.x_start, 100), ee);
      const B = hp(ce.tooltip, ce.font_size);
      B < J && (J = B);
      const A = cp(ce.tooltip, ce.font_size, J);
      let E = Math.max(A, 20);
      return {
        top: fe,
        left: re,
        width: J,
        height: E,
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
  function T(D, ee) {
    const W = C[ee], K = F[ee], se = p[ee], ce = D.clientX - se.dx, fe = D.clientY - se.dy;
    function re(B) {
      se.dx = B.clientX - ce, se.dy = B.clientY - fe, W.style.transform = `translate(${se.dx}px, ${se.dy}px)`, gp(K, se);
    }
    function J() {
      window.removeEventListener("mousemove", re), window.removeEventListener("mouseup", J);
    }
    window.addEventListener("mousemove", re), window.addEventListener("mouseup", J);
  }
  function z() {
    F.forEach((D) => {
      D && (D.setAttribute("x1", ""), D.setAttribute("y1", ""), D.setAttribute("x2", ""), D.setAttribute("y2", ""));
    });
  }
  let C = f.map(() => null), F = f.map(() => null);
  function R(D, ee) {
    st[D ? "unshift" : "push"](() => {
      F[ee] = D, n(5, F);
    });
  }
  function I(D, ee) {
    st[D ? "unshift" : "push"](() => {
      C[ee] = D, n(4, C);
    });
  }
  const G = (D, ee) => T(ee, D);
  return e.$$set = (D) => {
    "y" in D && n(7, l = D.y), "filtered_segments_df" in D && n(8, f = D.filtered_segments_df), "x_scale" in D && n(9, u = D.x_scale), "y_scale" in D && n(10, a = D.y_scale), "width" in D && n(0, _ = D.width), "height" in D && n(1, h = D.height), "line_generator_space" in D && n(11, d = D.line_generator_space), "y_lines_spacing" in D && n(12, c = D.y_lines_spacing);
  }, e.$$.update = () => {
    e.$$.dirty & /*filtered_segments_df, $hovered_legend*/
    260 && n(13, g = f.filter((D) => D.legend_text === i)), e.$$.dirty & /*filtered_segments_df_temp, width, y_lines_spacing, line_generator_space, tooltipPositions*/
    30721 && g.length > 0 && (n(14, w = x(g, _ - c - d * 4)), n(3, p = _p(w))), e.$$.dirty & /*$hovered_legend, previous_hovered_legend*/
    32772 && i !== S && (z(), n(15, S = i));
  }, [
    _,
    h,
    i,
    p,
    C,
    F,
    T,
    l,
    f,
    u,
    a,
    d,
    c,
    g,
    w,
    S,
    R,
    I,
    G
  ];
}
class mp extends ht {
  constructor(t) {
    super(), _t(this, t, dp, sp, ft, {
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
function yp(e) {
  let t, n, i;
  return {
    c() {
      t = Ce("rect"), v(
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
      ), v(t, "clip-path", `url(#${ha})`);
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
function bp(e) {
  let t;
  return {
    c() {
      t = Ce("line"), v(
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
      ), v(t, "clip-path", `url(#${ha})`);
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
function wp(e) {
  let t, n, i, l, f, u, a, _, h;
  function d(w, p) {
    return (
      /*type*/
      w[0] === "line" ? bp : yp
    );
  }
  let c = d(e), g = c(e);
  return {
    c() {
      t = Ce("defs"), n = Ce("clipPath"), i = Ce("rect"), _ = ve(), g.c(), h = Le(), v(i, "x", l = /*y_lines_spacing*/
      e[9] + /*line_generator_space*/
      e[6] * 1.5), v(i, "y", f = /*line_generator_space*/
      e[6] * 2), v(i, "width", u = /*width*/
      e[7] - /*line_generator_space*/
      e[6] * 7), v(i, "height", a = /*x_lines_spacing*/
      e[8] - /*line_generator_space*/
      e[6] * 2), v(n, "id", ha);
    },
    m(w, p) {
      j(w, t, p), X(t, n), X(n, i), j(w, _, p), g.m(w, p), j(w, h, p);
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
      w[6] * 2) && v(i, "height", a), c === (c = d(w)) && g ? g.p(w, p) : (g.d(1), g = c(w), g && (g.c(), g.m(h.parentNode, h)));
    },
    i: Pe,
    o: Pe,
    d(w) {
      w && (Z(t), Z(_), Z(h)), g.d(w);
    }
  };
}
let ha = "clip-path";
function pp(e, t, n) {
  let i, l, f, u, { type: a } = t, { outline_width: _ } = t, { opacity: h } = t, { outline_color: d } = t, { linetype: c } = t, { colors: g } = t, { line_generator_space: w } = t, { width: p } = t, { x_lines_spacing: S } = t, { y_lines_spacing: x } = t, { x1: T } = t, { x2: z } = t, { y1: C } = t, { y2: F } = t, { tweenOptions: R } = t, I = Ut(T, R == null ? void 0 : R.x1);
  wt(e, I, (W) => n(10, i = W));
  let G = Ut(C, R == null ? void 0 : R.y1);
  wt(e, G, (W) => n(12, f = W));
  let D = Ut(z, R == null ? void 0 : R.x2);
  wt(e, D, (W) => n(11, l = W));
  let ee = Ut(F, R == null ? void 0 : R.y2);
  return wt(e, ee, (W) => n(13, u = W)), e.$$set = (W) => {
    "type" in W && n(0, a = W.type), "outline_width" in W && n(1, _ = W.outline_width), "opacity" in W && n(2, h = W.opacity), "outline_color" in W && n(3, d = W.outline_color), "linetype" in W && n(4, c = W.linetype), "colors" in W && n(5, g = W.colors), "line_generator_space" in W && n(6, w = W.line_generator_space), "width" in W && n(7, p = W.width), "x_lines_spacing" in W && n(8, S = W.x_lines_spacing), "y_lines_spacing" in W && n(9, x = W.y_lines_spacing), "x1" in W && n(18, T = W.x1), "x2" in W && n(19, z = W.x2), "y1" in W && n(20, C = W.y1), "y2" in W && n(21, F = W.y2), "tweenOptions" in W && n(22, R = W.tweenOptions);
  }, e.$$.update = () => {
    e.$$.dirty & /*x1, tweenOptions*/
    4456448 && I.set(T, R == null ? void 0 : R.x1), e.$$.dirty & /*y1, tweenOptions*/
    5242880 && G.set(C, R == null ? void 0 : R.y1), e.$$.dirty & /*x2, tweenOptions*/
    4718592 && D.set(z, R == null ? void 0 : R.x2), e.$$.dirty & /*y2, tweenOptions*/
    6291456 && ee.set(F, R == null ? void 0 : R.y2);
  }, [
    a,
    _,
    h,
    d,
    c,
    g,
    w,
    p,
    S,
    x,
    i,
    l,
    f,
    u,
    I,
    G,
    D,
    ee,
    T,
    z,
    C,
    F,
    R
  ];
}
class vp extends ht {
  constructor(t) {
    super(), _t(this, t, pp, wp, ft, {
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
function Nh(e, t, n) {
  const i = e.slice();
  return i[5] = t[n], i;
}
function Uh(e, t, n) {
  const i = e.slice();
  return i[8] = t[n], i[10] = n, i;
}
function Ph(e, t) {
  let n, i = (
    /*line*/
    t[8] + ""
  ), l, f, u;
  return {
    key: e,
    first: null,
    c() {
      n = Ce("tspan"), l = ze(i), v(n, "x", f = /*x_scale*/
      t[1](
        /*annotation*/
        t[5].x
      )), v(n, "dy", u = /*index*/
      t[10] === 0 ? 0 : "1.2em"), this.first = n;
    },
    m(a, _) {
      j(a, n, _), X(n, l);
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
function Fh(e) {
  let t, n = [], i = /* @__PURE__ */ new Map(), l, f, u, a, _, h, d = ke(
    /*annotation*/
    e[5].text.split(`
`)
  );
  const c = (g) => (
    /*line*/
    g[8]
  );
  for (let g = 0; g < d.length; g += 1) {
    let w = Uh(e, d, g), p = c(w);
    i.set(p, n[g] = Ph(p, w));
  }
  return {
    c() {
      t = Ce("text");
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
      e[5].text_anchor || "start"), v(t, "style", h = /*annotation*/
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
      ), n = kn(n, w, c, 1, g, d, i, t, vc, Ph, null, Uh)), w & /*x_scale, annotations_df*/
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
      1 && h !== (h = /*annotation*/
      g[5].style || "") && v(t, "style", h);
    },
    d(g) {
      g && Z(t);
      for (let w = 0; w < n.length; w += 1)
        n[w].d();
    }
  };
}
function kp(e) {
  let t, n = ke(
    /*annotations_df*/
    e[0]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = Fh(Nh(e, n, l));
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
          const a = Nh(l, n, u);
          i[u] ? i[u].p(a, f) : (i[u] = Fh(a), i[u].c(), i[u].m(t.parentNode, t));
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
function xp(e, t, n) {
  let { annotations_df: i } = t, { x_scale: l } = t, { y_scale: f } = t, { type: u } = t, { time_interval: a } = t;
  return e.$$set = (_) => {
    "annotations_df" in _ && n(0, i = _.annotations_df), "x_scale" in _ && n(1, l = _.x_scale), "y_scale" in _ && n(2, f = _.y_scale), "type" in _ && n(3, u = _.type), "time_interval" in _ && n(4, a = _.time_interval);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*type, annotations_df, time_interval*/
    25 && u === "timeseries")
      for (let _ = 0; _ < i.length; _++)
        n(0, i[_].x = Fr(a)(i[_].x), i), n(0, i[_].x = new Date(i[_].x), i);
  }, [i, l, f, u, a];
}
class Mp extends ht {
  constructor(t) {
    super(), _t(this, t, xp, kp, ft, {
      annotations_df: 0,
      x_scale: 1,
      y_scale: 2,
      type: 3,
      time_interval: 4
    });
  }
}
function Wh(e, t, n) {
  const i = e.slice();
  return i[5] = t[n], i;
}
function Bh(e) {
  let t, n, i, l;
  return {
    c() {
      t = Ce("path"), v(t, "d", n = wh(
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
      7 && n !== (n = wh(
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
function Tp(e) {
  let t, n = ke(
    /*arrows_df*/
    e[0]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = Bh(Wh(e, n, l));
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
          const a = Wh(l, n, u);
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
function Sp(e, t, n) {
  let { arrows_df: i } = t, { x_scale: l } = t, { y_scale: f } = t, { type: u } = t, { time_interval: a } = t;
  return e.$$set = (_) => {
    "arrows_df" in _ && n(0, i = _.arrows_df), "x_scale" in _ && n(1, l = _.x_scale), "y_scale" in _ && n(2, f = _.y_scale), "type" in _ && n(3, u = _.type), "time_interval" in _ && n(4, a = _.time_interval);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*type, arrows_df, time_interval*/
    25 && u === "timeseries")
      for (let _ = 0; _ < i.length; _++)
        n(0, i[_].x_start = Fr(a)(i[_].x_start), i), n(0, i[_].x_start = new Date(i[_].x_start), i), n(0, i[_].x_end = Fr(a)(i[_].x_end), i), n(0, i[_].x_end = new Date(i[_].x_end), i);
    e.$$.dirty & /*arrows_df*/
    1 && console.log("arrows_df inside", i);
  }, [i, l, f, u, a];
}
class zp extends ht {
  constructor(t) {
    super(), _t(this, t, Sp, Tp, ft, {
      arrows_df: 0,
      x_scale: 1,
      y_scale: 2,
      type: 3,
      time_interval: 4
    });
  }
}
function Ap(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ca = Ap, Cp = typeof vi == "object" && vi && vi.Object === Object && vi, Lp = Cp, Ep = Lp, Rp = typeof self == "object" && self && self.Object === Object && self, Ip = Ep || Rp || Function("return this")(), n0 = Ip, Op = n0, Dp = function() {
  return Op.Date.now();
}, Np = Dp, Up = /\s/;
function Pp(e) {
  for (var t = e.length; t-- && Up.test(e.charAt(t)); )
    ;
  return t;
}
var Fp = Pp, Wp = Fp, Bp = /^\s+/;
function Hp(e) {
  return e && e.slice(0, Wp(e) + 1).replace(Bp, "");
}
var Yp = Hp, Xp = n0, qp = Xp.Symbol, i0 = qp, Hh = i0, r0 = Object.prototype, Gp = r0.hasOwnProperty, Zp = r0.toString, ml = Hh ? Hh.toStringTag : void 0;
function jp(e) {
  var t = Gp.call(e, ml), n = e[ml];
  try {
    e[ml] = void 0;
    var i = !0;
  } catch {
  }
  var l = Zp.call(e);
  return i && (t ? e[ml] = n : delete e[ml]), l;
}
var Kp = jp, Jp = Object.prototype, Qp = Jp.toString;
function Vp(e) {
  return Qp.call(e);
}
var $p = Vp, Yh = i0, e4 = Kp, t4 = $p, n4 = "[object Null]", i4 = "[object Undefined]", Xh = Yh ? Yh.toStringTag : void 0;
function r4(e) {
  return e == null ? e === void 0 ? i4 : n4 : Xh && Xh in Object(e) ? e4(e) : t4(e);
}
var l4 = r4;
function o4(e) {
  return e != null && typeof e == "object";
}
var f4 = o4, u4 = l4, a4 = f4, s4 = "[object Symbol]";
function _4(e) {
  return typeof e == "symbol" || a4(e) && u4(e) == s4;
}
var h4 = _4, c4 = Yp, qh = ca, g4 = h4, Gh = 0 / 0, d4 = /^[-+]0x[0-9a-f]+$/i, m4 = /^0b[01]+$/i, y4 = /^0o[0-7]+$/i, b4 = parseInt;
function w4(e) {
  if (typeof e == "number")
    return e;
  if (g4(e))
    return Gh;
  if (qh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = qh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = c4(e);
  var n = m4.test(e);
  return n || y4.test(e) ? b4(e.slice(2), n ? 2 : 8) : d4.test(e) ? Gh : +e;
}
var p4 = w4, v4 = ca, zu = Np, Zh = p4, k4 = "Expected a function", x4 = Math.max, M4 = Math.min;
function T4(e, t, n) {
  var i, l, f, u, a, _, h = 0, d = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(k4);
  t = Zh(t) || 0, v4(n) && (d = !!n.leading, c = "maxWait" in n, f = c ? x4(Zh(n.maxWait) || 0, t) : f, g = "trailing" in n ? !!n.trailing : g);
  function w(I) {
    var G = i, D = l;
    return i = l = void 0, h = I, u = e.apply(D, G), u;
  }
  function p(I) {
    return h = I, a = setTimeout(T, t), d ? w(I) : u;
  }
  function S(I) {
    var G = I - _, D = I - h, ee = t - G;
    return c ? M4(ee, f - D) : ee;
  }
  function x(I) {
    var G = I - _, D = I - h;
    return _ === void 0 || G >= t || G < 0 || c && D >= f;
  }
  function T() {
    var I = zu();
    if (x(I))
      return z(I);
    a = setTimeout(T, S(I));
  }
  function z(I) {
    return a = void 0, g && i ? w(I) : (i = l = void 0, u);
  }
  function C() {
    a !== void 0 && clearTimeout(a), h = 0, i = _ = l = a = void 0;
  }
  function F() {
    return a === void 0 ? u : z(zu());
  }
  function R() {
    var I = zu(), G = x(I);
    if (i = arguments, l = this, _ = I, G) {
      if (a === void 0)
        return p(_);
      if (c)
        return clearTimeout(a), a = setTimeout(T, t), w(_);
    }
    return a === void 0 && (a = setTimeout(T, t)), u;
  }
  return R.cancel = C, R.flush = F, R;
}
var S4 = T4, z4 = S4, A4 = ca, C4 = "Expected a function";
function L4(e, t, n) {
  var i = !0, l = !0;
  if (typeof e != "function")
    throw new TypeError(C4);
  return A4(n) && (i = "leading" in n ? !!n.leading : i, l = "trailing" in n ? !!n.trailing : l), z4(e, t, {
    leading: i,
    maxWait: t,
    trailing: l
  });
}
var E4 = L4;
const l0 = /* @__PURE__ */ Vc(E4);
function R4(e) {
  let t, n, i;
  return {
    c() {
      t = Ce("rect"), v(t, "fill", "rgba(0, 0, 0, 0)"), v(
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
        dt(
          t,
          "mousemove",
          /*handleMousemove*/
          e[6]
        ),
        dt(
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
      l && Z(t), n = !1, Zt(i);
    }
  };
}
function I4(e, t, n) {
  let i, l, { x_scale: f } = t, { y_scale: u } = t, { tooltip2_array_values: a } = t, { height: _ } = t, { width: h } = t, { m: d } = t, { margin: c } = t, { filtered_data: g } = t, { type: w } = t, { tooltip: p } = t, { listener: S } = t, { buffer: x } = t, { time_series_interval: T } = t, { chart: z } = t, { labelPositions: C } = t, { nextLabelX: F } = t, { closestLabelX: R } = t;
  const I = l0(G, 10);
  function G(W) {
    if (n(7, d.x = W.offsetX, d), n(7, d.y = W.offsetY, d), z === "XYChart")
      n(0, a = Iw(g, f, u, w, p, d.x, d.y, T)), n(0, a = a.filter((K) => K.data && K.data.y !== void 0));
    else if (z === "bar") {
      let K = f.domain(), se = e0("bar", C, f, K, d.x);
      n(3, R = C[se]), n(2, F = C[se + 1] || f.range()[1]), n(0, a = g.filter((ce) => ce.x === K[se]));
    }
  }
  function D(W) {
    I(W);
  }
  const ee = () => {
    n(0, a = void 0), n(1, S = !1), n(3, R = 0), n(2, F = 0);
  };
  return e.$$set = (W) => {
    "x_scale" in W && n(8, f = W.x_scale), "y_scale" in W && n(9, u = W.y_scale), "tooltip2_array_values" in W && n(0, a = W.tooltip2_array_values), "height" in W && n(10, _ = W.height), "width" in W && n(11, h = W.width), "m" in W && n(7, d = W.m), "margin" in W && n(12, c = W.margin), "filtered_data" in W && n(13, g = W.filtered_data), "type" in W && n(14, w = W.type), "tooltip" in W && n(15, p = W.tooltip), "listener" in W && n(1, S = W.listener), "buffer" in W && n(16, x = W.buffer), "time_series_interval" in W && n(17, T = W.time_series_interval), "chart" in W && n(18, z = W.chart), "labelPositions" in W && n(19, C = W.labelPositions), "nextLabelX" in W && n(2, F = W.nextLabelX), "closestLabelX" in W && n(3, R = W.closestLabelX);
  }, e.$$.update = () => {
    e.$$.dirty & /*height, margin, buffer*/
    70656 && n(5, i = _ - c - x), e.$$.dirty & /*width, margin, buffer*/
    71680 && n(4, l = h - c - x);
  }, [
    a,
    S,
    F,
    R,
    l,
    i,
    D,
    d,
    f,
    u,
    _,
    h,
    c,
    g,
    w,
    p,
    x,
    T,
    z,
    C,
    ee
  ];
}
class o0 extends ht {
  constructor(t) {
    super(), _t(this, t, I4, R4, ft, {
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
function O4(e) {
  let t, n, i;
  return {
    c() {
      t = Ce("rect"), v(t, "fill", "rgba(0, 0, 0, 0)"), v(
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
        dt(
          t,
          "mousemove",
          /*handleMousemove*/
          e[4]
        ),
        dt(
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
      l && Z(t), n = !1, Zt(i);
    }
  };
}
function D4(e, t, n) {
  let i, l, { height: f } = t, { width: u } = t, { m: a } = t, { margin: _ } = t, { listener: h } = t, { tooltip2_array_values: d } = t, { filtered_data: c } = t, { x_scale: g } = t, { y_scale: w } = t, { buffer: p } = t;
  const S = l0(x, 10);
  function x(C) {
    n(5, a.x = C.offsetX, a), n(5, a.y = C.offsetY, a), n(0, h = !0), n(1, d = c.filter((I) => I.tooltip === !0));
    let [F, R] = Cw(d, g, a.x, w, a.y);
    n(1, d = {
      ...d[F],
      data: d[F].data[R]
    });
  }
  function T(C) {
    S(C);
  }
  const z = () => {
    n(0, h = !1), n(1, d = void 0);
  };
  return e.$$set = (C) => {
    "height" in C && n(6, f = C.height), "width" in C && n(7, u = C.width), "m" in C && n(5, a = C.m), "margin" in C && n(8, _ = C.margin), "listener" in C && n(0, h = C.listener), "tooltip2_array_values" in C && n(1, d = C.tooltip2_array_values), "filtered_data" in C && n(9, c = C.filtered_data), "x_scale" in C && n(10, g = C.x_scale), "y_scale" in C && n(11, w = C.y_scale), "buffer" in C && n(12, p = C.buffer);
  }, e.$$.update = () => {
    e.$$.dirty & /*height, margin, buffer*/
    4416 && n(3, i = f - _ - p), e.$$.dirty & /*width, margin, buffer*/
    4480 && n(2, l = u - _ - p);
  }, [
    h,
    d,
    l,
    i,
    T,
    a,
    f,
    u,
    _,
    c,
    g,
    w,
    p,
    z
  ];
}
class N4 extends ht {
  constructor(t) {
    super(), _t(this, t, D4, O4, ft, {
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
function U4(e) {
  let t, n, i, l, f, u, a, _, h, d, c;
  return {
    c() {
      t = Ce("line"), f = ve(), u = Ce("text"), a = ze(
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
      j(g, t, w), j(g, f, w), j(g, u, w), X(u, a), c = !0;
    },
    p(g, [w]) {
      e = g, (!c || w & /*y_lines_spacing*/
      32) && v(
        t,
        "x1",
        /*y_lines_spacing*/
        e[5]
      ), (!c || w & /*width, line_generator_space*/
      130 && n !== (n = /*width*/
      e[1] - /*line_generator_space*/
      e[7])) && v(t, "x2", n), (!c || w & /*$tweened_y1*/
      256) && v(
        t,
        "y1",
        /*$tweened_y1*/
        e[8]
      ), (!c || w & /*$tweened_y1*/
      256) && v(
        t,
        "y2",
        /*$tweened_y1*/
        e[8]
      ), (!c || w & /*ticklabel*/
      8) && Oe(
        a,
        /*ticklabel*/
        e[3]
      ), (!c || w & /*$tweened_y1*/
      256) && v(
        u,
        "y",
        /*$tweened_y1*/
        e[8]
      ), (!c || w & /*y_lines_spacing, space_between_ticks_and_gridline*/
      96 && _ !== (_ = /*y_lines_spacing*/
      e[5] - /*space_between_ticks_and_gridline*/
      e[6])) && v(u, "x", _), (!c || w & /*font_size_yticks*/
      16) && y(
        u,
        "font-size",
        /*font_size_yticks*/
        e[4] + "px"
      );
    },
    i(g) {
      c || (g && it(() => {
        c && (l && l.end(1), i = Fi(t, pn, { duration: 500, easing: Cl }), i.start());
      }), g && it(() => {
        c && (d && d.end(1), h = Fi(u, pn, { duration: 1e3, easing: Cl }), h.start());
      }), c = !0);
    },
    o(g) {
      i && i.invalidate(), g && (l = Ml(t, Gt, {
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
        easing: Jo
      })), h && h.invalidate(), g && (d = Ml(u, Gt, {
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
        easing: Jo
      })), c = !1;
    },
    d(g) {
      g && (Z(t), Z(f), Z(u)), g && l && l.end(), g && d && d.end();
    }
  };
}
function P4(e, t, n) {
  let i, { tweenOptions: l } = t, { height: f } = t, { width: u } = t, { y1: a } = t, { ticklabel: _ } = t, { font_size_yticks: h } = t, { y_lines_spacing: d } = t, { space_between_ticks_and_gridline: c } = t, { line_generator_space: g } = t, w = Ut(a, l == null ? void 0 : l.y1);
  return wt(e, w, (p) => n(8, i = p)), e.$$set = (p) => {
    "tweenOptions" in p && n(10, l = p.tweenOptions), "height" in p && n(0, f = p.height), "width" in p && n(1, u = p.width), "y1" in p && n(2, a = p.y1), "ticklabel" in p && n(3, _ = p.ticklabel), "font_size_yticks" in p && n(4, h = p.font_size_yticks), "y_lines_spacing" in p && n(5, d = p.y_lines_spacing), "space_between_ticks_and_gridline" in p && n(6, c = p.space_between_ticks_and_gridline), "line_generator_space" in p && n(7, g = p.line_generator_space);
  }, e.$$.update = () => {
    e.$$.dirty & /*y1, tweenOptions*/
    1028 && Rl().then(() => {
      w.set(a, l == null ? void 0 : l.y1);
    });
  }, [
    f,
    u,
    a,
    _,
    h,
    d,
    c,
    g,
    i,
    w,
    l
  ];
}
class ga extends ht {
  constructor(t) {
    super(), _t(this, t, P4, U4, ft, {
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
function F4(e) {
  let t, n, i, l, f, u, a, _, h, d;
  return {
    c() {
      t = Ce("line"), l = ve(), f = Ce("text"), u = ze(
        /*ticklabel*/
        e[1]
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
        e[9]
      ), v(
        t,
        "y2",
        /*line_generator_space*/
        e[11]
      ), v(t, "stroke", "#ededed"), v(f, "transform", a = `rotate(${-/*rotation_xaxis*/
      e[4]} ${/*$tweened_x1*/
      e[12]} ${/*x_ticks_spacing*/
      e[10]})`), v(
        f,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[7]
      ), v(
        f,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[8]
      ), v(
        f,
        "x",
        /*$tweened_x1*/
        e[12]
      ), v(
        f,
        "y",
        /*x_ticks_spacing*/
        e[10]
      ), y(
        f,
        "font-size",
        /*font_size_xticks*/
        e[2] + "px"
      ), y(f, "font-family", "Arial, sans-serif"), v(
        f,
        "dy",
        /*dy*/
        e[6]
      ), v(
        f,
        "dx",
        /*dx*/
        e[5]
      );
    },
    m(c, g) {
      j(c, t, g), j(c, l, g), j(c, f, g), X(f, u), d = !0;
    },
    p(c, [g]) {
      e = c, (!d || g & /*$tweened_x1*/
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
      512) && v(
        t,
        "y1",
        /*x_lines_spacing*/
        e[9]
      ), (!d || g & /*line_generator_space*/
      2048) && v(
        t,
        "y2",
        /*line_generator_space*/
        e[11]
      ), (!d || g & /*ticklabel*/
      2) && Oe(
        u,
        /*ticklabel*/
        e[1]
      ), (!d || g & /*rotation_xaxis, $tweened_x1, x_ticks_spacing*/
      5136 && a !== (a = `rotate(${-/*rotation_xaxis*/
      e[4]} ${/*$tweened_x1*/
      e[12]} ${/*x_ticks_spacing*/
      e[10]})`)) && v(f, "transform", a), (!d || g & /*text_anchor_x_axis*/
      128) && v(
        f,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[7]
      ), (!d || g & /*dominant_baseline_x_axis*/
      256) && v(
        f,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[8]
      ), (!d || g & /*$tweened_x1*/
      4096) && v(
        f,
        "x",
        /*$tweened_x1*/
        e[12]
      ), (!d || g & /*x_ticks_spacing*/
      1024) && v(
        f,
        "y",
        /*x_ticks_spacing*/
        e[10]
      ), (!d || g & /*font_size_xticks*/
      4) && y(
        f,
        "font-size",
        /*font_size_xticks*/
        e[2] + "px"
      ), (!d || g & /*dy*/
      64) && v(
        f,
        "dy",
        /*dy*/
        e[6]
      ), (!d || g & /*dx*/
      32) && v(
        f,
        "dx",
        /*dx*/
        e[5]
      );
    },
    i(c) {
      d || (c && it(() => {
        d && (i && i.end(1), n = Fi(t, pn, { duration: 500, easing: Cl }), n.start());
      }), c && it(() => {
        d && (h && h.end(1), _ = Fi(f, pn, { duration: 1e3, easing: Cl }), _.start());
      }), d = !0);
    },
    o(c) {
      n && n.invalidate(), c && (i = Ml(t, Gt, {
        duration: 2e3,
        x: (
          /*x1*/
          e[0] < /*width*/
          e[3] / 2 ? -/*width*/
          e[3] : (
            /*width*/
            e[3]
          )
        ),
        y: 0,
        easing: Jo
      })), _ && _.invalidate(), c && (h = Ml(f, Gt, {
        duration: 2e3,
        x: (
          /*x1*/
          e[0] < /*width*/
          e[3] / 2 ? -/*width*/
          e[3] : (
            /*width*/
            e[3]
          )
        ),
        y: 0,
        easing: Jo
      })), d = !1;
    },
    d(c) {
      c && (Z(t), Z(l), Z(f)), c && i && i.end(), c && h && h.end();
    }
  };
}
function W4(e, t, n) {
  let i, { tweenOptions: l } = t, { x1: f } = t, { ticklabel: u } = t, { font_size_xticks: a } = t, { width: _ } = t, { rotation_xaxis: h } = t, { dx: d } = t, { dy: c } = t, { text_anchor_x_axis: g } = t, { dominant_baseline_x_axis: w } = t, { x_lines_spacing: p } = t, { x_ticks_spacing: S } = t, { line_generator_space: x } = t, T = Ut(f, l == null ? void 0 : l.x1);
  return wt(e, T, (z) => n(12, i = z)), e.$$set = (z) => {
    "tweenOptions" in z && n(14, l = z.tweenOptions), "x1" in z && n(0, f = z.x1), "ticklabel" in z && n(1, u = z.ticklabel), "font_size_xticks" in z && n(2, a = z.font_size_xticks), "width" in z && n(3, _ = z.width), "rotation_xaxis" in z && n(4, h = z.rotation_xaxis), "dx" in z && n(5, d = z.dx), "dy" in z && n(6, c = z.dy), "text_anchor_x_axis" in z && n(7, g = z.text_anchor_x_axis), "dominant_baseline_x_axis" in z && n(8, w = z.dominant_baseline_x_axis), "x_lines_spacing" in z && n(9, p = z.x_lines_spacing), "x_ticks_spacing" in z && n(10, S = z.x_ticks_spacing), "line_generator_space" in z && n(11, x = z.line_generator_space);
  }, e.$$.update = () => {
    e.$$.dirty & /*x1, tweenOptions*/
    16385 && Rl().then(() => {
      T.set(f, l == null ? void 0 : l.x1);
    });
  }, [
    f,
    u,
    a,
    _,
    h,
    d,
    c,
    g,
    w,
    p,
    S,
    x,
    i,
    T,
    l
  ];
}
class f0 extends ht {
  constructor(t) {
    super(), _t(this, t, W4, F4, ft, {
      tweenOptions: 14,
      x1: 0,
      ticklabel: 1,
      font_size_xticks: 2,
      width: 3,
      rotation_xaxis: 4,
      dx: 5,
      dy: 6,
      text_anchor_x_axis: 7,
      dominant_baseline_x_axis: 8,
      x_lines_spacing: 9,
      x_ticks_spacing: 10,
      line_generator_space: 11
    });
  }
}
function B4(e) {
  let t, n, i;
  return {
    c() {
      t = Ce("text"), n = ze(
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
      j(l, t, f), X(t, n);
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
function H4(e, t, n) {
  let i, { tweenOptions: l } = t, { axis_title_position: f } = t, { font_size_yaxis: u } = t, { label_height: a } = t, { y_label: _ } = t, h = Ut(f, l == null ? void 0 : l.axis_title_position);
  return wt(e, h, (d) => n(3, i = d)), e.$$set = (d) => {
    "tweenOptions" in d && n(5, l = d.tweenOptions), "axis_title_position" in d && n(6, f = d.axis_title_position), "font_size_yaxis" in d && n(0, u = d.font_size_yaxis), "label_height" in d && n(1, a = d.label_height), "y_label" in d && n(2, _ = d.y_label);
  }, e.$$.update = () => {
    e.$$.dirty & /*axis_title_position, tweenOptions*/
    96 && h.set(f, l == null ? void 0 : l.axis_title_position);
  }, [
    u,
    a,
    _,
    i,
    h,
    l,
    f
  ];
}
class u0 extends ht {
  constructor(t) {
    super(), _t(this, t, H4, B4, ft, {
      tweenOptions: 5,
      axis_title_position: 6,
      font_size_yaxis: 0,
      label_height: 1,
      y_label: 2
    });
  }
}
function Y4(e) {
  let t, n, i;
  return {
    c() {
      t = Ce("text"), n = ze(
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
      j(l, t, f), X(t, n);
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
function X4(e, t, n) {
  let i, { tweenOptions: l } = t, { axis_title_position: f } = t, { font_size_xaxis: u } = t, { height: a } = t, { label_height_x_axis: _ } = t, { x_label: h } = t, d = Ut(f, l == null ? void 0 : l.axis_title_position);
  return wt(e, d, (c) => n(4, i = c)), e.$$set = (c) => {
    "tweenOptions" in c && n(6, l = c.tweenOptions), "axis_title_position" in c && n(7, f = c.axis_title_position), "font_size_xaxis" in c && n(0, u = c.font_size_xaxis), "height" in c && n(1, a = c.height), "label_height_x_axis" in c && n(2, _ = c.label_height_x_axis), "x_label" in c && n(3, h = c.x_label);
  }, e.$$.update = () => {
    e.$$.dirty & /*axis_title_position, tweenOptions*/
    192 && d.set(f, l == null ? void 0 : l.axis_title_position);
  }, [
    u,
    a,
    _,
    h,
    i,
    d,
    l,
    f
  ];
}
class a0 extends ht {
  constructor(t) {
    super(), _t(this, t, X4, Y4, ft, {
      tweenOptions: 6,
      axis_title_position: 7,
      font_size_xaxis: 0,
      height: 1,
      label_height_x_axis: 2,
      x_label: 3
    });
  }
}
function q4(e, { from: t, to: n }, i = {}) {
  const l = getComputedStyle(e), f = l.transform === "none" ? "" : l.transform, [u, a] = l.transformOrigin.split(" ").map(parseFloat), _ = t.left + t.width * u / n.width - (n.left + u), h = t.top + t.height * a / n.height - (n.top + a), { delay: d = 0, duration: c = (w) => Math.sqrt(w) * 120, easing: g = $c } = i;
  return {
    delay: d,
    duration: Yr(c) ? c(Math.sqrt(_ * _ + h * h)) : c,
    easing: g,
    css: (w, p) => {
      const S = p * _, x = p * h, T = w + p * t.width / n.width, z = w + p * t.height / n.height;
      return `transform: ${f} translate(${S}px, ${x}px) scale(${T}, ${z});`;
    }
  };
}
function jh(e, t, n) {
  const i = e.slice();
  return i[33] = t[n], i;
}
function Kh(e, t, n) {
  const i = e.slice();
  return i[36] = t[n][0], i[37] = t[n][1], i;
}
function Jh(e) {
  let t, n, i, l, f, u, a, _ = [], h = /* @__PURE__ */ new Map(), d, c, g, w = ke(
    /*tooltip2_array_values*/
    e[0]
  );
  const p = (S) => (
    /*line*/
    S[33].id
  );
  for (let S = 0; S < w.length; S += 1) {
    let x = jh(e, w, S), T = p(x);
    h.set(T, _[S] = Vh(T, x));
  }
  return {
    c() {
      t = _e("div"), n = _e("div"), i = ve(), l = _e("h6"), f = ze(
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
      j(S, t, x), X(t, n), X(t, i), X(t, l), X(l, f), X(t, u), X(t, a);
      for (let T = 0; T < _.length; T += 1)
        _[T] && _[T].m(a, null);
      d = nr(
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
        for (let T = 0; T < _.length; T += 1)
          _[T].r();
        _ = kn(_, x, p, 1, e, w, h, a, L6, Vh, null, jh);
        for (let T = 0; T < _.length; T += 1)
          _[T].a();
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
        g && (c || (c = Pt(
          t,
          Gt,
          /*animationParamsTooltip*/
          e[13],
          !0
        )), c.run(1));
      }), g = !0);
    },
    o(S) {
      c || (c = Pt(
        t,
        Gt,
        /*animationParamsTooltip*/
        e[13],
        !1
      )), c.run(0), g = !1;
    },
    d(S) {
      S && Z(t);
      for (let x = 0; x < _.length; x += 1)
        _[x].d();
      d(), S && c && c.end();
    }
  };
}
function G4(e) {
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
function Z4(e) {
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
function Qh(e) {
  let t, n = (
    /*key*/
    e[36] + ""
  ), i, l, f, u = (
    /*value*/
    e[37] + ""
  ), a;
  return {
    c() {
      t = _e("div"), i = ze(n), l = ze(":  "), f = _e("strong"), a = ze(u), y(t, "display", "flex"), y(
        t,
        "justify-content",
        /*justify_content_tooltip*/
        e[5]
      );
    },
    m(_, h) {
      j(_, t, h), X(t, i), X(t, l), X(t, f), X(f, a);
    },
    p(_, h) {
      h[0] & /*tooltip2_array_values*/
      1 && n !== (n = /*key*/
      _[36] + "") && Oe(i, n), h[0] & /*tooltip2_array_values*/
      1 && u !== (u = /*value*/
      _[37] + "") && Oe(a, u), h[0] & /*justify_content_tooltip*/
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
function Vh(e, t) {
  let n, i, l, f, u, a = (
    /*line*/
    t[33].id + ""
  ), _, h, d, c, g = Pe;
  function w(z, C) {
    if (
      /*line*/
      z[33].type === "points"
    )
      return Z4;
    if (
      /*line*/
      z[33].type === "line"
    )
      return G4;
  }
  let p = w(t), S = p && p(t), x = ke(Object.entries(
    /*line*/
    t[33].data.custom_tooltip[0]
  )), T = [];
  for (let z = 0; z < x.length; z += 1)
    T[z] = Qh(Kh(t, x, z));
  return {
    key: e,
    first: null,
    c() {
      n = _e("div"), i = _e("div"), l = _e("div"), S && S.c(), f = ve(), u = _e("span"), _ = ze(a), h = ve();
      for (let z = 0; z < T.length; z += 1)
        T[z].c();
      d = ve(), y(l, "width", "18px"), y(l, "display", "flex"), y(l, "align-items", "center"), y(l, "justify-content", "center"), y(i, "display", "flex"), y(i, "align-items", "center"), this.first = n;
    },
    m(z, C) {
      j(z, n, C), X(n, i), X(i, l), S && S.m(l, null), X(i, f), X(i, u), X(u, _), X(n, h);
      for (let F = 0; F < T.length; F += 1)
        T[F] && T[F].m(n, null);
      X(n, d);
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
        let F;
        for (F = 0; F < x.length; F += 1) {
          const R = Kh(t, x, F);
          T[F] ? T[F].p(R, C) : (T[F] = Qh(R), T[F].c(), T[F].m(n, d));
        }
        for (; F < T.length; F += 1)
          T[F].d(1);
        T.length = x.length;
      }
    },
    r() {
      c = n.getBoundingClientRect();
    },
    f() {
      S6(n), g();
    },
    a() {
      g(), g = T6(
        n,
        c,
        q4,
        /*animationParamsList*/
        t[14]
      );
    },
    d(z) {
      z && Z(n), S && S.d(), xn(T, z);
    }
  };
}
function j4(e) {
  let t, n, i = (
    /*tooltip2_array_values*/
    e[0] && /*tooltip2_array_values*/
    e[0].length > 0 && Jh(e)
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
      1 && te(i, 1)) : (i = Jh(l), i.c(), te(i, 1), i.m(t.parentNode, t)) : i && (We(), ue(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(l) {
      n || (te(i), n = !0);
    },
    o(l) {
      ue(i), n = !1;
    },
    d(l) {
      l && Z(t), i && i.d(l);
    }
  };
}
const $h = 20, Au = 100;
function K4(e, t, n) {
  let i, l, f, u, a, { x_scale: _ } = t, { y_scale: h } = t, { m_y: d } = t, { tooltip2_array_values: c } = t, { format_tooltip: g } = t, { height: w } = t, { width: p } = t, { interval: S } = t, { type: x } = t, { background_color_tt: T } = t, { opacity_tt: z } = t, { animation_params_list: C } = t, { padding_tooltip: F } = t, { font_size_tooltip: R } = t, { justify_content_tooltip: I } = t, { text_color_tooltip: G } = t, { border_color_tooltip: D } = t, { show_delay_tooltip: ee } = t, { border_style_tooltip: W } = t, { border_width_tooltip: K } = t, { tooltip_position: se } = t, ce, fe, re, J, B;
  function A() {
    re = this.clientWidth, J = this.clientHeight, n(10, re), n(11, J);
  }
  return e.$$set = (E) => {
    "x_scale" in E && n(19, _ = E.x_scale), "y_scale" in E && n(20, h = E.y_scale), "m_y" in E && n(21, d = E.m_y), "tooltip2_array_values" in E && n(0, c = E.tooltip2_array_values), "format_tooltip" in E && n(22, g = E.format_tooltip), "height" in E && n(23, w = E.height), "width" in E && n(24, p = E.width), "interval" in E && n(25, S = E.interval), "type" in E && n(26, x = E.type), "background_color_tt" in E && n(1, T = E.background_color_tt), "opacity_tt" in E && n(2, z = E.opacity_tt), "animation_params_list" in E && n(27, C = E.animation_params_list), "padding_tooltip" in E && n(3, F = E.padding_tooltip), "font_size_tooltip" in E && n(4, R = E.font_size_tooltip), "justify_content_tooltip" in E && n(5, I = E.justify_content_tooltip), "text_color_tooltip" in E && n(6, G = E.text_color_tooltip), "border_color_tooltip" in E && n(7, D = E.border_color_tooltip), "show_delay_tooltip" in E && n(17, ee = E.show_delay_tooltip), "border_style_tooltip" in E && n(8, W = E.border_style_tooltip), "border_width_tooltip" in E && n(9, K = E.border_width_tooltip), "tooltip_position" in E && n(18, se = E.tooltip_position);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*background_color_tt*/
    2 && n(1, T = T || "white"), e.$$.dirty[0] & /*opacity_tt*/
    4 && n(2, z = z || "0.8"), e.$$.dirty[0] & /*padding_tooltip*/
    8 && n(3, F = F || 5), e.$$.dirty[0] & /*justify_content_tooltip*/
    32 && n(5, I = I || "space-between"), e.$$.dirty[0] & /*font_size_tooltip*/
    16 && n(4, R = R || 14), e.$$.dirty[0] & /*text_color_tooltip*/
    64 && n(6, G = G || "black"), e.$$.dirty[0] & /*border_color_tooltip, background_color_tt*/
    130 && n(7, D = D || T), e.$$.dirty[0] & /*show_delay_tooltip*/
    131072 && n(17, ee = ee || 0), e.$$.dirty[0] & /*border_style_tooltip*/
    256 && n(8, W = W || "solid"), e.$$.dirty[0] & /*border_width_tooltip*/
    512 && n(9, K = K || 0), e.$$.dirty[0] & /*tooltip_position*/
    262144 && n(18, se = se || null), e.$$.dirty[0] & /*tooltip2_array_values, type, maxYValue*/
    1140850689 && (n(30, B = Math.max(...c.map((E) => E.data.y))), n(0, c = c.map((E) => ({
      ...E,
      shape: x === "scatter" ? "point" : "line"
    })).sort((E, de) => de.data.y - E.data.y || de.data.y - B))), e.$$.dirty[0] & /*tooltip_position, height, x_scale, tooltip2_array_values, m_y*/
    11272193 && (se ? se === "top" && (n(28, ce = 0), n(29, fe = w)) : (n(28, ce = _(c[0].data.x)), n(29, fe = d))), e.$$.dirty[0] & /*x, tooltipWidth, width*/
    285213696 && n(16, i = ce + re > p ? ce - re - $h : ce + $h), e.$$.dirty[0] & /*y, tooltipHeight, height*/
    545261568 && n(15, l = fe - J < 0 ? fe - Au : fe + J > w ? fe - J - Au : fe + Au), e.$$.dirty[0] & /*format_tooltip*/
    4194304 && hn(g), e.$$.dirty[0] & /*animation_params_list*/
    134217728 && n(14, f = C), e.$$.dirty[0] & /*show_delay_tooltip*/
    131072 && n(13, u = { delay: ee }), e.$$.dirty[0] & /*interval, type, tooltip2_array_values*/
    100663297 && n(12, a = t0(S, x, c));
  }, [
    c,
    T,
    z,
    F,
    R,
    I,
    G,
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
    ee,
    se,
    _,
    h,
    d,
    g,
    w,
    p,
    S,
    x,
    C,
    ce,
    fe,
    B,
    A
  ];
}
class J4 extends ht {
  constructor(t) {
    super(), _t(
      this,
      t,
      K4,
      j4,
      ft,
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
function Q4(e) {
  let t, n, i, l, f, u, a, _, h, d, c, g, w, p, S, x, T, z, C, F, R, I, G, D, ee, W, K, se, ce, fe, re, J, B, A, E;
  return {
    c() {
      t = Ce("rect"), _ = ve(), h = Ce("text"), d = ze(
        /*tooltip_name_x*/
        e[12]
      ), w = ve(), p = Ce("rect"), z = ve(), C = Ce("text"), F = ze(
        /*tooltip_name_y*/
        e[14]
      ), G = ve(), D = Ce("line"), ce = ve(), fe = Ce("line"), v(t, "x", n = /*adjusted_x1*/
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
      e[6]})`), v(h, "transform", c = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`), v(
        h,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[4]
      ), v(
        h,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[5]
      ), v(
        h,
        "x",
        /*x1*/
        e[13]
      ), v(
        h,
        "y",
        /*x_ticks_spacing*/
        e[6]
      ), y(
        h,
        "font-size",
        /*font_size_xticks*/
        e[0] * 1.2 + "px"
      ), y(h, "font-family", "Arial, sans-serif"), y(h, "fill", "white"), v(
        h,
        "dy",
        /*dy*/
        e[3]
      ), v(
        h,
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
      ), v(C, "x", R = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10]), v(C, "text-anchor", "end"), y(
        C,
        "font-size",
        /*font_size_yticks*/
        e[11] + "px"
      ), y(C, "font-family", "Arial, sans-serif"), y(C, "fill", "white"), v(C, "dy", "0.35em"), v(D, "x1", ee = /*vline*/
      e[8].x1), v(D, "y1", W = /*vline*/
      e[8].y1), v(D, "x2", K = /*vline*/
      e[8].x2), v(D, "y2", se = /*vline*/
      e[8].y2), v(D, "stroke", "black"), v(D, "stroke-width", "1"), v(D, "stroke-dasharray", "5,5"), v(fe, "x1", re = /*hline*/
      e[7].x1), v(fe, "y1", J = /*hline*/
      e[7].y1), v(fe, "x2", B = /*hline*/
      e[7].x2), v(fe, "y2", A = /*hline*/
      e[7].y2), v(fe, "stroke", "black"), v(fe, "stroke-width", "1"), v(fe, "stroke-dasharray", "5,5");
    },
    m(de, he) {
      j(de, t, he), j(de, _, he), j(de, h, he), X(h, d), j(de, w, he), j(de, p, he), j(de, z, he), j(de, C, he), X(C, F), j(de, G, he), j(de, D, he), j(de, ce, he), j(de, fe, he), E = !0;
    },
    p(de, [he]) {
      e = de, (!E || he & /*adjusted_x1, tooltip_name_x, font_size_xticks*/
      36865 && n !== (n = /*adjusted_x1*/
      e[15] - /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.3 - 5)) && v(t, "x", n), (!E || he & /*x_ticks_spacing, font_size_xticks*/
      65 && i !== (i = /*x_ticks_spacing*/
      e[6] - /*font_size_xticks*/
      e[0] - 5)) && v(t, "y", i), (!E || he & /*tooltip_name_x, font_size_xticks*/
      4097 && l !== (l = /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.6 + 10)) && v(t, "width", l), (!E || he & /*font_size_xticks*/
      1 && f !== (f = /*font_size_xticks*/
      e[0] + 20)) && v(t, "height", f), (!E || he & /*rotation_xaxis, x1, x_ticks_spacing*/
      8258 && u !== (u = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`)) && v(t, "transform", u), (!E || he & /*tooltip_name_x*/
      4096) && Oe(
        d,
        /*tooltip_name_x*/
        e[12]
      ), (!E || he & /*rotation_xaxis, x1, x_ticks_spacing*/
      8258 && c !== (c = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`)) && v(h, "transform", c), (!E || he & /*text_anchor_x_axis*/
      16) && v(
        h,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[4]
      ), (!E || he & /*dominant_baseline_x_axis*/
      32) && v(
        h,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[5]
      ), (!E || he & /*x1*/
      8192) && v(
        h,
        "x",
        /*x1*/
        e[13]
      ), (!E || he & /*x_ticks_spacing*/
      64) && v(
        h,
        "y",
        /*x_ticks_spacing*/
        e[6]
      ), (!E || he & /*font_size_xticks*/
      1) && y(
        h,
        "font-size",
        /*font_size_xticks*/
        e[0] * 1.2 + "px"
      ), (!E || he & /*dy*/
      8) && v(
        h,
        "dy",
        /*dy*/
        e[3]
      ), (!E || he & /*dx*/
      4) && v(
        h,
        "dx",
        /*dx*/
        e[2]
      ), (!E || he & /*y_lines_spacing, space_between_ticks_and_gridline, rect_width*/
      132608 && S !== (S = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10] / 2 - /*rect_width*/
      e[17])) && v(p, "x", S), (!E || he & /*y1, rect_height*/
      589824 && x !== (x = /*y1*/
      e[19] - /*rect_height*/
      e[16] / 2)) && v(p, "y", x), (!E || he & /*rect_width*/
      131072) && v(
        p,
        "width",
        /*rect_width*/
        e[17]
      ), (!E || he & /*rect_height*/
      65536) && v(
        p,
        "height",
        /*rect_height*/
        e[16]
      ), (!E || he & /*tooltip_name_y*/
      16384) && Oe(
        F,
        /*tooltip_name_y*/
        e[14]
      ), (!E || he & /*y1*/
      524288) && v(
        C,
        "y",
        /*y1*/
        e[19]
      ), (!E || he & /*y_lines_spacing, space_between_ticks_and_gridline*/
      1536 && R !== (R = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10])) && v(C, "x", R), (!E || he & /*font_size_yticks*/
      2048) && y(
        C,
        "font-size",
        /*font_size_yticks*/
        e[11] + "px"
      ), (!E || he & /*vline*/
      256 && ee !== (ee = /*vline*/
      e[8].x1)) && v(D, "x1", ee), (!E || he & /*vline*/
      256 && W !== (W = /*vline*/
      e[8].y1)) && v(D, "y1", W), (!E || he & /*vline*/
      256 && K !== (K = /*vline*/
      e[8].x2)) && v(D, "x2", K), (!E || he & /*vline*/
      256 && se !== (se = /*vline*/
      e[8].y2)) && v(D, "y2", se), (!E || he & /*hline*/
      128 && re !== (re = /*hline*/
      e[7].x1)) && v(fe, "x1", re), (!E || he & /*hline*/
      128 && J !== (J = /*hline*/
      e[7].y1)) && v(fe, "y1", J), (!E || he & /*hline*/
      128 && B !== (B = /*hline*/
      e[7].x2)) && v(fe, "x2", B), (!E || he & /*hline*/
      128 && A !== (A = /*hline*/
      e[7].y2)) && v(fe, "y2", A);
    },
    i(de) {
      E || (it(() => {
        E && (a || (a = Pt(
          t,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), a.run(1));
      }), it(() => {
        E && (g || (g = Pt(
          h,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), g.run(1));
      }), it(() => {
        E && (T || (T = Pt(
          p,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), T.run(1));
      }), it(() => {
        E && (I || (I = Pt(
          C,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), I.run(1));
      }), E = !0);
    },
    o(de) {
      a || (a = Pt(
        t,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), a.run(0), g || (g = Pt(
        h,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), g.run(0), T || (T = Pt(
        p,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), T.run(0), I || (I = Pt(
        C,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), I.run(0), E = !1;
    },
    d(de) {
      de && (Z(t), Z(_), Z(h), Z(w), Z(p), Z(z), Z(C), Z(G), Z(D), Z(ce), Z(fe)), de && a && a.end(), de && g && g.end(), de && T && T.end(), de && I && I.end();
    }
  };
}
function V4(e, t, n) {
  let i, l, f, u, a, _, h, d, c, { x_scale: g } = t, { y_scale: w } = t, { font_size_xticks: p } = t, { rotation_xaxis: S } = t, { dx: x } = t, { dy: T } = t, { text_anchor_x_axis: z } = t, { dominant_baseline_x_axis: C } = t, { x_ticks_spacing: F } = t, { tooltip2_array_values: R } = t, { interval: I } = t, { type: G } = t, { show_delay_tooltip: D } = t, { hline: ee } = t, { vline: W } = t, { y_lines_spacing: K } = t, { space_between_ticks_and_gridline: se } = t, { format_yaxis: ce } = t, { font_size_yticks: fe } = t;
  return e.$$set = (re) => {
    "x_scale" in re && n(20, g = re.x_scale), "y_scale" in re && n(21, w = re.y_scale), "font_size_xticks" in re && n(0, p = re.font_size_xticks), "rotation_xaxis" in re && n(1, S = re.rotation_xaxis), "dx" in re && n(2, x = re.dx), "dy" in re && n(3, T = re.dy), "text_anchor_x_axis" in re && n(4, z = re.text_anchor_x_axis), "dominant_baseline_x_axis" in re && n(5, C = re.dominant_baseline_x_axis), "x_ticks_spacing" in re && n(6, F = re.x_ticks_spacing), "tooltip2_array_values" in re && n(22, R = re.tooltip2_array_values), "interval" in re && n(23, I = re.interval), "type" in re && n(24, G = re.type), "show_delay_tooltip" in re && n(25, D = re.show_delay_tooltip), "hline" in re && n(7, ee = re.hline), "vline" in re && n(8, W = re.vline), "y_lines_spacing" in re && n(9, K = re.y_lines_spacing), "space_between_ticks_and_gridline" in re && n(10, se = re.space_between_ticks_and_gridline), "format_yaxis" in re && n(26, ce = re.format_yaxis), "font_size_yticks" in re && n(11, fe = re.font_size_yticks);
  }, e.$$.update = () => {
    e.$$.dirty & /*tooltip2_array_values, interval, type*/
    29360128 && n(12, i = R ? t0(I, G, R) : null), e.$$.dirty & /*x_scale, tooltip2_array_values*/
    5242880 && n(13, l = g(R[0].data.x)), e.$$.dirty & /*y_scale, tooltip2_array_values*/
    6291456 && n(19, f = w(R[0].data.y)), e.$$.dirty & /*show_delay_tooltip*/
    33554432 && n(18, u = { delay: D }), e.$$.dirty & /*format_yaxis*/
    67108864 && n(27, a = hn(ce)), e.$$.dirty & /*format_number, tooltip2_array_values*/
    138412032 && n(14, _ = a(R[0].data.y)), e.$$.dirty & /*tooltip_name_y, font_size_yticks*/
    18432 && n(17, h = _.length * fe * 0.6), e.$$.dirty & /*font_size_yticks*/
    2048 && n(16, d = fe + 20), e.$$.dirty & /*x1*/
    8192 && n(15, c = l), e.$$.dirty & /*text_anchor_x_axis, x1, tooltip_name_x, font_size_xticks*/
    12305 && (z === "end" ? n(15, c = l - i.length * p * 0.6 / 2 - 5 / 2) : z === "start" && n(15, c = l + i.length * p * 0.6 / 2 + 5 / 2));
  }, [
    p,
    S,
    x,
    T,
    z,
    C,
    F,
    ee,
    W,
    K,
    se,
    fe,
    i,
    l,
    _,
    c,
    d,
    h,
    u,
    f,
    g,
    w,
    R,
    I,
    G,
    D,
    ce,
    a
  ];
}
class $4 extends ht {
  constructor(t) {
    super(), _t(this, t, V4, Q4, ft, {
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
function e1(e, t, n) {
  const i = e.slice();
  return i[118] = t[n], i;
}
function t1(e, t, n) {
  const i = e.slice();
  return i[62] = t[n], i;
}
function n1(e, t, n) {
  const i = e.slice();
  return i[123] = t[n], i;
}
function i1(e, t, n) {
  const i = e.slice();
  return i[118] = t[n], i;
}
function r1(e, t, n) {
  const i = e.slice();
  return i[128] = t[n].x_start, i[129] = t[n].x_end, i[130] = t[n].y_start, i[131] = t[n].y_end, i[132] = t[n].colors, i[133] = t[n].opacity, i[134] = t[n].outline_color, i[135] = t[n].outline_width, i[136] = t[n].linetype, i[137] = t[n].key, i[49] = t[n].type, i;
}
function l1(e, t, n) {
  const i = e.slice();
  return i[140] = t[n], i;
}
function o1(e, t, n) {
  const i = e.slice();
  return i[140] = t[n], i;
}
function f1(e, t, n) {
  const i = e.slice();
  return i[145] = t[n].id, i[146] = t[n].color, i[49] = t[n].type, i;
}
function u1(e) {
  let t, n;
  return {
    c() {
      t = _e("div"), n = ze(
        /*header*/
        e[4]
      ), v(t, "class", "header"), y(
        t,
        "text-align",
        /*title_align*/
        e[5]
      ), y(
        t,
        "color",
        /*title_color*/
        e[6]
      ), y(
        t,
        "font-size",
        /*title_font_size*/
        e[7] + "px"
      ), y(
        t,
        "font-weight",
        /*title_font_weight*/
        e[8]
      ), y(t, "padding-bottom", "10px"), y(
        t,
        "margin-left",
        /*label_height*/
        e[50] + Pi + "px"
      );
    },
    m(i, l) {
      j(i, t, l), X(t, n);
    },
    p(i, l) {
      l[0] & /*header*/
      16 && Oe(
        n,
        /*header*/
        i[4]
      ), l[0] & /*title_align*/
      32 && y(
        t,
        "text-align",
        /*title_align*/
        i[5]
      ), l[0] & /*title_color*/
      64 && y(
        t,
        "color",
        /*title_color*/
        i[6]
      ), l[0] & /*title_font_size*/
      128 && y(
        t,
        "font-size",
        /*title_font_size*/
        i[7] + "px"
      ), l[0] & /*title_font_weight*/
      256 && y(
        t,
        "font-weight",
        /*title_font_weight*/
        i[8]
      ), l[1] & /*label_height*/
      524288 && y(
        t,
        "margin-left",
        /*label_height*/
        i[50] + Pi + "px"
      );
    },
    d(i) {
      i && Z(t);
    }
  };
}
function a1(e) {
  let t, n = ke(
    /*legend_cats*/
    e[73]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = s1(f1(e, n, l));
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
      33554432 | f[2] & /*hover_legend, legend_cats, categories*/
      2053) {
        n = ke(
          /*legend_cats*/
          l[73]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = f1(l, n, u);
          i[u] ? i[u].p(a, f) : (i[u] = s1(a), i[u].c(), i[u].m(t.parentNode, t));
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
function ev(e) {
  let t, n, i, l;
  return {
    c() {
      t = Ce("svg"), n = Ce("path"), v(n, "d", "M2 10 Q12 0 22 10"), v(n, "fill", i = /*color*/
      e[146]), v(n, "stroke", l = /*color*/
      e[146]), v(n, "stroke-width", "1"), v(t, "width", "24"), v(t, "height", "12"), v(t, "viewBox", "0 0 24 12"), y(t, "display", "inline-block"), y(t, "vertical-align", "middle");
    },
    m(f, u) {
      j(f, t, u), X(t, n);
    },
    p(f, u) {
      u[2] & /*legend_cats*/
      2048 && i !== (i = /*color*/
      f[146]) && v(n, "fill", i), u[2] & /*legend_cats*/
      2048 && l !== (l = /*color*/
      f[146]) && v(n, "stroke", l);
    },
    d(f) {
      f && Z(t);
    }
  };
}
function tv(e) {
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
      2048 && y(
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
function nv(e) {
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
      2048 && y(
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
function s1(e) {
  let t, n, i = (
    /*id*/
    e[145].replace(/\.\d+$/, "") + ""
  ), l, f, u, a, _;
  function h(p, S) {
    if (
      /*type*/
      p[49] === "points"
    )
      return nv;
    if (
      /*type*/
      p[49] === "line"
    )
      return tv;
    if (
      /*type*/
      p[49] === "density"
    )
      return ev;
  }
  let d = h(e), c = d && d(e);
  function g() {
    return (
      /*mouseover_handler*/
      e[94](
        /*id*/
        e[145]
      )
    );
  }
  function w() {
    return (
      /*click_handler*/
      e[95](
        /*id*/
        e[145]
      )
    );
  }
  return {
    c() {
      t = _e("p"), c && c.c(), n = ve(), l = ze(i), f = ve(), v(t, "style", u = /*hover_legend*/
      e[64] && /*hover_legend*/
      e[64] !== /*id*/
      e[145] && /*current_categories*/
      e[56].includes(
        /*hover_legend*/
        e[64]
      ) || !/*categories*/
      e[62][
        /*id*/
        e[145]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;");
    },
    m(p, S) {
      j(p, t, S), c && c.m(t, null), X(t, n), X(t, l), X(t, f), a || (_ = [
        dt(t, "mouseover", g),
        dt(t, "click", w)
      ], a = !0);
    },
    p(p, S) {
      e = p, d === (d = h(e)) && c ? c.p(e, S) : (c && c.d(1), c = d && d(e), c && (c.c(), c.m(t, n))), S[2] & /*legend_cats*/
      2048 && i !== (i = /*id*/
      e[145].replace(/\.\d+$/, "") + "") && Oe(l, i), S[1] & /*current_categories*/
      33554432 | S[2] & /*hover_legend, legend_cats, categories*/
      2053 && u !== (u = /*hover_legend*/
      e[64] && /*hover_legend*/
      e[64] !== /*id*/
      e[145] && /*current_categories*/
      e[56].includes(
        /*hover_legend*/
        e[64]
      ) || !/*categories*/
      e[62][
        /*id*/
        e[145]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;") && v(t, "style", u);
    },
    d(p) {
      p && Z(t), c && c.d(), a = !1, Zt(_);
    }
  };
}
function _1(e) {
  let t, n, i;
  return n = new ap({
    props: {
      filtered_segments_df: (
        /*filtered_segments_df*/
        e[74]
      ),
      label_height: (
        /*label_height*/
        e[50]
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
      4096 && (u.filtered_segments_df = /*filtered_segments_df*/
      l[74]), f[1] & /*label_height*/
      524288 && (u.label_height = /*label_height*/
      l[50]), n.$set(u);
    },
    i(l) {
      i || (te(n.$$.fragment, l), i = !0);
    },
    o(l) {
      ue(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && Z(t), je(n);
    }
  };
}
function h1(e, t) {
  let n, i, l;
  return i = new f0({
    props: {
      x1: (
        /*x_scale*/
        t[54](
          /*tickValue*/
          t[140]
        )
      ),
      width: (
        /*width*/
        t[0]
      ),
      x_ticks_spacing: (
        /*x_ticks_spacing*/
        t[72]
      ),
      x_lines_spacing: (
        /*x_lines_spacing*/
        t[59]
      ),
      rotation_xaxis: (
        /*rotation_xaxis*/
        t[12]
      ),
      line_generator_space: Br,
      ticklabel: (
        /*format_x_axis*/
        t[61] === "null" ? (
          /*tickValue*/
          t[140]
        ) : (
          /*format_x_axis*/
          t[61](
            /*tickValue*/
            t[140]
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
      u[1] & /*x_scale*/
      8388608 | u[2] & /*x_ticks*/
      512 && (a.x1 = /*x_scale*/
      t[54](
        /*tickValue*/
        t[140]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[2] & /*x_ticks_spacing*/
      1024 && (a.x_ticks_spacing = /*x_ticks_spacing*/
      t[72]), u[1] & /*x_lines_spacing*/
      268435456 && (a.x_lines_spacing = /*x_lines_spacing*/
      t[59]), u[0] & /*rotation_xaxis*/
      4096 && (a.rotation_xaxis = /*rotation_xaxis*/
      t[12]), u[1] & /*format_x_axis*/
      1073741824 | u[2] & /*x_ticks*/
      512 && (a.ticklabel = /*format_x_axis*/
      t[61] === "null" ? (
        /*tickValue*/
        t[140]
      ) : (
        /*format_x_axis*/
        t[61](
          /*tickValue*/
          t[140]
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
      l || (te(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function c1(e, t) {
  let n, i, l;
  return i = new ga({
    props: {
      y1: (
        /*y_scale*/
        t[55](
          /*tickValue*/
          t[140]
        )
      ),
      width: (
        /*width*/
        t[0]
      ),
      space_between_ticks_and_gridline: Qo,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[60]
      ),
      height: (
        /*height*/
        t[9]
      ),
      line_generator_space: Br,
      ticklabel: (
        /*format_number*/
        t[58](
          /*tickValue*/
          t[140]
        )
      ),
      font_size_yticks: (
        /*font_size_yticks*/
        t[22]
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
      524288 | u[1] & /*y_scale*/
      16777216 && (a.y1 = /*y_scale*/
      t[55](
        /*tickValue*/
        t[140]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[1] & /*y_lines_spacing*/
      536870912 && (a.y_lines_spacing = /*y_lines_spacing*/
      t[60]), u[0] & /*height*/
      512 && (a.height = /*height*/
      t[9]), u[0] & /*yaxis_ticks*/
      524288 | u[1] & /*format_number, y_scale*/
      150994944 && (a.ticklabel = /*format_number*/
      t[58](
        /*tickValue*/
        t[140]
      )), u[0] & /*font_size_yticks*/
      4194304 && (a.font_size_yticks = /*font_size_yticks*/
      t[22]), i.$set(a);
    },
    i(f) {
      l || (te(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function g1(e) {
  let t, n;
  return t = new $4({
    props: {
      x_scale: (
        /*x_scale*/
        e[54]
      ),
      y_scale: (
        /*y_scale*/
        e[55]
      ),
      font_size_xticks: (
        /*font_size_xticks*/
        e[14]
      ),
      rotation_xaxis: (
        /*rotation_xaxis*/
        e[12]
      ),
      dx: (
        /*dx*/
        e[10]
      ),
      dy: (
        /*dy*/
        e[11]
      ),
      text_anchor_x_axis: (
        /*text_anchor_x_axis*/
        e[16]
      ),
      dominant_baseline_x_axis: (
        /*dominant_baseline_x_axis*/
        e[15]
      ),
      x_ticks_spacing: (
        /*x_ticks_spacing*/
        e[72]
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[52]
      ),
      interval: (
        /*interval*/
        e[33]
      ),
      type: (
        /*type*/
        e[49]
      ),
      show_delay_tooltip: (
        /*show_delay_tooltip*/
        e[44]
      ),
      hline: (
        /*hline*/
        e[70]
      ),
      vline: (
        /*vline*/
        e[69]
      ),
      format_yaxis: (
        /*format_yaxis*/
        e[20]
      ),
      y_lines_spacing: (
        /*y_lines_spacing*/
        e[60]
      ),
      space_between_ticks_and_gridline: Qo,
      font_size_yticks: (
        /*font_size_yticks*/
        e[22]
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
      8388608 && (f.x_scale = /*x_scale*/
      i[54]), l[1] & /*y_scale*/
      16777216 && (f.y_scale = /*y_scale*/
      i[55]), l[0] & /*font_size_xticks*/
      16384 && (f.font_size_xticks = /*font_size_xticks*/
      i[14]), l[0] & /*rotation_xaxis*/
      4096 && (f.rotation_xaxis = /*rotation_xaxis*/
      i[12]), l[0] & /*dx*/
      1024 && (f.dx = /*dx*/
      i[10]), l[0] & /*dy*/
      2048 && (f.dy = /*dy*/
      i[11]), l[0] & /*text_anchor_x_axis*/
      65536 && (f.text_anchor_x_axis = /*text_anchor_x_axis*/
      i[16]), l[0] & /*dominant_baseline_x_axis*/
      32768 && (f.dominant_baseline_x_axis = /*dominant_baseline_x_axis*/
      i[15]), l[2] & /*x_ticks_spacing*/
      1024 && (f.x_ticks_spacing = /*x_ticks_spacing*/
      i[72]), l[1] & /*tooltip2_array_values*/
      2097152 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[52]), l[1] & /*interval*/
      4 && (f.interval = /*interval*/
      i[33]), l[1] & /*type*/
      262144 && (f.type = /*type*/
      i[49]), l[1] & /*show_delay_tooltip*/
      8192 && (f.show_delay_tooltip = /*show_delay_tooltip*/
      i[44]), l[2] & /*hline*/
      256 && (f.hline = /*hline*/
      i[70]), l[2] & /*vline*/
      128 && (f.vline = /*vline*/
      i[69]), l[0] & /*format_yaxis*/
      1048576 && (f.format_yaxis = /*format_yaxis*/
      i[20]), l[1] & /*y_lines_spacing*/
      536870912 && (f.y_lines_spacing = /*y_lines_spacing*/
      i[60]), l[0] & /*font_size_yticks*/
      4194304 && (f.font_size_yticks = /*font_size_yticks*/
      i[22]), t.$set(f);
    },
    i(i) {
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function d1(e) {
  let t = [], n = /* @__PURE__ */ new Map(), i, l, f = ke(
    /*filtered_segments_df*/
    e[74]
  );
  const u = (a) => (
    /*key*/
    a[137]
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = r1(e, f, a), h = u(_);
    n.set(h, t[a] = m1(h, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      i = Le();
    },
    m(a, _) {
      for (let h = 0; h < t.length; h += 1)
        t[h] && t[h].m(a, _);
      j(a, i, _), l = !0;
    },
    p(a, _) {
      _[0] & /*width*/
      1 | _[1] & /*x_lines_spacing, y_lines_spacing*/
      805306368 | _[2] & /*filtered_segments_df*/
      4096 && (f = ke(
        /*filtered_segments_df*/
        a[74]
      ), We(), t = kn(t, _, u, 1, a, f, n, i.parentNode, Kn, m1, i, r1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          te(t[_]);
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
function m1(e, t) {
  let n, i, l;
  return i = new vp({
    props: {
      x1: (
        /*x_start*/
        t[128]
      ),
      x2: (
        /*x_end*/
        t[129]
      ),
      y1: (
        /*y_start*/
        t[130]
      ),
      y2: (
        /*y_end*/
        t[131]
      ),
      colors: (
        /*colors*/
        t[132]
      ),
      opacity: (
        /*opacity*/
        t[133]
      ),
      outline_color: (
        /*outline_color*/
        t[134]
      ),
      outline_width: (
        /*outline_width*/
        t[135]
      ),
      linetype: (
        /*linetype*/
        t[136]
      ),
      type: (
        /*type*/
        t[49]
      ),
      line_generator_space: Br,
      width: (
        /*width*/
        t[0]
      ),
      x_lines_spacing: (
        /*x_lines_spacing*/
        t[59]
      ),
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[60]
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
      4096 && (a.x1 = /*x_start*/
      t[128]), u[2] & /*filtered_segments_df*/
      4096 && (a.x2 = /*x_end*/
      t[129]), u[2] & /*filtered_segments_df*/
      4096 && (a.y1 = /*y_start*/
      t[130]), u[2] & /*filtered_segments_df*/
      4096 && (a.y2 = /*y_end*/
      t[131]), u[2] & /*filtered_segments_df*/
      4096 && (a.colors = /*colors*/
      t[132]), u[2] & /*filtered_segments_df*/
      4096 && (a.opacity = /*opacity*/
      t[133]), u[2] & /*filtered_segments_df*/
      4096 && (a.outline_color = /*outline_color*/
      t[134]), u[2] & /*filtered_segments_df*/
      4096 && (a.outline_width = /*outline_width*/
      t[135]), u[2] & /*filtered_segments_df*/
      4096 && (a.linetype = /*linetype*/
      t[136]), u[2] & /*filtered_segments_df*/
      4096 && (a.type = /*type*/
      t[49]), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[1] & /*x_lines_spacing*/
      268435456 && (a.x_lines_spacing = /*x_lines_spacing*/
      t[59]), u[1] & /*y_lines_spacing*/
      536870912 && (a.y_lines_spacing = /*y_lines_spacing*/
      t[60]), i.$set(a);
    },
    i(f) {
      l || (te(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function y1(e) {
  let t, n, i, l, f, u, a, _, h, d;
  return {
    c() {
      t = Ce("circle"), u = Ce("circle"), v(t, "cx", n = /*x_scale*/
      e[54](
        /*tooltip2_array_values*/
        e[52].data.x
      )), v(t, "cy", i = /*y_scale*/
      e[55](
        /*tooltip2_array_values*/
        e[52].data.y
      )), v(t, "r", l = /*tooltip2_array_values*/
      e[52].size * 2), v(t, "opacity", 1), v(t, "fill", f = /*tooltip2_array_values*/
      e[52].colors), v(u, "cx", a = /*x_scale*/
      e[54](
        /*tooltip2_array_values*/
        e[52].data.x
      )), v(u, "cy", _ = /*y_scale*/
      e[55](
        /*tooltip2_array_values*/
        e[52].data.y
      )), v(u, "r", h = /*tooltip2_array_values*/
      e[52].size * 4), v(u, "opacity", 0.1), v(u, "fill", d = /*tooltip2_array_values*/
      e[52].colors);
    },
    m(c, g) {
      j(c, t, g), j(c, u, g);
    },
    p(c, g) {
      g[1] & /*x_scale, tooltip2_array_values*/
      10485760 && n !== (n = /*x_scale*/
      c[54](
        /*tooltip2_array_values*/
        c[52].data.x
      )) && v(t, "cx", n), g[1] & /*y_scale, tooltip2_array_values*/
      18874368 && i !== (i = /*y_scale*/
      c[55](
        /*tooltip2_array_values*/
        c[52].data.y
      )) && v(t, "cy", i), g[1] & /*tooltip2_array_values*/
      2097152 && l !== (l = /*tooltip2_array_values*/
      c[52].size * 2) && v(t, "r", l), g[1] & /*tooltip2_array_values*/
      2097152 && f !== (f = /*tooltip2_array_values*/
      c[52].colors) && v(t, "fill", f), g[1] & /*x_scale, tooltip2_array_values*/
      10485760 && a !== (a = /*x_scale*/
      c[54](
        /*tooltip2_array_values*/
        c[52].data.x
      )) && v(u, "cx", a), g[1] & /*y_scale, tooltip2_array_values*/
      18874368 && _ !== (_ = /*y_scale*/
      c[55](
        /*tooltip2_array_values*/
        c[52].data.y
      )) && v(u, "cy", _), g[1] & /*tooltip2_array_values*/
      2097152 && h !== (h = /*tooltip2_array_values*/
      c[52].size * 4) && v(u, "r", h), g[1] & /*tooltip2_array_values*/
      2097152 && d !== (d = /*tooltip2_array_values*/
      c[52].colors) && v(u, "fill", d);
    },
    d(c) {
      c && (Z(t), Z(u));
    }
  };
}
function b1(e) {
  let t, n, i, l, f, u, a = ke(
    /*tooltip2_array_values*/
    e[52]
  ), _ = [];
  for (let h = 0; h < a.length; h += 1)
    _[h] = w1(i1(e, a, h));
  return {
    c() {
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      t = Ce("g"), n = Ce("line"), v(n, "y1", i = /*vline*/
      e[69].y1), v(n, "y2", l = /*vline*/
      e[69].y2), v(n, "x1", f = /*vline*/
      e[69].x1), v(n, "x2", u = /*vline*/
      e[69].x2), v(n, "stroke", "black"), v(
        n,
        "stroke-dasharray",
        /*line_type_axis_trigger*/
        e[1]
      ), v(t, "class", "tooltip-lines"), v(t, "transform", "translate(0, 0)");
    },
    m(h, d) {
      for (let c = 0; c < _.length; c += 1)
        _[c] && _[c].m(h, d);
      j(h, t, d), X(t, n);
    },
    p(h, d) {
      if (d[1] & /*x_scale, tooltip2_array_values, y_scale*/
      27262976) {
        a = ke(
          /*tooltip2_array_values*/
          h[52]
        );
        let c;
        for (c = 0; c < a.length; c += 1) {
          const g = i1(h, a, c);
          _[c] ? _[c].p(g, d) : (_[c] = w1(g), _[c].c(), _[c].m(t.parentNode, t));
        }
        for (; c < _.length; c += 1)
          _[c].d(1);
        _.length = a.length;
      }
      d[2] & /*vline*/
      128 && i !== (i = /*vline*/
      h[69].y1) && v(n, "y1", i), d[2] & /*vline*/
      128 && l !== (l = /*vline*/
      h[69].y2) && v(n, "y2", l), d[2] & /*vline*/
      128 && f !== (f = /*vline*/
      h[69].x1) && v(n, "x1", f), d[2] & /*vline*/
      128 && u !== (u = /*vline*/
      h[69].x2) && v(n, "x2", u), d[0] & /*line_type_axis_trigger*/
      2 && v(
        n,
        "stroke-dasharray",
        /*line_type_axis_trigger*/
        h[1]
      );
    },
    d(h) {
      h && Z(t), xn(_, h);
    }
  };
}
function w1(e) {
  let t, n, i, l, f, u, a, _, h, d;
  return {
    c() {
      t = Ce("circle"), u = Ce("circle"), v(t, "cx", n = /*x_scale*/
      e[54](
        /*line*/
        e[118].data.x
      )), v(t, "cy", i = /*y_scale*/
      e[55](
        /*line*/
        e[118].data.y
      )), v(t, "r", l = /*line*/
      e[118].size * 1.5), v(t, "opacity", 1), v(t, "fill", f = /*line*/
      e[118].colors), v(u, "cx", a = /*x_scale*/
      e[54](
        /*line*/
        e[118].data.x
      )), v(u, "cy", _ = /*y_scale*/
      e[55](
        /*line*/
        e[118].data.y
      )), v(u, "r", h = /*line*/
      e[118].size * 3), v(u, "opacity", 0.1), v(u, "fill", d = /*line*/
      e[118].colors);
    },
    m(c, g) {
      j(c, t, g), j(c, u, g);
    },
    p(c, g) {
      g[1] & /*x_scale, tooltip2_array_values*/
      10485760 && n !== (n = /*x_scale*/
      c[54](
        /*line*/
        c[118].data.x
      )) && v(t, "cx", n), g[1] & /*y_scale, tooltip2_array_values*/
      18874368 && i !== (i = /*y_scale*/
      c[55](
        /*line*/
        c[118].data.y
      )) && v(t, "cy", i), g[1] & /*tooltip2_array_values*/
      2097152 && l !== (l = /*line*/
      c[118].size * 1.5) && v(t, "r", l), g[1] & /*tooltip2_array_values*/
      2097152 && f !== (f = /*line*/
      c[118].colors) && v(t, "fill", f), g[1] & /*x_scale, tooltip2_array_values*/
      10485760 && a !== (a = /*x_scale*/
      c[54](
        /*line*/
        c[118].data.x
      )) && v(u, "cx", a), g[1] & /*y_scale, tooltip2_array_values*/
      18874368 && _ !== (_ = /*y_scale*/
      c[55](
        /*line*/
        c[118].data.y
      )) && v(u, "cy", _), g[1] & /*tooltip2_array_values*/
      2097152 && h !== (h = /*line*/
      c[118].size * 3) && v(u, "r", h), g[1] & /*tooltip2_array_values*/
      2097152 && d !== (d = /*line*/
      c[118].colors) && v(u, "fill", d);
    },
    d(c) {
      c && (Z(t), Z(u));
    }
  };
}
function p1(e) {
  let t = [], n = /* @__PURE__ */ new Map(), i, l, f = ke(
    /*pointsRendered*/
    e[68]
  );
  const u = (a) => (
    /*categories*/
    a[62].id_id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = t1(e, f, a), h = u(_);
    n.set(h, t[a] = k1(h, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      i = Le();
    },
    m(a, _) {
      for (let h = 0; h < t.length; h += 1)
        t[h] && t[h].m(a, _);
      j(a, i, _), l = !0;
    },
    p(a, _) {
      _[1] & /*x_scale, y_scale, current_categories, tooltip2_array_values*/
      60817408 | _[2] & /*pointsRendered, hover_legend, listener*/
      84 && (f = ke(
        /*pointsRendered*/
        a[68]
      ), We(), t = kn(t, _, u, 1, a, f, n, i.parentNode, Kn, k1, i, t1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          te(t[_]);
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
function v1(e) {
  let t, n;
  return t = new op({
    props: {
      x: (
        /*x_scale*/
        e[54](
          /*points*/
          e[123].x
        )
      ),
      y: (
        /*y_scale*/
        e[55](
          /*points*/
          e[123].y
        )
      ),
      categories: (
        /*categories*/
        e[62]
      ),
      points: (
        /*points*/
        e[123]
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
        e[64]
      ),
      current_categories: (
        /*current_categories*/
        e[56]
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[52]
      ),
      listener: (
        /*listener*/
        e[66]
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
      8388608 | l[2] & /*pointsRendered*/
      64 && (f.x = /*x_scale*/
      i[54](
        /*points*/
        i[123].x
      )), l[1] & /*y_scale*/
      16777216 | l[2] & /*pointsRendered*/
      64 && (f.y = /*y_scale*/
      i[55](
        /*points*/
        i[123].y
      )), l[2] & /*pointsRendered*/
      64 && (f.categories = /*categories*/
      i[62]), l[2] & /*pointsRendered*/
      64 && (f.points = /*points*/
      i[123]), l[2] & /*hover_legend*/
      4 && (f.hover_legend = /*hover_legend*/
      i[64]), l[1] & /*current_categories*/
      33554432 && (f.current_categories = /*current_categories*/
      i[56]), l[1] & /*tooltip2_array_values*/
      2097152 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[52]), l[2] & /*listener*/
      16 && (f.listener = /*listener*/
      i[66]), t.$set(f);
    },
    i(i) {
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function k1(e, t) {
  let n, i, l, f = ke(
    /*categories*/
    t[62].data
  ), u = [];
  for (let _ = 0; _ < f.length; _ += 1)
    u[_] = v1(n1(t, f, _));
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
    m(_, h) {
      j(_, n, h);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(_, h);
      j(_, i, h), l = !0;
    },
    p(_, h) {
      if (t = _, h[1] & /*x_scale, y_scale, current_categories, tooltip2_array_values*/
      60817408 | h[2] & /*pointsRendered, hover_legend, listener*/
      84) {
        f = ke(
          /*categories*/
          t[62].data
        );
        let d;
        for (d = 0; d < f.length; d += 1) {
          const c = n1(t, f, d);
          u[d] ? (u[d].p(c, h), te(u[d], 1)) : (u[d] = v1(c), u[d].c(), te(u[d], 1), u[d].m(i.parentNode, i));
        }
        for (We(), d = f.length; d < u.length; d += 1)
          a(d);
        Be();
      }
    },
    i(_) {
      if (!l) {
        for (let h = 0; h < f.length; h += 1)
          te(u[h]);
        l = !0;
      }
    },
    o(_) {
      u = u.filter(Boolean);
      for (let h = 0; h < u.length; h += 1)
        ue(u[h]);
      l = !1;
    },
    d(_) {
      _ && (Z(n), Z(i)), xn(u, _);
    }
  };
}
function x1(e) {
  let t = [], n = /* @__PURE__ */ new Map(), i, l, f = ke(
    /*linesRendered*/
    e[67]
  );
  const u = (a) => (
    /*line*/
    a[118].id_id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = e1(e, f, a), h = u(_);
    n.set(h, t[a] = M1(h, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      i = Le();
    },
    m(a, _) {
      for (let h = 0; h < t.length; h += 1)
        t[h] && t[h].m(a, _);
      j(a, i, _), l = !0;
    },
    p(a, _) {
      _[1] & /*current_categories, tooltip2_array_values*/
      35651584 | _[2] & /*linesRendered, hover_legend, listener*/
      52 && (f = ke(
        /*linesRendered*/
        a[67]
      ), We(), t = kn(t, _, u, 1, a, f, n, i.parentNode, Kn, M1, i, e1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          te(t[_]);
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
function M1(e, t) {
  let n, i, l;
  return i = new Bw({
    props: {
      line: (
        /*line*/
        t[118]
      ),
      hover_legend: (
        /*hover_legend*/
        t[64]
      ),
      current_categories: (
        /*current_categories*/
        t[56]
      ),
      line_size: (
        /*line*/
        t[118].size
      ),
      path: (
        /*line*/
        t[118].path
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        t[52]
      ),
      tweenOptions: {
        path: {
          interpolate: Mw,
          duration: 1e3,
          easing: rt
        }
      },
      listener: (
        /*listener*/
        t[66]
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
      32 && (a.line = /*line*/
      t[118]), u[2] & /*hover_legend*/
      4 && (a.hover_legend = /*hover_legend*/
      t[64]), u[1] & /*current_categories*/
      33554432 && (a.current_categories = /*current_categories*/
      t[56]), u[2] & /*linesRendered*/
      32 && (a.line_size = /*line*/
      t[118].size), u[2] & /*linesRendered*/
      32 && (a.path = /*line*/
      t[118].path), u[1] & /*tooltip2_array_values*/
      2097152 && (a.tooltip2_array_values = /*tooltip2_array_values*/
      t[52]), u[2] & /*listener*/
      16 && (a.listener = /*listener*/
      t[66]), i.$set(a);
    },
    i(f) {
      l || (te(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function T1(e) {
  let t, n;
  return t = new zp({
    props: {
      arrows_df: (
        /*arrows_df*/
        e[29]
      ),
      x_scale: (
        /*x_scale*/
        e[54]
      ),
      y_scale: (
        /*y_scale*/
        e[55]
      ),
      type: (
        /*type*/
        e[49]
      ),
      time_interval: (
        /*time_interval*/
        e[34]
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
      536870912 && (f.arrows_df = /*arrows_df*/
      i[29]), l[1] & /*x_scale*/
      8388608 && (f.x_scale = /*x_scale*/
      i[54]), l[1] & /*y_scale*/
      16777216 && (f.y_scale = /*y_scale*/
      i[55]), l[1] & /*type*/
      262144 && (f.type = /*type*/
      i[49]), l[1] & /*time_interval*/
      8 && (f.time_interval = /*time_interval*/
      i[34]), t.$set(f);
    },
    i(i) {
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function S1(e) {
  let t, n;
  return t = new Mp({
    props: {
      annotations_df: (
        /*annotations_df*/
        e[30]
      ),
      x_scale: (
        /*x_scale*/
        e[54]
      ),
      y_scale: (
        /*y_scale*/
        e[55]
      ),
      type: (
        /*type*/
        e[49]
      ),
      time_interval: (
        /*time_interval*/
        e[34]
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
      l[0] & /*annotations_df*/
      1073741824 && (f.annotations_df = /*annotations_df*/
      i[30]), l[1] & /*x_scale*/
      8388608 && (f.x_scale = /*x_scale*/
      i[54]), l[1] & /*y_scale*/
      16777216 && (f.y_scale = /*y_scale*/
      i[55]), l[1] & /*type*/
      262144 && (f.type = /*type*/
      i[49]), l[1] & /*time_interval*/
      8 && (f.time_interval = /*time_interval*/
      i[34]), t.$set(f);
    },
    i(i) {
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function z1(e) {
  let t, n, i, l, f, u, a;
  function _(g) {
    e[97](g);
  }
  function h(g) {
    e[98](g);
  }
  function d(g) {
    e[99](g);
  }
  let c = {
    height: (
      /*height*/
      e[9]
    ),
    width: (
      /*width*/
      e[0]
    ),
    x_scale: (
      /*x_scale*/
      e[54]
    ),
    y_scale: (
      /*y_scale*/
      e[55]
    ),
    margin: tf,
    filtered_data: (
      /*filtered_data*/
      e[53]
    ),
    type: (
      /*type*/
      e[49]
    ),
    tooltip: (
      /*tooltip*/
      e[32]
    ),
    buffer: Wr,
    time_series_interval: (
      /*time_series_interval*/
      e[35]
    ),
    chart: ov
  };
  return (
    /*tooltip2_array_values*/
    e[52] !== void 0 && (c.tooltip2_array_values = /*tooltip2_array_values*/
    e[52]), /*m*/
    e[65] !== void 0 && (c.m = /*m*/
    e[65]), /*listener*/
    e[66] !== void 0 && (c.listener = /*listener*/
    e[66]), n = new o0({ props: c }), st.push(() => It(n, "tooltip2_array_values", _)), st.push(() => It(n, "m", h)), st.push(() => It(n, "listener", d)), {
      c() {
        t = Ce("g"), Ke(n.$$.fragment), v(t, "transform", u = "translate(" + /*ticks_label_width*/
        (e[63] + /*label_height*/
        e[50] + 10) + " 10)");
      },
      m(g, w) {
        j(g, t, w), Ze(n, t, null), a = !0;
      },
      p(g, w) {
        const p = {};
        w[0] & /*height*/
        512 && (p.height = /*height*/
        g[9]), w[0] & /*width*/
        1 && (p.width = /*width*/
        g[0]), w[1] & /*x_scale*/
        8388608 && (p.x_scale = /*x_scale*/
        g[54]), w[1] & /*y_scale*/
        16777216 && (p.y_scale = /*y_scale*/
        g[55]), w[1] & /*filtered_data*/
        4194304 && (p.filtered_data = /*filtered_data*/
        g[53]), w[1] & /*type*/
        262144 && (p.type = /*type*/
        g[49]), w[1] & /*tooltip*/
        2 && (p.tooltip = /*tooltip*/
        g[32]), w[1] & /*time_series_interval*/
        16 && (p.time_series_interval = /*time_series_interval*/
        g[35]), !i && w[1] & /*tooltip2_array_values*/
        2097152 && (i = !0, p.tooltip2_array_values = /*tooltip2_array_values*/
        g[52], Rt(() => i = !1)), !l && w[2] & /*m*/
        8 && (l = !0, p.m = /*m*/
        g[65], Rt(() => l = !1)), !f && w[2] & /*listener*/
        16 && (f = !0, p.listener = /*listener*/
        g[66], Rt(() => f = !1)), n.$set(p), (!a || w[1] & /*label_height*/
        524288 | w[2] & /*ticks_label_width*/
        2 && u !== (u = "translate(" + /*ticks_label_width*/
        (g[63] + /*label_height*/
        g[50] + 10) + " 10)")) && v(t, "transform", u);
      },
      i(g) {
        a || (te(n.$$.fragment, g), a = !0);
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
function A1(e) {
  let t, n, i, l, f, u, a;
  function _(g) {
    e[100](g);
  }
  function h(g) {
    e[101](g);
  }
  function d(g) {
    e[102](g);
  }
  let c = {
    height: (
      /*height*/
      e[9]
    ),
    width: (
      /*width*/
      e[0]
    ),
    margin: tf,
    x_scale: (
      /*x_scale*/
      e[54]
    ),
    y_scale: (
      /*y_scale*/
      e[55]
    ),
    filtered_data: (
      /*filtered_data*/
      e[53]
    ),
    buffer: Wr
  };
  return (
    /*listener*/
    e[66] !== void 0 && (c.listener = /*listener*/
    e[66]), /*m*/
    e[65] !== void 0 && (c.m = /*m*/
    e[65]), /*tooltip2_array_values*/
    e[52] !== void 0 && (c.tooltip2_array_values = /*tooltip2_array_values*/
    e[52]), n = new N4({ props: c }), st.push(() => It(n, "listener", _)), st.push(() => It(n, "m", h)), st.push(() => It(n, "tooltip2_array_values", d)), {
      c() {
        t = Ce("g"), Ke(n.$$.fragment), v(t, "transform", u = "translate(" + /*ticks_label_width*/
        (e[63] + /*label_height*/
        e[50] + 10) + " 10)");
      },
      m(g, w) {
        j(g, t, w), Ze(n, t, null), a = !0;
      },
      p(g, w) {
        const p = {};
        w[0] & /*height*/
        512 && (p.height = /*height*/
        g[9]), w[0] & /*width*/
        1 && (p.width = /*width*/
        g[0]), w[1] & /*x_scale*/
        8388608 && (p.x_scale = /*x_scale*/
        g[54]), w[1] & /*y_scale*/
        16777216 && (p.y_scale = /*y_scale*/
        g[55]), w[1] & /*filtered_data*/
        4194304 && (p.filtered_data = /*filtered_data*/
        g[53]), !i && w[2] & /*listener*/
        16 && (i = !0, p.listener = /*listener*/
        g[66], Rt(() => i = !1)), !l && w[2] & /*m*/
        8 && (l = !0, p.m = /*m*/
        g[65], Rt(() => l = !1)), !f && w[1] & /*tooltip2_array_values*/
        2097152 && (f = !0, p.tooltip2_array_values = /*tooltip2_array_values*/
        g[52], Rt(() => f = !1)), n.$set(p), (!a || w[1] & /*label_height*/
        524288 | w[2] & /*ticks_label_width*/
        2 && u !== (u = "translate(" + /*ticks_label_width*/
        (g[63] + /*label_height*/
        g[50] + 10) + " 10)")) && v(t, "transform", u);
      },
      i(g) {
        a || (te(n.$$.fragment, g), a = !0);
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
function C1(e) {
  let t, n;
  return t = new Kw({
    props: {
      x_scale: (
        /*x_scale*/
        e[54]
      ),
      y_scale: (
        /*y_scale*/
        e[55]
      ),
      format_tooltip: (
        /*format_tooltip*/
        e[23]
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[52]
      ),
      margin: tf,
      buffer: Wr,
      height: (
        /*height*/
        e[9]
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
      8388608 && (f.x_scale = /*x_scale*/
      i[54]), l[1] & /*y_scale*/
      16777216 && (f.y_scale = /*y_scale*/
      i[55]), l[0] & /*format_tooltip*/
      8388608 && (f.format_tooltip = /*format_tooltip*/
      i[23]), l[1] & /*tooltip2_array_values*/
      2097152 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[52]), l[0] & /*height*/
      512 && (f.height = /*height*/
      i[9]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), t.$set(f);
    },
    i(i) {
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function iv(e) {
  let t, n;
  return t = new J4({
    props: {
      x_scale: (
        /*x_scale*/
        e[54]
      ),
      y_scale: (
        /*y_scale*/
        e[55]
      ),
      m_y: (
        /*m*/
        e[65].y
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[52]
      ),
      format_tooltip: (
        /*format_tooltip*/
        e[23]
      ),
      height: (
        /*height*/
        e[9]
      ),
      width: (
        /*width*/
        e[0]
      ),
      interval: (
        /*interval*/
        e[33]
      ),
      type: (
        /*type*/
        e[49]
      ),
      background_color_tt: (
        /*background_color_tt*/
        e[36]
      ),
      opacity_tt: (
        /*opacity_tt*/
        e[37]
      ),
      animation_params_list: (
        /*animation_params_list*/
        e[38]
      ),
      justify_content_tooltip: (
        /*justify_content_tooltip*/
        e[39]
      ),
      font_size_tooltip: (
        /*font_size_tooltip*/
        e[40]
      ),
      padding_tooltip: (
        /*padding_tooltip*/
        e[41]
      ),
      text_color_tooltip: (
        /*text_color_tooltip*/
        e[42]
      ),
      border_color_tooltip: (
        /*border_color_tooltip*/
        e[43]
      ),
      show_delay_tooltip: (
        /*show_delay_tooltip*/
        e[44]
      ),
      border_style_tooltip: (
        /*border_style_tooltip*/
        e[45]
      ),
      border_width_tooltip: (
        /*border_width_tooltip*/
        e[46]
      ),
      tooltip_position: (
        /*tooltip_position*/
        e[47]
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
      8388608 && (f.x_scale = /*x_scale*/
      i[54]), l[1] & /*y_scale*/
      16777216 && (f.y_scale = /*y_scale*/
      i[55]), l[2] & /*m*/
      8 && (f.m_y = /*m*/
      i[65].y), l[1] & /*tooltip2_array_values*/
      2097152 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[52]), l[0] & /*format_tooltip*/
      8388608 && (f.format_tooltip = /*format_tooltip*/
      i[23]), l[0] & /*height*/
      512 && (f.height = /*height*/
      i[9]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), l[1] & /*interval*/
      4 && (f.interval = /*interval*/
      i[33]), l[1] & /*type*/
      262144 && (f.type = /*type*/
      i[49]), l[1] & /*background_color_tt*/
      32 && (f.background_color_tt = /*background_color_tt*/
      i[36]), l[1] & /*opacity_tt*/
      64 && (f.opacity_tt = /*opacity_tt*/
      i[37]), l[1] & /*animation_params_list*/
      128 && (f.animation_params_list = /*animation_params_list*/
      i[38]), l[1] & /*justify_content_tooltip*/
      256 && (f.justify_content_tooltip = /*justify_content_tooltip*/
      i[39]), l[1] & /*font_size_tooltip*/
      512 && (f.font_size_tooltip = /*font_size_tooltip*/
      i[40]), l[1] & /*padding_tooltip*/
      1024 && (f.padding_tooltip = /*padding_tooltip*/
      i[41]), l[1] & /*text_color_tooltip*/
      2048 && (f.text_color_tooltip = /*text_color_tooltip*/
      i[42]), l[1] & /*border_color_tooltip*/
      4096 && (f.border_color_tooltip = /*border_color_tooltip*/
      i[43]), l[1] & /*show_delay_tooltip*/
      8192 && (f.show_delay_tooltip = /*show_delay_tooltip*/
      i[44]), l[1] & /*border_style_tooltip*/
      16384 && (f.border_style_tooltip = /*border_style_tooltip*/
      i[45]), l[1] & /*border_width_tooltip*/
      32768 && (f.border_width_tooltip = /*border_width_tooltip*/
      i[46]), l[1] & /*tooltip_position*/
      65536 && (f.tooltip_position = /*tooltip_position*/
      i[47]), t.$set(f);
    },
    i(i) {
      n || (te(t.$$.fragment, i), n = !0);
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
  return t = new ip({
    props: {
      x_scale: (
        /*x_scale*/
        e[54]
      ),
      m_y: (
        /*m*/
        e[65].y
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[52]
      ),
      format_tooltip: (
        /*format_tooltip*/
        e[23]
      ),
      height: (
        /*height*/
        e[9]
      ),
      width: (
        /*width*/
        e[0]
      ),
      margin: tf,
      buffer: Wr,
      interval: (
        /*interval*/
        e[33]
      ),
      type: (
        /*type*/
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
      l[1] & /*x_scale*/
      8388608 && (f.x_scale = /*x_scale*/
      i[54]), l[2] & /*m*/
      8 && (f.m_y = /*m*/
      i[65].y), l[1] & /*tooltip2_array_values*/
      2097152 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[52]), l[0] & /*format_tooltip*/
      8388608 && (f.format_tooltip = /*format_tooltip*/
      i[23]), l[0] & /*height*/
      512 && (f.height = /*height*/
      i[9]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), l[1] & /*interval*/
      4 && (f.interval = /*interval*/
      i[33]), l[1] & /*type*/
      262144 && (f.type = /*type*/
      i[49]), t.$set(f);
    },
    i(i) {
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function L1(e) {
  let t, n;
  return t = new mp({
    props: {
      y: (
        /*y_scale*/
        e[55].domain()[1]
      ),
      x_scale: (
        /*x_scale*/
        e[54]
      ),
      y_scale: (
        /*y_scale*/
        e[55]
      ),
      filtered_segments_df: (
        /*filtered_segments_df*/
        e[74]
      ),
      height: (
        /*height*/
        e[9]
      ),
      width: (
        /*width*/
        e[0]
      ),
      y_lines_spacing: (
        /*y_lines_spacing*/
        e[60]
      ),
      line_generator_space: Br
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
      16777216 && (f.y = /*y_scale*/
      i[55].domain()[1]), l[1] & /*x_scale*/
      8388608 && (f.x_scale = /*x_scale*/
      i[54]), l[1] & /*y_scale*/
      16777216 && (f.y_scale = /*y_scale*/
      i[55]), l[2] & /*filtered_segments_df*/
      4096 && (f.filtered_segments_df = /*filtered_segments_df*/
      i[74]), l[0] & /*height*/
      512 && (f.height = /*height*/
      i[9]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), l[1] & /*y_lines_spacing*/
      536870912 && (f.y_lines_spacing = /*y_lines_spacing*/
      i[60]), t.$set(f);
    },
    i(i) {
      n || (te(t.$$.fragment, i), n = !0);
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
  let t, n, i, l, f, u, a = [], _ = /* @__PURE__ */ new Map(), h, d, c = [], g = /* @__PURE__ */ new Map(), w, p, S, x, T, z, C, F, R, I, G, D, ee, W, K, se, ce, fe, re, J, B = (
    /*header*/
    e[4] && u1(e)
  ), A = (
    /*show_legend*/
    e[2] && a1(e)
  ), E = (
    /*segments_df*/
    e[28] && /*show_legend_segments*/
    e[31] && _1(e)
  ), de = ke(
    /*x_ticks*/
    e[71]
  );
  const he = (H) => (
    /*tickValue*/
    H[140].toString()
  );
  for (let H = 0; H < de.length; H += 1) {
    let le = o1(e, de, H), Me = he(le);
    _.set(Me, a[H] = h1(Me, le));
  }
  d = new a0({
    props: {
      axis_title_position: (
        /*x_scale*/
        (e[54](
          /*x_ticks*/
          e[71][0]
        ) + /*x_scale*/
        e[54](
          /*x_ticks*/
          e[71][
            /*x_ticks*/
            e[71].length - 1
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
        e[18]
      ),
      font_size_xaxis: (
        /*font_size_xaxis*/
        e[13]
      ),
      label_height_x_axis: (
        /*label_height_x_axis*/
        e[51]
      ),
      height: (
        /*height*/
        e[9]
      )
    }
  });
  let pt = ke(
    /*y_scale*/
    e[55].ticks(
      /*yaxis_ticks*/
      e[19]
    )
  );
  const Kt = (H) => (
    /*tickValue*/
    H[140]
  );
  for (let H = 0; H < pt.length; H += 1) {
    let le = l1(e, pt, H), Me = Kt(le);
    g.set(Me, c[H] = c1(Me, le));
  }
  let Je = (
    /*crosshair*/
    e[48] && /*tooltip2_array_values*/
    e[52] && /*tooltip2_array_values*/
    e[52].length > 0 && g1(e)
  );
  S = new u0({
    props: {
      axis_title_position: (
        /*y_scale*/
        (e[55](
          /*ticks*/
          e[57][0]
        ) + /*y_scale*/
        e[55](
          /*ticks*/
          e[57][
            /*ticks*/
            e[57].length - 1
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
        e[24]
      ),
      font_size_yaxis: (
        /*font_size_yaxis*/
        e[21]
      ),
      label_height: (
        /*label_height*/
        e[50]
      )
    }
  });
  let Ue = (
    /*segments*/
    e[25] && d1(e)
  ), $e = (
    /*tooltip2_array_values*/
    e[52] && /*tooltip*/
    e[32] === "single" && /*x_axis_type*/
    (e[17] === "date" || /*x_axis_type*/
    e[17] === "factor" || /*x_axis_type*/
    e[17] === "numeric" && /*tooltip2_array_values*/
    (e[52].type === "line" || /*tooltip2_array_values*/
    e[52].type === "density")) && y1(e)
  ), ut = (
    /*tooltip*/
    e[32] === "vertical_line" && /*tooltip2_array_values*/
    e[52] && /*tooltip2_array_values*/
    e[52].length > 0 && b1(e)
  ), Xe = (
    /*pointsRendered*/
    e[68].length > 0 && p1(e)
  ), ae = (
    /*linesRendered*/
    e[67].length > 0 && x1(e)
  ), me = (
    /*arrows*/
    e[27] && T1(e)
  ), be = (
    /*annotations*/
    e[26] && S1(e)
  ), Q = (
    /*x_axis_type*/
    (e[17] === "date" || /*x_axis_type*/
    e[17] === "factor") && z1(e)
  ), Ae = (
    /*x_axis_type*/
    e[17] === "numeric" && A1(e)
  ), ye = (
    /*tooltip2_array_values*/
    e[52] && [
      /*tooltip2_array_values*/
      e[52]
    ].length > 0 && /*tooltip*/
    e[32] === "single" && C1(e)
  );
  const He = [rv, iv], Qe = [];
  function et(H, le) {
    return (
      /*tooltip2_array_values*/
      H[52] && /*tooltip2_array_values*/
      H[52].length > 0 && /*tooltip*/
      H[32] === "vertical_line" && !/*custom_tooltip_data*/
      H[3] ? 0 : (
        /*tooltip2_array_values*/
        H[52] && /*tooltip2_array_values*/
        H[52].length > 0 && /*tooltip*/
        H[32] === "vertical_line" && /*custom_tooltip_data*/
        H[3] ? 1 : -1
      )
    );
  }
  ~(W = et(e)) && (K = Qe[W] = He[W](e));
  let qe = (
    /*$hovered_legend*/
    e[75] && L1(e)
  );
  return {
    c() {
      B && B.c(), t = ve(), n = _e("div"), A && A.c(), i = ve(), E && E.c(), l = ve(), f = _e("div"), u = Ce("svg");
      for (let H = 0; H < a.length; H += 1)
        a[H].c();
      h = Le(), Ke(d.$$.fragment);
      for (let H = 0; H < c.length; H += 1)
        c[H].c();
      w = Le(), Je && Je.c(), p = Le(), Ke(S.$$.fragment), Ue && Ue.c(), x = Le(), $e && $e.c(), T = Le(), ut && ut.c(), z = Le(), Xe && Xe.c(), C = Le(), ae && ae.c(), F = Le(), me && me.c(), R = Le(), be && be.c(), I = Le(), Q && Q.c(), G = Le(), Ae && Ae.c(), D = ve(), ye && ye.c(), ee = ve(), K && K.c(), se = ve(), qe && qe.c(), v(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "flex-start"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(
        n,
        "margin-left",
        /*label_height*/
        e[50] + Pi + "px"
      ), y(n, "margin-bottom", "0.25rem"), y(u, "color", "black"), v(
        u,
        "height",
        /*height*/
        e[9]
      ), v(
        u,
        "width",
        /*width*/
        e[0]
      ), v(f, "class", "chart"), y(f, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[103].call(f)
      ));
    },
    m(H, le) {
      B && B.m(H, le), j(H, t, le), j(H, n, le), A && A.m(n, null), j(H, i, le), E && E.m(H, le), j(H, l, le), j(H, f, le), X(f, u);
      for (let Me = 0; Me < a.length; Me += 1)
        a[Me] && a[Me].m(u, null);
      X(u, h), Ze(d, u, null);
      for (let Me = 0; Me < c.length; Me += 1)
        c[Me] && c[Me].m(u, null);
      X(u, w), Je && Je.m(u, null), X(u, p), Ze(S, u, null), Ue && Ue.m(u, null), X(u, x), $e && $e.m(u, null), X(u, T), ut && ut.m(u, null), X(u, z), Xe && Xe.m(u, null), X(u, C), ae && ae.m(u, null), X(u, F), me && me.m(u, null), X(u, R), be && be.m(u, null), X(u, I), Q && Q.m(u, null), X(u, G), Ae && Ae.m(u, null), X(f, D), ye && ye.m(f, null), X(f, ee), ~W && Qe[W].m(f, null), X(f, se), qe && qe.m(f, null), ce = nr(
        f,
        /*div1_elementresize_handler*/
        e[103].bind(f)
      ), fe = !0, re || (J = [
        dt(
          n,
          "mouseleave",
          /*mouseleave_handler*/
          e[96]
        ),
        dt(
          f,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[104]
        )
      ], re = !0);
    },
    p(H, le) {
      /*header*/
      H[4] ? B ? B.p(H, le) : (B = u1(H), B.c(), B.m(t.parentNode, t)) : B && (B.d(1), B = null), /*show_legend*/
      H[2] ? A ? A.p(H, le) : (A = a1(H), A.c(), A.m(n, null)) : A && (A.d(1), A = null), (!fe || le[1] & /*label_height*/
      524288) && y(
        n,
        "margin-left",
        /*label_height*/
        H[50] + Pi + "px"
      ), /*segments_df*/
      H[28] && /*show_legend_segments*/
      H[31] ? E ? (E.p(H, le), le[0] & /*segments_df*/
      268435456 | le[1] & /*show_legend_segments*/
      1 && te(E, 1)) : (E = _1(H), E.c(), te(E, 1), E.m(l.parentNode, l)) : E && (We(), ue(E, 1, 1, () => {
        E = null;
      }), Be()), le[0] & /*width, rotation_xaxis, font_size_xticks, dx, dy, dominant_baseline_x_axis, text_anchor_x_axis*/
      121857 | le[1] & /*x_scale, x_lines_spacing, format_x_axis*/
      1350565888 | le[2] & /*x_ticks, x_ticks_spacing*/
      1536 && (de = ke(
        /*x_ticks*/
        H[71]
      ), We(), a = kn(a, le, he, 1, H, de, _, u, Kn, h1, h, o1), Be());
      const Me = {};
      le[1] & /*x_scale*/
      8388608 | le[2] & /*x_ticks*/
      512 && (Me.axis_title_position = /*x_scale*/
      (H[54](
        /*x_ticks*/
        H[71][0]
      ) + /*x_scale*/
      H[54](
        /*x_ticks*/
        H[71][
          /*x_ticks*/
          H[71].length - 1
        ]
      )) / 2), le[0] & /*x_label*/
      262144 && (Me.x_label = /*x_label*/
      H[18]), le[0] & /*font_size_xaxis*/
      8192 && (Me.font_size_xaxis = /*font_size_xaxis*/
      H[13]), le[1] & /*label_height_x_axis*/
      1048576 && (Me.label_height_x_axis = /*label_height_x_axis*/
      H[51]), le[0] & /*height*/
      512 && (Me.height = /*height*/
      H[9]), d.$set(Me), le[0] & /*yaxis_ticks, width, height, font_size_yticks*/
      4719105 | le[1] & /*y_scale, y_lines_spacing, format_number*/
      687865856 && (pt = ke(
        /*y_scale*/
        H[55].ticks(
          /*yaxis_ticks*/
          H[19]
        )
      ), We(), c = kn(c, le, Kt, 1, H, pt, g, u, Kn, c1, w, l1), Be()), /*crosshair*/
      H[48] && /*tooltip2_array_values*/
      H[52] && /*tooltip2_array_values*/
      H[52].length > 0 ? Je ? (Je.p(H, le), le[1] & /*crosshair, tooltip2_array_values*/
      2228224 && te(Je, 1)) : (Je = g1(H), Je.c(), te(Je, 1), Je.m(u, p)) : Je && (We(), ue(Je, 1, 1, () => {
        Je = null;
      }), Be());
      const xt = {};
      le[1] & /*y_scale, ticks*/
      83886080 && (xt.axis_title_position = /*y_scale*/
      (H[55](
        /*ticks*/
        H[57][0]
      ) + /*y_scale*/
      H[55](
        /*ticks*/
        H[57][
          /*ticks*/
          H[57].length - 1
        ]
      )) / 2), le[0] & /*y_label*/
      16777216 && (xt.y_label = /*y_label*/
      H[24]), le[0] & /*font_size_yaxis*/
      2097152 && (xt.font_size_yaxis = /*font_size_yaxis*/
      H[21]), le[1] & /*label_height*/
      524288 && (xt.label_height = /*label_height*/
      H[50]), S.$set(xt), /*segments*/
      H[25] ? Ue ? (Ue.p(H, le), le[0] & /*segments*/
      33554432 && te(Ue, 1)) : (Ue = d1(H), Ue.c(), te(Ue, 1), Ue.m(u, x)) : Ue && (We(), ue(Ue, 1, 1, () => {
        Ue = null;
      }), Be()), /*tooltip2_array_values*/
      H[52] && /*tooltip*/
      H[32] === "single" && /*x_axis_type*/
      (H[17] === "date" || /*x_axis_type*/
      H[17] === "factor" || /*x_axis_type*/
      H[17] === "numeric" && /*tooltip2_array_values*/
      (H[52].type === "line" || /*tooltip2_array_values*/
      H[52].type === "density")) ? $e ? $e.p(H, le) : ($e = y1(H), $e.c(), $e.m(u, T)) : $e && ($e.d(1), $e = null), /*tooltip*/
      H[32] === "vertical_line" && /*tooltip2_array_values*/
      H[52] && /*tooltip2_array_values*/
      H[52].length > 0 ? ut ? ut.p(H, le) : (ut = b1(H), ut.c(), ut.m(u, z)) : ut && (ut.d(1), ut = null), /*pointsRendered*/
      H[68].length > 0 ? Xe ? (Xe.p(H, le), le[2] & /*pointsRendered*/
      64 && te(Xe, 1)) : (Xe = p1(H), Xe.c(), te(Xe, 1), Xe.m(u, C)) : Xe && (We(), ue(Xe, 1, 1, () => {
        Xe = null;
      }), Be()), /*linesRendered*/
      H[67].length > 0 ? ae ? (ae.p(H, le), le[2] & /*linesRendered*/
      32 && te(ae, 1)) : (ae = x1(H), ae.c(), te(ae, 1), ae.m(u, F)) : ae && (We(), ue(ae, 1, 1, () => {
        ae = null;
      }), Be()), /*arrows*/
      H[27] ? me ? (me.p(H, le), le[0] & /*arrows*/
      134217728 && te(me, 1)) : (me = T1(H), me.c(), te(me, 1), me.m(u, R)) : me && (We(), ue(me, 1, 1, () => {
        me = null;
      }), Be()), /*annotations*/
      H[26] ? be ? (be.p(H, le), le[0] & /*annotations*/
      67108864 && te(be, 1)) : (be = S1(H), be.c(), te(be, 1), be.m(u, I)) : be && (We(), ue(be, 1, 1, () => {
        be = null;
      }), Be()), /*x_axis_type*/
      H[17] === "date" || /*x_axis_type*/
      H[17] === "factor" ? Q ? (Q.p(H, le), le[0] & /*x_axis_type*/
      131072 && te(Q, 1)) : (Q = z1(H), Q.c(), te(Q, 1), Q.m(u, G)) : Q && (We(), ue(Q, 1, 1, () => {
        Q = null;
      }), Be()), /*x_axis_type*/
      H[17] === "numeric" ? Ae ? (Ae.p(H, le), le[0] & /*x_axis_type*/
      131072 && te(Ae, 1)) : (Ae = A1(H), Ae.c(), te(Ae, 1), Ae.m(u, null)) : Ae && (We(), ue(Ae, 1, 1, () => {
        Ae = null;
      }), Be()), (!fe || le[0] & /*height*/
      512) && v(
        u,
        "height",
        /*height*/
        H[9]
      ), (!fe || le[0] & /*width*/
      1) && v(
        u,
        "width",
        /*width*/
        H[0]
      ), /*tooltip2_array_values*/
      H[52] && [
        /*tooltip2_array_values*/
        H[52]
      ].length > 0 && /*tooltip*/
      H[32] === "single" ? ye ? (ye.p(H, le), le[1] & /*tooltip2_array_values, tooltip*/
      2097154 && te(ye, 1)) : (ye = C1(H), ye.c(), te(ye, 1), ye.m(f, ee)) : ye && (We(), ue(ye, 1, 1, () => {
        ye = null;
      }), Be());
      let Mt = W;
      W = et(H), W === Mt ? ~W && Qe[W].p(H, le) : (K && (We(), ue(Qe[Mt], 1, 1, () => {
        Qe[Mt] = null;
      }), Be()), ~W ? (K = Qe[W], K ? K.p(H, le) : (K = Qe[W] = He[W](H), K.c()), te(K, 1), K.m(f, se)) : K = null), /*$hovered_legend*/
      H[75] ? qe ? (qe.p(H, le), le[2] & /*$hovered_legend*/
      8192 && te(qe, 1)) : (qe = L1(H), qe.c(), te(qe, 1), qe.m(f, null)) : qe && (We(), ue(qe, 1, 1, () => {
        qe = null;
      }), Be());
    },
    i(H) {
      if (!fe) {
        te(E);
        for (let le = 0; le < de.length; le += 1)
          te(a[le]);
        te(d.$$.fragment, H);
        for (let le = 0; le < pt.length; le += 1)
          te(c[le]);
        te(Je), te(S.$$.fragment, H), te(Ue), te(Xe), te(ae), te(me), te(be), te(Q), te(Ae), te(ye), te(K), te(qe), fe = !0;
      }
    },
    o(H) {
      ue(E);
      for (let le = 0; le < a.length; le += 1)
        ue(a[le]);
      ue(d.$$.fragment, H);
      for (let le = 0; le < c.length; le += 1)
        ue(c[le]);
      ue(Je), ue(S.$$.fragment, H), ue(Ue), ue(Xe), ue(ae), ue(me), ue(be), ue(Q), ue(Ae), ue(ye), ue(K), ue(qe), fe = !1;
    },
    d(H) {
      H && (Z(t), Z(n), Z(i), Z(l), Z(f)), B && B.d(H), A && A.d(), E && E.d(H);
      for (let le = 0; le < a.length; le += 1)
        a[le].d();
      je(d);
      for (let le = 0; le < c.length; le += 1)
        c[le].d();
      Je && Je.d(), je(S), Ue && Ue.d(), $e && $e.d(), ut && ut.d(), Xe && Xe.d(), ae && ae.d(), me && me.d(), be && be.d(), Q && Q.d(), Ae && Ae.d(), ye && ye.d(), ~W && Qe[W].d(), qe && qe.d(), ce(), re = !1, Zt(J);
    }
  };
}
const ov = "XYChart", tf = 30, Wr = 40;
let Br = 20;
const Pi = 15, Qo = 5;
function E1(e) {
  requestAnimationFrame(() => {
    e();
  });
}
function fv(e, t, n) {
  let i, l, f, u, a, _;
  wt(e, Ji, (U) => n(75, _ = U));
  let { data: h = [] } = t, { width: d = 800 } = t, { show_legend: c } = t, { custom_tooltip_data: g } = t, { header: w } = t, { title_align: p } = t, { title_color: S } = t, { title_font_size: x } = t, { title_font_weight: T } = t, { title_padding: z } = t, { height: C = 400 } = t, { xaxis_ticks: F = 6 } = t, { format_xaxis: R } = t, { dx: I = "0em" } = t, { dy: G = "0em" } = t, { rotation_xaxis: D = 0 } = t, { font_size_xaxis: ee = 14 } = t, { font_size_xticks: W = 12 } = t, { scale_x: K = "linear" } = t, { dominant_baseline_x_axis: se = "middle" } = t, { text_anchor_x_axis: ce = "middle" } = t, { line_type_axis_trigger: fe = "none" } = t, { x_axis_type: re } = t, { x_label: J } = t, { yaxis_ticks: B = 6 } = t, { format_yaxis: A = ",.3r" } = t, { font_size_yaxis: E = 14 } = t, { font_size_yticks: de = 12 } = t, { format_tooltip: he = "" } = t, { y_label: pt } = t, { segments: Kt } = t, { annotations: Je } = t, { arrows: Ue } = t, { segments_df: $e } = t, { arrows_df: ut } = t, { annotations_df: Xe } = t, { show_legend_segments: ae } = t, { type: me } = t, { tooltip: be } = t, { interval: Q } = t, { time_interval: Ae } = t, { time_series_interval: ye = "daily" } = t, { background_color_tt: He } = t, { opacity_tt: Qe } = t, { animation_params_list: et } = t, { justify_content_tooltip: qe } = t, { font_size_tooltip: H } = t, { padding_tooltip: le } = t, { text_color_tooltip: Me } = t, { border_color_tooltip: xt } = t, { show_delay_tooltip: Mt } = t, { border_style_tooltip: Yt } = t, { border_width_tooltip: ct } = t, { tooltip_position: Tt } = t, { crosshair: $t } = t, { x_range: yt } = t, { y_range: St } = t, en = [];
  function Nn(U) {
    let Ft = [];
    Ft = Object.keys(zt).filter((Ot) => !U.includes(Ot));
    for (let Ot = 0; Ot < U.length; Ot++)
      n(62, zt[U[Ot]] = !0, zt);
    for (let Ot = 0; Ot < Ft.length; Ot++)
      n(62, zt[Ft[Ot]] = !1, zt);
    return [zt, Ft, en];
  }
  let tn = Wr, ln = 20, Jn = Wr, cn, Mn = 10, on, Tn, zt = {}, Un = [], gn, At = null, Sn = { x: 0, y: 0 }, zn = !1, Qn, Vn, An = [], V = [], tt = [], Ct = [], fn = [], un = null, Pn = null, ri, si = [];
  const Xr = (U) => U.filter((Ft) => Ft.y !== null);
  let lr = [], or = [];
  const qr = Ko.debounce(
    (U) => {
      n(67, lr = U);
    },
    0
  ), Gr = Ko.debounce(
    (U) => {
      n(68, or = U);
    },
    0
  );
  let Cn = {}, dn = {}, Y, Lt, vt, Si = C - 40, zi = 40;
  function fr() {
    const Ft = document.createElement("canvas").getContext("2d"), Ot = (Wl, af) => {
      Ft.font = `${af}px Arial`;
      const { width: Bl } = Ft.measureText(Wl), Hl = Ft.measureText("M").actualBoundingBoxAscent + Ft.measureText("M").actualBoundingBoxDescent + 1;
      return { width: Bl, height: Hl };
    }, Kr = Ot(vt, de);
    n(63, tn = Kr.width);
    const uf = Ot(pt, E);
    n(50, Mn = uf.height);
    const Jr = Ot(f, W);
    Jn = Jr.width, cn = Jr.height;
    const ur = Ot("M", ee);
    n(51, on = ur.height), n(83, ln = _a(Jn, cn, D)), n(59, Si = C - ln - on - cn - Pi - Qo), n(60, zi = tn + Mn + Pi + Qo);
  }
  Ju(fr);
  let Fn, _i;
  const Ai = (U) => n(64, Tn = U), Zr = (U) => n(62, zt[U] = !zt[U], zt), jr = () => n(64, Tn = null);
  function nf(U) {
    At = U, n(52, At);
  }
  function Ul(U) {
    Sn = U, n(65, Sn);
  }
  function Pl(U) {
    zn = U, n(66, zn);
  }
  function Fl(U) {
    zn = U, n(66, zn);
  }
  function rf(U) {
    Sn = U, n(65, Sn);
  }
  function lf(U) {
    At = U, n(52, At);
  }
  function of() {
    d = this.clientWidth, n(0, d);
  }
  const ff = () => xc.set(null);
  return e.$$set = (U) => {
    "data" in U && n(76, h = U.data), "width" in U && n(0, d = U.width), "show_legend" in U && n(2, c = U.show_legend), "custom_tooltip_data" in U && n(3, g = U.custom_tooltip_data), "header" in U && n(4, w = U.header), "title_align" in U && n(5, p = U.title_align), "title_color" in U && n(6, S = U.title_color), "title_font_size" in U && n(7, x = U.title_font_size), "title_font_weight" in U && n(8, T = U.title_font_weight), "title_padding" in U && n(77, z = U.title_padding), "height" in U && n(9, C = U.height), "xaxis_ticks" in U && n(78, F = U.xaxis_ticks), "format_xaxis" in U && n(79, R = U.format_xaxis), "dx" in U && n(10, I = U.dx), "dy" in U && n(11, G = U.dy), "rotation_xaxis" in U && n(12, D = U.rotation_xaxis), "font_size_xaxis" in U && n(13, ee = U.font_size_xaxis), "font_size_xticks" in U && n(14, W = U.font_size_xticks), "scale_x" in U && n(80, K = U.scale_x), "dominant_baseline_x_axis" in U && n(15, se = U.dominant_baseline_x_axis), "text_anchor_x_axis" in U && n(16, ce = U.text_anchor_x_axis), "line_type_axis_trigger" in U && n(1, fe = U.line_type_axis_trigger), "x_axis_type" in U && n(17, re = U.x_axis_type), "x_label" in U && n(18, J = U.x_label), "yaxis_ticks" in U && n(19, B = U.yaxis_ticks), "format_yaxis" in U && n(20, A = U.format_yaxis), "font_size_yaxis" in U && n(21, E = U.font_size_yaxis), "font_size_yticks" in U && n(22, de = U.font_size_yticks), "format_tooltip" in U && n(23, he = U.format_tooltip), "y_label" in U && n(24, pt = U.y_label), "segments" in U && n(25, Kt = U.segments), "annotations" in U && n(26, Je = U.annotations), "arrows" in U && n(27, Ue = U.arrows), "segments_df" in U && n(28, $e = U.segments_df), "arrows_df" in U && n(29, ut = U.arrows_df), "annotations_df" in U && n(30, Xe = U.annotations_df), "show_legend_segments" in U && n(31, ae = U.show_legend_segments), "type" in U && n(49, me = U.type), "tooltip" in U && n(32, be = U.tooltip), "interval" in U && n(33, Q = U.interval), "time_interval" in U && n(34, Ae = U.time_interval), "time_series_interval" in U && n(35, ye = U.time_series_interval), "background_color_tt" in U && n(36, He = U.background_color_tt), "opacity_tt" in U && n(37, Qe = U.opacity_tt), "animation_params_list" in U && n(38, et = U.animation_params_list), "justify_content_tooltip" in U && n(39, qe = U.justify_content_tooltip), "font_size_tooltip" in U && n(40, H = U.font_size_tooltip), "padding_tooltip" in U && n(41, le = U.padding_tooltip), "text_color_tooltip" in U && n(42, Me = U.text_color_tooltip), "border_color_tooltip" in U && n(43, xt = U.border_color_tooltip), "show_delay_tooltip" in U && n(44, Mt = U.show_delay_tooltip), "border_style_tooltip" in U && n(45, Yt = U.border_style_tooltip), "border_width_tooltip" in U && n(46, ct = U.border_width_tooltip), "tooltip_position" in U && n(47, Tt = U.tooltip_position), "crosshair" in U && n(48, $t = U.crosshair), "x_range" in U && n(81, yt = U.x_range), "y_range" in U && n(82, St = U.y_range);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*line_type_axis_trigger*/
    2 && n(1, fe = fe || "none"), e.$$.dirty[1] & /*type, time_interval*/
    262152 | e.$$.dirty[2] & /*data*/
    16384 && n(84, Un = Tw(h, me, Ae)), e.$$.dirty[2] & /*data, names, start*/
    25182208 && (n(85, gn = [...new Set(h.map((U) => U.id))]), n(87, Vn = h.map((U) => ({
      id: U.id,
      include_legend: U.include_legend,
      type: U.type,
      color: U.colors
    }))), n(86, Qn = Nn(gn)), n(62, zt = Qn[0]), Qn[1]), e.$$.dirty[2] & /*categories*/
    1 && n(56, ri = Object.keys(zt).filter((U) => zt[U])), e.$$.dirty[2] & /*names*/
    8388608 && n(56, ri = gn), e.$$.dirty[0] & /*width*/
    1 | e.$$.dirty[1] & /*current_categories, filtered_data, y_lines_spacing, x_lines_spacing, type*/
    843317248 | e.$$.dirty[2] & /*dataset, scale_x, x_range, y_range, line_generator_scales, scales, line_generator, all_lines, all_points*/
    2086404096 && (n(53, An = Un.filter(({ id: U }) => ri.includes(U))), n(88, V = zw(An, zi, Si, d, Br, me, K, yt, St)), n(90, Ct = V.slice(1, 3)), n(54, un = Ct[0]), n(55, Pn = Ct[1]), n(89, tt = V[0]), n(91, fn = Sw(An, ri, tt)), n(91, fn = fn.filter(({ id: U }) => ri.includes(U))), n(92, si = fn.filter(({ type: U }) => ["points"].includes(U))), si.forEach((U) => {
      U.data = Xr(U.data);
    }), n(91, fn = fn.filter(({ type: U }) => ["line", "density", "bands"].includes(U))), E1(() => qr(fn)), E1(() => Gr(si))), e.$$.dirty[0] & /*segments_df, x_axis_type*/
    268566528 | e.$$.dirty[1] & /*y_scale, x_scale, time_interval*/
    25165832 | e.$$.dirty[2] & /*dataset*/
    4194304 && n(74, i = Aw(Un, $e, re, Pn, un, Ae)), e.$$.dirty[2] & /*include_legend*/
    33554432 && n(73, l = Vn.filter((U) => U.include_legend !== !1)), e.$$.dirty[1] & /*tooltip2_array_values, tooltip, x_lines_spacing, x_scale*/
    278921218 && At && be === "vertical_line" && At.length > 0 && (n(69, Cn.y1 = Si, Cn), n(69, Cn.y2 = Br, Cn), n(69, Cn.x1 = un(At[0].data.x), Cn), n(69, Cn.x2 = un(At[0].data.x), Cn)), e.$$.dirty[0] & /*width*/
    1 | e.$$.dirty[1] & /*tooltip2_array_values, tooltip, y_scale, y_lines_spacing*/
    555745282 && At && be === "vertical_line" && At.length > 0 && (n(70, dn.y1 = Pn(At[0].data.y), dn), n(70, dn.y2 = Pn(At[0].data.y), dn), n(70, dn.x1 = zi, dn), n(70, dn.x2 = d, dn)), e.$$.dirty[0] & /*format_yaxis*/
    1048576 && n(58, Lt = hn(A)), e.$$.dirty[0] & /*yaxis_ticks*/
    524288 | e.$$.dirty[1] & /*y_scale*/
    16777216 && n(57, Y = Pn.ticks(B)), e.$$.dirty[1] & /*ticks, format_number*/
    201326592) {
      let U = 0;
      Y.forEach((Ft) => {
        const Ot = Lt(Ft).toString();
        Ot.length > U && (U = Ot.length, vt = Ot);
      });
    }
    e.$$.dirty[1] & /*type, x_scale, format_x_axis*/
    1082392576 | e.$$.dirty[2] & /*format_xaxis, xaxis_ticks, all_points, all_lines*/
    1610809344 && (me === "timeseries" ? (n(61, Fn = sa(R)), n(93, _i = un.ticks(F).map((U) => Fn(U)))) : (me === "points" || me === "line" || me === "density") && (typeof si.concat(fn)[0].data[0].x == "number" ? (n(61, Fn = hn(R)), n(93, _i = un.ticks(F).map((U) => hn(U)))) : (n(61, Fn = "null"), n(93, _i = un.domain())))), e.$$.dirty[3] & /*all_x_axis_tick_labels*/
    1 && (f = _i.reduce((U, Ft) => U.length > Ft.length ? U : Ft)), e.$$.dirty[0] & /*height*/
    512 | e.$$.dirty[1] & /*label_height_x_axis*/
    1048576 | e.$$.dirty[2] & /*x_ticks_label_rotation_buffer*/
    2097152 && n(72, u = C - ln - on - Pi), e.$$.dirty[1] & /*label_height*/
    524288, e.$$.dirty[1] & /*x_scale*/
    8388608 | e.$$.dirty[2] & /*xaxis_ticks*/
    65536 && n(71, a = typeof un.domain()[0] == "string" ? un.domain() : un.ticks(F));
  }, [
    d,
    fe,
    c,
    g,
    w,
    p,
    S,
    x,
    T,
    C,
    I,
    G,
    D,
    ee,
    W,
    se,
    ce,
    re,
    J,
    B,
    A,
    E,
    de,
    he,
    pt,
    Kt,
    Je,
    Ue,
    $e,
    ut,
    Xe,
    ae,
    be,
    Q,
    Ae,
    ye,
    He,
    Qe,
    et,
    qe,
    H,
    le,
    Me,
    xt,
    Mt,
    Yt,
    ct,
    Tt,
    $t,
    me,
    Mn,
    on,
    At,
    An,
    un,
    Pn,
    ri,
    Y,
    Lt,
    Si,
    zi,
    Fn,
    zt,
    tn,
    Tn,
    Sn,
    zn,
    lr,
    or,
    Cn,
    dn,
    a,
    u,
    l,
    i,
    _,
    h,
    z,
    F,
    R,
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
    Ai,
    Zr,
    jr,
    nf,
    Ul,
    Pl,
    Fl,
    rf,
    lf,
    of,
    ff
  ];
}
class uv extends ht {
  constructor(t) {
    super(), _t(
      this,
      t,
      fv,
      lv,
      ft,
      {
        data: 76,
        width: 0,
        show_legend: 2,
        custom_tooltip_data: 3,
        header: 4,
        title_align: 5,
        title_color: 6,
        title_font_size: 7,
        title_font_weight: 8,
        title_padding: 77,
        height: 9,
        xaxis_ticks: 78,
        format_xaxis: 79,
        dx: 10,
        dy: 11,
        rotation_xaxis: 12,
        font_size_xaxis: 13,
        font_size_xticks: 14,
        scale_x: 80,
        dominant_baseline_x_axis: 15,
        text_anchor_x_axis: 16,
        line_type_axis_trigger: 1,
        x_axis_type: 17,
        x_label: 18,
        yaxis_ticks: 19,
        format_yaxis: 20,
        font_size_yaxis: 21,
        font_size_yticks: 22,
        format_tooltip: 23,
        y_label: 24,
        segments: 25,
        annotations: 26,
        arrows: 27,
        segments_df: 28,
        arrows_df: 29,
        annotations_df: 30,
        show_legend_segments: 31,
        type: 49,
        tooltip: 32,
        interval: 33,
        time_interval: 34,
        time_series_interval: 35,
        background_color_tt: 36,
        opacity_tt: 37,
        animation_params_list: 38,
        justify_content_tooltip: 39,
        font_size_tooltip: 40,
        padding_tooltip: 41,
        text_color_tooltip: 42,
        border_color_tooltip: 43,
        show_delay_tooltip: 44,
        border_style_tooltip: 45,
        border_width_tooltip: 46,
        tooltip_position: 47,
        crosshair: 48,
        x_range: 81,
        y_range: 82
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
}
function av(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = Ce("rect"), v(
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
        dt(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[29]
        ),
        dt(
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
          Gt,
          /*mode*/
          e[11] === "grouped" ? { x: -200, duration: 1e3, delay: 50 } : { y: 200, duration: 1e3, delay: 50 }
        ), i.start();
      });
    },
    o: Pe,
    d(u) {
      u && Z(t), l = !1, Zt(f);
    }
  };
}
function sv(e, t, n) {
  let i, l, f, u, { x: a } = t, { y: _ } = t, { width: h } = t, { height: d } = t, { color: c } = t, { tweenOptions: g } = t, { y_value: w } = t, { x_value: p } = t, { group: S } = t, { hover_legend: x } = t, { current_categories: T } = t, { mode: z } = t, { x_cat: C } = t, { xScale: F } = t, { hovered_y: R } = t, { hovered_x: I } = t, { hovered_group: G } = t, { hovered_color: D } = t, { hovered_x_cat: ee } = t, { tooltip_axis_x: W } = t, K = Ut(a, g == null ? void 0 : g.x);
  wt(e, K, (A) => n(13, i = A));
  let se = Ut(_, g == null ? void 0 : g.y);
  wt(e, se, (A) => n(14, l = A));
  let ce = Ut(h, g == null ? void 0 : g.width);
  wt(e, ce, (A) => n(15, f = A));
  let fe = Ut(d, g == null ? void 0 : g.height);
  wt(e, fe, (A) => n(16, u = A));
  function re(A, E, de, he, pt, Kt, Je, Ue) {
    n(0, R = E), n(1, I = Ue === "grouped" ? de + he / 2 : F(pt) + he / 2), n(2, G = Kt), n(3, D = Je), n(22, ee = pt), n(23, W = F(pt) + he / 2);
  }
  const J = (A) => re(A, w, p, h, C, S, c, z), B = () => {
    n(0, R = null), n(1, I = null), n(2, G = null), n(3, D = null);
  };
  return e.$$set = (A) => {
    "x" in A && n(24, a = A.x), "y" in A && n(25, _ = A.y), "width" in A && n(4, h = A.width), "height" in A && n(26, d = A.height), "color" in A && n(5, c = A.color), "tweenOptions" in A && n(27, g = A.tweenOptions), "y_value" in A && n(6, w = A.y_value), "x_value" in A && n(7, p = A.x_value), "group" in A && n(8, S = A.group), "hover_legend" in A && n(9, x = A.hover_legend), "current_categories" in A && n(10, T = A.current_categories), "mode" in A && n(11, z = A.mode), "x_cat" in A && n(12, C = A.x_cat), "xScale" in A && n(28, F = A.xScale), "hovered_y" in A && n(0, R = A.hovered_y), "hovered_x" in A && n(1, I = A.hovered_x), "hovered_group" in A && n(2, G = A.hovered_group), "hovered_color" in A && n(3, D = A.hovered_color), "hovered_x_cat" in A && n(22, ee = A.hovered_x_cat), "tooltip_axis_x" in A && n(23, W = A.tooltip_axis_x);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions*/
    150994944 && K.set(a, g == null ? void 0 : g.x), e.$$.dirty & /*y, tweenOptions*/
    167772160 && se.set(_, g == null ? void 0 : g.y), e.$$.dirty & /*width, tweenOptions*/
    134217744 && ce.set(h, g == null ? void 0 : g.width), e.$$.dirty & /*height, tweenOptions*/
    201326592 && fe.set(d, g == null ? void 0 : g.height);
  }, [
    R,
    I,
    G,
    D,
    h,
    c,
    w,
    p,
    S,
    x,
    T,
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
    ee,
    W,
    a,
    _,
    d,
    g,
    F,
    J,
    B
  ];
}
class _v extends ht {
  constructor(t) {
    super(), _t(this, t, sv, av, ft, {
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
function hv(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = Ce("text"), n = ze(
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
      j(u, t, a), X(t, n);
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
        f = Fi(t, pn, { duration: 1e3, easing: Cl }), f.start();
      }));
    },
    o: Pe,
    d(u) {
      u && Z(t);
    }
  };
}
function cv(e, t, n) {
  let i, l, { x: f } = t, { y: u } = t, { tweenOptions: a } = t, { text: _ } = t, { font_size_xticks: h } = t, { rotation: d } = t, { colour_text: c } = t, { text_anchor_x_axis: g } = t, { dominant_baseline_x_axis: w } = t, { dx: p } = t, { dy: S } = t, x = Ut(u, a == null ? void 0 : a.y);
  wt(e, x, (z) => n(9, l = z));
  let T = Ut(f, a == null ? void 0 : a.x);
  return wt(e, T, (z) => n(8, i = z)), e.$$set = (z) => {
    "x" in z && n(12, f = z.x), "y" in z && n(13, u = z.y), "tweenOptions" in z && n(14, a = z.tweenOptions), "text" in z && n(0, _ = z.text), "font_size_xticks" in z && n(1, h = z.font_size_xticks), "rotation" in z && n(2, d = z.rotation), "colour_text" in z && n(3, c = z.colour_text), "text_anchor_x_axis" in z && n(4, g = z.text_anchor_x_axis), "dominant_baseline_x_axis" in z && n(5, w = z.dominant_baseline_x_axis), "dx" in z && n(6, p = z.dx), "dy" in z && n(7, S = z.dy);
  }, e.$$.update = () => {
    e.$$.dirty & /*y, tweenOptions, x*/
    28672 && Rl().then(() => {
      x.set(u, a == null ? void 0 : a.y), T.set(f, a == null ? void 0 : a.x);
    });
  }, [
    _,
    h,
    d,
    c,
    g,
    w,
    p,
    S,
    i,
    l,
    x,
    T,
    f,
    u,
    a
  ];
}
class da extends ht {
  constructor(t) {
    super(), _t(this, t, cv, hv, ft, {
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
function gv(e) {
  let t, n, i = (
    /*tooltip_df*/
    e[3].x + ""
  ), l, f, u, a, _, h, d, c = (
    /*tooltip_df*/
    e[3].group + ""
  ), g, w, p, S, x = (
    /*tooltip_df*/
    e[3].y + ""
  ), T, z, C, F, R, I, G;
  return {
    c() {
      t = _e("div"), n = _e("div"), l = ze(i), f = ve(), u = _e("div"), a = _e("div"), _ = _e("span"), h = ve(), d = _e("div"), g = ze(c), w = ze(":"), p = ve(), S = _e("div"), T = ze(x), z = ve(), C = _e("div"), F = ve(), R = _e("div"), y(
        _,
        "background",
        /*tooltip_df*/
        e[3].color
      ), y(_, "width", "9px"), y(_, "height", "9px"), y(_, "border-radius", "50%"), y(_, "margin", "3px"), y(_, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(a, "display", "flex"), y(S, "font-weight", "bold"), y(u, "padding", "5px"), y(u, "font-size", "14px"), y(u, "display", "flex"), y(u, "flex-direction", "row"), y(u, "justify-content", "space-between"), y(u, "gap", "10px"), y(C, "position", "absolute"), y(C, "bottom", "-5px"), y(C, "left", "50%"), y(C, "transform", "translateX(-50%)"), y(C, "width", "0"), y(C, "height", "0"), y(C, "border-left", "5px solid transparent"), y(C, "border-right", "5px solid transparent"), y(C, "border-top", "5px solid #ccc"), y(R, "position", "absolute"), y(R, "bottom", "-4px"), y(R, "left", "50%"), y(R, "transform", "translateX(-50%)"), y(R, "width", "0"), y(R, "height", "0"), y(R, "border-left", "4px solid transparent"), y(R, "border-right", "4px solid transparent"), y(R, "border-top", "4px solid #fff"), v(t, "class", "tooltip-bars"), y(t, "transition", "all 500ms"), y(t, "position", "absolute"), y(
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
    m(D, ee) {
      j(D, t, ee), X(t, n), X(n, l), X(t, f), X(t, u), X(u, a), X(a, _), X(u, h), X(u, d), X(d, g), X(d, w), X(u, p), X(u, S), X(S, T), X(t, z), X(t, C), X(t, F), X(t, R), G = !0;
    },
    p(D, [ee]) {
      (!G || ee & /*tooltip_df*/
      8) && i !== (i = /*tooltip_df*/
      D[3].x + "") && Oe(l, i), (!G || ee & /*tooltip_df*/
      8) && y(
        _,
        "background",
        /*tooltip_df*/
        D[3].color
      ), (!G || ee & /*tooltip_df*/
      8) && c !== (c = /*tooltip_df*/
      D[3].group + "") && Oe(g, c), (!G || ee & /*tooltip_df*/
      8) && x !== (x = /*tooltip_df*/
      D[3].y + "") && Oe(T, x), (!G || ee & /*yScale, hovered_y*/
      5) && y(
        t,
        "top",
        /*yScale*/
        D[0](
          /*hovered_y*/
          D[2]
        ) - 5 + "px"
      ), (!G || ee & /*hovered_x*/
      2) && y(
        t,
        "left",
        /*hovered_x*/
        D[1] + "px"
      );
    },
    i(D) {
      G || (it(() => {
        G && (I || (I = Pt(t, Gt, { duration: 1e3 }, !0)), I.run(1));
      }), G = !0);
    },
    o(D) {
      I || (I = Pt(t, Gt, { duration: 1e3 }, !1)), I.run(0), G = !1;
    },
    d(D) {
      D && Z(t), D && I && I.end();
    }
  };
}
function dv(e, t, n) {
  let i, { yScale: l } = t, { hovered_x: f } = t, { hovered_y: u } = t, { hovered_group: a } = t, { hovered_color: _ } = t, { hovered_x_cat: h } = t;
  return e.$$set = (d) => {
    "yScale" in d && n(0, l = d.yScale), "hovered_x" in d && n(1, f = d.hovered_x), "hovered_y" in d && n(2, u = d.hovered_y), "hovered_group" in d && n(4, a = d.hovered_group), "hovered_color" in d && n(5, _ = d.hovered_color), "hovered_x_cat" in d && n(6, h = d.hovered_x_cat);
  }, e.$$.update = () => {
    e.$$.dirty & /*hovered_x_cat, hovered_color, hovered_group, hovered_y*/
    116 && n(3, i = {
      x: h,
      color: _,
      group: a,
      y: u
    });
  }, [
    l,
    f,
    u,
    i,
    a,
    _,
    h
  ];
}
class mv extends ht {
  constructor(t) {
    super(), _t(this, t, dv, gv, ft, {
      yScale: 0,
      hovered_x: 1,
      hovered_y: 2,
      hovered_group: 4,
      hovered_color: 5,
      hovered_x_cat: 6
    });
  }
}
function R1(e, t, n) {
  const i = e.slice();
  return i[14] = t[n], i;
}
function I1(e) {
  let t, n, i = (
    /*tooltip_data*/
    e[0][0].x + ""
  ), l, f, u, a, _, h, d = ke(
    /*tooltip_data*/
    e[0]
  ), c = [];
  for (let g = 0; g < d.length; g += 1)
    c[g] = O1(R1(e, d, g));
  return {
    c() {
      t = _e("div"), n = _e("h6"), l = ze(i), f = ve(), u = _e("div");
      for (let g = 0; g < c.length; g += 1)
        c[g].c();
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
      j(g, t, w), X(t, n), X(n, l), X(t, f), X(t, u);
      for (let p = 0; p < c.length; p += 1)
        c[p] && c[p].m(u, null);
      a = nr(
        t,
        /*div1_elementresize_handler*/
        e[13].bind(t)
      ), h = !0;
    },
    p(g, w) {
      if ((!h || w & /*tooltip_data*/
      1) && i !== (i = /*tooltip_data*/
      g[0][0].x + "") && Oe(l, i), w & /*format_number, tooltip_data*/
      17) {
        d = ke(
          /*tooltip_data*/
          g[0]
        );
        let p;
        for (p = 0; p < d.length; p += 1) {
          const S = R1(g, d, p);
          c[p] ? c[p].p(S, w) : (c[p] = O1(S), c[p].c(), c[p].m(u, null));
        }
        for (; p < c.length; p += 1)
          c[p].d(1);
        c.length = d.length;
      }
      (!h || w & /*yPosition*/
      32) && y(
        t,
        "top",
        /*yPosition*/
        g[5] + "px"
      ), (!h || w & /*x*/
      2) && y(
        t,
        "left",
        /*x*/
        g[1] + "px"
      );
    },
    i(g) {
      h || (g && it(() => {
        h && (_ || (_ = Pt(t, Gt, {}, !0)), _.run(1));
      }), h = !0);
    },
    o(g) {
      g && (_ || (_ = Pt(t, Gt, {}, !1)), _.run(0)), h = !1;
    },
    d(g) {
      g && Z(t), xn(c, g), a(), g && _ && _.end();
    }
  };
}
function O1(e) {
  let t, n, i, l, f, u, a = (
    /*bars*/
    e[14].group + ""
  ), _, h, d, c = (
    /*format_number*/
    e[4](
      /*bars*/
      e[14].y
    ) + ""
  ), g, w;
  return {
    c() {
      t = _e("div"), n = _e("div"), i = _e("div"), l = _e("span"), f = ve(), u = _e("span"), _ = ze(a), h = ve(), d = _e("div"), g = ze(c), w = ve(), y(
        l,
        "background",
        /*bars*/
        e[14].colors
      ), y(l, "width", "9px"), y(l, "height", "9px"), y(l, "border-radius", "50%"), y(l, "margin", "3px"), y(l, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(i, "width", "18px"), y(i, "display", "flex"), y(i, "align-items", "center"), y(i, "justify-content", "center"), y(n, "display", "flex"), y(n, "align-items", "center"), v(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(p, S) {
      j(p, t, S), X(t, n), X(n, i), X(i, l), X(n, f), X(n, u), X(u, _), X(t, h), X(t, d), X(d, g), X(t, w);
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
      17 && c !== (c = /*format_number*/
      p[4](
        /*bars*/
        p[14].y
      ) + "") && Oe(g, c);
    },
    d(p) {
      p && Z(t);
    }
  };
}
function yv(e) {
  let t, n = (
    /*tooltip_data*/
    e[0] && I1(e)
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
      1 && te(n, 1)) : (n = I1(i), n.c(), te(n, 1), n.m(t.parentNode, t)) : n && (We(), ue(n, 1, 1, () => {
        n = null;
      }), Be());
    },
    i(i) {
      te(n);
    },
    o(i) {
      ue(n);
    },
    d(i) {
      i && Z(t), n && n.d(i);
    }
  };
}
const D1 = 0;
function bv(e, t, n) {
  let i, l, { x: f } = t, { y: u } = t, { format_tooltip: a } = t, { height: _ } = t, { width: h } = t, { margin: d } = t, { buffer: c } = t, { tooltip_data: g } = t, w, p, S;
  function x() {
    w = this.clientWidth, p = this.clientHeight, n(3, w), n(2, p);
  }
  return e.$$set = (T) => {
    "x" in T && n(1, f = T.x), "y" in T && n(6, u = T.y), "format_tooltip" in T && n(7, a = T.format_tooltip), "height" in T && n(8, _ = T.height), "width" in T && n(9, h = T.width), "margin" in T && n(10, d = T.margin), "buffer" in T && n(11, c = T.buffer), "tooltip_data" in T && n(0, g = T.tooltip_data);
  }, e.$$.update = () => {
    e.$$.dirty & /*tooltip_data, maxYValue*/
    4097 && (n(12, S = Math.max(...g.map((T) => T.y))), n(0, g = g.map((T) => ({ ...T })).sort((T, z) => z.y - T.y || z.y - S))), e.$$.dirty & /*y, tooltipHeight, height, margin, buffer*/
    3396 && n(5, i = u + p > _ - d - c ? u - p - D1 - d - c : u + D1), e.$$.dirty & /*format_tooltip*/
    128 && n(4, l = hn(a));
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
    h,
    d,
    c,
    S,
    x
  ];
}
class wv extends ht {
  constructor(t) {
    super(), _t(this, t, bv, yv, ft, {
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
function N1(e, t, n) {
  const i = e.slice();
  return i[27] = t[n], i[103] = n, i;
}
function U1(e, t, n) {
  const i = e.slice();
  return i[27] = t[n], i[103] = n, i;
}
function P1(e, t, n) {
  const i = e.slice();
  return i[105] = t[n], i;
}
function F1(e, t, n) {
  const i = e.slice();
  return i[108] = t[n].group, i[109] = t[n].colors, i;
}
function W1(e) {
  let t, n;
  return {
    c() {
      t = _e("div"), n = ze(
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
        e[28] + er + "px"
      );
    },
    m(i, l) {
      j(i, t, l), X(t, n);
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
        i[28] + er + "px"
      );
    },
    d(i) {
      i && Z(t);
    }
  };
}
function B1(e) {
  let t, n = ke(
    /*legend_cats*/
    e[56]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = H1(F1(e, n, l));
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
          const a = F1(l, n, u);
          i[u] ? i[u].p(a, f) : (i[u] = H1(a), i[u].c(), i[u].m(t.parentNode, t));
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
function H1(e) {
  let t, n, i, l = (
    /*group*/
    e[108].replace(/\.\d+$/, "") + ""
  ), f, u, a, _, h;
  function d() {
    return (
      /*mouseover_handler*/
      e[75](
        /*group*/
        e[108]
      )
    );
  }
  function c() {
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
      t = _e("p"), n = _e("span"), i = ve(), f = ze(l), u = ve(), y(
        n,
        "background",
        /*colors*/
        e[109]
      ), y(n, "width", "8px"), y(n, "height", "8px"), y(n, "display", "inline-block"), y(n, "border-radius", "50%"), y(n, "border", "1px solid rgba(0, 0, 0, 0.5)"), v(t, "style", a = /*hover_legend*/
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
    m(g, w) {
      j(g, t, w), X(t, n), X(t, i), X(t, f), X(t, u), _ || (h = [
        dt(t, "mouseover", d),
        dt(t, "click", c)
      ], _ = !0);
    },
    p(g, w) {
      e = g, w[1] & /*legend_cats*/
      33554432 && y(
        n,
        "background",
        /*colors*/
        e[109]
      ), w[1] & /*legend_cats*/
      33554432 && l !== (l = /*group*/
      e[108].replace(/\.\d+$/, "") + "") && Oe(f, l), w[1] & /*hover_legend, legend_cats, current_categories, categories*/
      33558568 && a !== (a = /*hover_legend*/
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
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;") && v(t, "style", a);
    },
    d(g) {
      g && Z(t), _ = !1, Zt(h);
    }
  };
}
function Y1(e, t) {
  let n, i, l;
  return i = new ga({
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
      l || (te(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function X1(e) {
  let t, n = (
    /*closestLabelX*/
    e[54] !== 0 && /*nextLabelX*/
    e[53] !== 0 && q1(e)
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
      i[53] !== 0 ? n ? n.p(i, l) : (n = q1(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && Z(t), n && n.d(i);
    }
  };
}
function q1(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = Ce("rect"), v(t, "style", "fill: rgba(0, 0, 0, 0.1); /* Adjust color and opacity as needed */ position: absolute; top: 0; z-index: -1; transition: 0.2s ease;"), v(t, "x", n = /*closestLabelX*/
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
function G1(e, t) {
  let n, i, l, f, u, a, _, h, d;
  function c(z) {
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
  let T = {
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
    t[44] !== void 0 && (T.hovered_y = /*hovered_y*/
    t[44]), /*hovered_x*/
    t[45] !== void 0 && (T.hovered_x = /*hovered_x*/
    t[45]), /*hovered_group*/
    t[46] !== void 0 && (T.hovered_group = /*hovered_group*/
    t[46]), /*hovered_color*/
    t[47] !== void 0 && (T.hovered_color = /*hovered_color*/
    t[47]), /*hovered_x_cat*/
    t[38] !== void 0 && (T.hovered_x_cat = /*hovered_x_cat*/
    t[38]), /*tooltip_axis_x*/
    t[48] !== void 0 && (T.tooltip_axis_x = /*tooltip_axis_x*/
    t[48]), i = new _v({ props: T }), st.push(() => It(i, "hovered_y", c)), st.push(() => It(i, "hovered_x", g)), st.push(() => It(i, "hovered_group", w)), st.push(() => It(i, "hovered_color", p)), st.push(() => It(i, "hovered_x_cat", S)), st.push(() => It(i, "tooltip_axis_x", x)), {
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
        const F = {};
        C[1] & /*filtered_data*/
        16 && (F.y_value = /*data*/
        t[27].y), C[1] & /*xScale, filtered_data, xSubgroup*/
        19 && (F.x_value = /*xScale*/
        t[31](
          /*data*/
          t[27].x
        ) + /*xSubgroup*/
        t[32](
          /*data*/
          t[27].group
        )), C[1] & /*filtered_data*/
        16 && (F.x_cat = /*data*/
        t[27].x), C[1] & /*filtered_data*/
        16 && (F.group = /*data*/
        t[27].group), C[0] & /*mode*/
        67108864 | C[1] & /*xScale, filtered_data, xSubgroup*/
        19 && (F.x = /*mode*/
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
        20 && (F.y = /*yScale*/
        t[33](
          /*data*/
          t[27].y
        )), C[1] & /*xSubgroup*/
        2 && (F.width = /*xSubgroup*/
        t[32].bandwidth()), C[1] & /*yScale, filtered_data*/
        20 && (F.height = /*yScale*/
        t[33](
          /*data*/
          t[27].y_start
        ) - /*yScale*/
        t[33](
          /*data*/
          t[27].y
        )), C[1] & /*filtered_data*/
        16 && (F.color = /*data*/
        t[27].colors), C[1] & /*hover_legend*/
        4096 && (F.hover_legend = /*hover_legend*/
        t[43]), C[1] & /*current_categories*/
        32 && (F.current_categories = /*current_categories*/
        t[36]), C[0] & /*mode*/
        67108864 && (F.mode = /*mode*/
        t[26]), C[1] & /*xScale*/
        1 && (F.xScale = /*xScale*/
        t[31]), !l && C[1] & /*hovered_y*/
        8192 && (l = !0, F.hovered_y = /*hovered_y*/
        t[44], Rt(() => l = !1)), !f && C[1] & /*hovered_x*/
        16384 && (f = !0, F.hovered_x = /*hovered_x*/
        t[45], Rt(() => f = !1)), !u && C[1] & /*hovered_group*/
        32768 && (u = !0, F.hovered_group = /*hovered_group*/
        t[46], Rt(() => u = !1)), !a && C[1] & /*hovered_color*/
        65536 && (a = !0, F.hovered_color = /*hovered_color*/
        t[47], Rt(() => a = !1)), !_ && C[1] & /*hovered_x_cat*/
        128 && (_ = !0, F.hovered_x_cat = /*hovered_x_cat*/
        t[38], Rt(() => _ = !1)), !h && C[1] & /*tooltip_axis_x*/
        131072 && (h = !0, F.tooltip_axis_x = /*tooltip_axis_x*/
        t[48], Rt(() => h = !1)), i.$set(F);
      },
      i(z) {
        d || (te(i.$$.fragment, z), d = !0);
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
function Z1(e) {
  let t = [], n = new qu(), i, l, f = ke(
    /*filtered_data*/
    e[35]
  );
  const u = (a) => (
    /*data*/
    a[27].id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = N1(e, f, a), h = u(_);
    n.set(h, t[a] = K1(h, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      i = Le();
    },
    m(a, _) {
      for (let h = 0; h < t.length; h += 1)
        t[h] && t[h].m(a, _);
      j(a, i, _), l = !0;
    },
    p(a, _) {
      _[0] & /*mode, position, colour_text, show_bar_labels, font_size_xticks, rotation_xaxis, text_anchor_x_axis, dominant_baseline_x_axis, dx, dy, names*/
      1199601408 | _[1] & /*xScale, filtered_data, xSubgroup, yScale, x_ticks_spacing, current_categories, iteration*/
      16777527 && (f = ke(
        /*filtered_data*/
        a[35]
      ), We(), t = kn(t, _, u, 1, a, f, n, i.parentNode, Kn, K1, i, N1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          te(t[_]);
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
function pv(e) {
  let t, n;
  return t = new da({
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
          e[32].bandwidth() * $o * /*iteration*/
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
        i[32].bandwidth() * $o * /*iteration*/
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
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function vv(e) {
  let t, n;
  return t = new da({
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
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function j1(e) {
  let t, n;
  return t = new da({
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
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function K1(e, t) {
  let n, i, l, f, u, a;
  const _ = [vv, pv], h = [];
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
  ~(i = d(t)) && (l = h[i] = _[i](t));
  let c = (
    /*show_bar_labels*/
    t[23] && j1(t)
  );
  return {
    key: e,
    first: null,
    c() {
      n = Le(), l && l.c(), f = Le(), c && c.c(), u = Le(), this.first = n;
    },
    m(g, w) {
      j(g, n, w), ~i && h[i].m(g, w), j(g, f, w), c && c.m(g, w), j(g, u, w), a = !0;
    },
    p(g, w) {
      t = g;
      let p = i;
      i = d(t), i === p ? ~i && h[i].p(t, w) : (l && (We(), ue(h[p], 1, 1, () => {
        h[p] = null;
      }), Be()), ~i ? (l = h[i], l ? l.p(t, w) : (l = h[i] = _[i](t), l.c()), te(l, 1), l.m(f.parentNode, f)) : l = null), /*show_bar_labels*/
      t[23] ? c ? (c.p(t, w), w[0] & /*show_bar_labels*/
      8388608 && te(c, 1)) : (c = j1(t), c.c(), te(c, 1), c.m(u.parentNode, u)) : c && (We(), ue(c, 1, 1, () => {
        c = null;
      }), Be());
    },
    i(g) {
      a || (te(l), te(c), a = !0);
    },
    o(g) {
      ue(l), ue(c), a = !1;
    },
    d(g) {
      g && (Z(n), Z(f), Z(u)), ~i && h[i].d(g), c && c.d(g);
    }
  };
}
function J1(e) {
  let t, n, i, l, f, u, a, _, h;
  function d(x) {
    e[84](x);
  }
  function c(x) {
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
    chart: xv,
    tooltip: (
      /*tooltip*/
      e[21]
    ),
    buffer: Vo,
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
    e[53]), n = new o0({ props: S }), st.push(() => It(n, "tooltip2_array_values", d)), st.push(() => It(n, "m", c)), st.push(() => It(n, "listener", g)), st.push(() => It(n, "closestLabelX", w)), st.push(() => It(n, "nextLabelX", p)), {
      c() {
        t = Ce("g"), Ke(n.$$.fragment), v(t, "transform", _ = "translate(" + /*ticks_label_width*/
        (e[42] + /*label_height*/
        e[28] + 10) + " 10)");
      },
      m(x, T) {
        j(x, t, T), Ze(n, t, null), h = !0;
      },
      p(x, T) {
        const z = {};
        T[0] & /*height*/
        128 && (z.height = /*height*/
        x[7]), T[0] & /*width*/
        1 && (z.width = /*width*/
        x[0]), T[1] & /*xScale*/
        1 && (z.x_scale = /*xScale*/
        x[31]), T[1] & /*yScale*/
        4 && (z.y_scale = /*yScale*/
        x[33]), T[1] & /*filtered_data*/
        16 && (z.filtered_data = /*filtered_data*/
        x[35]), T[0] & /*type*/
        4194304 && (z.type = /*type*/
        x[22]), T[0] & /*tooltip*/
        2097152 && (z.tooltip = /*tooltip*/
        x[21]), T[1] & /*labelPositions*/
        2097152 && (z.labelPositions = /*labelPositions*/
        x[52]), !i && T[1] & /*tooltip2_array_values*/
        262144 && (i = !0, z.tooltip2_array_values = /*tooltip2_array_values*/
        x[49], Rt(() => i = !1)), !l && T[1] & /*m*/
        524288 && (l = !0, z.m = /*m*/
        x[50], Rt(() => l = !1)), !f && T[1] & /*listener*/
        1048576 && (f = !0, z.listener = /*listener*/
        x[51], Rt(() => f = !1)), !u && T[1] & /*closestLabelX*/
        8388608 && (u = !0, z.closestLabelX = /*closestLabelX*/
        x[54], Rt(() => u = !1)), !a && T[1] & /*nextLabelX*/
        4194304 && (a = !0, z.nextLabelX = /*nextLabelX*/
        x[53], Rt(() => a = !1)), n.$set(z), (!h || T[0] & /*label_height*/
        268435456 | T[1] & /*ticks_label_width*/
        2048 && _ !== (_ = "translate(" + /*ticks_label_width*/
        (x[42] + /*label_height*/
        x[28] + 10) + " 10)")) && v(t, "transform", _);
      },
      i(x) {
        h || (te(n.$$.fragment, x), h = !0);
      },
      o(x) {
        ue(n.$$.fragment, x), h = !1;
      },
      d(x) {
        x && Z(t), je(n);
      }
    }
  );
}
function Q1(e) {
  let t, n;
  return t = new wv({
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
      buffer: Vo,
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
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function V1(e) {
  let t, n;
  return t = new mv({
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
      n || (te(t.$$.fragment, i), n = !0);
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
  let t, n, i, l, f, u, a = [], _ = new qu(), h, d, c, g = [], w = new qu(), p, S = !Number.isNaN(
    /*x_ticks_spacing*/
    e[55]
  ), x, T, z, C, F, R, I, G = (
    /*header*/
    e[2] && W1(e)
  ), D = (
    /*show_legend*/
    e[1] && B1(e)
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
  let ee = ke(
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
  for (let A = 0; A < ee.length; A += 1) {
    let E = P1(e, ee, A), de = W(E);
    _.set(de, a[A] = Y1(de, E));
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
    e[21] === "vertical_line" && X1(e)
  ), se = ke(
    /*filtered_data*/
    e[35]
  );
  const ce = (A) => (
    /*data*/
    A[27].id
  );
  for (let A = 0; A < se.length; A += 1) {
    let E = U1(e, se, A), de = ce(E);
    w.set(de, g[A] = G1(de, E));
  }
  let fe = S && Z1(e), re = (
    /*tooltip*/
    e[21] === "vertical_line" && J1(e)
  ), J = (
    /*tooltip*/
    e[21] === "vertical_line" && /*closestLabelX*/
    e[54] !== 0 && /*nextLabelX*/
    e[53] !== 0 && Q1(e)
  ), B = (
    /*hovered_group*/
    e[46] && /*tooltip*/
    e[21] === "single" && V1(e)
  );
  return {
    c() {
      G && G.c(), t = ve(), n = _e("div"), D && D.c(), i = ve(), l = _e("div"), f = Ce("svg"), Ke(u.$$.fragment);
      for (let A = 0; A < a.length; A += 1)
        a[A].c();
      h = Le(), Ke(d.$$.fragment), K && K.c(), c = Le();
      for (let A = 0; A < g.length; A += 1)
        g[A].c();
      p = Le(), fe && fe.c(), x = Le(), re && re.c(), T = ve(), J && J.c(), z = ve(), B && B.c(), v(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "flex-start"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(
        n,
        "margin-left",
        /*label_height*/
        e[28] + er + "px"
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
    m(A, E) {
      G && G.m(A, E), j(A, t, E), j(A, n, E), D && D.m(n, null), j(A, i, E), j(A, l, E), X(l, f), Ze(u, f, null);
      for (let de = 0; de < a.length; de += 1)
        a[de] && a[de].m(f, null);
      X(f, h), Ze(d, f, null), K && K.m(f, null), X(f, c);
      for (let de = 0; de < g.length; de += 1)
        g[de] && g[de].m(f, null);
      X(f, p), fe && fe.m(f, null), X(f, x), re && re.m(f, null), X(l, T), J && J.m(l, null), X(l, z), B && B.m(l, null), C = nr(
        l,
        /*div1_elementresize_handler*/
        e[89].bind(l)
      ), F = !0, R || (I = dt(
        n,
        "mouseleave",
        /*mouseleave_handler*/
        e[77]
      ), R = !0);
    },
    p(A, E) {
      /*header*/
      A[2] ? G ? G.p(A, E) : (G = W1(A), G.c(), G.m(t.parentNode, t)) : G && (G.d(1), G = null), /*show_legend*/
      A[1] ? D ? D.p(A, E) : (D = B1(A), D.c(), D.m(n, null)) : D && (D.d(1), D = null), (!F || E[0] & /*label_height*/
      268435456) && y(
        n,
        "margin-left",
        /*label_height*/
        A[28] + er + "px"
      );
      const de = {};
      E[0] & /*width*/
      1 | E[1] & /*y_lines_spacing*/
      64 && (de.axis_title_position = /*width*/
      (A[0] + /*y_lines_spacing*/
      A[37]) / 2), E[0] & /*x_label*/
      32768 && (de.x_label = /*x_label*/
      A[15]), E[0] & /*font_size_xaxis*/
      2048 && (de.font_size_xaxis = /*font_size_xaxis*/
      A[11]), E[0] & /*label_height_x_axis*/
      536870912 && (de.label_height_x_axis = /*label_height_x_axis*/
      A[29]), E[0] & /*height*/
      128 && (de.height = /*height*/
      A[7]), u.$set(de), E[0] & /*yaxis_ticks, width, height, font_size_yticks*/
      327809 | E[1] & /*yScale, y_lines_spacing, format_number*/
      580 && (ee = ke(
        /*yScale*/
        A[33].ticks(
          /*yaxis_ticks*/
          A[16]
        )
      ), We(), a = kn(a, E, W, 1, A, ee, _, f, Kn, Y1, h, P1), Be());
      const he = {};
      E[1] & /*yScale, ticks*/
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
      )) / 2), E[0] & /*y_label*/
      1048576 && (he.y_label = /*y_label*/
      A[20]), E[0] & /*font_size_yaxis*/
      131072 && (he.font_size_yaxis = /*font_size_yaxis*/
      A[17]), E[0] & /*label_height*/
      268435456 && (he.label_height = /*label_height*/
      A[28]), d.$set(he), /*tooltip*/
      A[21] === "vertical_line" ? K ? K.p(A, E) : (K = X1(A), K.c(), K.m(f, c)) : K && (K.d(1), K = null), E[0] & /*mode*/
      67108864 | E[1] & /*filtered_data, xScale, xSubgroup, yScale, hover_legend, current_categories, hovered_y, hovered_x, hovered_group, hovered_color, hovered_x_cat, tooltip_axis_x*/
      258231 && (se = ke(
        /*filtered_data*/
        A[35]
      ), We(), g = kn(g, E, ce, 1, A, se, w, f, Kn, G1, p, U1), Be()), E[1] & /*x_ticks_spacing*/
      16777216 && (S = !Number.isNaN(
        /*x_ticks_spacing*/
        A[55]
      )), S ? fe ? (fe.p(A, E), E[1] & /*x_ticks_spacing*/
      16777216 && te(fe, 1)) : (fe = Z1(A), fe.c(), te(fe, 1), fe.m(f, x)) : fe && (We(), ue(fe, 1, 1, () => {
        fe = null;
      }), Be()), /*tooltip*/
      A[21] === "vertical_line" ? re ? (re.p(A, E), E[0] & /*tooltip*/
      2097152 && te(re, 1)) : (re = J1(A), re.c(), te(re, 1), re.m(f, null)) : re && (We(), ue(re, 1, 1, () => {
        re = null;
      }), Be()), (!F || E[0] & /*width*/
      1) && v(
        f,
        "width",
        /*width*/
        A[0]
      ), (!F || E[0] & /*height*/
      128) && v(
        f,
        "height",
        /*height*/
        A[7]
      ), /*tooltip*/
      A[21] === "vertical_line" && /*closestLabelX*/
      A[54] !== 0 && /*nextLabelX*/
      A[53] !== 0 ? J ? (J.p(A, E), E[0] & /*tooltip*/
      2097152 | E[1] & /*closestLabelX, nextLabelX*/
      12582912 && te(J, 1)) : (J = Q1(A), J.c(), te(J, 1), J.m(l, z)) : J && (We(), ue(J, 1, 1, () => {
        J = null;
      }), Be()), /*hovered_group*/
      A[46] && /*tooltip*/
      A[21] === "single" ? B ? (B.p(A, E), E[0] & /*tooltip*/
      2097152 | E[1] & /*hovered_group*/
      32768 && te(B, 1)) : (B = V1(A), B.c(), te(B, 1), B.m(l, null)) : B && (We(), ue(B, 1, 1, () => {
        B = null;
      }), Be());
    },
    i(A) {
      if (!F) {
        te(u.$$.fragment, A);
        for (let E = 0; E < ee.length; E += 1)
          te(a[E]);
        te(d.$$.fragment, A);
        for (let E = 0; E < se.length; E += 1)
          te(g[E]);
        te(fe), te(re), te(J), te(B), F = !0;
      }
    },
    o(A) {
      ue(u.$$.fragment, A);
      for (let E = 0; E < a.length; E += 1)
        ue(a[E]);
      ue(d.$$.fragment, A);
      for (let E = 0; E < g.length; E += 1)
        ue(g[E]);
      ue(fe), ue(re), ue(J), ue(B), F = !1;
    },
    d(A) {
      A && (Z(t), Z(n), Z(i), Z(l)), G && G.d(A), D && D.d(), je(u);
      for (let E = 0; E < a.length; E += 1)
        a[E].d();
      je(d), K && K.d();
      for (let E = 0; E < g.length; E += 1)
        g[E].d();
      fe && fe.d(), re && re.d(), J && J.d(), B && B.d(), C(), R = !1, I();
    }
  };
}
const xv = "bar", s0 = 30, Vo = 40;
let $o = 0.1, _0 = 10;
const er = 15, Gu = 5;
function Mv(e, t, n) {
  let i, l, f, u, a, _, { data: h = [] } = t, { width: d = 800 } = t, { show_legend: c } = t, { header: g } = t, { title_align: w } = t, { title_color: p } = t, { title_font_size: S } = t, { title_font_weight: x } = t, { title_padding: T } = t, { height: z = 400 } = t, { dx: C = "0em" } = t, { dy: F = "0em" } = t, { rotation_xaxis: R = 0 } = t, { font_size_xaxis: I = 14 } = t, { font_size_xticks: G = 12 } = t, { dominant_baseline_x_axis: D = "middle" } = t, { text_anchor_x_axis: ee = "middle" } = t, { x_axis_type: W } = t, { x_label: K } = t, { yaxis_ticks: se = 6 } = t, { format_yaxis: ce = ",.3r" } = t, { font_size_yaxis: fe } = t, { font_size_yticks: re } = t, { format_tooltip: J = "" } = t, { y_label: B } = t, { tooltip_desc: A = "" } = t, { colorRange: E = [] } = t, { color_mapping: de } = t, { annotation_dates: he = [] } = t, { legend_text: pt = [] } = t, { scale_x: Kt = "" } = t, { annotation_lines: Je = 2 } = t, { colours: Ue = [] } = t, { tooltip: $e = "vertical_line" } = t, { interval: ut = "day" } = t, { type: Xe = "" } = t, { show_bar_labels: ae } = t, { position: me } = t, { colour_text: be } = t, { mode: Q } = t;
  function Ae(Y) {
    let Lt = [];
    Lt = Object.keys(Tt).filter((vt) => !Y.includes(vt));
    for (let vt = 0; vt < Y.length; vt++)
      n(34, Tt[Y[vt]] = !0, Tt);
    for (let vt = 0; vt < Lt.length; vt++)
      n(34, Tt[Lt[vt]] = !1, Tt);
    return [Tt, Lt];
  }
  let ye = Vo, He = 20, Qe = Vo, et, qe = 10, H, le, Me, xt, Mt, Yt, ct, Tt = {}, $t, yt = [], St, en, Nn, tn = z - 40, ln = 40;
  function Jn() {
    const Lt = document.createElement("canvas").getContext("2d"), vt = (_i, Ai) => {
      Lt.font = `${Ai}px Arial`;
      const { width: Zr } = Lt.measureText(_i), jr = Lt.measureText("M").actualBoundingBoxAscent + Lt.measureText("M").actualBoundingBoxDescent + 1;
      return { width: Zr, height: jr };
    }, Si = vt(Nn, re);
    n(42, ye = Si.width);
    const zi = vt(B, fe);
    n(28, qe = zi.height);
    const fr = vt(a, G);
    Qe = fr.width, et = fr.height;
    const Fn = vt("M", I);
    n(29, H = Fn.height), n(69, He = _a(Qe, et, R)), n(73, tn = z - He - H - et - er - Gu), n(37, ln = ye + qe + er + Gu);
  }
  Ju(Jn);
  let cn, Mn, on, Tn, zt, Un, gn, At = null, Sn = { x: 0, y: 0 }, zn = !1, Qn, Vn = 0, An = 0;
  const V = (Y) => n(43, le = Y), tt = (Y) => n(34, Tt[Y] = !Tt[Y], Tt), Ct = () => n(43, le = null);
  function fn(Y) {
    cn = Y, n(44, cn);
  }
  function un(Y) {
    Mn = Y, n(45, Mn);
  }
  function Pn(Y) {
    on = Y, n(46, on);
  }
  function ri(Y) {
    Tn = Y, n(47, Tn);
  }
  function si(Y) {
    zt = Y, n(38, zt);
  }
  function Xr(Y) {
    Un = Y, n(48, Un);
  }
  function lr(Y) {
    At = Y, n(49, At);
  }
  function or(Y) {
    Sn = Y, n(50, Sn);
  }
  function qr(Y) {
    zn = Y, n(51, zn);
  }
  function Gr(Y) {
    An = Y, n(54, An);
  }
  function Cn(Y) {
    Vn = Y, n(53, Vn);
  }
  function dn() {
    d = this.clientWidth, n(0, d);
  }
  return e.$$set = (Y) => {
    "data" in Y && n(27, h = Y.data), "width" in Y && n(0, d = Y.width), "show_legend" in Y && n(1, c = Y.show_legend), "header" in Y && n(2, g = Y.header), "title_align" in Y && n(3, w = Y.title_align), "title_color" in Y && n(4, p = Y.title_color), "title_font_size" in Y && n(5, S = Y.title_font_size), "title_font_weight" in Y && n(6, x = Y.title_font_weight), "title_padding" in Y && n(57, T = Y.title_padding), "height" in Y && n(7, z = Y.height), "dx" in Y && n(8, C = Y.dx), "dy" in Y && n(9, F = Y.dy), "rotation_xaxis" in Y && n(10, R = Y.rotation_xaxis), "font_size_xaxis" in Y && n(11, I = Y.font_size_xaxis), "font_size_xticks" in Y && n(12, G = Y.font_size_xticks), "dominant_baseline_x_axis" in Y && n(13, D = Y.dominant_baseline_x_axis), "text_anchor_x_axis" in Y && n(14, ee = Y.text_anchor_x_axis), "x_axis_type" in Y && n(58, W = Y.x_axis_type), "x_label" in Y && n(15, K = Y.x_label), "yaxis_ticks" in Y && n(16, se = Y.yaxis_ticks), "format_yaxis" in Y && n(59, ce = Y.format_yaxis), "font_size_yaxis" in Y && n(17, fe = Y.font_size_yaxis), "font_size_yticks" in Y && n(18, re = Y.font_size_yticks), "format_tooltip" in Y && n(19, J = Y.format_tooltip), "y_label" in Y && n(20, B = Y.y_label), "tooltip_desc" in Y && n(60, A = Y.tooltip_desc), "colorRange" in Y && n(61, E = Y.colorRange), "color_mapping" in Y && n(62, de = Y.color_mapping), "annotation_dates" in Y && n(63, he = Y.annotation_dates), "legend_text" in Y && n(64, pt = Y.legend_text), "scale_x" in Y && n(65, Kt = Y.scale_x), "annotation_lines" in Y && n(66, Je = Y.annotation_lines), "colours" in Y && n(67, Ue = Y.colours), "tooltip" in Y && n(21, $e = Y.tooltip), "interval" in Y && n(68, ut = Y.interval), "type" in Y && n(22, Xe = Y.type), "show_bar_labels" in Y && n(23, ae = Y.show_bar_labels), "position" in Y && n(24, me = Y.position), "colour_text" in Y && n(25, be = Y.colour_text), "mode" in Y && n(26, Q = Y.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*data, names*/
    1207959552 && (n(30, Me = [...new Set(h.map((Y) => Y.group))]), n(70, xt = [...new Set(h.map((Y) => Y.x))]), n(71, $t = Array.from(new Map(h.map((Y) => [Y.group, Y])).values())), n(34, Tt = Ae(Me)[0]), Ae(Me)[1]), e.$$.dirty[2] & /*include_legend*/
    512 && n(56, i = $t.filter((Y) => Y.include_legend !== !1)), e.$$.dirty[1] & /*categories*/
    8 && n(36, St = Object.keys(Tt).filter((Y) => Tt[Y])), e.$$.dirty[0] & /*names*/
    1073741824 && n(36, St = Me), e.$$.dirty[0] & /*data, mode, width*/
    201326593 | e.$$.dirty[1] & /*current_categories, filtered_data, y_lines_spacing*/
    112 | e.$$.dirty[2] & /*x, x_lines_spacing, scales*/
    3328 && (n(35, yt = h.filter(({ group: Y }) => St.includes(Y))), Q === "stacked" ? n(35, yt = Dw(yt)) : Q === "percent" && n(35, yt = Nw(yt)), n(72, en = Ow(yt, xt, St, d, $o, Q, ln, _0, tn)), n(31, Mt = en[0]), n(32, Yt = en[1]), en[2], n(33, ct = en[3])), e.$$.dirty[1] & /*format_yaxis*/
    268435456 && n(40, l = hn(ce)), e.$$.dirty[0] & /*yaxis_ticks*/
    65536 | e.$$.dirty[1] & /*yScale*/
    4 && n(41, f = ct.ticks(se)), e.$$.dirty[1] & /*ticks, format_number*/
    1536) {
      let Y = 0;
      f.forEach((Lt) => {
        const vt = l(Lt).toString();
        vt.length > Y && (Y = vt.length, Nn = vt);
      });
    }
    e.$$.dirty[1] & /*xScale*/
    1 && n(74, u = Mt.domain()), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    4096 && (a = u.reduce((Y, Lt) => Y.length > Lt.length ? Y : Lt)), e.$$.dirty[0] & /*height, label_height_x_axis*/
    536871040 | e.$$.dirty[2] & /*x_ticks_label_rotation_buffer*/
    128 && n(55, _ = z - He - H - er), e.$$.dirty[0] & /*label_height*/
    268435456, e.$$.dirty[1] & /*current_categories*/
    32 && (St.length % 2 == 0 ? n(39, gn = St.length / 2 - 0.5) : n(39, gn = Math.floor(St.length / 2))), e.$$.dirty[1] & /*filtered_data, hovered_x_cat*/
    144 && yt.filter((Y) => Y.x === zt), e.$$.dirty[0] & /*names, mode*/
    1140850688 | e.$$.dirty[1] & /*filtered_data, xScale, xSubgroup, current_categories, iteration*/
    307 && n(52, Qn = yt.map((Y, Lt) => Me.length === 1 ? Mt(Y.x) + Yt(Y.group) + Yt.bandwidth() / 2 : Lt % St.length === 0 ? Q === "grouped" ? Mt(Y.x) + Yt(Y.group) + Yt.bandwidth() * St.length / 2 + Yt.bandwidth() * $o * gn : Mt(Y.x) + Yt.bandwidth() / 2 : null).filter((Y) => Y !== null));
  }, [
    d,
    c,
    g,
    w,
    p,
    S,
    x,
    z,
    C,
    F,
    R,
    I,
    G,
    D,
    ee,
    K,
    se,
    fe,
    re,
    J,
    B,
    $e,
    Xe,
    ae,
    me,
    be,
    Q,
    h,
    qe,
    H,
    Me,
    Mt,
    Yt,
    ct,
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
    T,
    W,
    ce,
    A,
    E,
    de,
    he,
    pt,
    Kt,
    Je,
    Ue,
    ut,
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
    Xr,
    lr,
    or,
    qr,
    Gr,
    Cn,
    dn
  ];
}
class Tv extends ht {
  constructor(t) {
    super(), _t(
      this,
      t,
      Mv,
      kv,
      ft,
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
function Sv(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = Ce("rect"), v(
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
        dt(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[27]
        ),
        dt(
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
        i = Fi(t, Gt, { x: -200, duration: 1e3, delay: 50 }), i.start();
      });
    },
    o: Pe,
    d(u) {
      u && Z(t), l = !1, Zt(f);
    }
  };
}
function zv(e, t, n) {
  let i, l, f, u, { x: a } = t, { y: _ } = t, { width: h } = t, { height: d } = t, { color: c } = t, { tweenOptions: g } = t, { x_start: w } = t, { x_end: p } = t, { y_value: S } = t, { opacity: x } = t, { group: T } = t, { hover_legend: z } = t, { current_categories: C } = t, { hovered_x_start: F } = t, { hovered_x_end: R } = t, { hovered_y: I } = t, { hovered_group: G } = t, { hovered_color: D } = t, ee = Ut(a, g == null ? void 0 : g.x);
  wt(e, ee, (J) => n(13, i = J));
  let W = Ut(_, g == null ? void 0 : g.y);
  wt(e, W, (J) => n(14, l = J));
  let K = Ut(h, g == null ? void 0 : g.width);
  wt(e, K, (J) => n(15, f = J));
  let se = Ut(d, g == null ? void 0 : g.height);
  wt(e, se, (J) => n(16, u = J));
  function ce(J, B, A, E, de, he) {
    n(2, I = B), n(0, F = A), n(1, R = E), n(3, G = de), n(4, D = he);
  }
  const fe = (J) => ce(J, S, w, p, T, c), re = () => {
    n(2, I = null), n(0, F = null), n(1, R = null), n(3, G = null), n(4, D = null);
  };
  return e.$$set = (J) => {
    "x" in J && n(22, a = J.x), "y" in J && n(23, _ = J.y), "width" in J && n(24, h = J.width), "height" in J && n(25, d = J.height), "color" in J && n(5, c = J.color), "tweenOptions" in J && n(26, g = J.tweenOptions), "x_start" in J && n(6, w = J.x_start), "x_end" in J && n(7, p = J.x_end), "y_value" in J && n(8, S = J.y_value), "opacity" in J && n(9, x = J.opacity), "group" in J && n(10, T = J.group), "hover_legend" in J && n(11, z = J.hover_legend), "current_categories" in J && n(12, C = J.current_categories), "hovered_x_start" in J && n(0, F = J.hovered_x_start), "hovered_x_end" in J && n(1, R = J.hovered_x_end), "hovered_y" in J && n(2, I = J.hovered_y), "hovered_group" in J && n(3, G = J.hovered_group), "hovered_color" in J && n(4, D = J.hovered_color);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions*/
    71303168 && ee.set(a, g == null ? void 0 : g.x), e.$$.dirty & /*y, tweenOptions*/
    75497472 && W.set(_, g == null ? void 0 : g.y), e.$$.dirty & /*width, tweenOptions*/
    83886080 && K.set(h, g == null ? void 0 : g.width), e.$$.dirty & /*height, tweenOptions*/
    100663296 && se.set(d, g == null ? void 0 : g.height);
  }, [
    F,
    R,
    I,
    G,
    D,
    c,
    w,
    p,
    S,
    x,
    T,
    z,
    C,
    i,
    l,
    f,
    u,
    ee,
    W,
    K,
    se,
    ce,
    a,
    _,
    h,
    d,
    g,
    fe,
    re
  ];
}
class Av extends ht {
  constructor(t) {
    super(), _t(this, t, zv, Sv, ft, {
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
function Cv(e) {
  let t, n, i = (
    /*tooltip_df*/
    e[5].x_start + ""
  ), l, f, u = (
    /*tooltip_df*/
    e[5].x_end + ""
  ), a, _, h, d, c, g, w, p = (
    /*tooltip_df*/
    e[5].group + ""
  ), S, x, T, z, C = (
    /*tooltip_df*/
    e[5].y + ""
  ), F, R, I, G, D, ee, W;
  return {
    c() {
      t = _e("div"), n = _e("div"), l = ze(i), f = ze(" - "), a = ze(u), _ = ve(), h = _e("div"), d = _e("div"), c = _e("span"), g = ve(), w = _e("div"), S = ze(p), x = ze(":"), T = ve(), z = _e("div"), F = ze(C), R = ve(), I = _e("div"), G = ve(), D = _e("div"), y(
        c,
        "background",
        /*tooltip_df*/
        e[5].color
      ), y(c, "width", "9px"), y(c, "height", "9px"), y(c, "border-radius", "50%"), y(c, "margin", "3px"), y(c, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(d, "display", "flex"), y(z, "font-weight", "bold"), y(h, "padding", "5px"), y(h, "font-size", "14px"), y(h, "display", "flex"), y(h, "flex-direction", "row"), y(h, "justify-content", "space-between"), y(h, "gap", "10px"), y(I, "position", "absolute"), y(I, "bottom", "-5px"), y(I, "left", "50%"), y(I, "transform", "translateX(-50%)"), y(I, "width", "0"), y(I, "height", "0"), y(I, "border-left", "5px solid transparent"), y(I, "border-right", "5px solid transparent"), y(I, "border-top", "5px solid #ccc"), y(D, "position", "absolute"), y(D, "bottom", "-4px"), y(D, "left", "50%"), y(D, "transform", "translateX(-50%)"), y(D, "width", "0"), y(D, "height", "0"), y(D, "border-left", "4px solid transparent"), y(D, "border-right", "4px solid transparent"), y(D, "border-top", "4px solid #fff"), v(t, "class", "tooltip-bars"), y(t, "transition", "all 500ms"), y(t, "position", "absolute"), y(
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
      j(K, t, se), X(t, n), X(n, l), X(n, f), X(n, a), X(t, _), X(t, h), X(h, d), X(d, c), X(h, g), X(h, w), X(w, S), X(w, x), X(h, T), X(h, z), X(z, F), X(t, R), X(t, I), X(t, G), X(t, D), W = !0;
    },
    p(K, [se]) {
      (!W || se & /*tooltip_df*/
      32) && i !== (i = /*tooltip_df*/
      K[5].x_start + "") && Oe(l, i), (!W || se & /*tooltip_df*/
      32) && u !== (u = /*tooltip_df*/
      K[5].x_end + "") && Oe(a, u), (!W || se & /*tooltip_df*/
      32) && y(
        c,
        "background",
        /*tooltip_df*/
        K[5].color
      ), (!W || se & /*tooltip_df*/
      32) && p !== (p = /*tooltip_df*/
      K[5].group + "") && Oe(S, p), (!W || se & /*tooltip_df*/
      32) && C !== (C = /*tooltip_df*/
      K[5].y + "") && Oe(F, C), (!W || se & /*yScale, hovered_y*/
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
        W && (ee || (ee = Pt(t, Gt, { duration: 1e3 }, !0)), ee.run(1));
      }), W = !0);
    },
    o(K) {
      ee || (ee = Pt(t, Gt, { duration: 1e3 }, !1)), ee.run(0), W = !1;
    },
    d(K) {
      K && Z(t), K && ee && ee.end();
    }
  };
}
function Lv(e, t, n) {
  let i, { xScale: l } = t, { yScale: f } = t, { hovered_x_start: u } = t, { hovered_x_end: a } = t, { hovered_group: _ } = t, { hovered_color: h } = t, { hovered_y: d } = t;
  return e.$$set = (c) => {
    "xScale" in c && n(0, l = c.xScale), "yScale" in c && n(1, f = c.yScale), "hovered_x_start" in c && n(2, u = c.hovered_x_start), "hovered_x_end" in c && n(3, a = c.hovered_x_end), "hovered_group" in c && n(6, _ = c.hovered_group), "hovered_color" in c && n(7, h = c.hovered_color), "hovered_y" in c && n(4, d = c.hovered_y);
  }, e.$$.update = () => {
    e.$$.dirty & /*hovered_x_start, hovered_x_end, hovered_color, hovered_group, hovered_y*/
    220 && n(5, i = {
      x_start: u,
      x_end: a,
      color: h,
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
    h
  ];
}
class Ev extends ht {
  constructor(t) {
    super(), _t(this, t, Lv, Cv, ft, {
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
function $1(e, t, n) {
  const i = e.slice();
  return i[86] = t[n].x_start, i[87] = t[n].x_end, i[88] = t[n].y, i[89] = t[n].colors, i[90] = t[n].group, i[91] = t[n].opacity, i[92] = t[n].id, i;
}
function ec(e, t, n) {
  const i = e.slice();
  return i[95] = t[n], i;
}
function tc(e, t, n) {
  const i = e.slice();
  return i[95] = t[n], i;
}
function nc(e, t, n) {
  const i = e.slice();
  return i[100] = t[n], i[102] = n, i;
}
function ic(e) {
  let t, n;
  return {
    c() {
      t = _e("div"), n = ze(
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
      j(i, t, l), X(t, n);
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
function rc(e) {
  let t, n = ke(Object.keys(
    /*categories*/
    e[27]
  )), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = lc(nc(e, n, l));
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
          const a = nc(l, n, u);
          i[u] ? i[u].p(a, f) : (i[u] = lc(a), i[u].c(), i[u].m(t.parentNode, t));
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
function lc(e) {
  let t, n, i, l = (
    /*cats*/
    e[100].replace(/\.\d+$/, "") + ""
  ), f, u, a, _, h;
  function d() {
    return (
      /*mouseover_handler*/
      e[66](
        /*cats*/
        e[100]
      )
    );
  }
  function c() {
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
      t = _e("p"), n = _e("span"), i = ve(), f = ze(l), u = ve(), y(
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
      j(g, t, w), X(t, n), X(t, i), X(t, f), X(t, u), _ || (h = [
        dt(t, "mouseover", d),
        dt(t, "click", c)
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
      g && Z(t), _ = !1, Zt(h);
    }
  };
}
function oc(e, t) {
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
      l || (te(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function fc(e, t) {
  let n, i, l;
  return i = new ga({
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
      l || (te(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Z(n), je(i, f);
    }
  };
}
function uc(e, t) {
  let n, i, l, f, u, a, _, h;
  function d(x) {
    t[69](x);
  }
  function c(x) {
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
    t[32]), i = new Av({ props: S }), st.push(() => It(i, "hovered_x_start", d)), st.push(() => It(i, "hovered_x_end", c)), st.push(() => It(i, "hovered_group", g)), st.push(() => It(i, "hovered_color", w)), st.push(() => It(i, "hovered_y", p)), {
      key: e,
      first: null,
      c() {
        n = Le(), Ke(i.$$.fragment), this.first = n;
      },
      m(x, T) {
        j(x, n, T), Ze(i, x, T), h = !0;
      },
      p(x, T) {
        t = x;
        const z = {};
        T[0] & /*filtered_data*/
        268435456 && (z.group = /*group*/
        t[90]), T[0] & /*xScale, filtered_data*/
        301989888 && (z.x = /*xScale*/
        t[25](
          /*x_start*/
          t[86]
        )), T[0] & /*yScale, filtered_data*/
        335544320 && (z.y = /*yScale*/
        t[26](
          /*y*/
          t[88]
        )), T[0] & /*filtered_data*/
        268435456 && (z.x_start = /*x_start*/
        t[86]), T[0] & /*filtered_data*/
        268435456 && (z.x_end = /*x_end*/
        t[87]), T[0] & /*filtered_data*/
        268435456 && (z.y_value = /*y*/
        t[88]), T[0] & /*xScale, filtered_data*/
        301989888 && (z.width = /*xScale*/
        t[25](
          /*x_end*/
          t[87]
        ) - /*xScale*/
        t[25](
          /*x_start*/
          t[86]
        )), T[0] & /*yScale, filtered_data*/
        335544320 && (z.height = /*yScale*/
        t[26](0) - /*yScale*/
        t[26](
          /*y*/
          t[88]
        )), T[0] & /*filtered_data*/
        268435456 && (z.color = /*colors*/
        t[89]), T[1] & /*hover_legend*/
        1 && (z.hover_legend = /*hover_legend*/
        t[31]), T[0] & /*filtered_data*/
        268435456 && (z.opacity = /*opacity*/
        t[91]), T[0] & /*current_categories*/
        536870912 && (z.current_categories = /*current_categories*/
        t[29]), !l && T[1] & /*hovered_x_start*/
        4 && (l = !0, z.hovered_x_start = /*hovered_x_start*/
        t[33], Rt(() => l = !1)), !f && T[1] & /*hovered_x_end*/
        8 && (f = !0, z.hovered_x_end = /*hovered_x_end*/
        t[34], Rt(() => f = !1)), !u && T[1] & /*hovered_group*/
        16 && (u = !0, z.hovered_group = /*hovered_group*/
        t[35], Rt(() => u = !1)), !a && T[1] & /*hovered_color*/
        32 && (a = !0, z.hovered_color = /*hovered_color*/
        t[36], Rt(() => a = !1)), !_ && T[1] & /*hovered_y*/
        2 && (_ = !0, z.hovered_y = /*hovered_y*/
        t[32], Rt(() => _ = !1)), i.$set(z);
      },
      i(x) {
        h || (te(i.$$.fragment, x), h = !0);
      },
      o(x) {
        ue(i.$$.fragment, x), h = !1;
      },
      d(x) {
        x && Z(n), je(i, x);
      }
    }
  );
}
function ac(e) {
  let t, n;
  return t = new Ev({
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
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function Rv(e) {
  let t, n, i, l, f, u = [], a = /* @__PURE__ */ new Map(), _, h, d, c, g = [], w = /* @__PURE__ */ new Map(), p, S, x, T = [], z = /* @__PURE__ */ new Map(), C, F, R, I, G, D = (
    /*header*/
    e[2] && ic(e)
  ), ee = (
    /*show_legend*/
    e[1] && rc(e)
  ), W = ke(
    /*xScale*/
    e[25].ticks(
      /*xaxis_ticks*/
      e[9]
    )
  );
  const K = (B) => (
    /*tickValue*/
    B[95].toString()
  );
  for (let B = 0; B < W.length; B += 1) {
    let A = tc(e, W, B), E = K(A);
    a.set(E, u[B] = oc(E, A));
  }
  let se = ke(
    /*yScale*/
    e[26].ticks(
      /*yaxis_ticks*/
      e[18]
    )
  );
  const ce = (B) => (
    /*tickValue*/
    B[95]
  );
  for (let B = 0; B < se.length; B += 1) {
    let A = ec(e, se, B), E = ce(A);
    w.set(E, g[B] = fc(E, A));
  }
  let fe = ke(
    /*filtered_data*/
    e[28]
  );
  const re = (B) => (
    /*id*/
    B[92]
  );
  for (let B = 0; B < fe.length; B += 1) {
    let A = $1(e, fe, B), E = re(A);
    z.set(E, T[B] = uc(E, A));
  }
  let J = (
    /*hovered_group*/
    e[35] && ac(e)
  );
  return {
    c() {
      D && D.c(), t = ve(), n = _e("div"), ee && ee.c(), i = ve(), l = _e("div"), f = Ce("svg");
      for (let B = 0; B < u.length; B += 1)
        u[B].c();
      _ = Ce("text"), h = ze(
        /*x_label*/
        e[17]
      );
      for (let B = 0; B < g.length; B += 1)
        g[B].c();
      p = Ce("text"), S = ze(
        /*y_label*/
        e[21]
      );
      for (let B = 0; B < T.length; B += 1)
        T[B].c();
      C = ve(), J && J.c(), v(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "center"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(n, "margin-bottom", "0.25rem"), y(
        _,
        "font-size",
        /*font_size_xaxis*/
        e[13] + "px"
      ), v(_, "x", d = /*width*/
      (e[0] - Cr - /*y_lines_spacing*/
      e[38]) / 2), v(_, "y", c = /*height*/
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
    m(B, A) {
      D && D.m(B, A), j(B, t, A), j(B, n, A), ee && ee.m(n, null), j(B, i, A), j(B, l, A), X(l, f);
      for (let E = 0; E < u.length; E += 1)
        u[E] && u[E].m(f, null);
      X(f, _), X(_, h);
      for (let E = 0; E < g.length; E += 1)
        g[E] && g[E].m(f, null);
      X(f, p), X(p, S);
      for (let E = 0; E < T.length; E += 1)
        T[E] && T[E].m(f, null);
      X(l, C), J && J.m(l, null), F = nr(
        l,
        /*div1_elementresize_handler*/
        e[74].bind(l)
      ), R = !0, I || (G = dt(
        n,
        "mouseleave",
        /*mouseleave_handler*/
        e[68]
      ), I = !0);
    },
    p(B, A) {
      /*header*/
      B[2] ? D ? D.p(B, A) : (D = ic(B), D.c(), D.m(t.parentNode, t)) : D && (D.d(1), D = null), /*show_legend*/
      B[1] ? ee ? ee.p(B, A) : (ee = rc(B), ee.c(), ee.m(n, null)) : ee && (ee.d(1), ee = null), A[0] & /*xScale, xaxis_ticks, width, rotation_xaxis, font_size_xticks, dx, dy, dominant_baseline_x_axis, text_anchor_x_axis*/
      33676801 | A[1] & /*x_ticks_spacing, x_lines_spacing, format_x_axis*/
      832 && (W = ke(
        /*xScale*/
        B[25].ticks(
          /*xaxis_ticks*/
          B[9]
        )
      ), We(), u = kn(u, A, K, 1, B, W, a, f, Kn, oc, _, tc), Be()), (!R || A[0] & /*x_label*/
      131072) && Oe(
        h,
        /*x_label*/
        B[17]
      ), (!R || A[0] & /*font_size_xaxis*/
      8192) && y(
        _,
        "font-size",
        /*font_size_xaxis*/
        B[13] + "px"
      ), (!R || A[0] & /*width*/
      1 | A[1] & /*y_lines_spacing*/
      128 && d !== (d = /*width*/
      (B[0] - Cr - /*y_lines_spacing*/
      B[38]) / 2)) && v(_, "x", d), (!R || A[0] & /*height, label_height_x_axis*/
      16777472 && c !== (c = /*height*/
      B[8] - /*label_height_x_axis*/
      B[24])) && v(_, "y", c), A[0] & /*yScale, yaxis_ticks, width, height, format_number, font_size_yticks*/
      1142161665 | A[1] & /*y_lines_spacing*/
      128 && (se = ke(
        /*yScale*/
        B[26].ticks(
          /*yaxis_ticks*/
          B[18]
        )
      ), We(), g = kn(g, A, ce, 1, B, se, w, f, Kn, fc, p, ec), Be()), (!R || A[0] & /*y_label*/
      2097152) && Oe(
        S,
        /*y_label*/
        B[21]
      ), (!R || A[0] & /*font_size_yaxis*/
      524288) && y(
        p,
        "font-size",
        /*font_size_yaxis*/
        B[19] + "px"
      ), (!R || A[0] & /*label_height*/
      8388608 | A[1] & /*x_lines_spacing*/
      64 && x !== (x = `translate(${/*label_height*/
      B[23]},${/*x_lines_spacing*/
      (B[37] + Cr) / 2}) rotate(-90)`)) && v(p, "transform", x), A[0] & /*filtered_data, xScale, yScale, current_categories*/
      905969664 | A[1] & /*hover_legend, hovered_x_start, hovered_x_end, hovered_group, hovered_color, hovered_y*/
      63 && (fe = ke(
        /*filtered_data*/
        B[28]
      ), We(), T = kn(T, A, re, 1, B, fe, z, f, Kn, uc, null, $1), Be()), (!R || A[0] & /*width*/
      1) && v(
        f,
        "width",
        /*width*/
        B[0]
      ), (!R || A[0] & /*height*/
      256) && v(
        f,
        "height",
        /*height*/
        B[8]
      ), /*hovered_group*/
      B[35] ? J ? (J.p(B, A), A[1] & /*hovered_group*/
      16 && te(J, 1)) : (J = ac(B), J.c(), te(J, 1), J.m(l, null)) : J && (We(), ue(J, 1, 1, () => {
        J = null;
      }), Be());
    },
    i(B) {
      if (!R) {
        for (let A = 0; A < W.length; A += 1)
          te(u[A]);
        for (let A = 0; A < se.length; A += 1)
          te(g[A]);
        for (let A = 0; A < fe.length; A += 1)
          te(T[A]);
        te(J), R = !0;
      }
    },
    o(B) {
      for (let A = 0; A < u.length; A += 1)
        ue(u[A]);
      for (let A = 0; A < g.length; A += 1)
        ue(g[A]);
      for (let A = 0; A < T.length; A += 1)
        ue(T[A]);
      ue(J), R = !1;
    },
    d(B) {
      B && (Z(t), Z(n), Z(i), Z(l)), D && D.d(B), ee && ee.d();
      for (let A = 0; A < u.length; A += 1)
        u[A].d();
      for (let A = 0; A < g.length; A += 1)
        g[A].d();
      for (let A = 0; A < T.length; A += 1)
        T[A].d();
      J && J.d(), F(), I = !1, G();
    }
  };
}
const Iv = 30, Cu = 40;
let Cr = 20;
const Lu = 15, Zu = 5;
function Ov(e, t, n) {
  let i, l, f, u, { data: a = [] } = t, { width: _ = 800 } = t, { show_legend: h } = t, { header: d } = t, { title_align: c } = t, { title_color: g } = t, { title_font_size: w } = t, { title_font_weight: p } = t, { title_padding: S } = t, { height: x = 400 } = t, { xaxis_ticks: T = 6 } = t, { format_xaxis: z } = t, { dx: C = "0em" } = t, { dy: F = "0em" } = t, { rotation_xaxis: R = 0 } = t, { font_size_xaxis: I = 14 } = t, { font_size_xticks: G = 12 } = t, { dominant_baseline_x_axis: D = "middle" } = t, { text_anchor_x_axis: ee = "middle" } = t, { x_axis_type: W } = t, { x_label: K } = t, { yaxis_ticks: se = 6 } = t, { format_yaxis: ce = ",.3r" } = t, { font_size_yaxis: fe } = t, { font_size_yticks: re } = t, { format_tooltip: J = "" } = t, { y_label: B } = t, { tooltip_desc: A = "" } = t, { colorRange: E = [] } = t, { color_mapping: de } = t, { annotation_dates: he = [] } = t, { legend_text: pt = [] } = t, { scale_x: Kt = "" } = t, { annotation_lines: Je = 2 } = t, { colours: Ue = [] } = t, { tooltip: $e = "vertical_line" } = t, { interval: ut = "day" } = t, { type: Xe = "" } = t, { show_bar_labels: ae } = t, { position: me } = t, { colour_text: be } = t, { mode: Q } = t;
  function Ae(V) {
    let tt = [];
    tt = Object.keys(ct).filter((Ct) => !V.includes(Ct));
    for (let Ct = 0; Ct < V.length; Ct++)
      n(27, ct[V[Ct]] = !0, ct);
    for (let Ct = 0; Ct < tt.length; Ct++)
      n(27, ct[tt[Ct]] = !1, ct);
    return [ct, tt];
  }
  let ye = Cu, He = 20, Qe = Cu, et, qe = 10, H, le, Me, xt, Mt, Yt, ct = {}, Tt, $t, yt, St, en, Nn = [], tn, ln, Jn = x - 40, cn = 40;
  function Mn() {
    let tt = document.createElement("canvas").getContext("2d");
    tt.font = `${re}px Arial`, n(60, ye = tt.measureText(ln).width), tt.font = `${fe}px Arial`, tt.measureText(B).width, n(23, qe = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1), tt.font = `${G}px Arial`, Qe = tt.measureText(u).width, et = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1, tt.font = `${I}px Arial`, n(24, H = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1), n(61, He = _a(Qe, et, R)), n(37, Jn = x - He - H - et - Lu - Zu), n(38, cn = ye + qe + Lu + Zu);
  }
  Ju(Mn);
  let on, Tn;
  const zt = (V) => n(31, le = V), Un = (V) => n(27, ct[V] = !ct[V], ct), gn = () => n(31, le = null);
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
    "data" in V && n(41, a = V.data), "width" in V && n(0, _ = V.width), "show_legend" in V && n(1, h = V.show_legend), "header" in V && n(2, d = V.header), "title_align" in V && n(3, c = V.title_align), "title_color" in V && n(4, g = V.title_color), "title_font_size" in V && n(5, w = V.title_font_size), "title_font_weight" in V && n(6, p = V.title_font_weight), "title_padding" in V && n(7, S = V.title_padding), "height" in V && n(8, x = V.height), "xaxis_ticks" in V && n(9, T = V.xaxis_ticks), "format_xaxis" in V && n(42, z = V.format_xaxis), "dx" in V && n(10, C = V.dx), "dy" in V && n(11, F = V.dy), "rotation_xaxis" in V && n(12, R = V.rotation_xaxis), "font_size_xaxis" in V && n(13, I = V.font_size_xaxis), "font_size_xticks" in V && n(14, G = V.font_size_xticks), "dominant_baseline_x_axis" in V && n(15, D = V.dominant_baseline_x_axis), "text_anchor_x_axis" in V && n(16, ee = V.text_anchor_x_axis), "x_axis_type" in V && n(43, W = V.x_axis_type), "x_label" in V && n(17, K = V.x_label), "yaxis_ticks" in V && n(18, se = V.yaxis_ticks), "format_yaxis" in V && n(44, ce = V.format_yaxis), "font_size_yaxis" in V && n(19, fe = V.font_size_yaxis), "font_size_yticks" in V && n(20, re = V.font_size_yticks), "format_tooltip" in V && n(45, J = V.format_tooltip), "y_label" in V && n(21, B = V.y_label), "tooltip_desc" in V && n(46, A = V.tooltip_desc), "colorRange" in V && n(47, E = V.colorRange), "color_mapping" in V && n(22, de = V.color_mapping), "annotation_dates" in V && n(48, he = V.annotation_dates), "legend_text" in V && n(49, pt = V.legend_text), "scale_x" in V && n(50, Kt = V.scale_x), "annotation_lines" in V && n(51, Je = V.annotation_lines), "colours" in V && n(52, Ue = V.colours), "tooltip" in V && n(53, $e = V.tooltip), "interval" in V && n(54, ut = V.interval), "type" in V && n(55, Xe = V.type), "show_bar_labels" in V && n(56, ae = V.show_bar_labels), "position" in V && n(57, me = V.position), "colour_text" in V && n(58, be = V.colour_text), "mode" in V && n(59, Q = V.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty[1] & /*data*/
    1024 | e.$$.dirty[2] & /*names*/
    1 && (n(62, Me = [...new Set(a.map((V) => V.group))]), n(27, ct = Ae(Me)[0]), Ae(Me)[1]), e.$$.dirty[0] & /*categories*/
    134217728 && n(29, tn = Object.keys(ct).filter((V) => ct[V])), e.$$.dirty[2] & /*names*/
    1 && n(29, tn = Me), e.$$.dirty[1] & /*format_yaxis*/
    8192 && n(30, i = hn(ce)), e.$$.dirty[0] & /*current_categories, filtered_data, width, height*/
    805306625 | e.$$.dirty[1] & /*data, x_ticks_label_rotation_buffer, ticks_label_width*/
    1610613760 | e.$$.dirty[2] & /*scales*/
    2 && (n(28, Nn = a.filter(({ group: V }) => tn.includes(V))), n(63, Yt = Uw(Nn, _, x, Cu, Iv, He, ye + 10)), n(25, xt = Yt[0]), n(26, Mt = Yt[1])), e.$$.dirty[0] & /*yScale, yaxis_ticks*/
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
    1073741824 && n(40, f = x - He - H - Lu), e.$$.dirty[0] & /*label_height*/
    8388608, e.$$.dirty[0] & /*xScale, xaxis_ticks*/
    33554944 | e.$$.dirty[1] & /*format_xaxis*/
    2048 && (n(39, on = hn(z)), n(64, Tn = xt.ticks(T).map((V) => hn(V)))), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    4 && (u = Tn.reduce((V, tt) => V.length > tt.length ? V : tt));
  }, [
    _,
    h,
    d,
    c,
    g,
    w,
    p,
    S,
    x,
    T,
    C,
    F,
    R,
    I,
    G,
    D,
    ee,
    K,
    se,
    fe,
    re,
    B,
    de,
    qe,
    H,
    xt,
    Mt,
    ct,
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
    E,
    he,
    pt,
    Kt,
    Je,
    Ue,
    $e,
    ut,
    Xe,
    ae,
    me,
    be,
    Q,
    ye,
    He,
    Me,
    Yt,
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
class Dv extends ht {
  constructor(t) {
    super(), _t(
      this,
      t,
      Ov,
      Rv,
      ft,
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
function Nv(e) {
  d6(e, "svelte-xvrzmb", "body{background-color:#fafafa}svg{color:black}.chart-grid.svelte-xvrzmb{display:grid;gap:16px}");
}
function sc(e, t, n) {
  const i = e.slice();
  return i[6] = t[n], i;
}
function _c(e) {
  let t, n, i = [], l = /* @__PURE__ */ new Map(), f, u, a = ke(
    /*debouncedListInput*/
    e[0]
  );
  const _ = (h) => (
    /*input*/
    h[6].id
  );
  for (let h = 0; h < a.length; h += 1) {
    let d = sc(e, a, h), c = _(d);
    l.set(c, i[h] = hc(c, d));
  }
  return {
    c() {
      t = _e("div"), n = _e("div");
      for (let h = 0; h < i.length; h += 1)
        i[h].c();
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
    m(h, d) {
      j(h, t, d), X(t, n);
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(n, null);
      f = nr(
        t,
        /*div1_elementresize_handler*/
        e[3].bind(t)
      ), u = !0;
    },
    p(h, d) {
      d & /*debouncedListInput, containerWidth*/
      3 && (a = ke(
        /*debouncedListInput*/
        h[0]
      ), We(), i = kn(i, d, _, 1, h, a, l, n, Kn, hc, null, sc), Be()), (!u || d & /*debouncedListInput*/
      1) && y(n, "grid-template-columns", "repeat(" + /*debouncedListInput*/
      (h[0][0].facet_col ? (
        /*debouncedListInput*/
        h[0][0].facet_col
      ) : 1) + ", 1fr)"), (!u || d & /*debouncedListInput*/
      1) && y(n, "grid-template-rows", "repeat(" + /*debouncedListInput*/
      (h[0][0].facet_row ? (
        /*debouncedListInput*/
        h[0][0].facet_row
      ) : 1) + ", auto)");
    },
    i(h) {
      if (!u) {
        for (let d = 0; d < a.length; d += 1)
          te(i[d]);
        u = !0;
      }
    },
    o(h) {
      for (let d = 0; d < i.length; d += 1)
        ue(i[d]);
      u = !1;
    },
    d(h) {
      h && Z(t);
      for (let d = 0; d < i.length; d += 1)
        i[d].d();
      f();
    }
  };
}
function Uv(e) {
  let t, n;
  return t = new Dv({
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
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function Pv(e) {
  let t, n;
  return t = new Tv({
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
      n || (te(t.$$.fragment, i), n = !0);
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
  return t = new uv({
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
      chart: "XYChart"
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
      i[6].line_type_axis_trigger), t.$set(f);
    },
    i(i) {
      n || (te(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ue(t.$$.fragment, i), n = !1;
    },
    d(i) {
      je(t, i);
    }
  };
}
function hc(e, t) {
  let n, i, l, f, u;
  const a = [Fv, Pv, Uv], _ = [];
  function h(d, c) {
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
  return ~(i = h(t)) && (l = _[i] = a[i](t)), {
    key: e,
    first: null,
    c() {
      n = _e("div"), l && l.c(), f = ve(), this.first = n;
    },
    m(d, c) {
      j(d, n, c), ~i && _[i].m(n, null), X(n, f), u = !0;
    },
    p(d, c) {
      t = d;
      let g = i;
      i = h(t), i === g ? ~i && _[i].p(t, c) : (l && (We(), ue(_[g], 1, 1, () => {
        _[g] = null;
      }), Be()), ~i ? (l = _[i], l ? l.p(t, c) : (l = _[i] = a[i](t), l.c()), te(l, 1), l.m(n, f)) : l = null);
    },
    i(d) {
      u || (te(l), u = !0);
    },
    o(d) {
      ue(l), u = !1;
    },
    d(d) {
      d && Z(n), ~i && _[i].d();
    }
  };
}
function Wv(e) {
  let t, n, i = (
    /*debouncedListInput*/
    e[0].length > 0 && _c(e)
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
      1 && te(i, 1)) : (i = _c(l), i.c(), te(i, 1), i.m(t.parentNode, t)) : i && (We(), ue(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(l) {
      n || (te(i), n = !0);
    },
    o(l) {
      ue(i), n = !1;
    },
    d(l) {
      l && Z(t), i && i.d(l);
    }
  };
}
function Bv(e, t, n) {
  let i = window.innerWidth, { list_input: l = [] } = t, f = [];
  const u = Ko.debounce(
    (_) => {
      n(0, f = [..._]);
    },
    20
  );
  bc(() => {
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
    1 && console.log("debouncedListInput.length", f.length);
  }, [f, i, l, a];
}
class Hv extends ht {
  constructor(t) {
    super(), _t(this, t, Bv, Wv, ft, { list_input: 2 }, Nv);
  }
  get list_input() {
    return this.$$.ctx[2];
  }
  set list_input(t) {
    this.$$set({ list_input: t }), Qu();
  }
}
customElements.define("linechart-groups-facet", R6(Hv, { list_input: {} }, [], [], !0));
export {
  Hv as MyComponent
};
