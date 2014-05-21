(function() {
  $(function() {
    $('.callboxes').on('mouseenter', function(e) {
      $(this).find('.services-name-box').animate({
        backgroundColor: "#D2583E"
      }, 1000);
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
    return $("body").on({
      touchmove: function(e) {
        return alert('hey');
      }
    });
  });

}).call(this);
