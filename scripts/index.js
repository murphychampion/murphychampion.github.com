$(document).ready(function () {
                  $('#mugshot').fadeIn();
                  
                  setTimeout(function () {
                             $('#name').fadeIn();
                             
                             setTimeout(function () {
                                        $('#info').fadeIn();
                                        }, 200);
                             }, 200);
});