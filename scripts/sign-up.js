
const emailInput = document.getElementById("email");
const eyeImage = document.getElementById("eye-image");
const passwordContainer = document.getElementsByClassName("password-container")[0];
const signUpBtn = document.getElementsByClassName("sign-up-btn")[0];
const passwordInput = document.getElementById("password");
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
    emailInput.style.border = "2px solid #4cad63"


  } else {
    validationMessage.classList.add("visibility-of-message");
    emailInput.style.border = "2px solid red"


  }
}

emailInput.addEventListener("keyup", addEmailValidResult);

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
    passwordContainer.style.border = "2px solid red"


  } else {
    errorVisibility.classList.add("error-visibility-hidden");
    passwordContainer.style.border = "2px solid #4cad63"
  }
}
passwordInput.addEventListener("keyup", addPasswordValidResult);

// Functions for select City and Country
const selectCity = document.getElementById("city");
const cities = [' ', 'Bucuresti', 'Iasi', 'Chisinau', 'Balti', 'Vienna', 'Zagreb', 'Paris', 'Berlin', 'London', 'Rome'];

(function createSelectCityOptions() {
  for (let city of cities) {
    const cityOption = document.createElement('option');
    cityOption.setAttribute('value', city);
    selectCity.appendChild(cityOption);
    cityOption.text = city;
  }  
})();

function onSelectChange() {
  const selectedCity = selectCity.value
  const countryInput = document.getElementById('country');

  switch (selectedCity) {
    case 'Bucuresti':
    case 'Iasi':
      countryInput.value = 'Romania';
      break;

    case 'Chisinau':
    case 'Balti':
      countryInput.value = 'R.Moldova';
      break;

    case 'Vienna':
      countryInput.value = 'Austria';
      break;

    case 'Zagreb':
      countryInput.value = 'Croatia';
      break;

    case 'Paris':
      countryInput.value = 'France';
      break;

    case 'Berlin':
      countryInput.value = 'Germany';
      break;

    case 'London':
      countryInput.value = 'UK';
      break;

    case 'Rome':
      countryInput.value = 'Italy';
      break;
  }
};

selectCity.addEventListener("change", function (event) {
  onSelectChange();
});

function updateSubmitStatus() {
  if ((isValidEmail) && (isValidPass)) {
    signUpBtn.removeAttribute("disabled");
  } else {
    signUpBtn.setAttribute("disabled", true);
  }
}

signUpBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  const firstNameValue = document.getElementById("first-name").value;
  const lastNameValue = document.getElementById("last-name").value;

  const newUser = {
    email: emailValue,
    password: passwordValue,
    firstName: firstNameValue,
    lastName: lastNameValue
  };
  let listOfUsers = JSON.parse(localStorage.getItem('listOfUsers'));

  if (!listOfUsers) {
    listOfUsers = [];
  }

  listOfUsers.push(newUser);
  localStorage.setItem('listOfUsers', JSON.stringify(listOfUsers));

  window.location.href = '../pages/login-page.html';
})


