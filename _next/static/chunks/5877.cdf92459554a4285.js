(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5877, 7959],
  {
    30173: function (e, i, t) {
      "use strict";
      var r = t(85893),
        n = (t(67294), t(86010)),
        a = t(63801),
        l = t(20114),
        o = t(17819),
        d = t.n(o),
        s = function (e) {
          var i,
            t = e.integrator,
            n =
              null === (i = e.feature.integrators) || void 0 === i
                ? void 0
                : i.find(function (e) {
                    return e.item._ref === t._id;
                  });
          return (0, r.jsx)("div", {
            className: d().integrationCell,
            children: (0, r.jsx)("div", {
              className: d().integrationContent,
              children:
                !!n &&
                ((null === n || void 0 === n ? void 0 : n.detail) ||
                  (0, r.jsx)("div", {
                    className:
                      "inline-block p-1.5 rounded-full shadow-md bg-secondary text-white",
                    "aria-label": "".concat(t.name, " Supported"),
                    children: (0, r.jsx)(a.nQG, {
                      className: "h-3 w-3 md:h-5 md:w-5",
                    }),
                  })),
            }),
          });
        };
      i.Z = function (e) {
        var i = e.integratorsList,
          t = e.features,
          a = e.title,
          o = e.className;
        return (0, r.jsxs)("div", {
          className: (0, n.Z)(
            "hidden md:block overflow-x-auto rounded-b-lg shadow-md bg-white border border-gray-200 max-h-[80vh]",
            o
          ),
          children: [
            (0, r.jsxs)("div", {
              className: "sticky top-0 border-b border-gray-300 z-[2]",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex",
                  children: [
                    (0, r.jsx)("div", {
                      className: (0, n.Z)(
                        d().featureCell,
                        "text-lg font-bold text-left"
                      ),
                      children: a,
                    }),
                    i.map(function (e, i) {
                      return (0,
                      r.jsx)("div", { className: d().integrationCell, children: (0, r.jsx)(l.Z, { integrator: e }) }, e._id || i);
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex",
                  children: [
                    (0, r.jsxs)("div", {
                      className: (0, n.Z)(
                        d().rankDescriptionCell,
                        "text-left flex items-center flex-wrap"
                      ),
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-lg font-bold pr-2 leading-5",
                          children: "Integration Rank",
                        }),
                        " ",
                        (0, r.jsx)("span", {
                          className:
                            "text-xs font-medium md:whitespace-nowrap mt-0.5",
                          children: "(By Number of Features/Capabilities)",
                        }),
                      ],
                    }),
                    i.map(function (e, i) {
                      return (0,
                      r.jsxs)("div", { className: d().rankCell, children: ["#", i + 1] }, e._id || i);
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              children: t.map(function (e, t) {
                return (0, r.jsxs)(
                  "div",
                  {
                    className: d().featureRow,
                    children: [
                      (0, r.jsxs)("div", {
                        className: (0, n.Z)(
                          d().featureCell,
                          "flex flex-col justify-center"
                        ),
                        children: [
                          (0, r.jsx)("p", { children: e.title }),
                          e.description &&
                            (0, r.jsx)("p", {
                              className: "text-gray-500 text-sm mt-1",
                              children: e.description,
                            }),
                        ],
                      }),
                      i.map(function (i, t) {
                        return (0,
                        r.jsx)(s, { integrator: i, feature: e }, i._id || t);
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
      var r = t(26042),
        n = t(69396),
        a = t(85893),
        l = t(6303),
        o = t(25675),
        d = t.n(o),
        s = t(67294),
        _ = t(17819),
        m = t.n(_);
      i.Z = function (e) {
        var i = e.integrator,
          t = (0, s.useMemo)(
            function () {
              var e = i.name;
              return i.logo
                ? i.logo.asset
                  ? (0, a.jsx)(l.Z, {
                      value: (0, n.Z)((0, r.Z)({}, i.logo), {
                        alt: "Logo - ".concat(i.name),
                      }),
                      objectFit: "contain",
                      layout: "fill",
                      withContainer: !1,
                    })
                  : (0, a.jsx)(d(), {
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
        return (0, a.jsx)("div", {
          className: m().integrationContent,
          children: t,
        });
      };
    },
    84497: function (e, i, t) {
      "use strict";
      var r = t(85893),
        n = (t(67294), t(86010)),
        a = t(63801),
        l = t(20114),
        o = t(17819),
        d = t.n(o),
        s = function (e) {
          var i,
            t = e.integrator,
            o = e.feature,
            s = e.rank,
            _ =
              null === (i = o.integrators) || void 0 === i
                ? void 0
                : i.find(function (e) {
                    return e.item._ref === t._id;
                  });
          return (0, r.jsxs)(
            "div",
            {
              className: (0, n.Z)(d().mobileCellGroup, "group"),
              children: [
                (0, r.jsxs)("div", {
                  className: (0, n.Z)(
                    d().mobileCell,
                    d().mobileRankCell,
                    "text-center w-14"
                  ),
                  children: ["#", s],
                }),
                (0, r.jsx)("div", {
                  className: (0, n.Z)(d().mobileIntegrationCell, "h-[45px]"),
                  children: (0, r.jsx)(l.Z, { integrator: t }),
                }),
                (0, r.jsx)("div", {
                  className: (0, n.Z)(
                    d().mobileFeatureCell,
                    "h-[45px] group-last:border-r-0"
                  ),
                  children: (0, r.jsxs)("div", {
                    className: d().integrationContent,
                    children: [
                      !!_ &&
                        ((null === _ || void 0 === _ ? void 0 : _.detail) ||
                          (0, r.jsx)("div", {
                            className:
                              "inline-block shadow-md bg-secondary p-1.5 rounded-full text-white",
                            "aria-label": "".concat(t.name, " Supported"),
                            children: (0, r.jsx)(a.nQG, {
                              className: "h-3 w-3 md:h-5 md:w-5",
                            }),
                          })),
                      !_ &&
                        (0, r.jsx)("div", {
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
          a = e.title;
        return (0, r.jsx)("div", {
          className: "p-4 md:hidden space-y-8 rounded-b-lg shadow-md bg-white",
          children: t.map(function (e, t) {
            return (0, r.jsxs)(
              "div",
              {
                children: [
                  (0, r.jsx)("p", { children: e.title }),
                  (0, r.jsx)("p", {
                    className: "text-gray-400 text-sm mt-1",
                    children: e.description,
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "overflow-auto border border-gray-200 rounded-md mt-3",
                    children: [
                      (0, r.jsxs)("div", {
                        className: (0, n.Z)(d().mobileCellGroup, "group"),
                        children: [
                          (0, r.jsx)("div", {
                            className: (0, n.Z)(
                              d().mobileRankCell,
                              d().mobileHeaderCell,
                              "!text-[0.65rem] xs:!text-sm !px-2"
                            ),
                            children: "Integration Rank",
                          }),
                          (0, r.jsx)("div", {
                            className: (0, n.Z)(
                              d().mobileHeaderCell,
                              d().mobileIntegrationCell
                            ),
                            children: a,
                          }),
                          (0, r.jsx)("div", {
                            className: (0, n.Z)(
                              d().mobileHeaderCell,
                              d().mobileFeatureCell
                            ),
                            children: "Has Feature",
                          }),
                        ],
                      }),
                      i.map(function (i, t) {
                        return (0,
                        r.jsx)(s, { integrator: i, feature: e, rank: t + 1 }, i._id || t);
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
    65877: function (e, i, t) {
      "use strict";
      t.r(i),
        t.d(i, {
          default: function () {
            return g;
          },
        });
      var r,
        n,
        a = t(26042),
        l = t(99534),
        o = t(85893),
        d = (t(67294), t(30173)),
        s = t(84497),
        _ = t(14924);
      !(function (e) {
        (e.AERIALYTIC = "Aerialytic"),
          (e.AURORA = "Aurora"),
          (e.SOLO = "Solo"),
          (e.EVERBRIGHT = "Everbright (Sighten)"),
          (e.HELIOQUOTE = "HelioQuote"),
          (e.MANUAL_DESIGN = "Manual Design");
      })(r || (r = {}));
      var m =
          ((n = {}),
          (0, _.Z)(n, r.AERIALYTIC, {
            _id: r.AERIALYTIC,
            name: r.AERIALYTIC,
            orderRank: "1",
          }),
          (0, _.Z)(n, r.AURORA, {
            _id: r.AURORA,
            name: r.AURORA,
            orderRank: "2",
          }),
          (0, _.Z)(n, r.SOLO, { _id: r.SOLO, name: r.SOLO, orderRank: "3" }),
          (0, _.Z)(n, r.EVERBRIGHT, {
            _id: r.EVERBRIGHT,
            name: r.EVERBRIGHT,
            orderRank: "4",
          }),
          (0, _.Z)(n, r.HELIOQUOTE, {
            _id: r.HELIOQUOTE,
            name: r.HELIOQUOTE,
            orderRank: "5",
          }),
          (0, _.Z)(n, r.MANUAL_DESIGN, {
            _id: r.MANUAL_DESIGN,
            name: r.MANUAL_DESIGN,
            orderRank: "6",
          }),
          n),
        c = Object.values(m).sort(function (e, i) {
          return Number(e.orderRank) - Number(i.orderRank);
        }),
        f = [
          {
            title: "Start the Design Process within Enerflo",
            description:
              "Initiate a design request within Enerflo for the design tool",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
              { item: { _ref: m[r.SOLO]._id } },
              { item: { _ref: m[r.EVERBRIGHT]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
              { item: { _ref: m[r.MANUAL_DESIGN]._id } },
            ],
          },
          {
            title: "Instant AI Design",
            description:
              "Automatic AI modeling of rooftops without requiring a human designer",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
            ],
          },
          {
            title: "DIY Design",
            description:
              "Allow the sales rep to build their own design from scratch",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
            ],
          },
          {
            title: "Turn Around Time",
            description: "Speed to get a design built and ready for a proposal",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id }, detail: "30 seconds" },
              { item: { _ref: m[r.AURORA]._id }, detail: "60 seconds" },
              { item: { _ref: m[r.SOLO]._id }, detail: "10 minutes" },
              { item: { _ref: m[r.EVERBRIGHT]._id }, detail: "7 minutes" },
              { item: { _ref: m[r.HELIOQUOTE]._id }, detail: "10 minutes" },
              { item: { _ref: m[r.MANUAL_DESIGN]._id }, detail: "Varies" },
            ],
          },
          {
            title: "Add/Remove Trees or Roof Planes",
            description: "Allow for trees to be added/removed in real-time",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.EVERBRIGHT]._id } },
            ],
          },
          {
            title: "Complete Raw Data Set",
            description:
              "Complete data set including production by array, roof measurements, tilt, azimuth etc",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.SOLO]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
            ],
          },
          {
            title: "Sync Consumption Data",
            description: "Configure consumption data within Enerflo",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
              { item: { _ref: m[r.SOLO]._id } },
              { item: { _ref: m[r.EVERBRIGHT]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
              { item: { _ref: m[r.MANUAL_DESIGN]._id } },
            ],
          },
          {
            title: "Multiple Consumption Profiles",
            description:
              "Selection of alternative consumption profile supported",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
              { item: { _ref: m[r.SOLO]._id } },
              { item: { _ref: m[r.EVERBRIGHT]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
              { item: { _ref: m[r.MANUAL_DESIGN]._id } },
            ],
          },
          {
            title: "Ground Mounts",
            description:
              "Get designs back for ground mounts or where there is no imagery",
            integrators: [
              { item: { _ref: m[r.AURORA]._id } },
              { item: { _ref: m[r.SOLO]._id } },
              { item: { _ref: m[r.EVERBRIGHT]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
              { item: { _ref: m[r.MANUAL_DESIGN]._id } },
            ],
          },
          {
            title: "Design Versioning",
            description:
              "Sync multiple versions of a design without requesting a new design",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
              { item: { _ref: m[r.SOLO]._id } },
              { item: { _ref: m[r.EVERBRIGHT]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
              { item: { _ref: m[r.MANUAL_DESIGN]._id } },
            ],
          },
          {
            title: "3D Modeling",
            description: "Design returned with a 3D model rendering",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
            ],
          },
          {
            title: "Add/Remove Panels in Enerflo's Proposal Tool (Optimus)",
            description:
              "Ability to make panel modifications within the proposal via iframe",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.SOLO]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
              { item: { _ref: m[r.MANUAL_DESIGN]._id } },
            ],
          },
          {
            title: "Design Auto Sync",
            description:
              "Update the design in Enerflo when modifications are made in the design tool",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
              { item: { _ref: m[r.SOLO]._id } },
              { item: { _ref: m[r.EVERBRIGHT]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
            ],
          },
          {
            title: "Equipment Changes",
            description:
              "Ability to change equipment on the fly without a redesign",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
              { item: { _ref: m[r.EVERBRIGHT]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
            ],
          },
          {
            title: "User Validation",
            description:
              "Ensure sales reps have user rights in the integrated design tool",
            integrators: [
              { item: { _ref: m[r.AERIALYTIC]._id } },
              { item: { _ref: m[r.AURORA]._id } },
              { item: { _ref: m[r.SOLO]._id } },
              { item: { _ref: m[r.EVERBRIGHT]._id } },
              { item: { _ref: m[r.HELIOQUOTE]._id } },
              { item: { _ref: m[r.MANUAL_DESIGN]._id } },
            ],
          },
        ],
        u = "Solar Design Tools & Services",
        g = function (e) {
          var i = e.features,
            t = e.integratorsList,
            r = (0, l.Z)(e, ["features", "integratorsList"]),
            n =
              !!(null === i || void 0 === i ? void 0 : i.length) &&
              !!(null === t || void 0 === t ? void 0 : t.length),
            _ = { features: n ? i : f, integratorsList: n ? t : c };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(d.Z, (0, a.Z)({ title: u }, _, r)),
              (0, o.jsx)(s.Z, (0, a.Z)({ title: u }, _, r)),
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
//# sourceMappingURL=5877.cdf92459554a4285.js.map
