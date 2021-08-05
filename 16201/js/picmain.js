$(document).ready(function(){ 
  if($("#imgs").width() > 800){ 
    $("#imgs").attr("width", 800); 
  } 
  if($('.xwnymmain').find('img')){ 
    $('.xwnymmain').find('img').each(function(index, element){ 
      if($(this).width() > 800){ 
        $(this).attr("width", 800); 
      } 
    }); 
  } 
}); 