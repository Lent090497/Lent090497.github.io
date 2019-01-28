$(document).ready(function() {
	$('.checkE').click(function(event) {
		/* Act on the event */
		if(this.checked){
			$('.text-blue').css("visibility","visible");
		}
		else{
			$('.text-blue').css("visibility","hidden");
		}
	});
});