// FLOATING VIDEO
var $window = $(window);
var $videoWrap = $('.video-wrap');
var $video = $('.video');
var videoHeight = $video.outerHeight();

$window.on('scroll', function () {
    var windowScrollTop = $window.scrollTop();
    var videoBottom = videoHeight + $videoWrap.offset().top;

    if (windowScrollTop > videoBottom) {
        $videoWrap.height(videoHeight);
        $video.addClass('stuck');
    } else {
        $videoWrap.height('auto');
        $video.removeClass('stuck');
    }
});


//BANNER CAROUSEL SLIDER
$('.slider').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    autoplay:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
    }
})

//FIXTURE SLIDER
$(".custom-carousel").owlCarousel({
    autoWidth: true,
    //loop: true,
});
$(document).ready(function () {
    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });
});