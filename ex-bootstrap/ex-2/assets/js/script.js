$(document).ready(function() {
});
$(window).resize(function(event) {
	if($(document).width()>=768){

		$('.content-2').removeClass('flex-column-reverse');
		$('.content-2').removeClass('flex-row');
		$('.content-4').removeClass('flex-column-reverse');
		$('.content-4').removeClass('flex-row');
	}
	else{
		$('.content-2').addClass('flex-column-reverse');
		$('.content-2').addClass('flex-row');
		$('.content-4').addClass('flex-column-reverse');
		$('.content-4').addClass('flex-row');
	}
});
