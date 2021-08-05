$(function () {
    var searchTop = $(".search-top");
    var searchShow = $(".search-show");
    var close = $(".search-show-close");

    searchTop.on("click", function () {
        $(searchShow).animate({
            width: "1000px"
        })
    });

    close.on("click", function () {
        $(searchShow).animate({
            width: "0"
        })
    })
});