// feather.replace();
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
    passInput = passField.querySelector(".password");

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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    checkPass();

    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", checkPass);

    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
})
