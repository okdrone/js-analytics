(function () {
    var n = Math,
        ea = RegExp;

    var __serverHost = 'www.test.com';

    var defaultAnalyticsName = 'ta';

    function setName(obj, val) {
        return obj.name = val;
    }

    function setLink(obj, link) {
        return obj.href = link;
    }

    var p = "push",
        h = "hash",
        ha = "slice",
        Qc = "replace",
        q = "data",
        r = "cookie",
        t = "indexOf",
        m = "match",
        ia = "defaultValue",
        ja = "port",
        u = "createElement",
        id = "setAttribute",
        v = "name",
        da = "getTime",
        x = "host",
        y = "length",
        z = "prototype",
        la = "clientWidth",
        A = "split",
        B = "location",
        ma = "hostname",
        ga = "search",
        jd = "target",
        C = "call",
        E = "protocol",
        na = "clientHeight",
        Ab = "href",
        F = "substring",
        kd = "action",
        G = "apply",
        oa = "navigator",
        Ub = "parentNode",
        H = "join",
        I = "toLowerCase";
    var pa = new function () {
        var a = [];
        this.set = function (b) {
            a[b] = true;
        };
        this.M = function () {
            for (var b = [], c = 0; c < a.length; c++)
                if(a[c]) (b[Math.floor(c / 6)] = b[Math.floor(c / 6)] ^ 1 << c % 6);
            for (c = 0; c < b.length; c++)
                b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[c] || 0);
            return b.join("") + "~";
        };
    };
    function J(a) {
        pa.set(a);
    }
    function isFunction(obj) {
        return "function" == typeof obj;
    }
    function isString(obj) {
        return undefined !== obj && -1 < (obj.constructor + "").indexOf("String");
    }
    function randomInteger() {
        return Math.round(2147483647 * Math.random());
    }
    function createSmallestImage(link) {
        var img = document.createElement("img");
        img.width = 1;
        img.height = 1;
        img.src = link;
        return img;
    }
    function L() {

    }
    function sa(a) {
        if (encodeURIComponent instanceof Function)
            return encodeURIComponent(a);
        J(28);
        return a;
    }
    function ka(a) {
        return sa(a).replace(/\(/g, "%28").replace(/\)/g, "%29");
    }
    var ta = function (a, b, c, d) {
        try {
            //a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
            if(a.addEventListener){
                a.addEventListener(b, c, !!d);
            } else {
                if(a.attachEvent) a.attachEvent("on" + b, c);
            }
        } catch (e) {
            J(27);
        }
    },
        ua = function (a, b, c) {
            //a.removeEventListener ? a.removeEventListener(b, c, false) : a.detachEvent && a.detachEvent("on" + b, c);
            if(a.removeEventListener){
                a.removeEventListener(b, c, false);
            } else {
                if(a.detachEvent) {
                    a.detachEvent("on" + b, c);
                }
            }
        };
    function createScriptNode(link, id) {
        if (link) {
            var scriptNode = document.createElement("script");
            scriptNode.type = "text/javascript";
            scriptNode.async = true;
            scriptNode.src = link;
            scriptNode.id = id;
            var firstScriptNode = document.getElementsByTagName("script")[0];
            firstScriptNode.parentNode.insertBefore(scriptNode, firstScriptNode);
        }
    }
    function currentHostname() {
        var a = "" + document.location.hostname;
        return 0 === a.indexOf("www.") ? a.substring(4) : a;
    }
    function va(a) {
        var b = document.referrer;
        if (/^https?:\/\//i.test(b)) {
            if (a) return b;
            a = "//" + document.location.hostname;
            var c = b.indexOf(a);
            if (5 == c || 6 == c)
                if (a = b.charAt(c + a.length), "/" == a || "?" == a || "" === a || ":" == a)
                    return;
            return b;
        }
    }
    function wa(a, b) {
        if (1 == b.length && null !== b[0] && "object" === typeof b[0])
            return b[0];
        for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++)
            if ("object" === typeof b[e]) {
                for (var g in b[e]) 
                    if(b[e].hasOwnProperty(g)){ 
                        c[g] = b[e][g];
                    }
                break;
            } else
                if(e < a.length) c[a[e]] = b[e];
        return c;
    }
    var N = function () {
        this.keys = [];
        this.w = {};
        this.m = {};
    };
    N.prototype.set = function (a, b, c) {
        this.keys.push(a);
        //c ? this.m[":" + a] = b : this.w[":" + a] = b;
        if(c){
            this.m[":" + a] = b;
        } else {
            this.w[":" + a] = b;
        }
    };
    N.prototype.get = function (a) {
        return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.w[":" + a];
    };
    N.prototype.map = function (callBack) {
        for (var i = 0; i < this.keys.length; i++) {
            var key = this.keys[i],
                val = this.get(key);
            if(val) callBack(key, val);
        }
    };
    var xa = function (a) {
            var b = window._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && true === window["ga-disable-" + a])
                return true;
            try {
                var c = window.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                    return true;
            } catch (d) {

            }
            return false;
        },
        fb = function (a) {
            setTimeout(a, 100);
        },
        ya = function (a) {
            var b = [], c = document.cookie.split(";");
            a = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
            for (var d = 0; d < c.length; d++) {
                var e = c[d].match(a);
                if(e) b.push(e[1]);
            }
            return b;
        },
        hostMainName = function(){
            var mainName = '',
            hostArr = __serverHost.split('.'),
            len = hostArr.length;
            if(len > 1)
                mainName = hostArr[len - 2];
            return mainName;
        },
        zc = function (a, b, c, d, e, g) {
            e = xa(e) ? false : doubleclickHostReg.test(document.location.hostname) || "/" == c && za.test(d) ? false : true;
            if (!e)
                return false;
            if(b && 1200 < b.length) {
                b = b.substring(0, 1200);
                J(24);
            }
            c = a + "=" + b + "; path=" + c + "; ";
            if(g) {
                c += "expires=" + (new Date((new Date()).getTime() + g)).toGMTString() + "; ";
            }
            if(d && "none" != d) {
                c += "domain=" + d + ";";
            }
            d = document.cookie;
            document.cookie = c;
            if (!(d = d != document.cookie)) t: {
                a = ya(a);
                for (d = 0; d < a.length; d++)
                    if (b == a[d]) {
                        d = true;
                        break t;
                    }
                d = false;
            }
            return d;
        },
        hostRegStr = '^(www\.)?' + hostMainName() + '(\.com?)?(\.[a-z]{2})?$',
        za = RegExp(hostRegStr),
        doubleclickHostReg = RegExp(/(^|\.)doubleclick\.net$/i);
    var oc = function () {
        return (Ba || "https:" == document.location.protocol ? "https:" : "http:") + "//" + __serverHost;
    },
        Da = function (a) {
            setName(this, "len");
            this.message = a + "-8192";
        },
        Ea = function (a) {
            setName(this, "ff2post");
            this.message = a + "-2036";
        },
        Ga = function (a, b) {
            b = b || L;
            if (2036 >= a.length)
                wc(a, b);
            else if (8192 >= a.length) {
                var c = b;
                if (0 <= window.navigator.userAgent.indexOf("Firefox") && ![].reduce)
                    throw new Ea(a.length);
                xc(a, c) || Fa(a, c);
            } else
                throw new Da(a.length);
        },
        wc = function (a, b) {
            var c = createSmallestImage(oc() + "/log/collect.php?" + a);
            c.onload = c.onerror = function () {
                c.onload = null;
                c.onerror = null;
                b();
            };
        },
        xc = function (a, b) {
            var c, d = window.XDomainRequest;
            if (d){
                c = new d();
                c.open("POST", oc() + "/log/collect.php");
            } else if (d = window.XMLHttpRequest)
                d = new d(),
                    "withCredentials" in d && (c = d, c.open("POST", oc() + "/log/collect.php", true), c.setRequestHeader("Content-Type", "text/plain"));
            if (c)
                return c.onreadystatechange = function () {
                    if(4 == c.readyState) {
                        b();
                        c = null;
                    }
                },
                    c.send(a), true;
        },
        Fa = function (a, b) {
            if (document.body) {
                a = encodeURIComponent(a);
                var frame = '';
                try {
                    frame = document.createElement('<iframe name="' + a + '"></iframe>');
                } catch (d) {
                    frame = document.createElement("iframe");
                    setName(frame, a);
                }
                frame.height = "0";
                frame.width = "0";
                frame.style.display = "none";
                frame.style.visibility = "hidden";
                var e = document.location;
                e = oc() + "/analytics_iframe.html#" + encodeURIComponent(e.protocol + "//" + e.host + "/favicon.ico");
                var g = function () {
                        frame.src = "";
                        if(frame.parentNode) frame.parentNode.removeChild(frame);
                    };
                ta(window, "beforeunload", g);
                var ca = false, l = 0, k = function () {
                    if (!ca) {
                        try {
                            if (9 < l || frame.contentWindow.location.host == document.location.host) {
                                ca = true;
                                g();
                                ua(window, "beforeunload", g);
                                b();
                                return;
                            }
                        } catch (a) {

                        }
                        l++;
                        setTimeout(k, 200);
                    }
                };
                ta(frame, "load", k);
                document.body.appendChild(frame);
                frame.src = e;
            } else
                fb(function () {
                    Fa(a, b);
                });
        };
    var Ha = function () {
        this.t = [];
    };
    Ha.prototype.add = function (a) {
        this.t.push(a);
    };
    Ha.prototype.D = function (a) {
        try {
            for (var b = 0; b < this.t.length; b++) {
                var c = a.get(this.t[b]);
                if(c && isFunction(c)) {
                    c.call(window, a);
                }
            }
        } catch (d) {

        }
        var f = a.get(Ia);
        if(f != L && isFunction(f)) {
            a.set(Ia, L, true);
            setTimeout(f, 10);
        }
    };
    function Ja(a) {
        if (100 != a.get(Ka) && La(getAttrString(a, Q)) % 1E4 >= 100 * getAttrInteger(a, Ka)) throw "abort";
    }
    function Ma(a) {
        if (xa(getAttrString(a, Na)))
            throw "abort";
    }
    function Oa() {
        var a = document.location.protocol;
        if ("http:" != a && "https:" != a)
            throw "abort";
    }
    function Pa(a) {
        a.set(Ac, getAttrInteger(a, Ac) + 1);
        var b = [];
        Qa.map(function (c, d) {
            if (d.p) {
                var e = a.get(c);
                //undefined !== e && e != d.defaultValue && ("boolean" == typeof e && (e *= 1), b.push(d.p + "=" + sa("" + e)));
                if(undefined !== e && e != d.defaultValue){
                    if("boolean" == typeof e){
                        e *= 1;
                        b.push(d.p + "=" + sa("" + e));
                    }
                }
            }
        });
        b.push("z=" + randomInteger());
        a.set(Ra, b.join("&"), true);
    }
    function Sa(a) {
        Ga(getAttrString(a, Ra), a.get(Ia));
        a.set(Ia, L, true);
    }
    function Hc(a) {
        var b = window.gaData;
        //b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar));
        if(b){
            if(b.expId) {
                a.set(Nc, b.expId);
            }
            if(b.expVar){
                a.set(Oc, b.expVar);
            }
        }
    }
    function cd() {
        if (window.navigator && "preview" == window.navigator.loadPurpose)
            throw "abort";
    }
    function Ta(a) {
        var b = getAttrInteger(a, Ua);
        if(500 <= b) J(15);
        var c = getAttrString(a, Va);
        if ("transaction" != c && "item" != c) {
            c = getAttrInteger(a, Wa);
            var d = (new Date()).getTime(),
                e = getAttrInteger(a, Xa);
            if(0 === e) a.set(Xa, d);
            e = Math.round(2 * (d - e) / 1E3);
            //0 < e && (c = Math.min(c + e, 20), a.set(Xa, d));
            if(0 < e){
                c = Math.min(c + e, 20);
                a.set(Xa, d);
            }
            if (0 >= c)
                throw "abort";
            a.set(Wa, --c);
        }
        a.set(Ua, ++b);
    }
    var Ya = function () {
            this.data = new N();
        },
        Qa = new N(),
        Za = [];
    Ya.prototype.get = function (a) {
        var b = $a(a), c = this.data.get(a);
        //b && undefined === c && (c = isFunction(b.defaultValue) ? b.defaultValue() : b.defaultValue);
        if(b && undefined === c){
            c = isFunction(b.defaultValue) ? b.defaultValue() : b.defaultValue;
        }
        return b && b.n ? b.n(this, a, c) : c;
    };
    var getAttrString = function (a, b) {
        var c = a.get(b);
        return undefined === c ? "" : "" + c;
    }, getAttrInteger = function (a, b) {
        var c = a.get(b);
        return undefined === c || "" === c ? 0 : 1 * c;
    };
    Ya.prototype.set = function (a, b, c) {
        if (a)
            if ("object" == typeof a)
                for (var d in a)
                    if(a.hasOwnProperty(d)){
                        ab(this, d, a[d], c);
                    }
            else
                ab(this, a, b, c);
    };
    var ab = function (a, b, c, d) {
        var e = $a(b);
        //e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d);
        if(e && e.o) {
            e.o(a, b, c, d);
        } else {
            a.data.set(b, c, d);
        }
    }, bb = function (a, b, c, d, e) {
        setName(this, a);
        this.p = b;
        this.n = d;
        this.o = e;
        this.defaultValue = c;
    }, $a = function (a) {
        var b = Qa.get(a);
        if (!b)
            for (var c = 0; c < Za.length; c++) {
                var d = Za[c],
                    e = d[0].exec(a);
                if (e) {
                    b = d[1](e);
                    Qa.set(b.name, b);
                    break;
                }
            }
        return b;
    }, yc = function (a) {
        var b;
        Qa.map(function (c, d) {
            if(d.p == a) b = d;
        });
        return b && b.name;
    }, S = function (a, b, c, d, e) {
        a = new bb(a, b, c, d, e);
        Qa.set(a.name, a);
        return a.name;
    }, cb = function (a, b) {
        Za.push([RegExp("^" + a + "$"), b]);
    }, T = function (a, b, c) {
        return S(a, b, c, undefined, db);
    }, db = function () {

    };
    var ld;
    if ((ld = isString(window.XXAnalyticsObject))) {
        var md = window.XXAnalyticsObject;
        ld = md ? md.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
    }
    var gb = ld || defaultAnalyticsName,
        Ba = false,
        hb = T("apiVersion", "v"),
        ib = T("clientVersion", "_v");
    S("anonymizeIp", "aip");
    var jb = S("adSenseId", "a"),
        Va = S("hitType", "t"),
        Ia = S("hitCallback"),
        Ra = S("hitPayload");
    S("nonInteraction", "ni");
    S("currencyCode", "cu");
    S("sessionControl", "sc", "");
    S("queueTime", "qt");
    var Ac = S("_s", "_s");
    S("description", "cd");
    var kb = S("location", "dl", ""),
        lb = S("referrer", "dr"),
        mb = S("page", "dp", ""),
        un = S("username", "un", "");
    S("hostname", "dh");
    var nb = S("language", "ul"),
        ob = S("encoding", "de");
    S("title", "dt", function () {
        return '';
    });
    cb("contentGroup([0-9]+)", function (a) {
        return new bb(a[0], "cg" + a[1]);
    });
    var pb = S("screenColors", "sd"),
        qb = S("screenResolution", "sr"),
        rb = S("viewportSize", "vp"),
        sb = S("javaEnabled", "je"),
        tb = S("flashVersion", "fl");
    S("campaignId", "ci");
    S("campaignName", "cn");
    S("campaignSource", "cs");
    S("campaignMedium", "cm");
    S("campaignKeyword", "ck");
    S("campaignContent", "cc");
    var ub = S("eventCategory", "ec"),
        xb = S("eventAction", "ea"),
        yb = S("eventLabel", "el"),
        zb = S("eventValue", "ev"),
        Bb = S("socialNetwork", "sn"),
        Cb = S("socialAction", "sa"),
        Db = S("socialTarget", "st"),
        Eb = S("l1", "plt"), // Page load time (milliseconds)
        Fb = S("l2", "pdt"), // Page download time (milliseconds)
        Gb = S("l3", "dns"), // The time cost to do DNS lookup (milliseconds)
        Hb = S("l4", "rrt"), // The time cost for redirect (milliseconds)
        Ib = S("l5", "srt"), // Server response time (milliseconds)
        Jb = S("l6", "tcp"), // TCP connect time (milliseconds)
        Kb = S("l7", "dit"), // Dom interactive time (milliseconds)
        Lb = S("l8", "clt"), // Content load time (milliseconds)
        Mb = S("timingCategory", "utc"),
        Nb = S("timingVar", "utv"),
        Ob = S("timingLabel", "utl"),
        Pb = S("timingValue", "utt");
    S("appName", "an");
    S("appVersion", "av", "");
    S("appId", "aid", "");
    S("appInstallerId", "aiid", "");
    S("exDescription", "exd");
    S("exFatal", "exf");
    var Nc = S("expId", "xid"),
        Oc = S("expVar", "xvar"),
        Rc = S("_utma", "_utma"),
        Sc = S("_utmz", "_utmz"),
        Tc = S("_utmht", "_utmht"),
        Ua = S("_hc", undefined, 0),
        Xa = S("_ti", undefined, 0),
        Wa = S("_to", undefined, 20);
    cb("dimension([0-9]+)", function (a) {
        return new bb(a[0], "cd" + a[1]);
    });
    cb("metric([0-9]+)", function (a) {
        return new bb(a[0], "cm" + a[1]);
    });
    S("linkerParam", undefined, undefined, Bc, db);
    S("usage", "_u", undefined, function () {
        return pa.M();
    }, db);
    S("forceSSL", undefined, undefined, function () {
        return Ba;
    }, function (a, b, c) {
        Ba = !!c;
    });
    var ed = S("joinId", "jid");
    cb("\\&(.*)", function (a) {
        var b = new bb(a[0], a[1]),
            c = yc(a[0].substring(1));
        if(c) {
            b.n = function (a) {
                return a.get(c);
            };
            b.o = function (a, b, g, ca) {
                a.set(c, g, ca);
            };
            b.p = undefined;
        }
        return b;
    });
    var Qb = T("oot"),
        dd = S("previewTask"),
        Rb = S("checkProtocolTask"),
        Sb = S("checkStorageTask"),
        Uc = S("historyImportTask"),
        Tb = S("samplerTask"),
        Vb = T("rateLimiterTask"),
        Wb = S("buildHitTask"),
        Xb = S("sendHitTask"),
        Vc = S("ceTask"),
        V = T("name"),
        Q = T("clientId", "cid"),
        Na = T("trackingId", "tid"),
        U = T("cookieName", undefined, "_ga"),
        W = T("cookieDomain"),
        Yb = T("cookiePath", undefined, "/"),
        Zb = T("cookieExpires", undefined, 63072E3),
        $b = T("legacyCookieDomain"),
        Wc = T("legacyHistoryImport", undefined, true),
        ac = T("storage", undefined, "cookie"),
        bc = T("allowLinker", undefined, false),
        cc = T("allowAnchor", undefined, true),
        Ka = T("sampleRate", "sf", 100),
        dc = T("siteSpeedSampleRate", undefined, 1),
        ec = T("alwaysSendReferrer", undefined, false);
    function Cc() {
        var a = $;
        X("create", a, a.create, 3);
        X("getByName", a, a.j, 5);
        X("getAll", a, a.K, 6); a = pc.prototype;
        X("get", a, a.get, 7);
        X("set", a, a.set, 4);
        X("send", a, a.send, 2); a = Ya.prototype;
        X("get", a, a.get);
        X("set", a, a.set);
        (window.gaplugins = window.gaplugins || {}).Linker = Dc;
        a = Dc.prototype; 
        Z.C("linker", Dc);
        X("decorate", a, a.Q, 20);
        X("autoLink", a, a.S, 25);
        Z.C("displayfeatures", fd);
    }
    function X(a, b, c, d) {
        b[a] = function () {
            try {
                return d && J(d), c.apply(this, arguments);
            } catch (b) {
                var g = b && b.name;
                if (!(1 <= 100 * Math.random() || xa("?"))) {
                    var ca = ["t=error", "_e=exc", "_v=j16", "sr=1"];
                    //a && ca.push("_f=" + a);
                    if(a) ca.push("_f=" + a);
                    //g && ca.push("_m=" + sa(g.substring(0, 100)));
                    if(g) ca.push("_m=" + sa(g.substring(0, 100)));
                    ca.push("aip=1");
                    ca.push("z=" + randomInteger());
                    Ga(ca.join("&"));
                }
                throw b;
            }
        };
    }
    function fc() {
        var a, b, c;
        if ((c = (c = window.navigator) ? c.plugins : null) && c.length)
            for (var d = 0; d < c.length && !b; d++) {
                var e = c[d]; 
                if(-1 < e.name.indexOf("Shockwave Flash")) {
                    b = e.description;
                }
            }
        if (!b)
            try {
                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                b = a.GetVariable("$version");
            } catch (g) {

            }
        if (!b)
            try {
                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); 
                b = "WIN 6,0,21,0";
                a.AllowScriptAccess = "always"; 
                b = a.GetVariable("$version");
            } catch (ca) {

            }
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            b = a.GetVariable("$version");
        } catch (l) { 

        } 
        //b && (a = b.match(/[\d]+/g)) && 3 <= a.length && (b = a[0] + "." + a[1] + " r" + a[2]);
        if(b) {
            a = b.match(/[\d]+/g);
            if(a && 3 <= a.length) {
                b = a[0] + "." + a[1] + " r" + a[2];
            }
        } 
        return b || undefined;
    }
    var gc = function (a, b) {
        var c = Math.min(getAttrInteger(a, dc), 100);
        if (!(La(getAttrString(a, Q)) % 100 >= c) && (c = {}, Ec(c) || Fc(c))) {
            var d = c[Eb]; 
            undefined === d || Infinity == d || isNaN(d) || (0 < d ? (Y(c, Gb), Y(c, Jb), Y(c, Ib), Y(c, Fb), Y(c, Hb), Y(c, Kb), Y(c, Lb), b(c)) : ta(window, "load", function () {
                gc(a, b);
            }, false));
        }
    }, Ec = function (a) {
        var b = window.performance || window.webkitPerformance;
        if(b) {
            b = b.timing;
        } else {
            return false;
        }
        var c = b.navigationStart;
        if (0 === c) return false;
        a[Eb] = b.loadEventStart - c;
        a[Gb] = b.domainLookupEnd - b.domainLookupStart;
        a[Jb] = b.connectEnd - b.connectStart;
        a[Ib] = b.responseStart - b.requestStart;
        a[Fb] = b.responseEnd - b.responseStart;
        a[Hb] = b.fetchStart - c;
        a[Kb] = b.domInteractive - c;
        a[Lb] = b.domContentLoadedEventStart - c;
        return true;
    }, Fc = function (a) {
        if (window.top != window)
            return false;
        var b = window.external, c = b && b.onloadT;
        if(b && !b.isValidLoadTime) {
            c = undefined;
        }
        if(2147483648 < c) {
            c = undefined;
        }
        if(0 < c) {
            b.setPageReadyTime();
        }
        if (undefined === c)
            return false;
        a[Eb] = c;
        return true;
    }, Y = function (a, b) {
        var c = a[b];
        if (isNaN(c) || Infinity == c || 0 > c) a[b] = undefined;
    };
    var hc = false, mc = function (a) {
        if ("cookie" == getAttrString(a, ac)) {
            var b = getAttrString(a, U), c = nd(a), d = kc(getAttrString(a, Yb)), e = removeFirstDot(getAttrString(a, W)), g = 1E3 * getAttrInteger(a, Zb), ca = getAttrString(a, Na);
            if ("auto" != e){
                if(zc(b, c, d, e, ca, g)) {
                    hc = true;
                }
            } else {
                J(32);
                var l;
                t: {
                    c = []; e = currentHostname().split(".");
                    if (4 == e.length && (l = e[e.length - 1], parseInt(l, 10) == l)) {
                        l = ["none"];
                        break t;
                    }
                    for (l = e.length - 2; 0 <= l; l--)
                        c.push(e.slice(l).join("."));
                    c.push("none");
                    l = c;
                }
                for (var k = 0; k < l.length; k++)
                    if (e = l[k], a.data.set(W, e), c = nd(a), zc(b, c, d, e, ca, g)) {
                        hc = true;
                        return;
                    }
                a.data.set(W, "auto");
            }
        }
    },
        nc = function (a) {
            if ("cookie" == getAttrString(a, ac) && !hc && (mc(a), !hc))
                throw "abort";
        },
        Yc = function (a) {
            if (a.get(Wc)) {
                var b = getAttrString(a, W), c = getAttrString(a, $b) || currentHostname(), d = Xc("__utma", c, b);
                //d && (J(19), a.set(Tc, (new Date()).getTime(), true), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d.hash == b.hash && a.set(Sc, b.R));
                if(d){
                    J(19);
                    a.set(Tc, (new Date()).getTime(), true);
                    a.set(Rc, d.R);
                    if((b = Xc("__utmz", c, b)) && d.hash == b.hash) {
                        a.set(Sc, b.R);
                    }
                }
            }
        },
        nd = function (a) {
            var b = ka(getAttrString(a, Q)), c = dotSplitLen(getAttrString(a, W));
            a = jc(getAttrString(a, Yb));
            if(1 < a) c += "-" + a;
            return ["GA1", c, b].join(".");
        },
        Gc = function (a, b, c) {
            for (var d = [], e = [], g, ca = 0; ca < a.length; ca++) {
                var l = a[ca];
                if (l.r[c] == b)
                    d.push(l);
                else
                    if(undefined !== g) {
                        if(l.r[c] < g) {
                            e = [l];
                            g = l.r[c];
                        } else {
                            if(l.r[c] == g) {
                                e.push(l);
                            }
                        }
                    }
            }
            return 0 < d.length ? d : e;
        },
        removeFirstDot = function (str) {
            return 0 === str.indexOf(".") ? str.substr(1) : str;
        },
        dotSplitLen = function (str) {
            return removeFirstDot(str).split(".").length;
        },
        kc = function (a) {
            if (!a)
                return "/";
            if(1 < a.length && a.lastIndexOf("/") == a.length - 1) {
                a = a.substr(0, a.length - 1);
            }
            if(0 !== a.indexOf("/")) {
                a = "/" + a;
            }
            return a;
        },
        jc = function (a) {
            a = kc(a);
            return "/" == a ? 1 : a.split("/").length;
        };
    function Xc(a, b, c) {
        if("none" == b) {
            b = "";
        }
        var d = [], e = ya(a);
        a = "__utma" == a ? 6 : 2;
        for (var g = 0; g < e.length; g++) {
            var ca = ("" + e[g]).split(".");
            if(ca.length >= a) {
                d.push({ hash: ca[0], R: e[g], O: ca });
            }
        }
        return 0 === d.length ? undefined : 1 == d.length ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0];
    }
    function Zc(a, b) {
        var c, d;
        null === a ? c = d = 1 : (c = La(a), d = La(0 === a.indexOf(".") ? a.substring(1) : "." + a));
        for (var e = 0; e < b.length; e++)
            if (b[e].hash == c || b[e].hash == d)
                return b[e];
    }
    var hostReg = RegExp(/^https?:\/\/([^\/:]+)/),
        pd = /(.*)([?&#])(?:_ga=[^&]*)(?:&?)(.*)/;
    function Bc(a) {
        a = a.get(Q);
        var b = Ic(a, 0);
        return "_ga=1." + sa(b + "." + a);
    }
    function Ic(a, b) {
        for (var c = new Date(), d = window.navigator, e = d.plugins || [], c = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < e.length; ++d)
            c.push(e[d].description);
        return La(c.join("."));
    }
    var Dc = function (a) {
        this.target = a; 
        this.T = false;
    };
    Dc.prototype.Q = function (a, b) {
        if (a.tagName) {
            if ("a" == a.tagName.toLowerCase()) {
                if(a.href) setLink(a, qd(this, a.href, b));
                return;
            }
            if ("form" == a.tagName.toLowerCase())
                return rd(this, a);
        }
        if ("string" == typeof a)
            return qd(this, a, b);
    };
    var qd = function (a, b, c) {
        var d = pd.exec(b);
        if(d && 3 <= d.length) {
            b = d[1] + (d[3] ? d[2] + d[3] : "");
        }
        a = a.target.get("linkerParam");
        var e = b.indexOf("?");
        d = b.indexOf("#");
        //c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b.substring(0, d) + c + a + b.substring(d));
        if(c) {
            b += (-1 == d ? "#" : "&") + a;
        } else {
            c = (-1 == e ? "?" : "&");
            b = -1 == d ? b + (c + a) : b.substring(0, d) + c + a + b.substring(d);
        }
        return b;
    },
        rd = function (a, b) {
            if (b && b.action) {
                var c = a.target.get("linkerParam").split("=")[1];
                if ("get" == b.method.toLowerCase()) {
                    for (var d = b.childNodes || [], e = 0; e < d.length; e++)
                        if ("_ga" == d[e].name) {
                            d[e].setAttribute("value", c);
                            return;
                        }
                    d = document.createElement("input");
                    d.setAttribute("type", "hidden");
                    d.setAttribute("name", "_ga");
                    d.setAttribute("value", c);
                    b.appendChild(d);
                } else
                    if("post" == b.method.toLowerCase()) b.action = qd(a, b.action);
            }
        };
    Dc.prototype.S = function (a, b, c) {
        function d(c) {
            try {
                c = c || window.event;
                var d;
                t: {
                    var g = c.target || c.srcElement;
                    for (c = 100; g && 0 < c;) {
                        if (g.href && g.nodeName.match(/^a(?:rea)?$/i)) {
                            d = g;
                            break t;
                        }
                        g = g.parentNode;
                        c--;
                    }
                    d = {};
                }
                //("http:" == d.protocol || "https:" == d.protocol) && sd(a, d.hostname || "") && d.href && setLink(d, qd(e, d.href, b));
                if("http:" == d.protocol || "https:" == d.protocol){
                    if(sd(a, d.hostname || "")){
                        if(d.href){
                            setLink(d, qd(e, d.href, b));
                        }
                    }
                }
            } catch (w) {
                J(26);
            }
        }
        var e = this; 
        if(!this.T) {
            this.T = true;
            ta(document, "mousedown", d, false);
            ta(document, "touchstart", d, false);
            ta(document, "keyup", d, false);
        }
        if (c) {
            c = function (c) {
                c = c || window.event;
                if ((c = c.target || c.srcElement) && c.action) {
                    var b = c.action.match(hostReg);
                    //b && sd(a, b[1]) && rd(e, c);
                    if(b){
                        if(sd(a, b[1])){
                            rd(e, c);
                        }
                    }
                }
            };
            for (var g = 0; g < document.forms.length; g++)
                ta(document.forms[g], "submit", c);
        }
    };
    function sd(a, b) {
        if (b == document.location.hostname)
            return false;
        for (var c = 0; c < a.length; c++)
            if (0 <= b.indexOf(a[c]))
                return true;
        return false;
    }
    var gd = function (a) {
        return a.get(V) && "t0" != a.get(V) ? "_dc_" + ka(a.get(V)) : "_dc";
    },
        hd = function (a) {
            if (a.get(ed)) {
                var b = new N(), 
                c = function (c) {
                    b.set($a(c).p, a.get(c));
                };
                c(hb);
                c(ib);
                c(Na);
                c(Q);
                c(ed);
                var d = getAttrInteger(a, "forceSSL") || "https:" == document.location.protocol ? "https:" : "http:";
                d = d + "//" + __serverHost + "/log/collect.php?t=dc&aip=1&";
                b.map(function (a, c) {
                    d += sa(a) + "=" + sa("" + c) + "&";
                });
                d += "z=" + randomInteger();
                createSmallestImage(d);
                a.set(ed, "", true);
            }
        },
        fd = function (a, b) {
            J(29);
            var c = a.b;
            b = b || {};
            var d;
            d = b.cookieName ? ka(b.cookieName) : gd(c);
            var e = c.get(Wb);
            c.set(Wb, function (a) {
                //a.get(ed) || (-1 != document.cookie.indexOf(d + "=1") ? a.set(ed, "", true) : zc(d, "1", a.get(Yb), a.get(W), a.get(Na), 6E5) ? a.set(ed, "" + randomInteger(), true) : J(30));
                if(!a.get(ed)){
                    if(-1 != document.cookie.indexOf(d + "=1")) {
                        a.set(ed, "", true);
                    } else {
                        if(zc(d, "1", a.get(Yb), a.get(W), a.get(Na), 6E5)) {
                            a.set(ed, "" + randomInteger(), true);
                        } else {
                            J(30);
                        }
                    }
                }
                return e(a);
            });
            var g = c.get(Xb);
            c.set(Xb, function (a) {
                var c = g(a);
                hd(a);
                return c;
            });
        };
    function $c() {
        if (!(1 <= randomInteger() % 1E4) && (J(33), window.top != window)) {
            J(34);
            try {
                if(undefined !== window.top.location.href) {
                    J(35);
                }
            } catch (a) {

            }
        }
        var b = window.gaGlobal = window.gaGlobal || {};
        //return b.hid = b.hid || randomInteger();
        if(b.hid){
            return b.hid;
        } else {
            return randomInteger();
        }
    }
    var ad,
        bd = function (a, b, c) {
            if (!ad) {
                var d;
                d = document.location.hash;
                var e = window.name, g = /^#?gaso=([^&]*)/;
                if (e = (d = (d = d && d.match(g) || e && e.match(g)) ? d[1] : ya("GASO")[0] || "") && d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))
                    zc("GASO", "" + d, c, b, a, 0),
                        window._udo || (window._udo = b),
                        window._utcp || (window._utcp = c),
                        a = e[1],
                        createScriptNode("https://" + __serverHost + "/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + randomInteger(), "_gasojs");
                ad = true;
            }
        };
    var pc = function (a) {
        function b(a, c) {
            d.b.data.set(a, c);
        }
        function c(a, c) {
            b(a, c);
            d.filters.add(a);
        }
        var d = this;
        this.b = new Ya();
        this.filters = new Ha();
        b(V, a[V]);
        b(Na, a[Na]);
        b(U, a[U]);
        b(W, a[W] || currentHostname());
        b(Yb, a[Yb]);
        b(Zb, a[Zb]);
        b($b, a[$b]);
        b(Wc, a[Wc]);
        b(bc, a[bc]);
        b(cc, a[cc]);
        b(Ka, a[Ka]);
        b(dc, a[dc]);
        b(ec, a[ec]);
        b(ac, a[ac]);
        b(hb, 1);
        b(ib, "j16");
        c(Qb, Ma);
        c(dd, cd);
        c(Rb, Oa);
        c(Sb, nc);
        c(Uc, Yc);
        c(Tb, Ja);
        c(Vb, Ta);
        c(Vc, Hc);
        c(Wb, Pa);
        c(Xb, Sa);
        Jc(this.b, a[Q]);
        Kc(this.b);
        this.b.set(jb, $c());
        bd(this.b.get(Na), this.b.get(W), this.b.get(Yb));
    },
        Jc = function (a, b) {
            if ("cookie" == getAttrString(a, ac)) {
                hc = false; var c; i: {
                    var d = ya(getAttrString(a, U));
                    if (d && !(1 > d.length)) {
                        c = [];
                        for (var e = 0; e < d.length; e++) {
                            var g;
                            g = d[e].split(".");
                            var ca = g.shift();
                            ("GA1" == ca || "1" == ca) && 1 < g.length ? (ca = g.shift().split("-"), 1 == ca.length && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {
                                r: ca,
                                s: g.join(".")
                            }) : g = undefined;
                            if(g) c.push(g);
                        }
                        if (1 == c.length) {
                            J(13);
                            c = c[0].s;
                            break i;
                        }
                        if (0 === c.length)
                            J(12);
                        else {
                            J(14);
                            d = dotSplitLen(getAttrString(a, W));
                            c = Gc(c, d, 0);
                            if (1 == c.length) {
                                c = c[0].s;
                                break i;
                            }
                            d = jc(getAttrString(a, Yb));
                            c = Gc(c, d, 1);
                            c = c[0] && c[0].s;
                            break i;
                        }
                    } 
                    c = undefined;
                }
                c || (c = getAttrString(a, W), d = getAttrString(a, $b) || currentHostname(), c = Xc("__utma", d, c), (c = undefined === c ? undefined : c.O[1] + "." + c.O[2]) && J(10));
                if(c) {
                    a.data.set(Q, c);
                    hc = true;
                }
            }
            c = a.get(cc);
            // if (e = (c = document.location[c ? "href" : "search"].match("(?:&|#|\\?)" + sa("_ga").replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == c.length ? c[1] : "")
            //     a.get(bc) ? (c = e.indexOf("."), -1 == c ? J(22) : (d = e.substring(c + 1), "1" != e.substring(0, c) ? J(22) : (c = d.indexOf("."), -1 == c ? J(22) : (e = d.substring(0, c), c = d.substring(c + 1), e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2) ? J(23) : (J(11), a.data.set(Q, c)))))) : J(21);
            var e = (c = document.location[c ? "href" : "search"].match("(?:&|#|\\?)" + sa("_ga").replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)"));
            if (e && 2 == c.length ? c[1] : ""){
                if(a.get(bc)) {
                    c = e.indexOf(".");
                    if(-1 == c) {
                        J(22);
                    } else {
                        var d = e.substring(c + 1);
                        if("1" != e.substring(0, c)) {
                            J(22);
                        } else {
                            c = d.indexOf(".");
                            if(-1 == c) {
                                J(22);
                            } else {
                                e = d.substring(0, c);
                                c = d.substring(c + 1);
                                if(e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2)) {
                                    J(23);
                                } else {
                                    J(11);
                                    a.data.set(Q, c);
                                }
                            }
                        }
                    }
                } else {
                    J(21);
                }
            }

            if(b) J(9), a.data.set(Q, sa(b));
            if (!a.get(Q))
                if (c = (c = window.gaGlobal && window.gaGlobal.vid) && -1 != c.search(/^(?:utma\.)?\d+\.\d+$/) ?
                    c : undefined) J(17), a.data.set(Q, c);
                else {
                    J(8);
                    c = window.navigator;
                    c = c.appName + c.version + c.platform + c.userAgent + (document.cookie ? document.cookie : "") + (document.referrer ? document.referrer : "");
                    d = c.length;
                    for (e = window.history.length; 0 < e;)
                        c += e-- ^ d++;
                    a.data.set(Q, [randomInteger() ^ La(c) & 2147483647, Math.round((new Date())[getTime]() / 1E3)].join("."));
                }
            mc(a);
        },
        Kc = function (a) {
            var b = window.navigator, c = window.screen, d = document.location;
            a.set(lb, va(a.get(ec)));
            a.set(un, ya('USER_ID')[0]);
            if (d) {
                var e = d.pathname || "";
                if("/" != e.charAt(0)) {
                    J(31);
                    e = "/" + e;
                }
                a.set(kb, d.protocol + "//" + d.hostname + e + d.search);
            }
            c && a.set(qb, c.width + "x" + c.height);
            c && a.set(pb, c.colorDepth + "-bit");
            // var c = document.documentElement,
            //     g = (e = document.body) && e.clientWidth && e.clientHeight, ca = [];
            c = document.documentElement;
            var g = (e = document.body) && e.clientWidth && e.clientHeight;
            var ca = [];
            c && c.clientWidth && c.clientHeight && ("CSS1Compat" === document.compatMode || !g) ? ca = [c.clientWidth, c.clientHeight] : g && (ca = [e.clientWidth, e.clientHeight]);
            c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca.join("x");
            a.set(rb, c);
            a.set(tb, fc());
            a.set(ob, document.characterSet || document.charset);
            a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || false);
            a.set(nb, (b && (b.language || b.browserLanguage) || "").toLowerCase());
            if (d && a.get(cc) && (b = document.location.hash)) {
                b = b.substring(1);
                b = b.split("&");
                d = [];
                // for (c = 0; c < b.length; ++c)
                //     0 != b[c].indexOf("utm_id") && 0 != b[c].indexOf("utm_campaign") && 0 != b[c].indexOf("utm_source") && 0 != b[c].indexOf("utm_medium") &&
                //         0 != b[c].indexOf("utm_term") && 0 != b[c].indexOf("utm_content") || d.push(b[c]);
                for (var i = 0; i < b.length; ++i){
                    var str = b[i];
                    if(0 === str.indexOf("utm_id") || 0 === str.indexOf("utm_campaign") || 0 === str.indexOf("utm_source") || 0 === str.indexOf("utm_medium") ||
                    0 === str.indexOf("utm_term") || 0 === str.indexOf("utm_content")) {
                        d.push(str);
                    }
                }
                //0 < d.length && (b = "#" + d.join("&"), a.set(kb, a.get(kb) + b))
                if(0 < d.length){
                    b = "#" + d.join("&");
                    a.set(kb, a.get(kb) + b);
                }
            }
        };
    pc.prototype.get = function (a) {
        return this.b.get(a);
    };
    pc.prototype.set = function (a, b) {
        this.b.set(a, b);
    };
    var qc = {
        pageview: [mb], event: [ub, xb, yb, zb], social: [Bb, Cb, Db], timing: [Mb, Nb, Pb, Ob]
    };
    pc.prototype.send = function (a) {
        if (1 <= arguments.length) {
            var b, c;
            //"string" === typeof arguments[0] ? (b = arguments[0], c = [].slice.call(arguments, 1)) : (b = arguments[0] && arguments[0][Va], c = arguments);
            if("string" === typeof arguments[0]) {
                b = arguments[0];
                c = [].slice.call(arguments, 1);
            } else {
                b = arguments[0] && arguments[0][Va];
                c = arguments;
            }
            //b && (c = wa(qc[b] || [], c), c[Va] = b, this.b.set(c, undefined, true), this.filters.D(this.b), "pageview" == b && Lc(this), this.b.data.m = {})
            if(b) {
                c = wa(qc[b] || [], c);
                c[Va] = b;
                this.b.set(c, undefined, true);
                this.filters.D(this.b);
                if("pageview" == b) Lc(this);
                this.b.data.m = {};
            }
        }
    };
    var Lc = function (a) {
        if(!a.I) {
            a.I = true;
            gc(a.b, function (b) {
                a.send("timing", b);
            });
        }
    };
    var rc = function (a) {
        if ("prerender" == document.webkitVisibilityState)
            return false;
        a();
        return true;
    },
        Mc = function (a) {
            if (!rc(a)) {
                J(16);
                var b = false, c = function () {
                    if(!b && rc(a)) {
                        b = true;
                        ua(document, "webkitvisibilitychange", c);
                    }
                };
                ta(document, "webkitvisibilitychange", c);
            }
        };
    var td = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/;
    var sc = function (a) {
        if (isFunction(a[0]))
            this.u = a[0];
        else {
            var b = td.exec(a[0]);
            if(null !== b && 4 == b.length) {
                this.c = b[1] || "t0";
                this.e = b[2] || "";
                this.d = b[3];
                this.a = [].slice.call(a, 1);
                if(!this.e) {
                    this.A = "create" == this.d;
                    this.i = "require" == this.d;
                    this.g = "provide" == this.d;
                }
            }
            b = a[1];
            a = a[2];
            if (!this.d)
                throw "abort";
            if (this.i && (!isString(b) || "" === b))
                throw "abort";
            if (this.g && (!isString(b) || "" === b || !isFunction(a)))
                throw "abort";
            if (ud(this.c) || ud(this.e))
                throw "abort";
            if (this.g && "t0" != this.c)
                throw "abort";
        }
    };
    function ud(a) {
        return 0 <= a.indexOf(".") || 0 <= a.indexOf(":");
    }
    var Z = {
        F: "/plugins/ua/"
    };
    Z.k = new N();
    Z.f = [];
    Z.B = function (a, b, c) {
        var d = Z.k.get(a);
        if (!isFunction(d))
            return false;
        b.plugins_ = b.plugins_ || new N();
        b.plugins_.set(a, new d(b, c || {}));
        return true;
    };
    Z.C = function (a, b) {
        Z.k.set(a, b);
    };
    Z.D = function (a) {
        var b = Z.J.apply(Z, arguments);
        b = Z.f.concat(b);
        for (Z.f = []; 0 < b.length && !Z.v(b[0]) && !(b.shift(), 0 < Z.f.length););
        Z.f = Z.f.concat(b);
    };
    Z.J = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++)
            try {
                var d = new sc(arguments[c]);
                if (d.g)
                    Z.C(d.a[0], d.a[1]);
                else {
                    if (d.i) {
                        var e = d.a[1];
                        if (!isFunction(Z.k.get(d.a[0])) && !d.H && e) {
                            var g = e + "", e = g && 0 <= g.indexOf("/") ? g : "//" + __serverHost + Z.F + g;
                            var ca = tc("" + e), l;
                            var k = ca.protocol, w = document.location.protocol;
                            l = "https:" == k || k == w ? true : "http:" != k ? false : "http:" == w;
                            var s;
                            if ((s = l)) {
                                var g = ca, D = tc(document.location.href);
                                if (g.G || 0 <= g.url.indexOf("?") || 0 <= g.path.indexOf("://"))
                                    s = false;
                                else if (g.host == D.host && g.port == D.port)
                                    s = true;
                                else {
                                    var vb = "http:" == g.protocol ? 80 : 443;
                                    s = __serverHost == g.host && (g.port || vb) == vb && 0 === g.path.indexOf("/plugins/") ? true : false;
                                }
                            }
                            if(s) d.H = !!createScriptNode(ca.url);
                        }
                    }
                    b.push(d);
                }
            } catch (wb) {

            }
        return b;
    };
    Z.v = function (a) {
        try {
            if (a.u)
                a.u.call(window, $.j("t0"));
            else {
                var b = a.c == gb ? $ : $.j(a.c);
                if (a.A)
                    if("t0" == a.c) $.create.apply($, a.a);
                else if (b)
                    if (a.i)
                        if (Z.B(a.a[0], b, a.a[2]))
                            b.get(V);
                        else
                            return true;
                    else {
                        if(a.e) b = b.plugins_.get(a.e);
                        b[a.d].apply(b, a.a);
                    }
            }
        } catch (c) {

        }
    };
    function tc(a) {
        function b(a) {
            var c = (a.hostname || "").split(":")[0].toLowerCase(), b = (a.protocol || "").toLowerCase(), b = 1 * a.port || ("http:" == b ? 80 : "https:" == b ? 443 : "");
            a = a.pathname || "";
            if(0 !== a.indexOf("/")) {
                a = "/" + a;
            }
            return [c, "" + b, a];
        }
        var c = document.createElement("a");
        setLink(c, document.location.href);
        var d = (c.protocol || "").toLowerCase(), e = b(c), g = c.search || "", ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
        //0 === a.indexOf("//") ? a = d + a : 0 === a.indexOf("/") ? a = ca + a : a && 0 !== a.indexOf("?") ? 0 > a.split("/")[0].indexOf(":") && (a = ca + e[2].substring(0, e[2].lastIndexOf("/")) + "/" + a) : a = ca + e[2] + (a || g);
        if(0 === a.indexOf("//")) {
            a = d + a;
        } else {
            if(0 === a.indexOf("/")) {
                a = ca + a;
            } else {
                if(a && 0 !== a.indexOf("?")) {
                    if(0 > a.split("/")[0].indexOf(":")) {
                        a = ca + e[2].substring(0, e[2].lastIndexOf("/")) + "/" + a;
                    }
                } else {
                    a = ca + e[2] + (a || g);
                }
            }
        }
        setLink(c, a);
        d = b(c);
        return {
            protocol: (c.protocol || "").toLowerCase(), host: d[0], port: d[1],
            path: d[2], G: c.search || "", url: a || ""
        };
    }
    var $ = function (a) {
        J(1);
        Z.D.apply(Z, [arguments]);
    };
    $.h = {};
    $.P = [];
    $.L = 0;
    $.answer = 42;
    var uc = [Na, W, V];
    $.create = function (a) {
        var b = wa(uc, [].slice.call(arguments));
        if(!b[V]) {
            b[V] = "t0";
        }
        var c = "" + b[V];
        if ($.h[c])
            return $.h[c];
        b = new pc(b);
        $.h[c] = b;
        $.P.push(b);
        return b;
    };
    $.j = function (a) {
        return $.h[a];
    };
    $.K = function () {
        return $.P.slice(0);
    };
    $.N = function () {
        var a = window[gb];
        if (!a || 42 != a.answer) {
            $.L = a && a.l;
            $.loaded = true;
            window[gb] = $;
            Cc();
            var b = a && a.q;
            if("[object Array]" == Object.prototype.toString.call(Object(b))) {
                Mc(function () {
                    Z.D.apply($, b);
                });
            }
        }
    };
    $.N();
    function La(a) {
        var b = 1, c = 0, d;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--){
                c = a.charCodeAt(d);
                b = (b << 6 & 268435455) + c + (c << 14);
                c = b & 266338304;
                b = 0 !== c ? b ^ c >> 21 : b;
            }
        return b;
    }
})(window);