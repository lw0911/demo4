jQuery(function(){
	//PC端banner轮播
	jQuery(".Wrap-Banner").slide({ titCell:".hd li", mainCell:".bd ul", effect:"fold", autoPlay:true, delayTime:1000 });
	//移动端banner轮播
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
})
