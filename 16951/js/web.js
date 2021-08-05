/*!
 * 米维建站  一建轻松建站
 * 详尽信息请看官网：http://www.miwinfo.com/
 *
 * Copyright 2014 米维建站
 *
 * 请尊重原创，保留头部版权
 * 仅供学习参考使用，不可用于任何商业用途
 *
 * 客服QQ 974837117
 */

//导航按钮
$(".nav_handle").click(function(){
  $(".inmuen").slideToggle();
  $(this).toggleClass("on");
});

var mySwiper = new Swiper('.wapbanner',{
	pagination: '.pagination',
	loop:true,
	grabCursor: true,
	paginationClickable: true
});

//返回顶部
$(window).scroll(function () {
if ($(window).scrollTop()>=300) {
$(".page-down").fadeIn();
}else{
$(".page-down").fadeOut();
}
});
(function Page(){
var oDown = $(".page-down"),
oBody = $("html,body");
oDown.bind("click",function(){
oBody.animate({ scrollTop : 0 },500);
});        
})();

function Kongzhi() {
$(".wapbanner .swiper-wrapper").css("height",$(".wapbanner .swiper-wrapper img").height()*1+"px");
//$(".incasenr .li").css("margin-bottom",$(".incasenr").width()/100+"px");
}
self.setInterval("Kongzhi()",50)
