function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`)
    }

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const passwordRecoveryForm = document.querySelector("#passwordRecovery");

    document.querySelector("#linkPasswordRecovery").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
        passwordRecoveryForm.classList.remove("form--hidden");
    })

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
    

    
    const usernameInput = document.getElementById("signUpUsername");
    const passwordInput = document.getElementById("signUpPassword");
    const confirmPass = document.getElementById("confirmSignUpPass");

    usernameInput.addEventListener("blur", e => {
        if (e.target.value.length > 0 && e.target.value.length < 6) {
            setInputError(usernameInput, "Username must be 6 or more characters");
        };
    });

    passwordInput.addEventListener("blur", e => {
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setInputError(passwordInput, "Password must be at least 8 characters");
        };
    });
    
    confirmPass.addEventListener("blur", e => {
        if (e.target.value !== passwordInput.value) {
            setInputError(confirmPass, "Passwords do not match!")
        };
    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
        
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
 