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

//Check to see if password length is correct (between 8-128)
//If less than 8
//If more than 128

//Check to see if user input is a numerical value

//Confirm special characters

//Confirm numeric characters

//Confirm lowercase characters

//Confirm uppercase characters

//Ends if user does not include any types of character & ALERTS

//Object with user input options

//Function for getting random password from all the arrays
function getRandom(arr) {
  var randomIndex = Math.floor[Math.random() * arr.length];
  var randomPassword = arr[randomIndex];

  return randomPassword;
}





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
