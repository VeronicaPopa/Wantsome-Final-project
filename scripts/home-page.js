const menuBar = document.getElementsByClassName("menu")[0];
function menuList() {
  const ul = document.getElementsByTagName("ul")[0];
  ul.classList.toggle("active");
}
menuBar.addEventListener("click", menuList);




const navbar = document.getElementsByClassName("navbar")[0];
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function() {myFunction()};




let products = [
  {
    image : "../assets/images/aromatica_3.jpg",
    brand : "Aromatica",
    description : "Lavender Relaxing Massage&Body Oil 100 ml",
    price : "201"
  },
  {
    image : "../assets/images/dr._ceuracle.jpg",
    brand : "Dr.Ceuracle",
    description : "PRO Balance Morning ENZYME Wash 50 g",
    price : "223"
  },
  {
    image : "../assets/images/by_wishtrend_1.jpg",
    brand : "BY WISHTREND",
    description : "Acid-Duo Hibiscus 63 Cream 50ml",
    price : "16,75"
  },
  {
    image : "../assets/images/by_wishtrend_2.jpg",
    brand : "By Wishtrend",
    description : "Teca 1% Barrier Cream",
    price : "20.69"
  },
  {
    image : "../assets/images/j_msolution.jpg",
    brand : "JMsolution",
    description : "Glow Luminous Flower Firming Eye Mask",
    price : "1.72"
  },
  {
    image : "../assets/images/manyo_factory_26.jpg",
    brand : "Manyo Factory",
    description : "Herb Green Cleansing Oil 200 ml",
    price : "24.59"
  },
  {
    image : "../assets/images/manyo_factory_29.jpg",
    brand : "Manyo Factory",
    description : "Cleansing Soda Foam 150 ml",
    price : "13.45"
  },
  {
    image : "../assets/images/petitfee&_koelf_23.jpg",
    brand : "Petitfée",
    description : "Hydrogel Angel Wings Gold Neck Pack",
    price : "1.13"
  },
  {
    image : "../assets/images/pyunkang_yul.jpg",
    brand : "Pyunkang Yul",
    description : "Moisture Ampoule 100ml",
    price : "23.90"
  },
  {
    image : "../assets/images/so_natural_15.jpg",
    brand : "So Natural",
    description : "Real Matte Make Up Setting Fixx 75ml",
    price : "13.40"
  },
  {
    image : "../assets/images/the_oozoo_2.png",
    brand : "The Oozoo",
    description : "Face In-Shot Mask Nutrient 2.8 ml",
    price : "5.47"
  },
  {
    image : "../assets/images/village11_factory_9.jpg",
    brand : "Village 11 Factory",
    description : "Blue Chamomile Cream 300ml",
    price : "11.58"
  }
]
  
function addProductContainer() {
  for (let product of products) {
    const productsCatalog = document.getElementsByClassName("products-catalog")[0];
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
    productName.textContent = product.brand + " "+ product.description;
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
addProductContainer();



var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);