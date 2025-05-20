$(document).ready(function() {
  $('.aside-menu').on('click', function() {
    $('#sidebar').toggleClass('collapsed');
    if ($('#sidebar').hasClass('collapsed')) {
      localStorage.setItem('sidebar', 'collapsed');
    } else {
      localStorage.removeItem('sidebar');
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

  const sidebarStorage = localStorage.getItem('sidebar') || "";
  if (sidebarStorage == 'collapsed') {
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

  const searchBar = $(".search-input")
  for (search of searchBar) {
    const searchElement = $(search);
    searchElement.on('input', function() {
      const searchValue = searchElement.val().toLowerCase();
      console.log(searchValue);
      const odsCards = $('.ods-card');
      odsCards.each(function() {
        const cardText = $(this).attr("alt").toLowerCase();
        const parentElement = $(this).parent();
        if (cardText.includes(searchValue)) {
          parentElement.show();
        } else {
          parentElement.hide();
        }
      });
    })
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