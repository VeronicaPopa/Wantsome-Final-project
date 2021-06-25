const passwordContainer = document.getElementsByClassName("password-container")[0];
let isValidEmail;
let isValidPass;
let isValidAccount


const visibilityToggle = document.getElementsByClassName("visibility-toggle")[0];
let password = true;

visibilityToggle.addEventListener("click", function () {
  if (password) {
    passwordInput.setAttribute("type", "text");
    visibilityToggle.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordInput.setAttribute("type", "password");
    visibilityToggle.classList.replace("fa-eye", "fa-eye-slash");
  }
  password = !password;
})

function emailValidator() {
  const email = emailInput.value;
  let splitByAt = email.split("@");

  if (splitByAt.length <= 1) {
    return false;
  }
  if ((splitByAt[0].length > 0) && (splitByAt[1].includes("."))) {
    let splitByPoint = splitByAt[1].split(".");
    if ((splitByPoint[0].length > 0) && (splitByPoint[1].length > 0)) {
      return true;
    }
  }
  return false;
}

function addEmailValidResult() {
  isValidEmail = emailValidator();
  updateSubmitStatus();


  const validationMessage = document.getElementById('validation-message');

  if (isValidEmail) {
    validationMessage.classList.remove("visibility-of-message");
    emailInput.style.border = "2px solid #4cad63"

  } else {
    validationMessage.classList.add("visibility-of-message");
    emailInput.style.border = "2px solid red"


  }
}

emailInput.addEventListener("keyup", addEmailValidResult);

function stringValidator() {
  const passwordValue = passwordInput.value;

  if (passwordValue.length < 8) {
    return false;
  }
  let numbers = "1234567890";

  for (let i = 0; i < passwordValue.length; i++) {
    if (numbers.includes(passwordValue[i])) {
      return true;
    }
  }
  return false;
}

function addPasswordValidResult() {
  const errorVisibility = document.getElementById("error-message-password");
  isValidPass = stringValidator();
  updateSubmitStatus();

  if (!isValidPass) {
    errorVisibility.classList.remove("error-visibility-hidden");
    passwordContainer.style.border = "2px solid red"


  } else {
    errorVisibility.classList.add("error-visibility-hidden");
    passwordContainer.style.border = "2px solid #4cad63"
  }
}
passwordInput.addEventListener("keyup", addPasswordValidResult);