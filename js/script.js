$(function(){

    //sticky-menu js area start
    $( window ).on('scroll',function(){
      let sticky = $( this ).scrollTop()
      if( sticky > 100 ) {
        $('.navbar').addClass('sticky-menu')
      }
      else {
        $('.navbar').removeClass('sticky-menu')
      }
    })
    //sticky-menu js area start

    //banner js area start
    $('.banner-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
        prevArrow:'.banner-left',
        nextArrow:'.banner-right',
        pauseOnHover:false,
        dots:false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
            }
          },

          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
            }
          },
          ]
      });

   //banner js area  end

  //Portfolio js area start
      new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'grid'
    });

 //Portfolio js area end

  //services js area start
    $('.services-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:'.services-top-arrow',
      nextArrow:'.services-bottom-arrow',
      pauseOnHover:false,
      vertical: true,
      centerMode:true,
      centerPadding:'0px',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
       
        ]
    });

 //services js area end

//review js area start
  $('.review-slider-left').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:'.review-top-arrow',
      nextArrow:'.review-bottom-arrow',
      pauseOnHover:false,
      vertical: true,
      centerMode:true,
      focusOnSelect:true,
      centerPadding:'0px',
      asNavFor:'.review-slider',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },

        ]
    });

    $('.review-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 3000,
      vertical: true,
      asNavFor:'.review-slider-left',
      prevArrow:false,
      nextArrow:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },

        ]
    })
    //review js area start

     //Counter-Up js area start
    $('.counter').counterUp({
      delay: .3,
      time: 100
    })
    //Counter-Up js area start
    
     //review js area start
     $('.meforest-items').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      centerMode: true,
      centerPadding: '0px',
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },

        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            vertical: false,
          }
        },

        ]
    });
    //review js area end

    //scroll js area start
    $('#top-scroll-btn').on('click',function(){
      $('html,body').animate({scrollTop:0},2000)
    })

    $(window).on('scroll',function(){
      var btn = $(this).scrollTop()
      if (btn > 500) {
        $('#top-scroll-btn').fadeIn (100)
      }
      else {
        $('#top-scroll-btn').fadeOut (100)
      }
    })
    //scroll js area end

  
})