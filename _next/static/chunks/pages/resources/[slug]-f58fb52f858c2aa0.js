(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5236, 4828],
  {
    62663: function (e) {
      e.exports = function (e, t, n, r) {
        var o = -1,
          i = null == e ? 0 : e.length;
        for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
        return n;
      };
    },
    49029: function (e) {
      var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      e.exports = function (e) {
        return e.match(t) || [];
      };
    },
    18674: function (e) {
      e.exports = function (e) {
        return function (t) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    35393: function (e, t, n) {
      var r = n(62663),
        o = n(53816),
        i = n(58748),
        l = RegExp("['\u2019]", "g");
      e.exports = function (e) {
        return function (t) {
          return r(i(o(t).replace(l, "")), e, "");
        };
      };
    },
    69389: function (e, t, n) {
      var r = n(18674)({
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010a": "C",
        "\u010c": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010b": "c",
        "\u010d": "c",
        "\u010e": "D",
        "\u0110": "D",
        "\u010f": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011a": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011b": "e",
        "\u011c": "G",
        "\u011e": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011d": "g",
        "\u011f": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012a": "I",
        "\u012c": "I",
        "\u012e": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012b": "i",
        "\u012d": "i",
        "\u012f": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013b": "L",
        "\u013d": "L",
        "\u013f": "L",
        "\u0141": "L",
        "\u013a": "l",
        "\u013c": "l",
        "\u013e": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014a": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014b": "n",
        "\u014c": "O",
        "\u014e": "O",
        "\u0150": "O",
        "\u014d": "o",
        "\u014f": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015a": "S",
        "\u015c": "S",
        "\u015e": "S",
        "\u0160": "S",
        "\u015b": "s",
        "\u015d": "s",
        "\u015f": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016a": "U",
        "\u016c": "U",
        "\u016e": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016b": "u",
        "\u016d": "u",
        "\u016f": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017b": "Z",
        "\u017d": "Z",
        "\u017a": "z",
        "\u017c": "z",
        "\u017e": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017f": "s",
      });
      e.exports = r;
    },
    93157: function (e) {
      var t =
        /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      e.exports = function (e) {
        return t.test(e);
      };
    },
    2757: function (e) {
      var t = "\\u2700-\\u27bf",
        n = "a-z\\xdf-\\xf6\\xf8-\\xff",
        r = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        o =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        i = "[" + o + "]",
        l = "\\d+",
        a = "[\\u2700-\\u27bf]",
        u = "[" + n + "]",
        s = "[^\\ud800-\\udfff" + o + l + t + n + r + "]",
        c = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        d = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        f = "[" + r + "]",
        p = "(?:" + u + "|" + s + ")",
        v = "(?:" + f + "|" + s + ")",
        m = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
        h = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
        g =
          "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
        x = "[\\ufe0e\\ufe0f]?",
        b =
          x +
          g +
          ("(?:\\u200d(?:" +
            ["[^\\ud800-\\udfff]", c, d].join("|") +
            ")" +
            x +
            g +
            ")*"),
        E = "(?:" + [a, c, d].join("|") + ")" + b,
        w = RegExp(
          [
            f + "?" + u + "+" + m + "(?=" + [i, f, "$"].join("|") + ")",
            v + "+" + h + "(?=" + [i, f + p, "$"].join("|") + ")",
            f + "?" + p + "+" + m,
            f + "+" + h,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            l,
            E,
          ].join("|"),
          "g"
        );
      e.exports = function (e) {
        return e.match(w) || [];
      };
    },
    53816: function (e, t, n) {
      var r = n(69389),
        o = n(79833),
        i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        l = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
      e.exports = function (e) {
        return (e = o(e)) && e.replace(i, r).replace(l, "");
      };
    },
    21804: function (e, t, n) {
      var r = n(35393)(function (e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase();
      });
      e.exports = r;
    },
    58748: function (e, t, n) {
      var r = n(49029),
        o = n(93157),
        i = n(79833),
        l = n(2757);
      e.exports = function (e, t, n) {
        return (
          (e = i(e)),
          void 0 === (t = n ? void 0 : t)
            ? o(e)
              ? l(e)
              : r(e)
            : e.match(t) || []
        );
      };
    },
    71669: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/resources/[slug]",
        function () {
          return n(74750);
        },
      ]);
    },
    13551: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return c;
        },
      });
      var r = n(85893),
        o = (n(67294), n(86010)),
        i = n(21804),
        l = n.n(i),
        a = n(41664),
        u = n.n(a),
        s = function (e) {
          var t = e.children,
            n = e.className;
          return (0, r.jsx)("div", {
            className: (0, o.Z)("heroInner", n),
            children: t,
          });
        },
        c = function (e) {
          var t = e.title,
            n = e.children,
            i = e.className,
            a = void 0 === i ? "items-center" : i;
          return (0, r.jsx)("section", {
            id: l()(t),
            className: (0, o.Z)("heroSection", a),
            children: n,
          });
        },
        d = function (e) {
          var t = e.title,
            n = e.children,
            o = e.className;
          return (0, r.jsx)(c, {
            title: t,
            children: (0, r.jsx)(s, { className: o, children: n }),
          });
        };
      (d.Header = function (e) {
        var t = e.children,
          n = e.className;
        return (0, r.jsx)("div", {
          className: (0, o.Z)("heroHeader", n),
          children: t,
        });
      }),
        (d.Inner = s),
        (d.Content = function (e) {
          var t = e.children,
            n = e.className;
          return (0, r.jsx)("div", {
            className: (0, o.Z)("heroContent", n),
            children: t,
          });
        }),
        (d.Description = function (e) {
          var t = e.children,
            n = e.className,
            i = void 0 === n ? "text-gray-500" : n;
          return (0, r.jsx)("p", {
            className: (0, o.Z)("heroDescription", i),
            children: t,
          });
        }),
        (d.Action = function (e) {
          var t = e.children,
            n = e.className,
            i = e.href;
          return (0, r.jsx)(u(), {
            href: i,
            children: (0, r.jsx)("a", {
              className: (0, o.Z)("heroAction btn", n),
              children: t,
            }),
          });
        }),
        (t.Z = d);
    },
    74750: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return T;
          },
          default: function () {
            return C;
          },
        });
      var r = n(26042),
        o = n(69396),
        i = n(85893),
        l = n(86010),
        a = n(8844),
        u = n(88104),
        s = n(13551),
        c = n(68916),
        d = n(6303),
        f = function (e) {
          var t = e.sections,
            n = e.side;
          return (0, i.jsx)("aside", {
            className: (0, l.Z)(
              "hidden px-4 pb-4 border-gray-200 bg-gray-100 basis-1/3 lg:basis-1/4 shrink-0 md:block",
              "left" === n ? "lg:pr-6 border-r-4" : "lg:pl-6 border-l-4"
            ),
            children: (0, i.jsx)("div", {
              className: "sticky top-20 space-y-8 overflow-auto",
              children: t.map(function (e) {
                return (0,
                i.jsxs)("article", { className: "space-y-2", children: [(0, i.jsx)("p", { className: "text-gray-500", children: e.title }), (0, i.jsx)(c.Z, { value: e.content })] }, e._key);
              }),
            }),
          });
        },
        p = n(57528),
        v = n(9955),
        m = n(74201),
        h = n(63672),
        g = n(54414),
        x = n(61202),
        b = n(41664),
        E = n.n(b),
        w = n(63801),
        y = n(53512),
        T = !0,
        C = function (e) {
          var t = e.resource,
            n = e.preview,
            b = t || {},
            T = b.seoTitle,
            C = b.seoDescription,
            N = b.title,
            j = b.content,
            A = b.authors,
            D = b.image,
            P = b.sideNav,
            R = b.navbar,
            k = b.footer,
            Z = b.postedDate,
            S = (0, x.J)((0, g.getClient)(), D || null);
          if (!t) return null;
          var O =
            null === A || void 0 === A
              ? void 0
              : A.map(function (e) {
                  var t = e.firstName,
                    n = e.lastName;
                  return "".concat(t, " ").concat(n);
                }).join(", ");
          return (0, i.jsxs)(y.Z, {
            title: T,
            description: C,
            imageUrl: null === S || void 0 === S ? void 0 : S.src,
            navItems:
              "default" === (null === R || void 0 === R ? void 0 : R.variant)
                ? void 0
                : (null === R || void 0 === R ? void 0 : R.items) || [],
            footer: k,
            children: [
              (0, i.jsxs)("div", {
                className: (0, l.Z)(p.K8[v.C.Gray], p.J2[v.C.Gray]),
                children: [
                  (0, i.jsx)(s.I, {
                    className: "items-center px-4",
                    children: (0, i.jsx)("div", {
                      children: (0, i.jsx)(E(), {
                        href: "/resources",
                        passHref: !0,
                        children: (0, i.jsxs)("a", {
                          className:
                            "text-gray-500 hover:text-gray-600 inline-flex items-center gap-1 mt-4 md:mt-6",
                          children: [
                            (0, i.jsx)(w.wyc, {
                              className: "h-5 w-5 relative -top-px",
                            }),
                            "Back to Resources",
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)(s.Z, {
                    className: "pb-10 sm:pb-14",
                    children: (0, i.jsxs)("div", {
                      className: "flex-grow px-6 sm:px-10 lg:px-14 text-center",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "pb-6 md:pb-10 lg:pb-14",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "flex items-center justify-center my-4 md:mt-0",
                              children: (0, i.jsx)(u.Z, {
                                tag: "h2",
                                children: N,
                              }),
                            }),
                            (0, i.jsxs)("p", {
                              className: "text-gray-500 text-sm md:text-base",
                              children: [
                                "By ",
                                O,
                                " | ",
                                (0, m.Z)(
                                  (0, h.Z)(Z, "yyyy-MM-dd", new Date()),
                                  "MMMM dd, yyyy"
                                ),
                              ],
                            }),
                          ],
                        }),
                        D &&
                          (0, i.jsx)(d.Z, {
                            value: D,
                            imageClassName: "rounded-lg w-full",
                            layout: "responsive",
                          }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)(s.I, {
                    className: (0, l.Z)(
                      (null === P || void 0 === P ? void 0 : P.show) &&
                        "left" ===
                          (null === P || void 0 === P ? void 0 : P.side) &&
                        "flex-row-reverse"
                    ),
                    children: [
                      (0, i.jsx)("div", {
                        className: "grow",
                        children:
                          null === j || void 0 === j
                            ? void 0
                            : j.map(function (e) {
                                return (0,
                                i.jsx)("div", { className: (0, l.Z)(p.K8[e.backgroundColor || v.C.Gray], (e.backgroundColor && p.J2[e.backgroundColor]) || "text-black"), children: (0, i.jsx)(s.Z, { children: (0, i.jsx)("div", { className: "flex-grow px-6 space-y-6 sm:px-10 lg:px-14 text-left", children: (0, i.jsx)(c.Z, { value: e.content }) }) }) }, e._key);
                              }),
                      }),
                      (null === P || void 0 === P ? void 0 : P.show) &&
                        (0, i.jsx)(f, {
                          sections: P.sections.map(function (e) {
                            return (0, o.Z)((0, r.Z)({}, e), {
                              content: e.content.map(function (e) {
                                return (0,
                                o.Z)((0, r.Z)({}, e), { isPreview: n, baseUrl: "/resources" });
                              }),
                            });
                          }),
                          side: P.side,
                        }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(a.default, {}),
            ],
          });
        };
    },
    25408: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return de;
        },
      });
      var r = n(67294),
        o = n(32984),
        i = n(12351),
        l = n(23784),
        a = n(61363),
        u = n(64103),
        s = n(19946),
        c = n(82180),
        d = n(46045),
        f = n(84575),
        p = n(73781),
        v = n(3855);
      var m = ((e) => (
        (e[(e.Forwards = 0)] = "Forwards"),
        (e[(e.Backwards = 1)] = "Backwards"),
        e
      ))(m || {});
      function h() {
        let e = (0, r.useRef)(0);
        return (
          (function (e, t, n) {
            let o = (0, v.E)(t);
            (0, r.useEffect)(() => {
              function t(e) {
                o.current(e);
              }
              return (
                window.addEventListener(e, t, n),
                () => window.removeEventListener(e, t, n)
              );
            }, [e, n]);
          })(
            "keydown",
            (t) => {
              "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
          ),
          e
        );
      }
      var g = n(14879),
        x = n(51074);
      function b(e, t, n, o) {
        let i = (0, v.E)(n);
        (0, r.useEffect)(() => {
          function n(e) {
            i.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, o),
            () => e.removeEventListener(t, n, o)
          );
        }, [e, t, o]);
      }
      var E = n(81021);
      function w(e, t) {
        let n = (0, r.useRef)([]),
          o = (0, p.z)(e);
        (0, r.useEffect)(() => {
          let e = [...n.current];
          for (let [r, i] of t.entries())
            if (n.current[r] !== i) {
              let r = o(t, e);
              return (n.current = t), r;
            }
        }, [o, ...t]);
      }
      var y = ((e) => (
        (e[(e.None = 1)] = "None"),
        (e[(e.InitialFocus = 2)] = "InitialFocus"),
        (e[(e.TabLock = 4)] = "TabLock"),
        (e[(e.FocusLock = 8)] = "FocusLock"),
        (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
        (e[(e.All = 30)] = "All"),
        e
      ))(y || {});
      let T = Object.assign(
        (0, i.yV)(function (e, t) {
          let n = (0, r.useRef)(null),
            a = (0, l.T)(n, t),
            { initialFocus: u, containers: s, features: v = 30, ...y } = e;
          (0, c.H)() || (v = 1);
          let T = (0, x.i)(n);
          !(function ({ ownerDocument: e }, t) {
            let n = (0, r.useRef)(null);
            b(
              null == e ? void 0 : e.defaultView,
              "focusout",
              (e) => {
                !t || n.current || (n.current = e.target);
              },
              !0
            ),
              w(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) && (0, f.C5)(n.current),
                  (n.current = null));
              }, [t]);
            let o = (0, r.useRef)(!1);
            (0, r.useEffect)(
              () => (
                (o.current = !1),
                () => {
                  (o.current = !0),
                    (0, E.Y)(() => {
                      !o.current || ((0, f.C5)(n.current), (n.current = null));
                    });
                }
              ),
              []
            );
          })({ ownerDocument: T }, Boolean(16 & v));
          let C = (function (
            { ownerDocument: e, container: t, initialFocus: n },
            o
          ) {
            let i = (0, r.useRef)(null),
              l = (0, g.t)();
            return (
              w(() => {
                if (!o) return;
                let r = t.current;
                !r ||
                  (0, E.Y)(() => {
                    if (!l.current) return;
                    let t = null == e ? void 0 : e.activeElement;
                    if (null != n && n.current) {
                      if ((null == n ? void 0 : n.current) === t)
                        return void (i.current = t);
                    } else if (r.contains(t)) return void (i.current = t);
                    null != n && n.current
                      ? (0, f.C5)(n.current)
                      : (0, f.jA)(r, f.TO.First) === f.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (i.current = null == e ? void 0 : e.activeElement);
                  });
              }, [o]),
              i
            );
          })(
            { ownerDocument: T, container: n, initialFocus: u },
            Boolean(2 & v)
          );
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: n,
              previousActiveElement: r,
            },
            o
          ) {
            let i = (0, g.t)();
            b(
              null == e ? void 0 : e.defaultView,
              "focus",
              (e) => {
                if (!o || !i.current) return;
                let l = new Set(null == n ? void 0 : n.current);
                l.add(t);
                let a = r.current;
                if (!a) return;
                let u = e.target;
                u && u instanceof HTMLElement
                  ? (function (e, t) {
                      var n;
                      for (let r of e)
                        if (null != (n = r.current) && n.contains(t)) return !0;
                      return !1;
                    })(l, u)
                    ? ((r.current = u), (0, f.C5)(u))
                    : (e.preventDefault(), e.stopPropagation(), (0, f.C5)(a))
                  : (0, f.C5)(r.current);
              },
              !0
            );
          })(
            {
              ownerDocument: T,
              container: n,
              containers: s,
              previousActiveElement: C,
            },
            Boolean(8 & v)
          );
          let N = h(),
            j = (0, p.z)(() => {
              let e = n.current;
              !e ||
                (0, o.E)(N.current, {
                  [m.Forwards]: () => (0, f.jA)(e, f.TO.First),
                  [m.Backwards]: () => (0, f.jA)(e, f.TO.Last),
                });
            }),
            A = { ref: a };
          return r.createElement(
            r.Fragment,
            null,
            Boolean(4 & v) &&
              r.createElement(d._, {
                as: "button",
                type: "button",
                onFocus: j,
                features: d.A.Focusable,
              }),
            (0, i.sY)({
              ourProps: A,
              theirProps: y,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            Boolean(4 & v) &&
              r.createElement(d._, {
                as: "button",
                type: "button",
                onFocus: j,
                features: d.A.Focusable,
              })
          );
        }),
        { features: y }
      );
      var C = n(15466),
        N = n(16723);
      let j = new Set(),
        A = new Map();
      function D(e) {
        e.setAttribute("aria-hidden", "true"), (e.inert = !0);
      }
      function P(e) {
        let t = A.get(e);
        !t ||
          (null === t["aria-hidden"]
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
          (e.inert = t.inert));
      }
      function R(e, t = !0) {
        (0, N.e)(() => {
          if (!t || !e.current) return;
          let n = e.current,
            r = (0, C.r)(n);
          if (r) {
            j.add(n);
            for (let e of A.keys()) e.contains(n) && (P(e), A.delete(e));
            return (
              r.querySelectorAll("body > *").forEach((e) => {
                if (e instanceof HTMLElement) {
                  for (let t of j) if (e.contains(t)) return;
                  1 === j.size &&
                    (A.set(e, {
                      "aria-hidden": e.getAttribute("aria-hidden"),
                      inert: e.inert,
                    }),
                    D(e));
                }
              }),
              () => {
                if ((j.delete(n), j.size > 0))
                  r.querySelectorAll("body > *").forEach((e) => {
                    if (e instanceof HTMLElement && !A.has(e)) {
                      for (let t of j) if (e.contains(t)) return;
                      A.set(e, {
                        "aria-hidden": e.getAttribute("aria-hidden"),
                        inert: e.inert,
                      }),
                        D(e);
                    }
                  });
                else for (let e of A.keys()) P(e), A.delete(e);
              }
            );
          }
        }, [t]);
      }
      var k = n(73935);
      let Z = (0, r.createContext)(!1);
      function S() {
        return (0, r.useContext)(Z);
      }
      function O(e) {
        return r.createElement(Z.Provider, { value: e.force }, e.children);
      }
      var M = n(43393);
      let F = r.Fragment,
        I = (0, i.yV)(function (e, t) {
          let n = e,
            o = (0, r.useRef)(null),
            a = (0, l.T)(
              (0, l.h)((e) => {
                o.current = e;
              }),
              t
            ),
            u = (0, x.i)(o),
            s = (function (e) {
              let t = S(),
                n = (0, r.useContext)(Y),
                o = (0, x.i)(e),
                [i, l] = (0, r.useState)(() => {
                  if ((!t && null !== n) || M.s) return null;
                  let e =
                    null == o
                      ? void 0
                      : o.getElementById("headlessui-portal-root");
                  if (e) return e;
                  if (null === o) return null;
                  let r = o.createElement("div");
                  return (
                    r.setAttribute("id", "headlessui-portal-root"),
                    o.body.appendChild(r)
                  );
                });
              return (
                (0, r.useEffect)(() => {
                  null !== i &&
                    ((null != o && o.body.contains(i)) ||
                      null == o ||
                      o.body.appendChild(i));
                }, [i, o]),
                (0, r.useEffect)(() => {
                  t || (null !== n && l(n.current));
                }, [n, l, t]),
                i
              );
            })(o),
            [d] = (0, r.useState)(() => {
              var e;
              return M.s
                ? null
                : null != (e = null == u ? void 0 : u.createElement("div"))
                ? e
                : null;
            }),
            f = (0, c.H)(),
            p = (0, r.useRef)(!1);
          return (
            (0, N.e)(() => {
              if (((p.current = !1), s && d))
                return (
                  s.contains(d) ||
                    (d.setAttribute("data-headlessui-portal", ""),
                    s.appendChild(d)),
                  () => {
                    (p.current = !0),
                      (0, E.Y)(() => {
                        var e;
                        !p.current ||
                          !s ||
                          !d ||
                          (s.removeChild(d),
                          s.childNodes.length <= 0 &&
                            (null == (e = s.parentElement) ||
                              e.removeChild(s)));
                      });
                  }
                );
            }, [s, d]),
            f && s && d
              ? (0, k.createPortal)(
                  (0, i.sY)({
                    ourProps: { ref: a },
                    theirProps: n,
                    defaultTag: F,
                    name: "Portal",
                  }),
                  d
                )
              : null
          );
        }),
        _ = r.Fragment,
        Y = (0, r.createContext)(null),
        L = (0, i.yV)(function (e, t) {
          let { target: n, ...o } = e,
            a = { ref: (0, l.T)(t) };
          return r.createElement(
            Y.Provider,
            { value: n },
            (0, i.sY)({
              ourProps: a,
              theirProps: o,
              defaultTag: _,
              name: "Popover.Group",
            })
          );
        }),
        z = Object.assign(I, { Group: L }),
        H = (0, r.createContext)(null);
      function V() {
        let e = (0, r.useContext)(H);
        if (null === e) {
          let e = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, V), e);
        }
        return e;
      }
      function B() {
        let [e, t] = (0, r.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, r.useMemo)(
            () =>
              function (e) {
                let n = (0, p.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            r = n.indexOf(e);
                          return -1 !== r && n.splice(r, 1), n;
                        })
                    )
                  ),
                  o = (0, r.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [n, e.slot, e.name, e.props]
                  );
                return r.createElement(H.Provider, { value: o }, e.children);
              },
            [t]
          ),
        ];
      }
      let U = (0, i.yV)(function (e, t) {
        let n = V(),
          r = `headlessui-description-${(0, s.M)()}`,
          o = (0, l.T)(t);
        (0, N.e)(() => n.register(r), [r, n.register]);
        let a = e,
          u = { ref: o, ...n.props, id: r };
        return (0,
        i.sY)({ ourProps: u, theirProps: a, slot: n.slot || {}, defaultTag: "p", name: n.name || "Description" });
      });
      var $ = n(16567);
      let G = (0, r.createContext)(() => {});
      G.displayName = "StackContext";
      var J = ((e) => (
        (e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e
      ))(J || {});
      function W({
        children: e,
        onUpdate: t,
        type: n,
        element: o,
        enabled: i,
      }) {
        let l = (0, r.useContext)(G),
          a = (0, p.z)((...e) => {
            null == t || t(...e), l(...e);
          });
        return (
          (0, N.e)(() => {
            let e = void 0 === i || !0 === i;
            return (
              e && a(0, n, o),
              () => {
                e && a(1, n, o);
              }
            );
          }, [a, n, o, i]),
          r.createElement(G.Provider, { value: a }, e)
        );
      }
      var K = n(39650),
        q = n(9362);
      var X = ((e) => (
          (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
        ))(X || {}),
        Q = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Q || {});
      let ee = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        te = (0, r.createContext)(null);
      function ne(e) {
        let t = (0, r.useContext)(te);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Dialog /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ne), t);
        }
        return t;
      }
      function re(e, t) {
        (0, r.useEffect)(() => {
          var n;
          if (!t || !e) return;
          let r = (0, q.k)();
          function o(e, t, n) {
            let o = e.style.getPropertyValue(t);
            return (
              Object.assign(e.style, { [t]: n }),
              r.add(() => {
                Object.assign(e.style, { [t]: o });
              })
            );
          }
          let i = e.documentElement,
            l =
              (null != (n = e.defaultView) ? n : window).innerWidth -
              i.clientWidth;
          if ((o(i, "overflow", "hidden"), l > 0)) {
            o(i, "paddingRight", `${l - (i.clientWidth - i.offsetWidth)}px`);
          }
          if (
            /iPhone/gi.test(window.navigator.platform) ||
            (/Mac/gi.test(window.navigator.platform) &&
              window.navigator.maxTouchPoints > 0)
          ) {
            let e = window.pageYOffset;
            o(i, "position", "fixed"),
              o(i, "marginTop", `-${e}px`),
              o(i, "width", "100%"),
              r.add(() => window.scrollTo(0, e));
          }
          return r.dispose;
        }, [e, t]);
      }
      function oe(e, t) {
        return (0, o.E)(t.type, ee, e, t);
      }
      te.displayName = "DialogContext";
      let ie = i.AN.RenderStrategy | i.AN.Static,
        le = (0, i.yV)(function (e, t) {
          let {
              open: n,
              onClose: u,
              initialFocus: f,
              __demoMode: v = !1,
              ...m
            } = e,
            [h, g] = (0, r.useState)(0),
            E = (0, $.oJ)();
          void 0 === n &&
            null !== E &&
            (n = (0, o.E)(E, { [$.ZM.Open]: !0, [$.ZM.Closed]: !1 }));
          let w = (0, r.useRef)(new Set()),
            y = (0, r.useRef)(null),
            C = (0, l.T)(y, t),
            N = (0, r.useRef)(null),
            j = (0, x.i)(y),
            A = e.hasOwnProperty("open") || null !== E,
            D = e.hasOwnProperty("onClose");
          if (!A && !D)
            throw new Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!A)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!D)
            throw new Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if ("boolean" != typeof n)
            throw new Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`
            );
          if ("function" != typeof u)
            throw new Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${u}`
            );
          let P = n ? 0 : 1,
            [k, Z] = (0, r.useReducer)(oe, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, r.createRef)(),
            }),
            S = (0, p.z)(() => u(!1)),
            M = (0, p.z)((e) => Z({ type: 0, id: e })),
            F = !!(0, c.H)() && !v && 0 === P,
            I = h > 1,
            _ = null !== (0, r.useContext)(te),
            Y = I ? "parent" : "leaf";
          R(y, !!I && F),
            (0, K.O)(
              () => {
                var e, t;
                return [
                  ...Array.from(
                    null !=
                      (e =
                        null == j
                          ? void 0
                          : j.querySelectorAll(
                              "body > *, [data-headlessui-portal]"
                            ))
                      ? e
                      : []
                  ).filter(
                    (e) =>
                      !(
                        !(e instanceof HTMLElement) ||
                        e.contains(N.current) ||
                        (k.panelRef.current && e.contains(k.panelRef.current))
                      )
                  ),
                  null != (t = k.panelRef.current) ? t : y.current,
                ];
              },
              S,
              F && !I
            ),
            b(null == j ? void 0 : j.defaultView, "keydown", (e) => {
              e.defaultPrevented ||
                (e.key === a.R.Escape &&
                  0 === P &&
                  (I || (e.preventDefault(), e.stopPropagation(), S())));
            }),
            re(j, 0 === P && !_),
            (0, r.useEffect)(() => {
              if (0 !== P || !y.current) return;
              let e = new IntersectionObserver((e) => {
                for (let t of e)
                  0 === t.boundingClientRect.x &&
                    0 === t.boundingClientRect.y &&
                    0 === t.boundingClientRect.width &&
                    0 === t.boundingClientRect.height &&
                    S();
              });
              return e.observe(y.current), () => e.disconnect();
            }, [P, y, S]);
          let [L, H] = B(),
            V = `headlessui-dialog-${(0, s.M)()}`,
            U = (0, r.useMemo)(
              () => [{ dialogState: P, close: S, setTitleId: M }, k],
              [P, k, S, M]
            ),
            G = (0, r.useMemo)(() => ({ open: 0 === P }), [P]),
            q = {
              ref: C,
              id: V,
              role: "dialog",
              "aria-modal": 0 === P || void 0,
              "aria-labelledby": k.titleId,
              "aria-describedby": L,
            };
          return r.createElement(
            W,
            {
              type: "Dialog",
              enabled: 0 === P,
              element: y,
              onUpdate: (0, p.z)((e, t, n) => {
                "Dialog" === t &&
                  (0, o.E)(e, {
                    [J.Add]() {
                      w.current.add(n), g((e) => e + 1);
                    },
                    [J.Remove]() {
                      w.current.add(n), g((e) => e - 1);
                    },
                  });
              }),
            },
            r.createElement(
              O,
              { force: !0 },
              r.createElement(
                z,
                null,
                r.createElement(
                  te.Provider,
                  { value: U },
                  r.createElement(
                    z.Group,
                    { target: y },
                    r.createElement(
                      O,
                      { force: !1 },
                      r.createElement(
                        H,
                        { slot: G, name: "Dialog.Description" },
                        r.createElement(
                          T,
                          {
                            initialFocus: f,
                            containers: w,
                            features: F
                              ? (0, o.E)(Y, {
                                  parent: T.features.RestoreFocus,
                                  leaf: T.features.All & ~T.features.FocusLock,
                                })
                              : T.features.None,
                          },
                          (0, i.sY)({
                            ourProps: q,
                            theirProps: m,
                            slot: G,
                            defaultTag: "div",
                            features: ie,
                            visible: 0 === P,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            r.createElement(d._, { features: d.A.Hidden, ref: N })
          );
        }),
        ae = (0, i.yV)(function (e, t) {
          let [{ dialogState: n, close: o }] = ne("Dialog.Overlay"),
            a = (0, l.T)(t),
            c = `headlessui-dialog-overlay-${(0, s.M)()}`,
            d = (0, p.z)((e) => {
              if (e.target === e.currentTarget) {
                if ((0, u.P)(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), e.stopPropagation(), o();
              }
            }),
            f = (0, r.useMemo)(() => ({ open: 0 === n }), [n]);
          return (0,
          i.sY)({ ourProps: { ref: a, id: c, "aria-hidden": !0, onClick: d }, theirProps: e, slot: f, defaultTag: "div", name: "Dialog.Overlay" });
        }),
        ue = (0, i.yV)(function (e, t) {
          let [{ dialogState: n }, o] = ne("Dialog.Backdrop"),
            a = (0, l.T)(t),
            u = `headlessui-dialog-backdrop-${(0, s.M)()}`;
          (0, r.useEffect)(() => {
            if (null === o.panelRef.current)
              throw new Error(
                "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
              );
          }, [o.panelRef]);
          let c = (0, r.useMemo)(() => ({ open: 0 === n }), [n]);
          return r.createElement(
            O,
            { force: !0 },
            r.createElement(
              z,
              null,
              (0, i.sY)({
                ourProps: { ref: a, id: u, "aria-hidden": !0 },
                theirProps: e,
                slot: c,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            )
          );
        }),
        se = (0, i.yV)(function (e, t) {
          let [{ dialogState: n }, o] = ne("Dialog.Panel"),
            a = (0, l.T)(t, o.panelRef),
            u = `headlessui-dialog-panel-${(0, s.M)()}`,
            c = (0, r.useMemo)(() => ({ open: 0 === n }), [n]),
            d = (0, p.z)((e) => {
              e.stopPropagation();
            });
          return (0,
          i.sY)({ ourProps: { ref: a, id: u, onClick: d }, theirProps: e, slot: c, defaultTag: "div", name: "Dialog.Panel" });
        }),
        ce = (0, i.yV)(function (e, t) {
          let [{ dialogState: n, setTitleId: o }] = ne("Dialog.Title"),
            a = `headlessui-dialog-title-${(0, s.M)()}`,
            u = (0, l.T)(t);
          (0, r.useEffect)(() => (o(a), () => o(null)), [a, o]);
          let c = (0, r.useMemo)(() => ({ open: 0 === n }), [n]);
          return (0,
          i.sY)({ ourProps: { ref: u, id: a }, theirProps: e, slot: c, defaultTag: "h2", name: "Dialog.Title" });
        }),
        de = Object.assign(le, {
          Backdrop: ue,
          Panel: se,
          Overlay: ae,
          Title: ce,
          Description: U,
        });
    },
    46045: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return i;
        },
        _: function () {
          return l;
        },
      });
      var r = n(12351);
      var o,
        i =
          (((o = i || {})[(o.None = 1)] = "None"),
          (o[(o.Focusable = 2)] = "Focusable"),
          (o[(o.Hidden = 4)] = "Hidden"),
          o);
      let l = (0, r.yV)(function (e, t) {
        let { features: n = 1, ...o } = e,
          i = {
            ref: t,
            "aria-hidden": 2 === (2 & n) || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...(4 === (4 & n) && 2 !== (2 & n) && { display: "none" }),
            },
          };
        return (0,
        r.sY)({ ourProps: i, theirProps: o, slot: {}, defaultTag: "div", name: "Hidden" });
      });
    },
  },
  function (e) {
    e.O(0, [7112, 1999, 3512, 8844, 9774, 2888, 179], function () {
      return (t = 71669), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=[slug]-f58fb52f858c2aa0.js.map
