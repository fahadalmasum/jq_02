$(function () {
// Nav Fixed
$(window).scroll( function() {

let scrTop = $(window).scrollTop()
console.log(scrTop);

if (scrTop > 320) {
    $('nav').addClass('navFixed')
} else{
 $("nav").removeClass('navFixed');
}
// backBtn
if (scrTop > 2897.5) {
    $('.backBtn').fadeIn();
} else{
    $('.backBtn').fadeOut();
}
});

// BackBtn

$('.backBtn').click(function () {

    $('html,body').animate({
        scrollTop:0
    }, 370)

});
});


$(window).on('load', function () {
    $(".preloder").delay(1000).fadeOut();
})

