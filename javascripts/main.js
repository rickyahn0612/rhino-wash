(function() {
  $(function() {
    $('.callboxes').on('mouseenter', function(e) {
      $(this).find('.services-name-box').animate({
        backgroundColor: "#D2583E"
      }, 400);
      $(this).find('.services-name-box').css("color", "white");
      return $(this).find('.callboxes-overlay').fadeIn();
    });
    return $('.callboxes').on('mouseleave', function(e) {
      $(this).find('.services-name-box').animate({
        backgroundColor: "#EEEEE"
      }, 400);
      $(this).find('.services-name-box').css("color", "black");
      return $(this).find('.callboxes-overlay').fadeOut();
    });
  });

}).call(this);
