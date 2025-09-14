(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5308, 7959],
  {
    30173: function (e, t, i) {
      "use strict";
      var a = i(85893),
        l = (i(67294), i(86010)),
        r = i(63801),
        n = i(20114),
        s = i(17819),
        o = i.n(s),
        d = function (e) {
          var t,
            i = e.integrator,
            l =
              null === (t = e.feature.integrators) || void 0 === t
                ? void 0
                : t.find(function (e) {
                    return e.item._ref === i._id;
                  });
          return (0, a.jsx)("div", {
            className: o().integrationCell,
            children: (0, a.jsx)("div", {
              className: o().integrationContent,
              children:
                !!l &&
                ((null === l || void 0 === l ? void 0 : l.detail) ||
                  (0, a.jsx)("div", {
                    className:
                      "inline-block p-1.5 rounded-full shadow-md bg-secondary text-white",
                    "aria-label": "".concat(i.name, " Supported"),
                    children: (0, a.jsx)(r.nQG, {
                      className: "h-3 w-3 md:h-5 md:w-5",
                    }),
                  })),
            }),
          });
        };
      t.Z = function (e) {
        var t = e.integratorsList,
          i = e.features,
          r = e.title,
          s = e.className;
        return (0, a.jsxs)("div", {
          className: (0, l.Z)(
            "hidden md:block overflow-x-auto rounded-b-lg shadow-md bg-white border border-gray-200 max-h-[80vh]",
            s
          ),
          children: [
            (0, a.jsxs)("div", {
              className: "sticky top-0 border-b border-gray-300 z-[2]",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex",
                  children: [
                    (0, a.jsx)("div", {
                      className: (0, l.Z)(
                        o().featureCell,
                        "text-lg font-bold text-left"
                      ),
                      children: r,
                    }),
                    t.map(function (e, t) {
                      return (0,
                      a.jsx)("div", { className: o().integrationCell, children: (0, a.jsx)(n.Z, { integrator: e }) }, e._id || t);
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex",
                  children: [
                    (0, a.jsxs)("div", {
                      className: (0, l.Z)(
                        o().rankDescriptionCell,
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
                    t.map(function (e, t) {
                      return (0,
                      a.jsxs)("div", { className: o().rankCell, children: ["#", t + 1] }, e._id || t);
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              children: i.map(function (e, i) {
                return (0, a.jsxs)(
                  "div",
                  {
                    className: o().featureRow,
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, l.Z)(
                          o().featureCell,
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
                      t.map(function (t, i) {
                        return (0,
                        a.jsx)(d, { integrator: t, feature: e }, t._id || i);
                      }),
                    ],
                  },
                  e._id || i
                );
              }),
            }),
          ],
        });
      };
    },
    20114: function (e, t, i) {
      "use strict";
      var a = i(26042),
        l = i(69396),
        r = i(85893),
        n = i(6303),
        s = i(25675),
        o = i.n(s),
        d = i(67294),
        A = i(17819),
        _ = i.n(A);
      t.Z = function (e) {
        var t = e.integrator,
          i = (0, d.useMemo)(
            function () {
              var e = t.name;
              return t.logo
                ? t.logo.asset
                  ? (0, r.jsx)(n.Z, {
                      value: (0, l.Z)((0, a.Z)({}, t.logo), {
                        alt: "Logo - ".concat(t.name),
                      }),
                      objectFit: "contain",
                      layout: "fill",
                      withContainer: !1,
                    })
                  : (0, r.jsx)(o(), {
                      src: t.logo,
                      alt: "Logo - ".concat(t.name),
                      className: "crispImage",
                      layout: "fill",
                      objectFit: "contain",
                    })
                : e;
            },
            [t]
          );
        return (0, r.jsx)("div", {
          className: _().integrationContent,
          children: i,
        });
      };
    },
    84497: function (e, t, i) {
      "use strict";
      var a = i(85893),
        l = (i(67294), i(86010)),
        r = i(63801),
        n = i(20114),
        s = i(17819),
        o = i.n(s),
        d = function (e) {
          var t,
            i = e.integrator,
            s = e.feature,
            d = e.rank,
            A =
              null === (t = s.integrators) || void 0 === t
                ? void 0
                : t.find(function (e) {
                    return e.item._ref === i._id;
                  });
          return (0, a.jsxs)(
            "div",
            {
              className: (0, l.Z)(o().mobileCellGroup, "group"),
              children: [
                (0, a.jsxs)("div", {
                  className: (0, l.Z)(
                    o().mobileCell,
                    o().mobileRankCell,
                    "text-center w-14"
                  ),
                  children: ["#", d],
                }),
                (0, a.jsx)("div", {
                  className: (0, l.Z)(o().mobileIntegrationCell, "h-[45px]"),
                  children: (0, a.jsx)(n.Z, { integrator: i }),
                }),
                (0, a.jsx)("div", {
                  className: (0, l.Z)(
                    o().mobileFeatureCell,
                    "h-[45px] group-last:border-r-0"
                  ),
                  children: (0, a.jsxs)("div", {
                    className: o().integrationContent,
                    children: [
                      !!A &&
                        ((null === A || void 0 === A ? void 0 : A.detail) ||
                          (0, a.jsx)("div", {
                            className:
                              "inline-block shadow-md bg-secondary p-1.5 rounded-full text-white",
                            "aria-label": "".concat(i.name, " Supported"),
                            children: (0, a.jsx)(r.nQG, {
                              className: "h-3 w-3 md:h-5 md:w-5",
                            }),
                          })),
                      !A &&
                        (0, a.jsx)("div", {
                          className: "flex-grow p-1.5 h-3 w-3 md:h-5 md:w-5",
                        }),
                    ],
                  }),
                }),
              ],
            },
            i._id
          );
        };
      t.Z = function (e) {
        var t = e.integratorsList,
          i = e.features,
          r = e.title;
        return (0, a.jsx)("div", {
          className: "p-4 md:hidden space-y-8 rounded-b-lg shadow-md bg-white",
          children: i.map(function (e, i) {
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
                        className: (0, l.Z)(o().mobileCellGroup, "group"),
                        children: [
                          (0, a.jsx)("div", {
                            className: (0, l.Z)(
                              o().mobileRankCell,
                              o().mobileHeaderCell,
                              "!text-[0.65rem] xs:!text-sm !px-2"
                            ),
                            children: "Integration Rank",
                          }),
                          (0, a.jsx)("div", {
                            className: (0, l.Z)(
                              o().mobileHeaderCell,
                              o().mobileIntegrationCell
                            ),
                            children: r,
                          }),
                          (0, a.jsx)("div", {
                            className: (0, l.Z)(
                              o().mobileHeaderCell,
                              o().mobileFeatureCell
                            ),
                            children: "Has Feature",
                          }),
                        ],
                      }),
                      t.map(function (t, i) {
                        return (0,
                        a.jsx)(d, { integrator: t, feature: e, rank: i + 1 }, t._id || i);
                      }),
                    ],
                  }),
                ],
              },
              e._id || i
            );
          }),
        });
      };
    },
    85308: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return g;
          },
        });
      var a,
        l,
        r = i(26042),
        n = i(99534),
        s = i(85893),
        o = (i(67294), i(30173)),
        d = i(84497),
        A = i(14924);
      !(function (e) {
        (e.SPOTIO = "Spotio"),
          (e.GO_HIGH_LEVEL = "Go High Level"),
          (e.SALES_RABBIT = "Sales Rabbit"),
          (e.CANVASS = "Canvass");
      })(a || (a = {}));
      var _ =
          ((l = {}),
          (0, A.Z)(l, a.SPOTIO, {
            _id: a.SPOTIO,
            name: a.SPOTIO,
            logo: {
              src: "/_next/static/media/Spotio-logo.5dc2ffba.png",
              height: 206,
              width: 1e3,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGP8coSh//UH5dUmTcY29tJ/ZH7/ZbzL8P8/FwMj438GBoY/jK93sdR9+yUx16PT0lBH7O+TH78Z+f7///+ekZGRG6hACAD23hyd2b78vAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 2,
            },
            orderRank: "1",
          }),
          (0, A.Z)(l, a.GO_HIGH_LEVEL, {
            _id: a.GO_HIGH_LEVEL,
            name: a.GO_HIGH_LEVEL,
            logo: {
              src: "/_next/static/media/Highlevel-logo.64362ac2.png",
              height: 420,
              width: 1853,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAR0lEQVR4nGO8taux0I35+3sW544zD2WUf/x+dpeV4R/DWwYGBiYg5mPcvXF7XcSf1x8Zg+NevxWU1v3//ulDoMRXIGYFYn4A3Wsamshz4f4AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 2,
            },
            orderRank: "2",
          }),
          (0, A.Z)(l, a.SALES_RABBIT, {
            _id: a.SALES_RABBIT,
            name: a.SALES_RABBIT,
            logo: {
              src: "/_next/static/media/SalesRabbit-logo.604f22d8.png",
              height: 205,
              width: 778,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGN8xcCQdUdA4IqVhsZ711+/WN4zMTEyMDCwAfE/IGZkvMLAUP2En/+Ah6bmP7vfv3m+MTL+BEqwADETEP8BAJzJErKb/fPKAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 2,
            },
            orderRank: "3",
          }),
          (0, A.Z)(l, a.CANVASS, {
            _id: a.CANVASS,
            name: a.CANVASS,
            logo: {
              src: "/_next/static/media/CanvassMaster-logo.f22da4cb.png",
              height: 180,
              width: 514,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AfnBWnIAAwweo85SpmQTR9ki49MF3gcK/QD+DQAAAAj+AfdtAIn8+ABEdBCxfbHxBRgkBwL0+Pv9ByYF+hILA/39AcJ6l0gZB/ErJX8kk/91VAQAFgD7APMAAfv+ACH/BwAIzyknKcVn6tgAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 3,
            },
            orderRank: "4",
          }),
          l),
        m = Object.values(_).sort(function (e, t) {
          return Number(e.orderRank) - Number(t.orderRank);
        }),
        c = [
          {
            title: "Pass Lead details to Enerflo",
            integrators: [
              { item: { _ref: _[a.SPOTIO]._id } },
              { item: { _ref: _[a.GO_HIGH_LEVEL]._id } },
              { item: { _ref: _[a.SALES_RABBIT]._id } },
              {
                item: { _ref: _[a.CANVASS]._id },
                detail: "Canvass Controlled",
              },
            ],
          },
          {
            title:
              "Create appointment through Webhook (opens new browser window from app)",
            integrators: [
              { item: { _ref: _[a.SALES_RABBIT]._id } },
              { item: { _ref: _[a.CANVASS]._id } },
            ],
          },
          {
            title: "Pass Appointment Details when Lead is pushed",
            integrators: [
              { item: { _ref: _[a.SPOTIO]._id } },
              { item: { _ref: _[a.GO_HIGH_LEVEL]._id } },
            ],
          },
          {
            title: "Change Lead Status in Enerflo when Lead is pushed",
            integrators: [
              { item: { _ref: _[a.SPOTIO]._id } },
              { item: { _ref: _[a.GO_HIGH_LEVEL]._id } },
              { item: { _ref: _[a.SALES_RABBIT]._id } },
            ],
          },
          {
            title: "Change Lead Source in Enerflo when Lead is pushed",
            integrators: [
              { item: { _ref: _[a.SPOTIO]._id } },
              { item: { _ref: _[a.GO_HIGH_LEVEL]._id } },
              { item: { _ref: _[a.SALES_RABBIT]._id } },
            ],
          },
          {
            title: "Push utility bill to Enerflo when Lead is pushed",
            integrators: [
              { item: { _ref: _[a.SPOTIO]._id } },
              { item: { _ref: _[a.GO_HIGH_LEVEL]._id }, detail: "Custom" },
              { item: { _ref: _[a.SALES_RABBIT]._id }, detail: "Custom" },
            ],
          },
          {
            title: "Push files from Enerflo to External Application",
            integrators: [
              { item: { _ref: _[a.SPOTIO]._id }, detail: "Custom" },
              { item: { _ref: _[a.GO_HIGH_LEVEL]._id } },
            ],
          },
          {
            title:
              "Change Lead Status in External Application when progress is made on Lead in Enerflo",
            integrators: [
              { item: { _ref: _[a.SPOTIO]._id }, detail: "Custom" },
              { item: { _ref: _[a.GO_HIGH_LEVEL]._id }, detail: "Custom" },
              { item: { _ref: _[a.SALES_RABBIT]._id }, detail: "Custom" },
            ],
          },
          {
            title:
              "Change Lead Source in External Application when progress is made on Lead in Enerflo",
            integrators: [
              { item: { _ref: _[a.SPOTIO]._id }, detail: "Custom" },
              { item: { _ref: _[a.GO_HIGH_LEVEL]._id }, detail: "Custom" },
              { item: { _ref: _[a.SALES_RABBIT]._id }, detail: "Custom" },
            ],
          },
        ],
        u = "External Application",
        g = function (e) {
          var t = e.features,
            i = e.integratorsList,
            a = (0, n.Z)(e, ["features", "integratorsList"]),
            l =
              !!(null === t || void 0 === t ? void 0 : t.length) &&
              !!(null === i || void 0 === i ? void 0 : i.length),
            A = { features: l ? t : c, integratorsList: l ? i : m };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(o.Z, (0, r.Z)({ title: u }, A, a)),
              (0, s.jsx)(d.Z, (0, r.Z)({ title: u }, A, a)),
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
//# sourceMappingURL=5308.3fc33168888354eb.js.map
