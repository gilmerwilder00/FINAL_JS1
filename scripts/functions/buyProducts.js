import { printCartCards } from "./printCartCards.js";
import { printCartTotal } from "./printCartTotal.js";

// export function clearCart() {
//   let cartproducts = [];
//   localStorage.setItem("cart", JSON.stringify(cartproducts));
//   printCartCards(cartproducts, "productscart");
//   printCartTotal(cartproducts, "total");
// }

export function clearCart() {
  
  const storage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart"))  : [];

  // Si no hay productos en el carrito (storage)
  if(storage.length === 0){
    Swal.fire({
      title: "Aviso",
      text: "No hay ningún producto en el carrito",
      icon: "info",
      iconColor: "#ff3b3c",
      confirmButtonColor: "#ff3b3c",
    });
    return;
  }


  Swal.fire(
    
    {
    title: "Validación",
    text: "¿Esta seguro que desea finalizar la compra?",
    icon: "question",
    // iconColor: "#ff3b3c",
    showCloseButton: true,

    // confirm
    showConfirmButton: true,
    confirmButtonText: "Sí",
    confirmButtonColor: "green",

    // deny
    showDenyButton: true,
    denyButtonText: "No",
    denyButtonColor: "#ff3b3c",
    
    }

).then((result) => {

    // Si se dió click al botón confirmación
    if (result.isConfirmed) {
      let cartproducts = [];
      localStorage.setItem("cart", JSON.stringify(cartproducts));
      printCartCards(cartproducts, "productscart");
      printCartTotal(cartproducts, "total");
    }

    // Si se dio click al botón de negación
    if (result.isDenied) {
      Swal.fire({
        title: "Aviso",
        text: "Puedes seguir comprando.",
        icon: "info",
      });
    }

  });

}
