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
    if (loginValid()) {
        const loginEmail = getLoginEmail();
        const loginPassword = getLoginPassword();

        console.log("Email:", loginEmail);
        console.log("Password:", loginPassword);

        window.location.href = "index.html";
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





























