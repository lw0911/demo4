$(document).ready(function(){ 
  if($("#imgs").width() > 950){ 
    $("#imgs").attr("width", 950); 
  } 
  if($('.content').find('img')){ 
    $('.content').find('img').each(function(index, element){ 
      if($(this).width() > 950){ 
        $(this).attr("width", 950); 
      } 
    }); 
  } 
}); 