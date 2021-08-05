$("document").ready(function(){
	
	/***不需要自动滚动，去掉即可***/
	var time = window.setInterval(function(){
		$('.caseRight').click();	
	},5000);
	$('.casePicUlIdBox').mouseover(function() {
			clearInterval(time);
		});
	$('.caseLeft').mouseover(function() {
			clearInterval(time);
		});
	$('.caseRight').mouseover(function() {
			clearInterval(time);
		});	
	$('.casePicUlIdBox').mouseout(function(){
		  time = window.setInterval(function(){
			$('.caseRight').click();	
		 },5000);
	});
	$('.caseLeft').mouseout(function(){
		  time = window.setInterval(function(){
			$('.caseRight').click();	
		 },5000);
	});
	$('.caseRight').mouseout(function(){
		  time = window.setInterval(function(){
			$('.caseRight').click();	
		 },5000);
	});
	/***不需要自动滚动，去掉即可***/
	var page=1;
	var i=1;
	var box=$('.casePicUlIdBox');
	var h=$('.casePicUl li').width()+20;
	var pagetotal= $('.casePicUlIdBox li').length;
	//alert(pagetotal*h);
	$(".casePicUlIdBox").css("width",pagetotal*h+"px");
	
	$('.htmlcase2').css({left: pagetotal*h+"px"});
	$('.htmlcase2').html($('.htmlcase1').html());//复制内容
    //document.getElementById("a").innerHTML =  document.getElementById("b").innerHTML;
    w = pagetotal*240;
   
	$('.caseLeft').bind('click',upwardsfn);
	$('.caseRight').bind('click',downfn);	
	function upwardsfn(){
		/*
		if($('.htmlcase1,.htmlcase2').is(':animated')){
			$('.htmlcase1,.htmlcase2').stop(true,true);
		}*/
		/*if(page>1){
			box.animate({ marginLeft : '+='+h }, "slow");
			page--;
		}*/
		if($('.htmlcase2,.htmlcase1').is(':animated')){
			$('.htmlcase2,.htmlcase1').stop(true,true);
		}
		if(($('.casePicUlIdBox li').length/2)>3){//多于4张图片
			ml = parseInt($('.htmlcase1').css('left'));
			sl = parseInt($('.htmlcase2').css('left'));
		   // alert(ml);
			if(ml<=0 && ml>w*-1){
				if(ml==0){
					$('.htmlcase2').css({left: w * -1 + 'px'});
					sl = parseInt($('.htmlcase2').css('left'));
				}
				$('.htmlcase2').animate({left: sl + 240 + 'px'},'slow');
				$('.htmlcase1').animate({left: ml + 240 + 'px'},'slow');				
			}else{
				if(sl==0){
					$('.htmlcase1').css({left: w * -1 + 'px'});
					ml = parseInt($('.htmlcase1').css('left'));
				}
				$('.htmlcase1').animate({left: ml + 240 + 'px'},'slow');			
				$('.htmlcase2').animate({left: sl + 240 + 'px'},'slow');
			}
		}
	}
	function downfn(){
		/*
		if(pagetotal>page){
			box.animate({ marginLeft : '-='+h }, "slow");
			page++;
		}*/
		if($('.htmlcase1,.htmlcase2').is(':animated')){
			$('.htmlcase1,.htmlcase2').stop(true,true);
		}
		if(($('.casePicUlIdBox li').length/2)>5){//多于4张图片
			ml = parseInt($('.htmlcase1').css('left'));//默认图片ul位置
			sl = parseInt($('.htmlcase2').css('left'));//交换图片ul位置
			if(ml<= 1200 && ml>w*-1){//默认图片显示时
			    if(ml+w == 1200){//交换图片最后一屏时
					$('.htmlcase2').css({left:'1200px'})//默认图片放在显示区域右
					sl = parseInt($('.htmlcase2').css('left'));
				}
				$('.htmlcase1').animate({left: ml - 240 + 'px'},'slow');//默认图片滚动	
				$('.htmlcase2').animate({left: sl - 240 + 'px'},'slow');//交换图片滚动
			}else{//交换图片显示时
				if(sl+w == 1200){//交换图片最后一屏时
					$('.htmlcase1').css({left:'1200px'})//默认图片放在显示区域右
					ml = parseInt($('.htmlcase1').css('left'));
				}
				$('.htmlcase1').animate({left: ml - 240 + 'px'},'slow');//默认图片滚动	
				$('.htmlcase2').animate({left: sl - 240 + 'px'},'slow');//交换图片滚动
			}
		}

	}

});
