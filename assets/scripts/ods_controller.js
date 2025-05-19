$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('ods')) {
    const odsId = urlParams.get('ods');
    const odsElement = $(`#ods-${odsId}`);
    if (odsElement.length) {
      $('html, body').animate({
        scrollTop: odsElement.offset().top
      }, 500, function() {
        odsElement.css('overflow', 'hidden');
      });
    }
  }

  const odsIcons = $('.ods-icon');
  odsIcons.on('click', function() {
    const elementAlt = $(this).attr('alt');
    const odsId = elementAlt.replace(/[^0-9]/g, '');
    window.location.href = `/ods/${odsId}`;
  });
})

function moveToOds(event) {
  const odsId = $(event).attr('data-ods-id');
  const odsElement = $(`#ods-${odsId}`);
  if (odsElement.length) {
    $('html, body').animate({
      scrollTop: odsElement.offset().top
    }, 500, function() {
      odsElement.css('overflow', 'hidden');
    });
  }
}