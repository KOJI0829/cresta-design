/* slider */
$(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });  
})

/* sticky header */
$(function(){
  let $win = $(window),
      $fv = $('.fv'),
      $header = $('.header'),
      fvHeight = $fv.outerHeight();
      fixedClass = 'fixed';      
  $win.on('load scroll',function(){
    let value = $(this).scrollTop();
    if($win.width() > 768){
      if(value > fvHeight) {
        $header.addClass(fixedClass);
      }else{
        $header.removeClass(fixedClass);
      }
    }
  });
});

/* burger */
$(function(){  
  $('.burger-btn').on('click',function(){
  $(this).toggleClass('cross');
  $('.header-nav').fadeToggle(300);
  $('body').toggleClass('noscroll');
  });
});




