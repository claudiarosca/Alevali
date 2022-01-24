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

    $('#section1 button').click(function() {
        var id = $(this).attr('id');
        populateModal(id)

    });

});

function populateModal(attr) {
    if (attr != undefined) {
        $('#productModal .bigtitle').html('').append(modalData[attr].title);
        $('#productModal .itemContent').html('').append(modalData[attr].content)
        $('#productModal .carousel-inner').html('');
        var first = 0;
        for (var item of modalData[attr].images) {
            if (first == 0) {
                $('#productModal .carousel-inner').append(
                    '<div class="carousel-item active">' +
                    '<img src="' + item + '" class="d-block w-100" alt="...">' +
                    '</div> '
                );
            } else {
                $('#productModal .carousel-inner').append(
                    '<div class="carousel-item">' +
                    '<img src="' + item + '" class="d-block w-100" alt="...">' +
                    '</div> '
                );
            }
            first++;
        }
        $('#productModal .pdfs').html('');
        if (modalData[attr].pdfs.length != 0) {

            for (var item of modalData[attr].pdfs) {
                $('#productModal .pdfs').append(
                    '<a href="' + item + '" class="pdfBtn">View brochure' +
                    '</a> '
                );

                first++;
            }
        }
        $('#productModal').modal('show');
        $('.pdfBtn').EZView();

    }

}