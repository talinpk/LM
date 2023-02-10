const button = document.querySelector("#button");
const image = document.querySelector("#image");

button.addEventListener("click", function() {
  if (image.src.endsWith("default.jpg")) {
    image.src = "Screenshot_1.png";
    image.alt = "Nova imagem";
  } else {
    image.src = "Screenshot_2.png";
    image.alt = "Padrão";
  } 
});