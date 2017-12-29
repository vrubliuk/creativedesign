$(document).ready(function () {
  // SMOOTH SCROLLING ANCHOR LINKS
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
  // ANIMATION
  $(window).scroll(function () {
    var hT = $('#about').offset().top,
      hH = $('#about').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
      document.getElementsByClassName('about-scale')[0].style.width = "79%";
      document.getElementsByClassName('about-scale')[1].style.width = "90%";
      document.getElementsByClassName('about-scale')[2].style.width = "69%";
      document.getElementsByClassName('about-scale')[3].style.width = "92%";
    }
  });
});
