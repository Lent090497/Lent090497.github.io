$(document).ready(function () {
   $(window).scroll(function () {   
       if($(this).scrollTop() >= ($(document).height() - $(window).height())) {

           $("html, body").stop();
           $('p').css('color','red');
           $('.js-container').css('background','black');
           $('.js-border').css('border-top','1px solid #330000');
           $('.js-header img').eq(2).attr('src','images/banner_2.jpg');
           $('.js-content img').eq(0).attr('src','images/img_5.png');
           $('.js-content img').eq(2).attr('src','images/img_6.png');
           $('.js-box-grey').css('background','#330000');
           $("html, body").animate({scrollTop:0},5000, function () {
               setTimeout(function () {
                   $("html, body").css("overflow","auto");
                   $('p').css('color','black');
                   $('.js-container').css('background','none');
                   $('.js-border').css('border-top','1px solid #000000');
                   $('.js-header img').eq(2).attr('src','images/TOP_02.png');
                   $('.js-content img').eq(0).attr('src','images/img_1.png');
                   $('.js-content img').eq(2).attr('src','images/img_3.png');
                   $('.js-box-grey').css('background','#cccccc');
               },0);
           });
       }
  })
});