(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n(8484)
            }])
        },
        8484: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893),
                s = n(9008),
                o = n.n(s),
                c = n(7294);
            n(6774);

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function (t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }
            t.default = function (e) {
                var t = e.Component,
                    n = e.pageProps;
                return (0, r.jsxs)(c.Fragment, {
                    children: [(0, r.jsxs)(o(), {
                        children: [(0, r.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }), (0, r.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: !0
                        }), (0, r.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                            rel: "stylesheet"
                        }), (0, r.jsx)("link", {
                            type: "text/css",
                            rel: "stylesheet",
                            href: "css/plugins.css"
                        }), (0, r.jsx)("link", {
                            type: "text/css",
                            rel: "stylesheet",
                            href: "css/style.css?ver=1.1"
                        })]
                    }), (0, r.jsx)(t, l({}, n))]
                })
            }
        },
        6774: function () {},
        9008: function (e, t, n) {
            e.exports = n(3121)
        }
    },
    function (e) {
        var t = function (t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], (function () {
            return t(1118), t(880)
        }));
        var n = e.O();
        _N_E = n
    }
]);