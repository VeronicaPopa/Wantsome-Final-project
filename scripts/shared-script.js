
function registerAddProductsToFavorite(products) {
  for (let i = 0; i < products.length; i++) {
    const favlistButton = document.getElementsByClassName("favButton")[i];
    const favListIcon = document.getElementsByClassName("fav-icon")[i];
    registerAddProductToFavorits(favlistButton, favListIcon);
  };
};

function registerAddProductToFavorits(favlistButton, favListIcon) {
  favlistButton.addEventListener("click", function (event) {
    console.log('click add favorite');
    event.stopPropagation();
    if (favListIcon.classList.contains("far")) {
      favListIcon.classList.replace("far", "fas");
      favListIcon.style.color = "rgb(255, 181, 198)";
    } else {
      favListIcon.classList.replace("fas", "far");
      favListIcon.style.color = "rgb(214, 214, 214)";
    }
  });
}


function registerAddToCartEvents(products) {
  for (let i = 0; i < products.length; i++) {
    const wishListIcon = document.getElementsByClassName("cart")[i];
    const wishListButton = document.getElementsByClassName("wish-list-btn")[i];

    wishListButton.addEventListener("click", function (event) {
      event.stopPropagation();

      if (wishListIcon.classList.contains("fa-shopping-cart")) {
        wishListIcon.classList.replace("fa-shopping-cart", "fa-cart-plus");
        wishListIcon.style.color = "rgb(125, 210, 211)";
      }
      else {
        wishListIcon.classList.replace("fa-cart-plus", "fa-shopping-cart");
        wishListIcon.style.color = "rgb(255, 181, 198)";
      }
    });
  };
};

function registerNavigateToProductEvent(products) {
  for (let i = 0; i < products.length; i++) {
    const productElement = document.getElementsByClassName("product-container")[i];
    const productId = products[i].id;
    productElement.addEventListener("click", function (event) {
      console.log('click navigate');
      event.preventDefault();
      window.location.href = '../pages/product-page.html?productId=' + productId;
    })
  }
};

// variables for currency converter
const currencyRates = {
  EUR: { value: 1, symbol: "€" },
  USD: { value: 1.22, symbol: "$" },
  RON: { value: 4.93, symbol: "RON" }
}
let selectedRate = "EUR";
const currencySelect = document.getElementById("currencySelect");

function registerCurrencyChangeClick(displayFunc) {
  currencySelect.addEventListener('change', (event) => {
    selectedRate = event.target.value;
    displayFunc();
  });
}

function searchItem() {
  const searchBar = document.getElementById("search-bar");

  searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = products.filter((product) => {
      return (
        product.brand.toLowerCase().includes(searchString) ||
        product.productName.toLowerCase().includes(searchString)) ||
        product.details.toLowerCase().includes(searchString);
    });
    displayProducts(filteredCharacters);
  });
}

const instagram = document.getElementsByClassName('instagram')[0];
instagram.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'http://instagram.com';
})

const facebookLinks = document.getElementsByClassName('facebook');
for (let i = 0; i < facebookLinks.length; i++) {
  facebookLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'http://facebook.com';
  })  
}
