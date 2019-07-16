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

//function for hidding and disabling checkboxes

function toggleCheckbox (checkbox, boolean, opacity) {
  $(checkbox).prop("disabled", boolean);
  $(checkbox).parent().css('opacity', opacity);
}

//update T-shirt drop down when there are conflicting commands
$('#colors-js-puns').hide(); //hiding T-shirt color before design is selected
$('#design').on('change', () => {
  let selectedOption = $('#design option:selected').text();
  if (selectedOption === 'Theme - JS Puns') {
    $('option[value="tomato"]').hide();
    $('option[value="steelblue"]').hide();
    $('option[value="dimgrey"]').hide();
    $('option[value="cornflowerblue"]').show();
    $('option[value="darkslategrey"]').show();
    $('option[value="gold"]').show();
    $("#color").val('cornflowerblue');
    $('#colors-js-puns').show(); //unhidding color dropdown
  } else if (selectedOption === 'Theme - I ♥ JS') {
    let tomato = $('option[value="tomato"]');
    $('option[value="cornflowerblue"]').hide();
    $('option[value="darkslategrey"]').hide();
    $('option[value="gold"]').hide();
    $('option[value="tomato"]').show();
    $('option[value="steelblue"]').show();
    $('option[value="dimgrey"]').show();
    $("#color").val('tomato');
    $('#colors-js-puns').show(); //unhidding color dropdown
  } else {
    $('#colors-js-puns').hide(); //hidding dropdown
  }
});

//'Register for Activities' section. No conflicting schedules with jquery
$('input[name="js-frameworks"]').on('click', () => {
  if ($('input[name="js-frameworks"]').is(':checked')) {
    toggleCheckbox('input[name="express"]', true, 0.5);
  } else {
    toggleCheckbox('input[name="express"]', false, 1.0);
  }
});

$('input[name="express').on('click', () => {
  if ($('input[name="express"]').is(':checked')) {
    toggleCheckbox('input[name="js-frameworks"]', true, 0.5);
  } else {
    toggleCheckbox('input[name="js-frameworks"]', false, 1.0);
  }
});

$('input[name="js-libs"]').on('click', () => {
  if ($('input[name="js-libs"]').is(':checked')) {
    toggleCheckbox('input[name="node"]', true, 0.5);
  } else {
    toggleCheckbox('input[name="node"]', false, 1.0);
  }
});

$('input[name="node"]').on('click', () => {
  if ($('input[name="node"]').is(':checked')) {
    toggleCheckbox('input[name="js-libs"]', true, 0.5);
  } else {
    toggleCheckbox('input[name="js-libs"]', false, 1.0);
  }
});
//'Register for Activities' section. Adding up prices at botton of list
