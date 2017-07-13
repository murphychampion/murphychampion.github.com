$(document).ready(function () {
   $(window).load(function () {
      $('#mugshot').fadeIn();
   
      setTimeout(function () {
         $('#name').fadeIn();
      
         setTimeout(function () {
            $('#info').fadeIn();
            $('#info2').fadeIn();
         }, 200);
      }, 200);
   });
});
