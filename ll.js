function saveToStorage() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let fullName = document.getElementById("full-name");
    let country = document.getElementById("country");
    let birthdate = document.getElementById("birthdate");

    let obj = {
        email: email.value,
        password: password.value,
        fullName: fullName.value,
        country: country.value,
        birthdate: birthdate.value

    }
    localStorage.setItem("user", JSON.stringify(obj));
}

function init() {
    let email = document.getElementById("email");
    let fullName = document.getElementById("full-name");
    let country = document.getElementById("country");
    let birthdate = document.getElementById("birthdate");
    let userPage = document.getElementById("users-page");
    let welcomeMessage = document.getElementById("welcome-message");

    if (email.value !== null && fullName.value !== null && country.value !== null && birthdate.value !== null) {
        let objFromStorage = JSON.parse(localStorage.getItem("user"))
        if (objFromStorage !== null) {
            email.value = objFromStorage.email
            fullName.value = objFromStorage.fullName
            country.value = objFromStorage.country
            birthdate.value = objFromStorage.birthdate
            userPage.innerHTML = `${objFromStorage.fullName}`
            welcomeMessage.innerHTML = `Welcome ${objFromStorage.fullName}`
        }
    }
}

function checkPassword() {
    let signInEmail = document.getElementById("sign-in-email");
    let signInPass = document.getElementById("sign-in-pass");

    if (signInEmail.value !== null || signInPass.value !== null) {
        let objFromStorage = JSON.parse(localStorage.getItem("user"))
        if (objFromStorage.email === signInEmail.value && objFromStorage.password === signInPass.value) {
            window.location.href = "profile.html";
        } else {
            signInEmail.style.borderColor = "#FF0000";
            signInPass.style.borderColor = "#FF0000";
        }
    }
}