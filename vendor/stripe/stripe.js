!(function(n) {
  var r = {};
  function o(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = n),
    (o.c = r),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          o.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 4));
})([
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var r = function(e, t) {
      throw new Error(1 < arguments.length && void 0 !== t ? t : "absurd");
    };
  },
  function(e, t, n) {
    "use strict";
    var c = n(5);
    e.exports = c;
    var r = l(!0),
      o = l(!1),
      i = l(null),
      a = l(void 0),
      s = l(0),
      u = l("");
    function l(e) {
      var t = new c(c._61);
      return (t._81 = 1), (t._65 = e), t;
    }
    (c.resolve = function(e) {
      if (e instanceof c) return e;
      if (null === e) return i;
      if (void 0 === e) return a;
      if (!0 === e) return r;
      if (!1 === e) return o;
      if (0 === e) return s;
      if ("" === e) return u;
      if ("object" == typeof e || "function" == typeof e)
        try {
          var t = e.then;
          if ("function" == typeof t) return new c(t.bind(e));
        } catch (n) {
          return new c(function(e, t) {
            t(n);
          });
        }
      return l(e);
    }),
      (c.all = function(e) {
        var s = Array.prototype.slice.call(e);
        return new c(function(o, i) {
          if (0 === s.length) return o([]);
          var a = s.length;
          for (var e = 0; e < s.length; e++)
            !(function t(n, e) {
              if (e && ("object" == typeof e || "function" == typeof e)) {
                if (e instanceof c && e.then === c.prototype.then) {
                  for (; 3 === e._81; ) e = e._65;
                  return 1 === e._81
                    ? t(n, e._65)
                    : (2 === e._81 && i(e._65),
                      void e.then(function(e) {
                        t(n, e);
                      }, i));
                }
                var r = e.then;
                if ("function" == typeof r)
                  return void new c(r.bind(e)).then(function(e) {
                    t(n, e);
                  }, i);
              }
              (s[n] = e), 0 == --a && o(s);
            })(e, s[e]);
        });
      }),
      (c.reject = function(n) {
        return new c(function(e, t) {
          t(n);
        });
      }),
      (c.race = function(e) {
        return new c(function(t, n) {
          e.forEach(function(e) {
            c.resolve(e).then(t, n);
          });
        });
      }),
      (c.prototype.catch = function(e) {
        return this.then(null, e);
      });
  },
  function(t, n, e) {
    var r;
    !(function() {
      "use strict";
      var e = (function() {
        function a() {}
        function s(e, t) {
          for (var n = t.length, r = 0; r < n; ++r)
            !(function(e, t) {
              if (!t) return;
              var n = typeof t;
              "string" == n
                ? (function(e, t) {
                    for (var n = t.split(i), r = n.length, o = 0; o < r; ++o)
                      e[n[o]] = !0;
                  })(e, t)
                : Array.isArray(t)
                ? s(e, t)
                : "object" == n
                ? (function(e, t) {
                    for (var n in t) o.call(t, n) && (e[n] = !!t[n]);
                  })(e, t)
                : "number" == n && (e[t] = !0);
            })(e, t[r]);
        }
        a.prototype = Object.create(null);
        var o = {}.hasOwnProperty;
        var i = /\s+/;
        return function() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = new a();
          s(r, t);
          var o,
            i = [];
          for (o in r) r[o] && i.push(o);
          return i.join(" ");
        };
      })();
      t.exports
        ? (t.exports = e)
        : void 0 ===
            (r = function() {
              return e;
            }.apply(n, [])) || (t.exports = r);
    })();
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        "_" +
        e
          .split("")
          .map(function(e) {
            return e.charCodeAt(0);
          })
          .reduce(function(e, t) {
            return ((e << 5) - e + t) & ((e << 5) - e + t);
          }, 0)
          .toString()
          .replace(/[-.]/g, "_")
      );
    };
  },
  function(e, t, n) {
    e.exports = n(13);
  },
  function(e, t, n) {
    "use strict";
    var o = n(6);
    function a() {}
    var i = null,
      s = {};
    function c(e) {
      if ("object" != typeof this)
        throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof e) throw new TypeError("not a function");
      (this._45 = 0),
        (this._81 = 0),
        (this._65 = null),
        (this._54 = null),
        e !== a && f(e, this);
    }
    function u(e, t) {
      for (; 3 === e._81; ) e = e._65;
      if ((c._10 && c._10(e), 0 === e._81))
        return 0 === e._45
          ? ((e._45 = 1), void (e._54 = t))
          : 1 === e._45
          ? ((e._45 = 2), void (e._54 = [e._54, t]))
          : void e._54.push(t);
      var n, r;
      (n = e),
        (r = t),
        o(function() {
          var e,
            t = 1 === n._81 ? r.onFulfilled : r.onRejected;
          null !== t
            ? (e = (function(e, t) {
                try {
                  return e(t);
                } catch (e) {
                  return (i = e), s;
                }
              })(t, n._65)) === s
              ? p(r.promise, i)
              : l(r.promise, e)
            : (1 === n._81 ? l : p)(r.promise, n._65);
        });
    }
    function l(e, t) {
      if (t === e)
        return (
          p(e, new TypeError("A promise cannot be resolved with itself.")), 0
        );
      if (t && ("object" == typeof t || "function" == typeof t)) {
        var n = (function(e) {
          try {
            return e.then;
          } catch (e) {
            return (i = e), s;
          }
        })(t);
        if (n === s) return p(e, i), 0;
        if (n === e.then && t instanceof c)
          return (e._81 = 3), (e._65 = t), void r(e);
        if ("function" == typeof n) return void f(n.bind(t), e);
      }
      (e._81 = 1), (e._65 = t), r(e);
    }
    function p(e, t) {
      (e._81 = 2), (e._65 = t), c._97 && c._97(e, t), r(e);
    }
    function r(e) {
      if ((1 === e._45 && (u(e, e._54), (e._54 = null)), 2 === e._45)) {
        for (var t = 0; t < e._54.length; t++) u(e, e._54[t]);
        e._54 = null;
      }
    }
    function d(e, t, n) {
      (this.onFulfilled = "function" == typeof e ? e : null),
        (this.onRejected = "function" == typeof t ? t : null),
        (this.promise = n);
    }
    function f(e, t) {
      var n = !1,
        r = (function(e, t, n) {
          try {
            e(t, n);
          } catch (e) {
            return (i = e), s;
          }
        })(
          e,
          function(e) {
            n || ((n = !0), l(t, e));
          },
          function(e) {
            n || ((n = !0), p(t, e));
          }
        );
      n || r !== s || ((n = !0), p(t, i));
    }
    ((e.exports = c)._10 = null),
      (c._97 = null),
      (c._61 = a),
      (c.prototype.then = function(e, t) {
        if (this.constructor !== c)
          return (
            (o = e),
            (i = t),
            new (r = this).constructor(function(e, t) {
              var n = new c(a);
              n.then(e, t), u(r, new d(o, i, n));
            })
          );
        var r,
          o,
          i,
          n = new c(a);
        return u(this, new d(e, t, n)), n;
      });
  },
  function(d, e, t) {
    "use strict";
    (function(e) {
      function t(e) {
        r.length || (n(), 0), (r[r.length] = e);
      }
      d.exports = t;
      var n,
        r = [],
        o = 0;
      function i() {
        for (; o < r.length; ) {
          var e = o;
          if (((o += 1), r[e].call(), 1024 < o)) {
            for (var t = 0, n = r.length - o; t < n; t++) r[t] = r[t + o];
            (r.length -= o), (o = 0);
          }
        }
        (r.length = 0), (o = 0), 0;
      }
      var a,
        s,
        c,
        u = void 0 !== e ? e : self,
        l = u.MutationObserver || u.WebKitMutationObserver;
      function p(r) {
        return function() {
          var e = setTimeout(n, 0),
            t = setInterval(n, 50);
          function n() {
            clearTimeout(e), clearInterval(t), r();
          }
        };
      }
      (n =
        "function" == typeof l
          ? ((a = 1),
            (s = new l(i)),
            (c = document.createTextNode("")),
            s.observe(c, { characterData: !0 }),
            function() {
              (a = -a), (c.data = a);
            })
          : p(i)),
        (t.requestFlush = n),
        (t.makeRequestCallFromTimer = p);
    }.call(this, t(7)));
  },
  function(e, t) {
    var n = (function() {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t) {},
  ,
  ,
  ,
  ,
  function(e, t, n) {
    "use strict";
    function r(e) {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, r);
      var t = (function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
      return (
        window.__stripeElementsController &&
          window.__stripeElementsController.reportIntegrationError(e),
        (t.name = "IntegrationError"),
        Object.defineProperty(t, "message", {
          value: t.message,
          enumerable: !0
        }),
        t
      );
    }
    n.r(t);
    var S = ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(r, Error),
      r),
      m = n(0),
      o = n(1),
      i = n.n(o),
      E = window.Promise ? Promise : i.a,
      a = function(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
      };
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var c = Date.now
        ? function() {
            return Date.now();
          }
        : function() {
            return new Date().getTime();
          },
      u = c(),
      l =
        window.performance && window.performance.now
          ? function() {
              return window.performance.now();
            }
          : function() {
              return c() - u;
            },
      b = (a(
        p,
        [
          {
            key: "getAsPosixTime",
            value: function() {
              return c() - this.getElapsedTime();
            }
          },
          {
            key: "getElapsedTime",
            value: function(e) {
              return Math.round(
                (e ? e.timestampValue : l()) - this.timestampValue
              );
            }
          },
          {
            key: "valueOf",
            value: function() {
              return Math.round(this.timestampValue);
            }
          }
        ],
        [
          {
            key: "fromPosixTime",
            value: function(e) {
              return new p(e - c() + l());
            }
          }
        ]
      ),
      p);
    function p(e) {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, p),
        (this.timestampValue = null != e ? e : l());
    }
    function w(e, t) {
      for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
    }
    function d(e, t) {
      if (
        "object" !== (void 0 === e ? "undefined" : h(e)) ||
        "object" !== (void 0 === t ? "undefined" : h(t))
      )
        return e === t;
      if (null === e || null === t) return e === t;
      var n = Array.isArray(e);
      if (n !== Array.isArray(t)) return !1;
      var r = Object.prototype.toString.call(e) === _;
      if (r != (Object.prototype.toString.call(t) === _)) return !1;
      if (!r && !n) return !1;
      var o = Object.keys(e),
        i = Object.keys(t);
      if (o.length !== i.length) return !1;
      for (var a = {}, s = 0; s < o.length; s++) a[o[s]] = !0;
      for (var c = 0; c < i.length; c++) a[i[c]] = !0;
      var u = Object.keys(a);
      if (u.length !== o.length) return !1;
      var l = e,
        p = t;
      return u.every(function(e) {
        return d(l[e], p[e]);
      });
    }
    function P(r, o) {
      var i = 0;
      return new E(function e(t) {
        for (var n = new b(); i < r.length && n.getElapsedTime() < 50; )
          o(r[i]), i++;
        i === r.length
          ? t()
          : setTimeout(function() {
              return e(t);
            });
      });
    }
    function f(e, t) {
      return 0 <= e.indexOf(t);
    }
    function g(e) {
      return R.test(e);
    }
    function k(e) {
      if (!g(e)) return null;
      var t = document.createElement("a");
      t.href = e;
      var n = t.protocol,
        r = t.host,
        o = t.pathname,
        i = /:80$/,
        a = /:443$/;
      return (
        "http:" === n && i.test(r)
          ? (r = r.replace(i, ""))
          : "https:" === n && a.test(r) && (r = r.replace(a, "")),
        { host: r, protocol: n, origin: n + "//" + r, path: o }
      );
    }
    var h =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      _ = "[object Object]",
      y = [
        "aed",
        "afn",
        "all",
        "amd",
        "ang",
        "aoa",
        "ars",
        "aud",
        "awg",
        "azn",
        "bam",
        "bbd",
        "bdt",
        "bgn",
        "bhd",
        "bif",
        "bmd",
        "bnd",
        "bob",
        "brl",
        "bsd",
        "btn",
        "bwp",
        "byr",
        "bzd",
        "cad",
        "cdf",
        "chf",
        "clf",
        "clp",
        "cny",
        "cop",
        "crc",
        "cuc",
        "cup",
        "cve",
        "czk",
        "djf",
        "dkk",
        "dop",
        "dzd",
        "egp",
        "ern",
        "etb",
        "eur",
        "fjd",
        "fkp",
        "gbp",
        "gel",
        "ghs",
        "gip",
        "gmd",
        "gnf",
        "gtq",
        "gyd",
        "hkd",
        "hnl",
        "hrk",
        "htg",
        "huf",
        "idr",
        "ils",
        "inr",
        "iqd",
        "irr",
        "isk",
        "jmd",
        "jod",
        "jpy",
        "kes",
        "kgs",
        "khr",
        "kmf",
        "kpw",
        "krw",
        "kwd",
        "kyd",
        "kzt",
        "lak",
        "lbp",
        "lkr",
        "lrd",
        "lsl",
        "ltl",
        "lvl",
        "lyd",
        "mad",
        "mdl",
        "mga",
        "mkd",
        "mmk",
        "mnt",
        "mop",
        "mro",
        "mur",
        "mvr",
        "mwk",
        "mxn",
        "myr",
        "mzn",
        "nad",
        "ngn",
        "nio",
        "nok",
        "npr",
        "nzd",
        "omr",
        "pab",
        "pen",
        "pgk",
        "php",
        "pkr",
        "pln",
        "pyg",
        "qar",
        "ron",
        "rsd",
        "rub",
        "rwf",
        "sar",
        "sbd",
        "scr",
        "sdg",
        "sek",
        "sgd",
        "shp",
        "skk",
        "sll",
        "sos",
        "srd",
        "ssp",
        "std",
        "svc",
        "syp",
        "szl",
        "thb",
        "tjs",
        "tmt",
        "tnd",
        "top",
        "try",
        "ttd",
        "twd",
        "tzs",
        "uah",
        "ugx",
        "usd",
        "uyu",
        "uzs",
        "vef",
        "vnd",
        "vuv",
        "wst",
        "xaf",
        "xag",
        "xau",
        "xcd",
        "xdr",
        "xof",
        "xpf",
        "yer",
        "zar",
        "zmk",
        "zmw",
        "btc",
        "jep",
        "eek",
        "ghc",
        "mtl",
        "tmm",
        "yen",
        "zwd",
        "zwl",
        "zwn",
        "zwr"
      ],
      v = {
        AE: "AE",
        AT: "AT",
        AU: "AU",
        BE: "BE",
        BG: "BG",
        BR: "BR",
        CA: "CA",
        CH: "CH",
        CI: "CI",
        CR: "CR",
        CY: "CY",
        CZ: "CZ",
        DE: "DE",
        DK: "DK",
        DO: "DO",
        EE: "EE",
        ES: "ES",
        FI: "FI",
        FR: "FR",
        GB: "GB",
        GI: "GI",
        GR: "GR",
        GT: "GT",
        HK: "HK",
        HU: "HU",
        ID: "ID",
        IE: "IE",
        IN: "IN",
        IT: "IT",
        JP: "JP",
        LI: "LI",
        LT: "LT",
        LU: "LU",
        LV: "LV",
        MT: "MT",
        MX: "MX",
        MY: "MY",
        NL: "NL",
        NO: "NO",
        NZ: "NZ",
        PE: "PE",
        PH: "PH",
        PL: "PL",
        PT: "PT",
        RO: "RO",
        SE: "SE",
        SG: "SG",
        SI: "SI",
        SK: "SK",
        SN: "SN",
        TH: "TH",
        TT: "TT",
        US: "US",
        UY: "UY"
      },
      O = Object.keys(v),
      A = {
        googlePay: "googlePay",
        applePay: "applePay",
        browserCard: "browserCard"
      },
      T = Object.keys(A),
      I = { live: "live", test: "test", unknown: "unknown" },
      C = function(e) {
        return /^pk_test_/.test(e)
          ? I.test
          : /^pk_live_/.test(e)
          ? I.live
          : I.unknown;
      },
      R = /^(http(s)?):\/\//,
      j =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      N =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function M(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function x(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function L(e, t, n) {
      return (
        "Invalid value for " +
        n.label +
        ": " +
        (n.path.join(".") || "value") +
        " should be " +
        e +
        ". You specified: " +
        t +
        "."
      );
    }
    function D(e, t) {
      return {
        type: "valid",
        value: e,
        warnings: 1 < arguments.length && void 0 !== t ? t : []
      };
    }
    function B(e) {
      return { error: e, errorType: "full", type: "error" };
    }
    function q(e, t, n) {
      var r = new S(L(e, t, n));
      return B(r);
    }
    function F(e, t, n) {
      return {
        expected: e,
        actual: String(t),
        options: n,
        errorType: "mismatch",
        type: "error"
      };
    }
    function U(e, t) {
      return N({}, e, { path: [].concat(x(e.path), [t]) });
    }
    function H(n) {
      return function(e, t) {
        return void 0 === e ? D(e) : n(e, t);
      };
    }
    function G(v, b) {
      return function(e, t) {
        function n(e) {
          var t = e.options.path.join(".") || "value";
          return {
            error: t + " should be " + e.expected,
            actual: t + " as " + e.actual
          };
        }
        function r(e, t, n) {
          return B(
            new S(
              "Invalid value for " + e + ": " + t + ". You specified " + n + "."
            )
          );
        }
        var o = v(e, t),
          i = b(e, t);
        if ("error" !== o.type || "error" !== i.type)
          return "valid" === o.type ? o : i;
        if ("mismatch" === o.errorType && "mismatch" === i.errorType) {
          var a = n(o),
            s = a.error,
            c = a.actual,
            u = n(i),
            l = u.error,
            p = u.actual;
          return r(
            t.label,
            s === l ? s : s + " or " + l,
            c === p ? c : c + " and " + p
          );
        }
        if ("mismatch" === o.errorType) {
          var d = n(o),
            f = d.error,
            m = d.actual;
          return r(t.label, f, m);
        }
        if ("mismatch" !== i.errorType) return B(o.error);
        var h = n(i),
          _ = h.error,
          y = h.actual;
        return r(t.label, _, y);
      };
    }
    function z(o, i) {
      return function(t, e) {
        var n = w(o, function(e) {
          return e === t;
        });
        if (void 0 !== n) return D(n);
        var r = i
          ? "a recognized string."
          : "one of the following strings: " + o.join(", ");
        return F(r, t, e);
      };
    }
    function Y(n) {
      return function(e, t) {
        return "string" == typeof e && 0 === e.indexOf(n)
          ? D(e)
          : F("a string starting with " + n, e, t);
      };
    }
    function W() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return z(t, !1);
    }
    function K() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return z(t, !0);
    }
    function V(e, t) {
      return "string" == typeof e ? D(e) : F("a string", e, t);
    }
    function J(n, r) {
      return function(e, t) {
        return void 0 === e ? D(r()) : n(e, t);
      };
    }
    function $(e, t) {
      return "boolean" == typeof e ? D(e) : F("a boolean", e, t);
    }
    function X(e, t) {
      return "number" == typeof e ? D(e) : F("a number", e, t);
    }
    function Q(n) {
      return function(e, t) {
        return "number" == typeof e && n < e
          ? D(e)
          : F("a number greater than " + n, e, t);
      };
    }
    function Z(n) {
      return function(e, t) {
        return "number" == typeof e && e === parseInt(e, 10) && (!n || 0 <= e)
          ? D(e)
          : F(
              n
                ? "a positive amount in the currency's subunit"
                : "an amount in the currency's subunit",
              e,
              t
            );
      };
    }
    function ee(e, t) {
      return Z(!1)(e, t);
    }
    function te(e, t) {
      return e && "object" === (void 0 === e ? "undefined" : j(e))
        ? D(e)
        : F("an object", e, t);
    }
    function ne(r) {
      return function(e, n) {
        return Array.isArray(e)
          ? e
              .map(function(e, t) {
                return r(e, U(n, String(t)));
              })
              .reduce(function(e, t) {
                return "error" === e.type
                  ? e
                  : "error" === t.type
                  ? t
                  : D(
                      [].concat(x(e.value), [t.value]),
                      [].concat(x(e.warnings), x(t.warnings))
                    );
              }, D([]))
          : F("array", e, n);
      };
    }
    function re(u) {
      return function(c) {
        return function(e, t) {
          if (Array.isArray(e)) {
            var n = c(e, t);
            if ("valid" === n.type)
              for (var r = {}, o = 0; o < n.value.length; o += 1) {
                var i = n.value[o];
                if (
                  "object" === (void 0 === i ? "undefined" : j(i)) &&
                  i &&
                  "string" == typeof i[u]
                ) {
                  var a = i[u],
                    s = "_" + a;
                  if (r[s])
                    return B(
                      new S(
                        "Duplicate value for " +
                          u +
                          ": " +
                          a +
                          ". The property '" +
                          u +
                          "' of '" +
                          t.path.join(".") +
                          "' has to be unique."
                      )
                    );
                  r[s] = !0;
                }
              }
            return n;
          }
          return F("array", e, t);
        };
      };
    }
    function oe(n) {
      return function(e, t) {
        return void 0 === e ? D(void 0) : F("used in " + n + " instead", e, t);
      };
    }
    function ie(s) {
      return function(a) {
        return function(e, r) {
          if (
            !e ||
            "object" !== (void 0 === e ? "undefined" : j(e)) ||
            Array.isArray(e)
          )
            return F("an object", e, r);
          var o = e,
            t = w(Object.keys(o), function(e) {
              return !a[e];
            });
          if (t && s)
            return B(
              new S(
                "Invalid " +
                  r.label +
                  " parameter: " +
                  [].concat(x(r.path), [t]).join(".") +
                  " is not an accepted parameter."
              )
            );
          var n = Object.keys(o),
            i = D({});
          return (
            t &&
              (i = n.reduce(function(e, t) {
                return a[t]
                  ? e
                  : D(
                      e.value,
                      [].concat(x(e.warnings), [
                        "Unrecognized " +
                          r.label +
                          " parameter: " +
                          [].concat(x(r.path), [t]).join(".") +
                          " is not a recognized parameter. This may cause issues with your integration in the future."
                      ])
                    );
              }, i)),
            Object.keys(a).reduce(function(e, t) {
              if ("error" === e.type) return e;
              var n = (0, a[t])(o[t], U(r, t));
              return "valid" === n.type && void 0 !== n.value
                ? D(
                    N({}, e.value, M({}, t, n.value)),
                    [].concat(x(e.warnings), x(n.warnings))
                  )
                : "valid" === n.type
                ? D(e.value, [].concat(x(e.warnings), x(n.warnings)))
                : n;
            }, i)
          );
        };
      };
    }
    function ae(e, t, n, r) {
      var o = r || {},
        i = e(t, {
          authenticatedOrigin: o.authenticatedOrigin || "",
          element: o.element || "",
          label: n,
          path: o.path || []
        });
      return "valid" === i.type || "full" === i.errorType
        ? i
        : {
            type: "error",
            errorType: "full",
            error: new S(L(i.expected, i.actual, i.options))
          };
    }
    function se(e) {
      return "https://js.stripe.com/v3/" + (e || "");
    }
    function ce() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
      return e
        ? (
            parseInt(e, 10) ^
            ((16 * Math.random()) >> (parseInt(e, 10) / 4))
          ).toString(16)
        : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, ce);
    }
    var ue = W.apply(void 0, x(O)),
      le = W.apply(void 0, x(y)),
      pe = W.apply(void 0, x(T)),
      de = (W.apply(void 0, x(Object.keys(I))), ie(!0)),
      fe = ie(!1),
      me = function(e, t, n, r) {
        var o = ae(e, t, n, r);
        switch (o.type) {
          case "valid":
            return { value: o.value, warnings: o.warnings };
          case "error":
            throw o.error;
          default:
            return Object(m.a)(o);
        }
      },
      he = {
        ADDRESS_AUTOCOMPLETE: "ADDRESS_AUTOCOMPLETE",
        CARD_ELEMENT: "CARD_ELEMENT",
        CARD_LIGHT_ELEMENT: "CARD_LIGHT_ELEMENT",
        CONTROLLER: "CONTROLLER",
        METRICS_CONTROLLER: "METRICS_CONTROLLER",
        PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT",
        PAYMENT_REQUEST_BROWSER: "PAYMENT_REQUEST_BROWSER",
        PAYMENT_REQUEST_GOOGLE_PAY: "PAYMENT_REQUEST_GOOGLE_PAY",
        IBAN_ELEMENT: "IBAN_ELEMENT",
        IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT",
        P24_BANK_ELEMENT: "P24_BANK_ELEMENT",
        AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL",
        STRIPE_3DS2_CHALLENGE: "STRIPE_3DS2_CHALLENGE",
        STRIPE_3DS2_FINGERPRINT: "STRIPE_3DS2_FINGERPRINT",
        AU_BANK_ACCOUNT_ELEMENT: "AU_BANK_ACCOUNT_ELEMENT",
        FPX_BANK_ELEMENT: "FPX_BANK_ELEMENT",
        LIGHTBOX_APP: "LIGHTBOX_APP",
        ISSUING_CARD_NUMBER_DISPLAY_ELEMENT:
          "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT",
        ISSUING_CARD_CVC_DISPLAY_ELEMENT: "ISSUING_CARD_CVC_DISPLAY_ELEMENT",
        ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT:
          "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT",
        EPS_BANK_ELEMENT: "EPS_BANK_ELEMENT",
        HCAPTCHA_APP: "HCAPTCHA_APP",
        NETBANKING_BANK_ELEMENT: "NETBANKING_BANK_ELEMENT"
      },
      _e = function(e) {
        switch (e) {
          case "ADDRESS_AUTOCOMPLETE":
            return se(
              "checkout-inner-address-autocomplete-ae2eeaef78bf0a27039f364f44ea4b69.html"
            );
          case "CARD_ELEMENT":
            return se(
              "elements-inner-card-fdb3e42cb2addabbd5dc61c5e57924a7.html"
            );
          case "CARD_LIGHT_ELEMENT":
            return se(
              "elements-inner-card-light-b2839fa3e2b01bb7f16d10f493dd8afd.html"
            );
          case "CONTROLLER":
            return se("controller-6712201e435f520b4d52a20f707e0fd9.html");
          case "METRICS_CONTROLLER":
            return se("m-outer-fb16f0f3145bb8d1f62f5d3386329cba.html");
          case "PAYMENT_REQUEST_ELEMENT":
            return se(
              "elements-inner-payment-request-e33a0d56a5f1b31d9ea25f3b23dc6cd6.html"
            );
          case "PAYMENT_REQUEST_BROWSER":
            return se(
              "payment-request-inner-browser-fdea329677eac97b937879bc75f3c5b4.html"
            );
          case "PAYMENT_REQUEST_GOOGLE_PAY":
            return se(
              "payment-request-inner-google-pay-cb42381b2f6628612240853314597fbd.html"
            );
          case "IBAN_ELEMENT":
            return se(
              "elements-inner-iban-121b959b94596c88573f442ed82d6b83.html"
            );
          case "IDEAL_BANK_ELEMENT":
            return se(
              "elements-inner-ideal-bank-ef8ff8fcdd2725984288a2edaeecca54.html"
            );
          case "P24_BANK_ELEMENT":
            return se(
              "elements-inner-p24-bank-f21782bc60adabef4e945f8b0e18d9cb.html"
            );
          case "AUTHORIZE_WITH_URL":
            return se(
              "authorize-with-url-inner-ee2199cd82da3b7cc1a93f044b361065.html"
            );
          case "STRIPE_3DS2_CHALLENGE":
            return se(
              "three-ds-2-challenge-7dd6c3a50af71bfb50a7784ea22d2d48.html"
            );
          case "STRIPE_3DS2_FINGERPRINT":
            return se(
              "three-ds-2-fingerprint-dadf96167b8d7d252d9b7add769e6215.html"
            );
          case "AU_BANK_ACCOUNT_ELEMENT":
            return se(
              "elements-inner-au-bank-account-3a48580ef70640b867d4185b7c60c0e9.html"
            );
          case "FPX_BANK_ELEMENT":
            return se(
              "elements-inner-fpx-bank-2c96bce88715040c6e61bee2a81fd5af.html"
            );
          case "LIGHTBOX_APP":
            return se("lightbox-inner-6fa66069c2d6c5a01735e055943f6648.html");
          case "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT":
            return se(
              "elements-inner-issuing-card-number-display-3996616cb8c1afe04f0b4e689762d0f6.html"
            );
          case "ISSUING_CARD_CVC_DISPLAY_ELEMENT":
            return se(
              "elements-inner-issuing-card-cvc-display-50d66112aba52bfa1410ea0ece38a20c.html"
            );
          case "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT":
            return se(
              "elements-inner-issuing-card-expiry-display-1b74f03897bd70a87ecd0ac9422d6a9f.html"
            );
          case "EPS_BANK_ELEMENT":
            return se(
              "elements-inner-eps-bank-a0f56ad077aab5c6138683c0122069d3.html"
            );
          case "HCAPTCHA_APP":
            return se("hcaptcha-inner-aeca57d9f0aacddd27b870b8ab38b2ea.html");
          case "NETBANKING_BANK_ELEMENT":
            return se(
              "elements-inner-netbanking-bank-b0a6d30cf74cc7cba6d236af8855477f.html"
            );
          default:
            return Object(m.a)(e);
        }
      },
      ye = {
        card: "card",
        cardNumber: "cardNumber",
        cardExpiry: "cardExpiry",
        cardCvc: "cardCvc",
        postalCode: "postalCode",
        iban: "iban",
        idealBank: "idealBank",
        p24Bank: "p24Bank",
        paymentRequestButton: "paymentRequestButton",
        auBankAccount: "auBankAccount",
        fpxBank: "fpxBank",
        netbankingBank: "netbankingBank",
        epsBank: "epsBank",
        idealBankSecondary: "idealBankSecondary",
        p24BankSecondary: "p24BankSecondary",
        auBankAccountNumber: "auBankAccountNumber",
        auBsb: "auBsb",
        fpxBankSecondary: "fpxBankSecondary",
        netbankingBankSecondary: "netbankingBankSecondary",
        issuingCardNumberDisplay: "issuingCardNumberDisplay",
        issuingCardCvcDisplay: "issuingCardCvcDisplay",
        issuingCardExpiryDisplay: "issuingCardExpiryDisplay",
        epsBankSecondary: "epsBankSecondary"
      },
      ve = { PAYMENT_INTENT: "PAYMENT_INTENT", SETUP_INTENT: "SETUP_INTENT" },
      be = [ye.card, ye.cardNumber, ye.cardExpiry, ye.cardCvc, ye.postalCode],
      ge = "https://js.stripe.com/v3/",
      we = k(ge),
      Ee = we ? we.origin : "",
      Se = {
        family: "font-family",
        src: "src",
        unicodeRange: "unicode-range",
        style: "font-style",
        variant: "font-variant",
        stretch: "font-stretch",
        weight: "font-weight",
        display: "font-display"
      },
      Pe = Object.keys(Se).reduce(function(e, t) {
        return (e[Se[t]] = t), e;
      }, {}),
      ke = [
        ye.idealBank,
        ye.p24Bank,
        ye.netbankingBank,
        ye.idealBankSecondary,
        ye.p24BankSecondary,
        ye.netbankingBankSecondary,
        ye.fpxBank,
        ye.fpxBankSecondary,
        ye.epsBank,
        ye.epsBankSecondary
      ],
      Oe = ("00" + Math.floor(1e3 * Math.random())).slice(-3),
      Ae = 0,
      Te = function(e) {
        return "" + e + Oe + Ae++;
      },
      Ie =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
    function Ce(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function Re(e, t) {
      var o = {};
      t.forEach(function(e) {
        var t = Fe(e, 2),
          n = t[0],
          r = t[1];
        n.split(/\s+/).forEach(function(e) {
          e && (o[e] = o[e] || r);
        });
      }),
        (e.className = qe()(e.className, o));
    }
    function je(e) {
      try {
        return window.parent.frames[e];
      } catch (e) {
        return null;
      }
    }
    function Ne() {
      if (!document.body)
        throw new S("Stripe.js requires that your page has a <body> element.");
      return document.body;
    }
    function Me(e) {
      var t = e.controllerId,
        n = e.frameId,
        r = e.targetOrigin,
        o = e.type,
        i = r,
        a = void 0;
      "controller" === o
        ? (a = je(n))
        : "group" === o
        ? (a = je(t))
        : "outer" === o || "hosted" === o
        ? (a = window.frames[n])
        : "inner" === o && ((i = i || "*"), (a = window.parent)),
        (i = i || Ee),
        a && a.postMessage(JSON.stringify(Ge({}, e, { __stripeJsV3: !0 })), i);
    }
    function xe(e, t) {
      var n = e._isUserError || "IntegrationError" === e.name;
      throw (t &&
        !n &&
        t.report("fatal.uncaught_error", {
          iframe: !1,
          name: e.name,
          element: "outer",
          message: e.message || e.description,
          fileName: e.fileName,
          lineNumber: e.lineNumber,
          columnNumber: e.columnNumber,
          stack: e.stack && e.stack.substring(0, 1e3)
        }),
      e);
    }
    function Le(r, o) {
      return function(e, t, n) {
        try {
          return r.call(this, e, t, n);
        } catch (e) {
          return xe(e, o || (this && this._controller));
        }
      };
    }
    var De = function o(i, a) {
        var s = [];
        return (
          Object.keys(i).forEach(function(e) {
            var t,
              n = i[e],
              r = a ? a + "[" + e + "]" : e;
            n && "object" === (void 0 === n ? "undefined" : Ie(n))
              ? "" !== (t = o(n, r)) && (s = [].concat(Ce(s), [t]))
              : null != n &&
                (s = [].concat(Ce(s), [
                  r + "=" + encodeURIComponent(String(n))
                ]));
          }),
          s.join("&").replace(/%20/g, "+")
        );
      },
      Be = n(2),
      qe = n.n(Be),
      Fe = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      Ue = function(e, t) {
        e.style.cssText = Object.keys(t)
          .map(function(e) {
            return e + ": " + t[e] + " !important;";
          })
          .join(" ");
      },
      He = {
        border: "none",
        margin: "0",
        padding: "0",
        width: "1px",
        "min-width": "100%",
        overflow: "hidden",
        display: "block",
        visibility: "hidden",
        position: "fixed",
        height: "1px",
        "pointer-events": "none",
        "user-select": "none"
      },
      Ge =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      ze = (n(8),
      function(t, n) {
        return function(e) {
          try {
            return t.call(this, e);
          } catch (e) {
            return xe(e, n || (this && this._controller));
          }
        };
      }),
      Ye = function(n, r) {
        return function(e, t) {
          try {
            return n.call(this, e, t);
          } catch (e) {
            return xe(e, r || (this && this._controller));
          }
        };
      };
    function We() {
      var i = this;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, We),
        (this._emit = function(e) {
          for (
            var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return (
            (i._callbacks[e] || []).forEach(function(e) {
              var t = e.fn;
              if (t._isUserCallback)
                try {
                  t.apply(void 0, n);
                } catch (e) {
                  throw ((e._isUserError = !0), e);
                }
              else t.apply(void 0, n);
            }),
            i
          );
        }),
        (this._once = function(t, n) {
          return i._on(
            t,
            function e() {
              i._off(t, e), n.apply(void 0, arguments);
            },
            n
          );
        }),
        (this._removeAllListeners = function() {
          return (i._callbacks = {}), i;
        }),
        (this._on = function(e, t, n) {
          return (
            (i._callbacks[e] = i._callbacks[e] || []),
            i._callbacks[e].push({ original: n, fn: t }),
            i
          );
        }),
        (this._validateUserOn = function(e, t) {}),
        (this._userOn = function(e, t) {
          if ("string" != typeof e)
            throw new S(
              "When adding an event listener, the first argument should be a string event name."
            );
          if ("function" != typeof t)
            throw new S(
              "When adding an event listener, the second argument should be a function callback."
            );
          return i._validateUserOn(e, t), (t._isUserCallback = !0), i._on(e, t);
        }),
        (this._hasRegisteredListener = function(e) {
          return i._callbacks[e] && 0 < i._callbacks[e].length;
        }),
        (this._off = function(e, t) {
          if (t) {
            for (var n, r = i._callbacks[e], o = 0; o < r.length; o++)
              if ((n = r[o]).fn === t || n.original === t) {
                r.splice(o, 1);
                break;
              }
          } else delete i._callbacks[e];
          return i;
        }),
        (this._callbacks = {});
      var r,
        o,
        e = Ye(this._userOn),
        t = Ye(this._off),
        n = Ye(this._once),
        a = ze(this._hasRegisteredListener),
        s = ze(this._removeAllListeners),
        c = ((r = this._emit),
        function() {
          try {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return r.call.apply(r, [this].concat(t));
          } catch (e) {
            return xe(e, o || (this && this._controller));
          }
        });
      (this.on = this.addListener = this.addEventListener = e),
        (this.off = this.removeListener = this.removeEventListener = t),
        (this.once = n),
        (this.hasRegisteredListener = a),
        (this.removeAllListeners = s),
        (this.emit = c);
    }
    var Ke =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Ve = function(e, t, n) {
        return t && Je(e.prototype, t), n && Je(e, n), e;
      };
    function Je(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function $e(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function Xe(e) {
      var t = e.type,
        n = e.controllerId,
        r = e.listenerRegistry,
        o = e.betas,
        i = e.appParams;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, Xe);
      var a = (function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (Xe.__proto__ || Object.getPrototypeOf(Xe)).call(this));
      return (
        (a._sendFAReq = function(n) {
          var r = Te(n.tag);
          return new E(function(e, t) {
            (a._requests[r] = { resolve: e, reject: t }),
              a._send({
                message: {
                  action: "stripe-frame-action",
                  payload: { nonce: r, faReq: n }
                },
                type: "outer",
                frameId: a.id,
                controllerId: a._controllerId
              });
          });
        }),
        (a.action = {
          perform3DS2Challenge: function(e) {
            return a._sendFAReq({ tag: "PERFORM_3DS2_CHALLENGE", value: e });
          },
          perform3DS2Fingerprint: function(e) {
            return a._sendFAReq({ tag: "PERFORM_3DS2_FINGERPRINT", value: e });
          },
          show3DS2Spinner: function(e) {
            return a._sendFAReq({ tag: "SHOW_3DS2_SPINNER", value: e });
          },
          checkCanMakePayment: function(e) {
            return a._sendFAReq({ tag: "CHECK_CAN_MAKE_PAYMENT", value: e });
          },
          closeLightboxFrame: function(e) {
            return a._sendFAReq({ tag: "CLOSE_LIGHTBOX_FRAME", value: e });
          },
          openLightboxFrame: function(e) {
            return a._sendFAReq({ tag: "OPEN_LIGHTBOX_FRAME", value: e });
          }
        }),
        (a.type = t),
        (a.loaded = !1),
        (a._controllerId = n),
        (a._persistentMessages = []),
        (a._queuedMessages = []),
        (a._requests = {}),
        (a._listenerRegistry = r),
        (a.id = a._generateId()),
        (a._iframe = a._createIFrame(t, o, i)),
        a._on("load", function() {
          (a.loaded = !0),
            a._ensureMounted(),
            a.loaded &&
              (a._persistentMessages.forEach(function(e) {
                return a._send(e);
              }),
              a._queuedMessages.forEach(function(e) {
                return a._send(e);
              }),
              (a._queuedMessages = []));
        }),
        a._on("title", function(e) {
          var t = e.title;
          a._iframe.setAttribute("title", t);
        }),
        a
      );
    }
    var Qe = ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(Xe, We),
      Ve(Xe, [
        {
          key: "_generateId",
          value: function() {
            return Te("__privateStripeFrame");
          }
        },
        {
          key: "send",
          value: function(e) {
            this._send({
              message: e,
              type: "outer",
              frameId: this.id,
              controllerId: this._controllerId
            });
          }
        },
        {
          key: "sendPersistent",
          value: function(e) {
            this._ensureMounted();
            var t = {
              message: e,
              type: "outer",
              frameId: this.id,
              controllerId: this._controllerId
            };
            (this._persistentMessages = [].concat(
              $e(this._persistentMessages),
              [t]
            )),
              this.loaded && Me(t);
          }
        },
        {
          key: "resolve",
          value: function(e, t) {
            this._requests[e] && this._requests[e].resolve(t);
          }
        },
        {
          key: "reject",
          value: function(e, t) {
            this._requests[e] && this._requests[e].reject(t);
          }
        },
        {
          key: "_send",
          value: function(e) {
            this._ensureMounted(),
              this.loaded
                ? Me(e)
                : (this._queuedMessages = [].concat($e(this._queuedMessages), [
                    e
                  ]));
          }
        },
        {
          key: "appendTo",
          value: function(e) {
            this._emit("mount", { anchor: e }), e.appendChild(this._iframe);
          }
        },
        {
          key: "unmount",
          value: function() {
            (this.loaded = !1), this._emit("unload");
          }
        },
        {
          key: "destroy",
          value: function() {
            this.unmount();
            var e = this._iframe.parentElement;
            e && e.removeChild(this._iframe), this._emit("destroy");
          }
        },
        {
          key: "_ensureMounted",
          value: function() {
            this._isMounted() || this.unmount();
          }
        },
        {
          key: "_isMounted",
          value: function() {
            return !!document.body && document.body.contains(this._iframe);
          }
        },
        {
          key: "_createIFrame",
          value: function(e, t, n) {
            var r = window.location.href.toString(),
              o =
                "string" == typeof n
                  ? n
                  : De(
                      Ke({}, n || {}, {
                        referrer: r,
                        controllerId: this._controllerId
                      })
                    ),
              i = document.createElement("iframe");
            return (
              i.setAttribute("frameborder", "0"),
              i.setAttribute("allowTransparency", "true"),
              i.setAttribute("scrolling", "no"),
              i.setAttribute("name", this.id),
              i.setAttribute("allowpaymentrequest", "true"),
              (i.src = _e(e) + (o ? "#" : "") + o),
              i
            );
          }
        }
      ]),
      Xe),
      Ze = function(e, t, n) {
        return t && et(e.prototype, t), n && et(e, n), e;
      };
    function et(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function tt(e, t, n) {
      null === e && (e = Function.prototype);
      var r = Object.getOwnPropertyDescriptor(e, t);
      if (void 0 === r) {
        var o = Object.getPrototypeOf(e);
        return null === o ? void 0 : tt(o, t, n);
      }
      if ("value" in r) return r.value;
      var i = r.get;
      return void 0 !== i ? i.call(n) : void 0;
    }
    function nt(e) {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, nt);
      var t,
        n = (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (nt.__proto__ || Object.getPrototypeOf(nt)).call(this, e));
      return (
        (n.autoload = e.autoload || !1),
        "complete" === document.readyState
          ? n._ensureMounted()
          : ((t = n._ensureMounted.bind(n)),
            n._listenerRegistry.addEventListener(
              document,
              "DOMContentLoaded",
              t
            ),
            n._listenerRegistry.addEventListener(window, "load", t),
            setTimeout(t, 5e3)),
        n
      );
    }
    var rt = ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(nt, Qe),
      Ze(nt, [
        {
          key: "_ensureMounted",
          value: function() {
            tt(
              nt.prototype.__proto__ || Object.getPrototypeOf(nt.prototype),
              "_ensureMounted",
              this
            ).call(this),
              this._isMounted() || this._autoMount();
          }
        },
        {
          key: "_autoMount",
          value: function() {
            var e = document.body;
            if (e) {
              var t =
                document.querySelector("#stripe-hidden-frames-container") || e;
              this.appendTo(t);
            } else if (
              "complete" === document.readyState ||
              "interactive" === document.readyState
            )
              throw new S(
                "Stripe.js requires that your page has a <body> element."
              );
            this.autoload && (this.loaded = !0);
          }
        },
        {
          key: "_createIFrame",
          value: function(e, t, n) {
            var r = tt(
              nt.prototype.__proto__ || Object.getPrototypeOf(nt.prototype),
              "_createIFrame",
              this
            ).call(this, e, t, n);
            return (
              r.setAttribute("aria-hidden", "true"),
              r.setAttribute("allowpaymentrequest", "true"),
              r.setAttribute("tabIndex", "-1"),
              Ue(r, He),
              r
            );
          }
        }
      ]),
      nt),
      ot = function(e, t, n) {
        return t && it(e.prototype, t), n && it(e, n), e;
      };
    function it(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function at() {
      return (
        (function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, at),
        (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(
          this,
          (at.__proto__ || Object.getPrototypeOf(at)).apply(this, arguments)
        )
      );
    }
    function st(e) {
      return /Edge\//i.test(e);
    }
    function ct(e) {
      return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e);
    }
    function ut(e) {
      return /SamsungBrowser/.test(e);
    }
    function lt(e) {
      return /iPad|iPhone/i.test(e) && !ct(e);
    }
    function pt(e) {
      return /^((?!chrome|android).)*safari/i.test(e) && !ut(e);
    }
    function dt(e) {
      return /Android/i.test(e) && !ct(e);
    }
    var ft,
      mt,
      ht,
      _t,
      yt,
      vt = ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(at, rt),
      ot(at, [
        {
          key: "_generateId",
          value: function() {
            return this._controllerId;
          }
        }
      ]),
      at),
      bt = window.navigator.userAgent,
      gt = st(bt),
      wt = (/Edge\/((1[0-6]\.)|0\.)/i.test(bt), ct(bt)),
      Et = (/MSIE ([0-9]{1,}[.0-9]{0,})/i.test(bt), lt(bt)),
      St = (lt((ft = bt)) || dt(ft),
      dt(bt),
      /Android 4\./i.test((mt = bt)) && !/Chrome/i.test(mt) && dt(mt),
      pt(bt)),
      Pt = (pt((ht = bt)) && lt(ht),
      /Firefox\//i.test(bt),
      /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(bt),
      ut(bt)),
      kt = (/Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(bt),
      /AppleWebKit/i.test((_t = bt)) &&
        !/Chrome/i.test(_t) &&
        !st(_t) &&
        !ct(_t)),
      Ot = /Chrome/i.test((yt = bt)) && !st(yt),
      At = (/CriOS/i.test(bt), St && "download" in document.createElement("a")),
      Tt = function(e, t, n) {
        return t && It(e.prototype, t), n && It(e, n), e;
      };
    function It(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var Ct = {
      border: "none",
      margin: "0",
      padding: "0",
      width: "1px",
      "min-width": "100%",
      overflow: "hidden",
      display: "block",
      "user-select": "none",
      "will-change": "transform"
    };
    function Rt() {
      return (
        (function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, Rt),
        (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(
          this,
          (Rt.__proto__ || Object.getPrototypeOf(Rt)).apply(this, arguments)
        )
      );
    }
    function jt(e, t) {
      var n = !1;
      return function() {
        if (n) throw new S(t);
        n = !0;
        try {
          return e.apply(void 0, arguments).then(
            function(e) {
              return (n = !1), e;
            },
            function(e) {
              throw ((n = !1), e);
            }
          );
        } catch (e) {
          throw ((n = !1), e);
        }
      };
    }
    function Nt(e) {
      var t = e;
      return function() {
        t && (t.apply(void 0, arguments), (t = null));
      };
    }
    var Mt = ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(Rt, Qe),
      Tt(Rt, [
        {
          key: "update",
          value: function(e) {
            this.send({ action: "stripe-user-update", payload: e });
          }
        },
        {
          key: "updateStyle",
          value: function(t) {
            var n = this;
            Object.keys(t).forEach(function(e) {
              n._iframe.style[e] = t[e];
            });
          }
        },
        {
          key: "forceRepaint",
          value: function() {
            var e = this._iframe,
              t = e.style.display;
            e.style.display = "none";
            var n = e.offsetHeight;
            return (e.style.display = t), n;
          }
        },
        {
          key: "focus",
          value: function() {
            this.loaded &&
              (St
                ? this._iframe.focus()
                : this.send({ action: "stripe-user-focus", payload: {} }));
          }
        },
        {
          key: "blur",
          value: function() {
            this.loaded &&
              (this._iframe.contentWindow.blur(),
              this._iframe.blur(),
              document.activeElement === this._iframe && window.focus());
          }
        },
        {
          key: "clear",
          value: function() {
            this.send({ action: "stripe-user-clear", payload: {} });
          }
        },
        {
          key: "_createIFrame",
          value: function(e, t, n) {
            var r = (function e(t, n, r) {
              null === t && (t = Function.prototype);
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) return o.value;
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            })(
              Rt.prototype.__proto__ || Object.getPrototypeOf(Rt.prototype),
              "_createIFrame",
              this
            ).call(this, e, t, n);
            return (
              r.setAttribute("title", "Secure payment input frame"),
              Ue(r, Ct),
              r
            );
          }
        }
      ]),
      Rt),
      xt = function(e, t) {
        return e ? window.getComputedStyle(e, t) : null;
      },
      Lt =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    var Dt = {
        display: "block",
        position: "fixed",
        "z-index": "2147483647",
        background: "rgba(40,40,40,0)",
        transition: "background 400ms ease",
        "will-change": "background",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0"
      },
      Bt = Lt({}, Dt, { background: "rgba(40,40,40,0.75)" }),
      qt = function e(t) {
        var w = this,
          n = t.lockScrolling,
          r = t.lockFocus,
          o = t.lockFocusOn,
          i = t.listenerRegistry;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.domElement = document.createElement("div")),
          (this._runOnHide = []),
          (this.mount = function() {
            var e = Ne();
            (w.domElement.style.display = "none"),
              e.contains(w.domElement) ||
                e.insertBefore(w.domElement, e.firstChild);
          }),
          (this.show = function() {
            var e, t, n, r, o, i, a, s, c, u, l, p, d, f, m, h, _, y, v, b, g;
            Ue(w.domElement, Dt),
              w._lockScrolling &&
                ((t = Ne()),
                (n = t.style),
                (r = n.position),
                (o = n.top),
                (i = n.left),
                (a = n.bottom),
                (s = n.right),
                (c = n.overflow),
                (u = document.documentElement
                  ? document.documentElement.style
                  : { overflow: "", scrollBehavior: "" }),
                (l = u.overflow),
                (p = u.scrollBehavior),
                (d = window),
                (f = d.pageXOffset),
                (m = d.pageYOffset),
                (h = document.documentElement
                  ? window.innerWidth - document.documentElement.offsetWidth
                  : 0),
                (_ = document.documentElement
                  ? window.innerHeight - document.documentElement.offsetHeight
                  : 0),
                (t.style.position = "fixed"),
                (t.style.overflow = "hidden"),
                document.documentElement &&
                  ((document.documentElement.style.overflow = "visible"),
                  (document.documentElement.style.scrollBehavior = "auto")),
                (t.style.top = -m + "px"),
                (t.style.left = -f + "px"),
                (t.style.right = h + "px"),
                (t.style.bottom = _ + "px"),
                (e = Nt(function() {
                  (t.style.position = r),
                    (t.style.top = o),
                    (t.style.left = i),
                    (t.style.bottom = a),
                    (t.style.right = s),
                    (t.style.overflow = c),
                    document.documentElement &&
                      (document.documentElement.style.overflow = l),
                    window.scrollTo(f, m),
                    document.documentElement &&
                      (document.documentElement.style.scrollBehavior = p);
                })),
                w._runOnHide.push(e)),
              w._lockFocus &&
                ((v = w._lockFocusOn),
                (b = []),
                (g = P(document.querySelectorAll("*"), function(e) {
                  var t = e.getAttribute("tabindex") || "";
                  v !== e && (e.tabIndex = -1),
                    b.push({ element: e, tabIndex: t });
                })),
                (y = Nt(function() {
                  g.then(function() {
                    return P(b, function(e) {
                      var t = e.element,
                        n = e.tabIndex;
                      "" === n
                        ? t.removeAttribute("tabindex")
                        : t.setAttribute("tabindex", n);
                    });
                  });
                })),
                w._runOnHide.push(y));
          }),
          (this.fadeIn = function() {
            setTimeout(function() {
              Ue(w.domElement, Bt);
            });
          }),
          (this.fadeOut = function() {
            return new E(function(e) {
              Ue(w.domElement, Dt),
                setTimeout(e, 500),
                w._listenerRegistry.addEventListener(
                  w.domElement,
                  "transitionend",
                  e
                );
            }).then(function() {
              for (w.domElement.style.display = "none"; w._runOnHide.length; )
                w._runOnHide.pop()();
            });
          }),
          (this.unmount = function() {
            Ne().removeChild(w.domElement);
          }),
          (this._lockScrolling = !!n),
          (this._lockFocus = !!r),
          (this._lockFocusOn = o || null),
          (this._listenerRegistry = i);
      },
      Ft = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        return void 0 !== a ? a.call(r) : void 0;
      };
    var Ut = {
      position: "absolute",
      left: "0",
      top: "0",
      height: "100%",
      width: "100%"
    };
    function Ht(e) {
      var t = e.type,
        n = e.controllerId,
        r = e.listenerRegistry,
        o = e.options;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, Ht);
      var i = (function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(
        this,
        (Ht.__proto__ || Object.getPrototypeOf(Ht)).call(this, {
          type: t,
          controllerId: n,
          listenerRegistry: r,
          appParams: o
        })
      );
      return (
        (i._autoMount = function() {
          i.appendTo(i._backdrop.domElement), i._backdrop.mount();
        }),
        (i.show = function() {
          i._backdrop.show(), Ue(i._iframe, Ut);
        }),
        (i.fadeInBackdrop = function() {
          i._backdrop.fadeIn();
        }),
        (i._backdropFadeoutPromise = null),
        (i.fadeOutBackdrop = function() {
          return (
            i._backdropFadeoutPromise ||
              (i._backdropFadeoutPromise = i._backdrop.fadeOut()),
            i._backdropFadeoutPromise
          );
        }),
        (i.destroy = function() {
          var e =
              0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = i.fadeOutBackdrop().then(function() {
              i._backdrop.unmount(),
                e ||
                  Ft(
                    Ht.prototype.__proto__ ||
                      Object.getPrototypeOf(Ht.prototype),
                    "destroy",
                    i
                  ).call(i);
            });
          return (
            e &&
              Ft(
                Ht.prototype.__proto__ || Object.getPrototypeOf(Ht.prototype),
                "destroy",
                i
              ).call(i),
            t
          );
        }),
        (i._backdrop = new qt({
          lockScrolling: !0,
          lockFocus: !0,
          lockFocusOn: i._iframe,
          listenerRegistry: r
        })),
        i._autoMount(),
        i
      );
    }
    var Gt = ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(Ht, Qe),
      Ht),
      zt =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Yt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Wt = function(e, t, n) {
        return t && Kt(e.prototype, t), n && Kt(e, n), e;
      };
    function Kt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var Vt = {
      display: "block",
      position: "absolute",
      "z-index": "1000",
      width: "1px",
      "min-width": "100%",
      margin: "2px 0 0 0",
      padding: "0",
      border: "none",
      overflow: "hidden"
    };
    function Jt() {
      return (
        (function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, Jt),
        (function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(
          this,
          (Jt.__proto__ || Object.getPrototypeOf(Jt)).apply(this, arguments)
        )
      );
    }
    function $t(e, t) {
      var n = k(e),
        r = k(t);
      return !(!n || !r) && n.origin === r.origin;
    }
    function Xt(e) {
      var t = e.name,
        n = e.value,
        r = e.expiresIn,
        o = e.path,
        i = e.domain,
        a = new Date(),
        s = r || 31536e6;
      a.setTime(a.getTime() + s);
      var c = o || "/",
        u = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
        l =
          encodeURIComponent(t) +
          "=" +
          u +
          ";expires=" +
          a.toGMTString() +
          ";path=" +
          c +
          ";SameSite=Lax";
      return i && (l += ";domain=" + i), (document.cookie = l);
    }
    function Qt(n) {
      var e = w(document.cookie.split("; "), function(e) {
        var t = e.indexOf("=");
        return decodeURIComponent(e.substr(0, t)) === n;
      });
      if (e) {
        var t = e.indexOf("=");
        return decodeURIComponent(e.substr(t + 1));
      }
      return null;
    }
    function Zt(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    var en = ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(Jt, Qe),
      Wt(Jt, [
        {
          key: "updateStyle",
          value: function(t) {
            var n = this;
            Object.keys(t).forEach(function(e) {
              n._iframe.style[e] = t[e];
            });
          }
        },
        {
          key: "update",
          value: function(e) {
            this.send({ action: "stripe-user-update", payload: e });
          }
        },
        {
          key: "_createIFrame",
          value: function(e, t, n) {
            var r = (function e(t, n, r) {
              null === t && (t = Function.prototype);
              var o = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r);
              }
              if ("value" in o) return o.value;
              var a = o.get;
              return void 0 !== a ? a.call(r) : void 0;
            })(
              Jt.prototype.__proto__ || Object.getPrototypeOf(Jt.prototype),
              "_createIFrame",
              this
            ).call(
              this,
              e,
              t,
              n && "object" === (void 0 === n ? "undefined" : Yt(n))
                ? zt({}, n, { isSecondaryFrame: !0 })
                : n
            );
            return Ue(r, Vt), (r.style.height = "0"), r;
          }
        }
      ]),
      Jt),
      tn = function(e) {
        return (
          $t(e, "https://js.stripe.com/v3/") ||
          ((t = k(e)),
          "stripe.com" === (n = t ? t.host : "") ||
            !!n.match(/\.stripe\.(com|me)$/))
        );
        var t, n;
      },
      nn = [
        "button",
        "checkbox",
        "file",
        "hidden",
        "image",
        "submit",
        "radio",
        "reset"
      ],
      rn = function(e) {
        var t = e.tagName;
        if (e.isContentEditable || "TEXTAREA" === t) return !0;
        if ("INPUT" !== t) return !1;
        var n = e.getAttribute("type");
        return -1 === nn.indexOf(n);
      },
      on = function(e) {
        var u = {};
        return (
          e
            .replace(/\+/g, " ")
            .split("&")
            .forEach(function(e, t) {
              var n,
                r = e.split("="),
                o = decodeURIComponent(r[0]),
                i = u,
                a = 0,
                s = o.split("]["),
                c = s.length - 1,
                c =
                  /\[/.test(s[0]) && /\]$/.test(s[c])
                    ? ((s[c] = s[c].replace(/\]$/, "")),
                      (s = s
                        .shift()
                        .split("[")
                        .concat(s)).length - 1)
                    : 0;
              if (!(0 <= s.indexOf("__proto__")))
                if (2 === r.length)
                  if (((n = decodeURIComponent(r[1])), c))
                    for (; a <= c; a++) {
                      if (
                        ((o = "" === s[a] ? i.length : s[a]), !Zt(i, o) && i[o])
                      )
                        return;
                      (i[o] =
                        a < c
                          ? i[o] || (s[a + 1] && isNaN(s[a + 1]) ? {} : [])
                          : n),
                        (i = i[o]);
                    }
                  else if (Array.isArray(u[o])) u[o].push(n);
                  else if (void 0 !== u[o]) {
                    if (!Zt(u, o)) return;
                    u[o] = [u[o], n];
                  } else u[o] = n;
                else o && (u[o] = "");
            }),
          u
        );
      },
      an = n(3),
      sn = n.n(an),
      cn =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      un =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
    function ln(e) {
      return (
        e &&
        "object" === (void 0 === e ? "undefined" : un(e)) &&
        (e.constructor === Array || e.constructor === Object)
      );
    }
    function pn(e) {
      return ln(e) ? (Array.isArray(e) ? e.slice(0, e.length) : cn({}, e)) : e;
    }
    function dn(a) {
      return function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (Array.isArray(t[0]) && a) return pn(t[0]);
        var i = Array.isArray(t[0]) ? [] : {};
        return (
          t.forEach(function(o) {
            o &&
              Object.keys(o).forEach(function(e) {
                var t = i[e],
                  n = o[e],
                  r = ln(t) && !(a && Array.isArray(t));
                "object" === (void 0 === n ? "undefined" : un(n)) && r
                  ? (i[e] = dn(a)(t, pn(n)))
                  : void 0 !== n
                  ? (i[e] = (ln(n) ? dn(a) : pn)(n))
                  : void 0 !== t && (i[e] = t);
              });
          }),
          i
        );
      };
    }
    dn(!1);
    var fn = dn(!0),
      mn = ge.replace(/\/$/, "");
    var hn = "_1776170249",
      _n = (function(e) {
        var t,
          n,
          r,
          o = ((r = !0),
          (n = hn) in (t = {})
            ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[n] = r),
          t);
        try {
          var i = on(e.slice(e.indexOf("?") + 1));
          Object.keys(i).forEach(function(e) {
            var t = sn()(e),
              n = i[e];
            t === hn && "false" === n && (o[t] = !1);
          });
        } catch (e) {}
        return o;
      })(
        (function(e) {
          try {
            if (e.currentScript) return e.currentScript.src;
            var t = e.querySelectorAll('script[src^="' + mn + '"]'),
              n = w(t, function(e) {
                var t = (e.getAttribute("src") || "").split("?")[0];
                return new RegExp("^" + mn + "/?$").test(t);
              });
            return (n && n.getAttribute("src")) || "";
          } catch (e) {
            return "";
          }
        })(document)
      )[hn],
      yn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      vn = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      bn = function() {
        var o = [];
        return {
          addEventListener: function(e, t, n, r) {
            e.addEventListener(t, n, r), o.push([e, t, n, r]);
          },
          removeEventListener: function(d, f, m, h) {
            d.removeEventListener(f, m, h),
              (o = o.filter(function(e) {
                return (
                  (t = e),
                  (n = vn([d, f, m, h], 4)),
                  (r = n[0]),
                  (o = n[1]),
                  (i = n[2]),
                  (a = n[3]),
                  (s = vn(t, 4)),
                  (c = s[0]),
                  (u = s[1]),
                  (l = s[2]),
                  (p = s[3]),
                  c !== r ||
                    u !== o ||
                    l !== i ||
                    (!0 ===
                      ("object" === (void 0 === a ? "undefined" : yn(a)) && a
                        ? a.capture
                        : a)) !=
                      (!0 ===
                        ("object" === (void 0 === p ? "undefined" : yn(p)) && p
                          ? p.capture
                          : p))
                );
                var t, n, r, o, i, a, s, c, u, l, p;
              }));
          }
        };
      };
    function gn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function wn(e) {
      return 42 === e.length;
    }
    function En(e, t, n) {
      return n ? (!e || (!wn(e) && wn(t)) ? t : e) : ce();
    }
    var Sn = "__privateStripeMetricsController",
      Pn = { MERCHANT: "merchant", SESSION: "session" },
      kn = "NA",
      On = ((function(e, t, n) {
        return t && gn(e.prototype, t), n && gn(e, n), e;
      })(An, [
        {
          key: "ids",
          value: function() {
            return { guid: this._guid, muid: this._muid, sid: this._sid };
          }
        },
        {
          key: "idsPromise",
          value: function() {
            var e = this;
            return this._idsPromise.then(function() {
              return e.ids();
            });
          }
        },
        {
          key: "_establishMessageChannel",
          value: function(e) {
            if (!_n) return (this._guid = ce()), void e();
            this._listenerRegistry.addEventListener(
              window,
              "message",
              this._handleMessage(e)
            );
          }
        },
        {
          key: "_startIntervalCheck",
          value: function() {
            var t = this,
              n = window.location.href;
            setInterval(function() {
              var e = window.location.href;
              e !== n &&
                (t.send(function(e) {
                  return {
                    action: "ping",
                    payload: {
                      sid: e.sid,
                      muid: e.muid,
                      title: document.title,
                      referrer: document.referrer,
                      url: document.location.href,
                      version: 6
                    }
                  };
                }),
                (n = e));
            }, 5e3);
          }
        },
        {
          key: "report",
          value: function(t, n) {
            this.send(function(e) {
              return {
                action: "track",
                payload: {
                  sid: e.sid,
                  muid: e.muid,
                  url: document.location.href,
                  source: t,
                  data: n,
                  version: 6
                }
              };
            });
          }
        },
        {
          key: "send",
          value: function(e) {
            var t = this;
            this._idsPromise.then(function() {
              try {
                t._controllerFrame && t._controllerFrame.send(e(t.ids()));
              } catch (e) {}
            });
          }
        },
        {
          key: "_testLatency",
          value: function() {
            var n = this,
              r = new Date();
            this._listenerRegistry.addEventListener(
              document,
              "mousemove",
              function e() {
                try {
                  var t = new Date();
                  n._latencies.push(t - r),
                    10 <= n._latencies.length &&
                      (n.report("mouse-timings-10", n._latencies),
                      n._listenerRegistry.removeEventListener(
                        document,
                        "mousemove",
                        e
                      )),
                    (r = t);
                } catch (e) {}
              }
            );
          }
        },
        {
          key: "_extractMetaReferrerPolicy",
          value: function() {
            var e = document.querySelector("meta[name=referrer]");
            return null != e && e instanceof HTMLMetaElement
              ? e.content.toLowerCase()
              : null;
          }
        },
        {
          key: "_extractUrl",
          value: function(e) {
            var t = document.location.href;
            switch (e) {
              case "origin":
              case "strict-origin":
              case "origin-when-cross-origin":
              case "strict-origin-when-cross-origin":
                return document.location.origin;
              case "unsafe-url":
                return t.split("#")[0];
              default:
                return t;
            }
          }
        },
        {
          key: "_buildFrameQueryString",
          value: function() {
            var e = this._extractMetaReferrerPolicy(),
              t = this._extractUrl(e),
              n = {
                url: t,
                title: document.title,
                referrer: document.referrer,
                muid: this._muid,
                sid: this._sid,
                version: 6,
                preview: tn(t)
              };
            return (
              null != e && (n.metaReferrerPolicy = e),
              Object.keys(n)
                .map(function(e) {
                  return null != n[e]
                    ? e + "=" + encodeURIComponent(n[e].toString())
                    : null;
                })
                .join("&")
            );
          }
        },
        {
          key: "_getID",
          value: function(e, t) {
            var n = 1 < arguments.length && void 0 !== t ? t : kn;
            switch (e) {
              case Pn.MERCHANT:
                if (this._doNotPersist) return En(this._muid, n, _n);
                try {
                  var r = "__stripe_mid",
                    o = En(Qt(r), n, _n);
                  return (
                    wn(o) &&
                      Xt({
                        name: r,
                        value: o,
                        domain: "." + document.location.hostname
                      }),
                    o
                  );
                } catch (e) {
                  return kn;
                }
              case Pn.SESSION:
                if (this._doNotPersist) return En(this._sid, n, _n);
                try {
                  var i = "__stripe_sid",
                    a = En(Qt(i), n, _n);
                  return (
                    wn(a) &&
                      Xt({
                        name: i,
                        value: a,
                        domain: "." + document.location.hostname,
                        expiresIn: 18e5
                      }),
                    a
                  );
                } catch (e) {
                  return kn;
                }
              default:
                throw new Error("Invalid ID type specified: " + e);
            }
          }
        }
      ]),
      An);
    function An() {
      var e,
        t,
        n,
        l = this,
        r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, An),
        (this._controllerFrame = null),
        (this._latencies = []),
        (this._handleMessage = function(u) {
          return function(e) {
            var t = e.data,
              n = e.origin;
            if (tn(n) && "string" == typeof t)
              try {
                var r,
                  o,
                  i,
                  a = JSON.parse(t),
                  s = a.originatingScript,
                  c = a.payload;
                "m2" === s &&
                  ((r = c.guid),
                  (o = c.muid),
                  (i = c.sid),
                  (l._guid = r),
                  (l._muid = l._getID(Pn.MERCHANT, o)),
                  (l._sid = l._getID(Pn.SESSION, i)),
                  u());
              } catch (e) {}
          };
        }),
        r.checkoutIds
          ? ((t = (e = r.checkoutIds).muid),
            (n = e.sid),
            (this._guid = kn),
            (this._muid = t),
            (this._sid = n),
            (this._doNotPersist = !0))
          : ((this._guid = kn),
            (this._muid = this._getID(Pn.MERCHANT)),
            (this._sid = this._getID(Pn.SESSION)),
            (this._doNotPersist = !1)),
        (this._listenerRegistry = bn()),
        (this._idsPromise = new E(function(e) {
          l._establishMessageChannel(e);
        })),
        (this._id = Te(Sn)),
        _n &&
          ((this._controllerFrame = new vt({
            type: he.METRICS_CONTROLLER,
            controllerId: this._id,
            listenerRegistry: this._listenerRegistry,
            autoload: !0,
            appParams: this._buildFrameQueryString()
          })),
          this._startIntervalCheck(),
          setTimeout(this._testLatency.bind(this), 2e3 + 500 * Math.random()));
    }
    var Tn,
      In = null,
      Cn = function(e) {
        return (In = new On(0 < arguments.length && void 0 !== e ? e : {}));
      },
      Rn = !1,
      jn = function() {
        var t = In;
        t &&
          (Rn ||
            ((Rn = !0),
            t.send(function(e) {
              return {
                action: "ping",
                payload: {
                  v2: 2,
                  sid: e.sid,
                  muid: e.muid,
                  title: document.title,
                  referrer: document.referrer,
                  url: document.location.href,
                  version: 6
                }
              };
            }),
            t.send(function(e) {
              return {
                action: "track",
                payload: {
                  sid: e.sid,
                  muid: e.muid,
                  url: document.location.href,
                  source: "mouse-timings-10-v2",
                  data: t._latencies,
                  version: 6
                }
              };
            })));
      },
      Nn = {
        checkout_beta_2: "checkout_beta_2",
        checkout_beta_3: "checkout_beta_3",
        checkout_beta_4: "checkout_beta_4",
        checkout_beta_testcards: "checkout_beta_testcards",
        payment_intent_beta_1: "payment_intent_beta_1",
        payment_intent_beta_2: "payment_intent_beta_2",
        payment_intent_beta_3: "payment_intent_beta_3",
        card_payment_method_beta_1: "card_payment_method_beta_1",
        acknowledge_ie9_deprecation: "acknowledge_ie9_deprecation",
        cvc_update_beta_1: "cvc_update_beta_1",
        google_pay_beta_1: "google_pay_beta_1",
        google_pay_beta_2: "google_pay_beta_2",
        acss_debit_beta_1: "acss_debit_beta_1",
        acss_debit_beta_2: "acss_debit_beta_2",
        afterpay_clearpay_pm_beta_1: "afterpay_clearpay_pm_beta_1",
        alipay_pm_beta_1: "alipay_pm_beta_1",
        au_bank_account_beta_1: "au_bank_account_beta_1",
        au_bank_account_beta_2: "au_bank_account_beta_2",
        bacs_debit_beta: "bacs_debit_beta",
        bancontact_pm_beta_1: "bancontact_pm_beta_1",
        boleto_pm_beta_1: "boleto_pm_beta_1",
        eps_pm_beta_1: "eps_pm_beta_1",
        fpx_bank_beta_1: "fpx_bank_beta_1",
        giropay_pm_beta_1: "giropay_pm_beta_1",
        grabpay_pm_beta_1: "grabpay_pm_beta_1",
        ideal_pm_beta_1: "ideal_pm_beta_1",
        konbini_pm_beta_1: "konbini_pm_beta_1",
        line_items_beta_1: "line_items_beta_1",
        oxxo_pm_beta_1: "oxxo_pm_beta_1",
        p24_pm_beta_1: "p24_pm_beta_1",
        paypal_pm_beta_1: "paypal_pm_beta_1",
        sepa_pm_beta_1: "sepa_pm_beta_1",
        sofort_pm_beta_1: "sofort_pm_beta_1",
        tax_product_beta_1: "tax_product_beta_1",
        wechat_pay_pm_beta_1: "wechat_pay_pm_beta_1",
        checkout_beta_locales: "checkout_beta_locales",
        stripe_js_beta_locales: "stripe_js_beta_locales",
        ideal_sepa_beta_1: "ideal_sepa_beta_1",
        sofort_sepa_beta_1: "sofort_sepa_beta_1",
        bancontact_sepa_beta_1: "bancontact_sepa_beta_1",
        upi_beta_1: "upi_beta_1",
        issuing_elements_1: "issuing_elements_1",
        return_intents_beta_1: "return_intents_beta_1",
        netbanking_beta_1: "netbanking_beta_1",
        eps_bank_beta_1: "eps_bank_beta_1",
        card_light_beta_1: "card_light_beta_1",
        no_card_light_beta_1: "no_card_light_beta_1",
        p24_bank_beta_1: "p24_bank_beta_1",
        netbanking_bank_beta_1: "netbanking_bank_beta_1",
        lcpm_pilot_beta_1: "lcpm_pilot_beta_1"
      },
      Mn = Object.freeze({ netbankingBank: "netbanking_bank_beta_1" }),
      xn = Object.keys(Nn),
      Ln = function(e, t) {
        return 0 <= e.indexOf(t);
      },
      Dn = !1,
      Bn = function(e) {
        Dn ||
          ("null" === (null != e ? e : window.origin) &&
            ((Dn = !0),
            console.error(
              "Stripe.js requires 'allow-same-origin' if sandboxed."
            )));
      };
    function qn(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    var Fn,
      Un,
      Hn = (qn((Tn = {}), ye.card, {
        unique: !0,
        conflict: [ye.cardNumber, ye.cardExpiry, ye.cardCvc, ye.postalCode],
        beta: !1,
        implementation: "legacy"
      }),
      qn(Tn, ye.cardNumber, {
        unique: !0,
        conflict: [ye.card],
        beta: !1,
        implementation: "legacy"
      }),
      qn(Tn, ye.cardExpiry, {
        unique: !0,
        conflict: [ye.card],
        beta: !1,
        implementation: "legacy"
      }),
      qn(Tn, ye.cardCvc, {
        unique: !0,
        conflict: [ye.card],
        beta: !1,
        implementation: "legacy"
      }),
      qn(Tn, ye.postalCode, {
        unique: !0,
        conflict: [ye.card],
        beta: !1,
        implementation: "legacy"
      }),
      qn(Tn, ye.paymentRequestButton, {
        unique: !0,
        conflict: [],
        beta: !1,
        implementation: "legacy"
      }),
      qn(Tn, ye.iban, {
        unique: !0,
        conflict: [],
        beta: !1,
        implementation: "legacy"
      }),
      qn(Tn, ye.idealBank, {
        unique: !0,
        conflict: [],
        beta: !1,
        implementation: "legacy"
      }),
      qn(Tn, ye.p24Bank, {
        unique: !0,
        conflict: [],
        beta: !1,
        implementation: "legacy"
      }),
      qn(Tn, ye.auBankAccount, {
        unique: !0,
        beta: !1,
        conflict: [],
        implementation: "legacy"
      }),
      qn(Tn, ye.fpxBank, {
        unique: !0,
        beta: !1,
        conflict: [],
        implementation: "legacy"
      }),
      qn(Tn, ye.netbankingBank, {
        unique: !0,
        beta: !0,
        conflict: [],
        implementation: "legacy"
      }),
      qn(Tn, ye.issuingCardNumberDisplay, {
        unique: !1,
        beta: !0,
        conflict: [],
        implementation: "legacy"
      }),
      qn(Tn, ye.issuingCardCvcDisplay, {
        unique: !1,
        beta: !0,
        conflict: [],
        implementation: "legacy"
      }),
      qn(Tn, ye.issuingCardExpiryDisplay, {
        unique: !1,
        beta: !0,
        conflict: [],
        implementation: "legacy"
      }),
      qn(Tn, ye.epsBank, {
        unique: !0,
        conflict: [],
        beta: !0,
        implementation: "legacy"
      }),
      Tn);
    function Gn(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    var zn = "__PrivateStripeElement",
      Yn = zn + "-input",
      Wn = zn + "-safariInput",
      Kn = ["brand"],
      Vn = (Gn((Fn = {}), ye.card, Kn),
      Gn(Fn, ye.cardNumber, Kn),
      Gn(Fn, ye.iban, ["country", "bankName"]),
      Gn(Fn, ye.auBankAccount, ["bankName", "branchName"]),
      Fn),
      Jn = (Gn((Un = {}), ye.idealBank, { secondary: ye.idealBankSecondary }),
      Gn(Un, ye.p24Bank, { secondary: ye.p24BankSecondary }),
      Gn(Un, ye.fpxBank, { secondary: ye.fpxBankSecondary }),
      Gn(Un, ye.netbankingBank, { secondary: ye.netbankingBankSecondary }),
      Gn(Un, ye.epsBank, { secondary: ye.epsBankSecondary }),
      Un),
      $n =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function Xn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var Qn =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    function Zn(e, t) {
      return (
        document.activeElement === e._iframe ||
        (e._iframe.parentElement && document.activeElement === t)
      );
    }
    function er(e) {
      return "object" === (void 0 === e ? "undefined" : Qn(e)) &&
        null !== e &&
        "IntegrationError" === e.name
        ? new S("string" == typeof e.message ? e.message : "")
        : e;
    }
    var tr = "__privateStripeController",
      nr = !1,
      rr = {},
      or = function(e) {
        return {
          cl:
            !Ln(e, "no_card_light_beta_1") &&
            (Ln(e, "card_light_beta_1") || Math.random() < 0),
          clc: Math.random() < 0
        };
      },
      ir = ((function(e, t, n) {
        return t && Xn(e.prototype, t), n && Xn(e, n), e;
      })(ar, [
        {
          key: "registerWrapper",
          value: function(e) {
            this._controllerFrame.send({
              action: "stripe-wrapper-register",
              payload: { wrapperLibrary: e }
            });
          }
        }
      ]),
      ar);
    function ar(e) {
      var n = this;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, ar),
        cr.call(this);
      var t = e.listenerRegistry,
        r = e.stripeJsLoadTimestamp,
        o = e.stripeCreateTimestamp,
        i = e.onFirstLoad,
        a = e.betas,
        s = (function(e, t) {
          var n,
            r = {};
          for (n in e)
            0 <= t.indexOf(n) ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        })(e, [
          "listenerRegistry",
          "stripeJsLoadTimestamp",
          "stripeCreateTimestamp",
          "onFirstLoad",
          "betas"
        ]),
        c = s.apiKey,
        u = s.stripeAccount,
        l = s.stripeJsId,
        p = s.locale;
      (this._id = Te(tr)),
        (this._stripeJsId = l),
        (this._apiKey = c),
        (this._stripeAccount = u),
        (this._listenerRegistry = t),
        (this._betas = a),
        (this._flags = or(a)),
        (this._controllerFrame = new vt({
          type: he.CONTROLLER,
          betas: a,
          controllerId: this._id,
          listenerRegistry: t,
          appParams: $n({}, s, {
            outerFlags: this._flags,
            betas: a,
            stripeJsLoadTime: r.getAsPosixTime()
          })
        })),
        (this._stripeJsLoadTimestamp = r),
        (this._createTimestamp = o),
        (this._loadCount = 0);
      function d(e) {
        var t = e.anchor;
        (n._mountTimestamp = new b()),
          t !== document.body && n.report("controller.mount.custom_container");
      }
      this._controllerFrame._isMounted()
        ? d({ anchor: this._controllerFrame._iframe.parentElement })
        : this._controllerFrame._once("mount", d),
        i && this._controllerFrame._once("load", i),
        (this._frames = {}),
        (this._requests = {}),
        this._setupPostMessage(),
        (this._handleMessage = Ye(this._handleMessage, this)),
        this.action.fetchLocale({ locale: p || "auto" });
    }
    function sr() {
      var e = document.querySelectorAll("meta[name=viewport][content]"),
        t = e[e.length - 1];
      return t && t instanceof HTMLMetaElement ? t.content : "";
    }
    var cr = function() {
        var p = this;
        (this._sendCAReq = function(n) {
          var r = Te(n.tag);
          return new E(function(e, t) {
            (p._requests[r] = { resolve: e, reject: t }),
              p._controllerFrame.send({
                action: "stripe-safe-controller-action-request",
                payload: { nonce: r, caReq: n }
              });
          });
        }),
          (this.livemode = function() {
            var e = p._apiKey;
            return /^pk_test_/.test(e)
              ? "testmode"
              : /^pk_live_/.test(e)
              ? "livemode"
              : "unknown";
          }),
          (this.action = {
            retrievePaymentIntent: function(e) {
              return p._sendCAReq({ tag: "RETRIEVE_PAYMENT_INTENT", value: e });
            },
            confirmPaymentIntent: function(e) {
              return p._sendCAReq({ tag: "CONFIRM_PAYMENT_INTENT", value: e });
            },
            cancelPaymentIntentSource: function(e) {
              return p._sendCAReq({
                tag: "CANCEL_PAYMENT_INTENT_SOURCE",
                value: e
              });
            },
            confirmSetupIntent: function(e) {
              return p._sendCAReq({ tag: "CONFIRM_SETUP_INTENT", value: e });
            },
            retrieveSetupIntent: function(e) {
              return p._sendCAReq({ tag: "RETRIEVE_SETUP_INTENT", value: e });
            },
            cancelSetupIntentSource: function(e) {
              return p._sendCAReq({
                tag: "CANCEL_SETUP_INTENT_SOURCE",
                value: e
              });
            },
            fetchLocale: function(e) {
              return p._sendCAReq({ tag: "FETCH_LOCALE", value: e });
            },
            updateCSSFonts: function(e) {
              return p._sendCAReq({ tag: "UPDATE_CSS_FONTS", value: e });
            },
            createApplePaySession: function(e) {
              return p._sendCAReq({
                tag: "CREATE_APPLE_PAY_SESSION",
                value: e
              });
            },
            retrieveSource: function(e) {
              return p._sendCAReq({ tag: "RETRIEVE_SOURCE", value: e });
            },
            tokenizeWithElement: function(e) {
              return p._sendCAReq({ tag: "TOKENIZE_WITH_ELEMENT", value: e });
            },
            tokenizeCvcUpdate: function(e) {
              return p._sendCAReq({ tag: "TOKENIZE_CVC_UPDATE", value: e });
            },
            tokenizeWithData: function(e) {
              return p._sendCAReq({ tag: "TOKENIZE_WITH_DATA", value: e });
            },
            createSourceWithElement: function(e) {
              return p._sendCAReq({
                tag: "CREATE_SOURCE_WITH_ELEMENT",
                value: e
              });
            },
            createSourceWithData: function(e) {
              return p._sendCAReq({ tag: "CREATE_SOURCE_WITH_DATA", value: e });
            },
            createPaymentMethodWithElement: function(e) {
              return p._sendCAReq({
                tag: "CREATE_PAYMENT_METHOD_WITH_ELEMENT",
                value: e
              });
            },
            createPaymentMethodWithData: function(e) {
              return p._sendCAReq({
                tag: "CREATE_PAYMENT_METHOD_WITH_DATA",
                value: e
              });
            },
            createPaymentPage: function(e) {
              return p._sendCAReq({ tag: "CREATE_PAYMENT_PAGE", value: e });
            },
            createPaymentPageWithSession: function(e) {
              return p._sendCAReq({
                tag: "CREATE_PAYMENT_PAGE_WITH_SESSION",
                value: e
              });
            },
            createRadarSession: function(e) {
              return p._sendCAReq({ tag: "CREATE_RADAR_SESSION", value: e });
            },
            authenticate3DS2: function(e) {
              return p._sendCAReq({ tag: "AUTHENTICATE_3DS2", value: e });
            },
            verifyMicrodepositsForPayment: function(e) {
              return p._sendCAReq({
                tag: "VERIFY_MICRODEPOSITS_FOR_PAYMENT",
                value: e
              });
            },
            verifyMicrodepositsForSetup: function(e) {
              return p._sendCAReq({
                tag: "VERIFY_MICRODEPOSITS_FOR_SETUP",
                value: e
              });
            },
            retrieveIssuingCard: function(e) {
              return p._sendCAReq({ tag: "RETRIEVE_ISSUING_CARD", value: e });
            },
            updatePaymentIntent: function(e) {
              return p._sendCAReq({ tag: "UPDATE_PAYMENT_INTENT", value: e });
            },
            createAcssDebitSession: function(e) {
              return p._sendCAReq({
                tag: "CREATE_ACSS_DEBIT_SESSION",
                value: e
              });
            },
            confirmReturnIntent: function(e) {
              return p._sendCAReq({ tag: "CONFIRM_RETURN_INTENT", value: e });
            },
            localizeError: function(e) {
              return p._sendCAReq({ tag: "LOCALIZE_ERROR", value: e });
            }
          }),
          (this.createElementFrame = function(e, t, n, r) {
            var o = p._betas,
              i = new Mt({
                type: e,
                betas: o,
                controllerId: p._id,
                listenerRegistry: p._listenerRegistry,
                appParams: $n({}, r, {
                  componentName: t,
                  keyMode: C(p._apiKey),
                  apiKey: p._apiKey
                })
              });
            return p._setupFrame(i, e, n);
          }),
          (this.createSecondaryElementFrame = function(e, t, n, r, o) {
            var i = p._betas,
              a = new en({
                type: e,
                betas: i,
                controllerId: p._id,
                listenerRegistry: p._listenerRegistry,
                appParams: $n({}, o, {
                  componentName: t,
                  primaryElementType: n,
                  keyMode: C(p._apiKey)
                })
              });
            return p._setupFrame(a, e, r);
          }),
          (this.createHiddenFrame = function(e, t) {
            var n = new rt({
              type: e,
              betas: p._betas,
              controllerId: p._id,
              listenerRegistry: p._listenerRegistry,
              appParams: t
            });
            return p._setupFrame(n, e);
          }),
          (this.createLightboxFrame = function(e) {
            var t = e.type,
              n = e.options,
              r = new Gt({
                type: t,
                controllerId: p._id,
                listenerRegistry: p._listenerRegistry,
                options: $n({}, n, { betas: p._betas })
              });
            return p._setupFrame(r, t);
          }),
          (this.getFlags = function() {
            return p._flags;
          }),
          (this._setupFrame = function(e, t, n) {
            return (
              (p._frames[e.id] = e),
              p._controllerFrame.sendPersistent({
                action: "stripe-user-createframe",
                payload: { newFrameId: e.id, frameType: t, groupId: n }
              }),
              e._on("unload", function() {
                p._controllerFrame.sendPersistent({
                  action: "stripe-frame-unload",
                  payload: { unloadedFrameId: e.id }
                });
              }),
              e._on("destroy", function() {
                delete p._frames[e.id],
                  p._controllerFrame.sendPersistent({
                    action: "stripe-frame-destroy",
                    payload: { destroyedFrameId: e.id }
                  });
              }),
              e._on("load", function() {
                p._controllerFrame.sendPersistent({
                  action: "stripe-frame-load",
                  payload: { loadedFrameId: e.id }
                }),
                  p._controllerFrame.loaded &&
                    e.send({ action: "stripe-controller-load", payload: {} });
              }),
              e
            );
          }),
          (this.report = function(e) {
            var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            p._controllerFrame.send({
              action: "stripe-controller-report",
              payload: { event: e, data: t }
            });
          }),
          (this.warn = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            p._controllerFrame.send({
              action: "stripe-controller-warn",
              payload: { args: t }
            });
          }),
          (this.controllerFor = function() {
            return "outer";
          }),
          (this._setupPostMessage = function() {
            p._listenerRegistry.addEventListener(window, "message", function(
              e
            ) {
              var t = e.data,
                n = e.origin,
                r = e.source,
                o = (function(e) {
                  try {
                    var t = "string" == typeof e ? JSON.parse(e) : e;
                    return t.__stripeJsV3 ? t : null;
                  } catch (e) {
                    return null;
                  }
                })(t);
              o && ($t(Ee, n) ? p._handleMessage(o, r) : Bn(n));
            });
          }),
          (this._nodeIsKnownElement = function(e) {
            return (
              e &&
              "IFRAME" === e.nodeName &&
              !!p._frames[e.getAttribute("name") || ""]
            );
          }),
          (this._handleMessage = function(e, t) {
            var n = e.controllerId,
              r = e.frameId,
              o = e.message,
              i = p._frames[r];
            if (n === p._id)
              switch (o.action) {
                case "stripe-frame-event":
                  var a = o.payload.event,
                    s = o.payload.data;
                  if (i) {
                    if (Et) {
                      var c = i._iframe.parentElement,
                        u = c && c.querySelector("." + Yn);
                      if ("focus" === a && !nr && u && !Zn(i, u) && !rr[r]) {
                        u.focus(),
                          (nr = !0),
                          (rr[r] = !0),
                          setTimeout(function() {
                            rr[r] = !1;
                          }, 1e3);
                        break;
                      }
                      if ("blur" === a && nr) {
                        nr = !1;
                        break;
                      }
                      "blur" === a &&
                        At &&
                        setTimeout(function() {
                          var e,
                            t,
                            n = document.activeElement;
                          !n ||
                            Zn(i, u) ||
                            rn(n) ||
                            p._nodeIsKnownElement(n) ||
                            ((e = c && c.querySelector("." + Wn)) &&
                              (((t = e).disabled = !1),
                              t.focus(),
                              t.blur(),
                              (t.disabled = !0)),
                            n.focus());
                        }, 400);
                    }
                    "load" === a && (s = $n({}, s, { source: t })),
                      i._emit(a, s);
                  }
                  break;
                case "stripe-frame-action-response":
                  i && i.resolve(o.payload.nonce, o.payload.faRes);
                  break;
                case "stripe-frame-action-error":
                  i && i.reject(o.payload.nonce, er(o.payload.faErr));
                  break;
                case "stripe-frame-error":
                  throw new S(o.payload.message);
                case "stripe-integration-error":
                  i &&
                    i._emit("__privateIntegrationError", {
                      message: o.payload.message
                    });
                  break;
                case "stripe-controller-load":
                  p._controllerFrame._emit("load", { source: t }),
                    p._loadCount++,
                    Object.keys(p._frames).forEach(function(e) {
                      return p._frames[e].send({
                        action: "stripe-controller-load",
                        payload: {}
                      });
                    });
                  var l = p._createTimestamp.getAsPosixTime();
                  p._controllerFrame.send({
                    action: "stripe-user-mount",
                    payload: {
                      timestamps: {
                        stripeJsLoad: p._stripeJsLoadTimestamp.getAsPosixTime(),
                        stripeCreate: l,
                        create: l,
                        mount: p._mountTimestamp.getAsPosixTime()
                      },
                      loadCount: p._loadCount,
                      matchFrame:
                        t === p._controllerFrame._iframe.contentWindow,
                      rtl: !1,
                      paymentRequestButtonType: null
                    }
                  });
                  break;
                case "stripe-safe-controller-action-response":
                  p._requests[o.payload.nonce] &&
                    p._requests[o.payload.nonce].resolve(o.payload.caRes);
                  break;
                case "stripe-safe-controller-action-error":
                  p._requests[o.payload.nonce] &&
                    p._requests[o.payload.nonce].reject(er(o.payload.caErr));
                  break;
                case "stripe-api-call":
                  jn();
              }
          });
      },
      ur = ir;
    function lr() {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, lr);
      var e = (function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (lr.__proto__ || Object.getPrototypeOf(lr)).call(this));
      return (e.name = "NetworkError"), (e.type = "network_error"), e;
    }
    var pr = ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(lr, Error),
      lr),
      dr =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      fr = function f(m) {
        return new E(function(e, t) {
          var n = m.method,
            r = m.url,
            o = m.data,
            i = m.headers,
            a = m.withCredentials,
            s = m.contentType,
            c = void 0 === s ? "application/x-www-form-urlencoded" : s,
            u = "";
          o && "application/x-www-form-urlencoded" === c
            ? (u = De(o))
            : o && "application/json" === c && (u = JSON.stringify(o));
          var l = "GET" === n && u ? r + "?" + u : r,
            p = "GET" === n ? "" : u,
            d = new XMLHttpRequest();
          a && (d.withCredentials = a),
            d.open(n, l, !0),
            d.setRequestHeader("Accept", "application/json"),
            d.setRequestHeader("Content-Type", c),
            i &&
              Object.keys(i).forEach(function(e) {
                var t = i[e];
                "string" == typeof t && d.setRequestHeader(e, t);
              }),
            (d.onreadystatechange = function() {
              4 === d.readyState &&
                ((d.onreadystatechange = function() {}),
                0 === d.status
                  ? a
                    ? t(new pr())
                    : f(dr({}, m, { withCredentials: !0 })).then(e, t)
                  : e(d));
            });
          try {
            d.send(p);
          } catch (e) {
            t(e);
          }
        });
      },
      mr =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function hr(e, c) {
      var t = e.reduce(function(e, t) {
        var n,
          r,
          o,
          i = (function(e, t) {
            var n = e.indexOf(":");
            if (-1 === n)
              throw new S(
                "Invalid css declaration in file from " + t + ': "' + e + '"'
              );
            var r = e.slice(0, n).trim(),
              o = Pe[r];
            if (!o)
              throw new S(
                "Unsupported css property in file from " + t + ': "' + r + '"'
              );
            return { property: o, value: e.slice(n + 1).trim() };
          })(t, c),
          a = i.property,
          s = i.value;
        return mr(
          {},
          e,
          ((o = s),
          (r = a) in (n = {})
            ? Object.defineProperty(n, r, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (n[r] = o),
          n)
        );
      }, {});
      return (
        ["family", "src"].forEach(function(e) {
          if (!t[e])
            throw new S(
              "Missing css property in file from " + c + ': "' + Se[e] + '"'
            );
        }),
        t
      );
    }
    function _r(e, t) {
      var n,
        r,
        o,
        i =
          ("string" == typeof (n = e) &&
            w(Object.keys(Hn), function(e) {
              return e === n;
            })) ||
          null;
      if (!i || ((r = t), (o = Mn[i]) && !Ln(r, o))) {
        var a = "string" == typeof e ? e : void 0 === e ? "undefined" : gr(e);
        throw new S(
          "A valid Element name must be provided. Valid Elements are:\n  " +
            Object.keys(Hn)
              .filter(function(e) {
                return !Hn[e].beta;
              })
              .join(", ") +
            "; you passed: " +
            a +
            "."
        );
      }
    }
    var yr,
      vr = function(r) {
        return fr({ url: r, method: "GET" })
          .then(function(e) {
            return e.responseText;
          })
          .then(function(e) {
            return (function(e, t) {
              var n = e.match(/@font-face[ ]?{[^}]*}/g);
              if (!n)
                throw new S("No @font-face rules found in file from " + t);
              return n;
            })(e, r).map(function(e) {
              var t,
                n = (function(e, t) {
                  var n = e.replace(/\/\*.*\*\//g, "").trim(),
                    r = (n.length && /;$/.test(n) ? n : n + ";").match(
                      /((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g
                    );
                  if (!r)
                    throw new S(
                      "Found @font-face rule containing no valid font-properties in file from " +
                        t
                    );
                  return r;
                })((t = e.match(/@font-face[ ]?{([^}]*)}/)) ? t[1] : "", r);
              return hr(n, r);
            });
          });
      },
      br = ((yr = ["hu", "mt", "tr", "zh-HK", "zh-TW"]),
      function(e, t) {
        return Ln(t, Nn.stripe_js_beta_locales) || -1 === yr.indexOf(e)
          ? e
          : "auto";
      }),
      gr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      wr = function(e, t, n) {
        var r,
          o = 0 < arguments.length && void 0 !== e ? e : "1.2em",
          i = 1 < arguments.length && void 0 !== t ? t : "14px",
          a =
            1 ===
              (r = (2 < arguments.length && void 0 !== n ? n : "0")
                .split(" ")
                .map(function(e) {
                  return parseInt(e.trim(), 10);
                })).length || 2 === r.length
              ? 2 * r[0]
              : 3 === r.length || 4 === r.length
              ? r[0] + r[2]
              : 0;
        if ("string" == typeof o && /^[0-9.]+px$/.test(o))
          return parseFloat(o.toString().replace(/[^0-9.]/g, "")) + a + "px";
        var s = parseFloat(o.toString().replace(/[^0-9.]/g, "")),
          c = parseFloat("14px".replace(/[^0-9.]/g, "")),
          u = parseFloat(i.toString().replace(/[^0-9.]/g, "")),
          l = void 0;
        if ("string" == typeof i && /^(\d+|\d*\.\d+)px$/.test(i)) l = u;
        else if ("string" == typeof i && /^(\d+|\d*\.\d+)em$/.test(i))
          l = u * c;
        else if ("string" == typeof i && /^(\d+|\d*\.\d+)%$/.test(i))
          l = (u / 100) * c;
        else {
          if (
            "string" != typeof i ||
            (!/^[\d.]+$/.test(i) && !/^\d*\.(px|em|%)$/.test(i))
          )
            return "100%";
          l = c;
        }
        var p = s * l + a + "px";
        return /^[0-9.]+px$/.test(p) ? p : "100%";
      },
      Er = function(e, n) {
        return e.reduce(function(e, t) {
          return e.then(function(e) {
            return "SATISFIED" === e.type
              ? e
              : t().then(function(e) {
                  return n(e)
                    ? { type: "SATISFIED", value: e }
                    : { type: "UNSATISFIED" };
                });
          });
        }, E.resolve({ type: "UNSATISFIED" }));
      },
      Sr =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Pr = {
        success: "success",
        fail: "fail",
        invalid_shipping_address: "invalid_shipping_address"
      },
      kr = { shipping: "shipping", delivery: "delivery", pickup: "pickup" },
      Or = Sr(
        { success: "success" },
        {
          fail: "fail",
          invalid_payer_name: "invalid_payer_name",
          invalid_payer_email: "invalid_payer_email",
          invalid_payer_phone: "invalid_payer_phone",
          invalid_shipping_address: "invalid_shipping_address"
        }
      ),
      Ar = { merchantCapabilities: ["supports3DS"], displayItems: [] };
    function Tr(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function Ir(e) {
      if (window.ApplePaySession)
        try {
          return window.ApplePaySession.supportsVersion(e);
        } catch (e) {
          return;
        }
    }
    var Cr,
      Rr,
      jr,
      Nr = fe({
        amount: function(e, t) {
          return Z(!0)(e, t);
        },
        label: V,
        pending: H($)
      }),
      Mr = fe({ amount: ee, label: V, pending: H($) }),
      xr = fe({
        amount: ee,
        label: V,
        pending: H($),
        id: J(V, function() {
          return Te("shippingOption");
        }),
        detail: J(V, function() {
          return "";
        })
      }),
      Lr = W.apply(void 0, Tr(Object.keys(kr))),
      Dr = fe({ origin: V, name: V }),
      Br = fe({
        displayItems: H(ne(Mr)),
        shippingOptions: H(re("id")(ne(xr))),
        wallets: H(ne(pe)),
        total: Nr,
        requestShipping: H($),
        requestPayerName: H($),
        requestPayerEmail: H($),
        requestPayerPhone: H($),
        shippingType: H(Lr),
        currency: le,
        country: ue,
        jcbEnabled: H($),
        __billingDetailsEmailOverride: H(V),
        __minApplePayVersion: H(X),
        __merchantDetails: H(Dr),
        __skipGooglePayInPaymentRequest: H($),
        __isCheckout: H($)
      }),
      qr = de({
        currency: H(le),
        displayItems: H(ne(Mr)),
        shippingOptions: H(re("id")(ne(xr))),
        total: H(Nr)
      }),
      Fr = fe({
        displayItems: H(ne(Mr)),
        shippingOptions: H(re("id")(ne(xr))),
        total: H(Nr),
        status: function(e, t) {
          return W.apply(void 0, Tr(Object.keys(Pr)))(
            -1 !==
              [
                "invalid_payer_name",
                "invalid_payer_email",
                "invalid_payer_phone"
              ].indexOf(e)
              ? "fail"
              : e,
            t
          );
        }
      }),
      Ur = W.apply(void 0, Tr(Object.keys(Or))),
      Hr = function(e) {
        return window.ApplePaySession
          ? ["APPLE_PAY"]
          : Ln(e, Nn.google_pay_beta_2)
          ? ["GOOGLE_PAY"]
          : Ln(e, Nn.google_pay_beta_1)
          ? ["GOOGLE_PAY", "BROWSER"]
          : ["BROWSER"];
      },
      Gr = function(e, t) {
        var n = [];
        return (
          window.ApplePaySession
            ? f(e, A.applePay) && n.push("APPLE_PAY")
            : (Ln(t, Nn.google_pay_beta_1) &&
                f(e, A.googlePay) &&
                n.push("GOOGLE_PAY"),
              f(e, A.browserCard) && n.push("BROWSER")),
          n
        );
      },
      zr = 2,
      Yr = ((Cr = function(e) {
        return window.ApplePaySession.canMakePaymentsWithActiveCard(e);
      }),
      (Rr = {}),
      (jr = {}),
      function(e) {
        var t = "_" + e;
        if ("string" == typeof e && void 0 !== Rr[t]) return Rr[t];
        if ("number" == typeof e && void 0 !== jr[t]) return jr[t];
        var n = Cr(e);
        return (
          "string" == typeof e && (Rr[t] = n),
          "number" == typeof e && (jr[t] = n),
          n
        );
      }),
      Wr = function(n, r, o, i, e) {
        var t = 4 < arguments.length && void 0 !== e ? e : zr,
          a = Math.max(zr, t);
        if (window.ApplePaySession) {
          if (
            (function() {
              try {
                return window.location.origin === window.top.location.origin;
              } catch (e) {
                return !1;
              }
            })()
          ) {
            if (window.ApplePaySession.supportsVersion(a)) {
              var s = "merchant." + (r ? [n, r] : [n]).join(".") + ".stripe";
              return Yr(s).then(function(e) {
                var t;
                return (
                  i("pr.apple_pay.can_make_payment_native_response", {
                    available: e
                  }),
                  o &&
                    !e &&
                    window.console &&
                    ((t = r ? "or stripeAccount parameter (" + r + ") " : ""),
                    window.console.warn(
                      "Either you do not have a card saved to your Wallet or the current domain (" +
                        n +
                        ") " +
                        t +
                        "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain."
                    )),
                  e
                );
              });
            }
            return (
              o &&
                window.console &&
                window.console.warn(
                  "This version of Safari does not support ApplePay JS version " +
                    a +
                    "."
                ),
              E.resolve(!1)
            );
          }
          return E.resolve(!1);
        }
        return E.resolve(!1);
      };
    function Kr(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function Vr(e, t) {
      var n = "US" === e || t ? ["discover", "diners", "jcb"].concat(Zr) : Zr;
      return -1 !== eo.indexOf(e) ? ["amex"].concat(Kr(n)) : n;
    }
    function Jr(e, t) {
      var n,
        r = {
          unitSize: 1 / (n = to[t.toLowerCase()] || 100),
          fractionDigits: Math.ceil(Math.log(n) / Math.log(10))
        };
      return (e * r.unitSize).toFixed(r.fractionDigits);
    }
    var $r,
      Xr,
      Qr,
      Zr = ["mastercard", "visa"],
      eo = [
        "AT",
        "AU",
        "BE",
        "CA",
        "CH",
        "DE",
        "DK",
        "EE",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "HK",
        "IE",
        "IT",
        "JP",
        "LT",
        "LU",
        "LV",
        "MX",
        "NL",
        "NO",
        "NZ",
        "PL",
        "PT",
        "SE",
        "SG",
        "US"
      ],
      to = {
        bif: 1,
        clp: 1,
        djf: 1,
        gnf: 1,
        jpy: 1,
        kmf: 1,
        krw: 1,
        mga: 1,
        pyg: 1,
        rwf: 1,
        vnd: 1,
        vuv: 1,
        xaf: 1,
        xof: 1,
        xpf: 1,
        bhd: 1e3,
        jod: 1e3,
        kwd: 1e3,
        omr: 1e3,
        tnd: 1e3
      },
      no =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function ro(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function oo(e, t) {
      return {
        amount: Jr(e.amount, t.currency),
        label: e.label,
        type: e.pending ? "pending" : "final"
      };
    }
    function io(e, t) {
      return new window.ApplePayError(e, t);
    }
    function ao(t) {
      return function(e) {
        return e[t] && "string" == typeof e[t] ? e[t].toUpperCase() : null;
      };
    }
    var so,
      co = (ro(($r = {}), Or.success, 0),
      ro($r, Or.fail, 1),
      ro($r, Or.invalid_payer_name, 2),
      ro($r, Or.invalid_shipping_address, 3),
      ro($r, Or.invalid_payer_phone, 4),
      ro($r, Or.invalid_payer_email, 4),
      $r),
      uo = (ro((Xr = {}), Or.success, function() {
        return null;
      }),
      ro(Xr, Or.fail, function() {
        return null;
      }),
      ro(Xr, Or.invalid_payer_name, function() {
        return io("billingContactInvalid", "name");
      }),
      ro(Xr, Or.invalid_shipping_address, function() {
        return io("shippingContactInvalid", "postalAddress");
      }),
      ro(Xr, Or.invalid_payer_phone, function() {
        return io("shippingContactInvalid", "phoneNumber");
      }),
      ro(Xr, Or.invalid_payer_email, function() {
        return io("shippingContactInvalid", "emailAddress");
      }),
      Xr),
      lo = (ro((Qr = {}), kr.pickup, "storePickup"),
      ro(Qr, kr.shipping, "shipping"),
      ro(Qr, kr.delivery, "delivery"),
      Qr),
      po = {
        total: function(e) {
          return oo(e.total, e);
        },
        lineItems: function(t) {
          return t.displayItems
            ? t.displayItems.map(function(e) {
                return oo(e, t);
              })
            : [];
        },
        shippingMethods: function(r) {
          return r.shippingOptions
            ? r.shippingOptions.map(function(e) {
                return (
                  (n = r),
                  {
                    amount: Jr((t = e).amount, n.currency),
                    label: t.label,
                    detail: t.detail,
                    identifier: t.id
                  }
                );
                var t, n;
              })
            : [];
        }
      },
      fo = {
        shippingType: function(e) {
          var t = e.shippingType;
          if (!t) return null;
          var n = lo[t];
          if (void 0 !== n) return n;
          throw new S("Invalid value for shippingType: " + t);
        },
        requiredBillingContactFields: function(e) {
          return e.requestPayerName ? ["postalAddress"] : null;
        },
        requiredShippingContactFields: function(e) {
          var t = [];
          return (
            e.requestShipping && t.push("postalAddress"),
            e.requestPayerEmail && t.push("email"),
            e.requestPayerPhone && t.push("phone"),
            t.length ? t : null
          );
        },
        countryCode: ao("country"),
        currencyCode: ao("currency"),
        merchantCapabilities: ((so = "merchantCapabilities"),
        function(e) {
          return e[so] || null;
        }),
        supportedNetworks: function(e) {
          var t,
            n,
            r = ((t = e.country),
            (n = e.jcbEnabled || !1),
            Vr(t, n).reduce(function(e, t) {
              return "mastercard" === t
                ? [].concat(Kr(e), ["masterCard"])
                : "diners" === t
                ? e
                : [].concat(Kr(e), [t]);
            }, []));
          return Ir(4) && r.push("maestro"), r;
        }
      },
      mo = {
        status: function(e) {
          var t = co[e.status];
          return Ir(3) && 1 < t ? 1 : t;
        },
        error: function(e) {
          return Ir(3) ? uo[e.status]() : null;
        }
      },
      ho = no({}, po, fo),
      _o = no({}, po, mo),
      yo = function(e) {
        var r = no({}, Ar, e);
        return Object.keys(ho).reduce(function(e, t) {
          var n = (0, ho[t])(r);
          return null !== n ? no({}, e, ro({}, t, n)) : e;
        }, {});
      },
      vo = function(r) {
        return Object.keys(_o).reduce(function(e, t) {
          var n = (0, _o[t])(r);
          return null !== n ? no({}, e, ro({}, t, n)) : e;
        }, {});
      };
    function bo(e) {
      return "string" == typeof e ? e : null;
    }
    function go(e) {
      return e
        ? [e.givenName, e.familyName]
            .filter(function(e) {
              return e && "string" == typeof e;
            })
            .join(" ")
        : null;
    }
    var wo = function(e) {
        var t = e.addressLines,
          n = e.countryCode,
          r = e.postalCode,
          o = e.administrativeArea,
          i = e.locality,
          a = e.phoneNumber,
          s = bo(n);
        return {
          addressLine: Array.isArray(t)
            ? t.reduce(function(e, t) {
                return "string" == typeof t
                  ? [].concat(
                      (function(e) {
                        if (Array.isArray(e)) {
                          for (
                            var t = 0, n = Array(e.length);
                            t < e.length;
                            t++
                          )
                            n[t] = e[t];
                          return n;
                        }
                        return Array.from(e);
                      })(e),
                      [t]
                    )
                  : e;
              }, [])
            : [],
          country: s ? s.toUpperCase() : "",
          postalCode: bo(r) || "",
          recipient: go(e) || "",
          region: bo(o) || "",
          city: bo(i) || "",
          phone: bo(a) || "",
          sortingCode: "",
          dependentLocality: "",
          organization: ""
        };
      },
      Eo = function(e, t) {
        var n = e.identifier,
          r = e.label;
        return t.filter(function(e) {
          return e.id === n && e.label === r;
        })[0];
      },
      So = function(e, t) {
        var n,
          r,
          o = e.shippingContact,
          i = e.shippingMethod,
          a = e.billingContact;
        return {
          shippingOption:
            i && t.shippingOptions && t.shippingOptions.length
              ? Eo(i, t.shippingOptions)
              : null,
          shippingAddress: o ? wo(o) : null,
          payerEmail: (r = o) ? bo(r.emailAddress) : null,
          payerPhone: (n = o) ? bo(n.phoneNumber) : null,
          payerName: go(a),
          methodName: "apple-pay"
        };
      },
      Po =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function ko(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var Oo =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    var Ao = {
        austria: "AT",
        sterreich: "AT",
        csterreich: "AT",
        au: "AU",
        australia: "AU",
        belgium: "BE",
        br: "BR",
        brasil: "BR",
        brazil: "BR",
        ca: "CA",
        canada: "CA",
        ch: "CH",
        schweiz: "CH",
        switzerland: "CH",
        china: "CN",
        czechrepublic: "CZ",
        de: "DE",
        deutschland: "DE",
        germany: "DE",
        danmark: "DK",
        denmark: "DK",
        es: "ES",
        espaa: "ES",
        spain: "ES",
        finland: "FI",
        suomi: "FI",
        fr: "FR",
        hk: "HK",
        hongkong: "HK",
        england: "GB",
        gb: "GB",
        uk: "GB",
        unitedkingdom: "GB",
        scotland: "GB",
        wales: "GB",
        it: "IT",
        italy: "IT",
        italia: "IT",
        japan: "JP",
        lietuva: "LT",
        luxembourg: "LU",
        netherlands: "NL",
        nederland: "NL",
        norway: "NO",
        poland: "PL",
        polska: "PL",
        russia: "RU",
        saudiarabia: "SA",
        se: "SE",
        sweden: "SE",
        sverige: "SE",
        singapore: "SG",
        us: "US",
        usa: "US",
        unitedstatesofamerica: "US",
        unitedstates: "US",
        estadosunidos: "US"
      },
      To = function(e, t) {
        return e && "object" === (void 0 === e ? "undefined" : Oo(e))
          ? t(e)
          : null;
      };
    function Io(e) {
      var s = this;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, Io),
        (this._onEvent = function() {}),
        (this.setEventHandler = function(e) {
          s._onEvent = e;
        }),
        (this.canMakePayment = function() {
          return Wr(
            window.location.hostname,
            s._authentication.accountId,
            C(s._authentication.apiKey) === I.test,
            s._report,
            s._minimumVersion
          );
        }),
        (this.update = function(e) {
          (s._initialPaymentRequest = fn(s._paymentRequestOptions, e)),
            s._initializeSessionState();
        }),
        (this.show = function() {
          s._initializeSessionState();
          var e = void 0;
          try {
            e = new window.ApplePaySession(
              s._minimumVersion,
              yo(s._paymentRequestOptions)
            );
          } catch (e) {
            throw "Must create a new ApplePaySession from a user gesture handler." ===
            e.message
              ? new S(
                  "show() must be called from a user gesture handler (such as a click handler, after the user clicks a button)."
                )
              : e;
          }
          (s._privateSession = e),
            s._setupSession(e, s._usesButtonElement()),
            e.begin(),
            (s._isShowing = !0);
        }),
        (this.abort = function() {
          s._privateSession && s._privateSession.abort();
        }),
        (this._warn = function(e) {}),
        (this._report = function(e, t) {
          s._controller.report(
            e,
            Po({}, t, {
              backingLibrary: "APPLE_PAY",
              usesButtonElement: s._usesButtonElement()
            })
          );
        }),
        (this._validateMerchant = function(t, n) {
          return function(e) {
            s._controller.action
              .createApplePaySession({
                data: {
                  validation_url: e.validationURL,
                  domain_name: window.location.hostname,
                  display_name: s._paymentRequestOptions.total.label
                },
                usesButtonElement: n
              })
              .then(function(e) {
                if (s._isShowing)
                  switch (e.type) {
                    case "object":
                      t.completeMerchantValidation(
                        JSON.parse(e.object.session)
                      );
                      break;
                    case "error":
                      s._handleValidationError(t)(e.error);
                      break;
                    default:
                      Object(m.a)(e);
                  }
              }, s._handleValidationError(t));
          };
        }),
        (this._handleValidationError = function(n) {
          return function(e) {
            s._report("error.pr.apple_pay.session_creation_failed", {
              error: e
            }),
              n.abort();
            var t = e.message;
            "string" == typeof t && s._controller.warn(t);
          };
        }),
        (this._paymentAuthorized = function(i) {
          return function(e) {
            var o = e.payment,
              t = s._usesButtonElement() ? ye.paymentRequestButton : null;
            s._controller.action
              .tokenizeWithData({
                type: "apple_pay",
                elementName: t,
                tokenData: Po({}, o, {
                  billingContact: To(o.billingContact, s._normalizeContact)
                }),
                mids: s._mids
              })
              .then(function(e) {
                var t, n, r;
                "error" === e.type
                  ? (i.completePayment(window.ApplePaySession.STATUS_FAILURE),
                    s._report("error.pr.create_token_failed", {
                      error: e.error
                    }))
                  : ((t = To(o.shippingContact, s._normalizeContact)),
                    (n = To(o.billingContact, s._normalizeContact)),
                    t &&
                      s._paymentRequestOptions.requestShipping &&
                      !t.countryCode &&
                      i.completePayment(
                        window.ApplePaySession
                          .STATUS_INVALID_SHIPPING_POSTAL_ADDRESS
                      ),
                    (r = So(
                      { shippingContact: t, billingContact: n },
                      s._paymentRequestOptions
                    )),
                    s._onToken(i)(
                      Po({}, r, {
                        shippingOption: s._privateShippingOption,
                        token: e.object
                      })
                    ));
              });
          };
        }),
        (this._normalizeContact = function(e) {
          if (e.country && "string" == typeof e.country) {
            var t = e.country.toLowerCase().replace(/[^a-z]+/g, ""),
              n = void 0;
            return (
              e.countryCode
                ? "string" == typeof e.countryCode &&
                  (n = e.countryCode.toUpperCase())
                : (n = Ao[t]) ||
                  s._report("warn.pr.apple_pay.missing_country_code", {
                    country: e.country
                  }),
              Po({}, e, { countryCode: n })
            );
          }
          return e;
        }),
        (this._onToken = function(t) {
          return function(e) {
            s._onEvent({
              type: "paymentresponse",
              payload: Po({}, e, { complete: ze(s._completePayment(t)) })
            });
          };
        }),
        (this._completePayment = function(o) {
          return function(e) {
            s._paymentRequestOptions = fn(s._paymentRequestOptions, {
              status: e
            });
            var t = vo(s._paymentRequestOptions),
              n = t.status,
              r = t.error;
            s._isShowing &&
              (r
                ? o.completePayment({ status: n, errors: [r] })
                : o.completePayment(n)),
              (0 === n || (1 === n && null == r)) &&
                ((s._isShowing = !1),
                s._onEvent && s._onEvent({ type: "close" }));
          };
        }),
        (this._shippingContactSelected = function(t) {
          return function(e) {
            s._onEvent({
              type: "shippingaddresschange",
              payload: {
                shippingAddress: wo(s._normalizeContact(e.shippingContact)),
                updateWith: ze(s._completeShippingContactSelection(t))
              }
            });
          };
        }),
        (this._completeShippingContactSelection = function(a) {
          return function(e) {
            (s._paymentRequestOptions = fn(s._paymentRequestOptions, e)),
              s._paymentRequestOptions.shippingOptions &&
                s._paymentRequestOptions.shippingOptions.length &&
                (s._privateShippingOption =
                  s._paymentRequestOptions.shippingOptions[0]);
            var t = vo(s._paymentRequestOptions),
              n = t.status,
              r = t.shippingMethods,
              o = t.total,
              i = t.lineItems;
            a.completeShippingContactSelection(n, r, o, i);
          };
        }),
        (this._shippingMethodSelected = function(n) {
          return function(e) {
            var t;
            s._paymentRequestOptions.shippingOptions &&
              ((t = Eo(
                e.shippingMethod,
                s._paymentRequestOptions.shippingOptions
              )),
              (s._privateShippingOption = t),
              s._onEvent({
                type: "shippingoptionchange",
                payload: {
                  shippingOption: t,
                  updateWith: ze(s._completeShippingMethodSelection(n))
                }
              }));
          };
        }),
        (this._completeShippingMethodSelection = function(i) {
          return function(e) {
            s._paymentRequestOptions = fn(s._paymentRequestOptions, e);
            var t = vo(s._paymentRequestOptions),
              n = t.status,
              r = t.total,
              o = t.lineItems;
            i.completeShippingMethodSelection(n, r, o);
          };
        });
      var t = e.controller,
        n = e.authentication,
        r = e.mids,
        o = e.options,
        i = e.usesButtonElement,
        a = e.listenerRegistry;
      (this._controller = t),
        (this._authentication = n),
        (this._mids = r),
        (this._minimumVersion = o.__minApplePayVersion || zr),
        (this._usesButtonElement = i),
        (this._listenerRegistry = a),
        (this._initialPaymentRequest = o),
        (this._isShowing = !1),
        this._initializeSessionState();
    }
    var Co = ((function(e, t, n) {
        return t && ko(e.prototype, t), n && ko(e, n), e;
      })(Io, [
        {
          key: "_initializeSessionState",
          value: function() {
            (this._paymentRequestOptions = Po(
              {},
              Ar,
              this._initialPaymentRequest,
              { status: Or.success }
            )),
              (this._privateSession = null),
              (this._privateShippingOption = null);
            var e = this._paymentRequestOptions.shippingOptions;
            e && e.length && (this._privateShippingOption = e[0]);
          }
        },
        {
          key: "_setupSession",
          value: function(e, t) {
            var n = this;
            this._listenerRegistry.addEventListener(
              e,
              "validatemerchant",
              ze(this._validateMerchant(e, t))
            ),
              this._listenerRegistry.addEventListener(
                e,
                "paymentauthorized",
                ze(this._paymentAuthorized(e))
              ),
              this._listenerRegistry.addEventListener(
                e,
                "cancel",
                ze(function() {
                  (n._isShowing = !1),
                    n._onEvent({ type: "cancel" }),
                    n._onEvent({ type: "close" });
                })
              ),
              this._listenerRegistry.addEventListener(
                e,
                "shippingcontactselected",
                ze(this._shippingContactSelected(e))
              ),
              this._listenerRegistry.addEventListener(
                e,
                "shippingmethodselected",
                ze(this._shippingMethodSelected(e))
              );
          }
        }
      ]),
      Io),
      Ro = null;
    var jo = function(e) {
        return null !== Ro
          ? E.resolve(Ro)
          : e().then(function(e) {
              return (Ro = e);
            });
      },
      No = function() {
        return !(!kt && !Ot);
      },
      Mo =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    var xo = function e(t) {
        var i = this;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._mids = null),
          (this._frame = null),
          (this._initFrame = function(e) {
            var t = i._controller.createHiddenFrame(
              he.PAYMENT_REQUEST_GOOGLE_PAY,
              {
                authentication: i._authentication,
                mids: i._mids,
                origin: i._origin
              }
            );
            t.send({ action: "stripe-pr-initialize", payload: { data: e } }),
              i._initFrameEventHandlers(t),
              (i._frame = t);
          }),
          (this._initFrameEventHandlers = function(o) {
            o._on("pr-cancel", function() {
              i._onEvent({ type: "cancel" });
            }),
              o._on("pr-close", function() {
                i._backdrop.fadeOut().then(function() {
                  i._backdrop.unmount();
                }),
                  i._onEvent({ type: "close" });
              }),
              o._on("pr-error", function(e) {
                i._onEvent({
                  type: "error",
                  payload: {
                    errorMessage: e.errorMessage,
                    errorCode: e.errorCode
                  }
                });
              }),
              o._on("pr-callback", function(e) {
                var t = e.event,
                  n = e.options,
                  r = e.nonce;
                switch (t) {
                  case "paymentresponse":
                    i._handlePaymentResponse(o, n, r);
                    break;
                  case "shippingaddresschange":
                    i._handleShippingAddressChange(o, n, r);
                    break;
                  case "shippingoptionchange":
                    i._handleShippingOptionChange(o, n, r);
                    break;
                  default:
                    throw new Error("Unexpected event name: " + t);
                }
              });
          }),
          (this._handlePaymentResponse = function(t, e, n) {
            i._onEvent({
              type: "paymentresponse",
              payload: Mo({}, e, {
                complete: function(e) {
                  t.send({
                    action: "stripe-pr-callback-complete",
                    payload: { nonce: n, data: { status: e } }
                  });
                }
              })
            });
          }),
          (this._handleShippingAddressChange = function(t, e, n) {
            i._onEvent({
              type: "shippingaddresschange",
              payload: Mo({}, e, {
                updateWith: function(e) {
                  t.send({
                    action: "stripe-pr-callback-complete",
                    payload: { nonce: n, data: e }
                  });
                }
              })
            });
          }),
          (this._handleShippingOptionChange = function(t, e, n) {
            i._onEvent({
              type: "shippingoptionchange",
              payload: Mo({}, e, {
                updateWith: function(e) {
                  t.send({
                    action: "stripe-pr-callback-complete",
                    payload: { nonce: n, data: e }
                  });
                }
              })
            });
          }),
          (this.setEventHandler = function(e) {
            i._onEvent = e;
          }),
          (this.canMakePayment = function() {
            if (!No()) return E.resolve(!1);
            if (!i._frame) throw new Error("Frame not initialized.");
            var e = i._frame;
            return jo(function() {
              return e.action.checkCanMakePayment().then(function(e) {
                return !0 === e.available;
              });
            });
          }),
          (this.show = function() {
            i._frame &&
              (i._frame.send({
                action: "stripe-pr-show",
                payload: { data: { usesButtonElement: i._usesButtonElement() } }
              }),
              i._backdrop.mount(),
              i._backdrop.show(),
              i._backdrop.fadeIn());
          }),
          (this.update = function(e) {
            i._frame &&
              i._frame.send({
                action: "stripe-pr-update",
                payload: { data: e }
              });
          }),
          (this.abort = function() {
            i._frame &&
              i._frame.send({ action: "stripe-pr-abort", payload: {} });
          }),
          (this._controller = t.controller),
          (this._authentication = t.authentication),
          (this._mids = t.mids),
          (this._origin = t.origin),
          (this._usesButtonElement = t.usesButtonElement),
          (this._backdrop = new qt({
            lockScrolling: !1,
            lockFocus: !0,
            lockFocusOn: null,
            listenerRegistry: t.listenerRegistry
          })),
          No() &&
            this._controller &&
            (this._controller.action.fetchLocale({ locale: "auto" }),
            this._initFrame(t.options));
      },
      Lo = (function() {
        if (!window.PaymentRequest) return null;
        if (/CriOS\/59/.test(navigator.userAgent)) return null;
        if (/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent))
          return null;
        if (Pt) return null;
        var e = window.PaymentRequest;
        return (
          e.prototype.canMakePayment ||
            (e.prototype.canMakePayment = function() {
              return E.resolve(!1);
            }),
          e
        );
      })(),
      Do = null,
      Bo =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    var qo = function() {
        var i = this;
        (this._onEvent = function() {}),
          (this.setEventHandler = function(e) {
            i._onEvent = e;
          }),
          (this.canMakePayment = function() {
            return (
              (e = i._prFrame),
              C(i._authentication.apiKey),
              I.test,
              null !== Do
                ? E.resolve(Do)
                : Lo && e
                ? e.action.checkCanMakePayment().then(function(e) {
                    var t = e.available;
                    return (Do = !0 === t);
                  })
                : E.resolve(!1)
            );
            var e;
          }),
          (this.update = function(e) {
            var t = i._prFrame;
            t && t.send({ action: "stripe-pr-update", payload: { data: e } });
          }),
          (this.show = function() {
            if (!i._prFrame)
              throw new S("Payment Request is not available in this browser.");
            i._prFrame.send({
              action: "stripe-pr-show",
              payload: { data: { usesButtonElement: i._usesButtonElement() } }
            });
          }),
          (this.abort = function() {
            i._prFrame &&
              i._prFrame.send({ action: "stripe-pr-abort", payload: {} });
          }),
          (this._setupPrFrame = function(o, e) {
            o.send({ action: "stripe-pr-initialize", payload: { data: e } }),
              o._on("pr-cancel", function() {
                i._onEvent({ type: "cancel" });
              }),
              o._on("pr-close", function() {
                i._onEvent({ type: "close" });
              }),
              o._on("pr-error", function(e) {
                i._onEvent({
                  type: "error",
                  payload: {
                    errorMessage: e.message || "",
                    errorCode: e.code || ""
                  }
                });
              }),
              o._on("pr-callback", function(e) {
                var t = e.event,
                  n = e.nonce,
                  r = e.options;
                switch (t) {
                  case "token":
                    i._onEvent({
                      type: "paymentresponse",
                      payload: Bo({}, r, {
                        complete: function(e) {
                          o.send({
                            action: "stripe-pr-callback-complete",
                            payload: { data: { status: e }, nonce: n }
                          });
                        }
                      })
                    });
                    break;
                  case "shippingaddresschange":
                    i._onEvent({
                      type: "shippingaddresschange",
                      payload: {
                        shippingAddress: r.shippingAddress,
                        updateWith: function(e) {
                          o.send({
                            action: "stripe-pr-callback-complete",
                            payload: { nonce: n, data: e }
                          });
                        }
                      }
                    });
                    break;
                  case "shippingoptionchange":
                    i._onEvent({
                      type: "shippingoptionchange",
                      payload: {
                        shippingOption: r.shippingOption,
                        updateWith: function(e) {
                          o.send({
                            action: "stripe-pr-callback-complete",
                            payload: { nonce: n, data: e }
                          });
                        }
                      }
                    });
                    break;
                  default:
                    throw new Error(
                      "Unexpected event from PaymentRequest inner: " + t
                    );
                }
              });
          });
      },
      Fo = function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          qo.call(this);
        var n,
          r = t.authentication,
          o = t.controller,
          i = t.mids,
          a = t.origin,
          s = t.usesButtonElement,
          c = t.options;
        (this._authentication = r),
          (this._controller = o),
          (this._usesButtonElement = s),
          Lo && "https:" === window.location.protocol
            ? (this._controller.action.fetchLocale({ locale: "auto" }),
              (n = this._controller.createHiddenFrame(
                he.PAYMENT_REQUEST_BROWSER,
                { authentication: r, mids: i, origin: a }
              )),
              this._setupPrFrame(n, c),
              (this._prFrame = n))
            : (this._prFrame = null);
      },
      Uo =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function Ho(e, t) {
      var n,
        r = {};
      for (n in e)
        0 <= t.indexOf(n) ||
          (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
      return r;
    }
    var Go = ((function(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    })(zo, We),
    zo);
    function zo(e) {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, zo);
      var t = (function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (zo.__proto__ || Object.getPrototypeOf(zo)).call(this));
      Vo.call(t),
        (t._controller = e.controller),
        (t._authentication = e.authentication),
        (t._mids = e.mids),
        (t._listenerRegistry = e.listenerRegistry),
        t._report("pr.options", { options: e.rawOptions });
      var n = me(Br, e.rawOptions || {}, "paymentRequest()"),
        r = n.value;
      if (
        (n.warnings.forEach(function(e) {
          return t._warn(e);
        }),
        r.__billingDetailsEmailOverride && r.requestPayerEmail)
      )
        throw new S(
          "When providing `__billingDetailsEmailOverride`, `requestPayerEmail` has to be `false` so that the customer is not prompted for their email in the payment sheet."
        );
      return (
        r.wallets
          ? ((t._queryStrategy = Gr(r.wallets, e.betas)),
            (t._isCustomizedQueryStrategy = !0))
          : (t._queryStrategy = e.queryStrategyOverride || Hr(e.betas)),
        t._report("pr.query_strategy", { queryStrategy: t._queryStrategy }),
        (t._initialOptions = Uo({}, r, {
          __skipGooglePayInPaymentRequest:
            -1 !== t._queryStrategy.indexOf("GOOGLE_PAY")
        })),
        Ln(e.betas, Nn.google_pay_beta_2) && (t._shouldTimeout = !1),
        t._initBackingLibraries(t._initialOptions),
        t
      );
    }
    var Yo,
      Wo,
      Ko,
      Vo = function() {
        var f = this;
        (this._shouldTimeout = !0),
          (this._usedByButtonElement = null),
          (this._showCalledByButtonElement = !1),
          (this._isShowing = !1),
          (this._backingLibraries = {
            APPLE_PAY: null,
            GOOGLE_PAY: null,
            BROWSER: null
          }),
          (this._activeBackingLibraryName = null),
          (this._activeBackingLibrary = null),
          (this._isCustomizedQueryStrategy = !1),
          (this._canMakePaymentAvailability = {
            APPLE_PAY: null,
            GOOGLE_PAY: null,
            BROWSER: null
          }),
          (this._canMakePaymentResolved = !1),
          (this._validateUserOn = function(e, t) {
            "string" == typeof e &&
              (("source" === e && f._hasRegisteredListener("paymentmethod")) ||
                ("paymentmethod" === e &&
                  f._hasRegisteredListener("source"))) &&
              (f._report("pr.double_callback_registration"),
              f._controller.warn(
                "Do not register event listeners for both `source` or `paymentmethod`. Only one of them will succeed."
              ));
          }),
          (this._report = function(e, t) {
            f._controller.report(
              e,
              Uo({}, t, {
                activeBackingLibrary: f._activeBackingLibraryName,
                usesButtonElement: f._usedByButtonElement || !1
              })
            );
          }),
          (this._warn = function(e) {
            f._controller.warn(e);
          }),
          (this._registerElement = function() {
            f._usedByButtonElement = !0;
          }),
          (this._elementShow = function() {
            (f._showCalledByButtonElement = !0), f.show();
          }),
          (this._initBackingLibraries = function(n) {
            f._queryStrategy.forEach(function(e) {
              var t = {
                controller: f._controller,
                authentication: f._authentication,
                mids: f._mids,
                origin: window.location.origin,
                options: n,
                usesButtonElement: function() {
                  return !0 === f._usedByButtonElement;
                },
                listenerRegistry: f._listenerRegistry
              };
              switch (e) {
                case "APPLE_PAY":
                  (f._backingLibraries.APPLE_PAY = new Co(t)),
                    f._backingLibraries.APPLE_PAY.setEventHandler(
                      f._handleInternalEvent
                    );
                  break;
                case "GOOGLE_PAY":
                  (f._backingLibraries.GOOGLE_PAY = new xo(t)),
                    f._backingLibraries.GOOGLE_PAY.setEventHandler(
                      f._handleInternalEvent
                    );
                  break;
                case "BROWSER":
                  (f._backingLibraries.BROWSER = new Fo(t)),
                    f._backingLibraries.BROWSER.setEventHandler(
                      f._handleInternalEvent
                    );
                  break;
                default:
                  Object(m.a)(e);
              }
            });
          }),
          (this._handleInternalEvent = function(e) {
            switch (e.type) {
              case "paymentresponse":
                f._emitPaymentResponse(e.payload);
                break;
              case "error":
                f._report("error.pr.internal_error", { error: e.payload });
                break;
              case "close":
                f._isShowing = !1;
                break;
              default:
                f._emitExternalEvent(e);
            }
          }),
          (this._emitExternalEvent = function(a) {
            switch (a.type) {
              case "cancel":
                f._emit("cancel");
                break;
              case "shippingoptionchange":
              case "shippingaddresschange":
                var s = a.type,
                  c = a.payload,
                  u = null,
                  l = !1,
                  p = !1,
                  e = function(e) {
                    if (p && l)
                      return (
                        f._report("pr.update_with_called_after_timeout", {
                          event: s
                        }),
                        void f._controller.warn(
                          "Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds."
                        )
                      );
                    if (l)
                      return (
                        f._report("pr.update_with_double_call", { event: s }),
                        void f._controller.warn(
                          "Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once."
                        )
                      );
                    u && clearTimeout(u),
                      (l = !0),
                      f._report("pr.update_with", { event: s, updates: e });
                    var t = me(Fr, e || {}, s + " callback"),
                      n = t.value;
                    t.warnings.forEach(function(e) {
                      return f._controller.warn(e);
                    });
                    var r = n,
                      o = !1;
                    f._initialOptions.__isCheckout &&
                      "APPLE_PAY" === f._activeBackingLibraryName &&
                      n.shippingOptions &&
                      1 === n.shippingOptions.length &&
                      0 === n.shippingOptions[0].amount &&
                      (n.shippingOptions,
                      (r = Ho(n, ["shippingOptions"])),
                      (o = !0));
                    var i =
                      n.shippingOptions || f._initialOptions.shippingOptions;
                    if (
                      !(
                        o ||
                        "shippingaddresschange" !== a.type ||
                        n.status !== Or.success ||
                        (i && i.length)
                      )
                    )
                      throw new S(
                        "When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there."
                      );
                    c.updateWith(r);
                  };
                f._hasRegisteredListener(a.type)
                  ? ((u = setTimeout(function() {
                      (p = !0),
                        f._report("pr.update_with_timed_out", { event: s }),
                        f._controller.warn(
                          'Timed out waiting for a call to updateWith(). If you listen to "' +
                            a.type +
                            '" events, then you must call event.updateWith in the "' +
                            a.type +
                            '" handler within 30 seconds.'
                        ),
                        e({ status: "fail" });
                    }, 29900)),
                    f._emit(s, Uo({}, c, { updateWith: e })))
                  : e({ status: "success" });
                break;
              case "token":
              case "source":
              case "paymentmethod":
                var t = a.type,
                  r = a.payload,
                  o = null,
                  i = !1,
                  d = !1,
                  n = function(e) {
                    if (i && d)
                      return (
                        f._report("pr.complete_called_after_timeout"),
                        void f._controller.warn(
                          "Call to complete() was ignored because it has already timed out. Please ensure that complete is called within 30 seconds."
                        )
                      );
                    if (d)
                      return (
                        f._report("pr.complete_double_call"),
                        void f._controller.warn(
                          "Call to complete() was ignored because it has already been called. Do not call complete more than once."
                        )
                      );
                    o && clearTimeout(o), (d = !0);
                    var t = me(Ur, e, "status for PaymentRequest completion"),
                      n = t.value;
                    t.warnings.forEach(function(e) {
                      return f._controller.warn(e);
                    }),
                      r.complete(n);
                  },
                  o = setTimeout(function() {
                    (i = !0),
                      f._report("pr.complete_timed_out"),
                      f._controller.warn(
                        'Timed out waiting for a call to complete(). Once you have processed the payment in the "' +
                          a.type +
                          '" handler, you must call event.complete within 30 seconds.'
                      ),
                      n("fail");
                  }, 29900);
                f._emit(t, Uo({}, r, { complete: n }));
                break;
              default:
                Object(m.a)(a);
            }
          }),
          (this._maybeEmitPaymentResponse = function(e) {
            f._isShowing && f._emitExternalEvent(e);
          }),
          (this._emitPaymentResponse = function(e) {
            f._report("pr.payment_authorized");
            var t = e.token,
              n = Ho(e, ["token"]),
              r = n.payerEmail,
              o = n.payerPhone,
              i = n.complete,
              a = f._showCalledByButtonElement ? ye.paymentRequestButton : null;
            f._hasRegisteredListener("token") &&
              f._maybeEmitPaymentResponse({ type: "token", payload: e }),
              f._hasRegisteredListener("source") &&
                f._controller.action
                  .createSourceWithData({
                    elementName: a,
                    type: "card",
                    sourceData: {
                      token: t.id,
                      owner: {
                        email:
                          f._initialOptions.__billingDetailsEmailOverride || r,
                        phone: o
                      }
                    },
                    mids: null
                  })
                  .then(function(e) {
                    "error" === e.type
                      ? e.error.code && "email_invalid" === e.error.code
                        ? i("invalid_payer_email")
                        : (f._report("fatal.pr.token_to_source_failed", {
                            error: e.error,
                            token: t.id
                          }),
                          i("fail"))
                      : f._maybeEmitPaymentResponse({
                          type: "source",
                          payload: Uo({}, n, { source: e.object })
                        });
                  }),
              f._hasRegisteredListener("paymentmethod") &&
                f._controller.action
                  .createPaymentMethodWithData({
                    elementName: a,
                    type: "card",
                    paymentMethodData: {
                      card: { token: t.id },
                      billing_details: {
                        email:
                          f._initialOptions.__billingDetailsEmailOverride || r,
                        phone: o
                      }
                    },
                    mids: null
                  })
                  .then(function(e) {
                    "error" === e.type
                      ? e.error.code && "email_invalid" === e.error.code
                        ? i("invalid_payer_email")
                        : (f._report(
                            "fatal.pr.token_to_payment_method_failed",
                            { error: e.error, token: t.id }
                          ),
                          i("fail"))
                      : f._maybeEmitPaymentResponse({
                          type: "paymentmethod",
                          payload: Uo({}, n, { paymentMethod: e.object })
                        });
                  });
          }),
          (this._canMakePaymentForBackingLibrary = function(o) {
            var e = f._backingLibraries[o];
            if (!e)
              throw new Error(
                "Unexpectedly calling canMakePayment on uninitialized backing library."
              );
            return E.race([
              new E(function(e) {
                f._shouldTimeout && setTimeout(e, 1e4);
              }).then(function() {
                return !1;
              }),
              e.canMakePayment().then(function(e) {
                return !!e;
              })
            ]).then(function(e) {
              var t, n, r;
              return (
                (f._canMakePaymentAvailability = Uo(
                  {},
                  f._canMakePaymentAvailability,
                  ((r = e),
                  (n = o) in (t = {})
                    ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (t[n] = r),
                  t)
                )),
                { backingLibraryName: o, available: e }
              );
            });
          }),
          (this._constructCanMakePaymentResponse = function() {
            return Uo(
              { applePay: !!f._canMakePaymentAvailability.APPLE_PAY },
              -1 !== f._queryStrategy.indexOf("GOOGLE_PAY")
                ? { googlePay: !!f._canMakePaymentAvailability.GOOGLE_PAY }
                : {}
            );
          }),
          (this.canMakePayment = ze(function() {
            if ((f._report("pr.can_make_payment"), f._canMakePaymentResolved)) {
              var e =
                null !== f._activeBackingLibrary
                  ? f._constructCanMakePaymentResponse()
                  : null;
              return (
                f._report("pr.can_make_payment_response", {
                  response: e,
                  cached: !0
                }),
                E.resolve(e)
              );
            }
            if ("https:" !== window.location.protocol)
              return (
                f._controller.warn(
                  "If you are testing the PaymentRequest button (to accept Apple Pay, Google Pay, etc.) you must serve this page over HTTPS as it will not work over HTTP. Please read https://stripe.com/docs/stripe-js/elements/payment-request-button#html-js-prerequisites for more details."
                ),
                (f._canMakePaymentResolved = !0),
                E.resolve(null)
              );
            if (f._isCustomizedQueryStrategy && window.self !== window.top)
              return (
                f._controller.warn(
                  "You must use Stripe PaymentRequest in the top level frame if you specify which wallets are available."
                ),
                (f._canMakePaymentResolved = !0),
                E.resolve(null)
              );
            var t = f._queryStrategy.map(function(e) {
                return function() {
                  return f._canMakePaymentForBackingLibrary(e);
                };
              }),
              r = new b();
            return Er(t, function(e) {
              var t = e.backingLibraryName,
                n = e.available;
              return (
                n &&
                  ((f._activeBackingLibraryName = t),
                  (f._activeBackingLibrary = f._backingLibraries[t])),
                n
              );
            }).then(function(e) {
              var t = new b();
              f._canMakePaymentResolved = !0;
              var n = null;
              return (
                "SATISFIED" === e.type &&
                  (n = f._constructCanMakePaymentResponse()),
                f._report("pr.can_make_payment_response", {
                  response: n,
                  cached: !1,
                  duration: r.getElapsedTime(t)
                }),
                n
              );
            });
          })),
          (this.update = ze(function(e) {
            if (f._isShowing)
              throw (f._report("pr.update_called_while_showing"),
              new S(
                "You cannot update Payment Request options while the payment sheet is showing."
              ));
            f._report("pr.update", { updates: e });
            var t = me(qr, e, "PaymentRequest update()"),
              n = t.value;
            t.warnings.forEach(function(e) {
              return f._warn(e);
            }),
              f._activeBackingLibrary && f._activeBackingLibrary.update(n);
          })),
          (this.show = ze(function() {
            if (
              (f._usedByButtonElement &&
                !f._showCalledByButtonElement &&
                (f._report("pr.show_called_with_button"),
                f._warn(
                  "Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet."
                )),
              !f._canMakePaymentResolved)
            )
              throw (f._report("pr.show_called_before_can_make_payment"),
              new S(
                "You must first check the Payment Request API's availability using paymentRequest.canMakePayment() before calling show()."
              ));
            if (!f._activeBackingLibrary)
              throw (f._report("pr.show_called_with_can_make_payment_false"),
              new S("Payment Request is not available in this browser."));
            var e = f._activeBackingLibrary;
            f._report("pr.show", {
              listeners: Object.keys(f._callbacks).sort()
            }),
              (f._isShowing = !0),
              e.show();
          })),
          (this.abort = ze(function() {
            var e;
            f._activeBackingLibrary &&
              ((e = f._activeBackingLibrary), f._report("pr.abort"), e.abort());
          })),
          (this.isShowing = function() {
            return f._isShowing;
          });
      },
      Jo = Go,
      $o = {
        base: H(te),
        complete: H(te),
        empty: H(te),
        invalid: H(te),
        paymentRequestButton: H(te)
      },
      Xo = {
        classes: H(
          fe({
            base: H(V),
            complete: H(V),
            empty: H(V),
            focus: H(V),
            invalid: H(V),
            webkitAutofill: H(V)
          })
        ),
        hidePostalCode: H($),
        hideIcon: H($),
        showIcon: H($),
        style: H(fe($o)),
        iconStyle: H(W("solid", "default")),
        value: H(G(V, te)),
        __privateCvcOptional: H($),
        __privateValue: H(G(V, te)),
        __privateEmitIbanValue: H($),
        error: H(fe({ type: V, code: H(V), decline_code: H(V), param: H(V) })),
        locale: oe("elements()"),
        fonts: oe("elements()"),
        placeholder: H(V),
        disabled: H($),
        placeholderCountry: H(V),
        paymentRequest: H(
          ((Yo = Jo),
          (Wo = "stripe.paymentRequest(...)"),
          function(e, t) {
            return e instanceof Yo ? D(e) : F("a " + Wo + " instance", e, t);
          })
        ),
        supportedCountries: H(ne(V)),
        accountHolderType: H(W("individual", "company")),
        issuingCard: H(V)
      },
      Qo = fe(Xo);
    function Zo(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function ei(e, t) {
      return ((n = e) !== ye.cardNumber &&
        n !== ye.cardExpiry &&
        n !== ye.cardCvc) ||
        !t.cl
        ? ni[e]
        : he.CARD_LIGHT_ELEMENT;
      var n;
    }
    function ti(e) {
      switch (e.type) {
        case "object":
          return ri.push(e.object.id), { issuingCard: e.object };
        case "error":
          return { error: e.error };
        default:
          return Object(m.a)(e);
      }
    }
    var ni = (Zo((Ko = {}), ye.card, he.CARD_ELEMENT),
      Zo(Ko, ye.cardNumber, he.CARD_ELEMENT),
      Zo(Ko, ye.cardExpiry, he.CARD_ELEMENT),
      Zo(Ko, ye.cardCvc, he.CARD_ELEMENT),
      Zo(Ko, ye.postalCode, he.CARD_ELEMENT),
      Zo(Ko, ye.paymentRequestButton, he.PAYMENT_REQUEST_ELEMENT),
      Zo(Ko, ye.iban, he.IBAN_ELEMENT),
      Zo(Ko, ye.idealBank, he.IDEAL_BANK_ELEMENT),
      Zo(Ko, ye.p24Bank, he.P24_BANK_ELEMENT),
      Zo(Ko, ye.auBankAccount, he.AU_BANK_ACCOUNT_ELEMENT),
      Zo(Ko, ye.fpxBank, he.FPX_BANK_ELEMENT),
      Zo(
        Ko,
        ye.issuingCardNumberDisplay,
        he.ISSUING_CARD_NUMBER_DISPLAY_ELEMENT
      ),
      Zo(Ko, ye.issuingCardCvcDisplay, he.ISSUING_CARD_CVC_DISPLAY_ELEMENT),
      Zo(
        Ko,
        ye.issuingCardExpiryDisplay,
        he.ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT
      ),
      Zo(Ko, ye.epsBank, he.EPS_BANK_ELEMENT),
      Zo(Ko, ye.netbankingBank, he.NETBANKING_BANK_ELEMENT),
      Ko),
      ri = ["test_id"],
      oi = function(e) {
        return -1 !== ri.indexOf(e);
      },
      ii =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function ai(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function si(e, t) {
      var n,
        r = {};
      for (n in e)
        0 <= t.indexOf(n) ||
          (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
      return r;
    }
    function ci(e) {
      return parseFloat(e.toFixed(1));
    }
    var ui = {
        base: "StripeElement",
        focus: "StripeElement--focus",
        invalid: "StripeElement--invalid",
        complete: "StripeElement--complete",
        empty: "StripeElement--empty",
        webkitAutofill: "StripeElement--webkit-autofill"
      },
      li = "#faffbd",
      pi = {
        margin: "0",
        padding: "0",
        border: "none",
        display: "block",
        background: "transparent",
        position: "relative",
        opacity: "1"
      },
      di = {
        border: "none",
        display: "block",
        position: "absolute",
        height: "1px",
        top: "-1px",
        left: "0",
        padding: "0",
        margin: "0",
        width: "100%",
        opacity: "0",
        background: "transparent",
        "pointer-events": "none",
        "font-size": "16px"
      };
    function fi(e) {
      var n = this;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, fi),
        (this.focus = function() {
          if (n._isIssuingElement())
            throw new S(
              "Cannot call focus() on an " + n._componentName + " Element."
            );
          document.activeElement &&
            document.activeElement.blur &&
            document.activeElement.blur(),
            n._fakeInput.focus();
        }),
        (this._formSubmit = function() {
          for (
            var e, t = n._component.parentElement;
            t && "FORM" !== t.nodeName;

          )
            t = t.parentElement;
          t &&
            ((e = document.createEvent("Event")).initEvent("submit", !0, !0),
            t.dispatchEvent(e));
        });
      var t = e.options,
        r = e.component,
        o = e.listenerRegistry,
        i = e.elementTimings,
        a = e.emitEvent,
        s = e.getParent,
        c = t.controller,
        u = t.componentName,
        l = t.publicOptions;
      (this._componentName = u),
        (this._component = r),
        (this._controller = c),
        (this._listenerRegistry = o),
        (this._emitEvent = a),
        (this._getParent = s);
      var p = me(Qo, l || {}, "create()"),
        d = p.value;
      p.warnings.forEach(function(e) {
        return n._controller.warn(e);
      });
      var f = d.paymentRequest,
        m = d.classes,
        h = d.issuingCard,
        _ = "paymentRequestButton" === this._componentName;
      if (_) {
        if (!f)
          throw new S(
            "You must pass in a stripe.paymentRequest object in order to use this Element."
          );
        (this._paymentRequest = f), this._paymentRequest._registerElement();
      }
      if (this._isIssuingElement()) {
        if (!h)
          throw new Error(
            "You must pass in an ID to the issuingCard option in order to use this Element."
          );
        if (!oi(h))
          throw new Error("Issuing card " + h + " has not been retrieved.");
      }
      this._createElement(t, d, i),
        (this._classes = ui),
        this._computeCustomClasses(m || {}),
        (this._lastBackgroundColor = ""),
        (this._focused = !1),
        (this._empty = !_),
        (this._invalid = !1),
        (this._complete = !1),
        (this._autofilled = !1),
        (this._lastSubmittedAt = null);
    }
    var mi = ((function(e, t, n) {
        return t && ai(e.prototype, t), n && ai(e, n), e;
      })(fi, [
        {
          key: "update",
          value: function(e) {
            var t,
              n,
              r = this,
              o = me(Qo, e || {}, "element.update()"),
              i = o.value;
            o.warnings.forEach(function(e) {
              return r._controller.warn(e);
            }),
              i &&
                ((t = i.classes),
                (n = si(i, ["classes"])),
                t &&
                  (this._removeClasses(),
                  this._computeCustomClasses(t),
                  this._updateClasses()),
                this._updateFrameHeight(i),
                Object.keys(n).length &&
                  (this._frame.update(n),
                  this._secondaryFrame && this._secondaryFrame.update(n)));
          }
        },
        {
          key: "blur",
          value: function() {
            if (this._isIssuingElement())
              throw new S(
                "Cannot call blur() on an " + this._componentName + " Element."
              );
            this._frame.blur(), this._fakeInput.blur();
          }
        },
        {
          key: "clear",
          value: function() {
            this._frame.clear();
          }
        },
        {
          key: "unmount",
          value: function() {
            var e = this._getParent(),
              t = this._label;
            e &&
              (this._listenerRegistry.removeEventListener(
                e,
                "click",
                this.focus
              ),
              this._removeClasses()),
              t &&
                (this._listenerRegistry.removeEventListener(
                  t,
                  "click",
                  this.focus
                ),
                (this._label = null)),
              this._secondaryFrame &&
                (this._secondaryFrame.unmount(),
                this._listenerRegistry.removeEventListener(
                  window,
                  "click",
                  this._handleOutsideClick
                )),
              (this._fakeInput.disabled = !0),
              this._frame.unmount();
          }
        },
        {
          key: "mount",
          value: function() {
            if (this._paymentRequest) {
              if (!this._paymentRequest._canMakePaymentResolved)
                throw new S(
                  "For the paymentRequestButton Element, you must first check availability using paymentRequest.canMakePayment() before mounting the Element."
                );
              if (!this._paymentRequest._activeBackingLibraryName)
                throw new S(
                  "The paymentRequestButton Element is not available in the current environment."
                );
            }
            (this._mountTimestamp = new b()),
              this._findPossibleLabel(),
              this._updateClasses();
          }
        },
        {
          key: "_isIssuingElement",
          value: function() {
            return (
              "issuingCardNumberDisplay" === this._componentName ||
              "issuingCardCvcDisplay" === this._componentName ||
              "issuingCardExpiryDisplay" === this._componentName
            );
          }
        },
        {
          key: "_updateClasses",
          value: function() {
            var e = this._getParent();
            e &&
              Re(e, [
                [this._classes.base, !0],
                [this._classes.empty, this._empty],
                [this._classes.focus, this._focused],
                [this._classes.invalid, this._invalid],
                [this._classes.complete, this._complete],
                [this._classes.webkitAutofill, this._autofilled]
              ]);
          }
        },
        {
          key: "_removeClasses",
          value: function() {
            var e = this._getParent();
            e &&
              Re(e, [
                [this._classes.base, !1],
                [this._classes.empty, !1],
                [this._classes.focus, !1],
                [this._classes.invalid, !1],
                [this._classes.complete, !1],
                [this._classes.webkitAutofill, !1]
              ]);
          }
        },
        {
          key: "_findPossibleLabel",
          value: function() {
            var e = this._getParent();
            if (e) {
              var t = e.getAttribute("id"),
                n = void 0;
              if (
                (t && (n = document.querySelector("label[for='" + t + "']")), n)
              )
                this._listenerRegistry.addEventListener(e, "click", this.focus);
              else
                for (n = n || e.parentElement; n && "LABEL" !== n.nodeName; )
                  n = n.parentElement;
              n
                ? ((this._label = n),
                  this._listenerRegistry.addEventListener(
                    n,
                    "click",
                    this.focus
                  ))
                : this._listenerRegistry.addEventListener(
                    e,
                    "click",
                    this.focus
                  );
            }
          }
        },
        {
          key: "_computeCustomClasses",
          value: function(n) {
            var r = {};
            return (
              Object.keys(n).forEach(function(e) {
                if (!ui[e])
                  throw new S(
                    e +
                      " is not a customizable class name.\nYou can customize: " +
                      Object.keys(ui).join(", ")
                  );
                var t = n[e] || ui[e];
                r[e] = t.replace(/\./g, " ");
              }),
              (this._classes = ii({}, this._classes, r)),
              this
            );
          }
        },
        {
          key: "_setupEvents",
          value: function(e) {
            var n,
              p = this,
              a = e.stripeJsLoadTimestamp,
              s = e.stripeCreateTimestamp,
              c = e.groupCreateTimestamp,
              u = e.createTimestamp,
              l = 0,
              r = 0;
            this._frame._on("load", function(e) {
              var t = e.source;
              l++;
              var n = p._getParent(),
                r = xt(n, null),
                o = !!r && "rtl" === r.getPropertyValue("direction"),
                i = p._paymentRequest
                  ? p._paymentRequest._activeBackingLibraryName
                  : null;
              p._frame.send({
                action: "stripe-user-mount",
                payload: {
                  timestamps: {
                    stripeJsLoad: a.getAsPosixTime(),
                    stripeCreate: s.getAsPosixTime(),
                    groupCreate: c.getAsPosixTime(),
                    create: u.getAsPosixTime(),
                    mount: p._mountTimestamp.getAsPosixTime()
                  },
                  loadCount: l,
                  matchFrame: t === p._frame._iframe.contentWindow,
                  rtl: o,
                  paymentRequestButtonType: i
                }
              });
            }),
              this._secondaryFrame &&
                (n = this._secondaryFrame)._on("load", function(e) {
                  var t = e.source;
                  r++,
                    n.send({
                      action: "stripe-user-mount",
                      payload: {
                        timestamps: {
                          stripeJsLoad: a.getAsPosixTime(),
                          stripeCreate: s.getAsPosixTime(),
                          groupCreate: c.getAsPosixTime(),
                          create: u.getAsPosixTime(),
                          mount: p._mountTimestamp.getAsPosixTime()
                        },
                        loadCount: r,
                        matchFrame: t === n._iframe.contentWindow,
                        rtl: !1,
                        paymentRequestButtonType: null
                      }
                    });
                }),
              this._frame._on("redirectfocus", function(e) {
                var t,
                  n,
                  r,
                  o = e.focusDirection,
                  i = ((t = p._component),
                  (n = o),
                  (r = Array.prototype.slice
                    .call(
                      document.querySelectorAll(
                        "a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]"
                      )
                    )
                    .filter(function(e) {
                      var t = e.getAttribute("tabindex"),
                        n = !t || 0 <= parseInt(t, 10),
                        r = e.getBoundingClientRect(),
                        o = xt(e),
                        i =
                          0 < r.width &&
                          0 < r.height &&
                          o &&
                          "hidden" !== o.getPropertyValue("visibility");
                      return n && i;
                    }))[
                    (function(e, t) {
                      for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
                      return -1;
                    })(r, function(e) {
                      return e === t || t.contains(e);
                    }) + ("previous" === n ? -1 : 1)
                  ]);
                i && i.focus();
              }),
              this._frame._on("focus", function() {
                (p._focused = !0), p._updateClasses();
              }),
              this._frame._on("blur", function() {
                (p._focused = !1),
                  p._updateClasses(),
                  p._lastSubmittedAt &&
                    "paymentRequestButton" === p._componentName &&
                    (p._controller.report(
                      "payment_request_button.sheet_visible",
                      { latency: p._lastSubmittedAt.getElapsedTime() }
                    ),
                    (p._lastSubmittedAt = null));
              }),
              this._frame._on("submit", function() {
                var e, t;
                "paymentRequestButton" === p._componentName
                  ? ((p._lastSubmittedAt = new b()),
                    (t = e = !1),
                    jn(),
                    p._emitEvent("click", {
                      preventDefault: function() {
                        p._controller.report(
                          "payment_request_button.default_prevented"
                        ),
                          e &&
                            p._controller.warn(
                              "event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."
                            ),
                          (t = !0);
                      }
                    }),
                    !t &&
                      p._paymentRequest &&
                      (p._paymentRequest._elementShow(), (e = !0)))
                  : (p._emitEvent("submit"), p._formSubmit());
              }),
              ["ready", "focus", "blur", "escape"].forEach(function(e) {
                p._frame._on(e, function() {
                  p._emitEvent(e);
                });
              }),
              this._frame._on("change", function(t) {
                jn();
                var n = {},
                  e = Vn[p._componentName] || [];
                ["error", "value", "empty", "complete"]
                  .concat(
                    (function(e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++)
                          n[t] = e[t];
                        return n;
                      }
                      return Array.from(e);
                    })(e)
                  )
                  .forEach(function(e) {
                    return (n[e] = t[e]);
                  }),
                  p._emitEvent("change", n),
                  (p._empty = n.empty),
                  (p._invalid = !!n.error),
                  (p._complete = n.complete),
                  p._updateClasses();
              }),
              this._frame._on("__privateIntegrationError", function(e) {
                var t = e.message;
                p._emitEvent("__privateIntegrationError", { message: t });
              }),
              this._frame._on("dimensions", function(e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  c,
                  u,
                  l = p._getParent();
                !l ||
                  ((t = xt(l, null)) &&
                    ((i = parseFloat(t.getPropertyValue("height"))),
                    (n = e.height),
                    "border-box" === t.getPropertyValue("box-sizing") &&
                      ((r = parseFloat(t.getPropertyValue("padding-top"))),
                      (o = parseFloat(t.getPropertyValue("padding-bottom"))),
                      (i =
                        i -
                        parseFloat(t.getPropertyValue("border-top")) -
                        parseFloat(t.getPropertyValue("border-bottom")) -
                        r -
                        o)),
                    (a = ci(i)),
                    (s = ci(n)),
                    0 !== i &&
                      a < s &&
                      p._controller.report("wrapper_height_mismatch", {
                        height: s,
                        outer_height: a
                      }),
                    (c = p._component.getBoundingClientRect().height),
                    (u = ci(c)),
                    0 !== c &&
                      0 !== n &&
                      u !== s &&
                      (p._frame.updateStyle({ height: n + "px" }),
                      p._controller.report("iframe_height_update", {
                        height: s,
                        calculated_height: u
                      }))));
              }),
              this._frame._on("autofill", function() {
                var e,
                  t,
                  n = p._getParent();
                n &&
                  ((t =
                    (e = n.style.backgroundColor) === li ||
                    "rgb(250, 255, 189)" === e),
                  (p._lastBackgroundColor = t ? p._lastBackgroundColor : e),
                  (n.style.backgroundColor = li),
                  (p._autofilled = !0),
                  p._updateClasses());
              }),
              this._frame._on("autofill-cleared", function() {
                var e = p._getParent();
                (p._autofilled = !1),
                  e && (e.style.backgroundColor = p._lastBackgroundColor),
                  p._updateClasses();
              }),
              this._frame._on("update-outer-style", function(t) {
                Object.keys(t).forEach(function(e) {
                  p._component.style.setProperty(e, t[e]);
                });
              });
          }
        },
        {
          key: "_handleOutsideClick",
          value: function() {
            this._secondaryFrame &&
              this._secondaryFrame.send({
                action: "stripe-outside-click",
                payload: {}
              });
          }
        },
        {
          key: "_updateFrameHeight",
          value: function(e, t) {
            var n,
              r,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              p,
              d,
              f = 1 < arguments.length && void 0 !== t && t,
              m = e.style;
            "paymentRequestButton" === this._componentName
              ? ((r =
                  "string" ==
                  typeof (n = ((m && m.paymentRequestButton) || {}).height)
                    ? n
                    : void 0),
                (f || r) &&
                  (this._frame.updateStyle({
                    height: r || this._lastHeight || "40px"
                  }),
                  (this._lastHeight = r || this._lastHeight)))
              : ((a = (o = (m && m.base) || {}).fontSize),
                (s = o.padding),
                (c =
                  "string" != typeof (i = o.lineHeight) || isNaN(parseFloat(i))
                    ? void 0
                    : i),
                (l = "string" == typeof s ? s : void 0),
                (u = "string" == typeof a ? a : void 0) &&
                  !/^\d+(\.\d*)?px$/.test(u) &&
                  this._controller.warn(
                    "The fontSize style you specified (" +
                      u +
                      ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."
                  ),
                (f || c || u) &&
                  ((p =
                    -1 === ke.indexOf(this._componentName)
                      ? void 0
                      : l || this._lastPadding),
                  (d = wr(c || this._lastHeight, u || this._lastFontSize, p)),
                  this._frame.updateStyle({ height: d }),
                  (this._lastFontSize = u || this._lastFontSize),
                  (this._lastHeight = c || this._lastHeight),
                  (this._lastPadding = p)));
          }
        },
        {
          key: "_createElement",
          value: function(e, t, n) {
            var r = this,
              o = (e.controller, e.publicOptions, e.componentName),
              i = e.groupId,
              a = si(e, [
                "controller",
                "publicOptions",
                "componentName",
                "groupId"
              ]),
              s = (t.classes,
              t.paymentRequest,
              si(t, ["classes", "paymentRequest"])),
              c = this._component,
              u = document.createElement("input");
            (u.className = Yn),
              u.setAttribute("aria-hidden", "true"),
              u.setAttribute("aria-label", " "),
              u.setAttribute("autocomplete", "false"),
              (u.maxLength = 1),
              (u.disabled = !0),
              Ue(c, pi),
              Ue(u, di);
            var l,
              p,
              d,
              f = xt(document.body),
              m = !!f && "rtl" === f.getPropertyValue("direction"),
              h = ei(o, this._controller.getFlags()),
              _ = ii({}, a, s, { rtl: m }),
              y = this._controller.createElementFrame(h, o, i, _);
            y._on("load", function() {
              u.disabled = !1;
            }),
              this._listenerRegistry.addEventListener(u, "focus", function() {
                y.focus();
              }),
              St &&
                this._listenerRegistry.addEventListener(
                  document,
                  "transitionstart",
                  function(e) {
                    switch (e.propertyName) {
                      case "opacity":
                      case "transform":
                      case "visibility":
                        var t = e.target;
                        r._getParent() &&
                          t.contains(r._component) &&
                          r._frame.forceRepaint();
                    }
                  },
                  { passive: !0 }
                ),
              y.appendTo(c),
              Jn[o] &&
                ((l = Jn[o].secondary),
                (p = this._controller.createSecondaryElementFrame(
                  h,
                  l,
                  o,
                  i,
                  _
                )) &&
                  p.on &&
                  p.on("height-change", function(e) {
                    p.updateStyle({ height: e.height + "px" });
                  }),
                (this._secondaryFrame = p).appendTo(c),
                this._listenerRegistry.addEventListener(
                  window,
                  "click",
                  function() {
                    return r._handleOutsideClick();
                  }
                )),
              c.appendChild(u),
              Et &&
                o !== ye.paymentRequestButton &&
                (((d = document.createElement("input")).className = Wn),
                d.setAttribute("aria-hidden", "true"),
                d.setAttribute("tabindex", "-1"),
                d.setAttribute("autocomplete", "false"),
                (d.maxLength = 1),
                (d.disabled = !0),
                Ue(d, di),
                c.appendChild(d)),
              (this._frame = y),
              (this._fakeInput = u),
              this._setupEvents(n),
              this._updateFrameHeight(t, !0);
          }
        }
      ]),
      fi),
      hi = function(e, t) {
        var n = (function(e) {
          if (!Hn[e]) throw new Error("Unexpected Element type: " + e + ".");
          return Hn[e].implementation;
        })(e);
        return "legacy" !== n
          ? Object(m.a)(n, "Unexpected implementation type: " + n + ".")
          : new mi(t);
      },
      _i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      yi = function(e, t, n) {
        return t && vi(e.prototype, t), n && vi(e, n), e;
      };
    function vi(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var bi = ((function(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    })(gi, We),
    yi(gi, [
      {
        key: "_checkDestroyed",
        value: function() {
          if (this._destroyed)
            throw new S(
              "This Element has already been destroyed. Please create a new one."
            );
        }
      },
      {
        key: "_isMounted",
        value: function() {
          return !!document.body && document.body.contains(this._component);
        }
      },
      {
        key: "_unmount",
        value: function() {
          var e = this._component.parentElement;
          e && e.removeChild(this._component),
            this._implementation.unmount(),
            (this._parent = null);
        }
      },
      {
        key: "_mountToParent",
        value: function(e) {
          var t = this._component.parentElement,
            n = this._isMounted();
          if (e === t) {
            if (n) return;
            this.unmount(), this._mountTo(e);
          } else if (t) {
            if (n)
              throw new S(
                "This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting."
              );
            this.unmount(), this._mountTo(e);
          } else this._mountTo(e);
        }
      },
      {
        key: "_mountTo",
        value: function(e) {
          for (this._parent = e; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(this._component), this._implementation.mount();
        }
      }
    ]),
    gi);
    function gi(e, t, n) {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, gi);
      var r = (function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (gi.__proto__ || Object.getPrototypeOf(gi)).call(this));
      Ei.call(r);
      var o = e.controller,
        i = e.componentName;
      (r._controller = o), (r._componentName = i), (r._destroyed = !1);
      var a = document.createElement("div");
      return (
        (a.className = zn),
        (r._component = a),
        (r._implementation = hi(r._componentName, {
          options: e,
          component: a,
          listenerRegistry: t,
          elementTimings: n,
          emitEvent: r._emitEvent,
          getParent: r._getParent
        })),
        r
      );
    }
    function wi(e, t) {
      e._controller.report("legacy_private_property_used", {
        prop: t,
        componentName: e._componentName
      });
    }
    var Ei = function() {
      var r = this;
      (this.mount = ze(function(e) {
        r._checkDestroyed();
        var t = void 0;
        if (!e)
          throw new S(
            "Missing argument. Make sure to call mount() with a valid DOM element or selector."
          );
        if ("string" == typeof e) {
          var n = document.querySelectorAll(e);
          if (
            (1 < n.length &&
              r._controller.warn(
                "The selector you specified (" +
                  e +
                  ") applies to " +
                  n.length +
                  " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."
              ),
            !n.length)
          )
            throw new S(
              "The selector you specified (" +
                e +
                ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount()."
            );
          t = n[0];
        } else {
          if (!e.appendChild)
            throw new S(
              "Invalid DOM element. Make sure to call mount() with a valid DOM element or selector."
            );
          t = e;
        }
        if ("INPUT" === t.nodeName)
          throw new S(
            "Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead."
          );
        t.children.length &&
          r._controller.warn(
            "This Element will be mounted to a DOM element that contains child nodes."
          ),
          r._mountToParent(t);
      })),
        (this.update = ze(function(e) {
          return r._checkDestroyed(), r._implementation.update(e), r;
        })),
        (this.focus = ze(function(e) {
          return (
            r._checkDestroyed(),
            e && e.preventDefault(),
            r._implementation.focus(),
            r
          );
        })),
        (this.blur = ze(function() {
          return r._checkDestroyed(), r._implementation.blur(), r;
        })),
        (this.clear = ze(function() {
          return r._checkDestroyed(), r._implementation.clear(), r;
        })),
        (this.unmount = ze(function() {
          return r._checkDestroyed(), r._unmount(), r;
        })),
        (this.destroy = ze(function() {
          return (
            r._checkDestroyed(),
            r.unmount(),
            (r._destroyed = !0),
            r._emitEvent("destroy"),
            r
          );
        })),
        (this._getParent = function() {
          return r._parent;
        }),
        (this._emitEvent = function(e, t) {
          return r._emit(e, _i({ elementType: r._componentName }, t));
        });
    };
    [
      "_autofilled",
      "_classes",
      "_complete",
      "_empty",
      "_fakeInput",
      "_focused",
      "_frame",
      "_invalid",
      "_lastBackgroundColor",
      "_lastFontSize",
      "_lastHeight",
      "_lastPadding",
      "_lastSubmittedAt",
      "_listenerRegistry",
      "_paymentRequest"
    ].forEach(function(e) {
      Object.defineProperty(bi.prototype, e, {
        enumerable: !1,
        get: function() {
          return wi(this, e), this._implementation[e];
        }
      });
    });
    ["_formSubmit", "_isIssuingElement"].forEach(function(e) {
      Object.defineProperty(bi.prototype, e, {
        enumerable: !1,
        writable: !1,
        value: function() {
          return wi(this, e), this._implementation[e]();
        }
      });
    });
    var Si = bi,
      Pi =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function ki(e, t) {
      var n,
        r = {};
      for (n in e)
        0 <= t.indexOf(n) ||
          (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
      return r;
    }
    function Oi(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function Ai(e) {
      var t = ae(Mi, e, "");
      return "error" === t.type ? null : t.value;
    }
    var Ti,
      Ii = fe({
        locale: H(V),
        fonts: H(ne(te)),
        betas: H(ne(K.apply(void 0, Oi(xn))))
      }),
      Ci = function() {
        var c = this;
        (this.getElement = ze(function(e) {
          var t,
            n =
              (null != (t = e) &&
              t.__elementType &&
              "string" == typeof t.__elementType &&
              "function" == typeof t
                ? t.__elementType
                : null) || e;
          return (
            _r(n, c._betas),
            w(c._elements, function(e) {
              return e._componentName === n;
            }) || null
          );
        })),
          (this.create = Ye(function(t, e) {
            var n = new b();
            !(function(e, t, n) {
              if ((_r(e, n), Hn[e].unique && -1 !== t.indexOf(e)))
                throw new S("Can only create one Element of type " + e + ".");
              var r = (function(e, t) {
                for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
                for (var o = [], i = 0; i < e.length; i++)
                  n[e[i]] && o.push(e[i]);
                return o;
              })(t, Hn[e].conflict);
              if (r.length) {
                var o = r[0];
                throw new S(
                  "Cannot create an Element of type " +
                    e +
                    " after an Element of type " +
                    o +
                    " has already been created."
                );
              }
            })(
              t,
              c._elements.map(function(e) {
                return e._componentName;
              }),
              c._betas
            );
            var r = Pi({}, e, c._commonOptions, {
                componentName: t,
                groupId: c._id
              }),
              o = (r.paymentRequest, ki(r, ["paymentRequest"])),
              i = (gt || wt) && 2e3 < De(o).length,
              a = !!c._pendingFonts || i,
              s = new Si(
                Pi({ publicOptions: e }, c._commonOptions, {
                  componentName: t,
                  groupId: c._id,
                  fonts: i ? null : c._commonOptions.fonts,
                  controller: c._controller,
                  wait: a
                }),
                c._listenerRegistry,
                Pi({}, c._timings, { createTimestamp: n })
              );
            return (
              (c._elements = [].concat(Oi(c._elements), [s])),
              s._on("destroy", function() {
                c._elements = c._elements.filter(function(e) {
                  return e._componentName !== t;
                });
              }),
              i &&
                s._implementation._frame &&
                s._implementation._frame.send({
                  action: "stripe-user-update",
                  payload: { fonts: c._commonOptions.fonts }
                }),
              s
            );
          }));
      },
      Ri = function e(t, n, r, o) {
        var i = this;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          Ci.call(this);
        var a,
          s = new b(),
          c = me(Ii, o || {}, "elements()"),
          u = c.value,
          l = u.betas,
          p = void 0 === l ? [] : l,
          d = u.fonts,
          f = void 0 === d ? [] : d,
          m = u.locale,
          h = ki(u, ["betas", "fonts", "locale"]);
        c.warnings.forEach(function(e) {
          return t.warn(e);
        }),
          (a = t.warn),
          sr().match(/width=device-width/) ||
            a(
              'Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/js/appendix/viewport_meta_requirements'
            ),
          t.report("elements", { options: o }),
          (this._elements = []),
          (this._id = Te("elements")),
          (this._timings = Pi({}, r, { groupCreateTimestamp: s })),
          (this._controller = t),
          (this._betas = p),
          (this._listenerRegistry = n);
        var _ = br(m, p);
        this._controller.action.fetchLocale({ locale: _ || "auto" });
        var y = f
            .filter(function(e) {
              return !e.cssSrc || "string" != typeof e.cssSrc;
            })
            .map(function(e) {
              return Pi({}, e, {
                __resolveFontRelativeTo: window.location.href
              });
            }),
          v = f
            .map(function(e) {
              return e.cssSrc;
            })
            .reduce(function(e, t) {
              return "string" == typeof t ? [].concat(Oi(e), [t]) : e;
            }, [])
            .map(function(e) {
              return g(e)
                ? e
                : (function(e, t) {
                    if ("/" !== t[0])
                      return "" + e.replace(/\/[^/]*$/, "/") + t;
                    var n = k(e);
                    return n ? "" + n.origin + t : t;
                  })(window.location.href, e);
            });
        return (
          (this._pendingFonts = v.length),
          (this._commonOptions = Pi({}, h, { betas: p, locale: _, fonts: y })),
          v.forEach(function(n) {
            var r;
            "string" == typeof n &&
              ((r = new b()),
              vr(n)
                .then(function(e) {
                  i._controller.report("font.loaded", {
                    load_time: r.getElapsedTime(),
                    font_count: e.length,
                    css_src: n
                  });
                  var t = e.map(function(e) {
                    return Pi({}, e, { __resolveFontRelativeTo: n });
                  });
                  i._controller.action.updateCSSFonts({
                    fonts: t,
                    groupId: i._id
                  }),
                    (i._commonOptions = Pi({}, i._commonOptions, {
                      fonts: [].concat(
                        Oi(
                          i._commonOptions.fonts ? i._commonOptions.fonts : []
                        ),
                        Oi(t)
                      )
                    }));
                })
                .catch(function(e) {
                  i._controller.report("error.font.not_loaded", {
                    load_time: r.getElapsedTime(),
                    message: e && e.message && e.message,
                    css_src: n
                  }),
                    i._controller.warn("Failed to load CSS file at " + n + ".");
                }));
          }),
          this
        );
      },
      ji = function(e, t, n, r, o, i, a) {
        return new Jo({
          controller: e,
          authentication: t,
          mids: n,
          rawOptions: r,
          betas: o,
          queryStrategyOverride: i,
          listenerRegistry: a
        });
      },
      Ni = {
        _componentName: V,
        _implementation: fe({ _frame: fe({ id: V }) })
      },
      Mi = fe(Ni);
    function xi(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function Li(e) {
      return -1 === be.indexOf(e);
    }
    function Di(e, t) {
      switch (e.type) {
        case "object":
          return { paymentIntent: e.object };
        case "error":
          return { error: zi({}, t ? { payment_intent: t } : {}, e.error) };
        default:
          return Object(m.a)(e);
      }
    }
    function Bi(e) {
      switch (e.type) {
        case "error":
          return { error: e.error };
        case "object":
          return { setupIntent: e.object };
        default:
          return Object(m.a)(e);
      }
    }
    function qi(e) {
      return { id: e.id, clientSecret: e.client_secret };
    }
    function Fi(e) {
      return "requires_source_action" === e || "requires_action" === e;
    }
    function Ui(e) {
      return "requires_source_action" === e.status ||
        "requires_action" === e.status
        ? e.next_action
        : null;
    }
    var Hi = {
        alipay: "alipay",
        afterpay_clearpay: "afterpay_clearpay",
        au_becs_debit: "au_becs_debit",
        acss_debit: "acss_debit",
        bacs_debit: "bacs_debit",
        bancontact: "bancontact",
        boleto: "boleto",
        card: "card",
        eps: "eps",
        fpx: "fpx",
        giropay: "giropay",
        grabpay: "grabpay",
        ideal: "ideal",
        konbini: "konbini",
        oxxo: "oxxo",
        p24: "p24",
        paypal: "paypal",
        sepa_debit: "sepa_debit",
        sofort: "sofort",
        three_d_secure: "three_d_secure",
        upi: "upi",
        wechat_pay: "wechat_pay",
        netbanking: "netbanking"
      },
      Gi = (xi((Ti = {}), ye.auBankAccount, Hi.au_becs_debit),
      xi(Ti, ye.card, Hi.card),
      xi(Ti, ye.cardNumber, Hi.card),
      xi(Ti, ye.cardExpiry, Hi.card),
      xi(Ti, ye.cardCvc, Hi.card),
      xi(Ti, ye.postalCode, Hi.card),
      xi(Ti, ye.iban, Hi.sepa_debit),
      xi(Ti, ye.idealBank, Hi.ideal),
      xi(Ti, ye.fpxBank, Hi.fpx),
      xi(Ti, ye.p24Bank, Hi.p24),
      xi(Ti, ye.netbankingBank, Hi.netbanking),
      xi(Ti, ye.epsBank, Hi.eps),
      Ti),
      zi =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Yi =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Wi =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
    function Ki(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function Vi(e, t) {
      var n,
        r = {};
      for (n in e)
        0 <= t.indexOf(n) ||
          (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
      return r;
    }
    function Ji(i) {
      return function(e, t) {
        if ("string" != typeof e) return F("a client_secret string", e, t);
        var n,
          r = (n = e.trim().match(/^((seti|pi)_[^_]+)_secret_[^-]+$/))
            ? { id: n[1], clientSecret: n[0] }
            : null;
        if (null === r)
          return F("a client secret of the form ${id}_secret_${secret}", e, t);
        if (
          (function(e) {
            var t = e.match(/^(seti|pi)_/);
            if (t) return "seti" === t[1] ? ve.SETUP_INTENT : ve.PAYMENT_INTENT;
            throw new Error("Unexpected intent id or client secret shape");
          })(r.id) === i
        )
          return D(r, []);
        var o = new S(
          i === ve.PAYMENT_INTENT
            ? L(
                "a PaymentIntent client secret",
                "a SetupIntent client secret",
                t
              )
            : L(
                "a SetupIntent client secret",
                "a PaymentIntent client secret",
                t
              )
        );
        return B(o);
      };
    }
    function $i(e, t) {
      if (null === e) return q("object", "null", t);
      if ("object" !== (void 0 === e ? "undefined" : Wi(e)))
        return q("object", void 0 === e ? "undefined" : Wi(e), t);
      var n = e.client_secret,
        r = e.status,
        o = e.next_action,
        i = Ji(
          "payment_intent" === e.object ? ve.PAYMENT_INTENT : ve.SETUP_INTENT
        )(n, U(t, "client_secret"));
      return "error" === i.type
        ? i
        : "string" != typeof r
        ? q("string", void 0 === r ? "undefined" : Wi(r), U(t, "status"))
        : ("requires_source_action" !== r && "requires_action" !== r) ||
          "object" === (void 0 === o ? "undefined" : Wi(o))
        ? (e.object, D(e, []))
        : q("object", void 0 === o ? "undefined" : Wi(o), U(t, "next_action"));
    }
    function Xi(d) {
      return function(e, t) {
        if ("object" !== (void 0 === e ? "undefined" : Wi(e)))
          return q("object", void 0 === e ? "undefined" : Wi(e), t);
        if (null === e) return q("object", "null", t);
        var n = e.type,
          r = Vi(e, ["type"]),
          o = void 0;
        if (null === d) {
          if ("string" != typeof n)
            return q(
              "string",
              void 0 === n ? "undefined" : Wi(n),
              U(t, "type")
            );
          o = n;
        } else {
          if (void 0 !== n && n !== d)
            return "string" != typeof n
              ? q("string", void 0 === n ? "undefined" : Wi(n), U(t, "type"))
              : q('"' + n + '"', '"' + d + '"', U(t, "type"));
          o = d;
        }
        var i = r[o],
          a = (r[o], Vi(r, [o]));
        if (
          (-1 !==
            [
              "acss_debit",
              "afterpay_clearpay",
              "alipay",
              "bancontact",
              "eps",
              "giropay",
              "grabpay",
              "konbini",
              "oxxo",
              "p24",
              "paypal",
              "wechat_pay"
            ].indexOf(o) &&
            void 0 === i &&
            (i = {}),
          "object" !== (void 0 === i ? "undefined" : Wi(i)))
        )
          return q("object or element", Wi(e[o]), U(t, o));
        if (null === i) return q("object or element", "null", U(t, o));
        var s = Ai(i);
        if (s) {
          var c = s._componentName;
          if (Gi[c] === o) return D({ type: o, element: s, data: a });
          var u = [].concat(Ki(t.path), [o]).join("."),
            l = t.label,
            p = new S(
              "Invalid value for " +
                l +
                ": " +
                u +
                " was `" +
                c +
                "` Element, which cannot be used to create " +
                o +
                " PaymentMethods."
            );
          return B(p);
        }
        return D({ type: o, element: null, data: r });
      };
    }
    function Qi(d, f) {
      return function(e, t) {
        if (void 0 === e)
          return D({
            paymentMethodData: null,
            paymentMethodOptions: null,
            source: null,
            paymentMethod: null,
            otherParams: {}
          });
        if ("object" !== (void 0 === e ? "undefined" : Wi(e)))
          return q("object", void 0 === e ? "undefined" : Wi(e), t);
        if (null === e) return q("object", "null", t);
        var n = e.source,
          r = e.source_data,
          o = e.payment_method_data,
          i = e.payment_method_options,
          a = e.payment_method,
          s = Vi(e, [
            "source",
            "source_data",
            "payment_method_data",
            "payment_method_options",
            "payment_method"
          ]);
        if (null != r)
          throw new S(
            f + ": Expected payment_method, or source, not source_data."
          );
        if (null != o)
          throw new S(
            f + ": Expected payment_method, or source, not payment_method_data."
          );
        if (null != n && null != a)
          throw new S(
            f + ": Expected either payment_method or source, but not both."
          );
        if (null === d && null != a && "string" != typeof a)
          throw new S(
            f +
              ": Expected payment_method[type] to be set if payment_method is passed."
          );
        if (null != n) {
          if ("string" != typeof n)
            return q(
              "string",
              void 0 === n ? "undefined" : Wi(n),
              U(t, "source")
            );
          if ("updatePaymentIntent" === f)
            throw new S(
              f + ": Expected payment_method, not source to be passed."
            );
          return D({
            source: n,
            paymentMethodData: null,
            paymentMethodOptions: null,
            paymentMethod: null,
            otherParams: s
          });
        }
        if (
          null != a &&
          "string" != typeof a &&
          "object" !== (void 0 === a ? "undefined" : Wi(a))
        )
          return q(
            "string or object",
            void 0 === a ? "undefined" : Wi(a),
            U(t, "payment_method")
          );
        var c,
          u = ae(
            ((c = d),
            function(e, t) {
              if (null == e) return D(null);
              if ("object" !== (void 0 === e ? "undefined" : Wi(e)))
                return q("object", void 0 === e ? "undefined" : Wi(e), t);
              var n = e.card,
                r = Vi(e, ["card"]);
              if (!n || "object" !== (void 0 === n ? "undefined" : Wi(n)))
                return D(e);
              var o = n.cvc,
                i = Vi(n, ["cvc"]);
              if (null == o) return D(e);
              var a = Ai(o),
                s = a ? a._componentName : "";
              return ye.cardCvc !== s
                ? q(
                    "`" + ye.cardCvc + "` Element",
                    s
                      ? "`" + s + "` Element"
                      : void 0 === o
                      ? "undefined"
                      : Wi(o),
                    U(t, (c || "card") + ".cvc")
                  )
                : D(Yi({}, r, { card: Yi({}, i, { cvc: a }) }));
            }),
            i,
            f,
            { path: [].concat(Ki(t.path), ["payment_method_options"]) }
          );
        if ("error" === u.type) return u;
        if ("string" == typeof a)
          return D({
            source: null,
            paymentMethodData: null,
            paymentMethodOptions: u.value,
            paymentMethod: a,
            otherParams: s
          });
        if ("object" !== (void 0 === a ? "undefined" : Wi(a)) || null === a)
          return D({
            source: null,
            paymentMethodData: null,
            paymentMethodOptions: null,
            paymentMethod: null,
            otherParams: s
          });
        var l = ae(Xi(d), a, f, {
          path: [].concat(Ki(t.path), ["payment_method"])
        });
        if ("error" === l.type) return l;
        var p = l.value;
        return D({
          source: null,
          paymentMethod: null,
          paymentMethodOptions: u.value,
          paymentMethodData: p,
          otherParams: s
        });
      };
    }
    var Zi,
      ea = Ji(ve.PAYMENT_INTENT),
      ta = Ji(ve.SETUP_INTENT),
      na = J(
        fe({
          handleActions: J($, function() {
            return !0;
          })
        }),
        function() {
          return { handleActions: !0 };
        }
      ),
      ra = fe({
        name: W("react-stripe-js", "stripe-js", "react-stripe-elements"),
        version: ((Zi = V),
        function(e, t) {
          return null === e ? D(e) : Zi(e, t);
        }),
        startTime: H(X)
      }),
      oa = "publishable",
      ia = "secret",
      aa = "ephemeral",
      sa = "restricted",
      ca = "unknown",
      ua = function(e) {
        if ("" === e)
          throw new S(
            "Please call Stripe() with your publishable key. You used an empty string."
          );
        switch (
          (function(e) {
            switch (e.split("_", 1)[0]) {
              case "pk":
                return oa;
              case "sk":
                return ia;
              case "ek":
                return aa;
              case "rk":
                return sa;
              default:
                return ca;
            }
          })(e)
        ) {
          case ia:
            throw new S(
              "You should not use your secret key with Stripe.js.\n          Please pass a publishable key instead."
            );
          case aa:
            throw new S(
              "You should not use an ephemeral key with Stripe.js.\n          Please pass a publishable key instead."
            );
          case sa:
            throw new S(
              "You should not use a restricted key with Stripe.js.\n          Please pass a publishable key instead."
            );
        }
      };
    function la(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var pa = ["elements", "createToken", "createPaymentMethod"],
      da = ["elements", "createSource", "createToken", "createPaymentMethod"],
      fa = ((function(e, t, n) {
        return t && la(e.prototype, t), n && la(e, n), e;
      })(ma, [
        {
          key: "got",
          value: function(e) {
            this._didDetect ||
              ("elements" === e
                ? (this._gets = ["elements"])
                : this._gets.push(e),
              this._checkForWrapper());
          }
        },
        {
          key: "called",
          value: function(t) {
            this._didDetect ||
              (this._gets = this._gets.filter(function(e) {
                return e !== t;
              }));
          }
        },
        {
          key: "_checkForWrapper",
          value: function() {
            d(this._gets, pa)
              ? this._onDetection("react-stripe-js")
              : d(this._gets, da) && this._onDetection("react-stripe-elements");
          }
        }
      ]),
      ma);
    function ma(t) {
      var n = this;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, ma),
        (this._gets = []),
        (this._didDetect = !1),
        (this._onDetection = function(e) {
          (n._didDetect = !0), t(e);
        }),
        window.Stripe &&
          window.Stripe.__cachedInstances &&
          this._onDetection("react-stripe-elements");
    }
    var ha =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    function _a(e) {
      if (!e || "object" !== (void 0 === e ? "undefined" : ha(e))) return null;
      var t = e.type;
      return {
        type: "string" == typeof t ? t : null,
        data: (function(e, t) {
          var n,
            r = {};
          for (n in e)
            0 <= t.indexOf(n) ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        })(e, ["type"])
      };
    }
    function ya(e) {
      switch (e.type) {
        case "object":
          return { source: e.object };
        case "error":
          return { error: e.error };
        default:
          return Object(m.a)(e);
      }
    }
    function va(e) {
      switch (e.type) {
        case "object":
          return { paymentMethod: e.object };
        case "error":
          return { error: e.error };
        default:
          return Object(m.a)(e);
      }
    }
    function ba(e, t, n, r, o) {
      if ("string" == typeof n)
        return (function(e, t, n, r, o) {
          var i = Ai(r),
            a = _a(i ? o : r),
            s = a || { type: null, data: {} },
            c = s.type,
            u = s.data;
          if (c && n !== c)
            return E.reject(
              new S(
                "The type supplied in payment_method_data is not consistent."
              )
            );
          if (i) {
            var l = i._implementation._frame.id,
              p = i._componentName;
            return e.action
              .createPaymentMethodWithElement({
                frameId: l,
                elementName: p,
                type: n,
                paymentMethodData: u,
                mids: t
              })
              .then(va);
          }
          return a
            ? e.action
                .createPaymentMethodWithData({
                  elementName: null,
                  type: n,
                  paymentMethodData: u,
                  mids: t
                })
                .then(va)
            : E.reject(
                new S(
                  "Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod."
                )
              );
        })(e, t, n, r, o);
      try {
        var i = me(Xi(null), n, "createPaymentMethod").value,
          a = i.element,
          s = i.type,
          c = i.data;
        if (a) {
          var u = a._implementation._frame.id,
            l = a._componentName;
          return e.action
            .createPaymentMethodWithElement({
              frameId: u,
              elementName: l,
              type: s,
              paymentMethodData: c,
              mids: t
            })
            .then(va);
        }
        return e.action
          .createPaymentMethodWithData({
            elementName: null,
            type: s,
            paymentMethodData: c,
            mids: t
          })
          .then(va);
      } catch (e) {
        return E.reject(e);
      }
    }
    function ga(e) {
      return (
        "https://stripe.com/docs/stripe-js/reference#stripe-" +
        e
          .split(/(?=[A-Z])/)
          .join("-")
          .toLowerCase()
      );
    }
    function wa(e, t) {
      return me(ea, e, "stripe." + t + " intent secret").value;
    }
    function Ea(e, t) {
      return me(ta, e, "stripe." + t + " intent secret").value;
    }
    function Sa(e, t) {
      return me(na, t, e).value;
    }
    function Pa(e, t, n) {
      if ("valid" === ae(Mi, n, t).type)
        throw new S(
          "Do not pass an Element to stripe." +
            t +
            "() directly.\nFor more information: " +
            ga(t)
        );
      var r = me(Qi(e, t), n, t).value,
        o = r.source,
        i = r.paymentMethodData,
        a = r.paymentMethodOptions,
        s = r.paymentMethod,
        c = r.otherParams;
      if (null != o && (null != i || null != s))
        throw new S(
          t + ": Expected either source or payment_method, but not both."
        );
      if (i) {
        if (i.element)
          return {
            mode: {
              tag: "paymentMethod-from-element",
              type: e,
              elementName: i.element._componentName,
              frameId: i.element._implementation._frame.id,
              data: i.data,
              options: a
            },
            otherParams: c
          };
        if (e)
          return {
            mode: {
              tag: "paymentMethod-from-data",
              type: e,
              data: i.data,
              options: a
            },
            otherParams: c
          };
      } else {
        if (s)
          return {
            mode: { tag: "paymentMethod", paymentMethod: s, options: a },
            otherParams: c
          };
        if (o) return { mode: { tag: "source", source: o }, otherParams: c };
      }
      return { mode: { tag: "none" }, otherParams: c };
    }
    function ka(e, t) {
      if (
        "object" === (void 0 === e ? "undefined" : La(e)) &&
        null !== e &&
        void 0 !== e.handleActions
      )
        throw new S(
          "stripe." +
            t +
            " does not support a handleActions option. For more information, see " +
            ga(t)
        );
    }
    function Oa(e, t) {
      var n = {
        skipFingerprint: !1,
        sandboxFingerprintFrame: !1,
        sandboxChallengeFrame: !1,
        useSecureModalWindow: !1
      };
      return (
        -1 !== e.indexOf("Y") &&
          (t.report("3ds2.optimization.Y"), (n.skipFingerprint = !0)),
        -1 !== e.indexOf("k") &&
          (t.report("3ds2.optimization.k"), (n.sandboxFingerprintFrame = !0)),
        -1 !== e.indexOf("5") &&
          (t.report("3ds2.optimization.5"), (n.sandboxChallengeFrame = !0)),
        -1 !== e.indexOf("R") &&
          (t.report("3ds2.optimization.R"), (n.useSecureModalWindow = !0)),
        n
      );
    }
    function Aa(e) {
      return (
        {
          american_express: "amex",
          visa: "visa",
          mastercard: "mastercard",
          discover: "discover"
        }[e] || "unknown"
      );
    }
    function Ta(e, t, n) {
      if (!e) return null;
      if ("use_stripe_sdk" === e.type) {
        var r = e.use_stripe_sdk;
        switch (r.type) {
          case "stripe_3ds2_fingerprint":
            return {
              type: "3ds2-fingerprint",
              threeDS2Source: r.three_d_secure_2_source,
              cardBrand: Aa(r.directory_server_name),
              transactionId: r.server_transaction_id,
              optimizations: Oa(r.three_ds_optimizations, n),
              methodUrl: r.three_ds_method_url
            };
          case "stripe_3ds2_challenge":
            return {
              type: "3ds2-challenge",
              threeDS2Source: r.stripe_js.three_d_secure_2_source,
              cardBrand: Aa(r.stripe_js.directory_server_name),
              transactionId: r.stripe_js.server_transaction_id,
              optimizations: Oa(r.stripe_js.three_ds_optimizations, n),
              acsTransactionId: r.stripe_js.acs_transaction_id,
              acsUrl: r.stripe_js.acs_url,
              creq: r.stripe_js.creq,
              securePaymentConfirmation: r.stripe_js.secure_payment_confirmation
            };
          case "three_d_secure_redirect":
            return { type: "3ds1-modal", url: r.stripe_js, source: r.source };
        }
      }
      if ("redirect_to_url" === e.type)
        return { type: "redirect", redirectUrl: e.redirect_to_url.url };
      if ("alipay_handle_redirect" === e.type)
        return { type: "redirect", redirectUrl: e.alipay_handle_redirect.url };
      if ("boleto_display_details" === e.type)
        return { type: "boleto-display" };
      if ("display_oxxo_details" === e.type)
        return {
          type: "oxxo-display",
          hostedVoucherUrl: e.display_oxxo_details.hosted_voucher_url
        };
      if ("display_konbini_details" === e.type)
        return { type: "konbini-display" };
      if ("oxxo_display_details" === e.type)
        return {
          type: "oxxo-display",
          hostedVoucherUrl: e.oxxo_display_details.hosted_voucher_url
        };
      if ("authorize_with_url" === e.type) {
        var o = e.authorize_with_url.url;
        switch (t) {
          case Hi.card:
            return { type: "3ds1-modal", url: o, source: null };
          case Hi.ideal:
            return { type: "redirect", redirectUrl: o };
        }
      }
      return "upi_await_notification" === e.type
        ? { type: "upi_await_notification" }
        : "wechat_pay_display_qr_code" === e.type
        ? { type: "wechat_pay_display_qr_code" }
        : null;
    }
    function Ia(e) {
      switch (e.type) {
        case "error":
          return { error: e.error };
        case "object":
          switch (e.object.object) {
            case "payment_intent":
              return { paymentIntent: e.object };
            case "setup_intent":
              return { setupIntent: e.object };
            default:
              return Object(m.a)(e.object);
          }
        default:
          return Object(m.a)(e);
      }
    }
    function Ca(e, t, n, r) {
      return t === ve.PAYMENT_INTENT
        ? n.action
            .retrievePaymentIntent({
              hosted: !1,
              intentSecret: e,
              locale: r,
              asErrorIfNotSucceeded: !0
            })
            .then(Ia)
        : n.action
            .retrieveSetupIntent({
              hosted: !1,
              intentSecret: e,
              locale: r,
              asErrorIfNotSucceeded: !0
            })
            .then(Ia);
    }
    function Ra(e, t, n, r, o) {
      return t === ve.PAYMENT_INTENT
        ? n.action
            .cancelPaymentIntentSource({
              intentSecret: e,
              locale: o,
              sourceId: r
            })
            .then(Ia)
        : n.action
            .cancelSetupIntentSource({
              intentSecret: e,
              locale: o,
              sourceId: r
            })
            .then(Ia);
    }
    function ja(e) {
      return (
        (e.error
          ? e.error.payment_intent || e.error.setup_intent
          : e.paymentIntent || e.setupIntent) || null
      );
    }
    function Na(n, l, p, d, f) {
      var e,
        t,
        r,
        o,
        i,
        a = sr(),
        m = new b(),
        h = ((e = d),
        (t = n.url),
        (r = l.id),
        (o = n.source),
        (i = f),
        e.createLightboxFrame({
          type: he.AUTHORIZE_WITH_URL,
          options: Ba(
            { url: t, locale: i, intentId: r },
            o ? { source: o } : {}
          )
        }));
      return (
        h.show(),
        d.report("authorize_with_url.loading", { viewport: a, intentId: l.id }),
        h._on("load", function() {
          d.report("authorize_with_url.loaded", {
            loadDuration: m.getElapsedTime(),
            intentId: l.id
          }),
            h.fadeInBackdrop();
        }),
        h._on("challenge_complete", function() {
          h.fadeOutBackdrop();
        }),
        new E(function(u, e) {
          var t = n.source;
          t &&
            h._once("cancel", function() {
              E.all([Ra(l, p, d, t, f), h.destroy()]).then(function(e) {
                var t = Da(e, 1)[0];
                return u(t);
              });
            }),
            h._once("authorize_with_url_done", function() {
              var e,
                t,
                n,
                o,
                i,
                a,
                s,
                c,
                r = h.destroy();
              (e = l),
                (t = p),
                (n = d),
                (o = f),
                (i = function(e, t) {
                  r.then(function() {
                    d.report("authorize_with_url.done", {
                      shownDuration: m.getElapsedTime(),
                      success: !("error" in e),
                      intentId: l.id,
                      iterations: t
                    }),
                      u(e);
                  });
                }),
                (a = !0),
                (s = 3),
                (c = 0),
                (function r() {
                  (c += 1),
                    Ca(e, t, n, o).then(function(e) {
                      if (a) {
                        var t,
                          n = ja(e);
                        if (null !== n)
                          switch (((s = 3), n.status)) {
                            case "requires_action":
                            case "requires_source_action":
                              return void setTimeout(r, 5e3);
                            case "processing":
                              return void setTimeout(r, 1e3);
                            default:
                              i(e, c);
                          }
                        else
                          0 < s
                            ? ((t = 500 * Math.pow(2, 3 - s)),
                              setTimeout(r, t),
                              --s)
                            : i(e, c);
                      }
                    });
                })();
            });
        })
      );
    }
    var Ma = {
        source: fe({ id: Y("src_"), client_secret: Y("src_client_secret_") })
      },
      xa = fe(Ma),
      La =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Da = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      Ba =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      qa = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      Fa =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function Ua(t) {
      return new E(function(e) {
        t._on("load", function() {
          return e(t);
        });
      });
    }
    function Ha(e, n, t, r, o) {
      return n.optimizations.skipFingerprint
        ? E.resolve({ fingerprintAttempted: !1, fingerprintData: null })
        : "" === n.methodUrl
        ? (t.report("3ds2.fingerprint.no_method_url", {
            hosted: r,
            intentId: e.id
          }),
          E.resolve({ fingerprintAttempted: !1, fingerprintData: null }))
        : (function(e, t, n, r) {
            var o = e.createHiddenFrame(he.STRIPE_3DS2_FINGERPRINT, {
              intentId: t,
              locale: r,
              hosted: n
            });
            e.report("3ds2.fingerprint_frame.loading", {
              hosted: n,
              intentId: t
            });
            var i = Ua(o);
            return (
              i.then(function() {
                e.report("3ds2.fingerprint_frame.loaded", {
                  hosted: n,
                  intentId: t
                });
              }),
              i
            );
          })(t, e.id, r, o).then(function(t) {
            return t.action
              .perform3DS2Fingerprint({
                transactionId: n.transactionId,
                methodUrl: n.methodUrl,
                shouldSandbox: n.optimizations.sandboxFingerprintFrame
              })
              .then(function(e) {
                return t.destroy(), e;
              });
          });
    }
    function Ga(a, i, s, c, u, l) {
      function p(o) {
        return new E(function(r) {
          t.then(function(e) {
            e._once("cancel", function() {
              e.fadeOutBackdrop(), Ra(a, i, c, s.threeDS2Source, u).then(r);
            }),
              l || (e.show(), e.fadeInBackdrop());
            o.type;
            var t = o.optimizations,
              n = (function(e, t) {
                var n,
                  r = {};
                for (n in e)
                  0 <= t.indexOf(n) ||
                    (Object.prototype.hasOwnProperty.call(e, n) &&
                      (r[n] = e[n]));
                return r;
              })(o, ["type", "optimizations"]);
            e.action
              .perform3DS2Challenge(
                Fa({}, n, {
                  shouldSandbox: t.sandboxChallengeFrame,
                  useSecureModalWindow: t.useSecureModalWindow
                })
              )
              .then(function() {
                r();
              });
          });
        });
      }
      function d(e) {
        return E.all([
          e ? E.resolve(e) : Ca(a, i, c, u),
          t.then(function(e) {
            return e.destroy();
          })
        ]).then(function(e) {
          var t = qa(e, 1)[0];
          return (
            c.report(
              "3ds2.done",
              Fa(
                {
                  intentId: a.id,
                  hosted: l,
                  totalDuration: n.getElapsedTime()
                },
                t.error ? { error: t.error, success: !1 } : { success: !0 }
              )
            ),
            t
          );
        });
      }
      var n = new b(),
        t = (function(e, t, n, r, o) {
          var i = t.createLightboxFrame({
            type: he.STRIPE_3DS2_CHALLENGE,
            options: { intentId: e, hosted: r, locale: o }
          });
          t.report("3ds2.challenge_frame.loading", { intentId: e, hosted: r }),
            i._on("challenge_complete", function() {
              i.fadeOutBackdrop();
            });
          var a = Ua(i);
          return (
            a.then(function() {
              return t.report("3ds2.challenge_frame.loaded", {
                intentId: e,
                hosted: r
              });
            }),
            r && (i.show(), i.action.show3DS2Spinner({ cardBrand: n })),
            a
          );
        })(a.id, c, s.cardBrand, l, u);
      switch (s.type) {
        case "3ds2-challenge":
          return p(s).then(d);
        case "3ds2-fingerprint":
          return Ha(a, s, c, l, u)
            .then(function(e) {
              return (
                c.report("3ds2.authenticate", { hosted: l, intentId: a.id }),
                c.action
                  .authenticate3DS2({
                    threeDS2Source: s.threeDS2Source,
                    outerWindowWidth: window.innerWidth,
                    hosted: l,
                    fingerprintResult: e
                  })
                  .then(function(e) {
                    return (
                      "error" === e.type
                        ? c.report("3ds2.authenticate.error", {
                            error: e.error,
                            hosted: l,
                            intentId: a.id
                          })
                        : c.report("3ds2.authenticate.success", {
                            hosted: l,
                            intentId: a.id
                          }),
                      e
                    );
                  })
              );
            })
            .then(function(e) {
              if ("error" === e.type || null === e.object.ares) return d();
              var t = e.object,
                n = t.ares,
                r = t.creq;
              if ("C" !== n.transStatus || null == r)
                return (
                  c.report("3ds2.frictionless", { hosted: l, intentId: a.id }),
                  d()
                );
              var o = null;
              if (e.object.secure_payment_confirmation)
                try {
                  var i = window.top.origin,
                    o = Fa({}, e.object.secure_payment_confirmation, {
                      merchantOrigin: i
                    });
                } catch (e) {
                  c.report(
                    "3ds2.secure_payment_confirmation.origin_check_error",
                    {
                      intentId: a.id,
                      source: s.threeDS2Source,
                      error: Fa({ name: e.name, message: e.message }, e)
                    }
                  );
                }
              return p({
                type: "3ds2-challenge",
                threeDS2Source: s.threeDS2Source,
                cardBrand: s.cardBrand,
                transactionId: s.transactionId,
                acsUrl: n.acsURL,
                acsTransactionId: n.acsTransID,
                optimizations: s.optimizations,
                creq: r,
                securePaymentConfirmation: o
              }).then(d);
            });
        default:
          return Object(m.a)(s);
      }
    }
    function za(e, t) {
      var n = e.createLightboxFrame({ type: he.LIGHTBOX_APP, options: t });
      return (
        n.show(),
        n._on("nested-frame-loaded", function() {
          n.fadeInBackdrop(),
            setTimeout(function() {
              n.action.openLightboxFrame();
            }, 200);
        }),
        n
      );
    }
    function Ya(e) {
      return e.action.closeLightboxFrame(), e.destroy();
    }
    function Wa(r) {
      return new E(function(e, t) {
        var n = setTimeout(function() {
          e({
            type: "error",
            error: {
              code: "redirect_error",
              message: "Failed to redirect to " + r
            },
            locale: "en"
          });
        }, 6e4);
        window.addEventListener("pagehide", function() {
          clearTimeout(n);
        }),
          (window.top.location.href = r);
      });
    }
    function Ka(e, t, n) {
      e.report("redirect_error", { initiator: t, error: n.error });
    }
    function Va(e) {
      switch (e.type) {
        case "error":
          var t = e.error;
          if (
            "payment_intent_unexpected_state" === t.code &&
            "object" === is(t.payment_intent) &&
            null != t.payment_intent &&
            "string" == typeof t.payment_intent.status &&
            Fi(t.payment_intent.status)
          ) {
            var n = t.payment_intent;
            return { type: "object", locale: e.locale, object: n };
          }
          return e;
        case "object":
          return e;
        default:
          return Object(m.a)(e);
      }
    }
    function Ja(e, t, n, r, o) {
      var i,
        a,
        s,
        c,
        u,
        l,
        p,
        d,
        f,
        m,
        h,
        _,
        y,
        v,
        b,
        g = Ta(Ui(t), n, e),
        w = qi(t);
      if (!g) return E.resolve({ paymentIntent: t });
      switch (g.type) {
        case "3ds1-modal":
          return Na(g, w, ve.PAYMENT_INTENT, e, r);
        case "3ds2-fingerprint":
        case "3ds2-challenge":
          return Ga(w, ve.PAYMENT_INTENT, g, e, r, o);
        case "redirect":
          return (
            (_ = t),
            (y = n),
            (v = g.redirectUrl),
            (b = e),
            Wa(v).then(function(e) {
              return Ka(b, y + " redirect", e), Di(e, _);
            })
          );
        case "boleto-display":
          throw new S(
            "Expected option `handleActions` to be `false`. The Boleto private beta does not handle the next actions for you automatically (e.g. display Boleto details). Please refer to the Stripe Boleto integration guide for more info: \n\nhttps://stripe.com/docs/payments/boleto"
          );
        case "konbini-display":
          throw new S(
            "Expected option `handleActions` to be `false`. Automatic display of Konbini payment details is not supported in the Pilot. Please refer to the Stripe Konbini integration guide for more info: \n\nhttps://stripe.com/docs/payments/konbini"
          );
        case "oxxo-display":
          if (void 0 === g.hostedVoucherUrl)
            throw new S(
              "To handle the next actions automatically, set the API version to oxxo_beta=v2. Please refer to the Stripe OXXO integration guide for more info: \n\nhttps://stripe.com/docs/payments/oxxo"
            );
          return (
            (l = {
              controller: e,
              locale: r,
              url: g.hostedVoucherUrl,
              intent: t
            }),
            (p = l.controller),
            (d = l.url),
            (f = l.intent),
            (m = l.locale),
            (h = za(p, {
              url: d,
              size: "600x700",
              locale: m,
              frameTitle: "oxxo.voucher_frame_title",
              useLightboxHostedCloseButton: !1
            })),
            new E(function(e) {
              h._on("request-close", function() {
                Ya(h).then(function() {
                  e({ paymentIntent: f });
                });
              });
            })
          );
        case "upi_await_notification":
          return (
            (a = (i = {
              controller: e,
              intentSecret: w,
              intentType: ve.PAYMENT_INTENT,
              locale: r
            }).controller),
            (s = i.intentSecret),
            (c = i.intentType),
            (u = i.locale),
            new E(function(r) {
              setTimeout(function n() {
                Ca(s, c, a, u).then(function(e) {
                  var t = ja(e);
                  null !== t &&
                    ("requires_action" !== t.status
                      ? r(e)
                      : setTimeout(n, 1e4));
                });
              }, 5e3);
            })
          );
        case "wechat_pay_display_qr_code":
          throw new S("Expected option `handleActions` to be `false`.");
        default:
          return E.resolve({ paymentIntent: t });
      }
    }
    function $a(e, t, n, r, o) {
      return Ja(e, t, n, r, o).then(function(e) {
        if (e.setupIntent)
          throw new Error("Got unexpected SetupIntent response");
        return e;
      });
    }
    function Xa(i, a, s, c) {
      return function(e) {
        var t = Va(e);
        switch (t.type) {
          case "error":
            var n = t.error,
              r = n.payment_intent;
            return s &&
              r &&
              "payment_intent_unexpected_state" === n.code &&
              ("succeeded" === r.status || "requires_capture" === r.status)
              ? E.resolve({ paymentIntent: r })
              : E.resolve(Di(e));
          case "object":
            var o = t.object;
            return $a(i, o, a, t.locale, c);
          default:
            return Object(m.a)(t);
        }
      };
    }
    function Qa(l, p) {
      return function(e, t, n, r, o) {
        var i = wa(n, l),
          a = Pa(p, l, r),
          s = Sa(l, o),
          c = "none" === a.mode.tag,
          u = e.action.confirmPaymentIntent(
            as({}, a, { intentSecret: i, expectedType: p, options: s, mids: t })
          );
        return s.handleActions ? u.then(Xa(e, p, c, !1)) : u.then(Di);
      };
    }
    function Za(e, t, n, r) {
      var o = wa(n, "updatePaymentIntent"),
        i = (function(e) {
          if (
            !e ||
            !e.payment_method ||
            !e.payment_method.type ||
            "string" != typeof e.payment_method.type
          )
            return null;
          var t = e.payment_method.type;
          return Hi[t] || null;
        })(r),
        a = Pa(i, "updatePaymentIntent", r);
      return e.action
        .updatePaymentIntent(
          as({}, a, {
            intentSecret: o,
            expectedType: i,
            mids: t,
            options: null
          })
        )
        .then(Di);
    }
    function es(e, r) {
      var t = wa(e, "handleCardAction");
      return r.action
        .retrievePaymentIntent({ intentSecret: t, hosted: !1 })
        .then(function(e) {
          var t = Va(e);
          switch (t.type) {
            case "error":
              return E.resolve(Di(e));
            case "object":
              var n = t.object;
              if (Fi(n.status)) {
                if ("manual" !== n.confirmation_method)
                  throw new S(
                    "handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use confirmCardPayment instead to complete the payment."
                  );
                return $a(r, n, Hi.card, t.locale, !1);
              }
              throw new S(
                "handleCardAction: The PaymentIntent supplied is not in the requires_action state."
              );
            default:
              return Object(m.a)(t);
          }
        });
    }
    function ts(e) {
      var t = e.mode;
      if (
        t.data &&
        t.data.billing_details &&
        "object" === Ts(t.data.billing_details)
      )
        return t.data.billing_details;
      throw new S("Missing payment_method[billing_details]");
    }
    function ns(e) {
      var t = e.mode,
        n = "none" === t.tag,
        r = "paymentMethod" === t.tag,
        o = "paymentMethod-from-data" === t.tag && t.data.acss_debit;
      return !n && !r && !o;
    }
    function rs(e) {
      var t = e.controller,
        n = e.intentSecret,
        r = e.mode,
        o = e.billingDetails;
      return t.action
        .createAcssDebitSession({ intentSecret: n, billingDetails: o, mode: r })
        .then(function(e) {
          if ("error" === e.type) return { type: "error", error: e.error };
          var r = za(t, {
            url: e.object.url,
            size: "400x600",
            locale: e.locale,
            frameTitle: "acss.dialog_frame_title",
            useLightboxHostedCloseButton: !1
          });
          return new E(function(n) {
            r._on("request-close", function() {
              Ya(r)
                .then(function() {
                  return t.action.localizeError(Is);
                })
                .then(function(e) {
                  n({ type: "error", error: e });
                });
            }),
              r._on("session-complete", function(e) {
                var t = e.paymentMethod;
                Ya(r).then(function() {
                  n({ type: "success", paymentMethod: t });
                });
              });
          });
        });
    }
    function os(e, t) {
      var n = e.createLightboxFrame({
        type: he.LCPM_APP,
        options: {
          intentId: t.id,
          clientSecret: t.clientSecret,
          apiKey: e._apiKey
        }
      });
      return (
        n._once("cancel", function() {
          n.fadeOutBackdrop();
        }),
        n.show(),
        n.fadeInBackdrop(),
        new E(function(t) {
          n._on("institution-selected", function(e) {
            n.send({
              action: "stripe-lcpm-show-bank-flow",
              payload: {
                bankFlowUrl: "https://example.com",
                authSessionId: "auth_session_123"
              }
            }),
              t({ type: "success", institution: e.institution });
          });
        })
      );
    }
    var is =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      as =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      ss = Qa("confirmAcssDebitPayment", Hi.acss_debit),
      cs = Qa("confirmAfterpayClearpayPayment", Hi.afterpay_clearpay),
      us = Qa("confirmAuBecsDebitPayment", Hi.au_becs_debit),
      ls = Qa("confirmBacsDebitPayment", Hi.bacs_debit),
      ps = Qa("confirmBancontactPayment", Hi.bancontact),
      ds = Qa("confirmBoletoPayment", Hi.boleto),
      fs = Qa("confirmCardPayment", Hi.card),
      ms = Qa("confirmEpsPayment", Hi.eps),
      hs = Qa("confirmFpxPayment", Hi.fpx),
      _s = Qa("confirmGiropayPayment", Hi.giropay),
      ys = Qa("confirmGrabPayPayment", Hi.grabpay),
      vs = Qa("confirmIdealPayment", Hi.ideal),
      bs = Qa("confirmOxxoPayment", Hi.oxxo),
      gs = Qa("confirmAlipayPayment", Hi.alipay),
      ws = Qa("confirmP24Payment", Hi.p24),
      Es = Qa("confirmPayPalPayment", Hi.paypal),
      Ss = Qa("confirmSepaDebitPayment", Hi.sepa_debit),
      Ps = Qa("confirmSofortPayment", Hi.sofort),
      ks = Qa("confirmUpiPayment", Hi.upi),
      Os = Qa("confirmNetbankingPayment", Hi.netbanking),
      As =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Ts =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Is = { type: "validation_error", code: "incomplete_payment_details" },
      Cs = ka,
      Rs =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      js =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
    function Ns(e, t) {
      var n,
        r = {};
      for (n in e)
        0 <= t.indexOf(n) ||
          (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
      return r;
    }
    function Ms(e, t) {
      if (null == e) return D(null);
      var n = e.type,
        r = Ns(e, ["type"]),
        o = J(V, function() {
          return null;
        })(n, U(t, "type"));
      return "error" === o.type ? o : D({ type: o.value, data: r });
    }
    function xs(e, t, n, r) {
      if (null === e) {
        if (null !== t) return t;
        throw new S(
          n +
            ": you must additionally specify the type of payment method to create within " +
            (r ? "source_data" : "payment_method_data") +
            "."
        );
      }
      if (null === t) return e;
      if (t !== e)
        throw new S(
          n +
            ": you specified `type: " +
            t +
            "`, but " +
            n +
            " will create a " +
            e +
            " payment method."
        );
      return e;
    }
    function Ls(p) {
      return function(e, t) {
        if ("object" !== (void 0 === e ? "undefined" : js(e)) || null === e)
          return q(
            "object",
            null === e ? "null" : void 0 === e ? "undefined" : js(e),
            t
          );
        var n = e.source,
          r = e.source_data,
          o = e.payment_method,
          i = e.payment_method_data,
          a = Ns(e, [
            "source",
            "source_data",
            "payment_method",
            "payment_method_data"
          ]);
        if (null != n && "string" != typeof n)
          return q(
            "string",
            void 0 === n ? "undefined" : js(n),
            U(t, "source")
          );
        if (null != o && "string" != typeof o)
          return q(
            "string",
            void 0 === o ? "undefined" : js(o),
            U(t, "payment_method")
          );
        if (null != r && "object" !== (void 0 === r ? "undefined" : js(r)))
          return q(
            "object",
            void 0 === r ? "undefined" : js(r),
            U(t, "source_data")
          );
        if (null != i && "object" !== (void 0 === i ? "undefined" : js(i)))
          return q(
            "object",
            void 0 === i ? "undefined" : js(i),
            U(t, "payment_method_data")
          );
        var s = Ms(r, U(t, "source_data"));
        if ("error" === s.type) return s;
        var c = s.value,
          u = Ms(i, U(t, "payment_method_data"));
        if ("error" === u.type) return u;
        var l = u.value;
        return D({
          sourceData: c,
          source: null == n ? null : n,
          paymentMethodData: l,
          paymentMethod: null == o ? null : o,
          otherParams: Rs({}, p, a)
        });
      };
    }
    function Ds(o) {
      return function(e, t) {
        if (void 0 === e)
          return D({
            sourceData: null,
            paymentMethodData: null,
            source: null,
            paymentMethod: null,
            otherParams: {}
          });
        if ("object" !== (void 0 === e ? "undefined" : js(e)))
          return q("object", void 0 === e ? "undefined" : js(e), t);
        if (null === e) return q("object", "null", t);
        if (o) {
          if (!e.payment_intent)
            return D({
              sourceData: null,
              paymentMethodData: null,
              source: null,
              paymentMethod: null,
              otherParams: e
            });
          var n = e.payment_intent,
            r = Ns(e, ["payment_intent"]);
          return Ls(r)(n, U(t, "payment_intent"));
        }
        return e.payment_intent
          ? B(
              new S(
                "The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object."
              )
            )
          : Ls({})(e, t);
      };
    }
    function Bs(e, t, n, r, o, i) {
      var a = ae(Mi, o, r);
      if ("error" === a.type) return null;
      var s = a.value,
        c = me(Ds(t), i, r).value,
        u = c.sourceData,
        l = c.source,
        p = c.paymentMethodData,
        d = c.paymentMethod,
        f = c.otherParams;
      if (!e && u)
        throw new S(r + ": Expected payment_method_data, not source_data.");
      if (null != l)
        throw new S(
          "When calling " +
            r +
            " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element."
        );
      if (null != d)
        throw new S(
          "When calling " +
            r +
            " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element."
        );
      var m,
        h,
        _ = s._componentName,
        y = s._implementation._frame.id,
        v = u || p || { type: null, data: {} },
        b = v.data,
        g = ((m = _), null != (h = v.type) ? h : (!Li(m) && Gi[m]) || null),
        w = e && !p,
        E = { elementName: _, frameId: y, type: xs(n, g, r, w), data: b };
      return w
        ? { mode: Rs({ tag: "source-from-element" }, E), otherParams: f }
        : {
            mode: Rs({ tag: "paymentMethod-from-element", options: null }, E),
            otherParams: f
          };
    }
    function qs(o, i, a, s) {
      return function(e, t) {
        var n = Bs(o, i, a, s, e, t);
        if (n) return n;
        var r = (function(e, t, n, r, o) {
          var i = me(Ds(t), o, r).value,
            a = i.sourceData,
            s = i.source,
            c = i.paymentMethodData,
            u = i.paymentMethod,
            l = i.otherParams;
          if (!e && a)
            throw new S(
              r +
                ": Expected payment_method, source, or payment_method_data, not source_data."
            );
          if (null !== s && null !== a)
            throw new S(
              r + ": Expected either source or source_data, but not both."
            );
          if (null !== u && null !== c)
            throw new S(
              r +
                ": Expected either payment_method or payment_method_data, but not both."
            );
          if (null !== u && null !== s)
            throw new S(
              r + ": Expected either payment_method or source, but not both."
            );
          if (a || c) {
            var p = a || c || {},
              d = p.data,
              f = e && !c,
              m = xs(n, p.type, r, f);
            return f
              ? {
                  mode: { tag: "source-from-data", type: m, data: d },
                  otherParams: l
                }
              : {
                  mode: {
                    tag: "paymentMethod-from-data",
                    type: m,
                    data: d,
                    options: null
                  },
                  otherParams: l
                };
          }
          return null !== s
            ? { mode: { tag: "source", source: s }, otherParams: l }
            : null !== u
            ? {
                mode: { tag: "paymentMethod", paymentMethod: u, options: null },
                otherParams: l
              }
            : { mode: { tag: "none" }, otherParams: l };
        })(o, i, a, s, e);
        if (r) return r;
        throw new S(
          "Expected: stripe." +
            s +
            "(intentSecret, element[, data]) or stripe." +
            s +
            "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication"
        );
      };
    }
    function Fs(e, t, n, r, o, i) {
      var a = me(ea, r, "stripe.confirmPaymentIntent intent secret").value,
        s = null,
        c = qs(e, !1, s, "confirmPaymentIntent")(o, i);
      return t.action
        .confirmPaymentIntent(
          Qs({}, c, {
            intentSecret: a,
            expectedType: s,
            options: { handleActions: !1 },
            mids: n
          })
        )
        .then(Di);
    }
    function Us(e, t, n, r, o, i, a) {
      var s = me(ea, o, "stripe.handleCardPayment intent secret").value,
        c = Hi.card,
        u = qs(e, r, c, "handleCardPayment")(i, a),
        l = !i && !a;
      return t.action
        .confirmPaymentIntent(
          Qs({}, u, {
            intentSecret: s,
            expectedType: c,
            options: { handleActions: !0 },
            mids: n
          })
        )
        .then(Xa(t, c, l, !1));
    }
    function Hs(e, t, n, r, o, i, a) {
      var s = me(ea, o, "stripe.handleIdealPayment intent secret").value,
        c = Hi.ideal,
        u = qs(e, r, c, "handleIdealPayment")(i, a),
        l = !i && !a;
      return t.action
        .confirmPaymentIntent(
          Qs({}, u, {
            intentSecret: s,
            expectedType: c,
            options: { handleActions: !0 },
            mids: n
          })
        )
        .then(Xa(t, c, l, !1));
    }
    function Gs(e) {
      switch (e.type) {
        case "object":
          return { returnIntent: e.object };
        case "error":
          return { error: e.error };
        default:
          return Object(m.a)(e);
      }
    }
    function zs(e, t, n, r, o) {
      var i,
        a,
        s,
        c = Ta(Ui(t), n, e),
        u = qi(t);
      if (!c) return E.resolve({ setupIntent: t });
      switch (c.type) {
        case "3ds1-modal":
          return Na(c, u, ve.SETUP_INTENT, e, r);
        case "3ds2-fingerprint":
        case "3ds2-challenge":
          return Ga(u, ve.SETUP_INTENT, c, e, r, o);
        case "redirect":
          return (
            (i = n),
            (a = c.redirectUrl),
            (s = e),
            Wa(a).then(function(e) {
              return Ka(s, i + " redirect", e), Bi(e);
            })
          );
        default:
          return E.resolve({ setupIntent: t });
      }
    }
    function Ys(e, t, n, r, o) {
      return zs(e, t, n, r, o).then(function(e) {
        if (e.paymentIntent)
          throw new Error("Got unexpected PaymentIntent response");
        return e;
      });
    }
    function Ws(o, i, a, s) {
      return function(e) {
        switch (e.type) {
          case "error":
            var t = e.error,
              n = t.setup_intent;
            return a && n && "succeeded" === n.status
              ? E.resolve({ setupIntent: n })
              : E.resolve({ error: t });
          case "object":
            var r = e.object;
            return Ys(o, r, i, e.locale, s);
          default:
            return Object(m.a)(e);
        }
      };
    }
    function Ks(l, p) {
      return function(e, t, n, r, o) {
        var i = Ea(n, l),
          a = Pa(p, l, r),
          s = Sa(l, o),
          c = "none" === a.mode.tag,
          u = e.action.confirmSetupIntent(
            Zs({}, a, { intentSecret: i, expectedType: p, options: s, mids: t })
          );
        return s.handleActions ? u.then(Ws(e, p, c, !1)) : u.then(Bi);
      };
    }
    function Vs(e, t, n, r, o) {
      var i = me(ta, n, "stripe.handleCardSetup intent secret").value,
        a = Hi.card,
        s = qs(!1, !1, a, "handleCardSetup")(r, o),
        c = !r && !o;
      return e.action
        .confirmSetupIntent(
          uc({}, s, {
            intentSecret: i,
            expectedType: a,
            options: { handleActions: !0 },
            mids: t
          })
        )
        .then(Ws(e, a, c, !1));
    }
    function Js(e, t) {
      if ("string" != typeof e)
        return F("an Issuing card ID of the form ic_xxx", e, t);
      var n,
        r = (n = e.trim().match(/ic_[a-zA-Z0-9_]+$/)) ? n[0] : null;
      return null === r
        ? F("an Issuing card ID of the form ic_xxx", e, t)
        : D(r, []);
    }
    function $s(e, t) {
      if ("string" != typeof e)
        return F("an ephemeral key secret of the form ek_xxx", e, t);
      var n,
        r = (n = e.trim().match(/ek_[a-zA-Z0-9_]+$/)) ? n[0] : null;
      return null === r
        ? F("an ephemeral key secret of the form ek_xxx", e, t)
        : D(r, []);
    }
    function Xs(e, t, n) {
      var r = me(Js, e, "stripe." + "retrieveIssuingCard" + " cardId").value,
        o = me(
          $s,
          t,
          "stripe." + "retrieveIssuingCard" + " ephemeral key secret"
        ).value;
      return n.action
        .retrieveIssuingCard({ cardId: r, ephemeralKeySecret: o })
        .then(ti);
    }
    var Qs =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Zs =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      ec = Ks("confirmAcssDebitSetup", Hi.acss_debit),
      tc = Ks("confirmCardSetup", Hi.card),
      nc = Ks("confirmSepaDebitSetup", Hi.sepa_debit),
      rc = Ks("confirmAuBecsDebitSetup", Hi.au_becs_debit),
      oc = Ks("confirmBacsDebitSetup", Hi.bacs_debit),
      ic = Ks("confirmIdealSetup", Hi.ideal),
      ac = Ks("confirmAlipaySetup", Hi.alipay),
      sc = Ks("confirmSofortSetup", Hi.sofort),
      cc = Ks("confirmBancontactSetup", Hi.bancontact),
      uc =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      lc = [Nn.checkout_beta_2, Nn.checkout_beta_3, Nn.checkout_beta_4],
      pc = [
        Nn.checkout_beta_2,
        Nn.checkout_beta_3,
        Nn.checkout_beta_4,
        Nn.checkout_beta_locales,
        Nn.checkout_beta_testcards
      ],
      dc = Object.keys({
        bg: "bg",
        cs: "cs",
        da: "da",
        de: "de",
        el: "el",
        en: "en",
        "en-GB": "en-GB",
        es: "es",
        "es-419": "es-419",
        et: "et",
        fi: "fi",
        fr: "fr",
        "fr-CA": "fr-CA",
        hu: "hu",
        id: "id",
        it: "it",
        ja: "ja",
        lt: "lt",
        lv: "lv",
        ms: "ms",
        mt: "mt",
        nb: "nb",
        nl: "nl",
        pl: "pl",
        pt: "pt",
        "pt-BR": "pt-BR",
        ro: "ro",
        ru: "ru",
        sk: "sk",
        sl: "sl",
        sv: "sv",
        tr: "tr",
        zh: "zh",
        "zh-HK": "zh-HK",
        "zh-TW": "zh-TW"
      }),
      fc = Object.keys({ th: "th", "pt-PT": "pt-PT" }),
      mc =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function hc(e, t) {
      var n,
        r = {};
      for (n in e)
        0 <= t.indexOf(n) ||
          (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
      return r;
    }
    function _c(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function yc(e, t) {
      var n = de(
          mc({}, gc, {
            items: H(
              G(
                ne(de({ type: W("plan"), quantity: Q(0), id: V })),
                ne(de({ type: W("sku"), quantity: Q(0), id: V }))
              )
            ),
            successUrl: V,
            cancelUrl: V
          })
        ),
        r = me(n, t, "stripe.redirectToCheckout").value,
        o = r.sku,
        i = r.plan,
        a = r.items,
        s = hc(r, ["sku", "plan", "items"]),
        c = (function(e, t, n) {
          if ((e && t) || ((e || t) && n))
            throw new S(
              "stripe.redirectToCheckout: Expected only one of sku, plan, or items."
            );
          if ("string" == typeof e) return [{ sku: e, quantity: 1 }];
          if ("string" == typeof t) return [{ plan: t, quantity: 1 }];
          if (n)
            return n.map(function(e) {
              return "sku" === e.type
                ? { sku: e.id, quantity: e.quantity }
                : { plan: e.id, quantity: e.quantity };
            });
          throw new S(
            "stripe.redirectToCheckout: You must provide either sku, plan, or items."
          );
        })(o, i, a);
      return mc({ tag: "no-session", items: c }, s);
    }
    function vc(e, t, n) {
      var r = de(
          mc(
            {},
            gc,
            {
              sessionId: H(V),
              successUrl: H(V),
              cancelUrl: H(V),
              mode: H(W("subscription", "payment")),
              items: H(
                G(
                  ne(de({ quantity: Q(0), plan: V })),
                  ne(de({ quantity: Q(0), sku: V }))
                )
              ),
              lineItems: H(ne(de({ quantity: Q(0), price: V })))
            },
            -1 !== e.indexOf("checkout_beta_locales")
              ? { locale: H(W.apply(void 0, ["auto"].concat(_c(dc), _c(fc)))) }
              : {}
          )
        ),
        o = me(r, t, "stripe.redirectToCheckout").value;
      if (o.sessionId) {
        var i = o.sessionId;
        if (1 < Object.keys(o).length)
          throw new S(
            "stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession."
          );
        if (!/^cs_/.test(i))
          throw new S(
            "stripe.redirectToCheckout: Invalid value for sessionId. You specified '" +
              i +
              "'."
          );
        if ("livemode" === n && /^cs_test_/.test(i))
          throw new S(
            "stripe.redirectToCheckout: the provided sessionId is for a test mode Checkout Session, whereas Stripe.js was initialized with a live mode publishable key."
          );
        if ("testmode" === n && /^cs_live_/.test(i))
          throw new S(
            "stripe.redirectToCheckout: the provided sessionId is for a live mode Checkout Session, whereas Stripe.js was initialized with a test mode publishable key."
          );
        return { tag: "session", sessionId: i };
      }
      o.sessionId, o.sku, o.plan;
      var a = o.items,
        s = o.lineItems,
        c = o.successUrl,
        u = o.cancelUrl,
        l = o.mode,
        p = hc(o, [
          "sessionId",
          "sku",
          "plan",
          "items",
          "lineItems",
          "successUrl",
          "cancelUrl",
          "mode"
        ]);
      if (!s && !a)
        throw new S(
          "stripe.redirectToCheckout: You must provide one of lineItems, items, or sessionId."
        );
      if (!c || !u)
        throw new S(
          "stripe.redirectToCheckout: You must provide successUrl and cancelUrl."
        );
      return mc(
        {
          tag: "no-session",
          items: a,
          lineItems: s,
          successUrl: c,
          cancelUrl: u,
          mode: l
        },
        p
      );
    }
    function bc(e, t, n) {
      var r = vc(e, t, n);
      if ("no-session" !== r.tag) return r;
      var o = r.successUrl,
        i = r.cancelUrl;
      if (!g(o))
        throw new S(
          "stripe.redirectToCheckout: successUrl must start with either http:// or https://."
        );
      if (!g(i))
        throw new S(
          "stripe.redirectToCheckout: cancelUrl must start with either http:// or https://."
        );
      return r;
    }
    var gc = {
        sku: H(V),
        plan: H(V),
        clientReferenceId: H(V),
        locale: H(W.apply(void 0, ["auto"].concat(_c(dc)))),
        customerEmail: H(V),
        billingAddressCollection: H(W("required", "auto")),
        submitType: H(W("auto", "pay", "book", "donate")),
        allowIncompleteSubscriptions: H($),
        shippingAddressCollection: H(de({ allowedCountries: ne(V) }))
      },
      wc = /cs_(test|live)_.+/,
      Ec = function(e, t, n, r) {
        var o, i;
        return (
          (o = t),
          "session" ===
            (i = (function(t, e, n) {
              var r = w(lc, function(e) {
                return Ln(t, e);
              });
              if (e && e.lineItems && r)
                throw new S("Prices cannot be used with " + r);
              if ("string" == typeof e && wc.test(e))
                throw new S(
                  "stripe.redirectToCheckout: Checkout Session IDs must be passed in as an object with a key of `sessionId` and the Session ID as the value."
                );
              switch (r) {
                case "checkout_beta_2":
                  return yc(0, e);
                case "checkout_beta_3":
                  return vc(t, e, n);
                case "checkout_beta_4":
                default:
                  return bc(t, e, n);
              }
            })(e, n, 3 < arguments.length && void 0 !== r ? r : "unknown"))
              .tag ||
          null == o ||
          i.locale ||
          -1 === ["auto"].concat(_c(dc)).indexOf(o)
            ? i
            : mc({}, i, { locale: o })
        );
      },
      Sc =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
    function Pc(t, e) {
      return Wa(e).then(function(e) {
        return Ka(t, "redirectToCheckout", e), { error: e.error };
      });
    }
    function kc(n, t, e, r, o) {
      n.report("redirect_to_checkout.options", {
        betas: t,
        options: o,
        globalLocale: r
      });
      var i = Ec(t, r, o, n.livemode());
      if ("session" === i.tag) {
        var a = i.sessionId;
        return n.action
          .createPaymentPageWithSession({ betas: t, mids: e(), sessionId: a })
          .then(function(e) {
            if ("error" === e.type) return { error: e.error };
            var t = e.object.url;
            return Pc(n, t);
          });
      }
      i.tag;
      var s = i.items,
        c = i.lineItems,
        u = i.mode,
        l = i.successUrl,
        p = i.cancelUrl,
        d = i.clientReferenceId,
        f = i.customerEmail,
        m = i.billingAddressCollection,
        h = i.submitType,
        _ = i.allowIncompleteSubscriptions,
        y = i.shippingAddressCollection,
        v = (function(e, t) {
          var n,
            r = {};
          for (n in e)
            0 <= t.indexOf(n) ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        })(i, [
          "tag",
          "items",
          "lineItems",
          "mode",
          "successUrl",
          "cancelUrl",
          "clientReferenceId",
          "customerEmail",
          "billingAddressCollection",
          "submitType",
          "allowIncompleteSubscriptions",
          "shippingAddressCollection"
        ]),
        b = [];
      if (c && s)
        throw new Error("Only one of items, lineItems can be passed in.");
      if (c) {
        if (!u) throw new Error("Expected `mode`");
        b = c.map(function(e) {
          if (e.price)
            return { type: "price", id: e.price, quantity: e.quantity };
          throw new Error("Unexpected item shape.");
        });
      } else {
        if (!s) throw new Error("An items field must be passed in.");
        b = s.map(function(e) {
          if (e.sku) return { type: "sku", id: e.sku, quantity: e.quantity };
          if (e.plan) return { type: "plan", id: e.plan, quantity: e.quantity };
          throw new Error("Unexpected item shape.");
        });
      }
      var g = w(lc, function(e) {
        return Ln(t, e);
      });
      return n.action
        .createPaymentPage(
          Sc(
            {
              betas: t,
              mids: e(),
              items: b,
              mode: u,
              success_url: l,
              cancel_url: p,
              client_reference_id: d,
              customer_email: f,
              billing_address_collection: m,
              submit_type: h,
              use_payment_methods: !g,
              allow_incomplete_subscriptions: _,
              shipping_address_collection: y && {
                allowed_countries: y.allowedCountries
              }
            },
            v
          )
        )
        .then(function(e) {
          if ("error" === e.type) return { error: e.error };
          var t = e.object.url;
          return Pc(n, t);
        });
    }
    function Oc(e) {
      switch (e.type) {
        case "object":
          return { token: e.object };
        case "error":
          return { error: e.error };
        default:
          return Object(m.a)(e);
      }
    }
    function Ac(e) {
      return "object" === (void 0 === e ? "undefined" : Ic(e)) && null !== e
        ? e
        : {};
    }
    function Tc(e) {
      switch (e.type) {
        case "object":
          return { radarSession: e.object };
        case "error":
          return { error: e.error };
        default:
          return Object(m.a)(e);
      }
    }
    var Ic =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Cc = function(e, t, n) {
        return t && Rc(e.prototype, t), n && Rc(e, n), e;
      };
    function Rc(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var jc =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = arguments[t];
          for (n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    function Nc(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    var Mc = new b(),
      xc = document ? document.readyState : "unknown",
      Lc = !1;
    switch (xc) {
      case "loading":
        Lc = !0;
        break;
      case "interactive":
        try {
          var Dc = function() {
            Lc = !0;
          };
          setTimeout(function() {
            document.removeEventListener("DOMContentLoaded", Dc);
          }, 0),
            document.addEventListener("DOMContentLoaded", Dc);
        } catch (e) {}
    }
    function Bc(e, t, n, r) {
      var o, i, a, s, c, u, l, p, d, f;
      (Hc && !r) ||
        ((Hc = !0),
        (o = r || new b()),
        "complete" === document.readyState
          ? ((f = l = u = c = s = null),
            window.performance &&
              (window.performance.timing &&
                ((a = (i = window.performance.timing).fetchStart),
                (s = i.domLoading - a),
                (c = i.domInteractive - a),
                (u = i.domComplete - a),
                (l = b.fromPosixTime(a).getElapsedTime(Mc))),
              window.performance.getEntriesByType &&
                ((p = window.performance.getEntriesByType("resource")),
                (d = "https://js.stripe.com/v3/".replace(/\/$/, "")),
                (f = p.reduce(function(e, t) {
                  if (0 === t.name.indexOf(d)) {
                    var n = t.name.match(/\/([^/#?]*)\/?(?:$|[#?])/);
                    if (n && n[1]) {
                      var r = n[1].replace(/-[0-9a-f]{32}\./, ".");
                      return (
                        "v3" === r && (r = "stripe.js"),
                        jc(
                          {},
                          e,
                          ((o = {}),
                          (i = r),
                          (a = {
                            transfer_size: t.transferSize,
                            duration: Math.round(t.duration)
                          }),
                          i in o
                            ? Object.defineProperty(o, i, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                              })
                            : (o[i] = a),
                          o)
                        )
                      );
                    }
                  }
                  var o, i, a;
                  return e;
                }, {})))),
            e.report("timings", {
              element: e.controllerFor(),
              dom_loading: s,
              dom_interactive: c,
              dom_complete: u,
              since_fetch: l,
              load_count: 1,
              load_before_dom_content_loaded: Lc,
              load_ready_state: xc,
              first_create_ready_state: t,
              first_mount_readyState: n,
              until_first_create: Mc.getElapsedTime(e._createTimestamp),
              until_first_mount: Mc.getElapsedTime(e._mountTimestamp),
              until_first_load: Mc.getElapsedTime(o),
              resource_timings: f
            }))
          : window.addEventListener("load", function() {
              try {
                Bc(e, t, n, o);
              } catch (e) {}
            }));
    }
    function qc(e) {
      return (
        "You have an in-flight " +
        e +
        "! Please be sure to disable your form submit button when " +
        e +
        " is called."
      );
    }
    function Fc(e) {
      return function() {
        throw new S(
          "You cannot call `stripe." +
            e +
            "` without supplying a PaymentIntents beta flag when initializing Stripe.js.    You can find more information including code snippets at https://www.stripe.com/docs/payments/payment-intents/quickstart."
        );
      };
    }
    var Uc,
      Hc = !1,
      Gc = fe({
        apiKey: V,
        stripeAccount: H(V),
        locale: H(V),
        apiVersion: H(V),
        __privateApiUrl: H(V),
        __checkout: H(fe({ mids: fe({ muid: V, sid: V }) })),
        __hosted3DS: H($),
        canCreateRadarSession: H($),
        betas: H(ne(K.apply(void 0, Nc(xn))))
      }),
      zc = (Cc(Yc, [
        {
          key: "_attachCreateRadarSession",
          value: function(e) {
            var t,
              n,
              r = this;
            e &&
              (this.createRadarSession = ((t = function() {
                var e,
                  t,
                  n = r._mids();
                return (
                  (e = r._controller),
                  (t = n),
                  e.action.createRadarSession({ mids: t }).then(Tc)
                );
              }),
              function() {
                try {
                  return t.call(this);
                } catch (e) {
                  return xe(e, n || (this && this._controller));
                }
              }));
          }
        },
        {
          key: "_attachPaymentIntentMethods",
          value: function(e, t) {
            function r() {
              return o._mids();
            }
            var o = this;
            (this.createPaymentMethod = Le(function() {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              return ba.apply(void 0, [o._controller, r()].concat(t));
            })),
              (this._createPaymentMethod = this.createPaymentMethod),
              (this.retrievePaymentIntent = ze(function(e) {
                return (
                  (t = e),
                  (n = o._controller),
                  (r = wa(t, "retrievePaymentIntent")),
                  n.action
                    .retrievePaymentIntent({ intentSecret: r, hosted: !1 })
                    .then(Di)
                );
                var t, n, r;
              })),
              (this.retrieveSetupIntent = ze(function(e) {
                return (
                  (t = e),
                  (n = o._controller),
                  (r = Ea(t, "retrieveSetupIntent")),
                  n.action
                    .retrieveSetupIntent({ intentSecret: r, hosted: !1 })
                    .then(Bi)
                );
                var t, n, r;
              })),
              (this.updatePaymentIntent = Fc("updatePaymentIntent")),
              (Ln(this._betas, Nn.line_items_beta_1) ||
                Ln(this._betas, Nn.tax_product_beta_1)) &&
                (this.updatePaymentIntent = Ye(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return Za.apply(void 0, [o._controller, r()].concat(t));
                }));
            var n = jt(es, qc("handleCardAction"));
            this.handleCardAction = ze(function(e) {
              return n(e, o._controller);
            });
            var i = jt(fs, qc("confirmCardPayment"));
            this.confirmCardPayment = Le(function() {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              return i.apply(void 0, [o._controller, r()].concat(t));
            });
            var a = jt(tc, qc("confirmCardSetup"));
            (this.confirmCardSetup = Le(function() {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              return a.apply(void 0, [o._controller, r()].concat(t));
            })),
              (this.confirmIdealPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return vs.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmSepaDebitPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return Ss.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmSepaDebitSetup = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return nc.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmFpxPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return hs.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmAlipayPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return gs.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmAlipaySetup = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return ac.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmAuBecsDebitPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return us.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmAuBecsDebitSetup = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return rc.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmBacsDebitPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return ls.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmBacsDebitSetup = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return oc.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmBancontactPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return ps.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmEpsPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return ms.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmGiropayPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return _s.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmOxxoPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return bs.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmP24Payment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return ws.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmSofortPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return Ps.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmIdealSetup = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return ic.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmSofortSetup = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return sc.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmBancontactSetup = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return cc.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.confirmGrabPayPayment = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return ys.apply(void 0, [o._controller, r()].concat(t));
              })),
              (this.verifyMicrodepositsForPayment = Fc(
                "verifyMicrodepositsForPayment"
              )),
              (this.verifyMicrodepositsForSetup = Fc(
                "verifyMicrodepositsForSetup"
              )),
              (Ln(this._betas, Nn.acss_debit_beta_1) ||
                Ln(this._betas, Nn.acss_debit_beta_2)) &&
                ((this.verifyMicrodepositsForPayment = Ye(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function(e, t, n) {
                    var r = wa(t, "verifyMicrodepositsForSetup"),
                      o = me(te, n, "stripe.verifyMicrodepositsForSetup");
                    return e.action
                      .verifyMicrodepositsForPayment({
                        intentSecret: r,
                        data: o.value
                      })
                      .then(Di);
                  }.apply(void 0, [o._controller].concat(t));
                })),
                (this.verifyMicrodepositsForSetup = Ye(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function(e, t, n) {
                    var r = Ea(t, "verifyMicrodepositsForSetup"),
                      o = me(te, n, "stripe.verifyMicrodepositsForSetup");
                    return e.action
                      .verifyMicrodepositsForSetup({
                        intentSecret: r,
                        data: o.value
                      })
                      .then(Bi);
                  }.apply(void 0, [o._controller].concat(t));
                }))),
              (this.confirmAcssDebitPayment = Fc("confirmAcssDebitPayment")),
              (this.confirmAcssDebitSetup = Fc("confirmAcssDebitSetup")),
              Ln(this._betas, Nn.acss_debit_beta_1)
                ? ((this.confirmAcssDebitPayment = Le(function() {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return ss.apply(void 0, [o._controller, r()].concat(t));
                  })),
                  (this.confirmAcssDebitSetup = Le(function() {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return ec.apply(void 0, [o._controller, r()].concat(t));
                  })))
                : Ln(this._betas, Nn.acss_debit_beta_2) &&
                  ((this.confirmAcssDebitPayment = Le(function() {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return function(t, n, e, r, o) {
                      var i = "confirmAcssDebitPayment",
                        a = Hi.acss_debit,
                        s = wa(e, i),
                        c = Pa(a, i, r);
                      return (
                        Cs(o, i),
                        ns(c)
                          ? rs({
                              controller: t,
                              intentSecret: s,
                              mode: "payment",
                              billingDetails: ts(c)
                            }).then(function(e) {
                              switch (e.type) {
                                case "error":
                                  return { error: e.error };
                                case "success":
                                  return t.action
                                    .confirmPaymentIntent({
                                      mode: {
                                        tag: "paymentMethod",
                                        paymentMethod: e.paymentMethod,
                                        options: c.mode.options || {}
                                      },
                                      otherParams: c.otherParams,
                                      intentSecret: s,
                                      expectedType: a,
                                      options: { handleActions: !1 },
                                      mids: n
                                    })
                                    .then(Di);
                                default:
                                  return Object(m.a)(e.type);
                              }
                            })
                          : t.action
                              .confirmPaymentIntent(
                                As({}, c, {
                                  intentSecret: s,
                                  expectedType: a,
                                  options: { handleActions: !1 },
                                  mids: n
                                })
                              )
                              .then(Di)
                      );
                    }.apply(void 0, [o._controller, r()].concat(t));
                  })),
                  (this.confirmAcssDebitSetup = Le(function() {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return function(t, n, e, r, o) {
                      var i = "confirmAcssDebitSetup",
                        a = Hi.acss_debit,
                        s = Ea(e, i),
                        c = Pa(a, i, r);
                      return (
                        Cs(o, i),
                        ns(c)
                          ? rs({
                              controller: t,
                              intentSecret: s,
                              mode: "setup",
                              billingDetails: ts(c)
                            }).then(function(e) {
                              switch (e.type) {
                                case "error":
                                  return { error: e.error };
                                case "success":
                                  return t.action
                                    .confirmSetupIntent({
                                      mode: {
                                        tag: "paymentMethod",
                                        paymentMethod: e.paymentMethod,
                                        options: c.mode.options || {}
                                      },
                                      otherParams: c.otherParams,
                                      intentSecret: s,
                                      expectedType: a,
                                      options: { handleActions: !1 },
                                      mids: n
                                    })
                                    .then(Bi);
                                default:
                                  return Object(m.a)(e.type);
                              }
                            })
                          : t.action
                              .confirmSetupIntent(
                                As({}, c, {
                                  intentSecret: s,
                                  expectedType: a,
                                  options: { handleActions: !1 },
                                  mids: n
                                })
                              )
                              .then(Bi)
                      );
                    }.apply(void 0, [o._controller, r()].concat(t));
                  }))),
              Ln(this._betas, Nn.return_intents_beta_1) &&
                (this.confirmReturnIntent = Ye(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function(e, t, n) {
                    return e.action
                      .confirmReturnIntent({ returnIntentId: t, data: n })
                      .then(Gs);
                  }.apply(void 0, [o._controller].concat(t));
                })),
              (this.confirmBoletoPayment = Fc("confirmBoletoPayment")),
              Ln(this._betas, Nn.boleto_pm_beta_1) &&
                (this.confirmBoletoPayment = Le(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return ds.apply(void 0, [o._controller, r()].concat(t));
                })),
              (this.confirmKonbiniPayment = Fc("confirmKonbiniPayment")),
              Ln(this._betas, Nn.konbini_pm_beta_1) &&
                (this.confirmKonbiniPayment = Le(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function(e, t, n, r, o) {
                    return o && !1 === o.handleActions
                      ? Qa("confirmKonbiniPayment", Hi.konbini)(e, t, n, r, o)
                      : E.reject(
                          new S(
                            "Expected option `handleActions` to be `false`."
                          )
                        );
                  }.apply(void 0, [o._controller, r()].concat(t));
                })),
              Ln(this._betas, Nn.oxxo_pm_beta_1) &&
                (this.confirmOxxoPayment = Le(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return bs.apply(void 0, [o._controller, r()].concat(t));
                })),
              (this.confirmWechatPayPayment = Fc("confirmWechatPayPayment")),
              Ln(this._betas, Nn.wechat_pay_pm_beta_1) &&
                (this.confirmWechatPayPayment = Le(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function(e, t, n, r, o) {
                    if (o && !0 === o.handleActions)
                      throw new S(
                        "Expected option `handleActions` to be `false`."
                      );
                    var i = as({}, r, {
                      payment_method_options: as(
                        {},
                        (r && r.payment_method_options) || {},
                        {
                          wechat_pay: as(
                            {},
                            (r &&
                              r.payment_method_options &&
                              r.payment_method_options.wechat_pay) ||
                              {}
                          )
                        }
                      )
                    });
                    return Qa("confirmWechatPayPayment", Hi.wechat_pay)(
                      e,
                      t,
                      n,
                      i,
                      o
                    );
                  }.apply(void 0, [o._controller, r()].concat(t));
                })),
              (this.confirmPayPalPayment = Fc("confirmPayPalPayment")),
              Ln(this._betas, Nn.paypal_pm_beta_1) &&
                (this.confirmPayPalPayment = Le(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return Es.apply(void 0, [o._controller, r()].concat(t));
                })),
              (this.confirmAfterpayClearpayPayment = Fc(
                "confirmAfterpayClearpayPayment"
              )),
              Ln(this._betas, Nn.afterpay_clearpay_pm_beta_1) &&
                (this.confirmAfterpayClearpayPayment = Le(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return cs.apply(void 0, [o._controller, r()].concat(t));
                })),
              (this.confirmUpiPayment = Fc("confirmUpiPayment")),
              Ln(this._betas, Nn.upi_beta_1) &&
                (this.confirmUpiPayment = Le(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return ks.apply(void 0, [o._controller, r()].concat(t));
                })),
              (this.confirmNetbankingPayment = Fc("confirmNetbankingPayment")),
              Ln(this._betas, Nn.netbanking_beta_1) &&
                (this.confirmNetbankingPayment = Le(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return Os.apply(void 0, [o._controller, r()].concat(t));
                })),
              (this.confirmLcpmPilotPayment = Fc("confirmLcpmPilotPayment")),
              Ln(this._betas, Nn.lcpm_pilot_beta_1) &&
                (this.confirmLcpmPilotPayment = Ye(function() {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function(e, t, n, r, o) {
                    var i = "confirmLcpmPilotPayment",
                      a = wa(n, i);
                    throw (ka(o, i),
                    os(e, a),
                    new S("Method: confirmLcpmPilot is not yet implemented"));
                  }.apply(void 0, [o._controller, r()].concat(t));
                })),
              t &&
                ((this.handleHosted3DS2Payment = ze(function(e) {
                  return (
                    (t = e),
                    (n = o._controller),
                    (r = wa(t, "handleHosted3DS2Setup [internal]")),
                    n.action
                      .retrievePaymentIntent({ intentSecret: r, hosted: !0 })
                      .then(Xa(n, Hi.card, !1, !0))
                  );
                  var t, n, r;
                })),
                (this.handleHosted3DS2Setup = ze(function(e) {
                  return (
                    (t = e),
                    (n = o._controller),
                    (r = Ea(t, "handleHosted3DS2Setup [internal]")),
                    n.action
                      .retrieveSetupIntent({ intentSecret: r, hosted: !0 })
                      .then(Ws(n, Hi.card, !1, !0))
                  );
                  var t, n, r;
                })));
          }
        },
        {
          key: "_attachLegacyPaymentIntentMethods",
          value: function() {
            function r() {
              return o._mids();
            }
            var o = this,
              i =
                Ln(this._betas, Nn.payment_intent_beta_1) ||
                Ln(this._betas, Nn.payment_intent_beta_2),
              e = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return Fs.apply(void 0, [!0, o._controller, r()].concat(t));
              }),
              t = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return Fs.apply(void 0, [!1, o._controller, r()].concat(t));
              }),
              a = jt(Us, qc("handleCardPayment")),
              n = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return a.apply(void 0, [!0, o._controller, r(), i].concat(t));
              }),
              s = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return a.apply(void 0, [!1, o._controller, r(), i].concat(t));
              }),
              c = jt(Vs, qc("handleCardSetup")),
              u = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return c.apply(void 0, [o._controller, r()].concat(t));
              }),
              l = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return function(e, t, n, r, o) {
                  var i = me(ta, n, "stripe.confirmSetupIntent intent secret")
                      .value,
                    a = null,
                    s = qs(!1, !1, a, "confirmSetupIntent")(r, o);
                  return e.action
                    .confirmSetupIntent(
                      uc({}, s, {
                        otherParams: uc({}, s.otherParams),
                        intentSecret: i,
                        expectedType: a,
                        options: { handleActions: !1 },
                        mids: t
                      })
                    )
                    .then(Bi);
                }.apply(void 0, [o._controller, r()].concat(t));
              }),
              p = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return function(e, t, n, r, o, i) {
                  var a = me(
                      ea,
                      r,
                      "stripe.handleSepaDebitPayment intent secret"
                    ).value,
                    s = Hi.sepa_debit,
                    c = qs(!1, n, s, "handleSepaDebitPayment")(o, i),
                    u = !o && !i;
                  return e.action
                    .confirmPaymentIntent(
                      Qs({}, c, {
                        intentSecret: a,
                        expectedType: s,
                        options: { handleActions: !0 },
                        mids: t
                      })
                    )
                    .then(Xa(e, s, u, !1));
                }.apply(void 0, [o._controller, r(), i].concat(t));
              }),
              d = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return function(e, t, n, r, o) {
                  var i = me(ta, n, "stripe.handleSepaDebitSetup intent secret")
                      .value,
                    a = Hi.sepa_debit,
                    s = qs(!1, !1, a, "handleSepaDebitSetup")(r, o),
                    c = !r && !o;
                  return e.action
                    .confirmSetupIntent(
                      uc({}, s, {
                        intentSecret: i,
                        expectedType: a,
                        options: { handleActions: !0 },
                        mids: t
                      })
                    )
                    .then(Ws(e, a, c, !1));
                }.apply(void 0, [o._controller, r()].concat(t));
              }),
              f = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return Hs.apply(void 0, [!0, o._controller, r(), i].concat(t));
              }),
              m = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return Hs.apply(void 0, [!1, o._controller, r(), i].concat(t));
              }),
              h = Le(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return function(e, t, n, r, o, i) {
                  var a = me(ea, r, "stripe.handleFpxPayment intent secret")
                      .value,
                    s = Hi.fpx,
                    c = qs(!1, n, s, "handleFpxPayment")(o, i),
                    u = !o && !i;
                  return e.action
                    .confirmPaymentIntent(
                      Qs({}, c, {
                        intentSecret: a,
                        expectedType: s,
                        options: { handleActions: !0 },
                        mids: t
                      })
                    )
                    .then(Xa(e, s, u, !1));
                }.apply(void 0, [o._controller, r(), i].concat(t));
              });
            (this.handleCardPayment = s),
              (this.confirmPaymentIntent = t),
              (this.handleCardSetup = u),
              (this.confirmSetupIntent = l),
              (this.fulfillPaymentIntent = Fc("fulfillPaymentIntent")),
              (this.handleSepaDebitPayment = Fc("handleSepaDebitPayment")),
              (this.handleSepaDebitSetup = Fc("handleSepaDebitSetup")),
              (this.handleIdealPayment = Fc("handleIdealPayment")),
              (this.handleFpxPayment = Fc("handleFpxPayment")),
              Ln(this._betas, Nn.payment_intent_beta_1)
                ? (this.fulfillPaymentIntent = n)
                : (Ln(this._betas, Nn.payment_intent_beta_3) ||
                    Ln(this._betas, Nn.payment_intent_beta_2)) &&
                  (this.handleCardPayment = n),
              Ln(this._betas, Nn.payment_intent_beta_3) &&
                ((this.confirmPaymentIntent = e),
                (this.handleIdealPayment = f),
                (this.handleSepaDebitPayment = p)),
              Ln(this._betas, Nn.fpx_bank_beta_1) &&
                (this.handleFpxPayment = h),
              Ln(this._betas, Nn.ideal_pm_beta_1) &&
                (this.handleIdealPayment = m),
              Ln(this._betas, Nn.sepa_pm_beta_1) &&
                ((this.handleSepaDebitPayment = p),
                (this.handleSepaDebitSetup = d));
          }
        },
        {
          key: "_attachPrivateMethodsForCheckout",
          value: function(e) {
            var i = this;
            e &&
              ((this.sendInteractionEvent = jn),
              (this.tryNextAction = Ye(function(e, t) {
                var n = me($i, e, "Payment Intent").value,
                  r = Object.keys(Hi).map(function(e) {
                    return Hi[e];
                  }),
                  o = me(W.apply(void 0, Nc(r)), t, "Source type").value;
                return ("payment_intent" === n.object
                  ? $a
                  : Ys)(i._controller, n, o, "auto", !1);
              })));
          }
        },
        {
          key: "_attachCheckoutMethods",
          value: function(e) {
            function t() {
              return n._mids();
            }
            var n = this,
              r = e.reduce(function(e, t) {
                var n = w(pc, function(e) {
                  return e === t;
                });
                return n ? [].concat(Nc(e), [n]) : e;
              }, []);
            this.redirectToCheckout = function(e) {
              return kc(n._controller, r, t, n._locale, e);
            };
          }
        },
        {
          key: "_attachGetters",
          value: function() {
            var t = this,
              i = new fa(function(e) {
                t._registerWrapper({ name: e, version: null });
              });
            [
              "elements",
              "createToken",
              "createSource",
              "createPaymentMethod"
            ].forEach(function(r) {
              var o, e;
              t.hasOwnProperty(r) &&
                ((o = t[r]),
                (e = function() {
                  i.called(r);
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return o.apply(this, t);
                }),
                Object.defineProperty(t, r, {
                  enumerable: !0,
                  get: function() {
                    return i.got(r), e;
                  }
                }));
            });
          }
        },
        {
          key: "_attachIssuingCardMethods",
          value: function() {
            var e,
              n = this;
            (this.retrieveIssuingCard = ((e = "retrieveIssuingCard"),
            function() {
              throw new S(
                "You cannot call `stripe." +
                  e +
                  "` without supplying an Issuing beta flag when initializing Stripe.js."
              );
            })),
              Ln(this._betas, Nn.issuing_elements_1) &&
                (this.retrieveIssuingCard = Ye(function(e, t) {
                  return Xs(e, t, n._controller);
                }));
          }
        },
        {
          key: "_attachControllerGetter",
          value: function(t, n, r, o) {
            var i = this,
              a = [],
              s = document.readyState,
              c = void 0;
            Object.defineProperties(this, {
              _registerWrapper: {
                enumerable: !1,
                configurable: !0,
                writable: !1,
                value: function(e) {
                  a.push(e);
                }
              },
              _controller: {
                enumerable: !0,
                configurable: !0,
                get: function() {
                  if (c) return c;
                  var e = document.readyState;
                  return (
                    (c = new ur(
                      jc(
                        {
                          apiKey: i._apiKey,
                          apiVersion: t,
                          __privateApiUrl: n,
                          stripeAccount: r,
                          betas: i._betas,
                          stripeJsId: Yc.stripeJsId,
                          stripeJsLoadTimestamp: Mc,
                          stripeCreateTimestamp: o,
                          onFirstLoad: function() {
                            try {
                              Bc(c, s, e);
                            } catch (e) {}
                          },
                          listenerRegistry: i._listenerRegistry
                        },
                        i._locale ? { locale: i._locale } : {}
                      )
                    )),
                    Object.defineProperties(i, {
                      _registerWrapper: {
                        value: Vc,
                        writable: !1,
                        enumerable: !1,
                        configurable: !0
                      },
                      _controller: {
                        value: c,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                      }
                    }),
                    a.forEach(function(e) {
                      return i._registerWrapper(e);
                    }),
                    a.splice(0),
                    c
                  );
                }
              }
            });
          }
        },
        {
          key: "_ensureHTTPS",
          value: function() {
            var e = window.location.protocol,
              t =
                -1 !==
                [
                  "https:",
                  "file:",
                  "ionic:",
                  "httpsionic:",
                  "chrome-extension:",
                  "moz-extension:"
                ].indexOf(e),
              n =
                -1 !==
                ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(
                  window.location.hostname
                ),
              r = this._keyMode === I.live,
              o =
                "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/security/guide#tls";
            if (!t) {
              if (r && !n)
                throw (this._controller.report("user_error.non_https_error", {
                  protocol: e
                }),
                new S(o));
              !r || n
                ? window.console &&
                  console.warn(
                    "You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS."
                  )
                : window.console && console.warn(o);
            }
          }
        },
        {
          key: "_ensureStripeHosted",
          value: function(e) {
            if (!e)
              throw (this._controller.report("user_error.self_hosted"),
              new S(
                "Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs"
              ));
          }
        },
        {
          key: "_mids",
          value: function() {
            return Yc._ec ? Yc._ec.ids() : null;
          }
        }
      ]),
      Yc);
    function Yc(e, t) {
      var n = this;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, Yc),
        Kc.call(this);
      var r = new b(),
        o = me(Gc, e || {}, "Stripe()"),
        i = o.value,
        a = o.warnings,
        s = i.apiKey,
        c = i.stripeAccount,
        u = i.apiVersion,
        l = i.locale,
        p = i.__privateApiUrl,
        d = i.__checkout,
        f = i.__hosted3DS,
        m = i.canCreateRadarSession,
        h = i.betas;
      ua(s),
        d && d.mids && (Yc._ec = Cn({ checkoutIds: d.mids })),
        (this._apiKey = s.trim()),
        (this._keyMode = C(this._apiKey)),
        (this._betas = h || []),
        (this._locale = br(l, this._betas) || null),
        (this._stripeAccount = c || null),
        (this._isCheckout = !!d),
        this._attachControllerGetter(u, p, c, r),
        a.forEach(function(e) {
          return n._controller.warn(e);
        }),
        Bn(),
        this._ensureHTTPS(),
        this._ensureStripeHosted(t),
        this._attachPaymentIntentMethods(this._betas, !!f),
        this._attachLegacyPaymentIntentMethods(this._betas),
        this._attachCheckoutMethods(this._betas),
        this._attachPrivateMethodsForCheckout(this._isCheckout),
        this._attachCreateRadarSession(m || !1),
        this._attachGetters(),
        this._attachIssuingCardMethods(this._betas);
    }
    (zc.version = 3),
      (zc.stripeJsId = ce()),
      (zc._ec = ((Uc = new RegExp(
        document.location.protocol + "//" + document.location.host
      )),
      "https://checkout.stripe.com/".match(Uc) ? null : Cn()));
    function Wc(e, t) {
      return new Jc(
        Xc(
          { apiKey: e },
          t && "object" === (void 0 === t ? "undefined" : $c(t)) ? t : {}
        ),
        Qc
      );
    }
    var Kc = function() {
        var l = this;
        (this._listenerRegistry = bn()),
          (this.elements = ze(function(e) {
            return new Ri(
              l._controller,
              l._listenerRegistry,
              {
                stripeJsLoadTimestamp: Mc,
                stripeCreateTimestamp: l._controller._createTimestamp
              },
              jc({}, l._locale ? { locale: l._locale } : {}, e, {
                betas: l._betas
              })
            );
          })),
          (this.createToken = Ye(function(e, t) {
            var c,
              u,
              n = l._mids();
            return "cvc_update" === e
              ? (function(e, t, n) {
                  var r = Ai(t);
                  if (r && "cardCvc" === r._componentName) {
                    var o = r._implementation._frame.id;
                    return e.action
                      .tokenizeCvcUpdate({ frameId: o, mids: n })
                      .then(Oc);
                  }
                  throw new S(
                    "You must provide a `cardCvc` Element to create a `cvc_update` token."
                  );
                })(l._controller, t, n)
              : ((c = l._controller),
                (u = n),
                (function(e, t) {
                  var n = Ai(e);
                  if (n) {
                    var r = n._implementation._frame.id,
                      o = n._componentName,
                      i = Ac(t);
                    return c.action
                      .tokenizeWithElement({
                        frameId: r,
                        elementName: o,
                        tokenData: i,
                        mids: u
                      })
                      .then(Oc);
                  }
                  if ("string" != typeof e)
                    throw new S(
                      "You must provide a Stripe Element or a valid token type to create a Token."
                    );
                  var a = e,
                    s = Ac(t);
                  return c.action
                    .tokenizeWithData({
                      elementName: null,
                      type: a,
                      tokenData: s,
                      mids: u
                    })
                    .then(Oc);
                })(e, t));
          })),
          (this.createSource = Ye(function(e, t) {
            var n = Ai(e),
              r = _a(n ? t : e),
              o = r || { type: null, data: {} },
              i = o.type,
              a = o.data;
            if (n) {
              var s = n._implementation._frame.id,
                c = n._componentName;
              return !r && Li(c)
                ? E.reject(
                    new S(
                      "Please provide Source creation parameters to createSource."
                    )
                  )
                : l._controller.action
                    .createSourceWithElement({
                      frameId: s,
                      elementName: c,
                      type: i,
                      sourceData: a,
                      mids: l._mids()
                    })
                    .then(ya);
            }
            return r
              ? i
                ? l._controller.action
                    .createSourceWithData({
                      elementName: null,
                      type: i,
                      sourceData: a,
                      mids: l._mids()
                    })
                    .then(ya)
                : E.reject(
                    new S("Please provide a source type to createSource.")
                  )
              : E.reject(
                  new S(
                    "Please provide either an Element or Source creation parameters to createSource."
                  )
                );
          })),
          (this.retrieveSource = ze(function(e) {
            var t = me(xa, { source: e }, "retrieveSource"),
              n = t.value;
            return (
              t.warnings.forEach(function(e) {
                return l._controller.warn(e);
              }),
              l._controller.action.retrieveSource(n).then(ya)
            );
          })),
          (this.paymentRequest = Ye(function(e, t) {
            !(function(e) {
              if (e === I.unknown)
                throw new S(
                  "It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
                );
            })(l._keyMode);
            var n = l._isCheckout && t ? t : null;
            return ji(
              l._controller,
              { apiKey: l._apiKey, accountId: l._stripeAccount },
              l._mids(),
              e,
              l._betas,
              n,
              l._listenerRegistry
            );
          }));
      },
      Vc = function(e) {
        var t,
          n,
          r,
          o,
          i = ae(ra, e, "WrapperLibrary");
        "error" !== i.type
          ? ((n = (t = i.value).name),
            (r = t.version),
            (o = t.startTime),
            this._controller.registerWrapper({
              name: n,
              version: r,
              startTime: o
            }))
          : this._controller.report("register_wrapper.error", {
              error: i.error.message
            });
      },
      Jc = zc,
      $c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Xc =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Qc = (function() {
        if (document.currentScript) {
          var e = k(document.currentScript.src);
          return !e || tn(e.origin);
        }
        return !0;
      })();
    (Wc.version = Jc.version),
      window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3
        ? (window.Stripe.StripeV3 = Wc)
        : window.Stripe
        ? window.console &&
          console.warn(
            "It looks like Stripe.js was loaded more than one time. Please only load it once per page."
          )
        : (window.Stripe = Wc);
    t.default = Wc;
  }
]);
