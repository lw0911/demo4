 $(document).ready(function () {
    $(".casenav li a").click(function () {
        $(".casenav li").removeClass("selected"), $(this).parent("li").addClass("selected"), thisItem = $(this).attr("rel"), "all" != thisItem ? ($(".caselist li[rel=" + thisItem + "]").stop().animate({width: "375px", opacity: 1, marginRight: "18px", marginLeft: "0px"}), $(".caselist li[rel!=" + thisItem + "]").stop().animate({width: 0, opacity: 0, marginRight: 0, marginLeft: 0})) : $(".caselist li").stop().animate({opacity: 1, width: "375px", marginRight: "9px", marginLeft: "9px"})
    })
//        $(".caselist li img").animate({opacity: 1}).hover(function () {
//        $(this).stop().animate({opacity: 1})
//    }, function () {
//        $(this).stop().animate({opacity: 1})
//    }), $(".caselist .case_txt").animate({opacity: .9}).hover(function () {
//        $(this).stop().animate({opacity: 1})
//    }, function () {
//        $(this).stop().animate({opacity: .9})
//    })
})
//    jQuery(document).ready(function () {
//    mh = jQuery(".dcaseview").height(), fh = jQuery(".dcase_r").height(), jQuery(window).scroll(function () {
//        s = jQuery(document).scrollTop(), s > t - 10 ? (jQuery(".dcase_r").css("position", "fixed"), s + fh > mh && jQuery(".dcase_r").css("top", mh - s - fh + "px")) : jQuery(".dcase_r").css("position", "")
//    })
//}), jQuery(document).ready(function () {
//    ScrollToTop.setup()
//});