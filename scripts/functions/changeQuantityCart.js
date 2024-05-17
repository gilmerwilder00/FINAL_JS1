import { printCartTotal } from "./printCartTotal.js";

// export function changeQuantityCart(event) {
//   let cartproducts = JSON.parse(localStorage.getItem("cart"));
//   let one = cartproducts.find((each) => each.id === event.target.id);
//   one.quantity = event.target.value;
//   printCartTotal(cartproducts, "total");
// }

export function changeQuantityCart(event) {
  let cartproducts = JSON.parse(localStorage.getItem("cart"));
  let one = cartproducts.find((each) => each.id === event.target.id);
  one.quantity = event.target.value;
  printCartTotal(cartproducts, "total");

  // Cálculo del total 
  let total = 0;
  total = cartproducts.reduce(
    (acc , actProduct) =>  acc + actProduct.price * actProduct.quantity ,
    0
  );

  Swal.fire(
    {
    title: "Aviso",
    text: `Se ha actualizado el total a : ${total}`,
    icon: "info",
    position: "top-end",  // Posición de la alerta
    timer: 3000,  // Tiempo en milisegundos antes de que se cierre automáticamente
    showConfirmButton: false,  // Oculta el botón de confirmación
    toast: true  // Estilo de notificación de tipo 'toast'
    }
);

}

// Posiciones de la alertas

// Center (default): center
// Top: top
// Top Start (top left): top-start
// Top End (top right): top-end
// Center Start (middle left): center-start
// Center End (middle right): center-end
// Bottom: bottom
// Bottom Start (bottom left): bottom-start
// Bottom End (bottom right): bottom-end


window.changeQuantityCart = changeQuantityCart;