/**
 * Created by zhang-ting on 2015/8/12.
 */
function aclose(){
    document.getElementById("topbanner").style.display="none";
}
//�����˵�
//function underfx(){
//    var underline=document.getElementsByClassName(".content-nav ul li");
//    underline.addClass("underline");
//}
//function nounderfix(){
//    var nounderline=document.getElementsByClassName(".content-nav ul li");
//    nounderline.removeClass("underline");
//}
//���������ʾ
function showpic(li){
    var pic=li.getElementsByTagName("ul")[0];
    pic.style.display="block";
}
function hidepic(li){
    var pic=li.getElementsByTagName("ul")[0];
    pic.style.display="none";
}

//ʱ����
$(function(){
    $(".diary-year").addClass("close");
    $(".diary-year").last().removeClass("close");
    $(".diary-main .diary-year .diary-list").each(function (e, target) {
        var $target=  $(target),
            $ul = $target.find("ul");
        $target.height($ul.outerHeight()), $ul.css("position", "absolute");
    });

    $(".diary-main .diary-year>.years>a").click(function (e) {
        e.preventDefault();
        $(this).parents(".diary-year").toggleClass("close")
    });
})

//����羰
window.onload=function()   //onload �¼�������ĵ�װ�ؽ���ʱ����
    {
        var tag=document.getElementById("tag").children; //��ȡTag�µ�li����Tag��ǩ
        var content=document.getElementById("tagContent").children; //��ȡTag��ǩ��Ӧ������
        content[0].style.display = "block"; //Ĭ����ʾ��һ����ǩ������
        tag[0].className="current";
        var len= tag.length;
        for(var i=0; i<len; i++)   //���۵��˭����ʵ�ֵ�ǰ��ʾ����������
        {
            tag[i].index=i; //Ϊ����ˣ�����������ͣ�
            tag[i].onclick = function()     //0��DOM���¼����ע��
            {
                for(var n=0; n<len; n++)
                {
                    tag[n].className="";
                    content[n].style.display="none";
                }   //���Ƚ�ȫ����div����
                tag[this.index].className = "current";
                content[this.index].style.display = "block";
            }
        }
    }
$(function(){
    $(".lifecon1 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon1 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon1 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon1 .life-pic li").eq(n-1).slideUp(100);
    })
    $(".lifecon2 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon2 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon2 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon2 .life-pic li").eq(n-1).slideUp(100);
    })
    $(".lifecon3 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon3 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon3 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon3 .life-pic li").eq(n-1).slideUp(100);
    })
    $(".lifecon4 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon4 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon4 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon4 .life-pic li").eq(n-1).slideUp(100);
    })
    $(".lifecon5 .life-pic").mouseenter(function(){
        n=$(this).index();
        $(".lifecon5 .life-pic li").eq(n-1).slideDown(100);
    })
    $(".lifecon5 .life-pic").mouseleave(function(){
        n=$(this).index();
        $(".lifecon5 .life-pic li").eq(n-1).slideUp(100);
    })
})








//���ض���
$(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() >= 100){
            $('.totop').fadeIn(300);
        }else{
            $('.totop').fadeOut(300);
        }
    });
    $('.totop').click(function(){$('html,body').animate({scrollTop: '0px'}, 1000);}); //�������ͣ��ʱ�䣬ԽС��ʧ��Խ��~
});