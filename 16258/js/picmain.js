$(document).ready(function(){ 
  if($("#imgs").width() > 840){ 
    $("#imgs").attr("width", 840); 
  } 
  if($('.cpzsny').find('img')){ 
    $('.cpzsny').find('img').each(function(index, element){ 
      if($(this).width() > 840){ 
        $(this).attr("width", 840); 
      } 
    }); 
  } 
}); 
