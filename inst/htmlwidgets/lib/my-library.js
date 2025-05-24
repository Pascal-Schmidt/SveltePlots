var u6 = Object.defineProperty;
var a6 = (e, t, n) => t in e ? u6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $t = (e, t, n) => (a6(e, typeof t != "symbol" ? t + "" : t, n), n);
function Pe() {
}
const Br = (e) => e;
function C_(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function _1(e) {
  return e();
}
function L_() {
  return /* @__PURE__ */ Object.create(null);
}
function Ht(e) {
  e.forEach(_1);
}
function Hr(e) {
  return typeof e == "function";
}
function ft(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function s6(e) {
  return Object.keys(e).length === 0;
}
function _6(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return Pe;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function pt(e, t, n) {
  e.$$.on_destroy.push(_6(t, n));
}
function E_(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
const h1 = typeof window < "u";
let Ll = h1 ? () => window.performance.now() : () => Date.now(), Yu = h1 ? (e) => requestAnimationFrame(e) : Pe;
const Er = /* @__PURE__ */ new Set();
function c1(e) {
  Er.forEach((t) => {
    t.c(e) || (Er.delete(t), t.f());
  }), Er.size !== 0 && Yu(c1);
}
function El(e) {
  let t;
  return Er.size === 0 && Yu(c1), {
    promise: new Promise((n) => {
      Er.add(t = { c: e, f: n });
    }),
    abort() {
      Er.delete(t);
    }
  };
}
const h6 = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function q(e, t) {
  e.appendChild(t);
}
function c6(e, t, n) {
  const r = Xu(e);
  if (!r.getElementById(t)) {
    const o = _e("style");
    o.id = t, o.textContent = n, g1(r, o);
  }
}
function Xu(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function g6(e) {
  const t = _e("style");
  return t.textContent = "/* empty */", g1(Xu(e), t), t.sheet;
}
function g1(e, t) {
  return q(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function V(e, t, n) {
  e.insertBefore(t, n || null);
}
function Q(e) {
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
function Ee() {
  return Ae("");
}
function lt(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function p(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function d6(e) {
  return Array.from(e.childNodes);
}
function Oe(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function y(e, t, n, r) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
}
let Eo;
function m6() {
  if (Eo === void 0) {
    Eo = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Eo = !0;
    }
  }
  return Eo;
}
function rr(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const r = _e("iframe");
  r.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  ), r.setAttribute("aria-hidden", "true"), r.tabIndex = -1;
  const o = m6();
  let f;
  return o ? (r.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", f = lt(
    window,
    "message",
    /** @param {MessageEvent} event */
    (u) => {
      u.source === r.contentWindow && t();
    }
  )) : (r.src = "about:blank", r.onload = () => {
    f = lt(r.contentWindow, "resize", t), t();
  }), q(e, r), () => {
    (o || f && r.contentWindow) && f(), Q(r);
  };
}
function y6(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
class b6 {
  constructor(t = !1) {
    /**
     * @private
     * @default false
     */
    $t(this, "is_svg", !1);
    /** parent for creating node */
    $t(this, "e");
    /** html tag nodes */
    $t(this, "n");
    /** target */
    $t(this, "t");
    /** anchor */
    $t(this, "a");
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
  m(t, n, r = null) {
    this.e || (this.is_svg ? this.e = ze(
      /** @type {keyof SVGElementTagNameMap} */
      n.nodeName
    ) : this.e = _e(
      /** @type {keyof HTMLElementTagNameMap} */
      n.nodeType === 11 ? "TEMPLATE" : n.nodeName
    ), this.t = n.tagName !== "TEMPLATE" ? n : (
      /** @type {HTMLTemplateElement} */
      n.content
    ), this.c(t)), this.i(r);
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
      V(this.t, this.n[n], t);
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
    this.n.forEach(Q);
  }
}
function w6(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
const Fo = /* @__PURE__ */ new Map();
let Wo = 0;
function p6(e) {
  let t = 5381, n = e.length;
  for (; n--; )
    t = (t << 5) - t ^ e.charCodeAt(n);
  return t >>> 0;
}
function v6(e, t) {
  const n = { stylesheet: g6(t), rules: {} };
  return Fo.set(e, n), n;
}
function vl(e, t, n, r, o, f, u, a = 0) {
  const _ = 16.666 / r;
  let c = `{
`;
  for (let k = 0; k <= 1; k += _) {
    const T = t + (n - t) * f(k);
    c += k * 100 + `%{${u(T, 1 - T)}}
`;
  }
  const d = c + `100% {${u(n, 1 - n)}}
}`, h = `__svelte_${p6(d)}_${a}`, g = Xu(e), { stylesheet: w, rules: v } = Fo.get(g) || v6(g, e);
  v[h] || (v[h] = !0, w.insertRule(`@keyframes ${h} ${d}`, w.cssRules.length));
  const S = e.style.animation || "";
  return e.style.animation = `${S ? `${S}, ` : ""}${h} ${r}ms linear ${o}ms 1 both`, Wo += 1, h;
}
function kl(e, t) {
  const n = (e.style.animation || "").split(", "), r = n.filter(
    t ? (f) => f.indexOf(t) < 0 : (f) => f.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = n.length - r.length;
  o && (e.style.animation = r.join(", "), Wo -= o, Wo || k6());
}
function k6() {
  Yu(() => {
    Wo || (Fo.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && Q(t);
    }), Fo.clear());
  });
}
function x6(e, t, n, r) {
  if (!t)
    return Pe;
  const o = e.getBoundingClientRect();
  if (t.left === o.left && t.right === o.right && t.top === o.top && t.bottom === o.bottom)
    return Pe;
  const {
    delay: f = 0,
    duration: u = 300,
    easing: a = Br,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: _ = Ll() + f,
    // @ts-ignore todo:
    end: c = _ + u,
    tick: d = Pe,
    css: h
  } = n(e, { from: t, to: o }, r);
  let g = !0, w = !1, v;
  function S() {
    h && (v = vl(e, 0, 1, u, f, a, h)), f || (w = !0);
  }
  function k() {
    h && kl(e, v), g = !1;
  }
  return El((T) => {
    if (!w && T >= _ && (w = !0), w && T >= c && (d(1, 0), k()), !g)
      return !1;
    if (w) {
      const A = T - _, z = 0 + 1 * a(A / u);
      d(z, 1 - z);
    }
    return !0;
  }), S(), d(0, 1), k;
}
function M6(e) {
  const t = getComputedStyle(e);
  if (t.position !== "absolute" && t.position !== "fixed") {
    const { width: n, height: r } = t, o = e.getBoundingClientRect();
    e.style.position = "absolute", e.style.width = n, e.style.height = r, T6(e, o);
  }
}
function T6(e, t) {
  const n = e.getBoundingClientRect();
  if (t.left !== n.left || t.top !== n.top) {
    const r = getComputedStyle(e), o = r.transform === "none" ? "" : r.transform;
    e.style.transform = `${o} translate(${t.left - n.left}px, ${t.top - n.top}px)`;
  }
}
let xl;
function bl(e) {
  xl = e;
}
function qu() {
  if (!xl)
    throw new Error("Function called outside component initialization");
  return xl;
}
function S6(e) {
  qu().$$.on_mount.push(e);
}
function Gu(e) {
  qu().$$.after_update.push(e);
}
function Zu(e) {
  qu().$$.on_destroy.push(e);
}
const zr = [], st = [];
let Rr = [];
const Su = [], d1 = /* @__PURE__ */ Promise.resolve();
let zu = !1;
function m1() {
  zu || (zu = !0, d1.then(ju));
}
function Rl() {
  return m1(), d1;
}
function it(e) {
  Rr.push(e);
}
function It(e) {
  Su.push(e);
}
const gu = /* @__PURE__ */ new Set();
let Mr = 0;
function ju() {
  if (Mr !== 0)
    return;
  const e = xl;
  do {
    try {
      for (; Mr < zr.length; ) {
        const t = zr[Mr];
        Mr++, bl(t), z6(t.$$);
      }
    } catch (t) {
      throw zr.length = 0, Mr = 0, t;
    }
    for (bl(null), zr.length = 0, Mr = 0; st.length; )
      st.pop()();
    for (let t = 0; t < Rr.length; t += 1) {
      const n = Rr[t];
      gu.has(n) || (gu.add(n), n());
    }
    Rr.length = 0;
  } while (zr.length);
  for (; Su.length; )
    Su.pop()();
  zu = !1, gu.clear(), bl(e);
}
function z6(e) {
  if (e.fragment !== null) {
    e.update(), Ht(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(it);
  }
}
function A6(e) {
  const t = [], n = [];
  Rr.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), Rr = t;
}
let hl;
function Ku() {
  return hl || (hl = Promise.resolve(), hl.then(() => {
    hl = null;
  })), hl;
}
function er(e, t, n) {
  e.dispatchEvent(y6(`${t ? "intro" : "outro"}${n}`));
}
const No = /* @__PURE__ */ new Set();
let fi;
function qe() {
  fi = {
    r: 0,
    c: [],
    p: fi
    // parent group
  };
}
function Ge() {
  fi.r || Ht(fi.c), fi = fi.p;
}
function le(e, t) {
  e && e.i && (No.delete(e), e.i(t));
}
function ae(e, t, n, r) {
  if (e && e.o) {
    if (No.has(e))
      return;
    No.add(e), fi.c.push(() => {
      No.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
const Ju = { duration: 0 };
function Fi(e, t, n) {
  const r = { direction: "in" };
  let o = t(e, n, r), f = !1, u, a, _ = 0;
  function c() {
    u && kl(e, u);
  }
  function d() {
    const {
      delay: g = 0,
      duration: w = 300,
      easing: v = Br,
      tick: S = Pe,
      css: k
    } = o || Ju;
    k && (u = vl(e, 0, 1, w, g, v, k, _++)), S(0, 1);
    const T = Ll() + g, A = T + w;
    a && a.abort(), f = !0, it(() => er(e, !0, "start")), a = El((z) => {
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
      h || (h = !0, kl(e), Hr(o) ? (o = o(r), Ku().then(d)) : d());
    },
    invalidate() {
      h = !1;
    },
    end() {
      f && (c(), f = !1);
    }
  };
}
function Ml(e, t, n) {
  const r = { direction: "out" };
  let o = t(e, n, r), f = !0, u;
  const a = fi;
  a.r += 1;
  let _;
  function c() {
    const {
      delay: d = 0,
      duration: h = 300,
      easing: g = Br,
      tick: w = Pe,
      css: v
    } = o || Ju;
    v && (u = vl(e, 1, 0, h, d, g, v));
    const S = Ll() + d, k = S + h;
    it(() => er(e, !1, "start")), "inert" in e && (_ = /** @type {HTMLElement} */
    e.inert, e.inert = !0), El((T) => {
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
  return Hr(o) ? Ku().then(() => {
    o = o(r), c();
  }) : c(), {
    end(d) {
      d && "inert" in e && (e.inert = _), d && o.tick && o.tick(1, 0), f && (u && kl(e, u), f = !1);
    }
  };
}
function Pt(e, t, n, r) {
  let f = t(e, n, { direction: "both" }), u = r ? 0 : 1, a = null, _ = null, c = null, d;
  function h() {
    c && kl(e, c);
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
      easing: T = Br,
      tick: A = Pe,
      css: z
    } = f || Ju, U = {
      start: Ll() + S,
      b: v
    };
    v || (U.group = fi, fi.r += 1), "inert" in e && (v ? d !== void 0 && (e.inert = d) : (d = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), a || _ ? _ = U : (z && (h(), c = vl(e, u, v, k, S, T, z)), v && A(0, 1), a = g(U, k), it(() => er(e, v, "start")), El((O) => {
      if (_ && O > _.start && (a = g(_, k), _ = null, er(e, a.b, "start"), z && (h(), c = vl(
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
      Hr(f) ? Ku().then(() => {
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
function y1(e, t) {
  e.d(1), t.delete(e.key);
}
function Kn(e, t) {
  ae(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function C6(e, t) {
  e.f(), y1(e, t);
}
function kn(e, t, n, r, o, f, u, a, _, c, d, h) {
  let g = e.length, w = f.length, v = g;
  const S = {};
  for (; v--; )
    S[e[v].key] = v;
  const k = [], T = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), z = [];
  for (v = w; v--; ) {
    const B = h(o, f, v), G = n(B);
    let X = u.get(G);
    X ? r && z.push(() => X.p(B, t)) : (X = c(G, B), X.c()), T.set(G, k[v] = X), G in S && A.set(G, Math.abs(v - S[G]));
  }
  const U = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
  function E(B) {
    le(B, 1), B.m(a, d), u.set(B.key, B), d = B.first, w--;
  }
  for (; g && w; ) {
    const B = k[w - 1], G = e[g - 1], X = B.key, D = G.key;
    B === G ? (d = B.first, g--, w--) : T.has(D) ? !u.has(X) || U.has(X) ? E(B) : O.has(D) ? g-- : A.get(X) > A.get(D) ? (O.add(X), E(B)) : (U.add(D), g--) : (_(G, u), g--);
  }
  for (; g--; ) {
    const B = e[g];
    T.has(B.key) || _(B, u);
  }
  for (; w; )
    E(k[w - 1]);
  return Ht(z), k;
}
function Ot(e, t, n) {
  const r = e.$$.props[t];
  r !== void 0 && (e.$$.bound[r] = n, n(e.$$.ctx[r]));
}
function Qe(e) {
  e && e.c();
}
function Ke(e, t, n) {
  const { fragment: r, after_update: o } = e.$$;
  r && r.m(t, n), it(() => {
    const f = e.$$.on_mount.map(_1).filter(Hr);
    e.$$.on_destroy ? e.$$.on_destroy.push(...f) : Ht(f), e.$$.on_mount = [];
  }), o.forEach(it);
}
function Je(e, t) {
  const n = e.$$;
  n.fragment !== null && (A6(n.after_update), Ht(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function L6(e, t) {
  e.$$.dirty[0] === -1 && (zr.push(e), m1(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ht(e, t, n, r, o, f, u = null, a = [-1]) {
  const _ = xl;
  bl(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: Pe,
    not_equal: o,
    bound: L_(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (_ ? _.$$.context : [])),
    // everything else
    callbacks: L_(),
    dirty: a,
    skip_bound: !1,
    root: t.target || _.$$.root
  };
  u && u(c.root);
  let d = !1;
  if (c.ctx = n ? n(e, t.props || {}, (h, g, ...w) => {
    const v = w.length ? w[0] : g;
    return c.ctx && o(c.ctx[h], c.ctx[h] = v) && (!c.skip_bound && c.bound[h] && c.bound[h](v), d && L6(e, h)), g;
  }) : [], c.update(), d = !0, Ht(c.before_update), c.fragment = r ? r(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = d6(t.target);
      c.fragment && c.fragment.l(h), h.forEach(Q);
    } else
      c.fragment && c.fragment.c();
    t.intro && le(e.$$.fragment), Ke(e, t.target, t.anchor), ju();
  }
  bl(_);
}
let b1;
typeof HTMLElement == "function" && (b1 = class extends HTMLElement {
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    $t(this, "$$ctor");
    /** Slots */
    $t(this, "$$s");
    /** The Svelte component instance */
    $t(this, "$$c");
    /** Whether or not the custom element is connected */
    $t(this, "$$cn", !1);
    /** Component props data */
    $t(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    $t(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $t(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    $t(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    $t(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const o = this.$$c.$on(t, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(t, n, r);
  }
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
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
              V(c, u, d);
            },
            d: function(c) {
              c && Q(u);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = w6(this);
      for (const f of this.$$s)
        f in r && (n[f] = [t(f)]);
      for (const f of this.attributes) {
        const u = this.$$g_p(f.name);
        u in this.$$d || (this.$$d[u] = Uo(u, f.value, this.$$p_d, "toProp"));
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
      const o = () => {
        this.$$r = !0;
        for (const f in this.$$p_d)
          if (this.$$d[f] = this.$$c.$$.ctx[this.$$c.$$.props[f]], this.$$p_d[f].reflect) {
            const u = Uo(
              f,
              this.$$d[f],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[f].attribute || f) : this.setAttribute(this.$$p_d[f].attribute || f, u);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
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
  attributeChangedCallback(t, n, r) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Uo(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
function Uo(e, t, n, r) {
  var f;
  const o = (f = n[e]) == null ? void 0 : f.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function E6(e, t, n, r, o, f) {
  let u = class extends b1 {
    constructor() {
      super(e, n, o), this.$$p_d = t;
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
        _ = Uo(a, _, t), this.$$d[a] = _, (c = this.$$c) == null || c.$set({ [a]: _ });
      }
    });
  }), r.forEach((a) => {
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
    $t(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $t(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Je(this, 1), this.$destroy = Pe;
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
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !s6(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const R6 = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(R6);
const Tr = [];
function Il(e, t = Pe) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (ft(e, a) && (e = a, n)) {
      const _ = !Tr.length;
      for (const c of r)
        c[1](), Tr.push(c, e);
      if (_) {
        for (let c = 0; c < Tr.length; c += 2)
          Tr[c][0](Tr[c + 1]);
        Tr.length = 0;
      }
    }
  }
  function f(a) {
    o(a(e));
  }
  function u(a, _ = Pe) {
    const c = [a, _];
    return r.add(c), r.size === 1 && (n = t(o, f) || Pe), a(e), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: f, subscribe: u };
}
const w1 = Il(null), R_ = Il(null), I6 = Il(null), Vi = Il(null);
function Po(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function O6(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ol(e) {
  let t, n, r;
  e.length !== 2 ? (t = Po, n = (a, _) => Po(e(a), _), r = (a, _) => e(a) - _) : (t = e === Po || e === O6 ? e : D6, n = e, r = e);
  function o(a, _, c = 0, d = a.length) {
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
    const h = o(a, _, c, d - 1);
    return h > c && r(a[h - 1], _) > -r(a[h], _) ? h - 1 : h;
  }
  return { left: o, center: u, right: f };
}
function D6() {
  return 0;
}
function N6(e) {
  return e === null ? NaN : +e;
}
const U6 = Ol(Po), P6 = U6.right;
Ol(N6).center;
const F6 = P6;
function Au(e, t) {
  let n, r;
  if (t === void 0)
    for (const o of e)
      o != null && (n === void 0 ? o >= o && (n = r = o) : (n > o && (n = o), r < o && (r = o)));
  else {
    let o = -1;
    for (let f of e)
      (f = t(f, ++o, e)) != null && (n === void 0 ? f >= f && (n = r = f) : (n > f && (n = f), r < f && (r = f)));
  }
  return [n, r];
}
class I_ extends Map {
  constructor(t, n = H6) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [r, o] of t)
        this.set(r, o);
  }
  get(t) {
    return super.get(O_(this, t));
  }
  has(t) {
    return super.has(O_(this, t));
  }
  set(t, n) {
    return super.set(W6(this, t), n);
  }
  delete(t) {
    return super.delete(B6(this, t));
  }
}
function O_({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function W6({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function B6({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function H6(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Y6 = Math.sqrt(50), X6 = Math.sqrt(10), q6 = Math.sqrt(2);
function Bo(e, t, n) {
  const r = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(r)), f = r / Math.pow(10, o), u = f >= Y6 ? 10 : f >= X6 ? 5 : f >= q6 ? 2 : 1;
  let a, _, c;
  return o < 0 ? (c = Math.pow(10, -o) / u, a = Math.round(e * c), _ = Math.round(t * c), a / c < e && ++a, _ / c > t && --_, c = -c) : (c = Math.pow(10, o) * u, a = Math.round(e / c), _ = Math.round(t / c), a * c < e && ++a, _ * c > t && --_), _ < a && 0.5 <= n && n < 2 ? Bo(e, t, n * 2) : [a, _, c];
}
function Cu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const r = t < e, [o, f, u] = r ? Bo(t, e, n) : Bo(e, t, n);
  if (!(f >= o))
    return [];
  const a = f - o + 1, _ = new Array(a);
  if (r)
    if (u < 0)
      for (let c = 0; c < a; ++c)
        _[c] = (f - c) / -u;
    else
      for (let c = 0; c < a; ++c)
        _[c] = (f - c) * u;
  else if (u < 0)
    for (let c = 0; c < a; ++c)
      _[c] = (o + c) / -u;
  else
    for (let c = 0; c < a; ++c)
      _[c] = (o + c) * u;
  return _;
}
function Lu(e, t, n) {
  return t = +t, e = +e, n = +n, Bo(e, t, n)[2];
}
function Eu(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, o = r ? Lu(t, e, n) : Lu(e, t, n);
  return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Ru(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let o of e)
      (o = t(o, ++r, e)) != null && (n < o || n === void 0 && o >= o) && (n = o);
  }
  return n;
}
function p1(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let o of e)
      (o = t(o, ++r, e)) != null && (n > o || n === void 0 && o >= o) && (n = o);
  }
  return n;
}
function G6(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var r = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, f = new Array(o); ++r < o; )
    f[r] = e + r * n;
  return f;
}
function Qu(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function v1(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function Dl() {
}
var Tl = 0.7, Ho = 1 / Tl, Ir = "\\s*([+-]?\\d+)\\s*", Sl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ui = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Z6 = /^#([0-9a-f]{3,8})$/, j6 = new RegExp(`^rgb\\(${Ir},${Ir},${Ir}\\)$`), K6 = new RegExp(`^rgb\\(${ui},${ui},${ui}\\)$`), J6 = new RegExp(`^rgba\\(${Ir},${Ir},${Ir},${Sl}\\)$`), Q6 = new RegExp(`^rgba\\(${ui},${ui},${ui},${Sl}\\)$`), V6 = new RegExp(`^hsl\\(${Sl},${ui},${ui}\\)$`), $6 = new RegExp(`^hsla\\(${Sl},${ui},${ui},${Sl}\\)$`), D_ = {
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
Qu(Dl, zl, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: N_,
  // Deprecated! Use color.formatHex.
  formatHex: N_,
  formatHex8: e3,
  formatHsl: t3,
  formatRgb: U_,
  toString: U_
});
function N_() {
  return this.rgb().formatHex();
}
function e3() {
  return this.rgb().formatHex8();
}
function t3() {
  return k1(this).formatHsl();
}
function U_() {
  return this.rgb().formatRgb();
}
function zl(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Z6.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? P_(t) : n === 3 ? new vn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ro(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ro(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = j6.exec(e)) ? new vn(t[1], t[2], t[3], 1) : (t = K6.exec(e)) ? new vn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = J6.exec(e)) ? Ro(t[1], t[2], t[3], t[4]) : (t = Q6.exec(e)) ? Ro(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = V6.exec(e)) ? B_(t[1], t[2] / 100, t[3] / 100, 1) : (t = $6.exec(e)) ? B_(t[1], t[2] / 100, t[3] / 100, t[4]) : D_.hasOwnProperty(e) ? P_(D_[e]) : e === "transparent" ? new vn(NaN, NaN, NaN, 0) : null;
}
function P_(e) {
  return new vn(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ro(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new vn(e, t, n, r);
}
function n3(e) {
  return e instanceof Dl || (e = zl(e)), e ? (e = e.rgb(), new vn(e.r, e.g, e.b, e.opacity)) : new vn();
}
function Iu(e, t, n, r) {
  return arguments.length === 1 ? n3(e) : new vn(e, t, n, r ?? 1);
}
function vn(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Qu(vn, Iu, v1(Dl, {
  brighter(e) {
    return e = e == null ? Ho : Math.pow(Ho, e), new vn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tl : Math.pow(Tl, e), new vn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new vn(tr(this.r), tr(this.g), tr(this.b), Yo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: F_,
  // Deprecated! Use color.formatHex.
  formatHex: F_,
  formatHex8: i3,
  formatRgb: W_,
  toString: W_
}));
function F_() {
  return `#${$i(this.r)}${$i(this.g)}${$i(this.b)}`;
}
function i3() {
  return `#${$i(this.r)}${$i(this.g)}${$i(this.b)}${$i((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function W_() {
  const e = Yo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${tr(this.r)}, ${tr(this.g)}, ${tr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Yo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function tr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function $i(e) {
  return e = tr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function B_(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ni(e, t, n, r);
}
function k1(e) {
  if (e instanceof ni)
    return new ni(e.h, e.s, e.l, e.opacity);
  if (e instanceof Dl || (e = zl(e)), !e)
    return new ni();
  if (e instanceof ni)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), f = Math.max(t, n, r), u = NaN, a = f - o, _ = (f + o) / 2;
  return a ? (t === f ? u = (n - r) / a + (n < r) * 6 : n === f ? u = (r - t) / a + 2 : u = (t - n) / a + 4, a /= _ < 0.5 ? f + o : 2 - f - o, u *= 60) : a = _ > 0 && _ < 1 ? 0 : u, new ni(u, a, _, e.opacity);
}
function r3(e, t, n, r) {
  return arguments.length === 1 ? k1(e) : new ni(e, t, n, r ?? 1);
}
function ni(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Qu(ni, r3, v1(Dl, {
  brighter(e) {
    return e = e == null ? Ho : Math.pow(Ho, e), new ni(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tl : Math.pow(Tl, e), new ni(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new vn(
      du(e >= 240 ? e - 240 : e + 120, o, r),
      du(e, o, r),
      du(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new ni(H_(this.h), Io(this.s), Io(this.l), Yo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Yo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${H_(this.h)}, ${Io(this.s) * 100}%, ${Io(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function H_(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Io(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function du(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Vu = (e) => () => e;
function l3(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function o3(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function f3(e) {
  return (e = +e) == 1 ? x1 : function(t, n) {
    return n - t ? o3(t, n, e) : Vu(isNaN(t) ? n : t);
  };
}
function x1(e, t) {
  var n = t - e;
  return n ? l3(e, n) : Vu(isNaN(e) ? t : e);
}
const Y_ = function e(t) {
  var n = f3(t);
  function r(o, f) {
    var u = n((o = Iu(o)).r, (f = Iu(f)).r), a = n(o.g, f.g), _ = n(o.b, f.b), c = x1(o.opacity, f.opacity);
    return function(d) {
      return o.r = u(d), o.g = a(d), o.b = _(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function u3(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(f) {
    for (o = 0; o < n; ++o)
      r[o] = e[o] * (1 - f) + t[o] * f;
    return r;
  };
}
function a3(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function s3(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), f = new Array(n), u;
  for (u = 0; u < r; ++u)
    o[u] = $u(e[u], t[u]);
  for (; u < n; ++u)
    f[u] = t[u];
  return function(a) {
    for (u = 0; u < r; ++u)
      f[u] = o[u](a);
    return f;
  };
}
function _3(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Xo(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function h3(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = $u(e[o], t[o]) : r[o] = t[o];
  return function(f) {
    for (o in n)
      r[o] = n[o](f);
    return r;
  };
}
var Ou = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, mu = new RegExp(Ou.source, "g");
function c3(e) {
  return function() {
    return e;
  };
}
function g3(e) {
  return function(t) {
    return e(t) + "";
  };
}
function d3(e, t) {
  var n = Ou.lastIndex = mu.lastIndex = 0, r, o, f, u = -1, a = [], _ = [];
  for (e = e + "", t = t + ""; (r = Ou.exec(e)) && (o = mu.exec(t)); )
    (f = o.index) > n && (f = t.slice(n, f), a[u] ? a[u] += f : a[++u] = f), (r = r[0]) === (o = o[0]) ? a[u] ? a[u] += o : a[++u] = o : (a[++u] = null, _.push({ i: u, x: Xo(r, o) })), n = mu.lastIndex;
  return n < t.length && (f = t.slice(n), a[u] ? a[u] += f : a[++u] = f), a.length < 2 ? _[0] ? g3(_[0].x) : c3(t) : (t = _.length, function(c) {
    for (var d = 0, h; d < t; ++d)
      a[(h = _[d]).i] = h.x(c);
    return a.join("");
  });
}
function $u(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Vu(t) : (n === "number" ? Xo : n === "string" ? (r = zl(t)) ? (t = r, Y_) : d3 : t instanceof zl ? Y_ : t instanceof Date ? _3 : a3(t) ? u3 : Array.isArray(t) ? s3 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? h3 : Xo)(e, t);
}
function m3(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
const Du = Math.PI, Nu = 2 * Du, Qi = 1e-6, y3 = Nu - Qi;
function M1(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function b3(e) {
  let t = Math.floor(e);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t > 15)
    return M1;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, f = r.length; o < f; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
let w3 = class {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? M1 : b3(t);
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
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, f, u) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +f},${this._y1 = +u}`;
  }
  arcTo(t, n, r, o, f) {
    if (t = +t, n = +n, r = +r, o = +o, f = +f, f < 0)
      throw new Error(`negative radius: ${f}`);
    let u = this._x1, a = this._y1, _ = r - t, c = o - n, d = u - t, h = a - n, g = d * d + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (g > Qi)
      if (!(Math.abs(h * _ - c * d) > Qi) || !f)
        this._append`L${this._x1 = t},${this._y1 = n}`;
      else {
        let w = r - u, v = o - a, S = _ * _ + c * c, k = w * w + v * v, T = Math.sqrt(S), A = Math.sqrt(g), z = f * Math.tan((Du - Math.acos((S + g - k) / (2 * T * A))) / 2), U = z / A, O = z / T;
        Math.abs(U - 1) > Qi && this._append`L${t + U * d},${n + U * h}`, this._append`A${f},${f},0,0,${+(h * w > d * v)},${this._x1 = t + O * _},${this._y1 = n + O * c}`;
      }
  }
  arc(t, n, r, o, f, u) {
    if (t = +t, n = +n, r = +r, u = !!u, r < 0)
      throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(o), _ = r * Math.sin(o), c = t + a, d = n + _, h = 1 ^ u, g = u ? o - f : f - o;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Qi || Math.abs(this._y1 - d) > Qi) && this._append`L${c},${d}`, r && (g < 0 && (g = g % Nu + Nu), g > y3 ? this._append`A${r},${r},0,1,${h},${t - a},${n - _}A${r},${r},0,1,${h},${this._x1 = c},${this._y1 = d}` : g > Qi && this._append`A${r},${r},0,${+(g >= Du)},${h},${this._x1 = t + r * Math.cos(f)},${this._y1 = n + r * Math.sin(f)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
};
function p3(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function qo(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, r = e.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(n + 1)
  ];
}
function Dr(e) {
  return e = qo(Math.abs(e)), e ? e[1] : NaN;
}
function v3(e, t) {
  return function(n, r) {
    for (var o = n.length, f = [], u = 0, a = e[0], _ = 0; o > 0 && a > 0 && (_ + a + 1 > r && (a = Math.max(1, r - _)), f.push(n.substring(o -= a, o + a)), !((_ += a + 1) > r)); )
      a = e[u = (u + 1) % e.length];
    return f.reverse().join(t);
  };
}
function k3(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var x3 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Al(e) {
  if (!(t = x3.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new ea({
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
Al.prototype = ea.prototype;
function ea(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ea.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function M3(e) {
  e:
    for (var t = e.length, n = 1, r = -1, o; n < t; ++n)
      switch (e[n]) {
        case ".":
          r = o = n;
          break;
        case "0":
          r === 0 && (r = n), o = n;
          break;
        default:
          if (!+e[n])
            break e;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? e.slice(0, r) + e.slice(o + 1) : e;
}
var T1;
function T3(e, t) {
  var n = qo(e, t);
  if (!n)
    return e + "";
  var r = n[0], o = n[1], f = o - (T1 = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, u = r.length;
  return f === u ? r : f > u ? r + new Array(f - u + 1).join("0") : f > 0 ? r.slice(0, f) + "." + r.slice(f) : "0." + new Array(1 - f).join("0") + qo(e, Math.max(0, t + f - 1))[0];
}
function X_(e, t) {
  var n = qo(e, t);
  if (!n)
    return e + "";
  var r = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0");
}
const q_ = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: p3,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => X_(e * 100, t),
  r: X_,
  s: T3,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function G_(e) {
  return e;
}
var Z_ = Array.prototype.map, j_ = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function S3(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? G_ : v3(Z_.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", f = e.numerals === void 0 ? G_ : k3(Z_.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", _ = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = Al(h);
    var g = h.fill, w = h.align, v = h.sign, S = h.symbol, k = h.zero, T = h.width, A = h.comma, z = h.precision, U = h.trim, O = h.type;
    O === "n" ? (A = !0, O = "g") : q_[O] || (z === void 0 && (z = 12), U = !0, O = "g"), (k || g === "0" && w === "=") && (k = !0, g = "0", w = "=");
    var E = S === "$" ? n : S === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", B = S === "$" ? r : /[%p]/.test(O) ? u : "", G = q_[O], X = /[defgprs%]/.test(O);
    z = z === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, z)) : Math.max(0, Math.min(20, z));
    function D(j) {
      var se = E, de = B, ie, te, J;
      if (O === "c")
        de = G(j) + de, j = "";
      else {
        j = +j;
        var W = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? _ : G(Math.abs(j), z), U && (j = M3(j)), W && +j == 0 && v !== "+" && (W = !1), se = (W ? v === "(" ? v : a : v === "-" || v === "(" ? "" : v) + se, de = (O === "s" ? j_[8 + T1 / 3] : "") + de + (W && v === "(" ? ")" : ""), X) {
          for (ie = -1, te = j.length; ++ie < te; )
            if (J = j.charCodeAt(ie), 48 > J || J > 57) {
              de = (J === 46 ? o + j.slice(ie + 1) : j.slice(ie)) + de, j = j.slice(0, ie);
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
    var w = c((h = Al(h), h.type = "f", h)), v = Math.max(-8, Math.min(8, Math.floor(Dr(g) / 3))) * 3, S = Math.pow(10, -v), k = j_[8 + v / 3];
    return function(T) {
      return w(S * T) + k;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var Oo, hn, S1;
z3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function z3(e) {
  return Oo = S3(e), hn = Oo.format, S1 = Oo.formatPrefix, Oo;
}
function A3(e) {
  return Math.max(0, -Dr(Math.abs(e)));
}
function C3(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Dr(t) / 3))) * 3 - Dr(Math.abs(e)));
}
function L3(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Dr(t) - Dr(e)) + 1;
}
function Nl(e, t) {
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
const K_ = Symbol("implicit");
function z1() {
  var e = new I_(), t = [], n = [], r = K_;
  function o(f) {
    let u = e.get(f);
    if (u === void 0) {
      if (r !== K_)
        return r;
      e.set(f, u = t.push(f) - 1);
    }
    return n[u % n.length];
  }
  return o.domain = function(f) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new I_();
    for (const u of f)
      e.has(u) || e.set(u, t.push(u) - 1);
    return o;
  }, o.range = function(f) {
    return arguments.length ? (n = Array.from(f), o) : n.slice();
  }, o.unknown = function(f) {
    return arguments.length ? (r = f, o) : r;
  }, o.copy = function() {
    return z1(t, n).unknown(r);
  }, Nl.apply(o, arguments), o;
}
function wl() {
  var e = z1().unknown(void 0), t = e.domain, n = e.range, r = 0, o = 1, f, u, a = !1, _ = 0, c = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var g = t().length, w = o < r, v = w ? o : r, S = w ? r : o;
    f = (S - v) / Math.max(1, g - _ + c * 2), a && (f = Math.floor(f)), v += (S - v - f * (g - _)) * d, u = f * (1 - _), a && (v = Math.round(v), u = Math.round(u));
    var k = G6(g).map(function(T) {
      return v + f * T;
    });
    return n(w ? k.reverse() : k);
  }
  return e.domain = function(g) {
    return arguments.length ? (t(g), h()) : t();
  }, e.range = function(g) {
    return arguments.length ? ([r, o] = g, r = +r, o = +o, h()) : [r, o];
  }, e.rangeRound = function(g) {
    return [r, o] = g, r = +r, o = +o, a = !0, h();
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
    return wl(t(), [r, o]).round(a).paddingInner(_).paddingOuter(c).align(d);
  }, Nl.apply(h(), arguments);
}
function A1(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return A1(t());
  }, e;
}
function E3() {
  return A1(wl.apply(null, arguments).paddingInner(1));
}
function R3(e) {
  return function() {
    return e;
  };
}
function I3(e) {
  return +e;
}
var J_ = [0, 1];
function Ar(e) {
  return e;
}
function Uu(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : R3(isNaN(t) ? NaN : 0.5);
}
function O3(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function D3(e, t, n) {
  var r = e[0], o = e[1], f = t[0], u = t[1];
  return o < r ? (r = Uu(o, r), f = n(u, f)) : (r = Uu(r, o), f = n(f, u)), function(a) {
    return f(r(a));
  };
}
function N3(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, o = new Array(r), f = new Array(r), u = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++u < r; )
    o[u] = Uu(e[u], e[u + 1]), f[u] = n(t[u], t[u + 1]);
  return function(a) {
    var _ = F6(e, a, 1, r) - 1;
    return f[_](o[_](a));
  };
}
function ta(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function C1() {
  var e = J_, t = J_, n = $u, r, o, f, u = Ar, a, _, c;
  function d() {
    var g = Math.min(e.length, t.length);
    return u !== Ar && (u = O3(e[0], e[g - 1])), a = g > 2 ? N3 : D3, _ = c = null, h;
  }
  function h(g) {
    return g == null || isNaN(g = +g) ? f : (_ || (_ = a(e.map(r), t, n)))(r(u(g)));
  }
  return h.invert = function(g) {
    return u(o((c || (c = a(t, e.map(r), Xo)))(g)));
  }, h.domain = function(g) {
    return arguments.length ? (e = Array.from(g, I3), d()) : e.slice();
  }, h.range = function(g) {
    return arguments.length ? (t = Array.from(g), d()) : t.slice();
  }, h.rangeRound = function(g) {
    return t = Array.from(g), n = m3, d();
  }, h.clamp = function(g) {
    return arguments.length ? (u = g ? !0 : Ar, d()) : u !== Ar;
  }, h.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, h.unknown = function(g) {
    return arguments.length ? (f = g, h) : f;
  }, function(g, w) {
    return r = g, o = w, d();
  };
}
function L1() {
  return C1()(Ar, Ar);
}
function U3(e, t, n, r) {
  var o = Eu(e, t, n), f;
  switch (r = Al(r ?? ",f"), r.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(t));
      return r.precision == null && !isNaN(f = C3(o, u)) && (r.precision = f), S1(r, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(f = L3(o, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = f - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(f = A3(o)) && (r.precision = f - (r.type === "%") * 2);
      break;
    }
  }
  return hn(r);
}
function P3(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var r = t();
    return Cu(r[0], r[r.length - 1], n ?? 10);
  }, e.tickFormat = function(n, r) {
    var o = t();
    return U3(o[0], o[o.length - 1], n ?? 10, r);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var r = t(), o = 0, f = r.length - 1, u = r[o], a = r[f], _, c, d = 10;
    for (a < u && (c = u, u = a, a = c, c = o, o = f, f = c); d-- > 0; ) {
      if (c = Lu(u, a, n), c === _)
        return r[o] = u, r[f] = a, t(r);
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
  var e = L1();
  return e.copy = function() {
    return ta(e, Ui());
  }, Nl.apply(e, arguments), P3(e);
}
function E1(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, o = e[n], f = e[r], u;
  return f < o && (u = n, n = r, r = u, u = o, o = f, f = u), e[n] = t.floor(o), e[r] = t.ceil(f), e;
}
function Q_(e) {
  return Math.log(e);
}
function V_(e) {
  return Math.exp(e);
}
function F3(e) {
  return -Math.log(-e);
}
function W3(e) {
  return -Math.exp(-e);
}
function B3(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function H3(e) {
  return e === 10 ? B3 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Y3(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function $_(e) {
  return (t, n) => -e(-t, n);
}
function X3(e) {
  const t = e(Q_, V_), n = t.domain;
  let r = 10, o, f;
  function u() {
    return o = Y3(r), f = H3(r), n()[0] < 0 ? (o = $_(o), f = $_(f), e(F3, W3)) : e(Q_, V_), t;
  }
  return t.base = function(a) {
    return arguments.length ? (r = +a, u()) : r;
  }, t.domain = function(a) {
    return arguments.length ? (n(a), u()) : n();
  }, t.ticks = (a) => {
    const _ = n();
    let c = _[0], d = _[_.length - 1];
    const h = d < c;
    h && ([c, d] = [d, c]);
    let g = o(c), w = o(d), v, S;
    const k = a == null ? 10 : +a;
    let T = [];
    if (!(r % 1) && w - g < k) {
      if (g = Math.floor(g), w = Math.ceil(w), c > 0) {
        for (; g <= w; ++g)
          for (v = 1; v < r; ++v)
            if (S = g < 0 ? v / f(-g) : v * f(g), !(S < c)) {
              if (S > d)
                break;
              T.push(S);
            }
      } else
        for (; g <= w; ++g)
          for (v = r - 1; v >= 1; --v)
            if (S = g > 0 ? v / f(-g) : v * f(g), !(S < c)) {
              if (S > d)
                break;
              T.push(S);
            }
      T.length * 2 < k && (T = Cu(c, d, k));
    } else
      T = Cu(g, w, Math.min(w - g, k)).map(f);
    return h ? T.reverse() : T;
  }, t.tickFormat = (a, _) => {
    if (a == null && (a = 10), _ == null && (_ = r === 10 ? "s" : ","), typeof _ != "function" && (!(r % 1) && (_ = Al(_)).precision == null && (_.trim = !0), _ = hn(_)), a === 1 / 0)
      return _;
    const c = Math.max(1, r * a / t.ticks().length);
    return (d) => {
      let h = d / f(Math.round(o(d)));
      return h * r < r - 0.5 && (h *= r), h <= c ? _(d) : "";
    };
  }, t.nice = () => n(E1(n(), {
    floor: (a) => f(Math.floor(o(a))),
    ceil: (a) => f(Math.ceil(o(a)))
  })), t;
}
function R1() {
  const e = X3(C1()).domain([1, 10]);
  return e.copy = () => ta(e, R1()).base(e.base()), Nl.apply(e, arguments), e;
}
const yu = /* @__PURE__ */ new Date(), bu = /* @__PURE__ */ new Date();
function Yt(e, t, n, r) {
  function o(f) {
    return e(f = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+f)), f;
  }
  return o.floor = (f) => (e(f = /* @__PURE__ */ new Date(+f)), f), o.ceil = (f) => (e(f = new Date(f - 1)), t(f, 1), e(f), f), o.round = (f) => {
    const u = o(f), a = o.ceil(f);
    return f - u < a - f ? u : a;
  }, o.offset = (f, u) => (t(f = /* @__PURE__ */ new Date(+f), u == null ? 1 : Math.floor(u)), f), o.range = (f, u, a) => {
    const _ = [];
    if (f = o.ceil(f), a = a == null ? 1 : Math.floor(a), !(f < u) || !(a > 0))
      return _;
    let c;
    do
      _.push(c = /* @__PURE__ */ new Date(+f)), t(f, a), e(f);
    while (c < f && f < u);
    return _;
  }, o.filter = (f) => Yt((u) => {
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
  }), n && (o.count = (f, u) => (yu.setTime(+f), bu.setTime(+u), e(yu), e(bu), Math.floor(n(yu, bu))), o.every = (f) => (f = Math.floor(f), !isFinite(f) || !(f > 0) ? null : f > 1 ? o.filter(r ? (u) => r(u) % f === 0 : (u) => o.count(0, u) % f === 0) : o)), o;
}
const Go = Yt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Go.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Yt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Go);
Go.range;
const ki = 1e3, jn = ki * 60, xi = jn * 60, Mi = xi * 24, na = Mi * 7, eh = Mi * 30, wu = Mi * 365, Cr = Yt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * ki);
}, (e, t) => (t - e) / ki, (e) => e.getUTCSeconds());
Cr.range;
const ia = Yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ki);
}, (e, t) => {
  e.setTime(+e + t * jn);
}, (e, t) => (t - e) / jn, (e) => e.getMinutes());
ia.range;
const q3 = Yt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * jn);
}, (e, t) => (t - e) / jn, (e) => e.getUTCMinutes());
q3.range;
const ra = Yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ki - e.getMinutes() * jn);
}, (e, t) => {
  e.setTime(+e + t * xi);
}, (e, t) => (t - e) / xi, (e) => e.getHours());
ra.range;
const G3 = Yt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * xi);
}, (e, t) => (t - e) / xi, (e) => e.getUTCHours());
G3.range;
const Ul = Yt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * jn) / Mi,
  (e) => e.getDate() - 1
);
Ul.range;
const la = Yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Mi, (e) => e.getUTCDate() - 1);
la.range;
const Z3 = Yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Mi, (e) => Math.floor(e / Mi));
Z3.range;
function lr(e) {
  return Yt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * jn) / na);
}
const ef = lr(0), Zo = lr(1), j3 = lr(2), K3 = lr(3), Nr = lr(4), J3 = lr(5), Q3 = lr(6);
ef.range;
Zo.range;
j3.range;
K3.range;
Nr.range;
J3.range;
Q3.range;
function or(e) {
  return Yt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / na);
}
const I1 = or(0), jo = or(1), V3 = or(2), $3 = or(3), Ur = or(4), e5 = or(5), t5 = or(6);
I1.range;
jo.range;
V3.range;
$3.range;
Ur.range;
e5.range;
t5.range;
const oa = Yt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
oa.range;
const n5 = Yt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
n5.range;
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
function i5(e, t, n, r, o, f) {
  const u = [
    [Cr, 1, ki],
    [Cr, 5, 5 * ki],
    [Cr, 15, 15 * ki],
    [Cr, 30, 30 * ki],
    [f, 1, jn],
    [f, 5, 5 * jn],
    [f, 15, 15 * jn],
    [f, 30, 30 * jn],
    [o, 1, xi],
    [o, 3, 3 * xi],
    [o, 6, 6 * xi],
    [o, 12, 12 * xi],
    [r, 1, Mi],
    [r, 2, 2 * Mi],
    [n, 1, na],
    [t, 1, eh],
    [t, 3, 3 * eh],
    [e, 1, wu]
  ];
  function a(c, d, h) {
    const g = d < c;
    g && ([c, d] = [d, c]);
    const w = h && typeof h.range == "function" ? h : _(c, d, h), v = w ? w.range(c, +d + 1) : [];
    return g ? v.reverse() : v;
  }
  function _(c, d, h) {
    const g = Math.abs(d - c) / h, w = Ol(([, , k]) => k).right(u, g);
    if (w === u.length)
      return e.every(Eu(c / wu, d / wu, h));
    if (w === 0)
      return Go.every(Math.max(Eu(c, d, h), 1));
    const [v, S] = u[g / u[w - 1][2] < u[w][2] / g ? w - 1 : w];
    return v.every(S);
  }
  return [a, _];
}
const [r5, l5] = i5(Ti, oa, ef, Ul, ra, ia);
function pu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function vu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function cl(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function o5(e) {
  var t = e.dateTime, n = e.date, r = e.time, o = e.periods, f = e.days, u = e.shortDays, a = e.months, _ = e.shortMonths, c = gl(o), d = dl(o), h = gl(f), g = dl(f), w = gl(u), v = dl(u), S = gl(a), k = dl(a), T = gl(_), A = dl(_), z = {
    a: W,
    A: C,
    b: R,
    B: ce,
    c: null,
    d: oh,
    e: oh,
    f: C5,
    g: F5,
    G: B5,
    H: S5,
    I: z5,
    j: A5,
    L: O1,
    m: L5,
    M: E5,
    p: he,
    q: vt,
    Q: ah,
    s: sh,
    S: R5,
    u: I5,
    U: O5,
    V: D5,
    w: N5,
    W: U5,
    x: null,
    X: null,
    y: P5,
    Y: W5,
    Z: H5,
    "%": uh
  }, U = {
    a: Kt,
    A: Ze,
    b: Ue,
    B: $e,
    c: null,
    d: fh,
    e: fh,
    f: G5,
    g: nw,
    G: rw,
    H: Y5,
    I: X5,
    j: q5,
    L: N1,
    m: Z5,
    M: j5,
    p: ut,
    q: He,
    Q: ah,
    s: sh,
    S: K5,
    u: J5,
    U: Q5,
    V: V5,
    w: $5,
    W: ew,
    x: null,
    X: null,
    y: tw,
    Y: iw,
    Z: lw,
    "%": uh
  }, O = {
    a: D,
    A: j,
    b: se,
    B: de,
    c: ie,
    d: rh,
    e: rh,
    f: k5,
    g: ih,
    G: nh,
    H: lh,
    I: lh,
    j: b5,
    L: v5,
    m: y5,
    M: w5,
    p: X,
    q: m5,
    Q: M5,
    s: T5,
    S: p5,
    u: _5,
    U: h5,
    V: c5,
    w: s5,
    W: g5,
    x: te,
    X: J,
    y: ih,
    Y: nh,
    Z: d5,
    "%": x5
  };
  z.x = E(n, z), z.X = E(r, z), z.c = E(t, z), U.x = E(n, U), U.X = E(r, U), U.c = E(t, U);
  function E(ue, me) {
    return function(be) {
      var $ = [], Ce = -1, ye = 0, We = ue.length, je, et, Ye;
      for (be instanceof Date || (be = /* @__PURE__ */ new Date(+be)); ++Ce < We; )
        ue.charCodeAt(Ce) === 37 && ($.push(ue.slice(ye, Ce)), (et = th[je = ue.charAt(++Ce)]) != null ? je = ue.charAt(++Ce) : et = je === "e" ? " " : "0", (Ye = me[je]) && (je = Ye(be, et)), $.push(je), ye = Ce + 1);
      return $.push(ue.slice(ye, Ce)), $.join("");
    };
  }
  function B(ue, me) {
    return function(be) {
      var $ = cl(1900, void 0, 1), Ce = G($, ue, be += "", 0), ye, We;
      if (Ce != be.length)
        return null;
      if ("Q" in $)
        return new Date($.Q);
      if ("s" in $)
        return new Date($.s * 1e3 + ("L" in $ ? $.L : 0));
      if (me && !("Z" in $) && ($.Z = 0), "p" in $ && ($.H = $.H % 12 + $.p * 12), $.m === void 0 && ($.m = "q" in $ ? $.q : 0), "V" in $) {
        if ($.V < 1 || $.V > 53)
          return null;
        "w" in $ || ($.w = 1), "Z" in $ ? (ye = vu(cl($.y, 0, 1)), We = ye.getUTCDay(), ye = We > 4 || We === 0 ? jo.ceil(ye) : jo(ye), ye = la.offset(ye, ($.V - 1) * 7), $.y = ye.getUTCFullYear(), $.m = ye.getUTCMonth(), $.d = ye.getUTCDate() + ($.w + 6) % 7) : (ye = pu(cl($.y, 0, 1)), We = ye.getDay(), ye = We > 4 || We === 0 ? Zo.ceil(ye) : Zo(ye), ye = Ul.offset(ye, ($.V - 1) * 7), $.y = ye.getFullYear(), $.m = ye.getMonth(), $.d = ye.getDate() + ($.w + 6) % 7);
      } else
        ("W" in $ || "U" in $) && ("w" in $ || ($.w = "u" in $ ? $.u % 7 : "W" in $ ? 1 : 0), We = "Z" in $ ? vu(cl($.y, 0, 1)).getUTCDay() : pu(cl($.y, 0, 1)).getDay(), $.m = 0, $.d = "W" in $ ? ($.w + 6) % 7 + $.W * 7 - (We + 5) % 7 : $.w + $.U * 7 - (We + 6) % 7);
      return "Z" in $ ? ($.H += $.Z / 100 | 0, $.M += $.Z % 100, vu($)) : pu($);
    };
  }
  function G(ue, me, be, $) {
    for (var Ce = 0, ye = me.length, We = be.length, je, et; Ce < ye; ) {
      if ($ >= We)
        return -1;
      if (je = me.charCodeAt(Ce++), je === 37) {
        if (je = me.charAt(Ce++), et = O[je in th ? me.charAt(Ce++) : je], !et || ($ = et(ue, be, $)) < 0)
          return -1;
      } else if (je != be.charCodeAt($++))
        return -1;
    }
    return $;
  }
  function X(ue, me, be) {
    var $ = c.exec(me.slice(be));
    return $ ? (ue.p = d.get($[0].toLowerCase()), be + $[0].length) : -1;
  }
  function D(ue, me, be) {
    var $ = w.exec(me.slice(be));
    return $ ? (ue.w = v.get($[0].toLowerCase()), be + $[0].length) : -1;
  }
  function j(ue, me, be) {
    var $ = h.exec(me.slice(be));
    return $ ? (ue.w = g.get($[0].toLowerCase()), be + $[0].length) : -1;
  }
  function se(ue, me, be) {
    var $ = T.exec(me.slice(be));
    return $ ? (ue.m = A.get($[0].toLowerCase()), be + $[0].length) : -1;
  }
  function de(ue, me, be) {
    var $ = S.exec(me.slice(be));
    return $ ? (ue.m = k.get($[0].toLowerCase()), be + $[0].length) : -1;
  }
  function ie(ue, me, be) {
    return G(ue, t, me, be);
  }
  function te(ue, me, be) {
    return G(ue, n, me, be);
  }
  function J(ue, me, be) {
    return G(ue, r, me, be);
  }
  function W(ue) {
    return u[ue.getDay()];
  }
  function C(ue) {
    return f[ue.getDay()];
  }
  function R(ue) {
    return _[ue.getMonth()];
  }
  function ce(ue) {
    return a[ue.getMonth()];
  }
  function he(ue) {
    return o[+(ue.getHours() >= 12)];
  }
  function vt(ue) {
    return 1 + ~~(ue.getMonth() / 3);
  }
  function Kt(ue) {
    return u[ue.getUTCDay()];
  }
  function Ze(ue) {
    return f[ue.getUTCDay()];
  }
  function Ue(ue) {
    return _[ue.getUTCMonth()];
  }
  function $e(ue) {
    return a[ue.getUTCMonth()];
  }
  function ut(ue) {
    return o[+(ue.getUTCHours() >= 12)];
  }
  function He(ue) {
    return 1 + ~~(ue.getUTCMonth() / 3);
  }
  return {
    format: function(ue) {
      var me = E(ue += "", z);
      return me.toString = function() {
        return ue;
      }, me;
    },
    parse: function(ue) {
      var me = B(ue += "", !1);
      return me.toString = function() {
        return ue;
      }, me;
    },
    utcFormat: function(ue) {
      var me = E(ue += "", U);
      return me.toString = function() {
        return ue;
      }, me;
    },
    utcParse: function(ue) {
      var me = B(ue += "", !0);
      return me.toString = function() {
        return ue;
      }, me;
    }
  };
}
var th = { "-": "", _: " ", 0: "0" }, jt = /^\s*\d+/, f5 = /^%/, u5 = /[\\^$*+?|[\]().{}]/g;
function Ve(e, t, n) {
  var r = e < 0 ? "-" : "", o = (r ? -e : e) + "", f = o.length;
  return r + (f < n ? new Array(n - f + 1).join(t) + o : o);
}
function a5(e) {
  return e.replace(u5, "\\$&");
}
function gl(e) {
  return new RegExp("^(?:" + e.map(a5).join("|") + ")", "i");
}
function dl(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function s5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function _5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function h5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function c5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function g5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function nh(e, t, n) {
  var r = jt.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function ih(e, t, n) {
  var r = jt.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function d5(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function m5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function y5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function rh(e, t, n) {
  var r = jt.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function b5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function lh(e, t, n) {
  var r = jt.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function w5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function p5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function v5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function k5(e, t, n) {
  var r = jt.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function x5(e, t, n) {
  var r = f5.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function M5(e, t, n) {
  var r = jt.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function T5(e, t, n) {
  var r = jt.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function oh(e, t) {
  return Ve(e.getDate(), t, 2);
}
function S5(e, t) {
  return Ve(e.getHours(), t, 2);
}
function z5(e, t) {
  return Ve(e.getHours() % 12 || 12, t, 2);
}
function A5(e, t) {
  return Ve(1 + Ul.count(Ti(e), e), t, 3);
}
function O1(e, t) {
  return Ve(e.getMilliseconds(), t, 3);
}
function C5(e, t) {
  return O1(e, t) + "000";
}
function L5(e, t) {
  return Ve(e.getMonth() + 1, t, 2);
}
function E5(e, t) {
  return Ve(e.getMinutes(), t, 2);
}
function R5(e, t) {
  return Ve(e.getSeconds(), t, 2);
}
function I5(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function O5(e, t) {
  return Ve(ef.count(Ti(e) - 1, e), t, 2);
}
function D1(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Nr(e) : Nr.ceil(e);
}
function D5(e, t) {
  return e = D1(e), Ve(Nr.count(Ti(e), e) + (Ti(e).getDay() === 4), t, 2);
}
function N5(e) {
  return e.getDay();
}
function U5(e, t) {
  return Ve(Zo.count(Ti(e) - 1, e), t, 2);
}
function P5(e, t) {
  return Ve(e.getFullYear() % 100, t, 2);
}
function F5(e, t) {
  return e = D1(e), Ve(e.getFullYear() % 100, t, 2);
}
function W5(e, t) {
  return Ve(e.getFullYear() % 1e4, t, 4);
}
function B5(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Nr(e) : Nr.ceil(e), Ve(e.getFullYear() % 1e4, t, 4);
}
function H5(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ve(t / 60 | 0, "0", 2) + Ve(t % 60, "0", 2);
}
function fh(e, t) {
  return Ve(e.getUTCDate(), t, 2);
}
function Y5(e, t) {
  return Ve(e.getUTCHours(), t, 2);
}
function X5(e, t) {
  return Ve(e.getUTCHours() % 12 || 12, t, 2);
}
function q5(e, t) {
  return Ve(1 + la.count(ir(e), e), t, 3);
}
function N1(e, t) {
  return Ve(e.getUTCMilliseconds(), t, 3);
}
function G5(e, t) {
  return N1(e, t) + "000";
}
function Z5(e, t) {
  return Ve(e.getUTCMonth() + 1, t, 2);
}
function j5(e, t) {
  return Ve(e.getUTCMinutes(), t, 2);
}
function K5(e, t) {
  return Ve(e.getUTCSeconds(), t, 2);
}
function J5(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Q5(e, t) {
  return Ve(I1.count(ir(e) - 1, e), t, 2);
}
function U1(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ur(e) : Ur.ceil(e);
}
function V5(e, t) {
  return e = U1(e), Ve(Ur.count(ir(e), e) + (ir(e).getUTCDay() === 4), t, 2);
}
function $5(e) {
  return e.getUTCDay();
}
function ew(e, t) {
  return Ve(jo.count(ir(e) - 1, e), t, 2);
}
function tw(e, t) {
  return Ve(e.getUTCFullYear() % 100, t, 2);
}
function nw(e, t) {
  return e = U1(e), Ve(e.getUTCFullYear() % 100, t, 2);
}
function iw(e, t) {
  return Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function rw(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Ur(e) : Ur.ceil(e), Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function lw() {
  return "+0000";
}
function uh() {
  return "%";
}
function ah(e) {
  return +e;
}
function sh(e) {
  return Math.floor(+e / 1e3);
}
var Sr, fa, Pr;
ow({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ow(e) {
  return Sr = o5(e), fa = Sr.format, Pr = Sr.parse, Sr.utcFormat, Sr.utcParse, Sr;
}
function fw(e) {
  return new Date(e);
}
function uw(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function P1(e, t, n, r, o, f, u, a, _, c) {
  var d = L1(), h = d.invert, g = d.domain, w = c(".%L"), v = c(":%S"), S = c("%I:%M"), k = c("%I %p"), T = c("%a %d"), A = c("%b %d"), z = c("%B"), U = c("%Y");
  function O(E) {
    return (_(E) < E ? w : a(E) < E ? v : u(E) < E ? S : f(E) < E ? k : r(E) < E ? o(E) < E ? T : A : n(E) < E ? z : U)(E);
  }
  return d.invert = function(E) {
    return new Date(h(E));
  }, d.domain = function(E) {
    return arguments.length ? g(Array.from(E, uw)) : g().map(fw);
  }, d.ticks = function(E) {
    var B = g();
    return e(B[0], B[B.length - 1], E ?? 10);
  }, d.tickFormat = function(E, B) {
    return B == null ? O : c(B);
  }, d.nice = function(E) {
    var B = g();
    return (!E || typeof E.range != "function") && (E = t(B[0], B[B.length - 1], E ?? 10)), E ? g(E1(B, E)) : d;
  }, d.copy = function() {
    return ta(d, P1(e, t, n, r, o, f, u, a, _, c));
  }, d;
}
function aw() {
  return Nl.apply(P1(r5, l5, Ti, oa, ef, Ul, ra, ia, Cr, fa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Gt(e) {
  return function() {
    return e;
  };
}
function F1(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length)
      return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new w3(t);
}
function W1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function B1(e) {
  this._context = e;
}
B1.prototype = {
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
function H1(e) {
  return new B1(e);
}
function Y1(e) {
  return e[0];
}
function X1(e) {
  return e[1];
}
function q1(e, t) {
  var n = Gt(!0), r = null, o = H1, f = null, u = F1(a);
  e = typeof e == "function" ? e : e === void 0 ? Y1 : Gt(e), t = typeof t == "function" ? t : t === void 0 ? X1 : Gt(t);
  function a(_) {
    var c, d = (_ = W1(_)).length, h, g = !1, w;
    for (r == null && (f = o(w = u())), c = 0; c <= d; ++c)
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
    return arguments.length ? (o = _, r != null && (f = o(r)), a) : o;
  }, a.context = function(_) {
    return arguments.length ? (_ == null ? r = f = null : f = o(r = _), a) : r;
  }, a;
}
function _h(e, t, n) {
  var r = null, o = Gt(!0), f = null, u = H1, a = null, _ = F1(c);
  e = typeof e == "function" ? e : e === void 0 ? Y1 : Gt(+e), t = typeof t == "function" ? t : Gt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? X1 : Gt(+n);
  function c(h) {
    var g, w, v, S = (h = W1(h)).length, k, T = !1, A, z = new Array(S), U = new Array(S);
    for (f == null && (a = u(A = _())), g = 0; g <= S; ++g) {
      if (!(g < S && o(k = h[g], g, h)) === T)
        if (T = !T)
          w = g, a.areaStart(), a.lineStart();
        else {
          for (a.lineEnd(), a.lineStart(), v = g - 1; v >= w; --v)
            a.point(z[v], U[v]);
          a.lineEnd(), a.areaEnd();
        }
      T && (z[g] = +e(k, g, h), U[g] = +t(k, g, h), a.point(r ? +r(k, g, h) : z[g], n ? +n(k, g, h) : U[g]));
    }
    if (A)
      return a = null, A + "" || null;
  }
  function d() {
    return q1().defined(o).curve(u).context(f);
  }
  return c.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Gt(+h), r = null, c) : e;
  }, c.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Gt(+h), c) : e;
  }, c.x1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : Gt(+h), c) : r;
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
    return d().x(r).y(t);
  }, c.defined = function(h) {
    return arguments.length ? (o = typeof h == "function" ? h : Gt(!!h), c) : o;
  }, c.curve = function(h) {
    return arguments.length ? (u = h, f != null && (a = u(f)), c) : u;
  }, c.context = function(h) {
    return arguments.length ? (h == null ? f = a = null : a = u(f = h), c) : f;
  }, c;
}
function hh(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function G1(e) {
  this._context = e;
}
G1.prototype = {
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
        hh(this, this._x1, this._y1);
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
        hh(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function sw(e) {
  return new G1(e);
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
function ch(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ch(Object(n), !0).forEach(function(r) {
      hw(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ch(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
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
function hw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ko() {
  return Ko = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ko.apply(this, arguments);
}
function cw(e, t) {
  if (e) {
    if (typeof e == "string")
      return gh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return gh(e, t);
  }
}
function gh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Z1(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = cw(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, o = function() {
      };
      return {
        s: o,
        n: function() {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function(_) {
          throw _;
        },
        f: o
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
function gw(e, t) {
  var n = [], r = [];
  function o(f, u) {
    if (f.length === 1)
      n.push(f[0]), r.push(f[0]);
    else {
      for (var a = Array(f.length - 1), _ = 0; _ < a.length; _++)
        _ === 0 && n.push(f[0]), _ === a.length - 1 && r.push(f[_ + 1]), a[_] = [(1 - u) * f[_][0] + u * f[_ + 1][0], (1 - u) * f[_][1] + u * f[_ + 1][1]];
      o(a, u);
    }
  }
  return e.length && o(e, t), {
    left: n,
    right: r.reverse()
  };
}
function dw(e) {
  var t = {};
  return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], e.length === 4 ? t.type = "C" : e.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function mw(e, t) {
  t = t || 2;
  for (var n = [], r = e, o = 1 / t, f = 0; f < t - 1; f++) {
    var u = o / (1 - o * f), a = gw(r, u);
    n.push(a.left), r = a.right;
  }
  return n.push(r), n;
}
function yw(e, t, n) {
  var r = [[e.x, e.y]];
  return t.x1 != null && r.push([t.x1, t.y1]), t.x2 != null && r.push([t.x2, t.y2]), r.push([t.x, t.y]), mw(r, n).map(dw);
}
var bw = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, Or = {
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
Object.keys(Or).forEach(function(e) {
  Or[e.toLowerCase()] = Or[e];
});
function Pu(e, t) {
  for (var n = Array(e), r = 0; r < e; r++)
    n[r] = t;
  return n;
}
function ww(e) {
  return "".concat(e.type).concat(Or[e.type].map(function(t) {
    return e[t];
  }).join(","));
}
function pw(e, t) {
  var n = {
    x1: "x",
    y1: "y",
    x2: "x",
    y2: "y"
  }, r = ["xAxisRotation", "largeArcFlag", "sweepFlag"];
  if (e.type !== t.type && t.type.toUpperCase() !== "M") {
    var o = {};
    Object.keys(t).forEach(function(f) {
      var u = t[f], a = e[f];
      a === void 0 && (r.includes(f) ? a = u : (a === void 0 && n[f] && (a = e[n[f]]), a === void 0 && (a = 0))), o[f] = a;
    }), o.type = t.type, e = o;
  }
  return e;
}
function vw(e, t, n) {
  var r = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C")
    r = r.concat(yw(e, t, n));
  else {
    var o = Ko({}, e);
    o.type === "M" && (o.type = "L"), r = r.concat(Pu(n - 1).map(function() {
      return o;
    })), r.push(t);
  }
  return r;
}
function dh(e, t, n) {
  var r = e.length - 1, o = t.length - 1, f = r / o, u = Pu(o).reduce(function(_, c, d) {
    var h = Math.floor(f * d);
    if (n && h < e.length - 1 && n(e[h], e[h + 1])) {
      var g = f * d % 1 < 0.5;
      _[h] && (g ? h > 0 ? h -= 1 : h < e.length - 1 && (h += 1) : h < e.length - 1 ? h += 1 : h > 0 && (h -= 1));
    }
    return _[h] = (_[h] || 0) + 1, _;
  }, []), a = u.reduce(function(_, c, d) {
    if (d === e.length - 1) {
      var h = Pu(c, Ko({}, e[e.length - 1]));
      return h[0].type === "M" && h.forEach(function(g) {
        g.type = "L";
      }), _.concat(h);
    }
    return _.concat(vw(e[d], e[d + 1], c));
  }, []);
  return a.unshift(e[0]), a;
}
function mh(e) {
  for (var t = (e || "").match(bw) || [], n = [], r, o, f = 0; f < t.length; ++f)
    if (r = Or[t[f]], r) {
      o = {
        type: t[f]
      };
      for (var u = 0; u < r.length; ++u)
        o[r[u]] = +t[f + u + 1];
      f += r.length, n.push(o);
    }
  return n;
}
function kw(e, t, n) {
  var r = e == null ? [] : e.slice(), o = t == null ? [] : t.slice(), f = pl(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, u = f.excludeSegment, a = f.snapEndsToInput;
  if (!r.length && !o.length)
    return function() {
      return [];
    };
  var _ = (r.length === 0 || r[r.length - 1].type === "Z") && (o.length === 0 || o[o.length - 1].type === "Z");
  r.length > 0 && r[r.length - 1].type === "Z" && r.pop(), o.length > 0 && o[o.length - 1].type === "Z" && o.pop(), r.length ? o.length || o.push(r[0]) : r.push(o[0]);
  var c = Math.abs(o.length - r.length);
  c !== 0 && (o.length > r.length ? r = dh(r, o, u) : o.length < r.length && (o = dh(o, r, u))), r = r.map(function(h, g) {
    return pw(h, o[g]);
  });
  var d = r.map(function(h) {
    return _w({}, h);
  });
  return _ && (d.push({
    type: "Z"
  }), r.push({
    type: "Z"
  })), function(g) {
    if (g === 1 && a)
      return t ?? [];
    if (g === 0)
      return r;
    for (var w = 0; w < d.length; ++w) {
      var v = r[w], S = o[w], k = d[w], T = Z1(Or[k.type]), A;
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
function xw(e, t, n) {
  var r = mh(e), o = mh(t), f = pl(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, u = f.excludeSegment, a = f.snapEndsToInput;
  if (!r.length && !o.length)
    return function() {
      return "";
    };
  var _ = kw(r, o, {
    excludeSegment: u,
    snapEndsToInput: a
  });
  return function(d) {
    if (d === 1 && a)
      return t ?? "";
    var h = _(d), g = "", w = Z1(h), v;
    try {
      for (w.s(); !(v = w.n()).done; ) {
        var S = v.value;
        g += ww(S);
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
function j1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jo = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Jo.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", o = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", a = "Invalid `variable` option passed into `_.template`", _ = "__lodash_hash_undefined__", c = 500, d = "__lodash_placeholder__", h = 1, g = 2, w = 4, v = 1, S = 2, k = 1, T = 2, A = 4, z = 8, U = 16, O = 32, E = 64, B = 128, G = 256, X = 512, D = 30, j = "...", se = 800, de = 16, ie = 1, te = 2, J = 3, W = 1 / 0, C = 9007199254740991, R = 17976931348623157e292, ce = 0 / 0, he = 4294967295, vt = he - 1, Kt = he >>> 1, Ze = [
      ["ary", B],
      ["bind", k],
      ["bindKey", T],
      ["curry", z],
      ["curryRight", U],
      ["flip", X],
      ["partial", O],
      ["partialRight", E],
      ["rearg", G]
    ], Ue = "[object Arguments]", $e = "[object Array]", ut = "[object AsyncFunction]", He = "[object Boolean]", ue = "[object Date]", me = "[object DOMException]", be = "[object Error]", $ = "[object Function]", Ce = "[object GeneratorFunction]", ye = "[object Map]", We = "[object Number]", je = "[object Null]", et = "[object Object]", Ye = "[object Promise]", Y = "[object Proxy]", oe = "[object RegExp]", Me = "[object Set]", Tt = "[object String]", St = "[object Symbol]", Xt = "[object Undefined]", gt = "[object WeakMap]", zt = "[object WeakSet]", en = "[object ArrayBuffer]", kt = "[object DataView]", xt = "[object Float32Array]", tn = "[object Float64Array]", Un = "[object Int8Array]", nn = "[object Int16Array]", on = "[object Int32Array]", Jn = "[object Uint8Array]", cn = "[object Uint8ClampedArray]", Mn = "[object Uint16Array]", fn = "[object Uint32Array]", Tn = /\b__p \+= '';/g, yt = /\b(__p \+=) '' \+/g, Pn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, gn = /&(?:amp|lt|gt|quot|#39);/g, At = /[&<>"']/g, Sn = RegExp(gn.source), zn = RegExp(At.source), Jt = /<%-([\s\S]+?)%>/g, Qn = /<%([\s\S]+?)%>/g, An = /<%=([\s\S]+?)%>/g, K = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tt = /^\w*$/, Ct = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dn = /[\\^$.*+?()[\]{}|]/g, un = RegExp(dn.source), Fn = /^\s+/, ii = /\s/, ai = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Yr = /\{\n\/\* \[wrapped with (.+)\] \*/, Cn = /,? & /, Ln = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Wi = /[()=,{}\[\]\/\s]/, Bi = /\\(\\)?/g, fr = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, si = /\w*$/, Si = /^[-+]0x[0-9a-f]+$/i, H = /^0b[01]+$/i, Lt = /^\[object .+?Constructor\]$/, dt = /^0o[0-7]+$/i, ur = /^(?:0|[1-9]\d*)$/, Xr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _i = /($^)/, qr = /['\n\r\u2028\u2029\\]/g, zi = "\\ud800-\\udfff", Gr = "\\u0300-\\u036f", Zr = "\\ufe20-\\ufe2f", jr = "\\u20d0-\\u20ff", Pl = Gr + Zr + jr, Fl = "\\u2700-\\u27bf", Wl = "a-z\\xdf-\\xf6\\xf8-\\xff", nf = "\\xac\\xb1\\xd7\\xf7", P = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ft = "\\u2000-\\u206f", Et = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bl = "A-Z\\xc0-\\xd6\\xd8-\\xde", Hl = "\\ufe0e\\ufe0f", Kr = nf + P + Ft + Et, Jr = "['’]", rf = "[" + zi + "]", Yl = "[" + Kr + "]", ar = "[" + Pl + "]", Xl = "\\d+", a0 = "[" + Fl + "]", ha = "[" + Wl + "]", ca = "[^" + zi + Kr + Xl + Fl + Wl + Bl + "]", lf = "\\ud83c[\\udffb-\\udfff]", s0 = "(?:" + ar + "|" + lf + ")", ga = "[^" + zi + "]", of = "(?:\\ud83c[\\udde6-\\uddff]){2}", ff = "[\\ud800-\\udbff][\\udc00-\\udfff]", sr = "[" + Bl + "]", da = "\\u200d", ma = "(?:" + ha + "|" + ca + ")", _0 = "(?:" + sr + "|" + ca + ")", ya = "(?:" + Jr + "(?:d|ll|m|re|s|t|ve))?", ba = "(?:" + Jr + "(?:D|LL|M|RE|S|T|VE))?", wa = s0 + "?", pa = "[" + Hl + "]?", h0 = "(?:" + da + "(?:" + [ga, of, ff].join("|") + ")" + pa + wa + ")*", c0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", g0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", va = pa + wa + h0, d0 = "(?:" + [a0, of, ff].join("|") + ")" + va, m0 = "(?:" + [ga + ar + "?", ar, of, ff, rf].join("|") + ")", y0 = RegExp(Jr, "g"), b0 = RegExp(ar, "g"), uf = RegExp(lf + "(?=" + lf + ")|" + m0 + va, "g"), w0 = RegExp([
      sr + "?" + ha + "+" + ya + "(?=" + [Yl, sr, "$"].join("|") + ")",
      _0 + "+" + ba + "(?=" + [Yl, sr + ma, "$"].join("|") + ")",
      sr + "?" + ma + "+" + ya,
      sr + "+" + ba,
      g0,
      c0,
      Xl,
      d0
    ].join("|"), "g"), p0 = RegExp("[" + da + zi + Pl + Hl + "]"), v0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, k0 = [
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
    ], x0 = -1, bt = {};
    bt[xt] = bt[tn] = bt[Un] = bt[nn] = bt[on] = bt[Jn] = bt[cn] = bt[Mn] = bt[fn] = !0, bt[Ue] = bt[$e] = bt[en] = bt[He] = bt[kt] = bt[ue] = bt[be] = bt[$] = bt[ye] = bt[We] = bt[et] = bt[oe] = bt[Me] = bt[Tt] = bt[gt] = !1;
    var mt = {};
    mt[Ue] = mt[$e] = mt[en] = mt[kt] = mt[He] = mt[ue] = mt[xt] = mt[tn] = mt[Un] = mt[nn] = mt[on] = mt[ye] = mt[We] = mt[et] = mt[oe] = mt[Me] = mt[Tt] = mt[St] = mt[Jn] = mt[cn] = mt[Mn] = mt[fn] = !0, mt[be] = mt[$] = mt[gt] = !1;
    var M0 = {
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
    }, T0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, S0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, z0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, A0 = parseFloat, C0 = parseInt, ka = typeof vi == "object" && vi && vi.Object === Object && vi, L0 = typeof self == "object" && self && self.Object === Object && self, Qt = ka || L0 || Function("return this")(), af = t && !t.nodeType && t, Hi = af && !0 && e && !e.nodeType && e, xa = Hi && Hi.exports === af, sf = xa && ka.process, Wn = function() {
      try {
        var N = Hi && Hi.require && Hi.require("util").types;
        return N || sf && sf.binding && sf.binding("util");
      } catch {
      }
    }(), Ma = Wn && Wn.isArrayBuffer, Ta = Wn && Wn.isDate, Sa = Wn && Wn.isMap, za = Wn && Wn.isRegExp, Aa = Wn && Wn.isSet, Ca = Wn && Wn.isTypedArray;
    function En(N, ee, Z) {
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
    function E0(N, ee, Z, we) {
      for (var Le = -1, nt = N == null ? 0 : N.length; ++Le < nt; ) {
        var Wt = N[Le];
        ee(we, Wt, Z(Wt), N);
      }
      return we;
    }
    function Bn(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length; ++Z < we && ee(N[Z], Z, N) !== !1; )
        ;
      return N;
    }
    function R0(N, ee) {
      for (var Z = N == null ? 0 : N.length; Z-- && ee(N[Z], Z, N) !== !1; )
        ;
      return N;
    }
    function La(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length; ++Z < we; )
        if (!ee(N[Z], Z, N))
          return !1;
      return !0;
    }
    function Ai(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length, Le = 0, nt = []; ++Z < we; ) {
        var Wt = N[Z];
        ee(Wt, Z, N) && (nt[Le++] = Wt);
      }
      return nt;
    }
    function ql(N, ee) {
      var Z = N == null ? 0 : N.length;
      return !!Z && _r(N, ee, 0) > -1;
    }
    function _f(N, ee, Z) {
      for (var we = -1, Le = N == null ? 0 : N.length; ++we < Le; )
        if (Z(ee, N[we]))
          return !0;
      return !1;
    }
    function wt(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length, Le = Array(we); ++Z < we; )
        Le[Z] = ee(N[Z], Z, N);
      return Le;
    }
    function Ci(N, ee) {
      for (var Z = -1, we = ee.length, Le = N.length; ++Z < we; )
        N[Le + Z] = ee[Z];
      return N;
    }
    function hf(N, ee, Z, we) {
      var Le = -1, nt = N == null ? 0 : N.length;
      for (we && nt && (Z = N[++Le]); ++Le < nt; )
        Z = ee(Z, N[Le], Le, N);
      return Z;
    }
    function I0(N, ee, Z, we) {
      var Le = N == null ? 0 : N.length;
      for (we && Le && (Z = N[--Le]); Le--; )
        Z = ee(Z, N[Le], Le, N);
      return Z;
    }
    function cf(N, ee) {
      for (var Z = -1, we = N == null ? 0 : N.length; ++Z < we; )
        if (ee(N[Z], Z, N))
          return !0;
      return !1;
    }
    var O0 = gf("length");
    function D0(N) {
      return N.split("");
    }
    function N0(N) {
      return N.match(Ln) || [];
    }
    function Ea(N, ee, Z) {
      var we;
      return Z(N, function(Le, nt, Wt) {
        if (ee(Le, nt, Wt))
          return we = nt, !1;
      }), we;
    }
    function Gl(N, ee, Z, we) {
      for (var Le = N.length, nt = Z + (we ? 1 : -1); we ? nt-- : ++nt < Le; )
        if (ee(N[nt], nt, N))
          return nt;
      return -1;
    }
    function _r(N, ee, Z) {
      return ee === ee ? j0(N, ee, Z) : Gl(N, Ra, Z);
    }
    function U0(N, ee, Z, we) {
      for (var Le = Z - 1, nt = N.length; ++Le < nt; )
        if (we(N[Le], ee))
          return Le;
      return -1;
    }
    function Ra(N) {
      return N !== N;
    }
    function Ia(N, ee) {
      var Z = N == null ? 0 : N.length;
      return Z ? mf(N, ee) / Z : ce;
    }
    function gf(N) {
      return function(ee) {
        return ee == null ? n : ee[N];
      };
    }
    function df(N) {
      return function(ee) {
        return N == null ? n : N[ee];
      };
    }
    function Oa(N, ee, Z, we, Le) {
      return Le(N, function(nt, Wt, at) {
        Z = we ? (we = !1, nt) : ee(Z, nt, Wt, at);
      }), Z;
    }
    function P0(N, ee) {
      var Z = N.length;
      for (N.sort(ee); Z--; )
        N[Z] = N[Z].value;
      return N;
    }
    function mf(N, ee) {
      for (var Z, we = -1, Le = N.length; ++we < Le; ) {
        var nt = ee(N[we]);
        nt !== n && (Z = Z === n ? nt : Z + nt);
      }
      return Z;
    }
    function yf(N, ee) {
      for (var Z = -1, we = Array(N); ++Z < N; )
        we[Z] = ee(Z);
      return we;
    }
    function F0(N, ee) {
      return wt(ee, function(Z) {
        return [Z, N[Z]];
      });
    }
    function Da(N) {
      return N && N.slice(0, Fa(N) + 1).replace(Fn, "");
    }
    function Rn(N) {
      return function(ee) {
        return N(ee);
      };
    }
    function bf(N, ee) {
      return wt(ee, function(Z) {
        return N[Z];
      });
    }
    function Qr(N, ee) {
      return N.has(ee);
    }
    function Na(N, ee) {
      for (var Z = -1, we = N.length; ++Z < we && _r(ee, N[Z], 0) > -1; )
        ;
      return Z;
    }
    function Ua(N, ee) {
      for (var Z = N.length; Z-- && _r(ee, N[Z], 0) > -1; )
        ;
      return Z;
    }
    function W0(N, ee) {
      for (var Z = N.length, we = 0; Z--; )
        N[Z] === ee && ++we;
      return we;
    }
    var B0 = df(M0), H0 = df(T0);
    function Y0(N) {
      return "\\" + z0[N];
    }
    function X0(N, ee) {
      return N == null ? n : N[ee];
    }
    function hr(N) {
      return p0.test(N);
    }
    function q0(N) {
      return v0.test(N);
    }
    function G0(N) {
      for (var ee, Z = []; !(ee = N.next()).done; )
        Z.push(ee.value);
      return Z;
    }
    function wf(N) {
      var ee = -1, Z = Array(N.size);
      return N.forEach(function(we, Le) {
        Z[++ee] = [Le, we];
      }), Z;
    }
    function Pa(N, ee) {
      return function(Z) {
        return N(ee(Z));
      };
    }
    function Li(N, ee) {
      for (var Z = -1, we = N.length, Le = 0, nt = []; ++Z < we; ) {
        var Wt = N[Z];
        (Wt === ee || Wt === d) && (N[Z] = d, nt[Le++] = Z);
      }
      return nt;
    }
    function Zl(N) {
      var ee = -1, Z = Array(N.size);
      return N.forEach(function(we) {
        Z[++ee] = we;
      }), Z;
    }
    function Z0(N) {
      var ee = -1, Z = Array(N.size);
      return N.forEach(function(we) {
        Z[++ee] = [we, we];
      }), Z;
    }
    function j0(N, ee, Z) {
      for (var we = Z - 1, Le = N.length; ++we < Le; )
        if (N[we] === ee)
          return we;
      return -1;
    }
    function K0(N, ee, Z) {
      for (var we = Z + 1; we--; )
        if (N[we] === ee)
          return we;
      return we;
    }
    function cr(N) {
      return hr(N) ? Q0(N) : O0(N);
    }
    function Vn(N) {
      return hr(N) ? V0(N) : D0(N);
    }
    function Fa(N) {
      for (var ee = N.length; ee-- && ii.test(N.charAt(ee)); )
        ;
      return ee;
    }
    var J0 = df(S0);
    function Q0(N) {
      for (var ee = uf.lastIndex = 0; uf.test(N); )
        ++ee;
      return ee;
    }
    function V0(N) {
      return N.match(uf) || [];
    }
    function $0(N) {
      return N.match(w0) || [];
    }
    var eg = function N(ee) {
      ee = ee == null ? Qt : gr.defaults(Qt.Object(), ee, gr.pick(Qt, k0));
      var Z = ee.Array, we = ee.Date, Le = ee.Error, nt = ee.Function, Wt = ee.Math, at = ee.Object, pf = ee.RegExp, tg = ee.String, Hn = ee.TypeError, jl = Z.prototype, ng = nt.prototype, dr = at.prototype, Kl = ee["__core-js_shared__"], Jl = ng.toString, ot = dr.hasOwnProperty, ig = 0, Wa = function() {
        var i = /[^.]+$/.exec(Kl && Kl.keys && Kl.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Ql = dr.toString, rg = Jl.call(at), lg = Qt._, og = pf(
        "^" + Jl.call(ot).replace(dn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Vl = xa ? ee.Buffer : n, Ei = ee.Symbol, $l = ee.Uint8Array, Ba = Vl ? Vl.allocUnsafe : n, eo = Pa(at.getPrototypeOf, at), Ha = at.create, Ya = dr.propertyIsEnumerable, to = jl.splice, Xa = Ei ? Ei.isConcatSpreadable : n, Vr = Ei ? Ei.iterator : n, Yi = Ei ? Ei.toStringTag : n, no = function() {
        try {
          var i = ji(at, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), fg = ee.clearTimeout !== Qt.clearTimeout && ee.clearTimeout, ug = we && we.now !== Qt.Date.now && we.now, ag = ee.setTimeout !== Qt.setTimeout && ee.setTimeout, io = Wt.ceil, ro = Wt.floor, vf = at.getOwnPropertySymbols, sg = Vl ? Vl.isBuffer : n, qa = ee.isFinite, _g = jl.join, hg = Pa(at.keys, at), Bt = Wt.max, rn = Wt.min, cg = we.now, gg = ee.parseInt, Ga = Wt.random, dg = jl.reverse, kf = ji(ee, "DataView"), $r = ji(ee, "Map"), xf = ji(ee, "Promise"), mr = ji(ee, "Set"), el = ji(ee, "WeakMap"), tl = ji(at, "create"), lo = el && new el(), yr = {}, mg = Ki(kf), yg = Ki($r), bg = Ki(xf), wg = Ki(mr), pg = Ki(el), oo = Ei ? Ei.prototype : n, nl = oo ? oo.valueOf : n, Za = oo ? oo.toString : n;
      function x(i) {
        if (Rt(i) && !Re(i) && !(i instanceof Be)) {
          if (i instanceof Yn)
            return i;
          if (ot.call(i, "__wrapped__"))
            return js(i);
        }
        return new Yn(i);
      }
      var br = function() {
        function i() {
        }
        return function(l) {
          if (!Mt(l))
            return {};
          if (Ha)
            return Ha(l);
          i.prototype = l;
          var s = new i();
          return i.prototype = n, s;
        };
      }();
      function fo() {
      }
      function Yn(i, l) {
        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!l, this.__index__ = 0, this.__values__ = n;
      }
      x.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Jt,
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
          _: x
        }
      }, x.prototype = fo.prototype, x.prototype.constructor = x, Yn.prototype = br(fo.prototype), Yn.prototype.constructor = Yn;
      function Be(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = he, this.__views__ = [];
      }
      function vg() {
        var i = new Be(this.__wrapped__);
        return i.__actions__ = mn(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = mn(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = mn(this.__views__), i;
      }
      function kg() {
        if (this.__filtered__) {
          var i = new Be(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function xg() {
        var i = this.__wrapped__.value(), l = this.__dir__, s = Re(i), m = l < 0, b = s ? i.length : 0, M = Dd(0, b, this.__views__), L = M.start, I = M.end, F = I - L, ne = m ? I : L - 1, re = this.__iteratees__, fe = re.length, ge = 0, pe = rn(F, this.__takeCount__);
        if (!s || !m && b == F && pe == F)
          return ys(i, this.__actions__);
        var Te = [];
        e:
          for (; F-- && ge < pe; ) {
            ne += l;
            for (var De = -1, Se = i[ne]; ++De < fe; ) {
              var Fe = re[De], Xe = Fe.iteratee, Dn = Fe.type, _n = Xe(Se);
              if (Dn == te)
                Se = _n;
              else if (!_n) {
                if (Dn == ie)
                  continue e;
                break e;
              }
            }
            Te[ge++] = Se;
          }
        return Te;
      }
      Be.prototype = br(fo.prototype), Be.prototype.constructor = Be;
      function Xi(i) {
        var l = -1, s = i == null ? 0 : i.length;
        for (this.clear(); ++l < s; ) {
          var m = i[l];
          this.set(m[0], m[1]);
        }
      }
      function Mg() {
        this.__data__ = tl ? tl(null) : {}, this.size = 0;
      }
      function Tg(i) {
        var l = this.has(i) && delete this.__data__[i];
        return this.size -= l ? 1 : 0, l;
      }
      function Sg(i) {
        var l = this.__data__;
        if (tl) {
          var s = l[i];
          return s === _ ? n : s;
        }
        return ot.call(l, i) ? l[i] : n;
      }
      function zg(i) {
        var l = this.__data__;
        return tl ? l[i] !== n : ot.call(l, i);
      }
      function Ag(i, l) {
        var s = this.__data__;
        return this.size += this.has(i) ? 0 : 1, s[i] = tl && l === n ? _ : l, this;
      }
      Xi.prototype.clear = Mg, Xi.prototype.delete = Tg, Xi.prototype.get = Sg, Xi.prototype.has = zg, Xi.prototype.set = Ag;
      function hi(i) {
        var l = -1, s = i == null ? 0 : i.length;
        for (this.clear(); ++l < s; ) {
          var m = i[l];
          this.set(m[0], m[1]);
        }
      }
      function Cg() {
        this.__data__ = [], this.size = 0;
      }
      function Lg(i) {
        var l = this.__data__, s = uo(l, i);
        if (s < 0)
          return !1;
        var m = l.length - 1;
        return s == m ? l.pop() : to.call(l, s, 1), --this.size, !0;
      }
      function Eg(i) {
        var l = this.__data__, s = uo(l, i);
        return s < 0 ? n : l[s][1];
      }
      function Rg(i) {
        return uo(this.__data__, i) > -1;
      }
      function Ig(i, l) {
        var s = this.__data__, m = uo(s, i);
        return m < 0 ? (++this.size, s.push([i, l])) : s[m][1] = l, this;
      }
      hi.prototype.clear = Cg, hi.prototype.delete = Lg, hi.prototype.get = Eg, hi.prototype.has = Rg, hi.prototype.set = Ig;
      function ci(i) {
        var l = -1, s = i == null ? 0 : i.length;
        for (this.clear(); ++l < s; ) {
          var m = i[l];
          this.set(m[0], m[1]);
        }
      }
      function Og() {
        this.size = 0, this.__data__ = {
          hash: new Xi(),
          map: new ($r || hi)(),
          string: new Xi()
        };
      }
      function Dg(i) {
        var l = vo(this, i).delete(i);
        return this.size -= l ? 1 : 0, l;
      }
      function Ng(i) {
        return vo(this, i).get(i);
      }
      function Ug(i) {
        return vo(this, i).has(i);
      }
      function Pg(i, l) {
        var s = vo(this, i), m = s.size;
        return s.set(i, l), this.size += s.size == m ? 0 : 1, this;
      }
      ci.prototype.clear = Og, ci.prototype.delete = Dg, ci.prototype.get = Ng, ci.prototype.has = Ug, ci.prototype.set = Pg;
      function qi(i) {
        var l = -1, s = i == null ? 0 : i.length;
        for (this.__data__ = new ci(); ++l < s; )
          this.add(i[l]);
      }
      function Fg(i) {
        return this.__data__.set(i, _), this;
      }
      function Wg(i) {
        return this.__data__.has(i);
      }
      qi.prototype.add = qi.prototype.push = Fg, qi.prototype.has = Wg;
      function $n(i) {
        var l = this.__data__ = new hi(i);
        this.size = l.size;
      }
      function Bg() {
        this.__data__ = new hi(), this.size = 0;
      }
      function Hg(i) {
        var l = this.__data__, s = l.delete(i);
        return this.size = l.size, s;
      }
      function Yg(i) {
        return this.__data__.get(i);
      }
      function Xg(i) {
        return this.__data__.has(i);
      }
      function qg(i, l) {
        var s = this.__data__;
        if (s instanceof hi) {
          var m = s.__data__;
          if (!$r || m.length < o - 1)
            return m.push([i, l]), this.size = ++s.size, this;
          s = this.__data__ = new ci(m);
        }
        return s.set(i, l), this.size = s.size, this;
      }
      $n.prototype.clear = Bg, $n.prototype.delete = Hg, $n.prototype.get = Yg, $n.prototype.has = Xg, $n.prototype.set = qg;
      function ja(i, l) {
        var s = Re(i), m = !s && Ji(i), b = !s && !m && Ni(i), M = !s && !m && !b && kr(i), L = s || m || b || M, I = L ? yf(i.length, tg) : [], F = I.length;
        for (var ne in i)
          (l || ot.call(i, ne)) && !(L && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ne == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          b && (ne == "offset" || ne == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          M && (ne == "buffer" || ne == "byteLength" || ne == "byteOffset") || // Skip index properties.
          yi(ne, F))) && I.push(ne);
        return I;
      }
      function Ka(i) {
        var l = i.length;
        return l ? i[Of(0, l - 1)] : n;
      }
      function Gg(i, l) {
        return ko(mn(i), Gi(l, 0, i.length));
      }
      function Zg(i) {
        return ko(mn(i));
      }
      function Mf(i, l, s) {
        (s !== n && !ei(i[l], s) || s === n && !(l in i)) && gi(i, l, s);
      }
      function il(i, l, s) {
        var m = i[l];
        (!(ot.call(i, l) && ei(m, s)) || s === n && !(l in i)) && gi(i, l, s);
      }
      function uo(i, l) {
        for (var s = i.length; s--; )
          if (ei(i[s][0], l))
            return s;
        return -1;
      }
      function jg(i, l, s, m) {
        return Ri(i, function(b, M, L) {
          l(m, b, s(b), L);
        }), m;
      }
      function Ja(i, l) {
        return i && li(l, qt(l), i);
      }
      function Kg(i, l) {
        return i && li(l, bn(l), i);
      }
      function gi(i, l, s) {
        l == "__proto__" && no ? no(i, l, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : i[l] = s;
      }
      function Tf(i, l) {
        for (var s = -1, m = l.length, b = Z(m), M = i == null; ++s < m; )
          b[s] = M ? n : lu(i, l[s]);
        return b;
      }
      function Gi(i, l, s) {
        return i === i && (s !== n && (i = i <= s ? i : s), l !== n && (i = i >= l ? i : l)), i;
      }
      function Xn(i, l, s, m, b, M) {
        var L, I = l & h, F = l & g, ne = l & w;
        if (s && (L = b ? s(i, m, b, M) : s(i)), L !== n)
          return L;
        if (!Mt(i))
          return i;
        var re = Re(i);
        if (re) {
          if (L = Ud(i), !I)
            return mn(i, L);
        } else {
          var fe = ln(i), ge = fe == $ || fe == Ce;
          if (Ni(i))
            return ps(i, I);
          if (fe == et || fe == Ue || ge && !b) {
            if (L = F || ge ? {} : Fs(i), !I)
              return F ? Sd(i, Kg(L, i)) : Td(i, Ja(L, i));
          } else {
            if (!mt[fe])
              return b ? i : {};
            L = Pd(i, fe, I);
          }
        }
        M || (M = new $n());
        var pe = M.get(i);
        if (pe)
          return pe;
        M.set(i, L), g_(i) ? i.forEach(function(Se) {
          L.add(Xn(Se, l, s, Se, i, M));
        }) : h_(i) && i.forEach(function(Se, Fe) {
          L.set(Fe, Xn(Se, l, s, Fe, i, M));
        });
        var Te = ne ? F ? qf : Xf : F ? bn : qt, De = re ? n : Te(i);
        return Bn(De || i, function(Se, Fe) {
          De && (Fe = Se, Se = i[Fe]), il(L, Fe, Xn(Se, l, s, Fe, i, M));
        }), L;
      }
      function Jg(i) {
        var l = qt(i);
        return function(s) {
          return Qa(s, i, l);
        };
      }
      function Qa(i, l, s) {
        var m = s.length;
        if (i == null)
          return !m;
        for (i = at(i); m--; ) {
          var b = s[m], M = l[b], L = i[b];
          if (L === n && !(b in i) || !M(L))
            return !1;
        }
        return !0;
      }
      function Va(i, l, s) {
        if (typeof i != "function")
          throw new Hn(u);
        return sl(function() {
          i.apply(n, s);
        }, l);
      }
      function rl(i, l, s, m) {
        var b = -1, M = ql, L = !0, I = i.length, F = [], ne = l.length;
        if (!I)
          return F;
        s && (l = wt(l, Rn(s))), m ? (M = _f, L = !1) : l.length >= o && (M = Qr, L = !1, l = new qi(l));
        e:
          for (; ++b < I; ) {
            var re = i[b], fe = s == null ? re : s(re);
            if (re = m || re !== 0 ? re : 0, L && fe === fe) {
              for (var ge = ne; ge--; )
                if (l[ge] === fe)
                  continue e;
              F.push(re);
            } else
              M(l, fe, m) || F.push(re);
          }
        return F;
      }
      var Ri = Ts(ri), $a = Ts(zf, !0);
      function Qg(i, l) {
        var s = !0;
        return Ri(i, function(m, b, M) {
          return s = !!l(m, b, M), s;
        }), s;
      }
      function ao(i, l, s) {
        for (var m = -1, b = i.length; ++m < b; ) {
          var M = i[m], L = l(M);
          if (L != null && (I === n ? L === L && !On(L) : s(L, I)))
            var I = L, F = M;
        }
        return F;
      }
      function Vg(i, l, s, m) {
        var b = i.length;
        for (s = Ie(s), s < 0 && (s = -s > b ? 0 : b + s), m = m === n || m > b ? b : Ie(m), m < 0 && (m += b), m = s > m ? 0 : m_(m); s < m; )
          i[s++] = l;
        return i;
      }
      function es(i, l) {
        var s = [];
        return Ri(i, function(m, b, M) {
          l(m, b, M) && s.push(m);
        }), s;
      }
      function Vt(i, l, s, m, b) {
        var M = -1, L = i.length;
        for (s || (s = Wd), b || (b = []); ++M < L; ) {
          var I = i[M];
          l > 0 && s(I) ? l > 1 ? Vt(I, l - 1, s, m, b) : Ci(b, I) : m || (b[b.length] = I);
        }
        return b;
      }
      var Sf = Ss(), ts = Ss(!0);
      function ri(i, l) {
        return i && Sf(i, l, qt);
      }
      function zf(i, l) {
        return i && ts(i, l, qt);
      }
      function so(i, l) {
        return Ai(l, function(s) {
          return bi(i[s]);
        });
      }
      function Zi(i, l) {
        l = Oi(l, i);
        for (var s = 0, m = l.length; i != null && s < m; )
          i = i[oi(l[s++])];
        return s && s == m ? i : n;
      }
      function ns(i, l, s) {
        var m = l(i);
        return Re(i) ? m : Ci(m, s(i));
      }
      function an(i) {
        return i == null ? i === n ? Xt : je : Yi && Yi in at(i) ? Od(i) : Zd(i);
      }
      function Af(i, l) {
        return i > l;
      }
      function $g(i, l) {
        return i != null && ot.call(i, l);
      }
      function ed(i, l) {
        return i != null && l in at(i);
      }
      function td(i, l, s) {
        return i >= rn(l, s) && i < Bt(l, s);
      }
      function Cf(i, l, s) {
        for (var m = s ? _f : ql, b = i[0].length, M = i.length, L = M, I = Z(M), F = 1 / 0, ne = []; L--; ) {
          var re = i[L];
          L && l && (re = wt(re, Rn(l))), F = rn(re.length, F), I[L] = !s && (l || b >= 120 && re.length >= 120) ? new qi(L && re) : n;
        }
        re = i[0];
        var fe = -1, ge = I[0];
        e:
          for (; ++fe < b && ne.length < F; ) {
            var pe = re[fe], Te = l ? l(pe) : pe;
            if (pe = s || pe !== 0 ? pe : 0, !(ge ? Qr(ge, Te) : m(ne, Te, s))) {
              for (L = M; --L; ) {
                var De = I[L];
                if (!(De ? Qr(De, Te) : m(i[L], Te, s)))
                  continue e;
              }
              ge && ge.push(Te), ne.push(pe);
            }
          }
        return ne;
      }
      function nd(i, l, s, m) {
        return ri(i, function(b, M, L) {
          l(m, s(b), M, L);
        }), m;
      }
      function ll(i, l, s) {
        l = Oi(l, i), i = Ys(i, l);
        var m = i == null ? i : i[oi(Gn(l))];
        return m == null ? n : En(m, i, s);
      }
      function is(i) {
        return Rt(i) && an(i) == Ue;
      }
      function id(i) {
        return Rt(i) && an(i) == en;
      }
      function rd(i) {
        return Rt(i) && an(i) == ue;
      }
      function ol(i, l, s, m, b) {
        return i === l ? !0 : i == null || l == null || !Rt(i) && !Rt(l) ? i !== i && l !== l : ld(i, l, s, m, ol, b);
      }
      function ld(i, l, s, m, b, M) {
        var L = Re(i), I = Re(l), F = L ? $e : ln(i), ne = I ? $e : ln(l);
        F = F == Ue ? et : F, ne = ne == Ue ? et : ne;
        var re = F == et, fe = ne == et, ge = F == ne;
        if (ge && Ni(i)) {
          if (!Ni(l))
            return !1;
          L = !0, re = !1;
        }
        if (ge && !re)
          return M || (M = new $n()), L || kr(i) ? Ns(i, l, s, m, b, M) : Rd(i, l, F, s, m, b, M);
        if (!(s & v)) {
          var pe = re && ot.call(i, "__wrapped__"), Te = fe && ot.call(l, "__wrapped__");
          if (pe || Te) {
            var De = pe ? i.value() : i, Se = Te ? l.value() : l;
            return M || (M = new $n()), b(De, Se, s, m, M);
          }
        }
        return ge ? (M || (M = new $n()), Id(i, l, s, m, b, M)) : !1;
      }
      function od(i) {
        return Rt(i) && ln(i) == ye;
      }
      function Lf(i, l, s, m) {
        var b = s.length, M = b, L = !m;
        if (i == null)
          return !M;
        for (i = at(i); b--; ) {
          var I = s[b];
          if (L && I[2] ? I[1] !== i[I[0]] : !(I[0] in i))
            return !1;
        }
        for (; ++b < M; ) {
          I = s[b];
          var F = I[0], ne = i[F], re = I[1];
          if (L && I[2]) {
            if (ne === n && !(F in i))
              return !1;
          } else {
            var fe = new $n();
            if (m)
              var ge = m(ne, re, F, i, l, fe);
            if (!(ge === n ? ol(re, ne, v | S, m, fe) : ge))
              return !1;
          }
        }
        return !0;
      }
      function rs(i) {
        if (!Mt(i) || Hd(i))
          return !1;
        var l = bi(i) ? og : Lt;
        return l.test(Ki(i));
      }
      function fd(i) {
        return Rt(i) && an(i) == oe;
      }
      function ud(i) {
        return Rt(i) && ln(i) == Me;
      }
      function ad(i) {
        return Rt(i) && Ao(i.length) && !!bt[an(i)];
      }
      function ls(i) {
        return typeof i == "function" ? i : i == null ? wn : typeof i == "object" ? Re(i) ? us(i[0], i[1]) : fs(i) : z_(i);
      }
      function Ef(i) {
        if (!al(i))
          return hg(i);
        var l = [];
        for (var s in at(i))
          ot.call(i, s) && s != "constructor" && l.push(s);
        return l;
      }
      function sd(i) {
        if (!Mt(i))
          return Gd(i);
        var l = al(i), s = [];
        for (var m in i)
          m == "constructor" && (l || !ot.call(i, m)) || s.push(m);
        return s;
      }
      function Rf(i, l) {
        return i < l;
      }
      function os(i, l) {
        var s = -1, m = yn(i) ? Z(i.length) : [];
        return Ri(i, function(b, M, L) {
          m[++s] = l(b, M, L);
        }), m;
      }
      function fs(i) {
        var l = Zf(i);
        return l.length == 1 && l[0][2] ? Bs(l[0][0], l[0][1]) : function(s) {
          return s === i || Lf(s, i, l);
        };
      }
      function us(i, l) {
        return Kf(i) && Ws(l) ? Bs(oi(i), l) : function(s) {
          var m = lu(s, i);
          return m === n && m === l ? ou(s, i) : ol(l, m, v | S);
        };
      }
      function _o(i, l, s, m, b) {
        i !== l && Sf(l, function(M, L) {
          if (b || (b = new $n()), Mt(M))
            _d(i, l, L, s, _o, m, b);
          else {
            var I = m ? m(Qf(i, L), M, L + "", i, l, b) : n;
            I === n && (I = M), Mf(i, L, I);
          }
        }, bn);
      }
      function _d(i, l, s, m, b, M, L) {
        var I = Qf(i, s), F = Qf(l, s), ne = L.get(F);
        if (ne) {
          Mf(i, s, ne);
          return;
        }
        var re = M ? M(I, F, s + "", i, l, L) : n, fe = re === n;
        if (fe) {
          var ge = Re(F), pe = !ge && Ni(F), Te = !ge && !pe && kr(F);
          re = F, ge || pe || Te ? Re(I) ? re = I : Dt(I) ? re = mn(I) : pe ? (fe = !1, re = ps(F, !0)) : Te ? (fe = !1, re = vs(F, !0)) : re = [] : _l(F) || Ji(F) ? (re = I, Ji(I) ? re = y_(I) : (!Mt(I) || bi(I)) && (re = Fs(F))) : fe = !1;
        }
        fe && (L.set(F, re), b(re, F, m, M, L), L.delete(F)), Mf(i, s, re);
      }
      function as(i, l) {
        var s = i.length;
        if (s)
          return l += l < 0 ? s : 0, yi(l, s) ? i[l] : n;
      }
      function ss(i, l, s) {
        l.length ? l = wt(l, function(M) {
          return Re(M) ? function(L) {
            return Zi(L, M.length === 1 ? M[0] : M);
          } : M;
        }) : l = [wn];
        var m = -1;
        l = wt(l, Rn(xe()));
        var b = os(i, function(M, L, I) {
          var F = wt(l, function(ne) {
            return ne(M);
          });
          return { criteria: F, index: ++m, value: M };
        });
        return P0(b, function(M, L) {
          return Md(M, L, s);
        });
      }
      function hd(i, l) {
        return _s(i, l, function(s, m) {
          return ou(i, m);
        });
      }
      function _s(i, l, s) {
        for (var m = -1, b = l.length, M = {}; ++m < b; ) {
          var L = l[m], I = Zi(i, L);
          s(I, L) && fl(M, Oi(L, i), I);
        }
        return M;
      }
      function cd(i) {
        return function(l) {
          return Zi(l, i);
        };
      }
      function If(i, l, s, m) {
        var b = m ? U0 : _r, M = -1, L = l.length, I = i;
        for (i === l && (l = mn(l)), s && (I = wt(i, Rn(s))); ++M < L; )
          for (var F = 0, ne = l[M], re = s ? s(ne) : ne; (F = b(I, re, F, m)) > -1; )
            I !== i && to.call(I, F, 1), to.call(i, F, 1);
        return i;
      }
      function hs(i, l) {
        for (var s = i ? l.length : 0, m = s - 1; s--; ) {
          var b = l[s];
          if (s == m || b !== M) {
            var M = b;
            yi(b) ? to.call(i, b, 1) : Uf(i, b);
          }
        }
        return i;
      }
      function Of(i, l) {
        return i + ro(Ga() * (l - i + 1));
      }
      function gd(i, l, s, m) {
        for (var b = -1, M = Bt(io((l - i) / (s || 1)), 0), L = Z(M); M--; )
          L[m ? M : ++b] = i, i += s;
        return L;
      }
      function Df(i, l) {
        var s = "";
        if (!i || l < 1 || l > C)
          return s;
        do
          l % 2 && (s += i), l = ro(l / 2), l && (i += i);
        while (l);
        return s;
      }
      function Ne(i, l) {
        return Vf(Hs(i, l, wn), i + "");
      }
      function dd(i) {
        return Ka(xr(i));
      }
      function md(i, l) {
        var s = xr(i);
        return ko(s, Gi(l, 0, s.length));
      }
      function fl(i, l, s, m) {
        if (!Mt(i))
          return i;
        l = Oi(l, i);
        for (var b = -1, M = l.length, L = M - 1, I = i; I != null && ++b < M; ) {
          var F = oi(l[b]), ne = s;
          if (F === "__proto__" || F === "constructor" || F === "prototype")
            return i;
          if (b != L) {
            var re = I[F];
            ne = m ? m(re, F, I) : n, ne === n && (ne = Mt(re) ? re : yi(l[b + 1]) ? [] : {});
          }
          il(I, F, ne), I = I[F];
        }
        return i;
      }
      var cs = lo ? function(i, l) {
        return lo.set(i, l), i;
      } : wn, yd = no ? function(i, l) {
        return no(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: uu(l),
          writable: !0
        });
      } : wn;
      function bd(i) {
        return ko(xr(i));
      }
      function qn(i, l, s) {
        var m = -1, b = i.length;
        l < 0 && (l = -l > b ? 0 : b + l), s = s > b ? b : s, s < 0 && (s += b), b = l > s ? 0 : s - l >>> 0, l >>>= 0;
        for (var M = Z(b); ++m < b; )
          M[m] = i[m + l];
        return M;
      }
      function wd(i, l) {
        var s;
        return Ri(i, function(m, b, M) {
          return s = l(m, b, M), !s;
        }), !!s;
      }
      function ho(i, l, s) {
        var m = 0, b = i == null ? m : i.length;
        if (typeof l == "number" && l === l && b <= Kt) {
          for (; m < b; ) {
            var M = m + b >>> 1, L = i[M];
            L !== null && !On(L) && (s ? L <= l : L < l) ? m = M + 1 : b = M;
          }
          return b;
        }
        return Nf(i, l, wn, s);
      }
      function Nf(i, l, s, m) {
        var b = 0, M = i == null ? 0 : i.length;
        if (M === 0)
          return 0;
        l = s(l);
        for (var L = l !== l, I = l === null, F = On(l), ne = l === n; b < M; ) {
          var re = ro((b + M) / 2), fe = s(i[re]), ge = fe !== n, pe = fe === null, Te = fe === fe, De = On(fe);
          if (L)
            var Se = m || Te;
          else
            ne ? Se = Te && (m || ge) : I ? Se = Te && ge && (m || !pe) : F ? Se = Te && ge && !pe && (m || !De) : pe || De ? Se = !1 : Se = m ? fe <= l : fe < l;
          Se ? b = re + 1 : M = re;
        }
        return rn(M, vt);
      }
      function gs(i, l) {
        for (var s = -1, m = i.length, b = 0, M = []; ++s < m; ) {
          var L = i[s], I = l ? l(L) : L;
          if (!s || !ei(I, F)) {
            var F = I;
            M[b++] = L === 0 ? 0 : L;
          }
        }
        return M;
      }
      function ds(i) {
        return typeof i == "number" ? i : On(i) ? ce : +i;
      }
      function In(i) {
        if (typeof i == "string")
          return i;
        if (Re(i))
          return wt(i, In) + "";
        if (On(i))
          return Za ? Za.call(i) : "";
        var l = i + "";
        return l == "0" && 1 / i == -W ? "-0" : l;
      }
      function Ii(i, l, s) {
        var m = -1, b = ql, M = i.length, L = !0, I = [], F = I;
        if (s)
          L = !1, b = _f;
        else if (M >= o) {
          var ne = l ? null : Ld(i);
          if (ne)
            return Zl(ne);
          L = !1, b = Qr, F = new qi();
        } else
          F = l ? [] : I;
        e:
          for (; ++m < M; ) {
            var re = i[m], fe = l ? l(re) : re;
            if (re = s || re !== 0 ? re : 0, L && fe === fe) {
              for (var ge = F.length; ge--; )
                if (F[ge] === fe)
                  continue e;
              l && F.push(fe), I.push(re);
            } else
              b(F, fe, s) || (F !== I && F.push(fe), I.push(re));
          }
        return I;
      }
      function Uf(i, l) {
        return l = Oi(l, i), i = Ys(i, l), i == null || delete i[oi(Gn(l))];
      }
      function ms(i, l, s, m) {
        return fl(i, l, s(Zi(i, l)), m);
      }
      function co(i, l, s, m) {
        for (var b = i.length, M = m ? b : -1; (m ? M-- : ++M < b) && l(i[M], M, i); )
          ;
        return s ? qn(i, m ? 0 : M, m ? M + 1 : b) : qn(i, m ? M + 1 : 0, m ? b : M);
      }
      function ys(i, l) {
        var s = i;
        return s instanceof Be && (s = s.value()), hf(l, function(m, b) {
          return b.func.apply(b.thisArg, Ci([m], b.args));
        }, s);
      }
      function Pf(i, l, s) {
        var m = i.length;
        if (m < 2)
          return m ? Ii(i[0]) : [];
        for (var b = -1, M = Z(m); ++b < m; )
          for (var L = i[b], I = -1; ++I < m; )
            I != b && (M[b] = rl(M[b] || L, i[I], l, s));
        return Ii(Vt(M, 1), l, s);
      }
      function bs(i, l, s) {
        for (var m = -1, b = i.length, M = l.length, L = {}; ++m < b; ) {
          var I = m < M ? l[m] : n;
          s(L, i[m], I);
        }
        return L;
      }
      function Ff(i) {
        return Dt(i) ? i : [];
      }
      function Wf(i) {
        return typeof i == "function" ? i : wn;
      }
      function Oi(i, l) {
        return Re(i) ? i : Kf(i, l) ? [i] : Zs(rt(i));
      }
      var pd = Ne;
      function Di(i, l, s) {
        var m = i.length;
        return s = s === n ? m : s, !l && s >= m ? i : qn(i, l, s);
      }
      var ws = fg || function(i) {
        return Qt.clearTimeout(i);
      };
      function ps(i, l) {
        if (l)
          return i.slice();
        var s = i.length, m = Ba ? Ba(s) : new i.constructor(s);
        return i.copy(m), m;
      }
      function Bf(i) {
        var l = new i.constructor(i.byteLength);
        return new $l(l).set(new $l(i)), l;
      }
      function vd(i, l) {
        var s = l ? Bf(i.buffer) : i.buffer;
        return new i.constructor(s, i.byteOffset, i.byteLength);
      }
      function kd(i) {
        var l = new i.constructor(i.source, si.exec(i));
        return l.lastIndex = i.lastIndex, l;
      }
      function xd(i) {
        return nl ? at(nl.call(i)) : {};
      }
      function vs(i, l) {
        var s = l ? Bf(i.buffer) : i.buffer;
        return new i.constructor(s, i.byteOffset, i.length);
      }
      function ks(i, l) {
        if (i !== l) {
          var s = i !== n, m = i === null, b = i === i, M = On(i), L = l !== n, I = l === null, F = l === l, ne = On(l);
          if (!I && !ne && !M && i > l || M && L && F && !I && !ne || m && L && F || !s && F || !b)
            return 1;
          if (!m && !M && !ne && i < l || ne && s && b && !m && !M || I && s && b || !L && b || !F)
            return -1;
        }
        return 0;
      }
      function Md(i, l, s) {
        for (var m = -1, b = i.criteria, M = l.criteria, L = b.length, I = s.length; ++m < L; ) {
          var F = ks(b[m], M[m]);
          if (F) {
            if (m >= I)
              return F;
            var ne = s[m];
            return F * (ne == "desc" ? -1 : 1);
          }
        }
        return i.index - l.index;
      }
      function xs(i, l, s, m) {
        for (var b = -1, M = i.length, L = s.length, I = -1, F = l.length, ne = Bt(M - L, 0), re = Z(F + ne), fe = !m; ++I < F; )
          re[I] = l[I];
        for (; ++b < L; )
          (fe || b < M) && (re[s[b]] = i[b]);
        for (; ne--; )
          re[I++] = i[b++];
        return re;
      }
      function Ms(i, l, s, m) {
        for (var b = -1, M = i.length, L = -1, I = s.length, F = -1, ne = l.length, re = Bt(M - I, 0), fe = Z(re + ne), ge = !m; ++b < re; )
          fe[b] = i[b];
        for (var pe = b; ++F < ne; )
          fe[pe + F] = l[F];
        for (; ++L < I; )
          (ge || b < M) && (fe[pe + s[L]] = i[b++]);
        return fe;
      }
      function mn(i, l) {
        var s = -1, m = i.length;
        for (l || (l = Z(m)); ++s < m; )
          l[s] = i[s];
        return l;
      }
      function li(i, l, s, m) {
        var b = !s;
        s || (s = {});
        for (var M = -1, L = l.length; ++M < L; ) {
          var I = l[M], F = m ? m(s[I], i[I], I, s, i) : n;
          F === n && (F = i[I]), b ? gi(s, I, F) : il(s, I, F);
        }
        return s;
      }
      function Td(i, l) {
        return li(i, jf(i), l);
      }
      function Sd(i, l) {
        return li(i, Us(i), l);
      }
      function go(i, l) {
        return function(s, m) {
          var b = Re(s) ? E0 : jg, M = l ? l() : {};
          return b(s, i, xe(m, 2), M);
        };
      }
      function wr(i) {
        return Ne(function(l, s) {
          var m = -1, b = s.length, M = b > 1 ? s[b - 1] : n, L = b > 2 ? s[2] : n;
          for (M = i.length > 3 && typeof M == "function" ? (b--, M) : n, L && sn(s[0], s[1], L) && (M = b < 3 ? n : M, b = 1), l = at(l); ++m < b; ) {
            var I = s[m];
            I && i(l, I, m, M);
          }
          return l;
        });
      }
      function Ts(i, l) {
        return function(s, m) {
          if (s == null)
            return s;
          if (!yn(s))
            return i(s, m);
          for (var b = s.length, M = l ? b : -1, L = at(s); (l ? M-- : ++M < b) && m(L[M], M, L) !== !1; )
            ;
          return s;
        };
      }
      function Ss(i) {
        return function(l, s, m) {
          for (var b = -1, M = at(l), L = m(l), I = L.length; I--; ) {
            var F = L[i ? I : ++b];
            if (s(M[F], F, M) === !1)
              break;
          }
          return l;
        };
      }
      function zd(i, l, s) {
        var m = l & k, b = ul(i);
        function M() {
          var L = this && this !== Qt && this instanceof M ? b : i;
          return L.apply(m ? s : this, arguments);
        }
        return M;
      }
      function zs(i) {
        return function(l) {
          l = rt(l);
          var s = hr(l) ? Vn(l) : n, m = s ? s[0] : l.charAt(0), b = s ? Di(s, 1).join("") : l.slice(1);
          return m[i]() + b;
        };
      }
      function pr(i) {
        return function(l) {
          return hf(T_(M_(l).replace(y0, "")), i, "");
        };
      }
      function ul(i) {
        return function() {
          var l = arguments;
          switch (l.length) {
            case 0:
              return new i();
            case 1:
              return new i(l[0]);
            case 2:
              return new i(l[0], l[1]);
            case 3:
              return new i(l[0], l[1], l[2]);
            case 4:
              return new i(l[0], l[1], l[2], l[3]);
            case 5:
              return new i(l[0], l[1], l[2], l[3], l[4]);
            case 6:
              return new i(l[0], l[1], l[2], l[3], l[4], l[5]);
            case 7:
              return new i(l[0], l[1], l[2], l[3], l[4], l[5], l[6]);
          }
          var s = br(i.prototype), m = i.apply(s, l);
          return Mt(m) ? m : s;
        };
      }
      function Ad(i, l, s) {
        var m = ul(i);
        function b() {
          for (var M = arguments.length, L = Z(M), I = M, F = vr(b); I--; )
            L[I] = arguments[I];
          var ne = M < 3 && L[0] !== F && L[M - 1] !== F ? [] : Li(L, F);
          if (M -= ne.length, M < s)
            return Rs(
              i,
              l,
              mo,
              b.placeholder,
              n,
              L,
              ne,
              n,
              n,
              s - M
            );
          var re = this && this !== Qt && this instanceof b ? m : i;
          return En(re, this, L);
        }
        return b;
      }
      function As(i) {
        return function(l, s, m) {
          var b = at(l);
          if (!yn(l)) {
            var M = xe(s, 3);
            l = qt(l), s = function(I) {
              return M(b[I], I, b);
            };
          }
          var L = i(l, s, m);
          return L > -1 ? b[M ? l[L] : L] : n;
        };
      }
      function Cs(i) {
        return mi(function(l) {
          var s = l.length, m = s, b = Yn.prototype.thru;
          for (i && l.reverse(); m--; ) {
            var M = l[m];
            if (typeof M != "function")
              throw new Hn(u);
            if (b && !L && po(M) == "wrapper")
              var L = new Yn([], !0);
          }
          for (m = L ? m : s; ++m < s; ) {
            M = l[m];
            var I = po(M), F = I == "wrapper" ? Gf(M) : n;
            F && Jf(F[0]) && F[1] == (B | z | O | G) && !F[4].length && F[9] == 1 ? L = L[po(F[0])].apply(L, F[3]) : L = M.length == 1 && Jf(M) ? L[I]() : L.thru(M);
          }
          return function() {
            var ne = arguments, re = ne[0];
            if (L && ne.length == 1 && Re(re))
              return L.plant(re).value();
            for (var fe = 0, ge = s ? l[fe].apply(this, ne) : re; ++fe < s; )
              ge = l[fe].call(this, ge);
            return ge;
          };
        });
      }
      function mo(i, l, s, m, b, M, L, I, F, ne) {
        var re = l & B, fe = l & k, ge = l & T, pe = l & (z | U), Te = l & X, De = ge ? n : ul(i);
        function Se() {
          for (var Fe = arguments.length, Xe = Z(Fe), Dn = Fe; Dn--; )
            Xe[Dn] = arguments[Dn];
          if (pe)
            var _n = vr(Se), Nn = W0(Xe, _n);
          if (m && (Xe = xs(Xe, m, b, pe)), M && (Xe = Ms(Xe, M, L, pe)), Fe -= Nn, pe && Fe < ne) {
            var Nt = Li(Xe, _n);
            return Rs(
              i,
              l,
              mo,
              Se.placeholder,
              s,
              Xe,
              Nt,
              I,
              F,
              ne - Fe
            );
          }
          var ti = fe ? s : this, pi = ge ? ti[i] : i;
          return Fe = Xe.length, I ? Xe = jd(Xe, I) : Te && Fe > 1 && Xe.reverse(), re && F < Fe && (Xe.length = F), this && this !== Qt && this instanceof Se && (pi = De || ul(pi)), pi.apply(ti, Xe);
        }
        return Se;
      }
      function Ls(i, l) {
        return function(s, m) {
          return nd(s, i, l(m), {});
        };
      }
      function yo(i, l) {
        return function(s, m) {
          var b;
          if (s === n && m === n)
            return l;
          if (s !== n && (b = s), m !== n) {
            if (b === n)
              return m;
            typeof s == "string" || typeof m == "string" ? (s = In(s), m = In(m)) : (s = ds(s), m = ds(m)), b = i(s, m);
          }
          return b;
        };
      }
      function Hf(i) {
        return mi(function(l) {
          return l = wt(l, Rn(xe())), Ne(function(s) {
            var m = this;
            return i(l, function(b) {
              return En(b, m, s);
            });
          });
        });
      }
      function bo(i, l) {
        l = l === n ? " " : In(l);
        var s = l.length;
        if (s < 2)
          return s ? Df(l, i) : l;
        var m = Df(l, io(i / cr(l)));
        return hr(l) ? Di(Vn(m), 0, i).join("") : m.slice(0, i);
      }
      function Cd(i, l, s, m) {
        var b = l & k, M = ul(i);
        function L() {
          for (var I = -1, F = arguments.length, ne = -1, re = m.length, fe = Z(re + F), ge = this && this !== Qt && this instanceof L ? M : i; ++ne < re; )
            fe[ne] = m[ne];
          for (; F--; )
            fe[ne++] = arguments[++I];
          return En(ge, b ? s : this, fe);
        }
        return L;
      }
      function Es(i) {
        return function(l, s, m) {
          return m && typeof m != "number" && sn(l, s, m) && (s = m = n), l = wi(l), s === n ? (s = l, l = 0) : s = wi(s), m = m === n ? l < s ? 1 : -1 : wi(m), gd(l, s, m, i);
        };
      }
      function wo(i) {
        return function(l, s) {
          return typeof l == "string" && typeof s == "string" || (l = Zn(l), s = Zn(s)), i(l, s);
        };
      }
      function Rs(i, l, s, m, b, M, L, I, F, ne) {
        var re = l & z, fe = re ? L : n, ge = re ? n : L, pe = re ? M : n, Te = re ? n : M;
        l |= re ? O : E, l &= ~(re ? E : O), l & A || (l &= ~(k | T));
        var De = [
          i,
          l,
          b,
          pe,
          fe,
          Te,
          ge,
          I,
          F,
          ne
        ], Se = s.apply(n, De);
        return Jf(i) && Xs(Se, De), Se.placeholder = m, qs(Se, i, l);
      }
      function Yf(i) {
        var l = Wt[i];
        return function(s, m) {
          if (s = Zn(s), m = m == null ? 0 : rn(Ie(m), 292), m && qa(s)) {
            var b = (rt(s) + "e").split("e"), M = l(b[0] + "e" + (+b[1] + m));
            return b = (rt(M) + "e").split("e"), +(b[0] + "e" + (+b[1] - m));
          }
          return l(s);
        };
      }
      var Ld = mr && 1 / Zl(new mr([, -0]))[1] == W ? function(i) {
        return new mr(i);
      } : _u;
      function Is(i) {
        return function(l) {
          var s = ln(l);
          return s == ye ? wf(l) : s == Me ? Z0(l) : F0(l, i(l));
        };
      }
      function di(i, l, s, m, b, M, L, I) {
        var F = l & T;
        if (!F && typeof i != "function")
          throw new Hn(u);
        var ne = m ? m.length : 0;
        if (ne || (l &= ~(O | E), m = b = n), L = L === n ? L : Bt(Ie(L), 0), I = I === n ? I : Ie(I), ne -= b ? b.length : 0, l & E) {
          var re = m, fe = b;
          m = b = n;
        }
        var ge = F ? n : Gf(i), pe = [
          i,
          l,
          s,
          m,
          b,
          re,
          fe,
          M,
          L,
          I
        ];
        if (ge && qd(pe, ge), i = pe[0], l = pe[1], s = pe[2], m = pe[3], b = pe[4], I = pe[9] = pe[9] === n ? F ? 0 : i.length : Bt(pe[9] - ne, 0), !I && l & (z | U) && (l &= ~(z | U)), !l || l == k)
          var Te = zd(i, l, s);
        else
          l == z || l == U ? Te = Ad(i, l, I) : (l == O || l == (k | O)) && !b.length ? Te = Cd(i, l, s, m) : Te = mo.apply(n, pe);
        var De = ge ? cs : Xs;
        return qs(De(Te, pe), i, l);
      }
      function Os(i, l, s, m) {
        return i === n || ei(i, dr[s]) && !ot.call(m, s) ? l : i;
      }
      function Ds(i, l, s, m, b, M) {
        return Mt(i) && Mt(l) && (M.set(l, i), _o(i, l, n, Ds, M), M.delete(l)), i;
      }
      function Ed(i) {
        return _l(i) ? n : i;
      }
      function Ns(i, l, s, m, b, M) {
        var L = s & v, I = i.length, F = l.length;
        if (I != F && !(L && F > I))
          return !1;
        var ne = M.get(i), re = M.get(l);
        if (ne && re)
          return ne == l && re == i;
        var fe = -1, ge = !0, pe = s & S ? new qi() : n;
        for (M.set(i, l), M.set(l, i); ++fe < I; ) {
          var Te = i[fe], De = l[fe];
          if (m)
            var Se = L ? m(De, Te, fe, l, i, M) : m(Te, De, fe, i, l, M);
          if (Se !== n) {
            if (Se)
              continue;
            ge = !1;
            break;
          }
          if (pe) {
            if (!cf(l, function(Fe, Xe) {
              if (!Qr(pe, Xe) && (Te === Fe || b(Te, Fe, s, m, M)))
                return pe.push(Xe);
            })) {
              ge = !1;
              break;
            }
          } else if (!(Te === De || b(Te, De, s, m, M))) {
            ge = !1;
            break;
          }
        }
        return M.delete(i), M.delete(l), ge;
      }
      function Rd(i, l, s, m, b, M, L) {
        switch (s) {
          case kt:
            if (i.byteLength != l.byteLength || i.byteOffset != l.byteOffset)
              return !1;
            i = i.buffer, l = l.buffer;
          case en:
            return !(i.byteLength != l.byteLength || !M(new $l(i), new $l(l)));
          case He:
          case ue:
          case We:
            return ei(+i, +l);
          case be:
            return i.name == l.name && i.message == l.message;
          case oe:
          case Tt:
            return i == l + "";
          case ye:
            var I = wf;
          case Me:
            var F = m & v;
            if (I || (I = Zl), i.size != l.size && !F)
              return !1;
            var ne = L.get(i);
            if (ne)
              return ne == l;
            m |= S, L.set(i, l);
            var re = Ns(I(i), I(l), m, b, M, L);
            return L.delete(i), re;
          case St:
            if (nl)
              return nl.call(i) == nl.call(l);
        }
        return !1;
      }
      function Id(i, l, s, m, b, M) {
        var L = s & v, I = Xf(i), F = I.length, ne = Xf(l), re = ne.length;
        if (F != re && !L)
          return !1;
        for (var fe = F; fe--; ) {
          var ge = I[fe];
          if (!(L ? ge in l : ot.call(l, ge)))
            return !1;
        }
        var pe = M.get(i), Te = M.get(l);
        if (pe && Te)
          return pe == l && Te == i;
        var De = !0;
        M.set(i, l), M.set(l, i);
        for (var Se = L; ++fe < F; ) {
          ge = I[fe];
          var Fe = i[ge], Xe = l[ge];
          if (m)
            var Dn = L ? m(Xe, Fe, ge, l, i, M) : m(Fe, Xe, ge, i, l, M);
          if (!(Dn === n ? Fe === Xe || b(Fe, Xe, s, m, M) : Dn)) {
            De = !1;
            break;
          }
          Se || (Se = ge == "constructor");
        }
        if (De && !Se) {
          var _n = i.constructor, Nn = l.constructor;
          _n != Nn && "constructor" in i && "constructor" in l && !(typeof _n == "function" && _n instanceof _n && typeof Nn == "function" && Nn instanceof Nn) && (De = !1);
        }
        return M.delete(i), M.delete(l), De;
      }
      function mi(i) {
        return Vf(Hs(i, n, Qs), i + "");
      }
      function Xf(i) {
        return ns(i, qt, jf);
      }
      function qf(i) {
        return ns(i, bn, Us);
      }
      var Gf = lo ? function(i) {
        return lo.get(i);
      } : _u;
      function po(i) {
        for (var l = i.name + "", s = yr[l], m = ot.call(yr, l) ? s.length : 0; m--; ) {
          var b = s[m], M = b.func;
          if (M == null || M == i)
            return b.name;
        }
        return l;
      }
      function vr(i) {
        var l = ot.call(x, "placeholder") ? x : i;
        return l.placeholder;
      }
      function xe() {
        var i = x.iteratee || au;
        return i = i === au ? ls : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function vo(i, l) {
        var s = i.__data__;
        return Bd(l) ? s[typeof l == "string" ? "string" : "hash"] : s.map;
      }
      function Zf(i) {
        for (var l = qt(i), s = l.length; s--; ) {
          var m = l[s], b = i[m];
          l[s] = [m, b, Ws(b)];
        }
        return l;
      }
      function ji(i, l) {
        var s = X0(i, l);
        return rs(s) ? s : n;
      }
      function Od(i) {
        var l = ot.call(i, Yi), s = i[Yi];
        try {
          i[Yi] = n;
          var m = !0;
        } catch {
        }
        var b = Ql.call(i);
        return m && (l ? i[Yi] = s : delete i[Yi]), b;
      }
      var jf = vf ? function(i) {
        return i == null ? [] : (i = at(i), Ai(vf(i), function(l) {
          return Ya.call(i, l);
        }));
      } : hu, Us = vf ? function(i) {
        for (var l = []; i; )
          Ci(l, jf(i)), i = eo(i);
        return l;
      } : hu, ln = an;
      (kf && ln(new kf(new ArrayBuffer(1))) != kt || $r && ln(new $r()) != ye || xf && ln(xf.resolve()) != Ye || mr && ln(new mr()) != Me || el && ln(new el()) != gt) && (ln = function(i) {
        var l = an(i), s = l == et ? i.constructor : n, m = s ? Ki(s) : "";
        if (m)
          switch (m) {
            case mg:
              return kt;
            case yg:
              return ye;
            case bg:
              return Ye;
            case wg:
              return Me;
            case pg:
              return gt;
          }
        return l;
      });
      function Dd(i, l, s) {
        for (var m = -1, b = s.length; ++m < b; ) {
          var M = s[m], L = M.size;
          switch (M.type) {
            case "drop":
              i += L;
              break;
            case "dropRight":
              l -= L;
              break;
            case "take":
              l = rn(l, i + L);
              break;
            case "takeRight":
              i = Bt(i, l - L);
              break;
          }
        }
        return { start: i, end: l };
      }
      function Nd(i) {
        var l = i.match(Yr);
        return l ? l[1].split(Cn) : [];
      }
      function Ps(i, l, s) {
        l = Oi(l, i);
        for (var m = -1, b = l.length, M = !1; ++m < b; ) {
          var L = oi(l[m]);
          if (!(M = i != null && s(i, L)))
            break;
          i = i[L];
        }
        return M || ++m != b ? M : (b = i == null ? 0 : i.length, !!b && Ao(b) && yi(L, b) && (Re(i) || Ji(i)));
      }
      function Ud(i) {
        var l = i.length, s = new i.constructor(l);
        return l && typeof i[0] == "string" && ot.call(i, "index") && (s.index = i.index, s.input = i.input), s;
      }
      function Fs(i) {
        return typeof i.constructor == "function" && !al(i) ? br(eo(i)) : {};
      }
      function Pd(i, l, s) {
        var m = i.constructor;
        switch (l) {
          case en:
            return Bf(i);
          case He:
          case ue:
            return new m(+i);
          case kt:
            return vd(i, s);
          case xt:
          case tn:
          case Un:
          case nn:
          case on:
          case Jn:
          case cn:
          case Mn:
          case fn:
            return vs(i, s);
          case ye:
            return new m();
          case We:
          case Tt:
            return new m(i);
          case oe:
            return kd(i);
          case Me:
            return new m();
          case St:
            return xd(i);
        }
      }
      function Fd(i, l) {
        var s = l.length;
        if (!s)
          return i;
        var m = s - 1;
        return l[m] = (s > 1 ? "& " : "") + l[m], l = l.join(s > 2 ? ", " : " "), i.replace(ai, `{
/* [wrapped with ` + l + `] */
`);
      }
      function Wd(i) {
        return Re(i) || Ji(i) || !!(Xa && i && i[Xa]);
      }
      function yi(i, l) {
        var s = typeof i;
        return l = l ?? C, !!l && (s == "number" || s != "symbol" && ur.test(i)) && i > -1 && i % 1 == 0 && i < l;
      }
      function sn(i, l, s) {
        if (!Mt(s))
          return !1;
        var m = typeof l;
        return (m == "number" ? yn(s) && yi(l, s.length) : m == "string" && l in s) ? ei(s[l], i) : !1;
      }
      function Kf(i, l) {
        if (Re(i))
          return !1;
        var s = typeof i;
        return s == "number" || s == "symbol" || s == "boolean" || i == null || On(i) ? !0 : tt.test(i) || !K.test(i) || l != null && i in at(l);
      }
      function Bd(i) {
        var l = typeof i;
        return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? i !== "__proto__" : i === null;
      }
      function Jf(i) {
        var l = po(i), s = x[l];
        if (typeof s != "function" || !(l in Be.prototype))
          return !1;
        if (i === s)
          return !0;
        var m = Gf(s);
        return !!m && i === m[0];
      }
      function Hd(i) {
        return !!Wa && Wa in i;
      }
      var Yd = Kl ? bi : cu;
      function al(i) {
        var l = i && i.constructor, s = typeof l == "function" && l.prototype || dr;
        return i === s;
      }
      function Ws(i) {
        return i === i && !Mt(i);
      }
      function Bs(i, l) {
        return function(s) {
          return s == null ? !1 : s[i] === l && (l !== n || i in at(s));
        };
      }
      function Xd(i) {
        var l = So(i, function(m) {
          return s.size === c && s.clear(), m;
        }), s = l.cache;
        return l;
      }
      function qd(i, l) {
        var s = i[1], m = l[1], b = s | m, M = b < (k | T | B), L = m == B && s == z || m == B && s == G && i[7].length <= l[8] || m == (B | G) && l[7].length <= l[8] && s == z;
        if (!(M || L))
          return i;
        m & k && (i[2] = l[2], b |= s & k ? 0 : A);
        var I = l[3];
        if (I) {
          var F = i[3];
          i[3] = F ? xs(F, I, l[4]) : I, i[4] = F ? Li(i[3], d) : l[4];
        }
        return I = l[5], I && (F = i[5], i[5] = F ? Ms(F, I, l[6]) : I, i[6] = F ? Li(i[5], d) : l[6]), I = l[7], I && (i[7] = I), m & B && (i[8] = i[8] == null ? l[8] : rn(i[8], l[8])), i[9] == null && (i[9] = l[9]), i[0] = l[0], i[1] = b, i;
      }
      function Gd(i) {
        var l = [];
        if (i != null)
          for (var s in at(i))
            l.push(s);
        return l;
      }
      function Zd(i) {
        return Ql.call(i);
      }
      function Hs(i, l, s) {
        return l = Bt(l === n ? i.length - 1 : l, 0), function() {
          for (var m = arguments, b = -1, M = Bt(m.length - l, 0), L = Z(M); ++b < M; )
            L[b] = m[l + b];
          b = -1;
          for (var I = Z(l + 1); ++b < l; )
            I[b] = m[b];
          return I[l] = s(L), En(i, this, I);
        };
      }
      function Ys(i, l) {
        return l.length < 2 ? i : Zi(i, qn(l, 0, -1));
      }
      function jd(i, l) {
        for (var s = i.length, m = rn(l.length, s), b = mn(i); m--; ) {
          var M = l[m];
          i[m] = yi(M, s) ? b[M] : n;
        }
        return i;
      }
      function Qf(i, l) {
        if (!(l === "constructor" && typeof i[l] == "function") && l != "__proto__")
          return i[l];
      }
      var Xs = Gs(cs), sl = ag || function(i, l) {
        return Qt.setTimeout(i, l);
      }, Vf = Gs(yd);
      function qs(i, l, s) {
        var m = l + "";
        return Vf(i, Fd(m, Kd(Nd(m), s)));
      }
      function Gs(i) {
        var l = 0, s = 0;
        return function() {
          var m = cg(), b = de - (m - s);
          if (s = m, b > 0) {
            if (++l >= se)
              return arguments[0];
          } else
            l = 0;
          return i.apply(n, arguments);
        };
      }
      function ko(i, l) {
        var s = -1, m = i.length, b = m - 1;
        for (l = l === n ? m : l; ++s < l; ) {
          var M = Of(s, b), L = i[M];
          i[M] = i[s], i[s] = L;
        }
        return i.length = l, i;
      }
      var Zs = Xd(function(i) {
        var l = [];
        return i.charCodeAt(0) === 46 && l.push(""), i.replace(Ct, function(s, m, b, M) {
          l.push(b ? M.replace(Bi, "$1") : m || s);
        }), l;
      });
      function oi(i) {
        if (typeof i == "string" || On(i))
          return i;
        var l = i + "";
        return l == "0" && 1 / i == -W ? "-0" : l;
      }
      function Ki(i) {
        if (i != null) {
          try {
            return Jl.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function Kd(i, l) {
        return Bn(Ze, function(s) {
          var m = "_." + s[0];
          l & s[1] && !ql(i, m) && i.push(m);
        }), i.sort();
      }
      function js(i) {
        if (i instanceof Be)
          return i.clone();
        var l = new Yn(i.__wrapped__, i.__chain__);
        return l.__actions__ = mn(i.__actions__), l.__index__ = i.__index__, l.__values__ = i.__values__, l;
      }
      function Jd(i, l, s) {
        (s ? sn(i, l, s) : l === n) ? l = 1 : l = Bt(Ie(l), 0);
        var m = i == null ? 0 : i.length;
        if (!m || l < 1)
          return [];
        for (var b = 0, M = 0, L = Z(io(m / l)); b < m; )
          L[M++] = qn(i, b, b += l);
        return L;
      }
      function Qd(i) {
        for (var l = -1, s = i == null ? 0 : i.length, m = 0, b = []; ++l < s; ) {
          var M = i[l];
          M && (b[m++] = M);
        }
        return b;
      }
      function Vd() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var l = Z(i - 1), s = arguments[0], m = i; m--; )
          l[m - 1] = arguments[m];
        return Ci(Re(s) ? mn(s) : [s], Vt(l, 1));
      }
      var $d = Ne(function(i, l) {
        return Dt(i) ? rl(i, Vt(l, 1, Dt, !0)) : [];
      }), em = Ne(function(i, l) {
        var s = Gn(l);
        return Dt(s) && (s = n), Dt(i) ? rl(i, Vt(l, 1, Dt, !0), xe(s, 2)) : [];
      }), tm = Ne(function(i, l) {
        var s = Gn(l);
        return Dt(s) && (s = n), Dt(i) ? rl(i, Vt(l, 1, Dt, !0), n, s) : [];
      });
      function nm(i, l, s) {
        var m = i == null ? 0 : i.length;
        return m ? (l = s || l === n ? 1 : Ie(l), qn(i, l < 0 ? 0 : l, m)) : [];
      }
      function im(i, l, s) {
        var m = i == null ? 0 : i.length;
        return m ? (l = s || l === n ? 1 : Ie(l), l = m - l, qn(i, 0, l < 0 ? 0 : l)) : [];
      }
      function rm(i, l) {
        return i && i.length ? co(i, xe(l, 3), !0, !0) : [];
      }
      function lm(i, l) {
        return i && i.length ? co(i, xe(l, 3), !0) : [];
      }
      function om(i, l, s, m) {
        var b = i == null ? 0 : i.length;
        return b ? (s && typeof s != "number" && sn(i, l, s) && (s = 0, m = b), Vg(i, l, s, m)) : [];
      }
      function Ks(i, l, s) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var b = s == null ? 0 : Ie(s);
        return b < 0 && (b = Bt(m + b, 0)), Gl(i, xe(l, 3), b);
      }
      function Js(i, l, s) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var b = m - 1;
        return s !== n && (b = Ie(s), b = s < 0 ? Bt(m + b, 0) : rn(b, m - 1)), Gl(i, xe(l, 3), b, !0);
      }
      function Qs(i) {
        var l = i == null ? 0 : i.length;
        return l ? Vt(i, 1) : [];
      }
      function fm(i) {
        var l = i == null ? 0 : i.length;
        return l ? Vt(i, W) : [];
      }
      function um(i, l) {
        var s = i == null ? 0 : i.length;
        return s ? (l = l === n ? 1 : Ie(l), Vt(i, l)) : [];
      }
      function am(i) {
        for (var l = -1, s = i == null ? 0 : i.length, m = {}; ++l < s; ) {
          var b = i[l];
          m[b[0]] = b[1];
        }
        return m;
      }
      function Vs(i) {
        return i && i.length ? i[0] : n;
      }
      function sm(i, l, s) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var b = s == null ? 0 : Ie(s);
        return b < 0 && (b = Bt(m + b, 0)), _r(i, l, b);
      }
      function _m(i) {
        var l = i == null ? 0 : i.length;
        return l ? qn(i, 0, -1) : [];
      }
      var hm = Ne(function(i) {
        var l = wt(i, Ff);
        return l.length && l[0] === i[0] ? Cf(l) : [];
      }), cm = Ne(function(i) {
        var l = Gn(i), s = wt(i, Ff);
        return l === Gn(s) ? l = n : s.pop(), s.length && s[0] === i[0] ? Cf(s, xe(l, 2)) : [];
      }), gm = Ne(function(i) {
        var l = Gn(i), s = wt(i, Ff);
        return l = typeof l == "function" ? l : n, l && s.pop(), s.length && s[0] === i[0] ? Cf(s, n, l) : [];
      });
      function dm(i, l) {
        return i == null ? "" : _g.call(i, l);
      }
      function Gn(i) {
        var l = i == null ? 0 : i.length;
        return l ? i[l - 1] : n;
      }
      function mm(i, l, s) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var b = m;
        return s !== n && (b = Ie(s), b = b < 0 ? Bt(m + b, 0) : rn(b, m - 1)), l === l ? K0(i, l, b) : Gl(i, Ra, b, !0);
      }
      function ym(i, l) {
        return i && i.length ? as(i, Ie(l)) : n;
      }
      var bm = Ne($s);
      function $s(i, l) {
        return i && i.length && l && l.length ? If(i, l) : i;
      }
      function wm(i, l, s) {
        return i && i.length && l && l.length ? If(i, l, xe(s, 2)) : i;
      }
      function pm(i, l, s) {
        return i && i.length && l && l.length ? If(i, l, n, s) : i;
      }
      var vm = mi(function(i, l) {
        var s = i == null ? 0 : i.length, m = Tf(i, l);
        return hs(i, wt(l, function(b) {
          return yi(b, s) ? +b : b;
        }).sort(ks)), m;
      });
      function km(i, l) {
        var s = [];
        if (!(i && i.length))
          return s;
        var m = -1, b = [], M = i.length;
        for (l = xe(l, 3); ++m < M; ) {
          var L = i[m];
          l(L, m, i) && (s.push(L), b.push(m));
        }
        return hs(i, b), s;
      }
      function $f(i) {
        return i == null ? i : dg.call(i);
      }
      function xm(i, l, s) {
        var m = i == null ? 0 : i.length;
        return m ? (s && typeof s != "number" && sn(i, l, s) ? (l = 0, s = m) : (l = l == null ? 0 : Ie(l), s = s === n ? m : Ie(s)), qn(i, l, s)) : [];
      }
      function Mm(i, l) {
        return ho(i, l);
      }
      function Tm(i, l, s) {
        return Nf(i, l, xe(s, 2));
      }
      function Sm(i, l) {
        var s = i == null ? 0 : i.length;
        if (s) {
          var m = ho(i, l);
          if (m < s && ei(i[m], l))
            return m;
        }
        return -1;
      }
      function zm(i, l) {
        return ho(i, l, !0);
      }
      function Am(i, l, s) {
        return Nf(i, l, xe(s, 2), !0);
      }
      function Cm(i, l) {
        var s = i == null ? 0 : i.length;
        if (s) {
          var m = ho(i, l, !0) - 1;
          if (ei(i[m], l))
            return m;
        }
        return -1;
      }
      function Lm(i) {
        return i && i.length ? gs(i) : [];
      }
      function Em(i, l) {
        return i && i.length ? gs(i, xe(l, 2)) : [];
      }
      function Rm(i) {
        var l = i == null ? 0 : i.length;
        return l ? qn(i, 1, l) : [];
      }
      function Im(i, l, s) {
        return i && i.length ? (l = s || l === n ? 1 : Ie(l), qn(i, 0, l < 0 ? 0 : l)) : [];
      }
      function Om(i, l, s) {
        var m = i == null ? 0 : i.length;
        return m ? (l = s || l === n ? 1 : Ie(l), l = m - l, qn(i, l < 0 ? 0 : l, m)) : [];
      }
      function Dm(i, l) {
        return i && i.length ? co(i, xe(l, 3), !1, !0) : [];
      }
      function Nm(i, l) {
        return i && i.length ? co(i, xe(l, 3)) : [];
      }
      var Um = Ne(function(i) {
        return Ii(Vt(i, 1, Dt, !0));
      }), Pm = Ne(function(i) {
        var l = Gn(i);
        return Dt(l) && (l = n), Ii(Vt(i, 1, Dt, !0), xe(l, 2));
      }), Fm = Ne(function(i) {
        var l = Gn(i);
        return l = typeof l == "function" ? l : n, Ii(Vt(i, 1, Dt, !0), n, l);
      });
      function Wm(i) {
        return i && i.length ? Ii(i) : [];
      }
      function Bm(i, l) {
        return i && i.length ? Ii(i, xe(l, 2)) : [];
      }
      function Hm(i, l) {
        return l = typeof l == "function" ? l : n, i && i.length ? Ii(i, n, l) : [];
      }
      function eu(i) {
        if (!(i && i.length))
          return [];
        var l = 0;
        return i = Ai(i, function(s) {
          if (Dt(s))
            return l = Bt(s.length, l), !0;
        }), yf(l, function(s) {
          return wt(i, gf(s));
        });
      }
      function e_(i, l) {
        if (!(i && i.length))
          return [];
        var s = eu(i);
        return l == null ? s : wt(s, function(m) {
          return En(l, n, m);
        });
      }
      var Ym = Ne(function(i, l) {
        return Dt(i) ? rl(i, l) : [];
      }), Xm = Ne(function(i) {
        return Pf(Ai(i, Dt));
      }), qm = Ne(function(i) {
        var l = Gn(i);
        return Dt(l) && (l = n), Pf(Ai(i, Dt), xe(l, 2));
      }), Gm = Ne(function(i) {
        var l = Gn(i);
        return l = typeof l == "function" ? l : n, Pf(Ai(i, Dt), n, l);
      }), Zm = Ne(eu);
      function jm(i, l) {
        return bs(i || [], l || [], il);
      }
      function Km(i, l) {
        return bs(i || [], l || [], fl);
      }
      var Jm = Ne(function(i) {
        var l = i.length, s = l > 1 ? i[l - 1] : n;
        return s = typeof s == "function" ? (i.pop(), s) : n, e_(i, s);
      });
      function t_(i) {
        var l = x(i);
        return l.__chain__ = !0, l;
      }
      function Qm(i, l) {
        return l(i), i;
      }
      function xo(i, l) {
        return l(i);
      }
      var Vm = mi(function(i) {
        var l = i.length, s = l ? i[0] : 0, m = this.__wrapped__, b = function(M) {
          return Tf(M, i);
        };
        return l > 1 || this.__actions__.length || !(m instanceof Be) || !yi(s) ? this.thru(b) : (m = m.slice(s, +s + (l ? 1 : 0)), m.__actions__.push({
          func: xo,
          args: [b],
          thisArg: n
        }), new Yn(m, this.__chain__).thru(function(M) {
          return l && !M.length && M.push(n), M;
        }));
      });
      function $m() {
        return t_(this);
      }
      function e2() {
        return new Yn(this.value(), this.__chain__);
      }
      function t2() {
        this.__values__ === n && (this.__values__ = d_(this.value()));
        var i = this.__index__ >= this.__values__.length, l = i ? n : this.__values__[this.__index__++];
        return { done: i, value: l };
      }
      function n2() {
        return this;
      }
      function i2(i) {
        for (var l, s = this; s instanceof fo; ) {
          var m = js(s);
          m.__index__ = 0, m.__values__ = n, l ? b.__wrapped__ = m : l = m;
          var b = m;
          s = s.__wrapped__;
        }
        return b.__wrapped__ = i, l;
      }
      function r2() {
        var i = this.__wrapped__;
        if (i instanceof Be) {
          var l = i;
          return this.__actions__.length && (l = new Be(this)), l = l.reverse(), l.__actions__.push({
            func: xo,
            args: [$f],
            thisArg: n
          }), new Yn(l, this.__chain__);
        }
        return this.thru($f);
      }
      function l2() {
        return ys(this.__wrapped__, this.__actions__);
      }
      var o2 = go(function(i, l, s) {
        ot.call(i, s) ? ++i[s] : gi(i, s, 1);
      });
      function f2(i, l, s) {
        var m = Re(i) ? La : Qg;
        return s && sn(i, l, s) && (l = n), m(i, xe(l, 3));
      }
      function u2(i, l) {
        var s = Re(i) ? Ai : es;
        return s(i, xe(l, 3));
      }
      var a2 = As(Ks), s2 = As(Js);
      function _2(i, l) {
        return Vt(Mo(i, l), 1);
      }
      function h2(i, l) {
        return Vt(Mo(i, l), W);
      }
      function c2(i, l, s) {
        return s = s === n ? 1 : Ie(s), Vt(Mo(i, l), s);
      }
      function n_(i, l) {
        var s = Re(i) ? Bn : Ri;
        return s(i, xe(l, 3));
      }
      function i_(i, l) {
        var s = Re(i) ? R0 : $a;
        return s(i, xe(l, 3));
      }
      var g2 = go(function(i, l, s) {
        ot.call(i, s) ? i[s].push(l) : gi(i, s, [l]);
      });
      function d2(i, l, s, m) {
        i = yn(i) ? i : xr(i), s = s && !m ? Ie(s) : 0;
        var b = i.length;
        return s < 0 && (s = Bt(b + s, 0)), Co(i) ? s <= b && i.indexOf(l, s) > -1 : !!b && _r(i, l, s) > -1;
      }
      var m2 = Ne(function(i, l, s) {
        var m = -1, b = typeof l == "function", M = yn(i) ? Z(i.length) : [];
        return Ri(i, function(L) {
          M[++m] = b ? En(l, L, s) : ll(L, l, s);
        }), M;
      }), y2 = go(function(i, l, s) {
        gi(i, s, l);
      });
      function Mo(i, l) {
        var s = Re(i) ? wt : os;
        return s(i, xe(l, 3));
      }
      function b2(i, l, s, m) {
        return i == null ? [] : (Re(l) || (l = l == null ? [] : [l]), s = m ? n : s, Re(s) || (s = s == null ? [] : [s]), ss(i, l, s));
      }
      var w2 = go(function(i, l, s) {
        i[s ? 0 : 1].push(l);
      }, function() {
        return [[], []];
      });
      function p2(i, l, s) {
        var m = Re(i) ? hf : Oa, b = arguments.length < 3;
        return m(i, xe(l, 4), s, b, Ri);
      }
      function v2(i, l, s) {
        var m = Re(i) ? I0 : Oa, b = arguments.length < 3;
        return m(i, xe(l, 4), s, b, $a);
      }
      function k2(i, l) {
        var s = Re(i) ? Ai : es;
        return s(i, zo(xe(l, 3)));
      }
      function x2(i) {
        var l = Re(i) ? Ka : dd;
        return l(i);
      }
      function M2(i, l, s) {
        (s ? sn(i, l, s) : l === n) ? l = 1 : l = Ie(l);
        var m = Re(i) ? Gg : md;
        return m(i, l);
      }
      function T2(i) {
        var l = Re(i) ? Zg : bd;
        return l(i);
      }
      function S2(i) {
        if (i == null)
          return 0;
        if (yn(i))
          return Co(i) ? cr(i) : i.length;
        var l = ln(i);
        return l == ye || l == Me ? i.size : Ef(i).length;
      }
      function z2(i, l, s) {
        var m = Re(i) ? cf : wd;
        return s && sn(i, l, s) && (l = n), m(i, xe(l, 3));
      }
      var A2 = Ne(function(i, l) {
        if (i == null)
          return [];
        var s = l.length;
        return s > 1 && sn(i, l[0], l[1]) ? l = [] : s > 2 && sn(l[0], l[1], l[2]) && (l = [l[0]]), ss(i, Vt(l, 1), []);
      }), To = ug || function() {
        return Qt.Date.now();
      };
      function C2(i, l) {
        if (typeof l != "function")
          throw new Hn(u);
        return i = Ie(i), function() {
          if (--i < 1)
            return l.apply(this, arguments);
        };
      }
      function r_(i, l, s) {
        return l = s ? n : l, l = i && l == null ? i.length : l, di(i, B, n, n, n, n, l);
      }
      function l_(i, l) {
        var s;
        if (typeof l != "function")
          throw new Hn(u);
        return i = Ie(i), function() {
          return --i > 0 && (s = l.apply(this, arguments)), i <= 1 && (l = n), s;
        };
      }
      var tu = Ne(function(i, l, s) {
        var m = k;
        if (s.length) {
          var b = Li(s, vr(tu));
          m |= O;
        }
        return di(i, m, l, s, b);
      }), o_ = Ne(function(i, l, s) {
        var m = k | T;
        if (s.length) {
          var b = Li(s, vr(o_));
          m |= O;
        }
        return di(l, m, i, s, b);
      });
      function f_(i, l, s) {
        l = s ? n : l;
        var m = di(i, z, n, n, n, n, n, l);
        return m.placeholder = f_.placeholder, m;
      }
      function u_(i, l, s) {
        l = s ? n : l;
        var m = di(i, U, n, n, n, n, n, l);
        return m.placeholder = u_.placeholder, m;
      }
      function a_(i, l, s) {
        var m, b, M, L, I, F, ne = 0, re = !1, fe = !1, ge = !0;
        if (typeof i != "function")
          throw new Hn(u);
        l = Zn(l) || 0, Mt(s) && (re = !!s.leading, fe = "maxWait" in s, M = fe ? Bt(Zn(s.maxWait) || 0, l) : M, ge = "trailing" in s ? !!s.trailing : ge);
        function pe(Nt) {
          var ti = m, pi = b;
          return m = b = n, ne = Nt, L = i.apply(pi, ti), L;
        }
        function Te(Nt) {
          return ne = Nt, I = sl(Fe, l), re ? pe(Nt) : L;
        }
        function De(Nt) {
          var ti = Nt - F, pi = Nt - ne, A_ = l - ti;
          return fe ? rn(A_, M - pi) : A_;
        }
        function Se(Nt) {
          var ti = Nt - F, pi = Nt - ne;
          return F === n || ti >= l || ti < 0 || fe && pi >= M;
        }
        function Fe() {
          var Nt = To();
          if (Se(Nt))
            return Xe(Nt);
          I = sl(Fe, De(Nt));
        }
        function Xe(Nt) {
          return I = n, ge && m ? pe(Nt) : (m = b = n, L);
        }
        function Dn() {
          I !== n && ws(I), ne = 0, m = F = b = I = n;
        }
        function _n() {
          return I === n ? L : Xe(To());
        }
        function Nn() {
          var Nt = To(), ti = Se(Nt);
          if (m = arguments, b = this, F = Nt, ti) {
            if (I === n)
              return Te(F);
            if (fe)
              return ws(I), I = sl(Fe, l), pe(F);
          }
          return I === n && (I = sl(Fe, l)), L;
        }
        return Nn.cancel = Dn, Nn.flush = _n, Nn;
      }
      var L2 = Ne(function(i, l) {
        return Va(i, 1, l);
      }), E2 = Ne(function(i, l, s) {
        return Va(i, Zn(l) || 0, s);
      });
      function R2(i) {
        return di(i, X);
      }
      function So(i, l) {
        if (typeof i != "function" || l != null && typeof l != "function")
          throw new Hn(u);
        var s = function() {
          var m = arguments, b = l ? l.apply(this, m) : m[0], M = s.cache;
          if (M.has(b))
            return M.get(b);
          var L = i.apply(this, m);
          return s.cache = M.set(b, L) || M, L;
        };
        return s.cache = new (So.Cache || ci)(), s;
      }
      So.Cache = ci;
      function zo(i) {
        if (typeof i != "function")
          throw new Hn(u);
        return function() {
          var l = arguments;
          switch (l.length) {
            case 0:
              return !i.call(this);
            case 1:
              return !i.call(this, l[0]);
            case 2:
              return !i.call(this, l[0], l[1]);
            case 3:
              return !i.call(this, l[0], l[1], l[2]);
          }
          return !i.apply(this, l);
        };
      }
      function I2(i) {
        return l_(2, i);
      }
      var O2 = pd(function(i, l) {
        l = l.length == 1 && Re(l[0]) ? wt(l[0], Rn(xe())) : wt(Vt(l, 1), Rn(xe()));
        var s = l.length;
        return Ne(function(m) {
          for (var b = -1, M = rn(m.length, s); ++b < M; )
            m[b] = l[b].call(this, m[b]);
          return En(i, this, m);
        });
      }), nu = Ne(function(i, l) {
        var s = Li(l, vr(nu));
        return di(i, O, n, l, s);
      }), s_ = Ne(function(i, l) {
        var s = Li(l, vr(s_));
        return di(i, E, n, l, s);
      }), D2 = mi(function(i, l) {
        return di(i, G, n, n, n, l);
      });
      function N2(i, l) {
        if (typeof i != "function")
          throw new Hn(u);
        return l = l === n ? l : Ie(l), Ne(i, l);
      }
      function U2(i, l) {
        if (typeof i != "function")
          throw new Hn(u);
        return l = l == null ? 0 : Bt(Ie(l), 0), Ne(function(s) {
          var m = s[l], b = Di(s, 0, l);
          return m && Ci(b, m), En(i, this, b);
        });
      }
      function P2(i, l, s) {
        var m = !0, b = !0;
        if (typeof i != "function")
          throw new Hn(u);
        return Mt(s) && (m = "leading" in s ? !!s.leading : m, b = "trailing" in s ? !!s.trailing : b), a_(i, l, {
          leading: m,
          maxWait: l,
          trailing: b
        });
      }
      function F2(i) {
        return r_(i, 1);
      }
      function W2(i, l) {
        return nu(Wf(l), i);
      }
      function B2() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Re(i) ? i : [i];
      }
      function H2(i) {
        return Xn(i, w);
      }
      function Y2(i, l) {
        return l = typeof l == "function" ? l : n, Xn(i, w, l);
      }
      function X2(i) {
        return Xn(i, h | w);
      }
      function q2(i, l) {
        return l = typeof l == "function" ? l : n, Xn(i, h | w, l);
      }
      function G2(i, l) {
        return l == null || Qa(i, l, qt(l));
      }
      function ei(i, l) {
        return i === l || i !== i && l !== l;
      }
      var Z2 = wo(Af), j2 = wo(function(i, l) {
        return i >= l;
      }), Ji = is(function() {
        return arguments;
      }()) ? is : function(i) {
        return Rt(i) && ot.call(i, "callee") && !Ya.call(i, "callee");
      }, Re = Z.isArray, K2 = Ma ? Rn(Ma) : id;
      function yn(i) {
        return i != null && Ao(i.length) && !bi(i);
      }
      function Dt(i) {
        return Rt(i) && yn(i);
      }
      function J2(i) {
        return i === !0 || i === !1 || Rt(i) && an(i) == He;
      }
      var Ni = sg || cu, Q2 = Ta ? Rn(Ta) : rd;
      function V2(i) {
        return Rt(i) && i.nodeType === 1 && !_l(i);
      }
      function $2(i) {
        if (i == null)
          return !0;
        if (yn(i) && (Re(i) || typeof i == "string" || typeof i.splice == "function" || Ni(i) || kr(i) || Ji(i)))
          return !i.length;
        var l = ln(i);
        if (l == ye || l == Me)
          return !i.size;
        if (al(i))
          return !Ef(i).length;
        for (var s in i)
          if (ot.call(i, s))
            return !1;
        return !0;
      }
      function ey(i, l) {
        return ol(i, l);
      }
      function ty(i, l, s) {
        s = typeof s == "function" ? s : n;
        var m = s ? s(i, l) : n;
        return m === n ? ol(i, l, n, s) : !!m;
      }
      function iu(i) {
        if (!Rt(i))
          return !1;
        var l = an(i);
        return l == be || l == me || typeof i.message == "string" && typeof i.name == "string" && !_l(i);
      }
      function ny(i) {
        return typeof i == "number" && qa(i);
      }
      function bi(i) {
        if (!Mt(i))
          return !1;
        var l = an(i);
        return l == $ || l == Ce || l == ut || l == Y;
      }
      function __(i) {
        return typeof i == "number" && i == Ie(i);
      }
      function Ao(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= C;
      }
      function Mt(i) {
        var l = typeof i;
        return i != null && (l == "object" || l == "function");
      }
      function Rt(i) {
        return i != null && typeof i == "object";
      }
      var h_ = Sa ? Rn(Sa) : od;
      function iy(i, l) {
        return i === l || Lf(i, l, Zf(l));
      }
      function ry(i, l, s) {
        return s = typeof s == "function" ? s : n, Lf(i, l, Zf(l), s);
      }
      function ly(i) {
        return c_(i) && i != +i;
      }
      function oy(i) {
        if (Yd(i))
          throw new Le(f);
        return rs(i);
      }
      function fy(i) {
        return i === null;
      }
      function uy(i) {
        return i == null;
      }
      function c_(i) {
        return typeof i == "number" || Rt(i) && an(i) == We;
      }
      function _l(i) {
        if (!Rt(i) || an(i) != et)
          return !1;
        var l = eo(i);
        if (l === null)
          return !0;
        var s = ot.call(l, "constructor") && l.constructor;
        return typeof s == "function" && s instanceof s && Jl.call(s) == rg;
      }
      var ru = za ? Rn(za) : fd;
      function ay(i) {
        return __(i) && i >= -C && i <= C;
      }
      var g_ = Aa ? Rn(Aa) : ud;
      function Co(i) {
        return typeof i == "string" || !Re(i) && Rt(i) && an(i) == Tt;
      }
      function On(i) {
        return typeof i == "symbol" || Rt(i) && an(i) == St;
      }
      var kr = Ca ? Rn(Ca) : ad;
      function sy(i) {
        return i === n;
      }
      function _y(i) {
        return Rt(i) && ln(i) == gt;
      }
      function hy(i) {
        return Rt(i) && an(i) == zt;
      }
      var cy = wo(Rf), gy = wo(function(i, l) {
        return i <= l;
      });
      function d_(i) {
        if (!i)
          return [];
        if (yn(i))
          return Co(i) ? Vn(i) : mn(i);
        if (Vr && i[Vr])
          return G0(i[Vr]());
        var l = ln(i), s = l == ye ? wf : l == Me ? Zl : xr;
        return s(i);
      }
      function wi(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = Zn(i), i === W || i === -W) {
          var l = i < 0 ? -1 : 1;
          return l * R;
        }
        return i === i ? i : 0;
      }
      function Ie(i) {
        var l = wi(i), s = l % 1;
        return l === l ? s ? l - s : l : 0;
      }
      function m_(i) {
        return i ? Gi(Ie(i), 0, he) : 0;
      }
      function Zn(i) {
        if (typeof i == "number")
          return i;
        if (On(i))
          return ce;
        if (Mt(i)) {
          var l = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = Mt(l) ? l + "" : l;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = Da(i);
        var s = H.test(i);
        return s || dt.test(i) ? C0(i.slice(2), s ? 2 : 8) : Si.test(i) ? ce : +i;
      }
      function y_(i) {
        return li(i, bn(i));
      }
      function dy(i) {
        return i ? Gi(Ie(i), -C, C) : i === 0 ? i : 0;
      }
      function rt(i) {
        return i == null ? "" : In(i);
      }
      var my = wr(function(i, l) {
        if (al(l) || yn(l)) {
          li(l, qt(l), i);
          return;
        }
        for (var s in l)
          ot.call(l, s) && il(i, s, l[s]);
      }), b_ = wr(function(i, l) {
        li(l, bn(l), i);
      }), Lo = wr(function(i, l, s, m) {
        li(l, bn(l), i, m);
      }), yy = wr(function(i, l, s, m) {
        li(l, qt(l), i, m);
      }), by = mi(Tf);
      function wy(i, l) {
        var s = br(i);
        return l == null ? s : Ja(s, l);
      }
      var py = Ne(function(i, l) {
        i = at(i);
        var s = -1, m = l.length, b = m > 2 ? l[2] : n;
        for (b && sn(l[0], l[1], b) && (m = 1); ++s < m; )
          for (var M = l[s], L = bn(M), I = -1, F = L.length; ++I < F; ) {
            var ne = L[I], re = i[ne];
            (re === n || ei(re, dr[ne]) && !ot.call(i, ne)) && (i[ne] = M[ne]);
          }
        return i;
      }), vy = Ne(function(i) {
        return i.push(n, Ds), En(w_, n, i);
      });
      function ky(i, l) {
        return Ea(i, xe(l, 3), ri);
      }
      function xy(i, l) {
        return Ea(i, xe(l, 3), zf);
      }
      function My(i, l) {
        return i == null ? i : Sf(i, xe(l, 3), bn);
      }
      function Ty(i, l) {
        return i == null ? i : ts(i, xe(l, 3), bn);
      }
      function Sy(i, l) {
        return i && ri(i, xe(l, 3));
      }
      function zy(i, l) {
        return i && zf(i, xe(l, 3));
      }
      function Ay(i) {
        return i == null ? [] : so(i, qt(i));
      }
      function Cy(i) {
        return i == null ? [] : so(i, bn(i));
      }
      function lu(i, l, s) {
        var m = i == null ? n : Zi(i, l);
        return m === n ? s : m;
      }
      function Ly(i, l) {
        return i != null && Ps(i, l, $g);
      }
      function ou(i, l) {
        return i != null && Ps(i, l, ed);
      }
      var Ey = Ls(function(i, l, s) {
        l != null && typeof l.toString != "function" && (l = Ql.call(l)), i[l] = s;
      }, uu(wn)), Ry = Ls(function(i, l, s) {
        l != null && typeof l.toString != "function" && (l = Ql.call(l)), ot.call(i, l) ? i[l].push(s) : i[l] = [s];
      }, xe), Iy = Ne(ll);
      function qt(i) {
        return yn(i) ? ja(i) : Ef(i);
      }
      function bn(i) {
        return yn(i) ? ja(i, !0) : sd(i);
      }
      function Oy(i, l) {
        var s = {};
        return l = xe(l, 3), ri(i, function(m, b, M) {
          gi(s, l(m, b, M), m);
        }), s;
      }
      function Dy(i, l) {
        var s = {};
        return l = xe(l, 3), ri(i, function(m, b, M) {
          gi(s, b, l(m, b, M));
        }), s;
      }
      var Ny = wr(function(i, l, s) {
        _o(i, l, s);
      }), w_ = wr(function(i, l, s, m) {
        _o(i, l, s, m);
      }), Uy = mi(function(i, l) {
        var s = {};
        if (i == null)
          return s;
        var m = !1;
        l = wt(l, function(M) {
          return M = Oi(M, i), m || (m = M.length > 1), M;
        }), li(i, qf(i), s), m && (s = Xn(s, h | g | w, Ed));
        for (var b = l.length; b--; )
          Uf(s, l[b]);
        return s;
      });
      function Py(i, l) {
        return p_(i, zo(xe(l)));
      }
      var Fy = mi(function(i, l) {
        return i == null ? {} : hd(i, l);
      });
      function p_(i, l) {
        if (i == null)
          return {};
        var s = wt(qf(i), function(m) {
          return [m];
        });
        return l = xe(l), _s(i, s, function(m, b) {
          return l(m, b[0]);
        });
      }
      function Wy(i, l, s) {
        l = Oi(l, i);
        var m = -1, b = l.length;
        for (b || (b = 1, i = n); ++m < b; ) {
          var M = i == null ? n : i[oi(l[m])];
          M === n && (m = b, M = s), i = bi(M) ? M.call(i) : M;
        }
        return i;
      }
      function By(i, l, s) {
        return i == null ? i : fl(i, l, s);
      }
      function Hy(i, l, s, m) {
        return m = typeof m == "function" ? m : n, i == null ? i : fl(i, l, s, m);
      }
      var v_ = Is(qt), k_ = Is(bn);
      function Yy(i, l, s) {
        var m = Re(i), b = m || Ni(i) || kr(i);
        if (l = xe(l, 4), s == null) {
          var M = i && i.constructor;
          b ? s = m ? new M() : [] : Mt(i) ? s = bi(M) ? br(eo(i)) : {} : s = {};
        }
        return (b ? Bn : ri)(i, function(L, I, F) {
          return l(s, L, I, F);
        }), s;
      }
      function Xy(i, l) {
        return i == null ? !0 : Uf(i, l);
      }
      function qy(i, l, s) {
        return i == null ? i : ms(i, l, Wf(s));
      }
      function Gy(i, l, s, m) {
        return m = typeof m == "function" ? m : n, i == null ? i : ms(i, l, Wf(s), m);
      }
      function xr(i) {
        return i == null ? [] : bf(i, qt(i));
      }
      function Zy(i) {
        return i == null ? [] : bf(i, bn(i));
      }
      function jy(i, l, s) {
        return s === n && (s = l, l = n), s !== n && (s = Zn(s), s = s === s ? s : 0), l !== n && (l = Zn(l), l = l === l ? l : 0), Gi(Zn(i), l, s);
      }
      function Ky(i, l, s) {
        return l = wi(l), s === n ? (s = l, l = 0) : s = wi(s), i = Zn(i), td(i, l, s);
      }
      function Jy(i, l, s) {
        if (s && typeof s != "boolean" && sn(i, l, s) && (l = s = n), s === n && (typeof l == "boolean" ? (s = l, l = n) : typeof i == "boolean" && (s = i, i = n)), i === n && l === n ? (i = 0, l = 1) : (i = wi(i), l === n ? (l = i, i = 0) : l = wi(l)), i > l) {
          var m = i;
          i = l, l = m;
        }
        if (s || i % 1 || l % 1) {
          var b = Ga();
          return rn(i + b * (l - i + A0("1e-" + ((b + "").length - 1))), l);
        }
        return Of(i, l);
      }
      var Qy = pr(function(i, l, s) {
        return l = l.toLowerCase(), i + (s ? x_(l) : l);
      });
      function x_(i) {
        return fu(rt(i).toLowerCase());
      }
      function M_(i) {
        return i = rt(i), i && i.replace(Xr, B0).replace(b0, "");
      }
      function Vy(i, l, s) {
        i = rt(i), l = In(l);
        var m = i.length;
        s = s === n ? m : Gi(Ie(s), 0, m);
        var b = s;
        return s -= l.length, s >= 0 && i.slice(s, b) == l;
      }
      function $y(i) {
        return i = rt(i), i && zn.test(i) ? i.replace(At, H0) : i;
      }
      function eb(i) {
        return i = rt(i), i && un.test(i) ? i.replace(dn, "\\$&") : i;
      }
      var tb = pr(function(i, l, s) {
        return i + (s ? "-" : "") + l.toLowerCase();
      }), nb = pr(function(i, l, s) {
        return i + (s ? " " : "") + l.toLowerCase();
      }), ib = zs("toLowerCase");
      function rb(i, l, s) {
        i = rt(i), l = Ie(l);
        var m = l ? cr(i) : 0;
        if (!l || m >= l)
          return i;
        var b = (l - m) / 2;
        return bo(ro(b), s) + i + bo(io(b), s);
      }
      function lb(i, l, s) {
        i = rt(i), l = Ie(l);
        var m = l ? cr(i) : 0;
        return l && m < l ? i + bo(l - m, s) : i;
      }
      function ob(i, l, s) {
        i = rt(i), l = Ie(l);
        var m = l ? cr(i) : 0;
        return l && m < l ? bo(l - m, s) + i : i;
      }
      function fb(i, l, s) {
        return s || l == null ? l = 0 : l && (l = +l), gg(rt(i).replace(Fn, ""), l || 0);
      }
      function ub(i, l, s) {
        return (s ? sn(i, l, s) : l === n) ? l = 1 : l = Ie(l), Df(rt(i), l);
      }
      function ab() {
        var i = arguments, l = rt(i[0]);
        return i.length < 3 ? l : l.replace(i[1], i[2]);
      }
      var sb = pr(function(i, l, s) {
        return i + (s ? "_" : "") + l.toLowerCase();
      });
      function _b(i, l, s) {
        return s && typeof s != "number" && sn(i, l, s) && (l = s = n), s = s === n ? he : s >>> 0, s ? (i = rt(i), i && (typeof l == "string" || l != null && !ru(l)) && (l = In(l), !l && hr(i)) ? Di(Vn(i), 0, s) : i.split(l, s)) : [];
      }
      var hb = pr(function(i, l, s) {
        return i + (s ? " " : "") + fu(l);
      });
      function cb(i, l, s) {
        return i = rt(i), s = s == null ? 0 : Gi(Ie(s), 0, i.length), l = In(l), i.slice(s, s + l.length) == l;
      }
      function gb(i, l, s) {
        var m = x.templateSettings;
        s && sn(i, l, s) && (l = n), i = rt(i), l = Lo({}, l, m, Os);
        var b = Lo({}, l.imports, m.imports, Os), M = qt(b), L = bf(b, M), I, F, ne = 0, re = l.interpolate || _i, fe = "__p += '", ge = pf(
          (l.escape || _i).source + "|" + re.source + "|" + (re === An ? fr : _i).source + "|" + (l.evaluate || _i).source + "|$",
          "g"
        ), pe = "//# sourceURL=" + (ot.call(l, "sourceURL") ? (l.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++x0 + "]") + `
`;
        i.replace(ge, function(Se, Fe, Xe, Dn, _n, Nn) {
          return Xe || (Xe = Dn), fe += i.slice(ne, Nn).replace(qr, Y0), Fe && (I = !0, fe += `' +
__e(` + Fe + `) +
'`), _n && (F = !0, fe += `';
` + _n + `;
__p += '`), Xe && (fe += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), ne = Nn + Se.length, Se;
        }), fe += `';
`;
        var Te = ot.call(l, "variable") && l.variable;
        if (!Te)
          fe = `with (obj) {
` + fe + `
}
`;
        else if (Wi.test(Te))
          throw new Le(a);
        fe = (F ? fe.replace(Tn, "") : fe).replace(yt, "$1").replace(Pn, "$1;"), fe = "function(" + (Te || "obj") + `) {
` + (Te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (I ? ", __e = _.escape" : "") + (F ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + fe + `return __p
}`;
        var De = S_(function() {
          return nt(M, pe + "return " + fe).apply(n, L);
        });
        if (De.source = fe, iu(De))
          throw De;
        return De;
      }
      function db(i) {
        return rt(i).toLowerCase();
      }
      function mb(i) {
        return rt(i).toUpperCase();
      }
      function yb(i, l, s) {
        if (i = rt(i), i && (s || l === n))
          return Da(i);
        if (!i || !(l = In(l)))
          return i;
        var m = Vn(i), b = Vn(l), M = Na(m, b), L = Ua(m, b) + 1;
        return Di(m, M, L).join("");
      }
      function bb(i, l, s) {
        if (i = rt(i), i && (s || l === n))
          return i.slice(0, Fa(i) + 1);
        if (!i || !(l = In(l)))
          return i;
        var m = Vn(i), b = Ua(m, Vn(l)) + 1;
        return Di(m, 0, b).join("");
      }
      function wb(i, l, s) {
        if (i = rt(i), i && (s || l === n))
          return i.replace(Fn, "");
        if (!i || !(l = In(l)))
          return i;
        var m = Vn(i), b = Na(m, Vn(l));
        return Di(m, b).join("");
      }
      function pb(i, l) {
        var s = D, m = j;
        if (Mt(l)) {
          var b = "separator" in l ? l.separator : b;
          s = "length" in l ? Ie(l.length) : s, m = "omission" in l ? In(l.omission) : m;
        }
        i = rt(i);
        var M = i.length;
        if (hr(i)) {
          var L = Vn(i);
          M = L.length;
        }
        if (s >= M)
          return i;
        var I = s - cr(m);
        if (I < 1)
          return m;
        var F = L ? Di(L, 0, I).join("") : i.slice(0, I);
        if (b === n)
          return F + m;
        if (L && (I += F.length - I), ru(b)) {
          if (i.slice(I).search(b)) {
            var ne, re = F;
            for (b.global || (b = pf(b.source, rt(si.exec(b)) + "g")), b.lastIndex = 0; ne = b.exec(re); )
              var fe = ne.index;
            F = F.slice(0, fe === n ? I : fe);
          }
        } else if (i.indexOf(In(b), I) != I) {
          var ge = F.lastIndexOf(b);
          ge > -1 && (F = F.slice(0, ge));
        }
        return F + m;
      }
      function vb(i) {
        return i = rt(i), i && Sn.test(i) ? i.replace(gn, J0) : i;
      }
      var kb = pr(function(i, l, s) {
        return i + (s ? " " : "") + l.toUpperCase();
      }), fu = zs("toUpperCase");
      function T_(i, l, s) {
        return i = rt(i), l = s ? n : l, l === n ? q0(i) ? $0(i) : N0(i) : i.match(l) || [];
      }
      var S_ = Ne(function(i, l) {
        try {
          return En(i, n, l);
        } catch (s) {
          return iu(s) ? s : new Le(s);
        }
      }), xb = mi(function(i, l) {
        return Bn(l, function(s) {
          s = oi(s), gi(i, s, tu(i[s], i));
        }), i;
      });
      function Mb(i) {
        var l = i == null ? 0 : i.length, s = xe();
        return i = l ? wt(i, function(m) {
          if (typeof m[1] != "function")
            throw new Hn(u);
          return [s(m[0]), m[1]];
        }) : [], Ne(function(m) {
          for (var b = -1; ++b < l; ) {
            var M = i[b];
            if (En(M[0], this, m))
              return En(M[1], this, m);
          }
        });
      }
      function Tb(i) {
        return Jg(Xn(i, h));
      }
      function uu(i) {
        return function() {
          return i;
        };
      }
      function Sb(i, l) {
        return i == null || i !== i ? l : i;
      }
      var zb = Cs(), Ab = Cs(!0);
      function wn(i) {
        return i;
      }
      function au(i) {
        return ls(typeof i == "function" ? i : Xn(i, h));
      }
      function Cb(i) {
        return fs(Xn(i, h));
      }
      function Lb(i, l) {
        return us(i, Xn(l, h));
      }
      var Eb = Ne(function(i, l) {
        return function(s) {
          return ll(s, i, l);
        };
      }), Rb = Ne(function(i, l) {
        return function(s) {
          return ll(i, s, l);
        };
      });
      function su(i, l, s) {
        var m = qt(l), b = so(l, m);
        s == null && !(Mt(l) && (b.length || !m.length)) && (s = l, l = i, i = this, b = so(l, qt(l)));
        var M = !(Mt(s) && "chain" in s) || !!s.chain, L = bi(i);
        return Bn(b, function(I) {
          var F = l[I];
          i[I] = F, L && (i.prototype[I] = function() {
            var ne = this.__chain__;
            if (M || ne) {
              var re = i(this.__wrapped__), fe = re.__actions__ = mn(this.__actions__);
              return fe.push({ func: F, args: arguments, thisArg: i }), re.__chain__ = ne, re;
            }
            return F.apply(i, Ci([this.value()], arguments));
          });
        }), i;
      }
      function Ib() {
        return Qt._ === this && (Qt._ = lg), this;
      }
      function _u() {
      }
      function Ob(i) {
        return i = Ie(i), Ne(function(l) {
          return as(l, i);
        });
      }
      var Db = Hf(wt), Nb = Hf(La), Ub = Hf(cf);
      function z_(i) {
        return Kf(i) ? gf(oi(i)) : cd(i);
      }
      function Pb(i) {
        return function(l) {
          return i == null ? n : Zi(i, l);
        };
      }
      var Fb = Es(), Wb = Es(!0);
      function hu() {
        return [];
      }
      function cu() {
        return !1;
      }
      function Bb() {
        return {};
      }
      function Hb() {
        return "";
      }
      function Yb() {
        return !0;
      }
      function Xb(i, l) {
        if (i = Ie(i), i < 1 || i > C)
          return [];
        var s = he, m = rn(i, he);
        l = xe(l), i -= he;
        for (var b = yf(m, l); ++s < i; )
          l(s);
        return b;
      }
      function qb(i) {
        return Re(i) ? wt(i, oi) : On(i) ? [i] : mn(Zs(rt(i)));
      }
      function Gb(i) {
        var l = ++ig;
        return rt(i) + l;
      }
      var Zb = yo(function(i, l) {
        return i + l;
      }, 0), jb = Yf("ceil"), Kb = yo(function(i, l) {
        return i / l;
      }, 1), Jb = Yf("floor");
      function Qb(i) {
        return i && i.length ? ao(i, wn, Af) : n;
      }
      function Vb(i, l) {
        return i && i.length ? ao(i, xe(l, 2), Af) : n;
      }
      function $b(i) {
        return Ia(i, wn);
      }
      function e6(i, l) {
        return Ia(i, xe(l, 2));
      }
      function t6(i) {
        return i && i.length ? ao(i, wn, Rf) : n;
      }
      function n6(i, l) {
        return i && i.length ? ao(i, xe(l, 2), Rf) : n;
      }
      var i6 = yo(function(i, l) {
        return i * l;
      }, 1), r6 = Yf("round"), l6 = yo(function(i, l) {
        return i - l;
      }, 0);
      function o6(i) {
        return i && i.length ? mf(i, wn) : 0;
      }
      function f6(i, l) {
        return i && i.length ? mf(i, xe(l, 2)) : 0;
      }
      return x.after = C2, x.ary = r_, x.assign = my, x.assignIn = b_, x.assignInWith = Lo, x.assignWith = yy, x.at = by, x.before = l_, x.bind = tu, x.bindAll = xb, x.bindKey = o_, x.castArray = B2, x.chain = t_, x.chunk = Jd, x.compact = Qd, x.concat = Vd, x.cond = Mb, x.conforms = Tb, x.constant = uu, x.countBy = o2, x.create = wy, x.curry = f_, x.curryRight = u_, x.debounce = a_, x.defaults = py, x.defaultsDeep = vy, x.defer = L2, x.delay = E2, x.difference = $d, x.differenceBy = em, x.differenceWith = tm, x.drop = nm, x.dropRight = im, x.dropRightWhile = rm, x.dropWhile = lm, x.fill = om, x.filter = u2, x.flatMap = _2, x.flatMapDeep = h2, x.flatMapDepth = c2, x.flatten = Qs, x.flattenDeep = fm, x.flattenDepth = um, x.flip = R2, x.flow = zb, x.flowRight = Ab, x.fromPairs = am, x.functions = Ay, x.functionsIn = Cy, x.groupBy = g2, x.initial = _m, x.intersection = hm, x.intersectionBy = cm, x.intersectionWith = gm, x.invert = Ey, x.invertBy = Ry, x.invokeMap = m2, x.iteratee = au, x.keyBy = y2, x.keys = qt, x.keysIn = bn, x.map = Mo, x.mapKeys = Oy, x.mapValues = Dy, x.matches = Cb, x.matchesProperty = Lb, x.memoize = So, x.merge = Ny, x.mergeWith = w_, x.method = Eb, x.methodOf = Rb, x.mixin = su, x.negate = zo, x.nthArg = Ob, x.omit = Uy, x.omitBy = Py, x.once = I2, x.orderBy = b2, x.over = Db, x.overArgs = O2, x.overEvery = Nb, x.overSome = Ub, x.partial = nu, x.partialRight = s_, x.partition = w2, x.pick = Fy, x.pickBy = p_, x.property = z_, x.propertyOf = Pb, x.pull = bm, x.pullAll = $s, x.pullAllBy = wm, x.pullAllWith = pm, x.pullAt = vm, x.range = Fb, x.rangeRight = Wb, x.rearg = D2, x.reject = k2, x.remove = km, x.rest = N2, x.reverse = $f, x.sampleSize = M2, x.set = By, x.setWith = Hy, x.shuffle = T2, x.slice = xm, x.sortBy = A2, x.sortedUniq = Lm, x.sortedUniqBy = Em, x.split = _b, x.spread = U2, x.tail = Rm, x.take = Im, x.takeRight = Om, x.takeRightWhile = Dm, x.takeWhile = Nm, x.tap = Qm, x.throttle = P2, x.thru = xo, x.toArray = d_, x.toPairs = v_, x.toPairsIn = k_, x.toPath = qb, x.toPlainObject = y_, x.transform = Yy, x.unary = F2, x.union = Um, x.unionBy = Pm, x.unionWith = Fm, x.uniq = Wm, x.uniqBy = Bm, x.uniqWith = Hm, x.unset = Xy, x.unzip = eu, x.unzipWith = e_, x.update = qy, x.updateWith = Gy, x.values = xr, x.valuesIn = Zy, x.without = Ym, x.words = T_, x.wrap = W2, x.xor = Xm, x.xorBy = qm, x.xorWith = Gm, x.zip = Zm, x.zipObject = jm, x.zipObjectDeep = Km, x.zipWith = Jm, x.entries = v_, x.entriesIn = k_, x.extend = b_, x.extendWith = Lo, su(x, x), x.add = Zb, x.attempt = S_, x.camelCase = Qy, x.capitalize = x_, x.ceil = jb, x.clamp = jy, x.clone = H2, x.cloneDeep = X2, x.cloneDeepWith = q2, x.cloneWith = Y2, x.conformsTo = G2, x.deburr = M_, x.defaultTo = Sb, x.divide = Kb, x.endsWith = Vy, x.eq = ei, x.escape = $y, x.escapeRegExp = eb, x.every = f2, x.find = a2, x.findIndex = Ks, x.findKey = ky, x.findLast = s2, x.findLastIndex = Js, x.findLastKey = xy, x.floor = Jb, x.forEach = n_, x.forEachRight = i_, x.forIn = My, x.forInRight = Ty, x.forOwn = Sy, x.forOwnRight = zy, x.get = lu, x.gt = Z2, x.gte = j2, x.has = Ly, x.hasIn = ou, x.head = Vs, x.identity = wn, x.includes = d2, x.indexOf = sm, x.inRange = Ky, x.invoke = Iy, x.isArguments = Ji, x.isArray = Re, x.isArrayBuffer = K2, x.isArrayLike = yn, x.isArrayLikeObject = Dt, x.isBoolean = J2, x.isBuffer = Ni, x.isDate = Q2, x.isElement = V2, x.isEmpty = $2, x.isEqual = ey, x.isEqualWith = ty, x.isError = iu, x.isFinite = ny, x.isFunction = bi, x.isInteger = __, x.isLength = Ao, x.isMap = h_, x.isMatch = iy, x.isMatchWith = ry, x.isNaN = ly, x.isNative = oy, x.isNil = uy, x.isNull = fy, x.isNumber = c_, x.isObject = Mt, x.isObjectLike = Rt, x.isPlainObject = _l, x.isRegExp = ru, x.isSafeInteger = ay, x.isSet = g_, x.isString = Co, x.isSymbol = On, x.isTypedArray = kr, x.isUndefined = sy, x.isWeakMap = _y, x.isWeakSet = hy, x.join = dm, x.kebabCase = tb, x.last = Gn, x.lastIndexOf = mm, x.lowerCase = nb, x.lowerFirst = ib, x.lt = cy, x.lte = gy, x.max = Qb, x.maxBy = Vb, x.mean = $b, x.meanBy = e6, x.min = t6, x.minBy = n6, x.stubArray = hu, x.stubFalse = cu, x.stubObject = Bb, x.stubString = Hb, x.stubTrue = Yb, x.multiply = i6, x.nth = ym, x.noConflict = Ib, x.noop = _u, x.now = To, x.pad = rb, x.padEnd = lb, x.padStart = ob, x.parseInt = fb, x.random = Jy, x.reduce = p2, x.reduceRight = v2, x.repeat = ub, x.replace = ab, x.result = Wy, x.round = r6, x.runInContext = N, x.sample = x2, x.size = S2, x.snakeCase = sb, x.some = z2, x.sortedIndex = Mm, x.sortedIndexBy = Tm, x.sortedIndexOf = Sm, x.sortedLastIndex = zm, x.sortedLastIndexBy = Am, x.sortedLastIndexOf = Cm, x.startCase = hb, x.startsWith = cb, x.subtract = l6, x.sum = o6, x.sumBy = f6, x.template = gb, x.times = Xb, x.toFinite = wi, x.toInteger = Ie, x.toLength = m_, x.toLower = db, x.toNumber = Zn, x.toSafeInteger = dy, x.toString = rt, x.toUpper = mb, x.trim = yb, x.trimEnd = bb, x.trimStart = wb, x.truncate = pb, x.unescape = vb, x.uniqueId = Gb, x.upperCase = kb, x.upperFirst = fu, x.each = n_, x.eachRight = i_, x.first = Vs, su(x, function() {
        var i = {};
        return ri(x, function(l, s) {
          ot.call(x.prototype, s) || (i[s] = l);
        }), i;
      }(), { chain: !1 }), x.VERSION = r, Bn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        x[i].placeholder = x;
      }), Bn(["drop", "take"], function(i, l) {
        Be.prototype[i] = function(s) {
          s = s === n ? 1 : Bt(Ie(s), 0);
          var m = this.__filtered__ && !l ? new Be(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = rn(s, m.__takeCount__) : m.__views__.push({
            size: rn(s, he),
            type: i + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, Be.prototype[i + "Right"] = function(s) {
          return this.reverse()[i](s).reverse();
        };
      }), Bn(["filter", "map", "takeWhile"], function(i, l) {
        var s = l + 1, m = s == ie || s == J;
        Be.prototype[i] = function(b) {
          var M = this.clone();
          return M.__iteratees__.push({
            iteratee: xe(b, 3),
            type: s
          }), M.__filtered__ = M.__filtered__ || m, M;
        };
      }), Bn(["head", "last"], function(i, l) {
        var s = "take" + (l ? "Right" : "");
        Be.prototype[i] = function() {
          return this[s](1).value()[0];
        };
      }), Bn(["initial", "tail"], function(i, l) {
        var s = "drop" + (l ? "" : "Right");
        Be.prototype[i] = function() {
          return this.__filtered__ ? new Be(this) : this[s](1);
        };
      }), Be.prototype.compact = function() {
        return this.filter(wn);
      }, Be.prototype.find = function(i) {
        return this.filter(i).head();
      }, Be.prototype.findLast = function(i) {
        return this.reverse().find(i);
      }, Be.prototype.invokeMap = Ne(function(i, l) {
        return typeof i == "function" ? new Be(this) : this.map(function(s) {
          return ll(s, i, l);
        });
      }), Be.prototype.reject = function(i) {
        return this.filter(zo(xe(i)));
      }, Be.prototype.slice = function(i, l) {
        i = Ie(i);
        var s = this;
        return s.__filtered__ && (i > 0 || l < 0) ? new Be(s) : (i < 0 ? s = s.takeRight(-i) : i && (s = s.drop(i)), l !== n && (l = Ie(l), s = l < 0 ? s.dropRight(-l) : s.take(l - i)), s);
      }, Be.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, Be.prototype.toArray = function() {
        return this.take(he);
      }, ri(Be.prototype, function(i, l) {
        var s = /^(?:filter|find|map|reject)|While$/.test(l), m = /^(?:head|last)$/.test(l), b = x[m ? "take" + (l == "last" ? "Right" : "") : l], M = m || /^find/.test(l);
        b && (x.prototype[l] = function() {
          var L = this.__wrapped__, I = m ? [1] : arguments, F = L instanceof Be, ne = I[0], re = F || Re(L), fe = function(Fe) {
            var Xe = b.apply(x, Ci([Fe], I));
            return m && ge ? Xe[0] : Xe;
          };
          re && s && typeof ne == "function" && ne.length != 1 && (F = re = !1);
          var ge = this.__chain__, pe = !!this.__actions__.length, Te = M && !ge, De = F && !pe;
          if (!M && re) {
            L = De ? L : new Be(this);
            var Se = i.apply(L, I);
            return Se.__actions__.push({ func: xo, args: [fe], thisArg: n }), new Yn(Se, ge);
          }
          return Te && De ? i.apply(this, I) : (Se = this.thru(fe), Te ? m ? Se.value()[0] : Se.value() : Se);
        });
      }), Bn(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var l = jl[i], s = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(i);
        x.prototype[i] = function() {
          var b = arguments;
          if (m && !this.__chain__) {
            var M = this.value();
            return l.apply(Re(M) ? M : [], b);
          }
          return this[s](function(L) {
            return l.apply(Re(L) ? L : [], b);
          });
        };
      }), ri(Be.prototype, function(i, l) {
        var s = x[l];
        if (s) {
          var m = s.name + "";
          ot.call(yr, m) || (yr[m] = []), yr[m].push({ name: l, func: s });
        }
      }), yr[mo(n, T).name] = [{
        name: "wrapper",
        func: n
      }], Be.prototype.clone = vg, Be.prototype.reverse = kg, Be.prototype.value = xg, x.prototype.at = Vm, x.prototype.chain = $m, x.prototype.commit = e2, x.prototype.next = t2, x.prototype.plant = i2, x.prototype.reverse = r2, x.prototype.toJSON = x.prototype.valueOf = x.prototype.value = l2, x.prototype.first = x.prototype.head, Vr && (x.prototype[Vr] = n2), x;
    }, gr = eg();
    Hi ? ((Hi.exports = gr)._ = gr, af._ = gr) : Qt._ = gr;
  }).call(vi);
})(Jo, Jo.exports);
var K1 = Jo.exports;
const Do = /* @__PURE__ */ j1(K1);
function Qo(e) {
  return --e * e * ((1.70158 + 1) * e + 1.70158) + 1;
}
function _t(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function J1(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Cl(e) {
  return e * e * e * e * e;
}
function Mw(e, t, n) {
  if (t !== "timeseries")
    return e = e, e;
  const r = Pr(n);
  return e.map((o) => ({
    ...o,
    data: o.data.map((f) => ({
      ...f,
      x: new Date(r(f.x))
    }))
  }));
}
function Tw(e, t, n) {
  let r = [];
  for (let o = 0; o < t.length; o++) {
    let f = [];
    f = e.filter(({ id: u }) => u === t[o]);
    for (let u = 0; u < f.length; u++)
      (f[u].type === "line" || f[u].type === "density" || f[u].type === "bands") && (f[u].path = n[f[u].type](f[u].data));
    r = r.concat(f);
  }
  return r;
}
function Sw(e, t, n, r, o, f, u, a, _, c) {
  if (e.length === 0)
    return [, Ui().domain([0, 0]).range([0, 0]), Ui().domain([0, 0]).range([0, 0])];
  let d, h, g, w, v, S, k, T, A = [], z = [...new Set(e.map((E) => E.type))], U = [];
  for (let E = 0; E < e.length; E++)
    U = U.concat(e[E].data);
  if (a ? f === "timeseries" ? d = a.map((E) => new Date(E)) : d = a : c === "factor" ? d = U.map((E) => E.x) : d = Au(U, (E) => E.x), f === "timeseries" ? h = aw().domain(d).range([
    t + o * 1.5,
    r - o * 2
  ]) : typeof U[0].x == "number" ? h = Ui().domain(d).range([
    t + o * 1.5,
    r - o * 2
  ]) : h = E3().domain(d).range([
    t + o * 1.5,
    r - o * 2
  ]), z.includes("bands")) {
    let E = [];
    e.forEach((X) => {
      X.data.forEach((D) => {
        "y" in D && E.push(D.y), "y_min" in D && E.push(D.y_min), "y_max" in D && E.push(D.y_max);
      });
    });
    let B = Math.min(...E), G = Math.max(...E);
    g = [B, G];
  } else
    _ ? g = _ : g = Au(U, (E) => +E.y);
  u === "linear" ? w = Ui().domain(g).range([
    n - o * 2,
    o * 2
  ]).nice() : w = R1().domain(g).range([
    n - o * 2,
    o * 2
  ]).nice(), v = (E) => E.x, S = (E) => E.y, k = (E) => E.y_min, T = (E) => E.y_max;
  for (let E = 0; E < z.length; E++)
    switch (z[E]) {
      case "density":
        A[E] = _h().curve(sw).x((B) => h(v(B))).y0(n - o * 2).y1((B) => w(S(B)));
        break;
      case "line":
        A[E] = q1().defined(function(B) {
          return B.y !== null;
        }).x((B) => h(v(B))).y((B) => w(S(B)));
        break;
      case "bands":
        A[E] = _h().x((B) => h(v(B))).y0((B) => w(k(B))).y1((B) => w(T(B)));
        break;
    }
  let O = {};
  for (let E = 0; E < z.length; E++)
    O[z[E]] = A[E];
  return [O, h, w];
}
function zw(e, t, n, r, o, f) {
  if (!t || t.length === 0)
    return [];
  let u = e.flatMap((k) => k.data), a = [];
  if (n === "factor") {
    let k = o.domain();
    a = [o(k[0]), o(k[k.length - 1])];
  } else
    a = Au(u, (k) => k.x), a = [o(a[0]), o(a[1])];
  const _ = Pr(f), c = a[0], d = a[1];
  let h = [], g = /* @__PURE__ */ new Set();
  for (let k of t) {
    let { x_start: T, x_end: A, y_start: z, y_end: U, legend_text: O } = k;
    n === "date" ? (T = o(new Date(_(T))), A = o(new Date(_(A)))) : (T = o(T), A = o(A)), z = z === "auto" ? r(r.domain()[0]) : z === "even" ? "even" : r(parseFloat(z)), U = U === "auto" ? r(r.domain()[1]) : U === "even" ? "even" : r(parseFloat(U));
    let E;
    n === "factor" ? E = T <= c ? o.domain()[0] : o.domain()[o.range().indexOf(T)] : E = T <= c ? o.invert(c) : o.invert(T), (T >= c && T <= d || A >= c && A <= d || T <= c && A >= d) && (h.push({
      ...k,
      x_start: T,
      x_end: A,
      y_start: z,
      y_end: U,
      x_position: E
    }), g.add(O));
  }
  let w = Array.from(g), v = r.range(), S = (v[1] - v[0]) / w.length;
  for (let k of h)
    if (k.y_start === "even" || k.y_end === "even") {
      let T = w.indexOf(k.legend_text), A = v[0] + T * S, z = A + S;
      k.y_position = r.invert(z), k.y_start = A, k.y_end = z;
    }
  return h;
}
function Aw(e, t, n, r, o) {
  let f = [null, null], u = 1 / 0;
  for (let a = 0; a < e.length; a++)
    for (let _ = 0; _ < e[a].data.length; _++) {
      let c = e[a].data[_], d = Math.sqrt(
        (t(c.x) - n) ** 2 + (r(c.y) - o) ** 2
      );
      d < u && (f = [a, _], u = d);
    }
  return f;
}
function Cw(e, t, n, r, o) {
  let f = null, u = 1 / 0;
  for (let a = 0; a < e.length; a++) {
    let _ = e[a].data, c = Math.sqrt(
      (t(_.x) - n) ** 2 + (r(_.y) - o) ** 2
    );
    c < u && (f = a, u = c);
  }
  return f;
}
function Lw(e, t, n, r) {
  const o = n.invert(t);
  function f(h, g) {
    const w = Ol((A) => new Date(A.x)).left, v = w(h, g, 1), S = h[v - 1], k = h[v];
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
    o
  ), _ = u(
    new Date(a.x),
    r
  );
  function c(h, g, w) {
    return h.find((v) => u(new Date(v.x), w).getTime() === g.getTime());
  }
  let d = [];
  return e.forEach((h) => {
    const g = c(
      h.data,
      _,
      r
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
function Q1(e, t, n, r, o) {
  if (e === "bar") {
    t.sort((a, _) => a - _);
    let f = 0, u = Math.abs(o - t[0]);
    for (let a = 1; a < t.length; a++) {
      const _ = Math.abs(o - t[a]);
      _ < u && (u = _, f = a);
    }
    return f;
  } else {
    const f = Ol((a) => n(a)).left, u = f(r, o);
    if (u > 0 && u < r.length) {
      const a = n(r[u - 1]), _ = n(r[u]);
      return o - a < _ - o ? r[u - 1] : r[u];
    } else {
      if (u === 0)
        return r[0];
      if (u === r.length)
        return r[r.length - 1];
    }
    return null;
  }
}
function Ew(e, t) {
  return Do.compact(
    Do.map(e, (n) => {
      const r = Do.filter(n.data, (o) => o.x === t);
      return Do.isEmpty(r) ? null : {
        ...n,
        data: r[0]
      };
    })
  );
}
function Rw(e, t, n, r, o, f, u, a) {
  let _, c, d;
  if (r === "timeseries" ? (_ = e.filter((h) => h.tooltip === !0), _ = Lw(
    _,
    f,
    t,
    a
  )) : (d = t.domain(), c = Q1("XYChart", void 0, t, d, f), _ = e.filter((h) => h.tooltip === !0), _ = Ew(
    _,
    c
  )), _ = _.filter((h) => h.data.y !== null), o === "vertical_line")
    return _;
  if (o === "single") {
    let h, g = Cw(
      _,
      t,
      f,
      n,
      u
    );
    return h = _[g], h;
  }
}
function Iw(e, t, n, r, o, f, u, a, _) {
  let c, d, h, g, w;
  return c = wl().domain(t).range([
    u + a * 1.5,
    r - a * 2
  ]).padding([0.3]), f === "grouped" ? d = wl().domain(n).range([0, c.bandwidth()]).padding([o]) : d = wl().domain("iii").range([0, c.bandwidth()]).padding([o]), g = Ru(e, (v) => +v.y), w = p1(e, (v) => +v.y_start), console.log("ymin", w), h = Ui().domain([w, g]).range([
    _ - a / 2,
    a * 2
  ]).nice(), [c, d, g, h];
}
function Ow(e) {
  const t = e.reduce((n, r) => (n[r.x] = n[r.x] || [], n[r.x].push(r), n), {});
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    r.sort((f, u) => f.y_start - u.y_start);
    let o = 0;
    r.forEach((f, u) => {
      if (u === 0) {
        let a = f.y_start;
        f.y -= a, f.y_start = 0, o = f.y;
      } else {
        let a = f.y_start;
        f.y_start = o, f.y -= a - f.y_start, o = f.y;
      }
    });
  }), Object.values(t).flat();
}
function Dw(e) {
  const t = e.reduce((r, o) => (r[o.x] = r[o.x] || [], r[o.x].push(o), r), {}), n = {};
  return Object.keys(t).forEach((r) => {
    n[r] = t[r].reduce(
      (o, { y: f, y_start: u }) => o + (f - u),
      0
    );
  }), Object.keys(t).forEach((r) => {
    let o = 0;
    t[r].forEach((f) => {
      const a = (f.y - f.y_start) / n[r] * 100;
      f.y_start = o, o += a, f.y = o;
    });
  }), Object.values(t).flat();
}
function yh(e, t, n) {
  const r = t(e.x_start), o = n(e.y_start), f = t(e.x_end), u = n(e.y_end), a = e.curvature || 0.2, _ = e.direction === "downward" ? -1 : 1, c = (r + f) / 2, d = (o + u) / 2, h = c + _ * Math.abs(u - o) * a, g = d - _ * Math.abs(f - r) * a;
  let w = `M ${r} ${o} Q ${h} ${g} ${f} ${u}`;
  const v = 10, S = Math.atan2(u - g, f - h), k = Math.PI / 8, T = f - v * Math.cos(S - k), A = u - v * Math.sin(S - k), z = f - v * Math.cos(S + k), U = u - v * Math.sin(S + k);
  return w += `M ${f} ${u} L ${T} ${A} M ${f} ${u} L ${z} ${U}`, w;
}
function ua(e, t, n) {
  const r = n * (Math.PI / 180);
  return Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r));
}
function Nw(e, t, n, r, o, f, u) {
  let a, _;
  return a = Ui().domain([p1(e, (c) => c.x_start), Ru(e, (c) => c.x_end)]).range([u + o, t - r - o]), _ = Ui().domain([0, Ru(e, (c) => c.y)]).range([n - r - o - f, o]).nice(), [a, _];
}
function V1(e, t, n) {
  return console.log(n[0].data.x, "tooltip2_array_values[0].data.x"), e === "hour" && t === "timeseries" ? n[0].data.x.toString().replace(/^(.*?)T/, " ").split(" ").slice(0, 5).join(" ") : t === "timeseries" ? n[0].data.x.toDateString() : n[0].data.x.toString();
}
function pn(e, { delay: t = 0, duration: n = 400, easing: r = Br } = {}) {
  const o = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (f) => `opacity: ${f * o}`
  };
}
function Zt(e, { delay: t = 0, duration: n = 400, easing: r = J1, x: o = 0, y: f = 0, opacity: u = 0 } = {}) {
  const a = getComputedStyle(e), _ = +a.opacity, c = a.transform === "none" ? "" : a.transform, d = _ * (1 - u), [h, g] = E_(o), [w, v] = E_(f);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (S, k) => `
			transform: ${c} translate(${(1 - S) * h}${g}, ${(1 - S) * w}${v});
			opacity: ${_ - d * k}`
  };
}
function Uw(e, { delay: t = 0, speed: n, duration: r, easing: o = _t } = {}) {
  let f = e.getTotalLength();
  const u = getComputedStyle(e);
  return u.strokeLinecap !== "butt" && (f += parseInt(u.strokeWidth)), r === void 0 ? n === void 0 ? r = 800 : r = f / n : typeof r == "function" && (r = r(f)), {
    delay: t,
    duration: r,
    easing: o,
    css: (a, _) => `
			stroke-dasharray: ${f};
			stroke-dashoffset: ${_ * f};
		`
  };
}
function bh(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Fu(e, t) {
  if (e === t || e !== e)
    return () => e;
  const n = typeof e;
  if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const r = t.map((o, f) => Fu(e[f], o));
    return (o) => r.map((f) => f(o));
  }
  if (n === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (bh(e) && bh(t)) {
      e = e.getTime(), t = t.getTime();
      const f = t - e;
      return (u) => new Date(e + u * f);
    }
    const r = Object.keys(t), o = {};
    return r.forEach((f) => {
      o[f] = Fu(e[f], t[f]);
    }), (f) => {
      const u = {};
      return r.forEach((a) => {
        u[a] = o[a](f);
      }), u;
    };
  }
  if (n === "number") {
    const r = t - e;
    return (o) => e + o * r;
  }
  throw new Error(`Cannot interpolate ${n} values`);
}
function Ut(e, t = {}) {
  const n = Il(e);
  let r, o = e;
  function f(u, a) {
    if (e == null)
      return n.set(e = u), Promise.resolve();
    o = u;
    let _ = r, c = !1, {
      delay: d = 0,
      duration: h = 400,
      easing: g = Br,
      interpolate: w = Fu
    } = C_(C_({}, t), a);
    if (h === 0)
      return _ && (_.abort(), _ = null), n.set(e = o), Promise.resolve();
    const v = Ll() + d;
    let S;
    return r = El((k) => {
      if (k < v)
        return !0;
      c || (S = w(e, u), typeof h == "function" && (h = h(e, u)), c = !0), _ && (_.abort(), _ = null);
      const T = k - v;
      return T > /** @type {number} */
      h ? (n.set(e = u), !1) : (n.set(e = S(g(T / h))), !0);
    }), r.promise;
  }
  return {
    set: f,
    update: (u, a) => f(u(o, e), a),
    subscribe: n.subscribe
  };
}
function Pw(e) {
  let t, n, r, o, f, u, a, _, c, d;
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
      ), p(t, "opacity", r = /*listener*/
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
      )), p(t, "fill", o = /*line*/
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
      V(h, t, g), _ = !0, c || (d = [
        lt(
          t,
          "introstart",
          /*introstart_handler*/
          e[10]
        ),
        lt(
          t,
          "introend",
          /*introend_handler*/
          e[11]
        ),
        lt(
          t,
          "outrostart",
          /*outrostart_handler*/
          e[12]
        ),
        lt(
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
      55 && r !== (r = /*listener*/
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
      ))) && p(t, "opacity", r), (!_ || g & /*line*/
      1 && o !== (o = /*line*/
      h[0].fill)) && p(t, "fill", o), (!_ || g & /*hover_legend, current_categories, line, line_size*/
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
        _ && (a && a.end(1), u = Fi(t, Uw, { duration: 1e3, delay: 50 }), u.start());
      }), _ = !0);
    },
    o(h) {
      u && u.invalidate(), h && (a = Ml(t, pn, { duration: 500, delay: 30 })), _ = !1;
    },
    d(h) {
      h && Q(t), h && a && a.end(), c = !1, Ht(d);
    }
  };
}
function Fw(e, t, n) {
  let r, { line: o } = t, { hover_legend: f } = t, { current_categories: u } = t, { line_size: a } = t, { tweenOptions: _ } = t, { path: c = o.path } = t, { tooltip2_array_values: d } = t, { listener: h } = t, g = Ut(c, _ == null ? void 0 : _.path);
  pt(e, g, (T) => n(6, r = T));
  const w = () => console.log("Density chart starting to appear"), v = () => console.log("Density chart appeared"), S = () => console.log("Density chart starting to disappear"), k = () => console.log("Density chart disappeared");
  return e.$$set = (T) => {
    "line" in T && n(0, o = T.line), "hover_legend" in T && n(1, f = T.hover_legend), "current_categories" in T && n(2, u = T.current_categories), "line_size" in T && n(3, a = T.line_size), "tweenOptions" in T && n(8, _ = T.tweenOptions), "path" in T && n(9, c = T.path), "tooltip2_array_values" in T && n(4, d = T.tooltip2_array_values), "listener" in T && n(5, h = T.listener);
  }, e.$$.update = () => {
    e.$$.dirty & /*path, tweenOptions*/
    768 && Rl().then(() => {
      g.set(c, _ == null ? void 0 : _.path);
    });
  }, [
    o,
    f,
    u,
    a,
    d,
    h,
    r,
    g,
    _,
    c,
    w,
    v,
    S,
    k
  ];
}
class Ww extends ct {
  constructor(t) {
    super(), ht(this, t, Fw, Pw, ft, {
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
function wh(e, t, n) {
  const r = e.slice();
  return r[18] = t[n][0], r[19] = t[n][1], r;
}
function Bw(e) {
  let t = (
    /*key*/
    e[18] + ""
  ), n, r, o;
  function f(_, c) {
    return typeof /*values*/
    _[19] == "string" ? qw : (
      /*values*/
      _[19] instanceof Date ? Xw : Yw
    );
  }
  let u = f(e), a = u(e);
  return {
    c() {
      n = Ae(t), r = Ae(`:
          `), o = _e("div"), a.c(), y(o, "font-weight", "bold");
    },
    m(_, c) {
      V(_, n, c), V(_, r, c), V(_, o, c), a.m(o, null);
    },
    p(_, c) {
      c & /*tooltip_value*/
      4 && t !== (t = /*key*/
      _[18] + "") && Oe(n, t), u === (u = f(_)) && a ? a.p(_, c) : (a.d(1), a = u(_), a && (a.c(), a.m(o, null)));
    },
    d(_) {
      _ && (Q(n), Q(r), Q(o)), a.d();
    }
  };
}
function Hw(e) {
  let t, n, r, o, f = (
    /*values*/
    e[19] + ""
  ), u;
  return {
    c() {
      t = _e("div"), n = _e("span"), r = ve(), o = _e("div"), u = Ae(f), y(
        n,
        "background",
        /*key*/
        e[18]
      ), y(n, "width", "9px"), y(n, "height", "9px"), y(n, "border-radius", "50%"), y(n, "margin", "3px"), y(n, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(t, "display", "flex");
    },
    m(a, _) {
      V(a, t, _), q(t, n), V(a, r, _), V(a, o, _), q(o, u);
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
      a && (Q(t), Q(r), Q(o));
    }
  };
}
function Yw(e) {
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
    m(r, o) {
      V(r, n, o);
    },
    p(r, o) {
      o & /*format_number, tooltip_value*/
      6 && t !== (t = /*format_number*/
      r[1](
        /*values*/
        r[19]
      ) + "") && Oe(n, t);
    },
    d(r) {
      r && Q(n);
    }
  };
}
function Xw(e) {
  let t = (
    /*values*/
    e[19].toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(r, o) {
      V(r, n, o);
    },
    p(r, o) {
      o & /*tooltip_value*/
      4 && t !== (t = /*values*/
      r[19].toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + "") && Oe(n, t);
    },
    d(r) {
      r && Q(n);
    }
  };
}
function qw(e) {
  let t = (
    /*values*/
    e[19] + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(r, o) {
      V(r, n, o);
    },
    p(r, o) {
      o & /*tooltip_value*/
      4 && t !== (t = /*values*/
      r[19] + "") && Oe(n, t);
    },
    d(r) {
      r && Q(n);
    }
  };
}
function ph(e) {
  let t, n;
  function r(u, a) {
    return (
      /*key*/
      u[18] !== "x" && /*key*/
      u[18] !== "y" ? Hw : Bw
    );
  }
  let o = r(e), f = o(e);
  return {
    c() {
      t = _e("div"), f.c(), n = ve(), p(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(u, a) {
      V(u, t, a), f.m(t, null), q(t, n);
    },
    p(u, a) {
      o === (o = r(u)) && f ? f.p(u, a) : (f.d(1), f = o(u), f && (f.c(), f.m(t, n)));
    },
    d(u) {
      u && Q(t), f.d();
    }
  };
}
function Gw(e) {
  let t, n, r, o, f = ke(Object.entries(
    /*tooltip_value*/
    e[2]
  )), u = [];
  for (let a = 0; a < f.length; a += 1)
    u[a] = ph(wh(e, f, a));
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
      V(a, t, _), q(t, n);
      for (let c = 0; c < u.length; c += 1)
        u[c] && u[c].m(n, null);
      o = !0;
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
          const d = wh(a, f, c);
          u[c] ? u[c].p(d, _) : (u[c] = ph(d), u[c].c(), u[c].m(n, null));
        }
        for (; c < u.length; c += 1)
          u[c].d(1);
        u.length = f.length;
      }
      (!o || _ & /*colour*/
      1) && y(n, "border", "1px solid " + /*colour*/
      a[0]), (!o || _ & /*yPosition*/
      8) && y(
        t,
        "top",
        /*yPosition*/
        a[3] + "px"
      ), (!o || _ & /*xPosition*/
      16) && y(
        t,
        "left",
        /*xPosition*/
        a[4] + "px"
      );
    },
    i(a) {
      o || (it(() => {
        o && (r || (r = Pt(t, Zt, {}, !0)), r.run(1));
      }), o = !0);
    },
    o(a) {
      r || (r = Pt(t, Zt, {}, !1)), r.run(0), o = !1;
    },
    d(a) {
      a && Q(t), xn(u, a), a && r && r.end();
    }
  };
}
const vh = 0;
function Zw(e, t, n) {
  let r, o, f, u, a, _, c, { x_scale: d } = t, { y_scale: h } = t, { format_tooltip: g } = t, { tooltip2_array_values: w } = t, { width: v } = t, { height: S } = t, { margin: k } = t, { buffer: T } = t, A, z;
  const U = -50;
  return e.$$set = (O) => {
    "x_scale" in O && n(5, d = O.x_scale), "y_scale" in O && n(6, h = O.y_scale), "format_tooltip" in O && n(7, g = O.format_tooltip), "tooltip2_array_values" in O && n(8, w = O.tooltip2_array_values), "width" in O && n(9, v = O.width), "height" in O && n(10, S = O.height), "margin" in O && n(11, k = O.margin), "buffer" in O && n(12, T = O.buffer);
  }, e.$$.update = () => {
    e.$$.dirty & /*x_scale, tooltip2_array_values*/
    288 && n(14, r = d(w.data.x)), e.$$.dirty & /*y_scale, tooltip2_array_values*/
    320 && n(13, o = h(w.data.y)), e.$$.dirty & /*x, width*/
    16896 && n(4, f = r + A > v ? r - A - U : r + U), e.$$.dirty & /*y, height, margin, buffer*/
    15360 && n(3, u = o + z > S - k - T ? o - z - vh - k - T : o + vh), e.$$.dirty & /*tooltip2_array_values*/
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
    v,
    S,
    k,
    T,
    o,
    r
  ];
}
class jw extends ct {
  constructor(t) {
    super(), ht(this, t, Zw, Gw, ft, {
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
function kh(e, t, n) {
  const r = e.slice();
  return r[19] = t[n], r;
}
function xh(e) {
  let t, n, r, o, f, u, a;
  function _(w, v) {
    return (
      /*interval*/
      w[1] === "hour" && /*type*/
      w[2] === "timeseries" ? Qw : (
        /*type*/
        w[2] === "timeseries" ? Jw : Kw
      )
    );
  }
  let c = _(e), d = c(e), h = ke(
    /*tooltip2_array_values*/
    e[0]
  ), g = [];
  for (let w = 0; w < h.length; w += 1)
    g[w] = Mh(kh(e, h, w));
  return {
    c() {
      t = _e("div"), n = _e("h6"), d.c(), r = ve(), o = _e("div");
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
      V(w, t, v), q(t, n), d.m(n, null), q(t, r), q(t, o);
      for (let S = 0; S < g.length; S += 1)
        g[S] && g[S].m(o, null);
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
          const k = kh(w, h, S);
          g[S] ? g[S].p(k, v) : (g[S] = Mh(k), g[S].c(), g[S].m(o, null));
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
      w && Q(t), d.d(), xn(g, w), f(), w && u && u.end();
    }
  };
}
function Kw(e) {
  let t = (
    /*tooltip2_array_values*/
    e[0][0].data.x.toString() + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(r, o) {
      V(r, n, o);
    },
    p(r, o) {
      o & /*tooltip2_array_values*/
      1 && t !== (t = /*tooltip2_array_values*/
      r[0][0].data.x.toString() + "") && Oe(n, t);
    },
    d(r) {
      r && Q(n);
    }
  };
}
function Jw(e) {
  let t = (
    /*tooltip2_array_values*/
    e[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(r, o) {
      V(r, n, o);
    },
    p(r, o) {
      o & /*tooltip2_array_values*/
      1 && t !== (t = /*tooltip2_array_values*/
      r[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 4).join(" ") + "") && Oe(n, t);
    },
    d(r) {
      r && Q(n);
    }
  };
}
function Qw(e) {
  let t = (
    /*tooltip2_array_values*/
    e[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 5).join(" ") + ""
  ), n;
  return {
    c() {
      n = Ae(t);
    },
    m(r, o) {
      V(r, n, o);
    },
    p(r, o) {
      o & /*tooltip2_array_values*/
      1 && t !== (t = /*tooltip2_array_values*/
      r[0][0].data.x.toString().replace("^(.*?)T", " ").split(" ").slice(0, 5).join(" ") + "") && Oe(n, t);
    },
    d(r) {
      r && Q(n);
    }
  };
}
function Vw(e) {
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
    m(n, r) {
      V(n, t, r);
    },
    p(n, r) {
      r & /*tooltip2_array_values*/
      1 && y(
        t,
        "background",
        /*line*/
        n[19].colors
      );
    },
    d(n) {
      n && Q(t);
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
      ), y(t, "width", "9px"), y(t, "height", "9px"), y(t, "border-radius", "50%"), y(t, "margin", "3px"), y(t, "border", "1px solid rgba(0, 0, 0, 0.5)");
    },
    m(n, r) {
      V(n, t, r);
    },
    p(n, r) {
      r & /*tooltip2_array_values*/
      1 && y(
        t,
        "background",
        /*line*/
        n[19].colors
      );
    },
    d(n) {
      n && Q(t);
    }
  };
}
function Mh(e) {
  let t, n, r, o, f, u = (
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
      return $w;
    if (
      /*line*/
      k[19].type === "line"
    )
      return Vw;
  }
  let v = w(e), S = v && v(e);
  return {
    c() {
      t = _e("div"), n = _e("div"), r = _e("div"), S && S.c(), o = ve(), f = _e("span"), a = Ae(u), _ = ve(), c = _e("div"), h = Ae(d), g = ve(), y(r, "width", "18px"), y(r, "display", "flex"), y(r, "align-items", "center"), y(r, "justify-content", "center"), y(n, "display", "flex"), y(n, "align-items", "center"), p(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(k, T) {
      V(k, t, T), q(t, n), q(n, r), S && S.m(r, null), q(n, o), q(n, f), q(f, a), q(t, _), q(t, c), q(c, h), q(t, g);
    },
    p(k, T) {
      v === (v = w(k)) && S ? S.p(k, T) : (S && S.d(1), S = v && v(k), S && (S.c(), S.m(r, null))), T & /*tooltip2_array_values*/
      1 && u !== (u = /*line*/
      k[19].id + "") && Oe(a, u), T & /*format_number, tooltip2_array_values*/
      33 && d !== (d = /*format_number*/
      k[5](
        /*line*/
        k[19].data.y
      ) + "") && Oe(h, d);
    },
    d(k) {
      k && Q(t), S && S.d();
    }
  };
}
function ep(e) {
  let t, n = (
    /*tooltip2_array_values*/
    e[0] && /*tooltip2_array_values*/
    e[0].length > 0 && xh(e)
  );
  return {
    c() {
      n && n.c(), t = Ee();
    },
    m(r, o) {
      n && n.m(r, o), V(r, t, o);
    },
    p(r, [o]) {
      /*tooltip2_array_values*/
      r[0] && /*tooltip2_array_values*/
      r[0].length > 0 ? n ? (n.p(r, o), o & /*tooltip2_array_values*/
      1 && le(n, 1)) : (n = xh(r), n.c(), le(n, 1), n.m(t.parentNode, t)) : n && (qe(), ae(n, 1, 1, () => {
        n = null;
      }), Ge());
    },
    i(r) {
      le(n);
    },
    o(r) {
      ae(n);
    },
    d(r) {
      r && Q(t), n && n.d(r);
    }
  };
}
const Th = 20, Sh = 0;
function tp(e, t, n) {
  let r, o, f, u, a, { x_scale: _ } = t, { m_y: c } = t, { tooltip2_array_values: d } = t, { format_tooltip: h } = t, { height: g } = t, { width: w } = t, { margin: v } = t, { buffer: S } = t, { interval: k } = t, { type: T } = t, A, z, U;
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
    257 && n(17, r = _(d[0].data.x)), e.$$.dirty & /*m_y*/
    512 && n(16, o = c), e.$$.dirty & /*x, tooltipWidth, width*/
    135176 && n(7, f = r + A > w ? r - A - Th : r + Th), e.$$.dirty & /*y, tooltipHeight, height, margin, buffer*/
    92176 && n(6, u = o + z > g - v - S ? o - z - Sh - v - S : o + Sh), e.$$.dirty & /*format_tooltip*/
    1024 && n(5, a = hn(h));
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
    o,
    r,
    O
  ];
}
class np extends ct {
  constructor(t) {
    super(), ht(this, t, tp, ep, ft, {
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
function ip(e) {
  let t, n, r, o, f, u, a, _, c;
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
      e[0].colors), p(t, "stroke", r = /*categories*/
      e[0].colors), p(t, "stroke-width", o = /*listener*/
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
      V(d, t, h), _ || (c = [
        lt(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[14]
        ),
        lt(
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
      1 && r !== (r = /*categories*/
      d[0].colors) && p(t, "stroke", r), h & /*listener, tooltip2_array_values, points, categories*/
      99 && o !== (o = /*listener*/
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
      )) && p(t, "stroke-width", o), h & /*listener, tooltip2_array_values, points, categories*/
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
      d && Q(t), _ = !1, Ht(c);
    }
  };
}
function rp(e, t, n) {
  let r, o, { x: f } = t, { y: u } = t, { categories: a } = t, { points: _ } = t, { tweenOptions: c } = t, { hovered_data: d } = t, { hover_legend: h } = t, { current_categories: g } = t, { tooltip2_array_values: w } = t, { listener: v } = t, S = Ut(f, c == null ? void 0 : c.x);
  pt(e, S, (z) => n(7, r = z));
  let k = Ut(u, c == null ? void 0 : c.y);
  pt(e, k, (z) => n(8, o = z));
  const T = (z) => {
    I6.set(_.x), d.set(a.id), R_.set(_);
  }, A = () => {
    d.set(null), R_.set(null);
  };
  return e.$$set = (z) => {
    "x" in z && n(11, f = z.x), "y" in z && n(12, u = z.y), "categories" in z && n(0, a = z.categories), "points" in z && n(1, _ = z.points), "tweenOptions" in z && n(13, c = z.tweenOptions), "hovered_data" in z && n(2, d = z.hovered_data), "hover_legend" in z && n(3, h = z.hover_legend), "current_categories" in z && n(4, g = z.current_categories), "tooltip2_array_values" in z && n(5, w = z.tooltip2_array_values), "listener" in z && n(6, v = z.listener);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions, y*/
    14336 && Rl().then(() => {
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
    r,
    o,
    S,
    k,
    f,
    u,
    c,
    T,
    A
  ];
}
class lp extends ct {
  constructor(t) {
    super(), ht(this, t, rp, ip, ft, {
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
function zh(e, t, n) {
  const r = e.slice();
  return r[13] = t[n], r;
}
function Ah(e) {
  let t, n, r, o = (
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
      t = _e("p"), n = _e("span"), r = ve(), f = Ae(o), u = ve(), y(
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
      V(g, t, w), q(t, n), q(t, r), q(t, f), q(t, u), _ || (c = [
        lt(t, "mouseover", d),
        lt(t, "click", h)
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
      16 && o !== (o = /*legend_entries*/
      e[13].legend_text + "") && Oe(f, o), w & /*$hovered_legend, uniqueCombinations*/
      48 && a !== (a = /*$hovered_legend*/
      e[5] && /*$hovered_legend*/
      e[5] !== /*legend_entries*/
      e[13].legend_text ? "opacity: 0.3; margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 12px; font-weight: 400; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;") && p(t, "style", a);
    },
    d(g) {
      g && Q(t), _ = !1, Ht(c);
    }
  };
}
function op(e) {
  let t, n, r, o = ke(
    /*uniqueCombinations*/
    e[4]
  ), f = [];
  for (let u = 0; u < o.length; u += 1)
    f[u] = Ah(zh(e, o, u));
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
      V(u, t, a);
      for (let _ = 0; _ < f.length; _ += 1)
        f[_] && f[_].m(t, null);
      e[11](t), n || (r = lt(
        t,
        "mouseleave",
        /*handleMouseLeave*/
        e[6]
      ), n = !0);
    },
    p(u, [a]) {
      if (a & /*$hovered_legend, uniqueCombinations, legendClicked, handleLegendClick*/
      184) {
        o = ke(
          /*uniqueCombinations*/
          u[4]
        );
        let _;
        for (_ = 0; _ < o.length; _ += 1) {
          const c = zh(u, o, _);
          f[_] ? f[_].p(c, a) : (f[_] = Ah(c), f[_].c(), f[_].m(t, null));
        }
        for (; _ < f.length; _ += 1)
          f[_].d(1);
        f.length = o.length;
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
      u && Q(t), xn(f, u), e[11](null), n = !1, r();
    }
  };
}
function fp(e, t, n) {
  let r, o;
  pt(e, Vi, (k) => n(5, o = k));
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
    st[k ? "unshift" : "push"](() => {
      _ = k, n(2, _);
    });
  }
  return e.$$set = (k) => {
    "filtered_segments_df" in k && n(8, f = k.filtered_segments_df), "label_height" in k && n(0, u = k.label_height), "space_between_label_and_ticks" in k && n(1, a = k.space_between_label_and_ticks);
  }, e.$$.update = () => {
    e.$$.dirty & /*filtered_segments_df*/
    256 && n(4, r = Array.from(new Map(f.map((k) => [
      `${k.colors}-${k.legend_text}`,
      {
        colors: k.colors,
        legend_text: k.legend_text
      }
    ])).values())), e.$$.dirty & /*legendContainer*/
    4 && (_ && document.addEventListener("dblclick", d), Zu(() => {
      document.removeEventListener("dblclick", d);
    }));
  }, [
    u,
    a,
    _,
    c,
    r,
    o,
    h,
    g,
    f,
    w,
    v,
    S
  ];
}
class up extends ct {
  constructor(t) {
    super(), ht(this, t, fp, op, ft, {
      filtered_segments_df: 8,
      label_height: 0,
      space_between_label_and_ticks: 1
    });
  }
}
function Ch(e, t, n) {
  const r = e.slice();
  return r[22] = t[n], r[23] = t, r[24] = n, r;
}
function Lh(e, t, n) {
  const r = e.slice();
  return r[22] = t[n], r[25] = t, r[24] = n, r;
}
function Eh(e) {
  let t, n, r, o = ke(
    /*final_positions*/
    e[3]
  ), f = [];
  for (let _ = 0; _ < o.length; _ += 1)
    f[_] = Rh(Lh(e, o, _));
  let u = ke(
    /*final_positions*/
    e[3]
  ), a = [];
  for (let _ = 0; _ < u.length; _ += 1)
    a[_] = Ih(Ch(e, u, _));
  return {
    c() {
      t = ze("svg");
      for (let _ = 0; _ < f.length; _ += 1)
        f[_].c();
      n = ve();
      for (let _ = 0; _ < a.length; _ += 1)
        a[_].c();
      r = Ee(), p(
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
      V(_, t, c);
      for (let d = 0; d < f.length; d += 1)
        f[d] && f[d].m(t, null);
      V(_, n, c);
      for (let d = 0; d < a.length; d += 1)
        a[d] && a[d].m(_, c);
      V(_, r, c);
    },
    p(_, c) {
      if (c & /*lineElements, final_positions*/
      40) {
        o = ke(
          /*final_positions*/
          _[3]
        );
        let d;
        for (d = 0; d < o.length; d += 1) {
          const h = Lh(_, o, d);
          f[d] ? f[d].p(h, c) : (f[d] = Rh(h), f[d].c(), f[d].m(t, null));
        }
        for (; d < f.length; d += 1)
          f[d].d(1);
        f.length = o.length;
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
          const h = Ch(_, u, d);
          a[d] ? a[d].p(h, c) : (a[d] = Ih(h), a[d].c(), a[d].m(r.parentNode, r));
        }
        for (; d < a.length; d += 1)
          a[d].d(1);
        a.length = u.length;
      }
    },
    d(_) {
      _ && (Q(t), Q(n), Q(r)), xn(f, _), xn(a, _);
    }
  };
}
function Rh(e) {
  let t, n = (
    /*i*/
    e[24]
  );
  const r = () => (
    /*line_binding*/
    e[16](t, n)
  ), o = () => (
    /*line_binding*/
    e[16](null, n)
  );
  return {
    c() {
      t = ze("line"), p(t, "class", "line"), y(t, "stroke", "black"), y(t, "stroke-width", "1");
    },
    m(f, u) {
      V(f, t, u), r();
    },
    p(f, u) {
      e = f, n !== /*i*/
      e[24] && (o(), n = /*i*/
      e[24], r());
    },
    d(f) {
      f && Q(t), o();
    }
  };
}
function Ih(e) {
  let t, n, r = (
    /*segment*/
    e[22].tooltip + ""
  ), o, f = (
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
      t = _e("div"), n = new b6(!1), o = ve(), n.a = o, y(t, "position", "absolute"), y(
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
      V(h, t, g), n.m(r, t), q(t, o), _(), u || (a = lt(t, "mousedown", d), u = !0);
    },
    p(h, g) {
      e = h, g & /*final_positions*/
      8 && r !== (r = /*segment*/
      e[22].tooltip + "") && n.p(r), g & /*final_positions*/
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
      h && Q(t), c(), u = !1, a();
    }
  };
}
function ap(e) {
  let t, n = (
    /*$hovered_legend*/
    e[2] && /*final_positions*/
    e[3] && Eh(e)
  );
  return {
    c() {
      n && n.c(), t = Ee();
    },
    m(r, o) {
      n && n.m(r, o), V(r, t, o);
    },
    p(r, [o]) {
      /*$hovered_legend*/
      r[2] && /*final_positions*/
      r[3] ? n ? n.p(r, o) : (n = Eh(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Pe,
    o: Pe,
    d(r) {
      r && Q(t), n && n.d(r);
    }
  };
}
function sp(e, t) {
  const r = document.createElement("canvas").getContext("2d");
  return r.font = `${t}px Arial`, r.measureText(e).width;
}
function _p(e, t, n) {
  const r = document.createElement("div");
  r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.style.width = `${n}px`, r.style.fontSize = `${t}px`, r.style.lineHeight = "1.5", r.style.visibility = "hidden", r.style.whiteSpace = "normal", r.style.overflowWrap = "break-word", r.style.fontFamily = "Arial", r.style.padding = "2px", r.style.boxSizing = "border-box", r.style.border = "1px solid transparent", r.style.backgroundColor = "white", r.style.display = "flex", r.style.flexDirection = "column", r.style.alignItems = "start", r.style.height = "auto", r.innerHTML = e, document.body.appendChild(r);
  const o = r.scrollHeight;
  return document.body.removeChild(r), o;
}
function hp(e, t) {
  const n = t.initial_left, r = t.initial_top, o = t.left + t.dx, f = t.top + t.dy;
  e.setAttribute("x1", n), e.setAttribute("y1", r), e.setAttribute("x2", o), e.setAttribute("y2", f);
}
function cp(e, t, n) {
  let r;
  pt(e, Vi, (X) => n(2, r = X));
  let { y: o } = t, { filtered_segments_df: f } = t, { x_scale: u } = t, { y_scale: a } = t, { width: _ } = t, { height: c } = t, { line_generator_space: d } = t, { y_lines_spacing: h } = t, g = [], w, v, S;
  function k(X, D) {
    return X.map((ie) => {
      let te = ie.y_position ? a(ie.y_position) : a(o), J = u(ie.x_position), W = Math.min(Math.max(ie.x_end - ie.x_start, 100), D);
      const C = sp(ie.tooltip, ie.font_size);
      C < W && (W = C);
      const R = _p(ie.tooltip, ie.font_size, W);
      let ce = Math.max(R, 20);
      return {
        top: te,
        left: J,
        width: W,
        height: ce,
        dx: 0,
        dy: 0,
        colors: ie.colors,
        font_size: ie.font_size,
        text_color: ie.text_color,
        tooltip: ie.tooltip,
        initial_top: te,
        initial_left: J,
        opacity: ie.opacity
      };
    });
  }
  function T(X) {
    let D = !0, j = X[0], se = j, de = j;
    for (let ie = 1; ie < X.length; ie++) {
      let te = X[ie], J = j;
      J.left + J.width > te.left ? (D ? (J = se || j, te.top = J.top + J.height + 1, se = te) : (J = de || j, te.top = J.top - te.height - 1, de = te), D = !D) : (j = te, se = te, de = te), te.left + te.width > _ && (te.left = _ - te.width, te.left < 0 && (te.left = 0));
    }
    return X;
  }
  function A(X, D) {
    const j = U[D], se = O[D], de = v[D], ie = X.clientX - de.dx, te = X.clientY - de.dy;
    function J(C) {
      de.dx = C.clientX - ie, de.dy = C.clientY - te, j.style.transform = `translate(${de.dx}px, ${de.dy}px)`, hp(se, de);
    }
    function W() {
      window.removeEventListener("mousemove", J), window.removeEventListener("mouseup", W);
    }
    window.addEventListener("mousemove", J), window.addEventListener("mouseup", W);
  }
  function z() {
    O.forEach((X) => {
      X && (X.setAttribute("x1", ""), X.setAttribute("y1", ""), X.setAttribute("x2", ""), X.setAttribute("y2", ""));
    });
  }
  let U = f.map(() => null), O = f.map(() => null);
  function E(X, D) {
    st[X ? "unshift" : "push"](() => {
      O[D] = X, n(5, O);
    });
  }
  function B(X, D) {
    st[X ? "unshift" : "push"](() => {
      U[D] = X, n(4, U);
    });
  }
  const G = (X, D) => A(D, X);
  return e.$$set = (X) => {
    "y" in X && n(7, o = X.y), "filtered_segments_df" in X && n(8, f = X.filtered_segments_df), "x_scale" in X && n(9, u = X.x_scale), "y_scale" in X && n(10, a = X.y_scale), "width" in X && n(0, _ = X.width), "height" in X && n(1, c = X.height), "line_generator_space" in X && n(11, d = X.line_generator_space), "y_lines_spacing" in X && n(12, h = X.y_lines_spacing);
  }, e.$$.update = () => {
    e.$$.dirty & /*filtered_segments_df, $hovered_legend*/
    260 && n(13, g = f.filter((X) => X.legend_text === r)), e.$$.dirty & /*filtered_segments_df_temp, width, y_lines_spacing, line_generator_space, tooltipPositions*/
    30721 && g.length > 0 && (n(14, w = k(g, _ - h - d * 4)), n(3, v = T(w))), e.$$.dirty & /*$hovered_legend, previous_hovered_legend*/
    32772 && r !== S && (z(), n(15, S = r));
  }, [
    _,
    c,
    r,
    v,
    U,
    O,
    A,
    o,
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
class gp extends ct {
  constructor(t) {
    super(), ht(this, t, cp, ap, ft, {
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
function dp(e) {
  let t, n, r;
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
      e[10]), p(t, "height", r = /*$tweened_y1*/
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
      ), p(t, "clip-path", `url(#${aa})`);
    },
    m(o, f) {
      V(o, t, f);
    },
    p(o, f) {
      f & /*$tweened_x1*/
      1024 && p(
        t,
        "x",
        /*$tweened_x1*/
        o[10]
      ), f & /*$tweened_y2*/
      8192 && p(
        t,
        "y",
        /*$tweened_y2*/
        o[13]
      ), f & /*$tweened_x2, $tweened_x1*/
      3072 && n !== (n = /*$tweened_x2*/
      o[11] - /*$tweened_x1*/
      o[10]) && p(t, "width", n), f & /*$tweened_y1, $tweened_y2*/
      12288 && r !== (r = /*$tweened_y1*/
      o[12] - /*$tweened_y2*/
      o[13]) && p(t, "height", r), f & /*colors*/
      32 && p(
        t,
        "fill",
        /*colors*/
        o[5]
      ), f & /*opacity*/
      4 && p(
        t,
        "opacity",
        /*opacity*/
        o[2]
      ), f & /*outline_width*/
      2 && p(
        t,
        "stroke-width",
        /*outline_width*/
        o[1]
      ), f & /*outline_color*/
      8 && p(
        t,
        "stroke",
        /*outline_color*/
        o[3]
      );
    },
    d(o) {
      o && Q(t);
    }
  };
}
function mp(e) {
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
      ), p(t, "clip-path", `url(#${aa})`);
    },
    m(n, r) {
      V(n, t, r);
    },
    p(n, r) {
      r & /*$tweened_x1*/
      1024 && p(
        t,
        "x1",
        /*$tweened_x1*/
        n[10]
      ), r & /*$tweened_x2*/
      2048 && p(
        t,
        "x2",
        /*$tweened_x2*/
        n[11]
      ), r & /*$tweened_y1*/
      4096 && p(
        t,
        "y1",
        /*$tweened_y1*/
        n[12]
      ), r & /*$tweened_y2*/
      8192 && p(
        t,
        "y2",
        /*$tweened_y2*/
        n[13]
      ), r & /*colors*/
      32 && p(
        t,
        "stroke",
        /*colors*/
        n[5]
      ), r & /*linetype*/
      16 && p(
        t,
        "stroke-dasharray",
        /*linetype*/
        n[4]
      );
    },
    d(n) {
      n && Q(t);
    }
  };
}
function yp(e) {
  let t, n, r, o, f, u, a, _, c;
  function d(w, v) {
    return (
      /*type*/
      w[0] === "line" ? mp : dp
    );
  }
  let h = d(e), g = h(e);
  return {
    c() {
      t = ze("defs"), n = ze("clipPath"), r = ze("rect"), _ = ve(), g.c(), c = Ee(), p(r, "x", o = /*y_lines_spacing*/
      e[9] + /*line_generator_space*/
      e[6] * 1.5), p(r, "y", f = /*line_generator_space*/
      e[6] * 2), p(r, "width", u = /*width*/
      e[7] - /*line_generator_space*/
      e[6] * 7), p(r, "height", a = /*x_lines_spacing*/
      e[8] - /*line_generator_space*/
      e[6] * 2), p(n, "id", aa);
    },
    m(w, v) {
      V(w, t, v), q(t, n), q(n, r), V(w, _, v), g.m(w, v), V(w, c, v);
    },
    p(w, [v]) {
      v & /*y_lines_spacing, line_generator_space*/
      576 && o !== (o = /*y_lines_spacing*/
      w[9] + /*line_generator_space*/
      w[6] * 1.5) && p(r, "x", o), v & /*line_generator_space*/
      64 && f !== (f = /*line_generator_space*/
      w[6] * 2) && p(r, "y", f), v & /*width, line_generator_space*/
      192 && u !== (u = /*width*/
      w[7] - /*line_generator_space*/
      w[6] * 7) && p(r, "width", u), v & /*x_lines_spacing, line_generator_space*/
      320 && a !== (a = /*x_lines_spacing*/
      w[8] - /*line_generator_space*/
      w[6] * 2) && p(r, "height", a), h === (h = d(w)) && g ? g.p(w, v) : (g.d(1), g = h(w), g && (g.c(), g.m(c.parentNode, c)));
    },
    i: Pe,
    o: Pe,
    d(w) {
      w && (Q(t), Q(_), Q(c)), g.d(w);
    }
  };
}
let aa = "clip-path";
function bp(e, t, n) {
  let r, o, f, u, { type: a } = t, { outline_width: _ } = t, { opacity: c } = t, { outline_color: d } = t, { linetype: h } = t, { colors: g } = t, { line_generator_space: w } = t, { width: v } = t, { x_lines_spacing: S } = t, { y_lines_spacing: k } = t, { x1: T } = t, { x2: A } = t, { y1: z } = t, { y2: U } = t, { tweenOptions: O } = t, E = Ut(T, O == null ? void 0 : O.x1);
  pt(e, E, (D) => n(10, r = D));
  let B = Ut(z, O == null ? void 0 : O.y1);
  pt(e, B, (D) => n(12, f = D));
  let G = Ut(A, O == null ? void 0 : O.x2);
  pt(e, G, (D) => n(11, o = D));
  let X = Ut(U, O == null ? void 0 : O.y2);
  return pt(e, X, (D) => n(13, u = D)), e.$$set = (D) => {
    "type" in D && n(0, a = D.type), "outline_width" in D && n(1, _ = D.outline_width), "opacity" in D && n(2, c = D.opacity), "outline_color" in D && n(3, d = D.outline_color), "linetype" in D && n(4, h = D.linetype), "colors" in D && n(5, g = D.colors), "line_generator_space" in D && n(6, w = D.line_generator_space), "width" in D && n(7, v = D.width), "x_lines_spacing" in D && n(8, S = D.x_lines_spacing), "y_lines_spacing" in D && n(9, k = D.y_lines_spacing), "x1" in D && n(18, T = D.x1), "x2" in D && n(19, A = D.x2), "y1" in D && n(20, z = D.y1), "y2" in D && n(21, U = D.y2), "tweenOptions" in D && n(22, O = D.tweenOptions);
  }, e.$$.update = () => {
    e.$$.dirty & /*x1, tweenOptions*/
    4456448 && E.set(T, O == null ? void 0 : O.x1), e.$$.dirty & /*y1, tweenOptions*/
    5242880 && B.set(z, O == null ? void 0 : O.y1), e.$$.dirty & /*x2, tweenOptions*/
    4718592 && G.set(A, O == null ? void 0 : O.x2), e.$$.dirty & /*y2, tweenOptions*/
    6291456 && X.set(U, O == null ? void 0 : O.y2);
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
    r,
    o,
    f,
    u,
    E,
    B,
    G,
    X,
    T,
    A,
    z,
    U,
    O
  ];
}
class wp extends ct {
  constructor(t) {
    super(), ht(this, t, bp, yp, ft, {
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
function Oh(e, t, n) {
  const r = e.slice();
  return r[5] = t[n], r;
}
function Dh(e, t, n) {
  const r = e.slice();
  return r[8] = t[n], r[10] = n, r;
}
function Nh(e, t) {
  let n, r = (
    /*line*/
    t[8] + ""
  ), o, f, u;
  return {
    key: e,
    first: null,
    c() {
      n = ze("tspan"), o = Ae(r), p(n, "x", f = /*x_scale*/
      t[1](
        /*annotation*/
        t[5].x
      )), p(n, "dy", u = /*index*/
      t[10] === 0 ? 0 : "1.2em"), this.first = n;
    },
    m(a, _) {
      V(a, n, _), q(n, o);
    },
    p(a, _) {
      t = a, _ & /*annotations_df*/
      1 && r !== (r = /*line*/
      t[8] + "") && Oe(o, r), _ & /*x_scale, annotations_df*/
      3 && f !== (f = /*x_scale*/
      t[1](
        /*annotation*/
        t[5].x
      )) && p(n, "x", f), _ & /*annotations_df*/
      1 && u !== (u = /*index*/
      t[10] === 0 ? 0 : "1.2em") && p(n, "dy", u);
    },
    d(a) {
      a && Q(n);
    }
  };
}
function Uh(e) {
  let t, n = [], r = /* @__PURE__ */ new Map(), o, f, u, a, _, c, d = ke(
    /*annotation*/
    e[5].text.split(`
`)
  );
  const h = (g) => (
    /*line*/
    g[8]
  );
  for (let g = 0; g < d.length; g += 1) {
    let w = Dh(e, d, g), v = h(w);
    r.set(v, n[g] = Nh(v, w));
  }
  return {
    c() {
      t = ze("text");
      for (let g = 0; g < n.length; g += 1)
        n[g].c();
      p(t, "x", o = /*x_scale*/
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
      V(g, t, w);
      for (let v = 0; v < n.length; v += 1)
        n[v] && n[v].m(t, null);
    },
    p(g, w) {
      w & /*x_scale, annotations_df*/
      3 && (d = ke(
        /*annotation*/
        g[5].text.split(`
`)
      ), n = kn(n, w, h, 1, g, d, r, t, y1, Nh, null, Dh)), w & /*x_scale, annotations_df*/
      3 && o !== (o = /*x_scale*/
      g[1](
        /*annotation*/
        g[5].x
      )) && p(t, "x", o), w & /*y_scale, annotations_df*/
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
      g && Q(t);
      for (let w = 0; w < n.length; w += 1)
        n[w].d();
    }
  };
}
function pp(e) {
  let t, n = ke(
    /*annotations_df*/
    e[0]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = Uh(Oh(e, n, o));
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = Ee();
    },
    m(o, f) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, f);
      V(o, t, f);
    },
    p(o, [f]) {
      if (f & /*x_scale, annotations_df, y_scale*/
      7) {
        n = ke(
          /*annotations_df*/
          o[0]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = Oh(o, n, u);
          r[u] ? r[u].p(a, f) : (r[u] = Uh(a), r[u].c(), r[u].m(t.parentNode, t));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = n.length;
      }
    },
    i: Pe,
    o: Pe,
    d(o) {
      o && Q(t), xn(r, o);
    }
  };
}
function vp(e, t, n) {
  let { annotations_df: r } = t, { x_scale: o } = t, { y_scale: f } = t, { type: u } = t, { time_interval: a } = t;
  return e.$$set = (_) => {
    "annotations_df" in _ && n(0, r = _.annotations_df), "x_scale" in _ && n(1, o = _.x_scale), "y_scale" in _ && n(2, f = _.y_scale), "type" in _ && n(3, u = _.type), "time_interval" in _ && n(4, a = _.time_interval);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*type, annotations_df, time_interval*/
    25 && u === "timeseries")
      for (let _ = 0; _ < r.length; _++)
        n(0, r[_].x = Pr(a)(r[_].x), r), n(0, r[_].x = new Date(r[_].x), r);
  }, [r, o, f, u, a];
}
class kp extends ct {
  constructor(t) {
    super(), ht(this, t, vp, pp, ft, {
      annotations_df: 0,
      x_scale: 1,
      y_scale: 2,
      type: 3,
      time_interval: 4
    });
  }
}
function Ph(e, t, n) {
  const r = e.slice();
  return r[5] = t[n], r;
}
function Fh(e) {
  let t, n, r, o;
  return {
    c() {
      t = ze("path"), p(t, "d", n = yh(
        /*arrow*/
        e[5],
        /*x_scale*/
        e[1],
        /*y_scale*/
        e[2]
      )), p(t, "stroke", r = /*arrow*/
      e[5].color || "black"), p(t, "fill", "none"), p(t, "stroke-width", o = /*arrow*/
      e[5].width || "2");
    },
    m(f, u) {
      V(f, t, u);
    },
    p(f, u) {
      u & /*arrows_df, x_scale, y_scale*/
      7 && n !== (n = yh(
        /*arrow*/
        f[5],
        /*x_scale*/
        f[1],
        /*y_scale*/
        f[2]
      )) && p(t, "d", n), u & /*arrows_df*/
      1 && r !== (r = /*arrow*/
      f[5].color || "black") && p(t, "stroke", r), u & /*arrows_df*/
      1 && o !== (o = /*arrow*/
      f[5].width || "2") && p(t, "stroke-width", o);
    },
    d(f) {
      f && Q(t);
    }
  };
}
function xp(e) {
  let t, n = ke(
    /*arrows_df*/
    e[0]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = Fh(Ph(e, n, o));
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = Ee();
    },
    m(o, f) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, f);
      V(o, t, f);
    },
    p(o, [f]) {
      if (f & /*arrows_df, x_scale, y_scale*/
      7) {
        n = ke(
          /*arrows_df*/
          o[0]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = Ph(o, n, u);
          r[u] ? r[u].p(a, f) : (r[u] = Fh(a), r[u].c(), r[u].m(t.parentNode, t));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = n.length;
      }
    },
    i: Pe,
    o: Pe,
    d(o) {
      o && Q(t), xn(r, o);
    }
  };
}
function Mp(e, t, n) {
  let { arrows_df: r } = t, { x_scale: o } = t, { y_scale: f } = t, { type: u } = t, { time_interval: a } = t;
  return e.$$set = (_) => {
    "arrows_df" in _ && n(0, r = _.arrows_df), "x_scale" in _ && n(1, o = _.x_scale), "y_scale" in _ && n(2, f = _.y_scale), "type" in _ && n(3, u = _.type), "time_interval" in _ && n(4, a = _.time_interval);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*type, arrows_df, time_interval*/
    25 && u === "timeseries")
      for (let _ = 0; _ < r.length; _++)
        n(0, r[_].x_start = Pr(a)(r[_].x_start), r), n(0, r[_].x_start = new Date(r[_].x_start), r), n(0, r[_].x_end = Pr(a)(r[_].x_end), r), n(0, r[_].x_end = new Date(r[_].x_end), r);
  }, [r, o, f, u, a];
}
class Tp extends ct {
  constructor(t) {
    super(), ht(this, t, Mp, xp, ft, {
      arrows_df: 0,
      x_scale: 1,
      y_scale: 2,
      type: 3,
      time_interval: 4
    });
  }
}
function Sp(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var sa = Sp, zp = typeof vi == "object" && vi && vi.Object === Object && vi, Ap = zp, Cp = Ap, Lp = typeof self == "object" && self && self.Object === Object && self, Ep = Cp || Lp || Function("return this")(), $1 = Ep, Rp = $1, Ip = function() {
  return Rp.Date.now();
}, Op = Ip, Dp = /\s/;
function Np(e) {
  for (var t = e.length; t-- && Dp.test(e.charAt(t)); )
    ;
  return t;
}
var Up = Np, Pp = Up, Fp = /^\s+/;
function Wp(e) {
  return e && e.slice(0, Pp(e) + 1).replace(Fp, "");
}
var Bp = Wp, Hp = $1, Yp = Hp.Symbol, e0 = Yp, Wh = e0, t0 = Object.prototype, Xp = t0.hasOwnProperty, qp = t0.toString, ml = Wh ? Wh.toStringTag : void 0;
function Gp(e) {
  var t = Xp.call(e, ml), n = e[ml];
  try {
    e[ml] = void 0;
    var r = !0;
  } catch {
  }
  var o = qp.call(e);
  return r && (t ? e[ml] = n : delete e[ml]), o;
}
var Zp = Gp, jp = Object.prototype, Kp = jp.toString;
function Jp(e) {
  return Kp.call(e);
}
var Qp = Jp, Bh = e0, Vp = Zp, $p = Qp, e4 = "[object Null]", t4 = "[object Undefined]", Hh = Bh ? Bh.toStringTag : void 0;
function n4(e) {
  return e == null ? e === void 0 ? t4 : e4 : Hh && Hh in Object(e) ? Vp(e) : $p(e);
}
var i4 = n4;
function r4(e) {
  return e != null && typeof e == "object";
}
var l4 = r4, o4 = i4, f4 = l4, u4 = "[object Symbol]";
function a4(e) {
  return typeof e == "symbol" || f4(e) && o4(e) == u4;
}
var s4 = a4, _4 = Bp, Yh = sa, h4 = s4, Xh = 0 / 0, c4 = /^[-+]0x[0-9a-f]+$/i, g4 = /^0b[01]+$/i, d4 = /^0o[0-7]+$/i, m4 = parseInt;
function y4(e) {
  if (typeof e == "number")
    return e;
  if (h4(e))
    return Xh;
  if (Yh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Yh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _4(e);
  var n = g4.test(e);
  return n || d4.test(e) ? m4(e.slice(2), n ? 2 : 8) : c4.test(e) ? Xh : +e;
}
var b4 = y4, w4 = sa, ku = Op, qh = b4, p4 = "Expected a function", v4 = Math.max, k4 = Math.min;
function x4(e, t, n) {
  var r, o, f, u, a, _, c = 0, d = !1, h = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(p4);
  t = qh(t) || 0, w4(n) && (d = !!n.leading, h = "maxWait" in n, f = h ? v4(qh(n.maxWait) || 0, t) : f, g = "trailing" in n ? !!n.trailing : g);
  function w(E) {
    var B = r, G = o;
    return r = o = void 0, c = E, u = e.apply(G, B), u;
  }
  function v(E) {
    return c = E, a = setTimeout(T, t), d ? w(E) : u;
  }
  function S(E) {
    var B = E - _, G = E - c, X = t - B;
    return h ? k4(X, f - G) : X;
  }
  function k(E) {
    var B = E - _, G = E - c;
    return _ === void 0 || B >= t || B < 0 || h && G >= f;
  }
  function T() {
    var E = ku();
    if (k(E))
      return A(E);
    a = setTimeout(T, S(E));
  }
  function A(E) {
    return a = void 0, g && r ? w(E) : (r = o = void 0, u);
  }
  function z() {
    a !== void 0 && clearTimeout(a), c = 0, r = _ = o = a = void 0;
  }
  function U() {
    return a === void 0 ? u : A(ku());
  }
  function O() {
    var E = ku(), B = k(E);
    if (r = arguments, o = this, _ = E, B) {
      if (a === void 0)
        return v(_);
      if (h)
        return clearTimeout(a), a = setTimeout(T, t), w(_);
    }
    return a === void 0 && (a = setTimeout(T, t)), u;
  }
  return O.cancel = z, O.flush = U, O;
}
var M4 = x4, T4 = M4, S4 = sa, z4 = "Expected a function";
function A4(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(z4);
  return S4(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), T4(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var C4 = A4;
const n0 = /* @__PURE__ */ j1(C4);
function L4(e) {
  let t, n, r;
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
    m(o, f) {
      V(o, t, f), n || (r = [
        lt(
          t,
          "mousemove",
          /*handleMousemove*/
          e[6]
        ),
        lt(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[20]
        )
      ], n = !0);
    },
    p(o, [f]) {
      f & /*inner_width*/
      16 && p(
        t,
        "width",
        /*inner_width*/
        o[4]
      ), f & /*inner_height*/
      32 && p(
        t,
        "height",
        /*inner_height*/
        o[5]
      );
    },
    i: Pe,
    o: Pe,
    d(o) {
      o && Q(t), n = !1, Ht(r);
    }
  };
}
function E4(e, t, n) {
  let r, o, { x_scale: f } = t, { y_scale: u } = t, { tooltip2_array_values: a } = t, { height: _ } = t, { width: c } = t, { m: d } = t, { margin: h } = t, { filtered_data: g } = t, { type: w } = t, { tooltip: v } = t, { listener: S } = t, { buffer: k } = t, { time_series_interval: T } = t, { chart: A } = t, { labelPositions: z } = t, { nextLabelX: U } = t, { closestLabelX: O } = t;
  const E = n0(B, 10);
  function B(D) {
    if (n(7, d.x = D.offsetX, d), n(7, d.y = D.offsetY, d), A === "XYChart")
      n(0, a = Rw(g, f, u, w, v, d.x, d.y, T)), n(0, a = a.filter((j) => j.data && j.data.y !== void 0));
    else if (A === "bar") {
      let j = f.domain(), se = Q1("bar", z, f, j, d.x);
      n(3, O = z[se]), n(2, U = z[se + 1] || f.range()[1]), n(0, a = g.filter((de) => de.x === j[se]));
    }
  }
  function G(D) {
    E(D);
  }
  const X = () => {
    n(0, a = void 0), n(1, S = !1), n(3, O = 0), n(2, U = 0);
  };
  return e.$$set = (D) => {
    "x_scale" in D && n(8, f = D.x_scale), "y_scale" in D && n(9, u = D.y_scale), "tooltip2_array_values" in D && n(0, a = D.tooltip2_array_values), "height" in D && n(10, _ = D.height), "width" in D && n(11, c = D.width), "m" in D && n(7, d = D.m), "margin" in D && n(12, h = D.margin), "filtered_data" in D && n(13, g = D.filtered_data), "type" in D && n(14, w = D.type), "tooltip" in D && n(15, v = D.tooltip), "listener" in D && n(1, S = D.listener), "buffer" in D && n(16, k = D.buffer), "time_series_interval" in D && n(17, T = D.time_series_interval), "chart" in D && n(18, A = D.chart), "labelPositions" in D && n(19, z = D.labelPositions), "nextLabelX" in D && n(2, U = D.nextLabelX), "closestLabelX" in D && n(3, O = D.closestLabelX);
  }, e.$$.update = () => {
    e.$$.dirty & /*height, margin, buffer*/
    70656 && n(5, r = _ - h - k), e.$$.dirty & /*width, margin, buffer*/
    71680 && n(4, o = c - h - k);
  }, [
    a,
    S,
    U,
    O,
    o,
    r,
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
    X
  ];
}
class i0 extends ct {
  constructor(t) {
    super(), ht(this, t, E4, L4, ft, {
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
function R4(e) {
  let t, n, r;
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
    m(o, f) {
      V(o, t, f), n || (r = [
        lt(
          t,
          "mousemove",
          /*handleMousemove*/
          e[4]
        ),
        lt(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[13]
        )
      ], n = !0);
    },
    p(o, [f]) {
      f & /*inner_width*/
      4 && p(
        t,
        "width",
        /*inner_width*/
        o[2]
      ), f & /*inner_height*/
      8 && p(
        t,
        "height",
        /*inner_height*/
        o[3]
      );
    },
    i: Pe,
    o: Pe,
    d(o) {
      o && Q(t), n = !1, Ht(r);
    }
  };
}
function I4(e, t, n) {
  let r, o, { height: f } = t, { width: u } = t, { m: a } = t, { margin: _ } = t, { listener: c } = t, { tooltip2_array_values: d } = t, { filtered_data: h } = t, { x_scale: g } = t, { y_scale: w } = t, { buffer: v } = t;
  const S = n0(k, 10);
  function k(z) {
    n(5, a.x = z.offsetX, a), n(5, a.y = z.offsetY, a), n(0, c = !0), n(1, d = h.filter((E) => E.tooltip === !0));
    let [U, O] = Aw(d, g, a.x, w, a.y);
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
    4416 && n(3, r = f - _ - v), e.$$.dirty & /*width, margin, buffer*/
    4480 && n(2, o = u - _ - v);
  }, [
    c,
    d,
    o,
    r,
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
class O4 extends ct {
  constructor(t) {
    super(), ht(this, t, I4, R4, ft, {
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
function D4(e) {
  let t, n, r, o, f, u, a, _, c, d, h;
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
      V(g, t, w), V(g, f, w), V(g, u, w), q(u, a), h = !0;
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
        h && (o && o.end(1), r = Fi(t, pn, { duration: 500, easing: Cl }), r.start());
      }), g && it(() => {
        h && (d && d.end(1), c = Fi(u, pn, { duration: 1e3, easing: Cl }), c.start());
      }), h = !0);
    },
    o(g) {
      r && r.invalidate(), g && (o = Ml(t, Zt, {
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
      })), c && c.invalidate(), g && (d = Ml(u, Zt, {
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
      g && (Q(t), Q(f), Q(u)), g && o && o.end(), g && d && d.end();
    }
  };
}
function N4(e, t, n) {
  let r, { tweenOptions: o } = t, { height: f } = t, { width: u } = t, { y1: a } = t, { ticklabel: _ } = t, { font_size_yticks: c } = t, { y_lines_spacing: d } = t, { space_between_ticks_and_gridline: h } = t, { line_generator_space: g } = t, w = Ut(a, o == null ? void 0 : o.y1);
  return pt(e, w, (v) => n(8, r = v)), e.$$set = (v) => {
    "tweenOptions" in v && n(10, o = v.tweenOptions), "height" in v && n(0, f = v.height), "width" in v && n(1, u = v.width), "y1" in v && n(2, a = v.y1), "ticklabel" in v && n(3, _ = v.ticklabel), "font_size_yticks" in v && n(4, c = v.font_size_yticks), "y_lines_spacing" in v && n(5, d = v.y_lines_spacing), "space_between_ticks_and_gridline" in v && n(6, h = v.space_between_ticks_and_gridline), "line_generator_space" in v && n(7, g = v.line_generator_space);
  }, e.$$.update = () => {
    e.$$.dirty & /*y1, tweenOptions*/
    1028 && Rl().then(() => {
      w.set(a, o == null ? void 0 : o.y1);
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
    r,
    w,
    o
  ];
}
class _a extends ct {
  constructor(t) {
    super(), ht(this, t, N4, D4, ft, {
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
function U4(e) {
  let t, n, r, o, f, u, a, _, c, d;
  return {
    c() {
      t = ze("line"), o = ve(), f = ze("text"), u = Ae(
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
      V(h, t, g), V(h, o, g), V(h, f, g), q(f, u), d = !0;
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
        d && (r && r.end(1), n = Fi(t, pn, { duration: 500, easing: Cl }), n.start());
      }), h && it(() => {
        d && (c && c.end(1), _ = Fi(f, pn, { duration: 1e3, easing: Cl }), _.start());
      }), d = !0);
    },
    o(h) {
      n && n.invalidate(), h && (r = Ml(t, Zt, {
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
      })), _ && _.invalidate(), h && (c = Ml(f, Zt, {
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
      h && (Q(t), Q(o), Q(f)), h && r && r.end(), h && c && c.end();
    }
  };
}
function P4(e, t, n) {
  let r, { tweenOptions: o } = t, { x1: f } = t, { ticklabel: u } = t, { font_size_xticks: a } = t, { width: _ } = t, { rotation_xaxis: c } = t, { dx: d } = t, { dy: h } = t, { text_anchor_x_axis: g } = t, { dominant_baseline_x_axis: w } = t, { x_lines_spacing: v } = t, { x_ticks_spacing: S } = t, { line_generator_space: k } = t, T = Ut(f, o == null ? void 0 : o.x1);
  return pt(e, T, (A) => n(12, r = A)), e.$$set = (A) => {
    "tweenOptions" in A && n(14, o = A.tweenOptions), "x1" in A && n(1, f = A.x1), "ticklabel" in A && n(2, u = A.ticklabel), "font_size_xticks" in A && n(3, a = A.font_size_xticks), "width" in A && n(4, _ = A.width), "rotation_xaxis" in A && n(5, c = A.rotation_xaxis), "dx" in A && n(6, d = A.dx), "dy" in A && n(7, h = A.dy), "text_anchor_x_axis" in A && n(8, g = A.text_anchor_x_axis), "dominant_baseline_x_axis" in A && n(9, w = A.dominant_baseline_x_axis), "x_lines_spacing" in A && n(10, v = A.x_lines_spacing), "x_ticks_spacing" in A && n(0, S = A.x_ticks_spacing), "line_generator_space" in A && n(11, k = A.line_generator_space);
  }, e.$$.update = () => {
    e.$$.dirty & /*x_ticks_spacing*/
    1 && n(0, S = isNaN(S) ? 10 : S), e.$$.dirty & /*x1, tweenOptions*/
    16386 && Rl().then(() => {
      T.set(f, o == null ? void 0 : o.x1);
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
    r,
    T,
    o
  ];
}
class r0 extends ct {
  constructor(t) {
    super(), ht(this, t, P4, U4, ft, {
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
function F4(e) {
  let t, n, r;
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
      ), y(t, "font-family", "Arial, sans-serif"), p(t, "transform", r = `rotate(-90, ${/*label_height*/
      e[1]}, ${/*$tweened_axis_title_position*/
      e[3]})`);
    },
    m(o, f) {
      V(o, t, f), q(t, n);
    },
    p(o, [f]) {
      f & /*y_label*/
      4 && Oe(
        n,
        /*y_label*/
        o[2]
      ), f & /*label_height*/
      2 && p(
        t,
        "x",
        /*label_height*/
        o[1]
      ), f & /*$tweened_axis_title_position*/
      8 && p(
        t,
        "y",
        /*$tweened_axis_title_position*/
        o[3]
      ), f & /*font_size_yaxis*/
      1 && y(
        t,
        "font-size",
        /*font_size_yaxis*/
        o[0] + "px"
      ), f & /*label_height, $tweened_axis_title_position*/
      10 && r !== (r = `rotate(-90, ${/*label_height*/
      o[1]}, ${/*$tweened_axis_title_position*/
      o[3]})`) && p(t, "transform", r);
    },
    i: Pe,
    o: Pe,
    d(o) {
      o && Q(t);
    }
  };
}
function W4(e, t, n) {
  let r, { tweenOptions: o } = t, { axis_title_position: f } = t, { font_size_yaxis: u } = t, { label_height: a } = t, { y_label: _ } = t, c = Ut(f, o == null ? void 0 : o.axis_title_position);
  return pt(e, c, (d) => n(3, r = d)), e.$$set = (d) => {
    "tweenOptions" in d && n(5, o = d.tweenOptions), "axis_title_position" in d && n(6, f = d.axis_title_position), "font_size_yaxis" in d && n(0, u = d.font_size_yaxis), "label_height" in d && n(1, a = d.label_height), "y_label" in d && n(2, _ = d.y_label);
  }, e.$$.update = () => {
    e.$$.dirty & /*axis_title_position, tweenOptions*/
    96 && c.set(f, o == null ? void 0 : o.axis_title_position);
  }, [
    u,
    a,
    _,
    r,
    c,
    o,
    f
  ];
}
class l0 extends ct {
  constructor(t) {
    super(), ht(this, t, W4, F4, ft, {
      tweenOptions: 5,
      axis_title_position: 6,
      font_size_yaxis: 0,
      label_height: 1,
      y_label: 2
    });
  }
}
function B4(e) {
  let t, n, r;
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
      ), p(t, "y", r = /*height*/
      e[1] - /*label_height_x_axis*/
      e[2]), y(t, "text-anchor", "middle"), y(
        t,
        "font-size",
        /*font_size_xaxis*/
        e[0] + "px"
      ), y(t, "font-family", "Arial, sans-serif");
    },
    m(o, f) {
      V(o, t, f), q(t, n);
    },
    p(o, [f]) {
      f & /*x_label*/
      8 && Oe(
        n,
        /*x_label*/
        o[3]
      ), f & /*$tweened_axis_title_position*/
      16 && p(
        t,
        "x",
        /*$tweened_axis_title_position*/
        o[4]
      ), f & /*height, label_height_x_axis*/
      6 && r !== (r = /*height*/
      o[1] - /*label_height_x_axis*/
      o[2]) && p(t, "y", r), f & /*font_size_xaxis*/
      1 && y(
        t,
        "font-size",
        /*font_size_xaxis*/
        o[0] + "px"
      );
    },
    i: Pe,
    o: Pe,
    d(o) {
      o && Q(t);
    }
  };
}
function H4(e, t, n) {
  let r, { tweenOptions: o } = t, { axis_title_position: f } = t, { font_size_xaxis: u } = t, { height: a } = t, { label_height_x_axis: _ } = t, { x_label: c } = t, d = Ut(f, o == null ? void 0 : o.axis_title_position);
  return pt(e, d, (h) => n(4, r = h)), e.$$set = (h) => {
    "tweenOptions" in h && n(6, o = h.tweenOptions), "axis_title_position" in h && n(7, f = h.axis_title_position), "font_size_xaxis" in h && n(0, u = h.font_size_xaxis), "height" in h && n(1, a = h.height), "label_height_x_axis" in h && n(2, _ = h.label_height_x_axis), "x_label" in h && n(3, c = h.x_label);
  }, e.$$.update = () => {
    e.$$.dirty & /*axis_title_position, tweenOptions*/
    192 && d.set(f, o == null ? void 0 : o.axis_title_position);
  }, [
    u,
    a,
    _,
    c,
    r,
    d,
    o,
    f
  ];
}
class o0 extends ct {
  constructor(t) {
    super(), ht(this, t, H4, B4, ft, {
      tweenOptions: 6,
      axis_title_position: 7,
      font_size_xaxis: 0,
      height: 1,
      label_height_x_axis: 2,
      x_label: 3
    });
  }
}
function Y4(e, { from: t, to: n }, r = {}) {
  const o = getComputedStyle(e), f = o.transform === "none" ? "" : o.transform, [u, a] = o.transformOrigin.split(" ").map(parseFloat), _ = t.left + t.width * u / n.width - (n.left + u), c = t.top + t.height * a / n.height - (n.top + a), { delay: d = 0, duration: h = (w) => Math.sqrt(w) * 120, easing: g = J1 } = r;
  return {
    delay: d,
    duration: Hr(h) ? h(Math.sqrt(_ * _ + c * c)) : h,
    easing: g,
    css: (w, v) => {
      const S = v * _, k = v * c, T = w + v * t.width / n.width, A = w + v * t.height / n.height;
      return `transform: ${f} translate(${S}px, ${k}px) scale(${T}, ${A});`;
    }
  };
}
function Gh(e, t, n) {
  const r = e.slice();
  return r[33] = t[n], r;
}
function Zh(e, t, n) {
  const r = e.slice();
  return r[36] = t[n][0], r[37] = t[n][1], r;
}
function jh(e) {
  let t, n, r, o, f, u, a, _ = [], c = /* @__PURE__ */ new Map(), d, h, g, w = ke(
    /*tooltip2_array_values*/
    e[0]
  );
  const v = (S) => (
    /*line*/
    S[33].id
  );
  for (let S = 0; S < w.length; S += 1) {
    let k = Gh(e, w, S), T = v(k);
    c.set(T, _[S] = Jh(T, k));
  }
  return {
    c() {
      t = _e("div"), n = _e("div"), r = ve(), o = _e("h6"), f = Ae(
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
      ), y(n, "position", "absolute"), y(n, "top", "0"), y(n, "right", "0"), y(n, "bottom", "0"), y(n, "left", "0"), y(n, "border-radius", "3px"), y(n, "pointer-events", "none"), y(o, "background-color", "black"), y(o, "color", "white"), y(o, "margin", "1px"), y(o, "padding", "2%"), y(o, "font-size", "12px"), y(o, "font-weight", "2px"), y(o, "text-align", "center"), y(
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
      V(S, t, k), q(t, n), q(t, r), q(t, o), q(o, f), q(t, u), q(t, a);
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
        _ = kn(_, k, v, 1, e, w, c, a, C6, Jh, null, Gh);
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
      S && Q(t);
      for (let k = 0; k < _.length; k += 1)
        _[k].d();
      d(), S && h && h.end();
    }
  };
}
function X4(e) {
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
    m(n, r) {
      V(n, t, r);
    },
    p(n, r) {
      r[0] & /*tooltip2_array_values*/
      1 && y(
        t,
        "background",
        /*line*/
        n[33].colors
      );
    },
    d(n) {
      n && Q(t);
    }
  };
}
function q4(e) {
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
    m(n, r) {
      V(n, t, r);
    },
    p(n, r) {
      r[0] & /*tooltip2_array_values*/
      1 && y(
        t,
        "background",
        /*line*/
        n[33].colors
      );
    },
    d(n) {
      n && Q(t);
    }
  };
}
function Kh(e) {
  let t, n = (
    /*key*/
    e[36] + ""
  ), r, o, f, u = (
    /*value*/
    e[37] + ""
  ), a;
  return {
    c() {
      t = _e("div"), r = Ae(n), o = Ae(":  "), f = _e("strong"), a = Ae(u), y(t, "display", "flex"), y(
        t,
        "justify-content",
        /*justify_content_tooltip*/
        e[5]
      );
    },
    m(_, c) {
      V(_, t, c), q(t, r), q(t, o), q(t, f), q(f, a);
    },
    p(_, c) {
      c[0] & /*tooltip2_array_values*/
      1 && n !== (n = /*key*/
      _[36] + "") && Oe(r, n), c[0] & /*tooltip2_array_values*/
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
      _ && Q(t);
    }
  };
}
function Jh(e, t) {
  let n, r, o, f, u, a = (
    /*line*/
    t[33].id + ""
  ), _, c, d, h, g = Pe;
  function w(A, z) {
    if (
      /*line*/
      A[33].type === "points"
    )
      return q4;
    if (
      /*line*/
      A[33].type === "line"
    )
      return X4;
  }
  let v = w(t), S = v && v(t), k = ke(Object.entries(
    /*line*/
    t[33].data.custom_tooltip[0]
  )), T = [];
  for (let A = 0; A < k.length; A += 1)
    T[A] = Kh(Zh(t, k, A));
  return {
    key: e,
    first: null,
    c() {
      n = _e("div"), r = _e("div"), o = _e("div"), S && S.c(), f = ve(), u = _e("span"), _ = Ae(a), c = ve();
      for (let A = 0; A < T.length; A += 1)
        T[A].c();
      d = ve(), y(o, "width", "18px"), y(o, "display", "flex"), y(o, "align-items", "center"), y(o, "justify-content", "center"), y(r, "display", "flex"), y(r, "align-items", "center"), this.first = n;
    },
    m(A, z) {
      V(A, n, z), q(n, r), q(r, o), S && S.m(o, null), q(r, f), q(r, u), q(u, _), q(n, c);
      for (let U = 0; U < T.length; U += 1)
        T[U] && T[U].m(n, null);
      q(n, d);
    },
    p(A, z) {
      if (t = A, v === (v = w(t)) && S ? S.p(t, z) : (S && S.d(1), S = v && v(t), S && (S.c(), S.m(o, null))), z[0] & /*tooltip2_array_values*/
      1 && a !== (a = /*line*/
      t[33].id + "") && Oe(_, a), z[0] & /*justify_content_tooltip, tooltip2_array_values*/
      33) {
        k = ke(Object.entries(
          /*line*/
          t[33].data.custom_tooltip[0]
        ));
        let U;
        for (U = 0; U < k.length; U += 1) {
          const O = Zh(t, k, U);
          T[U] ? T[U].p(O, z) : (T[U] = Kh(O), T[U].c(), T[U].m(n, d));
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
      M6(n), g();
    },
    a() {
      g(), g = x6(
        n,
        h,
        Y4,
        /*animationParamsList*/
        t[14]
      );
    },
    d(A) {
      A && Q(n), S && S.d(), xn(T, A);
    }
  };
}
function G4(e) {
  let t, n, r = (
    /*tooltip2_array_values*/
    e[0] && /*tooltip2_array_values*/
    e[0].length > 0 && jh(e)
  );
  return {
    c() {
      r && r.c(), t = Ee();
    },
    m(o, f) {
      r && r.m(o, f), V(o, t, f), n = !0;
    },
    p(o, f) {
      /*tooltip2_array_values*/
      o[0] && /*tooltip2_array_values*/
      o[0].length > 0 ? r ? (r.p(o, f), f[0] & /*tooltip2_array_values*/
      1 && le(r, 1)) : (r = jh(o), r.c(), le(r, 1), r.m(t.parentNode, t)) : r && (qe(), ae(r, 1, 1, () => {
        r = null;
      }), Ge());
    },
    i(o) {
      n || (le(r), n = !0);
    },
    o(o) {
      ae(r), n = !1;
    },
    d(o) {
      o && Q(t), r && r.d(o);
    }
  };
}
const Qh = 20, xu = 100;
function Z4(e, t, n) {
  let r, o, f, u, a, { x_scale: _ } = t, { y_scale: c } = t, { m_y: d } = t, { tooltip2_array_values: h } = t, { format_tooltip: g } = t, { height: w } = t, { width: v } = t, { interval: S } = t, { type: k } = t, { background_color_tt: T } = t, { opacity_tt: A } = t, { animation_params_list: z } = t, { padding_tooltip: U } = t, { font_size_tooltip: O } = t, { justify_content_tooltip: E } = t, { text_color_tooltip: B } = t, { border_color_tooltip: G } = t, { show_delay_tooltip: X } = t, { border_style_tooltip: D } = t, { border_width_tooltip: j } = t, { tooltip_position: se } = t, de, ie, te, J, W;
  function C() {
    te = this.clientWidth, J = this.clientHeight, n(10, te), n(11, J);
  }
  return e.$$set = (R) => {
    "x_scale" in R && n(19, _ = R.x_scale), "y_scale" in R && n(20, c = R.y_scale), "m_y" in R && n(21, d = R.m_y), "tooltip2_array_values" in R && n(0, h = R.tooltip2_array_values), "format_tooltip" in R && n(22, g = R.format_tooltip), "height" in R && n(23, w = R.height), "width" in R && n(24, v = R.width), "interval" in R && n(25, S = R.interval), "type" in R && n(26, k = R.type), "background_color_tt" in R && n(1, T = R.background_color_tt), "opacity_tt" in R && n(2, A = R.opacity_tt), "animation_params_list" in R && n(27, z = R.animation_params_list), "padding_tooltip" in R && n(3, U = R.padding_tooltip), "font_size_tooltip" in R && n(4, O = R.font_size_tooltip), "justify_content_tooltip" in R && n(5, E = R.justify_content_tooltip), "text_color_tooltip" in R && n(6, B = R.text_color_tooltip), "border_color_tooltip" in R && n(7, G = R.border_color_tooltip), "show_delay_tooltip" in R && n(17, X = R.show_delay_tooltip), "border_style_tooltip" in R && n(8, D = R.border_style_tooltip), "border_width_tooltip" in R && n(9, j = R.border_width_tooltip), "tooltip_position" in R && n(18, se = R.tooltip_position);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*background_color_tt*/
    2 && n(1, T = T || "white"), e.$$.dirty[0] & /*opacity_tt*/
    4 && n(2, A = A || "0.8"), e.$$.dirty[0] & /*padding_tooltip*/
    8 && n(3, U = U || 5), e.$$.dirty[0] & /*justify_content_tooltip*/
    32 && n(5, E = E || "space-between"), e.$$.dirty[0] & /*font_size_tooltip*/
    16 && n(4, O = O || 14), e.$$.dirty[0] & /*text_color_tooltip*/
    64 && n(6, B = B || "black"), e.$$.dirty[0] & /*border_color_tooltip, background_color_tt*/
    130 && n(7, G = G || T), e.$$.dirty[0] & /*show_delay_tooltip*/
    131072 && n(17, X = X || 0), e.$$.dirty[0] & /*border_style_tooltip*/
    256 && n(8, D = D || "solid"), e.$$.dirty[0] & /*border_width_tooltip*/
    512 && n(9, j = j || 0), e.$$.dirty[0] & /*tooltip_position*/
    262144 && n(18, se = se || null), e.$$.dirty[0] & /*tooltip2_array_values, type, maxYValue*/
    1140850689 && (n(30, W = Math.max(...h.map((R) => R.data.y))), n(0, h = h.map((R) => ({
      ...R,
      shape: k === "scatter" ? "point" : "line"
    })).sort((R, ce) => ce.data.y - R.data.y || ce.data.y - W))), e.$$.dirty[0] & /*tooltip_position, height, x_scale, tooltip2_array_values, m_y*/
    11272193 && (se ? se === "top" && (n(28, de = 0), n(29, ie = w)) : (n(28, de = _(h[0].data.x)), n(29, ie = d))), e.$$.dirty[0] & /*x, tooltipWidth, width*/
    285213696 && n(16, r = de + te > v ? de - te - Qh : de + Qh), e.$$.dirty[0] & /*y, tooltipHeight, height*/
    545261568 && n(15, o = ie - J < 0 ? ie - xu : ie + J > w ? ie - J - xu : ie + xu), e.$$.dirty[0] & /*format_tooltip*/
    4194304 && hn(g), e.$$.dirty[0] & /*animation_params_list*/
    134217728 && n(14, f = z), e.$$.dirty[0] & /*show_delay_tooltip*/
    131072 && n(13, u = { delay: X }), e.$$.dirty[0] & /*interval, type, tooltip2_array_values*/
    100663297 && n(12, a = V1(S, k, h));
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
    o,
    r,
    X,
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
    ie,
    W,
    C
  ];
}
class j4 extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      Z4,
      G4,
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
function K4(e) {
  let t, n, r, o, f, u, a, _, c, d, h, g, w, v, S, k, T, A, z, U, O, E, B, G, X, D, j, se, de, ie, te, J, W, C, R;
  return {
    c() {
      t = ze("rect"), _ = ve(), c = ze("text"), d = Ae(
        /*tooltip_name_x*/
        e[12]
      ), w = ve(), v = ze("rect"), A = ve(), z = ze("text"), U = Ae(
        /*tooltip_name_y*/
        e[14]
      ), B = ve(), G = ze("line"), de = ve(), ie = ze("line"), p(t, "x", n = /*adjusted_x1*/
      e[15] - /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.3 - 5), p(t, "y", r = /*x_ticks_spacing*/
      e[6] - /*font_size_xticks*/
      e[0] - 5), p(t, "width", o = /*tooltip_name_x*/
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
      ), y(z, "font-family", "Arial, sans-serif"), y(z, "fill", "white"), p(z, "dy", "0.35em"), p(G, "x1", X = /*vline*/
      e[8].x1), p(G, "y1", D = /*vline*/
      e[8].y1), p(G, "x2", j = /*vline*/
      e[8].x2), p(G, "y2", se = /*vline*/
      e[8].y2), p(G, "stroke", "black"), p(G, "stroke-width", "1"), p(G, "stroke-dasharray", "5,5"), p(ie, "x1", te = /*hline*/
      e[7].x1), p(ie, "y1", J = /*hline*/
      e[7].y1), p(ie, "x2", W = /*hline*/
      e[7].x2), p(ie, "y2", C = /*hline*/
      e[7].y2), p(ie, "stroke", "black"), p(ie, "stroke-width", "1"), p(ie, "stroke-dasharray", "5,5");
    },
    m(ce, he) {
      V(ce, t, he), V(ce, _, he), V(ce, c, he), q(c, d), V(ce, w, he), V(ce, v, he), V(ce, A, he), V(ce, z, he), q(z, U), V(ce, B, he), V(ce, G, he), V(ce, de, he), V(ce, ie, he), R = !0;
    },
    p(ce, [he]) {
      e = ce, (!R || he & /*adjusted_x1, tooltip_name_x, font_size_xticks*/
      36865 && n !== (n = /*adjusted_x1*/
      e[15] - /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.3 - 5)) && p(t, "x", n), (!R || he & /*x_ticks_spacing, font_size_xticks*/
      65 && r !== (r = /*x_ticks_spacing*/
      e[6] - /*font_size_xticks*/
      e[0] - 5)) && p(t, "y", r), (!R || he & /*tooltip_name_x, font_size_xticks*/
      4097 && o !== (o = /*tooltip_name_x*/
      e[12].length * /*font_size_xticks*/
      e[0] * 0.6 + 10)) && p(t, "width", o), (!R || he & /*font_size_xticks*/
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
      256 && X !== (X = /*vline*/
      e[8].x1)) && p(G, "x1", X), (!R || he & /*vline*/
      256 && D !== (D = /*vline*/
      e[8].y1)) && p(G, "y1", D), (!R || he & /*vline*/
      256 && j !== (j = /*vline*/
      e[8].x2)) && p(G, "x2", j), (!R || he & /*vline*/
      256 && se !== (se = /*vline*/
      e[8].y2)) && p(G, "y2", se), (!R || he & /*hline*/
      128 && te !== (te = /*hline*/
      e[7].x1)) && p(ie, "x1", te), (!R || he & /*hline*/
      128 && J !== (J = /*hline*/
      e[7].y1)) && p(ie, "y1", J), (!R || he & /*hline*/
      128 && W !== (W = /*hline*/
      e[7].x2)) && p(ie, "x2", W), (!R || he & /*hline*/
      128 && C !== (C = /*hline*/
      e[7].y2)) && p(ie, "y2", C);
    },
    i(ce) {
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
        R && (T || (T = Pt(
          v,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), T.run(1));
      }), it(() => {
        R && (E || (E = Pt(
          z,
          pn,
          /*animationParamsTooltip*/
          e[18],
          !0
        )), E.run(1));
      }), R = !0);
    },
    o(ce) {
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
      )), g.run(0), T || (T = Pt(
        v,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), T.run(0), E || (E = Pt(
        z,
        pn,
        /*animationParamsTooltip*/
        e[18],
        !1
      )), E.run(0), R = !1;
    },
    d(ce) {
      ce && (Q(t), Q(_), Q(c), Q(w), Q(v), Q(A), Q(z), Q(B), Q(G), Q(de), Q(ie)), ce && a && a.end(), ce && g && g.end(), ce && T && T.end(), ce && E && E.end();
    }
  };
}
function J4(e, t, n) {
  let r, o, f, u, a, _, c, d, h, { x_scale: g } = t, { y_scale: w } = t, { font_size_xticks: v } = t, { rotation_xaxis: S } = t, { dx: k } = t, { dy: T } = t, { text_anchor_x_axis: A } = t, { dominant_baseline_x_axis: z } = t, { x_ticks_spacing: U } = t, { tooltip2_array_values: O } = t, { interval: E } = t, { type: B } = t, { show_delay_tooltip: G } = t, { hline: X } = t, { vline: D } = t, { y_lines_spacing: j } = t, { space_between_ticks_and_gridline: se } = t, { format_yaxis: de } = t, { font_size_yticks: ie } = t;
  return e.$$set = (te) => {
    "x_scale" in te && n(20, g = te.x_scale), "y_scale" in te && n(21, w = te.y_scale), "font_size_xticks" in te && n(0, v = te.font_size_xticks), "rotation_xaxis" in te && n(1, S = te.rotation_xaxis), "dx" in te && n(2, k = te.dx), "dy" in te && n(3, T = te.dy), "text_anchor_x_axis" in te && n(4, A = te.text_anchor_x_axis), "dominant_baseline_x_axis" in te && n(5, z = te.dominant_baseline_x_axis), "x_ticks_spacing" in te && n(6, U = te.x_ticks_spacing), "tooltip2_array_values" in te && n(22, O = te.tooltip2_array_values), "interval" in te && n(23, E = te.interval), "type" in te && n(24, B = te.type), "show_delay_tooltip" in te && n(25, G = te.show_delay_tooltip), "hline" in te && n(7, X = te.hline), "vline" in te && n(8, D = te.vline), "y_lines_spacing" in te && n(9, j = te.y_lines_spacing), "space_between_ticks_and_gridline" in te && n(10, se = te.space_between_ticks_and_gridline), "format_yaxis" in te && n(26, de = te.format_yaxis), "font_size_yticks" in te && n(11, ie = te.font_size_yticks);
  }, e.$$.update = () => {
    e.$$.dirty & /*tooltip2_array_values, interval, type*/
    29360128 && n(12, r = O ? V1(E, B, O) : null), e.$$.dirty & /*x_scale, tooltip2_array_values*/
    5242880 && n(13, o = g(O[0].data.x)), e.$$.dirty & /*y_scale, tooltip2_array_values*/
    6291456 && n(19, f = w(O[0].data.y)), e.$$.dirty & /*show_delay_tooltip*/
    33554432 && n(18, u = { delay: G }), e.$$.dirty & /*format_yaxis*/
    67108864 && n(27, a = hn(de)), e.$$.dirty & /*format_number, tooltip2_array_values*/
    138412032 && n(14, _ = a(O[0].data.y)), e.$$.dirty & /*tooltip_name_y, font_size_yticks*/
    18432 && n(17, c = _.length * ie * 0.6), e.$$.dirty & /*font_size_yticks*/
    2048 && n(16, d = ie + 20), e.$$.dirty & /*x1*/
    8192 && n(15, h = o), e.$$.dirty & /*text_anchor_x_axis, x1, tooltip_name_x, font_size_xticks*/
    12305 && (A === "end" ? n(15, h = o - r.length * v * 0.6 / 2 - 5 / 2) : A === "start" && n(15, h = o + r.length * v * 0.6 / 2 + 5 / 2));
  }, [
    v,
    S,
    k,
    T,
    A,
    z,
    U,
    X,
    D,
    j,
    se,
    ie,
    r,
    o,
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
class Q4 extends ct {
  constructor(t) {
    super(), ht(this, t, J4, K4, ft, {
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
function Vh(e, t, n) {
  const r = e.slice();
  return r[115] = t[n], r;
}
function $h(e, t, n) {
  const r = e.slice();
  return r[66] = t[n], r;
}
function ec(e, t, n) {
  const r = e.slice();
  return r[120] = t[n], r;
}
function tc(e, t, n) {
  const r = e.slice();
  return r[115] = t[n], r;
}
function nc(e, t, n) {
  const r = e.slice();
  return r[125] = t[n].x_start, r[126] = t[n].x_end, r[127] = t[n].y_start, r[128] = t[n].y_end, r[129] = t[n].colors, r[130] = t[n].opacity, r[131] = t[n].outline_color, r[132] = t[n].outline_width, r[133] = t[n].linetype, r[134] = t[n].key, r[51] = t[n].type, r;
}
function ic(e, t, n) {
  const r = e.slice();
  return r[137] = t[n], r;
}
function rc(e, t, n) {
  const r = e.slice();
  return r[137] = t[n], r;
}
function lc(e, t, n) {
  const r = e.slice();
  return r[50] = t[n].id, r[142] = t[n].color, r[51] = t[n].type, r;
}
function oc(e) {
  let t, n, r;
  return {
    c() {
      t = _e("div"), n = Ae(
        /*header*/
        e[4]
      ), p(t, "class", "header"), p(t, "style", r = "text-align: " + /*title_align*/
      e[5] + "; color: " + /*title_color*/
      e[6] + "; font-size: " + /*title_font_size*/
      e[7] + "px; font-weight: " + /*title_font_weight*/
      e[8] + "; padding-bottom: 10px; margin-left: " + /*label_height*/
      (e[52] + Pi) + "px; " + /*custom_css_header*/
      e[9]);
    },
    m(o, f) {
      V(o, t, f), q(t, n);
    },
    p(o, f) {
      f[0] & /*header*/
      16 && Oe(
        n,
        /*header*/
        o[4]
      ), f[0] & /*title_align, title_color, title_font_size, title_font_weight, custom_css_header*/
      992 | f[1] & /*label_height*/
      2097152 && r !== (r = "text-align: " + /*title_align*/
      o[5] + "; color: " + /*title_color*/
      o[6] + "; font-size: " + /*title_font_size*/
      o[7] + "px; font-weight: " + /*title_font_weight*/
      o[8] + "; padding-bottom: 10px; margin-left: " + /*label_height*/
      (o[52] + Pi) + "px; " + /*custom_css_header*/
      o[9]) && p(t, "style", r);
    },
    d(o) {
      o && Q(t);
    }
  };
}
function fc(e) {
  let t, n = ke(
    /*legend_cats*/
    e[75]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = uc(lc(e, n, o));
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = Ee();
    },
    m(o, f) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, f);
      V(o, t, f);
    },
    p(o, f) {
      if (f[1] & /*current_categories*/
      268435456 | f[2] & /*hover_legend, legend_cats, categories*/
      8272) {
        n = ke(
          /*legend_cats*/
          o[75]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = lc(o, n, u);
          r[u] ? r[u].p(a, f) : (r[u] = uc(a), r[u].c(), r[u].m(t.parentNode, t));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = n.length;
      }
    },
    d(o) {
      o && Q(t), xn(r, o);
    }
  };
}
function V4(e) {
  let t, n, r, o;
  return {
    c() {
      t = ze("svg"), n = ze("path"), p(n, "d", "M2 10 Q12 0 22 10"), p(n, "fill", r = /*color*/
      e[142]), p(n, "stroke", o = /*color*/
      e[142]), p(n, "stroke-width", "1"), p(t, "width", "24"), p(t, "height", "12"), p(t, "viewBox", "0 0 24 12"), y(t, "display", "inline-block"), y(t, "vertical-align", "middle");
    },
    m(f, u) {
      V(f, t, u), q(t, n);
    },
    p(f, u) {
      u[2] & /*legend_cats*/
      8192 && r !== (r = /*color*/
      f[142]) && p(n, "fill", r), u[2] & /*legend_cats*/
      8192 && o !== (o = /*color*/
      f[142]) && p(n, "stroke", o);
    },
    d(f) {
      f && Q(t);
    }
  };
}
function $4(e) {
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
    m(n, r) {
      V(n, t, r);
    },
    p(n, r) {
      r[2] & /*legend_cats*/
      8192 && y(
        t,
        "background",
        /*color*/
        n[142]
      );
    },
    d(n) {
      n && Q(t);
    }
  };
}
function ev(e) {
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
    m(n, r) {
      V(n, t, r);
    },
    p(n, r) {
      r[2] & /*legend_cats*/
      8192 && y(
        t,
        "background",
        /*color*/
        n[142]
      );
    },
    d(n) {
      n && Q(t);
    }
  };
}
function uc(e) {
  let t, n, r = (
    /*id*/
    e[50].replace(/\.\d+$/, "") + ""
  ), o, f, u, a, _;
  function c(v, S) {
    if (
      /*type*/
      v[51] === "points"
    )
      return ev;
    if (
      /*type*/
      v[51] === "line"
    )
      return $4;
    if (
      /*type*/
      v[51] === "density"
    )
      return V4;
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
      t = _e("p"), h && h.c(), n = ve(), o = Ae(r), f = ve(), p(t, "style", u = /*hover_legend*/
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
      V(v, t, S), h && h.m(t, null), q(t, n), q(t, o), q(t, f), a || (_ = [
        lt(t, "mouseover", g),
        lt(t, "click", w)
      ], a = !0);
    },
    p(v, S) {
      e = v, d === (d = c(e)) && h ? h.p(e, S) : (h && h.d(1), h = d && d(e), h && (h.c(), h.m(t, n))), S[2] & /*legend_cats*/
      8192 && r !== (r = /*id*/
      e[50].replace(/\.\d+$/, "") + "") && Oe(o, r), S[1] & /*current_categories*/
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
      v && Q(t), h && h.d(), a = !1, Ht(_);
    }
  };
}
function ac(e) {
  let t, n, r;
  return n = new up({
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
      t = _e("div"), Qe(n.$$.fragment), y(t, "padding-bottom", "15px");
    },
    m(o, f) {
      V(o, t, f), Ke(n, t, null), r = !0;
    },
    p(o, f) {
      const u = {};
      f[2] & /*filtered_segments_df*/
      16384 && (u.filtered_segments_df = /*filtered_segments_df*/
      o[76]), f[1] & /*label_height*/
      2097152 && (u.label_height = /*label_height*/
      o[52]), n.$set(u);
    },
    i(o) {
      r || (le(n.$$.fragment, o), r = !0);
    },
    o(o) {
      ae(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && Q(t), Je(n);
    }
  };
}
function sc(e, t) {
  let n, r, o;
  return r = new r0({
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
      line_generator_space: Wr,
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
          easing: _t,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Ee(), Qe(r.$$.fragment), this.first = n;
    },
    m(f, u) {
      V(f, n, u), Ke(r, f, u), o = !0;
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
      t[17]), r.$set(a);
    },
    i(f) {
      o || (le(r.$$.fragment, f), o = !0);
    },
    o(f) {
      ae(r.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Q(n), Je(r, f);
    }
  };
}
function _c(e, t) {
  let n, r, o;
  return r = new _a({
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
      space_between_ticks_and_gridline: Vo,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[64]
      ),
      height: (
        /*height*/
        t[10]
      ),
      line_generator_space: Wr,
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
          easing: _t,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Ee(), Qe(r.$$.fragment), this.first = n;
    },
    m(f, u) {
      V(f, n, u), Ke(r, f, u), o = !0;
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
      t[23]), r.$set(a);
    },
    i(f) {
      o || (le(r.$$.fragment, f), o = !0);
    },
    o(f) {
      ae(r.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Q(n), Je(r, f);
    }
  };
}
function hc(e) {
  let t, n;
  return t = new Q4({
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
      space_between_ticks_and_gridline: Vo,
      font_size_yticks: (
        /*font_size_yticks*/
        e[23]
      )
    }
  }), {
    c() {
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[1] & /*x_scale*/
      67108864 && (f.x_scale = /*x_scale*/
      r[57]), o[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      r[58]), o[0] & /*font_size_xticks*/
      32768 && (f.font_size_xticks = /*font_size_xticks*/
      r[15]), o[0] & /*rotation_xaxis*/
      8192 && (f.rotation_xaxis = /*rotation_xaxis*/
      r[13]), o[0] & /*dx*/
      2048 && (f.dx = /*dx*/
      r[11]), o[0] & /*dy*/
      4096 && (f.dy = /*dy*/
      r[12]), o[0] & /*text_anchor_x_axis*/
      131072 && (f.text_anchor_x_axis = /*text_anchor_x_axis*/
      r[17]), o[0] & /*dominant_baseline_x_axis*/
      65536 && (f.dominant_baseline_x_axis = /*dominant_baseline_x_axis*/
      r[16]), o[2] & /*x_ticks_spacing*/
      2048 && (f.x_ticks_spacing = /*x_ticks_spacing*/
      r[73]), o[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      r[54]), o[1] & /*interval*/
      8 && (f.interval = /*interval*/
      r[34]), o[1] & /*type*/
      1048576 && (f.type = /*type*/
      r[51]), o[1] & /*show_delay_tooltip*/
      16384 && (f.show_delay_tooltip = /*show_delay_tooltip*/
      r[45]), o[2] & /*hline*/
      1024 && (f.hline = /*hline*/
      r[72]), o[2] & /*vline*/
      512 && (f.vline = /*vline*/
      r[71]), o[0] & /*format_yaxis*/
      2097152 && (f.format_yaxis = /*format_yaxis*/
      r[21]), o[2] & /*y_lines_spacing*/
      4 && (f.y_lines_spacing = /*y_lines_spacing*/
      r[64]), o[0] & /*font_size_yticks*/
      8388608 && (f.font_size_yticks = /*font_size_yticks*/
      r[23]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function cc(e) {
  let t = [], n = /* @__PURE__ */ new Map(), r, o, f = ke(
    /*filtered_segments_df*/
    e[76]
  );
  const u = (a) => (
    /*key*/
    a[134]
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = nc(e, f, a), c = u(_);
    n.set(c, t[a] = gc(c, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      r = Ee();
    },
    m(a, _) {
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(a, _);
      V(a, r, _), o = !0;
    },
    p(a, _) {
      _[0] & /*width*/
      1 | _[2] & /*filtered_segments_df, x_lines_spacing, y_lines_spacing*/
      16390 && (f = ke(
        /*filtered_segments_df*/
        a[76]
      ), qe(), t = kn(t, _, u, 1, a, f, n, r.parentNode, Kn, gc, r, nc), Ge());
    },
    i(a) {
      if (!o) {
        for (let _ = 0; _ < f.length; _ += 1)
          le(t[_]);
        o = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ae(t[_]);
      o = !1;
    },
    d(a) {
      a && Q(r);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function gc(e, t) {
  let n, r, o;
  return r = new wp({
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
      line_generator_space: Wr,
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
          easing: _t,
          duration: 1e3
        },
        y1: {
          easing: _t,
          duration: 1e3
        },
        x2: {
          easing: _t,
          duration: 1e3
        },
        y2: {
          easing: _t,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Ee(), Qe(r.$$.fragment), this.first = n;
    },
    m(f, u) {
      V(f, n, u), Ke(r, f, u), o = !0;
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
      t[64]), r.$set(a);
    },
    i(f) {
      o || (le(r.$$.fragment, f), o = !0);
    },
    o(f) {
      ae(r.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Q(n), Je(r, f);
    }
  };
}
function dc(e) {
  let t, n, r, o, f, u, a, _, c, d;
  return {
    c() {
      t = ze("circle"), u = ze("circle"), p(t, "cx", n = /*x_scale*/
      e[57](
        /*tooltip2_array_values*/
        e[54].data.x
      )), p(t, "cy", r = /*y_scale*/
      e[58](
        /*tooltip2_array_values*/
        e[54].data.y
      )), p(t, "r", o = /*tooltip2_array_values*/
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
      V(h, t, g), V(h, u, g);
    },
    p(h, g) {
      g[1] & /*x_scale, tooltip2_array_values*/
      75497472 && n !== (n = /*x_scale*/
      h[57](
        /*tooltip2_array_values*/
        h[54].data.x
      )) && p(t, "cx", n), g[1] & /*y_scale, tooltip2_array_values*/
      142606336 && r !== (r = /*y_scale*/
      h[58](
        /*tooltip2_array_values*/
        h[54].data.y
      )) && p(t, "cy", r), g[1] & /*tooltip2_array_values*/
      8388608 && o !== (o = /*tooltip2_array_values*/
      h[54].size * 2) && p(t, "r", o), g[1] & /*tooltip2_array_values*/
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
      h && (Q(t), Q(u));
    }
  };
}
function mc(e) {
  let t, n, r, o, f, u, a = ke(
    /*tooltip2_array_values*/
    e[54]
  ), _ = [];
  for (let c = 0; c < a.length; c += 1)
    _[c] = yc(tc(e, a, c));
  return {
    c() {
      for (let c = 0; c < _.length; c += 1)
        _[c].c();
      t = ze("g"), n = ze("line"), p(n, "y1", r = /*vline*/
      e[71].y1), p(n, "y2", o = /*vline*/
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
      V(c, t, d), q(t, n);
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
          const g = tc(c, a, h);
          _[h] ? _[h].p(g, d) : (_[h] = yc(g), _[h].c(), _[h].m(t.parentNode, t));
        }
        for (; h < _.length; h += 1)
          _[h].d(1);
        _.length = a.length;
      }
      d[2] & /*vline*/
      512 && r !== (r = /*vline*/
      c[71].y1) && p(n, "y1", r), d[2] & /*vline*/
      512 && o !== (o = /*vline*/
      c[71].y2) && p(n, "y2", o), d[2] & /*vline*/
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
      c && Q(t), xn(_, c);
    }
  };
}
function yc(e) {
  let t, n, r, o, f, u, a, _, c, d;
  return {
    c() {
      t = ze("circle"), u = ze("circle"), p(t, "cx", n = /*x_scale*/
      e[57](
        /*line*/
        e[115].data.x
      )), p(t, "cy", r = /*y_scale*/
      e[58](
        /*line*/
        e[115].data.y
      )), p(t, "r", o = /*line*/
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
      V(h, t, g), V(h, u, g);
    },
    p(h, g) {
      g[1] & /*x_scale, tooltip2_array_values*/
      75497472 && n !== (n = /*x_scale*/
      h[57](
        /*line*/
        h[115].data.x
      )) && p(t, "cx", n), g[1] & /*y_scale, tooltip2_array_values*/
      142606336 && r !== (r = /*y_scale*/
      h[58](
        /*line*/
        h[115].data.y
      )) && p(t, "cy", r), g[1] & /*tooltip2_array_values*/
      8388608 && o !== (o = /*line*/
      h[115].size * 1.5) && p(t, "r", o), g[1] & /*tooltip2_array_values*/
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
      h && (Q(t), Q(u));
    }
  };
}
function bc(e) {
  let t = [], n = /* @__PURE__ */ new Map(), r, o, f = ke(
    /*all_points*/
    e[60]
  );
  const u = (a) => (
    /*categories*/
    a[66].id_id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = $h(e, f, a), c = u(_);
    n.set(c, t[a] = pc(c, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      r = Ee();
    },
    m(a, _) {
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(a, _);
      V(a, r, _), o = !0;
    },
    p(a, _) {
      _[1] & /*all_points, x_scale, y_scale, current_categories, tooltip2_array_values*/
      1015021568 | _[2] & /*hover_legend, listener*/
      320 && (f = ke(
        /*all_points*/
        a[60]
      ), qe(), t = kn(t, _, u, 1, a, f, n, r.parentNode, Kn, pc, r, $h), Ge());
    },
    i(a) {
      if (!o) {
        for (let _ = 0; _ < f.length; _ += 1)
          le(t[_]);
        o = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ae(t[_]);
      o = !1;
    },
    d(a) {
      a && Q(r);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function wc(e) {
  let t, n;
  return t = new lp({
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
          easing: _t,
          duration: 1e3
        },
        y: {
          easing: _t,
          duration: 1e3
        }
      },
      hovered_data: w1,
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[1] & /*x_scale, all_points*/
      603979776 && (f.x = /*x_scale*/
      r[57](
        /*points*/
        r[120].x
      )), o[1] & /*y_scale, all_points*/
      671088640 && (f.y = /*y_scale*/
      r[58](
        /*points*/
        r[120].y
      )), o[1] & /*all_points*/
      536870912 && (f.categories = /*categories*/
      r[66]), o[1] & /*all_points*/
      536870912 && (f.points = /*points*/
      r[120]), o[2] & /*hover_legend*/
      64 && (f.hover_legend = /*hover_legend*/
      r[68]), o[1] & /*current_categories*/
      268435456 && (f.current_categories = /*current_categories*/
      r[59]), o[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      r[54]), o[2] & /*listener*/
      256 && (f.listener = /*listener*/
      r[70]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function pc(e, t) {
  let n, r, o, f = ke(
    /*categories*/
    t[66].data
  ), u = [];
  for (let _ = 0; _ < f.length; _ += 1)
    u[_] = wc(ec(t, f, _));
  const a = (_) => ae(u[_], 1, 1, () => {
    u[_] = null;
  });
  return {
    key: e,
    first: null,
    c() {
      n = Ee();
      for (let _ = 0; _ < u.length; _ += 1)
        u[_].c();
      r = Ee(), this.first = n;
    },
    m(_, c) {
      V(_, n, c);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(_, c);
      V(_, r, c), o = !0;
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
          const h = ec(t, f, d);
          u[d] ? (u[d].p(h, c), le(u[d], 1)) : (u[d] = wc(h), u[d].c(), le(u[d], 1), u[d].m(r.parentNode, r));
        }
        for (qe(), d = f.length; d < u.length; d += 1)
          a(d);
        Ge();
      }
    },
    i(_) {
      if (!o) {
        for (let c = 0; c < f.length; c += 1)
          le(u[c]);
        o = !0;
      }
    },
    o(_) {
      u = u.filter(Boolean);
      for (let c = 0; c < u.length; c += 1)
        ae(u[c]);
      o = !1;
    },
    d(_) {
      _ && (Q(n), Q(r)), xn(u, _);
    }
  };
}
function vc(e) {
  let t = [], n = /* @__PURE__ */ new Map(), r, o, f = ke(
    /*all_lines*/
    e[56]
  );
  const u = (a) => (
    /*line*/
    a[115].id_id
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = Vh(e, f, a), c = u(_);
    n.set(c, t[a] = kc(c, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      r = Ee();
    },
    m(a, _) {
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(a, _);
      V(a, r, _), o = !0;
    },
    p(a, _) {
      _[1] & /*all_lines, current_categories, tooltip2_array_values*/
      310378496 | _[2] & /*hover_legend, listener*/
      320 && (f = ke(
        /*all_lines*/
        a[56]
      ), qe(), t = kn(t, _, u, 1, a, f, n, r.parentNode, Kn, kc, r, Vh), Ge());
    },
    i(a) {
      if (!o) {
        for (let _ = 0; _ < f.length; _ += 1)
          le(t[_]);
        o = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ae(t[_]);
      o = !1;
    },
    d(a) {
      a && Q(r);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function kc(e, t) {
  let n, r, o;
  return r = new Ww({
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
          interpolate: xw,
          duration: 1e3,
          easing: _t
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
      n = Ee(), Qe(r.$$.fragment), this.first = n;
    },
    m(f, u) {
      V(f, n, u), Ke(r, f, u), o = !0;
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
      t[70]), r.$set(a);
    },
    i(f) {
      o || (le(r.$$.fragment, f), o = !0);
    },
    o(f) {
      ae(r.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Q(n), Je(r, f);
    }
  };
}
function xc(e) {
  let t, n;
  return t = new Tp({
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[0] & /*arrows_df*/
      1073741824 && (f.arrows_df = /*arrows_df*/
      r[30]), o[1] & /*x_scale*/
      67108864 && (f.x_scale = /*x_scale*/
      r[57]), o[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      r[58]), o[1] & /*type*/
      1048576 && (f.type = /*type*/
      r[51]), o[1] & /*time_interval*/
      16 && (f.time_interval = /*time_interval*/
      r[35]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function Mc(e) {
  let t, n;
  return t = new kp({
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[1] & /*annotations_df*/
      1 && (f.annotations_df = /*annotations_df*/
      r[31]), o[1] & /*x_scale*/
      67108864 && (f.x_scale = /*x_scale*/
      r[57]), o[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      r[58]), o[1] & /*type*/
      1048576 && (f.type = /*type*/
      r[51]), o[1] & /*time_interval*/
      16 && (f.time_interval = /*time_interval*/
      r[35]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function Tc(e) {
  let t, n, r, o, f, u, a;
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
    buffer: Fr,
    time_series_interval: (
      /*time_series_interval*/
      e[36]
    ),
    chart: rv
  };
  return (
    /*tooltip2_array_values*/
    e[54] !== void 0 && (h.tooltip2_array_values = /*tooltip2_array_values*/
    e[54]), /*m*/
    e[69] !== void 0 && (h.m = /*m*/
    e[69]), /*listener*/
    e[70] !== void 0 && (h.listener = /*listener*/
    e[70]), n = new i0({ props: h }), st.push(() => Ot(n, "tooltip2_array_values", _)), st.push(() => Ot(n, "m", c)), st.push(() => Ot(n, "listener", d)), {
      c() {
        t = ze("g"), Qe(n.$$.fragment), p(t, "transform", u = "translate(" + /*ticks_label_width*/
        (e[67] + /*label_height*/
        e[52] + 10) + " 10)");
      },
      m(g, w) {
        V(g, t, w), Ke(n, t, null), a = !0;
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
        g[36]), !r && w[1] & /*tooltip2_array_values*/
        8388608 && (r = !0, v.tooltip2_array_values = /*tooltip2_array_values*/
        g[54], It(() => r = !1)), !o && w[2] & /*m*/
        128 && (o = !0, v.m = /*m*/
        g[69], It(() => o = !1)), !f && w[2] & /*listener*/
        256 && (f = !0, v.listener = /*listener*/
        g[70], It(() => f = !1)), n.$set(v), (!a || w[1] & /*label_height*/
        2097152 | w[2] & /*ticks_label_width*/
        32 && u !== (u = "translate(" + /*ticks_label_width*/
        (g[67] + /*label_height*/
        g[52] + 10) + " 10)")) && p(t, "transform", u);
      },
      i(g) {
        a || (le(n.$$.fragment, g), a = !0);
      },
      o(g) {
        ae(n.$$.fragment, g), a = !1;
      },
      d(g) {
        g && Q(t), Je(n);
      }
    }
  );
}
function Sc(e) {
  let t, n, r, o, f, u, a;
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
    buffer: Fr
  };
  return (
    /*listener*/
    e[70] !== void 0 && (h.listener = /*listener*/
    e[70]), /*m*/
    e[69] !== void 0 && (h.m = /*m*/
    e[69]), /*tooltip2_array_values*/
    e[54] !== void 0 && (h.tooltip2_array_values = /*tooltip2_array_values*/
    e[54]), n = new O4({ props: h }), st.push(() => Ot(n, "listener", _)), st.push(() => Ot(n, "m", c)), st.push(() => Ot(n, "tooltip2_array_values", d)), {
      c() {
        t = ze("g"), Qe(n.$$.fragment), p(t, "transform", u = "translate(" + /*ticks_label_width*/
        (e[67] + /*label_height*/
        e[52] + 10) + " 10)");
      },
      m(g, w) {
        V(g, t, w), Ke(n, t, null), a = !0;
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
        g[55]), !r && w[2] & /*listener*/
        256 && (r = !0, v.listener = /*listener*/
        g[70], It(() => r = !1)), !o && w[2] & /*m*/
        128 && (o = !0, v.m = /*m*/
        g[69], It(() => o = !1)), !f && w[1] & /*tooltip2_array_values*/
        8388608 && (f = !0, v.tooltip2_array_values = /*tooltip2_array_values*/
        g[54], It(() => f = !1)), n.$set(v), (!a || w[1] & /*label_height*/
        2097152 | w[2] & /*ticks_label_width*/
        32 && u !== (u = "translate(" + /*ticks_label_width*/
        (g[67] + /*label_height*/
        g[52] + 10) + " 10)")) && p(t, "transform", u);
      },
      i(g) {
        a || (le(n.$$.fragment, g), a = !0);
      },
      o(g) {
        ae(n.$$.fragment, g), a = !1;
      },
      d(g) {
        g && Q(t), Je(n);
      }
    }
  );
}
function zc(e) {
  let t, n;
  return t = new jw({
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[1] & /*x_scale*/
      67108864 && (f.x_scale = /*x_scale*/
      r[57]), o[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      r[58]), o[0] & /*format_tooltip*/
      16777216 && (f.format_tooltip = /*format_tooltip*/
      r[24]), o[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      r[54]), o[0] & /*height*/
      1024 && (f.height = /*height*/
      r[10]), o[0] & /*width*/
      1 && (f.width = /*width*/
      r[0]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function tv(e) {
  let t, n;
  return t = new j4({
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[1] & /*x_scale*/
      67108864 && (f.x_scale = /*x_scale*/
      r[57]), o[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      r[58]), o[2] & /*m*/
      128 && (f.m_y = /*m*/
      r[69].y), o[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      r[54]), o[0] & /*format_tooltip*/
      16777216 && (f.format_tooltip = /*format_tooltip*/
      r[24]), o[0] & /*height*/
      1024 && (f.height = /*height*/
      r[10]), o[0] & /*width*/
      1 && (f.width = /*width*/
      r[0]), o[1] & /*interval*/
      8 && (f.interval = /*interval*/
      r[34]), o[1] & /*type*/
      1048576 && (f.type = /*type*/
      r[51]), o[1] & /*background_color_tt*/
      64 && (f.background_color_tt = /*background_color_tt*/
      r[37]), o[1] & /*opacity_tt*/
      128 && (f.opacity_tt = /*opacity_tt*/
      r[38]), o[1] & /*animation_params_list*/
      256 && (f.animation_params_list = /*animation_params_list*/
      r[39]), o[1] & /*justify_content_tooltip*/
      512 && (f.justify_content_tooltip = /*justify_content_tooltip*/
      r[40]), o[1] & /*font_size_tooltip*/
      1024 && (f.font_size_tooltip = /*font_size_tooltip*/
      r[41]), o[1] & /*padding_tooltip*/
      2048 && (f.padding_tooltip = /*padding_tooltip*/
      r[42]), o[1] & /*text_color_tooltip*/
      4096 && (f.text_color_tooltip = /*text_color_tooltip*/
      r[43]), o[1] & /*border_color_tooltip*/
      8192 && (f.border_color_tooltip = /*border_color_tooltip*/
      r[44]), o[1] & /*show_delay_tooltip*/
      16384 && (f.show_delay_tooltip = /*show_delay_tooltip*/
      r[45]), o[1] & /*border_style_tooltip*/
      32768 && (f.border_style_tooltip = /*border_style_tooltip*/
      r[46]), o[1] & /*border_width_tooltip*/
      65536 && (f.border_width_tooltip = /*border_width_tooltip*/
      r[47]), o[1] & /*tooltip_position*/
      131072 && (f.tooltip_position = /*tooltip_position*/
      r[48]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function nv(e) {
  let t, n;
  return t = new np({
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[1] & /*x_scale*/
      67108864 && (f.x_scale = /*x_scale*/
      r[57]), o[2] & /*m*/
      128 && (f.m_y = /*m*/
      r[69].y), o[1] & /*tooltip2_array_values*/
      8388608 && (f.tooltip2_array_values = /*tooltip2_array_values*/
      r[54]), o[0] & /*format_tooltip*/
      16777216 && (f.format_tooltip = /*format_tooltip*/
      r[24]), o[0] & /*height*/
      1024 && (f.height = /*height*/
      r[10]), o[0] & /*width*/
      1 && (f.width = /*width*/
      r[0]), o[1] & /*interval*/
      8 && (f.interval = /*interval*/
      r[34]), o[1] & /*type*/
      1048576 && (f.type = /*type*/
      r[51]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function Ac(e) {
  let t, n;
  return t = new gp({
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
      line_generator_space: Wr
    }
  }), {
    c() {
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[1] & /*y_scale*/
      134217728 && (f.y = /*y_scale*/
      r[58].domain()[1]), o[1] & /*x_scale*/
      67108864 && (f.x_scale = /*x_scale*/
      r[57]), o[1] & /*y_scale*/
      134217728 && (f.y_scale = /*y_scale*/
      r[58]), o[2] & /*filtered_segments_df*/
      16384 && (f.filtered_segments_df = /*filtered_segments_df*/
      r[76]), o[0] & /*height*/
      1024 && (f.height = /*height*/
      r[10]), o[0] & /*width*/
      1 && (f.width = /*width*/
      r[0]), o[2] & /*y_lines_spacing*/
      4 && (f.y_lines_spacing = /*y_lines_spacing*/
      r[64]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function iv(e) {
  let t, n, r, o, f, u, a = [], _ = /* @__PURE__ */ new Map(), c, d, h = [], g = /* @__PURE__ */ new Map(), w, v, S, k, T, A, z, U, O, E, B, G, X, D, j, se, de, ie, te, J, W = (
    /*header*/
    e[4] && oc(e)
  ), C = (
    /*show_legend*/
    e[2] && fc(e)
  ), R = (
    /*segments_df*/
    e[29] && /*show_legend_segments*/
    e[32] && ac(e)
  ), ce = ke(
    /*x_ticks*/
    e[74]
  );
  const he = (Y) => (
    /*tickValue*/
    Y[137].toString()
  );
  for (let Y = 0; Y < ce.length; Y += 1) {
    let oe = rc(e, ce, Y), Me = he(oe);
    _.set(Me, a[Y] = sc(Me, oe));
  }
  d = new o0({
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
          easing: _t,
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
  let vt = ke(
    /*y_scale*/
    e[58].ticks(
      /*yaxis_ticks*/
      e[20]
    )
  );
  const Kt = (Y) => (
    /*tickValue*/
    Y[137]
  );
  for (let Y = 0; Y < vt.length; Y += 1) {
    let oe = ic(e, vt, Y), Me = Kt(oe);
    g.set(Me, h[Y] = _c(Me, oe));
  }
  let Ze = (
    /*crosshair*/
    e[49] && /*tooltip2_array_values*/
    e[54] && /*tooltip2_array_values*/
    e[54].length > 0 && hc(e)
  );
  S = new l0({
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
          easing: _t,
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
    e[26] && cc(e)
  ), $e = (
    /*tooltip2_array_values*/
    e[54] && /*tooltip*/
    e[33] === "single" && /*x_axis_type*/
    (e[18] === "date" || /*x_axis_type*/
    e[18] === "factor" || /*x_axis_type*/
    e[18] === "numeric" && /*tooltip2_array_values*/
    (e[54].type === "line" || /*tooltip2_array_values*/
    e[54].type === "density")) && dc(e)
  ), ut = (
    /*tooltip*/
    e[33] === "vertical_line" && /*tooltip2_array_values*/
    e[54] && /*tooltip2_array_values*/
    e[54].length > 0 && mc(e)
  ), He = (
    /*all_points*/
    e[60].length > 0 && bc(e)
  ), ue = (
    /*all_lines*/
    e[56].length > 0 && vc(e)
  ), me = (
    /*arrows*/
    e[28] && xc(e)
  ), be = (
    /*annotations*/
    e[27] && Mc(e)
  ), $ = (
    /*x_axis_type*/
    (e[18] === "date" || /*x_axis_type*/
    e[18] === "factor") && Tc(e)
  ), Ce = (
    /*x_axis_type*/
    e[18] === "numeric" && Sc(e)
  ), ye = (
    /*tooltip2_array_values*/
    e[54] && [
      /*tooltip2_array_values*/
      e[54]
    ].length > 0 && /*tooltip*/
    e[33] === "single" && zc(e)
  );
  const We = [nv, tv], je = [];
  function et(Y, oe) {
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
  ~(D = et(e)) && (j = je[D] = We[D](e));
  let Ye = (
    /*$hovered_legend*/
    e[77] && Ac(e)
  );
  return {
    c() {
      W && W.c(), t = ve(), n = _e("div"), C && C.c(), r = ve(), R && R.c(), o = ve(), f = _e("div"), u = ze("svg");
      for (let Y = 0; Y < a.length; Y += 1)
        a[Y].c();
      c = Ee(), Qe(d.$$.fragment);
      for (let Y = 0; Y < h.length; Y += 1)
        h[Y].c();
      w = Ee(), Ze && Ze.c(), v = Ee(), Qe(S.$$.fragment), Ue && Ue.c(), k = Ee(), $e && $e.c(), T = Ee(), ut && ut.c(), A = Ee(), He && He.c(), z = Ee(), ue && ue.c(), U = Ee(), me && me.c(), O = Ee(), be && be.c(), E = Ee(), $ && $.c(), B = Ee(), Ce && Ce.c(), G = ve(), ye && ye.c(), X = ve(), j && j.c(), se = ve(), Ye && Ye.c(), p(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "flex-start"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(
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
    m(Y, oe) {
      W && W.m(Y, oe), V(Y, t, oe), V(Y, n, oe), C && C.m(n, null), V(Y, r, oe), R && R.m(Y, oe), V(Y, o, oe), V(Y, f, oe), q(f, u);
      for (let Me = 0; Me < a.length; Me += 1)
        a[Me] && a[Me].m(u, null);
      q(u, c), Ke(d, u, null);
      for (let Me = 0; Me < h.length; Me += 1)
        h[Me] && h[Me].m(u, null);
      q(u, w), Ze && Ze.m(u, null), q(u, v), Ke(S, u, null), Ue && Ue.m(u, null), q(u, k), $e && $e.m(u, null), q(u, T), ut && ut.m(u, null), q(u, A), He && He.m(u, null), q(u, z), ue && ue.m(u, null), q(u, U), me && me.m(u, null), q(u, O), be && be.m(u, null), q(u, E), $ && $.m(u, null), q(u, B), Ce && Ce.m(u, null), q(f, G), ye && ye.m(f, null), q(f, X), ~D && je[D].m(f, null), q(f, se), Ye && Ye.m(f, null), de = rr(
        f,
        /*div1_elementresize_handler*/
        e[102].bind(f)
      ), ie = !0, te || (J = [
        lt(
          n,
          "mouseleave",
          /*mouseleave_handler*/
          e[95]
        ),
        lt(
          f,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[103]
        )
      ], te = !0);
    },
    p(Y, oe) {
      /*header*/
      Y[4] ? W ? W.p(Y, oe) : (W = oc(Y), W.c(), W.m(t.parentNode, t)) : W && (W.d(1), W = null), /*show_legend*/
      Y[2] ? C ? C.p(Y, oe) : (C = fc(Y), C.c(), C.m(n, null)) : C && (C.d(1), C = null), (!ie || oe[1] & /*label_height*/
      2097152) && y(
        n,
        "margin-left",
        /*label_height*/
        Y[52] + Pi + "px"
      ), /*segments_df*/
      Y[29] && /*show_legend_segments*/
      Y[32] ? R ? (R.p(Y, oe), oe[0] & /*segments_df*/
      536870912 | oe[1] & /*show_legend_segments*/
      2 && le(R, 1)) : (R = ac(Y), R.c(), le(R, 1), R.m(o.parentNode, o)) : R && (qe(), ae(R, 1, 1, () => {
        R = null;
      }), Ge()), oe[0] & /*width, rotation_xaxis, font_size_xticks, dx, dy, dominant_baseline_x_axis, text_anchor_x_axis*/
      243713 | oe[1] & /*x_scale*/
      67108864 | oe[2] & /*x_ticks, x_ticks_spacing, x_lines_spacing, format_x_axis*/
      6154 && (ce = ke(
        /*x_ticks*/
        Y[74]
      ), qe(), a = kn(a, oe, he, 1, Y, ce, _, u, Kn, sc, c, rc), Ge());
      const Me = {};
      oe[1] & /*x_scale*/
      67108864 | oe[2] & /*x_ticks*/
      4096 && (Me.axis_title_position = /*x_scale*/
      (Y[57](
        /*x_ticks*/
        Y[74][0]
      ) + /*x_scale*/
      Y[57](
        /*x_ticks*/
        Y[74][
          /*x_ticks*/
          Y[74].length - 1
        ]
      )) / 2), oe[0] & /*x_label*/
      524288 && (Me.x_label = /*x_label*/
      Y[19]), oe[0] & /*font_size_xaxis*/
      16384 && (Me.font_size_xaxis = /*font_size_xaxis*/
      Y[14]), oe[1] & /*label_height_x_axis*/
      4194304 && (Me.label_height_x_axis = /*label_height_x_axis*/
      Y[53]), oe[0] & /*height*/
      1024 && (Me.height = /*height*/
      Y[10]), d.$set(Me), oe[0] & /*yaxis_ticks, width, height, font_size_yticks*/
      9438209 | oe[1] & /*y_scale*/
      134217728 | oe[2] & /*y_lines_spacing, format_number*/
      5 && (vt = ke(
        /*y_scale*/
        Y[58].ticks(
          /*yaxis_ticks*/
          Y[20]
        )
      ), qe(), h = kn(h, oe, Kt, 1, Y, vt, g, u, Kn, _c, w, ic), Ge()), /*crosshair*/
      Y[49] && /*tooltip2_array_values*/
      Y[54] && /*tooltip2_array_values*/
      Y[54].length > 0 ? Ze ? (Ze.p(Y, oe), oe[1] & /*crosshair, tooltip2_array_values*/
      8650752 && le(Ze, 1)) : (Ze = hc(Y), Ze.c(), le(Ze, 1), Ze.m(u, v)) : Ze && (qe(), ae(Ze, 1, 1, () => {
        Ze = null;
      }), Ge());
      const Tt = {};
      oe[1] & /*y_scale, ticks*/
      1207959552 && (Tt.axis_title_position = /*y_scale*/
      (Y[58](
        /*ticks*/
        Y[61][0]
      ) + /*y_scale*/
      Y[58](
        /*ticks*/
        Y[61][
          /*ticks*/
          Y[61].length - 1
        ]
      )) / 2), oe[0] & /*y_label*/
      33554432 && (Tt.y_label = /*y_label*/
      Y[25]), oe[0] & /*font_size_yaxis*/
      4194304 && (Tt.font_size_yaxis = /*font_size_yaxis*/
      Y[22]), oe[1] & /*label_height*/
      2097152 && (Tt.label_height = /*label_height*/
      Y[52]), S.$set(Tt), /*segments*/
      Y[26] ? Ue ? (Ue.p(Y, oe), oe[0] & /*segments*/
      67108864 && le(Ue, 1)) : (Ue = cc(Y), Ue.c(), le(Ue, 1), Ue.m(u, k)) : Ue && (qe(), ae(Ue, 1, 1, () => {
        Ue = null;
      }), Ge()), /*tooltip2_array_values*/
      Y[54] && /*tooltip*/
      Y[33] === "single" && /*x_axis_type*/
      (Y[18] === "date" || /*x_axis_type*/
      Y[18] === "factor" || /*x_axis_type*/
      Y[18] === "numeric" && /*tooltip2_array_values*/
      (Y[54].type === "line" || /*tooltip2_array_values*/
      Y[54].type === "density")) ? $e ? $e.p(Y, oe) : ($e = dc(Y), $e.c(), $e.m(u, T)) : $e && ($e.d(1), $e = null), /*tooltip*/
      Y[33] === "vertical_line" && /*tooltip2_array_values*/
      Y[54] && /*tooltip2_array_values*/
      Y[54].length > 0 ? ut ? ut.p(Y, oe) : (ut = mc(Y), ut.c(), ut.m(u, A)) : ut && (ut.d(1), ut = null), /*all_points*/
      Y[60].length > 0 ? He ? (He.p(Y, oe), oe[1] & /*all_points*/
      536870912 && le(He, 1)) : (He = bc(Y), He.c(), le(He, 1), He.m(u, z)) : He && (qe(), ae(He, 1, 1, () => {
        He = null;
      }), Ge()), /*all_lines*/
      Y[56].length > 0 ? ue ? (ue.p(Y, oe), oe[1] & /*all_lines*/
      33554432 && le(ue, 1)) : (ue = vc(Y), ue.c(), le(ue, 1), ue.m(u, U)) : ue && (qe(), ae(ue, 1, 1, () => {
        ue = null;
      }), Ge()), /*arrows*/
      Y[28] ? me ? (me.p(Y, oe), oe[0] & /*arrows*/
      268435456 && le(me, 1)) : (me = xc(Y), me.c(), le(me, 1), me.m(u, O)) : me && (qe(), ae(me, 1, 1, () => {
        me = null;
      }), Ge()), /*annotations*/
      Y[27] ? be ? (be.p(Y, oe), oe[0] & /*annotations*/
      134217728 && le(be, 1)) : (be = Mc(Y), be.c(), le(be, 1), be.m(u, E)) : be && (qe(), ae(be, 1, 1, () => {
        be = null;
      }), Ge()), /*x_axis_type*/
      Y[18] === "date" || /*x_axis_type*/
      Y[18] === "factor" ? $ ? ($.p(Y, oe), oe[0] & /*x_axis_type*/
      262144 && le($, 1)) : ($ = Tc(Y), $.c(), le($, 1), $.m(u, B)) : $ && (qe(), ae($, 1, 1, () => {
        $ = null;
      }), Ge()), /*x_axis_type*/
      Y[18] === "numeric" ? Ce ? (Ce.p(Y, oe), oe[0] & /*x_axis_type*/
      262144 && le(Ce, 1)) : (Ce = Sc(Y), Ce.c(), le(Ce, 1), Ce.m(u, null)) : Ce && (qe(), ae(Ce, 1, 1, () => {
        Ce = null;
      }), Ge()), (!ie || oe[0] & /*height*/
      1024) && p(
        u,
        "height",
        /*height*/
        Y[10]
      ), (!ie || oe[0] & /*width*/
      1) && p(
        u,
        "width",
        /*width*/
        Y[0]
      ), /*tooltip2_array_values*/
      Y[54] && [
        /*tooltip2_array_values*/
        Y[54]
      ].length > 0 && /*tooltip*/
      Y[33] === "single" ? ye ? (ye.p(Y, oe), oe[1] & /*tooltip2_array_values, tooltip*/
      8388612 && le(ye, 1)) : (ye = zc(Y), ye.c(), le(ye, 1), ye.m(f, X)) : ye && (qe(), ae(ye, 1, 1, () => {
        ye = null;
      }), Ge());
      let St = D;
      D = et(Y), D === St ? ~D && je[D].p(Y, oe) : (j && (qe(), ae(je[St], 1, 1, () => {
        je[St] = null;
      }), Ge()), ~D ? (j = je[D], j ? j.p(Y, oe) : (j = je[D] = We[D](Y), j.c()), le(j, 1), j.m(f, se)) : j = null), /*$hovered_legend*/
      Y[77] ? Ye ? (Ye.p(Y, oe), oe[2] & /*$hovered_legend*/
      32768 && le(Ye, 1)) : (Ye = Ac(Y), Ye.c(), le(Ye, 1), Ye.m(f, null)) : Ye && (qe(), ae(Ye, 1, 1, () => {
        Ye = null;
      }), Ge());
    },
    i(Y) {
      if (!ie) {
        le(R);
        for (let oe = 0; oe < ce.length; oe += 1)
          le(a[oe]);
        le(d.$$.fragment, Y);
        for (let oe = 0; oe < vt.length; oe += 1)
          le(h[oe]);
        le(Ze), le(S.$$.fragment, Y), le(Ue), le(He), le(ue), le(me), le(be), le($), le(Ce), le(ye), le(j), le(Ye), ie = !0;
      }
    },
    o(Y) {
      ae(R);
      for (let oe = 0; oe < a.length; oe += 1)
        ae(a[oe]);
      ae(d.$$.fragment, Y);
      for (let oe = 0; oe < h.length; oe += 1)
        ae(h[oe]);
      ae(Ze), ae(S.$$.fragment, Y), ae(Ue), ae(He), ae(ue), ae(me), ae(be), ae($), ae(Ce), ae(ye), ae(j), ae(Ye), ie = !1;
    },
    d(Y) {
      Y && (Q(t), Q(n), Q(r), Q(o), Q(f)), W && W.d(Y), C && C.d(), R && R.d(Y);
      for (let oe = 0; oe < a.length; oe += 1)
        a[oe].d();
      Je(d);
      for (let oe = 0; oe < h.length; oe += 1)
        h[oe].d();
      Ze && Ze.d(), Je(S), Ue && Ue.d(), $e && $e.d(), ut && ut.d(), He && He.d(), ue && ue.d(), me && me.d(), be && be.d(), $ && $.d(), Ce && Ce.d(), ye && ye.d(), ~D && je[D].d(), Ye && Ye.d(), de(), te = !1, Ht(J);
    }
  };
}
const rv = "XYChart", tf = 30, Fr = 40;
let Wr = 20;
const Pi = 15, Vo = 5;
function lv(e, t, n) {
  let r, o, f, u, a;
  pt(e, Vi, (P) => n(77, a = P));
  let { data: _ = [] } = t, { id: c } = t;
  Zu(() => {
    console.log("Chart component destroyed:", c);
  }), S6(() => {
    console.log("Chart component mounted:", c);
  });
  let { width: d = 800 } = t, { show_legend: h } = t, { custom_tooltip_data: g } = t, { header: w } = t, { title_align: v } = t, { title_color: S } = t, { title_font_size: k } = t, { title_font_weight: T } = t, { custom_css_header: A } = t, { height: z = 400 } = t, { xaxis_ticks: U = 6 } = t, { format_xaxis: O } = t, { dx: E = "0em" } = t, { dy: B = "0em" } = t, { rotation_xaxis: G = 0 } = t, { font_size_xaxis: X = 14 } = t, { font_size_xticks: D = 12 } = t, { scale_x: j = "linear" } = t, { dominant_baseline_x_axis: se = "middle" } = t, { text_anchor_x_axis: de = "middle" } = t, { line_type_axis_trigger: ie = "none" } = t, { x_axis_type: te } = t, { x_label: J } = t, { yaxis_ticks: W = 6 } = t, { format_yaxis: C = ",.3r" } = t, { font_size_yaxis: R = 14 } = t, { font_size_yticks: ce = 12 } = t, { format_tooltip: he = "" } = t, { y_label: vt } = t, { segments: Kt } = t, { annotations: Ze } = t, { arrows: Ue } = t, { segments_df: $e } = t, { arrows_df: ut } = t, { annotations_df: He } = t, { show_legend_segments: ue } = t, { type: me } = t, { tooltip: be } = t, { interval: $ } = t, { time_interval: Ce } = t, { time_series_interval: ye = "daily" } = t, { background_color_tt: We } = t, { opacity_tt: je } = t, { animation_params_list: et } = t, { justify_content_tooltip: Ye } = t, { font_size_tooltip: Y } = t, { padding_tooltip: oe } = t, { text_color_tooltip: Me } = t, { border_color_tooltip: Tt } = t, { show_delay_tooltip: St } = t, { border_style_tooltip: Xt } = t, { border_width_tooltip: gt } = t, { tooltip_position: zt } = t, { crosshair: en } = t, { x_range: kt } = t, { y_range: xt } = t, tn = [];
  function Un(P) {
    let Ft = [];
    Ft = Object.keys(yt).filter((Et) => !P.includes(Et));
    for (let Et = 0; Et < P.length; Et++)
      n(66, yt[P[Et]] = !0, yt);
    for (let Et = 0; Et < Ft.length; Et++)
      n(66, yt[Ft[Et]] = !1, yt);
    return [yt, Ft, tn];
  }
  let nn = Fr, on = 20, Jn = Fr, cn, Mn = 10, fn, Tn, yt = {}, Pn = [], gn, At = null, Sn = { x: 0, y: 0 }, zn = !1, Jt, Qn, An = [], K = [], tt = [], Ct = [], dn = [], un = null, Fn = null, ii, ai = [];
  const Yr = (P) => P.filter((Ft) => Ft.y !== null);
  let Cn = {}, Ln = {}, Wi, Bi, fr, si = z - 40, Si = 40;
  function H() {
    const Ft = document.createElement("canvas").getContext("2d"), Et = (rf, Yl) => {
      Ft.font = `${Yl}px Arial`;
      const { width: ar } = Ft.measureText(rf), Xl = Ft.measureText("M").actualBoundingBoxAscent + Ft.measureText("M").actualBoundingBoxDescent + 1;
      return { width: ar, height: Xl };
    }, Bl = Et(fr, ce);
    n(67, nn = Bl.width);
    const Hl = Et(vt, R);
    n(52, Mn = Hl.height);
    const Kr = Et(f, D);
    Jn = Kr.width, cn = Kr.height;
    const Jr = Et("M", X);
    n(53, fn = Jr.height), n(84, on = ua(Jn, cn, G)), n(63, si = z - on - fn - cn - Pi - Vo), n(64, Si = nn + Mn + Pi + Vo);
  }
  Gu(H);
  let Lt, dt, ur = 10;
  const Xr = (P) => n(68, Tn = P), _i = (P) => {
    (Object.keys(yt).filter((Et) => yt[Et]).length > 1 || !yt[P]) && n(66, yt[P] = !yt[P], yt);
  }, qr = () => n(68, Tn = null);
  function zi(P) {
    At = P, n(54, At);
  }
  function Gr(P) {
    Sn = P, n(69, Sn);
  }
  function Zr(P) {
    zn = P, n(70, zn);
  }
  function jr(P) {
    zn = P, n(70, zn);
  }
  function Pl(P) {
    Sn = P, n(69, Sn);
  }
  function Fl(P) {
    At = P, n(54, At);
  }
  function Wl() {
    d = this.clientWidth, n(0, d);
  }
  const nf = () => w1.set(null);
  return e.$$set = (P) => {
    "data" in P && n(78, _ = P.data), "id" in P && n(50, c = P.id), "width" in P && n(0, d = P.width), "show_legend" in P && n(2, h = P.show_legend), "custom_tooltip_data" in P && n(3, g = P.custom_tooltip_data), "header" in P && n(4, w = P.header), "title_align" in P && n(5, v = P.title_align), "title_color" in P && n(6, S = P.title_color), "title_font_size" in P && n(7, k = P.title_font_size), "title_font_weight" in P && n(8, T = P.title_font_weight), "custom_css_header" in P && n(9, A = P.custom_css_header), "height" in P && n(10, z = P.height), "xaxis_ticks" in P && n(79, U = P.xaxis_ticks), "format_xaxis" in P && n(80, O = P.format_xaxis), "dx" in P && n(11, E = P.dx), "dy" in P && n(12, B = P.dy), "rotation_xaxis" in P && n(13, G = P.rotation_xaxis), "font_size_xaxis" in P && n(14, X = P.font_size_xaxis), "font_size_xticks" in P && n(15, D = P.font_size_xticks), "scale_x" in P && n(81, j = P.scale_x), "dominant_baseline_x_axis" in P && n(16, se = P.dominant_baseline_x_axis), "text_anchor_x_axis" in P && n(17, de = P.text_anchor_x_axis), "line_type_axis_trigger" in P && n(1, ie = P.line_type_axis_trigger), "x_axis_type" in P && n(18, te = P.x_axis_type), "x_label" in P && n(19, J = P.x_label), "yaxis_ticks" in P && n(20, W = P.yaxis_ticks), "format_yaxis" in P && n(21, C = P.format_yaxis), "font_size_yaxis" in P && n(22, R = P.font_size_yaxis), "font_size_yticks" in P && n(23, ce = P.font_size_yticks), "format_tooltip" in P && n(24, he = P.format_tooltip), "y_label" in P && n(25, vt = P.y_label), "segments" in P && n(26, Kt = P.segments), "annotations" in P && n(27, Ze = P.annotations), "arrows" in P && n(28, Ue = P.arrows), "segments_df" in P && n(29, $e = P.segments_df), "arrows_df" in P && n(30, ut = P.arrows_df), "annotations_df" in P && n(31, He = P.annotations_df), "show_legend_segments" in P && n(32, ue = P.show_legend_segments), "type" in P && n(51, me = P.type), "tooltip" in P && n(33, be = P.tooltip), "interval" in P && n(34, $ = P.interval), "time_interval" in P && n(35, Ce = P.time_interval), "time_series_interval" in P && n(36, ye = P.time_series_interval), "background_color_tt" in P && n(37, We = P.background_color_tt), "opacity_tt" in P && n(38, je = P.opacity_tt), "animation_params_list" in P && n(39, et = P.animation_params_list), "justify_content_tooltip" in P && n(40, Ye = P.justify_content_tooltip), "font_size_tooltip" in P && n(41, Y = P.font_size_tooltip), "padding_tooltip" in P && n(42, oe = P.padding_tooltip), "text_color_tooltip" in P && n(43, Me = P.text_color_tooltip), "border_color_tooltip" in P && n(44, Tt = P.border_color_tooltip), "show_delay_tooltip" in P && n(45, St = P.show_delay_tooltip), "border_style_tooltip" in P && n(46, Xt = P.border_style_tooltip), "border_width_tooltip" in P && n(47, gt = P.border_width_tooltip), "tooltip_position" in P && n(48, zt = P.tooltip_position), "crosshair" in P && n(49, en = P.crosshair), "x_range" in P && n(82, kt = P.x_range), "y_range" in P && n(83, xt = P.y_range);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*line_type_axis_trigger*/
    2 && n(1, ie = ie || "none"), e.$$.dirty[1] & /*type, time_interval*/
    1048592 | e.$$.dirty[2] & /*data*/
    65536 && n(85, Pn = Mw(_, me, Ce)), e.$$.dirty[2] & /*data, names, start*/
    50397184 && (n(86, gn = [...new Set(_.map((P) => P.id))]), n(88, Qn = _.map((P) => ({
      id: P.id,
      include_legend: P.include_legend,
      type: P.type,
      color: P.colors
    }))), n(87, Jt = Un(gn)), n(66, yt = Jt[0]), Jt[1]), e.$$.dirty[2] & /*categories*/
    16 && n(59, ii = Object.keys(yt).filter((P) => yt[P])), e.$$.dirty[2] & /*names*/
    16777216 && n(59, ii = gn), e.$$.dirty[0] & /*width, x_axis_type*/
    262145 | e.$$.dirty[1] & /*current_categories, filtered_data, type, all_lines, all_points*/
    856686592 | e.$$.dirty[2] & /*dataset, y_lines_spacing, x_lines_spacing, scale_x, x_range, y_range, line_generator_scales, scales, line_generator*/
    951582726 && (n(55, An = Pn.filter(({ id: P }) => ii.includes(P))), n(89, K = Sw(An, Si, si, d, Wr, me, j, kt, xt, te)), n(91, Ct = K.slice(1, 3)), n(57, un = Ct[0]), n(58, Fn = Ct[1]), n(90, tt = K[0]), n(56, dn = Tw(An, ii, tt)), n(56, dn = dn.filter(({ id: P }) => ii.includes(P))), n(60, ai = dn.filter(({ type: P }) => ["points"].includes(P))), ai.forEach((P) => {
      P.data = Yr(P.data);
    }), n(56, dn = dn.filter(({ type: P }) => ["line", "density", "bands"].includes(P)))), e.$$.dirty[0] & /*segments_df, x_axis_type*/
    537133056 | e.$$.dirty[1] & /*y_scale, x_scale, time_interval*/
    201326608 | e.$$.dirty[2] & /*dataset*/
    8388608 && n(76, r = zw(Pn, $e, te, Fn, un, Ce)), e.$$.dirty[2] & /*include_legend*/
    67108864 && n(75, o = Qn.filter((P) => P.include_legend !== !1)), e.$$.dirty[1] & /*tooltip2_array_values, tooltip, x_scale*/
    75497476 | e.$$.dirty[2] & /*x_lines_spacing*/
    2 && At && be === "vertical_line" && At.length > 0 && (n(71, Cn.y1 = si, Cn), n(71, Cn.y2 = Wr, Cn), n(71, Cn.x1 = un(At[0].data.x), Cn), n(71, Cn.x2 = un(At[0].data.x), Cn)), e.$$.dirty[0] & /*width*/
    1 | e.$$.dirty[1] & /*tooltip2_array_values, tooltip, y_scale*/
    142606340 | e.$$.dirty[2] & /*y_lines_spacing*/
    4 && At && be === "vertical_line" && At.length > 0 && (n(72, Ln.y1 = Fn(At[0].data.y), Ln), n(72, Ln.y2 = Fn(At[0].data.y), Ln), n(72, Ln.x1 = Si, Ln), n(72, Ln.x2 = d, Ln)), e.$$.dirty[0] & /*format_yaxis*/
    2097152 && n(62, Bi = hn(C)), e.$$.dirty[0] & /*yaxis_ticks*/
    1048576 | e.$$.dirty[1] & /*y_scale*/
    134217728 && n(61, Wi = Fn.ticks(W)), e.$$.dirty[1] & /*ticks*/
    1073741824 | e.$$.dirty[2] & /*format_number*/
    1) {
      let P = 0;
      Wi.forEach((Ft) => {
        const Et = Bi(Ft).toString();
        Et.length > P && (P = Et.length, fr = Et);
      });
    }
    e.$$.dirty[1] & /*type, x_scale, all_points, all_lines*/
    638582784 | e.$$.dirty[2] & /*format_xaxis, xaxis_ticks, format_x_axis*/
    393224 && (me === "timeseries" ? (n(65, Lt = fa(O)), n(92, dt = un.ticks(U).map((P) => Lt(P)))) : (me === "points" || me === "line" || me === "density") && (ai.length > 0 && typeof ai.concat(dn)[0].data[0].x == "number" ? (n(65, Lt = hn(O)), n(92, dt = un.ticks(U).map((P) => hn(P)))) : (n(65, Lt = "null"), n(92, dt = un.domain())))), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    1073741824 && (f = dt.reduce((P, Ft) => P.length > Ft.length ? P : Ft)), e.$$.dirty[0] & /*height*/
    1024 | e.$$.dirty[1] & /*label_height_x_axis*/
    4194304 | e.$$.dirty[2] & /*x_ticks_label_rotation_buffer*/
    4194304 && n(73, ur = z - on - fn - Pi), e.$$.dirty[1] & /*label_height*/
    2097152, e.$$.dirty[1] & /*x_scale*/
    67108864 | e.$$.dirty[2] & /*xaxis_ticks*/
    131072 && n(74, u = typeof un.domain()[0] == "string" ? un.domain() : un.ticks(U));
  }, [
    d,
    ie,
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
    X,
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
    vt,
    Kt,
    Ze,
    Ue,
    $e,
    ut,
    He,
    ue,
    be,
    $,
    Ce,
    ye,
    We,
    je,
    et,
    Ye,
    Y,
    oe,
    Me,
    Tt,
    St,
    Xt,
    gt,
    zt,
    en,
    c,
    me,
    Mn,
    fn,
    At,
    An,
    dn,
    un,
    Fn,
    ii,
    ai,
    Wi,
    Bi,
    si,
    Si,
    Lt,
    yt,
    nn,
    Tn,
    Sn,
    zn,
    Cn,
    Ln,
    ur,
    u,
    o,
    r,
    a,
    _,
    U,
    O,
    j,
    kt,
    xt,
    on,
    Pn,
    gn,
    Jt,
    Qn,
    K,
    tt,
    Ct,
    dt,
    Xr,
    _i,
    qr,
    zi,
    Gr,
    Zr,
    jr,
    Pl,
    Fl,
    Wl,
    nf
  ];
}
class ov extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      lv,
      iv,
      ft,
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
function fv(e) {
  let t, n, r, o, f;
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
      V(u, t, a), o || (f = [
        lt(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[29]
        ),
        lt(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[30]
        )
      ], o = !0);
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
      r || it(() => {
        r = Fi(
          t,
          Zt,
          /*mode*/
          e[11] === "grouped" ? { x: -200, duration: 1e3, delay: 50 } : { y: 200, duration: 1e3, delay: 50 }
        ), r.start();
      });
    },
    o: Pe,
    d(u) {
      u && Q(t), o = !1, Ht(f);
    }
  };
}
function uv(e, t, n) {
  let r, o, f, u, { x: a } = t, { y: _ } = t, { width: c } = t, { height: d } = t, { color: h } = t, { tweenOptions: g } = t, { y_value: w } = t, { x_value: v } = t, { group: S } = t, { hover_legend: k } = t, { current_categories: T } = t, { mode: A } = t, { x_cat: z } = t, { xScale: U } = t, { hovered_y: O } = t, { hovered_x: E } = t, { hovered_group: B } = t, { hovered_color: G } = t, { hovered_x_cat: X } = t, { tooltip_axis_x: D } = t, j = Ut(a, g == null ? void 0 : g.x);
  pt(e, j, (C) => n(13, r = C));
  let se = Ut(_, g == null ? void 0 : g.y);
  pt(e, se, (C) => n(14, o = C));
  let de = Ut(c, g == null ? void 0 : g.width);
  pt(e, de, (C) => n(15, f = C));
  let ie = Ut(d, g == null ? void 0 : g.height);
  pt(e, ie, (C) => n(16, u = C));
  function te(C, R, ce, he, vt, Kt, Ze, Ue) {
    n(0, O = R), n(1, E = Ue === "grouped" ? ce + he / 2 : U(vt) + he / 2), n(2, B = Kt), n(3, G = Ze), n(22, X = vt), n(23, D = U(vt) + he / 2);
  }
  const J = (C) => te(C, w, v, c, z, S, h, A), W = () => {
    n(0, O = null), n(1, E = null), n(2, B = null), n(3, G = null);
  };
  return e.$$set = (C) => {
    "x" in C && n(24, a = C.x), "y" in C && n(25, _ = C.y), "width" in C && n(4, c = C.width), "height" in C && n(26, d = C.height), "color" in C && n(5, h = C.color), "tweenOptions" in C && n(27, g = C.tweenOptions), "y_value" in C && n(6, w = C.y_value), "x_value" in C && n(7, v = C.x_value), "group" in C && n(8, S = C.group), "hover_legend" in C && n(9, k = C.hover_legend), "current_categories" in C && n(10, T = C.current_categories), "mode" in C && n(11, A = C.mode), "x_cat" in C && n(12, z = C.x_cat), "xScale" in C && n(28, U = C.xScale), "hovered_y" in C && n(0, O = C.hovered_y), "hovered_x" in C && n(1, E = C.hovered_x), "hovered_group" in C && n(2, B = C.hovered_group), "hovered_color" in C && n(3, G = C.hovered_color), "hovered_x_cat" in C && n(22, X = C.hovered_x_cat), "tooltip_axis_x" in C && n(23, D = C.tooltip_axis_x);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions*/
    150994944 && j.set(a, g == null ? void 0 : g.x), e.$$.dirty & /*y, tweenOptions*/
    167772160 && se.set(_, g == null ? void 0 : g.y), e.$$.dirty & /*width, tweenOptions*/
    134217744 && de.set(c, g == null ? void 0 : g.width), e.$$.dirty & /*height, tweenOptions*/
    201326592 && ie.set(d, g == null ? void 0 : g.height);
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
    r,
    o,
    f,
    u,
    j,
    se,
    de,
    ie,
    te,
    X,
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
class av extends ct {
  constructor(t) {
    super(), ht(this, t, uv, fv, ft, {
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
function sv(e) {
  let t, n, r, o, f;
  return {
    c() {
      t = ze("text"), n = Ae(
        /*text*/
        e[0]
      ), p(t, "transform", r = `rotate(${-/*rotation*/
      e[2]} ${/*$tweened_x*/
      e[8]} ${/*$tweened_y*/
      e[9]})`), p(t, "font-size", o = /*font_size_xticks*/
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
      V(u, t, a), q(t, n);
    },
    p(u, [a]) {
      a & /*text*/
      1 && Oe(
        n,
        /*text*/
        u[0]
      ), a & /*rotation, $tweened_x, $tweened_y*/
      772 && r !== (r = `rotate(${-/*rotation*/
      u[2]} ${/*$tweened_x*/
      u[8]} ${/*$tweened_y*/
      u[9]})`) && p(t, "transform", r), a & /*font_size_xticks*/
      2 && o !== (o = /*font_size_xticks*/
      u[1] + "px") && p(t, "font-size", o), a & /*$tweened_x*/
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
        f = Fi(t, pn, { duration: 1e3, easing: Cl }), f.start();
      }));
    },
    o: Pe,
    d(u) {
      u && Q(t);
    }
  };
}
function _v(e, t, n) {
  let r, o, { x: f } = t, { y: u } = t, { tweenOptions: a } = t, { text: _ } = t, { font_size_xticks: c } = t, { rotation: d } = t, { colour_text: h } = t, { text_anchor_x_axis: g } = t, { dominant_baseline_x_axis: w } = t, { dx: v } = t, { dy: S } = t, k = Ut(u, a == null ? void 0 : a.y);
  pt(e, k, (A) => n(9, o = A));
  let T = Ut(f, a == null ? void 0 : a.x);
  return pt(e, T, (A) => n(8, r = A)), e.$$set = (A) => {
    "x" in A && n(12, f = A.x), "y" in A && n(13, u = A.y), "tweenOptions" in A && n(14, a = A.tweenOptions), "text" in A && n(0, _ = A.text), "font_size_xticks" in A && n(1, c = A.font_size_xticks), "rotation" in A && n(2, d = A.rotation), "colour_text" in A && n(3, h = A.colour_text), "text_anchor_x_axis" in A && n(4, g = A.text_anchor_x_axis), "dominant_baseline_x_axis" in A && n(5, w = A.dominant_baseline_x_axis), "dx" in A && n(6, v = A.dx), "dy" in A && n(7, S = A.dy);
  }, e.$$.update = () => {
    e.$$.dirty & /*y, tweenOptions, x*/
    28672 && Rl().then(() => {
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
    r,
    o,
    k,
    T,
    f,
    u,
    a
  ];
}
class hv extends ct {
  constructor(t) {
    super(), ht(this, t, _v, sv, ft, {
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
function cv(e) {
  let t, n, r = (
    /*tooltip_df*/
    e[3].x + ""
  ), o, f, u, a, _, c, d, h = (
    /*tooltip_df*/
    e[3].group + ""
  ), g, w, v, S, k = (
    /*tooltip_df*/
    e[3].y + ""
  ), T, A, z, U, O, E, B;
  return {
    c() {
      t = _e("div"), n = _e("div"), o = Ae(r), f = ve(), u = _e("div"), a = _e("div"), _ = _e("span"), c = ve(), d = _e("div"), g = Ae(h), w = Ae(":"), v = ve(), S = _e("div"), T = Ae(k), A = ve(), z = _e("div"), U = ve(), O = _e("div"), y(
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
    m(G, X) {
      V(G, t, X), q(t, n), q(n, o), q(t, f), q(t, u), q(u, a), q(a, _), q(u, c), q(u, d), q(d, g), q(d, w), q(u, v), q(u, S), q(S, T), q(t, A), q(t, z), q(t, U), q(t, O), B = !0;
    },
    p(G, [X]) {
      (!B || X & /*tooltip_df*/
      8) && r !== (r = /*tooltip_df*/
      G[3].x + "") && Oe(o, r), (!B || X & /*tooltip_df*/
      8) && y(
        _,
        "background",
        /*tooltip_df*/
        G[3].color
      ), (!B || X & /*tooltip_df*/
      8) && h !== (h = /*tooltip_df*/
      G[3].group + "") && Oe(g, h), (!B || X & /*tooltip_df*/
      8) && k !== (k = /*tooltip_df*/
      G[3].y + "") && Oe(T, k), (!B || X & /*yScale, hovered_y*/
      5) && y(
        t,
        "top",
        /*yScale*/
        G[0](
          /*hovered_y*/
          G[2]
        ) - 5 + "px"
      ), (!B || X & /*hovered_x*/
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
      G && Q(t), G && E && E.end();
    }
  };
}
function gv(e, t, n) {
  let r, { yScale: o } = t, { hovered_x: f } = t, { hovered_y: u } = t, { hovered_group: a } = t, { hovered_color: _ } = t, { hovered_x_cat: c } = t;
  return e.$$set = (d) => {
    "yScale" in d && n(0, o = d.yScale), "hovered_x" in d && n(1, f = d.hovered_x), "hovered_y" in d && n(2, u = d.hovered_y), "hovered_group" in d && n(4, a = d.hovered_group), "hovered_color" in d && n(5, _ = d.hovered_color), "hovered_x_cat" in d && n(6, c = d.hovered_x_cat);
  }, e.$$.update = () => {
    e.$$.dirty & /*hovered_x_cat, hovered_color, hovered_group, hovered_y*/
    116 && n(3, r = {
      x: c,
      color: _,
      group: a,
      y: u
    });
  }, [
    o,
    f,
    u,
    r,
    a,
    _,
    c
  ];
}
class dv extends ct {
  constructor(t) {
    super(), ht(this, t, gv, cv, ft, {
      yScale: 0,
      hovered_x: 1,
      hovered_y: 2,
      hovered_group: 4,
      hovered_color: 5,
      hovered_x_cat: 6
    });
  }
}
function Cc(e, t, n) {
  const r = e.slice();
  return r[16] = t[n], r;
}
function Lc(e) {
  let t, n, r = (
    /*tooltip_data*/
    e[0][0].x + ""
  ), o, f, u, a, _, c, d = ke(
    /*tooltip_data*/
    e[0]
  ), h = [];
  for (let g = 0; g < d.length; g += 1)
    h[g] = Ec(Cc(e, d, g));
  return {
    c() {
      t = _e("div"), n = _e("h6"), o = Ae(r), f = ve(), u = _e("div");
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
      V(g, t, w), q(t, n), q(n, o), q(t, f), q(t, u);
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
      1) && r !== (r = /*tooltip_data*/
      g[0][0].x + "") && Oe(o, r), w & /*format_number, tooltip_data*/
      9) {
        d = ke(
          /*tooltip_data*/
          g[0]
        );
        let v;
        for (v = 0; v < d.length; v += 1) {
          const S = Cc(g, d, v);
          h[v] ? h[v].p(S, w) : (h[v] = Ec(S), h[v].c(), h[v].m(u, null));
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
      g && Q(t), xn(h, g), a(), g && _ && _.end();
    }
  };
}
function Ec(e) {
  let t, n, r, o, f, u, a = (
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
      t = _e("div"), n = _e("div"), r = _e("div"), o = _e("span"), f = ve(), u = _e("span"), _ = Ae(a), c = ve(), d = _e("div"), g = Ae(h), w = ve(), y(
        o,
        "background",
        /*bars*/
        e[16].colors
      ), y(o, "width", "9px"), y(o, "height", "9px"), y(o, "border-radius", "50%"), y(o, "margin", "3px"), y(o, "border", "1px solid rgba(0, 0, 0, 0.5)"), y(r, "width", "18px"), y(r, "display", "flex"), y(r, "align-items", "center"), y(r, "justify-content", "center"), y(n, "display", "flex"), y(n, "align-items", "center"), p(t, "class", "numbers"), y(t, "padding", "5px"), y(t, "font-size", "14px"), y(t, "display", "flex"), y(t, "flex-direction", "row"), y(t, "justify-content", "space-between"), y(t, "gap", "10px");
    },
    m(v, S) {
      V(v, t, S), q(t, n), q(n, r), q(r, o), q(n, f), q(n, u), q(u, _), q(t, c), q(t, d), q(d, g), q(t, w);
    },
    p(v, S) {
      S & /*tooltip_data*/
      1 && y(
        o,
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
      v && Q(t);
    }
  };
}
function mv(e) {
  let t, n = (
    /*tooltip_data*/
    e[0] && /*tooltip_data*/
    e[0].length > 0 && Lc(e)
  );
  return {
    c() {
      n && n.c(), t = Ee();
    },
    m(r, o) {
      n && n.m(r, o), V(r, t, o);
    },
    p(r, [o]) {
      /*tooltip_data*/
      r[0] && /*tooltip_data*/
      r[0].length > 0 ? n ? (n.p(r, o), o & /*tooltip_data*/
      1 && le(n, 1)) : (n = Lc(r), n.c(), le(n, 1), n.m(t.parentNode, t)) : n && (qe(), ae(n, 1, 1, () => {
        n = null;
      }), Ge());
    },
    i(r) {
      le(n);
    },
    o(r) {
      ae(n);
    },
    d(r) {
      r && Q(t), n && n.d(r);
    }
  };
}
const Rc = 20, Ic = 0;
function yv(e, t, n) {
  let r, o, f, { x: u } = t, { y: a } = t, { format_tooltip: _ } = t, { height: c } = t, { width: d } = t, { margin: h } = t, { buffer: g } = t, { tooltip_data: w } = t, { mode: v } = t, S, k, T;
  function A() {
    S = this.clientWidth, k = this.clientHeight, n(1, S), n(2, k);
  }
  return e.$$set = (z) => {
    "x" in z && n(6, u = z.x), "y" in z && n(7, a = z.y), "format_tooltip" in z && n(8, _ = z.format_tooltip), "height" in z && n(9, c = z.height), "width" in z && n(10, d = z.width), "margin" in z && n(11, h = z.margin), "buffer" in z && n(12, g = z.buffer), "tooltip_data" in z && n(0, w = z.tooltip_data), "mode" in z && n(13, v = z.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*tooltip_data, maxYValue*/
    16385 && (n(14, T = Math.max(...w.map((z) => z.y_og))), n(0, w = w.map((z) => ({ ...z })).sort((z, U) => U.y_og - z.y_og || U.y_og - T))), e.$$.dirty & /*mode, tooltip_data*/
    8193 && v === "percent" && w.length > 0) {
      n(0, w[w.length - 1].y_og = w[w.length - 1].y, w);
      for (let z = 0; z < w.length; z++)
        n(0, w[z].y_og = w[z].y - w[z].y_start, w);
    }
    e.$$.dirty & /*tooltip_data*/
    1 && console.log("tooltip_data", w), e.$$.dirty & /*x, tooltipWidth, width*/
    1090 && n(5, r = u + S > d ? u - S - Rc : u + Rc), e.$$.dirty & /*y, tooltipHeight, height, margin, buffer*/
    6788 && n(4, o = a + k > c - h - g ? a - k - Ic - h - g : a + Ic), e.$$.dirty & /*format_tooltip*/
    256 && n(3, f = hn(_));
  }, [
    w,
    S,
    k,
    f,
    o,
    r,
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
class bv extends ct {
  constructor(t) {
    super(), ht(this, t, yv, mv, ft, {
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
const { Map: Wu } = h6;
function Oc(e, t, n) {
  const r = e.slice();
  return r[103] = t[n], r[105] = n, r;
}
function Dc(e, t, n) {
  const r = e.slice();
  return r[24] = t[n], r[105] = n, r;
}
function Nc(e, t, n) {
  const r = e.slice();
  return r[107] = t[n], r;
}
function Uc(e, t, n) {
  const r = e.slice();
  return r[110] = t[n].group, r[111] = t[n].colors, r;
}
function Pc(e) {
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
        e[25] + nr + "px"
      );
    },
    m(r, o) {
      V(r, t, o), q(t, n);
    },
    p(r, o) {
      o[0] & /*header*/
      4 && Oe(
        n,
        /*header*/
        r[2]
      ), o[0] & /*title_align*/
      8 && y(
        t,
        "text-align",
        /*title_align*/
        r[3]
      ), o[0] & /*title_color*/
      16 && y(
        t,
        "color",
        /*title_color*/
        r[4]
      ), o[0] & /*title_font_size*/
      32 && y(
        t,
        "font-size",
        /*title_font_size*/
        r[5] + "px"
      ), o[0] & /*title_font_weight*/
      64 && y(
        t,
        "font-weight",
        /*title_font_weight*/
        r[6]
      ), o[0] & /*label_height*/
      33554432 && y(
        t,
        "margin-left",
        /*label_height*/
        r[25] + nr + "px"
      );
    },
    d(r) {
      r && Q(t);
    }
  };
}
function Fc(e) {
  let t, n = ke(
    /*legend_cats*/
    e[52]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = Wc(Uc(e, n, o));
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = Ee();
    },
    m(o, f) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, f);
      V(o, t, f);
    },
    p(o, f) {
      if (f[1] & /*hover_legend, legend_cats, current_categories, categories*/
      2097413) {
        n = ke(
          /*legend_cats*/
          o[52]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = Uc(o, n, u);
          r[u] ? r[u].p(a, f) : (r[u] = Wc(a), r[u].c(), r[u].m(t.parentNode, t));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = n.length;
      }
    },
    d(o) {
      o && Q(t), xn(r, o);
    }
  };
}
function Wc(e) {
  let t, n, r, o, f, u, a = (
    /*group*/
    e[110].replace(/\.\d+$/, "") + ""
  ), _, c, d, h, g;
  function w() {
    return (
      /*mouseover_handler*/
      e[76](
        /*group*/
        e[110]
      )
    );
  }
  function v() {
    return (
      /*click_handler*/
      e[77](
        /*group*/
        e[110]
      )
    );
  }
  return {
    c() {
      t = _e("p"), n = ze("svg"), r = ze("path"), u = ve(), _ = Ae(a), c = ve(), p(r, "d", "M 0 5.28 L 6 5.28 L 6 12 L 0 12 Z M 9 0 L 15 0 L 15 12 L 9 12 Z M 18 7.2 L 24 7.2 L 24 12 L 18 12 Z"), p(r, "fill", o = /*colors*/
      e[111]), p(r, "stroke", f = /*colors*/
      e[111]), p(r, "stroke-width", "1"), p(n, "width", "24"), p(n, "height", "12"), p(n, "viewBox", "0 0 24 12"), y(n, "display", "inline-block"), y(n, "vertical-align", "middle"), p(t, "style", d = /*hover_legend*/
      e[39] && /*hover_legend*/
      e[39] !== /*group*/
      e[110] && /*current_categories*/
      e[33].includes(
        /*hover_legend*/
        e[39]
      ) || !/*categories*/
      e[31][
        /*group*/
        e[110]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;");
    },
    m(S, k) {
      V(S, t, k), q(t, n), q(n, r), q(t, u), q(t, _), q(t, c), h || (g = [
        lt(t, "mouseover", w),
        lt(t, "click", v)
      ], h = !0);
    },
    p(S, k) {
      e = S, k[1] & /*legend_cats*/
      2097152 && o !== (o = /*colors*/
      e[111]) && p(r, "fill", o), k[1] & /*legend_cats*/
      2097152 && f !== (f = /*colors*/
      e[111]) && p(r, "stroke", f), k[1] & /*legend_cats*/
      2097152 && a !== (a = /*group*/
      e[110].replace(/\.\d+$/, "") + "") && Oe(_, a), k[1] & /*hover_legend, legend_cats, current_categories, categories*/
      2097413 && d !== (d = /*hover_legend*/
      e[39] && /*hover_legend*/
      e[39] !== /*group*/
      e[110] && /*current_categories*/
      e[33].includes(
        /*hover_legend*/
        e[39]
      ) || !/*categories*/
      e[31][
        /*group*/
        e[110]
      ] ? "opacity: 0.3; margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 300ms ease; display: flex; place-items: center; column-gap: 3px;" : "margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: opacity 100ms ease; display: flex; place-items: center; column-gap: 3px;") && p(t, "style", d);
    },
    d(S) {
      S && Q(t), h = !1, Ht(g);
    }
  };
}
function Bc(e, t) {
  let n, r, o;
  return r = new _a({
    props: {
      y1: (
        /*yScale*/
        t[30](
          /*tickValue*/
          t[107]
        )
      ),
      width: (
        /*width*/
        t[0]
      ),
      space_between_ticks_and_gridline: Bu,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[34]
      ),
      height: (
        /*height*/
        t[7]
      ),
      line_generator_space: u0,
      ticklabel: (
        /*format_number*/
        t[36](
          /*tickValue*/
          t[107]
        )
      ),
      font_size_yticks: (
        /*font_size_yticks*/
        t[18]
      ),
      tweenOptions: {
        y1: {
          easing: _t,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Ee(), Qe(r.$$.fragment), this.first = n;
    },
    m(f, u) {
      V(f, n, u), Ke(r, f, u), o = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[0] & /*yScale, yaxis_ticks*/
      1073807360 && (a.y1 = /*yScale*/
      t[30](
        /*tickValue*/
        t[107]
      )), u[0] & /*width*/
      1 && (a.width = /*width*/
      t[0]), u[1] & /*y_lines_spacing*/
      8 && (a.y_lines_spacing = /*y_lines_spacing*/
      t[34]), u[0] & /*height*/
      128 && (a.height = /*height*/
      t[7]), u[0] & /*yScale, yaxis_ticks*/
      1073807360 | u[1] & /*format_number*/
      32 && (a.ticklabel = /*format_number*/
      t[36](
        /*tickValue*/
        t[107]
      )), u[0] & /*font_size_yticks*/
      262144 && (a.font_size_yticks = /*font_size_yticks*/
      t[18]), r.$set(a);
    },
    i(f) {
      o || (le(r.$$.fragment, f), o = !0);
    },
    o(f) {
      ae(r.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Q(n), Je(r, f);
    }
  };
}
function Hc(e) {
  let t, n = (
    /*closestLabelX*/
    e[50] !== 0 && /*nextLabelX*/
    e[49] !== 0 && Yc(e)
  );
  return {
    c() {
      n && n.c(), t = Ee();
    },
    m(r, o) {
      n && n.m(r, o), V(r, t, o);
    },
    p(r, o) {
      /*closestLabelX*/
      r[50] !== 0 && /*nextLabelX*/
      r[49] !== 0 ? n ? n.p(r, o) : (n = Yc(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && Q(t), n && n.d(r);
    }
  };
}
function Yc(e) {
  let t, n, r, o, f;
  return {
    c() {
      t = ze("rect"), p(t, "style", "fill: rgba(0, 0, 0, 0.1); /* Adjust color and opacity as needed */ position: absolute; top: 0; z-index: -1; transition: 0.2s ease;"), p(t, "x", n = /*closestLabelX*/
      e[50] - /*labelPositions*/
      (e[48][1] - /*labelPositions*/
      e[48][0]) / 2), p(t, "width", r = /*labelPositions*/
      e[48][1] - /*labelPositions*/
      e[48][0]), p(t, "y", o = /*yScale*/
      e[30](
        /*yScale*/
        e[30].ticks(
          /*yaxis_ticks*/
          e[16]
        )[
          /*yScale*/
          e[30].ticks(
            /*yaxis_ticks*/
            e[16]
          ).length - 1
        ]
      )), p(t, "height", f = /*yScale*/
      e[30](
        /*yScale*/
        e[30].ticks(
          /*yaxis_ticks*/
          e[16]
        )[0]
      ) - /*yScale*/
      e[30](
        /*yScale*/
        e[30].ticks(
          /*yaxis_ticks*/
          e[16]
        )[
          /*yScale*/
          e[30].ticks(
            /*yaxis_ticks*/
            e[16]
          ).length - 1
        ]
      ));
    },
    m(u, a) {
      V(u, t, a);
    },
    p(u, a) {
      a[1] & /*closestLabelX, labelPositions*/
      655360 && n !== (n = /*closestLabelX*/
      u[50] - /*labelPositions*/
      (u[48][1] - /*labelPositions*/
      u[48][0]) / 2) && p(t, "x", n), a[1] & /*labelPositions*/
      131072 && r !== (r = /*labelPositions*/
      u[48][1] - /*labelPositions*/
      u[48][0]) && p(t, "width", r), a[0] & /*yScale, yaxis_ticks*/
      1073807360 && o !== (o = /*yScale*/
      u[30](
        /*yScale*/
        u[30].ticks(
          /*yaxis_ticks*/
          u[16]
        )[
          /*yScale*/
          u[30].ticks(
            /*yaxis_ticks*/
            u[16]
          ).length - 1
        ]
      )) && p(t, "y", o), a[0] & /*yScale, yaxis_ticks*/
      1073807360 && f !== (f = /*yScale*/
      u[30](
        /*yScale*/
        u[30].ticks(
          /*yaxis_ticks*/
          u[16]
        )[0]
      ) - /*yScale*/
      u[30](
        /*yScale*/
        u[30].ticks(
          /*yaxis_ticks*/
          u[16]
        )[
          /*yScale*/
          u[30].ticks(
            /*yaxis_ticks*/
            u[16]
          ).length - 1
        ]
      )) && p(t, "height", f);
    },
    d(u) {
      u && Q(t);
    }
  };
}
function Xc(e, t) {
  let n, r, o, f, u, a, _, c, d;
  function h(A) {
    t[79](A);
  }
  function g(A) {
    t[80](A);
  }
  function w(A) {
    t[81](A);
  }
  function v(A) {
    t[82](A);
  }
  function S(A) {
    t[83](A);
  }
  function k(A) {
    t[84](A);
  }
  let T = {
    y_value: (
      /*data*/
      t[24].y
    ),
    x_value: (
      /*xScale*/
      t[28](
        /*data*/
        t[24].x
      ) + /*xSubgroup*/
      t[29](
        /*data*/
        t[24].group
      )
    ),
    x_cat: (
      /*data*/
      t[24].x
    ),
    group: (
      /*data*/
      t[24].group
    ),
    x: (
      /*mode*/
      t[23] === "grouped" ? (
        /*xScale*/
        t[28](
          /*data*/
          t[24].x
        ) + /*xSubgroup*/
        t[29](
          /*data*/
          t[24].group
        )
      ) : (
        /*xScale*/
        t[28](
          /*data*/
          t[24].x
        )
      )
    ),
    y: (
      /*yScale*/
      t[30](
        /*data*/
        t[24].y
      )
    ),
    width: (
      /*xSubgroup*/
      t[29].bandwidth()
    ),
    height: (
      /*yScale*/
      t[30](
        /*data*/
        t[24].y_start
      ) - /*yScale*/
      t[30](
        /*data*/
        t[24].y
      )
    ),
    color: (
      /*data*/
      t[24].colors
    ),
    hover_legend: (
      /*hover_legend*/
      t[39]
    ),
    current_categories: (
      /*current_categories*/
      t[33]
    ),
    mode: (
      /*mode*/
      t[23]
    ),
    xScale: (
      /*xScale*/
      t[28]
    ),
    tweenOptions: {
      x: {
        easing: _t,
        duration: 1e3
      },
      width: {
        easing: _t,
        duration: 1e3
      },
      height: {
        easing: _t,
        duration: 1e3
      },
      y: {
        easing: _t,
        duration: 1e3
      }
    }
  };
  return (
    /*hovered_y*/
    t[40] !== void 0 && (T.hovered_y = /*hovered_y*/
    t[40]), /*hovered_x*/
    t[41] !== void 0 && (T.hovered_x = /*hovered_x*/
    t[41]), /*hovered_group*/
    t[42] !== void 0 && (T.hovered_group = /*hovered_group*/
    t[42]), /*hovered_color*/
    t[43] !== void 0 && (T.hovered_color = /*hovered_color*/
    t[43]), /*hovered_x_cat*/
    t[35] !== void 0 && (T.hovered_x_cat = /*hovered_x_cat*/
    t[35]), /*tooltip_axis_x*/
    t[44] !== void 0 && (T.tooltip_axis_x = /*tooltip_axis_x*/
    t[44]), r = new av({ props: T }), st.push(() => Ot(r, "hovered_y", h)), st.push(() => Ot(r, "hovered_x", g)), st.push(() => Ot(r, "hovered_group", w)), st.push(() => Ot(r, "hovered_color", v)), st.push(() => Ot(r, "hovered_x_cat", S)), st.push(() => Ot(r, "tooltip_axis_x", k)), {
      key: e,
      first: null,
      c() {
        n = Ee(), Qe(r.$$.fragment), this.first = n;
      },
      m(A, z) {
        V(A, n, z), Ke(r, A, z), d = !0;
      },
      p(A, z) {
        t = A;
        const U = {};
        z[1] & /*filtered_data*/
        2 && (U.y_value = /*data*/
        t[24].y), z[0] & /*xScale, xSubgroup*/
        805306368 | z[1] & /*filtered_data*/
        2 && (U.x_value = /*xScale*/
        t[28](
          /*data*/
          t[24].x
        ) + /*xSubgroup*/
        t[29](
          /*data*/
          t[24].group
        )), z[1] & /*filtered_data*/
        2 && (U.x_cat = /*data*/
        t[24].x), z[1] & /*filtered_data*/
        2 && (U.group = /*data*/
        t[24].group), z[0] & /*mode, xScale, xSubgroup*/
        813694976 | z[1] & /*filtered_data*/
        2 && (U.x = /*mode*/
        t[23] === "grouped" ? (
          /*xScale*/
          t[28](
            /*data*/
            t[24].x
          ) + /*xSubgroup*/
          t[29](
            /*data*/
            t[24].group
          )
        ) : (
          /*xScale*/
          t[28](
            /*data*/
            t[24].x
          )
        )), z[0] & /*yScale*/
        1073741824 | z[1] & /*filtered_data*/
        2 && (U.y = /*yScale*/
        t[30](
          /*data*/
          t[24].y
        )), z[0] & /*xSubgroup*/
        536870912 && (U.width = /*xSubgroup*/
        t[29].bandwidth()), z[0] & /*yScale*/
        1073741824 | z[1] & /*filtered_data*/
        2 && (U.height = /*yScale*/
        t[30](
          /*data*/
          t[24].y_start
        ) - /*yScale*/
        t[30](
          /*data*/
          t[24].y
        )), z[1] & /*filtered_data*/
        2 && (U.color = /*data*/
        t[24].colors), z[1] & /*hover_legend*/
        256 && (U.hover_legend = /*hover_legend*/
        t[39]), z[1] & /*current_categories*/
        4 && (U.current_categories = /*current_categories*/
        t[33]), z[0] & /*mode*/
        8388608 && (U.mode = /*mode*/
        t[23]), z[0] & /*xScale*/
        268435456 && (U.xScale = /*xScale*/
        t[28]), !o && z[1] & /*hovered_y*/
        512 && (o = !0, U.hovered_y = /*hovered_y*/
        t[40], It(() => o = !1)), !f && z[1] & /*hovered_x*/
        1024 && (f = !0, U.hovered_x = /*hovered_x*/
        t[41], It(() => f = !1)), !u && z[1] & /*hovered_group*/
        2048 && (u = !0, U.hovered_group = /*hovered_group*/
        t[42], It(() => u = !1)), !a && z[1] & /*hovered_color*/
        4096 && (a = !0, U.hovered_color = /*hovered_color*/
        t[43], It(() => a = !1)), !_ && z[1] & /*hovered_x_cat*/
        16 && (_ = !0, U.hovered_x_cat = /*hovered_x_cat*/
        t[35], It(() => _ = !1)), !c && z[1] & /*tooltip_axis_x*/
        8192 && (c = !0, U.tooltip_axis_x = /*tooltip_axis_x*/
        t[44], It(() => c = !1)), r.$set(U);
      },
      i(A) {
        d || (le(r.$$.fragment, A), d = !0);
      },
      o(A) {
        ae(r.$$.fragment, A), d = !1;
      },
      d(A) {
        A && Q(n), Je(r, A);
      }
    }
  );
}
function qc(e) {
  let t = [], n = new Wu(), r, o, f = ke(
    /*labelPositions*/
    e[48]
  );
  const u = (a) => (
    /*x*/
    a[27][
      /*i*/
      a[105]
    ]
  );
  for (let a = 0; a < f.length; a += 1) {
    let _ = Oc(e, f, a), c = u(_);
    n.set(c, t[a] = Gc(c, _));
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      r = Ee();
    },
    m(a, _) {
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(a, _);
      V(a, r, _), o = !0;
    },
    p(a, _) {
      _[0] & /*x, font_size_xticks, rotation_xaxis, text_anchor_x_axis, dominant_baseline_x_axis, dx, dy*/
      134248192 | _[1] & /*labelPositions, x_ticks_spacing*/
      1179648 && (f = ke(
        /*labelPositions*/
        a[48]
      ), qe(), t = kn(t, _, u, 1, a, f, n, r.parentNode, Kn, Gc, r, Oc), Ge());
    },
    i(a) {
      if (!o) {
        for (let _ = 0; _ < f.length; _ += 1)
          le(t[_]);
        o = !0;
      }
    },
    o(a) {
      for (let _ = 0; _ < t.length; _ += 1)
        ae(t[_]);
      o = !1;
    },
    d(a) {
      a && Q(r);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_].d(a);
    }
  };
}
function Gc(e, t) {
  let n, r, o;
  return r = new hv({
    props: {
      tweenOptions: {
        y: {
          easing: _t,
          duration: 1e3
        },
        x: {
          easing: _t,
          duration: 1e3
        }
      },
      x: (
        /*pos*/
        t[103]
      ),
      y: (
        /*x_ticks_spacing*/
        t[51]
      ),
      text: (
        /*x*/
        t[27][
          /*i*/
          t[105]
        ]
      ),
      font_size_xticks: (
        /*font_size_xticks*/
        t[12]
      ),
      rotation: (
        /*rotation_xaxis*/
        t[10]
      ),
      colour_text: "black",
      text_anchor_x_axis: (
        /*text_anchor_x_axis*/
        t[14]
      ),
      dominant_baseline_x_axis: (
        /*dominant_baseline_x_axis*/
        t[13]
      ),
      dx: (
        /*dx*/
        t[8]
      ),
      dy: (
        /*dy*/
        t[9]
      )
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Ee(), Qe(r.$$.fragment), this.first = n;
    },
    m(f, u) {
      V(f, n, u), Ke(r, f, u), o = !0;
    },
    p(f, u) {
      t = f;
      const a = {};
      u[1] & /*labelPositions*/
      131072 && (a.x = /*pos*/
      t[103]), u[1] & /*x_ticks_spacing*/
      1048576 && (a.y = /*x_ticks_spacing*/
      t[51]), u[0] & /*x*/
      134217728 | u[1] & /*labelPositions*/
      131072 && (a.text = /*x*/
      t[27][
        /*i*/
        t[105]
      ]), u[0] & /*font_size_xticks*/
      4096 && (a.font_size_xticks = /*font_size_xticks*/
      t[12]), u[0] & /*rotation_xaxis*/
      1024 && (a.rotation = /*rotation_xaxis*/
      t[10]), u[0] & /*text_anchor_x_axis*/
      16384 && (a.text_anchor_x_axis = /*text_anchor_x_axis*/
      t[14]), u[0] & /*dominant_baseline_x_axis*/
      8192 && (a.dominant_baseline_x_axis = /*dominant_baseline_x_axis*/
      t[13]), u[0] & /*dx*/
      256 && (a.dx = /*dx*/
      t[8]), u[0] & /*dy*/
      512 && (a.dy = /*dy*/
      t[9]), r.$set(a);
    },
    i(f) {
      o || (le(r.$$.fragment, f), o = !0);
    },
    o(f) {
      ae(r.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Q(n), Je(r, f);
    }
  };
}
function Zc(e) {
  let t, n, r, o, f, u, a, _, c;
  function d(k) {
    e[85](k);
  }
  function h(k) {
    e[86](k);
  }
  function g(k) {
    e[87](k);
  }
  function w(k) {
    e[88](k);
  }
  function v(k) {
    e[89](k);
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
      e[28]
    ),
    y_scale: (
      /*yScale*/
      e[30]
    ),
    margin: f0,
    filtered_data: (
      /*filtered_data*/
      e[32]
    ),
    type: (
      /*type*/
      e[22]
    ),
    chart: pv,
    tooltip: (
      /*tooltip*/
      e[21]
    ),
    buffer: $o,
    labelPositions: (
      /*labelPositions*/
      e[48]
    )
  };
  return (
    /*tooltip2_array_values*/
    e[45] !== void 0 && (S.tooltip2_array_values = /*tooltip2_array_values*/
    e[45]), /*m*/
    e[46] !== void 0 && (S.m = /*m*/
    e[46]), /*listener*/
    e[47] !== void 0 && (S.listener = /*listener*/
    e[47]), /*closestLabelX*/
    e[50] !== void 0 && (S.closestLabelX = /*closestLabelX*/
    e[50]), /*nextLabelX*/
    e[49] !== void 0 && (S.nextLabelX = /*nextLabelX*/
    e[49]), n = new i0({ props: S }), st.push(() => Ot(n, "tooltip2_array_values", d)), st.push(() => Ot(n, "m", h)), st.push(() => Ot(n, "listener", g)), st.push(() => Ot(n, "closestLabelX", w)), st.push(() => Ot(n, "nextLabelX", v)), {
      c() {
        t = ze("g"), Qe(n.$$.fragment), p(t, "transform", _ = "translate(" + /*ticks_label_width*/
        (e[38] + /*label_height*/
        e[25] + 10) + " 10)");
      },
      m(k, T) {
        V(k, t, T), Ke(n, t, null), c = !0;
      },
      p(k, T) {
        const A = {};
        T[0] & /*height*/
        128 && (A.height = /*height*/
        k[7]), T[0] & /*width*/
        1 && (A.width = /*width*/
        k[0]), T[0] & /*xScale*/
        268435456 && (A.x_scale = /*xScale*/
        k[28]), T[0] & /*yScale*/
        1073741824 && (A.y_scale = /*yScale*/
        k[30]), T[1] & /*filtered_data*/
        2 && (A.filtered_data = /*filtered_data*/
        k[32]), T[0] & /*type*/
        4194304 && (A.type = /*type*/
        k[22]), T[0] & /*tooltip*/
        2097152 && (A.tooltip = /*tooltip*/
        k[21]), T[1] & /*labelPositions*/
        131072 && (A.labelPositions = /*labelPositions*/
        k[48]), !r && T[1] & /*tooltip2_array_values*/
        16384 && (r = !0, A.tooltip2_array_values = /*tooltip2_array_values*/
        k[45], It(() => r = !1)), !o && T[1] & /*m*/
        32768 && (o = !0, A.m = /*m*/
        k[46], It(() => o = !1)), !f && T[1] & /*listener*/
        65536 && (f = !0, A.listener = /*listener*/
        k[47], It(() => f = !1)), !u && T[1] & /*closestLabelX*/
        524288 && (u = !0, A.closestLabelX = /*closestLabelX*/
        k[50], It(() => u = !1)), !a && T[1] & /*nextLabelX*/
        262144 && (a = !0, A.nextLabelX = /*nextLabelX*/
        k[49], It(() => a = !1)), n.$set(A), (!c || T[0] & /*label_height*/
        33554432 | T[1] & /*ticks_label_width*/
        128 && _ !== (_ = "translate(" + /*ticks_label_width*/
        (k[38] + /*label_height*/
        k[25] + 10) + " 10)")) && p(t, "transform", _);
      },
      i(k) {
        c || (le(n.$$.fragment, k), c = !0);
      },
      o(k) {
        ae(n.$$.fragment, k), c = !1;
      },
      d(k) {
        k && Q(t), Je(n);
      }
    }
  );
}
function jc(e) {
  let t, n;
  return t = new bv({
    props: {
      x: (
        /*m*/
        e[46].x
      ),
      y: (
        /*m*/
        e[46].y
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
      margin: f0,
      buffer: $o,
      tooltip_data: (
        /*tooltip2_array_values*/
        e[45]
      ),
      mode: (
        /*mode*/
        e[23]
      )
    }
  }), {
    c() {
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[1] & /*m*/
      32768 && (f.x = /*m*/
      r[46].x), o[1] & /*m*/
      32768 && (f.y = /*m*/
      r[46].y), o[0] & /*format_tooltip*/
      524288 && (f.format_tooltip = /*format_tooltip*/
      r[19]), o[0] & /*height*/
      128 && (f.height = /*height*/
      r[7]), o[0] & /*width*/
      1 && (f.width = /*width*/
      r[0]), o[1] & /*tooltip2_array_values*/
      16384 && (f.tooltip_data = /*tooltip2_array_values*/
      r[45]), o[0] & /*mode*/
      8388608 && (f.mode = /*mode*/
      r[23]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function Kc(e) {
  let t, n;
  return t = new dv({
    props: {
      yScale: (
        /*yScale*/
        e[30]
      ),
      hovered_x: (
        /*hovered_x*/
        e[41]
      ),
      hovered_y: (
        /*hovered_y*/
        e[40]
      ),
      hovered_color: (
        /*hovered_color*/
        e[43]
      ),
      hovered_group: (
        /*hovered_group*/
        e[42]
      ),
      hovered_x_cat: (
        /*hovered_x_cat*/
        e[35]
      )
    }
  }), {
    c() {
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[0] & /*yScale*/
      1073741824 && (f.yScale = /*yScale*/
      r[30]), o[1] & /*hovered_x*/
      1024 && (f.hovered_x = /*hovered_x*/
      r[41]), o[1] & /*hovered_y*/
      512 && (f.hovered_y = /*hovered_y*/
      r[40]), o[1] & /*hovered_color*/
      4096 && (f.hovered_color = /*hovered_color*/
      r[43]), o[1] & /*hovered_group*/
      2048 && (f.hovered_group = /*hovered_group*/
      r[42]), o[1] & /*hovered_x_cat*/
      16 && (f.hovered_x_cat = /*hovered_x_cat*/
      r[35]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function wv(e) {
  let t, n, r, o, f, u, a = [], _ = new Wu(), c, d, h, g = [], w = new Wu(), v, S = !Number.isNaN(
    /*x_ticks_spacing*/
    e[51]
  ), k, T, A, z, U, O, E, B = (
    /*header*/
    e[2] && Pc(e)
  ), G = (
    /*show_legend*/
    e[1] && Fc(e)
  );
  u = new o0({
    props: {
      axis_title_position: (
        /*width*/
        (e[0] + /*y_lines_spacing*/
        e[34]) / 2
      ),
      tweenOptions: {
        axis_title_position: {
          easing: _t,
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
        e[26]
      ),
      height: (
        /*height*/
        e[7]
      )
    }
  });
  let X = ke(
    /*yScale*/
    e[30].ticks(
      /*yaxis_ticks*/
      e[16]
    )
  );
  const D = (C) => (
    /*tickValue*/
    C[107]
  );
  for (let C = 0; C < X.length; C += 1) {
    let R = Nc(e, X, C), ce = D(R);
    _.set(ce, a[C] = Bc(ce, R));
  }
  d = new l0({
    props: {
      axis_title_position: (
        /*yScale*/
        (e[30](
          /*ticks*/
          e[37][0]
        ) + /*yScale*/
        e[30](
          /*ticks*/
          e[37][
            /*ticks*/
            e[37].length - 1
          ]
        )) / 2
      ),
      tweenOptions: {
        axis_title_position: {
          easing: _t,
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
        e[25]
      )
    }
  });
  let j = (
    /*tooltip*/
    e[21] === "vertical_line" && Hc(e)
  ), se = ke(
    /*filtered_data*/
    e[32]
  );
  const de = (C) => (
    /*data*/
    C[24].id
  );
  for (let C = 0; C < se.length; C += 1) {
    let R = Dc(e, se, C), ce = de(R);
    w.set(ce, g[C] = Xc(ce, R));
  }
  let ie = S && qc(e), te = (
    /*tooltip*/
    e[21] === "vertical_line" && Zc(e)
  ), J = (
    /*tooltip*/
    e[21] === "vertical_line" && /*closestLabelX*/
    e[50] !== 0 && /*nextLabelX*/
    e[49] !== 0 && jc(e)
  ), W = (
    /*hovered_group*/
    e[42] && /*tooltip*/
    e[21] === "single" && Kc(e)
  );
  return {
    c() {
      B && B.c(), t = ve(), n = _e("div"), G && G.c(), r = ve(), o = _e("div"), f = ze("svg"), Qe(u.$$.fragment);
      for (let C = 0; C < a.length; C += 1)
        a[C].c();
      c = Ee(), Qe(d.$$.fragment), j && j.c(), h = Ee();
      for (let C = 0; C < g.length; C += 1)
        g[C].c();
      v = Ee(), ie && ie.c(), k = Ee(), te && te.c(), T = ve(), J && J.c(), A = ve(), W && W.c(), p(n, "class", "categories"), y(n, "display", "flex"), y(n, "place-items", "center"), y(n, "justify-content", "flex-start"), y(n, "flex-direction", "row"), y(n, "flex-wrap", "wrap"), y(n, "column-gap", "10px"), y(n, "row-gap", "5px"), y(
        n,
        "margin-left",
        /*label_height*/
        e[25] + nr + "px"
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
      ), p(o, "class", "chart"), y(o, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[90].call(o)
      ));
    },
    m(C, R) {
      B && B.m(C, R), V(C, t, R), V(C, n, R), G && G.m(n, null), V(C, r, R), V(C, o, R), q(o, f), Ke(u, f, null);
      for (let ce = 0; ce < a.length; ce += 1)
        a[ce] && a[ce].m(f, null);
      q(f, c), Ke(d, f, null), j && j.m(f, null), q(f, h);
      for (let ce = 0; ce < g.length; ce += 1)
        g[ce] && g[ce].m(f, null);
      q(f, v), ie && ie.m(f, null), q(f, k), te && te.m(f, null), q(o, T), J && J.m(o, null), q(o, A), W && W.m(o, null), z = rr(
        o,
        /*div1_elementresize_handler*/
        e[90].bind(o)
      ), U = !0, O || (E = lt(
        n,
        "mouseleave",
        /*mouseleave_handler*/
        e[78]
      ), O = !0);
    },
    p(C, R) {
      /*header*/
      C[2] ? B ? B.p(C, R) : (B = Pc(C), B.c(), B.m(t.parentNode, t)) : B && (B.d(1), B = null), /*show_legend*/
      C[1] ? G ? G.p(C, R) : (G = Fc(C), G.c(), G.m(n, null)) : G && (G.d(1), G = null), (!U || R[0] & /*label_height*/
      33554432) && y(
        n,
        "margin-left",
        /*label_height*/
        C[25] + nr + "px"
      );
      const ce = {};
      R[0] & /*width*/
      1 | R[1] & /*y_lines_spacing*/
      8 && (ce.axis_title_position = /*width*/
      (C[0] + /*y_lines_spacing*/
      C[34]) / 2), R[0] & /*x_label*/
      32768 && (ce.x_label = /*x_label*/
      C[15]), R[0] & /*font_size_xaxis*/
      2048 && (ce.font_size_xaxis = /*font_size_xaxis*/
      C[11]), R[0] & /*label_height_x_axis*/
      67108864 && (ce.label_height_x_axis = /*label_height_x_axis*/
      C[26]), R[0] & /*height*/
      128 && (ce.height = /*height*/
      C[7]), u.$set(ce), R[0] & /*yScale, yaxis_ticks, width, height, font_size_yticks*/
      1074069633 | R[1] & /*y_lines_spacing, format_number*/
      40 && (X = ke(
        /*yScale*/
        C[30].ticks(
          /*yaxis_ticks*/
          C[16]
        )
      ), qe(), a = kn(a, R, D, 1, C, X, _, f, Kn, Bc, c, Nc), Ge());
      const he = {};
      R[0] & /*yScale*/
      1073741824 | R[1] & /*ticks*/
      64 && (he.axis_title_position = /*yScale*/
      (C[30](
        /*ticks*/
        C[37][0]
      ) + /*yScale*/
      C[30](
        /*ticks*/
        C[37][
          /*ticks*/
          C[37].length - 1
        ]
      )) / 2), R[0] & /*y_label*/
      1048576 && (he.y_label = /*y_label*/
      C[20]), R[0] & /*font_size_yaxis*/
      131072 && (he.font_size_yaxis = /*font_size_yaxis*/
      C[17]), R[0] & /*label_height*/
      33554432 && (he.label_height = /*label_height*/
      C[25]), d.$set(he), /*tooltip*/
      C[21] === "vertical_line" ? j ? j.p(C, R) : (j = Hc(C), j.c(), j.m(f, h)) : j && (j.d(1), j = null), R[0] & /*xScale, xSubgroup, mode, yScale*/
      1887436800 | R[1] & /*filtered_data, hover_legend, current_categories, hovered_y, hovered_x, hovered_group, hovered_color, hovered_x_cat, tooltip_axis_x*/
      16150 && (se = ke(
        /*filtered_data*/
        C[32]
      ), qe(), g = kn(g, R, de, 1, C, se, w, f, Kn, Xc, v, Dc), Ge()), R[1] & /*x_ticks_spacing*/
      1048576 && (S = !Number.isNaN(
        /*x_ticks_spacing*/
        C[51]
      )), S ? ie ? (ie.p(C, R), R[1] & /*x_ticks_spacing*/
      1048576 && le(ie, 1)) : (ie = qc(C), ie.c(), le(ie, 1), ie.m(f, k)) : ie && (qe(), ae(ie, 1, 1, () => {
        ie = null;
      }), Ge()), /*tooltip*/
      C[21] === "vertical_line" ? te ? (te.p(C, R), R[0] & /*tooltip*/
      2097152 && le(te, 1)) : (te = Zc(C), te.c(), le(te, 1), te.m(f, null)) : te && (qe(), ae(te, 1, 1, () => {
        te = null;
      }), Ge()), (!U || R[0] & /*width*/
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
      C[50] !== 0 && /*nextLabelX*/
      C[49] !== 0 ? J ? (J.p(C, R), R[0] & /*tooltip*/
      2097152 | R[1] & /*closestLabelX, nextLabelX*/
      786432 && le(J, 1)) : (J = jc(C), J.c(), le(J, 1), J.m(o, A)) : J && (qe(), ae(J, 1, 1, () => {
        J = null;
      }), Ge()), /*hovered_group*/
      C[42] && /*tooltip*/
      C[21] === "single" ? W ? (W.p(C, R), R[0] & /*tooltip*/
      2097152 | R[1] & /*hovered_group*/
      2048 && le(W, 1)) : (W = Kc(C), W.c(), le(W, 1), W.m(o, null)) : W && (qe(), ae(W, 1, 1, () => {
        W = null;
      }), Ge());
    },
    i(C) {
      if (!U) {
        le(u.$$.fragment, C);
        for (let R = 0; R < X.length; R += 1)
          le(a[R]);
        le(d.$$.fragment, C);
        for (let R = 0; R < se.length; R += 1)
          le(g[R]);
        le(ie), le(te), le(J), le(W), U = !0;
      }
    },
    o(C) {
      ae(u.$$.fragment, C);
      for (let R = 0; R < a.length; R += 1)
        ae(a[R]);
      ae(d.$$.fragment, C);
      for (let R = 0; R < g.length; R += 1)
        ae(g[R]);
      ae(ie), ae(te), ae(J), ae(W), U = !1;
    },
    d(C) {
      C && (Q(t), Q(n), Q(r), Q(o)), B && B.d(C), G && G.d(), Je(u);
      for (let R = 0; R < a.length; R += 1)
        a[R].d();
      Je(d), j && j.d();
      for (let R = 0; R < g.length; R += 1)
        g[R].d();
      ie && ie.d(), te && te.d(), J && J.d(), W && W.d(), z(), O = !1, E();
    }
  };
}
const pv = "bar", f0 = 30, $o = 40;
let Jc = 0.1, u0 = 10;
const nr = 15, Bu = 5;
function vv(e, t, n) {
  let r, o, f, u, a, _, { data: c = [] } = t, { width: d = 800 } = t, { show_legend: h } = t, { header: g } = t, { title_align: w } = t, { title_color: v } = t, { title_font_size: S } = t, { title_font_weight: k } = t, { title_padding: T } = t, { height: A = 400 } = t, { dx: z = "0em" } = t, { dy: U = "0em" } = t, { rotation_xaxis: O = 0 } = t, { font_size_xaxis: E = 14 } = t, { font_size_xticks: B = 12 } = t, { dominant_baseline_x_axis: G = "middle" } = t, { text_anchor_x_axis: X = "middle" } = t, { x_axis_type: D } = t, { x_label: j } = t, { yaxis_ticks: se = 6 } = t, { format_yaxis: de = ",.3r" } = t, { font_size_yaxis: ie } = t, { font_size_yticks: te } = t, { format_tooltip: J = "" } = t, { y_label: W } = t, { tooltip_desc: C = "" } = t, { colorRange: R = [] } = t, { color_mapping: ce } = t, { annotation_dates: he = [] } = t, { legend_text: vt = [] } = t, { scale_x: Kt = "" } = t, { annotation_lines: Ze = 2 } = t, { colours: Ue = [] } = t, { tooltip: $e = "vertical_line" } = t, { interval: ut = "day" } = t, { type: He = "" } = t, { show_bar_labels: ue } = t, { position: me } = t, { colour_text: be } = t, { mode: $ } = t;
  function Ce(H) {
    let Lt = [];
    Lt = Object.keys(zt).filter((dt) => !H.includes(dt));
    for (let dt = 0; dt < H.length; dt++)
      n(31, zt[H[dt]] = !0, zt);
    for (let dt = 0; dt < Lt.length; dt++)
      n(31, zt[Lt[dt]] = !1, zt);
    return [zt, Lt];
  }
  let ye = $o, We = 20, je = $o, et, Ye = 10, Y, oe, Me, Tt, St, Xt, gt, zt = {}, en, kt = [], xt, tn, Un, nn = A - 40, on = 40;
  function Jn() {
    const Lt = document.createElement("canvas").getContext("2d"), dt = (zi, Gr) => {
      Lt.font = `${Gr}px Arial`;
      const { width: Zr } = Lt.measureText(zi), jr = Lt.measureText("M").actualBoundingBoxAscent + Lt.measureText("M").actualBoundingBoxDescent + 1;
      return { width: Zr, height: jr };
    }, ur = dt(Un, te);
    n(38, ye = ur.width);
    const Xr = dt(W, ie);
    n(25, Ye = Xr.height);
    const _i = dt(a, B);
    je = _i.width, et = _i.height;
    const qr = dt("M", E);
    n(26, Y = qr.height), n(68, We = ua(je, et, O)), n(72, nn = A - We - Y - et - nr - Bu), n(34, on = ye + Ye + nr + Bu);
  }
  Gu(Jn);
  let cn, Mn, fn, Tn, yt, Pn, gn, At = null, Sn = { x: 0, y: 0 }, zn = !1, Jt, Qn = 0, An = 0, K;
  const tt = (H) => n(39, oe = H), Ct = (H) => n(31, zt[H] = !zt[H], zt), dn = () => n(39, oe = null);
  function un(H) {
    cn = H, n(40, cn);
  }
  function Fn(H) {
    Mn = H, n(41, Mn);
  }
  function ii(H) {
    fn = H, n(42, fn);
  }
  function ai(H) {
    Tn = H, n(43, Tn);
  }
  function Yr(H) {
    yt = H, n(35, yt);
  }
  function Cn(H) {
    Pn = H, n(44, Pn);
  }
  function Ln(H) {
    At = H, n(45, At);
  }
  function Wi(H) {
    Sn = H, n(46, Sn);
  }
  function Bi(H) {
    zn = H, n(47, zn);
  }
  function fr(H) {
    An = H, n(50, An);
  }
  function si(H) {
    Qn = H, n(49, Qn);
  }
  function Si() {
    d = this.clientWidth, n(0, d);
  }
  return e.$$set = (H) => {
    "data" in H && n(24, c = H.data), "width" in H && n(0, d = H.width), "show_legend" in H && n(1, h = H.show_legend), "header" in H && n(2, g = H.header), "title_align" in H && n(3, w = H.title_align), "title_color" in H && n(4, v = H.title_color), "title_font_size" in H && n(5, S = H.title_font_size), "title_font_weight" in H && n(6, k = H.title_font_weight), "title_padding" in H && n(53, T = H.title_padding), "height" in H && n(7, A = H.height), "dx" in H && n(8, z = H.dx), "dy" in H && n(9, U = H.dy), "rotation_xaxis" in H && n(10, O = H.rotation_xaxis), "font_size_xaxis" in H && n(11, E = H.font_size_xaxis), "font_size_xticks" in H && n(12, B = H.font_size_xticks), "dominant_baseline_x_axis" in H && n(13, G = H.dominant_baseline_x_axis), "text_anchor_x_axis" in H && n(14, X = H.text_anchor_x_axis), "x_axis_type" in H && n(54, D = H.x_axis_type), "x_label" in H && n(15, j = H.x_label), "yaxis_ticks" in H && n(16, se = H.yaxis_ticks), "format_yaxis" in H && n(55, de = H.format_yaxis), "font_size_yaxis" in H && n(17, ie = H.font_size_yaxis), "font_size_yticks" in H && n(18, te = H.font_size_yticks), "format_tooltip" in H && n(19, J = H.format_tooltip), "y_label" in H && n(20, W = H.y_label), "tooltip_desc" in H && n(56, C = H.tooltip_desc), "colorRange" in H && n(57, R = H.colorRange), "color_mapping" in H && n(58, ce = H.color_mapping), "annotation_dates" in H && n(59, he = H.annotation_dates), "legend_text" in H && n(60, vt = H.legend_text), "scale_x" in H && n(61, Kt = H.scale_x), "annotation_lines" in H && n(62, Ze = H.annotation_lines), "colours" in H && n(63, Ue = H.colours), "tooltip" in H && n(21, $e = H.tooltip), "interval" in H && n(64, ut = H.interval), "type" in H && n(22, He = H.type), "show_bar_labels" in H && n(65, ue = H.show_bar_labels), "position" in H && n(66, me = H.position), "colour_text" in H && n(67, be = H.colour_text), "mode" in H && n(23, $ = H.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*data*/
    16777216 | e.$$.dirty[2] & /*names*/
    128 && (n(69, Me = [...new Set(c.map((H) => H.group))]), n(27, Tt = [...new Set(c.map((H) => H.x))]), n(70, en = Array.from(new Map(c.map((H) => [H.group, H])).values())), n(31, zt = Ce(Me)[0]), Ce(Me)[1]), e.$$.dirty[2] & /*include_legend*/
    256 && n(52, r = en.filter((H) => H.include_legend !== !1)), e.$$.dirty[1] & /*categories*/
    1 && n(33, xt = Object.keys(zt).filter((H) => zt[H])), e.$$.dirty[2] & /*names*/
    128 && n(33, xt = Me), e.$$.dirty[0] & /*data, mode, x, width*/
    159383553 | e.$$.dirty[1] & /*current_categories, filtered_data, y_lines_spacing*/
    14 | e.$$.dirty[2] & /*x_lines_spacing, scales*/
    1536 && (n(32, kt = c.filter(({ group: H }) => xt.includes(H))), $ === "stacked" ? n(32, kt = Ow(kt)) : $ === "percent" && n(32, kt = Dw(kt)), n(71, tn = Iw(kt, Tt, xt, d, Jc, $, on, u0, nn)), n(28, St = tn[0]), n(29, Xt = tn[1]), tn[2], n(30, gt = tn[3])), e.$$.dirty[1] & /*format_yaxis*/
    16777216 && n(36, o = hn(de)), e.$$.dirty[0] & /*yScale, yaxis_ticks*/
    1073807360 && n(37, f = gt.ticks(se)), e.$$.dirty[1] & /*ticks, format_number*/
    96) {
      let H = 0;
      f.forEach((Lt) => {
        const dt = o(Lt).toString();
        dt.length > H && (H = dt.length, Un = dt);
      });
    }
    if (e.$$.dirty[0] & /*xScale*/
    268435456 && n(75, u = St.domain()), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    8192 && (a = u.reduce((H, Lt) => H.length > Lt.length ? H : Lt)), e.$$.dirty[0] & /*height, label_height_x_axis*/
    67108992 | e.$$.dirty[2] & /*x_ticks_label_rotation_buffer*/
    64 && n(51, _ = A - We - Y - nr), e.$$.dirty[0] & /*label_height*/
    33554432, e.$$.dirty[1] & /*current_categories*/
    4 && (xt.length % 2 == 0 ? n(73, gn = xt.length / 2 - 0.5) : n(73, gn = Math.floor(xt.length / 2))), e.$$.dirty[1] & /*filtered_data, hovered_x_cat*/
    18 && kt.filter((H) => H.x === yt), e.$$.dirty[0] & /*data, xScale, xSubgroup, mode*/
    830472192 | e.$$.dirty[1] & /*current_categories*/
    4 | e.$$.dirty[2] & /*names, current_labels, iteration*/
    6272)
      if (n(48, Jt = []), n(74, K = []), n(74, K = [...new Set(c.map((H) => H.x))]), Me.length === 1)
        for (let H = 0; H < K.length; H++)
          n(48, Jt[H] = St(K[H]) + Xt(xt[0]) + Xt.bandwidth() / 2, Jt);
      else if ($ === "grouped")
        for (let H = 0; H < K.length; H++)
          n(48, Jt[H] = St(K[H]) + Xt(xt[0]) + Xt.bandwidth() * xt.length / 2 + Xt.bandwidth() * Jc * gn, Jt);
      else
        for (let H = 0; H < K.length; H++)
          n(48, Jt[H] = St(K[H]) + Xt.bandwidth() / 2, Jt);
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
    X,
    j,
    se,
    ie,
    te,
    J,
    W,
    $e,
    He,
    $,
    c,
    Ye,
    Y,
    Tt,
    St,
    Xt,
    gt,
    zt,
    kt,
    xt,
    on,
    yt,
    o,
    f,
    ye,
    oe,
    cn,
    Mn,
    fn,
    Tn,
    Pn,
    At,
    Sn,
    zn,
    Jt,
    Qn,
    An,
    _,
    r,
    T,
    D,
    de,
    C,
    R,
    ce,
    he,
    vt,
    Kt,
    Ze,
    Ue,
    ut,
    ue,
    me,
    be,
    We,
    Me,
    en,
    tn,
    nn,
    gn,
    K,
    u,
    tt,
    Ct,
    dn,
    un,
    Fn,
    ii,
    ai,
    Yr,
    Cn,
    Ln,
    Wi,
    Bi,
    fr,
    si,
    Si
  ];
}
class kv extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      vv,
      wv,
      ft,
      {
        data: 24,
        width: 0,
        show_legend: 1,
        header: 2,
        title_align: 3,
        title_color: 4,
        title_font_size: 5,
        title_font_weight: 6,
        title_padding: 53,
        height: 7,
        dx: 8,
        dy: 9,
        rotation_xaxis: 10,
        font_size_xaxis: 11,
        font_size_xticks: 12,
        dominant_baseline_x_axis: 13,
        text_anchor_x_axis: 14,
        x_axis_type: 54,
        x_label: 15,
        yaxis_ticks: 16,
        format_yaxis: 55,
        font_size_yaxis: 17,
        font_size_yticks: 18,
        format_tooltip: 19,
        y_label: 20,
        tooltip_desc: 56,
        colorRange: 57,
        color_mapping: 58,
        annotation_dates: 59,
        legend_text: 60,
        scale_x: 61,
        annotation_lines: 62,
        colours: 63,
        tooltip: 21,
        interval: 64,
        type: 22,
        show_bar_labels: 65,
        position: 66,
        colour_text: 67,
        mode: 23
      },
      null,
      [-1, -1, -1, -1]
    );
  }
}
function xv(e) {
  let t, n, r, o, f;
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
      V(u, t, a), o || (f = [
        lt(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[27]
        ),
        lt(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[28]
        )
      ], o = !0);
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
      r || it(() => {
        r = Fi(t, Zt, { x: -200, duration: 1e3, delay: 50 }), r.start();
      });
    },
    o: Pe,
    d(u) {
      u && Q(t), o = !1, Ht(f);
    }
  };
}
function Mv(e, t, n) {
  let r, o, f, u, { x: a } = t, { y: _ } = t, { width: c } = t, { height: d } = t, { color: h } = t, { tweenOptions: g } = t, { x_start: w } = t, { x_end: v } = t, { y_value: S } = t, { opacity: k } = t, { group: T } = t, { hover_legend: A } = t, { current_categories: z } = t, { hovered_x_start: U } = t, { hovered_x_end: O } = t, { hovered_y: E } = t, { hovered_group: B } = t, { hovered_color: G } = t, X = Ut(a, g == null ? void 0 : g.x);
  pt(e, X, (J) => n(13, r = J));
  let D = Ut(_, g == null ? void 0 : g.y);
  pt(e, D, (J) => n(14, o = J));
  let j = Ut(c, g == null ? void 0 : g.width);
  pt(e, j, (J) => n(15, f = J));
  let se = Ut(d, g == null ? void 0 : g.height);
  pt(e, se, (J) => n(16, u = J));
  function de(J, W, C, R, ce, he) {
    n(2, E = W), n(0, U = C), n(1, O = R), n(3, B = ce), n(4, G = he);
  }
  const ie = (J) => de(J, S, w, v, T, h), te = () => {
    n(2, E = null), n(0, U = null), n(1, O = null), n(3, B = null), n(4, G = null);
  };
  return e.$$set = (J) => {
    "x" in J && n(22, a = J.x), "y" in J && n(23, _ = J.y), "width" in J && n(24, c = J.width), "height" in J && n(25, d = J.height), "color" in J && n(5, h = J.color), "tweenOptions" in J && n(26, g = J.tweenOptions), "x_start" in J && n(6, w = J.x_start), "x_end" in J && n(7, v = J.x_end), "y_value" in J && n(8, S = J.y_value), "opacity" in J && n(9, k = J.opacity), "group" in J && n(10, T = J.group), "hover_legend" in J && n(11, A = J.hover_legend), "current_categories" in J && n(12, z = J.current_categories), "hovered_x_start" in J && n(0, U = J.hovered_x_start), "hovered_x_end" in J && n(1, O = J.hovered_x_end), "hovered_y" in J && n(2, E = J.hovered_y), "hovered_group" in J && n(3, B = J.hovered_group), "hovered_color" in J && n(4, G = J.hovered_color);
  }, e.$$.update = () => {
    e.$$.dirty & /*x, tweenOptions*/
    71303168 && X.set(a, g == null ? void 0 : g.x), e.$$.dirty & /*y, tweenOptions*/
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
    r,
    o,
    f,
    u,
    X,
    D,
    j,
    se,
    de,
    a,
    _,
    c,
    d,
    g,
    ie,
    te
  ];
}
class Tv extends ct {
  constructor(t) {
    super(), ht(this, t, Mv, xv, ft, {
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
function Sv(e) {
  let t, n, r = (
    /*tooltip_df*/
    e[5].x_start + ""
  ), o, f, u = (
    /*tooltip_df*/
    e[5].x_end + ""
  ), a, _, c, d, h, g, w, v = (
    /*tooltip_df*/
    e[5].group + ""
  ), S, k, T, A, z = (
    /*tooltip_df*/
    e[5].y + ""
  ), U, O, E, B, G, X, D;
  return {
    c() {
      t = _e("div"), n = _e("div"), o = Ae(r), f = Ae(" - "), a = Ae(u), _ = ve(), c = _e("div"), d = _e("div"), h = _e("span"), g = ve(), w = _e("div"), S = Ae(v), k = Ae(":"), T = ve(), A = _e("div"), U = Ae(z), O = ve(), E = _e("div"), B = ve(), G = _e("div"), y(
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
      V(j, t, se), q(t, n), q(n, o), q(n, f), q(n, a), q(t, _), q(t, c), q(c, d), q(d, h), q(c, g), q(c, w), q(w, S), q(w, k), q(c, T), q(c, A), q(A, U), q(t, O), q(t, E), q(t, B), q(t, G), D = !0;
    },
    p(j, [se]) {
      (!D || se & /*tooltip_df*/
      32) && r !== (r = /*tooltip_df*/
      j[5].x_start + "") && Oe(o, r), (!D || se & /*tooltip_df*/
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
        D && (X || (X = Pt(t, Zt, { duration: 1e3 }, !0)), X.run(1));
      }), D = !0);
    },
    o(j) {
      X || (X = Pt(t, Zt, { duration: 1e3 }, !1)), X.run(0), D = !1;
    },
    d(j) {
      j && Q(t), j && X && X.end();
    }
  };
}
function zv(e, t, n) {
  let r, { xScale: o } = t, { yScale: f } = t, { hovered_x_start: u } = t, { hovered_x_end: a } = t, { hovered_group: _ } = t, { hovered_color: c } = t, { hovered_y: d } = t;
  return e.$$set = (h) => {
    "xScale" in h && n(0, o = h.xScale), "yScale" in h && n(1, f = h.yScale), "hovered_x_start" in h && n(2, u = h.hovered_x_start), "hovered_x_end" in h && n(3, a = h.hovered_x_end), "hovered_group" in h && n(6, _ = h.hovered_group), "hovered_color" in h && n(7, c = h.hovered_color), "hovered_y" in h && n(4, d = h.hovered_y);
  }, e.$$.update = () => {
    e.$$.dirty & /*hovered_x_start, hovered_x_end, hovered_color, hovered_group, hovered_y*/
    220 && n(5, r = {
      x_start: u,
      x_end: a,
      color: c,
      group: _,
      y: d
    });
  }, [
    o,
    f,
    u,
    a,
    d,
    r,
    _,
    c
  ];
}
class Av extends ct {
  constructor(t) {
    super(), ht(this, t, zv, Sv, ft, {
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
function Qc(e, t, n) {
  const r = e.slice();
  return r[86] = t[n].x_start, r[87] = t[n].x_end, r[88] = t[n].y, r[89] = t[n].colors, r[90] = t[n].group, r[91] = t[n].opacity, r[92] = t[n].id, r;
}
function Vc(e, t, n) {
  const r = e.slice();
  return r[95] = t[n], r;
}
function $c(e, t, n) {
  const r = e.slice();
  return r[95] = t[n], r;
}
function e1(e, t, n) {
  const r = e.slice();
  return r[100] = t[n], r[102] = n, r;
}
function t1(e) {
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
    m(r, o) {
      V(r, t, o), q(t, n);
    },
    p(r, o) {
      o[0] & /*header*/
      4 && Oe(
        n,
        /*header*/
        r[2]
      ), o[0] & /*title_align*/
      8 && y(
        t,
        "text-align",
        /*title_align*/
        r[3]
      ), o[0] & /*title_color*/
      16 && y(
        t,
        "color",
        /*title_color*/
        r[4]
      ), o[0] & /*title_font_size*/
      32 && y(
        t,
        "font-size",
        /*title_font_size*/
        r[5] + "px"
      ), o[0] & /*title_font_weight*/
      64 && y(
        t,
        "font-weight",
        /*title_font_weight*/
        r[6]
      ), o[0] & /*title_padding*/
      128 && y(
        t,
        "padding",
        /*title_padding*/
        r[7] + "px"
      );
    },
    d(r) {
      r && Q(t);
    }
  };
}
function n1(e) {
  let t, n = ke(Object.keys(
    /*categories*/
    e[27]
  )), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = i1(e1(e, n, o));
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = Ee();
    },
    m(o, f) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, f);
      V(o, t, f);
    },
    p(o, f) {
      if (f[0] & /*categories, current_categories, color_mapping*/
      675282944 | f[1] & /*hover_legend*/
      1) {
        n = ke(Object.keys(
          /*categories*/
          o[27]
        ));
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = e1(o, n, u);
          r[u] ? r[u].p(a, f) : (r[u] = i1(a), r[u].c(), r[u].m(t.parentNode, t));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = n.length;
      }
    },
    d(o) {
      o && Q(t), xn(r, o);
    }
  };
}
function i1(e) {
  let t, n, r, o = (
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
      t = _e("p"), n = _e("span"), r = ve(), f = Ae(o), u = ve(), y(
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
      V(g, t, w), q(t, n), q(t, r), q(t, f), q(t, u), _ || (c = [
        lt(t, "mouseover", d),
        lt(t, "click", h)
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
      134217728 && o !== (o = /*cats*/
      e[100].replace(/\.\d+$/, "") + "") && Oe(f, o), w[0] & /*categories, current_categories*/
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
      g && Q(t), _ = !1, Ht(c);
    }
  };
}
function r1(e, t) {
  let n, r, o;
  return r = new r0({
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
      line_generator_space: Lr,
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
          easing: _t,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Ee(), Qe(r.$$.fragment), this.first = n;
    },
    m(f, u) {
      V(f, n, u), Ke(r, f, u), o = !0;
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
      t[16]), r.$set(a);
    },
    i(f) {
      o || (le(r.$$.fragment, f), o = !0);
    },
    o(f) {
      ae(r.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Q(n), Je(r, f);
    }
  };
}
function l1(e, t) {
  let n, r, o;
  return r = new _a({
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
      space_between_ticks_and_gridline: Hu,
      y_lines_spacing: (
        /*y_lines_spacing*/
        t[38]
      ),
      height: (
        /*height*/
        t[8]
      ),
      line_generator_space: Lr,
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
          easing: _t,
          duration: 1e3
        }
      }
    }
  }), {
    key: e,
    first: null,
    c() {
      n = Ee(), Qe(r.$$.fragment), this.first = n;
    },
    m(f, u) {
      V(f, n, u), Ke(r, f, u), o = !0;
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
      t[20]), r.$set(a);
    },
    i(f) {
      o || (le(r.$$.fragment, f), o = !0);
    },
    o(f) {
      ae(r.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Q(n), Je(r, f);
    }
  };
}
function o1(e, t) {
  let n, r, o, f, u, a, _, c;
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
        easing: _t,
        duration: 1e3
      },
      width: {
        easing: _t,
        duration: 1e3
      },
      height: {
        easing: _t,
        duration: 1e3
      },
      y: {
        easing: _t,
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
    t[32]), r = new Tv({ props: S }), st.push(() => Ot(r, "hovered_x_start", d)), st.push(() => Ot(r, "hovered_x_end", h)), st.push(() => Ot(r, "hovered_group", g)), st.push(() => Ot(r, "hovered_color", w)), st.push(() => Ot(r, "hovered_y", v)), {
      key: e,
      first: null,
      c() {
        n = Ee(), Qe(r.$$.fragment), this.first = n;
      },
      m(k, T) {
        V(k, n, T), Ke(r, k, T), c = !0;
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
        t[29]), !o && T[1] & /*hovered_x_start*/
        4 && (o = !0, A.hovered_x_start = /*hovered_x_start*/
        t[33], It(() => o = !1)), !f && T[1] & /*hovered_x_end*/
        8 && (f = !0, A.hovered_x_end = /*hovered_x_end*/
        t[34], It(() => f = !1)), !u && T[1] & /*hovered_group*/
        16 && (u = !0, A.hovered_group = /*hovered_group*/
        t[35], It(() => u = !1)), !a && T[1] & /*hovered_color*/
        32 && (a = !0, A.hovered_color = /*hovered_color*/
        t[36], It(() => a = !1)), !_ && T[1] & /*hovered_y*/
        2 && (_ = !0, A.hovered_y = /*hovered_y*/
        t[32], It(() => _ = !1)), r.$set(A);
      },
      i(k) {
        c || (le(r.$$.fragment, k), c = !0);
      },
      o(k) {
        ae(r.$$.fragment, k), c = !1;
      },
      d(k) {
        k && Q(n), Je(r, k);
      }
    }
  );
}
function f1(e) {
  let t, n;
  return t = new Av({
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o[0] & /*xScale*/
      33554432 && (f.xScale = /*xScale*/
      r[25]), o[0] & /*yScale*/
      67108864 && (f.yScale = /*yScale*/
      r[26]), o[1] & /*hovered_x_start*/
      4 && (f.hovered_x_start = /*hovered_x_start*/
      r[33]), o[1] & /*hovered_x_end*/
      8 && (f.hovered_x_end = /*hovered_x_end*/
      r[34]), o[1] & /*hovered_group*/
      16 && (f.hovered_group = /*hovered_group*/
      r[35]), o[1] & /*hovered_color*/
      32 && (f.hovered_color = /*hovered_color*/
      r[36]), o[1] & /*hovered_y*/
      2 && (f.hovered_y = /*hovered_y*/
      r[32]), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function Cv(e) {
  let t, n, r, o, f, u = [], a = /* @__PURE__ */ new Map(), _, c, d, h, g = [], w = /* @__PURE__ */ new Map(), v, S, k, T = [], A = /* @__PURE__ */ new Map(), z, U, O, E, B, G = (
    /*header*/
    e[2] && t1(e)
  ), X = (
    /*show_legend*/
    e[1] && n1(e)
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
    let C = $c(e, D, W), R = j(C);
    a.set(R, u[W] = r1(R, C));
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
    let C = Vc(e, se, W), R = de(C);
    w.set(R, g[W] = l1(R, C));
  }
  let ie = ke(
    /*filtered_data*/
    e[28]
  );
  const te = (W) => (
    /*id*/
    W[92]
  );
  for (let W = 0; W < ie.length; W += 1) {
    let C = Qc(e, ie, W), R = te(C);
    A.set(R, T[W] = o1(R, C));
  }
  let J = (
    /*hovered_group*/
    e[35] && f1(e)
  );
  return {
    c() {
      G && G.c(), t = ve(), n = _e("div"), X && X.c(), r = ve(), o = _e("div"), f = ze("svg");
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
      (e[0] - Lr - /*y_lines_spacing*/
      e[38]) / 2), p(_, "y", h = /*height*/
      e[8] - /*label_height_x_axis*/
      e[24]), y(v, "text-anchor", "middle"), y(
        v,
        "font-size",
        /*font_size_yaxis*/
        e[19] + "px"
      ), y(v, "font-family", "Arial, sans-serif"), p(v, "transform", k = `translate(${/*label_height*/
      e[23]},${/*x_lines_spacing*/
      (e[37] + Lr) / 2}) rotate(-90)`), p(
        f,
        "width",
        /*width*/
        e[0]
      ), p(
        f,
        "height",
        /*height*/
        e[8]
      ), p(o, "class", "chart"), y(o, "position", "relative"), it(() => (
        /*div1_elementresize_handler*/
        e[74].call(o)
      ));
    },
    m(W, C) {
      G && G.m(W, C), V(W, t, C), V(W, n, C), X && X.m(n, null), V(W, r, C), V(W, o, C), q(o, f);
      for (let R = 0; R < u.length; R += 1)
        u[R] && u[R].m(f, null);
      q(f, _), q(_, c);
      for (let R = 0; R < g.length; R += 1)
        g[R] && g[R].m(f, null);
      q(f, v), q(v, S);
      for (let R = 0; R < T.length; R += 1)
        T[R] && T[R].m(f, null);
      q(o, z), J && J.m(o, null), U = rr(
        o,
        /*div1_elementresize_handler*/
        e[74].bind(o)
      ), O = !0, E || (B = lt(
        n,
        "mouseleave",
        /*mouseleave_handler*/
        e[68]
      ), E = !0);
    },
    p(W, C) {
      /*header*/
      W[2] ? G ? G.p(W, C) : (G = t1(W), G.c(), G.m(t.parentNode, t)) : G && (G.d(1), G = null), /*show_legend*/
      W[1] ? X ? X.p(W, C) : (X = n1(W), X.c(), X.m(n, null)) : X && (X.d(1), X = null), C[0] & /*xScale, xaxis_ticks, width, rotation_xaxis, font_size_xticks, dx, dy, dominant_baseline_x_axis, text_anchor_x_axis*/
      33676801 | C[1] & /*x_ticks_spacing, x_lines_spacing, format_x_axis*/
      832 && (D = ke(
        /*xScale*/
        W[25].ticks(
          /*xaxis_ticks*/
          W[9]
        )
      ), qe(), u = kn(u, C, j, 1, W, D, a, f, Kn, r1, _, $c), Ge()), (!O || C[0] & /*x_label*/
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
      (W[0] - Lr - /*y_lines_spacing*/
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
      ), qe(), g = kn(g, C, de, 1, W, se, w, f, Kn, l1, v, Vc), Ge()), (!O || C[0] & /*y_label*/
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
      (W[37] + Lr) / 2}) rotate(-90)`)) && p(v, "transform", k), C[0] & /*filtered_data, xScale, yScale, current_categories*/
      905969664 | C[1] & /*hover_legend, hovered_x_start, hovered_x_end, hovered_group, hovered_color, hovered_y*/
      63 && (ie = ke(
        /*filtered_data*/
        W[28]
      ), qe(), T = kn(T, C, te, 1, W, ie, A, f, Kn, o1, null, Qc), Ge()), (!O || C[0] & /*width*/
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
      16 && le(J, 1)) : (J = f1(W), J.c(), le(J, 1), J.m(o, null)) : J && (qe(), ae(J, 1, 1, () => {
        J = null;
      }), Ge());
    },
    i(W) {
      if (!O) {
        for (let C = 0; C < D.length; C += 1)
          le(u[C]);
        for (let C = 0; C < se.length; C += 1)
          le(g[C]);
        for (let C = 0; C < ie.length; C += 1)
          le(T[C]);
        le(J), O = !0;
      }
    },
    o(W) {
      for (let C = 0; C < u.length; C += 1)
        ae(u[C]);
      for (let C = 0; C < g.length; C += 1)
        ae(g[C]);
      for (let C = 0; C < T.length; C += 1)
        ae(T[C]);
      ae(J), O = !1;
    },
    d(W) {
      W && (Q(t), Q(n), Q(r), Q(o)), G && G.d(W), X && X.d();
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
const Lv = 30, Mu = 40;
let Lr = 20;
const Tu = 15, Hu = 5;
function Ev(e, t, n) {
  let r, o, f, u, { data: a = [] } = t, { width: _ = 800 } = t, { show_legend: c } = t, { header: d } = t, { title_align: h } = t, { title_color: g } = t, { title_font_size: w } = t, { title_font_weight: v } = t, { title_padding: S } = t, { height: k = 400 } = t, { xaxis_ticks: T = 6 } = t, { format_xaxis: A } = t, { dx: z = "0em" } = t, { dy: U = "0em" } = t, { rotation_xaxis: O = 0 } = t, { font_size_xaxis: E = 14 } = t, { font_size_xticks: B = 12 } = t, { dominant_baseline_x_axis: G = "middle" } = t, { text_anchor_x_axis: X = "middle" } = t, { x_axis_type: D } = t, { x_label: j } = t, { yaxis_ticks: se = 6 } = t, { format_yaxis: de = ",.3r" } = t, { font_size_yaxis: ie } = t, { font_size_yticks: te } = t, { format_tooltip: J = "" } = t, { y_label: W } = t, { tooltip_desc: C = "" } = t, { colorRange: R = [] } = t, { color_mapping: ce } = t, { annotation_dates: he = [] } = t, { legend_text: vt = [] } = t, { scale_x: Kt = "" } = t, { annotation_lines: Ze = 2 } = t, { colours: Ue = [] } = t, { tooltip: $e = "vertical_line" } = t, { interval: ut = "day" } = t, { type: He = "" } = t, { show_bar_labels: ue } = t, { position: me } = t, { colour_text: be } = t, { mode: $ } = t;
  function Ce(K) {
    let tt = [];
    tt = Object.keys(gt).filter((Ct) => !K.includes(Ct));
    for (let Ct = 0; Ct < K.length; Ct++)
      n(27, gt[K[Ct]] = !0, gt);
    for (let Ct = 0; Ct < tt.length; Ct++)
      n(27, gt[tt[Ct]] = !1, gt);
    return [gt, tt];
  }
  let ye = Mu, We = 20, je = Mu, et, Ye = 10, Y, oe, Me, Tt, St, Xt, gt = {}, zt, en, kt, xt, tn, Un = [], nn, on, Jn = k - 40, cn = 40;
  function Mn() {
    let tt = document.createElement("canvas").getContext("2d");
    tt.font = `${te}px Arial`, n(60, ye = tt.measureText(on).width), tt.font = `${ie}px Arial`, tt.measureText(W).width, n(23, Ye = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1), tt.font = `${B}px Arial`, je = tt.measureText(u).width, et = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1, tt.font = `${E}px Arial`, n(24, Y = tt.measureText("M").actualBoundingBoxAscent + tt.measureText("M").actualBoundingBoxDescent + 1), n(61, We = ua(je, et, O)), n(37, Jn = k - We - Y - et - Tu - Hu), n(38, cn = ye + Ye + Tu + Hu);
  }
  Gu(Mn);
  let fn, Tn;
  const yt = (K) => n(31, oe = K), Pn = (K) => n(27, gt[K] = !gt[K], gt), gn = () => n(31, oe = null);
  function At(K) {
    en = K, n(33, en);
  }
  function Sn(K) {
    kt = K, n(34, kt);
  }
  function zn(K) {
    xt = K, n(35, xt);
  }
  function Jt(K) {
    tn = K, n(36, tn);
  }
  function Qn(K) {
    zt = K, n(32, zt);
  }
  function An() {
    _ = this.clientWidth, n(0, _);
  }
  return e.$$set = (K) => {
    "data" in K && n(41, a = K.data), "width" in K && n(0, _ = K.width), "show_legend" in K && n(1, c = K.show_legend), "header" in K && n(2, d = K.header), "title_align" in K && n(3, h = K.title_align), "title_color" in K && n(4, g = K.title_color), "title_font_size" in K && n(5, w = K.title_font_size), "title_font_weight" in K && n(6, v = K.title_font_weight), "title_padding" in K && n(7, S = K.title_padding), "height" in K && n(8, k = K.height), "xaxis_ticks" in K && n(9, T = K.xaxis_ticks), "format_xaxis" in K && n(42, A = K.format_xaxis), "dx" in K && n(10, z = K.dx), "dy" in K && n(11, U = K.dy), "rotation_xaxis" in K && n(12, O = K.rotation_xaxis), "font_size_xaxis" in K && n(13, E = K.font_size_xaxis), "font_size_xticks" in K && n(14, B = K.font_size_xticks), "dominant_baseline_x_axis" in K && n(15, G = K.dominant_baseline_x_axis), "text_anchor_x_axis" in K && n(16, X = K.text_anchor_x_axis), "x_axis_type" in K && n(43, D = K.x_axis_type), "x_label" in K && n(17, j = K.x_label), "yaxis_ticks" in K && n(18, se = K.yaxis_ticks), "format_yaxis" in K && n(44, de = K.format_yaxis), "font_size_yaxis" in K && n(19, ie = K.font_size_yaxis), "font_size_yticks" in K && n(20, te = K.font_size_yticks), "format_tooltip" in K && n(45, J = K.format_tooltip), "y_label" in K && n(21, W = K.y_label), "tooltip_desc" in K && n(46, C = K.tooltip_desc), "colorRange" in K && n(47, R = K.colorRange), "color_mapping" in K && n(22, ce = K.color_mapping), "annotation_dates" in K && n(48, he = K.annotation_dates), "legend_text" in K && n(49, vt = K.legend_text), "scale_x" in K && n(50, Kt = K.scale_x), "annotation_lines" in K && n(51, Ze = K.annotation_lines), "colours" in K && n(52, Ue = K.colours), "tooltip" in K && n(53, $e = K.tooltip), "interval" in K && n(54, ut = K.interval), "type" in K && n(55, He = K.type), "show_bar_labels" in K && n(56, ue = K.show_bar_labels), "position" in K && n(57, me = K.position), "colour_text" in K && n(58, be = K.colour_text), "mode" in K && n(59, $ = K.mode);
  }, e.$$.update = () => {
    if (e.$$.dirty[1] & /*data*/
    1024 | e.$$.dirty[2] & /*names*/
    1 && (n(62, Me = [...new Set(a.map((K) => K.group))]), n(27, gt = Ce(Me)[0]), Ce(Me)[1]), e.$$.dirty[0] & /*categories*/
    134217728 && n(29, nn = Object.keys(gt).filter((K) => gt[K])), e.$$.dirty[2] & /*names*/
    1 && n(29, nn = Me), e.$$.dirty[1] & /*format_yaxis*/
    8192 && n(30, r = hn(de)), e.$$.dirty[0] & /*current_categories, filtered_data, width, height*/
    805306625 | e.$$.dirty[1] & /*data, x_ticks_label_rotation_buffer, ticks_label_width*/
    1610613760 | e.$$.dirty[2] & /*scales*/
    2 && (n(28, Un = a.filter(({ group: K }) => nn.includes(K))), n(63, Xt = Nw(Un, _, k, Mu, Lv, We, ye + 10)), n(25, Tt = Xt[0]), n(26, St = Xt[1])), e.$$.dirty[0] & /*yScale, yaxis_ticks*/
    67371008 && n(65, o = St.ticks(se)), e.$$.dirty[0] & /*format_number*/
    1073741824 | e.$$.dirty[2] & /*ticks*/
    8) {
      let K = 0;
      o.forEach((tt) => {
        const Ct = r(tt).toString();
        Ct.length > K && (K = Ct.length, on = Ct);
      });
    }
    e.$$.dirty[0] & /*height, label_height_x_axis*/
    16777472 | e.$$.dirty[1] & /*x_ticks_label_rotation_buffer*/
    1073741824 && n(40, f = k - We - Y - Tu), e.$$.dirty[0] & /*label_height*/
    8388608, e.$$.dirty[0] & /*xScale, xaxis_ticks*/
    33554944 | e.$$.dirty[1] & /*format_xaxis*/
    2048 && (n(39, fn = hn(A)), n(64, Tn = Tt.ticks(T).map((K) => hn(K)))), e.$$.dirty[2] & /*all_x_axis_tick_labels*/
    4 && (u = Tn.reduce((K, tt) => K.length > tt.length ? K : tt));
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
    X,
    j,
    se,
    ie,
    te,
    W,
    ce,
    Ye,
    Y,
    Tt,
    St,
    gt,
    Un,
    nn,
    r,
    oe,
    zt,
    en,
    kt,
    xt,
    tn,
    Jn,
    cn,
    fn,
    f,
    a,
    A,
    D,
    de,
    J,
    C,
    R,
    he,
    vt,
    Kt,
    Ze,
    Ue,
    $e,
    ut,
    He,
    ue,
    me,
    be,
    $,
    ye,
    We,
    Me,
    Xt,
    Tn,
    o,
    yt,
    Pn,
    gn,
    At,
    Sn,
    zn,
    Jt,
    Qn,
    An
  ];
}
class Rv extends ct {
  constructor(t) {
    super(), ht(
      this,
      t,
      Ev,
      Cv,
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
function Iv(e) {
  c6(e, "svelte-xvrzmb", "body{background-color:#fafafa}svg{color:black}.chart-grid.svelte-xvrzmb{display:grid;gap:16px}");
}
function u1(e, t, n) {
  const r = e.slice();
  return r[6] = t[n], r;
}
function a1(e) {
  let t, n, r = [], o = /* @__PURE__ */ new Map(), f, u, a = ke(
    /*debouncedListInput*/
    e[0]
  );
  const _ = (c) => (
    /*input*/
    c[6].id
  );
  for (let c = 0; c < a.length; c += 1) {
    let d = u1(e, a, c), h = _(d);
    o.set(h, r[c] = s1(h, d));
  }
  return {
    c() {
      t = _e("div"), n = _e("div");
      for (let c = 0; c < r.length; c += 1)
        r[c].c();
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
      V(c, t, d), q(t, n);
      for (let h = 0; h < r.length; h += 1)
        r[h] && r[h].m(n, null);
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
      ), qe(), r = kn(r, d, _, 1, c, a, o, n, Kn, s1, null, u1), Ge()), (!u || d & /*debouncedListInput*/
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
          le(r[d]);
        u = !0;
      }
    },
    o(c) {
      for (let d = 0; d < r.length; d += 1)
        ae(r[d]);
      u = !1;
    },
    d(c) {
      c && Q(t);
      for (let d = 0; d < r.length; d += 1)
        r[d].d();
      f();
    }
  };
}
function Ov(e) {
  let t, n;
  return t = new Rv({
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o & /*debouncedListInput*/
      1 && (f.data = /*input*/
      r[6].data), o & /*debouncedListInput*/
      1 && (f.header = /*input*/
      r[6].header), o & /*debouncedListInput*/
      1 && (f.height = /*input*/
      r[6].height), o & /*debouncedListInput*/
      1 && (f.legend_text = /*input*/
      r[6].legend_text), o & /*debouncedListInput*/
      1 && (f.tooltip_desc = /*input*/
      r[6].tooltip_desc), o & /*debouncedListInput*/
      1 && (f.format_tooltip = /*input*/
      r[6].format_tooltip), o & /*debouncedListInput*/
      1 && (f.format_yaxis = /*input*/
      r[6].format_yaxis), o & /*debouncedListInput*/
      1 && (f.format_xaxis = /*input*/
      r[6].format_xaxis), o & /*debouncedListInput*/
      1 && (f.yaxis_ticks = /*input*/
      r[6].yaxis_ticks), o & /*debouncedListInput*/
      1 && (f.xaxis_ticks = /*input*/
      r[6].xaxis_ticks), o & /*debouncedListInput*/
      1 && (f.annotation_lines = /*input*/
      r[6].annotation_lines), o & /*debouncedListInput*/
      1 && (f.annotation_dates = /*input*/
      r[6].annotation_dates), o & /*debouncedListInput*/
      1 && (f.colorRange = /*input*/
      r[6].colorRange), o & /*debouncedListInput*/
      1 && (f.colours = /*input*/
      r[6].colours), o & /*debouncedListInput*/
      1 && (f.tooltip = /*input*/
      r[6].tooltip), o & /*debouncedListInput*/
      1 && (f.interval = /*input*/
      r[6].interval), o & /*debouncedListInput*/
      1 && (f.type = /*input*/
      r[6].type), o & /*debouncedListInput*/
      1 && (f.x_label = /*input*/
      r[6].x_label), o & /*debouncedListInput*/
      1 && (f.y_label = /*input*/
      r[6].y_label), o & /*debouncedListInput*/
      1 && (f.scale_x = /*input*/
      r[6].scale_x), o & /*containerWidth, debouncedListInput*/
      3 && (f.width = /*containerWidth*/
      r[1] / /*input*/
      (r[6].facet_col ? (
        /*input*/
        r[6].facet_col
      ) : 1) - 32), o & /*debouncedListInput*/
      1 && (f.scale_y = /*input*/
      r[6].scale_y), o & /*debouncedListInput*/
      1 && (f.font_size_yaxis = /*input*/
      r[6].font_size_yaxis), o & /*debouncedListInput*/
      1 && (f.font_size_xaxis = /*input*/
      r[6].font_size_xaxis), o & /*debouncedListInput*/
      1 && (f.font_size_yticks = /*input*/
      r[6].font_size_yticks), o & /*debouncedListInput*/
      1 && (f.font_size_xticks = /*input*/
      r[6].font_size_xticks), o & /*debouncedListInput*/
      1 && (f.grid_lines = /*input*/
      r[6].grid_lines), o & /*debouncedListInput*/
      1 && (f.show_legend = /*input*/
      r[6].show_legend), o & /*debouncedListInput*/
      1 && (f.rotation_xaxis = /*input*/
      r[6].rotation_xaxis), o & /*debouncedListInput*/
      1 && (f.show_bar_labels = /*input*/
      r[6].show_bar_labels), o & /*debouncedListInput*/
      1 && (f.position = /*input*/
      r[6].position), o & /*debouncedListInput*/
      1 && (f.colour_text = /*input*/
      r[6].colour_text), o & /*debouncedListInput*/
      1 && (f.mode = /*input*/
      r[6].mode), o & /*debouncedListInput*/
      1 && (f.color_mapping = /*input*/
      r[6].color_mapping), o & /*debouncedListInput*/
      1 && (f.dx = /*input*/
      r[6].dx), o & /*debouncedListInput*/
      1 && (f.dy = /*input*/
      r[6].dy), o & /*debouncedListInput*/
      1 && (f.dominant_baseline_x_axis = /*input*/
      r[6].dominant_baseline_x_axis), o & /*debouncedListInput*/
      1 && (f.text_anchor_x_axis = /*input*/
      r[6].text_anchor_x_axis), o & /*debouncedListInput*/
      1 && (f.title_align = /*input*/
      r[6].title_align), o & /*debouncedListInput*/
      1 && (f.title_color = /*input*/
      r[6].title_color), o & /*debouncedListInput*/
      1 && (f.title_font_size = /*input*/
      r[6].title_font_size), o & /*debouncedListInput*/
      1 && (f.title_font_weight = /*input*/
      r[6].title_font_weight), o & /*debouncedListInput*/
      1 && (f.title_padding = /*input*/
      r[6].title_padding), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function Dv(e) {
  let t, n;
  return t = new kv({
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o & /*debouncedListInput*/
      1 && (f.data = /*input*/
      r[6].data), o & /*debouncedListInput*/
      1 && (f.header = /*input*/
      r[6].header), o & /*debouncedListInput*/
      1 && (f.height = /*input*/
      r[6].height), o & /*debouncedListInput*/
      1 && (f.legend_text = /*input*/
      r[6].legend_text), o & /*debouncedListInput*/
      1 && (f.tooltip_desc = /*input*/
      r[6].tooltip_desc), o & /*debouncedListInput*/
      1 && (f.format_tooltip = /*input*/
      r[6].format_tooltip), o & /*debouncedListInput*/
      1 && (f.format_yaxis = /*input*/
      r[6].format_yaxis), o & /*debouncedListInput*/
      1 && (f.format_xaxis = /*input*/
      r[6].format_xaxis), o & /*debouncedListInput*/
      1 && (f.yaxis_ticks = /*input*/
      r[6].yaxis_ticks), o & /*debouncedListInput*/
      1 && (f.xaxis_ticks = /*input*/
      r[6].xaxis_ticks), o & /*debouncedListInput*/
      1 && (f.annotation_lines = /*input*/
      r[6].annotation_lines), o & /*debouncedListInput*/
      1 && (f.annotation_dates = /*input*/
      r[6].annotation_dates), o & /*debouncedListInput*/
      1 && (f.colorRange = /*input*/
      r[6].colorRange), o & /*debouncedListInput*/
      1 && (f.colours = /*input*/
      r[6].colours), o & /*debouncedListInput*/
      1 && (f.tooltip = /*input*/
      r[6].tooltip), o & /*debouncedListInput*/
      1 && (f.interval = /*input*/
      r[6].interval), o & /*debouncedListInput*/
      1 && (f.type = /*input*/
      r[6].type), o & /*debouncedListInput*/
      1 && (f.x_label = /*input*/
      r[6].x_label), o & /*debouncedListInput*/
      1 && (f.y_label = /*input*/
      r[6].y_label), o & /*debouncedListInput*/
      1 && (f.scale_x = /*input*/
      r[6].scale_x), o & /*debouncedListInput*/
      1 && (f.scale_y = /*input*/
      r[6].scale_y), o & /*debouncedListInput*/
      1 && (f.font_size_yaxis = /*input*/
      r[6].font_size_yaxis), o & /*debouncedListInput*/
      1 && (f.font_size_xaxis = /*input*/
      r[6].font_size_xaxis), o & /*debouncedListInput*/
      1 && (f.font_size_yticks = /*input*/
      r[6].font_size_yticks), o & /*debouncedListInput*/
      1 && (f.font_size_xticks = /*input*/
      r[6].font_size_xticks), o & /*debouncedListInput*/
      1 && (f.grid_lines = /*input*/
      r[6].grid_lines), o & /*debouncedListInput*/
      1 && (f.show_legend = /*input*/
      r[6].show_legend), o & /*debouncedListInput*/
      1 && (f.rotation_xaxis = /*input*/
      r[6].rotation_xaxis), o & /*debouncedListInput*/
      1 && (f.show_bar_labels = /*input*/
      r[6].show_bar_labels), o & /*debouncedListInput*/
      1 && (f.position = /*input*/
      r[6].position), o & /*debouncedListInput*/
      1 && (f.colour_text = /*input*/
      r[6].colour_text), o & /*debouncedListInput*/
      1 && (f.mode = /*input*/
      r[6].mode), o & /*debouncedListInput*/
      1 && (f.color_mapping = /*input*/
      r[6].color_mapping), o & /*debouncedListInput*/
      1 && (f.dx = /*input*/
      r[6].dx), o & /*debouncedListInput*/
      1 && (f.dy = /*input*/
      r[6].dy), o & /*debouncedListInput*/
      1 && (f.dominant_baseline_x_axis = /*input*/
      r[6].dominant_baseline_x_axis), o & /*debouncedListInput*/
      1 && (f.text_anchor_x_axis = /*input*/
      r[6].text_anchor_x_axis), o & /*debouncedListInput*/
      1 && (f.title_align = /*input*/
      r[6].title_align), o & /*debouncedListInput*/
      1 && (f.title_color = /*input*/
      r[6].title_color), o & /*containerWidth, debouncedListInput*/
      3 && (f.width = /*containerWidth*/
      r[1] / /*input*/
      (r[6].facet_col ? (
        /*input*/
        r[6].facet_col
      ) : 1) - 32), o & /*debouncedListInput*/
      1 && (f.title_font_size = /*input*/
      r[6].title_font_size), o & /*debouncedListInput*/
      1 && (f.title_font_weight = /*input*/
      r[6].title_font_weight), o & /*debouncedListInput*/
      1 && (f.title_padding = /*input*/
      r[6].title_padding), o & /*debouncedListInput*/
      1 && (f.isRotated = /*input*/
      r[6].isRotated), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function Nv(e) {
  let t, n;
  return t = new ov({
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Ke(t, r, o), n = !0;
    },
    p(r, o) {
      const f = {};
      o & /*debouncedListInput*/
      1 && (f.id = /*input*/
      r[6].id), o & /*debouncedListInput*/
      1 && (f.data = /*input*/
      r[6].data), o & /*debouncedListInput*/
      1 && (f.header = /*input*/
      r[6].header), o & /*debouncedListInput*/
      1 && (f.height = /*input*/
      r[6].height), o & /*debouncedListInput*/
      1 && (f.format_tooltip = /*input*/
      r[6].format_tooltip), o & /*debouncedListInput*/
      1 && (f.format_yaxis = /*input*/
      r[6].format_yaxis), o & /*debouncedListInput*/
      1 && (f.format_xaxis = /*input*/
      r[6].format_xaxis), o & /*debouncedListInput*/
      1 && (f.yaxis_ticks = /*input*/
      r[6].yaxis_ticks), o & /*debouncedListInput*/
      1 && (f.xaxis_ticks = /*input*/
      r[6].xaxis_ticks), o & /*debouncedListInput*/
      1 && (f.tooltip = /*input*/
      r[6].tooltip), o & /*debouncedListInput*/
      1 && (f.interval = /*input*/
      r[6].interval), o & /*debouncedListInput*/
      1 && (f.type = /*input*/
      r[6].type), o & /*debouncedListInput*/
      1 && (f.x_label = /*input*/
      r[6].x_label), o & /*debouncedListInput*/
      1 && (f.y_label = /*input*/
      r[6].y_label), o & /*debouncedListInput*/
      1 && (f.scale_x = /*input*/
      r[6].scale_x), o & /*debouncedListInput*/
      1 && (f.font_size_yaxis = /*input*/
      r[6].font_size_yaxis), o & /*debouncedListInput*/
      1 && (f.font_size_xaxis = /*input*/
      r[6].font_size_xaxis), o & /*debouncedListInput*/
      1 && (f.font_size_yticks = /*input*/
      r[6].font_size_yticks), o & /*debouncedListInput*/
      1 && (f.font_size_xticks = /*input*/
      r[6].font_size_xticks), o & /*debouncedListInput*/
      1 && (f.time_interval = /*input*/
      r[6].time_interval), o & /*debouncedListInput*/
      1 && (f.show_legend = /*input*/
      r[6].show_legend), o & /*debouncedListInput*/
      1 && (f.rotation_xaxis = /*input*/
      r[6].rotation_xaxis), o & /*debouncedListInput*/
      1 && (f.x_axis_type = /*input*/
      r[6].x_axis_type), o & /*debouncedListInput*/
      1 && (f.segments = /*input*/
      r[6].segments), o & /*debouncedListInput*/
      1 && (f.segments_df = /*input*/
      r[6].add_segments_df), o & /*debouncedListInput*/
      1 && (f.annotations = /*input*/
      r[6].annotations), o & /*debouncedListInput*/
      1 && (f.annotations_df = /*input*/
      r[6].add_annotations_df), o & /*debouncedListInput*/
      1 && (f.arrows = /*input*/
      r[6].arrows), o & /*debouncedListInput*/
      1 && (f.arrows_df = /*input*/
      r[6].add_arrows_df), o & /*debouncedListInput*/
      1 && (f.show_legend_segments = /*input*/
      r[6].show_legend_segments), o & /*debouncedListInput*/
      1 && (f.dx = /*input*/
      r[6].dx), o & /*debouncedListInput*/
      1 && (f.dy = /*input*/
      r[6].dy), o & /*debouncedListInput*/
      1 && (f.dominant_baseline_x_axis = /*input*/
      r[6].dominant_baseline_x_axis), o & /*debouncedListInput*/
      1 && (f.text_anchor_x_axis = /*input*/
      r[6].text_anchor_x_axis), o & /*debouncedListInput*/
      1 && (f.title_align = /*input*/
      r[6].title_align), o & /*debouncedListInput*/
      1 && (f.title_color = /*input*/
      r[6].title_color), o & /*debouncedListInput*/
      1 && (f.title_font_size = /*input*/
      r[6].title_font_size), o & /*debouncedListInput*/
      1 && (f.title_font_weight = /*input*/
      r[6].title_font_weight), o & /*debouncedListInput*/
      1 && (f.title_padding = /*input*/
      r[6].title_padding), o & /*debouncedListInput*/
      1 && (f.time_series_interval = /*input*/
      r[6].time_series_interval), o & /*debouncedListInput*/
      1 && (f.custom_tooltip_data = /*input*/
      r[6].custom_tooltip_data), o & /*containerWidth, debouncedListInput*/
      3 && (f.width = /*containerWidth*/
      r[1] / /*input*/
      (r[6].facet_col ? (
        /*input*/
        r[6].facet_col
      ) : 1) - 32), o & /*debouncedListInput*/
      1 && (f.background_color_tt = /*input*/
      r[6].background_color_tt), o & /*debouncedListInput*/
      1 && (f.opacity_tt = /*input*/
      r[6].opacity_tt), o & /*debouncedListInput*/
      1 && (f.x_range = /*input*/
      r[6].x_range), o & /*debouncedListInput*/
      1 && (f.y_range = /*input*/
      r[6].y_range), o & /*debouncedListInput*/
      1 && (f.animation_params_list = /*input*/
      r[6].animation_params_list), o & /*debouncedListInput*/
      1 && (f.justify_content_tooltip = /*input*/
      r[6].justify_content_tooltip), o & /*debouncedListInput*/
      1 && (f.font_size_tooltip = /*input*/
      r[6].font_size_tooltip), o & /*debouncedListInput*/
      1 && (f.text_color_tooltip = /*input*/
      r[6].text_color_tooltip), o & /*debouncedListInput*/
      1 && (f.border_color_tooltip = /*input*/
      r[6].border_color_tooltip), o & /*debouncedListInput*/
      1 && (f.show_delay_tooltip = /*input*/
      r[6].show_delay_tooltip), o & /*debouncedListInput*/
      1 && (f.border_style_tooltip = /*input*/
      r[6].border_style_tooltip), o & /*debouncedListInput*/
      1 && (f.border_width_tooltip = /*input*/
      r[6].border_width_tooltip), o & /*debouncedListInput*/
      1 && (f.tooltip_position = /*input*/
      r[6].tooltip_position), o & /*debouncedListInput*/
      1 && (f.crosshair = /*input*/
      r[6].crosshair), o & /*debouncedListInput*/
      1 && (f.line_type_axis_trigger = /*input*/
      r[6].line_type_axis_trigger), o & /*debouncedListInput*/
      1 && (f.custom_css_header = /*input*/
      r[6].custom_css_header), t.$set(f);
    },
    i(r) {
      n || (le(t.$$.fragment, r), n = !0);
    },
    o(r) {
      ae(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Je(t, r);
    }
  };
}
function s1(e, t) {
  let n, r, o, f, u;
  const a = [Nv, Dv, Ov], _ = [];
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
  return ~(r = c(t)) && (o = _[r] = a[r](t)), {
    key: e,
    first: null,
    c() {
      n = _e("div"), o && o.c(), f = ve(), this.first = n;
    },
    m(d, h) {
      V(d, n, h), ~r && _[r].m(n, null), q(n, f), u = !0;
    },
    p(d, h) {
      t = d;
      let g = r;
      r = c(t), r === g ? ~r && _[r].p(t, h) : (o && (qe(), ae(_[g], 1, 1, () => {
        _[g] = null;
      }), Ge()), ~r ? (o = _[r], o ? o.p(t, h) : (o = _[r] = a[r](t), o.c()), le(o, 1), o.m(n, f)) : o = null);
    },
    i(d) {
      u || (le(o), u = !0);
    },
    o(d) {
      ae(o), u = !1;
    },
    d(d) {
      d && Q(n), ~r && _[r].d();
    }
  };
}
function Uv(e) {
  let t, n, r = (
    /*debouncedListInput*/
    e[0].length > 0 && a1(e)
  );
  return {
    c() {
      r && r.c(), t = Ee();
    },
    m(o, f) {
      r && r.m(o, f), V(o, t, f), n = !0;
    },
    p(o, [f]) {
      /*debouncedListInput*/
      o[0].length > 0 ? r ? (r.p(o, f), f & /*debouncedListInput*/
      1 && le(r, 1)) : (r = a1(o), r.c(), le(r, 1), r.m(t.parentNode, t)) : r && (qe(), ae(r, 1, 1, () => {
        r = null;
      }), Ge());
    },
    i(o) {
      n || (le(r), n = !0);
    },
    o(o) {
      ae(r), n = !1;
    },
    d(o) {
      o && Q(t), r && r.d(o);
    }
  };
}
function Pv(e, t, n) {
  let r = window.innerWidth, { list_input: o = [] } = t, f = [];
  const u = K1.debounce(
    (_) => {
      n(0, f = [..._]);
    },
    20
  );
  Zu(() => {
    u.cancel();
  });
  function a() {
    r = this.clientWidth, n(1, r);
  }
  return e.$$set = (_) => {
    "list_input" in _ && n(2, o = _.list_input);
  }, e.$$.update = () => {
    e.$$.dirty & /*list_input*/
    4 && u(o), e.$$.dirty & /*debouncedListInput*/
    1 && console.log("debouncedListInput.length", f);
  }, [f, r, o, a];
}
class Fv extends ct {
  constructor(t) {
    super(), ht(this, t, Pv, Uv, ft, { list_input: 2 }, Iv);
  }
  get list_input() {
    return this.$$.ctx[2];
  }
  set list_input(t) {
    this.$$set({ list_input: t }), ju();
  }
}
customElements.define("linechart-groups-facet", E6(Fv, { list_input: {} }, [], [], !0));
export {
  Fv as MyComponent
};
