$(function(){
	$('.nav>ul>li>a').last().addClass('noBg');
	$('.i_mainR ul li').last().addClass('noBg');
	var mh=Math.max($('.a_C').eq(0).height());
	$('.a_L').eq(0).height(mh);
	$('.a_R').eq(0).height(mh);
	myToggle1();
	siteNav();
	tbtj();
});
function siteNav(){
	var speed=200;
	$('.nav>ul>li').has('.imenu').hover(function(){
		$(this).children('a').addClass('h');
		$(this).children('.imenu').stop(true,true).fadeIn(speed);
	},function(){
		$(this).children('a').removeClass('h');
		$(this).children('.imenu').stop(true,true).fadeOut(speed);
	});
}
function myToggle1(){
	var speed=3000;
	$('.myToggle_1').each(function(){
		var bar='<div class="btnBar"></div>';
		var btns='<div class="btns">';
		var index=0;
		var ul=$(this).find('ul').eq(0);
		$(this).find('ul>li').each(function(){
			index++;
			var cstr='';
			if(index==1){
				cstr=' class="on png li'+index+'"';
				$(this).show();
			}
			btns+='<li'+cstr+' class="png li'+index+'">'+index+'</li>';//index是里面的1234的编号值
		});
		btns+='</div>';
		$(this).append(bar).append(btns);
		btns=$(this).find('.btns').eq(0);
		var total=ul.find('li').size();
		
		var timer1=setTimeout(function(){
				togLi();
			},speed);
		var cuIndex=0;
		$(this).find('.btns>li').hover(function(){
			cuIndex=$(this).index();
			togLi();
			clearTimeout(timer1);
		},function(){
			timer1=setTimeout(function(){
				togLi();
			},speed);
		});
		
		function togLi(){
			ul.find('li').eq(cuIndex).stop(true,true).fadeIn()
				.siblings().stop(true,true).fadeOut();
			btns.find('li').eq(cuIndex).addClass('on').siblings().removeClass('on');
			clearTimeout(timer1);
			timer1=setTimeout(function(){
				togLi();
			},speed);
			cuIndex++;
			if(cuIndex>=total) cuIndex=0;
		}
		
	});
}
function tbtj(){
	$('.ib2 .carousel').jcarousel({
		auto	: 4,			//自动滚动
		wrap	: 'circular',	//循环
		scroll	: 1
	});
}

function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("浏览器不支持此功能，请使用Ctrl+D进行收藏");
        }
    }
}
//设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
function SetHome(url){
	if (document.all) {
		document.body.style.behavior='url(#default#homepage)';
		   document.body.setHomePage(url);
	}else{
		alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
	}
}