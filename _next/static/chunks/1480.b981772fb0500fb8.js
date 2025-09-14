(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1480],
  {
    16065: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q1: function () {
          return d;
        },
        aW: function () {
          return m;
        },
      });
      var r = n(29815),
        o = n(85893),
        a = n(86010),
        s = n(67294),
        i = n(63801),
        c = n(92761),
        u = n.n(c),
        l = n(86042),
        d = function (e) {
          var t = e.className,
            n = void 0 === t ? u().carouselButtonBlue : t,
            r = (0, l.ZP)(),
            a = r.goToPrevious,
            s = r.stepIndex,
            c = r.infinite;
          return (0, o.jsx)("button", {
            onClick: a,
            className: n,
            disabled: !c && 0 === s,
            "aria-label": "Previous",
            children: (0, o.jsx)(i.wyc, { className: u().carouselButtonIcon }),
          });
        },
        m = function (e) {
          var t = e.className,
            n = void 0 === t ? u().carouselButtonBlue : t,
            r = (0, l.ZP)(),
            a = r.goToNext,
            s = r.stepIndex,
            c = r.steps,
            d = r.infinite;
          return (0, o.jsx)("button", {
            onClick: a,
            className: n,
            disabled: !d && s === c.length - 1,
            "aria-label": "Next",
            children: (0, o.jsx)(i.XCv, { className: u().carouselButtonIcon }),
          });
        },
        f = ["transition-transform", "duration-300"];
      t.ZP = function (e) {
        var t = e.StepRenderer,
          n = (0, l.ZP)(),
          i = n.containerRef,
          c = n.stepIndex,
          u = n.startSwipe,
          d = n.moveSwipe,
          m = n.endSwipe,
          h = n.steps,
          p = n.activeStepRef,
          g = n.infinite,
          A = (0, s.useRef)(null),
          v = (0, s.useRef)(c),
          y = (0, s.useRef)(null),
          w = (0, s.useRef)(0),
          b = (0, s.useCallback)(
            function () {
              var e;
              if (i.current && p.current) {
                w.current = window.innerWidth;
                var t =
                  null === (e = p.current.getBoundingClientRect()) ||
                  void 0 === e
                    ? void 0
                    : e.height;
                i.current.style.height = "".concat(t, "px");
              }
            },
            [i, p]
          ),
          x = (0, s.useCallback)(
            function () {
              w.current !== window.innerWidth &&
                ((w.current = window.innerWidth), b());
            },
            [b]
          );
        return (
          (0, s.useEffect)(
            function () {
              var e,
                t = 0 === c && v.current === h.length - 1,
                n = c === h.length - 1 && 0 === v.current;
              A.current &&
                (g && (t || n)
                  ? ((e = A.current.classList).remove.apply(e, (0, r.Z)(f)),
                    (A.current.style.transform = n
                      ? "translateX(-".concat(100 * (c + 1), "%)")
                      : "translateX(100%)"),
                    y.current && clearTimeout(y.current),
                    (y.current = setTimeout(function () {
                      var e;
                      A.current &&
                        ((e = A.current.classList).add.apply(e, (0, r.Z)(f)),
                        (A.current.style.transform = n
                          ? "translateX(-".concat(100 * c, "%)")
                          : "translateX(0%)"));
                    }, 10)))
                  : (A.current.style.transform = "translateX(-".concat(
                      100 * c,
                      "%)"
                    )));
              return (
                (v.current = c),
                function () {
                  y.current && clearTimeout(y.current);
                }
              );
            },
            [c, g, h.length]
          ),
          (0, s.useEffect)(
            function () {
              b();
            },
            [c, b]
          ),
          (0, s.useEffect)(
            function () {
              return (
                window.addEventListener("resize", x),
                function () {
                  window.removeEventListener("resize", x);
                }
              );
            },
            [x]
          ),
          (0, o.jsx)("div", {
            className: "whitespace-nowrap overflow-hidden transition-all",
            ref: i,
            children: (0, o.jsx)("div", {
              className: a.Z.apply(void 0, (0, r.Z)(f)),
              onTouchStart: u,
              onTouchMove: d,
              onTouchEnd: m,
              ref: A,
              children: h.map(function (e, n) {
                return (0,
                o.jsx)(t, { step: e, className: (0, a.Z)("w-full align-top whitespace-normal transition-opacity", n === c ? "opacity-1" : "opacity-0"), ref: n === c ? p : void 0 }, (null === e || void 0 === e ? void 0 : e.title) || n);
              }),
            }),
          })
        );
      };
    },
    25296: function (e, t, n) {
      "use strict";
      var r = n(85893),
        o = n(86010),
        a = (n(67294), n(86042));
      t.Z = function (e) {
        var t = e.className,
          n = e.inactiveClassName,
          s = void 0 === n ? "bg-gray-600" : n,
          i = (0, a.ZP)(),
          c = i.stepIndex,
          u = i.steps,
          l = i.goToStep;
        return (0, r.jsx)("div", {
          className: (0, o.Z)("flex space-x-2 items-center justify-center", t),
          children: u.map(function (e, t) {
            return (0, r.jsx)(
              "div",
              {
                className: (0, o.Z)(
                  "h-3 w-3 rounded-full transition-colors shadow-md",
                  t === c ? "bg-primary" : s
                ),
                onClick: function () {
                  return l(t);
                },
              },
              e.title
            );
          }),
        });
      };
    },
    86042: function (e, t, n) {
      "use strict";
      n.d(t, {
        kT: function () {
          return u;
        },
        sj: function () {
          return c;
        },
      });
      var r = n(26042),
        o = n(69396),
        a = n(85893),
        s = n(67294),
        i = (0, s.createContext)({}),
        c = function (e) {
          var t = e.children,
            n = e.steps,
            r = void 0 === n ? [] : n,
            o = e.infinite,
            c = e.autoPlayDuration,
            u = (0, s.useState)(0),
            l = u[0],
            d = u[1],
            m = (0, s.useRef)(0),
            f = (0, s.useRef)(0),
            h = (0, s.useRef)(null),
            p = (0, s.useRef)(null),
            g = (0, s.useRef)(null),
            A = (0, s.useMemo)(
              function () {
                return r || [];
              },
              [r]
            ),
            v = function () {
              h.current && (h.current.style.transform = "");
            },
            y = (0, s.useCallback)(
              function () {
                0 !== l
                  ? d(function (e) {
                      return e - 1;
                    })
                  : o
                  ? d(A.length - 1)
                  : v();
              },
              [l, o, A.length]
            ),
            w = (0, s.useCallback)(
              function () {
                l !== A.length - 1
                  ? d(function (e) {
                      return e + 1;
                    })
                  : o
                  ? d(0)
                  : v();
              },
              [l, o, A.length]
            ),
            b = (0, s.useCallback)(function (e) {
              d(e);
            }, []),
            x = (0, s.useCallback)(function (e) {
              var t;
              (null === (t = e.touches) || void 0 === t ? void 0 : t[0]) &&
                ((m.current = e.touches[0].clientX),
                (f.current = e.touches[0].clientX));
            }, []),
            j = (0, s.useCallback)(
              function (e) {
                var t;
                if (
                  (null === (t = e.touches) || void 0 === t ? void 0 : t[0]) &&
                  (o ||
                    !(
                      (0 === l && m.current < f.current) ||
                      (l === A.length - 1 && m.current > f.current)
                    ))
                ) {
                  var n = Math.abs(m.current - f.current);
                  (f.current = e.touches[0].clientX),
                    h.current &&
                      n > 10 &&
                      (h.current.style.transform = "translateX(".concat(
                        -(m.current - f.current),
                        "px)"
                      ));
                }
              },
              [l, o, A]
            ),
            N = (0, s.useCallback)(
              function () {
                Math.abs(m.current - f.current) > 75
                  ? m.current > f.current
                    ? w()
                    : y()
                  : v(),
                  (m.current = 0),
                  (f.current = 0);
              },
              [w, y]
            ),
            C = (0, s.useCallback)(function (e) {
              e.cancelable &&
                Math.abs(m.current - f.current) > 10 &&
                e.preventDefault();
            }, []),
            B = (0, s.useMemo)(
              function () {
                return {
                  containerRef: p,
                  endSwipe: N,
                  moveSwipe: j,
                  startSwipe: x,
                  goToStep: b,
                  goToNext: w,
                  goToPrevious: y,
                  stepIndex: l,
                  steps: A,
                  activeStepRef: h,
                  infinite: o,
                };
              },
              [N, j, x, b, w, y, l, A, o]
            );
          return (
            (0, s.useEffect)(
              function () {
                return (
                  v(),
                  c &&
                    (g.current = setTimeout(function () {
                      w();
                    }, c)),
                  function () {
                    g.current && clearTimeout(g.current);
                  }
                );
              },
              [l, w, c]
            ),
            (0, s.useEffect)(
              function () {
                var e = p.current;
                return (
                  e && e.addEventListener("touchmove", C, { passive: !1 }),
                  function () {
                    e && e.addEventListener("touchmove", C, { passive: !1 });
                  }
                );
              },
              [C]
            ),
            (null === A || void 0 === A ? void 0 : A.length)
              ? (0, a.jsx)(i.Provider, { value: B, children: t })
              : null
          );
        };
      t.ZP = function () {
        return (0, s.useContext)(i);
      };
      var u = function (e, t) {
        return function (n) {
          return (0, a.jsx)(
            c,
            (0, o.Z)((0, r.Z)({}, t), {
              children: (0, a.jsx)(e, (0, r.Z)({}, n)),
            })
          );
        };
      };
    },
    61480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var r = n(85893),
        o = n(67294),
        a = n(86010),
        s = n(92761),
        i = n.n(s),
        c = n(25296),
        u = n(86042),
        l = n(88104),
        d = n(25675),
        m = n.n(d),
        f = n(16065),
        h = n(13551),
        p = [
          {
            title: "First Impression",
            description:
              "Help customers close themselves by making a great first impression. Share a unique link to your company-branded customer portal to start building trust immediately. Customize the portal to show your customers how your company is different (and better!) by embedding information, videos and other custom content & including other installs you\u2019ve completed successfully. Automatically send appointment reminders and notifications after your first visit.",
            image: {
              src: "/_next/static/media/enerflo-solar-customer-engagement-first-impression.bfda6259.png",
              height: 635,
              width: 823,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAvklEQVR42g3LvU4CQRQG0G/u3hmXpcRsaDTRiA9AZeUjmJj4jBZW+gwmVEBNSwKBApaEn53ZzMy90JzumP10/mOde5MsrUomACBmMSlW2fsJT9ab0Wq5ePj4/MJgUMMYIMUIyhkU04ifX1+64eMQturnpEq9sgSYRUUKFXT8VN9rj2v4wmroglpmNIed/v59Yzx+ByVBlW6Y45H7wZN1lgDi9XYPxe0eYv4/ubszFTkwGUNNA9+2SsaVl0uYXQEIkFhkcJl1LgAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageAlt:
              "Make a great first impression by giving every customer their own customer portal with Enerflo.",
          },
          {
            title: "Presentation",
            description:
              "Presentation is everything. Say goodbye to snooze-fest PDF proposals and engage your customers with Optimus, the proposal tool that\u2019s raising the bar on the industry standard. Unlike the typical static PDF, Optimus serves each proposal in a stunning, interactive way that\u2019s sure to impress. Integrate your favorite design tool. Personalize each proposal with annotations and notes for your customer. When it\u2019s ready to share, automatically send it to their customer portal for easy reference. Share new messages with them to keep them engaged and moving forward. And if you have to, yes, you can export the proposal to PDF (if you gotta be old skool).",
            image: {
              src: "/_next/static/media/enerflo-solar-customer-engagement-presentation.ce1b6921.png",
              height: 655,
              width: 893,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAz0lEQVR4nA3OO2pCQRgG0O+fyfgOkgviI5ilBEJCsoRAmmwkpZBlWLgDwcongooWVlra+G4UrzJeZ7wzo9VpDy22B2OtZYJZpFJJCwKLCvEeYe1Wk3/EqN+q2/XeIJNN02MyjngiAc/zNlwI+Cd/SNXyn1tsLwijOUipEGiF58ILfn6/cVXnCTUbtSCQmvUHvYeriWC+XqKYL5jSf0noMByRcy698+Vrt9OpKnlEaB2evAy+Pt+gjZ1SoB1W81kxm8tXOOeGiHBPO6VU7O74Bp+cYm49u//dAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageAlt:
              "Wow your customers with Optimus, Enerflo\u2019s Solar Proposal Tool that stands head and shoulders above the rest.",
          },
          {
            title: "After the Close",
            description: (0, r.jsxs)("span", {
              children: [
                "Once the deal is closed, the customer portal automagically transforms into a",
                " ",
                (0, r.jsx)("span", {
                  className: "line-through",
                  children: "pizza",
                }),
                " solar tracker, to give your customer a view of the project and what\u2019s next. Personalize their experience with a branded welcome video that lets them know what to expect. Give them quick access to their signed documents or bill. They\u2019ll love the visibility into project progression.",
              ],
            }),
            image: {
              src: "/_next/static/media/enerflo-solar-customer-engagement-after-the-close.7ac25624.png",
              height: 618,
              width: 835,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxklEQVR42gVAy0oCYRT+zn8pnDAizS5GrbK2LVu1bd+iZ+kNepEQ30N3IiKIV1QEF4Ijw6jj3P5zhBr/jboIfTC7CCAFAs6sYSLycsct+vz67rg8fn+pvYGVBosDMcNqCyFqq2r1Pi5Vylhuhu62mMq5Poi14i78BR6NJOamVLZe4mE/ncjV9bOoywBPxQp3j4Ge7w7a5MxhlmbYb2PTH4xgSRCYtVpvQqCgMuNH6U+8mtX0Mfod95pIcxY/TOAKnn19uPs7Aeb3XpE9bYGjAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 6,
            },
            imageAlt:
              "Once the deal is closed, the Enerflo Customer Portal transforms to give your customer a view of the project and what\u2019s next.",
          },
          {
            title: "During the Install",
            description:
              "Keep your customer in the loop as milestones are reached. Have delays? Easily communicate those to your customers using our deal feed. Swap out their POC for a project manager. Allow your customer to reach out to their POCs via phone, email or chat. Automatically send notifications and updates as things progress to ease their concerns and keep them informed. All communications can be handled from within the customer portal.",
            image: {
              src: "/_next/static/media/enerflo-solar-customer-engagement-during-the-project.4e18146a.png",
              height: 592,
              width: 905,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnklEQVR4nA2MOw7CMAxAbcdOu5WJiQMwgMTSSyAGpA4sHK7iBJyjbCyM/IQECxJSSUQIMXnzew8f3W4rYmvD7JMmQkBlQ6TGhP7tFti2m72qny6bFRgRKJDhFwJoVl2IM7yczh2Lqatq8GURQiJISSnG+Hm++gl65w9FWY6dc6CqQLk0iBCBIEsNXm/3NRENCysjZprnRYAMGbJW5PgHLqU+SETLTOIAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 5,
            },
            imageAlt:
              "The Enerflo Customer Portal enables communications between everyone involved in the project, creating transparency and efficiency.",
          },
        ],
        g = (0, o.forwardRef)(function (e, t) {
          var n = e.step,
            o = e.className;
          return (0,
          r.jsxs)("div", { className: (0, a.Z)(o, "inline-flex flex-col-reverse items-center space-y-4 space-y-reverse md:space-y-0 md:space-x-8 lg:space-x-28 md:flex-row"), ref: t, children: [(0, r.jsxs)(h.Z.Content, { className: "md:w-1/2 px-0", children: [(0, r.jsx)(h.Z.Header, { className: "mt-0 md:items-start", children: (0, r.jsx)(l.Z, { tag: "h3", children: n.title }) }), (0, r.jsx)(h.Z.Description, { className: "text-white", children: n.description })] }), (0, r.jsx)("figure", { className: "w-full md:w-1/2", children: (0, r.jsx)(m(), { src: n.image, alt: n.imageAlt, layout: "responsive", quality: 100, placeholder: "blur", loading: "eager", className: "crispImage", sizes: "(min-width: 768px) 50vw, 100vw" }) })] });
        });
      g.displayName = "StepRenderer";
      var A = (0, u.kT)(
        function () {
          return (0, r.jsxs)("div", {
            className:
              "pt-10 bg-gradient-to-b from-white to-gray-100 relative z-0",
            children: [
              (0, r.jsx)("div", {
                className: "absolute bottom-0 w-full h-[50%] z-0 bg-navy",
              }),
              (0, r.jsx)("div", {
                className: "bg-navy pt-20 pb-10 transform skew-y-6",
                children: (0, r.jsx)(h.Z, {
                  className: "text-white -skew-y-6 lg:pt-8",
                  children: (0, r.jsxs)("div", {
                    className: "w-full space-y-4 px-6 sm:px-10 lg:px-14",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex justify-center items-center space-x-4",
                        children: [
                          (0, r.jsx)(f.Q1, {
                            className: (0, a.Z)(
                              i().carouselButtonBlue,
                              "!p-0 border-none"
                            ),
                          }),
                          (0, r.jsx)(c.Z, { inactiveClassName: "bg-gray-400" }),
                          (0, r.jsx)(f.aW, {
                            className: (0, a.Z)(
                              i().carouselButtonBlue,
                              "!p-0 border-none"
                            ),
                          }),
                        ],
                      }),
                      (0, r.jsx)(f.ZP, { StepRenderer: g }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        { steps: p }
      );
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
          return s;
        },
      });
      var r = n(20943);
      var o = n(13375);
      var a = n(91566);
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (0, o.Z)(e) ||
          (0, a.Z)(e) ||
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
          return o;
        },
      });
      var r = n(20943);
      function o(e, t) {
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
//# sourceMappingURL=1480.b981772fb0500fb8.js.map
