// some validations are enabled from the html

function getLoginEmail() {
    const loginEmail = document.querySelector("#email").value;
    return loginEmail;
}


function getLoginPassword() {
    const loginPassword = document.querySelector("#password").value;
    return loginPassword;
}


function loginValid(){
    const email = getLoginEmail();
    const password = getLoginPassword();


    if (email === "") {
        alert("Email is required.");
    return false;
    }

    if (password === "") {
        alert("Password is required.");
    return false;
    }

    return true;
}



function loginUser() {
    if (!loginValid()) return;

    const loginEmail = getLoginEmail();
    const loginPassword = getLoginPassword();

    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    let matchFound = false;

    for (let i = 0; i < registeredUsers.length; i++) {
        const user = registeredUsers[i];
        if (user.email === loginEmail && user.password === loginPassword) {
            matchFound = true;
            break;
        }
    }

    if (matchFound) {
        window.location.href = "index.html"; // ✅ success: go to homepage
    } else {
        alert("Email or password is incorrect."); // ❌ show error
    }
}


function loginUserAttacher() {
    const button = document.querySelector("#login-btn"); 
    if (button) {
        button.addEventListener("click", loginUser);
    }
}

loginUserAttacher();


// Attach the toggle logic
function setupLoginEyeToggle() {
    const toggleBtn = document.querySelector("#toggle-login-password");
    const passwordField = document.querySelector("#password");

    if (toggleBtn && passwordField) {
        attachToggleListener(toggleBtn, passwordField);
    }
}

// Listener function separated from setup
function attachToggleListener(button, input) {
    button.addEventListener("click", function () {
        togglePasswordVisibility(input);
    });
}

// Logic to toggle input type
function togglePasswordVisibility(input) {
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Run it
setupLoginEyeToggle();





























