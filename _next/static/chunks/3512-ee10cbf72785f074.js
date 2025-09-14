(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3512],
  {
    2072: function (e, n, t) {
      "use strict";
      t.d(n, {
        cT: function () {
          return r;
        },
        nz: function () {
          return a;
        },
      });
      var r,
        a,
        i,
        s = t(14924),
        o = t(85893),
        l = t(86010),
        c = t(41664),
        d = t.n(c);
      !(function (e) {
        (e.link = "link"), (e.solid = "solid"), (e.outline = "outline");
      })(r || (r = {})),
        (function (e) {
          (e.primary = "primary"),
            (e.navy = "navy"),
            (e.white = "white"),
            (e.dark = "dark"),
            (e.secondary = "secondary");
        })(a || (a = {}));
      var u =
        ((i = {}),
        (0, s.Z)(i, a.dark, "btn-dark"),
        (0, s.Z)(i, a.navy, "btn-navy"),
        (0, s.Z)(i, a.white, "btn-white"),
        (0, s.Z)(i, a.primary, "btn-primary"),
        (0, s.Z)(i, a.secondary, "btn-secondary"),
        i);
      n.ZP = function (e) {
        var n = e.children,
          t = e.className,
          i = e.href,
          s = e.variant,
          c = e.color,
          m = void 0 === c ? a.primary : c,
          h = e.onClick,
          f = e.target,
          v = e.rel,
          x = (0, l.Z)(
            t,
            u[m],
            "btn",
            s === r.outline && "btn-outline",
            s === r.link && "btn-link"
          );
        return i || f || v
          ? i && i.startsWith("/")
            ? (0, o.jsx)(d(), {
                href: i,
                children: (0, o.jsx)("a", {
                  className: x,
                  onClick: h,
                  target: f,
                  rel: v,
                  children: n,
                }),
              })
            : (0, o.jsx)("a", {
                href: i,
                className: x,
                onClick: h,
                target: f,
                rel: v,
                children: n,
              })
          : (0, o.jsx)("button", {
              type: "button",
              className: x,
              onClick: h,
              children: n,
            });
      };
    },
    55781: function (e, n, t) {
      "use strict";
      var r = t(85893);
      n.Z = function (e) {
        var n = e.text,
          t = e.clipAt,
          a = void 0 === t ? 70 : t,
          i = (n || "").substring(0, a).trim(),
          s = i.length < (null === n || void 0 === n ? void 0 : n.length);
        return (0, r.jsxs)(r.Fragment, { children: [i, s && "..."] });
      };
    },
    77126: function (e, n, t) {
      "use strict";
      var r = t(85893),
        a = t(86010),
        i = t(61214),
        s = t(67294),
        o = {
          1: "grid-cols-1",
          2: "grid-cols-1 md:grid-cols-2",
          3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          4: "grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
          5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
          6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6",
        };
      i.Zy.base,
        i.Zy["2XS"],
        i.Zy.XS,
        i.Zy.SM,
        i.Zy.MD,
        i.Zy.LG,
        i.Zy.XL,
        i.Zy["2XL"];
      n.Z = function (e) {
        var n = e.columns,
          t = e.children,
          l = e.autoResize,
          c = void 0 === l || l,
          d = e.columnBreakpoints,
          u = (0, s.useMemo)(
            function () {
              return c
                ? o[n]
                : (d || []).map(function (e) {
                    var n =
                      e.breakpoint !== i.Zy.base
                        ? "".concat(e.breakpoint, ":")
                        : "";
                    return "".concat(n, "grid-cols-").concat(e.columns);
                  });
            },
            [c, d, n]
          );
        return s.Children.count(t)
          ? (0, r.jsx)("div", {
              className: (0, a.Z)(u, "grid gap-4 md:gap-6"),
              children: t,
            })
          : (0, r.jsx)("p", {
              className: "p-20 md:p-36 text-center text-gray-400",
              children: "No items",
            });
      };
    },
    88104: function (e, n, t) {
      "use strict";
      var r = t(85893),
        a = t(86010),
        i = t(51765),
        s = t.n(i);
      n.Z = function (e) {
        var n = e.tag,
          t = void 0 === n ? "h6" : n,
          i = e.size,
          o = void 0 === i ? t : i,
          l = e.fontWeight,
          c = void 0 === l ? "bold" : l;
        return (0, r.jsx)(t, {
          className: (0, a.Z)(s()[c], s()[o], e.className),
          children: e.children,
        });
      };
    },
    96159: function (e, n, t) {
      "use strict";
      var r = t(85893),
        a = t(63801);
      n.Z = function () {
        return (0, r.jsx)("div", {
          className:
            "bg-gray-50 text-gray-300 text-2xl flex shrink-0 items-center justify-center w-full border-gray-200",
          "data-test": "image-placeholder",
          children: (0, r.jsx)(a.u3, { className: "block h-6 w-6" }),
        });
      };
    },
    93791: function (e, n, t) {
      "use strict";
      t.d(n, {
        tf: function () {
          return A;
        },
        EH: function () {
          return Z;
        },
      });
      var r = t(26042),
        a = t(69396),
        i = t(85893),
        s = t(86010),
        o = t(25675),
        l = t.n(o),
        c = t(41664),
        d = t.n(c),
        u = t(11163),
        m = t(67294),
        h = t(11355),
        f = t(6512),
        v = t(63801),
        x = t(70535),
        p = t(645),
        g = t(86399),
        y = t.n(g),
        j = t(2072),
        b = t(68171),
        k = function (e, n, t) {
          return t ? n.pathname === e.href : n.pathname.includes(e.href);
        },
        N = function (e) {
          var n = e.item,
            t = e.className,
            r = n.name,
            a = n.href,
            o = n.items,
            l = n.type,
            c = n.variant,
            f = n.analyticEvent,
            g = n.color,
            N = void 0 === g ? j.nz.primary : g,
            Z = (0, u.useRouter)(),
            w = k(n, Z),
            _ = (0, m.useCallback)(
              function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : f;
                e && (0, p.MR)(e.event, e.category, e.label);
              },
              [f]
            );
          return (null === o || void 0 === o ? void 0 : o.length)
            ? (0, i.jsxs)(b.v, {
                as: "div",
                className: "relative inline-block",
                children: [
                  (0, i.jsxs)(b.v.Button, {
                    className: (0, s.Z)(
                      t,
                      "flex items-center h-full",
                      y().desktopNavItem,
                      y().desktopNavLink,
                      !w && y().inactiveNavLink
                    ),
                    children: [
                      (0, i.jsx)("span", { children: r }),
                      (0, i.jsx)(v.v4q, { className: "h-4 w-4 ml-1" }),
                    ],
                  }),
                  (0, i.jsx)(h.u, {
                    as: m.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: (0, i.jsx)(b.v.Items, {
                      className:
                        "absolute right-0 w-56 py-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                      children: o
                        .filter(function (e) {
                          return !e.footerOnly;
                        })
                        .map(function (e) {
                          return (0, i.jsx)(
                            b.v.Item,
                            {
                              children: (0, i.jsx)("a", {
                                href: e.href,
                                className: (0, s.Z)(
                                  t,
                                  "!block !px-4",
                                  y().desktopNavLink,
                                  !k(e, Z, e.href === a) && y().inactiveNavLink
                                ),
                                onClick: function () {
                                  return _(e.analyticEvent);
                                },
                                children: e.name,
                              }),
                            },
                            e.name
                          );
                        }),
                    }),
                  }),
                ],
              })
            : l === x.vh.Button
            ? (0, i.jsx)(j.ZP, {
                className: (0, s.Z)(
                  t,
                  y().desktopNavItem,
                  y().navButton,
                  !a.startsWith("/") && y().desktopNavLink
                ),
                href: a,
                onClick: function () {
                  return _();
                },
                variant: c,
                color: N,
                children: r,
              })
            : (0, i.jsx)(
                d(),
                {
                  href: a,
                  children: (0, i.jsx)("a", {
                    className: (0, s.Z)(
                      t,
                      y().desktopNavItem,
                      y().desktopNavLink,
                      !w && y().inactiveNavLink
                    ),
                    "aria-current": w ? "page" : void 0,
                    onClick: function () {
                      return _();
                    },
                    children: r,
                  }),
                },
                r
              );
        },
        Z = "app_nav",
        w = "mobile_nav",
        _ = function (e) {
          var n = e.open,
            t = e.close,
            r = e.navItems,
            a = void 0 === r ? x.D4 : r,
            s = (0, m.useRef)(null),
            o = a.filter(function (e) {
              return !e.footerOnly;
            }),
            c = (0, m.useCallback)(
              function (e) {
                n &&
                  !(function (e, n) {
                    return !!e && !(n.target !== e && !e.contains(n.target));
                  })(s.current, e) &&
                  t();
              },
              [n, t]
            ),
            u = (0, m.useCallback)(
              function (e) {
                n && e.target !== document.getElementById(w) && t();
              },
              [n, t]
            );
          return (
            (0, m.useEffect)(
              function () {
                return (
                  document.addEventListener("click", c, !0),
                  document.addEventListener("scroll", u, !0),
                  function () {
                    document.removeEventListener("click", c, !0),
                      document.removeEventListener("scroll", u, !0);
                  }
                );
              },
              [c, u]
            ),
            (0, i.jsxs)("div", {
              className: "relative",
              ref: s,
              children: [
                (0, i.jsx)("div", {
                  className: "lg:container mx-auto md:px-4",
                  children: (0, i.jsxs)("div", {
                    className:
                      "relative flex items-center justify-between h-16 z-40",
                    children: [
                      !!(null === o || void 0 === o ? void 0 : o.length) &&
                        (0, i.jsx)("div", {
                          className:
                            "absolute inset-y-0 left-2 flex items-center md:hidden",
                          children: (0, i.jsx)(L, { open: n }),
                        }),
                      (0, i.jsx)("div", {
                        className:
                          "flex-1 flex items-center justify-center md:items-stretch md:justify-start",
                        children: (0, i.jsx)("div", {
                          className: "flex-shrink-0 flex items-center",
                          children: (0, i.jsx)(d(), {
                            href: "/",
                            children: (0, i.jsx)("a", {
                              className: "md:ml-2 lg:ml-0",
                              children: (0, i.jsx)(l(), {
                                src: "/enerflo-dark.png",
                                alt: "Enerflo Logo",
                                width: 150,
                                height: 32,
                              }),
                            }),
                          }),
                        }),
                      }),
                      !!(null === o || void 0 === o ? void 0 : o.length) &&
                        (0, i.jsx)("div", {
                          className:
                            "absolute inset-y-0 right-0 flex items-center justify-end pr-2 md:static md:inset-auto md:ml-6 md:pr-0",
                          children: (0, i.jsx)("div", {
                            className: "hidden md:block md:mr-2 lg:mr-0",
                            children: (0, i.jsx)(I, { navItems: o }),
                          }),
                        }),
                    ],
                  }),
                }),
                !!(null === o || void 0 === o ? void 0 : o.length) &&
                  (0, i.jsx)(h.u, {
                    show: n,
                    enter: "ease-out duration-300 absolute w-full",
                    enterFrom: "opacity-0 bottom-10",
                    enterTo: "opacity-100 bottom-0",
                    leave: "ease-in duration-200 absolute w-full",
                    leaveFrom: "opacity-100 bottom-0",
                    leaveTo: "opacity-0 bottom-10",
                    children: (0, i.jsx)(f.p.Panel, {
                      className:
                        "transition-all fixed h-full w-full z-30 md:hidden",
                      children: (0, i.jsx)(E, { navItems: o }),
                    }),
                  }),
              ],
            })
          );
        },
        A = function (e) {
          var n = e.navItems;
          return (0, i.jsx)(f.p, {
            as: "nav",
            className: "bg-white sticky top-0 z-50",
            id: Z,
            children: function (e) {
              return (0, i.jsx)(_, (0, a.Z)((0, r.Z)({}, e), { navItems: n }));
            },
          });
        };
      function L(e) {
        var n = e.open ? v.b0D : v.Oqj;
        return (0, i.jsxs)(f.p.Button, {
          className: y().mobileMenuButton,
          children: [
            (0, i.jsx)("span", {
              className: "sr-only",
              children: "Open main menu",
            }),
            (0, i.jsx)(n, {
              className: y().mobileMenuButtonIcon,
              "aria-hidden": "true",
            }),
          ],
        });
      }
      var C = function (e) {
        var n = e.item,
          t = e.isDefault,
          r = n.href,
          a = n.name,
          o = n.analyticEvent,
          l = n.items,
          c = (0, u.useRouter)(),
          d =
            null === l || void 0 === l
              ? void 0
              : l.filter(function (e) {
                  return !e.footerOnly && n.href !== e.href;
                }),
          h = k(n, c, t),
          v = (0, m.useCallback)(
            function () {
              o && (0, p.MR)(o.event, o.category, o.label);
            },
            [o]
          );
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(
              f.p.Button,
              {
                as: "a",
                href: r,
                className: (0, s.Z)(
                  y().mobileNavLink,
                  !h && y().inactiveNavLink
                ),
                "aria-current": h ? "page" : void 0,
                onClick: v,
                children: a,
              },
              a
            ),
            !!(null === d || void 0 === d ? void 0 : d.length) &&
              (0, i.jsx)("div", {
                className: "text-sm",
                children: d.map(function (e) {
                  return (0,
                  i.jsx)(C, { item: e, isDefault: e.href === r }, e.href);
                }),
              }),
          ],
        });
      };
      function I(e) {
        var n = e.navItems;
        return (0, i.jsx)("div", {
          className: y().desktopNav,
          children: n.map(function (e) {
            return (0, i.jsx)(N, { item: e }, e.name);
          }),
        });
      }
      function E(e) {
        var n = e.navItems.reduce(
            function (e, n) {
              return (
                n.type === x.vh.Link
                  ? e.links.push(n)
                  : n.type === x.vh.Button && e.buttons.push(n),
                e
              );
            },
            { links: [], buttons: [] }
          ),
          t = n.links,
          r = n.buttons;
        return (0, i.jsxs)("div", {
          className: y().mobileNav,
          id: w,
          children: [
            (0, i.jsx)("div", {
              className: "grid grid-cols-1 2xs:grid-cols-2 gap-4",
              children:
                null === t || void 0 === t
                  ? void 0
                  : t.map(function (e) {
                      return (0, i.jsx)(C, { item: e }, e.href);
                    }),
            }),
            (0, i.jsx)("div", {
              className: "grid grid-cols-1 2xs:grid-cols-2 gap-4 items-center",
              children:
                null === r || void 0 === r
                  ? void 0
                  : r.map(function (e) {
                      return (0,
                      i.jsx)(N, { item: e, className: y().navButton }, e.href);
                    }),
            }),
          ],
        });
      }
    },
    70535: function (e, n, t) {
      "use strict";
      t.d(n, {
        D4: function () {
          return l;
        },
        G: function () {
          return o;
        },
        vh: function () {
          return a;
        },
        x4: function () {
          return s;
        },
      });
      var r,
        a,
        i = t(2072);
      !(function (e) {
        (e.Default = "default"),
          (e.LogoOnly = "logoOnly"),
          (e.Custom = "custom");
      })(r || (r = {})),
        (function (e) {
          (e.Link = "link"), (e.Button = "button");
        })(a || (a = {}));
      var s = "https://enerflo.io/home",
        o = {
          features: {
            name: "Features",
            href: "/features",
            type: a.Link,
            items: [
              { name: "Overview", href: "/features", type: a.Link },
              {
                name: "Sales Process",
                href: "#",
                type: a.Link,
              },
              {
                name: "Project Management",
                href: "/features/project-management",
                type: a.Link,
              },
              {
                name: "Customer Engagement",
                href: "/features/customer-engagement",
                type: a.Link,
              },
              { name: "Docflo", href: "/features/docflo", type: a.Link },
              { name: "Lendflo", href: "/features/lendflo", type: a.Link },
            ],
          },
          integrations: {
            name: "Integrations",
            href: "/integrations",
            type: a.Link,
            items: [
              { name: "Overview", href: "/integrations", type: a.Link },
              {
                name: "Sales Qualification",
                href: "/integrations/sales-qualification",
                type: a.Link,
              },
              {
                name: "Solar Design",
                href: "/integrations/solar-design",
                type: a.Link,
              },
              {
                name: "Solar Finance",
                href: "/integrations/solar-finance",
                type: a.Link,
              },
              {
                name: "API Documentation",
                href: "https://docs.enerflo.io",
                type: a.Link,
              },
            ],
          },
          about: {
            name: "About",
            href: "/about",
            type: a.Link,
            items: [
              { name: "Company", href: "/about", type: a.Link },
              { name: "Contact Us", href: "/about/contact", type: a.Link },
              {
                name: "Partner with Enerflo",
                href: "/about/partner",
                type: a.Link,
              },
              { name: "Resources", href: "/resources", type: a.Link },
              {
                name: "Discover Enerflo",
                href: "/demo",
                type: a.Link,
                footerOnly: !0,
              },
            ],
          },
          support: { name: "Support", href: "/support", type: a.Link },
          discoverEnerflo: {
            name: "Discover Enerflo",
            href: "/demo",
            type: a.Button,
            variant: i.cT.solid,
          },
          login: {
            name: "Login",
            href: s,
            type: a.Button,
            variant: i.cT.outline,
            analyticEvent: {
              event: "Utility Button",
              category: "Buttons",
              label: "Login",
            },
          },
        },
        l = [
          o.features,
          o.integrations,
          o.about,
          o.support,
          o.discoverEnerflo,
          o.login,
        ];
    },
    53512: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return D;
        },
      });
      var r,
        a = t(26042),
        i = t(85893),
        s = t(2962),
        o = t(11163),
        l = t(69396),
        c = t(68916),
        d = t(25675),
        u = t.n(d),
        m = t(41664),
        h = t.n(m),
        f = {
          src: "/images/AICPA-SOC-Service-Orgs.webp",
          height: 357,
          width: 359,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42hWPsUrDQACG/2tzdyZ3l9SktFWQKp1KQStdVdDEB/ERfBJ9An2QFKdOQRcH42JBK7iokC3JJTkj3/LBN30EAI6P5gFj7IYQcskYh+t5sVTyGsAPOZzN/LLUq6/3z6nadsE4B+VbOJhM0qDfPyF7O7t3g9HoKozCMs9zSimDkEKnLymrGnNvNXUdcc6gtaZVVZEsy1AUOTXGYH88jjpur4fn5BHrtzU45/D9AJuPDZ6SBEI4pNPtdpeUcXiep5VSxnFs0wY9XywAQmICwA/PL1bKVdOyKGFahJAYDIevdd2cWQB+bds+berm1qI0ah1CymUcP/xvfv8BlONTvvMjfIcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        v = {
          src: "/images/soc-2-blue-logo.webp",
          height: 751,
          width: 734,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42g3KvUrDUBiA4fc7OTkttQgOghUyOIgITgoqiEgnF3H0FkodFBfBK3DrqPfgIEJXh4KL2iqIODj4R7eWVpNQk5PWxM7PIwCbtWDq5unudHfiY08ryS7DuYvyavkE+BEOmzNePt9oD1g4W/kChP2Wh1dUr+3M2ZLJo1Y9yE3v4BQSOm8uDlCaHxKFppj060L12da2PbM4q4iHGj9K6fqWDMXxddtqtDi9QZr1QySMY8I4G0dI0hSUOBplm1fv0fpDJzc08ucaBanopNH9NbijewVUekEviK11NzzDcsnw6UemEH/7KFMRAA4el4BzdG4NAUb2doxV4OUfpT1k4MpUVioAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = {
          src: "/images/enerflo-best-in-show-2024.webp",
          height: 692,
          width: 600,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA5UlEQVR42mNozfNmAGLX1Fi/M9kxbq/zE7zOdhf5uDKAQHehl29xsvd/B7+Q/xkF+f9jE2L+l6d4/J9Y5u3LkJ3g+8A3OPi/bVji7/TCwv/eCZm/fYD8gmTfBwxObn7/rQLj/mYCJWIzsv8n5eT8tw2O/2vv6v+fwc3b95VHZML/qoa6301tDf+qG+t++8Yk/ff29XnFUJrqk1WU7Pc/ICz0v2d4xP+AiIj/OQn+/+uzvLIYajK8QTixLNX7Tkmy1wcgvluS4pPEAAYmIUy7p/kyADFzW4GPzIn5AcwMCmEMDAphTACkqGKV34jL5QAAAABJRU5ErkJggg==",
          blurWidth: 7,
          blurHeight: 8,
        },
        p = t(51417),
        g = t(92814),
        y = t(70535),
        j = t(645),
        b = t(97544),
        k = t.n(b);
      !(function (e) {
        (e.Default = "default"), (e.Custom = "custom");
      })(r || (r = {}));
      var N = "https://trust.enerflo.com",
        Z = [
          {
            name: "YouTube",
            href: "https://www.youtube.com/@enerflo-your-solar-platform",
            icon: function (e) {
              return (0, i.jsx)(
                g.G,
                (0, l.Z)((0, a.Z)({}, e), { icon: p.opf, size: "2x" })
              );
            },
            type: y.vh.Link,
          },
          {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/enerflo/",
            icon: function (e) {
              return (0, i.jsx)(
                g.G,
                (0, l.Z)((0, a.Z)({}, e), { icon: p.hwn, size: "2x" })
              );
            },
            type: y.vh.Link,
          },
          {
            name: "Facebook",
            href: "https://www.facebook.com/Enerflo-907184749636150/",
            icon: function (e) {
              return (0, i.jsx)(
                g.G,
                (0, l.Z)((0, a.Z)({}, e), { icon: p.neY, size: "2x" })
              );
            },
            type: y.vh.Link,
          },
        ],
        w = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("h2", {
                id: "footer-heading",
                className: "sr-only",
                children: "Enerflo",
              }),
              (0, i.jsx)("div", {
                className: "py-10 px-4 sm:px-6 lg:px-8",
                children: (0, i.jsxs)("div", {
                  className: "lg:container mx-auto",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "grid mb-6 sm:grid-cols-12 md:mb-0",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "sm:col-span-8 xl:col-span-9 flex items-center",
                          children: (0, i.jsx)(u(), {
                            src: "/images/enerflo-dark.webp",
                            alt: "Enerflo Logo",
                            width: 150,
                            height: 32,
                            "aria-hidden": "true",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "sm:col-span-4 xl:col-span-3 flex justify-start items-center sm:justify-end",
                          children: (0, i.jsxs)("div", {
                            className: "flex space-x-2 mt-6 sm:mt-0",
                            children: [
                              (0, i.jsx)("a", {
                                href: y.x4,
                                className:
                                  "btn btn-navy text-sm md:text-base whitespace-nowrap",
                                onClick: function () {
                                  return (0, j.MR)(
                                    "Utility Button",
                                    "Buttons",
                                    "Login"
                                  );
                                },
                                children: "Login Now",
                              }),
                              (0, i.jsx)(h(), {
                                href: "/demo",
                                children: (0, i.jsx)("a", {
                                  className:
                                    "btn btn-primary text-sm md:text-base whitespace-nowrap",
                                  children: "Discover Enerflo",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "grid 2xs:grid-cols-12 gap-4",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "grid grid-cols-2 gap-6 2xs:col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 md:mt-10",
                          children: [
                            (0, i.jsx)("div", {
                              className: "mt-4 md:mt-0",
                              children: (0, i.jsx)(
                                L,
                                (0, a.Z)({}, y.G.features)
                              ),
                            }),
                            (0, i.jsx)("div", {
                              className: "mt-4 md:mt-0",
                              children: (0, i.jsx)(
                                L,
                                (0, a.Z)({}, y.G.integrations)
                              ),
                            }),
                            (0, i.jsx)("div", {
                              className: "hidden sm:block col-span-2",
                            }),
                            (0, i.jsx)("div", {
                              className: "mt-4 md:mt-0",
                              children: (0, i.jsx)(L, (0, a.Z)({}, y.G.about)),
                            }),
                            (0, i.jsxs)("div", {
                              className: "space-y-8",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "mt-4 md:mt-0",
                                  children: (0, i.jsx)(L, {
                                    name: "Book a Demo",
                                    href: "/demo",
                                    type: y.vh.Link,
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "mt-4 md:mt-0",
                                  children: (0, i.jsx)(L, {
                                    name: "Get Support",
                                    href: "/support",
                                    type: y.vh.Link,
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "mt-4 md:mt-0",
                                  children: (0, i.jsx)(L, {
                                    name: "Login to Enerflo",
                                    href: y.x4,
                                    type: y.vh.Link,
                                    analyticEvent: {
                                      event: "Utility Button",
                                      category: "Buttons",
                                      label: "Login",
                                    },
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "2xs:col-span-6 xs:col-span-8 sm:col-span-4 md:col-span-3 lg:col-span-4 mt-6 self-center sm:self-start sm:mt-0 md:mt-10",
                          children: (0, i.jsx)("a", {
                            href: "https://enerflo.com/resources/enerflo-wins-solar-power-world-2024-residential-best-in-show",
                            className: k().bestInShow2024,
                            children: (0, i.jsx)(u(), {
                              src: x,
                              alt: "Enerflo Best In Show Award 2024",
                              title: "Enerflo Best In Show Award 2024",
                            }),
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "2xs:col-span-6 xs:col-span-4 sm:col-span-12 md:col-span-3 lg:col-span-4 flex flex-col-reverse sm:flex-row md:flex-col justify-between gap-6 2xs:gap-4",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "flex justify-start items-end 2xs:items-center 2xs:justify-end sm:items-end sm:justify-start md:items-center md:justify-end space-x-2 xs:mt-9",
                              children: Z.map(function (e) {
                                return (0,
                                i.jsxs)("a", { href: e.href, className: "text-sm text-gray-400 hover:text-gray-500 py-1 px-2 transition-colors", children: [(0, i.jsx)("span", { className: "sr-only", children: e.name }), (0, i.jsx)(e.icon, { className: "h-6 w-6", "aria-hidden": "true" })] }, e.name);
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: k().soc2Logo,
                              children: [
                                (0, i.jsx)("a", {
                                  href: N,
                                  children: (0, i.jsx)(u(), {
                                    src: f,
                                    alt: "SOC for Service Organizations.",
                                    title: "SOC for Service Organizations",
                                  }),
                                }),
                                (0, i.jsx)("a", {
                                  href: N,
                                  children: (0, i.jsx)(u(), {
                                    src: v,
                                    alt: "Enerflo is continually monitoring its overall security posture with the help of Drata. View Enerflo's SOC 2 Type 1 & 2 Reports in the Trust Center.",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        _ = function (e) {
          var n,
            t = e.show,
            a = void 0 === t || t,
            s = e.variant,
            o = e.content;
          return (
            a &&
              (s === r.Custom
                ? o &&
                  (n = (0, i.jsx)("div", {
                    className: "py-10 px-4 sm:px-6 lg:px-8",
                    children: (0, i.jsx)("div", {
                      className: "lg:container mx-auto",
                      children: (0, i.jsx)(c.Z, { value: o }),
                    }),
                  }))
                : (n = (0, i.jsx)(w, {}))),
            (0, i.jsxs)("footer", {
              className: "bg-white border-t border-gray-200",
              "aria-labelledby": "footer-heading",
              children: [n, (0, i.jsx)(E, {})],
            })
          );
        };
      function A(e) {
        var n = e.title;
        return (0, i.jsx)("h3", {
          className: "text-navy tracking-wider",
          children: n,
        });
      }
      var L = function (e) {
        var n = e.href,
          t = e.name,
          r = e.items;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(A, {
              title: (0, i.jsx)(h(), {
                href: n,
                children: (0, i.jsx)("a", { children: t }),
              }),
            }),
            !!(null === r || void 0 === r ? void 0 : r.length) &&
              (0, i.jsx)(C, { links: r, parentHref: n }),
          ],
        });
      };
      function C(e) {
        var n = e.links,
          t = e.parentHref;
        return (0, i.jsx)("ul", {
          role: "list",
          className: "mt-4 space-y-4",
          children: n
            .filter(function (e) {
              return e.href !== t;
            })
            .map(function (e) {
              return (0,
              i.jsx)("li", { children: (0, i.jsx)(h(), { href: e.href, children: (0, i.jsx)("a", { className: "text-sm text-gray-400 hover:text-navy hover:text-opacity-80", children: e.name }) }) }, e.name);
            }),
        });
      }
      var I = new Date().getFullYear();
      function E() {
        return (0, i.jsx)("div", {
          className: k().legal,
          children: (0, i.jsxs)("p", {
            className: k().legalContent,
            children: [
              "\xa9 ",
              I,
              " Enerflo",
              (0, i.jsx)("span", {
                className: k().legalSeparator,
                children: " | ",
              }),
              (0, i.jsx)(h(), {
                href: "/terms",
                children: (0, i.jsx)("a", {
                  className: k().legalLink,
                  children: "Terms of Service",
                }),
              }),
              (0, i.jsx)("span", {
                className: k().legalSeparator,
                children: " | ",
              }),
              (0, i.jsx)(h(), {
                href: "/privacy",
                children: (0, i.jsx)("a", {
                  className: k().legalLink,
                  children: "Privacy Policy",
                }),
              }),
              (0, i.jsx)("span", {
                className: k().legalSeparator,
                children: " | ",
              }),
              (0, i.jsx)("a", {
                className: k().legalLink,
                href: N,
                children: "Trust Center",
              }),
              (0, i.jsx)("span", {
                className: k().legalSeparator,
                children: " | ",
              }),
              (0, i.jsx)(h(), {
                href: "/cookies",
                children: (0, i.jsx)("a", {
                  className: k().legalLink,
                  children: "Cookie Notice",
                }),
              }),
            ],
          }),
        });
      }
      var B = t(93791),
        D = function (e) {
          var n = e.children,
            t = e.title,
            r = e.description,
            l = e.navItems,
            c = e.imageUrl,
            d = e.footer,
            u = (0, o.useRouter)(),
            m = c || "".concat("https://enerflo.com", "/enerflo-dark.png");
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(s.PB, {
                title: t,
                description: r,
                canonical: "".concat("https://enerflo.com").concat(u.asPath),
                additionalMetaTags: [
                  {
                    property: "og:url",
                    content: "".concat("https://enerflo.com").concat(u.asPath),
                  },
                  { property: "og:image", content: m },
                ],
              }),
              (0, i.jsx)(B.tf, { navItems: l }),
              (0, i.jsx)("main", {
                children: (0, i.jsx)(j.Mi, {
                  title: t,
                  description: r,
                  children: n,
                }),
              }),
              (0, i.jsx)(_, (0, a.Z)({}, d)),
            ],
          });
        };
    },
    645: function (e, n, t) {
      "use strict";
      t.d(n, {
        MR: function () {
          return o;
        },
        Mi: function () {
          return s;
        },
      });
      var r = t(85893),
        a = t(67294),
        i = (0, a.createContext)({}),
        s = function (e) {
          var n = e.children,
            t = e.title,
            s = e.description,
            o = (0, a.useMemo)(
              function () {
                return { title: t, description: s };
              },
              [t, s]
            );
          return (0, r.jsx)(i.Provider, { value: o, children: n });
        },
        o = function (e, n, t) {
          e &&
            "undefined" !== typeof window.analytics &&
            window.analytics.track(e, { category: n, label: t });
        };
      n.ZP = function () {
        return (0, a.useContext)(i);
      };
    },
    6303: function (e, n, t) {
      "use strict";
      var r = t(26042),
        a = t(69396),
        i = t(99534),
        s = t(85893),
        o = t(86010),
        l = t(54414),
        c = t(57557),
        d = t.n(c),
        u = t(61202),
        m = t(25675),
        h = t.n(m);
      t(67294);
      n.Z = function (e) {
        var n = e.value,
          t = e.className,
          c = e.imageClassName,
          m = void 0 === c ? "rounded-md" : c,
          f = e.layout,
          v = e.withContainer,
          x = void 0 === v || v,
          p = (0, i.Z)(e, [
            "value",
            "className",
            "imageClassName",
            "layout",
            "withContainer",
          ]),
          g = d()(p, "isInline", "renderNode"),
          y = (0, u.J)((0, l.getClient)(), n);
        if (!(null === n || void 0 === n ? void 0 : n.asset)) return null;
        var j = (0, s.jsx)(
          h(),
          (0, r.Z)(
            (0, a.Z)((0, r.Z)({}, y), {
              height: "fill" !== f ? y.height : void 0,
              width: "fill" !== f ? y.width : void 0,
              alt: n.alt,
              className: (0, o.Z)("max-w-full crispImage", m),
              layout: f,
            }),
            g
          )
        );
        return x
          ? (0, s.jsx)("div", {
              className: (0, o.Z)("relative", t),
              children: j,
            })
          : j;
      };
    },
    12646: function (e, n, t) {
      "use strict";
      var r = t(85893),
        a = t(86010);
      t(67294);
      n.Z = function (e) {
        var n = e.children,
          t = e.className,
          i = void 0 === t ? "list-outside" : t;
        return (0, r.jsx)("ol", {
          className: (0, a.Z)("list-decimal mb-4 ml-4 space-y-1", i),
          children: n,
        });
      };
    },
    68916: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return ce;
        },
      });
      var r,
        a,
        i,
        s = t(40872),
        o = t(26042),
        l = t(69396),
        c = t(85893),
        d = t(54217),
        u = t(14924),
        m = t(67294),
        h = t(61214),
        f =
          ((r = {}),
          (0, u.Z)(r, h.iu.Left, "text-left"),
          (0, u.Z)(r, h.iu.Right, "text-right"),
          (0, u.Z)(r, h.iu.Center, "text-center"),
          r),
        v = function (e) {
          var n = e.value;
          return (0, c.jsx)("div", {
            className: f[n.alignment],
            children: (0, c.jsx)(ce, { value: n.content }),
          });
        },
        x = t(88104),
        p = function (e) {
          var n = e.children,
            t = e.value.style || "normal";
          return /^h\d/.test(t)
            ? (0, c.jsx)(x.Z, { tag: t, children: n })
            : "blockquote" === t
            ? (0, c.jsx)("blockquote", {
                className:
                  "border-l-2 border-gray-300 border-opacity-80 pl-2 italic",
                children: n,
              })
            : (0, c.jsx)("p", { children: n });
        },
        g = t(86010),
        y = function (e) {
          var n = e.value,
            t = "p-".concat(n.spacing || 0.5);
          return "newLine" === n.style
            ? (0, c.jsx)("div", { className: t })
            : (0, c.jsx)("hr", {
                className: (0, g.Z)(t, "border-black border-opacity-30"),
              });
        },
        j = function (e) {
          var n = e.children;
          return (0, c.jsx)("ul", {
            className: "list-disc list-outside mb-4 ml-4 space-y-1",
            children: n,
          });
        },
        b = t(2072),
        k = function (e) {
          var n = e.value;
          return (0, c.jsx)(b.ZP, {
            color: n.color,
            variant: n.variant,
            className: (0, g.Z)(n.fullWidth && "w-full text-center"),
            href: n.href,
            target: n.openInNewTab ? "_blank" : void 0,
            rel: n.openInNewTab ? "noopener noreferrer" : void 0,
            children: n.text,
          });
        },
        N = t(14293),
        Z = t.n(N),
        w = t(57528),
        _ = function (e) {
          var n = e.item,
            t = e.className,
            r = e.style;
          return (0, c.jsx)(
            "div",
            {
              style: r,
              className: (0, g.Z)(
                t,
                n.backgroundColor && w.K8[n.backgroundColor],
                n.backgroundColor && w.J2[n.backgroundColor],
                n.paddingY && "py-".concat(n.paddingY),
                n.paddingX && "px-".concat(n.paddingX),
                n.borderRadius &&
                  "rounded".concat(
                    "base" === n.borderRadius ? "" : "-".concat(n.borderRadius)
                  ),
                n.borderColor && "border-2 ".concat(w.FE[n.borderColor])
              ),
              children: (0, c.jsx)(ce, { value: n.content }),
            },
            n._key
          );
        },
        A = function (e) {
          var n = e.item,
            t = (0, m.useMemo)(
              function () {
                var e = {};
                return (
                  Z()(n.grow) || (e.flexGrow = n.grow),
                  n.preventShrink && (e.flexShrink = 0),
                  Z()(n.maxWidth) || (e.maxWidth = n.maxWidth),
                  Z()(n.minWidth) || (e.minWidth = n.minWidth),
                  e
                );
              },
              [n.grow, n.maxWidth, n.minWidth, n.preventShrink]
            );
          return (0, c.jsx)(_, { item: n, style: t });
        },
        L = function (e) {
          if (e.reverse)
            return e.column ? "flex-col-reverse" : "flex-row-reverse";
        },
        C = function (e) {
          var n = e.value;
          return (0, c.jsx)("div", {
            className: (0, g.Z)(
              "flex flex-col flex-wrap",
              !n.column && "sm:flex-row",
              L(n),
              n.gap && "gap-".concat(n.gap),
              n.justify && h.FI[n.justify],
              n.align && h.F3[n.align]
            ),
            children: n.items.map(function (e) {
              return (0, c.jsx)(A, { item: e }, e._key);
            }),
          });
        },
        I = t(77126),
        E = function (e) {
          var n = e.value;
          return (0, c.jsx)(I.Z, {
            columns: n.columns,
            columnBreakpoints: n.columnBreakpoints,
            autoResize: n.autoResize,
            children: n.items.map(function (e) {
              return (0, c.jsx)(_, { item: e }, e._key);
            }),
          });
        },
        B = t(6303),
        D = function (e) {
          var n = e.children,
            t = e.value;
          return (null === t || void 0 === t ? void 0 : t.href)
            ? (0, c.jsx)("a", {
                href: null === t || void 0 === t ? void 0 : t.href,
                className:
                  "text-primary underline hover:opacity-80 transition-opacity",
                target: (null === t || void 0 === t ? void 0 : t.openInNewTab)
                  ? "_blank"
                  : void 0,
                rel: "noopener noreferrer",
                children: n,
              })
            : (0, c.jsx)(c.Fragment, { children: n });
        },
        S = t(12646),
        P = t(96159),
        O = t(74201),
        U = t(63672),
        M = t(11163),
        F = t(55781),
        R = function (e) {
          var n = e._id,
            t = e.title,
            r = e.image,
            a = e.type,
            i = e.slug,
            s = e.postedDate,
            o = e.baseUrl,
            l = (0, M.useRouter)();
          return (0, c.jsx)(
            "a",
            {
              href: "".concat(o, "/").concat(i),
              className: "block group text-left",
              children: (0, c.jsxs)(
                "div",
                {
                  className: "flex gap-2",
                  children: [
                    (0, c.jsx)("div", {
                      className:
                        "flex shrink-0 min-h-[3.5rem] w-14 min-w-0 relative rounded-lg overflow-hidden border border-gray-200",
                      children: r
                        ? (0, c.jsx)(B.Z, {
                            value: r,
                            className: "w-full h-full",
                            imageClassName:
                              "object-center object-cover crispImage",
                            layout: "fill",
                          })
                        : (0, c.jsx)(P.Z, {}),
                    }),
                    (0, c.jsxs)("div", {
                      className:
                        "flex flex-1 flex-col justify-between gap-0.5 self-center",
                      children: [
                        (0, c.jsxs)("div", {
                          className: "flex gap-x-2 flex-wrap",
                          children: [
                            a &&
                              (0, c.jsx)("button", {
                                type: "button",
                                "aria-label": "See more ".concat(
                                  a.label,
                                  " entries"
                                ),
                                onClick: function (e) {
                                  e.stopPropagation(),
                                    e.preventDefault(),
                                    l.push(
                                      "".concat(o, "?type=").concat(a.value)
                                    );
                                },
                                className:
                                  "hover:underline p-0 text-xs font-bold text-primary tracking-wide",
                                title: "See more ".concat(a.label, " entries"),
                                children: a.value.toUpperCase(),
                              }),
                            (0, c.jsx)("time", {
                              dateTime: s,
                              className:
                                "text-xs text-gray-400 w-full sm:w-auto",
                              children: (0, O.Z)(
                                (0, U.Z)(s, "yyyy-MM-dd", new Date()),
                                "MMM dd, yyyy"
                              ),
                            }),
                          ],
                        }),
                        (0, c.jsx)("p", {
                          className:
                            "text-gray-900 group-hover:text-primary transition-colors block flex-1 font-bold",
                          children: (0, c.jsx)(F.Z, { text: t }),
                        }),
                      ],
                    }),
                  ],
                },
                t
              ),
            },
            n
          );
        },
        z = function (e) {
          var n = e.items,
            t = e.baseUrl;
          return (null === n || void 0 === n ? void 0 : n.length)
            ? (0, c.jsx)("div", {
                className: "space-y-6",
                children: n.map(function (e) {
                  return (0,
                  m.createElement)(R, (0, l.Z)((0, o.Z)({}, e), { key: e._id, baseUrl: t }));
                }),
              })
            : (0, c.jsx)("p", {
                className: "text-gray-400 italic text-sm",
                children: "No items found",
              });
        },
        T = function (e) {
          var n = e.value;
          return (0, c.jsx)(z, (0, o.Z)({}, n));
        },
        W = t(99534),
        G = t(48137),
        Q = t(53597),
        V = t(16573),
        Y = t(46616),
        K = t(51417),
        q = t(92814),
        J = t(63801);
      !(function (e) {
        (e.Email = "email"),
          (e.LinkedIn = "linkedIn"),
          (e.Facebook = "facebook"),
          (e.Twitter = "twitter");
      })(a || (a = {}));
      var X =
          ((i = {}),
          (0, u.Z)(i, a.Email, {
            Button: G.Z,
            Icon: function (e) {
              return (0, c.jsx)(J.bV6, (0, o.Z)({}, e));
            },
          }),
          (0, u.Z)(i, a.LinkedIn, {
            Button: Q.Z,
            Icon: function (e) {
              return (0, c.jsx)(q.G, (0, o.Z)({ icon: K.hwn }, e));
            },
          }),
          (0, u.Z)(i, a.Facebook, {
            Button: V.Z,
            Icon: function (e) {
              return (0, c.jsx)(q.G, (0, o.Z)({ icon: K.AYu }, e));
            },
          }),
          (0, u.Z)(i, a.Twitter, {
            Button: Y.Z,
            Icon: function (e) {
              return (0, c.jsx)(q.G, (0, o.Z)({ icon: K.mdU }, e));
            },
          }),
          i),
        H = function (e) {
          var n = e.type,
            t = e.url;
          if (!X[n]) return null;
          var r = X[n],
            a = r.Button,
            i = r.Icon;
          return (0, c.jsx)(a, {
            url: t,
            className:
              "!bg-gray-200 !rounded-full !p-1 group h-10 w-10 flex items-center justify-center",
            children: (0, c.jsx)(i, {
              className:
                "h-6 w-6 text-gray-500 group-hover:text-primary transition-colors text-lg",
            }),
          });
        },
        $ = function (e) {
          var n = e.icons,
            t = e.url,
            r = (0, W.Z)(e, ["icons", "url"]);
          return (0, c.jsx)("div", {
            className: "flex gap-2 items-center",
            children: n.map(function (e) {
              return (0,
              m.createElement)(H, (0, l.Z)((0, o.Z)({}, r), { key: e, type: e, url: t }));
            }),
          });
        },
        ee = function (e) {
          var n = e.value,
            t = (0, M.useRouter)();
          return (0, c.jsx)(
            $,
            (0, l.Z)((0, o.Z)({}, n), {
              url: "".concat("https://enerflo.com").concat(t.asPath),
            })
          );
        },
        ne = function (e) {
          var n = e.children,
            t = e.value,
            r = (null === t || void 0 === t ? void 0 : t.color)
              ? { color: null === t || void 0 === t ? void 0 : t.color.hex }
              : void 0;
          return (0, c.jsx)("span", { style: r, children: n });
        },
        te = t(22004),
        re = t(63409),
        ae = t.n(re),
        ie = function (e) {
          return "number" === typeof e ? "".concat(e, "px") : e;
        },
        se = function (e) {
          var n = e.className,
            t = e.url,
            r = e.width,
            a = e.height,
            i = (0, W.Z)(e, ["className", "url", "width", "height"]);
          return (0, c.jsx)("div", {
            className: (0, g.Z)(ae().videoWrapper, n),
            children: (0, c.jsx)(
              te.Z,
              (0, l.Z)(
                (0, o.Z)(
                  {
                    controls: !0,
                    playsinline: !0,
                    config: {
                      youtube: {},
                      vimeo: { playerOptions: { byline: !1 } },
                    },
                  },
                  i
                ),
                {
                  url: t,
                  width: r ? ie(r) : "100%",
                  height: a ? ie(a) : "100%",
                }
              )
            ),
          });
        },
        oe = function (e) {
          var n = e.value,
            t = e.onPlay,
            r = n || {},
            a = r.url,
            i = r.options;
          if (!a) return null;
          var s = i || {},
            o = s.width,
            l = s.height;
          return (0, c.jsx)(se, { url: a, onPlay: t, width: o, height: l });
        },
        le = {
          marks: { color: ne, link: D },
          types: {
            button: k,
            image: B.Z,
            video: oe,
            break: y,
            grid: E,
            flex: C,
            shareIcons: ee,
            relatedItems: T,
            align: v,
          },
          block: p,
          list: { bullet: j, number: S.Z },
        },
        ce = function (e) {
          var n = (0, s.Z)({}, e);
          return (0, c.jsx)(
            d.YI,
            (0, l.Z)((0, o.Z)({}, n), { components: le })
          );
        };
    },
    61214: function (e, n, t) {
      "use strict";
      var r, a, i, s;
      t.d(n, {
        F3: function () {
          return s;
        },
        FI: function () {
          return i;
        },
        Zy: function () {
          return a;
        },
        iu: function () {
          return r;
        },
      }),
        (function (e) {
          (e.Left = "left"), (e.Right = "right"), (e.Center = "center");
        })(r || (r = {})),
        (function (e) {
          (e.base = "base"),
            (e["2XS"] = "2xs"),
            (e.XS = "xs"),
            (e.SM = "sm"),
            (e.MD = "md"),
            (e.LG = "lg"),
            (e.XL = "xl"),
            (e["2XL"] = "2xl");
        })(a || (a = {})),
        (function (e) {
          (e.start = "justify-start"),
            (e.end = "justify-end"),
            (e.center = "justify-center"),
            (e.between = "justify-between"),
            (e.around = "justify-around"),
            (e.evenly = "justify-evenly");
        })(i || (i = {})),
        (function (e) {
          (e.start = "items-start"),
            (e.end = "items-end"),
            (e.center = "items-center"),
            (e.baseline = "items-baseline"),
            (e.stretch = "items-stretch");
        })(s || (s = {}));
    },
    57528: function (e, n, t) {
      "use strict";
      t.d(n, {
        FE: function () {
          return c;
        },
        J2: function () {
          return d;
        },
        K8: function () {
          return l;
        },
      });
      var r,
        a,
        i,
        s = t(14924),
        o = t(9955),
        l =
          ((r = {}),
          (0, s.Z)(r, o.C.White, "bg-white"),
          (0, s.Z)(r, o.C.Primary, "bg-primary"),
          (0, s.Z)(r, o.C.Secondary, "bg-secondary"),
          (0, s.Z)(r, o.C.Navy, "bg-navy"),
          (0, s.Z)(r, o.C.NavyDark, "bg-navy-dark"),
          (0, s.Z)(r, o.C.Gray, "bg-gray-100"),
          (0, s.Z)(r, o.C.Black, "bg-black"),
          r),
        c =
          ((a = {}),
          (0, s.Z)(a, o.C.White, "border-white"),
          (0, s.Z)(a, o.C.Primary, "border-primary"),
          (0, s.Z)(a, o.C.Secondary, "border-secondary"),
          (0, s.Z)(a, o.C.Navy, "border-navy"),
          (0, s.Z)(a, o.C.NavyDark, "border-navy-dark"),
          (0, s.Z)(a, o.C.Gray, "border-gray-100"),
          (0, s.Z)(a, o.C.Black, "border-black"),
          a),
        d =
          ((i = {}),
          (0, s.Z)(i, o.C.Black, "text-white"),
          (0, s.Z)(i, o.C.NavyDark, "text-white"),
          (0, s.Z)(i, o.C.Navy, "text-white"),
          i);
    },
    9955: function (e, n, t) {
      "use strict";
      var r;
      t.d(n, {
        C: function () {
          return r;
        },
      }),
        (function (e) {
          (e.White = "white"),
            (e.Primary = "primary"),
            (e.Secondary = "secondary"),
            (e.Navy = "navy"),
            (e.NavyDark = "navy-dark"),
            (e.Gray = "gray"),
            (e.Black = "black");
        })(r || (r = {}));
    },
    83366: function (e) {
      "use strict";
      e.exports = {
        projectId: "8froh8gx",
        dataset: "production",
        useCdn: !0,
        apiVersion: "2022-11-14",
      };
    },
    54414: function (e, n, t) {
      "use strict";
      var r = t(34155);
      Object.defineProperty(n, "__esModule", { value: !0 });
      var a = t(50337).Z,
        i = t(49961).Z,
        s = t(59729),
        o = t(83366),
        l = i(a({}, o), { useCdn: !1, token: r.env.SANITY_API_READ_TOKEN });
      e.exports = {
        getClient: function (e) {
          return s(e ? l : o);
        },
      };
    },
    51765: function (e) {
      e.exports = {
        heading: "heading_heading__Q8rPg",
        h1: "heading_h1__1B0wf heading_heading__Q8rPg",
        h2: "heading_h2__Df51E heading_heading__Q8rPg",
        h3: "heading_h3__4ZRVq heading_heading__Q8rPg",
        h4: "heading_h4__vo4zM heading_heading__Q8rPg",
        h5: "heading_h5__J_7Po heading_heading__Q8rPg",
        h6: "heading_h6__MDiBz heading_heading__Q8rPg",
        bold: "heading_bold__LJkYd",
        regular: "heading_regular__37vIE",
      };
    },
    97544: function (e) {
      e.exports = {
        legal: "footer_legal__PDuAd",
        legalContent: "footer_legalContent__b8nI_",
        legalSeparator: "footer_legalSeparator__JnqBb",
        legalLink: "footer_legalLink__ZW4hT",
        soc2Logo: "footer_soc2Logo__XXqJV",
        bestInShow2024: "footer_bestInShow2024__dEVch",
      };
    },
    86399: function (e) {
      e.exports = {
        mobileMenuButton: "header_mobileMenuButton___tJW_",
        mobileNav: "header_mobileNav__NSJ5K",
        mobileMenuButtonIcon: "header_mobileMenuButtonIcon__PA6e7",
        mobileNavLink: "header_mobileNavLink__GT0Xo",
        desktopNav: "header_desktopNav__QCu1A",
        desktopNavItem: "header_desktopNavItem__Q2rEs",
        desktopNavLink: "header_desktopNavLink__gq_Fz",
        navButton: "header_navButton__0Kfqx",
        inactiveNavLink: "header_inactiveNavLink__IMnZV",
      };
    },
    63409: function (e) {
      e.exports = { videoWrapper: "video-player_videoWrapper__UEP4d" };
    },
  },
]);
//# sourceMappingURL=3512-ee10cbf72785f074.js.map
