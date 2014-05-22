(function() {
  $(function() {
    var state;
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
    state = false;
    $('#tablet-nav').on('click', function(e) {
      if (state === false) {
        $('.drop-down').animate({
          'height': 200
        }, 0);
        return state = true;
      } else {
        $('.drop-down').animate({
          'height': 0
        }, 0);
        return state = false;
      }
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
