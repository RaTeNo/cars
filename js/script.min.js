! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(g, e) {
    "use strict";

    function v(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }

    function m(e) {
        return null != e && e === e.window
    }
    var t = [],
        n = Object.getPrototypeOf,
        a = t.slice,
        y = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        l = t.push,
        o = t.indexOf,
        i = {},
        r = i.toString,
        w = i.hasOwnProperty,
        s = w.toString,
        d = s.call(Object),
        b = {},
        k = g.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function x(e, t, n) {
        var i, o, r = (n = n || k).createElement("script");
        if (r.text = e, t)
            for (i in c)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }

    function f(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
    }
    var u = "3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
        T = function(e, t) {
            return new T.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = f(e);
        return !v(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    T.fn = T.prototype = {
        jquery: u,
        constructor: T,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = T.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function(e) {
            return T.each(this, e)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(T.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(T.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, T.extend = T.fn.extend = function() {
        var e, t, n, i, o, r = arguments[0] || {},
            s = 1,
            a = arguments.length,
            l = !1;
        for ("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" == typeof r || v(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = e[t], "__proto__" !== t && r !== n && (l && n && (T.isPlainObject(n) || (i = Array.isArray(n))) ? (o = r[t], o = i && !Array.isArray(o) ? [] : i || T.isPlainObject(o) ? o : {}, i = !1, r[t] = T.extend(l, o, n)) : void 0 !== n && (r[t] = n));
        return r
    }, T.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== r.call(e) || (e = n(e)) && ("function" != typeof(e = w.call(e, "constructor") && e.constructor) || s.call(e) !== d))
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            x(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (p(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (p(Object(e)) ? T.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0,
                s = [];
            if (p(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return y(s)
        },
        guid: 1,
        support: b
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        function u(e, t) {
            return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }

        function p(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }

        function i() {
            x()
        }
        var e, h, b, r, o, f, g, v, k, l, d, x, T, s, S, m, a, c, y, C = "sizzle" + +new Date,
            w = n.document,
            $ = 0,
            A = 0,
            E = le(),
            D = le(),
            _ = le(),
            L = le(),
            N = function(e, t) {
                return e === t && (d = !0), 0
            },
            O = {}.hasOwnProperty,
            t = [],
            M = t.pop,
            H = t.push,
            P = t.push,
            j = t.slice,
            I = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + q + "*(" + R + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + q + "*\\]",
            B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(q + "+", "g"),
            U = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
            Y = new RegExp("^" + q + "*," + q + "*"),
            X = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            V = new RegExp(q + "|>"),
            Q = new RegExp(B),
            G = new RegExp("^" + R + "$"),
            K = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /HTML$/i,
            Z = /^(?:input|select|textarea|button)$/i,
            ee = /^h\d$/i,
            te = /^[^{]+\{\s*\[native \w/,
            ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ie = /[+~]/,
            oe = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"),
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            se = ye(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(t = j.call(w.childNodes), w.childNodes), t[w.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function(e, t) {
                    H.apply(e, j.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, n, i) {
            var o, r, s, a, l, d, c = t && t.ownerDocument,
                u = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== u && 9 !== u && 11 !== u) return n;
            if (!i && (x(t), t = t || T, S)) {
                if (11 !== u && (a = ne.exec(e)))
                    if (d = a[1]) {
                        if (9 === u) {
                            if (!(r = t.getElementById(d))) return n;
                            if (r.id === d) return n.push(r), n
                        } else if (c && (r = c.getElementById(d)) && y(t, r) && r.id === d) return n.push(r), n
                    } else {
                        if (a[2]) return P.apply(n, t.getElementsByTagName(e)), n;
                        if ((d = a[3]) && h.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(d)), n
                    }
                if (h.qsa && !L[e + " "] && (!m || !m.test(e)) && (1 !== u || "object" !== t.nodeName.toLowerCase())) {
                    if (d = e, c = t, 1 === u && (V.test(e) || X.test(e))) {
                        for ((c = ie.test(e) && ge(t.parentNode) || t) === t && h.scope || ((s = t.getAttribute("id")) ? s = s.replace(re, p) : t.setAttribute("id", s = C)), o = (l = f(e)).length; o--;) l[o] = (s ? "#" + s : ":scope") + " " + me(l[o]);
                        d = l.join(",")
                    }
                    try {
                        return P.apply(n, c.querySelectorAll(d)), n
                    } catch (t) {
                        L(e, !0)
                    } finally {
                        s === C && t.removeAttribute("id")
                    }
                }
            }
            return v(e.replace(U, "$1"), t, n, i)
        }

        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function de(e) {
            return e[C] = !0, e
        }

        function ce(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function pe(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function fe(s) {
            return de(function(r) {
                return r = +r, de(function(e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = ae.support = {}, o = ae.isXML = function(e) {
                var t = e && e.namespaceURI,
                    e = e && (e.ownerDocument || e).documentElement;
                return !J.test(t || e && e.nodeName || "HTML")
            }, x = ae.setDocument = function(e) {
                var t, e = e ? e.ownerDocument || e : w;
                return e != T && 9 === e.nodeType && e.documentElement && (s = (T = e).documentElement, S = !o(T), w != T && (t = T.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)), h.scope = ce(function(e) {
                    return s.appendChild(e).appendChild(T.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), h.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = ce(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = te.test(T.getElementsByClassName), h.getById = ce(function(e) {
                    return s.appendChild(e).id = C, !T.getElementsByName || !T.getElementsByName(C).length
                }), h.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(oe, u);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        e = t.getElementById(e);
                        return e ? [e] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var t = e.replace(oe, u);
                    return function(e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), b.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, b.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
                }, a = [], m = [], (h.qsa = te.test(T.querySelectorAll)) && (ce(function(e) {
                    var t;
                    s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + q + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + q + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + q + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = te.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function(e) {
                    h.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", B)
                }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = te.test(s.compareDocumentPosition), y = t || te.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, N = t ? function(e, t) {
                    return e === t ? (d = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == w && y(w, e) ? -1 : t == T || t.ownerDocument == w && y(w, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & n ? -1 : 1);
                    var n
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e == T ? -1 : t == T ? 1 : o ? -1 : r ? 1 : l ? I(l, e) - I(l, t) : 0;
                    if (o === r) return pe(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? pe(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
                }), T
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if (x(e), h.matchesSelector && S && !L[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
                    var n = c.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    L(t, !0)
                }
                return 0 < ae(t, T, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) != T && x(e), y(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) != T && x(e);
                var n = b.attrHandle[t.toLowerCase()],
                    n = n && O.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                return void 0 !== n ? n : h.attributes || !S ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(re, p)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (d = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(N), d) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, r = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (b = ae.selectors = {
                cacheLength: 50,
                createPseudo: de,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(oe, u), e[3] = (e[3] || e[4] || e[5] || "").replace(oe, u), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(oe, u).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && E(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(e) {
                            e = ae.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(F, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(f, e, t, g, v) {
                        var m = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            w = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, o, r, s, a, l, d = m != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                u = w && e.nodeName.toLowerCase(),
                                p = !n && !w,
                                h = !1;
                            if (c) {
                                if (m) {
                                    for (; d;) {
                                        for (s = e; s = s[d];)
                                            if (w ? s.nodeName.toLowerCase() === u : 1 === s.nodeType) return !1;
                                        l = d = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (h = (a = (i = (o = (r = (s = c)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === $ && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[d] || (h = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++h && s === e) {
                                            o[f] = [$, a, h];
                                            break
                                        }
                                } else if (!1 === (h = p ? a = (i = (o = (r = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === $ && i[1] : h))
                                    for (;
                                        (s = ++a && s && s[d] || (h = a = 0) || l.pop()) && ((w ? s.nodeName.toLowerCase() !== u : 1 !== s.nodeType) || !++h || (p && ((o = (r = s[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] = [$, h]), s !== e)););
                                return (h -= v) === g || h % g == 0 && 0 <= h / g
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return s[C] ? s(r) : 1 < s.length ? (t = [e, e, "", r], b.setFilters.hasOwnProperty(e.toLowerCase()) ? de(function(e, t) {
                            for (var n, i = s(e, r), o = i.length; o--;) e[n = I(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: de(function(e) {
                        var i = [],
                            o = [],
                            a = g(e.replace(U, "$1"));
                        return a[C] ? de(function(e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: de(function(t) {
                        return function(e) {
                            return 0 < ae(t, e).length
                        }
                    }),
                    contains: de(function(t) {
                        return t = t.replace(oe, u),
                            function(e) {
                                return -1 < (e.textContent || r(e)).indexOf(t)
                            }
                    }),
                    lang: de(function(n) {
                        return G.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(oe, u).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ee.test(e.nodeName)
                    },
                    input: function(e) {
                        return Z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: fe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: fe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: fe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function ve() {}

        function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(s, e, t) {
            var a = e.dir,
                l = e.next,
                d = l || a,
                c = t && "parentNode" === d,
                u = A++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || c) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, o, r = [$, u];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || c) && s(e, t, n)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || c)
                            if (i = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e;
                            else {
                                if ((o = i[d]) && o[0] === $ && o[1] === u) return r[2] = o[2];
                                if ((i[d] = r)[2] = s(e, t, n)) return !0
                            }
                return !1
            }
        }

        function we(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function be(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), d && t.push(a)));
            return s
        }

        function ke(e) {
            for (var i, t, n, o = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], a = r ? 1 : 0, l = ye(function(e) {
                    return e === i
                }, s, !0), d = ye(function(e) {
                    return -1 < I(i, e)
                }, s, !0), c = [function(e, t, n) {
                    n = !r && (n || t !== k) || ((i = t).nodeType ? l : d)(e, t, n);
                    return i = null, n
                }]; a < o; a++)
                if (t = b.relative[e[a].type]) c = [ye(we(c), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[C]) {
                        for (n = ++a; n < o && !b.relative[e[n].type]; n++);
                        return function e(h, f, g, v, m, t) {
                            return v && !v[C] && (v = e(v)), m && !m[C] && (m = e(m, t)), de(function(e, t, n, i) {
                                var o, r, s, a = [],
                                    l = [],
                                    d = t.length,
                                    c = e || function(e, t, n) {
                                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                                        return n
                                    }(f || "*", n.nodeType ? [n] : n, []),
                                    u = !h || !e && f ? c : be(c, a, h, n, i),
                                    p = g ? m || (e ? h : d || v) ? [] : t : u;
                                if (g && g(u, p, n, i), v)
                                    for (o = be(p, l), v(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(u[l[r]] = s));
                                if (e) {
                                    if (m || h) {
                                        if (m) {
                                            for (o = [], r = p.length; r--;)(s = p[r]) && o.push(u[r] = s);
                                            m(null, p = [], o, i)
                                        }
                                        for (r = p.length; r--;)(s = p[r]) && -1 < (o = m ? I(e, s) : a[r]) && (e[o] = !(t[o] = s))
                                    }
                                } else p = be(p === t ? p.splice(d, p.length) : p), m ? m(null, t, p, i) : P.apply(t, p)
                            })
                        }(1 < a && we(c), 1 < a && me(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(U, "$1"), t, a < n && ke(e.slice(a, n)), n < o && ke(e = e.slice(n)), n < o && me(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return ve.prototype = b.filters = b.pseudos, b.setFilters = new ve, f = ae.tokenize = function(e, t) {
            var n, i, o, r, s, a, l, d = D[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (s = e, a = [], l = b.preFilter; s;) {
                for (r in n && !(i = Y.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = X.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(U, " ")
                    }), s = s.slice(n.length)), b.filter) !(i = K[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : D(e, a).slice(0)
        }, g = ae.compile = function(e, t) {
            var n, v, m, y, w, i, o = [],
                r = [],
                s = _[e + " "];
            if (!s) {
                for (n = (t = t || f(e)).length; n--;)((s = ke(t[n]))[C] ? o : r).push(s);
                (s = _(e, (y = 0 < (m = o).length, w = 0 < (v = r).length, i = function(e, t, n, i, o) {
                    var r, s, a, l = 0,
                        d = "0",
                        c = e && [],
                        u = [],
                        p = k,
                        h = e || w && b.find.TAG("*", o),
                        f = $ += null == p ? 1 : Math.random() || .1,
                        g = h.length;
                    for (o && (k = t == T || t || o); d !== g && null != (r = h[d]); d++) {
                        if (w && r) {
                            for (s = 0, t || r.ownerDocument == T || (x(r), n = !S); a = v[s++];)
                                if (a(r, t || T, n)) {
                                    i.push(r);
                                    break
                                }
                            o && ($ = f)
                        }
                        y && ((r = !a && r) && l--, e && c.push(r))
                    }
                    if (l += d, y && d !== l) {
                        for (s = 0; a = m[s++];) a(c, u, t, n);
                        if (e) {
                            if (0 < l)
                                for (; d--;) c[d] || u[d] || (u[d] = M.call(i));
                            u = be(u)
                        }
                        P.apply(i, u), o && !e && 0 < u.length && 1 < l + m.length && ae.uniqueSort(i)
                    }
                    return o && ($ = f, k = p), c
                }, y ? de(i) : i))).selector = e
            }
            return s
        }, v = ae.select = function(e, t, n, i) {
            var o, r, s, a, l, d = "function" == typeof e && e,
                c = !i && f(e = d.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && S && b.relative[r[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(oe, u), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = K.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !b.relative[a = s.type]);)
                    if ((l = b.find[a]) && (i = l(s.matches[0].replace(oe, u), ie.test(r[0].type) && ge(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && me(r))) return P.apply(n, i), n;
                        break
                    }
            }
            return (d || g(e, c))(i, t, !S, n, !t || ie.test(e) && ge(t.parentNode) || t), n
        }, h.sortStable = C.split("").sort(N).join("") === C, h.detectDuplicates = !!d, x(), h.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(z, function(e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), ae
    }(g);
    T.find = h, T.expr = h.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = h.uniqueSort, T.text = h.getText, T.isXMLDoc = h.isXML, T.contains = h.contains, T.escapeSelector = h.escape;

    function S(e, t, n) {
        for (var i = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && T(e).is(n)) break;
                i.push(e)
            }
        return i
    }

    function C(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var $ = T.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, i) {
        return v(n) ? T.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? T.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? T.grep(e, function(e) {
            return -1 < o.call(n, e) !== i
        }) : T.filter(n, e, i)
    }
    T.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, T.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (T.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, o[t], n);
            return 1 < i ? T.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && $.test(e) ? T(e) : e || [], !1).length
        }
    });
    var _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
        if (!e) return this;
        if (n = n || L, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : _.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), E.test(i[1]) && T.isPlainObject(t))
                for (var i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (e = k.getElementById(i[2])) && (this[0] = e, this.length = 1), this
    }).prototype = T.fn;
    var L = T(k),
        N = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function M(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && T(e);
            if (!$.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? T.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(T(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), T.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return M(e, "nextSibling")
        },
        prev: function(e) {
            return M(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
        }
    }, function(i, o) {
        T.fn[i] = function(e, t) {
            var n = T.map(this, o, e);
            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (O[i] || T.uniqueSort(n), N.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function j(e) {
        throw e
    }

    function I(e, t, n, i) {
        var o;
        try {
            e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    T.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, T.each(e.match(H) || [], function(e, t) {
            n[t] = !0
        }), n) : T.extend({}, i);

        function o() {
            for (a = a || i.once, s = r = !0; d.length; c = -1)
                for (t = d.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length, t = !1);
            i.memory || (t = !1), r = !1, a && (l = t ? [] : "")
        }
        var r, t, s, a, l = [],
            d = [],
            c = -1,
            u = {
                add: function() {
                    return l && (t && !r && (c = l.length - 1, d.push(t)), function n(e) {
                        T.each(e, function(e, t) {
                            v(t) ? i.unique && u.has(t) || l.push(t) : t && t.length && "string" !== f(t) && n(t)
                        })
                    }(arguments), t && !r && o()), this
                },
                remove: function() {
                    return T.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = T.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < T.inArray(e, l) : 0 < l.length
                },
                empty: function() {
                    return l = l && [], this
                },
                disable: function() {
                    return a = d = [], l = t = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return a = d = [], t || r || (l = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], d.push(t), r || o()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return u
    }, T.extend({
        Deferred: function(e) {
            var r = [
                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return T.Deferred(function(i) {
                            T.each(r, function(e, t) {
                                var n = v(o[t[4]]) && o[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function d(o, r, s, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < l)) {
                                        if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? a ? t.call(e, d(l, r, P, a), d(l, r, j, a)) : (l++, t.call(e, d(l, r, P, a), d(l, r, j, a), d(l, r, P, r.notifyWith))) : (s !== P && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== j && (n = void 0, i = [e]), r.rejectWith(n, i))
                                        }
                                    };
                                o ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()), g.setTimeout(t))
                            }
                        }
                        return T.Deferred(function(e) {
                            r[0][3].add(d(0, e, v(i) ? i : P, e.notifyWith)), r[1][3].add(d(0, e, v(t) ? t : P)), r[2][3].add(d(0, e, v(n) ? n : j))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? T.extend(e, s) : s
                    }
                },
                a = {};
            return T.each(r, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(o, r)
                }
            }
            var n = arguments.length,
                i = n,
                o = Array(i),
                r = a.call(arguments),
                s = T.Deferred();
            if (n <= 1 && (I(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || v(r[i] && r[i].then))) return s.then();
            for (; i--;) I(r[i], t(i), s.reject);
            return s.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(e, t) {
        g.console && g.console.warn && e && z.test(e.name) && g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, T.readyException = function(e) {
        g.setTimeout(function() {
            throw e
        })
    };
    var q = T.Deferred();

    function R() {
        k.removeEventListener("DOMContentLoaded", R), g.removeEventListener("load", R), T.ready()
    }
    T.fn.ready = function(e) {
        return q.then(e).catch(function(e) {
            T.readyException(e)
        }), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || q.resolveWith(k, [T])
        }
    }), T.ready.then = q.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? g.setTimeout(T.ready) : (k.addEventListener("DOMContentLoaded", R), g.addEventListener("load", R));

    function W(e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            d = null == n;
        if ("object" === f(n))
            for (a in o = !0, n) W(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0, v(i) || (s = !0), t = d ? s ? (t.call(e, i), null) : (d = t, function(e, t, n) {
                return d.call(T(e), n)
            }) : t))
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : d ? t.call(e) : l ? t(e[0], n) : r
    }
    var B = /^-ms-/,
        F = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function Y(e) {
        return e.replace(B, "ms-").replace(F, U)
    }

    function X(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function V() {
        this.expando = T.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = n;
            else
                for (i in t) o[Y(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(H) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !T.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !T.isEmptyObject(e)
        }
    };
    var Q = new V,
        G = new V,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    T.extend({
        hasData: function(e) {
            return G.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), T.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : W(this, function(e) {
                var t;
                return r && void 0 === e ? void 0 !== (t = G.get(r, n)) || void 0 !== (t = Z(r, n)) ? t : void 0 : void this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = G.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = Y(i.slice(5)), Z(r, i, o[i]));
                Q.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), T.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return i = Q.get(e, t = (t || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = Q.access(e, t, T.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = T._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                T.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), T.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(s, [s])
            }
            var i, o = 1,
                r = T.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = Q.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = k.documentElement,
        oe = function(e) {
            return T.contains(e.ownerDocument, e)
        },
        re = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    });

    function se(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === T.css(e, "display")
    }
    var ae = {};

    function le(e, t) {
        for (var n, i, o, r, s, a, l = [], d = 0, c = e.length; d < c; d++)(i = e[d]).style && (n = i.style.display, t ? ("none" === n && (l[d] = Q.get(i, "display") || null, l[d] || (i.style.display = "")), "" === i.style.display && se(i) && (l[d] = (a = r = o = void 0, r = i.ownerDocument, s = i.nodeName, (a = ae[s]) || (o = r.body.appendChild(r.createElement(s)), a = T.css(o, "display"), o.parentNode.removeChild(o), ae[s] = a = "none" === a ? "block" : a)))) : "none" !== n && (l[d] = "none", Q.set(i, "display", n)));
        for (d = 0; d < c; d++) null != l[d] && (e[d].style.display = l[d]);
        return e
    }
    T.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var de = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i,
        u = k.createDocumentFragment().appendChild(k.createElement("div"));
    (h = k.createElement("input")).setAttribute("type", "radio"), h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), u.appendChild(h), b.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, u.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!u.cloneNode(!0).lastChild.defaultValue, u.innerHTML = "<option></option>", b.option = !!u.lastChild;
    var pe = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function he(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && A(e, t) ? T.merge([e], n) : n
    }

    function fe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td, b.option || (pe.optgroup = pe.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ge = /<|&#?\w+;/;

    function ve(e, t, n, i, o) {
        for (var r, s, a, l, d, c = t.createDocumentFragment(), u = [], p = 0, h = e.length; p < h; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === f(r)) T.merge(u, r.nodeType ? [r] : r);
                else if (ge.test(r)) {
            for (s = s || c.appendChild(t.createElement("div")), a = (ce.exec(r) || ["", ""])[1].toLowerCase(), a = pe[a] || pe._default, s.innerHTML = a[1] + T.htmlPrefilter(r) + a[2], d = a[0]; d--;) s = s.lastChild;
            T.merge(u, s.childNodes), (s = c.firstChild).textContent = ""
        } else u.push(t.createTextNode(r));
        for (c.textContent = "", p = 0; r = u[p++];)
            if (i && -1 < T.inArray(r, i)) o && o.push(r);
            else if (l = oe(r), s = he(c.appendChild(r), "script"), l && fe(s), n)
            for (d = 0; r = s[d++];) ue.test(r.type || "") && n.push(r);
        return c
    }
    var me = /^([^.]*)(?:\.(.+)|)/;

    function ye() {
        return !0
    }

    function we() {
        return !1
    }

    function be(e, t) {
        return e === function() {
            try {
                return k.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = we;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return T().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = T.guid++)), e.each(function() {
            T.event.add(this, t, o, i, n)
        })
    }

    function xe(e, o, r) {
        r ? (Q.set(e, o, !1), T.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = Q.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (i.length)(T.event.special[o] || {}).delegateType && e.stopPropagation();
                    else if (i = a.call(arguments), Q.set(this, o, i), t = r(this, o), this[o](), i !== (n = Q.get(this, o)) || t ? Q.set(this, o, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else i.length && (Q.set(this, o, {
                    value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, o) && T.event.add(e, o, ye)
    }
    T.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, d, c, u, p, h, f = Q.get(t);
            if (X(t))
                for (n.handler && (n = (r = n).handler, o = r.selector), o && T.find.matchesSelector(ie, o), n.guid || (n.guid = T.guid++), (a = f.events) || (a = f.events = Object.create(null)), (s = f.handle) || (s = f.handle = function(e) {
                        return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(H) || [""]).length; l--;) u = h = (d = me.exec(e[l]) || [])[1], p = (d[2] || "").split(".").sort(), u && (c = T.event.special[u] || {}, u = (o ? c.delegateType : c.bindType) || u, c = T.event.special[u] || {}, d = T.extend({
                    type: u,
                    origType: h,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && T.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (h = a[u]) || ((h = a[u] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(u, s)), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), T.event.global[u] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, d, c, u, p, h, f, g, v = Q.hasData(e) && Q.get(e);
            if (v && (l = v.events)) {
                for (d = (t = (t || "").match(H) || [""]).length; d--;)
                    if (h = g = (a = me.exec(t[d]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                        for (u = T.event.special[h] || {}, p = l[h = (i ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) c = p[r], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(e, c));
                        s && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, v.handle) || T.removeEvent(e, h, v.handle), delete l[h])
                    } else
                        for (h in l) T.event.remove(e, h + t[d], n, i, !0);
                T.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s = new Array(arguments.length),
                a = T.event.fix(e),
                l = (Q.get(this, "events") || Object.create(null))[a.type] || [],
                e = T.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (a.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                for (r = T.event.handlers.call(this, a, l), t = 0;
                    (i = r[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (o = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                for (; d !== this; d = d.parentNode || this)
                    if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < T(o, this).index(d) : T.find(o, this, null, [d]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: d,
                            handlers: r
                        })
                    }
            return d = this, l < t.length && a.push({
                elem: d,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[T.expando] ? e : new T.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return de.test(e.type) && e.click && A(e, "input") && xe(e, "click", ye), !1
                },
                trigger: function(e) {
                    e = this || e;
                    return de.test(e.type) && e.click && A(e, "input") && xe(e, "click"), !0
                },
                _default: function(e) {
                    e = e.target;
                    return de.test(e.type) && e.click && A(e, "input") && Q.get(e, "click") || A(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, T.Event = function(e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, T.event.addProp), T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        T.event.special[e] = {
            setup: function() {
                return xe(this, e, be), !1
            },
            trigger: function() {
                return xe(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        T.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), T.fn.extend({
        on: function(e, t, n, i) {
            return ke(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ke(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
                T.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var Te = /<script|<style|<link/i,
        Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function $e(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }

    function Ae(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ee(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function De(e, t) {
        var n, i, o, r;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (r = Q.get(e).events))
                for (o in Q.remove(t, "handle events"), r)
                    for (n = 0, i = r[o].length; n < i; n++) T.event.add(t, o, r[o][n]);
            G.hasData(e) && (e = G.access(e), e = T.extend({}, e), G.set(t, e))
        }
    }

    function _e(n, i, o, r) {
        i = y(i);
        var e, t, s, a, l, d, c = 0,
            u = n.length,
            p = u - 1,
            h = i[0],
            f = v(h);
        if (f || 1 < u && "string" == typeof h && !b.checkClone && Se.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            f && (i[0] = h.call(this, e, t.html())), _e(t, i, o, r)
        });
        if (u && (t = (e = ve(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = T.map(he(e, "script"), Ae)).length; c < u; c++) l = e, c !== p && (l = T.clone(l, !0, !0), a && T.merge(s, he(l, "script"))), o.call(n[c], l, c);
            if (a)
                for (d = s[s.length - 1].ownerDocument, T.map(s, Ee), c = 0; c < a; c++) l = s[c], ue.test(l.type || "") && !Q.access(l, "globalEval") && T.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, d) : x(l.textContent.replace(Ce, ""), l, d))
        }
        return n
    }

    function Le(e, t, n) {
        for (var i, o = t ? T.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || T.cleanData(he(i)), i.parentNode && (n && oe(i) && fe(he(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l, d, c = e.cloneNode(!0),
                u = oe(e);
            if (!(b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (s = he(c), i = 0, o = (r = he(e)).length; i < o; i++) a = r[i], "input" === (d = (l = s[i]).nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== d && "textarea" !== d || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || he(e), s = s || he(c), i = 0, o = r.length; i < o; i++) De(r[i], s[i]);
                else De(e, c);
            return 0 < (s = he(c, "script")).length && fe(s, !u && he(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, o = T.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (X(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), T.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return W(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return _e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $e(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return _e(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = $e(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return _e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return _e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return _e(this, arguments, function(e) {
                var t = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(he(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        T.fn[e] = function(e) {
            for (var t, n = [], i = T(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), T(i[r])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });

    function Ne(e) {
        var t = e.ownerDocument.defaultView;
        return (t = !t || !t.opener ? g : t).getComputedStyle(e)
    }

    function Oe(e, t, n) {
        var i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in n = n.call(e), t) e.style[i] = o[i];
        return n
    }
    var Me, He, Pe, je, Ie, ze, qe, Re, We = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Be = new RegExp(ne.join("|"), "i");

    function Fe(e, t, n) {
        var i, o, r = e.style;
        return (n = n || Ne(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = T.style(e, t)), !b.pixelBoxStyles() && We.test(o) && Be.test(t) && (i = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o
    }

    function Ue(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Ye() {
        var e;
        Re && (qe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Re.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(qe).appendChild(Re), e = g.getComputedStyle(Re), Me = "1%" !== e.top, ze = 12 === Xe(e.marginLeft), Re.style.right = "60%", je = 36 === Xe(e.right), He = 36 === Xe(e.width), Re.style.position = "absolute", Pe = 12 === Xe(Re.offsetWidth / 3), ie.removeChild(qe), Re = null)
    }

    function Xe(e) {
        return Math.round(parseFloat(e))
    }
    qe = k.createElement("div"), (Re = k.createElement("div")).style && (Re.style.backgroundClip = "content-box", Re.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === Re.style.backgroundClip, T.extend(b, {
        boxSizingReliable: function() {
            return Ye(), He
        },
        pixelBoxStyles: function() {
            return Ye(), je
        },
        pixelPosition: function() {
            return Ye(), Me
        },
        reliableMarginLeft: function() {
            return Ye(), ze
        },
        scrollboxSize: function() {
            return Ye(), Pe
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == Ie && (e = k.createElement("table"), t = k.createElement("tr"), n = k.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ie.appendChild(e).appendChild(t).appendChild(n), n = g.getComputedStyle(t), Ie = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, ie.removeChild(e)), Ie
        }
    }));
    var Ve = ["Webkit", "Moz", "ms"],
        Qe = k.createElement("div").style,
        Ge = {};

    function Ke(e) {
        return T.cssProps[e] || Ge[e] || (e in Qe ? e : Ge[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                if ((e = Ve[n] + t) in Qe) return e
        }(e) || e)
    }
    var Je = /^(none|table(?!-c[ea]).+)/,
        Ze = /^--/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function nt(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function it(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += T.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= T.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (l -= T.css(e, "border" + ne[s] + "Width", !0, o))) : (l += T.css(e, "padding" + ne[s], !0, o), "padding" !== n ? l += T.css(e, "border" + ne[s] + "Width", !0, o) : a += T.css(e, "border" + ne[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function ot(e, t, n) {
        var i = Ne(e),
            o = (!b.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i),
            r = o,
            s = Fe(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (We.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!b.boxSizingReliable() && o || !b.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === T.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + it(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Fe(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = Y(t),
                    l = Ze.test(t),
                    d = e.style;
                if (l || (t = Ke(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : d[t];
                "string" == (r = typeof n) && (o = te.exec(n)) && o[1] && (n = function(e, t, n) {
                    var i, o, r = 20,
                        s = function() {
                            return T.css(e, t, "")
                        },
                        a = s(),
                        l = n && n[3] || (T.cssNumber[t] ? "" : "px"),
                        d = e.nodeType && (T.cssNumber[t] || "px" !== l && +a) && te.exec(T.css(e, t));
                    if (d && d[3] !== l) {
                        for (l = l || d[3], d = +(a /= 2) || 1; r--;) T.style(e, t, d + l), (1 - o) * (1 - (o = s() / a || .5)) <= 0 && (r = 0), d /= o;
                        T.style(e, t, (d *= 2) + l), n = n || []
                    }
                    return n && (d = +d || +a || 0, i = n[1] ? d + (n[1] + 1) * n[2] : +n[2]), i
                }(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (T.cssNumber[a] ? "" : "px")), b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? d.setProperty(t, n) : d[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r = Y(t);
            return Ze.test(t) || (t = Ke(r)), "normal" === (o = void 0 === (o = (r = T.cssHooks[t] || T.cssHooks[r]) && "get" in r ? r.get(e, !0, n) : o) ? Fe(e, t, i) : o) && t in tt && (o = tt[t]), "" === n || n ? (t = parseFloat(o), !0 === n || isFinite(t) ? t || 0 : o) : o
        }
    }), T.each(["height", "width"], function(e, a) {
        T.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !Je.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, a, n) : Oe(e, et, function() {
                    return ot(e, a, n)
                })
            },
            set: function(e, t, n) {
                var i, o = Ne(e),
                    r = !b.scrollboxSize() && "absolute" === o.position,
                    s = (r || n) && "border-box" === T.css(e, "boxSizing", !1, o),
                    n = n ? it(e, a, n, s, o) : 0;
                return s && r && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - it(e, a, "border", !1, o) - .5)), n && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = T.css(e, a)), nt(0, t, n)
            }
        }
    }), T.cssHooks.marginLeft = Ue(b.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - Oe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        T.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ne[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== o && (T.cssHooks[o + r].set = nt)
    }), T.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Ne(e), o = t.length; s < o; s++) r[t[s]] = T.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), T.fn.delay = function(i, e) {
        return i = T.fx && T.fx.speeds[i] || i, this.queue(e = e || "fx", function(e, t) {
            var n = g.setTimeout(e, i);
            t.stop = function() {
                g.clearTimeout(n)
            }
        })
    }, u = k.createElement("input"), ee = k.createElement("select").appendChild(k.createElement("option")), u.type = "checkbox", b.checkOn = "" !== u.value, b.optSelected = ee.selected, (u = k.createElement("input")).value = "t", u.type = "radio", b.radioValue = "t" === u.value;
    var rt, st = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return W(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }), T.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === r && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? rt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (i = o.get(e, t))) && null == (i = T.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(H);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), rt = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = st[t] || T.find.attr;
        st[t] = function(e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = st[r], st[r] = i, i = null != s(e, t, n) ? r : null, st[r] = o), i
        }
    });
    var at = /^(?:input|select|textarea|button)$/i,
        lt = /^(?:a|area)$/i;

    function dt(e) {
        return (e.match(H) || []).join(" ")
    }

    function ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ut(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    T.fn.extend({
        prop: function(e, t) {
            return W(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e]
            })
        }
    }), T.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && T.isXMLDoc(e) || (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : at.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), b.optSelected || (T.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a = 0;
            if (v(t)) return this.each(function(e) {
                T(this).addClass(t.call(this, e, ct(this)))
            });
            if ((e = ut(t)).length)
                for (; n = this[a++];)
                    if (s = ct(n), i = 1 === n.nodeType && " " + dt(s) + " ") {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s !== (s = dt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a = 0;
            if (v(t)) return this.each(function(e) {
                T(this).removeClass(t.call(this, e, ct(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = ut(t)).length)
                for (; n = this[a++];)
                    if (s = ct(n), i = 1 === n.nodeType && " " + dt(s) + " ") {
                        for (r = 0; o = e[r++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        s !== (s = dt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o,
                s = "string" == r || Array.isArray(o);
            return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : v(o) ? this.each(function(e) {
                T(this).toggleClass(o.call(this, e, ct(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = T(this), i = ut(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" != r || ((e = ct(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + dt(ct(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    var pt = /\r/g;
    T.fn.extend({
        val: function(t) {
            var n, e, i, o = this[0];
            return arguments.length ? (i = v(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, T(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(pt, "") : null == e ? "" : e : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : dt(T.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                        if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
                            if (t = T(t).val(), o) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = T.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
            }
        }, b.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), b.focusin = "onfocusin" in g;

    function ht(e) {
        e.stopPropagation()
    }
    var ft = /^(?:focusinfocus|focusoutblur)$/;
    T.extend(T.event, {
        trigger: function(e, t, n, i) {
            var o, r, s, a, l, d, c, u = [n || k],
                p = w.call(e, "type") ? e.type : e,
                h = w.call(e, "namespace") ? e.namespace.split(".") : [],
                f = c = r = n = n || k;
            if (3 !== n.nodeType && 8 !== n.nodeType && !ft.test(p + T.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[T.expando] ? e : new T.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), d = T.event.special[p] || {}, i || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                if (!i && !d.noBubble && !m(n)) {
                    for (s = d.delegateType || p, ft.test(s + p) || (f = f.parentNode); f; f = f.parentNode) u.push(f), r = f;
                    r === (n.ownerDocument || k) && u.push(r.defaultView || r.parentWindow || g)
                }
                for (o = 0;
                    (f = u[o++]) && !e.isPropagationStopped();) c = f, e.type = 1 < o ? s : d.bindType || p, (l = (Q.get(f, "events") || Object.create(null))[e.type] && Q.get(f, "handle")) && l.apply(f, t), (l = a && f[a]) && l.apply && X(f) && (e.result = l.apply(f, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(u.pop(), t) || !X(n) || a && v(n[p]) && !m(n) && ((r = n[a]) && (n[a] = null), T.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, ht), n[p](), e.isPropagationStopped() && c.removeEventListener(p, ht), T.event.triggered = void 0, r && (n[a] = r)), e.result
            }
        },
        simulate: function(e, t, n) {
            e = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(e, null, t)
        }
    }), T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0)
        }
    }), b.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            T.event.simulate(i, e.target, T.event.fix(e))
        }
        T.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Q.access(e, i);
                t || e.addEventListener(n, o, !0), Q.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Q.access(e, i) - 1;
                t ? Q.access(e, i, t) : (e.removeEventListener(n, o, !0), Q.remove(e, i))
            }
        }
    }), T.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new g.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || T.error("Invalid XML: " + (n ? T.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var gt = /\[\]$/,
        vt = /\r?\n/g,
        mt = /^(?:submit|button|image|reset|file)$/i,
        yt = /^(?:input|select|textarea|keygen)/i;
    T.param = function(e, t) {
        function n(e, t) {
            t = v(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i, o = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) ! function n(i, e, o, r) {
                if (Array.isArray(e)) T.each(e, function(e, t) {
                    o || gt.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, r)
                });
                else if (o || "object" !== f(e)) r(i, e);
                else
                    for (var t in e) n(i + "[" + t + "]", e[t], o, r)
            }(i, e[i], t, n);
        return o.join("&")
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && yt.test(this.nodeName) && !mt.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(vt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(vt, "\r\n")
                }
            }).get()
        }
    }), T.fn.extend({
        wrapAll: function(e) {
            return this[0] && (v(e) && (e = e.call(this[0])), e = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                T(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = T(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }), this
        }
    }), T.expr.pseudos.hidden = function(e) {
        return !T.expr.pseudos.visible(e)
    }, T.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, b.createHTMLDocument = ((u = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === u.childNodes.length), T.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (b.createHTMLDocument ? ((i = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(i)) : t = k), i = !n && [], (n = E.exec(e)) ? [t.createElement(n[1])] : (n = ve([e], t, i), i && i.length && T(i).remove(), T.merge([], n.childNodes)));
        var i
    }, T.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a = T.css(e, "position"),
                l = T(e),
                d = {};
            "static" === a && (e.style.position = "relative"), r = l.offset(), i = T.css(e, "top"), s = T.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(s) || 0), null != (t = v(t) ? t.call(e, n, T.extend({}, r)) : t).top && (d.top = t.top - r.top + o), null != t.left && (d.left = t.left - r.left + s), "using" in t ? t.using.call(e, d) : l.css(d)
        }
    }, T.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                T.offset.setOffset(this, t, e)
            });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), o.left += T.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - T.css(i, "marginTop", !0),
                    left: t.left - o.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || ie
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        T.fn[t] = function(e) {
            return W(this, function(e, t, n) {
                var i;
                return m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), T.each(["top", "left"], function(e, n) {
        T.cssHooks[n] = Ue(b.pixelPosition, function(e, t) {
            if (t) return t = Fe(e, n), We.test(t) ? T(e).position()[n] + "px" : t
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        T.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, r) {
            T.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return W(this, function(e, t, n) {
                    var i;
                    return m(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(e, t, o) : T.style(e, t, n, o)
                }, a, n ? e : void 0, n)
            }
        })
    }), T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        T.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var wt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    T.proxy = function(e, t) {
        var n, i;
        if ("string" == typeof t && (i = e[t], t = e, e = i), v(e)) return n = a.call(arguments, 2), (i = function() {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || T.guid++, i
    }, T.holdReady = function(e) {
        e ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = A, T.isFunction = v, T.isWindow = m, T.camelCase = Y, T.type = f, T.now = Date.now, T.isNumeric = function(e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, T.trim = function(e) {
        return null == e ? "" : (e + "").replace(wt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var bt = g.jQuery,
        kt = g.$;
    return T.noConflict = function(e) {
        return g.$ === T && (g.$ = kt), e && g.jQuery === T && (g.jQuery = bt), T
    }, void 0 === e && (g.jQuery = g.$ = T), T
});
class Accordion {
    constructor(e) {
        this.el = e, this.summary = e.querySelector("summary"), this.content = e.querySelector(".faq_content"), this.animation = null, this.isClosing = !1, this.isExpanding = !1, this.summary.addEventListener("click", e => this.onClick(e))
    }
    onClick(e) {
        e.preventDefault(), this.el.style.overflow = "hidden", this.isClosing || !this.el.open ? this.open() : (this.isExpanding || this.el.open) && this.shrink()
    }
    shrink() {
        this.isClosing = !0;
        var e = `${this.el.offsetHeight}px`,
            t = `${this.summary.offsetHeight}px`;
        this.animation && this.animation.cancel(), this.animation = this.el.animate({
            height: [e, t]
        }, {
            duration: 400,
            easing: "ease-out"
        }), this.animation.onfinish = () => this.onAnimationFinish(!1), this.animation.oncancel = () => this.isClosing = !1
    }
    open() {
        this.el.style.height = `${this.el.offsetHeight}px`, this.el.open = !0, window.requestAnimationFrame(() => this.expand())
    }
    expand() {
        this.isExpanding = !0;
        var e = `${this.el.offsetHeight}px`,
            t = `${this.summary.offsetHeight+this.content.offsetHeight}px`;
        this.animation && this.animation.cancel(), this.animation = this.el.animate({
            height: [e, t]
        }, {
            duration: 400,
            easing: "ease-out"
        }), this.animation.onfinish = () => this.onAnimationFinish(!0), this.animation.oncancel = () => this.isExpanding = !1
    }
    onAnimationFinish(e) {
        this.el.open = e, this.animation = null, this.isClosing = !1, this.isExpanding = !1, this.el.style.height = this.el.style.overflow = ""
    }
}
document.querySelectorAll("details").forEach(e => {
        new Accordion(e)
    }),
    function() {
        if (document.getElementById("calculate")) {
            let e = document.getElementById("time"),
                t = document.getElementById("firstPay"),
                n = document.getElementById("cost"),
                i = document.getElementById("mountCost"),
                o = document.getElementById("firstPayValue"),
                r = Array.from(document.querySelectorAll(".js-input")),
                s = document.getElementById("variableSum").querySelector("span");
            r.forEach(e => {
                e.addEventListener("input", function(e) {
                    this.value = this.value.replace(/[^\d.]/g, "")
                })
            }), r[0].value = n.value, r[1].value = t.value, r[2].value = e.value;
            let a = (e, t) => (this.cost = e, this.firstPay = t, 0 != this.firstPay ? Math.round(this.firstPay) : 0),
                l = e => (this.time = e, this.time <= 12 ? .5 : 12 < this.time && this.time <= 24 ? .95 : 1.2),
                d = (e, t, n) => {
                    this.cost = e, this.time = t, this.firstPay = n;
                    t = (this.cost - a(this.cost, this.firstPay)) / this.time, n = 1 + l(this.time);
                    return Math.round(t * n)
                },
                c = () => {
                    this.time = e.value, this.cost = n.value, this.firstPay = t.value, o.innerHTML = a(this.cost, this.firstPay), i.innerHTML = d(this.cost, this.time, this.firstPay)
                };
            c();
            let u = (e, t, n, i) => (this.elem = e, this.max = t, this.min = i, this.value = n, this.elem > this.max ? this.max : this.elem < this.min ? this.min : this.value);
            n.addEventListener("input", function() {
                r[0].value = this.value, t.dispatchEvent(new Event("input", {
                    bubbles: !0
                })), t.setAttribute("max", this.value), s.innerHTML = this.value, r[1].value > r[0].value && (r[1].value = r[0].value), c()
            }), t.addEventListener("input", function() {
                r[1].value = this.value, c()
            }), e.addEventListener("input", function() {
                r[2].value = this.value, c()
            }), r[0].addEventListener("change", function() {
                n.value = u(n.value, max = 3e7, this.value, min = 5e5), t.dispatchEvent(new Event("input", {
                    bubbles: !0
                })), t.setAttribute("max", this.value), s.innerHTML = this.value, r[1].value > r[0].value && (r[1].value = r[0].value), this.value = n.value, c()
            }), r[1].addEventListener("change", function() {
                t.value = u(t.value, max = r[0].value, this.value, min = 0), r[1].value > r[0].value && (r[1].value = r[0].value), c()
            }), r[2].addEventListener("change", function() {
                e.value = u(t.value, max = 36, this.value, min = 1), this.value = e.value, c()
            })
        }
    }(),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Datepicker = t()
    }(this, function() {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            e = function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            },
            u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, i = arguments[t];
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            };

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function a(e, t) {
            e = (t || document).querySelectorAll(e);
            return Array.prototype.slice.call(e)
        }

        function l(e, t, n) {
            for (var i, o, r, s = n && !n.contains(e); e && !s;) {
                if (o = t, r = void 0, (r = (i = e).matches || i.matchesSelector || i.webkitMatchesSelector || i.msMatchesSelector) && r.call(i, o)) return e;
                s = n && !n.contains(e.parentNode), e = e.parentNode
            }
            return !1
        }

        function d(e, t) {
            e.classList.add.apply(e.classList, t.split(" ").filter(Boolean))
        }

        function c(e, t) {
            e.classList.remove.apply(e.classList, t.split(" ").filter(Boolean))
        }

        function p(e, t, n) {
            void 0 === n && (n = !(t && e.classList.contains(t))), t && (n ? d : c)(e, t)
        }

        function L(e, t) {
            return e instanceof Date && (t = e.getMonth(), e = e.getFullYear()), [31, e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        }

        function h(e, t, n) {
            for (var i = 0; i < t.length; i++) {
                var o = e,
                    r = t[i],
                    r = "year" == n ? (o = o.getFullYear(), r.getFullYear()) : "month" == n ? (o = o.getMonth(), r.getMonth()) : (o = o.getTime(), r.getTime());
                if (o == r) return !0
            }
            return !1
        }

        function f(e, t) {
            return e.getTime() - t.getTime()
        }

        function g(e) {
            return !!e && e instanceof Date && !isNaN(e.getTime())
        }

        function N(e) {
            return w(e, function(e) {
                return e && e.setHours(0, 0, 0, 0), e
            })
        }

        function v(e, t) {
            var n = e = new Date(e);
            e > (t = new Date(t)) && (e = t, t = n, n = e);
            for (var i = [new Date(n)]; n < t;) n.setDate(n.getDate() + 1), i.push(new Date(n));
            return i
        }

        function m(e) {
            if ("object" == (void 0 === e ? "undefined" : o(e)) && null !== e) {
                e = Object.getPrototypeOf(e);
                return e === Object.prototype || null === e
            }
        }

        function y(e) {
            for (var t = Array.prototype.slice.call(arguments, 1), n = 0; n < t.length; n++)
                for (var i in t[n]) void 0 !== e[i] && "object" === o(t[n][i]) && null !== t[n][i] && void 0 === t[n][i].nodeName ? (t[n][i] instanceof Date && (e[i] = new Date(t[n][i].getTime())), Array.isArray(t[n][i]) ? e[i] = t[n][i].slice(0) : e[i] = y(e[i], t[n][i])) : e[i] = t[n][i];
            return e
        }

        function w(e, t, n) {
            n = [].concat(e).map(t, n);
            return 1 === n.length ? n[0] : n
        }

        function b(e, t) {
            e = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
            return t ? e(t) : e
        }
        var t = {
                inline: !1,
                multiple: !1,
                ranged: !1,
                time: !1,
                openOn: "first",
                min: !1,
                max: !1,
                within: !1,
                without: !1,
                yearRange: 5,
                weekStart: 0,
                defaultTime: {
                    start: [0, 0],
                    end: [12, 0]
                },
                separator: ",",
                serialize: function(e) {
                    var t = e.toLocaleDateString();
                    if (this.get("time")) {
                        e = e.toLocaleTimeString();
                        return t + "@" + e.replace(/(\d{1,2}:\d{2}):00/, "$1")
                    }
                    return t
                },
                deserialize: function(e) {
                    return new Date(e)
                },
                toValue: !1,
                fromValue: !1,
                onInit: !1,
                onChange: !1,
                onRender: !1,
                i18n: {
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    time: ["Time", "Start", "End"]
                },
                classNames: {
                    node: "datepicker",
                    wrapper: "datepicker__wrapper",
                    inline: "is-inline",
                    selected: "is-selected",
                    disabled: "is-disabled",
                    highlighted: "is-highlighted",
                    otherMonth: "is-otherMonth",
                    weekend: "is-weekend",
                    today: "is-today"
                },
                templates: {
                    container: ['<div class="datepicker__container">', "<%= renderHeader() %>", "<%= renderTimepicker() %>", "<%= renderCalendar() %>", "</div>"].join(""),
                    header: ['<header class="datepicker__header">', '<a class="datepicker__prev<%= (hasPrev) ? "" : " is-disabled" %>" data-prev>&lsaquo;</a>', '<span class="datepicker__title"><%= renderMonthSelect() %></span>', '<span class="datepicker__title"><%= renderYearSelect() %></span>', '<a class="datepicker__next<%= (hasNext) ? "" : " is-disabled" %>" data-next>&rsaquo;</a>', "</header>"].join(""),
                    timepicker: ['<div class="datepicker__time">', '<span class="datepicker__label"><%= label %></span>', '<span class="datepicker__field"><%= renderHourSelect() %></span>:', '<span class="datepicker__field"><%= renderMinuteSelect() %></span>', '<span class="datepicker__field"><%= renderPeriodSelect() %></span>', "</div>"].join(""),
                    calendar: ['<table class="datepicker__cal">', "<thead>", "<tr>", "<% weekdays.forEach(function(name) { %>", "<th><%= name %></th>", "<% }); %>", "</tr>", "</thead>", "<tbody>", "<% days.forEach(function(day, i) { %>", '<%= (i % 7 == 0) ? "<tr>" : "" %>', "<%= renderDay(day) %>", '<%= (i % 7 == 6) ? "</tr>" : "" %>', "<% }); %>", "</tbody>", "</table>"].join(""),
                    day: ['<% classNames.push("datepicker__day"); %>', '<td class="<%= classNames.join(" ") %>" data-day="<%= timestamp %>"><div>', '<span class="datepicker__daynum"><%= daynum %></span>', "</div></td>"].join("")
                }
            },
            e = (e(r, [{
                key: "_initOptions",
                value: function() {
                    var t = this,
                        e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this._opts = {};
                    var n = function(e, t) {
                            t = t.classNames.inline;
                            return this.node && (p(this.node, t, e), this.wrapper.style.position = e ? "" : "absolute", this.wrapper.style.display = e ? "" : "none"), this._isOpen = e
                        }.bind(this),
                        i = function(e, t) {
                            t = t.deserialize;
                            return !!g(e = !!e && w(e, t, this)) && e
                        }.bind(this),
                        o = function(e, t) {
                            t = t.deserialize;
                            return e.length && (e = N(w(e, t, this)), e = [].concat(e).filter(g)), !!e.length && e
                        }.bind(this),
                        r = function(e, t) {
                            t = t.deserialize;
                            return "string" != typeof e || /^(first|last|today)$/.test(e) || g(e = t.call(this, e)) || (e = new Date), this._month || ("string" != typeof(t = e) && g(t) || (t = new Date), (t = N(new Date(t.getTime()))).setDate(1), this._month = t), e
                        }.bind(this),
                        s = function(e) {
                            return Math.min(Math.max(e, 0), 6)
                        }.bind(this),
                        a = function(e, t) {
                            return m(e) ? y({}, e, t.defaultTime) : {
                                start: e.slice(0),
                                end: e.slice(0)
                            }
                        }.bind(this),
                        l = function(e, t) {
                            var n = e.node,
                                i = e.inline,
                                o = e.wrapper,
                                r = t.inline;
                            if (this.node)
                                for (var s in e) switch (s) {
                                    case "node":
                                    case "inline":
                                        this.node.className = n + (r ? " " + i : "");
                                        break;
                                    case "wrapper":
                                        this.wrapper.className = o
                                }
                            return e
                        }.bind(this),
                        d = function(e) {
                            return "function" == typeof e && e.bind(this)
                        }.bind(this),
                        c = function(e) {
                            for (var t in e) "select" !== t && (this._renderers[t] = b(e[t]));
                            return e
                        }.bind(this);
                    this._set = {
                        openOn: r,
                        inline: n,
                        weekstart: s,
                        min: i,
                        max: i,
                        within: o,
                        without: o,
                        defaultTime: a,
                        classNames: l,
                        templates: c
                    }, ["serialize", "deserialize", "onInit", "onChange", "onRender", "setValue", "getValue"].forEach(function(e) {
                        return t._set[e] = d
                    }), this._renderers = {
                        select: b(['<span style="position:relative"><%= text %>', '<select data-<%= type %>="<%= value %>" data-index="<%= index %>"', 'style="position:absolute;top:0;left:0;width:100%;height:100%;margin:0;opacity:0.005;cursor:pointer;">', "<% options.forEach(function(o) { %>", '<option value="<%= o.value %>"', '<%= o.selected ? " selected" : "" %>', '<%= o.disabled ? " disabled" : "" %>', "><%= o.text %></option>", "<% }); %>", "</select>", "</span>"].join(""))
                    }, this.set(y({}, this.constructor.defaults, function(e) {
                        function t(e) {
                            return e.trim()
                        }
                        var n, i = {};
                        if (!e || !e.dataset) return i;
                        for (n in e.dataset) {
                            var o = e.dataset[n];
                            /true|false/.test(o.toLowerCase()) ? o = "true" == o.toLowerCase() : "[" == o[0] && "]" == o.substr(-1) ? o = w(o.substr(1, o.length - 2).split(","), t) : /^\d*$/.test(o) && (o = parseInt(o, 10)), i[n] = o
                        }
                        return i
                    }(this._el), e))
                }
            }, {
                key: "_initDOM",
                value: function(e) {
                    this.node || (this._el = e, this.node = document.createElement("div"), this.node.style.position = "relative", this.wrapper = document.createElement("div"), this.wrapper.style.zIndex = 9999, e.parentNode && e.parentNode.insertBefore(this.node, e), this.node.appendChild(e), this.node.appendChild(this.wrapper))
                }
            }, {
                key: "_initEvents",
                value: function() {
                    var t = this;
                    this._isInitialized || (this._highlighted = [], this._onmousedown = this._onmousedown.bind(this), this._onmousemove = this._onmousemove.bind(this), this._onmouseup = this._onmouseup.bind(this), this._onclick = this._onclick.bind(this), "input" !== this._el.tagName.toLowerCase() ? this._el.addEventListener("click", function() {
                        return t.toggle()
                    }) : this._el.addEventListener("focus", function() {
                        return t.open()
                    }), document.addEventListener("mousedown", function(e) {
                        t.node.contains(e.target) || t.hide()
                    }), this.node.onselectstart = function() {
                        return !1
                    }, this.node.addEventListener("mousedown", this._onmousedown), this.node.addEventListener("mousemove", this._onmousemove), this.node.addEventListener("mouseup", this._onmouseup), this.node.addEventListener("click", this._onclick), this._isInitialized = !0)
                }
            }, {
                key: "_onmousedown",
                value: function(e) {
                    var t = this,
                        n = this._opts,
                        i = n.ranged,
                        o = n.multiple,
                        n = n.classNames,
                        r = n.selected,
                        s = n.highlighted,
                        n = l(e.target, "[data-day]", this.wrapper),
                        n = n ? parseInt(n.dataset.day, 10) : null;
                    n && (i && this._dragStart ? this._onmousemove(e) : (this._deselect = !i && this.hasDate(new Date(n)), this._highlighted = [n], this._dragStart = n, o || a("[data-day]." + r, this.wrapper).forEach(function(e) {
                        c(e, r)
                    }), a('[data-day="' + n + '"]', this.wrapper).forEach(function(e) {
                        p(e, r, !t._deselect), d(e, s)
                    })))
                }
            }, {
                key: "_onmousemove",
                value: function(e) {
                    var n = this,
                        t = this._opts,
                        i = t.ranged,
                        o = t.multiple,
                        t = t.classNames,
                        r = t.selected,
                        s = t.highlighted;
                    !i && !o || 1 !== e.buttons || (e = (e = l(e.target, "[data-day]", this.wrapper)) ? parseInt(e.dataset.day, 10) : null) && this._dragStart && (this._highlighted = v(this._dragStart, e).map(function(e) {
                        return e.getTime()
                    }), this._isDragging = e !== this._dragStart, a("[data-day]." + s, this.wrapper).forEach(function(e) {
                        var t = new Date(parseInt(e.dataset.day, 10));
                        p(e, r, !i && n.hasDate(t)), c(e, s)
                    }), this._highlighted.forEach(function(e) {
                        a('[data-day="' + e + '"]', n.wrapper).forEach(function(e) {
                            p(e, r, !n._deselect), d(e, s)
                        })
                    }))
                }
            }, {
                key: "_onmouseup",
                value: function(e) {
                    var t = this._opts,
                        n = t.ranged,
                        i = t.multiple,
                        o = t.classNames.highlighted;
                    a("[data-day]." + o, this.wrapper).forEach(function(e) {
                        c(e, o)
                    }), this._dragStart && l(e.target, "[data-day]", this.node) && (e = this._highlighted.map(function(e) {
                        return new Date(e)
                    }), n || !i ? this.setDate(e) : this.toggleDate(e, !this._deselect), this.render(), i || n && !this._isDragging || this.hide()), n && !this._isDragging || (this._highlighted = [], this._dragStart = null), this._isDragging = !1
                }
            }, {
                key: "_onclick",
                value: function(e) {
                    var n = this,
                        i = e.target;
                    i.hasAttribute("data-prev") ? this.prev(i.dataset.prev) : i.hasAttribute("data-next") ? this.next(i.dataset.next) : i.hasAttribute("data-year") && !i.onchange ? i.onchange = function() {
                        var e = i.dataset.year,
                            t = n._month.getFullYear();
                        n._month.setFullYear(parseInt(i.value) - (e - t)), n.render()
                    } : i.hasAttribute("data-month") && !i.onchange ? i.onchange = function() {
                        n._month.setMonth(i.value - i.dataset.index), n.render()
                    } : i.hasAttribute("data-hour") && !i.onchange ? i.onchange = function() {
                        n.setTime(i.dataset.hour, i.value), i.parentNode.firstChild.textContent = i.selectedOptions[0].textContent
                    } : i.hasAttribute("data-minute") && !i.onchange ? i.onchange = function() {
                        n.setTime(i.dataset.minute, null, i.value), i.parentNode.firstChild.textContent = i.selectedOptions[0].textContent
                    } : i.hasAttribute("data-period") && !i.onchange && (i.onchange = function() {
                        var e = i.dataset.period,
                            t = "am" === i.value ? -12 : 12;
                        a('[data-hour="' + e + '"] option', n.wrapper).forEach(function(e) {
                            e.value = parseInt(e.value) + t
                        }), n.setTime(e, (n._time ? n._time[e][0] : 0) + t), i.parentNode.firstChild.textContent = i.selectedOptions[0].textContent
                    })
                }
            }, {
                key: "set",
                value: function(e, t) {
                    if (e) {
                        if (m(e)) {
                            for (var n in this._noRender = !0, e.serialize && (this.set("serialize", e.serialize), delete e.serialize), e.deserialize && (this.set("deserialize", e.deserialize), delete e.deserialize), e) this.set(n, e[n]);
                            this._noRender = !1, t = this._opts
                        } else {
                            var i = y({}, this.constructor.defaults, this._opts);
                            m(t = e in this._set ? this._set[e](t, i) : t) && (t = y({}, i[e], t)), this._opts[e] = t
                        }
                        return this._isOpen && this.wrapper && this.render(), t
                    }
                }
            }, {
                key: "get",
                value: function(e) {
                    var n = this;
                    if (1 < arguments.length) return [].concat(Array.prototype.slice.call(arguments)).reduce(function(e, t) {
                        return e[t] = n.get(t), e
                    }, {});
                    e = this._opts[e];
                    return e = m(e) ? y({}, e) : e
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = [].concat(this.getDate());
                    "string" == typeof(e = e || this._opts.openOn || this._month) && ("first" === (e = e.toLowerCase()) && t.length ? e = t[0] : "last" === e && t.length ? e = t[t.length - 1] : "today" !== e && (e = this._opts.deserialize(e))), g(e) || (e = new Date), this.setTime(!!this._selected.length), this.goToDate(e), this.render(), this.show()
                }
            }, {
                key: "show",
                value: function() {
                    var e, t, n, i, o, r;
                    this._opts.inline || (this.wrapper.style.display = "block", i = this.node.getBoundingClientRect(), e = (o = this._el.getBoundingClientRect()).bottom - i.top + "px", t = i.bottom - o.top + "px", this.wrapper.style.top = e, this.wrapper.style.right = "", this.wrapper.style.bottom = "", this.wrapper.style.left = 0, n = (r = this.wrapper.getBoundingClientRect()).right > window.innerWidth, i = r.bottom > window.innerHeight, this.wrapper.style.top = i ? "" : e, this.wrapper.style.right = n ? 0 : "", this.wrapper.style.bottom = i ? t : "", this.wrapper.style.left = n ? "" : 0, o = (r = this.wrapper.getBoundingClientRect()).right >= r.width, r = r.bottom > r.height, this.wrapper.style.top = i && r ? "" : e, this.wrapper.style.right = n && o ? 0 : "", this.wrapper.style.bottom = i && r ? t : "", this.wrapper.style.left = n && o ? "" : 0, this._isOpen = !0)
                }
            }, {
                key: "hide",
                value: function() {
                    this._opts.inline || (this.wrapper.style.display = "none", this._isOpen = !1)
                }
            }, {
                key: "toggle",
                value: function() {
                    this._isOpen ? this.hide() : this.open()
                }
            }, {
                key: "next",
                value: function(e) {
                    var t = new Date(this._month.getTime());
                    e = Math.max(e || 1, 1), t.setMonth(t.getMonth() + e), this.goToDate(t)
                }
            }, {
                key: "prev",
                value: function(e) {
                    var t = new Date(this._month.getTime());
                    e = Math.max(e || 1, 1), t.setMonth(t.getMonth() - e), this.goToDate(t)
                }
            }, {
                key: "goToDate",
                value: function(e) {
                    (e = N(this._opts.deserialize(e))).setDate(1), this._month = e, this._isOpen && this.render(), this._opts.onNavigate && this._opts.onNavigate(e)
                }
            }, {
                key: "hasDate",
                value: function(e) {
                    return e = N(g(e) ? e : this._opts.deserialize(e)), !!this._selected && -1 < this._selected.indexOf(e.getTime())
                }
            }, {
                key: "addDate",
                value: function(e) {
                    this.toggleDate(e, !0)
                }
            }, {
                key: "removeDate",
                value: function(e) {
                    this.toggleDate(e, !1)
                }
            }, {
                key: "toggleDate",
                value: function(e, i) {
                    var o = this,
                        t = this._opts,
                        r = t.ranged,
                        s = t.multiple,
                        n = t.deserialize,
                        e = (e = (e = [].concat(e)).map(function(e) {
                            return g(e) ? e : n(e)
                        })).filter(function(e) {
                            return g(e) && o.dateAllowed(e)
                        });
                    r ? e = (e = e.concat(this.getDate()).sort(f)).length ? v(e[0], e.pop()) : [] : s || (e = e.slice(0, 1)), e.map(function(e) {
                        return N(e).getTime()
                    }).forEach(function(e) {
                        var t = o._selected.indexOf(e),
                            n = -1 < t;
                        n || !1 === i ? n && !0 !== i && o._selected.splice(t, 1) : r || s ? o._selected.push(e) : o._selected = [e]
                    }), this._update()
                }
            }, {
                key: "_update",
                value: function() {
                    var e = this._opts.onChange;
                    "input" === this._el.nodeName.toLowerCase() ? this._el.value = this.getValue() : this._el.dataset.value = this.getValue(), e && e(this.getDate())
                }
            }, {
                key: "getDate",
                value: function() {
                    var e = this._opts,
                        t = e.ranged,
                        n = e.multiple,
                        i = e.time,
                        e = this._time ? this._time.start : [0, 0];
                    if (this._selected = (this._selected || []).sort(), n || t) {
                        var o = this._selected.map(function(e) {
                            return new Date(e)
                        });
                        return i && o.length && (o[0].setHours(e[0], e[1]), 1 < o.length) && (i = this._time ? this._time.end : [0, 0], o[o.length - 1].setHours(i[0], i[1])), o
                    }
                    if (this._selected.length) {
                        o = new Date(this._selected[0]);
                        return o.setHours(e[0], e[1]), o
                    }
                }
            }, {
                key: "setDate",
                value: function(e) {
                    this._selected = [], this.addDate(e)
                }
            }, {
                key: "setTime",
                value: function(e, t, n) {
                    var i = this._opts,
                        o = i.time,
                        i = i.defaultTime;
                    o && (!0 !== e && this._time || (this._time = y({}, i)), e && !0 !== e && ("number" == typeof e && (n = t, t = e, e = "start"), e = "end" === e ? e : "start", t = !!t && parseInt(t, 10), n = !!n && parseInt(n, 10), t && !isNaN(t) && (this._time[e][0] = t), n && !isNaN(n) && (this._time[e][1] = n)), this._update())
                }
            }, {
                key: "getValue",
                value: function() {
                    var e = this._opts,
                        t = e.ranged,
                        n = e.separator,
                        i = e.serialize,
                        o = e.toValue,
                        e = [].concat(this.getDate() || []),
                        n = (e = t && 1 < e.length ? [e[0], e.pop()] : e).map(i).join(n);
                    return n = o ? o(n, e) : n
                }
            }, {
                key: "setValue",
                value: function(e) {
                    var t = this._opts,
                        n = t.ranged,
                        i = t.time,
                        o = t.separator,
                        r = t.serialize,
                        t = t.fromValue;
                    this._selected = [];
                    o = t ? t(e) : e.split(o).filter(Boolean).map(r);
                    this.addDate(o), i && o.length && (r = o.sort(f)[0], this.setTime("start", r.getHours(), r.getMinutes()), "ranged" !== i && !n || (o = o[o.length - 1], this.setTime("end", o.getHours(), o.getMinutes())))
                }
            }, {
                key: "dateAllowed",
                value: function(e, t) {
                    var n = this._opts,
                        i = n.min,
                        o = n.max,
                        r = n.within,
                        s = n.without,
                        a = n.deserialize,
                        l = void 0,
                        n = l = !0;
                    return e = N(g(e) ? e : a(e)), l = "month" == t ? (n = !i || e.getMonth() >= i.getMonth(), !o || e.getMonth() <= o.getMonth()) : "year" == t ? (n = !i || e.getFullYear() >= i.getFullYear(), !o || e.getFullYear() <= o.getFullYear()) : (n = !i || i <= e, !o || e <= o), n && l && (!s || !h(e, s, t)) && (!r || h(e, r, t))
                }
            }, {
                key: "render",
                value: function() {
                    var t, n, i = this,
                        e = this._opts,
                        o = e.ranged,
                        r = e.time,
                        e = e.onRender;
                    !this._noRender && this._renderers && (t = {}, n = function(e) {
                        return t[e] || (t[e] = i.getData(e))
                    }, this.wrapper.innerHTML = this._renderers.container({
                        renderHeader: function() {
                            return i._renderHeader(n(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0))
                        },
                        renderCalendar: function() {
                            var e = n(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0);
                            return i._renderers.calendar(u({}, e, {
                                renderHeader: function() {
                                    return i._renderHeader(e)
                                },
                                renderDay: function(e) {
                                    return i._renderers.day(e)
                                }
                            }))
                        },
                        renderTimepicker: function() {
                            var e = "";
                            return r && (e = i._renderTimepicker("start"), "ranged" !== r && !o || (e += i._renderTimepicker("end"))), e
                        }
                    }), e && e(this.wrapper.firstChild))
                }
            }, {
                key: "getData",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = this._opts,
                        n = t.i18n,
                        i = t.weekStart,
                        o = t.serialize,
                        r = t.min,
                        s = t.max,
                        a = t.classNames,
                        l = a.selected,
                        d = a.disabled,
                        c = a.otherMonth,
                        u = a.weekend,
                        p = a.today,
                        h = new Date(this._month.getTime());
                    h.setMonth(h.getMonth() + e);
                    var f = h.getMonth(),
                        g = h.getFullYear(),
                        t = new Date(h.getTime());
                    t.setMonth(t.getMonth() + 1), t.setDate(1);
                    a = new Date(h.getTime());
                    a.setMonth(a.getMonth() - 1), a.setDate(L(a));
                    for (var v = [], m = h.getDay() - i; m < 0;) m += 7;
                    for (var y = L(g, f) + m; y % 7;) y += 1;
                    for (var w = N(new Date), b = 0; b < y; b++) {
                        var k = new Date(g, f, b - m + 1),
                            x = k.getMonth(),
                            T = k.getDay(),
                            S = this.hasDate(k),
                            C = !this.dateAllowed(k),
                            $ = x < f,
                            A = f < x,
                            E = !$ && !A,
                            D = 0 === T || 6 === T,
                            _ = k.getTime() === w.getTime(),
                            x = [];
                        S && x.push(l), C && x.push(d), E || x.push(c), D && x.push(u), _ && x.push(p), v.push({
                            _date: k,
                            date: o(k),
                            daynum: k.getDate(),
                            timestamp: k.getTime(),
                            weekday: n.weekdays[T],
                            isSelected: S,
                            isDisabled: C,
                            isPrevMonth: $,
                            isNextMonth: A,
                            isThisMonth: E,
                            isWeekend: D,
                            isToday: _,
                            classNames: x
                        })
                    }
                    return {
                        _date: h,
                        index: e,
                        year: g,
                        month: n.months[f],
                        days: v,
                        weekdays: n.weekdays,
                        hasNext: !s || t <= s,
                        hasPrev: !r || r <= a
                    }
                }
            }, {
                key: "_renderHeader",
                value: function(e) {
                    var r = this,
                        t = this._opts,
                        s = t.yearRange,
                        o = t.i18n,
                        a = e._date,
                        l = e.index,
                        d = e.year,
                        c = a.getMonth();
                    return this._renderers.header(u({}, e, {
                        renderMonthSelect: function() {
                            for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : l, t = new Date(a.getTime()), n = [], i = 0; i < 12; i++) t.setMonth(i), n.push({
                                text: o.months[i],
                                disabled: !r.dateAllowed(t, "month"),
                                selected: i === c,
                                value: i
                            });
                            return r._renderers.select({
                                index: e,
                                type: "month",
                                text: o.months[c],
                                value: c,
                                options: n
                            })
                        },
                        renderYearSelect: function() {
                            for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : l, t = new Date(a.getTime()), n = d - s, i = d + s, o = []; n <= i; n++) t.setFullYear(n), o.push({
                                disabled: !r.dateAllowed(t, "year"),
                                selected: n === d,
                                value: n,
                                text: n
                            });
                            return r._renderers.select({
                                index: e,
                                type: "year",
                                text: d,
                                value: d,
                                options: o
                            })
                        }
                    }))
                }
            }, {
                key: "_renderTimepicker",
                value: function(s) {
                    var a = this,
                        e = this._opts,
                        t = e.ranged,
                        n = e.time,
                        i = e.i18n;
                    if (n) {
                        this._time || this.setTime(!0);
                        var l = this._time[s],
                            e = i.time[0];
                        return "ranged" !== n && !t || (e = i.time["start" === s ? 1 : 2]), this._renderers.timepicker({
                            label: e,
                            renderHourSelect: function() {
                                for (var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], t = [], n = l[0], i = e ? 24 : 12, o = 0; o < i; o++) t.push({
                                    text: e || o ? o : "12",
                                    selected: n === o,
                                    disabled: !1,
                                    value: o
                                });
                                !e && 12 <= n ? t.forEach(function(e) {
                                    return e.selected = (e.value += 12) === n
                                }) : e || t.push(t.shift());
                                var r = t.filter(function(e) {
                                    return e.selected
                                })[0].text;
                                return a._renderers.select({
                                    index: 0,
                                    type: "hour",
                                    value: s,
                                    options: t,
                                    text: r
                                })
                            },
                            renderMinuteSelect: function() {
                                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 15, t = [], n = 0; n < 60; n += e) t.push({
                                    text: n < 10 ? "0" + n : n,
                                    selected: l[1] === n,
                                    disabled: !1,
                                    value: n
                                });
                                var i = t.filter(function(e) {
                                    return e.selected
                                })[0].text;
                                return a._renderers.select({
                                    index: null,
                                    type: "minute",
                                    value: s,
                                    options: t,
                                    text: i
                                })
                            },
                            renderPeriodSelect: function() {
                                return a._renderers.select({
                                    index: null,
                                    type: "period",
                                    text: 12 <= l[0] ? "PM" : "AM",
                                    value: s,
                                    options: [{
                                        text: "AM",
                                        value: "am",
                                        selected: l[0] < 12
                                    }, {
                                        text: "PM",
                                        value: "pm",
                                        selected: 12 <= l[0]
                                    }]
                                })
                            }
                        })
                    }
                }
            }]), r);

        function r(e, t) {
            var n = this;
            if (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r), "string" == typeof e) {
                if ("#" != e.substr(0, 1)) return a(e).map(function(e) {
                    return new n.constructor(e, t)
                });
                e = document.getElementById(e.substr(1))
            }
            "input" !== (e = e || document.createElement("input")).tagName.toLowerCase() || /input|hidden/i.test(e.type) || (e.type = "text"), this._initDOM(e), this._initOptions(t), this._initEvents(), this.setValue(e.value || e.dataset.value || ""), this._opts.onInit && this._opts.onInit(e)
        }
        return e.defaults = t, e
    }),
    function() {
        var e, t = function(e) {
            let t = e.getDate();
            t < 10 && (t = "0" + t);
            let n = e.getMonth() + 1;
            n < 10 && (n = "0" + n);
            let i = e.getFullYear() % 100;
            return i < 10 && (i = "0" + i), t + "." + n + "." + i
        }(new Date);
        $("#datepicker-1") && (new Datepicker("#datepicker-1", {
            min: function() {
                let e = new Date;
                return e.setDate(e.getDate() - 1), e
            }()
        }), $("#datepicker-1").keydown(function(e) {
            console.log(e.key), e.preventDefault()
        }), $("#datepicker-1").attr("placeholder", t), $("#datepicker-1").attr("value", t)), $("#datepicker-2") && (new Datepicker("#datepicker-2", {
            min: ((e = new Date).setDate(e.getDate()), e)
        }), $("#datepicker-2").keydown(function(e) {
            console.log(e.key), e.preventDefault()
        })), $("#datepicker-3") && (new Datepicker("#datepicker-3", {
            min: function() {
                let e = new Date;
                return e.setDate(e.getDate() - 1), e
            }()
        }), $("#datepicker-3").keydown(function(e) {
            console.log(e.key), e.preventDefault()
        }), $("#datepicker-3").attr("placeholder", t), $("#datepicker-3").attr("value", t)), $("#datepicker-4") && (new Datepicker("#datepicker-4", {
            min: ((t = new Date).setDate(t.getDate()), t)
        }), $("#datepicker-4").keydown(function(e) {
            console.log(e.key), e.preventDefault()
        }))
    }(),
    function() {
        let e = document.querySelectorAll(".dropdown__link--js");
        e.forEach(t => {
            t.addEventListener("click", e => {
                e.preventDefault(), t.classList.contains("dropdown__link--show") ? t.classList.remove("dropdown__link--show") : t.classList.add("dropdown__link--show")
            })
        })
    }(),
    function() {
        const t = document.getElementById("header"),
            e = document.getElementById("burger");
        let n = !1;
        window.addEventListener("scroll", () => {
            20 < pageYOffset ? t.classList.add("header--bg") : t.classList.remove("header--bg")
        }), e.addEventListener("click", e => {
            e.preventDefault(), n ? t.classList.remove("header--menu") : t.classList.add("header--menu"), n = !n
        })
    }(), $(document).ready(function() {
        $("#banner").slick({
            dots: !0,
            draggable: !0,
            autoplay: !0,
            autoplaySpeed: 2e3,
            infinite: !0
        })
    }), $(document).ready(function() {
        $("#slider-1") && $("#slider-1").slick({
            infinite: !1,
            variableWidth: !0,
            nextArrow: "#next-1",
            prevArrow: "#prev-1",
            draggable: !0
        })
    }), $(document).ready(function() {
        $("#slider-2") && $("#slider-2").slick({
            infinite: !1,
            variableWidth: !0,
            nextArrow: "#next-2",
            prevArrow: "#prev-2",
            draggable: !0
        })
    }), $(document).ready(function() {
        $("#slider-3") && $("#slider-3").slick({
            infinite: !1,
            variableWidth: !0,
            nextArrow: "#next-3",
            prevArrow: "#prev-3",
            draggable: !0
        })
    }), $(document).ready(function() {
        $("#slider-4") && $("#slider-4").slick({
            infinite: !1,
            variableWidth: !0,
            nextArrow: "#next-4",
            prevArrow: "#prev-4",
            draggable: !0
        })
    }), $(document).ready(function() {
        $("#slider-5") && $("#slider-5").slick({
            infinite: !1,
            variableWidth: !0,
            nextArrow: "#next-5",
            prevArrow: "#prev-5",
            draggable: !0
        })
    }), $(document).ready(function() {
        $("#slider-4") && $("#slider-6").slick({
            infinite: !1,
            variableWidth: !0,
            nextArrow: "#next-6",
            prevArrow: "#prev-6",
            draggable: !0
        })
    }), $(document).ready(function() {
        $("#slider-img") && ($("#show-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: "#slider-img",
            fade: !0,
            arrows: !1
        }), $("#slider-img").slick({
            slidesToShow: 3,
            variableWidth: !0,
            slidesToScroll: 1,
            draggable: !0,
            infinite: !0,
            asNavFor: "#show-slider",
            focusOnSelect: !0
        }))
    }),
    function(e, t) {
        "use strict";
        var n;
        e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 <= e.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                e = /(ipad)/.exec(e) || /(iphone)/.exec(e) || /(android)/.exec(e) || /(windows phone)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/i.exec(e) || [];
            return {
                browser: t[3] || t[1] || "",
                version: t[2] || "0",
                platform: e[0] || ""
            }
        }, n = {}, (t = e.uaMatch(t.navigator.userAgent)).browser && (n[t.browser] = !0, n.version = t.version, n.versionNumber = parseInt(t.version)), t.platform && (n[t.platform] = !0), (n.android || n.ipad || n.iphone || n["windows phone"]) && (n.mobile = !0), (n.cros || n.mac || n.linux || n.win) && (n.desktop = !0), (n.chrome || n.opr || n.safari) && (n.webkit = !0), n.rv && (t.browser = "msie", n.msie = !0), n.opr && (t.browser = "opera", n.opera = !0), n.safari && n.android && (n[t.browser = "android"] = !0), n.name = t.browser, n.platform = t.platform, e.browser = n
    }(jQuery, window),
    function(m) {
        var e = (m.browser.msie ? "paste" : "input") + ".mask",
            y = null != window.orientation;
        m.mask = {
            definitions: {
                9: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            dataName: "rawMaskFn"
        }, m.fn.extend({
            caret: function(t, n) {
                var e;
                if (0 != this.length) return "number" == typeof t ? (n = "number" == typeof n ? n : t, this.each(function() {
                    var e;
                    this.setSelectionRange ? this.setSelectionRange(t, n) : this.createTextRange && ((e = this.createTextRange()).collapse(!0), e.moveEnd("character", n), e.moveStart("character", t), e.select())
                })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, n = this[0].selectionEnd) : document.selection && document.selection.createRange && (e = document.selection.createRange(), t = 0 - e.duplicate().moveStart("character", -1e5), n = t + e.text.length), {
                    begin: t,
                    end: n
                })
            },
            unmask: function() {
                return this.trigger("unmask")
            },
            mask: function(n, u) {
                if (!n && 0 < this.length) return m(this[0]).data(m.mask.dataName)();
                u = m.extend({
                    placeholder: "_",
                    completed: null
                }, u);
                var p = m.mask.definitions,
                    h = [],
                    f = n.length,
                    g = null,
                    v = n.length;
                return m.each(n.split(""), function(e, t) {
                    "?" == t ? (v--, f = e) : p[t] ? (h.push(new RegExp(p[t])), null == g && (g = h.length - 1)) : h.push(null)
                }), this.trigger("unmask").each(function() {
                    function i(e) {
                        for (var t = l.val(), n = -1, i = 0, o = 0; i < v; i++)
                            if (h[i]) {
                                for (d[i] = u.placeholder; o++ < t.length;) {
                                    var r = t.charAt(o - 1);
                                    if (h[i].test(r)) {
                                        d[i] = r, n = i;
                                        break
                                    }
                                }
                                if (o > t.length) break
                            } else d[i] == t.charAt(o) && i != f && (o++, n = i);
                        return !e && n + 1 < f ? (l.val(""), a(0, v)) : (e || f <= n + 1) && (s(), e || l.val(l.val().substring(0, n + 1))), f ? i : g
                    }

                    function s() {
                        return l.val(d.join("")).val()
                    }

                    function a(e, t) {
                        for (var n = e; n < t && n < v; n++) h[n] && (d[n] = u.placeholder)
                    }

                    function o(e, t) {
                        if (!(e < 0)) {
                            for (var n = e, i = r(t); n < v; n++)
                                if (h[n]) {
                                    if (!(i < v && h[n].test(d[i]))) break;
                                    d[n] = d[i], d[i] = u.placeholder, i = r(i)
                                }
                            s(), l.caret(Math.max(g, e))
                        }
                    }

                    function r(e) {
                        for (; ++e <= v && !h[e];);
                        return e
                    }
                    var l = m(this),
                        d = m.map(n.split(""), function(e, t) {
                            if ("?" != e) return p[e] ? u.placeholder : e
                        }),
                        c = l.val();
                    l.data(m.mask.dataName, function() {
                        return m.map(d, function(e, t) {
                            return h[t] && e != u.placeholder ? e : null
                        }).join("")
                    }), l.attr("readonly") || l.one("unmask", function() {
                        l.unbind(".mask").removeData(m.mask.dataName)
                    }).bind("focus.mask", function() {
                        c = l.val();
                        var e = i();
                        s();
                        var t = function() {
                            e == n.length ? l.caret(0, e) : l.caret(e)
                        };
                        (m.browser.msie ? t : function() {
                            setTimeout(t, 0)
                        })()
                    }).bind("blur.mask", function() {
                        i(), l.val() != c && l.change()
                    }).bind("keydown.mask", function(e) {
                        var t = e.which;
                        if (8 == t || 46 == t || y && 127 == t) {
                            var n = l.caret(),
                                e = n.begin,
                                n = n.end;
                            return n - e == 0 && (e = 46 != t ? function(e) {
                                for (; 0 <= --e && !h[e];);
                                return e
                            }(e) : n = r(e - 1), n = 46 == t ? r(n) : n), a(e, n), o(e, n - 1), !1
                        }
                        if (27 == t) return l.val(c), l.caret(0, i()), !1
                    }).bind("keypress.mask", function(e) {
                        var t = e.which,
                            n = l.caret();
                        if (e.ctrlKey || e.altKey || e.metaKey || t < 32) return !0;
                        if (t) {
                            n.end - n.begin != 0 && (a(n.begin, n.end), o(n.begin, n.end - 1));
                            n = r(n.begin - 1);
                            return n < v && (t = String.fromCharCode(t), h[n].test(t) && (function(e) {
                                for (var t = e, n = u.placeholder; t < v; t++)
                                    if (h[t]) {
                                        var i = r(t),
                                            o = d[t];
                                        if (d[t] = n, !(i < v && h[i].test(o))) break;
                                        n = o
                                    }
                            }(n), d[n] = t, s(), n = r(n), l.caret(n), u.completed && v <= n && u.completed.call(l))), !1
                        }
                    }).bind(e, function() {
                        setTimeout(function() {
                            l.caret(i(!0))
                        }, 0)
                    }), i()
                })
            }
        })
    }(jQuery);
const maskedInput = {
    init() {
        let e = $('[name="phone"]');
        e.mask("+7(999)-999-99-99"), e.on("focus", function() {
            this.selectionStart = 0
        }), e.on("blur", function() {
            let e = $(this).val().substr($(this).val().indexOf("-") + 1);
            var t, n, i;
            5 == e.length && (t = $(this).val().substr($(this).val().indexOf("-") + 1, 1), n = e.substr(1, 4), i = $(this).val().substr(0, 9), $(this).val(i + t + "-" + n))
        })
    }
};
maskedInput.init(),
    function() {
        const n = {
            init() {
                $("[data-target]").on("click", function(e) {
                    e.preventDefault(), $(".popup").removeClass("popup--show"), $(".shutter").addClass("active");
                    e = $(this).attr("data-target");
                    $(`#${e}`).addClass("popup--show"), $('[role="exit"]').addClass("fadeIn"), $("html").addClass("noOverflow")
                }), $('[role="exit"]').on("click", function(e) {
                    e.preventDefault(), n.exit()
                }), $(".shutter").on("click", function(e) {
                    e.preventDefault(), n.exit()
                }), $(document).mouseup(function(e) {
                    let t = $(".popup__box");
                    t.is(e.target) || 0 !== t.has(e.target).length || n.exit()
                })
            },
            run(e) {
                $(".popup").removeClass("popup--show"), $(`#${e}`).addClass("popup--show"), $('[role="exit"]').addClass("fadeIn"), $("html").addClass("noOverflow")
            },
            exit() {
                $(".popup").removeClass("popup--show"), $('[role="exit"]').removeClass("fadeIn"), $(".shutter").removeClass("active"), $("html").removeClass("noOverflow")
            }
        };
        n.init();
        const i = {
            getName() {
                $("button.card__costBtn, .presentation__btn").on("click", function() {
                    var e = $(this).attr("data-car"),
                        t = $(this).attr("data-link");
                    i.setName(e, t)
                })
            },
            setName(e, t) {
                $("#popupRent").find(".popup__title span").text(e), $('[name="model"]').val(e), $('[name="url"]').val(t)
            },
            init() {
                this.getName()
            }
        };
        i.init()
    }();
const customSelect = {
    init() {
        for (var e, t, n, i, o, r = document.getElementsByClassName("custom-select"), s = 0; s < r.length; s++) {
            for (t = r[s].getElementsByTagName("select")[0], (n = document.createElement("DIV")).setAttribute("class", "select-selected"), n.innerHTML = t.options[t.selectedIndex].innerHTML, r[s].appendChild(n), (i = document.createElement("DIV")).setAttribute("class", "select-items select-hide"), e = 1; e < t.length; e++)(o = document.createElement("DIV")).innerHTML = t.options[e].innerHTML, o.addEventListener("click", function(e) {
                for (var t, n, i = this.parentNode.parentNode.getElementsByTagName("select")[0], o = this.parentNode.previousSibling, r = 0; r < i.length; r++)
                    if (i.options[r].innerHTML == this.innerHTML) {
                        for (i.selectedIndex = r, o.innerHTML = this.innerHTML, t = this.parentNode.getElementsByClassName("same-as-selected"), n = 0; n < t.length; n++) t[n].removeAttribute("class");
                        this.setAttribute("class", "same-as-selected");
                        break
                    }
                o.click()
            }), i.appendChild(o);
            r[s].appendChild(i), n.addEventListener("click", function(e) {
                e.stopPropagation(), a(this), this.nextSibling.classList.toggle("select-hide"), this.classList.toggle("select-arrow-active")
            })
        }

        function a(e) {
            for (var t = [], n = document.getElementsByClassName("select-items"), i = document.getElementsByClassName("select-selected"), o = 0; o < i.length; o++) e == i[o] ? t.push(o) : i[o].classList.remove("select-arrow-active");
            for (o = 0; o < n.length; o++) t.indexOf(o) && n[o].classList.add("select-hide")
        }
        document.addEventListener("click", a)
    }
};
customSelect.init(),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(d) {
        "use strict";
        var i, s = window.Slick || {};
        i = 0, (s = function(e, t) {
            var n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: d(e),
                appendDots: d(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return d('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, d.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = d(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, e = d(e).data("slick") || {}, n.options = d.extend({}, n.defaults, t, e), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = d.proxy(n.autoPlay, n), n.autoPlayClear = d.proxy(n.autoPlayClear, n), n.autoPlayIterator = d.proxy(n.autoPlayIterator, n), n.changeSlide = d.proxy(n.changeSlide, n), n.clickHandler = d.proxy(n.clickHandler, n), n.selectHandler = d.proxy(n.selectHandler, n), n.setPosition = d.proxy(n.setPosition, n), n.swipeHandler = d.proxy(n.swipeHandler, n), n.dragHandler = d.proxy(n.dragHandler, n), n.keyHandler = d.proxy(n.keyHandler, n), n.instanceUid = i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
            var i = this;
            if ("boolean" == typeof t) n = t, t = null;
            else if (t < 0 || t >= i.slideCount) return !1;
            i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? d(e).appendTo(i.$slideTrack) : n ? d(e).insertBefore(i.$slides.eq(t)) : d(e).insertAfter(i.$slides.eq(t)) : !0 === n ? d(e).prependTo(i.$slideTrack) : d(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(e, t) {
                d(t).attr("data-slick-index", e)
            }), i.$slidesCache = i.$slides, i.reinit()
        }, s.prototype.animateHeight = function() {
            var e, t = this;
            1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.animate({
                height: e
            }, t.options.speed))
        }, s.prototype.animateSlide = function(e, t) {
            var n = {},
                i = this;
            i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
                left: e
            }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
                top: e
            }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), d({
                animStart: i.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: i.options.speed,
                easing: i.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
                },
                complete: function() {
                    t && t.call()
                }
            })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function() {
                i.disableTransition(), t.call()
            }, i.options.speed))
        }, s.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e = e && null !== e ? d(e).not(this.$slider) : e
        }, s.prototype.asNavFor = function(t) {
            var e = this.getNavTarget();
            null !== e && "object" == typeof e && e.each(function() {
                var e = d(this).slick("getSlick");
                e.unslicked || e.slideHandler(t, !0)
            })
        }, s.prototype.applyTransition = function(e) {
            var t = this,
                n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(n)
        }, s.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, s.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, s.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, s.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, s.prototype.buildDots = function() {
            var e, t, n = this;
            if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), t = d("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(d("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
            }
        }, s.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                d(t).attr("data-slick-index", e).data("originalStyling", d(t).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? d('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), d("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, s.prototype.buildRows = function() {
            var e, t, n, i = this,
                o = document.createDocumentFragment(),
                r = i.$slider.children();
            if (0 < i.options.rows) {
                for (n = i.options.slidesPerRow * i.options.rows, t = Math.ceil(r.length / n), e = 0; e < t; e++) {
                    for (var s = document.createElement("div"), a = 0; a < i.options.rows; a++) {
                        for (var l = document.createElement("div"), d = 0; d < i.options.slidesPerRow; d++) {
                            var c = e * n + (a * i.options.slidesPerRow + d);
                            r.get(c) && l.appendChild(r.get(c))
                        }
                        s.appendChild(l)
                    }
                    o.appendChild(s)
                }
                i.$slider.empty().append(o), i.$slider.children().children().children().css({
                    width: 100 / i.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, s.prototype.checkResponsive = function(e, t) {
            var n, i, o, r = this,
                s = !1,
                a = r.$slider.width(),
                l = window.innerWidth || d(window).width();
            if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
                null !== i ? null !== r.activeBreakpoint && i === r.activeBreakpoint && !t || (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = d.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = i), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
            }
        }, s.prototype.changeSlide = function(e, t) {
            var n, i = this,
                o = d(e.currentTarget);
            switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), n = i.slideCount % i.options.slidesToScroll != 0 ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll, e.data.message) {
                case "previous":
                    r = 0 == n ? i.options.slidesToScroll : i.options.slidesToShow - n, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - r, !1, t);
                    break;
                case "next":
                    r = 0 == n ? i.options.slidesToScroll : n, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + r, !1, t);
                    break;
                case "index":
                    var r = 0 === e.data.index ? 0 : e.data.index || o.index() * i.options.slidesToScroll;
                    i.slideHandler(i.checkNavigable(r), !1, t), o.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, s.prototype.checkNavigable = function(e) {
            var t = this.getNavigableIndexes(),
                n = 0;
            if (e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var i in t) {
                    if (e < t[i]) {
                        e = n;
                        break
                    }
                    n = t[i]
                }
            return e
        }, s.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (d("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", d.proxy(e.interrupt, e, !0)).off("mouseleave.slick", d.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), d(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().off("click.slick", e.selectHandler), d(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), d(window).off("resize.slick.slick-" + e.instanceUid, e.resize), d("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, s.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, s.prototype.cleanUpRows = function() {
            var e;
            0 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, s.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, s.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), d(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                d(this).attr("style", d(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
        }, s.prototype.disableTransition = function(e) {
            var t = {};
            t[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
        }, s.prototype.fadeSlide = function(e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(e).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), t && setTimeout(function() {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, s.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, s.prototype.focusHandler = function() {
            var n = this;
            n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
                e.stopImmediatePropagation();
                var t = d(this);
                setTimeout(function() {
                    n.options.pauseOnFocus && (n.focussed = t.is(":focus"), n.autoPlay())
                }, 0)
            })
        }, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, s.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++i;
                else
                    for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) i = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return i - 1
        }, s.prototype.getLeft = function(e) {
            var t, n, i = this,
                o = 0;
            return i.slideOffset = 0, t = i.$slides.first().outerHeight(!0), !0 === i.options.infinite ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, n = -1, !0 === i.options.vertical && !0 === i.options.centerMode && (2 === i.options.slidesToShow ? n = -1.5 : 1 === i.options.slidesToShow && (n = -2)), o = t * i.options.slidesToShow * n), i.slideCount % i.options.slidesToScroll != 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (o = e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1, (i.options.slidesToShow - (e - i.slideCount)) * t * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1, i.slideCount % i.options.slidesToScroll * t * -1))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth, o = (e + i.options.slidesToShow - i.slideCount) * t), i.slideCount <= i.options.slidesToShow && (o = i.slideOffset = 0), !0 === i.options.centerMode && i.slideCount <= i.options.slidesToShow ? i.slideOffset = i.slideWidth * Math.floor(i.options.slidesToShow) / 2 - i.slideWidth * i.slideCount / 2 : !0 === i.options.centerMode && !0 === i.options.infinite ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : !0 === i.options.centerMode && (i.slideOffset = 0, i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)), t = !1 === i.options.vertical ? e * i.slideWidth * -1 + i.slideOffset : e * t * -1 + o, !0 === i.options.variableWidth && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow), t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === i.options.centerMode && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1), t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (i.$list.width() - o.outerWidth()) / 2)), t
        }, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, s.prototype.getNavigableIndexes = function() {
            for (var e = this, t = 0, n = 0, i = [], o = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < o;) i.push(t), t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return i
        }, s.prototype.getSlick = function() {
            return this
        }, s.prototype.getSlideCount = function() {
            var n, i = this,
                o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0;
            return !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(e, t) {
                if (t.offsetLeft - o + d(t).outerWidth() / 2 > -1 * i.swipeLeft) return n = t, !1
            }), Math.abs(d(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, s.prototype.init = function(e) {
            var t = this;
            d(t.$slider).hasClass("slick-initialized") || (d(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, s.prototype.initADA = function() {
            var n = this,
                i = Math.ceil(n.slideCount / n.options.slidesToShow),
                o = n.getNavigableIndexes().filter(function(e) {
                    return 0 <= e && e < n.slideCount
                });
            n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
                var t = o.indexOf(e);
                d(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + n.instanceUid + e,
                    tabindex: -1
                }), -1 !== t && (t = "slick-slide-control" + n.instanceUid + t, d("#" + t).length && d(this).attr({
                    "aria-describedby": t
                }))
            }), n.$dots.attr("role", "tablist").find("li").each(function(e) {
                var t = o[e];
                d(this).attr({
                    role: "presentation"
                }), d(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + n.instanceUid + e,
                    "aria-controls": "slick-slide" + n.instanceUid + t,
                    "aria-label": e + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(n.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.options.focusOnChange ? n.$slides.eq(e).attr({
                tabindex: "0"
            }) : n.$slides.eq(e).removeAttr("tabindex");
            n.activateADA()
        }, s.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, s.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (d("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && d("li", e.$dots).on("mouseenter.slick", d.proxy(e.interrupt, e, !0)).on("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, s.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", d.proxy(e.interrupt, e, !1)))
        }, s.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), d(document).on(e.visibilityChange, d.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), d(window).on("orientationchange.slick.slick-" + e.instanceUid, d.proxy(e.orientationChange, e)), d(window).on("resize.slick.slick-" + e.instanceUid, d.proxy(e.resize, e)), d("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), d(e.setPosition)
        }, s.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, s.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, s.prototype.lazyLoad = function() {
            var e, t, n, r = this;

            function i(e) {
                d("img[data-lazy]", e).each(function() {
                    var e = d(this),
                        t = d(this).attr("data-lazy"),
                        n = d(this).attr("data-srcset"),
                        i = d(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, e, t])
                        })
                    }, o.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                    }, o.src = t
                })
            }
            if (!0 === r.options.centerMode ? n = !0 === r.options.infinite ? (t = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (t = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (t = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(t + r.options.slidesToShow), !0 === r.options.fade && (0 < t && t--, n <= r.slideCount && n++)), e = r.$slider.find(".slick-slide").slice(t, n), "anticipated" === r.options.lazyLoad)
                for (var o = t - 1, s = n, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), e = (e = e.add(a.eq(o))).add(a.eq(s)), o--, s++;
            i(e), r.slideCount <= r.options.slidesToShow ? i(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? i(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && i(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
        }, s.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, s.prototype.next = s.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, s.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, s.prototype.pause = s.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, s.prototype.play = s.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, s.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && d(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
        }, s.prototype.prev = s.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, s.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, s.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, n, i, o, r = this,
                s = d("img[data-lazy]", r.$slider);
            s.length ? (t = s.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
                i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, n]), r.progressiveLazyLoad()
            }, s.onerror = function() {
                e < 3 ? setTimeout(function() {
                    r.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]), r.progressiveLazyLoad())
            }, s.src = n) : r.$slider.trigger("allImagesLoaded", [r])
        }, s.prototype.refresh = function(e) {
            var t = this,
                n = t.slideCount - t.options.slidesToShow;
            !t.options.infinite && t.currentSlide > n && (t.currentSlide = n), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), n = t.currentSlide, t.destroy(!0), d.extend(t, t.initials, {
                currentSlide: n
            }), t.init(), e || t.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, s.prototype.registerBreakpoints = function() {
            var e, t, n, i = this,
                o = i.options.responsive || null;
            if ("array" === d.type(o) && o.length) {
                for (e in i.respondTo = i.options.respondTo || "window", o)
                    if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
                        for (t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                        i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
                    }
                i.breakpoints.sort(function(e, t) {
                    return i.options.mobileFirst ? e - t : t - e
                })
            }
        }, s.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, s.prototype.resize = function() {
            var e = this;
            d(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = d(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
            var i = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
            i.unload(), (!0 === n ? i.$slideTrack.children() : i.$slideTrack.children(this.options.slide).eq(e)).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, s.prototype.setCSS = function(e) {
            var t, n, i = this,
                o = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
        }, s.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, s.prototype.setFade = function() {
            var n, i = this;
            i.$slides.each(function(e, t) {
                n = i.slideWidth * e * -1, !0 === i.options.rtl ? d(t).css({
                    position: "relative",
                    right: n,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : d(t).css({
                    position: "relative",
                    left: n,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, s.prototype.setHeight = function() {
            var e, t = this;
            1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.css("height", e))
        }, s.prototype.setOption = s.prototype.slickSetOption = function() {
            var e, t, n, i, o, r = this,
                s = !1;
            if ("object" === d.type(arguments[0]) ? (n = arguments[0], s = arguments[1], o = "multiple") : "string" === d.type(arguments[0]) && (n = arguments[0], i = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === d.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = i;
            else if ("multiple" === o) d.each(n, function(e, t) {
                r.options[e] = t
            });
            else if ("responsive" === o)
                for (t in i)
                    if ("array" !== d.type(r.options.responsive)) r.options.responsive = [i[t]];
                    else {
                        for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(i[t])
                    }
            s && (r.unload(), r.reinit())
        }, s.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, s.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, s.prototype.setSlideClasses = function(e) {
            var t, n, i, o = this,
                r = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
            o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode ? (n = o.options.slidesToShow % 2 == 0 ? 1 : 0, i = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (i <= e && e <= o.slideCount - 1 - i ? o.$slides.slice(e - i + n, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (t = o.options.slidesToShow + e, r.slice(t - i + 1 + n, t + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? r.eq(r.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && r.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : r.length <= o.options.slidesToShow ? r.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow, t = !0 === o.options.infinite ? o.options.slidesToShow + e : e, (o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? r.slice(t - (o.options.slidesToShow - i), t + i) : r.slice(t, t + o.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
        }, s.prototype.setupInfinite = function() {
            var e, t, n, i = this;
            if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
                for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; --e) d(i.$slides[t = e - 1]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n + i.slideCount; e += 1) t = e, d(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
                i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    d(this).attr("id", "")
                })
            }
        }, s.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, s.prototype.selectHandler = function(e) {
            e = d(e.target).is(".slick-slide") ? d(e.target) : d(e.target).parents(".slick-slide"), e = parseInt(e.attr("data-slick-index")) || 0;
            this.slideCount <= this.options.slidesToShow ? this.slideHandler(e, !1, !0) : this.slideHandler(e)
        }, s.prototype.slideHandler = function(e, t, n) {
            var i, o, r, s, a = this;
            if (t = t || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === e))
                if (!1 === t && a.asNavFor(e), i = e, r = a.getLeft(i), t = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? t : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (e < 0 || e > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (i = a.currentSlide, !0 !== n && a.slideCount > a.options.slidesToShow ? a.animateSlide(t, function() {
                    a.postSlide(i)
                }) : a.postSlide(i));
                else if (!1 === a.options.infinite && !0 === a.options.centerMode && (e < 0 || e > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (i = a.currentSlide, !0 !== n && a.slideCount > a.options.slidesToShow ? a.animateSlide(t, function() {
                a.postSlide(i)
            }) : a.postSlide(i));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer), o = i < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + i : i >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : i - a.slideCount : i, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, o]), t = a.currentSlide, a.currentSlide = o, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (s = (s = a.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== n ? (a.fadeSlideOut(t), a.fadeSlide(o, function() {
                    a.postSlide(o)
                })) : a.postSlide(o), void a.animateHeight();
                !0 !== n && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o)
            }
        }, s.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, s.prototype.swipeDirection = function() {
            var e = this,
                t = e.touchObject.startX - e.touchObject.curX,
                n = e.touchObject.startY - e.touchObject.curY,
                t = Math.atan2(n, t),
                t = Math.round(180 * t / Math.PI);
            return (t = t < 0 ? 360 - Math.abs(t) : t) <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === e.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
        }, s.prototype.swipeEnd = function(e) {
            var t, n, i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
            if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, s.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, s.prototype.swipeMove = function(e) {
            var t, n, i = this,
                o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
            return !(!i.dragging || i.scrolling || o && 1 !== o.length) && (t = i.getLeft(i.currentSlide), i.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, i.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))), n = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2))), !i.options.verticalSwiping && !i.swiping && 4 < n ? !(i.scrolling = !0) : (!0 === i.options.verticalSwiping && (i.touchObject.swipeLength = n), o = i.swipeDirection(), void 0 !== e.originalEvent && 4 < i.touchObject.swipeLength && (i.swiping = !0, e.preventDefault()), n = (!1 === i.options.rtl ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1), !0 === i.options.verticalSwiping && (n = i.touchObject.curY > i.touchObject.startY ? 1 : -1), e = i.touchObject.swipeLength, (i.touchObject.edgeHit = !1) === i.options.infinite && (0 === i.currentSlide && "right" === o || i.currentSlide >= i.getDotCount() && "left" === o) && (e = i.touchObject.swipeLength * i.options.edgeFriction, i.touchObject.edgeHit = !0), !1 === i.options.vertical ? i.swipeLeft = t + e * n : i.swipeLeft = t + e * (i.$list.height() / i.listWidth) * n, !0 === i.options.verticalSwiping && (i.swipeLeft = t + e * n), !0 !== i.options.fade && !1 !== i.options.touchMove && (!0 === i.animating ? (i.swipeLeft = null, !1) : void i.setCSS(i.swipeLeft))))
        }, s.prototype.swipeStart = function(e) {
            var t, n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
        }, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, s.prototype.unload = function() {
            var e = this;
            d(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, s.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, s.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2);
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, s.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, s.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, d.fn.slick = function() {
            for (var e, t = this, n = arguments[0], i = Array.prototype.slice.call(arguments, 1), o = t.length, r = 0; r < o; r++)
                if ("object" == typeof n || void 0 === n ? t[r].slick = new s(t[r], n) : e = t[r].slick[n].apply(t[r].slick, i), void 0 !== e) return e;
            return t
        }
    }),
    function() {
        let i = Array.from(document.querySelectorAll(".banner__tabsLink")),
            o = Array.from(document.querySelectorAll(".banner__tabsContent"));
        var e;
        i && (i.forEach((t, n) => {
            t.addEventListener("click", e => {
                e.preventDefault(), this.i = n, i.forEach(e => {
                    e.classList.remove("banner__tabsLink--active")
                }), t.classList.add("banner__tabsLink--active"), o.forEach(e => {
                    e.classList.remove("banner__tabsContent--show")
                }), o[this.i].classList.add("banner__tabsContent--show")
            })
        }), e = $(".banner__tabsList").find(".banner__tabsLink--active").parent().index(), $(".banner__tabsContainer").find(".banner__tabsContent").removeClass("banner__tabsContent--show"), $(".banner__tabsContainer").eq(e + 1).find(".banner__tabsContent").addClass("banner__tabsContent--show"))
    }(), $("#map").length && ymaps.ready(function() {
        var e = document.getElementById("map").getAttribute("data-icon"),
            t = document.getElementById("map").getAttribute("data-x"),
            n = document.getElementById("map").getAttribute("data-y");
        let i = new ymaps.Map("map", {
                center: [t, n],
                zoom: 15
            }, {
                searchControlProvider: "yandex#search"
            }),
            o = (ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'), new ymaps.Placemark(i.getCenter(), {
                hintContent: "Собственный значок метки",
                balloonContent: "Это красивая метка"
            }, {
                iconLayout: "default#image",
                iconImageHref: e,
                iconImageSize: [30, 42],
                iconImageOffset: [-5, -38]
            }));
        i.geoObjects.add(o)
    });