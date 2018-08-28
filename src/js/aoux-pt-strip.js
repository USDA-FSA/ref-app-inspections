$('body').on('click', '[data-prototype-show]', function(event) {

  var $self = $(this);
  var $target = $($self.data('prototype-show'));
  $target.removeAttr('hidden')

})

$('body').on('click', '[data-prototype-hide]', function(event) {

  var $self = $(this);
  var $target = $($self.data('prototype-hide'));
  $target.attr('hidden', true)

})

$('body').on('click', '.yo', function(event) {

  $(this).remove();

})
