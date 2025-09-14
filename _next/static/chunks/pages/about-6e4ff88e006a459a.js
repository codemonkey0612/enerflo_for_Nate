(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2521],
  {
    62663: function (e) {
      e.exports = function (e, t, a, r) {
        var n = -1,
          s = null == e ? 0 : e.length;
        for (r && s && (a = e[++n]); ++n < s; ) a = t(a, e[n], n, e);
        return a;
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
    35393: function (e, t, a) {
      var r = a(62663),
        n = a(53816),
        s = a(58748),
        i = RegExp("['\u2019]", "g");
      e.exports = function (e) {
        return function (t) {
          return r(s(n(t).replace(i, "")), e, "");
        };
      };
    },
    69389: function (e, t, a) {
      var r = a(18674)({
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
        a = "a-z\\xdf-\\xf6\\xf8-\\xff",
        r = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        n =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        s = "[" + n + "]",
        i = "\\d+",
        o = "[\\u2700-\\u27bf]",
        l = "[" + a + "]",
        c = "[^\\ud800-\\udfff" + n + i + t + a + r + "]",
        d = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        f = "[" + r + "]",
        A = "(?:" + l + "|" + c + ")",
        h = "(?:" + f + "|" + c + ")",
        g = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
        m = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
        x =
          "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
        p = "[\\ufe0e\\ufe0f]?",
        b =
          p +
          x +
          ("(?:\\u200d(?:" +
            ["[^\\ud800-\\udfff]", d, u].join("|") +
            ")" +
            p +
            x +
            ")*"),
        y = "(?:" + [o, d, u].join("|") + ")" + b,
        v = RegExp(
          [
            f + "?" + l + "+" + g + "(?=" + [s, f, "$"].join("|") + ")",
            h + "+" + m + "(?=" + [s, f + A, "$"].join("|") + ")",
            f + "?" + A + "+" + g,
            f + "+" + m,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            i,
            y,
          ].join("|"),
          "g"
        );
      e.exports = function (e) {
        return e.match(v) || [];
      };
    },
    53816: function (e, t, a) {
      var r = a(69389),
        n = a(79833),
        s = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        i = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
      e.exports = function (e) {
        return (e = n(e)) && e.replace(s, r).replace(i, "");
      };
    },
    21804: function (e, t, a) {
      var r = a(35393)(function (e, t, a) {
        return e + (a ? "-" : "") + t.toLowerCase();
      });
      e.exports = r;
    },
    58748: function (e, t, a) {
      var r = a(49029),
        n = a(93157),
        s = a(79833),
        i = a(2757);
      e.exports = function (e, t, a) {
        return (
          (e = s(e)),
          void 0 === (t = a ? void 0 : t)
            ? n(e)
              ? i(e)
              : r(e)
            : e.match(t) || []
        );
      };
    },
    38318: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return a(62913);
        },
      ]);
    },
    5427: function (e, t, a) {
      "use strict";
      a.d(t, {
        m: function () {
          return s;
        },
        p: function () {
          return i;
        },
      });
      var r = a(92077),
        n = a.n(r),
        s = function (e) {
          return n()(e).format("0".concat(e > 1e6 ? "[.]0" : "", "a"));
        },
        i = function (e) {
          return e.replace(/\d\.*/g, "").toUpperCase();
        };
    },
    13551: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return d;
        },
      });
      var r = a(85893),
        n = (a(67294), a(86010)),
        s = a(21804),
        i = a.n(s),
        o = a(41664),
        l = a.n(o),
        c = function (e) {
          var t = e.children,
            a = e.className;
          return (0, r.jsx)("div", {
            className: (0, n.Z)("heroInner", a),
            children: t,
          });
        },
        d = function (e) {
          var t = e.title,
            a = e.children,
            s = e.className,
            o = void 0 === s ? "items-center" : s;
          return (0, r.jsx)("section", {
            id: i()(t),
            className: (0, n.Z)("heroSection", o),
            children: a,
          });
        },
        u = function (e) {
          var t = e.title,
            a = e.children,
            n = e.className;
          return (0, r.jsx)(d, {
            title: t,
            children: (0, r.jsx)(c, { className: n, children: a }),
          });
        };
      (u.Header = function (e) {
        var t = e.children,
          a = e.className;
        return (0, r.jsx)("div", {
          className: (0, n.Z)("heroHeader", a),
          children: t,
        });
      }),
        (u.Inner = c),
        (u.Content = function (e) {
          var t = e.children,
            a = e.className;
          return (0, r.jsx)("div", {
            className: (0, n.Z)("heroContent", a),
            children: t,
          });
        }),
        (u.Description = function (e) {
          var t = e.children,
            a = e.className,
            s = void 0 === a ? "text-gray-500" : a;
          return (0, r.jsx)("p", {
            className: (0, n.Z)("heroDescription", s),
            children: t,
          });
        }),
        (u.Action = function (e) {
          var t = e.children,
            a = e.className,
            s = e.href;
          return (0, r.jsx)(l(), {
            href: s,
            children: (0, r.jsx)("a", {
              className: (0, n.Z)("heroAction btn", a),
              children: t,
            }),
          });
        }),
        (t.Z = u);
    },
    57969: function (e, t, a) {
      "use strict";
      a.d(t, {
        F: function () {
          return r;
        },
      });
      var r = { revenueToDate: 55e8, agreementsToDate: 15e4 };
    },
    62913: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return R;
          },
          default: function () {
            return U;
          },
        });
      var r = a(85893),
        n = a(53512),
        s = (a(67294), a(88104)),
        i = a(645),
        o = a(25675),
        l = a.n(o),
        c = {
          src: "/_next/static/media/enerflo-background-solarfarm-birdseye.03b847d7.png",
          height: 618,
          width: 1440,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAU0lEQVR42mO4dPHc+o1bG1rrS+vbi6o7cours4tr0/MrGGbNmj5z9rym1qqK+trSmvriirLispKCkiKG1o7OhrYJVXVF5XV1hWWVQLny2rqqukoAoXQk0atM4icAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        },
        d = a(13551),
        u = "Careers",
        f = function () {
          return (0, r.jsxs)("div", {
            className: "relative overflow-hidden",
            children: [
              (0, r.jsx)(l(), {
                src: c,
                alt: "Enerflo Solarfarm Birdseye Background",
                layout: "fill",
                className: "object-center object-cover",
                lazyBoundary: "400px",
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute inset-0 h-[150%] bg-gradient-to-b md:bg-gradient-to-br from-white to-transparent",
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute inset-0 h-[150%] bg-gradient-to-b md:bg-gradient-to-r from-white to-transparent",
              }),
              (0, r.jsx)(d.Z, {
                title: u,
                className: "relative h-full",
                children: (0, r.jsx)("div", {
                  className: "mb-44 md:my-20 md:w-2/3 lg:w-1/2",
                  children: (0, r.jsxs)("div", {
                    className:
                      "flex-grow px-6 text-center w-full z-[1] overflow-hidden shadow-md py-6 backdrop-filter backdrop-blur firefox:bg-white firefox:bg-opacity-50 sm:px-10 sm:text-left md:text-left md:backdrop-blur-3xl md:rounded-2xl lg:px-14",
                    children: [
                      (0, r.jsx)(d.Z.Header, {
                        className: "md:items-start",
                        children: (0, r.jsx)(s.Z, { tag: "h2", children: u }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, r.jsx)("p", {
                            children:
                              "As we grow, we\u2019re always looking for the rare elite to join our team, help make Enerflo the best it can be and join our mission to make solar affordable for, and available to, every human on the planet!",
                          }),
                          (0, r.jsx)("p", {
                            children:
                              "Enerflo employees can work from virtually anywhere in the world, creating the flexibility and autonomy needed to continue to move the needle.",
                          }),
                          (0, r.jsx)("a", {
                            href: "https://enerflo.workable.com",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "btn btn-navy",
                            onClick: function () {
                              return (0, i.MR)(
                                "Utility Button",
                                "Buttons",
                                "See Current Jobs"
                              );
                            },
                            children: "See Current Jobs",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        A = a(5427),
        h = {
          src: "/_next/static/media/enerflo-light.030d11b0.png",
          height: 89,
          width: 416,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQ0lEQVR4nGOUXvwm9emXf+f+Z4j++fvvvxgTI8NPBgYGNiCWAeLbjPJABQ/f/j3zP19M6d+//6yMjAxcQAkQeAPE/ADWexiPTYD7JgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 2,
        },
        g = a(57969),
        m = a(10992),
        x = a.n(m),
        p = "Enerflo\u2019s Origin",
        b = function (e) {
          var t = e.data;
          return (0, r.jsx)("div", {
            className: "bg-navy-dark overflow-hidden",
            children: (0, r.jsxs)(d.Z, {
              title: p,
              className: "flex-col-reverse relative md:flex-row",
              children: [
                (0, r.jsxs)(d.Z.Content, {
                  className: "md:w-2/3 py-8 relative z-[1]",
                  children: [
                    (0, r.jsx)(d.Z.Header, {
                      className: "text-white md:items-start",
                      children: (0, r.jsx)(s.Z, { tag: "h2", children: p }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "text-base text-gray-100 space-y-4",
                      children: [
                        (0, r.jsx)("p", {
                          children:
                            "Once upon a time in 2019, a solar guy and a tech guy came together to simplify the solar sales process through technology. In the early days, Pat would code at night and Spencer would knock doors the next day to test the technology on real customers. With Spencer\u2019s extensive sales and solar background and Pat\u2019s experience of building software companies, things quickly progressed.",
                        }),
                        (0, r.jsxs)("p", {
                          children: [
                            "Now, a few years later, Enerflo has grown it\u2019s professional team and customer base fast, already processing $",
                            (0, A.m)((t || g.F).revenueToDate).toUpperCase(),
                            " in solar transactions to date. Enerflo\u2019s rapid growth is a testament to the Founders\u2019 clear vision for creating a truly open platform that can intelligently integrate all of the great tools and applications that dealers and installers are already using.",
                          ],
                        }),
                        (0, r.jsx)("p", {
                          children:
                            "Enerflo\u2019s on a mission: Make solar affordable for, and available to, every human on the planet. It\u2019s a simple but lofty goal that drives Enerflo\u2019s employees every day. We invite you to join us and grow with Enerflo.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("figure", {
                  className:
                    "flex-grow p-6 md:pl-6 w-full xs:w-4/5 sm:w-3/5 md:w-1/3 relative z-[1]",
                  children: (0, r.jsx)(l(), {
                    src: h,
                    alt: "Enerflo Logo",
                    layout: "responsive",
                    quality: 100,
                    placeholder: "blur",
                  }),
                }),
                (0, r.jsx)("div", { className: x().accentOrb }),
              ],
            }),
          });
        },
        y = {
          src: "/_next/static/media/enerflo-background-solar-sun.d84fb682.png",
          height: 706,
          width: 1440,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ADE5SUFJW11rgqa1xKu2wtPU09vb28HI0AA9Qks4PkpUWWODhIeyuL64v8a+yNG6ws8AQERMPkNNTVJddHd7mZiVsre/0tzer8C7AERITkNGTjxDU2FmcHN1eJebpK+2lYCVAxBdMl7JeAsBAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        v = "Enerflo is Purpose-Built",
        w = function () {
          return (0, r.jsxs)("div", {
            className: "relative py-20 md:py-36",
            children: [
              (0, r.jsx)(l(), {
                src: y,
                alt: "solar sun background",
                layout: "fill",
                className: "object-center object-cover crispImage",
                priority: !0,
                loading: "eager",
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent",
              }),
              (0, r.jsx)(d.Z, {
                title: v,
                children: (0, r.jsxs)(d.Z.Content, {
                  className: "text-white",
                  children: [
                    (0, r.jsx)(d.Z.Header, {
                      className: "md:items-start",
                      children: (0, r.jsx)(s.Z, { tag: "h1", children: v }),
                    }),
                    (0, r.jsx)("p", {
                      className: "text-xl text-gray-200 md:max-w-[50%]",
                      children:
                        "We\u2019re on a mission to help democratize solar energy and spread it across the globe, one well-executed deal at a time.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        j = [
          {
            title: "Our Team",
            description: (0, r.jsxs)("span", {
              className: "space-y-4",
              children: [
                (0, r.jsx)("span", {
                  className: "block",
                  children:
                    "Enerflo growth has been feasible because of our incredible team. They are the Rare Elite. They find a need, build audaciously and always, always, put the customer first. Since day one, we\u2019ve strived to find the best of the best.",
                }),
                (0, r.jsx)("span", {
                  className: "block",
                  children:
                    "As we continue to grow, we\u2019re always looking for new talent to share in our passion and bring their best selves to work every day.",
                }),
              ],
            }),
            image: {
              src: "/_next/static/media/enerflo-team-icon.3cf8bdee.svg",
              height: 56,
              width: 88,
            },
            imageAlt: "Icon - Enerflo Team",
          },
          {
            title: "Our Culture",
            description: (0, r.jsxs)("span", {
              className: "space-y-4",
              children: [
                (0, r.jsx)("span", {
                  className: "block",
                  children:
                    "Build Audaciously. Different by Design. Partner Success. Profound Impact. These aren\u2019t just buzzwords. These are tenets we live by. We also believe in humor, dedication, fun, laughter, drive, family, audacity, passion, humility, innovation, get stuff done, think outside the box, support, all ideas welcome, friendship, bring your authentic self, no doors policy, teamwork!",
                }),
                (0, r.jsx)("span", {
                  className: "block",
                  children:
                    "As a fully distributed workforce in a digital world, we know the importance of connection and find creative ways to keep our employees engaged, heard and connected, regardless of where they live.",
                }),
              ],
            }),
            image: {
              src: "/_next/static/media/enerflo-culture-icon.62b91040.svg",
              height: 67,
              width: 68,
            },
            imageAlt: "Icon - Enerflo Culture",
          },
        ],
        N = "Why Enerflo?",
        E = function () {
          return (0, r.jsx)("div", {
            className: "bg-gray-100",
            children: (0, r.jsx)(d.Z, {
              title: N,
              children: (0, r.jsxs)(d.Z.Content, {
                children: [
                  (0, r.jsx)(d.Z.Header, {
                    children: (0, r.jsx)(s.Z, { tag: "h2", children: N }),
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "text-lg text-gray-500 mx-auto md:w-3/4 lg:w-2/3 md:text-center",
                    children:
                      "\u201cEnerflo\u201d stands for \u201cEnergy-flow\u201d... or basically the energy consumption or production of a home. Our homegrown, purpose-built tech is designed by industry experts for industry professionals, fueling the growth of the solar industry in the US and beyond. With only 3% residential solar penetration, there\u2019s a lot of work to be done.",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "flex flex-col space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 mt-8 md:mt-20 md:flex-row",
                    children: j.map(function (e) {
                      return (0,
                      r.jsxs)("div", { className: "flex-1 rounded-lg shadow-lg border-2 border-primary p-4 md:py-8 text-center bg-white", children: [(0, r.jsx)("figure", { className: "flex items-center justify-center h-14 w-14 md:h-20 md:w-20 mx-auto", children: (0, r.jsx)(l(), { src: e.image, alt: e.imageAlt }) }), (0, r.jsx)(s.Z, { tag: "h5", className: "mt-3 md:mt-6", children: e.title }), (0, r.jsx)("p", { className: "mt-2 text-gray-500 text-base", children: e.description })] }, e.title);
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        S = a(2072),
        k = [
          {
            title: "Residential Solar Association (RSA)",
            description:
              "The Residential Solar Association (RSA) unites leading companies to advance the residential solar industry through collaboration, education, and advocacy. Membership helps Enerflo stay informed, influence policy, and support industry growth.",
            image: {
              src: "/_next/static/media/enerflo-rsa-logo.ce0408e9.png",
              height: 165,
              width: 400,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaUlEQVR4nA3KOw5FQBQG4PNPJ8EtbqIhlqASGvHoFWKZ9qKzC4UICTPDOab/0FRFwvxG1pqYRE4AAQGLMKciMqOty45fzo25MxC0AyGBVgf+Dk4Yhz4Q4R8RruexymjtQSnP98PtPHb1ASciLXrhNJTEAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 3,
            },
            cta: {
              text: "Learn About the RSA",
              url: "https://www.residentialsolarassociation.com/",
            },
          },
          {
            title: "Solar Energy Industries Association (SEIA)",
            description:
              "(SEIA) is the national trade association for America\u2019s solar industry. SEIA drives federal policy, advocates for clean energy, and promotes sustainable industry growth. Through this membership, Enerflo supports a strong, unified voice for solar at the national level.",
            image: {
              src: "/_next/static/media/enerflo-seia-logo.928cac17.png",
              height: 165,
              width: 400,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af/pLSfj5zH/9PgLBvb5COMzPo/xgIuVAYnPEAP4BgL+Af/1ADgsaqMwWi/wYAcF/tR0phnOOyz4u830AgkI/v/nAf/8AA3f0mJ07/QOBWukMqXI7wP5Jgr+7uP6Af8Q+f330DQ0P1ub1ssAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 3,
            },
            cta: { text: "Learn About SEIA", url: "https://seia.org/" },
          },
          {
            title: "California Solar & Storage Association (CALSSA)",
            description:
              "The California Solar & Storage Association (CALSSA) is the state\u2019s largest clean energy trade association. CALSSA advocates for smart policy, fair regulation, and market growth in California. Membership keeps Enerflo connected to key legislative developments and industry initiatives in one of the nation\u2019s leading solar markets.",
            image: {
              src: "/_next/static/media/enerflo-calssa-logo.e69fc85c.png",
              height: 165,
              width: 400,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af+iDxfS2mMXL6lC+zQy7w7M+QT0JAT9ANtOXOZ+xZfvAf+vABXp/UN3cLVb7fP4AwYHA//zAP8ACiMK+eGk7gy0Af2xBgD7DvoyAu0i8PrkK/L9B/4F+/0IAxScYe0AGvb6hAAxmFbO3lMAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 3,
            },
            cta: { text: "Learn About CALSSA", url: "https://calssa.org/" },
          },
          {
            title: "Florida Solar Energy Industries Association (FlaSEIA)",
            description:
              "The Florida Solar Energy Industries Association (FlaSEIA) represents and supports solar businesses across Florida. FlaSEIA advocates for fair policies, industry standards, and market expansion. Membership helps Enerflo stay engaged in Florida\u2019s evolving solar landscape and support a strong regional solar community.",
            image: {
              src: "/_next/static/media/enerflo-flaseia-logo.865b8191.png",
              height: 165,
              width: 400,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nGP8/edn+f+/n7xZmX9+/fP3CxPD/78MTMyi/5iY2LgZmPh2Ms7ZtnOTGB+H77ef3xlYmJkZfv7+y8DDCZRj/M/Azy2wk/HYlRslPJycXs/fffzCzsrC9Ocv0ARGhn9srKzcDP//7QYAgf0oeySpGgYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 3,
            },
            link: "https://www.flaseia.org/",
            cta: {
              text: "Learn About FlaSEIA",
              url: "https://www.flaseia.org/",
            },
          },
        ],
        C = "Enerflo is a Proud Member of these Industry Organizations",
        I = function () {
          return (0, r.jsx)("div", {
            className: "bg-navy",
            children: (0, r.jsx)(d.Z, {
              title: C,
              children: (0, r.jsxs)(d.Z.Content, {
                children: [
                  (0, r.jsx)(d.Z.Header, {
                    className: "text-white text-center",
                    children: (0, r.jsx)(s.Z, { tag: "h2", children: C }),
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "text-lg text-gray-100 mx-auto md:w-3/4 lg:w-2/3 md:text-center",
                    children:
                      "Driving the Future of Residential Solar Through Industry Collaboration and Advocacy",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-20",
                    children: k.map(function (e) {
                      return (0,
                      r.jsxs)("div", { className: "flex-1 flex flex-col justify-between gap-6 rounded-lg p-4 md:py-8 text-center bg-white", children: [(0, r.jsxs)("div", { children: [(0, r.jsx)("figure", { className: "flex items-center justify-center max-w-[15rem] mx-auto", children: (0, r.jsx)(l(), { src: e.image, alt: "".concat(e.title, " Logo") }) }), (0, r.jsx)("p", { className: "mt-2 text-gray-500 text-base", children: e.description })] }), (0, r.jsx)(S.ZP, { variant: "outline", href: e.cta.url, children: e.cta.text })] }, e.title);
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        R = !0,
        U = function (e) {
          var t = e.siteData;
          return (0, r.jsxs)(n.Z, {
            title: "Enerflo Solar Software Platform | About Us",
            description:
              "At Enerflo, we\u2019re on a mission to spread solar energy across the globe, one well-executed deal at a time, and we can\u2019t do it alone. Join us for the ride?",
            children: [
              (0, r.jsx)(w, {}),
              (0, r.jsx)(b, { data: t }),
              (0, r.jsx)(E, {}),
              (0, r.jsx)(I, {}),
              (0, r.jsx)(f, {}),
            ],
          });
        };
    },
    10992: function (e) {
      e.exports = { accentOrb: "about_accentOrb__lNRKs" };
    },
  },
  function (e) {
    e.O(0, [7112, 1999, 2077, 3512, 9774, 2888, 179], function () {
      return (t = 38318), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=about-6e4ff88e006a459a.js.map
