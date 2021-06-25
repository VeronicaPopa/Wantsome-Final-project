const emailInput = document.getElementById("email");
const eyeImage = document.getElementById("eye-image");
const signUpBtn = document.getElementsByClassName("sign-up-btn")[0];
const passwordInput = document.getElementById("password");

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

function inputCountryValue() {
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
  inputCountryValue();
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


