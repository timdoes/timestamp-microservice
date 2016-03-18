
$( document ).ready(function() {
    $("[data-toggle=popover]").popover({
      container: 'form',
      html: true
    });
    
    setTimeout(function() {
      $('h1').removeClass('hidden').addClass('animated zoomInDown');
      $('form').removeClass('hidden').addClass('animated zoomInUp');
    }, 1000);
    
});