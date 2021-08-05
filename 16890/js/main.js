// JavaScript Document
function setSearch(str,id){
    mydiv=document.getElementById(id);
	if(mydiv.value==str){
		mydiv.value="";
	}else if(mydiv.value==''){
		mydiv.value=str;
		}
}

function menuHover(id){
	document.getElementById('childmenu_bar').style.display="block";
	document.getElementById(id).style.display="block";
	
	}

function menuOut(id){
	document.getElementById('childmenu_bar').style.display="none";
	document.getElementById(id).style.display="none";
	}

/*banner*/
$(function(){
var timer=5000;
var showtime = 800;
var showbox = $("#banner_show");
var inbox = $(".bannger_inbox");
var movelist = $("#yq_banner_list");
var s;
var b = 0;
var size =inbox.size();
var play = 1;
function move(){
b++;
if(b>size-1){
b=0;
}
inbox.each(function(e){
inbox.eq(e).hide(0);
$("#banner_magbox"+e).hide();
movelist.find("a").eq(e).removeClass("hover");
if(e == b){
inbox.eq(b).fadeIn(showtime);
$("#banner_magbox"+b).show();
movelist.find("a").eq(b).addClass("hover");
}
});
}
s = setInterval(move,timer);
function stopp(obj){
$(obj).hover(function(){
if(play){
clearInterval(s);
play = 0;
}	  
},
function(){
if(!play){
s = setInterval(move,timer); 
play = 1;
}	
}		  
);
}
stopp(".banner_show");
$(".banner_btn_right").click(function(){
move(); 
});
$(".banner_btn_left").click(function(){
b--;
if(b<0){
b=size-1
}
inbox.each(function(e){
inbox.eq(e).hide(0);
movelist.find("a").eq(e).removeClass("hover");
if(e == b){
inbox.eq(b).fadeIn(showtime);
movelist.find("a").eq(b).addClass("hover");
}
}); 
});
movelist.find("a").click(function(){
var rel = $(this).attr("rel");
inbox.each(function(e){
inbox.eq(e).hide(0);
movelist.find("a").eq(e).removeClass("hover");
$("#banner_magbox"+e).hide(0);
if(e == rel){
inbox.eq(rel).fadeIn(showtime);
movelist.find("a").eq(rel).addClass("hover");
$("#banner_magbox"+rel).show(0);	
}
});
});
$(".bannger_inbox").each(function(e){
var inboxsize = $(".bannger_inbox").size();
inboxwimg = $(this).find("img").width();
$(".bannger_inbox").eq(e).css({"margin-left":(-1)*inboxwimg/2+"px","z-index":inboxsize-e});
});
$(".banner").hover(
function(){
	$(".banner_pre_next").fadeIn();
	},function(){
		$(".banner_pre_next").fadeOut();
		})
});



/***?��?????**/
/*
function changeCity(){
mydirect=document.getElementById('direct');
mycity_now=document.getElementById('city_now');
mycity=document.getElementById('city');
mycityList=document.getElementById('cityList');
mydirect.style.backgroundImage="url(templates/default/images/direct_r.jpg)";
mycity.className="cityHover left";
mycityList.style.display="block";
}

function colseCity(){
mydirect=document.getElementById('direct');
mycity_now=document.getElementById('city_now');
mycity=document.getElementById('city');
mycityList=document.getElementById('cityList');
mydirect.style.backgroundImage="url(templates/default/images/direct_d.jpg)";
mycity.className="city left";
mycityList.style.display="none";
}

function changeGrade(){
mydirect=document.getElementById('direct_g');
mycity_now=document.getElementById('grade_now');
mycity=document.getElementById('grade');
mycityList=document.getElementById('gradeList');
mydirect.style.backgroundImage="url(templates/default/images/direct_r.jpg)";
mycity.className="cityHover left";
mycityList.style.display="block";
}

function colseGrade(){
mydirect=document.getElementById('direct_g');
mycity_now=document.getElementById('grade_now');
mycity=document.getElementById('grade');
mycityList=document.getElementById('gradeList');
mydirect.style.backgroundImage="url(templates/default/images/direct_d.jpg)";
mycity.className="city left";
mycityList.style.display="none";
}
*/

/******?????******/
function showQrcode(){
document.getElementById('qrcode').style.display="block";
}

function hidQrcode(){
document.getElementById('qrcode').style.display="none";
}

function redirect(url,target){
if(target==''||target==null){
	target="_self";
	}
window.open(url, target);

}

function drop(id){
	mydiv=document.getElementById(id);
	mystyle=mydiv.style.display;
	if(mystyle=="block"){
		mydiv.style.display="none";
	}
	else{
		mydiv.style.display="block";
	}
//document.getElementById(id).style.display="block";
}

function dropValue(vid,v,id,drop,input){
	//alert("123");
document.getElementById(id).value=vid;
document.getElementById(input).value=v;
document.getElementById(drop).style.display="none";
}

function hide(id){
document.getElementById(id).style.display="none";
}

function show(id){
document.getElementById(id).style.display="block";
}



function menu_box_hover(menu,icon,img){
	if(menu=="menu_box1" || menu=="menu_box4"){
document.getElementById(menu).className="menu_box_hover  left";
	}
	else{
	document.getElementById(menu).className="menu_box_hover ml60 left";
	}
document.getElementById(icon).style.background="url("+img+") no-repeat center";
}

function menu_box_normal(menu,icon,img){
if(menu=="menu_box1" || menu=="menu_box4"){
document.getElementById(menu).className="menu_box  left";
	}
	else{
	document.getElementById(menu).className="menu_box ml60 left";
	}
document.getElementById(icon).style.background="url("+img+") no-repeat";

}


function changeTab(id){
for(i=1;i<=4;i++){
	document.getElementById('tab_'+i).className="intractive_tab left pointer";
	document.getElementById('con_'+i).style.display="none";
	
}
document.getElementById('tab_'+id).className="intractive_tab hover left pointer";
document.getElementById('con_'+id).style.display="block";
}


function changeTabx(id){
for(a=1;a<=5;a++){
	document.getElementById('tabx_'+a).className="intractive_tab left pointer";
	document.getElementById('conx_'+a).style.display="none";
	
}
document.getElementById('tabx_'+id).className="intractive_tab hover left pointer";
document.getElementById('conx_'+id).style.display="block";
}


function DateSelector(selYear, selMonth, selDay) { 
this.selYear = selYear; 
this.selMonth = selMonth; 
this.selDay = selDay; 
this.selYear.Group = this; 
this.selMonth.Group = this; 
// ???????��??????????????onchange???????? 
if (window.document.all != null) // IE 
{ 
this.selYear.attachEvent("onchange", DateSelector.Onchange); 
this.selMonth.attachEvent("onchange", DateSelector.Onchange); 
} 
else // Firefox 
{ 
this.selYear.addEventListener("change", DateSelector.Onchange, false); 
this.selMonth.addEventListener("change", DateSelector.Onchange, false); 
} 
if (arguments.length == 4) // ???????????????4?????????????????Date???? 
this.InitSelector(arguments[3].getFullYear(), arguments[3].getMonth() + 1, arguments[3].getDate()); 
else if (arguments.length == 6) // ???????????????6???????????????????????????????? 
this.InitSelector(arguments[3], arguments[4], arguments[5]); 
else // ???????????? 
{ 
var dt = new Date(); 
this.InitSelector(dt.getFullYear(), dt.getMonth() + 1, dt.getDate()); 
} 
} 
// ?????????????????? 
DateSelector.prototype.MinYear = 1900; 
// ?????????????????? 
DateSelector.prototype.MaxYear = (new Date()).getFullYear(); 
// ???????? 
DateSelector.prototype.InitYearSelect = function () { 
// ??????OPION???????select?????? 
for (var i = this.MaxYear; i >= this.MinYear; i--) { 
// ??????OPTION???? 
var op = window.document.createElement("OPTION"); 
// ????OPTION?????? 
op.value = i; 
// ????OPTION????????? 
op.innerHTML = i; 
// ???????select???? 
this.selYear.appendChild(op); 
} 
} 
// ??????��? 
DateSelector.prototype.InitMonthSelect = function () { 
// ??????OPION?????��?select?????? 
for (var i = 1; i < 13; i++) { 
// ??????OPTION???? 
var op = window.document.createElement("OPTION"); 
// ????OPTION?????? 
op.value = i; 
// ????OPTION????????? 
op.innerHTML = i; 
// ?????��?select???? 
this.selMonth.appendChild(op); 
} 
} 
// ??????????��??????��????? 
DateSelector.DaysInMonth = function (year, month) { 
var date = new Date(year, month, 0); 
return date.getDate(); 
} 
// ????????? 
DateSelector.prototype.InitDaySelect = function () { 
// ???parseInt?????????????????��? 
var year = parseInt(this.selYear.value); 
var month = parseInt(this.selMonth.value); 
// ??????��????? 
var daysInMonth = DateSelector.DaysInMonth(year, month); 
// ?????��???? 
this.selDay.options.length = 0; 
// ??????OPION????????select?????? 
for (var i = 1; i <= daysInMonth; i++) { 
// ??????OPTION???? 
var op = window.document.createElement("OPTION"); 
// ????OPTION?????? 
op.value = i; 
// ????OPTION????????? 
op.innerHTML = i; 
// ????????select???? 
this.selDay.appendChild(op); 
} 
} 
// ?????????��?onchange???????????????????????????selYear??selMonth?? 
// ??????????Group??????DateSelector????????????????????InitDaySelect???????3???????? 
// ????e?event???? 
DateSelector.Onchange = function (e) { 
var selector = window.document.all != null ? e.srcElement : e.target; 
selector.Group.InitDaySelect(); 
} 
// ?????????????????????? 
DateSelector.prototype.InitSelector = function (year, month, day) { 
// ????????????????????????????????????????selYear??selMonth????????? 
// ???????InitDaySelect????????????????????????????????????????????? 
this.selYear.options.length = 0; 
this.selMonth.options.length = 0; 
// ????????? 
this.InitYearSelect(); 
this.InitMonthSelect(); 
// ???????3??? 
this.selYear.selectedIndex = this.MaxYear - year; 
this.selMonth.selectedIndex = month - 1; 
// ????????? 
this.InitDaySelect(); 
// ???????????? 
this.selDay.selectedIndex = day - 1; 
} 

/*
function createxmlhttp(){
	xmlhttp=null;
	if (window.XMLHttpRequest)
	  {// code for all new browsers
	  xmlhttp=new XMLHttpRequest();
	  }
	else if (window.ActiveXObject)
	  {// code for IE5 and IE6
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	return xmlhttp;
}

function g(id){
	return document.getElementById(id);
}


function orderCourse(){
	xmlhttp=createxmlhttp();
	product_id=g('product_id').value;
	city_id=g('city_id').value;
	school_id=g('school_value2').value;
	user=g('user').value;
	tel=g('tel').value;
	orderBtn=g('orderBtn');
	orderBtn2=g('orderBtn2');
	order_url=g('order_url').value;
	var myreg = /^((1[0-9]{1})+\d{9})$/;
	if(user==''){
		alert("????????????");
	}
	else if(tel==''){
		alert("????????????");
	}
	else if(!myreg.test(tel))
    {
        alert('????????��?????????');
    }
	else if(school_id==''){
		alert("???????��??");
	}
	else if(product_id==''){
		alert("????????��?");
	}
	else{
	url="Order.php?action=add&product="+product_id+"&city="+city_id;
	url+="&school="+school_id+"&user="+user+"&tel="+tel+"&order_url="+order_url;
	url=encodeURI(encodeURI(url));
	if (xmlhttp!=null)
	  {
	  orderBtn.style.display="none";
	  orderBtn2.style.display="block";
	  xmlhttp.onreadystatechange=orderCourse_Change;
	  xmlhttp.open("GET",url,true);
	  xmlhttp.send(null);
	  }
	}
}

function orderCourse_Change(){
	if (xmlhttp.readyState==4)
	  {// 4 = "loaded"
	  if (xmlhttp.status==200)
	    {// 200 = OK
	    // ...our code here...
		  result=trim(xmlhttp.responseText);
		  if(result=='1'){
			  alert("???????"); 
		  }
		  else if(result=='2'){
			  alert("??????????????24��????????????????"); 
		  }
		  else{
			  alert("?????????????");
		  }
		  g('orderBtn').style.display="block";
		  g('orderBtn2').style.display="none";
	    }
	  else
	    {
	    alert("Problem retrieving XML data");
	    }
	  }
}

function orderCourse_l(){
	xmlhttp=createxmlhttp();
	product_id=g('product_id').value;
	city_id=g('city_id_l').value;
	school_id=g('school_value').value;
	user=g('user_l').value;
	tel=g('tel_l').value;
	orderBtn=g('orderBtn_l');
	orderBtn2=g('orderBtn_l2');
	order_url=g('order_url').value;
	var myreg = /^((1[0-9]{1})+\d{9})$/;
	if(user==''){
		alert("????????????");
	}
	else if(tel==''){
		alert("????????????");
	}
	else if(!myreg.test(tel))
    {
        alert('????????��?????????');
    }
	else if(school_id==''){
		alert("???????��??");
	}
	else if(product_id==''){
		alert("????????��?");
	}
	else{
	url="Order.php?action=add&product="+product_id+"&city="+city_id;
	url+="&school="+school_id+"&user="+user+"&tel="+tel+"&order_url="+order_url;
	url=encodeURI(encodeURI(url));
	if (xmlhttp!=null)
	  {
	  orderBtn.style.display="none";
	  orderBtn2.style.display="block";
	  xmlhttp.onreadystatechange=orderCourse_Change_l;
	  xmlhttp.open("GET",url,true);
	  xmlhttp.send(null);
	  }
	}
}

function orderCourse_Change_l(){
	if (xmlhttp.readyState==4)
	  {// 4 = "loaded"
	  if (xmlhttp.status==200)
	    {// 200 = OK
	    // ...our code here...
		  result=trim(xmlhttp.responseText);
		  if(result=='1'){
			  alert("???????"); 
		  }
		  else if(result=='2'){
			  alert("??????????????24��????????????????"); 
		  }
		  else{
			  alert("?????????????");
		  }
		  g('orderBtn_l').style.display="block";
		  g('orderBtn_l2').style.display="none";
	    }
	  else
	    {
	    alert("Problem retrieving XML data");
	    }
	  }
}
*/
function trim(str){ //?????????????? 
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
	}

function register(){
	var username,password,repassword,checkcode,username_f,password_f,repassword_f,read;
	username=g('username');
	password=g('password');
	repassword=g('repassword');
	username_f=g('username_f');
	password_f=g('password_f');
	repassword_f=g('repassword_f');
	checkcode=g('checkcode');
	read=g('read');
	button=g('button');
	
	if(username_f.innerHTML !='OK' ){
			username.focus();
	}
	else if(password_f.innerHTML !='OK' ){
		    password.focus();
	}
	else if(repassword_f.innerHTML !='OK' ){
		    repassword.focus();
    }
	else if(checkcode.value==""){
		alert("???????????");
		checkcode.focus();
	}
	else if(g("read").checked){
		xmlhttp=createxmlhttp();
		url="Login.php?action=add&username="+trim(username.value)+"&password="+trim(password.value)+"&checkcode="+trim(checkcode.value);
		url=encodeURI(encodeURI(url));
		if (xmlhttp!=null)
		  {
		  button.value="?????...";
		  xmlhttp.onreadystatechange=register_Change;
		  xmlhttp.open("GET",url,true);
		  xmlhttp.send(null);
		  }
	}
	else{
		alert("??????????????????��?��");
	}
	
}

function register_Change(){
	if (xmlhttp.readyState==4)
	  {// 4 = "loaded"
	  if (xmlhttp.status==200)
	    {// 200 = OK
	    // ...our code here...
		  result=trim(xmlhttp.responseText);
		  if(result=='1000'){
			  window.location.href="Member.php";
		  }
		  else if(result=='1002'){
			  alert('???????????????????');
			  g('button').value="???";
		  }
		  else if(result=='1001'){
			  alert("????????");
			  g('button').value="???";
			  g('checkcode').focus();
		  }
	    }
	  else
	    {
	    alert("Problem retrieving XML data");
	    }
	  }
}

function validateuser(){
	var username,username_f;
	username=g('username');
	username_f=g('username_f');
	if(trim(username.value)==''){
		username_f.innerHTML="???????????????";
		return;
	}
	else if(escape(username.value).indexOf("%u")>0){
		username_f.innerHTML ='??????????????' ;
		username.focus();
		return;
	}
	else if(trim(username.value).length<6){
		username_f.innerHTML="??????????6��????";
		return;
	}
	else{
		xmlhttp=createxmlhttp();
		url="Login.php?action=checkuser&username="+trim(username.value);
		url=encodeURI(encodeURI(url));
		if (xmlhttp!=null)
		  {
		  username_f.innerHTML="?????...";
		  xmlhttp.onreadystatechange=checkUser_Change;
		  xmlhttp.open("GET",url,true);
		  xmlhttp.send(null);
		  }
	}
}

function checkUser_Change(){
	if (xmlhttp.readyState==4)
	  {// 4 = "loaded"
	  if (xmlhttp.status==200)
	    {// 200 = OK
	    // ...our code here...
		  result=trim(xmlhttp.responseText);
		  if(result=='1'){
			  username_f.innerHTML="OK";
		  }
		  else{
			  username_f.innerHTML="????????";
		  }
	    }
	  else
	    {
	    alert("Problem retrieving XML data");
	    }
	  }
}

function validatepassword(){
	var password,password_f;
	password=g('password');
	password_f=g('password_f');
	if(trim(password.value)==''){
		password_f.innerHTML="???????????????";
		return;
	}
	else if(escape(password.value).indexOf("%u")>0){
		password_f.innerHTML ='??????????????' ;
		password.focus();
		return;
	}
	else if(trim(password.value).length<6){
		password_f.innerHTML="???????6��????";
		return;
	}
	else{
		password_f.innerHTML="OK";
	}
	
}

function validaterepassword(){
	var password,repassword,repassword_f;
	password=g('password');
	repassword=g('repassword');
	repassword_f=g('repassword_f');
	
	if(trim(password.value)==''){
		repassword_f.innerHTML="???????????????";
		return;
	}
	else if(trim(password.value)!=trim(repassword.value)){
		
		repassword_f.innerHTML="???????????????";
		return;
	}
	else{
		repassword_f.innerHTML="OK";
	}
}

function saveImage(img){
	xmlhttp=createxmlhttp();
	url="Member.php?action=upload_save&img="+trim(img);
	url=encodeURI(encodeURI(url));
	if (xmlhttp!=null)
	  {
	  xmlhttp.onreadystatechange=upload_Change;
	  xmlhttp.open("GET",url,true);
	  xmlhttp.send(null);
	  }
}

function upload_Change(){
	if (xmlhttp.readyState==4)
	  {// 4 = "loaded"
	  if (xmlhttp.status==200)
	    {// 200 = OK
	    // ...our code here...
		  result=trim(xmlhttp.responseText);
		  if(result=='1000'){
			  alert("??????");
			  window.location.href="Member.php";
		  }
		  else{
			  alert("?????????????????????");
		  }
	    }
	  else
	    {
	    alert("Problem retrieving XML data");
	    }
	  }
}

/**
 * ???????
 */
$(function() {
	var e = $("#rocket-to-top"),
	t = $(document).scrollTop(),
	n,
	r,
	i = !0;
	$(window).scroll(function() {
		var t = $(document).scrollTop();
		t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
			marginTop: "-1000px"
		},
		"normal",
		function() {
			e.css({
				"margin-top": "-125px",
				display: "none"
			}),
			i = !0
		})) : e.fadeIn("slow")
	}),
	e.hover(function() {
		$(".level-2").stop(!0).animate({
			opacity: 1
		})
	},
	function() {
		$(".level-2").stop(!0).animate({
			opacity: 0
		})
	}),
	//download by www.sucaijiayuan.com
	$(".level-3").click(function() {
		function t() {
			var t = e.css("background-position");
			if (e.css("display") == "none" || i == 0) {
				clearInterval(n),
				e.css("background-position", "0px 0px");
				return
			}
			switch (t){
			case "0px 0px":
				e.css("background-position", "-298px 0px");
				break;
			case "-298px 0px":
				e.css("background-position", "-447px 0px");
				break;
			case "-447px 0px":
				e.css("background-position", "-596px 0px");
				break;
			case "-596px 0px":
				e.css("background-position", "-745px 0px");
				break;
			case "-745px 0px":
				e.css("background-position", "-298px 0px");
			}
		}
		if (!i) return;
		n = setInterval(t, 50),
		$("html,body").animate({scrollTop: 0},"slow");
	});
});

function showTeacher(id,num){
	var i;
//	alert('teacher_con'+num);
	for(i=0;i<num;i++){
//		alert('teacher_con'+i);
		g('teacher_con'+i).style.display="none";
		
	}
//	alert('teacher_con'+id);
	g('teacher_con'+id).style.display="block";
	
}



function listcourse(grade){
	url="listcourse.php?act=ajax&grade="+grade;
	$.ajax({
		type: "get",
		url: url,
		beforeSend: function(XMLHttpRequest){
		//ShowLoading();
		},
		success: function(datas, textStatus){
			var datas = eval("("+datas+")")
			if(datas.code=='1'){
				$("#course_drop").html(datas.data);
				//alert("?�w??????????"+datas.data.award_name+",??????????????"+datas.data.MatchNum);
			}
			else if(datas.code=='0'){
			}
		},

		complete: function(XMLHttpRequest, textStatus){
		//HideLoading();
			
		},
		error: function(){
		//??????????
		alert('??????');
		}
		});
}


/*
var js = document.getElementsByTagName("script");
for(var i=0;i<js.length;i++){
    if(js[i].src.indexOf("main.js")>=0){
        var arraytemp = new Array();
        arraytemp = js[i].src.split('?');
        arraytemp = arraytemp[1].split('=');
//        alert(arraytemp[0]+"="+arraytemp[1]);
        var city=arraytemp[1];
    }
}
*/

//??????
/*
if(city=='fs'){
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "//hm.baidu.com/hm.js?7f61ff6edb0d3aa36469fb946be6144a";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
}
else{
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "//hm.baidu.com/hm.js?ca1f3d7b4e0512f54b429bd70d9b4d95";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
}
*/
function showCover(id){
	$("#"+id).show();
	}
function hideCover(id){
	$("#"+id).hide();
	}
