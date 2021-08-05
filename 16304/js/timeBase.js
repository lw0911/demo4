$(function(){
	    //时间轴

    auCHmOrn();

    $(window).resize(function () {

        auCHmOrn();

    });



function auCHmOrn() {

    $(".auCHman-box").eq(0).addClass("cur");

    var auCHistManSwiper = new Swiper('.auCHist-man .swiper-container', {

        slidesPerView: 8,

        spaceBetween: 0,

        breakpoints: {

            980: {

                slidesPerView: 7

            },

            768: {

                slidesPerView: 6

            },

            640: {

                slidesPerView: 5

            },

            580: {

                slidesPerView: 4

            },

            414: {

                slidesPerView: 3

            }

        }

    });

    var auCHistMinSwiper = new Swiper('.auCHist-min .swiper-container', {

        spaceBetween: 0,

        autoHeight: true,

        simulateTouch: false,

        onSlideChangeEnd: function (swiper) {

            comTeamMove2(swiper.activeIndex, auCHistMinSwiper, auCHistManSwiper);

        }

    });

    $('.auCHistManSwiper-prev').click(function () {

        auCHistManSwiper.slidePrev();

        comTeamMove("prev", auCHistMinSwiper, auCHistManSwiper);

    })

    $('.auCHistManSwiper-next').click(function () {

        auCHistManSwiper.slideNext();

        comTeamMove("next", auCHistMinSwiper, auCHistManSwiper);

    })



    $(".auCHman-box").bind("click", function () {

        if ($(this).hasClass("cur")) return false;

        $(".auCHman-box").removeClass("cur");

        $(this).addClass("cur");

        auCHistMinSwiper.slideTo($(".auCHman-box").index($(this)))

    });



}



function comTeamMove(way, auCHistMinSwiper, auCHistManSwiper) {

    var nIndex = $(".auCHman-box").index($(".auCHman-box.cur"));

    if (way == "prev") {

        var wIndex = nIndex - 1 < 0 ? nIndex = $(".auCHman-box").length - 1 : nIndex - 1;

    }

    if (way == "next") {

        var wIndex = nIndex + 1 > $(".auCHman-box").length - 1 ? nIndex = 0 : nIndex + 1;

        // console.log(wIndex);

    }

    comTeamMove2(wIndex, auCHistMinSwiper, auCHistManSwiper);

}



function comTeamMove2(index, auCHistMinSwiper, auCHistManSwiper) {

    $(".auCHman-box").removeClass("cur");

    $(".auCHman-box").eq(index).addClass("cur");

    auCHistMinSwiper.slideTo(index);

    auCHistManSwiper.slideTo(index);

    // console.log(111);

}
})
