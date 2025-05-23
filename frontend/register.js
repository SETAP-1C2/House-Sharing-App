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
function registerUser() {
    const email = getEmail();
    const password = getPassword();
    const firstName = getFirstName();
    const lastName = getLastName();

    if (!fieldsFilled()) return;
    if (!isEmailValid(email)) return;
    if (!checkPasswordLength(password)) return;
    if (!checkCharacterMix(password)) return;
    if (!isFirstNameValid(firstName)) {
        return; // Stop if first name is invalid
    }

    if (!isLastNameValid(lastName)) {
        return; // Stop if last name is invalid
    }

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

      // Save to localStorage (using email as key for uniqueness, or pushing to an array)
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    users.push(user);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    alert("Registration successful.");
    console.log("User registered:", firstName, lastName, email, password);

    window.location.href = "login.html";
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
