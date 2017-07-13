$(document).ready(function () {
    $('#name').fadeIn(1500, "linear", function () {
        $('#position').fadeIn(1000, "linear", function () {
            $('#location').fadeIn(1000, "linear", function () {
                setTimeout(function () {
                    $('#blurb').fadeIn(1000, "linear", function () {
                        $('.buttons').fadeIn(750);
                    });
                }, 350);
            });
        });
    });
});
