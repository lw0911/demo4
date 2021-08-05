/**
 * Created by PH on 2018/9/18.
 */
var topnum;
$(function () {

    var cw =$(window).width();
    if(cw<=750){return}

    topnum=340*wow.zoom;
    $(".right-tool").css("top", topnum+"px");
    scrollfun();
})

function scrollfun(){


$(window).scroll(function () {
    if($(window).scrollTop() >$(".container.zoom-div").height()-$(window).height()-170*wow.zoom){

        $(".right-tool").css("top", "230px");
    }else{
        $(".right-tool").css("top", topnum+"px");
    }
});
}