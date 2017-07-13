$(document).ready(function () {
    $('#name').fadeIn(1500, "linear", function () {
        $('#position').fadeIn(1000, "linear", function () {
            $('#location').fadeIn(1000, "linear", function () {
                setTimeout(function () {
                    $('#blurb').fadeIn(1000, "linear", function () {
                        setTimeout(function() { $('.buttons').fadeIn(750); }, 500);
                    });
                }, 450);
            });
        });
    });
    
    $('.button').on('touchstart', function () {
        $(this).addClass('buttonActive');
    });
    
    $('.button').on('touchend', function () {
        $(this).removeClass('buttonActive');
    });
    
    $('#btnAbout').on('click', function () {
        window.location = '../about.html';
    });
    
    $('#btnCV').on('click', function () {
        window.location = '../cv.html';
    });
    
    $('#btnContact').on('click', function () {
        window.open('mailto:contact@murphychampion.com', target="_top");
    });
});
