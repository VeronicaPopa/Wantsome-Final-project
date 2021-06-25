let products = [
  {
    id: "1",
    image: "../assets/images/bb-creams/missha_39.jpg",
    brand: "Missha",
    productName: "Signature Wrinkle Fill-Up BB Cream",
    details: "44 ml",
    price: 27.68
  },
  {
    id: "2",
    image: "../assets/images/dr._ceuracle.jpg",
    brand: "Dr.Ceuracle",
    productName: "PRO Balance Morning ENZYME Wash",
    details: "50 g",
    price: 10.90
  },
  {
    id: "3",
    image: "../assets/images/by_wishtrend_1.jpg",
    brand: "BY WISHTREND",
    productName: "Acid-Duo Hibiscus 63 Cream",
    details: "50 ml",
    price: 16.75
  },
  {
    id: "4",
    image: "../assets/images/by_wishtrend_2.jpg",
    brand: "By Wishtrend",
    productName: "Teca 1% Barrier Cream",
    details: "",
    price: 20.69
  },
  {
    id: "5",
    image: "../assets/images/j_msolution.jpg",
    brand: "JMsolution",
    productName: "Glow Luminous Flower Firming Eye Mask",
    details: "",
    price: 1.72
  },
  {
    id: "6",
    image: "../assets/images/manyo_factory_26.jpg",
    brand: "Manyo Factory",
    productName: "Herb Green Cleansing Oil",
    details: "200 ml",
    price: 24.59
  },
  {
    id: "7",
    image: "../assets/images/manyo_factory_29.jpg",
    brand: "Manyo Factory",
    productName: "Cleansing Soda Foam",
    details: "150 ml",
    price: 13.45
  },
  {
    id: "8",
    image: "../assets/images/petitfee&_koelf_23.jpg",
    brand: "Petitfée",
    productName: "Hydrogel Angel Wings Gold Neck Pack",
    details: "",
    price: 1.13
  },
  {
    id: "9",
    image: "../assets/images/pyunkang_yul.jpg",
    brand: "Pyunkang Yul",
    productName: "Moisture Ampoule",
    details: "100 ml",
    price: 23.90
  },
  {
    id: "10",
    image: "../assets/images/so_natural_15.jpg",
    brand: "So Natural",
    productName: "Real Matte Make Up Setting Fixx",
    details: "75 ml",
    price: 13.40
  },
  {
    id: "11",
    image: "../assets/images/the_oozoo_2.png",
    brand: "The Oozoo",
    productName: "Face In-Shot Mask Nutrient",
    details: "2.8 ml",
    price: 5.47
  },
  {
    id: "12",
    image: "../assets/images/village11_factory_9.jpg",
    brand: "Village 11 Factory",
    productName: "Blue Chamomile Cream",
    details: "300 ml",
    price: 11.58
  },
  {
    id: "13",
    image: "../assets/images/bb-creams/dr._ceuracle_38.jpg",
    brand: "Dr.Ceuracle",
    productName: "Recovery BB Balm",
    details: "SPF 28 PA ++ 45 ml",
    price: 25.48
  },
  {
    id: "14",
    image: "../assets/images/bb-creams/dr._ceuracle_p_46.jpg",
    brand: "Dr.Ceuracle",
    productName: "Glow Fit Cushion",
    details: "SPF50+ PA+++ 01 Pale Beige 13 g",
    price: 20.82,
  },
  {
    id: "15",
    image: "../assets/images/bb-creams/dr._ceuracle_p_47.jpg",
    brand: "Dr.Ceuracle",
    productName: "Glow Fit Cushion",
    details: "SPF50+ PA+++ 02 Natural Beige 13 g",
    price: 20.82,
  },
  {
    id: "16",
    image: "../assets/images/bb-creams/dr._g_18.jpg",
    brand: "Dr.G",
    productName: "Radiance Dual Essence BB",
    details: "SPF50+ PA+++ 40g",
    price: 18.62,
  }
];



// function for slide
(function showSlides() {
  let counter = 1;
  setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);
})();

// currency converter
registerCurrencyChangeClick(() => displayProducts(products));

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
    productImage.setAttribute("alt", product.productName);
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
  registerNavigateToProductEvent(products);
  registerAddProductsToFavorite(products);
  registerAddToCartEvents(products);
}
displayProducts(products);

// Search Bar function
searchItem();