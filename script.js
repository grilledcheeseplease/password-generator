// Going to bring up the query selector
var generateBtn = document.querySelector("#generate");

// Function to generate the password
function generatePassword () {
    // character variables
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*_+=";

    //checking that they run
    console.log(alphaLower);
    console.log(alphaUpper);
    console.log(numbers);
    console.log(symbols);
    
    // declare variable to hold password string
    var password = "";

    console.log(password);
    // declare variable to hold password length and prompt for how long they want it to be
    var passwordLength = window.prompt("Choose password length between 8 and 128 characters.");

    // make sure the value entered is a number if not they will be prompted again
    while (isNaN(passwordLength)) {
        passwordLength = window.prompt("Must be a number.");
    }

    // ensure that password is between 8 and 128 characters if not it will prompt them again
    while (passwordLength < 8 && passwordLength < 128) {
        passwordLength = window.prompt("Must be at least 8 characters and less than 128 characters.");

    }

    // variables to store the user selections for password value
    var yesLowercase = window.confirm("Do you want lowercase letters?");
    var yesUppercase = window.confirm("Do you want uppercase letters?");
    var yesNumbers = window.confirm("Do you want numbers?");
    var yesSymbols = window.confirm("Do you want symbols?");

    // create a loop to prompt user for preferences and alert them if they did not choose any
    while (!yesLowercase && !yesUppercase && !yesNumbers && !yesSymbols){
        window.alert("Must include at least 1 special character.");
        yesLowercase = window.confirm("Do you want lowercase letters?");
        yesUppercase = window.confirm("Do you want uppercase letters?");
        yesNumbers = window.confirm("Do you want numbers?");
        yesSymbols = window.confirm("Do you want symbols?");
    }

    // Create a variable to help create the password to the users preferences
    var possibleChar = ""

    // If statements to store if the user selected yes or no
    if (yesLowercase) {
        possibleChar += alphaLower 
    }

    if (yesUppercase) {
        possibleChar += alphaUpper
    }

    if (yesNumbers) {
        possibleChar += numbers
    }

    if (yesSymbols) {
        possibleChar += symbols
    }

    //Where the random character selection magic is happening 
    for (var i = 0; i < passwordLength; i++) {
        password += possibleChar[Math.floor(Math.random()* possibleChar.length)]
    }
    console.log(password);
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

