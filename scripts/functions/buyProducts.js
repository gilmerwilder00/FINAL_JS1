import { printCartCards } from "./printCartCards.js";
import { printCartTotal } from "./printCartTotal.js";

export function clearCart() {
  let cartproducts = [];
  localStorage.setItem("cart", JSON.stringify(cartproducts));
  printCartCards(cartproducts, "productscart");
  printCartTotal(cartproducts, "total");
}
