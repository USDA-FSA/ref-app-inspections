
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

$('body').on('change', '[data-behavior~="inspections-assignee-filter"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-filter-target'))
  var $targetRows = $target.find('[data-assignee]')
  var newAssignee = $self.val();
  var $newAssigneeRow = $('[data-assignee="' + newAssignee + '"]')

  $targetRows.attr('data-foo', 'bar')
  $newAssigneeRow.attr('data-hey', 'yo')

})

$('body').on('change', '[data-behavior~="inspections-select-row"]', function(event) {

  var $self = $(this);
  var $row = $self.closest('.fic-inspections__row');

  $row.toggleClass('fic-inspections__row--selected');

})

$('body').on('change', '[data-behavior~="inspections-toggle-header"]', function(event) {

  var $self = $(this);

  $('#fic-inspection-hd__list-header').attr('hidden', true);
  $('#fic-inspection-hd__triage').removeAttr('hidden');

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

$('body').on('change', '[data-behavior~="enable-field"]', function(event) {

  var $self = $(this);
  var $target = $($self.data('enable-target'));

  $target.removeAttr('disabled');

})

$('body').on('change', '[data-behavior~="disable-field"]', function(event) {

  var $self = $(this);
  var $target = $($self.data('disable-target'));

  $target.attr('disabled', 'disabled');

})

$('body').on('change', '[data-behavior~="reset-field"]', function(event) {

  var $self = $(this);
  var $target = $($self.data('reset-target'));

  $target.prop("selected", false);

})

$('body').on('click', '[data-behavior~="reset-filter-fields"]', function(event) {

  var $self = $(this);
  var $row = $self.closest('tr')
  var $target = $row.find('option:selected');
  var $targetDisabled = $($self.data('disable-targets'));

  $target.prop("selected", false);
  $targetDisabled.attr('disabled', true);

})
