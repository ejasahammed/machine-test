$('.wrg-slider__outer').slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1
});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $(".wrg-header").addClass("sticky");
        $("body").addClass("wrg-header__sticky-smooth");
    } else {
        $(".wrg-header").removeClass("sticky");
        $("body").removeClass("wrg-header__sticky-smooth");
    }
});

