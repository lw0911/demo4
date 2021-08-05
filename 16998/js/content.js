var sScroll = $('.swiper-scroll-container').swiper({
	slidesPerSlide:'auto' 
});
$('#glbox1').show();
sScroll = $('.swiper-scroll-container');
sScroll.find('a').first().addClass('active');
sScroll.find('a').click(function(){
	sScroll.find('a').removeClass('active');
	$(this).addClass('active');
	var id = $(this).data('id');
	$('.tabs').find('div.ld').hide();
	$('#'+id).show();
});

(function() {
	var $intro = $(".intro");
	var $toggle = $(".toggle-btn");
	if ($intro.height() > 152) {
		$intro.css({"height": "152px"});
		$toggle.show();
		$toggle.click(function() {
			var $this = $(this);
			if ($this.hasClass("up")) {
				$this.removeClass("up");
				$intro.css({"height": "152px"});
				$toggle.text("展开");
			} else {
				$this.addClass("up");
				$intro.css({"height": "auto"});
				$toggle.text("收起");
			}
		});
	}
})();

$('.p-pic a').hover(function(){
	$(this).append('<span>查看大图</span>');
},
function(){
	$(this).children('span').remove();
});