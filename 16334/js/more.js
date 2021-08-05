jQuery(function() {

	if (/msie (6.0|7.0|8.0|9.0)/i.test(navigator.userAgent)) {
		window.location.href = 'abandoned.html';
	}

	// 导航
	$('.navbar li').hover(function() {
		$(this).find('.subnav').stop().slideToggle();
		
	})	

	$('.hamburger-box').click(function() {
		$('.mobile-bar').fadeToggle(500);
		$(this).toggleClass('on')

	})

	function parallax() {
		var scrolled = $(window).scrollTop();
		$('.neibanner-text').css('top', '50' - (scrolled * 0.01) + '%');
	}

	$(window).scroll(function(e) {
		parallax();
	});
	
	//tab切换
	var tabsSwiper = new Swiper('#tabs-container', {
		speed: 500,
		on: {
			slideChangeTransitionStart: function() {
				$(".tabs .active").removeClass('active');
				$(".tabs a").eq(this.activeIndex).addClass('active');
			}
		}
	})
	$(".tabs a").on('click', function(e) {
		e.preventDefault()
		$(".tabs .active").removeClass('active')
		$(this).addClass('active')
		tabsSwiper.slideTo($(this).index())
	})	
	
	var swiper = new Swiper('.index-sec4 .swiper-container', {
		slidesPerView:2,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			
			768: {
				slidesPerView: 4
			}

		}
	});
	// banner切换
	 var swiper = new Swiper('.banner', {
		  autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		  },
		  speed:500,
	      spaceBetween: 30,
	      effect: 'fade',
		  loop:true,//必须
	      pagination: {
	        el: '.swiper-pagination'
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });	
});
