$(document).ready(function() {
	var num=0;
	function next(){
		num++;
		if(num>6){
			num=0;
		}
		$('.js-list ul li').removeClass('active');
		$('.js-list ul li').eq(num).addClass('active');
	}
	var myInterval=setInterval(function(){
		next();
	},5000)
});