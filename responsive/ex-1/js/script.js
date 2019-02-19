$(document).ready(function() {
	changePicman();
	changeLanguage();
});
function changeLanguage(){
	$('#checkE').change(function() {
		/* Act on the event */
		if(this.checked){
			$('.text-blue').css('display','block');
		}else{
			$('.text-blue').css('display','none');
		}
	});
	$('#checkJ').change(function() {
		/* Act on the event */
		if(this.checked){
			$('.textJ').css('display','block');
		}else{
			$('.textJ').css('display','none');
		}
	});
}
function changePicman(){
	$('#smile').click(function(event) {
		/* Act on the event */
		if($(this).attr('src')=='images/pic-man-smile.png')
		{
			$(this).attr('src','images/pic-man-sad.png');
			$('#sad').attr('src','images/pic-man-smile.png');
		}
		else if($(this).attr('src')=='images/pic-man-sad.png'){
			$(this).attr('src','images/pic-man-smile.png');
			$('#sad').attr('src','images/pic-man-sad.png');
		}
	});
	$('#sad').click(function(event) {
		/* Act on the event */
		if($(this).attr('src')=='images/pic-man-smile.png')
		{
			$(this).attr('src','images/pic-man-sad.png');
			$('#smile').attr('src','images/pic-man-smile.png');
		}
		else if($(this).attr('src')=='images/pic-man-sad.png'){
			$(this).attr('src','images/pic-man-smile.png');
			$('#smile').attr('src','images/pic-man-sad.png');
		}
	});
}