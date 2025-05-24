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
function Ht(e) {
  e.forEach(cc);
}
function Yr(e) {
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
function vt(e, t, n) {
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
let Cl = gc ? () => window.performance.now() : () => Date.now(), Xu = gc ? (e) => requestAnimationFrame(e) : Pe;
const Rr = /* @__PURE__ */ new Set();
function dc(e) {
  Rr.forEach((t) => {
    t.c(e) || (Rr.delete(t), t.f());
  }), Rr.size !== 0 && Xu(dc);
}
function Ll(e) {
  let t;
  return Rr.size === 0 && Xu(dc), {
    promise: new Promise((n) => {
      Rr.add(t = { c: e, f: n });
    }),
    abort() {
      Rr.delete(t);
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
  const i = qu(e);
  if (!i.getElementById(t)) {
    const l = _e("style");
    l.id = t, l.textContent = n, mc(i, l);
  }
}
function qu(e) {
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
  return t.textContent = "/* empty */", mc(qu(e), t), t.sheet;
}
function mc(e, t) {
  return q(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function Q(e, t, n) {
  e.insertBefore(t, n || null);
}
function K(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function kn(e, t) {
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
function p(e, t, n) {
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
function rr(e, t) {
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
    (l || f && i.contentWindow) && f(), K(i);
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
      Q(this.t, this.n[n], t);
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
    this.n.forEach(K);
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
function pl(e, t, n, i, l, f, u, a = 0) {
  const _ = 16.666 / i;
  let c = `{
`;
  for (let k = 0; k <= 1; k += _) {
    const T = t + (n - t) * f(k);
    c += k * 100 + `%{${u(T, 1 - T)}}
`;
  }
  const d = c + `100% {${u(n, 1 - n)}}
}`, h = `__svelte_${k6(d)}_${a}`, g = qu(e), { stylesheet: w, rules: v } = Po.get(g) || x6(g, e);
  v[h] || (v[h] = !0, w.insertRule(`@keyframes ${h} ${d}`, w.cssRules.length));
  const S = e.style.animation || "";
  return e.style.animation = `${S ? `${S}, ` : ""}${h} ${i}ms linear ${l}ms 1 both`, Fo += 1, h;
}
function vl(e, t) {
  const n = (e.style.animation || "").split(", "), i = n.filter(
    t ? (f) => f.indexOf(t) < 0 : (f) => f.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), l = n.length - i.length;
  l && (e.style.animation = i.join(", "), Fo -= l, Fo || M6());
}
function M6() {
  Xu(() => {
    Fo || (Po.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && K(t);
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
    easing: a = Hr,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: _ = Cl() + f,
    // @ts-ignore todo:
    end: c = _ + u,
    tick: d = Pe,
    css: h
  } = n(e, { from: t, to: l }, i);
  let g = !0, w = !1, v;
  function S() {
    h && (v = pl(e, 0, 1, u, f, a, h)), f || (w = !0);
  }
  function k() {
    h && vl(e, v), g = !1;
  }
  return Ll((T) => {
    if (!w && T >= _ && (w = !0), w && T >= c && (d(1, 0), k()), !g)
      return !1;
    if (w) {
      const A = T - _, z = 0 + 1 * a(A / u);
      d(z, 1 - z);
    }
    return !0;
  }), S(), d(0, 1), k;
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
let kl;
function yl(e) {
  kl = e;
}
function Gu() {
  if (!kl)
    throw new Error("Function called outside component initialization");
  return kl;
}
function A6(e) {
  Gu().$$.on_mount.push(e);
}
function Zu(e) {
  Gu().$$.after_update.push(e);
}
function ju(e) {
  Gu().$$.on_destroy.push(e);
}
const Ar = [], _t = [];
let Ir = [];
const zu = [], yc = /* @__PURE__ */ Promise.resolve();
let Au = !1;
function bc() {
  Au || (Au = !0, yc.then(Ku));
}
function El() {
  return bc(), yc;
}
function it(e) {
  Ir.push(e);
}
function Rt(e) {
  zu.push(e);
}
const du = /* @__PURE__ */ new Set();
let Tr = 0;
function Ku() {
  if (Tr !== 0)
    return;
  const e = kl;
  do {
    try {
      for (; Tr < Ar.length; ) {
        const t = Ar[Tr];
        Tr++, yl(t), C6(t.$$);
      }
    } catch (t) {
      throw Ar.length = 0, Tr = 0, t;
    }
    for (yl(null), Ar.length = 0, Tr = 0; _t.length; )
      _t.pop()();
    for (let t = 0; t < Ir.length; t += 1) {
      const n = Ir[t];
      du.has(n) || (du.add(n), n());
    }
    Ir.length = 0;
  } while (Ar.length);
  for (; zu.length; )
    zu.pop()();
  Au = !1, du.clear(), yl(e);
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
  Ir.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), Ir = t;
}
let _l;
function Ju() {
  return _l || (_l = Promise.resolve(), _l.then(() => {
    _l = null;
  })), _l;
}
function er(e, t, n) {
  e.dispatchEvent(w6(`${t ? "intro" : "outro"}${n}`));
}
const Do = /* @__PURE__ */ new Set();
let fi;
function We() {
  fi = {
    r: 0,
    c: [],
    p: fi
    // parent group
  };
}
function Be() {
  fi.r || Ht(fi.c), fi = fi.p;
}
function ne(e, t) {
  e && e.i && (Do.delete(e), e.i(t));
}
function ue(e, t, n, i) {
  if (e && e.o) {
    if (Do.has(e))
      return;
    Do.add(e), fi.c.push(() => {
      Do.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
const Qu = { duration: 0 };
function Fi(e, t, n) {
  const i = { direction: "in" };
  let l = t(e, n, i), f = !1, u, a, _ = 0;
  function c() {
    u && vl(e, u);
  }
  function d() {
    const {
      delay: g = 0,
      duration: w = 300,
      easing: v = Hr,
      tick: S = Pe,
      css: k
    } = l || Qu;
    k && (u = pl(e, 0, 1, w, g, v, k, _++)), S(0, 1);
    const T = Cl() + g, A = T + w;
    a && a.abort(), f = !0, it(() => er(e, !0, "start")), a = Ll((z) => {
      if (f) {
        if (z >= A)
          return S(1, 0), er(e, !0, "end"), c(), f = !1;
        if (z >= T) {
          const U = v((z - T) / w);
          S(U, 1 - U);
        }
      }
      return f;
    });
  }
  let h = !1;
  return {
    start() {
      h || (h = !0, vl(e), Yr(l) ? (l = l(i), Ju().then(d)) : d());
    },
    invalidate() {
      h = !1;
    },
    end() {
      f && (c(), f = !1);
    }
  };
}
function xl(e, t, n) {
  const i = { direction: "out" };
  let l = t(e, n, i), f = !0, u;
  const a = fi;
  a.r += 1;
  let _;
  function c() {
    const {
      delay: d = 0,
      duration: h = 300,
      easing: g = Hr,
      tick: w = Pe,
      css: v
    } = l || Qu;
    v && (u = pl(e, 1, 0, h, d, g, v));
    const S = Cl() + d, k = S + h;
    it(() => er(e, !1, "start")), "inert" in e && (_ = /** @type {HTMLElement} */
    e.inert, e.inert = !0), Ll((T) => {
      if (f) {
        if (T >= k)
          return w(0, 1), er(e, !1, "end"), --a.r || Ht(a.c), !1;
        if (T >= S) {
          const A = g((T - S) / h);
          w(1 - A, A);
        }
      }
      return f;
    });
  }
  return Yr(l) ? Ju().then(() => {
    l = l(i), c();
  }) : c(), {
    end(d) {
      d && "inert" in e && (e.inert = _), d && l.tick && l.tick(1, 0), f && (u && vl(e, u), f = !1);
    }
  };
}
function Pt(e, t, n, i) {
  let f = t(e, n, { direction: "both" }), u = i ? 0 : 1, a = null, _ = null, c = null, d;
  function h() {
    c && vl(e, c);
  }
  function g(v, S) {
    const k = (
      /** @type {Program['d']} */
      v.b - u
    );
    return S *= Math.abs(k), {
      a: u,
      b: v.b,
      d: k,
      duration: S,
      start: v.start,
      end: v.start + S,
      group: v.group
    };
  }
  function w(v) {
    const {
      delay: S = 0,
      duration: k = 300,
      easing: T = Hr,
      tick: A = Pe,
      css: z
    } = f || Qu, U = {
      start: Cl() + S,
      b: v
    };
    v || (U.group = fi, fi.r += 1), "inert" in e && (v ? d !== void 0 && (e.inert = d) : (d = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), a || _ ? _ = U : (z && (h(), c = pl(e, u, v, k, S, T, z)), v && A(0, 1), a = g(U, k), it(() => er(e, v, "start")), Ll((O) => {
      if (_ && O > _.start && (a = g(_, k), _ = null, er(e, a.b, "start"), z && (h(), c = pl(
        e,
        u,
        a.b,
        a.duration,
        0,
        T,
        f.css
      ))), a) {
        if (O >= a.end)
          A(u = a.b, 1 - u), er(e, a.b, "end"), _ || (a.b ? h() : --a.group.r || Ht(a.group.c)), a = null;
        else if (O >= a.start) {
          const E = O - a.start;
          u = a.a + a.d * T(E / a.duration), A(u, 1 - u);
        }
      }
      return !!(a || _);
    }));
  }
  return {
    run(v) {
      Yr(f) ? Ju().then(() => {
        f = f({ direction: v ? "in" : "out" }), w(v);
      }) : w(v);
    },
    end() {
      h(), a = _ = null;
    }
  };
}
function ke(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function wc(e, t) {
  e.d(1), t.delete(e.key);
}
function jn(e, t) {
  ue(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function E6(e, t) {
  e.f(), wc(e, t);
}
function vn(e, t, n, i, l, f, u, a, _, c, d, h) {
  let g = e.length, w = f.length, v = g;
  const S = {};
  for (; v--; )
    S[e[v].key] = v;
  const k = [], T = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), z = [];
  for (v = w; v--; ) {
    const B = h(l, f, v), G = n(B);
    let Y = u.get(G);
    Y ? i && z.push(() => Y.p(B, t)) : (Y = c(G, B), Y.c()), T.set(G, k[v] = Y), G in S && A.set(G, Math.abs(v - S[G]));
  }
  const U = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
  function E(B) {
    ne(B, 1), B.m(a, d), u.set(B.key, B), d = B.first, w--;
  }
  for (; g && w; ) {
    const B = k[w - 1], G = e[g - 1], Y = B.key, D = G.key;
    B === G ? (d = B.first, g--, w--) : T.has(D) ? !u.has(Y) || U.has(Y) ? E(B) : O.has(D) ? g-- : A.get(Y) > A.get(D) ? (O.add(Y), E(B)) : (U.add(D), g--) : (_(G, u), g--);
  }
  for (; g--; ) {
    const B = e[g];
    T.has(B.key) || _(B, u);
  }
  for (; w; )
    E(k[w - 1]);
  return Ht(z), k;
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
    e.$$.on_destroy ? e.$$.on_destroy.push(...f) : Ht(f), e.$$.on_mount = [];
  }), l.forEach(it);
}
function je(e, t) {
  const n = e.$$;
  n.fragment !== null && (L6(n.after_update), Ht(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function R6(e, t) {
  e.$$.dirty[0] === -1 && (Ar.push(e), bc(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ht(e, t, n, i, l, f, u = null, a = [-1]) {
  const _ = kl;
  yl(e);
  const c = e.$$ = {
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
  u && u(c.root);
  let d = !1;
  if (c.ctx = n ? n(e, t.props || {}, (h, g, ...w) => {
    const v = w.length ? w[0] : g;
    return c.ctx && l(c.ctx[h], c.ctx[h] = v) && (!c.skip_bound && c.bound[h] && c.bound[h](v), d && R6(e, h)), g;
  }) : [], c.update(), d = !0, Ht(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = y6(t.target);
      c.fragment && c.fragment.l(h), h.forEach(K);
    } else
      c.fragment && c.fragment.c();
    t.intro && ne(e.$$.fragment), Ze(e, t.target, t.anchor), Ku();
  }
  yl(_);
}
let pc;
typeof HTMLElement == "function" && (pc = class extends HTMLElement {
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
              u = _e("slot"), f !== "default" && p(u, "name", f);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, d) {
              Q(c, u, d);
            },
            d: function(c) {
              c && K(u);
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
  let u = class extends pc {
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
const O6 = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(O6);
const Sr = [];
function Rl(e, t = Pe) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function l(a) {
    if (ut(e, a) && (e = a, n)) {
      const _ = !Sr.length;
      for (const c of i)
        c[1](), Sr.push(c, e);
      if (_) {
        for (let c = 0; c < Sr.length; c += 2)
          Sr[c][0](Sr[c + 1]);
        Sr.length = 0;
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
const vc = Rl(null), O_ = Rl(null), D6 = Rl(null), Vi = Rl(null);
function Uo(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function N6(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Il(e) {
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
const F6 = Il(Uo), W6 = F6.right;
Il(P6).center;
const B6 = W6;
function Cu(e, t) {
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
  constructor(t, n = X6) {
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
    return super.set(H6(this, t), n);
  }
  delete(t) {
    return super.delete(Y6(this, t));
  }
}
function N_({ _intern: e, _key: t }, n) {
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
function Lu(e, t, n) {
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
function Eu(e, t, n) {
  return t = +t, e = +e, n = +n, Wo(e, t, n)[2];
}
function Ru(e, t, n) {
  t = +t, e = +e, n = +n;
  const i = t < e, l = i ? Eu(t, e, n) : Eu(e, t, n);
  return (i ? -1 : 1) * (l < 0 ? 1 / -l : l);
}
function Iu(e, t) {
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
function kc(e, t) {
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
function Vu(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function xc(e, t) {
  var n = Object.create(e.prototype);
  for (var i in t)
    n[i] = t[i];
  return n;
}
function Ol() {
}
var Ml = 0.7, Bo = 1 / Ml, Or = "\\s*([+-]?\\d+)\\s*", Tl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ui = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", K6 = /^#([0-9a-f]{3,8})$/, J6 = new RegExp(`^rgb\\(${Or},${Or},${Or}\\)$`), Q6 = new RegExp(`^rgb\\(${ui},${ui},${ui}\\)$`), V6 = new RegExp(`^rgba\\(${Or},${Or},${Or},${Tl}\\)$`), $6 = new RegExp(`^rgba\\(${ui},${ui},${ui},${Tl}\\)$`), e3 = new RegExp(`^hsl\\(${Tl},${ui},${ui}\\)$`), t3 = new RegExp(`^hsla\\(${Tl},${ui},${ui},${Tl}\\)$`), U_ = {
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
Vu(Ol, Sl, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: P_,
  // Deprecated! Use color.formatHex.
  formatHex: P_,
  formatHex8: n3,
  formatHsl: i3,
  formatRgb: F_,
  toString: F_
});
function P_() {
  return this.rgb().formatHex();
}
function n3() {
  return this.rgb().formatHex8();
}
function i3() {
  return Mc(this).formatHsl();
}
function F_() {
  return this.rgb().formatRgb();
}
function Sl(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = K6.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? W_(t) : n === 3 ? new pn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Eo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Eo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = J6.exec(e)) ? new pn(t[1], t[2], t[3], 1) : (t = Q6.exec(e)) ? new pn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = V6.exec(e)) ? Eo(t[1], t[2], t[3], t[4]) : (t = $6.exec(e)) ? Eo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = e3.exec(e)) ? Y_(t[1], t[2] / 100, t[3] / 100, 1) : (t = t3.exec(e)) ? Y_(t[1], t[2] / 100, t[3] / 100, t[4]) : U_.hasOwnProperty(e) ? W_(U_[e]) : e === "transparent" ? new pn(NaN, NaN, NaN, 0) : null;
}
function W_(e) {
  return new pn(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Eo(e, t, n, i) {
  return i <= 0 && (e = t = n = NaN), new pn(e, t, n, i);
}
function r3(e) {
  return e instanceof Ol || (e = Sl(e)), e ? (e = e.rgb(), new pn(e.r, e.g, e.b, e.opacity)) : new pn();
}
function Ou(e, t, n, i) {
  return arguments.length === 1 ? r3(e) : new pn(e, t, n, i ?? 1);
}
function pn(e, t, n, i) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
}
Vu(pn, Ou, xc(Ol, {
  brighter(e) {
    return e = e == null ? Bo : Math.pow(Bo, e), new pn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ml : Math.pow(Ml, e), new pn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pn(tr(this.r), tr(this.g), tr(this.b), Ho(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: B_,
  // Deprecated! Use color.formatHex.
  formatHex: B_,
  formatHex8: l3,
  formatRgb: H_,
  toString: H_
}));
function B_() {
  return `#${$i(this.r)}${$i(this.g)}${$i(this.b)}`;
}
function l3() {
  return `#${$i(this.r)}${$i(this.g)}${$i(this.b)}${$i((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function H_() {
  const e = Ho(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${tr(this.r)}, ${tr(this.g)}, ${tr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ho(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function tr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function $i(e) {
  return e = tr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Y_(e, t, n, i) {
  return i <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ni(e, t, n, i);
}
function Mc(e) {
  if (e instanceof ni)
    return new ni(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ol || (e = Sl(e)), !e)
    return new ni();
  if (e instanceof ni)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, i = e.b / 255, l = Math.min(t, n, i), f = Math.max(t, n, i), u = NaN, a = f - l, _ = (f + l) / 2;
  return a ? (t === f ? u = (n - i) / a + (n < i) * 6 : n === f ? u = (i - t) / a + 2 : u = (t - n) / a + 4, a /= _ < 0.5 ? f + l : 2 - f - l, u *= 60) : a = _ > 0 && _ < 1 ? 0 : u, new ni(u, a, _, e.opacity);
}
function o3(e, t, n, i) {
  return arguments.length === 1 ? Mc(e) : new ni(e, t, n, i ?? 1);
}
function ni(e, t, n, i) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
}
Vu(ni, o3, xc(Ol, {
  brighter(e) {
    return e = e == null ? Bo : Math.pow(Bo, e), new ni(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ml : Math.pow(Ml, e), new ni(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * t, l = 2 * n - i;
    return new pn(
      mu(e >= 240 ? e - 240 : e + 120, l, i),
      mu(e, l, i),
      mu(e < 120 ? e + 240 : e - 120, l, i),
      this.opacity
    );
  },
  clamp() {
    return new ni(X_(this.h), Ro(this.s), Ro(this.l), Ho(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ho(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${X_(this.h)}, ${Ro(this.s) * 100}%, ${Ro(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function X_(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ro(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function mu(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const $u = (e) => () => e;
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
  return (e = +e) == 1 ? Tc : function(t, n) {
    return n - t ? u3(t, n, e) : $u(isNaN(t) ? n : t);
  };
}
function Tc(e, t) {
  var n = t - e;
  return n ? f3(e, n) : $u(isNaN(e) ? t : e);
}
const q_ = function e(t) {
  var n = a3(t);
  function i(l, f) {
    var u = n((l = Ou(l)).r, (f = Ou(f)).r), a = n(l.g, f.g), _ = n(l.b, f.b), c = Tc(l.opacity, f.opacity);
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
    l[u] = ea(e[u], t[u]);
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
    l in e ? n[l] = ea(e[l], t[l]) : i[l] = t[l];
  return function(f) {
    for (l in n)
      i[l] = n[l](f);
    return i;
  };
}
var Du = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, yu = new RegExp(Du.source, "g");
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
  var n = Du.lastIndex = yu.lastIndex = 0, i, l, f, u = -1, a = [], _ = [];
  for (e = e + "", t = t + ""; (i = Du.exec(e)) && (l = yu.exec(t)); )
    (f = l.index) > n && (f = t.slice(n, f), a[u] ? a[u] += f : a[++u] = f), (i = i[0]) === (l = l[0]) ? a[u] ? a[u] += l : a[++u] = l : (a[++u] = null, _.push({ i: u, x: Yo(i, l) })), n = yu.lastIndex;
  return n < t.length && (f = t.slice(n), a[u] ? a[u] += f : a[++u] = f), a.length < 2 ? _[0] ? m3(_[0].x) : d3(t) : (t = _.length, function(c) {
    for (var d = 0, h; d < t; ++d)
      a[(h = _[d]).i] = h.x(c);
    return a.join("");
  });
}
function ea(e, t) {
  var n = typeof t, i;
  return t == null || n === "boolean" ? $u(t) : (n === "number" ? Yo : n === "string" ? (i = Sl(t)) ? (t = i, q_) : y3 : t instanceof Sl ? q_ : t instanceof Date ? c3 : _3(t) ? s3 : Array.isArray(t) ? h3 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? g3 : Yo)(e, t);
}
function b3(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
const Nu = Math.PI, Uu = 2 * Nu, Qi = 1e-6, w3 = Uu - Qi;
function Sc(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function p3(e) {
  let t = Math.floor(e);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t > 15)
    return Sc;
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
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Sc : p3(t);
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
    else if (g > Qi)
      if (!(Math.abs(h * _ - c * d) > Qi) || !f)
        this._append`L${this._x1 = t},${this._y1 = n}`;
      else {
        let w = i - u, v = l - a, S = _ * _ + c * c, k = w * w + v * v, T = Math.sqrt(S), A = Math.sqrt(g), z = f * Math.tan((Nu - Math.acos((S + g - k) / (2 * T * A))) / 2), U = z / A, O = z / T;
        Math.abs(U - 1) > Qi && this._append`L${t + U * d},${n + U * h}`, this._append`A${f},${f},0,0,${+(h * w > d * v)},${this._x1 = t + O * _},${this._y1 = n + O * c}`;
      }
  }
  arc(t, n, i, l, f, u) {
    if (t = +t, n = +n, i = +i, u = !!u, i < 0)
      throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(l), _ = i * Math.sin(l), c = t + a, d = n + _, h = 1 ^ u, g = u ? l - f : f - l;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Qi || Math.abs(this._y1 - d) > Qi) && this._append`L${c},${d}`, i && (g < 0 && (g = g % Uu + Uu), g > w3 ? this._append`A${i},${i},0,1,${h},${t - a},${n - _}A${i},${i},0,1,${h},${this._x1 = c},${this._y1 = d}` : g > Qi && this._append`A${i},${i},0,${+(g >= Nu)},${h},${this._x1 = t + i * Math.cos(f)},${this._y1 = n + i * Math.sin(f)}`);
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
function Nr(e) {
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
function zl(e) {
  if (!(t = T3.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new ta({
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
zl.prototype = ta.prototype;
function ta(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ta.prototype.toString = function() {
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
var zc;
function z3(e, t) {
  var n = Xo(e, t);
  if (!n)
    return e + "";
  var i = n[0], l = n[1], f = l - (zc = Math.max(-8, Math.min(8, Math.floor(l / 3))) * 3) + 1, u = i.length;
  return f === u ? i : f > u ? i + new Array(f - u + 1).join("0") : f > 0 ? i.slice(0, f) + "." + i.slice(f) : "0." + new Array(1 - f).join("0") + Xo(e, Math.max(0, t + f - 1))[0];
}
function G_(e, t) {
  var n = Xo(e, t);
  if (!n)
    return e + "";
  var i = n[0], l = n[1];
  return l < 0 ? "0." + new Array(-l).join("0") + i : i.length > l + 1 ? i.slice(0, l + 1) + "." + i.slice(l + 1) : i + new Array(l - i.length + 2).join("0");
}
const Z_ = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: k3,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => G_(e * 100, t),
  r: G_,
  s: z3,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function j_(e) {
  return e;
}
var K_ = Array.prototype.map, J_ = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function A3(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? j_ : x3(K_.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", l = e.decimal === void 0 ? "." : e.decimal + "", f = e.numerals === void 0 ? j_ : M3(K_.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", _ = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = zl(h);
    var g = h.fill, w = h.align, v = h.sign, S = h.symbol, k = h.zero, T = h.width, A = h.comma, z = h.precision, U = h.trim, O = h.type;
    O === "n" ? (A = !0, O = "g") : Z_[O] || (z === void 0 && (z = 12), U = !0, O = "g"), (k || g === "0" && w === "=") && (k = !0, g = "0", w = "=");
    var E = S === "$" ? n : S === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", B = S === "$" ? i : /[%p]/.test(O) ? u : "", G = Z_[O], Y = /[defgprs%]/.test(O);
    z = z === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, z)) : Math.max(0, Math.min(20, z));
    function D(j) {
      var se = E, de = B, re, te, J;
      if (O === "c")
        de = G(j) + de, j = "";
      else {
        j = +j;
        var W = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? _ : G(Math.abs(j), z), U && (j = S3(j)), W && +j == 0 && v !== "+" && (W = !1), se = (W ? v === "(" ? v : a : v === "-" || v === "(" ? "" : v) + se, de = (O === "s" ? J_[8 + zc / 3] : "") + de + (W && v === "(" ? ")" : ""), Y) {
          for (re = -1, te = j.length; ++re < te; )
            if (J = j.charCodeAt(re), 48 > J || J > 57) {
              de = (J === 46 ? l + j.slice(re + 1) : j.slice(re)) + de, j = j.slice(0, re);
              break;
            }
        }
      }
      A && !k && (j = t(j, 1 / 0));
      var C = se.length + j.length + de.length, R = C < T ? new Array(T - C + 1).join(g) : "";
      switch (A && k && (j = t(R + j, R.length ? T - de.length : 1 / 0), R = ""), w) {
        case "<":
          j = se + j + de + R;
          break;
        case "=":
          j = se + R + j + de;
          break;
        case "^":
          j = R.slice(0, C = R.length >> 1) + se + j + de + R.slice(C);
          break;
        default:
          j = R + se + j + de;
          break;
      }
      return f(j);
    }
    return D.toString = function() {
      return h + "";
    }, D;
  }
  function d(h, g) {
    var w = c((h = zl(h), h.type = "f", h)), v = Math.max(-8, Math.min(8, Math.floor(Nr(g) / 3))) * 3, S = Math.pow(10, -v), k = J_[8 + v / 3];
    return function(T) {
      return w(S * T) + k;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var Io, _n, Ac;
C3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function C3(e) {
  return Io = A3(e), _n = Io.format, Ac = Io.formatPrefix, Io;
}
function L3(e) {
  return Math.max(0, -Nr(Math.abs(e)));
}
function E3(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Nr(t) / 3))) * 3 - Nr(Math.abs(e)));
}
function R3(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Nr(t) - Nr(e)) + 1;
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
function Cc() {
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
    return Cc(t, n).unknown(i);
  }, Dl.apply(l, arguments), l;
}
function bl() {
  var e = Cc().unknown(void 0), t = e.domain, n = e.range, i = 0, l = 1, f, u, a = !1, _ = 0, c = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var g = t().length, w = l < i, v = w ? l : i, S = w ? i : l;
    f = (S - v) / Math.max(1, g - _ + c * 2), a && (f = Math.floor(f)), v += (S - v - f * (g - _)) * d, u = f * (1 - _), a && (v = Math.round(v), u = Math.round(u));
    var k = j6(g).map(function(T) {
      return v + f * T;
    });
    return n(w ? k.reverse() : k);
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
    return bl(t(), [i, l]).round(a).paddingInner(_).paddingOuter(c).align(d);
  }, Dl.apply(h(), arguments);
}
function Lc(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Lc(t());
  }, e;
}
function I3() {
  return Lc(bl.apply(null, arguments).paddingInner(1));
}
function O3(e) {
  return function() {
    return e;
  };
}
function D3(e) {
  return +e;
}
var V_ = [0, 1];
function Cr(e) {
  return e;
}
function Pu(e, t) {
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
  return l < i ? (i = Pu(l, i), f = n(u, f)) : (i = Pu(i, l), f = n(f, u)), function(a) {
    return f(i(a));
  };
}
function P3(e, t, n) {
  var i = Math.min(e.length, t.length) - 1, l = new Array(i), f = new Array(i), u = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++u < i; )
    l[u] = Pu(e[u], e[u + 1]), f[u] = n(t[u], t[u + 1]);
  return function(a) {
    var _ = B6(e, a, 1, i) - 1;
    return f[_](l[_](a));
  };
}
function na(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ec() {
  var e = V_, t = V_, n = ea, i, l, f, u = Cr, a, _, c;
  function d() {
    var g = Math.min(e.length, t.length);
    return u !== Cr && (u = N3(e[0], e[g - 1])), a = g > 2 ? P3 : U3, _ = c = null, h;
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
    return arguments.length ? (u = g ? !0 : Cr, d()) : u !== Cr;
  }, h.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, h.unknown = function(g) {
    return arguments.length ? (f = g, h) : f;
  }, function(g, w) {
    return i = g, l = w, d();
  };
}
function Rc() {
  return Ec()(Cr, Cr);
}
function F3(e, t, n, i) {
  var l = Ru(e, t, n), f;
  switch (i = zl(i ?? ",f"), i.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(t));
      return i.precision == null && !isNaN(f = E3(l, u)) && (i.precision = f), Ac(i, u);
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
  return _n(i);
}
function W3(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var i = t();
    return Lu(i[0], i[i.length - 1], n ?? 10);
  }, e.tickFormat = function(n, i) {
    var l = t();
    return F3(l[0], l[l.length - 1], n ?? 10, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = t(), l = 0, f = i.length - 1, u = i[l], a = i[f], _, c, d = 10;
    for (a < u && (c = u, u = a, a = c, c = l, l = f, f = c); d-- > 0; ) {
      if (c = Eu(u, a, n), c === _)
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
function Ui() {
  var e = Rc();
  return e.copy = function() {
    return na(e, Ui());
  }, Dl.apply(e, arguments), W3(e);
}
function Ic(e, t) {
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
function th(e) {
  return (t, n) => -e(-t, n);
}
function G3(e) {
  const t = e($_, eh), n = t.domain;
  let i = 10, l, f;
  function u() {
    return l = q3(i), f = X3(i), n()[0] < 0 ? (l = th(l), f = th(f), e(B3, H3)) : e($_, eh), t;
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
    let g = l(c), w = l(d), v, S;
    const k = a == null ? 10 : +a;
    let T = [];
    if (!(i % 1) && w - g < k) {
      if (g = Math.floor(g), w = Math.ceil(w), c > 0) {
        for (; g <= w; ++g)
          for (v = 1; v < i; ++v)
            if (S = g < 0 ? v / f(-g) : v * f(g), !(S < c)) {
              if (S > d)
                break;
              T.push(S);
            }
      } else
        for (; g <= w; ++g)
          for (v = i - 1; v >= 1; --v)
            if (S = g > 0 ? v / f(-g) : v * f(g), !(S < c)) {
              if (S > d)
                break;
              T.push(S);
            }
      T.length * 2 < k && (T = Lu(c, d, k));
    } else
      T = Lu(g, w, Math.min(w - g, k)).map(f);
    return h ? T.reverse() : T;
  }, t.tickFormat = (a, _) => {
    if (a == null && (a = 10), _ == null && (_ = i === 10 ? "s" : ","), typeof _ != "function" && (!(i % 1) && (_ = zl(_)).precision == null && (_.trim = !0), _ = _n(_)), a === 1 / 0)
      return _;
    const c = Math.max(1, i * a / t.ticks().length);
    return (d) => {
      let h = d / f(Math.round(l(d)));
      return h * i < i - 0.5 && (h *= i), h <= c ? _(d) : "";
    };
  }, t.nice = () => n(Ic(n(), {
    floor: (a) => f(Math.floor(l(a))),
    ceil: (a) => f(Math.ceil(l(a)))
  })), t;
}
function Oc() {
  const e = G3(Ec()).domain([1, 10]);
  return e.copy = () => na(e, Oc()).base(e.base()), Dl.apply(e, arguments), e;
}
const bu = /* @__PURE__ */ new Date(), wu = /* @__PURE__ */ new Date();
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
  }), n && (l.count = (f, u) => (bu.setTime(+f), wu.setTime(+u), e(bu), e(wu), Math.floor(n(bu, wu))), l.every = (f) => (f = Math.floor(f), !isFinite(f) || !(f > 0) ? null : f > 1 ? l.filter(i ? (u) => i(u) % f === 0 : (u) => l.count(0, u) % f === 0) : l)), l;
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
const ki = 1e3, Zn = ki * 60, xi = Zn * 60, Mi = xi * 24, ia = Mi * 7, nh = Mi * 30, pu = Mi * 365, Lr = Yt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * ki);
}, (e, t) => (t - e) / ki, (e) => e.getUTCSeconds());
Lr.range;
const ra = Yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ki);
}, (e, t) => {
  e.setTime(+e + t * Zn);
}, (e, t) => (t - e) / Zn, (e) => e.getMinutes());
ra.range;
const Z3 = Yt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Zn);
}, (e, t) => (t - e) / Zn, (e) => e.getUTCMinutes());
Z3.range;
const la = Yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ki - e.getMinutes() * Zn);
}, (e, t) => {
  e.setTime(+e + t * xi);
}, (e, t) => (t - e) / xi, (e) => e.getHours());
la.range;
const j3 = Yt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * xi);
}, (e, t) => (t - e) / xi, (e) => e.getUTCHours());
j3.range;
const Nl = Yt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Zn) / Mi,
  (e) => e.getDate() - 1
);
Nl.range;
const oa = Yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Mi, (e) => e.getUTCDate() - 1);
oa.range;
const K3 = Yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Mi, (e) => Math.floor(e / Mi));
K3.range;
function lr(e) {
  return Yt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Zn) / ia);
}
const ef = lr(0), Go = lr(1), J3 = lr(2), Q3 = lr(3), Ur = lr(4), V3 = lr(5), $3 = lr(6);
ef.range;
Go.range;
J3.range;
Q3.range;
Ur.range;
V3.range;
$3.range;
function or(e) {
  return Yt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / ia);
}
const Dc = or(0), Zo = or(1), e5 = or(2), t5 = or(3), Pr = or(4), n5 = or(5), i5 = or(6);
Dc.range;
Zo.range;
e5.range;
t5.range;
Pr.range;
n5.range;
i5.range;
const fa = Yt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
fa.range;
const r5 = Yt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
r5.range;
const Ti = Yt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ti.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Yt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Ti.range;
const ir = Yt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
ir.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Yt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
ir.range;
function l5(e, t, n, i, l, f) {
  const u = [
    [Lr, 1, ki],
    [Lr, 5, 5 * ki],
    [Lr, 15, 15 * ki],
    [Lr, 30, 30 * ki],
    [f, 1, Zn],
    [f, 5, 5 * Zn],
    [f, 15, 15 * Zn],
    [f, 30, 30 * Zn],
    [l, 1, xi],
    [l, 3, 3 * xi],
    [l, 6, 6 * xi],
    [l, 12, 12 * xi],
    [i, 1, Mi],
    [i, 2, 2 * Mi],
    [n, 1, ia],
    [t, 1, nh],
    [t, 3, 3 * nh],
    [e, 1, pu]
  ];
  function a(c, d, h) {
    const g = d < c;
    g && ([c, d] = [d, c]);
    const w = h && typeof h.range == "function" ? h : _(c, d, h), v = w ? w.range(c, +d + 1) : [];
    return g ? v.reverse() : v;
  }
  function _(c, d, h) {
    const g = Math.abs(d - c) / h, w = Il(([, , k]) => k).right(u, g);
    if (w === u.length)
      return e.every(Ru(c / pu, d / pu, h));
    if (w === 0)
      return qo.every(Math.max(Ru(c, d, h), 1));
    const [v, S] = u[g / u[w - 1][2] < u[w][2] / g ? w - 1 : w];
    return v.every(S);
  }
  return [a, _];
}
const [o5, f5] = l5(Ti, fa, ef, Nl, la, ra);
function vu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ku(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function hl(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function u5(e) {
  var t = e.dateTime, n = e.date, i = e.time, l = e.periods, f = e.days, u = e.shortDays, a = e.months, _ = e.shortMonths, c = cl(l), d = gl(l), h = cl(f), g = gl(f), w = cl(u), v = gl(u), S = cl(a), k = gl(a), T = cl(_), A = gl(_), z = {
    a: W,
    A: C,
    b: R,
    B: ce,
    c: null,
    d: uh,
    e: uh,
    f: E5,
    g: B5,
    G: Y5,
    H: A5,
    I: C5,
    j: L5,
    L: Nc,
    m: R5,
    M: I5,
    p: he,
    q: kt,
    Q: _h,
    s: hh,
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
    "%": sh
  }, U = {
    a: Kt,
    A: Je,
    b: Ue,
    B: $e,
    c: null,
    d: ah,
    e: ah,
    f: j5,
    g: rw,
    G: ow,
    H: q5,
    I: G5,
    j: Z5,
    L: Pc,
    m: K5,
    M: J5,
    p: at,
    q: Xe,
    Q: _h,
    s: hh,
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
    "%": sh
  }, O = {
    a: D,
    A: j,
    b: se,
    B: de,
    c: re,
    d: oh,
    e: oh,
    f: M5,
    g: lh,
    G: rh,
    H: fh,
    I: fh,
    j: p5,
    L: x5,
    m: w5,
    M: v5,
    p: Y,
    q: b5,
    Q: S5,
    s: z5,
    S: k5,
    u: c5,
    U: g5,
    V: d5,
    w: h5,
    W: m5,
    x: te,
    X: J,
    y: lh,
    Y: rh,
    Z: y5,
    "%": T5
  };
  z.x = E(n, z), z.X = E(i, z), z.c = E(t, z), U.x = E(n, U), U.X = E(i, U), U.c = E(t, U);
  function E(ae, me) {
    return function(be) {
      var V = [], Ce = -1, ye = 0, He = ae.length, Qe, et, qe;
      for (be instanceof Date || (be = /* @__PURE__ */ new Date(+be)); ++Ce < He; )
        ae.charCodeAt(Ce) === 37 && (V.push(ae.slice(ye, Ce)), (et = ih[Qe = ae.charAt(++Ce)]) != null ? Qe = ae.charAt(++Ce) : et = Qe === "e" ? " " : "0", (qe = me[Qe]) && (Qe = qe(be, et)), V.push(Qe), ye = Ce + 1);
      return V.push(ae.slice(ye, Ce)), V.join("");
    };
  }
  function B(ae, me) {
    return function(be) {
      var V = hl(1900, void 0, 1), Ce = G(V, ae, be += "", 0), ye, He;
      if (Ce != be.length)
        return null;
      if ("Q" in V)
        return new Date(V.Q);
      if ("s" in V)
        return new Date(V.s * 1e3 + ("L" in V ? V.L : 0));
      if (me && !("Z" in V) && (V.Z = 0), "p" in V && (V.H = V.H % 12 + V.p * 12), V.m === void 0 && (V.m = "q" in V ? V.q : 0), "V" in V) {
        if (V.V < 1 || V.V > 53)
          return null;
        "w" in V || (V.w = 1), "Z" in V ? (ye = ku(hl(V.y, 0, 1)), He = ye.getUTCDay(), ye = He > 4 || He === 0 ? Zo.ceil(ye) : Zo(ye), ye = oa.offset(ye, (V.V - 1) * 7), V.y = ye.getUTCFullYear(), V.m = ye.getUTCMonth(), V.d = ye.getUTCDate() + (V.w + 6) % 7) : (ye = vu(hl(V.y, 0, 1)), He = ye.getDay(), ye = He > 4 || He === 0 ? Go.ceil(ye) : Go(ye), ye = Nl.offset(ye, (V.V - 1) * 7), V.y = ye.getFullYear(), V.m = ye.getMonth(), V.d = ye.getDate() + (V.w + 6) % 7);
      } else
        ("W" in V || "U" in V) && ("w" in V || (V.w = "u" in V ? V.u % 7 : "W" in V ? 1 : 0), He = "Z" in V ? ku(hl(V.y, 0, 1)).getUTCDay() : vu(hl(V.y, 0, 1)).getDay(), V.m = 0, V.d = "W" in V ? (V.w + 6) % 7 + V.W * 7 - (He + 5) % 7 : V.w + V.U * 7 - (He + 6) % 7);
      return "Z" in V ? (V.H += V.Z / 100 | 0, V.M += V.Z % 100, ku(V)) : vu(V);
    };
  }
  function G(ae, me, be, V) {
    for (var Ce = 0, ye = me.length, He = be.length, Qe, et; Ce < ye; ) {
      if (V >= He)
        return -1;
      if (Qe = me.charCodeAt(Ce++), Qe === 37) {
        if (Qe = me.charAt(Ce++), et = O[Qe in ih ? me.charAt(Ce++) : Qe], !et || (V = et(ae, be, V)) < 0)
          return -1;
      } else if (Qe != be.charCodeAt(V++))
        return -1;
    }
    return V;
  }
  function Y(ae, me, be) {
    var V = c.exec(me.slice(be));
    return V ? (ae.p = d.get(V[0].toLowerCase()), be + V[0].length) : -1;
  }
  function D(ae, me, be) {
    var V = w.exec(me.slice(be));
    return V ? (ae.w = v.get(V[0].toLowerCase()), be + V[0].length) : -1;
  }
  function j(ae, me, be) {
    var V = h.exec(me.slice(be));
    return V ? (ae.w = g.get(V[0].toLowerCase()), be + V[0].length) : -1;
  }
  function se(ae, me, be) {
    var V = T.exec(me.slice(be));
    return V ? (ae.m = A.get(V[0].toLowerCase()), be + V[0].length) : -1;
  }
  function de(ae, me, be) {
    var V = S.exec(me.slice(be));
    return V ? (ae.m = k.get(V[0].toLowerCase()), be + V[0].length) : -1;
  }
  function re(ae, me, be) {
    return G(ae, t, me, be);
  }
  function te(ae, me, be) {
    return G(ae, n, me, be);
  }
  function J(ae, me, be) {
    return G(ae, i, me, be);
  }
  function W(ae) {
    return u[ae.getDay()];
  }
  function C(ae) {
    return f[ae.getDay()];
  }
  function R(ae) {
    return _[ae.getMonth()];
  }
  function ce(ae) {
    return a[ae.getMonth()];
  }
  function he(ae) {
    return l[+(ae.getHours() >= 12)];
  }
  function kt(ae) {
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
      var me = E(ae += "", z);
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
      var me = E(ae += "", U);
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
var ih = { "-": "", _: " ", 0: "0" }, jt = /^\s*\d+/, a5 = /^%/, s5 = /[\\^$*+?|[\]().{}]/g;
function Ve(e, t, n) {
  var i = e < 0 ? "-" : "", l = (i ? -e : e) + "", f = l.length;
  return i + (f < n ? new Array(n - f + 1).join(t) + l : l);
}
function _5(e) {
  return e.replace(s5, "\\$&");
}
function cl(e) {
  return new RegExp("^(?:" + e.map(_5).join("|") + ")", "i");
}
function gl(e) {
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
function rh(e, t, n) {
  var i = jt.exec(t.slice(n, n + 4));
  return i ? (e.y = +i[0], n + i[0].length) : -1;
}
function lh(e, t, n) {
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
function oh(e, t, n) {
  var i = jt.exec(t.slice(n, n + 2));
  return i ? (e.d = +i[0], n + i[0].length) : -1;
}
function p5(e, t, n) {
  var i = jt.exec(t.slice(n, n + 3));
  return i ? (e.m = 0, e.d = +i[0], n + i[0].length) : -1;
}
function fh(e, t, n) {
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
function uh(e, t) {
  return Ve(e.getDate(), t, 2);
}
function A5(e, t) {
  return Ve(e.getHours(), t, 2);
}
function C5(e, t) {
  return Ve(e.getHours() % 12 || 12, t, 2);
}
function L5(e, t) {
  return Ve(1 + Nl.count(Ti(e), e), t, 3);
}
function Nc(e, t) {
  return Ve(e.getMilliseconds(), t, 3);
}
function E5(e, t) {
  return Nc(e, t) + "000";
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
  return Ve(ef.count(Ti(e) - 1, e), t, 2);
}
function Uc(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ur(e) : Ur.ceil(e);
}
function U5(e, t) {
  return e = Uc(e), Ve(Ur.count(Ti(e), e) + (Ti(e).getDay() === 4), t, 2);
}
function P5(e) {
  return e.getDay();
}
function F5(e, t) {
  return Ve(Go.count(Ti(e) - 1, e), t, 2);
}
function W5(e, t) {
  return Ve(e.getFullYear() % 100, t, 2);
}
function B5(e, t) {
  return e = Uc(e), Ve(e.getFullYear() % 100, t, 2);
}
function H5(e, t) {
  return Ve(e.getFullYear() % 1e4, t, 4);
}
function Y5(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Ur(e) : Ur.ceil(e), Ve(e.getFullYear() % 1e4, t, 4);
}
function X5(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ve(t / 60 | 0, "0", 2) + Ve(t % 60, "0", 2);
}
function ah(e, t) {
  return Ve(e.getUTCDate(), t, 2);
}
function q5(e, t) {
  return Ve(e.getUTCHours(), t, 2);
}
function G5(e, t) {
  return Ve(e.getUTCHours() % 12 || 12, t, 2);
}
function Z5(e, t) {
  return Ve(1 + oa.count(ir(e), e), t, 3);
}
function Pc(e, t) {
  return Ve(e.getUTCMilliseconds(), t, 3);
}
function j5(e, t) {
  return Pc(e, t) + "000";
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
  return Ve(Dc.count(ir(e) - 1, e), t, 2);
}
function Fc(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Pr(e) : Pr.ceil(e);
}
function ew(e, t) {
  return e = Fc(e), Ve(Pr.count(ir(e), e) + (ir(e).getUTCDay() === 4), t, 2);
}
function tw(e) {
  return e.getUTCDay();
}
function nw(e, t) {
  return Ve(Zo.count(ir(e) - 1, e), t, 2);
}
function iw(e, t) {
  return Ve(e.getUTCFullYear() % 100, t, 2);
}
function rw(e, t) {
  return e = Fc(e), Ve(e.getUTCFullYear() % 100, t, 2);
}
function lw(e, t) {
  return Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function ow(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Pr(e) : Pr.ceil(e), Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function fw() {
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
var zr, ua, Fr;
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
  return zr = u5(e), ua = zr.format, Fr = zr.parse, zr.utcFormat, zr.utcParse, zr;
}
function aw(e) {
  return new Date(e);
}
function sw(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Wc(e, t, n, i, l, f, u, a, _, c) {
  var d = Rc(), h = d.invert, g = d.domain, w = c(".%L"), v = c(":%S"), S = c("%I:%M"), k = c("%I %p"), T = c("%a %d"), A = c("%b %d"), z = c("%B"), U = c("%Y");
  function O(E) {
    return (_(E) < E ? w : a(E) < E ? v : u(E) < E ? S : f(E) < E ? k : i(E) < E ? l(E) < E ? T : A : n(E) < E ? z : U)(E);
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
    return (!E || typeof E.range != "function") && (E = t(B[0], B[B.length - 1], E ?? 10)), E ? g(Ic(B, E)) : d;
  }, d.copy = function() {
    return na(d, Wc(e, t, n, i, l, f, u, a, _, c));
  }, d;
}
function _w() {
  return Dl.apply(Wc(o5, f5, Ti, fa, ef, Nl, la, ra, Lr, ua).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Gt(e) {
  return function() {
    return e;
  };
}
function Bc(e) {
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
function Hc(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Yc(e) {
  this._context = e;
}
Yc.prototype = {
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
function Xc(e) {
  return new Yc(e);
}
function qc(e) {
  return e[0];
}
function Gc(e) {
  return e[1];
}
function Zc(e, t) {
  var n = Gt(!0), i = null, l = Xc, f = null, u = Bc(a);
  e = typeof e == "function" ? e : e === void 0 ? qc : Gt(e), t = typeof t == "function" ? t : t === void 0 ? Gc : Gt(t);
  function a(_) {
    var c, d = (_ = Hc(_)).length, h, g = !1, w;
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
function ch(e, t, n) {
  var i = null, l = Gt(!0), f = null, u = Xc, a = null, _ = Bc(c);
  e = typeof e == "function" ? e : e === void 0 ? qc : Gt(+e), t = typeof t == "function" ? t : Gt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Gc : Gt(+n);
  function c(h) {
    var g, w, v, S = (h = Hc(h)).length, k, T = !1, A, z = new Array(S), U = new Array(S);
    for (f == null && (a = u(A = _())), g = 0; g <= S; ++g) {
      if (!(g < S && l(k = h[g], g, h)) === T)
        if (T = !T)
          w = g, a.areaStart(), a.lineStart();
        else {
          for (a.lineEnd(), a.lineStart(), v = g - 1; v >= w; --v)
            a.point(z[v], U[v]);
          a.lineEnd(), a.areaEnd();
        }
      T && (z[g] = +e(k, g, h), U[g] = +t(k, g, h), a.point(i ? +i(k, g, h) : z[g], n ? +n(k, g, h) : U[g]));
    }
    if (A)
      return a = null, A + "" || null;
  }
  function d() {
    return Zc().defined(l).curve(u).context(f);
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
function jc(e) {
  this._context = e;
}
jc.prototype = {
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
function hw(e) {
  return new jc(e);
}
function ml(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
ml.prototype = {
  constructor: ml,
  scale: function(e) {
    return e === 1 ? this : new ml(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new ml(this.k, this.x + this.k * e, this.y + this.k * t);
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
ml.prototype;
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
function cw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dh(Object(n), !0).forEach(function(i) {
      gw(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dh(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function wl(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wl = function(t) {
    return typeof t;
  } : wl = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wl(e);
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
function Kc(e, t) {
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
var pw = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, Dr = {
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
Object.keys(Dr).forEach(function(e) {
  Dr[e.toLowerCase()] = Dr[e];
});
function Fu(e, t) {
  for (var n = Array(e), i = 0; i < e; i++)
    n[i] = t;
  return n;
}
function vw(e) {
  return "".concat(e.type).concat(Dr[e.type].map(function(t) {
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
    l.type === "M" && (l.type = "L"), i = i.concat(Fu(n - 1).map(function() {
      return l;
    })), i.push(t);
  }
  return i;
}
function yh(e, t, n) {
  var i = e.length - 1, l = t.length - 1, f = i / l, u = Fu(l).reduce(function(_, c, d) {
    var h = Math.floor(f * d);
    if (n && h < e.length - 1 && n(e[h], e[h + 1])) {
      var g = f * d % 1 < 0.5;
      _[h] && (g ? h > 0 ? h -= 1 : h < e.length - 1 && (h += 1) : h < e.length - 1 ? h += 1 : h > 0 && (h -= 1));
    }
    return _[h] = (_[h] || 0) + 1, _;
  }, []), a = u.reduce(function(_, c, d) {
    if (d === e.length - 1) {
      var h = Fu(c, jo({}, e[e.length - 1]));
      return h[0].type === "M" && h.forEach(function(g) {
        g.type = "L";
      }), _.concat(h);
    }
    return _.concat(xw(e[d], e[d + 1], c));
  }, []);
  return a.unshift(e[0]), a;
}
function bh(e) {
  for (var t = (e || "").match(pw) || [], n = [], i, l, f = 0; f < t.length; ++f)
    if (i = Dr[t[f]], i) {
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
  var i = e == null ? [] : e.slice(), l = t == null ? [] : t.slice(), f = wl(n) === "object" ? n : {
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
  c !== 0 && (l.length > i.length ? i = yh(i, l, u) : l.length < i.length && (l = yh(l, i, u))), i = i.map(function(h, g) {
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
      var v = i[w], S = l[w], k = d[w], T = Kc(Dr[k.type]), A;
      try {
        for (T.s(); !(A = T.n()).done; ) {
          var z = A.value;
          k[z] = (1 - g) * v[z] + g * S[z], (z === "largeArcFlag" || z === "sweepFlag") && (k[z] = Math.round(k[z]));
        }
      } catch (U) {
        T.e(U);
      } finally {
        T.f();
      }
    }
    return d;
  };
}
function Tw(e, t, n) {
  var i = bh(e), l = bh(t), f = wl(n) === "object" ? n : {
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
    var h = _(d), g = "", w = Kc(h), v;
    try {
      for (w.s(); !(v = w.n()).done; ) {
        var S = v.value;
        g += vw(S);
      }
    } catch (k) {
      w.e(k);
    } finally {
      w.f();
    }
    return g;
  };
}
var vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jc(e) {
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
    var n, i = "4.17.21", l = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", a = "Invalid `variable` option passed into `_.template`", _ = "__lodash_hash_undefined__", c = 500, d = "__lodash_placeholder__", h = 1, g = 2, w = 4, v = 1, S = 2, k = 1, T = 2, A = 4, z = 8, U = 16, O = 32, E = 64, B = 128, G = 256, Y = 512, D = 30, j = "...", se = 800, de = 16, re = 1, te = 2, J = 3, W = 1 / 0, C = 9007199254740991, R = 17976931348623157e292, ce = 0 / 0, he = 4294967295, kt = he - 1, Kt = he >>> 1, Je = [
      ["ary", B],
      ["bind", k],
      ["bindKey", T],
      ["curry", z],
      ["curryRight", U],
      ["flip", Y],
      ["partial", O],
      ["partialRight", E],
      ["rearg", G]
    ], Ue = "[object Arguments]", $e = "[object Array]", at = "[object AsyncFunction]", Xe = "[object Boolean]", ae = "[object Date]", me = "[object DOMException]", be = "[object Error]", V = "[object Function]", Ce = "[object GeneratorFunction]", ye = "[object Map]", He = "[object Number]", Qe = "[object Null]", et = "[object Object]", qe = "[object Promise]", H = "[object Proxy]", oe = "[object RegExp]", Me = "[object Set]", Mt = "[object String]", Tt = "[object Symbol]", Xt = "[object Undefined]", gt = "[object WeakMap]", St = "[object WeakSet]", $t = "[object ArrayBuffer]", wt = "[object DataView]", zt = "[object Float32Array]", en = "[object Float64Array]", Nn = "[object Int8Array]", tn = "[object Int16Array]", ln = "[object Int32Array]", Kn = "[object Uint8Array]", hn = "[object Uint8ClampedArray]", xn = "[object Uint16Array]", on = "[object Uint32Array]", Mn = /\b__p \+= '';/g, yt = /\b(__p \+=) '' \+/g, Un = /(__e\(.*?\)|\b__t\)) \+\n'';/g, cn = /&(?:amp|lt|gt|quot|#39);/g, At = /[&<>"']/g, Tn = RegExp(cn.source), Sn = RegExp(At.source), Jn = /<%-([\s\S]+?)%>/g, Qn = /<%([\s\S]+?)%>/g, zn = /<%=([\s\S]+?)%>/g, $ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tt = /^\w*$/, Ct = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gn = /[\\^$.*+?()[\]{}|]/g, fn = RegExp(gn.source), Pn = /^\s+/, ii = /\s/, ai = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Xr = /\{\n\/\* \[wrapped with (.+)\] \*/, An = /,? & /, Cn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Wi = /[()=,{}\[\]\/\s]/, Bi = /\\(\\)?/g, fr = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, si = /\w*$/, X = /^[-+]0x[0-9a-f]+$/i, Ut = /^0b[01]+$/i, dt = /^\[object .+?Constructor\]$/, _i = /^0o[0-7]+$/i, ur = /^(?:0|[1-9]\d*)$/, ar = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Si = /($^)/, qr = /['\n\r\u2028\u2029\\]/g, zi = "\\ud800-\\udfff", Gr = "\\u0300-\\u036f", Zr = "\\ufe20-\\ufe2f", nf = "\\u20d0-\\u20ff", Ul = Gr + Zr + nf, Pl = "\\u2700-\\u27bf", Fl = "a-z\\xdf-\\xf6\\xf8-\\xff", rf = "\\xac\\xb1\\xd7\\xf7", P = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ft = "\\u2000-\\u206f", Lt = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Wl = "A-Z\\xc0-\\xd6\\xd8-\\xde", Bl = "\\ufe0e\\ufe0f", jr = rf + P + Ft + Lt, Kr = "['’]", lf = "[" + zi + "]", Hl = "[" + jr + "]", sr = "[" + Ul + "]", Yl = "\\d+", _0 = "[" + Pl + "]", ga = "[" + Fl + "]", da = "[^" + zi + jr + Yl + Pl + Fl + Wl + "]", of = "\\ud83c[\\udffb-\\udfff]", h0 = "(?:" + sr + "|" + of + ")", ma = "[^" + zi + "]", ff = "(?:\\ud83c[\\udde6-\\uddff]){2}", uf = "[\\ud800-\\udbff][\\udc00-\\udfff]", _r = "[" + Wl + "]", ya = "\\u200d", ba = "(?:" + ga + "|" + da + ")", c0 = "(?:" + _r + "|" + da + ")", wa = "(?:" + Kr + "(?:d|ll|m|re|s|t|ve))?", pa = "(?:" + Kr + "(?:D|LL|M|RE|S|T|VE))?", va = h0 + "?", ka = "[" + Bl + "]?", g0 = "(?:" + ya + "(?:" + [ma, ff, uf].join("|") + ")" + ka + va + ")*", d0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", m0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", xa = ka + va + g0, y0 = "(?:" + [_0, ff, uf].join("|") + ")" + xa, b0 = "(?:" + [ma + sr + "?", sr, ff, uf, lf].join("|") + ")", w0 = RegExp(Kr, "g"), p0 = RegExp(sr, "g"), af = RegExp(of + "(?=" + of + ")|" + b0 + xa, "g"), v0 = RegExp([
      _r + "?" + ga + "+" + wa + "(?=" + [Hl, _r, "$"].join("|") + ")",
      c0 + "+" + pa + "(?=" + [Hl, _r + ba, "$"].join("|") + ")",
      _r + "?" + ba + "+" + wa,
      _r + "+" + pa,
      m0,
      d0,
      Yl,
      y0
    ].join("|"), "g"), k0 = RegExp("[" + ya + zi + Ul + Bl + "]"), x0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, M0 = [
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
    ], T0 = -1, bt = {};
    bt[zt] = bt[en] = bt[Nn] = bt[tn] = bt[ln] = bt[Kn] = bt[hn] = bt[xn] = bt[on] = !0, bt[Ue] = bt[$e] = bt[$t] = bt[Xe] = bt[wt] = bt[ae] = bt[be] = bt[V] = bt[ye] = bt[He] = bt[et] = bt[oe] = bt[Me] = bt[Mt] = bt[gt] = !1;
    var mt = {};
    mt[Ue] = mt[$e] = mt[$t] = mt[wt] = mt[Xe] = mt[ae] = mt[zt] = mt[en] = mt[Nn] = mt[tn] = mt[ln] = mt[ye] = mt[He] = mt[et] = mt[oe] = mt[Me] = mt[Mt] = mt[Tt] = mt[Kn] = mt[hn] = mt[xn] = mt[on] = !0, mt[be] = mt[V] = mt[gt] = !1;
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
    }, L0 = parseFloat, E0 = parseInt, Ma = typeof vi == "object" && vi && vi.Object === Object && vi, R0 = typeof self == "object" && self && self.Object === Object && self, Jt = Ma || R0 || Function("return this")(), sf = t && !t.nodeType && t, Hi = sf && !0 && e && !e.nodeType && e, Ta = Hi && Hi.exports === sf, _f = Ta && Ma.process, Fn = function() {
      try {
        var N = Hi && Hi.require && Hi.require("util").types;
        return N || _f && _f.binding && _f.binding("util");
      } catch {
      }
    }(), Sa = Fn && Fn.isArrayBuffer, za = Fn && Fn.isDate, Aa = Fn && Fn.isMap, Ca = Fn && Fn.isRegExp, La = Fn && Fn.isSet, Ea = Fn && Fn.isTypedArray;
    function Ln(N, ee, Z) {
      switch (Z.length) {
        case 0:
          return N.call(ee);
        case 1:
          return N.call(ee, Z[0]);
        case 2:
          return N.call(ee, Z[0], Z[1]);
        case 3:
          return N.call(ee, Z[0], Z[1], Z[2]);
      }
      return N.apply(ee, Z);
    }
    function I0(N, ee, Z, we) {
      for (var Ee = -1, nt = N == null ? 0 : N.length; ++Ee < nt; ) {
        var Wt = N[Ee];
        ee(we, Wt, Z(Wt), N);
      }
      return we;
    }
    function Wn(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length; ++Z < we && ee(N[Z], Z, N) !== !1; )
        ;
      return N;
    }
    function O0(N, ee) {
      for (var Z = N == null ? 0 : N.length; Z-- && ee(N[Z], Z, N) !== !1; )
        ;
      return N;
    }
    function Ra(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length; ++Z < we; )
        if (!ee(N[Z], Z, N))
          return !1;
      return !0;
    }
    function Ai(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length, Ee = 0, nt = []; ++Z < we; ) {
        var Wt = N[Z];
        ee(Wt, Z, N) && (nt[Ee++] = Wt);
      }
      return nt;
    }
    function Xl(N, ee) {
      var Z = N == null ? 0 : N.length;
      return !!Z && hr(N, ee, 0) > -1;
    }
    function hf(N, ee, Z) {
      for (var we = -1, Ee = N == null ? 0 : N.length; ++we < Ee; )
        if (Z(ee, N[we]))
          return !0;
      return !1;
    }
    function pt(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length, Ee = Array(we); ++Z < we; )
        Ee[Z] = ee(N[Z], Z, N);
      return Ee;
    }
    function Ci(N, ee) {
      for (var Z = -1, we = ee.length, Ee = N.length; ++Z < we; )
        N[Ee + Z] = ee[Z];
      return N;
    }
    function cf(N, ee, Z, we) {
      var Ee = -1, nt = N == null ? 0 : N.length;
      for (we && nt && (Z = N[++Ee]); ++Ee < nt; )
        Z = ee(Z, N[Ee], Ee, N);
      return Z;
    }
    function D0(N, ee, Z, we) {
      var Ee = N == null ? 0 : N.length;
      for (we && Ee && (Z = N[--Ee]); Ee--; )
        Z = ee(Z, N[Ee], Ee, N);
      return Z;
    }
    function gf(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length; ++Z < we; )
        if (ee(N[Z], Z, N))
          return !0;
      return !1;
    }
    var N0 = df("length");
    function U0(N) {
      return N.split("");
    }
    function P0(N) {
      return N.match(Cn) || [];
    }
    function Ia(N, ee, Z) {
      var we;
      return Z(N, function(Ee, nt, Wt) {
        if (ee(Ee, nt, Wt))
          return we = nt, !1;
      }), we;
    }
    function ql(N, ee, Z, we) {
      for (var Ee = N.length, nt = Z + (we ? 1 : -1); we ? nt-- : ++nt < Ee; )
        if (ee(N[nt], nt, N))
          return nt;
      return -1;
    }
    function hr(N, ee, Z) {
      return ee === ee ? J0(N, ee, Z) : ql(N, Oa, Z);
    }
    function F0(N, ee, Z, we) {
      for (var Ee = Z - 1, nt = N.length; ++Ee < nt; )
        if (we(N[Ee], ee))
          return Ee;
      return -1;
    }
    function Oa(N) {
      return N !== N;
    }
    function Da(N, ee) {
      var Z = N == null ? 0 : N.length;
      return Z ? yf(N, ee) / Z : ce;
    }
    function df(N) {
      return function(ee) {
        return ee == null ? n : ee[N];
      };
    }
    function mf(N) {
      return function(ee) {
        return N == null ? n : N[ee];
      };
    }
    function Na(N, ee, Z, we, Ee) {
      return Ee(N, function(nt, Wt, st) {
        Z = we ? (we = !1, nt) : ee(Z, nt, Wt, st);
      }), Z;
    }
    function W0(N, ee) {
      var Z = N.length;
      for (N.sort(ee); Z--; )
        N[Z] = N[Z].value;
      return N;
    }
    function yf(N, ee) {
      for (var Z, we = -1, Ee = N.length; ++we < Ee; ) {
        var nt = ee(N[we]);
        nt !== n && (Z = Z === n ? nt : Z + nt);
      }
      return Z;
    }
    function bf(N, ee) {
      for (var Z = -1, we = Array(N); ++Z < N; )
        we[Z] = ee(Z);
      return we;
    }
    function B0(N, ee) {
      return pt(ee, function(Z) {
        return [Z, N[Z]];
      });
    }
    function Ua(N) {
      return N && N.slice(0, Ba(N) + 1).replace(Pn, "");
    }
    function En(N) {
      return function(ee) {
        return N(ee);
      };
    }
    function wf(N, ee) {
      return pt(ee, function(Z) {
        return N[Z];
      });
    }
    function Jr(N, ee) {
      return N.has(ee);
    }
    function Pa(N, ee) {
      for (var Z = -1, we = N.length; ++Z < we && hr(ee, N[Z], 0) > -1; )
        ;
      return Z;
    }
    function Fa(N, ee) {
      for (var Z = N.length; Z-- && hr(ee, N[Z], 0) > -1; )
        ;
      return Z;
    }
    function H0(N, ee) {
      for (var Z = N.length, we = 0; Z--; )
        N[Z] === ee && ++we;
      return we;
    }
    var Y0 = mf(S0), X0 = mf(z0);
    function q0(N) {
      return "\\" + C0[N];
    }
    function G0(N, ee) {
      return N == null ? n : N[ee];
    }
    function cr(N) {
      return k0.test(N);
    }
    function Z0(N) {
      return x0.test(N);
    }
    function j0(N) {
      for (var ee, Z = []; !(ee = N.next()).done; )
        Z.push(ee.value);
      return Z;
    }
    function pf(N) {
      var ee = -1, Z = Array(N.size);
      return N.forEach(function(we, Ee) {
        Z[++ee] = [Ee, we];
      }), Z;
    }
    function Wa(N, ee) {
      return function(Z) {
        return N(ee(Z));
      };
    }
    function Li(N, ee) {
      for (var Z = -1, we = N.length, Ee = 0, nt = []; ++Z < we; ) {
        var Wt = N[Z];
        (Wt === ee || Wt === d) && (N[Z] = d, nt[Ee++] = Z);
      }
      return nt;
    }
    function Gl(N) {
      var ee = -1, Z = Array(N.size);
      return N.forEach(function(we) {
        Z[++ee] = we;
      }), Z;
    }
    function K0(N) {
      var ee = -1, Z = Array(N.size);
      return N.forEach(function(we) {
        Z[++ee] = [we, we];
      }), Z;
    }
    function J0(N, ee, Z) {
      for (var we = Z - 1, Ee = N.length; ++we < Ee; )
        if (N[we] === ee)
          return we;
      return -1;
    }
    function Q0(N, ee, Z) {
      for (var we = Z + 1; we--; )
        if (N[we] === ee)
          return we;
      return we;
    }
    function gr(N) {
      return cr(N) ? $0(N) : N0(N);
    }
    function Vn(N) {
      return cr(N) ? eg(N) : U0(N);
    }
    function Ba(N) {
      for (var ee = N.length; ee-- && ii.test(N.charAt(ee)); )
        ;
      return ee;
    }
    var V0 = mf(A0);
    function $0(N) {
      for (var ee = af.lastIndex = 0; af.test(N); )
        ++ee;
      return ee;
    }
    function eg(N) {
      return N.match(af) || [];
    }
    function tg(N) {
      return N.match(v0) || [];
    }
    var ng = function N(ee) {
      ee = ee == null ? Jt : dr.defaults(Jt.Object(), ee, dr.pick(Jt, M0));
      var Z = ee.Array, we = ee.Date, Ee = ee.Error, nt = ee.Function, Wt = ee.Math, st = ee.Object, vf = ee.RegExp, ig = ee.String, Bn = ee.TypeError, Zl = Z.prototype, rg = nt.prototype, mr = st.prototype, jl = ee["__core-js_shared__"], Kl = rg.toString, ft = mr.hasOwnProperty, lg = 0, Ha = function() {
        var r = /[^.]+$/.exec(jl && jl.keys && jl.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), Jl = mr.toString, og = Kl.call(st), fg = Jt._, ug = vf(
        "^" + Kl.call(ft).replace(gn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ql = Ta ? ee.Buffer : n, Ei = ee.Symbol, Vl = ee.Uint8Array, Ya = Ql ? Ql.allocUnsafe : n, $l = Wa(st.getPrototypeOf, st), Xa = st.create, qa = mr.propertyIsEnumerable, eo = Zl.splice, Ga = Ei ? Ei.isConcatSpreadable : n, Qr = Ei ? Ei.iterator : n, Yi = Ei ? Ei.toStringTag : n, to = function() {
        try {
          var r = ji(st, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), ag = ee.clearTimeout !== Jt.clearTimeout && ee.clearTimeout, sg = we && we.now !== Jt.Date.now && we.now, _g = ee.setTimeout !== Jt.setTimeout && ee.setTimeout, no = Wt.ceil, io = Wt.floor, kf = st.getOwnPropertySymbols, hg = Ql ? Ql.isBuffer : n, Za = ee.isFinite, cg = Zl.join, gg = Wa(st.keys, st), Bt = Wt.max, nn = Wt.min, dg = we.now, mg = ee.parseInt, ja = Wt.random, yg = Zl.reverse, xf = ji(ee, "DataView"), Vr = ji(ee, "Map"), Mf = ji(ee, "Promise"), yr = ji(ee, "Set"), $r = ji(ee, "WeakMap"), el = ji(st, "create"), ro = $r && new $r(), br = {}, bg = Ki(xf), wg = Ki(Vr), pg = Ki(Mf), vg = Ki(yr), kg = Ki($r), lo = Ei ? Ei.prototype : n, tl = lo ? lo.valueOf : n, Ka = lo ? lo.toString : n;
      function x(r) {
        if (Et(r) && !Re(r) && !(r instanceof Ye)) {
          if (r instanceof Hn)
            return r;
          if (ft.call(r, "__wrapped__"))
            return Js(r);
        }
        return new Hn(r);
      }
      var wr = function() {
        function r() {
        }
        return function(o) {
          if (!xt(o))
            return {};
          if (Xa)
            return Xa(o);
          r.prototype = o;
          var s = new r();
          return r.prototype = n, s;
        };
      }();
      function oo() {
      }
      function Hn(r, o) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = n;
      }
      x.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Jn,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Qn,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: zn,
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
          _: x
        }
      }, x.prototype = oo.prototype, x.prototype.constructor = x, Hn.prototype = wr(oo.prototype), Hn.prototype.constructor = Hn;
      function Ye(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = he, this.__views__ = [];
      }
      function xg() {
        var r = new Ye(this.__wrapped__);
        return r.__actions__ = dn(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = dn(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = dn(this.__views__), r;
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
        var r = this.__wrapped__.value(), o = this.__dir__, s = Re(r), m = o < 0, b = s ? r.length : 0, M = Ud(0, b, this.__views__), L = M.start, I = M.end, F = I - L, ie = m ? I : L - 1, le = this.__iteratees__, fe = le.length, ge = 0, pe = nn(F, this.__takeCount__);
        if (!s || !m && b == F && pe == F)
          return ws(r, this.__actions__);
        var Te = [];
        e:
          for (; F-- && ge < pe; ) {
            ie += o;
            for (var De = -1, Se = r[ie]; ++De < fe; ) {
              var Fe = le[De], Ge = Fe.iteratee, On = Fe.type, sn = Ge(Se);
              if (On == te)
                Se = sn;
              else if (!sn) {
                if (On == re)
                  continue e;
                break e;
              }
            }
            Te[ge++] = Se;
          }
        return Te;
      }
      Ye.prototype = wr(oo.prototype), Ye.prototype.constructor = Ye;
      function Xi(r) {
        var o = -1, s = r == null ? 0 : r.length;
        for (this.clear(); ++o < s; ) {
          var m = r[o];
          this.set(m[0], m[1]);
        }
      }
      function Sg() {
        this.__data__ = el ? el(null) : {}, this.size = 0;
      }
      function zg(r) {
        var o = this.has(r) && delete this.__data__[r];
        return this.size -= o ? 1 : 0, o;
      }
      function Ag(r) {
        var o = this.__data__;
        if (el) {
          var s = o[r];
          return s === _ ? n : s;
        }
        return ft.call(o, r) ? o[r] : n;
      }
      function Cg(r) {
        var o = this.__data__;
        return el ? o[r] !== n : ft.call(o, r);
      }
      function Lg(r, o) {
        var s = this.__data__;
        return this.size += this.has(r) ? 0 : 1, s[r] = el && o === n ? _ : o, this;
      }
      Xi.prototype.clear = Sg, Xi.prototype.delete = zg, Xi.prototype.get = Ag, Xi.prototype.has = Cg, Xi.prototype.set = Lg;
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
          hash: new Xi(),
          map: new (Vr || hi)(),
          string: new Xi()
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
      ci.prototype.clear = Ng, ci.prototype.delete = Ug, ci.prototype.get = Pg, ci.prototype.has = Fg, ci.prototype.set = Wg;
      function qi(r) {
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
      qi.prototype.add = qi.prototype.push = Bg, qi.prototype.has = Hg;
      function $n(r) {
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
          if (!Vr || m.length < l - 1)
            return m.push([r, o]), this.size = ++s.size, this;
          s = this.__data__ = new ci(m);
        }
        return s.set(r, o), this.size = s.size, this;
      }
      $n.prototype.clear = Yg, $n.prototype.delete = Xg, $n.prototype.get = qg, $n.prototype.has = Gg, $n.prototype.set = Zg;
      function Ja(r, o) {
        var s = Re(r), m = !s && Ji(r), b = !s && !m && Ni(r), M = !s && !m && !b && xr(r), L = s || m || b || M, I = L ? bf(r.length, ig) : [], F = I.length;
        for (var ie in r)
          (o || ft.call(r, ie)) && !(L && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ie == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          b && (ie == "offset" || ie == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          M && (ie == "buffer" || ie == "byteLength" || ie == "byteOffset") || // Skip index properties.
          yi(ie, F))) && I.push(ie);
        return I;
      }
      function Qa(r) {
        var o = r.length;
        return o ? r[Df(0, o - 1)] : n;
      }
      function jg(r, o) {
        return vo(dn(r), Gi(o, 0, r.length));
      }
      function Kg(r) {
        return vo(dn(r));
      }
      function Tf(r, o, s) {
        (s !== n && !ei(r[o], s) || s === n && !(o in r)) && gi(r, o, s);
      }
      function nl(r, o, s) {
        var m = r[o];
        (!(ft.call(r, o) && ei(m, s)) || s === n && !(o in r)) && gi(r, o, s);
      }
      function fo(r, o) {
        for (var s = r.length; s--; )
          if (ei(r[s][0], o))
            return s;
        return -1;
      }
      function Jg(r, o, s, m) {
        return Ri(r, function(b, M, L) {
          o(m, b, s(b), L);
        }), m;
      }
      function Va(r, o) {
        return r && li(o, qt(o), r);
      }
      function Qg(r, o) {
        return r && li(o, yn(o), r);
      }
      function gi(r, o, s) {
        o == "__proto__" && to ? to(r, o, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : r[o] = s;
      }
      function Sf(r, o) {
        for (var s = -1, m = o.length, b = Z(m), M = r == null; ++s < m; )
          b[s] = M ? n : ou(r, o[s]);
        return b;
      }
      function Gi(r, o, s) {
        return r === r && (s !== n && (r = r <= s ? r : s), o !== n && (r = r >= o ? r : o)), r;
      }
      function Yn(r, o, s, m, b, M) {
        var L, I = o & h, F = o & g, ie = o & w;
        if (s && (L = b ? s(r, m, b, M) : s(r)), L !== n)
          return L;
        if (!xt(r))
          return r;
        var le = Re(r);
        if (le) {
          if (L = Fd(r), !I)
            return dn(r, L);
        } else {
          var fe = rn(r), ge = fe == V || fe == Ce;
          if (Ni(r))
            return ks(r, I);
          if (fe == et || fe == Ue || ge && !b) {
            if (L = F || ge ? {} : Bs(r), !I)
              return F ? Ad(r, Qg(L, r)) : zd(r, Va(L, r));
          } else {
            if (!mt[fe])
              return b ? r : {};
            L = Wd(r, fe, I);
          }
        }
        M || (M = new $n());
        var pe = M.get(r);
        if (pe)
          return pe;
        M.set(r, L), m_(r) ? r.forEach(function(Se) {
          L.add(Yn(Se, o, s, Se, r, M));
        }) : g_(r) && r.forEach(function(Se, Fe) {
          L.set(Fe, Yn(Se, o, s, Fe, r, M));
        });
        var Te = ie ? F ? Gf : qf : F ? yn : qt, De = le ? n : Te(r);
        return Wn(De || r, function(Se, Fe) {
          De && (Fe = Se, Se = r[Fe]), nl(L, Fe, Yn(Se, o, s, Fe, r, M));
        }), L;
      }
      function Vg(r) {
        var o = qt(r);
        return function(s) {
          return $a(s, r, o);
        };
      }
      function $a(r, o, s) {
        var m = s.length;
        if (r == null)
          return !m;
        for (r = st(r); m--; ) {
          var b = s[m], M = o[b], L = r[b];
          if (L === n && !(b in r) || !M(L))
            return !1;
        }
        return !0;
      }
      function es(r, o, s) {
        if (typeof r != "function")
          throw new Bn(u);
        return al(function() {
          r.apply(n, s);
        }, o);
      }
      function il(r, o, s, m) {
        var b = -1, M = Xl, L = !0, I = r.length, F = [], ie = o.length;
        if (!I)
          return F;
        s && (o = pt(o, En(s))), m ? (M = hf, L = !1) : o.length >= l && (M = Jr, L = !1, o = new qi(o));
        e:
          for (; ++b < I; ) {
            var le = r[b], fe = s == null ? le : s(le);
            if (le = m || le !== 0 ? le : 0, L && fe === fe) {
              for (var ge = ie; ge--; )
                if (o[ge] === fe)
                  continue e;
              F.push(le);
            } else
              M(o, fe, m) || F.push(le);
          }
        return F;
      }
      var Ri = zs(ri), ts = zs(Af, !0);
      function $g(r, o) {
        var s = !0;
        return Ri(r, function(m, b, M) {
          return s = !!o(m, b, M), s;
        }), s;
      }
      function uo(r, o, s) {
        for (var m = -1, b = r.length; ++m < b; ) {
          var M = r[m], L = o(M);
          if (L != null && (I === n ? L === L && !In(L) : s(L, I)))
            var I = L, F = M;
        }
        return F;
      }
      function ed(r, o, s, m) {
        var b = r.length;
        for (s = Ie(s), s < 0 && (s = -s > b ? 0 : b + s), m = m === n || m > b ? b : Ie(m), m < 0 && (m += b), m = s > m ? 0 : b_(m); s < m; )
          r[s++] = o;
        return r;
      }
      function ns(r, o) {
        var s = [];
        return Ri(r, function(m, b, M) {
          o(m, b, M) && s.push(m);
        }), s;
      }
      function Qt(r, o, s, m, b) {
        var M = -1, L = r.length;
        for (s || (s = Hd), b || (b = []); ++M < L; ) {
          var I = r[M];
          o > 0 && s(I) ? o > 1 ? Qt(I, o - 1, s, m, b) : Ci(b, I) : m || (b[b.length] = I);
        }
        return b;
      }
      var zf = As(), is = As(!0);
      function ri(r, o) {
        return r && zf(r, o, qt);
      }
      function Af(r, o) {
        return r && is(r, o, qt);
      }
      function ao(r, o) {
        return Ai(o, function(s) {
          return bi(r[s]);
        });
      }
      function Zi(r, o) {
        o = Oi(o, r);
        for (var s = 0, m = o.length; r != null && s < m; )
          r = r[oi(o[s++])];
        return s && s == m ? r : n;
      }
      function rs(r, o, s) {
        var m = o(r);
        return Re(r) ? m : Ci(m, s(r));
      }
      function un(r) {
        return r == null ? r === n ? Xt : Qe : Yi && Yi in st(r) ? Nd(r) : Kd(r);
      }
      function Cf(r, o) {
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
      function Lf(r, o, s) {
        for (var m = s ? hf : Xl, b = r[0].length, M = r.length, L = M, I = Z(M), F = 1 / 0, ie = []; L--; ) {
          var le = r[L];
          L && o && (le = pt(le, En(o))), F = nn(le.length, F), I[L] = !s && (o || b >= 120 && le.length >= 120) ? new qi(L && le) : n;
        }
        le = r[0];
        var fe = -1, ge = I[0];
        e:
          for (; ++fe < b && ie.length < F; ) {
            var pe = le[fe], Te = o ? o(pe) : pe;
            if (pe = s || pe !== 0 ? pe : 0, !(ge ? Jr(ge, Te) : m(ie, Te, s))) {
              for (L = M; --L; ) {
                var De = I[L];
                if (!(De ? Jr(De, Te) : m(r[L], Te, s)))
                  continue e;
              }
              ge && ge.push(Te), ie.push(pe);
            }
          }
        return ie;
      }
      function rd(r, o, s, m) {
        return ri(r, function(b, M, L) {
          o(m, s(b), M, L);
        }), m;
      }
      function rl(r, o, s) {
        o = Oi(o, r), r = qs(r, o);
        var m = r == null ? r : r[oi(qn(o))];
        return m == null ? n : Ln(m, r, s);
      }
      function ls(r) {
        return Et(r) && un(r) == Ue;
      }
      function ld(r) {
        return Et(r) && un(r) == $t;
      }
      function od(r) {
        return Et(r) && un(r) == ae;
      }
      function ll(r, o, s, m, b) {
        return r === o ? !0 : r == null || o == null || !Et(r) && !Et(o) ? r !== r && o !== o : fd(r, o, s, m, ll, b);
      }
      function fd(r, o, s, m, b, M) {
        var L = Re(r), I = Re(o), F = L ? $e : rn(r), ie = I ? $e : rn(o);
        F = F == Ue ? et : F, ie = ie == Ue ? et : ie;
        var le = F == et, fe = ie == et, ge = F == ie;
        if (ge && Ni(r)) {
          if (!Ni(o))
            return !1;
          L = !0, le = !1;
        }
        if (ge && !le)
          return M || (M = new $n()), L || xr(r) ? Ps(r, o, s, m, b, M) : Od(r, o, F, s, m, b, M);
        if (!(s & v)) {
          var pe = le && ft.call(r, "__wrapped__"), Te = fe && ft.call(o, "__wrapped__");
          if (pe || Te) {
            var De = pe ? r.value() : r, Se = Te ? o.value() : o;
            return M || (M = new $n()), b(De, Se, s, m, M);
          }
        }
        return ge ? (M || (M = new $n()), Dd(r, o, s, m, b, M)) : !1;
      }
      function ud(r) {
        return Et(r) && rn(r) == ye;
      }
      function Ef(r, o, s, m) {
        var b = s.length, M = b, L = !m;
        if (r == null)
          return !M;
        for (r = st(r); b--; ) {
          var I = s[b];
          if (L && I[2] ? I[1] !== r[I[0]] : !(I[0] in r))
            return !1;
        }
        for (; ++b < M; ) {
          I = s[b];
          var F = I[0], ie = r[F], le = I[1];
          if (L && I[2]) {
            if (ie === n && !(F in r))
              return !1;
          } else {
            var fe = new $n();
            if (m)
              var ge = m(ie, le, F, r, o, fe);
            if (!(ge === n ? ll(le, ie, v | S, m, fe) : ge))
              return !1;
          }
        }
        return !0;
      }
      function os(r) {
        if (!xt(r) || Xd(r))
          return !1;
        var o = bi(r) ? ug : dt;
        return o.test(Ki(r));
      }
      function ad(r) {
        return Et(r) && un(r) == oe;
      }
      function sd(r) {
        return Et(r) && rn(r) == Me;
      }
      function _d(r) {
        return Et(r) && zo(r.length) && !!bt[un(r)];
      }
      function fs(r) {
        return typeof r == "function" ? r : r == null ? bn : typeof r == "object" ? Re(r) ? ss(r[0], r[1]) : as(r) : C_(r);
      }
      function Rf(r) {
        if (!ul(r))
          return gg(r);
        var o = [];
        for (var s in st(r))
          ft.call(r, s) && s != "constructor" && o.push(s);
        return o;
      }
      function hd(r) {
        if (!xt(r))
          return jd(r);
        var o = ul(r), s = [];
        for (var m in r)
          m == "constructor" && (o || !ft.call(r, m)) || s.push(m);
        return s;
      }
      function If(r, o) {
        return r < o;
      }
      function us(r, o) {
        var s = -1, m = mn(r) ? Z(r.length) : [];
        return Ri(r, function(b, M, L) {
          m[++s] = o(b, M, L);
        }), m;
      }
      function as(r) {
        var o = jf(r);
        return o.length == 1 && o[0][2] ? Ys(o[0][0], o[0][1]) : function(s) {
          return s === r || Ef(s, r, o);
        };
      }
      function ss(r, o) {
        return Jf(r) && Hs(o) ? Ys(oi(r), o) : function(s) {
          var m = ou(s, r);
          return m === n && m === o ? fu(s, r) : ll(o, m, v | S);
        };
      }
      function so(r, o, s, m, b) {
        r !== o && zf(o, function(M, L) {
          if (b || (b = new $n()), xt(M))
            cd(r, o, L, s, so, m, b);
          else {
            var I = m ? m(Vf(r, L), M, L + "", r, o, b) : n;
            I === n && (I = M), Tf(r, L, I);
          }
        }, yn);
      }
      function cd(r, o, s, m, b, M, L) {
        var I = Vf(r, s), F = Vf(o, s), ie = L.get(F);
        if (ie) {
          Tf(r, s, ie);
          return;
        }
        var le = M ? M(I, F, s + "", r, o, L) : n, fe = le === n;
        if (fe) {
          var ge = Re(F), pe = !ge && Ni(F), Te = !ge && !pe && xr(F);
          le = F, ge || pe || Te ? Re(I) ? le = I : Ot(I) ? le = dn(I) : pe ? (fe = !1, le = ks(F, !0)) : Te ? (fe = !1, le = xs(F, !0)) : le = [] : sl(F) || Ji(F) ? (le = I, Ji(I) ? le = w_(I) : (!xt(I) || bi(I)) && (le = Bs(F))) : fe = !1;
        }
        fe && (L.set(F, le), b(le, F, m, M, L), L.delete(F)), Tf(r, s, le);
      }
      function _s(r, o) {
        var s = r.length;
        if (s)
          return o += o < 0 ? s : 0, yi(o, s) ? r[o] : n;
      }
      function hs(r, o, s) {
        o.length ? o = pt(o, function(M) {
          return Re(M) ? function(L) {
            return Zi(L, M.length === 1 ? M[0] : M);
          } : M;
        }) : o = [bn];
        var m = -1;
        o = pt(o, En(xe()));
        var b = us(r, function(M, L, I) {
          var F = pt(o, function(ie) {
            return ie(M);
          });
          return { criteria: F, index: ++m, value: M };
        });
        return W0(b, function(M, L) {
          return Sd(M, L, s);
        });
      }
      function gd(r, o) {
        return cs(r, o, function(s, m) {
          return fu(r, m);
        });
      }
      function cs(r, o, s) {
        for (var m = -1, b = o.length, M = {}; ++m < b; ) {
          var L = o[m], I = Zi(r, L);
          s(I, L) && ol(M, Oi(L, r), I);
        }
        return M;
      }
      function dd(r) {
        return function(o) {
          return Zi(o, r);
        };
      }
      function Of(r, o, s, m) {
        var b = m ? F0 : hr, M = -1, L = o.length, I = r;
        for (r === o && (o = dn(o)), s && (I = pt(r, En(s))); ++M < L; )
          for (var F = 0, ie = o[M], le = s ? s(ie) : ie; (F = b(I, le, F, m)) > -1; )
            I !== r && eo.call(I, F, 1), eo.call(r, F, 1);
        return r;
      }
      function gs(r, o) {
        for (var s = r ? o.length : 0, m = s - 1; s--; ) {
          var b = o[s];
          if (s == m || b !== M) {
            var M = b;
            yi(b) ? eo.call(r, b, 1) : Pf(r, b);
          }
        }
        return r;
      }
      function Df(r, o) {
        return r + io(ja() * (o - r + 1));
      }
      function md(r, o, s, m) {
        for (var b = -1, M = Bt(no((o - r) / (s || 1)), 0), L = Z(M); M--; )
          L[m ? M : ++b] = r, r += s;
        return L;
      }
      function Nf(r, o) {
        var s = "";
        if (!r || o < 1 || o > C)
          return s;
        do
          o % 2 && (s += r), o = io(o / 2), o && (r += r);
        while (o);
        return s;
      }
      function Ne(r, o) {
        return $f(Xs(r, o, bn), r + "");
      }
      function yd(r) {
        return Qa(Mr(r));
      }
      function bd(r, o) {
        var s = Mr(r);
        return vo(s, Gi(o, 0, s.length));
      }
      function ol(r, o, s, m) {
        if (!xt(r))
          return r;
        o = Oi(o, r);
        for (var b = -1, M = o.length, L = M - 1, I = r; I != null && ++b < M; ) {
          var F = oi(o[b]), ie = s;
          if (F === "__proto__" || F === "constructor" || F === "prototype")
            return r;
          if (b != L) {
            var le = I[F];
            ie = m ? m(le, F, I) : n, ie === n && (ie = xt(le) ? le : yi(o[b + 1]) ? [] : {});
          }
          nl(I, F, ie), I = I[F];
        }
        return r;
      }
      var ds = ro ? function(r, o) {
        return ro.set(r, o), r;
      } : bn, wd = to ? function(r, o) {
        return to(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: au(o),
          writable: !0
        });
      } : bn;
      function pd(r) {
        return vo(Mr(r));
      }
      function Xn(r, o, s) {
        var m = -1, b = r.length;
        o < 0 && (o = -o > b ? 0 : b + o), s = s > b ? b : s, s < 0 && (s += b), b = o > s ? 0 : s - o >>> 0, o >>>= 0;
        for (var M = Z(b); ++m < b; )
          M[m] = r[m + o];
        return M;
      }
      function vd(r, o) {
        var s;
        return Ri(r, function(m, b, M) {
          return s = o(m, b, M), !s;
        }), !!s;
      }
      function _o(r, o, s) {
        var m = 0, b = r == null ? m : r.length;
        if (typeof o == "number" && o === o && b <= Kt) {
          for (; m < b; ) {
            var M = m + b >>> 1, L = r[M];
            L !== null && !In(L) && (s ? L <= o : L < o) ? m = M + 1 : b = M;
          }
          return b;
        }
        return Uf(r, o, bn, s);
      }
      function Uf(r, o, s, m) {
        var b = 0, M = r == null ? 0 : r.length;
        if (M === 0)
          return 0;
        o = s(o);
        for (var L = o !== o, I = o === null, F = In(o), ie = o === n; b < M; ) {
          var le = io((b + M) / 2), fe = s(r[le]), ge = fe !== n, pe = fe === null, Te = fe === fe, De = In(fe);
          if (L)
            var Se = m || Te;
          else
            ie ? Se = Te && (m || ge) : I ? Se = Te && ge && (m || !pe) : F ? Se = Te && ge && !pe && (m || !De) : pe || De ? Se = !1 : Se = m ? fe <= o : fe < o;
          Se ? b = le + 1 : M = le;
        }
        return nn(M, kt);
      }
      function ms(r, o) {
        for (var s = -1, m = r.length, b = 0, M = []; ++s < m; ) {
          var L = r[s], I = o ? o(L) : L;
          if (!s || !ei(I, F)) {
            var F = I;
            M[b++] = L === 0 ? 0 : L;
          }
        }
        return M;
      }
      function ys(r) {
        return typeof r == "number" ? r : In(r) ? ce : +r;
      }
      function Rn(r) {
        if (typeof r == "string")
          return r;
        if (Re(r))
          return pt(r, Rn) + "";
        if (In(r))
          return Ka ? Ka.call(r) : "";
        var o = r + "";
        return o == "0" && 1 / r == -W ? "-0" : o;
      }
      function Ii(r, o, s) {
        var m = -1, b = Xl, M = r.length, L = !0, I = [], F = I;
        if (s)
          L = !1, b = hf;
        else if (M >= l) {
          var ie = o ? null : Rd(r);
          if (ie)
            return Gl(ie);
          L = !1, b = Jr, F = new qi();
        } else
          F = o ? [] : I;
        e:
          for (; ++m < M; ) {
            var le = r[m], fe = o ? o(le) : le;
            if (le = s || le !== 0 ? le : 0, L && fe === fe) {
              for (var ge = F.length; ge--; )
                if (F[ge] === fe)
                  continue e;
              o && F.push(fe), I.push(le);
            } else
              b(F, fe, s) || (F !== I && F.push(fe), I.push(le));
          }
        return I;
      }
      function Pf(r, o) {
        return o = Oi(o, r), r = qs(r, o), r == null || delete r[oi(qn(o))];
      }
      function bs(r, o, s, m) {
        return ol(r, o, s(Zi(r, o)), m);
      }
      function ho(r, o, s, m) {
        for (var b = r.length, M = m ? b : -1; (m ? M-- : ++M < b) && o(r[M], M, r); )
          ;
        return s ? Xn(r, m ? 0 : M, m ? M + 1 : b) : Xn(r, m ? M + 1 : 0, m ? b : M);
      }
      function ws(r, o) {
        var s = r;
        return s instanceof Ye && (s = s.value()), cf(o, function(m, b) {
          return b.func.apply(b.thisArg, Ci([m], b.args));
        }, s);
      }
      function Ff(r, o, s) {
        var m = r.length;
        if (m < 2)
          return m ? Ii(r[0]) : [];
        for (var b = -1, M = Z(m); ++b < m; )
          for (var L = r[b], I = -1; ++I < m; )
            I != b && (M[b] = il(M[b] || L, r[I], o, s));
        return Ii(Qt(M, 1), o, s);
      }
      function ps(r, o, s) {
        for (var m = -1, b = r.length, M = o.length, L = {}; ++m < b; ) {
          var I = m < M ? o[m] : n;
          s(L, r[m], I);
        }
        return L;
      }
      function Wf(r) {
        return Ot(r) ? r : [];
      }
      function Bf(r) {
        return typeof r == "function" ? r : bn;
      }
      function Oi(r, o) {
        return Re(r) ? r : Jf(r, o) ? [r] : Ks(lt(r));
      }
      var kd = Ne;
      function Di(r, o, s) {
        var m = r.length;
        return s = s === n ? m : s, !o && s >= m ? r : Xn(r, o, s);
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
      function Hf(r) {
        var o = new r.constructor(r.byteLength);
        return new Vl(o).set(new Vl(r)), o;
      }
      function xd(r, o) {
        var s = o ? Hf(r.buffer) : r.buffer;
        return new r.constructor(s, r.byteOffset, r.byteLength);
      }
      function Md(r) {
        var o = new r.constructor(r.source, si.exec(r));
        return o.lastIndex = r.lastIndex, o;
      }
      function Td(r) {
        return tl ? st(tl.call(r)) : {};
      }
      function xs(r, o) {
        var s = o ? Hf(r.buffer) : r.buffer;
        return new r.constructor(s, r.byteOffset, r.length);
      }
      function Ms(r, o) {
        if (r !== o) {
          var s = r !== n, m = r === null, b = r === r, M = In(r), L = o !== n, I = o === null, F = o === o, ie = In(o);
          if (!I && !ie && !M && r > o || M && L && F && !I && !ie || m && L && F || !s && F || !b)
            return 1;
          if (!m && !M && !ie && r < o || ie && s && b && !m && !M || I && s && b || !L && b || !F)
            return -1;
        }
        return 0;
      }
      function Sd(r, o, s) {
        for (var m = -1, b = r.criteria, M = o.criteria, L = b.length, I = s.length; ++m < L; ) {
          var F = Ms(b[m], M[m]);
          if (F) {
            if (m >= I)
              return F;
            var ie = s[m];
            return F * (ie == "desc" ? -1 : 1);
          }
        }
        return r.index - o.index;
      }
      function Ts(r, o, s, m) {
        for (var b = -1, M = r.length, L = s.length, I = -1, F = o.length, ie = Bt(M - L, 0), le = Z(F + ie), fe = !m; ++I < F; )
          le[I] = o[I];
        for (; ++b < L; )
          (fe || b < M) && (le[s[b]] = r[b]);
        for (; ie--; )
          le[I++] = r[b++];
        return le;
      }
      function Ss(r, o, s, m) {
        for (var b = -1, M = r.length, L = -1, I = s.length, F = -1, ie = o.length, le = Bt(M - I, 0), fe = Z(le + ie), ge = !m; ++b < le; )
          fe[b] = r[b];
        for (var pe = b; ++F < ie; )
          fe[pe + F] = o[F];
        for (; ++L < I; )
          (ge || b < M) && (fe[pe + s[L]] = r[b++]);
        return fe;
      }
      function dn(r, o) {
        var s = -1, m = r.length;
        for (o || (o = Z(m)); ++s < m; )
          o[s] = r[s];
        return o;
      }
      function li(r, o, s, m) {
        var b = !s;
        s || (s = {});
        for (var M = -1, L = o.length; ++M < L; ) {
          var I = o[M], F = m ? m(s[I], r[I], I, s, r) : n;
          F === n && (F = r[I]), b ? gi(s, I, F) : nl(s, I, F);
        }
        return s;
      }
      function zd(r, o) {
        return li(r, Kf(r), o);
      }
      function Ad(r, o) {
        return li(r, Fs(r), o);
      }
      function co(r, o) {
        return function(s, m) {
          var b = Re(s) ? I0 : Jg, M = o ? o() : {};
          return b(s, r, xe(m, 2), M);
        };
      }
      function pr(r) {
        return Ne(function(o, s) {
          var m = -1, b = s.length, M = b > 1 ? s[b - 1] : n, L = b > 2 ? s[2] : n;
          for (M = r.length > 3 && typeof M == "function" ? (b--, M) : n, L && an(s[0], s[1], L) && (M = b < 3 ? n : M, b = 1), o = st(o); ++m < b; ) {
            var I = s[m];
            I && r(o, I, m, M);
          }
          return o;
        });
      }
      function zs(r, o) {
        return function(s, m) {
          if (s == null)
            return s;
          if (!mn(s))
            return r(s, m);
          for (var b = s.length, M = o ? b : -1, L = st(s); (o ? M-- : ++M < b) && m(L[M], M, L) !== !1; )
            ;
          return s;
        };
      }
      function As(r) {
        return function(o, s, m) {
          for (var b = -1, M = st(o), L = m(o), I = L.length; I--; ) {
            var F = L[r ? I : ++b];
            if (s(M[F], F, M) === !1)
              break;
          }
          return o;
        };
      }
      function Cd(r, o, s) {
        var m = o & k, b = fl(r);
        function M() {
          var L = this && this !== Jt && this instanceof M ? b : r;
          return L.apply(m ? s : this, arguments);
        }
        return M;
      }
      function Cs(r) {
        return function(o) {
          o = lt(o);
          var s = cr(o) ? Vn(o) : n, m = s ? s[0] : o.charAt(0), b = s ? Di(s, 1).join("") : o.slice(1);
          return m[r]() + b;
        };
      }
      function vr(r) {
        return function(o) {
          return cf(z_(S_(o).replace(w0, "")), r, "");
        };
      }
      function fl(r) {
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
          var s = wr(r.prototype), m = r.apply(s, o);
          return xt(m) ? m : s;
        };
      }
      function Ld(r, o, s) {
        var m = fl(r);
        function b() {
          for (var M = arguments.length, L = Z(M), I = M, F = kr(b); I--; )
            L[I] = arguments[I];
          var ie = M < 3 && L[0] !== F && L[M - 1] !== F ? [] : Li(L, F);
          if (M -= ie.length, M < s)
            return Os(
              r,
              o,
              go,
              b.placeholder,
              n,
              L,
              ie,
              n,
              n,
              s - M
            );
          var le = this && this !== Jt && this instanceof b ? m : r;
          return Ln(le, this, L);
        }
        return b;
      }
      function Ls(r) {
        return function(o, s, m) {
          var b = st(o);
          if (!mn(o)) {
            var M = xe(s, 3);
            o = qt(o), s = function(I) {
              return M(b[I], I, b);
            };
          }
          var L = r(o, s, m);
          return L > -1 ? b[M ? o[L] : L] : n;
        };
      }
      function Es(r) {
        return mi(function(o) {
          var s = o.length, m = s, b = Hn.prototype.thru;
          for (r && o.reverse(); m--; ) {
            var M = o[m];
            if (typeof M != "function")
              throw new Bn(u);
            if (b && !L && wo(M) == "wrapper")
              var L = new Hn([], !0);
          }
          for (m = L ? m : s; ++m < s; ) {
            M = o[m];
            var I = wo(M), F = I == "wrapper" ? Zf(M) : n;
            F && Qf(F[0]) && F[1] == (B | z | O | G) && !F[4].length && F[9] == 1 ? L = L[wo(F[0])].apply(L, F[3]) : L = M.length == 1 && Qf(M) ? L[I]() : L.thru(M);
          }
          return function() {
            var ie = arguments, le = ie[0];
            if (L && ie.length == 1 && Re(le))
              return L.plant(le).value();
            for (var fe = 0, ge = s ? o[fe].apply(this, ie) : le; ++fe < s; )
              ge = o[fe].call(this, ge);
            return ge;
          };
        });
      }
      function go(r, o, s, m, b, M, L, I, F, ie) {
        var le = o & B, fe = o & k, ge = o & T, pe = o & (z | U), Te = o & Y, De = ge ? n : fl(r);
        function Se() {
          for (var Fe = arguments.length, Ge = Z(Fe), On = Fe; On--; )
            Ge[On] = arguments[On];
          if (pe)
            var sn = kr(Se), Dn = H0(Ge, sn);
          if (m && (Ge = Ts(Ge, m, b, pe)), M && (Ge = Ss(Ge, M, L, pe)), Fe -= Dn, pe && Fe < ie) {
            var Dt = Li(Ge, sn);
            return Os(
              r,
              o,
              go,
              Se.placeholder,
              s,
              Ge,
              Dt,
              I,
              F,
              ie - Fe
            );
          }
          var ti = fe ? s : this, pi = ge ? ti[r] : r;
          return Fe = Ge.length, I ? Ge = Jd(Ge, I) : Te && Fe > 1 && Ge.reverse(), le && F < Fe && (Ge.length = F), this && this !== Jt && this instanceof Se && (pi = De || fl(pi)), pi.apply(ti, Ge);
        }
        return Se;
      }
      function Rs(r, o) {
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
            typeof s == "string" || typeof m == "string" ? (s = Rn(s), m = Rn(m)) : (s = ys(s), m = ys(m)), b = r(s, m);
          }
          return b;
        };
      }
      function Yf(r) {
        return mi(function(o) {
          return o = pt(o, En(xe())), Ne(function(s) {
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
          return s ? Nf(o, r) : o;
        var m = Nf(o, no(r / gr(o)));
        return cr(o) ? Di(Vn(m), 0, r).join("") : m.slice(0, r);
      }
      function Ed(r, o, s, m) {
        var b = o & k, M = fl(r);
        function L() {
          for (var I = -1, F = arguments.length, ie = -1, le = m.length, fe = Z(le + F), ge = this && this !== Jt && this instanceof L ? M : r; ++ie < le; )
            fe[ie] = m[ie];
          for (; F--; )
            fe[ie++] = arguments[++I];
          return Ln(ge, b ? s : this, fe);
        }
        return L;
      }
      function Is(r) {
        return function(o, s, m) {
          return m && typeof m != "number" && an(o, s, m) && (s = m = n), o = wi(o), s === n ? (s = o, o = 0) : s = wi(s), m = m === n ? o < s ? 1 : -1 : wi(m), md(o, s, m, r);
        };
      }
      function bo(r) {
        return function(o, s) {
          return typeof o == "string" && typeof s == "string" || (o = Gn(o), s = Gn(s)), r(o, s);
        };
      }
      function Os(r, o, s, m, b, M, L, I, F, ie) {
        var le = o & z, fe = le ? L : n, ge = le ? n : L, pe = le ? M : n, Te = le ? n : M;
        o |= le ? O : E, o &= ~(le ? E : O), o & A || (o &= ~(k | T));
        var De = [
          r,
          o,
          b,
          pe,
          fe,
          Te,
          ge,
          I,
          F,
          ie
        ], Se = s.apply(n, De);
        return Qf(r) && Gs(Se, De), Se.placeholder = m, Zs(Se, r, o);
      }
      function Xf(r) {
        var o = Wt[r];
        return function(s, m) {
          if (s = Gn(s), m = m == null ? 0 : nn(Ie(m), 292), m && Za(s)) {
            var b = (lt(s) + "e").split("e"), M = o(b[0] + "e" + (+b[1] + m));
            return b = (lt(M) + "e").split("e"), +(b[0] + "e" + (+b[1] - m));
          }
          return o(s);
        };
      }
      var Rd = yr && 1 / Gl(new yr([, -0]))[1] == W ? function(r) {
        return new yr(r);
      } : hu;
      function Ds(r) {
        return function(o) {
          var s = rn(o);
          return s == ye ? pf(o) : s == Me ? K0(o) : B0(o, r(o));
        };
      }
      function di(r, o, s, m, b, M, L, I) {
        var F = o & T;
        if (!F && typeof r != "function")
          throw new Bn(u);
        var ie = m ? m.length : 0;
        if (ie || (o &= ~(O | E), m = b = n), L = L === n ? L : Bt(Ie(L), 0), I = I === n ? I : Ie(I), ie -= b ? b.length : 0, o & E) {
          var le = m, fe = b;
          m = b = n;
        }
        var ge = F ? n : Zf(r), pe = [
          r,
          o,
          s,
          m,
          b,
          le,
          fe,
          M,
          L,
          I
        ];
        if (ge && Zd(pe, ge), r = pe[0], o = pe[1], s = pe[2], m = pe[3], b = pe[4], I = pe[9] = pe[9] === n ? F ? 0 : r.length : Bt(pe[9] - ie, 0), !I && o & (z | U) && (o &= ~(z | U)), !o || o == k)
          var Te = Cd(r, o, s);
        else
          o == z || o == U ? Te = Ld(r, o, I) : (o == O || o == (k | O)) && !b.length ? Te = Ed(r, o, s, m) : Te = go.apply(n, pe);
        var De = ge ? ds : Gs;
        return Zs(De(Te, pe), r, o);
      }
      function Ns(r, o, s, m) {
        return r === n || ei(r, mr[s]) && !ft.call(m, s) ? o : r;
      }
      function Us(r, o, s, m, b, M) {
        return xt(r) && xt(o) && (M.set(o, r), so(r, o, n, Us, M), M.delete(o)), r;
      }
      function Id(r) {
        return sl(r) ? n : r;
      }
      function Ps(r, o, s, m, b, M) {
        var L = s & v, I = r.length, F = o.length;
        if (I != F && !(L && F > I))
          return !1;
        var ie = M.get(r), le = M.get(o);
        if (ie && le)
          return ie == o && le == r;
        var fe = -1, ge = !0, pe = s & S ? new qi() : n;
        for (M.set(r, o), M.set(o, r); ++fe < I; ) {
          var Te = r[fe], De = o[fe];
          if (m)
            var Se = L ? m(De, Te, fe, o, r, M) : m(Te, De, fe, r, o, M);
          if (Se !== n) {
            if (Se)
              continue;
            ge = !1;
            break;
          }
          if (pe) {
            if (!gf(o, function(Fe, Ge) {
              if (!Jr(pe, Ge) && (Te === Fe || b(Te, Fe, s, m, M)))
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
          case wt:
            if (r.byteLength != o.byteLength || r.byteOffset != o.byteOffset)
              return !1;
            r = r.buffer, o = o.buffer;
          case $t:
            return !(r.byteLength != o.byteLength || !M(new Vl(r), new Vl(o)));
          case Xe:
          case ae:
          case He:
            return ei(+r, +o);
          case be:
            return r.name == o.name && r.message == o.message;
          case oe:
          case Mt:
            return r == o + "";
          case ye:
            var I = pf;
          case Me:
            var F = m & v;
            if (I || (I = Gl), r.size != o.size && !F)
              return !1;
            var ie = L.get(r);
            if (ie)
              return ie == o;
            m |= S, L.set(r, o);
            var le = Ps(I(r), I(o), m, b, M, L);
            return L.delete(r), le;
          case Tt:
            if (tl)
              return tl.call(r) == tl.call(o);
        }
        return !1;
      }
      function Dd(r, o, s, m, b, M) {
        var L = s & v, I = qf(r), F = I.length, ie = qf(o), le = ie.length;
        if (F != le && !L)
          return !1;
        for (var fe = F; fe--; ) {
          var ge = I[fe];
          if (!(L ? ge in o : ft.call(o, ge)))
            return !1;
        }
        var pe = M.get(r), Te = M.get(o);
        if (pe && Te)
          return pe == o && Te == r;
        var De = !0;
        M.set(r, o), M.set(o, r);
        for (var Se = L; ++fe < F; ) {
          ge = I[fe];
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
          var sn = r.constructor, Dn = o.constructor;
          sn != Dn && "constructor" in r && "constructor" in o && !(typeof sn == "function" && sn instanceof sn && typeof Dn == "function" && Dn instanceof Dn) && (De = !1);
        }
        return M.delete(r), M.delete(o), De;
      }
      function mi(r) {
        return $f(Xs(r, n, $s), r + "");
      }
      function qf(r) {
        return rs(r, qt, Kf);
      }
      function Gf(r) {
        return rs(r, yn, Fs);
      }
      var Zf = ro ? function(r) {
        return ro.get(r);
      } : hu;
      function wo(r) {
        for (var o = r.name + "", s = br[o], m = ft.call(br, o) ? s.length : 0; m--; ) {
          var b = s[m], M = b.func;
          if (M == null || M == r)
            return b.name;
        }
        return o;
      }
      function kr(r) {
        var o = ft.call(x, "placeholder") ? x : r;
        return o.placeholder;
      }
      function xe() {
        var r = x.iteratee || su;
        return r = r === su ? fs : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function po(r, o) {
        var s = r.__data__;
        return Yd(o) ? s[typeof o == "string" ? "string" : "hash"] : s.map;
      }
      function jf(r) {
        for (var o = qt(r), s = o.length; s--; ) {
          var m = o[s], b = r[m];
          o[s] = [m, b, Hs(b)];
        }
        return o;
      }
      function ji(r, o) {
        var s = G0(r, o);
        return os(s) ? s : n;
      }
      function Nd(r) {
        var o = ft.call(r, Yi), s = r[Yi];
        try {
          r[Yi] = n;
          var m = !0;
        } catch {
        }
        var b = Jl.call(r);
        return m && (o ? r[Yi] = s : delete r[Yi]), b;
      }
      var Kf = kf ? function(r) {
        return r == null ? [] : (r = st(r), Ai(kf(r), function(o) {
          return qa.call(r, o);
        }));
      } : cu, Fs = kf ? function(r) {
        for (var o = []; r; )
          Ci(o, Kf(r)), r = $l(r);
        return o;
      } : cu, rn = un;
      (xf && rn(new xf(new ArrayBuffer(1))) != wt || Vr && rn(new Vr()) != ye || Mf && rn(Mf.resolve()) != qe || yr && rn(new yr()) != Me || $r && rn(new $r()) != gt) && (rn = function(r) {
        var o = un(r), s = o == et ? r.constructor : n, m = s ? Ki(s) : "";
        if (m)
          switch (m) {
            case bg:
              return wt;
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
        return o ? o[1].split(An) : [];
      }
      function Ws(r, o, s) {
        o = Oi(o, r);
        for (var m = -1, b = o.length, M = !1; ++m < b; ) {
          var L = oi(o[m]);
          if (!(M = r != null && s(r, L)))
            break;
          r = r[L];
        }
        return M || ++m != b ? M : (b = r == null ? 0 : r.length, !!b && zo(b) && yi(L, b) && (Re(r) || Ji(r)));
      }
      function Fd(r) {
        var o = r.length, s = new r.constructor(o);
        return o && typeof r[0] == "string" && ft.call(r, "index") && (s.index = r.index, s.input = r.input), s;
      }
      function Bs(r) {
        return typeof r.constructor == "function" && !ul(r) ? wr($l(r)) : {};
      }
      function Wd(r, o, s) {
        var m = r.constructor;
        switch (o) {
          case $t:
            return Hf(r);
          case Xe:
          case ae:
            return new m(+r);
          case wt:
            return xd(r, s);
          case zt:
          case en:
          case Nn:
          case tn:
          case ln:
          case Kn:
          case hn:
          case xn:
          case on:
            return xs(r, s);
          case ye:
            return new m();
          case He:
          case Mt:
            return new m(r);
          case oe:
            return Md(r);
          case Me:
            return new m();
          case Tt:
            return Td(r);
        }
      }
      function Bd(r, o) {
        var s = o.length;
        if (!s)
          return r;
        var m = s - 1;
        return o[m] = (s > 1 ? "& " : "") + o[m], o = o.join(s > 2 ? ", " : " "), r.replace(ai, `{
/* [wrapped with ` + o + `] */
`);
      }
      function Hd(r) {
        return Re(r) || Ji(r) || !!(Ga && r && r[Ga]);
      }
      function yi(r, o) {
        var s = typeof r;
        return o = o ?? C, !!o && (s == "number" || s != "symbol" && ur.test(r)) && r > -1 && r % 1 == 0 && r < o;
      }
      function an(r, o, s) {
        if (!xt(s))
          return !1;
        var m = typeof o;
        return (m == "number" ? mn(s) && yi(o, s.length) : m == "string" && o in s) ? ei(s[o], r) : !1;
      }
      function Jf(r, o) {
        if (Re(r))
          return !1;
        var s = typeof r;
        return s == "number" || s == "symbol" || s == "boolean" || r == null || In(r) ? !0 : tt.test(r) || !$.test(r) || o != null && r in st(o);
      }
      function Yd(r) {
        var o = typeof r;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? r !== "__proto__" : r === null;
      }
      function Qf(r) {
        var o = wo(r), s = x[o];
        if (typeof s != "function" || !(o in Ye.prototype))
          return !1;
        if (r === s)
          return !0;
        var m = Zf(s);
        return !!m && r === m[0];
      }
      function Xd(r) {
        return !!Ha && Ha in r;
      }
      var qd = jl ? bi : gu;
      function ul(r) {
        var o = r && r.constructor, s = typeof o == "function" && o.prototype || mr;
        return r === s;
      }
      function Hs(r) {
        return r === r && !xt(r);
      }
      function Ys(r, o) {
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
        var s = r[1], m = o[1], b = s | m, M = b < (k | T | B), L = m == B && s == z || m == B && s == G && r[7].length <= o[8] || m == (B | G) && o[7].length <= o[8] && s == z;
        if (!(M || L))
          return r;
        m & k && (r[2] = o[2], b |= s & k ? 0 : A);
        var I = o[3];
        if (I) {
          var F = r[3];
          r[3] = F ? Ts(F, I, o[4]) : I, r[4] = F ? Li(r[3], d) : o[4];
        }
        return I = o[5], I && (F = r[5], r[5] = F ? Ss(F, I, o[6]) : I, r[6] = F ? Li(r[5], d) : o[6]), I = o[7], I && (r[7] = I), m & B && (r[8] = r[8] == null ? o[8] : nn(r[8], o[8])), r[9] == null && (r[9] = o[9]), r[0] = o[0], r[1] = b, r;
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
      function Xs(r, o, s) {
        return o = Bt(o === n ? r.length - 1 : o, 0), function() {
          for (var m = arguments, b = -1, M = Bt(m.length - o, 0), L = Z(M); ++b < M; )
            L[b] = m[o + b];
          b = -1;
          for (var I = Z(o + 1); ++b < o; )
            I[b] = m[b];
          return I[o] = s(L), Ln(r, this, I);
        };
      }
      function qs(r, o) {
        return o.length < 2 ? r : Zi(r, Xn(o, 0, -1));
      }
      function Jd(r, o) {
        for (var s = r.length, m = nn(o.length, s), b = dn(r); m--; ) {
          var M = o[m];
          r[m] = yi(M, s) ? b[M] : n;
        }
        return r;
      }
      function Vf(r, o) {
        if (!(o === "constructor" && typeof r[o] == "function") && o != "__proto__")
          return r[o];
      }
      var Gs = js(ds), al = _g || function(r, o) {
        return Jt.setTimeout(r, o);
      }, $f = js(wd);
      function Zs(r, o, s) {
        var m = o + "";
        return $f(r, Bd(m, Qd(Pd(m), s)));
      }
      function js(r) {
        var o = 0, s = 0;
        return function() {
          var m = dg(), b = de - (m - s);
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
          var M = Df(s, b), L = r[M];
          r[M] = r[s], r[s] = L;
        }
        return r.length = o, r;
      }
      var Ks = Gd(function(r) {
        var o = [];
        return r.charCodeAt(0) === 46 && o.push(""), r.replace(Ct, function(s, m, b, M) {
          o.push(b ? M.replace(Bi, "$1") : m || s);
        }), o;
      });
      function oi(r) {
        if (typeof r == "string" || In(r))
          return r;
        var o = r + "";
        return o == "0" && 1 / r == -W ? "-0" : o;
      }
      function Ki(r) {
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
        return Wn(Je, function(s) {
          var m = "_." + s[0];
          o & s[1] && !Xl(r, m) && r.push(m);
        }), r.sort();
      }
      function Js(r) {
        if (r instanceof Ye)
          return r.clone();
        var o = new Hn(r.__wrapped__, r.__chain__);
        return o.__actions__ = dn(r.__actions__), o.__index__ = r.__index__, o.__values__ = r.__values__, o;
      }
      function Vd(r, o, s) {
        (s ? an(r, o, s) : o === n) ? o = 1 : o = Bt(Ie(o), 0);
        var m = r == null ? 0 : r.length;
        if (!m || o < 1)
          return [];
        for (var b = 0, M = 0, L = Z(no(m / o)); b < m; )
          L[M++] = Xn(r, b, b += o);
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
        for (var o = Z(r - 1), s = arguments[0], m = r; m--; )
          o[m - 1] = arguments[m];
        return Ci(Re(s) ? dn(s) : [s], Qt(o, 1));
      }
      var tm = Ne(function(r, o) {
        return Ot(r) ? il(r, Qt(o, 1, Ot, !0)) : [];
      }), nm = Ne(function(r, o) {
        var s = qn(o);
        return Ot(s) && (s = n), Ot(r) ? il(r, Qt(o, 1, Ot, !0), xe(s, 2)) : [];
      }), im = Ne(function(r, o) {
        var s = qn(o);
        return Ot(s) && (s = n), Ot(r) ? il(r, Qt(o, 1, Ot, !0), n, s) : [];
      });
      function rm(r, o, s) {
        var m = r == null ? 0 : r.length;
        return m ? (o = s || o === n ? 1 : Ie(o), Xn(r, o < 0 ? 0 : o, m)) : [];
      }
      function lm(r, o, s) {
        var m = r == null ? 0 : r.length;
        return m ? (o = s || o === n ? 1 : Ie(o), o = m - o, Xn(r, 0, o < 0 ? 0 : o)) : [];
      }
      function om(r, o) {
        return r && r.length ? ho(r, xe(o, 3), !0, !0) : [];
      }
      function fm(r, o) {
        return r && r.length ? ho(r, xe(o, 3), !0) : [];
      }
      function um(r, o, s, m) {
        var b = r == null ? 0 : r.length;
        return b ? (s && typeof s != "number" && an(r, o, s) && (s = 0, m = b), ed(r, o, s, m)) : [];
      }
      function Qs(r, o, s) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var b = s == null ? 0 : Ie(s);
        return b < 0 && (b = Bt(m + b, 0)), ql(r, xe(o, 3), b);
      }
      function Vs(r, o, s) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var b = m - 1;
        return s !== n && (b = Ie(s), b = s < 0 ? Bt(m + b, 0) : nn(b, m - 1)), ql(r, xe(o, 3), b, !0);
      }
      function $s(r) {
        var o = r == null ? 0 : r.length;
        return o ? Qt(r, 1) : [];
      }
      function am(r) {
        var o = r == null ? 0 : r.length;
        return o ? Qt(r, W) : [];
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
        return b < 0 && (b = Bt(m + b, 0)), hr(r, o, b);
      }
      function cm(r) {
        var o = r == null ? 0 : r.length;
        return o ? Xn(r, 0, -1) : [];
      }
      var gm = Ne(function(r) {
        var o = pt(r, Wf);
        return o.length && o[0] === r[0] ? Lf(o) : [];
      }), dm = Ne(function(r) {
        var o = qn(r), s = pt(r, Wf);
        return o === qn(s) ? o = n : s.pop(), s.length && s[0] === r[0] ? Lf(s, xe(o, 2)) : [];
      }), mm = Ne(function(r) {
        var o = qn(r), s = pt(r, Wf);
        return o = typeof o == "function" ? o : n, o && s.pop(), s.length && s[0] === r[0] ? Lf(s, n, o) : [];
      });
      function ym(r, o) {
        return r == null ? "" : cg.call(r, o);
      }
      function qn(r) {
        var o = r == null ? 0 : r.length;
        return o ? r[o - 1] : n;
      }
      function bm(r, o, s) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var b = m;
        return s !== n && (b = Ie(s), b = b < 0 ? Bt(m + b, 0) : nn(b, m - 1)), o === o ? Q0(r, o, b) : ql(r, Oa, b, !0);
      }
      function wm(r, o) {
        return r && r.length ? _s(r, Ie(o)) : n;
      }
      var pm = Ne(t_);
      function t_(r, o) {
        return r && r.length && o && o.length ? Of(r, o) : r;
      }
      function vm(r, o, s) {
        return r && r.length && o && o.length ? Of(r, o, xe(s, 2)) : r;
      }
      function km(r, o, s) {
        return r && r.length && o && o.length ? Of(r, o, n, s) : r;
      }
      var xm = mi(function(r, o) {
        var s = r == null ? 0 : r.length, m = Sf(r, o);
        return gs(r, pt(o, function(b) {
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
      function eu(r) {
        return r == null ? r : yg.call(r);
      }
      function Tm(r, o, s) {
        var m = r == null ? 0 : r.length;
        return m ? (s && typeof s != "number" && an(r, o, s) ? (o = 0, s = m) : (o = o == null ? 0 : Ie(o), s = s === n ? m : Ie(s)), Xn(r, o, s)) : [];
      }
      function Sm(r, o) {
        return _o(r, o);
      }
      function zm(r, o, s) {
        return Uf(r, o, xe(s, 2));
      }
      function Am(r, o) {
        var s = r == null ? 0 : r.length;
        if (s) {
          var m = _o(r, o);
          if (m < s && ei(r[m], o))
            return m;
        }
        return -1;
      }
      function Cm(r, o) {
        return _o(r, o, !0);
      }
      function Lm(r, o, s) {
        return Uf(r, o, xe(s, 2), !0);
      }
      function Em(r, o) {
        var s = r == null ? 0 : r.length;
        if (s) {
          var m = _o(r, o, !0) - 1;
          if (ei(r[m], o))
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
        return o ? Xn(r, 1, o) : [];
      }
      function Dm(r, o, s) {
        return r && r.length ? (o = s || o === n ? 1 : Ie(o), Xn(r, 0, o < 0 ? 0 : o)) : [];
      }
      function Nm(r, o, s) {
        var m = r == null ? 0 : r.length;
        return m ? (o = s || o === n ? 1 : Ie(o), o = m - o, Xn(r, o < 0 ? 0 : o, m)) : [];
      }
      function Um(r, o) {
        return r && r.length ? ho(r, xe(o, 3), !1, !0) : [];
      }
      function Pm(r, o) {
        return r && r.length ? ho(r, xe(o, 3)) : [];
      }
      var Fm = Ne(function(r) {
        return Ii(Qt(r, 1, Ot, !0));
      }), Wm = Ne(function(r) {
        var o = qn(r);
        return Ot(o) && (o = n), Ii(Qt(r, 1, Ot, !0), xe(o, 2));
      }), Bm = Ne(function(r) {
        var o = qn(r);
        return o = typeof o == "function" ? o : n, Ii(Qt(r, 1, Ot, !0), n, o);
      });
      function Hm(r) {
        return r && r.length ? Ii(r) : [];
      }
      function Ym(r, o) {
        return r && r.length ? Ii(r, xe(o, 2)) : [];
      }
      function Xm(r, o) {
        return o = typeof o == "function" ? o : n, r && r.length ? Ii(r, n, o) : [];
      }
      function tu(r) {
        if (!(r && r.length))
          return [];
        var o = 0;
        return r = Ai(r, function(s) {
          if (Ot(s))
            return o = Bt(s.length, o), !0;
        }), bf(o, function(s) {
          return pt(r, df(s));
        });
      }
      function n_(r, o) {
        if (!(r && r.length))
          return [];
        var s = tu(r);
        return o == null ? s : pt(s, function(m) {
          return Ln(o, n, m);
        });
      }
      var qm = Ne(function(r, o) {
        return Ot(r) ? il(r, o) : [];
      }), Gm = Ne(function(r) {
        return Ff(Ai(r, Ot));
      }), Zm = Ne(function(r) {
        var o = qn(r);
        return Ot(o) && (o = n), Ff(Ai(r, Ot), xe(o, 2));
      }), jm = Ne(function(r) {
        var o = qn(r);
        return o = typeof o == "function" ? o : n, Ff(Ai(r, Ot), n, o);
      }), Km = Ne(tu);
      function Jm(r, o) {
        return ps(r || [], o || [], nl);
      }
      function Qm(r, o) {
        return ps(r || [], o || [], ol);
      }
      var Vm = Ne(function(r) {
        var o = r.length, s = o > 1 ? r[o - 1] : n;
        return s = typeof s == "function" ? (r.pop(), s) : n, n_(r, s);
      });
      function i_(r) {
        var o = x(r);
        return o.__chain__ = !0, o;
      }
      function $m(r, o) {
        return o(r), r;
      }
      function ko(r, o) {
        return o(r);
      }
      var e2 = mi(function(r) {
        var o = r.length, s = o ? r[0] : 0, m = this.__wrapped__, b = function(M) {
          return Sf(M, r);
        };
        return o > 1 || this.__actions__.length || !(m instanceof Ye) || !yi(s) ? this.thru(b) : (m = m.slice(s, +s + (o ? 1 : 0)), m.__actions__.push({
          func: ko,
          args: [b],
          thisArg: n
        }), new Hn(m, this.__chain__).thru(function(M) {
          return o && !M.length && M.push(n), M;
        }));
      });
      function t2() {
        return i_(this);
      }
      function n2() {
        return new Hn(this.value(), this.__chain__);
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
        for (var o, s = this; s instanceof oo; ) {
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
            func: ko,
            args: [eu],
            thisArg: n
          }), new Hn(o, this.__chain__);
        }
        return this.thru(eu);
      }
      function f2() {
        return ws(this.__wrapped__, this.__actions__);
      }
      var u2 = co(function(r, o, s) {
        ft.call(r, s) ? ++r[s] : gi(r, s, 1);
      });
      function a2(r, o, s) {
        var m = Re(r) ? Ra : $g;
        return s && an(r, o, s) && (o = n), m(r, xe(o, 3));
      }
      function s2(r, o) {
        var s = Re(r) ? Ai : ns;
        return s(r, xe(o, 3));
      }
      var _2 = Ls(Qs), h2 = Ls(Vs);
      function c2(r, o) {
        return Qt(xo(r, o), 1);
      }
      function g2(r, o) {
        return Qt(xo(r, o), W);
      }
      function d2(r, o, s) {
        return s = s === n ? 1 : Ie(s), Qt(xo(r, o), s);
      }
      function r_(r, o) {
        var s = Re(r) ? Wn : Ri;
        return s(r, xe(o, 3));
      }
      function l_(r, o) {
        var s = Re(r) ? O0 : ts;
        return s(r, xe(o, 3));
      }
      var m2 = co(function(r, o, s) {
        ft.call(r, s) ? r[s].push(o) : gi(r, s, [o]);
      });
      function y2(r, o, s, m) {
        r = mn(r) ? r : Mr(r), s = s && !m ? Ie(s) : 0;
        var b = r.length;
        return s < 0 && (s = Bt(b + s, 0)), Ao(r) ? s <= b && r.indexOf(o, s) > -1 : !!b && hr(r, o, s) > -1;
      }
      var b2 = Ne(function(r, o, s) {
        var m = -1, b = typeof o == "function", M = mn(r) ? Z(r.length) : [];
        return Ri(r, function(L) {
          M[++m] = b ? Ln(o, L, s) : rl(L, o, s);
        }), M;
      }), w2 = co(function(r, o, s) {
        gi(r, s, o);
      });
      function xo(r, o) {
        var s = Re(r) ? pt : us;
        return s(r, xe(o, 3));
      }
      function p2(r, o, s, m) {
        return r == null ? [] : (Re(o) || (o = o == null ? [] : [o]), s = m ? n : s, Re(s) || (s = s == null ? [] : [s]), hs(r, o, s));
      }
      var v2 = co(function(r, o, s) {
        r[s ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function k2(r, o, s) {
        var m = Re(r) ? cf : Na, b = arguments.length < 3;
        return m(r, xe(o, 4), s, b, Ri);
      }
      function x2(r, o, s) {
        var m = Re(r) ? D0 : Na, b = arguments.length < 3;
        return m(r, xe(o, 4), s, b, ts);
      }
      function M2(r, o) {
        var s = Re(r) ? Ai : ns;
        return s(r, So(xe(o, 3)));
      }
      function T2(r) {
        var o = Re(r) ? Qa : yd;
        return o(r);
      }
      function S2(r, o, s) {
        (s ? an(r, o, s) : o === n) ? o = 1 : o = Ie(o);
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
        if (mn(r))
          return Ao(r) ? gr(r) : r.length;
        var o = rn(r);
        return o == ye || o == Me ? r.size : Rf(r).length;
      }
      function C2(r, o, s) {
        var m = Re(r) ? gf : vd;
        return s && an(r, o, s) && (o = n), m(r, xe(o, 3));
      }
      var L2 = Ne(function(r, o) {
        if (r == null)
          return [];
        var s = o.length;
        return s > 1 && an(r, o[0], o[1]) ? o = [] : s > 2 && an(o[0], o[1], o[2]) && (o = [o[0]]), hs(r, Qt(o, 1), []);
      }), Mo = sg || function() {
        return Jt.Date.now();
      };
      function E2(r, o) {
        if (typeof o != "function")
          throw new Bn(u);
        return r = Ie(r), function() {
          if (--r < 1)
            return o.apply(this, arguments);
        };
      }
      function o_(r, o, s) {
        return o = s ? n : o, o = r && o == null ? r.length : o, di(r, B, n, n, n, n, o);
      }
      function f_(r, o) {
        var s;
        if (typeof o != "function")
          throw new Bn(u);
        return r = Ie(r), function() {
          return --r > 0 && (s = o.apply(this, arguments)), r <= 1 && (o = n), s;
        };
      }
      var nu = Ne(function(r, o, s) {
        var m = k;
        if (s.length) {
          var b = Li(s, kr(nu));
          m |= O;
        }
        return di(r, m, o, s, b);
      }), u_ = Ne(function(r, o, s) {
        var m = k | T;
        if (s.length) {
          var b = Li(s, kr(u_));
          m |= O;
        }
        return di(o, m, r, s, b);
      });
      function a_(r, o, s) {
        o = s ? n : o;
        var m = di(r, z, n, n, n, n, n, o);
        return m.placeholder = a_.placeholder, m;
      }
      function s_(r, o, s) {
        o = s ? n : o;
        var m = di(r, U, n, n, n, n, n, o);
        return m.placeholder = s_.placeholder, m;
      }
      function __(r, o, s) {
        var m, b, M, L, I, F, ie = 0, le = !1, fe = !1, ge = !0;
        if (typeof r != "function")
          throw new Bn(u);
        o = Gn(o) || 0, xt(s) && (le = !!s.leading, fe = "maxWait" in s, M = fe ? Bt(Gn(s.maxWait) || 0, o) : M, ge = "trailing" in s ? !!s.trailing : ge);
        function pe(Dt) {
          var ti = m, pi = b;
          return m = b = n, ie = Dt, L = r.apply(pi, ti), L;
        }
        function Te(Dt) {
          return ie = Dt, I = al(Fe, o), le ? pe(Dt) : L;
        }
        function De(Dt) {
          var ti = Dt - F, pi = Dt - ie, L_ = o - ti;
          return fe ? nn(L_, M - pi) : L_;
        }
        function Se(Dt) {
          var ti = Dt - F, pi = Dt - ie;
          return F === n || ti >= o || ti < 0 || fe && pi >= M;
        }
        function Fe() {
          var Dt = Mo();
          if (Se(Dt))
            return Ge(Dt);
          I = al(Fe, De(Dt));
        }
        function Ge(Dt) {
          return I = n, ge && m ? pe(Dt) : (m = b = n, L);
        }
        function On() {
          I !== n && vs(I), ie = 0, m = F = b = I = n;
        }
        function sn() {
          return I === n ? L : Ge(Mo());
        }
        function Dn() {
          var Dt = Mo(), ti = Se(Dt);
          if (m = arguments, b = this, F = Dt, ti) {
            if (I === n)
              return Te(F);
            if (fe)
              return vs(I), I = al(Fe, o), pe(F);
          }
          return I === n && (I = al(Fe, o)), L;
        }
        return Dn.cancel = On, Dn.flush = sn, Dn;
      }
      var R2 = Ne(function(r, o) {
        return es(r, 1, o);
      }), I2 = Ne(function(r, o, s) {
        return es(r, Gn(o) || 0, s);
      });
      function O2(r) {
        return di(r, Y);
      }
      function To(r, o) {
        if (typeof r != "function" || o != null && typeof o != "function")
          throw new Bn(u);
        var s = function() {
          var m = arguments, b = o ? o.apply(this, m) : m[0], M = s.cache;
          if (M.has(b))
            return M.get(b);
          var L = r.apply(this, m);
          return s.cache = M.set(b, L) || M, L;
        };
        return s.cache = new (To.Cache || ci)(), s;
      }
      To.Cache = ci;
      function So(r) {
        if (typeof r != "function")
          throw new Bn(u);
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
        o = o.length == 1 && Re(o[0]) ? pt(o[0], En(xe())) : pt(Qt(o, 1), En(xe()));
        var s = o.length;
        return Ne(function(m) {
          for (var b = -1, M = nn(m.length, s); ++b < M; )
            m[b] = o[b].call(this, m[b]);
          return Ln(r, this, m);
        });
      }), iu = Ne(function(r, o) {
        var s = Li(o, kr(iu));
        return di(r, O, n, o, s);
      }), h_ = Ne(function(r, o) {
        var s = Li(o, kr(h_));
        return di(r, E, n, o, s);
      }), U2 = mi(function(r, o) {
        return di(r, G, n, n, n, o);
      });
      function P2(r, o) {
        if (typeof r != "function")
          throw new Bn(u);
        return o = o === n ? o : Ie(o), Ne(r, o);
      }
      function F2(r, o) {
        if (typeof r != "function")
          throw new Bn(u);
        return o = o == null ? 0 : Bt(Ie(o), 0), Ne(function(s) {
          var m = s[o], b = Di(s, 0, o);
          return m && Ci(b, m), Ln(r, this, b);
        });
      }
      function W2(r, o, s) {
        var m = !0, b = !0;
        if (typeof r != "function")
          throw new Bn(u);
        return xt(s) && (m = "leading" in s ? !!s.leading : m, b = "trailing" in s ? !!s.trailing : b), __(r, o, {
          leading: m,
          maxWait: o,
          trailing: b
        });
      }
      function B2(r) {
        return o_(r, 1);
      }
      function H2(r, o) {
        return iu(Bf(o), r);
      }
      function Y2() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return Re(r) ? r : [r];
      }
      function X2(r) {
        return Yn(r, w);
      }
      function q2(r, o) {
        return o = typeof o == "function" ? o : n, Yn(r, w, o);
      }
      function G2(r) {
        return Yn(r, h | w);
      }
      function Z2(r, o) {
        return o = typeof o == "function" ? o : n, Yn(r, h | w, o);
      }
      function j2(r, o) {
        return o == null || $a(r, o, qt(o));
      }
      function ei(r, o) {
        return r === o || r !== r && o !== o;
      }
      var K2 = bo(Cf), J2 = bo(function(r, o) {
        return r >= o;
      }), Ji = ls(function() {
        return arguments;
      }()) ? ls : function(r) {
        return Et(r) && ft.call(r, "callee") && !qa.call(r, "callee");
      }, Re = Z.isArray, Q2 = Sa ? En(Sa) : ld;
      function mn(r) {
        return r != null && zo(r.length) && !bi(r);
      }
      function Ot(r) {
        return Et(r) && mn(r);
      }
      function V2(r) {
        return r === !0 || r === !1 || Et(r) && un(r) == Xe;
      }
      var Ni = hg || gu, $2 = za ? En(za) : od;
      function ey(r) {
        return Et(r) && r.nodeType === 1 && !sl(r);
      }
      function ty(r) {
        if (r == null)
          return !0;
        if (mn(r) && (Re(r) || typeof r == "string" || typeof r.splice == "function" || Ni(r) || xr(r) || Ji(r)))
          return !r.length;
        var o = rn(r);
        if (o == ye || o == Me)
          return !r.size;
        if (ul(r))
          return !Rf(r).length;
        for (var s in r)
          if (ft.call(r, s))
            return !1;
        return !0;
      }
      function ny(r, o) {
        return ll(r, o);
      }
      function iy(r, o, s) {
        s = typeof s == "function" ? s : n;
        var m = s ? s(r, o) : n;
        return m === n ? ll(r, o, n, s) : !!m;
      }
      function ru(r) {
        if (!Et(r))
          return !1;
        var o = un(r);
        return o == be || o == me || typeof r.message == "string" && typeof r.name == "string" && !sl(r);
      }
      function ry(r) {
        return typeof r == "number" && Za(r);
      }
      function bi(r) {
        if (!xt(r))
          return !1;
        var o = un(r);
        return o == V || o == Ce || o == at || o == H;
      }
      function c_(r) {
        return typeof r == "number" && r == Ie(r);
      }
      function zo(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= C;
      }
      function xt(r) {
        var o = typeof r;
        return r != null && (o == "object" || o == "function");
      }
      function Et(r) {
        return r != null && typeof r == "object";
      }
      var g_ = Aa ? En(Aa) : ud;
      function ly(r, o) {
        return r === o || Ef(r, o, jf(o));
      }
      function oy(r, o, s) {
        return s = typeof s == "function" ? s : n, Ef(r, o, jf(o), s);
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
        return typeof r == "number" || Et(r) && un(r) == He;
      }
      function sl(r) {
        if (!Et(r) || un(r) != et)
          return !1;
        var o = $l(r);
        if (o === null)
          return !0;
        var s = ft.call(o, "constructor") && o.constructor;
        return typeof s == "function" && s instanceof s && Kl.call(s) == og;
      }
      var lu = Ca ? En(Ca) : ad;
      function _y(r) {
        return c_(r) && r >= -C && r <= C;
      }
      var m_ = La ? En(La) : sd;
      function Ao(r) {
        return typeof r == "string" || !Re(r) && Et(r) && un(r) == Mt;
      }
      function In(r) {
        return typeof r == "symbol" || Et(r) && un(r) == Tt;
      }
      var xr = Ea ? En(Ea) : _d;
      function hy(r) {
        return r === n;
      }
      function cy(r) {
        return Et(r) && rn(r) == gt;
      }
      function gy(r) {
        return Et(r) && un(r) == St;
      }
      var dy = bo(If), my = bo(function(r, o) {
        return r <= o;
      });
      function y_(r) {
        if (!r)
          return [];
        if (mn(r))
          return Ao(r) ? Vn(r) : dn(r);
        if (Qr && r[Qr])
          return j0(r[Qr]());
        var o = rn(r), s = o == ye ? pf : o == Me ? Gl : Mr;
        return s(r);
      }
      function wi(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = Gn(r), r === W || r === -W) {
          var o = r < 0 ? -1 : 1;
          return o * R;
        }
        return r === r ? r : 0;
      }
      function Ie(r) {
        var o = wi(r), s = o % 1;
        return o === o ? s ? o - s : o : 0;
      }
      function b_(r) {
        return r ? Gi(Ie(r), 0, he) : 0;
      }
      function Gn(r) {
        if (typeof r == "number")
          return r;
        if (In(r))
          return ce;
        if (xt(r)) {
          var o = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = xt(o) ? o + "" : o;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = Ua(r);
        var s = Ut.test(r);
        return s || _i.test(r) ? E0(r.slice(2), s ? 2 : 8) : X.test(r) ? ce : +r;
      }
      function w_(r) {
        return li(r, yn(r));
      }
      function yy(r) {
        return r ? Gi(Ie(r), -C, C) : r === 0 ? r : 0;
      }
      function lt(r) {
        return r == null ? "" : Rn(r);
      }
      var by = pr(function(r, o) {
        if (ul(o) || mn(o)) {
          li(o, qt(o), r);
          return;
        }
        for (var s in o)
          ft.call(o, s) && nl(r, s, o[s]);
      }), p_ = pr(function(r, o) {
        li(o, yn(o), r);
      }), Co = pr(function(r, o, s, m) {
        li(o, yn(o), r, m);
      }), wy = pr(function(r, o, s, m) {
        li(o, qt(o), r, m);
      }), py = mi(Sf);
      function vy(r, o) {
        var s = wr(r);
        return o == null ? s : Va(s, o);
      }
      var ky = Ne(function(r, o) {
        r = st(r);
        var s = -1, m = o.length, b = m > 2 ? o[2] : n;
        for (b && an(o[0], o[1], b) && (m = 1); ++s < m; )
          for (var M = o[s], L = yn(M), I = -1, F = L.length; ++I < F; ) {
            var ie = L[I], le = r[ie];
            (le === n || ei(le, mr[ie]) && !ft.call(r, ie)) && (r[ie] = M[ie]);
          }
        return r;
      }), xy = Ne(function(r) {
        return r.push(n, Us), Ln(v_, n, r);
      });
      function My(r, o) {
        return Ia(r, xe(o, 3), ri);
      }
      function Ty(r, o) {
        return Ia(r, xe(o, 3), Af);
      }
      function Sy(r, o) {
        return r == null ? r : zf(r, xe(o, 3), yn);
      }
      function zy(r, o) {
        return r == null ? r : is(r, xe(o, 3), yn);
      }
      function Ay(r, o) {
        return r && ri(r, xe(o, 3));
      }
      function Cy(r, o) {
        return r && Af(r, xe(o, 3));
      }
      function Ly(r) {
        return r == null ? [] : ao(r, qt(r));
      }
      function Ey(r) {
        return r == null ? [] : ao(r, yn(r));
      }
      function ou(r, o, s) {
        var m = r == null ? n : Zi(r, o);
        return m === n ? s : m;
      }
      function Ry(r, o) {
        return r != null && Ws(r, o, td);
      }
      function fu(r, o) {
        return r != null && Ws(r, o, nd);
      }
      var Iy = Rs(function(r, o, s) {
        o != null && typeof o.toString != "function" && (o = Jl.call(o)), r[o] = s;
      }, au(bn)), Oy = Rs(function(r, o, s) {
        o != null && typeof o.toString != "function" && (o = Jl.call(o)), ft.call(r, o) ? r[o].push(s) : r[o] = [s];
      }, xe), Dy = Ne(rl);
      function qt(r) {
        return mn(r) ? Ja(r) : Rf(r);
      }
      function yn(r) {
        return mn(r) ? Ja(r, !0) : hd(r);
      }
      function Ny(r, o) {
        var s = {};
        return o = xe(o, 3), ri(r, function(m, b, M) {
          gi(s, o(m, b, M), m);
        }), s;
      }
      function Uy(r, o) {
        var s = {};
        return o = xe(o, 3), ri(r, function(m, b, M) {
          gi(s, b, o(m, b, M));
        }), s;
      }
      var Py = pr(function(r, o, s) {
        so(r, o, s);
      }), v_ = pr(function(r, o, s, m) {
        so(r, o, s, m);
      }), Fy = mi(function(r, o) {
        var s = {};
        if (r == null)
          return s;
        var m = !1;
        o = pt(o, function(M) {
          return M = Oi(M, r), m || (m = M.length > 1), M;
        }), li(r, Gf(r), s), m && (s = Yn(s, h | g | w, Id));
        for (var b = o.length; b--; )
          Pf(s, o[b]);
        return s;
      });
      function Wy(r, o) {
        return k_(r, So(xe(o)));
      }
      var By = mi(function(r, o) {
        return r == null ? {} : gd(r, o);
      });
      function k_(r, o) {
        if (r == null)
          return {};
        var s = pt(Gf(r), function(m) {
          return [m];
        });
        return o = xe(o), cs(r, s, function(m, b) {
          return o(m, b[0]);
        });
      }
      function Hy(r, o, s) {
        o = Oi(o, r);
        var m = -1, b = o.length;
        for (b || (b = 1, r = n); ++m < b; ) {
          var M = r == null ? n : r[oi(o[m])];
          M === n && (m = b, M = s), r = bi(M) ? M.call(r) : M;
        }
        return r;
      }
      function Yy(r, o, s) {
        return r == null ? r : ol(r, o, s);
      }
      function Xy(r, o, s, m) {
        return m = typeof m == "function" ? m : n, r == null ? r : ol(r, o, s, m);
      }
      var x_ = Ds(qt), M_ = Ds(yn);
      function qy(r, o, s) {
        var m = Re(r), b = m || Ni(r) || xr(r);
        if (o = xe(o, 4), s == null) {
          var M = r && r.constructor;
          b ? s = m ? new M() : [] : xt(r) ? s = bi(M) ? wr($l(r)) : {} : s = {};
        }
        return (b ? Wn : ri)(r, function(L, I, F) {
          return o(s, L, I, F);
        }), s;
      }
      function Gy(r, o) {
        return r == null ? !0 : Pf(r, o);
      }
      function Zy(r, o, s) {
        return r == null ? r : bs(r, o, Bf(s));
      }
      function jy(r, o, s, m) {
        return m = typeof m == "function" ? m : n, r == null ? r : bs(r, o, Bf(s), m);
      }
      function Mr(r) {
        return r == null ? [] : wf(r, qt(r));
      }
      function Ky(r) {
        return r == null ? [] : wf(r, yn(r));
      }
      function Jy(r, o, s) {
        return s === n && (s = o, o = n), s !== n && (s = Gn(s), s = s === s ? s : 0), o !== n && (o = Gn(o), o = o === o ? o : 0), Gi(Gn(r), o, s);
      }
      function Qy(r, o, s) {
        return o = wi(o), s === n ? (s = o, o = 0) : s = wi(s), r = Gn(r), id(r, o, s);
      }
      function Vy(r, o, s) {
        if (s && typeof s != "boolean" && an(r, o, s) && (o = s = n), s === n && (typeof o == "boolean" ? (s = o, o = n) : typeof r == "boolean" && (s = r, r = n)), r === n && o === n ? (r = 0, o = 1) : (r = wi(r), o === n ? (o = r, r = 0) : o = wi(o)), r > o) {
          var m = r;
          r = o, o = m;
        }
        if (s || r % 1 || o % 1) {
          var b = ja();
          return nn(r + b * (o - r + L0("1e-" + ((b + "").length - 1))), o);
        }
        return Df(r, o);
      }
      var $y = vr(function(r, o, s) {
        return o = o.toLowerCase(), r + (s ? T_(o) : o);
      });
      function T_(r) {
        return uu(lt(r).toLowerCase());
      }
      function S_(r) {
        return r = lt(r), r && r.replace(ar, Y0).replace(p0, "");
      }
      function eb(r, o, s) {
        r = lt(r), o = Rn(o);
        var m = r.length;
        s = s === n ? m : Gi(Ie(s), 0, m);
        var b = s;
        return s -= o.length, s >= 0 && r.slice(s, b) == o;
      }
      function tb(r) {
        return r = lt(r), r && Sn.test(r) ? r.replace(At, X0) : r;
      }
      function nb(r) {
        return r = lt(r), r && fn.test(r) ? r.replace(gn, "\\$&") : r;
      }
      var ib = vr(function(r, o, s) {
        return r + (s ? "-" : "") + o.toLowerCase();
      }), rb = vr(function(r, o, s) {
        return r + (s ? " " : "") + o.toLowerCase();
      }), lb = Cs("toLowerCase");
      function ob(r, o, s) {
        r = lt(r), o = Ie(o);
        var m = o ? gr(r) : 0;
        if (!o || m >= o)
          return r;
        var b = (o - m) / 2;
        return yo(io(b), s) + r + yo(no(b), s);
      }
      function fb(r, o, s) {
        r = lt(r), o = Ie(o);
        var m = o ? gr(r) : 0;
        return o && m < o ? r + yo(o - m, s) : r;
      }
      function ub(r, o, s) {
        r = lt(r), o = Ie(o);
        var m = o ? gr(r) : 0;
        return o && m < o ? yo(o - m, s) + r : r;
      }
      function ab(r, o, s) {
        return s || o == null ? o = 0 : o && (o = +o), mg(lt(r).replace(Pn, ""), o || 0);
      }
      function sb(r, o, s) {
        return (s ? an(r, o, s) : o === n) ? o = 1 : o = Ie(o), Nf(lt(r), o);
      }
      function _b() {
        var r = arguments, o = lt(r[0]);
        return r.length < 3 ? o : o.replace(r[1], r[2]);
      }
      var hb = vr(function(r, o, s) {
        return r + (s ? "_" : "") + o.toLowerCase();
      });
      function cb(r, o, s) {
        return s && typeof s != "number" && an(r, o, s) && (o = s = n), s = s === n ? he : s >>> 0, s ? (r = lt(r), r && (typeof o == "string" || o != null && !lu(o)) && (o = Rn(o), !o && cr(r)) ? Di(Vn(r), 0, s) : r.split(o, s)) : [];
      }
      var gb = vr(function(r, o, s) {
        return r + (s ? " " : "") + uu(o);
      });
      function db(r, o, s) {
        return r = lt(r), s = s == null ? 0 : Gi(Ie(s), 0, r.length), o = Rn(o), r.slice(s, s + o.length) == o;
      }
      function mb(r, o, s) {
        var m = x.templateSettings;
        s && an(r, o, s) && (o = n), r = lt(r), o = Co({}, o, m, Ns);
        var b = Co({}, o.imports, m.imports, Ns), M = qt(b), L = wf(b, M), I, F, ie = 0, le = o.interpolate || Si, fe = "__p += '", ge = vf(
          (o.escape || Si).source + "|" + le.source + "|" + (le === zn ? fr : Si).source + "|" + (o.evaluate || Si).source + "|$",
          "g"
        ), pe = "//# sourceURL=" + (ft.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++T0 + "]") + `
`;
        r.replace(ge, function(Se, Fe, Ge, On, sn, Dn) {
          return Ge || (Ge = On), fe += r.slice(ie, Dn).replace(qr, q0), Fe && (I = !0, fe += `' +
__e(` + Fe + `) +
'`), sn && (F = !0, fe += `';
` + sn + `;
__p += '`), Ge && (fe += `' +
((__t = (` + Ge + `)) == null ? '' : __t) +
'`), ie = Dn + Se.length, Se;
        }), fe += `';
`;
        var Te = ft.call(o, "variable") && o.variable;
        if (!Te)
          fe = `with (obj) {
` + fe + `
}
`;
        else if (Wi.test(Te))
          throw new Ee(a);
        fe = (F ? fe.replace(Mn, "") : fe).replace(yt, "$1").replace(Un, "$1;"), fe = "function(" + (Te || "obj") + `) {
` + (Te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (I ? ", __e = _.escape" : "") + (F ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + fe + `return __p
}`;
        var De = A_(function() {
          return nt(M, pe + "return " + fe).apply(n, L);
        });
        if (De.source = fe, ru(De))
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
        var m = Vn(r), b = Vn(o), M = Pa(m, b), L = Fa(m, b) + 1;
        return Di(m, M, L).join("");
      }
      function pb(r, o, s) {
        if (r = lt(r), r && (s || o === n))
          return r.slice(0, Ba(r) + 1);
        if (!r || !(o = Rn(o)))
          return r;
        var m = Vn(r), b = Fa(m, Vn(o)) + 1;
        return Di(m, 0, b).join("");
      }
      function vb(r, o, s) {
        if (r = lt(r), r && (s || o === n))
          return r.replace(Pn, "");
        if (!r || !(o = Rn(o)))
          return r;
        var m = Vn(r), b = Pa(m, Vn(o));
        return Di(m, b).join("");
      }
      function kb(r, o) {
        var s = D, m = j;
        if (xt(o)) {
          var b = "separator" in o ? o.separator : b;
          s = "length" in o ? Ie(o.length) : s, m = "omission" in o ? Rn(o.omission) : m;
        }
        r = lt(r);
        var M = r.length;
        if (cr(r)) {
          var L = Vn(r);
          M = L.length;
        }
        if (s >= M)
          return r;
        var I = s - gr(m);
        if (I < 1)
          return m;
        var F = L ? Di(L, 0, I).join("") : r.slice(0, I);
        if (b === n)
          return F + m;
        if (L && (I += F.length - I), lu(b)) {
          if (r.slice(I).search(b)) {
            var ie, le = F;
            for (b.global || (b = vf(b.source, lt(si.exec(b)) + "g")), b.lastIndex = 0; ie = b.exec(le); )
              var fe = ie.index;
            F = F.slice(0, fe === n ? I : fe);
          }
        } else if (r.indexOf(Rn(b), I) != I) {
          var ge = F.lastIndexOf(b);
          ge > -1 && (F = F.slice(0, ge));
        }
        return F + m;
      }
      function xb(r) {
        return r = lt(r), r && Tn.test(r) ? r.replace(cn, V0) : r;
      }
      var Mb = vr(function(r, o, s) {
        return r + (s ? " " : "") + o.toUpperCase();
      }), uu = Cs("toUpperCase");
      function z_(r, o, s) {
        return r = lt(r), o = s ? n : o, o === n ? Z0(r) ? tg(r) : P0(r) : r.match(o) || [];
      }
      var A_ = Ne(function(r, o) {
        try {
          return Ln(r, n, o);
        } catch (s) {
          return ru(s) ? s : new Ee(s);
        }
      }), Tb = mi(function(r, o) {
        return Wn(o, function(s) {
          s = oi(s), gi(r, s, nu(r[s], r));
        }), r;
      });
      function Sb(r) {
        var o = r == null ? 0 : r.length, s = xe();
        return r = o ? pt(r, function(m) {
          if (typeof m[1] != "function")
            throw new Bn(u);
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
        return Vg(Yn(r, h));
      }
      function au(r) {
        return function() {
          return r;
        };
      }
      function Ab(r, o) {
        return r == null || r !== r ? o : r;
      }
      var Cb = Es(), Lb = Es(!0);
      function bn(r) {
        return r;
      }
      function su(r) {
        return fs(typeof r == "function" ? r : Yn(r, h));
      }
      function Eb(r) {
        return as(Yn(r, h));
      }
      function Rb(r, o) {
        return ss(r, Yn(o, h));
      }
      var Ib = Ne(function(r, o) {
        return function(s) {
          return rl(s, r, o);
        };
      }), Ob = Ne(function(r, o) {
        return function(s) {
          return rl(r, s, o);
        };
      });
      function _u(r, o, s) {
        var m = qt(o), b = ao(o, m);
        s == null && !(xt(o) && (b.length || !m.length)) && (s = o, o = r, r = this, b = ao(o, qt(o)));
        var M = !(xt(s) && "chain" in s) || !!s.chain, L = bi(r);
        return Wn(b, function(I) {
          var F = o[I];
          r[I] = F, L && (r.prototype[I] = function() {
            var ie = this.__chain__;
            if (M || ie) {
              var le = r(this.__wrapped__), fe = le.__actions__ = dn(this.__actions__);
              return fe.push({ func: F, args: arguments, thisArg: r }), le.__chain__ = ie, le;
            }
            return F.apply(r, Ci([this.value()], arguments));
          });
        }), r;
      }
      function Db() {
        return Jt._ === this && (Jt._ = fg), this;
      }
      function hu() {
      }
      function Nb(r) {
        return r = Ie(r), Ne(function(o) {
          return _s(o, r);
        });
      }
      var Ub = Yf(pt), Pb = Yf(Ra), Fb = Yf(gf);
      function C_(r) {
        return Jf(r) ? df(oi(r)) : dd(r);
      }
      function Wb(r) {
        return function(o) {
          return r == null ? n : Zi(r, o);
        };
      }
      var Bb = Is(), Hb = Is(!0);
      function cu() {
        return [];
      }
      function gu() {
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
        if (r = Ie(r), r < 1 || r > C)
          return [];
        var s = he, m = nn(r, he);
        o = xe(o), r -= he;
        for (var b = bf(m, o); ++s < r; )
          o(s);
        return b;
      }
      function Zb(r) {
        return Re(r) ? pt(r, oi) : In(r) ? [r] : dn(Ks(lt(r)));
      }
      function jb(r) {
        var o = ++lg;
        return lt(r) + o;
      }
      var Kb = mo(function(r, o) {
        return r + o;
      }, 0), Jb = Xf("ceil"), Qb = mo(function(r, o) {
        return r / o;
      }, 1), Vb = Xf("floor");
      function $b(r) {
        return r && r.length ? uo(r, bn, Cf) : n;
      }
      function e6(r, o) {
        return r && r.length ? uo(r, xe(o, 2), Cf) : n;
      }
      function t6(r) {
        return Da(r, bn);
      }
      function n6(r, o) {
        return Da(r, xe(o, 2));
      }
      function i6(r) {
        return r && r.length ? uo(r, bn, If) : n;
      }
      function r6(r, o) {
        return r && r.length ? uo(r, xe(o, 2), If) : n;
      }
      var l6 = mo(function(r, o) {
        return r * o;
      }, 1), o6 = Xf("round"), f6 = mo(function(r, o) {
        return r - o;
      }, 0);
      function u6(r) {
        return r && r.length ? yf(r, bn) : 0;
      }
      function a6(r, o) {
        return r && r.length ? yf(r, xe(o, 2)) : 0;
      }
      return x.after = E2, x.ary = o_, x.assign = by, x.assignIn = p_, x.assignInWith = Co, x.assignWith = wy, x.at = py, x.before = f_, x.bind = nu, x.bindAll = Tb, x.bindKey = u_, x.castArray = Y2, x.chain = i_, x.chunk = Vd, x.compact = $d, x.concat = em, x.cond = Sb, x.conforms = zb, x.constant = au, x.countBy = u2, x.create = vy, x.curry = a_, x.curryRight = s_, x.debounce = __, x.defaults = ky, x.defaultsDeep = xy, x.defer = R2, x.delay = I2, x.difference = tm, x.differenceBy = nm, x.differenceWith = im, x.drop = rm, x.dropRight = lm, x.dropRightWhile = om, x.dropWhile = fm, x.fill = um, x.filter = s2, x.flatMap = c2, x.flatMapDeep = g2, x.flatMapDepth = d2, x.flatten = $s, x.flattenDeep = am, x.flattenDepth = sm, x.flip = O2, x.flow = Cb, x.flowRight = Lb, x.fromPairs = _m, x.functions = Ly, x.functionsIn = Ey, x.groupBy = m2, x.initial = cm, x.intersection = gm, x.intersectionBy = dm, x.intersectionWith = mm, x.invert = Iy, x.invertBy = Oy, x.invokeMap = b2, x.iteratee = su, x.keyBy = w2, x.keys = qt, x.keysIn = yn, x.map = xo, x.mapKeys = Ny, x.mapValues = Uy, x.matches = Eb, x.matchesProperty = Rb, x.memoize = To, x.merge = Py, x.mergeWith = v_, x.method = Ib, x.methodOf = Ob, x.mixin = _u, x.negate = So, x.nthArg = Nb, x.omit = Fy, x.omitBy = Wy, x.once = D2, x.orderBy = p2, x.over = Ub, x.overArgs = N2, x.overEvery = Pb, x.overSome = Fb, x.partial = iu, x.partialRight = h_, x.partition = v2, x.pick = By, x.pickBy = k_, x.property = C_, x.propertyOf = Wb, x.pull = pm, x.pullAll = t_, x.pullAllBy = vm, x.pullAllWith = km, x.pullAt = xm, x.range = Bb, x.rangeRight = Hb, x.rearg = U2, x.reject = M2, x.remove = Mm, x.rest = P2, x.reverse = eu, x.sampleSize = S2, x.set = Yy, x.setWith = Xy, x.shuffle = z2, x.slice = Tm, x.sortBy = L2, x.sortedUniq = Rm, x.sortedUniqBy = Im, x.split = cb, x.spread = F2, x.tail = Om, x.take = Dm, x.takeRight = Nm, x.takeRightWhile = Um, x.takeWhile = Pm, x.tap = $m, x.throttle = W2, x.thru = ko, x.toArray = y_, x.toPairs = x_, x.toPairsIn = M_, x.toPath = Zb, x.toPlainObject = w_, x.transform = qy, x.unary = B2, x.union = Fm, x.unionBy = Wm, x.unionWith = Bm, x.uniq = Hm, x.uniqBy = Ym, x.uniqWith = Xm, x.unset = Gy, x.unzip = tu, x.unzipWith = n_, x.update = Zy, x.updateWith = jy, x.values = Mr, x.valuesIn = Ky, x.without = qm, x.words = z_, x.wrap = H2, x.xor = Gm, x.xorBy = Zm, x.xorWith = jm, x.zip = Km, x.zipObject = Jm, x.zipObjectDeep = Qm, x.zipWith = Vm, x.entries = x_, x.entriesIn = M_, x.extend = p_, x.extendWith = Co, _u(x, x), x.add = Kb, x.attempt = A_, x.camelCase = $y, x.capitalize = T_, x.ceil = Jb, x.clamp = Jy, x.clone = X2, x.cloneDeep = G2, x.cloneDeepWith = Z2, x.cloneWith = q2, x.conformsTo = j2, x.deburr = S_, x.defaultTo = Ab, x.divide = Qb, x.endsWith = eb, x.eq = ei, x.escape = tb, x.escapeRegExp = nb, x.every = a2, x.find = _2, x.findIndex = Qs, x.findKey = My, x.findLast = h2, x.findLastIndex = Vs, x.findLastKey = Ty, x.floor = Vb, x.forEach = r_, x.forEachRight = l_, x.forIn = Sy, x.forInRight = zy, x.forOwn = Ay, x.forOwnRight = Cy, x.get = ou, x.gt = K2, x.gte = J2, x.has = Ry, x.hasIn = fu, x.head = e_, x.identity = bn, x.includes = y2, x.indexOf = hm, x.inRange = Qy, x.invoke = Dy, x.isArguments = Ji, x.isArray = Re, x.isArrayBuffer = Q2, x.isArrayLike = mn, x.isArrayLikeObject = Ot, x.isBoolean = V2, x.isBuffer = Ni, x.isDate = $2, x.isElement = ey, x.isEmpty = ty, x.isEqual = ny, x.isEqualWith = iy, x.isError = ru, x.isFinite = ry, x.isFunction = bi, x.isInteger = c_, x.isLength = zo, x.isMap = g_, x.isMatch = ly, x.isMatchWith = oy, x.isNaN = fy, x.isNative = uy, x.isNil = sy, x.isNull = ay, x.isNumber = d_, x.isObject = xt, x.isObjectLike = Et, x.isPlainObject = sl, x.isRegExp = lu, x.isSafeInteger = _y, x.isSet = m_, x.isString = Ao, x.isSymbol = In, x.isTypedArray = xr, x.isUndefined = hy, x.isWeakMap = cy, x.isWeakSet = gy, x.join = ym, x.kebabCase = ib, x.last = qn, x.lastIndexOf = bm, x.lowerCase = rb, x.lowerFirst = lb, x.lt = dy, x.lte = my, x.max = $b, x.maxBy = e6, x.mean = t6, x.meanBy = n6, x.min = i6, x.minBy = r6, x.stubArray = cu, x.stubFalse = gu, x.stubObject = Yb, x.stubString = Xb, x.stubTrue = qb, x.multiply = l6, x.nth = wm, x.noConflict = Db, x.noop = hu, x.now = Mo, x.pad = ob, x.padEnd = fb, x.padStart = ub, x.parseInt = ab, x.random = Vy, x.reduce = k2, x.reduceRight = x2, x.repeat = sb, x.replace = _b, x.result = Hy, x.round = o6, x.runInContext = N, x.sample = T2, x.size = A2, x.snakeCase = hb, x.some = C2, x.sortedIndex = Sm, x.sortedIndexBy = zm, x.sortedIndexOf = Am, x.sortedLastIndex = Cm, x.sortedLastIndexBy = Lm, x.sortedLastIndexOf = Em, x.startCase = gb, x.startsWith = db, x.subtract = f6, x.sum = u6, x.sumBy = a6, x.template = mb, x.times = Gb, x.toFinite = wi, x.toInteger = Ie, x.toLength = b_, x.toLower = yb, x.toNumber = Gn, x.toSafeInteger = yy, x.toString = lt, x.toUpper = bb, x.trim = wb, x.trimEnd = pb, x.trimStart = vb, x.truncate = kb, x.unescape = xb, x.uniqueId = jb, x.upperCase = Mb, x.upperFirst = uu, x.each = r_, x.eachRight = l_, x.first = e_, _u(x, function() {
        var r = {};
        return ri(x, function(o, s) {
          ft.call(x.prototype, s) || (r[s] = o);
        }), r;
      }(), { chain: !1 }), x.VERSION = i, Wn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        x[r].placeholder = x;
      }), Wn(["drop", "take"], function(r, o) {
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
      }), Wn(["filter", "map", "takeWhile"], function(r, o) {
        var s = o + 1, m = s == re || s == J;
        Ye.prototype[r] = function(b) {
          var M = this.clone();
          return M.__iteratees__.push({
            iteratee: xe(b, 3),
            type: s
          }), M.__filtered__ = M.__filtered__ || m, M;
        };
      }), Wn(["head", "last"], function(r, o) {
        var s = "take" + (o ? "Right" : "");
        Ye.prototype[r] = function() {
          return this[s](1).value()[0];
        };
      }), Wn(["initial", "tail"], function(r, o) {
        var s = "drop" + (o ? "" : "Right");
        Ye.prototype[r] = function() {
          return this.__filtered__ ? new Ye(this) : this[s](1);
        };
      }), Ye.prototype.compact = function() {
        return this.filter(bn);
      }, Ye.prototype.find = function(r) {
        return this.filter(r).head();
      }, Ye.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, Ye.prototype.invokeMap = Ne(function(r, o) {
        return typeof r == "function" ? new Ye(this) : this.map(function(s) {
          return rl(s, r, o);
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
      }, ri(Ye.prototype, function(r, o) {
        var s = /^(?:filter|find|map|reject)|While$/.test(o), m = /^(?:head|last)$/.test(o), b = x[m ? "take" + (o == "last" ? "Right" : "") : o], M = m || /^find/.test(o);
        b && (x.prototype[o] = function() {
          var L = this.__wrapped__, I = m ? [1] : arguments, F = L instanceof Ye, ie = I[0], le = F || Re(L), fe = function(Fe) {
            var Ge = b.apply(x, Ci([Fe], I));
            return m && ge ? Ge[0] : Ge;
          };
          le && s && typeof ie == "function" && ie.length != 1 && (F = le = !1);
          var ge = this.__chain__, pe = !!this.__actions__.length, Te = M && !ge, De = F && !pe;
          if (!M && le) {
            L = De ? L : new Ye(this);
            var Se = r.apply(L, I);
            return Se.__actions__.push({ func: ko, args: [fe], thisArg: n }), new Hn(Se, ge);
          }
          return Te && De ? r.apply(this, I) : (Se = this.thru(fe), Te ? m ? Se.value()[0] : Se.value() : Se);
        });
      }), Wn(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var o = Zl[r], s = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(r);
        x.prototype[r] = function() {
          var b = arguments;
          if (m && !this.__chain__) {
            var M = this.value();
            return o.apply(Re(M) ? M : [], b);
          }
          return this[s](function(L) {
            return o.apply(Re(L) ? L : [], b);
          });
        };
      }), ri(Ye.prototype, function(r, o) {
        var s = x[o];
        if (s) {
          var m = s.name + "";
          ft.call(br, m) || (br[m] = []), br[m].push({ name: o, func: s });
        }
      }), br[go(n, T).name] = [{
        name: "wrapper",
        func: n
      }], Ye.prototype.clone = xg, Ye.prototype.reverse = Mg, Ye.prototype.value = Tg, x.prototype.at = e2, x.prototype.chain = t2, x.prototype.commit = n2, x.prototype.next = i2, x.prototype.plant = l2, x.prototype.reverse = o2, x.prototype.toJSON = x.prototype.valueOf = x.prototype.value = f2, x.prototype.first = x.prototype.head, Qr && (x.prototype[Qr] = r2), x;
    }, dr = ng();
    Hi ? ((Hi.exports = dr)._ = dr, sf._ = dr) : Jt._ = dr;
  }).call(vi);
})(Ko, Ko.exports);
var Qc = Ko.exports;
const Oo = /* @__PURE__ */ Jc(Qc);
function Jo(e) {
  return --e * e * ((1.70158 + 1) * e + 1.70158) + 1;
}
function rt(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Vc(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Al(e) {
  return e * e * e * e * e;
}
function Sw(e, t, n) {
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
  if (e.length === 0)
    return [, Ui().domain([0, 0]).range([0, 0]), Ui().domain([0, 0]).range([0, 0])];
  let d, h, g, w, v, S, k, T, A = [], z = [...new Set(e.map((E) => E.type))], U = [];
  for (let E = 0; E < e.length; E++)
    U = U.concat(e[E].data);
  if (a ? f === "timeseries" ? d = a.map((E) => new Date(E)) : d = a : c === "factor" ? d = U.map((E) => E.x) : d = Cu(U, (E) => E.x), f === "timeseries" ? h = _w().domain(d).range([
    t + l * 1.5,
    i - l * 2
  ]) : typeof U[0].x == "number" ? h = Ui().domain(d).range([
    t + l * 1.5,
    i - l * 2
  ]) : h = I3().domain(d).range([
    t + l * 1.5,
    i - l * 2
  ]), z.includes("bands")) {
    let E = [];
    e.forEach((Y) => {
      Y.data.forEach((D) => {
        "y" in D && E.push(D.y), "y_min" in D && E.push(D.y_min), "y_max" in D && E.push(D.y_max);
      });
    });
    let B = Math.min(...E), G = Math.max(...E);
    g = [B, G];
  } else
    _ ? g = _ : g = Cu(U, (E) => +E.y);
  u === "linear" ? w = Ui().domain(g).range([
    n - l * 2,
    l * 2
  ]).nice() : w = Oc().domain(g).range([
    n - l * 2,
    l * 2
  ]).nice(), v = (E) => E.x, S = (E) => E.y, k = (E) => E.y_min, T = (E) => E.y_max;
  for (let E = 0; E < z.length; E++)
    switch (z[E]) {
      case "density":
        A[E] = ch().curve(hw).x((B) => h(v(B))).y0(n - l * 2).y1((B) => w(S(B)));
        break;
      case "line":
        A[E] = Zc().defined(function(B) {
          return B.y !== null;
        }).x((B) => h(v(B))).y((B) => w(S(B)));
        break;
      case "bands":
        A[E] = ch().x((B) => h(v(B))).y0((B) => w(k(B))).y1((B) => w(T(B)));
        break;
    }
  let O = {};
  for (let E = 0; E < z.length; E++)
    O[z[E]] = A[E];
  return [O, h, w];
}
function Cw(e, t, n, i, l, f) {
  if (!t || t.length === 0)
    return [];
  let u = e.flatMap((k) => k.data), a = [];
  if (n === "factor") {
    let k = l.domain();
    a = [l(k[0]), l(k[k.length - 1])];
  } else
    a = Cu(u, (k) => k.x), a = [l(a[0]), l(a[1])];
  const _ = Fr(f), c = a[0], d = a[1];
  let h = [], g = /* @__PURE__ */ new Set();
  for (let k of t) {
    let { x_start: T, x_end: A, y_start: z, y_end: U, legend_text: O } = k;
    n === "date" ? (T = l(new Date(_(T))), A = l(new Date(_(A)))) : (T = l(T), A = l(A)), z = z === "auto" ? i(i.domain()[0]) : z === "even" ? "even" : i(parseFloat(z)), U = U === "auto" ? i(i.domain()[1]) : U === "even" ? "even" : i(parseFloat(U));
    let E;
    n === "factor" ? E = T <= c ? l.domain()[0] : l.domain()[l.range().indexOf(T)] : E = T <= c ? l.invert(c) : l.invert(T), (T >= c && T <= d || A >= c && A <= d || T <= c && A >= d) && (h.push({
      ...k,
      x_start: T,
      x_end: A,
      y_start: z,
      y_end: U,
      x_position: E
    }), g.add(O));
  }
  let w = Array.from(g), v = i.range(), S = (v[1] - v[0]) / w.length;
  for (let k of h)
    if (k.y_start === "even" || k.y_end === "even") {
      let T = w.indexOf(k.legend_text), A = v[0] + T * S, z = A + S;
      k.y_position = i.invert(z), k.y_start = A, k.y_end = z;
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
    const w = Il((A) => new Date(A.x)).left, v = w(h, g, 1), S = h[v - 1], k = h[v];
    let T;
    return S && k ? T = g - new Date(S.x) > new Date(k.x) - g ? k : S : T = S || k, T;
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
        const w = h.getDay(), v = new Date(h);
        return v.setDate(h.getDate() - w), v.setHours(0, 0, 0, 0), v;
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
    return h.find((v) => u(new Date(v.x), w).getTime() === g.getTime());
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
function $c(e, t, n, i, l) {
  if (e === "bar") {
    t.sort((a, _) => a - _);
    let f = 0, u = Math.abs(l - t[0]);
    for (let a = 1; a < t.length; a++) {
      const _ = Math.abs(l - t[a]);
      _ < u && (u = _, f = a);
    }
    return f;
  } else {
    const f = Il((a) => n(a)).left, u = f(i, l);
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
  )) : (d = t.domain(), c = $c("XYChart", void 0, t, d, f), _ = e.filter((h) => h.tooltip === !0), _ = Iw(
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
  return c = bl().domain(t).range([
    u + a * 1.5,
    i - a * 2
  ]).padding([0.3]), f === "grouped" ? d = bl().domain(n).range([0, c.bandwidth()]).padding([l]) : d = bl().domain("iii").range([0, c.bandwidth()]).padding([l]), g = Iu(e, (v) => +v.y), w = kc(e, (v) => +v.y_start), console.log("ymin", w), h = Ui().domain([w, g]).range([
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
function wh(e, t, n) {
  const i = t(e.x_start), l = n(e.y_start), f = t(e.x_end), u = n(e.y_end), a = e.curvature || 0.2, _ = e.direction === "downward" ? -1 : 1, c = (i + f) / 2, d = (l + u) / 2, h = c + _ * Math.abs(u - l) * a, g = d - _ * Math.abs(f - i) * a;
  let w = `M ${i} ${l} Q ${h} ${g} ${f} ${u}`;
  const v = 10, S = Math.atan2(u - g, f - h), k = Math.PI / 8, T = f - v * Math.cos(S - k), A = u - v * Math.sin(S - k), z = f - v * Math.cos(S + k), U = u - v * Math.sin(S + k);
  return w += `M ${f} ${u} L ${T} ${A} M ${f} ${u} L ${z} ${U}`, w;
}
function aa(e, t, n) {
  const i = n * (Math.PI / 180);
  return Math.abs(e * Math.sin(i)) + Math.abs(t * Math.cos(i));
}
function Pw(e, t, n, i, l, f, u) {
  let a, _;
  return a = Ui().domain([kc(e, (c) => c.x_start), Iu(e, (c) => c.x_end)]).range([u + l, t - i - l]), _ = Ui().domain([0, Iu(e, (c) => c.y)]).range([n - i - l - f, l]).nice(), [a, _];
}
function e0(e, t, n) {
  return console.log(n[0].data.x, "tooltip2_array_values[0].data.x"), e === "hour" && t === "timeseries" ? n[0].data.x.toString().replace(/^(.*?)T/, " ").split(" ").slice(0, 5).join(" ") : t === "timeseries" ? n[0].data.x.toDateString() : n[0].data.x.toString();
}
function wn(e, { delay: t = 0, duration: n = 400, easing: i = Hr } = {}) {
  const l = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (f) => `opacity: ${f * l}`
  };
}
function Zt(e, { delay: t = 0, duration: n = 400, easing: i = Vc, x: l = 0, y: f = 0, opacity: u = 0 } = {}) {
  const a = getComputedStyle(e), _ = +a.opacity, c = a.transform === "none" ? "" : a.transform, d = _ * (1 - u), [h, g] = I_(l), [w, v] = I_(f);
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (S, k) => `
			transform: ${c} translate(${(1 - S) * h}${g}, ${(1 - S) * w}${v});
			opacity: ${_ - d * k}`
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
function ph(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Wu(e, t) {
  if (e === t || e !== e)
    return () => e;
  const n = typeof e;
  if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const i = t.map((l, f) => Wu(e[f], l));
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
      l[f] = Wu(e[f], t[f]);
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
function Nt(e, t = {}) {
  const n = Rl(e);
  let i, l = e;
  function f(u, a) {
    if (e == null)
      return n.set(e = u), Promise.resolve();
    l = u;
    let _ = i, c = !1, {
      delay: d = 0,
      duration: h = 400,
      easing: g = Hr,
      interpolate: w = Wu
    } = E_(E_({}, t), a);
    if (h === 0)
      return _ && (_.abort(), _ = null), n.set(e = l), Promise.resolve();
    const v = Cl() + d;
    let S;
    return i = Ll((k) => {
      if (k < v)
        return !0;
      c || (S = w(e, u), typeof h == "function" && (h = h(e, u)), c = !0), _ && (_.abort(), _ = null);
      const T = k - v;
      return T > /** @type {number} */
      h ? (n.set(e = u), !1) : (n.set(e = S(g(T / h))), !0);
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
      t = ze("path"), p(t, "stroke", n = /*line*/
      e[0].type == "bands" ? "none" : (
        /*line*/
        e[0].colors
      )), p(
        t,
        "d",
        /*$tweened_x*/
        e[6]
      ), p(t, "opacity", i = /*listener*/
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
      )), p(t, "fill", l = /*line*/
      e[0].fill), p(t, "fill-opacity", 0.4), p(t, "stroke-width", f = /*hover_legend*/
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
      Q(h, t, g), _ = !0, c || (d = [
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
      ))) && p(t, "stroke", n), (!_ || g & /*$tweened_x*/
      64) && p(
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
      ))) && p(t, "opacity", i), (!_ || g & /*line*/
      1 && l !== (l = /*line*/
      h[0].fill)) && p(t, "fill", l), (!_ || g & /*hover_legend, current_categories, line, line_size*/
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
      ))) && p(t, "stroke-width", f);
    },
    i(h) {
      _ || (h && it(() => {
        _ && (a && a.end(1), u = Fi(t, Fw, { duration: 1e3, delay: 50 }), u.start());
      }), _ = !0);
    },
    o(h) {
      u && u.invalidate(), h && (a = xl(t, wn, { duration: 500, delay: 30 })), _ = !1;
    },
    d(h) {
      h && K(t), h && a && a.end(), c = !1, Ht(d);
    }
  };
}
function Bw(e, t, n) {
  let i, { line: l } = t, { hover_legend: f } = t, { current_categories: u } = t, { line_size: a } = t, { tweenOptions: _ } = t, { path: c = l.path } = t, { tooltip2_array_values: d } = t, { listener: h } = t, g = Nt(c, _ == null ? void 0 : _.path);
  vt(e, g, (T) => n(6, i = T));
  const w = () => console.log("Density chart starting to appear"), v = () => console.log("Density chart appeared"), S = () => console.log("Density chart starting to disappear"), k = () => console.log("Density chart disappeared");
  return e.$$set = (T) => {
    "line" in T && n(0, l = T.line), "hover_legend" in T && n(1, f = T.hover_legend), "current_categories" in T && n(2, u = T.current_categories), "line_size" in T && n(3, a = T.line_size), "tweenOptions" in T && n(8, _ = T.tweenOptions), "path" in T && n(9, c = T.path), "tooltip2_array_values" in T && n(4, d = T.tooltip2_array_values), "listener" in T && n(5, h = T.listener);
  }, e.$$.update = () => {
    e.$$.dirty & /*path, tweenOptions*/
    768 && El().then(() => {
      g.set(c, _ == null ? void 0 : _.path);
    });
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
    v,
    S,
    k
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
function vh(e, t, n) {
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
      Q(_, n, c), Q(_, i, c), Q(_, l, c), a.m(l, null);
    },
    p(_, c) {
      c & /*tooltip_value*/
      4 && t !== (t = /*key*/
      _[18] + "") && Oe(n, t), u === (u = f(_)) && a ? a.p(_, c) : (a.d(1), a = u(_), a && (a.c(), a.m(l, null)));
    },
    d(_) {
      _ && (K(n), K(i), K(l)), a.d();
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
      Q(a, t, _), q(t, n), Q(a, i, _), Q(a, l, _), q(l, u);
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
      a && (K(t), K(i), K(l));
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
      Q(i, n, l);
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
      i && K(n);
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
      Q(i, n, l);
    },
    p(i, l) {
      l & /*tooltip_value*/
      4 && t !== (t = /*values*/
      i[19].toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + "") && Oe(n, t);
    },
    d(i) {
      i && K(n);
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
      Q(i, n, l);
    },
    p(i, l) {
      l & /*tooltip_value*/
      4 && t !== (t = /*values*/
      i[19] + "") && Oe(n, t);
    },
    d(i) {
      i && K(n);
    }
  };
}
function kh(e) {
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
      t = _e("div"), f.c(), n = ve(), p(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(u, a) {
      Q(u, t, a), f.m(t, null), q(t, n);
    },
    p(u, a) {
      l === (l = i(u)) && f ? f.p(u, a) : (f.d(1), f = l(u), f && (f.c(), f.m(t, n)));
    },
    d(u) {
      u && K(t), f.d();
    }
  };
}
function jw(e) {
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
      e[0]), p(t, "class", "tooltip"), y(t, "position", "absolute"), y(
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
      Q(a, t, _), q(t, n);
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
          const d = vh(a, f, c);
          u[c] ? u[c].p(d, _) : (u[c] = kh(d), u[c].c(), u[c].m(n, null));
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
      a && K(t), kn(u, a), a && i && i.end();
    }
  };
}
const xh = 0;
function Kw(e, t, n) {
  let i, l, f, u, a, _, c, { x_scale: d } = t, { y_scale: h } = t, { format_tooltip: g } = t, { tooltip2_array_values: w } = t, { width: v } = t, { height: S } = t, { margin: k } = t, { buffer: T } = t, A, z;
  const U = -50;
  return e.$$set = (O) => {
    "x_scale" in O && n(5, d = O.x_scale), "y_scale" in O && n(6, h = O.y_scale), "format_tooltip" in O && n(7, g = O.format_tooltip), "tooltip2_array_values" in O && n(8, w = O.tooltip2_array_values), "width" in O && n(9, v = O.width), "height" in O && n(10, S = O.height), "margin" in O && n(11, k = O.margin), "buffer" in O && n(12, T = O.buffer);
  }, e.$$.update = () => {
    e.$$.dirty & /*x_scale, tooltip2_array_values*/
    288 && n(14, i = d(w.data.x)), e.$$.dirty & /*y_scale, tooltip2_array_values*/
    320 && n(13, l = h(w.data.y)), e.$$.dirty & /*x, width*/
    16896 && n(4, f = i + A > v ? i - A - U : i + U), e.$$.dirty & /*y, height, margin, buffer*/
    15360 && n(3, u = l + z > S - k - T ? l - z - xh - k - T : l + xh), e.$$.dirty & /*tooltip2_array_values*/
    256 && n(0, a = w.colors), e.$$.dirty & /*colour, tooltip2_array_values*/
    257 && n(2, _ = {
      [a]: w.id,
      x: w.data.x,
      y: w.data.y
    }), e.$$.dirty & /*format_tooltip*/
    128 && n(1, c = _n(g));
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
    v,
    S,
    k,
    T,
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
function Mh(e, t, n) {
  const i = e.slice();
  return i[19] = t[n], i;
}
function Th(e) {
  let t, n, i, l, f, u, a;
  function _(w, v) {
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
    g[w] = Sh(Mh(e, h, w));
  return {
    c() {
      t = _e("div"), n = _e("h6"), d.c(), i = ve(), l = _e("div");
      for (let w = 0; w < g.length; w += 1)
        g[w].c();
      y(n, "background-color", "black"), y(n, "color", "white"), y(n, "margin", "1px"), y(n, "padding", "2%"), y(n, "font-size", "12px"), y(n, "font-weight", "2px"), y(n, "text-align", "center"), p(t, "class", "tooltip"), y(t, "position", "absolute"), y(
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
    m(w, v) {
      Q(w, t, v), q(t, n), d.m(n, null), q(t, i), q(t, l);
      for (let S = 0; S < g.length; S += 1)
        g[S] && g[S].m(l, null);
      f = rr(
        t,
        /*div1_elementresize_handler*/
        e[18].bind(t)
      ), a = !0;
    },
    p(w, v) {
      if (c === (c = _(w)) && d ? d.p(w, v) : (d.d(1), d = c(w), d && (d.c(), d.m(n, null))), v & /*format_number, tooltip2_array_values*/
      33) {
        h = ke(
          /*tooltip2_array_values*/
          w[0]
        );
        let S;
        for (S = 0; S < h.length; S += 1) {
          const k = Mh(w, h, S);
          g[S] ? g[S].p(k, v) : (g[S] = Sh(k), g[S].c(), g[S].m(l, null));
        }
        for (; S < g.length; S += 1)
          g[S].d(1);
        g.length = h.length;
      }
      (!a || v & /*yPosition*/
      64) && y(
        t,
        "top",
        /*yPosition*/
        w[6] + "px"
      ), (!a || v & /*xPosition*/
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
      w && K(t), d.d(), kn(g, w), f(), w && u && u.end();
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
      Q(i, n, l);
    },
    p(i, l) {
      l & /*tooltip2_array_values*/
      1 && t !== (t = /*tooltip2_array_values*/
      i[0][0].data.x.toString() + "") && Oe(n, t);
    },
    d(i) {
      i && K(n);
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
      Q(i, n, l);
    },
    p(i, l) {
      l & /*tooltip2_array_values*/
      1 && t !== (t = /*tooltip2_array_values*/
      i[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + "") && Oe(n, t);
    },
    d(i) {
      i && K(n);
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
      Q(i, n, l);
    },
    p(i, l) {
      l & /*tooltip2_array_values*/
      1 && t !== (t = /*tooltip2_array_values*/
      i[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 5).join(" ") + "") && Oe(n, t);
    },
    d(i) {
      i && K(n);
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
      Q(n, t, i);
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
      n && K(t);
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
      Q(n, t, i);
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
      n && K(t);
    }
  };
}
function Sh(e) {
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
  function w(k, T) {
    if (
      /*line*/
      k[19].type === "points"
    )
      return tp;
    if (
      /*line*/
      k[19].type === "line"
    )
      return ep;
  }
  let v = w(e), S = v && v(e);
  return {
    c() {
      t = _e("div"), n = _e("div"), i = _e("div"), S && S.c(), l = ve(), f = _e("span"), a = Ae(u), _ = ve(), c = _e("div"), h = Ae(d), g = ve(), y(i, "width", "18px"), y(i, "display", "flex"), y(i, "align-items", "center"), y(i, "justify-content", "center"), y(n, "display", "flex"), y(n, "align-items", "center"), p(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(k, T) {
      Q(k, t, T), q(t, n), q(n, i), S && S.m(i, null), q(n, l), q(n, f), q(f, a), q(t, _), q(t, c), q(c, h), q(t, g);
    },
    p(k, T) {
      v === (v = w(k)) && S ? S.p(k, T) : (S && S.d(1), S = v && v(k), S && (S.c(), S.m(i, null))), T & /*tooltip2_array_values*/
      1 && u !== (u = /*line*/
      k[19].id + "") && Oe(a, u), T & /*format_number, tooltip2_array_values*/
      33 && d !== (d = /*format_number*/
      k[5](
        /*line*/
        k[19].data.y
      ) + "") && Oe(h, d);
    },
    d(k) {
      k && K(t), S && S.d();
    }
  };
}
function np(e) {
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
      n && n.m(i, l), Q(i, t, l);
    },
    p(i, [l]) {
      /*tooltip2_array_values*/
      i[0] && /*tooltip2_array_values*/
      i[0].length > 0 ? n ? (n.p(i, l), l & /*tooltip2_array_values*/
      1 && ne(n, 1)) : (n = Th(i), n.c(), ne(n, 1), n.m(t.parentNode, t)) : n && (We(), ue(n, 1, 1, () => {
        n = null;
      }), Be());
    },
    i(i) {
      ne(n);
    },
    o(i) {
      ue(n);
    },
    d(i) {
      i && K(t), n && n.d(i);
    }
  };
}
const zh = 20, Ah = 0;
function ip(e, t, n) {
  let i, l, f, u, a, { x_scale: _ } = t, { m_y: c } = t, { tooltip2_array_values: d } = t, { format_tooltip: h } = t, { height: g } = t, { width: w } = t, { margin: v } = t, { buffer: S } = t, { interval: k } = t, { type: T } = t, A, z, U;
  function O() {
    A = this.clientWidth, z = this.clientHeight, n(3, A), n(4, z);
  }
  return e.$$set = (E) => {
    "x_scale" in E && n(8, _ = E.x_scale), "m_y" in E && n(9, c = E.m_y), "tooltip2_array_values" in E && n(0, d = E.tooltip2_array_values), "format_tooltip" in E && n(10, h = E.format_tooltip), "height" in E && n(11, g = E.height), "width" in E && n(12, w = E.width), "margin" in E && n(13, v = E.margin), "buffer" in E && n(14, S = E.buffer), "interval" in E && n(1, k = E.interval), "type" in E && n(2, T = E.type);
  }, e.$$.update = () => {
    e.$$.dirty & /*tooltip2_array_values, type, maxYValue*/
    32773 && (d.forEach((E) => {
      E.second_axis && (E.data.y = E.data.y_og);
    }), n(15, U = Math.max(...d.map((E) => E.data.y))), n(0, d = d.map((E) => ({
      ...E,
      shape: T === "scatter" ? "point" : "line"
    })).sort((E, B) => B.data.y - E.data.y || B.data.y - U))), e.$$.dirty & /*x_scale, tooltip2_array_values*/
    257 && n(17, i = _(d[0].data.x)), e.$$.dirty & /*m_y*/
    512 && n(16, l = c), e.$$.dirty & /*x, tooltipWidth, width*/
    135176 && n(7, f = i + A > w ? i - A - zh : i + zh), e.$$.dirty & /*y, tooltipHeight, height, margin, buffer*/
    92176 && n(6, u = l + z > g - v - S ? l - z - Ah - v - S : l + Ah), e.$$.dirty & /*format_tooltip*/
    1024 && n(5, a = _n(h));
  }, [
    d,
    k,
    T,
    A,
    z,
    a,
    u,
    f,
    _,
    c,
    h,
    g,
    w,
    v,
    S,
    U,
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
      t = ze("circle"), p(
        t,
        "cx",
        /*$tweened_cx*/
        e[7]
      ), p(
        t,
        "cy",
        /*$tweened_cy*/
        e[8]
      ), p(t, "fill", n = /*categories*/
      e[0].colors), p(t, "stroke", i = /*categories*/
      e[0].colors), p(t, "stroke-width", l = /*listener*/
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
      )), p(t, "stroke-opacity", f = /*listener*/
      e[6] && /*tooltip2_array_values*/
      e[5] && /*tooltip2_array_values*/
      e[5].data.x === /*points*/
      e[1].x && /*tooltip2_array_values*/
      e[5].data.y === /*points*/
      e[1].y ? (
        /*categories*/
        e[0].opacity * 0.2
      ) : 0), p(t, "opacity", u = /*listener*/
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
      )), p(t, "r", a = /*listener*/
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
      Q(d, t, h), _ || (c = [
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
      128 && p(
        t,
        "cx",
        /*$tweened_cx*/
        d[7]
      ), h & /*$tweened_cy*/
      256 && p(
        t,
        "cy",
        /*$tweened_cy*/
        d[8]
      ), h & /*categories*/
      1 && n !== (n = /*categories*/
      d[0].colors) && p(t, "fill", n), h & /*categories*/
      1 && i !== (i = /*categories*/
      d[0].colors) && p(t, "stroke", i), h & /*listener, tooltip2_array_values, points, categories*/
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
      )) && p(t, "stroke-width", l), h & /*listener, tooltip2_array_values, points, categories*/
      99 && f !== (f = /*listener*/
      d[6] && /*tooltip2_array_values*/
      d[5] && /*tooltip2_array_values*/
      d[5].data.x === /*points*/
      d[1].x && /*tooltip2_array_values*/
      d[5].data.y === /*points*/
      d[1].y ? (
        /*categories*/
        d[0].opacity * 0.2
      ) : 0) && p(t, "stroke-opacity", f), h & /*listener, tooltip2_array_values, hover_legend, current_categories, categories*/
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
      )) && p(t, "opacity", u), h & /*listener, tooltip2_array_values, points, categories*/
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
      )) && p(t, "r", a);
    },
    i: Pe,
    o: Pe,
    d(d) {
      d && K(t), _ = !1, Ht(c);
    }
  };
}
function op(e, t, n) {
  let i, l, { x: f } = t, { y: u } = t, { categories: a } = t, { points: _ } = t, { tweenOptions: c } = t, { hovered_data: d } = t, { hover_legend: h } = t, { current_categories: g } = t, { tooltip2_array_values: w } = t, { listener: v } = t, S = Nt(f, c == null ? void 0 : c.x);
  vt(e, S, (z) => n(7, i = z));
  let k = Nt(u, c == null ? void 0 : c.y);
  vt(e, k, (z) => n(8, l = z));
  const T = (z) => {
    D6.set(_.x), d.set(a.id), O_.set(_);
  }, A = () => {
    d.set(null), O_.set(null);
  };
  return e.$$set = (z) => {
    "x" in z && n(11, f = z.x), "y" in z && n(12, u = z.y), "categories" in z && n(0, a = z.categories), "points" in z && n(1, _ = z.points), "tweenOptions" in z && n(13, c = z.tweenOptions), "hovered_data" in z && n(2, d = z.hovered_data), "hover_legend" in z && n(3, h = z.hover_legend), "current_categories" in z && n(4, g = z.current_categories), "tooltip2_array_values" in z && n(5, w = z.tooltip2_array_values), "listener" in z && n(6, v = z.listener);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions, y*/
    14336 && El().then(() => {
      S.set(f, c == null ? void 0 : c.x), k.set(u, c == null ? void 0 : c.y);
    });
  }, [
    a,
    _,
    d,
    h,
    g,
    w,
    v,
    i,
    l,
    S,
    k,
    f,
    u,
    c,
    T,
    A
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
function Ch(e, t, n) {
  const i = e.slice();
  return i[13] = t[n], i;
}
function Lh(e) {
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
      ), y(n, "width", "8px"), y(n, "height", "8px"), y(n, "display", "inline-block"), y(n, "border-radius", "50%"), y(n, "border", "1px solid rgba(0, 0, 0, 0.5)"), p(t, "style", a = /*$hovered_legend*/
      e[5] && /*$hovered_legend*/
      e[5] !== /*legend_entries*/
      e[13].legend_text ? "opacity: 0.3; margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;");
    },
    m(g, w) {
      Q(g, t, w), q(t, n), q(t, i), q(t, f), q(t, u), _ || (c = [
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
      e[13].legend_text ? "opacity: 0.3; margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;") && p(t, "style", a);
    },
    d(g) {
      g && K(t), _ = !1, Ht(c);
    }
  };
}
function up(e) {
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
      p(t, "class", "legend"), y(t, "display", "flex"), y(t, "place-items", "center"), y(t, "justify-content", "flex-start"), y(t, "flex-direction", "row"), y(t, "flex-wrap", "wrap"), y(t, "column-gap", "10px"), y(t, "row-gap", "5px"), y(t, "margin-bottom", "0.25rem"), y(
        t,
        "margin-left",
        /*label_height*/
        e[0] + /*space_between_label_and_ticks*/
        e[1] + "px"
      );
    },
    m(u, a) {
      Q(u, t, a);
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
          const c = Ch(u, l, _);
          f[_] ? f[_].p(c, a) : (f[_] = Lh(c), f[_].c(), f[_].m(t, null));
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
      u && K(t), kn(f, u), e[11](null), n = !1, i();
    }
  };
}
function ap(e, t, n) {
  let i, l;
  vt(e, Vi, (k) => n(5, l = k));
  let { filtered_segments_df: f } = t, { label_height: u } = t, { space_between_label_and_ticks: a } = t, _, c = !1;
  function d(k) {
    _ && !_.contains(k.target) && (Vi.set(null), n(3, c = !1));
  }
  function h() {
    c || Vi.set(null);
  }
  function g(k, T) {
    T.stopPropagation(), Vi.set(k.legend_text), n(3, c = !0);
  }
  const w = (k) => {
    c || Vi.set(k.legend_text);
  }, v = (k, T) => g(k, T);
  function S(k) {
    _t[k ? "unshift" : "push"](() => {
      _ = k, n(2, _);
    });
  }
  return e.$$set = (k) => {
    "filtered_segments_df" in k && n(8, f = k.filtered_segments_df), "label_height" in k && n(0, u = k.label_height), "space_between_label_and_ticks" in k && n(1, a = k.space_between_label_and_ticks);
  }, e.$$.update = () => {
    e.$$.dirty & /*filtered_segments_df*/
    256 && n(4, i = Array.from(new Map(f.map((k) => [
      `${k.colors}-${k.legend_text}`,
      {
        colors: k.colors,
        legend_text: k.legend_text
      }
    ])).values())), e.$$.dirty & /*legendContainer*/
    4 && (_ && document.addEventListener("dblclick", d), ju(() => {
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
    v,
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
function Eh(e, t, n) {
  const i = e.slice();
  return i[22] = t[n], i[23] = t, i[24] = n, i;
}
function Rh(e, t, n) {
  const i = e.slice();
  return i[22] = t[n], i[25] = t, i[24] = n, i;
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
      t = ze("svg");
      for (let _ = 0; _ < f.length; _ += 1)
        f[_].c();
      n = ve();
      for (let _ = 0; _ < a.length; _ += 1)
        a[_].c();
      i = Le(), p(
        t,
        "width",
        /*width*/
        e[0]
      ), p(
        t,
        "height",
        /*height*/
        e[1]
      ), y(t, "position", "absolute"), y(t, "top", "0"), y(t, "left", "0");
    },
    m(_, c) {
      Q(_, t, c);
      for (let d = 0; d < f.length; d += 1)
        f[d] && f[d].m(t, null);
      Q(_, n, c);
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(_, c);
      Q(_, i, c);
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
          const h = Rh(_, l, d);
          f[d] ? f[d].p(h, c) : (f[d] = Oh(h), f[d].c(), f[d].m(t, null));
        }
        for (; d < f.length; d += 1)
          f[d].d(1);
        f.length = l.length;
      }
      if (c & /*width*/
      1 && p(
        t,
        "width",
        /*width*/
        _[0]
      ), c & /*height*/
      2 && p(
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
          const h = Eh(_, u, d);
          a[d] ? a[d].p(h, c) : (a[d] = Dh(h), a[d].c(), a[d].m(i.parentNode, i));
        }
        for (; d < a.length; d += 1)
          a[d].d(1);
        a.length = u.length;
      }
    },
    d(_) {
      _ && (K(t), K(n), K(i)), kn(f, _), kn(a, _);
    }
  };
}
function Oh(e) {
  let t, n = (
    /*i*/
    e[24]
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
      t = ze("line"), p(t, "class", "line"), y(t, "stroke", "black"), y(t, "stroke-width", "1");
    },
    m(f, u) {
      Q(f, t, u), i();
    },
    p(f, u) {
      e = f, n !== /*i*/
      e[24] && (l(), n = /*i*/
      e[24], i());
    },
    d(f) {
      f && K(t), l();
    }
  };
}
function Dh(e) {
  let t, n, i = (
    /*segment*/
    e[22].tooltip + ""
  ), l, f = (
    /*i*/
    e[24]
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
        e[24],
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
        e[22].top + "px"
      ), y(
        t,
        "left",
        /*segment*/
        e[22].left + "px"
      ), y(
        t,
        "background-color",
        /*segment*/
        e[22].colors
      ), y(t, "opacity", "0.8"), y(
        t,
        "width",
        /*segment*/
        e[22].width + "px"
      ), y(t, "height", "auto"), y(t, "display", "flex"), y(t, "flex-direction", "column"), y(t, "align-items", "start"), y(t, "padding", "2px"), y(t, "white-space", "normal"), y(t, "overflow-wrap", "break-word"), y(t, "font-family", "Arial"), y(
        t,
        "font-size",
        /*segment*/
        e[22].font_size + "px"
      ), y(
        t,
        "color",
        /*segment*/
        e[22].text_color
      ), y(t, "transform", "translate(" + /*segment*/
      e[22].dx + "px, " + /*segment*/
      e[22].dy + "px)"), y(t, "max-height", "200px"), y(t, "overflow-y", "auto"), y(t, "cursor", "move"), y(t, "user-select", "none"), y(t, "pointer-events", "auto");
    },
    m(h, g) {
      Q(h, t, g), n.m(i, t), q(t, l), _(), u || (a = ot(t, "mousedown", d), u = !0);
    },
    p(h, g) {
      e = h, g & /*final_positions*/
      8 && i !== (i = /*segment*/
      e[22].tooltip + "") && n.p(i), g & /*final_positions*/
      8 && y(
        t,
        "top",
        /*segment*/
        e[22].top + "px"
      ), g & /*final_positions*/
      8 && y(
        t,
        "left",
        /*segment*/
        e[22].left + "px"
      ), g & /*final_positions*/
      8 && y(
        t,
        "background-color",
        /*segment*/
        e[22].colors
      ), g & /*final_positions*/
      8 && y(
        t,
        "width",
        /*segment*/
        e[22].width + "px"
      ), g & /*final_positions*/
      8 && y(
        t,
        "font-size",
        /*segment*/
        e[22].font_size + "px"
      ), g & /*final_positions*/
      8 && y(
        t,
        "color",
        /*segment*/
        e[22].text_color
      ), g & /*final_positions*/
      8 && y(t, "transform", "translate(" + /*segment*/
      e[22].dx + "px, " + /*segment*/
      e[22].dy + "px)"), f !== /*i*/
      e[24] && (c(), f = /*i*/
      e[24], _());
    },
    d(h) {
      h && K(t), c(), u = !1, a();
    }
  };
}
function _p(e) {
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
      n && n.m(i, l), Q(i, t, l);
    },
    p(i, [l]) {
      /*$hovered_legend*/
      i[2] && /*final_positions*/
      i[3] ? n ? n.p(i, l) : (n = Ih(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Pe,
    o: Pe,
    d(i) {
      i && K(t), n && n.d(i);
    }
  };
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
  vt(e, Vi, (Y) => n(2, i = Y));
  let { y: l } = t, { filtered_segments_df: f } = t, { x_scale: u } = t, { y_scale: a } = t, { width: _ } = t, { height: c } = t, { line_generator_space: d } = t, { y_lines_spacing: h } = t, g = [], w, v, S;
  function k(Y, D) {
    return Y.map((re) => {
      let te = re.y_position ? a(re.y_position) : a(l), J = u(re.x_position), W = Math.min(Math.max(re.x_end - re.x_start, 100), D);
      const C = hp(re.tooltip, re.font_size);
      C < W && (W = C);
      const R = cp(re.tooltip, re.font_size, W);
      let ce = Math.max(R, 20);
      return {
        top: te,
        left: J,
        width: W,
        height: ce,
        dx: 0,
        dy: 0,
        colors: re.colors,
        font_size: re.font_size,
        text_color: re.text_color,
        tooltip: re.tooltip,
        initial_top: te,
        initial_left: J,
        opacity: re.opacity
      };
    });
  }
  function T(Y) {
    let D = !0, j = Y[0], se = j, de = j;
    for (let re = 1; re < Y.length; re++) {
      let te = Y[re], J = j;
      J.left + J.width > te.left ? (D ? (J = se || j, te.top = J.top + J.height + 1, se = te) : (J = de || j, te.top = J.top - te.height - 1, de = te), D = !D) : (j = te, se = te, de = te), te.left + te.width > _ && (te.left = _ - te.width, te.left < 0 && (te.left = 0));
    }
    return Y;
  }
  function A(Y, D) {
    const j = U[D], se = O[D], de = v[D], re = Y.clientX - de.dx, te = Y.clientY - de.dy;
    function J(C) {
      de.dx = C.clientX - re, de.dy = C.clientY - te, j.style.transform = `translate(${de.dx}px, ${de.dy}px)`, gp(se, de);
    }
    function W() {
      window.removeEventListener("mousemove", J), window.removeEventListener("mouseup", W);
    }
    window.addEventListener("mousemove", J), window.addEventListener("mouseup", W);
  }
  function z() {
    O.forEach((Y) => {
      Y && (Y.setAttribute("x1", ""), Y.setAttribute("y1", ""), Y.setAttribute("x2", ""), Y.setAttribute("y2", ""));
    });
  }
  let U = f.map(() => null), O = f.map(() => null);
  function E(Y, D) {
    _t[Y ? "unshift" : "push"](() => {
      O[D] = Y, n(5, O);
    });
  }
  function B(Y, D) {
    _t[Y ? "unshift" : "push"](() => {
      U[D] = Y, n(4, U);
    });
  }
  const G = (Y, D) => A(D, Y);
  return e.$$set = (Y) => {
    "y" in Y && n(7, l = Y.y), "filtered_segments_df" in Y && n(8, f = Y.filtered_segments_df), "x_scale" in Y && n(9, u = Y.x_scale), "y_scale" in Y && n(10, a = Y.y_scale), "width" in Y && n(0, _ = Y.width), "height" in Y && n(1, c = Y.height), "line_generator_space" in Y && n(11, d = Y.line_generator_space), "y_lines_spacing" in Y && n(12, h = Y.y_lines_spacing);
  }, e.$$.update = () => {
    e.$$.dirty & /*filtered_segments_df, $hovered_legend*/
    260 && n(13, g = f.filter((Y) => Y.legend_text === i)), e.$$.dirty & /*filtered_segments_df_temp, width, y_lines_spacing, line_generator_space, tooltipPositions*/
    30721 && g.length > 0 && (n(14, w = k(g, _ - h - d * 4)), n(3, v = T(w))), e.$$.dirty & /*$hovered_legend, previous_hovered_legend*/
    32772 && i !== S && (z(), n(15, S = i));
  }, [
    _,
    c,
    i,
    v,
    U,
    O,
    A,
    l,
    f,
    u,
    a,
    d,
    h,
    g,
    w,
    S,
    E,
    B,
    G
  ];
}
class mp extends ct {
  constructor(t) {
    super(), ht(this, t, dp, _p, ut, {
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
      t = ze("rect"), p(
        t,
        "x",
        /*$tweened_x1*/
        e[10]
      ), p(
        t,
        "y",
        /*$tweened_y2*/
        e[13]
      ), p(t, "width", n = /*$tweened_x2*/
      e[11] - /*$tweened_x1*/
      e[10]), p(t, "height", i = /*$tweened_y1*/
      e[12] - /*$tweened_y2*/
      e[13]), p(
        t,
        "fill",
        /*colors*/
        e[5]
      ), p(
        t,
        "opacity",
        /*opacity*/
        e[2]
      ), p(
        t,
        "stroke-width",
        /*outline_width*/
        e[1]
      ), p(
        t,
        "stroke",
        /*outline_color*/
        e[3]
      ), p(t, "clip-path", `url(#${sa})`);
    },
    m(l, f) {
      Q(l, t, f);
    },
    p(l, f) {
      f & /*$tweened_x1*/
      1024 && p(
        t,
        "x",
        /*$tweened_x1*/
        l[10]
      ), f & /*$tweened_y2*/
      8192 && p(
        t,
        "y",
        /*$tweened_y2*/
        l[13]
      ), f & /*$tweened_x2, $tweened_x1*/
      3072 && n !== (n = /*$tweened_x2*/
      l[11] - /*$tweened_x1*/
      l[10]) && p(t, "width", n), f & /*$tweened_y1, $tweened_y2*/
      12288 && i !== (i = /*$tweened_y1*/
      l[12] - /*$tweened_y2*/
      l[13]) && p(t, "height", i), f & /*colors*/
      32 && p(
        t,
        "fill",
        /*colors*/
        l[5]
      ), f & /*opacity*/
      4 && p(
        t,
        "opacity",
        /*opacity*/
        l[2]
      ), f & /*outline_width*/
      2 && p(
        t,
        "stroke-width",
        /*outline_width*/
        l[1]
      ), f & /*outline_color*/
      8 && p(
        t,
        "stroke",
        /*outline_color*/
        l[3]
      );
    },
    d(l) {
      l && K(t);
    }
  };
}
function bp(e) {
  let t;
  return {
    c() {
      t = ze("line"), p(
        t,
        "x1",
        /*$tweened_x1*/
        e[10]
      ), p(
        t,
        "x2",
        /*$tweened_x2*/
        e[11]
      ), p(
        t,
        "y1",
        /*$tweened_y1*/
        e[12]
      ), p(
        t,
        "y2",
        /*$tweened_y2*/
        e[13]
      ), p(
        t,
        "stroke",
        /*colors*/
        e[5]
      ), p(
        t,
        "stroke-dasharray",
        /*linetype*/
        e[4]
      ), p(t, "clip-path", `url(#${sa})`);
    },
    m(n, i) {
      Q(n, t, i);
    },
    p(n, i) {
      i & /*$tweened_x1*/
      1024 && p(
        t,
        "x1",
        /*$tweened_x1*/
        n[10]
      ), i & /*$tweened_x2*/
      2048 && p(
        t,
        "x2",
        /*$tweened_x2*/
        n[11]
      ), i & /*$tweened_y1*/
      4096 && p(
        t,
        "y1",
        /*$tweened_y1*/
        n[12]
      ), i & /*$tweened_y2*/
      8192 && p(
        t,
        "y2",
        /*$tweened_y2*/
        n[13]
      ), i & /*colors*/
      32 && p(
        t,
        "stroke",
        /*colors*/
        n[5]
      ), i & /*linetype*/
      16 && p(
        t,
        "stroke-dasharray",
        /*linetype*/
        n[4]
      );
    },
    d(n) {
      n && K(t);
    }
  };
}
function wp(e) {
  let t, n, i, l, f, u, a, _, c;
  function d(w, v) {
    return (
      /*type*/
      w[0] === "line" ? bp : yp
    );
  }
  let h = d(e), g = h(e);
  return {
    c() {
      t = ze("defs"), n = ze("clipPath"), i = ze("rect"), _ = ve(), g.c(), c = Le(), p(i, "x", l = /*y_lines_spacing*/
      e[9] + /*line_generator_space*/
      e[6] * 1.5), p(i, "y", f = /*line_generator_space*/
      e[6] * 2), p(i, "width", u = /*width*/
      e[7] - /*line_generator_space*/
      e[6] * 7), p(i, "height", a = /*x_lines_spacing*/
      e[8] - /*line_generator_space*/
      e[6] * 2), p(n, "id", sa);
    },
    m(w, v) {
      Q(w, t, v), q(t, n), q(n, i), Q(w, _, v), g.m(w, v), Q(w, c, v);
    },
    p(w, [v]) {
      v & /*y_lines_spacing, line_generator_space*/
      576 && l !== (l = /*y_lines_spacing*/
      w[9] + /*line_generator_space*/
      w[6] * 1.5) && p(i, "x", l), v & /*line_generator_space*/
      64 && f !== (f = /*line_generator_space*/
      w[6] * 2) && p(i, "y", f), v & /*width, line_generator_space*/
      192 && u !== (u = /*width*/
      w[7] - /*line_generator_space*/
      w[6] * 7) && p(i, "width", u), v & /*x_lines_spacing, line_generator_space*/
      320 && a !== (a = /*x_lines_spacing*/
      w[8] - /*line_generator_space*/
      w[6] * 2) && p(i, "height", a), h === (h = d(w)) && g ? g.p(w, v) : (g.d(1), g = h(w), g && (g.c(), g.m(c.parentNode, c)));
    },
    i: Pe,
    o: Pe,
    d(w) {
      w && (K(t), K(_), K(c)), g.d(w);
    }
  };
}
let sa = "clip-path";
function pp(e, t, n) {
  let i, l, f, u, { type: a } = t, { outline_width: _ } = t, { opacity: c } = t, { outline_color: d } = t, { linetype: h } = t, { colors: g } = t, { line_generator_space: w } = t, { width: v } = t, { x_lines_spacing: S } = t, { y_lines_spacing: k } = t, { x1: T } = t, { x2: A } = t, { y1: z } = t, { y2: U } = t, { tweenOptions: O } = t, E = Nt(T, O == null ? void 0 : O.x1);
  vt(e, E, (D) => n(10, i = D));
  let B = Nt(z, O == null ? void 0 : O.y1);
  vt(e, B, (D) => n(12, f = D));
  let G = Nt(A, O == null ? void 0 : O.x2);
  vt(e, G, (D) => n(11, l = D));
  let Y = Nt(U, O == null ? void 0 : O.y2);
  return vt(e, Y, (D) => n(13, u = D)), e.$$set = (D) => {
    "type" in D && n(0, a = D.type), "outline_width" in D && n(1, _ = D.outline_width), "opacity" in D && n(2, c = D.opacity), "outline_color" in D && n(3, d = D.outline_color), "linetype" in D && n(4, h = D.linetype), "colors" in D && n(5, g = D.colors), "line_generator_space" in D && n(6, w = D.line_generator_space), "width" in D && n(7, v = D.width), "x_lines_spacing" in D && n(8, S = D.x_lines_spacing), "y_lines_spacing" in D && n(9, k = D.y_lines_spacing), "x1" in D && n(18, T = D.x1), "x2" in D && n(19, A = D.x2), "y1" in D && n(20, z = D.y1), "y2" in D && n(21, U = D.y2), "tweenOptions" in D && n(22, O = D.tweenOptions);
  }, e.$$.update = () => {
    e.$$.dirty & /*x1, tweenOptions*/
    4456448 && E.set(T, O == null ? void 0 : O.x1), e.$$.dirty & /*y1, tweenOptions*/
    5242880 && B.set(z, O == null ? void 0 : O.y1), e.$$.dirty & /*x2, tweenOptions*/
    4718592 && G.set(A, O == null ? void 0 : O.x2), e.$$.dirty & /*y2, tweenOptions*/
    6291456 && Y.set(U, O == null ? void 0 : O.y2);
  }, [
    a,
    _,
    c,
    d,
    h,
    g,
    w,
    v,
    S,
    k,
    i,
    l,
    f,
    u,
    E,
    B,
    G,
    Y,
    T,
    A,
    z,
    U,
    O
  ];
}
class vp extends ct {
  constructor(t) {
    super(), ht(this, t, pp, wp, ut, {
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
      n = ze("tspan"), l = Ae(i), p(n, "x", f = /*x_scale*/
      t[1](
        /*annotation*/
        t[5].x
      )), p(n, "dy", u = /*index*/
      t[10] === 0 ? 0 : "1.2em"), this.first = n;
    },
    m(a, _) {
      Q(a, n, _), q(n, l);
    },
    p(a, _) {
      t = a, _ & /*annotations_df*/
      1 && i !== (i = /*line*/
      t[8] + "") && Oe(l, i), _ & /*x_scale, annotations_df*/
      3 && f !== (f = /*x_scale*/
      t[1](
        /*annotation*/
        t[5].x
      )) && p(n, "x", f), _ & /*annotations_df*/
      1 && u !== (u = /*index*/
      t[10] === 0 ? 0 : "1.2em") && p(n, "dy", u);
    },
    d(a) {
      a && K(n);
    }
  };
}
function Fh(e) {
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
    let w = Uh(e, d, g), v = h(w);
    i.set(v, n[g] = Ph(v, w));
  }
  return {
    c() {
      t = ze("text");
      for (let g = 0; g < n.length; g += 1)
        n[g].c();
      p(t, "x", l = /*x_scale*/
      e[1](
        /*annotation*/
        e[5].x
      )), p(t, "y", f = /*y_scale*/
      e[2](
        /*annotation*/
        e[5].y
      )), p(t, "fill", u = /*annotation*/
      e[5].color || "black"), p(t, "font-size", a = /*annotation*/
      e[5].font_size || "16px"), p(t, "text-anchor", _ = /*annotation*/
      e[5].text_anchor || "start"), p(t, "style", c = /*annotation*/
      e[5].style || "");
    },
    m(g, w) {
      Q(g, t, w);
      for (let v = 0; v < n.length; v += 1)
        n[v] && n[v].m(t, null);
    },
    p(g, w) {
      w & /*x_scale, annotations_df*/
      3 && (d = ke(
        /*annotation*/
        g[5].text.split(`
`)
      ), n = vn(n, w, h, 1, g, d, i, t, wc, Ph, null, Uh)), w & /*x_scale, annotations_df*/
      3 && l !== (l = /*x_scale*/
      g[1](
        /*annotation*/
        g[5].x
      )) && p(t, "x", l), w & /*y_scale, annotations_df*/
      5 && f !== (f = /*y_scale*/
      g[2](
        /*annotation*/
        g[5].y
      )) && p(t, "y", f), w & /*annotations_df*/
      1 && u !== (u = /*annotation*/
      g[5].color || "black") && p(t, "fill", u), w & /*annotations_df*/
      1 && a !== (a = /*annotation*/
      g[5].font_size || "16px") && p(t, "font-size", a), w & /*annotations_df*/
      1 && _ !== (_ = /*annotation*/
      g[5].text_anchor || "start") && p(t, "text-anchor", _), w & /*annotations_df*/
      1 && c !== (c = /*annotation*/
      g[5].style || "") && p(t, "style", c);
    },
    d(g) {
      g && K(t);
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
      Q(l, t, f);
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
      l && K(t), kn(i, l);
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
class Mp extends ct {
  constructor(t) {
    super(), ht(this, t, xp, kp, ut, {
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
      t = ze("path"), p(t, "d", n = wh(
        /*arrow*/
        e[5],
        /*x_scale*/
        e[1],
        /*y_scale*/
        e[2]
      )), p(t, "stroke", i = /*arrow*/
      e[5].color || "black"), p(t, "fill", "none"), p(t, "stroke-width", l = /*arrow*/
      e[5].width || "2");
    },
    m(f, u) {
      Q(f, t, u);
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
      )) && p(t, "d", n), u & /*arrows_df*/
      1 && i !== (i = /*arrow*/
      f[5].color || "black") && p(t, "stroke", i), u & /*arrows_df*/
      1 && l !== (l = /*arrow*/
      f[5].width || "2") && p(t, "stroke-width", l);
    },
    d(f) {
      f && K(t);
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
      Q(l, t, f);
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
      l && K(t), kn(i, l);
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
  }, [i, l, f, u, a];
}
class zp extends ct {
  constructor(t) {
    super(), ht(this, t, Sp, Tp, ut, {
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
var _a = Ap, Cp = typeof vi == "object" && vi && vi.Object === Object && vi, Lp = Cp, Ep = Lp, Rp = typeof self == "object" && self && self.Object === Object && self, Ip = Ep || Rp || Function("return this")(), t0 = Ip, Op = t0, Dp = function() {
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
var Yp = Hp, Xp = t0, qp = Xp.Symbol, n0 = qp, Hh = n0, i0 = Object.prototype, Gp = i0.hasOwnProperty, Zp = i0.toString, dl = Hh ? Hh.toStringTag : void 0;
function jp(e) {
  var t = Gp.call(e, dl), n = e[dl];
  try {
    e[dl] = void 0;
    var i = !0;
  } catch {
  }
  var l = Zp.call(e);
  return i && (t ? e[dl] = n : delete e[dl]), l;
}
var Kp = jp, Jp = Object.prototype, Qp = Jp.toString;
function Vp(e) {
  return Qp.call(e);
}
var $p = Vp, Yh = n0, e4 = Kp, t4 = $p, n4 = "[object Null]", i4 = "[object Undefined]", Xh = Yh ? Yh.toStringTag : void 0;
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
var h4 = _4, c4 = Yp, qh = _a, g4 = h4, Gh = 0 / 0, d4 = /^[-+]0x[0-9a-f]+$/i, m4 = /^0b[01]+$/i, y4 = /^0o[0-7]+$/i, b4 = parseInt;
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
var p4 = w4, v4 = _a, xu = Np, Zh = p4, k4 = "Expected a function", x4 = Math.max, M4 = Math.min;
function T4(e, t, n) {
  var i, l, f, u, a, _, c = 0, d = !1, h = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(k4);
  t = Zh(t) || 0, v4(n) && (d = !!n.leading, h = "maxWait" in n, f = h ? x4(Zh(n.maxWait) || 0, t) : f, g = "trailing" in n ? !!n.trailing : g);
  function w(E) {
    var B = i, G = l;
    return i = l = void 0, c = E, u = e.apply(G, B), u;
  }
  function v(E) {
    return c = E, a = setTimeout(T, t), d ? w(E) : u;
  }
  function S(E) {
    var B = E - _, G = E - c, Y = t - B;
    return h ? M4(Y, f - G) : Y;
  }
  function k(E) {
    var B = E - _, G = E - c;
    return _ === void 0 || B >= t || B < 0 || h && G >= f;
  }
  function T() {
    var E = xu();
    if (k(E))
      return A(E);
    a = setTimeout(T, S(E));
  }
  function A(E) {
    return a = void 0, g && i ? w(E) : (i = l = void 0, u);
  }
  function z() {
    a !== void 0 && clearTimeout(a), c = 0, i = _ = l = a = void 0;
  }
  function U() {
    return a === void 0 ? u : A(xu());
  }
  function O() {
    var E = xu(), B = k(E);
    if (i = arguments, l = this, _ = E, B) {
      if (a === void 0)
        return v(_);
      if (h)
        return clearTimeout(a), a = setTimeout(T, t), w(_);
    }
    return a === void 0 && (a = setTimeout(T, t)), u;
  }
  return O.cancel = z, O.flush = U, O;
}
var S4 = T4, z4 = S4, A4 = _a, C4 = "Expected a function";
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
const r0 = /* @__PURE__ */ Jc(E4);
function R4(e) {
  let t, n, i;
  return {
    c() {
      t = ze("rect"), p(t, "fill", "rgba(0, 0, 0, 0)"), p(
        t,
        "width",
        /*inner_width*/
        e[4]
      ), p(
        t,
        "height",
        /*inner_height*/
        e[5]
      );
    },
    m(l, f) {
      Q(l, t, f), n || (i = [
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
      16 && p(
        t,
        "width",
        /*inner_width*/
        l[4]
      ), f & /*inner_height*/
      32 && p(
        t,
        "height",
        /*inner_height*/
        l[5]
      );
    },
    i: Pe,
    o: Pe,
    d(l) {
      l && K(t), n = !1, Ht(i);
    }
  };
}
function I4(e, t, n) {
  let i, l, { x_scale: f } = t, { y_scale: u } = t, { tooltip2_array_values: a } = t, { height: _ } = t, { width: c } = t, { m: d } = t, { margin: h } = t, { filtered_data: g } = t, { type: w } = t, { tooltip: v } = t, { listener: S } = t, { buffer: k } = t, { time_series_interval: T } = t, { chart: A } = t, { labelPositions: z } = t, { nextLabelX: U } = t, { closestLabelX: O } = t;
  const E = r0(B, 10);
  function B(D) {
    if (n(7, d.x = D.offsetX, d), n(7, d.y = D.offsetY, d), A === "XYChart")
      n(0, a = Ow(g, f, u, w, v, d.x, d.y, T)), n(0, a = a.filter((j) => j.data && j.data.y !== void 0));
    else if (A === "bar") {
      let j = f.domain(), se = $c("bar", z, f, j, d.x);
      n(3, O = z[se]), n(2, U = z[se + 1] || f.range()[1]), n(0, a = g.filter((de) => de.x === j[se]));
    }
  }
  function G(D) {
    E(D);
  }
  const Y = () => {
    n(0, a = void 0), n(1, S = !1), n(3, O = 0), n(2, U = 0);
  };
  return e.$$set = (D) => {
    "x_scale" in D && n(8, f = D.x_scale), "y_scale" in D && n(9, u = D.y_scale), "tooltip2_array_values" in D && n(0, a = D.tooltip2_array_values), "height" in D && n(10, _ = D.height), "width" in D && n(11, c = D.width), "m" in D && n(7, d = D.m), "margin" in D && n(12, h = D.margin), "filtered_data" in D && n(13, g = D.filtered_data), "type" in D && n(14, w = D.type), "tooltip" in D && n(15, v = D.tooltip), "listener" in D && n(1, S = D.listener), "buffer" in D && n(16, k = D.buffer), "time_series_interval" in D && n(17, T = D.time_series_interval), "chart" in D && n(18, A = D.chart), "labelPositions" in D && n(19, z = D.labelPositions), "nextLabelX" in D && n(2, U = D.nextLabelX), "closestLabelX" in D && n(3, O = D.closestLabelX);
  }, e.$$.update = () => {
    e.$$.dirty & /*height, margin, buffer*/
    70656 && n(5, i = _ - h - k), e.$$.dirty & /*width, margin, buffer*/
    71680 && n(4, l = c - h - k);
  }, [
    a,
    S,
    U,
    O,
    l,
    i,
    G,
    d,
    f,
    u,
    _,
    c,
    h,
    g,
    w,
    v,
    k,
    T,
    A,
    z,
    Y
  ];
}
class l0 extends ct {
  constructor(t) {
    super(), ht(this, t, I4, R4, ut, {
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
      t = ze("rect"), p(t, "fill", "rgba(0, 0, 0, 0)"), p(
        t,
        "width",
        /*inner_width*/
        e[2]
      ), p(
        t,
        "height",
        /*inner_height*/
        e[3]
      );
    },
    m(l, f) {
      Q(l, t, f), n || (i = [
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
      4 && p(
        t,
        "width",
        /*inner_width*/
        l[2]
      ), f & /*inner_height*/
      8 && p(
        t,
        "height",
        /*inner_height*/
        l[3]
      );
    },
    i: Pe,
    o: Pe,
    d(l) {
      l && K(t), n = !1, Ht(i);
    }
  };
}
function D4(e, t, n) {
  let i, l, { height: f } = t, { width: u } = t, { m: a } = t, { margin: _ } = t, { listener: c } = t, { tooltip2_array_values: d } = t, { filtered_data: h } = t, { x_scale: g } = t, { y_scale: w } = t, { buffer: v } = t;
  const S = r0(k, 10);
  function k(z) {
    n(5, a.x = z.offsetX, a), n(5, a.y = z.offsetY, a), n(0, c = !0), n(1, d = h.filter((E) => E.tooltip === !0));
    let [U, O] = Lw(d, g, a.x, w, a.y);
    n(1, d = {
      ...d[U],
      data: d[U].data[O]
    });
  }
  function T(z) {
    S(z);
  }
  const A = () => {
    n(0, c = !1), n(1, d = void 0);
  };
  return e.$$set = (z) => {
    "height" in z && n(6, f = z.height), "width" in z && n(7, u = z.width), "m" in z && n(5, a = z.m), "margin" in z && n(8, _ = z.margin), "listener" in z && n(0, c = z.listener), "tooltip2_array_values" in z && n(1, d = z.tooltip2_array_values), "filtered_data" in z && n(9, h = z.filtered_data), "x_scale" in z && n(10, g = z.x_scale), "y_scale" in z && n(11, w = z.y_scale), "buffer" in z && n(12, v = z.buffer);
  }, e.$$.update = () => {
    e.$$.dirty & /*height, margin, buffer*/
    4416 && n(3, i = f - _ - v), e.$$.dirty & /*width, margin, buffer*/
    4480 && n(2, l = u - _ - v);
  }, [
    c,
    d,
    l,
    i,
    T,
    a,
    f,
    u,
    _,
    h,
    g,
    w,
    v,
    A
  ];
}
class N4 extends ct {
  constructor(t) {
    super(), ht(this, t, D4, O4, ut, {
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
  let t, n, i, l, f, u, a, _, c, d, h;
  return {
    c() {
      t = ze("line"), f = ve(), u = ze("text"), a = Ae(
        /*ticklabel*/
        e[3]
      ), p(
        t,
        "x1",
        /*y_lines_spacing*/
        e[5]
      ), p(t, "x2", n = /*width*/
      e[1] - /*line_generator_space*/
      e[7]), p(
        t,
        "y1",
        /*$tweened_y1*/
        e[8]
      ), p(
        t,
        "y2",
        /*$tweened_y1*/
        e[8]
      ), p(t, "stroke", "#ededed"), p(
        u,
        "y",
        /*$tweened_y1*/
        e[8]
      ), p(u, "x", _ = /*y_lines_spacing*/
      e[5] - /*space_between_ticks_and_gridline*/
      e[6]), p(u, "text-anchor", "end"), y(
        u,
        "font-size",
        /*font_size_yticks*/
        e[4] + "px"
      ), y(u, "font-family", "Arial, sans-serif"), p(u, "dy", "0.25em");
    },
    m(g, w) {
      Q(g, t, w), Q(g, f, w), Q(g, u, w), q(u, a), h = !0;
    },
    p(g, [w]) {
      e = g, (!h || w & /*y_lines_spacing*/
      32) && p(
        t,
        "x1",
        /*y_lines_spacing*/
        e[5]
      ), (!h || w & /*width, line_generator_space*/
      130 && n !== (n = /*width*/
      e[1] - /*line_generator_space*/
      e[7])) && p(t, "x2", n), (!h || w & /*$tweened_y1*/
      256) && p(
        t,
        "y1",
        /*$tweened_y1*/
        e[8]
      ), (!h || w & /*$tweened_y1*/
      256) && p(
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
      256) && p(
        u,
        "y",
        /*$tweened_y1*/
        e[8]
      ), (!h || w & /*y_lines_spacing, space_between_ticks_and_gridline*/
      96 && _ !== (_ = /*y_lines_spacing*/
      e[5] - /*space_between_ticks_and_gridline*/
      e[6])) && p(u, "x", _), (!h || w & /*font_size_yticks*/
      16) && y(
        u,
        "font-size",
        /*font_size_yticks*/
        e[4] + "px"
      );
    },
    i(g) {
      h || (g && it(() => {
        h && (l && l.end(1), i = Fi(t, wn, { duration: 500, easing: Al }), i.start());
      }), g && it(() => {
        h && (d && d.end(1), c = Fi(u, wn, { duration: 1e3, easing: Al }), c.start());
      }), h = !0);
    },
    o(g) {
      i && i.invalidate(), g && (l = xl(t, Zt, {
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
      })), c && c.invalidate(), g && (d = xl(u, Zt, {
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
      })), h = !1;
    },
    d(g) {
      g && (K(t), K(f), K(u)), g && l && l.end(), g && d && d.end();
    }
  };
}
function P4(e, t, n) {
  let i, { tweenOptions: l } = t, { height: f } = t, { width: u } = t, { y1: a } = t, { ticklabel: _ } = t, { font_size_yticks: c } = t, { y_lines_spacing: d } = t, { space_between_ticks_and_gridline: h } = t, { line_generator_space: g } = t, w = Nt(a, l == null ? void 0 : l.y1);
  return vt(e, w, (v) => n(8, i = v)), e.$$set = (v) => {
    "tweenOptions" in v && n(10, l = v.tweenOptions), "height" in v && n(0, f = v.height), "width" in v && n(1, u = v.width), "y1" in v && n(2, a = v.y1), "ticklabel" in v && n(3, _ = v.ticklabel), "font_size_yticks" in v && n(4, c = v.font_size_yticks), "y_lines_spacing" in v && n(5, d = v.y_lines_spacing), "space_between_ticks_and_gridline" in v && n(6, h = v.space_between_ticks_and_gridline), "line_generator_space" in v && n(7, g = v.line_generator_space);
  }, e.$$.update = () => {
    e.$$.dirty & /*y1, tweenOptions*/
    1028 && El().then(() => {
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
class ha extends ct {
  constructor(t) {
    super(), ht(this, t, P4, U4, ut, {
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
  let t, n, i, l, f, u, a, _, c, d;
  return {
    c() {
      t = ze("line"), l = ve(), f = ze("text"), u = Ae(
        /*ticklabel*/
        e[2]
      ), p(
        t,
        "x1",
        /*$tweened_x1*/
        e[12]
      ), p(
        t,
        "x2",
        /*$tweened_x1*/
        e[12]
      ), p(
        t,
        "y1",
        /*x_lines_spacing*/
        e[10]
      ), p(
        t,
        "y2",
        /*line_generator_space*/
        e[11]
      ), p(t, "stroke", "#ededed"), p(f, "transform", a = `rotate(${-/*rotation_xaxis*/
      e[5]} ${/*$tweened_x1*/
      e[12]} ${/*x_ticks_spacing*/
      e[0]})`), p(
        f,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[8]
      ), p(
        f,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[9]
      ), p(
        f,
        "x",
        /*$tweened_x1*/
        e[12]
      ), p(
        f,
        "y",
        /*x_ticks_spacing*/
        e[0]
      ), y(
        f,
        "font-size",
        /*font_size_xticks*/
        e[3] + "px"
      ), y(f, "font-family", "Arial, sans-serif"), p(
        f,
        "dy",
        /*dy*/
        e[7]
      ), p(
        f,
        "dx",
        /*dx*/
        e[6]
      );
    },
    m(h, g) {
      Q(h, t, g), Q(h, l, g), Q(h, f, g), q(f, u), d = !0;
    },
    p(h, [g]) {
      e = h, (!d || g & /*$tweened_x1*/
      4096) && p(
        t,
        "x1",
        /*$tweened_x1*/
        e[12]
      ), (!d || g & /*$tweened_x1*/
      4096) && p(
        t,
        "x2",
        /*$tweened_x1*/
        e[12]
      ), (!d || g & /*x_lines_spacing*/
      1024) && p(
        t,
        "y1",
        /*x_lines_spacing*/
        e[10]
      ), (!d || g & /*line_generator_space*/
      2048) && p(
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
      e[0]})`)) && p(f, "transform", a), (!d || g & /*text_anchor_x_axis*/
      256) && p(
        f,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[8]
      ), (!d || g & /*dominant_baseline_x_axis*/
      512) && p(
        f,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[9]
      ), (!d || g & /*$tweened_x1*/
      4096) && p(
        f,
        "x",
        /*$tweened_x1*/
        e[12]
      ), (!d || g & /*x_ticks_spacing*/
      1) && p(
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
      128) && p(
        f,
        "dy",
        /*dy*/
        e[7]
      ), (!d || g & /*dx*/
      64) && p(
        f,
        "dx",
        /*dx*/
        e[6]
      );
    },
    i(h) {
      d || (h && it(() => {
        d && (i && i.end(1), n = Fi(t, wn, { duration: 500, easing: Al }), n.start());
      }), h && it(() => {
        d && (c && c.end(1), _ = Fi(f, wn, { duration: 1e3, easing: Al }), _.start());
      }), d = !0);
    },
    o(h) {
      n && n.invalidate(), h && (i = xl(t, Zt, {
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
        easing: Jo
      })), _ && _.invalidate(), h && (c = xl(f, Zt, {
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
        easing: Jo
      })), d = !1;
    },
    d(h) {
      h && (K(t), K(l), K(f)), h && i && i.end(), h && c && c.end();
    }
  };
}
function W4(e, t, n) {
  let i, { tweenOptions: l } = t, { x1: f } = t, { ticklabel: u } = t, { font_size_xticks: a } = t, { width: _ } = t, { rotation_xaxis: c } = t, { dx: d } = t, { dy: h } = t, { text_anchor_x_axis: g } = t, { dominant_baseline_x_axis: w } = t, { x_lines_spacing: v } = t, { x_ticks_spacing: S } = t, { line_generator_space: k } = t, T = Nt(f, l == null ? void 0 : l.x1);
  return vt(e, T, (A) => n(12, i = A)), e.$$set = (A) => {
    "tweenOptions" in A && n(14, l = A.tweenOptions), "x1" in A && n(1, f = A.x1), "ticklabel" in A && n(2, u = A.ticklabel), "font_size_xticks" in A && n(3, a = A.font_size_xticks), "width" in A && n(4, _ = A.width), "rotation_xaxis" in A && n(5, c = A.rotation_xaxis), "dx" in A && n(6, d = A.dx), "dy" in A && n(7, h = A.dy), "text_anchor_x_axis" in A && n(8, g = A.text_anchor_x_axis), "dominant_baseline_x_axis" in A && n(9, w = A.dominant_baseline_x_axis), "x_lines_spacing" in A && n(10, v = A.x_lines_spacing), "x_ticks_spacing" in A && n(0, S = A.x_ticks_spacing), "line_generator_space" in A && n(11, k = A.line_generator_space);
  }, e.$$.update = () => {
    e.$$.dirty & /*x_ticks_spacing*/
    1 && n(0, S = isNaN(S) ? 10 : S), e.$$.dirty & /*x1, tweenOptions*/
    16386 && El().then(() => {
      T.set(f, l == null ? void 0 : l.x1);
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
    v,
    k,
    i,
    T,
    l
  ];
}
class o0 extends ct {
  constructor(t) {
    super(), ht(this, t, W4, F4, ut, {
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
function B4(e) {
  let t, n, i;
  return {
    c() {
      t = ze("text"), n = Ae(
        /*y_label*/
        e[2]
      ), p(
        t,
        "x",
        /*label_height*/
        e[1]
      ), p(
        t,
        "y",
        /*$tweened_axis_title_position*/
        e[3]
      ), y(t, "text-anchor", "middle"), y(
        t,
        "font-size",
        /*font_size_yaxis*/
        e[0] + "px"
      ), y(t, "font-family", "Arial, sans-serif"), p(t, "transform", i = `rotate(-90, ${/*label_height*/
      e[1]}, ${/*$tweened_axis_title_position*/
      e[3]})`);
    },
    m(l, f) {
      Q(l, t, f), q(t, n);
    },
    p(l, [f]) {
      f & /*y_label*/
      4 && Oe(
        n,
        /*y_label*/
        l[2]
      ), f & /*label_height*/
      2 && p(
        t,
        "x",
        /*label_height*/
        l[1]
      ), f & /*$tweened_axis_title_position*/
      8 && p(
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
      l[3]})`) && p(t, "transform", i);
    },
    i: Pe,
    o: Pe,
    d(l) {
      l && K(t);
    }
  };
}
function H4(e, t, n) {
  let i, { tweenOptions: l } = t, { axis_title_position: f } = t, { font_size_yaxis: u } = t, { label_height: a } = t, { y_label: _ } = t, c = Nt(f, l == null ? void 0 : l.axis_title_position);
  return vt(e, c, (d) => n(3, i = d)), e.$$set = (d) => {
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
class f0 extends ct {
  constructor(t) {
    super(), ht(this, t, H4, B4, ut, {
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
      t = ze("text"), n = Ae(
        /*x_label*/
        e[3]
      ), p(
        t,
        "x",
        /*$tweened_axis_title_position*/
        e[4]
      ), p(t, "y", i = /*height*/
      e[1] - /*label_height_x_axis*/
      e[2]), y(t, "text-anchor", "middle"), y(
        t,
        "font-size",
        /*font_size_xaxis*/
        e[0] + "px"
      ), y(t, "font-family", "Arial, sans-serif");
    },
    m(l, f) {
      Q(l, t, f), q(t, n);
    },
    p(l, [f]) {
      f & /*x_label*/
      8 && Oe(
        n,
        /*x_label*/
        l[3]
      ), f & /*$tweened_axis_title_position*/
      16 && p(
        t,
        "x",
        /*$tweened_axis_title_position*/
        l[4]
      ), f & /*height, label_height_x_axis*/
      6 && i !== (i = /*height*/
      l[1] - /*label_height_x_axis*/
      l[2]) && p(t, "y", i), f & /*font_size_xaxis*/
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
      l && K(t);
    }
  };
}
function X4(e, t, n) {
  let i, { tweenOptions: l } = t, { axis_title_position: f } = t, { font_size_xaxis: u } = t, { height: a } = t, { label_height_x_axis: _ } = t, { x_label: c } = t, d = Nt(f, l == null ? void 0 : l.axis_title_position);
  return vt(e, d, (h) => n(4, i = h)), e.$$set = (h) => {
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
class u0 extends ct {
  constructor(t) {
    super(), ht(this, t, X4, Y4, ut, {
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
  const l = getComputedStyle(e), f = l.transform === "none" ? "" : l.transform, [u, a] = l.transformOrigin.split(" ").map(parseFloat), _ = t.left + t.width * u / n.width - (n.left + u), c = t.top + t.height * a / n.height - (n.top + a), { delay: d = 0, duration: h = (w) => Math.sqrt(w) * 120, easing: g = Vc } = i;
  return {
    delay: d,
    duration: Yr(h) ? h(Math.sqrt(_ * _ + c * c)) : h,
    easing: g,
    css: (w, v) => {
      const S = v * _, k = v * c, T = w + v * t.width / n.width, A = w + v * t.height / n.height;
      return `transform: ${f} translate(${S}px, ${k}px) scale(${T}, ${A});`;
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
  let t, n, i, l, f, u, a, _ = [], c = /* @__PURE__ */ new Map(), d, h, g, w = ke(
    /*tooltip2_array_values*/
    e[0]
  );
  const v = (S) => (
    /*line*/
    S[33].id
  );
  for (let S = 0; S < w.length; S += 1) {
    let k = jh(e, w, S), T = v(k);
    c.set(T, _[S] = Vh(T, k));
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
      ), p(t, "class", "tooltip"), y(t, "position", "absolute"), y(
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
    m(S, k) {
      Q(S, t, k), q(t, n), q(t, i), q(t, l), q(l, f), q(t, u), q(t, a);
      for (let T = 0; T < _.length; T += 1)
        _[T] && _[T].m(a, null);
      d = rr(
        t,
        /*div2_elementresize_handler*/
        e[31].bind(t)
      ), g = !0;
    },
    p(S, k) {
      if (e = S, (!g || k[0] & /*background_color_tt*/
      2) && y(
        n,
        "background-color",
        /*background_color_tt*/
        e[1]
      ), (!g || k[0] & /*opacity_tt*/
      4) && y(
        n,
        "opacity",
        /*opacity_tt*/
        e[2]
      ), (!g || k[0] & /*h6_header*/
      4096) && Oe(
        f,
        /*h6_header*/
        e[12]
      ), k[0] & /*tooltip2_array_values, justify_content_tooltip*/
      33) {
        w = ke(
          /*tooltip2_array_values*/
          e[0]
        );
        for (let T = 0; T < _.length; T += 1)
          _[T].r();
        _ = vn(_, k, v, 1, e, w, c, a, E6, Vh, null, jh);
        for (let T = 0; T < _.length; T += 1)
          _[T].a();
      }
      (!g || k[0] & /*padding_tooltip*/
      8) && y(
        a,
        "padding",
        /*padding_tooltip*/
        e[3] + "px"
      ), (!g || k[0] & /*font_size_tooltip*/
      16) && y(
        a,
        "font-size",
        /*font_size_tooltip*/
        e[4] + "px"
      ), (!g || k[0] & /*text_color_tooltip*/
      64) && y(
        a,
        "color",
        /*text_color_tooltip*/
        e[6]
      ), (!g || k[0] & /*border_width_tooltip*/
      512) && y(
        a,
        "border-width",
        /*border_width_tooltip*/
        e[9]
      ), (!g || k[0] & /*border_color_tooltip*/
      128) && y(
        a,
        "border-color",
        /*border_color_tooltip*/
        e[7]
      ), (!g || k[0] & /*border_style_tooltip*/
      256) && y(
        a,
        "border-style",
        /*border_style_tooltip*/
        e[8]
      ), (!g || k[0] & /*yPosition*/
      32768) && y(
        t,
        "top",
        /*yPosition*/
        e[15] + "px"
      ), (!g || k[0] & /*xPosition*/
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
      S && K(t);
      for (let k = 0; k < _.length; k += 1)
        _[k].d();
      d(), S && h && h.end();
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
      Q(n, t, i);
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
      n && K(t);
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
      Q(n, t, i);
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
      n && K(t);
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
      t = _e("div"), i = Ae(n), l = Ae(":  "), f = _e("strong"), a = Ae(u), y(t, "display", "flex"), y(
        t,
        "justify-content",
        /*justify_content_tooltip*/
        e[5]
      );
    },
    m(_, c) {
      Q(_, t, c), q(t, i), q(t, l), q(t, f), q(f, a);
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
      _ && K(t);
    }
  };
}
function Vh(e, t) {
  let n, i, l, f, u, a = (
    /*line*/
    t[33].id + ""
  ), _, c, d, h, g = Pe;
  function w(A, z) {
    if (
      /*line*/
      A[33].type === "points"
    )
      return Z4;
    if (
      /*line*/
      A[33].type === "line"
    )
      return G4;
  }
  let v = w(t), S = v && v(t), k = ke(Object.entries(
    /*line*/
    t[33].data.custom_tooltip[0]
  )), T = [];
  for (let A = 0; A < k.length; A += 1)
    T[A] = Qh(Kh(t, k, A));
  return {
    key: e,
    first: null,
    c() {
      n = _e("div"), i = _e("div"), l = _e("div"), S && S.c(), f = ve(), u = _e("span"), _ = Ae(a), c = ve();
      for (let A = 0; A < T.length; A += 1)
        T[A].c();
      d = ve(), y(l, "width", "18px"), y(l, "display", "flex"), y(l, "align-items", "center"), y(l, "justify-content", "center"), y(i, "display", "flex"), y(i, "align-items", "center"), this.first = n;
    },
    m(A, z) {
      Q(A, n, z), q(n, i), q(i, l), S && S.m(l, null), q(i, f), q(i, u), q(u, _), q(n, c);
      for (let U = 0; U < T.length; U += 1)
        T[U] && T[U].m(n, null);
      q(n, d);
    },
    p(A, z) {
      if (t = A, v === (v = w(t)) && S ? S.p(t, z) : (S && S.d(1), S = v && v(t), S && (S.c(), S.m(l, null))), z[0] & /*tooltip2_array_values*/
      1 && a !== (a = /*line*/
      t[33].id + "") && Oe(_, a), z[0] & /*justify_content_tooltip, tooltip2_array_values*/
      33) {
        k = ke(Object.entries(
          /*line*/
          t[33].data.custom_tooltip[0]
        ));
        let U;
        for (U = 0; U < k.length; U += 1) {
          const O = Kh(t, k, U);
          T[U] ? T[U].p(O, z) : (T[U] = Qh(O), T[U].c(), T[U].m(n, d));
        }
        for (; U < T.length; U += 1)
          T[U].d(1);
        T.length = k.length;
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
        q4,
        /*animationParamsList*/
        t[14]
      );
    },
    d(A) {
      A && K(n), S && S.d(), kn(T, A);
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
      i && i.m(l, f), Q(l, t, f), n = !0;
    },
    p(l, f) {
      /*tooltip2_array_values*/
      l[0] && /*tooltip2_array_values*/
      l[0].length > 0 ? i ? (i.p(l, f), f[0] & /*tooltip2_array_values*/
      1 && ne(i, 1)) : (i = Jh(l), i.c(), ne(i, 1), i.m(t.parentNode, t)) : i && (We(), ue(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(l) {
      n || (ne(i), n = !0);
    },
    o(l) {
      ue(i), n = !1;
    },
    d(l) {
      l && K(t), i && i.d(l);
    }
  };
}
const $h = 20, Mu = 100;
function K4(e, t, n) {
  let i, l, f, u, a, { x_scale: _ } = t, { y_scale: c } = t, { m_y: d } = t, { tooltip2_array_values: h } = t, { format_tooltip: g } = t, { height: w } = t, { width: v } = t, { interval: S } = t, { type: k } = t, { background_color_tt: T } = t, { opacity_tt: A } = t, { animation_params_list: z } = t, { padding_tooltip: U } = t, { font_size_tooltip: O } = t, { justify_content_tooltip: E } = t, { text_color_tooltip: B } = t, { border_color_tooltip: G } = t, { show_delay_tooltip: Y } = t, { border_style_tooltip: D } = t, { border_width_tooltip: j } = t, { tooltip_position: se } = t, de, re, te, J, W;
  function C() {
    te = this.clientWidth, J = this.clientHeight, n(10, te), n(11, J);
  }
  return e.$$set = (R) => {
    "x_scale" in R && n(19, _ = R.x_scale), "y_scale" in R && n(20, c = R.y_scale), "m_y" in R && n(21, d = R.m_y), "tooltip2_array_values" in R && n(0, h = R.tooltip2_array_values), "format_tooltip" in R && n(22, g = R.format_tooltip), "height" in R && n(23, w = R.height), "width" in R && n(24, v = R.width), "interval" in R && n(25, S = R.interval), "type" in R && n(26, k = R.type), "background_color_tt" in R && n(1, T = R.background_color_tt), "opacity_tt" in R && n(2, A = R.opacity_tt), "animation_params_list" in R && n(27, z = R.animation_params_list), "padding_tooltip" in R && n(3, U = R.padding_tooltip), "font_size_tooltip" in R && n(4, O = R.font_size_tooltip), "justify_content_tooltip" in R && n(5, E = R.justify_content_tooltip), "text_color_tooltip" in R && n(6, B = R.text_color_tooltip), "border_color_tooltip" in R && n(7, G = R.border_color_tooltip), "show_delay_tooltip" in R && n(17, Y = R.show_delay_tooltip), "border_style_tooltip" in R && n(8, D = R.border_style_tooltip), "border_width_tooltip" in R && n(9, j = R.border_width_tooltip), "tooltip_position" in R && n(18, se = R.tooltip_position);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*background_color_tt*/
    2 && n(1, T = T || "white"), e.$$.dirty[0] & /*opacity_tt*/
    4 && n(2, A = A || "0.8"), e.$$.dirty[0] & /*padding_tooltip*/
    8 && n(3, U = U || 5), e.$$.dirty[0] & /*justify_content_tooltip*/
    32 && n(5, E = E || "space-between"), e.$$.dirty[0] & /*font_size_tooltip*/
    16 && n(4, O = O || 14), e.$$.dirty[0] & /*text_color_tooltip*/
    64 && n(6, B = B || "black"), e.$$.dirty[0] & /*border_color_tooltip, background_color_tt*/
    130 && n(7, G = G || T), e.$$.dirty[0] & /*show_delay_tooltip*/
    131072 && n(17, Y = Y || 0), e.$$.dirty[0] & /*border_style_tooltip*/
    256 && n(8, D = D || "solid"), e.$$.dirty[0] & /*border_width_tooltip*/
    512 && n(9, j = j || 0), e.$$.dirty[0] & /*tooltip_position*/
    262144 && n(18, se = se || null), e.$$.dirty[0] & /*tooltip2_array_values, type, maxYValue*/
    1140850689 && (n(30, W = Math.max(...h.map((R) => R.data.y))), n(0, h = h.map((R) => ({
      ...R,
      shape: k === "scatter" ? "point" : "line"
    })).sort((R, ce) => ce.data.y - R.data.y || ce.data.y - W))), e.$$.dirty[0] & /*tooltip_position, height, x_scale, tooltip2_array_values, m_y*/
    11272193 && (se ? se === "top" && (n(28, de = 0), n(29, re = w)) : (n(28, de = _(h[0].data.x)), n(29, re = d))), e.$$.dirty[0] & /*x, tooltipWidth, width*/
    285213696 && n(16, i = de + te > v ? de - te - $h : de + $h), e.$$.dirty[0] & /*y, tooltipHeight, height*/
    545261568 && n(15, l = re - J < 0 ? re - Mu : re + J > w ? re - J - Mu : re + Mu), e.$$.dirty[0] & /*format_tooltip*/
    4194304 && _n(g), e.$$.dirty[0] & /*animation_params_list*/
    134217728 && n(14, f = z), e.$$.dirty[0] & /*show_delay_tooltip*/
    131072 && n(13, u = { delay: Y }), e.$$.dirty[0] & /*interval, type, tooltip2_array_values*/
    100663297 && n(12, a = e0(S, k, h));
  }, [
    h,
    T,
    A,
    U,
    O,
    E,
    B,
    G,
    D,
    j,
    te,
    J,
    a,
    u,
    f,
    l,
    i,
    Y,
    se,
    _,
    c,
    d,
    g,
    w,
    v,
    S,
    k,
    z,
    de,
    re,
    W,
    C
  ];
}
class J4 extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      K4,
      j4,
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
function Q4(e) {
  let t, n, i, l, f, u, a, _, c, d, h, g, w, v, S, k, T, A, z, U, O, E, B, G, Y, D, j, se, de, re, te, J, W, C, R;
  return {
    c() {
      t = ze("rect"), _ = ve(), c = ze("text"), d = Ae(
        /*tooltip_name_x*/
        e[12]
      ), w = ve(), v = ze("rect"), A = ve(), z = ze("text"), U = Ae(
        /*tooltip_name_y*/
        e[14]
      ), B = ve(), G = ze("line"), de = ve(), re = ze("line"), p(t, "x", n = /*adjusted_x1*/
      e[15] - /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.3 - 5), p(t, "y", i = /*x_ticks_spacing*/
      e[6] - /*font_size_xticks*/
      e[0] - 5), p(t, "width", l = /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.6 + 10), p(t, "height", f = /*font_size_xticks*/
      e[0] + 20), p(t, "rx", "5"), p(t, "ry", "5"), p(t, "fill", "darkgrey"), p(t, "transform", u = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`), p(c, "transform", h = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`), p(
        c,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[4]
      ), p(
        c,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[5]
      ), p(
        c,
        "x",
        /*x1*/
        e[13]
      ), p(
        c,
        "y",
        /*x_ticks_spacing*/
        e[6]
      ), y(
        c,
        "font-size",
        /*font_size_xticks*/
        e[0] * 1.2 + "px"
      ), y(c, "font-family", "Arial, sans-serif"), y(c, "fill", "white"), p(
        c,
        "dy",
        /*dy*/
        e[3]
      ), p(
        c,
        "dx",
        /*dx*/
        e[2]
      ), p(v, "x", S = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10] / 2 - /*rect_width*/
      e[17]), p(v, "y", k = /*y1*/
      e[19] - /*rect_height*/
      e[16] / 2), p(
        v,
        "width",
        /*rect_width*/
        e[17]
      ), p(
        v,
        "height",
        /*rect_height*/
        e[16]
      ), p(v, "rx", "5"), p(v, "ry", "5"), p(v, "fill", "darkgrey"), p(
        z,
        "y",
        /*y1*/
        e[19]
      ), p(z, "x", O = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10]), p(z, "text-anchor", "end"), y(
        z,
        "font-size",
        /*font_size_yticks*/
        e[11] + "px"
      ), y(z, "font-family", "Arial, sans-serif"), y(z, "fill", "white"), p(z, "dy", "0.35em"), p(G, "x1", Y = /*vline*/
      e[8].x1), p(G, "y1", D = /*vline*/
      e[8].y1), p(G, "x2", j = /*vline*/
      e[8].x2), p(G, "y2", se = /*vline*/
      e[8].y2), p(G, "stroke", "black"), p(G, "stroke-width", "1"), p(G, "stroke-dasharray", "5,5"), p(re, "x1", te = /*hline*/
      e[7].x1), p(re, "y1", J = /*hline*/
      e[7].y1), p(re, "x2", W = /*hline*/
      e[7].x2), p(re, "y2", C = /*hline*/
      e[7].y2), p(re, "stroke", "black"), p(re, "stroke-width", "1"), p(re, "stroke-dasharray", "5,5");
    },
    m(ce, he) {
      Q(ce, t, he), Q(ce, _, he), Q(ce, c, he), q(c, d), Q(ce, w, he), Q(ce, v, he), Q(ce, A, he), Q(ce, z, he), q(z, U), Q(ce, B, he), Q(ce, G, he), Q(ce, de, he), Q(ce, re, he), R = !0;
    },
    p(ce, [he]) {
      e = ce, (!R || he & /*adjusted_x1, tooltip_name_x, font_size_xticks*/
      36865 && n !== (n = /*adjusted_x1*/
      e[15] - /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.3 - 5)) && p(t, "x", n), (!R || he & /*x_ticks_spacing, font_size_xticks*/
      65 && i !== (i = /*x_ticks_spacing*/
      e[6] - /*font_size_xticks*/
      e[0] - 5)) && p(t, "y", i), (!R || he & /*tooltip_name_x, font_size_xticks*/
      4097 && l !== (l = /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.6 + 10)) && p(t, "width", l), (!R || he & /*font_size_xticks*/
      1 && f !== (f = /*font_size_xticks*/
      e[0] + 20)) && p(t, "height", f), (!R || he & /*rotation_xaxis, x1, x_ticks_spacing*/
      8258 && u !== (u = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`)) && p(t, "transform", u), (!R || he & /*tooltip_name_x*/
      4096) && Oe(
        d,
        /*tooltip_name_x*/
        e[12]
      ), (!R || he & /*rotation_xaxis, x1, x_ticks_spacing*/
      8258 && h !== (h = `rotate(${-/*rotation_xaxis*/
      e[1]} ${/*x1*/
      e[13]} ${/*x_ticks_spacing*/
      e[6]})`)) && p(c, "transform", h), (!R || he & /*text_anchor_x_axis*/
      16) && p(
        c,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[4]
      ), (!R || he & /*dominant_baseline_x_axis*/
      32) && p(
        c,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[5]
      ), (!R || he & /*x1*/
      8192) && p(
        c,
        "x",
        /*x1*/
        e[13]
      ), (!R || he & /*x_ticks_spacing*/
      64) && p(
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
      8) && p(
        c,
        "dy",
        /*dy*/
        e[3]
      ), (!R || he & /*dx*/
      4) && p(
        c,
        "dx",
        /*dx*/
        e[2]
      ), (!R || he & /*y_lines_spacing, space_between_ticks_and_gridline, rect_width*/
      132608 && S !== (S = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10] / 2 - /*rect_width*/
      e[17])) && p(v, "x", S), (!R || he & /*y1, rect_height*/
      589824 && k !== (k = /*y1*/
      e[19] - /*rect_height*/
      e[16] / 2)) && p(v, "y", k), (!R || he & /*rect_width*/
      131072) && p(
        v,
        "width",
        /*rect_width*/
        e[17]
      ), (!R || he & /*rect_height*/
      65536) && p(
        v,
        "height",
        /*rect_height*/
        e[16]
      ), (!R || he & /*tooltip_name_y*/
      16384) && Oe(
        U,
        /*tooltip_name_y*/
        e[14]
      ), (!R || he & /*y1*/
      524288) && p(
        z,
        "y",
        /*y1*/
        e[19]
      ), (!R || he & /*y_lines_spacing, space_between_ticks_and_gridline*/
      1536 && O !== (O = /*y_lines_spacing*/
      e[9] - /*space_between_ticks_and_gridline*/
      e[10])) && p(z, "x", O), (!R || he & /*font_size_yticks*/
      2048) && y(
        z,
        "font-size",
        /*font_size_yticks*/
        e[11] + "px"
      ), (!R || he & /*vline*/
      256 && Y !== (Y = /*vline*/
      e[8].x1)) && p(G, "x1", Y), (!R || he & /*vline*/
      256 && D !== (D = /*vline*/
      e[8].y1)) && p(G, "y1", D), (!R || he & /*vline*/
      256 && j !== (j = /*vline*/
      e[8].x2)) && p(G, "x2", j), (!R || he & /*vline*/
      256 && se !== (se = /*vline*/
      e[8].y2)) && p(G, "y2", se), (!R || he & /*hline*/
      128 && te !== (te = /*hline*/
      e[7].x1)) && p(re, "x1", te), (!R || he & /*hline*/
      128 && J !== (J = /*hline*/
      e[7].y1)) && p(re, "y1", J), (!R || he & /*hline*/
      128 && W !== (W = /*hline*/
      e[7].x2)) && p(re, "x2", W), (!R || he & /*hline*/
      128 && C !== (C = /*hline*/
      e[7].y2)) && p(re, "y2", C);
    },
    i(ce) {
      R || (it(() => {
        R && (a || (a = Pt(
          t,
          wn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), a.run(1));
      }), it(() => {
        R && (g || (g = Pt(
          c,
          wn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), g.run(1));
      }), it(() => {
        R && (T || (T = Pt(
          v,
          wn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), T.run(1));
      }), it(() => {
        R && (E || (E = Pt(
          z,
          wn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), E.run(1));
      }), R = !0);
    },
    o(ce) {
      a || (a = Pt(
        t,
        wn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), a.run(0), g || (g = Pt(
        c,
        wn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), g.run(0), T || (T = Pt(
        v,
        wn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), T.run(0), E || (E = Pt(
        z,
        wn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), E.run(0), R = !1;
    },
    d(ce) {
      ce && (K(t), K(_), K(c), K(w), K(v), K(A), K(z), K(B), K(G), K(de), K(re)), ce && a && a.end(), ce && g && g.end(), ce && T && T.end(), ce && E && E.end();
    }
  };
}
function V4(e, t, n) {
  let i, l, f, u, a, _, c, d, h, { x_scale: g } = t, { y_scale: w } = t, { font_size_xticks: v } = t, { rotation_xaxis: S } = t, { dx: k } = t, { dy: T } = t, { text_anchor_x_axis: A } = t, { dominant_baseline_x_axis: z } = t, { x_ticks_spacing: U } = t, { tooltip2_array_values: O } = t, { interval: E } = t, { type: B } = t, { show_delay_tooltip: G } = t, { hline: Y } = t, { vline: D } = t, { y_lines_spacing: j } = t, { space_between_ticks_and_gridline: se } = t, { format_yaxis: de } = t, { font_size_yticks: re } = t;
  return e.$$set = (te) => {
    "x_scale" in te && n(20, g = te.x_scale), "y_scale" in te && n(21, w = te.y_scale), "font_size_xticks" in te && n(0, v = te.font_size_xticks), "rotation_xaxis" in te && n(1, S = te.rotation_xaxis), "dx" in te && n(2, k = te.dx), "dy" in te && n(3, T = te.dy), "text_anchor_x_axis" in te && n(4, A = te.text_anchor_x_axis), "dominant_baseline_x_axis" in te && n(5, z = te.dominant_baseline_x_axis), "x_ticks_spacing" in te && n(6, U = te.x_ticks_spacing), "tooltip2_array_values" in te && n(22, O = te.tooltip2_array_values), "interval" in te && n(23, E = te.interval), "type" in te && n(24, B = te.type), "show_delay_tooltip" in te && n(25, G = te.show_delay_tooltip), "hline" in te && n(7, Y = te.hline), "vline" in te && n(8, D = te.vline), "y_lines_spacing" in te && n(9, j = te.y_lines_spacing), "space_between_ticks_and_gridline" in te && n(10, se = te.space_between_ticks_and_gridline), "format_yaxis" in te && n(26, de = te.format_yaxis), "font_size_yticks" in te && n(11, re = te.font_size_yticks);
  }, e.$$.update = () => {
    e.$$.dirty & /*tooltip2_array_values, interval, type*/
    29360128 && n(12, i = O ? e0(E, B, O) : null), e.$$.dirty & /*x_scale, tooltip2_array_values*/
    5242880 && n(13, l = g(O[0].data.x)), e.$$.dirty & /*y_scale, tooltip2_array_values*/
    6291456 && n(19, f = w(O[0].data.y)), e.$$.dirty & /*show_delay_tooltip*/
    33554432 && n(18, u = { delay: G }), e.$$.dirty & /*format_yaxis*/
    67108864 && n(27, a = _n(de)), e.$$.dirty & /*format_number, tooltip2_array_values*/
    138412032 && n(14, _ = a(O[0].data.y)), e.$$.dirty & /*tooltip_name_y, font_size_yticks*/
    18432 && n(17, c = _.length * re * 0.6), e.$$.dirty & /*font_size_yticks*/
    2048 && n(16, d = re + 20), e.$$.dirty & /*x1*/
    8192 && n(15, h = l), e.$$.dirty & /*text_anchor_x_axis, x1, tooltip_name_x, font_size_xticks*/
    12305 && (A === "end" ? n(15, h = l - i.length * v * 0.6 / 2 - 5 / 2) : A === "start" && n(15, h = l + i.length * v * 0.6 / 2 + 5 / 2));
  }, [
    v,
    S,
    k,
    T,
    A,
    z,
    U,
    Y,
    D,
    j,
    se,
    re,
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
    G,
    de,
    a
  ];
}
class $4 extends ct {
  constructor(t) {
    super(), ht(this, t, V4, Q4, ut, {
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
  return i[115] = t[n], i;
}
function t1(e, t, n) {
  const i = e.slice();
  return i[66] = t[n], i;
}
function n1(e, t, n) {
  const i = e.slice();
  return i[120] = t[n], i;
}
function i1(e, t, n) {
  const i = e.slice();
  return i[115] = t[n], i;
}
function r1(e, t, n) {
  const i = e.slice();
  return i[125] = t[n].x_start, i[126] = t[n].x_end, i[127] = t[n].y_start, i[128] = t[n].y_end, i[129] = t[n].colors, i[130] = t[n].opacity, i[131] = t[n].outline_color, i[132] = t[n].outline_width, i[133] = t[n].linetype, i[134] = t[n].key, i[51] = t[n].type, i;
}
function l1(e, t, n) {
  const i = e.slice();
  return i[137] = t[n], i;
}
function o1(e, t, n) {
  const i = e.slice();
  return i[137] = t[n], i;
}
function f1(e, t, n) {
  const i = e.slice();
  return i[50] = t[n].id, i[142] = t[n].color, i[51] = t[n].type, i;
}
function u1(e) {
  let t, n, i;
  return {
    c() {
      t = _e("div"), n = Ae(
        /*header*/
        e[4]
      ), p(t, "class", "header"), p(t, "style", i = "text-align: " + /*title_align*/
      e[5] + "; color: " + /*title_color*/
      e[6] + "; font-size: " + /*title_font_size*/
      e[7] + "px; font-weight: " + /*title_font_weight*/
      e[8] + "; padding-bottom: 10px; margin-left: " + /*label_height*/
      (e[52] + Pi) + "px; " + /*custom_css_header*/
      e[9]);
    },
    m(l, f) {
      Q(l, t, f), q(t, n);
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
      l[9]) && p(t, "style", i);
    },
    d(l) {
      l && K(t);
    }
  };
}
function a1(e) {
  let t, n = ke(
    /*legend_cats*/
    e[75]
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
      Q(l, t, f);
    },
    p(l, f) {
      if (f[1] & /*current_categories*/
      268435456 | f[2] & /*hover_legend, legend_cats, categories*/
      8272) {
        n = ke(
          /*legend_cats*/
          l[75]
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
      l && K(t), kn(i, l);
    }
  };
}
function ev(e) {
  let t, n, i, l;
  return {
    c() {
      t = ze("svg"), n = ze("path"), p(n, "d", "M2 10 Q12 0 22 10"), p(n, "fill", i = /*color*/
      e[142]), p(n, "stroke", l = /*color*/
      e[142]), p(n, "stroke-width", "1"), p(t, "width", "24"), p(t, "height", "12"), p(t, "viewBox", "0 0 24 12"), y(t, "display", "inline-block"), y(t, "vertical-align", "middle");
    },
    m(f, u) {
      Q(f, t, u), q(t, n);
    },
    p(f, u) {
      u[2] & /*legend_cats*/
      8192 && i !== (i = /*color*/
      f[142]) && p(n, "fill", i), u[2] & /*legend_cats*/
      8192 && l !== (l = /*color*/
      f[142]) && p(n, "stroke", l);
    },
    d(f) {
      f && K(t);
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
        e[142]
      ), y(t, "width", "18px"), y(t, "height", "3px"), y(t, "display", "inline-block"), y(t, "border-radius", "1px"), y(t, "border", "1px solid rgba(0, 0, 0, 0.5)");
    },
    m(n, i) {
      Q(n, t, i);
    },
    p(n, i) {
      i[2] & /*legend_cats*/
      8192 && y(
        t,
        "background",
        /*color*/
        n[142]
      );
    },
    d(n) {
      n && K(t);
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
        e[142]
      ), y(t, "width", "8px"), y(t, "height", "8px"), y(t, "display", "inline-block"), y(t, "border-radius", "50%"), y(t, "border", "1px solid rgba(0, 0, 0, 0.5)");
    },
    m(n, i) {
      Q(n, t, i);
    },
    p(n, i) {
      i[2] & /*legend_cats*/
      8192 && y(
        t,
        "background",
        /*color*/
        n[142]
      );
    },
    d(n) {
      n && K(t);
    }
  };
}
function s1(e) {
  let t, n, i = (
    /*id*/
    e[50].replace(/\.\d+$/, "") + ""
  ), l, f, u, a, _;
  function c(v, S) {
    if (
      /*type*/
      v[51] === "points"
    )
      return nv;
    if (
      /*type*/
      v[51] === "line"
    )
      return tv;
    if (
      /*type*/
      v[51] === "density"
    )
      return ev;
  }
  let d = c(e), h = d && d(e);
  function g() {
    return (
      /*mouseover_handler*/
      e[93](
        /*id*/
        e[50]
      )
    );
  }
  function w() {
    return (
      /*click_handler*/
      e[94](
        /*id*/
        e[50]
      )
    );
  }
  return {
    c() {
      t = _e("p"), h && h.c(), n = ve(), l = Ae(i), f = ve(), p(t, "style", u = /*hover_legend*/
      e[68] && /*hover_legend*/
      e[68] !== /*id*/
      e[50] && /*current_categories*/
      e[59].includes(
        /*hover_legend*/
        e[68]
      ) || !/*categories*/
      e[66][
        /*id*/
        e[50]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;");
    },
    m(v, S) {
      Q(v, t, S), h && h.m(t, null), q(t, n), q(t, l), q(t, f), a || (_ = [
        ot(t, "mouseover", g),
        ot(t, "click", w)
      ], a = !0);
    },
    p(v, S) {
      e = v, d === (d = c(e)) && h ? h.p(e, S) : (h && h.d(1), h = d && d(e), h && (h.c(), h.m(t, n))), S[2] & /*legend_cats*/
      8192 && i !== (i = /*id*/
      e[50].replace(/\.\d+$/, "") + "") && Oe(l, i), S[1] & /*current_categories*/
      268435456 | S[2] & /*hover_legend, legend_cats, categories*/
      8272 && u !== (u = /*hover_legend*/
      e[68] && /*hover_legend*/
      e[68] !== /*id*/
      e[50] && /*current_categories*/
      e[59].includes(
        /*hover_legend*/
        e[68]
      ) || !/*categories*/
      e[66][
        /*id*/
        e[50]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;") && p(t, "style", u);
    },
    d(v) {
      v && K(t), h && h.d(), a = !1, Ht(_);
    }
  };
}
function _1(e) {
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
      Q(l, t, f), Ze(n, t, null), i = !0;
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
      i || (ne(n.$$.fragment, l), i = !0);
    },
    o(l) {
      ue(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && K(t), je(n);
    }
  };
}
function h1(e, t) {
  let n, i, l;
  return i = new o0({
    props: {
      x1: (
        /*x_scale*/
        t[57](
          /*tickValue*/
          t[137]
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
        t[63]
      ),
      rotation_xaxis: (
        /*rotation_xaxis*/
        t[13]
      ),
      line_generator_space: Br,
      ticklabel: (
        /*format_x_axis*/
        t[65] === "null" ? (
          /*tickValue*/
          t[137]
        ) : (
          /*format_x_axis*/
          t[65](
            /*tickValue*/
            t[137]
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
      Q(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[1] & /*x_scale*/
      67108864 | u[2] & /*x_ticks*/
      4096 && (a.x1 = /*x_scale*/
      t[57](
        /*tickValue*/
        t[137]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[2] & /*x_ticks_spacing*/
      2048 && (a.x_ticks_spacing = /*x_ticks_spacing*/
      t[73]), u[2] & /*x_lines_spacing*/
      2 && (a.x_lines_spacing = /*x_lines_spacing*/
      t[63]), u[0] & /*rotation_xaxis*/
      8192 && (a.rotation_xaxis = /*rotation_xaxis*/
      t[13]), u[2] & /*format_x_axis, x_ticks*/
      4104 && (a.ticklabel = /*format_x_axis*/
      t[65] === "null" ? (
        /*tickValue*/
        t[137]
      ) : (
        /*format_x_axis*/
        t[65](
          /*tickValue*/
          t[137]
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
      l || (ne(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && K(n), je(i, f);
    }
  };
}
function c1(e, t) {
  let n, i, l;
  return i = new ha({
    props: {
      y1: (
        /*y_scale*/
        t[58](
          /*tickValue*/
          t[137]
        )
      ),
      width: (
        /*width*/
        t[0]
      ),
      space_between_ticks_and_gridline: Qo,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[64]
      ),
      height: (
        /*height*/
        t[10]
      ),
      line_generator_space: Br,
      ticklabel: (
        /*format_number*/
        t[62](
          /*tickValue*/
          t[137]
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
      Q(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[0] & /*yaxis_ticks*/
      1048576 | u[1] & /*y_scale*/
      134217728 && (a.y1 = /*y_scale*/
      t[58](
        /*tickValue*/
        t[137]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[2] & /*y_lines_spacing*/
      4 && (a.y_lines_spacing = /*y_lines_spacing*/
      t[64]), u[0] & /*height*/
      1024 && (a.height = /*height*/
      t[10]), u[0] & /*yaxis_ticks*/
      1048576 | u[1] & /*y_scale*/
      134217728 | u[2] & /*format_number*/
      1 && (a.ticklabel = /*format_number*/
      t[62](
        /*tickValue*/
        t[137]
      )), u[0] & /*font_size_yticks*/
      8388608 && (a.font_size_yticks = /*font_size_yticks*/
      t[23]), i.$set(a);
    },
    i(f) {
      l || (ne(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && K(n), je(i, f);
    }
  };
}
function g1(e) {
  let t, n;
  return t = new $4({
    props: {
      x_scale: (
        /*x_scale*/
        e[57]
      ),
      y_scale: (
        /*y_scale*/
        e[58]
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
        e[64]
      ),
      space_between_ticks_and_gridline: Qo,
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
      67108864 && (f.x_scale = /*x_scale*/
      i[57]), l[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      i[58]), l[0] & /*font_size_xticks*/
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
      4 && (f.y_lines_spacing = /*y_lines_spacing*/
      i[64]), l[0] & /*font_size_yticks*/
      8388608 && (f.font_size_yticks = /*font_size_yticks*/
      i[23]), t.$set(f);
    },
    i(i) {
      n || (ne(t.$$.fragment, i), n = !0);
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
    e[76]
  );
  const u = (a) => (
    /*key*/
    a[134]
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = r1(e, f, a), c = u(_);
    n.set(c, t[a] = m1(c, _));
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
      Q(a, i, _), l = !0;
    },
    p(a, _) {
      _[0] & /*width*/
      1 | _[2] & /*filtered_segments_df, x_lines_spacing, y_lines_spacing*/
      16390 && (f = ke(
        /*filtered_segments_df*/
        a[76]
      ), We(), t = vn(t, _, u, 1, a, f, n, i.parentNode, jn, m1, i, r1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          ne(t[_]);
        l = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ue(t[_]);
      l = !1;
    },
    d(a) {
      a && K(i);
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
        t[125]
      ),
      x2: (
        /*x_end*/
        t[126]
      ),
      y1: (
        /*y_start*/
        t[127]
      ),
      y2: (
        /*y_end*/
        t[128]
      ),
      colors: (
        /*colors*/
        t[129]
      ),
      opacity: (
        /*opacity*/
        t[130]
      ),
      outline_color: (
        /*outline_color*/
        t[131]
      ),
      outline_width: (
        /*outline_width*/
        t[132]
      ),
      linetype: (
        /*linetype*/
        t[133]
      ),
      type: (
        /*type*/
        t[51]
      ),
      line_generator_space: Br,
      width: (
        /*width*/
        t[0]
      ),
      x_lines_spacing: (
        /*x_lines_spacing*/
        t[63]
      ),
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[64]
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
      Q(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[2] & /*filtered_segments_df*/
      16384 && (a.x1 = /*x_start*/
      t[125]), u[2] & /*filtered_segments_df*/
      16384 && (a.x2 = /*x_end*/
      t[126]), u[2] & /*filtered_segments_df*/
      16384 && (a.y1 = /*y_start*/
      t[127]), u[2] & /*filtered_segments_df*/
      16384 && (a.y2 = /*y_end*/
      t[128]), u[2] & /*filtered_segments_df*/
      16384 && (a.colors = /*colors*/
      t[129]), u[2] & /*filtered_segments_df*/
      16384 && (a.opacity = /*opacity*/
      t[130]), u[2] & /*filtered_segments_df*/
      16384 && (a.outline_color = /*outline_color*/
      t[131]), u[2] & /*filtered_segments_df*/
      16384 && (a.outline_width = /*outline_width*/
      t[132]), u[2] & /*filtered_segments_df*/
      16384 && (a.linetype = /*linetype*/
      t[133]), u[2] & /*filtered_segments_df*/
      16384 && (a.type = /*type*/
      t[51]), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[2] & /*x_lines_spacing*/
      2 && (a.x_lines_spacing = /*x_lines_spacing*/
      t[63]), u[2] & /*y_lines_spacing*/
      4 && (a.y_lines_spacing = /*y_lines_spacing*/
      t[64]), i.$set(a);
    },
    i(f) {
      l || (ne(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && K(n), je(i, f);
    }
  };
}
function y1(e) {
  let t, n, i, l, f, u, a, _, c, d;
  return {
    c() {
      t = ze("circle"), u = ze("circle"), p(t, "cx", n = /*x_scale*/
      e[57](
        /*tooltip2_array_values*/
        e[54].data.x
      )), p(t, "cy", i = /*y_scale*/
      e[58](
        /*tooltip2_array_values*/
        e[54].data.y
      )), p(t, "r", l = /*tooltip2_array_values*/
      e[54].size * 2), p(t, "opacity", 1), p(t, "fill", f = /*tooltip2_array_values*/
      e[54].colors), p(u, "cx", a = /*x_scale*/
      e[57](
        /*tooltip2_array_values*/
        e[54].data.x
      )), p(u, "cy", _ = /*y_scale*/
      e[58](
        /*tooltip2_array_values*/
        e[54].data.y
      )), p(u, "r", c = /*tooltip2_array_values*/
      e[54].size * 4), p(u, "opacity", 0.1), p(u, "fill", d = /*tooltip2_array_values*/
      e[54].colors);
    },
    m(h, g) {
      Q(h, t, g), Q(h, u, g);
    },
    p(h, g) {
      g[1] & /*x_scale, tooltip2_array_values*/
      75497472 && n !== (n = /*x_scale*/
      h[57](
        /*tooltip2_array_values*/
        h[54].data.x
      )) && p(t, "cx", n), g[1] & /*y_scale, tooltip2_array_values*/
      142606336 && i !== (i = /*y_scale*/
      h[58](
        /*tooltip2_array_values*/
        h[54].data.y
      )) && p(t, "cy", i), g[1] & /*tooltip2_array_values*/
      8388608 && l !== (l = /*tooltip2_array_values*/
      h[54].size * 2) && p(t, "r", l), g[1] & /*tooltip2_array_values*/
      8388608 && f !== (f = /*tooltip2_array_values*/
      h[54].colors) && p(t, "fill", f), g[1] & /*x_scale, tooltip2_array_values*/
      75497472 && a !== (a = /*x_scale*/
      h[57](
        /*tooltip2_array_values*/
        h[54].data.x
      )) && p(u, "cx", a), g[1] & /*y_scale, tooltip2_array_values*/
      142606336 && _ !== (_ = /*y_scale*/
      h[58](
        /*tooltip2_array_values*/
        h[54].data.y
      )) && p(u, "cy", _), g[1] & /*tooltip2_array_values*/
      8388608 && c !== (c = /*tooltip2_array_values*/
      h[54].size * 4) && p(u, "r", c), g[1] & /*tooltip2_array_values*/
      8388608 && d !== (d = /*tooltip2_array_values*/
      h[54].colors) && p(u, "fill", d);
    },
    d(h) {
      h && (K(t), K(u));
    }
  };
}
function b1(e) {
  let t, n, i, l, f, u, a = ke(
    /*tooltip2_array_values*/
    e[54]
  ), _ = [];
  for (let c = 0; c < a.length; c += 1)
    _[c] = w1(i1(e, a, c));
  return {
    c() {
      for (let c = 0; c < _.length; c += 1)
        _[c].c();
      t = ze("g"), n = ze("line"), p(n, "y1", i = /*vline*/
      e[71].y1), p(n, "y2", l = /*vline*/
      e[71].y2), p(n, "x1", f = /*vline*/
      e[71].x1), p(n, "x2", u = /*vline*/
      e[71].x2), p(n, "stroke", "black"), p(
        n,
        "stroke-dasharray",
        /*line_type_axis_trigger*/
        e[1]
      ), p(t, "class", "tooltip-lines"), p(t, "transform", "translate(0, 0)");
    },
    m(c, d) {
      for (let h = 0; h < _.length; h += 1)
        _[h] && _[h].m(c, d);
      Q(c, t, d), q(t, n);
    },
    p(c, d) {
      if (d[1] & /*x_scale, tooltip2_array_values, y_scale*/
      209715200) {
        a = ke(
          /*tooltip2_array_values*/
          c[54]
        );
        let h;
        for (h = 0; h < a.length; h += 1) {
          const g = i1(c, a, h);
          _[h] ? _[h].p(g, d) : (_[h] = w1(g), _[h].c(), _[h].m(t.parentNode, t));
        }
        for (; h < _.length; h += 1)
          _[h].d(1);
        _.length = a.length;
      }
      d[2] & /*vline*/
      512 && i !== (i = /*vline*/
      c[71].y1) && p(n, "y1", i), d[2] & /*vline*/
      512 && l !== (l = /*vline*/
      c[71].y2) && p(n, "y2", l), d[2] & /*vline*/
      512 && f !== (f = /*vline*/
      c[71].x1) && p(n, "x1", f), d[2] & /*vline*/
      512 && u !== (u = /*vline*/
      c[71].x2) && p(n, "x2", u), d[0] & /*line_type_axis_trigger*/
      2 && p(
        n,
        "stroke-dasharray",
        /*line_type_axis_trigger*/
        c[1]
      );
    },
    d(c) {
      c && K(t), kn(_, c);
    }
  };
}
function w1(e) {
  let t, n, i, l, f, u, a, _, c, d;
  return {
    c() {
      t = ze("circle"), u = ze("circle"), p(t, "cx", n = /*x_scale*/
      e[57](
        /*line*/
        e[115].data.x
      )), p(t, "cy", i = /*y_scale*/
      e[58](
        /*line*/
        e[115].data.y
      )), p(t, "r", l = /*line*/
      e[115].size * 1.5), p(t, "opacity", 1), p(t, "fill", f = /*line*/
      e[115].colors), p(u, "cx", a = /*x_scale*/
      e[57](
        /*line*/
        e[115].data.x
      )), p(u, "cy", _ = /*y_scale*/
      e[58](
        /*line*/
        e[115].data.y
      )), p(u, "r", c = /*line*/
      e[115].size * 3), p(u, "opacity", 0.1), p(u, "fill", d = /*line*/
      e[115].colors);
    },
    m(h, g) {
      Q(h, t, g), Q(h, u, g);
    },
    p(h, g) {
      g[1] & /*x_scale, tooltip2_array_values*/
      75497472 && n !== (n = /*x_scale*/
      h[57](
        /*line*/
        h[115].data.x
      )) && p(t, "cx", n), g[1] & /*y_scale, tooltip2_array_values*/
      142606336 && i !== (i = /*y_scale*/
      h[58](
        /*line*/
        h[115].data.y
      )) && p(t, "cy", i), g[1] & /*tooltip2_array_values*/
      8388608 && l !== (l = /*line*/
      h[115].size * 1.5) && p(t, "r", l), g[1] & /*tooltip2_array_values*/
      8388608 && f !== (f = /*line*/
      h[115].colors) && p(t, "fill", f), g[1] & /*x_scale, tooltip2_array_values*/
      75497472 && a !== (a = /*x_scale*/
      h[57](
        /*line*/
        h[115].data.x
      )) && p(u, "cx", a), g[1] & /*y_scale, tooltip2_array_values*/
      142606336 && _ !== (_ = /*y_scale*/
      h[58](
        /*line*/
        h[115].data.y
      )) && p(u, "cy", _), g[1] & /*tooltip2_array_values*/
      8388608 && c !== (c = /*line*/
      h[115].size * 3) && p(u, "r", c), g[1] & /*tooltip2_array_values*/
      8388608 && d !== (d = /*line*/
      h[115].colors) && p(u, "fill", d);
    },
    d(h) {
      h && (K(t), K(u));
    }
  };
}
function p1(e) {
  let t = [], n = /* @__PURE__ */ new Map(), i, l, f = ke(
    /*all_points*/
    e[60]
  );
  const u = (a) => (
    /*categories*/
    a[66].id_id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = t1(e, f, a), c = u(_);
    n.set(c, t[a] = k1(c, _));
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
      Q(a, i, _), l = !0;
    },
    p(a, _) {
      _[1] & /*all_points, x_scale, y_scale, current_categories, tooltip2_array_values*/
      1015021568 | _[2] & /*hover_legend, listener*/
      320 && (f = ke(
        /*all_points*/
        a[60]
      ), We(), t = vn(t, _, u, 1, a, f, n, i.parentNode, jn, k1, i, t1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          ne(t[_]);
        l = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ue(t[_]);
      l = !1;
    },
    d(a) {
      a && K(i);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function v1(e) {
  let t, n;
  return t = new fp({
    props: {
      x: (
        /*x_scale*/
        e[57](
          /*points*/
          e[120].x
        )
      ),
      y: (
        /*y_scale*/
        e[58](
          /*points*/
          e[120].y
        )
      ),
      categories: (
        /*categories*/
        e[66]
      ),
      points: (
        /*points*/
        e[120]
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
      hovered_data: vc,
      hover_legend: (
        /*hover_legend*/
        e[68]
      ),
      current_categories: (
        /*current_categories*/
        e[59]
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[54]
      ),
      listener: (
        /*listener*/
        e[70]
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
      l[1] & /*x_scale, all_points*/
      603979776 && (f.x = /*x_scale*/
      i[57](
        /*points*/
        i[120].x
      )), l[1] & /*y_scale, all_points*/
      671088640 && (f.y = /*y_scale*/
      i[58](
        /*points*/
        i[120].y
      )), l[1] & /*all_points*/
      536870912 && (f.categories = /*categories*/
      i[66]), l[1] & /*all_points*/
      536870912 && (f.points = /*points*/
      i[120]), l[2] & /*hover_legend*/
      64 && (f.hover_legend = /*hover_legend*/
      i[68]), l[1] & /*current_categories*/
      268435456 && (f.current_categories = /*current_categories*/
      i[59]), l[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      i[54]), l[2] & /*listener*/
      256 && (f.listener = /*listener*/
      i[70]), t.$set(f);
    },
    i(i) {
      n || (ne(t.$$.fragment, i), n = !0);
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
    t[66].data
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
    m(_, c) {
      Q(_, n, c);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(_, c);
      Q(_, i, c), l = !0;
    },
    p(_, c) {
      if (t = _, c[1] & /*x_scale, all_points, y_scale, current_categories, tooltip2_array_values*/
      1015021568 | c[2] & /*hover_legend, listener*/
      320) {
        f = ke(
          /*categories*/
          t[66].data
        );
        let d;
        for (d = 0; d < f.length; d += 1) {
          const h = n1(t, f, d);
          u[d] ? (u[d].p(h, c), ne(u[d], 1)) : (u[d] = v1(h), u[d].c(), ne(u[d], 1), u[d].m(i.parentNode, i));
        }
        for (We(), d = f.length; d < u.length; d += 1)
          a(d);
        Be();
      }
    },
    i(_) {
      if (!l) {
        for (let c = 0; c < f.length; c += 1)
          ne(u[c]);
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
      _ && (K(n), K(i)), kn(u, _);
    }
  };
}
function x1(e) {
  let t = [], n = /* @__PURE__ */ new Map(), i, l, f = ke(
    /*all_lines*/
    e[56]
  );
  const u = (a) => (
    /*line*/
    a[115].id_id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = e1(e, f, a), c = u(_);
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
      Q(a, i, _), l = !0;
    },
    p(a, _) {
      _[1] & /*all_lines, current_categories, tooltip2_array_values*/
      310378496 | _[2] & /*hover_legend, listener*/
      320 && (f = ke(
        /*all_lines*/
        a[56]
      ), We(), t = vn(t, _, u, 1, a, f, n, i.parentNode, jn, M1, i, e1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          ne(t[_]);
        l = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ue(t[_]);
      l = !1;
    },
    d(a) {
      a && K(i);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function M1(e, t) {
  let n, i, l;
  return i = new Hw({
    props: {
      line: (
        /*line*/
        t[115]
      ),
      hover_legend: (
        /*hover_legend*/
        t[68]
      ),
      current_categories: (
        /*current_categories*/
        t[59]
      ),
      line_size: (
        /*line*/
        t[115].size
      ),
      path: (
        /*line*/
        t[115].path
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
        t[70]
      )
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Le(), Ke(i.$$.fragment), this.first = n;
    },
    m(f, u) {
      Q(f, n, u), Ze(i, f, u), l = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[1] & /*all_lines*/
      33554432 && (a.line = /*line*/
      t[115]), u[2] & /*hover_legend*/
      64 && (a.hover_legend = /*hover_legend*/
      t[68]), u[1] & /*current_categories*/
      268435456 && (a.current_categories = /*current_categories*/
      t[59]), u[1] & /*all_lines*/
      33554432 && (a.line_size = /*line*/
      t[115].size), u[1] & /*all_lines*/
      33554432 && (a.path = /*line*/
      t[115].path), u[1] & /*tooltip2_array_values*/
      8388608 && (a.tooltip2_array_values = /*tooltip2_array_values*/
      t[54]), u[2] & /*listener*/
      256 && (a.listener = /*listener*/
      t[70]), i.$set(a);
    },
    i(f) {
      l || (ne(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && K(n), je(i, f);
    }
  };
}
function T1(e) {
  let t, n;
  return t = new zp({
    props: {
      arrows_df: (
        /*arrows_df*/
        e[30]
      ),
      x_scale: (
        /*x_scale*/
        e[57]
      ),
      y_scale: (
        /*y_scale*/
        e[58]
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
      67108864 && (f.x_scale = /*x_scale*/
      i[57]), l[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      i[58]), l[1] & /*type*/
      1048576 && (f.type = /*type*/
      i[51]), l[1] & /*time_interval*/
      16 && (f.time_interval = /*time_interval*/
      i[35]), t.$set(f);
    },
    i(i) {
      n || (ne(t.$$.fragment, i), n = !0);
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
        e[31]
      ),
      x_scale: (
        /*x_scale*/
        e[57]
      ),
      y_scale: (
        /*y_scale*/
        e[58]
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
      67108864 && (f.x_scale = /*x_scale*/
      i[57]), l[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      i[58]), l[1] & /*type*/
      1048576 && (f.type = /*type*/
      i[51]), l[1] & /*time_interval*/
      16 && (f.time_interval = /*time_interval*/
      i[35]), t.$set(f);
    },
    i(i) {
      n || (ne(t.$$.fragment, i), n = !0);
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
    e[96](g);
  }
  function c(g) {
    e[97](g);
  }
  function d(g) {
    e[98](g);
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
      e[57]
    ),
    y_scale: (
      /*y_scale*/
      e[58]
    ),
    margin: tf,
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
    buffer: Wr,
    time_series_interval: (
      /*time_series_interval*/
      e[36]
    ),
    chart: ov
  };
  return (
    /*tooltip2_array_values*/
    e[54] !== void 0 && (h.tooltip2_array_values = /*tooltip2_array_values*/
    e[54]), /*m*/
    e[69] !== void 0 && (h.m = /*m*/
    e[69]), /*listener*/
    e[70] !== void 0 && (h.listener = /*listener*/
    e[70]), n = new l0({ props: h }), _t.push(() => It(n, "tooltip2_array_values", _)), _t.push(() => It(n, "m", c)), _t.push(() => It(n, "listener", d)), {
      c() {
        t = ze("g"), Ke(n.$$.fragment), p(t, "transform", u = "translate(" + /*ticks_label_width*/
        (e[67] + /*label_height*/
        e[52] + 10) + " 10)");
      },
      m(g, w) {
        Q(g, t, w), Ze(n, t, null), a = !0;
      },
      p(g, w) {
        const v = {};
        w[0] & /*height*/
        1024 && (v.height = /*height*/
        g[10]), w[0] & /*width*/
        1 && (v.width = /*width*/
        g[0]), w[1] & /*x_scale*/
        67108864 && (v.x_scale = /*x_scale*/
        g[57]), w[1] & /*y_scale*/
        134217728 && (v.y_scale = /*y_scale*/
        g[58]), w[1] & /*filtered_data*/
        16777216 && (v.filtered_data = /*filtered_data*/
        g[55]), w[1] & /*type*/
        1048576 && (v.type = /*type*/
        g[51]), w[1] & /*tooltip*/
        4 && (v.tooltip = /*tooltip*/
        g[33]), w[1] & /*time_series_interval*/
        32 && (v.time_series_interval = /*time_series_interval*/
        g[36]), !i && w[1] & /*tooltip2_array_values*/
        8388608 && (i = !0, v.tooltip2_array_values = /*tooltip2_array_values*/
        g[54], Rt(() => i = !1)), !l && w[2] & /*m*/
        128 && (l = !0, v.m = /*m*/
        g[69], Rt(() => l = !1)), !f && w[2] & /*listener*/
        256 && (f = !0, v.listener = /*listener*/
        g[70], Rt(() => f = !1)), n.$set(v), (!a || w[1] & /*label_height*/
        2097152 | w[2] & /*ticks_label_width*/
        32 && u !== (u = "translate(" + /*ticks_label_width*/
        (g[67] + /*label_height*/
        g[52] + 10) + " 10)")) && p(t, "transform", u);
      },
      i(g) {
        a || (ne(n.$$.fragment, g), a = !0);
      },
      o(g) {
        ue(n.$$.fragment, g), a = !1;
      },
      d(g) {
        g && K(t), je(n);
      }
    }
  );
}
function A1(e) {
  let t, n, i, l, f, u, a;
  function _(g) {
    e[99](g);
  }
  function c(g) {
    e[100](g);
  }
  function d(g) {
    e[101](g);
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
    margin: tf,
    x_scale: (
      /*x_scale*/
      e[57]
    ),
    y_scale: (
      /*y_scale*/
      e[58]
    ),
    filtered_data: (
      /*filtered_data*/
      e[55]
    ),
    buffer: Wr
  };
  return (
    /*listener*/
    e[70] !== void 0 && (h.listener = /*listener*/
    e[70]), /*m*/
    e[69] !== void 0 && (h.m = /*m*/
    e[69]), /*tooltip2_array_values*/
    e[54] !== void 0 && (h.tooltip2_array_values = /*tooltip2_array_values*/
    e[54]), n = new N4({ props: h }), _t.push(() => It(n, "listener", _)), _t.push(() => It(n, "m", c)), _t.push(() => It(n, "tooltip2_array_values", d)), {
      c() {
        t = ze("g"), Ke(n.$$.fragment), p(t, "transform", u = "translate(" + /*ticks_label_width*/
        (e[67] + /*label_height*/
        e[52] + 10) + " 10)");
      },
      m(g, w) {
        Q(g, t, w), Ze(n, t, null), a = !0;
      },
      p(g, w) {
        const v = {};
        w[0] & /*height*/
        1024 && (v.height = /*height*/
        g[10]), w[0] & /*width*/
        1 && (v.width = /*width*/
        g[0]), w[1] & /*x_scale*/
        67108864 && (v.x_scale = /*x_scale*/
        g[57]), w[1] & /*y_scale*/
        134217728 && (v.y_scale = /*y_scale*/
        g[58]), w[1] & /*filtered_data*/
        16777216 && (v.filtered_data = /*filtered_data*/
        g[55]), !i && w[2] & /*listener*/
        256 && (i = !0, v.listener = /*listener*/
        g[70], Rt(() => i = !1)), !l && w[2] & /*m*/
        128 && (l = !0, v.m = /*m*/
        g[69], Rt(() => l = !1)), !f && w[1] & /*tooltip2_array_values*/
        8388608 && (f = !0, v.tooltip2_array_values = /*tooltip2_array_values*/
        g[54], Rt(() => f = !1)), n.$set(v), (!a || w[1] & /*label_height*/
        2097152 | w[2] & /*ticks_label_width*/
        32 && u !== (u = "translate(" + /*ticks_label_width*/
        (g[67] + /*label_height*/
        g[52] + 10) + " 10)")) && p(t, "transform", u);
      },
      i(g) {
        a || (ne(n.$$.fragment, g), a = !0);
      },
      o(g) {
        ue(n.$$.fragment, g), a = !1;
      },
      d(g) {
        g && K(t), je(n);
      }
    }
  );
}
function C1(e) {
  let t, n;
  return t = new Jw({
    props: {
      x_scale: (
        /*x_scale*/
        e[57]
      ),
      y_scale: (
        /*y_scale*/
        e[58]
      ),
      format_tooltip: (
        /*format_tooltip*/
        e[24]
      ),
      tooltip2_array_values: (
        /*tooltip2_array_values*/
        e[54]
      ),
      margin: tf,
      buffer: Wr,
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
      67108864 && (f.x_scale = /*x_scale*/
      i[57]), l[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      i[58]), l[0] & /*format_tooltip*/
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
      n || (ne(t.$$.fragment, i), n = !0);
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
        e[57]
      ),
      y_scale: (
        /*y_scale*/
        e[58]
      ),
      m_y: (
        /*m*/
        e[69].y
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
      67108864 && (f.x_scale = /*x_scale*/
      i[57]), l[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      i[58]), l[2] & /*m*/
      128 && (f.m_y = /*m*/
      i[69].y), l[1] & /*tooltip2_array_values*/
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
      n || (ne(t.$$.fragment, i), n = !0);
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
  return t = new rp({
    props: {
      x_scale: (
        /*x_scale*/
        e[57]
      ),
      m_y: (
        /*m*/
        e[69].y
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
      margin: tf,
      buffer: Wr,
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
      67108864 && (f.x_scale = /*x_scale*/
      i[57]), l[2] & /*m*/
      128 && (f.m_y = /*m*/
      i[69].y), l[1] & /*tooltip2_array_values*/
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
      n || (ne(t.$$.fragment, i), n = !0);
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
        e[58].domain()[1]
      ),
      x_scale: (
        /*x_scale*/
        e[57]
      ),
      y_scale: (
        /*y_scale*/
        e[58]
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
        e[64]
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
      134217728 && (f.y = /*y_scale*/
      i[58].domain()[1]), l[1] & /*x_scale*/
      67108864 && (f.x_scale = /*x_scale*/
      i[57]), l[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      i[58]), l[2] & /*filtered_segments_df*/
      16384 && (f.filtered_segments_df = /*filtered_segments_df*/
      i[76]), l[0] & /*height*/
      1024 && (f.height = /*height*/
      i[10]), l[0] & /*width*/
      1 && (f.width = /*width*/
      i[0]), l[2] & /*y_lines_spacing*/
      4 && (f.y_lines_spacing = /*y_lines_spacing*/
      i[64]), t.$set(f);
    },
    i(i) {
      n || (ne(t.$$.fragment, i), n = !0);
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
  let t, n, i, l, f, u, a = [], _ = /* @__PURE__ */ new Map(), c, d, h = [], g = /* @__PURE__ */ new Map(), w, v, S, k, T, A, z, U, O, E, B, G, Y, D, j, se, de, re, te, J, W = (
    /*header*/
    e[4] && u1(e)
  ), C = (
    /*show_legend*/
    e[2] && a1(e)
  ), R = (
    /*segments_df*/
    e[29] && /*show_legend_segments*/
    e[32] && _1(e)
  ), ce = ke(
    /*x_ticks*/
    e[74]
  );
  const he = (H) => (
    /*tickValue*/
    H[137].toString()
  );
  for (let H = 0; H < ce.length; H += 1) {
    let oe = o1(e, ce, H), Me = he(oe);
    _.set(Me, a[H] = h1(Me, oe));
  }
  d = new u0({
    props: {
      axis_title_position: (
        /*x_scale*/
        (e[57](
          /*x_ticks*/
          e[74][0]
        ) + /*x_scale*/
        e[57](
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
  let kt = ke(
    /*y_scale*/
    e[58].ticks(
      /*yaxis_ticks*/
      e[20]
    )
  );
  const Kt = (H) => (
    /*tickValue*/
    H[137]
  );
  for (let H = 0; H < kt.length; H += 1) {
    let oe = l1(e, kt, H), Me = Kt(oe);
    g.set(Me, h[H] = c1(Me, oe));
  }
  let Je = (
    /*crosshair*/
    e[49] && /*tooltip2_array_values*/
    e[54] && /*tooltip2_array_values*/
    e[54].length > 0 && g1(e)
  );
  S = new f0({
    props: {
      axis_title_position: (
        /*y_scale*/
        (e[58](
          /*ticks*/
          e[61][0]
        ) + /*y_scale*/
        e[58](
          /*ticks*/
          e[61][
            /*ticks*/
            e[61].length - 1
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
    e[26] && d1(e)
  ), $e = (
    /*tooltip2_array_values*/
    e[54] && /*tooltip*/
    e[33] === "single" && /*x_axis_type*/
    (e[18] === "date" || /*x_axis_type*/
    e[18] === "factor" || /*x_axis_type*/
    e[18] === "numeric" && /*tooltip2_array_values*/
    (e[54].type === "line" || /*tooltip2_array_values*/
    e[54].type === "density")) && y1(e)
  ), at = (
    /*tooltip*/
    e[33] === "vertical_line" && /*tooltip2_array_values*/
    e[54] && /*tooltip2_array_values*/
    e[54].length > 0 && b1(e)
  ), Xe = (
    /*all_points*/
    e[60].length > 0 && p1(e)
  ), ae = (
    /*all_lines*/
    e[56].length > 0 && x1(e)
  ), me = (
    /*arrows*/
    e[28] && T1(e)
  ), be = (
    /*annotations*/
    e[27] && S1(e)
  ), V = (
    /*x_axis_type*/
    (e[18] === "date" || /*x_axis_type*/
    e[18] === "factor") && z1(e)
  ), Ce = (
    /*x_axis_type*/
    e[18] === "numeric" && A1(e)
  ), ye = (
    /*tooltip2_array_values*/
    e[54] && [
      /*tooltip2_array_values*/
      e[54]
    ].length > 0 && /*tooltip*/
    e[33] === "single" && C1(e)
  );
  const He = [rv, iv], Qe = [];
  function et(H, oe) {
    return (
      /*tooltip2_array_values*/
      H[54] && /*tooltip2_array_values*/
      H[54].length > 0 && /*tooltip*/
      H[33] === "vertical_line" && !/*custom_tooltip_data*/
      H[3] ? 0 : (
        /*tooltip2_array_values*/
        H[54] && /*tooltip2_array_values*/
        H[54].length > 0 && /*tooltip*/
        H[33] === "vertical_line" && /*custom_tooltip_data*/
        H[3] ? 1 : -1
      )
    );
  }
  ~(D = et(e)) && (j = Qe[D] = He[D](e));
  let qe = (
    /*$hovered_legend*/
    e[77] && L1(e)
  );
  return {
    c() {
      W && W.c(), t = ve(), n = _e("div"), C && C.c(), i = ve(), R && R.c(), l = ve(), f = _e("div"), u = ze("svg");
      for (let H = 0; H < a.length; H += 1)
        a[H].c();
      c = Le(), Ke(d.$$.fragment);
      for (let H = 0; H < h.length; H += 1)
        h[H].c();
      w = Le(), Je && Je.c(), v = Le(), Ke(S.$$.fragment), Ue && Ue.c(), k = Le(), $e && $e.c(), T = Le(), at && at.c(), A = Le(), Xe && Xe.c(), z = Le(), ae && ae.c(), U = Le(), me && me.c(), O = Le(), be && be.c(), E = Le(), V && V.c(), B = Le(), Ce && Ce.c(), G = ve(), ye && ye.c(), Y = ve(), j && j.c(), se = ve(), qe && qe.c(), p(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "flex-start"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(
        n,
        "margin-left",
        /*label_height*/
        e[52] + Pi + "px"
      ), y(n, "margin-bottom", "0.25rem"), y(u, "color", "black"), p(
        u,
        "height",
        /*height*/
        e[10]
      ), p(
        u,
        "width",
        /*width*/
        e[0]
      ), p(f, "class", "chart"), y(f, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[102].call(f)
      ));
    },
    m(H, oe) {
      W && W.m(H, oe), Q(H, t, oe), Q(H, n, oe), C && C.m(n, null), Q(H, i, oe), R && R.m(H, oe), Q(H, l, oe), Q(H, f, oe), q(f, u);
      for (let Me = 0; Me < a.length; Me += 1)
        a[Me] && a[Me].m(u, null);
      q(u, c), Ze(d, u, null);
      for (let Me = 0; Me < h.length; Me += 1)
        h[Me] && h[Me].m(u, null);
      q(u, w), Je && Je.m(u, null), q(u, v), Ze(S, u, null), Ue && Ue.m(u, null), q(u, k), $e && $e.m(u, null), q(u, T), at && at.m(u, null), q(u, A), Xe && Xe.m(u, null), q(u, z), ae && ae.m(u, null), q(u, U), me && me.m(u, null), q(u, O), be && be.m(u, null), q(u, E), V && V.m(u, null), q(u, B), Ce && Ce.m(u, null), q(f, G), ye && ye.m(f, null), q(f, Y), ~D && Qe[D].m(f, null), q(f, se), qe && qe.m(f, null), de = rr(
        f,
        /*div1_elementresize_handler*/
        e[102].bind(f)
      ), re = !0, te || (J = [
        ot(
          n,
          "mouseleave",
          /*mouseleave_handler*/
          e[95]
        ),
        ot(
          f,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[103]
        )
      ], te = !0);
    },
    p(H, oe) {
      /*header*/
      H[4] ? W ? W.p(H, oe) : (W = u1(H), W.c(), W.m(t.parentNode, t)) : W && (W.d(1), W = null), /*show_legend*/
      H[2] ? C ? C.p(H, oe) : (C = a1(H), C.c(), C.m(n, null)) : C && (C.d(1), C = null), (!re || oe[1] & /*label_height*/
      2097152) && y(
        n,
        "margin-left",
        /*label_height*/
        H[52] + Pi + "px"
      ), /*segments_df*/
      H[29] && /*show_legend_segments*/
      H[32] ? R ? (R.p(H, oe), oe[0] & /*segments_df*/
      536870912 | oe[1] & /*show_legend_segments*/
      2 && ne(R, 1)) : (R = _1(H), R.c(), ne(R, 1), R.m(l.parentNode, l)) : R && (We(), ue(R, 1, 1, () => {
        R = null;
      }), Be()), oe[0] & /*width, rotation_xaxis, font_size_xticks, dx, dy, dominant_baseline_x_axis, text_anchor_x_axis*/
      243713 | oe[1] & /*x_scale*/
      67108864 | oe[2] & /*x_ticks, x_ticks_spacing, x_lines_spacing, format_x_axis*/
      6154 && (ce = ke(
        /*x_ticks*/
        H[74]
      ), We(), a = vn(a, oe, he, 1, H, ce, _, u, jn, h1, c, o1), Be());
      const Me = {};
      oe[1] & /*x_scale*/
      67108864 | oe[2] & /*x_ticks*/
      4096 && (Me.axis_title_position = /*x_scale*/
      (H[57](
        /*x_ticks*/
        H[74][0]
      ) + /*x_scale*/
      H[57](
        /*x_ticks*/
        H[74][
          /*x_ticks*/
          H[74].length - 1
        ]
      )) / 2), oe[0] & /*x_label*/
      524288 && (Me.x_label = /*x_label*/
      H[19]), oe[0] & /*font_size_xaxis*/
      16384 && (Me.font_size_xaxis = /*font_size_xaxis*/
      H[14]), oe[1] & /*label_height_x_axis*/
      4194304 && (Me.label_height_x_axis = /*label_height_x_axis*/
      H[53]), oe[0] & /*height*/
      1024 && (Me.height = /*height*/
      H[10]), d.$set(Me), oe[0] & /*yaxis_ticks, width, height, font_size_yticks*/
      9438209 | oe[1] & /*y_scale*/
      134217728 | oe[2] & /*y_lines_spacing, format_number*/
      5 && (kt = ke(
        /*y_scale*/
        H[58].ticks(
          /*yaxis_ticks*/
          H[20]
        )
      ), We(), h = vn(h, oe, Kt, 1, H, kt, g, u, jn, c1, w, l1), Be()), /*crosshair*/
      H[49] && /*tooltip2_array_values*/
      H[54] && /*tooltip2_array_values*/
      H[54].length > 0 ? Je ? (Je.p(H, oe), oe[1] & /*crosshair, tooltip2_array_values*/
      8650752 && ne(Je, 1)) : (Je = g1(H), Je.c(), ne(Je, 1), Je.m(u, v)) : Je && (We(), ue(Je, 1, 1, () => {
        Je = null;
      }), Be());
      const Mt = {};
      oe[1] & /*y_scale, ticks*/
      1207959552 && (Mt.axis_title_position = /*y_scale*/
      (H[58](
        /*ticks*/
        H[61][0]
      ) + /*y_scale*/
      H[58](
        /*ticks*/
        H[61][
          /*ticks*/
          H[61].length - 1
        ]
      )) / 2), oe[0] & /*y_label*/
      33554432 && (Mt.y_label = /*y_label*/
      H[25]), oe[0] & /*font_size_yaxis*/
      4194304 && (Mt.font_size_yaxis = /*font_size_yaxis*/
      H[22]), oe[1] & /*label_height*/
      2097152 && (Mt.label_height = /*label_height*/
      H[52]), S.$set(Mt), /*segments*/
      H[26] ? Ue ? (Ue.p(H, oe), oe[0] & /*segments*/
      67108864 && ne(Ue, 1)) : (Ue = d1(H), Ue.c(), ne(Ue, 1), Ue.m(u, k)) : Ue && (We(), ue(Ue, 1, 1, () => {
        Ue = null;
      }), Be()), /*tooltip2_array_values*/
      H[54] && /*tooltip*/
      H[33] === "single" && /*x_axis_type*/
      (H[18] === "date" || /*x_axis_type*/
      H[18] === "factor" || /*x_axis_type*/
      H[18] === "numeric" && /*tooltip2_array_values*/
      (H[54].type === "line" || /*tooltip2_array_values*/
      H[54].type === "density")) ? $e ? $e.p(H, oe) : ($e = y1(H), $e.c(), $e.m(u, T)) : $e && ($e.d(1), $e = null), /*tooltip*/
      H[33] === "vertical_line" && /*tooltip2_array_values*/
      H[54] && /*tooltip2_array_values*/
      H[54].length > 0 ? at ? at.p(H, oe) : (at = b1(H), at.c(), at.m(u, A)) : at && (at.d(1), at = null), /*all_points*/
      H[60].length > 0 ? Xe ? (Xe.p(H, oe), oe[1] & /*all_points*/
      536870912 && ne(Xe, 1)) : (Xe = p1(H), Xe.c(), ne(Xe, 1), Xe.m(u, z)) : Xe && (We(), ue(Xe, 1, 1, () => {
        Xe = null;
      }), Be()), /*all_lines*/
      H[56].length > 0 ? ae ? (ae.p(H, oe), oe[1] & /*all_lines*/
      33554432 && ne(ae, 1)) : (ae = x1(H), ae.c(), ne(ae, 1), ae.m(u, U)) : ae && (We(), ue(ae, 1, 1, () => {
        ae = null;
      }), Be()), /*arrows*/
      H[28] ? me ? (me.p(H, oe), oe[0] & /*arrows*/
      268435456 && ne(me, 1)) : (me = T1(H), me.c(), ne(me, 1), me.m(u, O)) : me && (We(), ue(me, 1, 1, () => {
        me = null;
      }), Be()), /*annotations*/
      H[27] ? be ? (be.p(H, oe), oe[0] & /*annotations*/
      134217728 && ne(be, 1)) : (be = S1(H), be.c(), ne(be, 1), be.m(u, E)) : be && (We(), ue(be, 1, 1, () => {
        be = null;
      }), Be()), /*x_axis_type*/
      H[18] === "date" || /*x_axis_type*/
      H[18] === "factor" ? V ? (V.p(H, oe), oe[0] & /*x_axis_type*/
      262144 && ne(V, 1)) : (V = z1(H), V.c(), ne(V, 1), V.m(u, B)) : V && (We(), ue(V, 1, 1, () => {
        V = null;
      }), Be()), /*x_axis_type*/
      H[18] === "numeric" ? Ce ? (Ce.p(H, oe), oe[0] & /*x_axis_type*/
      262144 && ne(Ce, 1)) : (Ce = A1(H), Ce.c(), ne(Ce, 1), Ce.m(u, null)) : Ce && (We(), ue(Ce, 1, 1, () => {
        Ce = null;
      }), Be()), (!re || oe[0] & /*height*/
      1024) && p(
        u,
        "height",
        /*height*/
        H[10]
      ), (!re || oe[0] & /*width*/
      1) && p(
        u,
        "width",
        /*width*/
        H[0]
      ), /*tooltip2_array_values*/
      H[54] && [
        /*tooltip2_array_values*/
        H[54]
      ].length > 0 && /*tooltip*/
      H[33] === "single" ? ye ? (ye.p(H, oe), oe[1] & /*tooltip2_array_values, tooltip*/
      8388612 && ne(ye, 1)) : (ye = C1(H), ye.c(), ne(ye, 1), ye.m(f, Y)) : ye && (We(), ue(ye, 1, 1, () => {
        ye = null;
      }), Be());
      let Tt = D;
      D = et(H), D === Tt ? ~D && Qe[D].p(H, oe) : (j && (We(), ue(Qe[Tt], 1, 1, () => {
        Qe[Tt] = null;
      }), Be()), ~D ? (j = Qe[D], j ? j.p(H, oe) : (j = Qe[D] = He[D](H), j.c()), ne(j, 1), j.m(f, se)) : j = null), /*$hovered_legend*/
      H[77] ? qe ? (qe.p(H, oe), oe[2] & /*$hovered_legend*/
      32768 && ne(qe, 1)) : (qe = L1(H), qe.c(), ne(qe, 1), qe.m(f, null)) : qe && (We(), ue(qe, 1, 1, () => {
        qe = null;
      }), Be());
    },
    i(H) {
      if (!re) {
        ne(R);
        for (let oe = 0; oe < ce.length; oe += 1)
          ne(a[oe]);
        ne(d.$$.fragment, H);
        for (let oe = 0; oe < kt.length; oe += 1)
          ne(h[oe]);
        ne(Je), ne(S.$$.fragment, H), ne(Ue), ne(Xe), ne(ae), ne(me), ne(be), ne(V), ne(Ce), ne(ye), ne(j), ne(qe), re = !0;
      }
    },
    o(H) {
      ue(R);
      for (let oe = 0; oe < a.length; oe += 1)
        ue(a[oe]);
      ue(d.$$.fragment, H);
      for (let oe = 0; oe < h.length; oe += 1)
        ue(h[oe]);
      ue(Je), ue(S.$$.fragment, H), ue(Ue), ue(Xe), ue(ae), ue(me), ue(be), ue(V), ue(Ce), ue(ye), ue(j), ue(qe), re = !1;
    },
    d(H) {
      H && (K(t), K(n), K(i), K(l), K(f)), W && W.d(H), C && C.d(), R && R.d(H);
      for (let oe = 0; oe < a.length; oe += 1)
        a[oe].d();
      je(d);
      for (let oe = 0; oe < h.length; oe += 1)
        h[oe].d();
      Je && Je.d(), je(S), Ue && Ue.d(), $e && $e.d(), at && at.d(), Xe && Xe.d(), ae && ae.d(), me && me.d(), be && be.d(), V && V.d(), Ce && Ce.d(), ye && ye.d(), ~D && Qe[D].d(), qe && qe.d(), de(), te = !1, Ht(J);
    }
  };
}
const ov = "XYChart", tf = 30, Wr = 40;
let Br = 20;
const Pi = 15, Qo = 5;
function fv(e, t, n) {
  let i, l, f, u, a;
  vt(e, Vi, (P) => n(77, a = P));
  let { data: _ = [] } = t, { id: c } = t;
  ju(() => {
    console.log("Chart component destroyed:", c);
  }), A6(() => {
    console.log("Chart component mounted:", c);
  });
  let { width: d = 800 } = t, { show_legend: h } = t, { custom_tooltip_data: g } = t, { header: w } = t, { title_align: v } = t, { title_color: S } = t, { title_font_size: k } = t, { title_font_weight: T } = t, { custom_css_header: A } = t, { height: z = 400 } = t, { xaxis_ticks: U = 6 } = t, { format_xaxis: O } = t, { dx: E = "0em" } = t, { dy: B = "0em" } = t, { rotation_xaxis: G = 0 } = t, { font_size_xaxis: Y = 14 } = t, { font_size_xticks: D = 12 } = t, { scale_x: j = "linear" } = t, { dominant_baseline_x_axis: se = "middle" } = t, { text_anchor_x_axis: de = "middle" } = t, { line_type_axis_trigger: re = "none" } = t, { x_axis_type: te } = t, { x_label: J } = t, { yaxis_ticks: W = 6 } = t, { format_yaxis: C = ",.3r" } = t, { font_size_yaxis: R = 14 } = t, { font_size_yticks: ce = 12 } = t, { format_tooltip: he = "" } = t, { y_label: kt } = t, { segments: Kt } = t, { annotations: Je } = t, { arrows: Ue } = t, { segments_df: $e } = t, { arrows_df: at } = t, { annotations_df: Xe } = t, { show_legend_segments: ae } = t, { type: me } = t, { tooltip: be } = t, { interval: V } = t, { time_interval: Ce } = t, { time_series_interval: ye = "daily" } = t, { background_color_tt: He } = t, { opacity_tt: Qe } = t, { animation_params_list: et } = t, { justify_content_tooltip: qe } = t, { font_size_tooltip: H } = t, { padding_tooltip: oe } = t, { text_color_tooltip: Me } = t, { border_color_tooltip: Mt } = t, { show_delay_tooltip: Tt } = t, { border_style_tooltip: Xt } = t, { border_width_tooltip: gt } = t, { tooltip_position: St } = t, { crosshair: $t } = t, { x_range: wt } = t, { y_range: zt } = t, en = [];
  function Nn(P) {
    let Ft = [];
    Ft = Object.keys(yt).filter((Lt) => !P.includes(Lt));
    for (let Lt = 0; Lt < P.length; Lt++)
      n(66, yt[P[Lt]] = !0, yt);
    for (let Lt = 0; Lt < Ft.length; Lt++)
      n(66, yt[Ft[Lt]] = !1, yt);
    return [yt, Ft, en];
  }
  let tn = Wr, ln = 20, Kn = Wr, hn, xn = 10, on, Mn, yt = {}, Un = [], cn, At = null, Tn = { x: 0, y: 0 }, Sn = !1, Jn, Qn, zn = [], $ = [], tt = [], Ct = [], gn = [], fn = null, Pn = null, ii, ai = [];
  const Xr = (P) => P.filter((Ft) => Ft.y !== null);
  let An = {}, Cn = {}, Wi, Bi, fr, si = z - 40, X = 40;
  function Ut() {
    const Ft = document.createElement("canvas").getContext("2d"), Lt = (lf, Hl) => {
      Ft.font = `${Hl}px Arial`;
      const { width: sr } = Ft.measureText(lf), Yl = Ft.measureText("M").actualBoundingBoxAscent + Ft.measureText("M").actualBoundingBoxDescent + 1;
      return { width: sr, height: Yl };
    }, Wl = Lt(fr, ce);
    n(67, tn = Wl.width);
    const Bl = Lt(kt, R);
    n(52, xn = Bl.height);
    const jr = Lt(f, D);
    Kn = jr.width, hn = jr.height;
    const Kr = Lt("M", Y);
    n(53, on = Kr.height), n(84, ln = aa(Kn, hn, G)), n(63, si = z - ln - on - hn - Pi - Qo), n(64, X = tn + xn + Pi + Qo);
  }
  Zu(Ut);
  let dt, _i, ur = 10;
  const ar = (P) => n(68, Mn = P), Si = (P) => {
    (Object.keys(yt).filter((Lt) => yt[Lt]).length > 1 || !yt[P]) && n(66, yt[P] = !yt[P], yt);
  }, qr = () => n(68, Mn = null);
  function zi(P) {
    At = P, n(54, At);
  }
  function Gr(P) {
    Tn = P, n(69, Tn);
  }
  function Zr(P) {
    Sn = P, n(70, Sn);
  }
  function nf(P) {
    Sn = P, n(70, Sn);
  }
  function Ul(P) {
    Tn = P, n(69, Tn);
  }
  function Pl(P) {
    At = P, n(54, At);
  }
  function Fl() {
    d = this.clientWidth, n(0, d);
  }
  const rf = () => vc.set(null);
  return e.$$set = (P) => {
    "data" in P && n(78, _ = P.data), "id" in P && n(50, c = P.id), "width" in P && n(0, d = P.width), "show_legend" in P && n(2, h = P.show_legend), "custom_tooltip_data" in P && n(3, g = P.custom_tooltip_data), "header" in P && n(4, w = P.header), "title_align" in P && n(5, v = P.title_align), "title_color" in P && n(6, S = P.title_color), "title_font_size" in P && n(7, k = P.title_font_size), "title_font_weight" in P && n(8, T = P.title_font_weight), "custom_css_header" in P && n(9, A = P.custom_css_header), "height" in P && n(10, z = P.height), "xaxis_ticks" in P && n(79, U = P.xaxis_ticks), "format_xaxis" in P && n(80, O = P.format_xaxis), "dx" in P && n(11, E = P.dx), "dy" in P && n(12, B = P.dy), "rotation_xaxis" in P && n(13, G = P.rotation_xaxis), "font_size_xaxis" in P && n(14, Y = P.font_size_xaxis), "font_size_xticks" in P && n(15, D = P.font_size_xticks), "scale_x" in P && n(81, j = P.scale_x), "dominant_baseline_x_axis" in P && n(16, se = P.dominant_baseline_x_axis), "text_anchor_x_axis" in P && n(17, de = P.text_anchor_x_axis), "line_type_axis_trigger" in P && n(1, re = P.line_type_axis_trigger), "x_axis_type" in P && n(18, te = P.x_axis_type), "x_label" in P && n(19, J = P.x_label), "yaxis_ticks" in P && n(20, W = P.yaxis_ticks), "format_yaxis" in P && n(21, C = P.format_yaxis), "font_size_yaxis" in P && n(22, R = P.font_size_yaxis), "font_size_yticks" in P && n(23, ce = P.font_size_yticks), "format_tooltip" in P && n(24, he = P.format_tooltip), "y_label" in P && n(25, kt = P.y_label), "segments" in P && n(26, Kt = P.segments), "annotations" in P && n(27, Je = P.annotations), "arrows" in P && n(28, Ue = P.arrows), "segments_df" in P && n(29, $e = P.segments_df), "arrows_df" in P && n(30, at = P.arrows_df), "annotations_df" in P && n(31, Xe = P.annotations_df), "show_legend_segments" in P && n(32, ae = P.show_legend_segments), "type" in P && n(51, me = P.type), "tooltip" in P && n(33, be = P.tooltip), "interval" in P && n(34, V = P.interval), "time_interval" in P && n(35, Ce = P.time_interval), "time_series_interval" in P && n(36, ye = P.time_series_interval), "background_color_tt" in P && n(37, He = P.background_color_tt), "opacity_tt" in P && n(38, Qe = P.opacity_tt), "animation_params_list" in P && n(39, et = P.animation_params_list), "justify_content_tooltip" in P && n(40, qe = P.justify_content_tooltip), "font_size_tooltip" in P && n(41, H = P.font_size_tooltip), "padding_tooltip" in P && n(42, oe = P.padding_tooltip), "text_color_tooltip" in P && n(43, Me = P.text_color_tooltip), "border_color_tooltip" in P && n(44, Mt = P.border_color_tooltip), "show_delay_tooltip" in P && n(45, Tt = P.show_delay_tooltip), "border_style_tooltip" in P && n(46, Xt = P.border_style_tooltip), "border_width_tooltip" in P && n(47, gt = P.border_width_tooltip), "tooltip_position" in P && n(48, St = P.tooltip_position), "crosshair" in P && n(49, $t = P.crosshair), "x_range" in P && n(82, wt = P.x_range), "y_range" in P && n(83, zt = P.y_range);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*line_type_axis_trigger*/
    2 && n(1, re = re || "none"), e.$$.dirty[1] & /*type, time_interval*/
    1048592 | e.$$.dirty[2] & /*data*/
    65536 && n(85, Un = Sw(_, me, Ce)), e.$$.dirty[2] & /*data, names, start*/
    50397184 && (n(86, cn = [...new Set(_.map((P) => P.id))]), n(88, Qn = _.map((P) => ({
      id: P.id,
      include_legend: P.include_legend,
      type: P.type,
      color: P.colors
    }))), n(87, Jn = Nn(cn)), n(66, yt = Jn[0]), Jn[1]), e.$$.dirty[2] & /*categories*/
    16 && n(59, ii = Object.keys(yt).filter((P) => yt[P])), e.$$.dirty[2] & /*names*/
    16777216 && n(59, ii = cn), e.$$.dirty[0] & /*width, x_axis_type*/
    262145 | e.$$.dirty[1] & /*current_categories, filtered_data, type, all_lines, all_points*/
    856686592 | e.$$.dirty[2] & /*dataset, y_lines_spacing, x_lines_spacing, scale_x, x_range, y_range, line_generator_scales, scales, line_generator*/
    951582726 && (n(55, zn = Un.filter(({ id: P }) => ii.includes(P))), n(89, $ = Aw(zn, X, si, d, Br, me, j, wt, zt, te)), n(91, Ct = $.slice(1, 3)), n(57, fn = Ct[0]), n(58, Pn = Ct[1]), n(90, tt = $[0]), n(56, gn = zw(zn, ii, tt)), n(56, gn = gn.filter(({ id: P }) => ii.includes(P))), n(60, ai = gn.filter(({ type: P }) => ["points"].includes(P))), ai.forEach((P) => {
      P.data = Xr(P.data);
    }), n(56, gn = gn.filter(({ type: P }) => ["line", "density", "bands"].includes(P)))), e.$$.dirty[0] & /*segments_df, x_axis_type*/
    537133056 | e.$$.dirty[1] & /*y_scale, x_scale, time_interval*/
    201326608 | e.$$.dirty[2] & /*dataset*/
    8388608 && n(76, i = Cw(Un, $e, te, Pn, fn, Ce)), e.$$.dirty[2] & /*include_legend*/
    67108864 && n(75, l = Qn.filter((P) => P.include_legend !== !1)), e.$$.dirty[1] & /*tooltip2_array_values, tooltip, x_scale*/
    75497476 | e.$$.dirty[2] & /*x_lines_spacing*/
    2 && At && be === "vertical_line" && At.length > 0 && (n(71, An.y1 = si, An), n(71, An.y2 = Br, An), n(71, An.x1 = fn(At[0].data.x), An), n(71, An.x2 = fn(At[0].data.x), An)), e.$$.dirty[0] & /*width*/
    1 | e.$$.dirty[1] & /*tooltip2_array_values, tooltip, y_scale*/
    142606340 | e.$$.dirty[2] & /*y_lines_spacing*/
    4 && At && be === "vertical_line" && At.length > 0 && (n(72, Cn.y1 = Pn(At[0].data.y), Cn), n(72, Cn.y2 = Pn(At[0].data.y), Cn), n(72, Cn.x1 = X, Cn), n(72, Cn.x2 = d, Cn)), e.$$.dirty[0] & /*format_yaxis*/
    2097152 && n(62, Bi = _n(C)), e.$$.dirty[0] & /*yaxis_ticks*/
    1048576 | e.$$.dirty[1] & /*y_scale*/
    134217728 && n(61, Wi = Pn.ticks(W)), e.$$.dirty[1] & /*ticks*/
    1073741824 | e.$$.dirty[2] & /*format_number*/
    1) {
      let P = 0;
      Wi.forEach((Ft) => {
        const Lt = Bi(Ft).toString();
        Lt.length > P && (P = Lt.length, fr = Lt);
      });
    }
    e.$$.dirty[1] & /*type, x_scale, all_points, all_lines*/
    638582784 | e.$$.dirty[2] & /*format_xaxis, xaxis_ticks, format_x_axis*/
    393224 && (me === "timeseries" ? (n(65, dt = ua(O)), n(92, _i = fn.ticks(U).map((P) => dt(P)))) : (me === "points" || me === "line" || me === "density") && (ai.length > 0 && typeof ai.concat(gn)[0].data[0].x == "number" ? (n(65, dt = _n(O)), n(92, _i = fn.ticks(U).map((P) => _n(P)))) : (n(65, dt = "null"), n(92, _i = fn.domain())))), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    1073741824 && (f = _i.reduce((P, Ft) => P.length > Ft.length ? P : Ft)), e.$$.dirty[0] & /*height*/
    1024 | e.$$.dirty[1] & /*label_height_x_axis*/
    4194304 | e.$$.dirty[2] & /*x_ticks_label_rotation_buffer*/
    4194304 && n(73, ur = z - ln - on - Pi), e.$$.dirty[1] & /*label_height*/
    2097152, e.$$.dirty[1] & /*x_scale*/
    67108864 | e.$$.dirty[2] & /*xaxis_ticks*/
    131072 && n(74, u = typeof fn.domain()[0] == "string" ? fn.domain() : fn.ticks(U));
  }, [
    d,
    re,
    h,
    g,
    w,
    v,
    S,
    k,
    T,
    A,
    z,
    E,
    B,
    G,
    Y,
    D,
    se,
    de,
    te,
    J,
    W,
    C,
    R,
    ce,
    he,
    kt,
    Kt,
    Je,
    Ue,
    $e,
    at,
    Xe,
    ae,
    be,
    V,
    Ce,
    ye,
    He,
    Qe,
    et,
    qe,
    H,
    oe,
    Me,
    Mt,
    Tt,
    Xt,
    gt,
    St,
    $t,
    c,
    me,
    xn,
    on,
    At,
    zn,
    gn,
    fn,
    Pn,
    ii,
    ai,
    Wi,
    Bi,
    si,
    X,
    dt,
    yt,
    tn,
    Mn,
    Tn,
    Sn,
    An,
    Cn,
    ur,
    u,
    l,
    i,
    a,
    _,
    U,
    O,
    j,
    wt,
    zt,
    ln,
    Un,
    cn,
    Jn,
    Qn,
    $,
    tt,
    Ct,
    _i,
    ar,
    Si,
    qr,
    zi,
    Gr,
    Zr,
    nf,
    Ul,
    Pl,
    Fl,
    rf
  ];
}
class uv extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      fv,
      lv,
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
function av(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = ze("rect"), p(
        t,
        "x",
        /*$tweened_x*/
        e[13]
      ), p(
        t,
        "y",
        /*$tweened_y*/
        e[14]
      ), p(
        t,
        "width",
        /*$tweened_width*/
        e[15]
      ), p(
        t,
        "height",
        /*$tweened_height*/
        e[16]
      ), p(
        t,
        "fill",
        /*color*/
        e[5]
      ), y(t, "transition", "opacity 0.5s ease"), p(t, "opacity", n = /*hovered_group*/
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
      Q(u, t, a), l || (f = [
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
      8192 && p(
        t,
        "x",
        /*$tweened_x*/
        e[13]
      ), a & /*$tweened_y*/
      16384 && p(
        t,
        "y",
        /*$tweened_y*/
        e[14]
      ), a & /*$tweened_width*/
      32768 && p(
        t,
        "width",
        /*$tweened_width*/
        e[15]
      ), a & /*$tweened_height*/
      65536 && p(
        t,
        "height",
        /*$tweened_height*/
        e[16]
      ), a & /*color*/
      32 && p(
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
      ) : 1) && p(t, "opacity", n);
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
      u && K(t), l = !1, Ht(f);
    }
  };
}
function sv(e, t, n) {
  let i, l, f, u, { x: a } = t, { y: _ } = t, { width: c } = t, { height: d } = t, { color: h } = t, { tweenOptions: g } = t, { y_value: w } = t, { x_value: v } = t, { group: S } = t, { hover_legend: k } = t, { current_categories: T } = t, { mode: A } = t, { x_cat: z } = t, { xScale: U } = t, { hovered_y: O } = t, { hovered_x: E } = t, { hovered_group: B } = t, { hovered_color: G } = t, { hovered_x_cat: Y } = t, { tooltip_axis_x: D } = t, j = Nt(a, g == null ? void 0 : g.x);
  vt(e, j, (C) => n(13, i = C));
  let se = Nt(_, g == null ? void 0 : g.y);
  vt(e, se, (C) => n(14, l = C));
  let de = Nt(c, g == null ? void 0 : g.width);
  vt(e, de, (C) => n(15, f = C));
  let re = Nt(d, g == null ? void 0 : g.height);
  vt(e, re, (C) => n(16, u = C));
  function te(C, R, ce, he, kt, Kt, Je, Ue) {
    n(0, O = R), n(1, E = Ue === "grouped" ? ce + he / 2 : U(kt) + he / 2), n(2, B = Kt), n(3, G = Je), n(22, Y = kt), n(23, D = U(kt) + he / 2);
  }
  const J = (C) => te(C, w, v, c, z, S, h, A), W = () => {
    n(0, O = null), n(1, E = null), n(2, B = null), n(3, G = null);
  };
  return e.$$set = (C) => {
    "x" in C && n(24, a = C.x), "y" in C && n(25, _ = C.y), "width" in C && n(4, c = C.width), "height" in C && n(26, d = C.height), "color" in C && n(5, h = C.color), "tweenOptions" in C && n(27, g = C.tweenOptions), "y_value" in C && n(6, w = C.y_value), "x_value" in C && n(7, v = C.x_value), "group" in C && n(8, S = C.group), "hover_legend" in C && n(9, k = C.hover_legend), "current_categories" in C && n(10, T = C.current_categories), "mode" in C && n(11, A = C.mode), "x_cat" in C && n(12, z = C.x_cat), "xScale" in C && n(28, U = C.xScale), "hovered_y" in C && n(0, O = C.hovered_y), "hovered_x" in C && n(1, E = C.hovered_x), "hovered_group" in C && n(2, B = C.hovered_group), "hovered_color" in C && n(3, G = C.hovered_color), "hovered_x_cat" in C && n(22, Y = C.hovered_x_cat), "tooltip_axis_x" in C && n(23, D = C.tooltip_axis_x);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions*/
    150994944 && j.set(a, g == null ? void 0 : g.x), e.$$.dirty & /*y, tweenOptions*/
    167772160 && se.set(_, g == null ? void 0 : g.y), e.$$.dirty & /*width, tweenOptions*/
    134217744 && de.set(c, g == null ? void 0 : g.width), e.$$.dirty & /*height, tweenOptions*/
    201326592 && re.set(d, g == null ? void 0 : g.height);
  }, [
    O,
    E,
    B,
    G,
    c,
    h,
    w,
    v,
    S,
    k,
    T,
    A,
    z,
    i,
    l,
    f,
    u,
    j,
    se,
    de,
    re,
    te,
    Y,
    D,
    a,
    _,
    d,
    g,
    U,
    J,
    W
  ];
}
class _v extends ct {
  constructor(t) {
    super(), ht(this, t, sv, av, ut, {
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
      t = ze("text"), n = Ae(
        /*text*/
        e[0]
      ), p(t, "transform", i = `rotate(${-/*rotation*/
      e[2]} ${/*$tweened_x*/
      e[8]} ${/*$tweened_y*/
      e[9]})`), p(t, "font-size", l = /*font_size_xticks*/
      e[1] + "px"), p(
        t,
        "x",
        /*$tweened_x*/
        e[8]
      ), p(
        t,
        "y",
        /*$tweened_y*/
        e[9]
      ), p(
        t,
        "text-anchor",
        /*text_anchor_x_axis*/
        e[4]
      ), p(
        t,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        e[5]
      ), p(
        t,
        "fill",
        /*colour_text*/
        e[3]
      ), p(
        t,
        "dy",
        /*dy*/
        e[7]
      ), p(
        t,
        "dx",
        /*dx*/
        e[6]
      );
    },
    m(u, a) {
      Q(u, t, a), q(t, n);
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
      u[9]})`) && p(t, "transform", i), a & /*font_size_xticks*/
      2 && l !== (l = /*font_size_xticks*/
      u[1] + "px") && p(t, "font-size", l), a & /*$tweened_x*/
      256 && p(
        t,
        "x",
        /*$tweened_x*/
        u[8]
      ), a & /*$tweened_y*/
      512 && p(
        t,
        "y",
        /*$tweened_y*/
        u[9]
      ), a & /*text_anchor_x_axis*/
      16 && p(
        t,
        "text-anchor",
        /*text_anchor_x_axis*/
        u[4]
      ), a & /*dominant_baseline_x_axis*/
      32 && p(
        t,
        "dominant-baseline",
        /*dominant_baseline_x_axis*/
        u[5]
      ), a & /*colour_text*/
      8 && p(
        t,
        "fill",
        /*colour_text*/
        u[3]
      ), a & /*dy*/
      128 && p(
        t,
        "dy",
        /*dy*/
        u[7]
      ), a & /*dx*/
      64 && p(
        t,
        "dx",
        /*dx*/
        u[6]
      );
    },
    i(u) {
      u && (f || it(() => {
        f = Fi(t, wn, { duration: 1e3, easing: Al }), f.start();
      }));
    },
    o: Pe,
    d(u) {
      u && K(t);
    }
  };
}
function cv(e, t, n) {
  let i, l, { x: f } = t, { y: u } = t, { tweenOptions: a } = t, { text: _ } = t, { font_size_xticks: c } = t, { rotation: d } = t, { colour_text: h } = t, { text_anchor_x_axis: g } = t, { dominant_baseline_x_axis: w } = t, { dx: v } = t, { dy: S } = t, k = Nt(u, a == null ? void 0 : a.y);
  vt(e, k, (A) => n(9, l = A));
  let T = Nt(f, a == null ? void 0 : a.x);
  return vt(e, T, (A) => n(8, i = A)), e.$$set = (A) => {
    "x" in A && n(12, f = A.x), "y" in A && n(13, u = A.y), "tweenOptions" in A && n(14, a = A.tweenOptions), "text" in A && n(0, _ = A.text), "font_size_xticks" in A && n(1, c = A.font_size_xticks), "rotation" in A && n(2, d = A.rotation), "colour_text" in A && n(3, h = A.colour_text), "text_anchor_x_axis" in A && n(4, g = A.text_anchor_x_axis), "dominant_baseline_x_axis" in A && n(5, w = A.dominant_baseline_x_axis), "dx" in A && n(6, v = A.dx), "dy" in A && n(7, S = A.dy);
  }, e.$$.update = () => {
    e.$$.dirty & /*y, tweenOptions, x*/
    28672 && El().then(() => {
      k.set(u, a == null ? void 0 : a.y), T.set(f, a == null ? void 0 : a.x);
    });
  }, [
    _,
    c,
    d,
    h,
    g,
    w,
    v,
    S,
    i,
    l,
    k,
    T,
    f,
    u,
    a
  ];
}
class ca extends ct {
  constructor(t) {
    super(), ht(this, t, cv, hv, ut, {
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
  ), l, f, u, a, _, c, d, h = (
    /*tooltip_df*/
    e[3].group + ""
  ), g, w, v, S, k = (
    /*tooltip_df*/
    e[3].y + ""
  ), T, A, z, U, O, E, B;
  return {
    c() {
      t = _e("div"), n = _e("div"), l = Ae(i), f = ve(), u = _e("div"), a = _e("div"), _ = _e("span"), c = ve(), d = _e("div"), g = Ae(h), w = Ae(":"), v = ve(), S = _e("div"), T = Ae(k), A = ve(), z = _e("div"), U = ve(), O = _e("div"), y(
        _,
        "background",
        /*tooltip_df*/
        e[3].color
      ), y(_, "width", "9px"), y(_, "height", "9px"), y(_, "border-radius", "50%"), y(_, "margin", "3px"), y(_, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(a, "display", "flex"), y(S, "font-weight", "bold"), y(u, "padding", "5px"), y(u, "font-size", "14px"), y(u, "display", "flex"), y(u, "flex-direction", "row"), y(u, "justify-content", "space-between"), y(u, "gap", "10px"), y(z, "position", "absolute"), y(z, "bottom", "-5px"), y(z, "left", "50%"), y(z, "transform", "translateX(-50%)"), y(z, "width", "0"), y(z, "height", "0"), y(z, "border-left", "5px solid transparent"), y(z, "border-right", "5px solid transparent"), y(z, "border-top", "5px solid #ccc"), y(O, "position", "absolute"), y(O, "bottom", "-4px"), y(O, "left", "50%"), y(O, "transform", "translateX(-50%)"), y(O, "width", "0"), y(O, "height", "0"), y(O, "border-left", "4px solid transparent"), y(O, "border-right", "4px solid transparent"), y(O, "border-top", "4px solid #fff"), p(t, "class", "tooltip-bars"), y(t, "transition", "all 500ms"), y(t, "position", "absolute"), y(
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
    m(G, Y) {
      Q(G, t, Y), q(t, n), q(n, l), q(t, f), q(t, u), q(u, a), q(a, _), q(u, c), q(u, d), q(d, g), q(d, w), q(u, v), q(u, S), q(S, T), q(t, A), q(t, z), q(t, U), q(t, O), B = !0;
    },
    p(G, [Y]) {
      (!B || Y & /*tooltip_df*/
      8) && i !== (i = /*tooltip_df*/
      G[3].x + "") && Oe(l, i), (!B || Y & /*tooltip_df*/
      8) && y(
        _,
        "background",
        /*tooltip_df*/
        G[3].color
      ), (!B || Y & /*tooltip_df*/
      8) && h !== (h = /*tooltip_df*/
      G[3].group + "") && Oe(g, h), (!B || Y & /*tooltip_df*/
      8) && k !== (k = /*tooltip_df*/
      G[3].y + "") && Oe(T, k), (!B || Y & /*yScale, hovered_y*/
      5) && y(
        t,
        "top",
        /*yScale*/
        G[0](
          /*hovered_y*/
          G[2]
        ) - 5 + "px"
      ), (!B || Y & /*hovered_x*/
      2) && y(
        t,
        "left",
        /*hovered_x*/
        G[1] + "px"
      );
    },
    i(G) {
      B || (it(() => {
        B && (E || (E = Pt(t, Zt, { duration: 1e3 }, !0)), E.run(1));
      }), B = !0);
    },
    o(G) {
      E || (E = Pt(t, Zt, { duration: 1e3 }, !1)), E.run(0), B = !1;
    },
    d(G) {
      G && K(t), G && E && E.end();
    }
  };
}
function dv(e, t, n) {
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
    });
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
class mv extends ct {
  constructor(t) {
    super(), ht(this, t, dv, gv, ut, {
      yScale: 0,
      hovered_x: 1,
      hovered_y: 2,
      hovered_group: 4,
      hovered_color: 5,
      hovered_x_cat: 6
    });
  }
}
function E1(e, t, n) {
  const i = e.slice();
  return i[16] = t[n], i;
}
function R1(e) {
  let t, n, i = (
    /*tooltip_data*/
    e[0][0].x + ""
  ), l, f, u, a, _, c, d = ke(
    /*tooltip_data*/
    e[0]
  ), h = [];
  for (let g = 0; g < d.length; g += 1)
    h[g] = I1(E1(e, d, g));
  return {
    c() {
      t = _e("div"), n = _e("h6"), l = Ae(i), f = ve(), u = _e("div");
      for (let g = 0; g < h.length; g += 1)
        h[g].c();
      y(n, "background-color", "black"), y(n, "color", "white"), y(n, "margin", "1px"), y(n, "padding", "2%"), y(n, "font-size", "12px"), y(n, "font-weight", "2px"), y(n, "text-align", "center"), p(t, "class", "tooltip"), y(t, "position", "absolute"), y(
        t,
        "top",
        /*yPosition*/
        e[4] + "px"
      ), y(
        t,
        "left",
        /*xPosition*/
        e[5] + "px"
      ), y(t, "border-radius", "3px"), y(t, "pointer-events", "none"), y(t, "transition", "top 300ms ease, left 300ms ease"), y(t, "margin-top", "15px"), y(t, "background-color", "rgba(255,255,255, 0.8)"), y(t, "z-index", "1000"), it(() => (
        /*div1_elementresize_handler*/
        e[15].call(t)
      ));
    },
    m(g, w) {
      Q(g, t, w), q(t, n), q(n, l), q(t, f), q(t, u);
      for (let v = 0; v < h.length; v += 1)
        h[v] && h[v].m(u, null);
      a = rr(
        t,
        /*div1_elementresize_handler*/
        e[15].bind(t)
      ), c = !0;
    },
    p(g, w) {
      if ((!c || w & /*tooltip_data*/
      1) && i !== (i = /*tooltip_data*/
      g[0][0].x + "") && Oe(l, i), w & /*format_number, tooltip_data*/
      9) {
        d = ke(
          /*tooltip_data*/
          g[0]
        );
        let v;
        for (v = 0; v < d.length; v += 1) {
          const S = E1(g, d, v);
          h[v] ? h[v].p(S, w) : (h[v] = I1(S), h[v].c(), h[v].m(u, null));
        }
        for (; v < h.length; v += 1)
          h[v].d(1);
        h.length = d.length;
      }
      (!c || w & /*yPosition*/
      16) && y(
        t,
        "top",
        /*yPosition*/
        g[4] + "px"
      ), (!c || w & /*xPosition*/
      32) && y(
        t,
        "left",
        /*xPosition*/
        g[5] + "px"
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
      g && K(t), kn(h, g), a(), g && _ && _.end();
    }
  };
}
function I1(e) {
  let t, n, i, l, f, u, a = (
    /*bars*/
    e[16].group + ""
  ), _, c, d, h = (
    /*format_number*/
    e[3](
      /*bars*/
      e[16].y_og
    ) + ""
  ), g, w;
  return {
    c() {
      t = _e("div"), n = _e("div"), i = _e("div"), l = _e("span"), f = ve(), u = _e("span"), _ = Ae(a), c = ve(), d = _e("div"), g = Ae(h), w = ve(), y(
        l,
        "background",
        /*bars*/
        e[16].colors
      ), y(l, "width", "9px"), y(l, "height", "9px"), y(l, "border-radius", "50%"), y(l, "margin", "3px"), y(l, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(i, "width", "18px"), y(i, "display", "flex"), y(i, "align-items", "center"), y(i, "justify-content", "center"), y(n, "display", "flex"), y(n, "align-items", "center"), p(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(v, S) {
      Q(v, t, S), q(t, n), q(n, i), q(i, l), q(n, f), q(n, u), q(u, _), q(t, c), q(t, d), q(d, g), q(t, w);
    },
    p(v, S) {
      S & /*tooltip_data*/
      1 && y(
        l,
        "background",
        /*bars*/
        v[16].colors
      ), S & /*tooltip_data*/
      1 && a !== (a = /*bars*/
      v[16].group + "") && Oe(_, a), S & /*format_number, tooltip_data*/
      9 && h !== (h = /*format_number*/
      v[3](
        /*bars*/
        v[16].y_og
      ) + "") && Oe(g, h);
    },
    d(v) {
      v && K(t);
    }
  };
}
function yv(e) {
  let t, n = (
    /*tooltip_data*/
    e[0] && R1(e)
  );
  return {
    c() {
      n && n.c(), t = Le();
    },
    m(i, l) {
      n && n.m(i, l), Q(i, t, l);
    },
    p(i, [l]) {
      /*tooltip_data*/
      i[0] ? n ? (n.p(i, l), l & /*tooltip_data*/
      1 && ne(n, 1)) : (n = R1(i), n.c(), ne(n, 1), n.m(t.parentNode, t)) : n && (We(), ue(n, 1, 1, () => {
        n = null;
      }), Be());
    },
    i(i) {
      ne(n);
    },
    o(i) {
      ue(n);
    },
    d(i) {
      i && K(t), n && n.d(i);
    }
  };
}
const O1 = 20, D1 = 0;
function bv(e, t, n) {
  let i, l, f, { x: u } = t, { y: a } = t, { format_tooltip: _ } = t, { height: c } = t, { width: d } = t, { margin: h } = t, { buffer: g } = t, { tooltip_data: w } = t, { mode: v } = t, S, k, T;
  function A() {
    S = this.clientWidth, k = this.clientHeight, n(1, S), n(2, k);
  }
  return e.$$set = (z) => {
    "x" in z && n(6, u = z.x), "y" in z && n(7, a = z.y), "format_tooltip" in z && n(8, _ = z.format_tooltip), "height" in z && n(9, c = z.height), "width" in z && n(10, d = z.width), "margin" in z && n(11, h = z.margin), "buffer" in z && n(12, g = z.buffer), "tooltip_data" in z && n(0, w = z.tooltip_data), "mode" in z && n(13, v = z.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*tooltip_data, maxYValue*/
    16385 && (n(14, T = Math.max(...w.map((z) => z.y_og))), n(0, w = w.map((z) => ({ ...z })).sort((z, U) => U.y_og - z.y_og || U.y_og - T))), e.$$.dirty & /*x, tooltipWidth, width*/
    1090 && n(5, i = u + S > d ? u - S - O1 : u + O1), e.$$.dirty & /*y, tooltipHeight, height, margin, buffer*/
    6788 && n(4, l = a + k > c - h - g ? a - k - D1 - h - g : a + D1), e.$$.dirty & /*format_tooltip*/
    256 && n(3, f = _n(_)), e.$$.dirty & /*mode, tooltip_data*/
    8193 && v === "percent") {
      console.log("tooltip_data", w), n(0, w[w.length - 1].y_og = w[w.length - 1].y, w);
      for (let z = 0; z < w.length; z++)
        n(0, w[z].y_og = w[z].y - w[z].y_start, w);
    }
  }, [
    w,
    S,
    k,
    f,
    l,
    i,
    u,
    a,
    _,
    c,
    d,
    h,
    g,
    v,
    T,
    A
  ];
}
class wv extends ct {
  constructor(t) {
    super(), ht(this, t, bv, yv, ut, {
      x: 6,
      y: 7,
      format_tooltip: 8,
      height: 9,
      width: 10,
      margin: 11,
      buffer: 12,
      tooltip_data: 0,
      mode: 13
    });
  }
}
const { Map: Bu } = g6;
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
      t = _e("div"), n = Ae(
        /*header*/
        e[2]
      ), p(t, "class", "header"), y(
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
        e[28] + nr + "px"
      );
    },
    m(i, l) {
      Q(i, t, l), q(t, n);
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
        i[28] + nr + "px"
      );
    },
    d(i) {
      i && K(t);
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
      Q(l, t, f);
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
      l && K(t), kn(i, l);
    }
  };
}
function H1(e) {
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
  function v() {
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
      t = _e("p"), n = ze("svg"), i = ze("path"), u = ve(), _ = Ae(a), c = ve(), p(i, "d", "M 0 5.28 L 6 5.28 L 6 12 L 0 12 Z M 9 0 L 15 0 L 15 12 L 9 12 Z M 18 7.2 L 24 7.2 L 24 12 L 18 12 Z"), p(i, "fill", l = /*colors*/
      e[109]), p(i, "stroke", f = /*colors*/
      e[109]), p(i, "stroke-width", "1"), p(n, "width", "24"), p(n, "height", "12"), p(n, "viewBox", "0 0 24 12"), y(n, "display", "inline-block"), y(n, "vertical-align", "middle"), p(t, "style", d = /*hover_legend*/
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
    m(S, k) {
      Q(S, t, k), q(t, n), q(n, i), q(t, u), q(t, _), q(t, c), h || (g = [
        ot(t, "mouseover", w),
        ot(t, "click", v)
      ], h = !0);
    },
    p(S, k) {
      e = S, k[1] & /*legend_cats*/
      33554432 && l !== (l = /*colors*/
      e[109]) && p(i, "fill", l), k[1] & /*legend_cats*/
      33554432 && f !== (f = /*colors*/
      e[109]) && p(i, "stroke", f), k[1] & /*legend_cats*/
      33554432 && a !== (a = /*group*/
      e[108].replace(/\.\d+$/, "") + "") && Oe(_, a), k[1] & /*hover_legend, legend_cats, current_categories, categories*/
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
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;") && p(t, "style", d);
    },
    d(S) {
      S && K(t), h = !1, Ht(g);
    }
  };
}
function Y1(e, t) {
  let n, i, l;
  return i = new ha({
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
      space_between_ticks_and_gridline: Hu,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[37]
      ),
      height: (
        /*height*/
        t[7]
      ),
      line_generator_space: s0,
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
      Q(f, n, u), Ze(i, f, u), l = !0;
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
      l || (ne(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && K(n), je(i, f);
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
      n && n.m(i, l), Q(i, t, l);
    },
    p(i, l) {
      /*closestLabelX*/
      i[54] !== 0 && /*nextLabelX*/
      i[53] !== 0 ? n ? n.p(i, l) : (n = q1(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && K(t), n && n.d(i);
    }
  };
}
function q1(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = ze("rect"), p(t, "style", "fill: rgba(0, 0, 0, 0.1); /* Adjust color and opacity as needed */ position: absolute; top: 0; z-index: -1; transition: 0.2s ease;"), p(t, "x", n = /*closestLabelX*/
      e[54] - /*labelPositions*/
      (e[52][1] - /*labelPositions*/
      e[52][0]) / 2), p(t, "width", i = /*labelPositions*/
      e[52][1] - /*labelPositions*/
      e[52][0]), p(t, "y", l = /*yScale*/
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
      )), p(t, "height", f = /*yScale*/
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
      Q(u, t, a);
    },
    p(u, a) {
      a[1] & /*closestLabelX, labelPositions*/
      10485760 && n !== (n = /*closestLabelX*/
      u[54] - /*labelPositions*/
      (u[52][1] - /*labelPositions*/
      u[52][0]) / 2) && p(t, "x", n), a[1] & /*labelPositions*/
      2097152 && i !== (i = /*labelPositions*/
      u[52][1] - /*labelPositions*/
      u[52][0]) && p(t, "width", i), a[0] & /*yaxis_ticks*/
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
      )) && p(t, "y", l), a[0] & /*yaxis_ticks*/
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
      )) && p(t, "height", f);
    },
    d(u) {
      u && K(t);
    }
  };
}
function G1(e, t) {
  let n, i, l, f, u, a, _, c, d;
  function h(A) {
    t[78](A);
  }
  function g(A) {
    t[79](A);
  }
  function w(A) {
    t[80](A);
  }
  function v(A) {
    t[81](A);
  }
  function S(A) {
    t[82](A);
  }
  function k(A) {
    t[83](A);
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
    t[48]), i = new _v({ props: T }), _t.push(() => It(i, "hovered_y", h)), _t.push(() => It(i, "hovered_x", g)), _t.push(() => It(i, "hovered_group", w)), _t.push(() => It(i, "hovered_color", v)), _t.push(() => It(i, "hovered_x_cat", S)), _t.push(() => It(i, "tooltip_axis_x", k)), {
      key: e,
      first: null,
      c() {
        n = Le(), Ke(i.$$.fragment), this.first = n;
      },
      m(A, z) {
        Q(A, n, z), Ze(i, A, z), d = !0;
      },
      p(A, z) {
        t = A;
        const U = {};
        z[1] & /*filtered_data*/
        16 && (U.y_value = /*data*/
        t[27].y), z[1] & /*xScale, filtered_data, xSubgroup*/
        19 && (U.x_value = /*xScale*/
        t[31](
          /*data*/
          t[27].x
        ) + /*xSubgroup*/
        t[32](
          /*data*/
          t[27].group
        )), z[1] & /*filtered_data*/
        16 && (U.x_cat = /*data*/
        t[27].x), z[1] & /*filtered_data*/
        16 && (U.group = /*data*/
        t[27].group), z[0] & /*mode*/
        67108864 | z[1] & /*xScale, filtered_data, xSubgroup*/
        19 && (U.x = /*mode*/
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
        )), z[1] & /*yScale, filtered_data*/
        20 && (U.y = /*yScale*/
        t[33](
          /*data*/
          t[27].y
        )), z[1] & /*xSubgroup*/
        2 && (U.width = /*xSubgroup*/
        t[32].bandwidth()), z[1] & /*yScale, filtered_data*/
        20 && (U.height = /*yScale*/
        t[33](
          /*data*/
          t[27].y_start
        ) - /*yScale*/
        t[33](
          /*data*/
          t[27].y
        )), z[1] & /*filtered_data*/
        16 && (U.color = /*data*/
        t[27].colors), z[1] & /*hover_legend*/
        4096 && (U.hover_legend = /*hover_legend*/
        t[43]), z[1] & /*current_categories*/
        32 && (U.current_categories = /*current_categories*/
        t[36]), z[0] & /*mode*/
        67108864 && (U.mode = /*mode*/
        t[26]), z[1] & /*xScale*/
        1 && (U.xScale = /*xScale*/
        t[31]), !l && z[1] & /*hovered_y*/
        8192 && (l = !0, U.hovered_y = /*hovered_y*/
        t[44], Rt(() => l = !1)), !f && z[1] & /*hovered_x*/
        16384 && (f = !0, U.hovered_x = /*hovered_x*/
        t[45], Rt(() => f = !1)), !u && z[1] & /*hovered_group*/
        32768 && (u = !0, U.hovered_group = /*hovered_group*/
        t[46], Rt(() => u = !1)), !a && z[1] & /*hovered_color*/
        65536 && (a = !0, U.hovered_color = /*hovered_color*/
        t[47], Rt(() => a = !1)), !_ && z[1] & /*hovered_x_cat*/
        128 && (_ = !0, U.hovered_x_cat = /*hovered_x_cat*/
        t[38], Rt(() => _ = !1)), !c && z[1] & /*tooltip_axis_x*/
        131072 && (c = !0, U.tooltip_axis_x = /*tooltip_axis_x*/
        t[48], Rt(() => c = !1)), i.$set(U);
      },
      i(A) {
        d || (ne(i.$$.fragment, A), d = !0);
      },
      o(A) {
        ue(i.$$.fragment, A), d = !1;
      },
      d(A) {
        A && K(n), je(i, A);
      }
    }
  );
}
function Z1(e) {
  let t = [], n = new Bu(), i, l, f = ke(
    /*filtered_data*/
    e[35]
  );
  const u = (a) => (
    /*data*/
    a[27].id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = N1(e, f, a), c = u(_);
    n.set(c, t[a] = K1(c, _));
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
      Q(a, i, _), l = !0;
    },
    p(a, _) {
      _[0] & /*mode, position, colour_text, show_bar_labels, font_size_xticks, rotation_xaxis, text_anchor_x_axis, dominant_baseline_x_axis, dx, dy, names*/
      1199601408 | _[1] & /*xScale, filtered_data, xSubgroup, yScale, x_ticks_spacing, current_categories, iteration*/
      16777527 && (f = ke(
        /*filtered_data*/
        a[35]
      ), We(), t = vn(t, _, u, 1, a, f, n, i.parentNode, jn, K1, i, N1), Be());
    },
    i(a) {
      if (!l) {
        for (let _ = 0; _ < f.length; _ += 1)
          ne(t[_]);
        l = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ue(t[_]);
      l = !1;
    },
    d(a) {
      a && K(i);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function pv(e) {
  let t, n;
  return t = new ca({
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
      n || (ne(t.$$.fragment, i), n = !0);
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
  return t = new ca({
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
      n || (ne(t.$$.fragment, i), n = !0);
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
  return t = new ca({
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
      n || (ne(t.$$.fragment, i), n = !0);
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
  const _ = [vv, pv], c = [];
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
    t[23] && j1(t)
  );
  return {
    key: e,
    first: null,
    c() {
      n = Le(), l && l.c(), f = Le(), h && h.c(), u = Le(), this.first = n;
    },
    m(g, w) {
      Q(g, n, w), ~i && c[i].m(g, w), Q(g, f, w), h && h.m(g, w), Q(g, u, w), a = !0;
    },
    p(g, w) {
      t = g;
      let v = i;
      i = d(t), i === v ? ~i && c[i].p(t, w) : (l && (We(), ue(c[v], 1, 1, () => {
        c[v] = null;
      }), Be()), ~i ? (l = c[i], l ? l.p(t, w) : (l = c[i] = _[i](t), l.c()), ne(l, 1), l.m(f.parentNode, f)) : l = null), /*show_bar_labels*/
      t[23] ? h ? (h.p(t, w), w[0] & /*show_bar_labels*/
      8388608 && ne(h, 1)) : (h = j1(t), h.c(), ne(h, 1), h.m(u.parentNode, u)) : h && (We(), ue(h, 1, 1, () => {
        h = null;
      }), Be());
    },
    i(g) {
      a || (ne(l), ne(h), a = !0);
    },
    o(g) {
      ue(l), ue(h), a = !1;
    },
    d(g) {
      g && (K(n), K(f), K(u)), ~i && c[i].d(g), h && h.d(g);
    }
  };
}
function J1(e) {
  let t, n, i, l, f, u, a, _, c;
  function d(k) {
    e[84](k);
  }
  function h(k) {
    e[85](k);
  }
  function g(k) {
    e[86](k);
  }
  function w(k) {
    e[87](k);
  }
  function v(k) {
    e[88](k);
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
    margin: a0,
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
    e[53]), n = new l0({ props: S }), _t.push(() => It(n, "tooltip2_array_values", d)), _t.push(() => It(n, "m", h)), _t.push(() => It(n, "listener", g)), _t.push(() => It(n, "closestLabelX", w)), _t.push(() => It(n, "nextLabelX", v)), {
      c() {
        t = ze("g"), Ke(n.$$.fragment), p(t, "transform", _ = "translate(" + /*ticks_label_width*/
        (e[42] + /*label_height*/
        e[28] + 10) + " 10)");
      },
      m(k, T) {
        Q(k, t, T), Ze(n, t, null), c = !0;
      },
      p(k, T) {
        const A = {};
        T[0] & /*height*/
        128 && (A.height = /*height*/
        k[7]), T[0] & /*width*/
        1 && (A.width = /*width*/
        k[0]), T[1] & /*xScale*/
        1 && (A.x_scale = /*xScale*/
        k[31]), T[1] & /*yScale*/
        4 && (A.y_scale = /*yScale*/
        k[33]), T[1] & /*filtered_data*/
        16 && (A.filtered_data = /*filtered_data*/
        k[35]), T[0] & /*type*/
        4194304 && (A.type = /*type*/
        k[22]), T[0] & /*tooltip*/
        2097152 && (A.tooltip = /*tooltip*/
        k[21]), T[1] & /*labelPositions*/
        2097152 && (A.labelPositions = /*labelPositions*/
        k[52]), !i && T[1] & /*tooltip2_array_values*/
        262144 && (i = !0, A.tooltip2_array_values = /*tooltip2_array_values*/
        k[49], Rt(() => i = !1)), !l && T[1] & /*m*/
        524288 && (l = !0, A.m = /*m*/
        k[50], Rt(() => l = !1)), !f && T[1] & /*listener*/
        1048576 && (f = !0, A.listener = /*listener*/
        k[51], Rt(() => f = !1)), !u && T[1] & /*closestLabelX*/
        8388608 && (u = !0, A.closestLabelX = /*closestLabelX*/
        k[54], Rt(() => u = !1)), !a && T[1] & /*nextLabelX*/
        4194304 && (a = !0, A.nextLabelX = /*nextLabelX*/
        k[53], Rt(() => a = !1)), n.$set(A), (!c || T[0] & /*label_height*/
        268435456 | T[1] & /*ticks_label_width*/
        2048 && _ !== (_ = "translate(" + /*ticks_label_width*/
        (k[42] + /*label_height*/
        k[28] + 10) + " 10)")) && p(t, "transform", _);
      },
      i(k) {
        c || (ne(n.$$.fragment, k), c = !0);
      },
      o(k) {
        ue(n.$$.fragment, k), c = !1;
      },
      d(k) {
        k && K(t), je(n);
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
      margin: a0,
      buffer: Vo,
      tooltip_data: (
        /*tooltip2_array_values*/
        e[49]
      ),
      mode: (
        /*mode*/
        e[26]
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
      i[49]), l[0] & /*mode*/
      67108864 && (f.mode = /*mode*/
      i[26]), t.$set(f);
    },
    i(i) {
      n || (ne(t.$$.fragment, i), n = !0);
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
      n || (ne(t.$$.fragment, i), n = !0);
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
  let t, n, i, l, f, u, a = [], _ = new Bu(), c, d, h, g = [], w = new Bu(), v, S = !Number.isNaN(
    /*x_ticks_spacing*/
    e[55]
  ), k, T, A, z, U, O, E, B = (
    /*header*/
    e[2] && W1(e)
  ), G = (
    /*show_legend*/
    e[1] && B1(e)
  );
  u = new u0({
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
  let Y = ke(
    /*yScale*/
    e[33].ticks(
      /*yaxis_ticks*/
      e[16]
    )
  );
  const D = (C) => (
    /*tickValue*/
    C[105]
  );
  for (let C = 0; C < Y.length; C += 1) {
    let R = P1(e, Y, C), ce = D(R);
    _.set(ce, a[C] = Y1(ce, R));
  }
  d = new f0({
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
  let j = (
    /*tooltip*/
    e[21] === "vertical_line" && X1(e)
  ), se = ke(
    /*filtered_data*/
    e[35]
  );
  const de = (C) => (
    /*data*/
    C[27].id
  );
  for (let C = 0; C < se.length; C += 1) {
    let R = U1(e, se, C), ce = de(R);
    w.set(ce, g[C] = G1(ce, R));
  }
  let re = S && Z1(e), te = (
    /*tooltip*/
    e[21] === "vertical_line" && J1(e)
  ), J = (
    /*tooltip*/
    e[21] === "vertical_line" && /*closestLabelX*/
    e[54] !== 0 && /*nextLabelX*/
    e[53] !== 0 && Q1(e)
  ), W = (
    /*hovered_group*/
    e[46] && /*tooltip*/
    e[21] === "single" && V1(e)
  );
  return {
    c() {
      B && B.c(), t = ve(), n = _e("div"), G && G.c(), i = ve(), l = _e("div"), f = ze("svg"), Ke(u.$$.fragment);
      for (let C = 0; C < a.length; C += 1)
        a[C].c();
      c = Le(), Ke(d.$$.fragment), j && j.c(), h = Le();
      for (let C = 0; C < g.length; C += 1)
        g[C].c();
      v = Le(), re && re.c(), k = Le(), te && te.c(), T = ve(), J && J.c(), A = ve(), W && W.c(), p(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "flex-start"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(
        n,
        "margin-left",
        /*label_height*/
        e[28] + nr + "px"
      ), y(n, "margin-bottom", "0.25rem"), y(f, "color", "black"), p(
        f,
        "width",
        /*width*/
        e[0]
      ), p(
        f,
        "height",
        /*height*/
        e[7]
      ), p(l, "class", "chart"), y(l, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[89].call(l)
      ));
    },
    m(C, R) {
      B && B.m(C, R), Q(C, t, R), Q(C, n, R), G && G.m(n, null), Q(C, i, R), Q(C, l, R), q(l, f), Ze(u, f, null);
      for (let ce = 0; ce < a.length; ce += 1)
        a[ce] && a[ce].m(f, null);
      q(f, c), Ze(d, f, null), j && j.m(f, null), q(f, h);
      for (let ce = 0; ce < g.length; ce += 1)
        g[ce] && g[ce].m(f, null);
      q(f, v), re && re.m(f, null), q(f, k), te && te.m(f, null), q(l, T), J && J.m(l, null), q(l, A), W && W.m(l, null), z = rr(
        l,
        /*div1_elementresize_handler*/
        e[89].bind(l)
      ), U = !0, O || (E = ot(
        n,
        "mouseleave",
        /*mouseleave_handler*/
        e[77]
      ), O = !0);
    },
    p(C, R) {
      /*header*/
      C[2] ? B ? B.p(C, R) : (B = W1(C), B.c(), B.m(t.parentNode, t)) : B && (B.d(1), B = null), /*show_legend*/
      C[1] ? G ? G.p(C, R) : (G = B1(C), G.c(), G.m(n, null)) : G && (G.d(1), G = null), (!U || R[0] & /*label_height*/
      268435456) && y(
        n,
        "margin-left",
        /*label_height*/
        C[28] + nr + "px"
      );
      const ce = {};
      R[0] & /*width*/
      1 | R[1] & /*y_lines_spacing*/
      64 && (ce.axis_title_position = /*width*/
      (C[0] + /*y_lines_spacing*/
      C[37]) / 2), R[0] & /*x_label*/
      32768 && (ce.x_label = /*x_label*/
      C[15]), R[0] & /*font_size_xaxis*/
      2048 && (ce.font_size_xaxis = /*font_size_xaxis*/
      C[11]), R[0] & /*label_height_x_axis*/
      536870912 && (ce.label_height_x_axis = /*label_height_x_axis*/
      C[29]), R[0] & /*height*/
      128 && (ce.height = /*height*/
      C[7]), u.$set(ce), R[0] & /*yaxis_ticks, width, height, font_size_yticks*/
      327809 | R[1] & /*yScale, y_lines_spacing, format_number*/
      580 && (Y = ke(
        /*yScale*/
        C[33].ticks(
          /*yaxis_ticks*/
          C[16]
        )
      ), We(), a = vn(a, R, D, 1, C, Y, _, f, jn, Y1, c, P1), Be());
      const he = {};
      R[1] & /*yScale, ticks*/
      1028 && (he.axis_title_position = /*yScale*/
      (C[33](
        /*ticks*/
        C[41][0]
      ) + /*yScale*/
      C[33](
        /*ticks*/
        C[41][
          /*ticks*/
          C[41].length - 1
        ]
      )) / 2), R[0] & /*y_label*/
      1048576 && (he.y_label = /*y_label*/
      C[20]), R[0] & /*font_size_yaxis*/
      131072 && (he.font_size_yaxis = /*font_size_yaxis*/
      C[17]), R[0] & /*label_height*/
      268435456 && (he.label_height = /*label_height*/
      C[28]), d.$set(he), /*tooltip*/
      C[21] === "vertical_line" ? j ? j.p(C, R) : (j = X1(C), j.c(), j.m(f, h)) : j && (j.d(1), j = null), R[0] & /*mode*/
      67108864 | R[1] & /*filtered_data, xScale, xSubgroup, yScale, hover_legend, current_categories, hovered_y, hovered_x, hovered_group, hovered_color, hovered_x_cat, tooltip_axis_x*/
      258231 && (se = ke(
        /*filtered_data*/
        C[35]
      ), We(), g = vn(g, R, de, 1, C, se, w, f, jn, G1, v, U1), Be()), R[1] & /*x_ticks_spacing*/
      16777216 && (S = !Number.isNaN(
        /*x_ticks_spacing*/
        C[55]
      )), S ? re ? (re.p(C, R), R[1] & /*x_ticks_spacing*/
      16777216 && ne(re, 1)) : (re = Z1(C), re.c(), ne(re, 1), re.m(f, k)) : re && (We(), ue(re, 1, 1, () => {
        re = null;
      }), Be()), /*tooltip*/
      C[21] === "vertical_line" ? te ? (te.p(C, R), R[0] & /*tooltip*/
      2097152 && ne(te, 1)) : (te = J1(C), te.c(), ne(te, 1), te.m(f, null)) : te && (We(), ue(te, 1, 1, () => {
        te = null;
      }), Be()), (!U || R[0] & /*width*/
      1) && p(
        f,
        "width",
        /*width*/
        C[0]
      ), (!U || R[0] & /*height*/
      128) && p(
        f,
        "height",
        /*height*/
        C[7]
      ), /*tooltip*/
      C[21] === "vertical_line" && /*closestLabelX*/
      C[54] !== 0 && /*nextLabelX*/
      C[53] !== 0 ? J ? (J.p(C, R), R[0] & /*tooltip*/
      2097152 | R[1] & /*closestLabelX, nextLabelX*/
      12582912 && ne(J, 1)) : (J = Q1(C), J.c(), ne(J, 1), J.m(l, A)) : J && (We(), ue(J, 1, 1, () => {
        J = null;
      }), Be()), /*hovered_group*/
      C[46] && /*tooltip*/
      C[21] === "single" ? W ? (W.p(C, R), R[0] & /*tooltip*/
      2097152 | R[1] & /*hovered_group*/
      32768 && ne(W, 1)) : (W = V1(C), W.c(), ne(W, 1), W.m(l, null)) : W && (We(), ue(W, 1, 1, () => {
        W = null;
      }), Be());
    },
    i(C) {
      if (!U) {
        ne(u.$$.fragment, C);
        for (let R = 0; R < Y.length; R += 1)
          ne(a[R]);
        ne(d.$$.fragment, C);
        for (let R = 0; R < se.length; R += 1)
          ne(g[R]);
        ne(re), ne(te), ne(J), ne(W), U = !0;
      }
    },
    o(C) {
      ue(u.$$.fragment, C);
      for (let R = 0; R < a.length; R += 1)
        ue(a[R]);
      ue(d.$$.fragment, C);
      for (let R = 0; R < g.length; R += 1)
        ue(g[R]);
      ue(re), ue(te), ue(J), ue(W), U = !1;
    },
    d(C) {
      C && (K(t), K(n), K(i), K(l)), B && B.d(C), G && G.d(), je(u);
      for (let R = 0; R < a.length; R += 1)
        a[R].d();
      je(d), j && j.d();
      for (let R = 0; R < g.length; R += 1)
        g[R].d();
      re && re.d(), te && te.d(), J && J.d(), W && W.d(), z(), O = !1, E();
    }
  };
}
const xv = "bar", a0 = 30, Vo = 40;
let $o = 0.1, s0 = 10;
const nr = 15, Hu = 5;
function Mv(e, t, n) {
  let i, l, f, u, a, _, { data: c = [] } = t, { width: d = 800 } = t, { show_legend: h } = t, { header: g } = t, { title_align: w } = t, { title_color: v } = t, { title_font_size: S } = t, { title_font_weight: k } = t, { title_padding: T } = t, { height: A = 400 } = t, { dx: z = "0em" } = t, { dy: U = "0em" } = t, { rotation_xaxis: O = 0 } = t, { font_size_xaxis: E = 14 } = t, { font_size_xticks: B = 12 } = t, { dominant_baseline_x_axis: G = "middle" } = t, { text_anchor_x_axis: Y = "middle" } = t, { x_axis_type: D } = t, { x_label: j } = t, { yaxis_ticks: se = 6 } = t, { format_yaxis: de = ",.3r" } = t, { font_size_yaxis: re } = t, { font_size_yticks: te } = t, { format_tooltip: J = "" } = t, { y_label: W } = t, { tooltip_desc: C = "" } = t, { colorRange: R = [] } = t, { color_mapping: ce } = t, { annotation_dates: he = [] } = t, { legend_text: kt = [] } = t, { scale_x: Kt = "" } = t, { annotation_lines: Je = 2 } = t, { colours: Ue = [] } = t, { tooltip: $e = "vertical_line" } = t, { interval: at = "day" } = t, { type: Xe = "" } = t, { show_bar_labels: ae } = t, { position: me } = t, { colour_text: be } = t, { mode: V } = t;
  function Ce(X) {
    let Ut = [];
    Ut = Object.keys(St).filter((dt) => !X.includes(dt));
    for (let dt = 0; dt < X.length; dt++)
      n(34, St[X[dt]] = !0, St);
    for (let dt = 0; dt < Ut.length; dt++)
      n(34, St[Ut[dt]] = !1, St);
    return [St, Ut];
  }
  let ye = Vo, He = 20, Qe = Vo, et, qe = 10, H, oe, Me, Mt, Tt, Xt, gt, St = {}, $t, wt = [], zt, en, Nn, tn = A - 40, ln = 40;
  function Kn() {
    const Ut = document.createElement("canvas").getContext("2d"), dt = (qr, zi) => {
      Ut.font = `${zi}px Arial`;
      const { width: Gr } = Ut.measureText(qr), Zr = Ut.measureText("M").actualBoundingBoxAscent + Ut.measureText("M").actualBoundingBoxDescent + 1;
      return { width: Gr, height: Zr };
    }, _i = dt(Nn, te);
    n(42, ye = _i.width);
    const ur = dt(W, re);
    n(28, qe = ur.height);
    const ar = dt(a, B);
    Qe = ar.width, et = ar.height;
    const Si = dt("M", E);
    n(29, H = Si.height), n(69, He = aa(Qe, et, O)), n(73, tn = A - He - H - et - nr - Hu), n(37, ln = ye + qe + nr + Hu);
  }
  Zu(Kn);
  let hn, xn, on, Mn, yt, Un, cn, At = null, Tn = { x: 0, y: 0 }, Sn = !1, Jn, Qn = 0, zn = 0;
  const $ = (X) => n(43, oe = X), tt = (X) => n(34, St[X] = !St[X], St), Ct = () => n(43, oe = null);
  function gn(X) {
    hn = X, n(44, hn);
  }
  function fn(X) {
    xn = X, n(45, xn);
  }
  function Pn(X) {
    on = X, n(46, on);
  }
  function ii(X) {
    Mn = X, n(47, Mn);
  }
  function ai(X) {
    yt = X, n(38, yt);
  }
  function Xr(X) {
    Un = X, n(48, Un);
  }
  function An(X) {
    At = X, n(49, At);
  }
  function Cn(X) {
    Tn = X, n(50, Tn);
  }
  function Wi(X) {
    Sn = X, n(51, Sn);
  }
  function Bi(X) {
    zn = X, n(54, zn);
  }
  function fr(X) {
    Qn = X, n(53, Qn);
  }
  function si() {
    d = this.clientWidth, n(0, d);
  }
  return e.$$set = (X) => {
    "data" in X && n(27, c = X.data), "width" in X && n(0, d = X.width), "show_legend" in X && n(1, h = X.show_legend), "header" in X && n(2, g = X.header), "title_align" in X && n(3, w = X.title_align), "title_color" in X && n(4, v = X.title_color), "title_font_size" in X && n(5, S = X.title_font_size), "title_font_weight" in X && n(6, k = X.title_font_weight), "title_padding" in X && n(57, T = X.title_padding), "height" in X && n(7, A = X.height), "dx" in X && n(8, z = X.dx), "dy" in X && n(9, U = X.dy), "rotation_xaxis" in X && n(10, O = X.rotation_xaxis), "font_size_xaxis" in X && n(11, E = X.font_size_xaxis), "font_size_xticks" in X && n(12, B = X.font_size_xticks), "dominant_baseline_x_axis" in X && n(13, G = X.dominant_baseline_x_axis), "text_anchor_x_axis" in X && n(14, Y = X.text_anchor_x_axis), "x_axis_type" in X && n(58, D = X.x_axis_type), "x_label" in X && n(15, j = X.x_label), "yaxis_ticks" in X && n(16, se = X.yaxis_ticks), "format_yaxis" in X && n(59, de = X.format_yaxis), "font_size_yaxis" in X && n(17, re = X.font_size_yaxis), "font_size_yticks" in X && n(18, te = X.font_size_yticks), "format_tooltip" in X && n(19, J = X.format_tooltip), "y_label" in X && n(20, W = X.y_label), "tooltip_desc" in X && n(60, C = X.tooltip_desc), "colorRange" in X && n(61, R = X.colorRange), "color_mapping" in X && n(62, ce = X.color_mapping), "annotation_dates" in X && n(63, he = X.annotation_dates), "legend_text" in X && n(64, kt = X.legend_text), "scale_x" in X && n(65, Kt = X.scale_x), "annotation_lines" in X && n(66, Je = X.annotation_lines), "colours" in X && n(67, Ue = X.colours), "tooltip" in X && n(21, $e = X.tooltip), "interval" in X && n(68, at = X.interval), "type" in X && n(22, Xe = X.type), "show_bar_labels" in X && n(23, ae = X.show_bar_labels), "position" in X && n(24, me = X.position), "colour_text" in X && n(25, be = X.colour_text), "mode" in X && n(26, V = X.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*data, names*/
    1207959552 && (n(30, Me = [...new Set(c.map((X) => X.group))]), n(70, Mt = [...new Set(c.map((X) => X.x))]), n(71, $t = Array.from(new Map(c.map((X) => [X.group, X])).values())), n(34, St = Ce(Me)[0]), Ce(Me)[1]), e.$$.dirty[2] & /*include_legend*/
    512 && n(56, i = $t.filter((X) => X.include_legend !== !1)), e.$$.dirty[1] & /*categories*/
    8 && n(36, zt = Object.keys(St).filter((X) => St[X])), e.$$.dirty[0] & /*names*/
    1073741824 && n(36, zt = Me), e.$$.dirty[0] & /*data, mode, width*/
    201326593 | e.$$.dirty[1] & /*current_categories, filtered_data, y_lines_spacing*/
    112 | e.$$.dirty[2] & /*x, x_lines_spacing, scales*/
    3328 && (n(35, wt = c.filter(({ group: X }) => zt.includes(X))), V === "stacked" ? n(35, wt = Nw(wt)) : V === "percent" && n(35, wt = Uw(wt)), n(72, en = Dw(wt, Mt, zt, d, $o, V, ln, s0, tn)), n(31, Tt = en[0]), n(32, Xt = en[1]), en[2], n(33, gt = en[3])), e.$$.dirty[1] & /*format_yaxis*/
    268435456 && n(40, l = _n(de)), e.$$.dirty[0] & /*yaxis_ticks*/
    65536 | e.$$.dirty[1] & /*yScale*/
    4 && n(41, f = gt.ticks(se)), e.$$.dirty[1] & /*ticks, format_number*/
    1536) {
      let X = 0;
      f.forEach((Ut) => {
        const dt = l(Ut).toString();
        dt.length > X && (X = dt.length, Nn = dt);
      });
    }
    e.$$.dirty[1] & /*xScale*/
    1 && n(74, u = Tt.domain()), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    4096 && (a = u.reduce((X, Ut) => X.length > Ut.length ? X : Ut)), e.$$.dirty[0] & /*height, label_height_x_axis*/
    536871040 | e.$$.dirty[2] & /*x_ticks_label_rotation_buffer*/
    128 && n(55, _ = A - He - H - nr), e.$$.dirty[0] & /*label_height*/
    268435456, e.$$.dirty[1] & /*current_categories*/
    32 && (zt.length % 2 == 0 ? n(39, cn = zt.length / 2 - 0.5) : n(39, cn = Math.floor(zt.length / 2))), e.$$.dirty[1] & /*filtered_data, hovered_x_cat*/
    144 && wt.filter((X) => X.x === yt), e.$$.dirty[0] & /*names, mode*/
    1140850688 | e.$$.dirty[1] & /*filtered_data, xScale, xSubgroup, current_categories, iteration*/
    307 && n(52, Jn = wt.map((X, Ut) => Me.length === 1 ? Tt(X.x) + Xt(X.group) + Xt.bandwidth() / 2 : Ut % zt.length === 0 ? V === "grouped" ? Tt(X.x) + Xt(X.group) + Xt.bandwidth() * zt.length / 2 + Xt.bandwidth() * $o * cn : Tt(X.x) + Xt.bandwidth() / 2 : null).filter((X) => X !== null));
  }, [
    d,
    h,
    g,
    w,
    v,
    S,
    k,
    A,
    z,
    U,
    O,
    E,
    B,
    G,
    Y,
    j,
    se,
    re,
    te,
    J,
    W,
    $e,
    Xe,
    ae,
    me,
    be,
    V,
    c,
    qe,
    H,
    Me,
    Tt,
    Xt,
    gt,
    St,
    wt,
    zt,
    ln,
    yt,
    cn,
    l,
    f,
    ye,
    oe,
    hn,
    xn,
    on,
    Mn,
    Un,
    At,
    Tn,
    Sn,
    Jn,
    Qn,
    zn,
    _,
    i,
    T,
    D,
    de,
    C,
    R,
    ce,
    he,
    kt,
    Kt,
    Je,
    Ue,
    at,
    He,
    Mt,
    $t,
    en,
    tn,
    u,
    $,
    tt,
    Ct,
    gn,
    fn,
    Pn,
    ii,
    ai,
    Xr,
    An,
    Cn,
    Wi,
    Bi,
    fr,
    si
  ];
}
class Tv extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      Mv,
      kv,
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
function Sv(e) {
  let t, n, i, l, f;
  return {
    c() {
      t = ze("rect"), p(
        t,
        "x",
        /*$tweened_x*/
        e[13]
      ), p(
        t,
        "y",
        /*$tweened_y*/
        e[14]
      ), p(
        t,
        "width",
        /*$tweened_width*/
        e[15]
      ), p(
        t,
        "height",
        /*$tweened_height*/
        e[16]
      ), p(
        t,
        "fill",
        /*color*/
        e[5]
      ), y(t, "transition", "opacity 0.5s ease"), p(t, "opacity", n = /*hovered_group*/
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
      Q(u, t, a), l || (f = [
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
      8192 && p(
        t,
        "x",
        /*$tweened_x*/
        u[13]
      ), a & /*$tweened_y*/
      16384 && p(
        t,
        "y",
        /*$tweened_y*/
        u[14]
      ), a & /*$tweened_width*/
      32768 && p(
        t,
        "width",
        /*$tweened_width*/
        u[15]
      ), a & /*$tweened_height*/
      65536 && p(
        t,
        "height",
        /*$tweened_height*/
        u[16]
      ), a & /*color*/
      32 && p(
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
      )) && p(t, "opacity", n);
    },
    i(u) {
      i || it(() => {
        i = Fi(t, Zt, { x: -200, duration: 1e3, delay: 50 }), i.start();
      });
    },
    o: Pe,
    d(u) {
      u && K(t), l = !1, Ht(f);
    }
  };
}
function zv(e, t, n) {
  let i, l, f, u, { x: a } = t, { y: _ } = t, { width: c } = t, { height: d } = t, { color: h } = t, { tweenOptions: g } = t, { x_start: w } = t, { x_end: v } = t, { y_value: S } = t, { opacity: k } = t, { group: T } = t, { hover_legend: A } = t, { current_categories: z } = t, { hovered_x_start: U } = t, { hovered_x_end: O } = t, { hovered_y: E } = t, { hovered_group: B } = t, { hovered_color: G } = t, Y = Nt(a, g == null ? void 0 : g.x);
  vt(e, Y, (J) => n(13, i = J));
  let D = Nt(_, g == null ? void 0 : g.y);
  vt(e, D, (J) => n(14, l = J));
  let j = Nt(c, g == null ? void 0 : g.width);
  vt(e, j, (J) => n(15, f = J));
  let se = Nt(d, g == null ? void 0 : g.height);
  vt(e, se, (J) => n(16, u = J));
  function de(J, W, C, R, ce, he) {
    n(2, E = W), n(0, U = C), n(1, O = R), n(3, B = ce), n(4, G = he);
  }
  const re = (J) => de(J, S, w, v, T, h), te = () => {
    n(2, E = null), n(0, U = null), n(1, O = null), n(3, B = null), n(4, G = null);
  };
  return e.$$set = (J) => {
    "x" in J && n(22, a = J.x), "y" in J && n(23, _ = J.y), "width" in J && n(24, c = J.width), "height" in J && n(25, d = J.height), "color" in J && n(5, h = J.color), "tweenOptions" in J && n(26, g = J.tweenOptions), "x_start" in J && n(6, w = J.x_start), "x_end" in J && n(7, v = J.x_end), "y_value" in J && n(8, S = J.y_value), "opacity" in J && n(9, k = J.opacity), "group" in J && n(10, T = J.group), "hover_legend" in J && n(11, A = J.hover_legend), "current_categories" in J && n(12, z = J.current_categories), "hovered_x_start" in J && n(0, U = J.hovered_x_start), "hovered_x_end" in J && n(1, O = J.hovered_x_end), "hovered_y" in J && n(2, E = J.hovered_y), "hovered_group" in J && n(3, B = J.hovered_group), "hovered_color" in J && n(4, G = J.hovered_color);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions*/
    71303168 && Y.set(a, g == null ? void 0 : g.x), e.$$.dirty & /*y, tweenOptions*/
    75497472 && D.set(_, g == null ? void 0 : g.y), e.$$.dirty & /*width, tweenOptions*/
    83886080 && j.set(c, g == null ? void 0 : g.width), e.$$.dirty & /*height, tweenOptions*/
    100663296 && se.set(d, g == null ? void 0 : g.height);
  }, [
    U,
    O,
    E,
    B,
    G,
    h,
    w,
    v,
    S,
    k,
    T,
    A,
    z,
    i,
    l,
    f,
    u,
    Y,
    D,
    j,
    se,
    de,
    a,
    _,
    c,
    d,
    g,
    re,
    te
  ];
}
class Av extends ct {
  constructor(t) {
    super(), ht(this, t, zv, Sv, ut, {
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
  ), a, _, c, d, h, g, w, v = (
    /*tooltip_df*/
    e[5].group + ""
  ), S, k, T, A, z = (
    /*tooltip_df*/
    e[5].y + ""
  ), U, O, E, B, G, Y, D;
  return {
    c() {
      t = _e("div"), n = _e("div"), l = Ae(i), f = Ae(" - "), a = Ae(u), _ = ve(), c = _e("div"), d = _e("div"), h = _e("span"), g = ve(), w = _e("div"), S = Ae(v), k = Ae(":"), T = ve(), A = _e("div"), U = Ae(z), O = ve(), E = _e("div"), B = ve(), G = _e("div"), y(
        h,
        "background",
        /*tooltip_df*/
        e[5].color
      ), y(h, "width", "9px"), y(h, "height", "9px"), y(h, "border-radius", "50%"), y(h, "margin", "3px"), y(h, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(d, "display", "flex"), y(A, "font-weight", "bold"), y(c, "padding", "5px"), y(c, "font-size", "14px"), y(c, "display", "flex"), y(c, "flex-direction", "row"), y(c, "justify-content", "space-between"), y(c, "gap", "10px"), y(E, "position", "absolute"), y(E, "bottom", "-5px"), y(E, "left", "50%"), y(E, "transform", "translateX(-50%)"), y(E, "width", "0"), y(E, "height", "0"), y(E, "border-left", "5px solid transparent"), y(E, "border-right", "5px solid transparent"), y(E, "border-top", "5px solid #ccc"), y(G, "position", "absolute"), y(G, "bottom", "-4px"), y(G, "left", "50%"), y(G, "transform", "translateX(-50%)"), y(G, "width", "0"), y(G, "height", "0"), y(G, "border-left", "4px solid transparent"), y(G, "border-right", "4px solid transparent"), y(G, "border-top", "4px solid #fff"), p(t, "class", "tooltip-bars"), y(t, "transition", "all 500ms"), y(t, "position", "absolute"), y(
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
    m(j, se) {
      Q(j, t, se), q(t, n), q(n, l), q(n, f), q(n, a), q(t, _), q(t, c), q(c, d), q(d, h), q(c, g), q(c, w), q(w, S), q(w, k), q(c, T), q(c, A), q(A, U), q(t, O), q(t, E), q(t, B), q(t, G), D = !0;
    },
    p(j, [se]) {
      (!D || se & /*tooltip_df*/
      32) && i !== (i = /*tooltip_df*/
      j[5].x_start + "") && Oe(l, i), (!D || se & /*tooltip_df*/
      32) && u !== (u = /*tooltip_df*/
      j[5].x_end + "") && Oe(a, u), (!D || se & /*tooltip_df*/
      32) && y(
        h,
        "background",
        /*tooltip_df*/
        j[5].color
      ), (!D || se & /*tooltip_df*/
      32) && v !== (v = /*tooltip_df*/
      j[5].group + "") && Oe(S, v), (!D || se & /*tooltip_df*/
      32) && z !== (z = /*tooltip_df*/
      j[5].y + "") && Oe(U, z), (!D || se & /*yScale, hovered_y*/
      18) && y(
        t,
        "top",
        /*yScale*/
        j[1](
          /*hovered_y*/
          j[4]
        ) - 5 + "px"
      ), (!D || se & /*xScale, hovered_x_end, hovered_x_start*/
      13) && y(
        t,
        "left",
        /*xScale*/
        j[0](
          /*hovered_x_end*/
          j[3]
        ) - /*xScale*/
        (j[0](
          /*hovered_x_end*/
          j[3]
        ) - /*xScale*/
        j[0](
          /*hovered_x_start*/
          j[2]
        )) / 2 + "px"
      );
    },
    i(j) {
      D || (it(() => {
        D && (Y || (Y = Pt(t, Zt, { duration: 1e3 }, !0)), Y.run(1));
      }), D = !0);
    },
    o(j) {
      Y || (Y = Pt(t, Zt, { duration: 1e3 }, !1)), Y.run(0), D = !1;
    },
    d(j) {
      j && K(t), j && Y && Y.end();
    }
  };
}
function Lv(e, t, n) {
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
class Ev extends ct {
  constructor(t) {
    super(), ht(this, t, Lv, Cv, ut, {
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
      t = _e("div"), n = Ae(
        /*header*/
        e[2]
      ), p(t, "class", "header"), y(
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
      Q(i, t, l), q(t, n);
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
      i && K(t);
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
      Q(l, t, f);
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
      l && K(t), kn(i, l);
    }
  };
}
function lc(e) {
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
      ), y(n, "width", "8px"), y(n, "height", "8px"), y(n, "display", "inline-block"), y(n, "border-radius", "50%"), y(n, "border", "1px solid rgba(0, 0, 0, 0.5)"), p(t, "style", a = /*hover_legend*/
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
      Q(g, t, w), q(t, n), q(t, i), q(t, f), q(t, u), _ || (c = [
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
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;") && p(t, "style", a);
    },
    d(g) {
      g && K(t), _ = !1, Ht(c);
    }
  };
}
function oc(e, t) {
  let n, i, l;
  return i = new o0({
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
      line_generator_space: Er,
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
      Q(f, n, u), Ze(i, f, u), l = !0;
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
      l || (ne(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && K(n), je(i, f);
    }
  };
}
function fc(e, t) {
  let n, i, l;
  return i = new ha({
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
      space_between_ticks_and_gridline: Yu,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[38]
      ),
      height: (
        /*height*/
        t[8]
      ),
      line_generator_space: Er,
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
      Q(f, n, u), Ze(i, f, u), l = !0;
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
      l || (ne(i.$$.fragment, f), l = !0);
    },
    o(f) {
      ue(i.$$.fragment, f), l = !1;
    },
    d(f) {
      f && K(n), je(i, f);
    }
  };
}
function uc(e, t) {
  let n, i, l, f, u, a, _, c;
  function d(k) {
    t[69](k);
  }
  function h(k) {
    t[70](k);
  }
  function g(k) {
    t[71](k);
  }
  function w(k) {
    t[72](k);
  }
  function v(k) {
    t[73](k);
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
    t[32]), i = new Av({ props: S }), _t.push(() => It(i, "hovered_x_start", d)), _t.push(() => It(i, "hovered_x_end", h)), _t.push(() => It(i, "hovered_group", g)), _t.push(() => It(i, "hovered_color", w)), _t.push(() => It(i, "hovered_y", v)), {
      key: e,
      first: null,
      c() {
        n = Le(), Ke(i.$$.fragment), this.first = n;
      },
      m(k, T) {
        Q(k, n, T), Ze(i, k, T), c = !0;
      },
      p(k, T) {
        t = k;
        const A = {};
        T[0] & /*filtered_data*/
        268435456 && (A.group = /*group*/
        t[90]), T[0] & /*xScale, filtered_data*/
        301989888 && (A.x = /*xScale*/
        t[25](
          /*x_start*/
          t[86]
        )), T[0] & /*yScale, filtered_data*/
        335544320 && (A.y = /*yScale*/
        t[26](
          /*y*/
          t[88]
        )), T[0] & /*filtered_data*/
        268435456 && (A.x_start = /*x_start*/
        t[86]), T[0] & /*filtered_data*/
        268435456 && (A.x_end = /*x_end*/
        t[87]), T[0] & /*filtered_data*/
        268435456 && (A.y_value = /*y*/
        t[88]), T[0] & /*xScale, filtered_data*/
        301989888 && (A.width = /*xScale*/
        t[25](
          /*x_end*/
          t[87]
        ) - /*xScale*/
        t[25](
          /*x_start*/
          t[86]
        )), T[0] & /*yScale, filtered_data*/
        335544320 && (A.height = /*yScale*/
        t[26](0) - /*yScale*/
        t[26](
          /*y*/
          t[88]
        )), T[0] & /*filtered_data*/
        268435456 && (A.color = /*colors*/
        t[89]), T[1] & /*hover_legend*/
        1 && (A.hover_legend = /*hover_legend*/
        t[31]), T[0] & /*filtered_data*/
        268435456 && (A.opacity = /*opacity*/
        t[91]), T[0] & /*current_categories*/
        536870912 && (A.current_categories = /*current_categories*/
        t[29]), !l && T[1] & /*hovered_x_start*/
        4 && (l = !0, A.hovered_x_start = /*hovered_x_start*/
        t[33], Rt(() => l = !1)), !f && T[1] & /*hovered_x_end*/
        8 && (f = !0, A.hovered_x_end = /*hovered_x_end*/
        t[34], Rt(() => f = !1)), !u && T[1] & /*hovered_group*/
        16 && (u = !0, A.hovered_group = /*hovered_group*/
        t[35], Rt(() => u = !1)), !a && T[1] & /*hovered_color*/
        32 && (a = !0, A.hovered_color = /*hovered_color*/
        t[36], Rt(() => a = !1)), !_ && T[1] & /*hovered_y*/
        2 && (_ = !0, A.hovered_y = /*hovered_y*/
        t[32], Rt(() => _ = !1)), i.$set(A);
      },
      i(k) {
        c || (ne(i.$$.fragment, k), c = !0);
      },
      o(k) {
        ue(i.$$.fragment, k), c = !1;
      },
      d(k) {
        k && K(n), je(i, k);
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
      n || (ne(t.$$.fragment, i), n = !0);
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
  let t, n, i, l, f, u = [], a = /* @__PURE__ */ new Map(), _, c, d, h, g = [], w = /* @__PURE__ */ new Map(), v, S, k, T = [], A = /* @__PURE__ */ new Map(), z, U, O, E, B, G = (
    /*header*/
    e[2] && ic(e)
  ), Y = (
    /*show_legend*/
    e[1] && rc(e)
  ), D = ke(
    /*xScale*/
    e[25].ticks(
      /*xaxis_ticks*/
      e[9]
    )
  );
  const j = (W) => (
    /*tickValue*/
    W[95].toString()
  );
  for (let W = 0; W < D.length; W += 1) {
    let C = tc(e, D, W), R = j(C);
    a.set(R, u[W] = oc(R, C));
  }
  let se = ke(
    /*yScale*/
    e[26].ticks(
      /*yaxis_ticks*/
      e[18]
    )
  );
  const de = (W) => (
    /*tickValue*/
    W[95]
  );
  for (let W = 0; W < se.length; W += 1) {
    let C = ec(e, se, W), R = de(C);
    w.set(R, g[W] = fc(R, C));
  }
  let re = ke(
    /*filtered_data*/
    e[28]
  );
  const te = (W) => (
    /*id*/
    W[92]
  );
  for (let W = 0; W < re.length; W += 1) {
    let C = $1(e, re, W), R = te(C);
    A.set(R, T[W] = uc(R, C));
  }
  let J = (
    /*hovered_group*/
    e[35] && ac(e)
  );
  return {
    c() {
      G && G.c(), t = ve(), n = _e("div"), Y && Y.c(), i = ve(), l = _e("div"), f = ze("svg");
      for (let W = 0; W < u.length; W += 1)
        u[W].c();
      _ = ze("text"), c = Ae(
        /*x_label*/
        e[17]
      );
      for (let W = 0; W < g.length; W += 1)
        g[W].c();
      v = ze("text"), S = Ae(
        /*y_label*/
        e[21]
      );
      for (let W = 0; W < T.length; W += 1)
        T[W].c();
      z = ve(), J && J.c(), p(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "center"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(n, "margin-bottom", "0.25rem"), y(
        _,
        "font-size",
        /*font_size_xaxis*/
        e[13] + "px"
      ), p(_, "x", d = /*width*/
      (e[0] - Er - /*y_lines_spacing*/
      e[38]) / 2), p(_, "y", h = /*height*/
      e[8] - /*label_height_x_axis*/
      e[24]), y(v, "text-anchor", "middle"), y(
        v,
        "font-size",
        /*font_size_yaxis*/
        e[19] + "px"
      ), y(v, "font-family", "Arial, sans-serif"), p(v, "transform", k = `translate(${/*label_height*/
      e[23]},${/*x_lines_spacing*/
      (e[37] + Er) / 2}) rotate(-90)`), p(
        f,
        "width",
        /*width*/
        e[0]
      ), p(
        f,
        "height",
        /*height*/
        e[8]
      ), p(l, "class", "chart"), y(l, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[74].call(l)
      ));
    },
    m(W, C) {
      G && G.m(W, C), Q(W, t, C), Q(W, n, C), Y && Y.m(n, null), Q(W, i, C), Q(W, l, C), q(l, f);
      for (let R = 0; R < u.length; R += 1)
        u[R] && u[R].m(f, null);
      q(f, _), q(_, c);
      for (let R = 0; R < g.length; R += 1)
        g[R] && g[R].m(f, null);
      q(f, v), q(v, S);
      for (let R = 0; R < T.length; R += 1)
        T[R] && T[R].m(f, null);
      q(l, z), J && J.m(l, null), U = rr(
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
    p(W, C) {
      /*header*/
      W[2] ? G ? G.p(W, C) : (G = ic(W), G.c(), G.m(t.parentNode, t)) : G && (G.d(1), G = null), /*show_legend*/
      W[1] ? Y ? Y.p(W, C) : (Y = rc(W), Y.c(), Y.m(n, null)) : Y && (Y.d(1), Y = null), C[0] & /*xScale, xaxis_ticks, width, rotation_xaxis, font_size_xticks, dx, dy, dominant_baseline_x_axis, text_anchor_x_axis*/
      33676801 | C[1] & /*x_ticks_spacing, x_lines_spacing, format_x_axis*/
      832 && (D = ke(
        /*xScale*/
        W[25].ticks(
          /*xaxis_ticks*/
          W[9]
        )
      ), We(), u = vn(u, C, j, 1, W, D, a, f, jn, oc, _, tc), Be()), (!O || C[0] & /*x_label*/
      131072) && Oe(
        c,
        /*x_label*/
        W[17]
      ), (!O || C[0] & /*font_size_xaxis*/
      8192) && y(
        _,
        "font-size",
        /*font_size_xaxis*/
        W[13] + "px"
      ), (!O || C[0] & /*width*/
      1 | C[1] & /*y_lines_spacing*/
      128 && d !== (d = /*width*/
      (W[0] - Er - /*y_lines_spacing*/
      W[38]) / 2)) && p(_, "x", d), (!O || C[0] & /*height, label_height_x_axis*/
      16777472 && h !== (h = /*height*/
      W[8] - /*label_height_x_axis*/
      W[24])) && p(_, "y", h), C[0] & /*yScale, yaxis_ticks, width, height, format_number, font_size_yticks*/
      1142161665 | C[1] & /*y_lines_spacing*/
      128 && (se = ke(
        /*yScale*/
        W[26].ticks(
          /*yaxis_ticks*/
          W[18]
        )
      ), We(), g = vn(g, C, de, 1, W, se, w, f, jn, fc, v, ec), Be()), (!O || C[0] & /*y_label*/
      2097152) && Oe(
        S,
        /*y_label*/
        W[21]
      ), (!O || C[0] & /*font_size_yaxis*/
      524288) && y(
        v,
        "font-size",
        /*font_size_yaxis*/
        W[19] + "px"
      ), (!O || C[0] & /*label_height*/
      8388608 | C[1] & /*x_lines_spacing*/
      64 && k !== (k = `translate(${/*label_height*/
      W[23]},${/*x_lines_spacing*/
      (W[37] + Er) / 2}) rotate(-90)`)) && p(v, "transform", k), C[0] & /*filtered_data, xScale, yScale, current_categories*/
      905969664 | C[1] & /*hover_legend, hovered_x_start, hovered_x_end, hovered_group, hovered_color, hovered_y*/
      63 && (re = ke(
        /*filtered_data*/
        W[28]
      ), We(), T = vn(T, C, te, 1, W, re, A, f, jn, uc, null, $1), Be()), (!O || C[0] & /*width*/
      1) && p(
        f,
        "width",
        /*width*/
        W[0]
      ), (!O || C[0] & /*height*/
      256) && p(
        f,
        "height",
        /*height*/
        W[8]
      ), /*hovered_group*/
      W[35] ? J ? (J.p(W, C), C[1] & /*hovered_group*/
      16 && ne(J, 1)) : (J = ac(W), J.c(), ne(J, 1), J.m(l, null)) : J && (We(), ue(J, 1, 1, () => {
        J = null;
      }), Be());
    },
    i(W) {
      if (!O) {
        for (let C = 0; C < D.length; C += 1)
          ne(u[C]);
        for (let C = 0; C < se.length; C += 1)
          ne(g[C]);
        for (let C = 0; C < re.length; C += 1)
          ne(T[C]);
        ne(J), O = !0;
      }
    },
    o(W) {
      for (let C = 0; C < u.length; C += 1)
        ue(u[C]);
      for (let C = 0; C < g.length; C += 1)
        ue(g[C]);
      for (let C = 0; C < T.length; C += 1)
        ue(T[C]);
      ue(J), O = !1;
    },
    d(W) {
      W && (K(t), K(n), K(i), K(l)), G && G.d(W), Y && Y.d();
      for (let C = 0; C < u.length; C += 1)
        u[C].d();
      for (let C = 0; C < g.length; C += 1)
        g[C].d();
      for (let C = 0; C < T.length; C += 1)
        T[C].d();
      J && J.d(), U(), E = !1, B();
    }
  };
}
const Iv = 30, Tu = 40;
let Er = 20;
const Su = 15, Yu = 5;
function Ov(e, t, n) {
  let i, l, f, u, { data: a = [] } = t, { width: _ = 800 } = t, { show_legend: c } = t, { header: d } = t, { title_align: h } = t, { title_color: g } = t, { title_font_size: w } = t, { title_font_weight: v } = t, { title_padding: S } = t, { height: k = 400 } = t, { xaxis_ticks: T = 6 } = t, { format_xaxis: A } = t, { dx: z = "0em" } = t, { dy: U = "0em" } = t, { rotation_xaxis: O = 0 } = t, { font_size_xaxis: E = 14 } = t, { font_size_xticks: B = 12 } = t, { dominant_baseline_x_axis: G = "middle" } = t, { text_anchor_x_axis: Y = "middle" } = t, { x_axis_type: D } = t, { x_label: j } = t, { yaxis_ticks: se = 6 } = t, { format_yaxis: de = ",.3r" } = t, { font_size_yaxis: re } = t, { font_size_yticks: te } = t, { format_tooltip: J = "" } = t, { y_label: W } = t, { tooltip_desc: C = "" } = t, { colorRange: R = [] } = t, { color_mapping: ce } = t, { annotation_dates: he = [] } = t, { legend_text: kt = [] } = t, { scale_x: Kt = "" } = t, { annotation_lines: Je = 2 } = t, { colours: Ue = [] } = t, { tooltip: $e = "vertical_line" } = t, { interval: at = "day" } = t, { type: Xe = "" } = t, { show_bar_labels: ae } = t, { position: me } = t, { colour_text: be } = t, { mode: V } = t;
  function Ce($) {
    let tt = [];
    tt = Object.keys(gt).filter((Ct) => !$.includes(Ct));
    for (let Ct = 0; Ct < $.length; Ct++)
      n(27, gt[$[Ct]] = !0, gt);
    for (let Ct = 0; Ct < tt.length; Ct++)
      n(27, gt[tt[Ct]] = !1, gt);
    return [gt, tt];
  }
  let ye = Tu, He = 20, Qe = Tu, et, qe = 10, H, oe, Me, Mt, Tt, Xt, gt = {}, St, $t, wt, zt, en, Nn = [], tn, ln, Kn = k - 40, hn = 40;
  function xn() {
    let tt = document.createElement("canvas").getContext("2d");
    tt.font = `${te}px Arial`, n(60, ye = tt.measureText(ln).width), tt.font = `${re}px Arial`, tt.measureText(W).width, n(23, qe = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1), tt.font = `${B}px Arial`, Qe = tt.measureText(u).width, et = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1, tt.font = `${E}px Arial`, n(24, H = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1), n(61, He = aa(Qe, et, O)), n(37, Kn = k - He - H - et - Su - Yu), n(38, hn = ye + qe + Su + Yu);
  }
  Zu(xn);
  let on, Mn;
  const yt = ($) => n(31, oe = $), Un = ($) => n(27, gt[$] = !gt[$], gt), cn = () => n(31, oe = null);
  function At($) {
    $t = $, n(33, $t);
  }
  function Tn($) {
    wt = $, n(34, wt);
  }
  function Sn($) {
    zt = $, n(35, zt);
  }
  function Jn($) {
    en = $, n(36, en);
  }
  function Qn($) {
    St = $, n(32, St);
  }
  function zn() {
    _ = this.clientWidth, n(0, _);
  }
  return e.$$set = ($) => {
    "data" in $ && n(41, a = $.data), "width" in $ && n(0, _ = $.width), "show_legend" in $ && n(1, c = $.show_legend), "header" in $ && n(2, d = $.header), "title_align" in $ && n(3, h = $.title_align), "title_color" in $ && n(4, g = $.title_color), "title_font_size" in $ && n(5, w = $.title_font_size), "title_font_weight" in $ && n(6, v = $.title_font_weight), "title_padding" in $ && n(7, S = $.title_padding), "height" in $ && n(8, k = $.height), "xaxis_ticks" in $ && n(9, T = $.xaxis_ticks), "format_xaxis" in $ && n(42, A = $.format_xaxis), "dx" in $ && n(10, z = $.dx), "dy" in $ && n(11, U = $.dy), "rotation_xaxis" in $ && n(12, O = $.rotation_xaxis), "font_size_xaxis" in $ && n(13, E = $.font_size_xaxis), "font_size_xticks" in $ && n(14, B = $.font_size_xticks), "dominant_baseline_x_axis" in $ && n(15, G = $.dominant_baseline_x_axis), "text_anchor_x_axis" in $ && n(16, Y = $.text_anchor_x_axis), "x_axis_type" in $ && n(43, D = $.x_axis_type), "x_label" in $ && n(17, j = $.x_label), "yaxis_ticks" in $ && n(18, se = $.yaxis_ticks), "format_yaxis" in $ && n(44, de = $.format_yaxis), "font_size_yaxis" in $ && n(19, re = $.font_size_yaxis), "font_size_yticks" in $ && n(20, te = $.font_size_yticks), "format_tooltip" in $ && n(45, J = $.format_tooltip), "y_label" in $ && n(21, W = $.y_label), "tooltip_desc" in $ && n(46, C = $.tooltip_desc), "colorRange" in $ && n(47, R = $.colorRange), "color_mapping" in $ && n(22, ce = $.color_mapping), "annotation_dates" in $ && n(48, he = $.annotation_dates), "legend_text" in $ && n(49, kt = $.legend_text), "scale_x" in $ && n(50, Kt = $.scale_x), "annotation_lines" in $ && n(51, Je = $.annotation_lines), "colours" in $ && n(52, Ue = $.colours), "tooltip" in $ && n(53, $e = $.tooltip), "interval" in $ && n(54, at = $.interval), "type" in $ && n(55, Xe = $.type), "show_bar_labels" in $ && n(56, ae = $.show_bar_labels), "position" in $ && n(57, me = $.position), "colour_text" in $ && n(58, be = $.colour_text), "mode" in $ && n(59, V = $.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty[1] & /*data*/
    1024 | e.$$.dirty[2] & /*names*/
    1 && (n(62, Me = [...new Set(a.map(($) => $.group))]), n(27, gt = Ce(Me)[0]), Ce(Me)[1]), e.$$.dirty[0] & /*categories*/
    134217728 && n(29, tn = Object.keys(gt).filter(($) => gt[$])), e.$$.dirty[2] & /*names*/
    1 && n(29, tn = Me), e.$$.dirty[1] & /*format_yaxis*/
    8192 && n(30, i = _n(de)), e.$$.dirty[0] & /*current_categories, filtered_data, width, height*/
    805306625 | e.$$.dirty[1] & /*data, x_ticks_label_rotation_buffer, ticks_label_width*/
    1610613760 | e.$$.dirty[2] & /*scales*/
    2 && (n(28, Nn = a.filter(({ group: $ }) => tn.includes($))), n(63, Xt = Pw(Nn, _, k, Tu, Iv, He, ye + 10)), n(25, Mt = Xt[0]), n(26, Tt = Xt[1])), e.$$.dirty[0] & /*yScale, yaxis_ticks*/
    67371008 && n(65, l = Tt.ticks(se)), e.$$.dirty[0] & /*format_number*/
    1073741824 | e.$$.dirty[2] & /*ticks*/
    8) {
      let $ = 0;
      l.forEach((tt) => {
        const Ct = i(tt).toString();
        Ct.length > $ && ($ = Ct.length, ln = Ct);
      });
    }
    e.$$.dirty[0] & /*height, label_height_x_axis*/
    16777472 | e.$$.dirty[1] & /*x_ticks_label_rotation_buffer*/
    1073741824 && n(40, f = k - He - H - Su), e.$$.dirty[0] & /*label_height*/
    8388608, e.$$.dirty[0] & /*xScale, xaxis_ticks*/
    33554944 | e.$$.dirty[1] & /*format_xaxis*/
    2048 && (n(39, on = _n(A)), n(64, Mn = Mt.ticks(T).map(($) => _n($)))), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    4 && (u = Mn.reduce(($, tt) => $.length > tt.length ? $ : tt));
  }, [
    _,
    c,
    d,
    h,
    g,
    w,
    v,
    S,
    k,
    T,
    z,
    U,
    O,
    E,
    B,
    G,
    Y,
    j,
    se,
    re,
    te,
    W,
    ce,
    qe,
    H,
    Mt,
    Tt,
    gt,
    Nn,
    tn,
    i,
    oe,
    St,
    $t,
    wt,
    zt,
    en,
    Kn,
    hn,
    on,
    f,
    a,
    A,
    D,
    de,
    J,
    C,
    R,
    he,
    kt,
    Kt,
    Je,
    Ue,
    $e,
    at,
    Xe,
    ae,
    me,
    be,
    V,
    ye,
    He,
    Me,
    Xt,
    Mn,
    l,
    yt,
    Un,
    cn,
    At,
    Tn,
    Sn,
    Jn,
    Qn,
    zn
  ];
}
class Dv extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      Ov,
      Rv,
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
  const _ = (c) => (
    /*input*/
    c[6].id
  );
  for (let c = 0; c < a.length; c += 1) {
    let d = sc(e, a, c), h = _(d);
    l.set(h, i[c] = hc(h, d));
  }
  return {
    c() {
      t = _e("div"), n = _e("div");
      for (let c = 0; c < i.length; c += 1)
        i[c].c();
      p(n, "class", "chart-grid svelte-xvrzmb"), y(n, "grid-template-columns", "repeat(" + /*debouncedListInput*/
      (e[0][0].facet_col ? (
        /*debouncedListInput*/
        e[0][0].facet_col
      ) : 1) + ", 1fr)"), y(n, "grid-template-rows", "repeat(" + /*debouncedListInput*/
      (e[0][0].facet_row ? (
        /*debouncedListInput*/
        e[0][0].facet_row
      ) : 1) + ", auto)"), p(t, "class", "chart-container"), y(t, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[3].call(t)
      ));
    },
    m(c, d) {
      Q(c, t, d), q(t, n);
      for (let h = 0; h < i.length; h += 1)
        i[h] && i[h].m(n, null);
      f = rr(
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
      ), We(), i = vn(i, d, _, 1, c, a, l, n, jn, hc, null, sc), Be()), (!u || d & /*debouncedListInput*/
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
          ne(i[d]);
        u = !0;
      }
    },
    o(c) {
      for (let d = 0; d < i.length; d += 1)
        ue(i[d]);
      u = !1;
    },
    d(c) {
      c && K(t);
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
      n || (ne(t.$$.fragment, i), n = !0);
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
      n || (ne(t.$$.fragment, i), n = !0);
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
      n || (ne(t.$$.fragment, i), n = !0);
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
      Q(d, n, h), ~i && _[i].m(n, null), q(n, f), u = !0;
    },
    p(d, h) {
      t = d;
      let g = i;
      i = c(t), i === g ? ~i && _[i].p(t, h) : (l && (We(), ue(_[g], 1, 1, () => {
        _[g] = null;
      }), Be()), ~i ? (l = _[i], l ? l.p(t, h) : (l = _[i] = a[i](t), l.c()), ne(l, 1), l.m(n, f)) : l = null);
    },
    i(d) {
      u || (ne(l), u = !0);
    },
    o(d) {
      ue(l), u = !1;
    },
    d(d) {
      d && K(n), ~i && _[i].d();
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
      i && i.m(l, f), Q(l, t, f), n = !0;
    },
    p(l, [f]) {
      /*debouncedListInput*/
      l[0].length > 0 ? i ? (i.p(l, f), f & /*debouncedListInput*/
      1 && ne(i, 1)) : (i = _c(l), i.c(), ne(i, 1), i.m(t.parentNode, t)) : i && (We(), ue(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(l) {
      n || (ne(i), n = !0);
    },
    o(l) {
      ue(i), n = !1;
    },
    d(l) {
      l && K(t), i && i.d(l);
    }
  };
}
function Bv(e, t, n) {
  let i = window.innerWidth, { list_input: l = [] } = t, f = [];
  const u = Qc.debounce(
    (_) => {
      n(0, f = [..._]);
    },
    20
  );
  ju(() => {
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
class Hv extends ct {
  constructor(t) {
    super(), ht(this, t, Bv, Wv, ut, { list_input: 2 }, Nv);
  }
  get list_input() {
    return this.$$.ctx[2];
  }
  set list_input(t) {
    this.$$set({ list_input: t }), Ku();
  }
}
customElements.define("linechart-groups-facet", I6(Hv, { list_input: {} }, [], [], !0));
export {
  Hv as MyComponent
};
