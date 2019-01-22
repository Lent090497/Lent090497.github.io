$(document).ready(function() {
	showMenu();
	showProduct();
	changeHover();
	closeProduct();
});
var locate=0;
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
			$('.menu ul li').removeClass('active');
			$(this).addClass('active');		
		}
	});

}
function changeHover(){
	$('.menu ul li').click(function() {
		var id= $(this).children('.menu-img').attr('id');
		var index= id.split('-');
		if($(this).hasClass('active')){
			$(this).children('.menu-img').attr({
				"src":  "image/about" + index[1] + "_mb_hover.jpg" 
			});
		}else{
			console.log('bbb')
			$(this).children('.menu-img').attr({
				"src":  "image/about" + index[1] + "_mb.jpg" 
			})
		}
	});
}
function showProduct(){
	//event click button show info product
	$('.info img').click(function() {
		var id= $(this).attr('id');
		var index=id.split('-');
		if(index[1]%2==0){
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