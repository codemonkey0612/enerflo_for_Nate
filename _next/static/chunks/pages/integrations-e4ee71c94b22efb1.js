(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [710],
  {
    80198: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/integrations",
        function () {
          return n(61718);
        },
      ]);
    },
    13551: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return d;
        },
      });
      var i = n(85893),
        r = (n(67294), n(86010)),
        s = n(21804),
        a = n.n(s),
        l = n(41664),
        o = n.n(l),
        c = function (e) {
          var t = e.children,
            n = e.className;
          return (0, i.jsx)("div", {
            className: (0, r.Z)("heroInner", n),
            children: t,
          });
        },
        d = function (e) {
          var t = e.title,
            n = e.children,
            s = e.className,
            l = void 0 === s ? "items-center" : s;
          return (0, i.jsx)("section", {
            id: a()(t),
            className: (0, r.Z)("heroSection", l),
            children: n,
          });
        },
        h = function (e) {
          var t = e.title,
            n = e.children,
            r = e.className;
          return (0, i.jsx)(d, {
            title: t,
            children: (0, i.jsx)(c, { className: r, children: n }),
          });
        };
      (h.Header = function (e) {
        var t = e.children,
          n = e.className;
        return (0, i.jsx)("div", {
          className: (0, r.Z)("heroHeader", n),
          children: t,
        });
      }),
        (h.Inner = c),
        (h.Content = function (e) {
          var t = e.children,
            n = e.className;
          return (0, i.jsx)("div", {
            className: (0, r.Z)("heroContent", n),
            children: t,
          });
        }),
        (h.Description = function (e) {
          var t = e.children,
            n = e.className,
            s = void 0 === n ? "text-gray-500" : n;
          return (0, i.jsx)("p", {
            className: (0, r.Z)("heroDescription", s),
            children: t,
          });
        }),
        (h.Action = function (e) {
          var t = e.children,
            n = e.className,
            s = e.href;
          return (0, i.jsx)(o(), {
            href: s,
            children: (0, i.jsx)("a", {
              className: (0, r.Z)("heroAction btn", n),
              children: t,
            }),
          });
        }),
        (t.Z = h);
    },
    62498: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return o;
        },
      });
      var i = n(26042),
        r = n(85893),
        s = n(88104),
        a = n(13551),
        l = function (e) {
          var t = e.title,
            n = e.description,
            i = e.action,
            s = e.figure;
          return (0, r.jsx)("div", {
            className:
              "border border-white rounded-lg bg-primary/30 p-4 shadow flex-1 md:p-6",
            children: (0, r.jsxs)("div", {
              className:
                "flex flex-col grow gap-10 h-full justify-between items-center",
              children: [
                (0, r.jsxs)("div", {
                  className: "text-center space-y-2",
                  children: [
                    (0, r.jsx)("figure", { children: s }),
                    (0, r.jsx)("p", {
                      className: "text-white text-lg md:text-xl font-semibold",
                      children: t,
                    }),
                    (0, r.jsx)("p", {
                      className: "text-gray-200",
                      children: n,
                    }),
                  ],
                }),
                (0, r.jsx)("a", {
                  href: i.href,
                  className:
                    "btn btn-primary text-sm w-full whitespace-nowrap min-w-[180px] text-center xs:w-auto md:text-base",
                  children: i.text,
                }),
              ],
            }),
          });
        },
        o = function (e) {
          var t = e.items;
          return (0, r.jsx)("div", {
            className:
              "flex flex-col flex-grow h-full gap-4 p-4 md:flex-row lg:gap-8",
            children: t.map(function (e) {
              return (0, r.jsx)(l, (0, i.Z)({}, e), e.title);
            }),
          });
        },
        c = function (e) {
          var t = e.title;
          return (0, r.jsx)(a.Z.Content, {
            children: (0, r.jsx)(a.Z.Header, {
              className: "md:items-start",
              children: (0, r.jsx)(s.Z, {
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
          i = void 0 === n ? "Explore more Enerflo Integrations" : n,
          s = e.children;
        return (0, r.jsx)("div", {
          className: "bg-gradient-to-br from-primary to-navy-dark md:py-10",
          children: (0, r.jsxs)(a.Z, {
            title: i,
            className: "text-white flex-col md:space-x-0 md:space-y-4",
            children: [
              s || (0, r.jsx)(c, { title: i }),
              (0, r.jsx)(o, { items: t }),
            ],
          }),
        });
      };
    },
    41099: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return l;
        },
      });
      var i,
        r = n(85893),
        s = n(25675),
        a = n.n(s);
      !(function (e) {
        (e.Overview = "overview"),
          (e.Design = "design"),
          (e.Sales = "sales"),
          (e.Finance = "finance");
      })(i || (i = {}));
      var l = {
        overview: {
          title: "Enerflo Integrations",
          description:
            "As the ONLY lead-to-PTO, open API solar platform, Enerflo has the most integrations in the industry. Do more with integrations.",
          figure: (0, r.jsx)(a(), {
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
          figure: (0, r.jsx)(a(), {
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
          figure: (0, r.jsx)(a(), {
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
          figure: (0, r.jsx)(a(), {
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
      var i = n(85893),
        r = (n(67294), n(88104)),
        s = n(13551),
        a = n(645),
        l = n(41664),
        o = n.n(l),
        c = n(63801);
      t.Z = function () {
        return (0, i.jsx)("div", {
          className: "bg-primary z-20 relative",
          children: (0, i.jsx)(s.Z, {
            className: "sm:py-12 lg:py-16",
            children: (0, i.jsx)(s.Z.Content, {
              children: (0, i.jsxs)("div", {
                className:
                  "flex flex-col flex-wrap items-center justify-center gap-2 -mx-2 -my-2 text-white text-center",
                children: [
                  (0, i.jsx)(r.Z, {
                    tag: "h3",
                    className: "mb-2",
                    children: "Partner with Enerflo",
                  }),
                  (0, i.jsx)("div", {
                    className: "text-base md:text-lg mx-2 my-2 max-w-lg",
                    children:
                      "Interested in integrating with Enerflo? Talk to the Enerflo Business Development team to get started.",
                  }),
                  (0, i.jsx)(o(), {
                    href: "/about/contact",
                    children: (0, i.jsxs)("a", {
                      className:
                        "btn btn-dark text-sm md:text-base flex items-center whitespace-nowrap mx-2 my-2",
                      onClick: function () {
                        return (0, a.MR)(
                          "Engagement Button",
                          "Buttons",
                          "Partner with Enerflo"
                        );
                      },
                      children: [
                        (0, i.jsx)("span", { children: "Contact Enerflo" }),
                        (0, i.jsx)(c.a3z, { className: "h-4 w-4 ml-2" }),
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
    61718: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var i = n(85893),
        r = n(88104),
        s = n(13551),
        a = n(62498),
        l = n(41099),
        o =
          "Enerflo Integrates with Software for Sales Qualification, Design, Finance and More",
        c = function () {
          return (0, i.jsx)(a.Z, {
            title: o,
            items: [l.l.sales, l.l.design, l.l.finance],
            children: (0, i.jsxs)(s.Z.Content, {
              className: "text-center",
              children: [
                (0, i.jsx)(s.Z.Header, {
                  children: (0, i.jsx)(r.Z, {
                    tag: "h2",
                    className: "leading-tight max-w-5xl",
                    children: o,
                  }),
                }),
                (0, i.jsx)("p", {
                  className: "text-gray-100 text-lg",
                  children:
                    "Learn more about how you can speed up your sales process and close deals faster with integrated software.",
                }),
              ],
            }),
          });
        },
        d = n(645),
        h = n(25675),
        m = n.n(h),
        x = n(41664),
        f = n.n(x),
        u = {
          src: "/_next/static/media/enerflo-ohm-analytics-case-study.290bae29.png",
          height: 248,
          width: 513,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAb0lEQVR42h2LMRICIQwA+f8Db3DGRoGAB0hIcnJoEdFit9lZM85568SjkzD+xIfM94cr8nid05sVS4Cke66ay/NPehQNcVciQYOtNeecRgAN3mvJRe8OdLNXFTnIENEGEHOtNS4SYk9riNbazMyXL/fmdvzYD3T9AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        g =
          "Sales Dealers, Installers (EPC) and Hybrid Orgs rely on multiple tools from Lead to Install",
        p = function (e) {
          var t = e.title,
            n = e.description,
            s = e.children;
          return (0, i.jsxs)("div", {
            className:
              "flex-1 p-4 md:p-6 bg-gray-100 space-y-4 text-center rounded-lg shadow",
            children: [
              (0, i.jsx)(r.Z, {
                tag: "h5",
                className: "text-primary",
                children: t,
              }),
              (0, i.jsx)("p", { children: n }),
              s,
            ],
          });
        },
        j = function () {
          return (0, i.jsx)("div", {
            className: "bg-white",
            children: (0, i.jsx)(s.Z, {
              title: g,
              children: (0, i.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [
                  (0, i.jsxs)(s.Z.Content, {
                    className: "w-full xl:w-4/5 md:text-center",
                    children: [
                      (0, i.jsx)(s.Z.Header, {
                        children: (0, i.jsx)(r.Z, { tag: "h2", children: g }),
                      }),
                      (0, i.jsx)(s.Z.Description, {
                        children:
                          "Enerflo combines them with native platform features into one cohesive solar sales and install platform",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex flex-col gap-4 md:flex-row md:gap-8 mt-8 px-6 md:mt-14 xl:w-4/5 xl:gap-14",
                    children: [
                      (0, i.jsx)(p, {
                        title: "Your Enerflo, Your Way",
                        description:
                          "As the ONLY open API, lead-to-PTO solar platform with the most integrations, Enerflo is designed to put the power in the hands of our partners. Unlock your productivity with additional integrations for:",
                        children: (0, i.jsx)("div", {
                          className: "inline-block mx-auto md:block",
                          children: (0, i.jsxs)("ul", {
                            className:
                              "list-disc list-outside ml-4 space-y-2 text-left xs:grid xs:grid-cols-2 xs:gap-2 xs:space-y-0 md:block md:space-y-2",
                            children: [
                              (0, i.jsx)("li", { children: "CRM" }),
                              (0, i.jsx)("li", {
                                children: "Productivity Tools",
                              }),
                              (0, i.jsx)("li", { children: "Dialers & SMS" }),
                              (0, i.jsx)("li", {
                                children:
                                  "Welcome Calls & Third Party Verification (TPV)",
                              }),
                              (0, i.jsx)("li", {
                                children: "Storage & Batteries",
                              }),
                              (0, i.jsx)("li", { children: "SmartHome" }),
                              (0, i.jsx)("li", { children: "Reporting" }),
                              (0, i.jsx)("li", { children: "And More" }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)(p, {
                        title: "Enerflo Drives Efficiency",
                        description:
                          "An Ohm Analytics Case Study revealed that Enerflo Partners operate more efficiently, reducing their install timelines by 62%, while nearly doubling their volume. Yep, you read that right.",
                        children: (0, i.jsxs)("div", {
                          className: "sm:w-3/5 md:w-full lg:w-4/5 mx-auto",
                          children: [
                            (0, i.jsx)("figure", {
                              className: "p-3 flex-grow w-full",
                              children: (0, i.jsx)(m(), {
                                src: u,
                                alt: "Ohm Analytics: Enerflo Case Study - Reduce install timelines by 62%.",
                                layout: "responsive",
                                quality: 100,
                                placeholder: "blur",
                                className: "crispImage",
                                sizes: "(min-width: 768px) 60vw, 100vw",
                                lazyBoundary: "400px",
                              }),
                            }),
                            (0, i.jsx)(f(), {
                              href: "/resources/ohm-analytics-white-paper-install-timelines-down-volume-almost-doubled",
                              children: (0, i.jsx)("a", {
                                className: "btn btn-primary w-full",
                                onClick: function () {
                                  return (0, d.MR)(
                                    "Engagement Button",
                                    "Buttons",
                                    "View Case Study"
                                  );
                                },
                                children: "View the Case Study",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        w = n(40344),
        v = n(5152),
        y = n.n(v),
        N = n(53512),
        b = (n(67294), "Make Enerflo Your Platform With Custom Integrations"),
        E = function () {
          return (0, i.jsx)(s.Z, {
            title: b,
            children: (0, i.jsx)("div", {
              className: "flex-grow",
              children: (0, i.jsxs)(s.Z.Content, {
                className: "mx-auto md:w-3/4 lg:w-2/3 md:text-center",
                children: [
                  (0, i.jsx)(s.Z.Header, {
                    children: (0, i.jsx)(r.Z, { tag: "h1", children: b }),
                  }),
                  (0, i.jsx)(s.Z.Description, {
                    children:
                      "If it has an API, Enerflo can integrate it. Your favorite tools make Enerflo more powerful.",
                  }),
                ],
              }),
            }),
          });
        },
        A = "Enerflo Plays Nice With Others",
        Z = function () {
          return (0, i.jsx)(s.Z, {
            title: A,
            children: (0, i.jsx)("div", {
              children: (0, i.jsxs)(s.Z.Content, {
                className: "mx-auto md:w-4/5 xl:w-2/3 md:text-center",
                children: [
                  (0, i.jsx)(s.Z.Header, {
                    children: (0, i.jsx)(r.Z, { tag: "h2", children: A }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "text-base text-gray-500",
                    children: [
                      (0, i.jsx)("p", {
                        children:
                          "Enerflo is tool agnostic. Prefer your own scheduling tool over our own? Great. Want to keep your project management in your own CRM? Fantastic. Enerflo gives you the power of choice to create your platform, your way. No two Enerflo\u2019s are the same.",
                      }),
                      (0, i.jsx)("p", {
                        className: "mt-6 font-bold text-gray-700 text-lg",
                        children:
                          "Not seeing your integration? Bring it. We\u2019re up to the challenge!",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        C = y()(
          function () {
            return Promise.all([n.e(8844), n.e(4828)]).then(n.bind(n, 8844));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8844];
              },
            },
          }
        ),
        I = y()(
          function () {
            return n.e(4634).then(n.bind(n, 84634));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [84634];
              },
            },
          }
        ),
        S = function () {
          return (0, i.jsxs)(N.Z, {
            title: "Integrations for Residential Solar Sales & Fulfillment",
            description:
              "Enerflo has the most integrations of any other solar platform, including software for solar sales qualification, proposals, design, finance, CRM and more.",
            children: [
              (0, i.jsx)(E, {}),
              (0, i.jsx)(I, {}),
              (0, i.jsx)(Z, {}),
              (0, i.jsx)(c, {}),
              (0, i.jsx)(j, {}),
              (0, i.jsx)(w.Z, {}),
              (0, i.jsx)(C, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [7112, 1999, 4520, 3512, 9774, 2888, 179], function () {
      return (t = 80198), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=integrations-e4ee71c94b22efb1.js.map
