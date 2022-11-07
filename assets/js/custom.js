$(document).ready(function(){


    $('.slider-box').fadeOut();
    $('.main_hotspots .hotspot').click(function() {
        var element = $(this).closest('.hotspot').attr('id');
        $('.hp_numbers h2').removeClass('active');
        $(this).find('.hp_numbers h2').addClass('active');
        $('.slider-box').fadeOut();
        $('.'+element).fadeIn('slow');
        $('.slick-slider').slick('refresh');
        });


     $('.close_btn').click(function() {
        console.log('close');

        $(this).closest('.slider-box').fadeOut('slow');
        $('.hp_numbers h2').removeClass('active');
        $('#slick-slider').slick('refresh');
     });

  });   