$(document).ready(function(){
  $('#recent-projects').hide()
$(window).scroll(function() { // when the page is scrolled run this
    if($(this).scrollTop() != 0) { // if you're NOT at the top
        $('#recent-projects').fadeIn("fast"); // fade in
    } else { // else
        $('#recent-projects').fadeOut("fast"); // fade out
      }
    });

$('#recent-projects').click(function() { // when the button is clicked
    $('body,html').animate({scrollTop:0},500); // return to the top with a nice animation
  });
})
