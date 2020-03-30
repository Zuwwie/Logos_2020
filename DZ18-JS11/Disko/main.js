
  setInterval(function () {
    function disko() {
      $('.circle').animate({
        marginLeft: `${Math.round(Math.random() * 1800)}px`,
        marginTop: `${Math.round(Math.random() * 800)}px`
      }, {
        duration: 200
      });
      $('.circle').css('background-color', `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`);
      $('.circle').css('box-shadow', `0 0 20px 8px rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`);
      $('.circle').css('border', `2px solid rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`);
      $(`body`).css('background-color', `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`);
    }
    disko();
  }, 200);
