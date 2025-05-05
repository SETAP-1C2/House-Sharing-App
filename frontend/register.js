registerUserAttacher();


function getFirstName() {
    const firstName = document.querySelector("#firstName").value;
    return firstName;
}

function getLastName() {
    const lastName = document.querySelector("#lastName").value;
    return lastName;
}

function getEmail() {
    const email = document.querySelector("#email").value;
    return email;
}

function getPassword() {
    const password = document.querySelector("#password").value;
    return password;
}

function checkPasswordLength(password) {
    if(password.length < 8){
        
        return false
    }
    else{
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
    if (password === 
        password.toUpperCase()||password === 
        password.toLowerCase()) {
        return false;
    } else {
        return true;
    }
}

function checkNumber(password) {
    if (/^\d+$/.test(password)) {
        return false;
    }
    return /\d/.test(password);
}

function checkSpecialChars(password) {
    const specialChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    if (specialChars.test(password))
        return true;
    else
        return false;
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

function registerUserAttacher() {
    const button = document.querySelector("#signUp");
    button.addEventListener("click",registerUser);
}

