
var isbook=false;


$(function(){
    var wh=$(window).height();
    var ch=$(".container.zoom-div").height()*wow.zoom;

    // if(ch-wh<$(".fixed").height()*wow.zoom){
    //     return
    // }

    $(window).scroll(function () {
        show_r();
    });


    var sjh=1300*wow.zoom;
    if(wh>sjh){
        $(".fixed").css("top", 925*wow.zoom+"px");
        $(".fixed").show();
    }else{
        isbook=true;
        $(".fixed").hide();
    }

    show_r();

})

function show_r() {
    // console.log($(window).scrollTop(),wow.zoom)
    if($(window).width()>750){
            if(isbook){

                if($(window).scrollTop() >500*wow.zoom && $(window).scrollTop() < $(".container.zoom-div").height()-$(window).height()-550*wow.zoom){
                // if($(window).scrollTop() >500*wow.zoom){
                    $(".fixed").show();
                }else{
                    $(".fixed").hide();
                }
            }else{
                // console.log($(".container.zoom-div").height());
                // console.log($(window).height());
                // console.log($(window).scrollTop(),$(".container.zoom-div").height()*wow.zoom-$(window).height()-750*wow.zoom);
                if($(window).scrollTop() < $(".container.zoom-div").height()-$(window).height()-780*wow.zoom){
                    $(".fixed").show();
                }else{
                    $(".fixed").hide();
                }
            }


    }
}




// case
var caseGallery1 = new Swiper('.pc-show.swiper-container', {
//
//     autoplay: false,
//     speed: 1000,
//     autoplayDisableOnInteraction: false,
    loop: true,
    centeredSlides: true,
    slidesPerView: 2,
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
//     prevButton: '.case-gallery .swiper-button-prev',
//     nextButton: '.case-gallery .swiper-button-next',
    onInit: function(sw) {
        sw.slides[2].className = ".swiper-slide .swiper-slide-active";
    },
    // breakpoints: {
    //     668: {
    //         slidesPerView: 1,
    //     }
    // }

});
//
// var caseList = new Swiper('.case-list .swiper-container', {
//     loop: true
// });

$('.case-gallery .swiper-button-next').on('click', function (e) {
    e.preventDefault();
    caseGallery1.slideNext();
    // caseGallery2.slideNext();
});

$(' .case-gallery .swiper-button-prev').on('click', function (e) {
    e.preventDefault();
    caseGallery1.slidePrev();
    // caseGallery2.slidePrev();
});
$('.tool-item a.top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: '0px'}, 800);
});



var caseGallery2 = new Swiper('.mobile-show.swiper-container', {
    loop: true,
    prevButton: '.mobile-show .swiper-button-prev',
    nextButton: '.mobile-show .swiper-button-next',
});

$('.mobile-show .swiper-button-next').on('click', function (e) {
    e.preventDefault();
    // caseGallery1.slideNext();
    caseGallery2.slideNext();
});

$('.mobile-show .swiper-button-prev').on('click', function (e) {
    e.preventDefault();
    // caseGallery1.slidePrev();
    caseGallery2.slidePrev();
});