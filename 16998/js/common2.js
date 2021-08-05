define("js", ["cookie", "list.regexp", "jquery.countdown", "jquery.suggestion", "./mod/suggestion", "./mod/login.drop", "./mod/backtop", "placeholder"], function(a) {
    a("./mod/login"), a("../../plugins/jquery.suggestion"), a("./mod/suggestion"), PL.login_drop = a("./mod/login.drop"), PL.login_drop(), PL_run || PL.preLogin("PL.login_drop"), a("./mod/backtop"), a("../../public/placeholder"), function() {
        var a = $(".header"), b = a.find(".mod-mhead"), c = b.find(".icon-menu"), d = b.find(".sidebar"), e = d.find(".mask");
        c.click(function() {
            PL.MID ? d.addClass("sidebar-show") : TU.login()
        }), e.click(function(a) {
            a.stopPropagation(), d.removeClass("sidebar-show")
        })
    }(), function() {
        var a = $(document);
        a.on("click", ".J_blocklink", function() {
            var a = $(this).find("a").attr("href"), b = isMobi ? "_self" : "_blank";
            window.open(a, b)
        }), a.on("click", ".J_blocklink a", function(a) {
            a.preventDefault()
        })
    }()
}), define("www/public/mod/login", ["public/cookie"], function(a) {
    function b() {
        return window.getSelection ? window.getSelection().toString() : document.getSelection ? document.getSelection() : document.selection ? document.selection.createRange().text : void 0
    }
    if ("undefined" == typeof TU && (TU = {myUrl: "http://my.liantu.cn"}), TU.login = TU.logout = function() {
    }, PL) {
        if (PL.MID)
            return TU.logout = function() {
                $.get("/logout", function() {
                    PL.logout("location.reload")
                })
            }, !1;
        var c = "", d = location.hash;
        if (d) {
            var e = d.substr(1), f = e.split("=");
            "redirect_url" == f[0] && f[1].indexOf(TU.domain) > -1 && (c = decodeURIComponent(f[1]))
        }
        PL.callback = function() {
            PL.MID && (c ? location.href = c : location.reload())
        }, PL.preLogin("PL.callback")
    }
    $.get(TU.myUrl + "/i/showcaptcha", function(d) {
        var e = d.status, f = $("body"), g = f.find(".header"), h = $('<div class="mod-login"></div>').appendTo(g).hide(), i = $('<div class="mask"></div>').appendTo(h), j = $('<div class="dialog"></div>').appendTo(h), k = $('<div class="panel login"></div>').appendTo(j), l = $('<div class="panel reg"></div>').appendTo(j), m = "login", n = 0, o = !1, p = a("public/cookie"), q = a("public/list.regexp"), r = {}, s = {}, t = {};
        a("plugins/jquery.countdown");
        var u = '            <p>                <span class="icon icon-captcha"><input class="input-text" type="number" name="captcha" placeholder="验证码" autocomplete="off" maxlength="4"></span>                <a class="captcha" href="javascript:;">                    <img src="" width="100" height="40" alt="更换验证码" title="更换验证码">                </a>            </p>        ';
        k.html('            <div class="hd"><span>登录</span><a class="close" href="javascript:;"></a></div>            <div class="bd">                <form method="post" action="" autocomplete="off">                    <p class="error"></p>                    <p><span class="icon icon-phone"><input class="input-text" type="number" name="username" placeholder="手机号码" autocomplete="off" maxlength="11"></span></p>                    <p><span class="icon icon-key"><input type="password" class="input-text" name="password" placeholder="密码" autocomplete="off"></span></p>                    ' + (e ? u : "") + '<p class="auto">                        <a class="forget" href="' + TU.myUrl + '/member/passwd/phone/" target="_blank">忘记密码</a>                        <label class="checked"><input type="checkbox" name="remember" value="1" checked="checked">记住密码</label>                    </p>                    <p class="btn"><input class="input-submit" type="submit" value="登 录"></p>                    <p class="separate"><span class="line"></span><span class="or">或</span></p>                    <p class="link"><a class="switch" href="#reg">立即注册</a></p>                </form>            </div>        '), l.html('            <div class="hd"><span>快速注册</span><a class="close" href="javascript:;"></a></div>            <div class="bd">                <form method="post" action="" autocomplete="off">                    <p class="error"></p>                    <p><span class="icon icon-phone"><input class="input-text" type="number" name="username" placeholder="常用的手机号码" autocomplete="off" maxlength="11"></p>                    <p>                        <span class="icon icon-captcha"><input class="input-text" type="text" name="captcha" placeholder="验证码" autocomplete="off" maxlength="4"></span>                        <a class="captcha" href="javascript:;">                            <img src="" width="100" height="40" alt="更换验证码" title="更换验证码">                        </a>                    </p>                    <p>                        <span class="icon icon-captcha"><input class="input-text" type="number" name="code" placeholder="输入接收到的验证码" autocomplete="off" maxlength="4"></span>                        <a class="getcode" href="javascript:;">发送验证码</a>                    </p>                    <p><span class="icon icon-key"><input type="password" class="input-text" name="password" placeholder="设置密码" autocomplete="off"></span></p>                    <p class="btn"><input class="input-submit" type="submit" value="立即注册"></p>                    <p class="separate"><span class="line"></span><span class="or">或</span></p>                    <p class="link"><a class="switch" href="#login">登录</a></p>                </form>            </div>        ');
        var v, w, x, y, z, A, B, z = j.find(".captcha img"), C = j.find(".getcode"), D = function(a) {
            m = a || "login", "login" == m ? (k.show(), l.hide(), v = k.find("form")) : (k.hide(), l.show(), v = l.find("form")), w = v.find('input[name="username"]'), x = v.find('input[name="password"]'), y = v.find('input[name="captcha"]'), A = v.find('input[name="code"]'), B = v.find(".error"), s = {}, t = "login" == m ? {20201: y, 20202: y, 23202: w} : {30100: w, 30103: w, 20201: A, 21101: A, 21102: A, 25300: A, 23224: A}
        }, E = {username: function(a) {
                a = a || function() {
                };
                var b = $.trim(w.val()), c = {obj: w, value: b, status: !0, msg: ""};
                b ? q.mobilephone.test(b) ? "login" == m ? s["username=" + b] ? a(s["username=" + b]) : o || (o = !0, $.get(TU.myUrl + "/i/premobile/", {username: b}, function(d) {
                    o = !1, c.status = d.status, c.msg = d.msg, a(c), s["username=" + b] = c
                }, "jsonp")) : a(c) : (c.status = !1, c.msg = "手机号格式输入错误", a(c)) : (c.status = !1, c.msg = "手机号不能为空", a(c))
            }, password: function(a) {
                a = a || function() {
                };
                var b = $.trim(x.val()), c = {obj: x, value: b, status: !0, msg: ""};
                b ? b.length < 6 && (c.status = !1, c.msg = "密码不能少于6位") : (c.status = !1, c.msg = "密码不能为空"), a(c)
            }, captcha: function(a) {
                a = a || function() {
                };
                var b = $.trim(y.val()), c = {obj: y, value: b, status: !0, msg: ""};
                b ? q.code.test(b) || (c.status = !1, c.msg = "验证码格式输入错误") : (c.status = !1, c.msg = "验证码不能为空"), a(c)
            }, code: function(a) {
                a = a || function() {
                };
                var b = $.trim(A.val()), c = {obj: A, value: b, status: !0, msg: ""};
                b ? q.code.test(b) || (c.status = !1, c.msg = "请输入正确的短信验证码") : (c.status = !1, c.msg = "请输入短信验证码"), a(c)
            }}, F = function(a, b) {
            b = b || function() {
            };
            var c = 0, d = a.length;
            B.empty();
            for (var e = 0; d > e; e++)
                E[a[e]] && E[a[e]](function(a) {
                    a.status ? (c++, a.obj.parents("p").removeClass("js-error")) : (a.obj.parents("p").addClass("js-error"), B.html("<span>" + a.msg + "</span>")), c == d && b()
                })
        }, G = function() {
            isMobi && f.css("overflow", ""), h.removeClass("mod-login-show").addClass("mod-login-hide"), setTimeout(function() {
                h.hide()
            }, 600)
        };
        TU.login = function(a) {
            return D(a), isMobi && f.css("overflow", "hidden"), h.addClass("mod-login-show").removeClass("mod-login-hide").show(), B.empty(), z.attr("src", TU.myUrl + "/i/captcha?" + +new Date), j.find("p").removeClass("js-error"), !1
        }, j.find("label").click(function() {
            var a = $(this), b = a.find('input[type="checkbox"]');
            b.length && a.toggleClass("checked", b.is(":checked"))
        }), j.on("click", ".captcha img", function() {
            this.src = TU.myUrl + "/i/captcha?" + +new Date
        }), j.find(".switch").click(function() {
            var a = $(this).attr("href");
            return"#reg" == a ? D("reg") : D("login"), !1
        }), function() {
            var a = l.find('input[name="username"]'), b = l.find('input[name="code"]');
            C.countdown({auto: !1, starttime: 60, countEach: function(a) {
                    n = a.format, C.text(n + "秒后重新发送")
                }, countEnd: function() {
                    n = 0, C.text("重新发送"), a.removeAttr("disabled")
                }}, function(c) {
                r = c;
                var d = +p.get("form_time_reg"), e = p.get("form_user_reg");
                if (e && d) {
                    b.prop("disabled", !1).focus(), a.prop("disabled", !0).val(e);
                    var f = +new Date, g = 60 - parseInt((f - d) / 1e3);
                    c.setStarttime(g)
                }
            }), j.find(".getcode").click(function() {
                return n ? !1 : (F(["username", "captcha"], function() {
                    var c = $.trim(a.val());
                    $.get(TU.myUrl + "/member/sender/sms", {channel: "reg", phonenumber: c, captcha: $.trim(y.val())}, function(d) {
                        d.status ? (p.set("form_user_reg", c, 60).set("form_time_reg", +new Date, 60), b.prop("disabled", !1).focus(), a.prop("disabled", !0), r.reset()) : (z.attr("src", TU.myUrl + "/i/captcha?" + +new Date), alert(d.msg))
                    }, "jsonp")
                }), !1)
            })
        }(), j.on("focus", ".input-text", function() {
            $(this).parents("p").removeClass("js-error"), B.empty()
        }), j.on("blur", ".input-text", function() {
            var a = $(this).attr("name");
            F([a])
        }), j.on("keydown", 'input[type="number"]', function(a) {
            var c = $(this), d = $.trim(c.val()), e = +c.attr("maxlength");
            switch (a.which) {
                case 8:
                case 9:
                case 13:
                case 35:
                case 36:
                case 37:
                case 39:
                case 46:
                    break;
                default:
                    if (!b().length) {
                        if (d.length >= e)
                            return!1;
                        if (a.which < 48 || a.which > 57 && a.which < 96 || a.which > 105)
                            return!1
                    }
                }
        }), j.find("form").submit(function() {
            var a = [];
            return"login" == m ? (a = ["username", "password"], y.length && a.push("captcha")) : a = ["username", "password", "captcha", "code"], F(a, function() {
                var a = v.serialize();
                if (s[a])
                    alert("请勿反复提交相同内容！");
                else if (!o) {
                    o = !0;
                    var b = "";
                    "login" == m ? b = TU.myUrl + "/member/login/i" : (b = TU.myUrl + "/member/reg/doreg/", a.indexOf("username") < 0 && (a += "&username=" + w.val())), $.get(b, a, function(b) {
                        o = !1, b.status ? "login" == m ? PL.preLogin("PL.callback") : location.reload() : (B.html("<span>" + b.msg + "</span>"), z.attr("src", TU.myUrl + "/i/captcha?" + +new Date), t[b.code] && t[b.code].parents("p").addClass("js-error"), "login" == m && b.data.using_captcha && !y.length && (k.find(".auto").before(u), y = k.find('input[name="captcha"]'))), s[a] = !0
                    }, "jsonp")
                }
            }), !1
        }), j.find(".close").click(G), i.click(G), D("login"), c && TU.login()
    }, "jsonp")
}), define("public/cookie", [], function(a, b, c) {
    c.exports = {docu: window.document, set: function(a, b, c, d, e) {
            e = e || "/";
            var f = new Date;
            return d ? "hs" === d && (f.setDate(f.getDate() + parseInt(c / 24)), f.setHours(f.getHours() + c % 24)) : (f.setMinutes(f.getMinutes() + parseInt(c / 60)), f.setSeconds(f.getSeconds() + c % 60)), this.docu.cookie = a + "=" + b + ";expires=" + f.toUTCString() + ";path=" + e, this
        }, get: function(a) {
            for (var b, c = this.docu.cookie.split("; "), d = 0, e = c.length; e > d; d++)
                if (b = c[d].split("="), b[0] === a)
                    return b[1];
            return""
        }, remove: function(a) {
            return this.set(a, 1, -1), this
        }}
}), define("public/list.regexp", [], {mobilephone: /^(\+?0{0,2}86([\ |\-])?)?1[3|4|5|8][0-9]{9}$/, email: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/, code: /^\d{4}$/, zipcode: /^[0-9]{6}$/, areacode: /^\d{3,4}$/, tel: /^\d{7,8}$/, ext: /\d{3,}$/, qq: /^\d{5,}$/, captcha: /^\w{4}$/, amount: /^\d+(\.\d{1,2})?$/, realname: /^[\u4e00-\u9fa5]+$/}), define("plugins/jquery.countdown", [], function() {
    !function(a) {
        a.fn.countdown = function(b, c) {
            function d(a) {
                return+new Date(a) || +new Date("1970/1/1 " + a)
            }
            function e(a, b) {
                var c = new Date(b), d = {"M+": c.getMonth() + 1, "d+": c.getDate(), "h+": c.getHours(), "m+": c.getMinutes(), "s+": c.getSeconds(), "q+": Math.floor((c.getMonth() + 3) / 3), S: c.getMilliseconds()};
                /(y+)/.test(a) && (a = a.replace(RegExp.$1, (c.getFullYear() + "").substr(4 - RegExp.$1.length)));
                for (var e in d)
                    new RegExp("(" + e + ")").test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? d[e] : ("00" + d[e]).substr(("" + d[e]).length)));
                return a
            }
            return"function" == typeof b ? (c = b, b = {}) : (b = b || {}, c = c || function() {
            }), this.each(function() {
                var f = a(this), g = {format: "hh:mm:ss", starttime: f.text(), endtime: "", interval: 1e3, disableBtnCls: "disable", auto: !0, countEach: function(a) {
                        f.text(a.format)
                    }, countEnd: function(a) {
                        f.text(a.format)
                    }}, h = a.extend({}, g, b), i = {}, j = null, k = 0, l = 0, m = isNaN(h.starttime) || isNaN(h.endtime), n = function(a) {
                    if (m)
                        var b = new Date(a), c = e(h.format, a);
                    else
                        var b = new Date, c = a / 1e3;
                    return{year: b.getFullYear(), month: b.getMonth() + 1, day: b.getDate(), hour: b.getHours(), minute: b.getMinutes(), second: b.getSeconds(), quarter: Math.floor((b.getMonth() + 3) / 3), microsecond: b.getMilliseconds(), format: c}
                }, o = function() {
                    j && clearInterval(j), h.countEach(n(k)), f.addClass(h.disableBtnCls), j = setInterval(function() {
                        k -= h.interval, l >= k ? (clearInterval(j), h.countEnd(n(l)), f.removeClass(h.disableBtnCls)) : h.countEach(n(k))
                    }, h.interval)
                };
                i.reset = function() {
                    m ? (k = h.starttime ? d(h.starttime) : +new Date, l = d(h.endtime)) : (k = 1e3 * h.starttime, l = 1e3 * h.endtime), o()
                }, i.setStarttime = function(a) {
                    m = isNaN(a), k = m ? d(a) : 1e3 * a, o()
                }, i.setEndtime = function(a) {
                    m = isNaN(a), l = m ? d(a) : 1e3 * a, o()
                }, h.auto && i.reset(), c(i)
            })
        }
    }(jQuery)
}), define("plugins/jquery.suggestion", [], function() {
    !function(a) {
        a.fn.suggestion = function(b, c) {
            "function" == typeof b ? (c = b, b = {}) : (b = b || {}, c = c || function() {
            });
            var d = {url: "", suggestionCls: "suggestion", activeCls: "active", FieldName: "word", parameter: {}, dataFormat: "json", jsonpCallback: "data_callback", error: function() {
                }, beforeSend: function() {
                }, time: 500, cache: !0, get: function() {
                }, select: function(a) {
                    a.input.val(a.target.text())
                }, showEvent: function() {
                }, hideEvent: function() {
                }}, e = a.extend({}, d, b), f = a(window), g = a(document);
            return this.each(function() {
                var b = a(this), d = b.parents("form"), h = b.parent(), i = {}, j = a("<div class='" + e.suggestionCls + "'><ul></ul></div>").appendTo(h), k = j.find("ul"), l = k.find("li"), m = b.outerHeight(!0), n = b.outerWidth(!0), o = 0, p = -1, q = !1, r = !1, s = !1, t = {};
                d.css({position: "relative"}), b.prop({autocomplete: "off", disableautocomplete: !0}), "relative" != j.css("position") && j.css("position", "absolute"), j.hide();
                var u = function() {
                    m = b.outerHeight(!0), n = b.outerWidth(!0), _top = b.position().top, _left = b.position().left, "absolute" == j.css("position") && j.css({top: _top + m + "px", left: _left + "px", width: n + "px"})
                }, v = function(a) {
                    switch (a.isPropagationStopped(), a.preventDefault(), a.keyCode) {
                        case 13:
                        case 38:
                        case 40:
                            break;
                        default:
                            D()
                        }
                }, w = function(a) {
                    switch (a.isPropagationStopped(), a.keyCode) {
                        case 13:
                            z();
                            break;
                        case 38:
                            q && (p > 0 ? p-- : p = l.length - 1, l.eq(p).addClass(e.activeCls).siblings().removeClass(e.activeCls), a.preventDefault());
                            break;
                        case 40:
                            q && (p < l.length - 1 ? p++ : p = 0, l.eq(p).addClass(e.activeCls).siblings().removeClass(e.activeCls), a.preventDefault())
                        }
                }, x = function(a) {
                    a.isPropagationStopped(), a.preventDefault(), D()
                }, y = function(b) {
                    b.isPropagationStopped();
                    var c = a(this);
                    p = c.index(), c.addClass(e.activeCls).siblings().removeClass(e.activeCls)
                }, z = function() {
                    var a = k.find("li." + e.activeCls);
                    if (0 != a.length) {
                        var c = {target: a, input: b};
                        e.select(c), A()
                    }
                }, A = function() {
                    q = !1, clearTimeout(o), j.hide(), e.hideEvent()
                }, B = function() {
                    q = !0, j.show(), e.showEvent(), u()
                }, C = function(a) {
                    if ("loading" != a) {
                        var b = {target: k, data: a};
                        e.get(b), l = j.find("li"), r = l.length > 0, B()
                    }
                };
                window[e.jsonpCallback] = function() {
                };
                var D = function() {
                    q = !0, o = setTimeout(function() {
                        if (q) {
                            var c = a.trim(b.val());
                            if (!c)
                                return i.hide(), r = 0, !0;
                            p = -1, e.parameter[e.FieldName] = c;
                            var d = a.param(e.parameter);
                            if (e.cache && t[e.url + "?" + d])
                                return C(t[e.url + "?" + d]), !0;
                            t[e.url + "?" + d] = "loading";
                            var f = {};
                            if (f.url = e.url, f.data = e.parameter, f.dataType = e.dataFormat, e.cache && (f.cache = !0), e.jsonpCallback && (f.jsonpCallback = e.jsonpCallback), e.error && (f.error = e.error({target: k})), e.beforeSend) {
                                var g = {target: k};
                                f.beforeSend = e.beforeSend(g)
                            }
                            f.success = function(a) {
                                t[e.url + "?" + d] = a, C(a)
                            }, a.ajax(f)
                        }
                    }, e.time)
                };
                i.getIsShow = function() {
                    return q
                }, i.getObj = function() {
                    return j
                }, i.show = function() {
                    B(), s = !0
                }, i.hide = function() {
                    A()
                }, i.getHasdata = function() {
                    return r
                }, b.on({keyup: v, keydown: w, input: x}), b.on("click", function() {
                    var a = b.val();
                    r && a && (B(), s = !0)
                }), k.on("click", "li", function() {
                    z()
                }).on("mouseenter", "li", y), g.on("click", function() {
                    s || i.hide(), s = !1
                }), f.resize(u), u(), c(i)
            })
        }
    }(jQuery)
}), define("www/public/mod/suggestion", [], function() {
    var a = "undefined" != typeof TU && TU.wwwUrl ? TU.wwwUrl : "http://www.liantu.cn", b = $(".J_search");
    b.each(function() {
        var b = {}, c = $(this), d = c.find(".ico"), e = c.find('input[type="text"]'), f = {daoyou: "找导游", banyou: "找伴游", tongyou: "找同游"}, g = a + "/search/dest/";
        e.suggestion({url: g, FieldName: "w", suggestionStyleCls: "", dataFormat: "jsonp", time: 50, beforeSend: function(a) {
                var b = a.target;
                b.html('<li class="loading">正在加载中...</li>')
            }, error: function(a) {
                var b = a.target;
                b.html('<li class="nodata"><span>加载出错</span></li>')
            }, get: function(b) {
                d.addClass("active"), e.addClass("input-active");
                var c = b.target, g = b.data.data, h = Math.min(g.length, 10);
                if (c.empty(), !h)
                    return c.append('<li class="nodata"><span>暂时不支持该目的地</span></li>'), !1;
                for (var i = 0; h > i; i++) {
                    var j = g[i];
                    for (var k in f) {
                        var l = j.province + "," + j.city;
                        j.province || (l = j.city), j.pinyin ? c.append('<li data-text="' + j.name + '"><a href="' + a + "/" + k + "/" + j.pinyin + '/">' + l + " " + j.name + "<span>" + f[k] + "</span></a></li>") : c.append('<li data-text="' + j.name + '"><a href="javascript:">' + l + " " + j.name + "<span>" + f[k] + "</span>(暂未开放)</a></li>")
                    }
                }
            }, select: function(a) {
                var b = a.target.find("a"), c = b.attr("href");
                "javascript:" != c && b[0].click()
            }, showEvent: function() {
                e.addClass("input-active")
            }, hideEvent: function() {
                d.removeClass("active"), e.removeClass("input-active")
            }}, function(a) {
            b = a
        }), d.on("click", function() {
            b.getIsShow() ? (b.hide(), d.removeClass("active")) : b.getHasdata() && (b.show(), d.addClass("active"))
        })
    })
}), define("www/public/mod/login.drop", [], function(a, b, c) {
    function d() {
        var a = $("#pl-login-info"), b = a.find(".name");
        a.on({mouseenter: function() {
                var a = Math.round(.5 * b.width());
                $(this).find(".list").stop().slideDown(150), $(this).find(".list").css("right", "-" + (35 - a) + "px")
            }, mouseleave: function() {
                $(this).find(".list").stop().slideUp(150)
            }})
    }
    c.exports = d
}), define("www/public/mod/backtop", [], function() {
    var a = $(window), b = $(document), c = $(".footer"), d = c.find(".mod-back"), e = d.find(".qrcode");
    $("#code").on({mouseenter: function() {
            e.stop().fadeIn(300)
        }, mouseleave: function() {
            e.stop().fadeOut(300)
        }});
    var f = d.find(".goback"), g = navigator.userAgent.indexOf("MSIE 6") > -1, h = "", i = function() {
        var e = a.width(), f = a.height(), i = b.scrollTop(), j = c.position().top;
        i > 400 && e > 1300 ? d.fadeIn() : d.fadeOut(), i + f >= j ? d.css({position: "absolute", top: "-134px"}) : g ? (clearTimeout(h), h = setTimeout(function() {
            d.animate({position: "absolute", top: i + f - 200 + "px"}, 500)
        }, 500)) : d.css({position: "fixed", bottom: "20px", top: "auto"})
    };
    a.scroll(i).resize(i), i(), f.on("click", function() {
        return $("html,body").animate({scrollTop: 0}, 500), !1
    })
}), define("public/placeholder", [], function() {
    var a = window.document, b = a.createElement("input");
    "undefined" == typeof b.placeholder && $("input[type=text]").each(function() {
        var a = $(this), b = a.attr("placeholder"), c = a.attr("data-placeholder-color") || "#757575";
        (b && "" == a.val() || a.val() == b) && a.css({color: c}).val(b), a.on({focus: function() {
                a.val() === b && a.val("").removeAttr("style")
            }, blur: function() {
                "" == a.val() && a.css({color: c}).val(b)
            }})
    })
});