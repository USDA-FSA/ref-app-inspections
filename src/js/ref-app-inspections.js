
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

$('body').on('change', '[data-behavior~="inspections-select-row"]', function(event) {

  var $self = $(this);
  var $row = $self.closest('.fic-inspections__row');

  $row.toggleClass('fic-inspections__row--selected');

})

$('body').on('change', '[data-behavior~="inspections-select-all"]', function(event) {

  var $self = $(this);
  var $row = $self.closest('.fic-inspections__row--thead');
  var $table = $self.closest('.fic-inspections');
  var $rowsAll = $table.find('.fic-inspections__row:not([data-status="is-complete"])');
  var $rowsAllChecks = $rowsAll.find('.fsa-checkbox:not([disabled])');
  var isChecked = $self.is(':checked');

  if(isChecked) {
    $rowsAll.addClass('fic-inspections__row--selected');
    $rowsAllChecks.prop('checked', true);
  }
  else {
    $rowsAll.removeClass('fic-inspections__row--selected');
    $rowsAllChecks.prop('checked', false);
  }

  return false;

})

$('body').on('click', '[data-behavior~="clear-finder-entry"]', function(event) {

  var $self = $(this);

  $self.siblings('.fic-finder__input')
    .val('')
    .focus()
  ;

})
