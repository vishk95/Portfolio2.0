// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementById("navigation-bar");
const headerButton = document.getElementById("headerButton");

const svgCircle = document.getElementById("headerCircle");

let centerX = headerButton.offsetLeft + headerButton.offsetWidth / 2;
let centerY = headerButton.offsetTop + headerButton.offsetHeight / 2;

svgCircle.setAttribute("cx", centerX);
svgCircle.setAttribute("cy", centerY);

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

headerButton.addEventListener("mouseover", function( event ) {
  svgCircle.setAttribute("r", "4rem");
}, false);

headerButton.addEventListener("mouseleave", function( event ) {
  svgCircle.setAttribute("r", "110%");
}, false);
