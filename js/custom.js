$(document).ready(function () {

    var menu = $('.navbar');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.content').addClass('menu-padding');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.content').removeClass('menu-padding');
        }
    }
    document.onscroll = scroll;
});

jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});
