$(document).ready(function(){
    var navOffset = $('#mod_select').offset();
    //console.log(navOffset);
    $(window).scroll(function(){
        if( $(document).scrollTop() > navOffset.top ){	
            $('#mod_select').addClass('fixed');
        } else {
            $('#mod_select').removeClass('fixed');
        }
    });

    $('.tab_wrap > div').click(function(){
        var tab = $(this).attr('data-tab');
        $('.tab_wrap > div, .tcont_wrap > div').removeClass('active');
        $(this).addClass('active');
        $('.tcont_wrap > div[data-tab="'+tab+'"]').addClass('active');
    });

    $.ajax({
        complete : function(){
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
        }
    });
});