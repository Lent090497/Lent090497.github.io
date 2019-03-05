$(window).scroll(function () {
       if($(window).scrollTop() == ($(document).height() - $(window).height())) {
          $("html, body").stop();
          $('.container').addClass('js-container');
          $('a').css('color','#990202');
          $('.border').css('border-top','1px solid #700000');
          $('.box-grey').css('background-color','#330000');
          $('.js-header img').eq(2).attr({
            'src': 'images/banner_horro.jpg'
          })
          $('.content-list img').eq(0).attr('src','images/img_1_horro.png');
          $('.content-list img').eq(2).attr('src','images/img_3_horro.png');
          $('.content-list img').eq(3).attr('src','images/img_4_horro.jpg');
          $("html, body").animate({scrollTop:0},5000, function () {
               setTimeout(function () {
                $('.container').removeClass('js-container');
                $('a').css('color','#000000');
                $('.border').css('border-top','1px solid #000000');
                $('.box-grey').css('background-color','#cccccc');
                $('.js-header img').eq(2).attr({
                  'src': 'images/banner.png'
                });
                $('.content-list img').eq(0).attr('src','images/img_1.png');
                $('.content-list img').eq(2).attr('src','images/img_3.png');
                $('.content-list img').eq(3).attr('src','images/img_4.png');
               },0);
           });
       }
  })