(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [879], {
        8435: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/staking", function () {
                return n(8214)
            }])
        },
        8214: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return T
                }
            });
            var a = n(4051),
                i = n.n(a),
                s = n(5893),
                r = n(7294);

            function u(e, t, n, a, i, s, r) {
                try {
                    var u = e[s](r),
                        o = u.value
                } catch (p) {
                    return void n(p)
                }
                u.done ? t(o) : Promise.resolve(o).then(a, i)
            }

            function o(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (a, i) {
                        var s = e.apply(t, n);

                        function r(e) {
                            u(s, a, i, r, o, "next", e)
                        }

                        function o(e) {
                            u(s, a, i, r, o, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }
            var p = "0x154F9512E3195a1bb8E8110E21C02cFaf05FF2e9",
                l = function (e) {
                    var t = e.open,
                        n = e.close,
                        a = (e.img, e.title),
                        u = e.web3,
                        l = e.stakingContract,
                        c = e.tokenContract,
                        d = e.account,
                        y = (0, r.useState)(!1),
                        m = y[0],
                        f = y[1],
                        h = function () {
                            var e = o(i().mark((function e() {
                                var t;
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, c.methods.allowance(d.toLowerCase(), p.toLowerCase()).call();
                                        case 2:
                                            t = e.sent, f(!(t < "1000000000000000"));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        v = function () {
                            var e = o(i().mark((function e() {
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, c.methods.approve(p.toLowerCase(), "100000000000000000").send({
                                                from: d
                                            });
                                        case 2:
                                            h();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        w = function () {
                            var e = o(i().mark((function e() {
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, c.methods.balanceOf(d).call();
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        x = function () {
                            var e = o(i().mark((function e() {
                                var t;
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = document.querySelector(".deposit-input"), e.t0 = u.utils, e.next = 4, w();
                                        case 4:
                                            e.t1 = e.sent, t.value = e.t0.fromWei.call(e.t0, e.t1, "gwei");
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        k = function () {
                            var e = o(i().mark((function e() {
                                var t, n;
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = document.querySelector(".deposit-input"), e.next = 3, w();
                                        case 3:
                                            n = e.sent, u.utils.toWei(t.value, "gwei") <= n && l.methods.deposit(u.utils.toWei(t.value, "gwei") - 1).send({
                                                from: d
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, r.useEffect)((function () {
                        h()
                    }), []), (0, s.jsx)(r.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: "neoh_fn_modal product_modal ".concat(t ? "opened" : ""),
                            children: (0, s.jsxs)("div", {
                                className: "modal_in",
                                children: [(0, s.jsx)("div", {
                                    className: "modal_closer",
                                    children: (0, s.jsx)("a", {
                                        onClick: function () {
                                            return n()
                                        },
                                        children: (0, s.jsx)("img", {
                                            src: "svg/cancel.svg",
                                            alt: "",
                                            className: "fn__svg"
                                        })
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "modal_content",
                                    children: (0, s.jsxs)("div", {
                                        className: "neoh_fn_product_modal",
                                        children: [(0, s.jsx)("div", {
                                            className: "img_item",
                                            children: (0, s.jsx)("img", {
                                                src: "img/staking/stakingPic.png"
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "content_item",
                                            children: [(0, s.jsxs)("div", {
                                                className: "neoh_fn_title",
                                                "data-align": "left",
                                                children: [(0, s.jsx)("h3", {
                                                    className: "fn_title",
                                                    children: a
                                                }), (0, s.jsx)("div", {
                                                    className: "line",
                                                    children: (0, s.jsx)("span", {})
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "desc",
                                                children: (0, s.jsx)("p", {
                                                    children: "Enter the number of tokens you would like to stake. There are no withdraw penalties or time locks."
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: "staking-button-container",
                                                children: [(0, s.jsx)("input", {
                                                    className: "deposit-input"
                                                }), (0, s.jsxs)("div", {
                                                    className: "staking-function-buttons",
                                                    children: [m ? (0, s.jsx)("div", {
                                                        className: "staking-button",
                                                        onClick: k,
                                                        children: "Deposit"
                                                    }) : (0, s.jsx)("div", {
                                                        className: "staking-button",
                                                        onClick: v,
                                                        children: "Approve"
                                                    }), (0, s.jsx)("div", {
                                                        className: "staking-button",
                                                        onClick: x,
                                                        children: "Max"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                c = n(8689),
                d = n(905),
                y = n(7918),
                m = n.n(y),
                f = JSON.parse('[{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint8","name":"_fixedAPY","type":"uint8"},{"internalType":"uint256","name":"_durationInDays","type":"uint256"},{"internalType":"uint256","name":"_lockDurationInDays","type":"uint256"},{"internalType":"uint256","name":"_maxAmountStaked","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeHolder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockupPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endingPeriod","type":"uint256"}],"name":"StartStaking","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"stakeHolder","type":"address"}],"name":"amountStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fixedAPY","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockupDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockupPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"stakeHolder","type":"address"}],"name":"rewardOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"staked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawResidualBalance","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                h = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"changeMarketingWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxTxAmount","type":"uint256"}],"name":"changeMaxTxAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxWalletAmount","type":"uint256"}],"name":"changeMaxWalletAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxForLiquidity","type":"uint256"},{"internalType":"uint256","name":"_taxForMarketing","type":"uint256"}],"name":"changeTaxForLiquidityAndMarketing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxForLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxForMarketing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]');

            function v(e, t, n, a, i, s, r) {
                try {
                    var u = e[s](r),
                        o = u.value
                } catch (p) {
                    return void n(p)
                }
                u.done ? t(o) : Promise.resolve(o).then(a, i)
            }

            function w(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (a, i) {
                        var s = e.apply(t, n);

                        function r(e) {
                            v(s, a, i, r, u, "next", e)
                        }

                        function u(e) {
                            v(s, a, i, r, u, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }
            var x, k, b, T = function () {
                var e = (0, r.useState)(),
                    t = e[0],
                    n = e[1],
                    a = (0, r.useState)(null),
                    u = a[0],
                    o = a[1],
                    p = (0, r.useState)(null),
                    y = p[0],
                    v = p[1],
                    T = (0, r.useState)(50),
                    g = T[0],
                    j = T[1],
                    N = (0, r.useState)(0),
                    M = N[0],
                    _ = N[1],
                    C = (0, r.useState)(0),
                    S = C[0],
                    A = C[1],
                    O = (0, r.useState)(0),
                    P = O[0],
                    F = O[1],
                    E = (0, r.useState)(0),
                    D = E[0],
                    W = E[1],
                    q = (0, r.useState)(0),
                    L = q[0],
                    R = q[1],
                    I = (0, r.useState)(!1),
                    V = I[0],
                    Y = I[1],
                    H = function () {
                        var e = w(i().mark((function e() {
                            var t, a;
                            return i().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("undefined" === typeof window.ethereum) {
                                            e.next = 24;
                                            break
                                        }
                                        if (e.prev = 1, !window.ethereum) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 5, window.ethereum.request({
                                            method: "eth_requestAccounts"
                                        });
                                    case 5:
                                        return t = new(m())(window.ethereum), n(t), o(window.ethereum.networkVersion), window.ethereum.on("chainChanged", function () {
                                            var e = w(i().mark((function e(t) {
                                                return i().wrap((function (e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            o(t);
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function (t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()), e.next = 11, t.eth.getAccounts();
                                    case 11:
                                        a = e.sent, v(a[0]), window.ethereum.on("accountsChanged", (function (e) {
                                            e.length > 0 ? v(e[0]) : v(null)
                                        })), e.next = 17;
                                        break;
                                    case 16:
                                        console.log("No wallet installed");
                                    case 17:
                                        e.next = 22;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(1), console.log(e.t0 + "Error");
                                    case 22:
                                        e.next = 25;
                                        break;
                                    case 24:
                                        window.open("https://metamask.app.link/dapp/".concat(window.location.href));
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 19]
                            ])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Z = function () {
                        var e = w(i().mark((function e() {
                            return i().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, window.ethereum.request({
                                            method: "wallet_switchEthereumChain",
                                            params: [{
                                                chainId: "0x1"
                                            }]
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, r.useEffect)((function () {
                    y && 1 == u && function () {
                        x = new t.eth.Contract(f, "0x154F9512E3195a1bb8E8110E21C02cFaf05FF2e9"), k = new t.eth.Contract(f, "0x690C46531f777501989E253b89Df86C4451ED818"), b = new t.eth.Contract(h, "0x6a6aa13393b7d1100c00a57c76c39e8b6c835041");
                        var e = function () {
                            var e = w(i().mark((function e() {
                                var t;
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, x.methods.rewardOf(y).call();
                                        case 2:
                                            t = e.sent, R(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                        e();
                        var n = function () {
                            var e = w(i().mark((function e() {
                                var t;
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, x.methods.fixedAPY().call();
                                        case 2:
                                            t = e.sent, j(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                        n();
                        var a = function () {
                            var e = w(i().mark((function e() {
                                var t;
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, x.methods.amountStaked(y).call();
                                        case 2:
                                            t = e.sent, A(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                        a();
                        var s = function () {
                            var e = w(i().mark((function e() {
                                var t;
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, k.methods.amountStaked(y).call();
                                        case 2:
                                            t = e.sent, F(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                        s();
                        var r = function () {
                            var e = w(i().mark((function e() {
                                var t;
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, x.methods.totalDeposited().call();
                                        case 2:
                                            t = e.sent, W(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                        r();
                        var u = function () {
                            var e = w(i().mark((function e() {
                                var t;
                                return i().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, x.methods.stakingDuration().call();
                                        case 2:
                                            t = e.sent, _(t / 24 / 60 / 60);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                        u()
                    }()
                }), [y]);
                var J = function () {
                        var e = w(i().mark((function e() {
                            return i().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, x.methods.withdrawAll().send({
                                            from: y
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    X = function () {
                        var e = w(i().mark((function e() {
                            return i().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, k.methods.withdrawAll().send({
                                            from: y
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    B = function () {
                        var e = w(i().mark((function e() {
                            return i().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, x.methods.claimRewards().send({
                                            from: y
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, s.jsxs)(c.Z, {
                    pageName: "Staking",
                    children: [(0, s.jsx)(d.Z, {
                        pageName: "Staking"
                    }), (0, s.jsx)("div", {
                        className: "neoh_fn_contact_page",
                        children: (0, s.jsx)("div", {
                            className: "container",
                            children: (0, s.jsxs)("section", {
                                className: "staking-section",
                                children: [(0, s.jsx)("h3", {
                                    children: "50% APY Staking"
                                }), (0, s.jsx)("p", {
                                    className: "staking-description",
                                    children: "Stake your OpenAi tokens with fixed high Apy and without restriction. No time lock or withdraw fees, come and go as you please or stay and reap the rewards."
                                }), (0, s.jsxs)("div", {
                                    className: "staking-dapp-wrapper",
                                    children: [(0, s.jsxs)("div", {
                                        className: "staked-info-wrapper",
                                        children: [(0, s.jsx)("div", {
                                            className: "staked-token-title",
                                            children: "APY"
                                        }), (0, s.jsxs)("div", {
                                            className: "staked-token-data",
                                            children: [g, " %"]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "staked-info-wrapper",
                                        children: [(0, s.jsx)("div", {
                                            className: "staked-token-title",
                                            children: "Pool Duration"
                                        }), (0, s.jsxs)("div", {
                                            className: "staked-token-data",
                                            children: [M, " Days"]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "staked-info-wrapper",
                                        children: [(0, s.jsx)("div", {
                                            className: "staked-token-title",
                                            children: "Total Staked Tokens"
                                        }), (0, s.jsx)("div", {
                                            className: "staked-token-data",
                                            children: (D / Math.pow(10, 9)).toFixed(3)
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "staked-info-wrapper",
                                        children: [(0, s.jsx)("div", {
                                            className: "staked-token-title",
                                            children: "Staked Tokens"
                                        }), (0, s.jsx)("div", {
                                            className: "staked-token-data",
                                            children: (S / Math.pow(10, 9)).toFixed(3)
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "staked-info-wrapper",
                                        children: [(0, s.jsx)("div", {
                                            className: "staked-token-title",
                                            children: "Claimable Tokens"
                                        }), (0, s.jsx)("div", {
                                            className: "staked-token-data",
                                            children: L / Math.pow(10, 9)
                                        })]
                                    }), y ? (0, s.jsx)(s.Fragment, {
                                        children: 1 != u ? (0, s.jsx)("div", {
                                            className: "staking-button-container",
                                            children: (0, s.jsx)("div", {
                                                className: "staking-button",
                                                onClick: Z,
                                                children: "Wrong Network"
                                            })
                                        }) : (0, s.jsxs)(s.Fragment, {
                                            children: [(0, s.jsx)("div", {
                                                className: "staking-button-container",
                                                children: (0, s.jsxs)("div", {
                                                    className: "staking-function-buttons",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "staking-button deposit-button",
                                                        onClick: function () {
                                                            return Y(!0)
                                                        },
                                                        children: "Stake"
                                                    }), (0, s.jsx)("div", {
                                                        className: "staking-button deposit-button",
                                                        onClick: J,
                                                        children: "Withdraw"
                                                    }), (0, s.jsx)("div", {
                                                        className: "staking-button deposit-button",
                                                        onClick: B,
                                                        children: "Claim"
                                                    })]
                                                })
                                            }), (0, s.jsxs)("div", {
                                                style: {
                                                    paddingTop: "40px"
                                                },
                                                className: "staking-section",
                                                children: [(0, s.jsx)("h3", {
                                                    children: "Old Staking Contract"
                                                }), (0, s.jsx)("p", {
                                                    className: "staking-description",
                                                    children: "Please withdraw all tokens from the old staking contract."
                                                }), (0, s.jsx)("div", {
                                                    className: "staking-dapp-wrapper",
                                                    children: (0, s.jsxs)("div", {
                                                        className: "staked-info-wrapper",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "staked-token-title",
                                                            children: "Staked Tokens"
                                                        }), (0, s.jsx)("div", {
                                                            className: "staked-token-data",
                                                            children: (P / Math.pow(10, 9)).toFixed(3)
                                                        })]
                                                    })
                                                }), (0, s.jsx)("div", {
                                                    className: "staking-button-container",
                                                    children: (0, s.jsx)("div", {
                                                        className: "staking-function-buttons",
                                                        children: (0, s.jsx)("div", {
                                                            className: "staking-button deposit-button",
                                                            onClick: X,
                                                            children: "Withdraw"
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    }) : (0, s.jsx)("div", {
                                        className: "staking-button-container",
                                        children: (0, s.jsx)("div", {
                                            className: "staking-button",
                                            onClick: H,
                                            children: "Connect Wallet"
                                        })
                                    })]
                                }), V && (0, s.jsx)(l, {
                                    open: !0,
                                    close: function () {
                                        return Y(!1)
                                    },
                                    title: "Deposit",
                                    web3: t,
                                    stakingContract: x,
                                    tokenContract: b,
                                    account: y
                                })]
                            })
                        })
                    })]
                })
            }
        },
        905: function (e, t, n) {
            "use strict";
            var a = n(5893),
                i = n(1664),
                s = n.n(i);
            t.Z = function (e) {
                var t = e.pageName;
                e.img;
                return (0, a.jsxs)("div", {
                    className: "neoh_fn_pagetitle",
                    children: [(0, a.jsxs)("div", {
                        className: "bg_overlay",
                        children: [(0, a.jsx)("div", {
                            className: "bg_color"
                        }), (0, a.jsx)("div", {
                            className: "bg_image",
                            "data-bg-img": "img/hero/bg2.png"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "pt_content",
                        children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsx)("h3", {
                                className: "fn_title fn_animated_text",
                                "data-wait": 1e3,
                                "data-speed": 8,
                                children: t
                            }), (0, a.jsxs)("p", {
                                className: "fn_desc",
                                children: [(0, a.jsx)(s(), {
                                    href: "/",
                                    children: (0, a.jsx)("a", {
                                        children: "Home"
                                    })
                                }), (0, a.jsx)("span", {
                                    className: "separator",
                                    children: "/"
                                }), (0, a.jsx)("span", {
                                    className: "current",
                                    children: t
                                })]
                            })]
                        })
                    })]
                })
            }
        }
    },
    function (e) {
        e.O(0, [543, 904, 689, 774, 888, 179], (function () {
            return t = 8435, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);