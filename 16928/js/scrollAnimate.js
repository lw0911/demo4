$(function(){

if(navigator.userAgent.indexOf("MSIE 7.0") || navigator.userAgent.indexOf("MSIE 8.0")){
	 $('.loading').remove();
     $('.case_li').css('visibility','visible');
} 
else{
	 $('.wrapper').imagesLoaded( function() {
            $('.loading').remove();
        });

        var wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       300,          // distance to the element when triggering the animation (default is 0)
                mobile:       false,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                }
            }
        );
        wow.init();
}


    




})