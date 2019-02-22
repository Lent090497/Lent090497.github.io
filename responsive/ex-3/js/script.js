$(document).ready(function() {
	$('.js-content-bot_menu2 ul li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		var locate=$('.js-content-bot_menu2 ul li').index($(this));
		$('.js-content-bot_menu2 ul li img').eq(locate).attr({
			'src':'images/cmn_gnavi_on_0'+(locate+1)+'.png',
		})
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		var locate=$('.js-content-bot_menu2 ul li').index($(this));
		$('.js-content-bot_menu2 ul li img').eq(locate).attr({
			'src':'images/cmn_gnavi_0'+(locate+1)+'.png',
		})
	});
	$(window).resize(function(event) {
		/* Act on the event */
	
	});
});