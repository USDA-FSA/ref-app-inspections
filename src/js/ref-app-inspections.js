
console.log('ref-app-inspections.js loaded');

$('body').on('change', '[data-behavior~="inspections-filter"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-filter-target'))
  var newStatus = $self.val();

  $target
    .removeClass('fic-inspections--status-filter-is-all fic-inspections--status-filter-is-complete fic-inspections--status-filter-is-assigned fic-inspections--status-filter-is-logged fic-inspections--status-filter-is-in-progress fic-inspections--status-filter-is-rejected ')
    .addClass('fic-inspections--status-filter-' + newStatus)
  ;

  if ($target.hasClass('fic-inspections--status-filter-is-all')) {
    $('#inspections-pagination').removeAttr('hidden');
  }
  else {
    $('#inspections-pagination').attr('hidden', 'true');
  }

})
