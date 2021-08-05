$(document).ready(function(){ 
  if($("#imgs").width() > 930){ 
    $("#imgs").attr("width", 930); 
  } 
  if($('.showt').find('img')){ 
    $('.showt').find('img').each(function(index, element){ 
      if($(this).width() > 930){ 
        $(this).attr("width", 930); 
      } 
    }); 
  } 
}); 