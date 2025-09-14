(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3841],
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
        a = Math.max,
        c = Math.min;
      e.exports = function (e, t, n) {
        var s,
          l,
          u,
          f,
          d,
          h,
          m = 0,
          p = !1,
          v = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function _(t) {
          var n = s,
            r = l;
          return (s = l = void 0), (m = t), (f = e.apply(r, n));
        }
        function y(e) {
          return (m = e), (d = setTimeout(b, t)), p ? _(e) : f;
        }
        function w(e) {
          var n = e - h;
          return void 0 === h || n >= t || n < 0 || (v && e - m >= u);
        }
        function b() {
          var e = i();
          if (w(e)) return k(e);
          d = setTimeout(
            b,
            (function (e) {
              var n = t - (e - h);
              return v ? c(n, u - (e - m)) : n;
            })(e)
          );
        }
        function k(e) {
          return (d = void 0), g && s ? _(e) : ((s = l = void 0), f);
        }
        function x() {
          var e = i(),
            n = w(e);
          if (((s = arguments), (l = this), (h = e), n)) {
            if (void 0 === d) return y(h);
            if (v) return clearTimeout(d), (d = setTimeout(b, t)), _(h);
          }
          return void 0 === d && (d = setTimeout(b, t)), f;
        }
        return (
          (t = o(t) || 0),
          r(n) &&
            ((p = !!n.leading),
            (u = (v = "maxWait" in n) ? a(o(n.maxWait) || 0, t) : u),
            (g = "trailing" in n ? !!n.trailing : g)),
          (x.cancel = function () {
            void 0 !== d && clearTimeout(d), (m = 0), (s = h = l = d = void 0);
          }),
          (x.flush = function () {
            return void 0 === d ? f : k(i());
          }),
          x
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
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
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
        return n || s.test(e) ? l(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e;
      };
    },
    22472: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return r;
        },
      });
      var r,
        i = n(85893),
        o = n(86010),
        a = (n(67294), n(70131)),
        c = n(63801),
        s = n(47143),
        l = n.n(s);
      !(function (e) {
        (e.PRIMARY = "primary"),
          (e.GREEN = "green"),
          (e.TRANSPARENT = "transparent");
      })(r || (r = {}));
      t.Z = function (e) {
        var t = e.className,
          n = e.delay,
          s = e.iconClassName,
          u = e.animate,
          f = e.variant,
          d = void 0 === f ? r.GREEN : f,
          h = e.loaded,
          m = (0, a.YD)({ threshold: 0.6, triggerOnce: !0 }),
          p = m.inView,
          v = m.ref;
        return (0, i.jsx)("div", {
          className: t,
          ref: v,
          children: (0, i.jsx)("div", {
            className: (0, o.Z)(
              l().animatedCheck,
              n && l()["delay".concat(n)],
              (void 0 === u ? p && (void 0 === h || h) : u) && l().animate,
              d && l()[d]
            ),
            children: (0, i.jsx)(c.nQG, { className: s }),
          }),
        });
      };
    },
    87780: function (e, t, n) {
      "use strict";
      var r = n(85893),
        i = n(67294),
        o = n(86010),
        a = n(23279),
        c = n.n(a),
        s = n(63801),
        l = n(26654),
        u = n.n(l),
        f = (0, i.forwardRef)(function (e, t) {
          var n = e.className,
            a = e.children,
            l = (0, i.useState)({ previous: !1, next: !1 }),
            f = l[0],
            d = l[1],
            h = (0, i.useRef)(null),
            m = (0, i.useRef)(null),
            p = (0, i.useState)(null),
            v = p[0],
            g = p[1],
            _ = (0, i.useRef)(null),
            y = (0, i.useRef)(null),
            w = (0, i.useRef)(null),
            b = (0, i.useState)(!1),
            k = b[0],
            x = b[1],
            N = v || k,
            C = function () {
              if (h.current && m.current) {
                var e = h.current.scrollLeft + h.current.offsetWidth;
                return Math.round(e) === m.current.offsetWidth;
              }
            },
            j = (0, i.useCallback)(function () {
              h.current &&
                m.current &&
                d({ previous: h.current.scrollLeft > 0, next: !C() });
            }, []),
            M = function (e) {
              v || (e && x(!0), g("left"));
            },
            R = function (e) {
              v || (e && x(!0), g("right"));
            },
            S = (0, i.useCallback)(function (e) {
              _.current && clearTimeout(_.current), e && x(!1), g(null);
            }, []),
            V = (0, i.useCallback)(
              function () {
                if (h.current && v) {
                  if ((_.current && clearTimeout(_.current), "left" === v)) {
                    if (0 === h.current.scrollLeft) return void S();
                    h.current.scrollLeft -= 10;
                  } else {
                    if (m.current && C()) return void S();
                    h.current.scrollLeft += 10;
                  }
                  _.current = setTimeout(V, 10);
                }
              },
              [v, S]
            ),
            E = (0, i.useMemo)(
              function () {
                return c()(j, 500);
              },
              [j]
            ),
            Z = (0, i.useCallback)(
              function () {
                E();
              },
              [E]
            );
          return (
            (0, i.useEffect)(
              function () {
                h.current &&
                  m.current &&
                  m.current.offsetWidth > h.current.offsetWidth &&
                  j();
              },
              [j]
            ),
            (0, i.useEffect)(
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
            (0, i.useEffect)(
              function () {
                return (
                  v && V(),
                  function () {
                    _.current && clearTimeout(_.current);
                  }
                );
              },
              [V, v]
            ),
            (0, r.jsxs)("div", {
              className: (0, o.Z)(
                n,
                "overflow-hidden w-full relative",
                N && "select-none"
              ),
              onContextMenu: function (e) {
                if (N) return e.preventDefault(), e.stopPropagation(), !1;
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
                      return M();
                    },
                    onMouseMove: function () {
                      return S();
                    },
                    onMouseUp: function () {
                      return S(!0);
                    },
                    onTouchStart: function () {
                      return M(!0);
                    },
                    onTouchMove: function () {
                      return S();
                    },
                    onTouchEnd: function (e) {
                      e.preventDefault(), S(!0);
                    },
                    className: (0, o.Z)("p-0", N && "pointer-events-none"),
                    ref: y,
                    "aria-label": "Scroll left",
                    children: (0, r.jsx)(s.wyc, {
                      className: "h-6 w-6 md:h-8 md:w-8",
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "-m-2",
                  children: (0, r.jsx)("div", {
                    className: u().scrollContainer,
                    ref: h,
                    onScroll: j,
                    children: (0, i.cloneElement)(a, {
                      ref: function (e) {
                        if (((m.current = e), "ref" in a && a.ref)) {
                          var t = a.ref;
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
                      return R();
                    },
                    onMouseMove: function () {
                      return S();
                    },
                    onClick: function () {
                      return S(!0);
                    },
                    onMouseUp: function () {
                      return S(!0);
                    },
                    onTouchStart: function () {
                      return R(!0);
                    },
                    onTouchMove: function () {
                      return S();
                    },
                    onTouchEnd: function (e) {
                      e.preventDefault(), S(!0);
                    },
                    className: (0, o.Z)("p-0", N && "pointer-events-none"),
                    ref: w,
                    "aria-label": "Scroll right",
                    children: (0, r.jsx)(s.XCv, {
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
    53841: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(828),
        i = n(85893),
        o = n(67294),
        a = n(86010),
        c = n(22472),
        s = n(87780),
        l = n(88104),
        u = n(13551),
        f = n(70131),
        d = n(92834),
        h = n.n(d),
        m = [
          {
            title: "Integrations",
            description:
              "Bring your favorite tools; we\u2019ll connect them all.",
          },
          {
            title: "Sales",
            description: "Streamline your sales process and close more deals.",
          },
          {
            title: "Financing",
            description: "Simplify financing with integrated solar lending.",
          },
          {
            title: "Proposals",
            description: "Impress your customers with stunning proposals.",
          },
          {
            title: "Doc Signing",
            description: "Take the pain out of solar docs with Docflo.",
          },
          {
            title: "Projects",
            description: "Deliver projects on track and on time, every time.",
          },
          {
            title: "Support",
            description: "Delight your customers with a centralized portal.",
          },
        ],
        p = "Streamline the Solar Process";
      t.default = function () {
        var e = (0, r.Z)((0, f.YD)({ threshold: 0.4, triggerOnce: !0 }), 2),
          t = e[0],
          n = e[1],
          d = (0, o.useRef)(null),
          v = (0, o.useRef)(null),
          g = (0, o.useRef)(0),
          _ = (0, o.useCallback)(function () {
            var e = document.querySelectorAll(".timeline-mask"),
              t = document.querySelectorAll(".animated-check");
            if (
              e.length &&
              v.current &&
              d.current &&
              g.current !== window.innerWidth
            ) {
              g.current = window.innerWidth;
              var n = t[0].getBoundingClientRect(),
                r = t[t.length - 1].getBoundingClientRect();
              (v.current.style.height = "".concat(
                Math.round(n.height + 2),
                "px"
              )),
                (v.current.style.width = "".concat(
                  Math.round(r.right - n.left + 2),
                  "px"
                )),
                (v.current.style.left = "".concat(
                  Math.round(
                    n.left - d.current.getBoundingClientRect().left - 1
                  ),
                  "px"
                ));
              for (var i = 0; i < e.length; i++) {
                var o = e[i],
                  a = t[i].getBoundingClientRect(),
                  c = t[i + 1].getBoundingClientRect();
                (o.style.width = "".concat(
                  Math.round(c.left - a.right - 4),
                  "px"
                )),
                  (o.style.border = "".concat(
                    Math.round((a.height + 8) / 2),
                    "px solid white"
                  ));
              }
            }
          }, []),
          y = (0, o.useCallback)(
            function () {
              _();
            },
            [_]
          );
        return (
          (0, o.useEffect)(
            function () {
              return (
                _(),
                window.addEventListener("resize", y),
                function () {
                  window.removeEventListener("resize", y);
                }
              );
            },
            [y, _]
          ),
          (0, i.jsx)("div", {
            className:
              "shadow-lg relative z-[1] bg-gradient-to-b from-gray-100 via-white to-white lg:bg-none",
            children: (0, i.jsx)(u.Z, {
              title: p,
              children: (0, i.jsxs)("div", {
                className: "w-full",
                children: [
                  (0, i.jsxs)(u.Z.Content, {
                    children: [
                      (0, i.jsx)(u.Z.Header, {
                        children: (0, i.jsx)(l.Z, { tag: "h2", children: p }),
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-lg text-gray-500 mx-auto md:w-3/4 lg:w-2/3 md:text-center",
                        children:
                          "Enerflo creates efficiencies from lead to PTO to grow your solar business. As a true open platform, we invite you to bring your favorite tools and let Enerflo connect them all together. Trust your tech with us, and we\u2019ll blow your mind.",
                      }),
                    ],
                  }),
                  (0, i.jsx)(s.Z, {
                    className: "mt-10",
                    ref: t,
                    children: (0, i.jsxs)("div", {
                      className: "inline-flex relative px-4",
                      ref: d,
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "absolute top-[25px] left-0 h-[42px] rounded-full w-full z-0 mx-auto",
                          ref: v,
                          children: (0, i.jsx)("div", {
                            className: (0, a.Z)(h().timeline, n && h().animate),
                          }),
                        }),
                        m.map(function (e, t) {
                          return (0,
                          i.jsxs)("div", { className: h().timelineItem, children: [(0, i.jsxs)("div", { className: (0, a.Z)(h().timelineCheckContainer), children: [t !== m.length - 1 && (0, i.jsx)("div", { className: (0, a.Z)(h().timelineMask, "timeline-mask") }), (0, i.jsx)(c.Z, { className: "bg-transparent animated-check", iconClassName: "h-6 w-6 md:h-8 md:w-8", delay: t, animate: n, variant: c.W.TRANSPARENT })] }), (0, i.jsx)(l.Z, { tag: "h6", className: "mt-3", children: e.title }), (0, i.jsx)("p", { className: "mt-2 text-gray-500 text-sm", children: e.description })] }, e.title);
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    47143: function (e) {
      e.exports = {
        animatedCheck: "animated-check_animatedCheck__0CrzN",
        md: "animated-check_md__ko1ci",
        lg: "animated-check_lg__axN7b",
        green: "animated-check_green__aY07z",
        primary: "animated-check_primary__ni16H",
        transparent: "animated-check_transparent__Ojegk",
        animate: "animated-check_animate__dk7m5",
        check: "animated-check_check__fo_oE",
        checkPrimary: "animated-check_checkPrimary__su0_t",
        checkTransparent: "animated-check_checkTransparent__apYWb",
        fade: "animated-check_fade__f0WAf",
        delay1: "animated-check_delay1__hZozD",
        delay2: "animated-check_delay2__CwFL2",
        delay3: "animated-check_delay3__Nq_JA",
        delay4: "animated-check_delay4__Ddo__",
        delay5: "animated-check_delay5__lVA1W",
        delay6: "animated-check_delay6___jRQr",
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
    92834: function (e) {
      e.exports = {
        timelineItem: "home_timelineItem__OG70M",
        timeline: "home_timeline__6vac9",
        timelineMask: "home_timelineMask__qK1rc",
        timelineCheckContainer: "home_timelineCheckContainer__DjkpK",
        animate: "home_animate__Sn1Kw",
        grow: "home_grow__E3Koj",
      };
    },
    70131: function (e, t, n) {
      "use strict";
      n.d(t, {
        YD: function () {
          return p;
        },
      });
      var r = n(67294);
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      function o(e, t) {
        return (
          (o =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          o(e, t)
        );
      }
      var a = new Map(),
        c = new WeakMap(),
        s = 0,
        l = void 0;
      function u(e) {
        return Object.keys(e)
          .sort()
          .filter(function (t) {
            return void 0 !== e[t];
          })
          .map(function (t) {
            return (
              t +
              "_" +
              ("root" === t
                ? (n = e.root)
                  ? (c.has(n) || ((s += 1), c.set(n, s.toString())), c.get(n))
                  : "0"
                : e[t])
            );
            var n;
          })
          .toString();
      }
      function f(e, t, n, r) {
        if (
          (void 0 === n && (n = {}),
          void 0 === r && (r = l),
          "undefined" === typeof window.IntersectionObserver && void 0 !== r)
        ) {
          var i = e.getBoundingClientRect();
          return (
            t(r, {
              isIntersecting: r,
              target: e,
              intersectionRatio:
                "number" === typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i,
            }),
            function () {}
          );
        }
        var o = (function (e) {
            var t = u(e),
              n = a.get(t);
            if (!n) {
              var r,
                i = new Map(),
                o = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var n,
                      o =
                        t.isIntersecting &&
                        r.some(function (e) {
                          return t.intersectionRatio >= e;
                        });
                    e.trackVisibility &&
                      "undefined" === typeof t.isVisible &&
                      (t.isVisible = o),
                      null == (n = i.get(t.target)) ||
                        n.forEach(function (e) {
                          e(o, t);
                        });
                  });
                }, e);
              (r =
                o.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (n = { id: t, observer: o, elements: i }),
                a.set(t, n);
            }
            return n;
          })(n),
          c = o.id,
          s = o.observer,
          f = o.elements,
          d = f.get(e) || [];
        return (
          f.has(e) || f.set(e, d),
          d.push(t),
          s.observe(e),
          function () {
            d.splice(d.indexOf(t), 1),
              0 === d.length && (f.delete(e), s.unobserve(e)),
              0 === f.size && (s.disconnect(), a.delete(c));
          }
        );
      }
      var d = [
        "children",
        "as",
        "tag",
        "triggerOnce",
        "threshold",
        "root",
        "rootMargin",
        "onChange",
        "skip",
        "trackVisibility",
        "delay",
        "initialInView",
        "fallbackInView",
      ];
      function h(e) {
        return "function" !== typeof e.children;
      }
      var m = (function (e) {
        var t, n;
        function a(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).node = null),
            (n._unobserveCb = null),
            (n.handleNode = function (e) {
              n.node &&
                (n.unobserve(),
                e ||
                  n.props.triggerOnce ||
                  n.props.skip ||
                  n.setState({
                    inView: !!n.props.initialInView,
                    entry: void 0,
                  })),
                (n.node = e || null),
                n.observeNode();
            }),
            (n.handleChange = function (e, t) {
              e && n.props.triggerOnce && n.unobserve(),
                h(n.props) || n.setState({ inView: e, entry: t }),
                n.props.onChange && n.props.onChange(e, t);
            }),
            (n.state = { inView: !!t.initialInView, entry: void 0 }),
            n
          );
        }
        (n = e),
          ((t = a).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          o(t, n);
        var c = a.prototype;
        return (
          (c.componentDidUpdate = function (e) {
            (e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode());
          }),
          (c.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (c.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                t = e.threshold,
                n = e.root,
                r = e.rootMargin,
                i = e.trackVisibility,
                o = e.delay,
                a = e.fallbackInView;
              this._unobserveCb = f(
                this.node,
                this.handleChange,
                {
                  threshold: t,
                  root: n,
                  rootMargin: r,
                  trackVisibility: i,
                  delay: o,
                },
                a
              );
            }
          }),
          (c.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (c.render = function () {
            if (!h(this.props)) {
              var e = this.state,
                t = e.inView,
                n = e.entry;
              return this.props.children({
                inView: t,
                entry: n,
                ref: this.handleNode,
              });
            }
            var o = this.props,
              a = o.children,
              c = o.as,
              s = o.tag,
              l = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
              })(o, d);
            return r.createElement(
              c || s || "div",
              i({ ref: this.handleNode }, l),
              a
            );
          }),
          a
        );
      })(r.Component);
      function p(e) {
        var t = void 0 === e ? {} : e,
          n = t.threshold,
          i = t.delay,
          o = t.trackVisibility,
          a = t.rootMargin,
          c = t.root,
          s = t.triggerOnce,
          l = t.skip,
          u = t.initialInView,
          d = t.fallbackInView,
          h = r.useRef(),
          m = r.useState({ inView: !!u }),
          p = m[0],
          v = m[1],
          g = r.useCallback(
            function (e) {
              void 0 !== h.current && (h.current(), (h.current = void 0)),
                l ||
                  (e &&
                    (h.current = f(
                      e,
                      function (e, t) {
                        v({ inView: e, entry: t }),
                          t.isIntersecting &&
                            s &&
                            h.current &&
                            (h.current(), (h.current = void 0));
                      },
                      {
                        root: c,
                        rootMargin: a,
                        threshold: n,
                        trackVisibility: o,
                        delay: i,
                      },
                      d
                    )));
            },
            [Array.isArray(n) ? n.toString() : n, c, a, s, l, o, d, i]
          );
        (0, r.useEffect)(function () {
          h.current || !p.entry || s || l || v({ inView: !!u });
        });
        var _ = [g, p.inView, p.entry];
        return (_.ref = _[0]), (_.inView = _[1]), (_.entry = _[2]), _;
      }
      (m.displayName = "InView"),
        (m.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
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
    828: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(13375);
      var i = n(91566);
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (0, r.Z)(e, t) ||
          (0, i.Z)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    91566: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(20943);
      function i(e, t) {
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
//# sourceMappingURL=3841.ec3d98dad7ce6f75.js.map
