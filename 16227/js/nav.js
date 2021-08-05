//	导航栏start
//获取元素
var ico=document.getElementsByClassName("ico")[0];
var lists=document.getElementsByClassName("uu-lists")[0];
//点击事件
ico.onclick = function() {
//	判断是否透明
	if(lists.style.opacity ==1){
		//	透明择显示
		lists.style.opacity="0"
	}else{
		//	显示择透明
		lists.style.opacity="1"
	}
	
 	
 }
//	导航栏end
