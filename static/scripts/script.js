$(document).ready(function(){
  //Animations Vars
  var activeSlide = '.swiper-slide-active';
  var animation_bounceIn = 'animated bounceIn';
  var animation_bounceInUp = 'animated bounceInUp';
  var animation_bounceInDown = 'animated bounceInDown';
  var animation_bounceInLeft = 'animated bounceInLeft';
  var animation_bounceInRight = 'animated bounceInLeft';
  var animation_slideLeft = 'animated slideInLeft'
  var animation_pulse = 'animated pulse';
  var animation_zoomIn = 'animated zoomIn';
  var animation_zoomOD = 'animated zoomOutDown';

  //Initialize Slider
  var socSwiper = new Swiper ('.swiper-container', {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 400,
    loop: false,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    preloadImages: false,
    IOSEdgeSwipeDetection: true,
    nextButton: '.swiper-button-next'
  })

  //Slider Change Events
  socSwiper.on('slideChangeStart', function(){
    if ($(activeSlide).hasClass('no-pagination')) {
      $('.swiper-pagination').hide();
      $('.swiper-button-next').addClass('blue');
      $('.join').removeClass('join').addClass('swiper-button-next blue');
    } else {
      $('.swiper-pagination').show();
      $('.swiper-button-next').removeClass('blue');
    }
    //Set Animations
    $(activeSlide).find('#pulse').addClass(animation_pulse);
    $(activeSlide).find('#bounceIn').addClass(animation_bounceIn);
    $(activeSlide).find('#bounceInDown').addClass(animation_bounceInDown);
    $(activeSlide).find('#bounceInLeft').addClass(animation_bounceInLeft);
    $(activeSlide).find('.phone').addClass(animation_bounceInUp);
    $(activeSlide).find('#slideInLeft').addClass(animation_slideLeft);
    $(activeSlide).find('#zoomOutDown').addClass(animation_zoomOD);
    // Package Animations
    var package = $(activeSlide).find('.package');
    var packageIndex = 0;
    if(package.length >= 0) {
        var packageDelay = setInterval(function(){
          if (packageIndex <= package.length) { //run the bubble annimation
            $(package[packageIndex]).addClass(animation_zoomIn + ' opa');
            packageIndex += 1;
          }else{
            clearInterval(packageDelay);
          }
        }, 500);
      }
    //Bubble Animation
    var bubbles = $(activeSlide).find('.bubbles');
    var bubblesIndex = 0;
    if(bubbles.length >= 0) {
      var bubblesDelay = setInterval(function(){
        if (bubblesIndex <= bubbles.length) { //run the bubble annimation
          $(bubbles[bubblesIndex]).addClass(animation_bounceIn + ' opa');
          bubblesIndex += 1;
          //Dollar Animation
          if(bubblesIndex === bubbles.length) { //when that is finished run dollar animation
            var dollarload = $(activeSlide).find('.dollar');
            var dollarIndex = 0;

            var dollarDelay = setInterval(function(){
              if (dollarIndex <= dollarload.length){
                $(dollarload[dollarIndex]).addClass(animation_bounceInDown + ' opa');
                dollarIndex += 1;
                // Animate the element's value from x to y:

              } else{
                clearInterval(dollarDelay);
              }
            }, 900);

          }
        } else{
          clearInterval(bubblesDelay);
        }
      }, 500);
    }
    var $total = $(activeSlide).find('.total');
    if ( $total.length ) {
      setTimeout(function(){
        $total.addClass(animation_pulse + ' opa');
      }, 5500)
    }

    var $moreInfo = $(activeSlide).find('.more-info');
    if ( $moreInfo.length ) {
      setTimeout(function(){
        $moreInfo.addClass(animation_pulse + ' opa');
      }, 4500)
    }

    //Others Animation
    var others = $(activeSlide).find('.others .people');
    var othersIndex = 0;
    if(others.length >= 0) {
      var othersDelay = setInterval(function(){
        if (othersIndex <= others.length) { //run the bubble annimation
          $(others[othersIndex]).addClass(animation_bounceIn + ' opa');
          othersIndex += 1;
          //Checkmark Animation
          if(othersIndex === others.length) { //when that is finished run dollar animation
            var checkload = $(activeSlide).find('.others .check');
            var checkIndex = 0;
            var checkDelay = setInterval(function(){
              if (checkIndex <= checkload.length){
                $(checkload[checkIndex]).addClass(animation_zoomIn + ' opa');
                checkIndex += 1;
              }else{
                clearInterval(checkDelay);
              }
            }, 700);
          }
        }else{
          clearInterval(othersDelay);
        }
      }, 400);
    }


  });


//  //Element Animations on Continue Click
//  $('.swiper-button-next').click(function(ev){
//    ev.preventDefault();
//    //Set Animation
//    $(activeSlide).find('#pulse').addClass(animation_pulse);
//    $(activeSlide).find('#bounceIn').addClass(animation_bounceIn);
//    $(activeSlide).find('#bounceInDown').addClass(animation_bounceInDown);
//    $(activeSlide).find('#bounceInLeft').addClass(animation_bounceInLeft);
//    $(activeSlide).find('#slideInLeft').addClass(animation_slideLeft);
//    $(activeSlide).find('#zoomOutDown').addClass(animation_zoomOD);
//
//    // Package Animations
//    var package = $(activeSlide).find('.package');
//    var packageIndex = 0;
//    if(package.length >= 0) {
//        var packageDelay = setInterval(function(){
//          if (packageIndex <= package.length) { //run the bubble annimation
//            $(package[packageIndex]).addClass(animation_bounceIn + ' opa');
//            packageIndex += 1;
//          }else{
//            clearInterval(packageDelay);
//          }
//        }, 500);
//      }
//    //Bubble Animation
//    var bubbles = $(activeSlide).find('.bubbles');
//    var bubblesIndex = 0;
//    if(bubbles.length >= 0) {
//      var bubblesDelay = setInterval(function(){
//        if (bubblesIndex <= bubbles.length) { //run the bubble annimation
//          $(bubbles[bubblesIndex]).addClass(animation_bounceIn + ' opa');
//          bubblesIndex += 1;
//          //Dollar Animation
//          if(bubblesIndex === bubbles.length) { //when that is finished run dollar animation
//            var dollarload = $(activeSlide).find('.dollar');
//            var dollarIndex = 0;
//
//            var dollarDelay = setInterval(function(){
//              if (dollarIndex <= dollarload.length){
//                $(dollarload[dollarIndex]).addClass(animation_bounceInDown + ' opa');
//                dollarIndex += 1;
//                // Animate the element's value from x to y:
//
//              } else{
//                clearInterval(dollarDelay);
//              }
//            }, 900);
//
//          }
//        } else{
//          clearInterval(bubblesDelay);
//        }
//      }, 500);
//    }
//    var total = $(activeSlide).find('.total');
//    if ( total.length ) {
//      setTimeout(function(){
//        $(activeSlide).find('.total').addClass(animation_pulse + ' opa');
//      }, 5500)
//    }
//
//  });
  $('.more-info').click(function(e){
    e.preventDefault();
    $('.window-fog').addClass('animated flipInY').show();
    $('.window-fong').show();
    console.log('click');
  });
  $('.close').click(function(){
      $('.window-fog').hide();
    });
  $('.join').click(function(ev){
    ev.target();
    console.log(this);
  });
});

