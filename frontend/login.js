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
  if (validateLoginFields()) {
    const loginEmail = getLoginEmail();
    const loginPassword = getLoginPassword();

    console.log("Email:", loginEmail);
    console.log("Password:", loginPassword);

    window.location.href = "index.html"; // or any other page
  }
}





function loginUserAttacher() {
  const button = document.querySelector("#login-btn"); 
  if (button) {
    button.addEventListener("click", loginUser);
  }
}

loginUserAttacher();





























