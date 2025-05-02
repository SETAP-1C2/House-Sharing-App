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

function checkPassword(password) {
    if(password.length < 8){
        
        return false
    }
    else{
        return true;
    }
}

function registerUser() {
    const firstName = getFirstName();
    const lastName = getLastName();
    const email = getEmail();
    const password = getPassword();
    if (checkPassword(password)){
        console.log(`${firstName}`);
        console.log(`${lastName}`);
        console.log(`${email}`);
        console.log(`${password}`);

    }
    else{
        console.log("Password must be at least 8 characters");
    }
    
}

function registerUserAttacher() {
    const button = document.querySelector("#signUp");
    button.addEventListener("click",registerUser);
}

