(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8915],
  {
    93027: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/privacy",
        function () {
          return t(925);
        },
      ]);
    },
    92763: function (e, r, t) {
      "use strict";
      var c = t(85893),
        n = t(67294),
        a = t(39666),
        i = t(88104),
        l = t(78708),
        s = t.n(l);
      r.Z = function (e) {
        var r = e.title,
          t = e.id,
          l =
            "https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=".concat(
              t
            );
        return (
          (0, n.useEffect)(
            function () {
              fetch(l).catch(function (e) {
                a.Tb(
                  new Error(
                    "There was an error loading the Termly policy iframe: ".concat(
                      l
                    )
                  )
                );
              });
            },
            [l, t]
          ),
          (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)("div", {
              className: s().content,
              children: (0, c.jsxs)("div", {
                className: s().card,
                children: [
                  (0, c.jsx)("div", {
                    className: s().cardHeader,
                    children:
                      !!r &&
                      (0, c.jsx)(i.Z, {
                        tag: "h3",
                        size: "h6",
                        fontWeight: "regular",
                        className: "text-gray-800",
                        children: r,
                      }),
                  }),
                  (0, c.jsx)("iframe", {
                    title: r,
                    src: l,
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
    925: function (e, r, t) {
      "use strict";
      t.r(r);
      var c = t(85893),
        n = t(53512),
        a = t(92763);
      r.default = function () {
        return (0, c.jsx)(n.Z, {
          title: "Privacy Policy",
          children: (0, c.jsx)(a.Z, {
            title: "Enerflo Privacy Policy",
            id: "45c80f61-fb5f-4451-8f22-4ea0e21f8b2f",
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
      return (r = 93027), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
//# sourceMappingURL=privacy-5ceab178ff5715d1.js.map
