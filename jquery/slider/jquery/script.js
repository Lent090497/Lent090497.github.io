
$(document).ready(function() {
	var num=0;
	var firstImage= $('.slide img:first').attr('stt');
	var lastImage= $('.slide img:last').attr('stt');
	$(".slide img").each(function() {
		if($(this).is(':visible')){
			num= $(this).attr('stt');
		}
	});
	//event next click
	$("#next").click(function() {
		num++;
		//check change image
		if(num>lastImage)
		{
			num=firstImage;
		}
		$('.slide img').hide();
		$('.slide img').eq(num).show();
		$('li').removeClass('active');
		$('li').eq(num).addClass('active');
	});
	//event next click
	$('#prev').click(function() {
		
		num--;
		//check change image
		if(num<firstImage)
		{
			num=lastImage;
		}
		$('.slide img').hide();
		$('.slide img').eq(num).show();
		$('li').removeClass('active');
		$('li').eq(num).addClass('active');
	});
	$('ul li img').click(function() {
		/* Act on the event */

		num=$(this).attr("stt")-1;
		$('#next').click();
	});
	setInterval(function(){
		$('#next').click();
	},5000)
});
