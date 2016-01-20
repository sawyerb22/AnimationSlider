$(document).ready(function(){
  //Animations Vars
  var activeSlide = '.swiper-slide-active';
  var animation_bounceIn = 'animated bounceIn';
  var animation_bounceInDown = 'animated bounceInDown';
  var animation_bounceInLeft = 'animated bounceInLeft';
  var animation_bounceInRight = 'animated bounceInLeft';
  var animation_slideLeft = 'animated slideInLeft'
  var animation_pulse = 'animated pulse';
  var animation_zoomOD = 'animated zoomOutDown';

  //Initialize Slider
  var socSwiper = new Swiper ('.swiper-container', {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 400,
    parallax: true,
    loop: true,
    paginationClickable: true,
    preloadImages: false,
    nextButton: '.swiper-button-next'
  })

//  function commaSeparateNumber(val){
//    while (/(\d+)(\d{3})/.test(val.toString())){
//      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
//    }
//    return val;
//  }


  //Slider Change Events
  socSwiper.on('slideChangeStart', function(){
    if ($('.swiper-slide-active').hasClass('no-pagination')) {
      $('.swiper-pagination').hide();
      $('.swiper-button-next').addClass('blue' + 'start');
      $('.join').removeClass('join').addClass('swiper-button-next blue');
    } else if ($('.swiper-slide-active').hasClass('cta')) {
      $('.swiper-button-next').removeClass('swiper-button-next').addClass('join');
      $('.customer').show();
    } else {
      $('.swiper-pagination').show();
      $('.swiper-button-next').removeClass('blue');
      $('.customer').hide();
    }
  });


  //Element Animations on Continue Click
  $('.swiper-button-next').click(function(ev){
    ev.preventDefault();
    //Set Animation
    $(activeSlide).find('#pulse').addClass(animation_pulse);
    $(activeSlide).find('#bounceIn').addClass(animation_bounceIn);
    $(activeSlide).find('#bounceInDown').addClass(animation_bounceInDown);
    $(activeSlide).find('#bounceInLeft').addClass(animation_bounceInLeft);
    $(activeSlide).find('#slideInLeft').addClass(animation_slideLeft);
    $(activeSlide).find('#zoomOutDown').addClass(animation_zoomOD);



    //Bubble Animation
    var bubbles = $(activeSlide).find('.bubbles');
    console.log(bubbles)
    var bubblesIndex = 0;
    if(bubbles.length >= 0) {
      var bubblesDelay = setInterval(function(){
        if (bubblesIndex <= bubbles.length) { //run the bubble annimation
          console.log('loged')
          $(bubbles[bubblesIndex]).addClass(animation_bounceIn + ' opa');
          bubblesIndex += 1;
          //Dollar Animation
          if(bubblesIndex === bubbles.length) { //when that is finished run dollar animation
            var dollarload = $(activeSlide).find('.dollar');
            var dollarIndex = 0;

            var dollarDelay = setInterval(function(){
              if (dollarIndex <= dollarload.length){
                $(dollarload[dollarIndex]).addClass(animation_bounceIn + ' opa');
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
    var total = $(activeSlide).find('.total');
    if ( total.length ) {
      setTimeout(function(){
        $(activeSlide).find('.total').addClass(animation_pulse + ' opa');
      }, 5500)
    }


//
//      $({someValue: 50}).delay(300).animate({someValue: 470}, {
//        duration: 600,
//        easing:'swing', // can be anything
//        step:function() {
//          // Update the element's text with rounded-up value:
//          $(activeSlide).find('.changeNumber').text(commaSeparateNumber(Math.round(this.someValue)));
//        },
//      });

  });


  $('.join').click(function(ev){
    ev.target();
    console.log(this);
  });
});

