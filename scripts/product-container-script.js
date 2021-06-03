function addToFavorites() {
  for (let i = 0; i < products.length; i++) {
    const favlistButton = document.getElementsByClassName("favButton")[i];
    const favListIcon = document.getElementsByClassName("fav-icon")[i];
    favlistButton.addEventListener("click", function() {
        favListIcon.classList.replace("far", "fas");
        favListIcon.style.color = "rgb(255, 181, 198)";
        favlistButton.style.display = "block";
  });
  };  
}
addToFavorites();

function addToCart() {
  for (let i = 0; i < products.length; i++) {
    const wishListIcon = document.getElementsByClassName("cart")[i];
    const wishListButton = document.getElementsByClassName("wish-list-btn")[i];
    wishListButton.addEventListener("click", function() {
      wishListIcon.classList.replace("fa-shopping-cart", "fa-cart-plus");
      wishListIcon.style.color = "rgb(125, 210, 211)";

    });
  };
};
addToCart();
