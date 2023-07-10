$(document).ready(function () {

    // ПЛАВНЫЙ СКРОЛЛ ПРИ КЛИКЕ НА КНОПКУ
    $('.button-anchor button').click(function () {
        $('html, body').animate({
            scrollTop: $('#section-anchor').offset().top+70
        }, {
            duration: 1000,
        });
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.header__scroll-top').addClass('active');
        } else {
            $('.header__scroll-top').removeClass('active');
        }
    });
    $('.header__scroll-top').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, {
            duration: 1000,
        });

    });
    

    // МОБИЛЬНАЯ ВЕРСИЯ МЕНЮ
    $('.header-mobile__burger').click(function(){
        $('.header__bg-black').toggleClass('open');
        $('.header-mobile__content').toggleClass('open');
    });
    $('.header__bg-black.open').click(function(){
        $('.header__bg-black').removeClass('open');
        $('.header-mobile__content').removeClass('open');
    });


    // КЛИК ПО ПУНКТУ МЕНЮ
    $('.nav__item').click(function(){
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
    });


    // МОДАЛЬНОЕ ОКНО
    $('.cards__button button').click(function(){
        $('.modal-win__background').addClass('open');
        $('.modal-win__content').addClass('open');
        $('body').css('overflow', 'hidden')
    }); 

    $('.modal-win__close').click(function(){
        modalWinClose();
    }); 

    $('.modal-win__content').click(function(e){
        let target = e.target 
        if (!target.closest('.modal-win__body') && !target.closest('.modal-win__close')) { 
            modalWinClose();
        }
    });

    function modalWinClose() {
        $('.modal-win__background').removeClass('open');
        $('.modal-win__content').removeClass('open');

        $('body').css('overflow', 'auto');
    }

    // TIMELINE
    $('.timeline-item.open .timeline-item__text').slideToggle(400);

    $('.timeline-item__date').click(function(){
        if (!($(this).parent().hasClass('open'))){

            $('.timeline-item').removeClass('open');
            $(this).parent().addClass('open');
    
            $('.timeline-item__text').not($(this).next().children('.timeline-item__text')).slideUp(400);
            $(this).next().children('.timeline-item__text').slideToggle(400);
        }
    });
    $('.timeline-item__content').click(function(){
        if (!($(this).parent().hasClass('open'))){

            $('.timeline-item').removeClass('open');
            $(this).parent().addClass('open');

            $('.timeline-item__text').not($(this).children('.timeline-item__text')).slideUp(400);
            $(this).children('.timeline-item__text').slideToggle(400);
        }
    });

    // ВАЛИДАЦИЯ ФОРМ
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $("#phone").click(function (){
        $(this).setCursorPosition(4);
    }).mask("+7 (999) 999-99-99");
    // $("#group").click(function (){
    //     $(this).setCursorPosition(0);
    // }).mask('a?aaaa-9999999999');

    function checkInputValue(name){
        let val = $('#form input[name=' + name + ']').val();
        if (val*1!=0){
            console.log(name+": "+val);
        }else{
            $('#form input[name=' + name + ']').addClass('active');
            $('#form input[name=' + name + ']').next().addClass('active');
        }
    }
    function checkSelectValue(name){
        let val = $('#form select[name=' + name + ']').val();
        if (val*1!=0){
            console.log(name+": "+val);
        }else{
            $('#form select[name=' + name + ']').addClass('active');
            $('#form select[name=' + name + ']').next().addClass('active');
        }
    }
    function checkTextareaValue(name){
        let val = $('#form textarea[name=' + name + ']').val();
        if (val*1!=0){
            console.log(name+": "+val);
        }else{
            $('#form textarea[name=' + name + ']').addClass('active');
            $('#form textarea[name=' + name + ']').next().addClass('active');
        }
    }

    $('#button').click(function () {
        $('#form .form__error').removeClass('active');
        $('#form input').removeClass('active');
        $('#form select').removeClass('active');
        $('#form textarea').removeClass('active');
        checkInputValue('fio');
        checkSelectValue('faculty');
        checkInputValue('group');
        checkSelectValue('team');
        checkInputValue('email');
        checkInputValue('phone');
        checkInputValue('vkr');
        checkTextareaValue('description');
    });

 
    // СЛАЙДЕРЫ
    $('.slider-news').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ],
    });

    $('.slider-carousel').slick({
        infinite: false,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: "250px",
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    centerPadding: "210px",
                },
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: "130px",
                    arrows: false,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    centerMode: false,
                    arrows: false,
                }
            },
        ],
    });
});
