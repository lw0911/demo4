﻿$(function () { 
$("#uslookcontext1 .uslookcontext").eq(0).css("display", "block"); 
$("#uslookcontext1 .uslooktitle").eq(0).css("fontSize", "14px"); 
$("#uslookcontext2 .uslookcontext").eq(0).css("display", "block"); 
$("#uslookcontext2 .uslooktitle").eq(0).css("fontSize", "14px"); 
$("#uslookcontext1 .uslooktitle").hover(function () { 
$("#uslookcontext1 .uslooktitle").css("fontSize", "12px"); 
$("#uslookcontext1 .uslookcontext").css("display", "none"); 
$(this).css("fontSize", "14px"); $(this).next().css("display", "block") }, 
function () { }); 
$("#uslookcontext2 .uslooktitle").hover(function () { 
$("#uslookcontext2 .uslooktitle").css("fontSize", "12px"); 
$("#uslookcontext2 .uslookcontext").css("display", "none");
 $(this).css("fontSize", "14px"); $(this).next().css("display", "block") }, 
 function () { }); $(".more").hover(function () { $("#morelist").stop(); 
 $("#morelist").slideDown(500) }, function () { $("#morelist").slideUp(500) }); 
 jQuery(".guessall").slide({ titCell: ".guess ul", mainCell: ".guessnews", autoPage: true, effect: "left", autoPlay: false, vis: 1, trigger: "click", delayTime: 2000, interTime: 3500 }); 
 
 var firstpic = $(".detail_picbot_mid ul li").first().find("img"); 
 var firstsrc = firstpic.attr("bigimg"); 
 var firsttxt = firstpic.attr("text"); 
 $("#pic1").attr("src", firstsrc); firstpic.addClass("selectpic"); 
 $(".miaoshu").text(firsttxt); 
 $("#preArrow").hover(function () { 
 $("#preArrow_A").css("display", "block") }, 
 function () { $("#preArrow_A").css("display", "none") }); 
 $("#nextArrow").hover(function () { 
 $("#nextArrow_A").css("display", "block") }, function () { 
 $("#nextArrow_A").css("display", "none") }); function preclick() { 
 var currrentindex = parseFloat($("#pic1").attr("curindex")); if (currrentindex != 0) { 
 var curli = $(".detail_picbot_mid ul li").eq(currrentindex); 
 var length = $(".detail_picbot_mid ul li").length; if (currrentindex <= (length - 7)) { 
 $(".detail_picbot_mid ul li").eq(currrentindex + 6).css("display", "none"); 
 $(".detail_picbot_mid ul li").eq(currrentindex - 1).css("width", "120px").
 css("display", "block") } 
 var curnextli = $(".detail_picbot_mid ul li").eq(currrentindex - 1); 
 var curnextsrc = curnextli.find("img").attr("bigimg"); 
 var curnexttxt = curnextli.find("img").attr("text"); 
 curli.find("img").removeClass("selectpic"); 
 curnextli.find("img").addClass("selectpic"); 
 $("#pic1").attr("src", curnextsrc); 
 $(".miaoshu").text(curnexttxt); 
 $("#pic1").attr("curindex", currrentindex - 1) } else { $(".bodymodal").css("display", "block"); $(".firsttop").css("display", "block") } } $("#preArrow_B").click(function () { preclick() }); $("#preArrow").click(function () { preclick() }); $("#nextArrow_B").click(function () { nextclick() }); 
 $("#nextArrow").click(function () { nextclick() }); 
 function nextclick() { 
 var currrentindex = parseFloat($("#pic1").attr("curindex")); 
 var length = $(".detail_picbot_mid ul li").length; if (currrentindex != (length - 1)) { 
 var curli = $(".detail_picbot_mid ul li").eq(currrentindex); if (currrentindex > 3) { 
 $(".detail_picbot_mid ul li").eq(currrentindex - 6).css("display", "none"); 
 $(".detail_picbot_mid ul li").eq(currrentindex + 1).css("width", "120px")
 .css("display", "block") } var curnextli = $(".detail_picbot_mid ul li").eq(currrentindex + 1); var curnextsrc = curnextli.find("img").attr("bigimg"); var curnexttxt = curnextli.find("img").attr("text"); curli.find("img").removeClass("selectpic"); curnextli.find("img").addClass("selectpic"); $("#pic1").attr("src", curnextsrc); $("#pic1").attr("curindex", currrentindex + 1); $(".miaoshu").text(curnexttxt) } else { $(".bodymodal").css("display", "block"); $(".endtop").css("display", "block") } } $(".detail_picbot_mid ul li").click(function () { var currentliindex = $(this).index(".detail_picbot_mid ul li"); $(".detail_picbot_mid ul li img[class='selectpic']").removeClass("selectpic"); var currentli = $(".detail_picbot_mid ul li").eq(currentliindex); currentli.find("img").addClass("selectpic"); var bigimgsrc = currentli.find("img").attr("bigimg"); var curnexttxt = currentli.find("img").attr("text"); $("#pic1").attr("src", bigimgsrc); $("#pic1").attr("curindex", currentliindex); $(".miaoshu").text(curnexttxt) }); setblock(); function setblock() { var left = $(window).width() / 2 - 300; $(".firsttop").css("left", left); $(".endtop").css("left", left) } $(window).resize(function () { setblock() }); $(".closebtn1").click(function () { $(".firsttop").css("display", "none"); $(".bodymodal").css("display", "none") }); $(".closebtn2").click(function () { $(".endtop").css("display", "none"); $(".bodymodal").css("display", "none") }); $(".replaybtn1").click(function () { $(".firsttop").css("display", "none"); $(".bodymodal").css("display", "none") }); $(".replaybtn2").click(function () { $(".endtop").css("display", "none"); $(".bodymodal").css("display", "none"); $(".detail_picbot_mid ul li img[class='selectpic']").removeClass("selectpic"); $(".detail_picbot_mid ul li").eq(0).find("img").addClass("selectpic"); var bigimgsrc = $(".detail_picbot_mid ul li").eq(0).find("img").attr("bigimg"); $("#pic1").attr("src", bigimgsrc); $("#pic1").attr("curindex", 0) }) }); $(function () {
    function tableshow() {
        clear(); $("#table").css("border", "1px solid red").css("color", "red"); $.ajax({ type: "get", url: "http://www.askci.com/tools/getdata.ashx?jsoncallback=?", dataType: "jsonp", data: { "id": $("#hiddenid").val(), "type": "table" }, success: function (result) {
            $("#mychart").html(result.context);
            $("#hiddenid").val(result.newid)
        }, beforeSend: function () { $("#load").css("display", "block") }, complete: function () { $("#load").css("display", "none") }, error: function (XMLHttpRequest, textStatus, errorThrown) {}, timeout: 20000
        })
    } tableshow(); $("table td").live("click", function () { $(this).parent().find("input").attr("checked", "true") }); $("#table").click(function () { tableshow() }); $("#dcbtn").live("click", function () { var select = $(".vote:input:checked").val(); if (select == null) { alert("请选择一项"); return } $.ajax({ type: "get", url: "http://www.askci.com/tools/getdata.ashx?jsoncallback=?", data: { "votenum": select, "id": $("#hiddenid").val(), "action": "vote", "type": "table" }, dataType: "jsonp", success: function (data) { if (data.context == "-1") { alert("参数不正确无法提交,请重新提交.") } else { if (data.context == "0") { alert("不好意思,此项您已经投过了") } else { $("#mychart").html(data.context); $("#hiddenid").val(data.newid) } } }, beforeSend: function () { $("#load").css("display", "block") }, complete: function () { $("#load").css("display", "none") }, error: function (XMLHttpRequest, textStatus, errorThrown) {  }, timeout: 20000 }) }); $("#bar").click(function () { bar() }); function bar() { clear(); $("#bar").css("border", "1px solid red").css("color", "red"); $.ajax({ type: "get", url: "http://www.askci.com/tools/getdata.ashx?jsoncallback=?", dataType: "jsonp", data: { "id": $("#hiddenid").val(), "type": "bar" }, success: function (data) { var result = data.context.replace(/@/g, '"'); $("#hidscript").html(result) }, beforeSend: function () { $("#load").css("display", "block") }, complete: function () { $("#load").css("display", "none") }, error: function (XMLHttpRequest, textStatus, errorThrown) { }, timeout: 20000 }) } $("#pie").click(function () { pie() }); function pie() { clear(); $("#pie").css("border", "1px solid red").css("color", "red"); $.ajax({ type: "get", url: "http://www.askci.com/tools/getdata.ashx?jsoncallback=?", dataType: "jsonp", data: { "id": $("#hiddenid").val(), "type": "pie" }, success: function (data) { var result = data.context.replace(/@/g, '"'); $("#hidscript").html(result) }, beforeSend: function () { $("#load").css("display", "block") }, complete: function () { $("#load").css("display", "none") }, error: function (XMLHttpRequest, textStatus, errorThrown) {}, timeout: 20000 }) } function clear() { $("#mychart").empty(); $("#bar").css("border", "1px solid #eaeaea").css("color", "black"); $("#pie").css("border", "1px solid #eaeaea").css("color", "black"); $("#table").css("border", "1px solid #eaeaea").css("color", "black") }
});
