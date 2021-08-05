//图片滚动  
jQuery(function($){
	$('#demo3').slideBox({
		duration : 0.3,//滚动持续时间，单位：秒
		easing : 'linear',//swing,linear//滚动特效
		delay : 5,//滚动延迟时间，单位：秒
		hideClickBar : false,//不自动隐藏点选按键
		clickBarRadius : 10
	});
});

//图片无缝滚动
$.fn.imgscroll = function(o){
	var defaults = {
		speed: 40,
		amount: 0,
		width: 1,
		dir: "left"
	};
	o = $.extend(defaults, o);
	
	return this.each(function(){
		var _li = $("li", this);
		_li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
		_li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
		_li.css({position: "relative", overflow: "hidden"}); //li
		if(o.dir == "left") _li.css({float: "left"});
		
		//初始大小
		var _li_size = 0;
		for(var i=0; i<_li.size(); i++)
			_li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
		
		//循环所需要的元素
		if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
		_li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
		_li = $("li", this);

		//滚动
		var _li_scroll = 0;
		function goto(){
			_li_scroll += o.width;
			if(_li_scroll > _li_size)
			{
				_li_scroll = 0;
				_li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
				_li_scroll += o.width;
			}
				_li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
		}
		
		//开始
		var move = setInterval(function(){ goto(); }, o.speed);
		_li.parent().hover(function(){
			clearInterval(move);
		},function(){
			clearInterval(move);
			move = setInterval(function(){ goto(); }, o.speed);
		});
	});
};

//图片自适应宽度
    function setImgMiddle(img) {  
        var $img = $(img),  
            $panel = $(img).parent();//图片容器  
  
        var img_width = $img.width(),img_height = $img.height(),//图片宽高  
            panel_width = $panel.width(), panel_height = $panel.height(); //图片容器宽高  
  
        if(panel_width/panel_height < img_width/img_height){  
            $img.width(panel_width);  
            $img.css('margin-top', (panel_height - $img.height()) * 0.5);  
        }else{  
            $img.height(panel_height);  
            $img.css('margin-left', (panel_width - $img.width()) * 0.5);  
        }  
        $img.fadeIn(100);  
    }  
    //加入收藏
    function AddFavorite(sURL, sTitle) {
      sURL = encodeURI(sURL);
      try {
        window.external.addFavorite(sURL, sTitle);
      } catch (e) {
        try {
          window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
          alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
        }
      }
    }
    //设为首页
    function SetHome(url) {
      if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(url);
      } else {
        alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
      }
    } 