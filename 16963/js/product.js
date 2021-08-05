 function checkScrollDirector() { //判断滚动条是否滑到底部  
    var flag = 0;
    if($(document).scrollTop() + $(window).height() >= $(document).height()-50) {
        flag = 1;
    }
    return flag;
}
window.onload = function() {
  var json = {
      "data": [{
              "src": "images/service.png"
          }, {
              "src": "images/service.png"
          }, {
              "src": "images/service.png"
          }
      ]
  };
  window.onscroll = function() { //滚动条滚动执行  <div class='box'><div class='boximg'>< img src=""></div></div>
      if(checkScrollDirector()) {
          for(var i = 0; i < json.data.length; i++) {
              var html = '<div class="ser_li"><div class="img"><img src=' + json.data[i].src + ' alt=""></div><div class="text"><h3>行驶证年检</h3><div class="time">2018-05-21</div><div class="info">我们来自物流行业，每天需要直面大量的车主以及货车司机。因此无论是切身感受还是来自车主的心声诉说，我们都深刻了解物流行业的各种困难，比如车价昂贵首付款难以一时付清；维修保养...</div><a href="detail.html">详细内容</a></div></div>';
              $(".service").append(html); //向容器内一次性添加12个图片  
          }
      }
  }
}