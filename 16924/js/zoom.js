//zoom
// var znum;
// $(window).resize(function () {
//     zoom_fun();
// });
// function zoom_fun(){
//     var cw =$(window).width();
//     // console.log(cw);
//     var ch=$(".container.zoom-div").height();
//     // console.log(ch);
//     if(cw>1920)return;
//     if(cw>750){
//         znum=cw/1920;
//     }else{
//         znum=cw/750;
//     }
//
//     $("html").css({"width":cw+"px"});
//     var h=Math.floor(ch*znum);
//     $(".container.zoom-div").css("height",h+"px");
//     var ttw=$(".tt-toolbar.zoom-div").width();
//     var ttr=(znum-1)*ttw;
//     $(".tt-toolbar.zoom-div").css("right",ttr+"px");
//     $(".zoom-div").css({"transform":"scale(" + znum + ")","transform-origin":"0 0","-ms-transform:":"(" + znum + ")"});
//     wow.zoom=znum;
// }
// // wow
// var wow = new WOW({
//     boxClass: 'wow',            // animated element css class (default is wow)
//     animateClass: 'animated',   // animation css class (default is animated)
//     offset: 0,                  // distance to the element when triggering the animation (default is 0)
//     mobile: true,              // trigger animations on mobile devices (default is true)
//     live: true,                 // act on asynchronously loaded content (default is true)
//     callback: function (box) {
//     }
// });
//
// zoom_fun();
// wow.init();


var znum;
$(window).resize(function () {
    zoom_fun();
});
var ch;
var gh;
var yw;
function zoom_fun(){
    var cw =$(window).width();
    // console.log(cw);

    // console.log(ch);
    if(cw>1920)return;
    if(cw>750){
        znum=cw/1920;
    }else{
        znum=cw/750;
    }

    // console.log(znum,ch);
    $("html").css({"width":cw+"px"});

    var explorer =window.navigator.userAgent ;
    // var isEdge = explorer.indexOf("Edge") > -1;

    // var isFF = explorer.indexOf("Firefox") > -1;
    var isChrome = (explorer.indexOf("Chrome") > -1 || explorer.indexOf("Safari") > -1) && explorer.indexOf("Edge")<0;
    ch=$(document).height();
    if(isChrome){
        var h=Math.floor(ch*znum);
        $("body > .container.zoom-div").css("height",h+"px");
    }else{
        gh=$(window).height();
        yw=ch*znum-gh;

        $(window).scroll(function () {
            var scrollnun=$(window).scrollTop();
            if(scrollnun>yw){
                $(window).scrollTop(yw);
            };
        })
    }





    var ttw=$(".tt-toolbar.zoom-div").width();
    var ttr=(znum-1)*ttw;
    $(".tt-toolbar.zoom-div").css("right",ttr+"px");

    $(".zoom-div").css({"transform":"scale(" + znum + ")","transform-origin":"0 0","-ms-transform:":"(" + znum + ")"});

    wow.zoom=znum;
}

// wow
var wow = new WOW({
    boxClass: 'wow',            // animated element css class (default is wow)
    animateClass: 'animated',   // animation css class (default is animated)
    offset: 0,                  // distance to the element when triggering the animation (default is 0)
    mobile: true,              // trigger animations on mobile devices (default is true)
    live: true,                 // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    }
});

zoom_fun();
wow.init();



