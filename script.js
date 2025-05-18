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

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('sidebar') && urlParams.get('sidebar') === 'collapsed') {
    $('#sidebar').addClass('collapsed');
    $('html, body').animate({
      scrollTop: $('#sidebar').offset().top
    }, 500, function() {
      $('#sidebar').css('overflow', 'hidden');
    })
  }

  const sidebarButtons = $('.sidebar-button');
  for (button of sidebarButtons) {
    const buttonElement = $(button);
    const buttonHref = buttonElement.attr('href')
    const windowPathname = window.location.pathname.replace("index.html", "")
    if (buttonHref === windowPathname) {
      buttonElement.addClass('active');
    }
  }
})