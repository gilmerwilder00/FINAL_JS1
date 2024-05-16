// import {
//   printIcons,
//   printNavBar,
//   printFooter,
//   options,
// } from "./functions/printLayout.js";

import {
  printIcons,
  printNavBar,
  printFooter,
} from "./functions/printLayout.js";
import { printProductCards } from "./functions/printProductCards.js";
import { printFilter } from "./functions/printFilter.js";
// import { products } from "./products.js";

printIcons();
// printNavBar(options, "navbar");
// printFooter(options, "footer");

// sort productos

// const sortProducts = products.sort((productA, productB) =>
//   productA.title.localeCompare(productB.title)
// );

// const sortProducts = products.sort(
//   (productA,productB) => productB.title.localeCompare(productA.title)
// );

// printProductCards(products, "products");
// printProductCards(sortProducts, "products");

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





// Actividad 1: Consumo con then/catch

document.addEventListener("DOMContentLoaded", function () {
  // Actividad 1
  // fetchOptions();
  // fetchProducts();
  renderIcons();
  // Actividad 2
  loadNavigationAndFooter();
  loadProductDetails();
});

function fetchOptions() {

  fetch("options.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      printNavBar(data.options, "navbar");
      printFooter(data.options, "footer");
      // renderOptions(data);
    })
    .catch((error) => console.error("Error fetching options:", error));

}

function fetchProducts() {
  fetch("products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const sortProducts = data.products.sort((productA, productB) =>
        productA.title.localeCompare(productB.title)
      );

      printProductCards(sortProducts, "products");
      // renderProducts(data)
    })
    .catch((error) => console.error("Error fetching products:", error));
}



// Actividad 2: Consumo con async/await

async function loadNavigationAndFooter() {
  try {
    const optionsResponse = await fetch("options.json");
    if (!optionsResponse.ok) {
      throw new Error("Failed to fetch navigation and footer data");
    }
    const data = await optionsResponse.json();
    // renderOptions(options);
    console.log(data);
    printNavBar(data.options, "navbar");
    printFooter(data.options, "footer");

  } catch (error) {
    console.log("BANDERA");
    console.error("Error loading options:", error);
  }
}

async function loadProductDetails() {
  try {
    const productsResponse = await fetch("products.json");
    if (!productsResponse.ok) {
      throw new Error("Failed to fetch product details");
    }
    const data = await productsResponse.json();

    // renderProductDetails(products);

    console.log(data);

    const sortProducts = data.products.sort((productA, productB) =>
      productA.title.localeCompare(productB.title)
    );

    printProductCards(sortProducts, "products");

  } catch (error) {
    console.log("BANDERA 2");
    console.error("Error loading products:", error);
  }
}

// Llamar a renderIcons inicialmente para establecer la vista correcta al cargar
// document.addEventListener("DOMContentLoaded", renderIcons);
