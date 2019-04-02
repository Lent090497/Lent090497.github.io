$(document).ready(function() {
	$('.carousel').carousel({
	  interval: 5000
	})
	$('.post-slide').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  nextArrow: $('#next'),
	  prevArrow: $('#prev'),
	});
	$('.logo-slide').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  nextArrow: $('#next-logo'),
	  prevArrow: $('#prev-logo'),
	});
});