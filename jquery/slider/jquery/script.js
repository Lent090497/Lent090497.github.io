
$(document).ready(function() {
	var num=0;
	var time=5000;
	var firstImage= $('.js-slide img:first').attr('stt');
	var lastImage= $('.js-slide img:last').attr('stt');

	//event next click
	$("#next").click(function clickNext() {
		num++;
		//check change image
		if(num>lastImage){
			num=firstImage;
		}
		var margin_left = -648*num;
		$('.js-slide-wrap').css('margin-left', margin_left +'px');
		$('li').removeClass('active');
		$('li').eq(num).addClass('active');
		$(this).data('clicked', 'true');
		$(document).on('page:change', function(){       
	    	$(document).unbind('click', '#next').on('click', '#next',function() {
	        	clearInterval(timeinerval);
	    	}); 
		});
	});
	//event next click
	$('#prev').click(function clickPre() {
		
		num--;
		//check change image
		if(num<firstImage){
			num=lastImage;
		}
		var margin_left = -648*num;
		$('.js-slide-wrap').css('margin-left', margin_left + 'px');
		$('li').removeClass('active');
		$('li').eq(num).addClass('active');
		

	});
	$('ul li img').click(function() {
		num=$(this).attr("stt")-1;
		$('#next').click();
	});
	var timeinerval=setInterval(function(){
		$('#next').click();
	},time)
});
