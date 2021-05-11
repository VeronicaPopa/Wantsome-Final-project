const menuBar = document.getElementsByClassName("menu")[0];
function menuList() {
  const ul = document.getElementsByTagName("ul")[0];
  ul.classList.toggle("active");
}
menuBar.addEventListener("click", menuList);




const navbar = document.getElementsByClassName("navbar")[0];
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function() {stickyNavbar()};

// ------------------
// const productImages = document.getElementsByClassName("slider-container")[0];
// const stickyContainer = productImages.offsetTop;

// function stickyImage() {
//   if (window.pageYOffset >= sticky) {
//     productImages.classList.add("stickyContainer")
//   } else {
//     productImages.classList.remove("stickyContainer");
//   }
// }
// window.onscroll = function() {stickyImage()};



// ----------Slide images ----------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("my-slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10); 
  value = isNaN(value)? 0 : value;
  value ++;
  input.value = value;
}
function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10); 
  if (value > 1) {
    value = isNaN(value)? 0 : value;
    value --;
    input.value = value;
  }
}


