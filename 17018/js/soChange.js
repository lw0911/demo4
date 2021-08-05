/*
 *	soChange 1.6 - simple object change with jQuery
 *	made by bujichong 2010-10-16
 *	���ߣ����  2010-10-16
 * http://hi.baidu.com/bujichong/
 */
;(function($){
	$.fn.extend({
		"soChange": function(o){

		o= $.extend({
			thumbObj:null,//��������
			botPrev:null,//��ť��һ��
			botNext:null,//��ť��һ��
			changeType:'fade',//�л���ʽ����ѡ��fade,slide��Ĭ��Ϊfade
			thumbNowClass:'on',//��������ǰ��class,Ĭ��Ϊnow
			thumbOverEvent:false,//��꾭��thumbObjʱ�Ƿ��л�����Ĭ��Ϊtrue��Ϊfalseʱ��ֻ�������thumbObj���л�����
			slideTime:1000,//ƽ������ʱ�䣬Ĭ��Ϊ1000ms��Ϊ0��ֵʱ������changeType��ʽ���л�Ч��Ϊֱ����ʾ����
			autoChange:true,//�Ƿ��Զ��л���Ĭ��Ϊtrue
			clickFalse:true,//����������������ӣ�����Ƿ�������Ч�����Ƿ񷵻�return false��Ĭ����return false������Ч����thumbOverEventΪfalseʱ���������Ϊtrue������������¼���ͻ
			overStop:false,//��꾭���л�����ʱ���л������Ƿ�ֹͣ�л�����������뿪�������Զ��л���ǰ�����ѿ����Զ��л�
			changeTime:5000,//�Զ��л�ʱ��
			delayTime:300//��꾭��ʱ�����л�����ʱ�䣬�Ƽ�ֵΪ300ms
		}, o || {});

		var _self = $(this);
		var thumbObj;
		var size = _self.size();
		var nowIndex =0; //����ȫ��ָ��
		var index;//����ȫ��ָ��
		var startRun;//Ԥ�����Զ����в���
		var delayRun;//Ԥ�����ӳ����в���

	//���л�����
	function fadeAB () {
		if (nowIndex != index) {
			if (o.thumbObj!=null) {
			$(o.thumbObj).removeClass(o.thumbNowClass).eq(index).addClass(o.thumbNowClass);}
			if (o.slideTime <= 0) {
				_self.eq(nowIndex).hide();
				_self.eq(index).show();
			}else if(o.changeType=='fade'){
				_self.eq(nowIndex).fadeOut(o.slideTime);
				_self.eq(index).fadeIn(o.slideTime);
			}else{
				_self.eq(nowIndex).slideUp(o.slideTime);
				_self.eq(index).slideDown(o.slideTime);
			}
			nowIndex = index;
			if (o.autoChange==true) {
			clearInterval(startRun);//�����Զ��л�����
			startRun = setInterval(runNext,o.changeTime);}
			}
	}


	//�л�����һ��
	function runNext() {
		index =  (nowIndex+1)%size;
		fadeAB();
	}

	//��ʼ��
			_self.hide().eq(0).show();

	//�����һͼƬ
		if (o.thumbObj!=null) {
		thumbObj = $(o.thumbObj);

	//��ʼ��thumbObj
			thumbObj.removeClass(o.thumbNowClass).eq(0).addClass(o.thumbNowClass);
			thumbObj.click(function () {
				index = thumbObj.index($(this));
				fadeAB();
				if (o.clickFalse == true) {
					return false;
				}
			});
			if (o.thumbOverEvent == true) {
			thumbObj.mouseenter(function () {
				index = thumbObj.index($(this));
				delayRun = setTimeout(fadeAB,o.delayTime);
			});
			thumbObj.mouseleave(function () {
				clearTimeout(delayRun);
			});
			}
		}

	//�����һ��
		if (o.botNext!=null) {
			$(o.botNext).click(function () {
				if(_self.queue().length<1){
				runNext();}
				return false;
			});
		}

	//�����һ��
		if (o.botPrev!=null) {
			$(o.botPrev).click(function () {
				if(_self.queue().length<1){
				index = (nowIndex+size-1)%size;
				fadeAB();}
				return false;
		});
		}

	//�Զ�����
		if (o.autoChange==true) {
		startRun = setInterval(runNext,o.changeTime);
		if (o.overStop == true) {
			_self.mouseenter(function () {
				clearInterval(startRun);//�����Զ��л�����
				
			});
			_self.mouseleave(function () {
				startRun = setInterval(runNext,o.changeTime);
			});
			}
		}

	}

	})

})(jQuery);

