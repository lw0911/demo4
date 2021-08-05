
function setCookie(name, value, expires, domain, path) {
    if (expires) {
        expires = new Date(+new Date() + expires);
    } else {
        expires = new Date(+new Date() + 31536000000);
    }
    var tempcookie = name + '=' + encodeURIComponent(value) +
        ((expires) ? '; expires=' + expires.toGMTString() : '') +
        ((path) ? '; path=' + path : '; path=/') +
        ((domain) ? '; domain=' + domain : '; domain=' + document.domain);

    if (tempcookie.length < 4096) {
        document.cookie = tempcookie;
    }
}
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return decodeURIComponent(arr[2]);
    } else {
        return null;
    }
}
function isMobile() {
    var result = false;
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || (window.screen.height >= 768 && window.screen.width >= 1024)) {
        result = false;
    }
    else if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        result = true;
    }
    else {
        result = false;
    }
    return result;
}

// 内容页
function setFont(val) {
    $('#content').css('fontFamily', val);
    setCookie('fontFamily', val);
}
function setFontColor(val) {
    $('#content').css('color', val);
    setCookie('fontColor', val);
}
function setSize(val, ele) {
    $('#content').css('fontSize', val);
    setCookie('fontSize', val);
    if (ele) {
        $(ele).addClass('active').siblings().removeClass('active');
    }
}
function setBg(val) {
    $('body').css('backgroundColor', val);
    setCookie('bg', val);
}
function setNight() {
    if ($('#readermode').attr('checked') == true) {
        $('body').css('backgroundColor', '#111111');
        $('.content').css('color', '#555555');
        setCookie('night', 1);
    } else {
        $('body').css('backgroundColor', '');
        $('.content').css('color', '');
        setCookie('night', 0);
    }
}
$('.select-font').change(function () {
    var val = $(this).val()
    setFont(val)
});
$('.select-color').change(function () {
    var val = $(this).val()
    setFontColor(val)
});
$('.select-size').change(function () {
    var val = $(this).val()
    setSize(val)
});
$('.select-bg').change(function () {
    var val = $(this).val()
    setBg(val)
});
// pc set night
$('#readermode').change(function () {
    setNight();
})

// mobile set night
$('#bgmode-light').click(function () {
    var hasCls = $('body').hasClass('nightmode');
    $('#bgmode-huyan').removeClass('active');
    if (hasCls) {
        setCookie('night', 0);
        $('body').removeClass('nightmode');
        $(this).html('开灯');
    } else {
        setCookie('night', 1);
        $('body').attr('class', 'nightmode');
        $(this).html('关灯');
    }
});
// 护眼模式
$('#bgmode-huyan').click(function () {
    var hasCls = $('body').hasClass('huyanmode');
    if (hasCls) {
        setCookie('night', 0);
        $('body').removeClass('huyanmode');
        $(this).removeClass('active');
    } else {
        setCookie('night', 2);
        $('body').attr('class', 'huyanmode');
        $(this).addClass('active');
    }
});

// 页面加载时，载入模式
if (isMobile()) {
    // 手机浏览
    var _size = getCookie('fontSize');
    var _night = getCookie('night');

    var sid = 2; // 触发文字大小按钮
    if (_size == '24px') {
        sid = 1;
    } else if (_size == '16px') {
        sid = 3;
    }
    $('.font-box span').eq(sid).click();

    if (_night == 1) {
        $('#bgmode-light').click();
    } else if (_night == 2) {
        $('#bgmode-huyan').click();
    }
} else {
    // pc浏览
    var _font = getCookie('fontFamily');
    var _color = getCookie('fontColor');
    var _size = getCookie('fontSize');
    var _bg = getCookie('bg');
    var _night = getCookie('night');

    $('.select-font option').each(function () {
        if ($(this).val() == _font) { $(this).attr('selected', 'selected'); }
    });
    $('.select-color option').each(function () {
        if ($(this).val() == _color) { $(this).attr('selected', 'selected'); }
    });
    $('.select-size option').each(function () {
        if ($(this).val() == _size) { $(this).attr('selected', 'selected'); }
    });
    $('.select-bg option').each(function () {
        if ($(this).val() == _bg) { $(this).attr('selected', 'selected'); }
    });
    setFont(_font);
    setFontColor(_color);
    setSize(_size);
    setBg(_bg);
    if (_night == 1) {
        $('#readermode').click();
        setNight()
    }
}

function addBookMarkByJs(chapterid, bookid, chaptername) {
    var currentBook = {
        BookId: bookid,
        ChapterId: chapterid,
        ChapterName: chaptername
    };
    var bookList = getBookcase();
    if (bookList != null && bookList != undefined) {
        var bookcount = getBookcaseCount(bookList);
        bookList[bookid] = currentBook;
        saveBookcase(bookList);
        if (bookcount > 10) {
            removeBookFromTop(bookcount - 10);
        }
    }
}


function removeBookFromTop(num) {
    var bookList = new Array();
    var strBookList = getCookie("booklist");
    if (strBookList != null && strBookList != undefined && strBookList.length > 0) {
        var arrBookList = strBookList.split(",");
        for (var i = num; i < arrBookList.length; i++) {
            var bookItem = JSON.parse(unescape(arrBookList[i]));
            bookList[bookItem.BookId] = bookItem;
        }
    }
    saveBookcase(bookList);
}

function getBookcaseCount(bookList) {
    var count = 0;
    if (bookList != null && bookList != undefined && bookList.length > 0) {
        for (var bookIndex in bookList) {
            count++;
        }
    }
    return count;
}

function saveBookcase(bookList) {
    if (bookList != null && bookList != undefined && bookList.length > 0) {
        var strCookieBookId = "";
        var strCookieBookList = "";
        for (var bookIndex in bookList) {
            strCookieBookId = strCookieBookId + "," + bookIndex;
            strCookieBookList = strCookieBookList + "," + escape(JSON.stringify(bookList[bookIndex]));
        }
        if (strCookieBookId.length > 0) {
            strCookieBookId = strCookieBookId.substring(1);
        }
        if (strCookieBookList.length > 0) {
            strCookieBookList = strCookieBookList.substring(1);
        }
        setCookie("bookid", strCookieBookId);
        setCookie("booklist", strCookieBookList);
    }
}

function convertBookData() {
    var bookInfoStr = getCookie("bookinfo");
    if (bookInfoStr != null && bookInfoStr != undefined) {
        var cookiesBookInfo = bookInfoStr.split("§§");
        if (cookiesBookInfo.length > 0) {
            for (var i = 0; i < cookiesBookInfo.length; i++) {
                var bookInfoItem = cookiesBookInfo[i].split("||");
                if (bookInfoItem.length == 3) {
                    addHistoryBookByManual2(bookInfoItem[1], bookInfoItem[0], bookInfoItem[2]);
                }
            }
        }
        delCookie("bookinfo");
    }
}

function getBookcase() {
    var bookList = new Array();
    var strBookList = getCookie("booklist");
    if (strBookList != null && strBookList != undefined && strBookList.length > 0) {
        var arrBookList = strBookList.split(",");
        for (var i = 0; i < arrBookList.length; i++) {
            var bookItem = JSON.parse(unescape(arrBookList[i]));
            bookList[bookItem.BookId] = bookItem;
        }
    }
    return bookList;
}

var bookUserName = getCookie("member_username");
function PCLogin() {
    if (bookUserName != null && bookUserName != undefined) {
        document.write('<div class="logined">');
        document.write('    ' + bookUserName + ' &nbsp;&nbsp;');
        document.write('<a href="/user/case.php"> 我的书架 </a> |');
        document.write('<a href="/logout.aspx"> 退出登录 </a>');
        document.write('</div>');
    } else {
        document.write('<form name="mylogin" class="topbar-login" method="post">');
        document.write('    <span>账号：</span> <input type="text" class="input-text" name="small-username" id="small-username" />');
        document.write('    <span>密码：</span> <input type="password" class="input-text" name="small-password" id="small-password" />');
        document.write('    <input type="button" onclick="loginbtn()" class="btn-submit" value=" " />');
        document.write('    <a href="/register.php">用户注册</a>');
        document.write('</form>');
    }
}

function MLogin() {
    if (bookUserName != null && bookUserName != undefined) {
        document.write(' Hi,  ' + bookUserName + ' &nbsp;&nbsp;');
        document.write('<a href="/user/case.php"> 我的书架 </a> |');
        document.write('<a href="/logout.aspx"> 退出登录 </a>');
    } else {
        document.write('<a href="/Login.php" class="btn"> 登陆 </a>');
        document.write('<a href="/register.php" class="btn"> 注册 </a>');
    }
}