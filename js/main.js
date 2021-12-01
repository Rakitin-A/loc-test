$(function () {

    $('.top-slider__inner').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
        autoplay:true,
        autoplaySpeed:4000,
        arrows: false,
        dots: false,
        centerPadding: '30px',
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
              }
            },
        ]
        
    })


});