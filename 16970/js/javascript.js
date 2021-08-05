


//导航下拉
$(function(){
	if( $(window).width()>=1200 ){
		navSubLeft();
		$(".header .nav li").hover(
			function(){
				$(this).find(".sub").stop().slideDown(200);
				navSubLeft();
			},function(){
				$(this).find(".sub").stop().slideUp(200);
			}
		);
	}
});

$(window).resize(function(){
	navSubLeft();
});

//子导航位置
function navSubLeft(){
	var navList = $(".header .nav").children("ul").children("li");
	var navLength = navList.length;

	for(var i=0;i<navLength;i++){
		var liLeft = navList.eq(i).offset().left;
		var liWidth = navList.eq(i).width();
		var offsetRight = ($(window).width()) - (navList.eq(i).offset().left);
		var liRight = offsetRight - liWidth ;

		var subLenght = navList.eq(i).find(".sub ul li").length;
		var subWidth1 = navList.eq(i).find(".sub ul li").eq(0).width();
		var subWidth2 = navList.eq(i).find(".sub ul li").eq(subLenght-1).width();

		if( i >= (navLength-2) ){
			navList.eq(i).find(".sub ul").css({"right":liRight+(liWidth/2)-(subWidth2/2),"left":"auto"});
		}else{
			navList.eq(i).find(".sub ul").css({"left":liLeft+(liWidth/2)-(subWidth1/2)});
		}
	}
}

//手机弹出菜单
$(function(){
	if( $(window).width()<1200 ){
		$(".header .menuBtn").click(function(){
			$(".wrapper").toggleClass("shiftLeft");
			$(".mainFilter").fadeToggle();
		});
		$(".mainFilter").click(function(){
			$(".wrapper").removeClass("shiftLeft");
			$(".mainFilter").fadeToggle();
		});
	}
});




//导航搜索
$(function(){
	if( $(window).width()>=1200 ){
		$(".header .searchBox .searchBtn").click(function(){
			if( $(this).parents(".searchBox").find(".searchBar").is(":hidden") ){
				$(this).parents(".searchBox").find(".searchBar").fadeIn(200);
				$(this).parents(".searchBox").find(".searchBar .inpu input").focus();
			}else{
				$(this).parents(".searchBox").find(".searchBar").fadeOut(200);
			}
		});
		$(window).scroll(function(){
			if($(window).scrollTop()>100){
				$(".header .searchBox .searchBar").fadeOut(200);
			}
		});
	}
	if( $(window).width()<1200 ){
		$(".header .searchBox .searchBtn").click(function(){
			if( $(this).parents(".searchBox").find(".searchBar").is(":hidden") ){
				$(this).parents(".searchBox").find(".searchBar").fadeIn(200);
				$(this).parents(".searchBox").find(".searchBar .inpu input").focus();
				$(".header").addClass('on');
				$(".mainFilter").fadeIn(200);
			}else{
				$(this).parents(".searchBox").find(".searchBar").fadeOut(200);
				$(".header").removeClass('on');
			}
		});
		$(".mainFilter").click(function(){
			$(this).fadeOut(200);
			$(".header .searchBox .searchBar").fadeOut(200);
			$(".header").removeClass('on');
		});
	}
});




$(function(){
	//首页、宣传视频
	clickPicVideo( $(".promotional .video") );

	//宣传视频列表
	for(var i=0;i<$(".container .videoList li").length;i++){
		clickPicVideo( $(".container .videoList li").eq(i) );
	}

});



//点击图片弹出视频
function clickPicVideo(obj){
	var video = obj.find('video');
	var pic = obj.find('.pic');
	if( $(window).width()>=1200 ){
		//点击弹出播放
		pic.click(function(){
			video.fadeIn(400);
			video.trigger('play');//播放
			$(".mainFilter").fadeIn(400);
		});
		//点击背景收起暂停
		$(".mainFilter").click(function(){
			video.fadeOut(400);
			video.trigger('pause');//暂停
			$(".mainFilter").fadeOut(400);
		});
	}
	if( $(window).width()<1200 ){
		pic.click(function(){
			video.trigger('play');//播放
		});
	}
}



//点击视频窗口，播放暂停
$(function(){
	if( $(window).width()>=1200 ){
		$('video').click(function() {
			if ($(this).hasClass('pause')) {
				$("video").trigger("play");
				$(this).removeClass('pause');
				$(this).addClass('play');
			} else {
				$("video").trigger("pause");
				$(this).removeClass('play');
				$(this).addClass('pause');
			}
		});
	}
});




//首页、最新资讯、list等高、图片居中
// $(function(){
// 	imgMiddle($(".section4 .newsList li"));
// 	setTimeout(imgMiddle($(".section4 .newsList li")),1000);
// });
// $(window).resize(function(){
// 	imgMiddle($(".section4 .newsList li"));
// });

//list等高
function listHeight(list,row){
	for( var i = 0; i<list.length; i++ ){
		var maxHeight = 0;
		if( i % row == 0 ){
			for( var k=0; k<row; k++ ){
				if( maxHeight < list.eq(i+k).height() ){
					maxHeight = list.eq(i+k).height();
				}
			}
			for( var k=0; k<row; k++ ){
				list.eq(i+k).css("height",maxHeight);
			}
		}
	}
}

//list图片居中
function imgMiddle(list){
	for( var i=0; i< list.length; i++ ){
		var listWidth = list.eq(i).width();
		var imgWidth = list.eq(i).find("img").width();
		if( imgWidth >= listWidth ){
			var left = 0-( imgWidth - listWidth )/2 ;
		}else{
			var left = ( listWidth-imgWidth )/2 ;
		}
		list.eq(i).find("img").css("margin-left",left);
	}
}


//问题解答、展开
$(function(){
	$(".aboutPage .answerList li .title").click(function(){
		var _this = $(this).parent('li');
		var other = _this.siblings('li');
		if( _this.hasClass('on') ){
			_this.removeClass('on');
			_this.find('.text').slideUp(200);
		}else{
			_this.addClass('on');
			other.removeClass('on')
			_this.find('.text').slideDown(200);
			other.find('.text').slideUp(200);
		}
	});
});





// 首页动画
$(function(){
	if( $(window).width()>=1200 ){
		//栏目标题
		for( var i=0; i<$(".main .columnTitle").length; i++ ){
			donghua( $(".main .columnTitle").eq(i),500 );
		}
		//新品推荐
		donghua( $(".section2 .newProduct"),600 );
		//宣传视频
		donghua( $(".section3 .promotional"),600 );
		//最新资讯
		donghua( $(".section4 .newsList"),600 );
	}
});
function donghua(obj,top){
	if( obj.length>0 ){
		$(window).scroll(function(){
			var wst =  $(window).scrollTop()+top;
			if( obj.offset().top<wst){
				obj.css({"position":"relative","top":"0","opacity":"1"});
			}
		});
	}
}




//产品列表、弹出购买二维码
$(function(){
	$(".productList li .btn.popup").click(function(){
		$(".popupBuyNow").fadeIn(200);
		$(".mainFilter").fadeIn(200);
	});
	$(".mainFilter").click(function(){
		$(".popupBuyNow").fadeOut(200);
		$(".mainFilter").fadeOut(200);
	});
});













