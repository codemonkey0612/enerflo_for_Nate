(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9297],
  {
    1389: function (e, t) {
      "use strict";
      t.Z = [
        "Aerialytic",
        "Amigo",
        "Aurora",
        "BlueBanyan",
        "Calltools",
        "CallPilot",
        "Copper",
        "Dividend",
        "Everbright",
        "Five9",
        "Gamify",
        "Genability",
        "Goodleap",
        "GoogleCalendar",
        "GoogleDrive",
        "GoogleSheets",
        "HelioQuote",
        "HighLevel",
        "Hubspot",
        "Insightly",
        "JobNimbus",
        "Jotform",
        "LoanPal",
        "Lumifi",
        "Monday",
        "Mosaic",
        "OneEthos",
        "PalmettoLightReach",
        "PayKeeper",
        "PipeDrive",
        "Podio",
        "PVWatts",
        "Quickbase",
        "RepCard",
        "SalesForce",
        "SalesRabbit",
        "ScoopSolar",
        "Sendgrid",
        "Smartboard",
        "Smartsheets",
        "Solo",
        "Spinify",
        "Spotio",
        "Sunbase",
        "SungageFinancial",
        "Sunlight",
        "Sunnova",
        "Twilio",
        "Zapier",
        "Zoho",
        "Zoom",
      ];
    },
    9475: function (e, t, n) {
      "use strict";
      n.d(t, {
        EZ: function () {
          return u;
        },
        kR: function () {
          return c;
        },
      });
      var r = n(85893),
        o = n(86010),
        i = n(25675),
        a = n.n(i),
        l = (n(67294), n(1389)),
        s = n(32731),
        c = 0.2,
        u = 100;
      l.Z.length;
      t.ZP = function (e) {
        var t = e.integration,
          n = e.row,
          i = e.animate,
          l = "item-".concat(n, "-").concat(t),
          c = (0, s.Z)(i);
        return (0, r.jsx)("div", {
          className: (0, o.Z)("random-animation", l, c),
          title: t,
          children: (0, r.jsx)(a(), {
            src: "/images/logos/".concat(t, ".svg"),
            alt: "".concat(t, " logo"),
            height: "".concat(141, "px"),
            width: "".concat(141, "px"),
            loading: "eager",
          }),
        });
      };
    },
    32731: function (e, t, n) {
      "use strict";
      var r = n(67294),
        o = ["expand", "down", "up"];
      t.Z = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30,
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 1e3,
          a = (0, r.useRef)(null),
          l = (0, r.useRef)(e),
          s = (0, r.useState)(null),
          c = s[0],
          u = s[1],
          f = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(
            function () {
              (l.current = e),
                e &&
                  (c
                    ? (f.current = setTimeout(function () {
                        u(null);
                      }, i))
                    : (a.current = setTimeout(function () {
                        if (l.current) {
                          var e = Math.floor(Math.random() * t.length);
                          u(t[e]);
                        }
                      }, 1e3 * Math.floor(Math.random() * n))));
            },
            [e, c, t, n, i]
          ),
          (0, r.useEffect)(function () {
            return function () {
              f.current && clearTimeout(f.current),
                a.current && clearTimeout(a.current);
            };
          }, []),
          c
        );
      };
    },
    29297: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var r = n(85893),
        o = n(67294),
        i = n(88104),
        a = n(13551),
        l = n(29815),
        s = n(86010),
        c = n(22894),
        u = n.n(c),
        f = n(1389),
        d = n(9475),
        h = { height: d.EZ, width: d.EZ, marginLeft: -d.EZ * d.kR },
        m = function (e) {
          var t = e.rows,
            n = e.animate;
          return (0, r.jsx)("div", {
            className: "relative inline-block",
            children: t.map(function (e, t) {
              return (0, r.jsx)(
                "div",
                {
                  className: u().row,
                  style: {
                    top: -t * d.EZ * 0.4,
                    marginLeft:
                      t % 2 !== 0 ? -(d.EZ / 2 - (d.EZ * d.kR) / 2) : 0,
                  },
                  children: e.map(function (e) {
                    return (0,
                    r.jsx)("div", { className: "inline-block", style: h, children: (0, r.jsx)(d.ZP, { integration: e, animate: n, row: t }) }, e);
                  }),
                },
                t
              );
            }),
          });
        },
        g = function (e, t) {
          var n = e.slice(0, t),
            r = e.slice(t, e.length);
          return (0, l.Z)(r).concat((0, l.Z)(n));
        },
        p = function () {
          var e = (0, o.useState)(!1),
            t = e[0],
            n = e[1],
            i = (0, o.useMemo)(function () {
              for (var e = f.Z.length / 3, t = [], n = 0; n < 3; n++)
                t.push(g(f.Z, (e + 1) * n));
              return t;
            }, []);
          return (
            (0, o.useEffect)(function () {
              n(!0);
            }, []),
            (0, r.jsx)("div", {
              className: "w-full relative overflow-hidden whitespace-nowrap",
              style: { height: i.length * (0.9 * d.EZ) },
              children: (0, r.jsxs)("div", {
                className: (0, s.Z)(u().scroller, t && u().animate),
                children: [
                  (0, r.jsx)(m, { rows: i }),
                  (0, r.jsx)(m, { rows: i }),
                ],
              }),
            })
          );
        },
        v = "Make Enerflo Your Own. Integrate Your Favorite Tools.",
        y = function () {
          return (0, r.jsx)("div", {
            className: "bg-gray-100",
            children: (0, r.jsxs)(a.Z, {
              title: v,
              className: "flex-col space-y-0 md:space-x-0 px-0",
              children: [
                (0, r.jsxs)(a.Z.Content, {
                  className: "w-full py-6 md:w-2/3 md:py-8 md:text-center",
                  children: [
                    (0, r.jsx)(a.Z.Header, {
                      children: (0, r.jsx)(i.Z, { tag: "h2", children: v }),
                    }),
                    (0, r.jsx)(a.Z.Description, {
                      className: "text-gray-400",
                      children:
                        "Enerflo leads the way with the most 3rd party integrations, giving you the flexibility to keep the CRM, tools and/or processes you love. Key dates, information and data are all intelligently synced back through Enerflo, ensuring data compatibility and accuracy so you can focus on getting glass on the roof.",
                    }),
                  ],
                }),
                (0, r.jsx)("figure", {
                  className: "w-full",
                  children: (0, r.jsx)(p, {}),
                }),
              ],
            }),
          });
        };
    },
    22894: function (e) {
      e.exports = {
        scroller: "integrations-scroller_scroller____3_2",
        row: "integrations-scroller_row__kI3sp",
        animate: "integrations-scroller_animate__GZ0hE",
        slide: "integrations-scroller_slide__yT0kb",
      };
    },
    20943: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    13375: function (e, t, n) {
      "use strict";
      function r(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    29815: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(20943);
      var o = n(13375);
      var i = n(91566);
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (0, o.Z)(e) ||
          (0, i.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    91566: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(20943);
      function o(e, t) {
        if (e) {
          if ("string" === typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(e, t)
              : void 0
          );
        }
      }
    },
  },
]);
//# sourceMappingURL=9297.7472abb95a3abe50.js.map
