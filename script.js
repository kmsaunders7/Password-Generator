// create var array for special characters
 var specialCharacters = ["!", "@","#","$","%","^","&","*","(",")","_","+","=","-","?","~",".",",","<",">"]
// var for numeric characters
 var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// var array upper case characters
 var upperCaseCharacters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
// var array lower case characters
 var lowerCaseCharacters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
// function to prompt user of password options

function getPasswordOptions() {

// Var prompt to store length of password from user
  var length = parseInt(prompt('How many characters would you like your new password to contain?? Please pick between 8 and 128'));
//Check to see if password length is correct (between 8-128)

//If less than 8

  if (length < 8) {
  alert("Number selected must be 8 or more");
  return;
  }

//If more than 128

  if (length > 128) {
    alert("Number selected must be 128 or less");
    return;
  }

//Check to see if user input is a numerical value

//Confirm special characters
  var hasSpecialChar = confirm('Would you like to include $pec!@l ch@r@cters? Click OK');

//Confirm numeric characters
  var hasNunericChar = confirm('Would you like to include numb3rs? Click OK');


//Confirm lowercase characters
  var hasLowercaseChar = confirm('Would you like to include lowercase lettering? Click OK');

//Confirm uppercase characters
  var hasUppercaseChar = confirm('Would you like to inlcude UPPERCASE LETTERING? Click OK');

//Ends if user does not include any types of character & ALERTS

  if (
    hasSpecialChar === false &&
    hasNunericChar === false &&
    hasLowercaseChar === false &&
    hasUppercaseChar === false
  ) {
    alert("Must select at least one type of character");
    return;
  }

//Object with user input options

  var passwordOptions = {
  length: length,
  hasSpecialChar: hasSpecialChar,
  hasNunericChar: hasNunericChar,
  hasLowercaseChar: hasLowercaseChar,
  hasUppercaseChar: hasUppercaseChar
  };
  return passwordOptions;
}


//Function for getting random password from all the arrays
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomPassword = arr[randomIndex];

  return randomPassword;
}

//Function to generate password following all of user input

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];


  //Array to store password option characters
  var possibleCharacters = [];

  //Array to for guaranteed characters to be used

  var guaranteedCharacters = [];

  //Push different types of character options into the guaranteed array

  if (options.hasSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNunericChar) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowercaseChar) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }

  if (options.hasUppercaseChar) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  //Loop to match the possible characters with requested length

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters= getRandom(possibleCharacters);
    result.push(possibleCharacters);
  }


//Mixed with guaranteed characters
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }


 //Make the result return as a string
 
 return result.join('');

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
