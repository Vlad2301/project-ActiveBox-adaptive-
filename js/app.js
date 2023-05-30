$(function () {


    /* Fixed header */
    const header = $('.jsHeader');
    const intro = $('.jsIntro');

    /*   let introHeight;
      let scrollPos; */

    $(window).on('scroll load resize', function () {

        let introHeight = intro.innerHeight();
        let scrollPos = $(this).scrollTop();

        if (scrollPos > introHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });



    /* Smooth menu */
    const button = $('.jsBurger-menu__button');
    const nav = $('.jsNav');

    $('[data-scroll]').on('click', function (e) {
        e.preventDefault();

        let itemId = $(this).data('scroll');
        let elemOffset = $(itemId).offset().top;
        let navHeight = $('.header').innerHeight();

        button.parent().toggleClass('burger-menu_active');
        nav.toggleClass('show');

        $('html, body').animate({
            scrollTop: elemOffset - navHeight,
        }, 1000);
    });

    /* Toggle nav */
    button.on('click', function (e) {
        e.preventDefault();
        button.parent().toggleClass('burger-menu_active');
        nav.toggleClass('show');
    });



    /* Reviews */
    const slider = $('.jsReviews__slider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
      });
})