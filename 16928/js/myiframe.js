if(top.location!==self.location){ 
WarningTxt1 = "content页面被iframe了！"; 
WarningTxt2 = "我们跳出iframe，直接访问content页面吧！"; 
/*alert(WarningTxt1); 
alert(WarningTxt2); */
top.location.href=self.location.href; 
}