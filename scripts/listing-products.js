const menuBar = document.getElementsByClassName("menu")[0];
function menuList() {
  const ul = document.getElementsByTagName("ul")[0];
  ul.classList.toggle("active");
}
menuBar.addEventListener("click", menuList);

const navbar = document.getElementsByClassName("navbar")[0];
const sticky = navbar.offsetTop;

function createStickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function () { createStickyNav() };

let products = [
  {
    image: "../assets/images/bb-creams/dr._ceuracle_38.jpg",
    brand: "Dr.Ceuracle",
    productName: "Recovery BB Balm",
    details: "SPF 28 PA ++ 45 ml",
    price: "25.48"
  },
  {
    image: "../assets/images/bb-creams/dr._ceuracle_p_46.jpg",
    brand: "Dr.Ceuracle",
    productName: "Glow Fit Cushion",
    details: "SPF50+ PA+++ 01 Pale Beige 13 g",
    price: "20.82"
  },
  {
    image: "../assets/images/bb-creams/dr._ceuracle_p_47.jpg",
    brand: "Dr.Ceuracle",
    productName: "Glow Fit Cushion",
    details: "SPF50+ PA+++ 02 Natural Beige 13 g",
    price: "20.82"
  },
  {
    image: "../assets/images/bb-creams/dr._g_18.jpg",
    brand: "Dr.G",
    productName: "Radiance Dual Essence BB",
    details: "SPF50+ PA+++ 40g",
    price: "18.62"
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
    price: "17.59"
  },
  {
    image: "../assets/images/bb-creams/lapalette_161.jpg",
    brand: "Lapalette",
    productName: "Silky Tension Cover Pact Original White Horse",
    details: "SPF50+PA+++ №23, 12g* 2",
    price: "17.59"
  },
  {
    image: "../assets/images/bb-creams/missha_9.jpg",
    brand: "Missha",
    productName: "Signature Real Complete BB Cream",
    details: "SPF 25 PA+++ № 21 (Light Pink Beige) 45gr",
    price: "23.52"
  },
  {
    image: "../assets/images/bb-creams/missha_10.jpg",
    brand: "Missha",
    productName: "Perfect Cover BB Cream",
    details: "SPF 42 PA+++ № 25 20 ml",
    price: "8.82"
  },
  {
    image: "../assets/images/bb-creams/missha_11.jpg",
    brand: "Missha",
    productName: "Perfect Cover BB Cream",
    details: "SPF 42 PA+++ № 29 50 ml",
    price: "14.94"
  },
  {
    image: "../assets/images/bb-creams/missha_12.jpg",
    brand: "Missha",
    productName: "Perfect Cover BB Cream",
    details: "SPF 42 PA+++ № 29 50 ml",
    price: "14.94"
  },
  {
    image: "../assets/images/bb-creams/missha_11.jpg",
    brand: "Missha",
    productName: "Perfect Cover BB Cream",
    details: "SPF 42 PA+++ № 25 50 ml",
    price: "14.94"
  },
  {
    image: "../assets/images/bb-creams/missha_15.jpg",
    brand: "Missha",
    productName: "Perfect Cover BB Cream",
    details: "SPF 42 PA+++ № 21 (Light Beige) 50 ml",
    price: "14.94"
  },
  {
    image: "../assets/images/bb-creams/missha_38.jpg",
    brand: "Missha",
    productName: "Cho Bo Yang BB Cream",
    details: "Spf30/pa++ № 21 50 ml",
    price: "27.93"
  },
  {
    image: "../assets/images/bb-creams/missha_39.jpg",
    brand: "Missha",
    productName: "Signature Wrinkle Fill-Up BB Cream",
    details: "SPF37 PA++ № 21 44 ml",
    price: "27.68"
  },
  {
    image: "../assets/images/bb-creams/missha_91.jpg",
    brand: "Missha",
    productName: "Signature Real Complete BB Cream",
    details: " SPF25/PA++ 45g N23",
    price: "23.52"
  },
  {
    image: "../assets/images/bb-creams/mizon_5.jpg",
    brand: "Mizon",
    productName: "Snail Repair Intensive BB Cream",
    details: "SPF50+ РА+++ №31 50ml",
    price: "9.06"
  },
  {
    image: "../assets/images/bb-creams/missha_382jpg.jpeg",
    brand: "Missha",
    productName: "Cho Bo Yang BB Cream",
    details: "Spf30/pa++ № 21 50 ml",
    price: "27.93"
  },
  {
    image: "../assets/images/bb-creams/mizon_28.jpg",
    brand: "Mizon",
    productName: "Watermax Moisture BB Cream",
    details: "SPF 30 PA+++ 50 ml",
    price: "11.27"
  },
  {
    image: "../assets/images/bb-creams/mizon_47.jpg",
    brand: "Mizon",
    productName: "Snail Repair Intensive BB Cream",
    details: "SPF50+ РА+++ №21, 20ml",
    price: "5.39"
  },
  {
    image: "../assets/images/bb-creams/mizon_48.jpg",
    brand: "Mizon",
    productName: "Snail Repair Intensive BB Cream",
    details: "SPF50+ РА+++ №23, 20ml",
    price: "5.39"
  },
  {
    image: "../assets/images/bb-creams/purito_1.jpg",
    brand: "Purito",
    productName: "Cica Clearing BB cream",
    details: "№23 30ml",
    price: "12.98"
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
    productPrice.textContent = product.price + " " + "€";
    priceContainer.appendChild(productPrice);

    const wishListBtn = document.createElement("div");
    wishListBtn.classList.add("wish-list-btn");
    priceContainer.appendChild(wishListBtn);

    const wishListIcon = document.createElement("i");
    wishListIcon.classList.add("fas");
    wishListIcon.classList.add("fa-shopping-bag");
    wishListBtn.appendChild(wishListIcon);
  }
}

// function generateFilterByBrand(products) {
//   const filterBrandForm = document.getElementsByClassName("filter-by-brand");
//   idCount = 1;
//   let idGenerator = "name" + idCount;
//   for (let product of products) {
//     idCount = idCount++;
//     const input = document.createElement("input");
//     filterBrandForm.appendChild(input);
//   }
// }
// generateFilterByBrand(products);

function generateFilter(selectId, objectKey) {
  const values = new Set(products.map((product) => product[objectKey]));
  const filterForm = document.getElementById(selectId);
  let idGenerator = 1;

  for (let value of values) {
    const id = idGenerator + 1;
    const input = document.createElement("input");
    const breakLine = document.createElement("br");
    const label = document.createElement("label");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "name" + id);
    input.setAttribute("value", value);
    input.setAttribute("name", objectKey);
    label.setAttribute("for", "name" + id);
    label.innerHTML = " " + value;
    filterForm.appendChild(input);
    filterForm.appendChild(label);
    filterForm.appendChild(breakLine);
    console.log(input);
  }
}

generateFilter("brand", "brand");
generateFilter("name", "productName");





const filterOptions = document.querySelectorAll("[type = checkbox]");
let filterBrandCriterias = [];
let filterProductNameCriterias = [];
displayProducts(products);
registerChangeEvent();

function registerChangeEvent() {
  for (let filterOption of filterOptions) {
    filterOption.addEventListener("change", function () {
      getSelectedFilter();
      const filteredProductsByBrand = filterProducts(filterBrandCriterias, products);
      const filteredProductsByProductName = filterProducts(filterProductNameCriterias, filteredProductsByBrand);
      displayProducts(filteredProductsByProductName);
    })
  }
}

function getSelectedFilter() {
  filterBrandCriterias = [];
  filterProductNameCriterias = [];
  let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
  for (let checkbox of markedCheckbox) {
    const filterCriteria = {
      propName: checkbox.name,
      propValue: checkbox.value
    }
    if (filterCriteria.propName === "brand") {
      filterBrandCriterias.push(filterCriteria);
    }
    if (filterCriteria.propName === "productName")
      filterProductNameCriterias.push(filterCriteria);
  }
}

function filterProducts(filterCriterias, partialProducts) {
  let displayedProducts = [];

  if (filterCriterias.length === 0) {
    return partialProducts;
  }

  for (let filterCriteria of filterCriterias) {
    const filteredProducts = filterByProperty(filterCriteria.propName, filterCriteria.propValue, partialProducts);
    displayedProducts = displayedProducts.concat(filteredProducts);
  }

  return displayedProducts;
}

function filterByProperty(filterPropName, filterValue, partialProducts) {
  const filteredProducts = partialProducts.filter(product => product[filterPropName] === filterValue);

  return filteredProducts;
}

