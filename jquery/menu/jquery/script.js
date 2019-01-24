$(document).ready(function() {
	showMenu();
	showProduct();
	//changeHover();
	closeProduct();

});
var preclick=0;
function showMenu(){
	//event click on li
	$('.menu ul li').click(function() {
		var locate=$('.menu ul li').index($(this));
		//check class's active exist? 
		if($(this).hasClass('active')){
			$(this).children('.info').slideUp('slow');
			$(this).children('.menu-img').attr({
				"src":  "image/about" + (locate+1) + "_mb.jpg" 
			})
			$(this).removeClass('active');				
		}
		else{
			$('.info').slideUp();
			$(this).children('.info').slideDown('slow');		
			$('.menu ul li').removeClass('active');
			$(this).addClass('active');
			$('.menu-img').eq(locate).attr({
				"src":  "image/about" +(locate+1)  + "_mb_hover.jpg" 
			});
			if(preclick!=locate){
				$('.menu ul li').eq(preclick).children('.menu-img').attr({
				"src":  "image/about" + (preclick+1) + "_mb.jpg" 
				})	
			}

			preclick=locate;
		}
	});

}
function showProduct(){
	//event click button show info product
	$('.info img').click(function() {
		var locate=$('.info img').index($(this));
		if(locate % 2==0){
			$('#about-1').show();
			$('#about-1').animate({
				top: '+20px',
			});
		}else{
			$('#about-2').show();
			$('#about-2').animate({
				top: '+20px',
			});
		}
	});
}
function closeProduct(){
	//event click button close
	$('.about-btnclose img').click(function() {
		$('.about').hide();
		$('.about').animate({
			top: '-20px',
		});
	});
}