$(document).ready(function () {


  $('.langswitch').click(function() {
    var checkeng = true;
    var checkar = false;
    checkeng =  $(this).closest('.slider_content_box').find('.content_heading.en').hasClass('active');
    checkar =  $(this).closest('.slider_content_box').find('.content_heading.ar').hasClass('active');

    console.log(checkeng);
    if(checkeng) {
      console.log(checkeng);
      $(this).closest('.slider_content_box').find('.content_heading.en').removeClass('active');
      $(this).closest('.slider_content_box').find('.content_heading.ar').addClass('active');
      $(this).closest('.slider_content_box').find('.overflow-text .ar').addClass('active');
      $(this).closest('.slider_content_box').find('.overflow-text .en').removeClass('active');
    } else {
      $(this).closest('.slider_content_box').find('.content_heading.en').addClass('active');
      $(this).closest('.slider_content_box').find('.content_heading.ar').removeClass('active');
      $(this).closest('.slider_content_box').find('.overflow-text .en').addClass('active');
      $(this).closest('.slider_content_box').find('.overflow-text .ar').removeClass('active');
    }
  });


  $('.slider-box').fadeOut()
  $('.main_hotspots .hotspot').click(function () {

    


    var element = $(this).closest('.hotspot').attr('id')

    var el1 = $('.' + element).hasClass('active');

    if(!el1) {
      $('.content_heading.en').addClass('active');
      $('.content_heading.ar').removeClass('active');
      $('.overflow-text .en').addClass('active');
      $('.overflow-text .ar').removeClass('active');


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


    $('.content_heading.en').addClass('active');
    $('.content_heading.ar').removeClass('active');
    $('.overflow-text .en').addClass('active');
    $('.overflow-text .ar').removeClass('active');

  })
})
