import {printIcons, printNavBar, printFooter, options} from "./functions/printLayout.js";
import { printProductCards } from "./functions/printProductCards.js";
import { printFilter } from "./functions/printFilter.js";
import { products } from "./products.js";

printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

// sort productos

const sortProducts = products.sort(
  (productA,productB) => productA.title.localeCompare(productB.title) 
);

// const sortProducts = products.sort(
//   (productA,productB) => productB.title.localeCompare(productA.title) 
// );


// let str1 = "apple";
// let str2 = "banana";

// console.log(str1.localeCompare(str2)); // -1, porque "apple" viene antes que "banana"
// console.log(str2.localeCompare(str1)); // 1, porque "banana" viene después que "apple"
// console.log(str1.localeCompare("apple")); // 0, porque las cadenas son iguales



// printProductCards(products, "products");
printProductCards(sortProducts, "products");


const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", printFilter);

// Initialize isOnline en localStorage
if (localStorage.getItem("isOnline") === null) {
  localStorage.setItem("isOnline", "false");
}

function renderIcons() {
  // console.log("dentro de render icons");
  const isOnline = localStorage.getItem("isOnline") === "true";
  // console.log(isOnline);
  // El el archivo printLayout.js se agregó el iconoUsuario
  // En el archivo layout.css se agregaorn los estilos para el nuevo ícono.
  const iconoUsuario = document.getElementById("login");
  const iconoCarrito = document.getElementById("cart");
  const iconoPerfil = document.getElementById("profile");

  // en el archivo index.css se agrego la regla de la clase hidden para que oculte el elemento
  if (isOnline) {
    iconoUsuario.classList.add("hidden");
    iconoCarrito.classList.remove("hidden");
    iconoPerfil.classList.remove("hidden");
  } else {
    iconoUsuario.classList.remove("hidden");
    iconoCarrito.classList.add("hidden");
    iconoPerfil.classList.add("hidden");
  }
}

// Asignar eventos a los iconos
document.getElementById("login").addEventListener("click", function () {
  console.log("dentro de evento click del boton login");
  localStorage.setItem("isOnline", "true");
  renderIcons();
});

document.getElementById("profile").addEventListener("click", function () {
  localStorage.setItem("isOnline", "false");
  renderIcons();
});

// Llamar a renderIcons inicialmente para establecer la vista correcta al cargar
document.addEventListener("DOMContentLoaded", renderIcons);
