$(function(){
	
	$('.topbtn').click(function() {

		$('html,body').stop().animate({
			scrollTop: 0
		}, 500, "easeInOutExpo");
	});
	
	 $('.sec1-left ul li').hover(function(){			
		var index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on')
		$('.sec1-right .box').eq(index).addClass('on').siblings().removeClass('on');
	})
	
	jQuery(".index-sec2").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3,scroll:1});
	jQuery(".index-sec6").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3,scroll:1});
	
	
	
	//input		
		$('input[type=text]').bind({
			focus:function(){
			if (this.value == this.defaultValue){
				this.value="";
			}
			},blur:function(){
			if (this.value == ""){
				this.value = this.defaultValue;
			}
			}
		});
})
