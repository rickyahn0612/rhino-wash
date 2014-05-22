$ ->
  $('html, body').fadeIn(1000)
    
  $('.banner-contents-container').animate({'right': 0, 'opacity': 1}, 2000)
  $('.callboxes').on 'mouseenter', (e) ->
    $(@).find('.services-name-box').animate({ backgroundColor: "#D2583E" },400)
    $(@).find('.services-name-box').css("color", "white")
    $(@).find('.callboxes-overlay').fadeIn()
  $('.callboxes').on 'mouseleave', (e) ->
    $(@).find('.services-name-box').animate({ backgroundColor: "#EEEEE" },400)
    $(@).find('.services-name-box').css("color", "black")
    $(@).find('.callboxes-overlay').fadeOut()

  state = false

  $('#tablet-nav').on 'click', (e) ->
    if state == false
      $('.drop-down').animate({'height': 200}, 0)
      state = true
    else
      $('.drop-down').animate({'height': 0}, 0)
      state = false

  $(window).scroll ->
    winScroll = $(window).scrollTop()
    if winScroll > 200 
      $('.callboxes-list').animate({'top': 0, 'opacity': 1}, 1000)
    if winScroll > 1200
      $('.about-list').animate({'top': 50, 'opacity': 1}, 2000)

