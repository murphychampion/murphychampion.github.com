function init () {
  window.addEventListener('scroll', function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    var shrinkOn = 300;
    var $header = $('header');
    
    if (distanceY > shrinkOn) {
        $header.addClass('smaller');
    } else {
        $header.removeClass('smaller');
    }
  });
}

window.onload = init();
