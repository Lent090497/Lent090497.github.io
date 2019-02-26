$(document).ready(function() {
	//event change language
	$('#js-check1').change(function changeLanguage() {
		//check checkbox Japan checked?
		if(this.checked){
			$('.js-textJ').css('opacity','1');
			
		}
		else{
			$('.js-textJ').css('opacity','0');
			
		}
	});
	//check checkbox English checked?
	$('#js-check2').change(function() {
		if(this.checked){
			$('.js-textE').css('opacity','1');
		}
		else{
			$('.js-textE').css('opacity','0');
		}
	});
	/*--------------------------------------------------*/

	//event click icon click
	$('#js-locate1').click(function changeIcon() {
		if($(this).attr('src')=='images/pic-man-smile.png'){
			$(this).attr({
				'src':'images/pic-man-sad.png'
			});
			$('#js-locate2').attr({
				'src':'images/pic-man-smile.png'
			})
			$('.content-chat2-left').show();
			$('.content-chat2-right').hide();
		}
		else{
			$(this).attr({
				'src':'images/pic-man-smile.png'
			});
			$('#js-locate2').attr({
				'src':'images/pic-man-sad.png'
			})
			$('.content-chat2-left').hide();
			$('.content-chat2-right').show();
		}
	});
	//event locate2 click
	$('#js-locate2').click(function(event) {
		if($(this).attr('src')=='images/pic-man-smile.png'){
			$(this).attr({
				'src':'images/pic-man-sad.png'
			});
			$('#js-locate1').attr({
				'src':'images/pic-man-smile.png'
			})
			$('.content-chat2-left').hide();
			$('.content-chat2-right').show();
		}
		else{
			$(this).attr({
				'src':'images/pic-man-smile.png'
			});
			$('#js-locate1').attr({
				'src':'images/pic-man-sad.png'
			})
			$('.content-chat2-left').show();
			$('.content-chat2-right').hide();
		}
	});
});
	$(window).resize(function(event) {
		/* Act on the event */
		if($(document).width()>=1000){
			$('.content-chat2-left').show();
			$('.content-chat2-right').show();
		}
		else{
			$('.content-chat2-left').show();
			$('.content-chat2-right').hide();
		}
	});
