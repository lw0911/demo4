$(function(){
	$('.nav ul li:first-child').children('a').css('background','none');
	$('.i_left .lei li:first-child').children('.er').show();
	$('.i_left .lei li .li_m').click(function(){
		$(this).parent('li').siblings('li').children('.er').slideUp();
		$(this).siblings('.er').slideDown();
	});
	
	$('.pro ul li:nth-child(3n)').css('margin-right',0+'px');
	
	
	//2020-10-19修改
	$(".tabBox .tabCont:first").css("display","block");
	$(".tabBox .tabNav li").mouseover(function(){
		$(this).siblings("li").removeClass("now");
		$(this).addClass("now");
		$(this).parents(".tabBox").find(".tabCont").css("display","none");
		var i=$(this).index();
		$(this).parents(".tabBox").find(".tabCont:eq("+i+")").css("display","block");
	});
	$('.nav_m .nav_ico').click(function(){
		$(this).siblings('ul').slideToggle();
	});
	//2020-10-19修改
	
});
//js无缝滚动代码
function marquee(i, direction){
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");
	if (direction == "up"){
		if (obj2.offsetTop - obj.scrollTop <= 0){
			obj.scrollTop -= (obj1.offsetHeight + 20);
		}else{
			var tmp = obj.scrollTop;
			obj.scrollTop++;
			if (obj.scrollTop == tmp){
				obj.scrollTop = 1;
			}
		}
	}else{
		if (obj2.offsetWidth - obj.scrollLeft <= 0){
			obj.scrollLeft -= obj1.offsetWidth;
		}else{
			obj.scrollLeft++;
		}
	}
}

function marqueeStart(i, direction){
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");

	obj2.innerHTML = obj1.innerHTML;
	var marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 20);
	obj.onmouseover = function(){
		window.clearInterval(marqueeVar);
	}
	obj.onmouseout = function(){
		marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 20);
	}
}