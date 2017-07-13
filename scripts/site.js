function init () {
  window.addEventListener('scroll', function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    var shrinkOn = 150;
    var $header = $('header');
    
    if (distanceY > shrinkOn) {
        $header.addClass('smaller');
    } else {
        $header.removeClass('smaller');
    }
  });  
}

window.onload = init();


var setActivePage = function () {
 var pathname = $(location).attr('pathname');
 var idx = pathname.lastIndexOf('/');
 if (idx > -1) {
   pathname = pathname.slice(idx + 1);
   idx = pathname.lastIndexOf('.');
   
   if (idx > -1) {
     pathname = pathname.slice(0, idx);
   }
 }
 
 $('#' + pathname).addClass('active'); 
}

$(document).ready(function () {
  setActivePage();
  
  $('.name').on('click', function () {
    window.location = '/';
  });
 
  $('#about').on('click', function () {
    window.location = 'about.html';
  });
  
  $('#cv').on('click', function () {
    window.location = 'cv.html';
  });
  
  $('#contact').on('click', function () {
    window.open('mailto:contact@murphychampion.com', target="_top");
  });
});
