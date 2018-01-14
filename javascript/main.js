$(document).ready(function () {
  // CHECK IF BROWSER IS IE
  function isIE() {
    var ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
  }
  if (isIE()) {
    var cover = document.getElementById("ie-cover");
    cover.style.display = "block";
    document.body.style.overflowY = "hidden";
  } 

  // HEADER
  window.onscroll = () => {
    var header = document.getElementsByTagName("header")[0];
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      header.style.boxShadow = "0 8px 16px 0 rgba(0, 0, 0, 0.2)";
    } else {
      header.style.boxShadow = "";
    }
}

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
    if (wS > (hT+hH-wH)) {
      document.getElementsByClassName('about-scale')[0].style.width = "79%";
      document.getElementsByClassName('about-scale')[1].style.width = "90%";
      document.getElementsByClassName('about-scale')[2].style.width = "69%";
      document.getElementsByClassName('about-scale')[3].style.width = "92%";
    }
  });
});