/*
  <p><button type="button" class="fsa-btn fsa-btn--secondary" data-behavior="test-jquery">jquery test</button></p>
*/
$('body').on('click', '[data-behavior~="test-jquery"]', function(event) {
  $(this).html('woot, jQuery s\'all good');
});