//wow
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();


  //slider

  $('.test-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:'.t-left',
    nextArrow:'.t-right',

  });

  //fixed menu
  $(function(){
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling>300){
        $('.nav-menu').addClass('bg');
      }
      else{
        ('.nav-menu').removeClass('bg');
      }
    })
  })





if ($('.back2top').length) {
    var scrollTrigger = 200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back2top').fadeIn();
            } else {
                $('.back2top').fadeOut();
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back2top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
