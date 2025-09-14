"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1286],
  {
    70131: function (e, t, n) {
      n.d(t, {
        YD: function () {
          return v;
        },
      });
      var r = n(67294);
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      function i(e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          i(e, t)
        );
      }
      var l = new Map(),
        a = new WeakMap(),
        u = 0,
        s = void 0;
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
                ? (n = e.root)
                  ? (a.has(n) || ((u += 1), a.set(n, u.toString())), a.get(n))
                  : "0"
                : e[t])
            );
            var n;
          })
          .toString();
      }
      function d(e, t, n, r) {
        if (
          (void 0 === n && (n = {}),
          void 0 === r && (r = s),
          "undefined" === typeof window.IntersectionObserver && void 0 !== r)
        ) {
          var o = e.getBoundingClientRect();
          return (
            t(r, {
              isIntersecting: r,
              target: e,
              intersectionRatio:
                "number" === typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: o,
              intersectionRect: o,
              rootBounds: o,
            }),
            function () {}
          );
        }
        var i = (function (e) {
            var t = c(e),
              n = l.get(t);
            if (!n) {
              var r,
                o = new Map(),
                i = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var n,
                      i =
                        t.isIntersecting &&
                        r.some(function (e) {
                          return t.intersectionRatio >= e;
                        });
                    e.trackVisibility &&
                      "undefined" === typeof t.isVisible &&
                      (t.isVisible = i),
                      null == (n = o.get(t.target)) ||
                        n.forEach(function (e) {
                          e(i, t);
                        });
                  });
                }, e);
              (r =
                i.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (n = { id: t, observer: i, elements: o }),
                l.set(t, n);
            }
            return n;
          })(n),
          a = i.id,
          u = i.observer,
          d = i.elements,
          f = d.get(e) || [];
        return (
          d.has(e) || d.set(e, f),
          f.push(t),
          u.observe(e),
          function () {
            f.splice(f.indexOf(t), 1),
              0 === f.length && (d.delete(e), u.unobserve(e)),
              0 === d.size && (u.disconnect(), l.delete(a));
          }
        );
      }
      var f = [
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
      var h = (function (e) {
        var t, n;
        function l(t) {
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
          ((t = l).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          i(t, n);
        var a = l.prototype;
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
                n = e.root,
                r = e.rootMargin,
                o = e.trackVisibility,
                i = e.delay,
                l = e.fallbackInView;
              this._unobserveCb = d(
                this.node,
                this.handleChange,
                {
                  threshold: t,
                  root: n,
                  rootMargin: r,
                  trackVisibility: o,
                  delay: i,
                },
                l
              );
            }
          }),
          (a.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (a.render = function () {
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
            var i = this.props,
              l = i.children,
              a = i.as,
              u = i.tag,
              s = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(i, f);
            return r.createElement(
              a || u || "div",
              o({ ref: this.handleNode }, s),
              l
            );
          }),
          l
        );
      })(r.Component);
      function v(e) {
        var t = void 0 === e ? {} : e,
          n = t.threshold,
          o = t.delay,
          i = t.trackVisibility,
          l = t.rootMargin,
          a = t.root,
          u = t.triggerOnce,
          s = t.skip,
          c = t.initialInView,
          f = t.fallbackInView,
          p = r.useRef(),
          h = r.useState({ inView: !!c }),
          v = h[0],
          g = h[1],
          m = r.useCallback(
            function (e) {
              void 0 !== p.current && (p.current(), (p.current = void 0)),
                s ||
                  (e &&
                    (p.current = d(
                      e,
                      function (e, t) {
                        g({ inView: e, entry: t }),
                          t.isIntersecting &&
                            u &&
                            p.current &&
                            (p.current(), (p.current = void 0));
                      },
                      {
                        root: a,
                        rootMargin: l,
                        threshold: n,
                        trackVisibility: i,
                        delay: o,
                      },
                      f
                    )));
            },
            [Array.isArray(n) ? n.toString() : n, a, l, u, s, i, f, o]
          );
        (0, r.useEffect)(function () {
          p.current || !v.entry || u || s || g({ inView: !!c });
        });
        var b = [m, v.inView, v.entry];
        return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
      }
      (h.displayName = "InView"),
        (h.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
    },
    25408: function (e, t, n) {
      n.d(t, {
        V: function () {
          return de;
        },
      });
      var r = n(67294),
        o = n(32984),
        i = n(12351),
        l = n(23784),
        a = n(61363),
        u = n(64103),
        s = n(19946),
        c = n(82180),
        d = n(46045),
        f = n(84575),
        p = n(73781),
        h = n(3855);
      var v = ((e) => (
        (e[(e.Forwards = 0)] = "Forwards"),
        (e[(e.Backwards = 1)] = "Backwards"),
        e
      ))(v || {});
      function g() {
        let e = (0, r.useRef)(0);
        return (
          (function (e, t, n) {
            let o = (0, h.E)(t);
            (0, r.useEffect)(() => {
              function t(e) {
                o.current(e);
              }
              return (
                window.addEventListener(e, t, n),
                () => window.removeEventListener(e, t, n)
              );
            }, [e, n]);
          })(
            "keydown",
            (t) => {
              "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
          ),
          e
        );
      }
      var m = n(14879),
        b = n(51074);
      function y(e, t, n, o) {
        let i = (0, h.E)(n);
        (0, r.useEffect)(() => {
          function n(e) {
            i.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, o),
            () => e.removeEventListener(t, n, o)
          );
        }, [e, t, o]);
      }
      var w = n(81021);
      function E(e, t) {
        let n = (0, r.useRef)([]),
          o = (0, p.z)(e);
        (0, r.useEffect)(() => {
          let e = [...n.current];
          for (let [r, i] of t.entries())
            if (n.current[r] !== i) {
              let r = o(t, e);
              return (n.current = t), r;
            }
        }, [o, ...t]);
      }
      var C = ((e) => (
        (e[(e.None = 1)] = "None"),
        (e[(e.InitialFocus = 2)] = "InitialFocus"),
        (e[(e.TabLock = 4)] = "TabLock"),
        (e[(e.FocusLock = 8)] = "FocusLock"),
        (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
        (e[(e.All = 30)] = "All"),
        e
      ))(C || {});
      let k = Object.assign(
        (0, i.yV)(function (e, t) {
          let n = (0, r.useRef)(null),
            a = (0, l.T)(n, t),
            { initialFocus: u, containers: s, features: h = 30, ...C } = e;
          (0, c.H)() || (h = 1);
          let k = (0, b.i)(n);
          !(function ({ ownerDocument: e }, t) {
            let n = (0, r.useRef)(null);
            y(
              null == e ? void 0 : e.defaultView,
              "focusout",
              (e) => {
                !t || n.current || (n.current = e.target);
              },
              !0
            ),
              E(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) && (0, f.C5)(n.current),
                  (n.current = null));
              }, [t]);
            let o = (0, r.useRef)(!1);
            (0, r.useEffect)(
              () => (
                (o.current = !1),
                () => {
                  (o.current = !0),
                    (0, w.Y)(() => {
                      !o.current || ((0, f.C5)(n.current), (n.current = null));
                    });
                }
              ),
              []
            );
          })({ ownerDocument: k }, Boolean(16 & h));
          let T = (function (
            { ownerDocument: e, container: t, initialFocus: n },
            o
          ) {
            let i = (0, r.useRef)(null),
              l = (0, m.t)();
            return (
              E(() => {
                if (!o) return;
                let r = t.current;
                !r ||
                  (0, w.Y)(() => {
                    if (!l.current) return;
                    let t = null == e ? void 0 : e.activeElement;
                    if (null != n && n.current) {
                      if ((null == n ? void 0 : n.current) === t)
                        return void (i.current = t);
                    } else if (r.contains(t)) return void (i.current = t);
                    null != n && n.current
                      ? (0, f.C5)(n.current)
                      : (0, f.jA)(r, f.TO.First) === f.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (i.current = null == e ? void 0 : e.activeElement);
                  });
              }, [o]),
              i
            );
          })(
            { ownerDocument: k, container: n, initialFocus: u },
            Boolean(2 & h)
          );
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: n,
              previousActiveElement: r,
            },
            o
          ) {
            let i = (0, m.t)();
            y(
              null == e ? void 0 : e.defaultView,
              "focus",
              (e) => {
                if (!o || !i.current) return;
                let l = new Set(null == n ? void 0 : n.current);
                l.add(t);
                let a = r.current;
                if (!a) return;
                let u = e.target;
                u && u instanceof HTMLElement
                  ? (function (e, t) {
                      var n;
                      for (let r of e)
                        if (null != (n = r.current) && n.contains(t)) return !0;
                      return !1;
                    })(l, u)
                    ? ((r.current = u), (0, f.C5)(u))
                    : (e.preventDefault(), e.stopPropagation(), (0, f.C5)(a))
                  : (0, f.C5)(r.current);
              },
              !0
            );
          })(
            {
              ownerDocument: k,
              container: n,
              containers: s,
              previousActiveElement: T,
            },
            Boolean(8 & h)
          );
          let P = g(),
            V = (0, p.z)(() => {
              let e = n.current;
              !e ||
                (0, o.E)(P.current, {
                  [v.Forwards]: () => (0, f.jA)(e, f.TO.First),
                  [v.Backwards]: () => (0, f.jA)(e, f.TO.Last),
                });
            }),
            R = { ref: a };
          return r.createElement(
            r.Fragment,
            null,
            Boolean(4 & h) &&
              r.createElement(d._, {
                as: "button",
                type: "button",
                onFocus: V,
                features: d.A.Focusable,
              }),
            (0, i.sY)({
              ourProps: R,
              theirProps: C,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            Boolean(4 & h) &&
              r.createElement(d._, {
                as: "button",
                type: "button",
                onFocus: V,
                features: d.A.Focusable,
              })
          );
        }),
        { features: C }
      );
      var T = n(15466),
        P = n(16723);
      let V = new Set(),
        R = new Map();
      function D(e) {
        e.setAttribute("aria-hidden", "true"), (e.inert = !0);
      }
      function O(e) {
        let t = R.get(e);
        !t ||
          (null === t["aria-hidden"]
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
          (e.inert = t.inert));
      }
      function A(e, t = !0) {
        (0, P.e)(() => {
          if (!t || !e.current) return;
          let n = e.current,
            r = (0, T.r)(n);
          if (r) {
            V.add(n);
            for (let e of R.keys()) e.contains(n) && (O(e), R.delete(e));
            return (
              r.querySelectorAll("body > *").forEach((e) => {
                if (e instanceof HTMLElement) {
                  for (let t of V) if (e.contains(t)) return;
                  1 === V.size &&
                    (R.set(e, {
                      "aria-hidden": e.getAttribute("aria-hidden"),
                      inert: e.inert,
                    }),
                    D(e));
                }
              }),
              () => {
                if ((V.delete(n), V.size > 0))
                  r.querySelectorAll("body > *").forEach((e) => {
                    if (e instanceof HTMLElement && !R.has(e)) {
                      for (let t of V) if (e.contains(t)) return;
                      R.set(e, {
                        "aria-hidden": e.getAttribute("aria-hidden"),
                        inert: e.inert,
                      }),
                        D(e);
                    }
                  });
                else for (let e of R.keys()) O(e), R.delete(e);
              }
            );
          }
        }, [t]);
      }
      var M = n(73935);
      let S = (0, r.createContext)(!1);
      function F() {
        return (0, r.useContext)(S);
      }
      function I(e) {
        return r.createElement(S.Provider, { value: e.force }, e.children);
      }
      var x = n(43393);
      let Y = r.Fragment,
        _ = (0, i.yV)(function (e, t) {
          let n = e,
            o = (0, r.useRef)(null),
            a = (0, l.T)(
              (0, l.h)((e) => {
                o.current = e;
              }),
              t
            ),
            u = (0, b.i)(o),
            s = (function (e) {
              let t = F(),
                n = (0, r.useContext)(j),
                o = (0, b.i)(e),
                [i, l] = (0, r.useState)(() => {
                  if ((!t && null !== n) || x.s) return null;
                  let e =
                    null == o
                      ? void 0
                      : o.getElementById("headlessui-portal-root");
                  if (e) return e;
                  if (null === o) return null;
                  let r = o.createElement("div");
                  return (
                    r.setAttribute("id", "headlessui-portal-root"),
                    o.body.appendChild(r)
                  );
                });
              return (
                (0, r.useEffect)(() => {
                  null !== i &&
                    ((null != o && o.body.contains(i)) ||
                      null == o ||
                      o.body.appendChild(i));
                }, [i, o]),
                (0, r.useEffect)(() => {
                  t || (null !== n && l(n.current));
                }, [n, l, t]),
                i
              );
            })(o),
            [d] = (0, r.useState)(() => {
              var e;
              return x.s
                ? null
                : null != (e = null == u ? void 0 : u.createElement("div"))
                ? e
                : null;
            }),
            f = (0, c.H)(),
            p = (0, r.useRef)(!1);
          return (
            (0, P.e)(() => {
              if (((p.current = !1), s && d))
                return (
                  s.contains(d) ||
                    (d.setAttribute("data-headlessui-portal", ""),
                    s.appendChild(d)),
                  () => {
                    (p.current = !0),
                      (0, w.Y)(() => {
                        var e;
                        !p.current ||
                          !s ||
                          !d ||
                          (s.removeChild(d),
                          s.childNodes.length <= 0 &&
                            (null == (e = s.parentElement) ||
                              e.removeChild(s)));
                      });
                  }
                );
            }, [s, d]),
            f && s && d
              ? (0, M.createPortal)(
                  (0, i.sY)({
                    ourProps: { ref: a },
                    theirProps: n,
                    defaultTag: Y,
                    name: "Portal",
                  }),
                  d
                )
              : null
          );
        }),
        N = r.Fragment,
        j = (0, r.createContext)(null),
        B = (0, i.yV)(function (e, t) {
          let { target: n, ...o } = e,
            a = { ref: (0, l.T)(t) };
          return r.createElement(
            j.Provider,
            { value: n },
            (0, i.sY)({
              ourProps: a,
              theirProps: o,
              defaultTag: N,
              name: "Popover.Group",
            })
          );
        }),
        L = Object.assign(_, { Group: B }),
        z = (0, r.createContext)(null);
      function H() {
        let e = (0, r.useContext)(z);
        if (null === e) {
          let e = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, H), e);
        }
        return e;
      }
      function $() {
        let [e, t] = (0, r.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, r.useMemo)(
            () =>
              function (e) {
                let n = (0, p.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            r = n.indexOf(e);
                          return -1 !== r && n.splice(r, 1), n;
                        })
                    )
                  ),
                  o = (0, r.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [n, e.slot, e.name, e.props]
                  );
                return r.createElement(z.Provider, { value: o }, e.children);
              },
            [t]
          ),
        ];
      }
      let W = (0, i.yV)(function (e, t) {
        let n = H(),
          r = `headlessui-description-${(0, s.M)()}`,
          o = (0, l.T)(t);
        (0, P.e)(() => n.register(r), [r, n.register]);
        let a = e,
          u = { ref: o, ...n.props, id: r };
        return (0,
        i.sY)({ ourProps: u, theirProps: a, slot: n.slot || {}, defaultTag: "p", name: n.name || "Description" });
      });
      var U = n(16567);
      let q = (0, r.createContext)(() => {});
      q.displayName = "StackContext";
      var G = ((e) => (
        (e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e
      ))(G || {});
      function Z({
        children: e,
        onUpdate: t,
        type: n,
        element: o,
        enabled: i,
      }) {
        let l = (0, r.useContext)(q),
          a = (0, p.z)((...e) => {
            null == t || t(...e), l(...e);
          });
        return (
          (0, P.e)(() => {
            let e = void 0 === i || !0 === i;
            return (
              e && a(0, n, o),
              () => {
                e && a(1, n, o);
              }
            );
          }, [a, n, o, i]),
          r.createElement(q.Provider, { value: a }, e)
        );
      }
      var J = n(39650),
        K = n(9362);
      var Q = ((e) => (
          (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
        ))(Q || {}),
        X = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(X || {});
      let ee = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        te = (0, r.createContext)(null);
      function ne(e) {
        let t = (0, r.useContext)(te);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Dialog /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ne), t);
        }
        return t;
      }
      function re(e, t) {
        (0, r.useEffect)(() => {
          var n;
          if (!t || !e) return;
          let r = (0, K.k)();
          function o(e, t, n) {
            let o = e.style.getPropertyValue(t);
            return (
              Object.assign(e.style, { [t]: n }),
              r.add(() => {
                Object.assign(e.style, { [t]: o });
              })
            );
          }
          let i = e.documentElement,
            l =
              (null != (n = e.defaultView) ? n : window).innerWidth -
              i.clientWidth;
          if ((o(i, "overflow", "hidden"), l > 0)) {
            o(i, "paddingRight", `${l - (i.clientWidth - i.offsetWidth)}px`);
          }
          if (
            /iPhone/gi.test(window.navigator.platform) ||
            (/Mac/gi.test(window.navigator.platform) &&
              window.navigator.maxTouchPoints > 0)
          ) {
            let e = window.pageYOffset;
            o(i, "position", "fixed"),
              o(i, "marginTop", `-${e}px`),
              o(i, "width", "100%"),
              r.add(() => window.scrollTo(0, e));
          }
          return r.dispose;
        }, [e, t]);
      }
      function oe(e, t) {
        return (0, o.E)(t.type, ee, e, t);
      }
      te.displayName = "DialogContext";
      let ie = i.AN.RenderStrategy | i.AN.Static,
        le = (0, i.yV)(function (e, t) {
          let {
              open: n,
              onClose: u,
              initialFocus: f,
              __demoMode: h = !1,
              ...v
            } = e,
            [g, m] = (0, r.useState)(0),
            w = (0, U.oJ)();
          void 0 === n &&
            null !== w &&
            (n = (0, o.E)(w, { [U.ZM.Open]: !0, [U.ZM.Closed]: !1 }));
          let E = (0, r.useRef)(new Set()),
            C = (0, r.useRef)(null),
            T = (0, l.T)(C, t),
            P = (0, r.useRef)(null),
            V = (0, b.i)(C),
            R = e.hasOwnProperty("open") || null !== w,
            D = e.hasOwnProperty("onClose");
          if (!R && !D)
            throw new Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!R)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!D)
            throw new Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if ("boolean" != typeof n)
            throw new Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`
            );
          if ("function" != typeof u)
            throw new Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${u}`
            );
          let O = n ? 0 : 1,
            [M, S] = (0, r.useReducer)(oe, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, r.createRef)(),
            }),
            F = (0, p.z)(() => u(!1)),
            x = (0, p.z)((e) => S({ type: 0, id: e })),
            Y = !!(0, c.H)() && !h && 0 === O,
            _ = g > 1,
            N = null !== (0, r.useContext)(te),
            j = _ ? "parent" : "leaf";
          A(C, !!_ && Y),
            (0, J.O)(
              () => {
                var e, t;
                return [
                  ...Array.from(
                    null !=
                      (e =
                        null == V
                          ? void 0
                          : V.querySelectorAll(
                              "body > *, [data-headlessui-portal]"
                            ))
                      ? e
                      : []
                  ).filter(
                    (e) =>
                      !(
                        !(e instanceof HTMLElement) ||
                        e.contains(P.current) ||
                        (M.panelRef.current && e.contains(M.panelRef.current))
                      )
                  ),
                  null != (t = M.panelRef.current) ? t : C.current,
                ];
              },
              F,
              Y && !_
            ),
            y(null == V ? void 0 : V.defaultView, "keydown", (e) => {
              e.defaultPrevented ||
                (e.key === a.R.Escape &&
                  0 === O &&
                  (_ || (e.preventDefault(), e.stopPropagation(), F())));
            }),
            re(V, 0 === O && !N),
            (0, r.useEffect)(() => {
              if (0 !== O || !C.current) return;
              let e = new IntersectionObserver((e) => {
                for (let t of e)
                  0 === t.boundingClientRect.x &&
                    0 === t.boundingClientRect.y &&
                    0 === t.boundingClientRect.width &&
                    0 === t.boundingClientRect.height &&
                    F();
              });
              return e.observe(C.current), () => e.disconnect();
            }, [O, C, F]);
          let [B, z] = $(),
            H = `headlessui-dialog-${(0, s.M)()}`,
            W = (0, r.useMemo)(
              () => [{ dialogState: O, close: F, setTitleId: x }, M],
              [O, M, F, x]
            ),
            q = (0, r.useMemo)(() => ({ open: 0 === O }), [O]),
            K = {
              ref: T,
              id: H,
              role: "dialog",
              "aria-modal": 0 === O || void 0,
              "aria-labelledby": M.titleId,
              "aria-describedby": B,
            };
          return r.createElement(
            Z,
            {
              type: "Dialog",
              enabled: 0 === O,
              element: C,
              onUpdate: (0, p.z)((e, t, n) => {
                "Dialog" === t &&
                  (0, o.E)(e, {
                    [G.Add]() {
                      E.current.add(n), m((e) => e + 1);
                    },
                    [G.Remove]() {
                      E.current.add(n), m((e) => e - 1);
                    },
                  });
              }),
            },
            r.createElement(
              I,
              { force: !0 },
              r.createElement(
                L,
                null,
                r.createElement(
                  te.Provider,
                  { value: W },
                  r.createElement(
                    L.Group,
                    { target: C },
                    r.createElement(
                      I,
                      { force: !1 },
                      r.createElement(
                        z,
                        { slot: q, name: "Dialog.Description" },
                        r.createElement(
                          k,
                          {
                            initialFocus: f,
                            containers: E,
                            features: Y
                              ? (0, o.E)(j, {
                                  parent: k.features.RestoreFocus,
                                  leaf: k.features.All & ~k.features.FocusLock,
                                })
                              : k.features.None,
                          },
                          (0, i.sY)({
                            ourProps: K,
                            theirProps: v,
                            slot: q,
                            defaultTag: "div",
                            features: ie,
                            visible: 0 === O,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            r.createElement(d._, { features: d.A.Hidden, ref: P })
          );
        }),
        ae = (0, i.yV)(function (e, t) {
          let [{ dialogState: n, close: o }] = ne("Dialog.Overlay"),
            a = (0, l.T)(t),
            c = `headlessui-dialog-overlay-${(0, s.M)()}`,
            d = (0, p.z)((e) => {
              if (e.target === e.currentTarget) {
                if ((0, u.P)(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), e.stopPropagation(), o();
              }
            }),
            f = (0, r.useMemo)(() => ({ open: 0 === n }), [n]);
          return (0,
          i.sY)({ ourProps: { ref: a, id: c, "aria-hidden": !0, onClick: d }, theirProps: e, slot: f, defaultTag: "div", name: "Dialog.Overlay" });
        }),
        ue = (0, i.yV)(function (e, t) {
          let [{ dialogState: n }, o] = ne("Dialog.Backdrop"),
            a = (0, l.T)(t),
            u = `headlessui-dialog-backdrop-${(0, s.M)()}`;
          (0, r.useEffect)(() => {
            if (null === o.panelRef.current)
              throw new Error(
                "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
              );
          }, [o.panelRef]);
          let c = (0, r.useMemo)(() => ({ open: 0 === n }), [n]);
          return r.createElement(
            I,
            { force: !0 },
            r.createElement(
              L,
              null,
              (0, i.sY)({
                ourProps: { ref: a, id: u, "aria-hidden": !0 },
                theirProps: e,
                slot: c,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            )
          );
        }),
        se = (0, i.yV)(function (e, t) {
          let [{ dialogState: n }, o] = ne("Dialog.Panel"),
            a = (0, l.T)(t, o.panelRef),
            u = `headlessui-dialog-panel-${(0, s.M)()}`,
            c = (0, r.useMemo)(() => ({ open: 0 === n }), [n]),
            d = (0, p.z)((e) => {
              e.stopPropagation();
            });
          return (0,
          i.sY)({ ourProps: { ref: a, id: u, onClick: d }, theirProps: e, slot: c, defaultTag: "div", name: "Dialog.Panel" });
        }),
        ce = (0, i.yV)(function (e, t) {
          let [{ dialogState: n, setTitleId: o }] = ne("Dialog.Title"),
            a = `headlessui-dialog-title-${(0, s.M)()}`,
            u = (0, l.T)(t);
          (0, r.useEffect)(() => (o(a), () => o(null)), [a, o]);
          let c = (0, r.useMemo)(() => ({ open: 0 === n }), [n]);
          return (0,
          i.sY)({ ourProps: { ref: u, id: a }, theirProps: e, slot: c, defaultTag: "h2", name: "Dialog.Title" });
        }),
        de = Object.assign(le, {
          Backdrop: ue,
          Panel: se,
          Overlay: ae,
          Title: ce,
          Description: W,
        });
    },
    46045: function (e, t, n) {
      n.d(t, {
        A: function () {
          return i;
        },
        _: function () {
          return l;
        },
      });
      var r = n(12351);
      var o,
        i =
          (((o = i || {})[(o.None = 1)] = "None"),
          (o[(o.Focusable = 2)] = "Focusable"),
          (o[(o.Hidden = 4)] = "Hidden"),
          o);
      let l = (0, r.yV)(function (e, t) {
        let { features: n = 1, ...o } = e,
          i = {
            ref: t,
            "aria-hidden": 2 === (2 & n) || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...(4 === (4 & n) && 2 !== (2 & n) && { display: "none" }),
            },
          };
        return (0,
        r.sY)({ ourProps: i, theirProps: o, slot: {}, defaultTag: "div", name: "Hidden" });
      });
    },
  },
]);
//# sourceMappingURL=1286-e3bea911b3dbf4cf.js.map
