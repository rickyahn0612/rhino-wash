(function() {
  $(function() {
    $('html, body').fadeIn(1000);
    $('.banner-contents-container').animate({
      'right': 0,
      'opacity': 1
    }, 2000);
    $('.callboxes').on('mouseenter', function(e) {
      $(this).find('.services-name-box').animate({
        backgroundColor: "#D2583E"
      }, 400);
      $(this).find('.services-name-box').css("color", "white");
      return $(this).find('.callboxes-overlay').fadeIn();
    });
    $('.callboxes').on('mouseleave', function(e) {
      $(this).find('.services-name-box').animate({
        backgroundColor: "#EEEEE"
      }, 400);
      $(this).find('.services-name-box').css("color", "black");
      return $(this).find('.callboxes-overlay').fadeOut();
    });
    return $(window).scroll(function() {
      var winScroll;
      winScroll = $(window).scrollTop();
      if (winScroll > 200) {
        $('.callboxes-list').animate({
          'top': 0,
          'opacity': 1
        }, 1000);
      }
      if (winScroll > 1200) {
        return $('.about-list').animate({
          'top': 50,
          'opacity': 1
        }, 2000);
      }
    });
  });

}).call(this);
