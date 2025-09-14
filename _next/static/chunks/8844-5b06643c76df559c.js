(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8844],
  {
    8844: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          DemoSchemes: function () {
            return a;
          },
          default: function () {
            return y;
          },
        });
      var a,
        l = s(85893),
        n = s(67294),
        c = s(86010),
        r = s(2072),
        o = s(51299),
        i = s(88104),
        d = s(13551),
        m = s(645),
        u = s(11163),
        h = s(77055),
        p = s(94687),
        x = function () {
          var e = (0, n.useState)(!1),
            t = e[0],
            s = e[1],
            a = (0, u.useRouter)(),
            c = (0, m.ZP)(),
            r = (0, n.useCallback)(
              function (e) {
                if (void 0 !== window.analytics) {
                  var t = ""
                    .concat("/" !== a.asPath ? a.asPath : "", "/#")
                    .concat(e.target.id);
                  window.analytics.page({
                    title: "".concat(c.title, " | Callback Request"),
                    url: "".concat("https://enerflo.com").concat(t),
                    path: t,
                    referrer: "https://enerflo.com",
                  });
                }
                s(!0);
              },
              [c.title, a.asPath]
            );
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(h.Z, {
                isOpen: t,
                onClose: function () {
                  return s(!1);
                },
                contentClassName:
                  "sm:max-w-[95vw] md:max-w-2xl bg-white p-4 md:p-8 lg:px-10 space-y-4 md:space-y-6",
                children: [
                  (0, l.jsxs)("div", {
                    className: "text-left space-y-4 md:space-y-6",
                    children: [
                      (0, l.jsx)(i.Z, {
                        tag: "h5",
                        className: "text-primary",
                        children: "Request a Callback",
                      }),
                      (0, l.jsxs)("p", {
                        className: "font-light",
                        children: [
                          (0, l.jsx)("strong", {
                            className: "font-bold",
                            children: "Please complete the form below",
                          }),
                          " and one of our Platform Consultants will contact you within 1 business day (usually faster).",
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(p.Z, { show: t }),
                ],
              }),
              (0, l.jsx)("button", {
                className:
                  "btn btn-primary w-full xs:w-auto md:w-full uppercase font-bold",
                onClick: r,
                "aria-label": "Request a Callback",
                id: "request-a-callback",
                children: "Request a Callback",
              }),
            ],
          });
        },
        f = s(68223),
        w = s.n(f);
      !(function (e) {
        (e.DARK = "dark"), (e.LIGHT = "light"), (e.NAVY = "navy");
      })(a || (a = {}));
      var j = "New To Enerflo?",
        b = "Already Using Enerflo?",
        y = function (e) {
          var t = e.scheme,
            s = void 0 === t ? a.DARK : t;
          return (0, l.jsx)("div", {
            className: (0, c.Z)("py-4", w()["scheme-".concat(s)]),
            children: (0, l.jsxs)("div", {
              className: "w-full mx-auto px-6 xl:px-14",
              children: [
                (0, l.jsx)(d.I, {
                  title: j,
                  className: (0, c.Z)(w().sectionContainer, "flex-col"),
                  children: (0, l.jsxs)(d.Z.Inner, {
                    className: "flex-col",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "flex-grow px-6 w-full sm:px-10 text-center md:mb-8 md:text-center lg:px-14",
                        children: (0, l.jsx)(d.Z.Header, {
                          className: (0, c.Z)(w().header, "md:items-center"),
                          children: (0, l.jsx)(i.Z, { tag: "h2", children: j }),
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "flex flex-col text-center space-y-10 md:flex-row md:space-y-0 md:text-left",
                        children: [
                          (0, l.jsxs)("div", {
                            className:
                              "flex flex-col items-center w-full tracking-wide space-y-4 sm:pl-0 sm:pr-0 md:w-1/2 md:space-y-6 md:pr-10 lg:pr-16 md:pl-0 lg:pl-0",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "grow space-y-4 md:space-y-6",
                                children: [
                                  (0, l.jsx)(i.Z, {
                                    tag: "h5",
                                    className: "text-primary",
                                    children: "Book a Meeting Now",
                                  }),
                                  (0, l.jsxs)("p", {
                                    className: w().description,
                                    children: [
                                      (0, l.jsx)("strong", {
                                        className: "font-bold text-white",
                                        children: "Book a Discovery Call",
                                      }),
                                      " with an Enerflo Platform Consultant to find out if Enerflo is a good fit for your business, get pricing info and more.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsx)(o.Z, {}),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "flex flex-col items-center w-full tracking-wide space-y-4 border-t-2 border-primary border-dashed pt-8 md:w-1/2 md:space-y-6 md:border-l-2 md:border-t-0 md:pt-0 md:pl-10 lg:pl-16",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "grow space-y-4 md:space-y-6",
                                children: [
                                  (0, l.jsx)(i.Z, {
                                    tag: "h5",
                                    className: "text-primary",
                                    children: "Or, Request a Callback",
                                  }),
                                  (0, l.jsxs)("p", {
                                    className: w().description,
                                    children: [
                                      (0, l.jsx)("strong", {
                                        className: "font-bold text-white",
                                        children:
                                          "Please provide us with a few details",
                                      }),
                                      " so we know how best to reach you for a callback from an Enerflo Platform Consultant.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsx)(x, {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(d.I, {
                  title: b,
                  className: (0, c.Z)(w().sectionContainer, "flex-col"),
                  children: (0, l.jsxs)(d.Z.Inner, {
                    className:
                      "flex-col border-t-2 border-primary border-dashed pt-8",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "flex-grow px-6 text-center w-full sm:px-10 md:mb-8 md:text-center lg:px-14",
                        children: (0, l.jsx)(d.Z.Header, {
                          className: (0, c.Z)(w().header, "md:items-center"),
                          children: (0, l.jsx)(i.Z, { tag: "h2", children: b }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "flex flex-col text-center w-full md:flex-row",
                        children: (0, l.jsxs)("div", {
                          className:
                            "flex flex-col items-center w-full tracking-wide space-y-4 mx-auto md:w-1/2 md:space-y-6",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "grow space-y-4 md:space-y-6",
                              children: [
                                (0, l.jsx)(i.Z, {
                                  tag: "h5",
                                  className: "text-primary",
                                  children: "Get Help & Support",
                                }),
                                (0, l.jsxs)("p", {
                                  className: w().description,
                                  children: [
                                    (0, l.jsx)("strong", {
                                      className: "font-bold text-white",
                                      children:
                                        "Contact our incredible Support Team",
                                    }),
                                    " for help logging into Enerflo, help using Enerflo, or with any other questions or problems.",
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsx)(r.ZP, {
                              href: "/support",
                              className:
                                "btn btn-primary w-full xs:w-auto md:w-full uppercase font-bold",
                              onClick: function () {
                                return (0, m.MR)(
                                  "Utility Button",
                                  "Buttons",
                                  "Get Help & Support"
                                );
                              },
                              children: "Get Help & Support",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
    },
    51299: function (e, t, s) {
      "use strict";
      var a = s(85893),
        l = s(86010),
        n = s(9008),
        c = s.n(n),
        r = s(11163),
        o = s(67294),
        i = s(645),
        d = s(77055);
      t.Z = function (e) {
        var t = e.buttonText,
          s = void 0 === t ? "Book a Discovery Call" : t,
          n = e.buttonClassName,
          m = void 0 === n ? "w-full xs:w-auto md:w-full" : n,
          u = (0, o.useState)(!1),
          h = u[0],
          p = u[1],
          x = (0, r.useRouter)(),
          f = (0, i.ZP)(),
          w = (0, o.useState)(!1),
          j = w[0],
          b = w[1],
          y = (0, o.useCallback)(
            function (e) {
              if (void 0 !== window.analytics) {
                var t = ""
                  .concat("/" !== x.asPath ? x.asPath : "", "/#")
                  .concat(e.target.id);
                window.analytics.page({
                  title: "".concat(f.title, " | Discovery Call Request"),
                  url: "".concat("https://enerflo.com").concat(t),
                  path: t,
                  referrer: "https://enerflo.com",
                });
              }
              p(!0);
            },
            [f.title, x.asPath]
          );
        return (
          (0, o.useEffect)(function () {
            b(!0);
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(c(), {
                children:
                  j &&
                  h &&
                  (0, a.jsx)("script", {
                    async: !0,
                    type: "text/javascript",
                    src: "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js",
                  }),
              }),
              (0, a.jsx)(d.Z, {
                isOpen: h,
                onClose: function () {
                  return p(!1);
                },
                contentClassName: "sm:max-w-[95vw] md:max-w-2xl",
                children: (0, a.jsx)("div", {
                  className: "meetings-iframe-container",
                  "data-src":
                    "https://meetings.hubspot.com/mrrhino/discovery-call?embed=true",
                }),
              }),
              (0, a.jsx)("button", {
                className: (0, l.Z)(
                  "btn btn-primary text-sm sm:text-base uppercase font-bold whitespace-nowrap",
                  m
                ),
                onClick: y,
                "aria-label": s,
                id: "discover-enerflo-button",
                children: s,
              }),
            ],
          })
        );
      };
    },
    77055: function (e, t, s) {
      "use strict";
      var a = s(85893),
        l = s(86010),
        n = s(67294),
        c = s(11355),
        r = s(25408),
        o = s(63801),
        i = s(25840),
        d = s.n(i);
      t.Z = function (e) {
        var t = e.title,
          s = e.children,
          i = e.isOpen,
          m = e.onClose,
          u = e.contentClassName,
          h = e.closeButtonClassName,
          p = void 0 === h ? "top-4 right-4" : h,
          x = e.scheme,
          f = void 0 === x ? "light" : x;
        return (0, a.jsx)(c.u, {
          appear: !0,
          show: i,
          as: n.Fragment,
          children: (0, a.jsxs)(r.V, {
            as: "div",
            className: (0, l.Z)("relative z-50", d()["scheme-".concat(f)]),
            onClose: m,
            children: [
              (0, a.jsx)(c.u.Child, {
                as: n.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, a.jsx)("div", {
                  className: "fixed inset-0 bg-black bg-opacity-75",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: [
                  (0, a.jsxs)("button", {
                    className: (0, l.Z)(d().closeButton, p),
                    onClick: function () {
                      return m();
                    },
                    children: [
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Close modal",
                      }),
                      (0, a.jsx)(o.b0D, {
                        className: d().closeButtonIcon,
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "flex min-h-full items-center justify-center md:p-4 text-center",
                    children: (0, a.jsx)(c.u.Child, {
                      as: n.Fragment,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0 scale-95",
                      enterTo: "opacity-100 scale-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100 scale-100",
                      leaveTo: "opacity-0 scale-95",
                      children: (0, a.jsxs)(r.V.Panel, {
                        className: (0, l.Z)(
                          "w-full transform overflow-hidden relative align-middle transition-all",
                          u
                        ),
                        children: [
                          t &&
                            (0, a.jsx)(r.V.Title, {
                              as: "h3",
                              className:
                                "text-lg font-medium leading-6 text-gray-900",
                              children: t,
                            }),
                          s,
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    94687: function (e, t, s) {
      "use strict";
      var a,
        l = s(85893),
        n = s(67294);
      t.Z = function (e) {
        var t = e.show,
          s = function () {
            window.hbspt.forms.create({
              portalId: "21589371",
              formId: "63d6211f-94a7-41e8-aeaa-b465437342ec",
              target: "#requestCallbackForm",
            });
          };
        return (
          (0, n.useEffect)(
            function () {
              a
                ? s()
                : (((a = document.createElement("script")).src =
                    "https://js.hsforms.net/forms/v2.js"),
                  document.body.appendChild(a),
                  a.addEventListener("load", function () {
                    s();
                  }));
            },
            [t]
          ),
          (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)("div", { id: "requestCallbackForm" }),
              (0, l.jsx)("p", {
                className: "text-sm text-gray-500 text-center",
                children:
                  "By submitting these details, I agree to be contacted by SMS, Email or Phone.",
              }),
            ],
          })
        );
      };
    },
    68223: function (e) {
      e.exports = {
        "scheme-navy": "demo-form-section_scheme-navy__vpHNj",
        header: "demo-form-section_header__Javkd",
        description: "demo-form-section_description__WGSYQ",
        "scheme-dark": "demo-form-section_scheme-dark__xKJwT",
        sectionContainer: "demo-form-section_sectionContainer__skId3",
        "scheme-light": "demo-form-section_scheme-light__eV0XC",
      };
    },
    25840: function (e) {
      e.exports = {
        closeButton: "modal_closeButton__GqHWq",
        closeButtonIcon: "modal_closeButtonIcon__IuA0m",
      };
    },
  },
]);
//# sourceMappingURL=8844-5b06643c76df559c.js.map
