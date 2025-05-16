registerUserAttacher();

//corrected
function getFirstName() {
    const firstName = document.querySelector("#first-name").value;
    return firstName;
}

//corrected
function getLastName() {
    const lastName = document.querySelector("#last-name").value;
    return lastName;
}


//correct
function getEmail() {
    const email = document.querySelector("#email").value;
    return email;
}

// function getEmail() {
//   const email = document.querySelector("#email").value.trim();
//   if (!email.includes("@") || !email.includes(".")) {
//     alert("Please enter a valid email.");
//     return null;
//   }
//   return email;
// }





//correct
function getPassword() {
    const password = document.querySelector("#password").value;
    return password;
}

//enhanced
// function getPassword() {
//     const password = document.querySelector("#password").value;
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return null;
//     }
//     return password;
// }






function checkPasswordLength(password) {
    if(password.length < 8) {
        return false
    }
    else {
        return true;
    }
}


function checkCharacterMix(password) {
    if (checkNumber(password)) {
        if (checkCase(password)) {
            if (checkSpecialChars(password)) {
                return true;
            }
        }
    }
    return false;
}

function checkCase(password) {
    /*
    Convert password to upper or lowercase then
    compare it with original to see if it
    was all upper or lowercase.
    Only returns true if both upper and lowercase
    are present.
     */
    if (password === password.toUpperCase()||password === password.toLowerCase()) {
        return false;
    } else {
        return true;
    }
}

function checkNumber(password) {
    return /\d/.test(password);
    // returns true if a number is in password
}

function checkSpecialChars(password) {
    const specialChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    if (specialChars.test(password))
        return true;
    else
        return false;
    //returns true if special characters present
}


function registerUser() {
    const firstName = getFirstName();
    const lastName = getLastName();
    const email = getEmail();
    const password = getPassword();
    if (checkPasswordLength(password)){
        if (checkCharacterMix(password)) {
            console.log(`${firstName}`);
            console.log(`${lastName}`);
            console.log(`${email}`);
            console.log(`${password}`);
        }
        else {
            console.log("Password must be a mix of Uppercase, Lowercase, Numbers and Special charaacters")
        }
    }
    else{
        console.log("Password must be at least 8 characters");
    }
    
}

function formSubmissionHandler() {
  registerUser();
  // block the form from submitting (instead of preventDefault)
  return false;
}


//had to do some changes because of the register changes
// function registerUserAttacher() {
//     const button = document.querySelector("#signUp");
//     button.addEventListener("click",registerUser);
// }



function attachRegisterFunction() {
  const signUpButton = document.querySelector("#sign-up");

  if (signUpButton !== null) {
    signUpButton.addEventListener("click", handleRegisterClick);
  }
}



function handleRegisterClick() {
  registerUser();
}




