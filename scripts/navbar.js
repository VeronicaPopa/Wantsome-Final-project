// --------toggle menu for responsive design--------
const menuBar = document.getElementsByClassName("menu")[0];
function menuList() {
  const ul = document.getElementsByTagName("ul")[0];
  ul.classList.toggle("active");
}
menuBar.addEventListener("click", menuList);



// ----------sticky navbar--------------
const navbar = document.getElementsByClassName("navbar")[0];
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function () { stickyNavbar() };


