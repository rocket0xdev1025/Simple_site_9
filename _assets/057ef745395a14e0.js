(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [26489],
  {
    /***/ 59534: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var cDb = function (a) {
            var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
            try {
              const c = __c.at(a),
                d = c instanceof __c.bt ? c.As() : c;
              return __c.Rr(b, (e) => {
                e = __c.at(e);
                e = e instanceof __c.bt ? __c.AH(e, d) : e;
                return Math.abs(__c.tt(e, d));
              });
            } catch (c) {
              if (
                c instanceof Error &&
                c.message === `unrecognized color: ${b[0]}`
              )
                return b[0];
              throw c;
            }
          },
          dDb = function (a) {
            return a
              .trim()
              .split(/\s+/, 2)
              .map((b) => __c.rs(b)[0])
              .join("");
          },
          gDb = function (a = "") {
            a = eDb(a);
            a = Math.floor(a() * fDb.length);
            return fDb[a];
          },
          hDb = __webpack_require__(875604),
          iDb = hDb.memo,
          jDb = hDb.useId;
        var eDb = __webpack_require__(503216);
        var kDb = __webpack_require__(443763),
          EY = kDb.jsx,
          lDb = kDb.jsxs;
        var mDb = __webpack_require__,
          nDb = mDb(993864),
          FY = mDb.n_x(nDb)();
        __c.oDb = {
          xxsmall: 2,
          xsmall: 3,
          small: 4,
          medium: 5,
          large: 6,
          xlarge: 8,
          xxlarge: 10,
          xxxlarge: 20,
        };
        var fDb = [
          "rgb(0, 126, 182)",
          "rgb(248, 72, 86)",
          "rgb(251, 190, 40)",
          "rgb(68, 133, 25)",
          "rgb(125, 42, 232)",
        ].map((a) => {
          try {
            return __c.ct(__c.Ws(a));
          } catch (b) {
            return "#8e8e8e";
          }
        });
        var pDb = iDb((a) => {
          const {
            name: b,
            borderColor: c,
            backgroundColor: d,
            wS: e,
            role: f,
            ariaLabel: g,
            className: h,
            style: k,
            shape: l = "circle",
            ...m
          } = a;
          if (d) {
            a = __c.at(d);
            var n = a instanceof __c.bt ? __c.dt(a) : __c.ct(a);
          } else n = e ? gDb(e) : "#8e8e8e";
          var p = jDb();
          switch (l) {
            case "circle":
              a = EY("defs", {
                children: EY("clipPath", {
                  id: p,
                  children: EY("circle", {
                    id: `${p}-path`,
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                  }),
                }),
              });
              break;
            case "square":
              a = EY("defs", {
                children: EY("clipPath", {
                  id: p,
                  children: EY("rect", {
                    id: `${p}-path`,
                    width: "100%",
                    height: "100%",
                  }),
                }),
              });
              break;
            default:
              throw new __c.F(l);
          }
          switch (l) {
            case "circle":
              p = EY("circle", {
                cx: "50%",
                cy: "50%",
                fill: n,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${p})`,
                stroke: c,
                className: FY("yCT70Q", { _2LVP_g: c }),
              });
              break;
            case "square":
              p = EY("rect", {
                width: "100%",
                height: "100%",
                fill: n,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${p})`,
                stroke: c,
                className: FY("cUFFRA", { _2LVP_g: c }),
              });
              break;
            default:
              throw new __c.F(l);
          }
          n = cDb(n);
          return EY("span", {
            role: f,
            "aria-label": g,
            className: FY("VaW8_A", { cUFFRA: l === "square" }),
            style: { "--pDK9Gw": n },
            ...m,
            children: lDb("svg", {
              className: h,
              style: k,
              children: [
                a,
                p,
                EY("text", {
                  x: "50%",
                  y: "50%",
                  "aria-hidden": "true",
                  textAnchor: "middle",
                  fill: n,
                  fontWeight: "500",
                  fontSize: "50%",
                  dominantBaseline: "central",
                  letterSpacing: "0.01rem",
                  dy: "-0.04em",
                  children: dDb(b).toUpperCase(),
                }),
              ],
            }),
          });
        });
        var qDb =
          __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
        var rDb = ({
          borderColor: a,
          iVa: b,
          ariaLabel: c,
          className: d,
          style: e,
          role: f,
          ...g
        }) =>
          EY("span", {
            className: FY(d, { JwH6AA: a, QJpRHw: !a }),
            style: {
              backgroundImage: `url(${b})`,
              borderColor: a && `${a}`,
              ...e,
            },
            role: f,
            "aria-label": f === "img" ? c : void 0,
            ...g,
          });
        __c.sDb = ({
          name: a,
          C5a: b,
          ariaLabel: c,
          wS: d,
          backgroundColor: e,
          borderColor: f,
          Zr: g,
          className: h,
          style: k,
          shape: l = "circle",
          ...m
        }) => {
          h = FY("n8XGZg", "f4qJng fs-hide", h, { P3N3Pw: l === "square" });
          b = b || "presentation";
          return g
            ? EY(rDb, {
                className: h,
                style: k,
                borderColor: f,
                iVa: g,
                ariaLabel: c,
                role: b,
                ...m,
              })
            : a
            ? EY(pDb, {
                className: h,
                style: k,
                borderColor: f,
                name: a,
                shape: l,
                wS: d,
                backgroundColor: e,
                role: b,
                ariaLabel: c,
                ...m,
              })
            : EY(rDb, {
                className: h,
                style: k,
                borderColor: f,
                iVa: qDb,
                ariaLabel: c,
                role: b,
                ...m,
              });
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/057ef745395a14e0.js.map
