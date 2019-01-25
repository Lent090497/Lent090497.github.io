$(document).ready(function() {
	$('.background').mousemove(function(event) {
		/* Act on the event */
		$('.cloud').css({"left": event.pageX/60});
		$('.bird').css({"left": event.pageX/60});
	});	
});