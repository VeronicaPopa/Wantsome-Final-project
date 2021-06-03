
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
});



let products = [
  {
    image: "../assets/images/aromatica_3.jpg",
    brand: "Aromatica",
    productName: "Lavender Relaxing Massage&Body Oil",
    details: "100 ml",
    price: "9.83"
  },
  {
    image: "../assets/images/dr._ceuracle.jpg",
    brand: "Dr.Ceuracle",
    productName: "PRO Balance Morning ENZYME Wash",
    details: "50 g",
    price: "10.90"
  },
  {
    image: "../assets/images/by_wishtrend_1.jpg",
    brand: "BY WISHTREND",
    productName: "Acid-Duo Hibiscus 63 Cream",
    details: "50 ml",
    price: "16.75"
  },
  {
    image: "../assets/images/by_wishtrend_2.jpg",
    brand: "By Wishtrend",
    productName: "Teca 1% Barrier Cream",
    details: "",
    price: "20.69"
  },
  {
    image: "../assets/images/j_msolution.jpg",
    brand: "JMsolution",
    productName: "Glow Luminous Flower Firming Eye Mask",
    details: "",
    price: "1.72"
  },
  {
    image: "../assets/images/manyo_factory_26.jpg",
    brand: "Manyo Factory",
    productName: "Herb Green Cleansing Oil",
    details: "200 ml",
    price: "24.59"
  },
  {
    image: "../assets/images/manyo_factory_29.jpg",
    brand: "Manyo Factory",
    productName: "Cleansing Soda Foam",
    details: "150 ml",
    price: "13.45"
  },
  {
    image: "../assets/images/petitfee&_koelf_23.jpg",
    brand: "Petitfée",
    productName: "Hydrogel Angel Wings Gold Neck Pack",
    details: "",
    price: "1.13"
  },
  {
    image: "../assets/images/pyunkang_yul.jpg",
    brand: "Pyunkang Yul",
    productName: "Moisture Ampoule",
    details: "100 ml",
    price: "23.90"
  },
  {
    image: "../assets/images/so_natural_15.jpg",
    brand: "So Natural",
    productName: "Real Matte Make Up Setting Fixx",
    details: "75 ml",
    price: "13.40"
  },
  {
    image: "../assets/images/the_oozoo_2.png",
    brand: "The Oozoo",
    productName: "Face In-Shot Mask Nutrient",
    details: "2.8 ml",
    price: "5.47"
  },
  {
    image: "../assets/images/village11_factory_9.jpg",
    brand: "Village 11 Factory",
    productName: "Blue Chamomile Cream",
    details: "300 ml",
    price: "11.58"
  }
]

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


// function addToFavorites() {
//   for (let i = 0; i < products.length; i++) {
//     const favlistButton = document.getElementsByClassName("favButton")[i];
//     const favListIcon = document.getElementsByClassName("far")[i];
//     favlistButton.addEventListener("click", function() {
//         favListIcon.classList.replace("far", "fas");
//         favListIcon.style.color = "rgb(255, 181, 198)";
//         favlistButton.style.display = "block";
//   });
//   };  
// }
// addToFavorites();

// function addToCart() {
//   for (let i = 0; i < products.length; i++) {
//     const wishListIcon = document.getElementsByClassName("cart")[i];
//     const wishListButton = document.getElementsByClassName("wish-list-btn")[i];
//     wishListButton.addEventListener("click", function() {
//       wishListIcon.classList.replace("fa-shopping-cart", "fa-cart-plus");
//       wishListIcon.style.color = "rgb(125, 210, 211)";

//     });
//   };
// };
// addToCart();


// Search Bar function

const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredCharacters = products.filter((product) => {
    return (
      product.brand.toLowerCase().includes(searchString) ||
      product.productName.toLowerCase().includes(searchString)) ||
      product.details.toLowerCase().includes(searchString);
    ;
  })
  displayProducts(filteredCharacters);
})


// -------------function for slides-----------
let counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
