"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [689], {
        8689: function (e, n, s) {
            s.d(n, {
                Z: function () {
                    return p
                }
            });
            var t = s(5893),
                i = s(9008),
                c = s.n(i),
                r = s(7294),
                a = function (e) {
                    var n = (0, r.useRef)();
                    return (0, r.useEffect)((function () {
                        var s = function (s) {
                            n.current.contains(s.target) || e()
                        };
                        return document.addEventListener("mousedown", s),
                            function () {
                                document.removeEventListener("mousedown", s)
                            }
                    })), n
                },
                l = function (e) {
                    var n = e.close,
                        s = e.videoID,
                        i = a((function () {
                            n(!1)
                        }));
                    return (0, t.jsxs)(r.Fragment, {
                        children: [(0, t.jsx)("div", {
                            className: "mfp-bg mfp-ready",
                            onClick: function () {
                                return n(!1)
                            }
                        }), (0, t.jsx)("div", {
                            className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                            tabIndex: -1,
                            style: {
                                overflow: "hidden auto"
                            },
                            children: (0, t.jsxs)("div", {
                                className: "mfp-container mfp-s-ready mfp-iframe-holder",
                                children: [(0, t.jsx)("div", {
                                    className: "mfp-content",
                                    ref: i,
                                    children: (0, t.jsxs)("div", {
                                        className: "mfp-iframe-scaler",
                                        children: [(0, t.jsx)("button", {
                                            title: "Close (Esc)",
                                            type: "button",
                                            className: "mfp-close",
                                            onClick: function () {
                                                return n()
                                            },
                                            children: "\xd7"
                                        }), (0, t.jsx)("iframe", {
                                            src: s,
                                            title: "YouTube video player",
                                            frameBorder: "0",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                            allowFullScreen: !0
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "mfp-preloader",
                                    children: "Loading..."
                                })]
                            })
                        })]
                    })
                },
                o = function () {
                    var e = (0, r.useState)(!1),
                        n = e[0],
                        s = e[1],
                        i = (0, r.useState)(null),
                        c = i[0],
                        a = i[1];
                    return (0, r.useEffect)((function () {
                        setTimeout((function () {
                            document.querySelectorAll("a").forEach((function (e) {
                                (e.href.includes("www.youtube.com") || e.href.includes("vimeo.com") || e.href.includes("soundcloud.com")) && e.addEventListener("click", (function (n) {
                                    n.preventDefault(), a(e.href), s(!0)
                                }))
                            }))
                        }), 1500)
                    }), []), (0, t.jsx)(r.Fragment, {
                        children: n && (0, t.jsx)(l, {
                            close: function () {
                                return s(!1)
                            },
                            videoID: c
                        })
                    })
                },
                d = function () {
                    for (var e = window.scrollY, n = document.querySelectorAll(".neoh_fn_header"), s = 0; s < n.length; s++) {
                        var t = n[s];
                        t && (e > 10 ? t.classList.add("fixer") : t.classList.remove("fixer"))
                    }
                },
                m = function () {
                    var e = window.pageYOffset,
                        n = document.body.clientHeight,
                        s = parseInt(e / (n - window.innerHeight) * 300),
                        t = document.querySelector(".neoh_fn_totop");
                    e > 0 ? t.classList.add("active") : t.classList.remove("active");
                    var i = t.querySelector(".stroke-solid");
                    i && (i.style.strokeDashoffset = 300 - s)
                },
                u = s(1664),
                f = s.n(u),
                h = function () {
                    return (0, t.jsx)("footer", {
                        id: "footer",
                        children: (0, t.jsx)("div", {
                            className: "neoh_fn_footer",
                            children: (0, t.jsx)("div", {
                                className: "footer_bottom",
                                children: (0, t.jsx)("div", {
                                    className: "container",
                                    children: (0, t.jsxs)("div", {
                                        className: "fb_in",
                                        children: [(0, t.jsx)("div", {
                                            className: "fb_left",
                                            children: (0, t.jsxs)("ul", {
                                                children: [(0, t.jsx)("li", {
                                                    children: (0, t.jsx)("a", {
                                                        onClick: function () {
                                                            return window.open("whitepaper.pdf")
                                                        },
                                                        children: "Docs"
                                                    })
                                                }), (0, t.jsx)("li", {
                                                    children: (0, t.jsx)("a", {
                                                        onClick: function () {
                                                            return window.open("https://etherscan.io/address/0x7adc29cec54b124a7E8E1B1415DFf95DDD13B173")
                                                        },
                                                        children: "Contract"
                                                    })
                                                }), (0, t.jsx)("li", {
                                                    children: (0, t.jsx)("a", {
                                                        onClick: function () {
                                                            return window.open("https://t.me/MetaToolsERC")
                                                        },
                                                        children: "Telegram"
                                                    })
                                                }), (0, t.jsx)("li", {
                                                    children: (0, t.jsx)("a", {
                                                        onClick: function () {
                                                            return window.open("https://twitter.com/MetaToolsERC")
                                                        },
                                                        children: "Twitter"
                                                    })
                                                })]
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "fb_right"
                                        })]
                                    })
                                })
                            })
                        })
                    })
                },
                x = function () {
                    var e = (0, r.useState)(!1),
                        n = e[0],
                        s = e[1];
                    return (0, t.jsxs)(r.Fragment, {
                        children: [(0, t.jsx)("div", {
                            className: "nav_overlay ".concat(n ? "go" : ""),
                            onClick: function () {
                                return s(!1)
                            }
                        }), (0, t.jsxs)("div", {
                            className: "neoh_fn_nav ".concat(n ? "go" : ""),
                            children: [(0, t.jsx)("div", {
                                className: "trigger is-active",
                                children: (0, t.jsxs)("div", {
                                    className: "trigger_in",
                                    onClick: function () {
                                        return s(!1)
                                    },
                                    children: [(0, t.jsx)("span", {
                                        className: "text",
                                        children: "Close"
                                    }), (0, t.jsxs)("span", {
                                        className: "hamb",
                                        children: [(0, t.jsx)("span", {
                                            className: "hamb_a"
                                        }), (0, t.jsx)("span", {
                                            className: "hamb_b"
                                        }), (0, t.jsx)("span", {
                                            className: "hamb_c"
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "nav_content",
                                children: (0, t.jsx)("div", {
                                    className: "nav_menu",
                                    children: (0, t.jsxs)("ul", {
                                        children: [(0, t.jsx)("li", {
                                            className: "menu-item menu-item-has-children",
                                            children: (0, t.jsx)("a", {
                                                href: "#",
                                                onClick: function () {
                                                    return s(!1)
                                                },
                                                children: "Home"
                                            })
                                        }), (0, t.jsx)("li", {
                                            className: "menu-item",
                                            children: (0, t.jsx)(f(), {
                                                href: "ROADMAP.pdf",
                                                children: (0, t.jsx)("a", {
                                                    onClick: function () {
                                                        return s(!1)
                                                    },
                                                    children: "Roadmap"
                                                })
                                            })
                                        }), (0, t.jsx)("li", {
                                            className: "menu-item",
                                            children: (0, t.jsx)("a", {
                                                href: "whitepaper.pdf",
                                                onClick: function () {
                                                    return s(!1)
                                                },
                                                children: "Whitepaper"
                                            })
                                        }), (0, t.jsx)("li", {
                                            className: "menu-item",
                                            children: (0, t.jsx)("a", {
                                                href: "https://github.com/SpyWolfNetwork/KYCs/blob/main/KYC_%20MetaTools_(No_contract).pdf",
                                                onClick: function () {
                                                    return s(!1)
                                                },
                                                children: "KYC"
                                            })
                                        }), (0, t.jsx)("li", {
                                            className: "menu-item",
                                            children: (0, t.jsx)("a", {
                                                href: "https://github.com/SpyWolfNetwork/Smart_Contract_Audits/blob/main/December_2022/MetaTools_0x7adc29cec54b124a7E8E1B1415DFf95DDD13B173.pdf",
                                                onClick: function () {
                                                    return s(!1)
                                                },
                                                children: "AUDIT"
                                            })
                                        }), (0, t.jsx)("li", {
                                            className: "menu-item",
                                            children: (0, t.jsx)("a", {
                                                href: "https://medium.com/@MetaToolsERC/meta-tools-erc-20-a9a249f053fc",
                                                onClick: function () {
                                                    return s(!1)
                                                },
                                                children: "MEDIUM"
                                            })
                                        }), (0, t.jsx)("li", {
                                            className: "menu-item",
                                            children: (0, t.jsx)("a", {
                                                onClick: function () {
                                                    s(!1), window.open("https://etherscan.io/address/0x7adc29cec54b124a7e8e1b1415dff95ddd13b173")
                                                },
                                                children: "Contract"
                                            })
                                        })]
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: "nav_footer ".concat(n ? "ready" : ""),
                                children: [(0, t.jsx)("div", {
                                    className: "nf_left"
                                }), (0, t.jsx)("div", {
                                    className: "nf_right",
                                    children: (0, t.jsx)("div", {
                                        className: "neoh_fn_social_list",
                                        children: (0, t.jsxs)("ul", {
                                            children: [(0, t.jsx)("li", {
                                                children: (0, t.jsx)("a", {
                                                    onClick: function () {
                                                        return window.open("https://t.me/OpenAIERC")
                                                    },
                                                    children: (0, t.jsx)("i", {
                                                        className: "fn-icon-twitter"
                                                    })
                                                })
                                            }), (0, t.jsx)("li", {
                                                children: (0, t.jsx)("a", {
                                                    onClick: function () {
                                                        return window.open("https://twitter.com/OpenAIERC")
                                                    },
                                                    children: (0, t.jsx)("i", {
                                                        className: "fn-icon-telegram"
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })]
                        }), (0, t.jsx)("header", {
                            className: "neoh_fn_header",
                            children: (0, t.jsx)("div", {
                                className: "container",
                                children: (0, t.jsxs)("div", {
                                    className: "header_in",
                                    children: [(0, t.jsx)("div", {
                                        className: "logo",
                                        children: (0, t.jsx)(f(), {
                                            href: "/",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("img", {
                                                    src: "img/logo.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "trigger",
                                        children: (0, t.jsxs)("div", {
                                            className: "trigger_in",
                                            onClick: function () {
                                                return s(!n)
                                            },
                                            children: [(0, t.jsx)("span", {
                                                className: "text",
                                                children: "Menu"
                                            }), (0, t.jsxs)("span", {
                                                className: "hamb",
                                                children: [(0, t.jsx)("span", {
                                                    className: "hamb_a"
                                                }), (0, t.jsx)("span", {
                                                    className: "hamb_b"
                                                }), (0, t.jsx)("span", {
                                                    className: "hamb_c"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                },
                v = function () {
                    return (0, t.jsx)(r.Fragment, {
                        children: (0, t.jsxs)("a", {
                            href: "#",
                            className: "neoh_fn_totop",
                            children: [(0, t.jsx)("span", {
                                className: "arrow",
                                children: (0, t.jsx)("img", {
                                    src: "svg/right-arr.svg",
                                    alt: "",
                                    className: "fn__svg"
                                })
                            }), (0, t.jsx)("span", {
                                className: "circle",
                                children: (0, t.jsx)("img", {
                                    src: "svg/circle.svg",
                                    alt: "",
                                    className: "fn__svg"
                                })
                            })]
                        })
                    })
                },
                p = function (e) {
                    var n = e.children,
                        i = e.pageName;
                    return (0, r.useEffect)((function () {
                        document.querySelectorAll(".fn_animated_text").forEach((function (e) {
                                var n = e.innerHTML.split(""),
                                    t = e.getAttribute("wait"),
                                    i = e.getAttribute("speed");
                                t || (t = 0), i || (i = 4), i /= 150, e.innerHTML = "<em>321...</em>", e.classList.add("ready"), s(9716), new Waypoint({
                                    element: e,
                                    handler: function () {
                                        e.classList.contains("stop") || (e.classList.add("stop"), setTimeout((function () {
                                            e.innerHTML = "", n.forEach((function (n, s) {
                                                var t = document.createElement("span");
                                                t.textContent = n, t.style.animationDelay = s * i + "s", e.append(t)
                                            }))
                                        }), t))
                                    },
                                    offset: "90%"
                                })
                            })),
                            function () {
                                if (document.querySelector(".neoh_fn_moving_blog")) {
                                    if (!document.querySelector(".neoh_fn_moving_box")) {
                                        var e = document.querySelector("body"),
                                            n = document.createElement("div");
                                        n.classList.add("neoh_fn_moving_box"), e.appendChild(n)
                                    }
                                    var s = document.querySelector(".neoh_fn_moving_box");
                                    document.querySelectorAll(".neoh_fn_moving_blog .item").forEach((function (e) {
                                        e.addEventListener("mouseenter", (function (n) {
                                            if (!e.classList.contains("active")) {
                                                e.classList.remove("active"), e.classList.add("active"), s.classList.add("active");
                                                var t = e.querySelector(".moving_img").getAttribute("src");
                                                s.style.backgroundImage = "url(".concat(t, ")"), s.style.left = n.clientX + 15 + "px", s.style.top = n.clientY + 15 + "px"
                                            }
                                        })), e.addEventListener("mouseleave", (function () {
                                            e.classList.remove("active"), s.classList.remove("active")
                                        })), e.addEventListener("mousemove", (function (e) {
                                            s.style.left = e.clientX + 15 + "px", s.style.top = e.clientY + 15 + "px"
                                        }))
                                    }))
                                }
                            }(),
                            function () {
                                for (var e = document.querySelectorAll("[data-bg-img]"), n = 0; n < e.length; n++) {
                                    var s = e[n];
                                    s.style.backgroundImage = "url(".concat(s.getAttribute("data-bg-img"), ")")
                                }
                            }(), document.querySelectorAll("img.fn__svg").forEach((function (e) {
                                var n = e.getAttribute("id"),
                                    s = e.getAttribute("class"),
                                    t = e.getAttribute("src");
                                fetch(t).then((function (e) {
                                    return e.text()
                                })).then((function (t) {
                                    var i = (new DOMParser).parseFromString(t, "text/html").querySelector("svg");
                                    "undefined" !== typeof n && i.setAttribute("id", n), "undefined" !== typeof s && i.setAttribute("class", s + " replaced-svg"), i.removeAttribute("xmlns:a"), e.parentNode && e.parentNode.replaceChild(i, e)
                                }))
                            })), window.addEventListener("scroll", d), window.addEventListener("scroll", m)
                    }), []), (0, t.jsxs)(r.Fragment, {
                        children: [(0, t.jsxs)(c(), {
                            children: [(0, t.jsx)("title", {
                                children: i
                            }), (0, t.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "180x180",
                                href: "img/apple-touch-icon.png"
                            }), (0, t.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "32x32",
                                href: "img/favicon-32x32.png"
                            }), (0, t.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                sizes: "16x16",
                                href: "img/favicon-16x16.png"
                            }), (0, t.jsx)("link", {
                                rel: "manifest",
                                href: "img/site.webmanifest"
                            })]
                        }), (0, t.jsx)(o, {}), (0, t.jsxs)("div", {
                            className: "neoh_fn_main",
                            "data-footer-sticky": "",
                            children: [(0, t.jsx)(x, {}), (0, t.jsx)("div", {
                                className: "neoh_fn_content",
                                children: n
                            }), (0, t.jsx)(h, {}), (0, t.jsx)(v, {})]
                        }), (0, t.jsx)("div", {
                            className: "neoh_fn_moving_box"
                        })]
                    })
                }
        }
    }
]);