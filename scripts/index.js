$(document).ready(function () {
    $('#name').fadeIn(500, "linear", function () {
        $('#position').fadeIn(500, "linear", function () {
            $('#location').fadeIn(500, "linear", function () {
                setTimeout(function () {
                    $('#blurb').fadeIn(500, "linear", function () {
                        $('.buttons').fadeIn();
                    });
                }, 1000);
            });
        });
    });
});
