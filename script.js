document.addEventListener("DOMContentLoaded", function() {
    const circle = document.getElementById("circle");
    const colorPicker = document.getElementById("colorPicker");
    const widthRange = document.getElementById("width");
    const heightRange = document.getElementById("height");
    const toggleButton = document.getElementById("toggleButton");
  
    colorPicker.addEventListener("change", function() {
      circle.style.backgroundColor = colorPicker.value;
    });
  
    widthRange.addEventListener("input", function() {
      circle.style.width = widthRange.value + "px";
    });
  
    heightRange.addEventListener("input", function() {
      circle.style.height = heightRange.value + "px";
    });
  
    toggleButton.addEventListener("click", function() {
      if (circle.style.display === "none") {
        circle.style.display = "block";
        toggleButton.textContent = "Ocultar";
      } else {
        circle.style.display = "none";
        toggleButton.textContent = "Mostrar";
      }
    });
  });
  