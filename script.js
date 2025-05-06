$(document).ready(function() {
  $('.aside-menu').on('click', function() {
    $('#sidebar').toggleClass('collapsed');
  });

  $('#light-mode').on('click', function() {
    $('html').removeClass('dark')
  })

  $('#dark-mode').on('click', function() {
    $('html').addClass('dark')
  })
})