$(document).ready(function() {
	$('.header-menu1 ul li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		var locate=$('.header-menu1 ul li').index($(this));

	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});
});
