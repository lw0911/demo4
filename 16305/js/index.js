jQuery(function() {

	function initBox() {

		if(!isMobile) {
			w_width = jQuery(window).width();
			w_height = jQuery(window).height();
			$('.banner').css('height', w_height);
			$('.banner .bannerfix >li').css('height', w_height);
			setImgMax($('.banner .bannerfix li .bimg'), 1920, 1080, w_width, w_height);
		} 
	};

	initBox();

	jQuery(window).resize(function() {

		initBox();

	});

	jQuery(function() {
		var bannersider = jQuery(".banner");

		bannersider.flexslider({

			animation: "fade",

			easing: "swing",

			slideshowSpeed: 6000,

			animationSpeed: 0,

			pauseOnAction: false,

			directionNav: false,

			controlNav: true,

			start: function(slider) {

				jQuery('.banner .bannerfix li').eq(slider.currentSlide).addClass("imgIn").siblings().removeClass("imgIn");

				jQuery(".bamnline").addClass("load");

			},

			after: function(slider) {

				jQuery('.banner .bannerfix li').eq(slider.currentSlide).addClass("imgIn").siblings().removeClass("imgIn");

				jQuery(".bamnline").addClass("load");

			},

			before: function(slider) {

				jQuery(".bamnline").removeClass("load");

			}

		});

	});

});