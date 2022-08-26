$('.mod_interview01 .iv_tab > div').click(function(){
    var tab = $(this).attr('data-tab');
    $('.mod_interview01 .iv_tab > div, .mod_interview01 .iv_cont > div').removeClass('active');
    $(this).addClass('active');
    $('.mod_interview01 .iv_cont > div[data-tab="'+tab+'"]').addClass('active');
});

$('.mod_interview01 .interview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    infinite: false,
    adaptiveHeight: false,
});