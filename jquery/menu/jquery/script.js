$(document).ready(function() {
	showMenu();
	showProduct();
	closeProduct();
});
function showMenu(){
	//event click on li
	$('.menu ul li').click(function() {
		//check class exist? 
		if($(this).hasClass('active')){
			$(this).children('.info').slideUp('slow');
			$(this).removeClass('active');			
		}
		else{
			$('.info').slideUp();
			$(this).children('.info').slideDown('slow');
			$('menu ul li').removeClass('active');
			$(this).addClass('active');		
		}
	});

}
function showProduct(){
	//event click button show info product
	$('.info img').click(function() {
		$('#about').show();
		$('.about').animate({
			top: '+20px',
		},"slow");
	});
}
function closeProduct(){
	//event click button close
	$('.about-btnclose img').click(function() {
		$('#about').hide();
	});
}