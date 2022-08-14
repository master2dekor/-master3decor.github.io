function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Читать больше";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Читать меньше";
      moreText.style.display = "inline";
    }
  }
  $(function(){
    $('.minimized').click(function(event) {
      var i_path = $(this).attr('src');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
       left: ($(document).width() - $('#magnify').outerWidth())/2,
       // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
              top: ($(window).height() - $('#magnify').outerHeight())/2
     });
      $('#overlay, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
  
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
  });
    