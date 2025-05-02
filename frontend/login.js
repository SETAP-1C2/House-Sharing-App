loginUserAttacher();

function getLoginEmail() {
    const loginEmail = document.querySelector("#loginEmail").value;
    return loginEmail;
}

function getLoginPassword() {
    const loginPassword = document.querySelector("#loginPassword").value;
    return loginPassword;
}

function loginUser() {
    const loginEmail = getLoginEmail();
    const loginPassword = getLoginPassword();
    console.log(`${loginEmail}`);
    console.log(`${loginPassword}`);
}

function loginUserAttacher() {
    const button = document.querySelector("#signIn");
    button.addEventListener("click", loginUser);
}