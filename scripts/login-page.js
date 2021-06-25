const emailInput = document.getElementById("email");
const eyeImage = document.getElementById("eye-image");
const signInBtn = document.getElementsByClassName("sign-in-btn")[0];
const passwordInput = document.getElementById("password");

function accountValidation() {
  const email = emailInput.value;
  const passwordValue = passwordInput.value;
  const listOfUsers = JSON.parse(localStorage.getItem('listOfUsers'));

  for (let i = 0; i < listOfUsers.length; i++) {
    if ((email === listOfUsers[i].email) && (passwordValue === listOfUsers[i].password)) {
      return true;
    }
  }
  return false
}

function addAccountValidResult() {
  const accountError = document.getElementById("error-message-account");
  isValidAccount = accountValidation();
  updateSubmitStatus();
  if (!isValidAccount) {
    accountError.classList.remove("error-visibility-hidden");
  } else {
    accountError.classList.add("error-visibility-hidden");
  }
}
passwordInput.addEventListener("keyup", addAccountValidResult);

function updateSubmitStatus() {
  if ((isValidEmail) && (isValidPass) && (isValidAccount)) {
    signInBtn.removeAttribute("disabled");
  } else {
    signInBtn.setAttribute("disabled", true);
  }
}

signInBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = '../pages/home-page.html';
})
