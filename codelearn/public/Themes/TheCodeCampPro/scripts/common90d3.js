//BOOTSTRAP NOTIFY
//http://bootstrap-notify.remabledesigns.com/
!function (t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery) }(function (a) { var i = { element: "body", position: null, type: "info", allow_dismiss: !0, newest_on_top: !1, showProgressbar: !1, placement: { from: "top", align: "right" }, offset: 20, spacing: 10, z_index: 9999, delay: 2e3, timer: 1e3, url_target: "_blank", mouse_over: null, animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" }, onShow: null, onShown: null, onClose: null, onClosed: null, icon_type: "class", template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="glyphicon glyphicon-remove" style="font-size:18px;"></i></button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>' }; function s(t, e, s) { e = { content: { message: "object" == typeof e ? e.message : e, title: e.title ? e.title : "", icon: e.icon ? e.icon : "", url: e.url ? e.url : "#", target: e.target ? e.target : "-" } }; s = a.extend(!0, {}, e, s), this.settings = a.extend(!0, {}, i, s), this._defaults = i, "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = { start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart", end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend" }, "number" == typeof this.settings.offset && (this.settings.offset = { x: this.settings.offset, y: this.settings.offset }), this.init() } String.format = function () { for (var t = arguments[0], e = 1; e < arguments.length; e++) t = t.replace(RegExp("\\{" + (e - 1) + "\\}", "gm"), arguments[e]); return t }, a.extend(s.prototype, { init: function () { var o = this; this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.placement(), this.bind(), this.notify = { $ele: this.$ele, update: function (t, e) { var s = {}; for (var t in "string" == typeof t ? s[t] = e : s = t, s) switch (t) { case "type": this.$ele.removeClass("alert-" + o.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + o.settings.type), o.settings.type = s[t], this.$ele.addClass("alert-" + s[t]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + s[t]); break; case "icon": var i = this.$ele.find('[data-notify="icon"]'); "class" == o.settings.icon_type.toLowerCase() ? i.removeClass(o.settings.content.icon).addClass(s[t]) : (i.is("img") || i.find("img"), i.attr("src", s[t])); break; case "progress": var n = o.settings.delay - o.settings.delay * (s[t] / 100); this.$ele.data("notify-delay", n), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", s[t]).css("width", s[t] + "%"); break; case "url": this.$ele.find('[data-notify="url"]').attr("href", s[t]); break; case "target": this.$ele.find('[data-notify="url"]').attr("target", s[t]); break; default: this.$ele.find('[data-notify="' + t + '"]').html(s[t]) } var a = this.$ele.outerHeight() + parseInt(o.settings.spacing) + parseInt(o.settings.offset.y); o.reposition(a) }, close: function () { o.close() } } }, buildNotify: function () { var t = this.settings.content; this.$ele = a(String.format(this.settings.template, this.settings.type, t.title, t.message, t.url, t.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove() }, setIcon: function () { "class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />') }, styleURL: function () { this.$ele.find('[data-notify="url"]').css({ backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)", height: "100%", left: "0px", position: "absolute", top: "0px", width: "100%", zIndex: this.settings.z_index + 1 }), this.$ele.find('[data-notify="dismiss"]').css({ position: "absolute", right: "10px", top: "5px", zIndex: this.settings.z_index + 2 }) }, placement: function () { var s = this, t = this.settings.offset.y, e = { display: "inline-block", margin: "0px auto", position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute", transition: "all .5s ease-in-out", zIndex: this.settings.z_index }, i = !1, n = this.settings; switch (a('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () { return t = Math.max(t, parseInt(a(this).css(n.placement.from)) + parseInt(a(this).outerHeight()) + parseInt(n.spacing)) }), 1 == this.settings.newest_on_top && (t = this.settings.offset.y), e[this.settings.placement.from] = t + "px", this.settings.placement.align) { case "left": case "right": e[this.settings.placement.align] = this.settings.offset.x + "px"; break; case "center": e.left = 0, e.right = 0 } this.$ele.css(e).addClass(this.settings.animate.enter), a.each(Array("webkit", "moz", "o", "ms", ""), function (t, e) { s.$ele[0].style[e + "AnimationIterationCount"] = 1 }), a(this.settings.element).append(this.$ele), 1 == this.settings.newest_on_top && (t = parseInt(t) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(t)), a.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function (t) { i = !0 }).one(this.animations.end, function (t) { a.isFunction(s.settings.onShown) && s.settings.onShown.call(this) }), setTimeout(function () { i || a.isFunction(s.settings.onShown) && s.settings.onShown.call(this) }, 600) }, bind: function () { var s = this; if (this.$ele.find('[data-notify="dismiss"]').on("click", function () { s.close() }), this.$ele.mouseover(function (t) { a(this).data("data-hover", "true") }).mouseout(function (t) { a(this).data("data-hover", "false") }), this.$ele.data("data-hover", "false"), 0 < this.settings.delay) { s.$ele.data("notify-delay", s.settings.delay); var i = setInterval(function () { var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer; if ("false" === s.$ele.data("data-hover") && "pause" == s.settings.mouse_over || "pause" != s.settings.mouse_over) { var e = (s.settings.delay - t) / s.settings.delay * 100; s.$ele.data("notify-delay", t), s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", e).css("width", e + "%") } t <= -s.settings.timer && (clearInterval(i), s.close()) }, s.settings.timer) } }, close: function () { var e = this, t = parseInt(this.$ele.css(this.settings.placement.from)), s = !1; this.$ele.data("closing", "true").addClass(this.settings.animate.exit), e.reposition(t), a.isFunction(e.settings.onClose) && e.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function (t) { s = !0 }).one(this.animations.end, function (t) { a(this).remove(), a.isFunction(e.settings.onClosed) && e.settings.onClosed.call(this) }), setTimeout(function () { s || (e.$ele.remove(), e.settings.onClosed && e.settings.onClosed(e.$ele)) }, 600) }, reposition: function (t) { var e = this, s = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])', i = this.$ele.nextAll(s); 1 == this.settings.newest_on_top && (i = this.$ele.prevAll(s)), i.each(function () { a(this).css(e.settings.placement.from, t), t = parseInt(t) + parseInt(e.settings.spacing) + a(this).outerHeight() }) } }), a.notify = function (t, e) { return new s(this, t, e).notify }, a.notifyDefaults = function (t) { return i = a.extend(!0, {}, i, t) }, a.notifyClose = function (t) { void 0 === t || "all" == t ? a("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : a('[data-notify-position="' + t + '"]').find('[data-notify="dismiss"]').trigger("click") } });


// Sign
(function () {
    function TEAMLOG(color) {
        return "background:" + color + "; color:white; padding: 5px; font-size: 40px; border-radius: 10px; margin: 1px;";
    }
    // console.clear();
    console.log("%cF" + "%cP" + "%cT" + '%cCODELEARN.IO', TEAMLOG('#084aa0'), TEAMLOG('#f36f21'), TEAMLOG('#49b644'), TEAMLOG('#ff6d3a'));
})();

var cvUrl = '/Profile/';
var currentLang = "en";
var interval;
var levelKeyMap = {
    "easy": "SYSTEM_STATUS_EASY",
    "medium": "SYSTEM_STATUS_MEDIUM",
    "hard": "SYSTEM_STATUS_HARD"
};

function startTimer(distance, display, customTime, timoutFunction, isClearInterval) {
    if (isClearInterval) {
        clearInterval(interval);
    }

    if (distance > 0) {
        var timer = distance, days, hours, minutes, seconds;
        var isTimeOut = true;

        interval = setInterval(function () {
            days = Math.floor(timer / (3600 * 24));
            hours = Math.floor((timer % (3600 * 24)) / (60 * 60));
            minutes = Math.floor((timer % (3600)) / 60);
            seconds = Math.floor(timer % 3600 % 60);

            if (timer > 0) {
                var strHTML = "";

                if (customTime) {
                    strHTML += '<div class="down-time">';

                    if (days > 0) {
                        strHTML += '<div class="inline-block">';
                        strHTML += '<span>' + days + '</span>';
                        strHTML += '<span>' + translate.instant("CONTEST_LABEL_DAYS") + '</span>';
                        strHTML += '</div>';
                        strHTML += '<label class="dot">:</label>';
                    }

                    strHTML += '<div class="inline-block">';
                    strHTML += '<span>' + hours + '</span>';
                    strHTML += '<span>' + translate.instant("CONTEST_LABEL_HOURS") + '</span>';
                    strHTML += '</div>';
                    strHTML += '<label class="dot">:</label>';
                    strHTML += '<div class="inline-block">';
                    strHTML += '<span>' + minutes + '</span>';
                    strHTML += '<span>' + translate.instant("CONTEST_LABEL_MINUTES") + '</span>';
                    strHTML += '</div>';
                    strHTML += '<label class="dot">:</label>';
                    strHTML += '<div class="inline-block">';
                    strHTML += '<span>' + seconds + '</span>';
                    strHTML += '<span>' + translate.instant("CONTEST_LABEL_SECONDS") + '</span>';
                    strHTML += '</div>';
                    strHTML += '</div>';
                } else {
                    strHTML += "<span class='time_span'>";

                    if (days > 0) {
                        strHTML += "<span class='time_day'>" + days + "</span>" + translate.instant("SYSTEM_TIME_DAY_CHAR") + " ";
                    }

                    strHTML += "<span class='time_hours'>" + hours + "</span>";
                    strHTML += translate.instant("SYSTEM_TIME_HOUR_CHAR");
                    strHTML += " <span class='time_minutes'>" + minutes + "</span>";
                    strHTML += translate.instant("SYSTEM_TIME_MINUTES_CHAR");
                    strHTML += " <span class='time_seconds'>" + seconds + "</span>";
                    strHTML += translate.instant("SYSTEM_TIME_SECONDS_CHAR");
                }

                display.empty().append(strHTML);
            }

            --timer

            if (timer <= 0) {
                if (isTimeOut) {
                    timoutFunction();
                    isTimeOut = false;
                }
            }

        }, 1000);
    }
    //else {
    //    display.empty().append('EXPIRED');
    //}
}

var objStatus = {
    ToStartRegister: 'CONTEST_TO_START_REGISTER',
    ToEndRegister: 'CONTEST_TO_END_REGISTER',
    ToStartContest: 'CONTEST_TO_START_CONTEST',
    ToEndContest: 'CONTEST_TO_END_CONTEST',
    Finish: 'SYSTEM_STATUS_FINISH',
}

var statusAndNameBatch = function (batchItem) {
    var obj = {
        Status: '',
        Text: '--',
        Time: 0
    };

    var utcNow = batchItem.CurrentTime;
    var registerStart = batchItem.RegisterStartSeconds;
    var registerDeadline = batchItem.RegisterSeconds;
    var startDate = batchItem.StartDateSeconds;
    var endDate = batchItem.EndTimeCodeSeconds;

    if (batchItem.IsApplyRegisterStart && utcNow < registerStart) {
        obj.Status = 'status_wait';
        obj.Text = translate.instant(objStatus.ToStartRegister);
        obj.Time = registerStart - utcNow;
        return obj;
    }

    if ((registerDeadline > utcNow && registerDeadline > registerStart && batchItem.IsApplyRegisterStart && registerStart <= utcNow)
        || (registerDeadline > utcNow && !batchItem.IsApplyRegisterStart)) {
        obj.Status = 'status_register';
        obj.Text = translate.instant(objStatus.ToEndRegister);
        obj.Time = registerDeadline - utcNow;
        return obj;
    }

    if (registerDeadline <= utcNow && utcNow < startDate) {
        obj.Status = 'status_upcoming';
        obj.Text = translate.instant(objStatus.ToStartContest);
        obj.Time = startDate - utcNow;
        return obj;
    }

    if (startDate <= utcNow && utcNow < endDate) {
        obj.Status = 'status_running';
        obj.Text = translate.instant(objStatus.ToEndContest);
        obj.Time = endDate - utcNow;
        return obj;
    }

    if (utcNow >= endDate) {
        obj.Status = 'status_finish';
        obj.Text = translate.instant(objStatus.Finish);
        return obj;
    }

    return obj;
};

function highlight(objectFindter, textFindter) {
    $(objectFindter).each(function () {
        var matchStart = $(this).text().toLowerCase().indexOf("" + textFindter.toLowerCase() + "");

        if (matchStart > -1) {
            var txt = $(this).text();
            var matchEnd = matchStart + textFindter.length - 1;
            var beforeMatch = txt.slice(0, matchStart);
            var matchText = txt.slice(matchStart, matchEnd + 1);
            var afterMatch = txt.slice(matchEnd + 1);

            $(this).addClass('highlight').text(matchText);
            $(this).before('<span>' + beforeMatch + '</span>');
            $(this).after('<span>' + afterMatch + '</span>');
        }
    });
};

// defined notication
var NOFICATION_GLOBAL;

// Setting notification
$.notifyDefaults({
    allow_dismiss: true,
    placement: {
        from: "top",
        align: "right"
    },
    animate: {
        enter: 'animated fadeInRightBig',
        exit: 'animated fadeOutRightBig'
    },
    onClosed: function () {
        NOFICATION_GLOBAL = null;
    }
});

// setting select2
$(function () {
    // https://github.com/select2/select2/issues/2927
    try {
        $.fn.select2.defaults.set("theme", "bootstrap");
    } catch (e) {

    }
});

//DEV BY tungvv2@fsoft.com.vn

function getKey(keyStroke) {
    try {
        //Reset lang storage
        isNetscape = (document.layers);
        eventChooser = (isNetscape) ? keyStroke.which : keyStroke.keyCode;
        if (eventChooser == 116 && keyStroke.ctrlKey) { localStorage.removeItem(PKLService.ArrConfig.strLangStorage); }
        if (keyStroke.ctrlKey) { if (eventChooser == 82) { localStorage.removeItem(PKLService.ArrConfig.strLangStorage); } }
    }
    catch (e) {
        console.error("Error linux browse is not support event key code");
    }

}
document.onkeydown = getKey;

$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,

    changeYear: true,
    yearRange: ((new Date).getFullYear() - 110) + ':' + ((new Date).getFullYear() + 50)
});

var SystemConstant = {
    Method: { GET: 1, POST: 2 }
}
var translate = function () {
    var ArrLangData = [];
    var ArrObjCallBack = [];
    var fInstant = function (strLabel) {
        if (strLabel == null || ArrLangData == null) return "OBJECT_IS_NULL";
        var data = ArrLangData.filter(function (el) {
            return el.Key == strLabel
        });
        if (data.length > 0) {
            return data[0].Message;
        }
        else return strLabel;
    }
    //var fGetObjectColumn = function (ArrObj) {
    //    var intEachIndex = 0;
    //    var item = [];
    //    $.each(ArrObj, function (key, value) {
    //        item.push({ Key: key, Message: value });
    //    });
    //    return item;
    //}
    var fTranslateValidatorExent = function () {
        if (jQuery.validator)
            jQuery.extend(jQuery.validator.messages, {
                required: translate.instant("SYSTEM_VALIDATOR_FIELD_REQUIRED"),
                email: translate.instant("SYSTEM_VALIDATOR_INVALID_EMAIL"),
                url: translate.instant("SYSTEM_VALIDATOR_INVALID_URL"),
                date: translate.instant("SYSTEM_VALIDATOR_INVALID_DATE"),
                number: translate.instant("SYSTEM_VALIDATOR_INVALID_NUMBER"),
                digits: translate.instant("SYSTEM_VALIDATOR_ONY_DIGITS")
            });
        translate.config.IsHasInit = true;
        fCallBackArray();
    }
    var gGetJsonLang = function () {
        $.get(PKLService.ArrConfig.url + "/api/language/GetAllMessages?version=" + Math.random().toString(36).substring(2), function (data) {
            //console.log("download-lang");
            ArrLangData = data.Data;
            var object = {
                strVersion: PKLService.ArrConfig.strVersion,
                strLangCode: PKLService.ArrConfig.strLangCode,
                ArrLang: ArrLangData
            }
            localStorage.setItem(PKLService.ArrConfig.strLangStorage, JSON.stringify(object));
            fTranslateValidatorExent();
        });
        //$.get(PKLService.ArrConfig.url + "/Languages/" + PKLService.ArrConfig.strLangCode + ".json?version=" + Math.random().toString(36).substring(2), function (data) {
        //    //console.log("download-lang");
        //    ArrLangData = fGetObjectColumn(data.MESSAGES);
        //    var object = {
        //        strVersion: PKLService.ArrConfig.strVersion,
        //        strLangCode: PKLService.ArrConfig.strLangCode,
        //        ArrLang: ArrLangData
        //    }
        //    localStorage.setItem(PKLService.ArrConfig.strLangStorage, JSON.stringify(object));
        //    fTranslateValidatorExent();
        //});
    }
    var fCallBackArray = function () {
        for (var i = 0; i < ArrObjCallBack.length; i++) {
            //console.log(ArrObjCallBack[i]);
            ArrObjCallBack[i]();
        }
    }
    return {
        status: function (strStatusName) {
            strStatusName = strStatusName.replaceAll(" ", "_");
            var strLabel = "SYSTEM_STATUS_" + strStatusName.toUpperCase();
            return translate.instant(strLabel);
        },
        config: {
            IsHasInit: false
        },
        reload: function () {
            gGetJsonLang();
        },
        onLoad: function (fCallBack) {
            if (translate.config.IsHasInit == true) {
                fCallBack();
            }
            else {
                ArrObjCallBack.push(fCallBack);
            }
        },
        init: function () {
            var strLangJson = localStorage.getItem(PKLService.ArrConfig.strLangStorage);
            //console.log("init lang");
            if (strLangJson == null) {
                gGetJsonLang();
            }
            else {
                var ArrData = JSON.parse(strLangJson);                
                if (ArrData.strVersion == PKLService.ArrConfig.strVersion && ArrData.strLangCode == PKLService.ArrConfig.strLangCode) {
                    ArrLangData = ArrData.ArrLang;

                    if (ArrLangData != null) {
                        fTranslateValidatorExent();
                    } else {
                        gGetJsonLang();
                    }
                }
                else {
                    gGetJsonLang();
                }
            }
            //console.log(ArrLangData);
        },
        instant: function (strLabel) {
            return fInstant(strLabel);
        }
    }
}();
var PKLService = function () {
    var ArrConfig = {
        strApiURL: "",
        strVersion: "",
        strLangCode: "",
        strLangStorage: "StorageLangData",
        ajaxTimeOut: 30000,
        IsHasLogin: false,
        url: ""
    }
    var fCreateloading = function () {
        var div = document.createElement("div");
        div.className = 'el-loading-mask';
        var strLoadingStatus = translate.instant("SYSTEM_STATUS_LOADING");
        if (strLoadingStatus == "SYSTEM_STATUS_LOADING") {
            strLoadingStatus = translate.instant("SYSTEM_STATUS_LOADING");
        }
        div.innerHTML = '<div class="el-loading-spinner" style="top: 50%"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none"></circle></svg><p class="el-loading-text" style="display: block">' + strLoadingStatus + '</p></div></div>';
        return div;
    }
    var fGetObjectColumn = function (ArrObj) {
        var intEachIndex = 0;
        var item = [];
        $.each(ArrObj, function (key, value) {
            item.push({ key: key, value: value });
        });
        return item;
    }
    var fShowResponseError = function (res, ots) {
        if (res.statusText == "timeout") {
            if (NOFICATION_GLOBAL) {
                NOFICATION_GLOBAL.update({ type: "codecamp-danger", message: translate.instant("SYSTEM_MESSEGER_REQUEST_TIME_OUT") });
            } else {
                NOFICATION_GLOBAL = $.notify(translate.instant("SYSTEM_MESSEGER_REQUEST_TIME_OUT"), {
                    type: "codecamp-danger"
                });
            }
        }
        else {
            var strHTML = "<p style='color:red;'>Error In: " + ots.url + "</p>" + res.responseText;
        }
    }
    return {
        ArrConfig: {},
        withTimeBeforeShowingLoadingIndicator: function (ms) {
            this.ArrConfig.milliSecondsBeforeShowingLoadingIndicator = ms;
            return this;
        },
        swithObject: function (ArrObj) {
            return fGetObjectColumn(ArrObj);
        },
        createLoading: function () {
            return fCreateloading();
        },
        getURLParameters: function (paramName) {
            var sURL = window.document.URL.toString();
            if (sURL.indexOf("?") > 0) {
                var arrParams = sURL.split("?"); var arrURLParams = arrParams[1].split("&"); var arrParamNames = new Array(arrURLParams.length); var arrParamValues = new Array(arrURLParams.length); var i = 0;
                for (i = 0; i < arrURLParams.length; i++) { var sParam = arrURLParams[i].split("="); arrParamNames[i] = sParam[0]; if (sParam[1] != "") { arrParamValues[i] = unescape(sParam[1]); } else { arrParamValues[i] = "No Value" }; }
                for (i = 0; i < arrURLParams.length; i++) { if (arrParamNames[i] == paramName) { return arrParamValues[i]; } }
                return null;
            }
        },
        init: function (options) {
            PKLService.ArrConfig = $.extend(ArrConfig, options);
            PKLService.ArrConfig.strApiURL = PKLService.url();
            if (PKLService.ArrConfig.strLangCode == "jp") {
                if ($.datetimepicker != undefined) {
                    $.datetimepicker.setLocale('ja')
                }
                $.datepicker.regional["ja"];
            }
            else {
                if ($.datetimepicker != undefined) {
                    $.datetimepicker.setLocale('en-us')
                }
                $.datepicker.regional["en-us"];
            }
            if (PKLService.ArrConfig.IsHasLogin == true) {
                //loading signal service
                //$.fn.loadJS("Themes/TheCodeCampPro/scripts/signalr/jquery.signalr.min.js");
                //$.fn.loadJS("Themes/TheCodeCampPro/scripts/signalr/hub.js");
                //hub.connect(function () {
                //    console.log("connect success");
                //});
            }
            PKLService.loading.init();
            translate.init();
        },
        url: function () {
            return PKLService.ArrConfig.url + "/";
        },
        newid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        get: function (options) {
            var defaults = {
                url: "",
                api: null,
                data: null,
                timeout: PKLService.ArrConfig.ajaxTimeOut,
                parameter: null,
                isShowLoading: true, // show or hide loading
                cache: false,
                reqeustid: "",
                loading: null,//loading scope for view effect loading
                milliSecondsBeforeShowingLoadingIndicator: 200,
                OnError: function (data, parameter) { },
                OnSuccess: function (data, parameter) {
                }
            }
            options = $.extend(defaults, options);
            options.reqeustid = PKLService.newid();
            var url = "";
            if (options.api == null) {
                url = PKLService.ArrConfig.strApiURL + options.url;
            }
            else {
                if (options.data == null || options.data == undefined || options.data == "") {
                    throw new "Service parameters not passed! Please input parameters for data"
                }
                url = PKLService.ArrConfig.strApiURL + options.api + "?";
                var ArrObject = fGetObjectColumn(options.data);
                var strURL = "";
                for (var i = 0; i < ArrObject.length; i++) {
                    strURL = strURL + ArrObject[i].key + "=" + encodeURI(ArrObject[i].value);
                    if (i < ArrObject.length - 1) {
                        strURL = strURL + "&";
                    }
                }
                url = url + strURL;
            }
            options.url = url;
            var aboutToShowLoading;
            return $.ajax({
                type: 'GET',
                cache: options.cache,
                url: url, timeout: options.timeout,
                beforeSend: function (xhr) {
                    if (options.isShowLoading == true) {
                        aboutToShowLoading = setTimeout(function () {
                            if (options.loading == null) {
                                PKLService.loading.addRequest();
                            }
                            else if ($(options.loading).width() > 0 && $(options.loading).height() > 0) {
                                $(options.loading).prepend(fCreateloading());
                                PKLService.loading.addEffect(options.reqeustid, $(options.loading));
                                $(options.loading).find(".el-loading-mask").addClass("el-loading-in-content").attr("control-effect-index", options.reqeustid);
                                $(options.loading).find(".el-loading-mask").css({
                                    "width": $(options.loading).width() + "px", "height": $(options.loading).height() + "px", "top": "auto", "left": "auto", "right": "auto", "bottom": "auto"
                                });
                            }
                            else { PKLService.loading.addRequest(); options.loading = null; }
                        }, options.milliSecondsBeforeShowingLoadingIndicator);
                    }
                },
                contentType: 'application/x-www-form-urlencoded',
                dataType: 'json',
                success: function (data) {
                    clearTimeout(aboutToShowLoading);
                    if (options.isShowLoading == true) {
                        if (options.loading == null) {
                            PKLService.loading.removeRequest();
                        }
                        else {
                            $(options.loading).find(".el-loading-mask").remove();
                            PKLService.loading.removeEffect(options.reqeustid);
                        }
                    }
                    if (data.Errors != null && data.Errors.length > 0) {
                        var message = "";
                        data.Errors.forEach(function (err) {
                            message += translate.instant(err.Message) + ". ";
                        });

                        message = message.removeDot();

                        if (NOFICATION_GLOBAL) {
                            NOFICATION_GLOBAL.update({ type: "codecamp-danger", delay: 5000, message: message });
                        } else {
                            NOFICATION_GLOBAL = $.notify(message, {
                                type: "codecamp-danger",
                                delay: 5000
                            });
                        }

                        if (typeof options.OnError === "function") {
                            options.OnError.call(this, data, options.parameter)
                        }
                    }
                    else {
                        options.OnSuccess.call(this, data, options.parameter);
                    }
                },
                error: function (respond) {
                    clearTimeout(aboutToShowLoading);
                    if (options.isShowLoading == true) {
                        if (options.loading == null) {
                            PKLService.loading.removeRequest();
                        }
                        else {
                            $(options.loading).find(".el-loading-mask").remove();
                            PKLService.loading.removeEffect(options.reqeustid);
                        }
                    }
                    if (respond.Code == undefined) {
                        fShowResponseError(respond, options);
                    }
                    else {
                        if (respond.Code != 200) {
                            if (NOFICATION_GLOBAL) {
                                NOFICATION_GLOBAL.update({ type: "codecamp-danger", delay: 5000, message: translate.instant(respond.Message) });
                            } else {
                                NOFICATION_GLOBAL = $.notify(translate.instant(respond.Message), {
                                    type: "codecamp-danger",
                                    delay: 5000
                                });
                            }
                        }
                    }
                    options.OnError.call(this, respond, options.parameter)
                }
            });
        },
        post: function (options) {
            var defaults = {
                url: "",
                parameter: null,
                data: {},
                cache: false,
                api: null,
                isShowLoading: true,
                loading: null,
                reqeustid: "",
                contentType: 'application/x-www-form-urlencoded',
                processData: true,
                timeout: PKLService.ArrConfig.ajaxTimeOut,
                milliSecondsBeforeShowingLoadingIndicator: 200,
                OnSuccess: function (data, parameter) {
                },
                OnError: function (data, parameter) {
                }
            }
            options = $.extend(defaults, options);
            options.reqeustid = PKLService.newid();
            var url = "";
            if (options.api == null) {
                url = PKLService.ArrConfig.strApiURL + options.url;
            }
            else {
                url = PKLService.ArrConfig.strApiURL + options.api;
            }
            url += '?rk=' + PKLService.newid();
            var strVerificationToken = $('input[name=__RequestVerificationToken]').val();
            if (strVerificationToken != undefined) {
                options.data.__RequestVerificationToken = strVerificationToken;
            }
            options.url = url;
            var aboutToShowLoading;
            return $.ajax({
                type: 'POST',
                url: url,
                timeout: options.timeout,
                data: options.data,
                processData: options.processData,
                cache: options.cache,
                beforeSend: function (xhr) {
                    if (options.isShowLoading == true) {
                        aboutToShowLoading = setTimeout(function () {
                            if (options.loading == null) {
                                PKLService.loading.addRequest();
                            }
                            else if ($(options.loading).width() > 0 && $(options.loading).height() > 0) {
                                $(options.loading).prepend(fCreateloading());
                                PKLService.loading.addEffect(options.reqeustid, $(options.loading));
                                $(options.loading).find(".el-loading-mask").addClass("el-loading-in-content").attr("control-effect-index", options.reqeustid);
                                $(options.loading).find(".el-loading-mask").css({
                                    "width": $(options.loading).width() + "px", "height": $(options.loading).height() + "px", "top": "auto", "left": "auto", "right": "auto", "bottom": "auto"
                                });
                            }
                            else {
                                options.loading = null;
                                PKLService.loading.addRequest();
                            }
                        }, options.milliSecondsBeforeShowingLoadingIndicator);
                    }
                },
                contentType: options.contentType,
                dataType: 'json',
                success: function (data) {
                    clearTimeout(aboutToShowLoading);
                    if (options.isShowLoading == true) {
                        if (options.loading == null) {
                            PKLService.loading.removeRequest();
                        }
                        else {
                            $(options.loading).find(".el-loading-mask").remove();
                            PKLService.loading.removeEffect(options.reqeustid);
                        }
                    }
                    if (data.Errors != null && data.Errors.length > 0) {
                        var strError = "";

                        data.Errors.forEach(function (err) {
                            strError += translate.instant(err.Message) + ". ";
                        });

                        strError = strError.removeDot();

                        // AnhNC1 : Translate multi message
                        var strCode = /(SERVER_MSG_\d+)/g;
                        if (strCode.test(strError)) {
                            var groupMessage = strError.match(strCode);
                            groupMessage.forEach(function (msg) {
                                strError = strError.replace(msg, translate.instant(msg));
                            });
                        }

                        if (NOFICATION_GLOBAL) {
                            NOFICATION_GLOBAL.update({ type: "codecamp-danger", delay: 5000, message: strError });
                        } else {
                            NOFICATION_GLOBAL = $.notify(strError, {
                                type: "codecamp-danger",
                                delay: 5000
                            });
                        }

                        if (typeof options.OnError === "function") {
                            options.OnError.call(this, data, options.parameter)
                        }
                    }
                    else {
                        options.OnSuccess.call(this, data, options.parameter);
                    }

                },
                error: function (respond) {
                    clearTimeout(aboutToShowLoading);
                    if (options.isShowLoading == true) {
                        if (options.loading == null) {
                            PKLService.loading.removeRequest();
                        }
                        else {
                            $(options.loading).find(".el-loading-mask").remove();
                            PKLService.loading.removeEffect(options.reqeustid);
                        }
                    }

                    if (respond.Code == undefined) {
                        fShowResponseError(respond, options);
                    }
                    else {
                        if (respond.Code != 200) {
                            if (NOFICATION_GLOBAL) {
                                NOFICATION_GLOBAL.update({ type: "codecamp-danger", delay: 5000, message: translate.instant(respond.Message) });
                            } else {
                                NOFICATION_GLOBAL = $.notify(translate.instant(respond.Message), {
                                    type: "codecamp-danger",
                                    delay: 5000
                                });
                            }
                        }
                    }
                    options.OnError.call(this, respond, options.parameter)
                }
            });
        },
        loading: function () {
            var ArrLoading = {
                intTotalRequest: 0,
                isloading: false,
                panel: "#dvAjaxLaoding"
            }
            ArrEffect = [];
            return {
                ArrLoading: {},
                init: function () {
                    PKLService.loading.ArrLoading = ArrLoading;
                },
                findRequest: function (requestid) {
                    var item = null;
                    for (var x = 0; x < ArrEffect.length; x++) {
                        if (ArrEffect[x].request == requestid) { item = ArrEffect[x]; }
                    }
                    return item;
                },
                addEffect: function (requestid, _scope) {
                    ArrEffect.push({ request: requestid, scope: _scope });
                },
                removeEffect: function (requestid) {
                    for (var n = 0; n < ArrEffect.length; n++) {
                        if (ArrEffect[n].request == requestid) { ArrEffect.remove(n); }
                    }
                },
                addRequest: function (scope) {
                    this.ArrLoading.intTotalRequest = this.ArrLoading.intTotalRequest + 1;
                    if ($(ArrLoading.panel).length < 1) {
                        $("body").append('<div id="' + ArrLoading.panel.replaceAll("#", "") + '"></div>');
                        $(ArrLoading.panel).append(fCreateloading());
                        $(ArrLoading.panel).find(".el-loading-mask").addClass("el-loading-full-screen");
                    }
                    PKLService.loading.ArrLoading.isloading = true;
                },
                removeRequest: function () {
                    PKLService.loading.ArrLoading.intTotalRequest = PKLService.loading.ArrLoading.intTotalRequest - 1;
                    if (PKLService.loading.ArrLoading.intTotalRequest < 0) {
                        PKLService.loading.ArrLoading.intTotalRequest = 0;
                    }
                    if (PKLService.loading.ArrLoading.intTotalRequest == 0) {
                        jQuery(ArrLoading.panel).remove();
                        PKLService.loading.ArrLoading.isloading = false;
                    }
                }
            }
        }()
    }
}();

var modal = function () {
    var ArrConfig = {
        strEffectClass: "md-effect-8",
        strConfirmPanel: "pnModalConfigm"
    }
    var _handlePopup = function (options) {
        var defaults = {
            content: "",
            url: "",
            title: "FPT Software",
            size: 1, //access: 1 for basic, 2 for dialog, 3 for full page
            effect: 1,
            scroll: false,
            htmlFotder: "",
            showHeader: true,
            showFootder: true,
            OnClose: function () {

            },
            dialogClass: "",
            css: {
                header: "",
                body: "",
                footder: ""
            },
            OnInit: function (strPanel) {

            }
        }
        options = $.extend(defaults, options);
        var _intCount = modal.countPopup() + 1;
        function GenderControl() {
            var strClass = "modal ";
            if (options.effect == 1) { strClass = strClass + "fade "; } if (options.scroll == true) { strClass = strClass + "modal-scroll "; }
            strHTML = '<div class="TMSModal modal-size-' + options.size + ' ' + strClass + '"  aria-hidden="true" id="pnModalsPopup_' + _intCount + '" tabindex="' + _intCount + '"';
            if (options.size == 1) { strHTML = strHTML + 'role="basic"'; } else if (options.size == 2 || options.size == 3) { strHTML = strHTML + 'role="dialog"'; } else if (options.size > 3) { strHTML = strHTML + 'data-width="' + options.size + '"'; } strHTML = strHTML + ">";
            strHTML = strHTML + '<a data-target="#pnModalsPopup_' + +_intCount + '" id="pnModalsPopupShowButton_' + _intCount + '" data-toggle="modal" style="display:none">show model</a>';
            strHTML = strHTML + '<div style="background-color: white;-webkit-box-shadow: -1px 2px 16px 2px rgba(0,0,0,0.75);-moz-box-shadow: -1px 2px 16px 2px rgba(0,0,0,0.75);box-shadow: -1px 2px 16px 2px rgba(0,0,0,0.75);" class="modal-dialog ' + options.dialogClass + '">';
            //if (options.size == 2) { strHTML = strHTML + ' modal-lg">'; } else if (options.size == 3) { strHTML = strHTML + ' modal-full">'; } else { strHTML = strHTML + '">'; }
            if (options.showHeader == true) {
                strHTML = strHTML + '<div class="modal-header" style="' + options.css.header + '"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button><h4 class="modal-title">Modal Title</h4></div>';
            }
            else {
                strHTML = strHTML + '<div class="modal-header header-close-right" style="' + options.css.header + '"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button></div>';
            }
            strHTML = strHTML + '<div class="modal-body" style="' + options.css.body + '"></div>';
            if (options.showFootder == true) {
                strHTML = strHTML + '<div class="modal-footer" style="' + options.css.footder + '">';
                if (options.htmlFotder == "") {
                    strHTML = strHTML + '<button type="button" class="btn default " data-dismiss="modal">' + translate.instant("SYSTEM_CONFIRM_CONFIRM_CLOSE") + '</button></div>';
                }
                else {
                    strHTML = strHTML + options.htmlFotder;
                }
                strHTML = strHTML + "</div>";
            }

            strHTML = strHTML + '</div></div>';
            $("body").append(strHTML);
            $("#pnModalsPopup_" + _intCount).find(".modal-title").html(options.title);
            if (options.url == "") {
                $("#pnModalsPopup_" + _intCount).find(".modal-body").html(options.content);
                GenderHandle();
            }
            else {
                $.get(options.url, function (data) {
                    $("#pnModalsPopup_" + _intCount).find(".modal-body").html(data);
                    GenderHandle();
                });
            }
        }
        GenderControl();
        function GenderHandle() {
            $(document).off('hidden.bs.modal').on('hidden.bs.modal', '#' + "pnModalsPopup_" + _intCount, function (evt) {
                modal.removePopup();
                options.OnClose.call(this);
            })

            $("#pnModalsPopupShowButton_" + _intCount).click();
            $("#pnModalsPopup_" + _intCount).find('[data-toggle="tooltip"]').tooltip({
                placement: 'top'
            });
            options.OnInit.call(this, "#pnModalsPopup_" + _intCount)
        }
    }
    var _handleConfirm = function (options) {
        var defaults = {
            title: translate.instant("SYSTEM_CONFIRM_CONFIRM_CANCEL_TITLE"),
            content: "",
            strOKButton: translate.instant("SYSTEM_CONFIRM_CONFIRM_OK"),
            strCancelButton: translate.instant("SYSTEM_CONFIRM_CONFIRM_CANCEL"),
            mode: 1 //1: Success, 2: Information, 3:Warning, 4: Error,
            //OnSuccess: function () {
            //}
        }
        options = $.extend(defaults, options);
        var strHTMLFotder = "";
        if (options.OnSuccess == undefined) {
            strHTMLFotder = '<button type="button" style="min-width: 88px;" action="close" class="btn btn-primary btn-sm btn-confirm-cancel">' + options.strOKButton + '</button>';
        }
        else {
            strHTMLFotder = '<button type="button" action="close" style="min-width: 88px;" class="btn btn-default btn-sm btn-confirm-cancel" data-dismiss="modal">' + options.strCancelButton + '</button><button type="button" action="confirm" style="min-width: 88px;" class="btn btn-primary btn-sm btn--confirm" >' + options.strOKButton + '</button></div>';
        }
        modal.popup({
            content: options.content, htmlFotder: strHTMLFotder, dialogClass: "modal-confirm",
            title: options.title,
            OnInit: function (strPanel) {
                $(strPanel).find(".btn-confirm-cancel").click(function () {
                    modal.removePopup();
                });

                $(strPanel).find(".btn--confirm").click(function () {
                    $(strPanel).find(".btn-confirm-cancel").click();
                    if ($(this).attr("action") == "confirm") {
                        options.OnSuccess.call(this);
                    }
                });
            }
        });
    }
    return {
        changeConfig: function (options) {
            ArrConfig = $.extend(ArrConfig, options);
        },
        countPopup: function () {
            return $(".TMSModal").length;
        },
        removePopup: function (intIndexRemover) {
            if (intIndexRemover == undefined) {
                $("#pnModalsPopup_" + modal.countPopup() + ",.modal-backdrop").remove();
                $("body").css("overflow", "auto");
            }
            else {
                $("#pnModalsPopup_" + intIndexRemover + ",.modal-backdrop").remove();
                $("body").css("overflow", "auto");
            }
        },
        popup: function (options) {
            _handlePopup(options);
        },
        confirm: function (options) {
            _handleConfirm(options);
        },
        removeConfirm: function () {
            $("#" + ArrConfig.strConfirmPanel + ",.modal-backdrop").remove();
            $("body").css("overflow", "auto");
        }

    }
}();

$.fn.loadJS = function (strLink) {
    var scripts = document.getElementsByTagName("script");
    var IsCheck = true;
    for (var i = 0; i < scripts.length; i++) {
        var strScriptLink = scripts[i].getAttribute('src');
        if (strScriptLink != null && strScriptLink !== undefined) {
            if (strScriptLink.indexOf(strLink) >= 0) {
                IsCheck = false;
            }
        }
    }
    var strURL = PKLService.url() + strLink;
    if (IsCheck == true) {
        var jsLink = $("<script type='text/javascript' src='" + strURL + "'>");
        $("head").append(jsLink);
    }
}
$.fn.extend({
    downtime: function (options, callback) {
        var fCheckTimeExists = function (ArrTime, distance) {
            var intSeconds = Math.ceil((distance / 1000));
            var intSecondsFind = -1;
            for (var x = 0; x < ArrTime.length; x++) {
                if (intSeconds == ArrTime[x]) {
                    intSecondsFind = ArrTime[x];
                }
            }
            return intSecondsFind;
        }
        return this.each(function () {
            var defaults = {
                seconds: 5000,
                scope: null,
                expired: "EXPIRED",
                timeNow: new Date(),
                label: "",
                timeCallBack: [],
                data: {},
                callback: function () {
                },
                timeOut: function () {
                },
            }
            options = $.extend(defaults, options);
            options.scope = $(this);
            var countDownDate = new Date(options.timeNow).addSeconds(options.seconds);
            countDownDate = countDownDate.getTime();
            var x = setInterval(function () {

                var now = new Date().getTime();
                var distance = countDownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                var strHTML = "";

                if (options.customTime) {
                    strHTML += '<div class="down-time">';

                    if (days > 0) {
                        strHTML += '<div class="inline-block">';
                        strHTML += '<span>' + days + '</span>';
                        strHTML += '<span>' + translate.instant("CONTEST_LABEL_DAYS") + '</span>';
                        strHTML += '</div>';
                        strHTML += '<label class="dot">:</label>';
                    }

                    strHTML += '<div class="inline-block">';
                    strHTML += '<span>' + hours + '</span>';
                    strHTML += '<span>' + translate.instant("CONTEST_LABEL_HOURS") + '</span>';
                    strHTML += '</div>';
                    strHTML += '<label class="dot">:</label>';
                    strHTML += '<div class="inline-block">';
                    strHTML += '<span>' + minutes + '</span>';
                    strHTML += '<span>' + translate.instant("CONTEST_LABEL_MINUTES") + '</span>';
                    strHTML += '</div>';
                    strHTML += '<label class="dot">:</label>';
                    strHTML += '<div class="inline-block">';
                    strHTML += '<span>' + seconds + '</span>';
                    strHTML += '<span>' + translate.instant("CONTEST_LABEL_SECONDS") + '</span>';
                    strHTML += '</div>';
                    strHTML += '</div>';
                } else {
                    if (options.label.length > 0) {
                        strHTML = "<span class='time_label'>" + options.label + "</span>";
                    }

                    strHTML += "<span class='time_span'>";

                    if (days > 0) {
                        strHTML += "<span class='time_day'>" + days + "</span>" + translate.instant("SYSTEM_TIME_DAY_CHAR") + " ";
                    }

                    strHTML += "<span class='time_hours'>" + hours + "</span>";
                    strHTML += translate.instant("SYSTEM_TIME_HOUR_CHAR");
                    strHTML += " <span class='time_minutes'>" + minutes + "</span>";
                    strHTML += translate.instant("SYSTEM_TIME_MINUTES_CHAR");
                    strHTML += " <span class='time_seconds'>" + seconds + "</span>";
                    strHTML += translate.instant("SYSTEM_TIME_SECONDS_CHAR");
                }

                options.scope.html(strHTML);

                if (options.timeCallBack.length > 0) {
                    var intFind = fCheckTimeExists(options.timeCallBack, distance);
                    if (intFind > -1) {
                        options.callback.call(this, intFind, options.scope);
                    }
                }
                if (distance < 0) {
                    clearInterval(x);
                    options.scope.html(options.expired);
                    options.timeOut.call(this, options.data, options.scope);
                }
                callback();
            }, 1000);
        });
    },
    uptime: function (options) {
        return this.each(function () {
            var defaults = {
                startAt: "",
                scope: null,
                expired: "EXPIRED",
                timeNow: new Date(),
                label: "",
                timeCallBack: [],
                data: {},
                callback: function () {
                },
                timeOut: function () {
                },
            }
            options = $.extend(defaults, options);
            options.scope = $(this);
            var countDownDate = new Date(options.startAt);
            countDownDate = countDownDate.getTime();
            var timer = setInterval(function () {
                var now = new Date().getTime();
                var distance = Math.abs(now - countDownDate);
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                var strHTML = "";
                if (options.label.length > 0) {
                    strHTML = "<span class='time_label'>" + options.label + "</span>";
                }
                strHTML = strHTML + "<span class='time_span'>";
                if (days > 0) { strHTML = strHTML + "<span class='time_day'>" + days + "</span>" + translate.instant("SYSTEM_TIME_DAY_CHAR") + " "; }
                strHTML = strHTML + "<span class='time_hours'>" + hours + "</span>" + translate.instant("SYSTEM_TIME_HOUR_CHAR") + " <span class='time_minutes'>" + minutes + "</span>" + translate.instant("SYSTEM_TIME_MINUTES_CHAR") + " <span class='time_seconds'>" + seconds + "</span>" + translate.instant("SYSTEM_TIME_SECONDS_CHAR") + " </span>";
                options.scope.html(strHTML);
                options.timeOut.call(this, timer);
            }, 1000);

        });
    },
    DefaultButton: function (strButtonID) {
        return this.each(function () {
            $(this).keydown(function (event) {
                if (event.keyCode == 13) {
                    $("#" + strButtonID).click();
                    event.preventDefault();
                    return false;
                }
                return (event.keyCode != 13);
            });
        });
    },
    HandleChecked: function (c) {
        var defaults = {
            strAllControl: ".CLSCheckAll",
            strItemControl: ".CLSItem",
            OnChangeSelect: function () {

            }
        }
        options = $.extend(defaults, options);
        return this.each(function () {

            var listselect = $(this).find("input" + options.strItemControl);
            var fCountChange = function () {
                var out = 0;
                for (var i = 0; i < listselect.length; i++) {
                    if (listselect[i].checked == true) {
                        out = out + 1;
                    }
                }
                return out;
            }
            $(this).find("input" + options.strAllControl).bind("change", function () {
                for (var i = 0; i < listselect.length; i++) {
                    listselect[i].checked = this.checked;
                    $(listselect[i]).change();
                }
                options.OnChangeSelect.call(this, fCountChange());
            });
            listselect.bind("change", function () {
                options.OnChangeSelect.call(this, fCountChange());
            });

        });
    },
    paging: function (options) {

        var defaults = {
            url: "",//ony url name, not para
            data: {},
            source: [],
            OnRender: function (data, scope, pageInfo) {
            },
            config: {},//optionConfig
            label: {},//optionLabel
            pageSize: 10,
            currPage: 0,
            pageMargin: 2,
            strCSS: "",
            loading: null,
            fullLoading: false,
            urlRender: false
        }
        options = $.extend(defaults, options);
        var optionConfig = {
            totalRecode: "Meta.Total",
            metaCurrPage: "Meta.Page",
            apiCurrPage: "Page",
            apiPageSize: "PageSize",
            changePageSize: false,
            urlInit: false,
            urlInitPara: "IsInitPaging"//ony access true or false

        }
        var optionLabel = {
            totalRecode: false
        }
        options.config = $.extend(optionConfig, options.config);
        options.label = $.extend(optionLabel, options.label);
        var ArrConfig = {
            intTotalPage: 0,
            intCurrPage: 1,
            intPageSize: 10,
            intTotalRecode: 10,
            scope: null,
            urlRender: false,
            intRowFrom: 0,
            intRowTo: 0,
            showGoPage: false,
            countRequest: 0
        }
        ArrConfig.intPageSize = options.pageSize;
        if (options.currPage > 0) {
            ArrConfig.intCurrPage = options.currPage;
        }
        var fCheckLastChar = function (strCheck, strValue) { if (strValue[strValue.length - 1] == strCheck) { return true; } else { return false; } }
        var fPullURL = function () {
            var localsplit = window.document.URL.toString().split("?"); var strURL = localsplit[0] + "?";
            if (localsplit.length > 1) { var split = localsplit[1].split("&"); for (var x = 0; x < split.length; x++) { var value = split[x].split("="); if (value.length > 0 && value[0].toString().toLowerCase() != options.config.apiCurrPage.toLowerCase() && value[0].toString().toLowerCase() != options.config.apiPageSize.toLowerCase()) { if (value.length > 1) { strURL = strURL + value[0] + "=" + value[1]; } else { strURL = strURL + value[0]; } } if (x < split.length - 1 && fCheckLastChar("&", strURL) == false) { strURL = strURL + "&"; } } }
            if (fCheckLastChar("&", strURL) == false) { strURL = strURL + "&"; }
            strURL = strURL + options.config.apiCurrPage + "=" + ArrConfig.intCurrPage + "&" + options.config.apiPageSize + "=" + ArrConfig.intPageSize;
            //window.history.pushState("", "", strURL);
        }
        var fDownloadData = function () {
            if (options.url.length > 0) {
                var ArrObject = PKLService.swithObject(options.data);
                var strURL = options.url;

                if (strURL.indexOf("?") < 0) {
                    strURL += "?";
                }

                for (var i = 0; i < ArrObject.length; i++) {
                    strURL = strURL + ArrObject[i].key + "=" + encodeURI(ArrObject[i].value); if (i < ArrObject.length - 1) { strURL = strURL + "&"; }
                }
                strURL = strURL + "&" + options.config.apiCurrPage + "=" + ArrConfig.intCurrPage + "&" + options.config.apiPageSize + "=" + ArrConfig.intPageSize;
                if (options.config.urlInit == true) {
                    if (ArrConfig.countRequest == 0) {
                        strURL = strURL + "&" + options.config.urlInitPara + "=true";
                    }
                    else {
                        strURL = strURL + "&" + options.config.urlInitPara + "=false";
                    }
                    ArrConfig.countRequest = ArrConfig.countRequest + 1;
                }

                var loading = ArrConfig.scope;
                var isShowAjaxLoading = true;

                // fullLoading: is show loading full screen
                // isShowAjaxLoading: show loading
                // loading: selector container of loading

                if (options.fullLoading == null) {
                    isShowAjaxLoading = false;
                } else if (options.fullLoading == true) {
                    loading = null;
                } else if (options.loading != null) {
                    loading = options.loading;
                }

                PKLService.get({
                    cache: options.cache,
                    url: strURL,
                    loading: loading,
                    isShowLoading: isShowAjaxLoading,
                    OnSuccess: function (data) {
                        if (options.urlRender == true) { fPullURL(); }

                        try {
                            ArrConfig.intTotalRecode = parseInt(eval("data." + options.config.totalRecode));
                        } catch (e) {
                            ArrConfig.intTotalRecode = 0;
                        }

                        if (options.config.urlInit == true) {
                            var _intCurrPage = parseInt(eval("data." + options.config.metaCurrPage));
                            if (_intCurrPage != undefined) {
                                ArrConfig.intCurrPage = parseInt(_intCurrPage);
                            }
                            //ArrConfig.intCurrPage = parseInt(eval("data." + options.config.totalRecode));
                        }
                        ArrConfig.intTotalPage = Math.ceil(ArrConfig.intTotalRecode / ArrConfig.intPageSize);
                        ArrConfig.intRowFrom = (ArrConfig.intCurrPage - 1) * ArrConfig.intPageSize + 1;
                        ArrConfig.intRowTo = ArrConfig.intCurrPage * ArrConfig.intPageSize;
                        options.OnRender.call(this, data.Data, ArrConfig.scope.find(".data-gridview-paging"),
                            { currPage: ArrConfig.intCurrPage, pageSize: ArrConfig.intPageSize, totalRecode: ArrConfig.intTotalPage, intRowFrom: ArrConfig.intRowFrom, intRowTo: ArrConfig.intRowTo });
                        if (ArrConfig.intTotalRecode > 0 && (ArrConfig.intTotalPage > 1 || options.config.changePageSize == true)) {
                            fRenderPaging();
                        }
                        else {
                            ArrConfig.scope.find(".pagination").html("");
                        }
                    }
                });
            }
            else {
                ArrConfig.intTotalRecode = options.source.length;
                ArrConfig.intTotalPage = Math.ceil(ArrConfig.intTotalRecode / ArrConfig.intPageSize);
                var intRowFrom = (ArrConfig.intCurrPage - 1) * ArrConfig.intPageSize + 1;
                var intRowTo = ArrConfig.intCurrPage * ArrConfig.intPageSize;
                ArrConfig.intRowFrom = intRowFrom;
                ArrConfig.intRowTo = intRowTo;
                var ArrSplit = [];
                for (var i = intRowFrom; i <= intRowTo; i++) {
                    if (i <= options.source.length) { ArrSplit.push(options.source[i - 1]); }
                }
                options.OnRender.call(this, ArrSplit, ArrConfig.scope.find(".data-gridview-paging"), { currPage: ArrConfig.intCurrPage, pageSize: ArrConfig.intPageSize, totalRecode: ArrConfig.intTotalPage });
                if (ArrConfig.intTotalRecode > 0 && (ArrConfig.intTotalPage > 1 || options.config.changePageSize == true)) {
                    fRenderPaging();
                }
                else {
                    ArrConfig.scope.find(".pagination").html("");
                }

            }

        }
        var fRenderPaging = function () {
            var strHTML = '';
            var IsPrevPage = true;
            var intForSend = 0;
            if (ArrConfig.intCurrPage == 1) {
                IsPrevPage = false;
            }
            strHTML = strHTML + '<li class="' + $.fn.isVal(IsPrevPage, true, "page-item", "disabled") + '"><a class="page-link"  data="--"><i class="fa fa-angle-double-left"></i></a></li></a></li>';
            strHTML = strHTML + '<li class="' + $.fn.isVal(IsPrevPage, true, "page-item", "disabled") + '"><a class="page-link"  data="-"><i class="fa fa-angle-left"></i></a></li>';
            for (var i = (ArrConfig.intCurrPage - options.pageMargin); i < ArrConfig.intCurrPage; i++) {
                if (i != ArrConfig.intCurrPage && i > 0) { strHTML = strHTML + '<li class="page-item"><a class="page-link number" data="' + i + '">' + i + '</a></li>'; }
            }
            strHTML = strHTML + '<li class="active"><a class="page-link number" data="' + ArrConfig.intCurrPage + '">' + ArrConfig.intCurrPage + '</a></li>';
            for (var i = ArrConfig.intCurrPage; i <= (ArrConfig.intCurrPage + options.pageMargin); i++) {
                if (i != ArrConfig.intCurrPage && i <= ArrConfig.intTotalPage) { strHTML = strHTML + '<li class="page-item"><a class="page-link number" data="' + i + '">' + i + '</a></li>'; }
            }
            var IsLastPage = false;
            if ((ArrConfig.intCurrPage + 1) <= ArrConfig.intTotalPage) { IsLastPage = true; }
            strHTML = strHTML + '<li class="' + $.fn.isVal(IsLastPage, true, "page-item", "disabled") + '"><a class="page-link" data="+"><i class="fa fa-angle-right"></i></a></li>';
            strHTML = strHTML + '<li class="' + $.fn.isVal(IsLastPage, true, "page-item", "disabled") + '"><a class="page-link" data="++"><i class="fa fa-angle-double-right"></i></a></li>';
            if (options.showGoPage == true && ArrConfig.intTotalPage >= ((options.pageMargin * 2) + 1)) {
                strHTML = strHTML + '<li class="page-input"><span style="width:52px;"><input type="number" value="' + ArrConfig.intCurrPage + '"></span></li>';
                strHTML = strHTML + '<li class="page-item"><a class="page-link" data="GO">GO</a></li>';
            }
            if (options.config.changePageSize == true) {
                strHTML = strHTML + '<li class="page-input"><span><select class="form-control"><option value="5">5</option><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option></select></span></li>';
            }

            if (options.label.totalRecode == true) {
                strHTML = strHTML + "<li class='page-label'><b>[" + ArrConfig.intTotalRecode + "]</b></li>";
            }
            ArrConfig.scope.find(".pagination").html(strHTML);
            if (options.config.changePageSize == true) {
                var ddlPageSize = ArrConfig.scope.find(".pagination").find("select")[0];
                $(ddlPageSize).val(ArrConfig.intPageSize);
                if ($(ddlPageSize).val() == null) {
                    $(ddlPageSize).append("<option value='" + ArrConfig.intPageSize + "'>" + ArrConfig.intPageSize + "</option>");
                    $(ddlPageSize).val(ArrConfig.intPageSize);
                }
                ArrConfig.scope.find(".pagination").find("select").bind("change", function () {
                    options.pageSize = $(this).getNumber();
                    ArrConfig.intPageSize = options.pageSize;
                    ArrConfig.intCurrPage = 1;
                    fDownloadData();
                });
            }
            // trigger add by anhnc1
            ArrConfig.scope.find(".pagination").find("li a.number").click(function (event, data) {
                if (data) {
                    console.info("Action:", data.action);
                    ArrConfig.intCurrPage = data.currentPage;
                    fDownloadData();
                    return;
                }
            });
            ArrConfig.scope.find(".pagination").find("li.page-item a").click(function () {
                var strAction = $(this).attr("data");
                if (strAction == "GO") {
                    var input = ArrConfig.scope.find(".pagination").find("input")[0];
                    var intGoPage = $(input).getNumber();
                    if (intGoPage >= 1 && intGoPage <= ArrConfig.intTotalPage) { ArrConfig.intCurrPage = intGoPage; fDownloadData(); }
                    else { $(input).focus(); }
                }
                else {
                    if (strAction == "+") { ArrConfig.intCurrPage = ArrConfig.intCurrPage + 1; if (ArrConfig.intCurrPage > ArrConfig.intTotalPage) { ArrConfig.intCurrPage = 1; } }
                    else if (strAction == "++") { ArrConfig.intCurrPage = ArrConfig.intTotalPage; }
                    else if (strAction == "-") { ArrConfig.intCurrPage = ArrConfig.intCurrPage - 1; if (ArrConfig.intCurrPage < 1) { ArrConfig.intCurrPage = ArrConfig.intTotalPage; } }
                    else if (strAction == "--") { ArrConfig.intCurrPage = 1; } else { ArrConfig.intCurrPage = strAction.getNumber(); }
                    fDownloadData();
                }
            });

        }
        return this.each(function () {
            ArrConfig.scope = $(this);
            $(this).html('<div class="data-gridview-paging"></div><div class="col-md-12 text-center paging-common"><ul class="pagination" style="' + options.strCSS + '"></ul></div>');
            if (options.urlRender == true) {
                var intCurrPage = PKLService.getURLParameters(options.config.apiCurrPage);
                var intPageSize = PKLService.getURLParameters(options.config.apiPageSize);
                if (intCurrPage != null) { ArrConfig.intCurrPage = parseInt(intCurrPage); }
                if (intPageSize != null) { ArrConfig.intPageSize = parseInt(intPageSize); }
            }
            fDownloadData();
        });

    },
    translate: function () {
        //Translate label: <translate>SERVER_MSG_5006</translate>
        //Translate attr: <input translate='title' title='SERVER_MSG_5006'>
        var html = $(this).find("translate:not([label-init='true'])");
        for (var i = 0; i < html.length; i++) {
            var value = $(html[i]).text();
            $(html[i]).html(translate.instant(value)).attr("label-init", "true");
            $(html[i]).html(translate.instant(value)).attr("translate-code", value);
        }
        var attr = $(this).find("[translate]");
        for (var i = 0; i < attr.length; i++) {
            var strAttrName = $(attr[i]).attr("translate");
            if ($(attr[i]).attr("label-init") == undefined) {
                if (strAttrName != undefined) {
                    var strLabel = $(attr[i]).attr(strAttrName);
                    var strText = translate.instant(strLabel);
                    $(attr[i]).attr(strAttrName, strText);
                    $(attr[i]).attr("label-init", "true").attr("translate-code", strLabel);
                }
            }
        }
    },
    getNumber: function () {
        var strValue = $(this).val();
        if (strValue == "") { strValue = $(this).html(); }
        if (strValue == undefined) { strValue = "0"; }
        strValue = strValue.replaceAll(",", "");
        var dblReturn = parseFloat(strValue);
        if (isNaN(dblReturn)) { return 0; }
        else return dblReturn;
    },
    getDateString: function () {
        if ($(this).isDate() == false) { return null; }
        else { var dtmDateValue = new Date($(this).val()); if (dtmDateValue.getDate() < 10) { return "0" + dtmDateValue.getDate() + ' ' + dtmDateValue.getMonthName() + ' ' + dtmDateValue.getFullYear(); } else { return dtmDateValue.getDate() + ' ' + dtmDateValue.getMonthName() + ' ' + dtmDateValue.getFullYear(); } }
    },
    isNumber: function () {
        var strValue = $(this).val();
        strValue = strValue.Replace(",", "");
        strValue = strValue.trim();
        if (strValue.length == 0) { return false; }
        else { return !isNaN(strValue); }
    },
    isDate: function () {
        var strValue = $(this).val();
        var date = strValue;
        return !!(function (d) { return (d !== 'Invalid Date' && !isNaN(d)) })(new Date(date));
    },
    isEmail: function () {
        var strValue = $(this).val();
        if (strValue.length < 3) { return false; }
        else { var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; return emailReg.test(this.toString()); }
    },
    autoReSize: function () {
        return this.each(function () {
            $(this).attr("disabled", "").css({ "width": "100%" });
            if (this.scrollHeight > 0) {
                $(this).css({ height: (this.scrollHeight + 5) + "px", "border": "none", "background-color": "transparent", "resize": "none" });
            }
            else {
                $(this).hide();
                setTimeout(function (scope) {
                    $(scope).show();
                    $(scope).css({ height: (scope.scrollHeight) + "px", "border": "none", "background-color": "transparent", "resize": "none" });
                }, 500, this);
            }

        });
    }
});

///EXTEND JAVASCRIPT TYPE
//REPLACE STRING A TO B
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};
//GET NUMBER OF DAY IN DATE BETWWEEN
Number.prototype.between = function (a, b) {
    var min = Math.min.apply(Math, [a, b]),
        max = Math.max.apply(Math, [a, b]);
    return this >= min && this <= max;
};
Date.prototype.addSeconds = function (seconds) {
    this.setSeconds(this.getSeconds() + seconds);
    return this;
};

Date.prototype.addMinutes = function (minutes) {
    this.setMinutes(this.getMinutes() + minutes);
    return this;
};
//ADD DAY TO DATE
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}
//GET DATE STRING
Date.prototype.getDateString = function () {
    if (this.getDate() < 10) {
        return "0" + this.getDate() + ' ' + this.getMonthName() + ' ' + this.getFullYear();
    } else {
        return this.getDate() + ' ' + this.getMonthName() + ' ' + this.getFullYear();
    }
}

String.prototype.getJSONDate = function () {
    var jsonDateString = this.toString();
    var dtmDateSet = new Date(parseInt(jsonDateString.replace('/Date(', '')));
    console.log()
    return dtmDateSet.getDateString();
}
Date.prototype.getMonthName = function () {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[this.getMonth()];
};
Date.prototype.getDayName = function () {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[this.getDay()];
};

String.prototype.getLocalDate = function () {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var momentDate = moment(this, "YYYY-MM-DD HH:mm:ss [GMT]ZZ").locale((LANG_CURRENT == 'jp') ? "ja" : LANG_CURRENT);
    var dtmDate = new Date(momentDate);

    if (dtmDate.getHours() >= 0) {
        var __date = momentDate.format("MMM DD, YYYY HH:mm:ss A [GMT]ZZ");
        return __date.replace(/(.*?)(GMT.*$)/, function (realText, group1, group2) {
            return group1 + group2.replace(/0/gi, "");
        });
    }
    else {
        if (PKLService.ArrConfig.strLangCode == "en") { return dtmDate.toLocaleDateString('en-US', options); }
        else { return dtmDate.toLocaleDateString('ja', options); }
    }

}
//CHECK STRING HAS EMAIL
String.prototype.isEmail = function () {
    var strValue = this;
    if (strValue.length < 3) {
        return false;
    }
    else {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(this.toString());
    }
}
String.prototype.getNumber = function () {
    var strValue = this;
    if (strValue == "") { strValue = $(this).html(); }
    if (strValue == undefined) { strValue = "0"; }
    strValue = strValue.replaceAll(",", "");
    var dblReturn = parseFloat(strValue);
    if (isNaN(dblReturn)) { return 0; }
    else return dblReturn;
}
$.fn.isVal = function (strValueCheck, ObjHasCheck, strTrueValue, strFalseValue) {
    if (strValueCheck == ObjHasCheck) { return strTrueValue; }
    else { if (strFalseValue == undefined) { return strValueCheck; } else { return strFalseValue; } }
}
// AnhNC1
String.prototype.getDate = function () {
    var strDate = this.toString();
    var dtmNewDate = moment(strDate);
    return new Date(dtmNewDate);
}
String.prototype.render = function () {
    var otherData = (arguments && arguments[0]) || window;
    function getValue(obj, query) {
        var arr = query.split(".");
        while (arr.length && (obj = obj[arr.shift()]))
            ;
        return obj;
    }
    return this.replace(/{{.*?}}/g, function (variableName) {
        try {
            var tempName = variableName.replace(/{|}/gi, "");
            if (/(.*?)/.test(tempName)) {
                tempName = tempName.replace(/\((.*?)\)/, "(getValue(otherData, \"$1\"))");
                tempName = tempName.trim();
            }
            return getValue(otherData, tempName) || eval(tempName) || variableName;
        } catch (e) {
            console.error(new Error("Sai cú pháp: " + e.message));
        }
    });
}
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    //EX ArrBookingDate.remove(intRowID);
    return this.push.apply(this, rest);
};
String.prototype.removeDot = function () {
    var strMessage = this;
    if (!strMessage) return strMessage;
    var lastDot = strMessage.lastIndexOf(".");
    if (lastDot) return strMessage.slice(0, lastDot);
    return strMessage;
}
String.prototype.translate = function () {
    var strMessage = this;
    var strCode = /(SERVER_MSG_\d+)/g;
    if (strCode.test(strMessage)) {
        var groupMessage = strMessage.match(strCode);
        groupMessage.forEach(function (msg) {
            strMessage = strMessage.replace(msg, translate.instant(msg));
        });
    }
    return strMessage;
}
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}
window.addEventListener("resize", function () {
    var panel = $("body .el-loading-in-content")
    for (var x = 0; x < panel.length; x++) {
        var requestid = $(panel[x]).attr("control-effect-index");
        if (requestid != undefined) {
            var item = PKLService.loading.findRequest(requestid);
            if (item != null) {
                $(panel[x]).css({
                    "width": $(item.scope).width() + "px", "height": $(item.scope).height() + "px"
                });
            }
        }
    }
});

/* pollyfill for trimEnd which supports any browser (such as IE) that don't support that officially */

if (!String.prototype.trimEnd) {
    String.prototype.trimEnd = function () {
        return this.replace(/\s+$/, "");
    };
};

$.fn.trimmedHtml = function () {
    //include text nodes as well
    this.contents().toArray().reverse().every(function (e) {
        var goon = $(e).text().trim() == "";
        if (goon) $(e).remove();
        else {
            //only care about elements, the text nodes at the end should be trimmed later.
            var ehtml = $(e).html();
            if (ehtml) {
                $(e).html(ehtml.replace(/((&nbsp;\s*)|\s)+$/, ""));
            }
        }
        return goon;
    });
    return this.html().trimEnd();
}

String.prototype.trimEndHTML = function () {
    return $("<div>").html(this).trimmedHtml();
}

//excludedKeys: an array of all style keys (in JS form) that should be excluded
//resolveValue: a callback to be called each time resolving a value for a style key, having one argument of style key (in CSS form).
//that callback should return undefined to not overriding any, otherwise the return value will override the original value.
HTMLElement.prototype.extractComputedStyle = function (excludedKeys, resolveValue) {
    var tag = this.tagName;
    var ifr = document.createElement("iframe");
    //ensure that the dummy iframe will not be shown someway
    ifr.style.cssText = "display: none !important";
    //this is required before we can extract the default style
    document.body.appendChild(ifr);
    var cw = ifr.contentWindow;
    var cwd = cw.document;
    var dummyE = cwd.createElement(tag);
    cwd.body.appendChild(dummyE);
    var defaultStyle = cw.getComputedStyle(dummyE);
    var currentStyle = getComputedStyle(this);

    var modifiedProps = Object.keys(defaultStyle).filter(function (e) {
        return (!/\d+/.test(e)) && defaultStyle[e] != currentStyle[e] && !excludedKeys.includes(e);
    });
    //remove the dummy iframe, NOTE: this should be removed only 
    //after processing all with the default style
    document.body.removeChild(ifr);

    var modifiedCss = modifiedProps.map(function (e) {
        //this cool line of code is not supported by some browsers (for lookbehind pattern in Regex)
        //var key = e.replace(/(?<=[a-z])[A-Z]/g, function (m) { return "-" + m.toLowerCase(); });
        var key = e.replace(/[a-z][A-Z]/g, function (m) { return m[0] + "-" + m[1].toLowerCase(); });

        if (key.startsWith("webkit")) {
            key = "-" + key;
        }
        var resolvedValue = resolveValue ? resolveValue(key) : undefined;

        return key + ": " + (resolvedValue === undefined ? currentStyle[e] : resolvedValue);
    }).join(";");
    return modifiedCss;
};

HTMLElement.prototype.getHTMLWithCurrentStyle = function () {
    var tag = this.tagName;
    var modifiedCss = this.extractComputedStyle();
    var html = this.outerHTML;
    html = html.replace(new RegExp("^\<" + tag, "i"), "$& style='" + modifiedCss + "'");
    return html;
};

HTMLElement.prototype.genInnerHTMLWithCurrentStyle = function (wrapperTag) {
    wrapperTag = wrapperTag || "div";
    var tag = this.tagName;
    var f = HTMLElement.prototype.extractComputedStyle.bind(this);
    var modifiedCss = f();
    var html = this.innerHTML;
    return "<" + wrapperTag + " style='" + modifiedCss + "'>" + html + "</" + wrapperTag + ">";
};

HTMLElement.prototype.embedComputedStyle = function (excludedKeys, resolveValue) {
    var f = HTMLElement.prototype.extractComputedStyle.bind(this);
    var modifiedCss = f(excludedKeys, resolveValue);
    this.setAttribute("style", modifiedCss);
}

function extendTinymce(tinymce) {

    tinymce.getStyledContent = function (editor) {
        editor = editor || this.editors[0];
        var ib = editor.iframeElement.contentWindow.document.body;
        var excludedKeys = ["webkitUserModify", "blockSize", "height", "webkitLogicalHeight", "webkitLogicalWidth"];
        $(ib).find("*").each(function () {
            if (this.tagName === "IMG") {
                this.style.maxWidth = "100%";
                this.removeAttribute("height");//prevent constraint by height
            }
            HTMLElement.prototype.embedComputedStyle.bind(this)(excludedKeys, function (key) {
                if (key == "width") return "auto";
                return undefined;
            });
        });
        return $(ib).html();
        //var f = HTMLElement.prototype.genInnerHTMLWithCurrentStyle.bind(ib);
        //return f();//.replace(/^\<body/, "<div").replace(/body\>$/, "div>");
    }
}

var imgComment = '/Themes/TheCodeCamppro/assets/code-learn/comment.svg?v=11';
var imgUser = '/Themes/TheCodeCamppro/assets/code-learn/user-challenges.svg?v=11';
var imgTaskPoint = '/Themes/TheCodeCamppro/assets/code-learn/task-point.svg?v=11';
var imgDone = '/Themes/TheCodeCamppro/assets/code-learn/done.svg';
var imgIncomplete = '/Themes/TheCodeCamppro/assets/code-learn/incomplete.svg';

$.Templates = {
    formatShortDate: function (date) {
        return new Intl.DateTimeFormat("en-US", {
            year: 'numeric', month: 'short', day: 'numeric'
        }).format(date);
    },
    createTag: function (str) {
        if (str == '') {
            return '';
        }

        var arr = str.split(',');
        txt = '';
        for (var i = 0; i < arr.length; i++) {
            txt += '<span class="tag tag-default">' + arr[i] + '</span>';
        }
        return txt;
    },
    renderTaskSummary: function (taskItem, hasCompletedByCurrentUser, hasIncompletedByCurrentUser, actionLink, fixTitle, convertHtml) {
        var done = hasCompletedByCurrentUser ? '<img class="img-done" src="' + imgDone + '"/>' : "";
        var incomplete = hasIncompletedByCurrentUser ? '<img class="img-done" src="' + imgIncomplete + '"/>' : "";
        var name = taskItem.Name.substring(0, fixTitle) + (taskItem.Name.length > fixTitle ? '...' : '');
        var avatarBoxClass = taskItem.UserLevel.IsAdmin ? " admin" : taskItem.UserLevel.IsContributor ? " contributor" : "";
        var html = '<div class="card-body text-primary">\
                                '+ done + incomplete + '<table class="task">\
                                    <tr>\
        		                        <td class="task-creator">\
                                            <div class="task-infor"><a class="task-name" href="' + actionLink + taskItem.Id + '" title="' + taskItem.Name + '" class="task-title">' + name + '</a>\
                                            <span class="badge badge-secondary '+ taskItem.Level.toLowerCase() + '">' + translate.status(taskItem.Level) + '</span></div>\
                                        </td>\
                                    </tr>\
                                    <tr>\
        		                        <td class="tag-info">\
                                            <p class="tag-info">'+ this.createTag(taskItem.Tags) + '</p>\
                                        </td>\
                                    </tr>\
	                                <tr>\
		                                <td class="task-creator-label' + avatarBoxClass + '">\
                                            <img src="' + taskItem.CreatorAvatarUrl.replace("~", "") + '" class="user-avatar"/>\
                                        </td>\
	                                </tr>\
                                    <tr>\
		                                <td>\
                                            <a class="owner" href='+ cvUrl + taskItem.CreatorUserId + '>' + taskItem.AccountName + '</a>\
                                        </td>\
	                                </tr>\
                                </table>\
                                <div class="container-info">\
                                        <table class="task-info"><tr>\
                                            <td>\
                                                <img class="img-student" src="'+ imgUser + '">\
                                                <span class="span-user-submit">'+ taskItem.TotalUserCompleted + '/' + taskItem.TotalUserSubmitted + '</span>\
                                            </td>\
                                            <td>\
                                                <img class="img-comment" src="'+ imgComment + '">\
                                                <span class="span-comment">'+ taskItem.TotalComments + '</span>\
                                            </td>\
                                            <td>\
                                                <img class="img-point" src="'+ imgTaskPoint + '">\
                                                <span class="task-point">' + taskItem.Point + '</span>\
                                            </td>\
                                        <tr/></table>\
                                </div>\
                            </div>';

        if (convertHtml) html = convertHtml(html);
        return html;
    },
    renderCountDownTimeDisplay: function (totalRemainingSeconds, withWrapper) {
        withWrapper = withWrapper || false;
        var days = Math.floor(totalRemainingSeconds / 86400);
        totalRemainingSeconds -= days * 86400;
        var hours = Math.floor(totalRemainingSeconds / 3600);
        totalRemainingSeconds -= hours * 3600;
        var minutes = Math.floor(totalRemainingSeconds / 60);
        var seconds = totalRemainingSeconds - minutes * 60;
        var parts = [
            "<div class='count-down-part count-down-days' data-label='Days'>" + days + "</div>",
            "<div class='count-down-part count-down-hours' data-label='Hours'>" + hours + "</div>",
            "<div class='count-down-part count-down-minutes' data-label='Minutes'>" + minutes + "</div>",
            "<div class='count-down-part count-down-seconds' data-label='Seconds'>" + seconds + "</div>"
        ];
        var html = parts.join(":");
        return withWrapper ? "<div>" + html + "</div>" : html;
    }
}