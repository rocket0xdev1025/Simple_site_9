(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4143],
  {
    /***/ 994944: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(59534);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var F = __c.F;
        var Q = __c.Q;
        var aVb = function (a, b = "medium") {
            if (a !== null && a !== void 0 && a.length) {
              var c = window.devicePixelRatio || 1,
                d = (typeof b === "number" ? b : $Ub(b)) * c;
              return [...a].sort((e, f) => {
                e = e.width;
                f = f.width;
                return e > d && f < d
                  ? -1
                  : e < d && f > d
                  ? 1
                  : Math.abs(e - d) - Math.abs(f - d);
              })[0].url;
            }
          },
          gVb = function (a, b) {
            class c {
              static A(d) {
                Q(d, { We: H4, vla: H4 });
              }
              get We() {
                switch (this.vla) {
                  case "date":
                    return new bVb(this.Eo, b.language || "en-AU");
                  case "select":
                    return new cVb(this.Eo);
                  case "mention":
                    return new dVb(this.Eo);
                  case "embed":
                    return new eVb(this.Eo);
                  case "plain_number":
                  case "currency":
                  case "percentage":
                  case void 0:
                    break;
                  default:
                    throw new F(this.vla);
                }
              }
              get vla() {
                var d;
                return (d = this.Eo.Ar) === null || d === void 0
                  ? void 0
                  : d.type;
              }
              constructor(d) {
                this.context = d;
                this.Eo = (c.A(this), void 0);
                this.Eo = __c.D(a.Vw(d.sheet, d.ya, d.column));
              }
            }
            return fVb((d) => new c(d).We);
          },
          iVb = function () {
            const a = I4(() => new Map(), []);
            return {
              tdb: (b) => {
                if (a.has(b)) return __c.D(a.get(b));
                const c = hVb();
                a.set(b, c);
                return c;
              },
            };
          },
          jVb = function (a, b) {
            return I4(() => {
              const c = new Map();
              return (d) => {
                if (c.has(d)) return __c.D(c.get(d));
                const e = a(d);
                c.set(d, e);
                return e;
              };
            }, b);
          },
          qVb = function ({
            children: a,
            keyFrame: b,
            aZa: c,
            ariaLive: d,
            FPa: e = !1,
            l5a: f,
            Qna: g,
            S$a: h,
            ABb: k,
            $Ia: l,
            XKa: m,
            yBb: n,
            Ssb: p,
          }) {
            const { tdb: q } = iVb(),
              { wcb: r, Tnb: t } = kVb(b, a),
              w = jVb(
                (u) => () => {
                  (e === !1 || (typeof e === "function" && !e(u))) && t(u);
                },
                [t, e]
              );
            return J4("div", {
              className: K4(g, "_9GxJfQ", {
                KwB0XQ: l === "hidden",
                WV1Mmw: c === "fill-height",
                _2uSJxw: c === "flex-grow",
              }),
              children: J4("div", {
                className: K4("m2VaAA", h),
                "aria-live": d,
                style: k,
                role: "region",
                children: [
                  ...r.map(({ key: u, element: x }) =>
                    J4(
                      lVb,
                      {
                        in: u === b,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(u),
                        onExited: w(u),
                        children: (y) =>
                          J4(mVb.Provider, {
                            value: y,
                            children: J4("div", {
                              className: K4("KxXR9g", n, {
                                KwB0XQ: m === "hidden",
                              }),
                              ref: q(u),
                              "aria-hidden":
                                y === nVb || y === oVb || y === pVb,
                              children: u === b ? a : x,
                            }),
                          }),
                      },
                      u
                    )
                  ),
                  r.every((u) => u.key !== b) &&
                    J4(
                      lVb,
                      {
                        in: !1,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(b),
                        onExited: e ? void 0 : w(b),
                        children: (u) =>
                          J4(mVb.Provider, {
                            value: u,
                            children: J4("div", {
                              className: K4("KxXR9g", n),
                              ref: q(b),
                              "aria-hidden":
                                u === nVb || u === oVb || u === pVb,
                              children: a,
                            }),
                          }),
                      },
                      b
                    ),
                ],
              }),
            });
          },
          kVb = function (a, b) {
            const [c, d] = rVb(() => [{ key: a, element: b }]);
            sVb(() => {
              d((f) =>
                f.every((g) => g.key !== a)
                  ? f.concat({ key: a, element: b })
                  : f.map((g) => (g.key === a ? { key: a, element: b } : g))
              );
            }, [a, b]);
            const e = L4((f) => {
              d((g) => g.filter((h) => h.key !== f));
            }, []);
            return { wcb: c, Tnb: e };
          },
          tVb = function (a) {
            switch (a.type) {
              case "mention":
                return "bCAtqw";
              case "embed":
                return "BTcT3w";
              case "date":
                return "McKQgg";
              case "select":
                return "V2E5nQ";
              default:
                throw new F(a);
            }
          },
          xVb = function (a, b) {
            switch (a.type) {
              case "mention":
                return J4(uVb, {
                  Zr: a.user ? b.T0(a.user) : void 0,
                  text: a.text,
                  backgroundColor: a.user ? b.Ncb(a.user).background : void 0,
                });
              case "embed":
                const c = !a.url;
                a = b.$Ka.a0.get(a.url);
                return J4(vVb, { icon: a, ygb: c });
              case "date":
                return a.text ? void 0 : J4(wVb, {});
              case "select":
                break;
              default:
                throw new F(a);
            }
          },
          zVb = function (a, b) {
            switch (a.type) {
              case "mention":
              case "embed":
              case "date":
                break;
              case "select":
                return J4(yVb, { selected: !!b.YWa });
              default:
                throw new F(a);
            }
          },
          M4 = function (a) {
            return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey)
              ? !0
              : a instanceof KeyboardEvent
              ? a.key === "Meta" || ["91", "224"].includes(a.code)
              : !1;
          },
          AVb = function (a) {
            __c.v(!0, "chunkLength must be positive");
            const b = [];
            for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
            return b;
          },
          BVb = function (a, b, c) {
            if (c) {
              var d = aVb(c.images, "medium"),
                e = aVb(c.images, "xxxlarge");
              if (d && e) {
                c = new Image();
                c.src = d;
                var f = new Image();
                f.src = e;
                f.onload = N4(() => a.k7.set(b, e));
                f.onerror = N4(() => a.k7.set(b, void 0));
                !f.complete && c.complete ? a.k7.set(b, d) : (c.src = "");
              }
            } else a.k7.set(b, void 0);
          },
          DVb = function (a, { url: b, id: c, extension: d }) {
            if (!a.promises.has(b)) {
              const e = new Promise((f) => {
                a.gh
                  ? a.gh
                      .qEb(new CVb({ id: c, extension: d }))
                      .then(({ document: g }) => {
                        const h = g.Of.content.title;
                        h
                          ? (O4(() => a.m_a.set(b, { status: 1, title: h })),
                            f(h))
                          : f(void 0);
                      })
                      .catch(() => {
                        O4(() => a.m_a.set(b, { status: 2 }));
                        f(void 0);
                      })
                  : f(void 0);
              });
              a.promises.set(b, e);
            }
            return a.promises.get(b);
          },
          $Ub = (a) =>
            a.endsWith("rem") ? parseFloat(a) * 10 : __c.ry * __c.oDb[a],
          EVb = __webpack_require__(443763),
          J4 = EVb.jsx,
          FVb = EVb.jsxs;
        var P4 = __webpack_require__(214645).Pi;
        var Q4 = __webpack_require__(875604),
          GVb = Q4.createContext,
          hVb = Q4.createRef,
          R4 = Q4.memo,
          L4 = Q4.useCallback,
          sVb = Q4.useEffect,
          HVb = Q4.useLayoutEffect,
          I4 = Q4.useMemo,
          rVb = Q4.useState;
        var S4 = __webpack_require__(519427),
          N4 = S4.action,
          IVb = S4.comparer,
          H4 = S4.computed,
          JVb = S4.observable,
          T4 = S4.ObservableMap,
          O4 = S4.runInAction;
        var fVb = __webpack_require__(635872).Om;
        var KVb = __webpack_require__,
          LVb = KVb(993864),
          K4 = KVb.n_x(LVb)();
        var lVb = __webpack_require__(489212).Z;
        var U4 = __webpack_require__(92009),
          pVb = U4.Wj,
          nVb = U4.Ix,
          oVb = U4.$r;
        var MVb = class {
            static A(a) {
              Q(a, { text: H4, user: H4, brand: H4 });
            }
            get text() {
              return this.We.text;
            }
            get user() {
              return this.We.user;
            }
            get brand() {
              return this.We.brand;
            }
            constructor(a) {
              this.We = a;
              this.type = (MVb.A(this), "mention");
            }
          },
          NVb = class {
            static A(a) {
              Q(a, { text: H4, url: H4 });
            }
            get text() {
              return this.We.text;
            }
            get url() {
              return this.We.url;
            }
            constructor(a) {
              this.We = a;
              this.type = (NVb.A(this), "embed");
            }
          },
          OVb = class {
            static A(a) {
              Q(a, { text: H4, language: H4, style: H4, date: H4 });
            }
            get text() {
              return this.We.text;
            }
            get language() {
              return this.We.language;
            }
            get style() {
              return this.We.style;
            }
            get date() {
              return this.We.date;
            }
            constructor(a) {
              this.We = a;
              this.type = (OVb.A(this), "date");
            }
          },
          PVb = class {
            static A(a) {
              Q(a, { text: H4, options: H4, Hf: H4, US: H4 });
            }
            get text() {
              return this.We.text;
            }
            get options() {
              return this.We.options.map((a) => a);
            }
            get Hf() {
              return this.We.Hf;
            }
            get US() {
              var a;
              return (a = this.We.options.first((b) => b.id === this.We.Hf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            constructor(a) {
              this.We = a;
              this.type = (PVb.A(this), "select");
            }
          },
          QVb = fVb((a) => {
            switch (a.type) {
              case "mention":
                return new MVb(a);
              case "embed":
                return new NVb(a);
              case "date":
                return new OVb(a);
              case "select":
                return new PVb(a);
              default:
                throw new F(a);
            }
          });
        var bVb = class {
            static A(a) {
              Q(a, { style: H4, date: H4, text: H4 });
            }
            get style() {
              return 2;
            }
            get date() {
              var a;
              (a = this.Ap.Yk.type === 2 ? this.Ap.Yk.date : void 0) ||
                ((a = new Date()),
                (a = __c.CA(a)),
                (a = {
                  year: a.getFullYear(),
                  month: a.getMonth() + 1,
                  day: a.getDate(),
                  Beb: a.getHours(),
                  njb: a.getMinutes(),
                }));
              return a;
            }
            get text() {
              return this.Ap.AB;
            }
            constructor(a, b) {
              this.Ap = a;
              this.language = b;
              this.type = (bVb.A(this), "date");
            }
          },
          RVb = class {
            get label() {
              return this.option.label;
            }
            get fill() {
              return this.option.fill;
            }
            constructor(a, b) {
              this.option = a;
              this.id = b;
            }
          },
          cVb = class {
            static A(a) {
              Q(a, {
                options: H4,
                Hf: H4,
                US: H4,
                text: H4,
                AMa: H4({ equals: IVb.shallow }),
              });
            }
            get options() {
              return this.AMa.map((a, b) => new RVb(a, b));
            }
            get Hf() {
              var a;
              return (a = this.options.find((b) => b.label === this.text)) ===
                null || a === void 0
                ? void 0
                : a.id;
            }
            get US() {
              var a;
              return (a = this.options.find((b) => b.id === this.Hf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            get text() {
              return this.Ap.AB;
            }
            get AMa() {
              var a, b;
              __c.C(
                ((a = this.Ap.Ar) === null || a === void 0
                  ? void 0
                  : a.type) === "select"
              );
              return (b = this.Ap.Ar) === null || b === void 0
                ? void 0
                : b.options;
            }
            constructor(a) {
              this.Ap = a;
              this.type = (cVb.A(this), "select");
            }
          },
          dVb = class {
            static A(a) {
              Q(a, { JN: H4 });
            }
            get text() {
              return this.JN ? this.JN.text : "";
            }
            get user() {
              return this.JN ? this.JN.user : "";
            }
            get brand() {
              return this.JN ? this.JN.brand : "";
            }
            get JN() {
              if (this.Ap.Yk.type !== 9)
                return (
                  __c.C(this.Ap.Yk.type === 7),
                  this.Ap.Yk ? this.Ap.Yk.value[0] : void 0
                );
            }
            constructor(a) {
              this.Ap = a;
              this.type = (dVb.A(this), "mention");
            }
          },
          eVb = class {
            static A(a) {
              Q(a, { w0: H4 });
            }
            get text() {
              return this.w0 ? this.w0.embed.text : "";
            }
            get url() {
              return this.w0 ? this.w0.embed.url : "";
            }
            get w0() {
              if (this.Ap.Yk.type !== 9)
                return (
                  __c.C(this.Ap.Yk.type === 8),
                  this.Ap.Yk ? this.Ap.Yk.value[0] : void 0
                );
            }
            constructor(a) {
              this.Ap = a;
              this.type = (eVb.A(this), "embed");
            }
          };
        var SVb = class {
          eqa(a) {
            this.kma.eqa(a);
          }
          w5(a, b) {
            this.kma.w5(a, b);
          }
          T0(a) {
            return this.kma.T0(a);
          }
          bqa(a) {
            this.$Ka.bqa(a);
          }
          constructor(a, b, c, d) {
            this.kma = a;
            this.$Ka = b;
            this.Ab = c;
            this.YI = d;
            this.$Ca = new __c.Btb();
            this.Ncb = (e) => __c.JJa(this.$Ca, e);
          }
        };
        var mVb = GVb(void 0);
        var TVb = Number.parseInt("300ms", 10),
          UVb = {
            enter: "_QukmA",
            enterActive: "_5_06KQ",
            enterDone: void 0,
            exitActive: "a952jg",
            exitDone: "orZOEA",
          },
          VVb = R4(function ({
            Ts: a = !1,
            children: b,
            keyFrame: c,
            aZa: d,
            $Ia: e = "hidden",
            XKa: f = "hidden",
            ariaLive: g,
            FPa: h,
            VEb: k = "none",
          }) {
            a = __c.tb() && !a;
            return qVb({
              children: b,
              keyFrame: c,
              aZa: d,
              ariaLive: g,
              $Ia: e,
              XKa: f,
              FPa: h,
              l5a: a ? TVb : 0,
              S$a: K4({
                _1niDPQ: a,
                Q6kGbg: k === "none",
                _9j7ODw: k === "layout",
              }),
              Ssb: UVb,
            });
          });
        var WVb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
        var XVb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
        var YVb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
        var ZVb =
          '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
        var $Vb = R4((a) => {
            const b = a.link,
              c = a.className,
              d = a.ariaLabel,
              e = a.US,
              f = a.b$a,
              g = a.G3a,
              h = a.h4a,
              k = a.measureRef,
              l = a.onPointerDown,
              m = a.onMouseEnter,
              n = a.onMouseLeave,
              p = K4({ EdewNw: !!g, _6ZpPrw: !!h, pzXyUA: a.text.length > 0 });
            a = a.text.length > 0 ? a.text : "\ufeff";
            return FVb("span", {
              className: K4(c, "FedJ0Q"),
              "aria-label": d || a,
              children: [
                J4("span", {
                  className: K4("_2Lr6pQ", p),
                  children: J4("span", { className: "Z_WvzQ", children: a }),
                }),
                FVb("span", {
                  className: K4("XemTdQ", p),
                  ref: k,
                  style: e ? { color: e } : void 0,
                  onPointerDown: l,
                  onMouseEnter: m,
                  onMouseLeave: n,
                  children: [
                    g,
                    J4("span", {
                      className: K4("U_QH_A", { C9XL8g: !f }),
                      children: b
                        ? J4("a", { className: "vgTP5Q", ...b, children: a })
                        : a,
                    }),
                    h,
                  ],
                }),
              ],
            });
          }),
          uVb = R4((a) => {
            const b = a.backgroundColor,
              c = a.Zr;
            a = a.text;
            const d = { width: "0.9em", height: "0.9em" };
            return J4(VVb, {
              keyFrame: c ? "show" : "hide",
              children: a
                ? J4(__c.sDb, {
                    name: a,
                    style: d,
                    backgroundColor: b,
                    Zr: c,
                    borderColor: c ? void 0 : b,
                  })
                : J4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: ZVb },
                  }),
            });
          }),
          vVb = R4((a) => {
            const b = a.icon;
            a = a.ygb;
            return J4(VVb, {
              keyFrame: b ? "favicon" : "placeholder",
              children: b
                ? J4("span", {
                    className: "_tFJqA",
                    children: J4("img", { src: b, className: "qpbYdw" }),
                  })
                : J4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: a ? YVb : XVb },
                  }),
            });
          }),
          wVb = R4(() =>
            J4("span", {
              "aria-hidden": "true",
              className: "_tFJqA",
              dangerouslySetInnerHTML: { __html: WVb },
            })
          ),
          yVb = R4(({ selected: a }) =>
            J4("div", {
              className: K4("whph4A", { zgzjww: a }),
              children: J4(__c.vL, {
                size: "medium",
                style: { width: "0.9em", height: "0.9em" },
                className: "_tFJqA",
              }),
            })
          ),
          aWb = P4((a) => {
            const {
              We: b,
              YWa: c,
              Awa: d,
              mode: e = "viewable",
              measureRef: f,
              tq: g,
              onPointerDown: h,
            } = a;
            a = b.text || "\u00a0".repeat(16);
            const k = b.type === "embed" ? d.Ab(b.url) : void 0,
              [l, m] = rVb(!1),
              n = L4((t) => m(M4(t)), [m]),
              p = L4((t) => m(!M4(t)), [m]),
              q = L4(
                (t) => {
                  m(M4(t.nativeEvent));
                  document.addEventListener("keydown", n);
                  document.addEventListener("keyup", p);
                },
                [m, n, p]
              ),
              r = L4(() => {
                m(!1);
                document.removeEventListener("keydown", n);
                document.removeEventListener("keyup", p);
              }, [m, n, p]);
            sVb(() => {
              O4(() => {
                switch (b.type) {
                  case "mention":
                    b.user && d.eqa(b.user);
                    break;
                  case "embed":
                    d.bqa(b.url);
                }
              });
            }, [b, d]);
            HVb(() => {
              g === null || g === void 0 || g();
            }, [b.type, a, g]);
            return J4($Vb, {
              text: a,
              link: e === "viewable" || l ? k : void 0,
              b$a: b.text.length === 0,
              ariaLabel: b.text || "",
              className: tVb(b),
              US: b.US,
              G3a: xVb(b, d),
              h4a: zVb(b, { YWa: c }),
              measureRef: f,
              onPointerDown: h,
              onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
              onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0,
            });
          });
        var bWb = __c.L(() => ({
          CFb: __c.EM(11),
          mode: __c.G("A?", 1, "BY_USER_IDS"),
          jub: __c.DM(1),
        }));
        var cWb = class {
            static A(a) {
              Q(a, { aR: JVb.shallow, OLa: N4 });
            }
            T0(a) {
              return this.gHa.T0(a);
            }
            eqa(a) {
              this.ZCa.has(a) || this.aR.has(a) || (this.aR.add(a), this.E9a());
            }
            w5(a, b) {
              this.ZCa.has(a) ||
                (this.ZCa.set(a, b), this.aR.delete(a), BVb(this.gHa, a, b));
            }
            async OLa() {
              if (this.aR.size !== 0) {
                var a = [...this.aR.values()];
                this.aR.clear();
                if (this.hHa) {
                  var b = await this.hHa;
                  await Promise.all(
                    AVb(a).map(async (c) => {
                      const d = new bWb({ jub: c }),
                        { Gyb: e } = await b.SDb(d);
                      O4(() => c.forEach((f) => this.w5(f, e.get(f))));
                    })
                  );
                } else a.forEach((c) => this.w5(c));
              }
            }
            constructor(a, b) {
              this.hHa = a;
              this.ZCa = (cWb.A(this), new T4());
              this.aR = new Set();
              this.gHa = new dWb();
              this.E9a = __c.Pc(() => this.OLa(), 200);
              O4(() => {
                b === null ||
                  b === void 0 ||
                  b.forEach((c, d) => this.w5(d, c));
              });
            }
          },
          dWb = class {
            T0(a) {
              return this.k7.get(a);
            }
            constructor() {
              this.k7 = new T4();
            }
          };
        var CVb = __c.L(() => ({
          id: __c.X("id", 1),
          extension: __c.Y("extension", 3),
          RWa: __c.zM("revision", 5),
          version: __c.zM("version", 2),
          jFb: __c.zM("imagesetsLimit", 6),
        }));
        var eWb = class {
          static A(a) {
            Q(a, { ybb: N4 });
          }
          async ybb(a) {
            if (this.gh) {
              var b = new URL(a).pathname;
              {
                const c =
                  /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                c == null || c.length < 2
                  ? (b = void 0)
                  : ((b = c[2]),
                    new Set(["edit", "remix", "view", "watch"]).has(c[2]) &&
                      (b = void 0),
                    (b = { id: c[1], extension: b }));
              }
              if (b) return await DVb(this, { url: a, ...b });
            }
          }
          constructor(a) {
            this.gh = a;
            this.m_a = (eWb.A(this), new T4());
            this.promises = new Map();
          }
        };
        var fWb = class {
          static A(a) {
            Q(a, { a0: JVb.shallow });
          }
          async bqa(a) {
            const b = new Image();
            let c;
            try {
              var d;
              const e = await ((d = this.YI) === null || d === void 0
                ? void 0
                : d.E8(a));
              c = e === null || e === void 0 ? void 0 : e.xbb;
            } catch (e) {}
            c
              ? ((b.src = c),
                (b.onload = N4(() => this.a0.set(a, c))),
                (b.onerror = N4(() => this.a0.set(a, void 0))))
              : O4(() => this.a0.set(a, void 0));
          }
          constructor(a) {
            this.YI = a;
            this.a0 = (fWb.A(this), new Map());
          }
        };
        __c.wGa = {
          yfb: function (a) {
            const b = a.document,
              c = a.gh,
              d = a.Ab,
              e = a.YI;
            var f = a.X8;
            const g = a.wd,
              h = a.KA,
              k = a.$X;
            a = a.wFb;
            f = new cWb(a === null || a === void 0 ? void 0 : a(), f);
            a = new fWb(e);
            new eWb(c);
            const l = new SVb(f, a, d, e),
              m = gVb(k, b);
            g.Zq.Fka = P4(({ item: p, measureRef: q }) => {
              const r = I4(() => QVb(p.We), [p.We]);
              return J4(aWb, { We: r, Awa: l, measureRef: q });
            });
            const n = P4(({ context: p, tq: q }) => {
              const r = I4(() => __c.D(m(p.container)), [p]);
              HVb(q, [q, p.container.column.width]);
              return J4(aWb, { We: r, Awa: l, tq: q });
            });
            h.uFa = ({ context: p, tq: q }) => ({
              type: "react",
              node: J4(n, { context: p, tq: q }),
            });
            return { Awa: l };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/434a56a4a2d58c7b.js.map
