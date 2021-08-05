// JavaScript Document
$(window).load(function(){
	var height = $(".conts").height();
	$(".p_left").height(height);
	$('.conts').animate({'margin-left':'194px'},500);
})
$(function(){
	
	var cur_index = $('.nav_li').index($('.nav%20.cur'));
	$('.nav_li').hover(function(){
			$('.nav_li').eq(cur_index).removeClass('cur');
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
			$('.nav_li').eq(cur_index).addClass('cur');
		});
	}
);