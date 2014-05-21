$ ->
  $('.callboxes').on 'mouseenter', (e) ->
    $(@).find('.services-name-box').animate({ backgroundColor: "#D2583E" },400)
    $(@).find('.services-name-box').css("color", "white")
    $(@).find('.callboxes-overlay').fadeIn()
  $('.callboxes').on 'mouseleave', (e) ->
    $(@).find('.services-name-box').animate({ backgroundColor: "#EEEEE" },400)
    $(@).find('.services-name-box').css("color", "black")
    $(@).find('.callboxes-overlay').fadeOut()
