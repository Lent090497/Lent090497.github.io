$(document).ready(function() {
	changeLanguage();
	changeIconFeel();
});
//function change language
function changeLanguage(){
	$('#check1').change(function() {
		//check checkbox Japan checked?
		if(this.checked){
			$('.textE').css('display','none');
		}
		else{
			$('.textE').css('display','block');
		}
	});
	//check checkbox English checked?
	$('#check2').change(function() {
		if(this.checked){
			$('.textJ').css('display','none');
		}
		else{
			$('.textJ').css('display','block');
		}
	});
}
//function change icon feel
function changeIconFeel(){
	//event locate1 click
	$('#locate1').click(function() {
		if($(this).attr('src')=='images/pic-man-smile.png'){
			$(this).attr({
				'src':'images/pic-man-sad.png'
			});
			$('#locate2').attr({
				'src':'images/pic-man-smile.png'
			})
			$('.content-chat2-left').css('display','block');
			$('.content-chat2-right').css('display','none');
		}
		else{
			$(this).attr({
				'src':'images/pic-man-smile.png'
			});
			$('#locate2').attr({
				'src':'images/pic-man-sad.png'
			})
			$('.content-chat2-left').css('display','none');
			$('.content-chat2-right').css('display','block');
		}
	});
	//event locate2 click
	$('#locate2').click(function(event) {
		if($(this).attr('src')=='images/pic-man-smile.png'){
			$(this).attr({
				'src':'images/pic-man-sad.png'
			});
			$('#locate1').attr({
				'src':'images/pic-man-smile.png'
			})
			$('.content-chat2-left').css('display','block');
			$('.content-chat2-right').css('display','none');
		}
		else{
			$(this).attr({
				'src':'images/pic-man-smile.png'
			});
			$('#locate1').attr({
				'src':'images/pic-man-sad.png'
			})
			$('.content-chat2-left').css('display','none');
			$('.content-chat2-right').css('display','block');
		}
	});
}