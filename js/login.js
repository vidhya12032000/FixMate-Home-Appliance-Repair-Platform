const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");


loginForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

 
    // Clear previous errors

    emailError.innerText = "";
    passwordError.innerText = "";


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


    // Stop if fields are empty

    if (!isValid) {
        return;
    }


    // Demo login credentials

    if (email.value === "user@gmail.com"&&password.value === "123456")
         {

        // Save login status
        localStorage.setItem("isLoggedIn", "true");

        // Go to dashboard
        window.location.href = "customer.html";

    } 
    else if(email.value === "admin@gmail.com"&& password.value === "123"){
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "admin.html";
    }
    else {

        passwordError.innerText =
            "Invalid email or password";

    }

});