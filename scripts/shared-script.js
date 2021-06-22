
function registerAddToFavoritesEvents(products) {
  for (let i = 0; i < products.length; i++) {
    const favlistButton = document.getElementsByClassName("favButton")[i];
    const favListIcon = document.getElementsByClassName("fav-icon")[i];
    favlistButton.addEventListener("click", function (event) {
      event.stopPropagation();
      if (favListIcon.classList.contains("far")) {
        favListIcon.classList.replace("far", "fas");
        favListIcon.style.color = "rgb(255, 181, 198)";
      } else {
        favListIcon.classList.replace("fas", "far");
        favListIcon.style.color = "rgb(214, 214, 214)";
      }
    });
  };
};

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
      event.preventDefault();
      window.location.href = '../pages/product-page.html?productId=' + productId;
    })
  }
};

const currencyRates = {
  EUR: { value: 1, symbol: "€" },
  USD: { value: 1.22, symbol: "$" },
  RON: { value: 4.93, symbol: "RON" }
}

let selectedRate = "EUR";
const currencySelect = document.getElementById("currencySelect");