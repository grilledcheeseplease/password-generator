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

// declare arrays to hold each character type
var alphaLower = ("abcdefghijklmnopqrstuvwxyz");
var alphaUpper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = ("0123456789");
var symbols = ("!@#$%^&*-_=+");

console.log(alphaLower);
console.log(alphaUpper);
console.log(numbers);
console.log(symbols);


// declare variable to hold password string


// declare variable to hold password length

// ask user if they want lowercase characters
// ask user if they want uppercase characters
// "" numbers
// "" special characters
// ask user how long they want the password to be


