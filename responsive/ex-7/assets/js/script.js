$(document).ready(function() {
	var num1=0;
	var num2=0;
	var imglast1=$('.js--slide-1 img:last').index('.js--slide-1 img');
	var imglast2=$('.js--slide-2 img:last').index('.js--slide-2 img');

	//function setInterval
	var myInterval1=setInterval(function(){
		num1++;
		if(num1>imglast1){
			num1=0;
		}
		slide1(num1);
		slide3(num1);
	},1000)
	var myInterval2=setInterval(function(){
		num2++;
		if(num2>imglast2){
			num2=0;
		}
		slide2(num2);
	},1000)
	//function change slide
	function slide1(index){
		$('.js--slide-1 img').hide();
		$('.js--slide-1 img').eq(index).show();
		$('.js--list-1 ul li img').attr({
			'src':'assets/images/img_grey.png'
		});		
		$('.js--list-1 ul li img').eq(index).attr({
			'src':'assets/images/img_black.png'
		});
	}
	function slide2(index){
		$('.js--slide-2 img').hide();
		$('.js--slide-2 img').eq(index).show();
		$('.js--list-2 ul li img').attr({
			'src':'assets/images/img_grey.png'
		});		
		$('.js--list-2 ul li img').eq(index).attr({
			'src':'assets/images/img_black.png'
		});
	}
	function slide3(index){
		$('.js--slide-3 img').hide();
		$('.js--slide-3 img').eq(index).show();
		$('.js--list-3 ul li img').attr({
			'src':'assets/images/img_grey.png'
		});		
		$('.js--list-3 ul li img').eq(index).attr({
			'src':'assets/images/img_black.png'
		});
	}
});