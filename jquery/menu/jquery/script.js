$(document).ready(function() {
	var locate=0;
	$('ul li').click(function showMenu(event) {
		/* Act on the event */
		var index=$('ul li').index($(this))
		var img_about1 = $('.js-about').eq(index).attr('src');
		var img_about2="image/about" + (index+1) + "_mb.jpg";
		
		if(img_about1===img_about2){
			if(index!=locate){
				$('.js-info').slideUp();
				$('.js-about').eq(locate).attr({
				'src': 'image/about' + (locate+1) + '_mb.jpg'
				})
			}
			$('.js-about').eq(index).attr({
				'src': 'image/about' + (index+1) + '_mb_hover.jpg'
			})
			$(this).children('.js-info').slideToggle();
			locate=index;

		}
		else{
			$('.js-about').eq(index).attr({
				'src': 'image/about' + (index+1) + '_mb.jpg'
			})
			$(this).children('.js-info').slideToggle();
		}
		showProduct();
	});
});
function showProduct(){
	//event click button show info product
	$('.info img').click(function() {
		var locate=$('.info img').index($(this));
		var idDiv = locate % 2 == 0 ? '#about-1':'#about-2';
		$(idDiv).show().animate({
			top: '+60px',
		})
		$('ul li').css('pointer-events','none');	
		closeProduct();
		
	});
}
function closeProduct(){
	//event click button close
	$('.about-btnclose img').click(function() {
		$('.about').hide();
		$('.about').animate({
			top: '-60px',
		});
		$('ul li').css('pointer-events','auto');
	});
}