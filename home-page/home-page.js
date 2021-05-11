let products = [
  {
    image : "../images/aromatica_3.jpg",
    brand : "Aromatica",
    description : "Lavender Relaxing Massage&Body Oil 100 ml",
    price : "201"
  },
  {
    image : "../images/dr._ceuracle.jpg",
    brand : "Dr.Ceuracle",
    description : "PRO Balance Morning ENZYME Wash 50 g",
    price : "223"
  }
]

const productsCatalog = document.getElementsByClassName("products-catalog")[0];
let productContainer = document.createElement("div");
productsCatalog.classList.add("product-container");
productsCatalog.appendChild(productContainer);