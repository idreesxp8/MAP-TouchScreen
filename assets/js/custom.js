$(document).ready(function () {


  // temple fetching images
  var dir = "assets/images/temple/"; // folder location
  var fileextension = ".jpg"; // image format
  var i = "1";

  $(function imageloop(){
    $("<img />").attr('src', dir + i + fileextension ).appendTo(".temple_salm_slider");
    if (i==3){
      console.log('loaded');
      $(".temple_salm_slider").slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
    });
    }
    else{
      i++;
      imageloop();
    };
  });   
  // fetching images end

    // birhadaj fetching images
    var dir = "assets/images/birhadaj/"; // folder location
    var fileextension = ".jpg"; // image format
    var i2 = "1";
  
    $(function imageloop(){
      $("<img />").attr('src', dir + i2 + fileextension ).appendTo(".bir_hadaj_slider");
      if (i2==3){
        console.log('loaded');
        $(".bir_hadaj_slider").slick({
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: true,
          dots: false,
      });
      }
      else{
        i2++;
        imageloop();
      };
    });   
    // fetching images end

        // souq_slider fetching images
        var dir = "assets/images/souq_slider/"; // folder location
        var fileextension = ".jpg"; // image format
        var i3 = "1";
      
        $(function imageloop(){
          $("<img />").attr('src', dir + i3 + fileextension ).appendTo(".souq_slider");
          if (i3==3){
            console.log('loaded');
            $(".souq_slider").slick({
              slidesToShow: 1,
              infinite: true,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 2000,
              arrows: true,
              dots: false,
          });
          }
          else{
            i3++;
            imageloop();
          };
        });   
        // fetching images end


                // palace_slider fetching images
                var dir = "assets/images/palace_slider/"; // folder location
                var fileextension = ".jpg"; // image format
                var i4 = "1";
              
                $(function imageloop(){
                  $("<img />").attr('src', dir + i4 + fileextension ).appendTo(".palace_slider");
                  if (i4==3){
                    console.log('loaded');
                    $(".palace_slider").slick({
                      slidesToShow: 1,
                      infinite: true,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 2000,
                      arrows: true,
                      dots: false,
                  });
                  }
                  else{
                    i4++;
                    imageloop();
                  };
                });   
                // fetching images end


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


 
});
