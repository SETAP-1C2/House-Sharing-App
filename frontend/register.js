attachRegisterFunction();

// Get input values
function getFirstName() {
  return document.querySelector("#first-name").value;
}
function getLastName() {
  return document.querySelector("#last-name").value;
}
function getEmail() {
  return document.querySelector("#email").value;
}
function getPassword() {
  return document.querySelector("#password").value;
}

// all fields to be required
function fieldsFilled() {
  if (!getFirstName() || !getLastName() || !getEmail() || !getPassword()) {
    alert("All fields are required.");
    return false;
  }
  return true;
}


//must be letters only
function isFirstNameValid(name) {
  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (
      !(char >= "A" && char <= "Z") &&
      !(char >= "a" && char <= "z")
    ) {
      alert("First Name: Only alphabet characters are allowed");
      return false;
    }
  }
  return true;
}



//must be letters only
function isLastNameValid(name) {
    for (let i = 0; i < name.length; i++) {
        const char = name[i];
        if (
            !(char >= "A" && char <= "Z") &&
            !(char >= "a" && char <= "z")
        ) {
            alert("Last Name: Only alphabet characters are allowed");
            return false;
        }
    }
    return true;
}




// email validation
function isEmailValid(email) {
    if (email.includes(" ")) {
        alert("Email must not contain spaces.");
        return false;
    }
    if (!email.includes("@")) {
        alert("Email must contain '@'");
        return false;
    }
    return true;
}


// checking for Password length
function checkPasswordLength(password) {
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    return true;
}

// Checking for mix of characters
function checkCharacterMix(password) {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/.test(password);

    if (hasUpper && hasLower && hasNumber && hasSpecial) {
      return true;
    }

    alert("Password must contain uppercase, lowercase, number, and special character.");
    return false;
}

// Handle register
function registerUser(event) {
    event.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let username = firstName + " " + lastName;

    if (email === "" || password === "" || firstName === "" || lastName === "") {
      alert("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      alert("Email must contain '@'");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
        first_name: firstName,
        last_name: lastName
      })
    })
    .then(function (response) {
      return response.text();
    })
    .then(function (message) {
      alert(message);
    })
    .catch(function (error) {
      console.log("Registration error:", error);
      alert("Something went wrong.");
    });
}

let registerButton = document.querySelector("#register-btn");
if (registerButton) {
  registerButton.addEventListener("click", registerUser);
}

// Event listener
function attachRegisterFunction() {
    const signUpButton = document.querySelector("#sign-up");
    if (signUpButton) {
        signUpButton.addEventListener("click", registerUser);
    }

  // Password toggle
  const toggleBtn = document.querySelector(".toggle-password");
  const passwordInput = document.querySelector("#password");

  if (toggleBtn && passwordInput) {
      toggleBtn.addEventListener("click", function () {
          const type = passwordInput.getAttribute("type");
          passwordInput.setAttribute("type", type === "password" ? "text" : "password");
      });
  }
}
