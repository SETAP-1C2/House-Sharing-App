function pageLoaded() {
    console.log('js ready');
}

pageLoaded();
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

function registerUser() {
    const firstName = getFirstName();
    const lastName = getLastName();
    const email = getEmail();
    const password = getPassword();
    console.log(`${firstName}`);
    console.log(`${lastName}`);
    console.log(`${email}`);
    console.log(`${password}`);

}

function registerUserAttacher() {
    const button = document.querySelector("#signUp");
    button.addEventListener("click",registerUser);
}

