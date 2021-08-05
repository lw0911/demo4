$(function(){
	$(window).resize(function(){
		if($(window).width() > 992){
			navPc();
			homeSourse();
//			newsFn();
		}else{
			navWap();
			
		}
		
		if($(window).width() > 768){
			
			
		}else{
			
		}
		
	}).resize();
	
	
	//nav
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$("#top").addClass("on");
		}else{
			$("#top").removeClass("on");
		}
	})
	
	function navPc(){
		$(".nav ul li").hover(function(){
			$(this).find(".navDown").stop().slideToggle();
			
		})
		
		$(".topLang").hover(function(){
			$(this).find(".topLangCh").stop().fadeToggle();
		})
			
	}
	
	function navWap(){
		$(".nav ul li .navBtn").click(function(){
			$(this).parents("h2").toggleClass("on").siblings(".navDown").slideToggle();
			$(this).parents("li").siblings("li").find("h2").removeClass("on").siblings(".navDown").slideUp();
		})
		
		$(".topLang").click(function(){
			$(".topLangCh").stop().fadeToggle();
		})
		$(".topLangCh").click(function(event){
			$(this).hide();
			event.stopPropagation();
		})
		
		var i=0;
		$(".muen").click(function(event){
			$(this).toggleClass("on");
			if(i==0){
				$("#top .nav").stop().animate({"left":'0'});
				i=1;
			}else if(i==1){
				$("#top .nav").stop().animate({"left":'-100%'});
				i=0;
			}
			event.stopPropagation();
		})
		
		$("#top .nav").click(function(event){
			event.stopPropagation();
		})
		
		$("body, body > *").click(function(){
			$("#top .nav").stop().animate({"left":'-100%'});
			$(".muen").removeClass("on");
			i=0;
		})
		
	}
	
	
	$(".topLangCh").click(function(){
		var textEn = $(".topLangEn").text();
		var textCh = $(".topLangCh").text();
		
		$(".topLangEn").text(textCh);
		$(".topLangCh").text(textEn)
	})
	$(".topSearchBtn").click(function(){
		$(".topSearchWrap").fadeIn();
		$(".topLang").fadeOut();
	})
	$(".topSearch").click(function(event){
		event.stopPropagation();
	})
	
	$("body,body > *").click(function(){
		$(".topSearchWrap").fadeOut();
		$(".topLang").fadeIn();
	})
	
	//search
	$(".topSearchWrap input").focus(function() {
		if($(this).val() == "请输入检索内容") { 
			$(this).val("");
		}
		}).blur(function() {
			if($(this).val() == "") { 
			$(this).val("请输入检索内容");
		}
	});
	
	function homeSourse(){
		$(".homeCourList li").hover(function(){
			$(this).stop().addClass("on");
			$(this).find(".homeCourTxt").delay(300).stop().fadeIn(500);
			$(this).find(".homeCourTxt h3").delay(300).stop().animate({"margin-top":'35px'},400);
		},function(){
			$(this).stop().removeClass("on");
			$(this).find(".homeCourTxt").stop().fadeOut();
			$(this).find(".homeCourTxt h3").stop().animate({"margin-top":'120px'});
		})
		
	}
	
	
	//内页
	function contNav(){
		$(".contLeftNav ul li h3").click(function(){
			$(this).parents("li").toggleClass("on").siblings("li").removeClass("on");
			$(this).parents("li").find(".contLeftDown").slideToggle().parents("li").siblings("li").find(".contLeftDown").slideUp();
		})
		
		$(".contLeftDown a").click(function(){
			$(this).addClass("on").siblings("a").removeClass("on").parents("li").siblings("li").find(".contLeftDown a").removeClass("on");
		})
		
	}
	contNav();
	
	//新闻列表
//	function newsFn(){
//		$(".newsList li").hover(function(){
//			$(this).stop().addClass("on");
//			$(this).find(".more").stop().fadeIn(500);
//		},function(){
//			$(this).stop().removeClass("on");
//			$(this).find(".more").stop().fadeOut(500);
//		})
//		
//	}
	
	//测导航弹跳
		online=function(id,_top){
			var me=id.charAt?document.getElementById(id):id, d1=document.body, d2=document.documentElement;
			d1.style.height=d2.style.height='100%';
			me.style.top=_top?_top+'px':0;
			me.style.position='absolute';
			setInterval(function(){
				me.style.top=parseInt(me.style.top)+(Math.max(d1.scrollTop,d2.scrollTop)+_top-parseInt(me.style.top))*0.1+'px';
			},10+parseInt(Math.random()*20));
			return arguments.callee;
		};
		
//		online('contLeft',420);
	
	
	//分页
	var page=function(){
		$(".page a").click(function(){
			$(this).addClass("active").siblings(".page a").removeClass("active");
			$(this).parent(".page").find("em").removeClass("active");
			$(this).parent(".page").find("i").removeClass("active");
		})
		$(".page em").click(function(){
			$(this).addClass("active").siblings(".page em").removeClass("active");
			$(this).parent(".page").find("i").removeClass("active");
		})
		$(".page i").click(function(){
			$(this).addClass("active").siblings(".page i").removeClass("active");
			$(this).parent(".page").find("em").removeClass("active");
		})
	}
	page();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
