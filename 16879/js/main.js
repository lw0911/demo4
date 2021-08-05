/*banner图片自动滚动*/
$('.carousel').carousel('cycle');
/*导航跟随*/
$(window).scroll( function() {
	if($(document).scrollTop() != 0)
  	{
  		$("#page-content-wrapper").addClass("fixed");		
  	}
  	else{
  		$("#page-content-wrapper").removeClass("fixed");
  	}
});	
/*导航侧滑*/
$(document).ready(function () {
	var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	isClosed = false;
	trigger.click(function () {
		hamburger_cross();      
	});
	function hamburger_cross() {
		if (isClosed == true) {          
		    overlay.hide();
		    trigger.removeClass('is-open');
		    trigger.addClass('is-closed');
		    isClosed = false;
		    } else {   
		    overlay.show();
		    trigger.removeClass('is-closed');
		    trigger.addClass('is-open');
		    isClosed = true;
		    }
		}
	$('[data-toggle="offcanvas"]').click(function () {
		$('#wrapper').toggleClass('toggled');
	});  
});