var modalData = function() {
    var jsonTemp = null;
    $.ajax({
        'async': false,
        'url': "../json/modal-data.json",
        'success': function(data) {
            jsonTemp = data.modals;
        }
    });
    return jsonTemp;
}();

$(document).ready(function() {
    $('.colapseContent1').toggle();
    $('.colapseContent2').toggle();
    $('.colapseContent3').toggle();
    $('#introCarousel').css(" margin-top", "0 !important");
    if (window.scrollY > 50) {

        $('#navbar_top').css("background-color", "white");
        $('.navbar .nav-link').css("color", "black");
        $('#introCarousel').css(" margin-top", "0");
        $('.navbar').css("box-shadow", "rgb(0 0 0 / 40%) 0px 32px 48px -8px");

    }
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {

            $('#navbar_top').css("background-color", "white");
            $('.navbar .nav-link').css("color", "black");
            $('#introCarousel').css(" margin-top", "0");
            $('.navbar').css("box-shadow", "rgb(0 0 0 / 40%) 0px 32px 48px -8px");

        } else {
            $('.navbar').css("box-shadow", "none");
            $('.navbar .nav-link').css("color", "white");
        }
    });

    $('.colapseTitle1').click(function() {
        $(this).find('img').toggleClass('rotateImg');
        $('.colapseContent1').toggle();
    });

    $('.colapseTitle2').click(function() {
        $(this).find('img').toggleClass('rotateImg');
        $('.colapseContent2').toggle();
    });

    $('.colapseTitle3').click(function() {
        $(this).find('img').toggleClass('rotateImg');
        $('.colapseContent3').toggle();
    });
});