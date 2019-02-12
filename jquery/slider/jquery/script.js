
$(document).ready(function() {
	var num=0;
	var firstImage= $('.slide img:first').attr('stt');
	var lastImage= $('.slide img:last').attr('stt');

	//event next click
	$("#next").click(function() {
		num++;
		//check change image
		if(num>lastImage){
			num=firstImage;
		}
		var margin_left = -648*num;
		$('.slide-wrap').css('margin-left', margin_left +'px');
		$('li').removeClass('active');
		$('li').eq(num).addClass('active');
	});
	//event next click
	$('#prev').click(function() {
		
		num--;
		//check change image
		if(num<firstImage){
			num=lastImage;
		}
		var margin_left = -648*num;
		$('.slide-wrap').css('margin-left', margin_left + 'px');
		$('li').removeClass('active');
		$('li').eq(num).addClass('active');
	});
	$('ul li img').click(function() {

		num=$(this).attr("stt")-1;
		$('#next').click();
	});
	setInterval(function(){
		$('#next').click();
	},5000)
});
