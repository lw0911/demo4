
// 项目
window.onload=function()
{
	var oTab=document.getElementById("cen_right_top1");
	var aH3=oTab.getElementsByTagName("h3");
	var aDiv=oTab.getElementsByTagName("div");
	for(var i=0;i<aH3.length;i++)
	{
		aH3[i].index=i;
		aH3[i].onmouseover=function()
		{
			for(var i=0;i<aH3.length;i++)
			{
				aH3[i].className="";
				aDiv[i].style.display="none";
			}
			this.className="active";
			aDiv[this.index].style.display="block";
		}
	}
	
	var oTab2=document.getElementById("cen_right_top2");
	var aH32=oTab2.getElementsByTagName("h3");
	var aDiv2=oTab2.getElementsByTagName("div");
	for(var i=0;i<aH32.length;i++)
	{
		aH32[i].index=i;
		aH32[i].onmouseover=function()
		{
			for(var i=0;i<aH3.length;i++)
			{
				aH32[i].className="";
				aDiv2[i].style.display="none";
			}
			this.className="active";
			aDiv2[this.index].style.display="block";
		}
	}
	
	var oTab3=document.getElementById("cen_right_top3");
	var aH33=oTab3.getElementsByTagName("h3");
	var aDiv3=oTab3.getElementsByTagName("div");
	for(var i=0;i<aH33.length;i++)
	{
		aH33[i].index=i;
		aH33[i].onmouseover=function()
		{
			for(var i=0;i<aH3.length;i++)
			{
				aH33[i].className="";
				aDiv3[i].style.display="none";
			}
			this.className="active";
			aDiv3[this.index].style.display="block";
		}
	}
	
}



// 切换标签效果
$(function($){
	$(".slideBox").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox1").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox2").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox3").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox4").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox5").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox6").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox7").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox8").switchTab({trigger: "mouseover", delayTime: 0});
});


// 滚动图片
$.fn.imgscroll = function(o){
	var defaults = {
		speed: 40,
		amount: 0,
		width: 1,
		dir: "left"
	};
	o = $.extend(defaults, o);
	
	return this.each(function(){
		var _li = $("li", this);
		_li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
		_li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
		_li.css({position: "relative", overflow: "hidden"}); //li
		if(o.dir == "left") _li.css({float: "left"});
		
		//初始大小
		var _li_size = 0;
		for(var i=0; i<_li.size(); i++)
			_li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
		
		//循环所需要的元素
		if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
		_li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
		_li = $("li", this);

		//滚动
		var _li_scroll = 0;
		function goto(){
			_li_scroll += o.width;
			if(_li_scroll > _li_size)
			{
				_li_scroll = 0;
				_li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
				_li_scroll += o.width;
			}
				_li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
		}
		
		//开始
		var move = setInterval(function(){ goto(); }, o.speed);
		_li.parent().hover(function(){
			clearInterval(move);
		},function(){
			clearInterval(move);
			move = setInterval(function(){ goto(); }, o.speed);
		});
	});
};

$(document).ready(function(){

	$(".scrollleft").imgscroll({
		speed: 40,    //图片滚动速度
		amount: 0,    //图片滚动过渡时间
		width: 1,     //图片滚动步数
		dir: "left"   // "left" 或 "up" 向左或向上滚动
	});
	
	$(".HZMHXZ").imgscroll({
		speed: 40,    //图片滚动速度
		amount: 0,    //图片滚动过渡时间
		width: 1,     //图片滚动步数
		dir: "left"   // "left" 或 "up" 向左或向上滚动
	});
	
	$(".team_nr_2").imgscroll({
		speed: 40,    //图片滚动速度
		amount: 0,    //图片滚动过渡时间
		width: 1,     //图片滚动步数
		dir: "left"   // "left" 或 "up" 向左或向上滚动
	});
});



// 过滚动
function LbMove(boxID,btn_left,btn_right,btnBox,Car,direction,way,moveLengh,speed,Interval,number){
				var        _ID   = $("#"+boxID+"");
				var  _btn_left   = $("#"+btn_left+"");
				var _btn_right   = $("#"+btn_right+"");
				var    _btnBox   = $("#"+btnBox+"");
				var        jsq   = 0
				var      timer     ;
				var         cj     ;
				var     no_way   = 0;
				var  no_wayGet   = 0;
				var       fade   = 0;
				var   new_time   = new Date;
				
				var ID_liLen , ID_liheight , cbtmBtn ;
				ID_liLen    = _ID.find("li").length;
				ID_liheight = _ID.find("li").innerHeight();
				
				if(direction == "left" || direction == "right"){
					_ID.find("ul").width(ID_liLen*moveLengh);
					}else if(direction == "top" || direction == "bottom"){
						_ID.find("ul").height(ID_liLen*moveLengh);
						_btnBox.hide()
						}else if(direction == "fade"){
							_ID.find("ul").width(moveLengh).height(ID_liheight);
							_ID.find("li").eq(0).show().siblings().hide();
							_ID.find("li").css({"position":"absolute","left":0,"top":0});
							}
				_btnBox.empty();
				for(i=0;i<ID_liLen;i++){
					_btnBox.append("<span></span>");
					};
				_btnBox.find("span").eq(0).addClass("cur");

				if(way == false){
						_btn_left.hide();
						_btn_right.hide();
						_btnBox.hide();
						}
				
				
				function Carousel(){
					if(way == false){
						no_way++;
						
						if(direction == "left"){
							_ID.find("ul").css({"left":-no_way});	
							no_wayGet = parseInt(_ID.find("ul").css("left"));
							if(no_wayGet == -moveLengh){
								no_way = 0
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"left":0});
								}
						}

						if(direction == "right"){
								
							no_wayGet = parseInt(_ID.find("ul").css("left"));
							if(no_wayGet == 0){
								no_way = -moveLengh
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"left":0});
								}
							_ID.find("ul").css({"left":no_way});
						}
						
						if(direction == "top"){
							_ID.find("ul").css({"top":-no_way});	
							no_wayGet = parseInt(_ID.find("ul").css("top"));
							if(no_wayGet == -moveLengh){
								no_way = 0
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"top":0});
								}
						}
						
						if(direction == "bottom"){
								
							no_wayGet = parseInt(_ID.find("ul").css("top"));
							if(no_wayGet == 0){
								no_way = -moveLengh
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"top":0});
								}
							_ID.find("ul").css({"top":no_way});
						}
						
						
						}else if(way == true){

						if(direction == "left"){
							_ID.find("ul").animate({left:-moveLengh},speed,function(){
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"left":0});
								});	
							if(jsq<ID_liLen-1){
								jsq++;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = 0;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									}
							
						}
						
						if(direction == "right"){
							_ID.find("li:last").insertBefore(_ID.find("li:first"));
							_ID.find("ul").css({"left":-moveLengh});
							_ID.find("ul").stop().animate({left:0},speed);
							if(jsq>0){
								jsq--;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = ID_liLen-1;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									}
							
						}
						
						if(direction == "top"){
							_ID.find("ul").animate({top:-moveLengh},speed,function(){
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"top":0});
								});	
						}
						
						if(direction == "bottom"){
							_ID.find("li:last").insertBefore(_ID.find("li:first"));
							_ID.find("ul").css({"top":-moveLengh});
							_ID.find("ul").stop().animate({top:0},speed);
								
						}
						if(direction == "fade"){
							
							if(fade<ID_liLen-1){
								fade++;
								}else{fade = 0}
							_ID.find("li").eq(fade).fadeIn(speed).siblings().fadeOut(speed);
							_btnBox.find("span").eq(fade).addClass("cur").siblings().removeClass("cur");
							
						}
					
					}
					}
					
					
				if(Car == true){
						
					if(ID_liLen>number){
						timer =	setInterval(Carousel,Interval);
						}else{
							clearInterval(timer);
							_btn_left.hide();
							_btn_right.hide();
							_btnBox.hide();
							}
					}else{
						clearInterval(timer);
						}
				_ID.find("li").hover(function(){
					clearInterval(timer);
					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						});
					
					
				_btn_right.hover(function(){
					clearInterval(timer);
					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						
						}).click(function(){
							if(new Date - new_time>500){
								new_time = new Date;
							
							if(direction == "left" || direction == "right"){
								_ID.find("ul").animate({left:-moveLengh},speed,function(){
									_ID.find("li:first").insertAfter(_ID.find("li:last"));
									_ID.find("ul").css({"left":0});
									});	
								}
							
							
							if(direction == "top" || direction == "bottom"){
								_ID.find("ul").animate({top:-moveLengh},speed,function(){
									_ID.find("li:first").insertAfter(_ID.find("li:last"));
									_ID.find("ul").css({"top":0});
									});	
								}
							if(direction == "fade"){
							
							if(fade>0){
								fade--;
								}else{fade = ID_liLen-1}
									_ID.find("li").stop(true,true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);
									
								}
							if(jsq<ID_liLen-1){
								jsq++;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = 0;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									};
							
								
								}else{};
							});
				_btn_left.hover(function(){
					clearInterval(timer);
					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						}).click(function(){
							if(new Date - new_time>500){
								new_time = new Date;

							if(direction == "left" || direction == "right"){
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"left":-moveLengh});
								_ID.find("ul").stop().animate({left:0},speed);
								}
							
							if(direction == "top" || direction == "bottom"){
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"top":-moveLengh});
								_ID.find("ul").stop().animate({top:0},speed);
									
								}
							if(direction == "fade"){
							
							if(fade<ID_liLen-1){
								fade++;
								}else{fade = 0}
									_ID.find("li").stop(true,true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);
									
								}
							if(jsq>0){
								jsq--;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = ID_liLen-1;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									};
								}else{};
							});
					
				_btnBox.find("span").hover(function(){
					clearInterval(timer);

					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						}).click(function(){
							if(new Date - new_time>500){
								new_time = new Date;
							cbtmBtn = $(this).index();
							$(this).addClass("cur").siblings().removeClass("cur");
							if(direction == "fade"){
											_ID.find("li").eq(cbtmBtn).fadeIn(speed).siblings().fadeOut(speed);
										}else{
							if(cbtmBtn>jsq){
								cj =cbtmBtn - jsq;
								jsq = cbtmBtn;
								
								_ID.find("ul").stop().animate({left:-moveLengh*cj},speed,function(){
									for(i=0;i<cj;i++){
										_ID.find("ul").css({"left":0})
										_ID.find("li:first").insertAfter(_ID.find("li:last"));
										};
									});
								}else{
									cj = jsq - cbtmBtn;
									jsq = cbtmBtn;
									_ID.find("ul").css({"left":-moveLengh*cj});
									for(i=0;i<cj;i++){
										_ID.find("ul").stop().animate({left:0},speed);
										_ID.find("li:last").insertBefore(_ID.find("li:first"));
										};
									};
									};
								}else{};
							});
}




