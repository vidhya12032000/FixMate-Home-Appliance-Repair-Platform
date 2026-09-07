const signupForm = document.getElementById("signupForm");

const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError =document.getElementById("confirmPasswordError");


signupForm.addEventListener("submit",  (event)=> {

    event.preventDefault();

    
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";

    let isValid = true;


    // Email validation
    if (email.value.trim() === "") {

        emailError.innerText = "Please enter your email";

        isValid = false;
    }


    // Password validation
    if (password.value.trim() === "") {

        passwordError.innerText = "Please enter your password";

        isValid = false;
    }
    else if (password.value.length < 6) {

        passwordError.innerText =
            "Password must contain at least 6 characters";

        isValid = false;
    }


    // Confirm password validation
    if (cpassword.value.trim() === "") {

        confirmPasswordError.innerText =
            "Please confirm your password";

        isValid = false;
    }
    else if (password.value !== cpassword.value) {

        confirmPasswordError.innerText =
            "Passwords do not match";

        isValid = false;
    }


    // Stop if validation fails
    if (!isValid) {
        return;
    }


    function showToast(message) {

    const toast = document.getElementById("toast");

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

    // Save user details
    localStorage.setItem("userEmail", email.value.trim());
    localStorage.setItem("userPassword", password.value);

showToast("Account created successfully!");

setTimeout(function () {
    window.location.href = "index.html";
}, 1500);

});