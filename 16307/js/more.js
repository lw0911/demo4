$(function() {
	//导航动画
	$(window).scroll(function() {
		var ST = 0;
		ST = $(window).scrollTop();
		if(ST < 1) {
			$(".top").removeClass('on');
		} else {
			$(".top").addClass('on');
		};

	})
	jQuery(".banner").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });

	$('.sec1-left li').hover(function() {
		var index = $(this).index();
		$(this).addClass('on').siblings().removeClass('on')
		$('.sec1-right .pal').eq(index).addClass('on').siblings('.pal').removeClass('on');
	})

	$('.sec1-left li:gt(3)').hover(function(){
		$(this).find('h2').css('color','#000');
	},function(){
		$(this).find('h2').css('color','#fff');
	})
	
	jQuery(".sec3-right").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });
	jQuery(".index-sec5").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });

})