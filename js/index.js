$(document).ready(function() {
    $('#introCarousel').css(" margin-top", "0 !important");
    if (window.scrollY > 50) {

        $('#navbar_top').css("background-color", "white");
        $('.navbar .nav-link').css("color", "#3b3023");
        $('.navbar .nav-link').removeClass("ipadColor");
        $('#introCarousel').css(" margin-top", "0");
        $('.fixed-top').removeClass('menu-left');
        $('.bar1, .bar2, .bar3').css("background-color", "#3b3025");
        $('.logoImage').show();
        $('.navbar').css("box-shadow", "rgb(0 0 0 / 40%) 0px 32px 48px -8px");
        $('.navbar-dark .navbar-toggler').css("border-color", "rgb(0 0 0 )");
        $('.navbar-dark .navbar-toggler-icon').css("background-image", "url(../assets/icons/menu.png)");

    }
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {

            $('#navbar_top').css("background-color", "white");
            $('.navbar .nav-link').css("color", "#3b3023");
            $('.navbar .nav-link').removeClass("ipadColor");
            $('#introCarousel').css(" margin-top", "0");
            $('.fixed-top').removeClass('menu-left');
            $('.bar1, .bar2, .bar3').css("background-color", "#3b3025");
            $('.logoImage').show();
            $('.navbar').css("box-shadow", "rgb(0 0 0 / 40%) 0px 32px 48px -8px");
            $('.navbar-dark .navbar-toggler').css("border-color", "rgb(0 0 0 )");
            $('.navbar-dark .navbar-toggler-icon').css("background-image", "url(../assets/icons/menu.png)");

        } else {
            $('.navbar').css("box-shadow", "none");
            $('#navbar_top').css("background-color", "transparent");
            $('.navbar .nav-link').css("color", "white");
            $('.navbar .nav-link').addClass("ipadColor");
            $('.bar1, .bar2, .bar3').css("background-color", "#fff");
            $('.fixed-top').addClass('menu-left');
            $('.logoImage').hide();
            $('.navbar-dark .navbar-toggler').css("border-color", "rgb(255 255 255 )");
            $('.navbar-dark .navbar-toggler-icon').css("background-image", "url(../assets/icons/white-menu.png)");
        }
    });

    $('.imageHref').EZView();
});

function myFunction(x) {
    x.classList.toggle("change");
}