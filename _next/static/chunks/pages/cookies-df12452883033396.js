(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6900],
  {
    89498: function (e, t, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/cookies",
        function () {
          return c(53232);
        },
      ]);
    },
    92763: function (e, t, c) {
      "use strict";
      var r = c(85893),
        n = c(67294),
        a = c(39666),
        i = c(88104),
        o = c(78708),
        l = c.n(o);
      t.Z = function (e) {
        var t = e.title,
          c = e.id,
          o =
            "https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=".concat(
              c
            );
        return (
          (0, n.useEffect)(
            function () {
              fetch(o).catch(function (e) {
                a.Tb(
                  new Error(
                    "There was an error loading the Termly policy iframe: ".concat(
                      o
                    )
                  )
                );
              });
            },
            [o, c]
          ),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: l().content,
              children: (0, r.jsxs)("div", {
                className: l().card,
                children: [
                  (0, r.jsx)("div", {
                    className: l().cardHeader,
                    children:
                      !!t &&
                      (0, r.jsx)(i.Z, {
                        tag: "h3",
                        size: "h6",
                        fontWeight: "regular",
                        className: "text-gray-800",
                        children: t,
                      }),
                  }),
                  (0, r.jsx)("iframe", {
                    title: t,
                    src: o,
                    className: "w-full h-screen",
                    allowFullScreen: !0,
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    53232: function (e, t, c) {
      "use strict";
      c.r(t);
      var r = c(85893),
        n = c(53512),
        a = c(92763);
      t.default = function () {
        return (0, r.jsx)(n.Z, {
          title: "Cookie Notice",
          children: (0, r.jsx)(a.Z, {
            title: "Enerflo Cookie Notice",
            id: "22a5d5c4-4330-4cec-aaa8-773070eddaf6",
          }),
        });
      };
    },
    78708: function (e) {
      e.exports = {
        content: "termly-embed_content__4jJe2",
        card: "termly-embed_card__RBxOk",
        cardHeader: "termly-embed_cardHeader__5tC_C",
      };
    },
  },
  function (e) {
    e.O(0, [7112, 1999, 3512, 9774, 2888, 179], function () {
      return (t = 89498), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=cookies-df12452883033396.js.map
