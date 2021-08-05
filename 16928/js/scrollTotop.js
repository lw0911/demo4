var ScrollToTop = ScrollToTop || {setup: function () {
    var a = jQuery(window).height() / 2;
    jQuery(window).scroll(function () {
        (window.innerWidth ? window.pageYOffset : document.documentElement.scrollTop) >= a ? jQuery("#ScrollToTop").removeClass("Offscreen") : jQuery("#ScrollToTop").addClass("Offscreen")
    }), jQuery("#ScrollToTop").click(function () {
        return jQuery("html, body").animate({scrollTop: "0px"}, 400), !1
    })
}};