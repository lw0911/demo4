// JavaScript Document
/*--导航背景--*/
$('#nav li').click(function () {
                var f = this;
                $('#nav li').each(function () {  this.className = this == f ? 'li1' : 'li'   });
            });
			
$('#nav1 li').click(function () {
                var f = this;
                $('#nav1 li').each(function () {  this.className = this == f ? 'li1' : 'li'   });
            });
/*--首页模块切换--*/
function $_class(name){
		 var elements = document.getElementsByTagName("*");
		 for(b=0;b<elements.length;b++){
		  if(elements[b].className==name){
		   return  elements[b];
		  }
		 }
		}
		//tab effects
		var tabLis1 = $_class("sen_ul1").getElementsByTagName("li")
		 tabCo1 = $_class("nr").getElementsByTagName("div");
		for(i=0;i<tabLis1.length;i++){
		 (function(){
		  var t = i;
		  tabLis1[t].onmouseover = function(){
		   for(o=0;o<tabCo1.length;o++){
			tabCo1[o].style.display = "none";
			tabLis1[o].className = "";
			if(t==o){
			 this.className = "hover";
			 tabCo1[o].style.display = "block";
			}
		   }
		  }
		 })()
		}
		
		function $_class(name){
		 var elements = document.getElementsByTagName("*");
		 for(b=0;b<elements.length;b++){
		  if(elements[b].className==name){
		   return  elements[b];
		  }
		 }
		}
		//tab effects
		var tabLis = $_class("sen_ul2").getElementsByTagName("li")
		 tabCo = $_class("nr1").getElementsByTagName("div");
		for(i=0;i<tabLis.length;i++){
		 (function(){
		  var t = i;
		  tabLis[t].onmouseover = function(){
		   for(o=0;o<tabCo.length;o++){
			tabCo[o].style.display = "none";
			tabLis[o].className = "";
			if(t==o){
			 this.className = "hover";
			 tabCo[o].style.display = "block";
			}
		   }
		  }
		 })()
		}
		
		
function $_class(name){
		 var elements = document.getElementsByTagName("*");
		 for(b=0;b<elements.length;b++){
		  if(elements[b].className==name){
		   return  elements[b];
		  }
		 }
		}
		//tab effects
		var tabLis2= $_class("sen_ul3").getElementsByTagName("li")
		 tabCo2 = $_class("cnr").getElementsByTagName("div");
		for(i=0;i<tabLis2.length;i++){
		 (function(){
		  var t = i;
		  tabLis2[t].onmouseover = function(){
		   for(o=0;o<tabCo2.length;o++){
			tabCo2[o].style.display = "none";
			tabLis2[o].className = "";
			if(t==o){
			 this.className = "hover";
			 tabCo2[o].style.display = "block";
			}
		   }
		  }
		 })()
		}
		
function $_class(name){
		 var elements = document.getElementsByTagName("*");
		 for(b=0;b<elements.length;b++){
		  if(elements[b].className==name){
		   return  elements[b];
		  }
		 }
		}
		//tab effects
		var tabLis3= $_class("sen_ul4").getElementsByTagName("li")
		 tabCo3 = $_class("cnr3").getElementsByTagName("div");
		for(i=0;i<tabLis3.length;i++){
		 (function(){
		  var t = i;
		  tabLis3[t].onmouseover = function(){
		   for(o=0;o<tabCo3.length;o++){
			tabCo3[o].style.display = "none";
			tabLis3[o].className = "";
			if(t==o){
			 this.className = "hover";
			 tabCo3[o].style.display = "block";
			}
		   }
		  }
		 })()
		}
		
		
function $_class(name){
		 var elements = document.getElementsByTagName("*");
		 for(b=0;b<elements.length;b++){
		  if(elements[b].className==name){
		   return  elements[b];
		  }
		 }
		}
		//tab effects
		var tabLis4= $_class("sen_ul5").getElementsByTagName("li")
		 tabCo4 = $_class("cnr4").getElementsByTagName("div");
		for(i=0;i<tabLis4.length;i++){
		 (function(){
		  var t = i;
		  tabLis4[t].onmouseover = function(){
		   for(o=0;o<tabCo4.length;o++){
			tabCo4[o].style.display = "none";
			tabLis4[o].className = "";
			if(t==o){
			 this.className = "hover";
			 tabCo4[o].style.display = "block";
			}
		   }
		  }
		 })()
		}
		
function $_class(name){
		 var elements = document.getElementsByTagName("*");
		 for(b=0;b<elements.length;b++){
		  if(elements[b].className==name){
		   return  elements[b];
		  }
		 }
		}
		//tab effects
		var tabLis5= $_class("sen_ul6").getElementsByTagName("li")
		 tabCo5 = $_class("cot3nr").getElementsByTagName("ul");
		for(i=0;i<tabLis5.length;i++){
		 (function(){
		  var t = i;
		  tabLis5[t].onmouseover = function(){
		   for(o=0;o<tabCo5.length;o++){
			tabCo5[o].style.display = "none";
			tabLis5[o].className = "";
			if(t==o){
			 this.className = "hover";
			 tabCo5[o].style.display = "block";
			}
		   }
		  }
		 })()
		}
		

	$(document).ready(function(){
			$(".aa").mousedown(function(){
					$(this).find(".xl:hidden").toggle(10);
				});
			$(".aa").mouseleave(function(){
					$(this).find(".xl:visible").toggle(10);
				});
		});	
	;!function(){
laydate({
   elem: '#demo'
})
}();



var con=document.getElementById("con")
function show(x)
{
	var con=document.getElementById(x)
	if(con.style.display=="none")
	{
		con.style.display="block";	
	}else{
		con.style.display="none";	
		}

}


