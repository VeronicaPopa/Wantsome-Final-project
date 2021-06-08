
// ----------Slide images ----------
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("my-slides");

  if (n > x.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function increaseCount(a, b) {
  const input = b.previousElementSibling;
  let value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}
function decreaseCount(a, b) {
  const input = b.nextElementSibling;
  let value = parseInt(input.value, 10);

  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}


const currencyRates = {
  EUR: { value: 1, symbol: "€" },
  USD: { value: 1.22, symbol: "$" },
  RON: { value: 4.93, symbol: "RON" }
}

let selectedRate = "EUR";
const currencySelect = document.getElementById("currencySelect");

currencySelect.addEventListener("change", (event) => {
  selectedRate = event.target.value;
  displayProducts(products);
  displayCurrentProduct();
});

let currentProduct = 
  {
    brand: "Missha",
    productName: "Signature Wrinkle Fill-Up BB Cream",
    details: "SPF37 PA++ № 21 44 ml",
    price: 27.68 
  }

function displayCurrentProduct() {
  const currentProductName = document.getElementsByClassName("product-name")[0];
  currentProductName.textContent = (currentProduct.brand + " " + currentProduct.productName + " " + currentProduct.details);
  const productPrice = document.getElementsByClassName("product-price")[0];
  const rateInfo = currencyRates[selectedRate];
  productPrice.textContent = (currentProduct.price * rateInfo.value).toFixed(2) + " " + rateInfo.symbol;
  
}
displayCurrentProduct();


let products = [
  {
    image: "../assets/images/bb-creams/dr._ceuracle_38.jpg",
    brand: "Dr.Ceuracle",
    productName: "Recovery BB Balm",
    details: "SPF 28 PA ++ 45 ml",
    price: "25.48"
  },

  {
    image: "../assets/images/bb-creams/dr._jart.jpg",
    brand: "Dr.Jart+",
    productName: "Premium ВВ Beauty Balm",
    details: "SPF-45 Pa+++ 40 ml",
    price: "41.65"
  },
  {
    image: "../assets/images/bb-creams/holika_holika_4.jpg",
    brand: "Holika Holika",
    productName: "Shimmering Petit BB Cream",
    details: "30ml",
    price: "6.12"
  },
  {
    image: "../assets/images/bb-creams/holika_holika_5jpg.jpeg",
    brand: "Holika Holika",
    productName: "Bouncing Petit BB Cream",
    details: "30 ml",
    price: "6.12"
  },
  {
    image: "../assets/images/bb-creams/lapalette_17.jpg",
    brand: "Lapalette",
    productName: "Silky Tension Cover Pact Original White Horse",
    details: "SPF50+PA+++ №21, 12g* 2",
    price: 17.59
  }

];
function displayProducts(listOfProducts) {
  const productsCatalog = document.getElementsByClassName("products-catalog")[0];
  productsCatalog.innerHTML = " ";
  for (let product of listOfProducts) {
    let productContainer = document.createElement("div");
    productContainer.classList.add("product-container");
    productsCatalog.appendChild(productContainer);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    productContainer.appendChild(imgContainer);
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.setAttribute("alt", product.description);
    imgContainer.appendChild(productImage);

    const mainInfoContainer = document.createElement("div");
    mainInfoContainer.classList.add("main-info-container");
    productContainer.appendChild(mainInfoContainer);
    const productName = document.createElement("p");
    productName.classList.add("name");
    productName.textContent = product.brand + " " + product.productName + " " + product.details;
    mainInfoContainer.appendChild(productName);

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");
    mainInfoContainer.appendChild(priceContainer);
    const productPrice = document.createElement("p");
    productPrice.classList.add("price");
    const rateInfo = currencyRates[selectedRate];
    productPrice.textContent = (product.price * rateInfo.value).toFixed(2) + " " + rateInfo.symbol;
    priceContainer.appendChild(productPrice);

    const wishListBtn = document.createElement("div");
    wishListBtn.classList.add("wish-list-btn");
    priceContainer.appendChild(wishListBtn);

    const wishListIcon = document.createElement("i");
    wishListIcon.classList.add("cart");
    wishListIcon.classList.add("fas");
    wishListIcon.classList.add("fa-shopping-cart");
    wishListBtn.appendChild(wishListIcon);

    const favListButton = document.createElement("span");
    favListButton.classList.add("favButton");
    imgContainer.appendChild(favListButton);

    const favListIcon = document.createElement("i");
    favListIcon.classList.add("fav-icon");

    favListIcon.classList.add("far");
    favListIcon.classList.add("fa-heart");
    favListButton.appendChild(favListIcon);
  }
}
displayProducts(products);


function sendToFavorites() {
  const favlistButton = document.getElementsByClassName("send-to-favorites")[0];
  const favListIcon = document.getElementsByClassName("heart-icon")[0];
  favlistButton.addEventListener("click", function () {
    if (favListIcon.classList.contains("far")) {
      favListIcon.classList.replace("far", "fas");
      favListIcon.style.color = "rgb(255, 181, 198)";
    } else {
      favListIcon.classList.replace("fas", "far");
      favListIcon.style.color = "rgb(214, 214, 214)";
    };
  });
}
sendToFavorites();

function addToCartMainProduct() {
  const addToCartBtn = document.getElementsByClassName("add-to-bag")[0];
  const cartIcon = document.getElementsByClassName("cart-icon")[0];
  addToCartBtn.addEventListener("click", function () {
    if (cartIcon.classList.contains("fa-cart-arrow-down")) {
      cartIcon.classList.replace("fa-cart-arrow-down", "fa-cart-plus");
      // cartIcon.style.color = "rgb(125, 210, 211)";
    }
    else {
      cartIcon.classList.replace("fa-cart-plus", "fa-cart-arrow-down");
      // cartIcon.style.color = "rgb(255, 181, 198)";
    }
  });
};
addToCartMainProduct();

