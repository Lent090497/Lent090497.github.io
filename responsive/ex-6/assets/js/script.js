$(document).ready(function() {
	var num=0;
	$('.js--list__suica ul li').click(function(event) {
		var index=$('.js--list__suica ul li').index($(this));
		//display procedure
		$('.js--list__suica ul li').removeClass('active--list');
		$('.js--list__suica ul li').eq(index).addClass('active--list');
		$('.procedure__suica img').hide();
		$('.procedure__suica img').eq(index).show();
	});
	$('.js--list__passmo ul li').click(function(event) {
		var index=$('.js--list__passmo ul li').index($(this));
		//display procedure
		$('.js--list__passmo ul li').removeClass('active--list');
		$('.js--list__passmo ul li').eq(index).addClass('active--list');
		$('.procedure__pasmo img').hide();
		$('.procedure__pasmo img').eq(index).show();
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
	});
});