$(document).ready(function() {
  'use strict';

  var buttonPressed = 0;
  var input1 = '';
  var input2 = '';
  var operator = null;
  var result;

  $('.number').on('click', function(event) {
    buttonPressed = event.target.value;

    if (operator === null) {
      input1 = (input1 + buttonPressed);
      $('.screen').html(input1);
    } else {
      $('.screen').html(input1);
      input2 = (input2 + buttonPressed);
      $('.screen').html(input2);
    }

    if (buttonPressed === "C") {
      input1 = '';
      input2 = '';
      buttonPressed = '';
      $('.screen').html('');
    }
    console.log('input1', input1);
    console.log('input2', input2);
  });

  $('.equal').on('click', function(event) {
    buttonPressed = event.target.value;

    if (buttonPressed === "=") {
      console.log('input1', input1);
      console.log('input2', input2);

      if (operator === '+') {
        result = Number(input1) + Number(input2);
        buttonPressed = '';
        input1 = result;
        input2 = '';
        operator = null;
        $('.screen').html(result);
        console.log('result', result);
      }

      if (operator === '-') {
        result = Number(input1) - Number(input2);
        buttonPressed = '';
        input1 = result;
        input2 = '';
        operator = null;
        $('.screen').html(result);
        console.log('result', result);
      }

      if (operator === '*') {
        result = Number(input1) * Number(input2);
        buttonPressed = '';
        input1 = result;
        input2 = '';
        operator = null;
        $('.screen').html(result);
        console.log('result', result);
      }

      if (operator === '/') {
        result = Number(input1) / Number(input2);
        buttonPressed = '';
        input1 = result;
        input2 = '';
        operator = null;
        $('.screen').html(result);
        console.log('result', result);
      }
    }
  });

  $('.operator').on('click', function(event) {
    buttonPressed = event.target.value;
    operator = event.target.value;
    buttonPressed = '';
    $('.screen').html(input1);
    console.log('operator', operator);

  });
});
