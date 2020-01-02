$(document).ready(function() {

    // Scroll animations
    AOS.init();

    $('.js-scrollTo').click(function() {
        var page = $(this).attr('href');
        var speed = 750; // milliseconds

        $('html, body').animate(
            { 
                scrollTop: $(page).offset().top 
            }
            , speed
        );
        
        return false;
    });

    // Carousel
    $('.is-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    // Burger menu
    $('.navbar-burger').click(function() {
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });

    // Modal
    $('.modal-close, .modal-background').click(function () {
        $('.modal').removeClass('is-active');
        $('html').removeClass('is-clipped');
    });

    // Tabs
    $('.tab').click(function () {
        const anchor = $(this).data('anchor');

        $('.tab').removeClass('is-active');
        $('.tab[data-anchor="' + anchor + '"]').addClass('is-active');

        $('.screen').removeClass('is-active');
        $('.screen[data-source="' + anchor + '"]').addClass('is-active');
    });
});