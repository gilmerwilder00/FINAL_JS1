import { products } from "../products.js";

// export function saveProd(id) {
//   const found = products.find((each) => each.id === id);
//   const product = {
//     id: id,
//     title: found.title,
//     price: found.price,
//     description: found.description,
//     image: found.images[0],
//     color: document.querySelector("#color-" + id).value,
//     quantity: Number(document.querySelector("#quantity-" + id).value),
//   };

//   const storage = localStorage.getItem("cart");

//   if (storage) {
//     const parseStorage = JSON.parse(storage);
//     parseStorage.push(product);
//     const stringifyProducts = JSON.stringify(parseStorage);
//     localStorage.setItem("cart", stringifyProducts);
//   } else {
//     const stringifyProduct = JSON.stringify([product]);
//     localStorage.setItem("cart", stringifyProduct);
//   }
// }

export function saveProd(id) {

  const found = products.find((each) => each.id === id);

  const product = {
    id: id,
    title: found.title,
    price: found.price,
    description: found.description,
    image: found.images[0],
    color: document.querySelector("#color-" + id).value,
    quantity: Number(document.querySelector("#quantity-" + id).value),
  };

  // Actividad 1: Alerta al Agregar un producto al carrito

  const storage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  console.log(storage);  

  // Se valida si el producto ya se encuentra en el localStorage
  if (storage.some((element) => element.id === product.id)) {
    Swal.fire({
      title: "Aviso",
      text: "Este producto ya se encuentra agregado en el carrito.",
      icon: "info",
      iconColor: "#ff3b3c",
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#ff3b3c",
    });
  } else {
    storage.push(product);
    localStorage.setItem("cart", JSON.stringify(storage));

    Swal.fire({
      title: "Confirmación",
      text: "Se ha agregado el producto al carrito de manera correcta.",
      icon: "success",
      // iconColor: "#ff3b3c",
      showCloseButton: true,
      // showConfirmButton: true,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "green",
    });
  }
}

window.saveProd = saveProd;
