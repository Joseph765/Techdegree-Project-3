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

//'Register for Activities' section. No conflicting schedules with jquery

if ($('input[name="js-frameworks"]').is(':checked')) {
  $('input[name="express"]').prop("disabled", true);
} else if ($('input[name="js-libs"]').is(':checked')) {
  $('input[name="node"]').prop("disabled", true);
}

//'Register for Activities' section. Adding up prices at botton of list
