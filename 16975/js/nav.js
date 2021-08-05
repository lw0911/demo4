function g(o){return document.getElementById(o);}
//var timeout = 500;
//var closetimer= 0;
//var ddmenuitem = 0;
//function mopen(id,lli)
//{	
//	mcancelclosetime();
//	if(ddmenuitem) ddmenuitem.style.display = 'none';
//	ddmenuitem = g(id);
//	ddmenuitem.style.display = 'block';
//}
//function mclose()
//{
//	if(ddmenuitem) ddmenuitem.style.display = 'none';
//}
//function mclosetime()
//{
//	closetimer = window.setTimeout(mclose, timeout);
//}
//function mcancelclosetime()
//{
//	if(closetimer)
//	{
//		window.clearTimeout(closetimer);
//		closetimer = null;
//	}
//}
//document.onclick = mclose;
window.onload=function()
{
		var li = $('.nav ul li');
	li.eq(0).hover(function(){
		$(this).find('a').html('HOME');
	},function(){
		$(this).find('a').html($(this).find('a').attr("title"));
	});

	li.eq(1).hover(function(){
		$(this).find('a').html('ABOUT US');
	},function(){
		$(this).find('a').html($(this).find('a').attr("title"));
	});
	
	li.eq(2).hover(function(){
		$(this).find('a').html('NEWS');
	},function(){
		$(this).find('a').html($(this).find('a').attr("title"));
	});
	
	li.eq(3).hover(function(){
		$(this).find('a').html('PRODUCT');
	},function(){
		$(this).find('a').html($(this).find('a').attr("title"));
	});

	li.eq(4).hover(function(){
		$(this).find('a').html('CASE');
	},function(){
		$(this).find('a').html($(this).find('a').attr("title"));
	});
	
	li.eq(5).hover(function(){
		$(this).find('a').html('CONTACT');
	},function(){
		$(this).find('a').html($(this).find('a').attr("title"));
	});

	
	//var i_top=g("menu_a").getElementsByTagName("a");
//	for(var i=1;i<=i_top.length;i++)
//	{
//		if(i_top[i-1].className!="a1"&&i_top[i-1].className!="a5"&&i_top[i-1].className!="a7")
//		//if(i_top[i-1].getAttribute("id")!="sel")
//		{
//			i_top[i-1].onmouseover=(function(){
//				//var pNode = this.parentNode;
////				while(pNode.nodeType!=1){
////					pNode =pNode.parentNode;
////				}
//				g("submenu").style.left=getPosition(this)+"px";
//				g("submenu").style.display="block";
//				mopen('submenu',this);
//				g("submenu").innerHTML=g(this.className).innerHTML;
//			});
//			i_top[i-1].onmouseout=(function(){mclosetime();});
//		}
//	}
	
	//首页导航定位专用
	//var url = window.location.href.toLowerCase();
//	if (url.indexOf("exhibition") > -1) {
//		$(".a1").attr("id", "sel");
//	} else if (url.indexOf("visual") > -1) {
//		$(".a2").attr("id", "sel");
//	} else if (url.indexOf("innovation") > -1) {
//		$(".a3").attr("id", "sel");
//	} else {
//		//$(".a8").attr("id", "sel");
//	}
	
	$('.srh_btn').click(function(){
    $(".srh_txt").val($("#hdSearchKey").val());
		$('.srh_con').animate({
			width:204	
		});	
		$('.searchBox').animate({width:204});
		$(this).hide();
		$('.srh_con').find('.srh_txt').focus();
	});
	$(".s_btn").mousedown( function () { SubKey();} );
	$('.srh_con').find('.srh_txt').blur(function(){

    $("#hdSearchKey").val( $(".srh_txt").val());
     $(".srh_txt").val("");
     $('.srh_con').animate({width:0},function(){$('.srh_btn').show();});
	 $('.searchBox').animate({width:44});
    })
	
//bottomEffect();
}
//function getPosition(obj){
//	var y = obj.offsetLeft;
//	while(obj = obj.offsetParent){
//		//alert(obj.tagName);
//		y += obj.offsetLeft;
//	}
//	return y;
//}
//
function hoverlia4(t_n, t_n2, n, k,className) {
    for (var i = 1; i <= k; i++) {
        g(t_n2 + i).className = 'divhidden';
        g(t_n + i).className = '';
    }
    g(t_n2 + n).className = '';
    g(t_n + n).className = className;

}

function SubKey() {
	var s = $("#tkey").val();
	if (s == "") {
		alert("请输入关键字");
		return;
	}

	location.href = "/product.asp?keys=" + s;
}
function enterHandler(event) {

	var keynum;
	if (window.event) // IE 
	{
		keynum = window.event.keyCode
	}
	else {

		if (event.which) // Netscape/Firefox/Opera 
		{
			keynum = event.which
		}

		if (keynum == 13) {

			SubKey();
			if (window.event)
				window.event.returnValue = false;
			else
				event.preventDefault(); //for firefox 
		}
	}
}
function changeimg(imgobj,src,url,names)
{
	$(imgobj).find("img").attr("src",src);
	$(imgobj).find("a").attr("href",url);
	$(imgobj).find("a").attr("title",names);
	$(imgobj).find("label").html(names);
	
}