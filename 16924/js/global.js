



///------------------------------------------------------------------------------------------------
$(function () {
    var touchHandler = function (e) {
            e.preventDefault();
        },
        body = $('body');

    // back top
    $('.toolbar-top a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '0px'}, 800);
    });

    $('.toolbar-wx').hover(function (e) {
        e.preventDefault();
        $(".showDetail").hide();
        $(".wx-detail").show();

    },function(e){
            console.log(e);
        $(".showDetail").hide();
    });
    $('.toolbar-lx').hover(function (e) {
        e.preventDefault();
        $(".showDetail").hide();
        $(".lx-detail").show();
    },function(e){
        e.preventDefault();
        $(".showDetail").hide();
    });

    // navbar menu
    $('.j-navbar-menu li').hover(function () {
        $(this).addClass('active');
    }, function () {
        $(this).removeClass('active');
    });

    // mobile navbar menu
    $('.j-mobile-navbar-expand').click(function (e) {
        e.preventDefault();

        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    });
    $('#J_MobileNavBar').click(function (e) {
        if(e.target.className === 'mobile-navbar hidden-lg') {
            if (body.hasClass('open')) {
                body.removeClass('open');
            } else {
                body.addClass('open');
            }
        }
    });


    $('#J_MobileNavTrigger').on('click', function (e) {
        e.preventDefault();

        if (body.hasClass('open-search')) {
            body.removeClass('open-search');
            $(this).siblings().removeClass('active');
        }

        if (body.hasClass('open')) {
            body.removeClass('open');
            $(body).css({"overflow":"auto"})
        } else {
            body.addClass('open');
        }
        var title_h=Math.floor(znum*100);
        $('#J_MobileNavBar').css("top",title_h+"px");
    });

    $('#J_MobileNavTrigger2').on('click', function (e) {
        e.preventDefault();

        if (body.hasClass('open-search')) {
            body.removeClass('open-search');
            $(this).siblings().removeClass('active');
        }

        if (body.hasClass('open')) {
            body.removeClass('open');
            $(body).css({"overflow":"auto"})
        } else {
            body.addClass('open');
            $('html, body').animate({scrollTop: '190px'}, 100);
        }

        var title_h=Math.floor(znum*105);
        $('#J_MobileNavBar').css("top",title_h+"px")
    });

    // mobile serach
    $('#J_MobileSearchTrigger').on('click', function (e) {
        e.preventDefault();

        if (body.hasClass('open')) {
            body.removeClass('open');
        }

        if (body.hasClass('open-search')) {
            $(this).removeClass('active');
            body.removeClass('open-search');
        } else {
            $(this).addClass('active');
            body.addClass('open-search');
        }
    });

    // case detail more
    $('#J_ShowCaseDetailFull').on('click', function (e) {
        e.preventDefault();
        var detail = $('#J_CaseDetail');

        if ($(this).hasClass('open')) {
            $(this).text('查看全文').removeClass('open');
            detail.removeClass('height-auto');
        } else {
            $(this).text('收起').addClass('open');
            detail.addClass('height-auto');
        }
    });

    // team detail list
    // $('.grid').masonry({
    //     itemSelector: '.grid-item',
    //     columnWidth: '.grid-sizer',
    //     percentPosition: true
    // });

    $('#J_MobileNavTrigger3').on("click",function (e) {
        e.preventDefault();
        $('#J_MobileNavBar').toggle();
        var title_h=Math.floor(znum*105);
        $('#J_MobileNavBar').css("top",title_h+"px")

    })

});