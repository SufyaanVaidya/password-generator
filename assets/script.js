// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "&"]
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var confirmLength = "";
var confirmNumber;
var confirmSpecial;
var confirmLower;
var confirmUpper;

function generatePassword() {
  var confirmLength = (prompt("How long would you like this password?"));

  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("please make sure password length fits critirea of 8-128, try again.");
    var confirmLength = (prompt("How long would you like this password?(8-128)"));
  }
  
  alert("This password will have " + confirmLength + " characters.");

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
