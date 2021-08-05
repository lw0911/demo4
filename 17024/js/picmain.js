$(document).ready(function(){ 
  if($("#imgs").width() > 1200){ 
    $("#imgs").attr("width", 1200); 
  } 
  if($('.about_cen').find('img')){ 
    $('.about_cen').find('img').each(function(index, element){ 
      if($(this).width() > 1200){ 
        $(this).attr("width", 1200); 
      } 
    }); 
  } 
}); 