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
})

// function moveToOds receive onclick event, and need to get attr data-ods-id and go to that ods
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