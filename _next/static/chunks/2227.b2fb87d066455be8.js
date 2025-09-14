(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2227],
  {
    30173: function (e, i, t) {
      "use strict";
      var a = t(85893),
        r = (t(67294), t(86010)),
        n = t(63801),
        l = t(20114),
        o = t(17819),
        d = t.n(o),
        s = function (e) {
          var i,
            t = e.integrator,
            r =
              null === (i = e.feature.integrators) || void 0 === i
                ? void 0
                : i.find(function (e) {
                    return e.item._ref === t._id;
                  });
          return (0, a.jsx)("div", {
            className: d().integrationCell,
            children: (0, a.jsx)("div", {
              className: d().integrationContent,
              children:
                !!r &&
                ((null === r || void 0 === r ? void 0 : r.detail) ||
                  (0, a.jsx)("div", {
                    className:
                      "inline-block p-1.5 rounded-full shadow-md bg-secondary text-white",
                    "aria-label": "".concat(t.name, " Supported"),
                    children: (0, a.jsx)(n.nQG, {
                      className: "h-3 w-3 md:h-5 md:w-5",
                    }),
                  })),
            }),
          });
        };
      i.Z = function (e) {
        var i = e.integratorsList,
          t = e.features,
          n = e.title,
          o = e.className;
        return (0, a.jsxs)("div", {
          className: (0, r.Z)(
            "hidden md:block overflow-x-auto rounded-b-lg shadow-md bg-white border border-gray-200 max-h-[80vh]",
            o
          ),
          children: [
            (0, a.jsxs)("div", {
              className: "sticky top-0 border-b border-gray-300 z-[2]",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex",
                  children: [
                    (0, a.jsx)("div", {
                      className: (0, r.Z)(
                        d().featureCell,
                        "text-lg font-bold text-left"
                      ),
                      children: n,
                    }),
                    i.map(function (e, i) {
                      return (0,
                      a.jsx)("div", { className: d().integrationCell, children: (0, a.jsx)(l.Z, { integrator: e }) }, e._id || i);
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex",
                  children: [
                    (0, a.jsxs)("div", {
                      className: (0, r.Z)(
                        d().rankDescriptionCell,
                        "text-left flex items-center flex-wrap"
                      ),
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-lg font-bold pr-2 leading-5",
                          children: "Integration Rank",
                        }),
                        " ",
                        (0, a.jsx)("span", {
                          className:
                            "text-xs font-medium md:whitespace-nowrap mt-0.5",
                          children: "(By Number of Features/Capabilities)",
                        }),
                      ],
                    }),
                    i.map(function (e, i) {
                      return (0,
                      a.jsxs)("div", { className: d().rankCell, children: ["#", i + 1] }, e._id || i);
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              children: t.map(function (e, t) {
                return (0, a.jsxs)(
                  "div",
                  {
                    className: d().featureRow,
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, r.Z)(
                          d().featureCell,
                          "flex flex-col justify-center"
                        ),
                        children: [
                          (0, a.jsx)("p", { children: e.title }),
                          e.description &&
                            (0, a.jsx)("p", {
                              className: "text-gray-500 text-sm mt-1",
                              children: e.description,
                            }),
                        ],
                      }),
                      i.map(function (i, t) {
                        return (0,
                        a.jsx)(s, { integrator: i, feature: e }, i._id || t);
                      }),
                    ],
                  },
                  e._id || t
                );
              }),
            }),
          ],
        });
      };
    },
    20114: function (e, i, t) {
      "use strict";
      var a = t(26042),
        r = t(69396),
        n = t(85893),
        l = t(6303),
        o = t(25675),
        d = t.n(o),
        s = t(67294),
        m = t(17819),
        c = t.n(m);
      i.Z = function (e) {
        var i = e.integrator,
          t = (0, s.useMemo)(
            function () {
              var e = i.name;
              return i.logo
                ? i.logo.asset
                  ? (0, n.jsx)(l.Z, {
                      value: (0, r.Z)((0, a.Z)({}, i.logo), {
                        alt: "Logo - ".concat(i.name),
                      }),
                      objectFit: "contain",
                      layout: "fill",
                      withContainer: !1,
                    })
                  : (0, n.jsx)(d(), {
                      src: i.logo,
                      alt: "Logo - ".concat(i.name),
                      className: "crispImage",
                      layout: "fill",
                      objectFit: "contain",
                    })
                : e;
            },
            [i]
          );
        return (0, n.jsx)("div", {
          className: c().integrationContent,
          children: t,
        });
      };
    },
    84497: function (e, i, t) {
      "use strict";
      var a = t(85893),
        r = (t(67294), t(86010)),
        n = t(63801),
        l = t(20114),
        o = t(17819),
        d = t.n(o),
        s = function (e) {
          var i,
            t = e.integrator,
            o = e.feature,
            s = e.rank,
            m =
              null === (i = o.integrators) || void 0 === i
                ? void 0
                : i.find(function (e) {
                    return e.item._ref === t._id;
                  });
          return (0, a.jsxs)(
            "div",
            {
              className: (0, r.Z)(d().mobileCellGroup, "group"),
              children: [
                (0, a.jsxs)("div", {
                  className: (0, r.Z)(
                    d().mobileCell,
                    d().mobileRankCell,
                    "text-center w-14"
                  ),
                  children: ["#", s],
                }),
                (0, a.jsx)("div", {
                  className: (0, r.Z)(d().mobileIntegrationCell, "h-[45px]"),
                  children: (0, a.jsx)(l.Z, { integrator: t }),
                }),
                (0, a.jsx)("div", {
                  className: (0, r.Z)(
                    d().mobileFeatureCell,
                    "h-[45px] group-last:border-r-0"
                  ),
                  children: (0, a.jsxs)("div", {
                    className: d().integrationContent,
                    children: [
                      !!m &&
                        ((null === m || void 0 === m ? void 0 : m.detail) ||
                          (0, a.jsx)("div", {
                            className:
                              "inline-block shadow-md bg-secondary p-1.5 rounded-full text-white",
                            "aria-label": "".concat(t.name, " Supported"),
                            children: (0, a.jsx)(n.nQG, {
                              className: "h-3 w-3 md:h-5 md:w-5",
                            }),
                          })),
                      !m &&
                        (0, a.jsx)("div", {
                          className: "flex-grow p-1.5 h-3 w-3 md:h-5 md:w-5",
                        }),
                    ],
                  }),
                }),
              ],
            },
            t._id
          );
        };
      i.Z = function (e) {
        var i = e.integratorsList,
          t = e.features,
          n = e.title;
        return (0, a.jsx)("div", {
          className: "p-4 md:hidden space-y-8 rounded-b-lg shadow-md bg-white",
          children: t.map(function (e, t) {
            return (0, a.jsxs)(
              "div",
              {
                children: [
                  (0, a.jsx)("p", { children: e.title }),
                  (0, a.jsx)("p", {
                    className: "text-gray-400 text-sm mt-1",
                    children: e.description,
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "overflow-auto border border-gray-200 rounded-md mt-3",
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, r.Z)(d().mobileCellGroup, "group"),
                        children: [
                          (0, a.jsx)("div", {
                            className: (0, r.Z)(
                              d().mobileRankCell,
                              d().mobileHeaderCell,
                              "!text-[0.65rem] xs:!text-sm !px-2"
                            ),
                            children: "Integration Rank",
                          }),
                          (0, a.jsx)("div", {
                            className: (0, r.Z)(
                              d().mobileHeaderCell,
                              d().mobileIntegrationCell
                            ),
                            children: n,
                          }),
                          (0, a.jsx)("div", {
                            className: (0, r.Z)(
                              d().mobileHeaderCell,
                              d().mobileFeatureCell
                            ),
                            children: "Has Feature",
                          }),
                        ],
                      }),
                      i.map(function (i, t) {
                        return (0,
                        a.jsx)(s, { integrator: i, feature: e, rank: t + 1 }, i._id || t);
                      }),
                    ],
                  }),
                ],
              },
              e._id || t
            );
          }),
        });
      };
    },
    2227: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return u;
          },
        });
      var a,
        r,
        n = t(26042),
        l = t(99534),
        o = t(85893),
        d = (t(67294), t(30173)),
        s = t(84497),
        m = t(14924);
      !(function (e) {
        (e.MOSAIC = "Mosaic"),
          (e.GOODLEAP = "Goodleap"),
          (e.SUNLIGHT = "Sunlight"),
          (e.DIVIDEND = "Dividend"),
          (e.SUNNOVA = "Sunnova"),
          (e.POWERPAY = "PowerPay");
      })(a || (a = {}));
      var c =
          ((r = {}),
          (0, m.Z)(r, a.SUNLIGHT, {
            _id: a.SUNLIGHT,
            name: a.SUNLIGHT,
            logo: {
              src: "/_next/static/media/Sunlight-logo.71147b36.png",
              height: 23,
              width: 156,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJklEQVR4nGN83qm0+NiVb+3Bi1/8UOZn5L/78f9nBgYGRiAGASYAEEwMKTd787gAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 1,
            },
            orderRank: "1",
          }),
          (0, m.Z)(r, a.GOODLEAP, {
            _id: a.GOODLEAP,
            name: a.GOODLEAP,
            logo: {
              src: "/_next/static/media/Goodleap-logo.e183adfa.png",
              height: 35,
              width: 146,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPElEQVR42mMAgpA6F5bIvdXSHkB2qggHQwOQDgTiRCB2YQCC6nURjC4tbsxOQLazCBuDF5AGsVMYGBjsAF4bCWbxSgBSAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 2,
            },
            orderRank: "2",
          }),
          (0, m.Z)(r, a.MOSAIC, {
            _id: a.MOSAIC,
            name: a.MOSAIC,
            logo: {
              src: "/_next/static/media/Mosaic-logo.fbbe09c7.png",
              height: 29,
              width: 146,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAR0lEQVR4nGN8uaWiYCOn5rU056w3QYGOjD++/fzDwMAAwixA/IJxXv/k7Epx2Wv2UQEPvvj58TD+/M70n5GBGSj5j4GB8REAhDMY2i8VJmAAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 2,
            },
            orderRank: "3",
          }),
          (0, m.Z)(r, a.DIVIDEND, {
            _id: a.DIVIDEND,
            name: a.DIVIDEND,
            logo: {
              src: "/_next/static/media/Dividend-logo.292c2d43.png",
              height: 28,
              width: 149,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASUlEQVR4nGOUkJJ2+hneeP+9VYCqRK37SwY2Lp7/jIw/Gf//Z2ZgYOBglFBQt/jlmfXgnXP0f8kQEb5/Jq58DL9+/GIEygIBBwDyHRV9XJ2bbQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 2,
            },
            orderRank: "4",
          }),
          (0, m.Z)(r, a.POWERPAY, {
            _id: a.POWERPAY,
            name: a.POWERPAY,
            logo: {
              src: "/_next/static/media/Powerpay-logo.10f805b0.png",
              height: 100,
              width: 503,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGP8dTHU+8/JX9z/P/x7zcjG+I3hHwMjA+N/BQYGhlcMDIzPGb8vC3D9//bfW4bf/2UYGBl5gBJ/GRj+PwTS6gz/GR8DAOioGxPcQzk9AAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 2,
            },
            orderRank: "5",
          }),
          (0, m.Z)(r, a.SUNNOVA, {
            _id: a.SUNNOVA,
            name: a.SUNNOVA,
            logo: {
              src: "/_next/static/media/Sunnova-logo.8e22ee6e.png",
              height: 28,
              width: 128,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGM0tnOK4mX8/0yV658ENzMDc6XDiycP2VgZzGaIiziK/PvG2OBh72Em+ItRWeL7Jy7hn38kpT58e8vJwrX9hqTYoeucTwDt3hk0eOlLqQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 2,
            },
            orderRank: "6",
          }),
          r),
        A = Object.values(c).sort(function (e, i) {
          return Number(e.orderRank) - Number(i.orderRank);
        }),
        _ = [
          {
            title: "Instant pricing and accurate quotes",
            description:
              "Enerflo can provide accurate quotes for fully integrated lenders, as well as for most non-integrated lenders, based on partner, product and project cost criteria.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.POWERPAY]._id } },
              { item: { _ref: c[a.SUNNOVA]._id } },
            ],
          },
          {
            title: "Compliant proposals and disclaimers",
            description:
              "Enerflo dynamically incorporates lender disclaimers into the proposal and application, ensuring compliance.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.POWERPAY]._id } },
              { item: { _ref: c[a.SUNNOVA]._id } },
            ],
          },
          {
            title: "Pre-fill application details",
            description:
              "Enerflo is able to pre-fill required data points based on information already entered or known, saving time and repetitive manual entry.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.POWERPAY]._id } },
              { item: { _ref: c[a.SUNNOVA]._id } },
            ],
          },
          {
            title: "Embed loan application",
            description:
              "The entire loan application is embedded within Enerflo, eliminating the need for multiple logins to lender portals.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.POWERPAY]._id } },
              { item: { _ref: c[a.SUNNOVA]._id } },
            ],
          },
          {
            title: "Email loan application",
            description:
              "Loan applications can be quickly and easily emailed to the customer applicant from within Enerflo.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
            ],
          },
          {
            title: "Embed loan docs for signature",
            description:
              "Loan documents are all embedded within the Enerflo platform, saving time and creating a more streamlined experience for all involved parties.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.SUNNOVA]._id } },
            ],
          },
          {
            title: "Email loan docs for signature",
            description:
              "Loan docs can be emailed for signature, with status tracking, all from within Enerflo.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.POWERPAY]._id } },
              { item: { _ref: c[a.SUNNOVA]._id } },
            ],
          },
          {
            title: "Spanish translation for docs",
            description:
              "Loan docs can be provided in Spanish for participating lenders.",
            integrators: [
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
            ],
          },
          {
            title: "Loan stip visibility",
            description:
              "Enerflo provides stipulation updates in real time to keep the loan application process moving forward as quickly as possible.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.POWERPAY]._id } },
            ],
          },
          {
            title: "Automatically send system details to lender",
            description:
              "Enerflo automatically updates the application with system equipment and project details.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.SUNNOVA]._id } },
            ],
          },
          {
            title: "Automatically upload signed install agreement",
            description:
              "Enerflo automatically uploads signed install agreements to the application.",
            integrators: [
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.POWERPAY]._id } },
            ],
          },
          {
            title: "Application status tracking",
            description:
              "Enerflo can get updates on application status to assist with reporting and project submission.",
            integrators: [
              { item: { _ref: c[a.MOSAIC]._id } },
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
              { item: { _ref: c[a.DIVIDEND]._id } },
              { item: { _ref: c[a.POWERPAY]._id } },
              { item: { _ref: c[a.SUNNOVA]._id } },
            ],
          },
          {
            title: "Integrated change order support",
            description:
              "Enerflo automatically integrates change orders and other project-related updates with the application.",
            integrators: [
              { item: { _ref: c[a.GOODLEAP]._id } },
              { item: { _ref: c[a.SUNLIGHT]._id } },
            ],
          },
        ],
        g = "Integrated Lenders",
        u = function (e) {
          var i = e.features,
            t = e.integratorsList,
            a = (0, l.Z)(e, ["features", "integratorsList"]),
            r =
              !!(null === i || void 0 === i ? void 0 : i.length) &&
              !!(null === t || void 0 === t ? void 0 : t.length),
            m = { features: r ? i : _, integratorsList: r ? t : A };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(d.Z, (0, n.Z)({ title: g }, m, a)),
              (0, o.jsx)(s.Z, (0, n.Z)({ title: g }, m, a)),
            ],
          });
        };
    },
    17819: function (e) {
      e.exports = {
        featureRow: "ranked-table_featureRow__lr3S5",
        featureCell: "ranked-table_featureCell__o7cou",
        integrationCell: "ranked-table_integrationCell__g6Et4",
        integrationContent: "ranked-table_integrationContent__C_WLK",
        rankBarStyles: "ranked-table_rankBarStyles__dD3BA",
        rankDescriptionCell:
          "ranked-table_rankDescriptionCell__zpNFI ranked-table_featureCell__o7cou ranked-table_rankBarStyles__dD3BA",
        rankCell:
          "ranked-table_rankCell__jq0VB ranked-table_integrationCell__g6Et4 ranked-table_rankBarStyles__dD3BA",
        mobileCellGroup: "ranked-table_mobileCellGroup__EN4Mh",
        mobileCell: "ranked-table_mobileCell__qbTWC",
        mobileHeaderCell:
          "ranked-table_mobileHeaderCell__NyPsX ranked-table_mobileCell__qbTWC",
        mobileRankCell:
          "ranked-table_mobileRankCell__CKxgP ranked-table_rankBarStyles__dD3BA",
        mobileIntegrationCell:
          "ranked-table_mobileIntegrationCell__o3bKo ranked-table_mobileCell__qbTWC",
        mobileFeatureCell:
          "ranked-table_mobileFeatureCell__aJ9jc ranked-table_mobileCell__qbTWC",
      };
    },
  },
]);
//# sourceMappingURL=2227.b2fb87d066455be8.js.map
