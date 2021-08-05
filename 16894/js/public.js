
// 菜单
$(function(){
	var n=$(".top_nav ul li.cur").index()
	$(".top_nav ul li").mouseenter(
		function(){
			$(this).addClass("cur")
			$(this).siblings().removeClass("cur")
		}
	)
	$(".top_nav ul").mouseleave(
		function(){
			$(".top_nav ul li").eq(n).addClass("cur")
			$(".top_nav ul li").eq(n).siblings().removeClass("cur")
		}
	)
})

// 滑动导航固定及侧边栏浮动
$(function(){
	$(".side_box").hide()
    window.onscroll=function(){
    var autoheight=document.body.scrollTop||document.documentElement.scrollTop;
    if(autoheight>216){
        $(".side_box").fadeIn(500)
        $(".top_nav").css({"position":"fixed","z-index":999,"width":"100%","top":0})
        }else{
            $(".side_box").fadeOut(500)
             $(".top_nav").css({"position":"relative","z-index":99,"width":"100%","top":0})
        }
    }
	$(".sidetop").click(
        function(){
            $('body,html').animate({"scrollTop":0},500);
        }
    )
})