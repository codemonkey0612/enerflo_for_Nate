"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2339],
  {
    2339: function (t, e, n) {
      n.r(e);
      var r = n(828),
        i = n(85893),
        o = n(67294),
        u = n(93791),
        c = function (t, e, n, r) {
          var i = (function (t, e) {
              var n = e[0] - t[0],
                r = e[1] - t[1];
              return {
                length: Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2)),
                angle: Math.atan2(r, n),
              };
            })(e || t, n || t),
            o = i.angle + (r ? Math.PI : 0),
            u = 0.2 * i.length;
          return [t[0] + Math.cos(o) * u, t[1] + Math.sin(o) * u];
        };
      e.default = function () {
        var t = (0, o.useState)(0),
          e = t[0],
          n = t[1],
          a = (0, o.useRef)(null),
          s = (0, o.useRef)(null),
          l = (0, o.useRef)(null),
          d = (0, o.useRef)(null),
          f = (0, o.useRef)(null),
          h = (0, o.useRef)(null),
          g = (0, o.useRef)(0),
          v = (0, o.useCallback)(
            function () {
              var t;
              if (s.current && l.current && f.current && h.current) {
                var n = l.current.getBoundingClientRect(),
                  r =
                    null === (t = document.getElementById(u.EH)) || void 0 === t
                      ? void 0
                      : t.getBoundingClientRect(),
                  i =
                    document.documentElement.clientHeight +
                    ((null === r || void 0 === r ? void 0 : r.height) || 0),
                  o = (i / 2 - n.top) / n.height,
                  c = e * o;
                c > 0 &&
                  s.current.setAttribute(
                    "stroke-dashoffset",
                    (e - c).toString()
                  );
                var a = s.current.getPointAtLength(o * e);
                f.current.setAttribute(
                  "transform",
                  "translate(".concat(a.x, ",").concat(a.y, ")")
                ),
                  h.current.setAttribute("y1", "".concat(a.y - i / 2.5)),
                  h.current.setAttribute("y2", "".concat(a.y));
              }
            },
            [e]
          ),
          p = (0, o.useCallback)(
            function () {
              if (
                g.current !== window.innerWidth &&
                a.current &&
                s.current &&
                d.current
              ) {
                g.current = window.innerWidth;
                var t = (function (t) {
                    for (
                      var e = { height: 0, width: 0 },
                        n = [],
                        r = document.documentElement.clientWidth,
                        i = r < 768,
                        o = 0,
                        u = 0;
                      u < t.length;
                      u++
                    ) {
                      var c = t[u].getBoundingClientRect();
                      if (!e.width) {
                        e.width = c.width;
                        var a = [c.width / 2, 0];
                        n.push(a);
                      }
                      e.height += c.height;
                      var s = e.width / 2,
                        l = 0 === u ? 0 : o,
                        d = u % 2 === 0,
                        f = Math.min(125, s / 7),
                        h = d ? s - f : s + f;
                      if (i) {
                        var g = 0.05 * r;
                        h = d ? g : r - g;
                      }
                      var v = [h, l + c.height / 2];
                      (o = l + c.height),
                        n.push(v),
                        u === t.length - 1 && n.push([s, l + c.height]);
                    }
                    return { points: n, totalDimensions: e };
                  })(document.querySelectorAll(".timeline-section-wrapper")),
                  e = t.totalDimensions,
                  i = t.points;
                d.current.setAttribute("width", e.width.toString()),
                  d.current.setAttribute("height", e.height.toString()),
                  d.current.setAttribute(
                    "viewBox",
                    "0 0 ".concat(e.width, " ").concat(e.height)
                  );
                var o = (function (t) {
                  return t.reduce(function (e, n, i) {
                    if (0 === i) return "m ".concat(n[0], " ").concat(n[1]);
                    var o = (0, r.Z)(c(t[i - 1], t[i - 2], n), 2),
                      u = o[0],
                      a = o[1],
                      s = (0, r.Z)(c(n, t[i - 1], t[i + 1], !0), 2),
                      l = s[0],
                      d = s[1];
                    return ""
                      .concat(e, " C ")
                      .concat(u, ",")
                      .concat(a, " ")
                      .concat(l, ",")
                      .concat(d, " ")
                      .concat(n[0], ",")
                      .concat(n[1]);
                  }, "");
                })(i);
                a.current.setAttribute("d", o), s.current.setAttribute("d", o);
                var u = a.current.getTotalLength();
                n(u),
                  s.current.setAttribute(
                    "stroke-dasharray",
                    "".concat(u, " ").concat(u)
                  ),
                  s.current.setAttribute("stroke-dashoffset", u.toString()),
                  v();
              }
            },
            [v]
          );
        return (
          (0, o.useEffect)(
            function () {
              p();
            },
            [p]
          ),
          (0, o.useEffect)(
            function () {
              return (
                window.addEventListener("scroll", v),
                function () {
                  window.removeEventListener("scroll", v);
                }
              );
            },
            [v]
          ),
          (0, o.useEffect)(
            function () {
              return (
                window.addEventListener("resize", p),
                function () {
                  window.removeEventListener("resize", p);
                }
              );
            },
            [p]
          ),
          (0, i.jsx)("div", {
            className: "h-full w-full absolute inset-0 z-0",
            ref: l,
            children: (0, i.jsxs)("svg", {
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: d,
              children: [
                (0, i.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  stroke: "white",
                  strokeWidth: 4,
                  ref: a,
                }),
                (0, i.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  stroke: "url(#timelineGradient)",
                  strokeLinecap: "round",
                  strokeWidth: 11,
                  ref: s,
                }),
                (0, i.jsx)("g", {
                  filter: "url(#dropshadow)",
                  children: (0, i.jsx)("circle", {
                    cx: "0",
                    cy: "0",
                    r: "9",
                    fill: "#42A4FF",
                    stroke: "white",
                    strokeWidth: "4",
                    ref: f,
                  }),
                }),
                (0, i.jsxs)("defs", {
                  children: [
                    (0, i.jsxs)("filter", {
                      id: "dropshadow",
                      x: "-3",
                      y: "-3",
                      width: "9",
                      height: "9",
                      children: [
                        (0, i.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, i.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, i.jsx)("feOffset", { dy: "0" }),
                        (0, i.jsx)("feGaussianBlur", { stdDeviation: "7" }),
                        (0, i.jsx)("feColorMatrix", {
                          type: "matrix",
                          values:
                            "0 0 0 0 0.1 0 0 0 0 0.2 0 0 0 0 1 0 0 0 0.3 0",
                        }),
                        (0, i.jsx)("feBlend", {
                          mode: "normal",
                          in2: "BackgroundImageFix",
                          result: "effect1_dropShadow_118",
                        }),
                        (0, i.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_118",
                          result: "shape",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("linearGradient", {
                      id: "timelineGradient",
                      x1: "0",
                      y1: "0",
                      x2: "0",
                      y2: "0",
                      gradientUnits: "userSpaceOnUse",
                      ref: h,
                      children: [
                        (0, i.jsx)("stop", {
                          offset: "0%",
                          stopColor: "white",
                        }),
                        (0, i.jsx)("stop", {
                          offset: "100%",
                          stopColor: "#42A4FF",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    20943: function (t, e, n) {
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    13375: function (t, e, n) {
      function r(t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    828: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r = n(13375);
      var i = n(91566);
      function o(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (0, r.Z)(t, e) ||
          (0, i.Z)(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    91566: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(20943);
      function i(t, e) {
        if (t) {
          if ("string" === typeof t) return (0, r.Z)(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(t, e)
              : void 0
          );
        }
      }
    },
  },
]);
//# sourceMappingURL=2339.65750b6f2ae60b54.js.map
