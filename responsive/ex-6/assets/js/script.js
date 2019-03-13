$(document).ready(function() {
	var num=0;
	$('.js-list ul li').click(function(event) {
		//display procedure
		var index=$('.js-list ul li').index($(this));
		$('.js-list ul li').removeClass('active--list');
		$('.js-list ul li').eq(index).addClass('active--list');
		$('.procedure img').hide();
		$('.procedure img').eq(index).show();
	});
	$('.js--list--ticket ul li').click(function(event) {
		//display ticket
		var index= $('.js--list--ticket ul li').index($(this));
		if(index==0){
			$('.js--ticket--suica').show();
			$('.js--ticket--railpass').hide();
			$('.js--ticket--pasmo').hide();
		}
		if(index==1){
			$('.js--ticket--suica').hide();
			$('.js--ticket--railpass').hide();
			$('.js--ticket--pasmo').show();
		}
		if(index==2){
			$('.js--ticket--suica').hide();
			$('.js--ticket--railpass').show();
			$('.js--ticket--pasmo').hide();
		}
		$('.js--list--ticket ul li').removeClass('active--ticket')
		$('.js--list--ticket ul li').eq(index).addClass('active--ticket');
		$('.js--list--ticket ul li').eq(0).addClass('no-active--ticket');
	});
});