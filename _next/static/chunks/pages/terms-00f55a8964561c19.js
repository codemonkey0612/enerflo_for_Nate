(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6890],
  {
    22871: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/terms",
        function () {
          return t(50386);
        },
      ]);
    },
    92763: function (e, r, t) {
      "use strict";
      var n = t(85893),
        c = t(67294),
        a = t(39666),
        i = t(88104),
        s = t(78708),
        l = t.n(s);
      r.Z = function (e) {
        var r = e.title,
          t = e.id,
          s =
            "https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=".concat(
              t
            );
        return (
          (0, c.useEffect)(
            function () {
              fetch(s).catch(function (e) {
                a.Tb(
                  new Error(
                    "There was an error loading the Termly policy iframe: ".concat(
                      s
                    )
                  )
                );
              });
            },
            [s, t]
          ),
          (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("div", {
              className: l().content,
              children: (0, n.jsxs)("div", {
                className: l().card,
                children: [
                  (0, n.jsx)("div", {
                    className: l().cardHeader,
                    children:
                      !!r &&
                      (0, n.jsx)(i.Z, {
                        tag: "h3",
                        size: "h6",
                        fontWeight: "regular",
                        className: "text-gray-800",
                        children: r,
                      }),
                  }),
                  (0, n.jsx)("iframe", {
                    title: r,
                    src: s,
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
    50386: function (e, r, t) {
      "use strict";
      t.r(r);
      var n = t(85893),
        c = t(53512),
        a = t(92763);
      r.default = function () {
        return (0, n.jsx)(c.Z, {
          title: "Terms of Use",
          children: (0, n.jsx)(a.Z, {
            title: "Enerflo Terms of Use",
            id: "427a688d-1707-49f7-9afe-ea08d2f0e40e",
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
      return (r = 22871), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
//# sourceMappingURL=terms-00f55a8964561c19.js.map
