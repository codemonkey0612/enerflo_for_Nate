(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3584],
  {
    44286: function (e) {
      e.exports = function (e) {
        return e.split("");
      };
    },
    40180: function (e, n, t) {
      var r = t(14259);
      e.exports = function (e, n, t) {
        var i = e.length;
        return (t = void 0 === t ? i : t), !n && t >= i ? e : r(e, n, t);
      };
    },
    98805: function (e, n, t) {
      var r = t(40180),
        i = t(62689),
        a = t(83140),
        o = t(79833);
      e.exports = function (e) {
        return function (n) {
          n = o(n);
          var t = i(n) ? a(n) : void 0,
            l = t ? t[0] : n.charAt(0),
            s = t ? r(t, 1).join("") : n.slice(1);
          return l[e]() + s;
        };
      };
    },
    62689: function (e) {
      var n = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      );
      e.exports = function (e) {
        return n.test(e);
      };
    },
    83140: function (e, n, t) {
      var r = t(44286),
        i = t(62689),
        a = t(676);
      e.exports = function (e) {
        return i(e) ? a(e) : r(e);
      };
    },
    676: function (e) {
      var n = "[\\ud800-\\udfff]",
        t = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        r = "\\ud83c[\\udffb-\\udfff]",
        i = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        o = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        l = "(?:" + t + "|" + r + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?",
        c =
          s + l + ("(?:\\u200d(?:" + [i, a, o].join("|") + ")" + s + l + ")*"),
        u = "(?:" + [i + t + "?", t, a, o, n].join("|") + ")",
        d = RegExp(r + "(?=" + r + ")|" + u + c, "g");
      e.exports = function (e) {
        return e.match(d) || [];
      };
    },
    18029: function (e, n, t) {
      var r = t(35393),
        i = t(11700),
        a = r(function (e, n, t) {
          return e + (t ? " " : "") + i(n);
        });
      e.exports = a;
    },
    11700: function (e, n, t) {
      var r = t(98805)("toUpperCase");
      e.exports = r;
    },
    81602: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/resources",
        function () {
          return t(74278);
        },
      ]);
    },
    13551: function (e, n, t) {
      "use strict";
      t.d(n, {
        I: function () {
          return u;
        },
      });
      var r = t(85893),
        i = (t(67294), t(86010)),
        a = t(21804),
        o = t.n(a),
        l = t(41664),
        s = t.n(l),
        c = function (e) {
          var n = e.children,
            t = e.className;
          return (0, r.jsx)("div", {
            className: (0, i.Z)("heroInner", t),
            children: n,
          });
        },
        u = function (e) {
          var n = e.title,
            t = e.children,
            a = e.className,
            l = void 0 === a ? "items-center" : a;
          return (0, r.jsx)("section", {
            id: o()(n),
            className: (0, i.Z)("heroSection", l),
            children: t,
          });
        },
        d = function (e) {
          var n = e.title,
            t = e.children,
            i = e.className;
          return (0, r.jsx)(u, {
            title: n,
            children: (0, r.jsx)(c, { className: i, children: t }),
          });
        };
      (d.Header = function (e) {
        var n = e.children,
          t = e.className;
        return (0, r.jsx)("div", {
          className: (0, i.Z)("heroHeader", t),
          children: n,
        });
      }),
        (d.Inner = c),
        (d.Content = function (e) {
          var n = e.children,
            t = e.className;
          return (0, r.jsx)("div", {
            className: (0, i.Z)("heroContent", t),
            children: n,
          });
        }),
        (d.Description = function (e) {
          var n = e.children,
            t = e.className,
            a = void 0 === t ? "text-gray-500" : t;
          return (0, r.jsx)("p", {
            className: (0, i.Z)("heroDescription", a),
            children: n,
          });
        }),
        (d.Action = function (e) {
          var n = e.children,
            t = e.className,
            a = e.href;
          return (0, r.jsx)(s(), {
            href: a,
            children: (0, r.jsx)("a", {
              className: (0, i.Z)("heroAction btn", t),
              children: n,
            }),
          });
        }),
        (n.Z = d);
    },
    74278: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return H;
          },
          default: function () {
            return B;
          },
        });
      var r = t(26042),
        i = t(99534),
        a = t(85893),
        o = t(14924),
        l = t(69396),
        s = t(828),
        c = t(67294),
        u = t(86010),
        d = t(14293),
        f = t.n(d),
        x = t(18029),
        m = t.n(x),
        v = t(68171),
        h = t(11355),
        p = t(63801),
        g = function (e) {
          return "string" === typeof e
            ? m()(e)
            : null === e || void 0 === e
            ? void 0
            : e.label;
        },
        b = function (e) {
          return "string" === typeof e
            ? e
            : null === e || void 0 === e
            ? void 0
            : e.value;
        },
        y = function (e) {
          var n = e.item,
            t = e.labelFormatter,
            r =
              void 0 === t
                ? function (e) {
                    return e;
                  }
                : t,
            i = e.onChange,
            o = e.selected,
            l = r(g(n)),
            s = b(n);
          return (0, a.jsx)(
            v.v.Item,
            {
              children: (0, a.jsx)("button", {
                onClick: function () {
                  return i(s);
                },
                className: (0, u.Z)(
                  "block px-4 py-1 w-full rounded-none text-left",
                  void 0 === s && "text-gray-400 italic",
                  void 0 !== s &&
                    (s === o
                      ? "bg-gray-100 text-primary"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary")
                ),
                children: l,
              }),
            },
            s
          );
        },
        j = function (e) {
          var n = e.allowClear,
            t = e.className,
            r =
              void 0 === t
                ? "flex-1 basis-full min-w-[100px] xs:basis-none"
                : t,
            i = e.placeholder,
            o = void 0 === i ? "Select..." : i,
            l = e.options,
            s = e.selected,
            d = e.onChange,
            x = e.labelFormatter,
            m =
              void 0 === x
                ? function (e) {
                    return e;
                  }
                : x;
          if (!(null === l || void 0 === l ? void 0 : l.length)) return null;
          var j =
            !f()(s) &&
            l.find(function (e) {
              return s === ("string" === typeof e ? e : e.value);
            });
          return (0, a.jsx)(v.v, {
            as: "div",
            className: (0, u.Z)("relative inline-block", r),
            children: function (e) {
              var t = e.open;
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(v.v.Button, {
                    className: (0, u.Z)(
                      s ? "text-gray-700" : "text-gray-400",
                      t ? "rounded-t-md rounded-b-none" : "rounded-md",
                      "inline-flex w-full items-center justify-between border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-100"
                    ),
                    children: [
                      (0, a.jsx)("span", { children: s ? m(g(j)) : o }),
                      (0, a.jsx)(p.v4q, { className: "h-4 w-4 ml-1" }),
                    ],
                  }),
                  (0, a.jsx)(h.u, {
                    as: c.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: (0, a.jsxs)(v.v.Items, {
                      className:
                        "absolute left-0 right-0 z-10 w-full min-w-[150px] max-h-60 overflow-auto py-2 origin-top-right bg-white rounded-b-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                      children: [
                        n &&
                          (0, a.jsx)(y, {
                            item: { label: "Select option...", value: void 0 },
                            onChange: d,
                            selected: s,
                          }),
                        l.map(function (e) {
                          return (0,
                          a.jsx)(y, { item: e, labelFormatter: m, onChange: d, selected: s }, b(e));
                        }),
                      ],
                    }),
                  }),
                ],
              });
            },
          });
        },
        N = t(77126),
        w = function (e) {
          var n = e.filters,
            t = e.onChange,
            i = e.selected;
          return (null === n || void 0 === n ? void 0 : n.length) &&
            n.find(function (e) {
              var n;
              return null === e ||
                void 0 === e ||
                null === (n = e.options) ||
                void 0 === n
                ? void 0
                : n.length;
            })
            ? (0, a.jsx)("div", {
                className:
                  "p-3 w-full mx-auto mb-10 bg-gray-100 flex gap-3 flex-wrap sm:flex-nowrap md:rounded-lg md:max-w-2xl",
                children: n.map(function (e) {
                  return (0, a.jsx)(
                    j,
                    (0, l.Z)((0, r.Z)({}, e), {
                      onChange: function (n) {
                        return t(e.name, n);
                      },
                      selected: null === i || void 0 === i ? void 0 : i[e.name],
                      placeholder: "Filter ".concat(e.name),
                      allowClear: !0,
                    }),
                    e.name
                  );
                }),
              })
            : null;
        },
        Z = ["12", "24", "48", "96"],
        C = function (e) {
          var n = e.onChange,
            t = e.pageSize;
          return (0, a.jsx)(j, {
            options: Z,
            labelFormatter: function (e) {
              return "".concat(e, " per page");
            },
            onChange: function (e) {
              return n(Number(e));
            },
            selected:
              (null === t || void 0 === t ? void 0 : t.toString()) || Z[0],
            className: "shrink-0",
          });
        },
        k = function (e) {
          var n = e.currentPage,
            t = void 0 === n ? 1 : n,
            r = e.totalCount,
            i = void 0 === r ? 0 : r,
            o = e.pageSize,
            l = void 0 === o ? Number(Z[0]) : o,
            s = e.className;
          if (!i) return null;
          var c = Math.ceil(i / l),
            d = (Math.max(1, Math.min(t || 1, c)) - 1) * l + 1,
            f = Math.min(d + l - 1, i);
          return (0, a.jsxs)("p", {
            className: (0, u.Z)(s, "text-sm lg:text-base text-gray-400"),
            children: ["Results ", d, " - ", f, " of ", i],
          });
        },
        S = t(88104),
        _ = t(13551),
        M = function (e) {
          var n = e.children,
            t = e.className,
            o = void 0 === t ? "px-2 py-1 md:px-2.5" : t,
            s = e.onClick,
            c = e.isActive,
            d = e.disabled,
            f = (0, i.Z)(e, [
              "children",
              "className",
              "onClick",
              "isActive",
              "disabled",
            ]);
          return (0, a.jsx)(
            "button",
            (0, l.Z)(
              (0, r.Z)(
                {
                  type: "button",
                  className: (0, u.Z)(
                    o,
                    "inline-flex items-center font-medium rounded-md text-xs md:text-sm",
                    c ? "bg-primary text-white" : "text-gray-400",
                    d && "opacity-50 cursor-not-allowed",
                    !c && !d && "hover:bg-gray-100 hover:text-gray-600"
                  ),
                  onClick: s,
                  disabled: d,
                },
                f
              ),
              { children: n }
            )
          );
        },
        A = function (e) {
          var n = e.currentPage,
            t = void 0 === n ? 1 : n,
            r = e.totalCount,
            i = void 0 === r ? 0 : r,
            o = e.pageSize,
            l = void 0 === o ? Number(Z[0]) : o,
            s = e.onChange;
          if (!i) return null;
          var c = Math.ceil(i / l),
            u = Math.max(1, t || 1),
            d = Math.min(u, c),
            f = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                t = n > 5,
                r = t ? 4 : n - 1,
                i = 1;
              if (t) {
                var a = Math.floor(2.5);
                e > n - a ? (i = n - 5 + 1) : e <= a || (i = e - a);
              }
              for (var o = []; o.length <= r; )
                o.push(o.length ? o[o.length - 1] + 1 : i);
              return o;
            })(u, c);
          return (0, a.jsxs)("nav", {
            className:
              "inline-flex items-center px-2 py-1 bg-white rounded-lg gap-1",
            children: [
              (0, a.jsx)(M, {
                className: "p-1",
                onClick: function () {
                  return s(u - 1);
                },
                disabled: 1 === u,
                "aria-label": "Previous page",
                children: (0, a.jsx)(p.wyc, {
                  className: "h-5 w-5",
                  "aria-hidden": "true",
                }),
              }),
              (0, a.jsx)("div", {
                className: "flex gap-1",
                children: f.map(function (e) {
                  return (0, a.jsx)(
                    M,
                    {
                      onClick: function () {
                        return s(e);
                      },
                      isActive: u === e,
                      "aria-label": "Page ".concat(e),
                      children: e,
                    },
                    e
                  );
                }),
              }),
              (0, a.jsx)(M, {
                className: "p-1",
                onClick: function () {
                  return s(u + 1);
                },
                disabled: d === c,
                "aria-label": "Next page",
                children: (0, a.jsx)(p.XCv, {
                  className: "h-5 w-5",
                  "aria-hidden": "true",
                }),
              }),
            ],
          });
        },
        F = t(55781),
        P = t(96159),
        z = t(6303),
        E = t(74201),
        I = t(63672),
        T = t(11163),
        D = function (e) {
          var n = e.type,
            t = e.postedDate,
            r = e.title,
            i = e.slug,
            o = e.image,
            l = e.className,
            s = (0, T.useRouter)();
          return (0, a.jsx)("a", {
            href: "/resources/".concat(i),
            className: "p-0 mt-2 block flex-1 group text-left",
            children: (0, a.jsxs)(
              "div",
              {
                className: (0, u.Z)(
                  l,
                  "h-full flex flex-col overflow-hidden rounded-xl shadow-lg transition-all border border-gray-200 hover:border-gray-300 hover:shadow-xl"
                ),
                children: [
                  (0, a.jsx)("div", {
                    className: "flex shrink-0 h-36 min-w-0 relative",
                    children: o
                      ? (0, a.jsx)(z.Z, {
                          value: o,
                          className: "w-full h-full",
                          imageClassName:
                            "object-center object-cover crispImage",
                          layout: "fill",
                        })
                      : (0, a.jsx)(P.Z, {}),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-1 flex-col justify-between bg-white p-4 md:p-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex gap-x-2 flex-wrap",
                        children: [
                          (0, a.jsx)("button", {
                            onClick: function (e) {
                              e.stopPropagation(),
                                e.preventDefault(),
                                s.push("/resources?type=".concat(n.value));
                            },
                            className:
                              "hover:underline p-0 text-sm font-bold text-primary tracking-wide",
                            title: "Filter by ".concat(n.label),
                            "aria-label": "Filter by ".concat(n.label),
                            children: n.value.toUpperCase(),
                          }),
                          (0, a.jsx)("time", {
                            dateTime: t,
                            className: "text-sm text-gray-400 w-full sm:w-auto",
                            children: (0, E.Z)(
                              (0, I.Z)(t, "yyyy-MM-dd", new Date()),
                              "MMMM dd, yyyy"
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)(S.Z, {
                        className:
                          "text-gray-900 group-hover:text-primary transition-colors mt-2 block flex-1",
                        tag: "h5",
                        children: (0, a.jsx)(F.Z, { text: r }),
                      }),
                    ],
                  }),
                ],
              },
              r
            ),
          });
        },
        O = t(5152),
        R = t.n(O)()(
          function () {
            return Promise.all([t.e(8844), t.e(4828)]).then(t.bind(t, 8844));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8844];
              },
            },
          }
        ),
        q = function (e, n) {
          var t,
            r,
            i =
              (null ===
                (r =
                  null ===
                    (t = Object.entries(n).filter(function (e) {
                      var n = (0, s.Z)(e, 2),
                        t = (n[0], n[1]);
                      return !f()(t);
                    })) || void 0 === t
                    ? void 0
                    : t.map(function (n) {
                        var t,
                          r = (0, s.Z)(n, 2),
                          i = r[0],
                          a = r[1],
                          o =
                            null ===
                              (t = e.find(function (e) {
                                return e.name === i;
                              })) || void 0 === t
                              ? void 0
                              : t.options;
                        return g(
                          null === o || void 0 === o
                            ? void 0
                            : o.find(function (e) {
                                return b(e) === a;
                              })
                        );
                      })) || void 0 === r
                ? void 0
                : r.join(" & ")) || "All";
          return "".concat(i, " Resources");
        },
        U = function (e) {
          var n = e.title,
            t = e.subtitle,
            i = e.filterOptions,
            s = e.items,
            u = e.totalCount,
            d = e.pageSize,
            f = e.currentPage,
            x = e.filters,
            m = (0, T.useRouter)(),
            v = (0, c.useCallback)(
              function (e) {
                m.push({ query: (0, r.Z)({}, m.query, e) });
              },
              [m]
            ),
            h = (0, c.useCallback)(
              function (e) {
                v({
                  pageSize: null === e || void 0 === e ? void 0 : e.toString(),
                });
              },
              [v]
            );
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(_.Z, {
                title: n,
                children: (0, a.jsxs)("div", {
                  className: "flex-grow px-6 sm:px-10 lg:px-14 text-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "space-x-2 mb-4",
                      children: (0, a.jsx)(S.Z, { tag: "h2", children: n }),
                    }),
                    (0, a.jsx)("p", {
                      className: "text-gray-500 text-sm md:text-base",
                      children: t,
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(w, {
                filters: i,
                selected: x,
                onChange: function (e, n) {
                  v((0, o.Z)({}, e, n));
                },
              }),
              (0, a.jsx)("div", {
                className: "bg-gray-100",
                children: (0, a.jsx)(_.Z, {
                  children: (0, a.jsxs)(_.Z.Content, {
                    className: "px-4 sm:px-10 lg:px-14 space-y-6 text-left",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "flex gap-x-4 gap-y-1 items-center justify-between flex-wrap sm:flex-nowrap",
                        children: (0, a.jsx)(S.Z, {
                          tag: "h5",
                          children: q(i, x),
                        }),
                      }),
                      (0, a.jsx)(N.Z, {
                        columns: 3,
                        children:
                          null === s || void 0 === s
                            ? void 0
                            : s.map(function (e) {
                                return (0,
                                c.createElement)(D, (0, l.Z)((0, r.Z)({}, e), { key: e._id }));
                              }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "pt-6 flex gap-4 items-center justify-center flex-wrap xs:justify-between",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex items-center gap-4 justify-between flex-wrap basis-full grow xs:grow-0 xs:basis-auto",
                            children: [
                              !!u &&
                                (0, a.jsx)(C, { onChange: h, pageSize: d }),
                              (0, a.jsx)(k, {
                                currentPage: f,
                                totalCount: u,
                                pageSize: d,
                              }),
                            ],
                          }),
                          (0, a.jsx)(A, {
                            currentPage: f,
                            totalCount: u,
                            pageSize: d,
                            onChange: function (e) {
                              v({
                                page:
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.toString(),
                              });
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)(R, {}),
            ],
          });
        },
        X = t(53512),
        H = !0,
        B = function (e) {
          var n = e.seoTitle,
            t = e.seoDescription,
            o = (0, i.Z)(e, ["seoTitle", "seoDescription"]);
          return (0, a.jsx)(X.Z, {
            title: n,
            description: t,
            children: (0, a.jsx)(U, (0, r.Z)({}, o)),
          });
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
    828: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(13375);
      var i = t(91566);
      function a(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (0, r.Z)(e, n) ||
          (0, i.Z)(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    91566: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(20943);
      function i(e, n) {
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
  function (e) {
    e.O(0, [7112, 1999, 4520, 3512, 9774, 2888, 179], function () {
      return (n = 81602), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
//# sourceMappingURL=resources-49abad7b63a167bf.js.map
