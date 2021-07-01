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




	// 온라인 참여기업  슬라이드
	var $slider = $('.online_slider');
	var $progressBar = $('.progress');
	var $progressBarLabel = $('.slider__label');

	$slider.on("init", function () {
		setTimeout(function () {
			$slider.slick("slickGoTo", 0, true);
		}, 0);
	});


	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var calc = ((nextSlide + 1) / (slick.slideCount)) * 100;
		$progressBarLabel
			.css('width', calc + '%')
			.attr('aria-valuenow', calc);

		$progressBarLabel.text(calc + '% completed');
	});

	$slider.slick({
		infinite: true,
		rows: 2,
		slidesPerRow: 4,
		arrows: true,
		infinite: false,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					rows: 2,
					slidesPerRow: 3
				}
        },
			{
				breakpoint: 768,
				settings: {
					rows: 2,
					slidesPerRow: 2
				}
        },
			{
				breakpoint: 480,
				settings: {
					rows: 2,
					slidesPerRow: 2
				}
        },

  ]
	});

	$('.online_slider').on('wheel', (function (e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	}));

	// 달력
	$(".datepicker-wrap input").datepicker({
		dateFormat: 'yy-mm-dd' //달력 날짜 형태
			,
		showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
			,
		showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
			,
		changeYear: true //option값 년 선택 가능
			,
		changeMonth: true //option값  월 선택 가능                
			,
		showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
			,
		buttonImage: "./images/sub/calendar_ico.png" //버튼 이미지 경로
			,
		buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
			,
		buttonText: "선택" //버튼 호버 텍스트              
			,
		yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
			,
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
			,
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
			,
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
			,
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
			,
		minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
			,
		maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
	});


	// 자격증 입력
	$('.certi_add').on('click', function () {
		$(this).parent().parent().parent().parent('.pw_txt').append('<div class="certi_wrap"><div><input type="text" value="자격증 명칭을 입력하세요." id="certificate" class="tit"><select><option>자격증 발행기관</option> </select></div><div><div class="datepicker-wrap"><input type="text"  placeholder="입력"></div><div class="btn_wrap"><input type="button" value="- 자격증 삭제" class="btn_line btn_pink_line02 btn certi_rmv"></div></div></div>');

		// 달력
		$(".datepicker-wrap input").datepicker({
			dateFormat: 'yy-mm-dd' //달력 날짜 형태
				,
			showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
				,
			showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
				,
			changeYear: true //option값 년 선택 가능
				,
			changeMonth: true //option값  월 선택 가능                
				,
			showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
				,
			buttonImage: "./images/sub/calendar_ico.png" //버튼 이미지 경로
				,
			buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
				,
			buttonText: "선택" //버튼 호버 텍스트              
				,
			yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
				,
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
				,
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
				,
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
				,
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
				,
			minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
				,
			maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
		});
		$('.certi_rmv').on('click', function () {
			$(this).parent().parent().parent().remove();
		})
	});

	//파일 업로드
	var fileTarget = $('.filebox .upload-hidden');

	fileTarget.on('change', function () {
		if (window.FileReader) {
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}

		$(this).siblings('.upload-name').val(filename);
	});
	$(".file_reset").click(function () {
		$(this).parent().find('.upload-name').val('');
	});


	var wrapper = $(".input_fields_wrap"); //Fields wrapper
	var add_button = $(".add_field_button"); //Add button ID
	var x = 1; //initlal text box count
	$('.file_wrap_inbtn .add_field_button').click(function (e) {
		e.preventDefault();
		x++;
		$('.file_wrap_inbtn').parent().append('<div class="file_wrap_inbtn"><div class="file_wrap mt_10"><div class="filebox"><div class="btn_wrap"><label for="filenew' + x + '" class="btn_line btn_pink_line02 file_btn">파일 찾아보기</label></div><input type="file" id="filenew' + x + '" class="upload-hidden"><input class="upload-name" disabled="disabled"><a href="#" class="file_reset">파일 지우기</a></div></div><div class="btn_wrap"><a href="javascript:void(0)" class="btn_line btn_pink_line02 remove_field_button">- 삭제</a></div></div>');


		var fileTarget = $('.filebox .upload-hidden');

		fileTarget.on('change', function () {
			if (window.FileReader) {
				var filename = $(this)[0].files[0].name;
			} else {
				var filename = $(this).val().split('/').pop().split('\\').pop();
			}

			$(this).siblings('.upload-name').val(filename);
		});

		$('.remove_field_button').on('click', function (e) {
			$(this).parent().parent().remove();

		});
	});

	//프린트 -> 취업활동증명서 출력
	$('#prt_btn').on("click", function () {
		$('#print-layer').printThis({
			importCSS: true,
			base: "https://gwjob.kgoon.pw/html/%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%B1%84%EC%9A%A9%EB%B0%95%EB%9E%8C%ED%9A%8C_main_%ED%8C%9D%EC%97%85.html", //출력안되면 주소변경,
			importStyle: true,
			printContainer: true,
			debug: true
		});
	});


	//온라인채용박람회>입사지원현황
	$('.mng_result_list li a').click(function () {
		$(this).parent().addClass('active')
		$(this).parent().siblings().removeClass('active');
	});


	// 파일찾아보기 2
	$('.form-group input[type="file"]').each(function () {
		// get label text
		var label = $(this).parents('.form-group').find('label').text();
		label = (label) ? label : 'Upload File';

		// wrap the file input
		$(this).wrap('<div class="input-file"></div>');
		// display label
		$(this).before('<span class="btn">' + label + '</span>');
		// we will display selected file here
		$(this).before('<span class="file-selected"></span>');

		// file input change listener 
		$(this).change(function (e) {
			// Get this file input value
			var val = $(this).val();

			// Let's only show filename.
			// By default file input value is a fullpath, something like 
			// C:\fakepath\Nuriootpa1.jpg depending on your browser.
			var filename = val.replace(/^.*[\\\/]/, '');

			// Display the filename
			$(this).siblings('.file-selected').text(filename);
		});
	});

	// Open the file browser when our custom button is clicked.
	$('.input-file .btn').click(function () {
		$(this).siblings('input[type="file"]').trigger('click');
	});

	// 사전질문 추가
	$('.qusetion_tit .q_add').on('click', function () {
		$('.qusetion_wrap').children('.qusetion_cont').children().append('<li><input type="text" placeholder="사전질문을 입력해주세요." class="w100 br_none"></li>')
	});

	// 사전질문 삭제
	$('.qusetion_tit .q_remove').on('click', function () {
		$(this).parent().parent().parent().parent().find('.qusetion_cont').find('ul li:last-child').remove();
	});


	// 사전진단 그렇다 아니오 선택시 이벤트
	$('.diag_list_area .btn_radio input:checked').each(function () {
		$(this).parent().parent().parent().parent().children('.txt').children().addClass('highLight');
	});

	$('.diag_list_area .btn_radio input').change(function () {
		$(this).parent().parent().parent().parent().children('.txt').children().addClass('highLight');
	})

	// 직업선호도 진단
	$('.job_selct_wrap  a').click(function () {
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active');
	});


	//직접선호도 진단 서비스 팝업
	$('.job_type_area .exp .btn').click(function () {
		$(this).toggleClass('on');
		$(this).text( $(this).text() == '간단히 보기 -' ? "자세히 보기 + " : "간단히 보기 -");
		$(this).parent().parent().next().slideToggle(200);
	});




});

function openModal(modalname) {
	document.get
	$("." + modalname).show();
	$('body').addClass('not_scroll');
	$('.shadow').show();
}

function close_pop(flag) {
	$('.popup_area').hide();
	$('body').removeClass('not_scroll');
	$('.shadow').hide();
};
