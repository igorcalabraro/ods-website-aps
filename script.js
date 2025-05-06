$(document).ready(function() {
  $('#hide_menu').on('click', function () {
    $('#sidebar').addClass('collapsed');
  });
  $('#show_menu').on('click', function () {
    $('#sidebar').removeClass('collapsed');
  });
})