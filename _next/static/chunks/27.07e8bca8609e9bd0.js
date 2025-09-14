(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [27],
  {
    16065: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q1: function () {
          return f;
        },
        aW: function () {
          return d;
        },
      });
      var r = n(29815),
        u = n(85893),
        c = n(86010),
        o = n(67294),
        s = n(63801),
        a = n(92761),
        i = n.n(a),
        l = n(86042),
        f = function (e) {
          var t = e.className,
            n = void 0 === t ? i().carouselButtonBlue : t,
            r = (0, l.ZP)(),
            c = r.goToPrevious,
            o = r.stepIndex,
            a = r.infinite;
          return (0, u.jsx)("button", {
            onClick: c,
            className: n,
            disabled: !a && 0 === o,
            "aria-label": "Previous",
            children: (0, u.jsx)(s.wyc, { className: i().carouselButtonIcon }),
          });
        },
        d = function (e) {
          var t = e.className,
            n = void 0 === t ? i().carouselButtonBlue : t,
            r = (0, l.ZP)(),
            c = r.goToNext,
            o = r.stepIndex,
            a = r.steps,
            f = r.infinite;
          return (0, u.jsx)("button", {
            onClick: c,
            className: n,
            disabled: !f && o === a.length - 1,
            "aria-label": "Next",
            children: (0, u.jsx)(s.XCv, { className: i().carouselButtonIcon }),
          });
        },
        m = ["transition-transform", "duration-300"];
      t.ZP = function (e) {
        var t = e.StepRenderer,
          n = (0, l.ZP)(),
          s = n.containerRef,
          a = n.stepIndex,
          i = n.startSwipe,
          f = n.moveSwipe,
          d = n.endSwipe,
          v = n.steps,
          h = n.activeStepRef,
          p = n.infinite,
          x = (0, o.useRef)(null),
          w = (0, o.useRef)(a),
          y = (0, o.useRef)(null),
          b = (0, o.useRef)(0),
          j = (0, o.useCallback)(
            function () {
              var e;
              if (s.current && h.current) {
                b.current = window.innerWidth;
                var t =
                  null === (e = h.current.getBoundingClientRect()) ||
                  void 0 === e
                    ? void 0
                    : e.height;
                s.current.style.height = "".concat(t, "px");
              }
            },
            [s, h]
          ),
          Z = (0, o.useCallback)(
            function () {
              b.current !== window.innerWidth &&
                ((b.current = window.innerWidth), j());
            },
            [j]
          );
        return (
          (0, o.useEffect)(
            function () {
              var e,
                t = 0 === a && w.current === v.length - 1,
                n = a === v.length - 1 && 0 === w.current;
              x.current &&
                (p && (t || n)
                  ? ((e = x.current.classList).remove.apply(e, (0, r.Z)(m)),
                    (x.current.style.transform = n
                      ? "translateX(-".concat(100 * (a + 1), "%)")
                      : "translateX(100%)"),
                    y.current && clearTimeout(y.current),
                    (y.current = setTimeout(function () {
                      var e;
                      x.current &&
                        ((e = x.current.classList).add.apply(e, (0, r.Z)(m)),
                        (x.current.style.transform = n
                          ? "translateX(-".concat(100 * a, "%)")
                          : "translateX(0%)"));
                    }, 10)))
                  : (x.current.style.transform = "translateX(-".concat(
                      100 * a,
                      "%)"
                    )));
              return (
                (w.current = a),
                function () {
                  y.current && clearTimeout(y.current);
                }
              );
            },
            [a, p, v.length]
          ),
          (0, o.useEffect)(
            function () {
              j();
            },
            [a, j]
          ),
          (0, o.useEffect)(
            function () {
              return (
                window.addEventListener("resize", Z),
                function () {
                  window.removeEventListener("resize", Z);
                }
              );
            },
            [Z]
          ),
          (0, u.jsx)("div", {
            className: "whitespace-nowrap overflow-hidden transition-all",
            ref: s,
            children: (0, u.jsx)("div", {
              className: c.Z.apply(void 0, (0, r.Z)(m)),
              onTouchStart: i,
              onTouchMove: f,
              onTouchEnd: d,
              ref: x,
              children: v.map(function (e, n) {
                return (0,
                u.jsx)(t, { step: e, className: (0, c.Z)("w-full align-top whitespace-normal transition-opacity", n === a ? "opacity-1" : "opacity-0"), ref: n === a ? h : void 0 }, (null === e || void 0 === e ? void 0 : e.title) || n);
              }),
            }),
          })
        );
      };
    },
    86042: function (e, t, n) {
      "use strict";
      n.d(t, {
        kT: function () {
          return i;
        },
        sj: function () {
          return a;
        },
      });
      var r = n(26042),
        u = n(69396),
        c = n(85893),
        o = n(67294),
        s = (0, o.createContext)({}),
        a = function (e) {
          var t = e.children,
            n = e.steps,
            r = void 0 === n ? [] : n,
            u = e.infinite,
            a = e.autoPlayDuration,
            i = (0, o.useState)(0),
            l = i[0],
            f = i[1],
            d = (0, o.useRef)(0),
            m = (0, o.useRef)(0),
            v = (0, o.useRef)(null),
            h = (0, o.useRef)(null),
            p = (0, o.useRef)(null),
            x = (0, o.useMemo)(
              function () {
                return r || [];
              },
              [r]
            ),
            w = function () {
              v.current && (v.current.style.transform = "");
            },
            y = (0, o.useCallback)(
              function () {
                0 !== l
                  ? f(function (e) {
                      return e - 1;
                    })
                  : u
                  ? f(x.length - 1)
                  : w();
              },
              [l, u, x.length]
            ),
            b = (0, o.useCallback)(
              function () {
                l !== x.length - 1
                  ? f(function (e) {
                      return e + 1;
                    })
                  : u
                  ? f(0)
                  : w();
              },
              [l, u, x.length]
            ),
            j = (0, o.useCallback)(function (e) {
              f(e);
            }, []),
            Z = (0, o.useCallback)(function (e) {
              var t;
              (null === (t = e.touches) || void 0 === t ? void 0 : t[0]) &&
                ((d.current = e.touches[0].clientX),
                (m.current = e.touches[0].clientX));
            }, []),
            N = (0, o.useCallback)(
              function (e) {
                var t;
                if (
                  (null === (t = e.touches) || void 0 === t ? void 0 : t[0]) &&
                  (u ||
                    !(
                      (0 === l && d.current < m.current) ||
                      (l === x.length - 1 && d.current > m.current)
                    ))
                ) {
                  var n = Math.abs(d.current - m.current);
                  (m.current = e.touches[0].clientX),
                    v.current &&
                      n > 10 &&
                      (v.current.style.transform = "translateX(".concat(
                        -(d.current - m.current),
                        "px)"
                      ));
                }
              },
              [l, u, x]
            ),
            g = (0, o.useCallback)(
              function () {
                Math.abs(d.current - m.current) > 75
                  ? d.current > m.current
                    ? b()
                    : y()
                  : w(),
                  (d.current = 0),
                  (m.current = 0);
              },
              [b, y]
            ),
            B = (0, o.useCallback)(function (e) {
              e.cancelable &&
                Math.abs(d.current - m.current) > 10 &&
                e.preventDefault();
            }, []),
            _ = (0, o.useMemo)(
              function () {
                return {
                  containerRef: h,
                  endSwipe: g,
                  moveSwipe: N,
                  startSwipe: Z,
                  goToStep: j,
                  goToNext: b,
                  goToPrevious: y,
                  stepIndex: l,
                  steps: x,
                  activeStepRef: v,
                  infinite: u,
                };
              },
              [g, N, Z, j, b, y, l, x, u]
            );
          return (
            (0, o.useEffect)(
              function () {
                return (
                  w(),
                  a &&
                    (p.current = setTimeout(function () {
                      b();
                    }, a)),
                  function () {
                    p.current && clearTimeout(p.current);
                  }
                );
              },
              [l, b, a]
            ),
            (0, o.useEffect)(
              function () {
                var e = h.current;
                return (
                  e && e.addEventListener("touchmove", B, { passive: !1 }),
                  function () {
                    e && e.addEventListener("touchmove", B, { passive: !1 });
                  }
                );
              },
              [B]
            ),
            (null === x || void 0 === x ? void 0 : x.length)
              ? (0, c.jsx)(s.Provider, { value: _, children: t })
              : null
          );
        };
      t.ZP = function () {
        return (0, o.useContext)(s);
      };
      var i = function (e, t) {
        return function (n) {
          return (0, c.jsx)(
            a,
            (0, u.Z)((0, r.Z)({}, t), {
              children: (0, c.jsx)(e, (0, r.Z)({}, n)),
            })
          );
        };
      };
    },
    30027: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(85893),
        u = n(67294),
        c = n(86010),
        o = n(16065),
        s = n(92761),
        a = n.n(s),
        i = n(86042),
        l = n(13551),
        f = n(68916),
        d = (0, u.forwardRef)(function (e, t) {
          var n = e.step,
            u = e.className;
          return (0,
          r.jsx)("div", { className: (0, c.Z)(u, "inline-block p-4 md:p-6 bg-white shadow-md rounded-md"), ref: t, children: (0, r.jsxs)("blockquote", { children: [(0, r.jsx)(f.Z, { value: n.comment }), (0, r.jsx)("footer", { className: "text-primary mt-2", children: (0, r.jsxs)("p", { children: ["- ", n.author, ", ", n.company] }) })] }) });
        });
      d.displayName = "StepRenderer";
      t.default = function (e) {
        var t = e.testimonials;
        return (0, r.jsx)(i.sj, {
          steps: t,
          infinite: !0,
          autoPlayDuration: 5e3,
          children: (0, r.jsx)("div", {
            className: "bg-navy-dark",
            children: (0, r.jsx)(l.Z, {
              children: (0, r.jsx)(l.Z.Content, {
                className: "min-w-0",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-6 md:flex-row",
                  children: [
                    (0, r.jsx)(o.Q1, {
                      className: (0, c.Z)(
                        a().carouselButtonWhite,
                        "!hidden md:!flex"
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: "sm:w-2/3 md:w-3/5 xl:w-1/2 max-w-full",
                      children: (0, r.jsx)(o.ZP, { StepRenderer: d }),
                    }),
                    (0, r.jsx)(o.aW, {
                      className: (0, c.Z)(
                        a().carouselButtonWhite,
                        "!hidden md:!flex"
                      ),
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex space-x-6",
                      children: [
                        (0, r.jsx)(o.Q1, {
                          className: (0, c.Z)(
                            a().carouselButtonWhite,
                            "md:!hidden"
                          ),
                        }),
                        (0, r.jsx)(o.aW, {
                          className: (0, c.Z)(
                            a().carouselButtonWhite,
                            "md:!hidden"
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
    92761: function (e) {
      e.exports = {
        carouselButton: "carousel_carouselButton__ONi9r",
        carouselButtonBlue:
          "carousel_carouselButtonBlue__P34af carousel_carouselButton__ONi9r",
        carouselButtonWhite:
          "carousel_carouselButtonWhite___RRg0 carousel_carouselButton__ONi9r",
        carouselButtonIcon: "carousel_carouselButtonIcon__smfjf",
      };
    },
    20943: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    13375: function (e, t, n) {
      "use strict";
      function r(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    29815: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(20943);
      var u = n(13375);
      var c = n(91566);
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (0, u.Z)(e) ||
          (0, c.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    91566: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(20943);
      function u(e, t) {
        if (e) {
          if ("string" === typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(e, t)
              : void 0
          );
        }
      }
    },
  },
]);
//# sourceMappingURL=27.07e8bca8609e9bd0.js.map
