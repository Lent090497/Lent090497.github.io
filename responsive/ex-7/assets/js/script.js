$(document).ready(function() {
	var num=0;
	var imglast1=$('.js--slide-1 img:last').index('.js--slide-1 img');

	//function setInterval
	var myInterval1=setInterval(function(){
		num++;
		if(num>imglast1){
			num=0;
		}
		slide1(num);
		slide2(num);
		slide3(num);
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