

var i18n_products_error_beginValue	= "开始值输入错误！";
var i18n_products_error_endValue	= "结束值输入错误！";
var i18n_products_inputcorrectdate	= "日期格式YYYY-MM-DD";
var i18n_products_mustlessenddate	= "开始时间应小于等于截止时间！";
var i18n_products_mustaboveprice    = "结束金额不能小于开始金额！";


var FrontProducts_generalSearch01={

	patternDate :/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
    patternCurrency :/^\d{1,8}(\.\d{0,2})?$/,
    compId :"",
    mustInputKeyword:"false",
    inputkeyword:"",
    
    /***
     * 对输入关键字进行判断
     * @param {} compId
     * @param {} inputkeyword
     */
    keyover:function(compId,inputkeyword){
        
     if(jQuery("#"+compId+"_keyword").val() ==inputkeyword){
                        
           jQuery("#"+compId+"_keyword").val("");
           jQuery("#"+compId+"_keyword").focus();
     }
    
    
    },
      /***
     * 对输入关键字进行判断
     * @param {} compId
     * @param {} inputkeyword
     */
      keyout:function(compId,inputkeyword){
        
        if(this.trim(jQuery("#"+compId+"_keyword").val()) ==""){
            
            jQuery("#"+compId+"_keyword").val(inputkeyword);
              jQuery("#"+compId+"_keyword").addClass("input-keyword");
      }else{
          	jQuery("#"+compId+"_keyword").val(this.trim(jQuery("#"+compId+"_keyword").val()));
       jQuery("#"+compId+"_keyword").removeClass("input-keyword");
      }

    
    },
    
	/**
	 *功能：去掉字符串的特殊字符，用""取代之。
	 *参数：Str-要被修改的字符串
	 *     Flag-标志
	 */

	trim:function (Str , Flag){
		Str	= ""+Str;
		if( Flag == "l" || Flag == "L" )/*trim left side only*/
		{
			RegularExp	= /^\s+/gi;
			return Str.replace( RegularExp,"" );
		}
		else if( Flag == "r" || Flag == "R" )/*trim right side only*/
		{
			RegularExp	= /\s+$/gi;
			return Str.replace( RegularExp,"" );
		}
		else/*defautly, trim both left and right side*/
		{
			RegularExp	= /^\s+|\s+$/gi;
			var keyword = Str.replace( RegularExp,"" );
	    	//var ts 	 = keyword.replace(/(^　*)/g, "");    
			return keyword;
		}
  },
	/**
	 *功能 : 检查输入框
	 *参数 : form对象Object
	 */
	 validateForm:function (compId,mustInputKeyword,inputkeyword){
        
	  this.compId           = compId;
      this.mustInputKeyword = mustInputKeyword;
      this.inputkeyword     = inputkeyword;
      
           //验证关键字是否必填
       if(this.checkKeywords()==false){
            return false;
        }
	  var beginValue        = jQuery("#"+this.compId+"_beginValue").val();
	  var endValue          = jQuery("#"+this.compId+"_endValue").val();
	  var propertyId        = jQuery("#"+this.compId+"_propertyId").val();
	  var propertyType      = jQuery("#"+this.compId+"_propertyType").val();
	  var areaType          = jQuery("#"+this.compId+"_areaType").val();
		
		//去除得到的form名字的空格等字符
		var keyword = this.trim(jQuery("#"+this.compId+"_keyword").val());
		jQuery("#"+this.compId+"_keyword").val(keyword);
		//编译并赋值
        if(keyword==this.inputkeyword){
            
            jQuery("#"+this.compId+"_keyword").val("");
        }
        
        var searchType="1";//默认认为propertyId==null只查询keyword,pmcId
			
		if(propertyId !=null && propertyId !="" ){
			
			if(propertyType =="3" ){
				
				searchType ="3";//keyword,pmcId,propertyId,beginValue,endValue
				
			}else{
                
                searchType ="2";//keyword,pmcId,propertyId
                
            } 
			
		}
		
			
		
         jQuery("#"+this.compId+"_searchType").val(searchType);
         
		if(areaType!=""){
			
		//判断区间属性输入
		if(areaType =="BigDecimal"){
            
			//验证开始值和结束值
			if(this.checkNumber()==false) return false;

		}else if(areaType =="Date"){ 
			
            //验证日期
			if(this.isCheckAreaDate()==false) return false;
		
		}
		}
		var fpkeyword=jQuery("#"+this.compId+"_keyword").serialize();
				jQuery.ajax({
		           type: "POST",
		           url: "/FrontProducts.do?method=keywordStat",
				   data:fpkeyword,
		           dataType: "text",
		           cache: false,
		           success: function(data){
				     
          			}
      			});
      return true;
        
	},
    /***
     * 验证关键字必填
     * @return {Boolean}
     */
	checkKeywords:function(){
	    if(this.mustInputKeyword=='true'){
            if(this.trim(jQuery("#"+this.compId+"_keyword").val())==this.inputkeyword
            ||this.trim(jQuery("#"+this.compId+"_keyword").val())=="")
            {
		        alert(this.inputkeyword);
                 jQuery("#"+this.compId+"_keyword").val("");
	             jQuery("#"+this.compId+"_keyword").focus();
	            return false;
            }
	    }
        return true;
    },
	
	/**
	 * 验证区间数值的大小
	 * 参数 : beginValueObj开始值，endValueObj 结束值
	 * 
	 */
    
	checkNumber:function (){
        
		  if (jQuery("#"+this.compId+"_beginValue").val()
                && !this.patternCurrency.test(jQuery("#"+this.compId+"_beginValue").val())) {
            alert(i18n_products_error_beginValue);
            jQuery("#"+this.compId+"_beginValue").focus();
            return false;
        }
        if (jQuery("#"+this.compId+"_endValue").val()
                && !this.patternCurrency.test(jQuery("#"+this.compId+"_endValue").val())) {
            alert(i18n_products_error_endValue);
            jQuery("#"+this.compId+"_endValue").focus();
            return false;
        }
              if (jQuery("#"+this.compId+"_beginValue").val()
                && jQuery("#"+this.compId+"_endValue").val()
                && (parseInt(jQuery("#"+this.compId+"_beginValue").val()) > parseInt(jQuery("#"+this.compId+"_endValue").val()))) {
            alert(i18n_products_mustaboveprice);
            jQuery("#"+this.compId+"_endValue").focus();
            return false;
        }
        
      return true;
	},
	
	/**
	 *功能 : 高级搜索连接
	 *参数 : 	 href -- 连接地址，
	 * 		 opentype -- 打开方式
	*/
		queryadvance:function (href,opentype){
		if(opentype=="_self")
		{
			location.href = href;
		}else {
			
			window.open(href);
		}
	},
	
	/**
	 *功能 : 根据不同的分类获取分类的属性
	 *参数 : form--form id
	 *      this.compId--组件 id
	 *      type -- 标签样式
	 *    
	*/
	changecategory:function(compId,type,pmcId,allproperty){
		//ztouch sp4中去掉dwr 改用jquery方式实现
		jQuery.getJSON('/FrontProducts.do?method=doGetTemplatePropertiesByCategoryId',{"pmcId":pmcId},function(obj){
			if(obj){
				var inner_str2 = "<select name='propertyId' id='"+compId+"_propertyId'>";
				inner_str2 = inner_str2+ "<option selected='selected' value=''>"+allproperty+"</option>";
				for(var i = 0 ; i < obj.length ; i++){
					if(obj[i].hidden=='true'){
					//重写模版对应的属性值
						if(obj[i].name=='name'){
							inner_str2 = inner_str2+ "<option selected='selected' value='"+obj[i].name+"'>"+obj[i].title+"</option>";
						}else if(  obj[i].name!= 'listprice' 	&& obj[i].name != 'retailprice'
								&& obj[i].name!= 'createdate'	&& obj[i].name != 'mark'
								&& obj[i].name!= 'scorerule'	&& obj[i].name != 'currencytype'
								&& obj[i].name!= 'samllimageid'	&& obj[i].name != 'bigimageid'
								&& obj[i].name!= 'attachment1'	&& obj[i].name != 'attachment2'
								&& obj[i].name!= 'attachment3'	&& obj[i].name != 'weight'){
							
							inner_str2 = inner_str2+ "<option value='"+obj[i].name+"'>"+obj[i].title+"</option>";
						}
					}
				}
				inner_str2  = inner_str2 + "</select>";	
				_getElementById(compId,type,"template").innerHTML=inner_str2;
			}
		});
		
   //取得模版
	//producttempaletService.doGetTemplatePropertiesByCategoryId(pmcId,function(obj){
		//如果模版不为空，取得该模版中对应的属性。并且重写jsp选择下拉框
	//	if(obj!=null){	
			
	//			var inner_str2 = "<select name='propertyId' id='"+compId+"_propertyId'>";
	//			inner_str2 = inner_str2+ "<option selected='selected' value=''>"+allproperty+"</option>";
	//			for(var i=0;i<obj.length;i++){                    
	//				if(obj[i].hidden=='true')
	//				{
							
					//重写模版对应的属性值
	//					if(obj[i].name=='name' )
	//					{
							
	//						inner_str2 = inner_str2+ "<option selected='selected' value='"+obj[i].name+"'>"+obj[i].title+"</option>";
	//					}else if(  obj[i].name!= 'listprice' 	&& obj[i].name != 'retailprice'
	//							&& obj[i].name!= 'createdate'	&& obj[i].name != 'mark'
	//							&& obj[i].name!= 'scorerule'	&& obj[i].name != 'currencytype'
	//							&& obj[i].name!= 'samllimageid'	&& obj[i].name != 'bigimageid'
	//							&& obj[i].name!= 'attachment1'	&& obj[i].name != 'attachment2'
	//							&& obj[i].name!= 'attachment3'	&& obj[i].name != 'weight'){
	//						
	//						inner_str2 = inner_str2+ "<option value='"+obj[i].name+"'>"+obj[i].title+"</option>";
	//					}						
	//				}
	//			}
	//			
	//			inner_str2  = inner_str2 + "</select>";	
				
	//			_getElementById(compId,type,"template").innerHTML=inner_str2;
				
				
	//	}
	//});
},

/**功能 : 验证相连日期的输入值样式为2009-02-21
 * 参数 ：beginValueObj--开始日期对象
 * 		  endValueObj  --结束日期对象
 */

isCheckAreaDate:function(){

   if (jQuery("#"+this.compId+"_beginValue").val()
                && !this.patternDate.test(jQuery("#"+this.compId+"_beginValue").val())) {
            alert(i18n_products_inputcorrectdate);
            jQuery("#"+this.compId+"_beginValue").focus();
            return false;
        }
        if (jQuery("#"+this.compId+"_endValue").val()
                && !this.patternDate.test(jQuery("#"+this.compId+"_endValue").val())) {
            alert(i18n_products_inputcorrectdate);
            jQuery("#"+this.compId+"_endValue").focus();
            return false;
        }
        
          if (jQuery("#"+this.compId+"_beginValue").val()
                && jQuery("#"+this.compId+"_endValue").val()
                && (jQuery("#"+this.compId+"_beginValue").val() > jQuery("#"+this.compId+"_endValue").val())) {
            alert(i18n_products_mustlessenddate);
            jQuery("#"+this.compId+"_endValue").focus();
            return false;
        }

         return true;
}


}