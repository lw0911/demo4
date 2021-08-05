$(function(){


	
		// nav
		var width=$(window).width();


	
		// XXX视角
		if(width>1100){
			var visual = new Swiper ('.home-visual .swiper-container', {
			    speed:1000,
			    autoplayDisableOnInteraction : false,
			    slidesPerView :3,
			    loop:true,
			    nextButton: '.home-visual .swiper-button-next',
			    prevButton: '.home-visual .swiper-button-prev',
			})
		}else{
			var visual = new Swiper ('.home-visual .swiper-container', {
			    speed:1000,
			    autoplayDisableOnInteraction : false,
			    pagination: '.visual .swiper-pagination',
			    slidesPerView :1,
			    loop:true,
			})
		}


		
		if(width>1100){
			$('.nav li').hover(function() {
				$(this).find('.two-nav').stop().slideDown()
			}, function() {
				$(this).find('.two-nav').stop().slideUp()
			});
		}
		$('.nav-btn').click(function(event) {
			event.stopPropagation()
			$('.nav').stop().slideToggle();
		});

		$('.header .nav li.hasnav').click(function(event) {
			if(width<800){
				$(this).find('.two-nav').stop().slideToggle();
				$(this).toggleClass('on');
				$(this).siblings().find('.two-nav').stop().slideUp();
				$(this).siblings().removeClass('on')
			}
		});





	






})






























