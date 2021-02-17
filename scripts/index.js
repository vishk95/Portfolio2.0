
const headerButton = document.getElementById("headerButton");

const svgCircle = document.getElementById("headerCircle");

let centerX = headerButton.offsetLeft + headerButton.offsetWidth / 2;
let centerY = headerButton.offsetTop + headerButton.offsetHeight / 2;

function setSvgCenter() {
  svgCircle.setAttribute("cx", centerX);
  svgCircle.setAttribute("cy", centerY);
}
setSvgCenter();

headerButton.addEventListener("mouseover", function( event ) {
  svgCircle.setAttribute("r", "5rem");
  setSvgCenter();
}, false);

headerButton.addEventListener("mouseleave", function( event ) {
  svgCircle.setAttribute("r", "120%");
  setSvgCenter();
}, false);
