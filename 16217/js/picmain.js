$(document).ready(function(){ 
  if($("#imgs").width() > 1000){ 
    $("#imgs").attr("width", 1000); 
  } 
  if($('.xwnymmain').find('img')){ 
    $('.xwnymmain').find('img').each(function(index, element){ 
      if($(this).width() > 1020){ 
        $(this).attr("width", 1020); 
      } 
    }); 
  } 
}); 