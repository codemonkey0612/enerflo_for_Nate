(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4634],
  {
    1389: function (e, n) {
      "use strict";
      n.Z = [
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
    9475: function (e, n, t) {
      "use strict";
      t.d(n, {
        EZ: function () {
          return l;
        },
        kR: function () {
          return s;
        },
      });
      var r = t(85893),
        o = t(86010),
        i = t(25675),
        a = t.n(i),
        u = (t(67294), t(1389)),
        c = t(32731),
        s = 0.2,
        l = 100;
      u.Z.length;
      n.ZP = function (e) {
        var n = e.integration,
          t = e.row,
          i = e.animate,
          u = "item-".concat(t, "-").concat(n),
          s = (0, c.Z)(i);
        return (0, r.jsx)("div", {
          className: (0, o.Z)("random-animation", u, s),
          title: n,
          children: (0, r.jsx)(a(), {
            src: "/images/logos/".concat(n, ".svg"),
            alt: "".concat(n, " logo"),
            height: "".concat(141, "px"),
            width: "".concat(141, "px"),
            loading: "eager",
          }),
        });
      };
    },
    32731: function (e, n, t) {
      "use strict";
      var r = t(67294),
        o = ["expand", "down", "up"];
      n.Z = function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30,
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 1e3,
          a = (0, r.useRef)(null),
          u = (0, r.useRef)(e),
          c = (0, r.useState)(null),
          s = c[0],
          l = c[1],
          f = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(
            function () {
              (u.current = e),
                e &&
                  (s
                    ? (f.current = setTimeout(function () {
                        l(null);
                      }, i))
                    : (a.current = setTimeout(function () {
                        if (u.current) {
                          var e = Math.floor(Math.random() * n.length);
                          l(n[e]);
                        }
                      }, 1e3 * Math.floor(Math.random() * t))));
            },
            [e, s, n, t, i]
          ),
          (0, r.useEffect)(function () {
            return function () {
              f.current && clearTimeout(f.current),
                a.current && clearTimeout(a.current);
            };
          }, []),
          s
        );
      };
    },
    84634: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
        });
      var r = t(85893),
        o = t(67294),
        i = t(13551),
        a = t(9475),
        u = t(90776),
        c = t.n(u),
        s = t(29815),
        l = t(86010),
        f = t(25675),
        g = t.n(f),
        d = t(1389),
        m = t(32731),
        h = (0, s.Z)(d.Z).concat(["YourIntegrationHere"]),
        v = function (e) {
          var n = e.breakIndices,
            t = e.index,
            i = e.integration,
            a = e.yOffset,
            u = e.xOffset,
            s = (0, m.Z)(!0),
            f = n.indexOf(t),
            d = (0, o.useMemo)(
              function () {
                if (t !== h.length - 1) return !1;
                var e = h.length - n[n.length - 1],
                  r = (h.length - n[n.length - 2] - e) % 2 === 0,
                  o = e % 2 === 0;
                return (r && o) || (!r && !o);
              },
              [n, t]
            );
          return (0, r.jsxs)(
            o.Fragment,
            {
              children: [
                f > -1 &&
                  (0, r.jsx)(
                    "div",
                    { className: (0, l.Z)(c().break) },
                    "".concat(t, "_break")
                  ),
                (0, r.jsx)("div", {
                  className: (0, l.Z)("random-animation", c().logo, s),
                  style: { marginBottom: a, marginLeft: -u, marginRight: -u },
                  title: i,
                  children: (0, r.jsx)(g(), {
                    src: "/images/logos/".concat(i, ".svg"),
                    alt: "".concat(i, " logo"),
                    height: "".concat(141, "px"),
                    width: "".concat(141, "px"),
                    layout: "responsive",
                  }),
                }),
                d &&
                  (0, r.jsx)("div", {
                    className: c().logo,
                    style: { marginBottom: a, marginLeft: -u, marginRight: -u },
                  }),
              ],
            },
            i
          );
        },
        p = function () {
          var e = (0, o.useRef)(null),
            n = (0, o.useState)([]),
            t = n[0],
            u = n[1],
            s = (0, o.useState)(parseInt(c().logoSize)),
            l = s[0],
            f = s[1],
            g = (0, o.useRef)(0),
            d = (l * a.kR) / 2,
            m = (0, o.useRef)(0),
            p = (0, o.useCallback)(function () {
              var e = c().logoSize;
              return (
                window.innerWidth > 500 && (e = c().xsLogoSize),
                window.innerWidth > 768 && (e = c().mdLogoSize),
                parseInt(e)
              );
            }, []),
            b = (0, o.useCallback)(
              function () {
                if (e.current && m.current !== window.innerWidth) {
                  m.current = window.innerWidth;
                  var n = p(),
                    t = (100 - 100 * a.kR) / 100,
                    r = Math.floor(e.current.clientWidth / (n * t));
                  f(n),
                    u(
                      (function (e) {
                        for (var n = [], t = 0, r = [e, e - 1]; t < h.length; )
                          for (var o = 0; o < r.length; o++)
                            (t += r[o]) >= h.length || n.push(t);
                        return n;
                      })(r)
                    );
                }
              },
              [p]
            );
          return (
            (0, o.useEffect)(
              function () {
                return (
                  b(),
                  window.addEventListener("resize", b),
                  function () {
                    window.removeEventListener("resize", b);
                  }
                );
              },
              [b]
            ),
            (0, r.jsx)(i.I, {
              className: "items-center pb-10 sm:pb-14",
              children: (0, r.jsx)("div", {
                className: "px-4",
                children: (0, r.jsx)("div", {
                  className: c().logos,
                  ref: e,
                  children: h.map(function (e, n) {
                    var o = t.indexOf(n);
                    return (
                      0 === n ? (g.current = 0) : o > -1 && (g.current = o),
                      (0, r.jsx)(
                        v,
                        {
                          breakIndices: t,
                          index: n,
                          integration: e,
                          yOffset: -0.35 * l,
                          xOffset: d,
                        },
                        e
                      )
                    );
                  }),
                }),
              }),
            })
          );
        };
    },
    90776: function (e) {
      e.exports = {
        logoSize: "80px",
        xsLogoSize: "120px",
        mdLogoSize: "160px",
        logos: "logos_logos__mrsLw",
        logo: "logos_logo__ye_uR",
        break: "logos_break__2RQ5_",
      };
    },
    20943: function (e, n, t) {
      "use strict";
      function r(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    13375: function (e, n, t) {
      "use strict";
      function r(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    29815: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(20943);
      var o = t(13375);
      var i = t(91566);
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
    91566: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(20943);
      function o(e, n) {
        if (e) {
          if ("string" === typeof e) return (0, r.Z)(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(t)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? (0, r.Z)(e, n)
              : void 0
          );
        }
      }
    },
  },
]);
//# sourceMappingURL=4634.1c33c64b65330ed5.js.map
