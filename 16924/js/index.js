
// // swiper
var tit_wow=0;
var titlebanner=new Swiper('.home-bg-00.pc-show', {
    initialSlide :1,
    speed:1000,
    autoplay: {
        delay: 7000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swp1',
    },
    navigation: {
        nextEl: '.home-bg-00.pc-show .swiper-button-next',
        prevEl: '.home-bg-00.pc-show .swiper-button-prev',
    },
    on: {
        slideChangeTransitionEnd: function(){
            if(tit_wow<3 && this.activeIndex !=1){

                var nth=this.activeIndex+1;
                var cur_sider=$(".home-bg-00 .swiper-slide:nth-child("+nth+") .w-p");

                if($(cur_sider).hasClass("w-p-r")){
                    $(cur_sider).removeClass("hidden");
                    $(cur_sider).children("p").eq(0).addClass("animated bounceInRight");
                    $(cur_sider).children("p").eq(1).addClass("animated bounceInRight delay-2s");
                    $(cur_sider).children("p").eq(2).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(3).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(4).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(5).addClass("animated fadeInDown delay-2s");
                }else if($(".home-bg-00 .swiper-slide:nth-child("+nth+") .w-p").hasClass("w-p-l")){
                    $(cur_sider).removeClass("hidden");
                    $(cur_sider).children("p").eq(0).addClass("animated bounceInLeft");
                    $(cur_sider).children("p").eq(1).addClass("animated bounceInLeft delay-2s");
                    $(cur_sider).children("p").eq(2).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(3).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(4).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(5).addClass("animated fadeInDown delay-2s");

                }
                tit_wow++;
            }
        },
    },
});


var titlebanner2=new Swiper('.home-bg-00.mobile-show', {
    initialSlide :1,
    speed:1000,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.home-bg-00.mobile-show .swiper-button-next',
        prevEl: '.home-bg-00.mobile-show .swiper-button-prev',
    },
    pagination: {
        el: '.mobile.swiper-pagination',
    },
    on: {
        slideChangeTransitionEnd: function(){
            if(tit_wow<3 && this.activeIndex !=1){
                var nth=this.activeIndex+1;
                var cur_sider=$(".home-bg-00 .swiper-slide:nth-child("+nth+") .w-p");

                if($(cur_sider).hasClass("w-p-r")){
                    $(cur_sider).removeClass("hidden");
                    $(cur_sider).children("p").eq(0).addClass("animated bounceInRight");
                    $(cur_sider).children("p").eq(1).addClass("animated bounceInRight delay-2s");
                    $(cur_sider).children("p").eq(2).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(3).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(4).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(5).addClass("animated fadeInDown delay-2s");
                }else if($(".home-bg-00 .swiper-slide:nth-child("+nth+") .w-p").hasClass("w-p-l")){
                    $(cur_sider).removeClass("hidden");
                    $(cur_sider).children("p").eq(0).addClass("animated bounceInLeft");
                    $(cur_sider).children("p").eq(1).addClass("animated bounceInLeft delay-2s");
                    $(cur_sider).children("p").eq(2).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(3).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(4).addClass("animated fadeInDown delay-2s");
                    $(cur_sider).children("p").eq(5).addClass("animated fadeInDown delay-2s");

                }
                tit_wow++;
            }
        },
    },
});



titlebanner.el.onmouseover=function(){
    titlebanner.navigation.$nextEl.removeClass('hide');
    titlebanner.navigation.$prevEl.removeClass('hide');
}
titlebanner.el.onmouseout=function(){
    titlebanner.navigation.$nextEl.addClass('hide');
    titlebanner.navigation.$prevEl.addClass('hide');
}

var homeCase = new Swiper('.home-case .swiper-container', {
   speed:1000,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.home-case .sw2_r',
        prevEl: '.home-case .sw2_l',
    },
    pagination: {
        el: '.swp2',
    },
    //     pagination: '.home-case .swiper-pagination',
    //     paginationClickable: true,
    //     nextButton: '.home-case .swiper-button-next',
    //     prevButton: '.home-case .swiper-button-prev',
        loop: true
});


$('.case-list .swiper-button-next, .case-gallery .swiper-button-next').on('click', function (e) {
    e.preventDefault();
    caseList.slideNext();
    caseGallery.slideNext();
});

$('.case-list .swiper-button-prev, .case-gallery .swiper-button-prev').on('click', function (e) {
    e.preventDefault();
    caseList.slidePrev();
    caseGallery.slidePrev();
});



function updateNavPosition(index) {
    $('.gallery-thumbs .swiper-slide').eq(index).addClass('gallery-thumbs-nav').siblings().removeClass('gallery-thumbs-nav');

    var activeNav = $('.gallery-thumbs .gallery-thumbs-nav');

    if (!activeNav.hasClass('swiper-slide-visible')) {
        if (activeNav.index() > galleryThumbs.activeIndex) {
            var thumbsPerNav = Math.floor(galleryThumbs.width / activeNav.width()) - 1;
            galleryThumbs.slideTo(activeNav.index() - thumbsPerNav);
        } else {
            galleryThumbs.slideTo(activeNav.index());
        }
    }
}

// $('#alert-cls').on('click', function (e) {
//     e.preventDefault();
//     alertshow();
// });
//
//
// function  alertshow() {
//     var body = $('body');
//     if (body.hasClass('open-search')) {
//         body.removeClass('open-search');
//         $(this).siblings().removeClass('active');
//     }
//
//     if (body.hasClass('open')) {
//         body.removeClass('open');
//         $(body).css({"overflow":"auto"})
//     } else {
//         body.addClass('open');
//     }
// }
