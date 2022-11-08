$(document).ready(function () {
  $('.slider-box').fadeOut()
  $('.main_hotspots .hotspot').click(function () {

    
    var element = $(this).closest('.hotspot').attr('id')

    var el1 = $('.' + element).hasClass('active');

    if(!el1) {
        $('.slider-box').fadeOut();
        $('.slider-box').removeClass('active')
        $('.hp_numbers h2').removeClass('active')
        $(this).find('.hp_numbers h2').addClass('active')
       
        $('.' + element).fadeIn();
        $('.' + element).addClass('active')
        $('.slick-slider').slick('refresh')
    }



  })

  $('.close_btn').click(function () {
    var el = $(this).closest('.slider-box');
    var thus = $(this)

    if(el.hasClass('active')){
        thus.closest('.slider-box').fadeOut()
        $('.hp_numbers h2').removeClass('active')
        $('.slider-box').removeClass('active')
        $('#slick-slider').slick('refresh')
    }


  })
})
