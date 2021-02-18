
const headerButton = document.getElementById("headerButton");

const svgCircle = document.getElementById("headerCircle");

function setSvgCenter() {
  let centerX = headerButton.offsetLeft + headerButton.offsetWidth / 2;
  let centerY = headerButton.offsetTop + headerButton.offsetHeight / 2;
  svgCircle.setAttribute("cx", centerX);
  svgCircle.setAttribute("cy", centerY);
  console.log(centerX, centerY)
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
