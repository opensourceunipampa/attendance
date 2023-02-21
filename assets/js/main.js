'use strict';
var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmkATD5MLZuWNJuuslcLdc_e_5z7qoF9MM7lvV0AiDDI8geyuPIOWj-Byy0XEqcBvuLg/exec';

$(document).ready(function() {
  $('#button').click(function() {
    $.getJSON(SCRIPT_URL + '?callback=?', {
        method: 'checkToken',
        token: $('input[name=token]').val()
      },
      function(data) {
        if (data.valid === true) {
          $('#response').html(`
            <div id="event-name">${data.event.name}</div>
            <div id="event-summary">Clique no link para registrar presença! ☺️</div>
            <div id="event-url">
              <a href="${data.event.url}">${data.event.url}</a>
            </div>
          `);
        } else {
          $('#response').html(`
            <div id="error">Código inválido! 🤔</div>
          `);
        }});
    $('#request').hide();
    $('#response').show();
  });
});
