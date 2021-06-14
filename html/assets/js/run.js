// 스크롤바 커스텀
(function ($) {
    $(window).on("load", function () {
        $(".scrollbar").mCustomScrollbar({
            scrollInertia: 0,
        });

        $(".scrollbar02").mCustomScrollbar({
            scrollInertia: 0,
        });
    });

})(jQuery);


$(document).ready(function () {
    /*footer 유관사이트*/
    $('.fm_site').click(function () {
        $(this).toggleClass('on');
    });

    /*서비스 한줄평 롤링*/
    $('.list_wrap').slick({
        slide: 'div',
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        vertical: true,
    });

    // 자소서 직무별 필터
    $('.filter_wrap li a').off().on('click', function () {
        $(this).toggleClass('on');
    });

    // 탭메뉴
    // 탭 컨텐츠 숨기기
    $(".tab_content").hide();

    // 첫번째 탭콘텐츠 보이기
    $(".tab_container").each(function () {
        $(this).children().children().children("li:first").addClass("active"); //Activate first tab
        $(this).children(".tab_content").first().show();
    });

    //탭메뉴 클릭 이벤트
    $(".tabs li a").click(function () {
        var tab_id = $(this).attr('data-tab');
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".tab_content").hide();
        //        var activeTab = $(this).attr("rel");
        //        $("#" + activeTab).fadeIn();
        $("#" + tab_id).fadeIn();

    });

    // 자소서 직무 선택
    $('.job_select div .bar_list li a').click(function () {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active')

    });

    $(".imgFill").imgLiquid();


    // 페이지 nav
    $('.page_nav a').click(function () {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

    });

    $('.page_nav li:first-child a').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);

    });


    // 스크롤 배너
    var currentPosition = parseInt($(".nav_view").css("top"));
    var height = $(".nav_view").height();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 520) {
            var position = $(window).scrollTop();
            $(".nav_view").stop().animate({
                "top": position - height + "px"
            }, 300);
        } else {
            var position = $(window).scrollTop();
            $(".nav_view").stop().animate({
                "top": position + "px"
            }, 300);

        }


    });

    // target 위치 표시와, 이동 
    var sections = $('.target'),
        section_height = sections.height(),
        nav = $('.nav_view'),
        nav_height = nav.outerHeight();
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').parent().removeClass('active');
                sections.removeClass('active');
                $(this).parent().addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
            }
        });
    });


    $('.btnAdd').on('click', function () {
        $('.text_filed').append('<div class="text_filed_area"><div class="post_write_table pw_item_two mt_30"><table><caption>자기소개서 작성</caption><colgroup><col style="width: 10%"><col /></colgroup><tbody><tr><th scope="row" class="pw_tit"><label for="self_tit">항목(제목)</label></th><td class="pw_txt"><input type="text" placeholder="제목을 입력해주세요." id="self_tit" name="self_tit" class="w100" /></td></tr></tbody></table></div>   <div class="txt_area"><textarea class="textarea" placeholder="내용이 들어갑니다."></textarea></div></div>')
    });


    // 별점 select
    $(".score_select .selected_option a").click(function () {
        //$(".drop-down .options ul").toggle();
        var $options = $(this).parent().siblings('.options');
        $options.toggle();
        $options.addClass('show');
        $(this).parent().toggleClass('show');
    });

    //옵션 선택 및 선택 후 옵션 숨기기
    $(".score_select .options li").click(function () {
        var $options = $(this).parent().siblings('.options')
        var text = $(this).html();
        //$(".drop-down .selected a span").html(text);
        //$(".drop-down .options ul").hide();

        var $selected = $(this).closest('.options').siblings('.selected_option');
        $selected.find('a').html(text);
        $options.removeClass('show');
        $(this).parent().parent().find('.selected_option').removeClass('show');

        $(this).closest('ul').hide();
    });


    //페이지의 다른 위치를 클릭하면 옵션 숨기기
    $(document).bind('click', function (e) {
        var $options = $(this).parent().siblings('.options');
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("score_select")) {
            $(".score_select .options").hide();
            $options.removeClass('show');
            $('.score_select .selected_option').removeClass('show');

        }
    });

    $('.popup_area').each(function () {
        if ($(".popup_area").css("display") == "block") {
            $(this).children('.shadow').show();
            $('body').addClass('not_scroll');
        } else {
            $(this).children('.shadow').hide();
            $('body').removeClass('not_scroll');
        }
    });

    $(document).ready(function () {
        // a href='#' 클릭 무시 스크립트
        $('a[href="#"]').click(function (ignore) {
            ignore.preventDefault();
        });
    });
    
    
      $(window).resize(function(e) {
        $frame.sly('reload');
  });

});
    function close_pop(flag) {
        $('.popup_area').hide();
        $('body').removeClass('not_scroll');
    };


