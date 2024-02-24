// Function to set a message in the form element
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    // Set the message text
    messageElement.textContent = message;
    // Remove any previous message classes and add the new one
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

// Function to set an input element as having an error
function setInputError(inputElement, message) {
    // Add the error class to the input element
    inputElement.classList.add("form__input--error");
    // Set the error message text
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

// Function to clear the error state of an input element
function clearInputError(inputElement) {
    // Remove the error class from the input element
    inputElement.classList.remove("form__input--error");
    // Clear the error message text
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  // Get the login and create account forms
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");
  const forgetPasswordLink = document.querySelector("#linkForgetPassword");
  // Get the forget password form
  const forgetPasswordForm = document.querySelector("#forgetPasswordForm");
  const forgetPasswordMessage = document.querySelector("#forgetPasswordMessage");

  // Add event listener for clicking on "create account" link
  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form--hidden"); // hide the login form
    createAccountForm.classList.remove("form--hidden"); // show the create account form
    forgetPasswordForm.classList.add("form--hidden"); // hide the forget password form (in case it was open)
  });

  // Add event listener for clicking on "login" link
  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden"); // show the login form
    createAccountForm.classList.add("form--hidden"); // hide the create account form
    forgetPasswordForm.classList.add("form--hidden"); // hide the forget password form (in case it was open)
  });

  // Add event listener for clicking on "forget password" link
  forgetPasswordLink.addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form--hidden"); // hide the login form
    createAccountForm.classList.add("form--hidden"); // hide the create account form
    forgetPasswordForm.classList.remove("form--hidden"); // show the forget password form
  });

  // Add event listener for clicking on "go back to account" link
  document.querySelector("#linkForgetPasswordLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden"); // show the login form
    createAccountForm.classList.add("form--hidden"); // hide the create account form
    forgetPasswordForm.classList.add("form--hidden"); // hide the forget password form
  });

  // When the forget password form is submitted
  forgetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Send the email and handle the response

    // If the email was successfully sent, show the message
    forgetPasswordForm.classList.add("form--message-shown");
    forgetPasswordMessage.classList.remove("form__message--hidden");
    forgetPasswordMessage.innerText = "An email has been sent to your inbox!";
  });


 // Add event listener for submitting the login form
    loginForm.addEventListener("submit", e => {
        e.preventDefault(); // prevent the form from submitting

        // Perform your AJAX/Fetch login here
        const username = document.querySelector("#loginUsername").value;
        const password = document.querySelector("#loginPassword").value;
        
        if (username === "placeholder" && password === "placeholder") {
            // Redirect the user to Google if the username and password are correct
            window.open("easypay/index1.html");
        }
        
        if (username === document.querySelector("#loginUsername").value && password === document.querySelector("#loginPassword").value) {
             // Redirect the user to Google if the username and password are correct
            window.location.replace("index.html");
            // Perform your AJAX/Fetch login here
        } else {
            // Set an error message in the login form
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }          
    });

    document.getElementById('autoLink').addEventListener('click', function() {
      document.getElementById('loginUsername').value = 'placeholder';
      document.getElementById('loginPassword').value = 'placeholder';
    });

    // Add event listeners for input elements
    document.querySelectorAll(".form__input").forEach(inputElement => {
        // Add event listener for when the input loses focus
        inputElement.addEventListener("blur", e => {
            // Check if the input is the "signupUsername" input and has a length less than 10 characters
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        // Add event listener for when the input is changed
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
