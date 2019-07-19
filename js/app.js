//focus on first input when page reloads
$('#name').focus();


//when the page loads, the 'creditcard' option is already selected
$('#payment').val('credit card');
$('#payPal').hide();
$('#bitcoin').hide();


//Job role 'other' option selected
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


//creating a counter for total price checked in checkboxes
let totalPrice = 0;
$('fieldset.activities').append('<p>Total Price: $' + totalPrice + '</p>');


//function for hidding and disabling checkboxes
function toggleCheckbox (checkbox, boolean, opacity) {
  $(checkbox).prop("disabled", boolean);
  $(checkbox).parent().css('opacity', opacity);
}


//function for updating prices
function updatePrice(operator, amount) {
  if (operator == '+') {
    totalPrice += amount;
    $('fieldset.activities p').text('Total Price: $' + totalPrice);
  } else if (operator == '-') {
    totalPrice -= amount;
    $('fieldset.activities p').text('Total Price: $' + totalPrice);
  }
}


//function for checking if there are any checkboxes check in the 'activities' section
function checkboxChecked() {
  const checkboxes = $('fieldset.activities input');
  for (i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked === true) {
      $('p.alert').remove(); //if any checkbox is checked, the alert paragraph: "At least one checkbox needs to be checked." will be removed
      return true;
    }
  }
  return false;
}


//function creating checkbox error
function checkboxError() {
  $('fieldset.activities').prepend('<p class="checkbox-alert">At least one checkbox needs to be checked.</p>')
  $('p.checkbox-alert').css('color', 'red');
}


//function for validating email
function isValidEmail(email) {
  if (/^[^@.]+@[^@.]+\.[a-z]+$/i.test(email)) {
    return true;
  } else {
    return false;
  }
}


//function for validating credit card number
function isValidCcNumber(number){
  if (/\d{13}/.test(number) || /\d{14}/.test(number) || /\d{15}/.test(number) || /\d{16}/.test(number)) {
    return true;
  } else if (number.length > 16) {
    return false;
  } else {
    return false;
  }
}


//function for validating zip code number
function isValidZipNumber(number){
  if (/\d{5}/.test(number)) {
    return true;
  } else {
    return false;
  }
}


//function for validating CVV number
function isValidCvv(number) {
  if (/\d{3}/.test(number)) {
    return true;
  } else {
    return false;
  }
}


//function for 'Theme - JS Puns' selected in design dropdown
function jsPunsConfig(){
  $('option[value="tomato"]').hide();
  $('option[value="steelblue"]').hide();
  $('option[value="dimgrey"]').hide();
  $('option[value="cornflowerblue"]').show();
  $('option[value="darkslategrey"]').show();
  $('option[value="gold"]').show();
  $("#color").val('cornflowerblue');
  $('#colors-js-puns').show(); //unhidding color dropdown
}


//function for 'Theme - I ♥ JS' selected in design dropdown
function iLoveJs() {
  $('option[value="cornflowerblue"]').hide();
  $('option[value="darkslategrey"]').hide();
  $('option[value="gold"]').hide();
  $('option[value="tomato"]').show();
  $('option[value="steelblue"]').show();
  $('option[value="dimgrey"]').show();
  $("#color").val('tomato');
  $('#colors-js-puns').show(); //unhidding color dropdown
}


//if a checkbox is checked, the alert paragraph: "At least one checkbox needs to be checked." will be removed
$('fieldset.activities input').on('click', (e) => {
  const checkboxes = $('fieldset.activities input');
  for (i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked === true) {
      $('p.alert').remove(); //if any checkbox is checked, the alert paragraph: "At least one checkbox needs to be checked." will be removed
      return true;
    }
  }
});


//update T-shirt drop down when there are conflicting commands
$('#colors-js-puns').hide(); //hiding T-shirt color before design is selected
$('#design').on('change', () => {
  let selectedOption = $('#design option:selected').text();
  if (selectedOption === 'Theme - JS Puns') {
    jsPunsConfig();
  } else if (selectedOption === 'Theme - I ♥ JS') {
    iLoveJs();
  } else {
    $('#colors-js-puns').hide(); //hidding dropdown
  }
});


/////////////////////////////////////////////////////////////////////////
//'Register for Activities' section. No conflicting schedules with jquery
////////////////////////////////////////////////////////////////////////


//main conference checkbox price updatings
$('input[name="all"]').on('click', () => {
  if ($('input[name="all"]').is(':checked')) {
    updatePrice('+', 200);
  } else {
    updatePrice('-', 200);
  }
});


//Javascript framworks checkbox price updates, and disabling express checkbox
$('input[name="js-frameworks"]').on('click', () => {
  if ($('input[name="js-frameworks"]').is(':checked')) {
    toggleCheckbox('input[name="express"]', true, 0.5);
    updatePrice('+', 100);
  } else {
    toggleCheckbox('input[name="express"]', false, 1.0);
    updatePrice('-', 100);
  }
});


//JavaScript libraries checkbox price updates, and disabling Node checkbox
$('input[name="js-libs"]').on('click', () => {
  if ($('input[name="js-libs"]').is(':checked')) {
    toggleCheckbox('input[name="node"]', true, 0.5);
    updatePrice('+', 100);
  } else {
    toggleCheckbox('input[name="node"]', false, 1.0);
    updatePrice('-', 100);
  }
});


//Express checkbox price updates and disabling JavaScript Frameworks checkbox
$('input[name="express').on('click', () => {
  if ($('input[name="express"]').is(':checked')) {
    toggleCheckbox('input[name="js-frameworks"]', true, 0.5);
    updatePrice('+', 100);
  } else {
    toggleCheckbox('input[name="js-frameworks"]', false, 1.0);
    updatePrice('-', 100);
  }
});


//Node checkbox price updates, and disabling JavaScript Libraries checkbox
$('input[name="node"]').on('click', () => {
  if ($('input[name="node"]').is(':checked')) {
    toggleCheckbox('input[name="js-libs"]', true, 0.5);
    updatePrice('+', 100);
  } else {
    toggleCheckbox('input[name="js-libs"]', false, 1.0);
    updatePrice('-', 100);
  }
});


//Build tools checkbox price updates
$('input[name="build-tools"]').on('click', () => {
  if ($('input[name="build-tools"]').is(':checked')) {
    updatePrice('+', 100);
  } else {
    updatePrice('-', 100);
  }
});


//npm checkbox price updates
$('input[name="npm"]').on('click', () => {
  if ($('input[name="npm"]').is(':checked')) {
    updatePrice('+', 100);
  } else {
    updatePrice('-', 100);
  }
});


//Updating based on form of payment selected
$('#payment').on('change', () => {
  let selectedOption = $('#payment option:selected').text();
  if (selectedOption == 'Select Payment Method') {
    $('#credit-card').show();
    $('#payPal').hide();
    $('#bitcoin').hide();
  } else if (selectedOption == 'Credit Card') {
    $('#credit-card').show();
    $('#payPal').hide();
    $('#bitcoin').hide();
  } else if (selectedOption == 'PayPal') {
    $('#credit-card').hide();
    $('#payPal').show();
    $('#bitcoin').hide();
  } else if (selectedOption == 'Bitcoin') {
    $('#credit-card').hide();
    $('#payPal').hide();
    $('#bitcoin').show();
  }
});


//automatically update valid email adress indicator
$('input#mail').on('keyup', () => {
  if (isValidEmail($('input#mail').val()) === false || $('input#mail').val() == '') {
    $('input#mail').css('border-color', 'red');
  } else if (isValidEmail($('input#mail').val()) === true) {
    $('input#mail').css('border-color', '');
  }
});


//creates error message and automatically updates when one checkbox checked or unchecked
checkboxError();
$('input[type="checkbox"]').on('change', () => {
  if (checkboxChecked() === false) {
    checkboxError();
  } else {
    $('p.checkbox-alert').remove();
  }
});


/////////////////////////////////////////////////////////////////////////
////////////////////////Form Validation/////////////////////////////////
///////////////////////////////////////////////////////////////////////


//starts validation by listening for submit button clicked
$('button[type="submit"]').on('click', (e) => {
  let selectedOption = $('#payment option:selected').text();


  //Adds error indication for invalid name and prevents form from being submitted
  if ($('input#name').val() == '') {
    $('#name').css('border-color', 'red');
    e.preventDefault();
  } else {
    $('#name').css('border-color', '');
  }


  //if email is not valid email adress (formated like one), then form is not submitted and error indication
  if (isValidEmail($('input#mail').val()) === false || $('input#mail').val() == '') {
    $('input#mail').css('border-color', 'red');
    e.preventDefault();
  }


  //Prevents form from being submitting if no checkboxes are checked
  if (checkboxChecked() === false) {
    e.preventDefault();
  }


  //form validation for creditcard info, only if credit card is selected in dropdown
  if (selectedOption == 'Credit Card') {


    //removes alert for empty credit card form before adding a new one
    if ($('p.blankCCAlert')) {
      $('p.blankCCAlert').remove();
    }


    //Validation for any blank credit card forms and prevents form from being submitted
    if ($('#cc-num').val() == '' || $('#zip').val() == '' || $('cvv').val()) {
      e.preventDefault();
      $('#credit-card').prepend('<p class="blankCCAlert">One or more Credit Card forms are empty</p>');
      $('p.blankCCAlert').css('color', 'red');
    }

    //If the Credit Card forms aren't blank, these next lines will validate if other information is correct
    else {


      //Removes Credit Card Number validation alert before the code creates a new one
      if ($('p.ccDigits')) {
        $('p.ccDigits').remove();
      }


      //adds error message for credit card number form validation and prevents form from being submitted
      if (isValidCcNumber($('input#cc-num').val()) === false) {
        e.preventDefault();
        $('#credit-card').prepend('<p class="ccDigits">Please enter a credit card number that is between 13 and 16 digits long');
        $('p.ccDigits').css('color', 'red');
      }


      //Removes zip code error message before the code creates a new one
      if($('p.zipError')) {
        $('p.zipError').remove();
      }


      //adds error message for zip code form validation and prevents form from being submitted
      if(isValidZipNumber($('#zip').val()) === false) {
        e.preventDefault();
        $('#credit-card').prepend('<p class="zipError">A zip code MUST be 5 digits long.</p>');
        $('p.zipError').css('color', 'red');
      }


      //Removes CVV error message before the code creates a new one
      if($('p.cvvError')) {
        $('p.cvvError').remove();
      }


      //adds error message for invalid CVV number and prevents form from being submitted
      if(isValidCvv($('#cvv').val()) === false ) {
        e.preventDefault();
        $('#credit-card').prepend('<p class="cvvError">A CVV must be three digits long</p>');
        $('p.cvvError').css('color', 'red');
      }

    }
  }
});

checkboxChecked();
