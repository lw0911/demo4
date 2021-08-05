// JavaScript Document
$(function(){
	
//主菜单二级菜单显示与隐藏
	$(".nav li").mouseenter(function(){
		$(this).children(".child-nav").show();	
		$(this).find(".spot i").eq(0).stop().animate({left:0,},1000);
		$(this).find(".spot i").eq(1).stop().animate({bottom:-22,},1000);
	})
	
	$(".nav li").mouseleave(function(){
		$(this).children(".child-nav").hide();	
		$(this).find(".spot i").eq(0).stop().animate({left:100 + '%',},1000);
		$(this).find(".spot i").eq(1).stop().animate({bottom:100 + '%',},1000);
	})
	
	
//侧边导航展开及隐藏
	$(".menu-box").click(
		function(){
			$(".black-box").show();
			$(".nav-main").stop().animate({marginLeft:0,},500);
			$(".main").stop().animate({marginLeft:100,},500);	
			event.stopPropagation(); //阻止冒泡
		}
	)
	
	$(".black-box").click(
		function(){
			$(".black-box").fadeOut(500);
			$(".main").stop().animate({marginLeft:0,},500);
			$(".nav-main").stop().animate({marginLeft:-100,},500);
		}
	)
	
//侧边导航二级菜单
	var thisTime;
	$('.nav-ul li').mouseleave(function(even){
		thisTime = setTimeout(thisMouseOut,1000);
	})

	$('.nav-ul li').mouseenter(function(){
		clearTimeout(thisTime);
		var thisUB = $('.nav-ul li').index($(this));
		if($.trim($('.nav-slide-o').eq(thisUB).html()) != "")
		{
			$('.nav-slide').addClass('hover');
			$('.nav-slide-o').hide();
			$('.nav-slide-o').eq(thisUB).show();
		}
		else{
			$('.nav-slide').removeClass('hover');
		}
		
	})
	
	$(".nav-slide-o > ul > li").mouseenter(
		function(){
			$(this).children(".child-menu").show();	
		}
	)
	
	$(".nav-slide-o > ul > li").mouseleave(
		function(){
			$(this).children(".child-menu").hide();	
		}
	)
	
	function thisMouseOut(){
		$('.nav-slide').removeClass('hover');
	}
	 
	$('.nav-slide').mouseenter(function(){
		clearTimeout(thisTime);
		$('.nav-slide').addClass('hover');
	})
	$('.nav-slide').mouseleave(function(){
		$('.nav-slide').removeClass('hover');
	})
	
//轮播图切换	
	$(document).ready(function(){
		$('.flexslider').flexslider({
			directionNav: true,
			pauseOnAction: false,
			slideshowSpeed: 5000, // 自动播放速度毫秒
			animationSpeed: 700, //滚动效果播放时长
		});
	});
	
	$(".abTxt-box .more").mouseenter(
		function(){
			$(this).animate({marginLeft:'17%',},500);	
		}
	)
	$(".abTxt-box .more").mouseleave(
		function(){
			$(this).animate({marginLeft:'16%',},500);	
		}
	)
	
	$(".pic-more").mouseenter(function(){
		$(this).children("i").stop().animate({left:'100%',},500);	
	})
	$(".pic-more").mouseleave(function(){
		$(this).children("i").stop().animate({left:0,},500);	
	})
	
	$(".poster-main .poster-list .poster-item a").mouseenter(
		function(){
			$(this).find(".caseTxt").fadeIn(2000);	
		}
	)
	$(".poster-main .poster-list .poster-item a").mouseleave(
		function(){
			$(this).find(".caseTxt").fadeOut(2000);	
		}
	)
	
	$(function(){
		Carousel.init($("#carousel"));
		$("#carousel").init();
	});
	
	/*$(document).ready(function() {
		$('ul').roundabout();
	});*/
	
	$(".msg input").focus(function(){
		$(this).parent("li").css("background","#000");	
	});
	
	$(".msg input").blur(
		function(){
			$(this).parent("li").css("background","rgba(0,0,0,0.5)");
		}
	);
	
	$(".msg textarea").focus(function(){
		$(this).css("background","#000");	
	});
	
	$(".msg textarea").blur(
		function(){
			$(this).css("background","rgba(0,0,0,0.5)");
		}
	);
			
	jQuery(".pic-scoll").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,trigger:"click"});	
	jQuery(".news-slides").slide({titCell:".newsBtn ul",mainCell:".news-wrap ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:1,trigger:"click"});
	jQuery(".txtMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:8,interTime:50});
})