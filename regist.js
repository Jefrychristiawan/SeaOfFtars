const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    navbarNav.classList.toggle('active');
})
feather.replace();
const form = document.querySelector("form"),
    emailField = form.querySelector(".emailField"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".passField"),
    passInput = passField.querySelector(".password"),
    userField = document.querySelector(".userField"),
    userInput = document.querySelector(".username"),
    errorField = document.querySelector(".notChecked"),
    countryField = document.querySelector(".countryField"),
    countryChoose = document.querySelector("#country");

function checkUser() {
    if (userInput.value.length == 0 || userInput.value.length < 5) {
        return userField.classList.add("invalid");
    }
    userField.classList.remove("invalid");
}

function checkCountry(){
    if(!countryChoose.value){
        return countryField.classList.add("invalid");
    }
    countryField.classList.remove("invalid");
}

function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}


const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        // eyeIcon.classList.replace("bx-hide","bx-show");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text");
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    })
})

function checkPass() {
    const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}

function checkAgree() {
    if (!document.querySelector(".checkAgree").checked) {
        return errorField.classList.add("notValid");
    }
    errorField.classList.remove("notValid");
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkUser();
    checkCountry();
    checkEmail();
    checkPass();
    checkAgree();
    userInput.addEventListener("keyup", checkUser);
    countryChoose.addEventListener("change", checkCountry);
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", checkPass);
    document.querySelector(".checkAgree").addEventListener("click", checkAgree);
    if (
        !userField.classList.contains("invalid") &&
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !errorField.classList.contains("notValid")&&
        !countryField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
})
