$('body').on('click', '[data-behavior~="clear-finder-entry"]', function(event) {

  var $self = $(this);

  $self.siblings('.fic-finder__input')
    .val('')
    .focus()
  ;

})
