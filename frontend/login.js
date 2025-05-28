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



function loginUser(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success && data.user) {
            // Save user data in localStorage
            localStorage.setItem("userId", data.user.id);
            localStorage.setItem("userEmail", data.user.email);
            localStorage.setItem("userFirstName", data.user.first_name || "");
            localStorage.setItem("userLastName", data.user.last_name || "");

            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert(data.message || "Email or password is incorrect.");
        }
    })
    .catch(error => {
        console.error("Login error:", error);
        alert("Something went wrong. Please try again.");
    });
}

const loginButton = document.querySelector("#login-btn");
if (loginButton) {
    loginButton.addEventListener("click", loginUser);
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





























