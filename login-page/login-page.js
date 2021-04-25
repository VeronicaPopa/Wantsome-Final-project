const emailInput = document.getElementById("email");
const eyeImage = document.getElementById("eye-image");
const passwordContainer = document.getElementsByClassName("password-container")[0];
const signInBtn = document.getElementsByClassName("sign-in-btn")[0];

emailInput.addEventListener("click", function() {
  emailInput.classList.add("border-color");
})

emailInput.addEventListener("blur", function() {
  emailInput.classList.remove("border-color");
})

passwordContainer.addEventListener("click", function() {
  passwordContainer.classList.add("border-color");
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

function addValidationResult() {
  const validator = emailValidator();
  if (validator) {
    const validationMessage = document.getElementById('validation-message');
    validationMessage.classList.remove("visibility-of-message");
    const form = document.getElementsByTagName("form")[0];
    const passwordLabel = document.getElementsByTagName("label")[1];
    form.insertBefore(validationMessage,passwordLabel);
  }
}
emailInput.addEventListener("blur", addValidationResult);

const visibilityToggle = document.getElementsByClassName("visibility-toggle")[0];
  const passwordInput = document.getElementById("password");
 let password = true;
  visibilityToggle.addEventListener("click", function() {
    if (password) {
      passwordInput.setAttribute("type", "text");
      visibilityToggle.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      passwordInput.setAttribute("type", "password");
      visibilityToggle.classList.replace("fa-eye", "fa-eye-slash");
    }
    password = !password;
  })

signInBtn.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = './../products-page/index.html';
})
