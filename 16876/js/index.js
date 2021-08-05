$(function(){
	//首页
    //nav 
	var nav=function(){
		$(".navProject ul li").hover(function(){
			$(this).find("span").stop().animate({"width":100+'%'});
		},function(){
			$(this).find("span").stop().animate({"width":0});
		})
		$(".navProjectDown").hover(function(){
			$(".navProject").stop().slideToggle();
		})
	}
	
	
	$(".anliWrap ul li").hover(function(){
		$(this).find("img").stop().eq(0).fadeOut().siblings("img").fadeIn(500);
		$(this).find("p").stop().animate({"bottom":0});
	},function(){
		$(this).find("img").stop().eq(0).fadeIn().siblings("img").fadeOut();
//		$(this).find("p").stop().delay(100).fadeOut();
		$(this).find("p").stop().animate({"bottom":-70+'px'});
	})
	
	//我们的服务
  var fuwu=function(){
  	$(".fuwuWrap ul li").hover(function(){
  		$(this).stop().addClass("on");
  		$(this).find(".fuwuInner1").stop().hide();
  		$(this).find(".fuwuInner2").stop().fadeIn();
  	},function(){
  		$(this).stop().removeClass("on");
  		$(this).find(".fuwuInner1").stop().fadeIn();
  		$(this).find(".fuwuInner2").stop().hide();
  	})
  }
	
	//返回顶部
	var back=function(){
		$(".backWrap").click(function(){
			$("body,html").animate({scrollTop:0},1000);
		})
	}
	
	//眉毛种植
	$(".meimaiProWrap ul li").hover(function(){
		$(this).find(".meimaiProTxt").stop().slideToggle();
	})
	
	//鬓角种植
	$(".bjWrap ul li").hover(function(){
		$(this).find(".bjImgTxt").stop().fadeToggle();
		$(this).find(".pic").stop().fadeToggle();
//  $(this).find(".pic").stop().animate({"margin-top":-208+'px'});
	})
	
	
	
	//字数限定
	var writ=function(){
		$(".sliderTd .bd ul li p span").each(function(){
			var text1=$(this).text();
			if(text1.length > 67){
				var text1=text1.substr(0,66) + "...";
				$(this).text(text1);
			}
		})
		$(".maofaExpertR p span").each(function(){
			var text1=$(this).text();
			if(text1.length > 199){
				var text1=text1.substr(0,198) + "...";
				$(this).text(text1);
			}
		})
		
		
		
	}
	
	$(".anliWrap ul li").hover(function(){
		$(this).find("img").stop().eq(0).fadeOut().siblings("img").fadeIn(500);
		$(this).find("p").stop().animate({"bottom":0});
	},function(){
		$(this).find("img").stop().eq(0).fadeIn().siblings("img").fadeOut();
//		$(this).find("p").stop().delay(100).fadeOut();
		$(this).find("p").stop().animate({"bottom":-70+'px'});
	})
	
	//我们的服务
  var fuwu=function(){
  	$(".fuwuWrap ul li").hover(function(){
  		$(this).stop().addClass("on");
  		$(this).find(".fuwuInner1").stop().hide();
  		$(this).find(".fuwuInner2").stop().fadeIn();
  	},function(){
  		$(this).stop().removeClass("on");
  		$(this).find(".fuwuInner1").stop().fadeIn();
  		$(this).find(".fuwuInner2").stop().hide();
  	})
  }
	
	
	
	
	
	
	
	nav();      //nav
	fuwu();     //我们的服务
	writ();      //字数限定
	back();     //返回顶部
	
	
	
	
	
	
	
	
})