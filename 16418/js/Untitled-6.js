// JavaScript Document
$(function(){
	/*--导航效果--*/
	//鼠标经过图片变彩色、变大  离开时回归原样
	$(".nav li img").hover(function(){
		$(this).removeClass("grayscale");
		$(this).stop(true,true).animate({
			left:"-10%",
			top:"-10%",
			width:"110%"
			})
		},function(){
			$(this).addClass("grayscale");
			$(this).stop(true,true).animate({
			left:"0",	
			top:"0",
			width:"100%"
			})
			})
	//鼠标经过 li 问题位置变化
	$(".nav li").hover(function(){
		$(this).find("strong").stop(true,true).animate({
			top:"85%"
			})
		},function(){
			$(this).find("strong").stop(true,true).animate({
			top:"10%"
			})
			})	
	//鼠标经过/离开，播放/停止音乐
	$(".nav li").hover(function(){
		$(this).find(".musics").stop(true,true).show();
		},function(){
			$(this).find(".musics").stop(true,true).hide();
			})	
	//功能暂未开放
	$(".nav li a").click(function(){
		$(this).attr("href","#");
		alert("功能暂未开放！")
		})				
	})
$(function(){
	var headerHeight=$("header").height();
	$(".headerHeight").height(headerHeight);
	//客服代码
	$(".cc1").click(function(){
		$(this).fadeOut();
		$(".contactClick").fadeIn();
		$(".kefu").animate({
			left:"0",
			})
		})
	$(".contactClick").click(function(){
		$(this).fadeOut();
		$(".cc1").fadeIn();
		$(".kefu").animate({
			left:"-200%",
			})
		})	
	})	