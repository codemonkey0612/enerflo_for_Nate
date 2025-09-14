(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1125],
  {
    81798: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/features/docflo",
        function () {
          return r(49946);
        },
      ]);
    },
    13551: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return d;
        },
      });
      var n = r(85893),
        s = (r(67294), r(86010)),
        i = r(21804),
        a = r.n(i),
        o = r(41664),
        c = r.n(o),
        l = function (e) {
          var t = e.children,
            r = e.className;
          return (0, n.jsx)("div", {
            className: (0, s.Z)("heroInner", r),
            children: t,
          });
        },
        d = function (e) {
          var t = e.title,
            r = e.children,
            i = e.className,
            o = void 0 === i ? "items-center" : i;
          return (0, n.jsx)("section", {
            id: a()(t),
            className: (0, s.Z)("heroSection", o),
            children: r,
          });
        },
        u = function (e) {
          var t = e.title,
            r = e.children,
            s = e.className;
          return (0, n.jsx)(d, {
            title: t,
            children: (0, n.jsx)(l, { className: s, children: r }),
          });
        };
      (u.Header = function (e) {
        var t = e.children,
          r = e.className;
        return (0, n.jsx)("div", {
          className: (0, s.Z)("heroHeader", r),
          children: t,
        });
      }),
        (u.Inner = l),
        (u.Content = function (e) {
          var t = e.children,
            r = e.className;
          return (0, n.jsx)("div", {
            className: (0, s.Z)("heroContent", r),
            children: t,
          });
        }),
        (u.Description = function (e) {
          var t = e.children,
            r = e.className,
            i = void 0 === r ? "text-gray-500" : r;
          return (0, n.jsx)("p", {
            className: (0, s.Z)("heroDescription", i),
            children: t,
          });
        }),
        (u.Action = function (e) {
          var t = e.children,
            r = e.className,
            i = e.href;
          return (0, n.jsx)(c(), {
            href: i,
            children: (0, n.jsx)("a", {
              className: (0, s.Z)("heroAction btn", r),
              children: t,
            }),
          });
        }),
        (t.Z = u);
    },
    12473: function (e, t, r) {
      "use strict";
      var n = r(85893),
        s = (r(67294), r(63801)),
        i = r(13551),
        a = r(645);
      t.Z = function (e) {
        var t = e.url,
          r = e.buttonText,
          o = e.description;
        return (0, n.jsx)("div", {
          className: "bg-primary z-20 relative",
          children: (0, n.jsx)(i.Z, {
            className: "sm:py-12 lg:py-16",
            children: (0, n.jsx)(i.Z.Content, {
              children: (0, n.jsxs)("div", {
                className:
                  "flex flex-wrap items-center justify-center -mx-2 -my-2",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-white text-base md:text-lg mx-2 my-2",
                    children: o,
                  }),
                  (0, n.jsxs)("a", {
                    href: t,
                    className:
                      "btn btn-dark text-sm md:text-base flex items-center whitespace-nowrap mx-2 my-2",
                    onClick: function () {
                      return (0, a.MR)(
                        "Engagement Button",
                        "Buttons",
                        "Next Page ".concat(r)
                      );
                    },
                    children: [
                      (0, n.jsx)("span", { children: r }),
                      (0, n.jsx)(s.a3z, { className: "h-4 w-4 ml-2" }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    49946: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return N;
          },
        });
      var n = r(85893),
        s = r(12473),
        i = r(5152),
        a = r.n(i),
        o = r(53512),
        c = (r(67294), r(88104)),
        l = r(13551),
        d = "3 Second Automatic Signing Packets",
        u = function () {
          return (0, n.jsx)("div", {
            className: "bg-gray-100",
            children: (0, n.jsxs)(l.Z, {
              title: d,
              className: "flex-col-reverse md:flex-row",
              children: [
                (0, n.jsxs)(l.Z.Content, {
                  className: "w-full md:text-left md:w-3/5",
                  children: [
                    (0, n.jsx)(l.Z.Header, {
                      className: "md:items-start md:justify-start",
                      children: (0, n.jsx)(c.Z, { tag: "h2", children: d }),
                    }),
                    (0, n.jsx)(l.Z.Description, {
                      children:
                        "Enerflo\u2019s proprietary doc engine, Docflo, automatically detects the anatomy of your deal to inform which documents are required for each specific deal. Docflo takes into account geography, language preference, system details, utility, rebates and more to ensure your sales reps get the right signatures the first time, limiting change orders and improving upstream data. Even with the complexity, it\u2019s blazing fast -- typically generating complex signing packets in 3 seconds or less.",
                    }),
                  ],
                }),
                (0, n.jsx)("figure", {
                  className: "flex-grow w-full xs:w-2/3 md:w-2/5 pr-4",
                  children: (0, n.jsx)("img", {
                    className: "w-full h-full",
                    src: "/images/enerflo-solar-platform-automatic-signing-packets.svg",
                    alt: "Enerflo Solar Platform Docflo: 3 Second Automatic Signing Packets.",
                  }),
                }),
              ],
            }),
          });
        },
        m = r(26042),
        h = r(25675),
        f = r.n(h),
        g = function (e) {
          var t = e.className,
            r = e.title,
            s = e.description,
            i = e.figure;
          return (0, n.jsx)("div", {
            className: t,
            children: (0, n.jsxs)("div", {
              className:
                "h-full text-center border-2 border-primary bg-transparent rounded-md shadow-lg py-8 p-5 md:p-10",
              children: [
                (0, n.jsx)("figure", {
                  className: "h-14 w-14 md:h-28 md:w-28 relative mx-auto",
                  children: i,
                }),
                (0, n.jsx)(c.Z, {
                  tag: "h4",
                  className: "text-white mt-4 md:mt-10",
                  children: r,
                }),
                (0, n.jsx)("p", {
                  className: "mt-2 md:mt-4 text-gray-100",
                  children: s,
                }),
              ],
            }),
          });
        },
        p = {
          accuracy: {
            title: "Accuracy, Every Time",
            description:
              "Lucky for you, our team of Doc nerds love to place automation on top of your contracts. Need a calculation to occur? Only want specific adders to show up? Need an AC/DC conversion calculated? It\u2019s easy with Enerflo. Your contracts are all onboarded, eliminating the need for manual packet creation or calling Betty in your back office to send them via DocuSign. Our doc engine gives your reps the ability to build them in seconds, allowing them to quickly and accurately close deals.",
            figure: (0, n.jsx)(f(), {
              src: {
                src: "/_next/static/media/icon-enerflo-docflo-document-accuracy.1ff3e059.svg",
                height: 129,
                width: 128,
              },
              alt: "Icon - Enerflo Docflo Accuracy.",
            }),
          },
          changeOrders: {
            title: "Change Orders Redefined",
            description:
              "Change orders happen. You may discover a MPU is needed, or maybe you ran out of the panel the customer signed up for. It\u2019s the nature of the business. Docflo makes change orders as painless as possible, making it easy for the sales rep or your ops team to quickly make modifications to the project. Enerflo organizes everything and keeps track of the history so you don't have to.",
            figure: (0, n.jsx)(f(), {
              src: {
                src: "/_next/static/media/icon-enerflo-docflo-document-change-orders.997a223d.svg",
                height: 128,
                width: 128,
              },
              alt: "Icon - Enerflo Docflo Change Orders.",
            }),
          },
          security: {
            title: "Security and Compliance",
            description:
              "Docflo is eSign compliant. It tracks the IP address of signers, the device being used, the delivery method and more. Documents are sent securely and stored in a secure location on the AWS cloud. We\u2019ll store them forever until you remove them. And no, we don\u2019t charge for storage, because this isn\u2019t 1990.",
            figure: (0, n.jsx)(f(), {
              src: {
                src: "/_next/static/media/icon-enerflo-docflo-document-security-compliance.09725fdb.svg",
                height: 121,
                width: 121,
              },
              alt: "Icon - Enerflo Docflo Security Compliance.",
            }),
          },
          timing: {
            title: "Every Second Counts",
            description:
              "Close customers while they are engaged. Docflo creates the average document packet in under 3 seconds\u2026 (the time it took you to read that sentence). With that speed, your reps can carry the momentum of the sale. Plus, our in-person signing feature allows customers to sign quickly on the spot. Can\u2019t be in person, or selling over the phone? With Docflo, you can easily send a secured signing link via text or email to your customer.",
            figure: (0, n.jsx)(f(), {
              src: {
                src: "/_next/static/media/icon-enerflo-docflo-document-timing.66cca2c7.svg",
                height: 132,
                width: 122,
              },
              alt: "Icon - Enerflo Docflo Every Second Counts.",
            }),
          },
        },
        x = function () {
          return (0, n.jsx)("div", {
            className:
              "relative flex-grow bg-gradient-to-br from-primary to-navy-dark",
            children: (0, n.jsx)(l.Z, {
              className: "px-6",
              children: (0, n.jsx)("div", {
                className:
                  "mx-auto relative z-[1] sm:max-w-[90%] xl:max-w-[75%]",
                children: (0, n.jsxs)("div", {
                  className:
                    "grid grid-cols-1 items-stretch gap-6 md:grid-cols-2",
                  children: [
                    (0, n.jsx)(g, (0, m.Z)({}, p.accuracy)),
                    (0, n.jsx)(g, (0, m.Z)({}, p.changeOrders)),
                    (0, n.jsx)(g, (0, m.Z)({}, p.security)),
                    (0, n.jsx)(g, (0, m.Z)({}, p.timing)),
                  ],
                }),
              }),
            }),
          });
        },
        y = {
          src: "/_next/static/media/enerflo-solar-platform-document-signing-contracting.016fa720.png",
          height: 792,
          width: 921,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA3klEQVR42gVAwS4DQRj+vpnZ3bFapWl1nbZWnB1VnHgTdxEHr+ENRETCwUHirh7AaRueQVIkLN3dhp35G15cXl1PXl4PCPyC7GTD9On05PgIQCgiFW/v7vP2SmcniixsFEDBi7V2arR+S4fpoRn0e/Pd0R6sNQ4CetdQK51QMS5+ysg0zqm6riCyRIpXlMYzDEnoSgdhbQJjfHe1DUV6D8hsHrBxgPqrE4qcme+iWM7zCUBvGMfYXOvCNLNSWuvv/8Ib4wUP4/Hjh6+/yv5G1qq2s+f9reL8sxqxN0imCyKbWeRVe6MoAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 7,
        },
        v = "Complex Solar Contracts, Simplified",
        j = function () {
          return (0, n.jsxs)(l.Z, {
            title: v,
            className: "flex-col md:flex-row",
            children: [
              (0, n.jsxs)(l.Z.Content, {
                className: "md:w-1/2",
                children: [
                  (0, n.jsx)(l.Z.Header, {
                    className: "md:items-start",
                    children: (0, n.jsx)(c.Z, { tag: "h1", children: v }),
                  }),
                  (0, n.jsx)(l.Z.Description, {
                    children:
                      "Enerflo\u2019s proprietary Docflo platform is docsigning, reimagined. Purpose-built for solar, Docflo intelligently serves up the right docs at the right time, with tons of useful features baked right in. You\u2019ll never want to sign on another platform again.",
                  }),
                ],
              }),
              (0, n.jsx)("figure", {
                className: "p-3 w-full xs:w-4/5 sm:w-3/4 md:w-1/2",
                children: (0, n.jsx)(f(), {
                  src: y,
                  alt: "Enerflo\u2019s proprietary doc signing solution for solar, Docflo, intelligently serves up the right docs at the right time, limiting change orders and improving upstream data.",
                  layout: "responsive",
                  quality: 100,
                  placeholder: "blur",
                  loading: "eager",
                  priority: !0,
                  className: "crispImage",
                  sizes: "(min-width: 768px) 50vw, 100vw",
                }),
              }),
            ],
          });
        },
        w = a()(
          function () {
            return Promise.all([r.e(8844), r.e(4828)]).then(r.bind(r, 8844));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8844];
              },
            },
          }
        ),
        N = function () {
          return (0, n.jsxs)(o.Z, {
            title:
              "Enerflo Solar Software Platform Features | Docflo Doc Signing",
            description:
              "Replace time-consuming, manual doc signing processes and limit change orders with Docflo, the intelligent doc signing solution purpose-built for solar.",
            children: [
              (0, n.jsx)(j, {}),
              (0, n.jsx)(u, {}),
              (0, n.jsx)(x, {}),
              (0, n.jsx)(s.Z, {
                buttonText: "View Lendflo",
                url: "/features/lendflo",
                description: "Get customers financed fast",
              }),
              (0, n.jsx)(w, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [7112, 1999, 4520, 3512, 9774, 2888, 179], function () {
      return (t = 81798), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=docflo-e82878fb8616283b.js.map
