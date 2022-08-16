$(function() {

    $(document).ready(function() {
      var mHtml = $("html");
      var page = 1;
      mHtml.animate({scrollTop : 0},10);
      var scrollOffset = $('html').offset();
  
      $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
          $('.top').addClass('active')
        }
        else {
          $('.top').removeClass('active');
        }
      });
    });
  });
  $(function() {

    $(document).ready(function() {
  
      var scrollOffset = $('#top_bg').offset();
  
      $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
          $('#top_bg').addClass('active2')
        }
        else {
          $('#top_bg').removeClass('active2');
        }
      });
    });
  });

  $(function() {

    $(document).ready(function() {
  
      var scrollOffset = $('#top').offset();
  
      $(window).scroll(function() {
        if ($(document).scroll() > scrollOffset.top) {
          $('#top').addClass('active3')
        }
      });
    });
  });
  
