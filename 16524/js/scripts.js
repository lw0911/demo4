// All functions

$(document).ready(function() { 
	
	// portfolio hover
	portHover();
	
	// tabs function 
	$(".tabToggle").hide(); // Hide all tab conten divs by default
	$(".tabToggle:first").show(); // Show the first div of tab content by default
	
	$(".doTab ul li a").click(function(){ //Fire the click event
		
		var activeTab = $(this).attr("href"); // Catch the click link
		$(".doTab ul li ").removeClass("active"); // Remove pre-highlighted link
		$(this).parent('li').addClass("active"); // set clicked link to highlight state
		$(".tabToggle").hide(); // hide currently visible tab content div
		$(activeTab).fadeIn(); // show the target tab content div by matching clicked link.
		adjustPole();
		return false;
	});
	
	
	// form validation 
	$("#contactSubmit").click(function(e){
		e.preventDefault();
		
		var error  = false;
		var name   = $("#name").val();
		var email  = $("#email").val();
		var message= $("#message").val();
		var regex  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
		
		// remove default values 
		if(name == "Name"){
			name = "";
		}
		if(email == "Email"){
			email = "";
		}
		if(message == "Message"){
			message = "";
		}
		
		if($.trim(name).length == 0){
			var error = true;
			$(".name_error").animate({left:"0", zIndex:1},100);
			$("#name").css('border-color','#FF0000');
		}else{
			$(".name_error").animate({left:"-52px", zIndex:-1},300);
			$("#name").css('border-color','#CCCCCC');
		}
		
		if($.trim(email).length == 0 || regex.test(email) == false){
			var error = true;
			$(".email_error").animate({left:"0px", zIndex:1},100);
			$("#email").css('border-color','#FF0000');
		}else{
			$(".email_error").animate({left:"-52px", zIndex:-1},300);
			$("#email").css('border-color','#CCCCCC');
		}
		
		if($.trim(message).length == 0){
			var error = true;
			$("#message").css('border-color','#FF0000');
		}else{
			$("#message").css('border-color','#CCCCCC');
		}
		if(error == false){
			$.post("contact-submit.php",{name:name, email:email, message:message},function(data){
				if(data == "sent"){
					$(".alert-success").removeClass('hide').delay(3000).queue(function (){
						$(this).addClass('hide');
					});
					$("#contactForm")[0].reset();
				}else{
					$(".alert-error").removeClass('hide').delay(3000).queue(function (){
						$(this).addClass('hide');
					});
				}
			});
			
		}
	});

});

$(window).load(function() { 
	// set the height of ribbonBg
	adjustPole();
});
$(window).resize(function() { 
	// set the height of ribbonBg
	adjustPole();
});
function adjustPole() {
	$(".ribbonBg").css('height',($(".contant-area").innerHeight() + 40));
}

function findFocus(obj)
{
	if(obj.type=="textarea")
		if(obj.innerHTML==obj.title)obj.innerHTML='';
	else
		if(obj.value==obj.title)obj.value='';
}

function looseFocus(obj)
{
	if(obj.type=="textarea")
		if(obj.innerHTML=='')obj.innerHTML=obj.title;
	else
		if(obj.value=='')obj.value=obj.title;	
}

function portHover() { 
	// hover function for portfolio
	$(".port-hover").hover(function() { 
		
		var boxMH = (($(this).height() / 2) - 21 );
		$(this).children(".display-link").children('a').css('top',boxMH);
	
		var boxMW = (($(this).width() / 2 ) - 21 );
		
		$(this).children(".display-link").show('fast',function() { 
			$(this).children('a').animate({left:boxMW},100);	
		});
		
	},function() {  
		$(this).children(".display-link").children('a').animate({left:0},100,function() {
			$(this).parent(".display-link").hide();
		})
	});
}