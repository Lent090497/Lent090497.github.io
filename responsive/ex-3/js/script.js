$(document).ready(function() {
	$('.footer-menu1 ul li').hover(function() {
		var locate= $('.footer-menu1 ul li').index($(this));
		$('.footer ul li').eq(locate).css('opacity','1');

	}, function() {
		var locate= $('.footer-menu1 ul li').index($(this));
		$('.footer ul li').eq(locate).css('opacity','0');
	});
	$('.footer-menu ul li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		var locate=$('.footer-menu ul li').index($(this));
		$('.footer-menu ul li img').eq(locate).attr({
			'src':'images/cmn_gnavi_on_0'+(locate+1)+'.png',
		})
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		var locate=$('.footer-menu ul li').index($(this));
		$('.footer-menu ul li img').eq(locate).attr({
			'src':'images/cmn_gnavi_0'+(locate+1)+'.png',
		})
	});
});
