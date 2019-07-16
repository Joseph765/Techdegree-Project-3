//focus on first input when page reloads
$('#name').focus();

//Job role 'other' input hiding
$('#other-title').hide();


// Job role 'other' showing when clicked, if not it is still hidden
$('#title').on('change', (e) => {
  let selectedOption = $('#title option:selected').text(); //source I learned from: https://www.youtube.com/watch?v=gib7_ig3aJU
  if (selectedOption === 'Other') {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});

//update T-shirt drop down when there are conflicting commands
$('#design').on('change', () => {
  let selectedOption = $('#design option:selected').text();
  if (selectedOption === 'Theme - JS Puns') {
    $('option[value="tomato"]').hide();
    $('option[value="steelblue"]').hide();
    $('option[value="dimgrey"]').hide();
    $('option[value="cornflowerblue"]').show();
    $('option[value="darkslategrey"]').show();
    $('option[value="gold"]').show();
    $('option[value="cornflowerblue"]').selected = true;
  } else if (selectedOption === 'Theme - I ♥ JS') {
    $('option[value="cornflowerblue"]').hide();
    $('option[value="darkslategrey"]').hide();
    $('option[value="gold"]').hide();
    $('option[value="tomato"]').show();
    $('option[value="steelblue"]').show();
    $('option[value="dimgrey"]').show();
    $('option[value="tomato"]').selected = true;
  }
});
