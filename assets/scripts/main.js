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
    setTheme('light');
  })

  $('#dark-mode').on('click', function() {
    setTheme('dark');
  })

  const themeStorage = localStorage.getItem('theme');
  if (themeStorage) {
    setTheme(themeStorage, true);
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
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
    const windowPathname = "/" + window.location.pathname.split("/").pop().replace("index", "").replace(".html", "")
    if (buttonHref === windowPathname) {
      buttonElement.addClass('active');
    }
  }
})

function setTheme(mode, ignoreSave) {
  if (mode != 'light' && mode != 'dark') return;
  (mode == 'light' ? $('html').removeClass('dark') : $('html').addClass('dark'));
  if (!ignoreSave) {
    localStorage.setItem('theme', mode);
  }
  return true
}