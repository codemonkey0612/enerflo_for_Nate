(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9656, 4828],
  {
    65361: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/demo",
        function () {
          return r(42886);
        },
      ]);
    },
    33042: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = r(85893),
        o = (r(67294), r(88104)),
        i = r(13551),
        l = r(25675),
        a = r.n(l),
        u = {
          src: "/images/nusun-solar-logo.webp",
          height: 150,
          width: 300,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAXUlEQVR42mNguPxXgPH0F14GnODir0SG6//9eCauUxVjYDCS0jbSkJCQ0JeSklIXEhKyBikIZLj6P5l77h5VEQYGA3EtIy2gAh1xMTFNAQEBMwagFbwM539I47IAALsvF3QRIskpAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        s = {
          src: "/images/ambia-solar-logo.webp",
          height: 40,
          width: 179,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAJ0lEQVR42mNgkGRQZ5BgUGMwA9KKDDIMDCoMWgyqQGzOYMCgxaAKACWpAmx3P9U/AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        },
        c = {
          src: "/images/empwr-solar-logo.webp",
          height: 40,
          width: 179,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/AaWBF6MU/+lcv+Rc/R81PgP++/oA/fz8/QUGBgPz8/SwAbZ2DaMI4vNcqNQw/f4mGwPy7O0ACwYD/e4FDAPb5umwjUsih7d7HMsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        },
        d = {
          src: "/images/sunder-energy-logo.webp",
          height: 40,
          width: 179,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAALklEQVR42mNgYBBWB2JNILYCYksg9gJiNyD2AWIHBignBqrQHIhNoLQZA4OwBgCbEQTZWRTrHAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 2,
        },
        f = {
          src: "/_next/static/media/vivint-logo.9da0d8ca.svg",
          height: 40,
          width: 179,
        },
        p = r(93972),
        g = r.n(p),
        h = "We Proudly Serve Some Of The Biggest Names In Solar",
        m = function () {
          return (0, n.jsx)("div", {
            className: "bg-gray-100",
            children: (0, n.jsx)(i.Z, {
              title: h,
              children: (0, n.jsxs)(i.Z.Content, {
                children: [
                  (0, n.jsx)(i.Z.Header, {
                    children: (0, n.jsx)(o.Z, { tag: "h5", children: h }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex justify-center sm:justify-between flex-wrap md:flex-nowrap -mx-2 -mt-2",
                    children: [
                      (0, n.jsx)("div", {
                        className: g().logoItem,
                        children: (0, n.jsx)(a(), {
                          src: f,
                          alt: "Logo - Vivint Solar",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: g().logoItem,
                        children: (0, n.jsx)(a(), {
                          src: d,
                          alt: "Logo - Sunder Energy",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: g().logoItem,
                        children: (0, n.jsx)(a(), {
                          src: c,
                          alt: "Logo - EMPWR Solar",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: g().logoItem,
                        children: (0, n.jsx)(a(), {
                          src: u,
                          alt: "Logo - NuSun Solar",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: g().logoItem,
                        children: (0, n.jsx)(a(), {
                          src: s,
                          alt: "Logo - Ambia Solar",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    13551: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return c;
        },
      });
      var n = r(85893),
        o = (r(67294), r(86010)),
        i = r(21804),
        l = r.n(i),
        a = r(41664),
        u = r.n(a),
        s = function (e) {
          var t = e.children,
            r = e.className;
          return (0, n.jsx)("div", {
            className: (0, o.Z)("heroInner", r),
            children: t,
          });
        },
        c = function (e) {
          var t = e.title,
            r = e.children,
            i = e.className,
            a = void 0 === i ? "items-center" : i;
          return (0, n.jsx)("section", {
            id: l()(t),
            className: (0, o.Z)("heroSection", a),
            children: r,
          });
        },
        d = function (e) {
          var t = e.title,
            r = e.children,
            o = e.className;
          return (0, n.jsx)(c, {
            title: t,
            children: (0, n.jsx)(s, { className: o, children: r }),
          });
        };
      (d.Header = function (e) {
        var t = e.children,
          r = e.className;
        return (0, n.jsx)("div", {
          className: (0, o.Z)("heroHeader", r),
          children: t,
        });
      }),
        (d.Inner = s),
        (d.Content = function (e) {
          var t = e.children,
            r = e.className;
          return (0, n.jsx)("div", {
            className: (0, o.Z)("heroContent", r),
            children: t,
          });
        }),
        (d.Description = function (e) {
          var t = e.children,
            r = e.className,
            i = void 0 === r ? "text-gray-500" : r;
          return (0, n.jsx)("p", {
            className: (0, o.Z)("heroDescription", i),
            children: t,
          });
        }),
        (d.Action = function (e) {
          var t = e.children,
            r = e.className,
            i = e.href;
          return (0, n.jsx)(u(), {
            href: i,
            children: (0, n.jsx)("a", {
              className: (0, o.Z)("heroAction btn", r),
              children: t,
            }),
          });
        }),
        (t.Z = d);
    },
    42886: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return c;
          },
        });
      var n = r(85893),
        o = r(33042),
        i = r(8844),
        l = r(5152),
        a = r.n(l),
        u = r(53512),
        s = a()(
          function () {
            return r.e(27).then(r.bind(r, 30027));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [30027];
              },
            },
          }
        ),
        c = !0;
      t.default = function (e) {
        var t = e.testimonials;
        return (0, n.jsxs)(u.Z, {
          title: "Enerflo Solar Software Platform | Discover Enerflo!",
          description:
            "We CAN\u2019T WAIT to show you how Enerflo works, how it\u2019s different from other Solar Platforms and how it can literally transform your solar sales and operations.",
          children: [
            (0, n.jsx)(i.default, { scheme: i.DemoSchemes.NAVY }),
            (0, n.jsx)(s, { testimonials: t }),
            (0, n.jsx)(o.Z, {}),
          ],
        });
      };
    },
    93972: function (e) {
      e.exports = { logoItem: "biggest-names-in-solar_logoItem__SpD5O" };
    },
    25408: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return de;
        },
      });
      var n = r(67294),
        o = r(32984),
        i = r(12351),
        l = r(23784),
        a = r(61363),
        u = r(64103),
        s = r(19946),
        c = r(82180),
        d = r(46045),
        f = r(84575),
        p = r(73781),
        g = r(3855);
      var h = ((e) => (
        (e[(e.Forwards = 0)] = "Forwards"),
        (e[(e.Backwards = 1)] = "Backwards"),
        e
      ))(h || {});
      function m() {
        let e = (0, n.useRef)(0);
        return (
          (function (e, t, r) {
            let o = (0, g.E)(t);
            (0, n.useEffect)(() => {
              function t(e) {
                o.current(e);
              }
              return (
                window.addEventListener(e, t, r),
                () => window.removeEventListener(e, t, r)
              );
            }, [e, r]);
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
      var A = r(14879),
        v = r(51074);
      function w(e, t, r, o) {
        let i = (0, g.E)(r);
        (0, n.useEffect)(() => {
          function r(e) {
            i.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, r, o),
            () => e.removeEventListener(t, r, o)
          );
        }, [e, t, o]);
      }
      var E = r(81021);
      function b(e, t) {
        let r = (0, n.useRef)([]),
          o = (0, p.z)(e);
        (0, n.useEffect)(() => {
          let e = [...r.current];
          for (let [n, i] of t.entries())
            if (r.current[n] !== i) {
              let n = o(t, e);
              return (r.current = t), n;
            }
        }, [o, ...t]);
      }
      var y = ((e) => (
        (e[(e.None = 1)] = "None"),
        (e[(e.InitialFocus = 2)] = "InitialFocus"),
        (e[(e.TabLock = 4)] = "TabLock"),
        (e[(e.FocusLock = 8)] = "FocusLock"),
        (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
        (e[(e.All = 30)] = "All"),
        e
      ))(y || {});
      let C = Object.assign(
        (0, i.yV)(function (e, t) {
          let r = (0, n.useRef)(null),
            a = (0, l.T)(r, t),
            { initialFocus: u, containers: s, features: g = 30, ...y } = e;
          (0, c.H)() || (g = 1);
          let C = (0, v.i)(r);
          !(function ({ ownerDocument: e }, t) {
            let r = (0, n.useRef)(null);
            w(
              null == e ? void 0 : e.defaultView,
              "focusout",
              (e) => {
                !t || r.current || (r.current = e.target);
              },
              !0
            ),
              b(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) && (0, f.C5)(r.current),
                  (r.current = null));
              }, [t]);
            let o = (0, n.useRef)(!1);
            (0, n.useEffect)(
              () => (
                (o.current = !1),
                () => {
                  (o.current = !0),
                    (0, E.Y)(() => {
                      !o.current || ((0, f.C5)(r.current), (r.current = null));
                    });
                }
              ),
              []
            );
          })({ ownerDocument: C }, Boolean(16 & g));
          let x = (function (
            { ownerDocument: e, container: t, initialFocus: r },
            o
          ) {
            let i = (0, n.useRef)(null),
              l = (0, A.t)();
            return (
              b(() => {
                if (!o) return;
                let n = t.current;
                !n ||
                  (0, E.Y)(() => {
                    if (!l.current) return;
                    let t = null == e ? void 0 : e.activeElement;
                    if (null != r && r.current) {
                      if ((null == r ? void 0 : r.current) === t)
                        return void (i.current = t);
                    } else if (n.contains(t)) return void (i.current = t);
                    null != r && r.current
                      ? (0, f.C5)(r.current)
                      : (0, f.jA)(n, f.TO.First) === f.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (i.current = null == e ? void 0 : e.activeElement);
                  });
              }, [o]),
              i
            );
          })(
            { ownerDocument: C, container: r, initialFocus: u },
            Boolean(2 & g)
          );
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: r,
              previousActiveElement: n,
            },
            o
          ) {
            let i = (0, A.t)();
            w(
              null == e ? void 0 : e.defaultView,
              "focus",
              (e) => {
                if (!o || !i.current) return;
                let l = new Set(null == r ? void 0 : r.current);
                l.add(t);
                let a = n.current;
                if (!a) return;
                let u = e.target;
                u && u instanceof HTMLElement
                  ? (function (e, t) {
                      var r;
                      for (let n of e)
                        if (null != (r = n.current) && r.contains(t)) return !0;
                      return !1;
                    })(l, u)
                    ? ((n.current = u), (0, f.C5)(u))
                    : (e.preventDefault(), e.stopPropagation(), (0, f.C5)(a))
                  : (0, f.C5)(n.current);
              },
              !0
            );
          })(
            {
              ownerDocument: C,
              container: r,
              containers: s,
              previousActiveElement: x,
            },
            Boolean(8 & g)
          );
          let P = m(),
            T = (0, p.z)(() => {
              let e = r.current;
              !e ||
                (0, o.E)(P.current, {
                  [h.Forwards]: () => (0, f.jA)(e, f.TO.First),
                  [h.Backwards]: () => (0, f.jA)(e, f.TO.Last),
                });
            }),
            R = { ref: a };
          return n.createElement(
            n.Fragment,
            null,
            Boolean(4 & g) &&
              n.createElement(d._, {
                as: "button",
                type: "button",
                onFocus: T,
                features: d.A.Focusable,
              }),
            (0, i.sY)({
              ourProps: R,
              theirProps: y,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            Boolean(4 & g) &&
              n.createElement(d._, {
                as: "button",
                type: "button",
                onFocus: T,
                features: d.A.Focusable,
              })
          );
        }),
        { features: y }
      );
      var x = r(15466),
        P = r(16723);
      let T = new Set(),
        R = new Map();
      function D(e) {
        e.setAttribute("aria-hidden", "true"), (e.inert = !0);
      }
      function N(e) {
        let t = R.get(e);
        !t ||
          (null === t["aria-hidden"]
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
          (e.inert = t.inert));
      }
      function S(e, t = !0) {
        (0, P.e)(() => {
          if (!t || !e.current) return;
          let r = e.current,
            n = (0, x.r)(r);
          if (n) {
            T.add(r);
            for (let e of R.keys()) e.contains(r) && (N(e), R.delete(e));
            return (
              n.querySelectorAll("body > *").forEach((e) => {
                if (e instanceof HTMLElement) {
                  for (let t of T) if (e.contains(t)) return;
                  1 === T.size &&
                    (R.set(e, {
                      "aria-hidden": e.getAttribute("aria-hidden"),
                      inert: e.inert,
                    }),
                    D(e));
                }
              }),
              () => {
                if ((T.delete(r), T.size > 0))
                  n.querySelectorAll("body > *").forEach((e) => {
                    if (e instanceof HTMLElement && !R.has(e)) {
                      for (let t of T) if (e.contains(t)) return;
                      R.set(e, {
                        "aria-hidden": e.getAttribute("aria-hidden"),
                        inert: e.inert,
                      }),
                        D(e);
                    }
                  });
                else for (let e of R.keys()) N(e), R.delete(e);
              }
            );
          }
        }, [t]);
      }
      var j = r(73935);
      let k = (0, n.createContext)(!1);
      function F() {
        return (0, n.useContext)(k);
      }
      function I(e) {
        return n.createElement(k.Provider, { value: e.force }, e.children);
      }
      var M = r(43393);
      let O = n.Fragment,
        B = (0, i.yV)(function (e, t) {
          let r = e,
            o = (0, n.useRef)(null),
            a = (0, l.T)(
              (0, l.h)((e) => {
                o.current = e;
              }),
              t
            ),
            u = (0, v.i)(o),
            s = (function (e) {
              let t = F(),
                r = (0, n.useContext)(V),
                o = (0, v.i)(e),
                [i, l] = (0, n.useState)(() => {
                  if ((!t && null !== r) || M.s) return null;
                  let e =
                    null == o
                      ? void 0
                      : o.getElementById("headlessui-portal-root");
                  if (e) return e;
                  if (null === o) return null;
                  let n = o.createElement("div");
                  return (
                    n.setAttribute("id", "headlessui-portal-root"),
                    o.body.appendChild(n)
                  );
                });
              return (
                (0, n.useEffect)(() => {
                  null !== i &&
                    ((null != o && o.body.contains(i)) ||
                      null == o ||
                      o.body.appendChild(i));
                }, [i, o]),
                (0, n.useEffect)(() => {
                  t || (null !== r && l(r.current));
                }, [r, l, t]),
                i
              );
            })(o),
            [d] = (0, n.useState)(() => {
              var e;
              return M.s
                ? null
                : null != (e = null == u ? void 0 : u.createElement("div"))
                ? e
                : null;
            }),
            f = (0, c.H)(),
            p = (0, n.useRef)(!1);
          return (
            (0, P.e)(() => {
              if (((p.current = !1), s && d))
                return (
                  s.contains(d) ||
                    (d.setAttribute("data-headlessui-portal", ""),
                    s.appendChild(d)),
                  () => {
                    (p.current = !0),
                      (0, E.Y)(() => {
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
              ? (0, j.createPortal)(
                  (0, i.sY)({
                    ourProps: { ref: a },
                    theirProps: r,
                    defaultTag: O,
                    name: "Portal",
                  }),
                  d
                )
              : null
          );
        }),
        Y = n.Fragment,
        V = (0, n.createContext)(null),
        L = (0, i.yV)(function (e, t) {
          let { target: r, ...o } = e,
            a = { ref: (0, l.T)(t) };
          return n.createElement(
            V.Provider,
            { value: r },
            (0, i.sY)({
              ourProps: a,
              theirProps: o,
              defaultTag: Y,
              name: "Popover.Group",
            })
          );
        }),
        _ = Object.assign(B, { Group: L }),
        U = (0, n.createContext)(null);
      function H() {
        let e = (0, n.useContext)(U);
        if (null === e) {
          let e = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, H), e);
        }
        return e;
      }
      function Z() {
        let [e, t] = (0, n.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, n.useMemo)(
            () =>
              function (e) {
                let r = (0, p.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let r = t.slice(),
                            n = r.indexOf(e);
                          return -1 !== n && r.splice(n, 1), r;
                        })
                    )
                  ),
                  o = (0, n.useMemo)(
                    () => ({
                      register: r,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [r, e.slot, e.name, e.props]
                  );
                return n.createElement(U.Provider, { value: o }, e.children);
              },
            [t]
          ),
        ];
      }
      let W = (0, i.yV)(function (e, t) {
        let r = H(),
          n = `headlessui-description-${(0, s.M)()}`,
          o = (0, l.T)(t);
        (0, P.e)(() => r.register(n), [n, r.register]);
        let a = e,
          u = { ref: o, ...r.props, id: n };
        return (0,
        i.sY)({ ourProps: u, theirProps: a, slot: r.slot || {}, defaultTag: "p", name: r.name || "Description" });
      });
      var Q = r(16567);
      let G = (0, n.createContext)(() => {});
      G.displayName = "StackContext";
      var z = ((e) => (
        (e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e
      ))(z || {});
      function $({
        children: e,
        onUpdate: t,
        type: r,
        element: o,
        enabled: i,
      }) {
        let l = (0, n.useContext)(G),
          a = (0, p.z)((...e) => {
            null == t || t(...e), l(...e);
          });
        return (
          (0, P.e)(() => {
            let e = void 0 === i || !0 === i;
            return (
              e && a(0, r, o),
              () => {
                e && a(1, r, o);
              }
            );
          }, [a, r, o, i]),
          n.createElement(G.Provider, { value: a }, e)
        );
      }
      var J = r(39650),
        K = r(9362);
      var q = ((e) => (
          (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
        ))(q || {}),
        X = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(X || {});
      let ee = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        te = (0, n.createContext)(null);
      function re(e) {
        let t = (0, n.useContext)(te);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Dialog /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, re), t);
        }
        return t;
      }
      function ne(e, t) {
        (0, n.useEffect)(() => {
          var r;
          if (!t || !e) return;
          let n = (0, K.k)();
          function o(e, t, r) {
            let o = e.style.getPropertyValue(t);
            return (
              Object.assign(e.style, { [t]: r }),
              n.add(() => {
                Object.assign(e.style, { [t]: o });
              })
            );
          }
          let i = e.documentElement,
            l =
              (null != (r = e.defaultView) ? r : window).innerWidth -
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
              n.add(() => window.scrollTo(0, e));
          }
          return n.dispose;
        }, [e, t]);
      }
      function oe(e, t) {
        return (0, o.E)(t.type, ee, e, t);
      }
      te.displayName = "DialogContext";
      let ie = i.AN.RenderStrategy | i.AN.Static,
        le = (0, i.yV)(function (e, t) {
          let {
              open: r,
              onClose: u,
              initialFocus: f,
              __demoMode: g = !1,
              ...h
            } = e,
            [m, A] = (0, n.useState)(0),
            E = (0, Q.oJ)();
          void 0 === r &&
            null !== E &&
            (r = (0, o.E)(E, { [Q.ZM.Open]: !0, [Q.ZM.Closed]: !1 }));
          let b = (0, n.useRef)(new Set()),
            y = (0, n.useRef)(null),
            x = (0, l.T)(y, t),
            P = (0, n.useRef)(null),
            T = (0, v.i)(y),
            R = e.hasOwnProperty("open") || null !== E,
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
          if ("boolean" != typeof r)
            throw new Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`
            );
          if ("function" != typeof u)
            throw new Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${u}`
            );
          let N = r ? 0 : 1,
            [j, k] = (0, n.useReducer)(oe, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, n.createRef)(),
            }),
            F = (0, p.z)(() => u(!1)),
            M = (0, p.z)((e) => k({ type: 0, id: e })),
            O = !!(0, c.H)() && !g && 0 === N,
            B = m > 1,
            Y = null !== (0, n.useContext)(te),
            V = B ? "parent" : "leaf";
          S(y, !!B && O),
            (0, J.O)(
              () => {
                var e, t;
                return [
                  ...Array.from(
                    null !=
                      (e =
                        null == T
                          ? void 0
                          : T.querySelectorAll(
                              "body > *, [data-headlessui-portal]"
                            ))
                      ? e
                      : []
                  ).filter(
                    (e) =>
                      !(
                        !(e instanceof HTMLElement) ||
                        e.contains(P.current) ||
                        (j.panelRef.current && e.contains(j.panelRef.current))
                      )
                  ),
                  null != (t = j.panelRef.current) ? t : y.current,
                ];
              },
              F,
              O && !B
            ),
            w(null == T ? void 0 : T.defaultView, "keydown", (e) => {
              e.defaultPrevented ||
                (e.key === a.R.Escape &&
                  0 === N &&
                  (B || (e.preventDefault(), e.stopPropagation(), F())));
            }),
            ne(T, 0 === N && !Y),
            (0, n.useEffect)(() => {
              if (0 !== N || !y.current) return;
              let e = new IntersectionObserver((e) => {
                for (let t of e)
                  0 === t.boundingClientRect.x &&
                    0 === t.boundingClientRect.y &&
                    0 === t.boundingClientRect.width &&
                    0 === t.boundingClientRect.height &&
                    F();
              });
              return e.observe(y.current), () => e.disconnect();
            }, [N, y, F]);
          let [L, U] = Z(),
            H = `headlessui-dialog-${(0, s.M)()}`,
            W = (0, n.useMemo)(
              () => [{ dialogState: N, close: F, setTitleId: M }, j],
              [N, j, F, M]
            ),
            G = (0, n.useMemo)(() => ({ open: 0 === N }), [N]),
            K = {
              ref: x,
              id: H,
              role: "dialog",
              "aria-modal": 0 === N || void 0,
              "aria-labelledby": j.titleId,
              "aria-describedby": L,
            };
          return n.createElement(
            $,
            {
              type: "Dialog",
              enabled: 0 === N,
              element: y,
              onUpdate: (0, p.z)((e, t, r) => {
                "Dialog" === t &&
                  (0, o.E)(e, {
                    [z.Add]() {
                      b.current.add(r), A((e) => e + 1);
                    },
                    [z.Remove]() {
                      b.current.add(r), A((e) => e - 1);
                    },
                  });
              }),
            },
            n.createElement(
              I,
              { force: !0 },
              n.createElement(
                _,
                null,
                n.createElement(
                  te.Provider,
                  { value: W },
                  n.createElement(
                    _.Group,
                    { target: y },
                    n.createElement(
                      I,
                      { force: !1 },
                      n.createElement(
                        U,
                        { slot: G, name: "Dialog.Description" },
                        n.createElement(
                          C,
                          {
                            initialFocus: f,
                            containers: b,
                            features: O
                              ? (0, o.E)(V, {
                                  parent: C.features.RestoreFocus,
                                  leaf: C.features.All & ~C.features.FocusLock,
                                })
                              : C.features.None,
                          },
                          (0, i.sY)({
                            ourProps: K,
                            theirProps: h,
                            slot: G,
                            defaultTag: "div",
                            features: ie,
                            visible: 0 === N,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            n.createElement(d._, { features: d.A.Hidden, ref: P })
          );
        }),
        ae = (0, i.yV)(function (e, t) {
          let [{ dialogState: r, close: o }] = re("Dialog.Overlay"),
            a = (0, l.T)(t),
            c = `headlessui-dialog-overlay-${(0, s.M)()}`,
            d = (0, p.z)((e) => {
              if (e.target === e.currentTarget) {
                if ((0, u.P)(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), e.stopPropagation(), o();
              }
            }),
            f = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
          return (0,
          i.sY)({ ourProps: { ref: a, id: c, "aria-hidden": !0, onClick: d }, theirProps: e, slot: f, defaultTag: "div", name: "Dialog.Overlay" });
        }),
        ue = (0, i.yV)(function (e, t) {
          let [{ dialogState: r }, o] = re("Dialog.Backdrop"),
            a = (0, l.T)(t),
            u = `headlessui-dialog-backdrop-${(0, s.M)()}`;
          (0, n.useEffect)(() => {
            if (null === o.panelRef.current)
              throw new Error(
                "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
              );
          }, [o.panelRef]);
          let c = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
          return n.createElement(
            I,
            { force: !0 },
            n.createElement(
              _,
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
          let [{ dialogState: r }, o] = re("Dialog.Panel"),
            a = (0, l.T)(t, o.panelRef),
            u = `headlessui-dialog-panel-${(0, s.M)()}`,
            c = (0, n.useMemo)(() => ({ open: 0 === r }), [r]),
            d = (0, p.z)((e) => {
              e.stopPropagation();
            });
          return (0,
          i.sY)({ ourProps: { ref: a, id: u, onClick: d }, theirProps: e, slot: c, defaultTag: "div", name: "Dialog.Panel" });
        }),
        ce = (0, i.yV)(function (e, t) {
          let [{ dialogState: r, setTitleId: o }] = re("Dialog.Title"),
            a = `headlessui-dialog-title-${(0, s.M)()}`,
            u = (0, l.T)(t);
          (0, n.useEffect)(() => (o(a), () => o(null)), [a, o]);
          let c = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
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
    46045: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return i;
        },
        _: function () {
          return l;
        },
      });
      var n = r(12351);
      var o,
        i =
          (((o = i || {})[(o.None = 1)] = "None"),
          (o[(o.Focusable = 2)] = "Focusable"),
          (o[(o.Hidden = 4)] = "Hidden"),
          o);
      let l = (0, n.yV)(function (e, t) {
        let { features: r = 1, ...o } = e,
          i = {
            ref: t,
            "aria-hidden": 2 === (2 & r) || void 0,
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
              ...(4 === (4 & r) && 2 !== (2 & r) && { display: "none" }),
            },
          };
        return (0,
        n.sY)({ ourProps: i, theirProps: o, slot: {}, defaultTag: "div", name: "Hidden" });
      });
    },
  },
  function (e) {
    e.O(0, [7112, 1999, 4520, 3512, 8844, 9774, 2888, 179], function () {
      return (t = 65361), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=demo-14ceea0237ba0ec5.js.map
