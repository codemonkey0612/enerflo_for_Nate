(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [917],
  {
    70625: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/enerflo-solar-project-management-mobile.7d0cc3bb.png",
        height: 948,
        width: 1044,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA1ElEQVR42k2MPU7DQBCF9wJwBe7AUTgFDRYnoKWykJBAaKHIKWgQNUEEiYgCKABFKOTH3tg72bG9M7uabFzlk957zaenttzowd7l1e35x9f3hYUmt4A5uDaHdZOrnoPD/dTXb+P3O+KowXlNFLQn1qowdjBfmJ/J32xZAxpsyEzrynyaqSksGMXMwwkshGMQ4iAhxLQsFLhf1TGN/20pUUSSnIQgDaLEJCI6UUDt0e9qfnb/+DAsS/OaHl6w9aPOUx+1w/HT8+i08+GkqDCrrMtWtcs2pOWudKoLDSgAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 7,
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
        a = n(86010),
        o = (n(67294), n(70131)),
        s = n(63801),
        c = n(47143),
        l = n.n(c);
      !(function (e) {
        (e.PRIMARY = "primary"),
          (e.GREEN = "green"),
          (e.TRANSPARENT = "transparent");
      })(r || (r = {}));
      t.Z = function (e) {
        var t = e.className,
          n = e.delay,
          c = e.iconClassName,
          d = e.animate,
          h = e.variant,
          u = void 0 === h ? r.GREEN : h,
          p = e.loaded,
          m = (0, o.YD)({ threshold: 0.6, triggerOnce: !0 }),
          f = m.inView,
          g = m.ref;
        return (0, i.jsx)("div", {
          className: t,
          ref: g,
          children: (0, i.jsx)("div", {
            className: (0, a.Z)(
              l().animatedCheck,
              n && l()["delay".concat(n)],
              (void 0 === d ? f && (void 0 === p || p) : d) && l().animate,
              u && l()[u]
            ),
            children: (0, i.jsx)(s.nQG, { className: c }),
          }),
        });
      };
    },
    917: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n(85893),
        i = n(67294),
        a = n(22472),
        o = n(88104),
        s = n(25675),
        c = n.n(s),
        l = n(70625),
        d = {
          src: "/images/enerflo-solar-project-management.webp",
          height: 771,
          width: 1795,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AWcAqwEupDMCalsh/ZeboG5XVlUtCQcF+Ozz/B/v+QGtAe3z8dIKBQgX/P/9+v36/BUFBggEAAD+s+Dt+lD+AAL3Ae7381sLBAcLAwAB/PDx8RgLCwwG+/z+4ePv+XX/AQL41ccwJF+KYekAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        },
        h = n(13551),
        u = "Manage More Projects",
        p =
          "Enerflo Project Tracker, built exclusively for solar, automates solar project management, giving everyone involved the visibility they need to follow their installation progress, delays, commission data and more.",
        m = function () {
          var e = (0, i.useState)(!1),
            t = e[0],
            n = e[1];
          return (0, r.jsx)("div", {
            className: "bg-gradient-to-tr from-navy-dark to-primary",
            children: (0, r.jsxs)(h.Z, {
              title: u,
              className: "flex-col text-white md:space-x-0",
              children: [
                (0, r.jsxs)(h.Z.Content, {
                  className:
                    "md:text-center w-full px-6 md:w-2/3 xl:w-3/5 md:p-8 xl:px-14",
                  children: [
                    (0, r.jsx)(h.Z.Header, {
                      children: (0, r.jsx)(o.Z, { tag: "h2", children: u }),
                    }),
                    (0, r.jsx)(h.Z.Description, {
                      className: "text-gray-200 text-center",
                      children:
                        "The Enerflo Install Tracker has your back, giving everyone involved the visibility they need to follow their installation progress, access data, build reports and more. Better yet, the data can be powered by your favorite CRM, or simply use our tools out of the box.",
                    }),
                    (0, r.jsx)(h.Z.Action, {
                      className: "btn-white",
                      href: "/features/project-management",
                      children: "Manage Like a Boss",
                    }),
                  ],
                }),
                (0, r.jsxs)("figure", {
                  className: "w-full relative",
                  children: [
                    (0, r.jsx)("div", {
                      className: "hidden md:block",
                      children: (0, r.jsx)(c(), {
                        src: d,
                        alt: p,
                        quality: 100,
                        layout: "responsive",
                        placeholder: "blur",
                        className: "crispImage",
                        onLoadingComplete: function () {
                          return n(!0);
                        },
                        lazyBoundary: "400px",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "ml-4 sm:ml-14 md:hidden",
                      children: (0, r.jsx)(c(), {
                        src: l.Z,
                        alt: p,
                        quality: 100,
                        layout: "responsive",
                        className: "crispImage",
                        lazyBoundary: "400px",
                      }),
                    }),
                    (0, r.jsx)(a.Z, {
                      className: "absolute top-[5%] left-[15%] md:left-[28%]",
                      iconClassName: "h-10 w-10 sm:h-14 sm:w-14",
                      loaded: t,
                    }),
                    (0, r.jsx)(a.Z, {
                      className:
                        "absolute top-[15%] left-[25%] md:left-[38%] hidden sm:block",
                      delay: 1,
                      iconClassName: "h-8 w-8",
                      loaded: t,
                    }),
                    (0, r.jsx)(a.Z, {
                      className: "absolute top-[12%] right-[10%]",
                      delay: 2,
                      iconClassName: "h-4 w-4 sm:h-5 sm:w-5",
                      loaded: t,
                    }),
                    (0, r.jsx)(a.Z, {
                      className:
                        "absolute bottom-[10%] lg:bottom-[6%] right-[40%] md:right-[30%]",
                      delay: 3,
                      iconClassName: "h-6 w-6 sm:h-8 sm:w-8",
                      loaded: t,
                    }),
                    (0, r.jsx)(a.Z, {
                      className: "absolute bottom-0 right-[25%]",
                      delay: 4,
                      iconClassName: "h-3 w-3 sm:h-4 sm:w-4",
                      loaded: t,
                    }),
                  ],
                }),
              ],
            }),
          });
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
    70131: function (e, t, n) {
      "use strict";
      n.d(t, {
        YD: function () {
          return f;
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
      function a(e, t) {
        return (
          (a =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          a(e, t)
        );
      }
      var o = new Map(),
        s = new WeakMap(),
        c = 0,
        l = void 0;
      function d(e) {
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
                  ? (s.has(n) || ((c += 1), s.set(n, c.toString())), s.get(n))
                  : "0"
                : e[t])
            );
            var n;
          })
          .toString();
      }
      function h(e, t, n, r) {
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
        var a = (function (e) {
            var t = d(e),
              n = o.get(t);
            if (!n) {
              var r,
                i = new Map(),
                a = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var n,
                      a =
                        t.isIntersecting &&
                        r.some(function (e) {
                          return t.intersectionRatio >= e;
                        });
                    e.trackVisibility &&
                      "undefined" === typeof t.isVisible &&
                      (t.isVisible = a),
                      null == (n = i.get(t.target)) ||
                        n.forEach(function (e) {
                          e(a, t);
                        });
                  });
                }, e);
              (r =
                a.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (n = { id: t, observer: a, elements: i }),
                o.set(t, n);
            }
            return n;
          })(n),
          s = a.id,
          c = a.observer,
          h = a.elements,
          u = h.get(e) || [];
        return (
          h.has(e) || h.set(e, u),
          u.push(t),
          c.observe(e),
          function () {
            u.splice(u.indexOf(t), 1),
              0 === u.length && (h.delete(e), c.unobserve(e)),
              0 === h.size && (c.disconnect(), o.delete(s));
          }
        );
      }
      var u = [
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
      function p(e) {
        return "function" !== typeof e.children;
      }
      var m = (function (e) {
        var t, n;
        function o(t) {
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
                p(n.props) || n.setState({ inView: e, entry: t }),
                n.props.onChange && n.props.onChange(e, t);
            }),
            (n.state = { inView: !!t.initialInView, entry: void 0 }),
            n
          );
        }
        (n = e),
          ((t = o).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          a(t, n);
        var s = o.prototype;
        return (
          (s.componentDidUpdate = function (e) {
            (e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode());
          }),
          (s.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (s.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                t = e.threshold,
                n = e.root,
                r = e.rootMargin,
                i = e.trackVisibility,
                a = e.delay,
                o = e.fallbackInView;
              this._unobserveCb = h(
                this.node,
                this.handleChange,
                {
                  threshold: t,
                  root: n,
                  rootMargin: r,
                  trackVisibility: i,
                  delay: a,
                },
                o
              );
            }
          }),
          (s.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (s.render = function () {
            if (!p(this.props)) {
              var e = this.state,
                t = e.inView,
                n = e.entry;
              return this.props.children({
                inView: t,
                entry: n,
                ref: this.handleNode,
              });
            }
            var a = this.props,
              o = a.children,
              s = a.as,
              c = a.tag,
              l = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  i = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
              })(a, u);
            return r.createElement(
              s || c || "div",
              i({ ref: this.handleNode }, l),
              o
            );
          }),
          o
        );
      })(r.Component);
      function f(e) {
        var t = void 0 === e ? {} : e,
          n = t.threshold,
          i = t.delay,
          a = t.trackVisibility,
          o = t.rootMargin,
          s = t.root,
          c = t.triggerOnce,
          l = t.skip,
          d = t.initialInView,
          u = t.fallbackInView,
          p = r.useRef(),
          m = r.useState({ inView: !!d }),
          f = m[0],
          g = m[1],
          y = r.useCallback(
            function (e) {
              void 0 !== p.current && (p.current(), (p.current = void 0)),
                l ||
                  (e &&
                    (p.current = h(
                      e,
                      function (e, t) {
                        g({ inView: e, entry: t }),
                          t.isIntersecting &&
                            c &&
                            p.current &&
                            (p.current(), (p.current = void 0));
                      },
                      {
                        root: s,
                        rootMargin: o,
                        threshold: n,
                        trackVisibility: a,
                        delay: i,
                      },
                      u
                    )));
            },
            [Array.isArray(n) ? n.toString() : n, s, o, c, l, a, u, i]
          );
        (0, r.useEffect)(function () {
          p.current || !f.entry || c || l || g({ inView: !!d });
        });
        var b = [y, f.inView, f.entry];
        return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
      }
      (m.displayName = "InView"),
        (m.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
    },
  },
]);
//# sourceMappingURL=917.03422fd4406740e8.js.map
