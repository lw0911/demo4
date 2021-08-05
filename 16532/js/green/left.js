$(document).ready(function(){
	$("#firstpane .menu_body:eq(0)").show();
	$("#firstpane .menu_head").click(function(){
		$(this).addClass("current").next("div.menu_body").slideToggle(1).siblings("div.menu_body").slideUp("fast");
		$(this).siblings().removeClass("current");
	});
	$("#secondpane .menu_body:eq(0)").show();
	$("#secondpane .menu_head").mouseover(function(){
		$(this).addClass("current").next("div.menu_body").slideDown(1).siblings("div.menu_body").slideUp("fast");
		$(this).siblings().removeClass("current");
	});
	
});
$(document).ready(function(){
	$("#firstpane .menu_body:eq(0)").show();
	$("#firstpane .menu_head1").click(function(){
		$(this).addClass("current1").next("div.menu_body1").slideToggle(1).siblings("div.menu_body1").slideUp("fast");
		$(this).siblings().removeClass("current1");
	});
	$("#secondpane .menu_body:eq(0)").show();
	$("#secondpane .menu_head1").mouseover(function(){
		$(this).addClass("current1").next("div.menu_body1").slideDown(1).siblings("div.menu_body1").slideUp("fast");
		$(this).siblings().removeClass("current1");
	});
	
});





$(document).ready(function(){
	$("#firstpane1 .menu_body:eq(0)").show();
	$("#firstpane1 .menu_head2").click(function(){
		$(this).addClass("current").next("div.menu_body").slideToggle(1).siblings("div.menu_body").slideUp("fast");
		$(this).siblings().removeClass("current");
	});
	$("#secondpane1 .menu_body:eq(0)").show();
	$("#secondpane1 .menu_head2").mouseover(function(){
		$(this).addClass("current").next("div.menu_body").slideDown(1).siblings("div.menu_body").slideUp("fast");
		$(this).siblings().removeClass("current");
	});
	
});
$(document).ready(function(){
	$("#firstpane1 .menu_body:eq(0)").show();
	$("#firstpane1 .menu_head3").click(function(){
		$(this).addClass("current1").next("div.menu_body1").slideToggle(1).siblings("div.menu_body1").slideUp("fast");
		$(this).siblings().removeClass("current1");
	});
	$("#secondpane1 .menu_body:eq(0)").show();
	$("#secondpane1 .menu_head3").mouseover(function(){
		$(this).addClass("current1").next("div.menu_body1").slideDown(1).siblings("div.menu_body1").slideUp("fast");
		$(this).siblings().removeClass("current1");
	});
	
});
