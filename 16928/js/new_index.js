$(function(){

    //初始化背景视频
    function videoBg(){
        if($(window).width()>1024){
            $('.banner-bg-video').vide({
                mp4: "images/jb-play.mp4"
            },{
                volume: 1,
                playbackRate: 1,
                muted: true,
                loop: true,
                autoplay: true,
                position: '50% 50%', // Similar to the CSS `background-position` property.
                posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
                resizing: true // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
            });
        }
    }
    window['videoBg']=videoBg;
//    $(window).on('resize',function(){
//        videoBg();
//    })



    //幻灯片
    if($(window).width>1024){
        $('.banner').slick({
            dots:true,
	    autoplay:true,
	autoplaySpeed:15000,
            onInit:function(){
//                videoBg();
            }
        })
    }else{
        $('.banner').slick({
            dots:true,
autoplaySpeed:15000,
	    autoplay:true
        })
    }



//  幻灯
    $('#home-news-wrap').slick({
        arrows:false,
        dots:false,
        slidesToShow:2,
        slidesToScroll:2,
//        autoplay:true,
        asNavFor: '#home-news-wrap2',
        responsive: [
            {breakpoint: 1720, settings: {slidesToShow: 1, slidesToScroll: 1}},
        ]
    })
    $('#home-news-wrap2').slick({
        arrows:false,
        dots:true,
        slidesToShow:2,
        slidesToScroll:2,
//        autoplay:true,
        asNavFor: '#home-news-wrap',
        responsive: [
            {breakpoint: 1720, settings: {slidesToShow: 1, slidesToScroll: 1}},
        ]
    })

//   hover幻灯片
    $('.case-image').hover(
        function(){
            $(this).find('.case-detail').stop().slideDown();
        },
        function(){
            $(this).find('.case-detail').stop().slideUp();
        }
    )


   
})
