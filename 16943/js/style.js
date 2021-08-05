;
(function ($, window, document, undefined) {
	var myTopSwiper = new Swiper('#zl-banner-contion', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		onlyExternal : true,
		loop: true ,
		preventClicks : false,
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
	});
	//鼠标覆盖停止自动切换
//	myTopSwiper.container[0].onmouseover=function(){
//	  mySwiper.stopAutoplay();
//	}
//	//鼠标移出开始自动切换
//	myTopSwiper.container[0].onmouseout=function(){
//	  mySwiper.startAutoplay();
//	}
	
	
	//领导政策
	var mySwiper = new Swiper('#zc-swiper-container', {
		onlyExternal : true,
		loop: true,
		effect : 'fade',
		nextButton:'.zl-nextBont',
		prevButton:'.zl-prevBont',
		pagination : '.zl-jindu',
		uniqueNavElements :false,
		paginationClickable :true,
	});
	
	 var swiper = new Swiper('#ss-swiper-container', {
	 	slidesPerView: 2,
	 	slidesPerColumn: 2,
	 	slidesPerGroup : 2,
	 	spaceBetween: 20,
	 	onlyExternal : true,
	 	pagination : '.swiper-pagination',
	 	paginationClickable :true,
	 });
	
	//新闻
	var mySwiper2 = new Swiper('#gallery-thumbs', {
				direction: 'vertical',
				watchSlidesProgress: true,
				watchSlidesVisibility: true,
				slidesPerView: 3,
				spaceBetween: 20,
				paginationClickable: true,
				mousewheelControl : true,
				onlyExternal : true,
				slideToClickedSlide: true,
				scrollbar: '.swiper-scrollbar',
//				scrollbarHide:false,
//				scrollbarDraggable : true ,
//				scrollbarSnapOnRelease : true ,
				onTap: function() {
					mySwiper3.slideTo(mySwiper2.clickedIndex)
				},
			})
			var mySwiper3 = new Swiper('#gallery-top', {
				effect : 'fade',
				paginationClickable: true,
				onlyExternal : true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				onSlideChangeStart: function() {
					updateNavPosition()
				},
		
			})
		
			function updateNavPosition() {
				$('#gallery-thumbs .active-nav').removeClass('active-nav')
				var activeNav = $('#gallery-thumbs .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');
		
				if(!activeNav.hasClass('swiper-slide-visible')) {
//					console.log(1);
					if(activeNav.index() > mySwiper2.activeIndex) {
//						console.log(2);
						var thumbsPerNav = Math.floor(mySwiper2.width / activeNav.width()) - 1
						mySwiper2.slideTo(activeNav.index() - thumbsPerNav)
					} else {
//						console.log(3);
						mySwiper2.slideTo(activeNav.index())
					}
				}
			}
			
			
//			园所
			var swiper = new Swiper('#yx-swiper-container', {
				slidesPerView: 5,
				slidesPerGroup: 5,
				spaceBetween: 15,
				onlyExternal : true,
				loop: true,
				loopFillGroupWithBlank: true,
				pagination : '.swiper-pagination',
	 			paginationClickable :true,
			});
			
			//导航条
			var gaodu = $('#main-contion').offset().top - 90;
			function windowOl(){
				if($(window).scrollTop()>= gaodu){
					$('#header').addClass('nav-active');
					$('#upTop').fadeIn();
				}else {
					$('#header').removeClass('nav-active');
					$('#upTop').fadeOut();
				}
			}
			$(function(){
				windowOl();
			})
			$(window).scroll(function(){
				windowOl();
			})
			
			//领导机构
			var mySwiperNews = new Swiper('#zl-ld-news', {
				paginationClickable: true,
				onlyExternal : true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			})
			var mySwiperNews2 = new Swiper('#zl-ld-news2', {
				paginationClickable: true,
				onlyExternal : true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			})
			
			
			//回到顶部
			var windowsWidth = $(window).width();
			$('#upTop').css({
				'right' : (windowsWidth-1200)/2 + 'px'
			});
			$('#top-Up').click(function(){
				$("html,body").animate({scrollTop:0}, 500);
			})
			
			
			//滚动悬停
		    var nav=$("#fixed"); 
			var win=$(window); 
			var sc=$(document);
			var fixTop = nav.offset().top - 120;
			
			win.scroll(function(){
			  if(sc.scrollTop()>=fixTop){
			    nav.addClass("fixednav").css({
			    		'left' : (windowsWidth-1200)/2,
			    		'top' : 120 + 'px'
			    });
			  }else{
			   nav.removeClass("fixednav");
			  }
			})  


			
			

	
	
})(jQuery, window, document);
