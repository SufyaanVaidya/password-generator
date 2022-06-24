// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "&"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmNumbers;
var confirmSpecial;
var confirmLower;
var confirmUpper;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;
}


// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 

function generatePassword() {
  var confirmLength = (prompt("How long would you like this password?(8-128 characters.)"));

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("please make sure password length fits critirea of 8-128, try again.");
    var confirmLength = (prompt("What length would you like this password?(8-128)"));
  }
  alert("Your password will have " + confirmLength + " characters.");
  
  
  confirmNumbers = confirm("Please click OK to confirm if you would like to use numbers");
  confirmSpecial = confirm("Please click OK to confirm if you would like to use special characters");
  confirmLower = confirm("Please click OK to confirm if you would like to use lowercase");
  confirmUpper = confirm("Please click OK to confirm if you would like to use uppercase");
  

  while (confirmNumbers === false && confirmSpecial === false && confirmLower === false && confirmUpper === false) {
    alert("One option must be selected, to generate your password.");
      confirmNumbers = confirm("Please click OK to confirm if you would like to use numbers");
      confirmSpecial = confirm("Please click OK to confirm if you would like to use special characters");
      confirmLower = confirm("Please click OK to confirm if you would like to use lowercase");
      confirmUpper = confirm("Please click OK to confirm if you would like to use uppercase");
  }

  var charpassword = []

  if (confirmNumbers) {
    charpassword = charpassword.concat(numbers)
  }
  if (confirmSpecial) {
    charpassword = charpassword.concat(special)
  }
  if (confirmLower) {
    charpassword = charpassword.concat(lowerCase)
  }
  if (confirmUpper) {
    charpassword = charpassword.concat(upperCase)
  }


  var newPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    newPassword = newPassword + charpassword[Math.floor(Math.random() * charpassword.length)];

  }
  return newPassword;
}