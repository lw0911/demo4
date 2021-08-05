$(function(){
	$(".nav li").hover(function(){
		$(this).find(".nav_down").stop().slideDown();
	},function(){
		$(this).find(".nav_down").stop().slideUp();
	})
	
	var top_he2=$(".wraps").scrollTop();
		if(top_he2<150){
			$(".return").fadeOut();
		}else{
			$(".return").fadeIn();
		}
	var item = function() {
		var length = $(".slide_ban li").length;
		var index = 0;
		var nums=1;
		$(".slide_ban li").click(function() {
			$(this).addClass("active").siblings().removeClass("active");
			index = $(this).index();
			
			play(index);
		})
		$(".prev").click(function() {
			nums--;
			
			$(".next").addClass("active");
			if(nums<=1){
				nums=1
			}
			plan(nums)
		})
		$(".next").click(function() {
			$(".prev").addClass("active");
			nums++;
			plan(index)
		})
		var play = function(num) {
			$(".blut_ban li").eq(num).fadeIn().siblings("li").fadeOut();
			$(".solu_ban li").eq(num).addClass("active").siblings("li").removeClass("active");
		}

		function plan(num) {

            var lens=Math.ceil(length/6);
            if(nums<lens){
            	$(".slide_ban ul").animate({
					"margin-top": -((nums-1)*6* 94+1) + "px"
				}, 300)
            }else{
            	$(".slide_ban ul").animate({
					"margin-top": -((lens-1)*6* 94+1) + "px"
				}, 300)
            }
            console.log(nums)
            if(nums==lens){
				$(".next").removeClass("active");	
				$(".prev").addClass("active");	
			}else if(nums==1){
				$(".prev").removeClass("active");	
				$(".next").addClass("active");	
			}else{
				$(".prev").addClass("active");	
				$(".next").addClass("active");
			}

		}
	}
	var apply=function(){
		$(".apply_list li").mouseover(function(){
			$(this).addClass("active").siblings("li").removeClass("active");
		})
	}
	var fire=function(){
		var index=0;
		$(".fir_cut li").click(function(){
			index=$(this).index();
			$(this).addClass("active").siblings("li").removeClass("active");
			$(".firline").eq(index).addClass("active").siblings(".firline").removeClass("active");
		})
		
	}
	
	$(".kern_list li").mouseenter(function(){
		$(this).addClass("active").siblings("li").removeClass("active")
	})
	//核心功能
	var about=function(){
		
		var lengths=$('.aboutlist li').length;
		
        $('.aboutlist ul').append($('.aboutlist li').first().clone());
        var sid=null;
        var index = 0;
        function play() {
            index++;
            if (index == $('.aboutlist li').length) {
                index = 1;
                $('.aboutlist ul').stop().animate({'margin-left': 0}, 0)
            }
           if (index == $('.aboutlist li').length -1) {
                $('.abo_num span').eq(0).addClass('on').siblings().removeClass('on')
            }
           core(index)
        }

         sid=setInterval(play, 3000);
        $(' .aboutlist').hover(function(){
            clearInterval(sid)
        },function(){
           sid=setInterval(play, 3000);
        })
        $(".abo_num span").click(function(){
        	index=$(this).index();
        	core(index);
        })
        function core(num){
            $('.aboutlist ul').stop().animate({'margin-left': -(($('.aboutlist li').eq(0).innerWidth()) * num)}, 1000);
            $('.abo_num span').eq(num).addClass('on').siblings().removeClass('on');
        }
		
		
	}
	
	$(".callbox").hover(function(){
		$(".call_num").stop().fadeIn();
	},function(){
		$(".call_num").stop().fadeOut();
	})
	
	$(".wxbox").hover(function(){
		$(".wxpic").stop().fadeIn();
	},function(){
		$(".wxpic").stop().fadeOut();
	})
	
	$(".wraps").scroll(function(){
		var top_he=$(this).scrollTop();
		if(top_he<150){
			$(".return").fadeOut();
		}else{
			$(".return").fadeIn();
		}
	})
	$(".return").click(function(){
		$(".wraps").animate({scrollTop:0}, 300);
	})
	
	var pro2=function(){
		var index=0;
		$(".pro_list li").click(function(){
			index=$(this).index();
			$(this).addClass("active").siblings("li").removeClass("active");
			$(".tmc").eq(index).addClass("active").siblings(".tmc").removeClass("active");
			
		})
	}
	
	var page=function(){
		$(".page a").click(function(){
			$(this).addClass("active").siblings("a").removeClass("active")
		})
		$(".page em").click(function(){
			$(this).addClass("active").siblings("em").removeClass("active")
		})
	}
	item();//解决方案切换
	apply();//应用案例
	fire();//四个消防在线
	about();//知识产权 关于我们
	pro2()
	page()
	
})
