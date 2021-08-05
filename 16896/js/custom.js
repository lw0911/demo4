
$(document).ready(function () {

    //菜单手机端折叠与展开
    $(".navbar-toggle-zdy").click(function () {
        if ($(".navbar-collapse-zdy").is(":visible")) {
            $(".navbar-collapse-zdy").hide();
            var htmlStr = "";
            htmlStr += '<span class="sr-only">Toggle Navigation</span>';
            htmlStr += '<span class="icon-bar icon-bar-zdy"></span>';
            htmlStr += '<span class="icon-bar icon-bar-zdy"></span>';
            htmlStr += '<span class="icon-bar icon-bar-zdy"></span>';
            $(this).html(htmlStr);
            $(this).removeClass("mar0 noborder");

        } else {
            $(".navbar-collapse-zdy").show();
            var htmlStr = "";
            htmlStr += '<span class="sr-only">Toggle Navigation</span>';
            htmlStr += '<span class="meanclose">X</span>';
            $(this).html(htmlStr);
            $(this).addClass("mar0 noborder");

        }
    });

    //banner自动轮播 
    $("#slider3").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });

    //网站开发业务范围
    $(".tab-tit .tab-tit-item").each(function () {
        $(this).hover(function () {
            $(".tab-tit .tab-tit-item").removeClass("active");
            $(this).addClass("active");

            var index = $(this).attr("data");
            $(".tab-con .tab-con-item").hide();
            $(".tab-con #tab-con-item-" + index + "").show();
        });
        $(this).click(function () {
            $(".tab-tit .tab-tit-item").removeClass("active");
            $(this).addClass("active");

            var index = $(this).attr("data");
            $(".tab-con .tab-con-item").hide();
            $(".tab-con #tab-con-item-" + index + "").show();
        });
    });

    //右侧导航
    $(".guanzhu").hover(function () {
        $(".ewm_div").show();
    }, function () {
        $(".ewm_div").hide();
    });
    $(".kefu").click(function () {
        window.open('http://p.qiao.baidu.com/cps/chat?siteId=11847048&userId=25381448');
    });
    $(".top").click(function () {
        location.href = '#';
    });

    //页面动画js代码
    window.sr = new scrollReveal({
        //reset: true,
        move: '200px',
        mobile: true
    });
});


