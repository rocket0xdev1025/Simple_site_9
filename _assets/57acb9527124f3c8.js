(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [49222],
  {
    /***/ 78999: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(841629);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var F = __c.F;
        var C = __c.C;
        var zXb = function (a, b, c, d) {
            c = new yXb(c, d);
            C(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            C(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${
                a === null || a === void 0 ? void 0 : a.type
              }`
            );
            c.nja(a, b);
          },
          BXb = function (a) {
            return {
              ...__c.gdb,
              ...F5,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.gja.width,
                height: a.gja.height,
              },
              xb: a.xb.map(AXb),
            };
          },
          CXb = function (a) {
            switch (a.OD) {
              case 0:
                var b = __c.tk
                  .Qc()
                  .attrs({
                    "font-size": a.fontSize,
                    leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                    "text-align": a.textAlign || "start",
                    "font-weight": a.fontWeight,
                    "font-family": a.fontFamily,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on",
                    direction: a.direction,
                  });
                a.color && b.Jh("color", a.color);
                b = b
                  .Dc(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                var c;
                return {
                  ...__c.KK,
                  ...G5,
                  ...F5,
                  Sa: (c = a.Sa) !== null && c !== void 0 ? c : 0,
                  text: b,
                  nh: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.KK, ...G5, ...F5, text: b, nh: 2 }
                );
              default:
                throw new F(a);
            }
          },
          K5 = function ({ content: a, fill: b, border: c, X: d }) {
            b = { ...__c.Scb, fill: H5(b), border: I5(c), X: J5(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: BXb(a) };
              case "text":
                return { ...b, element: CXb(a) };
              case "layout":
                return { ...b, element: DXb(a) };
              default:
                throw new F(a);
            }
          },
          DXb = function ({
            cells: a,
            border: b,
            fill: c,
            X: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.Tcb,
              ...G5,
              ...F5,
              I: G5.width,
              W: G5.height,
              fill: H5(c),
              border: I5(b),
              direction: 1,
              X: J5(d),
              cells: new Map(a.map((k) => [k.id, K5(k)])),
              behavior: {
                rules: [
                  {
                    ph: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g !== null && g !== void 0 ? g : 0,
                      rowGap: h !== null && h !== void 0 ? h : 0,
                      Lh: EXb(a),
                    },
                  },
                ],
              },
              Ze: void 0,
            };
          },
          EXb = function (a) {
            return new Map(a.map((b) => [b.id, FXb(b)]));
          },
          FXb = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.uCa,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.VQ,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          I5 = function (a) {
            var b;
            const c =
              (b = a === null || a === void 0 ? void 0 : a.color) !== null &&
              b !== void 0
                ? b
                : "#000000";
            var d;
            return {
              ...__c.SD,
              all: a
                ? {
                    ...__c.LQ,
                    weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                    color: c,
                    gg: !0,
                  }
                : void 0,
            };
          },
          J5 = function (a) {
            return {
              ...__c.UQ,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          AXb = function (a) {
            return {
              ...__c.hdb,
              ...a,
              fill: H5(a.fill),
              stroke: GXb(a.stroke),
            };
          },
          GXb = function (a) {
            return a ? { ...__c.LQ, color: a.color, weight: a.weight } : void 0;
          },
          H5 = function (a) {
            var b;
            const c = {
              ...__c.Dv,
              Sa:
                (b = a === null || a === void 0 ? void 0 : a.Sa) !== null &&
                b !== void 0
                  ? b
                  : 0,
            };
            switch (a === null || a === void 0 ? void 0 : a.type) {
              case "color":
                return { ...c, color: a.color };
              case "gradient":
                return { ...c, pb: a.pb };
              case void 0:
                return c;
              default:
                throw new F(a);
            }
          },
          MXb = function (a, b) {
            const c = new Map(b.cells.map((e) => [e.id, e]));
            HXb(
              a.cells,
              c,
              (e, f) => {
                let g = !1;
                IXb(e.element, f.content, () => {
                  a.cells.delete(f.id);
                  a.cells.set(f.id, K5(f));
                  g = !0;
                });
                g ||
                  (L5(e.fill, f.fill), JXb(e.border, f.border), KXb(e.X, f.X));
              },
              (e) => K5(e)
            );
            LXb(a.behavior, b, c);
            L5(a.fill, b.fill);
            KXb(a.X, b.X);
            JXb(a.border, b.border);
            var d;
            a.Sa = (d = b.Sa) !== null && d !== void 0 ? d : 0;
          },
          LXb = function (a, b, c) {
            M5(
              a.rules,
              [b],
              (d) => {
                NXb(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                NXb(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                var e;
                d.grid.columnGap =
                  (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                var f;
                d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                HXb(
                  d.grid.Lh,
                  c,
                  (g, h) => {
                    const k = h.placement.padding,
                      l = h.placement.gridColumnEnd,
                      m = h.placement.gridRowStart,
                      n = h.placement.gridRowEnd,
                      p = h.placement.alignSelf;
                    g.gridColumnStart = h.placement.gridColumnStart;
                    g.gridColumnEnd = l;
                    g.gridRowStart = m;
                    g.gridRowEnd = n;
                    typeof k === "number" && g.padding.all !== k
                      ? (g.padding.all = k)
                      : typeof k !== "number" &&
                        ((g.padding.Ca =
                          k === null || k === void 0 ? void 0 : k.Ca),
                        (g.padding.La =
                          k === null || k === void 0 ? void 0 : k.La),
                        (g.padding.Ba =
                          k === null || k === void 0 ? void 0 : k.Ba),
                        (g.padding.Ta =
                          k === null || k === void 0 ? void 0 : k.Ta));
                    g.alignSelf = p;
                  },
                  (g) => FXb(g)
                );
              },
              (d) => {
                var e, f;
                return {
                  ph: void 0,
                  grid: {
                    gridTemplateColumns: b.gridTemplateColumns,
                    gridTemplateRows: b.gridTemplateRows,
                    columnGap:
                      (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                    Lh: EXb(d.cells),
                  },
                };
              }
            );
          },
          OXb = function (a, b) {
            M5(
              a.xb,
              b.xb,
              (e, f) => {
                e.d = f.d;
                L5(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(GXb(f.stroke));
              },
              (e) => AXb(e)
            );
            const { viewBox: c, width: d } = BXb(b);
            a.width = d;
            __c.Bu(a.viewBox).equals(__c.Bu(c)) || (a.viewBox = c);
          },
          IXb = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? OXb(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.tk.domain.Yb(__c.tk.xa(a.text), CXb(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? MXb(a, b) : c();
                break;
              default:
                throw new F(b);
            }
          },
          HXb = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          M5 = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          L5 = function (a, b) {
            switch (b === null || b === void 0 ? void 0 : b.type) {
              case "color":
                a.color = b.color;
                a.pb.set(void 0);
                var c;
                a.Sa = (c = b.Sa) !== null && c !== void 0 ? c : 0;
                break;
              case "gradient":
                if (a.pb.ref && __c.L2a.domain.Yb(a.pb.ref, b.pb)) break;
                a.color = void 0;
                a.pb.set(b.pb);
                var d;
                a.Sa = (d = b.Sa) !== null && d !== void 0 ? d : 0;
                break;
              default:
                (a.color = void 0), a.pb.set(void 0);
            }
          },
          KXb = function (a, b) {
            b = J5(b);
            a.all = b.all;
            a.FE = b.FE;
            a.DE = b.DE;
            a.EE = b.EE;
            a.CE = b.CE;
          },
          JXb = function (a, b) {
            b = I5(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b ? __c.TD.domain.Yb(__c.TD.xa(c), b) : !c && !b));
            c && a.all.set(b);
          },
          NXb = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          QXb = function (a, b, c, d) {
            let e = a.CWa.get(b);
            if (e) return e;
            e = {
              fz: new PXb(c.GA, b, d, c.gsa),
              OGa: void 0,
              uQa: void 0,
              sSa: __c.KV.mode,
            };
            a.CWa.set(b, e);
            return e;
          },
          SXb = function (a, b, c, d, e) {
            var f, g;
            e = QXb(a, c, b, e);
            const h = e.fz,
              k = e.uQa,
              l = e.OGa,
              m = e.sSa;
            c = __c.MP.xa(c);
            const n =
              ((f = (g = a.lB).nra) === null || f === void 0
                ? void 0
                : f.call(g, d)) || __c.KV;
            (h.jk === k && RXb.structural(c, l) && n.mode === m) ||
              ((e.OGa = c),
              (e.uQa = h.jk),
              (e.sSa = n.mode),
              (b = b.render(h, n)),
              a.rjb.update(d, b),
              zXb(
                d,
                b,
                (p, q) => a.eR.ysa.set(p, q),
                (p, q, r) => a.eR.refs.set(p, { ref: q, key: r })
              ));
          },
          VXb = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.dkb());
            c.push(
              TXb(
                () => {
                  a: {
                    var e = new UXb();
                    for (const f of b)
                      if ((e.hR(f), e.lqa)) {
                        e = e.lqa;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.kc.isLoaded(e) || a.tta.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) C(f.type === "layout"), a.xk.oga(f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          WXb = function (a, b) {
            return {
              WE: ({ oh: c }) => {
                var d;
                const { fz: e } = QXb(a.renderer, c, b, a.g3),
                  f = __c.OP.create([]),
                  g = [];
                g.push(VXb(a.ccb, f));
                g.push(
                  TXb(
                    () => {
                      var k, l;
                      return [
                        (k = (l = a.lB).nra) === null || k === void 0
                          ? void 0
                          : k.call(l, f),
                        __c.MP.xa(c),
                        e.jk,
                      ];
                    },
                    () => {
                      SXb(a.renderer, b, c, f, a.g3);
                    },
                    { fireImmediately: !0, equals: RXb.structural }
                  )
                );
                const h =
                  (d = b.Tua) === null || d === void 0
                    ? void 0
                    : d.call(b, { fz: e });
                h && g.push(h);
                return {
                  eb: f,
                  Dx: () => {
                    g.forEach((k) => k());
                  },
                };
              },
            };
          },
          YXb = function (a, b) {
            let c = a.N8.get(b);
            c || ((c = XXb("weakKey")), a.N8.set(b, c));
            c.reportObserved();
          },
          N5 = __webpack_require__(519427),
          RXb = N5.comparer,
          ZXb = N5.computed,
          XXb = N5.createAtom,
          O5 = N5.observable,
          TXb = N5.reaction,
          $Xb = N5.runInAction;
        var aYb = class {
          static A(a) {
            __c.Q(a, { Llb: O5.ref, odb: O5.ref });
          }
          constructor() {
            this.nra = (aYb.A(this), void 0);
          }
        };
        var bYb = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          PXb = class {
            static A(a) {
              __c.Q(a, { Af: ZXb });
            }
            get vQa() {
              var a = this.g3,
                b = this.oh,
                c = this.gsa;
              let d = a.sources.get(b);
              d || ((d = O5.box(c)), a.sources.set(b, d));
              return d;
            }
            get jk() {
              return this.vQa.get();
            }
            get Af() {
              return this.GA.Xv({ type: "dict", value: this.oh });
            }
            Zm(a) {
              this.vQa.set(
                a instanceof Function
                  ? { ...this.jk, ...a() }
                  : { ...this.jk, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.GA = a;
              this.oh = b;
              this.g3 = c;
              this.gsa = d;
              PXb.A(this);
            }
          };
        var yXb = class {
          A7(a, b) {
            this.sWa(a, b);
            b.ref && this.wxa(a, b.ref, b.key);
          }
          kR(a, b) {
            b.ref && this.wxa(a.text, b.ref, b.key);
          }
          FDa(a, b) {
            switch (b.content.type) {
              case "shape":
                C(a.element.type === "shape");
                this.A7(a.element, b.content);
                break;
              case "text":
                C(a.element.type === "text");
                this.kR(a.element, b.content);
                break;
              case "layout":
                C(a.element.type === "layout");
                this.nja(a.element, b.content);
                break;
              default:
                throw new F(b.content);
            }
          }
          nja(a, b) {
            this.sWa(a, b);
            b.ref && this.wxa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                C(!!d && !!a),
                this.FDa(d, a);
          }
          constructor(a, b) {
            this.sWa = a;
            this.wxa = b;
          }
        };
        var F5 = { locked: !0, El: { m_: !1, tX: !1 }, Qi: !0 },
          G5 = { top: 0, left: 0, width: 1, height: 1 };
        var cYb = class {
          constructor(a) {
            this.xk = a;
            this.update = (b, c) => {
              M5(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      MXb(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...DXb(d),
                        ...F5,
                        width: d.minWidth,
                        height: d.minHeight,
                        I: d.minWidth,
                        W: d.minHeight,
                      };
                      break a;
                    default:
                      throw new F(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                C(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.I = c.minWidth),
                  (d.W = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  this.xk.oga(d);
            };
          }
        };
        var dYb = class {
          constructor(a, b, c) {
            this.rjb = a;
            this.eR = b;
            this.lB = c;
            this.CWa = new WeakMap();
          }
        };
        var eYb = class {
            static A(a) {
              __c.Q(a, { tta: O5.shallow });
            }
            constructor(a, b) {
              this.kc = a;
              this.xk = b;
              this.tta = (eYb.A(this), new Set());
              this.wqa = new Set();
              this.dkb = () => {
                this.jba ||
                  (this.jba = __c.Kga(this.kc).subscribe((d) => {
                    $Xb(() => {
                      this.tta.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.wqa.add(c);
                return () => {
                  this.wqa.delete(c);
                  this.wqa.size <= 0 &&
                    this.jba &&
                    (this.jba.unsubscribe(), (this.jba = void 0));
                };
              };
            }
          },
          UXb = class extends __c.qC {
            hR(a, b) {
              this.lqa || super.hR(a, b);
            }
            kR(a) {
              this.lqa =
                (a = a.text
                  .Az("font-family")
                  ["font-family"].values()
                  .next().value) && __c.Wr(a).id;
            }
          };
        var fYb = !1,
          gYb = class {
            register(a, b) {
              this.QE.has(a) ||
                (this.QE.set(a, b),
                fYb || (__c.NP.set(a, WXb(this, b)), (fYb = !0)));
            }
            get(a) {
              return this.QE.get(a);
            }
            constructor(a, b, c, d, e) {
              this.renderer = a;
              this.g3 = b;
              this.lB = c;
              this.kc = d;
              this.xk = e;
              this.QE = new Map();
              this.ccb = new eYb(this.kc, this.xk);
            }
          };
        var hYb = class {
          delete(a) {
            var b;
            const c = this.map.delete(a);
            c &&
              ((b = this.N8.get(a)) === null ||
                b === void 0 ||
                b.reportChanged());
            return c;
          }
          get(a) {
            YXb(this, a);
            return this.map.get(a);
          }
          has(a) {
            YXb(this, a);
            return this.map.has(a);
          }
          set(a, b) {
            if (!this.map.has(a) || this.map.get(a) !== b) {
              var c;
              this.map.set(a, b);
              (c = this.N8.get(a)) === null ||
                c === void 0 ||
                c.reportChanged();
            }
            return this;
          }
          constructor() {
            this.N8 = new WeakMap();
            this.map = new WeakMap();
          }
        };
        var iYb = class {
            constructor() {
              this.ysa = new hYb();
              this.refs = new hYb();
            }
          },
          jYb = class {
            getContext(a) {
              return this.eR.refs.get(a);
            }
            SN(a) {
              return this.eR.ysa.get(a);
            }
            constructor(a, b, c) {
              this.eR = a;
              this.g3 = b;
              this.renderer = c;
            }
          };
        __c.eQa = {
          Ffb: function (a) {
            const b = new aYb(),
              c = new iYb(),
              d = new dYb(new cYb(a.xk), c, b),
              e = new bYb();
            a = new gYb(d, e, b, a.kc, a.xk);
            return { lB: b, XNb: new jYb(c, e, d), C7: a, eR: c };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/57acb9527124f3c8.js.map
