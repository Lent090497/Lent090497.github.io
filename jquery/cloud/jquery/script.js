$(document).ready(function() {
	$('.background').mousemove(function(event) {
		/* Act on the event */
		$('.cloud img').css({"left": event.pageX/60});
	});	
});