(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9394],
  {
    27561: function (e, t, n) {
      var r = n(67990),
        i = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(i, "") : e;
      };
    },
    67990: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)); );
        return n;
      };
    },
    23279: function (e, t, n) {
      var r = n(13218),
        i = n(7771),
        o = n(14841),
        s = Math.max,
        c = Math.min;
      e.exports = function (e, t, n) {
        var a,
          l,
          u,
          f,
          d,
          h,
          m = 0,
          x = !1,
          v = !1,
          p = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function g(t) {
          var n = a,
            r = l;
          return (a = l = void 0), (m = t), (f = e.apply(r, n));
        }
        function w(e) {
          return (m = e), (d = setTimeout(N, t)), x ? g(e) : f;
        }
        function j(e) {
          var n = e - h;
          return void 0 === h || n >= t || n < 0 || (v && e - m >= u);
        }
        function N() {
          var e = i();
          if (j(e)) return y(e);
          d = setTimeout(
            N,
            (function (e) {
              var n = t - (e - h);
              return v ? c(n, u - (e - m)) : n;
            })(e)
          );
        }
        function y(e) {
          return (d = void 0), p && a ? g(e) : ((a = l = void 0), f);
        }
        function b() {
          var e = i(),
            n = j(e);
          if (((a = arguments), (l = this), (h = e), n)) {
            if (void 0 === d) return w(h);
            if (v) return clearTimeout(d), (d = setTimeout(N, t)), g(h);
          }
          return void 0 === d && (d = setTimeout(N, t)), f;
        }
        return (
          (t = o(t) || 0),
          r(n) &&
            ((x = !!n.leading),
            (u = (v = "maxWait" in n) ? s(o(n.maxWait) || 0, t) : u),
            (p = "trailing" in n ? !!n.trailing : p)),
          (b.cancel = function () {
            void 0 !== d && clearTimeout(d), (m = 0), (a = h = l = d = void 0);
          }),
          (b.flush = function () {
            return void 0 === d ? f : y(i());
          }),
          b
        );
      };
    },
    7771: function (e, t, n) {
      var r = n(55639);
      e.exports = function () {
        return r.Date.now();
      };
    },
    14841: function (e, t, n) {
      var r = n(27561),
        i = n(13218),
        o = n(33448),
        s = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (o(e)) return NaN;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = c.test(e);
        return n || a.test(e) ? l(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e;
      };
    },
    87780: function (e, t, n) {
      "use strict";
      var r = n(85893),
        i = n(67294),
        o = n(86010),
        s = n(23279),
        c = n.n(s),
        a = n(63801),
        l = n(26654),
        u = n.n(l),
        f = (0, i.forwardRef)(function (e, t) {
          var n = e.className,
            s = e.children,
            l = (0, i.useState)({ previous: !1, next: !1 }),
            f = l[0],
            d = l[1],
            h = (0, i.useRef)(null),
            m = (0, i.useRef)(null),
            x = (0, i.useState)(null),
            v = x[0],
            p = x[1],
            g = (0, i.useRef)(null),
            w = (0, i.useRef)(null),
            j = (0, i.useRef)(null),
            N = (0, i.useState)(!1),
            y = N[0],
            b = N[1],
            E = v || y,
            _ = function () {
              if (h.current && m.current) {
                var e = h.current.scrollLeft + h.current.offsetWidth;
                return Math.round(e) === m.current.offsetWidth;
              }
            },
            Z = (0, i.useCallback)(function () {
              h.current &&
                m.current &&
                d({ previous: h.current.scrollLeft > 0, next: !_() });
            }, []),
            C = function (e) {
              v || (e && b(!0), p("left"));
            },
            T = function (e) {
              v || (e && b(!0), p("right"));
            },
            D = (0, i.useCallback)(function (e) {
              g.current && clearTimeout(g.current), e && b(!1), p(null);
            }, []),
            M = (0, i.useCallback)(
              function () {
                if (h.current && v) {
                  if ((g.current && clearTimeout(g.current), "left" === v)) {
                    if (0 === h.current.scrollLeft) return void D();
                    h.current.scrollLeft -= 10;
                  } else {
                    if (m.current && _()) return void D();
                    h.current.scrollLeft += 10;
                  }
                  g.current = setTimeout(M, 10);
                }
              },
              [v, D]
            ),
            L = (0, i.useMemo)(
              function () {
                return c()(Z, 500);
              },
              [Z]
            ),
            S = (0, i.useCallback)(
              function () {
                L();
              },
              [L]
            );
          return (
            (0, i.useEffect)(
              function () {
                h.current &&
                  m.current &&
                  m.current.offsetWidth > h.current.offsetWidth &&
                  Z();
              },
              [Z]
            ),
            (0, i.useEffect)(
              function () {
                return (
                  window.addEventListener("resize", S),
                  function () {
                    window.removeEventListener("resize", S);
                  }
                );
              },
              [S]
            ),
            (0, i.useEffect)(
              function () {
                return (
                  v && M(),
                  function () {
                    g.current && clearTimeout(g.current);
                  }
                );
              },
              [M, v]
            ),
            (0, r.jsxs)("div", {
              className: (0, o.Z)(
                n,
                "overflow-hidden w-full relative",
                E && "select-none"
              ),
              onContextMenu: function (e) {
                if (E) return e.preventDefault(), e.stopPropagation(), !1;
              },
              ref: t,
              children: [
                (0, r.jsx)("div", {
                  className: (0, o.Z)(
                    u().scrollButtonLeft,
                    f.previous && u().active
                  ),
                  children: (0, r.jsx)("button", {
                    onMouseDown: function () {
                      return C();
                    },
                    onMouseMove: function () {
                      return D();
                    },
                    onMouseUp: function () {
                      return D(!0);
                    },
                    onTouchStart: function () {
                      return C(!0);
                    },
                    onTouchMove: function () {
                      return D();
                    },
                    onTouchEnd: function (e) {
                      e.preventDefault(), D(!0);
                    },
                    className: (0, o.Z)("p-0", E && "pointer-events-none"),
                    ref: w,
                    "aria-label": "Scroll left",
                    children: (0, r.jsx)(a.wyc, {
                      className: "h-6 w-6 md:h-8 md:w-8",
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "-m-2",
                  children: (0, r.jsx)("div", {
                    className: u().scrollContainer,
                    ref: h,
                    onScroll: Z,
                    children: (0, i.cloneElement)(s, {
                      ref: function (e) {
                        if (((m.current = e), "ref" in s && s.ref)) {
                          var t = s.ref;
                          "object" === typeof t && t.hasOwnProperty("current")
                            ? (t.current = e)
                            : "function" === typeof t && t(e);
                        }
                      },
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: (0, o.Z)(
                    u().scrollButtonRight,
                    f.next && u().active
                  ),
                  children: (0, r.jsx)("button", {
                    onMouseDown: function () {
                      return T();
                    },
                    onMouseMove: function () {
                      return D();
                    },
                    onClick: function () {
                      return D(!0);
                    },
                    onMouseUp: function () {
                      return D(!0);
                    },
                    onTouchStart: function () {
                      return T(!0);
                    },
                    onTouchMove: function () {
                      return D();
                    },
                    onTouchEnd: function (e) {
                      e.preventDefault(), D(!0);
                    },
                    className: (0, o.Z)("p-0", E && "pointer-events-none"),
                    ref: j,
                    "aria-label": "Scroll right",
                    children: (0, r.jsx)(a.XCv, {
                      className: "h-6 w-6 md:h-8 md:w-8",
                    }),
                  }),
                }),
              ],
            })
          );
        });
      (f.displayName = "FadeScroller"), (t.Z = f);
    },
    13551: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return u;
        },
      });
      var r = n(85893),
        i = (n(67294), n(86010)),
        o = n(21804),
        s = n.n(o),
        c = n(41664),
        a = n.n(c),
        l = function (e) {
          var t = e.children,
            n = e.className;
          return (0, r.jsx)("div", {
            className: (0, i.Z)("heroInner", n),
            children: t,
          });
        },
        u = function (e) {
          var t = e.title,
            n = e.children,
            o = e.className,
            c = void 0 === o ? "items-center" : o;
          return (0, r.jsx)("section", {
            id: s()(t),
            className: (0, i.Z)("heroSection", c),
            children: n,
          });
        },
        f = function (e) {
          var t = e.title,
            n = e.children,
            i = e.className;
          return (0, r.jsx)(u, {
            title: t,
            children: (0, r.jsx)(l, { className: i, children: n }),
          });
        };
      (f.Header = function (e) {
        var t = e.children,
          n = e.className;
        return (0, r.jsx)("div", {
          className: (0, i.Z)("heroHeader", n),
          children: t,
        });
      }),
        (f.Inner = l),
        (f.Content = function (e) {
          var t = e.children,
            n = e.className;
          return (0, r.jsx)("div", {
            className: (0, i.Z)("heroContent", n),
            children: t,
          });
        }),
        (f.Description = function (e) {
          var t = e.children,
            n = e.className,
            o = void 0 === n ? "text-gray-500" : n;
          return (0, r.jsx)("p", {
            className: (0, i.Z)("heroDescription", o),
            children: t,
          });
        }),
        (f.Action = function (e) {
          var t = e.children,
            n = e.className,
            o = e.href;
          return (0, r.jsx)(a(), {
            href: o,
            children: (0, r.jsx)("a", {
              className: (0, i.Z)("heroAction btn", n),
              children: t,
            }),
          });
        }),
        (t.Z = f);
    },
    62498: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return a;
        },
      });
      var r = n(26042),
        i = n(85893),
        o = n(88104),
        s = n(13551),
        c = function (e) {
          var t = e.title,
            n = e.description,
            r = e.action,
            o = e.figure;
          return (0, i.jsx)("div", {
            className:
              "border border-white rounded-lg bg-primary/30 p-4 shadow flex-1 md:p-6",
            children: (0, i.jsxs)("div", {
              className:
                "flex flex-col grow gap-10 h-full justify-between items-center",
              children: [
                (0, i.jsxs)("div", {
                  className: "text-center space-y-2",
                  children: [
                    (0, i.jsx)("figure", { children: o }),
                    (0, i.jsx)("p", {
                      className: "text-white text-lg md:text-xl font-semibold",
                      children: t,
                    }),
                    (0, i.jsx)("p", {
                      className: "text-gray-200",
                      children: n,
                    }),
                  ],
                }),
                (0, i.jsx)("a", {
                  href: r.href,
                  className:
                    "btn btn-primary text-sm w-full whitespace-nowrap min-w-[180px] text-center xs:w-auto md:text-base",
                  children: r.text,
                }),
              ],
            }),
          });
        },
        a = function (e) {
          var t = e.items;
          return (0, i.jsx)("div", {
            className:
              "flex flex-col flex-grow h-full gap-4 p-4 md:flex-row lg:gap-8",
            children: t.map(function (e) {
              return (0, i.jsx)(c, (0, r.Z)({}, e), e.title);
            }),
          });
        },
        l = function (e) {
          var t = e.title;
          return (0, i.jsx)(s.Z.Content, {
            children: (0, i.jsx)(s.Z.Header, {
              className: "md:items-start",
              children: (0, i.jsx)(o.Z, {
                tag: "h2",
                className: "leading-tight",
                children: t,
              }),
            }),
          });
        };
      t.Z = function (e) {
        var t = e.items,
          n = e.title,
          r = void 0 === n ? "Explore more Enerflo Integrations" : n,
          o = e.children;
        return (0, i.jsx)("div", {
          className: "bg-gradient-to-br from-primary to-navy-dark md:py-10",
          children: (0, i.jsxs)(s.Z, {
            title: r,
            className: "text-white flex-col md:space-x-0 md:space-y-4",
            children: [
              o || (0, i.jsx)(l, { title: r }),
              (0, i.jsx)(a, { items: t }),
            ],
          }),
        });
      };
    },
    33015: function (e, t, n) {
      "use strict";
      var r = n(85893),
        i = (n(67294), n(88104)),
        o = n(13551);
      t.Z = function (e) {
        var t = e.title,
          n = e.children;
        return (0, r.jsx)("div", {
          className: "bg-gray-100",
          children: (0, r.jsx)(o.Z, {
            children: (0, r.jsxs)("div", {
              className: "w-full p-4",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "flex gap-4 w-full items-center justify-between bg-gradient-to-r from-navy to-primary px-4 py-2 text-left text-gray-100 rounded-b-none rounded-t-lg",
                  children: (0, r.jsx)(i.Z, {
                    tag: "h6",
                    fontWeight: "regular",
                    children: t,
                  }),
                }),
                (0, r.jsx)("div", { className: "flex-grow", children: n }),
              ],
            }),
          }),
        });
      };
    },
    41099: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return c;
        },
      });
      var r,
        i = n(85893),
        o = n(25675),
        s = n.n(o);
      !(function (e) {
        (e.Overview = "overview"),
          (e.Design = "design"),
          (e.Sales = "sales"),
          (e.Finance = "finance");
      })(r || (r = {}));
      var c = {
        overview: {
          title: "Enerflo Integrations",
          description:
            "As the ONLY lead-to-PTO, open API solar platform, Enerflo has the most integrations in the industry. Do more with integrations.",
          figure: (0, i.jsx)(s(), {
            src: {
              src: "/_next/static/media/enerflo-integrations-icon.e70d52dc.svg",
              height: 49,
              width: 55,
            },
            alt: "Icon - Enerflo Integrations.",
          }),
          action: { text: "Learn More", href: "/integrations" },
        },
        sales: {
          title: "Compare Sales Qualification Tools",
          description:
            "Use these powerful tools with Enerflo for lead generation, management, canvassing, pipeline management and more.",
          figure: (0, i.jsx)(s(), {
            src: {
              src: "/_next/static/media/sales-qualification-tools-icon.ac80f2fa.svg",
              height: 49,
              width: 49,
            },
            alt: "Icon - Enerflo Sales Qualification.",
          }),
          action: {
            text: "Compare Sales",
            href: "/integrations/sales-qualification",
          },
        },
        design: {
          title: "Compare Design Tools",
          description:
            "You have a choice on Enerflo when it comes to solar PV system design -- choose your favorite tool, or bring your own.",
          figure: (0, i.jsx)(s(), {
            src: {
              src: "/_next/static/media/design-tools-icon.01e34e79.svg",
              height: 49,
              width: 50,
            },
            alt: "Icon - Enerflo Design Tools.",
          }),
          action: {
            text: "Compare Design",
            href: "/integrations/solar-design",
          },
        },
        finance: {
          title: "Compare Finance Options",
          description:
            "Whether your homeowners want to finance, pay cash or lease from a 3rd party, Enerflo has you covered with Lendflo integrated payments.",
          figure: (0, i.jsx)(s(), {
            src: {
              src: "/_next/static/media/finance-options-icon.1baddebf.svg",
              height: 49,
              width: 43,
            },
            alt: "Icon - Enerflo Finance Options.",
          }),
          action: {
            text: "Compare Finance",
            href: "/integrations/solar-finance",
          },
        },
      };
    },
    40344: function (e, t, n) {
      "use strict";
      var r = n(85893),
        i = (n(67294), n(88104)),
        o = n(13551),
        s = n(645),
        c = n(41664),
        a = n.n(c),
        l = n(63801);
      t.Z = function () {
        return (0, r.jsx)("div", {
          className: "bg-primary z-20 relative",
          children: (0, r.jsx)(o.Z, {
            className: "sm:py-12 lg:py-16",
            children: (0, r.jsx)(o.Z.Content, {
              children: (0, r.jsxs)("div", {
                className:
                  "flex flex-col flex-wrap items-center justify-center gap-2 -mx-2 -my-2 text-white text-center",
                children: [
                  (0, r.jsx)(i.Z, {
                    tag: "h3",
                    className: "mb-2",
                    children: "Partner with Enerflo",
                  }),
                  (0, r.jsx)("div", {
                    className: "text-base md:text-lg mx-2 my-2 max-w-lg",
                    children:
                      "Interested in integrating with Enerflo? Talk to the Enerflo Business Development team to get started.",
                  }),
                  (0, r.jsx)(a(), {
                    href: "/about/contact",
                    children: (0, r.jsxs)("a", {
                      className:
                        "btn btn-dark text-sm md:text-base flex items-center whitespace-nowrap mx-2 my-2",
                      onClick: function () {
                        return (0, s.MR)(
                          "Engagement Button",
                          "Buttons",
                          "Partner with Enerflo"
                        );
                      },
                      children: [
                        (0, r.jsx)("span", { children: "Contact Enerflo" }),
                        (0, r.jsx)(l.a3z, { className: "h-4 w-4 ml-2" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    26654: function (e) {
      e.exports = {
        scrollContainer: "fade-scroller_scrollContainer__357YO",
        scrollButton: "fade-scroller_scrollButton__v9UDW",
        scrollButtonLeft:
          "fade-scroller_scrollButtonLeft__Zxfx0 fade-scroller_scrollButton__v9UDW",
        active: "fade-scroller_active__iiLwH",
        scrollButtonRight:
          "fade-scroller_scrollButtonRight__9flw1 fade-scroller_scrollButton__v9UDW",
      };
    },
  },
]);
//# sourceMappingURL=9394-6df8a585d7f87088.js.map
