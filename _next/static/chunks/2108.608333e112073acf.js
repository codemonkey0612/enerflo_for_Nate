"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2108],
  {
    5427: function (e, t, r) {
      r.d(t, {
        m: function () {
          return o;
        },
        p: function () {
          return s;
        },
      });
      var n = r(92077),
        i = r.n(n),
        o = function (e) {
          return i()(e).format("0".concat(e > 1e6 ? "[.]0" : "", "a"));
        },
        s = function (e) {
          return e.replace(/\d\.*/g, "").toUpperCase();
        };
    },
    57969: function (e, t, r) {
      r.d(t, {
        F: function () {
          return n;
        },
      });
      var n = { revenueToDate: 55e8, agreementsToDate: 15e4 };
    },
    32108: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return P;
          },
        });
      var n = r(85893),
        i = r(67294),
        o = r(86010),
        s = r(88104),
        a = r(5427),
        l = r(70131),
        u = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        p = Object.defineProperty,
        f = Object.defineProperties,
        h = Object.getOwnPropertyDescriptors,
        m = Object.getOwnPropertySymbols,
        v = Object.prototype.hasOwnProperty,
        y = Object.prototype.propertyIsEnumerable,
        b = (e, t, r) =>
          t in e
            ? p(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        g = (e, t) => {
          for (var r in t || (t = {})) v.call(t, r) && b(e, r, t[r]);
          if (m) for (var r of m(t)) y.call(t, r) && b(e, r, t[r]);
          return e;
        },
        x = (e, t) => f(e, h(t)),
        w = "undefined" == typeof window ? i.useEffect : i.useLayoutEffect,
        O = {
          easeInCubic: (e, t, r, n) => r * (e /= n) * e * e + t,
          easeOutCubic: (e, t, r, n) => ((e /= n), r * (--e * e * e + 1) + t),
          linear: (e, t, r, n) => (r * e) / n + t,
        },
        j = O.easeOutCubic,
        V = (e, t) => e.replace(/\B(?=(\d{3})+(?!\d))/g, t),
        C = (e) => (e.toString().split(".")[1] || "").length,
        k = (e, t) => {
          let r = C(e),
            n = C(t || 1);
          return r >= n ? r : n;
        },
        R = ({
          isCounting: e = !1,
          start: t = 0,
          end: r,
          duration: n,
          decimalPlaces: o = k(t, r),
          decimalSeparator: s = ".",
          thousandsSeparator: a = "",
          onComplete: l,
          easing: u = j,
          formatter: c,
          updateInterval: d,
          onUpdate: p,
        }) => {
          let f = ((e, t) => {
              if ("number" == typeof e) return "number" == typeof t ? t : 2;
            })(r, n),
            h = (e) => {
              let n;
              if (0 === f && "number" == typeof r) n = r;
              else if ("number" == typeof r && "number" == typeof f) {
                let i = ((e) => ("function" == typeof e ? e : O[e]))(u);
                n = i(e < f ? e : f, t, r - t, f);
              } else n = t + e;
              if ("function" == typeof c) return c(n);
              if (0 === o) {
                let e = Math.round(n).toString();
                return V(e, a);
              }
              let [i, l] = n.toFixed(o).split(".");
              return `${V(i, a)}${s}${l}`;
            },
            { elapsedTime: m, reset: v } = (({
              isPlaying: e,
              duration: t,
              startAt: r = 0,
              updateInterval: n = 0,
              onComplete: o,
              onUpdate: s,
            }) => {
              let [a, l] = (0, i.useState)(r),
                u = (0, i.useRef)(-1e3 * r),
                c = (0, i.useRef)(null),
                d = (0, i.useRef)(null),
                p = (0, i.useRef)(null),
                f = (0, i.useRef)({
                  elapsedTimeRef: 0,
                  startAtRef: r,
                  durationRef: t,
                  updateIntervalRef: n,
                });
              f.current = x(g({}, f.current), {
                durationRef: t,
                updateIntervalRef: n,
              });
              let h = (e) => {
                  let t = e / 1e3;
                  if (null === d.current)
                    return (
                      (d.current = t),
                      void (c.current = requestAnimationFrame(h))
                    );
                  let {
                      durationRef: r,
                      elapsedTimeRef: n,
                      updateIntervalRef: i,
                      startAtRef: o,
                    } = f.current,
                    s = n + (t - d.current);
                  (d.current = t),
                    (f.current = x(g({}, f.current), { elapsedTimeRef: s }));
                  let a = "number" == typeof r && o + s >= r;
                  l(a ? r : o + (0 === i ? s : ((s / i) | 0) * i)),
                    a || (c.current = requestAnimationFrame(h));
                },
                m = () => {
                  c.current && cancelAnimationFrame(c.current),
                    p.current && clearTimeout(p.current),
                    (d.current = null);
                },
                v = (0, i.useCallback)(
                  (t) => {
                    let n = "number" == typeof t ? t : r;
                    m(),
                      (f.current = x(g({}, f.current), {
                        elapsedTimeRef: 0,
                        startAtRef: n,
                      })),
                      l(n),
                      e && (c.current = requestAnimationFrame(h));
                  },
                  [e, r]
                );
              return (
                w(() => {
                  if ((null == s || s(a), t && a >= t)) {
                    u.current += 1e3 * t;
                    let {
                      shouldRepeat: e = !1,
                      delay: r = 0,
                      newStartAt: n,
                    } = (null == o ? void 0 : o(u.current / 1e3)) || {};
                    e && (p.current = setTimeout(() => v(n), 1e3 * r));
                  }
                }, [a, t]),
                w(() => (e && (c.current = requestAnimationFrame(h)), m), [e]),
                { elapsedTime: a, reset: v }
              );
            })({
              isPlaying: e,
              duration: f,
              onComplete: l,
              updateInterval: d,
              onUpdate: "function" == typeof p ? (e) => p(h(e)) : void 0,
            });
          return { value: h(m), reset: v };
        };
      ((e) => {
        var t = e,
          { children: r } = t,
          n = ((e, t) => {
            var r = {};
            for (var n in e) c.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && u)
              for (var n of u(e))
                t.indexOf(n) < 0 && d.call(e, n) && (r[n] = e[n]);
            return r;
          })(t, ["children"]);
        let i = R(n);
        return "function" == typeof r ? r(i) : i.value;
      }).displayName = "CountUp";
      var I = r(13551),
        N = r(57969),
        S = "Proven Platform",
        P = function (e) {
          var t = e.data,
            r = (0, l.YD)({ threshold: 0.6 }),
            i = r.inView,
            u = r.ref,
            c = t || N.F,
            d = (0, a.m)(c.revenueToDate),
            p = (0, a.m)(c.agreementsToDate),
            f = R({ isCounting: i, end: parseFloat(d), duration: 3 }).value,
            h = R({ isCounting: i, end: parseFloat(p), duration: 3 }).value;
          return (0, n.jsx)("div", {
            className: "bg-gradient-to-b from-white to-primary",
            children: (0, n.jsxs)(I.Z, {
              title: S,
              className: "flex-col md:flex-row",
              children: [
                (0, n.jsxs)(I.Z.Content, {
                  className: "w-full md:p-8 lg:px-10 xl:px-20 flex-1",
                  children: [
                    (0, n.jsx)(I.Z.Header, {
                      className: "md:items-start",
                      children: (0, n.jsx)(s.Z, { tag: "h2", children: S }),
                    }),
                    (0, n.jsx)(I.Z.Description, {
                      className: "text-gray-700",
                      children:
                        "Enerflo powers the Solar Process for partners across the country & constantly invests in technology & infrastructure so you don\u2019t have to. The numbers speak for themselves.",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "md:pr-6 flex-1",
                  children: (0, n.jsxs)("figure", {
                    className: (0, o.Z)(
                      "flex flex-col space-y-4 divide-y-2 divide-gray-200 mt-6 p-4 bg-white rounded-xl shadow-lg",
                      "xs:divide-x-2 xs:divide-y-0 xs:space-y-0 xs:space-x-4 xs:flex-row xs:items-center",
                      "md:mt-0 lg:p-6"
                    ),
                    ref: u,
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-1 flex-col justify-center items-center p-4 lg:p-8 space-y-2 lg:min-w-[220px]",
                        children: [
                          (0, n.jsxs)("p", {
                            className: "text-4xl md:text-5xl lg:text-6xl",
                            children: ["$", f, (0, a.p)(d)],
                          }),
                          (0, n.jsx)("p", {
                            className: "text-sm md:text-base whitespace-nowrap",
                            children: "Solar Sold on Enerflo",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-1 flex-col justify-center items-center p-4 lg:p-8 space-y-2 lg:min-w-[220px]",
                        children: [
                          (0, n.jsxs)("p", {
                            className: "text-4xl md:text-5xl lg:text-6xl",
                            children: [h, (0, a.p)(p)],
                          }),
                          (0, n.jsx)("p", {
                            className: "text-sm md:text-base whitespace-nowrap",
                            children: "Agreements Signed",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
    },
    70131: function (e, t, r) {
      r.d(t, {
        YD: function () {
          return m;
        },
      });
      var n = r(67294);
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
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
      var s = new Map(),
        a = new WeakMap(),
        l = 0,
        u = void 0;
      function c(e) {
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
                ? (r = e.root)
                  ? (a.has(r) || ((l += 1), a.set(r, l.toString())), a.get(r))
                  : "0"
                : e[t])
            );
            var r;
          })
          .toString();
      }
      function d(e, t, r, n) {
        if (
          (void 0 === r && (r = {}),
          void 0 === n && (n = u),
          "undefined" === typeof window.IntersectionObserver && void 0 !== n)
        ) {
          var i = e.getBoundingClientRect();
          return (
            t(n, {
              isIntersecting: n,
              target: e,
              intersectionRatio:
                "number" === typeof r.threshold ? r.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i,
            }),
            function () {}
          );
        }
        var o = (function (e) {
            var t = c(e),
              r = s.get(t);
            if (!r) {
              var n,
                i = new Map(),
                o = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var r,
                      o =
                        t.isIntersecting &&
                        n.some(function (e) {
                          return t.intersectionRatio >= e;
                        });
                    e.trackVisibility &&
                      "undefined" === typeof t.isVisible &&
                      (t.isVisible = o),
                      null == (r = i.get(t.target)) ||
                        r.forEach(function (e) {
                          e(o, t);
                        });
                  });
                }, e);
              (n =
                o.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (r = { id: t, observer: o, elements: i }),
                s.set(t, r);
            }
            return r;
          })(r),
          a = o.id,
          l = o.observer,
          d = o.elements,
          p = d.get(e) || [];
        return (
          d.has(e) || d.set(e, p),
          p.push(t),
          l.observe(e),
          function () {
            p.splice(p.indexOf(t), 1),
              0 === p.length && (d.delete(e), l.unobserve(e)),
              0 === d.size && (l.disconnect(), s.delete(a));
          }
        );
      }
      var p = [
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
      function f(e) {
        return "function" !== typeof e.children;
      }
      var h = (function (e) {
        var t, r;
        function s(t) {
          var r;
          return (
            ((r = e.call(this, t) || this).node = null),
            (r._unobserveCb = null),
            (r.handleNode = function (e) {
              r.node &&
                (r.unobserve(),
                e ||
                  r.props.triggerOnce ||
                  r.props.skip ||
                  r.setState({
                    inView: !!r.props.initialInView,
                    entry: void 0,
                  })),
                (r.node = e || null),
                r.observeNode();
            }),
            (r.handleChange = function (e, t) {
              e && r.props.triggerOnce && r.unobserve(),
                f(r.props) || r.setState({ inView: e, entry: t }),
                r.props.onChange && r.props.onChange(e, t);
            }),
            (r.state = { inView: !!t.initialInView, entry: void 0 }),
            r
          );
        }
        (r = e),
          ((t = s).prototype = Object.create(r.prototype)),
          (t.prototype.constructor = t),
          o(t, r);
        var a = s.prototype;
        return (
          (a.componentDidUpdate = function (e) {
            (e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode());
          }),
          (a.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (a.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                t = e.threshold,
                r = e.root,
                n = e.rootMargin,
                i = e.trackVisibility,
                o = e.delay,
                s = e.fallbackInView;
              this._unobserveCb = d(
                this.node,
                this.handleChange,
                {
                  threshold: t,
                  root: r,
                  rootMargin: n,
                  trackVisibility: i,
                  delay: o,
                },
                s
              );
            }
          }),
          (a.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (a.render = function () {
            if (!f(this.props)) {
              var e = this.state,
                t = e.inView,
                r = e.entry;
              return this.props.children({
                inView: t,
                entry: r,
                ref: this.handleNode,
              });
            }
            var o = this.props,
              s = o.children,
              a = o.as,
              l = o.tag,
              u = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i;
              })(o, p);
            return n.createElement(
              a || l || "div",
              i({ ref: this.handleNode }, u),
              s
            );
          }),
          s
        );
      })(n.Component);
      function m(e) {
        var t = void 0 === e ? {} : e,
          r = t.threshold,
          i = t.delay,
          o = t.trackVisibility,
          s = t.rootMargin,
          a = t.root,
          l = t.triggerOnce,
          u = t.skip,
          c = t.initialInView,
          p = t.fallbackInView,
          f = n.useRef(),
          h = n.useState({ inView: !!c }),
          m = h[0],
          v = h[1],
          y = n.useCallback(
            function (e) {
              void 0 !== f.current && (f.current(), (f.current = void 0)),
                u ||
                  (e &&
                    (f.current = d(
                      e,
                      function (e, t) {
                        v({ inView: e, entry: t }),
                          t.isIntersecting &&
                            l &&
                            f.current &&
                            (f.current(), (f.current = void 0));
                      },
                      {
                        root: a,
                        rootMargin: s,
                        threshold: r,
                        trackVisibility: o,
                        delay: i,
                      },
                      p
                    )));
            },
            [Array.isArray(r) ? r.toString() : r, a, s, l, u, o, p, i]
          );
        (0, n.useEffect)(function () {
          f.current || !m.entry || l || u || v({ inView: !!c });
        });
        var b = [y, m.inView, m.entry];
        return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
      }
      (h.displayName = "InView"),
        (h.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
    },
  },
]);
//# sourceMappingURL=2108.608333e112073acf.js.map
