// JavaScript Document
$(document).ready(function(){
// Menu js for Position fixed
	var	headerHeight = $("#innerHeader").outerHeight();
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1;
		if (window_top > headerHeight) {
			$('#innerHeader').addClass('fixed animated fadeInDown');
		} else {
			$('#innerHeader').removeClass('fixed animated fadeInDown');
		}
	});

// index Menu js for Position fixed
    var	homeHeaderHeight = $("#header").outerHeight();
    $(window).scroll(function(){
        var window_top = $(window).scrollTop() + 1;
        if (window_top > homeHeaderHeight) {
            $('#header').addClass('homefixed animated fadeInDown');
        } else {
            $('#header').removeClass('homefixed animated fadeInDown');
        }
    });
});
