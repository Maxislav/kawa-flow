(() => {
    "use strict";
    var e = {
        673: (e, n) => {
            Object.defineProperty(n, "__esModule", {value: !0}), n.Greeter = class {
                constructor(e) {
                    this.name = e
                }

                greet() {
                    console.log(`Hssi, ${this.name}!`)
                }
            }
        }, 848: (e, n, t) => {
            t.d(n, {Z: () => c});
            var r = t(844), o = t.n(r), a = t(518), i = t.n(a)()(o());
            i.push([e.id, "body {\n  background: black;\n  height: 100%;\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n.main-image {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n", "", {
                version: 3,
                sources: ["webpack://./style/main.less"],
                names: [],
                mappings: "AAAA;EACE,iBAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;AACF;AACA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;AACF",
                sourcesContent: ["body{\n  background: black;\n  height: 100%;\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n.main-image{\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n"],
                sourceRoot: ""
            }]);
            const c = i
        }, 518: e => {
            e.exports = function (e) {
                var n = [];
                return n.toString = function () {
                    return this.map((function (n) {
                        var t = e(n);
                        return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t
                    })).join("")
                }, n.i = function (e, t, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var o = {};
                    if (r) for (var a = 0; a < this.length; a++) {
                        var i = this[a][0];
                        null != i && (o[i] = !0)
                    }
                    for (var c = 0; c < e.length; c++) {
                        var s = [].concat(e[c]);
                        r && o[s[0]] || (t && (s[2] ? s[2] = "".concat(t, " and ").concat(s[2]) : s[2] = t), n.push(s))
                    }
                }, n
            }
        }, 844: e => {
            function n(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            e.exports = function (e) {
                var t, r, o = (r = 4, function (e) {
                    if (Array.isArray(e)) return e
                }(t = e) || function (e, n) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [], r = !0, o = !1, a = void 0;
                        try {
                            for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (t.push(i.value), !n || t.length !== n); r = !0) ;
                        } catch (e) {
                            o = !0, a = e
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return t
                    }
                }(t, r) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return n(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                    }
                }(t, r) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), a = o[1], i = o[3];
                if ("function" == typeof btoa) {
                    var c = btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                        s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),
                        u = "/*# ".concat(s, " */"), l = i.sources.map((function (e) {
                            return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */")
                        }));
                    return [a].concat(l).concat([u]).join("\n")
                }
                return [a].join("\n")
            }
        }, 106: (e, n, t) => {
            var r, o = function () {
                var e = {};
                return function (n) {
                    if (void 0 === e[n]) {
                        var t = document.querySelector(n);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                            t = t.contentDocument.head
                        } catch (e) {
                            t = null
                        }
                        e[n] = t
                    }
                    return e[n]
                }
            }(), a = [];

            function i(e) {
                for (var n = -1, t = 0; t < a.length; t++) if (a[t].identifier === e) {
                    n = t;
                    break
                }
                return n
            }

            function c(e, n) {
                for (var t = {}, r = [], o = 0; o < e.length; o++) {
                    var c = e[o], s = n.base ? c[0] + n.base : c[0], u = t[s] || 0, l = "".concat(s, " ").concat(u);
                    t[s] = u + 1;
                    var f = i(l), d = {css: c[1], media: c[2], sourceMap: c[3]};
                    -1 !== f ? (a[f].references++, a[f].updater(d)) : a.push({
                        identifier: l,
                        updater: v(d, n),
                        references: 1
                    }), r.push(l)
                }
                return r
            }

            function s(e) {
                var n = document.createElement("style"), r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var a = t.nc;
                    a && (r.nonce = a)
                }
                if (Object.keys(r).forEach((function (e) {
                    n.setAttribute(e, r[e])
                })), "function" == typeof e.insert) e.insert(n); else {
                    var i = o(e.insert || "head");
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    i.appendChild(n)
                }
                return n
            }

            var u, l = (u = [], function (e, n) {
                return u[e] = n, u.filter(Boolean).join("\n")
            });

            function f(e, n, t, r) {
                var o = t ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = l(n, o); else {
                    var a = document.createTextNode(o), i = e.childNodes;
                    i[n] && e.removeChild(i[n]), i.length ? e.insertBefore(a, i[n]) : e.appendChild(a)
                }
            }

            function d(e, n, t) {
                var r = t.css, o = t.media, a = t.sourceMap;
                if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = r; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r))
                }
            }

            var p = null, A = 0;

            function v(e, n) {
                var t, r, o;
                if (n.singleton) {
                    var a = A++;
                    t = p || (p = s(n)), r = f.bind(null, t, a, !1), o = f.bind(null, t, a, !0)
                } else t = s(n), r = d.bind(null, t, n), o = function () {
                    !function (e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e)
                    }(t)
                };
                return r(e), function (n) {
                    if (n) {
                        if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                        r(e = n)
                    } else o()
                }
            }

            e.exports = function (e, n) {
                (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
                var t = c(e = e || [], n);
                return function (e) {
                    if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                        for (var r = 0; r < t.length; r++) {
                            var o = i(t[r]);
                            a[o].references--
                        }
                        for (var s = c(e, n), u = 0; u < t.length; u++) {
                            var l = i(t[u]);
                            0 === a[l].references && (a[l].updater(), a.splice(l, 1))
                        }
                        t = s
                    }
                }
            }
        }, 968: (e, n, t) => {
            t.r(n), t.d(n, {default: () => i});
            var r = t(106), o = t.n(r), a = t(848);
            o()(a.Z, {insert: "head", singleton: !1});
            const i = a.Z.locals || {}
        }
    }, n = {};

    function t(r) {
        var o = n[r];
        if (void 0 !== o) return o.exports;
        var a = n[r] = {id: r, exports: {}};
        return e[r](a, a.exports, t), a.exports
    }

    t.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, {a: n}), n
    }, t.d = (e, n) => {
        for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: n[r]})
    }, t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), t.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t(968), new (t(673).Greeter)("Juri").greet()
})();
//# sourceMappingURL=main.bundle.js.map
