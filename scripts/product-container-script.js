// -----visibility favIcon-----
// function makeFaveIconVisible() {
//   for (let i = 0; i < products.length; i++) {
//     const productContainer = document.getElementsByClassName("product-container")[i]
//     const favListButton = document.getElementsByClassName("favButton")[i];
//     productContainer.addEventListener("mouseover", function() {
//       if (favListButton.classList.contains("visibility")) {
//         favListButton.classList.remove("visibility");
//       };
//     });
//     productContainer.addEventListener("mouseout", function() {
//       favListButton.classList.add("visibility");

//     })
//   };
// };
// makeFaveIconVisible();


function addToFavorites() {
  for (let i = 0; i < products.length; i++) {
    const favlistButton = document.getElementsByClassName("favButton")[i];
    const favListIcon = document.getElementsByClassName("fav-icon")[i];
    favlistButton.addEventListener("click", function () {
      if (favListIcon.classList.contains("far")) {
        favListIcon.classList.replace("far", "fas");
        favListIcon.style.color = "rgb(255, 181, 198)";
      } else {
        favListIcon.classList.replace("fas", "far");
        favListIcon.style.color = "rgb(214, 214, 214)";
      }
    });
  };
}
addToFavorites();



  for (let i = 0; i < products.length; i++) {
    const wishListIcon = document.getElementsByClassName("cart")[i];
    const wishListButton = document.getElementsByClassName("wish-list-btn")[i];

    // const counterContainer = document.getElementsByClassName("counter-cart");
    // let counterCart = 0;
    // counterCart += 1;


    wishListButton.addEventListener("click", function () {
      // counterCart += 1;

      // console.log(counterCart);


      if (wishListIcon.classList.contains("fa-shopping-cart")) {

        // addToCart();
        wishListIcon.classList.replace("fa-shopping-cart", "fa-cart-plus");
        wishListIcon.style.color = "rgb(125, 210, 211)";
        // counterCart++; 
      }
      else {
        wishListIcon.classList.replace("fa-cart-plus", "fa-shopping-cart");
        wishListIcon.style.color = "rgb(255, 181, 198)";
      }
    });
  };
  function addToCart() {
    // const counterContainer = document.getElementsByClassName("counter-cart");
    let counterCart = 0;
    // counterContainer.textContent = counterCart;
    for (let i = 0; i < products.length; i++) {
      const wishListIcon = document.getElementsByClassName("cart")[i];

      wishListIcon.addEventListener("click", function() {
        counterCart += 1;

      })
      console.log(counterCart);


    }
    // counterCart++;
};
addToCart();
