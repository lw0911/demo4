 //获取元素
 var zh = document.getElementById("text");
 var pwd = document.getElementById("pwd");
 var login = document.getElementById("login");
 var warn = document.getElementById("warning");

 //判断文本框内容
 function isnull(val) {
 	
 	var str = val.replace(/(^\s*)|(\s*$)/g, ''); //去除空格;
 	//      判断为空 或者没有值
 	if(str == '' || str == undefined || str == null) {
//文本框有值
 		return true;
 	} else {
 		//文本框没值
 		return false;
 	}
 }
 //登录点击事件
 login.onclick = function() {
 	//判断是否为空
 	if(isnull(zh.value) ||	isnull(pwd.value)) {
 			//清空错误
 		warn.style.opacity = "1";
 		
 	} else {
 			//跳转到主页
 		window.location.href = 'index.html';
 		
 	}

 }
 //获取到焦点清空错误
 function tips() {
 	//清空错误
 	warn.style.opacity = "0";
 };
 
