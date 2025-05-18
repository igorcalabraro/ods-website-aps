$(document).ready(function() {
  $('.aside-menu').on('click', function() {
    $('#sidebar').toggleClass('collapsed');
    // update url with the current state
    if ($('#sidebar').hasClass('collapsed')) {
      window.history.pushState({ sidebar: 'collapsed' }, '', '?sidebar=collapsed');
    } else {
      // remove the sidebar parameter from the URL
      window.history.pushState({}, '', window.location.pathname);
    }
  });

  $('#light-mode').on('click', function() {
    $('html').removeClass('dark')
  })

  $('#dark-mode').on('click', function() {
    $('html').addClass('dark')
  })

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('html').addClass('dark');
  } else {
    $('html').removeClass('dark');
  }

  $(".ods").on('click', function() {
    const odsId = $(this).attr("data-ods")
    window.location.href = window.location.origin + "/ods/" + odsId
  })
  setTimeout(function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('sidebar') && urlParams.get('sidebar') === 'collapsed') {
      $('#sidebar').addClass('collapsed');
    }
  }, 1000)
})