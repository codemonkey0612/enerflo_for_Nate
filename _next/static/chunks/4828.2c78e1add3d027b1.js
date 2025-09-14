"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4828],
  {
    25408: function (e, t, r) {
      r.d(t, {
        V: function () {
          return de;
        },
      });
      var n = r(67294),
        o = r(32984),
        l = r(12351),
        i = r(23784),
        a = r(61363),
        u = r(64103),
        s = r(19946),
        c = r(82180),
        d = r(46045),
        f = r(84575),
        p = r(73781),
        v = r(3855);
      var g = ((e) => (
        (e[(e.Forwards = 0)] = "Forwards"),
        (e[(e.Backwards = 1)] = "Backwards"),
        e
      ))(g || {});
      function m() {
        let e = (0, n.useRef)(0);
        return (
          (function (e, t, r) {
            let o = (0, v.E)(t);
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
      var h = r(14879),
        E = r(51074);
      function w(e, t, r, o) {
        let l = (0, v.E)(r);
        (0, n.useEffect)(() => {
          function r(e) {
            l.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, r, o),
            () => e.removeEventListener(t, r, o)
          );
        }, [e, t, o]);
      }
      var b = r(81021);
      function y(e, t) {
        let r = (0, n.useRef)([]),
          o = (0, p.z)(e);
        (0, n.useEffect)(() => {
          let e = [...r.current];
          for (let [n, l] of t.entries())
            if (r.current[n] !== l) {
              let n = o(t, e);
              return (r.current = t), n;
            }
        }, [o, ...t]);
      }
      var T = ((e) => (
        (e[(e.None = 1)] = "None"),
        (e[(e.InitialFocus = 2)] = "InitialFocus"),
        (e[(e.TabLock = 4)] = "TabLock"),
        (e[(e.FocusLock = 8)] = "FocusLock"),
        (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
        (e[(e.All = 30)] = "All"),
        e
      ))(T || {});
      let P = Object.assign(
        (0, l.yV)(function (e, t) {
          let r = (0, n.useRef)(null),
            a = (0, i.T)(r, t),
            { initialFocus: u, containers: s, features: v = 30, ...T } = e;
          (0, c.H)() || (v = 1);
          let P = (0, E.i)(r);
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
              y(() => {
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
                    (0, b.Y)(() => {
                      !o.current || ((0, f.C5)(r.current), (r.current = null));
                    });
                }
              ),
              []
            );
          })({ ownerDocument: P }, Boolean(16 & v));
          let C = (function (
            { ownerDocument: e, container: t, initialFocus: r },
            o
          ) {
            let l = (0, n.useRef)(null),
              i = (0, h.t)();
            return (
              y(() => {
                if (!o) return;
                let n = t.current;
                !n ||
                  (0, b.Y)(() => {
                    if (!i.current) return;
                    let t = null == e ? void 0 : e.activeElement;
                    if (null != r && r.current) {
                      if ((null == r ? void 0 : r.current) === t)
                        return void (l.current = t);
                    } else if (n.contains(t)) return void (l.current = t);
                    null != r && r.current
                      ? (0, f.C5)(r.current)
                      : (0, f.jA)(n, f.TO.First) === f.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (l.current = null == e ? void 0 : e.activeElement);
                  });
              }, [o]),
              l
            );
          })(
            { ownerDocument: P, container: r, initialFocus: u },
            Boolean(2 & v)
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
            let l = (0, h.t)();
            w(
              null == e ? void 0 : e.defaultView,
              "focus",
              (e) => {
                if (!o || !l.current) return;
                let i = new Set(null == r ? void 0 : r.current);
                i.add(t);
                let a = n.current;
                if (!a) return;
                let u = e.target;
                u && u instanceof HTMLElement
                  ? (function (e, t) {
                      var r;
                      for (let n of e)
                        if (null != (r = n.current) && r.contains(t)) return !0;
                      return !1;
                    })(i, u)
                    ? ((n.current = u), (0, f.C5)(u))
                    : (e.preventDefault(), e.stopPropagation(), (0, f.C5)(a))
                  : (0, f.C5)(n.current);
              },
              !0
            );
          })(
            {
              ownerDocument: P,
              container: r,
              containers: s,
              previousActiveElement: C,
            },
            Boolean(8 & v)
          );
          let D = m(),
            R = (0, p.z)(() => {
              let e = r.current;
              !e ||
                (0, o.E)(D.current, {
                  [g.Forwards]: () => (0, f.jA)(e, f.TO.First),
                  [g.Backwards]: () => (0, f.jA)(e, f.TO.Last),
                });
            }),
            k = { ref: a };
          return n.createElement(
            n.Fragment,
            null,
            Boolean(4 & v) &&
              n.createElement(d._, {
                as: "button",
                type: "button",
                onFocus: R,
                features: d.A.Focusable,
              }),
            (0, l.sY)({
              ourProps: k,
              theirProps: T,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            Boolean(4 & v) &&
              n.createElement(d._, {
                as: "button",
                type: "button",
                onFocus: R,
                features: d.A.Focusable,
              })
          );
        }),
        { features: T }
      );
      var C = r(15466),
        D = r(16723);
      let R = new Set(),
        k = new Map();
      function A(e) {
        e.setAttribute("aria-hidden", "true"), (e.inert = !0);
      }
      function F(e) {
        let t = k.get(e);
        !t ||
          (null === t["aria-hidden"]
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
          (e.inert = t.inert));
      }
      function S(e, t = !0) {
        (0, D.e)(() => {
          if (!t || !e.current) return;
          let r = e.current,
            n = (0, C.r)(r);
          if (n) {
            R.add(r);
            for (let e of k.keys()) e.contains(r) && (F(e), k.delete(e));
            return (
              n.querySelectorAll("body > *").forEach((e) => {
                if (e instanceof HTMLElement) {
                  for (let t of R) if (e.contains(t)) return;
                  1 === R.size &&
                    (k.set(e, {
                      "aria-hidden": e.getAttribute("aria-hidden"),
                      inert: e.inert,
                    }),
                    A(e));
                }
              }),
              () => {
                if ((R.delete(r), R.size > 0))
                  n.querySelectorAll("body > *").forEach((e) => {
                    if (e instanceof HTMLElement && !k.has(e)) {
                      for (let t of R) if (e.contains(t)) return;
                      k.set(e, {
                        "aria-hidden": e.getAttribute("aria-hidden"),
                        inert: e.inert,
                      }),
                        A(e);
                    }
                  });
                else for (let e of k.keys()) F(e), k.delete(e);
              }
            );
          }
        }, [t]);
      }
      var M = r(73935);
      let x = (0, n.createContext)(!1);
      function O() {
        return (0, n.useContext)(x);
      }
      function Y(e) {
        return n.createElement(x.Provider, { value: e.force }, e.children);
      }
      var V = r(43393);
      let L = n.Fragment,
        B = (0, l.yV)(function (e, t) {
          let r = e,
            o = (0, n.useRef)(null),
            a = (0, i.T)(
              (0, i.h)((e) => {
                o.current = e;
              }),
              t
            ),
            u = (0, E.i)(o),
            s = (function (e) {
              let t = O(),
                r = (0, n.useContext)(N),
                o = (0, E.i)(e),
                [l, i] = (0, n.useState)(() => {
                  if ((!t && null !== r) || V.s) return null;
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
                  null !== l &&
                    ((null != o && o.body.contains(l)) ||
                      null == o ||
                      o.body.appendChild(l));
                }, [l, o]),
                (0, n.useEffect)(() => {
                  t || (null !== r && i(r.current));
                }, [r, i, t]),
                l
              );
            })(o),
            [d] = (0, n.useState)(() => {
              var e;
              return V.s
                ? null
                : null != (e = null == u ? void 0 : u.createElement("div"))
                ? e
                : null;
            }),
            f = (0, c.H)(),
            p = (0, n.useRef)(!1);
          return (
            (0, D.e)(() => {
              if (((p.current = !1), s && d))
                return (
                  s.contains(d) ||
                    (d.setAttribute("data-headlessui-portal", ""),
                    s.appendChild(d)),
                  () => {
                    (p.current = !0),
                      (0, b.Y)(() => {
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
                  (0, l.sY)({
                    ourProps: { ref: a },
                    theirProps: r,
                    defaultTag: L,
                    name: "Portal",
                  }),
                  d
                )
              : null
          );
        }),
        I = n.Fragment,
        N = (0, n.createContext)(null),
        z = (0, l.yV)(function (e, t) {
          let { target: r, ...o } = e,
            a = { ref: (0, i.T)(t) };
          return n.createElement(
            N.Provider,
            { value: r },
            (0, l.sY)({
              ourProps: a,
              theirProps: o,
              defaultTag: I,
              name: "Popover.Group",
            })
          );
        }),
        H = Object.assign(B, { Group: z }),
        $ = (0, n.createContext)(null);
      function _() {
        let e = (0, n.useContext)($);
        if (null === e) {
          let e = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, _), e);
        }
        return e;
      }
      function j() {
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
                return n.createElement($.Provider, { value: o }, e.children);
              },
            [t]
          ),
        ];
      }
      let W = (0, l.yV)(function (e, t) {
        let r = _(),
          n = `headlessui-description-${(0, s.M)()}`,
          o = (0, i.T)(t);
        (0, D.e)(() => r.register(n), [n, r.register]);
        let a = e,
          u = { ref: o, ...r.props, id: n };
        return (0,
        l.sY)({ ourProps: u, theirProps: a, slot: r.slot || {}, defaultTag: "p", name: r.name || "Description" });
      });
      var q = r(16567);
      let G = (0, n.createContext)(() => {});
      G.displayName = "StackContext";
      var U = ((e) => (
        (e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e
      ))(U || {});
      function Z({
        children: e,
        onUpdate: t,
        type: r,
        element: o,
        enabled: l,
      }) {
        let i = (0, n.useContext)(G),
          a = (0, p.z)((...e) => {
            null == t || t(...e), i(...e);
          });
        return (
          (0, D.e)(() => {
            let e = void 0 === l || !0 === l;
            return (
              e && a(0, r, o),
              () => {
                e && a(1, r, o);
              }
            );
          }, [a, r, o, l]),
          n.createElement(G.Provider, { value: a }, e)
        );
      }
      var J = r(39650),
        K = r(9362);
      var Q = ((e) => (
          (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
        ))(Q || {}),
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
          let l = e.documentElement,
            i =
              (null != (r = e.defaultView) ? r : window).innerWidth -
              l.clientWidth;
          if ((o(l, "overflow", "hidden"), i > 0)) {
            o(l, "paddingRight", `${i - (l.clientWidth - l.offsetWidth)}px`);
          }
          if (
            /iPhone/gi.test(window.navigator.platform) ||
            (/Mac/gi.test(window.navigator.platform) &&
              window.navigator.maxTouchPoints > 0)
          ) {
            let e = window.pageYOffset;
            o(l, "position", "fixed"),
              o(l, "marginTop", `-${e}px`),
              o(l, "width", "100%"),
              n.add(() => window.scrollTo(0, e));
          }
          return n.dispose;
        }, [e, t]);
      }
      function oe(e, t) {
        return (0, o.E)(t.type, ee, e, t);
      }
      te.displayName = "DialogContext";
      let le = l.AN.RenderStrategy | l.AN.Static,
        ie = (0, l.yV)(function (e, t) {
          let {
              open: r,
              onClose: u,
              initialFocus: f,
              __demoMode: v = !1,
              ...g
            } = e,
            [m, h] = (0, n.useState)(0),
            b = (0, q.oJ)();
          void 0 === r &&
            null !== b &&
            (r = (0, o.E)(b, { [q.ZM.Open]: !0, [q.ZM.Closed]: !1 }));
          let y = (0, n.useRef)(new Set()),
            T = (0, n.useRef)(null),
            C = (0, i.T)(T, t),
            D = (0, n.useRef)(null),
            R = (0, E.i)(T),
            k = e.hasOwnProperty("open") || null !== b,
            A = e.hasOwnProperty("onClose");
          if (!k && !A)
            throw new Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!k)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!A)
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
          let F = r ? 0 : 1,
            [M, x] = (0, n.useReducer)(oe, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, n.createRef)(),
            }),
            O = (0, p.z)(() => u(!1)),
            V = (0, p.z)((e) => x({ type: 0, id: e })),
            L = !!(0, c.H)() && !v && 0 === F,
            B = m > 1,
            I = null !== (0, n.useContext)(te),
            N = B ? "parent" : "leaf";
          S(T, !!B && L),
            (0, J.O)(
              () => {
                var e, t;
                return [
                  ...Array.from(
                    null !=
                      (e =
                        null == R
                          ? void 0
                          : R.querySelectorAll(
                              "body > *, [data-headlessui-portal]"
                            ))
                      ? e
                      : []
                  ).filter(
                    (e) =>
                      !(
                        !(e instanceof HTMLElement) ||
                        e.contains(D.current) ||
                        (M.panelRef.current && e.contains(M.panelRef.current))
                      )
                  ),
                  null != (t = M.panelRef.current) ? t : T.current,
                ];
              },
              O,
              L && !B
            ),
            w(null == R ? void 0 : R.defaultView, "keydown", (e) => {
              e.defaultPrevented ||
                (e.key === a.R.Escape &&
                  0 === F &&
                  (B || (e.preventDefault(), e.stopPropagation(), O())));
            }),
            ne(R, 0 === F && !I),
            (0, n.useEffect)(() => {
              if (0 !== F || !T.current) return;
              let e = new IntersectionObserver((e) => {
                for (let t of e)
                  0 === t.boundingClientRect.x &&
                    0 === t.boundingClientRect.y &&
                    0 === t.boundingClientRect.width &&
                    0 === t.boundingClientRect.height &&
                    O();
              });
              return e.observe(T.current), () => e.disconnect();
            }, [F, T, O]);
          let [z, $] = j(),
            _ = `headlessui-dialog-${(0, s.M)()}`,
            W = (0, n.useMemo)(
              () => [{ dialogState: F, close: O, setTitleId: V }, M],
              [F, M, O, V]
            ),
            G = (0, n.useMemo)(() => ({ open: 0 === F }), [F]),
            K = {
              ref: C,
              id: _,
              role: "dialog",
              "aria-modal": 0 === F || void 0,
              "aria-labelledby": M.titleId,
              "aria-describedby": z,
            };
          return n.createElement(
            Z,
            {
              type: "Dialog",
              enabled: 0 === F,
              element: T,
              onUpdate: (0, p.z)((e, t, r) => {
                "Dialog" === t &&
                  (0, o.E)(e, {
                    [U.Add]() {
                      y.current.add(r), h((e) => e + 1);
                    },
                    [U.Remove]() {
                      y.current.add(r), h((e) => e - 1);
                    },
                  });
              }),
            },
            n.createElement(
              Y,
              { force: !0 },
              n.createElement(
                H,
                null,
                n.createElement(
                  te.Provider,
                  { value: W },
                  n.createElement(
                    H.Group,
                    { target: T },
                    n.createElement(
                      Y,
                      { force: !1 },
                      n.createElement(
                        $,
                        { slot: G, name: "Dialog.Description" },
                        n.createElement(
                          P,
                          {
                            initialFocus: f,
                            containers: y,
                            features: L
                              ? (0, o.E)(N, {
                                  parent: P.features.RestoreFocus,
                                  leaf: P.features.All & ~P.features.FocusLock,
                                })
                              : P.features.None,
                          },
                          (0, l.sY)({
                            ourProps: K,
                            theirProps: g,
                            slot: G,
                            defaultTag: "div",
                            features: le,
                            visible: 0 === F,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            n.createElement(d._, { features: d.A.Hidden, ref: D })
          );
        }),
        ae = (0, l.yV)(function (e, t) {
          let [{ dialogState: r, close: o }] = re("Dialog.Overlay"),
            a = (0, i.T)(t),
            c = `headlessui-dialog-overlay-${(0, s.M)()}`,
            d = (0, p.z)((e) => {
              if (e.target === e.currentTarget) {
                if ((0, u.P)(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), e.stopPropagation(), o();
              }
            }),
            f = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
          return (0,
          l.sY)({ ourProps: { ref: a, id: c, "aria-hidden": !0, onClick: d }, theirProps: e, slot: f, defaultTag: "div", name: "Dialog.Overlay" });
        }),
        ue = (0, l.yV)(function (e, t) {
          let [{ dialogState: r }, o] = re("Dialog.Backdrop"),
            a = (0, i.T)(t),
            u = `headlessui-dialog-backdrop-${(0, s.M)()}`;
          (0, n.useEffect)(() => {
            if (null === o.panelRef.current)
              throw new Error(
                "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
              );
          }, [o.panelRef]);
          let c = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
          return n.createElement(
            Y,
            { force: !0 },
            n.createElement(
              H,
              null,
              (0, l.sY)({
                ourProps: { ref: a, id: u, "aria-hidden": !0 },
                theirProps: e,
                slot: c,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            )
          );
        }),
        se = (0, l.yV)(function (e, t) {
          let [{ dialogState: r }, o] = re("Dialog.Panel"),
            a = (0, i.T)(t, o.panelRef),
            u = `headlessui-dialog-panel-${(0, s.M)()}`,
            c = (0, n.useMemo)(() => ({ open: 0 === r }), [r]),
            d = (0, p.z)((e) => {
              e.stopPropagation();
            });
          return (0,
          l.sY)({ ourProps: { ref: a, id: u, onClick: d }, theirProps: e, slot: c, defaultTag: "div", name: "Dialog.Panel" });
        }),
        ce = (0, l.yV)(function (e, t) {
          let [{ dialogState: r, setTitleId: o }] = re("Dialog.Title"),
            a = `headlessui-dialog-title-${(0, s.M)()}`,
            u = (0, i.T)(t);
          (0, n.useEffect)(() => (o(a), () => o(null)), [a, o]);
          let c = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
          return (0,
          l.sY)({ ourProps: { ref: u, id: a }, theirProps: e, slot: c, defaultTag: "h2", name: "Dialog.Title" });
        }),
        de = Object.assign(ie, {
          Backdrop: ue,
          Panel: se,
          Overlay: ae,
          Title: ce,
          Description: W,
        });
    },
    46045: function (e, t, r) {
      r.d(t, {
        A: function () {
          return l;
        },
        _: function () {
          return i;
        },
      });
      var n = r(12351);
      var o,
        l =
          (((o = l || {})[(o.None = 1)] = "None"),
          (o[(o.Focusable = 2)] = "Focusable"),
          (o[(o.Hidden = 4)] = "Hidden"),
          o);
      let i = (0, n.yV)(function (e, t) {
        let { features: r = 1, ...o } = e,
          l = {
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
        n.sY)({ ourProps: l, theirProps: o, slot: {}, defaultTag: "div", name: "Hidden" });
      });
    },
  },
]);
//# sourceMappingURL=4828.2c78e1add3d027b1.js.map
