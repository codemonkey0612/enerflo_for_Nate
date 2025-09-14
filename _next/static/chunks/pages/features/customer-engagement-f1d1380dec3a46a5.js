(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [776],
  {
    68491: function (e, a, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/features/customer-engagement",
        function () {
          return n(54082);
        },
      ]);
    },
    22472: function (e, a, n) {
      "use strict";
      n.d(a, {
        W: function () {
          return t;
        },
      });
      var t,
        r = n(85893),
        s = n(86010),
        c = (n(67294), n(70131)),
        i = n(63801),
        l = n(47143),
        d = n.n(l);
      !(function (e) {
        (e.PRIMARY = "primary"),
          (e.GREEN = "green"),
          (e.TRANSPARENT = "transparent");
      })(t || (t = {}));
      a.Z = function (e) {
        var a = e.className,
          n = e.delay,
          l = e.iconClassName,
          o = e.animate,
          m = e.variant,
          u = void 0 === m ? t.GREEN : m,
          h = e.loaded,
          f = (0, c.YD)({ threshold: 0.6, triggerOnce: !0 }),
          x = f.inView,
          _ = f.ref;
        return (0, r.jsx)("div", {
          className: a,
          ref: _,
          children: (0, r.jsx)("div", {
            className: (0, s.Z)(
              d().animatedCheck,
              n && d()["delay".concat(n)],
              (void 0 === o ? x && (void 0 === h || h) : o) && d().animate,
              u && d()[u]
            ),
            children: (0, r.jsx)(i.nQG, { className: l }),
          }),
        });
      };
    },
    13551: function (e, a, n) {
      "use strict";
      n.d(a, {
        I: function () {
          return o;
        },
      });
      var t = n(85893),
        r = (n(67294), n(86010)),
        s = n(21804),
        c = n.n(s),
        i = n(41664),
        l = n.n(i),
        d = function (e) {
          var a = e.children,
            n = e.className;
          return (0, t.jsx)("div", {
            className: (0, r.Z)("heroInner", n),
            children: a,
          });
        },
        o = function (e) {
          var a = e.title,
            n = e.children,
            s = e.className,
            i = void 0 === s ? "items-center" : s;
          return (0, t.jsx)("section", {
            id: c()(a),
            className: (0, r.Z)("heroSection", i),
            children: n,
          });
        },
        m = function (e) {
          var a = e.title,
            n = e.children,
            r = e.className;
          return (0, t.jsx)(o, {
            title: a,
            children: (0, t.jsx)(d, { className: r, children: n }),
          });
        };
      (m.Header = function (e) {
        var a = e.children,
          n = e.className;
        return (0, t.jsx)("div", {
          className: (0, r.Z)("heroHeader", n),
          children: a,
        });
      }),
        (m.Inner = d),
        (m.Content = function (e) {
          var a = e.children,
            n = e.className;
          return (0, t.jsx)("div", {
            className: (0, r.Z)("heroContent", n),
            children: a,
          });
        }),
        (m.Description = function (e) {
          var a = e.children,
            n = e.className,
            s = void 0 === n ? "text-gray-500" : n;
          return (0, t.jsx)("p", {
            className: (0, r.Z)("heroDescription", s),
            children: a,
          });
        }),
        (m.Action = function (e) {
          var a = e.children,
            n = e.className,
            s = e.href;
          return (0, t.jsx)(l(), {
            href: s,
            children: (0, t.jsx)("a", {
              className: (0, r.Z)("heroAction btn", n),
              children: a,
            }),
          });
        }),
        (a.Z = m);
    },
    12473: function (e, a, n) {
      "use strict";
      var t = n(85893),
        r = (n(67294), n(63801)),
        s = n(13551),
        c = n(645);
      a.Z = function (e) {
        var a = e.url,
          n = e.buttonText,
          i = e.description;
        return (0, t.jsx)("div", {
          className: "bg-primary z-20 relative",
          children: (0, t.jsx)(s.Z, {
            className: "sm:py-12 lg:py-16",
            children: (0, t.jsx)(s.Z.Content, {
              children: (0, t.jsxs)("div", {
                className:
                  "flex flex-wrap items-center justify-center -mx-2 -my-2",
                children: [
                  (0, t.jsx)("div", {
                    className: "text-white text-base md:text-lg mx-2 my-2",
                    children: i,
                  }),
                  (0, t.jsxs)("a", {
                    href: a,
                    className:
                      "btn btn-dark text-sm md:text-base flex items-center whitespace-nowrap mx-2 my-2",
                    onClick: function () {
                      return (0, c.MR)(
                        "Engagement Button",
                        "Buttons",
                        "Next Page ".concat(n)
                      );
                    },
                    children: [
                      (0, t.jsx)("span", { children: n }),
                      (0, t.jsx)(r.a3z, { className: "h-4 w-4 ml-2" }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    54082: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          default: function () {
            return v;
          },
        });
      var t = n(85893),
        r = n(12473),
        s = n(5152),
        c = n.n(s),
        i = n(8844),
        l = n(53512),
        d = n(67294),
        o = n(22472),
        m = n(88104),
        u = n(25675),
        h = n.n(u),
        f = {
          src: "/_next/static/media/enerflo-solar-platform-customer-engagement.2d3759d7.png",
          height: 998,
          width: 834,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA3klEQVR42k2NO2oCURSGb5cFZAVZQ6rsIBtKE3AgRtEwYJMuaJWHSUS001ERhSl8IOgCfCC2gnpf5845w/Ha+bUf//eLn+r3TT4b3Ebt1l2lUi68FQulMAzfO93ugxiNJ0+1etN0ev39aDrnfjzmyWzBy/UmJ07SFJVJmFLmKOpRtfzlWo0GL1ebjDgqndOATJRi7Ff/n38UD4a83e4CIaXKXiQiOYfEkBKxJ0EKfFaXDBCj70plCQAcIrIFlxEHZR6VxQ/nkl+pgb3z/+lFvoprjIVnpe2LNpBX2tyfAZBGr9H1N8yHAAAAAElFTkSuQmCC",
          blurWidth: 7,
          blurHeight: 8,
        },
        x = n(13551),
        _ = "Engage Your Customers",
        p = function () {
          var e = (0, d.useState)(!1),
            a = e[0],
            n = e[1];
          return (0, t.jsxs)(x.Z, {
            title: _,
            className:
              "flex-col-reverse space-y-reverse sm:flex-row-reverse lg:space-x-32 sm:!space-x-reverse",
            children: [
              (0, t.jsxs)("div", {
                className: "w-full xs:w-3/4 sm:w-5/12 md:w-1/2 relative",
                children: [
                  (0, t.jsx)("figure", {
                    className: "p-3",
                    children: (0, t.jsx)(h(), {
                      src: f,
                      alt: "Keep your customers engaged and informed through the Enerflo Customer Portal.",
                      layout: "responsive",
                      quality: 100,
                      placeholder: "blur",
                      loading: "eager",
                      priority: !0,
                      className: "crispImage",
                      sizes: "(min-width: 768px) 50vw, 100vw",
                      onLoadingComplete: function () {
                        return n(!0);
                      },
                    }),
                  }),
                  (0, t.jsx)(o.Z, {
                    className: "absolute top-[5%] left-[20%] md:left-[28%]",
                    iconClassName: "h-10 w-10 xl:h-14 xl:w-14",
                    variant: o.W.PRIMARY,
                    loaded: a,
                  }),
                  (0, t.jsx)(o.Z, {
                    className:
                      "absolute top-[25%] md:top-[18%] left-[30%] md:left-[38%]",
                    delay: 1,
                    iconClassName: "h-6 w-6 xl:h-8 xl:w-8",
                    variant: o.W.PRIMARY,
                    loaded: a,
                  }),
                  (0, t.jsx)(o.Z, {
                    className:
                      "absolute top-[40%] md:top-[30%] left-[26%] md:left-[34%]",
                    delay: 2,
                    iconClassName: "h-4 w-4 xl:h-5 xl:w-5",
                    variant: o.W.PRIMARY,
                    loaded: a,
                  }),
                ],
              }),
              (0, t.jsxs)(x.Z.Content, {
                className: "sm:text-left sm:w-7/12 md:w-1/2",
                children: [
                  (0, t.jsx)(x.Z.Header, {
                    className: "md:items-start sm:justify-start",
                    children: (0, t.jsx)(m.Z, { tag: "h1", children: _ }),
                  }),
                  (0, t.jsx)(x.Z.Description, {
                    children:
                      "Build trust and create transparency with the Enerflo Customer Portal. Keep your customers engaged and informed throughout the sales and fulfillment process.",
                  }),
                ],
              }),
            ],
          });
        },
        N = c()(
          function () {
            return Promise.resolve().then(n.bind(n, 8844));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8844];
              },
            },
          }
        ),
        g = c()(
          function () {
            return n.e(1480).then(n.bind(n, 61480));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [61480];
              },
            },
          }
        ),
        v = function () {
          return (0, t.jsxs)(l.Z, {
            title: "Enerflo Solar Software Platform Features | Customer Portal",
            description:
              "Build trust by keeping your customers engaged and informed throughout the solar sales and fulfillment process with the Enerflo Customer Portal.",
            children: [
              (0, t.jsx)(p, {}),
              (0, t.jsx)(g, {}),
              (0, t.jsx)(r.Z, {
                buttonText: "View Docflo",
                url: "/features/docflo",
                description: "Generate Customer Signing Packets in 3 Seconds",
              }),
              (0, t.jsx)(N, { scheme: i.DemoSchemes.LIGHT }),
            ],
          });
        };
    },
    47143: function (e) {
      e.exports = {
        animatedCheck: "animated-check_animatedCheck__0CrzN",
        md: "animated-check_md__ko1ci",
        lg: "animated-check_lg__axN7b",
        green: "animated-check_green__aY07z",
        primary: "animated-check_primary__ni16H",
        transparent: "animated-check_transparent__Ojegk",
        animate: "animated-check_animate__dk7m5",
        check: "animated-check_check__fo_oE",
        checkPrimary: "animated-check_checkPrimary__su0_t",
        checkTransparent: "animated-check_checkTransparent__apYWb",
        fade: "animated-check_fade__f0WAf",
        delay1: "animated-check_delay1__hZozD",
        delay2: "animated-check_delay2__CwFL2",
        delay3: "animated-check_delay3__Nq_JA",
        delay4: "animated-check_delay4__Ddo__",
        delay5: "animated-check_delay5__lVA1W",
        delay6: "animated-check_delay6___jRQr",
      };
    },
  },
  function (e) {
    e.O(0, [7112, 1999, 4520, 1286, 3512, 8844, 9774, 2888, 179], function () {
      return (a = 68491), e((e.s = a));
      var a;
    });
    var a = e.O();
    _N_E = a;
  },
]);
//# sourceMappingURL=customer-engagement-f1d1380dec3a46a5.js.map
