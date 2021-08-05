var nav = {
  trigger: ".menu_btn",
  wrap: ".mast-head",
  init: function () {
    nav.bind();
  },
  bind: function () {
    $(document).on("click", nav.trigger, nav.open)

    $(document).on("click", "#nav a", function (e) {
      e.preventDefault();

      if (parseInt($("body").css("right")) > 0) {
        $("body").removeClass("open");
        $("#bg-mask").hide();
      }

      $(window).scrollTo($(this).attr("href"), 500, {
        offset: {
          top: -60
        }
      });
    });

    $(document).on("click", ".backtop_btn", function (e) {
      e.preventDefault();
      $(window).scrollTo(0, 750);
    });

    $(document).on("click", "#intro .down_btn", function (e) {
      e.preventDefault();
      $(window).scrollTo("#about", 500, {
        offset: {
          top: -60
        }
      });
    });

    $(document).on("click", "#bg-mask", nav.open)
  },
  open: function (e) {
    e.preventDefault();

    if ($("body").is(".open")) {
      $("body").removeClass("open");
      $("#bg-mask").fadeTo("fast", 0, function () {
        $("#bg-mask").hide();
      });
    } else {
      $("#bg-mask").fadeTo("fast", 0.2);
      $("body").addClass("open");
      if ($("body").is(".qropen")) {
        $("body").removeClass("qropen");
      }
    }
  }
}

var qrcode = {
  trigger: ".qrcode_btn",
  wrap: ".mast-head",
  init: function () {
    qrcode.bind();
  },
  bind: function () {
    $(document).on("click", qrcode.trigger, qrcode.qropen)
  },
  qropen: function (e) {
    e.preventDefault();

    if ($("body").is(".qropen")) {
      $("body").removeClass("qropen");
    } else {
      $("body").addClass("qropen");
    }

    if ($("body").is(".open")) {
      $("body").removeClass("open");
      $("#bg-mask").hide();
    }
  }
}

var latestwork = {
  init: function () {
    var bannerSlider = $("#latest-work .flexslider").flexslider({
      namespace: "flex-",
      selector: ".slides > li",
      animation: "slide",
      easing: "easeInOutExpo",
      animationLoop: true,
      smoothHeight: false,
	  slideshow: true,  
      maxItems: 0,
      slideshowSpeed: 5000,
      animationSpeed: 1000,
      pauseOnHover: false,
      pauseOnAction: true,
      touch: true,
      useCSS: false,

      controlNav: true,
      directionNav: true,
      prevText: "",
      nextText: "",
      itemWidth: "#latest-work",
      before: function () {
        $(window).resize();
      },
    });

    $(".flex-control-nav a").text("");
    $(".flex-control-nav a").addClass("trans");
    $(".flex-direction-nav a").addClass("trans");
  }
}

var worksnav = {
  init: function () {
    worksnav.fixmenu();
    $(window).on("scroll", function () {
      worksnav.fixmenu();
    });
  },
  fixmenu: function () {
    var top = $(window).scrollTop();
    var menutop = $("#works .isotope").offset().top - 55 - 60;
    var menutop = $("#works .isotope").offset().top - 50 - 60;
    var contheight = $("#works .isotope").height();
    var contbottom = $("#works .isotope").offset().top + contheight - 110;
    if (top >= menutop && top < contbottom && contheight > document.body.clientHeight) {
      $("body").addClass("fix");
    } else {
      $("body").removeClass("fix");
    };
  }
}

var worksthumbs = {
  init: function () {
    $container = $('.isotope');
    $container.isotope({
      itemSelector: '.item',
      filter: '.brands',
      masonry: {
        columnWidth: ".item",
      },
      //		animationOptions: {
      //			duration: 0,
      //			queue: false,
      //		},
    });

    $('#filters').on('click', 'a', function () {
      $('#filters a').removeClass('curensQhs');
      $(this).addClass('curensQhs');

      var filterValue = $(this).attr('data-filter');
      $container.isotope({
        filter: filterValue
      });
//      var worksy = $('#works .title_en').offset().top + 112;
//      if (document.body.clientWidth < 768) {
//        worksy = worksy - 56;
//      }
//      if (device.mobile() || device.tablet()) {
//        $(window).scrollTo(worksy, 0);
//      } else {
//        $(window).scrollTo(worksy, 100);
//      };

      return false;
    });
    $container.find("img").each(function (index, element) {

      var imageUrl = $(this).attr("src");
      var img = new Image();
      img.onload = function () {
        $container.isotope('layout');
      }
      img.src = imageUrl;
    });
  }
}

$(document).ready(function () {
//  nav.init();
//  qrcode.init();
//  latestwork.init();
  
  if ($("html").hasClass("no-touch") && !$("html").hasClass("lt-ie9") || $("body").hasClass("ios8")) {
    worksnav.init();
    $('body').scrollspy({
      target: '.navbar-example',
      offset: 60
    });
  };

  worksthumbs.init();

  //  $("body").queryLoader2({
  //    backgroundColor: "#fff",
  //    barColor: "#000",
  //    percentage: false,
  //    barHeight: 2,
  //    completeAnimation: "grow",
  //    minimumTime: 500
  //  });
  //  $("body").css("visibility", "visible");
});
