(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8674],
  {
    98711: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/features/project-management",
        function () {
          return t(47149);
        },
      ]);
    },
    13551: function (e, n, t) {
      "use strict";
      t.d(n, {
        I: function () {
          return u;
        },
      });
      var r = t(85893),
        a = (t(67294), t(86010)),
        s = t(21804),
        i = t.n(s),
        c = t(41664),
        o = t.n(c),
        l = function (e) {
          var n = e.children,
            t = e.className;
          return (0, r.jsx)("div", {
            className: (0, a.Z)("heroInner", t),
            children: n,
          });
        },
        u = function (e) {
          var n = e.title,
            t = e.children,
            s = e.className,
            c = void 0 === s ? "items-center" : s;
          return (0, r.jsx)("section", {
            id: i()(n),
            className: (0, a.Z)("heroSection", c),
            children: t,
          });
        },
        d = function (e) {
          var n = e.title,
            t = e.children,
            a = e.className;
          return (0, r.jsx)(u, {
            title: n,
            children: (0, r.jsx)(l, { className: a, children: t }),
          });
        };
      (d.Header = function (e) {
        var n = e.children,
          t = e.className;
        return (0, r.jsx)("div", {
          className: (0, a.Z)("heroHeader", t),
          children: n,
        });
      }),
        (d.Inner = l),
        (d.Content = function (e) {
          var n = e.children,
            t = e.className;
          return (0, r.jsx)("div", {
            className: (0, a.Z)("heroContent", t),
            children: n,
          });
        }),
        (d.Description = function (e) {
          var n = e.children,
            t = e.className,
            s = void 0 === t ? "text-gray-500" : t;
          return (0, r.jsx)("p", {
            className: (0, a.Z)("heroDescription", s),
            children: n,
          });
        }),
        (d.Action = function (e) {
          var n = e.children,
            t = e.className,
            s = e.href;
          return (0, r.jsx)(o(), {
            href: s,
            children: (0, r.jsx)("a", {
              className: (0, a.Z)("heroAction btn", t),
              children: n,
            }),
          });
        }),
        (n.Z = d);
    },
    12473: function (e, n, t) {
      "use strict";
      var r = t(85893),
        a = (t(67294), t(63801)),
        s = t(13551),
        i = t(645);
      n.Z = function (e) {
        var n = e.url,
          t = e.buttonText,
          c = e.description;
        return (0, r.jsx)("div", {
          className: "bg-primary z-20 relative",
          children: (0, r.jsx)(s.Z, {
            className: "sm:py-12 lg:py-16",
            children: (0, r.jsx)(s.Z.Content, {
              children: (0, r.jsxs)("div", {
                className:
                  "flex flex-wrap items-center justify-center -mx-2 -my-2",
                children: [
                  (0, r.jsx)("div", {
                    className: "text-white text-base md:text-lg mx-2 my-2",
                    children: c,
                  }),
                  (0, r.jsxs)("a", {
                    href: n,
                    className:
                      "btn btn-dark text-sm md:text-base flex items-center whitespace-nowrap mx-2 my-2",
                    onClick: function () {
                      return (0, i.MR)(
                        "Engagement Button",
                        "Buttons",
                        "Next Page ".concat(t)
                      );
                    },
                    children: [
                      (0, r.jsx)("span", { children: t }),
                      (0, r.jsx)(a.a3z, { className: "h-4 w-4 ml-2" }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    47149: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return g;
          },
        });
      var r = t(85893),
        a = t(12473),
        s = t(5152),
        i = t.n(s),
        c = t(53512),
        o = (t(67294), t(88104)),
        l = t(25675),
        u = t.n(l),
        d = {
          src: "/_next/static/media/enerflo-solar-platform-project-management.f92422f0.png",
          height: 689,
          width: 1046,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAApElEQVR42h2LsQ3CMBAAPQI1e1DR0MAELEBPQc8MiCICiTUQEh0j0NEEIUCkSUhibH/+7Tj4SShOV5xODMbT3jra3bJcBkCHgJagIkxL8nFCAzEcTTpexgCTD0zWsTTEqqpbu5O43p+z/eFYlEazIutN5RpDTSDXMDrvRQ4qS7XkAnR3/8E2VtZz7YMW5/jSX20387dUSw12AUhRGxTWX5nA5/EDrjiJIqYIMGcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        h = t(13551),
        m = "Manage More Projects",
        f = function () {
          return (0, r.jsxs)(h.Z, {
            title: m,
            className: "flex-col md:flex-row",
            children: [
              (0, r.jsxs)(h.Z.Content, {
                className: "py-4 md:py-8 md:w-1/2 xl:w-2/5",
                children: [
                  (0, r.jsx)(h.Z.Header, {
                    className: "md:items-start",
                    children: (0, r.jsx)(o.Z, { tag: "h1", children: m }),
                  }),
                  (0, r.jsxs)(h.Z.Description, {
                    children: [
                      "Enerflo\u2019s project management features ",
                      (0, r.jsx)("span", {
                        className: "whitespace-nowrap",
                        children: "(AKA Install Tracker)",
                      }),
                      " can be used out of the box or integrate with your favorite CRM to improve your installation workflows and take control of your projects.",
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("figure", {
                className: "p-3 w-full xs:w-3/4 md:w-1/2 xl:w-3/5",
                children: (0, r.jsx)(u(), {
                  src: d,
                  alt: "Use Enerflo Project Management features out of the box or integrate with your favorite CRM to power your project management data.",
                  layout: "responsive",
                  quality: 100,
                  priority: !0,
                  placeholder: "blur",
                  loading: "eager",
                  className: "crispImage",
                  sizes: "(min-width: 768px) 60vw, 100vw",
                  lazyBoundary: "400px",
                }),
              }),
            ],
          });
        },
        x = i()(
          function () {
            return Promise.all([t.e(8844), t.e(4828)]).then(t.bind(t, 8844));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8844];
              },
            },
          }
        ),
        p = i()(
          function () {
            return t.e(2706).then(t.bind(t, 22706));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [22706];
              },
            },
          }
        ),
        j = i()(
          function () {
            return t.e(9297).then(t.bind(t, 29297));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [29297];
              },
            },
          }
        ),
        g = function () {
          return (0, r.jsxs)(c.Z, {
            title:
              "Enerflo Solar Software Platform Features | Project Management",
            description:
              "Enerflo integrates with your favorite CRM or you can use Enerflo\u2019s capable Project Management features to power all your project management needs.",
            children: [
              (0, r.jsx)(f, {}),
              (0, r.jsx)(j, {}),
              (0, r.jsx)(p, {}),
              (0, r.jsx)(a.Z, {
                buttonText: "View Customer Engagement",
                url: "/features/customer-engagement",
                description:
                  "See how to keep your customers engaged through the process",
              }),
              (0, r.jsx)(x, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [7112, 1999, 4520, 3512, 9774, 2888, 179], function () {
      return (n = 98711), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
//# sourceMappingURL=project-management-83a3ec1296db4882.js.map
