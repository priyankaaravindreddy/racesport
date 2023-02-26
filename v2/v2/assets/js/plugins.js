// RESPONSIVE MENU
$(function () {
    'use strict'
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
})
$(function () {
    $('#navToggle').click(function () {
        $('#navbar-hamburger').toggleClass('d-none');
        $('#navbar-close').toggleClass('d-none');
    });
});

// ANIMATED SCROLL LINK
$(".anchor").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({ scrollTop: $(aid).offset().top - 100 }, 'slow');
});