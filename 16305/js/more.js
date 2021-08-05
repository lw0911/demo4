$(function() {
	

	//	浏览器判断
	
	if(/msie (6.0|7.0|8.0|9.0)/i.test(navigator.userAgent)) {
		window.location.href = 'abandoned.html';
	}

	//	搜索框
	$('.zoom').click(function() {
		$('.search-box').addClass('active')
		$('.search-box .div').addClass('on')
	})

	$('.search-close').click(function() {
		$('.search-box').removeClass('active')
		$('.search-box .div').removeClass('on')
	})

	//input		
	$('input[type=text]').bind({
		focus: function() {
			if(this.value == this.defaultValue) {
				this.value = "";
			}
		},
		blur: function() {
			if(this.value == "") {
				this.value = this.defaultValue;
			}
		}
	});

	jQuery(window).scroll(function() {
			w_height = jQuery(window).height();
			var windowTop = jQuery(window).scrollTop();
			if(windowTop < w_height) {
				jQuery('.pbanner figure img').css('transform', "translate(0px," + (windowTop) / 2.8 + "px)");
			};
		});	
	
	jQuery(window).resize(function() {
		initBox();
	});
	
	function topsrcro() {
		var scoll = $(window).scrollTop();
		scoll > 1 ? $(".barwrap").addClass("on") : $(".barwrap").removeClass("on");
		scoll > 1 ? $(".zoom img").attr('src','img/zoom1.png') : $(".zoom img").attr('src','img/zoom.png');
	}

	$(window).scroll(topsrcro);

	topsrcro();

	
	



	

})