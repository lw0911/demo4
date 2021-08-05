$(document).ready(function() {

	$("#blog_sel a").mouseover(function() { // 移动到#box_title下的li
		$(this).addClass("blog_on").siblings().removeClass(); // 移动到当下的li增加样式.cc其他的不加并移除样式
		$("." + $(this).attr("id")).show().siblings().hide(); // 获取当前的id属性值与之前的.结合，合成类，显示，其他隐藏
	});

	var scrllTopz = $(window).scrollTop(); // ///获取scrollTop///////////
	var scrllTopz_prev = 0;
	var marinposti = [];
	var setInterTime;
	var setInterTime2;
	$(window).scroll(function() {
		scrllTopz = $(window).scrollTop(); // ///获取scrollTop///////////

		//scrolBackmarin2(); // ///版块2///////
		scrolBackmarin3(); // ///版块3///////

	});

	// ///2/////////
	function scrolBackmarin2() {
		$(".MterbottomMtl2img").css( {
			left : scrllTopz * 0.2 - 5000
		});
		$(".ImgbottomMterl2A").css( {
			left : -scrllTopz * 3
		});
		$(".ImgbottomMterl2B").css( {
			left : -scrllTopz * 5
		});
	}
	// ///2***/////////

	// ///3/////////
	function scrolBackmarin3() {

		$(".usService_Title .mask").css("right", -scrllTopz);

	}
});
