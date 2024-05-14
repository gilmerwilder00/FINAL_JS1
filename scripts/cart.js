import { hideSearch, printIcons, printNavBar, printFooter, options } from "./functions/printLayout.js";
import { printCartCards } from "./functions/printCartCards.js";
import { printCartTotal } from "./functions/printCartTotal.js";

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

let cartproducts = JSON.parse(localStorage.getItem("cart"));
if (!cartproducts) {
  cartproducts = [];
}
printCartCards(cartproducts, "productscart");
printCartTotal(cartproducts, "total");
