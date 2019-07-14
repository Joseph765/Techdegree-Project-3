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
