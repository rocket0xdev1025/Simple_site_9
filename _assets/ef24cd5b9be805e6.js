(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [35024],
  {
    /***/ 738083: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var EH = __c.EH;
        var Jc = __c.Jc;
        var Q = __c.Q;
        var Bu = __c.Bu;
        var P = __c.P;
        var ox = __c.ox;
        var du = __c.du;
        var D = __c.D;
        var F = __c.F;
        var V4 = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.SS(b.reference.Ii);
                a = a.FW(b.reference.Si);
                return c != null && a != null;
              case 1:
                return a.SS(b.reference.Ii) != null;
              case 2:
                return a.FW(b.reference.Si) != null;
              case 3:
                return !1;
              default:
                throw new F(b.reference);
            }
          },
          gWb = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.ma.length > 0) return !1;
                a = a.HG(c.LZ.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.ID(new __c.LD(), a.OI).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return V4(b, d);
                        case 1:
                          return V4(b, d.start) && V4(b, d.end);
                        default:
                          throw new F(d);
                      }
                    }).length > 0;
              default:
                throw new F(c);
            }
          },
          hWb = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.ya;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  (k.boundary === "start" ? g.span.bc === c : g.span.cd === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c =
                      k.boundary === "start"
                        ? c === null || c === void 0
                          ? void 0
                          : c.Ca
                        : c === null || c === void 0
                        ? void 0
                        : c.La))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: D(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.Opa),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.aXa),
                      (h = h.ya === k.ya && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.zc === c.zc &&
                    g.zc === 0
                      ? (g.Opa = f)
                      : e.push({
                          aXa: k,
                          irb: l,
                          Opa: f,
                          color: c.color,
                          weight: c.weight,
                          zc: c.zc,
                        });
                  }
              }
            return e;
          },
          iWb = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.ya,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  (l.boundary === "start" ? d.span.Xb === h : d.span.Rc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d =
                      l.boundary === "start"
                        ? d === null || d === void 0
                          ? void 0
                          : d.Ba
                        : d === null || d === void 0
                        ? void 0
                        : d.Ta) &&
                      (l.boundary !== "start" || e(g, h) !== 1))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { ya: g, boundary: "start" }
                      : { ya: D(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.yIa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.Rpa),
                      (k = k.ya === m.ya && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.zc === d.zc &&
                    h.zc === 0
                      ? (h.Rpa = g)
                      : f.push({
                          yIa: l,
                          srb: m,
                          Rpa: g,
                          color: d.color,
                          weight: d.weight,
                          zc: d.zc,
                        });
                  }
              }
            return f;
          },
          jWb = function (a, b, c, d, e) {
            const f = a.wYa.C8a(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                w = f.get(r) || 0;
              return t <= w ? q : r;
            };
            const g = new Map();
            if (d.length === 0 || e.length === 0) return g;
            var h = [],
              k = b.layout.cols.fc(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.fc(d[0].ya)) &&
              e.push({ ya: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].ya)) &&
              e.push({ ya: d, boundary: "start" });
            for (const q of h) {
              h = (d = q.boundary === "start" ? q.column : void 0)
                ? b.layout.cols.fc(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = r.boundary === "start" ? r.ya : void 0;
                k = l ? b.layout.rows.fc(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k =
                  q.boundary === "end"
                    ? l === null || l === void 0
                      ? void 0
                      : l.Ta
                    : m === null || m === void 0
                    ? void 0
                    : m.Ba;
                m =
                  r.boundary === "end"
                    ? n === null || n === void 0
                      ? void 0
                      : n.La
                    : m === null || m === void 0
                    ? void 0
                    : m.Ca;
                n =
                  q.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Ta
                    : n === null || n === void 0
                    ? void 0
                    : n.Ba;
                l =
                  r.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.La
                    : l === null || l === void 0
                    ? void 0
                    : l.Ca;
                p = __c.CDa({ Ca: n, La: k, Ba: l, Ta: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: w, width: u } =
                  (t === null || t === void 0 ? void 0 : t.zc) === 1
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(
                          (l === null || l === void 0 ? void 0 : l.weight) || 0,
                          (m === null || m === void 0 ? void 0 : m.weight) || 0
                        ),
                        width: Math.max(
                          (n === null || n === void 0 ? void 0 : n.weight) || 0,
                          (k === null || k === void 0 ? void 0 : k.weight) || 0
                        ),
                      };
                g.set(W4(q, r), __c.lE(p, w / 2, u / 2));
              }
            }
            return g;
          },
          kWb = function (a, b, c, d, e, f) {
            if (d.length === 0 || e.length === 0) return [];
            const g = hWb(b, c, d, e);
            f = iWb(b, c, d, e, f);
            const h = jWb(a, b, c, d, e),
              k = a.wdb(b),
              l = a.Tcb(b),
              m = b.direction === "rtl";
            a = g
              .map((n) => {
                var p,
                  q,
                  r = n.irb,
                  t = n.Opa,
                  w = n.aXa;
                const u = n.color,
                  x = n.weight;
                n = n.zc;
                const y = m ? -1 : 1,
                  A =
                    (p = h.get(W4(r, w))) === null || p === void 0
                      ? void 0
                      : p.Ta;
                p =
                  (q = h.get(W4(t, w))) === null || q === void 0
                    ? void 0
                    : q.Ba;
                if (A != null && p != null) {
                  q = D(k.get(w.ya));
                  var z = D(l.get(r.column));
                  r = D(l.get(t.column));
                  w = w.boundary === "start" ? q.start : q.end;
                  q = z.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: u,
                    weight: x,
                    zc: n,
                    p1: new du(q + A * y, w),
                    p2: new du(t + p * y, w),
                    ...__c.qE((t - q) * y, n * x, A),
                  };
                }
              })
              .filter(__c.wb);
            return [
              ...f
                .map((n) => {
                  var p,
                    q,
                    r = n.yIa,
                    t = n.srb,
                    w = n.Rpa;
                  const u = n.color,
                    x = n.weight;
                  n = n.zc;
                  const y =
                    (p = h.get(W4(r, t))) === null || p === void 0
                      ? void 0
                      : p.La;
                  p =
                    (q = h.get(W4(r, w))) === null || q === void 0
                      ? void 0
                      : q.Ca;
                  if (y != null && p != null) {
                    q = D(l.get(r.column));
                    var A = D(k.get(t.ya));
                    t = D(k.get(w.ya));
                    r = r.boundary === "start" ? q.start : q.end;
                    q = A.start;
                    w = w.boundary === "start" ? t.start : t.end;
                    return {
                      color: u,
                      weight: x,
                      zc: n,
                      p1: new du(r, q + y),
                      p2: new du(r, w + p),
                      ...__c.qE(w - q, n * x, y),
                    };
                  }
                })
                .filter(__c.wb),
              ...a,
            ];
          },
          lWb = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.Bd(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.Bd(d, (e) => `${e.Tk}_${e.Uk}`);
              for (const [, e] of a) {
                const { Uk: f, Tk: g } = e[0];
                a = __c.Bd(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Tk: g, Uk: f });
              }
            }
            return b;
          },
          mWb = function (a, b, c, d) {
            var e = __c.Prb;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { ya: k, boundary: "start" },
                      { ya: k, boundary: "end" },
                    ]
                  : [{ ya: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.wYa.oob(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = kWb(e, a, h, f, g, d);
            return lWb(c);
          },
          X4 = function () {
            const [a] = (0, __c.fc)(() => ox());
            return a;
          },
          nWb = function (a) {
            switch (a) {
              case 2:
                return P("ibdecg");
              case 7:
                return P("446quA");
              case 5:
                return P("j1fbqg");
              case 1:
                return P("O5i4AQ");
              case 6:
                return P("C0VHsg");
              case 4:
                return P("9ND0kg");
              case -1:
                return P("RWqnLA");
              case 9:
                return P("nQR/7w");
              case -2:
                return P("P23rtA");
              case 3:
                return P("+IXmVg");
              default:
                throw new F(a);
            }
          },
          oWb = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          pWb = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.Srb)(a) / 2
                  : -(0, __c.Qrb)(a) / 2,
              c = -(0, __c.Rrb)(a) / 2,
              d = a.width + (0, __c.Qrb)(a) / 2 + (0, __c.Srb)(a) / 2;
            a = a.height + (0, __c.Rrb)(a) / 2 + (0, __c.Trb)(a) / 2;
            return Bu({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          qWb = function (a) {
            return (b) => ({ type: "react", node: (0, __c.N)(a, { ...b }) });
          },
          sWb = function (a) {
            var b;
            const c = a.KA;
            var d = a.content;
            const e = a.context;
            a = a.tq;
            __c.C(
              (d === null || d === void 0
                ? void 0
                : (b = d.Ag) === null || b === void 0
                ? void 0
                : b.type) === "formula"
            );
            b = d.Yk;
            const f = { type: "dom", render: (h) => (h.innerText = "") };
            switch (b.type) {
              case 9:
                d = f;
                break;
              case 6:
                var g;
                d =
                  (g = c.Dka) === null || g === void 0
                    ? void 0
                    : g.call(c, {
                        content: __c.me(__c.Y3a, {
                          ...__c.Ucb,
                          value: b.value,
                        }),
                        context: e,
                        tq: a,
                      });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                d = rWb(c, e, d.AB, d.Yk.type);
                break;
              case 0:
                d = {
                  type: "react",
                  node: Y4(__c.HR, {
                    label: nWb(b.error),
                    children: Y4(__c.qy, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: Y4(__c.mzb, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new F(b);
            }
            return d !== null && d !== void 0 ? d : f;
          },
          rWb = function (a, b, c, d) {
            var e;
            return (e = a.Gka) === null || e === void 0
              ? void 0
              : e.call(a, { context: b, value: c, valueType: d });
          },
          vWb = function (a) {
            const b = a.KA,
              c = a.Tf,
              d = a.asb,
              e = a.Ab;
            b.Gka = (f) => __c.AKa({ ...f, Ab: e });
            b.tFa = (f) => sWb({ ...f, KA: b });
            b.Dka = qWb(tWb({ Tf: c, GR: void 0 }));
            b.vFa = uWb(d, e);
            b.wFa = qWb((f) => Y4(Z4, { ...f, Ab: e }));
          },
          wWb = function ({
            label: a,
            cb: b,
            width: c,
            height: d,
            scale: e,
            HIa: f,
          }) {
            return Y4("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: $4(__c.ny, {
                className: a5("ivlMMQ", b5(f)),
                size: "small",
                alignment: "center",
                children: [b && Y4(b, { size: "small" }), a],
              }),
            });
          },
          b5 = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          yWb = function ({ Gd: a, NNa: b, scale: c, aq: d, bq: e, E1a: f }) {
            const g = c5(() => {
                const m = d === null || d === void 0 ? void 0 : d.get();
                if (m != null && m.length !== 0) return new __c.$D(m);
              }, [d]),
              h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return Y4(__c.oy, {
              lr: "light",
              light: "light",
              vu: "light",
              dark: "light",
              children: (m) =>
                Y4("div", {
                  className: a5("ze9QCQ", l, m.className),
                  style: { width: k, height: k },
                  children: Y4("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: a5("N7J3UA", l),
                    ref: g === null || g === void 0 ? void 0 : g.$m,
                    children: Y4(__c.LR, {
                      className: a5("m8CFdg", l, { G6wL4w: f, W_E0wA: b }),
                      ariaLabel: P("ruWN9A"),
                      children: Y4(xWb, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          AWb = function () {
            const a = new zWb(),
              b = new __c.jS(),
              c = d5((f) => {
                const {
                    scale: g = 1,
                    INa: h,
                    size: k = "small",
                    E1a: l = !0,
                  } = f,
                  m = e5((n) => a.bq({ scale: n, size: k, lua: h }), [k, h]);
                return Y4(yWb, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  Gd: f.sheet.direction === "rtl",
                  NNa: f.selection != null && a.Fgb(f.sheet, f.selection),
                  bq: m,
                  E1a: l,
                });
              }),
              d = d5((f) => {
                const {
                    scale: g = 1,
                    INa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Uob: n,
                  } = f,
                  p = e5((u) => a.bq({ scale: u, size: k, lua: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = e5((u) => m != null && a.nya(m).has(u), [m]),
                  t = e5((u) => m != null && a.xeb(l, m).has(u), [l, m]),
                  w = e5(
                    (u) => {
                      const x =
                        n != null &&
                        l.layout.cols.bf(u, n.Xb) >= 0 &&
                        l.layout.cols.bf(u, n.Rc) <= 0;
                      return r(u)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(u)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return Y4(f5, { ...f, xd: g, Od: q, bq: p, AF: w, rG: b });
              }),
              e = d5((f) => {
                const {
                    scale: g = 1,
                    INa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Uob: n,
                  } = f,
                  p = e5((u) => a.bq({ scale: u, size: k, lua: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = e5((u) => m != null && a.pya(m).has(u), [m]),
                  t = e5((u) => m != null && a.yeb(l, m).has(u), [l, m]),
                  w = e5(
                    (u) => {
                      const x =
                        n != null &&
                        l.layout.rows.bf(u, n.bc) >= 0 &&
                        l.layout.rows.bf(u, n.cd) <= 0;
                      return r(u)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(u)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return Y4(g5, { ...f, xd: q, Od: g, bq: p, AF: w, rG: b });
              });
            return { e2a: c, d2a: d, f2a: e };
          },
          BWb = function (a) {
            const b = a.Sq,
              c = () => null;
            return __c.yx((d) => Y4(h5, { ...d, Sq: b, bi: c }));
          },
          CWb = function ({ sheet: a, aa: b, range: c, le: d }) {
            i5(
              () =>
                j5(() => {
                  if (d.current != null) {
                    var e,
                      f =
                        (e = b === null || b === void 0 ? void 0 : b.get()) !==
                          null && e !== void 0
                          ? e
                          : 1;
                    e = a.direction === "rtl";
                    e = c ? a.Ba(c.Xb) * f * (e ? 1 : -1) : 0;
                    var g = c ? -a.Ca(c.bc) * f : 0;
                    d.current.style.transform = `translate(${e}px, ${g}px)`;
                    d.current.style.width = `${a.width * f}px`;
                    d.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          FWb = function ({ onScroll: a }) {
            const b = new DWb(a);
            return {
              zD: b,
              pka: d5((c) =>
                Y4(EWb, { sheet: c.sheet, zD: b, children: c.children })
              ),
            };
          },
          IWb = function (a) {
            const b = a.Sq,
              c = a.Bf,
              d = a.xYa,
              e = ({ children: k }) => k,
              { zD: f, pka: g } = FWb({ onScroll: a.onScroll });
            class h extends GWb {
              get rM() {
                const k = this.props.ua.Ju;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new F(k);
                }
              }
              componentDidMount() {
                d.lYa(this.props.item, {
                  $b: this.props.$b,
                  ua: this.props.ua,
                });
              }
              componentWillUnmount() {
                d.u7a(this.props.item, {
                  $b: this.props.$b,
                  ua: this.props.ua,
                });
              }
              render() {
                d.lYa(this.props.item, {
                  $b: this.props.$b,
                  ua: this.props.ua,
                });
                return Y4(HWb, {
                  ...this.props,
                  aa: this.aa,
                  Sq: b,
                  rM: this.rM,
                  bi: this.bi,
                  xYa: d,
                  zD: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.aa = k5(() => {
                  const l = this.props.item;
                  var m = this.props.ua,
                    n = m.Ju;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return m;
                    case "print":
                      n = d.Adb(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.AE(l, n.$b, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new F(n);
                  }
                });
                this.bi = d5((l) =>
                  Y4("div", {
                    className: "wKvivQ",
                    children: Y4(__c.IKa, { ...this.props, ...l, Bf: c }),
                  })
                );
              }
            }
            return { Z3a: h, zD: f };
          },
          JWb = function (a, b) {
            if (
              b != null &&
              b.Xb != null &&
              b.bc != null &&
              b.Rc != null &&
              b.cd != null
            ) {
              var c = a.Ba(b.Xb),
                d = a.Ca(b.bc),
                e = a.Ba(b.Rc) + b.Rc.width - c;
              a = a.Ca(b.cd) + b.cd.height - d;
              return Bu({ top: d, left: c, width: e, height: a });
            }
          },
          LWb = function (a) {
            const b = a.Sq,
              c = () => null;
            return (d) => Y4(KWb, { ...d, Sq: b, bi: c });
          },
          OWb = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { XHa: b, Ls: b, Qa: {}, Eo: {} },
              d = l5(
                () => a.TA.style || c,
                (h) => {
                  var k;
                  Object.assign(a.H9.style, h.XHa);
                  Object.assign(a.KM.style, h.Ls);
                  Object.assign(a.LE.style, h.Qa);
                  Object.assign(a.RE.style, h.Eo);
                  h =
                    h === null || h === void 0
                      ? void 0
                      : (k = h.Qa) === null || k === void 0
                      ? void 0
                      : k.textDecoration;
                  a.LE.classList.toggle("OQx3PQ", h === "underline");
                  a.LE.classList.toggle("_99ezUA", h === "line-through");
                  a.LE.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: MWb }
              ),
              e = l5(
                () => a.dta,
                (h) => {
                  a.LE.classList.toggle("_84KvRA", !h);
                  a.H9.classList.toggle("_84KvRA", !h);
                  a.KM.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = l5(
                () => a.renderer,
                (h) => {
                  a.u$ &&
                  (h === null || h === void 0 ? void 0 : h.type) !== "react"
                    ? ((a.u$ = void 0), a.E4.remove())
                    : (a.RE.innerHTML = "");
                  switch (h === null || h === void 0 ? void 0 : h.type) {
                    case "react":
                      a.u$ = NWb(h.node, a.E4);
                      a.RE.appendChild(a.E4);
                      break;
                    case "dom":
                      h.render(a.RE);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new F(h);
                  }
                  a.ava();
                },
                { fireImmediately: !0 }
              ),
              g = l5(
                () => a.Ara,
                (h) => {
                  a.LE.classList.toggle("qxD1GA", h);
                },
                { fireImmediately: !0 }
              );
            return () => {
              d();
              e();
              f();
              g();
            };
          },
          MWb = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          QWb = function (a) {
            const b = a.LA,
              c = a.FD,
              d = a.bE,
              e = a.Y0a,
              f = a.Mo,
              g = new PWb(c),
              h = (k, l) => (f ? gWb(f, k, l) : !1);
            return (k) =>
              Y4(m5, {
                ...k,
                AO: h,
                bE: d,
                FD: c,
                LA: b,
                Csa: g,
                Y0a: e === null || e === void 0 ? void 0 : e.get(),
              });
          },
          W4 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.ya.id}-${b.boundary}`,
          tWb =
            ({ Tf: a, GR: b }) =>
            (c) =>
              (0, __c.N)(__c.Vrb, { ...c, Tf: a, GR: b }),
          n5 = __webpack_require__(443763),
          RWb = n5.Fragment,
          Y4 = n5.jsx,
          $4 = n5.jsxs;
        var d5 = __webpack_require__(214645).Pi;
        var o5 = __webpack_require__(875604),
          p5 = o5.Component,
          GWb = o5.PureComponent,
          e5 = o5.useCallback,
          i5 = o5.useEffect,
          SWb = o5.useLayoutEffect,
          c5 = o5.useMemo,
          q5 = o5.useRef,
          TWb = o5.useState;
        var r5 = __webpack_require__(519427),
          s5 = r5.action,
          j5 = r5.autorun,
          t5 = r5.comparer,
          k5 = r5.computed,
          UWb = r5.createAtom,
          u5 = r5.observable,
          l5 = r5.reaction,
          VWb = r5.untracked;
        var v5 = __webpack_require__(46239).gn;
        var WWb = __webpack_require__,
          XWb = WWb(993864),
          a5 = WWb.n_x(XWb)();
        var YWb = __webpack_require__(358579).Z;
        var w5 = __webpack_require__(635872),
          x5 = w5.Om,
          ZWb = w5.kq,
          $Wb = w5.YN;
        var NWb = __webpack_require__(204358).createPortal;
        var aXb = d5((a) => {
            var b,
              c,
              d = a.sheet.direction === "rtl";
            d = { H2wykw: !d, UweldA: d };
            const [e] = TWb(() => ox()),
              f = {
                get: e5(() => {
                  var g;
                  const h =
                    e === null || e === void 0
                      ? void 0
                      : (g = e.current) === null || g === void 0
                      ? void 0
                      : g.getBoundingClientRect();
                  var k, l;
                  g = {
                    top: 0,
                    left: 0,
                    width:
                      (k = h === null || h === void 0 ? void 0 : h.width) !==
                        null && k !== void 0
                        ? k
                        : 0,
                    height:
                      (l = h === null || h === void 0 ? void 0 : h.height) !==
                        null && l !== void 0
                        ? l
                        : 0,
                  };
                  return Bu(g);
                }, [e]),
              };
            return $4("div", {
              className: a5("nMvVqA", d),
              children: [
                $4("div", {
                  ref: YWb(a.le, e),
                  className: "_0YOFPg",
                  children: [
                    Y4(a.Sq, { ...a, viewport: f }),
                    Y4("div", {
                      className: a5("Gdl7fQ", d),
                      children:
                        (c = a.OEa) === null || c === void 0
                          ? void 0
                          : (b = c.get()) === null || b === void 0
                          ? void 0
                          : b.map((g, h) => Y4(g, {}, h)),
                    }),
                  ],
                }),
                a.UEb === "visible" &&
                  $4(RWb, {
                    children: [
                      Y4("div", {
                        className: a5("_32sKQw", d),
                        children: Y4(a.W3a, { ...a }),
                      }),
                      Y4("div", {
                        className: a5("xdIsTQ", d),
                        children: Y4(a.$3a, { ...a }),
                      }),
                      Y4("div", {
                        className: a5("rsTRSA", d),
                        children: Y4(a.Y3a, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          bXb = d5((a) => {
            a = a.content;
            __c.v(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.ba;
              case "text3":
                return __c.Wq.xa(a.value).cells.ba();
              default:
                throw new F(a);
            }
          });
        var uWb = (a, b) =>
            __c.mKa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ rh: c } = __c.pg(__c.Xg, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    Pa: void 0,
                    writingMode: 1,
                    Md: "start",
                    Yg: cXb(e, c),
                    Ab: b,
                  });
            }),
          cXb = x5(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.ba.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: t5.structural }
          );
        var Z4 = class extends p5 {
          static A(a) {
            Q(a, { rh: k5 });
          }
          get rh() {
            return __c.pg(__c.Xg, this.props.context.attrs).rh;
          }
          render() {
            var a = this.props.content;
            const b = this.props.context;
            if (a.value.isEmpty) return null;
            a = Y4(this.props.bi, {
              content: a,
              ya: b.container.ya,
              col: b.container.column,
              rh: this.rh,
            });
            return this.rh === "wrap"
              ? Y4("div", { className: "dt4Dlg", children: a })
              : a;
          }
          constructor(...a) {
            super(...a);
            Z4.A(this);
          }
        };
        Z4 = v5([Jc], Z4);
        var zWb = class {
          bq({ size: a, scale: b, lua: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.QV * b : __c.fyb * b;
          }
          constructor() {
            this.Fgb = x5((a, b) => {
              var c, d;
              b = b.get();
              return (
                b != null &&
                a.layout.rows.count() ===
                  (((c = b.rows) === null || c === void 0 ? void 0 : c.size) ||
                    0) &&
                a.layout.cols.count() ===
                  (((d = b.columns) === null || d === void 0
                    ? void 0
                    : d.size) || 0)
              );
            });
            this.nya = ZWb(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0
                    ? void 0
                    : b.columns) || []
                );
              },
              { equals: __c.Lr }
            );
            this.pya = ZWb(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0 ? void 0 : b.rows) ||
                    []
                );
              },
              { equals: __c.Lr }
            );
            this.xeb = x5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.pya(b).size > 0) return new Set(a.layout.cols);
                b = this.nya(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ya, e.column);
                  for (const f of oWb(
                    c ? c.span.Xb : e.column,
                    c ? c.span.Rc : e.column,
                    a.layout.cols
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Lr }
            );
            this.yeb = x5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.nya(b).size > 0) return new Set(a.layout.rows);
                b = this.pya(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ya, e.column);
                  for (const f of oWb(
                    c ? c.span.bc : e.ya,
                    c ? c.span.cd : e.ya,
                    a.layout.rows
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Lr }
            );
          }
        };
        var dXb = parseInt("4px", 10) || 4,
          f5 = class extends p5 {
            static A(a) {
              Q(a, { Gd: k5, Fr: k5, W5: k5 });
            }
            get Gd() {
              return this.props.sheet.direction === "rtl";
            }
            get Fr() {
              var a;
              const b =
                (a = this.props.aq) === null || a === void 0 ? void 0 : a.get();
              if (b != null && b.length !== 0) return new __c.$D(b);
            }
            get W5() {
              var a, b, c;
              return (b = (c = this.props).Wqa) === null || b === void 0
                ? void 0
                : (a = b.call(c)) === null || a === void 0
                ? void 0
                : a.get();
            }
            render() {
              return Y4(__c.oy, {
                lr: "light",
                light: "light",
                vu: "light",
                dark: "light",
                children: this.J7a,
              });
            }
            constructor(...a) {
              super(...a);
              this.onMouseMove =
                (f5.A(this),
                s5((b) => {
                  const { onMouseMove: c, sheet: d, xd: e = 1 } = this.props;
                  c === null || c === void 0 || c(b, d, "column", e);
                }));
              this.onMouseLeave = s5((b) => {
                var c, d;
                (c = (d = this.props).onMouseLeave) === null ||
                  c === void 0 ||
                  c.call(d, b);
              });
              this.AWa = (b, c, d) => {
                const {
                    sheet: e,
                    bq: f,
                    AF: g,
                    dFb: h,
                    xd: k = 1,
                    Od: l = 1,
                  } = this.props,
                  m = { jNbTIg: !this.Gd, gtA7Dw: this.Gd },
                  n = (d === null || d === void 0 ? 0 : d.sticky)
                    ? this.Gd
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                var p;
                const q = (d === null || d === void 0 ? 0 : d.sticky)
                  ? (p = this.W5) !== null && p !== void 0
                    ? p
                    : n
                  : void 0;
                let r = -1;
                return $4("div", {
                  style: q,
                  className: a5("Vt2_4w", m, {
                    Tn3nUw: d === null || d === void 0 ? void 0 : d.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    e.layout.cols.map((t) => {
                      var w;
                      r++;
                      if (
                        !(
                          (b && e.layout.cols.bf(t, b) < 0) ||
                          (c && e.layout.cols.bf(t, c) > 0)
                        )
                      )
                        return Y4(
                          eXb,
                          {
                            col: t,
                            label: __c.AA(r),
                            cb:
                              h === null || h === void 0
                                ? void 0
                                : (w = h.get()) === null || w === void 0
                                ? void 0
                                : w.get(t),
                            bq: f,
                            AF: g,
                            xd: k,
                            Od: l,
                          },
                          t.id
                        );
                    }),
                    (d === null || d === void 0 ? void 0 : d.sticky) &&
                      Y4("div", {
                        style: { width: dXb * k },
                        className: a5("HBvlug", "ru3tFQ", m),
                      }),
                  ],
                });
              };
              this.J7a = (b) => {
                var c;
                const d = this.props.sheet,
                  e = d.view.freeze.yI
                    ? d.layout.Xd.get(d.view.freeze.yI)
                    : void 0,
                  f = { jNbTIg: !this.Gd, gtA7Dw: this.Gd };
                return $4("div", {
                  ref: (c = this.Fr) === null || c === void 0 ? void 0 : c.$m,
                  className: a5("xhBZaw", f, b.className),
                  children: [
                    e && this.AWa(void 0, e, { sticky: !0 }),
                    this.AWa(e ? d.cols.next(e) : void 0),
                  ],
                });
              };
            }
          };
        f5 = v5([Jc], f5);
        var g5 = class extends p5 {
          static A(a) {
            Q(a, { Gd: k5, Fr: k5, W5: k5 });
          }
          get Gd() {
            return this.props.sheet.direction === "rtl";
          }
          get Fr() {
            var a;
            const b =
              (a = this.props.aq) === null || a === void 0 ? void 0 : a.get();
            if (b != null && b.length !== 0) return new __c.$D(b);
          }
          get W5() {
            var a, b, c;
            return (b = (c = this.props).Wqa) === null || b === void 0
              ? void 0
              : (a = b.call(c)) === null || a === void 0
              ? void 0
              : a.get();
          }
          render() {
            return Y4(__c.oy, {
              lr: "light",
              light: "light",
              vu: "light",
              dark: "light",
              children: this.Eob,
            });
          }
          constructor(...a) {
            super(...a);
            this.onMouseMove =
              (g5.A(this),
              s5((b) => {
                const { onMouseMove: c, sheet: d, Od: e = 1 } = this.props;
                c === null || c === void 0 || c(b, d, "row", e);
              }));
            this.onMouseLeave = s5((b) => {
              var c, d;
              (c = (d = this.props).onMouseLeave) === null ||
                c === void 0 ||
                c.call(d, b);
            });
            this.EWa = (b, c, d) => {
              const {
                  sheet: e,
                  bq: f,
                  AF: g,
                  xd: h = 1,
                  Od: k = 1,
                } = this.props,
                l = { jNbTIg: !this.Gd, gtA7Dw: this.Gd },
                m = (d === null || d === void 0 ? 0 : d.sticky)
                  ? { top: 0 }
                  : void 0;
              var n;
              const p = (d === null || d === void 0 ? 0 : d.sticky)
                ? (n = this.W5) !== null && n !== void 0
                  ? n
                  : m
                : void 0;
              let q = -1;
              return $4("div", {
                style: p,
                className: a5("_93roJg", l, {
                  Tn3nUw: d === null || d === void 0 ? void 0 : d.sticky,
                }),
                onMouseMove: this.onMouseMove,
                onMouseLeave: this.onMouseLeave,
                children: [
                  e.rows.map((r) => {
                    q++;
                    if (
                      !(
                        (b && e.rows.bf(r, b) < 0) ||
                        (c && e.rows.bf(r, c) > 0)
                      )
                    )
                      return Y4(
                        fXb,
                        {
                          ya: r,
                          label: `${q + 1}`,
                          AF: g,
                          bq: f,
                          xd: h,
                          Od: k,
                        },
                        r.id
                      );
                  }),
                  (d === null || d === void 0 ? void 0 : d.sticky) &&
                    Y4("div", {
                      style: { height: dXb * k },
                      className: a5("HBvlug", "koz2Hg"),
                    }),
                ],
              });
            };
            this.Eob = (b) => {
              var c;
              const d = this.props.sheet,
                e = d.view.freeze.GW
                  ? d.layout.ye.get(d.view.freeze.GW)
                  : void 0,
                f = { jNbTIg: !this.Gd, gtA7Dw: this.Gd };
              return $4("div", {
                ref: (c = this.Fr) === null || c === void 0 ? void 0 : c.$m,
                className: a5("An9VeA", f, b.className),
                children: [
                  e && this.EWa(void 0, e, { sticky: !0 }),
                  this.EWa(e ? d.rows.next(e) : void 0),
                ],
              });
            };
          }
        };
        g5 = v5([Jc], g5);
        var eXb = d5((a) => {
            const b = a.label,
              c = a.cb,
              d = a.col,
              e = a.AF,
              f = a.bq,
              g = a.xd;
            a = a.Od;
            const h = f(a),
              k = $Wb(() => e(d));
            return Y4("div", {
              className: a5("_83Rssw", "d2uLIA", b5(k)),
              style: { width: d.width * g, height: h },
              children: Y4(wWb, {
                label: b,
                cb: c,
                width: d.width,
                height: f(1),
                scale: a,
                HIa: k,
              }),
            });
          }),
          fXb = d5((a) => {
            const b = a.label,
              c = a.ya,
              d = a.bq,
              e = a.AF,
              f = a.xd;
            a = a.Od;
            const g = d(f),
              h = $Wb(() => e(c));
            return Y4("div", {
              className: a5("_83Rssw", "JhBzyw", b5(h)),
              style: { width: g, height: c.height * a },
              children: Y4(wWb, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                HIa: h,
              }),
            });
          });
        var gXb =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var hXb =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var xWb = __c.AR({ wp: gXb, medium: hXb });
        var h5 = class extends p5 {
          static A(a) {
            Q(a, { Ge: k5.struct });
          }
          render() {
            const a = this.props.element,
              b = this.props.aq,
              c = this.props.Wu,
              d = this.props.Yu,
              e = this.props.aa;
            return Y4(this.props.Sq, {
              sheet: a.config,
              container: this.props.container.ji(a),
              i9: "visible",
              aq: b,
              Wu: c,
              Yu: d,
              aa: e,
              Ge: this.Ge,
              bi: this.props.bi,
              VH: void 0,
            });
          }
          get Ge() {
            return __c.PA(this.props.element.Ya, this.props.Xe);
          }
          constructor(...a) {
            super(...a);
            h5.A(this);
          }
        };
        h5 = v5([Jc], h5);
        var iXb = class {
          constructor() {
            this.gha = new WeakMap();
            this.Adb = (a) => this.gha.get(a);
            this.lYa = (a, b) => {
              this.gha.set(a, b);
            };
            this.u7a = (a, b) => {
              const c = this.gha.get(a);
              c && c.ua === b.ua && c.$b === b.$b && this.gha.delete(a);
            };
          }
        };
        var y5 = parseInt("4px", 10) || 4,
          jXb = d5(({ sheet: a, aa: b, range: c, Tw: d, Uw: e }) => {
            if (c != null && (d || e)) {
              var f;
              b =
                (f = b === null || b === void 0 ? void 0 : b.get()) !== null &&
                f !== void 0
                  ? f
                  : 1;
              f = a.direction === "rtl";
              var g = { ZJ0G6w: !f, dOI_jA: f };
              if (d && e)
                return (
                  (d = a.Ca(c.cd) + c.cd.height),
                  (a = a.Ba(c.Rc) + c.Rc.width),
                  Y4("div", {
                    style: { top: d * b, width: a * b, height: y5 * b },
                    className: a5("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.Ba(c.Rc) + c.Rc.width),
                  Y4("div", {
                    style: {
                      width: y5 * b,
                      height: a.height * b,
                      ...(f ? { right: c * b } : { left: c * b }),
                    },
                    className: a5("aX8dhQ", "gl1RPg", g),
                  })
                );
              if (e)
                return (
                  (c = a.Ca(c.cd) + c.cd.height),
                  Y4("div", {
                    style: { top: c * b, width: a.width * b, height: y5 * b },
                    className: a5("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var z5 = ({ sheet: a, range: b, aa: c, children: d }) => {
            const e = X4();
            CWb({ sheet: a, aa: c, range: b, le: e });
            return Y4("div", {
              ref: e,
              className: a5(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          kXb = ({ sheet: a, range: b, aa: c, children: d }) => {
            const e = X4();
            CWb({ sheet: a, aa: c, range: b, le: e });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return Y4("div", {
              className: a5("nstn2A", a, "_9sodyg"),
              children: Y4("div", {
                ref: e,
                className: a5("nstn2A", a),
                children: d,
              }),
            });
          };
        var EWb = d5(({ sheet: a, children: b, zD: c }) => {
            const d = e5(
                (f) => {
                  c.Lya(a, f);
                },
                [c, a]
              ),
              e = e5(
                (f) => {
                  f != null ? c.BD.set(a, f) : c.BD.delete(a);
                },
                [c, a]
              );
            return Y4(__c.fub, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              Hv: e,
              children: b,
            });
          }),
          DWb = class {
            Lya(a, b) {
              this.onScroll && this.onScroll(a);
              this.k5.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.BD = new WeakMap();
              this.k5 = u5.map(new Map(), { deep: !1 });
              this.scrollTo = s5((b, c) => {
                b = this.BD.get(b);
                b === null ||
                  b === void 0 ||
                  b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var HWb = d5((a) => {
          const b = a.item,
            c = a.aq,
            d = a.Yf,
            e = a.measureRef,
            f = a.aa,
            g = a.JOa,
            h = a.$b,
            k = a.Wu,
            l = a.Yu,
            m = a.Sq,
            n = a.rM,
            p = a.bi,
            q = a.Xe,
            r = a.zD;
          a = c5(() => __c.PA(b.Ya, q), [b, q]);
          const t = c5(
              () =>
                d5(({ sheet: y, range: A, Tw: z, Uw: B }) =>
                  Y4(z5, {
                    sheet: y,
                    range: A,
                    aa: f,
                    children: Y4(jXb, {
                      sheet: y,
                      aa: f,
                      range: A,
                      Tw: z,
                      Uw: B,
                    }),
                  })
                ),
              [f]
            ),
            w = pWb(b.config),
            u = f.get(),
            x = Math.min(w.width * u, h.width);
          i5(
            () =>
              j5(() => {
                var y = b.config.view.freeze.yI
                  ? b.config.layout.Xd.get(b.config.view.freeze.yI)
                  : void 0;
                if (y != null)
                  if (b.config.Ba(y) + y.width > x) {
                    if ((y = r.BD.get(b))) y.style.overflowX = "hidden";
                  } else if ((y = r.BD.get(b))) y.style.overflowX = "scroll";
              }),
            [b, h.width, r, u, x]
          );
          return Y4("div", {
            ref: e,
            className: "E8r86A",
            style: { width: x },
            children: Y4(n, {
              sheet: b,
              children: Y4("div", {
                ref: g,
                className: "cXTiJA",
                style: { width: w.width * u, height: w.height * u },
                children: Y4("div", {
                  className: "W1ir5A",
                  children: Y4(m, {
                    container: d.Gj(b),
                    sheet: b.config,
                    i9: "visible",
                    aq: c,
                    aa: f,
                    Wu: k,
                    Yu: l,
                    Ge: a,
                    bi: p,
                    VH: t,
                  }),
                }),
              }),
            }),
          });
        });
        var lXb = d5(({ page: a, range: b, rD: c }) => {
          const d = JWb(a.sheet, b);
          return Y4("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              d == null ? c(e, f) : __c.zu(Bu(e)).hq(d) && c(e, f)
            ),
          });
        });
        var mXb = new __c.jS(),
          A5 = (a) => __c.QV * a,
          nXb = () => "primary-default",
          KWb = d5(
            ({
              container: a,
              aq: b,
              Wu: c,
              Yu: d,
              c1: e,
              aa: f,
              viewport: g,
              Lqb: h,
              Sq: k,
              bi: l,
              rD: m,
              zga: n,
              qxb: p,
              ewb: q,
              dwb: r,
            }) => {
              const t = a.page,
                w = c5(
                  () =>
                    d5(({ sheet: u, range: x, Tw: y, Uw: A }) =>
                      $4(RWb, {
                        children: [
                          Y4(z5, {
                            sheet: t.sheet,
                            range: x,
                            aa: f,
                            children: Y4(jXb, {
                              sheet: u,
                              aa: f,
                              range: x,
                              Tw: y,
                              Uw: A,
                            }),
                          }),
                          $4(kXb, {
                            sheet: t.sheet,
                            range: x,
                            aa: f,
                            children: [
                              p && Y4(p, {}),
                              m && Y4(lXb, { page: t, rD: m, range: x }),
                              r && Y4(r, {}),
                              n && n(),
                            ],
                          }),
                          q &&
                            x &&
                            Y4(z5, {
                              sheet: t.sheet,
                              range: x,
                              aa: f,
                              children: Y4(q, { range: x }),
                            }),
                        ],
                      })
                    ),
                  [t, f, p, m, r, n, q]
                );
              return h
                ? Y4(oXb, {
                    container: a,
                    viewport: g,
                    aa: f,
                    aq: b,
                    Wu: c,
                    Yu: d,
                    Sq: k,
                    bi: l,
                    VH: w,
                  })
                : Y4(k, {
                    sheet: t.sheet,
                    container: a,
                    i9: "hidden",
                    aq: b,
                    Wu: c,
                    Yu: d,
                    c1: e,
                    aa: f,
                    viewport: g,
                    bi: l,
                    VH: w,
                  });
            }
          ),
          oXb = d5((a) => {
            const b = a.container,
              c = a.aa,
              d = a.viewport,
              e = a.aq,
              f = a.Wu,
              g = a.Yu,
              h = a.Sq,
              k = a.bi;
            a = a.VH;
            const l = b.page,
              m = l.sheet.direction === "rtl",
              n = q5(null),
              p = q5(null),
              q = q5(null);
            i5(() => {
              const y = B5({
                sheet: l.sheet,
                Kha: !0,
                Lha: !0,
                aa: c,
                viewport: d,
              });
              return l5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = n.current;
                  if (A && z) {
                    var B = l.sheet.direction === "rtl",
                      E;
                    z.style.position =
                      (E = A.position) !== null && E !== void 0 ? E : "sticky";
                    var I;
                    z.style.top =
                      (I = A.top) !== null && I !== void 0 ? I : "0px";
                    var K, H;
                    B
                      ? (z.style.right =
                          (K = A.right) !== null && K !== void 0 ? K : "0px")
                      : (z.style.left =
                          (H = A.left) !== null && H !== void 0 ? H : "0px");
                    var M;
                    z.style.transform =
                      (M = A.transform) !== null && M !== void 0 ? M : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            i5(() => {
              const y = B5({
                sheet: l.sheet,
                Kha: !1,
                Lha: !0,
                aa: c,
                viewport: d,
              });
              return l5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = q.current;
                  if (A && z) {
                    var B;
                    z.style.position =
                      (B = A.position) !== null && B !== void 0 ? B : "sticky";
                    var E;
                    z.style.top =
                      (E = A.top) !== null && E !== void 0 ? E : "0px";
                    var I;
                    z.style.transform =
                      (I = A.transform) !== null && I !== void 0 ? I : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            i5(() => {
              const y = B5({
                sheet: l.sheet,
                Kha: !0,
                Lha: !1,
                aa: c,
                viewport: d,
              });
              return l5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = p.current;
                  if (A && z) {
                    var B = l.sheet.direction === "rtl",
                      E;
                    z.style.position =
                      (E = A.position) !== null && E !== void 0 ? E : "sticky";
                    var I, K;
                    B
                      ? (z.style.right =
                          (I = A.right) !== null && I !== void 0 ? I : "0px")
                      : (z.style.left =
                          (K = A.left) !== null && K !== void 0 ? K : "0px");
                    var H;
                    z.style.transform =
                      (H = A.transform) !== null && H !== void 0 ? H : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            const r = e5(
                (y, A, z) =>
                  B5({ sheet: y, Kha: A, Lha: z, aa: c, viewport: d }),
                [c, d]
              ),
              t = c5(
                () => (r ? () => r(l.sheet, !0, !1) : void 0),
                [r, l.sheet]
              ),
              w = c5(
                () => (r ? () => r(l.sheet, !1, !0) : void 0),
                [r, l.sheet]
              );
            var u;
            const x =
              (u = c === null || c === void 0 ? void 0 : c.get()) !== null &&
              u !== void 0
                ? u
                : 1;
            return $4("div", {
              className: a5("OsKKIQ", "cbOp6Q"),
              children: [
                Y4("div", {
                  className: "VDFv_A",
                  children: Y4(h, {
                    sheet: l.sheet,
                    container: b,
                    i9: "hidden",
                    aq: e,
                    Wu: f,
                    Yu: g,
                    c1: r,
                    aa: c,
                    viewport: d,
                    bi: k,
                    VH: a,
                  }),
                }),
                Y4("div", {
                  ref: n,
                  className: "_688KWg",
                  children: Y4(yWb, { Gd: m, NNa: !1, bq: A5, scale: x }),
                }),
                Y4("div", {
                  ref: q,
                  className: "m0cT1w",
                  children: Y4(f5, {
                    sheet: l.sheet,
                    xd: x,
                    Od: x,
                    bq: A5,
                    AF: nXb,
                    rG: mXb,
                    Wqa: t,
                  }),
                }),
                Y4("div", {
                  ref: p,
                  className: "zm537g",
                  children: Y4(g5, {
                    sheet: l.sheet,
                    xd: x,
                    Od: x,
                    bq: A5,
                    AF: nXb,
                    rG: mXb,
                    Wqa: w,
                  }),
                }),
              ],
            });
          }),
          B5 = ({ sheet: a, Kha: b, Lha: c, aa: d, viewport: e }) =>
            k5(() => {
              var f = e === null || e === void 0 ? void 0 : __c.Ju(e.get()),
                g;
              const h =
                (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                g !== void 0
                  ? g
                  : 1;
              if (!f) return {};
              g = {};
              f = new du(f.left, f.top);
              const k = a.direction === "rtl";
              g.position = "relative";
              c && (g.top = "0px");
              b && (k ? (g.right = "0px") : (g.left = "0px"));
              g.transform = `translate(${b ? f.x * h : 0}px, ${
                c ? f.y * h : 0
              }px)`;
              return g;
            });
        var PWb = class {
          constructor(a) {
            this.FD = a;
            this.g7a = __c.XT;
            this.hdb = x5((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let t = 0; t < d.length; t++) {
                var g = d[t],
                  h = this.bdb(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[t + 1];
                      if (k == null || !EH(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[t + 1];
                      if (k == null || !EH(b, c, k)) continue;
                      k = d[t - 1];
                      if (k == null || !EH(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[t - 1];
                      if (k == null || !EH(b, c, k)) continue;
                      break;
                    default:
                      throw new F(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + (h === "center" ? 0 : this.g7a);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.Ba(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.Ba(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.Ba(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new F(h);
                      }
                      for (l = d.indexOf(g); l >= 0; l--) {
                        var m = d[l],
                          n = l - 1 < 0 || EH(b, c, d[l - 1]),
                          p;
                        if ((p = m === g || EH(b, c, m))) {
                          p = h;
                          var q = k,
                            r = b.Ba(m);
                          p = p < r && r < q;
                        }
                        if (p && n) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = EH(b, c, l)))
                          (m = h), (n = k), (p = b.Ba(l)), (m = m < p && p < n);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.bdb = (b, c, d) => {
              var e, f;
              const g = b.layout.cells.get(c, d);
              if (
                g &&
                (g.ref.content.ref || g.ref.Ha.ref) &&
                g.span.bc === g.span.cd &&
                g.span.Xb === g.span.Rc
              ) {
                var h = this.FD.Vw(b, c, d);
                b = this.FD.Qqa(
                  b,
                  c,
                  d,
                  __c.Yg({ rh: void 0, textAlign: void 0 })
                );
                var { rh: k, textAlign: l } = __c.pg(__c.Xg, b);
                if (k === "overflow")
                  return __c.nKa(
                    l,
                    (e = g.ref.content.ref) === null || e === void 0
                      ? void 0
                      : e.type,
                    (f = g.ref.Ha.ref) === null || f === void 0
                      ? void 0
                      : f.type,
                    h ? () => h.Yk.type : void 0
                  );
              }
            };
          }
        };
        var pXb = d5(function (a) {
          const b = a.sheet;
          var c = a.xj;
          const d = a.Fub,
            e = a.aa,
            f = a.Csa,
            g = a.Rcb;
          a = a.overflow;
          const h = X4();
          SWb(
            () =>
              j5(() => {
                const p = D(h.current);
                var q;
                const r =
                  (q = e === null || e === void 0 ? void 0 : e.get()) !==
                    null && q !== void 0
                    ? q
                    : 1;
                q = b.height;
                p.style.width = `${b.width * r}px`;
                p.style.height = `${q * r}px`;
              }),
            [h, e, b]
          );
          const k = e5((p) => f.hdb(b, p, d, g), [f, b, d, g]);
          var l = e5(
            (p, q) => {
              var r, t;
              return (t =
                (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !==
                null && t !== void 0
                ? t
                : 0;
            },
            [k]
          );
          c = mWb(b, c, d, l);
          l = b.width;
          const m = b.height,
            n = b.direction === "rtl";
          return Y4("svg", {
            ref: h,
            role: "presentation",
            className: a5("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, Tk: t, Uk: w }) =>
              Y4(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: w,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: u, p2: x }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${w}`
              )
            ),
          });
        });
        var qXb = class {
          get size() {
            return this.sha;
          }
          get([a, b]) {
            return (a = this.aG.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.aG.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.aG.get(a);
            d == null && ((d = new Map()), this.aG.set(a, d));
            d.set(b, c);
            this.sha++;
            return this;
          }
          clear() {
            this.aG.clear();
            this.sha = 0;
          }
          delete([a, b]) {
            const c = this.aG.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.sha--;
            c.size === 0 && this.aG.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.aG) for (const [d, e] of c) a([b, d], e);
          }
          *[Symbol.iterator]() {
            for (const [a, b] of this.aG)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.sha = 0;
            this.aG = new Map();
          }
        };
        var D5 = class extends p5 {
          render() {
            const { uba: a, ...b } = this.props,
              c = this.props.sheet;
            return $4("div", {
              ref: this.zYa,
              className: a5(
                "ZTz_iA",
                c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
              ),
              children: [
                (a === null || a === void 0 ? void 0 : a.nHa) &&
                  Y4(C5, {
                    ...b,
                    sheet: c,
                    range: a.nHa.range,
                    Tw: !0,
                    Uw: !0,
                    className: "_0C8M3w",
                  }),
                (a === null || a === void 0 ? void 0 : a.h1a) &&
                  Y4(C5, {
                    ...b,
                    sheet: c,
                    range: a.h1a.range,
                    Tw: !1,
                    Uw: !0,
                    className: "_7n44yg",
                  }),
                (a === null || a === void 0 ? void 0 : a.QNa) &&
                  Y4(C5, {
                    ...b,
                    sheet: c,
                    range: a.QNa.range,
                    Tw: !0,
                    Uw: !1,
                    className: "fF5r6w",
                  }),
                (a === null || a === void 0 ? void 0 : a.r0a) &&
                  Y4(C5, {
                    ...b,
                    sheet: c,
                    range: a.r0a.range,
                    Tw: !1,
                    Uw: !1,
                    className: "llILYw",
                  }),
              ],
            });
          }
          componentDidMount() {
            const a = j5(() => {
              var b = this.props,
                c = b.aa;
              b = b.sheet;
              const d = this.zYa.current;
              d &&
                ((c = c ? c.get() : 1),
                (d.style.width = `${b.width * c}px`),
                (d.style.height = `${b.height * c}px`));
            });
            __c.vc(this, [a]);
          }
          constructor(...a) {
            super(...a);
            this.zYa = ox();
          }
        };
        D5 = v5([Jc], D5);
        var C5 = class extends p5 {
          static A(a) {
            Q(a, { Yya: k5, bounds: k5 });
          }
          get Yya() {
            const a = this.props.viewport,
              b = this.props.Tw,
              c = this.props.Uw;
            return a == null || (!b && !c)
              ? a
              : k5(() => {
                  const d = __c.Ju(a.get());
                  return Bu({
                    top: c ? 0 : d.top,
                    left: b ? 0 : d.left,
                    width: d.width,
                    height: d.height,
                  });
                });
          }
          render() {
            const a = this.props.AO,
              b = this.props.sheet,
              c = this.props.container,
              d = this.props.range,
              e = this.props.VH,
              f = this.props.Tw,
              g = this.props.Uw;
            return $4("div", {
              ref: this.mwa,
              className: a5("i0YQww", this.props.className),
              children: [
                Y4("div", {
                  ref: this.MUa,
                  className: "vUKoKg",
                  children: Y4("div", {
                    ref: this.NUa,
                    children: Y4(E5, {
                      AO: a,
                      sheet: b,
                      container: c,
                      bounds: d,
                      aq: this.props.aq,
                      bE: this.props.bE,
                      bi: this.props.bi,
                      t_: this.props.t_,
                      aa: this.props.aa,
                      xj: this.xj,
                      z7: this.z7,
                      bT: this.bT,
                    }),
                  }),
                }),
                Y4(this.rka, {}),
                e && Y4(e, { sheet: b, range: d, Tw: f, Uw: g }),
              ],
            });
          }
          componentDidMount() {
            const a = j5(() => {
                var g = this.props,
                  h = g.aa,
                  k = g.sheet;
                const l = g.range;
                var m = this.mwa.current;
                const n = this.MUa.current;
                g = this.NUa.current;
                h = h ? h.get() : 1;
                const p = l ? k.Ba(l.Rc) + l.Rc.width - k.Ba(l.Xb) : k.width,
                  q = l ? k.Ca(l.cd) + l.cd.height - k.Ca(l.bc) : k.height;
                m &&
                  ((m.style.width = `${p * h}px`),
                  (m.style.height = `${q * h}px`));
                n &&
                  ((n.style.width = `${p * h}px`),
                  (n.style.height = `${q * h}px`));
                m = k.direction === "rtl";
                m = l ? k.Ba(l.Xb) * h * (m ? 1 : -1) : 0;
                k = l ? -k.Ca(l.bc) * h : 0;
                g && (g.style.transform = `translate(${m}px, ${k}px)`);
              }),
              b = this.props.sheet;
            var c = this.props.c1;
            const d = this.props.Tw,
              e = this.props.Uw,
              f =
                d || e
                  ? c === null || c === void 0
                    ? void 0
                    : c(b, d, e)
                  : void 0;
            c = j5(() => {
              const g = this.mwa.current;
              if (g != null) {
                var h = d || e ? "sticky" : "relative",
                  k = e ? "0px" : "unset",
                  l = d ? "0px" : "unset",
                  m = d ? "0px" : "unset",
                  n = b.direction === "rtl";
                if (f == null)
                  (g.style.position = h),
                    (g.style.top = k),
                    (g.style.left = n ? "unset" : l),
                    (g.style.right = n ? m : "unset");
                else {
                  const u = f.get();
                  var p;
                  g.style.position =
                    (p = u.position) !== null && p !== void 0 ? p : h;
                  var q;
                  g.style.top = (q = u.top) !== null && q !== void 0 ? q : k;
                  var r;
                  g.style.left = n
                    ? "unset"
                    : (r = u.left) !== null && r !== void 0
                    ? r
                    : l;
                  var t;
                  g.style.right = n
                    ? (t = u.right) !== null && t !== void 0
                      ? t
                      : m
                    : "unset";
                  var w;
                  g.style.transform =
                    (w = u.transform) !== null && w !== void 0 ? w : "unset";
                }
              }
            });
            __c.vc(this, [a, c]);
          }
          get bounds() {
            const a = this.props.sheet,
              b = this.props.range;
            if (a.layout.cols.empty || a.layout.rows.empty)
              return { Xb: void 0, Rc: void 0, bc: void 0, cd: void 0 };
            var c, d, e, f;
            return {
              Xb:
                (c = b === null || b === void 0 ? void 0 : b.Xb) !== null &&
                c !== void 0
                  ? c
                  : a.layout.cols.first(),
              Rc:
                (d = b === null || b === void 0 ? void 0 : b.Rc) !== null &&
                d !== void 0
                  ? d
                  : a.layout.cols.last(),
              bc:
                (e = b === null || b === void 0 ? void 0 : b.bc) !== null &&
                e !== void 0
                  ? e
                  : a.layout.rows.first(),
              cd:
                (f = b === null || b === void 0 ? void 0 : b.cd) !== null &&
                f !== void 0
                  ? f
                  : a.layout.rows.last(),
            };
          }
          constructor(...a) {
            super(...a);
            this.mwa = (C5.A(this), ox());
            this.MUa = ox();
            this.NUa = ox();
            this.bT = new rXb();
            this.Gub = k5(
              () =>
                [...this.xj.get().keys()].sort((b, c) =>
                  this.props.sheet.layout.rows.bf(b, c)
                ),
              { equals: __c.Mr() }
            );
            this.Eub = k5(
              () =>
                [...this.z7.get().keys()].sort((b, c) =>
                  this.props.sheet.layout.cols.bf(b, c)
                ),
              { equals: __c.Mr() }
            );
            this.rka = d5(() =>
              Y4(this.props.V3a, {
                xj: this.Gub,
                Fub: this.Eub,
                Rcb: this.bT.Zcb,
                range: this.props.range,
              })
            );
            this.xj = k5(
              () => {
                var b;
                const c = this.props.sheet;
                var d = this.props.aa,
                  e =
                    (b = this.Yya) === null || b === void 0 ? void 0 : b.get();
                if (e && (e.height <= 0 || e.width <= 0)) return new Map();
                b = this.bounds;
                d = d.get();
                var f = 50 * d;
                const g = e ? e.tl.y - f : b.bc ? c.Ca(b.bc) : 0;
                e = e ? e.br.y + f : b.cd ? c.Ca(b.cd) + b.cd.height : 0;
                f = new Map();
                for (
                  let h = b.bc;
                  h != null && b.cd != null && c.layout.rows.bf(h, b.cd) <= 0;
                  h = c.layout.rows.next(h)
                ) {
                  const k = c.Ca(h);
                  if (!(k + h.height < g)) {
                    if (k > e) break;
                    f.set(h, k * d);
                  }
                }
                return f;
              },
              { equals: t5.shallow }
            );
            this.z7 = k5(
              () => {
                var b;
                const c = this.props.sheet;
                var d = this.props.aa,
                  e =
                    (b = this.Yya) === null || b === void 0 ? void 0 : b.get();
                if (e && (e.height <= 0 || e.width <= 0)) return new Map();
                b = this.bounds;
                d = d.get();
                var f = 50 * d;
                const g = e ? e.tl.x - f : b.Xb ? c.Ba(b.Xb) : 0;
                e = e ? e.br.x + f : b.Rc ? c.Ba(b.Rc) + b.Rc.width : 0;
                f = new Map();
                for (
                  let h = b.Xb;
                  h != null && b.Rc != null && c.layout.cols.bf(h, b.Rc) <= 0;
                  h = c.layout.cols.next(h)
                ) {
                  const k = c.Ba(h);
                  if (!(k + h.width < g)) {
                    if (k > e) break;
                    f.set(h, k * d);
                  }
                }
                return f;
              },
              { equals: t5.shallow }
            );
          }
        };
        C5 = v5([Jc], C5);
        var rXb = class {
            constructor() {
              this.cells = new qXb();
              this.vxa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = u5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.Zcb = (a, b) => {
                var c;
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = u5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                return (c = d.get()) === null || c === void 0 ? void 0 : c.fJa;
              };
            }
          },
          E5 = class extends p5 {
            static A(a) {
              Q(a, { bM: u5.shallow, Fr: k5, VGa: s5, B$: s5.bound });
            }
            get Fr() {
              var a;
              const b =
                (a = this.props.aq) === null || a === void 0 ? void 0 : a.get();
              if (b != null && b.length !== 0) return new __c.$D(b);
            }
            render() {
              var a;
              return $4("div", {
                ref: YWb(
                  this.le,
                  (a = this.Fr) === null || a === void 0 ? void 0 : a.$m
                ),
                children: [
                  Y4("div", { ref: this.ena, className: "_5YlOqQ" }),
                  Y4("div", { ref: this.gna, className: "_XCmKw" }),
                  this.bM.map((b) => b.Umb),
                ],
              });
            }
            componentDidMount() {
              const a = l5(
                  () => [
                    this.props.sheet,
                    this.props.z7.get(),
                    this.props.xj.get(),
                  ],
                  ([d, e, f], g) => {
                    [g] = g || [];
                    d !== g &&
                      ((d = D(this.ena.current)),
                      (g = D(this.gna.current)),
                      (d.innerHTML = ""),
                      (g.innerHTML = ""),
                      (this.rDa.length = 0),
                      (this.bM.length = 0));
                    this.VGa(e, f);
                  },
                  { fireImmediately: !0 }
                ),
                b = j5(() => {
                  var d = this.props,
                    e = d.aa;
                  d = d.sheet;
                  const f = this.le.current;
                  f &&
                    ((e = e ? e.get() : 1),
                    (f.style.width = `${d.width * e}px`),
                    (f.style.height = `${d.height * e}px`));
                }),
                c = this.bM.map((d) => OWb(d));
              __c.vc(this, [b, a, ...c]);
            }
            VGa(a, b) {
              const c = D(this.ena.current),
                d = D(this.gna.current),
                e = [],
                f = new Map();
              for (const g of this.rDa)
                b.has(g.ya) ? f.set(g.ya, g) : e.push(g);
              for (const [g, h] of b)
                (b = f.get(g) || e.pop()),
                  b ||
                    ((b = new sXb(this.B$, g)),
                    c.appendChild(b.I9),
                    d.appendChild(b.K9),
                    this.rDa.push(b)),
                  b.update(h, g, a);
              for (const g of e) g.hide();
            }
            B$(a, b) {
              const c = this.props.t_,
                d = this.props.sheet,
                e = this.props.container,
                f = this.props.bT;
              a = new tXb(
                this.props.AO,
                this.props.bE,
                this.props.bi,
                c(a, b),
                d,
                a,
                b,
                e,
                f.vxa,
                this.Kba,
                this.Jba
              );
              __c.vc(this, OWb(a));
              this.bM.push(a);
              return a;
            }
            constructor(...a) {
              super(...a);
              this.le = (E5.A(this), ox());
              this.ena = ox();
              this.gna = ox();
              this.rDa = [];
              this.bM = [];
              this.Kba = x5((b) => {
                const c = this.props.xj.get();
                return b === "first"
                  ? c.keys().next().value
                  : [...c.keys()].pop();
              });
              this.Jba = x5((b) => {
                const c = this.props.z7.get();
                return b === "first"
                  ? c.keys().next().value
                  : [...c.keys()].pop();
              });
            }
          };
        E5 = v5([Jc], E5);
        var sXb = class {
            static A(a) {
              Q(a, { update: s5 });
            }
            update(a, b, c) {
              [this.I9, this.K9].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.ya = b;
              for (const [d] of c)
                (c = this.bM.get(d)),
                  c ||
                    ((c = this.B$(d, b)),
                    this.bM.set(d, c),
                    this.I9.appendChild(c.H9),
                    this.K9.appendChild(c.KM)),
                  c.update(b);
            }
            hide() {
              [this.I9, this.K9].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.B$ = a;
              this.ya = b;
              this.I9 = (sXb.A(this), document.createElement("div"));
              this.K9 = document.createElement("div");
              this.bM = new Map();
            }
          },
          tXb = class {
            static A(a) {
              Q(a, {
                u$: u5.ref,
                ya: u5.ref,
                Ara: k5,
                update: s5,
                tu: k5,
                attrs: k5.struct,
                dta: k5,
                Ls: k5,
                renderer: k5,
                fJa: k5.struct,
              });
            }
            get Ara() {
              if (!__c.Jw("285688d5", !1)) return !1;
              const a = this.tu;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.AO(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.ya &&
                ((this.ya = a),
                (this.TA.ya = a),
                this.$oa && this.$oa(),
                (this.$oa = this.vxa(this.ya, this.col, this)));
            }
            get Umb() {
              return this.u$;
            }
            get tu() {
              const a = this.sheet.layout.cells.get(this.ya, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.TA.attrs;
              return {
                rh: a === null || a === void 0 ? void 0 : a.rh,
                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                direction: a === null || a === void 0 ? void 0 : a.direction,
                link: a === null || a === void 0 ? void 0 : a.link,
              };
            }
            get dta() {
              var a = this.TA.span;
              if (!a) return !1;
              if (a.bc === a.cd && a.Xb === a.Rc) return !0;
              var b = this.Kba("first");
              const c = this.Kba("last"),
                d = this.Jba("first"),
                e = this.Jba("last");
              if (!(b && c && d && e)) return !1;
              b =
                this.sheet.layout.rows.bf(a.bc, b) >= 0 &&
                this.sheet.layout.rows.bf(a.bc, c) <= 0
                  ? a.bc
                  : b;
              a =
                this.sheet.layout.cols.bf(a.Xb, d) >= 0 &&
                this.sheet.layout.cols.bf(a.Xb, e) <= 0
                  ? a.Xb
                  : d;
              return b === this.ya && a === this.col;
            }
            get Ls() {
              const a = this.sheet,
                b = this.ya,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, ya: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.imb.Nd(c, b);
                case "sheet-item":
                  return this.container.Xya.Nd(c, b);
                case "sheet-element":
                  return this.container.Bqb.Nd(c, b);
                default:
                  throw new F(this.container);
              }
            }
            get renderer() {
              const a = this.tu;
              if (a && this.dta && (a.content.ref || a.Ha.ref))
                return this.bE({
                  context: { container: this.Ls, attrs: this.attrs },
                  tq: this.ava,
                  bi: this.bi,
                });
            }
            get fJa() {
              this.gJa.reportObserved();
              var a = VWb(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.E4 : this.RE),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m) {
              var n, p, q, r, t, w;
              this.AO = a;
              this.bE = b;
              this.TA = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.vxa = k;
              this.Kba = l;
              this.Jba = m;
              this.H9 = (tXb.A(this), document.createElement("div"));
              this.KM = document.createElement("div");
              this.LE = document.createElement("div");
              this.RE = document.createElement("div");
              this.E4 = document.createElement("div");
              this.gJa = UWb("content size atom");
              this.ava = s5(() => this.gJa.reportChanged());
              this.ya = g;
              this.H9.className = "_2JFriw";
              this.KM.className = "imy9ug";
              this.LE.className = a5("pDMp7w", {
                _0yZ6Qg:
                  ((p = this.tu) === null || p === void 0
                    ? void 0
                    : (n = p.content.ref) === null || n === void 0
                    ? void 0
                    : n.type) !== "text3",
                qhF5uA:
                  ((r = this.tu) === null || r === void 0
                    ? void 0
                    : (q = r.content.ref) === null || q === void 0
                    ? void 0
                    : q.type) !== "text3" &&
                  ((w = this.tu) === null || w === void 0
                    ? void 0
                    : (t = w.content.ref) === null || t === void 0
                    ? void 0
                    : t.type) !== "text2",
                qxD1GA: this.Ara,
              });
              this.RE.className = "_30B9pw";
              this.LE.appendChild(this.RE);
              this.KM.appendChild(this.LE);
              this.E4.className = "G7zH2w";
              this.$oa = k(this.ya, this.col, this);
              this.bi = (u) => Y4(c, { ...u, tq: this.ava });
            }
          };
        var m5 = class extends p5 {
          static A(a) {
            Q(a, { uba: k5 });
          }
          render() {
            const {
              AO: a,
              sheet: b,
              container: c,
              aq: d,
              c1: e,
              bE: f,
              Ge: g,
              bi: h,
              viewport: k,
              VH: l,
              Y0a: m = !1,
            } = this.props;
            if (!b.layout.cols.empty && !b.layout.rows.empty)
              return Y4("div", {
                className: a5(
                  "SNkrHw",
                  b.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                  { RaA0Nw: m }
                ),
                ...g,
                children: Y4(D5, {
                  AO: a,
                  bE: f,
                  bi: h,
                  V3a: this.rka,
                  t_: this.t_,
                  sheet: b,
                  container: c,
                  aq: d,
                  c1: e,
                  aa: this.aa,
                  viewport: k,
                  VH: l,
                  uba: this.uba,
                }),
              });
          }
          get uba() {
            var a = this.props.sheet;
            const b = {},
              c = a.view.freeze.GW ? a.layout.ye.get(a.view.freeze.GW) : void 0,
              d = a.view.freeze.yI ? a.layout.Xd.get(a.view.freeze.yI) : void 0,
              e = a.layout.rows.first(),
              f = a.layout.rows.last(),
              g = a.layout.cols.first(),
              h = a.layout.cols.last();
            if (e != null && f != null && g != null && h != null) {
              var k = d ? a.layout.cols.next(d) : g;
              a = c ? a.layout.rows.next(c) : e;
              c && d && (b.nHa = { range: { Xb: g, bc: e, Rc: d, cd: c } });
              c && k && (b.h1a = { range: { Xb: k, bc: e, Rc: h, cd: c } });
              d && a && (b.QNa = { range: { Xb: g, bc: a, Rc: d, cd: f } });
              a && k && (b.r0a = { range: { Xb: k, bc: a, Rc: h, cd: f } });
              return b;
            }
          }
          get aa() {
            return this.props.aa ? this.props.aa : k5(() => 1);
          }
          constructor(...a) {
            super(...a);
            this.rka =
              (m5.A(this),
              d5((b) => {
                const {
                  sheet: c,
                  Csa: d,
                  aa: e,
                  i9: f = "hidden",
                } = this.props;
                return Y4(z5, {
                  sheet: c,
                  range: b.range,
                  aa: e,
                  children: Y4(pXb, {
                    ...b,
                    sheet: c,
                    aa: this.aa,
                    Csa: d,
                    overflow: f,
                  }),
                });
              }));
            this.t_ = (b, c) =>
              new __c.GKa(
                this.props.FD,
                this.props.LA,
                this.props.sheet,
                b,
                c,
                this.aa,
                this.Wu,
                this.Yu
              );
            this.Wu = (b, c) => {
              var d, e;
              return (d = (e = this.props).Wu) === null || d === void 0
                ? void 0
                : d.call(e, this.props.sheet, b, c);
            };
            this.Yu = (b, c) => {
              var d, e;
              return (d = (e = this.props).Yu) === null || d === void 0
                ? void 0
                : d.call(e, this.props.sheet, b, c);
            };
          }
        };
        m5 = v5([Jc], m5);
        __c.NKa = {
          Afb: function (a) {
            const b = a.Lo,
              c = a.Td,
              d = a.wd,
              e = a.Ym,
              f = a.FD,
              g = a.LA,
              h = a.yY;
            vWb({ KA: a.KA, Tf: a.Tf, asb: a.YP, Ab: a.Ab });
            const k = QWb({ bE: h, FD: f, LA: g, Mo: void 0 });
            b.Kka = LWb({ Sq: k });
            c.ska = BWb({ Sq: k });
            ({ Z3a: a } = IWb({ Sq: k, Bf: e(), xYa: new iXb() }));
            d.Zq.Jka = a;
            const { e2a: l, f2a: m, d2a: n } = AWb();
            return {
              hFa: d5((p) =>
                Y4(aXb, {
                  ...p,
                  container: void 0,
                  Sq: k,
                  Y3a: l,
                  $3a: m,
                  W3a: n,
                  bi: bXb,
                })
              ),
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/ef24cd5b9be805e6.js.map
