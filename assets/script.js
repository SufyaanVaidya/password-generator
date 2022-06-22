// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "&"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var password;
var rdPassword;
var confirmLength = "";
var confirmNumbers;
var confirmSpecial;
var confirmLower;
var confirmUpper;

function generatePassword() {
  confirmLength = (prompt("How long would you like this password?(8-128 characters.)"));

  while (confirmLength <= 7 || confirmLength >= 128) {
    alert("please make sure password length fits critirea of 8-128, try again.");
    confirmLength = (prompt("How long would you like this password?(8-128)"));
  }
  
  alert("This password will have " + confirmLength + " characters.");

  confirmNumbers = confirm("Please click OK to confirm if you would like to use numbers");
  confirmSpecial = confirm("Please click OK to confirm if you would like to use special characters");
  confirmLower = confirm("Please click OK to confirm if you would like to use lowercase");
  confirmUpper = confirm("Please click OK to confirm if you would like to use uppercase");

  if (confirmNumber === false && confirmSpecial === false && confirmLower === false && confirmUpper === false) {
    alert("One option must be selected");
      confirmNumbers = confirm("Please click OK to confirm if you would like to use numbers");
      confirmSpecial = confirm("Please click OK to confirm if you would like to use special characters");
      confirmLower = confirm("Please click OK to confirm if you would like to use lowercase");
      confirmUpper = confirm("Please click OK to confirm if you would like to use uppercase");
  }

  if (confirmNumbers) {
    password = password.concat(numbers)
  } else if (confirmSpecial) {
    password = password.concat(special)
  } else if (confirmLower) {
    password = password.concat(lowerCase)
  } else if (confirmUpper) {
    password = password.concat(upperCase)
  }

  console.log(password)

  for (var i = 0; i < confirmLength; i++) {
    password = password +
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
