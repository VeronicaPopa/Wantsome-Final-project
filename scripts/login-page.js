const listOfEmails = [
  {
    email: "anapopescu@yahoo.com",
    password: "anapopescu123"
  },
  {
    email: "vladmoraru@yahoo.com",
    password: "vladmoraru123"
  },
  {
    email: "mirela_frunza@yahoo.com",
    password: "mirelafrunza123"
  },
  {
    email: "dan_botnaru@yahoo.com",
    password: "danbotnaru123"
  },
  {
    email: "razvan-nuca@yahoo.com",
    password: "razvannuca123"
  },
  {
    email: "stefan_bradu@yahoo.com",
    password: "stefanbradu123"
  }
]

const emailInput = document.getElementById("email");
const eyeImage = document.getElementById("eye-image");
const passwordContainer = document.getElementsByClassName("password-container")[0];
const signInBtn = document.getElementsByClassName("sign-in-btn")[0];
const passwordInput = document.getElementById("password");
let isValidEmail;
let isValidPass;
let isValidAccount

emailInput.addEventListener("click", function () {
  emailInput.classList.add("border-color");
})

emailInput.addEventListener("blur", function () {
  emailInput.classList.remove("border-color");
})

passwordContainer.addEventListener("click", function () {
  passwordContainer.classList.add("border-color");
})

// functie de validare a email-ului, cerinte: sa contina @ si .

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
  } else {
    validationMessage.classList.add("visibility-of-message");

  }
}

emailInput.addEventListener("keyup", addEmailValidResult);


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


// functie de validare a parolei.cerinte : sa aiba o lungime mai mare de 8 caractere si sa contina cel putin un numar 
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
  } else {
    errorVisibility.classList.add("error-visibility-hidden");
  }
}
passwordInput.addEventListener("keyup", addPasswordValidResult);



function accountValidation() {
  const email = emailInput.value;
  const passwordValue = passwordInput.value;
  for (let i = 0; i < listOfEmails.length; i++) {
    if ((email === listOfEmails[i].email) && (passwordValue === listOfEmails[i].password)) {
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
