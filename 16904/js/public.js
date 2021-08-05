$(function(){
	var nav=function(){
		$(".nav li").hover(function(){
			$(this).find(".nav_down").stop().slideDown();
		},function(){
			$(this).find(".nav_down").stop().slideUp();
		})
	}
	
	var banner=function(){
		var widths=$(".banner").width();
		var lengths=$('.bannerul li').length;
        $('.bannerul').append($('.bannerul li').first().clone());
        var sid=null;
        var index = 0;
        $('.bannerul li img').width(widths)
        function play() {
            index++;
            if (index == $('.bannerul li').length) {
                index = 1;
                $('.bannerul').stop().animate({'margin-left': 0}, 0)
            }
           if (index == $('.bannerul li').length - 1) {
                $(' .num li').eq(0).addClass('active').siblings().removeClass('active')
            }
           core(index);
        }

         sid=setInterval(play, 4000);
        $(' .banner').hover(function(){
            clearInterval(sid)
        },function(){
           sid=setInterval(play, 4000);
        })
        $('.num li').click(function(){
        	index=$(this).index();
        	core(index);
        })
        function core(num){
            $('.bannerul').stop().animate({'margin-left': -($('.bannerul li').eq(0).innerWidth() * num)}, 1000);
            $('.num li').eq(num).addClass('active').siblings().removeClass('active');
        }
	}
	
	var tech_ban=function(){
        var sid=null;
        var index = 0;
        function play() {
            index++;
            if (index == $('.tech_ban li').length) {
                index = 0;
            }
           core(index)
        }

         sid=setInterval(play, 4000);
        $(' .techbox').hover(function(){
            clearInterval(sid)
            $(".tech_btn").fadeIn();
        },function(){
           sid=setInterval(play, 4000);
           $(".tech_btn").fadeOut();
        })
        $('.tech_next').click(function(){
            play()
        })
//        点击下一个
        $('.tech_prev').click(function(){
            index--;
            if(index<=0){
               index=$(' .tech_ban ul li').length-1;
            }
            core(index);
        });
// 点击上一个
        $(' .tech_num span').click(function(){
        	index=$(this).index();
        	core(index);
        })
        function core(num){
            $('.tech_ban li').eq(num).fadeIn().siblings("li").fadeOut();
            $(' .tech_num span').eq(num).addClass('active').siblings().removeClass('active');
        }
	}
	
	var rece_ban = function() {
		var len = $(".rece_ban li").length;
		var index = 0;
	
		$(".rece_prev").click(function() {
			console.log(1)
			index--;
			if (index <= 0) {
				index =0;
			}
			core(index)
		})
		$(".rece_next").click(function() {
			index++;
			if(index>(len-3)){
				index=len-3;
			}
			core(index);
		})
		function core(num){
           $(".rece_ban ul").animate({"left": -(num) * 410 + "px"}, 300)
        }
		
	}
	var hot_ban=function(){
        var sid=null;
        var index = 0;
        function play() {
            index++;
            if (index == $('.hot_ban li').length) {
                index = 0;
            }
           core(index)
        }

         sid=setInterval(play, 4000);
        $(' .hot_ban').hover(function(){
            clearInterval(sid)
        },function(){
           sid=setInterval(play, 4000);
        })
        $(' .hot_num span').click(function(){
        	index=$(this).index();
        	core(index);
        })
        function core(num){
            $('.hot_ban li').eq(num).fadeIn().siblings("li").fadeOut();
            $(' .hot_num span').eq(num).addClass('active').siblings().removeClass('active');
        }
	}
	
	var paper=function(){
		var index=0;
		$(".pap_top span").click(function(){
			index=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(".paper ul").eq(index).addClass("active").siblings().removeClass("active");
		})
		
	}
	var teach=function(){
		$(".teah_top").click(function(e){
			e.stopPropagation();
			if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).next("ul").slideUp();
			}else{
				$(this).addClass("active");
				$(this).next("ul").slideDown();
			}
		})
		$("body").click(function(){
			$(".tech_down ul").slideUp();
			$(".teah_top").removeClass("active");
		})
		
		$(".tech_down li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var tex=$(this).text();
			$(this).parents(".tech_down").find("input").val(tex);
			
		})
		
		
		$(".tech_rig li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	}
	nav();//导航
	banner();//banner
	tech_ban();//教师查询
	rece_ban();//更新主页
	hot_ban();//热点主页
	paper();//论文切换
	teach()
})
