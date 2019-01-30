$(document).ready(function () {
   $(window).scroll(function () {
       if($(window).scrollTop() == ($(document).height() - $(window).height())) {
           $("html, body").stop();
           $('p').css('color','red');
           $('.container').css('background','black');
           $('.border').css('border-top','1px solid #330000');
           $('.content img').eq(1).attr('src','images/banner_2.jpg');
           $('.content img').eq(2).attr('src','images/img_5.png');
           $('.content img').eq(4).attr('src','images/img_6.png');
           $('.box-grey').css('background','#330000');
           $("html, body").animate({scrollTop:0},5000, function () {
               setTimeout(function () {
                   $("html, body").css("overflow","auto");
                   $('p').css('color','black');
                   $('.container').css('background','none');
                   $('.border').css('border-top','1px solid #000000');
                   $('.content img').eq(1).attr('src','images/TOP_02.png');
                   $('.content img').eq(2).attr('src','images/img_1.jpg');
                   $('.content img').eq(4).attr('src','images/img_3.jpg');
                   $('.box-grey').css('background','#cccccc');
               },0);
           });
       }
})
});