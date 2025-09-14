(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2706],
  {
    86972: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/enerflo-digital-welcome-calls-callpilot.1fd2d586.png",
        height: 600,
        width: 800,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxElEQVR42gVATUrDQBSe23kPb+DOI+jCpQXFRQURV90XFLX4u3CnogyxTVpbSDKZecmbzMs05Ctqk+dXRG7NjdeFrRNLnBhb67y0/6Wxeyr5/Xm/Pj2B1n8YHR/h4W4GQ4LKEpjbc7Waz2eT8Rhf37qfHO4Pz9PbYQv0XgRdjG+qcP6ROIK4i5+vT/0iWfRdHLZrKsGhvVdE9Yf3DOYGEiN86yEhoAiE0MmLcsYeGFNdZtnybLnKLtI0HVXOTSVIIyHc7AABf6m8xSPdqwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    16004: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/enerflo-solar-project-submission-workflow.8fbac92f.png",
        height: 463,
        width: 742,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfElEQVR42iWNMQ4CQQwDnY2Pg4oKev7/GIRER0HDCxBwaPcSE4kprHE19novZylP08ROpwlCUWOzpBvN2sFa27s7MhPCHytL6cjP8h2tGcbKAGAGQ5ElFNA5b7h1OibSJaH3gco1mCMid4zENUc+I9cBwepDI3R5YLMG7j+4tkBPywtmmgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    16065: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q1: function () {
          return A;
        },
        aW: function () {
          return d;
        },
      });
      var n = r(29815),
        a = r(85893),
        i = r(86010),
        s = r(67294),
        o = r(63801),
        l = r(92761),
        u = r.n(l),
        c = r(86042),
        A = function (e) {
          var t = e.className,
            r = void 0 === t ? u().carouselButtonBlue : t,
            n = (0, c.ZP)(),
            i = n.goToPrevious,
            s = n.stepIndex,
            l = n.infinite;
          return (0, a.jsx)("button", {
            onClick: i,
            className: r,
            disabled: !l && 0 === s,
            "aria-label": "Previous",
            children: (0, a.jsx)(o.wyc, { className: u().carouselButtonIcon }),
          });
        },
        d = function (e) {
          var t = e.className,
            r = void 0 === t ? u().carouselButtonBlue : t,
            n = (0, c.ZP)(),
            i = n.goToNext,
            s = n.stepIndex,
            l = n.steps,
            A = n.infinite;
          return (0, a.jsx)("button", {
            onClick: i,
            className: r,
            disabled: !A && s === l.length - 1,
            "aria-label": "Next",
            children: (0, a.jsx)(o.XCv, { className: u().carouselButtonIcon }),
          });
        },
        g = ["transition-transform", "duration-300"];
      t.ZP = function (e) {
        var t = e.StepRenderer,
          r = (0, c.ZP)(),
          o = r.containerRef,
          l = r.stepIndex,
          u = r.startSwipe,
          A = r.moveSwipe,
          d = r.endSwipe,
          f = r.steps,
          m = r.activeStepRef,
          p = r.infinite,
          h = (0, s.useRef)(null),
          b = (0, s.useRef)(l),
          y = (0, s.useRef)(null),
          v = (0, s.useRef)(0),
          x = (0, s.useCallback)(
            function () {
              var e;
              if (o.current && m.current) {
                v.current = window.innerWidth;
                var t =
                  null === (e = m.current.getBoundingClientRect()) ||
                  void 0 === e
                    ? void 0
                    : e.height;
                o.current.style.height = "".concat(t, "px");
              }
            },
            [o, m]
          ),
          w = (0, s.useCallback)(
            function () {
              v.current !== window.innerWidth &&
                ((v.current = window.innerWidth), x());
            },
            [x]
          );
        return (
          (0, s.useEffect)(
            function () {
              var e,
                t = 0 === l && b.current === f.length - 1,
                r = l === f.length - 1 && 0 === b.current;
              h.current &&
                (p && (t || r)
                  ? ((e = h.current.classList).remove.apply(e, (0, n.Z)(g)),
                    (h.current.style.transform = r
                      ? "translateX(-".concat(100 * (l + 1), "%)")
                      : "translateX(100%)"),
                    y.current && clearTimeout(y.current),
                    (y.current = setTimeout(function () {
                      var e;
                      h.current &&
                        ((e = h.current.classList).add.apply(e, (0, n.Z)(g)),
                        (h.current.style.transform = r
                          ? "translateX(-".concat(100 * l, "%)")
                          : "translateX(0%)"));
                    }, 10)))
                  : (h.current.style.transform = "translateX(-".concat(
                      100 * l,
                      "%)"
                    )));
              return (
                (b.current = l),
                function () {
                  y.current && clearTimeout(y.current);
                }
              );
            },
            [l, p, f.length]
          ),
          (0, s.useEffect)(
            function () {
              x();
            },
            [l, x]
          ),
          (0, s.useEffect)(
            function () {
              return (
                window.addEventListener("resize", w),
                function () {
                  window.removeEventListener("resize", w);
                }
              );
            },
            [w]
          ),
          (0, a.jsx)("div", {
            className: "whitespace-nowrap overflow-hidden transition-all",
            ref: o,
            children: (0, a.jsx)("div", {
              className: i.Z.apply(void 0, (0, n.Z)(g)),
              onTouchStart: u,
              onTouchMove: A,
              onTouchEnd: d,
              ref: h,
              children: f.map(function (e, r) {
                return (0,
                a.jsx)(t, { step: e, className: (0, i.Z)("w-full align-top whitespace-normal transition-opacity", r === l ? "opacity-1" : "opacity-0"), ref: r === l ? m : void 0 }, (null === e || void 0 === e ? void 0 : e.title) || r);
              }),
            }),
          })
        );
      };
    },
    25296: function (e, t, r) {
      "use strict";
      var n = r(85893),
        a = r(86010),
        i = (r(67294), r(86042));
      t.Z = function (e) {
        var t = e.className,
          r = e.inactiveClassName,
          s = void 0 === r ? "bg-gray-600" : r,
          o = (0, i.ZP)(),
          l = o.stepIndex,
          u = o.steps,
          c = o.goToStep;
        return (0, n.jsx)("div", {
          className: (0, a.Z)("flex space-x-2 items-center justify-center", t),
          children: u.map(function (e, t) {
            return (0, n.jsx)(
              "div",
              {
                className: (0, a.Z)(
                  "h-3 w-3 rounded-full transition-colors shadow-md",
                  t === l ? "bg-primary" : s
                ),
                onClick: function () {
                  return c(t);
                },
              },
              e.title
            );
          }),
        });
      };
    },
    86042: function (e, t, r) {
      "use strict";
      r.d(t, {
        kT: function () {
          return u;
        },
        sj: function () {
          return l;
        },
      });
      var n = r(26042),
        a = r(69396),
        i = r(85893),
        s = r(67294),
        o = (0, s.createContext)({}),
        l = function (e) {
          var t = e.children,
            r = e.steps,
            n = void 0 === r ? [] : r,
            a = e.infinite,
            l = e.autoPlayDuration,
            u = (0, s.useState)(0),
            c = u[0],
            A = u[1],
            d = (0, s.useRef)(0),
            g = (0, s.useRef)(0),
            f = (0, s.useRef)(null),
            m = (0, s.useRef)(null),
            p = (0, s.useRef)(null),
            h = (0, s.useMemo)(
              function () {
                return n || [];
              },
              [n]
            ),
            b = function () {
              f.current && (f.current.style.transform = "");
            },
            y = (0, s.useCallback)(
              function () {
                0 !== c
                  ? A(function (e) {
                      return e - 1;
                    })
                  : a
                  ? A(h.length - 1)
                  : b();
              },
              [c, a, h.length]
            ),
            v = (0, s.useCallback)(
              function () {
                c !== h.length - 1
                  ? A(function (e) {
                      return e + 1;
                    })
                  : a
                  ? A(0)
                  : b();
              },
              [c, a, h.length]
            ),
            x = (0, s.useCallback)(function (e) {
              A(e);
            }, []),
            w = (0, s.useCallback)(function (e) {
              var t;
              (null === (t = e.touches) || void 0 === t ? void 0 : t[0]) &&
                ((d.current = e.touches[0].clientX),
                (g.current = e.touches[0].clientX));
            }, []),
            E = (0, s.useCallback)(
              function (e) {
                var t;
                if (
                  (null === (t = e.touches) || void 0 === t ? void 0 : t[0]) &&
                  (a ||
                    !(
                      (0 === c && d.current < g.current) ||
                      (c === h.length - 1 && d.current > g.current)
                    ))
                ) {
                  var r = Math.abs(d.current - g.current);
                  (g.current = e.touches[0].clientX),
                    f.current &&
                      r > 10 &&
                      (f.current.style.transform = "translateX(".concat(
                        -(d.current - g.current),
                        "px)"
                      ));
                }
              },
              [c, a, h]
            ),
            R = (0, s.useCallback)(
              function () {
                Math.abs(d.current - g.current) > 75
                  ? d.current > g.current
                    ? v()
                    : y()
                  : b(),
                  (d.current = 0),
                  (g.current = 0);
              },
              [v, y]
            ),
            C = (0, s.useCallback)(function (e) {
              e.cancelable &&
                Math.abs(d.current - g.current) > 10 &&
                e.preventDefault();
            }, []),
            P = (0, s.useMemo)(
              function () {
                return {
                  containerRef: m,
                  endSwipe: R,
                  moveSwipe: E,
                  startSwipe: w,
                  goToStep: x,
                  goToNext: v,
                  goToPrevious: y,
                  stepIndex: c,
                  steps: h,
                  activeStepRef: f,
                  infinite: a,
                };
              },
              [R, E, w, x, v, y, c, h, a]
            );
          return (
            (0, s.useEffect)(
              function () {
                return (
                  b(),
                  l &&
                    (p.current = setTimeout(function () {
                      v();
                    }, l)),
                  function () {
                    p.current && clearTimeout(p.current);
                  }
                );
              },
              [c, v, l]
            ),
            (0, s.useEffect)(
              function () {
                var e = m.current;
                return (
                  e && e.addEventListener("touchmove", C, { passive: !1 }),
                  function () {
                    e && e.addEventListener("touchmove", C, { passive: !1 });
                  }
                );
              },
              [C]
            ),
            (null === h || void 0 === h ? void 0 : h.length)
              ? (0, i.jsx)(o.Provider, { value: P, children: t })
              : null
          );
        };
      t.ZP = function () {
        return (0, s.useContext)(o);
      };
      var u = function (e, t) {
        return function (r) {
          return (0, i.jsx)(
            l,
            (0, a.Z)((0, n.Z)({}, t), {
              children: (0, i.jsx)(e, (0, n.Z)({}, r)),
            })
          );
        };
      };
    },
    22706: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return re;
          },
        });
      var n = r(85893),
        a = r(67294),
        i = r(13551),
        s = r(26042),
        o = r(86010),
        l = r(12351),
        u = r(19946),
        c = r(32984),
        A = r(61363),
        d = r(84575),
        g = r(16723),
        f = r(23784),
        m = r(14157),
        p = r(3855),
        h = r(46045);
      function b({ onFocus: e }) {
        let [t, r] = (0, a.useState)(!0);
        return t
          ? a.createElement(h._, {
              as: "button",
              type: "button",
              features: h.A.Focusable,
              onFocus: (t) => {
                t.preventDefault();
                let n,
                  a = 50;
                n = requestAnimationFrame(function t() {
                  if (!(a-- <= 0))
                    return e()
                      ? (r(!1), void cancelAnimationFrame(n))
                      : void (n = requestAnimationFrame(t));
                  n && cancelAnimationFrame(n);
                });
              },
            })
          : null;
      }
      var y,
        v = r(73781),
        x = r(81021),
        w = r(15466),
        E =
          (((y = E || {})[(y.SetSelectedIndex = 0)] = "SetSelectedIndex"),
          (y[(y.RegisterTab = 1)] = "RegisterTab"),
          (y[(y.UnregisterTab = 2)] = "UnregisterTab"),
          (y[(y.RegisterPanel = 3)] = "RegisterPanel"),
          (y[(y.UnregisterPanel = 4)] = "UnregisterPanel"),
          y);
      let R = {
          0(e, t) {
            let r = e.tabs.filter((e) => {
              var t;
              return !(null != (t = e.current) && t.hasAttribute("disabled"));
            });
            if (t.index < 0)
              return { ...e, selectedIndex: e.tabs.indexOf(r[0]) };
            if (t.index > e.tabs.length)
              return { ...e, selectedIndex: e.tabs.indexOf(r[r.length - 1]) };
            let n = e.tabs.slice(0, t.index),
              a = [...e.tabs.slice(t.index), ...n].find((e) => r.includes(e));
            return a ? { ...e, selectedIndex: e.tabs.indexOf(a) } : e;
          },
          1(e, t) {
            var r;
            if (e.tabs.includes(t.tab)) return e;
            let n = e.tabs[e.selectedIndex],
              a = (0, d.z2)([...e.tabs, t.tab], (e) => e.current),
              i = null != (r = a.indexOf(n)) ? r : e.selectedIndex;
            return (
              -1 === i && (i = e.selectedIndex),
              { ...e, tabs: a, selectedIndex: i }
            );
          },
          2: (e, t) => ({ ...e, tabs: e.tabs.filter((e) => e !== t.tab) }),
          3: (e, t) =>
            e.panels.includes(t.panel)
              ? e
              : {
                  ...e,
                  panels: (0, d.z2)([...e.panels, t.panel], (e) => e.current),
                },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        C = (0, a.createContext)(null);
      function P(e) {
        let t = (0, a.useContext)(C);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, P), t);
        }
        return t;
      }
      C.displayName = "TabsSSRContext";
      let j = (0, a.createContext)(null);
      function B(e) {
        let t = (0, a.useContext)(j);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, B), t);
        }
        return t;
      }
      j.displayName = "TabsDataContext";
      let k = (0, a.createContext)(null);
      function S(e) {
        let t = (0, a.useContext)(k);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, S), t);
        }
        return t;
      }
      function I(e, t) {
        return (0, c.E)(t.type, R, e, t);
      }
      k.displayName = "TabsActionsContext";
      let D = a.Fragment,
        T = (0, l.yV)(function (e, t) {
          let {
            defaultIndex: r = 0,
            vertical: n = !1,
            manual: i = !1,
            onChange: s,
            selectedIndex: o = null,
            ...u
          } = e;
          const c = n ? "vertical" : "horizontal",
            A = i ? "manual" : "auto";
          let d = null !== o,
            m = (0, f.T)(t),
            [h, y] = (0, a.useReducer)(I, {
              selectedIndex: null != o ? o : r,
              tabs: [],
              panels: [],
            }),
            v = (0, a.useMemo)(
              () => ({ selectedIndex: h.selectedIndex }),
              [h.selectedIndex]
            ),
            x = (0, p.E)(s || (() => {})),
            w = (0, p.E)(h.tabs),
            E = (0, a.useMemo)(
              () => ({ orientation: c, activation: A, ...h }),
              [c, A, h]
            ),
            R = (0, p.E)(d ? e.selectedIndex : h.selectedIndex),
            P = (0, a.useMemo)(
              () => ({
                registerTab: (e) => (
                  y({ type: 1, tab: e }), () => y({ type: 2, tab: e })
                ),
                registerPanel: (e) => (
                  y({ type: 3, panel: e }), () => y({ type: 4, panel: e })
                ),
                change(e) {
                  R.current !== e && x.current(e),
                    d || y({ type: 0, index: e });
                },
              }),
              [y, d]
            );
          (0, g.e)(() => {
            y({ type: 0, index: null != o ? o : r });
          }, [o]);
          let B = (0, a.useRef)({ tabs: [], panels: [] }),
            S = { ref: m };
          return a.createElement(
            C.Provider,
            { value: B },
            a.createElement(
              k.Provider,
              { value: P },
              a.createElement(
                j.Provider,
                { value: E },
                E.tabs.length <= 0 &&
                  a.createElement(b, {
                    onFocus: () => {
                      var e, t;
                      for (let r of w.current)
                        if (
                          0 === (null == (e = r.current) ? void 0 : e.tabIndex)
                        )
                          return null == (t = r.current) || t.focus(), !0;
                      return !1;
                    },
                  }),
                (0, l.sY)({
                  ourProps: S,
                  theirProps: u,
                  slot: v,
                  defaultTag: D,
                  name: "Tabs",
                })
              )
            )
          );
        }),
        U = (0, l.yV)(function (e, t) {
          let { orientation: r, selectedIndex: n } = B("Tab.List"),
            a = (0, f.T)(t);
          return (0,
          l.sY)({ ourProps: { ref: a, role: "tablist", "aria-orientation": r }, theirProps: e, slot: { selectedIndex: n }, defaultTag: "div", name: "Tabs.List" });
        }),
        N = (0, l.yV)(function (e, t) {
          var r, n;
          let i = `headlessui-tabs-tab-${(0, u.M)()}`,
            {
              orientation: s,
              activation: o,
              selectedIndex: p,
              tabs: h,
              panels: b,
            } = B("Tab"),
            y = S("Tab"),
            E = B("Tab"),
            R = P("Tab"),
            C = (0, a.useRef)(null),
            j = (0, f.T)(C, t);
          (0, g.e)(() => y.registerTab(C), [y, C]);
          let k = R.current.tabs.indexOf(i);
          -1 === k && (k = R.current.tabs.push(i) - 1);
          let I = h.indexOf(C);
          -1 === I && (I = k);
          let D = I === p,
            T = (0, v.z)((e) => {
              var t;
              let r = e();
              if (r === d.fE.Success && "auto" === o) {
                let e = null == (t = (0, w.r)(C)) ? void 0 : t.activeElement,
                  r = E.tabs.findIndex((t) => t.current === e);
                -1 !== r && y.change(r);
              }
              return r;
            }),
            U = (0, v.z)((e) => {
              let t = h.map((e) => e.current).filter(Boolean);
              if (e.key === A.R.Space || e.key === A.R.Enter)
                return (
                  e.preventDefault(), e.stopPropagation(), void y.change(I)
                );
              switch (e.key) {
                case A.R.Home:
                case A.R.PageUp:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    T(() => (0, d.jA)(t, d.TO.First))
                  );
                case A.R.End:
                case A.R.PageDown:
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    T(() => (0, d.jA)(t, d.TO.Last))
                  );
              }
              return T(() =>
                (0, c.E)(s, {
                  vertical: () =>
                    e.key === A.R.ArrowUp
                      ? (0, d.jA)(t, d.TO.Previous | d.TO.WrapAround)
                      : e.key === A.R.ArrowDown
                      ? (0, d.jA)(t, d.TO.Next | d.TO.WrapAround)
                      : d.fE.Error,
                  horizontal: () =>
                    e.key === A.R.ArrowLeft
                      ? (0, d.jA)(t, d.TO.Previous | d.TO.WrapAround)
                      : e.key === A.R.ArrowRight
                      ? (0, d.jA)(t, d.TO.Next | d.TO.WrapAround)
                      : d.fE.Error,
                })
              ) === d.fE.Success
                ? e.preventDefault()
                : void 0;
            }),
            N = (0, a.useRef)(!1),
            Q = (0, v.z)(() => {
              var e;
              N.current ||
                ((N.current = !0),
                null == (e = C.current) || e.focus(),
                y.change(I),
                (0, x.Y)(() => {
                  N.current = !1;
                }));
            }),
            O = (0, v.z)((e) => {
              e.preventDefault();
            }),
            Z = (0, a.useMemo)(() => ({ selected: D }), [D]),
            G = e,
            Y = {
              ref: j,
              onKeyDown: U,
              onMouseDown: O,
              onClick: Q,
              id: i,
              role: "tab",
              type: (0, m.f)(e, C),
              "aria-controls":
                null == (n = null == (r = b[I]) ? void 0 : r.current)
                  ? void 0
                  : n.id,
              "aria-selected": D,
              tabIndex: D ? 0 : -1,
            };
          return (0,
          l.sY)({ ourProps: Y, theirProps: G, slot: Z, defaultTag: "button", name: "Tabs.Tab" });
        }),
        Q = (0, l.yV)(function (e, t) {
          let { selectedIndex: r } = B("Tab.Panels"),
            n = (0, f.T)(t),
            i = (0, a.useMemo)(() => ({ selectedIndex: r }), [r]);
          return (0,
          l.sY)({ ourProps: { ref: n }, theirProps: e, slot: i, defaultTag: "div", name: "Tabs.Panels" });
        }),
        O = l.AN.RenderStrategy | l.AN.Static,
        Z = (0, l.yV)(function (e, t) {
          var r, n, i, s;
          let { selectedIndex: o, tabs: c, panels: A } = B("Tab.Panel"),
            d = S("Tab.Panel"),
            m = P("Tab.Panel"),
            p = `headlessui-tabs-panel-${(0, u.M)()}`,
            b = (0, a.useRef)(null),
            y = (0, f.T)(b, t);
          (0, g.e)(() => d.registerPanel(b), [d, b]);
          let v = m.current.panels.indexOf(p);
          -1 === v && (v = m.current.panels.push(p) - 1);
          let x = A.indexOf(b);
          -1 === x && (x = v);
          let w = x === o,
            E = (0, a.useMemo)(() => ({ selected: w }), [w]),
            R = e,
            C = {
              ref: y,
              id: p,
              role: "tabpanel",
              "aria-labelledby":
                null == (n = null == (r = c[x]) ? void 0 : r.current)
                  ? void 0
                  : n.id,
              tabIndex: w ? 0 : -1,
            };
          return w ||
            (null != (i = e.unmount) && !i) ||
            (null != (s = e.static) && s)
            ? (0, l.sY)({
                ourProps: C,
                theirProps: R,
                slot: E,
                defaultTag: "div",
                features: O,
                visible: w,
                name: "Tabs.Panel",
              })
            : a.createElement(h._, { as: "span", ...C });
        }),
        G = Object.assign(N, { Group: T, List: U, Panels: Q, Panel: Z });
      var Y = r(63801),
        V = r(88104),
        L = r(25675),
        W = r.n(L),
        z = r(6935),
        M = r.n(z),
        F = function (e) {
          var t = e.image,
            r = e.imageMobile,
            a = e.imageAlt,
            s = e.title,
            l = e.description;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: "w-4/5 mx-auto py-2 px-4",
                children: [
                  (0, n.jsx)("figure", {
                    className: (0, o.Z)(M().imageContainer, "sm:hidden"),
                    children: (0, n.jsx)(W(), {
                      src: r,
                      alt: a,
                      layout: "responsive",
                      quality: 100,
                      objectFit: "contain",
                      className: "crispImage",
                    }),
                  }),
                  (0, n.jsx)("figure", {
                    className: (0, o.Z)(M().imageContainer, "hidden sm:block"),
                    children: (0, n.jsx)(W(), {
                      src: t,
                      alt: a,
                      layout: "responsive",
                      quality: 100,
                      objectFit: "contain",
                      className: "crispImage",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(i.Z.Content, {
                children: [
                  (0, n.jsx)(i.Z.Header, {
                    className: "md:items-start text-white",
                    children: (0, n.jsx)(V.Z, { tag: "h4", children: s }),
                  }),
                  (0, n.jsx)(i.Z.Description, {
                    className: "text-white",
                    children: l,
                  }),
                ],
              }),
            ],
          });
        },
        K = r(86972),
        H = r(16004),
        J = [
          {
            title: "Project Submission",
            description: (0, n.jsxs)("span", {
              children: [
                "Stop dirty deals from ever getting submitted with a custom-made workflow that ensures every deal has a utility bill, signed loan docs, cleared stips and more ",
                (0, n.jsx)("span", {
                  className: "font-bold",
                  children: "before",
                }),
                " the project hits your ops team. Enerflo clearly shows your sales reps what\u2019s missing and what they need to fix before the system allows them to submit the project automatically to your teams or 3rd party systems. Manual entry forms? No, thank you.",
              ],
            }),
            image: H.Z,
            imageMobile: {
              src: "/_next/static/media/enerflo-solar-project-submission-workflow-mobile.31736511.png",
              height: 371,
              width: 594,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAeklEQVR42iWLMQ7CMBAE93xrQzqq1Pz/M4iCHvgChESJfYuVTDHFSGPf6XeL0LVkriRNEDpdViQ9aeajOy5OR0RAODAIIY2c5nn1lLA1tr0fkvVTwMrzqQzJDDnTAcO8LCglIyWiRgxsoUdVfFpgs45gqD3eXy1vFe8/DbE8YkZdtBwAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 5,
            },
            imageAlt:
              "Stop dirty deals in their tracks with Enerflo\u2019s Solar Project Submission workflow and requirements.",
          },
          {
            title: "Digital Welcome Calls",
            description:
              "CallPilot\u2019s Digital Welcome Call integration with Enerflo enables a smoother, faster Welcome Call experience for sales reps and customers, with on-demand 24/7, fully-automated, cloud-based surveys. Sales Reps and customers enjoy zero hold times and reduced call times, and installers enjoy data accuracy and integrity without recording or transcription errors. ",
            image: K.Z,
            imageMobile: K.Z,
            imageAlt:
              "Enerflo Digital Welcome Calls powered by CallPilot, a cloud-based enterprise level TPV application.",
          },
          {
            title: "Project Milestone Management",
            description:
              "Your project milestones are enhanced with automated notifications sent to both customers and sales reps to inform them on progress. Reduce calls and needless communications. Plus, with seamless 3rd party CRM integrations, Enerflo can automatically move milestones based on changes made in an external tool, keeping everything in sync.",
            image: {
              src: "/_next/static/media/enerflo-solar-platform-project-milestone-management.f68bcb02.png",
              height: 492,
              width: 680,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAsklEQVR42k3BzwoBQRgA8El5CycOXsEbcJMLpcRbeBClXJylPIWjk9xEbRHt7qz58818+81sYzju78deKW8IZZrsDywtPgoOaV5shdJ7sGWf1SHSUkidFBJOzoe7r8KcPZ5ZK89Uz0DocgMrJExub38+XsPtwcOUCQMbDioKNDG3KqJzsSQfyVU+xu+ESTJjjnqXWblW1pyJnHfOAZK3H/AzVlcI6HChRxrsIBU4vCSy/QM3QIvc8OGVHAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageMobile: {
              src: "/_next/static/media/enerflo-solar-platform-project-milestone-management-mobile.75d54738.png",
              height: 452,
              width: 617,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAuElEQVR42k3Ovw7BQBwA4IuIxGY1eTpPYLV5ATajBYnJbLFKxFgWRaJpnPau9+93d71eezr6nuBDKSYdAbaLWlLbSSHUEWd0n1N+EMos0D8AM6OMx6Tg56ry16Zpduj1wEOawUiSMCgA5trq+zsrL4fI36Kk3qCMs5RIEZiG8FGskdbU2ri6UC54X28R1eKUG5F8gcVCK6hKF0pXhsq5YJ3fozgnPaygj1ptcMwlrKXSSwl29cQw/QHil5YxiRQOpwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageAlt:
              "Enerflo Project Milestone Management is tailored to the unique milestones that define the work involved for your company to get glass on roof.",
          },
          {
            title: "Automate Communication",
            description:
              "Easily send communications via SMS or email for your customers and sales reps. Send communications when key milestones are reached and show upcoming site surveys or install appointments on the Enerflo Customer Portal. Project Managers gain visibility on all inbound communication from the customer or sales rep on every project to keep everything running smoothly.",
            image: {
              src: "/_next/static/media/enerflo-solar-platform-automated-communications.1b97bf12.png",
              height: 739,
              width: 1020,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AfDw8gDy8/ReEBAQTQD///EFBgYCAgUEBe7t9u3blcKIAf///wC9w8O8NTAvQwoGBgD+AP4A5ebuANbk/fnW5w9EAcPEyFbw7/Cp9vTx+tO+wgIrPzz/P0lEBf39+9QdFu8tAdjZ3FT//Pur2drc/8y6vwE0R0EAQ0dIAPr6+92WjaUqAfL09lgLCwmn9fP2/uvr8PcLCwkACw4LC/79/s/DxcQ0Ae3u8SQFBANbAP//w/z09twECgoGAwcEAQAAAPjp0I3jjeBpPZW4tqUAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageMobile: {
              src: "/_next/static/media/enerflo-solar-platform-automated-communications-mobile.c3638b78.png",
              height: 469,
              width: 632,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Af///wDg4eSeFhYVTQIAAO8EBwYD//7+AObt+wPk0eeGAYaDiCQzPTm6NC0rIQUCAQD/AP8A7/D0ANjk+ADn9hJyAb7AxIz18vNz6Ofl+sagrQQqTUQAXmliAP8B/QIWB/4yAdrb3YAC//9/2Nvd/tjJzAIgLikAQkZIAAIBAgDw8vM/AfP2+IoLCQd18/L1++7u9PkJCQYCCw4LAP7+/gD+/v4/Ae7v8ToEBANJ//39uvry898FCgsGBAkH/wEBAQAAAQPlfdZeb3z8gZsAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageAlt:
              "Enerflo easily automates communications via SMS or email messages for solar customers and sales reps.",
          },
          {
            title: "Project Action Groups",
            description:
              "Enerflo\u2019s Project Action Groups enable you to group custom fields and milestones to ensure data gets added properly at each step. Create as many action groups as you need, auto-assign owners for each task and automate notifications for them when it\u2019s their turn to fulfill that part of the project install. Use your new-found time to grow your business\u2026 or take a vacation.",
            image: {
              src: "/_next/static/media/enerflo-solar-platform-project-action-groups.c5b50e11.png",
              height: 739,
              width: 1020,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAoUlEQVR42kWOuw3CQBBEZ2+NP7IzaMDVkNEBDZBTEgkSGU0gUkDuAUgA+3znWxafQGKk0QTvBUP7w40AaFNc52VS1mxYAslrNdtsAUiEaC7Hiqp2l6Q0JZBXRU4hXQI4I+bxbGtrvXonajuvzgXt7LAYiyQKeZYIG+oNm5TlPYybqSIA+ApWmK0zOaAAOEJMjE7+woB7H2StCv4dK4RxAoAPYBRKEVIWNkYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageMobile: {
              src: "/_next/static/media/enerflo-solar-platform-project-action-groups-mobile.cd6effc5.png",
              height: 459,
              width: 392,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAuElEQVR42hXLLU4DURSA0e/+vHkdHAkBQZCVGBIMEskGWACCdbERNIqwAgQ4HCR0Oq/z7m2rjjry9JZn6//pfhhWFJckoYO+G6/+ePFyF8PpQ61lk4kCAZzc9N/m67x+rhG31mQiEeS4c+x5eS7TvHyZ2hUCEQCgCpl8a/Q2ZzSKEeQuY5nCNRGJ2etQMFUgsxaHYolAUfCfjY2tw2DYdoGVK9slqS6j94gPzfjbdZudLgfT6DVCP/cEalejAnF6cwAAAABJRU5ErkJggg==",
              blurWidth: 7,
              blurHeight: 8,
            },
            imageAlt:
              "Enerflo\u2019s Project Action Groups enable you to group custom fields and milestones to ensure data gets added properly at each step.",
          },
          {
            title: "Project Tasks",
            description:
              "Leave no stone unturned. When specific things need to get done, create tasks for your ops team or sales reps in Enerflo, or automatically push tasks from your 3rd party tool using our Task API. Automatically send reminders on uncompleted tasks and quickly see projects that have outstanding tasks. Simply put, make sure stuff is getting done.",
            image: {
              src: "/_next/static/media/enerflo-solar-platform-tasks.07208fb7.png",
              height: 739,
              width: 1020,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAsklEQVR42kWLPw5BQRDGZ3dnn0hIFC5BHEIiShJuolIoXULhABSuQDiEUqtRCG/z3v6ZHfMqX/LLTL78PrXebAfLxWw6Gg6DD75AY0xZg387f+rY7wsk4/PleiDm/ad0z6oO7KpY1z6+5Z+jCMlo5TRAWVhUFhEYspW+xaw7jVAIPcHkzBBjAESbiKnIzKkRHony0Sdw1uIEtYYso0gESq7wDxGttFKjKgV3e93bfdvd/QDAulS9hnp2ygAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageMobile: {
              src: "/_next/static/media/enerflo-solar-platform-tasks-mobile.a892a1c1.png",
              height: 446,
              width: 585,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAp0lEQVR42k3NLQ4CMRDF8TfTadllPwRn4DyINSSsIeEuCBIUN8ES1oPjBCiwOGDTdkolP/XyzJ92+8O2Xy3rtm3V+zATMfz1KEevx6bQi5yGodqs+6mxFoB2zkrl8iSiDkhPaaoyEFPIB5wYtWKgKSmQGGCIqtYEqpBFTYjjCGdtCkkRNKoQ6JrbE/GBCycLw4zMODCEuSD8iVHPIMyZ6HN73SfvMD5+lftA8rry1OwAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageAlt:
              "Create tasks for your ops team or sales reps in Enerflo, or push tasks from your 3rd party tool using our Task API.",
          },
          {
            title: "Build Custom Reports",
            description:
              "Holy shiznit, Batman, that\u2019s a ton of data! Enerflo Custom Reports cut through the noise. Modify columns, adjust sorting, filter on specific data and save as many as you need to easily refer to them later. Only want to see jobs that have an MPU? Done. Want to create an aging report of jobs that are still in permitting after 2 weeks. No problem. Get to the data you need, quickly and easily.",
            image: {
              src: "/_next/static/media/enerflo-solar-platform-custom-reports.e18b6253.png",
              height: 996,
              width: 1360,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAtElEQVR42hXOParCQBSG4e+cSWJuCLcQERFEdBH22gnux1UJFoK7EOz9RxRsRInJjBnPMb71U7x0vt4SVeqGYaAEIiH4ei0eMNP4Vbopqoaz+UIK522WFy63vrjs1npaL+W43/YZgMmzB8WRqYE5igLEd5/i4FpZ8JfqD6gxBlUfAoSYRO9PfDZnJS8IALAqoIARUYgApYlgk/QfzPwDK1f6SfWgRW7JeinbSTjq9JqNt38/vsjXV+QaedrEAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageMobile: {
              src: "/_next/static/media/enerflo-solar-platform-custom-reports-mobile.e5fe70ad.png",
              height: 493,
              width: 572,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA3ElEQVR42h2LPUoEQRBGq6qrewYRdbt3VcTQQDQ0MDDxJAuCxzAx8gCewFBvYWJgbiLCBgaCsvizOjM7VlfZLnwfL3kPzWw0/Wxc1zYgGRBA+mHc2A0exznrC56dXzydnoxHaZgEzRCItZs+r+LbA2s9uKbLq5v1yrsV9lV03g1qxvRFge4gwsTHTDubaz0iQpmqmllh3aptP7aQXgVIcnYLAYAcIZbTzDLc/77DRH6UAWD+n5ZYRLS4pLW5sMcREi8vcYmOP2aN99W3dfOexFVtcHK4f7B1ZBxu/wDP712nMxE2KQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 7,
            },
            imageAlt:
              "Create and save as many Enerflo Custom Reports as you\u2019d like to get the data you need fast.",
          },
          {
            title: "Integrated Change Orders",
            description:
              "Enerflo reduces change orders by improving accuracy upstream, but... they still happen. When they do, Enerflo\u2019s intuitive change order process allows you to modify adders, pricing, system details and more. Easily send addendums to your customers for signature and display the new details automatically in your reporting, while keeping a history of all changes made. As if that wasn\u2019t enough, Enerflo automatically syncs the data to the integrated lender, saving your team the headache of manually updating changes to reach NTP.",
            image: {
              src: "/_next/static/media/enerflo-solar-platform-change-orders.bbba5b51.png",
              height: 492,
              width: 680,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAnElEQVR42j2KMQ6CQBBF588OLEpBQkdrodfxGCb2nsoz2NrrCYgNGisJEZDdcZeCSeb//LwHClfXTZrmqyPAe2ttq6oFqTsFdJUoFGWxA+PALFsApOrJgKvIZA4DT6pdYjSU9mDKRGRaBCVOJu9y7xCnFeYIeBHWVhrnzV0JG2Z83n1bjsP4iwxeFaFDDBmRqcJP58eFb93zRUTfP7oxOMqjf3ytAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageMobile: {
              src: "/_next/static/media/enerflo-solar-platform-change-orders-mobile.9c0a37e4.png",
              height: 404,
              width: 409,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvklEQVR42iXHsU0DURBF0fdmZv+usAMQCST0QiV0QA1UQGkUQABCIBGazGj/n3ley1c3Ofz8+Llf9runBF9IO8zz7Gamqmqq/IrdzfVzC39099kj7ioT5o6+JqJNx7ha2iDRqwBJBZKqkl0aVlnYTKgQBriRUrJNtpkwQyJYcCaaA0sAyBVBIZyIYwVNxDqEf5gAadRSfXWfHIrb/aSR8m2QcJxr4aMShJYYvb96+O9EewDqD6AB0tvhvZX0fQJ7hF0hU+Gg4wAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
            imageAlt:
              "Enerflo\u2019s intuitive change order process allows modification of adders, pricing, system details and more.",
          },
        ],
        q = function () {
          return (0, n.jsx)("div", {
            className: "space-x-12 items-start hidden lg:flex",
            children: (0, n.jsxs)(G.Group, {
              children: [
                (0, n.jsx)(G.List, {
                  className: "space-y-2 flex-shrink-0 sticky top-16 p-6",
                  children: J.map(function (e) {
                    return (0, n.jsx)(
                      G,
                      {
                        className: function (e) {
                          var t = e.selected;
                          return (0, o.Z)(
                            "flex justify-between items-center space-x-4 border-2 p-4 w-full whitespace-nowrap",
                            t
                              ? "text-gray-800 border-white bg-gradient-to-r from-white to-[#B2DAFF]"
                              : "text-white border-primary bg-navy"
                          );
                        },
                        children: function (t) {
                          var r = t.selected;
                          return (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("span", { children: e.title }),
                              (0, n.jsx)(Y.XCv, {
                                className: (0, o.Z)(
                                  "h-5 w-5",
                                  r && "text-primary"
                                ),
                              }),
                            ],
                          });
                        },
                      },
                      e.title
                    );
                  }),
                }),
                (0, n.jsx)(G.Panels, {
                  className: "xl:p-10",
                  children: J.map(function (e) {
                    return (0,
                    n.jsx)(G.Panel, { children: (0, n.jsx)(F, (0, s.Z)({}, e)) }, e.title);
                  }),
                }),
              ],
            }),
          });
        },
        X = r(16065),
        _ = r(25296),
        $ = r(86042),
        ee = (0, a.forwardRef)(function (e, t) {
          var r = e.step,
            a = e.className;
          return (0,
          n.jsx)("div", { className: (0, o.Z)("inline-flex items-center flex-col", a), ref: t, children: (0, n.jsx)(F, (0, s.Z)({}, r)) });
        });
      ee.displayName = "StepRenderer";
      var te = (0, $.kT)(
          function () {
            return (0, n.jsx)("div", {
              className: "lg:hidden",
              children: (0, n.jsxs)("div", {
                className: "space-y-2",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex justify-center items-center space-x-4",
                    children: [
                      (0, n.jsx)(X.Q1, {
                        className:
                          "p-0 text-gray-300 transition-opacity disabled:opacity-30",
                      }),
                      (0, n.jsx)(_.Z, { inactiveClassName: "bg-gray-300" }),
                      (0, n.jsx)(X.aW, {
                        className:
                          "p-0 text-gray-300 transition-opacity disabled:opacity-30",
                      }),
                    ],
                  }),
                  (0, n.jsx)(X.ZP, { StepRenderer: ee }),
                ],
              }),
            });
          },
          { steps: J }
        ),
        re = function () {
          return (0, n.jsx)("div", {
            className: "bg-gradient-to-tr from-navy-dark to-primary",
            children: (0, n.jsx)(i.Z, {
              children: (0, n.jsxs)("div", {
                className: "w-full",
                children: [(0, n.jsx)(q, {}), (0, n.jsx)(te, {})],
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
    6935: function (e) {
      e.exports = { imageContainer: "features-list_imageContainer__keAj1" };
    },
    46045: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return i;
        },
        _: function () {
          return s;
        },
      });
      var n = r(12351);
      var a,
        i =
          (((a = i || {})[(a.None = 1)] = "None"),
          (a[(a.Focusable = 2)] = "Focusable"),
          (a[(a.Hidden = 4)] = "Hidden"),
          a);
      let s = (0, n.yV)(function (e, t) {
        let { features: r = 1, ...a } = e,
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
        n.sY)({ ourProps: i, theirProps: a, slot: {}, defaultTag: "div", name: "Hidden" });
      });
    },
    20943: function (e, t, r) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    13375: function (e, t, r) {
      "use strict";
      function n(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    29815: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(20943);
      var a = r(13375);
      var i = r(91566);
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, n.Z)(e);
          })(e) ||
          (0, a.Z)(e) ||
          (0, i.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    91566: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(20943);
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return (0, n.Z)(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(r)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? (0, n.Z)(e, t)
              : void 0
          );
        }
      }
    },
  },
]);
//# sourceMappingURL=2706.88a65f28e52ac132.js.map
