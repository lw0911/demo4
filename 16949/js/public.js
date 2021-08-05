
// 菜单js
$(function(){
	var n=0;
	var m=$(".top_nav ul li.cur").index();
	$(".nav_bg_cur").hide()
	$(".top_nav .nav_bg_cur").css("left",((133.3333*m)+15))
	$(".top_nav ul li dl").hide()
	$(".top_nav ul li").hover(
		function(){
			n=$(this).index();
			$(".top_nav .nav_bg_cur").stop().animate({left:(133.3333*n)+15},300)
			$(this).addClass("cur")
			$(this).siblings().removeClass("cur")
			$(this).find("dl").slideToggle()
		}
	)

	if ($(".top_nav ul li").hasClass("cur")) {
		$(".nav_bg_cur").show()
		$(".top_nav").mouseleave(
			function(){
				$(".top_nav ul li").eq(m).addClass("cur")
				$(".top_nav ul li").eq(m).siblings().removeClass("cur")
				$(".top_nav .nav_bg_cur").stop().animate({left:(133.3333*m)+15},300)
			}
		)
	}else{
		$(".top_nav ul li").hover(
			function(){
				$(this).addClass("cur")
				$(this).siblings().removeClass("cur")
				$(".nav_bg_cur").show()
			}
		)
		$(".top_nav").mouseleave(
			function(){
				$(".top_nav ul li").removeClass("cur")
				$(".nav_bg_cur").hide()
			}
		)
	}
})