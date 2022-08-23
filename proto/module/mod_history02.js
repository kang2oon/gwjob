$('.mod_history02 .history').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                }
        },
        {
            breakpoint: 821,
            settings: {
                slidesToShow: 2,
                arrows: false,
                }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            arrows: false,
            }
        }
    ]
});